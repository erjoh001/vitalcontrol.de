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
var Cc=[0,0,240,320];var BD=[0,0,240,40];var E6=[0,0,20,30];var Hq=[6,21,14,25];var
IT=[6,15,14,19];var Is=[6,9,14,13];var O2=[209,7,229,37];var P7=[0,40,240,320];var
P8=[0,228,240,298];var CQ=" ";var Fe=[0,40,240,280];var L1=[0,40,232,280];var P9=[
0,40,116,160];var J1=[114,40,230,160];var N$=[0,160,116,280];var P_=[116,160,232
,280];var MG=[0,280,116,400];var S9=[116,280,232,400];var UQ=[0,400,116,520];var
Z1=[116,400,232,520];var W1=[-1,520,115,640];var It=[232,40,240,280];var UR=[5,40
,235,120];var Z2=[120,140,210,230];var W2=[20,140,110,230];var Z3=[0,0,116,120];
var W3=[0,0,120,120];var Z4=[0,0,116,45];var Z5=[0,0,8,200];var US=[0,0,8,20];var
W4=[30,0,210,40];var O3=[0,0,40,40];var Z6=[7,8,200,40];var O4=[0,0,200,40];var Rl=[
6,1];var W5="ERROR: Invalid value for ItemHighlighting";var W6=[10,10,40,30];var
UT=[0,0,120,40];var Z7=[60,0,180,40];var Z8=[120,0,240,40];var W7=[0,0,100,40];var
W8=[83,0,157,40];var S_=[140,0,240,40];var UU=[0,0,20,40];var UV=[220,0,240,40];
var AcK=[0,0,300,30];var S$=[0,30,300,60];var Z9=[0,60,300,90];var Afz=[0,90,300
,120];var Z_=[0,100,300,110];var W9=[0,50,300,60];var Z$=[0,30,300,40];var W_="*";
var AhS=[40,40];var KY=[0,0,240,80];var AcL=[0,0,240,50];var Lv="Cap";var AhT=[0
,40,40,80];var An$=[200,40,240,80];var Oa=[30,40,210,80];var W$="--";var Aaa="%d";
var AhU="%m";var AhV="%Y";var AcM=" (";var UW=[0,0,232,80];var Aoa="Date";var Aob=[
48,40,88,78];var Aoc=[39,40,79,80];var Aod=[80,44,87,77];var Ak_=".";var AsT=[88
,44,120,77];var Ax0=[120,44,127,77];var Ax1=[127,44,191,77];var O5=[0,0,80,40];var
Rm="Text";var Ax2=[430,102,430,102];var UX=[0,0,240,240];var AsU=[232,0,240,240];
var Ax3=[0,10,240,240];var Ax4="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ax5="Unhandled option";
var Aoe=[0,80,240,280];var AfA="Unhandled animal list action";var Aof="Animal list content not handled.";
var IU=[0,40,240,80];var Aog="Set Selected";var Xa=" %%";var Aoh=[0,180,240,220];
var AsV=[82,127,167,150];var AsW="Group";var AsX=[77,91,167,124];var Aoi=[0,0,90
,33];var Aoj=[4,4,18,29];var AsY=[20,4,34,29];var Ax6=[36,4,50,29];var Ax7=[52,4
,66,29];var Ax8=[68,4,82,29];var AsZ="ERROR: Unhandled Device::SyncState";var Ax9=
":\n";var P$="{1}";var Ax_="{2}";var AVJ=[0,49,240,109];var AVK=[0,170,240,243];
var AVL=[0,110,240,170];var AVM=[20,243,220,268];var AHe=[30,8];var AHf="\u2265 ";
var AfB=[0,0,240,160];var Aok=[0,0,0,0];var AVN=[0,0,240,66];var AHg=[10,0,76,66
];var Ak$=[33,33];var AHh=[87,0,153,66];var AHi=[164,0,230,66];var AVO="No statistics available";
var AHj="in this environment.";var AVP=" fps";var AVQ="CPU: - %%";var AcN=[0,0,240
,120];var AVR=[130,0,237,20];var AVS=[20,0,120,20];var AHk=[0,20,240,40];var As0=[
40,20,100,40];var AHl=[100,20,240,40];var AHm=[0,40,240,60];var Ax$=[40,40,100,60
];var AHn=[100,40,240,60];var Aya=[0,60,50,80];var AVT=[100,60,240,80];var AVU=[
0,80,50,100];var AVV=[100,80,240,100];var AVW=[0,100,50,120];var AHo=[100,100,240
,120];var AVX=[5,5,15,15];var O6="%H";var Ayb="%M";var AVY="Time";var AVZ=[79,40
,119,78];var AV0=[125,40,164,80];var AV1=[86,40,126,80];var AV2=":";var AV3=[75,
40,115,80];var AHp=[0,0,240,150];var AHq=[60,0,155,40];var Aol=[30,0,65,40];var Ayc=[
60,0,100,40];var AV4=[88,0,128,40];var AV5=[60,0,71,40];var AV6=[60,0,74,40];var
AHr=[90,0,123,40];var AV7=[120,0,161,40];var AHs=[120,0,165,40];var AHt=[60,0,88
,40];var AHu=[60,0,95,40];var AV8="Did not expect iterator bigger than number of records";
var AHv=[20,0,240,20];var AV9=[0,38,240,40];var AHw=[0,0,8,4];var Rn=[0,0,240,280
];var Xb=[0,280,240,320];var AV_="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AV$="]";var AWa="ERROR: Cannot find closing bracket \'}\' in text [";var AWb=
"] opened at index ";var AWc="#";var AWd="ERROR: Invalid parameter: {";var AWe="}";
var AhW=[20,20];var AHx=[0,12];var AWf="ERROR: Not expected Application::FooterFocus, ";
var AWg="%M:%S";var AHy=[30,150,207,170];var AHz=[20,70,217,194];var Ayd="Unhandled item.";
var Qa=[0,80,240,120];var AWh="Unhandled Overlay Menu ";var AWi="Invalid bootloader message: ";
var AWj="Unknown USBState: ";var As1="Invalid fader";var AWk=[2,4,32,40];var AWl=[
29,4,80,40];var AWm=[120,4,200,40];var AWn=[80,0,114,40];var AWo="-1";var AWp="< ";
var As2=[0,0,232,40];var AWq=[22,40,180,80];var AWr=[2,40,22,80];var AWs=[23,40,
163,80];var AWt=[210,40,230,80];var AWu=[164,40,210,80];var AWv=[169,43,205,77];
var AWw="ERROR: No outlet assigned";var AWx="Unhandled screen";var AWy="ERROR: Cannot cache null screen.";
var AWz="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHA="Untreated Rating Method type!";var Ala="Unhandled animal type";var AWA=[
5,60,235,140];var AWB=[0,130,240,196];var AWC=[49,240,229,280];var Aye="Implement in derived classes!";
var Alb="Implement in derived class";var AhX=[0,40,230,120];var Ayf=[0,120,230,200
];var Aom=[0,200,230,280];var AhY=[0,280,230,360];var AWD=[0,360,230,440];var Ayg=[
230,40,238,280];var AHB="WARNING: Unhandled filter field: ";var AfC="Should not happen.";
var AHC="Invalid Boolean item";var Aab=[0,120,240,160];var Alc=[0,160,240,200];var
Aon=[0,200,240,240];var AWE=[1152,11,1392,51];var AWF=[1152,51,1392,91];var AWG=[
1152,91,1392,131];var AWH=[1152,131,1392,171];var AWI=[1152,171,1392,211];var As3=[
0,240,240,280];var AHD=[10,0,240,40];var AHE=[190,0,230,40];var AWJ=[60,3,95,39];
var AWK=[95,4,200,40];var AWL=[3,3];var AWM=[6,6];var AWN=[59,5,197,35];var AWO=[
59,2,200,38];var AWP=[3,2,43,42];var AWQ=[0,17,43,40];var AWR=[50,40];var AWS=[50
,0];var AWT="Illegal shifting direction";var Ayh=[0,0,160,30];var AHF=[0,0,25,30
];var AHG=[27,0,52,30];var AHH=[54,0,79,30];var AHI=[81,0,106,30];var AHJ=[108,0
,133,30];var AHK=[135,0,160,30];var AWU="Internal queue error";var AWV="ERROR: No corresponding Id ";
var AWW=" found.";var AWX="ERROR: Error in range test";var AWY=[120,67,210,157];
var AWZ=[0,40,240,70];var AW0=[20,67,110,157];var Ayi=[0,160,240,280];var AHL=[20
,77,90,147];var AW1=[0,0,210,40];var AHM=[195,0,235,40];var AhZ=[0,40,232,120];var
UY=[0,120,232,200];var AW2=[0,40,232,200];var Aac=[0,200,232,280];var AW3=[0,320
,240,400];var AW4=[0,120,53,200];var Ald=[0,280,232,360];var Aad="%%";var AcO=[0
,360,232,440];var Ayj=[0,440,232,520];var AW5=[0,80,207,120];var Ob=")";var AHN=
"/";var AW6=[5,0,88,30];var AHO=[88,0,240,30];var AW7="276000312345678";var AHP=[
5,30,100,60];var AHQ=[100,30,240,60];var AW8="Manufacturer";var AW9="Country";var
AW_=[5,60,240,90];var AW$="Niedersachsen";var AXa=[5,90,145,120];var AXb=[140,90
,240,120];var AXc="Protocol";var AXd=[0,0,120,100];var AHR=[0,40,116,120];var AXe=[
40,80,92,107];var AHS=[0,0,50,23];var AHT="ERROR: Unhandled Device::MeasureState";
var Ayk=[0,120,240,280];var AXf=[178,159,248,203];var AXg=[10,145,170,225];var AXh=[
0,61,240,101];var AXi=[0,0,40,23];var AHU=[101,113,141,136];var AXj=[101,235,141
,258];var AXk=[69,288,101,313];var AXl=[0,40,240,200];var As4=[0,200,240,280];var
As5=[0,280,240,360];var AHV="\u2264 ";var AXm=[0,80,94,160];var AXn=[94,80,184,160
];var AXo=[184,80,240,160];var AXp=[197,105,231,139];var AXq=[105,101,173,127];var
AXr=[7,101,75,127];var AXs=[94,125,184,151];var AXt=[2,125,92,151];var AHW=[0,70
,240,101];var AXu=[0,106,240,280];var Ayl=[30,40,240,70];var AHX=[0,40,30,70];var
AXv="\u278B";var AXw=[0,0,240,175];var AXx=[0,0,232,175];var AXy=[232,0,240,175];
var AXz="Text Here !";var AXA=[200,0,240,40];var AHY="1";var AHZ="2";var AH0="3";
var AH1="4";var Aym=[0,360,232,400];var Ayn="ERROR: invalid item class.";var AH2=[
10,220,250,260];var AXB=[185,0,225,40];var AH3="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXC="ERROR: Received more actions than expected!";var AH4=", ";var AXD=
"ERROR: Cannot set action at position=";var AXE=". Current elements:";var AXF=", max elements:";
var AXG="17";var AXH=[0,0,58,58];var AXI=[0,0,60,60];var AXJ=[30,0,58,20];var AXK=[
7,6,25,24];var AXL=[30,60,130,160];var AXM=[0,0,28,20];var AXN=[4,3,40,24];var AXO=[
0,0,42,27];var Ayo=[0,0,17,17];var AXP="Unknown direction of counting enum value: ";
var AXQ="Unknown id generation method enum value: ";var Ayp="Invalid animal id generation method: ";
var As6="Unhandled popup id";var UZ="0";var As7=";";var AXR=[0,400,230,480];var AXS=[
5,120,235,200];var AXT=[0,640,230,760];var AH5=[0,0,300,200];var AXU=[20,40,220,
80];var AH6=[20,80,220,280];var AXV=[140,0,188,40];var AXW="ERROR: Row containing birth weight could not be loaded";
var AXX=[0,440,230,520];var As8="ID";var AXY=[40,40,198,70];var AXZ="Extra info: ";
var AH7=" -";var AX0=[0,0,230,120];var AX1=[0,0,230,40];var AX2=[0,80,230,120];var
AX3="\xB0Brix";var AcP=[0,320,230,400];var AX4=[0,410,230,490];var AX5="ERROR: aNumberOfDays can not be < 0 ";
var AX6="{WEIGHTGAIN} ";var AX7="\xB1";var AH8="+";var AX8="{WEIGHTGAIN}";var AX9=
"{DAYS}";var AX_="ERROR: aString can not be null";var AX$=[166,70,240,114];var AYa=[
0,60,160,120];var AYb=[30,0,240,60];var AH9=[1,6,29,54];var AYc=[30,60,240,120];
var AYd="Con";var AYe=[70,50,170,70];var AH_="Unhandled Device::NaisIdValidationResult: ";
var AH$="Unhandled PopupId";var AYf=[110,123,230,248];var AYg=[5,0,250,40];var AYh=[
102,0,186,40];var AYi=[153,0,240,40];var Ro="-";var As9=[170,0,240,40];var AIa=[
220,0,320,30];var AIb=[200,20,300,50];var Aoo=[180,0,180,40];var Aop=[170,0,170,
40];var Ayq="Untreated state";var AYj="ERROR: Animal id scanned in an unexpected state : ";
var AIc="ERROR: Null animal id scanned.";var AYk=[40,40,235,100];var AYl=[120,100
,210,190];var AYm=[20,100,110,190];var AYn=[0,40,40,100];var AYo="\u278A";var AYp=
"Action untreated";var AYq="ERROR: No corresponding ";var AYr=" action found!";var
AYs="Unhandled action: ";var AYt=[0,190,240,220];var AYu=[0,220,232,280];var AYv=[
5,190,235,270];var AYw=[232,60];var AYx=[0,2];var AYy=[58,58];var AYz="A";var AYA=[
56,0,156,40];var Aoq=[156,0,240,40];var AId=" 7 ";var AYB=[40,0,156,40];var AIe=
"/-1/-2";var AIf=[72,0,144,40];var AcQ="\n";var AIg="(";var AYC=[72,0,156,40];var
AIh="%y/%m";var AYD=[70,0,240,40];var Ayr=[70,0,120,40];var AYE=[160,0,245,40];var
AYF="- ";var Ays=" - ";var AYG="{parc}{clr3}";var AYH="{clr0}/^{clr2}";var AYI="{clr0}/^{clr1}";
var AIi=[0,0,85,40];var Aor="?";var AIj=[0,0,120,140];var AYJ=[0,0,116,40];var AIk=[
15,0,100,40];var AIl=[110,0,200,40];var Ale=[0,0,34,34];var AIm=[129,0,157,40];var
Aos=[0,0,25,25];var AIn="\u2611";var AIo="\u2610";var AIp=[5,0,72,40];var AYK=[150
,0,240,40];var AYL=[72,0,139,40];var AIq="Unvalid content class: ";var AYM=[0,320
,240,360];var AYN=[0,360,240,400];var AYO=[144,0,170,40];var AYP=[187,0,213,40];
var AYQ=[207,10,233,50];var AYR=[247,20,273,60];var AYS=[140,0,150,100];var AYT=[
165,0,175,100];var AYU=[185,0,195,100];var AYV=[205,0,215,100];var AYW=[211,0,233
,40];var AYX=[189,0,211,40];var AYY=[167,0,189,40];var AYZ=[145,0,167,40];var AIr=[
5,0,240,40];var Rp=[10,0,10,40];var AY0="= \u2211 ";var Ayt=[125,0,240,40];var AY1=[
130,0,170,40];var AY2="\xD8 ";var AY3=[100,10,116,36];var AY4=[117,10,133,36];var
AY5=[135,10,151,36];var AY6="Implement in derieved class";var Aot=[0,80,240,240];
var Ah0=[0,120,232,160];var As_=[0,160,232,200];var As$=[0,200,232,240];var Ayu=[
0,240,232,280];var Aou=[0,320,232,360];var AY7=[-61,360,232,400];var AY8=[0,400,
32,440];var AY9=[0,100];var AY_=[0,40,240,240];var AY$=[0,50000];var AZa=[0,500];
var AZb=[0,0,240,105];var AZc=[0,105,240,210];var AZd=[0,40,240,81];var AZe=[0,81
,240,122];var AZf=[0,122,240,163];var AZg=[0,163,240,205];var AZh=[0,205,240,240
];var AIs=[0,200];var AZi=[0,40,240,73];var Ata=[0,0,30,40];var AZj=[0,40,30,80];
var Ayv=[60,40];var Atb=[60,0];var AZk=[10,0,40,40];var AZl=[0,190,240,260];var AZm=[
0,130,240,190];var AIt=[40,40,200,130];var AZn=[90,230,170,253];var AZo=[80,190,
170,223];var AZp=[0,130,240,180];var AZq=[0,250,240,280];var AZr=[129,0,156,40];
var AZs=[72,0,100,40];var AZt=[100,0,129,40];var AZu=[78,8,103,33];var AIu=[0,0,
300,120];var AZv=[1,-1];var AZw=[20,40,240,120];var AZx=[20,0,240,40];var AZy=[0
,118,240,120];var AZz=[0,20,130,40];var AZA=[130,20,240,40];var AZB=[0,0,10,20];
var A$T="\u2191";var Bqw=[230,0,240,20];var AIv=[0,40,232,80];var Bqx=[0,80,232,
160];var Bqy=[0,160,230,240];var AIw=" p. p.";var AZC="Unknown animal type";var AZD=[
80,0,140,40];var Bqz=[50,0,172,40];var BqA=[172,0,240,40];var BqB=[0,90,240,92];
var A$U="Unhandled menu item";var A$V=[0,0,50,30];var Atc=[0,0,30,30];var BqC="No AnimalActionTemperatureScreen found!";
var BqD="840003123456789";var BqE=[40,0,230,40];var BqF=[50,10,230,30];var AZE="No AnimalMultiInfoScreen found!";
var AIx=[0,0,25,40];var A$W="/^";var A$X="?/?";var BqG=[100,4,180,40];var BqH=[65
,0,99,40];var BqI=[165,0,200,40];var A$Y=[0,0,60,40];var A$Z="9999/^9999";var BqJ=
"Invalid index: ";var BqK="Unknown AnimalIdGenerationMethod: ";var BqL="Invalid gender: ";
var Atd="Invalid input state: ";var BqM="Unhandled AnimalIdGenerationMethod";var
BqN=[42,35,67,75];var BqO=[5,35,39,75];var BqP=[70,40,228,70];var BqQ="Invalid direction for setting focus";
var Ah1="Invalid index";var BqR="Unvalid direction";var BqS=[0,0,42,30];var A$0=[
22,0,42,30];var BqT=[20,0,40,30];var BqU=[0,0,158,30];var A$1=[32,0,62,30];var A$2=[
64,0,94,30];var A$3=[96,0,126,30];var BqV=[128,0,158,30];var BqW=" %% ";var BqX=[
0,70,240,220];var BqY=[0,237,240,307];var A$4="\n44 %% done";var BqZ=[0,0,166,30
];var AIy=[0,0,12,30];var Ayw=[14,0,26,30];var AZF=[28,0,40,30];var AZG=[42,0,54
,30];var AZH=[56,0,68,30];var AZI=[70,0,82,30];var AZJ=[84,0,96,30];var AZK=[98,
0,110,30];var A$5=[112,0,124,30];var AZL=[126,0,138,30];var Bq0=[140,0,152,30];var
Bq1=[154,0,166,30];var A$6=[20,0,46,30];var Bq2="\u2642";var Bq3="{fnt3}\u2642{fnt1}";
var Bq4="\u2640";var Bq5="{fnt3}\u2640{fnt1}";var Bq6="{parc}";var Bq7=[30,30,210
,80];var Bq8="Implement in derieved class!";var Bq9=[60,4,226,34];var A$7=[30,4,
58,34];var A$8=[4,0,27,40];var Bq_=[116,4,228,34];var Bq$=[60,4,86,34];var Bra=[
88,4,114,34];var Aov="Implement in derived class!";var A$9="Implement in derived class.";
var Brb="Invalid nais id view: ";var Brc=[0,35,240,75];var Brd=[0,0,110,30];var Bre=[
0,0,26,30];var Brf="100";var AZM="\n\n";var Brg=[240,240];var Brh=[0,240];var Bri=
"Unknown rated attribute: ";var Brj=[120,80,240,280];var Brk=[0,80,120,280];var AIz=
" %% (";var Ayx=" \xB1 ";var Ayy=" (n = ";var AZN=[0,80,232,120];var Brl=[0,242,
232,282];var AZO=[0,280,232,320];var Brm=[35,0,200,40];var Brn=[1,0,31,40];var Bro=[
32,40];var Brp=[32,0];var Brq=[3,0,83,40];var A$_=[180,0,240,40];var Brr=[120,0,
180,40];var Brs=[65,0,125,40];var Brt=[0,0,120,200];var Bru=[0,40,120,150];var A$$=[
15,160,60,190];var Baa=[60,160,105,190];var Brv=[0,65,240,135];var Brw=[10,112,170
,192];var Brx=[178,129,248,173];var Bry=[0,40,240,110];var Brz=[10,98,170,178];var
BrA=[178,112,248,156];var BrB=[85,190,160,265];var BrC=[89,194,155,260];var BrD=[
26,190,111,250];var BrE=[125,181,225,211];var BrF=[100,220,183,250];var BrG="38.7";
var BrH=[180,220,225,250];var BrI="\xB0C";var BrJ=[0,99,240,178];var BrK=[100,280
,140,320];var BrL=[0,26,240,105];var Bab=[30,40];var Bac=[30,0];var BrM=[149,0,200
,40];var BrN=[145,40];var BrO=[145,0];var BrP=[38,0,88,40];var AZP=[0,0,35,40];var
BrQ=[0,0,50,40];var BrR=[40,0,200,40];var BrS=[95,0,145,40];var BrT=[65,5,223,35
];var AZQ=[0,0,15,40];var BrU=[72,0,140,40];var Bad="\n(";var BrV="%y/%m/%d";var
BrW="%y ";var BrX=" %m ";var BrY=" %d ";var BrZ="20";var Br0=[225,0,240,40];var Br1=[
0,400,232,440];var Br2=[0,440,232,480];var Br3=[0,480,232,520];var Br4=[0,520,232
,560];var Br5=[0,560,232,600];var Br6=[0,598,232,638];var Br7=[5,0,215,40];var Br8=[
215,8,240,33];var Br9="Implement in dervied class.";var Br_="ERROR: Unhandled temperature unit: ";
var AIA="ERROR: Unhandled mass unit: ";var Br$=[-1,160,115,280];var Bsa=[114,160
,230,280];var AZR=[116,40,232,160];var Ayz="Unknown weight class index: ";var Bsb=
"< 35";var Bsc="35 - 40";var Bsd="40 - 45";var Bse="45 - 50";var Bsf="\u2265 50";
var Bsg="< 80";var Bsh="80 - 90";var Bsi="90 - 100";var Bsj="100 - 110";var Bsk=
"\u2265 110";var Bae="Unknown mass unit";var Bsl=[143,0,193,40];var Baf=[192,0,240
,40];var Bsm=[44,28,44,28];var Bsn="0 %%";var Bso=[-1,40,115,160];var Bsp=[117,40
,233,160];var Bsq=[1,160,117,280];var Bsr=[114,158,230,278];var Bss=[1,280,117,400
];var Bst=[30,0,155,40];var Bag="\u2620";var AZS=[380,150,380,190];var Bah=[105,
0,155,50];var AZT=[190,1,240,41];var Bsu=[72,0,108,40];var Bsv=[108,0,180,40];var
Bsw=[60,0,94,40];var Bsx=[94,0,200,40];var Bsy="Scroll direction not supported.";
var Bsz=[44,0,207,40];var BsA=[207,0,240,40];var BsB="99";var BsC="Unknown birth type";
var BsD=[44,0,189,40];var BsE=[5,0,44,40];var BsF=[44,0,240,40];var BsG=[240,0,240
,40];var BsH="\u25C9";var Bai="\u25CB";var BsI=[75,4,215,34];var BsJ=[47,4,73,34
];var Baj=[17,4,45,34];var BsK=[0,0,138,30];var BsL=[47,4,215,34];var AZU="Unhandled MotherSelectionFilterMode: ";
var BsM="Read only!";var BsN="actions array too small to hold all actions";var BsO=[
120,40];var BsP=[120,0];var BsQ=[5,0,115,40];var BsR=[0,0,205,40];var BsS=[59,4,
170,34];var BsT=[59,1,173,37];var BsU=[175,1,205,37];var BsV=[0,0,37,40];var BsW=[
115,98,205,188];var BsX=[0,40,235,100];var BsY=[2,200,240,280];var BsZ=" 01234";
var Bs0=[0,0];var Bs1=[33,63];var Bs2=[25,56];var Bs3="Unknown transponder image type: ";
var AIB=[0,0,82,82];var Bs4=[0,0,81,26];var Bs5=[105,120,195,210];var Bs6=[10,140
,100,230];var Bak="Unhandled EartagNrAssignmentMode: ";var Bs7="Unhandled Gender";
var Bs8=[10,35,35,75];var Bs9=[44,40,202,70];var Bs_=[204,35,232,75];var Bs$="Unvalid FatoryResetScope";
var Bal=[0,120,240,200];var Bta=[144,0,192,40];var Btb=[144,0,240,40];var Btc=[195
,0,245,50];var Btd=[120,0,120,40];var Bte=[140,0,240,30];var Btf=[30,0,232,40];var
Btg=[60,0,160,40];var Bth=[160,0,200,40];var Bti=[150,17,200,40];var Btj=[155,40
];var Btk=[155,0];var Btl=[146,80,240,160];var Btm=[56,80,146,160];var Btn=[0,80
,56,160];var Bto=[13,107,47,141];var Btp=[74,109,104,139];var Btq=[50,100,130,150
];var Btr=[55,112,145,140];var Bts=[146,112,236,140];var Btt=[150,86,223,110];var
AIC=[0,40,240,120];var Btu="Menu item for animal table field not found";var Bam=[
0,360,240,440];var Btv=[0,440,240,520];var Btw=[5,40,235,104];var Btx=[120,108,226
,218];var Bty=[20,120,110,210];var Btz=[5,223,235,280];var BtA=[0,0,64,30];var BtB=[
44,0,64,30];var BtC=[185,5,225,35];var BtD=[170,5,234,35];var BtE="Unhandled number of digits";
var BtF=[0,0,126,30];var BtG=[22,5,149,35];var BtH=[149,0,232,40];var Ban=[5,20];
var BtI=[5,0];var BtJ="Unhandled AnimalIdAutoGenerationMethod: ";var BtK=[4,440,
236,520];var BtL="Unhandled TransponderAssignmentIdChangeMethod: ";var BtM="\n";
var BtN="%";var BtO=[0,0,160,120];var BtP=[2,2,157,117];var BtQ=[50,70];var BtR=[
50,50];var BtS=[0,0,168,40];var BtT=[168,0,240,40];var BtU=[0,47,232,77];var BtV=[
65,0,101,40];var BtW=[135,0,175,40];var BtX=[85,17,135,40];var BtY=[125,17,175,40
];var BtZ=[40,0];var Bao=[0,40,230,280];var Bt0="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var Bt1="ERROR: Received more animal table fields than expected!";
var Bt2=[0,80,240,130];var Bt3=[0,80,240,200];var Bap="Unhandled BackupError: ";
var Bt4="Unhandled PopupId: ";var Bt5=[203,0,240,40];var Bt6=[168,0,203,40];var Bt7=[
35,0,152,40];var Bt8=[0,0,84,40];var Bt9=[84,0,167,40];var Bt_="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMD={Device:null,A5L:null,GJ:null,Init:function(aArg){},DriveCursorHitting:function(
Tb,BF,Fg){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GJ._Init.call(this.
GJ={I:this},0);this.__proto__=C.AMD;this.H(Cc);this.J(this.GJ,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5L=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var J2=
this._variants();if(J2){this.K={};J2._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GJ._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GJ.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5L)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A4U._variants();
},K:null,_className:"Application::Application"};C.Ast=[240,320];C.AB={Background:
null,Ej:null,AC4:null,An2:0,Init:function(aArg){A.pe([this,this.A0r],this);A.pe([
this,this.BeA],this);},LN:function(G){},A0r:function(s){this.LN(s);},CC:function(
G){},AIE:function(s){this.CC(s);},E4:function(G){},AyA:function(s){this.E4(s);},
Dr:function(E){if(this.AC4===E)return;this.AC4=E;A.pe([this,this.BeA],this);},BeA:
function(G){var B;if(!!this.AC4)this.Ej.Ab0((C.BQ.isPrototypeOf(B=A._NewObject(this.
AC4,0))?B:null));else this.Ej.Ab0(null);},_Init:function(aArg){C.Abf._Init.call(
this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.Ej._Init.call(this.
Ej={I:this},0);this.__proto__=C.AB;this.Background.AZ(0x3F);this.Background.H(Cc
);this.Background.L(A.jb.CS);this.Ej.H(BD);this.Ej.Ar(false);this.J(this.Background
,-1);this.J(this.Ej,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abf;this.
Background._Done();this.Ej._Done();C.Abf._Done.call(this);},_ReInit:function(){C.
Abf._ReInit.call(this);this.Background._ReInit();this.Ej._ReInit();},_Mark:function(
D){var B;C.Abf._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WH={Ii:null,Zk:function(E){var B;if(this.Ii===E)return;if(!!this.Ii)this.AqB(
this.Ii,null,null,null,[B=this.Ii,B.AyA],null,false);this.Ii=E;if(!!this.Ii)this.
AkI(this.Ii,null,null,null,null,null,null,[B=this.Ii,B.AIE],null,false);},AEo:function(
){return this.Ii;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WH;this.H([0,0,C.Ast[0],C.Ast[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Ii)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ox={U6:null,Q:null,AnG:null,Zx:null,NP:null,Ov:null,TD:null,TE:null,AF7:255,
Kf:function(G){var F;if(!!this.Q){this.A1Y();var Ac9=(F=this.Q,F[1].call(F[0]));
if(Ac9>20)this.Ov.L(A.jb.E1);else this.Ov.L(A.jb.Gh);this.Ov.L((this.Ov.AQ&0x00FFFFFF
)|(this.AlF(Ac9,0,30)<<24));this.TD.L((this.TD.AQ&0x00FFFFFF)|(this.AlF(Ac9,31,60
)<<24));this.TE.L((this.TE.AQ&0x00FFFFFF)|(this.AlF(Ac9,61,100)<<24));}},A0p:function(
s){this.Kf(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0p],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0p],E,0);if(!!E)A.pe([this,
this.A0p],this);},A3b:function(G){var F;if(!!this.AnG)this.Zx.Ar((F=this.AnG,F[1
].call(F[0])));else this.Zx.Ar(false);this.A98(255);},A90:function(E){if(A.aaZ(this.
AnG,E))return;if(!!this.AnG)A.z$([this,this.A3b],this.AnG,0);this.AnG=E;if(!!E)A.
zX([this,this.A3b],E,0);if(!!E)A.pe([this,this.A3b],this);},A98:function(E){if(this.
AF7===E)return;this.AF7=E;if(!!this.U6)this.U6.L((this.U6.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlF:function(A0v,BbN,Bxe){if(A0v<BbN)return 0;else if((A0v>=BbN)&&(A0v<
Bxe))return this.AF7&0xFF;else return 255;},A1Y:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U6=this.TE;else if((F=this.Q,F[1].call(F[0]))>
30)this.U6=this.TD;else this.U6=this.Ov;}else this.U6=null;},BkT:function(){return this.
AF7;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.Zx._Init.call(this.Zx={
I:this},0);A.acg.Ap._Init.call(this.NP={I:this},0);A.acg.AK._Init.call(this.Ov={
I:this},0);A.acg.AK._Init.call(this.TD={I:this},0);A.acg.AK._Init.call(this.TE={
I:this},0);this.__proto__=C.Ox;this.H(E6);this.Zx.Fp(2000);this.NP.H(E6);this.NP.
L(A.jb.Text);this.Ov.H(Hq);this.Ov.L(A.jb.E1);this.TD.H(IT);this.TD.L(A.jb.E1);this.
TE.H(Is);this.TE.L(A.jb.E1);this.J(this.NP,0);this.J(this.Ov,0);this.J(this.TD,0
);this.J(this.TE,0);this.Zx.Q=[this,this.BkT,this.A98];this.NP.Ax(A.aaL(A.ach.AMO
));},_Done:function(){this.__proto__=A.Core.P;this.Zx._Done();this.NP._Done();this.
Ov._Done();this.TD._Done();this.TE._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Zx._ReInit();this.NP._ReInit();this.Ov._ReInit(
);this.TD._ReInit();this.TE._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnG)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Zx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TD
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.Zx={_Init:function(aArg){A.acl.Gk._Init.call(
this,aArg);this.__proto__=C.Zx;this.AkU=true;this.B1=0;this.Cw=255;},_className:
"Application::PulseAnimation"};C.Ej={GJ:null,AR:null,Background:null,Ox:null,Bo:
null,Dn:null,K7:0,Avf:0,Avg:0,AoY:0,LF:false,KF:false,Qs:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!He){this.AoY=A.jb.CS;this.K7=A.jb.Text;}else if(GE){this.AoY=
this.Avf;this.K7=this.Avg;}else if(Fu){this.AoY=this.Avf;this.K7=this.Avg;}else{
this.AoY=A.jb.CS;this.K7=A.jb.Text;}this.Background.L(this.AoY);if(!!this.GJ){this.
GJ.Wy(this.AoY);this.GJ.De(this.K7);}this.LF=He;this.KF=Fu;this.Qs=GE;},Qr:function(
G){this.Am();A.pe(this.AR,this);},AiO:function(G){if(this.Dn.Acf)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab0:function(
E){if(this.GJ===E)return;if(!!this.GJ)this.HN(this.GJ);this.GJ=E;if(!!this.GJ)this.
J(this.GJ,0);this.Bb(E);this.Am();},A9J:function(E){if(this.Avf===E)return;this.
Avf=E;this.Am();},A9K:function(E){if(this.Avg===E)return;this.Avg=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);C.Ox._Init.call(this.Ox={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=C.Ej;var B;this.
H(BD);this.Background.AZ(0x3F);this.Background.H(BD);this.Background.L(A.jb.CS);
this.Ox.H(O2);this.K7=A.jb.Text;this.Bo.PR(0);this.Bo.Wz(50);this.Dn.Filter=1;this.
Avf=A.jb.AV;this.Avg=A.jb.Bm;this.AoY=A.jb.Text;this.J(this.Background,0);this.J(
this.Ox,0);this.Ox.At([B=A._GetAutoObject(A.Device.Device),B.Av5,B.AyB]);this.Ox.
A90([B=A._GetAutoObject(A.Device.Device),B.Av8,B.AyC]);this.Bo.Mz=[this,this.Qr];
this.Dn.BL=[this,this.AiO];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Ox._Done();this.Bo._Done();this.Dn._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
Ox._ReInit();this.Bo._ReInit();this.Dn._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ox)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.XW={AeL:null,UA:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E4:function(G){if(this.K&&this.K.E4)return this.K.E4.apply(this,arguments);else
return C.AB.E4.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeL={I:this},0);A.acg.Text._Init.call(this.UA={I:
this},0);this.__proto__=C.XW;this.AeL.H(P7);this.UA.H(P8);this.UA.R(A.jV);this.UA.
L(A.jb.Text);this.UA.Z(false);this.J(this.AeL,0);this.J(this.UA,0);this.AeL.Ax(null
);this.UA.S(A.aaL(A.fl.EK));var J2=this._variants();if(J2){this.K={};J2._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeL._Done();this.UA._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeL._ReInit();this.UA._ReInit();this.UA.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UA)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
XW._variants();},K:null,_className:"Application::BootScreen"};C.AUE={AAx:function(
G){A._GetAutoObject(C.A9).Ab7(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUE;this.Background.L(0xFF000000);this.Ej.Z(false);},_className:
"Application::SleepScreen"};C.Avs={DY:null,Y:null,X8:null,X9:null,VG:null,XZ:null
,VH:null,XX:null,X2:null,TI:null,X1:null,X_:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Arr,B.Ate],0);A._GetAutoObject(A.Device.Helper).AkM();this.Bb(this.VG);this.
N.Cs(A.aaL(A.ach.ADz));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A2M=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A2M)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJS=A._NewObject(A.acl.AF4,0);AJS.Fp(250);AJS.HM(1);AJS.WC(6);this.
Y.HH(this.AV,true,AJS,null);}},CC:function(G){this.A4e(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkM();A._GetAutoObject(A.Device.Helper).Asn();},Fj:function(G){
var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.
Ay.Mx(-this.Y.Br[1]);},Ig:function(G){var Cx=(C.Fm.isPrototypeOf(G)?G:null);if(!
Cx)return;if(Cx===this.VG)A._GetAutoObject(C.A9).Cd(35);else if(Cx===this.XZ)A._GetAutoObject(
C.A9).Cd(34);else if(Cx===this.X2)A._GetAutoObject(C.A9).Cd(69);else if(Cx===this.
VH)A._GetAutoObject(C.A9).Cd(8);else if(Cx===this.XX)A._GetAutoObject(C.A9).Cd(50
);else if(Cx===this.TI)A._GetAutoObject(C.A9).Cd(25);else if(Cx===this.X8)A._GetAutoObject(
C.A9).Cd(77);else if(Cx===this.X9)A._GetAutoObject(C.A9).Cd(70);else if(Cx===this.
X_)A._GetAutoObject(C.A9).Cd(6);else if(Cx===this.X1)A._GetAutoObject(C.A9).Cd(63
);},BAm:function(G){A._GetAutoObject(A.Device.Device).Ae0(!A._GetAutoObject(A.Device.
Device).AmM);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmM)this.N.Hx((
A.aaR(A.acf.A7g)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hx((A.aaR(A.acf.
A7g)+CQ)+A.aaR(A.acf.A7W).toLowerCase());},Adt:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A4e:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).Mq());this.VH.Zt(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fm._Init.call(this.X8={I:this
},0);C.Fm._Init.call(this.X9={I:this},0);C.Fm._Init.call(this.VG={I:this},0);C.Fm.
_Init.call(this.XZ={I:this},0);C.QV._Init.call(this.VH={I:this},0);C.Fm._Init.call(
this.XX={I:this},0);C.Fm._Init.call(this.X2={I:this},0);C.Fm._Init.call(this.TI={
I:this},0);C.Fm._Init.call(this.X1={I:this},0);C.Fm._Init.call(this.X_={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avs;this.Background.L(A.
jb.CS);this.N.Ar(false);this.N.Z(true);this.Dr(C.AqW);this.DY.AZ(0x3F);this.DY.H(
Fe);this.DY.L(A.jb.CJ);this.Y.H(L1);this.Y.JR(9);this.X8.H(P9);this.X8.Aj(true);
this.X8.T(A.aaR(A.acf.Gp));this.X9.H(J1);this.X9.Aj(true);this.X9.T(A.aaR(A.acf.
A7D));this.VG.H(N$);this.VG.Aj(true);this.VG.T(A.aaR(A.acf.Vt));this.XZ.H(P_);this.
XZ.Aj(true);this.XZ.T(A.aaR(A.acf.Tv));this.VH.H(MG);this.VH.Aj(true);this.VH.T(
A.aaR(A.acf.APD));this.XX.H(S9);this.XX.Aj(true);this.XX.T(A.aaR(A.acf.Animal));
this.X2.H(J1);this.X2.Aj(true);this.X2.T(A.aaR(A.acf.A7j));this.TI.H(UQ);this.TI.
Ar(true);this.TI.Aj(true);this.TI.Z(true);this.TI.T(A.aaR(A.acf.A56));this.X1.H(
Z1);this.X1.Aj(true);this.X1.T(A.aaR(A.acf.Device));this.X_.H(W1);this.X_.Aj(true
);this.X_.T(A.aaR(A.acf.Settings));this.Ay.H(It);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.X8,0);this.J(this.X9,0);this.J(this.VG,0);this.J(this.XZ,0);this.
J(this.VH,0);this.J(this.XX,0);this.J(this.X2,0);this.J(this.TI,0);this.J(this.X1
,0);this.J(this.X_,0);this.J(this.Ay,0);this.N.CE=[this,this.BAm];this.N.Cg=[this
,this.Adt];this.Y.El=[this,this.Fj];this.X8.AR=[this,this.Ig];this.X8.DB(A.aaL(A.
ach.ADD));this.X9.AR=[this,this.Ig];this.X9.DB(A.aaL(A.ach.ADG));this.VG.AR=[this
,this.Ig];this.VG.DB(A.aaL(A.ach.APH));this.XZ.AR=[this,this.Ig];this.XZ.DB(A.aaL(
A.ach.APS));this.VH.AR=[this,this.Ig];this.VH.DB(A.aaL(A.ach.AQe));this.XX.AR=[this
,this.Ig];this.XX.DB(A.aaL(A.ach.APK));this.X2.AR=[this,this.Ig];this.X2.DB(A.aaL(
A.ach.AQl));this.TI.AR=[this,this.Ig];this.TI.DB(A.aaL(A.ach.AP5));this.X1.AR=[this
,this.Ig];this.X1.DB(A.aaL(A.ach.AP2));this.X_.AR=[this,this.Ig];this.X_.DB(A.aaL(
A.ach.AQD));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.X8._Done();this.X9._Done();this.VG._Done();this.XZ._Done();
this.VH._Done();this.XX._Done();this.X2._Done();this.TI._Done();this.X1._Done();
this.X_._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.X8._ReInit();this.X9.
_ReInit();this.VG._ReInit();this.XZ._ReInit();this.VH._ReInit();this.XX._ReInit(
);this.X2._ReInit();this.TI._ReInit();this.X1._ReInit();this.X_._ReInit();this.Ay.
_ReInit();this.X8.T(A.aaR(A.acf.Gp));this.X9.T(A.aaR(A.acf.A7D));this.VG.T(A.aaR(
A.acf.Vt));this.XZ.T(A.aaR(A.acf.Tv));this.VH.T(A.aaR(A.acf.APD));this.XX.T(A.aaR(
A.acf.Animal));this.X2.T(A.aaR(A.acf.A7j));this.TI.T(A.aaR(A.acf.A56));this.X1.T(
A.aaR(A.acf.Device));this.X_.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X2
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q_={Number:null,Jf:null,IS:null,TB:null,AsJ:0,Init:function(aArg){var B;A.zX([
this,this.Bbp],[B=A._GetAutoObject(A.Device.Device),B.ASx,B.AZ7],0);A.pe([this,this.
Bbp],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An3();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhH();},E4:function(G){A._GetAutoObject(A.Device.
Device).AnV();},Al0:function(G){var F;this.Am();this.TB.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Ael.Ar(true);if(!this.TB.Bw)(F=this.TB.Q,F[2].call(F[0],this.TB.
B1));},Bbp:function(s){this.Al0(s);},An3:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gh);break;case 3:this.Background.
L(A.jb.H8);break;default:this.Background.L(A.jb.CJ);}},AkC:function(E){if(this.AsJ===
E)return;this.AsJ=E;this.Jf.AkC(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jf._Init.call(this.Jf={I:this}
,0);A.acg.Ap._Init.call(this.IS={I:this},0);A.acl.Gk._Init.call(this.TB={I:this}
,0);this.__proto__=C.Q_;var B;this.Background.L(A.jb.CJ);this.N.Z(false);this.Number.
H(UR);this.Number.KR(true);this.Number.L(A.jb.Text);this.Jf.H(Z2);this.Jf.AkC(0);
this.IS.H(W2);this.IS.L(A.jb.AV);this.IS.Zm(true);this.TB.Fp(1750);this.TB.Um(750
);this.TB.Akx(0);this.TB.Ar(true);this.TB.B1=3;this.J(this.Number,0);this.J(this.
Jf,0);this.J(this.IS,0);this.Number.S(A.aaL(A.fl.Af));this.IS.Ax(A.aaL(A.ach.ADF
));this.TB.Q=[B=this.IS,B.ASk,B.Cv];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jf._Done();this.IS._Done();this.TB._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jf._ReInit();this.IS._ReInit();this.TB._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fm={C8:null,ADp:null,AR:null,Bo:null,Dn:null,Background:
null,Mp:null,OC:null,Q1:null,G9:null,A5j:true,LF:false,KF:false,Qs:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hh.Bl.call(this,aSize);this.Mp.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q1.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OC.H(this.Q1.M);this.G9.H([].concat(0,this.G9.M.slice(1,4)));this.G9.H(A.abN(
this.G9.M,aSize[0]));this.G9.H(A.abP(this.G9.M,0));this.G9.H([].concat(this.G9.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hh.Ai.call(this,Ae);var He=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!He){this.Q1.L(A.jb.AmZ);this.
G9.L(A.jb.CJ);this.OC.Z(true);this.OC.L(A.jb.AQQ);this.Mp.Z(false);}else if(GE){
this.Q1.L(A.jb.Bm);this.G9.L(A.jb.Bm);this.OC.Z(false);this.Mp.Z(true);}else if(
Fu){this.Q1.L(A.jb.Bm);this.G9.L(A.jb.Bm);this.OC.Z(false);this.Mp.Z(true);}else{
this.Q1.L(A.jb.Text);this.G9.L(A.jb.Text);this.OC.Z(true);this.OC.L(A.jb.CS);this.
Mp.Z(false);}this.LF=He;this.KF=Fu;this.Qs=GE;},Qr:function(G){this.Am();A.pe(this.
AR,this);},AiO:function(G){if(this.Dn.Acf)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G9.R(E);},DB:function(E){if(this.C8===E)return;this.C8=E;this.Q1.
Ax(E);this.OC.Ax(E);},AbZ:function(E){if(this.A5j===E)return;this.A5j=E;this.G9.
Z(E);},Ab2:function(E){if(this.ADp===E)return;this.ADp=E;this.Mp.Ax(E);this.Mp.H(
A.abK(this.Mp.M,E.FrameSize));},_Init:function(aArg){C.Hh._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dn={I:this
},0);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mp={
I:this},0);A.acg.Ap._Init.call(this.OC={I:this},0);A.acg.Ap._Init.call(this.Q1={
I:this},0);C.CH._Init.call(this.G9={I:this},0);this.__proto__=C.Fm;this.H(Z3);this.
Bo.PR(0);this.Bo.Wz(50);this.Dn.Filter=1;this.Background.H(W3);this.Background.Z(
false);this.Mp.AZ(0x14);this.Mp.L(A.jb.AV);this.Mp.Cv(0);this.OC.L(A.jb.CS);this.
OC.Cv(1);this.G9.H(Z4);this.J(this.Background,0);this.J(this.Mp,0);this.J(this.OC
,0);this.J(this.Q1,0);this.J(this.G9,0);this.Bo.Mz=[this,this.Qr];this.Dn.BL=[this
,this.AiO];this.Mp.Ax(A.aaL(A.ach.NT));this.OC.Ax(A.aaL(A.ach.AvF));this.Q1.Ax(A.
aaL(A.ach.AvF));this.G9.S(A.aaL(A.fl.Af));this.G9.A2(A.aaL(A.fl.Ak));this.G9.Cu(
A.aaL(A.fl.Bh));this.ADp=A.aaL(A.ach.NT);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hh;this.Bo._Done();this.Dn._Done();this.Background._Done();this.Mp._Done(
);this.OC._Done();this.Q1._Done();this.G9._Done();C.Hh._Done.call(this);},_ReInit:
function(){C.Hh._ReInit.call(this);this.Bo._ReInit();this.Dn._ReInit();this.Background.
_ReInit();this.Mp._ReInit();this.OC._ReInit();this.Q1._ReInit();this.G9._ReInit(
);this.G9.S(A.aaL(A.fl.Af));this.G9.A2(A.aaL(A.fl.Ak));this.G9.Cu(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axd:null,Background:null,OY:null,Asd:0,Ak5:10,AjB:100,AQ:0,AoR:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OY.H([].concat(2,this.OY.M.slice(1,4)));this.OY.H(A.abN(this.OY.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af2=this.Ak5<this.AjB;var AJq=(
B=this.M)[3]-B[1];var A2z=10;var Aul=AJq;var A4b=0;if(10>AJq)A2z=AJq;if(this.Ak5<
this.AjB)Aul=((Aul*this.Ak5)/this.AjB)|0;if(Aul<A2z)Aul=A2z;if(this.Ak5<this.AjB
)A4b=((this.BkR()*(AJq-Aul))/(this.AjB-this.Ak5))|0;this.OY.H(A.abP(this.OY.M,A4b
));this.OY.H([].concat(this.OY.M.slice(0,3),A4b+Aul));this.OY.Z(Af2);this.Background.
Z(Af2);if(!!this.Axd&&(this.AoR!==Af2))A.pe(this.Axd,this);this.AoR=Af2;},BkR:function(
){var E=this.Asd;var HC=this.AjB-this.Ak5;if((HC>0)&&(E>HC))E=HC;if(HC<=0)E=0;return E;
},Mx:function(E){if(E<0)E=0;if(this.Asd===E)return;this.Asd=E;this.Am();},My:function(
E){if(E<0)E=0;if(this.Ak5===E)return;this.Ak5=E;this.Am();},Mw:function(E){if(E<
0)E=0;if(this.AjB===E)return;this.AjB=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OY.L(E);},Bm0:function(E){if(A.aa0(this.Axd,E))return;this.
Axd=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(
this.Background={I:this},0);A.acg.AK._Init.call(this.OY={I:this},0);this.__proto__=
C.Ay;this.H(Z5);this.Ar(false);this.AQ=A.jb.AV;this.Background.AZ(0x0);this.Background.
H(US);this.Background.L(A.jb.CS);this.OY.AZ(0x0);this.OY.H(US);this.OY.L(A.jb.AV
);this.J(this.Background,0);this.J(this.OY,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.OY._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.OY._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axd)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Ce={Hi:null,Y:null,Ay:null,Ap:null,A6L:A.jV,Init:function(aArg){A.pe([this,this.
AA5],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);this.AA5(this);},AlX:
function(G){if(!!this.N.CE)A.pe(this.N.CE,this);},ApI:function(G){if(!!this.N.Cl
)A.pe(this.N.Cl,this);},AAx:function(G){if(!!this.N.Cg)A.pe(this.N.Cg,this);},Fj:
function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[
3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);A.pe([this,this.BAK],this);},AA5:function(G){
var B;var GX=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hx(A.jV);this.N.C1(A.
aaL(A.ach.Yu));this.N.CE=[this,this.Ev];if(!!GX&&!!GX.Aml){this.N.FC(A.jV);this.
N.Jy.Dk(255);this.N.ArK(GX.AqM);this.N.Cs(GX.AvC);this.N.Cg=GX.Aml;}else{this.N.
FC(A.jV);this.N.Cs(null);this.N.Cg=null;}if(!!GX&&!!GX.Ags){this.N.CV(GX.AxI);this.
N.HQ.Dk(GX.Axe);this.N.Anu(GX.AmO);this.N.C2(GX.Aq3);this.N.Cl=GX.Ags;}else{this.
N.CV(A.jV);this.N.C2(null);this.N.Cl=null;}},I$:function(E){if(this.A6L===E)return;
this.A6L=E;this.Hi.R(E);},Ev:function(G){A._GetAutoObject(C.A9).Fy();},BAK:function(
G){var B;var BzF=this.Ay.Background.Fo();var BdD=(BzF?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajc=X;
X=X.Ah;if(((Ajc.U&0x400)===0x400)){if(!!(A.Core.Akd.isPrototypeOf(Ajc)?Ajc:null)
){var BdJ=(A.Core.Akd.isPrototypeOf(Ajc)?Ajc:null);BdJ.DC([BdD,BdJ.EC[1]]);}else
if(!!(A.Core.Et.isPrototypeOf(Ajc)?Ajc:null)){var BfD=(A.Core.Et.isPrototypeOf(Ajc
)?Ajc:null);BfD.H(A.abN(BfD.M,BdD));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CH._Init.call(this.Hi={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Ce;this.N.Z(true);this.Hi.H(W4);this.Hi.Ar(false);this.Hi.R(A.aaR(A.
acf.Settings));this.Hi.L(A.jb.Text);this.Y.H(Fe);this.Y.JR(1);this.Ay.H(It);this.
Ap.H(O3);this.Ap.L(A.jb.Text);this.J(this.Hi,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hi.S(A.aaL(A.fl.Ko));this.Hi.A2(A.aaL(A.fl.Il));this.Y.
El=[this,this.Fj];this.Ap.Ax(A.aaL(A.ach.AC8));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hi._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hi._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hi.R(A.aaR(A.acf.Settings
));this.Hi.S(A.aaL(A.fl.Ko));this.Hi.A2(A.aaL(A.fl.Il));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.AqW={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bgx],[B=
A._GetAutoObject(A.Device.Helper),B.U0,B.U3],0);},De:function(E){C.BQ.De.call(this
,E);this.Text.L(E);},Bgx:function(G){this.Text.R(A._GetAutoObject(A.acj.KK).Bip(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AqW;this.Timer.Wz(1);this.Timer.Ar(true);
this.Text.H(Z6);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.Mz=[this,this.Bgx
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BQ;this.Timer._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BQ={KS:0xFFFFFFFF,LQ:0,De:function(E){if(
this.KS===E)return;this.KS=E;},Wy:function(E){if(this.LQ===E)return;this.LQ=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BQ;this.H(O4
);},_className:"Application::HeaderContent"};C.N={VU:null,VV:null,VX:null,Ag0:null
,Ag1:null,Ag2:null,CE:null,Cg:null,Cl:null,Background:null,NG:null,Jd:null,Jy:null
,HQ:null,Py:null,I7:null,Ld:null,TY:null,TZ:null,AnX:A.jV,AnY:A.jV,AnZ:A.jV,Aq4:
0,Aq5:0,Aq6:0,Ahh:0,ZA:false,Zz:false,Ask:false,Asz:false,Asy:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VU)this.Jd.S(this.VU);if(!!this.VV)this.Jy.S(this.
VV);if(!!this.VX)this.HQ.S(this.VX);switch(this.Ahh){case 0:{this.NG.Z(false);this.
Jd.L(A.jb.Bm);this.Jy.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Py.L(A.jb.Bm);this.I7.L(
A.jb.Bm);this.Ld.L(A.jb.Bm);}break;case 1:{if(!this.Ag0)this.NG.H(A.aaT(this.Jd.
ASc(),Rl));else this.NG.H(this.Py.Db());this.NG.Z(true);this.Jd.L(A.jb.Text);this.
Jy.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Py.L(A.jb.Text);this.I7.L(A.jb.Bm);this.Ld.
L(A.jb.Bm);}break;case 3:{if(!this.Ag2)this.NG.H(A.aaT(this.HQ.ASc(),Rl));else this.
NG.H(this.Ld.Db());this.NG.Z(true);this.Jd.L(A.jb.Bm);this.Jy.L(A.jb.Bm);this.HQ.
L(A.jb.Text);this.Py.L(A.jb.Bm);this.I7.L(A.jb.Bm);this.Ld.L(A.jb.Text);}break;case
2:{if(!this.Ag1)this.NG.H(A.aaT(this.Jy.ASc(),Rl));else this.NG.H(this.I7.Db());
this.NG.Z(true);this.Jd.L(A.jb.Bm);this.Jy.L(A.jb.Text);this.HQ.L(A.jb.Bm);this.
Py.L(A.jb.Bm);this.I7.L(A.jb.Text);this.Ld.L(A.jb.Bm);}break;default:{this.NG.Z(
false);A.ab5("%s",W5);}}if(!!this.Py.Al){this.Py.Z(true);this.Jd.Z(false);}else{
this.Py.Z(false);this.Jd.Z(true);}if(this.AnY.length<=0){this.I7.Z(true);this.Jy.
Z(false);}else{this.I7.Z(false);this.Jy.Z(true);}if(!!this.Ld.Al){this.Ld.Z(true
);this.HQ.Z(false);}else{this.Ld.Z(false);this.HQ.Z(true);}},Hx:function(E){if(this.
AnX===E)return;this.AnX=E;this.Jd.R(E);this.Am();},FC:function(E){if(this.AnY===
E)return;this.AnY=E;this.Jy.R(E);this.Am();},CV:function(E){if(this.AnZ===E)return;
this.AnZ=E;this.HQ.R(E);this.Am();},AFb:function(E){if(this.Ahh===E)return;this.
Ahh=E;this.Am();},AE4:function(E){if(this.VU===E)return;this.VU=E;this.Jd.S(E);this.
Am();},ArK:function(E){if(this.VV===E)return;this.VV=E;this.Jy.S(E);this.Am();},
Anu:function(E){if(this.VX===E)return;this.VX=E;this.HQ.S(E);this.Am();},A3q:function(
G){this.Am();},C1:function(E){if(this.Ag0===E)return;this.Ag0=E;this.Py.Ax(E);this.
Am();},Cs:function(E){if(this.Ag1===E)return;this.Ag1=E;this.I7.Ax(E);this.Am();
},C2:function(E){if(this.Ag2===E)return;this.Ag2=E;this.Ld.Ax(E);this.Am();},OO:
function(E){if(this.Asy===E)return;this.Asy=E;this.TY.Z(E);if(E)this.Jd.H([].concat(
this.TY.M[2],this.Jd.M.slice(1,4)));else this.Jd.H([].concat(0,this.Jd.M.slice(1
,4)));this.Am();},OP:function(E){if(this.Asz===E)return;this.Asz=E;this.TZ.Z(E);
if(E)this.HQ.H(A.abN(this.HQ.M,this.TZ.M[0]));else this.HQ.H(A.abN(this.HQ.M,this.
M[2]));this.Am();},Bmm:function(E){if(this.Aq4===E)return;this.Aq4=E;this.Py.Cv(
E);this.Am();},ASZ:function(E){if(this.Aq5===E)return;this.Aq5=E;this.I7.Cv(E);this.
Am();},A9O:function(E){if(this.Aq6===E)return;this.Aq6=E;this.Ld.Cv(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.AK._Init.call(this.NG={I:this},0);C.CH._Init.call(this.Jd={I:this
},0);C.CH._Init.call(this.Jy={I:this},0);C.CH._Init.call(this.HQ={I:this},0);A.acg.
Ap._Init.call(this.Py={I:this},0);A.acg.Ap._Init.call(this.I7={I:this},0);A.acg.
Ap._Init.call(this.Ld={I:this},0);A.acg.Ap._Init.call(this.TY={I:this},0);A.acg.
Ap._Init.call(this.TZ={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
AZ(0x3F);this.Background.H(BD);this.Background.L(A.jb.Ad_);this.NG.H(W6);this.NG.
L(A.jb.CS);this.NG.Z(false);this.Jd.AZ(0x14);this.Jd.H(UT);this.Jd.A6(0x12);this.
Jy.AZ(0x14);this.Jy.H(Z7);this.Jy.A6(0x12);this.HQ.H(Z8);this.Py.H(W7);this.I7.H(
W8);this.Ld.H(S_);this.Ld.Z(false);this.TY.H(UU);this.TY.Z(false);this.TZ.H(UV);
this.TZ.Z(false);this.J(this.Background,0);this.J(this.NG,0);this.J(this.Jd,0);this.
J(this.Jy,0);this.J(this.HQ,0);this.J(this.Py,0);this.J(this.I7,0);this.J(this.Ld
,0);this.J(this.TY,0);this.J(this.TZ,0);this.Jd.S(A.aaL(A.fl.Ak));this.Jd.A2(A.aaL(
A.fl.Bh));this.Jd.Q5([this,this.A3q]);this.Jy.S(A.aaL(A.fl.Ak));this.Jy.A2(A.aaL(
A.fl.Bh));this.Jy.Q5([this,this.A3q]);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(
A.fl.Bh));this.HQ.Q5([this,this.A3q]);this.VU=A.aaL(A.fl.Ak);this.VV=A.aaL(A.fl.
Ak);this.VX=A.aaL(A.fl.Ak);this.Py.Ax(null);this.I7.Ax(null);this.Ld.Ax(null);this.
TY.Ax(A.aaL(A.ach.AMG));this.TZ.Ax(A.aaL(A.ach.Ajp));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.P;this.Background._Done();this.NG._Done();this.Jd._Done(
);this.Jy._Done();this.HQ._Done();this.Py._Done();this.I7._Done();this.Ld._Done(
);this.TY._Done();this.TZ._Done();A.Core.P._Done.call(this);},_ReInit:function(){
A.Core.P._ReInit.call(this);this.Background._ReInit();this.NG._ReInit();this.Jd.
_ReInit();this.Jy._ReInit();this.HQ._ReInit();this.Py._ReInit();this.I7._ReInit(
);this.Ld._ReInit();this.TY._ReInit();this.TZ._ReInit();this.Jd.S(A.aaL(A.fl.Ak)
);this.Jd.A2(A.aaL(A.fl.Bh));this.Jy.S(A.aaL(A.fl.Ak));this.Jy.A2(A.aaL(A.fl.Bh)
);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(A.fl.Bh));this.AE4(A.aaL(A.fl.Ak));
this.ArK(A.aaL(A.fl.Ak));this.Anu(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.VU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cg)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NG)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jy).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Py)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ld)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADa={Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper),B.Art,B.AkB],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper)
,B.A8N,B.AFy],0);A.pe([this,this.Nm],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhD)this.Ab1(A._GetAutoObject(A.Device.Helper).AhD.AON());else this.
Ab1(-1);if(!!A._GetAutoObject(A.Device.Helper).Ux)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak3(A._GetAutoObject(A.Device.Helper).Ux.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmU._Init.call(this,aArg);this.__proto__=C.ADa;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGN={Ex:null,Eh:null,
FW:null,XV:null,TC:null,IG:null,IH:null,Init:function(aArg){},WF:function(G){var
B;C.DR.WF.call(this,G);var AKG=this.Azk(A._GetAutoObject(A.Device.Helper).UD.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALx=this.Azk(A._GetAutoObject(
A.Device.Helper).UE.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var Bzv=
this.Azk(A._GetAutoObject(A.Device.Device).AcD);this.Ex.H(A.abP(this.Ex.M,0));this.
Ex.H([].concat(this.Ex.M.slice(0,3),((B=this.M)[3]-B[1])-AKG));this.IH.H(A.abO(this.
IH.M,this.Ex.M[3]-((((B=this.IH.M)[3]-B[1])/2)|0)));this.Eh.H(A.abP(this.Eh.M,this.
Ex.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-B[1])-ALx));this.
IG.H(A.abO(this.IG.M,(this.Eh.M[3]-((((B=this.IG.M)[3]-B[1])/2)|0))+2));this.FW.
H(A.abP(this.FW.M,this.Eh.M[3]));this.FW.H([].concat(this.FW.M.slice(0,3),((B=this.
M)[3]-B[1])-Bzv));this.TC.H(A.abO(this.TC.M,this.FW.M[3]-((((B=this.TC.M)[3]-B[1
])/2)|0)));this.XV.H(A.abP(this.XV.M,this.FW.M[3]));this.XV.H([].concat(this.XV.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJD:function(AoN){return A._GetAutoObject(A.
Device.Converter).AkY(AoN);},AKa:function(){return A._GetAutoObject(A.acj.Temperature
).AlG();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AK._Init.call(this.
Ex={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.
FW={I:this},0);A.acg.AK._Init.call(this.XV={I:this},0);A.acg.AK._Init.call(this.
TC={I:this},0);A.acg.AK._Init.call(this.IG={I:this},0);A.acg.AK._Init.call(this.
IH={I:this},0);this.__proto__=C.AGN;this.Ex.AZ(0xD);this.Ex.H(AcK);this.Ex.L(A.jb.
Gh);this.Eh.AZ(0xD);this.Eh.H(S$);this.Eh.L(A.jb.H8);this.FW.AZ(0xD);this.FW.H(Z9
);this.FW.L(A.jb.E1);this.XV.AZ(0xD);this.XV.H(Afz);this.XV.L(A.jb.Afs);this.TC.
AZ(0xD);this.TC.H(Z_);this.TC.Awr(A.jb.Afs);this.TC.Aws(A.jb.Afs);this.TC.Awu(A.
jb.E1);this.TC.Awt(A.jb.E1);this.IG.AZ(0xD);this.IG.H(W9);this.IG.Awr(A.jb.E1);this.
IG.Aws(A.jb.E1);this.IG.Awu(A.jb.H8);this.IG.Awt(A.jb.H8);this.IH.AZ(0xD);this.IH.
H(Z$);this.IH.Awr(A.jb.H8);this.IH.Aws(A.jb.H8);this.IH.Awu(A.jb.Gh);this.IH.Awt(
A.jb.Gh);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FW,-1);this.J(this.XV
,-1);this.J(this.TC,-1);this.J(this.IG,-1);this.J(this.IH,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FW._Done(
);this.XV._Done();this.TC._Done();this.IG._Done();this.IH._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ex._ReInit();this.Eh._ReInit(
);this.FW._ReInit();this.XV._ReInit();this.TC._ReInit();this.IG._ReInit();this.IH.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Co={Avh:null,AmO:null,AQa:null,Aq3:null,AqM:null,AvC:null,AR:null,Ags:null,Aml:
null,N:null,Bo:null,QR:null,AxI:A.jV,AUA:false,AGB:false,Apd:false,Axe:255,LF:false
,KF:false,Qs:false,Ai:function(Ae){var B;C.OV.Ai.call(this,Ae);var He=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var IB=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FQ=
A.jb.CJ;var GW=A.jb.Text;if(this.Hk){FQ=A.jb.Bm;GW=A.jb.Text;}if(!He){this.Background.
L(A.jb.CS);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IB){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.AmZ);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW
);}this.LF=He;this.KF=Fu;this.Qs=GE;this.Apd=IB;},Qr:function(G){this.Am();A.pe(
this.AR,this);},Bws:function(s){this.Qr(s);},IZ:function(G){if(this.QR.Acf)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Atg:function(s){this.IZ(s);},AeU:function(E){if(A.aa0(this.Ags,E))return;this.
Ags=E;},A_h:function(E){if(this.AxI===E)return;this.AxI=E;},Zp:function(E){if(this.
Avh===E)return;this.Avh=E;},Zq:function(E){if(this.AmO===E)return;this.AmO=E;},A9Y:
function(E){if(this.Axe===E)return;this.Axe=E;},Gq:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALe();},A2Z:
function(G){},BGf:function(s){this.A2Z(s);},Akw:function(E){if(this.Aq3===E)return;
this.Aq3=E;},LX:function(E){if(A.aa0(this.Aml,E))return;this.Aml=E;},Bmf:function(
E){if(this.AqM===E)return;this.AqM=E;},L0:function(E){if(this.AvC===E)return;this.
AvC=E;},Zu:function(E){if(this.AGB===E)return;this.AGB=E;this.ALe();},ALe:function(
){var B;var Qy=this.DK;if(this.AGB)Qy=Qy+A.aaR(A.acf.Colon);if(this.AUA)Qy=Qy+W_;
this.V.R(Qy);},ATk:function(E){if(this.AUA===E)return;this.AUA=E;this.ALe();},_Init:
function(aArg){C.OV._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BK._Init.call(this.QR={I:this},0);this.__proto__=C.Co;this.Bo.PR(0);
this.Bo.Wz(50);this.Bo.Ar(false);this.QR.Filter=1;this.Bo.Mz=[this,this.Bws];this.
QR.BL=[this,this.Atg];this.Avh=A.aaL(A.fl.Ak);this.AmO=A.aaL(A.fl.Ak);this.AQa=A.
aaL(A.ach.E2);this.AqM=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OV;this.
Bo._Done();this.QR._Done();C.OV._Done.call(this);},_ReInit:function(){C.OV._ReInit.
call(this);this.Bo._ReInit();this.QR._ReInit();this.Zp(A.aaL(A.fl.Ak));this.Zq(A.
aaL(A.fl.Ak));this.Bmf(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OV._Mark.call(
this,D);if((B=this.Avh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmO)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqM)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ags)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Aml)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Ds={Q:null,Am_:null,Ana:null,Hw:null,H4:null,AM:0,Go:0,F_:100,FG:0,Init:function(
aArg){},IZ:function(G){this.FG=1;C.Eg.IZ.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hw.H([0,aSize[1]-40,40,aSize[1]]);this.H4.H([].concat(A.
abe(aSize,AhS),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fu=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hw.L(this.V.AQ);this.H4.L(this.V.AQ);this.Hw.
Z((Fu||GE)&&(this.AM>this.Go));this.H4.Z((Fu||GE)&&(this.AM<this.F_));if(this.FG===
6)this.Hw.L(A.jb.E1);if(this.FG===7)this.H4.L(A.jb.E1);},BeM:function(G){this.FG=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.AyL],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qr:function(G){if(this.FG===6)A.pe([this,this.AyL],this);if(this.FG===
7)A.pe([this,this.AyM],this);if(this.FG===1)A.pe(this.AR,this);this.FG=0;this.Am(
);},C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcT:function(
s){this.C3(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcT],E,0);if(!!E)A.pe([this,
this.AcT],this);},BeN:function(G){this.FG=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.AyM],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Kb:function(G){this.FG=0;}
,AyM:function(s){this.Kb(s);},J8:function(G){this.FG=0;},AyL:function(s){this.J8(
s);},Bx:function(E){if(E<this.Go)E=this.Go;if(E>this.F_)E=this.F_;if(this.AM===E
)return;this.AM=E;this.Am();},BaR:function(Aq){this.Bx(Aq);},F$:function(E){if(this.
Go===E)return;this.Go=E;this.Am();},EU:function(E){if(this.F_===E)return;this.F_=
E;this.Am();},Ug:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BK._Init.call(this.Am_={I:this},0);A.Core.BK._Init.call(this.Ana={
I:this},0);A.acg.Ap._Init.call(this.Hw={I:this},0);A.acg.Ap._Init.call(this.H4={
I:this},0);this.__proto__=C.Ds;this.H(KY);this.Am_.Filter=6;this.Ana.Filter=7;this.
Background.H(KY);this.V.H(AcL);this.V.R(Lv);this.Hw.H(AhT);this.H4.H(An$);this.H4.
Cv(1);this.J(this.Hw,0);this.J(this.H4,0);this.Am_.BL=[this,this.BeM];this.Am_.D1=[
this,this.BeM];this.Ana.BL=[this,this.BeN];this.Ana.D1=[this,this.BeN];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.Hw.Ax(A.aaL(A.ach.
Ajq));this.H4.Ax(A.aaL(A.ach.Ajq));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Am_._Done();this.Ana._Done();this.Hw._Done();this.H4._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Am_._ReInit();this.
Ana._ReInit();this.Hw._ReInit();this.H4._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Am_)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Du:function(){return-1;},C7:function(aIndex){return-1;},Gj:function(
aIndex){return A.jV;},DZ:function(A_){return-1;},H3:function(){return-1;},At:function(
E){this.Q=E;},B$:function(Aq){this.At(Aq);},ACQ:function(aIndex){return null;},ACS:
function(aIndex){return 0;},B_:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Ir={Axz:null
,BS:null,AG0:A.jV,AVd:A.jV,Aj1:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Ds.Ai.call(this,Ae);if(!this.Axz){this.BS.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BS.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVd);else this.BS.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AG0);}}else(B=
this.Axz)?B[1].call(B[0],this):null;},Kb:function(G){var F;var BO=this.AM;C.Ds.Kb.
call(this,G);this.Bx(this.AM+this.Aj1);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J8:function(G){var F;var BO=this.AM;C.
Ds.J8.call(this,G);this.Bx(this.AM-this.Aj1);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IP:function(E){if(this.AG0===E)return;
this.AG0=E;this.Am();},Ja:function(E){if(this.AVd===E)return;this.AVd=E;this.Am(
);},AS0:function(E){if(this.Aj1===E)return;this.Aj1=E;},A_e:function(E){if(A.aa0(
this.Axz,E))return;this.Axz=E;},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.CH._Init.call(this.BS={I:this},0);this.__proto__=C.Ir;this.H(KY);this.BS.H(Oa);
this.J(this.BS,-1);this.BS.S(A.aaL(A.fl.Af));this.BS.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Ds;this.BS._Done();C.Ds._Done.call(this
);},_ReInit:function(){C.Ds._ReInit.call(this);this.BS._ReInit();this.BS.S(A.aaL(
A.fl.Af));this.BS.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ds._Mark.call(this
,D);if((B=this.Axz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BS)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BU={AC:
null,Dz:null,HL:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Ds.Bl.call(this,aSize);this.Dz.H([this.Hw.M[2]-10,this.Hw.M[1],this.
H4.M[0]+10,this.Hw.M[3]]);this.Dz.AFc((B=this.Dz.M)[2]-B[0]);this.Dz.HH(this.Dz.
Gr,true,null,null);},Ai:function(Ae){var B;C.Ds.Ai.call(this,Ae);var Fu=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.Dz.AbC(0,this.Dz.AY-1);this.Hw.Z(Fu||GE);this.H4.
Z(Fu||GE);},C3:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},Kb:function(G){var F;var BO=this.AM;C.Ds.Kb.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J8:function(G){var F;var BO=this.AM;
C.Ds.J8.call(this,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var Qx=0;if(E<this.Go){E=this.F_;Qx=-this.Dz.Wa*this.Dz.AY;}if(E>this.F_){E=this.
Go;Qx=this.Dz.Wa;}C.Ds.Bx.call(this,E);if(!!Qx)this.Dz.Ga(Qx);this.Dz.GS(this.AM
);if(this.Dz.Bjm())this.Dz.BoT(false,false);this.Dz.HH(this.Dz.Gr,true,this.HL,null
);},Hl:function(G){var B;var Ge=this.Dz.G5;var Cz=(C.CH.isPrototypeOf(B=this.Dz.
Ci)?B:null);if(!Cz)return;Cz.S(this.V.B6);Cz.Aw0(19);Cz.A2(this.V.AmN);Cz.Bm_(19
);Cz.Cu(this.V.AqL);Cz.Bm$(19);Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gj(Ge));
else Cz.R(W$);Cz.H(A.abK(Cz.M,[this.Dz.Wa,(B=this.Dz.M)[3]-B[1]]));},Bv6:function(
s){this.Hl(s);},CK:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
F$(0);this.EU(this.AC.Du()-1);this.Dz.Jx(this.AC.Du());this.Dz.AbC(0,this.Dz.AY-
1);}},_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Core.Dz._Init.call(this.
Dz={I:this},0);A.acl.Gk._Init.call(this.HL={I:this},0);this.__proto__=C.BU;this.
H(KY);this.Dz.N0(C.CH);this.HL.WC(23);this.HL.HM(1);this.HL.Fp(200);this.J(this.
Dz,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dz.Hl=[this,this.Bv6
];this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.Dz._Done();this.HL.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
Dz._ReInit();this.HL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SQ={FJ:null,OF:null,Dl:null,Au:null,Jv:null,HK:null,Ps:null,VS:null,Q0:null,
Yg:null,P6:null,Gx:null,Gw:null,FX:0,A8:0,Ash:false,Bjh:false,Init:function(aArg
){},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hw.Z(false);this.H4.Z(false);var AtQ=
A.jV;if(!!this.Dl){this.Ps.R(this.Au.Format(Aaa));this.Q0.R(this.Au.Format(AhU));
this.P6.R(this.Au.Format(AhV));}if(this.A8===1){this.HK.Z(true);this.HK.H(this.Ps.
M);this.HK.L(this.V.AQ);this.Ps.L(this.Background.AQ);this.Q0.L(this.V.AQ);this.
P6.L(this.V.AQ);AtQ=A.aaR(A.acf.A5C);}else if(this.A8===2){this.HK.Z(true);this.
HK.H(this.Q0.M);this.HK.L(this.V.AQ);this.Ps.L(this.V.AQ);this.Q0.L(this.Background.
AQ);this.P6.L(this.V.AQ);AtQ=A.aaR(A.acf.Hj);}else if(this.A8===3){this.HK.Z(true
);this.HK.H(this.P6.M);this.HK.L(this.V.AQ);this.Ps.L(this.V.AQ);this.Q0.L(this.
V.AQ);this.P6.L(this.Background.AQ);AtQ=A.aaR(A.acf.Year);}else{this.HK.Z(false);
this.Ps.L(this.V.AQ);this.Yg.L(this.V.AQ);this.Q0.L(this.V.AQ);this.VS.L(this.V.
AQ);this.P6.L(this.V.AQ);}if(AtQ.length>0){if(this.AGB)this.V.R((((this.DK+AcM)+
AtQ)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcM)+
AtQ)+String.fromCharCode(0x29));}else this.ALe();},Qr:function(G){if(this.FG===1
)A.pe([this,this.U$],this);else if(this.FG===4)A.pe([this,this.AiE],this);else if(
this.FG===5)A.pe([this,this.Aiq],this);C.Ds.Qr.call(this,G);},Kb:function(G){switch(
this.A8){case 0:C.Ds.Kb.call(this,G);break;case 3:break;default:this.Adv(this);}
},J8:function(G){switch(this.A8){case 0:C.Ds.J8.call(this,G);break;default:this.
Aip(this);}},Adx:function(G){var F;if(!!this.Dl)this.Uk((F=this.Dl,F[1].call(F[0
])));},Ab4:function(E){if(A.aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.Adx
],this.Dl,0);this.Dl=E;if(!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx
],this);},Uk:function(E){if(this.FX===E)return;this.FX=E;this.Au.Initialize(this.
FX);this.Am();},Adv:function(G){this.FG=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
U$],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Bbn:function(s){this.Adv(s);},U$:
function(G){this.Ew(this.A8+1);},AlZ:function(G){this.FG=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiE],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AlY:function(
G){this.FG=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Aiq],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiE:function(G){var B;var F;var BO=this.FX;switch(this.A8){
case 1:{if(this.Ash){var ABc=A._NewObject(A.Core.An0,0);ABc.Kl=1;if(this.Au.J(ABc
).JQ()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Au.GK<this.Au.Zj()
)this.Au.Lp(this.Au.GK+1);}break;case 2:{if(this.Ash){var ABc=A._NewObject(A.Core.
An0,0);ABc.Kl=this.Au.Zj();if(this.Au.J(ABc).JQ()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Au.Uo(this.Au.Hj+1);if(this.Au.Zj()<this.Au.GK)this.Au.Lp(this.
Au.Zj());}break;case 3:{if(this.Ash){var A1k=A._NewObject(A.Core.Bs,0);A1k.Initialize(
this.Au.JQ());A1k.Year+=1;if(A1k.JQ()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
Uk(((B=(this.Au.JQ()|0))<0)?B+0x100000000:B);if(this.FX!==BO){if(!!this.Dl)(F=this.
Dl,F[2].call(F[0],this.FX));A.abo(this.Dl,0);}},Aiq:function(G){var B;var F;var BO=
this.FX;if(this.A8===1)this.Au.Lp(this.Au.GK-1);if(this.A8===2){this.Au.Uo(this.
Au.Hj-1);if(this.Au.Zj()<this.Au.GK)this.Au.Lp(this.Au.Zj());}if(this.A8===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.Uk(((B=(this.Au.JQ()|
0))<0)?B+0x100000000:B);if(this.FX!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],
this.FX));A.abo(this.Dl,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[
0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=
null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aey));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U$];}break;case 2:{(F=this.N,F[
1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmW
));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
Aip];(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aey));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U$];}break;case 3:{(F=this.N,F[
1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmW
));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
Aip];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FJ.AkN((F=this.N,F[1].call(F[
0])));}},AFw:function(E){if(this.Ash===E)return;this.Ash=E;},FU:function(G){this.
Ew(1);},Hd:function(G){this.Ew(0);},Ew:function(EN){var F;var AAl=this.A8;if(!this.
A8){this.FJ.Ajx((F=this.N,F[1].call(F[0])));if((EN===1)&&!this.FX){var BO=this.FX;
this.Uk(A._GetAutoObject(A.Device.Helper).Dv());if(this.FX!==BO){if(!!this.Dl)(F=
this.Dl,F[2].call(F[0],this.FX));A.abo(this.Dl,0);}}}this.A8=EN;this.Bjh=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.Bw=
!!this.A8;if((!!AAl&&!this.A8)&&!!this.OF)A.pe(this.OF,this);this.Am();},Aip:function(
G){if(this.A8>1)this.Ew(this.A8-1);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Au={I:this},0);A.Core.BK._Init.call(this.Jv={I:this}
,0);A.acg.AK._Init.call(this.HK={I:this},0);A.acg.Text._Init.call(this.Ps={I:this
},0);A.acg.Text._Init.call(this.VS={I:this},0);A.acg.Text._Init.call(this.Q0={I:
this},0);A.acg.Text._Init.call(this.Yg={I:this},0);A.acg.Text._Init.call(this.P6={
I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.Core.BK._Init.call(this.Gw={
I:this},0);this.__proto__=C.SQ;this.H(UW);this.V.R(Aoa);this.Hw.Z(false);this.H4.
Z(false);this.Jv.Filter=1;this.HK.H(Aob);this.HK.L(0x55FFFFFF);this.Ps.H(Aoc);this.
Ps.I_(true);this.Ps.A6(0x14);this.VS.H(Aod);this.VS.I_(true);this.VS.A6(0x14);this.
VS.R(Ak_);this.Q0.H(AsT);this.Q0.I_(true);this.Yg.H(Ax0);this.Yg.I_(true);this.Yg.
R(Ak_);this.P6.H(Ax1);this.P6.I_(true);this.P6.A6(0x11);this.Gx.Filter=4;this.Gx.
Bw=false;this.Gw.Filter=5;this.Gw.Bw=false;this.J(this.HK,0);this.J(this.Ps,0);this.
J(this.VS,0);this.J(this.Q0,0);this.J(this.Yg,0);this.J(this.P6,0);this.Jv.BL=[this
,this.Bbn];this.Ps.S(A.aaL(A.fl.EK));this.VS.S(A.aaL(A.fl.EK));this.Q0.S(A.aaL(A.
fl.EK));this.Yg.S(A.aaL(A.fl.EK));this.P6.S(A.aaL(A.fl.EK));this.Gx.BL=[this,this.
AlZ];this.Gx.D1=[this,this.AiE];this.Gw.BL=[this,this.AlY];this.Gw.D1=[this,this.
Aiq];this.FJ=A._NewObject(C.Aer,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ds;this.Au._Done();this.Jv._Done();this.HK._Done();this.Ps._Done();this.VS._Done(
);this.Q0._Done();this.Yg._Done();this.P6._Done();this.Gx._Done();this.Gw._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Au._ReInit(
);this.Jv._ReInit();this.HK._ReInit();this.Ps._ReInit();this.VS._ReInit();this.Q0.
_ReInit();this.Yg._ReInit();this.P6._ReInit();this.Gx._ReInit();this.Gw._ReInit(
);this.Ps.S(A.aaL(A.fl.EK));this.VS.S(A.aaL(A.fl.EK));this.Q0.S(A.aaL(A.fl.EK));
this.Yg.S(A.aaL(A.fl.EK));this.P6.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Ds._Mark.call(this,D);if((B=this.FJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jv
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OI={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.BdG],[B=A._GetAutoObject(A.Device.Device),B.A8w,B.BaY],0);
A.pe([this,this.BdG],this);},Du:function(){return 16;},Gj:function(aIndex){return this.
LanguageToString.BR(this.C7(aIndex));},At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(
A.Device.Device).Anx(E);},BdG:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OI;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,5);this.Cb.
Set(3,3);this.Cb.Set(4,8);this.Cb.Set(5,9);this.Cb.Set(6,7);this.Cb.Set(7,6);this.
Cb.Set(8,10);this.Cb.Set(9,2);this.Cb.Set(10,11);this.Cb.Set(11,12);this.Cb.Set(
12,13);this.Cb.Set(13,14);this.Cb.Set(14,15);this.Cb.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.Cm;this.LanguageToString._Done();C.Cm._Done.
call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Rd={TemperatureUnitToString:
null,Du:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BR(aIndex);},DZ:function(A_){return A_;},H3:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Aw4(E);}
,Init:function(aArg){var B;A.zX([this,this.Bgc],[B=A._GetAutoObject(A.Device.Device
),B.Aru,B.Atf],0);A.pe([this,this.Bgc],this);},Bgc:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B_,this.B$],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Rd;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AUT={Ajv:null,Acz:null,Ky:null,AP:null,A$:null,Bl:function(aSize){C.Ba.Bl.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Ky.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajv.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.Acz.H(this.Ajv.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Ky.L(this.V.AQ);},Init:function(aArg){},Cf:function(Ad){if(!this.AX
)return;this.Hr=Ad;if(!!this.AX){var Alx=this.AX.Hu(Ad,6);var ApS=this.AX.CF(Ad,
7);var At6=this.AX.I5(Ad,9);this.T(A._GetAutoObject(A.acj.KK).ACM(Alx));this.Ky.
R(A._GetAutoObject(A.acj.KK).A6l(Alx));this.Acz.R(A._GetAutoObject(A.Device.Converter
).AkY(ApS));this.Acz.L(A._GetAutoObject(A.acj.Assessment).Xv(At6));this.Ajv.L(A.
_GetAutoObject(A.acj.Assessment).Qo(At6));this.Am();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Ajv={I:this},0);A.acg.Text._Init.
call(this.Acz={I:this},0);A.acg.Text._Init.call(this.Ky={I:this},0);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A$={I:this},0);this.__proto__=
C.AUT;this.V.H(O5);this.Acz.L(A.jb.Text);this.Ky.R(Rm);this.Ky.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A$.H(Ax2);this.A$.L(A.jb.Bc);this.J(this.Ajv,0);this.J(this.Acz
,0);this.J(this.Ky,0);this.J(this.AP,0);this.J(this.A$,0);this.Acz.S(A.aaL(A.fl.
Af));this.Ky.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajv._Done();this.Acz._Done();this.Ky._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajv._ReInit(
);this.Acz._ReInit();this.Ky._ReInit();this.AP._ReInit();this.A$._ReInit();this.
Acz.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acz)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.Gb={AX:null,AR:null,Cq:null,AD:
null,Afj:null,NL:null,KM:A.jV,Li:null,AVf:true,Hl:function(G){var B;var Ge=this.
AD.G5;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ci)?B:null);if(!Aa)return;Aa.Zn(this.
AX);Aa.Cf(Ge);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GN]));
},N0:function(E){if(E===this.Li)return;this.Li=E;this.AD.N0(E);},Zn:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Cf],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Cf],E,0);A.pe([this,this.Cf],this);},Cf:function(G){if(this.AVf===
false)return;if(!!this.AX){this.AD.Jx(this.AX.B9());this.AD.AbC(0,this.AD.AY-1);
}else this.AD.Jx(0);if((this.AD.AY>0)&&(this.FM()<0))this.GS(0);if(this.FM()>=this.
AD.AY){this.GS(0);this.AD.Ga(0);}if(this.AD.AY<=0){this.NL.Z(true);this.GS(-1);}
else{this.NL.Z(false);this.ABB(null,null);}},Fj:function(G){var B;this.Afj.Mw(this.
AD.GN*this.AD.AY);this.Afj.My((B=this.AD.M)[3]-B[1]);this.Afj.Mx(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cq.CO){case 4:if(this.FM()>0)this.GS(
this.FM()-1);break;case 5:if(this.FM()<(this.AD.AY-1))this.GS(this.FM()+1);break;
default:this.Cq.NH=true;}this.AD.HH(this.FM(),true,null,null);}else if((this.Cq.
CO!==4)&&(this.Cq.CO!==5))this.Cq.NH=true;},Zr:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbC(0,this.AD.AY);},GS:function(E){this.AD.GS(E);this.AD.HH(E,
true,null,null);},FM:function(){return this.AD.Gr;},Dj:function(E){if(this.KM===
E)return;this.KM=E;this.NL.R(E);},ABB:function(AcW,E7){this.AD.ABB(AcW,E7);},ATz:
function(E){if(this.AVf===E)return;this.AVf=E;if(E)A.pe([this,this.Cf],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afj={I:this},
0);A.acg.Text._Init.call(this.NL={I:this},0);this.__proto__=C.Gb;this.H(UX);this.
Li=C.Ba;this.Cq.Filter=147;this.AD.AZ(0x3F);this.AD.H(UX);this.AD.Ae6(40);this.Afj.
AZ(0x3A);this.Afj.H(AsU);this.NL.AZ(0x3F);this.NL.H(Ax3);this.NL.Hm(10);this.NL.
KR(true);this.NL.A6(0xA);this.NL.L(A.jb.Text);this.J(this.AD,0);this.J(this.Afj,
0);this.J(this.NL,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.AD.
El=[this,this.Fj];this.AD.Hl=[this,this.Hl];this.NL.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.P;this.Cq._Done();this.AD._Done();this.Afj._Done();this.
NL._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Cq._ReInit();this.AD._ReInit();this.Afj._ReInit();this.NL._ReInit();this.
NL.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hr:-1,CP:function(){this.Cf(this.Hr);},Ai:function(Ae){var B;C.Co.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hr%2)===1)this.Background.L(A.
jb.CJ);else this.Background.L(A.jb.CS);}},Zn:function(E){if(this.AX===E)return;this.
AX=E;},Cf:function(Ad){A.ab5("%s",Ax4);},_Init:function(aArg){C.Co._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GZ={Bg:null,FB:null
,DP:null,FK:null,V0:null,Kj:null,KM:A.jV,ATV:0,ATW:0,Afk:false,CP:function(){if(
A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.Device
).Dw(0);A.pe([this,this.BaD],this);}},Init:function(aArg){var B;A.zX([this,this.
Bek],[B=A._GetAutoObject(A.Device.Device),B.AEq,B.AIG],0);A.zV([this,this.Af8],A.
_GetAutoObject(A.Device.Device).An,0);A.zV([this,this.AcE],A._GetAutoObject(A.Device.
Device).An,0);A.zX([this,this.BAP],[B=A._GetAutoObject(A.Device.Helper),B.U0,B.U3
],0);A.pe([this,this.AcE],this);A.pe([this,this.A0e],this);A.pe([this,this.Axu],
this);},Wx:function(G){this.Agt();var O;for(O=this.Kj.Du()-1;O>=0;O=O-1)switch(this.
Kj.C7(O)){case 0:this.AdP(A.aaR(A.acf.A4N),[this,this.Bnx],0);break;case 14:this.
AdP(A.aaR(A.acf.BgS),[this,this.Bny],14);break;case 1:this.AdP(A.aaR(A.acf.Temperature
),[this,this.ATB],1);break;case 2:this.AdP(A.aaR(A.acf.Rating),[this,this.ATA],2
);break;case 3:this.AdP(A.aaR(A.acf.Aft),[this,this.ATC],3);break;default:A.ab5(
"%s",Ax5);}A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.BhP
));A._GetAutoObject(A.Device.Device).Dw(6);},BaD:function(s){this.Wx(s);},DE:function(
G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var AfV=this.Kj.DZ(A._GetAutoObject(
A.Device.Device).Kj);if(this.Afk)return;switch(D5.CO){case 6:{AfV=AfV-1;if(AfV<0
)AfV=this.Kj.Du()-1;A._GetAutoObject(A.Device.Device).Zl(this.Kj.C7(AfV));}break;
case 7:{AfV=AfV+1;if(AfV>=this.Kj.Du())AfV=0;A._GetAutoObject(A.Device.Device).Zl(
this.Kj.C7(AfV));}break;default:D5.NH=true;}},CC:function(G){if(this.DP.AzW()){this.
DP.Ac6();if(this.DP.AzW()===false)this.Bg.ATz(true);return;}else if(this.Afk)this.
AAW(this);if(!!this.Bg)this.Bg.ATz(true);},E4:function(G){if(!!this.Bg)this.Bg.ATz(
false);},Axu:function(G){var B;if(!!this.Bg)this.HN(this.Bg);this.Bg=A._NewObject(
C.AMs,0);this.Bg.H(Aoe);this.Bg.Zn(A._GetAutoObject(A.Device.Device).An);this.Bg.
Zr([this,this.AIS]);if(!!this.FB)this.Bg.A9i([B=this.FB,B.A8P,B.A_a]);this.A30(this
);this.J(this.Bg,0);if(this.Afk===false)this.Bb(this.Bg);this.Bek(this);this.BoE(
this);},A9f:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Dr(this.A6y(
));this.Ej.AR=[this,this.AIS];this.ALk(this);this.Ej.Ar(true);this.Bb(this.Ej);this.
Afk=true;},Bkd:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);if(!this.
Bg)return;var Aa=(C.AB0.isPrototypeOf(B=this.Bg.AD.BiV(this.Bg.AD.Gr))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).G7(Aa.Hr);else A._GetAutoObject(A.Device.
Helper).W.E5();this.Agf();},Agc:function(G){var F;if(!this.FK)this.A5P(this);else
switch((F=this.FK,F[1].call(F[0]))){case 0:this.A5P(this);break;case 1:this.BhQ(
this);break;case 9:this.A5Q(this);break;case 4:this.A5S(this);break;case 6:this.
A5V(this);break;case 8:this.ANT(this);break;case 2:this.A5Z(this);break;case 3:this.
BhR(this);break;case 7:this.BhS(this);break;case 5:this.BhT(this);break;case 10:
this.BhV(this);break;case 11:this.A5R(this);break;case 12:this.A5Y(this);break;case
13:this.A50(this);break;case 14:this.A5T(this);break;case 18:this.A5U(this);break;
case 15:this.A5W(this);break;case 16:this.A51(this);break;case 17:this.A5X(this);
break;default:A.ab5("%s%e",AfA,(F=this.FK,F[1].call(F[0])));}},AIS:function(s){this.
Agc(s);},Blq:function(G){this.Dr(C.Kp);this.Ej.AR=null;this.Afk=false;this.AcE(this
);this.BfG();this.N.TY.Dk(255);this.N.TZ.Dk(255);this.Bb(this.Bg);this.Ej.Ar(false
);},Ank:function(G){A._GetAutoObject(C.A9).Fy();},Dj:function(E){if(this.KM===E)
return;this.KM=E;this.A30(this);},Abp:function(){switch(A._GetAutoObject(A.Device.
Device).Kj){case 14:return C.AM3;case 2:return C.AM5;case 1:return C.AM6;case 3:
return C.AM8;case 0:case 8:case 9:case 10:case 4:case 5:case 6:return C.Aqq;case
7:return C.ABZ;case 12:return C.AB2;case 11:return C.ABY;case 13:return C.AB1;default:
throw new Error(Aof);}},Abq:function(){switch(A._GetAutoObject(A.Device.Device).
Kj){case 14:return C.APu;case 2:return C.ADh;case 1:return C.APw;case 3:return C.
APy;case 4:return C.ADd;case 0:case 8:case 9:case 10:case 5:case 6:return C.AqX;
case 7:return C.ADf;case 12:return C.ADg;case 11:return C.ADe;case 13:return C.ADi;
default:throw new Error(Aof);}},Bek:function(G){this.ATd(A._GetAutoObject(A.Device.
Device).Kj);if(!!this.Bg){this.Bg.N0(this.Abp());this.BoJ(this);}},BoJ:function(
G){var B;if(!!this.FB)this.HN(this.FB);this.FB=(C.Dc.isPrototypeOf(B=A._NewObject(
this.Abq(),0))?B:null);this.FB.H(IU);if(!!this.Bg)this.Bg.A9i([B=this.FB,B.A8P,B.
A_a]);this.J(this.FB,0);},Bkb:function(G){this.Q8(this);A._GetAutoObject(A.Device.
Device).Dw(0);},ATB:function(G){A._GetAutoObject(A.Device.Device).Zl(1);},ATA:function(
G){A._GetAutoObject(A.Device.Device).Zl(2);},ATC:function(G){A._GetAutoObject(A.
Device.Device).Zl(3);},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A.
_GetAutoObject(A.Device.Helper).Mq());},A0e:function(s){this.Q8(s);},HO:function(
G){if(this.Afk){this.ALk(this);return;}this.N.C1(A.aaL(A.ach.E2));this.N.Cs(A.aaL(
A.ach.ADB));this.N.C2(A.aaL(A.ach.Options));this.N.CE=[this,this.Ank];this.N.Cg=[
this,this.A9f];this.N.Cl=[this,this.BaD];this.N.Hx(A.jV);this.N.FC(A.jV);this.N.
CV(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.I7.Dk(100);this.N.
Cg=null;}else this.N.I7.Dk(255);},AyK:function(s){this.HO(s);},AdP:function(Aid,
Aie,AJf){A._GetAutoObject(C.B4).ABA(Aid,Aie,[this,this.A8J,this.ATd],AJf);},Af8:
function(G){this.A30(this);if(this.Afk)A.pe([this,this.ALk],this);},Agf:function(
){A._GetAutoObject(C.A9).Cd(9);},A30:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QI()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dj(
A.aaR(A.acf.AEf));else if(A._GetAutoObject(A.Device.Helper).Aq$(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dj(this.KM);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).ACV(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dj(A.aaR(A.acf.AN3));else this.Bg.Dj(A.aaR(
A.acf.AN2));}else this.Bg.Dj(A.aaR(A.acf.ARY));},AEG:function(G){var F;if(!!this.
FK)(F=this.FK,F[2].call(F[0],0));},AwL:function(E){if(A.aaZ(this.FK,E))return;if(
!!this.FK)A.z$([this,this.A0n],this.FK,0);this.FK=E;if(!!E)A.zX([this,this.A0n],
this.FK,0);if(!!E)A.pe([this,this.A0n],this);},AEM:function(G){var F;if(!!this.FK
)(F=this.FK,F[2].call(F[0],1));},AwQ:function(G){var F;if(!!this.FK)(F=this.FK,F[
2].call(F[0],2));},ATh:function(G){var F;if(!!this.FK)(F=this.FK,F[2].call(F[0],
3));},ATv:function(G){var F;if(!!this.FK)(F=this.FK,F[2].call(F[0],7));},ATw:function(
G){var F;if(!!this.FK)(F=this.FK,F[2].call(F[0],5));},A5Z:function(G){if(!this.Bg
)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FM());this.DP.
Qm(1);}},I1:function(Aid,Aie,AoU){A._GetAutoObject(C.B4).ABA(Aid,Aie,[this,this.
A8K,this.ATe],AoU);},BlA:function(G){var F;if(!!this.FK)(F=this.FK,F[2].call(F[0
],4));},A5S:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.
Helper).G7(this.Bg.FM());this.DP.BBg();}},BlB:function(G){var F;if(!!this.FK)(F=
this.FK,F[2].call(F[0],6));},A5V:function(G){if(!this.Bg)return;if(this.M9()){A.
_GetAutoObject(A.Device.Helper).G7(this.Bg.FM());this.DP.BBh();}},ANT:function(G
){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.
FM());this.DP.Qm(1024);}},BmN:function(G){var F;if(!!this.FK)(F=this.FK,F[2].call(
F[0],8));},Akr:function(G){var F;if(!!this.FK)(F=this.FK,F[2].call(F[0],9));},BhR:
function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(
this.Bg.FM());this.DP.Qm(2);}},A5P:function(G){if(!this.Bg)return;if(this.M9()){
A._GetAutoObject(A.Device.Helper).G7(this.Bg.FM());if(A._GetAutoObject(A.Device.
Helper).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A5(66,true,A.jV,0,null);else this.BA3();}},BhQ:function(G){if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FM());this.
DP.Qm(16);}},BA3:function(){A._GetAutoObject(C.A9).Cd(94);},BhS:function(G){if(!
this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FM());
this.DP.Qm(4);}},BhT:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G7(this.Bg.FM());this.DP.Qm(8);}},A5Q:function(G){var B;if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FM());if(this.
Afk){A.zX([this,this.AAn],[B=this.DP,B.SC,B.Fb],0);this.AAW(this);}this.DP.Ac6();
}},AL5:function(Aid,Aie,Bx3){A._GetAutoObject(C.B4).BgN(Aid,Aie,Bx3);},ALk:function(
G){this.N.Hx(A.jV);this.N.CV(A.jV);this.N.C1(A.aaL(A.ach.Aex));this.N.CE=[this,this.
Blq];this.N.TY.Dk(100);this.N.TZ.Dk(100);var Gf=A._GetAutoObject(A.Device.Device
).An.B9();if(Gf<=0){this.N.Cs(null);this.N.C2(null);this.N.Cg=null;this.N.Cl=null;
this.N.Zz=false;this.N.ZA=false;}else if(Gf===1){this.N.Cs(null);this.N.C2(A.aaL(
A.ach.Aey));this.N.Cg=null;this.N.Cl=[this,this.AIS];this.N.Zz=false;this.N.ZA=false;
}else{this.N.Cs(A.aaL(A.ach.Aq2));this.N.C2(A.aaL(A.ach.Aq9));this.N.Cg=[this,this.
A3j];this.N.Cl=[this,this.A3k];this.N.Zz=true;this.N.ZA=true;}},A3j:function(G){
if(!this.Bg)return;if(this.Bg.FM()<(A._GetAutoObject(A.Device.Device).An.B9()-1)
)this.Bg.GS(this.Bg.FM()+1);},A3k:function(G){if(!this.Bg)return;if(this.Bg.FM()>
0)this.Bg.GS(this.Bg.FM()-1);},BoE:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bg.GS(Bf);A.ab5("%s",Aog);}}},M9:function(){return this.
Bg.FM()>=0;},Ake:function(){return A._GetAutoObject(A.Device.Device).An.B9()>5;}
,Agt:function(){this.BgO();A._GetAutoObject(C.B4).Tw(A.aaR(A.acf.AUi),[this,this.
A9f]);A._GetAutoObject(C.B4).Gu();},AcE:function(G){if(this.Afk)this.ALk(this);else
this.HO(this);},AAW:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E_();var AyZ=aFilter.DL(1,4);if(!!AyZ){aFilter.Ni(AyZ);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GS(0);}},BGj:function(s){this.
AAW(s);},AAn:function(G){var B;if(!this.DP.EV&&this.Afk){A.z$([this,this.AAn],[B=
this.DP,B.SC,B.Fb],0);this.AAW(this);}},Bno:function(G){var F;if(!!this.FK)(F=this.
FK,F[2].call(F[0],10));},BhV:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G7(this.Bg.FM());this.DP.Qm(256);}},A2$:function(G){var F;this.
ATe((F=this.FK,F[1].call(F[0])));A.pe([this,this.AyK],this);},A0n:function(s){this.
A2$(s);},Blx:function(G){var F;if(!!this.FK)(F=this.FK,F[2].call(F[0],11));},A5R:
function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(
this.Bg.FM());this.DP.Qm(4096);}},A5Y:function(G){if(!this.Bg)return;if(this.M9(
)){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FM());this.DP.Qm(16384);}},A50:function(
G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.
FM());this.BA4();}},BA4:function(){A._GetAutoObject(C.A9).Ab7(75);},A5T:function(
G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.
FM());this.DP.Qm(32768);}},A5W:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G7(this.Bg.FM());this.DP.Qm(65536);}},A51:function(G){if(!this.
Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FM());this.
DP.Qm(131072);}},BgO:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Aq$(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.B4).AaR(A.aaR(A.acf.AB5));else A._GetAutoObject(C.B4).Tw(A.
aaR(A.acf.AB5),[this,this.Bkb]);A._GetAutoObject(C.B4).Tw(A.aaR(A.acf.AkQ),[this
,this.Bkd]);A._GetAutoObject(C.B4).Gu();},A5X:function(G){if(!this.Bg)return;if(
this.M9()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FM());this.DP.Qm(128);}}
,BAP:function(G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Cf],this);},A5U:function(
G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.
FM());this.DP.Qm(524288);}},BhU:function(G){if(!this.Bg)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).G7(this.Bg.FM());this.DP.Qm(262144);}},ATd:function(E){if(this.
ATV===E)return;this.ATV=E;A.abo([this,this.A8J,this.ATd],0);},ATe:function(E){if(
this.ATW===E)return;this.ATW=E;A.abo([this,this.A8K,this.ATe],0);},A6y:function(
){return C.Yp;},BfG:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E_(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Bnx:function(G){A._GetAutoObject(A.Device.Device).Zl(0);
},Bny:function(G){A._GetAutoObject(A.Device.Device).Zl(14);},A8J:function(){return this.
ATV;},A8K:function(){return this.ATW;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADh._Init.call(this.V0={I:this},0);C.Kj._Init.call(this.Kj={I:this},0);
this.__proto__=C.GZ;this.Background.H(Cc);this.N.Z(true);this.N.OO(true);this.N.
OP(true);this.Ej.A9J(A.jb.CS);this.Ej.A9K(A.jb.Text);this.Dr(C.Kp);this.V0.H(IU);
this.KM=A.aaR(A.acf.AEf);this.J(this.V0,0);this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V0._Done();this.Kj._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V0._ReInit();
this.Kj._ReInit();this.Dj(A.aaR(A.acf.AEf));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.FK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.AB0={AP:null,A$:null,UG:null,Acx:
null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UG.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A$.H([
this.UG.M[2]-1,0,this.UG.M[2]+1,aSize[1]]);this.Acx.H([this.UG.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UG.L(this.V.AQ);this.Acx.L(this.
V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){this.T(this.
AX.CF(Ad,1).toFixed());this.UG.R(this.AX.CF(Ad,2).toFixed());this.Acx.R(this.AX.
CF(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A$={I:this},0);
A.acg.Text._Init.call(this.UG={I:this},0);A.acg.Text._Init.call(this.Acx={I:this
},0);this.__proto__=C.AB0;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.UG.L(A.jb.Text
);this.Acx.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.UG,0);this.
J(this.Acx,0);this.UG.S(A.aaL(A.fl.Af));this.Acx.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.UG.
_Done();this.Acx._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.UG._ReInit();this.Acx._ReInit(
);this.UG.S(A.aaL(A.fl.Af));this.Acx.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad8={Oz:null,SR:null,Mk:null,Init:function(aArg){var B;A.zX([this,this.A2R],[
B=A._GetAutoObject(A.Device.Device),B.Av8,B.AyC],0);A.zX([this,this.Adw],[B=A._GetAutoObject(
A.Device.Device),B.Av5,B.AyB],0);A.pe([this,this.Adw],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SR.R(A._GetAutoObject(A.Device.Device).Aa2.toFixed()+Xa
);this.Oz.Z(A._GetAutoObject(A.Device.Device).Amy);},Adw:function(G){this.Am();}
,MU:function(G){A._GetAutoObject(C.A9).Fy();},A2R:function(G){if(A._GetAutoObject(
A.Device.Device).Amy===false){this.Oz.Z(false);A._GetAutoObject(C.A9).Fy();}else
this.Oz.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oz={I:this},0);A.acg.Text._Init.call(this.SR={I:this},0);C.Mk._Init.call(
this.Mk={I:this},0);this.__proto__=C.Ad8;var B;this.Background.L(A.jb.CS);this.N.
Z(true);this.N.CV(A.aaR(A.acf.Ok));this.Oz.H(Aoh);this.Oz.R(A.aaR(A.acf.Oz));this.
Oz.L(A.jb.Text);this.Oz.Z(false);this.SR.H(AsV);this.SR.R(AsW);this.SR.L(A.jb.Text
);this.Mk.H(AsX);this.J(this.Oz,0);this.J(this.SR,0);this.J(this.Mk,0);this.N.Cl=[
this,this.MU];this.Oz.S(A.aaL(A.fl.Af));this.SR.S(A.aaL(A.fl.Af));this.Mk.At([B=
A._GetAutoObject(A.Device.Device),B.Av5,B.AyB]);this.Mk.A90([B=A._GetAutoObject(
A.Device.Device),B.Av8,B.AyC]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oz._Done();this.SR._Done();this.Mk._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oz._ReInit();this.SR._ReInit();this.Mk._ReInit(
);this.N.CV(A.aaR(A.acf.Ok));this.Oz.R(A.aaR(A.acf.Oz));this.Oz.S(A.aaL(A.fl.Af)
);this.SR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mk={Ad3:null,Ad4:null,Kf:function(G){var F;if(!!this.Q){this.A1Y();var Ac9=(
F=this.Q,F[1].call(F[0]));if(Ac9>20)this.Ov.L(A.jb.E1);else this.Ov.L(A.jb.Gh);this.
Ov.L((this.Ov.AQ&0x00FFFFFF)|(this.AlF(Ac9,0,20)<<24));this.TD.L((this.TD.AQ&0x00FFFFFF
)|(this.AlF(Ac9,21,40)<<24));this.TE.L((this.TE.AQ&0x00FFFFFF)|(this.AlF(Ac9,41,
60)<<24));this.Ad3.L((this.Ad3.AQ&0x00FFFFFF)|(this.AlF(Ac9,61,80)<<24));this.Ad4.
L((this.Ad4.AQ&0x00FFFFFF)|(this.AlF(Ac9,81,100)<<24));}},A1Y:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U6=this.Ad4;else if((F=this.Q,F[
1].call(F[0]))>60)this.U6=this.Ad3;else if((F=this.Q,F[1].call(F[0]))>40)this.U6=
this.TE;else if((F=this.Q,F[1].call(F[0]))>20)this.U6=this.TD;else this.U6=this.
Ov;}else this.U6=null;},_Init:function(aArg){C.Ox._Init.call(this,aArg);A.acg.AK.
_Init.call(this.Ad3={I:this},0);A.acg.AK._Init.call(this.Ad4={I:this},0);this.__proto__=
C.Mk;this.H(Aoi);this.NP.H(Aoi);this.Ov.H(Aoj);this.TD.H(AsY);this.TE.H(Ax6);this.
Ad3.H(Ax7);this.Ad3.L(A.jb.E1);this.Ad4.H(Ax8);this.Ad4.L(A.jb.E1);this.J(this.Ad3
,0);this.J(this.Ad4,0);this.NP.Ax(A.aaL(A.ach.AMN));},_Done:function(){this.__proto__=
C.Ox;this.Ad3._Done();this.Ad4._Done();C.Ox._Done.call(this);},_ReInit:function(
){C.Ox._ReInit.call(this);this.Ad3._ReInit();this.Ad4._ReInit();},_Mark:function(
D){var B;C.Ox._Mark.call(this,D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUO={N7:null,Lr:null,Ak4:null,ZV:null,ZU:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApJ],[B=A._GetAutoObject(A.Device.Device),B.
ASz,B.AZ9],0);A.zX([this,this.ApJ],[B=A._GetAutoObject(A.Device.Device),B.ASC,B.
AZ$],0);A.zX([this,this.ApJ],[B=A._GetAutoObject(A.Device.Device),B.A8Z,B.Ba8],0
);A.pe([this,this.ApJ],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABo(this);this.BCa(this);this.DJ(this);},BAr:function(G){A._GetAutoObject(
A.Device.Device).AsC();},ApJ:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZV.Z(false);break;case 4:{var A3D;if(!A._GetAutoObject(A.Device.Device).Afp)A3D=
0;else A3D=((A._GetAutoObject(A.Device.Device).AxL*100)/A._GetAutoObject(A.Device.
Device).Afp)|0;this.ZV.Bx(A3D);this.ZV.Z(true);}break;default:A.ab5("%s%e",AsZ,A.
_GetAutoObject(A.Device.Device).SyncState);}},BCa:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CJ);this.Lr.L(A.jb.Text);this.N7.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gh);this.Lr.L(A.jb.Bm);this.N7.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",AsZ,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C1(null);this.N.CE=null;this.N.CV(A.jV);this.N.Cl=null;}break;
case 7:{this.N.C1(null);this.N.CE=null;this.N.CV(A.aaR(A.acf.Ok));this.N.Cl=[this
,this.BAr];}break;default:A.ab5("%s%e",AsZ,A._GetAutoObject(A.Device.Device).SyncState
);}},ABo:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lr.R(A.aaR(A.acf.Bpu));break;case 1:this.Lr.R(A.aaR(A.acf.Bpr));break;
case 2:this.Lr.R(A.aaR(A.acf.Bpo));break;case 3:this.Lr.R(A.aaR(A.acf.Bps));break;
case 4:this.Lr.R((A.aaR(A.acf.Bpq)+Ax9)+A._GetAutoObject(A.Device.Helper).Nk(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.Bn4),P$,A._GetAutoObject(A.Device.Device).AxL.toFixed(
)),Ax_,A._GetAutoObject(A.Device.Device).Afp.toFixed()));break;case 5:this.Lr.R(
A.aaR(A.acf.Bpt));break;case 7:this.Lr.R(A.aaR(A.acf.Bpp));break;default:A.ab5("%s%e"
,AsZ,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CH._Init.call(this.N7={I:this},0);C.CH._Init.call(this.Lr={I:this
},0);A.acg.Ap._Init.call(this.Ak4={I:this},0);A.acr.ADk._Init.call(this.ZV={I:this
},0);A.acr.ADl._Init.call(this.ZU={I:this},0);this.__proto__=C.AUO;this.N.Z(true
);this.N7.H(AVJ);this.N7.R(A.aaR(A.acf.N7));this.Lr.AZ(0x3F);this.Lr.H(AVK);this.
Lr.A6(0x12);this.Ak4.H(AVL);this.Ak4.L(A.jb.AV);this.ZV.H(AVM);this.ZV.Ar(false);
this.ZV.Bx(0);this.ZU.Bni(0);this.ZU.A_n(0);this.ZU.A_l(A.jb.AV);this.ZU.A_k(0);
this.ZU.AFV(AHe);this.J(this.N7,0);this.J(this.Lr,0);this.J(this.Ak4,0);this.J(this.
ZV,0);this.N7.S(A.aaL(A.fl.EK));this.N7.A2(A.aaL(A.fl.Af));this.N7.Cu(A.aaL(A.fl.
Ak));this.Lr.S(A.aaL(A.fl.Af));this.Lr.A2(A.aaL(A.fl.Ak));this.Lr.Cu(A.aaL(A.fl.
Bh));this.Ak4.Ax(A.aaL(A.ach.AQG));this.ZV.OnSetAppearance(this.ZU);this.ZU.A_m(
A.aaL(A.ach.NT));this.ZU.A_j(A.aaL(A.ach.NT));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N7._Done();this.Lr._Done();this.Ak4._Done();this.ZV._Done(
);this.ZU._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N7._ReInit();this.Lr._ReInit();this.Ak4._ReInit();this.ZV._ReInit();this.
ZU._ReInit();this.N7.R(A.aaR(A.acf.N7));this.N7.S(A.aaL(A.fl.EK));this.N7.A2(A.aaL(
A.fl.Af));this.N7.Cu(A.aaL(A.fl.Ak));this.Lr.S(A.aaL(A.fl.Af));this.Lr.A2(A.aaL(
A.fl.Ak));this.Lr.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqV={_Init:function(aArg){C.ADa._Init.call(this,aArg
);this.__proto__=C.AqV;this.A9M(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cb:A.abi(3,0,{0:2,2:1}),Du:function(
){return 3;},C7:function(aIndex){if(aIndex>=3)return-1;return this.Cb.Get(aIndex
);},Gj:function(aIndex){return this.GenderToString.BR(this.C7(aIndex));},DZ:function(
A_){var O=0;while(O<3){if(this.Cb.Get(O)===A_)return O;O=O+1;}return-1;},H3:function(
){var O=0;var max=-1;while(O<3){if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}
return max;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal)this.Animal.JS(
E);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.AfZ],[B=this.Animal,B.Wv,B.JS],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AfZ],[B=this.Animal,B.Wv,B.JS],0);A.pe([this,this.AfZ],this);},AfZ:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B_,
this.B$],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cb=[]).__proto__=C.Gender.Cb;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cb:A.abi(4,0,{1:1,2:2,3:3}),Du:function(){return 4;},C7:function(aIndex){if(
aIndex>=4)return-1;return this.Cb.Get(aIndex);},Gj:function(aIndex){return this.
BirthTypeToString.BR(this.C7(aIndex));},DZ:function(A_){var O=0;while(O<4){if(this.
Cb.Get(O)===A_)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(
O<4){if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}return max;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Aks(E);},A1c:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B_,this.
B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1c],[B=this.Animal,B.ASe,B.Aks],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1c],[B=this.Animal,B.ASe,B.Aks],0);A.pe([this,this.A1c],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cb=[]).__proto__=C.BirthType.Cb;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Aco:null,Du:
function(){return A._GetAutoObject(A.Device.Helper).AdY.MD;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdY.MD)return-1;return A._GetAutoObject(
A.Device.Helper).AdY.Get(aIndex);},Gj:function(aIndex){return this.Aco.BR(this.C7(
aIndex));},DZ:function(A_){var O=0;while(O<A._GetAutoObject(A.Device.Helper).AdY.
MD){if(A._GetAutoObject(A.Device.Helper).AdY.Get(O)===A_)return O;O=O+1;}return-
1;},H3:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UD.
MD){if(A._GetAutoObject(A.Device.Helper).UD.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UD.Get(O);O=O+1;}return max;},At:function(E){C.AC.At.call(this,E);if(!!this.
Animal)this.Animal.EB(E);},A07:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B_,this.B$],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A07],[B=this.Animal,B.PP,B.EB],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A07],[B=this.Animal,B.PP,B.EB],0);A.pe([
this,this.A07],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Aco={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Aco._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Aco._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUu={Init:function(aArg){var B;A.pe([this,this.AfD],this);A.zX([this,this.AfD
],[B=A._GetAutoObject(A.Device.Device),B.Aru,B.Atf],0);},A3I:function(G){A._GetAutoObject(
A.Device.Device).A5(38,true,A.jV,0,[this,this.Bbo]);},A3h:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).Aso(this);},A1v:function(G){var F;if(this.A8===1){var BO=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlN)this.D7=this.AlN;if(this.D7<A._GetAutoObject(
A.Device.Device).AcD)this.D7=A._GetAutoObject(A.Device.Device).AcD;if(this.DW!==
BO){if(!!this.JV)(F=this.JV,F[2].call(F[0],this.D7));A.abo(this.JV,0);}}if(this.
A8===2){var BO=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BO){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.DW));A.abo(this.JU,0);
}}this.DJ(this);this.Am();},A17:function(G){var F;if(this.A8===1){var BO=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.
JV)(F=this.JV,F[2].call(F[0],this.D7));A.abo(this.JV,0);}}if(this.A8===2){var BO=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlI)this.DW=this.AlI;if(this.DW!==BO){
if(!!this.JU)(F=this.JU,F[2].call(F[0],this.DW));A.abo(this.JU,0);}}this.DJ(this
);this.Am();},GH:function(G){this.PJ.R(AHf+A._GetAutoObject(A.Device.Converter).
AkY(this.D7));this.PK.R(AHf+A._GetAutoObject(A.Device.Converter).AkY(this.DW));this.
Sx.R(A._GetAutoObject(A.acj.Temperature).AlG());},A10:function(Atm){if(Atm===1)return this.
PJ;else if(Atm===2)return this.PK;else return null;},_Init:function(aArg){C.Acm.
_Init.call(this,aArg);this.__proto__=C.AUu;this.AlI=5000;this.AlN=3000;this.T(A.
aaR(A.acf.Ark));this.Background.H(AfB);this.V.H(BD);this.V.R(A.aaR(A.acf.AGR));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Acm._ReInit.call(this);this.T(
A.aaR(A.acf.Ark));this.V.R(A.aaR(A.acf.AGR));},_className:"Application::SettingsItemThresholdsTemp"
};C.EA={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);this.__proto__=C.EA;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CJ);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa5:null,Aa9:null,Aa7:
null,Background:null,Aa4:null,Aa8:null,Aa6:null,AjC:null,Arp:null,VL:null,A4:0,Bz9:
function(G){if(this.AjC.CO===6){if(this.A4===1)this.AnD(2);else if(this.A4===2)this.
AnD(3);else this.AnD(1);}else if(this.AjC.CO===7){if(this.A4===3)this.AnD(2);else
if(this.A4===2)this.AnD(1);else this.AnD(3);}},AnD:function(E){if(this.A4===E)return;
this.A4=E;switch(this.A4){case 3:this.Background.H(this.Aa4.M);break;case 2:this.
Background.H(this.Aa8.M);break;case 1:this.Background.H(this.Aa6.M);break;default:
this.Background.H(Aok);}},IZ:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ho._Init.
call(this.Aa5={I:this},0);A.acg.Ho._Init.call(this.Aa9={I:this},0);A.acg.Ho._Init.
call(this.Aa7={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aen._Init.call(this.Aa4={I:this},0);A.acg.Aen._Init.call(this.Aa8={I:this},0);A.
acg.Aen._Init.call(this.Aa6={I:this},0);A.Core.BK._Init.call(this.AjC={I:this},0
);A.Core.BK._Init.call(this.Arp={I:this},0);A.Graphics.AME._Init.call(this.VL={I:
this},0);this.__proto__=C.Rating;this.H(AVN);this.Aa5.H(AHg);this.Aa5.L(A.jb.Text
);this.Aa5.AnB(Ak$);this.Aa5.Ng(3);this.Aa5.Z(true);this.Aa9.H(AHh);this.Aa9.L(A.
jb.Text);this.Aa9.AnB(Ak$);this.Aa9.Ng(3);this.Aa9.Z(true);this.Aa7.H(AHi);this.
Aa7.L(A.jb.Text);this.Aa7.AnB(Ak$);this.Aa7.Ng(3);this.Aa7.Z(true);this.Background.
H(Aok);this.Background.L(A.jb.AV);this.Aa4.H(AHg);this.Aa4.L(A.jb.E1);this.Aa4.AnB(
Ak$);this.Aa4.Z(true);this.Aa8.H(AHh);this.Aa8.L(A.jb.H8);this.Aa8.AnB(Ak$);this.
Aa8.Z(true);this.Aa6.H(AHi);this.Aa6.L(A.jb.Gh);this.Aa6.AnB(Ak$);this.Aa6.Z(true
);this.AjC.Filter=147;this.Arp.Filter=1;this.VL.BlS(360);this.VL.Bm8(22);this.VL.
Bng(2);this.J(this.Aa5,0);this.J(this.Aa9,0);this.J(this.Aa7,0);this.J(this.Background
,0);this.J(this.Aa4,0);this.J(this.Aa8,0);this.J(this.Aa6,0);this.Aa5.Zs(this.VL
);this.Aa9.Zs(this.VL);this.Aa7.Zs(this.VL);this.Background.Ax(A.aaL(A.ach.NS));
this.Aa4.Zs(this.VL);this.Aa8.Zs(this.VL);this.Aa6.Zs(this.VL);this.AjC.BL=[this
,this.Bz9];this.Arp.BL=[this,this.IZ];},_Done:function(){this.__proto__=A.Core.P;
this.Aa5._Done();this.Aa9._Done();this.Aa7._Done();this.Background._Done();this.
Aa4._Done();this.Aa8._Done();this.Aa6._Done();this.AjC._Done();this.Arp._Done();
this.VL._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa5._ReInit();this.Aa9._ReInit();this.Aa7._ReInit();this.Background.
_ReInit();this.Aa4._ReInit();this.Aa8._ReInit();this.Aa6._ReInit();this.AjC._ReInit(
);this.Arp._ReInit();this.VL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asq={Akg:null,Ar$:null,Background:null,TP:null,TK:null,AbV:null,AbU:null,AbT:
null,Acs:null,Acr:null,Acq:null,Ach:null,Acg:null,AbN:null,AbM:null,Ab9:null,Ab8:
null,Aqw:null,Init:function(aArg){},BjP:function(G){this.AbV.R(AVO);this.AbU.R(A.
jV);this.AbT.R(A.jV);this.Acs.R(AHj);this.Acr.R(A.jV);this.Acq.R(A.jV);this.Ach.
R(A.jV);this.Acg.R(A.jV);this.AbN.R(A.jV);this.AbM.R(A.jV);this.Ab9.R(A.jV);this.
Ab8.R(A.jV);},BnL:function(G){this.TK.Z(true);this.TP.Z(true);var ID=this.Im();if(
!ID)return;this.TP.R(ID.GetFPS().toFixed()+AVP);this.TK.R(AVQ);this.TK.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akg={I:this},0);A.Core.Timer._Init.call(this.Ar$={I:this},0);A.acg.AK._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TP={I:this},0);A.acg.
Text._Init.call(this.TK={I:this},0);A.acg.Text._Init.call(this.AbV={I:this},0);A.
acg.Text._Init.call(this.AbU={I:this},0);A.acg.Text._Init.call(this.AbT={I:this}
,0);A.acg.Text._Init.call(this.Acs={I:this},0);A.acg.Text._Init.call(this.Acr={I:
this},0);A.acg.Text._Init.call(this.Acq={I:this},0);A.acg.Text._Init.call(this.Ach={
I:this},0);A.acg.Text._Init.call(this.Acg={I:this},0);A.acg.Text._Init.call(this.
AbN={I:this},0);A.acg.Text._Init.call(this.AbM={I:this},0);A.acg.Text._Init.call(
this.Ab9={I:this},0);A.acg.Text._Init.call(this.Ab8={I:this},0);A.acg.AK._Init.call(
this.Aqw={I:this},0);this.__proto__=C.Asq;this.H(AcN);this.Ar(false);this.Akg.PR(
2000);this.Akg.Wz(1);this.Akg.Ar(true);this.Ar$.Ar(true);this.Background.AZ(0x3F
);this.Background.H(AcN);this.Background.L(0x78000000);this.TP.H(AVR);this.TP.A6(
0x14);this.TP.R(A.jV);this.TP.L(0xFFFFFC00);this.TP.Z(false);this.TK.H(AVS);this.
TK.A6(0x11);this.TK.R(A.jV);this.TK.Z(false);this.AbV.H(AHk);this.AbV.A6(0x11);this.
AbV.R(A.jV);this.AbU.H(As0);this.AbU.A6(0x11);this.AbU.R(A.jV);this.AbT.H(AHl);this.
AbT.A6(0x14);this.AbT.R(A.jV);this.Acs.H(AHm);this.Acs.A6(0x11);this.Acs.R(A.jV);
this.Acr.H(Ax$);this.Acr.A6(0x11);this.Acr.R(A.jV);this.Acq.H(AHn);this.Acq.A6(0x14
);this.Acq.R(A.jV);this.Ach.H(Aya);this.Ach.A6(0x11);this.Ach.R(A.jV);this.Acg.H(
AVT);this.Acg.A6(0x14);this.Acg.R(A.jV);this.AbN.H(AVU);this.AbN.A6(0x11);this.AbN.
R(A.jV);this.AbM.H(AVV);this.AbM.A6(0x14);this.AbM.R(A.jV);this.Ab9.H(AVW);this.
Ab9.A6(0x11);this.Ab9.R(A.jV);this.Ab8.H(AHo);this.Ab8.A6(0x14);this.Ab8.R(A.jV);
this.Aqw.H(AVX);this.J(this.Background,0);this.J(this.TP,0);this.J(this.TK,0);this.
J(this.AbV,0);this.J(this.AbU,0);this.J(this.AbT,0);this.J(this.Acs,0);this.J(this.
Acr,0);this.J(this.Acq,0);this.J(this.Ach,0);this.J(this.Acg,0);this.J(this.AbN,
0);this.J(this.AbM,0);this.J(this.Ab9,0);this.J(this.Ab8,0);this.J(this.Aqw,0);this.
Akg.Mz=[this,this.BjP];this.Ar$.Mz=[this,this.BnL];this.TP.S(A.aaL(A.fl.Ak));this.
TK.S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));this.AbU.S(A.aaL(A.fl.Ak));this.
AbT.S(A.aaL(A.fl.Ak));this.Acs.S(A.aaL(A.fl.Ak));this.Acr.S(A.aaL(A.fl.Ak));this.
Acq.S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));this.
AbN.S(A.aaL(A.fl.Ak));this.AbM.S(A.aaL(A.fl.Ak));this.Ab9.S(A.aaL(A.fl.Ak));this.
Ab8.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akg._Done();this.Ar$._Done();this.Background._Done();this.TP._Done();this.TK.
_Done();this.AbV._Done();this.AbU._Done();this.AbT._Done();this.Acs._Done();this.
Acr._Done();this.Acq._Done();this.Ach._Done();this.Acg._Done();this.AbN._Done();
this.AbM._Done();this.Ab9._Done();this.Ab8._Done();this.Aqw._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akg._ReInit();this.
Ar$._ReInit();this.Background._ReInit();this.TP._ReInit();this.TK._ReInit();this.
AbV._ReInit();this.AbU._ReInit();this.AbT._ReInit();this.Acs._ReInit();this.Acr.
_ReInit();this.Acq._ReInit();this.Ach._ReInit();this.Acg._ReInit();this.AbN._ReInit(
);this.AbM._ReInit();this.Ab9._ReInit();this.Ab8._ReInit();this.Aqw._ReInit();this.
TP.S(A.aaL(A.fl.Ak));this.TK.S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));this.AbU.
S(A.aaL(A.fl.Ak));this.AbT.S(A.aaL(A.fl.Ak));this.Acs.S(A.aaL(A.fl.Ak));this.Acr.
S(A.aaL(A.fl.Ak));this.Acq.S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));this.Acg.
S(A.aaL(A.fl.Ak));this.AbN.S(A.aaL(A.fl.Ak));this.AbM.S(A.aaL(A.fl.Ak));this.Ab9.
S(A.aaL(A.fl.Ak));this.Ab8.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ar$).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ach)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab8)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGz={FJ:null,Dl:null,Au:null,Jv:null,HK:null,Ue:null,Bc:null,Sm:null,Gx:null
,Gw:null,FX:0,A8:0,Bjn:false,Init:function(aArg){},Ai:function(Ae){C.Ds.Ai.call(
this,Ae);this.Hw.Z(false);this.H4.Z(false);if(!!this.Dl){this.Sm.R(this.Au.Format(
O6));this.Ue.R(this.Au.Format(Ayb));}if(this.A8===1){this.HK.Z(true);this.HK.H(this.
Sm.M);this.HK.L(A.jb.Bm);this.Sm.L(this.Background.AQ);this.Ue.L(A.jb.Bm);}else if(
this.A8===2){this.HK.Z(true);this.HK.H(this.Ue.M);this.HK.L(A.jb.Bm);this.Sm.L(A.
jb.Bm);this.Ue.L(this.Background.AQ);}else{this.HK.Z(false);this.Sm.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Ue.L(this.V.AQ);}},Qr:function(G){if(this.FG===1)A.pe([
this,this.U$],this);else if(this.FG===4)A.pe([this,this.AiE],this);else if(this.
FG===5)A.pe([this,this.Aiq],this);C.Ds.Qr.call(this,G);},Kb:function(G){switch(this.
A8){case 0:C.Ds.Kb.call(this,G);break;case 2:break;default:this.Adv(this);}},J8:
function(G){switch(this.A8){case 0:C.Ds.J8.call(this,G);break;default:this.Aip(this
);}},Adx:function(G){var F;if(!!this.Dl)this.Uk((F=this.Dl,F[1].call(F[0])));},Ab4:
function(E){if(A.aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.Adx],this.Dl
,0);this.Dl=E;if(!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx],this);
},Uk:function(E){if(this.FX===E)return;this.FX=E;this.Au.Initialize(this.FX);this.
Am();},Adv:function(G){this.FG=1;this.Am();if(this.Bo.Bw){A.pe([this,this.U$],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},U$:function(G){this.Ew(this.A8+1);},AlZ:
function(G){this.FG=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiE],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},AlY:function(G){this.FG=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Aiq],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiE:function(G){
var B;var F;var BO=this.FX;if(this.A8===1)this.Au.Anw(this.Au.AjQ+1);if(this.A8===
2)this.Au.Anz(this.Au.AvY+1);this.Au.AnC(0);this.Uk(((B=(this.Au.JQ()|0))<0)?B+0x100000000:
B);if(this.FX!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FX));A.abo(this.
Dl,0);}},Aiq:function(G){var B;var F;var BO=this.FX;if(this.A8===1)this.Au.Anw(this.
Au.AjQ-1);if(this.A8===2)this.Au.Anz(this.Au.AvY-1);this.Au.AnC(0);this.Uk(((B=(
this.Au.JQ()|0))<0)?B+0x100000000:B);if(this.FX!==BO){if(!!this.Dl)(F=this.Dl,F[
2].call(F[0],this.FX));A.abo(this.Dl,0);}},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aey));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U$];}break;case 2:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmW
));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
Aip];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FJ.AkN((F=this.N,F[1].call(F[
0])));}},FU:function(G){this.Ew(1);},Hd:function(G){this.Ew(0);},Ew:function(EN){
var F;if(!this.A8)this.FJ.Ajx((F=this.N,F[1].call(F[0])));this.A8=EN;this.Bjn=true;
if((this.A8<0)||(this.A8>2))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.
Bw=!!this.A8;this.Am();},Aip:function(G){if(this.A8>1)this.Ew(this.A8-1);},_Init:
function(aArg){C.Ds._Init.call(this,aArg);A.Core.Bs._Init.call(this.Au={I:this},
0);A.Core.BK._Init.call(this.Jv={I:this},0);A.acg.AK._Init.call(this.HK={I:this}
,0);A.acg.Text._Init.call(this.Ue={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Sm={I:this},0);A.Core.BK._Init.call(this.Gx={I:this
},0);A.Core.BK._Init.call(this.Gw={I:this},0);this.__proto__=C.AGz;this.H(UW);this.
V.R(AVY);this.V.L(A.jb.Bm);this.Hw.Z(false);this.H4.Z(false);this.Jv.Filter=1;this.
HK.H(AVZ);this.HK.L(0x55FFFFFF);this.Ue.H(AV0);this.Ue.I_(true);this.Bc.H(AV1);this.
Bc.A6(0x14);this.Bc.R(AV2);this.Sm.H(AV3);this.Sm.I_(true);this.Sm.A6(0x14);this.
Gx.Filter=4;this.Gx.Bw=false;this.Gw.Filter=5;this.Gw.Bw=false;this.J(this.HK,0);
this.J(this.Ue,0);this.J(this.Bc,0);this.J(this.Sm,0);this.Jv.BL=[this,this.Adv];
this.Ue.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Sm.S(A.aaL(A.fl.EK));this.
Gx.BL=[this,this.AlZ];this.Gx.D1=[this,this.AiE];this.Gw.BL=[this,this.AlY];this.
Gw.D1=[this,this.Aiq];this.FJ=A._NewObject(C.Aer,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ds;this.Au._Done();this.Jv._Done();this.HK._Done();this.Ue._Done(
);this.Bc._Done();this.Sm._Done();this.Gx._Done();this.Gw._Done();C.Ds._Done.call(
this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Au._ReInit();this.Jv._ReInit(
);this.HK._ReInit();this.Ue._ReInit();this.Bc._ReInit();this.Sm._ReInit();this.Gx.
_ReInit();this.Gw._ReInit();this.Ue.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.Sm.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((
B=this.FJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jv
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ue)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CH={B6:null,AmN:null,AqL:null,El:null,Text:null,String:A.jV,Bdp:A.jV,Ki:0x12
,AK3:0,AQ:0xFFFFFFFF,N4:0,AUc:0,A_V:0,Bdq:true,G3:function(CN){var LI=(A.Core.ARf.
isPrototypeOf(CN)?CN:null);if(!!LI)this.BCl(this);return A.Core.P.G3.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Aji],this);}
,Db:function(aFilter){return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bdq){this.Bdp=E;this.Bdq=false;
}this.AK3=E.length;A.pe([this,this.Aji],this);},S:function(E){if(this.B6===E)return;
this.B6=E;A.pe([this,this.Aji],this);},A2:function(E){if(this.AmN===E)return;this.
AmN=E;A.pe([this,this.Aji],this);},Cu:function(E){if(this.AqL===E)return;this.AqL=
E;A.pe([this,this.Aji],this);},A6:function(E){if(E===this.Ki)return;this.Ki=E;this.
Text.A6(E);},Aji:function(G){var B;var AK9=0;if(!this.AK3){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KR(false);if(!!this.B6){AK9=
this.B6.Yn(this.String,0,this.AK3);if(AK9<(((B=this.M)[2]-B[0])-(2*this.Text.Jb)
)){this.Text.S(this.B6);this.Text.Aw0(this.N4);return;}}this.Text.KR(true);if(!!
this.AmN){AK9=this.AmN.Yn(this.String,0,this.AK3);this.Text.S(this.AmN);this.Text.
Aw0(this.AUc);if((AK9<(((B=this.M)[2]-B[0])-(2*this.Text.Jb)))&&(((B=this.Text.Db(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqL){this.Text.S(this.AqL);
if(((B=this.Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw0((((this.Text.
B6.Ascent+this.Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BCl:function(G){this.R(this.Bdp);},Q5:function(E){if(
A.aa0(this.El,E))return;this.El=E;this.Text.Q5(E);},ASc:function(){return A.abh(
this.Text.Db(),this.M.slice(0,2));},Aff:function(AoI){return A.abf(this.M.slice(
0,2),this.Text.Aff(AoI));},Aw0:function(E){if(this.N4===E)return;this.N4=E;A.pe([
this,this.Aji],this);},Bm_:function(E){if(this.AUc===E)return;this.AUc=E;A.pe([this
,this.Aji],this);},Bm$:function(E){if(this.A_V===E)return;this.A_V=E;A.pe([this,
this.Aji],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CH;this.H(AHp);this.Ar(false);
this.Text.AZ(0x3F);this.Text.H(AHp);this.Text.R(Rm);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqL)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjO={Y:null,IL:null,AeJ:null,I6:null,M6:null,AeD:null,AeI:null,AeH:null,AeE:
null,AeG:null,AeF:null,M8:null,NU:null,Mr:null,De:function(E){C.Yo.De.call(this,
E);this.IL.L(E);this.AeJ.L(E);this.I6.L(E);this.M6.L(E);this.Mr.L(E);this.AeD.L(
E);this.M8.L(E);this.NU.L(E);this.AeI.L(E);this.AeH.L(E);this.AeE.L(E);this.AeG.
L(E);this.AeF.L(E);},DX:function(G){C.Yo.DX.call(this,G);this.XI(8,1,this.M6);this.
XI(12,1,this.Mr);this.XI(11,1,this.AeD);this.XI(7,1,this.M8);this.XI(14,1,this.NU
);this.XI(1,4,this.IL);this.XI(1,1,this.AeJ);this.XI(4,1,this.I6);this.XI(22,1,this.
AeI);this.XI(26,1,this.AeH);this.XI(30,1,this.AeE);this.XI(19,1,this.AeG);this.XI(
31,1,this.AeF);this.Text.Z(!this.Y.TN(null,0x1));},XI:function(AJg,Eb,AfQ){var AA7=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adh=A._GetAutoObject(
A.Device.Device).An.Filter.DL(AJg,Eb);if(!!Adh){AA7=true;switch(AJg){case 14:{var
Azm=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adh)?Adh:null);if(!!Azm)AfQ.
Ax(A._GetAutoObject(A.Device.Converter).A4R(Azm.A4));}break;case 7:{var Azm=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adh)?Adh:null);if(!!Azm)AfQ.Ax(A._GetAutoObject(
A.Device.Converter).AmP(Azm.A4));}break;case 1:if(Eb===4)AfQ.Ax(A.aaL(A.ach.ADB)
);else if(Adh.Operator===4)AA7=false;break;case 22:switch(Adh.Operator){case 0:case
3:AfQ.Ax(A.aaL(A.ach.AQt));break;default:AfQ.Ax(A.aaL(A.ach.AjU));}break;case 26:
switch(Adh.Operator){case 0:case 3:AfQ.Ax(A.aaL(A.ach.AQr));break;default:AfQ.Ax(
A.aaL(A.ach.Avu));}break;default:;}}else if((AJg===1)&&(Eb===4)){AA7=true;AfQ.Ax(
A.aaL(A.ach.Aez));}}else if((AJg===1)&&(Eb===4)){AA7=true;AfQ.Ax(A.aaL(A.ach.Aez
));}AfQ.Z(AA7);},_Init:function(aArg){C.Yo._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IL={I:this},0);A.acg.Ap._Init.call(
this.AeJ={I:this},0);A.acg.Ap._Init.call(this.I6={I:this},0);A.acg.Ap._Init.call(
this.M6={I:this},0);A.acg.Ap._Init.call(this.AeD={I:this},0);A.acg.Ap._Init.call(
this.AeI={I:this},0);A.acg.Ap._Init.call(this.AeH={I:this},0);A.acg.Ap._Init.call(
this.AeE={I:this},0);A.acg.Ap._Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(
this.AeF={I:this},0);A.acg.Ap._Init.call(this.M8={I:this},0);A.acg.Ap._Init.call(
this.NU={I:this},0);A.acg.Ap._Init.call(this.Mr={I:this},0);this.__proto__=C.AjO;
this.Y.AZ(0x3F);this.Y.H(AHq);this.Y.JR(3);this.IL.H(Aol);this.AeJ.H(Ayc);this.AeJ.
Aj(true);this.I6.H(AV4);this.I6.Aj(true);this.M6.H(AV5);this.M6.Aj(true);this.AeD.
H(AV6);this.AeD.Aj(true);this.AeI.H(AHr);this.AeI.Aj(true);this.AeH.H(AHr);this.
AeH.Aj(true);this.AeE.H(AV7);this.AeE.Aj(true);this.AeG.H(AHs);this.AeG.Aj(true);
this.AeF.H(AHs);this.AeF.Aj(true);this.M8.H(AHt);this.M8.Aj(true);this.NU.H(AHu);
this.NU.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mr.H(AHt);this.Mr.Aj(true);
this.JX(this.Gv,-3);this.JX(this.D2,-3);this.JX(this.A$,-3);this.JX(this.AP,-2);
this.J(this.Y,-2);this.J(this.IL,-2);this.J(this.AeJ,-2);this.J(this.I6,-2);this.
J(this.M6,-2);this.J(this.AeD,-2);this.J(this.AeI,-2);this.J(this.AeH,-2);this.J(
this.AeE,-2);this.J(this.AeG,-2);this.J(this.AeF,-2);this.J(this.M8,-2);this.J(this.
NU,-2);this.J(this.Mr,0);this.IL.Ax(A.aaL(A.ach.Aez));this.AeJ.Ax(A.aaL(A.ach.AQi
));this.I6.Ax(A.aaL(A.ach.APJ));this.M6.Ax(A.aaL(A.ach.ADv));this.AeD.Ax(A.aaL(A.
ach.Abz));this.AeI.Ax(A.aaL(A.ach.AjU));this.AeH.Ax(A.aaL(A.ach.Avu));this.AeE.Ax(
A.aaL(A.ach.AQg));this.AeG.Ax(A.aaL(A.ach.AQh));this.AeF.Ax(A.aaL(A.ach.AQf));this.
M8.Ax(A.aaL(A.ach.ADx));this.NU.Ax(A.aaL(A.ach.Avz));this.Mr.Ax(A.aaL(A.ach.ADE)
);},_Done:function(){this.__proto__=C.Yo;this.Y._Done();this.IL._Done();this.AeJ.
_Done();this.I6._Done();this.M6._Done();this.AeD._Done();this.AeI._Done();this.AeH.
_Done();this.AeE._Done();this.AeG._Done();this.AeF._Done();this.M8._Done();this.
NU._Done();this.Mr._Done();C.Yo._Done.call(this);},_ReInit:function(){C.Yo._ReInit.
call(this);this.Y._ReInit();this.IL._ReInit();this.AeJ._ReInit();this.I6._ReInit(
);this.M6._ReInit();this.AeD._ReInit();this.AeI._ReInit();this.AeH._ReInit();this.
AeE._ReInit();this.AeG._ReInit();this.AeF._ReInit();this.M8._ReInit();this.NU._ReInit(
);this.Mr._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yo.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amp={H7:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);this.H7.Gp();this.H7.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Rc.CC.call(this,G);},An3:function(){C.Rc.
An3.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).Bzj(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lt));this.C8.L(A._GetAutoObject(
A.acj.Temperature).Bzm(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lt));this.JM.L(A._GetAutoObject(A.acj.Temperature).Bzk(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lt));this.HF.L(A.
_GetAutoObject(A.acj.Temperature).Bzl(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lt));this.ME.L(this.JM.AQ);this.TemperatureUnit.
L(this.JM.AQ);}break;default:;}},AcE:function(){C.Rc.AcE.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cs(A.aaL(A.ach.AQB));this.N.C2(A.aaL(
A.ach.AmY));}break;case 4:{this.N.Cs(null);this.N.C2(A.aaL(A.ach.AvH));}break;default:;
}},WM:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lt>3240)&&(A._GetAutoObject(A.Device.
Device).Lt<5460)){A._GetAutoObject(A.Device.Device).AhK();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H7.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Lt);var B0=A._GetAutoObject(A.Device.Converter).AsE(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lt);this.H7.OnSetRatingTemperature(
B0);this.H7.Ch(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A9).Fy();
}break;case 4:this.AKw(this);break;default:;}},AkT:function(G){C.Rc.AkT.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKw(this);break;default:;}},AxR:function(
){C.Rc.AxR.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JM.R(A._GetAutoObject(A.acj.Temperature).Bzr(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lt));break;default:;}},AxS:function(
){C.Rc.AxS.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WA(A._GetAutoObject(A.acj.Temperature).Bzn(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lt));this.Je.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WA(16711680
);this.Je.Ar(true);}break;default:this.Je.Ar(false);}},AUo:function(){this.C8.Ax(
A.aaL(A.ach.AvG));this.C8.Cv(A._GetAutoObject(A.acj.Temperature).Bzs(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lt));this.NS.Cv(
0);},_Init:function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=C.Amp;this.Dr(
C.IJ);this.H7=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Rc._Mark.
call(this,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahw={N3:null,DK:null,Ik:null,Bc:null,Aus:null,String:A.jV,AxF:A.jV,Mv:7,Aj9:
2,KS:0,AUB:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Aj9,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bh));else this.DK.S(A.aaL(A.fl.Ak));this.Ik.S(this.DK.B6);this.Ik.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WF],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahr:function(
E){if(this.AxF===E)return;this.AxF=E;this.Ik.R(E);},Ab3:function(E){this.Mv=E;if(
E<10)this.AS1(2);else if(E<40)this.AS1(1);else this.AS1(0);A.pe([this,this.WF],this
);},WF:function(G){var B;while(!!this.Bc.Ah)this.HN(this.Bc.Ah);if(this.Mv>1){var
Adc=this.AOI();var A1T=this.AOG();var Apn=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var Az1;var AKW;var At3;var Al6=null;if(!!this.N3&&(this.N3.AY>0))Al6=this.N3.K0;
while((Adc>=A1T)&&(Adc>0)){var AtE=A._NewObject(C.Ajr,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aj9)*(((Adc-A1T)/86400)|0))/this.Mv)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aj9)*((((Adc-A1T)/86400)|0)+1))/this.Mv)|0;while(!!Al6&&(Al6.Timestamp>=
Adc)){if(Al6.Timestamp<(Adc+86400))AtE.Os(Al6.A4,Al6.Timestamp);Al6=Al6.Ah;}var Aud=
0;if(AtE.AY>0)Aud=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtE.AY
)|0;else if(this.Mv<10){Aud=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
At3=A._NewObject(A.acg.Text,0);At3.H([x1,Apn,x2,Apn+Aud]);At3.S(A.aaL(A.fl.Bh));
At3.L(A.jb.Text);At3.R(A.aaR(A.acf.Afb));this.J(At3,0);}var AJJ=AtE.K0;var O=0;while(
!!AJJ){if(O>=AtE.AY)throw new Error(AV8);Az1=A._NewObject(A.acg.AK,0);Az1.L(A._GetAutoObject(
A.acj.Assessment).Qo(AJJ.A4));if(O===(AtE.AY-1))Az1.H([x1,Apn+(O*Aud),x2,this.Bc.
M[1]]);else Az1.H([x1,Apn+(O*Aud),x2,Apn+((O+1)*Aud)]);this.J(Az1,0);AJJ=AJJ.Ah;
O=O+1;}if(this.AUB){var Bx_=A._GetAutoObject(A.Device.Helper).Aql(A._GetAutoObject(
A.Device.Helper).Dv());var Bx9=A._GetAutoObject(A.Device.Helper).Aql(Adc);if(Bx_===
Bx9){var ALq=A._NewObject(A.acg.Aen,0);ALq.L(A.jb.Text);var BdN=(x1+this.Aj9)+(((
x2-x1)/2)|0);ALq.H([BdN-4,this.Bc.M[1]-4,BdN+4,this.Bc.M[1]]);ALq.Zs(this.Aus);this.
J(ALq,0);}}Adc=Adc-86400;if(this.Aj9>0){AKW=A._NewObject(A.acg.AK,0);AKW.H([x1,Apn
,x1+this.Aj9,Apn+((((B=this.M)[3]-B[1])/2)|0)]);AKW.L(A.jb.Bc);this.J(AKW,0);}}}
},Ab5:function(E){this.N3=E;A.pe([this,this.WF],this);},AS1:function(E){if(this.
Aj9===E)return;this.Aj9=E;A.pe([this,this.WF],this);},De:function(E){if(this.KS===
E)return;this.KS=E;this.DK.L(E);this.Ik.L(E);},AOG:function(){var B;return this.
AOI()-(((((B=this.Mv)<0)?B+0x100000000:B)-1)*86400);},AOI:function(){return A._GetAutoObject(
A.Device.Converter).AhO();},Bnc:function(E){if(this.AUB===E)return;this.AUB=E;A.
pe([this,this.WF],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Ik={I:this},0
);A.acg.AK._Init.call(this.Bc={I:this},0);C.AxP._Init.call(this.Aus={I:this},0);
this.__proto__=C.Ahw;this.H(BD);this.Ar(false);this.DK.H(AHv);this.DK.Hm(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Ik.H(AHv);this.Ik.Hm(5);this.Ik.A6(0x14);this.
Ik.L(A.jb.Text);this.Bc.H(AV9);this.Bc.L(A.jb.Bc);this.KS=A.jb.Text;this.Aus.H(AHw
);this.J(this.DK,0);this.J(this.Ik,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Ik.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Ik._Done();this.Bc._Done();this.Aus._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Ik._ReInit();this.Bc._ReInit();this.Aus._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Ik.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aus)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A4X={Ah:null,Timestamp:0,A4:0,_Init:function(
aArg){this.__proto__=C.A4X;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajr={K0:null,MS:null,AY:0,Os:
function(A_,Qf){var Hg;Hg=A._NewObject(C.A4X,0);Hg.A4=A_;Hg.Timestamp=Qf;if(!this.
K0){this.K0=Hg;this.MS=Hg;this.AY=1;}else{this.MS.Ah=Hg;this.MS=Hg;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajr;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ei={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MH],this);},DE:function(G){var B;var Fh=0;var X=this.AV;switch(
this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;
default:;}X=this.QH(X,Fh,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HH(X,true,null,null);this.DJ(this);},AlX:function(G){A._GetAutoObject(C.A9
).Fy();},ApI:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null).Ags)A.
pe((C.Co.isPrototypeOf(B=this.AV)?B:null).Ags,this);},Fj:function(G){var B;this.
Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.
Y.Br[1]);},DJ:function(G){var B;var GX=(C.Co.isPrototypeOf(B=this.AV)?B:null);if(
!!GX){this.N.Hx(A.jV);this.N.CV(GX.AxI);this.N.Jd.Dk(255);this.N.HQ.Dk(GX.Axe);this.
N.AE4(GX.Avh);this.N.Anu(GX.AmO);this.N.C1(GX.AQa);this.N.C2(GX.Aq3);GX.A2Z(this
);}},MH:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ei;this.Background.H(Rn);this.Background.L(A.jb.CS);this.N.H(Xb);this.
N.Ar(false);this.N.Z(true);this.Y.H(Fe);this.Y.JR(1);this.Ay.H(It);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATI={Nz:null,ASI:null,Ad2:null,VF:null,GT:null,PopupTimeout:null,Ab_:null,AgD:
null,PopupIdToString:null,Atz:null,Text:A.jV,AkF:A.jV,AJ3:A.jV,Ak0:0,AK$:-1,Azl:-
1,AKD:0,ATK:0,A13:false,CP:function(){this.A_g(this.PopupIdToString.BR(this.ATK)
);},Init:function(aArg){this.BoH(this);},Bgy:function(G){var B;if(this.Ak0>0){this.
A_w((this.Ak0/1000)|0);this.PopupTimeout.Wz(0);this.PopupTimeout.PR(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxE(this);},Bgu:function(G){var Qy=this.
Text;var AfT=this.AkF;var AKB=A.abi(16,A.jV,null);var index=0;var Azg=0;while(AfT
!==A.jV){Azg=AfT.indexOf(A.Device.PopupParamSeparator,0);if(Azg!==-1){AKB.Set(index
,A.ab1(AfT,Azg,(AfT.length-Azg)+1));AfT=A.ab1(AfT,0,Azg+1);index=index+1;if(index>=
16){A.ab5("%s",(AV_+AfT)+AV$);AfT=A.jV;}}else{AKB.Set(index,AfT);AfT=A.jV;}}index=
0;while(index<Qy.length){if((Qy.charCodeAt(index)||0)===0x7B){var Bdo=Qy.indexOf(
String.fromCharCode(0x7D),index);if(Bdo===-1){A.ab5("%s",(((AWa+Qy)+AWb)+index.toFixed(
))+Ak_);index=Qy.length;}else{var Bfg=(Bdo-index)-1;var A3z=A.abW(Qy,index+1,Bfg
);var AKA=A.wz(A3z,-1,10);Qy=A.ab1(Qy,index,Bfg+2);if(A3z===AWc)this.Bnu(index);
else if(((AKA>0)&&(AKA<=16))&&(this.AkF!==A.jV)){Qy=A.abU(Qy,AKB.Get(AKA-1),index
);if(this.A13===true)this.Bnt(A.wz(AKB.Get(AKA-1),0,10));}else A.ab5("%s",(AWd+A3z
)+AWe);}}index=index+1;}this.Bns(Qy);},CC:function(G){A.pe([this,this.Bgy],this);
},Ai:function(Ae){var B;this.Ad2.H(A.aaT(this.GT.Db(),AhW));this.VF.H(A.aaT(this.
GT.Db(),AhW));if(!!this.Nz){this.Nz.H(A.abM(this.Nz.M,this.GT.M[0]));this.Nz.H(A.
abO(this.Nz.M,this.GT.M[3]+10));this.Nz.H(A.abL(this.Nz.M,(B=this.GT.M)[2]-B[0])
);this.Nz.H(A.abI(this.Nz.M,8));this.Ad2.H(A.abh(A.aaT(this.GT.Db(),AhW),AHx));this.
VF.H(A.abh(A.aaT(this.GT.Db(),AhW),AHx));}else{this.Ad2.H(A.aaT(this.GT.Db(),AhW
));this.VF.H(A.aaT(this.GT.Db(),AhW));}},DE:function(G){var JB=(A.Core.BK.isPrototypeOf(
G)?G:null);if((JB.CO===4)&&((this.VF.M[1]+this.M[1])<this.M[1])){this.GT.H(A.abO(
this.GT.M,this.GT.M[1]+28));this.Am();}else if((JB.CO===5)&&((this.VF.M[3]+this.
M[1])>this.N.M[1])){this.GT.H(A.abO(this.GT.M,this.GT.M[1]-28));this.Am();}if((JB.
CO===6)&&!!this.D_().CE)this.D_().AFb(1);else if((JB.CO===7)&&!!this.D_().Cl)this.
D_().AFb(3);},IZ:function(G){switch(this.D_().Ahh){case 1:this.AlX(this);break;case
3:this.ApI(this);break;case 2:this.AAx(this);break;case 0:break;default:A.ab5("%s%e"
,AWf,this.D_().Ahh);}},AlX:function(G){var B;(B=this.D_().CE)?B[1].call(B[0],this
):null;},ApI:function(G){var B;(B=this.D_().Cl)?B[1].call(B[0],this):null;},AAx:
function(G){var B;(B=this.D_().Cg)?B[1].call(B[0],this):null;},LN:function(G){this.
N.I7.L((this.N.I7.AQ&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
AxE(this);},A_g:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bgu],this);},BAw:function(G){var B;this.A_w(this.Azl-1);if(this.Azl<=0){this.PopupTimeout.
AxE(this);(B=this.ASI)?B[1].call(B[0],this):null;}},A_i:function(E){if(this.Ak0===
E)return;this.Ak0=E;A.pe([this,this.Bgy],this);},A94:function(E){if(this.AkF===E
)return;this.AkF=E;A.pe([this,this.Bgu],this);},Bns:function(E){if(this.AJ3===E)
return;this.AJ3=E;this.ABo(this);this.Byf(this);},ABo:function(G){if((this.Azl!==-
1)&&(this.AK$!==-1)){var By5=this.Atz.Format(AWg);this.GT.R(A.abU(this.AJ3,By5,this.
AK$));}else this.GT.R(this.AJ3);this.GT.H(AHy);},Bnu:function(E){if(this.AK$===E
)return;this.AK$=E;this.ABo(this);},A_w:function(E){if(this.Azl===E)return;this.
Azl=E;this.Atz.AFF(E);A.pe([this,this.ABo],this);},Byf:function(G){this.GT.Db();
if(this.GT.M[1]<=this.M[1])this.GT.H(A.abO(this.GT.M,28));this.Am();},A_y:function(
E){if(this.A13===E)return;this.A13=E;if(E===true)A.pe([this,this.BA9],this);},BA9:
function(G){if(!this.Nz){this.Nz=A._NewObject(A.acr.ADk,0);this.Nz.F$(0);this.Nz.
EU(100);this.Nz.OnSetAppearance(this.Ab_);this.J(this.Nz,0);this.Ahz(this.Nz,this.
GT);}this.Nz.Bx(this.AKD);},Bnt:function(E){if(this.AKD===E)return;this.AKD=E;if(
!!this.Nz)this.Nz.Bx(this.AKD);},BoH:function(G){var B;this.N.Dk(0);this.AgD.AnS(
this);},Bm4:function(E){if(this.ATK===E)return;this.ATK=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.Ad2={I:this},0);A.acg.BT._Init.
call(this.VF={I:this},0);A.acg.Text._Init.call(this.GT={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADl._Init.call(this.Ab_={I:this},
0);A.acl.Gk._Init.call(this.AgD={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.Atz={I:this},0);this.
__proto__=C.ATI;var B;this.H(Cc);this.Background.H(Fe);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ej.Ar(false);this.Ej.Z(false);this.Ad2.H(AHz);this.
Ad2.L(A.jb.CJ);this.VF.H(AHz);this.VF.Ng(2);this.VF.L(A.jb.Text);this.GT.H(AHy);
this.GT.Hm(10);this.GT.I_(true);this.GT.Bnq(0);this.GT.KR(true);this.GT.L(A.jb.Text
);this.PopupTimeout.PR(0);this.Ab_.A_n(0);this.Ab_.A_l(A.jb.AV);this.Ab_.A_k(0);
this.Ab_.AFV(AHe);this.AgD.HM(1);this.AgD.B1=255;this.AgD.Cw=0;this.JX(this.Ej,-
1);this.J(this.Ad2,0);this.J(this.VF,0);this.J(this.GT,0);this.GT.S(A.aaL(A.fl.Af
));this.PopupTimeout.Mz=[this,this.BAw];this.Ab_.A_m(A.aaL(A.ach.NT));this.Ab_.A_j(
A.aaL(A.ach.NT));this.AgD.Q=[B=this.N,B.Awh,B.AZ3];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad2._Done();this.VF._Done();this.GT._Done();this.PopupTimeout.
_Done();this.Ab_._Done();this.AgD._Done();this.PopupIdToString._Done();this.Atz.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad2._ReInit();this.VF._ReInit();this.GT._ReInit();this.PopupTimeout._ReInit();this.
Ab_._ReInit();this.AgD._ReInit();this.PopupIdToString._ReInit();this.Atz._ReInit(
);this.GT.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Nz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASI)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GT)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Atz)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Mn={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hk){FQ=A.jb.Text;
GW=A.jb.Bm;}if(!this.LF){this.Background.L(FQ);this.V.L(A.jb.AmZ);}else if(this.
Qs){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KF){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Mn;},_className:"Application::DarkThemeMenuItem"
};C.Ane={AdB:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Ane;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaD:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Lm:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Cl=[this,this.A20];this.BP.Cg=null;this.BP.CE=[this,this.AaD];this.
BP.CV(A.aaR(A.acf.Ok));this.BP.Cs(null);this.BP.C1(A.aaL(A.ach.Aex));}return this.
BP;},A20:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).IZ(this);},CC:function(G){},AIE:function(s){this.CC(s);},E4:function(
G){},AyA:function(s){this.E4(s);},_Init:function(aArg){C.Abf._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APF={V9:
null,YL:null,YF:null,Init:function(aArg){this.Bb(this.V9);},Ads:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YL)A._GetAutoObject(A.Device.
Device).A5(6,true,A.jV,0,[this,this.BBl]);else if(Aa===this.V9)A._GetAutoObject(
A.Device.Device).A5(9,true,A.jV,0,[this,this.BBH]);else if(Aa===this.YF)A._GetAutoObject(
C.A9).Cd(4);else throw new Error(Ayd);A._GetAutoObject(A.Device.Device).Dw(0);},
BBl:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(
As.PopupState===7))A._GetAutoObject(A.Device.Device).AGh();},BBH:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))
A._GetAutoObject(A.Device.Device).Axv();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Mn._Init.call(this.V9={I:this},0);C.Mn._Init.call(this.YL={I:this
},0);C.Mn._Init.call(this.YF={I:this},0);this.__proto__=C.APF;this.H(AcN);this.V9.
H(BD);this.V9.Ar(true);this.V9.T(A.aaR(A.acf.A$a));this.V9.Bi(true);this.YL.H(IU
);this.YL.Ar(true);this.YL.T(A.aaR(A.acf.A_U));this.YL.Bi(true);this.YF.H(Qa);this.
YF.Ar(true);this.YF.T(A.aaR(A.acf.SR));this.YF.Bi(true);this.J(this.V9,0);this.J(
this.YL,0);this.J(this.YF,0);this.V9.AR=[this,this.Ads];this.YL.AR=[this,this.Ads
];this.YF.AR=[this,this.Ads];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.V9._Done();this.YL._Done();this.YF._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.V9._ReInit(
);this.YL._ReInit();this.YF._ReInit();this.V9.T(A.aaR(A.acf.A$a));this.YL.T(A.aaR(
A.acf.A_U));this.YF.T(A.aaR(A.acf.SR));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GJ={AaA:null,OverlayMenu:null,WH:null,A3T:null
,La:null,A3y:null,AkG:null,N1:null,Az7:100,Bcl:false,Init:function(aArg){var B;A.
zX([this,this.BeJ],[B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyJ],0);A.zX([this
,this.BeD],[B=A._GetAutoObject(A.Device.Device),B.ASo,B.AZ1],0);A.zX([this,this.
A2R],[B=A._GetAutoObject(A.Device.Device),B.Av8,B.AyC],0);A.zX([this,this.Bz4],[
B=A._GetAutoObject(A.Device.Device),B.Av5,B.AyB],0);A.zX([this,this.Bz5],[B=A._GetAutoObject(
A.Device.Device),B.A8g,B.BaP],0);A.zX([this,this.ApJ],[B=A._GetAutoObject(A.Device.
Device),B.ASz,B.AZ9],0);A.zX([this,this.Be0],[B=A._GetAutoObject(A.Device.Device
),B.Ww,B.Xc],0);A.pe([this,this.BeJ],this);A.pe([this,this.BeD],this);A.pe([this
,this.ApJ],this);A.pe([this,this.Be0],this);this.A3T.At([B=this.WH,B.AEo,B.Zk]);
this.J(this.WH,0);this.Bb(this.WH);this.BxU(this);},Ai:function(Ae){},BeD:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEa){if(!this.AaA){this.AaA=A._NewObject(
C.Asq,0);this.AaA.H(A.abJ(this.AaA.M,this.WH.M.slice(0,2)));this.AaA.H(A.abO(this.
AaA.M,this.WH.M[3]-((B=this.AaA.M)[3]-B[1])));this.J(this.AaA,1);}}else{if(!!this.
AaA)this.HN(this.AaA);this.AaA=null;}},BeJ:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.APF,0));break;case 8:this.Dw(A._NewObject(C.ALY,0));break;case 2:this.Dw(A._NewObject(
C.ALV,0));break;case 3:this.Dw(A._NewObject(C.AL1,0));break;case 4:this.Dw(A._NewObject(
C.AT1,0));break;case 5:this.Dw(A._NewObject(C.AVv,0));break;case 6:this.Dw(A._NewObject(
C.ATD,0));break;case 7:this.Dw(A._NewObject(C.Amr,0));break;case 11:this.Dw(A._NewObject(
C.AMu,0));break;case 12:this.Dw(A._NewObject(C.AMt,0));break;case 9:this.Dw(A._NewObject(
C.ARz,0));break;case 10:this.Dw(A._NewObject(C.AMp,0));break;case 14:this.Dw(A._NewObject(
C.ARv,0));break;case 15:this.Dw(A._NewObject(C.ARw,0));break;case 13:this.Dw(A._NewObject(
C.ARx,0));break;case 16:this.Dw(A._NewObject(C.AMQ,0));break;default:throw new Error(
AWh+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WD).ArA(
null);this.N1.AqB(this.OverlayMenu,A._GetAutoObject(C.Axy),null,null,[B=this.OverlayMenu
,B.AyA],null,true);this.Bb(this.WH);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N1.AkI(this.OverlayMenu,A._GetAutoObject(C.Axx),null,null,null,null,null,[B=this.
OverlayMenu,B.AIE],null,false);this.Bb(this.N1);A._GetAutoObject(C.WD).ArA(this.
OverlayMenu.Lm());}else if(!!this.La){this.Bb(this.N1);A._GetAutoObject(C.WD).ArA(
this.La.Akn().Lm());}},Ahm:function(E){var B;if(this.La===E)return;if(!!this.La){
A._GetAutoObject(C.WD).ArA(null);this.N1.AqB(this.La.Akn(),A._GetAutoObject(C.Afh
),null,null,[B=this.La.Akn(),B.AyA],null,false);this.Bb(this.WH);}this.La=E;if(!
!this.La){this.N1.AkI(this.La.Akn(),A._GetAutoObject(C.Afh),null,null,null,null,
null,[this,this.Blo],null,false);this.Bb(this.N1);A._GetAutoObject(C.WD).ArA(this.
La.Akn().Lm());}else if(!!this.OverlayMenu){this.Bb(this.N1);A._GetAutoObject(C.
WD).ArA(this.OverlayMenu.Lm());}},BxU:function(G){var B;var F;this.J(this.A3y,0);(
F=A._GetAutoObject(C.WD),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WD).M)[3]-B[1]))));this.ZB(this.N1);},A2R:function(G){if(A._GetAutoObject(A.Device.
Device).Amy)switch(A._GetAutoObject(A.Device.Device).Ii){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A9).Ab7(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa2<98)A._GetAutoObject(C.A9).Cd(4);}else{this.Az7=100;this.Bcv();}},Bz4:
function(G){this.Bcv();},Bcv:function(){if(!A._GetAutoObject(A.Device.Device).Amy
){if(A._GetAutoObject(A.Device.Device).Aa2<=2){if(this.Az7>2)switch(A._GetAutoObject(
A.Device.Device).Ii){case 38:break;case 4:case 39:A._GetAutoObject(C.A9).Ab7(38);
break;default:A._GetAutoObject(C.A9).Cd(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa2<=10){if(this.Az7>10)switch(A._GetAutoObject(A.Device.Device).Ii){case
39:break;case 4:case 38:A._GetAutoObject(C.A9).Ab7(39);break;default:A._GetAutoObject(
C.A9).Cd(39);}}else if(A._GetAutoObject(A.Device.Device).Aa2<=20){if(this.Az7>20
)switch(A._GetAutoObject(A.Device.Device).Ii){case 39:break;case 4:case 38:A._GetAutoObject(
C.A9).Ab7(39);break;default:A._GetAutoObject(C.A9).Cd(39);}}else switch(A._GetAutoObject(
A.Device.Device).Ii){case 38:case 4:case 39:A._GetAutoObject(C.A9).Fy();break;default:;
}this.Az7=A._GetAutoObject(A.Device.Device).Aa2;}},Bz5:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqo){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A5(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Ans(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A5(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Ans(0
);}break;default:A.ab5("%s",AWi+A._GetAutoObject(A.Device.Device).Aqo.toFixed());
}},ApJ:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A9).Cd(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Ii===5)A._GetAutoObject(C.A9).Ab7(3);break;
default:;}},Be0:function(G){switch(A._GetAutoObject(A.Device.Device).P1.ZX){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).Uq(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WA(65535);A._GetAutoObject(A.Device.Device).Uq(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WA(255);A._GetAutoObject(A.Device.Device).Uq(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WA(16776960);A._GetAutoObject(
A.Device.Device).Uq(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WA(16711935
);A._GetAutoObject(A.Device.Device).Uq(true);}break;default:A.ab5("%s",AWj+A._GetAutoObject(
A.Device.Device).P1.ZX.toFixed());}this.Bnr(A._GetAutoObject(A.Device.Helper).Bjl(
));},Blo:function(G){var B;this.La.Akn().CC(this);this.La.BAu(this);},Bnr:function(
E){if(this.Bcl===E)return;this.Bcl=E;if(E){if(A._GetAutoObject(A.Device.Device).
Ii===3)A._GetAutoObject(C.A9).Cd(27);else if(A._GetAutoObject(A.Device.Device).Ii
!==27)A._GetAutoObject(A.Device.Device).A5(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).Ii===27)A._GetAutoObject(A.Device.Device).A5(112,true,A.jV,0,[this
,this.A0P]);},A0P:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!As&&(As.Id===112))&&(As.PopupState===7))A._GetAutoObject(C.A9).Ab7(85);}
,Bkp:function(){return this.La;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkG._Init.call(this.AkG={I:this},0);C.N1._Init.call(this.N1={I:this},0);this.
__proto__=C.GJ;this.H(Cc);this.N1.H(Rn);this.J(this.N1,0);this.WH=A._NewObject(C.
WH,0);this.A3T=A._GetAutoObject(C.A9);this.AkG.ANv=[this,this.Bkp,this.Ahm];this.
A3y=A._GetAutoObject(C.WD);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkG._Done();this.N1._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkG._ReInit();this.N1._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaA)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WH)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A3T)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.La)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3y)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abf={A_J:
null,BP:null,N:null,Cq:null,Am7:null,Am9:null,QR:null,Am8:null,Am5:null,Am$:null
,Am6:null,DE:function(G){var Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;break;
case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QH(X,Fh,0x14
);if(!!X)this.Bb(X);},Bbm:function(s){this.DE(s);},AlX:function(G){var D5=(A.Core.
BK.isPrototypeOf(G)?G:null);if(D5.Acf&&(this.D_().Ask===false))return;A.pe(this.
D_().CE,this);},AIR:function(s){this.AlX(s);},ApI:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);if(D5.Acf&&(this.D_().ZA===false))return;A.pe(this.D_().
Cl,this);},AIU:function(s){this.ApI(s);},IZ:function(G){if(this.QR.Acf)return;},
Atg:function(s){this.IZ(s);},AAx:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?
G:null);if(D5.Acf&&(this.D_().Zz===false))return;A.pe(this.D_().Cg,this);},AIT:function(
s){this.AAx(s);},D_:function(){if(!!this.Lm())return this.BP;else return this.N;
},Lm:function(){return this.BP;},GQ:function(E){this.A_J=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BK._Init.
call(this.Cq={I:this},0);A.Core.BK._Init.call(this.Am7={I:this},0);A.Core.BK._Init.
call(this.Am9={I:this},0);A.Core.BK._Init.call(this.QR={I:this},0);A.Core.BK._Init.
call(this.Am8={I:this},0);A.Core.BK._Init.call(this.Am5={I:this},0);A.Core.BK._Init.
call(this.Am$={I:this},0);A.Core.BK._Init.call(this.Am6={I:this},0);this.__proto__=
C.Abf;this.H([0,0,C.Ast[0],C.Ast[1]]);this.N.H(Xb);this.N.Ar(false);this.N.Z(false
);this.Cq.Filter=147;this.Am7.Filter=26;this.Am9.Filter=28;this.QR.Filter=1;this.
Am8.Filter=27;this.Am5.Filter=44;this.Am$.Filter=9;this.Am6.Filter=42;this.J(this.
N,0);this.Cq.BL=[this,this.Bbm];this.Cq.D1=[this,this.Bbm];this.Am7.BL=[this,this.
AIR];this.Am7.D1=[this,this.AIR];this.Am9.BL=[this,this.AIU];this.Am9.D1=[this,this.
AIU];this.QR.BL=[this,this.Atg];this.QR.D1=[this,this.Atg];this.Am8.BL=[this,this.
AIT];this.Am8.D1=[this,this.AIT];this.Am5.BL=[this,this.AIR];this.Am5.D1=[this,this.
AIR];this.Am$.BL=[this,this.AIU];this.Am$.D1=[this,this.AIU];this.Am6.BL=[this,this.
AIT];this.Am6.D1=[this,this.AIT];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Am7._Done();this.Am9._Done();this.QR._Done();this.
Am8._Done();this.Am5._Done();this.Am$._Done();this.Am6._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Am7._ReInit();this.Am9._ReInit();this.QR._ReInit();this.Am8._ReInit(
);this.Am5._ReInit();this.Am$._ReInit();this.Am6._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A_J)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Axx={_Init:function(){A.acl.AGF._Init.call(this,0);this.Ki=0x22;this.Ad6=true;
this.AuW=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.Axy={_Init:function(){A.acl.AGF._Init.call(this,0);this.Ki=0x22;this.Ad6=true;
this.AuW=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUz={Sb:function(){var B;var Ao=(A.acl.Ae$.isPrototypeOf(B=A.acl.Aek.Sb.call(this
))?B:null);if(!Ao)throw new Error(As1);Ao.Cp.Cw=100;return Ao;},Sa:function(){var
B;var Ao=(A.acl.Axf.isPrototypeOf(B=A.acl.Aek.Sa.call(this))?B:null);if(!Ao)throw new
Error(As1);Ao.E0.B1=100;return Ao;},_Init:function(aArg){A.acl.Aek._Init.call(this
,aArg);this.__proto__=C.AUz;},_className:"Application::ShadeTransition"};C.AmU={
Ag5:null,SW:null,HP:null,DS:null,AnimalId:-1,GroupId:-1,AC3:true,De:function(E){
C.BQ.De.call(this,E);this.SW.L(E);this.HP.L(E);this.Ag5.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.acf.Afb)
);else this.HP.R(E.toFixed());},Ab1:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SW.R(A.aaR(A.acf.Afb));else this.SW.R(E.toFixed());},DX:function(
G){},Nm:function(s){this.DX(s);},A9M:function(E){if(this.AC3===E)return;this.AC3=
E;this.SW.Z(this.AC3);this.Ag5.Z(this.AC3);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag5={I:this},0);A.acg.Text._Init.call(this.SW={
I:this},0);A.acg.Text._Init.call(this.HP={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.AmU;this.Ag5.H(AWk);this.SW.H(AWl);this.SW.A6(0x11);this.
SW.R(A.aaR(A.acf.Afb));this.HP.H(AWm);this.HP.A6(0x11);this.HP.R(A.aaR(A.acf.Afb
));this.DS.H(AWn);this.J(this.Ag5,0);this.J(this.SW,0);this.J(this.HP,0);this.J(
this.DS,0);this.Ag5.Ax(A.aaL(A.ach.AQm));this.SW.S(A.aaL(A.fl.Af));this.HP.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BQ;this.Ag5._Done();this.SW._Done(
);this.HP._Done();this.DS._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ.
_ReInit.call(this);this.Ag5._ReInit();this.SW._ReInit();this.HP._ReInit();this.DS.
_ReInit();this.SW.R(A.aaR(A.acf.Afb));this.HP.R(A.aaR(A.acf.Afb));this.SW.S(A.aaL(
A.fl.Af));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this
,D);if((B=this.Ag5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADb={Init:function(
aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.Arw,B.SI
],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8z,B.Any],0);
A.zV([this,this.Nm],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nm],[
B=A._GetAutoObject(A.Device.Helper).W,B.PP,B.EB],0);A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9a,B.Axb],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8q,B.Ae1],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8r,B.Un],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8u,B.Ae5],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8y,B.
Ae7],0);A.pe([this,this.Nm],this);},De:function(E){C.AmU.De.call(this,E);this.DS.
De(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqU()){this.Ab1(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab1(-1);this.OnSetAnimalId(-1);}this.DS.
EB(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AEY(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae1(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Un(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae5(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae7(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmU._Init.call(this,aArg);this.
__proto__=C.ADb;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Kl={AhL:A.abi(3,A.jV,null),Cb:A.abi(3,0,{0:7,1:30,2:90}),Ani:3,Du:function(){
if(this.Ani<3)return this.Ani;else return 3;},C7:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ani))return-1;return this.Cb.Get(aIndex);},Gj:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ani))return AWo;return this.AhL.Get(aIndex);},DZ:function(
A_){var O=0;while((O<3)&&(O<=this.Ani)){if(this.Cb.Get(O)===A_)return O;O=O+1;}return-
1;},H3:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ani)){if(this.Cb.Get(
O)>max)max=this.Cb.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhL=[]).__proto__=C.Kl.AhL;(this.Cb=[]).__proto__=C.Kl.Cb;this.
__proto__=C.Kl;this.AhL.Set(0,A.aaR(A.acf.A7e));this.AhL.Set(1,A.aaR(A.acf.A7c));
this.AhL.Set(2,A.aaR(A.acf.A7d));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhL.Set(0,A.aaR(A.acf.A7e));this.AhL.Set(1,A.aaR(A.acf.A7c));this.AhL.Set(2,A.aaR(
A.acf.A7d));},_className:"Application::Days"};C.AUw={Amt:null,BS:null,Q6:null,QF:
null,A$w:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BAQ],[B=A._GetAutoObject(A.Device.Device),B.Aru,B.Atf],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Ds.Ai.call(this,Ae);var Fu=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BS.L(A.jb.Bm);if(!!this.Q)this.BS.R(((AWp+A._GetAutoObject(
A.Device.Converter).AkY((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlG());this.H4.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6B())&&(
Fu||GE));},C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},Kb:function(G){var F;var BO=this.AM;C.Ds.Kb.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6B()){this.Bx(this.AM+10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J8:function(G){var F;var BO=this.
AM;C.Ds.J8.call(this,G);this.Bx(this.AM-10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_q:function(E){if(this.A$w===E)return;
this.A$w=E;this.Am();},BAQ:function(G){this.Am();},_Init:function(aArg){C.Ds._Init.
call(this,aArg);A.acg.AK._Init.call(this.Amt={I:this},0);C.CH._Init.call(this.BS={
I:this},0);A.acg.AK._Init.call(this.Q6={I:this},0);A.acg.Ap._Init.call(this.QF={
I:this},0);this.__proto__=C.AUw;this.H(UW);this.Background.H(UW);this.V.H(As2);this.
V.L(A.jb.Bm);this.Amt.H(AWq);this.Amt.L(A.jb.Afs);this.Hw.H(AWr);this.BS.H(AWs);
this.BS.A6(0x12);this.BS.L(A.jb.Text);this.H4.H(AWt);this.Q6.H(AWu);this.Q6.L(A.
jb.E1);this.QF.H(AWv);this.J(this.Amt,-2);this.J(this.BS,-1);this.J(this.Q6,0);this.
J(this.QF,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BS.S(A.aaL(
A.fl.EK));this.BS.A2(A.aaL(A.fl.Af));this.QF.Ax(A.aaL(A.ach.ADs));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ds;this.Amt._Done();this.BS._Done();this.Q6.
_Done();this.QF._Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.
call(this);this.Amt._ReInit();this.BS._ReInit();this.Q6._ReInit();this.QF._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BS.S(A.aaL(A.fl.EK));this.
BS.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.
Amt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BS)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QF)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnO={Q:null
,Ai1:null,Init:function(aArg){var B;A.zX([this,this.Bbj],[B=A._GetAutoObject(A.Device.
Device),B.AEo,B.BaJ],0);A.pe([this,this.Bbj],this);},At:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ab7:function(Alj){A._GetAutoObject(A.Device.Device).Zk(Alj
);},AKq:function(G){if(this.K&&this.K.AKq)return this.K.AKq.apply(this,arguments
);else return C.AnO.Bbq.apply(this,arguments);},Bbq:function(G){var F;if(!this.Q
){A.ab5("%s",AWw);return;}var By=null;if(this.Ai1.Contains(A._GetAutoObject(A.Device.
Device).Ii)){By=this.Ai1.A_H();while(!!By&&(By.An2!==A._GetAutoObject(A.Device.Device
).Ii))By=this.Ai1.A_H();}if(!By)By=this.Bzq(A._GetAutoObject(A.Device.Device).Ii
);(F=this.Q,F[2].call(F[0],By));},Bbj:function(s){this.AKq(s);},Bzq:function(Alj
){var By=null;switch(Alj){case 0:case 1:By=A._NewObject(C.AUE,0);break;case 2:By=
A._NewObject(C.XW,0);break;case 3:By=A._NewObject(C.Avs,0);break;case 53:By=A._NewObject(
C.AVj,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=A._NewObject(
C.ARP,0);break;case 6:By=A._NewObject(C.ARo,0);break;case 16:By=A._NewObject(C.AND
,0);break;case 22:By=A._NewObject(C.AVe,0);break;case 17:By=A._NewObject(C.AUV,0
);break;case 42:By=A._NewObject(C.ANA,0);break;case 87:By=A._NewObject(C.AT9,0);
break;case 88:By=A._NewObject(C.AT8,0);break;case 89:By=A._NewObject(C.AVa,0);break;
case 95:By=A._NewObject(C.AVc,0);break;case 23:By=A._NewObject(C.AVC,0);break;case
18:By=A._NewObject(C.ANQ,0);break;case 19:By=A._NewObject(C.AT_,0);break;case 37:
By=A._NewObject(C.AQR,0);break;case 76:By=A._NewObject(C.ATQ,0);break;case 63:By=
A._NewObject(C.ANO,0);break;case 64:By=A._NewObject(C.ANP,0);break;case 82:By=A.
_NewObject(C.ANN,0);break;case 83:By=A._NewObject(C.ANL,0);break;case 92:By=A._NewObject(
C.ANJ,0);break;case 93:By=A._NewObject(C.ANM,0);break;case 65:By=A._NewObject(C.
ANK,0);break;case 5:By=A._NewObject(C.AUO,0);break;case 4:By=A._NewObject(C.Ad8,
0);break;case 39:By=A._NewObject(C.ANa,0);break;case 38:By=A._NewObject(C.ANt,0);
break;case 28:By=A._NewObject(C.Wr,0);break;case 7:By=A._NewObject(C.AqE,0);break;
case 81:By=A._NewObject(C.ANY,0);break;case 31:By=A._NewObject(C.Arn,0);break;case
78:By=A._NewObject(C.ARN,0);break;case 34:By=A._NewObject(C.ALT,0);break;case 35:
By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(C.SetTransponderScreen
,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:By=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:By=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(C.MotherScanScreen
,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:By=A._NewObject(
C.GZ,0);break;case 9:By=A._NewObject(C.I3,0);break;case 24:By=A._NewObject(C.AL_
,0);break;case 10:By=A._NewObject(C.Amp,0);break;case 21:By=A._NewObject(C.AMc,0
);break;case 11:By=A._NewObject(C.AMb,0);break;case 29:By=A._NewObject(C.AuD,0);
break;case 48:By=A._NewObject(C.AMa,0);break;case 30:By=A._NewObject(C.AL$,0);break;
case 12:By=A._NewObject(C.AL9,0);break;case 40:By=A._NewObject(C.AL8,0);break;case
14:By=A._NewObject(C.ANr,0);break;case 13:By=A._NewObject(C.ANs,0);break;case 20:
By=A._NewObject(C.AVt,0);break;case 41:By=A._NewObject(C.AVs,0);break;case 43:By=
A._NewObject(C.AOz,0);break;case 44:By=A._NewObject(C.AOy,0);break;case 61:By=A.
_NewObject(C.ANX,0);break;case 62:By=A._NewObject(C.ANW,0);break;case 46:By=A._NewObject(
C.AR2,0);break;case 47:By=A._NewObject(C.AR1,0);break;case 85:By=A._NewObject(C.
AVI,0);break;case 86:By=A._NewObject(C.AVH,0);break;case 71:By=A._NewObject(C.ARX
,0);break;case 72:By=A._NewObject(C.ARW,0);break;case 74:By=A._NewObject(C.AMR,0
);break;case 90:By=A._NewObject(C.ATS,0);break;case 73:By=A._NewObject(C.AT$,0);
break;case 51:By=A._NewObject(C.ALX,0);break;case 52:By=A._NewObject(C.ALW,0);break;
case 15:By=A._NewObject(C.ATY,0);break;case 60:By=A._NewObject(C.AUU,0);break;case
69:By=A._NewObject(C.ARm,0);break;case 70:By=A._NewObject(C.ARl,0);break;case 26:
By=A._NewObject(C.ARQ,0);break;case 54:By=A._NewObject(C.ARM,0);break;case 25:By=
A._NewObject(C.AN$,0);break;case 66:By=A._NewObject(C.AOa,0);break;case 59:By=A.
_NewObject(C.AN_,0);break;case 58:By=A._NewObject(C.AOb,0);break;case 56:By=A._NewObject(
C.AOc,0);break;case 57:By=A._NewObject(C.AqH,0);break;case 68:By=A._NewObject(C.
AOd,0);break;case 67:By=A._NewObject(C.AN8,0);break;case 84:By=A._NewObject(C.AMe
,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;case 36:By=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:By=A._NewObject(C.AMr,0);break;case 91:By=A._NewObject(C.AU0,0
);break;case 94:By=A._NewObject(C.Aqb,0);break;default:throw new Error(AWx);}if(
!!By)By.An2=Alj;return By;},Cd:function(Alj){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AWy);else this.Ai1.BnV((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zk(Alj);},Fy:function(){var Bfw=3;var Bfv=this.Ai1.BnK();if(!!Bfv
)Bfw=Bfv.An2;else A.ab5("%s",AWz);A._GetAutoObject(A.Device.Device).Zk(Bfw);},_Init:
function(aArg){C.A_2._Init.call(this.Ai1={I:this},0);this.__proto__=C.AnO;this.Init(
aArg);var J2=this._variants();if(J2){this.K={};J2._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai1.
_Done();A.h7--;},_ReInit:function(){this.Ai1._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnO._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A9={_Init:function(){C.AnO._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AF_={H7:null,Yq:null,Afd:null,AaG:null,MB:
null,Azr:1,RatingMode:0,RatedAttribute:0,CP:function(){this.Yq.R(this.Bc3(this.RatedAttribute
));this.AKv(this);},Ai:function(Ae){this.MB.R(A._GetAutoObject(A.Device.Helper).
Nk(A.aaR(A.acf.ARD),P$,this.Azr.toFixed()));if(this.RatingMode===1)this.MB.Z(true
);else this.MB.Z(false);},CC:function(G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);this.H7.Gp();this.H7.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axq(this.
H7,5);A.zX([this,this.AKv],[B=A._GetAutoObject(A.Device.Device),B.ASw,B.AZ6],0);
A.zX([this,this.AKv],[B=A._GetAutoObject(A.Device.Helper).W,B.PP,B.EB],0);A.pe([
this,this.AKv],this);},AsB:function(G){var a=this.AJ$(this.RatedAttribute);this.
BfN();this.Azr=this.Azr-1;this.Am();if(!a)this.ARK();else this.SG(a);},WM:function(
G){var a=this.Bc_(this.RatedAttribute);this.BfN();this.Azr=this.Azr+1;this.Am();
if(!a)this.A7B();else this.SG(a);},AJ$:function(Np){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Np){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHA);},Bc_:function(Np){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Np){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHA);},SG:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.Yq.R(this.Bc3(E));this.
DJ(E);this.Afd.AnD(this.H7.Biz(E));if(!this.AJ$(E)){if(this.AQ0())this.N.Cs(A.aaL(
A.ach.AeA));else this.N.Cs(null);}else this.N.Cs(A.aaL(A.ach.Aex));},Bc3:function(
Np){return this.AaG.BR(Np);},Bzp:function(Np){if(!!Np){var a=this.AJ$(Np);if(!a)
return A.jV;else return this.Bc4(a);}else return A.jV;},Bzo:function(Np){if(!!Np
){var a=this.Bc_(Np);if(!a)return A.jV;else return this.Bc4(a);}else return A.jV;
},ARK:function(){},A7B:function(){},A6C:function(){return null;},Bc4:function(Np
){return this.AaG.Lu(Np);},BfN:function(){if(!!this.RatedAttribute)this.H7.Bou(this.
RatedAttribute,this.Afd.A4);},AKv:function(G){if(this.AQ0())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SG(2);this.DJ(this.RatedAttribute
);this.Am();},Adt:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkT:function(G){var a=this.AJ$(this.RatedAttribute);if(!a){if(this.AQ0())this.
Adt(this);}else this.ARK();},DJ:function(Np){this.N.Hx(this.Bzp(Np));if(!!this.N.
AnX){this.N.C1(null);this.N.OO(true);}else{this.N.C1(A.aaL(A.ach.Aex));this.N.OO(
false);}this.N.CV(this.Bzo(Np));if(!!this.N.AnZ){this.N.C2(null);this.N.OP(true);
}else{this.N.C2(this.A6C());this.N.OP(false);}},AQ0:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Ala,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Yq={
I:this},0);C.Rating._Init.call(this.Afd={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaG={I:this},0);A.acg.Text._Init.call(this.MB={I:this},0);this.__proto__=
C.AF_;this.Background.L(A.jb.CJ);this.N.Z(true);this.Dr(C.IJ);this.Yq.H(AWA);this.
Yq.KR(true);this.Yq.L(A.jb.Text);this.Afd.H(AWB);this.MB.H(AWC);this.MB.A6(0x14);
this.MB.R(A.aaR(A.acf.ARD));this.MB.L(A.jb.Text);this.J(this.Yq,0);this.J(this.Afd
,0);this.J(this.MB,0);this.Bb(this.Afd);this.N.CE=[this,this.AsB];this.N.Cg=[this
,this.AkT];this.N.Cl=[this,this.WM];this.Yq.S(A.aaL(A.fl.Af));this.Afd.AR=[this,
this.WM];this.MB.S(A.aaL(A.fl.Af));this.H7=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.Yq._Done();this.Afd._Done();this.AaG._Done();
this.MB._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Yq._ReInit();this.Afd._ReInit();this.AaG._ReInit();this.MB._ReInit();this.
MB.R(A.aaR(A.acf.ARD));this.Yq.S(A.aaL(A.fl.Af));this.MB.S(A.aaL(A.fl.Af));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaG)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.MB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HY={Y:null,Gender:null,AnimalType:null,Breed:null,Jg:null,Pm:null,AsR:null,BY:
null,C$:null,C9:null,CG:null,Gl:null,Ay:null,KI:0,Init:function(aArg){A.zX([this
,this.Bbk],this.BY.Q,0);A.pe([this,this.Bbk],this);A.pe([this,this.AA5],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANo(this.
Y);},DE:function(G){var B;var Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;
break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QH(
X,Fh,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HH(X,true,null
,null);this.AA5(this);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},AeW:function(E){
if(this.KI===E)return;this.KI=E;A.abo([this,this.Av6,this.AeW],0);},AA5:function(
G){var B;var GX=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hx(A.jV);this.N.C1(
A.aaL(A.ach.E2));this.N.CE=[this,this.AIQ];if(!!GX&&!!GX.Aml){this.N.FC(A.jV);this.
N.Jy.Dk(255);this.N.ArK(GX.AqM);this.N.Cs(GX.AvC);this.N.Cg=GX.Aml;}else{this.N.
FC(A.jV);this.N.Cs(null);this.N.Cg=null;}if(!!GX&&!!GX.Ags){this.N.CV(GX.AxI);this.
N.HQ.Dk(GX.Axe);this.N.Anu(GX.AmO);this.N.C2(GX.Aq3);this.N.Cl=GX.Ags;}else this.
Auf();},Agd:function(G){A.ab5("%s",Aye);},AyN:function(s){this.Agd(s);},Ev:function(
G){A.ab5("%s",Aye);},AIQ:function(s){this.Ev(s);},Auf:function(){A.ab5("%s",Alb);
},AAq:function(G){A.ab5("%s",Aye);},AcR:function(s){this.AAq(s);},JG:function(Ag
){this.Bb(Ag);this.Y.HH(Ag,true,null,null);this.Y.Vw(null,null);},ApE:function(G
){var F;this.C9.Ahq(A._GetAutoObject(A.Device.Helper).Abn((F=this.BY.Q,F[1].call(
F[0]))));},Bbk:function(s){this.ApE(s);},Av6:function(){return this.KI;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UO._Init.call(this.Jg={I:this},
0);A.Device.M0._Init.call(this.Pm={I:this},0);A.Device.KX._Init.call(this.AsR={I:
this},0);C.BU._Init.call(this.BY={I:this},0);C.BU._Init.call(this.C$={I:this},0);
C.AkR._Init.call(this.C9={I:this},0);C.Axt._Init.call(this.CG={I:this},0);C.Asw.
_Init.call(this.Gl={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.HY;var B;this.N.Z(true);this.Dr(C.IJ);this.Y.H(Fe);this.Y.JR(1);this.KI=A._GetAutoObject(
A.Device.Helper).Abn(this.AnimalType.Q);this.BY.H(AhX);this.BY.Aj(true);this.BY.
T(A.aaR(A.acf.Afr));this.C$.H(Ayf);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.Afm));
this.C9.H(Aom);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI));this.C9.F$(1000);this.
C9.EU(99000);this.C9.Ahq(A._GetAutoObject(A.Device.Helper).Abn(this.AnimalType.Q
));this.CG.H(AhY);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.Gl.H(AWD);
this.Gl.Aj(true);this.Gl.T(A.aaR(A.acf.Jg));this.Ay.H(Ayg);this.J(this.Y,0);this.
J(this.BY,0);this.J(this.C$,0);this.J(this.C9,0);this.J(this.CG,0);this.J(this.Gl
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.Gender.LY(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.LY(A._GetAutoObject(A.Device.Helper).W);this.Breed.
LY(A._GetAutoObject(A.Device.Helper).W);this.Jg.LY(A._GetAutoObject(A.Device.Helper
).W);this.BY.At([B=this.AnimalType,B.B_,B.B$]);this.BY.CK(this.AnimalType);this.
C$.At([B=this.Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.C9.At([this,this.Av6
,this.AeW]);this.CG.Gq([this,this.D_,this.GQ]);this.CG.LX([B=this.CG,B.FU]);this.
CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.Breed,B.B_,B.B$]);this.CG.CK(this.Breed
);this.CG.Ant(this.Pm);this.Gl.Gq([this,this.D_,this.GQ]);this.Gl.LX([B=this.Gl,
B.FU]);this.Gl.L0(A.aaL(A.ach.Edit));this.Gl.At([B=this.Jg,B.B_,B.B$]);this.Gl.CK(
this.Jg);this.Gl.Ant(this.AsR);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.Jg._Done();this.Pm._Done();this.AsR._Done();this.BY._Done();this.C$._Done(
);this.C9._Done();this.CG._Done();this.Gl._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jg._ReInit();this.
Pm._ReInit();this.AsR._ReInit();this.BY._ReInit();this.C$._ReInit();this.C9._ReInit(
);this.CG._ReInit();this.Gl._ReInit();this.Ay._ReInit();this.BY.T(A.aaR(A.acf.Afr
));this.C$.T(A.aaR(A.acf.Afm));this.C9.T(A.aaR(A.acf.KI));this.CG.T(A.aaR(A.acf.
Breed));this.Gl.T(A.aaR(A.acf.Jg));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wr={Ay3:false,LN:function(G){if(A._GetAutoObject(A.Device.Device).An.Lg())A._GetAutoObject(
A.Device.Device).A5(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gp();A._GetAutoObject(A.Device.Helper
).Aqe(A._GetAutoObject(A.Device.Helper).W);},Auf:function(){this.N.CV(A.jV);this.
N.C2(A.aaL(A.ach.ADw));this.N.Cl=[this,this.AyN];},CC:function(G){if(!this.Ay3){
this.Ay3=true;A.pe([this,this.AcR],this);}else C.Arn.CC.call(this,G);},AAq:function(
G){A._GetAutoObject(C.A9).Cd(49);},_Init:function(aArg){C.Arn._Init.call(this,aArg
);this.__proto__=C.Wr;this.JX(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IJ={_Init:function(aArg){C.ADb._Init.call(this,aArg);this.__proto__=C.IJ;this.
A9M(false);},_className:"Application::HeaderSelectedAnimalId"};C.I3={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Ek:null,Y:null,P3:null,S5:null,N_:
null,S6:null,Nl:null,Ot:null,RP:null,Ou:null,RQ:null,ND:null,Lc:null,Jq:null,KV:
null,Mt:null,Yk:null,S7:null,RR:null,Ay:null,AxV:0,AxU:0,AuB:0,AuA:0,Arm:0,AsI:0
,Avd:0,Ave:0,Am0:true,Amo:false,An8:false,Init:function(aArg){A.zX([this,this.Avj
],this.Lc.Q,0);A.zX([this,this.AuG],this.Jq.Q,0);A.zX([this,this.BpG],this.KV.Q,
0);A.zX([this,this.BjV],this.Mt.Q,0);A.zX([this,this.Bqa],this.Nl.Q,0);A.zX([this
,this.Bp$],this.N_.Q,0);A.zX([this,this.BgQ],this.ND.Q,0);A.zX([this,this.BgP],this.
Ou.Q,0);this.Bb(this.P3);},DE:function(G){var Fh=0;var X=this.AV;switch(this.Cq.
CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;
}X=this.QH(X,Fh,0x414);if(!!X)this.Bb(X);this.MO(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E_(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ev:function(G){A._GetAutoObject(
C.A9).Fy();},A2N:function(G){var EE=(C.Aeo.isPrototypeOf(G)?G:null);if(!EE)return;
var Av=this.Filter.DL(EE.Eq,EE.Operator);if(!!Av){this.Filter.Ni(Av);A.abo([this
,this.Fn,this.Fr],0);}else{if(EE.Eq===11){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Eq===12){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Eq===8){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else A.ab5("%s",AHB+EE.Eq.toFixed());if(!!Av){this.Filter.
CW(Av);A.abo([this,this.Fn,this.Fr],0);}}},Bz2:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A9).Fy();},AAo:function(G){var EE=(
C.AmT.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.DL(EE.Eq,EE.Operator
);if(!!Av){this.Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0);}else{if(EE.Eq===7
){Av=A._NewObject(A.Device.GenderFilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;
}else if(EE.Eq===14){Av=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Av.EJ=
EE.Eq;Av.Operator=EE.Operator;}else if((EE.Eq===22)||(EE.Eq===26)){var A0M=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0M.EJ=EE.Eq;A0M.Operator=0;Av=A0M;}else A.ab5(
"%s",AHB+EE.Eq.toFixed());if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fn,this.Fr
],0);}}},A9H:function(E){if(this.Avd===E)return;this.Avd=E;A.abo([this,this.Bkz,
this.A9H],0);},A9I:function(E){if(this.Ave===E)return;this.Ave=E;A.abo([this,this.
BkA,this.A9I],0);},Avj:function(G){var F;this.A9I((F=this.Lc.Q,F[1].call(F[0])));
var Av=this.Filter.DL(7,0);if(!!Av){var AzJ=(A.Device.GenderFilterCriterion.isPrototypeOf(
Av)?Av:null);if(!!AzJ)AzJ.A4=this.Ave;else A.ab5("%s",AfC);}},AuG:function(G){var
F;this.A9H((F=this.Jq.Q,F[1].call(F[0])));var Av=this.Filter.DL(14,0);if(!!Av){var
U5=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Av)?Av:null);if(!!U5)U5.A4=
this.Avd;else A.ab5("%s",AfC);}},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1
))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},A_o:function(
E){if(this.AsI===E)return;this.AsI=E;A.abo([this,this.Blb,this.A_o],0);},BpG:function(
G){var F;this.A_o((F=this.KV.Q,F[1].call(F[0])));var Av=this.Filter.DL(22,1);if(
!!Av){var Ai$=(A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!Ai$
)switch(this.AsI){case 1:Ai$.Operator=5;break;case 0:Ai$.Operator=0;break;default:
A.ab5("%s%e",AHC,this.AsI);}else A.ab5("%s",AfC);}},A9U:function(E){if(this.Arm===
E)return;this.Arm=E;A.abo([this,this.BkP,this.A9U],0);},BjV:function(G){var F;this.
A9U((F=this.Mt.Q,F[1].call(F[0])));var Av=this.Filter.DL(26,1);if(!!Av){var AtV=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AtV)switch(this.Arm
){case 1:AtV.Operator=5;break;case 0:AtV.Operator=0;break;default:A.ab5("%s%e",AHC
,this.Arm);}else A.ab5("%s",AfC);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P3.Bk([this,this.Fn,this.Fr]);this.S5.
Bk([this,this.Fn,this.Fr]);this.N_.Bk([this,this.Fn,this.Fr]);this.S6.Bk([this,this.
Fn,this.Fr]);this.Nl.Bk([this,this.Fn,this.Fr]);this.Ot.Bk([this,this.Fn,this.Fr
]);this.RP.Bk([this,this.Fn,this.Fr]);this.Ou.Bk([this,this.Fn,this.Fr]);this.RQ.
Bk([this,this.Fn,this.Fr]);this.ND.Bk([this,this.Fn,this.Fr]);this.Lc.Bk([this,this.
Fn,this.Fr]);this.Jq.Bk([this,this.Fn,this.Fr]);this.KV.Bk([this,this.Fn,this.Fr
]);this.Mt.Bk([this,this.Fn,this.Fr]);this.Yk.Bk([this,this.Fn,this.Fr]);this.S7.
Bk([this,this.Fn,this.Fr]);this.RR.Bk([this,this.Fn,this.Fr]);this.Ar5(false);A.
pe([this,this.A4k],this);var BdL=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DL(1,2))?B:null);if(!!BdL){this.Ar5(true);this.AFR(BdL.A4);}var Bde=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DL(1,3))?B:null);if(!!
Bde){this.Ar5(true);this.AFS(Bde.A4);}this.ArD(false);A.pe([this,this.ALc],this);
var BdK=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DL(4,3))?B:null
);if(!!BdK){this.ArD(true);this.AEH(A._GetAutoObject(A.Device.Helper).L9(BdK.A4,
A._GetAutoObject(A.Device.Helper).Dv()));}var Bdd=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DL(4,2))?B:null);if(!!Bdd){this.ArD(true);this.AEJ(A.
_GetAutoObject(A.Device.Helper).L9(Bdd.A4,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var AzJ=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DL(7,0
))?B:null);if(!!AzJ)this.Lc.Bx(this.Gender.DZ(AzJ.A4));var U5=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DL(14,0))?B:null);if(!!U5)this.Jq.Bx(this.AnimalType.
DZ(U5.A4));var Ai$=this.Filter.DL(22,1);if(!!Ai$){if(!Ai$.Operator)this.KV.Bx(0);
else this.KV.Bx(1);}var AtV=this.Filter.DL(26,1);if(!!AtV){if(!AtV.Operator)this.
Mt.Bx(0);else this.Mt.Bx(1);}},Fr:function(Aq){this.Bk(Aq);},AFS:function(E){if(
this.AxV===E)return;this.AxV=E;A.abo([this,this.A84,this.AFS],0);},AFR:function(
E){if(this.AxU===E)return;this.AxU=E;A.abo([this,this.A83,this.AFR],0);},Bqa:function(
G){var F;this.AFS((F=this.Nl.Q,F[1].call(F[0])));var Av=this.Filter.DL(1,3);if(!
!Av){var ABq=(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!ABq)
ABq.A4=this.AxV;else A.ab5("%s",AfC);}},Bp$:function(G){var F;this.AFR((F=this.N_.
Q,F[1].call(F[0])));var Av=this.Filter.DL(1,2);if(!!Av){var ABq=(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!ABq)ABq.A4=this.AxU;else A.ab5("%s",AfC);}},Bee:
function(G){var EE=(C.AjG.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.
DL(EE.Eq,EE.Operator);if(!!Av){this.Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0
);}else{if(EE===this.S5){Av=A._NewObject(A.Device.Int32FilterCriterion,0);Av.EJ=
EE.Eq;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:
null).A4=this.AxU;this.Bb(this.N_);}else if(EE===this.S6){Av=A._NewObject(A.Device.
Int32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=this.AxV;this.Bb(this.Nl);}if(!!Av){this.Filter.CW(
Av);A.abo([this,this.Fn,this.Fr],0);}}A.pe([this,this.A4k],this);},A4k:function(
G){var A2v=!!this.Filter.DL(this.N_.Eq,this.N_.Operator);var A4l=!!this.Filter.DL(
this.Nl.Eq,this.Nl.Operator);A._GetAutoObject(A.Device.Helper).JY(this.S5,this.An8
);A._GetAutoObject(A.Device.Helper).JY(this.S6,this.An8);A._GetAutoObject(A.Device.
Helper).JY(this.N_,A2v);A._GetAutoObject(A.Device.Helper).JY(this.Nl,A4l);},MO:function(
G){var B;this.Y.Vw(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},BAX:function(G){A.pe([this,this.Fj],this);A.pe([this,this.
MO],this);},BzZ:function(G){this.Ar5(!this.An8);if(this.An8===false){var Av=this.
Filter.DL(this.P3.Eq,this.P3.Operator);while(!!Av){this.Filter.Ni(Av);Av=this.Filter.
DL(this.P3.Eq,this.P3.Operator);}A.abo([this,this.Fn,this.Fr],0);}},Ar5:function(
E){if(this.An8===E)return;this.An8=E;A.abo([this,this.A82,this.Ar5],0);A.pe([this
,this.A4k],this);},AEJ:function(E){if(this.AuB===E)return;this.AuB=E;A.abo([this
,this.A7_,this.AEJ],0);},AEH:function(E){if(this.AuA===E)return;this.AuA=E;A.abo([
this,this.A78,this.AEH],0);},BgQ:function(G){var F;this.AEJ((F=this.ND.Q,F[1].call(
F[0])));var Av=this.Filter.DL(4,2);if(!!Av){var AfO=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!AfO){var AaL=A._GetAutoObject(A.Device.Helper).ZN(
this.AuB-1);AfO.A4=AaL;}else A.ab5("%s",AfC);}},BgP:function(G){var F;this.AEH((
F=this.Ou.Q,F[1].call(F[0])));var Av=this.Filter.DL(4,3);if(!!Av){var AfO=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AfO){var AaL=A._GetAutoObject(
A.Device.Helper).ZN(this.AuA);AfO.A4=AaL;}else A.ab5("%s",AfC);}},ALc:function(G
){var A2v=this.Am0&&!!this.Filter.DL(this.Ou.Eq,this.Ou.Operator);var A4l=this.Am0&&
!!this.Filter.DL(this.ND.Eq,this.ND.Operator);A._GetAutoObject(A.Device.Helper).
JY(this.Ot,this.Am0);A._GetAutoObject(A.Device.Helper).JY(this.RP,this.Am0&&this.
Amo);A._GetAutoObject(A.Device.Helper).JY(this.RQ,this.Am0&&this.Amo);A._GetAutoObject(
A.Device.Helper).JY(this.Ou,A2v);A._GetAutoObject(A.Device.Helper).JY(this.ND,A4l
);},ArD:function(E){if(this.Amo===E)return;this.Amo=E;A.abo([this,this.A77,this.
ArD],0);A.pe([this,this.ALc],this);},Bed:function(G){var EE=(C.AjG.isPrototypeOf(
G)?G:null);if(!EE)return;var Av=this.Filter.DL(EE.Eq,EE.Operator);if(!!Av){this.
Filter.Ni(Av);A.abo([this,this.Fn,this.Fr],0);}else{if(EE===this.RP){Av=A._NewObject(
A.Device.UInt32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper
).ZN(this.AuA);this.Bb(this.Ou);}else if(EE===this.RQ){Av=A._NewObject(A.Device.
UInt32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper).ZN(this.AuB-1);this.
Bb(this.ND);}if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fn,this.Fr],0);}}A.pe([
this,this.ALc],this);},BzY:function(G){this.ArD(!this.Amo);if(this.Amo===false){
var Av=this.Filter.DL(this.Ot.Eq,this.Ot.Operator);while(!!Av){this.Filter.Ni(Av
);Av=this.Filter.DL(this.Ot.Eq,this.Ot.Operator);}A.abo([this,this.Fn,this.Fr],0
);}},BmA:function(E){if(this.Am0===E)return;this.Am0=E;A.pe([this,this.ALc],this
);},Fn:function(){return this.Filter;},BkA:function(){return this.Ave;},Bkz:function(
){return this.Avd;},Blb:function(){return this.AsI;},BkP:function(){return this.
Arm;},A84:function(){return this.AxV;},A83:function(){return this.AxU;},A82:function(
){return this.An8;},A7_:function(){return this.AuB;},A78:function(){return this.
AuA;},A77:function(){return this.Amo;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABI._Init.call(this.Transponder={I:this},0);C.ABI._Init.
call(this.Ek={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ABT._Init.call(
this.P3={I:this},0);C.AjG._Init.call(this.S5={I:this},0);C.Abm._Init.call(this.N_={
I:this},0);C.AjG._Init.call(this.S6={I:this},0);C.Abm._Init.call(this.Nl={I:this
},0);C.ABT._Init.call(this.Ot={I:this},0);C.AjG._Init.call(this.RP={I:this},0);C.
ACG._Init.call(this.Ou={I:this},0);C.AjG._Init.call(this.RQ={I:this},0);C.ACG._Init.
call(this.ND={I:this},0);C.AmT._Init.call(this.Lc={I:this},0);C.AmT._Init.call(this.
Jq={I:this},0);C.AmT._Init.call(this.KV={I:this},0);C.AmT._Init.call(this.Mt={I:
this},0);C.QD._Init.call(this.Yk={I:this},0);C.QD._Init.call(this.S7={I:this},0);
C.QD._Init.call(this.RR={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I3;var B;this.N.Z(true);this.N.CV(A.aaR(A.acf.A4V));this.Dr(C.APs);this.Gender.
At(this.Ave);this.AnimalType.At(this.Avd);this.Transponder.At(this.AsI);this.Ek.
At(this.Arm);this.Y.H(Fe);this.Y.JR(1);this.P3.H(IU);this.P3.Aj(true);this.P3.T(
A._GetAutoObject(A.Device.Helper).AmR(0,1));this.P3.Nc(1);this.S5.H(Qa);this.S5.
Aj(true);this.S5.T(A.aaR(A.acf.AD4));this.S5.Nc(1);this.S5.ON(2);this.N_.H(Aab);
this.N_.Nc(1);this.N_.ON(2);this.N_.AFJ(A.aaR(A.acf.GM));this.S6.H(Alc);this.S6.
Aj(true);this.S6.T(A.aaR(A.acf.AG4));this.S6.Nc(1);this.S6.ON(3);this.Nl.H(Aon);
this.Nl.Aj(true);this.Nl.Nc(1);this.Nl.ON(3);this.Nl.AFJ(A.aaR(A.acf.GM));this.Ot.
H(AWE);this.Ot.Aj(true);this.Ot.T(A.aaR(A.acf.RO));this.Ot.Nc(4);this.RP.H(AWF);
this.RP.Aj(true);this.RP.T(A.aaR(A.acf.AD4));this.RP.Nc(4);this.RP.ON(3);this.Ou.
H(AWG);this.Ou.Nc(4);this.Ou.ON(3);this.Ou.A9Z(2);this.RQ.H(AWH);this.RQ.Aj(true
);this.RQ.T(A.aaR(A.acf.AG4));this.RQ.Nc(4);this.RQ.ON(2);this.ND.H(AWI);this.ND.
Aj(true);this.ND.Nc(4);this.ND.ON(2);this.ND.A9Z(3);this.Lc.H(As3);this.Lc.Aj(true
);this.Lc.Nc(7);this.Lc.Ahs(0);this.Lc.ON(0);this.Jq.H(Xb);this.Jq.Aj(true);this.
Jq.Nc(14);this.Jq.Ahs(0);this.Jq.ON(0);this.KV.H(Xb);this.KV.Aj(true);this.KV.Nc(
22);this.KV.Ahs(0);this.KV.ON(1);this.Mt.H(Xb);this.Mt.Aj(true);this.Mt.Nc(26);this.
Mt.Ahs(0);this.Mt.ON(1);this.Yk.H(Xb);this.Yk.Aj(true);this.Yk.Nc(11);this.Yk.Ahs(
0);this.Yk.ON(0);this.S7.H(Xb);this.S7.Aj(true);this.S7.Nc(12);this.S7.Ahs(0);this.
S7.ON(0);this.RR.H(Xb);this.RR.Aj(true);this.RR.Nc(8);this.RR.Ahs(0);this.RR.ON(
0);this.Ay.H(It);this.J(this.Y,0);this.J(this.P3,0);this.J(this.S5,0);this.J(this.
N_,0);this.J(this.S6,0);this.J(this.Nl,0);this.J(this.Ot,0);this.J(this.RP,0);this.
J(this.Ou,0);this.J(this.RQ,0);this.J(this.ND,0);this.J(this.Lc,0);this.J(this.Jq
,0);this.J(this.KV,0);this.J(this.Mt,0);this.J(this.Yk,0);this.J(this.S7,0);this.
J(this.RR,0);this.J(this.Ay,0);this.N.CE=[this,this.Ev];this.N.Cl=[this,this.Bz2
];this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.BAX];this.P3.AR=[this,this.BzZ
];this.P3.At([this,this.A82,this.Ar5]);this.S5.AR=[this,this.Bee];this.N_.Gq([this
,this.D_,this.GQ]);this.N_.At([this,this.A83,this.AFR]);this.S6.AR=[this,this.Bee
];this.Nl.Gq([this,this.D_,this.GQ]);this.Nl.At([this,this.A84,this.AFS]);this.Ot.
AR=[this,this.BzY];this.Ot.At([this,this.A77,this.ArD]);this.RP.AR=[this,this.Bed
];this.Ou.Gq([this,this.D_,this.GQ]);this.Ou.At([this,this.A78,this.AEH]);this.RQ.
AR=[this,this.Bed];this.ND.Gq([this,this.D_,this.GQ]);this.ND.At([this,this.A7_,
this.AEJ]);this.Lc.AR=[this,this.AAo];this.Lc.At([B=this.Gender,B.B_,B.B$]);this.
Lc.CK(this.Gender);this.Jq.AR=[this,this.AAo];this.Jq.At([B=this.AnimalType,B.B_
,B.B$]);this.Jq.CK(this.AnimalType);this.KV.AR=[this,this.AAo];this.KV.At([B=this.
Transponder,B.B_,B.B$]);this.KV.CK(this.Transponder);this.Mt.AR=[this,this.AAo];
this.Mt.At([B=this.Ek,B.B_,B.B$]);this.Mt.CK(this.Ek);this.Yk.AR=[this,this.A2N];
this.S7.AR=[this,this.A2N];this.RR.AR=[this,this.A2N];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.Ek._Done();this.Y._Done();this.P3._Done();this.S5._Done();this.N_._Done(
);this.S6._Done();this.Nl._Done();this.Ot._Done();this.RP._Done();this.Ou._Done(
);this.RQ._Done();this.ND._Done();this.Lc._Done();this.Jq._Done();this.KV._Done(
);this.Mt._Done();this.Yk._Done();this.S7._Done();this.RR._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.Ek._ReInit();
this.Y._ReInit();this.P3._ReInit();this.S5._ReInit();this.N_._ReInit();this.S6._ReInit(
);this.Nl._ReInit();this.Ot._ReInit();this.RP._ReInit();this.Ou._ReInit();this.RQ.
_ReInit();this.ND._ReInit();this.Lc._ReInit();this.Jq._ReInit();this.KV._ReInit(
);this.Mt._ReInit();this.Yk._ReInit();this.S7._ReInit();this.RR._ReInit();this.Ay.
_ReInit();this.N.CV(A.aaR(A.acf.A4V));this.S5.T(A.aaR(A.acf.AD4));this.N_.AFJ(A.
aaR(A.acf.GM));this.S6.T(A.aaR(A.acf.AG4));this.Nl.AFJ(A.aaR(A.acf.GM));this.Ot.
T(A.aaR(A.acf.RO));this.RP.T(A.aaR(A.acf.AD4));this.RQ.T(A.aaR(A.acf.AG4));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.N_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ot)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A_2={ZO:null,BnV:
function(Bxw){var EF=A._NewObject(C.A_1,0);EF.AB=Bxw;EF.Mu=this.ZO;this.ZO=EF;},
A_H:function(){var Vk=null;if(!!this.ZO){Vk=this.ZO.AB;this.ZO=this.ZO.Mu;}return Vk;
},Contains:function(Alj){var EF=this.ZO;while(!!EF){if(EF.AB.An2===Alj)return true;
EF=EF.Mu;}return false;},BnK:function(){if(!!this.ZO)return this.ZO.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A_2;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZO)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A_1={AB:null,
Mu:null,_Init:function(aArg){this.__proto__=C.A_1;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMb={ARK:function(){A._GetAutoObject(
A.Device.Helper).Axq(this.H7,0);A._GetAutoObject(C.A9).Fy();},A7B:function(){this.
H7.Ch(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A9).Fy();},A6C:function(
){return A.aaL(A.ach.AmY);},_Init:function(aArg){C.AF_._Init.call(this,aArg);this.
__proto__=C.AMb;this.Dr(C.IJ);},_className:"Application::AnimalActionRateScreen"
};C.AL9={Wx:function(G){this.Agt();this.I1(A.aaR(A.acf.AU5),[this,this.ATw],5);this.
I1(A.aaR(A.acf.A5m),[this,this.BlA],4);this.I1(A.aaR(A.acf.AF9),[this,this.ATh],
3);this.I1(A.aaR(A.acf.AnW),[this,this.AwQ],2);this.I1(A.aaR(A.acf.AdS),[this,this.
AEM],1);this.I1(A.aaR(A.acf.Aux),[this,this.AEG],0);A._GetAutoObject(C.B4).Gu();
A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Anc)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abp:function(){return C.AM2;},Abq:function(
){return C.ADd;},Q8:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
Ay1=A._NewObject(A.Device.BoolFilterCriterion,0);Ay1.Initialize(8,0,true,true);Be.
CW(Ay1);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HO:function(G){C.GZ.HO.call(
this,G);if(this.Ake()===false){this.N.Cs(A.aaL(A.ach.AGg));this.N.Cg=[this,this.
A5S];this.N.FC(A.jV);}this.N.OO(false);this.N.OP(false);},Agf:function(){A._GetAutoObject(
C.A9).Cd(40);},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.
AL9;var B;this.Dr(C.AOT);this.Dj(A.aaR(A.acf.A7H));this.AwL([B=A._GetAutoObject(
A.Device.Device),B.A7$,B.BaL]);},_ReInit:function(){C.GZ._ReInit.call(this);this.
Dj(A.aaR(A.acf.A7H));},_className:"Application::AlarmListScreen"};C.ANr={DE:function(
G){},Agc:function(G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gr);var Aa=(C.AB0.isPrototypeOf(
G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper).G7(Aa.Hr);A._GetAutoObject(
C.A9).Cd(13);}},Q8:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
Azj=A._NewObject(A.Device.BoolFilterCriterion,0);Azj.Initialize(9,0,true,true);Be.
CW(Azj);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HO:function(G){C.GZ.HO.call(
this,G);this.N.OO(false);this.N.OP(false);},_Init:function(aArg){C.GZ._Init.call(
this,aArg);this.__proto__=C.ANr;this.Dr(C.AOV);this.Dj(A.aaR(A.acf.A7I));},_ReInit:
function(){C.GZ._ReInit.call(this);this.Dj(A.aaR(A.acf.A7I));},_className:"Application::ControlListScreen"
};C.Aeo={Filter:null,Eq:0,Jb:10,TableId:0,Operator:1,CP:function(){var F;this.Tq((
F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));},Bl:function(aSize){C.
Co.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jb),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb],E,0);A.pe([this,this.
Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tq((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));else this.
Tq(null);},Ahs:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mb],this);},Nc:function(E){if(this.Eq===E)return;this.Eq=E;A.pe([this,this.
Mb],this);},Tq:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A6v(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).AmR(this.TableId
,this.Eq));},ON:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mb],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aeo;this.V.H(AHD);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QD={H6:null,Bl:function(aSize){var B;C.Aeo.Bl.call(this,aSize);this.H6.H([(aSize[
0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jb,0,this.
H6.M[0]-this.Jb,aSize[1]]);},Tq:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).AmR(this.TableId,this.Eq));var Av=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Av&&Av.A4)this.H6.Cv(1);else this.H6.Cv(0);},_Init:function(aArg
){C.Aeo._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.QD;this.H6.H(AHE);this.H6.Cv(0);this.J(this.H6,0);this.H6.Ax(A.aaL(A.ach.AqK));
},_Done:function(){this.__proto__=C.Aeo;this.H6._Done();C.Aeo._Done.call(this);}
,_ReInit:function(){C.Aeo._ReInit.call(this);this.H6._ReInit();},_Mark:function(
D){var B;C.Aeo._Mark.call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APs={Ap:null,Text:null,De:function(
E){C.BQ.De.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APs;this.Ap.H(AWJ);this.Text.H(AWK);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.Aez));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BQ;this.Ap._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjP={
AW:null,T3:null,Gv:null,D2:null,A$:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BQ.Bl.call(this,aSize);this.T3.H(A.abJ(this.T3.M,A.abe(this.AW.M.slice(0
,2),AWL)));this.T3.H(A.abK(this.T3.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AWM
)));},Ai:function(Ae){var B;C.BQ.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IB)this.T3.L(A.jb.AV);else this.T3.L(A.jb.AmZ);},De:function(E){
C.BQ.De.call(this,E);this.Gv.L(E);this.D2.Zo(E);},Wy:function(E){C.BQ.Wy.call(this
,E);this.D2.CT(E);},Akm:function(){return this.AW.Akm();},Awc:function(){return this.
AW.Awc();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.BQ._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BT._Init.call(this.T3={I:this},0);A.acg.Ap._Init.call(this.Gv={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C5._Init.call(this.A$={I:this
},0);this.__proto__=C.AjP;this.AW.H(AWN);this.T3.H(AWO);this.T3.Ng(2);this.Gv.H(
AWP);this.Gv.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(AWQ);this.D2.Zo(A.jb.Bm);this.
D2.CT(A.jb.Rg);this.D2.Hm(2);this.A$.DC(AWR);this.A$.DM(AWS);this.A$.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.T3,0);this.J(this.Gv,0);this.J(this.D2,0);this.J(this.
A$,0);this.Bb(this.AW);this.Gv.Ax(A.aaL(A.ach.Gv));this.D2.S(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.AW._Done();this.T3._Done(
);this.Gv._Done();this.D2._Done();this.A$._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.AW._ReInit();this.T3._ReInit();this.Gv._ReInit(
);this.D2._ReInit();this.A$._ReInit();this.D2.S(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.BQ._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DF={Di:null,Ip:null,Io:null
,Agb:function(G){if(this.Ey<0)this.LZ(1);else if(this.Ey===9)this.LZ(0);else this.
LZ(this.Ey+1);A.pe(this.Di,this);},Ai:function(Ae){var B;C.Ey.Ai.call(this,Ae);var
He=((Ae&0x10)===0x10);var IB=((Ae&0x40)===0x40);if(IB){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.Dk(256);}else if(He){this.Background.L(this.MZ);this.
Text.L(A.jb.Text);this.Dk(256);}else{this.Background.L(this.MZ);this.Text.L(A.jb.
Text);this.Dk(128);}},Aga:function(G){if(this.Ey<=0)this.LZ(9);else this.LZ(this.
Ey-1);A.pe(this.Di,this);},_Init:function(aArg){C.Ey._Init.call(this,aArg);A.Core.
BK._Init.call(this.Ip={I:this},0);A.Core.BK._Init.call(this.Io={I:this},0);this.
__proto__=C.DF;this.Ip.Filter=4;this.Io.Filter=5;this.Ip.BL=[this,this.Agb];this.
Ip.D1=[this,this.Agb];this.Io.BL=[this,this.Aga];this.Io.D1=[this,this.Aga];},_Done:
function(){this.__proto__=C.Ey;this.Ip._Done();this.Io._Done();C.Ey._Done.call(this
);},_ReInit:function(){C.Ey._ReInit.call(this);this.Ip._ReInit();this.Io._ReInit(
);},_Mark:function(D){var B;C.Ey._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Io)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Di:null,Ct:null,CU:null,Dy:null,Ep:null,FY:null,ES:null,Fl:null,Fa:null,M4:0,AQ1:
false,Aqn:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqn)this.ES.AeX(true);else this.ES.AeX(false);},AwH:function(E){var B;
if(E===this.Akm())return;var Af6=E;var DV=this.ES;while(!!DV){if(Af6>0){DV.LZ(Af6
%10);Af6=(Af6/10)|0;}else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.QH(DV,2,0x11))?
B:null);}},Akm:function(){return A.wz(this.Awc(),-1,10);},On:function(G){if(this.
FY.Ey>=0)this.BfY(7);},MU:function(G){if(((this.Akm()>0)||this.AQ1)&&(this.Ct.Ey<
0))this.BfY(2);else if(this.Akm()<=0)this.Fa.NH=true;},Adr:function(G){A.pe(this.
Di,this);},BfY:function(Gz){var B;var ALr=0;var DV=null;switch(Gz){case 2:{DV=this.
Ct;ALr=7;}break;case 7:{DV=this.ES;ALr=2;}break;default:throw new Error(AWT);}while(
!!DV){var A2G=(C.DF.isPrototypeOf(B=this.QH(DV,ALr,0x11))?B:null);if(!!A2G)DV.LZ(
A2G.Ey);else if(ALr===7)DV.LZ(0);else DV.LZ(-1);DV=A2G;}A.pe([this,this.Adr],this
);},AeX:function(E){if(this.Aqn===E)return;this.Aqn=E;this.Am();},BmB:function(E
){if(this.AQ1===E)return;this.AQ1=E;},ASY:function(E){var B;if(E===this.Awc())return;
var Af6=E;var DV=this.ES;while(!!DV){if(Af6.length>0){DV.LZ(A.wz(A.ab2(Af6,1),-1
,10));Af6=A.abV(Af6,Af6.length-1);}else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.
QH(DV,2,0x11))?B:null);}},Awc:function(){var B;var Iz=A.jV;var O=0;var B5=this.Ct;
for(;O<6;O=O+1){if(!!B5&&(B5.Ey>=0))Iz=Iz+B5.Ey.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TN(B5,0x11))?B:null);}return Iz;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Ct={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF.
_Init.call(this.FY={I:this},0);C.DF._Init.call(this.ES={I:this},0);A.Core.BK._Init.
call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0);this.__proto__=
C.AW;this.H(Ayh);this.Ct.AZ(0x3);this.Ct.H(AHF);this.CU.AZ(0x3);this.CU.H(AHG);this.
Dy.AZ(0x3);this.Dy.H(AHH);this.Ep.AZ(0x3);this.Ep.H(AHI);this.FY.AZ(0x3);this.FY.
H(AHJ);this.ES.AZ(0x3);this.ES.H(AHK);this.ES.LZ(0);this.Fl.Filter=6;this.Fa.Filter=
7;this.M4=A.jb.CJ;this.J(this.Ct,0);this.J(this.CU,0);this.J(this.Dy,0);this.J(this.
Ep,0);this.J(this.FY,0);this.J(this.ES,0);this.Bb(this.ES);this.Ct.Di=[this,this.
Adr];this.CU.Di=[this,this.Adr];this.Dy.Di=[this,this.Adr];this.Ep.Di=[this,this.
Adr];this.FY.Di=[this,this.Adr];this.ES.Di=[this,this.Adr];this.Fl.BL=[this,this.
On];this.Fa.BL=[this,this.MU];},_Done:function(){this.__proto__=A.Core.P;this.Ct.
_Done();this.CU._Done();this.Dy._Done();this.Ep._Done();this.FY._Done();this.ES.
_Done();this.Fl._Done();this.Fa._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Ct._ReInit();this.CU._ReInit();this.Dy._ReInit(
);this.Ep._ReInit();this.FY._ReInit();this.ES._ReInit();this.Fl._ReInit();this.Fa.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Di)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bhr="00558be9";C.BCz={Undefined:0,BDD:1,BCR:2};C.AkG={
To:null,AiT:null,La:null,ANv:null,An5:null,push:function(MJ){if(!this.To){MJ.Ahu=
null;MJ.Mu=null;this.To=MJ;this.AiT=this.To;}else{MJ.Ahu=this.AiT;MJ.Mu=null;this.
AiT.Mu=MJ;this.AiT=MJ;}},BBw:function(MJ){var Qi=this.To;while(!!Qi){if(Qi.JL.Id===
MJ.Id)return Qi;Qi=Qi.Mu;}return Qi;},BBf:function(MJ){if(MJ===this.To)this.pop(
);else if(MJ===this.AiT){MJ=MJ.Ahu;if(!!MJ)MJ.Mu=null;this.AiT=MJ;}else{MJ.Ahu.Mu=
MJ.Mu;MJ.Mu.Ahu=MJ.Ahu;}},Ahm:function(E){var F;if(this.La===E)return;this.La=E;
if(!!this.La)this.La.AgI(2);(F=this.ANv,F[2].call(F[0],this.La));},Vh:function(G
){var Qi=(C.ATJ.isPrototypeOf(G)?G:null);if(!!Qi){if(!Qi.JL.PopupState){if(!this.
La)this.Ahm(this.top());}else if(Qi.JL.PopupState===4){this.pop();this.Ahm(this.
top());}else if(Qi.JL.PopupState===5){this.pop();this.Ahm(this.top());}else if(Qi.
JL.PopupState===7){this.pop();this.Ahm(this.top());}else if(Qi.JL.PopupState===8
){this.pop();this.Ahm(this.top());}else if(Qi.JL.PopupState===6){if(Qi===this.La
){this.pop();this.Ahm(this.top());}else this.BBf(Qi);}else if(Qi.JL.PopupState===
3){this.pop();this.Ahm(this.top());}}},pop:function(){var AKL=null;if(!!this.To){
AKL=this.To;if(this.To===this.AiT){this.To=null;this.AiT=null;}else{this.To=this.
To.Mu;if(!this.To)throw new Error(AWU);this.To.Ahu=null;}AKL.Ahu=null;AKL.Mu=null;
}return AKL;},top:function(){return this.To;},BAY:function(G){var B;var AtW=(A.Device.
PopupContext.isPrototypeOf(B=this.An5.JL)?B:null);if(!!AtW){var A3U=this.BBw(AtW
);if(!!A3U){A3U.A9x(AtW);if(!AtW.Show)A3U.AgI(6);}else if(AtW.Show){var AKo=A._NewObject(
C.ATJ,0);AKo.A9x(AtW);AKo.ASH=[this,this.Vh];this.push(AKo);AKo.AgI(0);}}},_Init:
function(aArg){A.Core.A$m._Init.call(this.An5={I:this},0);this.__proto__=C.AkG;this.
An5.AR_=[this,this.BAY];this.An5.BlV(A._GetAutoObject(A.Device.Device).AnJ);A.h7++;
},_Done:function(){this.__proto__=null;this.An5._Done();A.h7--;},_ReInit:function(
){this.An5._ReInit();},_Mark:function(D){var B;if((B=this.To)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.La)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANv)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATJ={Rk:null,Mu:null,Ahu:null,JL:null,ASH:null,PopupIdToString:null,AfU:function(
BwD,Bxb,Bxv,Bxm,Bxo,Bxl,BwW){var Vj=A._NewObject(C.ATI,0);Vj.Bm4(this.JL.Id);Vj.
A_g(BwD);Vj.ASI=Bxl;Vj.A_i(this.JL.Ak0);Vj.A94(this.JL.AkF);Vj.BP=A._NewObject(C.
N,0);Vj.Lm().Cl=Bxo;Vj.Lm().Cg=null;Vj.Lm().CE=Bxm;Vj.Lm().CV(Bxv);Vj.Lm().Cs(null
);Vj.Lm().Hx(Bxb);Vj.Lm().AFb(BwW);return Vj;},Akn:function(){if(!this.Rk){var Agm=
this.PopupIdToString.BR(this.JL.Id);switch(this.JL.Id){case 91:case 92:this.Rk=this.
AfU(Agm,A.jV,A.jV,null,null,[this,this.Af9],0);break;case 39:this.Rk=this.AfU(Agm
,A.aaR(A.acf.Amw),A.aaR(A.acf.Ok),[this,this.A2T],[this,this.A2U],[this,this.Af9
],3);break;case 13:this.Rk=this.AfU(Agm,A.aaR(A.acf.Amw),A.aaR(A.acf.Bn7),[this,
this.A2S],[this,this.AKt],[this,this.Af9],3);break;case 25:this.Rk=this.AfU(Agm,
A.aaR(A.acf.Amw),A.aaR(A.acf.Ok),[this,this.A2S],[this,this.AKt],[this,this.Af9]
,3);break;case 16:case 24:case 49:case 74:this.Rk=this.AfU(Agm,A.aaR(A.acf.Amw),
A.jV,[this,this.A2S],null,[this,this.Af9],1);break;case 0:case 1:case 2:case 5:case
27:case 64:case 28:case 30:case 42:case 41:case 50:case 51:case 57:case 52:case 53:
case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:case 34:case 82:case
83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:case 36:case 14:case 15:
case 35:case 21:case 22:case 43:case 85:case 26:case 23:case 69:case 17:case 19:
case 54:case 18:case 20:case 55:case 62:case 96:case 60:case 98:case 65:case 66:
case 61:case 104:case 31:case 67:case 106:case 86:case 68:case 70:case 71:case 100:
case 97:case 88:case 89:case 84:case 93:case 94:case 87:case 109:case 102:case 101:
case 103:this.Rk=this.AfU(Agm,A.jV,A.aaR(A.acf.Ok),null,[this,this.AKt],[this,this.
Af9],3);break;case 58:case 9:case 6:case 29:case 107:case 32:case 47:case 48:case
59:case 72:case 99:case 90:case 73:case 105:this.Rk=this.AfU(Agm,A.aaR(A.acf.No)
,A.aaR(A.acf.Yes),[this,this.A2T],[this,this.A2U],[this,this.Af9],3);break;case 110:
this.Rk=this.AfU(Agm,A.jV,A.jV,null,null,[this,this.Af9],1);break;case 46:case 111:
this.Rk=this.AfU(Agm,A.jV,A.aaR(A.acf.Ok),null,[this,this.AKt],[this,this.Af9],1
);break;case 4:case 7:case 33:case 44:case 37:case 38:case 63:case 95:case 108:case
112:this.Rk=this.AfU(Agm,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2T],[this,
this.A2U],[this,this.Af9],1);break;default:A.ab5("%s",(AWV+this.JL.Id.toFixed())+
AWW);}}switch(this.JL.Id){case 16:case 49:this.Rk.A_y(true);break;case 91:case 92:
this.Rk.A_y(false);break;default:;}return this.Rk;},AKt:function(G){this.AgI(4);
},A2S:function(G){this.AgI(5);},A2U:function(G){this.AgI(7);},A2T:function(G){this.
AgI(8);},Af9:function(G){this.AgI(3);},A9x:function(E){if(this.JL===E)return;this.
JL=E;if(!!this.Rk){this.Akn().A_i(this.JL.Ak0);this.Akn().A94(this.JL.AkF);}},AgI:
function(Bxr){var B;this.JL.Bm5(Bxr);(B=this.ASH)?B[1].call(B[0],this):null;},BAu:
function(G){this.AgI(9);},_Init:function(aArg){A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);this.__proto__=C.ATJ;A.h7++;},_Done:function(){
this.__proto__=null;this.PopupIdToString._Done();A.h7--;},_ReInit:function(){this.
PopupIdToString._ReInit();},_Mark:function(D){var B;if((B=this.Rk)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JL)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ASH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Application::PopupEntry"};C.Gc={BooleanToYesNo:
null,Du:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
BooleanToYesNo.BR(aIndex);},DZ:function(A_){return A_;},H3:function(){return 1;}
,_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(
this.BooleanToYesNo={I:this},0);this.__proto__=C.Gc;},_Done:function(){this.__proto__=
C.AC;this.BooleanToYesNo._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::YesNo"};C.Afl={Ur:null,Kb:function(G){var F;var BO=this.AM;this.Bx(
this.AM+1);if(this.AM!==BO){if(!!this.Ur&&!!this.AC)switch(this.AC.C7(this.AM)){
case 0:(F=this.Ur,F[2].call(F[0],false));break;case 1:(F=this.Ur,F[2].call(F[0],
true));break;default:;}A.abo(this.Ur,0);}},J8:function(G){var F;var BO=this.AM;this.
Bx(this.AM-1);if(this.AM!==BO){if(!!this.Ur&&!!this.AC)switch(this.AC.C7(this.AM
)){case 0:(F=this.Ur,F[2].call(F[0],false));break;case 1:(F=this.Ur,F[2].call(F[
0],true));break;default:;}A.abo(this.Ur,0);}},Akz:function(E){if(A.aaZ(this.Ur,E
))return;if(!!this.Q)A.z$([this,this.A3w],this.Ur,0);this.Ur=E;if(!!E)A.zX([this
,this.A3w],E,0);if(!!E)A.pe([this,this.A3w],this);},A3w:function(G){var F;if(!!this.
Ur){if((F=this.Ur,F[1].call(F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(
aArg){C.BU._Init.call(this,aArg);this.__proto__=C.Afl;this.JX(this.V,-1);},_Mark:
function(D){var B;C.BU._Mark.call(this,D);if((B=this.Ur)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"};C.ATY={Jf:null
,OU:null,IS:null,Gk:null,AK:null,Abe:null,AgO:null,TJ:null,R$:null,AcA:null,WX:null
,Hi:null,ABp:true,Init:function(aArg){var B;A.zX([this,this.Al0],[B=A._GetAutoObject(
A.Device.Device),B.ASx,B.AZ7],0);A.pe([this,this.Al0],this);},Ai:function(Ae){var
F;C.AB.Ai.call(this,Ae);if(this.ABp)this.N.C2(A.aaL(A.ach.AQH));else this.N.C2(A.
aaL(A.ach.AQI));if(A._GetAutoObject(A.Device.Device).ScanState===4){this.OU.L(A.
jb.Bm);this.R$.Z(false);this.TJ.Z(false);this.IS.Z(true);this.Gk.Ar(false);(F=this.
Gk.Q,F[2].call(F[0],this.Gk.B1));this.Background.L(A.jb.Gh);}else if(this.Abe.Bw
){this.OU.L(A.jb.Text);this.R$.Z(true);this.TJ.Z(true);this.IS.Z(false);this.Gk.
Ar(false);(F=this.Gk.Q,F[2].call(F[0],this.Gk.B1));this.Background.L(A.jb.E1);}else{
this.OU.L(A.jb.Text);this.R$.Z(false);this.TJ.Z(false);this.IS.Z(true);this.Gk.Ar(
true);this.Background.L(A.jb.CJ);}if(this.AgO.Bw)this.WX.Z(true);else this.WX.Z(
false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhH();},E4:function(G){
A._GetAutoObject(A.Device.Device).AnV();A._GetAutoObject(A.Device.Device).Ae_(false
);A._GetAutoObject(A.Device.Device).Uq(false);},Al0:function(G){var B;this.Am();
switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.BAa],
this);break;case 3:{A.pe([this,this.BeP],this);A.pe([B=this.Abe,B.AxE],this);A.pe(
this.Abe.Mz,this);}break;case 4:A.ab5("%s",AWX);break;default:;}},Ev:function(G){
A._GetAutoObject(C.A9).Fy();},BA0:function(G){this.Bnv(!this.ABp);},Bnv:function(
E){if(this.ABp===E)return;this.ABp=E;if(!E)A._GetAutoObject(A.Device.Device).Ae_(
false);this.Am();},BAa:function(G){var B;this.BeP(this);if(this.ABp)A._GetAutoObject(
A.Device.Device).Ae_(true);A._GetAutoObject(A.Device.Device).WA(65280);A._GetAutoObject(
A.Device.Device).Uq(true);A.pe([B=this.Abe,B.StartTimer],this);A.pe([B=this.AgO,
B.StartTimer],this);this.Am();},BAb:function(G){A._GetAutoObject(A.Device.Device
).Ae_(false);A._GetAutoObject(A.Device.Device).Uq(false);this.Am();},BAd:function(
G){this.Am();},BeP:function(G){A._GetAutoObject(A.Device.Device).AhH();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jf._Init.call(this.Jf={I:this},0);C.CH._Init.
call(this.OU={I:this},0);A.acg.Ap._Init.call(this.IS={I:this},0);A.acl.Gk._Init.
call(this.Gk={I:this},0);A.acg.AK._Init.call(this.AK={I:this},0);A.Core.Timer._Init.
call(this.Abe={I:this},0);A.Core.Timer._Init.call(this.AgO={I:this},0);A.acg.Ap.
_Init.call(this.TJ={I:this},0);A.acg.Ap._Init.call(this.R$={I:this},0);A.acg.Text.
_Init.call(this.AcA={I:this},0);C.WX._Init.call(this.WX={I:this},0);C.CH._Init.call(
this.Hi={I:this},0);this.__proto__=C.ATY;var B;this.Background.L(A.jb.CJ);this.N.
Z(true);this.Jf.H(AWY);this.Jf.AkC(0);this.OU.H(AWZ);this.OU.R(A.aaR(A.acf.A$r));
this.OU.L(A.jb.Text);this.IS.H(AW0);this.IS.L(A.jb.AV);this.IS.Zm(true);this.Gk.
Fp(1750);this.Gk.Um(750);this.Gk.Akx(0);this.Gk.Ar(true);this.Gk.B1=3;this.AK.H(
Ayi);this.Abe.PR(-1);this.Abe.Wz(1000);this.AgO.PR(-1);this.AgO.Wz(5000);this.TJ.
H(AHL);this.R$.H(AHL);this.R$.L(A.jb.E1);this.AcA.H(Ayi);this.AcA.R(A.aaR(A.acf.
A_3));this.AcA.L(A.jb.Text);this.WX.H(Ayi);this.Hi.H(AW1);this.Hi.Ar(false);this.
Hi.R(A.aaR(A.acf.RangeTest));this.Hi.L(A.jb.Text);this.J(this.Jf,0);this.J(this.
OU,0);this.J(this.IS,0);this.J(this.AK,0);this.J(this.TJ,0);this.J(this.R$,0);this.
J(this.AcA,0);this.J(this.WX,0);this.J(this.Hi,0);this.N.CE=[this,this.Ev];this.
N.Cl=[this,this.BA0];this.N.C1(A.aaL(A.ach.E2));this.OU.S(A.aaL(A.fl.Af));this.OU.
A2(A.aaL(A.fl.Ak));this.OU.Cu(A.aaL(A.fl.Bh));this.IS.Ax(A.aaL(A.ach.ADF));this.
Gk.Q=[B=this.IS,B.ASk,B.Cv];this.Abe.Mz=[this,this.BAb];this.AgO.Mz=[this,this.BAd
];this.TJ.Ax(A.aaL(A.ach.TJ));this.R$.Ax(A.aaL(A.ach.R$));this.AcA.S(A.aaL(A.fl.
Af));this.WX.At([B=A._GetAutoObject(A.Device.Device),B.ASy,B.AZ8]);this.Hi.S(A.aaL(
A.fl.Ko));this.Hi.A2(A.aaL(A.fl.Il));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jf._Done();this.OU._Done();this.IS._Done();this.Gk._Done();this.AK._Done(
);this.Abe._Done();this.AgO._Done();this.TJ._Done();this.R$._Done();this.AcA._Done(
);this.WX._Done();this.Hi._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jf._ReInit();this.OU._ReInit();this.IS._ReInit();this.Gk.
_ReInit();this.AK._ReInit();this.Abe._ReInit();this.AgO._ReInit();this.TJ._ReInit(
);this.R$._ReInit();this.AcA._ReInit();this.WX._ReInit();this.Hi._ReInit();this.
OU.R(A.aaR(A.acf.A$r));this.AcA.R(A.aaR(A.acf.A_3));this.Hi.R(A.aaR(A.acf.RangeTest
));this.OU.S(A.aaL(A.fl.Af));this.OU.A2(A.aaL(A.fl.Ak));this.OU.Cu(A.aaL(A.fl.Bh
));this.AcA.S(A.aaL(A.fl.Af));this.Hi.S(A.aaL(A.fl.Ko));this.Hi.A2(A.aaL(A.fl.Il
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jf)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TJ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hi).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbR={
ScreenType:0,Ne:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nh:
function(G){A._GetAutoObject(C.A9).Cd(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.AbR;},_className:"Application::MenuItemScreen"
};C.T$={Ad7:null,Ml:null,Amx:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.Amx){this.Ml.Cv(1);this.Ml.L(A.jb.H8);}else{this.Ml.Cv(0);
if(this.KF)this.Ml.L(A.jb.Bm);else if(this.Hk)this.Ml.L(A.jb.Text);else this.Ml.
L(A.jb.Bm);}},IZ:function(G){var F,CA;if(!!this.Ad7){(CA=this.Ad7,CA[2].call(CA[
0],!(F=this.Ad7,F[1].call(F[0]))));this.AEU((F=this.Ad7,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A2Z:function(G){this.KF=true;this.DJ(this);},AEU:function(
E){if(this.Amx===E)return;this.Amx=E;this.DJ(this);this.Am();},A3p:function(G){var
F;this.AEU((F=this.Ad7,F[1].call(F[0])));},A0q:function(s){this.A3p(s);},DJ:function(
G){var F;if(!this.N||!this.KF)return;if(this.Amx){(F=this.N,F[1].call(F[0])).CV(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CV(A.aaR(A.acf.A7W));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ASN:function(E){if(A.aaZ(this.Ad7,E))
return;if(!!this.Ad7)A.z$([this,this.A0q],this.Ad7,0);this.Ad7=E;if(!!E)A.zX([this
,this.A0q],E,0);if(!!E)A.pe([this,this.A0q],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Ml={I:this},0);this.__proto__=C.T$;this.
V.L(A.jb.H8);this.Ml.H(AHM);this.Ml.Cv(0);this.J(this.Ml,0);this.Ml.Ax(A.aaL(A.ach.
AqK));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Ml._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Ml._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad7)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ml)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.AND={H5:null,IM:null,_Init:function(aArg){C.Ce.
_Init.call(this,aArg);C.SQ._Init.call(this.H5={I:this},0);C.AGz._Init.call(this.
IM={I:this},0);this.__proto__=C.AND;var B;this.I$(A.aaR(A.acf.ACo));this.H5.H(AhZ
);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.Bi(true);this.IM.H(UY);this.
IM.Aj(true);this.IM.T(A.aaR(A.acf.Bs));this.J(this.H5,-1);this.J(this.IM,-1);this.
H5.AeU([B=this.H5,B.FU]);this.H5.Gq([this,this.D_,this.GQ]);this.H5.Akw(A.aaL(A.
ach.Edit));this.H5.Ab4([B=A._GetAutoObject(A.Device.Helper),B.U0,B.U3]);this.IM.
AeU([B=this.IM,B.FU]);this.IM.Gq([this,this.D_,this.GQ]);this.IM.Akw(A.aaL(A.ach.
Edit));this.IM.Ab4([B=A._GetAutoObject(A.Device.Helper),B.U0,B.U3]);},_Done:function(
){this.__proto__=C.Ce;this.H5._Done();this.IM._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.H5._ReInit();this.IM._ReInit();this.I$(A.
aaR(A.acf.ACo));this.H5.T(A.aaR(A.acf.Date));this.IM.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Ce._Mark.call(this,D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AUV={Rd:null,FI:null,BY:null,OH:null,YG:null,Aa0:null,_Init:function(aArg){C.
Ce._Init.call(this,aArg);C.Rd._Init.call(this.Rd={I:this},0);C.AMx._Init.call(this.
FI={I:this},0);C.AUu._Init.call(this.BY={I:this},0);C.AUw._Init.call(this.OH={I:
this},0);C.Afl._Init.call(this.YG={I:this},0);C.Aa0._Init.call(this.Aa0={I:this}
,0);this.__proto__=C.AUV;var B;this.I$(A.aaR(A.acf.Temperature));this.FI.At(A._GetAutoObject(
A.Device.Device).AnimalType);this.BY.H(AW2);this.BY.Aj(true);this.BY.T(A.aaR(A.acf.
Ark));this.BY.Bi(false);this.OH.H(Aac);this.OH.Aj(true);this.OH.T(A.aaR(A.acf.Undertemperature
));this.OH.Bi(true);this.OH.Bx(3800);this.OH.F$(3000);this.OH.EU(5000);this.OH.A_q(
A.aaR(A.acf.AGM));this.YG.H(AW3);this.YG.Aj(true);this.YG.Z(true);this.YG.T(A.aaR(
A.acf.A4T));this.J(this.BY,0);this.J(this.OH,0);this.J(this.YG,0);this.BY.AeU([B=
this.BY,B.FU]);this.BY.Gq([this,this.D_,this.GQ]);this.BY.Akw(A.aaL(A.ach.Edit));
this.BY.LX([B=this.BY,B.AyO]);this.BY.L0(A.aaL(A.ach.AnM));this.BY.At([B=this.FI
,B.B_,B.B$]);this.BY.CK(this.FI);this.BY.A92([B=this.FI,B.ASG,B.A0d]);this.BY.A91([
B=this.FI,B.ASF,B.A0c]);this.OH.LX([B=this.BY,B.AyO]);this.OH.L0(A.aaL(A.ach.AnM
));this.OH.At([B=A._GetAutoObject(A.Device.Device),B.A80,B.Ba9]);this.YG.CK(this.
Aa0);this.YG.Akz([B=A._GetAutoObject(A.Device.Device),B.A8k,B.BaT]);},_Done:function(
){this.__proto__=C.Ce;this.Rd._Done();this.FI._Done();this.BY._Done();this.OH._Done(
);this.YG._Done();this.Aa0._Done();C.Ce._Done.call(this);},_ReInit:function(){C.
Ce._ReInit.call(this);this.Rd._ReInit();this.FI._ReInit();this.BY._ReInit();this.
OH._ReInit();this.YG._ReInit();this.Aa0._ReInit();this.I$(A.aaR(A.acf.Temperature
));this.BY.T(A.aaR(A.acf.Ark));this.OH.T(A.aaR(A.acf.Undertemperature));this.OH.
A_q(A.aaR(A.acf.AGM));this.YG.T(A.aaR(A.acf.A4T));},_Mark:function(D){var B;C.Ce.
_Mark.call(this,D);if((B=this.Rd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANQ={PG:null,PH:null,St:null,V3:null,Sv:null,Su:null,Gc:null,Acp:null,Init:function(
aArg){A.zX([this,this.BoS],this.PH.Q,0);},BoS:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw2((F=this.PH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce.
_Init.call(this,aArg);C.Ir._Init.call(this.PG={I:this},0);C.BU._Init.call(this.PH={
I:this},0);C.Afl._Init.call(this.St={I:this},0);C.Ir._Init.call(this.V3={I:this}
,0);C.Afl._Init.call(this.Sv={I:this},0);C.Afl._Init.call(this.Su={I:this},0);C.
Gc._Init.call(this.Gc={I:this},0);C.Acp._Init.call(this.Acp={I:this},0);this.__proto__=
C.ANQ;var B;this.N.H(Xb);this.I$(A.aaR(A.acf.Device));this.PG.H(AhZ);this.PG.Aj(
true);this.PG.T(A.aaR(A.acf.A$b));this.PG.Bi(false);this.PG.F$(2);this.PG.EU(60);
this.PG.IP(A.aaR(A.acf.AG1));this.PG.Ja(A.aaR(A.acf.AG1));this.PH.H(AW4);this.PH.
Aj(true);this.PH.T(A.aaR(A.acf.A$i));this.PH.Bi(true);this.PH.Bx(0);this.PH.F$(-
1);this.PH.EU(1);this.St.H(Aac);this.St.Aj(true);this.St.T(A.aaR(A.acf.HF));this.
St.Bi(false);this.St.Bx(0);this.St.F$(-1);this.St.EU(1);this.V3.H(Ald);this.V3.Aj(
true);this.V3.T(A.aaR(A.acf.A5f));this.V3.Bi(true);this.V3.IP(Aad);this.V3.Ja(Aad
);this.Sv.H(AcO);this.Sv.Aj(true);this.Sv.T(A.aaR(A.acf.AsN));this.Sv.Bi(false);
this.Sv.Bx(1);this.Sv.F$(-1);this.Sv.EU(1);this.Su.H(Ayj);this.Su.Aj(true);this.
Su.T(A.aaR(A.acf.Asq));this.Su.Bi(true);this.Su.Bx(0);this.Su.F$(-1);this.Su.EU(
1);this.Acp.At(A._GetAutoObject(A.Device.Device).AxD);this.J(this.PG,0);this.J(this.
PH,0);this.J(this.St,0);this.J(this.V3,0);this.J(this.Sv,0);this.J(this.Su,0);this.
PG.At([B=A._GetAutoObject(A.Device.Device),B.A8S,B.Ba5]);this.PH.At([B=this.Acp,
B.B_,B.B$]);this.PH.CK(this.Acp);this.St.CK(this.Gc);this.St.Akz([B=A._GetAutoObject(
A.Device.Device),B.AEt,B.AII]);this.V3.At([B=A._GetAutoObject(A.Device.Device),B.
A8h,B.BaQ]);this.Sv.CK(this.Gc);this.Sv.Akz([B=A._GetAutoObject(A.Device.Device)
,B.A81,B.Ba_]);this.Su.CK(this.Gc);this.Su.Akz([B=A._GetAutoObject(A.Device.Device
),B.ASo,B.AZ1]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.PG._Done(
);this.PH._Done();this.St._Done();this.V3._Done();this.Sv._Done();this.Su._Done(
);this.Gc._Done();this.Acp._Done();C.Ce._Done.call(this);},_ReInit:function(){C.
Ce._ReInit.call(this);this.PG._ReInit();this.PH._ReInit();this.St._ReInit();this.
V3._ReInit();this.Sv._ReInit();this.Su._ReInit();this.Gc._ReInit();this.Acp._ReInit(
);this.I$(A.aaR(A.acf.Device));this.PG.T(A.aaR(A.acf.A$b));this.PG.IP(A.aaR(A.acf.
AG1));this.PG.Ja(A.aaR(A.acf.AG1));this.PH.T(A.aaR(A.acf.A$i));this.St.T(A.aaR(A.
acf.HF));this.V3.T(A.aaR(A.acf.A5f));this.Sv.T(A.aaR(A.acf.AsN));this.Su.T(A.aaR(
A.acf.Asq));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.PG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Su)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AT_={V6:null,V5:
null,QN:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bh7
],this.QN.Q,0);},Bh7:function(G){var F;A._GetAutoObject(A.Device.Device).Akt((F=
this.QN.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce._Init.call(this,aArg);C.
Nb._Init.call(this.V6={I:this},0);C.Nb._Init.call(this.V5={I:this},0);C.AUq._Init.
call(this.QN={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AT_;var B;this.I$(A.aaR(A.acf.Asi));this.V6.H(IU);this.
V6.Aj(true);this.V6.T(A.aaR(A.acf.AjD));this.V6.Bi(false);this.V6.Ne(87);this.V5.
H(AW5);this.V5.Aj(true);this.V5.T(A.aaR(A.acf.Aqi));this.V5.Bi(true);this.V5.Ne(
88);this.QN.H(UY);this.QN.Aj(true);this.QN.T(A.aaR(A.acf.A4Y));this.QN.Bi(false);
this.QN.F$(-1);this.QN.EU(1);this.EartagNrAssignmentMode.At(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V6,0);this.J(this.V5,0);this.J(this.
QN,0);this.V6.AR=[B=this.V6,B.Nh];this.V5.AR=[B=this.V5,B.Nh];this.QN.At([B=this.
EartagNrAssignmentMode,B.B_,B.B$]);this.QN.CK(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.V6._Done();this.V5._Done(
);this.QN._Done();this.EartagNrAssignmentMode._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.V6._ReInit();this.V5._ReInit();this.QN._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.I$(A.aaR(A.acf.Asi));this.V6.T(A.aaR(
A.acf.AjD));this.V5.T(A.aaR(A.acf.Aqi));this.QN.T(A.aaR(A.acf.A4Y));},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.WX={Q:null,TransponderProtocolToString:
null,Apm:null,Background:null,Y:null,Sn:null,GM:null,PM:null,OJ:null,Pq:null,C6:
null,EV:null,SL:null,N2:null,CountryToString:null,At:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Kf],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Kf],E,0);if(!!E)A.pe([this,this.Kf],this);},Kf:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GM.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BM=(F=this.Q,F[1].call(F[0])).BiD();if(BM<900){var J6=A._GetAutoObject(
A.Device.Converter).ANu(BM);if(!!J6)this.C6.R(((this.CountryToString.Lu(J6)+AcM)+
BM.toFixed())+Ob);else this.C6.R(BM.toFixed());if(J6===10){var AJ8=this.A6Q((F=this.
Q,F[1].call(F[0])).Id);this.C6.R(this.C6.String+((((AHN+this.Apm.BpC(AJ8))+AcM)+
A.abl(this.Apm.BpB(AJ8),2,10))+Ob));}this.C6.Z(true);this.Pq.Z(true);this.OJ.Z(false
);this.PM.Z(false);}else{this.OJ.R(((A._GetAutoObject(A.Device.Converter).Bhu(BM
)+AcM)+BM.toFixed())+Ob);this.OJ.Z(true);this.PM.Z(true);this.C6.Z(false);this.Pq.
Z(false);}if(BM===276){this.EV.R(this.Apm.BR(this.A6Q((F=this.Q,F[1].call(F[0])).
Id)));this.EV.Z(true);}else this.EV.Z(false);this.N2.R(this.TransponderProtocolToString.
BR((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GM.R(A.jV);this.OJ.
R(A.jV);this.EV.R(A.jV);this.C6.R(A.jV);this.N2.R(A.jV);}},A6Q:function(J4){var Qw=
0;var J6=A._GetAutoObject(A.Device.Converter).S1(J4);switch(J6){case 10:{var Gg=
A._GetAutoObject(A.Device.Helper).Si(J4,8,2)|0;Qw=A._GetAutoObject(A.Device.Converter
).ACO(Gg);}break;default:;}return Qw;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apm={I:this},0);A.acg.AK.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CH._Init.call(this.Sn={I:this},0);C.CH._Init.call(this.GM={I:this},0);C.CH._Init.
call(this.PM={I:this},0);C.CH._Init.call(this.OJ={I:this},0);C.CH._Init.call(this.
Pq={I:this},0);C.CH._Init.call(this.C6={I:this},0);C.CH._Init.call(this.EV={I:this
},0);C.CH._Init.call(this.SL={I:this},0);C.CH._Init.call(this.N2={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WX;
this.H(AcN);this.Background.AZ(0x3F);this.Background.H(AcN);this.Background.L(A.
jb.CS);this.Y.AZ(0x3F);this.Y.H(AcN);this.Y.JR(9);this.Sn.H(AW6);this.Sn.Aj(true
);this.Sn.R(A.aaR(A.acf.GM)+A.aaR(A.acf.Colon));this.Sn.A6(0x11);this.Sn.L(A.jb.
Text);this.GM.H(AHO);this.GM.Aj(true);this.GM.R(AW7);this.GM.A6(0x14);this.GM.L(
A.jb.Text);this.PM.H(AHP);this.PM.Aj(true);this.PM.R(A.aaR(A.acf.A_I)+A.aaR(A.acf.
Colon));this.PM.A6(0x11);this.PM.L(A.jb.Text);this.OJ.H(AHQ);this.OJ.Aj(true);this.
OJ.R(AW8);this.OJ.A6(0x14);this.OJ.L(A.jb.Text);this.Pq.H(AHP);this.Pq.Aj(true);
this.Pq.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.Pq.A6(0x11);this.Pq.L(A.jb.Text
);this.C6.H(AHQ);this.C6.Aj(true);this.C6.R(AW9);this.C6.A6(0x14);this.C6.L(A.jb.
Text);this.EV.H(AW_);this.EV.Aj(true);this.EV.R(AW$);this.EV.A6(0x14);this.EV.L(
A.jb.Text);this.SL.H(AXa);this.SL.Aj(true);this.SL.R(A.aaR(A.acf.N2)+A.aaR(A.acf.
Colon));this.SL.A6(0x11);this.SL.L(A.jb.Text);this.N2.H(AXb);this.N2.Aj(true);this.
N2.R(AXc);this.N2.A6(0x14);this.N2.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sn,0);this.J(this.GM,0);this.J(this.PM,0);this.J(this.OJ,0
);this.J(this.Pq,0);this.J(this.C6,0);this.J(this.EV,0);this.J(this.SL,0);this.J(
this.N2,0);this.Sn.S(A.aaL(A.fl.Ak));this.Sn.A2(A.aaL(A.fl.Bh));this.GM.S(A.aaL(
A.fl.Ak));this.GM.A2(A.aaL(A.fl.Bh));this.PM.S(A.aaL(A.fl.Ak));this.PM.A2(A.aaL(
A.fl.Bh));this.OJ.S(A.aaL(A.fl.Ak));this.OJ.A2(A.aaL(A.fl.Bh));this.Pq.S(A.aaL(A.
fl.Ak));this.Pq.A2(A.aaL(A.fl.Bh));this.C6.S(A.aaL(A.fl.Ak));this.C6.A2(A.aaL(A.
fl.Bh));this.EV.S(A.aaL(A.fl.Ak));this.EV.A2(A.aaL(A.fl.Bh));this.SL.S(A.aaL(A.fl.
Ak));this.SL.A2(A.aaL(A.fl.Bh));this.N2.S(A.aaL(A.fl.Ak));this.N2.A2(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apm._Done();this.Background._Done();this.Y._Done();this.Sn._Done();
this.GM._Done();this.PM._Done();this.OJ._Done();this.Pq._Done();this.C6._Done();
this.EV._Done();this.SL._Done();this.N2._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apm._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sn.
_ReInit();this.GM._ReInit();this.PM._ReInit();this.OJ._ReInit();this.Pq._ReInit(
);this.C6._ReInit();this.EV._ReInit();this.SL._ReInit();this.N2._ReInit();this.CountryToString.
_ReInit();this.Sn.R(A.aaR(A.acf.GM)+A.aaR(A.acf.Colon));this.PM.R(A.aaR(A.acf.A_I
)+A.aaR(A.acf.Colon));this.Pq.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.SL.R(A.
aaR(A.acf.N2)+A.aaR(A.acf.Colon));this.Sn.S(A.aaL(A.fl.Ak));this.Sn.A2(A.aaL(A.fl.
Bh));this.GM.S(A.aaL(A.fl.Ak));this.GM.A2(A.aaL(A.fl.Bh));this.PM.S(A.aaL(A.fl.Ak
));this.PM.A2(A.aaL(A.fl.Bh));this.OJ.S(A.aaL(A.fl.Ak));this.OJ.A2(A.aaL(A.fl.Bh
));this.Pq.S(A.aaL(A.fl.Ak));this.Pq.A2(A.aaL(A.fl.Bh));this.C6.S(A.aaL(A.fl.Ak)
);this.C6.A2(A.aaL(A.fl.Bh));this.EV.S(A.aaL(A.fl.Ak));this.EV.A2(A.aaL(A.fl.Bh)
);this.SL.S(A.aaL(A.fl.Ak));this.SL.A2(A.aaL(A.fl.Bh));this.N2.S(A.aaL(A.fl.Ak));
this.N2.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QV={D2:null,A_W:A.jV,Ai:function(Ae){C.Fm.Ai.call(
this,Ae);if(this.Mp.Fo())this.D2.CT(A.jb.AV);else this.D2.CT(this.Background.AQ);
this.D2.Zo(this.G9.AQ);},Zt:function(E){if(this.A_W===E)return;this.A_W=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fm._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QV;this.Background.H(AXd);this.
Mp.H(W3);this.OC.H(AHR);this.Q1.H(AHR);this.D2.H(AXe);this.D2.Z(false);this.J(this.
D2,0);this.G9.S(A.aaL(A.fl.Af));this.G9.A2(A.aaL(A.fl.Ak));this.G9.Cu(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fm;this.D2._Done();C.Fm._Done.call(this
);},_ReInit:function(){C.Fm._ReInit.call(this);this.D2._ReInit();this.G9.S(A.aaL(
A.fl.Af));this.G9.A2(A.aaL(A.fl.Ak));this.G9.Cu(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B6:null,AeC:null,Ap:null,Text:null
,DK:A.jV,AmK:0,MZ:0,Jb:0,A5i:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BCd:function(G){this.Ap.H(this.Text.M);this.
AeC.H(this.Text.M);},Zo:function(E){if(this.AmK===E)return;this.AmK=E;this.AeC.L(
E);this.Text.L(E);},CT:function(E){if(this.MZ===E)return;this.MZ=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hm:function(E){
if(this.Jb===E)return;this.Jb=E;this.Text.Hm(E);},Bly:function(E){if(this.A5i===
E)return;this.A5i=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NP._Init.call(this.AeC={I:this},0);A.acg.NP._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AHS);
this.AeC.AZ(0x8);this.AeC.L(A.jb.Text);this.Ap.AZ(0x8);this.Ap.L(A.jb.CS);this.Text.
AZ(0xD);this.Text.H(AHS);this.Text.Hm(5);this.Text.I_(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeC,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeC.Ax(A.aaL(A.ach.APP));this.Ap.Ax(A.aaL(A.ach.APO));this.Text.Q5([this,this.BCd
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeC._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeC._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T7={DY:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALf(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkM();A._GetAutoObject(A.Device.Helper).Asn();},Ig:function(G){},AcS:function(
s){this.Ig(s);},A3e:function(G){A._GetAutoObject(C.A9).Fy();},Fj:function(G){var
B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},ALf:function(G){},BGl:function(s){this.ALf(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T7;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Dr(C.AqW);this.
DY.AZ(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CJ);this.Y.H(Fe);this.Y.JR(9);this.Ay.H(
It);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CE=[this,this.A3e
];this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fj];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVt={Wx:function(
G){this.Agt();this.I1(A.aaR(A.acf.AU3),[this,this.ATv],7);this.I1(A.aaR(A.acf.Asj
),[this,this.BlB],6);this.I1(A.aaR(A.acf.AF9),[this,this.ATh],3);this.I1(A.aaR(A.
acf.AnW),[this,this.AwQ],2);this.I1(A.aaR(A.acf.AdS),[this,this.AEM],1);this.I1(
A.aaR(A.acf.Aux),[this,this.AEG],0);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).NC(A.aaR(A.acf.Anc)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abp:function(){return C.AM7;},Abq:function(){return C.APx;
},Q8:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var ABr=A._NewObject(
A.Device.BoolFilterCriterion,0);ABr.Initialize(12,0,true,true);Be.CW(ABr);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HO:function(G){C.GZ.HO.call(this,G);if(this.Ake()===
false){this.N.Cs(A.aaL(A.ach.Asj));this.N.Cg=[this,this.A5V];this.N.FC(A.jV);}this.
N.OO(false);this.N.OP(false);},Agf:function(){A._GetAutoObject(C.A9).Cd(41);},_Init:
function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.AVt;var B;this.Dr(C.APt
);this.Dj(A.aaR(A.acf.A7J));this.AwL([B=A._GetAutoObject(A.Device.Device),B.A85,
B.Ba$]);},_ReInit:function(){C.GZ._ReInit.call(this);this.Dj(A.aaR(A.acf.A7J));}
,_className:"Application::WatchListScreen"};C.AMc={DE:function(G){var B;var JB=(
A.Core.BK.isPrototypeOf(G)?G:null);if(((JB.CO===4)||(JB.CO===5))===false){C.AxX.
DE.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState!==1)return;
var BcD=A._GetAutoObject(A.Device.Device).KW;var Tg;if(JB.CO===5)Tg=5;else Tg=4;
var AA8=A._GetAutoObject(A.acj.DU).Bdb(BcD,Tg);var Gt=(((BcD+((AA8/2)|0))/AA8)|0
)*AA8;if(JB.CO===4)Gt+=AA8;else if(JB.CO===5)Gt-=AA8;if(Gt>999900)Gt=999900;if(Gt<
100)Gt=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(Gt);},AsB:function(
G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.pe([B=this.O1,B.
CE],this);else A._GetAutoObject(C.A9).Fy();},WM:function(G){if(A._GetAutoObject(
A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device).AsD();A._GetAutoObject(
A.Device.Device).UpdateMeasureState(3);if(this.A_$()===false){this.H7.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KW);this.H7.Ch(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A9).Fy();}}else if(A._GetAutoObject(A.Device.Device).MeasureState===
3){this.H7.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KW);this.H7.Ch(A._GetAutoObject(
A.Device.Device).Bt);A._GetAutoObject(C.A9).Fy();}},AkT:function(G){var B;if(A._GetAutoObject(
A.Device.Device).MeasureState===3)A.pe([B=this.O1,B.Cl],this);},Bda:function(){var
ALu=A._GetAutoObject(A.Device.Helper).W.AhR(1);if(ALu>=100000)ALu=(Math.round(ALu
/1000)|0)*1000;return ALu;},_Init:function(aArg){C.AxX._Init.call(this,aArg);this.
__proto__=C.AMc;},_className:"Application::AnimalActionWeighingScreen"};C.AVe={V_:
null,YI:null,Rd:null,AeN:null,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.
BU._Init.call(this.V_={I:this},0);C.BU._Init.call(this.YI={I:this},0);C.Rd._Init.
call(this.Rd={I:this},0);C.AeN._Init.call(this.AeN={I:this},0);this.__proto__=C.
AVe;var B;this.I$(A.aaR(A.acf.AG2));this.V_.H(AhZ);this.V_.Aj(true);this.V_.T(A.
aaR(A.acf.A$y));this.V_.Bi(true);this.V_.Bx(0);this.YI.H(UY);this.YI.Aj(true);this.
YI.T(A.aaR(A.acf.A$x));this.YI.Bi(false);this.J(this.V_,0);this.J(this.YI,0);this.
V_.At([B=this.Rd,B.B_,B.B$]);this.V_.CK(this.Rd);this.YI.At([B=this.AeN,B.B_,B.B$
]);this.YI.CK(this.AeN);},_Done:function(){this.__proto__=C.Ce;this.V_._Done();this.
YI._Done();this.Rd._Done();this.AeN._Done();C.Ce._Done.call(this);},_ReInit:function(
){C.Ce._ReInit.call(this);this.V_._ReInit();this.YI._ReInit();this.Rd._ReInit();
this.AeN._ReInit();this.I$(A.aaR(A.acf.AG2));this.V_.T(A.aaR(A.acf.A$y));this.YI.
T(A.aaR(A.acf.A$x));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.
V_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeN={MassUnitToString:null
,Du:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BR(aIndex);},DZ:function(A_){return A_;},H3:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).AwM(E);}
,Init:function(aArg){var B;A.zX([this,this.BdP],[B=A._GetAutoObject(A.Device.Device
),B.ASn,B.AZ0],0);A.pe([this,this.BdP],this);},BdP:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeN;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.AxX={H7:null,Ajt:null,MassUnit:null,
KW:null,Vy:null,AnI:null,AcC:null,ZW:null,O1:null,Yy:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).Af0());A.zX([this,this.AKu],[B=A._GetAutoObject(
A.Device.Device),B.AEw,B.AIL],0);A.zX([this,this.BA1],[B=A._GetAutoObject(A.Device.
Device),B.AEC,B.AIP],0);A.zX([this,this.BA2],[B=this.O1,B.Ars,B.Jx],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxQ();this.AcE();},IZ:function(G){this.WM(this);}
,CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsD();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lg())A._GetAutoObject(
A.Device.Device).A5(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),
0,null);this.H7.Gp();this.H7.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGI();else{var BCs=this.Bda();this.ZW.Z(true);this.AcC.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BCs);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsD();else A._GetAutoObject(A.Device.Device).AhK(
);},AxQ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bgz();break;case 3:{this.Bgz();this.ZW.Z(false);this.AcC.Z(false
);if(this.A_$()){this.Vy.Z(false);this.KW.H(A.abO(this.KW.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O1.Ar(true);this.O1.Z(true);this.Bb(this.O1);}}break;
case 4:this.KW.R(A.aaR(A.acu.Akh));break;default:A.ab5("%s%e",AHT,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcE:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C1(A.aaL(A.ach.Aex));this.N.Cs(null);
this.Yy.Z(false);this.N.C2(A.aaL(A.ach.AmY));this.N.CV(A.jV);}break;case 3:{if(this.
O1.AY<=1){this.N.C1(null);this.N.Cs(null);this.Yy.Z(false);this.N.C2(null);}else{
this.N.C1(A.aaL(A.ach.AmW));this.N.Cs(A.aaL(A.ach.Aey));this.Yy.Z(true);this.N.C2(
null);}this.N.CV(A.aaR(A.acf.Ok));}break;case 4:{this.N.C2(A.aaL(A.ach.AvH));this.
N.Cl=[this,this.Blp];this.N.Cs(null);this.Yy.Z(false);this.N.CV(A.jV);}break;default:;
}},AsB:function(G){},Bwk:function(s){this.AsB(s);},WM:function(G){},A0g:function(
s){this.WM(s);},Blp:function(G){this.CC(this);},BA1:function(G){this.Am();},AKu:
function(G){this.Am();},A_$:function(){var Auo=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Auo>0)&&!A._GetAutoObject(A.Device.Helper).Bpz(Auo
,this.H7.Timestamp);},AkT:function(G){},A0f:function(s){this.AkT(s);},BA2:function(
G){this.Am();},Bgz:function(){this.KW.R(A._GetAutoObject(A.Device.Converter).Ak7(
A._GetAutoObject(A.Device.Device).KW));},Bda:function(){return A._GetAutoObject(
A.Device.Helper).W.AhR(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AK._Init.call(this.Ajt={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KW={I:this},0);A.acg.Text._Init.call(this.Vy={I:this
},0);C.AxP._Init.call(this.AnI={I:this},0);A.acg.Aen._Init.call(this.AcC={I:this
},0);A.acg.Aen._Init.call(this.ZW={I:this},0);C.AVy._Init.call(this.O1={I:this},
0);A.acg.Ap._Init.call(this.Yy={I:this},0);this.__proto__=C.AxX;this.Background.
L(A.jb.CJ);this.N.Z(true);this.Dr(C.IJ);this.Ajt.AZ(0x3F);this.Ajt.H(Ayk);this.Ajt.
L(A.jb.CJ);this.MassUnit.H(AXf);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
Az4));this.MassUnit.L(A.jb.Text);this.KW.H(AXg);this.KW.A6(0x14);this.KW.R(A.aaR(
A.acu.Akh));this.KW.L(A.jb.Text);this.Vy.H(AXh);this.Vy.R(A.aaR(A.acf.A$K));this.
Vy.L(A.jb.Text);this.Vy.Z(true);this.AnI.H(AXi);this.AcC.H(AHU);this.AcC.L(A.jb.
Ad_);this.AcC.Z(false);this.ZW.H(AXj);this.ZW.L(A.jb.Ad_);this.ZW.Bmd(true);this.
ZW.Z(false);this.O1.AZ(0x3F);this.O1.H(Ayk);this.O1.Ar(false);this.O1.Z(false);this.
Yy.H(AXk);this.Yy.L(A.jb.Bm);this.J(this.Ajt,0);this.J(this.MassUnit,0);this.J(this.
KW,0);this.J(this.Vy,0);this.J(this.AcC,0);this.J(this.ZW,0);this.J(this.O1,0);this.
J(this.Yy,0);this.N.CE=[this,this.Bwk];this.N.Cg=[this,this.A0f];this.N.Cl=[this
,this.A0g];this.MassUnit.S(A.aaL(A.fl.EK));this.KW.S(A.aaL(A.fl.Aeq));this.Vy.S(
A.aaL(A.fl.EK));this.AcC.Zs(this.AnI);this.ZW.Zs(this.AnI);this.H7=A._NewObject(
A.Device.Rating,0);this.O1.LY(A._GetAutoObject(A.Device.Helper).W);this.O1.AkA(this.
H7);this.Yy.Ax(A.aaL(A.ach.AQE));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajt._Done();this.MassUnit._Done();this.KW._Done();this.Vy._Done();this.
AnI._Done();this.AcC._Done();this.ZW._Done();this.O1._Done();this.Yy._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajt._ReInit();
this.MassUnit._ReInit();this.KW._ReInit();this.Vy._ReInit();this.AnI._ReInit();this.
AcC._ReInit();this.ZW._ReInit();this.O1._ReInit();this.Yy._ReInit();this.MassUnit.
R(A.aaR(A.acf.Az4));this.KW.R(A.aaR(A.acu.Akh));this.Vy.R(A.aaR(A.acf.A$K));this.
MassUnit.S(A.aaL(A.fl.EK));this.KW.S(A.aaL(A.fl.Aeq));this.Vy.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H7)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yy)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVC={FI:null
,OK:null,M_:null,C9:null,LV:null,T4:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FI,B.B_,B.B$],0);A.pe([this,this.GH],this);},CC:function(G){C.Ce.CC.
call(this,G);A.pe([this,this.GH],this);},Bj$:function(G){var F;this.LV.BS.L(this.
LV.V.AQ);if(!!this.LV.Q)this.LV.BS.R((A._GetAutoObject(A.Device.Converter).S8((F=
this.LV.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DU).Aas());},GH:function(
G){var AJp=true;if(this.FI.Q===1)AJp=false;this.C9.Aj(AJp);this.C9.Ar(AJp);this.
C9.Z(AJp);A._GetAutoObject(A.Device.Helper).ANo(this.Y);},_Init:function(aArg){C.
Ce._Init.call(this,aArg);C.AMy._Init.call(this.FI={I:this},0);C.AHb._Init.call(this.
OK={I:this},0);C.AUv._Init.call(this.M_={I:this},0);C.AkR._Init.call(this.C9={I:
this},0);C.Ir._Init.call(this.LV={I:this},0);C.BU._Init.call(this.T4={I:this},0);
this.__proto__=C.AVC;var B;this.I$(A.aaR(A.acf.Settings));this.Hi.R(A.aaR(A.acf.
AsQ));this.FI.At(A._GetAutoObject(A.Device.Device).AnimalType);this.OK.At(A._GetAutoObject(
A.Device.Device).OK);this.M_.H(AXl);this.M_.Aj(true);this.C9.H(As4);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KI));this.C9.Bi(true);this.C9.F$(1000);this.C9.EU(99000);
this.LV.H(As5);this.LV.Aj(true);this.LV.T(A.aaR(A.acf.A42));this.LV.F$(50);this.
LV.EU(2000);this.LV.AS0(A._GetAutoObject(A.acj.DU).AzL());this.T4.H(AcO);this.T4.
Aj(true);this.T4.T(A.aaR(A.acf.A7r));this.T4.F$(-1);this.T4.EU(1);this.JX(this.Y
,-1);this.JX(this.Ay,-1);this.J(this.M_,0);this.J(this.C9,0);this.J(this.LV,0);this.
J(this.T4,0);this.M_.AeU([B=this.M_,B.FU]);this.M_.Gq([this,this.D_,this.GQ]);this.
M_.Akw(A.aaL(A.ach.Edit));this.M_.LX([B=this.M_,B.AyO]);this.M_.L0(A.aaL(A.ach.AnM
));this.M_.At([B=this.FI,B.B_,B.B$]);this.M_.CK(this.FI);this.M_.A92([B=this.FI,
B.ASG,B.A0d]);this.M_.A91([B=this.FI,B.ASF,B.A0c]);this.C9.Gq([this,this.D_,this.
GQ]);this.C9.LX([B=this.M_,B.AyO]);this.C9.L0(A.aaL(A.ach.AnM));this.C9.At([B=this.
FI,B.A8f,B.ASM]);this.LV.Gq([this,this.D_,this.GQ]);this.LV.LX([B=this.M_,B.AyO]
);this.LV.L0(A.aaL(A.ach.AnM));this.LV.At([B=this.FI,B.A8e,B.ASK]);this.LV.A_e([
this,this.Bj$]);this.T4.Gq([this,this.D_,this.GQ]);this.T4.At([B=this.OK,B.B_,B.
B$]);this.T4.CK(this.OK);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;
this.FI._Done();this.OK._Done();this.M_._Done();this.C9._Done();this.LV._Done();
this.T4._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this
);this.FI._ReInit();this.OK._ReInit();this.M_._ReInit();this.C9._ReInit();this.LV.
_ReInit();this.T4._ReInit();this.I$(A.aaR(A.acf.Settings));this.Hi.R(A.aaR(A.acf.
AsQ));this.C9.T(A.aaR(A.acf.KI));this.LV.T(A.aaR(A.acf.A42));this.T4.T(A.aaR(A.acf.
A7r));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.FI)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUv={YU:null,Init:
function(aArg){var B;A.zX([this,this.AfD],[B=A._GetAutoObject(A.Device.Device),B.
ASn,B.AZ0],0);A.pe([this,this.AfD],this);},A3I:function(G){A._GetAutoObject(A.Device.
Device).A5(37,true,A.jV,0,[this,this.Bbo]);},A1v:function(G){var F;if(this.A8===
1){var BO=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).AzL();if(this.D7<this.
AlN)this.D7=this.AlN;if(this.DW!==BO){if(!!this.JV)(F=this.JV,F[2].call(F[0],this.
D7));A.abo(this.JV,0);}}if(this.A8===2){var BO=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).AzL();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JU
)(F=this.JU,F[2].call(F[0],this.DW));A.abo(this.JU,0);}}this.DJ(this);this.Am();
},A17:function(G){var F;if(this.A8===1){var BO=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).AzL();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.JV
)(F=this.JV,F[2].call(F[0],this.D7));A.abo(this.JV,0);}}if(this.A8===2){var BO=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).AzL();if(this.DW>this.AlI)this.DW=
this.AlI;if(this.DW!==BO){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.DW));A.abo(
this.JU,0);}}this.DJ(this);this.Am();},GH:function(G){this.PK.R(AHV+A._GetAutoObject(
A.Device.Converter).S8(this.D7,2,true));this.PJ.R(AHV+A._GetAutoObject(A.Device.
Converter).S8(this.DW,2,true));this.Sx.R(A._GetAutoObject(A.acj.DU).Aas());this.
YU.R(this.Sx.String);},A3h:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).Asp(this
);},A10:function(Atm){if(Atm===1)return this.PK;else if(Atm===2)return this.PJ;else
return null;},_Init:function(aArg){C.Acm._Init.call(this,aArg);A.acg.Text._Init.
call(this.YU={I:this},0);this.__proto__=C.AUv;this.T(A.aaR(A.acf.ACj));this.AlI=
2000;this.AlN=20;this.Background.H(KY);this.V.H(BD);this.V.R(A.aaR(A.acf.ACj)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkJ.H(AXm);this.AkK.H(AXn);this.Q6.H(AXo);
this.QF.H(AXp);this.PJ.H(AXq);this.PK.H(AXr);this.Sx.H(AXs);this.YU.H(AXt);this.
YU.I_(false);this.YU.A6(0x12);this.YU.L(0xFF000000);this.JX(this.H4,-8);this.J(this.
YU,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YU.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acm;this.YU._Done();C.Acm.
_Done.call(this);},_ReInit:function(){C.Acm._ReInit.call(this);this.YU._ReInit();
this.T(A.aaR(A.acf.ACj));this.V.R(A.aaR(A.acf.ACj)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YU.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acm._Mark.call(this,D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABw={M:O3,A63:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A63();},_Init:function(
aArg){A.Graphics.Hy._Init.call(this,aArg);this.__proto__=C.ABw;},_className:"Application::AbstractPath"
};C.Aqb={DP:null,DY:null,Ri:null,AdO:null,P2:null,AdN:null,Auw:1,A4y:0,Bck:false
,AzH:true,CP:function(){this.Bgv(this);},Init:function(aArg){var B;this.Bb(this.
AdO);A.zX([this,this.Bgv],[B=this.AdO,B.A8l,B.BaU],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdN.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BhN(this.Auw+this.A4y)));if(this.Auw===1)this.P2.R(A.aaR(A.acf.ANc));else this.
P2.R(A.aaR(A.acf.Bhn));},CC:function(G){if(this.AzH)this.AzH=false;else if(this.
DP.Bcu()===false)A.pe([this,this.A2Q],this);else if(this.DP.AzW())this.DP.Ac6();
A.zV([this,this.Af8],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.Af8],A._GetAutoObject(A.Device.Device).An,0);},A2Q:function(G){this.
Bck=true;A._GetAutoObject(C.A9).Fy();},Bgv:function(G){var B;var BcW=(C.Wj.isPrototypeOf(
B=this.AdO.AV)?B:null);if(!!BcW){var Ay4=A._NewObject(A.Device.ActionToString,0);
this.Ri.R(Ay4.Lu(BcW.Action));}},Ig:function(G){var Cx=(C.Wj.isPrototypeOf(G)?G:
null);if(!Cx)return;this.DP.Qm(Cx.Action);this.Bls(this.Auw+1);},BAt:function(G){
if(A._GetAutoObject(C.Pk).NV(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bls:function(E){
if(this.Auw===E)return;this.Auw=E;this.Am();},Af8:function(G){if((this.Bck===false
)&&(this.DP.Bcu()===false))A.pe([this,this.A2Q],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);C.CH._Init.call(this.
Ri={I:this},0);C.ARs._Init.call(this.AdO={I:this},0);C.CH._Init.call(this.P2={I:
this},0);A.acg.Text._Init.call(this.AdN={I:this},0);this.__proto__=C.Aqb;this.Background.
L(A.jb.CS);this.N.H(Xb);this.N.Z(true);this.Dr(C.IJ);this.DY.AZ(0x3F);this.DY.H(
Fe);this.DY.L(A.jb.CJ);this.Ri.H(AHW);this.Ri.L(A.jb.Text);this.AdO.H(AXu);this.
P2.H(Ayl);this.P2.R(A.aaR(A.acf.ANc));this.P2.L(A.jb.Text);this.AdN.H(AHX);this.
AdN.R(AXv);this.AdN.L(A.jb.Text);this.J(this.DY,0);this.J(this.Ri,0);this.J(this.
AdO,0);this.J(this.P2,0);this.J(this.AdN,0);this.N.CE=[this,this.A2Q];this.N.Cg=[
this,this.BAt];this.N.C1(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AeA));this.Ri.S(
A.aaL(A.fl.EK));this.Ri.A2(A.aaL(A.fl.Af));this.Ri.Cu(A.aaL(A.fl.Ak));this.AdO.A3f=[
this,this.Ig];this.P2.S(A.aaL(A.fl.EK));this.P2.A2(A.aaL(A.fl.Af));this.P2.Cu(A.
aaL(A.fl.Ak));this.AdN.S(A.aaL(A.fl.H1));this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Ri._Done();this.
AdO._Done();this.P2._Done();this.AdN._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Ri._ReInit();this.AdO._ReInit();
this.P2._ReInit();this.AdN._ReInit();this.P2.R(A.aaR(A.acf.ANc));this.Ri.S(A.aaL(
A.fl.EK));this.Ri.A2(A.aaL(A.fl.Af));this.Ri.Cu(A.aaL(A.fl.Ak));this.P2.S(A.aaL(
A.fl.EK));this.P2.A2(A.aaL(A.fl.Af));this.P2.Cu(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ri)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P2
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdN)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARs={Ia:null,A3f:null,Cq:null,Y:null,Ay:
null,A3W:0,Init:function(aArg){A.zV([this,this.ABm],this.Ia,0);A.zV([this,this.Bgs
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Aut],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABm],this);},Bb:function(E){var A2M=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A2M)A.abo([this,this.A8l,this.BaU],0);},DE:
function(G){var B;var Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;break;case
7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QH(X,Fh,0x415);
if((Fh===5)&&!X){var AK7=this.AV;while(!X){AK7=this.QH(AK7,2,0x415);if(!!AK7)X=this.
QH(AK7,Fh,0x415);else break;}}if(!!X)this.Bb(X);var GX=(C.Wj.isPrototypeOf(B=this.
AV)?B:null);if(!!GX)this.A3W=(C.Wj.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A3W=0;A.pe([this,this.MO],this);},A1o:function(ED){var EP=A._GetAutoObject(C.DP).
BcC(ED,this.A3f);this.J(EP,0);},AoZ:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdJ=X;X=X.Ah;if(((AdJ.U&0x400)===0x400))this.HN(AdJ);
}},ABm:function(G){this.AoZ();var O;var CB=A._GetAutoObject(C.Pk).NQ();for(O=0;O<
CB;O=O+1){var Aaj=A._GetAutoObject(C.Pk).OD(O);this.A1o(Aaj);}A.pe([this,this.Bgs
],this);A.pe([this,this.BpX],this);A.pe([this,this.Aut],this);},BpX:function(G){
var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400
)){var Aa=(C.Wj.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},Aut:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wj.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATq(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATq(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATq(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((
B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Bgs:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wj.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pk).NV(Aa.Action)&&A._GetAutoObject(C.
DP).A4x(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A3W===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MO],this);},MO:function(G){var B;this.Y.Vw(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARs;this.H(AXw);this.Cq.Filter=147;this.Y.AZ(0xB);this.Y.H(AXx);this.Y.JR(9);this.
Ay.AZ(0xA);this.Ay.H(AXy);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.
DE];this.Cq.D1=[this,this.DE];this.Y.El=[this,this.Fj];this.Ia=A._GetAutoObject(
C.Pk);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3f)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fq={Ej:null,AK:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.AK={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fq;this.N.Ar(false);this.Ej.H(BD);this.Ej.Ar(false
);this.AK.H(Fe);this.AK.L(A.jb.Ad_);this.Text.H(BD);this.Text.R(AXz);this.Text.L(
0xFF000000);this.Ap.H(O3);this.Ap.L(A.jb.Text);this.J(this.Ej,0);this.J(this.AK,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cs(A.aaL(A.ach.AeA));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.AC8));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ej._Done();this.AK._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ej._ReInit();this.AK._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.AaQ={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},IZ:function(G){},Ai:function(Ae){C.BU.
Ai.call(this,Ae);var FQ=A.jb.Ad_;var GW=A.jb.CS;if(this.Hk){FQ=A.jb.Text;GW=A.jb.
Bm;}if(!this.LF){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else if(this.Qs){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KF){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}this.Hw.L(A.
jb.CS);this.H4.L(A.jb.CS);},Hl:function(G){var B;var Ge=this.Dz.G5;var Cz=(C.CH.
isPrototypeOf(B=this.Dz.Ci)?B:null);if(!Cz)return;Cz.S(A.aaL(A.fl.Ak));Cz.A2(A.aaL(
A.fl.Bh));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gj(Ge));else Cz.R(W$);Cz.H(A.
abK(Cz.M,[this.Dz.Wa,(B=this.Dz.M)[3]-B[1]]));},_Init:function(aArg){C.BU._Init.
call(this,aArg);this.__proto__=C.AaQ;this.Dz.AFc(170);this.Dz.N0(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajh={C8:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hm(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FQ=A.jb.Ad_;var GW=A.jb.CS;if(this.Hk){FQ=A.jb.Text;
GW=A.jb.Bm;}if(!this.LF){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else if(this.
Qs){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KF){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Ajh;this.C8.H(AXA);this.C8.Cv(1);this.J(this.C8,0);this.C8.Ax(A.aaL(A.ach.Ajq)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C8._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALV={Y:null,RM:null,Ts:null
,Tt:null,Tu:null,AdM:null,XJ:null,Vq:null,Vr:null,AaP:null,Ay:null,Init:function(
aArg){this.Bb(this.RM);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this);},IZ:
function(G){this.BfM(this);},Lm:function(){if(!this.BP){this.BP=A._NewObject(C.N
,0);this.BP.CE=[this,this.BfM];this.BP.Cg=null;this.BP.Cl=null;this.BP.CV(A.jV);
this.BP.Cs(null);this.BP.C1(A.aaL(A.ach.Yu));}return this.BP;},AA1:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XJ.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XJ.Q))A._GetAutoObject(C.AutoActions).J(this.XJ.Q);if(!!this.Vq.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vq.Q))A._GetAutoObject(C.AutoActions
).J(this.Vq.Q);if(!!this.Vr.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vr.
Q))A._GetAutoObject(C.AutoActions).J(this.Vr.Q);if(!!this.AaP.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaP.Q))A._GetAutoObject(C.AutoActions).J(this.AaP.Q
);A._GetAutoObject(C.AutoActions).Ch();},BfM:function(G){if(this.BzB()===true){this.
AA1();this.AaD(this);}else A._GetAutoObject(A.Device.Device).A5(27,true,A.jV,0,null
);},BzB:function(){return(!!this.XJ.C7(this.XJ.Q)||!!this.Vq.C7(this.Vq.Q))||!!this.
Vr.C7(this.Vr.Q);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.
Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(G){var B;this.
Y.Vw(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true
,null,null);},BAH:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XJ.Att(this);this.Vq.Att(this);this.Vr.Att(this);this.AaP.Att(this);}
,_Init:function(aArg){C.Fq._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.AaQ._Init.call(this.RM={I:this},0);C.AaQ._Init.call(this.Ts={I:this},0);C.
AaQ._Init.call(this.Tt={I:this},0);C.AaQ._Init.call(this.Tu={I:this},0);C.Au1._Init.
call(this.AdM={I:this},0);C.AutoAction._Init.call(this.XJ={I:this},0);C.AutoAction.
_Init.call(this.Vq={I:this},0);C.AutoAction._Init.call(this.Vr={I:this},0);C.AutoAction.
_Init.call(this.AaP={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALV;var B;this.H(Rn);this.Text.R(A.aaR(A.acf.Tv));this.Y.H(L1);this.Y.JR(1);this.
RM.H(AhZ);this.RM.Ar(true);this.RM.Aj(true);this.RM.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajg),P$,AHY));this.Ts.H(UY);this.Ts.Ar(true);this.Ts.Aj(true
);this.Ts.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajg),P$,AHZ));this.
Tt.H(Aac);this.Tt.Ar(true);this.Tt.Aj(true);this.Tt.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajg),P$,AH0));this.Tu.H(Ald);this.Tu.Ar(true);this.Tu.Aj(
true);this.Tu.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajg),P$,AH1));this.
AdM.H(Aym);this.AdM.Aj(true);this.AdM.T(A.aaR(A.acf.A_T));this.Vq.Index=1;this.Vr.
Index=2;this.AaP.Index=3;this.Ay.H(It);this.J(this.Y,0);this.J(this.RM,0);this.J(
this.Ts,0);this.J(this.Tt,0);this.J(this.Tu,0);this.J(this.AdM,0);this.J(this.Ay
,0);this.Y.El=[this,this.Fj];this.RM.Zp(A.aaL(A.fl.H1));this.RM.Zq(A.aaL(A.fl.H1
));this.RM.At([B=this.XJ,B.B_,B.B$]);this.RM.CK(this.XJ);this.Ts.Zp(A.aaL(A.fl.H1
));this.Ts.Zq(A.aaL(A.fl.H1));this.Ts.At([B=this.Vq,B.B_,B.B$]);this.Ts.CK(this.
Vq);this.Tt.Zp(A.aaL(A.fl.H1));this.Tt.Zq(A.aaL(A.fl.H1));this.Tt.At([B=this.Vr,
B.B_,B.B$]);this.Tt.CK(this.Vr);this.Tu.Zp(A.aaL(A.fl.H1));this.Tu.Zq(A.aaL(A.fl.
H1));this.Tu.At([B=this.AaP,B.B_,B.B$]);this.Tu.CK(this.AaP);this.AdM.AR=[this,this.
BAH];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Y._Done();this.
RM._Done();this.Ts._Done();this.Tt._Done();this.Tu._Done();this.AdM._Done();this.
XJ._Done();this.Vq._Done();this.Vr._Done();this.AaP._Done();this.Ay._Done();C.Fq.
_Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.Y._ReInit();this.
RM._ReInit();this.Ts._ReInit();this.Tt._ReInit();this.Tu._ReInit();this.AdM._ReInit(
);this.XJ._ReInit();this.Vq._ReInit();this.Vr._ReInit();this.AaP._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.Tv));this.RM.T(A._GetAutoObject(A.Device.Helper
).Nk(A.aaR(A.acf.Ajg),P$,AHY));this.Ts.T(A._GetAutoObject(A.Device.Helper).Nk(A.
aaR(A.acf.Ajg),P$,AHZ));this.Tt.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.
Ajg),P$,AH0));this.Tu.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajg),P$
,AH1));this.AdM.T(A.aaR(A.acf.A_T));},_Mark:function(D){var B;C.Fq._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ts)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Tu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={Cb:
A.abi(16,0,null),Du:function(){return 16;},C7:function(aIndex){if(aIndex>=16)return-
1;return this.Cb.Get(aIndex);},DZ:function(A_){var O=0;while(O<16){if(this.Cb.Get(
O)===A_)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(O<16){
if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.Cb=[]).__proto__=C.Cm.Cb;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={Ia:null,Ac6:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.Att],this.Ac6,0);A.pe([this,this.
Att],this);},Du:function(){return this.Ia.NQ();},C7:function(aIndex){if(aIndex>=
this.Du())return-1;return this.Ia.OD(aIndex);},Gj:function(aIndex){return this.ActionToString.
BR(this.C7(aIndex));},DZ:function(A_){var O=0;while(O<this.Du()){if(this.Ia.OD(O
)===A_)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(O<this.
Du()){if(this.Ia.OD(O)>max)max=this.Ia.OD(O);O=O+1;}return max;},Att:function(G){
this.Q=this.Ac6.OD(this.Index);A.abo([this,this.B_,this.B$],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ia=A._GetAutoObject(C.AuL);this.Ac6=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AL0={Atq:0,Init:function(aArg
){var B;A.zX([this,this.Bef],[B=A._GetAutoObject(A.Device.Device),B.A74,B.BaG],0
);A.zX([this,this.Bec],[B=A._GetAutoObject(A.Device.Device),B.ASa,B.AZV],0);A.pe([
this,this.Bef],this);A.pe([this,this.Bec],this);},Clear:function(){C.Vv.Clear.call(
this);this.Atq=0;},Ch:function(){A._GetAutoObject(A.Device.Device).Ary(this.Atq);
A._GetAutoObject(A.Device.Device).Arz(this.toString());},Bef:function(G){this.Atq=
A._GetAutoObject(A.Device.Device).Pk;A.we(this,0);},Bec:function(G){this.E3(A._GetAutoObject(
A.Device.Device).Auy);A.we(this,0);},NV:function(ED){if((this.Atq&(((B=ED)<0)?B+
0x100000000:B))===(((B=ED)<0)?B+0x100000000:B))return true;return false;},AUl:function(
ED){this.Atq=this.Atq|(((B=ED)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vv._Init.
call(this,aArg);this.__proto__=C.AL0;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pk={_Init:function(){C.AL0._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AL1={Vt:null,Ay:null,Y:null,JO:null,CP:function(
){this.AiI(this);},Init:function(aArg){A.zV([this,this.AiI],this.Vt,0);A.pe([this
,this.AiI],this);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this);},Lm:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.Ev];this.BP.Cg=[
this,this.A2Y];this.BP.Cl=[this,this.A3r];this.BP.C2(A.aaL(A.ach.Aq9));this.BP.Cs(
A.aaL(A.ach.Aq2));this.BP.C1(A.aaL(A.ach.Yu));}return this.BP;},Ev:function(G){if(
this.Byt()>0){this.AA1();this.AaD(this);}else A._GetAutoObject(A.Device.Device).
A5(28,true,A.jV,0,null);},AiI:function(G){this.AoZ();var O;for(O=0;O<this.Vt.NQ(
);O=O+1){var Aaj=A._GetAutoObject(C.Pk).OD(O);this.A03(Aaj);}this.J(this.JO,0);A.
aaS([this,this.MO],this);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-
B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(G
){var B;this.Y.Vw(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},A03:function(G$){var Ay4=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sf,0);Aa.T(Ay4.BR(G$));Aa.Aj(true);Aa.G5=G$;Aa.A9P(this.
Vt.NV(G$));this.J(Aa,0);this.ZB(Aa);},AoZ:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdJ=X;X=X.Ah;if(((AdJ.U&0x400)===0x400))this.HN(
AdJ);}},AA1:function(){var B;this.Vt.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JO)){var Aa=(C.Sf.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vt.J(Aa.G5);if(Aa.ASl())this.Vt.AUl(Aa.G5);}else A.ab5(
"%s",Ayn);}X=X.Ah;}this.Vt.Ch();},Byt:function(){var B;var A3X=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JO)){var
Aa=(C.Sf.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASl())A3X=A3X+1;}else A.ab5("%s"
,Ayn);}X=X.Ah;}return A3X;},A2Y:function(G){var B;var Aa=(C.Sf.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAh=(C.Sf.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAh){this.
Ahz(AAh,Aa);A.pe([this,this.MO],this);}}},A3r:function(G){var B;var Aa=(C.Sf.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAN=(C.Sf.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAN
){this.Ahz(Aa,AAN);A.pe([this,this.MO],this);}}},AqF:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiI],this);},_Init:function(
aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Au1._Init.call(this.JO={I:this},0);this.__proto__=C.AL1;
this.H(Rn);this.Text.R(A.aaR(A.acf.AD9));this.Ay.H(It);this.Y.H(L1);this.Y.JR(1);
this.JO.H(AH2);this.JO.Aj(true);this.JO.T(A.aaR(A.acf.AqF));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JO,0);this.Y.El=[this,this.Fj];this.JO.AR=[this,this.AqF
];this.Vt=A._GetAutoObject(C.Pk);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fq;this.Ay._Done();this.Y._Done();this.JO._Done();C.Fq._Done.call(this);},_ReInit:
function(){C.Fq._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JO._ReInit(
);this.Text.R(A.aaR(A.acf.AD9));this.JO.T(A.aaR(A.acf.AqF));this.CP();},_Mark:function(
D){var B;C.Fq._Mark.call(this,D);if((B=this.Vt)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sf={G5:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hm(10);},Bl:function(aSize){C.T$.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Ml.M[0]));},Ai:function(Ae){var B;C.T$.Ai.call(this,Ae);var He=((Ae&0x10
)===0x10);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FQ=A.jb.Ad_;var GW=A.jb.
Bm;if(this.Hk){FQ=A.jb.Bm;GW=A.jb.Text;}if(!He){this.Background.L(FQ);this.V.L(A.
jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);
}this.LF=He;this.KF=Fu;this.Qs=GE;},IZ:function(G){this.A3p(this);},A3p:function(
G){this.AEU(!this.Amx);},A9P:function(E){this.AEU(E);},ASl:function(){return this.
Amx;},_Init:function(aArg){C.T$._Init.call(this,aArg);this.__proto__=C.Sf;this.Ml.
H(AXB);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vv={CB:0,
Ia:A.abi(17,0,null),OD:function(Hz){return this.Ia.Get(Hz);},NQ:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ia.Set(O,0);this.CB=0;},J:function(
ED){if(this.CB>=17)A.ab5("%s",AH3);else{this.Ia.Set(this.CB,ED);this.CB=this.CB+
1;}},Ch:function(){},E3:function(AcU){var AJc=AcU.indexOf(String.fromCharCode(0x2C
),0);var A1p=A.jV;var O=0;this.CB=0;while(O<17)if(AcU===A.jV){this.Ia.Set(O,0);O++;
}else{if(AJc===-1){A1p=AcU;AcU=A.jV;}else{A1p=A.abV(AcU,AJc);AcU=A.ab1(AcU,0,AJc+
1);}var Aaj=A.abZ(A1p,0,10)|0;if(this.ADM(Aaj)){this.Ia.Set(this.CB,Aaj);this.CB=
this.CB+1;O++;}AJc=AcU.indexOf(String.fromCharCode(0x2C),0);}if(AcU!==A.jV)A.ab5(
"%s",AXC);},toString:function(){var A2D=(((B=this.Ia.Get(0))<0)?B+0x100000000:B).
toFixed();var O;for(O=1;O<this.CB;O=O+1)A2D=(A2D+AH4)+(((B=this.Ia.Get(O))<0)?B+
0x100000000:B).toFixed();return A2D;},Axr:function(Hz,ED){if(Hz>=this.CB){A.ab5(
"%s",((((AXD+Hz.toFixed())+AXE)+this.CB.toFixed())+AXF)+AXG);return;}this.Ia.Set(
Hz,ED);},Contains:function(ED){var O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===
ED)return true;return false;},ADM:function(ED){return true;},DZ:function(ED){var
O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===ED)return O;return-1;},_Init:function(
aArg){(this.Ia=[]).__proto__=C.Vv.Ia;this.__proto__=C.Vv;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ActionsList"};C.AMI={Init:function(aArg){var B;A.zX([this,this.Bep
],[B=A._GetAutoObject(A.Device.Device),B.A8d,B.BaO],0);A.pe([this,this.Bep],this
);},Ch:function(){A._GetAutoObject(A.Device.Device).Akr(this.toString());},ADM:function(
ED){switch(ED){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Bep:function(G){this.E3(A._GetAutoObject(A.Device.Device).
AutoActions);A.we(this,0);},_Init:function(aArg){C.Vv._Init.call(this,aArg);this.
__proto__=C.AMI;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AMI._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Wj={Vs:null,Kw:null,A62:A.jV,Action:0,A4z:
false,A_F:false,A$k:false,Bl:function(aSize){C.Fm.Bl.call(this,aSize);this.Q1.H(
this.Mp.M);this.OC.H(this.Q1.M);},Ai:function(Ae){C.Fm.Ai.call(this,Ae);if(!this.
LF){this.Kw.TX.L(A.jb.AmZ);this.Kw.QJ.Z(true);this.Kw.QJ.L(A.jb.AQQ);}else if(this.
Qs){this.Kw.TX.L(A.jb.Bm);this.Kw.QJ.Z(false);}else if(this.KF){this.Kw.TX.L(A.jb.
Bm);this.Kw.QJ.Z(false);}else{this.Kw.TX.L(A.jb.Text);this.Kw.QJ.Z(true);this.Kw.
QJ.L(A.jb.CS);}},Blr:function(E){if(this.Action===E)return;this.Action=E;},Bmy:function(
E){if(this.A62===E)return;this.A62=E;this.Vs.Text.R(E);},ATq:function(E){if(this.
A$k===E)return;this.A$k=E;this.Kw.Bnj(!this.Kw.AUK);},AFt:function(E){if(this.A_F===
E)return;this.A_F=E;this.Kw.Z(!this.Kw.Fo());},A9g:function(E){if(this.A4z===E)return;
this.A4z=E;this.Vs.Z(E);},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Vs._Init.
call(this.Vs={I:this},0);C.Kw._Init.call(this.Kw={I:this},0);this.__proto__=C.Wj;
this.H(AXH);this.Background.H(AXI);this.G9.Ar(false);this.G9.Z(false);this.Vs.H(
AXJ);this.Vs.Z(false);this.Kw.H(AXK);this.Kw.Z(false);this.J(this.Vs,0);this.J(this.
Kw,0);this.Mp.Ax(A.aaL(A.ach.ANd));},_Done:function(){this.__proto__=C.Fm;this.Vs.
_Done();this.Kw._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.
call(this);this.Vs._ReInit();this.Kw._ReInit();},_Mark:function(D){var B;C.Fm._Mark.
call(this,D);if((B=this.Vs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.Vs={AK:
null,Text:null,BT:null,Init:function(aArg){this.Text.H(this.M);this.BT.H(this.M);
this.AK.H(this.M);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK.
_Init.call(this.AK={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
BT._Init.call(this.BT={I:this},0);this.__proto__=C.Vs;this.AK.H(AXL);this.AK.L(A.
jb.Bi_);this.H(AXM);this.Text.H(AXN);this.Text.L(A.jb.Text);this.BT.H(AXO);this.
BT.Ng(1);this.BT.L(A.jb.Text);this.J(this.AK,0);this.J(this.Text,0);this.J(this.
BT,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AK._Done();this.Text._Done();this.BT._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AK._ReInit();this.Text._ReInit(
);this.BT._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Kw={QJ:null,TX:null,AUK:false,Bnj:function(E){if(this.
AUK===E)return;this.AUK=E;if(E){this.TX.Ax(A.aaL(A.ach.ACq));this.QJ.Ax(A.aaL(A.
ach.ACq));}else{this.TX.Ax(A.aaL(A.ach.Aqz));this.QJ.Ax(A.aaL(A.ach.Aqz));}},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.QJ={I:this
},0);A.acg.Ap._Init.call(this.TX={I:this},0);this.__proto__=C.Kw;this.H(Ayo);this.
QJ.H(Ayo);this.QJ.Cv(1);this.TX.H(Ayo);this.TX.Cv(0);this.J(this.QJ,0);this.J(this.
TX,0);this.QJ.Ax(A.aaL(A.ach.Aqz));this.TX.Ax(A.aaL(A.ach.Aqz));},_Done:function(
){this.__proto__=A.Core.P;this.QJ._Done();this.TX._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.QJ._ReInit();this.TX._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.QJ)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.ARQ={Gd:null,Ca:null,Dp:null,Dh:null,Kr:null,Zg:10,AqZ:0,AEi:0,AR4:0,Ay3:false
,LU:false,Bct:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).An.Lg())A._GetAutoObject(A.Device.Device).A5(41,true,A._GetAutoObject(A.Device.
Device).An.HI().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gp();A._GetAutoObject(
A.Device.Helper).Aqe(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAv],this.
C$.Q,0);A.zX([this,this.BAq],this.Dp.Q,0);A.zX([this,this.ABk],this.Dh.Q,0);A.zX([
this,this.ABk],this.Dh.HG.Q,0);A.zX([this,this.ABk],[this,this.ASs,this.AFr],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A8_,B.Bbe],0);A.zX([this
,this.BeZ],this.Ca.Q,0);A.pe([this,this.AAv],this);A.pe([this,this.GH],this);A.pe([
this,this.ABk],this);A.pe([this,this.BeZ],this);},CC:function(G){if(!this.Ay3){this.
Ay3=true;A.pe([this,this.AcR],this);}else C.HY.CC.call(this,G);},Agd:function(G){
this.AR4=this.Zg;this.BcB(this);},Ev:function(G){A._GetAutoObject(A.Device.Helper
).W.E5();A._GetAutoObject(C.A9).Fy();},Auf:function(){this.N.CV(A.jV);this.N.C2(
A.aaL(A.ach.ADw));this.N.Cl=[this,this.AyN];},AAq:function(G){A._GetAutoObject(C.
A9).Cd(55);},AFr:function(E){if(this.Zg===E)return;this.Zg=E;A.abo([this,this.ASs
,this.AFr],0);},BcB:function(G){var F;if(!this.Zg||(this.Bct===true)){A._GetAutoObject(
A.Device.Device).A5(24,false,CQ,0,null);if(this.AEi===1)A._GetAutoObject(A.Device.
Device).A5(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A5(23,
true,this.AEi.toFixed(),2000,null);this.Ev(this);return;}this.Gd.Gp();this.Gd.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gd.NZ(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gd.Q4(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gd.JS(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gd.Nd(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gd.PT(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gd.SI(A._GetAutoObject(A.Device.Helper).W.VisualId);var Aln=A._GetAutoObject(
A.Device.Helper).A1j(this.Gd,(F=this.Dh.HZ.Ht,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Aln)this.AiY();else{A._GetAutoObject(A.Device.Helper).AKc(
this.Gd,Aln,(F=this.Dh.HZ.Ht,F[1].call(F[0])),this.Zg-1,[this,this.ApD]);A._GetAutoObject(
A.Device.Device).A5(24,false,CQ,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am1())this.C9.Z(true);else this.C9.Z(false);if(this.LU){this.Dp.
Z(false);this.Ca.T(A.aaR(A.acf.ACx));this.Ca.AEW(A.aaL(A.ach.Afc));}else{this.Dp.
Z(true);this.Ca.T(A.aaR(A.acf.Ak2));this.Ca.AEW(null);}if((this.Y.BiI(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JG(this.Y.TN(this.AV,0x1));this.Am();
},ASX:function(E){if(this.AqZ===E)return;this.AqZ=E;A.abo([this,this.A8p,this.ASX
],0);},ABk:function(G){var F;var AJ0=(F=this.Dh.Q,F[1].call(F[0]));var Az_=-1;switch((
F=this.Dh.HZ.Ht,F[1].call(F[0]))){case 0:Az_=AJ0+((F=A._GetAutoObject(A.Device.Helper
).Bc9(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zg-1));break;case 1:Az_=(AJ0+this.
Zg)-1;break;case 3:case 2:case 5:case 4:switch(this.Dh.HG.AC.Q){case 0:Az_=(AJ0+
this.Zg)-1;break;case 1:Az_=(AJ0-this.Zg)+1;break;default:throw new Error(AXP+this.
Dh.HG.AC.Q.toFixed());}break;default:throw new Error(AXQ+this.Dh.HG.AC.Q.toFixed(
));}this.ASX(Az_);},BAq:function(G){A.pe([this,this.GH],this);A.pe([this,this.At0
],this);},AAv:function(G){A._GetAutoObject(A.Device.Helper).AVg(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LU);A.pe([this,this.ABk],this);},ApD:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.Apx();else switch((F=this.Dh.HZ.Ht,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JG(this.Dh);break;case 0:this.JG(this.Dp
);break;case 1:this.JG(this.Ca);break;default:throw new Error(Ayp+(F=this.Dh.HZ.
Ht,F[1].call(F[0])).toFixed());}break;case 25:this.JG(this.Ca);break;case 47:if(
As.PopupState===7)this.Apx();else{this.JG(this.Dh);this.JG(this.Ca);}break;case 43:{
this.JG(this.Dh);this.JG(this.Dp);}break;case 42:{this.JG(this.Dh);this.JG(this.
Ca);}break;case 41:break;default:A.ab5("%s%e",As6,As.Id);}},AiY:function(){this.
Gd.Ch(A._GetAutoObject(A.Device.Device).An);this.AEi=this.AEi+1;if(A._GetAutoObject(
A.Device.Helper).Am1()){if(A._GetAutoObject(A.Device.Device).Bt.Lg()){A._GetAutoObject(
A.Device.Device).A5(24,false,UZ,0,null);A._GetAutoObject(A.Device.Device).A5(50,
true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),0,null);}else{var L7=A.
_GetAutoObject(A.Device.Device).An.LS(0,this.Gd.Id);A._GetAutoObject(A.Device.Device
).SP(L7);var B0=A._NewObject(A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(this.Gd.
Id);B0.OnSetBodyWeight(this.KI);B0.OnSetTimestamp(this.Gd.DateOfBirth);B0.Ch(A._GetAutoObject(
A.Device.Device).Bt);}}this.Apx();},Apx:function(){var B;var F,CA;if(!!(F=this.Ca.
Q,F[1].call(F[0]))){(F=this.Ca.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LU)(
CA=this.Dp.Q,CA[2].call(CA[0],(F=this.Ca.Q,F[1].call(F[0]))));}if(!this.LU)(CA=this.
Dp.Q,CA[2].call(CA[0],A._GetAutoObject(A.Device.Helper).A$A(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dp.Q,F[1].call(
F[0])),this.Dp.AjK(),this.Dp.AjM())));var IW=null;switch((F=this.Dh.HZ.Ht,F[1].call(
F[0]))){case 3:IW=[B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyE];break;case 2:
IW=[B=A._GetAutoObject(A.Device.Device),B.Awb,B.AyF];break;case 4:case 5:IW=[B=A.
_GetAutoObject(A.Device.Device),B.Ano,B.Aox];break;default:;}if(!!IW){switch((F=
this.Dh.Km.VQ,F[1].call(F[0]))){case 1:IW[2].call(IW[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IW[2].call(IW[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dh.Q,F[2].call(F[0],IW[1].call(IW[0])));
}var XF=100-((this.Zg/this.AR4)*100);A._GetAutoObject(A.Device.Device).A5(24,true
,(((this.AR4.toFixed()+As7)+(XF|0).toFixed())+As7)+(F=this.Dh.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BAA]);this.AFr(this.Zg-1);A.aaS([this,this.BcB],null);},BAA:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.Bct=true;},ApE:function(G){var F;C.HY.ApE.call(this,G);var AoS=
0;switch((F=this.BY.Q,F[1].call(F[0]))){case 0:case 2:AoS=A._GetAutoObject(A.Device.
Device).AdQ;break;case 1:AoS=730;break;default:A.ab5("%s%e",Ala,(F=this.BY.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q4(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmD(AoS));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnT));switch(this.BY.AC.Q){case 0:{this.Kr.Ja(A.aaR(A.acf.AM_));this.
Kr.IP(A.aaR(A.acf.AM$));}break;case 1:{this.Kr.Ja(A.aaR(A.acf.Bhx));this.Kr.IP(A.
aaR(A.acf.Bhy));}break;case 2:{this.Kr.Ja(A.aaR(A.acf.Bjx));this.Kr.IP(A.aaR(A.acf.
Bjy));}break;default:throw new Error(Ala);}},Ae2:function(E){if(this.LU===E)return;
this.LU=E;A.abo([this,this.Awd,this.Ae2],0);},At0:function(G){var F,CA,Ta;this.Ae2(((
F=this.Ca.Q,F[1].call(F[0]))===(CA=this.Dp.Q,CA[1].call(CA[0])))&&!!(Ta=this.Ca.
Q,Ta[1].call(Ta[0])));A.pe([this,this.GH],this);},BeZ:function(G){A.pe([this,this.
At0],this);},ASs:function(){return this.Zg;},A8p:function(){return this.AqZ;},Awd:
function(){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.AvX.
_Init.call(this.Ca={I:this},0);C.Q$._Init.call(this.Dp={I:this},0);C.AGy._Init.call(
this.Dh={I:this},0);C.AUx._Init.call(this.Kr={I:this},0);this.__proto__=C.ARQ;var
B;this.Dr(C.AC_);this.Ca.H(Aom);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.Ak2));this.
Ca.ArH(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Ca.ArI(A.
aaR(A.acf.Akj));this.Dp.H(AXR);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uf));this.
Dp.ArX(false);this.Dh.H(AXS);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.A6P));this.Dh.
Bx(0);this.Kr.H(AXT);this.Kr.Aj(true);this.Kr.T(A.aaR(A.acf.A7V));this.Kr.F$(1);
this.Kr.EU(500);this.Kr.IP(A.aaR(A.acf.AM$));this.Kr.Ja(A.aaR(A.acf.AM_));this.Kr.
A9G(A.aaR(A.acf.AqZ)+A.aaR(A.acf.Colon));this.J(this.Ca,0);this.J(this.Dp,0);this.
J(this.Dh,0);this.J(this.Kr,0);this.Gd=A._NewObject(A.Device.Animal,0);this.Ca.AR=[
this,this.AcR];this.Ca.LX([this,this.AcR]);this.Ca.L0(A.aaL(A.ach.Afc));this.Ca.
At([B=A._GetAutoObject(A.Device.Helper).W,B.Arv,B.PT]);this.Ca.OM([B=A._GetAutoObject(
A.Device.Device),B.Uh,B.U1]);this.Ca.PQ([B=A._GetAutoObject(A.Device.Device),B.Ui
,B.U2]);this.Ca.Uj([B=A._GetAutoObject(A.Device.Device),B.Anl,B.Aow]);this.Ca.Ae2([
this,this.Awd,this.Ae2]);this.Dp.Gq([this,this.D_,this.GQ]);this.Dp.LX([this,this.
AcR]);this.Dp.L0(A.aaL(A.ach.Afc));this.Dp.Ul([B=this.Gender.Animal,B.Wv,B.JS]);
this.Dp.OM([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.Dp.PQ([B=A._GetAutoObject(
A.Device.Device),B.Ui,B.U2]);this.Dp.Uj([B=A._GetAutoObject(A.Device.Device),B.Anl
,B.Aow]);this.Dp.At([B=A._GetAutoObject(A.Device.Helper).W,B.Anp,B.Nd]);this.Dp.
Anr([B=this.AnimalType.Animal,B.PP,B.EB]);this.Dh.Gq([this,this.D_,this.GQ]);this.
Dh.LX([B=this.Dh,B.FU]);this.Dh.L0(A.aaL(A.ach.Edit));this.Dh.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Arw,B.SI]);this.Dh.A9h(A._GetAutoObject(A.Device.Helper).W);
this.Kr.At([this,this.ASs,this.AFr]);this.Kr.BlW([this,this.A8p,this.ASX]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HY;this.Ca._Done();this.Dp._Done(
);this.Dh._Done();this.Kr._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY.
_ReInit.call(this);this.Ca._ReInit();this.Dp._ReInit();this.Dh._ReInit();this.Kr.
_ReInit();this.Ca.T(A.aaR(A.acf.Ak2));this.Ca.ArH(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Ass));this.Ca.ArI(A.aaR(A.acf.Akj));this.Dp.T(A.aaR(A.acf.
Uf));this.Dh.T(A.aaR(A.acf.A6P));this.Kr.T(A.aaR(A.acf.A7V));this.Kr.IP(A.aaR(A.
acf.AM$));this.Kr.Ja(A.aaR(A.acf.AM_));this.Kr.A9G(A.aaR(A.acf.AqZ)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.Gd)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AT1={BU:null,RatingMode:null,Lm:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Cl=null;this.BP.Cg=null;this.BP.CE=[this,this.AaD];this.BP.CV(A.jV
);this.BP.Cs(null);this.BP.C1(A.aaL(A.ach.Yu));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BU._Init.call(this.BU={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AT1;var B;this.
H(Rn);this.BU.H(As4);this.BU.T(A.aaR(A.acf.A$s));this.J(this.BU,0);this.BU.At([B=
this.RatingMode,B.B_,B.B$]);this.BU.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BU._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BU._ReInit(
);this.RatingMode._ReInit();this.BU.T(A.aaR(A.acf.A$s));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bfz],[B=A._GetAutoObject(A.Device.Device),B.ASw,B.AZ6],0);A.pe([this,this.Bfz],this
);},Du:function(){return 2;},Gj:function(aIndex){return this.RatingModeToString.
BR(this.C7(aIndex));},At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.
Device).AwZ(E);},Bfz:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANs={WM:
function(G){C.Amp.WM.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqU()){
A._GetAutoObject(A.Device.Helper).W.Aky(false);A._GetAutoObject(A.Device.Helper).
W.Ch(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amp._Init.call(
this,aArg);this.__proto__=C.ANs;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hh={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hh;},_className:"Application::BaseItem"
};C.AVv={BU:null,WeightRecordingMode:null,Lm:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Cl=null;this.BP.Cg=null;this.BP.CE=[this,this.AaD];this.BP.CV(A.jV
);this.BP.Cs(null);this.BP.C1(A.aaL(A.ach.Yu));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BU._Init.call(this.BU={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVv;var B;this.H(Rn);this.BU.H(As4);this.BU.T(A.aaR(A.acf.AsQ));this.BU.EU(1);
this.J(this.BU,0);this.BU.At([B=this.WeightRecordingMode,B.B_,B.B$]);this.BU.CK(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BU.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BU._ReInit();this.WeightRecordingMode.
_ReInit();this.BU.T(A.aaR(A.acf.AsQ));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Du:function(){return 2;},Gj:function(aIndex){return this.
WeightRecordingModeToString.BR(this.C7(aIndex));},At:function(E){C.Cm.At.call(this
,E);A._GetAutoObject(A.Device.Device).Aw$(E);},Init:function(aArg){var B;A.zX([this
,this.BgE],[B=A._GetAutoObject(A.Device.Device),B.A89,B.Bbd],0);A.pe([this,this.
BgE],this);},BgE:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cb.Set(0,0);this.Cb.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightRecordingModeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa0={BooleanToAutoOnOff:null,Gj:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BR(aIndex);},_Init:function(aArg){C.Gc._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa0;},_Done:function(
){this.__proto__=C.Gc;this.BooleanToAutoOnOff._Done();C.Gc._Done.call(this);},_ReInit:
function(){C.Gc._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gc._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxP={A63:function(){var B;this.
Axs(1);this.Jt(0,3);this.VE(0,0,(B=this.M)[3]-B[1]);this.A4C(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4C(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VM(0);},_Init:
function(aArg){C.ABw._Init.call(this,aArg);this.__proto__=C.AxP;},_className:"Application::Triangle"
};C.ATD={Y:null,Init:function(aArg){this.BxQ(this);},BxP:function(Qb){var Aa=A._NewObject(
C.ANz,0);Aa.H(BD);Aa.T(Qb);Aa.Aj(true);Aa.Ar(false);Aa.Bi(true);this.J(Aa,0);this.
Ats(this);},Ats:function(G){var B;var Alv=1;var A2u=0;var X=this.Y.Ah;var Cx=null;
var K5=null;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OV.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cx){var AK_=(B=Cx.V.B6.A6H(Cx.V.String,0,-1))[2]-B[0
];if(!!(C.Mn.isPrototypeOf(X)?X:null))AK_=AK_+20;if(A2u<AK_)A2u=AK_;Cx.H(A.abL(Cx.
M,120));Cx.H(A.abI(Cx.M,28));Cx.H(A.abM(Cx.M,this.M[0]));Cx.H(A.abO(Cx.M,((B=this.
M)[3]-B[1])-(Alv*28)));Alv=Alv+1;}else{K5=(A.acg.C5.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K5){var Dg=((B=this.M)[3]-B[1])-((Alv-1)*28);K5.DM([this.
M[0],K5.Es[1]]);K5.DM([K5.Es[0],Dg]);K5.DC([this.M[0]+120,K5.EC[1]]);K5.DC([K5.EC[
0],Dg]);}}X=X.Ah;}this.BBj(A2u,28);},BBj:function(aWidth,BwZ){var B;var X=this.Y.
Ah;var Cx=null;var K5=null;aWidth=aWidth+20;if(aWidth>(C.Ast[0]-10))aWidth=C.Ast[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OV.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cx){Cx.V.Text.A6(0x14);Cx.V.Text.Hm(10);Cx.H(A.abL(Cx.M,aWidth
));Cx.H(A.abI(Cx.M,BwZ));Cx.H(A.abM(Cx.M,this.M[2]-((B=Cx.M)[2]-B[0])));}else{K5=(
A.acg.C5.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K5){K5.DM([this.M[
2]-aWidth,K5.Es[1]]);K5.DC([this.M[2],K5.EC[1]]);}}X=X.Ah;}},BxQ:function(G){var
Aa=A._GetAutoObject(C.B4).AqJ;while(!!Aa){if(!!(C.Axg.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axg.isPrototypeOf(Aa)?Aa:null);this.BxO(EF.DK,EF.AR,EF.Bw,EF.AQY);}else
if(!!(C.Axi.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axi.isPrototypeOf(Aa)?Aa:null);
this.BxV(EF.DK,EF.AR,EF.Bw,EF.Wu,EF.WO);}else if(!!(C.Zw.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.Zw.isPrototypeOf(Aa)?Aa:null);this.BxN(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkE.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkE.isPrototypeOf(Aa)?Aa:null);this.
BxP(EF.DK);}else if(!!(C.AF0.isPrototypeOf(Aa)?Aa:null))this.BxW();Aa=Aa.Mu;}A._GetAutoObject(
C.B4).Clear();A.pe([this,this.Ats],this);},BxN:function(Qb,Ac1,Ah4){var Aa=A._NewObject(
C.Mn,0);Aa.H(BD);Aa.T(Qb);Aa.AR=Ac1;Aa.Aj(true);Aa.Ar(Ah4);Aa.Bi(true);this.J(Aa
,0);this.Ats(this);},BxW:function(){var K5=A._NewObject(A.acg.C5,0);K5.L(A.jb.Bm
);K5.Aj(true);K5.Ng(3);this.J(K5,0);this.Ats(this);},BxO:function(Qb,Ac1,Ah4,A0E
){var Aa=A._NewObject(C.AmB,0);Aa.H(BD);Aa.T(Qb);Aa.AR=Ac1;Aa.Aj(true);Aa.Ar(Ah4
);Aa.Bi(true);Aa.At(A0E);this.J(Aa,0);this.Ats(this);},BxV:function(Qb,Ac1,Ah4,A2L
,Agn){var Aa=A._NewObject(C.ANy,0);Aa.H(BD);Aa.T(Qb);Aa.AR=Ac1;Aa.Aj(true);Aa.Ar(
Ah4);Aa.Bi(true);Aa.BmW(A2L);Aa.AFE(Agn);this.J(Aa,0);this.Ats(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.ATD;this.H(Rn);this.Y.H(Rn);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afh={_Init:
function(){A.acl.Afh._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_B={AqJ:null,Ahi:null,NC:function(Qb){var EF=A._NewObject(
C.AkE,0);EF.DK=Qb;this.J(EF);},Clear:function(){this.AqJ=null;this.Ahi=null;},Gu:
function(){var K5=A._NewObject(C.AF0,0);this.J(K5);},J:function(BbR){if(!this.AqJ
){this.AqJ=BbR;this.Ahi=this.AqJ;}else{this.Ahi.Mu=BbR;this.Ahi=this.Ahi.Mu;}},Tw:
function(Qb,Ac1){var EF=A._NewObject(C.Zw,0);EF.DK=Qb;EF.AR=Ac1;this.J(EF);},BgN:
function(Qb,Ac1,A0E){var EF=A._NewObject(C.Axg,0);EF.DK=Qb;EF.AR=Ac1;EF.AQY=A0E;
this.J(EF);},AaR:function(Qb){var EF=A._NewObject(C.Zw,0);EF.DK=Qb;EF.Bw=false;this.
J(EF);},ABA:function(Qb,Ac1,A2L,Agn){var EF=A._NewObject(C.Axi,0);EF.DK=Qb;EF.AR=
Ac1;EF.Wu=A2L;EF.WO=Agn;this.J(EF);},_Init:function(aArg){this.__proto__=C.A_B;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahi)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.B4={_Init:function(){C.A_B._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axh={Mu:null,_Init:function(aArg){this.__proto__=
C.Axh;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Mu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOw={Amn:null,ArA:function(E){if(this.Amn===
E)return;if(!!this.Ab)this.Ab.ZB(this);if(!!this.Amn)this.AqB(this.Amn,A._GetAutoObject(
C.Asx),null,null,null,null,false);this.Amn=E;if(!!this.Amn)this.AkI(this.Amn,A._GetAutoObject(
C.Asx),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOw;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amn)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WD={_Init:function(){C.AOw._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N1={Init:function(aArg){var C0=A._NewObject(C.ATE,0);C0.H(this.M);this.AkI(C0,A.
_GetAutoObject(C.AnR),null,A._GetAutoObject(C.AnR),A._GetAutoObject(C.AnR),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N1;this.H(Rn);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Asx={_Init:function(){C.AUz._Init.call(this,0);this.ACv=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATE={AK:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);this.
__proto__=C.ATE;this.H(AH5);this.Dk(0);this.AK.AZ(0x3F);this.AK.H(AH5);this.AK.L(
0xAAFFFFFF);this.J(this.AK,0);},_Done:function(){this.__proto__=A.Core.P;this.AK.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUy={Sb:function(){var B;var Ao=(A.acl.Ae$.isPrototypeOf(B=A.acl.Aek.Sb.call(this
))?B:null);if(!Ao)throw new Error(As1);Ao.Cp.Cw=255;Ao.Cp.B1=0;return Ao;},Sa:function(
){var B;var Ao=(A.acl.Axf.isPrototypeOf(B=A.acl.Aek.Sa.call(this))?B:null);if(!Ao
)throw new Error(As1);Ao.E0.Cw=0;Ao.E0.B1=255;Ao.Dt=true;return Ao;},_Init:function(
aArg){A.acl.Aek._Init.call(this,aArg);this.__proto__=C.AUy;},_className:"Application::ShadeOverlayTransition"
};C.AnR={_Init:function(){C.AUy._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkR={AnT:0,A1P:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Ir.Ai.call(this,Ae);this.BS.L(this.V.AQ);if(!!this.Q){
var BCt=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BS.R((A.
_GetAutoObject(A.Device.Converter).Ak7(BCt)+CQ)+A._GetAutoObject(A.acj.DU).Af0()
);else this.BS.R(A.aaR(A.acf.Akj));}},Kb:function(G){var B;var BgB=(this.A1P===false
)&&(this.AM<=this.Go);if(BgB)this.Bx(this.AnT);this.A4h(this.AM,4);if(BgB){this.
Bx(this.AM-this.Aj1);this.A1P=true;}C.Ir.Kb.call(this,G);},J8:function(G){this.A4h(
this.AM,5);C.Ir.J8.call(this,G);},Bx:function(E){this.A4h(E,4);E=(((E+((this.Aj1
/2)|0))/this.Aj1)|0)*this.Aj1;if(!E)this.A1P=false;C.Ir.Bx.call(this,E);},Ahq:function(
E){if(this.AnT===E)return;this.AnT=E;},A4h:function(BwH,Gz){this.AS0(A._GetAutoObject(
A.acj.DU).Bdb(BwH,Gz));},_Init:function(aArg){C.Ir._Init.call(this,aArg);this.__proto__=
C.AkR;this.H(KY);this.AnT=this.Go;this.JX(this.H4,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BDT={None:0,Left:1,BEq:2,Right:3};C.Amr={Xm:
null,FB:null,Ej:null,Background:null,And:null,Gb:null,KM:A.jV,AD2:null,Init:function(
aArg){var B;A.zV([this,this.Af8],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A3s],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.
LN],this);A.pe([this,this.A3s],this);this.Bb(this.Ej);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},Lm:function(){if(!this.BP)this.BP=A._NewObject(
C.N,0);return this.BP;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xm);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AKJ();},Agc:function(G){var Aa=(C.AB3.isPrototypeOf(G)?G:null);var Hr;if(!!Aa)Hr=
Aa.Hr;else Hr=this.Gb.FM();if(Hr>=A._GetAutoObject(A.Device.Device).An.B9())return;
A._GetAutoObject(A.Device.Helper).G7(Hr);A.pe([this,this.AaD],this);},AKJ:function(
){},Af8:function(G){this.Am();},A3j:function(G){if(this.Gb.FM()<(A._GetAutoObject(
A.Device.Device).An.B9()-1))this.Gb.GS(this.Gb.FM()+1);},A3k:function(G){if(this.
Gb.FM()>0)this.Gb.GS(this.Gb.FM()-1);},DJ:function(G){var Gf=A._GetAutoObject(A.
Device.Device).An.B9();var MR=this.BP;if(!MR)return;MR.C1(A.aaL(A.ach.Aex));MR.CE=[
this,this.AaD];if(Gf<=0){MR.Cs(null);MR.C2(null);MR.Cg=null;MR.Cl=null;MR.Zz=false;
MR.ZA=false;}else if(Gf===1){MR.Cs(null);MR.C2(A.aaL(A.ach.Aey));MR.Cg=null;MR.Cl=[
this,this.Agc];MR.Zz=false;MR.ZA=false;}else{MR.Cs(A.aaL(A.ach.Aq2));MR.C2(A.aaL(
A.ach.Aq9));MR.Cg=[this,this.A3j];MR.Cl=[this,this.A3k];MR.Zz=true;MR.ZA=true;}}
,LN:function(G){this.BfZ(this);this.Xm=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKJ();},BmO:function(E){if(this.AD2===E)return;this.AD2=E;A.pe([this,this.BAn
],this);},BAn:function(G){this.BfZ(this);},BfZ:function(G){var B;if(!!this.FB)this.
HN(this.FB);this.FB=(C.EA.isPrototypeOf(B=A._NewObject(this.AD2,0))?B:null);if(!
!this.FB){this.FB.H(AXU);this.J(this.FB,0);}},A3s:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DL(1,4
))this.Gb.Dj(A.aaR(A.acf.ARY));else this.Gb.Dj(this.KM);},Dj:function(E){if(this.
KM===E)return;this.KM=E;A.pe([this,this.A3s],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.
Background={I:this},0);A.acg.AK._Init.call(this.And={I:this},0);C.Gb._Init.call(
this.Gb={I:this},0);this.__proto__=C.Amr;this.H(Rn);this.Ej.H(BD);this.Ej.A9J(A.
jb.CS);this.Ej.A9K(A.jb.Text);this.Background.H(Fe);this.Background.L(A.jb.Bor);
this.And.H(AH6);this.And.L(A.jb.CS);this.Gb.H(AH6);this.Gb.N0(C.AB3);this.AD2=C.
APB;this.KM=A.aaR(A.acf.Av1);this.J(this.Ej,0);this.J(this.Background,0);this.J(
this.And,0);this.J(this.Gb,0);this.Ej.AR=[this,this.Agc];this.Ej.Ab0(A._NewObject(
C.Yp,0));this.Gb.Zn(A._GetAutoObject(A.Device.Device).An);this.Gb.Zr([this,this.
Agc]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ej._Done(
);this.Background._Done();this.And._Done();this.Gb._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ej._ReInit();this.
Background._ReInit();this.And._ReInit();this.Gb._ReInit();this.Dj(A.aaR(A.acf.Av1
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xm)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.And)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gb)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.AB3={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.De(this.V.AQ);},Init:function(aArg){},Cf:function(Ad){if(!this.AX)return;
this.Hr=Ad;if(!!this.AX){this.T(this.AX.CF(Ad,1).toFixed());this.DS.EB(this.AX.AmQ(
Ad,14));this.DS.AEY(this.AX.I5(Ad,13));this.DS.Ae1(this.AX.H2(Ad,8));this.DS.Un(
this.AX.H2(Ad,11));this.DS.Ae5(this.AX.H2(Ad,12));this.DS.Ae7(this.AX.CF(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.AB3;this.
H(O4);this.AP.L(A.jb.Bc);this.DS.H(AXV);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.Yp={Q:null,Init:function(aArg){var
B;this.AAV(this);this.At([B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr]);},AEE:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Ni(FilterCriterion
);var Ai2=this.Akm();if(Ai2>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai2,false);Filter.CW(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeX(false);},Bv7:function(s){this.AEE(
s);},AAV:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);if(!!FilterCriterion
)Filter.Ni(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BGi:function(s){
this.AAV(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcT],E,0);if(!!E)A.pe([this,this.
AcT],this);},C3:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwH(-1);return;}var AyZ=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DL(1,4))?B:null);if(!AyZ){this.AW.AwH(0);this.AW.AeX(true);}else
this.AW.AwH(AyZ.A4);},AcT:function(s){this.C3(s);},_Init:function(aArg){C.AjP._Init.
call(this,aArg);this.__proto__=C.Yp;this.AW.AwH(0);this.AW.Di=[this,this.Bv7];this.
Init(aArg);},_Mark:function(D){var B;C.AjP._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqE={BirthType:null,EaseOfDelivery:null,Ca:null,Ef:null,AbF:null,G6:null,Cn:
null,AbD:null,AMS:false,Init:function(aArg){this.AMS=A._GetAutoObject(A.Device.Helper
).W.Ara();if(this.AMS)this.AeW(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeW(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Ca.
LX([this,this.AcR]);this.Ca.L0(A.aaL(A.ach.Afc));this.Ca.AR=[this,this.AcR];}this.
Ef.ArX(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Ca.Q,0);A.pe([this,this.GH],this);},Agd:function(G
){if(((this.Ef.Asg===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQ2(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A5(21,true,A._GetAutoObject(A.Device.Converter).Rh(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ch(
A._GetAutoObject(A.Device.Device).An);if(this.KI>0){if(this.AMS){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LS(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B0=A._NewObject(A.Device.Rating,0);B0.E3(Ad,A._GetAutoObject(A.Device.
Device).Bt);B0.OnSetBodyWeight(this.KI);B0.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B0.Ch(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AXW,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B0=A._NewObject(A.Device.Rating
,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B0.OnSetBodyWeight(
this.KI);B0.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B0.Ch(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A9).Fy();},Ev:function(
G){A._GetAutoObject(A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A9).Fy();},Auf:function(
){this.N.CV(A.jV);this.N.C2(A.aaL(A.ach.AmY));this.N.Cl=[this,this.AyN];},AAq:function(
G){A._GetAutoObject(C.A9).Cd(32);},GH:function(G){var F;var Kc=(F=this.Ef.Q,F[1].
call(F[0]));var ABh=(F=this.Ca.Q,F[1].call(F[0]));var A4c=true;if(!!Kc&&(ABh===Kc
))A4c=false;A._GetAutoObject(A.Device.Helper).JY(this.Ca,A4c);this.Ef.BlO(!A4c);
},_Init:function(aArg){C.HY._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvX._Init.
call(this.Ca={I:this},0);C.Q$._Init.call(this.Ef={I:this},0);C.Acl._Init.call(this.
AbF={I:this},0);C.BU._Init.call(this.G6={I:this},0);C.SQ._Init.call(this.Cn={I:this
},0);C.BU._Init.call(this.AbD={I:this},0);this.__proto__=C.AqE;var B;this.Ca.H(AhY
);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.Ak2));this.Ca.ArH(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Ca.ArI(A.aaR(A.acf.Akj));this.Ef.H(AhY);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Uf));this.AbF.H(AXX);this.AbF.Aj(true);this.
AbF.T(A.aaR(A.acf.GM));this.G6.H(AhY);this.G6.Aj(true);this.G6.T(A.aaR(A.acf.Arl
));this.Cn.H(AhY);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.AFw(true);
this.AbD.H(AhY);this.AbD.Aj(true);this.AbD.T(A.aaR(A.acf.AgG));this.J(this.Ca,-1
);this.J(this.Ef,-1);this.J(this.AbF,-1);this.J(this.G6,-1);this.J(this.Cn,-1);this.
J(this.AbD,-1);this.BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LY(A._GetAutoObject(A.Device.Helper).W);this.Ca.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Arv,B.PT]);this.Ef.Gq([this,this.D_,this.GQ]);this.Ef.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Anp,B.Nd]);this.AbF.Gq([this,this.D_,this.GQ]);this.AbF.At([
B=A._GetAutoObject(A.Device.Helper).W,B.Arw,B.SI]);this.G6.At([B=this.BirthType,
B.B_,B.B$]);this.G6.CK(this.BirthType);this.Cn.Gq([this,this.D_,this.GQ]);this.Cn.
LX([B=this.Cn,B.FU]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab4([B=A._GetAutoObject(
A.Device.Helper).W,B.Av9,B.Q4]);this.AbD.At([B=this.EaseOfDelivery,B.B_,B.B$]);this.
AbD.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HY;this.BirthType._Done();this.EaseOfDelivery._Done();this.Ca._Done();this.Ef._Done(
);this.AbF._Done();this.G6._Done();this.Cn._Done();this.AbD._Done();C.HY._Done.call(
this);},_ReInit:function(){C.HY._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Ca._ReInit();this.Ef._ReInit();this.AbF._ReInit();
this.G6._ReInit();this.Cn._ReInit();this.AbD._ReInit();this.Ca.T(A.aaR(A.acf.Ak2
));this.Ca.ArH(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.
Ca.ArI(A.aaR(A.acf.Akj));this.Ef.T(A.aaR(A.acf.Uf));this.AbF.T(A.aaR(A.acf.GM));
this.G6.T(A.aaR(A.acf.Arl));this.Cn.T(A.aaR(A.acf.Aed));this.AbD.T(A.aaR(A.acf.AgG
));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G6)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbD
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acl={FJ:null,AW:null,A8:0,IZ:function(G){C.Ds.IZ.call(this,G);if(!this.A8)this.
FU(this);else this.Hd(this);},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hw.Z(false
);this.H4.Z(false);if(this.A8===1){this.Bb(this.AW);if(this.Hk){this.AW.FN(A.jb.
CJ);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FN(A.jb.CS);this.
Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hk)this.AW.FN(A.jb.CJ);
else this.AW.FN(A.jb.CS);this.Bb(null);}},Bx:function(E){var F;var BO=this.AM;C.
Ds.Bx.call(this,E);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Ug,this.BaR],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:this.FJ.AkN((F=
this.N,F[1].call(F[0])));}},FU:function(G){this.Ew(1);},Hd:function(G){this.Ew(0
);},Ew:function(EN){var F;if(!this.A8)this.FJ.Ajx((F=this.N,F[1].call(F[0])));this.
A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>1)this.A8=1;if(this.A8===1)this.AW.
SO(7);this.DJ(this);this.Am();},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.AQW._Init.call(this.AW={I:this},0);this.__proto__=C.Acl;this.H(UW);this.EU(999999
);this.V.R(As8);this.V.L(A.jb.Bm);this.Hw.Z(false);this.H4.Z(false);this.AW.H(AXY
);this.AW.AS8(6);this.J(this.AW,0);this.AW.At([this,this.Ug,this.BaR]);this.FJ=A.
_NewObject(C.Aer,0);},_Done:function(){this.__proto__=C.Ds;this.AW._Done();C.Ds.
_Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.FJ)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Du:function(){return 4;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gj:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BR(aIndex);},DZ:function(A_){return A_;},H3:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuD={Y:null,QP:null,NW:null,Ee:null,PF:null,PC:null,PD:null,Ay:null,Gc:null,
ReasonOfLeaving:null,Ahx:null,M2:0,AmF:false,AB7:true,AOp:false,Asb:false,Init:function(
aArg){A.zX([this,this.A9e],[this,this.A8H,this.AS$],0);this.Ahn(A._GetAutoObject(
A.Device.Helper).W.AhR(2));this.ReasonOfLeaving.At(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9e],this);},DE:function(G){
var B;var Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;
case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QH(X,Fh,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HH(X,true,null,null);},AlX:function(G
){A._GetAutoObject(C.A9).Fy();},ApI:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(A.
Device.Device).Bt.HI().toFixed(),0,null);else{var B0=A._NewObject(A.Device.Rating
,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B0.OnSetBodyWeight(
this.M2);B0.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B0.Ch(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmF){A._GetAutoObject(A.Device.Helper).W.Ae3(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A6J(A._GetAutoObject(A.Device.Helper).Dv(),this.Asb);}A._GetAutoObject(A.Device.
Helper).W.AFv(this.ReasonOfLeaving.C7((F=this.NW.Q,F[1].call(F[0]))));if(this.AB7
)A._GetAutoObject(A.Device.Helper).W.PT(0);if(this.Asb)A._GetAutoObject(A.Device.
Helper).W.AwJ(true);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).An);this.A__();},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},Ahn:function(E){
if(this.M2===E)return;this.M2=E;},Anm:function(){return this.M2;},Be1:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.A9).Fy();A._GetAutoObject(A.Device.Helper
).Asn();}},A9e:function(G){switch(this.Asb){case false:this.Ee.T(A.aaR(A.acf.AVx
));break;case true:this.Ee.T(A.aaR(A.acf.Bqu));break;default:;}},AS$:function(E){
if(this.Asb===E)return;this.Asb=E;},A8H:function(){return this.Asb;},A__:function(
){A._GetAutoObject(A.Device.Device).A5(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Be1]);},Bmc:function(E){if(this.AOp===E)return;
this.AOp=E;},Bkx:function(){return this.AOp;},BlC:function(E){if(this.AB7===E)return;
this.AB7=E;},Bkl:function(){return this.AB7;},BlM:function(E){if(this.AmF===E)return;
this.AmF=E;},Bkt:function(){return this.AmF;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afl._Init.call(this.QP={I:this
},0);C.Asw._Init.call(this.NW={I:this},0);C.AkR._Init.call(this.Ee={I:this},0);C.
Afl._Init.call(this.PF={I:this},0);C.Afl._Init.call(this.PC={I:this},0);C.Afl._Init.
call(this.PD={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gc._Init.call(this.
Gc={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahx._Init.call(this.Ahx={I:this},0);this.__proto__=C.AuD;var B;this.N.Z(true);this.
N.CV(A.aaR(A.acf.Unregister));this.Dr(C.IJ);this.Y.H(Fe);this.Y.JR(1);this.QP.H(
Aac);this.QP.Aj(true);this.QP.T(A.aaR(A.acf.AmF));this.QP.Bi(true);this.QP.Zu(false
);this.QP.F$(-1);this.QP.EU(1);this.NW.H(UY);this.NW.Aj(true);this.NW.T(A.aaR(A.
acf.ReasonOfLeaving));this.NW.Bi(true);this.NW.Zu(false);this.Ee.H(AhX);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVx));this.Ee.Bi(false);this.Ee.F$(1000);this.Ee.
EU(999000);this.PF.H(UY);this.PF.Aj(true);this.PF.T(A.aaR(A.acf.A4P));this.PF.Bi(
true);this.PF.Zu(false);this.PF.Bx(1);this.PF.F$(-1);this.PF.EU(1);this.PC.H(Aac
);this.PC.Aj(true);this.PC.T(A.aaR(A.acf.A4Q));this.PC.Bi(true);this.PC.Zu(false
);this.PC.Bx(1);this.PC.F$(-1);this.PC.EU(1);this.PD.H(UY);this.PD.Aj(true);this.
PD.T(A.aaR(A.acf.A5q));this.PD.Bi(true);this.PD.Zu(false);this.PD.Bx(1);this.PD.
F$(-1);this.PD.EU(1);this.Ay.H(Ayg);this.Gc.At(0);this.J(this.Y,0);this.J(this.QP
,0);this.J(this.NW,0);this.J(this.Ee,0);this.J(this.PF,0);this.J(this.PC,0);this.
J(this.PD,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fj
];this.QP.At([B=this.Gc,B.B_,B.B$]);this.QP.CK(this.Gc);this.QP.Akz([this,this.Bkt
,this.BlM]);this.NW.Gq([this,this.D_,this.GQ]);this.NW.LX([B=this.NW,B.FU]);this.
NW.L0(A.aaL(A.ach.Edit));this.NW.At([B=this.ReasonOfLeaving,B.B_,B.B$]);this.NW.
CK(this.ReasonOfLeaving);this.NW.Ant(this.Ahx);this.Ee.At([this,this.Anm,this.Ahn
]);this.PF.At([B=this.Gc,B.B_,B.B$]);this.PF.CK(this.Gc);this.PF.Akz([this,this.
Bkx,this.Bmc]);this.PC.At([B=this.Gc,B.B_,B.B$]);this.PC.CK(this.Gc);this.PC.Akz([
this,this.A8H,this.AS$]);this.PD.At([B=this.Gc,B.B_,B.B$]);this.PD.CK(this.Gc);this.
PD.Akz([this,this.Bkl,this.BlC]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QP._Done();this.NW._Done();this.Ee._Done();this.PF._Done(
);this.PC._Done();this.PD._Done();this.Ay._Done();this.Gc._Done();this.ReasonOfLeaving.
_Done();this.Ahx._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QP._ReInit();this.NW._ReInit();this.Ee._ReInit(
);this.PF._ReInit();this.PC._ReInit();this.PD._ReInit();this.Ay._ReInit();this.Gc.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahx._ReInit();this.N.CV(A.aaR(A.acf.
Unregister));this.QP.T(A.aaR(A.acf.AmF));this.NW.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVx));this.PF.T(A.aaR(A.acf.A4P));this.PC.T(A.aaR(A.acf.A4Q
));this.PD.T(A.aaR(A.acf.A5q));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahx)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUx={AjI:null,Pv:null,Au3:AXZ,Bl:function(aSize){C.Ir.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BS.H([0,40,aSize[0],80]);this.Hw.H([0,this.BS.M[1],40,
this.BS.M[3]]);this.H4.H([aSize[0]-40,this.BS.M[1],aSize[0],this.BS.M[3]]);},Ai:
function(Ae){var F;C.Ir.Ai.call(this,Ae);this.Pv.L(this.V.AQ);if(!!this.AjI){if((
F=this.AjI,F[1].call(F[0]))===-1)this.Pv.R(this.Au3+AH7);else this.Pv.R((this.Au3+
CQ)+(F=this.AjI,F[1].call(F[0])).toFixed());}else this.Pv.R(this.Au3);},A23:function(
G){this.Am();},BlW:function(E){if(A.aaZ(this.AjI,E))return;if(!!this.AjI)A.z$([this
,this.A23],this.AjI,0);this.AjI=E;if(!!E)A.zX([this,this.A23],E,0);if(!!E)A.pe([
this,this.A23],this);},A9G:function(E){if(this.Au3===E)return;this.Au3=E;this.Am(
);},_Init:function(aArg){C.Ir._Init.call(this,aArg);C.CH._Init.call(this.Pv={I:this
},0);this.__proto__=C.AUx;this.H(AX0);this.V.H(AX1);this.V.A6(0x12);this.Pv.H(AX2
);this.Pv.A6(0x12);this.Pv.L(A.jb.Bm);this.J(this.Pv,0);this.Pv.S(A.aaL(A.fl.Af)
);this.Pv.A2(A.aaL(A.fl.Ak));this.Pv.Cu(null);},_Done:function(){this.__proto__=
C.Ir;this.Pv._Done();C.Ir._Done.call(this);},_ReInit:function(){C.Ir._ReInit.call(
this);this.Pv._ReInit();this.Pv.S(A.aaL(A.fl.Af));this.Pv.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Ir._Mark.call(this,D);if((B=this.AjI)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AL$={Y:null,JN:null,Ss:null,Ay:null,Aqs:2500,ANp:24,DE:function(G){var B;var
Fh=0;var X=this.AV;switch(this.Cq.CO){case 6:Fh=2;break;case 7:Fh=7;break;case 4:
Fh=4;break;case 5:Fh=5;break;default:;}X=this.QH(X,Fh,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HH(X,true,null,null);},AlX:function(G){A._GetAutoObject(
C.A9).Fy();},ApI:function(G){},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1)
)[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},BlG:function(
E){if(this.Aqs===E)return;this.Aqs=E;},Bkn:function(){return this.Aqs;},BlH:function(
E){if(this.ANp===E)return;this.ANp=E;},Bko:function(){return this.ANp;},Bkc:function(
G){var F,CA;this.JN.BS.L(this.JN.V.AQ);if(!!this.JN.Q)this.JN.BS.R((((String.fromCharCode(((
F=this.JN.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Ak_)+String.fromCharCode(((
CA=this.JN.Q,CA[1].call(CA[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JN.
AG0);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ir._Init.call(this.JN={I:this},0);C.Ir._Init.call(this.Ss={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AL$;this.N.Z(true);this.
Dr(C.IJ);this.Y.H(Fe);this.Y.JR(1);this.JN.H(AhX);this.JN.Aj(true);this.JN.T(A.aaR(
A.acf.Aqs));this.JN.Bi(false);this.JN.F$(0);this.JN.EU(5000);this.JN.IP(A.aaR(A.
acf.Af4));this.JN.Ja(A.aaR(A.acf.Af4));this.JN.AS0(100);this.Ss.H(UY);this.Ss.Aj(
true);this.Ss.T(A.aaR(A.acf.A_K));this.Ss.Bi(true);this.Ss.Bx(24);this.Ss.F$(10);
this.Ss.EU(33);this.Ss.IP(AX3);this.Ay.H(Ayg);this.J(this.Y,0);this.J(this.JN,0);
this.J(this.Ss,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.Yu));this.Y.El=[this,this.
Fj];this.JN.At([this,this.Bkn,this.BlG]);this.JN.A_e([this,this.Bkc]);this.Ss.At([
this,this.Bko,this.BlH]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JN._Done();this.Ss._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JN._ReInit();this.Ss._ReInit();this.
Ay._ReInit();this.JN.T(A.aaR(A.acf.Aqs));this.JN.IP(A.aaR(A.acf.Af4));this.JN.Ja(
A.aaR(A.acf.Af4));this.Ss.T(A.aaR(A.acf.A_K));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Arn={EaseOfDelivery:null,BirthType:null,Ca:null,Dp:null,Dh:null,Cn:null,Ee:null
,G6:null,Lh:null,M2:0,LU:false,Init:function(aArg){A.zX([this,this.GH],this.Ca.Q
,0);A.zX([this,this.GH],this.Dp.Q,0);A.zX([this,this.AAv],this.C$.Q,0);A.zX([this
,this.Bex],this.Cn.Dl,0);A.zX([this,this.Ber],this.C9.Q,0);A.zX([this,this.At0],
this.Ca.Q,0);A.zX([this,this.At0],this.Dp.Q,0);A.pe([this,this.AAv],this);A.pe([
this,this.GH],this);A.pe([this,this.Bex],this);A.pe([this,this.Ber],this);A.pe([
this,this.At0],this);},Ev:function(G){A._GetAutoObject(A.Device.Helper).W.E5();A.
_GetAutoObject(C.A9).Fy();},Agd:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EB((F=this.BY.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhD
){var AlH=A._GetAutoObject(A.Device.Helper).AhD.AON();A._GetAutoObject(A.Device.
Helper).W.Ab1(AlH);A._GetAutoObject(A.Device.Helper).W.Any(AlH);}var Aln=A._GetAutoObject(
A.Device.Helper).A1j(A._GetAutoObject(A.Device.Helper).W,(F=this.Dh.HZ.Ht,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Aln){this.AiY();A.pe([this,this.
Bwt],this);}else A._GetAutoObject(A.Device.Helper).AKc(A._GetAutoObject(A.Device.
Helper).W,Aln,(F=this.Dh.HZ.Ht,F[1].call(F[0])),0,[this,this.ApD]);},Auf:function(
){this.N.CV(A.jV);this.N.C2(A.aaL(A.ach.ADH));this.N.Cl=[this,this.AyN];},AiY:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).An);var L7=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SP(L7);var Bdr=false;if(A._GetAutoObject(
A.Device.Helper).Am1()){if(A._GetAutoObject(A.Device.Device).Bt.Lg()){Bdr=true;A.
_GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(A.Device.Device).Bt.
HI().toFixed(),0,null);}else{var B0=A._NewObject(A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B0.OnSetBodyWeight(this.KI);B0.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B0.Ch(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A69()&&(Bdr===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B0=A._NewObject(A.Device.Rating
,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B0.OnSetBodyWeight(
this.M2);B0.Ch(A._GetAutoObject(A.Device.Device).Bt);}}var IW=null;switch((F=this.
Dh.HZ.Ht,F[1].call(F[0]))){case 3:IW=[B=A._GetAutoObject(A.Device.Device),B.Awa,
B.AyE];break;case 2:IW=[B=A._GetAutoObject(A.Device.Device),B.Awb,B.AyF];break;case
4:case 5:IW=[B=A._GetAutoObject(A.Device.Device),B.Ano,B.Aox];break;default:;}if(
!!IW)switch((F=this.Dh.Km.VQ,F[1].call(F[0]))){case 1:IW[2].call(IW[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IW[2].call(IW[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).A$A(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjK(),this.Dp.AjM());},Ap1:function(G){A.
_GetAutoObject(C.A9).Fy();},Bwt:function(s){this.Ap1(s);},AAq:function(G){A._GetAutoObject(
C.A9).Cd(49);},Ahn:function(E){if(this.M2===E)return;this.M2=E;A.abo([this,this.
Anm,this.Ahn],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).Am1())this.
C9.Z(true);else this.C9.Z(false);if(A._GetAutoObject(A.Device.Helper).A69())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LU){this.Dp.Z(false);this.Ca.T(A.aaR(A.
acf.ACx));this.Ca.AEW(A.aaL(A.ach.Afc));}else{this.Dp.Z(true);this.Ca.T(A.aaR(A.
acf.Ak2));this.Ca.AEW(null);}},AAv:function(G){A._GetAutoObject(A.Device.Helper).
AVg(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LU);},Bex:function(G){A.pe([this,this.Bgq],this);},Ber:function(G){A.pe([this
,this.Bgq],this);},Bgq:function(G){var F,CA,Ta;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahq(A._GetAutoObject(A.Device.Helper
).AhR(A._GetAutoObject(A.Device.Helper).Abn((F=this.BY.Q,F[1].call(F[0]))),(CA=this.
Cn.Dl,CA[1].call(CA[0])),2,(Ta=this.BY.Q,Ta[1].call(Ta[0]))));break;case 2:this.
Ee.Ahq(A._GetAutoObject(A.Device.Helper).AhR(this.KI,(F=this.Cn.Dl,F[1].call(F[0
])),2,(CA=this.BY.Q,CA[1].call(CA[0]))));break;default:;}},ApD:function(G){var F;
var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id
){case 22:case 21:switch((F=this.Dh.HZ.Ht,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JG(this.Dh);break;case 0:this.JG(this.Dp);break;case 1:this.JG(this.
Ca);break;default:throw new Error(Ayp+(F=this.Dh.HZ.Ht,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JG(this.Dh);this.JG(this.Dp);}break;case 25:case 42:{this.
JG(this.Dh);this.JG(this.Ca);}break;case 41:break;default:A.ab5("%s%e",As6,As.Id
);}},ApE:function(G){var F;C.HY.ApE.call(this,G);var AoS=0;switch((F=this.BY.Q,F[
1].call(F[0]))){case 0:case 2:AoS=A._GetAutoObject(A.Device.Device).AdQ;break;case
1:AoS=730;break;default:A.ab5("%s%e",Ala,(F=this.BY.Q,F[1].call(F[0])));}(F=this.
Cn.Dl,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmD(AoS)));(F=this.C9.Q,F[2].call(F[0],this.C9.AnT));this.Ee.Ahq(A._GetAutoObject(
A.Device.Helper).W.AhR(1));},Ae2:function(E){if(this.LU===E)return;this.LU=E;A.abo([
this,this.Awd,this.Ae2],0);},At0:function(G){var F,CA,Ta;this.Ae2(((F=this.Ca.Q,
F[1].call(F[0]))===(CA=this.Dp.Q,CA[1].call(CA[0])))&&!!(Ta=this.Ca.Q,Ta[1].call(
Ta[0])));A.pe([this,this.GH],this);},Anm:function(){return this.M2;},Awd:function(
){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AvX._Init.call(this.Ca={I:this},0);C.Q$._Init.call(this.Dp={I:this}
,0);C.AGy._Init.call(this.Dh={I:this},0);C.SQ._Init.call(this.Cn={I:this},0);C.AkR.
_Init.call(this.Ee={I:this},0);C.BU._Init.call(this.G6={I:this},0);C.BU._Init.call(
this.Lh={I:this},0);this.__proto__=C.Arn;var B;this.Dr(C.AC9);this.CG.H(AcP);this.
Ca.H(Aom);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.Ak2));this.Ca.ArH(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Ca.ArI(A.aaR(A.acf.Akj));this.
Dp.H(Aom);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uf));this.Dp.ArX(false);this.Dh.
H(AX4);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.GM));this.Dh.Bx(0);this.Cn.H(AcP);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.AFw(true);this.Ee.H(AcP);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M2));this.Ee.F$(1000);this.Ee.EU(999000);this.
G6.H(AcP);this.G6.Aj(true);this.G6.T(A.aaR(A.acf.Arl));this.Lh.H(AcP);this.Lh.Aj(
true);this.Lh.T(A.aaR(A.acf.AgG));this.J(this.Ca,-3);this.J(this.Dp,-3);this.J(this.
Dh,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G6,-1);this.J(this.Lh,-
1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LY(
A._GetAutoObject(A.Device.Helper).W);this.Ca.AR=[this,this.AcR];this.Ca.LX([this
,this.AcR]);this.Ca.L0(A.aaL(A.ach.Afc));this.Ca.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Arv,B.PT]);this.Ca.OM([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1
]);this.Ca.PQ([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.Ca.Uj([B=A._GetAutoObject(
A.Device.Device),B.Anl,B.Aow]);this.Ca.Ae2([this,this.Awd,this.Ae2]);this.Dp.Gq([
this,this.D_,this.GQ]);this.Dp.LX([this,this.AcR]);this.Dp.L0(A.aaL(A.ach.Afc));
this.Dp.Ul([B=this.Gender.Animal,B.Wv,B.JS]);this.Dp.OM([B=A._GetAutoObject(A.Device.
Device),B.Uh,B.U1]);this.Dp.PQ([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);
this.Dp.Uj([B=A._GetAutoObject(A.Device.Device),B.Anl,B.Aow]);this.Dp.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Anp,B.Nd]);this.Dp.Anr([B=this.AnimalType.Animal,B.PP,B.EB]
);this.Dh.Gq([this,this.D_,this.GQ]);this.Dh.LX([B=this.Dh,B.FU]);this.Dh.L0(A.aaL(
A.ach.Edit));this.Dh.At([B=A._GetAutoObject(A.Device.Helper).W,B.Arw,B.SI]);this.
Dh.A9h(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gq([this,this.D_,this.GQ]);this.
Cn.LX([B=this.Cn,B.FU]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab4([B=A._GetAutoObject(
A.Device.Helper).W,B.Av9,B.Q4]);this.Ee.At([this,this.Anm,this.Ahn]);this.G6.At([
B=this.BirthType,B.B_,B.B$]);this.G6.CK(this.BirthType);this.Lh.At([B=this.EaseOfDelivery
,B.B_,B.B$]);this.Lh.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType._Done();this.Ca._Done(
);this.Dp._Done();this.Dh._Done();this.Cn._Done();this.Ee._Done();this.G6._Done(
);this.Lh._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Ca._ReInit();this.
Dp._ReInit();this.Dh._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G6._ReInit(
);this.Lh._ReInit();this.Ca.T(A.aaR(A.acf.Ak2));this.Ca.ArH(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Ca.ArI(A.aaR(A.acf.Akj));this.Dp.T(
A.aaR(A.acf.Uf));this.Dh.T(A.aaR(A.acf.GM));this.Cn.T(A.aaR(A.acf.Aed));this.Ee.
T(A.aaR(A.acf.M2));this.G6.T(A.aaR(A.acf.Arl));this.Lh.T(A.aaR(A.acf.AgG));},_Mark:
function(D){var B;C.HY._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AG8={H7:null,AhI:null,AgR:null,AhJ:null,AgS:null,AnimalType:null,Background:
null,NY:null,Rj:null,V:null,TR:null,Yx:null,AbA:null,PO:null,DK:A.jV,AGA:true,CP:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An3();this.
AxQ();},An3:function(){var F,CA;var LC=0;var Amb=0;var AlA=0;var Ib=0;if((((!!this.
AhI&&!!this.AhJ)&&!!this.AgR)&&!!this.AgS)&&!!this.AnimalType){Amb=(F=this.AhI,F[
1].call(F[0]));AlA=(F=this.AgR,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper
).L9((F=this.AhJ,F[1].call(F[0])),(CA=this.AgS,CA[1].call(CA[0])));Ib=(F=this.AnimalType
,F[1].call(F[0]));}var K7=A.jb.Text;var Ay7=A.jb.CS;if(!!LC){var ALt=A._GetAutoObject(
A.acj.DU).Alu(LC,Amb,AlA);Ay7=A._GetAutoObject(A.acj.DU).AzK(ALt,Ib);K7=A._GetAutoObject(
A.acj.DU).AzM(ALt,Ib);}this.Background.L(Ay7);this.TR.L(K7);this.Rj.L(K7);this.NY.
L(K7);this.AbA.L(K7);if(K7===A.jb.Bm)this.Yx.L(K7);else this.Yx.L(A.jb.CJ);this.
V.L(K7);this.PO.L(K7);},AxQ:function(){var F,CA;var LC=0;var Amb=0;var AlA=0;if(((
!!this.AhI&&!!this.AhJ)&&!!this.AgR)&&!!this.AgS){Amb=(F=this.AhI,F[1].call(F[0]
));AlA=(F=this.AgR,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper).L9((F=this.
AhJ,F[1].call(F[0])),(CA=this.AgS,CA[1].call(CA[0])));}if(!!LC){var ALt=A._GetAutoObject(
A.acj.DU).Alu(LC,Amb,AlA);this.Rj.R(A._GetAutoObject(A.Device.Converter).S8(ALt,
2,true));this.NY.Z(true);this.Rj.Z(true);this.PO.Z(false);}else{this.NY.Z(false);
this.Rj.Z(false);this.PO.Z(true);}this.TR.R(this.By4(AlA-Amb,LC));this.AbA.Z(this.
AGA);this.Yx.Z(this.AGA);this.NY.R(A._GetAutoObject(A.acj.DU).Aas());},By4:function(
A00,Ah5){var B;if(Ah5<0){A.ab5("%s",AX5);return A.jV;}var Iv=(AX6+A._GetAutoObject(
A.acj.DU).Af0())+CQ;var FV=A._GetAutoObject(A.Device.Converter).Ak7(A00);if(!A00
)FV=A.abU(FV,AX7,0);else if(A00>0)FV=A.abU(FV,AH8,0);Iv=this.BfH(Iv,AX8,FV);if(Ah5===
1)Iv=Iv+A.aaR(A.acf.Bi6);else{Iv=Iv+A.aaR(A.acf.Bi7);Iv=this.BfH(Iv,AX9,Ah5.toFixed(
));}return Iv;},BfH:function(aString,BbW,Bxt){if(aString===A.jV){A.ab5("%s",AX_);
return A.jV;}var A2J=aString.indexOf(BbW,0);if(A2J>=0){aString=A.ab1(aString,A2J
,BbW.length);aString=A.abU(aString,Bxt,A2J);}return aString;},ATo:function(E){if(
A.aaZ(this.AhI,E))return;if(!!this.AhI)A.z$([this,this.C3],this.AhI,0);this.AhI=
E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},BlT:function(
E){if(A.aaZ(this.AgR,E))return;if(!!this.AgR)A.z$([this,this.C3],this.AgR,0);this.
AgR=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},ATp:function(
E){if(A.aaZ(this.AhJ,E))return;if(!!this.AhJ)A.z$([this,this.C3],this.AhJ,0);this.
AhJ=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},BlU:function(
E){if(A.aaZ(this.AgS,E))return;if(!!this.AgS)A.z$([this,this.C3],this.AgS,0);this.
AgS=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},C3:function(
G){this.Am();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_d:function(
E){if(this.AGA===E)return;this.AGA=E;this.Am();},EB:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C3],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.NY={I:this},0);A.acg.Text._Init.call(this.Rj={I:this},
0);C.CH._Init.call(this.V={I:this},0);C.CH._Init.call(this.TR={I:this},0);A.acg.
Ap._Init.call(this.Yx={I:this},0);A.acg.Ap._Init.call(this.AbA={I:this},0);C.CH.
_Init.call(this.PO={I:this},0);this.__proto__=C.AG8;this.H(AfB);this.Background.
AZ(0x3F);this.Background.H(AfB);this.NY.H(AX$);this.NY.R(A._GetAutoObject(A.acj.
DU).Aas());this.NY.A6(0x9);this.NY.L(A.jb.Text);this.Rj.H(AYa);this.Rj.A6(0x14);
this.Rj.R(A.aaR(A.acu.Akh));this.Rj.L(A.jb.Text);this.V.AZ(0x1D);this.V.H(AYb);this.
V.R(A.aaR(A.acf.Auu));this.V.A6(0x12);this.V.L(A.jb.Text);this.TR.H(Aab);this.Yx.
AZ(0x14);this.Yx.H(AH9);this.Yx.Cv(1);this.AbA.AZ(0x14);this.AbA.H(AH9);this.AbA.
Cv(0);this.PO.H(AYc);this.PO.R(A.aaR(A.acf.A4w));this.J(this.Background,0);this.
J(this.NY,0);this.J(this.Rj,0);this.J(this.V,0);this.J(this.TR,0);this.J(this.Yx
,0);this.J(this.AbA,0);this.J(this.PO,0);this.NY.S(A.aaL(A.fl.EK));this.NY.A2(A.
aaL(A.fl.Af));this.NY.Cu(A.aaL(A.fl.Il));this.Rj.S(A.aaL(A.fl.Aeq));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bh));this.TR.S(A.aaL(A.
fl.Af));this.TR.A2(A.aaL(A.fl.Ak));this.TR.Cu(A.aaL(A.fl.Bh));this.Yx.Ax(A.aaL(A.
ach.ABH));this.AbA.Ax(A.aaL(A.ach.ABH));this.H7=A._NewObject(A.Device.Rating,0);
this.PO.S(A.aaL(A.fl.Af));this.PO.A2(A.aaL(A.fl.Ak));this.PO.Cu(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.NY._Done(
);this.Rj._Done();this.V._Done();this.TR._Done();this.Yx._Done();this.AbA._Done(
);this.PO._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.NY._ReInit();this.Rj._ReInit();this.V.
_ReInit();this.TR._ReInit();this.Yx._ReInit();this.AbA._ReInit();this.PO._ReInit(
);this.Rj.R(A.aaR(A.acu.Akh));this.V.R(A.aaR(A.acf.Auu));this.PO.R(A.aaR(A.acf.A4w
));this.NY.S(A.aaL(A.fl.EK));this.NY.A2(A.aaL(A.fl.Af));this.NY.Cu(A.aaL(A.fl.Il
));this.Rj.S(A.aaL(A.fl.Aeq));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Cu(A.aaL(A.fl.Bh));this.TR.S(A.aaL(A.fl.Af));this.TR.A2(A.aaL(A.fl.Ak));this.
TR.Cu(A.aaL(A.fl.Bh));this.PO.S(A.aaL(A.fl.Af));this.PO.A2(A.aaL(A.fl.Ak));this.
PO.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhI)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgS)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVy={Animal:null,Rating:null,Cq:null,AD:null,AY:
0,Hl:function(G){var B;if(!this.Animal||!this.Rating)return;var Ge=this.AD.G5;var
Cz=(C.AG8.isPrototypeOf(B=this.AD.Ci)?B:null);if(!Cz)return;Cz.EB([B=this.Animal
,B.PP,B.EB]);Cz.BlT([B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIP]);Cz.BlU([B=
this.Rating,B.A8X,B.OnSetTimestamp]);switch(Ge%this.AY){case 1:{Cz.ATo([B=this.Animal
,B.A8x,B.AFd]);Cz.ATp([B=this.Animal,B.A8Y,B.AFG]);Cz.T(A.aaR(A.acf.Auu));}break;
default:if(this.Animal.Ara()){Cz.ATo([B=this.Animal,B.ASj,B.AwE]);Cz.ATp([B=this.
Animal,B.ASA,B.Aw6]);Cz.T(A.aaR(A.acf.ALR));}else{Cz.ATo([B=this.Animal,B.ASj,B.
AwE]);Cz.ATp([B=this.Animal,B.ASA,B.Aw6]);Cz.T(A.aaR(A.acf.BgI));}}if(this.AY>1)
Cz.A_d(true);else Cz.A_d(false);Cz.H(A.abK(Cz.M,[(B=this.AD.M)[2]-B[0],this.AD.GN
]));},DE:function(G){if(this.AY>0)switch(this.Cq.CO){case 6:this.CE(this);break;
case 7:this.Cl(this);break;default:this.Cq.NH=true;}},LY:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jx(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jx(1);else{this.Jx(2);this.AD.GS(1);this.
AD.HH(this.AD.Gr,true,null,null);}if(this.AY>0)this.AD.AbC(0,this.AY-1);},AkA:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbC(0,this.AY-1);
},CE:function(G){if(this.AD.Gr>0)this.AD.GS(this.AD.Gr-1);else this.AD.GS(this.AY-
1);this.AD.HH(this.AD.Gr,true,null,null);},Cl:function(G){if(this.AD.Gr<(this.AY-
1))this.AD.GS(this.AD.Gr+1);else this.AD.GS(0);this.AD.HH(this.AD.Gr,true,null,null
);},Jx:function(E){if(this.AY===E)return;this.AY=E;this.AD.Jx(this.AY);A.abo([this
,this.Ars,this.Jx],0);},Ars:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVy;this.H(AfB);this.Cq.Filter=147;this.
AD.AZ(0x3F);this.AD.H(AfB);this.AD.N0(C.AG8);this.AD.Ae6(160);this.AD.GS(0);this.
AD.Jx(2);this.J(this.AD,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.
AD.Hl=[this,this.Hl];},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cq._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bl:function(aSize){C.Co.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((
Ae&0x20)===0x20);var GE=this.Bo.Bw;var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hk){FQ=
A.jb.CS;GW=A.jb.Text;}if(!He){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else
if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}this.LF=He;
this.KF=Fu;this.Qs=GE;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(KY);this.V.H(BD);this.Zu(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeP={KJ:null,GJ:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KJ.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KJ.
L(this.V.AQ);},Init:function(aArg){},Ab0:function(E){if(this.GJ===E)return;this.
GJ=E;this.KJ.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CH._Init.call(
this.KJ={I:this},0);this.__proto__=C.AeP;this.H(KY);this.Background.H(KY);this.V.
H(AcL);this.V.R(Lv);this.KJ.H(IU);this.KJ.R(AYd);this.J(this.KJ,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.KJ.S(A.aaL(A.fl.Af));this.
KJ.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KJ._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KJ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KJ.S(A.aaL(
A.fl.Af));this.KJ.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvX={AB$:null,Q:null,A1:null,AF:null,Ij:null,LU:null,Ap:null,EM:null,AN4:A.jV
,AN5:A.jV,Bl:function(aSize){C.AeP.Bl.call(this,aSize);if(!this.AB$)this.KJ.H([].
concat(0,this.KJ.M.slice(1,4)));else this.KJ.H([].concat(this.Ap.M[2],this.KJ.M.
slice(1,4)));},Ai:function(Ae){var F,CA,Ta;C.AeP.Ai.call(this,Ae);var Bcp=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apd)this.Ab0(this.AN4);else
this.Ab0(this.AN5);}else{this.Ab0(A._GetAutoObject(A.Device.Converter).Rh((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ij&&!!this.A1)&&!!this.AF)&&!!this.LU)&&(((F=this.
Ij,F[1].call(F[0]))===1)||(!(CA=this.Ij,CA[1].call(CA[0]))&&(Ta=this.LU,Ta[1].call(
Ta[0])))))Bcp=true;}}this.EM.Z(Bcp);this.Ap.L(this.V.AQ);A.pe([this,this.Af_],this
);},C3:function(G){this.Am();},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)
A.pe([this,this.C3],this);},AEW:function(E){if(this.AB$===E)return;this.AB$=E;this.
Ap.Ax(E);this.Bjb();},OM:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1)A.z$([
this,this.AaC],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.AaC],E,0);if(!!E)A.pe([
this,this.AaC],this);},PQ:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaE],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaE],E,0);if(!!E)
A.pe([this,this.AaE],this);},AaE:function(G){this.Am();},AaC:function(G){this.Am(
);},Uj:function(E){if(A.aaZ(this.Ij,E))return;if(!!this.Ij)A.z$([this,this.AlV],
this.Ij,0);this.Ij=E;if(!!E)A.zX([this,this.AlV],E,0);if(!!E)A.pe([this,this.AlV
],this);},AlV:function(G){this.Am();},Af_:function(G){var F,CA;if((!this.Ij||!this.
A1)||!this.AF)return;var A2q=this.KJ.Aff([(this.KJ.String.length-(F=this.AF,F[1].
call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3L=this.KJ.Aff([this.KJ.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABa=this.KJ.Db(0x0);this.EM.H([A2q[0]-
1,ABa[1],A3L[0]+1,ABa[3]]);},ArH:function(E){if(this.AN4===E)return;this.AN4=E;this.
Am();},ArI:function(E){if(this.AN5===E)return;this.AN5=E;this.Am();},Ae2:function(
E){if(A.aaZ(this.LU,E))return;if(!!this.LU)A.z$([this,this.A2_],this.LU,0);this.
LU=E;if(!!E)A.zX([this,this.A2_],E,0);if(!!E)A.pe([this,this.A2_],this);},A2_:function(
G){this.Am();},_Init:function(aArg){C.AeP._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BT._Init.call(this.EM={I:this},0);this.__proto__=C.AvX;
this.Ap.H(AhT);this.EM.H(AYe);this.EM.Ng(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KJ.Q5([this,this.Af_]);},_Done:function(){this.__proto__=
C.AeP;this.Ap._Done();this.EM._Done();C.AeP._Done.call(this);},_ReInit:function(
){C.AeP._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeP._Mark.call(this,D);if((B=this.AB$)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ij)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ih:0,AaB:4,BdC:true,BdB:false,Bcw:true,Bdu:false,Al0:function(
G){C.Q_.Al0.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bdt()){this.Ih=A._GetAutoObject(
A.Device.Helper).Ux.Id;var Aix=A._GetAutoObject(A.Device.Helper).AQ4(this.Ih);if(
Aix)A._GetAutoObject(A.Device.Device).A5(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A3c]);else{this.AaB=A._GetAutoObject(A.Device.
Helper).AQ5(this.Ih);var BdZ=false;if((this.AaB===3)||(this.AaB===2))BdZ=A._GetAutoObject(
A.Device.Helper).A6_(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(BdZ)A._GetAutoObject(
A.Device.Device).A5(21,true,A._GetAutoObject(A.Device.Converter).Rh(this.Ih),0,null
);else switch(this.AaB){case 2:{var BM=A._GetAutoObject(A.Device.Converter).AxO(
this.Ih);A._GetAutoObject(A.Device.Device).A5(46,true,BM.toFixed(),0,[this,this.
A3c]);}break;case 3:case 1:case 0:case 4:this.A31();break;default:throw new Error(
AH_+this.AaB.toFixed());}}}},Ev:function(G){A._GetAutoObject(C.A9).Fy();},AIQ:function(
s){this.Ev(s);},A31:function(){if((this.AaB===3)||(this.AaB===2)){if((this.Bcw&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Ih)){A._GetAutoObject(A.Device.Device).A5(69,true,A.jV,0,[this
,this.A3c]);return;}else this.BBA();}A._GetAutoObject(A.Device.Helper).W.PT(this.
Ih);this.Bdu=true;this.BBC();this.Ev(this);},A3c:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A31();break;case 107:switch(As.PopupState){case 7:{this.A31();A._GetAutoObject(A.
Device.Helper).Boa(this.Ih);}break;case 8:this.Ev(this);break;default:;}break;case
69:if(As.PopupState===4)this.Ev(this);break;default:A.ab5("%s%e",AH$,As.Id);}},BBA:
function(){A._GetAutoObject(A.Device.Helper).W.Nd(this.Ih);if(this.BdB&&(A._GetAutoObject(
A.Device.Converter).S1(this.Ih)===10)){var Bb$=Math.trunc((this.Ih%1000000000000
)/10000000000);if(!Bb$&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.EB(0);else if((Bb$===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.EB(2);}},BBC:function(){if(this.
BdC){A._GetAutoObject(A.Device.Helper).W.SI(A._GetAutoObject(A.Device.Helper).A4O(
A._GetAutoObject(A.Device.Device).Ak1,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).Ak1===1)A._GetAutoObject(A.Device.Helper).A$B();
}},_Init:function(aArg){C.Q_._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dr(C.IJ);this.Number.R(A.aaR(A.acf.OR));this.Jf.H(AYf);this.
IS.H(W2);this.AkC(1);this.N.CE=[this,this.AIQ];this.N.C1(A.aaL(A.ach.E2));},_ReInit:
function(){C.Q_._ReInit.call(this);this.Number.R(A.aaR(A.acf.OR));},_className:"Application::SetTransponderScreen"
};C.ADj={Gm:null,Ll:null,Ks:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EA.Ai.call(this,Ae);this.Ll.R(A._GetAutoObject(A.acj.DU
).Af0());this.Ks.R(A._GetAutoObject(A.acj.DU).Aas());},_Init:function(aArg){C.EA.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gm={I:this},0);A.acg.Text._Init.
call(this.Ll={I:this},0);A.acg.Text._Init.call(this.Ks={I:this},0);this.__proto__=
C.ADj;this.Background.L(A.jb.Text);this.Gm.H(AYg);this.Gm.A6(0x11);this.Gm.R(A.aaR(
A.acf.Date));this.Gm.L(A.jb.Bm);this.Ll.H(AYh);this.Ll.A6(0x11);this.Ll.L(A.jb.Bm
);this.Ks.H(AYi);this.Ks.L(A.jb.Bm);this.J(this.Gm,0);this.J(this.Ll,0);this.J(this.
Ks,0);this.Gm.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af));this.Ks.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EA;this.Gm._Done();this.Ll.
_Done();this.Ks._Done();C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.
call(this);this.Gm._ReInit();this.Ll._ReInit();this.Ks._ReInit();this.Gm.R(A.aaR(
A.acf.Date));this.Gm.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af));this.Ks.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.
Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ks)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHa={Mj:null,Hp:null,H$:null,AP:null,A$:null,FV:0,Ib:0,AiL:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hp.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hp.M[2]-1,0,this.Hp.M[2]+1,aSize[
1]]);this.Mj.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mj.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiL){this.H$.R(Ro);this.H$.L(A.jb.
Text);this.Mj.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S8(this.FV,2,true));this.H$.L(A._GetAutoObject(A.acj.DU).AzM(this.FV,this.Ib));
this.Mj.L(A._GetAutoObject(A.acj.DU).AzK(this.FV,this.Ib));}this.Hp.L(this.V.AQ);
},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Alx=this.AX.Hu(
Ad,6);var Al5=this.AX.CF(Ad,8);if(this.Hr>0){var ByC=this.AX.Hu(this.Hr-1,6);var
BBe=this.AX.CF(this.Hr-1,8);var LC=A._GetAutoObject(A.Device.Helper).L9(ByC,Alx);
if(!!LC){this.AiL=false;this.FV=A._GetAutoObject(A.acj.DU).Alu(LC,BBe,Al5);}else{
this.AiL=true;this.FV=0;}}else{this.AiL=true;this.FV=0;}this.T(A._GetAutoObject(
A.acj.KK).ACM(Alx));this.Hp.R(A._GetAutoObject(A.Device.Converter).Ak7(Al5));this.
Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mj={I:this},0);A.acg.Text.
_Init.call(this.Hp={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A$={I:this},0);this.__proto__=
C.AHa;this.V.H(O5);this.Mj.H(As9);this.Hp.H(AIa);this.Hp.A6(0x12);this.Hp.R(Rm);
this.Hp.L(A.jb.Text);this.H$.H(AIb);this.H$.R(Rm);this.H$.L(A.jb.Text);this.AP.H(
Aoo);this.AP.L(A.jb.Bc);this.A$.H(Aop);this.A$.L(A.jb.Bc);this.J(this.Mj,0);this.
J(this.Hp,0);this.J(this.H$,0);this.J(this.AP,0);this.J(this.A$,0);this.Hp.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mj._Done();this.Hp._Done();this.H$._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mj._ReInit(
);this.Hp._ReInit();this.H$._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hp.
S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,V0:null,AhP:null,SZ:null
,KM:A.jV,CP:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LC=
A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LC){var FV=A._GetAutoObject(
A.acj.DU).Alu(LC,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdL=A.aaR(A.acf.Bg5);AdL=A._GetAutoObject(
A.Device.Helper).Nk(AdL,P$,A._GetAutoObject(A.Device.Converter).S8(FV,2,true));AdL=
A._GetAutoObject(A.Device.Helper).Nk(AdL,Ax_,A._GetAutoObject(A.acj.DU).Aas());this.
SZ.R(AdL);this.AhP.L(A._GetAutoObject(A.acj.DU).AzK(FV,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SZ.L(A._GetAutoObject(A.acj.DU).AzM(FV,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SZ.R(A.aaR(A.acf.AVw));this.AhP.L(A.jb.
AQQ);this.SZ.L(A.jb.Text);}},CC:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CW(HV);var Ac7=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac7.Initialize(8,2,0,true);Fw.CW(Ac7);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fw);this.Axu(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},Axu:function(G){this.Bg=A._NewObject(C.Gb,0);this.Bg.N0(C.AHa);this.Bg.H(Ayk
);this.Bg.Zn(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dj(this.KM);this.J(this.
Bg,0);this.Bb(this.Bg);},Ank:function(G){A._GetAutoObject(C.A9).Fy();},Dj:function(
E){if(this.KM===E)return;this.KM=E;if(!!this.Bg)this.Bg.Dj(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADj._Init.call(this.V0={I:this},0);A.acg.AK._Init.
call(this.AhP={I:this},0);A.acg.Text._Init.call(this.SZ={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cc);this.N.Z(true);this.Dr(C.IJ);this.V0.H(
Qa);this.KM=A.aaR(A.acf.Aki);this.AhP.AZ(0x1D);this.AhP.H(IU);this.SZ.AZ(0x1D);this.
SZ.H(IU);this.SZ.A6(0x12);this.SZ.R(Rm);this.J(this.V0,0);this.J(this.AhP,0);this.
J(this.SZ,0);this.N.CE=[this,this.Ank];this.N.C1(A.aaL(A.ach.E2));this.SZ.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V0._Done();this.AhP._Done(
);this.SZ._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V0._ReInit();this.AhP._ReInit();this.SZ._ReInit();this.Dj(A.aaR(A.acf.Aki
));this.SZ.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SZ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mg={DP:null,Acw:null,ARt:11,EV:0,A4M:true,ABO:false,IZ:function(G){if(A._GetAutoObject(
A.Device.Device).An.B9()>0)this.Fb(4);else A._GetAutoObject(A.Device.Device).A5(
30,true,A.jV,0,null);},CC:function(G){if(this.DP.AzW())this.DP.Ac6();else if((this.
EV===2)&&A._GetAutoObject(A.Device.Helper).W.AqU())this.Fb(5);else this.Fb(1);},
E4:function(G){this.AK2();},Ev:function(G){this.Fb(0);A._GetAutoObject(C.A9).Fy(
);},BBS:function(){A._GetAutoObject(A.Device.Device).AhH();},AK2:function(){A._GetAutoObject(
A.Device.Device).AnV();},A9k:function(E){if(this.ABO===E)return;this.ABO=E;A.abo([
this,this.Bkg,this.A9k],0);},Fb:function(E){var B;if(this.EV===E)return;this.EV=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkM();A.zX([this,this.AKr]
,[B=A._GetAutoObject(A.Device.Helper),B.Art,B.AkB],0);A.z$([this,this.AAn],[B=this.
DP,B.SC,B.Fb],0);this.BBS();}break;case 3:{A.z$([this,this.AKr],[B=A._GetAutoObject(
A.Device.Helper),B.Art,B.AkB],0);this.AK2();this.BzM();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Asn();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4M)this.BBD();else this.BBG();}break;case 4:{A.z$([this,this.AKr],[B=A._GetAutoObject(
A.Device.Helper),B.Art,B.AkB],0);this.AK2();A._GetAutoObject(A.Device.Helper).Asn(
);A.zX([this,this.BeI],[B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyJ],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARt);}break;case 5:this.Bf3();break;case
6:{A.zX([this,this.AAn],[B=this.DP,B.SC,B.Fb],0);this.DP.Ac6();}break;case 0:{A.
z$([this,this.AKr],[B=A._GetAutoObject(A.Device.Helper),B.Art,B.AkB],0);this.AK2(
);}break;default:throw new Error(Ayq);}A.abo([this,this.SC,this.Bwh],0);},Bwh:function(
Aq){this.Fb(Aq);},AKr:function(G){if(!!A._GetAutoObject(A.Device.Helper).Ux){if(
this.EV===1)this.Fb(3);else A.ab5("%s%e",AYj,this.EV);}else A.ab5("%s",AIc);},BBD:
function(){A._GetAutoObject(A.Device.Device).A5(13,true,A._GetAutoObject(A.Device.
Helper).Ak3(A._GetAutoObject(A.Device.Helper).Ux.Id).toFixed(),0,[this,this.Bz1]
);},Bz1:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
As&&((As.PopupState===4)||(As.PopupState===3))){if(this.BcA(false))A._GetAutoObject(
C.A9).Cd(31);else{A._GetAutoObject(A.Device.Helper).AkM();this.Fb(1);}}else if(!
!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkM();this.Fb(1);}},
BcA:function(AiY){if(A._GetAutoObject(A.Device.Device).An.Lg()){A._GetAutoObject(
A.Device.Device).A5(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gp();A._GetAutoObject(
A.Device.Helper).Aqe(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.PT(A._GetAutoObject(A.Device.Helper).Ux.Id);if(!!A._GetAutoObject(A.Device.
Helper).AhD){var AlH=A._GetAutoObject(A.Device.Helper).AhD.AON();A._GetAutoObject(
A.Device.Helper).W.Ab1(AlH);A._GetAutoObject(A.Device.Helper).W.Any(AlH);}if(A._GetAutoObject(
A.Device.Helper).AQ5(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nd(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SI(A._GetAutoObject(A.Device.Helper).BgT(A._GetAutoObject(A.Device.
Device).Agw,A._GetAutoObject(A.Device.Helper).W));if(AiY){A._GetAutoObject(A.Device.
Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);var L7=A._GetAutoObject(A.Device.
Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SP(L7);if(A._GetAutoObject(A.Device.Helper).Am1()){if(A._GetAutoObject(A.
Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B0=A._NewObject(A.Device.Rating
,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B0.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abn(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B0.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B0.Ch(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Agw)A._GetAutoObject(
A.Device.Helper).A$B();}return true;},BzM:function(){if(!!A._GetAutoObject(A.Device.
Helper).Ux){var AJh=true;if(A._GetAutoObject(A.Device.Helper).Ux.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJh=A._GetAutoObject(A.Device.Helper).A7k(A._GetAutoObject(
A.Device.Helper).Ux.Id);if(!AJh&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.BcA(true);AJh=A._GetAutoObject(A.Device.Helper).A7k(A._GetAutoObject(A.
Device.Helper).Ux.Id);}}if(AJh)this.Fb(5);else this.Fb(2);}else{A.ab5("%s",AIc);
return;}},BeI:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARt){A.z$([this,this.BeI],[B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyJ
],0);if(A._GetAutoObject(A.Device.Helper).W.AqU())this.Fb(5);else this.Fb(1);}},
Bf3:function(){if(this.ABO===true)this.Fb(6);else A._GetAutoObject(C.A9).Cd(24);
},BBG:function(){A._GetAutoObject(A.Device.Device).A5(36,true,A.jV,0,[this,this.
BAU]);},BAU:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkM();this.Fb(1);}},AAn:function(G){if(!this.DP.EV)this.Fb(1);},A22:function(G
){},Bwr:function(s){this.A22(s);},Bkg:function(){return this.ABO;},SC:function(){
return this.EV;},_Init:function(aArg){C.Q_._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acw={I:this},0);this.__proto__=C.Mg;this.N.Z(true);this.Dr(C.AqV);this.
Number.H(AYk);this.Number.R(A.aaR(A.acf.A_4));this.Jf.H(AYl);this.IS.H(AYm);this.
Acw.H(AYn);this.Acw.R(AYo);this.Acw.L(A.jb.Text);this.J(this.Acw,0);this.N.CE=[this
,this.Ev];this.N.Cg=[this,this.Bwr];this.N.C1(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Acw.S(A.aaL(A.fl.H1));this.DP=A._GetAutoObject(C.DP);},_Done:function(
){this.__proto__=C.Q_;this.Acw._Done();C.Q_._Done.call(this);},_ReInit:function(
){C.Q_._ReInit.call(this);this.Acw._ReInit();this.Number.R(A.aaR(A.acf.A_4));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q_._Mark.call(this,D);if((B=
this.DP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acw)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4A={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Ao_:-1,EV:0,BxR:function(){var BfI=false;
var Oj=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(A.
Device.Device).Bt.HI().toFixed(),0,null);else if(Oj){BfI=true;var B0=A._NewObject(
A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axq(B0,5);B0.OnSetAppearance(3);B0.Ch(A._GetAutoObject(
A.Device.Device).Bt);}else{var B0=A._NewObject(A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axq(B0
,5);B0.OnSetAppearance(1);B0.Ch(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(BfI)A._GetAutoObject(A.Device.Helper).W.Un(false);if(Oj)A.
_GetAutoObject(A.Device.Helper).W.AnQ(false);else A._GetAutoObject(A.Device.Helper
).W.AnQ(true);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A5(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A5(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BxT:function(){A._GetAutoObject(
A.Device.Helper).W.AGw(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A5(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);else A._GetAutoObject(
A.Device.Device).A5(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);},Qm:function(ED){switch(ED){case 4:this.BxR();break;case
128:A._GetAutoObject(C.A9).Cd(7);break;case 16:A._GetAutoObject(C.A9).Cd(36);break;
case 1:A._GetAutoObject(C.A9).Cd(10);break;case 2:A._GetAutoObject(C.A9).Cd(11);
break;case 8:this.BxT();break;case 64:A._GetAutoObject(C.A9).Cd(29);break;case 32:
A._GetAutoObject(C.A9).Cd(48);break;case 256:A._GetAutoObject(C.A9).Cd(21);break;
case 512:A._GetAutoObject(C.A9).Cd(30);break;case 1024:this.BzJ();break;case 262144:
this.BB8();break;case 2048:this.Ac6();break;case 4096:this.Bcs(false);break;case
8192:this.BxS();break;case 16384:this.BzI();break;case 32768:this.Byg();break;case
524288:this.Byh();break;case 65536:this.ByF();break;case 131072:this.BBu();break;
case 0:break;default:throw new Error(AYp);}},BcC:function(ED,Bxn){var EP=A._NewObject(
C.Wj,0);EP.AbZ(false);EP.Aj(true);EP.AR=Bxn;EP.Blr(ED);switch(ED){case 1:{EP.T(A.
aaR(A.acf.AnW));EP.DB(A.aaL(A.ach.ALH));}break;case 2:{EP.T(A.aaR(A.acf.A_O));EP.
DB(A.aaL(A.ach.ALI));}break;case 4:{EP.T(A.aaR(A.acf.Alarm));EP.DB(A.aaL(A.ach.ALJ
));EP.AFt(true);}break;case 8:{EP.T(A.aaR(A.acf.Ar_));EP.DB(A.aaL(A.ach.ALK));EP.
AFt(true);}break;case 16:{EP.T(A.aaR(A.acf.AMg));EP.DB(A.aaL(A.ach.ALL));}break;
case 32:{EP.T(A.aaR(A.acf.AnimalLoss));EP.DB(A.aaL(A.ach.ALM));}break;case 64:{EP.
T(A.aaR(A.acf.Unregister));EP.DB(A.aaL(A.ach.ALN));}break;case 128:{EP.T(A.aaR(A.
acf.Edit));EP.DB(A.aaL(A.ach.ALO));}break;case 256:{EP.T(A.aaR(A.acf.Weighing));
EP.DB(A._GetAutoObject(A.acj.DU).Bzi());}break;case 512:{EP.T(A.aaR(A.acf.ARS));
EP.DB(A.aaL(A.ach.ALz));}break;case 1024:{EP.T(A.aaR(A.acf.LinkTransponder));EP.
DB(A.aaL(A.ach.ALA));}break;case 262144:{EP.T(A.aaR(A.acf.UnlinkTransponder));EP.
DB(A.aaL(A.ach.ALG));}break;case 2048:{EP.T(A.aaR(A.acf.Tv));EP.DB(A.aaL(A.ach.ALB
));}break;case 4096:{EP.T(A.aaR(A.acf.Calving));EP.DB(A.aaL(A.ach.ALC));}break;case
8192:{EP.T(A.aaR(A.acf.DryOff));EP.DB(A.aaL(A.ach.ALD));EP.AFt(true);}break;case
16384:{EP.T(A.aaR(A.acf.Bh9));EP.DB(A.aaL(A.ach.ALE));}break;case 131072:{EP.T(A.
aaR(A.acf.Bom));EP.DB(A.aaL(A.ach.ALF));}break;default:A.ab5("%s",(AYq+ED.toFixed(
))+AYr);}return EP;},ByS:function(){this.Ao_=this.Ao_+1;if(this.Ao_>=this.AutoActions.
NQ())this.Fb(0);else this.Fb(2);},BBi:function(){this.Ao_=-1;},AzW:function(){return(
this.Ao_>-1)&&!this.BzC();},BzC:function(){return this.Ao_>=this.AutoActions.NQ(
);},Fb:function(E){if(this.EV===E)return;this.EV=E;switch(E){case 1:this.ByS();break;
case 2:{var Aaj=this.AutoActions.OD(this.Ao_);if(this.A4x(A._GetAutoObject(A.Device.
Helper).W,Aaj))this.Qm(Aaj);else A._GetAutoObject(A.Device.Device).A5(64,true,(this.
ActionToString.Lu(Aaj)+As7)+this.AnimalTypeToString.Lu(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MT]);}break;case 0:this.BBi();break;default:throw new
Error(Ayq);}A.abo([this,this.SC,this.Fb],0);},MT:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;if((As.Id===63)&&(As.PopupState===7))this.
Bcs(true);if((As.Id===32)&&(As.PopupState===7))A._GetAutoObject(C.A9).Cd(45);if((((
As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8))&&this.AzW())this.
Fb(1);},Bcu:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BzJ:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A9).Cd(
45);else A._GetAutoObject(A.Device.Device).A5(32,true,A.jV,0,[this,this.MT]);},Ac6:
function(){this.Fb(1);},BBg:function(){var Oj=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oj&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lg())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(A.Device.Device
).Bt.HI().toFixed(),0,null);else{var B0=A._NewObject(A.Device.Rating,0);B0.Gp();
B0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axq(B0,5);B0.Ch(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Un(false);if(Oj)A._GetAutoObject(
A.Device.Helper).W.AnQ(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A5(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BBh:function(){A._GetAutoObject(
A.Device.Helper).W.AGw(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A5(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bcs:function(ByW){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(ByW===false))A._GetAutoObject(A.Device.
Device).A5(63,true,A.jV,0,[this,this.MT]);else A._GetAutoObject(C.A9).Cd(54);},BxS:
function(){A._GetAutoObject(A.Device.Helper).W.ArQ(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A5(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A5(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BzI:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A9).Cd(81);else A._GetAutoObject(A.
Device.Device).A5(69,true,A.jV,0,[this,this.MT]);},Byg:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae3(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A5(65,true,A.jV,2000,[this,this.MT
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae4(false);A._GetAutoObject(A.Device.
Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).A5(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);}}},ByF:function(){A._GetAutoObject(A.Device.Helper).W.Ae3(false);A._GetAutoObject(
A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae3(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A5(65,true,A.jV,2000,[this,this.MT
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A5(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);else A._GetAutoObject(A.Device.Device).A5(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},A4x:function(Em,ED
){var Qw=false;switch(ED){case 32768:Qw=Em.IsRegistrationNoticePending&&!!Em.NaisIdMother;
break;case 524288:Qw=Em.IsRegistrationNoticePending&&!Em.NaisIdMother;break;case
4096:case 8192:switch(Em.AnimalType){case 1:Qw=true;break;default:;}break;case 512:
switch(Em.AnimalType){case 0:Qw=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qw=true;break;default:A.ab5("%s",AYs+
ED.toFixed());}return Qw;},BBu:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A9).Cd(80);else A._GetAutoObject(A.Device.Device).A5(
69,true,A.jV,0,[this,this.MT]);},BB8:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A5(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MT]);else{A._GetAutoObject(A.
Device.Helper).W.PT(0);A._GetAutoObject(A.Device.Helper).W.SI(A._GetAutoObject(A.
Device.Helper).A4O(A._GetAutoObject(A.Device.Device).An1,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).A5(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MT]);}},Byh:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae4(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A5(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},SC:function(){return this.EV;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A4A;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALT={AaZ:null,Aqg:null,Fb:function(E){if(this.EV===E)return;C.Mg.Fb.call(this
,E);switch(E){case 1:this.Dr(C.AqV);break;case 5:case 6:this.Dr(C.IJ);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayq);}},A22:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mg._Init.call(this
,aArg);A.acg.Text._Init.call(this.AaZ={I:this},0);C.ALU._Init.call(this.Aqg={I:this
},0);this.__proto__=C.ALT;this.A9k(true);this.AaZ.H(AYt);this.AaZ.R(A.aaR(A.acf.
Tv));this.AaZ.L(A.jb.Text);this.Aqg.H(AYu);this.J(this.AaZ,0);this.J(this.Aqg,0);
this.N.Cs(A.aaL(A.ach.AeA));this.AaZ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Mg;this.AaZ._Done();this.Aqg._Done();C.Mg._Done.call(this);},_ReInit:function(
){C.Mg._ReInit.call(this);this.AaZ._ReInit();this.Aqg._ReInit();this.AaZ.R(A.aaR(
A.acf.Tv));this.AaZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mg._Mark.call(
this,D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqg)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
Ia:null,J0:null,A22:function(G){if(this.Ia.NV(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Mg._Init.call(this,aArg);A.acg.Text._Init.call(this.
J0={I:this},0);this.__proto__=C.ManualActionScanScreen;this.J0.H(AYv);this.J0.KR(
true);this.J0.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABC));this.
J0.L(A.jb.Text);this.J(this.J0,0);this.N.Cs(A.aaL(A.ach.AeA));this.J0.S(A.aaL(A.
fl.Af));this.Ia=A._GetAutoObject(C.Pk);},_Done:function(){this.__proto__=C.Mg;this.
J0._Done();C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.call(this);this.
J0._ReInit();this.J0.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABC
));this.J0.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mg._Mark.call(this,D);if((
B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.J0)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALU={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABm],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Aut],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABm],this);
A.pe([this,this.Aut],this);this.H(A.abK(this.M,AYw));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYx)));},Bch:function(G){var B;var Alv=0;var Azo=0;
var Bcy;var X=this.Y.Ah;var Cx=null;Bcy=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NQ()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.Wj.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cx){Cx.H(A.abK(Cx.M,AYy));Cx.H(A.abM(Cx.M
,(Azo*58)+Bcy));Cx.H(A.abO(Cx.M,Alv*58));if(Azo>=3){Alv=Alv+1;Azo=0;}else Azo=Azo+
1;}X=X.Ah;}this.Bb(null);},A1o:function(ED){var EP=A._GetAutoObject(C.DP).BcC(ED
,null);this.J(EP,0);this.Bch(this);},AoZ:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdJ=X;X=X.Ah;if(((AdJ.U&0x400)===0x400))this.HN(
AdJ);}},ABm:function(G){this.AoZ();var O;var CB=A._GetAutoObject(C.AutoActions).
NQ();for(O=0;O<CB;O=O+1){var Aaj=A._GetAutoObject(C.AutoActions).OD(O);this.A1o(
Aaj);}A.pe([this,this.Bch],this);A.pe([this,this.Aut],this);A.pe([this,this.BCg]
,this);},Aut:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)
){if(((X.U&0x400)===0x400)){var Aa=(C.Wj.isPrototypeOf(X)?X:null);Aa.AFt(false);
}X=X.Ah;}},BCg:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){var Aa=(C.Wj.isPrototypeOf(X)?X:null);var Bx8=A._GetAutoObject(
C.AutoActions).NQ();if(!!Aa){var O;Aa.A9g(false);for(O=0;O<Bx8;O=O+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OD(O)){Aa.A9g(true);Aa.Bmy(AYz+(O+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.ALU;this.Y.JR(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Y._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DP={_Init:function(
){C.A4A._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APw={Lk:null,T5:null,Init:function(aArg){this.Lk.R(A._GetAutoObject(
A.acj.Temperature).AlG());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.
Text._Init.call(this.Lk={I:this},0);C.CH._Init.call(this.T5={I:this},0);this.__proto__=
C.APw;this.Lk.H(AYA);this.Lk.A6(0x12);this.Lk.L(A.jb.Text);this.T5.H(Aoq);this.T5.
R((A.aaR(A.acf.Ahi)+AId)+A.aaR(A.acf.Kl));this.T5.A6(0x12);this.T5.L(A.jb.Text);
this.J(this.Lk,0);this.J(this.T5,0);this.Lk.S(A.aaL(A.fl.Af));this.T5.S(A.aaL(A.
fl.Ak));this.T5.A2(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dc;this.Lk._Done();this.T5._Done();C.Dc._Done.call(this);},_ReInit:function(){
C.Dc._ReInit.call(this);this.Lk._ReInit();this.T5._ReInit();this.T5.R((A.aaR(A.acf.
Ahi)+AId)+A.aaR(A.acf.Kl));this.Lk.S(A.aaL(A.fl.Af));this.T5.S(A.aaL(A.fl.Ak));this.
T5.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.
Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T5)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ADh={Jw:null,D0:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.call(this.Jw={I:this}
,0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=C.ADh;this.Jw.H(AYB
);this.Jw.KR(true);this.Jw.A6(0x14);this.Jw.R(A.aaR(A.acf.AhO)+AIe);this.Jw.L(A.
jb.Text);this.D0.H(Aoq);this.D0.KR(true);this.D0.R(A.aaR(A.acf.AF1));this.D0.L(A.
jb.Text);this.J(this.Jw,0);this.J(this.D0,0);this.Jw.S(A.aaL(A.fl.Ak));this.D0.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dc;this.Jw._Done();this.D0._Done(
);C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Jw._ReInit(
);this.D0._ReInit();this.Jw.R(A.aaR(A.acf.AhO)+AIe);this.D0.R(A.aaR(A.acf.AF1));
this.Jw.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Jw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D0
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TU={I9:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.
I9={I:this},0);this.__proto__=C.TU;this.I9.H(AIf);this.I9.R((((A.aaR(A.acf.RO)+AcQ
)+AIg)+A.aaR(A.acf.A$Q))+Ob);this.I9.A6(0x12);this.I9.L(A.jb.Text);this.J(this.I9
,0);this.I9.S(A.aaL(A.fl.Af));this.I9.A2(A.aaL(A.fl.Ak));this.I9.Cu(A.aaL(A.fl.Bh
));},_Done:function(){this.__proto__=C.Dc;this.I9._Done();C.Dc._Done.call(this);
},_ReInit:function(){C.Dc._ReInit.call(this);this.I9._ReInit();this.I9.R((((A.aaR(
A.acf.RO)+AcQ)+AIg)+A.aaR(A.acf.A$Q))+Ob);this.I9.S(A.aaL(A.fl.Af));this.I9.A2(A.
aaL(A.fl.Ak));this.I9.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(
this,D);if((B=this.I9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APy={Ll:null,Ks:null,CP:function(){this.A_6();},Init:function(aArg){this.A_6(
);},A_6:function(){this.Ll.R(A._GetAutoObject(A.acj.DU).Af0());this.Ks.R(A._GetAutoObject(
A.acj.DU).Aas());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.
call(this.Ll={I:this},0);C.CH._Init.call(this.Ks={I:this},0);this.__proto__=C.APy;
this.Ll.H(AYC);this.Ll.A6(0x12);this.Ll.L(A.jb.Text);this.Ks.H(Aoq);this.Ks.L(A.
jb.Text);this.J(this.Ll,0);this.J(this.Ks,0);this.Ll.S(A.aaL(A.fl.Af));this.Ks.S(
A.aaL(A.fl.Af));this.Ks.A2(A.aaL(A.fl.Ak));this.Ks.Cu(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dc;this.Ll._Done();this.Ks._Done();C.Dc.
_Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Ll._ReInit();
this.Ks._ReInit();this.Ll.S(A.aaL(A.fl.Af));this.Ks.S(A.aaL(A.fl.Af));this.Ks.A2(
A.aaL(A.fl.Ak));this.Ks.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ks
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AM8={Mj:null,Hp:null,H$:null,AP:null,A$:null,FV:0,Aay:0,Ib:0,AiL:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hp.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hp.M[2]-1,0,this.Hp.M[2]+1,aSize[
1]]);this.Mj.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mj.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiL){this.H$.R(Ro);this.H$.L(A.jb.
Text);this.Mj.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S8(this.FV,2,true));this.H$.L(A._GetAutoObject(A.acj.DU).AzM(this.FV,this.Ib));
this.Mj.L(A._GetAutoObject(A.acj.DU).AzK(this.FV,this.Ib));}if(this.Aay>0)this.Hp.
R(A._GetAutoObject(A.Device.Converter).Ak7(this.Aay));else this.Hp.R(Ro);this.Hp.
L(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Mf=
this.AX.CF(Ad,1);var Auo=this.AX.Hu(Ad,24);var AJ2=this.AX.CF(Ad,23);var Aup=this.
AX.Hu(Ad,19);this.Aay=this.AX.CF(Ad,18);if((Auo>0)&&(Auo!==Aup)){var LC=A._GetAutoObject(
A.Device.Helper).L9(Auo,Aup);if(!!LC){this.AiL=false;this.FV=A._GetAutoObject(A.
acj.DU).Alu(LC,AJ2,this.Aay);}else{this.AiL=true;this.FV=0;}}else{this.AiL=true;
this.FV=0;}this.T(Mf.toFixed());this.Ib=this.AX.AmQ(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mj={I:this},0);A.acg.Text.
_Init.call(this.Hp={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A$={I:this},0);this.__proto__=
C.AM8;this.V.H(O5);this.Mj.H(As9);this.Hp.H(AIa);this.Hp.A6(0x12);this.Hp.R(Rm);
this.Hp.L(A.jb.Text);this.H$.H(AIb);this.H$.R(Rm);this.H$.L(A.jb.Text);this.AP.H(
Aoo);this.AP.L(A.jb.Bc);this.A$.H(Aop);this.A$.L(A.jb.Bc);this.J(this.Mj,0);this.
J(this.Hp,0);this.J(this.H$,0);this.J(this.AP,0);this.J(this.A$,0);this.Hp.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mj._Done();this.Hp._Done();this.H$._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mj._ReInit(
);this.Hp._ReInit();this.H$._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hp.
S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M1={Mi:null,AP:null,A$:null,Gy:null,Xl:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Mi.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mi.M);this.Background.H([].concat(this.Mi.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gy.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A$.H([this.Gy.M[2]-1,0,this.
Gy.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gy.L(this.V.AQ
);if(!!this.Xl&&(this.Xl!==5)){this.Mi.L(A._GetAutoObject(A.acj.Assessment).Qo(this.
Xl));this.V.L(A._GetAutoObject(A.acj.Assessment).Xv(this.Xl));}else this.Mi.L(this.
Background.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var
Mf=this.AX.CF(Ad,1);var LP=this.AX.I5(Ad,13);var AlB=this.AX.I5(Ad,17);var AlK=this.
AX.H2(Ad,11);var Ay8=this.AX.Hu(Ad,4);var AfN=A._GetAutoObject(A.Device.Helper).
L9(Ay8,A._GetAutoObject(A.Device.Helper).Dv());this.Xl=A._GetAutoObject(A.Device.
Helper).AMd(LP,AlK,AlB);this.T(Mf.toFixed());if(AfN<100)this.Gy.R((AfN.toFixed()+
CQ)+A.aaR(A.acf.ALS));else this.Gy.R(A._GetAutoObject(A.acj.KK).ACN(Ay8,A._GetAutoObject(
A.Device.Helper).Dv(),AIh));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Mi={I:this},0);A.acg.AK._Init.call(this.AP={I:this
},0);A.acg.AK._Init.call(this.A$={I:this},0);A.acg.Text._Init.call(this.Gy={I:this
},0);this.__proto__=C.M1;this.Mi.H(As9);this.Background.H(AYD);this.V.H(O5);this.
AP.H(Aoo);this.AP.L(A.jb.Bc);this.A$.H(Aop);this.A$.L(A.jb.Bc);this.Gy.H(Ayr);this.
J(this.Mi,-3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Gy,0);this.Gy.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mi._Done(
);this.AP._Done();this.A$._Done();this.Gy._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mi._ReInit();this.AP._ReInit();this.A$._ReInit(
);this.Gy._ReInit();this.Gy.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AM6={Ajw:null,N9:null,AP:null,A$:null,Jr:null,AKi:0,A2p:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N9.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajw.H(this.N9.M);this.A$.H([this.N9.M[2]-1,0,this.N9.M[2]+1,aSize[1]]);
this.Jr.H([this.N9.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jr.De(this.V.AQ);if(this.AKi>0){this.Ajw.L(A._GetAutoObject(A.acj.Assessment
).Qo(this.A2p));this.N9.L(A._GetAutoObject(A.acj.Assessment).Xv(this.A2p));}else{
this.Ajw.L(this.Background.AQ);this.N9.L(this.V.AQ);}},Cf:function(Ad){if(!this.
AX)return;this.Hr=Ad;if(!!this.AX){var Iz=this.AX.CF(Ad,0);var Mf=this.AX.CF(Ad,
1);this.AKi=this.AX.CF(Ad,5);this.A2p=this.AX.I5(Ad,17);this.T(Mf.toFixed());if(
this.AKi>0)this.N9.R(A._GetAutoObject(A.Device.Converter).AkY(this.AKi));else this.
N9.R(Ro);var Xk=A._GetAutoObject(A.Device.Helper).ZN(6);A._GetAutoObject(A.Device.
Device).SP(Ad);var A0y=A._GetAutoObject(A.Device.Helper).Bix(A._GetAutoObject(A.
Device.Device).Bt,9,Iz,Xk,0);this.Jr.A9y(A0y.Get(3));this.Jr.A9A(A0y.Get(2));this.
Jr.A9z(A0y.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.Ajw={I:this},0);A.acg.Text._Init.call(this.N9={I:this},
0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A$={I:this},
0);C.Jr._Init.call(this.Jr={I:this},0);this.__proto__=C.AM6;this.N9.A6(0x12);this.
N9.R(Rm);this.N9.L(A.jb.Text);this.AP.H(Aoo);this.AP.L(A.jb.Bc);this.A$.H(Aop);this.
A$.L(A.jb.Bc);this.Jr.H(AYE);this.J(this.Ajw,0);this.J(this.N9,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Jr,0);this.N9.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ajw._Done();this.N9._Done();this.AP.
_Done();this.A$._Done();this.Jr._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ajw._ReInit();this.N9._ReInit();this.AP._ReInit();
this.A$._ReInit();this.Jr._ReInit();this.N9.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jr={Afo:null,
ColoredCounterAttrSet:null,ACe:0,ACf:0,ACd:0,KS:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKb;var ALy;var AKH;var AlS=0;if(this.ACd>0){AKb=this.ACd.toFixed(
);AlS+=AKb.length;}else{AKb=AYF;AlS++;}if(this.ACf>0){ALy=this.ACf.toFixed();AlS+=
ALy.length;}else{ALy=Ays;AlS++;}if(this.ACe>0){AKH=this.ACe.toFixed();AlS+=AKH.length;
}else{AKH=AH7;AlS++;}if(AlS<=4)this.ColoredCounterAttrSet.Aho(A.aaL(A.fl.Af));else
if(AlS<=5)this.ColoredCounterAttrSet.Aho(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Aho(A.aaL(A.fl.Bh));this.Afo.R(((((AYG+AKb)+AYH)+ALy)+AYI)+AKH);},A9z:function(E
){if(this.ACe===E)return;this.ACe=E;this.Am();},A9A:function(E){if(this.ACf===E)
return;this.ACf=E;this.Am();},A9y:function(E){if(this.ACd===E)return;this.ACd=E;
this.Am();},De:function(E){if(this.KS===E)return;this.KS=E;this.ColoredCounterAttrSet.
Ahl(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuK._Init.call(
this.Afo={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jr;this.H(AIi);this.Afo.AZ(0x3F);this.Afo.H(AIi);this.
Afo.R(Rm);this.ColoredCounterAttrSet.BlD(A.jb.E1);this.ColoredCounterAttrSet.A9p(
A.jb.H8);this.ColoredCounterAttrSet.A9o(A.jb.Gh);this.ColoredCounterAttrSet.Ahl(
A.jb.Text);this.KS=A.jb.Text;this.J(this.Afo,0);this.Afo.A9j(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Aho(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9l(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afo._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afo._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Aho(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AM5={AtA:null
,Ab$:null,Aca:null,Acb:null,Jr:null,AP:null,A$:null,Ea:null,Ls:null,Acy:null,KT:
null,KU:null,AJn:0,AJm:0,AJl:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Ab$.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Acy.H(this.
Ab$.M);this.A$.H([this.Ab$.M[2]-1,0,this.Ab$.M[2]+1,aSize[1]]);this.Aca.H([this.
Ab$.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KT.H(this.Aca.M);this.Ea.H([this.
Aca.M[2]-1,0,this.Aca.M[2]+1,aSize[1]]);this.Acb.H([this.Aca.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KU.H(this.Acb.M);this.Ls.H([this.Acb.M[2]-1,0,this.Acb.
M[2]+1,aSize[1]]);this.Jr.H([this.Acb.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jr.De(this.V.AQ);this.Ab$.L(A._GetAutoObject(A.acj.
Assessment).Qo(this.AJl));this.Aca.L(A._GetAutoObject(A.acj.Assessment).Qo(this.
AJm));this.Acb.L(A._GetAutoObject(A.acj.Assessment).Qo(this.AJn));this.Acy.L(A._GetAutoObject(
A.acj.Assessment).Xv(this.AJl));this.KT.L(A._GetAutoObject(A.acj.Assessment).Xv(
this.AJm));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xv(this.AJn));this.Acy.Z(
!this.AJl);this.KT.Z(!this.AJm);this.KU.Z(!this.AJn);this.Jr.A9y(this.AtA.Get(3)
);this.Jr.A9A(this.AtA.Get(2));this.Jr.A9z(this.AtA.Get(1));},Cf:function(Ad){if(
!this.AX)return;this.Hr=Ad;if(!!this.AX){var Iz=this.AX.CF(Ad,0);var Mf=this.AX.
CF(Ad,1);this.T(Mf.toFixed());A._GetAutoObject(A.Device.Device).SP(Ad);this.AJl=
A._GetAutoObject(A.Device.Helper).A11(A._GetAutoObject(A.Device.Device).Bt,Iz,0);
this.AJm=A._GetAutoObject(A.Device.Helper).A11(A._GetAutoObject(A.Device.Device).
Bt,Iz,-1);this.AJn=A._GetAutoObject(A.Device.Helper).A11(A._GetAutoObject(A.Device.
Device).Bt,Iz,-2);this.AtA=A._GetAutoObject(A.Device.Helper).A6r(A._GetAutoObject(
A.Device.Device).Bt,Iz,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Ab$={I:this},0);A.acg.AK._Init.call(this.Aca={I:
this},0);A.acg.AK._Init.call(this.Acb={I:this},0);C.Jr._Init.call(this.Jr={I:this
},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A$={I:this
},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.Ls={I:this
},0);A.acg.Text._Init.call(this.Acy={I:this},0);A.acg.Text._Init.call(this.KT={I:
this},0);A.acg.Text._Init.call(this.KU={I:this},0);this.__proto__=C.AM5;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Ls.L(A.jb.Bc);this.Acy.R(Aor
);this.KT.R(Aor);this.KU.R(Aor);this.J(this.Ab$,0);this.J(this.Aca,0);this.J(this.
Acb,0);this.J(this.Jr,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.Ls,0);this.J(this.Acy,0);this.J(this.KT,0);this.J(this.KU,0);this.Acy.S(A.
aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.AtA=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ab$._Done();this.Aca._Done();this.Acb._Done();this.Jr._Done();this.AP.
_Done();this.A$._Done();this.Ea._Done();this.Ls._Done();this.Acy._Done();this.KT.
_Done();this.KU._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Ab$._ReInit();this.Aca._ReInit();this.Acb._ReInit();this.Jr._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Ls._ReInit();this.Acy.
_ReInit();this.KT._ReInit();this.KU._ReInit();this.Acy.S(A.aaL(A.fl.Af));this.KT.
S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab$).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmT={H6:null,Af2:false,Bl:function(aSize){var
B;this.H6.H([(aSize[0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H6.M[0]-10,40]);C.TF.Bl.call(this,aSize);},Ai:function(Ae){C.TF.Ai.call(
this,Ae);if(this.Af2)this.H6.Cv(1);else this.H6.Cv(0);},Kb:function(G){if(this.Af2
)C.TF.Kb.call(this,G);},J8:function(G){if(this.Af2)C.TF.J8.call(this,G);},Tq:function(
AI){C.TF.Tq.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.Af2=true;this.Zu(
true);}else{this.H(A.abI(this.M,40));this.Af2=false;this.Zu(false);}},_Init:function(
aArg){C.TF._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.AmT;this.V.A6(0x11);this.H6.H(AHE);this.H6.Cv(0);this.J(this.H6,0);this.V.Cu(A.
aaL(A.fl.Bh));this.H6.Ax(A.aaL(A.ach.AqK));},_Done:function(){this.__proto__=C.TF;
this.H6._Done();C.TF._Done.call(this);},_ReInit:function(){C.TF._ReInit.call(this
);this.H6._ReInit();this.V.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TF._Mark.
call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AF0={_Init:function(aArg){C.Axh._Init.call(this,aArg);this.__proto__=C.AF0;}
,_className:"Application::OptionsOverlaySeparator"};C.AkE={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axh._Init.call(this,aArg);this.__proto__=C.AkE;},_className:"Application::OptionsOverlayNode"
};C.Zw={AR:null,_Init:function(aArg){C.AkE._Init.call(this,aArg);this.__proto__=
C.Zw;},_Mark:function(D){var B;C.AkE._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANz={Ai:function(Ae){C.OV.Ai.call(this,Ae);var FQ=A.jb.CJ;var GW=A.jb.Text;if(
this.Hk){FQ=A.jb.Text;GW=A.jb.Bm;}this.Background.L(FQ);this.V.L(GW);},_Init:function(
aArg){C.OV._Init.call(this,aArg);this.__proto__=C.ANz;},_className:"Application::DarkThemeTextItem"
};C.OV={Background:null,BT:null,V:null,Aqr:0,Hk:false,Init:function(aArg){},Bl:function(
aSize){C.Hh.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BT.H(A.abK(this.BT.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hh.Ai.call(this,Ae);this.BT.L(this.Aqr);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bi:function(E){if(this.Hk===E)return;this.Hk=E;this.Am();
},ArG:function(E){if(this.Aqr===E)return;this.Aqr=E;this.Am();},_Init:function(aArg
){C.Hh._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.
BT._Init.call(this.BT={I:this},0);C.CH._Init.call(this.V={I:this},0);this.__proto__=
C.OV;this.H(BD);this.Background.H(AIj);this.BT.H(BD);this.BT.Ng(2);this.BT.L(A.jb.
Rg);this.V.H(AYJ);this.Aqr=A.jb.Rg;this.J(this.Background,0);this.J(this.BT,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hh;this.Background._Done(
);this.BT._Done();this.V._Done();C.Hh._Done.call(this);},_ReInit:function(){C.Hh.
_ReInit.call(this);this.Background._ReInit();this.BT._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hh._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APB={Er:null,IN:null
,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.Er={
I:this},0);A.acg.Text._Init.call(this.IN={I:this},0);this.__proto__=C.APB;this.H(
O4);this.Background.H(O4);this.Er.H(AIk);this.Er.R(A.aaR(A.acf.GM));this.Er.A6(0x11
);this.Er.L(A.jb.Text);this.IN.AZ(0x3F);this.IN.H(AIl);this.IN.Hm(5);this.IN.A6(
0x14);this.IN.R(A.aaR(A.acf.AGJ));this.IN.L(A.jb.Text);this.J(this.Er,0);this.J(
this.IN,0);this.Er.S(A.aaL(A.fl.Af));this.IN.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EA;this.Er._Done();this.IN._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Er._ReInit();this.IN._ReInit();this.Er.R(
A.aaR(A.acf.GM));this.IN.R(A.aaR(A.acf.AGJ));this.Er.S(A.aaL(A.fl.Af));this.IN.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={So:null,Sp:null,AeB:null,Ag3:null,QK:null
,KS:0,LastTemperature:0,Aqx:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
So.Ax(A.aaL(A.ach.AvA));this.Sp.Ax(A.aaL(A.ach.AvA));}break;case 2:{this.So.Ax(A.
aaL(A.ach.AvD));this.Sp.Ax(A.aaL(A.ach.AvD));}break;default:{this.So.Ax(A.aaL(A.
ach.Aew));this.Sp.Ax(A.aaL(A.ach.Aew));}}this.So.L(A._GetAutoObject(A.acj.Assessment
).Qo(this.Aqx));var ApK;if(this.IsWatch)ApK=A.aaL(A.ach.AQy);else if(this.IsFever
){ApK=A.aaL(A.ach.AQx);switch(A._GetAutoObject(A.Device.Converter).Ajk(this.LastTemperature
,this.AnimalType)){case 3:this.QK.L(A.jb.Gh);break;case 2:this.QK.L(A.jb.H8);break;
case 1:this.QK.L(A.jb.E1);break;case 0:this.QK.L(A.jb.Afs);break;default:;}}else
if(this.IsAlarm){ApK=A.aaL(A.ach.AQw);if(!this.Aqx||(this.Aqx===5))this.QK.L(A.jb.
Gh);else this.QK.L(0xFF000000);}else ApK=null;this.AeB.Ax(ApK);this.Ag3.Ax(ApK);
this.QK.Ax(ApK);if(A._GetAutoObject(A.acj.Assessment).Qo(this.Aqx)===A.jb.E1)this.
Sp.L(this.KS);},EB:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AEY:function(E){if(this.Aqx===E)return;this.Aqx=E;this.Am();},De:function(
E){if(this.KS===E)return;this.KS=E;this.Am();},Ae5:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Un:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae1:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae7:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E5:function(){this.EB(0);this.AEY(0);this.Ae1(false);this.Un(false
);this.Ae5(false);this.Ae7(0);this.De(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.So={I:this},0);A.acg.Ap._Init.call(
this.Sp={I:this},0);A.acg.Ap._Init.call(this.AeB={I:this},0);A.acg.Ap._Init.call(
this.Ag3={I:this},0);A.acg.Ap._Init.call(this.QK={I:this},0);this.__proto__=C.DS;
this.H(Ale);this.So.AZ(0x3F);this.So.H(Ale);this.So.L(A.jb.CJ);this.So.A6(0x12);
this.So.Cv(0);this.Sp.AZ(0x3F);this.Sp.H(Ale);this.Sp.L(0xFF000000);this.Sp.A6(0x12
);this.Sp.Cv(1);this.AeB.AZ(0x3F);this.AeB.H(Ale);this.AeB.L(0xFF000000);this.AeB.
Cv(0);this.Ag3.AZ(0x3F);this.Ag3.H(Ale);this.Ag3.Cv(1);this.QK.AZ(0x3F);this.QK.
H(Ale);this.QK.L(A.jb.CS);this.QK.Cv(2);this.KS=A.jb.Text;this.J(this.So,0);this.
J(this.Sp,0);this.J(this.AeB,0);this.J(this.Ag3,0);this.J(this.QK,0);this.So.Ax(
A.aaL(A.ach.Aew));this.Sp.Ax(A.aaL(A.ach.Aew));},_Done:function(){this.__proto__=
A.Core.P;this.So._Done();this.Sp._Done();this.AeB._Done();this.Ag3._Done();this.
QK._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.So._ReInit();this.Sp._ReInit();this.AeB._ReInit();this.Ag3._ReInit();
this.QK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AM2={Cf:function(Ad){C.Ajz.Cf.call(this,Ad);if(!!this.AX){var BzG=this.AX.H2(
Ad,12);var Bx0=this.AX.Sk(Ad,15);this.Abc.R(A._GetAutoObject(A.Device.Helper).L9(
Bx0,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Sq.Z(BzG);this.Am();
}},_Init:function(aArg){C.Ajz._Init.call(this,aArg);this.__proto__=C.AM2;},_className:
"Application::CalfListAlarmItem"};C.ADd={D0:null,Mr:null,_Init:function(aArg){C.
TW._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mr={I:this},0);this.__proto__=C.ADd;this.D0.H(Aoq);this.D0.KR(true);this.
D0.R(A.aaR(A.acf.A5D));this.D0.L(A.jb.Text);this.Mr.H(AIm);this.Mr.I_(false);this.
Mr.L(A.jb.Text);this.Mr.A6(0x12);this.J(this.D0,-2);this.J(this.Mr,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mr.Ax(A.aaL(A.ach.ADE));},_Done:function(){this.__proto__=C.
TW;this.D0._Done();this.Mr._Done();C.TW._Done.call(this);},_ReInit:function(){C.
TW._ReInit.call(this);this.D0._ReInit();this.Mr._ReInit();this.D0.R(A.aaR(A.acf.
A5D));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TW._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kk={Background:null,BT:
null,ACF:0,ABU:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACF);this.BT.L(this.ABU);},AwD:function(E){if(this.ACF===E)return;this.ACF=E;this.
Am();},AEQ:function(E){if(this.ABU===E)return;this.ABU=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BT={I:this},0);this.__proto__=C.Kk;this.H(Aos);this.
Background.AZ(0x3C);this.Background.H(Aos);this.Background.Cv(1);this.BT.AZ(0x3C
);this.BT.H(Aos);this.ACF=A.jb.E1;this.ABU=A.jb.Text;this.J(this.Background,0);this.
J(this.BT,0);this.Background.Ax(A.aaL(A.ach.Kk));this.BT.Ax(A.aaL(A.ach.Kk));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BT._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BT._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmB={Q:null,Pp:
null,A67:false,Bl:function(aSize){C.Mn.Bl.call(this,aSize);this.V.H([].concat(this.
Pp.M[2]-this.V.Text.Jb,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mn.Ai.call(this
,Ae);this.Pp.L(this.V.AQ);},AwI:function(E){if(this.A67===E)return;this.A67=E;if(
E)this.Pp.R(AIn);else this.Pp.R(AIo);},Kf:function(G){var F;if(!!this.Q)this.AwI((
F=this.Q,F[1].call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Kf],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kf],E,0);if(!!E)
A.pe([this,this.Kf],this);},_Init:function(aArg){C.Mn._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pp={I:this},0);this.__proto__=C.AmB;this.Pp.AZ(0x34);this.Pp.
H(UU);this.Pp.R(AIo);this.J(this.Pp,0);this.Pp.S(A.aaL(A.fl.AOu));},_Done:function(
){this.__proto__=C.Mn;this.Pp._Done();C.Mn._Done.call(this);},_ReInit:function(){
C.Mn._ReInit.call(this);this.Pp._ReInit();},_Mark:function(D){var B;C.Mn._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pp)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOT={DX:function(G){C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter
).AdX(4));},_Init:function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=C.AOT;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Du:function(){return 3;},C7:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BR(aIndex);},DZ:function(A_){return A_;},H3:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APC={Gm:null,Lk:null,YN:null,Init:function(aArg){this.Lk.R(A._GetAutoObject(
A.acj.Temperature).AlG());},_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gm={I:this},0);A.acg.Text._Init.call(this.Lk={I:this},0);A.
acg.Text._Init.call(this.YN={I:this},0);this.__proto__=C.APC;this.Background.L(A.
jb.Text);this.Gm.H(AIp);this.Gm.A6(0x11);this.Gm.R(A.aaR(A.acf.Date));this.Gm.L(
A.jb.Bm);this.Lk.H(AYK);this.Lk.A6(0x12);this.Lk.L(A.jb.Bm);this.YN.H(AYL);this.
YN.A6(0x12);this.YN.R(A.aaR(A.acf.Bs));this.YN.L(A.jb.Bm);this.J(this.Gm,0);this.
J(this.Lk,0);this.J(this.YN,0);this.Gm.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af
));this.YN.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EA;this.Gm._Done();this.Lk._Done();this.YN._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Gm._ReInit();this.Lk._ReInit();this.YN._ReInit(
);this.Gm.R(A.aaR(A.acf.Date));this.YN.R(A.aaR(A.acf.Bs));this.Gm.S(A.aaL(A.fl.Af
));this.Lk.S(A.aaL(A.fl.Af));this.YN.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EA._Mark.call(this,D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Tz={Le:null,AjN:false,Init:function(
aArg){var B;A.zX([this,this.Bbh],[B=A._GetAutoObject(A.Device.Device),B.AEp,B.AIF
],0);this.AGC(this);A.pe([this,this.AyK],this);},DE:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.On(this);break;case 7:this.MU(
this);break;default:D5.NH=true;}},CC:function(G){var B;if(!!this.Le)this.Le.CC(this
);C.AB.CC.call(this,G);},E4:function(G){var B;if(!!this.Le)this.Le.E4(this);C.AB.
E4.call(this,G);},Ank:function(G){A._GetAutoObject(C.A9).Fy();},AGC:function(G){
var B;if(!!this.Le){this.Le.E4(this);this.HN(this.Le);}if(this.AjN)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Le=A._NewObject(C.AMk,0);break;case 1:this.Le=A.
_NewObject(C.AMl,0);break;case 3:this.Le=A._NewObject(C.AMj,0);break;case 2:this.
Le=A._NewObject(C.AMm,0);break;default:throw new Error(AIq);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Le=A._NewObject(C.AMn,0);break;case 1:this.Le=A.
_NewObject(C.AMw,0);break;case 3:this.Le=A._NewObject(C.AMq,0);break;case 2:this.
Le=A._NewObject(C.AMB,0);break;default:throw new Error(AIq);}this.HO(this);this.
J(this.Le,0);this.Le.H(Fe);this.Le.Zr([this,this.A0k]);this.Le.CC(this);this.Bb(
this.Le);},Bbh:function(s){this.AGC(s);},Bnw:function(G){A._GetAutoObject(A.Device.
Device).AeV(0);},ATB:function(G){A._GetAutoObject(A.Device.Device).AeV(1);},ATA:
function(G){A._GetAutoObject(A.Device.Device).AeV(3);},ATC:function(G){A._GetAutoObject(
A.Device.Device).AeV(2);},HO:function(G){this.N.C1(A.aaL(A.ach.E2));this.N.Hx(A.
jV);this.N.CE=[this,this.Ank];this.N.AE4(A.aaL(A.fl.Ak));},AyK:function(s){this.
HO(s);},Bmh:function(E){if(this.AjN===E)return;this.AjN=E;A.pe([this,this.Bbh],this
);},A_A:function(G){this.Bmh(!this.AjN);},Bnz:function(G){A._GetAutoObject(A.Device.
Device).A5(31,true,A.jV,0,null);},MU:function(G){},BGh:function(s){this.MU(s);},
On:function(G){},BGg:function(s){this.On(s);},BeF:function(G){var FP=A._GetAutoObject(
A.Device.Device).D9;FP=FP+1;if(FP>=4)FP=0;A._GetAutoObject(A.Device.Device).AeV(
FP);},BAz:function(G){var FP=A._GetAutoObject(A.Device.Device).D9;FP=FP-1;if(FP<
0)FP=3;A._GetAutoObject(A.Device.Device).AeV(FP);},Af7:function(G){},A0k:function(
s){this.Af7(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Tz;this.Background.H(Cc);this.N.Z(true);this.N.OO(true);this.N.OP(true);this.Dr(
C.APr);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Le)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dn:null,CC:function(G){},AIE:function(s){this.CC(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyA:function(s){
this.E4(s);},Zr:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dn.BL=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=
C.D9;this.H(UX);this.AttrSet.A9p(A.jb.Gh);this.AttrSet.A9o(A.jb.H8);this.AttrSet.
Ahl(A.jb.Text);this.Dn.Filter=1;this.AttrSet.Aho(A.aaL(A.fl.Ak));this.AttrSet.A9l(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dn._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dn._ReInit();this.AttrSet.Aho(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMn={RS:
null,AaU:null,Ty:null,Tx:null,RX:null,QC:null,RY:null,RU:null,RW:null,RT:null,CP:
function(){var B;this.RS.Cf(this);this.AaU.Cf(this);this.Ty.Cf(this);this.Tx.Cf(
this);this.RX.Cf(this);this.QC.Cf(this);this.RY.Cf(this);this.RU.Cf(this);this.RW.
Cf(this);this.RT.Cf(this);},GH:function(G){C.RZ.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RS.Z(true);this.AaU.Z(false);
this.RU.Z(false);this.RW.Z(false);this.RT.Z(false);this.RX.Z(true);this.QC.Z(true
);this.RY.Z(true);}break;case 1:{this.RS.Z(false);this.AaU.Z(true);this.RU.Z(true
);this.RW.Z(true);this.RT.Z(true);this.RX.Z(false);this.QC.Z(false);this.RY.Z(false
);}break;default:A.ab5("%s%e",Ala,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MO],this);},_Init:function(aArg){C.RZ._Init.call(this,aArg);C.
RS._Init.call(this.RS={I:this},0);C.AMi._Init.call(this.AaU={I:this},0);C.Ty._Init.
call(this.Ty={I:this},0);C.Tx._Init.call(this.Tx={I:this},0);C.RX._Init.call(this.
RX={I:this},0);C.QC._Init.call(this.QC={I:this},0);C.RY._Init.call(this.RY={I:this
},0);C.RU._Init.call(this.RU={I:this},0);C.RW._Init.call(this.RW={I:this},0);C.RT.
_Init.call(this.RT={I:this},0);this.__proto__=C.AMn;this.RS.H(BD);this.RS.Aj(true
);this.RS.Bi(false);this.AaU.H(IU);this.AaU.Aj(true);this.AaU.Bi(false);this.Ty.
H(Qa);this.Ty.Aj(true);this.Ty.Bi(true);this.Tx.H(Aab);this.Tx.Aj(true);this.Tx.
Bi(false);this.RX.H(Alc);this.RX.Aj(true);this.RX.Bi(true);this.QC.H(Aon);this.QC.
Aj(true);this.QC.Bi(false);this.RY.H(As3);this.RY.Aj(true);this.RY.Bi(true);this.
RU.H(Xb);this.RU.Aj(true);this.RU.Bi(true);this.RW.H(AYM);this.RW.Aj(true);this.
RW.Bi(false);this.RT.H(AYN);this.RT.Aj(true);this.RT.Bi(true);this.J(this.RS,0);
this.J(this.AaU,0);this.J(this.Ty,0);this.J(this.Tx,0);this.J(this.RX,0);this.J(
this.QC,0);this.J(this.RY,0);this.J(this.RU,0);this.J(this.RW,0);this.J(this.RT,
0);},_Done:function(){this.__proto__=C.RZ;this.RS._Done();this.AaU._Done();this.
Ty._Done();this.Tx._Done();this.RX._Done();this.QC._Done();this.RY._Done();this.
RU._Done();this.RW._Done();this.RT._Done();C.RZ._Done.call(this);},_ReInit:function(
){C.RZ._ReInit.call(this);this.RS._ReInit();this.AaU._ReInit();this.Ty._ReInit();
this.Tx._ReInit();this.RX._ReInit();this.QC._ReInit();this.RY._ReInit();this.RU.
_ReInit();this.RW._ReInit();this.RT._ReInit();this.CP();},_Mark:function(D){var B;
C.RZ._Mark.call(this,D);if((B=this.RS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Tx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RY)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RW).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMB={AkQ:function(L2){if(!L2)return;var Fw=A._NewObject(
A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CW(HV);var Ac7=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac7.Initialize(8,2,0,true);Fw.CW(Ac7);L2.Bk(Fw);
},ADR:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Ph=A.
_GetAutoObject(A.Device.Device).Bt.B9();if(Ph<2)return false;var BB2=A._GetAutoObject(
A.Device.Device).Bt.Hu(0,6);var BB3=A._GetAutoObject(A.Device.Device).Bt.Hu(Ph-1
,6);var A1Q=A._NewObject(A.Core.Bs,0);A1Q.Initialize(BB2);var A3V=A._NewObject(A.
Core.Bs,0);A3V.Initialize(BB3);if((A1Q.AbX()!==A3V.AbX())||(A1Q.Year!==A3V.Year)
)return true;else return false;},_Init:function(aArg){C.AaW._Init.call(this,aArg
);this.__proto__=C.AMB;this.AS6(C.AHa);this.AS7(C.ADj);this.ASW(C.QC);this.ArM(A.
aaR(A.acf.AVw));this.Dj(A.aaR(A.acf.Aki));},_ReInit:function(){C.AaW._ReInit.call(
this);this.ArM(A.aaR(A.acf.AVw));this.Dj(A.aaR(A.acf.Aki));},_className:"Application::AnimalWeights"
};C.AMw={AkQ:function(L2){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CW(HV);var AA$=A._NewObject(A.Device.Int32FilterCriterion
,0);AA$.Initialize(7,2,0,true);Fw.CW(AA$);L2.Bk(Fw);},ADR:function(){return A._GetAutoObject(
A.Device.Device).Bt.B9()>0;},_Init:function(aArg){C.AaW._Init.call(this,aArg);this.
__proto__=C.AMw;this.AS6(C.AUT);this.AS7(C.APC);this.ASW(C.Ty);this.ArM(A.aaR(A.
acf.A7s));this.Dj(A.aaR(A.acf.Aro));},_ReInit:function(){C.AaW._ReInit.call(this
);this.ArM(A.aaR(A.acf.A7s));this.Dj(A.aaR(A.acf.Aro));},_className:"Application::AnimalTemperatures"
};C.AT0={VB:null,VC:null,XU:null,AgE:null,Ky:null,AP:null,A$:null,Ea:null,Ls:null
,AnP:null,KT:null,KU:null,ZK:null,ZL:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Ky.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VB.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VB.M[2]-1,0,this.VB.M[2]+1,aSize[1]]);this.VC.H([this.VB.M[2],0,this.VB.M[2]+22,
aSize[1]]);this.Ls.H([this.VC.M[2]-1,0,this.VC.M[2]+1,aSize[1]]);this.XU.H([this.
VC.M[2],0,this.VC.M[2]+22,aSize[1]]);this.AnP.H([this.XU.M[2]-1,0,this.XU.M[2]+1
,aSize[1]]);this.AgE.H([this.XU.M[2],0,aSize[0],aSize[1]]);this.KT.H(this.VB.M);
this.KU.H(this.VC.M);this.ZK.H(this.XU.M);this.ZL.H(this.AgE.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Ky.L(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;
this.Hr=Ad;if(!!this.AX){var Alx=this.AX.Hu(Ad,6);var A08=this.AX.I5(Ad,3);var A1M=
this.AX.I5(Ad,2);var A1L=this.AX.I5(Ad,5);var A3J=this.AX.I5(Ad,4);this.T(A._GetAutoObject(
A.acj.KK).ACM(Alx));this.Ky.R(A._GetAutoObject(A.acj.KK).A6l(Alx));this.VB.L(A._GetAutoObject(
A.acj.Assessment).Qo(A08));this.VC.L(A._GetAutoObject(A.acj.Assessment).Qo(A1M));
this.XU.L(A._GetAutoObject(A.acj.Assessment).Qo(A1L));this.AgE.L(A._GetAutoObject(
A.acj.Assessment).Qo(A3J));this.KT.L(A._GetAutoObject(A.acj.Assessment).Xv(A08));
this.KU.L(A._GetAutoObject(A.acj.Assessment).Xv(A1M));this.ZK.L(A._GetAutoObject(
A.acj.Assessment).Xv(A1L));this.ZL.L(A._GetAutoObject(A.acj.Assessment).Xv(A3J));
this.KT.Z(A08===5);this.KU.Z(A1M===5);this.ZK.Z(A1L===5);this.ZL.Z(A3J===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.
VB={I:this},0);A.acg.AK._Init.call(this.VC={I:this},0);A.acg.AK._Init.call(this.
XU={I:this},0);A.acg.AK._Init.call(this.AgE={I:this},0);A.acg.Text._Init.call(this.
Ky={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A$={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.
Ls={I:this},0);A.acg.AK._Init.call(this.AnP={I:this},0);A.acg.Text._Init.call(this.
KT={I:this},0);A.acg.Text._Init.call(this.KU={I:this},0);A.acg.Text._Init.call(this.
ZK={I:this},0);A.acg.Text._Init.call(this.ZL={I:this},0);this.__proto__=C.AT0;this.
V.H(O5);this.VB.H(AYO);this.VC.H(AYP);this.XU.H(AYQ);this.AgE.H(AYR);this.Ky.R(Rm
);this.Ky.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ls.L(A.jb.Bc);this.AnP.L(A.jb.Bc);this.KT.H(AYS);this.KT.R(Ro);this.KU.H(AYT
);this.KU.R(Ro);this.ZK.H(AYU);this.ZK.R(Ro);this.ZL.H(AYV);this.ZL.R(Ro);this.J(
this.VB,0);this.J(this.VC,0);this.J(this.XU,0);this.J(this.AgE,0);this.J(this.Ky
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Ls,0);this.
J(this.AnP,0);this.J(this.KT,0);this.J(this.KU,0);this.J(this.ZK,0);this.J(this.
ZL,0);this.Ky.S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af
));this.ZK.S(A.aaL(A.fl.Af));this.ZL.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.VB._Done();this.VC._Done();this.XU._Done();this.AgE._Done(
);this.Ky._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Ls._Done(
);this.AnP._Done();this.KT._Done();this.KU._Done();this.ZK._Done();this.ZL._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.VB._ReInit(
);this.VC._ReInit();this.XU._ReInit();this.AgE._ReInit();this.Ky._ReInit();this.
AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Ls._ReInit();this.AnP._ReInit(
);this.KT._ReInit();this.KU._ReInit();this.ZK._ReInit();this.ZL._ReInit();this.Ky.
S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.ZK.S(
A.aaL(A.fl.Af));this.ZL.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.VB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VC)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APA={Gm:null,YT:null,YP:null,YQ:null,YR:null,YS:
null,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gm={I:this},0);A.acg.Text._Init.call(this.YT={I:this},0);A.acg.Text._Init.call(this.
YP={I:this},0);A.acg.Text._Init.call(this.YQ={I:this},0);A.acg.Text._Init.call(this.
YR={I:this},0);A.acg.Text._Init.call(this.YS={I:this},0);this.__proto__=C.APA;this.
Background.L(A.jb.Text);this.Gm.H(AIp);this.Gm.A6(0x11);this.Gm.R(A.aaR(A.acf.Date
));this.Gm.L(A.jb.Bm);this.YT.H(AIf);this.YT.A6(0x12);this.YT.R(A.aaR(A.acf.Bs));
this.YT.L(A.jb.Bm);this.YP.H(AYW);this.YP.A6(0x12);this.YP.R(A.aaR(A.acf.AT2));this.
YP.L(A.jb.Bm);this.YQ.H(AYX);this.YQ.A6(0x12);this.YQ.R(A.aaR(A.acf.AT3));this.YQ.
L(A.jb.Bm);this.YR.H(AYY);this.YR.A6(0x12);this.YR.R(A.aaR(A.acf.AOq));this.YR.L(
A.jb.Bm);this.YS.H(AYZ);this.YS.A6(0x12);this.YS.R(A.aaR(A.acf.ANq));this.YS.L(A.
jb.Bm);this.J(this.Gm,0);this.J(this.YT,0);this.J(this.YP,0);this.J(this.YQ,0);this.
J(this.YR,0);this.J(this.YS,0);this.Gm.S(A.aaL(A.fl.Af));this.YT.S(A.aaL(A.fl.Af
));this.YP.S(A.aaL(A.fl.Af));this.YQ.S(A.aaL(A.fl.Af));this.YR.S(A.aaL(A.fl.Af));
this.YS.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EA;this.Gm._Done();
this.YT._Done();this.YP._Done();this.YQ._Done();this.YR._Done();this.YS._Done();
C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.call(this);this.Gm._ReInit(
);this.YT._ReInit();this.YP._ReInit();this.YQ._ReInit();this.YR._ReInit();this.YS.
_ReInit();this.Gm.R(A.aaR(A.acf.Date));this.YT.R(A.aaR(A.acf.Bs));this.YP.R(A.aaR(
A.acf.AT2));this.YQ.R(A.aaR(A.acf.AT3));this.YR.R(A.aaR(A.acf.AOq));this.YS.R(A.
aaR(A.acf.ANq));this.Gm.S(A.aaL(A.fl.Af));this.YT.S(A.aaL(A.fl.Af));this.YP.S(A.
aaL(A.fl.Af));this.YQ.S(A.aaL(A.fl.Af));this.YR.S(A.aaL(A.fl.Af));this.YS.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Gm)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMq={AkQ:function(L2){if(!L2)return;
var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CW(HV);var
AAS=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAS.Initialize(3,5,0,true
);Fw.CW(AAS);L2.Bk(Fw);},ADR:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B9()>0;},_Init:function(
aArg){C.AaW._Init.call(this,aArg);this.__proto__=C.AMq;this.AS6(C.AT0);this.AS7(
C.APA);this.ASW(C.Tx);this.ArM(A.aaR(A.acf.Axm));this.Dj(A.aaR(A.acf.Anj));},_ReInit:
function(){C.AaW._ReInit.call(this);this.ArM(A.aaR(A.acf.Axm));this.Dj(A.aaR(A.acf.
Anj));},_className:"Application::AnimalRatings"};C.IF={B6:null,Y:null,V:null,Us:
5,T:function(E){C.I2.T.call(this,E);this.V.R(E);},De:function(E){C.I2.De.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},AuO:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0]))this.S(A.aaL(A.fl.Il));},Kt:function(
E){if(this.Us===E)return;this.Us=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAM:function(G){A.pe([this,this.AuO],this);},_Init:function(aArg){C.I2._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IF;this.Y.AZ(0x3F);this.Y.H(AIr);this.Y.A_f(5);this.
Y.JR(3);this.V.AZ(0x34);this.V.H(Rp);this.V.I_(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.El=[this,this.
AAM];this.V.S(A.aaL(A.fl.Ko));},_Done:function(){this.__proto__=C.I2;this.Y._Done(
);this.V._Done();C.I2._Done.call(this);},_ReInit:function(){C.I2._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Ko));},_Mark:function(D){
var B;C.I2._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RS={AfN:0,Ai:function(Ae){C.Fx.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RO));if(this.AfN>=0)this.Kv((this.AfN.toFixed(
)+CQ)+A.aaR(A.acf.Kl));else this.Kv(A.aaR(A.acf.Unknown));},Cf:function(G){C.Fx.
Cf.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfN=-1;
else this.AfN=A._GetAutoObject(A.Device.Helper).W.RO();this.Am();},_Init:function(
aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RS;},_className:"Application::AnimalInfoItemAge"
};C.RX={A4n:0,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.Aft));if(
this.A4n>0)this.Kv((A._GetAutoObject(A.Device.Converter).Ak7(this.A4n)+CQ)+A._GetAutoObject(
A.acj.DU).Af0());else this.Kv(A.aaR(A.acf.Unknown));},Cf:function(G){C.Fx.Cf.call(
this,G);this.A4n=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RX;},_className:
"Application::AnimalInfoItemWeight"};C.Ty={Y:null,Eh:null,Ex:null,Fd:null,PX:null
,Fc:null,PY:null,Ajf:0,Pg:0,CP:function(){this.Am();},Ai:function(Ae){C.JJ.Ai.call(
this,Ae);this.T(A.aaR(A.acf.BhG));this.Fd.R(this.Ajf.toFixed());this.Fc.R(this.Pg.
toFixed());if(!!this.Ajf||!!this.Pg)this.PY.R(AY0+(this.Ajf+this.Pg).toFixed());
else this.PY.R(A.aaR(A.acf.AR3));},Cf:function(G){C.JJ.Cf.call(this,G);var AkX;AkX=
A._GetAutoObject(A.Device.Helper).Biy(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajf=AkX.Get(2);this.Pg=AkX.Get(1);this.Am();},De:
function(E){C.JJ.De.call(this,E);this.PX.L(E);this.PY.L(E);},AsL:function(G){if(
!!this.Ajf||!!this.Pg){this.Fd.Z(true);this.PX.Z(true);this.Fc.Z(true);}else{this.
Fd.Z(false);this.PX.Z(false);this.Fc.Z(false);}this.Eh.H(this.Fd.M);this.Eh.Z(this.
Fd.Fo());this.Ex.H(this.Fc.M);this.Ex.Z(this.Fc.Fo());},AuO:function(G){var B;var
Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;if(((B=Ny.Db(0x1))[2]-B[0])>((
B=Ny.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.PX.S(A.aaL(A.fl.Ak));this.Fd.S(
A.aaL(A.fl.Ak));this.PY.S(A.aaL(A.fl.Ak));}},AAM:function(G){A.pe([this,this.AuO
],this);},_Init:function(aArg){C.JJ._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.Ex={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
PX={I:this},0);A.acg.Text._Init.call(this.Fc={I:this},0);A.acg.Text._Init.call(this.
PY={I:this},0);this.__proto__=C.Ty;this.Y.H(Ayt);this.Y.Bne(0);this.Y.JR(3);this.
Eh.H(AY1);this.Eh.L(A.jb.H8);this.Ex.H(Ayr);this.Ex.L(A.jb.Gh);this.Fd.AZ(0x34);
this.Fd.H(Rp);this.Fd.Hm(2);this.Fd.I_(true);this.Fd.R(UZ);this.Fd.L(A.jb.Text);
this.Fd.Aj(true);this.PX.AZ(0x34);this.PX.H(Rp);this.PX.I_(true);this.PX.R(AH8);
this.PX.L(A.jb.Text);this.PX.Aj(true);this.Fc.AZ(0x34);this.Fc.H(Rp);this.Fc.Hm(
2);this.Fc.I_(true);this.Fc.R(UZ);this.Fc.L(A.jb.Bm);this.Fc.Aj(true);this.PY.AZ(
0x34);this.PY.H(Rp);this.PY.I_(true);this.PY.R(Rm);this.PY.L(A.jb.Text);this.PY.
Aj(true);this.J(this.Y,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.Fd,0);
this.J(this.PX,0);this.J(this.Fc,0);this.J(this.PY,0);this.Y.El=[this,this.AAM];
this.Fd.Q5([this,this.AsL]);this.Fd.S(A.aaL(A.fl.Af));this.PX.S(A.aaL(A.fl.Af));
this.Fc.Q5([this,this.AsL]);this.Fc.S(A.aaL(A.fl.Af));this.PY.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JJ;this.Y._Done();this.Eh._Done();this.Ex._Done(
);this.Fd._Done();this.PX._Done();this.Fc._Done();this.PY._Done();C.JJ._Done.call(
this);},_ReInit:function(){C.JJ._ReInit.call(this);this.Y._ReInit();this.Eh._ReInit(
);this.Ex._ReInit();this.Fd._ReInit();this.PX._ReInit();this.Fc._ReInit();this.PY.
_ReInit();this.Fd.S(A.aaL(A.fl.Af));this.PX.S(A.aaL(A.fl.Af));this.Fc.S(A.aaL(A.
fl.Af));this.PY.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JJ._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PY)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QC={FV:0,Ib:0
,A2e:false,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(AY2+A.aaR(A.acf.AG7));if(
this.A2e){this.Kv((A._GetAutoObject(A.Device.Converter).S8(this.FV,2,true)+CQ)+A.
_GetAutoObject(A.acj.DU).Aas());this.Background.L(A._GetAutoObject(A.acj.DU).AzK(
this.FV,this.Ib));this.De(A._GetAutoObject(A.acj.DU).AzM(this.FV,this.Ib));}else{
this.Kv(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CJ);this.De(A.jb.Text);}},Cf:
function(G){C.Fx.Cf.call(this,G);var LC=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LC){this.A2e=true;this.FV=A._GetAutoObject(A.acj.DU).Alu(LC,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2e=false;this.FV=0;}this.Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.QC;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tx={Y:null,FW:null,Eh:
null,Ex:null,MF:null,Fd:null,Fc:null,OX:null,Aau:0,Ajf:0,Pg:0,CP:function(){this.
Am();},Ai:function(Ae){C.JJ.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axm));this.MF.R(
this.Aau.toFixed());this.Fd.R(this.Ajf.toFixed());this.Fc.R(this.Pg.toFixed());}
,Cf:function(G){C.JJ.Cf.call(this,G);var AkX;AkX=A._GetAutoObject(A.Device.Helper
).A6r(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aau=AkX.Get(3);this.Ajf=AkX.Get(2);this.Pg=AkX.Get(1);this.Am();},AsL:
function(G){if((!!this.Aau||!!this.Ajf)||!!this.Pg){this.MF.Z(true);this.Fd.Z(true
);this.Fc.Z(true);this.OX.Z(false);}else{this.MF.Z(false);this.Fd.Z(false);this.
Fc.Z(false);this.OX.Z(true);}this.FW.H(this.MF.M);this.FW.Z(this.MF.Fo());this.Eh.
H(this.Fd.M);this.Eh.Z(this.Fd.Fo());this.Ex.H(this.Fc.M);this.Ex.Z(this.Fc.Fo()
);},AuO:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.Fd.
S(A.aaL(A.fl.Ak));this.MF.S(A.aaL(A.fl.Ak));}},AAM:function(G){A.pe([this,this.AuO
],this);},_Init:function(aArg){C.JJ._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.FW={I:this},0);A.acg.AK._Init.call(this.Eh={
I:this},0);A.acg.AK._Init.call(this.Ex={I:this},0);A.acg.Text._Init.call(this.MF={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
Fc={I:this},0);A.acg.Text._Init.call(this.OX={I:this},0);this.__proto__=C.Tx;this.
Y.AZ(0x3F);this.Y.H(Ayt);this.Y.A_f(5);this.Y.JR(3);this.FW.H(AY3);this.FW.L(A.jb.
E1);this.Eh.H(AY4);this.Eh.L(A.jb.H8);this.Ex.H(AY5);this.Ex.L(A.jb.Gh);this.MF.
AZ(0x3C);this.MF.H(Rp);this.MF.Hm(2);this.MF.I_(true);this.MF.R(UZ);this.MF.L(A.
jb.Text);this.MF.Aj(true);this.Fd.AZ(0x3C);this.Fd.H(Rp);this.Fd.Hm(2);this.Fd.I_(
true);this.Fd.R(UZ);this.Fd.L(A.jb.Text);this.Fd.Aj(true);this.Fc.AZ(0x3C);this.
Fc.H(Rp);this.Fc.Hm(2);this.Fc.I_(true);this.Fc.R(UZ);this.Fc.L(A.jb.Bm);this.Fc.
Aj(true);this.OX.AZ(0x34);this.OX.H(Rp);this.OX.I_(true);this.OX.A6(0x11);this.OX.
R(A.aaR(A.acf.AR3));this.OX.L(A.jb.Text);this.OX.Aj(true);this.OX.Z(false);this.
J(this.Y,0);this.J(this.FW,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.MF
,0);this.J(this.Fd,0);this.J(this.Fc,0);this.J(this.OX,0);this.Y.El=[this,this.AAM
];this.MF.Q5([this,this.AsL]);this.MF.S(A.aaL(A.fl.Af));this.Fd.Q5([this,this.AsL
]);this.Fd.S(A.aaL(A.fl.Af));this.Fc.Q5([this,this.AsL]);this.Fc.S(A.aaL(A.fl.Af
));this.OX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JJ;this.Y._Done(
);this.FW._Done();this.Eh._Done();this.Ex._Done();this.MF._Done();this.Fd._Done(
);this.Fc._Done();this.OX._Done();C.JJ._Done.call(this);},_ReInit:function(){C.JJ.
_ReInit.call(this);this.Y._ReInit();this.FW._ReInit();this.Eh._ReInit();this.Ex.
_ReInit();this.MF._ReInit();this.Fd._ReInit();this.Fc._ReInit();this.OX._ReInit(
);this.OX.R(A.aaR(A.acf.AR3));this.MF.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.fl.Af)
);this.Fc.S(A.aaL(A.fl.Af));this.OX.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JJ._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AL_={_Init:function(aArg){C.Aqb._Init.call(
this,aArg);this.__proto__=C.AL_;this.A4y=1;this.Ri.Cu(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqb._ReInit.call(this);this.Ri.Cu(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.AQR={OI:null,IO:null,H5:null,IM:null,GO:null,AlX:function(G){A.pe([this,this.
Bz6],this);},Bz6:function(G){A._GetAutoObject(C.A9).Cd(3);},_Init:function(aArg){
C.Ce._Init.call(this,aArg);C.OI._Init.call(this.OI={I:this},0);C.BU._Init.call(this.
IO={I:this},0);C.SQ._Init.call(this.H5={I:this},0);C.AGz._Init.call(this.IM={I:this
},0);C.Q$._Init.call(this.GO={I:this},0);this.__proto__=C.AQR;var B;this.I$(A.aaR(
A.acf.A$h));this.IO.H(AhZ);this.IO.Aj(true);this.IO.T(A.aaR(A.acf.Language));this.
IO.A9Y(100);this.H5.H(UY);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.
Bi(true);this.IM.H(Aac);this.IM.Aj(true);this.IM.T(A.aaR(A.acf.Bs));this.GO.H(AhY
);this.GO.Aj(true);this.GO.Z(true);this.GO.T(A.aaR(A.acf.AF6));this.GO.Bi(true);
this.GO.ArX(false);this.GO.A96(true);this.JX(this.Y,-1);this.JX(this.Ay,-1);this.
J(this.IO,0);this.J(this.H5,0);this.J(this.IM,0);this.J(this.GO,0);this.IO.Zp(A.
aaL(A.fl.H1));this.IO.Zq(A.aaL(A.fl.H1));this.IO.At([B=this.OI,B.B_,B.B$]);this.
IO.CK(this.OI);this.H5.AeU([B=this.H5,B.FU]);this.H5.Gq([this,this.D_,this.GQ]);
this.H5.Akw(A.aaL(A.ach.Edit));this.H5.Ab4([B=A._GetAutoObject(A.Device.Helper),
B.U0,B.U3]);this.IM.AeU([B=this.IM,B.FU]);this.IM.Gq([this,this.D_,this.GQ]);this.
IM.Akw(A.aaL(A.ach.Edit));this.IM.Ab4([B=A._GetAutoObject(A.Device.Helper),B.U0,
B.U3]);this.GO.AeU([B=this.GO,B.FU]);this.GO.Gq([this,this.D_,this.GQ]);this.GO.
Akw(A.aaL(A.ach.Edit));this.GO.At([B=A._GetAutoObject(A.Device.Device),B.ASu,B.AZ5
]);},_Done:function(){this.__proto__=C.Ce;this.OI._Done();this.IO._Done();this.H5.
_Done();this.IM._Done();this.GO._Done();C.Ce._Done.call(this);},_ReInit:function(
){C.Ce._ReInit.call(this);this.OI._ReInit();this.IO._ReInit();this.H5._ReInit();
this.IM._ReInit();this.GO._ReInit();this.I$(A.aaR(A.acf.A$h));this.IO.T(A.aaR(A.
acf.Language));this.H5.T(A.aaR(A.acf.Date));this.IM.T(A.aaR(A.acf.Bs));this.GO.T(
A.aaR(A.acf.AF6));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.OI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaW={Bg:null,FB:null,AmV:null,AmE:null,Sd:null,A6M:A.jV,KM:A.jV,ARj:null,ARk:
null,ADc:null,CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.A2O],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId],0);this.A2O(this);},E4:function(
G){var B;A.z$([this,this.A2O],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId
],0);C.D9.E4.call(this,G);},Zr:function(E){C.D9.Zr.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.Zr(E);},AS6:function(E){if(this.ARj===E)return;this.
ARj=E;if(!!this.Bg)this.Bg.N0(E);},AS7:function(E){if(this.ARk===E)return;this.ARk=
E;this.BoL(this);},ASW:function(E){if(this.ADc===E)return;this.ADc=E;A.pe([this,
this.BoK],this);},ArM:function(E){if(this.A6M===E)return;this.A6M=E;this.Sd.R(E);
},Dj:function(E){if(this.KM===E)return;this.KM=E;if(!!this.Bg)this.Bg.Dj(E);},AkQ:
function(L2){A.ab5("%s",AY6);},ADR:function(){A.ab5("%s",Alb);return false;},Axu:
function(G){if(!!this.Bg)this.HN(this.Bg);this.Bg=A._NewObject(C.Gb,0);this.Bg.H(
Aot);this.Bg.Zn(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dj(this.KM);this.Bg.
N0(this.ARj);this.Bg.Zr(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},BoL:function(
G){var B;if(!!this.FB)this.HN(this.FB);this.FB=(C.EA.isPrototypeOf(B=A._NewObject(
this.ARk,0))?B:null);this.FB.H(IU);this.J(this.FB,0);},BoK:function(G){var B;if(
!!this.AmV)this.HN(this.AmV);if(!!this.ADc&&this.ADR()){this.AmV=(C.I2.isPrototypeOf(
B=A._NewObject(this.ADc,0))?B:null);this.AmV.H(BD);this.AmV.Bi(false);this.J(this.
AmV,0);this.Sd.Z(false);}else this.Sd.Z(true);},A2O:function(G){this.AkQ(A._GetAutoObject(
A.Device.Device).Bt);this.Axu(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AK._Init.call(this.AmE={I:this},0);C.CH._Init.call(this.Sd={I:this},
0);this.__proto__=C.AaW;this.AmE.H(BD);this.AmE.L(A.jb.CJ);this.Sd.H(AHD);this.Sd.
A6(0x11);this.Sd.L(A.jb.Text);this.J(this.AmE,0);this.J(this.Sd,0);this.Sd.S(A.aaL(
A.fl.Ko));this.Sd.A2(A.aaL(A.fl.Il));},_Done:function(){this.__proto__=C.D9;this.
AmE._Done();this.Sd._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmE._ReInit();this.Sd._ReInit();this.Sd.S(A.aaL(A.fl.Ko));this.Sd.
A2(A.aaL(A.fl.Il));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FB)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmE)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kj={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bce],[B=A._GetAutoObject(A.Device.Device),B.AEq,B.AIG],0);A.pe([this,this.Bce],this
);},Du:function(){return 5;},Gj:function(aIndex){return this.AnimalListContentToString.
BR(this.C7(aIndex));},At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.
Device).Zl(E);},Bce:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kj;this.Cb.Set(0,0);this.Cb.Set(1,14);this.Cb.Set(2,
1);this.Cb.Set(3,2);this.Cb.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AnimalListContentToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARo={IO:null
,Y5:null,Zc:null,Y$:null,Zd:null,Y6:null,Y9:null,Za:null,Zb:null,Y8:null,OI:null
,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.BU._Init.call(this.IO={I:this
},0);C.Nb._Init.call(this.Y5={I:this},0);C.Nb._Init.call(this.Zc={I:this},0);C.Nb.
_Init.call(this.Y$={I:this},0);C.Nb._Init.call(this.Zd={I:this},0);C.Nb._Init.call(
this.Y6={I:this},0);C.Nb._Init.call(this.Y9={I:this},0);C.Nb._Init.call(this.Za={
I:this},0);C.Nb._Init.call(this.Zb={I:this},0);C.Nb._Init.call(this.Y8={I:this},
0);C.OI._Init.call(this.OI={I:this},0);this.__proto__=C.ARo;var B;this.I$(A.aaR(
A.acf.Settings));this.IO.H(AhZ);this.IO.Aj(true);this.IO.T(A.aaR(A.acf.Language)
);this.IO.A9Y(100);this.Y5.H(Ah0);this.Y5.Aj(true);this.Y5.T(A.aaR(A.acf.ACo));this.
Y5.Ne(16);this.Zc.H(As_);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.AG2));this.Zc.Ne(
22);this.Y$.H(As$);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.Temperature));this.Y$.
Ne(17);this.Zd.H(Ayu);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.ACl));this.Zd.Ne(42
);this.Y6.H(Aou);this.Y6.Aj(true);this.Y6.T(A.aaR(A.acf.Device));this.Y6.Ne(18);
this.Y9.H(Aou);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.Asi));this.Y9.Ne(19);this.
Za.H(AY7);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.LinkTransponder));this.Za.Ne(89
);this.Zb.H(AY8);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.UnlinkTransponder));this.
Zb.Ne(95);this.Y8.H(Aym);this.Y8.Aj(true);this.Y8.T(A.aaR(A.acf.ACD));this.Y8.Ne(
76);this.J(this.IO,0);this.J(this.Y5,0);this.J(this.Zc,0);this.J(this.Y$,0);this.
J(this.Zd,0);this.J(this.Y6,0);this.J(this.Y9,0);this.J(this.Za,0);this.J(this.Zb
,0);this.J(this.Y8,0);this.IO.Zp(A.aaL(A.fl.H1));this.IO.Zq(A.aaL(A.fl.H1));this.
IO.At([B=this.OI,B.B_,B.B$]);this.IO.CK(this.OI);this.Y5.AR=[B=this.Y5,B.Nh];this.
Zc.AR=[B=this.Zc,B.Nh];this.Y$.AR=[B=this.Y$,B.Nh];this.Zd.AR=[B=this.Zd,B.Nh];this.
Y6.AR=[B=this.Y6,B.Nh];this.Y9.AR=[B=this.Y9,B.Nh];this.Za.AR=[B=this.Za,B.Nh];this.
Zb.AR=[B=this.Zb,B.Nh];this.Y8.AR=[B=this.Y8,B.Nh];},_Done:function(){this.__proto__=
C.Ce;this.IO._Done();this.Y5._Done();this.Zc._Done();this.Y$._Done();this.Zd._Done(
);this.Y6._Done();this.Y9._Done();this.Za._Done();this.Zb._Done();this.Y8._Done(
);this.OI._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this
);this.IO._ReInit();this.Y5._ReInit();this.Zc._ReInit();this.Y$._ReInit();this.Zd.
_ReInit();this.Y6._ReInit();this.Y9._ReInit();this.Za._ReInit();this.Zb._ReInit(
);this.Y8._ReInit();this.OI._ReInit();this.I$(A.aaR(A.acf.Settings));this.IO.T(A.
aaR(A.acf.Language));this.Y5.T(A.aaR(A.acf.ACo));this.Zc.T(A.aaR(A.acf.AG2));this.
Y$.T(A.aaR(A.acf.Temperature));this.Zd.T(A.aaR(A.acf.ACl));this.Y6.T(A.aaR(A.acf.
Device));this.Y9.T(A.aaR(A.acf.Asi));this.Za.T(A.aaR(A.acf.LinkTransponder));this.
Zb.T(A.aaR(A.acf.UnlinkTransponder));this.Y8.T(A.aaR(A.acf.ACD));},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMl={ET:null,Init:function(aArg){this.ET.Ahr(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgW)));},AT7:function(
){this.ET.AeY(this.AOO());this.Aaw=!this.ET.EZ.AY;},AiU:function(G){this.ET.Ahr(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.AgW)));this.AT7();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dj(A.aaR(A.acf.A7S));else this.Dj(A.aaR(A.acf.Aro));this.Am();},AOO:function(
){var Bz=A._NewObject(C.Aqp,0);var Ql=A._GetAutoObject(A.Device.Helper).AN7(A._GetAutoObject(
A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aql(Ql-(86400*this.
Mv));Bz.Anv(AY9);Bz.Q3([].concat(0,Bz.Gi.slice(1,4)));Bz.Q3(A.abN(Bz.Gi,(Ql-Dx)|
0));Bz.Q3(A.abP(Bz.Gi,3400));Bz.Q3([].concat(Bz.Gi.slice(0,3),4200));var Gf=A._GetAutoObject(
A.Device.Device).Bt.B9();Bz.AwN(Gf);Bz.Yc();if(Gf>0){var O=0;while(O<Gf){var ApS=
A._GetAutoObject(A.Device.Device).Bt.CF(O,7);var ApT=A._GetAutoObject(A.Device.Device
).Bt.Hu(O,6)-Dx;if(ApS>0)Bz.Aqc(ApT,ApS);O=O+1;}}return Bz;},_Init:function(aArg
){C.K_._Init.call(this,aArg);C.AqT._Init.call(this.ET={I:this},0);this.__proto__=
C.AMl;this.ET.H(AY_);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AE7(C.AGN);this.
J(this.ET,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.ET._Done(
);C.K_._Done.call(this);},_ReInit:function(){C.K_._ReInit.call(this);this.ET._ReInit(
);this.ET.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMm={Z0:null,O0:null,AgQ:null,Aaw:false,Init:function(aArg){this.Z0.Ahr(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgW)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgQ.Z(this.Aaw);},CC:function(
G){var B;C.D9.CC.call(this,G);A.zX([this,this.AiU],[B=A._GetAutoObject(A.Device.
Helper),B.U0,B.U3],0);A.zV([this,this.AiU],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Al$],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId],0
);A.pe([this,this.Al$],this);},E4:function(G){var B;A.z$([this,this.AiU],[B=A._GetAutoObject(
A.Device.Helper),B.U0,B.U3],0);A.z9([this,this.AiU],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Al$],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId
],0);C.D9.E4.call(this,G);},Al$:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bk(Fw
);},AiU:function(G){this.Z0.Ahr(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgW)));this.Bn6();this.Am();},Bn6:function(
){var B;var Gf=A._GetAutoObject(A.Device.Device).Bt.B9();var K8=A._NewObject(C.Aqp
,0);var Vo=A._NewObject(C.Aqp,0);var Ql=A._GetAutoObject(A.Device.Helper).AN7(A.
_GetAutoObject(A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aql(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K8.Q3([].concat(0,K8.Gi.slice(1
,4)));K8.Q3(A.abN(K8.Gi,(Ql-Dx)|0));K8.Q3(A.abP(K8.Gi,0));K8.Q3([].concat(K8.Gi.
slice(0,3),150000));K8.Anv(AY$);Vo.Q3([].concat(0,Vo.Gi.slice(1,4)));Vo.Q3(A.abN(
Vo.Gi,(Ql-Dx)|0));Vo.Q3(A.abP(Vo.Gi,0));Vo.Q3([].concat(Vo.Gi.slice(0,3),1500));
Vo.Anv(AZa);K8.AwN(Gf);K8.Yc();Vo.AwN(Gf);Vo.Yc();if(Gf>0){var O=0;var Aay=0;var
AAa=0;var AJ2=0;var A1R=0;var BcU=true;while(O<Gf){var Al5=A._GetAutoObject(A.Device.
Device).Bt.CF(O,8);var AaL=A._GetAutoObject(A.Device.Device).Bt.Hu(O,6)-Dx;if(Al5>
0){K8.Aqc(AaL,Al5);if(!A1R){A1R=AaL;AJ2=Al5;}if(AAa>0){var LC=A._GetAutoObject(A.
Device.Helper).L9(AAa,AaL);if(!!LC){var FV=A._GetAutoObject(A.acj.DU).Alu(LC,Aay
,Al5);if(BcU){Vo.Aqc(AAa,FV);BcU=false;}Vo.Aqc(AaL,FV);}}Aay=Al5;AAa=AaL;}O=O+1;
}var AdL=A.aaR(A.acf.BgH);var FV=A._GetAutoObject(A.Device.Helper).BiA(A1R,AAa,AJ2
,Aay);AdL=A._GetAutoObject(A.Device.Helper).Nk(AdL,P$,FV.toFixed());AdL=A._GetAutoObject(
A.Device.Helper).Nk(AdL,Ax_,A._GetAutoObject(A.acj.DU).Aas());this.O0.Ik.R(AdL);
}this.Aaw=!K8.AY;if(this.Aaw)this.O0.Ik.R(A.jV);(C.O0.isPrototypeOf(B=this.O0.ET
)?B:null).Anr([B=A._GetAutoObject(A.Device.Helper).W,B.PP,B.EB]);this.Z0.AeY(K8);
this.O0.AeY(Vo);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqT._Init.call(
this.Z0={I:this},0);C.AqT._Init.call(this.O0={I:this},0);C.AkO._Init.call(this.AgQ={
I:this},0);this.__proto__=C.AMm;this.Z0.H(AZb);this.Z0.T(A.aaR(A.acf.Aft));this.
Z0.AE7(C.AMT);this.O0.H(AZc);this.O0.T(A.aaR(A.acf.AG7));this.O0.AE7(C.O0);this.
AgQ.H(UX);this.AgQ.R(A.aaR(A.acf.Aki));this.J(this.Z0,0);this.J(this.O0,0);this.
J(this.AgQ,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z0._Done(
);this.O0._Done();this.AgQ._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z0._ReInit();this.O0._ReInit();this.AgQ._ReInit();this.
Z0.T(A.aaR(A.acf.Aft));this.O0.T(A.aaR(A.acf.AG7));this.AgQ.R(A.aaR(A.acf.Aki));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgQ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMj={
Avb:null,Ava:null,Axo:null,AuI:null,VA:null,Abk:null,Abj:null,Aci:null,Afg:null,
Init:function(aArg){this.VA.Ahr(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgW)));},A4f:function(G){this.VA.Ab5(this.
AuI);this.Abk.Ab5(this.Avb);this.Abj.Ab5(this.Ava);this.Aci.Ab5(this.Axo);},Axn:
function(){var Gf=A._GetAutoObject(A.Device.Device).Bt.B9();this.AuI=A._NewObject(
C.Ajr,0);this.Avb=A._NewObject(C.Ajr,0);this.Ava=A._NewObject(C.Ajr,0);this.Axo=
A._NewObject(C.Ajr,0);if(Gf>0){var O=Gf-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.Hu(O,6);this.Atr(this.AuI,O,3,D8);this.Atr(this.Avb,O,2,D8);this.
Atr(this.Ava,O,5,D8);this.Atr(this.Axo,O,4,D8);O=O-1;}}this.Aaw=!(((this.AuI.AY+
this.Ava.AY)+this.Avb.AY)+this.Axo.AY);A.pe([this,this.A4f],this);},Atr:function(
A0R,Ad,A0Q,Qf){var Alq=A._GetAutoObject(A.Device.Device).Bt.I5(Ad,A0Q);if(!!Alq)
A0R.Os(Alq,Qf);},Ab3:function(E){if(this.Mv===E)return;C.K_.Ab3.call(this,E);if(
!!this.VA)this.VA.Ab3(E);if(!!this.Abk)this.Abk.Ab3(E);if(!!this.Abj)this.Abj.Ab3(
E);if(!!this.Aci)this.Aci.Ab3(E);this.Afg.Ab3(E);},AiU:function(G){this.VA.Ahr(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.AgW)));this.Axn();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dj(A.aaR(A.acf.Bj0));else this.Dj(A.aaR(A.acf.Anj));this.Am();},_Init:function(
aArg){C.K_._Init.call(this,aArg);C.Ahw._Init.call(this.VA={I:this},0);C.Ahw._Init.
call(this.Abk={I:this},0);C.Ahw._Init.call(this.Abj={I:this},0);C.Ahw._Init.call(
this.Aci={I:this},0);C.AT4._Init.call(this.Afg={I:this},0);this.__proto__=C.AMj;
this.Dj(A.aaR(A.acf.Anj));this.VA.H(AZd);this.VA.R(A.aaR(A.acf.AF$));this.Abk.H(
AZe);this.Abk.R(A.aaR(A.acf.Feed));this.Abj.H(AZf);this.Abj.R(A.aaR(A.acf.AGb));
this.Aci.H(AZg);this.Aci.R(A.aaR(A.acf.AGc));this.Afg.H(AZh);this.J(this.VA,-1);
this.J(this.Abk,-1);this.J(this.Abj,-1);this.J(this.Aci,-1);this.J(this.Afg,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.VA._Done();this.Abk.
_Done();this.Abj._Done();this.Aci._Done();this.Afg._Done();C.K_._Done.call(this);
},_ReInit:function(){C.K_._ReInit.call(this);this.VA._ReInit();this.Abk._ReInit(
);this.Abj._ReInit();this.Aci._ReInit();this.Afg._ReInit();this.Dj(A.aaR(A.acf.Anj
));this.VA.R(A.aaR(A.acf.AF$));this.Abk.R(A.aaR(A.acf.Feed));this.Abj.R(A.aaR(A.
acf.AGb));this.Aci.R(A.aaR(A.acf.AGc));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.Avb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ava)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMk={ET:null,WE:null,Aeh:null,A2c:false,Init:function(aArg){this.WE.Ahr(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgW)));},Bl:function(aSize){C.K_.Bl.call(this,aSize);this.Aeh.H(this.ET.M);},Ai:
function(Ae){C.K_.Ai.call(this,Ae);var BBE=!this.Aaw&&this.A2c;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aeh.R(A.aaR(A.acf.A7S));else this.
Aeh.R(A.aaR(A.acf.Aro));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dj(A.aaR(
A.acf.Bj1));else this.Dj(A.aaR(A.acf.Bj2));this.Aeh.Z(BBE);},AiU:function(G){this.
WE.Ahr(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.AgW)));this.Aaw=true;this.A2c=true;this.Axn();this.AT7();this.
Am();},AT7:function(){this.ET.AeY(this.AOO());if(!!this.ET.EZ&&(this.ET.EZ.AY>0)
){this.Aaw=false;this.A2c=false;}},AOO:function(){var Bz=A._NewObject(C.Aqp,0);var
Ql=A._GetAutoObject(A.Device.Helper).AN7(A._GetAutoObject(A.Device.Helper).Dv());
var Dx=A._GetAutoObject(A.Device.Helper).Aql(Ql-(86400*this.Mv));Bz.Anv(AIs);Bz.
Q3([].concat(0,Bz.Gi.slice(1,4)));Bz.Q3(A.abN(Bz.Gi,(Ql-Dx)|0));Bz.Q3(A.abP(Bz.Gi
,3400));Bz.Q3([].concat(Bz.Gi.slice(0,3),4200));var Gf=A._GetAutoObject(A.Device.
Device).Bt.B9();Bz.AwN(Gf);Bz.Yc();if(Gf>0){var O=0;while(O<Gf){var ApS=A._GetAutoObject(
A.Device.Device).Bt.CF(O,7);var ApT=A._GetAutoObject(A.Device.Device).Bt.Hu(O,6)-
Dx;if(ApS>0)Bz.Aqc(ApT,ApS);O=O+1;}}return Bz;},BiP:function(){var Gf=A._GetAutoObject(
A.Device.Device).Bt.B9();if(Gf>0){var BfA=A._NewObject(C.Ajr,0);var O=Gf-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E3(O,A._GetAutoObject(A.Device.Device
).Bt);var LP=A._GetAutoObject(A.Device.Helper).AC2(D3);if(!!LP)BfA.Os(LP,D3.Timestamp
);O=O-1;}return BfA;}else return null;},Axn:function(){this.WE.Ab5(this.BiP());if(
!!this.WE.N3&&(this.WE.N3.AY>0))this.Aaw=false;},_Init:function(aArg){C.K_._Init.
call(this,aArg);C.AqT._Init.call(this.ET={I:this},0);C.Ahw._Init.call(this.WE={I:
this},0);C.AkO._Init.call(this.Aeh={I:this},0);this.__proto__=C.AMk;this.ET.H(Aot
);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AE7(C.AGN);this.WE.H(AZi);this.WE.
R(A.aaR(A.acf.Rating));this.Aeh.H(Aot);this.J(this.ET,-2);this.J(this.WE,-2);this.
J(this.Aeh,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.ET._Done(
);this.WE._Done();this.Aeh._Done();C.K_._Done.call(this);},_ReInit:function(){C.
K_._ReInit.call(this);this.ET._ReInit();this.WE._ReInit();this.Aeh._ReInit();this.
ET.T(A.aaR(A.acf.Temperature));this.WE.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K_._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeh)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WJ={Q:null,Gw:null,Gx:null
,QL:null,AM:0,Go:0,F_:100,FG:0,Init:function(aArg){},IZ:function(G){this.FG=1;C.
Eg.IZ.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QL.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QL.Z(this.Go!==
this.F_);this.QL.L(this.V.AQ);if((this.FG===4)||(this.FG===5))this.QL.L(A.jb.E1);
},AlY:function(G){this.FG=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AyL],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qr:function(G){if(this.FG===5)A.pe([this,this.
AyL],this);if(this.FG===4)A.pe([this,this.AyM],this);if(this.FG===1)A.pe(this.AR
,this);this.FG=0;this.Am();},C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcT:function(s){this.C3(s);},At:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcT],E,0);if(!!E)A.pe([this,this.AcT],this);},AlZ:function(G){this.FG=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.AyM],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},Kb:function(G){this.FG=0;},AyM:function(s){this.Kb(s);},J8:function(G){this.
FG=0;},AyL:function(s){this.J8(s);},Bx:function(E){if(E<this.Go)E=this.Go;if(E>this.
F_)E=this.F_;if(this.AM===E)return;this.AM=E;this.Am();},F$:function(E){if(this.
Go===E)return;this.Go=E;this.Am();},EU:function(E){if(this.F_===E)return;this.F_=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(
this.Gw={I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.acg.Ap._Init.call(
this.QL={I:this},0);this.__proto__=C.WJ;this.H(KY);this.Gw.Filter=5;this.Gx.Filter=
4;this.Background.H(KY);this.V.H(AcL);this.V.R(Lv);this.QL.H(Ata);this.J(this.QL
,0);this.Gw.BL=[this,this.AlY];this.Gw.D1=[this,this.AlY];this.Gx.BL=[this,this.
AlZ];this.Gx.D1=[this,this.AlZ];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Cu(null);this.QL.Ax(A.aaL(A.ach.AMH));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gw._Done();this.Gx._Done();this.QL._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gw._ReInit();this.Gx.
_ReInit();this.QL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUs={AC:null,CM:null,HL:
null,Bl:function(aSize){C.WJ.Bl.call(this,aSize);this.CM.H([this.QL.M[2],this.QL.
M[1],this.M[2],this.QL.M[3]]);},Ai:function(Ae){C.WJ.Ai.call(this,Ae);this.CM.AbC(
0,this.CM.AY-1);if(this.Go!==this.F_)this.QL.Z(true);},Init:function(aArg){},C3:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},Kb:function(G){var F;var BO=this.AM;C.WJ.Kb.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(
this.AM)));A.abo(this.Q,0);}},J8:function(G){var F;var BO=this.AM;C.WJ.J8.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var Qx=0;if(this.Go
!==this.F_){if(E<this.Go){E=this.F_;Qx=-this.CM.GN*this.CM.AY;}if(E>this.F_){E=this.
Go;Qx=this.CM.GN;}}C.WJ.Bx.call(this,E);if(!!Qx)this.CM.Ga(Qx);this.CM.GS(this.AM
);this.CM.HH(this.CM.Gr,true,this.HL,null);},Hl:function(G){var B;var Ge=this.CM.
G5;var Cz=(C.CH.isPrototypeOf(B=this.CM.Ci)?B:null);if(!Cz)return;Cz.S(this.V.B6
);Cz.A2(A.aaL(A.fl.Af));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gj(Ge));else Cz.
R(W$);Cz.H(A.abK(Cz.M,[(B=this.CM.M)[2]-B[0],this.CM.GN]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.F$(0);this.EU(this.AC.Du()-1);this.CM.
Jx(this.AC.Du());this.CM.AbC(0,this.CM.AY-1);}},_Init:function(aArg){C.WJ._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gk._Init.call(this.
HL={I:this},0);this.__proto__=C.AUs;this.H(KY);this.QL.H(AZj);this.CM.Ae6(40);this.
CM.N0(C.CH);this.HL.WC(23);this.HL.HM(1);this.HL.Fp(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CM.Hl=[this,this.Hl];this.Init(
aArg);},_Done:function(){this.__proto__=C.WJ;this.CM._Done();this.HL._Done();C.WJ.
_Done.call(this);},_ReInit:function(){C.WJ._ReInit.call(this);this.CM._ReInit();
this.HL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WJ._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HL)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RY={ALs:0
,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.AG7));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kv((A._GetAutoObject(A.Device.Converter).Ak7(this.ALs
)+CQ)+A._GetAutoObject(A.acj.DU).Af0());else this.Kv(A.aaR(A.acf.Unknown));},Cf:
function(G){C.Fx.Cf.call(this,G);this.ALs=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fx._Init.call(this,aArg);this.__proto__=C.RY;},_className:"Application::AnimalInfoItemWeightGain"
};C.APr={Bc:null,Dd:null,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Device),B.AEp,B.AIF],0);},DX:function(G){C.IJ.DX.call(this,G);this.Dd.Ax(
A._GetAutoObject(A.Device.Converter).BgW(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.C5._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);this.__proto__=C.APr;this.Bc.DC(
Ayv);this.Bc.DM(Atb);this.Bc.L(A.jb.Bc);this.Dd.H(AZk);this.Dd.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Dd,0);this.Dd.Ax(A.aaL(A.ach.AjS));this.Init(aArg);},_Done:
function(){this.__proto__=C.IJ;this.Bc._Done();this.Dd._Done();C.IJ._Done.call(this
);},_ReInit:function(){C.IJ._ReInit.call(this);this.Bc._ReInit();this.Dd._ReInit(
);},_Mark:function(D){var B;C.IJ._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANt={ZI:null,Kz:null,Mk:null,Timer:null,ACc:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZI.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Bqq),P$,this.ACc.
toFixed()));},CC:function(G){this.Timer.Ar(true);},E4:function(G){this.Timer.Ar(
false);},BAR:function(G){if(this.ACc>1){this.ACc=this.ACc-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Axv();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZI={I:this},0);A.acg.Text.
_Init.call(this.Kz={I:this},0);A.acg.Ap._Init.call(this.Mk={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANt;this.Background.L(A.jb.CS
);this.N.Z(true);this.ZI.H(AZl);this.ZI.KR(true);this.ZI.R(A.jV);this.ZI.L(A.jb.
Text);this.Kz.H(AZm);this.Kz.KR(true);this.Kz.R(A.aaR(A.acf.A48));this.Kz.L(A.jb.
Text);this.Mk.H(AIt);this.J(this.ZI,0);this.J(this.Kz,0);this.J(this.Mk,0);this.
ZI.S(A.aaL(A.fl.Af));this.Kz.S(A.aaL(A.fl.Af));this.Mk.Ax(A.aaL(A.ach.ABJ));this.
Timer.Mz=[this,this.BAR];},_Done:function(){this.__proto__=C.AB;this.ZI._Done();
this.Kz._Done();this.Mk._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZI._ReInit();this.Kz._ReInit();this.Mk._ReInit(
);this.Timer._ReInit();this.Kz.R(A.aaR(A.acf.A48));this.ZI.S(A.aaL(A.fl.Af));this.
Kz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANa={Kz:null,Amv:null
,QE:null,CP:function(){this.Am();},Ai:function(Ae){C.Ad8.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa2<=10)this.Kz.R(A.aaR(A.acf.Bg9));else this.Kz.R(A.aaR(A.acf.
A49));},_Init:function(aArg){C.Ad8._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kz={I:this},0);A.acg.Ap._Init.call(this.Amv={I:this},0);C.CH._Init.call(this.QE={
I:this},0);this.__proto__=C.ANa;this.SR.H(AZn);this.Mk.H(AZo);this.Kz.H(AZp);this.
Kz.KR(true);this.Kz.L(A.jb.Text);this.Amv.H(AIt);this.QE.H(AZq);this.QE.Z(true);
this.QE.R(A.aaR(A.acf.AT5));this.QE.L(A.jb.Text);this.J(this.Kz,0);this.J(this.Amv
,0);this.J(this.QE,0);this.Kz.S(A.aaL(A.fl.Af));this.Amv.Ax(A.aaL(A.ach.ABJ));this.
QE.S(A.aaL(A.fl.Af));this.QE.A2(A.aaL(A.fl.Ak));this.QE.Cu(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Ad8;this.Kz._Done();this.Amv._Done();this.QE._Done();
C.Ad8._Done.call(this);},_ReInit:function(){C.Ad8._ReInit.call(this);this.Kz._ReInit(
);this.Amv._ReInit();this.QE._ReInit();this.QE.R(A.aaR(A.acf.AT5));this.Kz.S(A.aaL(
A.fl.Af));this.QE.S(A.aaL(A.fl.Af));this.QE.A2(A.aaL(A.fl.Ak));this.QE.Cu(A.aaL(
A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ad8._Mark.call(this,D);if((B=this.
Kz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amv)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AL8={_Init:function(aArg){C.I3._Init.call(this,aArg);this.__proto__=C.AL8;this.
RR.Ar(false);this.RR.Aj(false);this.RR.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVs={_Init:function(aArg){C.I3._Init.call(this,aArg);this.__proto__=C.AVs;this.
S7.Ar(false);this.S7.Aj(false);this.S7.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AOV={DX:function(G){C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.
Converter).AdX(5));},_Init:function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=
C.AOV;},_className:"Application::HeaderControlListFilter"};C.APt={DX:function(G){
C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter).AdX(6));},_Init:
function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=C.APt;},_className:"Application::HeaderWatchListFilter"
};C.APx={D0:null,M6:null,_Init:function(aArg){C.TW._Init.call(this,aArg);C.CH._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.M6={I:this},0);this.__proto__=
C.APx;this.D0.H(Aoq);this.D0.R(A.aaR(A.acf.A5E));this.D0.L(A.jb.Text);this.M6.H(
AZr);this.M6.L(A.jb.Text);this.M6.A6(0x12);this.J(this.D0,-2);this.J(this.M6,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));this.M6.Ax(A.aaL(A.ach.ADv)
);},_Done:function(){this.__proto__=C.TW;this.D0._Done();this.M6._Done();C.TW._Done.
call(this);},_ReInit:function(){C.TW._ReInit.call(this);this.D0._ReInit();this.M6.
_ReInit();this.D0.R(A.aaR(A.acf.A5E));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.TW._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.AM7={Cf:function(Ad){C.Ajz.Cf.call(this,Ad);if(
!!this.AX){var Oj=this.AX.H2(Ad,8);var BCq=this.AX.Sk(Ad,21);this.Abc.R(A._GetAutoObject(
A.Device.Helper).L9(BCq,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Sq.Z(Oj);this.Am();}},_Init:function(aArg){C.Ajz._Init.call(this,aArg);this.__proto__=
C.AM7;},_className:"Application::CalfListWatchItem"};C.TW={Ag6:null,Ag8:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag6={I:this},
0);A.acg.Ap._Init.call(this.Ag8={I:this},0);this.__proto__=C.TW;this.Ag6.H(AZs);
this.Ag6.L(A.jb.Text);this.Ag6.A6(0x12);this.Ag8.H(AZt);this.Ag8.L(A.jb.Text);this.
Ag8.A6(0x12);this.JX(this.DS,-1);this.J(this.Ag6,0);this.J(this.Ag8,0);this.Ag6.
Ax(A.aaL(A.ach.AmX));this.Ag8.Ax(A.aaL(A.ach.Abz));},_Done:function(){this.__proto__=
C.Dc;this.Ag6._Done();this.Ag8._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Ag6._ReInit();this.Ag8._ReInit();},_Mark:function(
D){var B;C.Dc._Mark.call(this,D);if((B=this.Ag6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqp={Gi:A.wg,OE:A.wf,Q3:function(E){if(A.aaY(this.Gi,E))return;this.Gi=E;},Anv:
function(E){if(A.aaX(this.OE,E))return;this.OE=E;},_Init:function(aArg){A.acv.ACb.
_Init.call(this,aArg);this.__proto__=C.Aqp;},_className:"Application::BoundCoordList"
};C.Ajz={T1:null,Ws:null,T2:null,Wt:null,Sq:null,Ze:null,Abc:null,AP:null,A$:null
,Ea:null,Ls:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T1.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Ws.H(this.T1.M);this.A$.H([this.T1.
M[2]-1,0,this.T1.M[2]+1,aSize[1]]);this.T2.H([this.T1.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wt.H(this.T2.M);this.Ea.H([this.T2.M[2]-1,0,this.T2.M[2]+1,aSize[
1]]);this.Sq.H([this.T2.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Ze.H(this.Sq.
M);this.Ls.H([this.Sq.M[2]-1,0,this.Sq.M[2]+1,aSize[1]]);this.Abc.H([this.Sq.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K7=this.V.AQ;
this.T1.AEQ(K7);this.Ws.L(K7);this.T2.AEQ(K7);this.Wt.L(K7);this.Sq.AEQ(K7);this.
Ze.L(K7);this.Abc.L(K7);this.Ze.Z(!this.Sq.Fo());},Cf:function(Ad){if(!this.AX)return;
this.Hr=Ad;var Mf=this.AX.CF(Ad,1);var Ib=this.AX.AmQ(Ad,14);var Auk=this.AX.CF(
Ad,5);var LP=this.AX.I5(Ad,13);this.T(Mf.toFixed());if(!!LP){this.T1.Z(true);this.
T1.AwD(A._GetAutoObject(A.acj.Assessment).Bc2(LP));this.Ws.Z(false);}else{this.T1.
Z(false);this.Ws.Z(true);}if(Auk>0){this.T2.Z(true);this.T2.AwD(A._GetAutoObject(
A.acj.Assessment).Bc2(A._GetAutoObject(A.Device.Converter).AsE(Ib,Auk)));this.Wt.
Z(false);}else{this.T2.Z(false);this.Wt.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kk._Init.call(this.T1={I:this},0);A.acg.Text._Init.
call(this.Ws={I:this},0);C.Kk._Init.call(this.T2={I:this},0);A.acg.Text._Init.call(
this.Wt={I:this},0);C.Kk._Init.call(this.Sq={I:this},0);A.acg.Text._Init.call(this.
Ze={I:this},0);A.acg.Text._Init.call(this.Abc={I:this},0);A.acg.AK._Init.call(this.
AP={I:this},0);A.acg.AK._Init.call(this.A$={I:this},0);A.acg.AK._Init.call(this.
Ea={I:this},0);A.acg.AK._Init.call(this.Ls={I:this},0);this.__proto__=C.Ajz;this.
Ws.H(AZu);this.Ws.R(Aor);this.Wt.H(Aos);this.Wt.R(Aor);this.Sq.AwD(A.jb.Rg);this.
Ze.H(Aos);this.Ze.R(Ro);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ls.L(A.jb.Bc);this.J(this.T1,0);this.J(this.Ws,0);this.J(this.T2,0);this.J(
this.Wt,0);this.J(this.Sq,0);this.J(this.Ze,0);this.J(this.Abc,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Ls,0);this.Ws.S(A.aaL(A.fl.Af
));this.Wt.S(A.aaL(A.fl.Af));this.Ze.S(A.aaL(A.fl.Af));this.Abc.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.T1._Done();this.Ws.
_Done();this.T2._Done();this.Wt._Done();this.Sq._Done();this.Ze._Done();this.Abc.
_Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Ls._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.T1._ReInit();this.Ws.
_ReInit();this.T2._ReInit();this.Wt._ReInit();this.Sq._ReInit();this.Ze._ReInit(
);this.Abc._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.
Ls._ReInit();this.Ws.S(A.aaL(A.fl.Af));this.Wt.S(A.aaL(A.fl.Af));this.Ze.S(A.aaL(
A.fl.Af));this.Abc.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.T1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ws)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pt:null,Anb:null
,EZ:null,DR:null,Arh:0,Ari:0,A6$:0,AmH:0,AqC:0,Init:function(aArg){this.ASR(6);this.
ASS(8);this.AS3(A.jb.AV);this.AS4(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.BlI([this.DR.Aa_[0],(B=this.DR.M)[3]-B[1]]);this.WF(this);},ASQ:function(
E){if(this.Pt===E)return;this.Pt=E;this.DR.ASQ(E);},AS4:function(E){if(this.Ari===
E)return;this.Ari=E;this.DR.AS4(E);},AS3:function(E){if(this.Arh===E)return;this.
Arh=E;this.DR.AS3(E);this.DR.BlN(E);},WF:function(G){var B;while(!!this.DR.Ah)this.
HN(this.DR.Ah);if(!this.EZ)return;this.DR.Anv([((this.EZ.OE[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gi[2]-this.EZ.Gi[0]))|0,this.DR.OE[1]]);this.DR.Anv([this.DR.OE[0]
,((this.EZ.OE[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gi[3]-this.EZ.Gi[1]))|0]);var O;
var Dg=this.DR.OE[1];var D8;var A4q=this.EZ.Gi[1];var BjZ=(((B=this.DR.M)[3]-B[1
])/this.DR.OE[1])|0;for(O=0;O<BjZ;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dg))-(this.Anb.Ascent+this.Anb.Descent))+2,((B=this.M)[2]-
B[0])-this.Ari,(((B=this.M)[3]-B[1])-(O*Dg))+2]);D8.L(this.A6$);D8.S(this.Anb);D8.
A6(0x24);if(O>0)D8.R(this.AJD(A4q));else D8.R(this.AKa());A4q=A4q+this.EZ.OE[1];
this.J(D8,0);}},BF7:function(s){this.WF(s);},BmD:function(E){if(this.Anb===E)return;
this.Anb=E;this.Am();},Azk:function(A0w){var B;if(!this.EZ||(this.EZ.Gi[3]===this.
EZ.Gi[1]))return 0;return(((A0w-this.EZ.Gi[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gi[
3]-this.EZ.Gi[1]))|0;},AeY:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.AeY(null);else{var Bz=A._NewObject(A.acv.ACb,0);Bz.AwN(this.EZ.AD7);Bz.Yc();var
Jz=E.AlE;while(!!Jz){Bz.Aqc(this.Byr(Jz.P4),this.Bys(Jz.P5));Jz=Jz.Ah;}this.DR.AeY(
Bz);this.Am();}},Byr:function(BwF){var B;if(!this.EZ||(this.EZ.Gi[2]===this.EZ.Gi[
0]))return 0;return((BwF-this.EZ.Gi[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gi[2]-this.
EZ.Gi[0]);},Bys:function(A0w){var B;if(!this.EZ||(this.EZ.Gi[3]===this.EZ.Gi[1])
)return 0;return((A0w-this.EZ.Gi[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gi[3]-this.EZ.
Gi[1]);},AJD:function(AoN){return AoN.toFixed();},AKa:function(){return A.jV;},ASS:
function(E){if(this.AmH===E)return;this.AmH=E;this.DR.ASS(E);},ASR:function(E){if(
this.AqC===E)return;this.AqC=E;this.DR.ASR(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIu);this.A6$=A.jb.Text;this.DR.AZ(0x3F);this.DR.H(AIu);this.DR.Bm3(AZv);this.
DR.Blw(A.jb.Rg);this.DR.Bmk(A.jb.Bc);this.DR.Bnn(A.jb.Rg);this.J(this.DR,0);this.
Pt=A.aaL(A.acv.ACu);this.Anb=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.BmD(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pt)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Anb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMT={AJD:function(AoN){return A._GetAutoObject(
A.Device.Converter).AxY(AoN,0);},AKa:function(){return A._GetAutoObject(A.acj.DU
).Af0();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AMT;}
,_className:"Application::BodyWeightGraph"};C.O0={JK:null,Ex:null,Eh:null,FW:null
,IG:null,IH:null,Init:function(aArg){this.ASQ(null);},WF:function(G){var B;var F;
C.DR.WF.call(this,G);var AKG=0;var ALx=0;if(!!this.JK){AKG=this.Azk(A._GetAutoObject(
A.Device.Helper).AC1((F=this.JK,F[1].call(F[0]))));ALx=this.Azk(A._GetAutoObject(
A.Device.Helper).AC0((F=this.JK,F[1].call(F[0]))));}this.FW.H(A.abP(this.FW.M,0)
);this.FW.H([].concat(this.FW.M.slice(0,3),((B=this.M)[3]-B[1])-ALx));this.IG.H(
A.abO(this.IG.M,(this.FW.M[3]-((((B=this.IG.M)[3]-B[1])/2)|0))-2));this.Eh.H(A.abP(
this.Eh.M,this.FW.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-
B[1])-AKG));this.IH.H(A.abO(this.IH.M,(this.Eh.M[3]-((((B=this.IH.M)[3]-B[1])/2)|
0))+2));this.Ex.H(A.abP(this.Ex.M,this.Eh.M[3]));this.Ex.H([].concat(this.Ex.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJD:function(AoN){return A._GetAutoObject(A.Device.Converter
).S8(AoN,0,true);},AKa:function(){return A._GetAutoObject(A.acj.DU).Aas();},Anr:
function(E){if(A.aaZ(this.JK,E))return;if(!!this.JK)A.z$([this,this.AiM],this.JK
,0);this.JK=E;if(!!E)A.zX([this,this.AiM],E,0);if(!!E)A.pe([this,this.AiM],this);
},AiM:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ex={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.
acg.AK._Init.call(this.FW={I:this},0);A.acg.AK._Init.call(this.IG={I:this},0);A.
acg.AK._Init.call(this.IH={I:this},0);this.__proto__=C.O0;this.Ex.AZ(0xD);this.Ex.
H(Z9);this.Ex.L(A.jb.Gh);this.Eh.AZ(0xD);this.Eh.H(S$);this.Eh.L(A.jb.H8);this.FW.
AZ(0xD);this.FW.H(AcK);this.FW.L(A.jb.E1);this.IG.AZ(0xD);this.IG.H(Z$);this.IG.
Awr(A.jb.H8);this.IG.Aws(A.jb.H8);this.IG.Awu(A.jb.E1);this.IG.Awt(A.jb.E1);this.
IH.AZ(0xD);this.IH.H(W9);this.IH.Awr(A.jb.Gh);this.IH.Aws(A.jb.Gh);this.IH.Awu(A.
jb.H8);this.IH.Awt(A.jb.H8);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FW
,-1);this.J(this.IG,-1);this.J(this.IH,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FW._Done();this.IG._Done();this.
IH._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ex._ReInit();this.Eh._ReInit();this.FW._ReInit();this.IG._ReInit();this.IH._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JK)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqT={ET:null,EZ:null,R_:null,Ik:
null,Bc:null,AxF:A.jV,DK:A.jV,AOQ:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R_.
H([30,0,aSize[0]-2,30]);this.Ik.H(this.R_.M);if(!!this.ET)this.ET.H([30,this.R_.
M[3],aSize[0],this.Bc.M[1]]);},Ahr:function(E){if(this.AxF===E)return;this.AxF=E;
this.Ik.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.R_.R(E);},AE7:
function(E){if(this.AOQ===E)return;this.AOQ=E;this.BoI(this);},BoI:function(G){var
B;if(!!this.ET)this.HN(this.ET);this.ET=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOQ,0))?B:null);if(!!this.ET){this.ET.H(AZw);this.ET.AeY(this.EZ);this.J(this.ET
,0);}},AeY:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.ET)this.ET.AeY(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
R_={I:this},0);A.acg.Text._Init.call(this.Ik={I:this},0);A.acg.AK._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqT;this.H(AcN);this.Ar(false);this.R_.H(AZx);this.
R_.A6(0x11);this.R_.R(Lv);this.R_.L(A.jb.Text);this.Ik.A6(0x14);this.Ik.R(A.jV);
this.Ik.L(A.jb.Text);this.Bc.H(AZy);this.Bc.L(A.jb.Bc);this.J(this.R_,0);this.J(
this.Ik,0);this.J(this.Bc,0);this.R_.S(A.aaL(A.fl.Ak));this.Ik.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.R_._Done();this.
Ik._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.R_._ReInit();this.Ik._ReInit();this.Bc._ReInit();this.
R_.S(A.aaL(A.fl.Ak));this.Ik.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.ET)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMs={Agz:null,GS:function(E
){var F;C.Gb.GS.call(this,E);if(!!this.Agz)(F=this.Agz,F[2].call(F[0],E));},A9i:
function(E){if(A.aaZ(this.Agz,E))return;if(!!this.Agz)A.z$([this,this.A2P],this.
Agz,0);this.Agz=E;if(!!E)A.zX([this,this.A2P],E,0);if(!!E)A.pe([this,this.A2P],this
);},A2P:function(G){var F;if(!this.Agz)return;(F=this.Agz,F[2].call(F[0],this.FM(
)));},_Init:function(aArg){C.Gb._Init.call(this,aArg);this.__proto__=C.AMs;},_Mark:
function(D){var B;C.Gb._Mark.call(this,D);if((B=this.Agz)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AT4={Re:null
,PZ:null,XS:null,XT:null,Mv:0,CP:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Re.H(A.abI(this.Re.M,(((B=this.M)[3]-B[1])/2)|
0));this.PZ.H(A.abI(this.PZ.M,(((B=this.M)[3]-B[1])/2)|0));this.Re.H(A.abO(this.
Re.M,(((B=this.M)[3]-B[1])/2)|0));this.PZ.H(A.abO(this.PZ.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Re.R(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.BjT),P$,this.Mv.toFixed()));},Ab3:function(E){if(
this.Mv===E)return;this.Mv=E;this.BBr(this);},BBr:function(G){var B;var AJK=(((B=
this.M)[2]-B[0])/this.Mv)|0;this.XS.H(A.abM(this.XS.M,(((B=this.M)[2]-B[0])-(this.
Mv*AJK))+(((AJK/2)-(((B=this.XS.M)[2]-B[0])/2))|0)));this.XT.H(A.abM(this.XT.M,(((
B=this.M)[2]-B[0])-AJK)+(((AJK/2)-(((B=this.XT.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Re={
I:this},0);A.acg.Text._Init.call(this.PZ={I:this},0);A.acg.Text._Init.call(this.
XS={I:this},0);A.acg.Text._Init.call(this.XT={I:this},0);this.__proto__=C.AT4;this.
H(BD);this.Re.H(AZz);this.Re.Hm(5);this.Re.A6(0x11);this.Re.L(A.jb.Text);this.PZ.
H(AZA);this.PZ.Hm(5);this.PZ.A6(0x14);this.PZ.R(A.aaR(A.acf.AhO));this.PZ.L(A.jb.
Text);this.XS.H(AZB);this.XS.R(A$T);this.XS.L(A.jb.Text);this.XT.H(Bqw);this.XT.
R(A$T);this.XT.L(A.jb.Text);this.J(this.Re,0);this.J(this.PZ,0);this.J(this.XS,0
);this.J(this.XT,0);this.Re.S(A.aaL(A.fl.Ak));this.PZ.S(A.aaL(A.fl.Ak));this.XS.
S(A.aaL(A.fl.H1));this.XT.S(A.aaL(A.fl.H1));},_Done:function(){this.__proto__=A.
Core.P;this.Re._Done();this.PZ._Done();this.XS._Done();this.XT._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Re._ReInit(
);this.PZ._ReInit();this.XS._ReInit();this.XT._ReInit();this.PZ.R(A.aaR(A.acf.AhO
));this.Re.S(A.aaL(A.fl.Ak));this.PZ.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Re)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.PZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K_={V4:null,AjF:null,KM:A.jV,Mv:0,Aaw:false,Init:function(aArg){var A1u=A._NewObject(
C.Kl,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RO()<A1u.
C7(O))A1u.Ani=O+1;this.V4.CK(A1u);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjF.
Z(this.Aaw);if(this.Aaw)this.Bb(null);else this.Bb(this.V4);},CC:function(G){var
B;var F;C.D9.CC.call(this,G);if(!(F=this.V4.Q,F[1].call(F[0])))(F=this.V4.Q,F[2].
call(F[0],this.V4.AC.C7(0)));A.zX([this,this.AIV],[B=A._GetAutoObject(A.Device.Helper
),B.U0,B.U3],0);A.zV([this,this.AIV],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Al$],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId],0);A.pe([this
,this.Al$],this);},E4:function(G){var B;A.z$([this,this.AIV],[B=A._GetAutoObject(
A.Device.Helper),B.U0,B.U3],0);A.z9([this,this.AIV],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Al$],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId
],0);C.D9.E4.call(this,G);},Zr:function(E){if(A.aa0(this.AR,E))return;C.D9.Zr.call(
this,E);this.V4.AR=E;},Ab3:function(E){if(this.Mv===E)return;this.Mv=E;A.pe([this
,this.Al$],this);},Bwd:function(Aq){this.Ab3(Aq);},AiU:function(G){},AIV:function(
s){this.AiU(s);},Dj:function(E){if(this.KM===E)return;this.KM=E;this.AjF.R(E);},
Al$:function(G){var Fw=A._NewObject(A.Device.Filter,0);var Azt=A._NewObject(A.Device.
UInt32FilterCriterion,0);Azt.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhO()-((this.Mv-1)*86400))-1,true);Fw.CW(Azt);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CW(HV);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fw);},BkQ:function(){return this.Mv;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUs._Init.call(this.V4={I:this},0);C.AkO._Init.call(
this.AjF={I:this},0);this.__proto__=C.K_;this.V4.H(BD);this.AjF.H(UX);this.J(this.
V4,0);this.J(this.AjF,0);this.V4.At([this,this.BkQ,this.Bwd]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V4._Done();this.AjF._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V4._ReInit();this.AjF.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANA={V$:null,YJ:null,RatingMode:null,PE:null,_Init:
function(aArg){C.Ce._Init.call(this,aArg);C.Nb._Init.call(this.V$={I:this},0);C.
BU._Init.call(this.YJ={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Ir._Init.call(this.PE={I:this},0);this.__proto__=C.ANA;var B;this.Hi.R(A.
aaR(A.acf.ACl));this.I$(A.aaR(A.acf.A5y));this.V$.H(AIv);this.V$.Aj(true);this.V$.
T(A.aaR(A.acf.AsQ));this.V$.Bi(true);this.V$.Ne(23);this.YJ.H(Bqx);this.YJ.Aj(true
);this.YJ.T(A.aaR(A.acf.A_P));this.YJ.Bi(false);this.PE.H(Bqy);this.PE.Aj(true);
this.PE.T(A.aaR(A.acf.A5v));this.PE.Bi(true);this.PE.F$(3);this.PE.EU(14);this.PE.
IP(A.aaR(A.acf.Kl)+AIw);this.PE.Ja(A.aaR(A.acf.GK)+AIw);this.J(this.V$,0);this.J(
this.YJ,0);this.J(this.PE,0);this.V$.AR=[B=this.V$,B.Nh];this.YJ.At([B=this.RatingMode
,B.B_,B.B$]);this.YJ.CK(this.RatingMode);this.PE.At([B=A._GetAutoObject(A.Device.
Device),B.A8n,B.BaW]);},_Done:function(){this.__proto__=C.Ce;this.V$._Done();this.
YJ._Done();this.RatingMode._Done();this.PE._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.V$._ReInit();this.YJ._ReInit();this.RatingMode.
_ReInit();this.PE._ReInit();this.Hi.R(A.aaR(A.acf.ACl));this.I$(A.aaR(A.acf.A5y)
);this.V$.T(A.aaR(A.acf.AsQ));this.YJ.T(A.aaR(A.acf.A_P));this.PE.T(A.aaR(A.acf.
A5v));this.PE.IP(A.aaR(A.acf.Kl)+AIw);this.PE.Ja(A.aaR(A.acf.GK)+AIw);},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.V$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Au1={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hm(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FQ=A.jb.Ad_;var GW=A.jb.Bm;if(this.Hk){FQ=A.jb.Bm;GW=A.jb.
Text;}if(!He){this.Background.L(FQ);this.V.L(A.jb.CJ);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FQ);this.V.L(GW);}this.LF=He;this.KF=Fu;this.Qs=GE;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Au1;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.AC9={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PP,B.EB],0);A.pe([this,this.DX],this);},De:function(E){C.BQ.De.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.AC6));break;case 1:this.Ap.Ax(A.aaL(A.ach.APb));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APd));break;default:A.ab5("%s%e",AZC,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC9;this.Ap.H(AZD);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.AC6));this.Init(aArg);},_Done:function(){this.
__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.AC_={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PP,B.EB],0);A.pe([this,this.DX],this);},De:function(E){C.BQ.
De.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.AC7));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APc));break;case 2:this.Ap.Ax(A.aaL(A.ach.APe));break;default:A.ab5("%s%e"
,AZC,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC_;
this.Ap.H(AZD);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.AC7));this.Init(aArg);},
_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fx={BS:null,AxT:A.jV,De:function(E){C.JJ.De.call(
this,E);this.BS.L(E);},Kv:function(E){if(this.AxT===E)return;this.AxT=E;this.BS.
R(E);},_Init:function(aArg){C.JJ._Init.call(this,aArg);C.CH._Init.call(this.BS={
I:this},0);this.__proto__=C.Fx;this.BS.AZ(0x34);this.BS.H(Ayt);this.BS.A6(0x11);
this.BS.L(A.jb.Text);this.J(this.BS,0);this.BS.S(A.aaL(A.fl.Af));this.BS.A2(A.aaL(
A.fl.Ak));this.BS.Cu(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JJ;this.
BS._Done();C.JJ._Done.call(this);},_ReInit:function(){C.JJ._ReInit.call(this);this.
BS._ReInit();this.BS.S(A.aaL(A.fl.Af));this.BS.A2(A.aaL(A.fl.Ak));this.BS.Cu(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JJ._Mark.call(this,D);if((B=this.BS)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOz={Wx:function(G){var B;this.Agt();this.AL5(A.aaR(A.acf.Bi2),[this,this.BnD],[
B=A._GetAutoObject(A.Device.Device),B.A8o,B.BaX]);A._GetAutoObject(C.B4).Gu();this.
I1(A.aaR(A.acf.AU5),[this,this.ATw],5);this.I1(A.aaR(A.acf.AU3),[this,this.ATv],
7);this.I1(A.aaR(A.acf.AnW),[this,this.AwQ],2);this.I1(A.aaR(A.acf.AdS),[this,this.
AEM],1);this.I1(A.aaR(A.acf.Aux),[this,this.AEG],0);A._GetAutoObject(C.B4).Gu();
A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Anc)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abp:function(){return C.ABZ;},Abq:function(
){return C.ADf;},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6x());},HO:function(G){C.GZ.HO.call(this,G);if(this.Ake()===false
){this.N.Cs(A.aaL(A.ach.Abz));this.N.Cg=[this,this.A5Z];this.N.FC(A.jV);}this.N.
OO(false);this.N.OP(false);},Agf:function(){A._GetAutoObject(C.A9).Cd(44);},BnD:
function(G){A._GetAutoObject(A.Device.Device).AwG(!A._GetAutoObject(A.Device.Device
).AqO);this.An4(this);},An4:function(G){var Be=A._GetAutoObject(A.Device.Device).
An.Filter.E_();var Av=Be.DL(30,3);if(!!Av)Be.Ni(Av);if(A._GetAutoObject(A.Device.
Device).AqO){var Az$=A._NewObject(A.Device.UInt32FilterCriterion,0);var A2m=A._GetAutoObject(
A.Device.Helper).Dv()-21600;Az$.Initialize(30,3,A2m,true);Be.CW(Az$);}A._GetAutoObject(
A.Device.Device).An.Bk(Be);},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.
__proto__=C.AOz;var B;this.Dr(C.AO9);this.Dj(A.aaR(A.acf.A7P));this.AwL([B=A._GetAutoObject(
A.Device.Device),B.A8m,B.BaV]);},_ReInit:function(){C.GZ._ReInit.call(this);this.
Dj(A.aaR(A.acf.A7P));},_className:"Application::FreshCowListScreen"};C.AOy={_Init:
function(aArg){C.I3._Init.call(this,aArg);this.__proto__=C.AOy;this.Lc.Ar(false);
this.Lc.Aj(false);this.Lc.Z(false);this.Jq.Ar(false);this.Jq.Aj(false);this.Jq.Z(
false);},_className:"Application::FreshCowListFilterScreen"};C.AO9={DX:function(
G){C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter).AdX(7));
},_Init:function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=C.AO9;},_className:
"Application::HeaderFreshCowListFilter"};C.ADf={Jw:null,D0:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.Jw={I:this},0);C.CH._Init.call(
this.D0={I:this},0);this.__proto__=C.ADf;this.A9D(1);this.Jw.H(Bqz);this.Jw.R((A.
aaR(A.acf.Calving)+AcQ)+A.aaR(A.acf.A$o));this.Jw.L(A.jb.Text);this.D0.H(BqA);this.
D0.R(A.aaR(A.acf.ADZ));this.D0.L(A.jb.Text);this.J(this.Jw,0);this.J(this.D0,0);
this.Jw.S(A.aaL(A.fl.Ak));this.Jw.A2(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.
D0.A2(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.Jw._Done();this.
D0._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
Jw._ReInit();this.D0._ReInit();this.Jw.R((A.aaR(A.acf.Calving)+AcQ)+A.aaR(A.acf.
A$o));this.D0.R(A.aaR(A.acf.ADZ));this.Jw.S(A.aaL(A.fl.Ak));this.Jw.A2(A.aaL(A.fl.
Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Jw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.ABZ={AGO:null,KP:null,UC:null,AP:null,A$:null,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.UC.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A$.H([this.UC.M[2]-1,0,this.UC.M[2]+1,aSize[1]]);this.KP.H([this.UC.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.
UC.De(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var
Iz=this.AX.CF(Ad,0);var Mf=this.AX.CF(Ad,1);var A2l=this.AX.CF(Ad,29);var Alw=this.
AX.Hu(Ad,28);this.T(Mf.toFixed());this.KP.R(A2l.toFixed());this.UC.Ab3(A._GetAutoObject(
A.Device.Device).AqN+1);this.UC.Bnf(Alw);this.UC.R(A._GetAutoObject(A.acj.KK).AjJ(
Alw));A._GetAutoObject(A.Device.Device).SP(Ad);this.Ap2(Iz);this.Axn();A._GetAutoObject(
A.Device.Device).Bt.Bk(null);this.Am();}},A4f:function(G){this.UC.Ab5(this.AGO);
},Axn:function(){var Gf=A._GetAutoObject(A.Device.Device).Bt.B9();this.AGO=A._NewObject(
C.Ajr,0);if(Gf>0){var O=Gf-1;while(O>=0){var D8=A._GetAutoObject(A.Device.Device
).Bt.Hu(O,6);this.Atr(this.AGO,O,9,D8);O=O-1;}}A.pe([this,this.A4f],this);},Atr:
function(A0R,Ad,A0Q,Qf){var Alq=A._GetAutoObject(A.Device.Device).Bt.I5(Ad,A0Q);
if(!!Alq)A0R.Os(Alq,Qf);},Ap2:function(Ac5){var Fw=A._NewObject(A.Device.Filter,
0);var Azt=A._NewObject(A.Device.UInt32FilterCriterion,0);Azt.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).ZN(A._GetAutoObject(A.Device.Device).AqN)-1,true);Fw.CW(Azt);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,Ac5,true);Fw.
CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bk(Fw);},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.Text._Init.call(this.KP={I:this},0);C.ATZ._Init.call(this.
UC={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A$={I:this},0);this.__proto__=C.ABZ;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(
this.KP,0);this.J(this.UC,0);this.J(this.AP,0);this.J(this.A$,0);this.KP.S(A.aaL(
A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.KP._Done();
this.UC._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.KP._ReInit();this.UC._ReInit();this.AP._ReInit(
);this.A$._ReInit();this.KP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AGO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.ATZ={AUG:0,Init:function(aArg
){},AOG:function(){return A._GetAutoObject(A.Device.Helper).Aql(this.AUG);},AOI:
function(){return this.AOG()+(this.Mv*86400);},Bnf:function(E){if(this.AUG===E)return;
this.AUG=E;A.pe([this,this.WF],this);},_Init:function(aArg){C.Ahw._Init.call(this
,aArg);this.__proto__=C.ATZ;this.Bc.H(BqB);this.Bnc(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Du:function(){if(this.K&&this.K.Du)return this.K.Du.apply(this,arguments);else
return C.FactoryResetScope.Bue.apply(this,arguments);},Bue:function(){return 2;}
,Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.FactoryResetScopeToString.
BR(this.C7(aIndex));},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.FactoryResetScopeToString.
_Init.call(this.FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;
this.Cb.Set(0,0);this.Cb.Set(1,1);var J2=this._variants();if(J2){this.K={};J2._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Cm;this.FactoryResetScopeToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Bgm:false,Init:function(
aArg){this.Bgm=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Ev:function(
G){if(this.Bdu){A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).An);if(this.Bgm)A._GetAutoObject(A.Device.Device).A5(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A5(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Ev.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.AR2={Wx:function(G){this.Agt();A._GetAutoObject(C.B4).Tw(A.aaR(A.acf.Settings
),[this,this.A3n]);A._GetAutoObject(C.B4).Gu();this.AL3();A._GetAutoObject(C.B4).
NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.
B4).NC(A.aaR(A.acf.ARg)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(
6);},DE:function(G){},Abp:function(){return C.Aqq;},Abq:function(){return C.AqX;
},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).ACU());},HO:function(G){C.QB.HO.call(this,G);if(this.Ake()===false){this.
N.Cs(A.aaL(A.ach.Avt));this.N.Cg=[this,this.ANT];this.N.FC(A.jV);}this.N.OO(false
);this.N.OP(false);},Agf:function(){A._GetAutoObject(C.A9).Cd(47);},A3n:function(
G){A._GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A9).Cd(89);},_Init:
function(aArg){C.QB._Init.call(this,aArg);this.__proto__=C.AR2;this.Dr(C.AC$);this.
Dj(A.aaR(A.acf.A7L));this.AS5(A._GetAutoObject(C.Av3));},_ReInit:function(){C.QB.
_ReInit.call(this);this.Dj(A.aaR(A.acf.A7L));},_className:"Application::NoTransponderListScreen"
};C.AR1={_Init:function(aArg){C.I3._Init.call(this,aArg);this.__proto__=C.AR1;this.
KV.Ar(false);this.KV.Aj(false);this.KV.Z(false);},_className:"Application::NoTransponderListFilterScreen"
};C.AC$={DX:function(G){C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.
Converter).AdX(8));},_Init:function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=
C.AC$;},_className:"Application::HeaderNoTransponderListFilter"};C.ABI={AuN:null
,Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuN.BR(aIndex
);},_Init:function(aArg){C.Gc._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuN={I:this},0);this.__proto__=C.ABI;},_Done:function(){this.__proto__=
C.Gc;this.AuN._Done();C.Gc._Done.call(this);},_ReInit:function(){C.Gc._ReInit.call(
this);this.AuN._ReInit();},_Mark:function(D){var B;C.Gc._Mark.call(this,D);if((B=
this.AuN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.ALY={Co:null,Ad0:null,Init:function(aArg){this.Bb(this.Co);},Lm:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaD];this.BP.Cg=null;
this.BP.Cl=[this,this.A20];this.BP.CV(A.jV);this.BP.Cs(null);this.BP.C1(A.aaL(A.
ach.Aex));}return this.BP;},AAp:function(G){var Aa=(C.Ajh.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad0)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$U);},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ajh._Init.call(this.
Co={I:this},0);C.Ajh._Init.call(this.Ad0={I:this},0);this.__proto__=C.ALY;this.H(
Rn);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(IU);this.Co.T(A.aaR(A.acf.
AD9));this.Ad0.H(Qa);this.Ad0.T(A.aaR(A.acf.Tv));this.J(this.Co,0);this.J(this.Ad0
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAp];this.Ad0.AR=[this,this.
AAp];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Co._Done();this.
Ad0._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Co._ReInit();this.Ad0._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AD9));this.Ad0.T(A.aaR(A.acf.Tv));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BFr={Undefined:0,BFp:1,BFq:2,IdScanned:3,BEl:4,BDr:5,BD7:6};C.AMa={A__:function(
){A._GetAutoObject(A.Device.Device).A5(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Be1]);},_Init:function(aArg){C.AuD._Init.call(
this,aArg);this.__proto__=C.AMa;this.Gc.At(1);this.AS$(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aer={VU:null,VV:null,VX:null,Ag0:null,Ag1:null,Ag2:null,CE:null,Cg:null,Cl:null
,AnX:A.jV,AnY:A.jV,AnZ:A.jV,Aq4:0,Aq5:0,Aq6:0,Ahh:0,ZA:false,Zz:false,Ask:false,
Asz:false,Asy:false,Ajx:function(Ff){this.CE=Ff.CE;this.Cg=Ff.Cg;this.Cl=Ff.Cl;this.
AnX=Ff.AnX;this.AnY=Ff.AnY;this.AnZ=Ff.AnZ;this.Ahh=Ff.Ahh;this.VU=Ff.VU;this.VV=
Ff.VV;this.VX=Ff.VX;this.Ag0=Ff.Ag0;this.Ag1=Ff.Ag1;this.Ag2=Ff.Ag2;this.Asy=Ff.
Asy;this.Asz=Ff.Asz;this.Ask=Ff.Ask;this.Zz=Ff.Zz;this.ZA=Ff.ZA;this.Aq4=Ff.Aq4;
this.Aq5=Ff.Aq5;this.Aq6=Ff.Aq6;},AkN:function(Ff){Ff.CE=this.CE;Ff.Cg=this.Cg;Ff.
Cl=this.Cl;Ff.Hx(this.AnX);Ff.FC(this.AnY);Ff.CV(this.AnZ);Ff.AFb(this.Ahh);Ff.AE4(
this.VU);Ff.ArK(this.VV);Ff.Anu(this.VX);Ff.C1(this.Ag0);Ff.Cs(this.Ag1);Ff.C2(this.
Ag2);Ff.OO(this.Asy);Ff.OP(this.Asz);Ff.Ask=this.Ask;Ff.Zz=this.Zz;Ff.ZA=this.ZA;
Ff.Bmm(this.Aq4);Ff.ASZ(this.Aq5);Ff.A9O(this.Aq6);},_Init:function(aArg){this.__proto__=
C.Aer;this.VU=A.aaL(A.fl.Ak);this.VV=A.aaL(A.fl.Ak);this.VX=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VU=A.aaL(
A.fl.Ak);this.VV=A.aaL(A.fl.Ak);this.VX=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VV)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.VX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag1)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CE)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cg)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Asv._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.AC9);},_className:"Application::NewAnimalSetTransponderScreen"};C.C6={Aa$:null
,CountryToString:null,Du:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lu(aIndex);},DZ:function(A_){return A_;
},H3:function(){return 39;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.
Aa$)(F=this.Aa$,F[2].call(F[0],E));},A1n:function(G){var F;if(!!this.Aa$)this.Q=(
F=this.Aa$,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_,this.B$],0);},AEX:
function(E){if(A.aaZ(this.Aa$,E))return;if(!!this.Aa$)A.z$([this,this.A1n],this.
Aa$,0);this.Aa$=E;if(!!this.Aa$)A.zX([this,this.A1n],this.Aa$,0);A.pe([this,this.
A1n],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C6;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Aa$)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OZ={AC:null,Q:null,Background:null,Ip:null,Io:null,MZ:
0,AM:0,Go:0,F_:0,Agb:function(G){this.Kb(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(IB){this.Background.
L(A.jb.AV);this.Dk(256);}else{this.Background.L(this.MZ);this.Dk(256);}},Aga:function(
G){this.J8(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3l],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3l],E,0);if(!!E)A.pe([this
,this.A3l],this);},CT:function(E){if(this.MZ===E)return;this.MZ=E;this.Am();},Kb:
function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J8:function(
G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Go)E=this.F_;if(E>this.F_)E=this.Go;if(this.AM===E)return;this.AM=E;
this.Am();},F$:function(E){if(this.Go===E)return;this.Go=E;this.Am();},EU:function(
E){if(this.F_===E)return;this.F_=E;this.Am();},C3:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},At:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},A3l:function(G){var F;if(!!this.
AC){this.F$(0);this.EU(this.AC.H3());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);A.Core.BK._Init.call(this.Ip={
I:this},0);A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.OZ;this.H(A$V
);this.Background.H(Atc);this.Ip.Filter=4;this.Io.Filter=5;this.MZ=A.jb.CJ;this.
J(this.Background,0);this.Ip.BL=[this,this.Agb];this.Ip.D1=[this,this.Agb];this.
Io.BL=[this,this.Aga];this.Io.D1=[this,this.Aga];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Ip._Done();this.Io._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Ip._ReInit();this.Io._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RT={A1f:A.jV,Ai:function(
Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5h));this.Kv(this.A1f);},Cf:function(
G){C.Fx.Cf.call(this,G);var Alw=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Alw)this.A1f=W$;else this.A1f=A._GetAutoObject(A.acj.KK).AjJ(Alw);this.Am();
},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RT;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RU={A2k:0,Ai:function(Ae){C.Fx.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARe));if(this.A2k>0)this.Kv(this.A2k.toFixed());else
this.Kv(A.aaR(A.acf.Unknown));},Cf:function(G){C.Fx.Cf.call(this,G);this.A2k=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fx._Init.call(
this,aArg);this.__proto__=C.RU;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Du:function(){return 5;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gj:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BR(aIndex);},DZ:function(A_){return A_;},H3:function(){return 4;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Aku(E);},A1G:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B_,
this.B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1G],[B=this.Animal,B.ASi,B.Aku],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1G],[B=this.Animal,B.ASi,B.Aku],0);A.pe([this,this.A1G],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Du:function(){return 99;},C7:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BR(aIndex);},DZ:function(A_){return A_;
},H3:function(){return 98;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal
)this.Animal.NZ(E);},A1d:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B_,this.B$],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1d],[B=this.Animal,B.Av7,B.NZ],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1d],[B=this.Animal,B.Av7,B.NZ],0);A.pe([
this,this.A1d],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARz={V7:null,YH:null,AeK:null,Init:function(
aArg){this.Bb(this.V7);},Ads:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YH)this.BxX();else if(Aa===this.V7)this.BAG(this);else throw new
Error(Ayd);A._GetAutoObject(A.Device.Device).Dw(0);},BAG:function(G){var B;var F;
var Vk=(C.Amp.isPrototypeOf(B=(F=A._GetAutoObject(C.A9).Q,F[1].call(F[0])))?B:null
);if(!Vk){A.ab5("%s",BqC);return;}Vk.AKw(this);},BxX:function(){A._GetAutoObject(
A.Device.Helper).W.AGw(true);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A5(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mn._Init.call(this.V7={I:this},0);C.Mn._Init.call(this.YH={
I:this},0);C.VO._Init.call(this.AeK={I:this},0);this.__proto__=C.ARz;var B;this.
H(AcN);this.V7.H(Qa);this.V7.Ar(true);this.V7.T(A.aaR(A.acf.A_R));this.V7.Bi(true
);this.YH.H(IU);this.YH.Ar(true);this.YH.T(A.aaR(A.acf.A4F));this.YH.Bi(true);this.
AeK.H(BD);this.AeK.T(A.aaR(A.acf.ACI));this.AeK.Bi(true);this.J(this.V7,0);this.
J(this.YH,0);this.J(this.AeK,0);this.V7.AR=[this,this.Ads];this.YH.AR=[this,this.
Ads];this.AeK.ASN([B=A._GetAutoObject(A.Device.Device),B.Arr,B.Ate]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V7._Done();this.YH._Done(
);this.AeK._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V7._ReInit();this.YH._ReInit();this.AeK._ReInit();this.V7.
T(A.aaR(A.acf.A_R));this.YH.T(A.aaR(A.acf.A4F));this.AeK.T(A.aaR(A.acf.ACI));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VO={
Ai:function(Ae){C.T$.Ai.call(this,Ae);var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hk
){FQ=A.jb.Text;GW=A.jb.Bm;}if(!this.LF){this.Background.L(FQ);this.V.L(A.jb.AmZ);
}else if(this.Qs){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KF){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FQ);this.V.
L(GW);}if(this.Amx){this.Ml.Cv(1);this.Ml.L(A.jb.H8);}else{this.Ml.Cv(0);this.Ml.
L(A.jb.Bm);}},_Init:function(aArg){C.T$._Init.call(this,aArg);this.__proto__=C.VO;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AvW={C8:null,A1:null,AF:
null,Akf:null,QW:null,EM:null,ARR:Lv,Bl:function(aSize){C.Co.Bl.call(this,aSize);
var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hk){FQ=A.jb.Bm;GW=A.jb.Text;}this.Background.
L(FQ);this.V.L(GW);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CA;C.Co.Ai.call(this
,Ae);this.Akf.L(this.V.AQ);this.QW.L(this.V.AQ);this.QW.R(BqD);this.T(((this.ARR+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak3(840003123456789).toFixed(
));if(!!this.A1&&!!this.AF){var A2q=this.QW.Aff([(this.QW.String.length-(F=this.
AF,F[1].call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3L=this.QW.Aff([this.
QW.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABa=this.QW.Db();this.EM.H([
A2q[0]-1,ABa[1],A3L[0]+1,ABa[3]]);}else this.EM.H(this.QW.Db());},DB:function(E){
if(this.C8===E)return;this.C8=E;this.Akf.Ax(E);},OM:function(E){if(A.aaZ(this.A1
,E))return;if(!!this.A1)A.z$([this,this.AaC],this.A1,0);this.A1=E;if(!!E)A.zX([this
,this.AaC],E,0);if(!!E)A.pe([this,this.AaC],this);},PQ:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaE],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaE],E,0);if(!!E)A.pe([this,this.AaE],this);},AaE:function(G){this.Am(
);},AaC:function(G){this.Am();},ArW:function(E){if(this.ARR===E)return;this.ARR=
E;this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akf={I:this},0);A.acg.Text._Init.call(this.QW={I:this},0);A.acg.BT._Init.call(
this.EM={I:this},0);this.__proto__=C.AvW;this.H(KY);this.V.A6(0x11);this.Akf.H(O3
);this.QW.H(BqE);this.EM.H(BqF);this.EM.Ng(2);this.EM.L(A.jb.E1);this.J(this.Akf
,0);this.J(this.QW,0);this.J(this.EM,0);this.QW.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Akf._Done();this.QW._Done();this.EM._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Akf._ReInit();this.
QW._ReInit();this.EM._ReInit();this.QW.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={ATU:0,Init:
function(aArg){var B;A.zX([this,this.Bej],[B=A._GetAutoObject(A.Device.Device),B.
AEp,B.AIF],0);A.pe([this,this.Bej],this);},HO:function(G){C.Tz.HO.call(this,G);if(
this.AjN)this.N.Cs(A.aaL(A.ach.AD));else this.N.Cs(A.aaL(A.ach.ANb));this.N.C2(A.
aaL(A.ach.Options));this.N.FC(A.jV);this.N.CV(A.jV);this.N.Cg=[this,this.A_A];this.
N.Cl=[this,this.Wx];this.N.ArK(A.aaL(A.fl.Ak));this.N.Anu(A.aaL(A.fl.Ak));},MU:function(
G){this.BeF(this);},On:function(G){this.BAz(this);},AdP:function(Aid,Aie,Bw2){A.
_GetAutoObject(C.B4).ABA(Aid,Aie,[this,this.A8I,this.ATc],Bw2);},Wx:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjN){A._GetAutoObject(C.B4).
Tw(A.aaR(A.acf.BhK),[this,this.Bnz]);A._GetAutoObject(C.B4).Gu();}this.AdP(A.aaR(
A.acf.Rating),[this,this.ATA],3);this.AdP(A.aaR(A.acf.Aft),[this,this.ATC],2);this.
AdP(A.aaR(A.acf.Temperature),[this,this.ATB],1);this.AdP(A.aaR(A.acf.AdS),[this,
this.Bnw],0);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.BhO
));A._GetAutoObject(A.Device.Device).Dw(6);},ATc:function(E){if(this.ATU===E)return;
this.ATU=E;A.abo([this,this.A8I,this.ATc],0);},Bej:function(G){this.ATc(A._GetAutoObject(
A.Device.Device).D9);},A8I:function(){return this.ATU;},_Init:function(aArg){C.Tz.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vx:null
,Init:function(aArg){var B;A.zX([this,this.Af8],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);A.pe([this,this.Bgr],this);A.pe([this,this.Q8],this);},CC:function(
G){C.Tz.CC.call(this,G);A.pe([this,this.Bgw],this);},AGC:function(G){C.Tz.AGC.call(
this,G);if(!!this.Le)this.Ahz(this.Le,this.Vx);},HO:function(G){C.Tz.HO.call(this
,G);this.N.Cs(A.aaL(A.ach.AQO));this.N.C2(A.aaL(A.ach.AQP));if(this.AjN)this.N.ASZ(
0);else this.N.ASZ(1);this.N.A9O(A._GetAutoObject(A.Device.Converter).BgV(A._GetAutoObject(
A.Device.Device).D9));this.N.FC(A.jV);this.N.CV(A.jV);this.N.Cg=[this,this.Blm];
this.N.Cl=[this,this.BnB];this.N.ArK(A.aaL(A.fl.Ak));this.N.Anu(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QI()){this.N.I7.Dk(100);this.N.Cg=null;
}else this.N.I7.Dk(255);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.Ld.
Dk(100);this.N.Cl=null;}else this.N.Ld.Dk(255);if(A._GetAutoObject(A.Device.Device
).An.B9()<=1){this.N.TY.Dk(100);this.N.TZ.Dk(100);}else{this.N.TY.Dk(255);this.N.
TZ.Dk(255);}},MU:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;
var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB+1;if(LB>=A._GetAutoObject(A.
Device.Device).An.B9())LB=0;A._GetAutoObject(A.Device.Helper).G7(LB);},On:function(
G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;var LB=A._GetAutoObject(
A.Device.Helper).W.CL;LB=LB-1;if(LB<0)LB=A._GetAutoObject(A.Device.Device).An.B9(
)-1;A._GetAutoObject(A.Device.Helper).G7(LB);},Af7:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A9).Cd(94);},Blm:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},BnB:function(G){this.BeF(this);},Q8:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).Mq());A.pe([this,this.Bgw
],this);},Bgr:function(G){if(!A._GetAutoObject(A.Device.Device).An.B9()){this.Vx.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QI()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.Vx.R(A.aaR(A.acf.AEf));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).ACV(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Vx.R(A.aaR(A.acf.AN3));else this.Vx.R(A.aaR(
A.acf.AN2));}else this.Vx.R(A.aaR(A.acf.ARY));}else this.Vx.Z(false);},Bgw:function(
G){var BBy=A._GetAutoObject(A.Device.Helper).W.Id;var A3O=A._GetAutoObject(A.Device.
Device).An.LS(0,BBy);if(!A._GetAutoObject(A.Device.Device).An.B9())A._GetAutoObject(
A.Device.Helper).G7(-1);else if(A3O<0)A._GetAutoObject(A.Device.Helper).G7(0);},
Af8:function(G){this.Bgr(this);this.HO(this);},_Init:function(aArg){C.Tz._Init.call(
this,aArg);C.AkO._Init.call(this.Vx={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.APq);this.Vx.H(Fe);this.J(this.Vx,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tz;this.Vx._Done();C.Tz._Done.call(this);},_ReInit:function(){
C.Tz._ReInit.call(this);this.Vx._ReInit();},_Mark:function(D){var B;C.Tz._Mark.call(
this,D);if((B=this.Vx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMp={QQ:null,V8:null,AbE:null,YK:null,Init:function(aArg){var B;var F;this.Bb(
this.QQ);if(!!A._GetAutoObject(C.A9).Q){var Vk=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A9).Q,F[1].call(F[0])))?B:null);if(!Vk){A.ab5("%s",AZE);
return;}else{if(Vk.AjN)this.QQ.T(A.aaR(A.acf.Bg));else this.QQ.T(A.aaR(A.acf.ET)
);var Azp=A._GetAutoObject(A.Device.Device).An.Filter;if(!Azp||A._GetAutoObject(
A.Device.Helper).Aq$(Azp))this.YK.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).An.B9()){this.V8.Ar(false);this.QQ.Ar(false);}}}},Ads:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbE)A._GetAutoObject(C.A9).Cd(9);else if(Aa===this.V8)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QQ)this.BB4();else if(Aa===this.YK)this.
A1l();else throw new Error(Ayd);},BB4:function(){var B;var F;var Vk=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A9).Q,F[1].call(F[0])))?B:null);if(!Vk){A.
ab5("%s",AZE);return;}Vk.A_A(this);},A1l:function(){var B;var F;var Vk=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A9).Q,F[1].call(F[0])))?B:null);if(!Vk){A.
ab5("%s",AZE);return;}Vk.Q8(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mn._Init.call(this.QQ={I:this},0);C.Mn._Init.call(this.V8={I:this},
0);C.Mn._Init.call(this.AbE={I:this},0);C.Mn._Init.call(this.YK={I:this},0);this.
__proto__=C.AMp;this.H(AfB);this.QQ.H(Aab);this.QQ.Ar(true);this.QQ.T(A.aaR(A.acf.
ET));this.QQ.Bi(true);this.V8.H(Qa);this.V8.Ar(true);this.V8.T(A.aaR(A.acf.AUi));
this.V8.Bi(true);this.AbE.H(IU);this.AbE.T(A.aaR(A.acf.AkQ));this.AbE.Bi(true);this.
YK.H(BD);this.YK.T(A.aaR(A.acf.AB5));this.YK.Bi(true);this.J(this.QQ,0);this.J(this.
V8,0);this.J(this.AbE,0);this.J(this.YK,0);this.QQ.AR=[this,this.Ads];this.V8.AR=[
this,this.Ads];this.AbE.AR=[this,this.Ads];this.YK.AR=[this,this.Ads];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QQ._Done();this.V8._Done(
);this.AbE._Done();this.YK._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QQ._ReInit();this.V8._ReInit();this.AbE.
_ReInit();this.YK._ReInit();this.QQ.T(A.aaR(A.acf.ET));this.V8.T(A.aaR(A.acf.AUi
));this.AbE.T(A.aaR(A.acf.AkQ));this.YK.T(A.aaR(A.acf.AB5));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I8={T0:null,Ez:null,Yh:null,Background:null,Ap:null,Ip:null,Io:null,MZ:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var He=((Ae&0x10)===0x10
);var IB=((Ae&0x40)===0x40);if(IB){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.Dk(256);}else if(He){this.Background.L(this.MZ);this.Ap.L(A.jb.Text);this.Dk(
256);}else{this.Background.L(this.MZ);this.Ap.L(A.jb.Text);this.Dk(128);}if(!this.
AM)this.Ap.Cv(0);else if(this.AM>0){if(A.aaZ(this.T0,[B=A._GetAutoObject(A.Device.
Device),B.Awf,B.AyH]))this.Ap.Cv(2);else if(A.aaZ(this.T0,[B=A._GetAutoObject(A.
Device.Device),B.Awe,B.AyG]))this.Ap.Cv(3);else if(!!this.Yh&&((F=this.Yh,F[1].call(
F[0]))===1))this.Ap.Cv(1);else this.Ap.Cv(0);}else if(A.aaZ(this.T0,[B=A._GetAutoObject(
A.Device.Device),B.Awf,B.AyH]))this.Ap.Cv(6);else if(A.aaZ(this.T0,[B=A._GetAutoObject(
A.Device.Device),B.Awe,B.AyG]))this.Ap.Cv(7);else if(!!this.Yh&&((F=this.Yh,F[1].
call(F[0]))===1))this.Ap.Cv(5);else this.Ap.Cv(4);},Agb:function(G){this.Kb(this
);},Aga:function(G){this.J8(this);},Kb:function(G){this.Bx(1);},J8:function(G){this.
Bx(-1);},Bmw:function(E){if(A.aaZ(this.T0,E))return;if(!!this.T0)A.z$([this,this.
A26],this.T0,0);this.T0=E;if(!!E)A.zX([this,this.A26],this.T0,0);A.pe([this,this.
A26],this);},Ul:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.
Af$],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.Af$],this.Ez,0);if(!!E)A.pe([this
,this.Af$],this);},A26:function(G){var F;if(!!this.T0)this.Bx((F=this.T0,F[1].call(
F[0])));},Af$:function(G){A.pe([this,this.BCf],this);},CT:function(E){if(this.MZ===
E)return;this.MZ=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T0)(F=this.T0,F[2].call(F[0],E));this.Am();A.abo([this,this.Ug,this.
Bx],0);},A9E:function(E){if(A.aaZ(this.Yh,E))return;if(!!this.Yh)A.z$([this,this.
Af$],this.Yh,0);this.Yh=E;if(!!E)A.zX([this,this.Af$],this.Yh,0);if(!!E)A.pe([this
,this.Af$],this);},BCf:function(G){var F,CA;if(!this.Yh||!this.Ez)return;this.Bmw(
A._GetAutoObject(A.Device.Helper).Bc9((F=this.Yh,F[1].call(F[0])),(CA=this.Ez,CA[
1].call(CA[0]))));this.Am();},Ug:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BK._Init.call(this.Ip={I:this},0);
A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.I8;this.H(AIx);this.Background.
AZ(0x3F);this.Background.H(AIx);this.Ap.AZ(0x3C);this.Ap.H(AIx);this.Ip.Filter=4;
this.Io.Filter=5;this.MZ=A.jb.CJ;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AUI));this.Ip.BL=[this,this.Agb];this.Io.BL=[this,this.Aga];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Ip._Done();this.Io._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Ip._ReInit(
);this.Io._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.ALX={Wx:function(G){var B;var F;this.Agt();if(!!A._GetAutoObject(A.Device.Helper
).AOE((F=this.FK,F[1].call(F[0])),0,true))this.AL5(A.aaR(A.acf.A6N),[this,this.BnC
],[B=A._GetAutoObject(A.Device.Device),B.A73,B.BaF]);else A._GetAutoObject(C.B4).
AaR(A.aaR(A.acf.A6N));A._GetAutoObject(C.B4).Gu();this.I1(A.aaR(A.acf.LinkTransponder
),[this,this.BmN],8);this.I1(A.aaR(A.acf.Tv),[this,this.Akr],9);this.I1(A.aaR(A.
acf.A$I),[this,this.Bno],10);this.I1(A.aaR(A.acf.AF9),[this,this.ATh],3);this.I1(
A.aaR(A.acf.AnW),[this,this.AwQ],2);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).NC(A.aaR(A.acf.Anc)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abp:function(){return C.Aqq;},Abq:function(){return C.AqX;
},Q8:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6o((F=this.FK,F[1].call(F[0]))));},HO:function(G){var F;C.GZ.HO.
call(this,G);if(this.Ake()===false){this.N.Cs(A._GetAutoObject(A.Device.Converter
).BgX((F=this.FK,F[1].call(F[0]))));this.N.Cg=[this,this.AIS];this.N.FC(A.jV);}this.
N.OO(false);this.N.OP(false);},Agf:function(){A._GetAutoObject(C.A9).Cd(52);},A2$:
function(G){C.GZ.A2$.call(this,G);A.pe([this,this.A0e],this);},BnC:function(G){A.
_GetAutoObject(A.Device.Device).Awl(!A._GetAutoObject(A.Device.Device).Aqa);this.
An4(this);},An4:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E_();A._GetAutoObject(A.Device.Helper).Bn$(Be);if(A._GetAutoObject(A.Device.Device
).Aqa){var A14=A._GetAutoObject(A.Device.Helper).AOE((F=this.FK,F[1].call(F[0]))
,21600,true);Be.CW(A14);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.ALX;var B;this.Dj(A.aaR(A.acf.
Av1));this.AwL([B=A._GetAutoObject(A.Device.Device),B.A72,B.BaE]);},_ReInit:function(
){C.GZ._ReInit.call(this);this.Dj(A.aaR(A.acf.Av1));},_className:"Application::ActionListScreen"
};C.ALW={_Init:function(aArg){C.I3._Init.call(this,aArg);this.__proto__=C.ALW;},
_className:"Application::ActionListFilterScreen"};C.APq={IL:null,IR:null,Bc:null
,MB:A.jV,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8M,B.A9_],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);},De:function(E){C.IJ.De.call(this,E);this.IR.L(E);},DX:function(
G){C.IJ.DX.call(this,G);var Azp=A._GetAutoObject(A.Device.Device).An.Filter;if(!
Azp||A._GetAutoObject(A.Device.Helper).Aq$(Azp))this.IL.Z(false);else this.IL.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqU())this.AwX(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+A$W)+A._GetAutoObject(A.Device.Device).An.B9().
toFixed());else this.AwX(A$X);},AwX:function(E){if(this.MB===E)return;this.MB=E;
this.IR.R(E);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IL={I:this},0);A.acg.Text._Init.call(this.IR={I:this},0);A.acg.C5._Init.call(
this.Bc={I:this},0);this.__proto__=C.APq;this.HP.H(BqG);this.DS.H(BqH);this.IL.H(
BqI);this.IL.L(A.jb.Text);this.IR.H(A$Y);this.IR.Hm(2);this.IR.KR(true);this.IR.
A6(0x12);this.IR.R(A$Z);this.Bc.DC(Ayv);this.Bc.DM(Atb);this.Bc.L(A.jb.Bc);this.
J(this.IL,0);this.J(this.IR,0);this.J(this.Bc,0);this.IL.Ax(A.aaL(A.ach.Aez));this.
IR.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IJ;this.
IL._Done();this.IR._Done();this.Bc._Done();C.IJ._Done.call(this);},_ReInit:function(
){C.IJ._ReInit.call(this);this.IL._ReInit();this.IR._ReInit();this.Bc._ReInit();
this.IR.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IJ._Mark.call(this,D);if((
B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsF={Text:null,Bl:function(aSize){C.OZ.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OZ.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(W$);else this.Text.R(this.AC.Gj((F=this.Q,F[1].call(F[0]
))));var IB=((Ae&0x40)===0x40);if(IB)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OZ._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsF;this.Text.R(Ro);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.OZ;this.Text._Done();C.OZ.
_Done.call(this);},_ReInit:function(){C.OZ._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.OZ._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Aq8={C8:null,Bl:function(aSize){C.OZ.Bl.call(this,aSize);this.C8.H(A.abK(this.
C8.M,aSize));},Ai:function(Ae){var B;var F;C.OZ.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C8.Ax(null);else{this.C8.Ax(this.AC.ACQ(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C8.Cv(this.AC.ACS(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var IB=((
Ae&0x40)===0x40);if(IB)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OZ._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aq8;this.H(AIx);this.C8.H(A$V);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OZ;this.C8._Done();C.OZ._Done.call(this);},_ReInit:function(){C.OZ._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OZ._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuX={VQ:null,DirectionOfCountingToString:null,Aef:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return aIndex;
},Gj:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return A.jV;return this.
DirectionOfCountingToString.BR(aIndex);},DZ:function(A_){return A_;},H3:function(
){return this.Du()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.VQ)(F=
this.VQ,F[2].call(F[0],E));},ACQ:function(aIndex){if((aIndex<0)||(aIndex>=this.Du(
)))return null;return this.Aef.AsG(aIndex);},ACS:function(aIndex){if((aIndex<0)||(
aIndex>=this.Du()))return-1;return this.Aef.AsH(aIndex);},A1z:function(G){var F;
if(!!this.VQ)this.Q=(F=this.VQ,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.B$],0);},AeZ:function(E){if(A.aaZ(this.VQ,E))return;if(!!this.VQ)A.z$([this
,this.A1z],this.VQ,0);this.VQ=E;if(!!this.VQ)A.zX([this,this.A1z],this.VQ,0);A.pe([
this,this.A1z],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aef._Init.call(this.Aef={I:this},0);this.__proto__=C.AuX;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aef._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aef._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aef)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMh={Ht:null,Ez:null,AnimalIdGenerationMethodToString:
null,AdW:null,Du:function(){return 4;},C7:function(aIndex){var F;var A_=-1;if((aIndex<
0)||(aIndex>=this.Du()))return-1;switch(aIndex){case 0:A_=0;break;case 1:A_=1;break;
case 2:A_=this.By7((F=this.Ez,F[1].call(F[0])));break;case 3:A_=5;break;default:
throw new Error(BqJ+aIndex.toFixed());}return A_;},Gj:function(aIndex){if((aIndex<
0)||(aIndex>=this.Du()))return A.jV;return this.AnimalIdGenerationMethodToString.
BR(this.C7(aIndex));},DZ:function(A_){var aIndex=-1;switch(A_){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(BqK+A_.toFixed());}return aIndex;},H3:function(){return this.
Du()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.Ht)(F=this.Ht,F[2].
call(F[0],E));},ACQ:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;
return this.AdW.AsG(this.C7(aIndex));},ACS:function(aIndex){if((aIndex<0)||(aIndex>=
this.Du()))return-1;return this.AdW.AsH(this.C7(aIndex));},A05:function(G){var F;
if(!!this.Ht)this.Q=(F=this.Ht,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.B$],0);},Blu:function(E){if(A.aaZ(this.Ht,E))return;if(!!this.Ht)A.z$([this
,this.A05],this.Ht,0);this.Ht=E;if(!!this.Ht)A.zX([this,this.A05],this.Ht,0);A.pe([
this,this.A05],this);},Ul:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.
z$([this,this.Af$],this.Ez,0);this.Ez=E;if(!!this.Ez)A.zX([this,this.Af$],this.Ez
,0);A.pe([this,this.Af$],this);},Af$:function(G){A.pe([this,this.BxZ],this);},By7:
function(L4){var Rr=0;switch(L4){case 0:Rr=2;break;case 1:Rr=3;break;case 2:Rr=4;
break;default:throw new Error(BqL+L4.toFixed());}return Rr;},BxZ:function(G){var
Bd7=this.C7(this.DZ(this.Q));if(this.Q!==Bd7)this.At(Bd7);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdW._Init.call(this.
AdW={I:this},0);this.__proto__=C.AMh;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdW._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdW._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Ht)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGy={FJ:null,AaX:null,Q:null,Fl:null,Fa:null,HG:null,Wp:null,AW:null,HZ:null
,Km:null,A8:0,AM:0,Alo:0,Init:function(aArg){var B;A.zX([this,this.Bei],[B=A._GetAutoObject(
A.Device.Device),B.Anl,B.Aow],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hk){this.AW.FN(A.jb.CJ);this.HG.CT(A.jb.CJ);this.Wp.CT(A.jb.CJ);
this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FN(A.jb.CS);this.HG.
CT(A.jb.CS);this.Wp.CT(A.jb.CS);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}
}else{if(this.Hk){this.AW.FN(A.jb.CJ);this.HG.CT(A.jb.CJ);this.Wp.CT(A.jb.CJ);}else{
this.AW.FN(A.jb.CS);this.HG.CT(A.jb.CS);this.Wp.CT(A.jb.CS);}this.Bb(null);}},IZ:
function(G){C.Eg.IZ.call(this,G);if(!this.A8)this.FU(this);else this.Hd(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;
default:this.FJ.AkN((F=this.N,F[1].call(F[0])));}},FU:function(G){this.Ew(1);},Hd:
function(G){this.Ew(0);},Ew:function(EN){var F;if(!this.A8&&!!this.N)this.FJ.Ajx((
F=this.N,F[1].call(F[0])));this.A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>1)this.
A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{if(this.AW.A8j())this.Bb(
this.AW);else this.Bb(this.Wp);if(!this.AM)this.AW.SO(2);else this.AW.SO(7);}break;
default:throw new Error(Atd+this.A8.toFixed());}this.DJ(this);this.Am();},At:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},C3:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ug,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},On:function(G){this.AA4(2);},MU:function(G){this.AA4(
7);},AA4:function(Gz){var B;var Azq=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azq){var AAg=(A.Core.P.isPrototypeOf(B=this.QH(Azq,Gz,0x15))?B:null);if(!!AAg){
this.Bb(AAg);return true;}}return false;},AoX:function(G){A.pe([this,this.Bei],this
);},A3Z:function(G){var B;var F;if(!this.HZ.Ht){this.Km.AeZ(null);return;}switch((
F=this.HZ.Ht,F[1].call(F[0]))){case 0:case 1:this.Km.AeZ(null);break;case 3:this.
Km.AeZ([B=A._GetAutoObject(A.Device.Device),B.ASg,B.AZX]);break;case 2:this.Km.AeZ([
B=A._GetAutoObject(A.Device.Device),B.ASh,B.AZY]);break;case 4:case 5:this.Km.AeZ([
B=A._GetAutoObject(A.Device.Device),B.AEu,B.AIJ]);break;default:throw new Error(
BqM+(F=this.HZ.Ht,F[1].call(F[0])).toFixed());}},Bei:function(G){var F;if(!this.
HZ.Ht)return;A.pe([this,this.A3Z],this);var AtT=false;switch((F=this.HZ.Ht,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtT=true;this.AW.A_s(-1);}break;case 0:
case 1:{AtT=false;this.AW.A_s(A._GetAutoObject(A.Device.Device).A1);}break;default:
throw new Error(Ayp+(F=this.HZ.Ht,F[1].call(F[0])).toFixed());}this.AW.Ar(AtT);this.
HG.Ar(AtT);this.HG.Z(AtT);if(((F=this.HZ.Ht,F[1].call(F[0]))!==this.Alo)||(AtT===
false)){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMf((F=this.HZ.
Ht,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bje((F=this.HZ.Ht,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kt(A._GetAutoObject(A.Device.Device).A1);else this.AW.Kt(0);this.Alo=(
F=this.HZ.Ht,F[1].call(F[0]));},A9h:function(E){var B;if(this.AaX===E)return;if(
!!this.AaX){A.z$([this,this.AoX],[B=this.AaX,B.Wv,B.JS],0);A.z$([this,this.AoX],[
B=this.AaX,B.Anp,B.Nd],0);A.z$([this,this.AoX],[B=this.AaX,B.Arv,B.PT],0);this.HZ.
Ul(null);}this.AaX=E;if(!!E){A.zX([this,this.AoX],[B=this.AaX,B.Wv,B.JS],0);A.zX([
this,this.AoX],[B=this.AaX,B.Anp,B.Nd],0);A.zX([this,this.AoX],[B=this.AaX,B.Arv
,B.PT],0);this.HZ.Ul([B=this.AaX,B.Wv,B.JS]);}if(!!E)A.pe([this,this.AoX],this);
},Ug:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0
);C.Aq8._Init.call(this.HG={I:this},0);C.Aq8._Init.call(this.Wp={I:this},0);C.AvM.
_Init.call(this.AW={I:this},0);C.AMh._Init.call(this.HZ={I:this},0);C.AuX._Init.
call(this.Km={I:this},0);this.__proto__=C.AGy;var B;this.H(UW);this.V.Ar(false);
this.V.R(As8);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fa.Filter=7;this.HG.H(BqN);
this.HG.Ar(false);this.Wp.H(BqO);this.AW.H(BqP);this.AW.Ar(false);this.J(this.HG
,0);this.J(this.Wp,0);this.J(this.AW,0);this.FJ=A._NewObject(C.Aer,0);this.Fl.BL=[
this,this.On];this.Fa.BL=[this,this.MU];this.HG.CK(this.Km);this.HG.At([B=this.Km
,B.B_,B.B$]);this.Wp.CK(this.HZ);this.Wp.At([B=this.HZ,B.B_,B.B$]);this.AW.At([this
,this.Ug,this.Bx]);this.HZ.Blu([B=A._GetAutoObject(A.Device.Device),B.Anl,B.Aow]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fl._Done();this.Fa.
_Done();this.HG._Done();this.Wp._Done();this.AW._Done();this.HZ._Done();this.Km.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fl._ReInit();this.Fa._ReInit();this.HG._ReInit();this.Wp._ReInit();this.AW._ReInit(
);this.HZ._ReInit();this.Km._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaX)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wp)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Km)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G4={AzI:null,Fl:null,Fa:null,G1:null,
FZ:null,EM:null,M4:0,AMV:0,ABV:0,Us:0,A$F:-1,AMU:false,Init:function(aArg){A.pe([
this,this.A0r],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
AMU);this.EM.H(A.wC(this.Ym(this.ABV).M,this.Ym((this.ABV+this.AMV)-1).M));},On:
function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var A1i=this.BfS(2);if(A1i===
false)D5.NH=true;},MU:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var
A1i=this.BfS(7);if(A1i===false)D5.NH=true;},BfS:function(Gz){var B;var DV=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DV=this.Bc$(DV,Gz,true);if(!!DV){this.Bb(DV);this.
AzI=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adr:function(
G){A.ab5("%s",Alb);},GU:function(s){this.Adr(s);},FN:function(E){if(this.M4===E)
return;this.M4=E;this.FZ.CT(E);this.G1.CT(E);},SO:function(Gz){var B;switch(Gz){
case 2:this.Bb(this.G1);break;case 7:this.Bb(this.FZ);break;default:A.ab5("%s%e"
,BqQ,Gz);}this.AzI=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LN:function(G){},A0r:
function(s){this.LN(s);},AER:function(E){if(this.AMU===E)return;this.AMU=E;this.
Am();},A9n:function(E){if(this.AMV===E)return;this.AMV=E;this.Am();},A9m:function(
E){if(this.ABV===E)return;this.ABV=E;this.Am();},Ym:function(Hz){var B5=null;switch(
Hz){case-1:case 0:B5=this.FZ;break;case 1:B5=this.G1;break;default:A.ab5("%s",Ah1
);}return B5;},Kt:function(E){if(this.Us===E)return;this.Us=E;this.Ami();},Ami:function(
){A.ab5("%s",Alb);},Bc$:function(AcZ,Gz,LF){var B;if(!!AcZ){var Be;if(LF)Be=0x11;
else Be=0x0;switch(Gz){case 2:AcZ=(C.DF.isPrototypeOf(B=this.AqI(AcZ,Be))?B:null
);break;case 7:AcZ=(C.DF.isPrototypeOf(B=this.TN(AcZ,Be))?B:null);break;default:
throw new Error(BqR);}}return AcZ;},A_s:function(E){if(this.A$F===E)return;this.
A$F=E;var DV=this.FZ;var A1H;while(!!DV){A1H=!!E;DV.Ar(A1H);DV.Z(A1H);if(DV===this.
AzI)this.Bb(DV);DV=this.Bc$(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.
call(this.Fa={I:this},0);C.DF._Init.call(this.G1={I:this},0);C.DF._Init.call(this.
FZ={I:this},0);A.acg.BT._Init.call(this.EM={I:this},0);this.__proto__=C.G4;this.
H(BqS);this.Fl.Filter=6;this.Fa.Filter=7;this.M4=A.jb.CJ;this.G1.H(E6);this.FZ.H(
A$0);this.EM.H(BqT);this.EM.Ng(2);this.EM.L(A.jb.E1);this.J(this.G1,0);this.J(this.
FZ,0);this.J(this.EM,0);this.Fl.BL=[this,this.On];this.Fl.D1=[this,this.On];this.
Fa.BL=[this,this.MU];this.Fa.D1=[this,this.MU];this.AzI=this.FZ;this.G1.Di=[this
,this.GU];this.FZ.Di=[this,this.GU];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fl._Done();this.Fa._Done();this.G1._Done();this.FZ._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fl._ReInit();this.Fa._ReInit();this.G1._ReInit();this.FZ._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzI)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQU={Dy:null,CU:null,Ct:null
,FN:function(E){if(this.M4===E)return;C.HJ.FN.call(this,E);this.Ct.CT(E);this.CU.
CT(E);this.Dy.CT(E);},Ym:function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.
FZ;break;case 1:B5=this.Ct;break;case 2:B5=this.CU;break;case 3:B5=this.Dy;break;
case 4:B5=this.G1;break;default:A.ab5("%s",Ah1);}return B5;},_Init:function(aArg
){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(
this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQU;this.
H(BqU);this.G1.H(Atc);this.Dy.H(A$1);this.CU.H(A$2);this.Ct.H(A$3);this.FZ.H(BqV
);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.Ct,-2);this.Dy.Di=[this,this.
GU];this.CU.Di=[this,this.GU];this.Ct.Di=[this,this.GU];},_Done:function(){this.
__proto__=C.HJ;this.Dy._Done();this.CU._Done();this.Ct._Done();C.HJ._Done.call(this
);},_ReInit:function(){C.HJ._ReInit.call(this);this.Dy._ReInit();this.CU._ReInit(
);this.Ct._ReInit();},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.
Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVj={Ra:null,AcF:null,AVi:0,CC:function(G){this.AcF.Ar(true);},E4:function(G
){this.AcF.Ar(false);},Bnm:function(E){if(this.AVi===E)return;this.AVi=E;this.Ra.
R((((A.aaR(A.acf.AVh)+AcQ)+E.toFixed())+BqW)+A.aaR(A.acf.Lb));},Blf:function(){return this.
AVi;},BAW:function(G){A._GetAutoObject(C.A9).Cd(3);A._GetAutoObject(A.Device.Device
).Ans(1);},_Init:function(aArg){C.XW._Init.call(this,aArg);C.CH._Init.call(this.
Ra={I:this},0);A.acl.Gk._Init.call(this.AcF={I:this},0);this.__proto__=C.AVj;this.
AeL.H(BqX);this.UA.R(A.jV);this.Ra.H(BqY);this.Ra.R(A.aaR(A.acf.AVh)+A$4);this.Ra.
L(A.jb.Text);this.AcF.HM(1);this.AcF.Fp(5000);this.AcF.B1=100;this.J(this.Ra,0);
this.Ra.S(A.aaL(A.fl.Af));this.Ra.A2(A.aaL(A.fl.Ak));this.Ra.Cu(A.aaL(A.fl.Bh));
this.AcF.SA=[this,this.BAW];this.AcF.Q=[this,this.Blf,this.Bnm];},_Done:function(
){this.__proto__=C.XW;this.Ra._Done();this.AcF._Done();C.XW._Done.call(this);},_ReInit:
function(){C.XW._ReInit.call(this);this.Ra._ReInit();this.AcF._ReInit();this.Ra.
R(A.aaR(A.acf.AVh)+A$4);this.Ra.S(A.aaL(A.fl.Af));this.Ra.A2(A.aaL(A.fl.Ak));this.
Ra.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.XW._Mark.call(this,D);if((B=this.
Ra)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARM={K4:null,Lj:null,BdW:false,Init:
function(aArg){this.Bb(this.C$);},Ev:function(G){var B;if(!!this.K4)this.K4.Ev(this
);C.Wr.Ev.call(this,G);},Agd:function(G){var B;if(!!this.K4)this.K4.Agd(this);C.
Wr.Agd.call(this,G);},CC:function(G){var B;if(!this.BdW){this.BdW=true;A.pe([this
,this.A3t],this);}else if(!this.K4){this.K4=A._NewObject(C.ARO,0);this.K4.A9B([this
,this.AAT]);this.LN(this);this.K4.LN(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ev(this);else C.Wr.CC.call(this,G);}else C.Wr.CC.call(this,G
);},Ap1:function(G){var B;if(!!this.K4)this.K4.Ap1(this);},AAT:function(G){var B;
var F;this.LN(this);this.K4.LN(this);A.pe([this,this.AcR],this);var Bdx=this.LU;
this.AeW(A._GetAutoObject(A.Device.Helper).Abn(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVg(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bdx);if(Bdx)A._GetAutoObject(
A.Device.Helper).W.PT(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SI(A._GetAutoObject(A.Device.Helper).AMf((F=this.Dh.HZ.Ht,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JG(this.C$);},A3t:function(
G){A._GetAutoObject(C.A9).Cd(79);},_Init:function(aArg){C.Wr._Init.call(this,aArg
);C.Q$._Init.call(this.Lj={I:this},0);this.__proto__=C.ARM;var B;this.Lj.H(AhX);
this.Lj.Aj(true);this.Lj.T(A.aaR(A.acf.ACk));this.J(this.Lj,-9);this.JX(this.Gl,-
1);this.Lj.Gq([this,this.D_,this.GQ]);this.Lj.At([B=A._GetAutoObject(A.Device.Helper
).W,B.ASq,B.AnA]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wr;this.Lj.
_Done();C.Wr._Done.call(this);},_ReInit:function(){C.Wr._ReInit.call(this);this.
Lj._ReInit();this.Lj.T(A.aaR(A.acf.ACk));},_Mark:function(D){var B;C.Wr._Mark.call(
this,D);if((B=this.K4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADI={AgM:null,AgN:null,NK:null,NJ:null,ES:null,FY:null,Ep:null,Dy:null,CU:null,Ct:
null,FN:function(E){if(this.M4===E)return;C.Lf.FN.call(this,E);this.Ct.CT(E);this.
CU.CT(E);this.Dy.CT(E);this.Ep.CT(E);this.FY.CT(E);this.ES.CT(E);this.NJ.CT(E);this.
NK.CT(E);this.AgN.CT(E);this.AgM.CT(E);},Ym:function(Hz){var B5=null;switch(Hz){
case-1:case 0:B5=this.FZ;break;case 1:B5=this.Ct;break;case 2:B5=this.CU;break;case
3:B5=this.Dy;break;case 4:B5=this.Ep;break;case 5:B5=this.FY;break;case 6:B5=this.
ES;break;case 7:B5=this.NJ;break;case 8:B5=this.NK;break;case 9:B5=this.AgN;break;
case 10:B5=this.AgM;break;case 11:B5=this.G1;break;default:A.ab5("%s",Ah1);}return B5;
},_Init:function(aArg){C.Lf._Init.call(this,aArg);C.DF._Init.call(this.AgM={I:this
},0);C.DF._Init.call(this.AgN={I:this},0);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.FY={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADI;this.H(BqZ);this.G1.H(AIy);this.AgM.H(Ayw);this.AgN.H(
AZF);this.NK.H(AZG);this.NJ.H(AZH);this.ES.H(AZI);this.FY.H(AZJ);this.Ep.H(AZK);
this.Dy.H(A$5);this.CU.H(AZL);this.Ct.H(Bq0);this.FZ.H(Bq1);this.J(this.AgM,-2);
this.J(this.AgN,-2);this.J(this.NK,-2);this.J(this.NJ,-2);this.J(this.ES,-2);this.
J(this.FY,-2);this.J(this.Ep,-2);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.
Ct,-2);this.AgM.Di=[this,this.GU];this.AgN.Di=[this,this.GU];this.NK.Di=[this,this.
GU];this.NJ.Di=[this,this.GU];this.ES.Di=[this,this.GU];this.FY.Di=[this,this.GU
];this.Ep.Di=[this,this.GU];this.Dy.Di=[this,this.GU];this.CU.Di=[this,this.GU];
this.Ct.Di=[this,this.GU];},_Done:function(){this.__proto__=C.Lf;this.AgM._Done(
);this.AgN._Done();this.NK._Done();this.NJ._Done();this.ES._Done();this.FY._Done(
);this.Ep._Done();this.Dy._Done();this.CU._Done();this.Ct._Done();C.Lf._Done.call(
this);},_ReInit:function(){C.Lf._ReInit.call(this);this.AgM._ReInit();this.AgN._ReInit(
);this.NK._ReInit();this.NJ._ReInit();this.ES._ReInit();this.FY._ReInit();this.Ep.
_ReInit();this.Dy._ReInit();this.CU._ReInit();this.Ct._ReInit();},_Mark:function(
D){var B;C.Lf._Mark.call(this,D);if((B=this.AgM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HJ={Q:null,AM:0,Ai:function(Ae){C.G4.Ai.call(this
,Ae);this.Ami();},Adr:function(G){var B;var F;var Iz=A.jV;var B5=this.G1;while(!
!B5){if(B5.Ey>0)Iz=Iz+B5.Ey.toFixed();else Iz=Iz+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TN(B5,0x11))?B:null);}var BO=this.AM;this.Bx(A.wz(Iz,-1,
10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LN:function(G){},Ami:function(){var B;var F;if(!!this.Q){var DV=this.FZ;
var AdA=this.Us;var A_=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A_>0){DV.LZ(A_%
10);A_=(A_/10)|0;}else if(AdA>0)DV.LZ(0);else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=
this.AqI(DV,0x11))?B:null);AdA=AdA-1;}}},C3:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)
A.pe([this,this.C3],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G4._Init.call(this,aArg);this.__proto__=C.HJ;},_Mark:
function(D){var B;C.G4._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lf={AM:0,Q:null
,Ai:function(Ae){C.G4.Ai.call(this,Ae);this.Ami();},Adr:function(G){var B;var F;
var Iz=A.jV;var B5=this.G1;while(!!B5){if(B5.Ey>0)Iz=Iz+B5.Ey.toFixed();else Iz=
Iz+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TN(B5,0x11))?B:null);
}var BO=this.AM;this.Bx(A.ab0(Iz,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LN:function(G){},Ami:function(){var B;
var F;if(!!this.Q){var DV=this.FZ;var AdA=this.Us;var A_=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A_>0){DV.LZ((A_%10)|0);A_=Math.trunc(A_/10);}else if(AdA>0)DV.
LZ(0);else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.AqI(DV,0x11))?B:null);AdA=AdA-
1;}}},C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},At:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G4._Init.call(
this,aArg);this.__proto__=C.Lf;},_Mark:function(D){var B;C.G4._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gj:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BR(aIndex);},DZ:function(A_){return A_;},H3:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvM={Ep:null,Dy:null,CU:null,Ct:null,FN:function(E){if(this.M4===E)return;C.
HJ.FN.call(this,E);this.Ct.CT(E);this.CU.CT(E);this.Dy.CT(E);this.Ep.CT(E);},Ym:
function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.FZ;break;case 1:B5=this.
Ct;break;case 2:B5=this.CU;break;case 3:B5=this.Dy;break;case 4:B5=this.Ep;break;
case 5:B5=this.G1;break;default:A.ab5("%s",Ah1);}return B5;},_Init:function(aArg
){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(
this.Dy={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={
I:this},0);this.__proto__=C.AvM;this.H(Ayh);this.G1.H(AHF);this.Ep.H(AHG);this.Dy.
H(AHH);this.CU.H(AHI);this.Ct.H(AHJ);this.FZ.H(AHK);this.EM.H(A$6);this.J(this.Ep
,-2);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.Ct,-2);this.Ep.Di=[this,this.
GU];this.Dy.Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Ct.Di=[this,this.GU
];},_Done:function(){this.__proto__=C.HJ;this.Ep._Done();this.Dy._Done();this.CU.
_Done();this.Ct._Done();C.HJ._Done.call(this);},_ReInit:function(){C.HJ._ReInit.
call(this);this.Ep._ReInit();this.Dy._ReInit();this.CU._ReInit();this.Ct._ReInit(
);},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.Ep)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUq={AttributeSet:null,Init:function(aArg){this.AttributeSet.
BoA(0);this.AttributeSet.BoB(1);this.AttributeSet.BoC(4);},Ai:function(Ae){var B;
C.BU.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var IB=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FQ=A.jb.CJ;var GW=A.jb.Text;if(this.Hk){FQ=
A.jb.Bm;GW=A.jb.Text;}if(!He){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);this.
AttributeSet.Ahl(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahl(A.jb.Bm);}else if(IB){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahl(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.
AmZ);this.V.L(A.jb.Bm);this.AttributeSet.Ahl(A.jb.Bm);}else{this.Background.L(FQ
);this.V.L(GW);this.AttributeSet.Ahl(GW);}this.LF=He;this.KF=Fu;this.Qs=GE;this.
Apd=IB;},Hl:function(G){var B;var Ge=this.Dz.G5;var Cz=(A.acg.AuK.isPrototypeOf(
B=this.Dz.Ci)?B:null);Cz.A9j(this.AttributeSet);Cz.A6(0x12);if(!Cz)return;if(!!this.
AC)Cz.R(this.By0(this.AC.Gj(Ge)));else Cz.R(W$);Cz.H(A.abK(Cz.M,[this.Dz.Wa,(B=this.
Dz.M)[3]-B[1]]));},By0:function(Bxp){var AAD=Bxp;AAD=A._GetAutoObject(A.Device.Helper
).Nk(AAD,Bq2,Bq3);AAD=A._GetAutoObject(A.Device.Helper).Nk(AAD,Bq4,Bq5);return Bq6+
AAD;},_Init:function(aArg){C.BU._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUq;this.Dz.H(Bq7);this.Dz.Jx(2);
this.Dz.N0(A.acg.AuK);this.AttributeSet.Ahl(this.V.AQ);this.AttributeSet.Bme(A.aaL(
A.fl.AOv));this.AttributeSet.A9L(A.aaL(A.fl.Ak));this.AttributeSet.Aho(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BU;this.AttributeSet._Done(
);C.BU._Done.call(this);},_ReInit:function(){C.BU._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9L(A.aaL(A.fl.Ak));this.AttributeSet.Aho(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asv._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dr(C.AC_);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Du:function(){return 14;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gj:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BR(aIndex
);},DZ:function(A_){return A_;},H3:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OS={FJ:null,EnumToCodeset:
null,Jv:null,A8:0,Number:0,Ai:function(Ae){C.BU.Ai.call(this,Ae);if(this.A8===1){
if(this.Hk){this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}},Bx:function(E){C.BU.Bx.call(this,E);var BzU=this.
EnumToCodeset.AmA(this.Number);var Bd6=this.AC.C7(this.AM);if(BzU!==Bd6){this.AFq(
this.EnumToCodeset.Aei(Bd6));A.abo([this,this.ASr,this.AFq],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[
this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(
A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=
this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:
this.FJ.AkN((F=this.N,F[1].call(F[0])));}},FU:function(G){this.Ew(1);},Hd:function(
G){this.Ew(0);},Ew:function(EN){var F;if(!this.A8)this.FJ.Ajx((F=this.N,F[1].call(
F[0])));this.A8=EN;if((this.A8<0)||(this.A8>1))this.A8=0;this.DJ(this);if(!this.
A8)this.Bb(null);else this.A1U();this.Am();},AFq:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqQ()>E)E=this.EnumToCodeset.
AqQ();if(this.EnumToCodeset.H3()<E)E=this.EnumToCodeset.H3();}this.Number=E;var BO=
this.AM;if(!!this.EnumToCodeset){var ByQ=this.EnumToCodeset.AmA(E);this.Bx(this.
AC.DZ(ByQ));if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},Ant:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},U$:function(G){this.Ew(this.A8+1);},A1U:function(){A.ab5(
"%s",Bq8);},ASr:function(){return this.Number;},_Init:function(aArg){C.BU._Init.
call(this,aArg);A.Core.BK._Init.call(this.Jv={I:this},0);this.__proto__=C.OS;this.
Jv.Filter=1;this.FJ=A._NewObject(C.Aer,0);this.Jv.BL=[this,this.U$];},_Done:function(
){this.__proto__=C.BU;this.Jv._Done();C.BU._Done.call(this);},_ReInit:function(){
C.BU._ReInit.call(this);this.Jv._ReInit();},_Mark:function(D){var B;C.BU._Mark.call(
this,D);if((B=this.FJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jv)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeS={Text:null,Ai:function(
Ae){C.Ek.Ai.call(this,Ae);this.Text.L(this.ACL);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rh(this.AM));this.
Am();},AaE:function(G){A.pe([this,this.Af_],this);},AaC:function(G){A.pe([this,this.
Af_],this);},AlV:function(G){A.pe([this,this.Af_],this);},Af_:function(G){if((!this.
Ij||!this.A1)||!this.AF)return;},_Init:function(aArg){C.Ek._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeS;this.Text.AZ(0x3F
);this.Text.H(As2);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ek;this.Text._Done();C.Ek.
_Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARF={GI:0,C6:null,AW:null,E$:null,
I8:null,CountryToString:null,K$:0,L$:false,Init:function(aArg){A.zX([this,this.MH
],[this,this.SB,this.Lo],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.I8.Z(this.
Afn);this.AW.FN(this.LQ);this.E$.CT(this.LQ);this.I8.CT(this.LQ);},DJ:function(G
){var F;if(!this.N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CV(this.CountryToString.BR(this.K$));(F=this.N,
F[1].call(F[0])).Cl=null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EN){var Tm=this.
A8;this.A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>this.RI)this.A8=this.RI;if((
this.A8===1)&&!this.Afn)this.A8=2;switch(this.A8){case 0:{this.Bb(null);if(!this.
GI)this.Lo(0);}break;case 1:this.Bb(this.I8);break;case 2:this.Bb(this.E$);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Tm>0))this.AW.SO(2);else this.AW.SO(7);}break;
default:throw new Error(Atd+this.A8.toFixed());}C.Ek.Ew.call(this,this.A8);},Apl:
function(G){this.I8.Ul(this.Ez);},AaE:function(G){var F;this.AW.A9m((F=this.AF,F[
1].call(F[0])));},AaC:function(G){var F;this.AW.A9n((F=this.A1,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.L$=true;this.SE(A._GetAutoObject(
A.Device.Helper).Si(E,0,12));this.Lo(A._GetAutoObject(A.Device.Converter).S1(E));
this.L$=false;if(!!E)this.AW.Kt(12);else this.AW.Kt(0);this.Am();},AlV:function(
G){A.pe([this,this.Af_],this);},FU:function(G){var F;if(!this.AM){var BO=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).ACZ());if(this.AM!==BO){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(3);},AjK:function(){return this.
GI;},AjM:function(){return 999999999999;},Lo:function(E){if(this.K$===E)return;this.
K$=E;if(this.L$===false)A.pe([this,this.Vm],this);A.abo([this,this.SB,this.Lo],0
);},SE:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this
,this.Vm],this);A.abo([this,this.AbW,this.SE],0);},Vm:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqv(this.K$),3,10)+A.abm(this.GI,12,10
);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af_:function(G){var F;if((!this.Ij||
!this.A1)||!this.AF)return;if(!(F=this.Ij,F[1].call(F[0])))this.AW.AER(true);else
this.AW.AER(false);},SB:function(){return this.K$;},AbW:function(){return this.GI;
},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.C6._Init.call(this.C6={I:this
},0);C.ADI._Init.call(this.AW={I:this},0);C.AsF._Init.call(this.E$={I:this},0);C.
I8._Init.call(this.I8={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARF;var B;this.RI=3;this.AW.H(Bq9);this.E$.H(A$7);this.
I8.H(A$8);this.J(this.AW,0);this.J(this.E$,0);this.J(this.I8,0);this.C6.AEX([this
,this.SB,this.Lo]);this.AW.At([this,this.AbW,this.SE]);this.E$.CK(this.C6);this.
E$.At([B=this.C6,B.B_,B.B$]);this.I8.A9E([B=A._GetAutoObject(A.Device.Device),B.
Av$,B.AyD]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.C6._Done(
);this.AW._Done();this.E$._Done();this.I8._Done();this.CountryToString._Done();C.
Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C6._ReInit(
);this.AW._ReInit();this.E$._ReInit();this.I8._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARE={GI:0,C6:null,AW:null,YA:null,Kq:null,E$:null,I8:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pw:0,K$:0,L$:false,Init:function(aArg){A.
zX([this,this.MH],[this,this.PP,this.EB],0);A.zX([this,this.MH],[this,this.SB,this.
Lo],0);A.zX([this,this.MH],[this,this.Ann,this.Ahp],0);},Ai:function(Ae){C.Ek.Ai.
call(this,Ae);this.I8.Z(this.Afn);this.AW.FN(this.LQ);this.YA.FN(this.LQ);this.Kq.
FN(this.LQ);this.E$.CT(this.LQ);this.I8.CT(this.LQ);},DJ:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this
,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV
);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.
N,F[1].call(F[0])).CV(this.CountryToString.BR(this.K$));(F=this.N,F[1].call(F[0]
)).Cl=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGH)+A.aaR(A.acf.Colon))+AcQ)+A.aaR(A.
acf.Bhf));break;case 1:(F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGH)+A.aaR(A.
acf.Colon))+AcQ)+A.aaR(A.acf.BoG));break;case 2:(F=this.N,F[1].call(F[0])).CV(((
A.aaR(A.acf.AGH)+A.aaR(A.acf.Colon))+AcQ)+A.aaR(A.acf.Bh$));break;default:(F=this.
N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGH)+A.aaR(A.acf.Colon))+AcQ)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cl=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0]
)).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0
])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null
);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.EV)+Ax9)+this.GermanStateToString.Lu(
A._GetAutoObject(A.Device.Converter).ACO(this.Pw)));(F=this.N,F[1].call(F[0])).Cl=
null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[
1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(
A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EN){var Tm=this.A8;if(EN<
0)EN=0;else if(EN>this.RI)EN=this.RI;if((EN===1)&&!this.Afn)EN=2;switch(EN){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.Pw)this.Lo(0);}break;case
1:this.Bb(this.I8);break;case 2:this.Bb(this.E$);break;case 3:if(!Tm)A.pe([this,
this.BA$],this);else this.Bb(this.YA);break;case 4:this.Bb(this.Kq);break;case 5:
if(((Tm===4)&&!this.Pw)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Tm>
0))this.AW.SO(2);else this.AW.SO(7);}break;default:throw new Error(Atd+EN.toFixed(
));}this.A8=EN;C.Ek.Ew.call(this,this.A8);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.L$=true;this.SE(A._GetAutoObject(A.Device.Helper).Si(E,0,8));this.
Ahp(A._GetAutoObject(A.Device.Helper).Si(E,8,2)|0);this.EB(A._GetAutoObject(A.Device.
Helper).Si(E,10,2)|0);this.Lo(A._GetAutoObject(A.Device.Converter).S1(E));this.L$=
false;if(!!this.AM){this.YA.Kt(2);this.Kq.Kt(2);this.AW.Kt(8);}else{this.YA.Kt(0
);this.Kq.Kt(0);this.AW.Kt(0);}this.Am();},Apl:function(G){this.I8.Ul(this.Ez);}
,AaE:function(G){var F;this.AW.A9m((F=this.AF,F[1].call(F[0])));},AaC:function(G
){var F;this.AW.A9n((F=this.A1,F[1].call(F[0])));},AlV:function(G){A.pe([this,this.
Af_],this);},FU:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(
A.Device.Helper).ACZ());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ew(3);}else this.Ew(this.RI);},AjK:function(){return this.
GI;},AjM:function(){return 99999999;},Lo:function(E){if(this.K$===E)return;this.
K$=E;if(this.L$===false)A.pe([this,this.Vm],this);A.abo([this,this.SB,this.Lo],0
);},SE:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this
,this.Vm],this);A.abo([this,this.AbW,this.SE],0);},Vm:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqv(this.K$),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pw,2,10))+A.abm(this.GI,8,10);var BO=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Af_:function(G){var F;if((!this.Ij||!this.A1)||!this.AF)return;if(!(F=this.
Ij,F[1].call(F[0])))this.AW.AER(true);else this.AW.AER(false);},EB:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L$===false)A.pe([this,this.
Vm],this);A.abo([this,this.PP,this.EB],0);},Ahp:function(E){if(this.Pw===E)return;
this.Pw=E;if(this.L$===false)A.pe([this,this.Vm],this);A.abo([this,this.Ann,this.
Ahp],0);},BA$:function(G){var F;if(!!this.JK){var Ib=(F=this.JK,F[1].call(F[0]));
var A06=0;switch(Ib){case 0:case 1:A06=0;break;case 2:A06=1;break;default:A.ab5(
"%s%e",Ala,Ib);}this.EB(A06);}if(!this.Pw)this.Ew(4);else this.Ew(5);},SB:function(
){return this.K$;},AbW:function(){return this.GI;},PP:function(){return this.AnimalType;
},Ann:function(){return this.Pw;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.AQV._Init.call(this.AW={I:this},0);C.AvL.
_Init.call(this.YA={I:this},0);C.AvL._Init.call(this.Kq={I:this},0);C.AsF._Init.
call(this.E$={I:this},0);C.I8._Init.call(this.I8={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARE;var B;this.RI=5;this.AW.H(
Bq_);this.YA.H(Bq$);this.YA.EU(2);this.Kq.H(Bra);this.Kq.EU(16);this.E$.H(A$7);this.
I8.H(A$8);this.J(this.AW,0);this.J(this.YA,0);this.J(this.Kq,0);this.J(this.E$,0
);this.J(this.I8,0);this.C6.AEX([this,this.SB,this.Lo]);this.AW.At([this,this.AbW
,this.SE]);this.YA.At([this,this.PP,this.EB]);this.Kq.At([this,this.Ann,this.Ahp
]);this.E$.CK(this.C6);this.E$.At([B=this.C6,B.B_,B.B$]);this.I8.A9E([B=A._GetAutoObject(
A.Device.Device),B.Av$,B.AyD]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ek;this.C6._Done();this.AW._Done();this.YA._Done();this.Kq._Done();this.E$._Done(
);this.I8._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C6._ReInit(
);this.AW._ReInit();this.YA._ReInit();this.Kq._ReInit();this.E$._ReInit();this.I8.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ek={AM:0,Awk:null,OF:null,
Q:null,Ez:null,A1:null,AF:null,Ij:null,N:null,JK:null,Fl:null,Fa:null,ACL:0,LQ:0
,A8:0,RI:0,Afn:true,Init:function(aArg){A.pe([this,this.LN],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A8)this.Bb(null);},Bmg:function(E){if(this.
ACL===E)return;this.ACL=E;this.Am();},Wy:function(E){if(this.LQ===E)return;this.
LQ=E;this.Am();},DJ:function(G){A.ab5("%s",Alb);},MH:function(s){this.DJ(s);},Ew:
function(EN){A.pe([this,this.MH],this);A.pe(this.Awk,this);if(!EN)A.pe(this.OF,this
);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);}
,C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",Aov);},On:function(G){if(this.A8>1)this.Ew(this.A8-1);},MU:function(
G){if((this.A8>0)&&(this.A8<this.RI))this.Ew(this.A8+1);},Ul:function(E){if(A.aaZ(
this.Ez,E))return;if(!!this.Ez)A.z$([this,this.A0i],this.Ez,0);this.Ez=E;if(!!E)
A.zX([this,this.A0i],this.Ez,0);A.pe([this,this.A0i],this);},Apl:function(G){},A0i:
function(s){this.Apl(s);},OM:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1
)A.z$([this,this.A0m],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.A0m],E,0);if(!
!E)A.pe([this,this.A0m],this);},PQ:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0o],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0o],E,0);if(
!!E)A.pe([this,this.A0o],this);},AaE:function(G){},A0o:function(s){this.AaE(s);}
,AaC:function(G){},A0m:function(s){this.AaC(s);},Uj:function(E){if(A.aaZ(this.Ij
,E))return;if(!!this.Ij)A.z$([this,this.A0l],this.Ij,0);this.Ij=E;if(!!E)A.zX([this
,this.A0l],E,0);if(!!E)A.pe([this,this.A0l],this);},AlV:function(G){},A0l:function(
s){this.AlV(s);},FU:function(G){A.ab5("%s",A$9);},BGk:function(s){this.FU(s);},Hd:
function(G){this.Ew(0);},AjK:function(){A.ab5("%s",Aov);return 0;},AjM:function(
){A.ab5("%s",Aov);return 0;},LN:function(G){},Anr:function(E){if(A.aaZ(this.JK,E
))return;if(!!this.JK)A.z$([this,this.AoW],this.JK,0);this.JK=E;if(!!E)A.zX([this
,this.AoW],this.JK,0);A.pe([this,this.AoW],this);},AoW:function(G){},AE9:function(
E){if(A.aa0(this.OF,E))return;this.OF=E;},AFB:function(E){if(this.Afn===E)return;
this.Afn=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0);this.
__proto__=C.Ek;this.H(As2);this.ACL=A.jb.Text;this.LQ=A.jb.CS;this.Fl.Filter=6;this.
Fa.Filter=7;this.Fl.BL=[this,this.On];this.Fa.BL=[this,this.MU];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fl._Done();this.Fa._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fl._ReInit(
);this.Fa._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ij)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JK)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q$={AM:0,Dq:null,FJ:
null,OF:null,Ez:null,A1:null,AF:null,Ij:null,Q:null,JK:null,AEd:-1,Afn:true,AN1:
false,ATN:false,Asg:true,Init:function(aArg){A.pe([this,this.ABn],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dq)return;if(this.Dq.A8>0){if(this.Hk){this.Dq.
Wy(A.jb.CJ);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Dq.Wy(A.jb.
CS);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hk)this.Dq.Wy(
A.jb.CJ);else this.Dq.Wy(A.jb.CS);this.Dq.Bmg(this.V.AQ);}},IZ:function(G){C.Eg.
IZ.call(this,G);if(!this.Dq)return;if(!this.Dq.A8)this.FU(this);else this.Hd(this
);},Gq:function(E){C.Eg.Gq.call(this,E);if(!!this.Dq)this.Dq.N=E;},Ul:function(E
){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.Apl],this.Ez,0);this.Ez=
E;if(!!E)A.zX([this,this.Apl],this.Ez,0);A.pe([this,this.Apl],this);},Apl:function(
G){if(!!this.Dq)this.Dq.Ul(this.Ez);},OM:function(E){if(A.aaZ(this.A1,E))return;
this.A1=E;if(!!this.Dq)this.Dq.OM(E);},PQ:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PQ(E);},Uj:function(E){if(A.aaZ(this.Ij,E))return;
this.Ij=E;if(!!this.Dq)this.Dq.Uj(E);},BBF:function(G){var AAl=0;if(!!this.Dq){AAl=
this.Dq.A8;this.Dq.N=null;this.HN(this.Dq);}switch(this.AEd){case 0:this.Dq=A._NewObject(
C.AeS,0);break;case 1:this.Dq=A._NewObject(C.ARF,0);break;case 2:this.Dq=A._NewObject(
C.ARE,0);break;case 3:this.Dq=A._NewObject(C.ATP,0);break;case 4:this.Dq=A._NewObject(
C.ATO,0);break;case 5:this.Dq=A._NewObject(C.ARG,0);break;default:throw new Error(
Brb+this.AEd.toFixed());}this.J(this.Dq,0);this.Dq.Anr(this.JK);this.Dq.H(Brc);this.
Dq.N=this.N;this.Dq.Ul(this.Ez);this.Dq.Awk=[this,this.Awk];this.Dq.At([this,this.
Ug,this.Bx]);this.Dq.Uj(this.Ij);this.Dq.OM(this.A1);this.Dq.PQ(this.AF);this.Dq.
AE9(this.OF);this.Dq.AFB(this.Afn);if(AAl>0)this.Dq.Ew(AAl);this.Bb(this.Dq);this.
Am();},FU:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FJ.Ajx((F=this.
N,F[1].call(F[0])));else this.FJ=A._NewObject(C.Aer,0);this.Dq.FU(this);}},Hd:function(
G){var B;if(!!this.Dq)this.Dq.Hd(this);},AjK:function(){if(!this.Dq)return 0;return this.
Dq.AjK();},AjM:function(){if(!this.Dq)return 0;return this.Dq.AjM();},C3:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ug,this.
Bx],0);}},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABn],this);},BmV:function(
E){if(this.AEd===E)return;this.AEd=E;A.pe([this,this.BBF],this);},ArX:function(E
){if(this.Asg===E)return;this.Asg=E;A.pe([this,this.ABn],this);},ABn:function(G){
var Apw;if(this.Asg){if(this.AN1)Apw=5;else Apw=0;}else if(this.ATN){if(A._GetAutoObject(
A.Device.Converter).S1(this.AM)===10)Apw=4;else Apw=3;}else if(A._GetAutoObject(
A.Device.Converter).S1(this.AM)===10)Apw=2;else Apw=1;this.BmV(Apw);},Awk:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A8)this.FJ.AkN((F=this.N,F[1].call(F[
0])));this.Am();},Anr:function(E){if(A.aaZ(this.JK,E))return;if(!!this.JK)A.z$([
this,this.AoW],this.JK,0);this.JK=E;if(!!E)A.zX([this,this.AoW],this.JK,0);A.pe([
this,this.AoW],this);},AoW:function(G){if(!!this.Dq)this.Dq.Anr(this.JK);},A96:function(
E){if(this.ATN===E)return;this.ATN=E;A.pe([this,this.ABn],this);},BlO:function(E
){if(this.AN1===E)return;this.AN1=E;A.pe([this,this.ABn],this);},AE9:function(E){
if(A.aa0(this.OF,E))return;this.OF=E;if(!!this.Dq)this.Dq.AE9(E);},AFB:function(
E){if(this.Afn===E)return;this.Afn=E;if(!!this.Dq)this.Dq.AFB(E);},Ug:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Q$;this.H(UW);this.V.R(As8);this.V.L(A.jb.Bm);this.FJ=A._NewObject(C.Aer,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FJ)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ij
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQV={ES:null,FY:null,Ep:null,Dy:null,CU:null
,Ct:null,FN:function(E){if(this.M4===E)return;C.Lf.FN.call(this,E);this.Ct.CT(E);
this.CU.CT(E);this.Dy.CT(E);this.Ep.CT(E);this.FY.CT(E);this.ES.CT(E);},Ym:function(
Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.FZ;break;case 1:B5=this.Ct;break;
case 2:B5=this.CU;break;case 3:B5=this.Dy;break;case 4:B5=this.Ep;break;case 5:B5=
this.FY;break;case 6:B5=this.ES;break;case 7:B5=this.G1;break;default:A.ab5("%s"
,Ah1);}return B5;},_Init:function(aArg){C.Lf._Init.call(this,aArg);C.DF._Init.call(
this.ES={I:this},0);C.DF._Init.call(this.FY={I:this},0);C.DF._Init.call(this.Ep={
I:this},0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQV;this.H(Brd);this.G1.
H(AIy);this.ES.H(Ayw);this.FY.H(AZF);this.Ep.H(AZG);this.Dy.H(AZH);this.CU.H(AZI
);this.Ct.H(AZJ);this.FZ.H(AZK);this.EM.H(A$6);this.J(this.ES,-2);this.J(this.FY
,-2);this.J(this.Ep,-2);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.Ct,-2);
this.ES.Di=[this,this.GU];this.FY.Di=[this,this.GU];this.Ep.Di=[this,this.GU];this.
Dy.Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Ct.Di=[this,this.GU];},_Done:
function(){this.__proto__=C.Lf;this.ES._Done();this.FY._Done();this.Ep._Done();this.
Dy._Done();this.CU._Done();this.Ct._Done();C.Lf._Done.call(this);},_ReInit:function(
){C.Lf._ReInit.call(this);this.ES._ReInit();this.FY._ReInit();this.Ep._ReInit();
this.Dy._ReInit();this.CU._ReInit();this.Ct._ReInit();},_Mark:function(D){var B;
C.Lf._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvL={Q:null,G1:null,FZ:null,EM:null,Ip:null,Io:null,M4:0,Us:0,AM:0,F_:99,Init:
function(aArg){A.pe([this,this.LN],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Ym(0).M,this.Ym(-1).M));var IB=((Ae&
0x40)===0x40);if(IB){this.BfT(A.jb.AV);this.BfU(A.jb.Bm);}else{this.BfT(this.M4);
this.BfU(A.jb.Text);}this.Ami();},FN:function(E){if(this.M4===E)return;this.M4=E;
this.Am();},LN:function(G){},Ym:function(Hz){var B5=null;switch(Hz){case-1:case 0:
B5=this.FZ;break;case 1:B5=this.G1;break;default:A.ab5("%s",Ah1);}return B5;},Kt:
function(E){if(this.Us===E)return;this.Us=E;this.Ami();},Ami:function(){var B;var
F;if(!!this.Q){var DV=this.FZ;var AdA=this.Us;var A_=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A_>0){DV.LZ(A_%10);A_=(A_/10)|0;}else if(AdA>0)DV.LZ(0);else DV.LZ(-
1);DV=(C.Ey.isPrototypeOf(B=this.AqI(DV,0x11))?B:null);AdA=AdA-1;}}},Agb:function(
G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Aga:function(G){var F;var BO=this.
AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3
],this);},Bx:function(E){if(E<0)E=0;if(E>this.F_)E=this.F_;if(this.AM===E)return;
this.AM=E;this.Am();},EU:function(E){if(this.F_===E)return;this.F_=E;this.Am();}
,BfT:function(aColor){this.FZ.CT(aColor);this.G1.CT(aColor);},BfU:function(aColor
){this.FZ.Zo(aColor);this.G1.Zo(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ey._Init.call(this.G1={I:this},0);C.Ey._Init.call(this.FZ={I:this},
0);A.acg.BT._Init.call(this.EM={I:this},0);A.Core.BK._Init.call(this.Ip={I:this}
,0);A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.AvL;this.H(Bre);this.
M4=A.jb.CJ;this.G1.H(AIy);this.FZ.H(Ayw);this.EM.H(Ayw);this.EM.Ng(2);this.EM.L(
A.jb.E1);this.Ip.Filter=4;this.Io.Filter=5;this.J(this.G1,0);this.J(this.FZ,0);this.
J(this.EM,0);this.Ip.BL=[this,this.Agb];this.Ip.D1=[this,this.Agb];this.Io.BL=[this
,this.Aga];this.Io.D1=[this,this.Aga];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G1._Done();this.FZ._Done();this.EM._Done();this.Ip._Done();this.Io.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G1._ReInit();this.FZ._ReInit();this.EM._ReInit();this.Ip._ReInit();this.Io.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ey={AgF:
null,Background:null,Text:null,Ey:-1,MZ:0,AmK:0,Aqn:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ey<0)this.Text.R(Ro);else this.Text.R(this.Ey.toFixed(
));this.Background.L(this.MZ);this.Text.L(this.AmK);},LZ:function(E){if(this.Ey===
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ey=B5;this.Am();},CT:function(E){
if(this.MZ===E)return;this.MZ=E;this.Am();},AeX:function(E){if(this.Aqn===E)return;
this.Aqn=E;this.AgF.Ar(E);if(E===false)this.Text.Z(true);},Zo:function(E){if(this.
AmK===E)return;this.AmK=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TG._Init.call(this.AgF={I:this},0);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ey;var B;
this.H(Atc);this.MZ=A.jb.CJ;this.AgF.Fp(750);this.AgF.Um(750);this.AgF.Akx(750);
this.AmK=A.jb.Text;this.Background.AZ(0x3);this.Background.H(Atc);this.Text.AZ(0x3
);this.Text.H(Atc);this.Text.R(Ro);this.J(this.Background,0);this.J(this.Text,0);
this.AgF.Q=[B=this.Text,B.Fo,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgF._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgF._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fz={Y:null,I4:null,AN9:A.jV,ARU:A.jV,Te:0,AJE:0,A1K:false,A1g:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABi],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.zX([this,this.MH],[B=A._GetAutoObject(A.Device.
Device).An,B.Fn,B.Fr],0);A.pe([this,this.ABi],this);A.pe([this,this.MH],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABi],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);},BxM:function(L7){A._GetAutoObject(A.Device.Helper
).G7(L7);this.Ap2(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap2:function(L2,AcV){A.ab5("%s",Alb);},Vh:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.ByI],this);else if(!!As&&(As.PopupState===5)){this.A1g=true;this.Ev(this
);}},ByI:function(G){if(this.Te>0){this.A1g=false;this.Adm(this);this.A_x(0);}},
Aiv:function(G){if((this.AJE+1)<this.Te)this.A_x(this.AJE+1);else A.aaS([this,this.
Bwl],this);},Bwm:function(s){this.Aiv(s);},A_x:function(E){this.AJE=E;if(this.A1g===
false){this.BxM(E);A.aaS([this,this.Bwm],this);var XF=(this.AJE/this.Te)*100;A._GetAutoObject(
A.Device.Device).A5(49,true,A.abk(XF,0,0),0,[this,this.Vh]);}},Aan:function(G){A.
_GetAutoObject(A.Device.Device).A5(49,false,Brf,0,[this,this.Vh]);this.A1K=true;
A.pe([this,this.ALg],this);},Bwl:function(s){this.Aan(s);},Adm:function(G){this.
I4.Z(true);this.A1K=false;this.ALg(this);},BGe:function(s){this.Adm(s);},AAA:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6u();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ev:function(G){A._GetAutoObject(C.A9).Fy();},A3m:function(G){A._GetAutoObject(
C.A9).Cd(84);},DJ:function(G){this.N.Z(true);this.N.C1(A.aaL(A.ach.E2));this.N.CE=[
this,this.Ev];this.N.Cs(A.aaL(A.ach.ADy));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Aq$(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Cg=null;this.N.I7.Dk(100);}else{this.N.Cg=[this,this.AAA];this.
N.I7.Dk(255);}this.N.C2(A.aaL(A.ach.Aez));this.N.Cl=[this,this.A3m];},MH:function(
s){this.DJ(s);},ABi:function(G){this.Te=A._GetAutoObject(A.Device.Device).An.B9(
);if(this.Te>0)A._GetAutoObject(A.Device.Device).A5(49,true,UZ,0,[this,this.Vh]);
else{this.Adm(this);this.Aan(this);}},Akv:function(E){if(this.AN9===E)return;this.
AN9=E;A.pe([this,this.ALg],this);},ALg:function(G){var B;if(this.A1K===false){this.
I4.R(A.jV);return;}var Ao9;if(!A._GetAutoObject(A.Device.Device).An.B9()){var Adg=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABi],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);this.AAA(this);if(!A._GetAutoObject(A.Device.Device
).An.QI()||!Adg)Ao9=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACV(A._GetAutoObject(A.Device.Device).An.Filter)===1)Ao9=A.aaR(
A.acf.AN3);else Ao9=A.aaR(A.acf.AN2);A._GetAutoObject(A.Device.Device).An.Bk(Adg
);A.zX([this,this.ABi],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);}else
Ao9=this.ARU;Ao9=Ao9+(AZM+this.AN9);this.I4.R(Ao9);},Ae8:function(E){if(this.ARU===
E)return;this.ARU=E;A.pe([this,this.ALg],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkO._Init.call(this.I4={
I:this},0);this.__proto__=C.Fz;this.Dr(C.Abr);this.Y.H(Fe);this.Y.JR(1);this.I4.
H(Fe);this.J(this.Y,0);this.J(this.I4,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I4._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I4._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A64={Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A64;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvN={K0:null,MS:null,AY:0,Yc:function(){this.K0=null;this.MS=null;this.AY=0;
},Os:function(A_){var Hg;Hg=A._NewObject(C.A64,0);Hg.A4=A_;if(!this.K0){this.K0=
Hg;this.MS=Hg;this.AY=1;}else{this.MS.Ah=Hg;this.MS=Hg;this.AY=this.AY+1;}},AmS:
function(){var B;var RL=0;var Og=this.K0;while(!!Og){RL+=Og.A4;Og=Og.Ah;}return RL;
},AjL:function(){if(!this.AY)return 0;return this.AmS()/this.AY;},AqS:function(){
var B;if(!this.AY)return 0;var A1a=this.AjL();var Add=0;var Og=this.K0;while(!!Og
){Add+=Math.pow(Og.A4-A1a,2);Og=Og.Ah;}Add/=this.AY;Add=Math.sqrt(Add);return Add;
},_Init:function(aArg){this.__proto__=C.AvN;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AN_={Gb:null,Aev:null,Yj:null,C5:null,I4:null,
CP:function(){this.A4j(this);},Init:function(aArg){A.zV([this,this.A4j],A._GetAutoObject(
A.Device.Device).Po,0);A.pe([this,this.A4j],this);},Ev:function(G){A._GetAutoObject(
C.A9).Fy();},A4j:function(G){this.Yj.Cf(-1);this.I4.Z(!this.Gb.AX.B9());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gb._Init.call(this.Gb={I:this},0);C.
Aev._Init.call(this.Aev={I:this},0);C.Yj._Init.call(this.Yj={I:this},0);A.acg.C5.
_Init.call(this.C5={I:this},0);C.AkO._Init.call(this.I4={I:this},0);this.__proto__=
C.AN_;this.N.Z(true);this.Dr(C.AO5);this.Gb.H(Aot);this.Gb.N0(C.AmJ);this.Aev.H(
IU);this.Yj.H(As3);this.C5.DC(Brg);this.C5.DM(Brh);this.C5.Ng(3);this.C5.L(A.jb.
Text);this.I4.H(Aoe);this.I4.R((A.aaR(A.acf.A7N)+AZM)+A.aaR(A.acf.A58));this.J(this.
Gb,0);this.J(this.Aev,0);this.J(this.Yj,0);this.J(this.C5,0);this.J(this.I4,0);this.
N.CE=[this,this.Ev];this.N.C1(A.aaL(A.ach.E2));this.Gb.Zn(A._GetAutoObject(A.Device.
Device).Po);this.Yj.Zn(A._GetAutoObject(A.Device.Device).Po);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gb._Done();this.Aev._Done();this.Yj._Done();
this.C5._Done();this.I4._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gb._ReInit();this.Aev._ReInit();this.Yj._ReInit();this.C5.
_ReInit();this.I4._ReInit();this.I4.R((A.aaR(A.acf.A7N)+AZM)+A.aaR(A.acf.A58));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gb)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aev)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yj).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOb={At8:null,At7:null,At_:null,At9:null,Aua:null,At$:null,Auc:null,Aub:null
,AaG:null,Yr:null,Abi:null,Abh:null,RatedAttribute:0,Init:function(aArg){this.SG(
2);},DE:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SG(3);break;case 1:this.SG(2);break;case
4:this.SG(1);break;case 3:this.SG(4);break;default:this.SG(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SG(1);break;case 1:this.SG(4);break;case 4:this.
SG(3);break;case 3:this.SG(2);break;default:this.SG(0);}break;default:D5.NH=true;
}},Ap2:function(L2,AcV){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcV,true);Fw.
CW(HV);var AAS=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAS.Initialize(
3,5,0,true);Fw.CW(AAS);L2.Bk(Fw);},Aiv:function(G){var Ap0=0;var A3G=A._GetAutoObject(
A.Device.Device).Bt.B9();var B0=A._NewObject(A.Device.Rating,0);while(Ap0<A3G){B0.
E3(Ap0,A._GetAutoObject(A.Device.Device).Bt);this.Bdc(B0,0);var BB1=A._GetAutoObject(
A.Device.Helper).ZN(2);this.Bdc(B0,BB1);Ap0++;}C.Fz.Aiv.call(this,G);},Aan:function(
G){A.pe([this,this.BcR],this);C.Fz.Aan.call(this,G);},Adm:function(G){this.At8=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.At7=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At_=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.At$=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aua=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aub=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auc=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fz.Adm.
call(this,G);},DJ:function(G){C.Fz.DJ.call(this,G);this.N.OO(true);this.N.OP(true
);},Bdc:function(D3,BbM){if(!D3||(D3.Timestamp<BbM))return;if(!BbM){this.At8.Set(
D3.Appearance,this.At8.Get(D3.Appearance)+1);this.At_.Set(D3.Faeces,this.At_.Get(
D3.Faeces)+1);this.Aua.Set(D3.Feed,this.Aua.Get(D3.Feed)+1);this.Auc.Set(D3.Respiratory
,this.Auc.Get(D3.Respiratory)+1);}else{this.At7.Set(D3.Appearance,this.At7.Get(D3.
Appearance)+1);this.At9.Set(D3.Faeces,this.At9.Get(D3.Faeces)+1);this.At$.Set(D3.
Feed,this.At$.Get(D3.Feed)+1);this.Aub.Set(D3.Respiratory,this.Aub.Get(D3.Respiratory
)+1);}},SG:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yr.Kv(this.AaG.Lu(E));A.pe([this,this.BcR],this);},BcR:function(G){var AaH=null;
var AaI=null;switch(this.RatedAttribute){case 2:{AaH=this.At7;AaI=this.At8;}break;
case 4:{AaH=this.At9;AaI=this.At_;}break;case 1:{AaH=this.At$;AaI=this.Aua;}break;
case 0:{AaH=A._NewObject(A.Device.Int32ArrayWrapper,0);AaI=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaH=this.Aub;AaI=this.Auc;}break;default:throw new
Error(Bri+this.RatedAttribute.toFixed());}var AGe=A._NewObject(A.acv.AT6,0);AGe.
Os(AaH.Get(3),A.jb.E1);AGe.Os(AaH.Get(2),A.jb.H8);AGe.Os(AaH.Get(1),A.jb.Gh);var
AGf=A._NewObject(A.acv.AT6,0);AGf.Os(AaI.Get(3),A.jb.E1);AGf.Os(AaI.Get(2),A.jb.
H8);AGf.Os(AaI.Get(1),A.jb.Gh);this.Abh.Ab5(AGe);this.Abi.Ab5(AGf);var A37=AaH.AmS(
)-AaH.Get(5);var Bfp=0;var Bfn=0;if(A37>0){Bfp=(AaH.Get(2)/A37)*100;Bfn=(AaH.Get(
1)/A37)*100;}var AK5=AaI.AmS()-AaI.Get(5);this.I4.Z(!AK5);var Bfq=0;var Bfo=0;if(
AK5>0){Bfq=(AaI.Get(2)/AK5)*100;Bfo=(AaI.Get(1)/AK5)*100;}this.Abh.A_v(A.abk(Bfp
,0,0)+Aad);this.Abh.A99(A.abk(Bfn,0,0)+Aad);this.Abi.A_v(A.abk(Bfq,0,0)+Aad);this.
Abi.A99(A.abk(Bfo,0,0)+Aad);},_Init:function(aArg){C.Fz._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaG={I:this},0);C.NE._Init.call(this.
Yr={I:this},0);C.ACB._Init.call(this.Abi={I:this},0);C.ACB._Init.call(this.Abh={
I:this},0);this.__proto__=C.AOb;this.Dr(C.AO6);this.Akv(A.aaR(A.acf.A59));this.Ae8(
A.aaR(A.acf.Anj));this.Yr.H(IU);this.Yr.Aj(true);this.Yr.T(A.aaR(A.acf.Axm)+A.aaR(
A.acf.Colon));this.Yr.Bi(false);this.Yr.BmT(false);this.Abi.H(Brj);this.Abi.T(A.
aaR(A.acf.AF1));this.Abh.H(Brk);this.Abh.T(A.aaR(A.acf.A7b));this.I4.H(Aoe);this.
J(this.Yr,-1);this.J(this.Abi,-1);this.J(this.Abh,-1);this.At8=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At7=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At_=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aua=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At$=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auc=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aub=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fz;this.AaG._Done();this.Yr._Done();this.Abi._Done();this.Abh.
_Done();C.Fz._Done.call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.
AaG._ReInit();this.Yr._ReInit();this.Abi._ReInit();this.Abh._ReInit();this.Akv(A.
aaR(A.acf.A59));this.Ae8(A.aaR(A.acf.Anj));this.Yr.T(A.aaR(A.acf.Axm)+A.aaR(A.acf.
Colon));this.Abi.T(A.aaR(A.acf.AF1));this.Abh.T(A.aaR(A.acf.A7b));},_Mark:function(
D){var B;C.Fz._Mark.call(this,D);if((B=this.At8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At_)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aua)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At$)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Auc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aub)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOc={Aeu:null,UL:null,UM:null,Aet:null,UI:null,UJ:null,AJG:0,AJF:0,AJk:0,AJj:
0,Adf:false,CP:function(){this.Aan(this);},Ap2:function(L2,AcV){if(!L2)return;var
Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcV,true);Fw.CW(HV);var AA$=A._NewObject(A.Device.Int32FilterCriterion
,0);AA$.Initialize(7,2,0,true);Fw.CW(AA$);L2.Bk(Fw);},Aiv:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJG++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJF++;var Ap0=0;var A3G=A._GetAutoObject(
A.Device.Device).Bt.B9();var At6;var ABt=0;while(Ap0<A3G){this.Adf=true;At6=A._GetAutoObject(
A.Device.Device).Bt.I5(Ap0,9);if(At6===1)ABt=1;else if((At6===2)&&(ABt!==1))ABt=
2;Ap0++;}if(ABt===1)this.AJj++;else if(ABt===2)this.AJk++;C.Fz.Aiv.call(this,G);
},Aan:function(G){var Bfl=0;var Bfm=0;if(this.Te>0){Bfl=(this.AJG/this.Te)*100;Bfm=(
this.AJF/this.Te)*100;}this.UL.Kv(((((((A.abk(Bfl,0,0)+AIz)+this.AJG.toFixed())+
CQ)+A.aaR(A.acf.AEk))+CQ)+this.Te.toFixed())+Ob);this.UM.Kv(((((((A.abk(Bfm,0,0)+
AIz)+this.AJF.toFixed())+CQ)+A.aaR(A.acf.AEk))+CQ)+this.Te.toFixed())+Ob);var Bfj=
0;var Bfk=0;if(this.Te>0){Bfj=(this.AJk/this.Te)*100;Bfk=(this.AJj/this.Te)*100;
}this.UI.Kv(((((((A.abk(Bfj,0,0)+AIz)+this.AJk.toFixed())+CQ)+A.aaR(A.acf.AEk))+
CQ)+this.Te.toFixed())+Ob);this.UJ.Kv(((((((A.abk(Bfk,0,0)+AIz)+this.AJj.toFixed(
))+CQ)+A.aaR(A.acf.AEk))+CQ)+this.Te.toFixed())+Ob);this.I4.Z(!this.Adf);C.Fz.Aan.
call(this,G);},Adm:function(G){this.AJj=0;this.AJk=0;this.AJF=0;this.AJG=0;this.
Adf=false;C.Fz.Adm.call(this,G);},_Init:function(aArg){C.Fz._Init.call(this,aArg
);C.Agv._Init.call(this.Aeu={I:this},0);C.Ajo._Init.call(this.UL={I:this},0);C.Ajo.
_Init.call(this.UM={I:this},0);C.Agv._Init.call(this.Aet={I:this},0);C.Ajo._Init.
call(this.UI={I:this},0);C.Ajo._Init.call(this.UJ={I:this},0);this.__proto__=C.AOc;
this.Dr(C.AO7);this.Akv(A.aaR(A.acf.A5_));this.Ae8(A.aaR(A.acf.Aro));this.Aeu.H(
IU);this.Aeu.Aj(true);this.Aeu.T(A.aaR(A.acf.A6c));this.Aeu.Bi(false);this.UL.H(
Qa);this.UL.Aj(true);this.UL.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UL.
Bi(true);this.UL.AkA(2);this.UM.H(Aab);this.UM.Aj(true);this.UM.T(A.aaR(A.acf.Avr
)+A.aaR(A.acf.Colon));this.UM.Bi(true);this.UM.AkA(1);this.Aet.H(Alc);this.Aet.Aj(
true);this.Aet.T(A.aaR(A.acf.A6d));this.Aet.Bi(false);this.UI.H(Aon);this.UI.Aj(
true);this.UI.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UI.Bi(true);this.
UI.AkA(2);this.UJ.H(As3);this.UJ.Aj(true);this.UJ.T(A.aaR(A.acf.Avr)+A.aaR(A.acf.
Colon));this.UJ.Bi(true);this.UJ.AkA(1);this.J(this.Aeu,0);this.J(this.UL,0);this.
J(this.UM,0);this.J(this.Aet,0);this.J(this.UI,0);this.J(this.UJ,0);this.UL.S(A.
aaL(A.fl.Ak));this.UM.S(A.aaL(A.fl.Ak));this.UI.S(A.aaL(A.fl.Ak));this.UJ.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fz;this.Aeu._Done();this.UL._Done(
);this.UM._Done();this.Aet._Done();this.UI._Done();this.UJ._Done();C.Fz._Done.call(
this);},_ReInit:function(){C.Fz._ReInit.call(this);this.Aeu._ReInit();this.UL._ReInit(
);this.UM._ReInit();this.Aet._ReInit();this.UI._ReInit();this.UJ._ReInit();this.
Akv(A.aaR(A.acf.A5_));this.Ae8(A.aaR(A.acf.Aro));this.Aeu.T(A.aaR(A.acf.A6c));this.
UL.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UM.T(A.aaR(A.acf.Avr)+A.aaR(
A.acf.Colon));this.Aet.T(A.aaR(A.acf.A6d));this.UI.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UJ.T(A.aaR(A.acf.Avr)+A.aaR(A.acf.Colon));this.UL.S(A.aaL(A.fl.
Ak));this.UM.S(A.aaL(A.fl.Ak));this.UI.S(A.aaL(A.fl.Ak));this.UJ.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((B=this.Aeu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqH={K8:null
,Ajd:null,Aje:null,Amj:null,Abv:null,WY:null,Abs:null,S3:null,Abt:null,S4:null,Abw:
null,WZ:null,Ay:null,Ada:0,AAm:0,Apr:0,A2n:0,BdI:0,CP:function(){this.Aan(this);
},DE:function(G){switch(this.Cq.CO){case 4:{if(this.I4.Fo())return;var Qx=this.Y.
Br[1]+80;this.Y.Ga([this.Y.Br[0],Qx]);this.Y.Vw(null,null);}break;case 5:{if(this.
I4.Fo())return;var Qx=this.Y.Br[1]-80;this.Y.Ga([this.Y.Br[0],Qx]);this.Y.Vw(null
,null);}break;default:C.Fz.DE.call(this,G);}},Ap2:function(L2,AcV){if(!L2)return;
var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcV,true);Fw.CW(HV);var Ac7=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac7.Initialize(8,2,0,true);Fw.CW(Ac7);L2.Bk(Fw);},Aiv:function(G){if(this.Bdy(
)){this.K8.Os(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Ara()){var Qj=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qj>0){var A1X=A._GetAutoObject(A.acj.DU).Alu(Qj,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajd.
Os(A1X);}}var A2I=A._GetAutoObject(A.Device.Device).Bt.B9()-2;if(A2I>=0){var BzQ=
A._GetAutoObject(A.Device.Device).Bt.ACW(A2I,8);var BzP=A._GetAutoObject(A.Device.
Device).Bt.Hu(A2I,6);var Qj=A._GetAutoObject(A.Device.Helper).L9(BzP,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qj>0){var A1X=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BzQ)/Qj)|0;this.Aje.Os(A1X);}}if((A._GetAutoObject(
A.Device.Helper).W.Ara()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RO()<=180)){var ALs=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tn=A._GetAutoObject(A.Device.
Helper).L9(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BA7=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALs/Tn);this.Amj.Os(BA7);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Ada++;this.Apr=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZN(7)){this.AAm++;this.A2n=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BdI=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.Fz.Aiv.call(
this,G);},Aan:function(G){var A4s=this.Ajd.AjL()|0;var A4u=this.Aje.AjL()|0;if(this.
Ada>1)A._GetAutoObject(A.Device.Device).A5(56,true,this.Ada.toFixed(),0,null);if(
this.Ada===1)A._GetAutoObject(A.Device.Device).A5(53,true,this.Apr.toFixed(),0,null
);if(this.AAm>1)A._GetAutoObject(A.Device.Device).A5(52,true,this.AAm.toFixed(),
0,null);if(this.AAm===1)A._GetAutoObject(A.Device.Device).A5(57,true,(this.A2n.toFixed(
)+As7)+this.BdI.toFixed(),0,null);if(this.K8.AY>0)this.WY.T(((((((A._GetAutoObject(
A.Device.Converter).AxY(this.K8.AjL()|0,1)+Ayx)+A._GetAutoObject(A.Device.Converter
).AxY(this.K8.AqS()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).Af0())+Ayy)+this.K8.AY.
toFixed())+Ob);else this.WY.T(A.aaR(A.acf.Unknown));if(this.Ajd.AY>0)this.S3.T(((((((
A._GetAutoObject(A.Device.Converter).S8(A4s,2,true)+Ayx)+A._GetAutoObject(A.Device.
Converter).S8(this.Ajd.AqS()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).Aas())+Ayy
)+this.Ajd.AY.toFixed())+Ob);else this.S3.T(A.aaR(A.acf.Unknown));if(this.Aje.AY>
0)this.S4.T(((((((A._GetAutoObject(A.Device.Converter).S8(A4u,2,true)+Ayx)+A._GetAutoObject(
A.Device.Converter).S8(this.Aje.AqS()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).
Aas())+Ayy)+this.Aje.AY.toFixed())+Ob);else this.S4.T(A.aaR(A.acf.Unknown));if(this.
Amj.AY>0)this.WZ.T(((((((A.abk(this.Amj.AjL(),0,1)+Ayx)+A.abk(this.Amj.AqS(),0,1
))+CQ)+A.aaR(A.acf.BhF))+Ayy)+this.Amj.AY.toFixed())+Ob);else this.WZ.T(A.aaR(A.
acf.Unknown));var A4t=0;var A4v=0;var Adf=false;if(this.K8.AY>0)Adf=true;var Ib=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AJZ=A._GetAutoObject(A.Device.
Device).An.Filter.DL(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJZ)?AJZ:null))Ib=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJZ)?AJZ:null
).A4;}if(this.Ajd.AY>0){Adf=true;A4t=A._GetAutoObject(A.Device.Converter).A$N(A4s
,Ib);}if(this.Aje.AY>0){Adf=true;A4v=A._GetAutoObject(A.Device.Converter).A$N(A4u
,Ib);}this.S3.AkA(A4t);this.S4.AkA(A4v);this.I4.Z(!Adf);C.Fz.Aan.call(this,G);},
Adm:function(G){this.K8.Yc();this.Ajd.Yc();this.Aje.Yc();this.Amj.Yc();this.Ada=
0;this.AAm=0;this.Apr=0;this.A2n=0;C.Fz.Adm.call(this,G);},Fj:function(G){var B;
this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},Bdy:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.Fz._Init.call(this,aArg);C.Agv._Init.call(this.Abv={I:
this},0);C.IF._Init.call(this.WY={I:this},0);C.Agv._Init.call(this.Abs={I:this},
0);C.Ajo._Init.call(this.S3={I:this},0);C.Agv._Init.call(this.Abt={I:this},0);C.
Ajo._Init.call(this.S4={I:this},0);C.Agv._Init.call(this.Abw={I:this},0);C.IF._Init.
call(this.WZ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqH;
this.Dr(C.Avq);this.Akv(A.aaR(A.acf.A5$));this.Ae8(A.aaR(A.acf.Aki));this.Abv.H(
AIv);this.Abv.Aj(true);this.Abv.T(A.aaR(A.acf.A43));this.Abv.Bi(false);this.Abv.
Kt(5);this.WY.H(AZN);this.WY.Aj(true);this.WY.T(A.jV);this.WY.Bi(true);this.Abs.
H(Ah0);this.Abs.Aj(true);this.Abs.T(A.aaR(A.acf.ALR));this.Abs.Bi(false);this.Abs.
Kt(5);this.S3.H(As_);this.S3.Aj(true);this.S3.T(A.jV);this.S3.Bi(true);this.S3.Kv(
A.jV);this.Abt.H(As$);this.Abt.Aj(true);this.Abt.T(A.aaR(A.acf.Auu));this.Abt.Bi(
false);this.Abt.Kt(5);this.S4.H(Brl);this.S4.Aj(true);this.S4.T(A.jV);this.S4.Bi(
true);this.S4.Kv(A.jV);this.Abw.H(AZO);this.Abw.Aj(true);this.Abw.T(A.aaR(A.acf.
A4$));this.Abw.Bi(false);this.Abw.Kt(5);this.WZ.H(Aou);this.WZ.Aj(true);this.WZ.
T(A.jV);this.WZ.Bi(true);this.Ay.H(It);this.J(this.Abv,-1);this.J(this.WY,-1);this.
J(this.Abs,-1);this.J(this.S3,-1);this.J(this.Abt,-1);this.J(this.S4,-1);this.J(
this.Abw,-1);this.J(this.WZ,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fj];this.
K8=A._NewObject(C.AvN,0);this.Ajd=A._NewObject(C.AvN,0);this.Aje=A._NewObject(C.
AvN,0);this.WY.S(A.aaL(A.fl.Af));this.S3.S(A.aaL(A.fl.Ak));this.S4.S(A.aaL(A.fl.
Ak));this.WZ.S(A.aaL(A.fl.Ak));this.Amj=A._NewObject(C.A6j,0);},_Done:function(){
this.__proto__=C.Fz;this.Abv._Done();this.WY._Done();this.Abs._Done();this.S3._Done(
);this.Abt._Done();this.S4._Done();this.Abw._Done();this.WZ._Done();this.Ay._Done(
);C.Fz._Done.call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.Abv._ReInit(
);this.WY._ReInit();this.Abs._ReInit();this.S3._ReInit();this.Abt._ReInit();this.
S4._ReInit();this.Abw._ReInit();this.WZ._ReInit();this.Ay._ReInit();this.Akv(A.aaR(
A.acf.A5$));this.Ae8(A.aaR(A.acf.Aki));this.Abv.T(A.aaR(A.acf.A43));this.Abs.T(A.
aaR(A.acf.ALR));this.Abt.T(A.aaR(A.acf.Auu));this.Abw.T(A.aaR(A.acf.A4$));this.WY.
S(A.aaL(A.fl.Af));this.S3.S(A.aaL(A.fl.Ak));this.S4.S(A.aaL(A.fl.Ak));this.WZ.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((
B=this.K8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajd)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aje)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amj)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abs)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abr={_Init:function(aArg){C.AjO._Init.call(this,aArg);this.__proto__=C.Abr;this.
Dd.Ax(A.aaL(A.ach.ADu));},_className:"Application::HeaderEvaluationFilter"};C.Kp={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjO.DX.call(this
,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter).AdX(A._GetAutoObject(A.Device.
Device).Kj));},_Init:function(aArg){C.AjO._Init.call(this,aArg);this.__proto__=C.
Kp;},_ReInit:function(){C.AjO._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avq={Init:function(aArg){this.Dd.Ax(A._GetAutoObject(A.acj.DU).Bc7());},_Init:
function(aArg){C.Abr._Init.call(this,aArg);this.__proto__=C.Avq;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AO7={Init:function(
aArg){this.Dd.Ax(A.aaL(A.ach.Abz));},_Init:function(aArg){C.Abr._Init.call(this,
aArg);this.__proto__=C.AO7;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AO6={Init:function(aArg){this.Dd.Ax(A.aaL(A.ach.AmX));},_Init:function(aArg){
C.Abr._Init.call(this,aArg);this.__proto__=C.AO6;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AO5={Sl:null,Dd:null,AP:null,CP:function(){this.Sl.R(A.aaR(A.acf.AM9));},De:
function(E){C.BQ.De.call(this,E);this.Sl.L(E);this.Dd.L(E);},_Init:function(aArg
){C.BQ._Init.call(this,aArg);C.CH._Init.call(this.Sl={I:this},0);A.acg.Ap._Init.
call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0);this.__proto__=
C.AO5;this.Sl.H(Brm);this.Sl.R(A.aaR(A.acf.AM9));this.Sl.A6(0x11);this.Dd.H(Brn);
this.AP.DC(Bro);this.AP.DM(Brp);this.AP.L(A.jb.Bc);this.J(this.Sl,0);this.J(this.
Dd,0);this.J(this.AP,0);this.Sl.S(A.aaL(A.fl.Af));this.Sl.A2(A.aaL(A.fl.Ak));this.
Dd.Ax(A.aaL(A.ach.AQd));},_Done:function(){this.__proto__=C.BQ;this.Sl._Done();this.
Dd._Done();this.AP._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Sl._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Sl.R(A.aaR(
A.acf.AM9));this.Sl.S(A.aaL(A.fl.Af));this.Sl.A2(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aev={TT:null,AjY:
null,AjV:null,AjW:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.TT={I:this},0);A.acg.Ap._Init.call(this.AjY={I:this},0);A.acg.Ap._Init.
call(this.AjV={I:this},0);A.acg.Ap._Init.call(this.AjW={I:this},0);this.__proto__=
C.Aev;this.TT.H(Brq);this.TT.R(A.aaR(A.acf.Year));this.TT.A6(0x11);this.TT.L(A.jb.
Text);this.AjY.H(A$_);this.AjY.L(A.jb.Text);this.AjV.H(Brr);this.AjV.L(A.jb.Text
);this.AjW.H(Brs);this.AjW.L(A.jb.Text);this.J(this.TT,0);this.J(this.AjY,0);this.
J(this.AjV,0);this.J(this.AjW,0);this.TT.S(A.aaL(A.fl.Ko));this.TT.A2(A.aaL(A.fl.
Il));this.AjY.Ax(A.aaL(A.ach.AQo));this.AjV.Ax(A.aaL(A.ach.AQn));this.AjW.Ax(A.aaL(
A.ach.AQv));},_Done:function(){this.__proto__=C.EA;this.TT._Done();this.AjY._Done(
);this.AjV._Done();this.AjW._Done();C.EA._Done.call(this);},_ReInit:function(){C.
EA._ReInit.call(this);this.TT._ReInit();this.AjY._ReInit();this.AjV._ReInit();this.
AjW._ReInit();this.TT.R(A.aaR(A.acf.Year));this.TT.S(A.aaL(A.fl.Ko));this.TT.A2(
A.aaL(A.fl.Il));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.TT).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AjY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjW)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmJ={Aju:null,AP:null
,A$:null,Ea:null,UF:null,SU:null,Gs:null,XF:0,AtF:0,Aly:0,ABu:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SU.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.SU.M[2]-1,0,this.SU.M[
2]+1,aSize[1]]);this.UF.H([this.SU.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UF.M[2]-1,0,this.UF.M[2]+1,aSize[1]]);this.Gs.H([this.UF.M[2],0,aSize[
0],aSize[1]]);this.Aju.H(this.Gs.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABu.toFixed());this.SU.L(this.V.AQ);this.SU.R(this.Aly.toFixed());this.UF.
L(this.V.AQ);this.UF.R(this.AtF.toFixed());var B0=this.BA6(this.XF);this.Gs.L(A.
_GetAutoObject(A.acj.Assessment).Xv(B0));this.Aju.L(A._GetAutoObject(A.acj.Assessment
).Qo(B0));this.Gs.R(A.abk(this.XF,0,0)+Aad);},Cf:function(Ad){if(!this.AX)return;
this.Hr=Ad;Ad=(this.AX.B9()-Ad)-1;if(!!this.AX){this.Aly=this.AX.CF(Ad,1);this.AtF=
this.AX.CF(Ad,2);this.ABu=this.AX.CF(Ad,0);if(this.Aly>0)this.XF=(this.AtF/this.
Aly)*100;else this.XF=0;this.Am();}},BA6:function(XF){if(XF>=8)return 1;else if(
XF>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AK._Init.call(this.Aju={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.
acg.AK._Init.call(this.A$={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UF={I:this},0);A.acg.Text._Init.call(this.SU={I:this},0
);A.acg.Text._Init.call(this.Gs={I:this},0);this.__proto__=C.AmJ;this.Aju.H(Aok);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.H(Aok);this.Ea.L(A.jb.Bc);this.UF.
L(A.jb.Text);this.SU.H(Aok);this.SU.L(A.jb.Text);this.Gs.L(A.jb.Text);this.J(this.
Aju,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.UF,0);this.
J(this.SU,0);this.J(this.Gs,0);this.UF.S(A.aaL(A.fl.Af));this.SU.S(A.aaL(A.fl.Af
));this.Gs.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Aju._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.UF._Done(
);this.SU._Done();this.Gs._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Aju._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea.
_ReInit();this.UF._ReInit();this.SU._ReInit();this.Gs._ReInit();this.UF.S(A.aaL(
A.fl.Af));this.SU.S(A.aaL(A.fl.Af));this.Gs.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajo={
BS:null,AxT:A.jV,Rating:0,Ai:function(Ae){C.IF.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qo(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xv(this.Rating));}this.BS.L(this.V.AQ);},S:function(
E){C.IF.S.call(this,E);if((E===A.aaL(A.fl.Ko))||(E===A.aaL(A.fl.Af)))this.BS.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Il))||(E===A.aaL(A.fl.Ak)))this.BS.S(A.aaL(
A.fl.Ak));else this.BS.S(E);},Kv:function(E){if(this.AxT===E)return;this.AxT=E;this.
BS.R(E);},AkA:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IF._Init.call(this,aArg);A.acg.Text._Init.call(this.BS={I:this}
,0);this.__proto__=C.Ajo;this.BS.AZ(0x34);this.BS.H(Rp);this.BS.I_(true);this.BS.
A6(0x11);this.BS.L(A.jb.Text);this.BS.Aj(true);this.J(this.BS,0);this.BS.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IF;this.BS._Done();C.IF._Done.call(
this);},_ReInit:function(){C.IF._ReInit.call(this);this.BS._ReInit();this.BS.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IF._Mark.call(this,D);if((B=this.BS)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACB={
N3:null,SK:null,V:null,AnL:null,AnK:null,Acd:null,Acc:null,DK:Lv,A$S:A.jV,A_Q:A.
jV,Ab5:function(E){if(this.N3===E)return;this.N3=E;this.SK.Ab5(this.N3);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_v:function(E){if(this.A$S===E
)return;this.A$S=E;this.Acd.R(E);},A99:function(E){if(this.A_Q===E)return;this.A_Q=
E;this.Acc.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SK._Init.
call(this.SK={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AK._Init.
call(this.AnL={I:this},0);A.acg.AK._Init.call(this.AnK={I:this},0);A.acg.Text._Init.
call(this.Acd={I:this},0);A.acg.Text._Init.call(this.Acc={I:this},0);this.__proto__=
C.ACB;this.H(Brt);this.SK.H(Bru);this.SK.Ar(false);this.SK.Bm2(360);this.SK.Bna(
0.5);this.V.AZ(0x1D);this.V.H(UT);this.V.KR(true);this.V.R(Lv);this.V.L(A.jb.Text
);this.AnL.H(A$$);this.AnL.L(A.jb.H8);this.AnK.H(Baa);this.AnK.L(A.jb.Gh);this.Acd.
AZ(0x1D);this.Acd.H(A$$);this.Acd.L(A.jb.Text);this.Acc.AZ(0x1D);this.Acc.H(Baa);
this.Acc.L(A.jb.CS);this.J(this.SK,0);this.J(this.V,0);this.J(this.AnL,0);this.J(
this.AnK,0);this.J(this.Acd,0);this.J(this.Acc,0);this.SK.Bnb(A.aaL(A.acv.ATG));
this.V.S(A.aaL(A.fl.Ak));this.Acd.S(A.aaL(A.fl.Ak));this.Acc.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SK._Done();this.V._Done();this.AnL.
_Done();this.AnK._Done();this.Acd._Done();this.Acc._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SK._ReInit();this.V._ReInit(
);this.AnL._ReInit();this.AnK._ReInit();this.Acd._ReInit();this.Acc._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acd.S(A.aaL(A.fl.Ak));this.Acc.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N3)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkO={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.AkO;this.H(UX);this.Background.AZ(0x3F);this.Background.
H(UX);this.Background.L(A.jb.BjA);this.Text.AZ(0x3F);this.Text.H(UX);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Rc={AkZ:null,NS:null,C8:null,AcB:null,JM:null,TemperatureUnit:null,ME:null,PU:
null,Sh:null,Uu:null,Lq:null,Je:null,ZZ:null,ZY:null,Sj:null,HF:null,AjE:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlG());
this.Uu.R(A._GetAutoObject(A.acj.Temperature).AlG());this.Sj.Z(!A._GetAutoObject(
A.Device.Device).AmL);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An3();this.AxQ(
);this.AcE();this.AxR();},IZ:function(G){this.WM(this);},CC:function(G){var B;C.
AB.CC.call(this,G);A.zX([this,this.AKu],[B=A._GetAutoObject(A.Device.Device),B.AEw
,B.AIL],0);A.zX([this,this.AAB],[B=A._GetAutoObject(A.Device.Device),B.AEA,B.AIN
],0);A.zX([this,this.AAB],[B=A._GetAutoObject(A.Device.Device),B.ASt,B.AZ4],0);A.
zX([this,this.A24],[B=A._GetAutoObject(A.Device.Device),B.Arr,B.Ate],0);A.zX([this
,this.A2W],[B=A._GetAutoObject(A.Device.Device),B.AEt,B.AII],0);A._GetAutoObject(
A.Device.Device).AhK();if(A._GetAutoObject(A.Device.Device).AmL)A._GetAutoObject(
A.Device.Device).Ae0(true);A._GetAutoObject(A.Device.Device).AxC();A.pe([this,this.
A2W],this);A.pe([this,this.AAB],this);A.pe([this,this.A24],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhK();A._GetAutoObject(A.Device.Device
).Uq(false);A._GetAutoObject(A.Device.Device).Ae_(false);A._GetAutoObject(A.Device.
Device).Ae0(false);A.z$([this,this.AKu],[B=A._GetAutoObject(A.Device.Device),B.AEw
,B.AIL],0);A.z$([this,this.AAB],[B=A._GetAutoObject(A.Device.Device),B.AEA,B.AIN
],0);A.z$([this,this.AAB],[B=A._GetAutoObject(A.Device.Device),B.ASt,B.AZ4],0);A.
z$([this,this.A24],[B=A._GetAutoObject(A.Device.Device),B.Arr,B.Ate],0);A.z$([this
,this.A2W],[B=A._GetAutoObject(A.Device.Device),B.AEt,B.AII],0);},AAB:function(G
){this.Am();},An3:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CJ);this.C8.L(A.jb.Gh);this.JM.L(this.C8.AQ);this.
ME.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CJ);this.C8.L(A.jb.AV);this.JM.L(A.jb.Text);this.ME.L(this.JM.AQ);this.TemperatureUnit.
L(this.JM.AQ);this.HF.L(A.jb.Gh);}}},AxQ:function(){this.AkZ.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JM.R(A.aaR(A.acf.ADK));this.C8.Ax(A.aaL(A.ach.AvE));this.C8.Cv(0);
this.NS.Cv(0);}break;case 1:{this.AVk(A._GetAutoObject(A.Device.Device).Lt,false
);this.C8.Ax(A.aaL(A.ach.AvE));this.NS.Cv(0);}break;case 2:{this.Sh.R(A._GetAutoObject(
A.Device.Converter).AkY(A._GetAutoObject(A.Device.Device).AF5));this.AVk(A._GetAutoObject(
A.Device.Device).Lt,false);this.C8.Ax(null);this.NS.Cv(1);this.AcB.Z(true);this.
PU.Z(true);this.Sh.Z(true);this.Uu.Z(true);}break;case 3:{this.AUo();this.AVk(A.
_GetAutoObject(A.Device.Device).Lt,true);this.AcB.Z(false);this.PU.Z(false);this.
Sh.Z(false);this.Uu.Z(false);}break;case 4:{this.JM.R(A.aaR(A.acf.BjN));this.ME.
R(A.aaR(A.acu.Akh));this.C8.Ax(A.aaL(A.ach.AvG));this.C8.Cv(2);this.NS.Cv(0);}break;
default:A.ab5("%s%e",AHT,A._GetAutoObject(A.Device.Device).MeasureState);}},AcE:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Lt<=3240)||(A._GetAutoObject(A.Device.Device
).Lt>=5460))this.N.C2(null);else this.N.C2(A.aaL(A.ach.Aey));this.N.Cs(null);}break;
default:;}},AsB:function(G){A._GetAutoObject(C.A9).Fy();},WM:function(G){},A0g:function(
s){this.WM(s);},AkT:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BAS(this);break;default:;}},A0f:function(s){this.AkT(s);},AVk:
function(AoK,BzE){if(BzE)this.Lq.L(A.jb.Bm);else this.Lq.L(A.jb.Gh);if(AoK<=3240
){this.ME.Z(false);this.TemperatureUnit.Z(false);this.Lq.Z(true);this.Lq.R(A.aaR(
A.acu.AU6));}else if(AoK>=5460){this.ME.Z(false);this.TemperatureUnit.Z(false);this.
Lq.Z(true);this.Lq.R(A.aaR(A.acu.BpD));}else{this.ME.Z(true);this.TemperatureUnit.
Z(true);this.Lq.Z(false);this.ME.R(A._GetAutoObject(A.Device.Converter).AkY(AoK)
);}},AxR:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lt<=3240)||(A._GetAutoObject(A.Device.
Device).Lt>=5460))this.JM.R(A.aaR(A.acf.ADK));else this.JM.R(A.aaR(A.acf.Bqd));break;
default:;}},AxS:function(){},BpY:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.ZZ.Ar(true);break;case 4:this.ZY.Ar(true);break;default:{
this.ZZ.Ar(false);this.ZY.Ar(false);A._GetAutoObject(A.Device.Device).Ae_(false);
}}},AKu:function(G){this.Am();this.AxS();this.BpY();this.BpW();},A24:function(G){
if(A._GetAutoObject(A.Device.Device).AmM){this.Sj.L(A.jb.H8);this.Sj.Cv(1);}else{
this.Sj.L(A.jb.Bm);this.Sj.Cv(0);}},BAS:function(G){if(!A._GetAutoObject(A.Device.
Device).AmL)A._GetAutoObject(A.Device.Device).Ae0(!A._GetAutoObject(A.Device.Device
).AmM);},BpW:function(){if(A._GetAutoObject(A.Device.Device).AmL){this.Sj.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).Ae0(true);else A._GetAutoObject(A.Device.Device).Ae0(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sj.Z(true);else this.Sj.Z(false);},AKw:function(
G){this.CC(this);},AUo:function(){A.ab5("%s",A$9);},A2W:function(G){if(A._GetAutoObject(
A.Device.Device).HF){this.JM.H(Brv);this.ME.H(Brw);this.TemperatureUnit.H(Brx);}
else{this.JM.H(Bry);this.ME.H(Brz);this.TemperatureUnit.H(BrA);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gk._Init.call(this.AkZ={I:this},0);A.acg.
Ap._Init.call(this.NS={I:this},0);A.acg.Ap._Init.call(this.C8={I:this},0);A.acg.
Ap._Init.call(this.AcB={I:this},0);A.acg.Text._Init.call(this.JM={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.ME={
I:this},0);A.acg.Text._Init.call(this.PU={I:this},0);A.acg.Text._Init.call(this.
Sh={I:this},0);A.acg.Text._Init.call(this.Uu={I:this},0);C.CH._Init.call(this.Lq={
I:this},0);A.Device.TG._Init.call(this.Je={I:this},0);A.Device.TG._Init.call(this.
ZZ={I:this},0);A.Device.TG._Init.call(this.ZY={I:this},0);A.acg.Ap._Init.call(this.
Sj={I:this},0);C.CH._Init.call(this.HF={I:this},0);A.acl.TG._Init.call(this.AjE={
I:this},0);this.__proto__=C.Rc;var B;this.N.Z(true);this.AkZ.Fp(1000);this.AkZ.B1=
2;this.NS.H(BrB);this.NS.L(A.jb.CS);this.C8.H(BrC);this.C8.L(A.jb.AV);this.C8.Cv(
0);this.C8.Z(true);this.AcB.H(BrD);this.AcB.L(A.jb.Text);this.AcB.Z(false);this.
JM.KR(true);this.JM.R(A.aaR(A.acf.ADK));this.JM.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.ME.A6(0x14);this.ME.R(A.aaR(A.acu.
Akh));this.ME.L(A.jb.Text);this.PU.H(BrE);this.PU.R(A.aaR(A.acf.PU));this.PU.L(A.
jb.Text);this.PU.Z(false);this.Sh.H(BrF);this.Sh.A6(0x14);this.Sh.R(BrG);this.Sh.
L(A.jb.Text);this.Sh.Z(false);this.Uu.H(BrH);this.Uu.R(BrI);this.Uu.L(A.jb.Text);
this.Uu.Z(false);this.Lq.H(BrJ);this.Lq.R(A.aaR(A.acu.AU6));this.Lq.A6(0x12);this.
Lq.L(A.jb.Gh);this.Je.B1=false;this.Je.Cw=true;this.Je.HM(1);this.Je.Fp(4000);this.
Je.Um(0);this.ZZ.B1=false;this.ZZ.Cw=true;this.ZZ.HM(2);this.ZZ.Fp(400);this.ZZ.
Um(200);this.ZY.B1=false;this.ZY.Cw=true;this.ZY.HM(3);this.ZY.Fp(500);this.ZY.Um(
250);this.Sj.H(BrK);this.HF.H(BrL);this.HF.Z(A._GetAutoObject(A.Device.Device).HF
);this.HF.R(A.aaR(A.acf.HF));this.HF.A6(0x12);this.HF.L(A.jb.Gh);this.AjE.Ar(A._GetAutoObject(
A.Device.Device).HF);this.AjE.Fp(500);this.AjE.Um(1000);this.J(this.NS,0);this.J(
this.C8,0);this.J(this.AcB,0);this.J(this.JM,0);this.J(this.TemperatureUnit,0);this.
J(this.ME,0);this.J(this.PU,0);this.J(this.Sh,0);this.J(this.Uu,0);this.J(this.Lq
,0);this.J(this.Sj,0);this.J(this.HF,0);this.N.CE=[this,this.AsB];this.N.Cg=[this
,this.A0f];this.N.Cl=[this,this.A0g];this.N.C1(A.aaL(A.ach.Aex));this.AkZ.Q=[B=this.
C8,B.ASk,B.Cv];this.NS.Ax(A.aaL(A.ach.NS));this.C8.Ax(A.aaL(A.ach.AvE));this.AcB.
Ax(A.aaL(A.ach.AQF));this.JM.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.ME.S(A.aaL(A.fl.Aeq));this.PU.S(A.aaL(A.fl.Af));this.Sh.S(A.aaL(A.fl.EK
));this.Uu.S(A.aaL(A.fl.EK));this.Lq.S(A.aaL(A.fl.Aeq));this.Lq.A2(A.aaL(A.fl.EK
));this.Lq.Cu(A.aaL(A.fl.Af));this.Je.Q=[B=A._GetAutoObject(A.Device.Device),B.ASB
,B.AZ_];this.ZZ.Q=[B=A._GetAutoObject(A.Device.Device),B.AEB,B.AIO];this.ZY.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEB,B.AIO];this.Sj.Ax(A.aaL(A.ach.AqK));this.
HF.S(A.aaL(A.fl.EK));this.HF.A2(A.aaL(A.fl.Ko));this.HF.Cu(A.aaL(A.fl.Il));this.
AjE.Q=[B=this.HF,B.Fo,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.AkZ._Done();this.NS._Done();this.C8._Done();this.AcB._Done();this.JM._Done(
);this.TemperatureUnit._Done();this.ME._Done();this.PU._Done();this.Sh._Done();this.
Uu._Done();this.Lq._Done();this.Je._Done();this.ZZ._Done();this.ZY._Done();this.
Sj._Done();this.HF._Done();this.AjE._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.AkZ._ReInit();this.NS._ReInit();this.C8._ReInit();
this.AcB._ReInit();this.JM._ReInit();this.TemperatureUnit._ReInit();this.ME._ReInit(
);this.PU._ReInit();this.Sh._ReInit();this.Uu._ReInit();this.Lq._ReInit();this.Je.
_ReInit();this.ZZ._ReInit();this.ZY._ReInit();this.Sj._ReInit();this.HF._ReInit(
);this.AjE._ReInit();this.JM.R(A.aaR(A.acf.ADK));this.ME.R(A.aaR(A.acu.Akh));this.
PU.R(A.aaR(A.acf.PU));this.Lq.R(A.aaR(A.acu.AU6));this.HF.R(A.aaR(A.acf.HF));this.
JM.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.ME.S(A.aaL(A.fl.
Aeq));this.PU.S(A.aaL(A.fl.Af));this.Sh.S(A.aaL(A.fl.EK));this.Uu.S(A.aaL(A.fl.EK
));this.Lq.S(A.aaL(A.fl.Aeq));this.Lq.A2(A.aaL(A.fl.EK));this.Lq.Cu(A.aaL(A.fl.Af
));this.HF.S(A.aaL(A.fl.EK));this.HF.A2(A.aaL(A.fl.Ko));this.HF.Cu(A.aaL(A.fl.Il
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.AkZ)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uu
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Je)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AUU={AcE:
function(){C.Rc.AcE.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cs(null);this.N.C2(A.aaL(A.ach.AvH));}break;default:;}},
WM:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Lt>3240)&&(A._GetAutoObject(A.Device.Device
).Lt<5460)){A._GetAutoObject(A.Device.Device).AhK();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKw(this);break;default:;}},AxR:
function(){C.Rc.AxR.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JM.R(A.aaR(A.acf.BjO));break;default:;}},AxS:function(){C.Rc.AxS.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WA(16711680);this.Je.Ar(true);}break;default:this.Je.Ar(false);
}},AUo:function(){this.C8.Ax(A.aaL(A.ach.AvG));this.C8.Cv(0);this.NS.Cv(0);},_Init:
function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=C.AUU;this.Dr(C.AO3);},
_className:"Application::TemperatureMeasurementScreen"};C.AO8={Dd:null,IL:null,NU:
null,AP:null,Ag4:null,A$:null,De:function(E){C.BQ.De.call(this,E);this.Dd.L(E);this.
IL.L(E);this.NU.L(E);this.Ag4.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.Ap._Init.call(this.IL={I:this},0
);A.acg.Ap._Init.call(this.NU={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.Ag4={I:this},0);A.acg.C5._Init.call(this.A$={I:this},
0);this.__proto__=C.AO8;this.Dd.H(Ata);this.IL.H(Aol);this.NU.H(AHu);this.AP.DC(
Bab);this.AP.DM(Bac);this.AP.L(A.jb.Bc);this.Ag4.H(BrM);this.Ag4.L(A.jb.CS);this.
A$.DC(BrN);this.A$.DM(BrO);this.A$.L(A.jb.Bc);this.J(this.Dd,0);this.J(this.IL,0
);this.J(this.NU,0);this.J(this.AP,0);this.J(this.Ag4,0);this.J(this.A$,0);this.
Dd.Ax(A.aaL(A.ach.ADu));this.IL.Ax(A.aaL(A.ach.Aez));this.NU.Ax(A.aaL(A.ach.Avz)
);this.Ag4.Ax(A.aaL(A.ach.AQc));},_Done:function(){this.__proto__=C.BQ;this.Dd._Done(
);this.IL._Done();this.NU._Done();this.AP._Done();this.Ag4._Done();this.A$._Done(
);C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Dd._ReInit(
);this.IL._ReInit();this.NU._ReInit();this.AP._ReInit();this.Ag4._ReInit();this.
A$._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Dd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dc={Er:null,DS:null,AGq:
0,ANF:0,Init:function(aArg){A.zV([this,this.ALd],A._GetAutoObject(A.Device.Device
).An,0);A.pe([this,this.ALd],this);},ALd:function(G){var Ad=this.AGq;if(Ad<0){this.
DS.E5();this.DS.EB(this.ANF);return;}this.DS.EB(A._GetAutoObject(A.Device.Device
).An.AmQ(Ad,14));this.DS.AEY(A._GetAutoObject(A.Device.Device).An.I5(Ad,13));this.
DS.Ae1(A._GetAutoObject(A.Device.Device).An.H2(Ad,8));this.DS.Un(A._GetAutoObject(
A.Device.Device).An.H2(Ad,11));this.DS.Ae5(A._GetAutoObject(A.Device.Device).An.
H2(Ad,12));this.DS.Ae7(A._GetAutoObject(A.Device.Device).An.CF(Ad,5));},A_a:function(
E){if(this.AGq===E)return;this.AGq=E;A.pe([this,this.ALd],this);},A9D:function(E
){if(this.ANF===E)return;this.ANF=E;A.pe([this,this.ALd],this);},A8P:function(){
return this.AGq;},_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.call(
this.Er={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dc;this.
Er.H(BrP);this.Er.R(A.aaR(A.acf.GM));this.Er.A6(0x11);this.Er.L(A.jb.Text);this.
DS.H(AZP);this.J(this.Er,0);this.J(this.DS,0);this.Er.S(A.aaL(A.fl.Af));this.Er.
A2(A.aaL(A.fl.Ak));this.Er.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){
this.__proto__=C.EA;this.Er._Done();this.DS._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Er._ReInit();this.DS._ReInit();this.Er.R(
A.aaR(A.acf.GM));this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.Ak));this.Er.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KO={AgL:null,Text:null,Afi:null,De:function(E
){C.BQ.De.call(this,E);this.AgL.L(E);this.Text.L(E);this.Afi.L(E);},_Init:function(
aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgL={I:this},0);C.CH._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afi={I:this},0);this.__proto__=
C.KO;this.AgL.H(BrQ);this.AgL.L(A.jb.Text);this.Text.H(BrR);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afi.H(BrS);this.Afi.L(A.jb.Text);this.
J(this.AgL,0);this.J(this.Text,0);this.J(this.Afi,0);this.AgL.Ax(A.aaL(A.ach.AO_
));this.Text.S(A.aaL(A.fl.Ko));this.Text.A2(A.aaL(A.fl.Il));},_Done:function(){this.
__proto__=C.BQ;this.AgL._Done();this.Text._Done();this.Afi._Done();C.BQ._Done.call(
this);},_ReInit:function(){C.BQ._ReInit.call(this);this.AgL._ReInit();this.Text.
_ReInit();this.Afi._ReInit();this.Text.S(A.aaL(A.fl.Ko));this.Text.A2(A.aaL(A.fl.
Il));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.AgL)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afi
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AO1={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO1;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AO3={_Init:function(
aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO3;this.JX(this.Afi,-2);this.
Afi.Ax(A.aaL(A.ach.Abz));},_className:"Application::HeaderDeviceTemperature"};C.
Yj={Ai:function(Ae){C.AmJ.Ai.call(this,Ae);this.T(A.aaR(A.acf.BpE)+A.aaR(A.acf.Colon
));},Cf:function(Ad){var B;if(!this.AX)return;this.Aly=0;this.AtF=0;this.XF=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B9();O++){this.Aly+=this.AX.CF(O,1);this.AtF+=
this.AX.CF(O,2);}if(this.Aly>0)this.XF=(this.AtF/this.Aly)*100;this.Am();}},_Init:
function(aArg){C.AmJ._Init.call(this,aArg);this.__proto__=C.Yj;this.AP.Z(false);
this.A$.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Ko));this.V.A2(A.aaL(A.fl.
Il));},_ReInit:function(){C.AmJ._ReInit.call(this);this.V.S(A.aaL(A.fl.Ko));this.
V.A2(A.aaL(A.fl.Il));},_className:"Application::EvaluationLossesSumItem"};C.A6i={
Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A6i;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6j={K0:null,MS:null,AY:0,Yc:function(){this.K0=null;this.MS=null;this.AY=0;
},Os:function(A_){var Hg;Hg=A._NewObject(C.A6i,0);Hg.A4=A_;if(!this.K0){this.K0=
Hg;this.MS=Hg;this.AY=1;}else{this.MS.Ah=Hg;this.MS=Hg;this.AY=this.AY+1;}},AmS:
function(){var B;var RL=0;var Og=this.K0;while(!!Og){RL+=Og.A4;Og=Og.Ah;}return RL;
},AjL:function(){if(!this.AY)return 0;return this.AmS()/this.AY;},AqS:function(){
var B;if(!this.AY)return 0;var A1a=this.AjL();var Add=0;var Og=this.K0;while(!!Og
){Add+=Math.pow(Og.A4-A1a,2);Og=Og.Ah;}Add/=this.AY;Add=Math.sqrt(Add);return Add;
},_Init:function(aArg){this.__proto__=C.A6j;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agv={Background:null,V:null,KS:0,Us:5,Hk:false
,Ai:function(Ae){C.Hh.Ai.call(this,Ae);if(this.Hk)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CJ);},T:function(E){C.Hh.T.call(this,E);this.V.R(E);},Bi:
function(E){if(this.Hk===E)return;this.Hk=E;this.Am();},Kt:function(E){if(this.Us===
E)return;this.Us=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hh._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH.
_Init.call(this.V={I:this},0);this.__proto__=C.Agv;this.H(BD);this.Background.AZ(
0x3F);this.Background.H(BD);this.V.AZ(0x3F);this.V.H(AIr);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KS=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Ko));this.V.A2(A.aaL(A.fl.Il));this.V.Cu(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hh;this.Background._Done();this.V._Done();C.Hh._Done.call(this
);},_ReInit:function(){C.Hh._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Ko));this.V.A2(A.aaL(A.fl.Il));this.V.Cu(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.ANX={Wx:function(G){this.Agt();this.I1(A.aaR(
A.acf.AU5),[this,this.ATw],5);this.I1(A.aaR(A.acf.AU3),[this,this.ATv],7);this.I1(
A.aaR(A.acf.Calving),[this,this.Blx],11);this.I1(A.aaR(A.acf.AnW),[this,this.AwQ
],2);this.I1(A.aaR(A.acf.AdS),[this,this.AEM],1);this.I1(A.aaR(A.acf.Aux),[this,
this.AEG],0);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Anc
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){}
,Abp:function(){return C.AM4;},Abq:function(){return C.APv;},Q8:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ACR());},HO:function(G){
C.GZ.HO.call(this,G);if(this.Ake()===false){this.N.Cs(A.aaL(A.ach.ADr));this.N.Cg=[
this,this.A5R];this.N.FC(A.jV);}this.N.OO(false);this.N.OP(false);},Agf:function(
){A._GetAutoObject(C.A9).Cd(62);},_Init:function(aArg){C.GZ._Init.call(this,aArg
);this.__proto__=C.ANX;var B;this.Dr(C.AO4);this.Dj(A.aaR(A.acf.ART));this.AwL([
B=A._GetAutoObject(A.Device.Device),B.A8i,B.BaS]);},_ReInit:function(){C.GZ._ReInit.
call(this);this.Dj(A.aaR(A.acf.ART));},_className:"Application::DryCowListScreen"
};C.ANW={_Init:function(aArg){C.I3._Init.call(this,aArg);this.__proto__=C.ANW;this.
Lc.Ar(false);this.Lc.Aj(false);this.Lc.Z(false);this.Jq.Ar(false);this.Jq.Aj(false
);this.Jq.Z(false);},_className:"Application::DryCowListFilterScreen"};C.AO4={DX:
function(G){C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter).
AdX(9));},_Init:function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=C.AO4;}
,_className:"Application::HeaderDryCowListFilter"};C.Abm={Filter:null,LW:null,AGT:
A.jV,Eq:0,AFZ:1,Operator:1,Bl:function(aSize){C.Acl.Bl.call(this,aSize);this.V.H([
15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Acl.Ai.call(this,Ae);this.LW.
L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.
z$([this,this.Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb],E,0);A.
pe([this,this.Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.Filter
,F[1].call(F[0])))this.Tq((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator
));else this.Tq(null);},Nc:function(E){if(this.Eq===E)return;this.Eq=E;A.pe([this
,this.Mb],this);},Tq:function(AI){if(!!AI){var A1O;if(this.AFZ!==1)A1O=this.AFZ;
else A1O=AI.Operator;this.T((this.AGT+CQ)+A._GetAutoObject(A.Device.Converter).A6e(
A1O));this.Zu(false);}else{this.T(this.AGT);this.Zu(true);}},ON:function(E){if(this.
Operator===E)return;this.Operator=E;A.pe([this,this.Mb],this);},AFJ:function(E){
if(this.AGT===E)return;this.AGT=E;A.pe([this,this.Mb],this);},A9Z:function(E){if(
this.AFZ===E)return;this.AFZ=E;A.pe([this,this.Mb],this);},_Init:function(aArg){
C.Acl._Init.call(this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.
Abm;this.H(As2);this.AW.H(BrT);this.LW.H(AZQ);this.JX(this.V,-1);this.J(this.LW,
0);},_Done:function(){this.__proto__=C.Acl;this.LW._Done();C.Acl._Done.call(this
);},_ReInit:function(){C.Acl._ReInit.call(this);this.LW._ReInit();},_Mark:function(
D){var B;C.Acl._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.AjG={LW:null,Ai:function(Ae){C.QD.Ai.call(this,Ae);this.LW.L(this.V.AQ);},Tq:
function(AI){if(!!AI){this.H6.Cv(1);this.Zu(true);this.LW.A9Q(false);}else{this.
H6.Cv(0);this.Zu(false);this.LW.A9Q(true);}},_Init:function(aArg){C.QD._Init.call(
this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.AjG;this.Jb=20;this.
LW.H(AZQ);this.J(this.LW,0);},_Done:function(){this.__proto__=C.QD;this.LW._Done(
);C.QD._Done.call(this);},_ReInit:function(){C.QD._ReInit.call(this);this.LW._ReInit(
);},_Mark:function(D){var B;C.QD._Mark.call(this,D);if((B=this.LW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABT={Q:null,CP:function(
){this.T(A._GetAutoObject(A.Device.Helper).AmR(this.TableId,this.Eq));},Tq:function(
AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.H6.Cv(1);else this.H6.Cv(
0);},Kf:function(G){A.pe([this,this.Mb],this);},At:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.Kf],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
Kf],E,0);if(!!E)A.pe([this,this.Kf],this);},_Init:function(aArg){C.QD._Init.call(
this,aArg);this.__proto__=C.ABT;},_ReInit:function(){C.QD._ReInit.call(this);this.
CP();},_Mark:function(D){var B;C.QD._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.APv={YO:null,I9:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YO={I:this},0);A.acg.Text._Init.call(this.I9={I:this},0);this.__proto__=
C.APv;this.A9D(1);this.YO.H(BrU);this.YO.KR(true);this.YO.R(A.aaR(A.acf.ADZ));this.
YO.L(A.jb.Text);this.I9.H(S_);this.I9.R(((A.aaR(A.acf.RO)+Bad)+A.aaR(A.acf.A$R))+
Ob);this.I9.L(A.jb.Text);this.J(this.YO,0);this.J(this.I9,0);this.YO.S(A.aaL(A.fl.
Ak));this.I9.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.YO._Done(
);this.I9._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this
);this.YO._ReInit();this.I9._ReInit();this.YO.R(A.aaR(A.acf.ADZ));this.I9.R(((A.
aaR(A.acf.RO)+Bad)+A.aaR(A.acf.A$R))+Ob);this.YO.S(A.aaL(A.fl.Ak));this.I9.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.YO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AM4={Mi:null,KP:null,AdR:null,AP:null,A$:null
,Xl:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mi.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KP.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KP.M[2]-1,0,this.
KP.M[2]+1,aSize[1]]);this.AdR.H([this.KP.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.AdR.L(this.V.AQ);if(!!this.Xl&&(
this.Xl!==5)){this.Mi.L(A._GetAutoObject(A.acj.Assessment).Qo(this.Xl));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xv(this.Xl));}else this.Mi.L(this.Background.
AQ);},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Mf=this.AX.
CF(Ad,1);var A2l=this.AX.CF(Ad,29);var O_=this.AX.Hu(Ad,4);var LP=this.AX.I5(Ad,
13);var AlB=this.AX.I5(Ad,17);var AlK=this.AX.H2(Ad,11);this.Xl=A._GetAutoObject(
A.Device.Helper).AMd(LP,AlK,AlB);this.T(Mf.toFixed());this.KP.R(A2l.toFixed());this.
AdR.R(A._GetAutoObject(A.acj.KK).ACN(O_,A._GetAutoObject(A.Device.Helper).Dv(),BrV
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(
this.Mi={I:this},0);A.acg.Text._Init.call(this.KP={I:this},0);A.acg.Text._Init.call(
this.AdR={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(
this.A$={I:this},0);this.__proto__=C.AM4;this.Mi.H(As9);this.AP.L(A.jb.Bc);this.
A$.L(A.jb.Bc);this.J(this.Mi,0);this.J(this.KP,0);this.J(this.AdR,0);this.J(this.
AP,0);this.J(this.A$,0);this.KP.S(A.aaL(A.fl.Af));this.AdR.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mi._Done();this.KP._Done(
);this.AdR._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mi._ReInit();this.KP._ReInit();this.AdR.
_ReInit();this.AP._ReInit();this.A$._ReInit();this.KP.S(A.aaL(A.fl.Af));this.AdR.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mi
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RW={AJI:0,Bdv:false,Ai:function(Ae){C.Fx.Ai.call(this,Ae);if(this.Bdv){this.
T(A.aaR(A.acf.ANU));this.Kv(A.jV);}else{this.T(A.aaR(A.acf.Bjv));if(this.AJI>0)this.
Kv(this.AJI.toFixed());else this.Kv(W$);}},Cf:function(G){C.Fx.Cf.call(this,G);this.
Bdv=A._GetAutoObject(A.Device.Helper).W.IsDry;var Alw=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Alw>0)this.AJI=A._GetAutoObject(A.Device.Helper).
L9(Alw,A._GetAutoObject(A.Device.Helper).Dv());else this.AJI=0;this.Am();},_Init:
function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=C.RW;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMi={ALo:A.jV,Ai:function(Ae){C.Fx.Ai.call(this,Ae);this.T(A.aaR(A.acf.RO));
this.Kv(this.ALo);},Cf:function(G){C.Fx.Cf.call(this,G);var O_=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALo=A._GetAutoObject(A.acj.KK).ACN(O_,A._GetAutoObject(
A.Device.Helper).Dv(),((((BrW+A.aaR(A.acf.BgL))+BrX)+A.aaR(A.acf.BgK))+BrY)+A.aaR(
A.acf.ALS));this.Am();},_Init:function(aArg){C.Fx._Init.call(this,aArg);this.__proto__=
C.AMi;this.ALo=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fx._ReInit.call(this);
this.ALo=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANO={Uc:null,Y7:null,Wn:null,Wo:null,Sy:null,Init:function(aArg){this.Bb(this.
Uc);A.pe([this,this.MH],this);},Adt:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Nb._Init.call(this.Uc={
I:this},0);C.Nb._Init.call(this.Y7={I:this},0);C.Nb._Init.call(this.Wn={I:this},
0);C.AbR._Init.call(this.Wo={I:this},0);C.T$._Init.call(this.Sy={I:this},0);this.
__proto__=C.ANO;var B;this.Dr(C.AO1);this.Uc.H(IU);this.Uc.Aj(true);this.Uc.T(A.
aaR(A.acf.ACn));this.Uc.Bi(false);this.Uc.Ne(83);this.Y7.H(Qa);this.Y7.Aj(true);
this.Y7.T(A.acf.Info);this.Y7.Bi(true);this.Y7.Ne(82);this.Wn.H(Aab);this.Wn.Aj(
true);this.Wn.T(A.aaR(A.acf.AGt));this.Wn.Bi(false);this.Wn.Ne(64);this.Wo.H(Alc
);this.Wo.Aj(true);this.Wo.T(A.aaR(A.acf.TempMeasurement));this.Wo.Bi(true);this.
Wo.Ne(60);this.Sy.H(Aon);this.Sy.Aj(true);this.Sy.T(A.aaR(A.acf.ACI));this.Sy.Bi(
false);this.J(this.Uc,-1);this.J(this.Y7,-1);this.J(this.Wn,-1);this.J(this.Wo,-
1);this.J(this.Sy,-1);this.N.Cg=[this,this.Adt];this.N.Cs(A.aaL(A.ach.ADz));this.
Uc.AR=[B=this.Uc,B.Nh];this.Y7.AR=[B=this.Y7,B.Nh];this.Wn.AR=[B=this.Wn,B.Nh];this.
Wo.AR=[B=this.Wo,B.Nh];this.Sy.AR=null;this.Sy.AeU([B=this.Sy,B.Atg]);this.Sy.Gq([
this,this.D_,this.GQ]);this.Sy.ASN([B=A._GetAutoObject(A.Device.Device),B.Arr,B.
Ate]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Uc._Done();this.
Y7._Done();this.Wn._Done();this.Wo._Done();this.Sy._Done();C.Ei._Done.call(this);
},_ReInit:function(){C.Ei._ReInit.call(this);this.Uc._ReInit();this.Y7._ReInit();
this.Wn._ReInit();this.Wo._ReInit();this.Sy._ReInit();this.Uc.T(A.aaR(A.acf.ACn)
);this.Wn.T(A.aaR(A.acf.AGt));this.Wo.T(A.aaR(A.acf.TempMeasurement));this.Sy.T(
A.aaR(A.acf.ACI));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Uc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"
};C.ANP={Ua:null,AbO:null,Wl:null,Init:function(aArg){this.Bb(this.Ua);},ByU:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},Bj9:function(G){if(A._GetAutoObject(
A.Device.Device).Aa2<=20)A._GetAutoObject(A.Device.Device).A5(76,true,BrZ,0,null
);else A._GetAutoObject(A.Device.Device).A5(39,true,A.jV,0,[this,this.ByU]);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Nb._Init.call(this.Ua={I:this},0);C.
Co._Init.call(this.AbO={I:this},0);C.AbR._Init.call(this.Wl={I:this},0);this.__proto__=
C.ANP;var B;this.Dr(C.AO2);this.Ua.H(IU);this.Ua.Aj(true);this.Ua.T(A.aaR(A.acf.
A5k));this.Ua.Bi(false);this.Ua.Ne(65);this.AbO.H(Qa);this.AbO.Aj(true);this.AbO.
T(A.aaR(A.acf.A6g));this.AbO.Bi(true);this.Wl.H(Aab);this.Wl.Aj(true);this.Wl.T(
A.aaR(A.acf.RangeTest));this.Wl.Bi(false);this.Wl.Ne(15);this.J(this.Ua,-1);this.
J(this.AbO,-1);this.J(this.Wl,-1);this.Ua.AR=[B=this.Ua,B.Nh];this.AbO.AR=[this,
this.Bj9];this.Wl.AR=[B=this.Wl,B.Nh];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.Ua._Done();this.AbO._Done();this.Wl._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.Ua._ReInit();this.AbO._ReInit();this.Wl.
_ReInit();this.Ua.T(A.aaR(A.acf.A5k));this.AbO.T(A.aaR(A.acf.A6g));this.Wl.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Ua
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AO2={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO2;this.
Text.R(A.aaR(A.acf.AGt));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGt));},_className:"Application::HeaderDeviceServiceMenu"};C.Nb={M7:
null,Ai:function(Ae){C.AbR.Ai.call(this,Ae);this.M7.L(this.V.AQ);},_Init:function(
aArg){C.AbR._Init.call(this,aArg);A.acg.Ap._Init.call(this.M7={I:this},0);this.__proto__=
C.Nb;this.M7.AZ(0x38);this.M7.H(Br0);this.J(this.M7,0);this.V.Cu(A.aaL(A.fl.Bh));
this.M7.Ax(A.aaL(A.ach.Ajp));},_Done:function(){this.__proto__=C.AbR;this.M7._Done(
);C.AbR._Done.call(this);},_ReInit:function(){C.AbR._ReInit.call(this);this.M7._ReInit(
);this.V.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.AbR._Mark.call(this,D);if((
B=this.M7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANK={Ag_:null,Ahe:null,Ahg:null,Ahc:null,Aj6:null,Ahb:null,Aha:null,Ag$:null
,Aj4:null,Ag9:null,Aj5:null,Ahf:null,Aj7:null,Ahd:null,Aj8:null,Init:function(aArg
){this.Bb(this.Ag_);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.PN._Init.
call(this.Ag_={I:this},0);C.PN._Init.call(this.Ahe={I:this},0);C.PN._Init.call(this.
Ahg={I:this},0);C.PN._Init.call(this.Ahc={I:this},0);C.PN._Init.call(this.Aj6={I:
this},0);C.PN._Init.call(this.Ahb={I:this},0);C.PN._Init.call(this.Aha={I:this},
0);C.PN._Init.call(this.Ag$={I:this},0);C.PN._Init.call(this.Aj4={I:this},0);C.PN.
_Init.call(this.Ag9={I:this},0);C.PN._Init.call(this.Aj5={I:this},0);C.PN._Init.
call(this.Ahf={I:this},0);C.PN._Init.call(this.Aj7={I:this},0);C.PN._Init.call(this.
Ahd={I:this},0);C.PN._Init.call(this.Aj8={I:this},0);this.__proto__=C.ANK;this.Dr(
C.AOX);this.Ag_.H(AIv);this.Ag_.Aj(true);this.Ag_.SF(1);this.Ahe.H(AZN);this.Ahe.
Aj(true);this.Ahe.Bi(true);this.Ahe.SF(2);this.Ahg.H(Ah0);this.Ahg.Aj(true);this.
Ahg.Bi(false);this.Ahg.SF(3);this.Ahc.H(As_);this.Ahc.Aj(true);this.Ahc.Bi(true);
this.Ahc.SF(4);this.Aj6.H(Aym);this.Aj6.Aj(true);this.Aj6.SF(5);this.Ahb.H(Br1);
this.Ahb.Aj(true);this.Ahb.Bi(true);this.Ahb.SF(6);this.Aha.H(As$);this.Aha.Aj(true
);this.Aha.Bi(false);this.Aha.SF(7);this.Ag$.H(Ayu);this.Ag$.Aj(true);this.Ag$.Bi(
true);this.Ag$.SF(8);this.Aj4.H(AZO);this.Aj4.Aj(true);this.Aj4.SF(9);this.Ag9.H(
Aou);this.Ag9.Aj(true);this.Ag9.Bi(true);this.Ag9.SF(10);this.Aj5.H(Br2);this.Aj5.
Aj(true);this.Aj5.SF(11);this.Ahf.H(Br3);this.Ahf.Aj(true);this.Ahf.Bi(true);this.
Ahf.SF(12);this.Aj7.H(Br4);this.Aj7.Aj(true);this.Aj7.SF(13);this.Ahd.H(Br5);this.
Ahd.Aj(true);this.Ahd.Bi(true);this.Ahd.SF(14);this.Aj8.H(Br6);this.Aj8.Aj(true);
this.Aj8.SF(15);this.J(this.Ag_,-1);this.J(this.Ahe,-1);this.J(this.Ahg,-1);this.
J(this.Ahc,-1);this.J(this.Aj6,-1);this.J(this.Ahb,-1);this.J(this.Aha,-1);this.
J(this.Ag$,-1);this.J(this.Aj4,-1);this.J(this.Ag9,-1);this.J(this.Aj5,-1);this.
J(this.Ahf,-1);this.J(this.Aj7,-1);this.J(this.Ahd,-1);this.J(this.Aj8,-1);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ag_._Done();this.Ahe._Done(
);this.Ahg._Done();this.Ahc._Done();this.Aj6._Done();this.Ahb._Done();this.Aha._Done(
);this.Ag$._Done();this.Aj4._Done();this.Ag9._Done();this.Aj5._Done();this.Ahf._Done(
);this.Aj7._Done();this.Ahd._Done();this.Aj8._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.Ag_._ReInit();this.Ahe._ReInit();this.Ahg.
_ReInit();this.Ahc._ReInit();this.Aj6._ReInit();this.Ahb._ReInit();this.Aha._ReInit(
);this.Ag$._ReInit();this.Aj4._ReInit();this.Ag9._ReInit();this.Aj5._ReInit();this.
Ahf._ReInit();this.Aj7._ReInit();this.Ahd._ReInit();this.Aj8._ReInit();},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aha)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aj8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AOX={_Init:function(aArg){C.KO._Init.call(this
,aArg);this.__proto__=C.AOX;this.Text.R(A.aaR(A.acf.A5K));},_ReInit:function(){C.
KO._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5K));},_className:"Application::HeaderDeviceCheck"
};C.PN={DeviceComponentToString:null,Kk:null,AuV:0,Bb7:false,CP:function(){this.
V.R(this.DeviceComponentToString.BR(this.AuV));},Bl:function(aSize){var B;C.Co.Bl.
call(this,aSize);this.Kk.H(A.abM(this.Kk.M,aSize[0]-((B=this.Kk.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kk.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kk.
AEQ(this.V.AQ);if(this.Bb7)this.Kk.AwD(A.jb.E1);else this.Kk.AwD(A.jb.Gh);},SF:function(
E){if(this.AuV===E)return;this.AuV=E;this.T(this.DeviceComponentToString.BR(E));
this.DX(this);},DX:function(G){this.Bb7=A._GetAutoObject(A.Device.Device).AJz(this.
AuV);this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kk._Init.call(this.Kk={I:this
},0);this.__proto__=C.PN;this.V.H(Br7);this.V.A6(0x11);this.Kk.H(Br8);this.J(this.
Kk,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kk._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kk._ReInit();this.CP();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sg={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAA],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALi(this);this.DJ(this);},CC:function(G
){A.pe([this,this.MH],this);},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[
3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},AAA:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6u();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.MH],this);},Ev:function(G){A._GetAutoObject(C.A9).Fy(
);},A3m:function(G){A._GetAutoObject(C.A9).Cd(84);},DJ:function(G){this.N.C1(A.aaL(
A.ach.E2));this.N.CE=[this,this.Ev];this.N.Cs(A.aaL(A.ach.ADy));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Aq$(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Cg=null;this.N.I7.Dk(100);}else{this.N.Cg=[this
,this.AAA];this.N.I7.Dk(255);}this.N.C2(A.aaL(A.ach.Aez));this.N.Cl=[this,this.A3m
];},MH:function(s){this.DJ(s);},ALi:function(G){A.ab5("%s",Br9);},BGm:function(s
){this.ALi(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sg;this.N.Ar(false);this.N.Z(true);this.Dr(C.
Abr);this.Ay.H(It);this.DY.AZ(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CJ);this.Y.H(L1
);this.Y.JR(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.El=[this
,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AN$={Ya:null,X$:null,XY:null
,TH:null,DJ:function(G){C.Sg.DJ.call(this,G);if(this.AV===this.TH){this.N.Cs(null
);this.N.Cg=null;this.N.C2(null);this.N.Cl=null;}},ALi:function(G){if(this.AV===
this.TH)this.Dr(C.AO8);else this.Dr(C.Abr);},Bzb:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AP8);case 1:return A.
aaL(A.ach.AP9);default:A.ab5("%s%s",Br_,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},Bzc:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AP_);case 1:return A.aaL(A.ach.AP$);default:
A.ab5("%s%s",AIA,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ig:function(G){var Cx=(C.Fm.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.
Ya)A._GetAutoObject(C.A9).Cd(66);else if(Cx===this.X$)A._GetAutoObject(C.A9).Cd(
56);else if(Cx===this.XY)A._GetAutoObject(C.A9).Cd(58);else if(Cx===this.TH)A._GetAutoObject(
C.A9).Cd(59);},_Init:function(aArg){C.Sg._Init.call(this,aArg);C.Fm._Init.call(this.
Ya={I:this},0);C.Fm._Init.call(this.X$={I:this},0);C.Fm._Init.call(this.XY={I:this
},0);C.Fm._Init.call(this.TH={I:this},0);this.__proto__=C.AN$;this.Ya.H(P9);this.
Ya.Aj(true);this.Ya.T(A.aaR(A.acf.Aft));this.X$.H(J1);this.X$.Aj(true);this.X$.T(
A.aaR(A.acf.Temperature));this.XY.H(Br$);this.XY.Aj(true);this.XY.T(A.aaR(A.acf.
Rating));this.TH.H(Bsa);this.TH.Aj(true);this.TH.T(A.aaR(A.acf.A7y));this.J(this.
Ya,0);this.J(this.X$,0);this.J(this.XY,0);this.J(this.TH,0);this.Ya.AR=[this,this.
Ig];this.Ya.DB(this.Bzc());this.X$.AR=[this,this.Ig];this.X$.DB(this.Bzb());this.
XY.AR=[this,this.Ig];this.XY.DB(A.aaL(A.ach.AP6));this.TH.AR=[this,this.Ig];this.
TH.DB(A.aaL(A.ach.AP7));},_Done:function(){this.__proto__=C.Sg;this.Ya._Done();this.
X$._Done();this.XY._Done();this.TH._Done();C.Sg._Done.call(this);},_ReInit:function(
){C.Sg._ReInit.call(this);this.Ya._ReInit();this.X$._ReInit();this.XY._ReInit();
this.TH._ReInit();this.Ya.T(A.aaR(A.acf.Aft));this.X$.T(A.aaR(A.acf.Temperature)
);this.XY.T(A.aaR(A.acf.Rating));this.TH.T(A.aaR(A.acf.A7y));},_Mark:function(D){
var B;C.Sg._Mark.call(this,D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOa={VJ:null,X0:null,Yb:null,ALi:function(G){this.Dr(C.Avq);},Bzf:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQK
);case 1:return A.aaL(A.ach.AQL);default:A.ab5("%s%s",AIA,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ig:function(G){var Cx=(C.Fm.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VJ)A._GetAutoObject(C.A9).Cd(68);else if(Cx===
this.Yb)A._GetAutoObject(C.A9).Cd(57);else if(Cx===this.X0)A._GetAutoObject(C.A9
).Cd(67);},Bze:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.APV);case 1:return A.aaL(A.ach.APW);default:A.ab5("%s%s",AIA
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},Bzg:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQM
);case 1:return A.aaL(A.ach.AQN);default:A.ab5("%s%s",AIA,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sg._Init.call(
this,aArg);C.Fm._Init.call(this.VJ={I:this},0);C.Fm._Init.call(this.X0={I:this},
0);C.Fm._Init.call(this.Yb={I:this},0);this.__proto__=C.AOa;this.VJ.H(P9);this.VJ.
Aj(true);this.VJ.T(A.aaR(A.acf.A$J));this.X0.H(AZR);this.X0.Aj(true);this.X0.T(A.
aaR(A.acf.A5a));this.Yb.H(N$);this.Yb.Aj(true);this.Yb.T(A.aaR(A.acf.A$M));this.
J(this.VJ,0);this.J(this.X0,0);this.J(this.Yb,0);this.VJ.AR=[this,this.Ig];this.
VJ.DB(this.Bzf());this.VJ.Ab2(A.aaL(A.ach.NT));this.X0.AR=[this,this.Ig];this.X0.
DB(this.Bze());this.Yb.AR=[this,this.Ig];this.Yb.DB(this.Bzg());},_Done:function(
){this.__proto__=C.Sg;this.VJ._Done();this.X0._Done();this.Yb._Done();C.Sg._Done.
call(this);},_ReInit:function(){C.Sg._ReInit.call(this);this.VJ._ReInit();this.X0.
_ReInit();this.Yb._ReInit();this.VJ.T(A.aaR(A.acf.A$J));this.X0.T(A.aaR(A.acf.A5a
));this.Yb.T(A.aaR(A.acf.A$M));},_Mark:function(D){var B;C.Sg._Mark.call(this,D);
if((B=this.VJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOd={Bdy:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZN(0));},_Init:function(aArg){C.AqH._Init.call(this,aArg);this.
__proto__=C.AOd;this.Ae8(A.aaR(A.acf.A7T));},_ReInit:function(){C.AqH._ReInit.call(
this);this.Ae8(A.aaR(A.acf.A7T));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AN8={Aih:null,Abu:null,UK:null,AaV:null,Pl:null,Ajm:null,Agx:null,Ajn:null,Agy:
null,Ay:null,AaN:null,Ada:0,Apr:0,DE:function(G){switch(this.Cq.CO){case 4:{if(this.
I4.Fo())return;var Qx=this.Y.Br[1]+80;this.Y.Ga([this.Y.Br[0],Qx]);this.Y.Vw(null
,null);}break;case 5:{if(this.I4.Fo())return;var Qx=this.Y.Br[1]-80;this.Y.Ga([this.
Y.Br[0],Qx]);this.Y.Vw(null,null);}break;default:C.Fz.DE.call(this,G);}},Ap2:function(
L2,AcV){if(!L2)return;var Fw=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(
A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcV,true);Fw.CW(HV);var Ac7=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac7.Initialize(8,2,0,true);Fw.CW(Ac7
);L2.Bk(Fw);},Aiv:function(G){if(A._GetAutoObject(A.Device.Helper).W.Ara()){this.
Aih.Os(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azc=this.By$(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaN.Set(Azc,this.AaN.Get(Azc)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Ada++;this.Apr=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fz.Aiv.call(
this,G);},Aan:function(G){if(this.Ada>1)A._GetAutoObject(A.Device.Device).A5(56,
true,this.Ada.toFixed(),0,null);if(this.Ada===1)A._GetAutoObject(A.Device.Device
).A5(53,true,this.Apr.toFixed(),0,null);if(this.Aih.AY>0)this.UK.T(((((((A._GetAutoObject(
A.Device.Converter).AxY(this.Aih.AjL()|0,1)+Ayx)+A._GetAutoObject(A.Device.Converter
).AxY(this.Aih.AqS()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).Af0())+Ayy)+this.Aih.AY.
toFixed())+Ob);else this.UK.T(A.aaR(A.acf.Unknown));var RL=this.AaN.AmS();var O;
for(O=0;O<this.AaN.MD;O++){var Bf=this.Bzu(O);if(!!Bf){var CB=this.AaN.Get(O);Bf.
BlJ(CB);if(!RL)Bf.A95(0);else Bf.A95(Math.round((CB*100)/RL)|0);Bf.Bnp(this.Bzt(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adf=false;if(this.Aih.AY>0)
Adf=true;this.I4.Z(!Adf);C.Fz.Aan.call(this,G);},Adm:function(G){this.Aih.Yc();this.
AaN.E5();this.Ada=0;this.Apr=0;C.Fz.Adm.call(this,G);},Bzu:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Pl;break;case 1:Bf=this.Ajm;break;case 2:Bf=this.
Agx;break;case 3:Bf=this.Ajn;break;case 4:Bf=this.Agy;break;default:throw new Error(
Ayz+aIndex.toFixed());}return Bf;},Bzt:function(aIndex,AoF){var B;var Tr=A.jV;switch(
AoF){case 0:{switch(aIndex){case 0:Tr=Bsb;break;case 1:Tr=Bsc;break;case 2:Tr=Bsd;
break;case 3:Tr=Bse;break;case 4:Tr=Bsf;break;default:throw new Error(Ayz+aIndex.
toFixed());}Tr=Tr+(CQ+A.aaR(A.acf.Az4));}break;case 1:{switch(aIndex){case 0:Tr=
Bsg;break;case 1:Tr=Bsh;break;case 2:Tr=Bsi;break;case 3:Tr=Bsj;break;case 4:Tr=
Bsk;break;default:throw new Error(Ayz+aIndex.toFixed());}Tr=Tr+(CQ+A.aaR(A.acf.A7f
));}break;default:A.ab5("%s%e",Bae,AoF);}return Tr;},Bza:function(AIW,AoF){var Ac8=
0;switch(AoF){case 0:switch(AIW){case 0:Ac8=35000;break;case 1:Ac8=40000;break;case
2:Ac8=45000;break;case 3:Ac8=50000;break;case 4:Ac8=2147483647;break;default:throw new
Error(Ayz+AIW.toFixed());}break;case 1:switch(AIW){case 0:Ac8=36287;break;case 1:
Ac8=40823;break;case 2:Ac8=45359;break;case 3:Ac8=49895;break;case 4:Ac8=2147483647;
break;default:throw new Error(Ayz+AIW.toFixed());}break;default:A.ab5("%s%e",Bae
,AoF);}return Ac8;},By$:function(A_,AoF){var Azc=0;var O;for(O=0;O<this.AaN.MD;O++
)if(A_<this.Bza(O,AoF)){Azc=O;break;}return Azc;},Fj:function(G){var B;this.Ay.Mw((
B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[
1]);},_Init:function(aArg){C.Fz._Init.call(this,aArg);C.Agv._Init.call(this.Abu={
I:this},0);C.IF._Init.call(this.UK={I:this},0);C.AaV._Init.call(this.AaV={I:this
},0);C.Pl._Init.call(this.Pl={I:this},0);C.Pl._Init.call(this.Ajm={I:this},0);C.
Pl._Init.call(this.Agx={I:this},0);C.Pl._Init.call(this.Ajn={I:this},0);C.Pl._Init.
call(this.Agy={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaN={I:this},0);this.__proto__=C.AN8;this.Dr(C.Avq);this.Akv(A.aaR(
A.acf.A57));this.Ae8(A.aaR(A.acf.A7M));this.Abu.H(AIv);this.Abu.Aj(true);this.Abu.
T(A.aaR(A.acf.A41));this.Abu.Bi(false);this.Abu.Kt(5);this.UK.H(AZN);this.UK.Aj(
true);this.UK.T(A.jV);this.UK.Bi(true);this.UK.Kt(5);this.AaV.H(Ah0);this.AaV.Aj(
true);this.Pl.H(As_);this.Pl.Aj(true);this.Pl.Bi(true);this.Ajm.H(As$);this.Ajm.
Aj(true);this.Agx.H(Ayu);this.Agx.Aj(true);this.Agx.Bi(true);this.Ajn.H(AZO);this.
Ajn.Aj(true);this.Agy.H(Aou);this.Agy.Aj(true);this.Agy.Bi(true);this.Ay.H(It);this.
AaN.Zv(5);this.J(this.Abu,-1);this.J(this.UK,-1);this.J(this.AaV,-1);this.J(this.
Pl,-1);this.J(this.Ajm,-1);this.J(this.Agx,-1);this.J(this.Ajn,-1);this.J(this.Agy
,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fj];this.Aih=A._NewObject(C.AvN,0);
this.UK.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Fz;this.Abu._Done(
);this.UK._Done();this.AaV._Done();this.Pl._Done();this.Ajm._Done();this.Agx._Done(
);this.Ajn._Done();this.Agy._Done();this.Ay._Done();this.AaN._Done();C.Fz._Done.
call(this);},_ReInit:function(){C.Fz._ReInit.call(this);this.Abu._ReInit();this.
UK._ReInit();this.AaV._ReInit();this.Pl._ReInit();this.Ajm._ReInit();this.Agx._ReInit(
);this.Ajn._ReInit();this.Agy._ReInit();this.Ay._ReInit();this.AaN._ReInit();this.
Akv(A.aaR(A.acf.A57));this.Ae8(A.aaR(A.acf.A7M));this.Abu.T(A.aaR(A.acf.A41));this.
UK.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fz._Mark.call(this,D);if((B=this.
Aih)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaV={H_:null,Gs:null
,Bl:function(aSize){C.IF.Bl.call(this,aSize);this.H_.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gs.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IF.Ai.call(this,Ae);this.H_.L(this.V.AQ);this.Gs.L(this.V.AQ);},_Init:
function(aArg){C.IF._Init.call(this,aArg);A.acg.Text._Init.call(this.H_={I:this}
,0);A.acg.Text._Init.call(this.Gs={I:this},0);this.__proto__=C.AaV;this.T(A.aaR(
A.acf.AG6));this.H_.H(Bsl);this.H_.KR(true);this.H_.R(A.aaR(A.acf.Aqu));this.H_.
L(A.jb.Text);this.Gs.H(Baf);this.Gs.R(Aad);this.Gs.L(A.jb.Text);this.J(this.H_,0
);this.J(this.Gs,0);this.V.S(A.aaL(A.fl.Il));this.H_.S(A.aaL(A.fl.Il));this.Gs.S(
A.aaL(A.fl.Ko));},_Done:function(){this.__proto__=C.IF;this.H_._Done();this.Gs._Done(
);C.IF._Done.call(this);},_ReInit:function(){C.IF._ReInit.call(this);this.H_._ReInit(
);this.Gs._ReInit();this.T(A.aaR(A.acf.AG6));this.H_.R(A.aaR(A.acf.Aqu));this.V.
S(A.aaL(A.fl.Il));this.H_.S(A.aaL(A.fl.Il));this.Gs.S(A.aaL(A.fl.Ko));},_Mark:function(
D){var B;C.IF._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pl={AP:null,A$:null,P0:null,H_:null,Gs:null,A$L:A.jV,Aqu:0,A_E:0,Bl:function(
aSize){C.IF.Bl.call(this,aSize);this.P0.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P0.M[2]-1,0,this.P0.M[2]+1,aSize[1]]);this.H_.H([this.P0.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A$.H([this.H_.M[2]-1,0,this.H_.M[2]+1,aSize[
1]]);this.Gs.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IF.Ai.call(
this,Ae);this.P0.L(this.V.AQ);this.H_.L(this.V.AQ);this.Gs.L(this.V.AQ);},Bnp:function(
E){if(this.A$L===E)return;this.A$L=E;this.P0.R(E);},BlJ:function(E){if(this.Aqu===
E)return;this.Aqu=E;this.H_.R(E.toFixed());},A95:function(E){if(this.A_E===E)return;
this.A_E=E;this.Gs.R(E.toFixed()+Xa);},_Init:function(aArg){C.IF._Init.call(this
,aArg);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.P0={I:this},0);A.acg.Text._Init.call(this.H_={I:
this},0);A.acg.Text._Init.call(this.Gs={I:this},0);this.__proto__=C.Pl;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.P0.H(Bsm);this.P0.R(A.aaR(A.acf.AG6));this.P0.L(
A.jb.Text);this.H_.R(UZ);this.H_.L(A.jb.Text);this.Gs.R(Bsn);this.Gs.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A$,0);this.J(this.P0,0);this.J(this.H_,0);this.J(
this.Gs,0);this.P0.S(A.aaL(A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gs.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IF;this.AP._Done();this.A$._Done();this.
P0._Done();this.H_._Done();this.Gs._Done();C.IF._Done.call(this);},_ReInit:function(
){C.IF._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.P0._ReInit();
this.H_._ReInit();this.Gs._ReInit();this.P0.R(A.aaR(A.acf.AG6));this.P0.S(A.aaL(
A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gs.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IF._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMu={AKJ:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mq();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amr._Init.call(this,aArg);this.__proto__=
C.AMu;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARm={R2:null,
R8:null,R1:null,R5:null,Pn:null,R4:null,ALf:function(G){A.pe([this,this.BCn],this
);A.pe([this,this.BCb],this);A.pe([this,this.BB9],this);A.pe([this,this.A4e],this
);A.pe([this,this.BCe],this);A.pe([this,this.BCc],this);},Ig:function(G){var Cx=(
C.QV.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.R8)A._GetAutoObject(C.A9
).Cd(20);else if(Cx===this.Pn)A._GetAutoObject(C.A9).Cd(14);else if(Cx===this.R2
)A._GetAutoObject(C.A9).Cd(12);else if(Cx===this.R5)A._GetAutoObject(C.A9).Cd(43
);else if(Cx===this.R1)A._GetAutoObject(C.A9).Cd(51);else if(Cx===this.R4)A._GetAutoObject(
C.A9).Cd(61);},BCb:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mq();var
Azj=A._NewObject(A.Device.BoolFilterCriterion,0);Azj.Initialize(9,0,true,true);Be.
CW(Azj);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pn.Zt(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BCn:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mq();var ABr=A._NewObject(A.Device.BoolFilterCriterion,0);ABr.Initialize(
12,0,true,true);Be.CW(ABr);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R8.Zt(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BB9:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mq();var Ay1=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay1.Initialize(8,0,true,true);Be.CW(Ay1);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R2.Zt(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},A4e:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6o(A._GetAutoObject(A.Device.Device
).ABx);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R1.Zt(A._GetAutoObject(A.
Device.Device).An.B9().toFixed());},BCe:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6x();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R5.Zt(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BCc:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACR();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R4.Zt(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},_Init:function(aArg){C.T7._Init.call(this,
aArg);C.QV._Init.call(this.R2={I:this},0);C.QV._Init.call(this.R8={I:this},0);C.
QV._Init.call(this.R1={I:this},0);C.QV._Init.call(this.R5={I:this},0);C.QV._Init.
call(this.Pn={I:this},0);C.QV._Init.call(this.R4={I:this},0);this.__proto__=C.ARm;
this.R2.H(P9);this.R2.Aj(true);this.R2.T(A.aaR(A.acf.Alarm));this.R2.AbZ(true);this.
R8.H(AZR);this.R8.Aj(true);this.R8.T(A.aaR(A.acf.Ar_));this.R8.AbZ(true);this.R1.
H(N$);this.R1.Aj(true);this.R1.T(A.aaR(A.acf.ActionList));this.R1.AbZ(true);this.
R5.H(P_);this.R5.Aj(true);this.R5.T(A.aaR(A.acf.AOA));this.R5.AbZ(true);this.Pn.
H(S9);this.Pn.Ar(false);this.Pn.Aj(false);this.Pn.Z(false);this.Pn.T(A.aaR(A.acf.
ACa));this.Pn.AbZ(true);this.R4.H(UQ);this.R4.Aj(true);this.R4.T(A.aaR(A.acf.A53
));this.R4.AbZ(true);this.J(this.R2,-1);this.J(this.R8,-1);this.J(this.R1,-1);this.
J(this.R5,-1);this.J(this.Pn,-1);this.J(this.R4,-1);this.R2.AR=[this,this.AcS];this.
R2.DB(A.aaL(A.ach.ADo));this.R2.Ab2(A.aaL(A.ach.NT));this.R8.AR=[this,this.AcS];
this.R8.DB(A.aaL(A.ach.AQJ));this.R8.Ab2(A.aaL(A.ach.NT));this.R1.AR=[this,this.
AcS];this.R1.DB(A.aaL(A.ach.APG));this.R1.Ab2(A.aaL(A.ach.NT));this.R5.AR=[this,
this.AcS];this.R5.DB(A.aaL(A.ach.AQb));this.R5.Ab2(A.aaL(A.ach.NT));this.Pn.AR=[
this,this.AcS];this.Pn.DB(A.aaL(A.ach.ADo));this.Pn.Ab2(A.aaL(A.ach.NT));this.R4.
AR=[this,this.AcS];this.R4.DB(A.aaL(A.ach.AP3));this.R4.Ab2(A.aaL(A.ach.NT));},_Done:
function(){this.__proto__=C.T7;this.R2._Done();this.R8._Done();this.R1._Done();this.
R5._Done();this.Pn._Done();this.R4._Done();C.T7._Done.call(this);},_ReInit:function(
){C.T7._ReInit.call(this);this.R2._ReInit();this.R8._ReInit();this.R1._ReInit();
this.R5._ReInit();this.Pn._ReInit();this.R4._ReInit();this.R2.T(A.aaR(A.acf.Alarm
));this.R8.T(A.aaR(A.acf.Ar_));this.R1.T(A.aaR(A.acf.ActionList));this.R5.T(A.aaR(
A.acf.AOA));this.Pn.T(A.aaR(A.acf.ACa));this.R4.T(A.aaR(A.acf.A53));},_Mark:function(
D){var B;C.T7._Mark.call(this,D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARl={R9:null,VI:null,R6:null,R3:null,R7:null,ALf:function(G){A.pe([this,this.
BB_],this);A.pe([this,this.BCi],this);A.pe([this,this.BCj],this);A.pe([this,this.
BCo],this);A.pe([this,this.BCk],this);},Ig:function(G){var Cx=(C.QV.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VI)A._GetAutoObject(C.A9).Cd(90);if(Cx===this.
R3)A._GetAutoObject(C.A9).Cd(74);if(Cx===this.R6)A._GetAutoObject(C.A9).Cd(71);if(
Cx===this.R7)A._GetAutoObject(C.A9).Cd(46);if(Cx===this.R9)A._GetAutoObject(C.A9
).Cd(85);},BCj:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACU();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.R7.Zt(A._GetAutoObject(A.Device.Device).An.B9().
toFixed());},BCo:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6I(Math.max(
A._GetAutoObject(A.Device.Device).AvV,A._GetAutoObject(A.Device.Helper).A6A(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R9.Zt(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCi:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A6D();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.R6.Zt(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BB_:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOB();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R3.Zt(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCk:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avm();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VI.Zt(A._GetAutoObject(A.Device.Device).An.B9().toFixed()
);},_Init:function(aArg){C.T7._Init.call(this,aArg);C.QV._Init.call(this.R9={I:this
},0);C.QV._Init.call(this.VI={I:this},0);C.QV._Init.call(this.R6={I:this},0);C.QV.
_Init.call(this.R3={I:this},0);C.QV._Init.call(this.R7={I:this},0);this.__proto__=
C.ARl;this.R9.H(Bso);this.R9.Aj(true);this.R9.T(A.aaR(A.acf.A7E));this.R9.AbZ(true
);this.VI.H(Bsp);this.VI.Aj(true);this.VI.T(A.aaR(A.acf.AF8));this.R6.H(Bsq);this.
R6.Aj(true);this.R6.T(A.aaR(A.acf.A7G));this.R6.AbZ(true);this.R3.H(Bsr);this.R3.
Aj(true);this.R3.T(A.aaR(A.acf.ABR));this.R3.AbZ(true);this.R7.H(Bss);this.R7.Aj(
true);this.R7.T(A.aaR(A.acf.ARZ));this.R7.AbZ(true);this.J(this.R9,-1);this.J(this.
VI,-1);this.J(this.R6,-1);this.J(this.R3,-1);this.J(this.R7,-1);this.R9.AR=[this
,this.AcS];this.R9.DB(A.aaL(A.ach.AQq));this.R9.Ab2(A.aaL(A.ach.NT));this.VI.AR=[
this,this.AcS];this.VI.DB(A.aaL(A.ach.ADG));this.R6.AR=[this,this.AcS];this.R6.DB(
A.aaL(A.ach.AQs));this.R6.Ab2(A.aaL(A.ach.NT));this.R3.AR=[this,this.AcS];this.R3.
DB(A.aaL(A.ach.APY));this.R3.Ab2(A.aaL(A.ach.NT));this.R7.AR=[this,this.AcS];this.
R7.DB(A.aaL(A.ach.AQu));this.R7.Ab2(A.aaL(A.ach.NT));},_Done:function(){this.__proto__=
C.T7;this.R9._Done();this.VI._Done();this.R6._Done();this.R3._Done();this.R7._Done(
);C.T7._Done.call(this);},_ReInit:function(){C.T7._ReInit.call(this);this.R9._ReInit(
);this.VI._ReInit();this.R6._ReInit();this.R3._ReInit();this.R7._ReInit();this.R9.
T(A.aaR(A.acf.A7E));this.VI.T(A.aaR(A.acf.AF8));this.R6.T(A.aaR(A.acf.A7G));this.
R3.T(A.aaR(A.acf.ABR));this.R7.T(A.aaR(A.acf.ARZ));},_Mark:function(D){var B;C.T7.
_Mark.call(this,D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ARX={Wx:function(G){this.Agt(
);this.AL3();this.A4D(A.aaR(A.acf.A7i),[this,this.Bm7],131072);this.A4D(A.aaR(A.
acf.A7h),[this,this.Bm6],16384);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4
).NC(A.aaR(A.acf.ARg)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DE:function(G){},Abp:function(){return C.Aqq;},Abq:function(){return C.AqX;}
,Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A6D());},HO:function(G){var F;C.QB.HO.call(this,G);if(this.Ake()===false
){if(!!this.FK&&((F=this.FK,F[1].call(F[0]))===16)){this.N.Cs(A.aaL(A.ach.AQC));
this.N.Cg=[this,this.A51];}else{this.N.Cs(A.aaL(A.ach.AQk));this.N.Cg=[this,this.
A5Y];}this.N.FC(A.jV);}this.N.OO(false);this.N.OP(false);},Agf:function(){A._GetAutoObject(
C.A9).Cd(72);},Bm6:function(G){this.AGv(16384);},Bm7:function(G){this.AGv(131072
);},_Init:function(aArg){C.QB._Init.call(this,aArg);this.__proto__=C.ARX;this.Dr(
C.APk);this.Dj(A.aaR(A.acf.A7K));this.AS5(A._GetAutoObject(C.Av2));},_ReInit:function(
){C.QB._ReInit.call(this);this.Dj(A.aaR(A.acf.A7K));},_className:"Application::NoNaisIdListScreen"
};C.ARW={_Init:function(aArg){C.I3._Init.call(this,aArg);this.__proto__=C.ARW;this.
Mt.Ar(false);this.Mt.Aj(false);this.Mt.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APk={DX:function(G){C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.
Converter).AdX(10));},_Init:function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=
C.APk;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkL={Bfu:false,CP:
function(){A.pe([this,this.AyK],this);},DE:function(G){},CC:function(G){C.GZ.CC.
call(this,G);if(this.Bfu&&(A._GetAutoObject(A.Device.Device).PV>0))A.pe([this,this.
AID],this);},Agc:function(G){this.A5X(this);},Agf:function(){A._GetAutoObject(C.
A9).Cd(73);},AR5:function(G){throw new Error(Aov);},Baz:function(s){this.AR5(s);
},AR6:function(G){throw new Error(Aov);},BaA:function(s){this.AR6(s);},AR$:function(
G){throw new Error(Aov);},AID:function(s){this.AR$(s);},BeG:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7)){this.
Bfu=true;A._GetAutoObject(C.A9).Cd(76);}},Age:function(G){var B;var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([this,this.
XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);},XA:function(G){var B;if(
A._GetAutoObject(A.Device.Device).P1.ZX===3){A._GetAutoObject(A.Device.Device).A5(
74,false,A.jV,0,[this,this.Age]);A.z$([this,this.XA],[B=A._GetAutoObject(A.Device.
Device),B.Ww,B.Xc],0);A.pe([this,this.AID],this);}},AJy:function(){throw new Error(
Aov);},A70:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A5W(this);},
BnE:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.BhU(this);},_Init:function(
aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.AkL;this.Dj(A.aaR(A.acf.A7R));
},_ReInit:function(){C.GZ._ReInit.call(this);this.Dj(A.aaR(A.acf.A7R));this.CP();
},_className:"Application::RegistrationsListScreen"};C.AT$={_Init:function(aArg){
C.I3._Init.call(this,aArg);this.__proto__=C.AT$;},_className:"Application::RegistrationsListFilterScreen"
};C.Aes={_Init:function(aArg){C.Yo._Init.call(this,aArg);this.__proto__=C.Aes;this.
Text.H(Bst);this.Text.R(A.jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"
};C.ABY={Kc:0,AP:null,A$:null,Ea:null,IK:null,SX:null,Gy:null,Mf:0,K9:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IK.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A$.H([this.IK.M[2]-1,0,this.IK.M[2]+1,aSize[
1]]);this.SX.H([this.IK.M[2],0,this.IK.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.SX.M[2]-1,0,this.SX.M[2]+1,aSize[1]]);this.Gy.H([this.SX.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IK.L(this.V.AQ);this.
Gy.L(this.V.AQ);this.SX.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj3(this.
K9)){this.V.S(A.aaL(A.fl.H1));this.T(Bag);this.SX.R(Ro);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mf.toFixed());this.SX.R(A._GetAutoObject(A.Device.Helper).Si(this.
Kc,0,5).toFixed());}},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX
){this.Mf=this.AX.CF(Ad,1);this.K9=this.AX.AOP(Ad,34);var AtN=this.AX.AOH(Ad,7);
this.Kc=this.AX.KN(Ad,26);var Ay8=this.AX.Hu(Ad,4);var AfN=A._GetAutoObject(A.Device.
Helper).L9(Ay8,A._GetAutoObject(A.Device.Helper).Dv());this.IK.Ax(A._GetAutoObject(
A.Device.Converter).AmP(AtN));if(AfN<100)this.Gy.R((AfN.toFixed()+CQ)+A.aaR(A.acf.
ALS));else this.Gy.R(A._GetAutoObject(A.acj.KK).ACN(Ay8,A._GetAutoObject(A.Device.
Helper).Dv(),AIh));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A$={I:this},0);
A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IK={I:this},0);
A.acg.Text._Init.call(this.SX={I:this},0);C.CH._Init.call(this.Gy={I:this},0);this.
__proto__=C.ABY;this.AP.H(Aoo);this.AP.L(A.jb.Bc);this.A$.H(Aop);this.A$.L(A.jb.
Bc);this.Ea.H(AZS);this.Ea.L(A.jb.Bc);this.IK.H(Bah);this.IK.L(A.jb.Text);this.SX.
H(Ayr);this.Gy.H(AZT);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.IK,0);this.J(this.SX,0);this.J(this.Gy,0);this.SX.S(A.aaL(A.fl.Af));this.
Gy.S(A.aaL(A.fl.Af));this.Gy.A2(A.aaL(A.fl.Ak));this.Gy.Cu(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done(
);this.Ea._Done();this.IK._Done();this.SX._Done();this.Gy._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.A$._ReInit(
);this.Ea._ReInit();this.IK._ReInit();this.SX._ReInit();this.Gy._ReInit();this.SX.
S(A.aaL(A.fl.Af));this.Gy.S(A.aaL(A.fl.Af));this.Gy.A2(A.aaL(A.fl.Ak));this.Gy.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADe={Aj0:
null,Pz:null,I6:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Aj0={I:this},0);A.acg.Ap._Init.call(this.Pz={I:this},0);A.acg.Ap._Init.
call(this.I6={I:this},0);this.__proto__=C.ADe;this.Aj0.H(Bsu);this.Aj0.L(A.jb.Text
);this.Pz.H(Bsv);this.Pz.L(A.jb.Text);this.I6.H(A$_);this.I6.L(A.jb.Text);this.J(
this.Aj0,0);this.J(this.Pz,0);this.J(this.I6,0);this.Aj0.Ax(A.aaL(A.ach.ADC));this.
Pz.Ax(A.aaL(A.ach.AvB));this.I6.Ax(A.aaL(A.ach.Avw));},_Done:function(){this.__proto__=
C.Dc;this.Aj0._Done();this.Pz._Done();this.I6._Done();C.Dc._Done.call(this);},_ReInit:
function(){C.Dc._ReInit.call(this);this.Aj0._ReInit();this.Pz._ReInit();this.I6.
_ReInit();},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.Aj0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APm={IR:null,AgY:null,HP:null,Bc:null,MB:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8M,B.A9_],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
Wv,B.JS],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.Arw,B.SI
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},De:function(E){C.BQ.De.call(this,E);this.IR.L(E);this.AgY.L(E);this.
HP.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HP.R(A.aaR(A.acf.Afb));else this.HP.R(((A.aaR(A.acf.GM)+A.aaR(A.acf.
Colon))+CQ)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
AqU()){this.AwX(((A._GetAutoObject(A.Device.Helper).W.CL+1).toFixed()+A$W)+A._GetAutoObject(
A.Device.Device).An.B9().toFixed());this.JS(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nf(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.AwX(A$X);this.JS(2);
this.OnSetAnimalId(-1);this.Nf(0);}},JS:function(E){if(this.Gender===E)return;this.
Gender=E;this.AgY.Ax(A._GetAutoObject(A.Device.Converter).AmP(E));},AwX:function(
E){if(this.MB===E)return;this.MB=E;this.IR.R(E);},Nf:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj3(E))this.HP.
Z(false);else this.HP.Z(true);},_Init:function(aArg){C.BQ._Init.call(this,aArg);
A.acg.Text._Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(this.AgY={I:this},
0);A.acg.Text._Init.call(this.HP={I:this},0);A.acg.C5._Init.call(this.Bc={I:this
},0);this.__proto__=C.APm;this.IR.H(A$Y);this.IR.Hm(2);this.IR.KR(true);this.IR.
A6(0x12);this.IR.R(A$Z);this.AgY.H(Bsw);this.HP.H(Bsx);this.HP.A6(0x11);this.HP.
R(A.aaR(A.acf.Afb));this.Bc.DC(Ayv);this.Bc.DM(Atb);this.Bc.L(A.jb.Bc);this.J(this.
IR,0);this.J(this.AgY,0);this.J(this.HP,0);this.J(this.Bc,0);this.IR.S(A.aaL(A.fl.
Ak));this.AgY.Ax(A._GetAutoObject(A.Device.Converter).AmP(2));this.HP.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.IR._Done();this.
AgY._Done();this.HP._Done();this.Bc._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.IR._ReInit();this.AgY._ReInit();this.HP._ReInit();
this.Bc._ReInit();this.HP.R(A.aaR(A.acf.Afb));this.IR.S(A.aaL(A.fl.Ak));this.HP.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.IR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.AaY={EaseOfDeliveryToString:
null,AgP:null,Cf:function(G){C.NE.Cf.call(this,G);var AJR=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.Kv(this.EaseOfDeliveryToString.Lu(AJR));this.G2.R(
this.AgP.Aei(AJR).toFixed());},De:function(E){C.NE.De.call(this,E);this.G2.L(E);
},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgP._Init.call(this.
AgP={I:this},0);this.__proto__=C.AaY;this.T(A.aaR(A.acf.AgG));},_Done:function(){
this.__proto__=C.NE;this.EaseOfDeliveryToString._Done();this.AgP._Done();C.NE._Done.
call(this);},_ReInit:function(){C.NE._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgP._ReInit();this.T(A.aaR(A.acf.AgG));},_Mark:function(D){var B;
C.NE._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XP={WhereAboutsToString:null,KX:null,Cf:function(G){C.NE.Cf.call(this,G);var
K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kv(this.WhereAboutsToString.
Lu(K9));this.G2.R(this.KX.Aei(K9).toFixed());},De:function(E){C.NE.De.call(this,
E);this.G2.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KX._Init.call(this.KX={
I:this},0);this.__proto__=C.XP;this.T(A.aaR(A.acf.Jg));},_Done:function(){this.__proto__=
C.NE;this.WhereAboutsToString._Done();this.KX._Done();C.NE._Done.call(this);},_ReInit:
function(){C.NE._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KX._ReInit(
);this.T(A.aaR(A.acf.Jg));},_Mark:function(D){var B;C.NE._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RZ={Cq:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D9.CC.
call(this,G);A.zX([this,this.AfD],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.
OnSetId],0);A.zX([this,this.AfD],[B=A._GetAutoObject(A.Device.Helper),B.U0,B.U3]
,0);A.pe([this,this.AfD],this);},E4:function(G){var B;C.D9.E4.call(this,G);A.z$([
this,this.AfD],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId],0);A.z$([this
,this.AfD],[B=A._GetAutoObject(A.Device.Helper),B.U0,B.U3],0);},Fj:function(G){var
B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.
Mx(-this.Y.Br[1]);},DE:function(G){switch(this.Cq.CO){case 6:case 7:this.Cq.NH=true;
break;case 4:this.BfQ(4);break;case 5:this.BfQ(5);break;default:;}},BfQ:function(
Gz){var B;switch(Gz){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Db(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Db(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Ga([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.Ga([this.Y.Br[0],CD]);}break;default:throw new Error(
Bsy);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I2.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Cf(this
);}X=X.Ah;}},AfD:function(s){this.GH(s);},MO:function(G){var B;this.Y.Vw(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.RZ;this.Cq.Filter=147;this.Y.H(UX);this.Y.JR(1);this.Ay.H(AsU
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,
this.DE];this.Y.El=[this,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cq._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XQ={AaS:null,
XM:null,AaT:null,XN:null,AaY:null,XP:null,_Init:function(aArg){C.RZ._Init.call(this
,aArg);C.AaS._Init.call(this.AaS={I:this},0);C.XM._Init.call(this.XM={I:this},0);
C.AaT._Init.call(this.AaT={I:this},0);C.XN._Init.call(this.XN={I:this},0);C.AaY.
_Init.call(this.AaY={I:this},0);C.XP._Init.call(this.XP={I:this},0);this.__proto__=
C.XQ;this.AaS.H(BD);this.AaS.Aj(true);this.XM.H(IU);this.XM.Aj(true);this.XM.Bi(
true);this.AaT.H(Qa);this.AaT.Aj(true);this.XN.H(Aab);this.XN.Aj(true);this.XN.Bi(
true);this.AaY.H(Alc);this.AaY.Aj(true);this.XP.H(Aon);this.XP.Aj(true);this.XP.
Bi(true);this.J(this.AaS,0);this.J(this.XM,0);this.J(this.AaT,0);this.J(this.XN,
0);this.J(this.AaY,0);this.J(this.XP,0);},_Done:function(){this.__proto__=C.RZ;this.
AaS._Done();this.XM._Done();this.AaT._Done();this.XN._Done();this.AaY._Done();this.
XP._Done();C.RZ._Done.call(this);},_ReInit:function(){C.RZ._ReInit.call(this);this.
AaS._ReInit();this.XM._ReInit();this.AaT._ReInit();this.XN._ReInit();this.AaY._ReInit(
);this.XP._ReInit();},_Mark:function(D){var B;C.RZ._Mark.call(this,D);if((B=this.
AaS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XM)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XN)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AaY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XN={
BreedToString:null,G2:null,M0:null,Cf:function(G){C.IE.Cf.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BR(Bv));this.G2.
R(this.M0.Aei(Bv).toFixed());},De:function(E){C.IE.De.call(this,E);this.G2.L(E);
},_Init:function(aArg){C.IE._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G2={I:this},0);A.Device.
M0._Init.call(this.M0={I:this},0);this.__proto__=C.XN;this.BS.H(Bsz);this.G2.H(BsA
);this.G2.Hm(5);this.G2.A6(0x14);this.G2.R(BsB);this.G2.L(A.jb.Text);this.J(this.
G2,0);this.Hv.Ax(A.aaL(A.ach.ADt));this.G2.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IE;this.BreedToString._Done();this.G2._Done();this.M0._Done();C.
IE._Done.call(this);},_ReInit:function(){C.IE._ReInit.call(this);this.BreedToString.
_ReInit();this.G2._ReInit();this.M0._ReInit();this.G2.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IE._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaT={
Cf:function(G){C.IE.Cf.call(this,G);var AAe=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAe>0)this.T(A._GetAutoObject(A.Device.Converter).Rh(AAe));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IE._Init.call(this,aArg);this.__proto__=
C.AaT;this.Hv.Ax(A.aaL(A.ach.AP4));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XM={Yt:null,Cf:function(G){C.IE.Cf.call(this,G);var O_=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfS=A._GetAutoObject(A.Device.Helper).W.BirthType;if(O_>
0)this.T(A._GetAutoObject(A.acj.KK).AjJ(O_));else this.T(A.aaR(A.acf.Unknown));var
Ay_=A.aaL(A.aci.TL);switch(AfS){case 0:Ay_=A.aaL(A.ach.ADq);break;case 1:{Ay_=A.
aaL(A.ach.Avx);this.Yt.Cv(0);}break;case 2:{Ay_=A.aaL(A.ach.Avx);this.Yt.Cv(1);}
break;case 3:{Ay_=A.aaL(A.ach.Avx);this.Yt.Cv(2);}break;default:A.ab5("%s%e",BsC
,AfS);}this.Yt.Ax(Ay_);},_Init:function(aArg){C.IE._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Yt={I:this},0);this.__proto__=C.XM;this.BS.H(BsD);this.Yt.H(AHM);
this.Yt.L(A.jb.Text);this.J(this.Yt,0);this.Hv.Ax(A.aaL(A.ach.Avw));this.Yt.Ax(A.
aaL(A.ach.ADq));},_Done:function(){this.__proto__=C.IE;this.Yt._Done();C.IE._Done.
call(this);},_ReInit:function(){C.IE._ReInit.call(this);this.Yt._ReInit();},_Mark:
function(D){var B;C.IE._Mark.call(this,D);if((B=this.Yt)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaS={Kc:0,XO:null,K9:0
,Bl:function(aSize){C.IE.Bl.call(this,aSize);this.XO.H(this.Hv.M);},Ai:function(
Ae){C.IE.Ai.call(this,Ae);this.XO.L(this.BS.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj3(this.K9)){this.T(A.aaR(A.acf.AnimalLoss));this.Hv.Z(false);this.XO.Z(true);
}else if(this.Kc>0){this.T(A._GetAutoObject(A.Device.Converter).Rh(this.Kc));this.
Hv.Z(true);this.XO.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hv.Z(true);this.
XO.Z(false);}},Cf:function(G){C.IE.Cf.call(this,G);this.Kc=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IE._Init.call(this,aArg);A.acg.Text._Init.call(this.XO={
I:this},0);this.__proto__=C.AaS;this.XO.R(Bag);this.J(this.XO,0);this.Hv.Ax(A.aaL(
A.ach.AvB));this.XO.S(A.aaL(A.fl.H1));},_Done:function(){this.__proto__=C.IE;this.
XO._Done();C.IE._Done.call(this);},_ReInit:function(){C.IE._ReInit.call(this);this.
XO._ReInit();},_Mark:function(D){var B;C.IE._Mark.call(this,D);if((B=this.XO)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMr={XQ:null,Init:function(aArg){var B;A.zX([this,this.AAw],[B=A._GetAutoObject(
A.Device.Device),B.AEr,B.AIH],0);A.pe([this,this.AAw],this);},DE:function(G){var
D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.On(this);break;
case 7:this.MU(this);break;default:D5.NH=true;}},CC:function(G){var B;this.XQ.CC(
this);C.AB.CC.call(this,G);},E4:function(G){var B;this.XQ.E4(this);C.AB.E4.call(
this,G);},Ank:function(G){A._GetAutoObject(C.A9).Fy();},Adt:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},MU:function(G){if(A._GetAutoObject(A.Device.
Device).An.B9()<=1)return;var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB+1;
if(LB>=A._GetAutoObject(A.Device.Device).An.B9())LB=0;A._GetAutoObject(A.Device.
Helper).G7(LB);},On:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)
return;var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB-1;if(LB<0)LB=A._GetAutoObject(
A.Device.Device).An.B9()-1;A._GetAutoObject(A.Device.Helper).G7(LB);},AAw:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqm)A._GetAutoObject(C.A9).Ab7(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XQ._Init.call(this.XQ={I:this},0);this.
__proto__=C.AMr;this.Background.H(Cc);this.N.Z(true);this.N.OO(true);this.N.OP(true
);this.Dr(C.APm);this.XQ.H(Fe);this.J(this.XQ,0);this.N.CE=[this,this.Ank];this.
N.Cg=[this,this.Adt];this.N.C1(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AeA));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XQ._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XQ._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IE={Hv:null,BS:null
,T:function(E){C.I2.T.call(this,E);this.BS.R(this.DK);},De:function(E){C.I2.De.call(
this,E);this.Hv.L(E);this.BS.L(E);},_Init:function(aArg){C.I2._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hv={I:this},0);C.CH._Init.call(this.BS={I:this},0);this.
__proto__=C.IE;this.Hv.H(BsE);this.Hv.L(A.jb.Text);this.BS.H(BsF);this.BS.A6(0x11
);this.BS.L(A.jb.Text);this.J(this.Hv,0);this.J(this.BS,0);this.Hv.Ax(A.aaL(A.aci.
TL));this.BS.S(A.aaL(A.fl.Af));this.BS.A2(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I2;this.Hv._Done();this.BS._Done();C.I2._Done.call(this);},_ReInit:function(
){C.I2._ReInit.call(this);this.Hv._ReInit();this.BS._ReInit();this.BS.S(A.aaL(A.
fl.Af));this.BS.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I2._Mark.call(this
,D);if((B=this.Hv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BS)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I2={Background:null
,KS:0,Hk:false,CP:function(){this.Cf(this);},Init:function(aArg){var B;A.zX([this
,this.Bbi],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId],0);A.pe([this,
this.Bbi],this);},Bl:function(aSize){C.Hh.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hh.Ai.call(this,Ae);if(this.
Hk)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CJ);},Cf:function(G){}
,Bbi:function(s){this.Cf(s);},Bi:function(E){if(this.Hk===E)return;this.Hk=E;this.
Am();},De:function(E){if(this.KS===E)return;this.KS=E;},_Init:function(aArg){C.Hh.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);this.__proto__=
C.I2;this.H(BD);this.Background.H(AIj);this.KS=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hh;this.Background._Done(
);C.Hh._Done.call(this);},_ReInit:function(){C.Hh._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NE={G2:null,BAV:function(G){this.BS.H(A.abN(this.BS.M,this.G2.M[0]));},_Init:
function(aArg){C.Fx._Init.call(this,aArg);A.acg.Text._Init.call(this.G2={I:this}
,0);this.__proto__=C.NE;this.G2.AZ(0xA);this.G2.H(BsG);this.G2.Hm(5);this.G2.I_(
true);this.G2.A6(0x14);this.G2.R(A.jV);this.G2.L(A.jb.Text);this.J(this.G2,0);this.
G2.Q5([this,this.BAV]);this.G2.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fx;this.G2._Done();C.Fx._Done.call(this);},_ReInit:function(){C.Fx._ReInit.call(
this);this.G2._ReInit();this.G2.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fx.
_Mark.call(this,D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axg={AQY:null,_Init:function(aArg){C.Zw._Init.call(this,aArg);this.__proto__=
C.Axg;},_Mark:function(D){var B;C.Zw._Mark.call(this,D);if((B=this.AQY)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANy={Wu:null,WO:0,AwI:function(E){C.AmB.AwI.call(this,E);if(E)this.Pp.R(BsH);
else this.Pp.R(Bai);},BmW:function(E){if(A.aaZ(this.Wu,E))return;if(!!this.Wu)A.
z$([this,this.A3a],this.Wu,0);this.Wu=E;if(!!E)A.zX([this,this.A3a],E,0);if(!!E)
A.pe([this,this.A3a],this);},AFE:function(E){var F;if(this.WO===E)return;this.WO=
E;this.AwI(!!this.Wu&&((F=this.Wu,F[1].call(F[0]))===E));},A3a:function(G){var F;
this.AwI(!!this.Wu&&((F=this.Wu,F[1].call(F[0]))===this.WO));},_Init:function(aArg
){C.AmB._Init.call(this,aArg);this.__proto__=C.ANy;this.Pp.R(Bai);this.Pp.S(A.aaL(
A.fl.H1));},_Mark:function(D){var B;C.AmB._Mark.call(this,D);if((B=this.Wu)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axi={Wu:null,WO:0,_Init:function(aArg){C.Zw._Init.call(this,aArg);this.__proto__=
C.Axi;},_Mark:function(D){var B;C.Zw._Mark.call(this,D);if((B=this.Wu)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATQ={GO:null,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.Q$._Init.call(
this.GO={I:this},0);this.__proto__=C.ATQ;var B;this.I$(A.aaR(A.acf.ACD));this.GO.
H(AhX);this.GO.Aj(true);this.GO.Z(true);this.GO.T(A.aaR(A.acf.AF6));this.GO.ArX(
false);this.GO.A96(true);this.J(this.GO,0);this.GO.AeU([B=this.GO,B.FU]);this.GO.
Gq([this,this.D_,this.GQ]);this.GO.Akw(A.aaL(A.ach.Edit));this.GO.At([B=A._GetAutoObject(
A.Device.Device),B.ASu,B.AZ5]);},_Done:function(){this.__proto__=C.Ce;this.GO._Done(
);C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.GO._ReInit(
);this.I$(A.aaR(A.acf.ACD));this.GO.T(A.aaR(A.acf.AF6));},_Mark:function(D){var B;
C.Ce._Mark.call(this,D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATO={GI:0,C6:null,AW:null,Kq:null,E$:null
,GermanStateToString:null,CountryToString:null,Pw:0,K$:0,L$:false,Init:function(
aArg){A.zX([this,this.MH],[this,this.SB,this.Lo],0);A.zX([this,this.MH],[this,this.
Ann,this.Ahp],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.AW.FN(this.LQ);this.
Kq.FN(this.LQ);this.E$.CT(this.LQ);},DJ:function(G){var F;if(!this.N)return;switch(
this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=
this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[
1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[
0])).CV(this.CountryToString.BR(this.K$));(F=this.N,F[1].call(F[0])).Cl=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0]
)).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(
F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.EV
)+Ax9)+this.GermanStateToString.Lu(A._GetAutoObject(A.Device.Converter).ACO(this.
Pw)));(F=this.N,F[1].call(F[0])).Cl=null;}break;default:{(F=this.N,F[1].call(F[0
])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}}
,Ew:function(EN){var Tm=this.A8;if(EN<0)EN=0;else if(EN>this.RI)EN=this.RI;switch(
EN){case 0:{this.Bb(null);if(!this.GI&&!this.Pw)this.Lo(0);}break;case 1:this.Bb(
this.E$);break;case 2:this.Bb(this.Kq);break;case 3:if(((Tm===2)&&!this.Pw)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Tm>0))this.AW.SO(2);else this.AW.SO(
7);}break;default:throw new Error(Atd+EN.toFixed());}this.A8=EN;C.Ek.Ew.call(this
,EN);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.L$=true;this.SE(A._GetAutoObject(
A.Device.Helper).Si(E,0,10));this.Ahp(A._GetAutoObject(A.Device.Helper).Si(E,10,
2)|0);this.Lo(A._GetAutoObject(A.Device.Converter).S1(E));this.L$=false;if(!!this.
AM){this.Kq.Kt(2);this.AW.Kt(10);}else{this.Kq.Kt(0);this.AW.Kt(0);}this.Am();},
FU:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ACZ());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ew(2);}else this.Ew(this.RI);},AjK:function(){return this.GI;
},AjM:function(){return 9999999999;},Lo:function(E){if(this.K$===E)return;this.K$=
E;if(this.L$===false)A.pe([this,this.Vm],this);A.abo([this,this.SB,this.Lo],0);}
,SE:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this,this.
Vm],this);A.abo([this,this.AbW,this.SE],0);},Vm:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqv(this.K$),3,10)+A.abl(this.Pw,2,10))+
A.abm(this.GI,10,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahp:function(
E){if(this.Pw===E)return;this.Pw=E;if(this.L$===false)A.pe([this,this.Vm],this);
A.abo([this,this.Ann,this.Ahp],0);},SB:function(){return this.K$;},AbW:function(
){return this.GI;},Ann:function(){return this.Pw;},_Init:function(aArg){C.Ek._Init.
call(this,aArg);C.C6._Init.call(this.C6={I:this},0);C.AQS._Init.call(this.AW={I:
this},0);C.AvL._Init.call(this.Kq={I:this},0);C.AsF._Init.call(this.E$={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATO;var B;this.RI=3;this.AW.H(BsI);this.Kq.H(BsJ);this.Kq.EU(16);this.E$.H(Baj
);this.J(this.AW,0);this.J(this.Kq,0);this.J(this.E$,0);this.C6.AEX([this,this.SB
,this.Lo]);this.AW.At([this,this.AbW,this.SE]);this.Kq.At([this,this.Ann,this.Ahp
]);this.E$.CK(this.C6);this.E$.At([B=this.C6,B.B_,B.B$]);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ek;this.C6._Done();this.AW._Done();this.Kq._Done();this.
E$._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.Ek._Done.
call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C6._ReInit();this.AW.
_ReInit();this.Kq._ReInit();this.E$._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AQS={NK:null,NJ:null,ES:null,FY:null,Ep:null,Dy:null,CU:null,Ct:null,FN:function(
E){if(this.M4===E)return;C.Lf.FN.call(this,E);this.Ct.CT(E);this.CU.CT(E);this.Dy.
CT(E);this.Ep.CT(E);this.FY.CT(E);this.ES.CT(E);this.NJ.CT(E);this.NK.CT(E);},Ym:
function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.FZ;break;case 1:B5=this.
Ct;break;case 2:B5=this.CU;break;case 3:B5=this.Dy;break;case 4:B5=this.Ep;break;
case 5:B5=this.FY;break;case 6:B5=this.ES;break;case 7:B5=this.NJ;break;case 8:B5=
this.NK;break;case 9:B5=this.G1;break;default:A.ab5("%s",Ah1);}return B5;},_Init:
function(aArg){C.Lf._Init.call(this,aArg);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.FY={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.AQS;this.H(BsK);this.G1.H(AIy);this.NK.H(Ayw);this.NJ.H(AZF
);this.ES.H(AZG);this.FY.H(AZH);this.Ep.H(AZI);this.Dy.H(AZJ);this.CU.H(AZK);this.
Ct.H(A$5);this.FZ.H(AZL);this.EM.H(AZL);this.J(this.NK,-2);this.J(this.NJ,-2);this.
J(this.ES,-2);this.J(this.FY,-2);this.J(this.Ep,-2);this.J(this.Dy,-2);this.J(this.
CU,-2);this.J(this.Ct,-2);this.NK.Di=[this,this.GU];this.NJ.Di=[this,this.GU];this.
ES.Di=[this,this.GU];this.FY.Di=[this,this.GU];this.Ep.Di=[this,this.GU];this.Dy.
Di=[this,this.GU];this.CU.Di=[this,this.GU];this.Ct.Di=[this,this.GU];},_Done:function(
){this.__proto__=C.Lf;this.NK._Done();this.NJ._Done();this.ES._Done();this.FY._Done(
);this.Ep._Done();this.Dy._Done();this.CU._Done();this.Ct._Done();C.Lf._Done.call(
this);},_ReInit:function(){C.Lf._ReInit.call(this);this.NK._ReInit();this.NJ._ReInit(
);this.ES._ReInit();this.FY._ReInit();this.Ep._ReInit();this.Dy._ReInit();this.CU.
_ReInit();this.Ct._ReInit();},_Mark:function(D){var B;C.Lf._Mark.call(this,D);if((
B=this.NK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ct
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATP={
GI:0,C6:null,AW:null,E$:null,CountryToString:null,K$:0,L$:false,Init:function(aArg
){A.zX([this,this.MH],[this,this.SB,this.Lo],0);},Ai:function(Ae){C.Ek.Ai.call(this
,Ae);this.AW.FN(this.LQ);this.E$.CT(this.LQ);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CV(this.CountryToString.BR(this.K$));(F=this.N,F[1].call(F[0])).Cl=null;}
break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(
F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=
null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EN){var Tm=this.A8;if(EN<0)EN=0;
else if(EN>this.RI)EN=this.RI;switch(EN){case 0:{this.Bb(null);if(!this.GI)this.
Lo(0);}break;case 1:this.Bb(this.E$);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Tm>0))this.AW.SO(2);else this.AW.SO(7);}break;default:throw new Error(Atd+EN.toFixed(
));}this.A8=EN;C.Ek.Ew.call(this,EN);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.L$=true;this.SE(A._GetAutoObject(A.Device.Helper).Si(E,0,12));this.Lo(
A._GetAutoObject(A.Device.Converter).S1(E));this.L$=false;if(!!this.AM)this.AW.Kt(
12);else this.AW.Kt(0);this.Am();},FU:function(G){var F;if(!this.AM){var BO=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).ACZ());if(this.AM!==BO){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(this.RI);},AjK:function(
){return this.GI;},AjM:function(){return 999999999999;},Lo:function(E){if(this.K$===
E)return;this.K$=E;if(this.L$===false)A.pe([this,this.Vm],this);A.abo([this,this.
SB,this.Lo],0);},SE:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false
)A.pe([this,this.Vm],this);A.abo([this,this.AbW,this.SE],0);},Vm:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqv(this.K$),3,10)+A.abm(
this.GI,12,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SB:function(){return this.
K$;},AbW:function(){return this.GI;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.ADI._Init.call(this.AW={I:this},0);C.AsF.
_Init.call(this.E$={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATP;var B;this.RI=2;this.AW.H(BsL);this.E$.H(Baj);this.
J(this.AW,0);this.J(this.E$,0);this.C6.AEX([this,this.SB,this.Lo]);this.AW.At([this
,this.AbW,this.SE]);this.E$.CK(this.C6);this.E$.At([B=this.C6,B.B_,B.B$]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ek;this.C6._Done();this.AW._Done();this.
E$._Done();this.CountryToString._Done();C.Ek._Done.call(this);},_ReInit:function(
){C.Ek._ReInit.call(this);this.C6._ReInit();this.AW._ReInit();this.E$._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,X6:null,X7:null,X5:null,X3:null,X4:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkM();A._GetAutoObject(A.Device.Helper).Asn();},Ig:function(G){
var Cx=(C.Fm.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.X6)A._GetAutoObject(
C.A9).Cd(28);else if(Cx===this.X7)A._GetAutoObject(C.A9).Cd(26);else if(Cx===this.
X5)A._GetAutoObject(C.A9).Cd(54);else if(Cx===this.X3)A._GetAutoObject(C.A9).Cd(
27);else if(Cx===this.X4)A._GetAutoObject(C.A9).Cd(78);},A3e:function(G){A._GetAutoObject(
C.A9).Fy();},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.
My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fm._Init.call(this.X6={I:this
},0);C.Fm._Init.call(this.X7={I:this},0);C.Fm._Init.call(this.X5={I:this},0);C.Fm.
_Init.call(this.X3={I:this},0);C.Fm._Init.call(this.X4={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Ej.Ar(false
);this.Dr(C.AqW);this.DY.AZ(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CJ);this.Y.H(Fe);
this.Y.JR(9);this.Ay.H(It);this.X6.H(P9);this.X6.Aj(true);this.X6.T(A.aaR(A.acf.
A7C));this.X7.H(AZR);this.X7.Aj(true);this.X7.T(A.aaR(A.acf.NewAnimals));this.X5.
H(N$);this.X5.Aj(true);this.X5.T(A.aaR(A.acf.Calving));this.X3.H(P_);this.X3.Aj(
true);this.X3.T(A.aaR(A.acf.ABW));this.X4.H(MG);this.X4.Aj(true);this.X4.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
X6,0);this.J(this.X7,0);this.J(this.X5,0);this.J(this.X3,0);this.J(this.X4,0);this.
N.CE=[this,this.A3e];this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fj];this.X6.
AR=[this,this.Ig];this.X6.DB(A.aaL(A.ach.ADD));this.X7.AR=[this,this.Ig];this.X7.
DB(A.aaL(A.ach.AvF));this.X5.AR=[this,this.Ig];this.X5.DB(A.aaL(A.ach.APX));this.
X3.AR=[this,this.Ig];this.X3.DB(A.aaL(A.ach.APU));this.X4.AR=[this,this.Ig];this.
X4.DB(A.aaL(A.ach.APN));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.X6._Done();this.X7._Done();this.X5._Done();this.X3.
_Done();this.X4._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.X6._ReInit(
);this.X7._ReInit();this.X5._ReInit();this.X3._ReInit();this.X4._ReInit();this.X6.
T(A.aaR(A.acf.A7C));this.X7.T(A.aaR(A.acf.NewAnimals));this.X5.T(A.aaR(A.acf.Calving
));this.X3.T(A.aaR(A.acf.ABW));this.X4.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARN={K4:null,EaseOfDelivery:null,BirthType:null,AcI:null
,Lj:null,Cn:null,G6:null,Lh:null,AzH:true,Init:function(aArg){this.Bb(this.C$);A.
pe([this,this.GH],this);},Ev:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E5();A._GetAutoObject(C.A9).Fy();if(!!this.K4)this.K4.Ev(this);},Agd:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EB((F=this.BY.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwJ(true);if(!!this.K4)this.K4.Agd(this
);if(A._GetAutoObject(A.Device.Device).An.Lg())A._GetAutoObject(A.Device.Helper).
AKc(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApD]);else{this.AiY();A.
pe([this,this.Ap1],this);}},Auf:function(){this.N.CV(A.jV);this.N.C2(A.aaL(A.ach.
ADH));this.N.Cl=[this,this.AyN];},CC:function(G){var B;C.HY.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lg()){A._GetAutoObject(A.Device.Device).A5(41
,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),0,null);this.Ev(this);
}else if(this.AzH){this.AzH=false;A.pe([this,this.A3t],this);}else if(!this.K4){
this.K4=A._NewObject(C.ARO,0);this.K4.A9B([this,this.AAT]);A._GetAutoObject(A.Device.
Helper).W.Gp();A._GetAutoObject(A.Device.Helper).Aqe(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nf(this.AsR.Aei(6));this.K4.LN(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ev(this);}},AiY:function(
){A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);var
L7=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SP(L7);if(A._GetAutoObject(A.Device.Helper
).Am1()){if(A._GetAutoObject(A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.
Device).A5(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),0,null);else{
var B0=A._NewObject(A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B0.OnSetBodyWeight(this.KI);B0.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B0.Ch(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A6J(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap1:function(G){var B;if(!!this.K4)this.K4.Ap1(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).Am1())this.C9.Z(true);else this.C9.Z(false);},
ApD:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",As6,As.Id);}},AAT:function(G){this.
LN(this);this.AeW(A._GetAutoObject(A.Device.Helper).Abn(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JG(this.C$);},ApE:function(G){var F;C.HY.ApE.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnT));},A3t:function(G){A._GetAutoObject(
C.A9).Cd(79);},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcI._Init.call(this.AcI={I:this},0);C.Q$._Init.call(this.Lj={I:this
},0);C.SQ._Init.call(this.Cn={I:this},0);C.BU._Init.call(this.G6={I:this},0);C.BU.
_Init.call(this.Lh={I:this},0);this.__proto__=C.ARN;var B;this.Dr(C.APj);this.Lj.
H(AhX);this.Lj.Aj(true);this.Lj.T(A.aaR(A.acf.ACk));this.CG.H(AcP);this.Cn.H(AcP
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.AFw(true);this.G6.H(AcP);
this.G6.Aj(true);this.G6.T(A.aaR(A.acf.Arl));this.Lh.H(AcP);this.Lh.Aj(true);this.
Lh.T(A.aaR(A.acf.AgG));this.J(this.Lj,-5);this.J(this.Cn,-3);this.J(this.G6,-1);
this.J(this.Lh,-1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.AcI.LY(A._GetAutoObject(A.
Device.Helper).W);this.Lj.Gq([this,this.D_,this.GQ]);this.Lj.At([B=A._GetAutoObject(
A.Device.Helper).W,B.ASq,B.AnA]);this.Cn.Gq([this,this.D_,this.GQ]);this.Cn.LX([
B=this.Cn,B.FU]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab4([B=A._GetAutoObject(A.
Device.Helper).W,B.Av9,B.Q4]);this.Gl.At([B=this.AcI,B.B_,B.B$]);this.Gl.CK(this.
AcI);this.G6.At([B=this.BirthType,B.B_,B.B$]);this.G6.CK(this.BirthType);this.Lh.
At([B=this.EaseOfDelivery,B.B_,B.B$]);this.Lh.CK(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcI._Done();this.Lj._Done();this.Cn._Done();this.G6._Done();this.Lh.
_Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcI._ReInit();this.Lj._ReInit(
);this.Cn._ReInit();this.G6._ReInit();this.Lh._ReInit();this.Lj.T(A.aaR(A.acf.ACk
));this.Cn.T(A.aaR(A.acf.Aed));this.G6.T(A.aaR(A.acf.Arl));this.Lh.T(A.aaR(A.acf.
AgG));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.K4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcI)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G6)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMt={Init:function(aArg){var B;A.zX([this,this.ALh],[B=A._GetAutoObject(A.Device.
Device),B.AEy,B.AIM],0);A.pe([this,this.ALh],this);},AKJ:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbS){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACR();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOD();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mq();break;default:throw new Error(AZU+A.
_GetAutoObject(A.Device.Device).AbS.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},ALh:function(G){switch(A._GetAutoObject(A.Device.Device).AbS){case
0:this.Dj(A.aaR(A.acf.ART));break;case 1:this.Dj(A.aaR(A.acf.BjY));break;case 2:
this.Dj(A.aaR(A.acf.Av1));break;default:A.ab5("%s",AZU+A._GetAutoObject(A.Device.
Device).AbS.toFixed());}},_Init:function(aArg){C.Amr._Init.call(this,aArg);this.
__proto__=C.AMt;this.BmO(C.APz);this.Ej.Ab0(A._NewObject(C.APo,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ARO={AAe:0,Adg:null
,AuT:null,BdV:0,A3H:0,A2A:0,Init:function(aArg){this.BdV=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adg=A._GetAutoObject(A.Device.Device).An.Filter;this.AAe=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2A=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LN:function(G){A._GetAutoObject(A.Device.Helper).W.AnA(this.AAe);A._GetAutoObject(
A.Device.Helper).W.Ae4(true);switch(this.A2A){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EB(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EB(2);break;default:
A.ab5("%s%e",AZC,this.A2A);}},Ev:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adg);if(!!this.A3H)this.Bgt();},Agd:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bgt:function(){var AtU=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LS(0,this.BdV);AtU.E3(Ad,A._GetAutoObject(
A.Device.Device).An);AtU.Awv(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);AtU.
ArQ(false);AtU.AwK(AtU.LactationNumber+1);AtU.Ch(A._GetAutoObject(A.Device.Device
).An);},Ap1:function(G){this.A3H++;var Bx5=A._GetAutoObject(A.Device.Converter).
Bhc(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3H<Bx5)&&(A._GetAutoObject(
A.Device.Helper).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A5(59,true,A.jV,0,[this,this.Vh]);else this.BcT(
this);},Vh:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&(As.PopupState===8))this.BcT(this);else if(!!As&&(As.PopupState===7))this.
AAT(this);},AAT:function(G){var B;var Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfS=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var O_=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJR=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuT)(B=this.AuT
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EB(Ib);A._GetAutoObject(
A.Device.Helper).W.Aks(AfS);A._GetAutoObject(A.Device.Helper).W.NZ(Bv);A._GetAutoObject(
A.Device.Helper).W.Q4(O_);A._GetAutoObject(A.Device.Helper).W.Aku(AJR);},BcT:function(
G){this.Bgt();A._GetAutoObject(C.A9).Fy();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adg);},A9B:function(E){if(A.aa0(this.AuT,E))return;this.AuT=E;},_Init:function(
aArg){this.__proto__=C.ARO;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adg)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMJ={Init:function(aArg){
var B;A.zX([this,this.Beg],[B=A._GetAutoObject(A.Device.Device),B.ASa,B.AZV],0);
this.Beg(this);},Ch:function(){A.ab5("%s",BsM);},E3:function(AcU){C.Vv.E3.call(this
,AcU);var O;for(O=16;O>0;O--)this.Ia.Set(O,this.Ia.Get(O-1));this.Ia.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",BsN);},ADM:function(ED){switch(ED){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Beg:
function(G){this.E3(A._GetAutoObject(A.Device.Device).Auy);A.we(this,0);},_Init:
function(aArg){C.Vv._Init.call(this,aArg);this.__proto__=C.AMJ;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuL={_Init:function(){C.
AMJ._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JJ={C5:null,V:null,A7v:true,T:function(E){C.I2.T.call(this,E);this.
V.R(E);},De:function(E){C.I2.De.call(this,E);this.V.L(E);},BmT:function(E){if(this.
A7v===E)return;this.A7v=E;this.C5.Z(E);},_Init:function(aArg){C.I2._Init.call(this
,aArg);A.acg.C5._Init.call(this.C5={I:this},0);C.CH._Init.call(this.V={I:this},0
);this.__proto__=C.JJ;this.C5.DC(BsO);this.C5.DM(BsP);this.C5.L(A.jb.Bc);this.V.
AZ(0x3F);this.V.H(BsQ);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C5,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Ko));this.V.A2(A.aaL(A.fl.Il));this.V.Cu(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.I2;this.C5._Done();this.V._Done();C.
I2._Done.call(this);},_ReInit:function(){C.I2._ReInit.call(this);this.C5._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Ko));this.V.A2(A.aaL(A.fl.Il));this.V.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.I2._Mark.call(this,D);if((B=this.C5).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APo={AgU:null,Dd:null,Abl:null,Fl:null,Fa:
null,Init:function(aArg){var B;A.zX([this,this.A4g],[B=A._GetAutoObject(A.Device.
Device),B.AEy,B.AIM],0);A.pe([this,this.A4g],this);},De:function(E){C.Yp.De.call(
this,E);this.Dd.L(E);},AEE:function(G){A.pe([this,this.A4g],this);},AAV:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E_();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DL(1,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C3:function(G){var B;var F;C.Yp.C3.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Dd.Ax(A.aaL(A.ach.AjS));return;}var ByK=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(38,0)
)?B:null);var Bbt=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DL(14,0))?B:null);if(!!ByK)this.Dd.Ax(A.aaL(A.ach.AC5));else if(
!!Bbt&&(Bbt.A4===1))this.Dd.Ax(A.aaL(A.ach.APZ));else this.Dd.Ax(A.aaL(A.ach.AjS
));},A4g:function(G){var F;var Filter=null;var AOr;switch(A._GetAutoObject(A.Device.
Device).AbS){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACR();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOD();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mq();break;default:throw new Error(AZU+A._GetAutoObject(A.Device.
Device).AbS.toFixed());}var Ai2=this.Akm();if(Ai2>0){AOr=A._NewObject(A.Device.Int32FilterCriterion
,0);AOr.Initialize(1,4,Ai2,false);Filter.CW(AOr);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeX(false);},On:function(G){if(!this.Akm())this.AW.AeX(true
);this.Bb(this.AW);this.Am();},MU:function(G){this.AW.AeX(false);this.Bb(this.AgU
);this.Am();},_Init:function(aArg){C.Yp._Init.call(this,aArg);C.Aq8._Init.call(this.
AgU={I:this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);C.Abl._Init.call(this.Abl={
I:this},0);A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.BK._Init.call(this.Fa={
I:this},0);this.__proto__=C.APo;var B;this.H(BsR);this.AW.H(BsS);this.T3.H(BsT);
this.Gv.Z(false);this.AgU.H(BsU);this.Dd.H(BsV);this.Abl.At(A._GetAutoObject(A.Device.
Device).AbS);this.Fl.Filter=6;this.Fa.Filter=7;this.JX(this.A$,-1);this.J(this.AgU
,-1);this.J(this.Dd,-1);this.AgU.CK(this.Abl);this.AgU.At([B=this.Abl,B.B_,B.B$]
);this.Dd.Ax(A.aaL(A.ach.AjS));this.Fl.BL=[this,this.On];this.Fa.BL=[this,this.MU
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yp;this.AgU._Done();this.Dd.
_Done();this.Abl._Done();this.Fl._Done();this.Fa._Done();C.Yp._Done.call(this);}
,_ReInit:function(){C.Yp._ReInit.call(this);this.AgU._ReInit();this.Dd._ReInit();
this.Abl._ReInit();this.Fl._ReInit();this.Fa._ReInit();},_Mark:function(D){var B;
C.Yp._Mark.call(this,D);if((B=this.AgU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abl={AeR:null
,Init:function(aArg){var B;A.zX([this,this.BdX],[B=A._GetAutoObject(A.Device.Device
),B.AEy,B.AIM],0);A.pe([this,this.BdX],this);},Du:function(){return 3;},At:function(
E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.Device).AwR(E);},ACQ:function(
aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;return this.AeR.AsG(aIndex
);},ACS:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return this.
AeR.AsH(aIndex);},BdX:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbS;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeR._Init.call(this.AeR={I:this},0);this.__proto__=C.Abl;this.Cb.Set(0,
0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeR._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeR._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APz={Er:null,IN:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.Er={I:this},0);A.acg.Text._Init.call(this.IN={I:this},0);this.__proto__=
C.APz;this.H(O4);this.Background.H(O4);this.Er.H(AIk);this.Er.R(A.aaR(A.acf.A6O)
);this.Er.A6(0x12);this.Er.L(A.jb.Text);this.IN.AZ(0x3F);this.IN.H(AIl);this.IN.
Hm(5);this.IN.A6(0x14);this.IN.R(A.aaR(A.acf.AGJ));this.IN.L(A.jb.Text);this.J(this.
Er,0);this.J(this.IN,0);this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.Il));this.
Er.Cu(A.aaL(A.fl.Bh));this.IN.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EA;this.Er._Done();this.IN._Done();C.EA._Done.call(this);},_ReInit:function(){
C.EA._ReInit.call(this);this.Er._ReInit();this.IN._ReInit();this.Er.R(A.aaR(A.acf.
A6O));this.IN.R(A.aaR(A.acf.AGJ));this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.
Il));this.Er.Cu(A.aaL(A.fl.Bh));this.IN.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EA._Mark.call(this,D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J0:null,Bf3:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.BeH(this);else A._GetAutoObject(A.Device.Device).A5(63,true,A.
jV,0,[this,this.Vh]);},BeH:function(G){A._GetAutoObject(C.A9).Fy();},Vh:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63)
)&&(As.PopupState===7))this.BeH(this);},_Init:function(aArg){C.Mg._Init.call(this
,aArg);A.acg.Text._Init.call(this.J0={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dr(C.APn);this.Jf.H(BsW);this.Jf.AkC(2);this.Acw.Z(false);this.ARt=12;this.
Number.H(BsX);this.Number.R(A.aaR(A.acf.A_5));this.A4M=false;this.J0.H(BsY);this.
J0.Hm(5);this.J0.KR(true);this.J0.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABC));this.J0.L(A.jb.Text);this.JX(this.Jf,-1);this.JX(this.IS,-1);this.
JX(this.Acw,-1);this.J(this.J0,0);this.J0.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mg;this.J0._Done();C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.
call(this);this.J0._ReInit();this.Number.R(A.aaR(A.acf.A_5));this.J0.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABC));this.J0.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mg._Mark.call(this,D);if((B=this.J0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APn={_Init:function(aArg){C.AqV.
_Init.call(this,aArg);this.__proto__=C.APn;this.DS.EB(1);},_className:"Application::HeaderScannedCowId"
};C.Jf={AbI:null,AbH:null,AbG:null,QG:null,CountryToString:null,AsJ:0,CP:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QG.R(this.CountryToString.
Lu(A._GetAutoObject(A.Device.Converter).A7a(A._GetAutoObject(A.Device.Device).Language
))+BsZ);},AkC:function(E){if(this.AsJ===E)return;this.AsJ=E;var bitmap=null;var A1E=
Bs0;var A1D=null;var A1F=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aq7);break;case
1:{bitmap=A.aaL(A.ach.AQz);A1E=Bs1;A1D=A.aaL(A.fl.Ak);A1F=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQA);A1E=Bs2;A1D=A.aaL(A.fl.Bh);A1F=true;}break;default:throw new Error(
Bs3+E.toFixed());}this.AbG.Ax(bitmap);this.AbH.Ax(bitmap);this.AbI.Ax(bitmap);this.
QG.H(A.abJ(this.QG.M,A1E));this.QG.S(A1D);this.QG.Z(A1F);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbI={I:this},0);A.acg.Ap._Init.call(this.AbH={I:this},0);A.acg.Ap._Init.
call(this.AbG={I:this},0);A.acg.Text._Init.call(this.QG={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jf;this.H(AIB);this.
AbI.AZ(0x3);this.AbI.H(AIB);this.AbI.L(A.jb.H8);this.AbI.Cv(2);this.AbH.AZ(0x3);
this.AbH.H(AIB);this.AbH.L(A.jb.Ad_);this.AbH.Cv(1);this.AbG.AZ(0x3);this.AbG.H(
AIB);this.AbG.L(A.jb.Text);this.AbG.Cv(0);this.QG.AZ(0x14);this.QG.H(Bs4);this.QG.
L(0xFF020202);this.QG.Z(false);this.J(this.AbI,0);this.J(this.AbH,0);this.J(this.
AbG,0);this.J(this.QG,0);this.AbI.Ax(A.aaL(A.ach.Aq7));this.AbH.Ax(A.aaL(A.ach.Aq7
));this.AbG.Ax(A.aaL(A.ach.Aq7));this.QG.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbI._Done();this.AbH._Done();this.AbG._Done();this.QG._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbI._ReInit();this.AbH._ReInit();this.AbG._ReInit(
);this.QG._ReInit();this.CountryToString._ReInit();this.QG.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsJ={Transponder:0,BFQ:1,BFR:2};C.APj={Ap:null,De:function(E){C.BQ.De.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APj;this.Ap.H(AZD);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APa));},_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.
BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ih:0,AaB:4,Al0:function(G){C.Q_.Al0.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bdt()){this.Ih=A._GetAutoObject(A.Device.Helper).Ux.Id;var Aix=A._GetAutoObject(
A.Device.Helper).A6_(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(Aix){A._GetAutoObject(
A.Device.Device).A5(21,true,A._GetAutoObject(A.Device.Converter).Rh(this.Ih),0,[
this,this.Vh]);return;}Aix=A._GetAutoObject(A.Device.Helper).Bjo(this.Ih,A._GetAutoObject(
A.Device.Helper).W);if(Aix&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ih)){A._GetAutoObject(A.Device.Device).A5(25,true,A._GetAutoObject(A.Device.
Converter).Rh(this.Ih),0,[this,this.Vh]);return;}this.AaB=A._GetAutoObject(A.Device.
Helper).AQ5(this.Ih);switch(this.AaB){case 0:A._GetAutoObject(A.Device.Device).A5(
45,true,this.Ih.toFixed().length.toFixed(),0,[this,this.Vh]);break;case 1:case 2:{
var BM=A._GetAutoObject(A.Device.Converter).AxO(this.Ih);A._GetAutoObject(A.Device.
Device).A5(46,true,BM.toFixed(),0,[this,this.Vh]);}break;case 3:this.BfV();break;
default:throw new Error(AH_+this.AaB.toFixed());}}},Ev:function(G){A._GetAutoObject(
C.A9).Fy();},Vh:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.AaB===2)this.BfV();else A._GetAutoObject(
A.Device.Device).AhH();break;case 5:this.Ev(this);break;default:;}},BfV:function(
){A._GetAutoObject(A.Device.Helper).W.Nd(this.Ih);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PT(this.Ih);A._GetAutoObject(
A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).A5(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ev(this);},_Init:function(aArg){C.Q_._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dr(C.IJ);this.Number.R(A.aaR(A.acf.A_Z
));this.Jf.H(Bs5);this.IS.H(Bs6);this.AkC(1);this.N.CE=[this,this.Ev];this.N.C1(
A.aaL(A.ach.E2));},_ReInit:function(){C.Q_._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_Z));},_className:"Application::SetSaveNaisIdScreen"};C.ANY={LN:function(
G){C.AqE.LN.call(this,G);A.pe([this,this.BBx],this);},BBx:function(G){this.JG(this.
Ef);},_Init:function(aArg){C.AqE._Init.call(this,aArg);this.__proto__=C.ANY;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UN={Animal:null,WhereAboutsToString:
null,Gj:function(aIndex){return this.WhereAboutsToString.BR(this.C7(aIndex));},At:
function(E){C.Cm.At.call(this,E);if(!!this.Animal)this.Animal.Nf(E);},A4o:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B_,this.B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4o],[B=this.Animal,B.Awj,B.Nf],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4o],[B=this.Animal,B.Awj,B.Nf],0);A.pe([this,this.A4o],this);}
,_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UN;this.Cb.Set(0,1);this.
Cb.Set(1,2);this.Cb.Set(2,3);this.Cb.Set(3,4);this.Cb.Set(4,5);},_Done:function(
){this.__proto__=C.Cm;this.WhereAboutsToString._Done();C.Cm._Done.call(this);},_ReInit:
function(){C.Cm._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UO={Du:function(){return 6;},_Init:function(aArg){C.UN._Init.call(this,aArg);
this.__proto__=C.UO;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Cb.Set(
3,3);this.Cb.Set(4,4);this.Cb.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcI={Du:function(){return 5;},_Init:function(aArg){C.UN._Init.call(this,aArg
);this.__proto__=C.AcI;this.Cb.Set(0,6);this.Cb.Set(1,7);this.Cb.Set(2,8);this.Cb.
Set(3,9);this.Cb.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdT={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bcc],[B=A._GetAutoObject(A.Device.
Device),B.ASb,B.AZW],0);A.pe([this,this.Bcc],this);},Du:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gj:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BR(aIndex);},DZ:function(A_){return A_;},H3:function(){return 1;},At:function(E){
C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Awm(E);},Bcc:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Agw;A.abo([this,this.B_,this.B$],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdT;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGx={FJ:null
,Ez:null,EartagNrAssignmentMode:null,Fl:null,Fa:null,HG:null,AW:null,Km:null,M8:
null,A8:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hk){this.AW.FN(A.jb.CJ);this.HG.CT(A.jb.CJ);this.Background.L(A.
jb.CS);this.V.L(A.jb.Text);}else{this.AW.FN(A.jb.CS);this.HG.CT(A.jb.CS);this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hk){this.AW.FN(A.jb.CJ);this.HG.CT(
A.jb.CJ);}else{this.AW.FN(A.jb.CS);this.HG.CT(A.jb.CS);}this.Bb(null);}this.M8.L(
this.V.AQ);},IZ:function(G){C.Eg.IZ.call(this,G);if(!this.A8)this.FU(this);else this.
Hd(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.
N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(
F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=
null;}break;default:this.FJ.AkN((F=this.N,F[1].call(F[0])));}},FU:function(G){this.
Ew(1);},Hd:function(G){this.Ew(0);},Ew:function(EN){var F;if(!this.A8&&!!this.N)
this.FJ.Ajx((F=this.N,F[1].call(F[0])));this.A8=EN;if(this.A8<0)this.A8=0;else if(
this.A8>1)this.A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SO(2);else this.AW.SO(7);}break;default:throw new Error(
Atd+this.A8.toFixed());}this.DJ(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},On:function(G){this.AA4(2);},MU:function(G){this.AA4(7);},AA4:
function(Gz){var B;var Azq=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azq){
var AAg=(A.Core.P.isPrototypeOf(B=this.QH(Azq,Gz,0x15))?B:null);if(!!AAg){this.Bb(
AAg);return true;}}return false;},AfZ:function(G){var F;if(!this.Ez||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M8.Ax(
A._GetAutoObject(A.Device.Converter).AmP(2));break;case 1:this.M8.Ax(A._GetAutoObject(
A.Device.Converter).AmP((F=this.Ez,F[1].call(F[0]))));break;default:throw new Error(
Bak+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A3Z],this);},A3Z:function(G){var B;var F;if(!this.Ez||!this.EartagNrAssignmentMode
){this.Km.AeZ(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Ano,B.Aox]);this.Km.
AeZ([B=A._GetAutoObject(A.Device.Device),B.AEu,B.AIJ]);}break;case 1:switch((F=this.
Ez,F[1].call(F[0]))){case 1:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Awa
,B.AyE]);this.Km.AeZ([B=A._GetAutoObject(A.Device.Device),B.ASg,B.AZX]);}break;case
0:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Awb,B.AyF]);this.Km.AeZ([B=
A._GetAutoObject(A.Device.Device),B.ASh,B.AZY]);}break;case 2:{this.AW.At([B=A._GetAutoObject(
A.Device.Device),B.Ano,B.Aox]);this.Km.AeZ([B=A._GetAutoObject(A.Device.Device),
B.AEu,B.AIJ]);}break;default:throw new Error(Bs7+(F=this.Ez,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Bak+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Ul:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([
this,this.AfZ],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.AfZ],this.Ez,0);if(!!
E)A.pe([this,this.AfZ],this);},Akt:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfZ],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfZ],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfZ],this);},Ug:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(this.Fl={I:this},0);A.Core.
BK._Init.call(this.Fa={I:this},0);C.Aq8._Init.call(this.HG={I:this},0);C.AvM._Init.
call(this.AW={I:this},0);C.AuX._Init.call(this.Km={I:this},0);A.acg.Ap._Init.call(
this.M8={I:this},0);this.__proto__=C.AGx;var B;this.H(UW);this.V.Ar(false);this.
V.R(As8);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fa.Filter=7;this.HG.H(Bs8);this.
AW.H(Bs9);this.M8.H(Bs_);this.J(this.HG,0);this.J(this.AW,0);this.J(this.M8,0);this.
FJ=A._NewObject(C.Aer,0);this.Fl.BL=[this,this.On];this.Fa.BL=[this,this.MU];this.
HG.CK(this.Km);this.HG.At([B=this.Km,B.B_,B.B$]);this.AW.At([this,this.Ug,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fl._Done();this.Fa.
_Done();this.HG._Done();this.AW._Done();this.Km._Done();this.M8._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fl._ReInit();this.Fa.
_ReInit();this.HG._ReInit();this.AW._ReInit();this.Km._ReInit();this.M8._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FJ)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Km)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANN={Wm:
null,Y_:null,AbP:null,T_:null,Init:function(aArg){this.Bb(this.Wm);},AEm:function(
G){var BdT=(C.Ane.isPrototypeOf(G)?G:null);if(!!BdT)A._GetAutoObject(A.Device.Device
).A5(BdT.AdB,true,A.jV,0,null);},DE:function(G){if((this.Cq.CO===7)&&(this.AV===
this.T_))A._GetAutoObject(A.Device.Device).A5(10,true,A.jV,0,null);else if((this.
Cq.CO===6)&&(this.AV===this.T_))A._GetAutoObject(C.A9).Cd(91);C.Ei.DE.call(this,
G);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Ane._Init.call(this.Wm={I:
this},0);C.Ane._Init.call(this.Y_={I:this},0);C.Ane._Init.call(this.AbP={I:this}
,0);C.Ane._Init.call(this.T_={I:this},0);this.__proto__=C.ANN;this.Dr(C.AO0);this.
Wm.H(IU);this.Wm.Aj(true);this.Wm.T(A.aaR(A.acf.AhG));this.Wm.Bi(false);this.Wm.
AdB=79;this.Y_.H(Qa);this.Y_.Aj(true);this.Y_.T(A.aaR(A.acf.A$f));this.Y_.Bi(true
);this.Y_.AdB=77;this.AbP.H(Aab);this.AbP.Aj(true);this.AbP.T(A.acf.BiZ);this.AbP.
Bi(false);this.AbP.AdB=78;this.T_.H(Alc);this.T_.Aj(true);this.T_.T(A.aaR(A.acf.
About));this.T_.Bi(true);this.T_.AdB=3;this.J(this.Wm,-1);this.J(this.Y_,-1);this.
J(this.AbP,-1);this.J(this.T_,-1);this.Wm.AR=[this,this.AEm];this.Y_.AR=[this,this.
AEm];this.AbP.AR=[this,this.AEm];this.T_.AR=[this,this.AEm];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Wm._Done();this.Y_._Done();this.AbP._Done();
this.T_._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this
);this.Wm._ReInit();this.Y_._ReInit();this.AbP._ReInit();this.T_._ReInit();this.
Wm.T(A.aaR(A.acf.AhG));this.Y_.T(A.aaR(A.acf.A$f));this.T_.T(A.aaR(A.acf.About));
},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Wm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.T_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceInfoScreen"};C.AO0={_Init:function(aArg){C.KO._Init.call(this
,aArg);this.__proto__=C.AO0;this.Text.R(A.acf.Info);},_className:"Application::HeaderDeviceInfoMenu"
};C.ANL={FactoryResetScope:null,Ub:null,Wk:null,Ud:null,Init:function(aArg){this.
Bb(this.Ub);A.pe([this,this.MH],this);},Bj8:function(G){switch(this.FactoryResetScope.
C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).A5(33,true
,A.jV,0,[this,this.BfJ]);break;case 0:A._GetAutoObject(A.Device.Device).A5(7,true
,A.jV,0,[this,this.BfJ]);break;default:A.ab5("%s%i",Bs$,this.FactoryResetScope.Q
);}},BfJ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.Device.Device).
Boc();A._GetAutoObject(A.Device.Device).A5(8,true,A.jV,0,null);A._GetAutoObject(
C.A9).Cd(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bob();A._GetAutoObject(
A.Device.Device).ArN(0);A._GetAutoObject(A.Device.Device).ArO(0);A._GetAutoObject(
A.Device.Device).ArP(0);A._GetAutoObject(A.Device.Device).ArT(0);A._GetAutoObject(
A.Device.Device).ArU(0);A._GetAutoObject(A.Device.Device).ArV(0);A._GetAutoObject(
A.Device.Device).Uj(5);A._GetAutoObject(A.Device.Device).Awy(0);A._GetAutoObject(
A.Device.Device).Awz(0);A._GetAutoObject(A.Device.Device).AwA(0);A._GetAutoObject(
A.Device.Device).AwS(1);A._GetAutoObject(A.Device.Device).AwT(1);A._GetAutoObject(
A.Device.Device).AwU(1);A._GetAutoObject(A.Device.Device).A5(34,true,A.jV,0,null
);}break;default:A.ab5("%s%e",AH$,As.Id);}},_Init:function(aArg){C.Ei._Init.call(
this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={I:this},0);C.Nb.
_Init.call(this.Ub={I:this},0);C.Nb._Init.call(this.Wk={I:this},0);C.BU._Init.call(
this.Ud={I:this},0);this.__proto__=C.ANL;var B;this.Dr(C.AOY);this.Ub.H(IU);this.
Ub.Aj(true);this.Ub.T(A.aaR(A.acf.ACm));this.Ub.Bi(false);this.Ub.Ne(93);this.Wk.
H(Qa);this.Wk.Aj(true);this.Wk.T(A.aaR(A.acf.AdS));this.Wk.Bi(true);this.Wk.Ne(92
);this.Ud.H(Bal);this.Ud.Aj(true);this.Ud.Blt(true);this.Ud.T(A.aaR(A.acf.A6b));
this.Ud.Bi(false);this.J(this.Ub,-1);this.J(this.Wk,-1);this.J(this.Ud,-1);this.
Ub.AR=[B=this.Ub,B.Nh];this.Wk.AR=[B=this.Wk,B.Nh];this.Ud.AR=[this,this.Bj8];this.
Ud.At([B=this.FactoryResetScope,B.B_,B.B$]);this.Ud.CK(this.FactoryResetScope);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.FactoryResetScope._Done();
this.Ub._Done();this.Wk._Done();this.Ud._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.FactoryResetScope._ReInit();this.Ub._ReInit(
);this.Wk._ReInit();this.Ud._ReInit();this.Ub.T(A.aaR(A.acf.ACm));this.Wk.T(A.aaR(
A.acf.AdS));this.Ud.T(A.aaR(A.acf.A6b));},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ub
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ud)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AOY={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AOY;this.
Text.R(A.aaR(A.acf.ACn));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ACn));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.AqX={QT:null,Wb:null,_Init:function(aArg){C.TU._Init.call(this,aArg);C.CH._Init.
call(this.QT={I:this},0);C.CH._Init.call(this.Wb={I:this},0);this.__proto__=C.AqX;
this.QT.H(Bta);this.QT.R(A.aaR(A.acf.A_9));this.QT.A6(0x12);this.QT.L(A.jb.Text);
this.Wb.H(Baf);this.Wb.R(A.aaR(A.acf.An2));this.Wb.L(A.jb.Text);this.J(this.QT,0
);this.J(this.Wb,0);this.QT.S(A.aaL(A.fl.Af));this.QT.A2(A.aaL(A.fl.Ak));this.QT.
Cu(A.aaL(A.fl.Bh));this.Wb.S(A.aaL(A.fl.Af));this.Wb.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TU;this.QT._Done();this.Wb._Done();C.TU._Done.call(this
);},_ReInit:function(){C.TU._ReInit.call(this);this.QT._ReInit();this.Wb._ReInit(
);this.QT.R(A.aaR(A.acf.A_9));this.Wb.R(A.aaR(A.acf.An2));this.QT.S(A.aaL(A.fl.Af
));this.QT.A2(A.aaL(A.fl.Ak));this.QT.Cu(A.aaL(A.fl.Bh));this.Wb.S(A.aaL(A.fl.Af
));this.Wb.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TU._Mark.call(this,D);
if((B=this.QT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wb)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.APu={QU:
null,_Init:function(aArg){C.TU._Init.call(this,aArg);C.CH._Init.call(this.QU={I:
this},0);this.__proto__=C.APu;this.QU.H(Btb);this.QU.R(A.aaR(A.acf.Uf));this.QU.
A6(0x12);this.QU.L(A.jb.Text);this.J(this.QU,0);this.QU.S(A.aaL(A.fl.Af));this.QU.
A2(A.aaL(A.fl.Ak));this.QU.Cu(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=
C.TU;this.QU._Done();C.TU._Done.call(this);},_ReInit:function(){C.TU._ReInit.call(
this);this.QU._ReInit();this.QU.R(A.aaR(A.acf.Uf));this.QU.S(A.aaL(A.fl.Af));this.
QU.A2(A.aaL(A.fl.Ak));this.QU.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TU.
_Mark.call(this,D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Aqq={IK:null,Aby:null,Ea:null,Bl:function(aSize){C.M1.Bl.call(this,aSize);this.
IK.H([this.Gy.M[2],0,this.Gy.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([
this.IK.M[2]-1,0,this.IK.M[2]+1,aSize[1]]);this.Aby.H([this.IK.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.Aby.L(this.Gy.AQ);this.IK.L(this.
Gy.AQ);},Cf:function(Ad){C.M1.Cf.call(this,Ad);if(!this.AX)return;this.Hr=Ad;if(
!!this.AX){var Ib=this.AX.AmQ(Ad,14);var AtN=this.AX.AOH(Ad,7);this.IK.Ax(A._GetAutoObject(
A.Device.Converter).AmP(AtN));this.Aby.Ax(A._GetAutoObject(A.Device.Converter).A4R(
Ib));this.Am();}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Ap._Init.
call(this.IK={I:this},0);A.acg.Ap._Init.call(this.Aby={I:this},0);A.acg.AK._Init.
call(this.Ea={I:this},0);this.__proto__=C.Aqq;this.IK.H(Bah);this.IK.L(A.jb.Text
);this.Aby.H(Btc);this.Aby.L(A.jb.Text);this.Ea.H(Btd);this.Ea.L(A.jb.Bc);this.J(
this.IK,0);this.J(this.Aby,0);this.J(this.Ea,0);this.IK.Ax(A.aaL(A.aci.TL));this.
Aby.Ax(A.aaL(A.aci.TL));},_Done:function(){this.__proto__=C.M1;this.IK._Done();this.
Aby._Done();this.Ea._Done();C.M1._Done.call(this);},_ReInit:function(){C.M1._ReInit.
call(this);this.IK._ReInit();this.Aby._ReInit();this.Ea._ReInit();},_Mark:function(
D){var B;C.M1._Mark.call(this,D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aby)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AM3={ZM:null
,Bl:function(aSize){C.M1.Bl.call(this,aSize);this.ZM.H([this.Gy.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.ZM.L(this.Gy.AQ);},Cf:function(
Ad){C.M1.Cf.call(this,Ad);if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Kc=this.
AX.KN(Ad,26);if(Kc>0)this.ZM.R(A.ab2(Kc.toFixed(),5));else this.ZM.R(Ro);this.Am(
);}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZM={I:this},0);this.__proto__=C.AM3;this.ZM.H(Bte);this.J(this.ZM,0);this.ZM.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M1;this.ZM._Done();C.M1._Done.
call(this);},_ReInit:function(){C.M1._ReInit.call(this);this.ZM._ReInit();this.ZM.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M1._Mark.call(this,D);if((B=this.ZM
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARG={Ap:null,Ai:function(Ae){C.AeS.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeS._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ARG;this.Text.H(Btf);this.Ap.H(AZP);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Afc));},_Done:function(){this.__proto__=C.AeS;this.Ap._Done(
);C.AeS._Done.call(this);},_ReInit:function(){C.AeS._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeS._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yo={Text:
null,Dd:null,AP:null,Gv:null,D2:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Nm],[B=A._GetAutoObject(A.Device.Device),B.AEq,B.AIG],0);A.zV([this,this.Nm
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nm],this);},De:function(
E){C.BQ.De.call(this,E);this.Dd.L(E);this.Text.L(E);this.Gv.L(E);this.D2.Zo(E);}
,Wy:function(E){C.BQ.Wy.call(this,E);this.D2.CT(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B9().toFixed());},Nm:function(s){this.DX(s);}
,_Init:function(aArg){C.BQ._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gv={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C5._Init.call(this.A$={I:this},0);this.__proto__=C.Yo;this.Text.H(Btg);this.
Text.A6(0x11);this.Dd.H(Ata);this.AP.DC(Bab);this.AP.DM(Bac);this.AP.L(A.jb.Bc);
this.Gv.H(Bth);this.Gv.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(Bti);this.D2.Zo(A.jb.
Bm);this.D2.CT(A.jb.Rg);this.D2.Hm(2);this.A$.DC(Btj);this.A$.DM(Btk);this.A$.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Dd,0);this.J(this.AP,0);this.J(this.Gv,
0);this.J(this.D2,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Dd.Ax(A.aaL(A.ach.AjS));this.Gv.Ax(A.aaL(A.ach.Gv));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Text.
_Done();this.Dd._Done();this.AP._Done();this.Gv._Done();this.D2._Done();this.A$.
_Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.
Text._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Gv._ReInit();this.D2._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acm={FJ:null
,JV:null,JU:null,AkJ:null,AkK:null,Q6:null,QF:null,Abx:null,V1:null,PJ:null,PK:null
,Sx:null,Gw:null,Gx:null,Jv:null,AlI:0,AlN:0,D7:0,DW:0,A8:0,Bl:function(aSize){var
B;this.Dz.H([this.Hw.M[2]-10,this.Hw.M[1],this.H4.M[0]+10,this.Hw.M[3]]);this.Dz.
AFc((B=this.Dz.M)[2]-B[0]);this.Dz.HH(this.Dz.Gr,true,null,null);},Ai:function(Ae
){var B;C.BU.Ai.call(this,Ae);var Fu=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A8===1)||(this.A8===2)){var A02=this.A10(this.A8);if(!!
A02){this.Abx.Z(true);this.Abx.H(A02.M);this.Abx.L(this.V.AQ);this.V1.Z(true);this.
V1.H(A02.M);}else{this.Abx.Z(false);this.V1.Z(false);}this.Hw.Z(false);this.H4.Z(
false);}else{this.Abx.Z(false);this.V1.Z(false);this.Hw.Z(Fu||GE);this.H4.Z(Fu||
GE);}},Qr:function(G){if(!!this.Q){if(this.FG===1)A.pe([this,this.U$],this);else
if(this.FG===4)A.pe([this,this.A0j],this);else if(this.FG===5)A.pe([this,this.A0h
],this);}C.BU.Qr.call(this,G);},Kb:function(G){switch(this.A8){case 0:C.BU.Kb.call(
this,G);break;case 2:break;default:this.Adv(this);}},J8:function(G){switch(this.
A8){case 0:C.BU.J8.call(this,G);break;default:this.Aip(this);}},A1v:function(G){
var F;if(this.A8===1){var BO=this.D7;this.D7=this.D7-10;if(this.D7<this.AlN)this.
D7=this.AlN;if(this.D7<A._GetAutoObject(A.Device.Device).AcD)this.D7=A._GetAutoObject(
A.Device.Device).AcD;if(this.DW!==BO){if(!!this.JV)(F=this.JV,F[2].call(F[0],this.
D7));A.abo(this.JV,0);}}if(this.A8===2){var BO=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JU)(F=this.JU,F[2].call(F[
0],this.DW));A.abo(this.JU,0);}}this.DJ(this);this.Am();},A0h:function(s){this.A1v(
s);},AlY:function(G){this.FG=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A0h],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A17:function(G){var F;if(this.A8===1){var
BO=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO
){if(!!this.JV)(F=this.JV,F[2].call(F[0],this.D7));A.abo(this.JV,0);}}if(this.A8===
2){var BO=this.DW;this.DW=this.DW+10;if(this.DW>this.AlI)this.DW=this.AlI;if(this.
DW!==BO){if(!!this.JU)(F=this.JU,F[2].call(F[0],this.DW));A.abo(this.JU,0);}}this.
DJ(this);this.Am();},A0j:function(s){this.A17(s);},AlZ:function(G){this.FG=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A0j],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},U$:function(G){this.Ew(this.A8+1);},Adv:function(G){this.FG=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.U$],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GH:function(G){},AfD:function(s){this.GH(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aey));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U$];}break;case 2:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmW
));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
Aip];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FJ.AkN((F=this.N,F[1].call(F[
0])));}},A92:function(E){if(A.aaZ(this.JV,E))return;if(!!this.JV)A.z$([this,this.
A3v],this.JV,0);this.JV=E;if(!!this.JV)A.zX([this,this.A3v],this.JV,0);A.pe([this
,this.A3v],this);},A3v:function(G){var F;this.D7=(F=this.JV,F[1].call(F[0]));this.
Am();},A91:function(E){if(A.aaZ(this.JU,E))return;if(!!this.JU)A.z$([this,this.A3u
],this.JU,0);this.JU=E;if(!!this.JU)A.zX([this,this.A3u],this.JU,0);A.pe([this,this.
A3u],this);},A3u:function(G){var F;this.DW=(F=this.JU,F[1].call(F[0]));this.Am();
},FU:function(G){this.Ew(1);},Hd:function(G){this.Ew(0);},Ew:function(EN){var F;
if(!this.A8)this.FJ.Ajx((F=this.N,F[1].call(F[0])));this.A8=EN;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.Bw=!!this.A8;this.
Am();},Aip:function(G){if(this.A8>1)this.Ew(this.A8-1);},A3I:function(G){},AyO:function(
s){this.A3I(s);},A3h:function(G){},Bbo:function(s){this.A3h(s);},A10:function(Atm
){return null;},_Init:function(aArg){C.BU._Init.call(this,aArg);A.acg.AK._Init.call(
this.AkJ={I:this},0);A.acg.AK._Init.call(this.AkK={I:this},0);A.acg.AK._Init.call(
this.Q6={I:this},0);A.acg.Ap._Init.call(this.QF={I:this},0);A.acg.AK._Init.call(
this.Abx={I:this},0);A.acg.BT._Init.call(this.V1={I:this},0);A.acg.Text._Init.call(
this.PJ={I:this},0);A.acg.Text._Init.call(this.PK={I:this},0);A.acg.Text._Init.call(
this.Sx={I:this},0);A.Core.BK._Init.call(this.Gw={I:this},0);A.Core.BK._Init.call(
this.Gx={I:this},0);A.Core.BK._Init.call(this.Jv={I:this},0);this.__proto__=C.Acm;
this.H(AfB);this.T(A.aaR(A.acf.Ark));this.Background.H(AfB);this.V.H(BD);this.V.
R(A.aaR(A.acf.AGR));this.V.A6(0x12);this.AkJ.H(Btl);this.AkJ.L(A.jb.Gh);this.AkK.
H(Btm);this.AkK.L(A.jb.H8);this.Q6.H(Btn);this.Q6.L(A.jb.E1);this.QF.H(Bto);this.
Abx.H(Btp);this.V1.H(Btq);this.V1.Ng(3);this.V1.L(A.jb.AV);this.V1.Z(false);this.
PJ.H(Btr);this.PJ.Hm(8);this.PJ.I_(true);this.PJ.A6(0x11);this.PJ.L(0xFF000000);
this.PK.H(Bts);this.PK.Hm(8);this.PK.I_(true);this.PK.A6(0x11);this.PK.L(0xFF000000
);this.Sx.H(Btt);this.Sx.I_(false);this.Sx.A6(0x12);this.Sx.L(0xFF000000);this.Gw.
Filter=5;this.Gw.Bw=false;this.Gx.Filter=4;this.Gx.Bw=false;this.Jv.Filter=1;this.
JX(this.V,-1);this.JX(this.Dz,-2);this.J(this.AkJ,-1);this.J(this.AkK,-1);this.J(
this.Q6,-1);this.J(this.QF,-1);this.J(this.Abx,-1);this.J(this.V1,-1);this.J(this.
PJ,-1);this.J(this.PK,0);this.J(this.Sx,0);this.QF.Ax(A.aaL(A.ach.ADs));this.PJ.
S(A.aaL(A.fl.Af));this.PK.S(A.aaL(A.fl.Af));this.Sx.S(A.aaL(A.fl.Ak));this.Gw.BL=[
this,this.AlY];this.Gw.D1=[this,this.A0h];this.Gx.BL=[this,this.AlZ];this.Gx.D1=[
this,this.A0j];this.Jv.BL=[this,this.Adv];this.FJ=A._NewObject(C.Aer,0);},_Done:
function(){this.__proto__=C.BU;this.AkJ._Done();this.AkK._Done();this.Q6._Done();
this.QF._Done();this.Abx._Done();this.V1._Done();this.PJ._Done();this.PK._Done();
this.Sx._Done();this.Gw._Done();this.Gx._Done();this.Jv._Done();C.BU._Done.call(
this);},_ReInit:function(){C.BU._ReInit.call(this);this.AkJ._ReInit();this.AkK._ReInit(
);this.Q6._ReInit();this.QF._ReInit();this.Abx._ReInit();this.V1._ReInit();this.
PJ._ReInit();this.PK._ReInit();this.Sx._ReInit();this.Gw._ReInit();this.Gx._ReInit(
);this.Jv._ReInit();this.T(A.aaR(A.acf.Ark));this.V.R(A.aaR(A.acf.AGR));this.PJ.
S(A.aaL(A.fl.Af));this.PK.S(A.aaL(A.fl.Af));this.Sx.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BU._Mark.call(this,D);if((B=this.FJ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JU)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jv)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FI={XR:null,Aco:
null,An6:0,An7:0,Du:function(){if(!this.XR)return 0;return this.XR.MD;},C7:function(
aIndex){if(!this.XR||(aIndex>=this.XR.MD))return-1;return this.XR.Get(aIndex);},
Gj:function(aIndex){return this.A6t().BR(this.C7(aIndex));},DZ:function(A_){if(!
this.XR)return-1;return this.XR.Avl(A_);},H3:function(){if(!this.XR)return-1;return this.
XR.H3();},AnE:function(E){if(this.An6===E)return;this.An6=E;A.pe([this,this.AVm]
,this);},A0c:function(Aq){this.AnE(Aq);},AnF:function(E){if(this.An7===E)return;
this.An7=E;A.pe([this,this.AVn],this);},A0d:function(Aq){this.AnF(Aq);},AVn:function(
G){A.abo([this,this.ASG,this.A0d],0);},AVm:function(G){A.abo([this,this.ASF,this.
A0c],0);},A6t:function(){return this.Aco;},ASF:function(){return this.An6;},ASG:
function(){return this.An7;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Aco={I:this},0);this.__proto__=C.FI;},_Done:function(
){this.__proto__=C.AC;this.Aco._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Aco._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aco)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMx={Init:
function(aArg){A.zV([this,this.BeV],A._GetAutoObject(A.Device.Helper).UE,0);A.zV([
this,this.BeT],A._GetAutoObject(A.Device.Helper).UD,0);this.BeV(this);this.BeT(this
);},At:function(E){C.FI.At.call(this,E);this.AnF(A._GetAutoObject(A.Device.Helper
).UE.Get(this.DZ(E)));this.AnE(A._GetAutoObject(A.Device.Helper).UD.Get(this.DZ(
E)));},AnE:function(E){if(this.An6===E)return;C.FI.AnE.call(this,E);A._GetAutoObject(
A.Device.Helper).UD.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UD.
Ch();},AnF:function(E){if(this.An7===E)return;C.FI.AnF.call(this,E);A._GetAutoObject(
A.Device.Helper).UE.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UE.
Ch();},BeV:function(G){this.An7=A._GetAutoObject(A.Device.Helper).UE.Get(this.DZ(
this.Q));A.pe([this,this.AVn],this);},BeT:function(G){this.An6=A._GetAutoObject(
A.Device.Helper).UD.Get(this.DZ(this.Q));A.pe([this,this.AVm],this);},_Init:function(
aArg){C.FI._Init.call(this,aArg);this.__proto__=C.AMx;this.XR=A._GetAutoObject(A.
Device.Helper).AdY;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMy={AgB:null,ABQ:0,ABP:0,Init:function(aArg){A.zV([this,this.Be8],A._GetAutoObject(
A.Device.Helper).Afw,0);A.zV([this,this.Be6],A._GetAutoObject(A.Device.Helper).Afv
,0);A.zV([this,this.Be4],A._GetAutoObject(A.Device.Helper).Afu,0);A.zV([this,this.
Be_],A._GetAutoObject(A.Device.Helper).Afx,0);this.Be8(this);this.Be6(this);this.
Be4(this);this.Be_(this);},At:function(E){C.FI.At.call(this,E);this.AnF(A._GetAutoObject(
A.Device.Helper).Afw.Get(this.DZ(E)));this.AnE(A._GetAutoObject(A.Device.Helper).
Afv.Get(this.DZ(E)));this.ASK(A._GetAutoObject(A.Device.Helper).Afu.Get(this.DZ(
E)));this.ASM(A._GetAutoObject(A.Device.Helper).Afx.Get(this.DZ(E)));},AnE:function(
E){if(this.An6===E)return;C.FI.AnE.call(this,E);A._GetAutoObject(A.Device.Helper
).Afv.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afv.Ch();},AnF:function(
E){if(this.An7===E)return;C.FI.AnF.call(this,E);A._GetAutoObject(A.Device.Helper
).Afw.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afw.Ch();},A6t:function(
){return this.AgB;},Be8:function(G){this.An7=A._GetAutoObject(A.Device.Helper).Afw.
Get(this.DZ(this.Q));A.pe([this,this.AVn],this);},Be6:function(G){this.An6=A._GetAutoObject(
A.Device.Helper).Afv.Get(this.DZ(this.Q));A.pe([this,this.AVm],this);},ASM:function(
E){if(this.ABQ===E)return;this.ABQ=E;A._GetAutoObject(A.Device.Helper).Afx.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afx.Ch();A.pe([this,this.A$E],this
);},ASK:function(E){if(this.ABP===E)return;this.ABP=E;A._GetAutoObject(A.Device.
Helper).Afu.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afu.Ch();A.
pe([this,this.A$D],this);},A$D:function(G){A.abo([this,this.A8e,this.ASK],0);},A$E:
function(G){A.abo([this,this.A8f,this.ASM],0);},Be4:function(G){this.ABP=A._GetAutoObject(
A.Device.Helper).Afu.Get(this.DZ(this.Q));A.pe([this,this.A$D],this);},Be_:function(
G){this.ABQ=A._GetAutoObject(A.Device.Helper).Afx.Get(this.DZ(this.Q));A.pe([this
,this.A$E],this);},A8f:function(){return this.ABQ;},A8e:function(){return this.ABP;
},_Init:function(aArg){C.FI._Init.call(this,aArg);A.Device.AgB._Init.call(this.AgB={
I:this},0);this.__proto__=C.AMy;this.XR=A._GetAutoObject(A.Device.Helper).AgC;this.
Init(aArg);},_Done:function(){this.__proto__=C.FI;this.AgB._Done();C.FI._Done.call(
this);},_ReInit:function(){C.FI._ReInit.call(this);this.AgB._ReInit();},_Mark:function(
D){var B;C.FI._Mark.call(this,D);if((B=this.AgB)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMe={RN:null,Init:function(
aArg){var B;A.zX([this,this.AiM],[B=this.AnimalType,B.B_,B.B$],0);A.pe([this,this.
AiM],this);this.Bb(this.RN);},Bk:function(E){C.I3.Bk.call(this,E);this.RN.Bx(this.
Jq.AM);},AiM:function(G){A._GetAutoObject(A.Device.Device).AwB(this.AnimalType.Q
);},_Init:function(aArg){C.I3._Init.call(this,aArg);C.TF._Init.call(this.RN={I:this
},0);this.__proto__=C.AMe;var B;this.Jq.Ar(false);this.Jq.Aj(false);this.Jq.Z(false
);this.RN.H(AIC);this.RN.Aj(true);this.RN.Nc(14);this.RN.Ahs(0);this.RN.ON(0);this.
J(this.RN,-4);this.RN.AR=[this,this.AAo];this.RN.At([B=this.AnimalType,B.B_,B.B$
]);this.RN.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I3;this.RN._Done();C.I3._Done.call(this);},_ReInit:function(){C.I3._ReInit.call(
this);this.RN._ReInit();},_Mark:function(D){var B;C.I3._Mark.call(this,D);if((B=
this.RN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TF={Filter:null,Eq:0,TableId:0,Operator:1,CP:function(){var F;this.Tq((F=this.
Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));},Bl:function(aSize){var B;C.
BU.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hw.H(AhT
);this.H4.H([aSize[0]-40,40,aSize[0],80]);this.Dz.H([this.Hw.M[2]-5,this.Hw.M[1]
,this.H4.M[0]+5,this.Hw.M[3]]);this.Dz.AFc((B=this.Dz.M)[2]-B[0]);this.Dz.HH(this.
Dz.Gr,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb
],E,0);A.pe([this,this.Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tq((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.
Operator));else this.Tq(null);},Ahs:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mb],this);},Nc:function(E){if(this.Eq===E)return;this.
Eq=E;A.pe([this,this.Mb],this);},Tq:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).AmR(this.TableId,this.Eq));this.Am();},ON:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mb],this);},_Init:function(aArg){C.BU._Init.
call(this,aArg);this.__proto__=C.TF;this.H(KY);this.V.A6(0x11);this.V.Cu(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BU._ReInit.call(this);this.V.Cu(A.aaL(A.fl.Bh));this.
CP();},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ARP={Gd:null,MP:null,DY:null,Y:null,Ef:null,Cn:null,CG:null,C$:null,Gl:null,
Ee:null,C9:null,BY:null,Ay:null,Breed:null,Jg:null,AnimalType:null,Gender:null,Pm:
null,KX:null,Je:null,YD:null,Ame:null,KI:0,M2:0,A3Q:false,Init:function(aArg){var
B;A.zX([this,this.BAo],[B=A._GetAutoObject(A.Device.Device),B.AEv,B.AIK],0);A.zV([
this,this.AtZ],this.MP,0);A.zX([this,this.AtZ],[B=A._GetAutoObject(A.Device.Device
),B.Awi,B.AyJ],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEv
,B.AIK],0);A.zV([this,this.GH],this.MP,0);A.zX([this,this.AiM],this.BY.Q,0);A.pe([
this,this.AiM],this);A.pe([this,this.Bew],this);A.pe([this,this.AtZ],this);A.pe([
this,this.GH],this);A.pe([this,this.A3i],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALj],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArG(A.jb.E1);else
this.Ef.ArG(A.jb.Gh);if(A._GetAutoObject(A.Device.Device).AeM){if(!!(F=this.Cn.Dl
,F[1].call(F[0])))this.Cn.ArG(A.jb.E1);else this.Cn.ArG(A.jb.Gh);}else this.Cn.ArG(
A.jb.Rg);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},LN:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lg())A._GetAutoObject(A.Device.Device
).A5(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gp();A._GetAutoObject(A.Device.Helper).Aqe(A._GetAutoObject(A.
Device.Helper).W);this.Apx();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFj(0);},E4:function(G){C.AB.E4.call(this,G);this.Je.Ar(false);
A._GetAutoObject(A.Device.Device).Uq(false);},Ev:function(G){A._GetAutoObject(A.
Device.Helper).W.E5();A._GetAutoObject(C.A9).Fy();},Fj:function(G){var B;this.Ay.
Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.
Y.Br[1]);},AtZ:function(G){var F,CA;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALj(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aej(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A5(21,true,A._GetAutoObject(A.Device.Converter
).Rh((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A29]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A28],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeM)this.JG(this.Cn);}var BdM=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeM||!!(CA=this.Cn.Dl,CA[1].call(CA[0])));if(this.MP.AOC()>0){if((
this.AV===this.Cn)&&BdM)this.Bb(this.Y.TN(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeM&&(this.AV===this.Cn))&&!!(F=this.Cn.Dl,F[1].call(F[0])))this.
JG(this.Ef);if(BdM)this.Bcz(this);},Adt:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},AiY:function(){var F;this.Gd.Ch(A._GetAutoObject(A.Device.Device).An);
if(this.MP.NV(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lg())A._GetAutoObject(
A.Device.Device).A5(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),
0,null);else{var L7=A._GetAutoObject(A.Device.Device).An.LS(0,this.Gd.Id);A._GetAutoObject(
A.Device.Device).SP(L7);var B0=A._NewObject(A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(
this.Gd.Id);B0.OnSetBodyWeight(this.KI);B0.OnSetTimestamp(this.Gd.DateOfBirth);B0.
Ch(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MP.NV(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var L7=A._GetAutoObject(A.Device.
Device).An.LS(0,this.Gd.Id);A._GetAutoObject(A.Device.Device).SP(L7);var B0=A._NewObject(
A.Device.Rating,0);B0.Gp();B0.OnSetAnimalId(this.Gd.Id);B0.OnSetBodyWeight(this.
M2);B0.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B0.Ch(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WA(65280);this.Je.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFj(F.AvT+1));this.A3Q=true;A.pe([this,
this.ALj],this);this.Apx();},GH:function(G){this.Cn.ATk(A._GetAutoObject(A.Device.
Device).AeM);A._GetAutoObject(A.Device.Helper).JY(this.BY,this.MP.NV(14));A._GetAutoObject(
A.Device.Helper).JY(this.C9,this.MP.NV(23));A._GetAutoObject(A.Device.Helper).JY(
this.CG,this.MP.NV(32));A._GetAutoObject(A.Device.Helper).JY(this.Ee,this.MP.NV(
18));A._GetAutoObject(A.Device.Helper).JY(this.C$,this.MP.NV(7));A._GetAutoObject(
A.Device.Helper).JY(this.Gl,this.MP.NV(34));this.YD.Z(!this.MP.AOC());var O;var Aa=
null;var Apd=this.AV;for(O=0;O<this.MP.AfM.NQ();O++){Aa=this.Bzh(this.MP.AfM.OD(
O));if(!!Aa)this.ZB(Aa);}this.JG(Apd);A._GetAutoObject(A.Device.Helper).ANo(this.
Y);A.pe([this,this.A3i],this);this.Am();},AeW:function(E){if(this.KI===E)return;
this.KI=E;A.abo([this,this.Av6,this.AeW],0);},Ahn:function(E){if(this.M2===E)return;
this.M2=E;A.abo([this,this.Anm,this.Ahn],0);},Bcz:function(G){this.Gd.Gp();A._GetAutoObject(
A.Device.Helper).Aqe(this.Gd);this.Gd.Q4(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gd.Nd(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gd.SI(A._GetAutoObject(
A.Device.Helper).AMf(0,this.Gd));this.Gd.Ae4(true);if(this.MP.NV(14))this.Gd.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MP.NV(32))this.Gd.NZ(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MP.NV(7))this.Gd.JS(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MP.NV(34))this.Gd.Nf(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Aln=A._GetAutoObject(A.Device.Helper).A1j(this.Gd,0,A._GetAutoObject(
A.Device.Device).An);if(!Aln)this.AiY();else A._GetAutoObject(A.Device.Helper).AKc(
this.Gd,Aln,0,0,[this,this.ApD]);},Apx:function(){A._GetAutoObject(A.Device.Helper
).W.Nd(0);if(A._GetAutoObject(A.Device.Device).AeM)A._GetAutoObject(A.Device.Helper
).W.Q4(0);this.AeW(0);this.Ahn(0);this.JG(this.Ef);this.Am();},ApD:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.Apx();break;case 43:this.JG(this.Ef);break;case 41:break;
default:A.ab5("%s%e",As6,As.Id);}},JG:function(Ag){this.Bb(Ag);this.Y.HH(Ag,true
,null,null);this.Y.Vw(null,null);},Bew:function(G){this.Ee.Ahq(A._GetAutoObject(
A.Device.Helper).W.AhR(1));this.AtZ(this);},AiM:function(G){this.C9.Ahq(A._GetAutoObject(
A.Device.Helper).Abn(this.AnimalType.Q));},A3i:function(G){var B;var BBv=this.Ay.
Background.Fo();var width=(BBv?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xq=this.Y.TN(null,0x401);while(!!Xq&&(((B=Xq)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OV.isPrototypeOf(Xq)?Xq:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xq=this.Y.TN(Xq,0x1);}},Bzh:function(Aae){var Aa=null;switch(Aae){case 14:Aa=
this.BY;break;case 32:Aa=this.CG;break;case 23:Aa=this.C9;break;case 7:Aa=this.C$;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gl;break;default:A.ab5("%s%e",Btu
,Aae);}return Aa;},BAo:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeM
)A._GetAutoObject(A.Device.Helper).W.Q4(0);else if(!(F=this.Cn.Dl,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q4(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmD(A._GetAutoObject(A.Device.Device).AdQ));this.
AtZ(this);},ALj:function(G){var B;var AKf=A.jV;var Ay7=A.jb.CJ;var BcQ=A.jb.AV;this.
Ame.AxE(this);if(this.A3Q){this.A3Q=false;AKf=A._GetAutoObject(A.Device.Helper).
Nk(A.aaR(A.acf.Bo$),P$,A._GetAutoObject(A.Device.Converter).Rh(this.Gd.NaisId));
A.pe([B=this.Ame,B.StartTimer],this);Ay7=A.jb.E1;BcQ=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKf=A.aaR(A.acf.Boo);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKf=A.aaR(A.
acf.Bon);this.YD.T(AKf);this.YD.BlE(Ay7);this.YD.BlF(BcQ);},A29:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajy();else if(As.Id===105){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajy();else if(As.PopupState===7){A._GetAutoObject(C.A9).Cd(76);
A._GetAutoObject(A.Device.Device).Ajy();}}}else A._GetAutoObject(A.Device.Device
).Ajy();},A28:function(G){A._GetAutoObject(A.Device.Device).AuM();},DJ:function(
G){var B;if(!this.MP.AOC()){this.N.Ld.Dk(255);if(this.AV===this.Ef){this.N.C2(A.
aaL(A.ach.Edit));this.N.Cl=[B=this.Ef,B.FU];}else if(this.AV===this.Cn){this.N.C2(
A.aaL(A.ach.Edit));this.N.Cl=[B=this.Cn,B.FU];}else{this.N.C2(null);this.N.Cl=null;
}}else{this.N.C2(A.aaL(A.ach.AmY));if((this.Ef.Aqr===A.jb.Gh)||(this.Cn.Aqr===A.
jb.Gh)){this.N.Ld.Dk(100);this.N.Cl=null;}else{this.N.Ld.Dk(255);this.N.Cl=[this
,this.Bcz];}}},Av6:function(){return this.KI;},Anm:function(){return this.M2;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUt._Init.call(this.Ef={I:this},0);C.
AUp._Init.call(this.Cn={I:this},0);C.Axt._Init.call(this.CG={I:this},0);C.BU._Init.
call(this.C$={I:this},0);C.Asw._Init.call(this.Gl={I:this},0);C.AkR._Init.call(this.
Ee={I:this},0);C.AkR._Init.call(this.C9={I:this},0);C.BU._Init.call(this.BY={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UO._Init.call(this.Jg={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M0._Init.call(this.
Pm={I:this},0);A.Device.KX._Init.call(this.KX={I:this},0);A.Device.TG._Init.call(
this.Je={I:this},0);C.AUZ._Init.call(this.YD={I:this},0);A.Core.Timer._Init.call(
this.Ame={I:this},0);this.__proto__=C.ARP;var B;this.Background.L(A.jb.CS);this.
N.Z(true);this.Ej.Ar(false);this.Dr(C.APi);this.DY.AZ(0x3F);this.DY.H(Fe);this.DY.
L(A.jb.CJ);this.Y.H(Fe);this.Y.JR(9);this.Ef.H(AIC);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACx));this.Ef.ATk(true);this.Ef.AFB(false);this.Cn.H(Bal);this.Cn.Aj(true
);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.ATk(true);this.Cn.AFw(true);this.CG.H(As5);
this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.C$.H(As5);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afm));this.Gl.H(Bam);this.Gl.Aj(true);this.Gl.T(A.aaR(A.acf.Jg)
);this.Ee.H(Btv);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M2));this.Ee.F$(1000);this.
Ee.EU(999000);this.Ee.Ahq(A._GetAutoObject(A.Device.Helper).Abn(this.AnimalType.
Q));this.C9.H(Bam);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI));this.C9.F$(1000);
this.C9.EU(99000);this.C9.Ahq(A._GetAutoObject(A.Device.Helper).Abn(this.AnimalType.
Q));this.BY.H(As4);this.BY.Aj(true);this.BY.T(A.aaR(A.acf.Afr));this.Ay.H(It);this.
Je.B1=false;this.Je.Cw=true;this.Je.HM(1);this.Je.Fp(1000);this.Je.Um(0);this.YD.
H(Aac);this.YD.Aj(true);this.YD.ArG(A.jb.Text);this.Ame.PR(3000);this.J(this.DY,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CG,0);this.J(
this.C$,0);this.J(this.Gl,0);this.J(this.Ee,0);this.J(this.C9,0);this.J(this.BY,
0);this.J(this.Ay,0);this.J(this.YD,0);this.N.CE=[this,this.Ev];this.N.Cg=[this,
this.Adt];this.N.C1(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AeA));this.Y.El=[this
,this.Fj];this.Ef.Gq([this,this.D_,this.GQ]);this.Ef.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Anp,B.Nd]);this.Ef.AE9([this,this.AtZ]);this.Ef.AS9([this,this.A28]);
this.Ef.AS_([this,this.A29]);this.Cn.Gq([this,this.D_,this.GQ]);this.Cn.Ab4([B=A.
_GetAutoObject(A.Device.Helper).W,B.Av9,B.Q4]);this.Cn.OF=[this,this.Bew];this.Cn.
AS9([this,this.A28]);this.Cn.AS_([this,this.A29]);this.CG.Gq([this,this.D_,this.
GQ]);this.CG.LX([B=this.CG,B.FU]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.
Breed,B.B_,B.B$]);this.CG.CK(this.Breed);this.CG.Ant(this.Pm);this.C$.At([B=this.
Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.Gl.Gq([this,this.D_,this.GQ]);this.
Gl.LX([B=this.Gl,B.FU]);this.Gl.L0(A.aaL(A.ach.Edit));this.Gl.At([B=this.Jg,B.B_
,B.B$]);this.Gl.CK(this.Jg);this.Gl.Ant(this.KX);this.Ee.At([this,this.Anm,this.
Ahn]);this.C9.At([this,this.Av6,this.AeW]);this.BY.At([B=this.AnimalType,B.B_,B.
B$]);this.BY.CK(this.AnimalType);this.Ay.Bm0([this,this.A3i]);this.Breed.LY(A._GetAutoObject(
A.Device.Helper).W);this.Jg.LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LY(A._GetAutoObject(A.Device.Helper).W);this.Gender.LY(A._GetAutoObject(A.Device.
Helper).W);this.Gd=A._NewObject(A.Device.Animal,0);this.MP=A._GetAutoObject(C.Amm
);this.Je.Q=[B=A._GetAutoObject(A.Device.Device),B.ASB,B.AZ_];this.Ame.Mz=[this,
this.ALj];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();
this.Y._Done();this.Ef._Done();this.Cn._Done();this.CG._Done();this.C$._Done();this.
Gl._Done();this.Ee._Done();this.C9._Done();this.BY._Done();this.Ay._Done();this.
Breed._Done();this.Jg._Done();this.AnimalType._Done();this.Gender._Done();this.Pm.
_Done();this.KX._Done();this.Je._Done();this.YD._Done();this.Ame._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cn._ReInit();this.CG._ReInit();this.C$._ReInit(
);this.Gl._ReInit();this.Ee._ReInit();this.C9._ReInit();this.BY._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jg._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pm._ReInit();this.KX._ReInit();this.Je._ReInit();this.YD._ReInit(
);this.Ame._ReInit();this.Ef.T(A.aaR(A.acf.ACx));this.Cn.T(A.aaR(A.acf.Aed));this.
CG.T(A.aaR(A.acf.Breed));this.C$.T(A.aaR(A.acf.Afm));this.Gl.T(A.aaR(A.acf.Jg));
this.Ee.T(A.aaR(A.acf.M2));this.C9.T(A.aaR(A.acf.KI));this.BY.T(A.aaR(A.acf.Afr)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gd)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Je)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ame)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Asv={Zf:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zf={
I:this},0);this.__proto__=C.Asv;this.N.CV(A.acf.Bh6);this.Number.H(Btw);this.Jf.
H(Btx);this.IS.H(Bty);this.AkC(2);this.Bcw=false;this.BdB=true;this.BdC=false;this.
Zf.H(Btz);this.Zf.KR(true);this.Zf.R(A.aaR(A.acf.A$e));this.Zf.L(A.jb.Text);this.
J(this.Zf,0);this.N.CE=null;this.N.Cl=[this,this.AIQ];this.N.C1(null);this.Zf.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Zf.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zf._ReInit();this.Zf.R(A.aaR(A.acf.A$e));this.Zf.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADJ={Ct:null,FN:function(E){if(this.M4===E)return;C.HJ.FN.call(this,E);this.
Ct.CT(E);},Ym:function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.FZ;break;
case 1:B5=this.Ct;break;case 2:B5=this.G1;break;default:A.ab5("%s",Ah1);}return B5;
},_Init:function(aArg){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADJ;this.H(BtA);this.Ct.H(A$0);this.FZ.H(BtB);this.J(this.
Ct,-2);this.Ct.Di=[this,this.GU];},_Done:function(){this.__proto__=C.HJ;this.Ct.
_Done();C.HJ._Done.call(this);},_ReInit:function(){C.HJ._ReInit.call(this);this.
Ct._ReInit();},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.Ct)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Asw={G4:null
,Bl:function(aSize){C.OS.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G4.M[0
]));},Ai:function(Ae){C.OS.Ai.call(this,Ae);if(this.Hk)this.G4.FN(A.jb.CJ);else this.
G4.FN(A.jb.CS);},A1U:function(){this.Bb(this.G4);},_Init:function(aArg){C.OS._Init.
call(this,aArg);C.HJ._Init.call(this.G4={I:this},0);this.__proto__=C.Asw;this.G4.
H(BtC);this.J(this.G4,0);this.G4.At([this,this.ASr,this.AFq]);},_Done:function(){
this.__proto__=C.OS;this.G4._Done();C.OS._Done.call(this);},_ReInit:function(){C.
OS._ReInit.call(this);this.G4._ReInit();},_Mark:function(D){var B;C.OS._Mark.call(
this,D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axt={G4:null,Bl:function(aSize){C.OS.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G4.M[0]));},Ai:function(Ae){C.OS.Ai.call(this,Ae);if(this.Hk)this.G4.FN(
A.jb.CJ);else this.G4.FN(A.jb.CS);},A1U:function(){this.Bb(this.G4);},_Init:function(
aArg){C.OS._Init.call(this,aArg);C.ADJ._Init.call(this.G4={I:this},0);this.__proto__=
C.Axt;this.G4.AZ(0x18);this.G4.H(BtD);this.J(this.G4,0);this.G4.At([this,this.ASr
,this.AFq]);},_Done:function(){this.__proto__=C.OS;this.G4._Done();C.OS._Done.call(
this);},_ReInit:function(){C.OS._ReInit.call(this);this.G4._ReInit();},_Mark:function(
D){var B;C.OS._Mark.call(this,D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acp={ScreenTypeToString:
null,Du:function(){return 4;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BR(this.C7(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acp;this.Cb.Set(0,3);this.Cb.Set(1,35);this.Cb.Set(2
,34);this.Cb.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVI={ALa:false,A2b:false,Wx:function(G){this.Agt();A._GetAutoObject(C.B4).Tw(
A.aaR(A.acf.Settings),[this,this.A3n]);A._GetAutoObject(C.B4).Gu();this.AL3();A.
_GetAutoObject(C.B4).NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.B4).Gu(
);A._GetAutoObject(C.B4).NC(A.aaR(A.acf.ARg)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},CC:function(G){C.QB.CC.call(this,G);if(
this.A2b){this.A2b=false;A.pe([this,this.A0e],this);}},Agc:function(G){C.QB.Agc.
call(this,G);this.A_z(true);},Abp:function(){return C.AB1;},Abq:function(){return C.
ADi;},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.
Device.Helper).A6I(Math.max(A._GetAutoObject(A.Device.Device).AvV,A._GetAutoObject(
A.Device.Helper).A6A(A._GetAutoObject(A.Device.Device).An))+1));},HO:function(G){
C.QB.HO.call(this,G);if((((A._GetAutoObject(A.Device.Converter).S1(A._GetAutoObject(
A.Device.Device).PV)===10)&&this.ALa)&&!!this.Bg.AX)&&!this.Bg.AX.B9()){this.N.Cs(
null);this.N.FC(A.aaR(A.acf.No));this.N.Cg=[this,this.BAC];this.N.C2(null);this.
N.CV(A.aaR(A.acf.Yes));this.N.Cl=[this,this.BAD];}else if(this.Ake()===false){this.
N.Cs(A.aaL(A.ach.Avt));this.N.Cg=[this,this.ANT];this.N.FC(A.jV);}this.N.OO(false
);this.N.OP(false);},Agf:function(){A._GetAutoObject(C.A9).Cd(86);},AAW:function(
G){var aFilter=A._GetAutoObject(A.Device.Device).An.Filter.E_();var AyV=aFilter.
DL(26,4);if(!!AyV){aFilter.Ni(AyV);A._GetAutoObject(A.Device.Device).An.Bk(aFilter
);if(!!this.Bg)this.Bg.GS(0);}},A6y:function(){return C.APp;},BfG:function(){var
B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.Filter
){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E_();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion
)Filter.Ni(FilterCriterion);A._GetAutoObject(A.Device.Device).An.Bk(Filter);}},A3n:
function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A2b=true;A._GetAutoObject(
C.A9).Cd(89);},ALh:function(G){if(A._GetAutoObject(A.Device.Converter).S1(A._GetAutoObject(
A.Device.Device).PV)===10){if(this.ALa){this.Dj(A.aaR(A.acf.Bn5));this.Bg.NL.S(A.
aaL(A.fl.Bh));}else{this.Dj(A.aaR(A.acf.AEg));this.Bg.NL.S(A.aaL(A.fl.Af));}}else
this.Dj(A.aaR(A.acf.AEg));},A_z:function(E){if(this.ALa===E)return;this.ALa=E;A.
pe([this,this.AyK],this);A.pe([this,this.ALh],this);},BAD:function(G){A._GetAutoObject(
C.A9).Ab7(90);},BAC:function(G){this.A_z(false);},_Init:function(aArg){C.QB._Init.
call(this,aArg);this.__proto__=C.AVI;this.Dr(C.AC$);this.Dj(A.aaR(A.acf.AEg));this.
AS5(A._GetAutoObject(C.AxZ));},_ReInit:function(){C.QB._ReInit.call(this);this.Dj(
A.aaR(A.acf.AEg));},_className:"Application::YoungNoTransponderListScreen"};C.AVH={
_Init:function(aArg){C.I3._Init.call(this,aArg);this.__proto__=C.AVH;this.KV.Ar(
false);this.KV.Aj(false);this.KV.Z(false);this.BmA(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQW={Sr:null,Q:null,A7Q:0,M4:0,Init:function(aArg){this.AS8(6);},At:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sr)this.Sr.At(E);},AS8:function(
E){if(this.A7Q===E)return;this.A7Q=E;var X;switch(E){case 2:X=A._NewObject(C.HJ,
0);break;case 3:X=A._NewObject(C.ADJ,0);break;case 4:X=A._NewObject(C.AQT,0);break;
case 5:X=A._NewObject(C.AQU,0);break;case 6:X=A._NewObject(C.AvM,0);break;default:{
X=null;A.ab5("%s%i",BtE,E);}}this.Bmz(X);},Bmz:function(E){if(this.Sr===E)return;
if(!!this.Sr){this.Sr.At(null);this.HN(this.Sr);}this.Sr=E;if(!!this.Sr){this.Sr.
At(this.Q);this.J(this.Sr,0);}},FN:function(E){if(this.M4===E)return;this.M4=E;if(
!!this.Sr)this.Sr.FN(E);},SO:function(Gz){if(!!this.Sr)this.Sr.SO(Gz);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.AQW;this.H(Ayh);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sr)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQT={CU:null,Ct:null,FN:function(
E){if(this.M4===E)return;C.HJ.FN.call(this,E);this.Ct.CT(E);this.CU.CT(E);},Ym:function(
Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.FZ;break;case 1:B5=this.Ct;break;
case 2:B5=this.CU;break;case 3:B5=this.G1;break;default:A.ab5("%s",Ah1);}return B5;
},_Init:function(aArg){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.CU={I:this
},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQT;this.H(BtF);this.G1.
H(Atc);this.CU.H(A$1);this.Ct.H(A$2);this.FZ.H(A$3);this.J(this.CU,-2);this.J(this.
Ct,-2);this.CU.Di=[this,this.GU];this.Ct.Di=[this,this.GU];},_Done:function(){this.
__proto__=C.HJ;this.CU._Done();this.Ct._Done();C.HJ._Done.call(this);},_ReInit:function(
){C.HJ._ReInit.call(this);this.CU._ReInit();this.Ct._ReInit();},_Mark:function(D
){var B;C.HJ._Mark.call(this,D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACG={S2:null,Ai:function(Ae){C.Abm.Ai.call(this,Ae);this.S2.L(this.V.AQ);},_Init:
function(aArg){C.Abm._Init.call(this,aArg);C.CH._Init.call(this.S2={I:this},0);this.
__proto__=C.ACG;this.V.Z(false);this.AW.H(BtG);this.AW.AS8(4);this.S2.H(BtH);this.
S2.R(A.aaR(A.acf.Kl));this.S2.L(A.jb.Bm);this.J(this.S2,0);this.S2.S(A.aaL(A.fl.
Af));this.S2.A2(A.aaL(A.fl.Ak));this.S2.Cu(null);},_Done:function(){this.__proto__=
C.Abm;this.S2._Done();C.Abm._Done.call(this);},_ReInit:function(){C.Abm._ReInit.
call(this);this.S2._ReInit();this.S2.R(A.aaR(A.acf.Kl));this.S2.S(A.aaL(A.fl.Af)
);this.S2.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abm._Mark.call(this,D);
if((B=this.S2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LW={YV:null,T6:null,AQ:0,A68:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YV.L(this.AQ);this.T6.L(this.AQ);},A9Q:function(E){var B;if(this.A68===
E)return;this.A68=E;if(E){this.YV.Z(true);this.T6.DC([this.T6.EC[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YV.Z(false);this.T6.DC([this.T6.EC[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C5._Init.call(
this.YV={I:this},0);A.acg.C5._Init.call(this.T6={I:this},0);this.__proto__=C.LW;
this.H(AZQ);this.YV.AZ(0x2D);this.YV.DC(AhW);this.YV.DM(Ban);this.YV.L(A.jb.Text
);this.T6.AZ(0x36);this.T6.DC(Ban);this.T6.DM(BtI);this.T6.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YV,0);this.J(this.T6,0);},_Done:function(){this.__proto__=
A.Core.P;this.YV._Done();this.T6._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.YV._ReInit();this.T6._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.YV)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AT9={Sw:null,PB:null,C$:null,BY:null,CG:null,GP:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pm:null,UO:null,KX:null,Init:function(aArg){A.zX([this
,this.AuG],this.BY.Q,0);A.zX([this,this.AMW],this.CG.Q,0);A.zX([this,this.Bqv],this.
Sw.Q,0);A.zX([this,this.Avj],this.C$.Q,0);A.zX([this,this.AVE],this.GP.Q,0);},AuG:
function(G){var F;A._GetAutoObject(A.Device.Device).EB((F=this.BY.Q,F[1].call(F[
0])));},Bqv:function(G){var F;A._GetAutoObject(A.Device.Device).Axa((F=this.Sw.Q
,F[1].call(F[0])));},Avj:function(G){var F;A._GetAutoObject(A.Device.Device).JS((
F=this.C$.Q,F[1].call(F[0])));},AVE:function(G){var F;A._GetAutoObject(A.Device.
Device).Nf((F=this.GP.Q,F[1].call(F[0])));},AMW:function(G){var F;A._GetAutoObject(
A.Device.Device).NZ((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce._Init.
call(this,aArg);C.BU._Init.call(this.Sw={I:this},0);C.Ir._Init.call(this.PB={I:this
},0);C.BU._Init.call(this.C$={I:this},0);C.BU._Init.call(this.BY={I:this},0);C.Axt.
_Init.call(this.CG={I:this},0);C.Asw._Init.call(this.GP={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M0._Init.call(this.Pm={I:this},0);C.UO._Init.call(this.UO={I:
this},0);A.Device.KX._Init.call(this.KX={I:this},0);this.__proto__=C.AT9;var B;this.
I$((A.aaR(A.acf.Asi)+Ays)+A.aaR(A.acf.AjD));this.Sw.H(AhZ);this.Sw.Aj(true);this.
Sw.T(A.aaR(A.acf.A$O));this.Sw.Bi(true);this.Sw.Bx(0);this.PB.H(Ayf);this.PB.Aj(
true);this.PB.Z(true);this.PB.T(A.aaR(A.acf.AdQ));this.PB.F$(0);this.PB.EU(99);this.
PB.IP(A.aaR(A.acf.Kl));this.PB.Ja(A.aaR(A.acf.GK));this.C$.H(Aac);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.Afm));this.C$.Bi(true);this.C$.Bx(0);this.BY.H(Ald);this.
BY.Aj(true);this.BY.T(A.aaR(A.acf.Afr));this.BY.Bi(true);this.BY.Bx(0);this.CG.H(
AcO);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.CG.Bi(false);this.GP.H(
AcO);this.GP.Aj(true);this.GP.T(A.aaR(A.acf.Jg));this.GP.Bi(true);this.AnimalType.
At(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.At(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.At(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(A.Device.Device).Breed);
this.UO.At(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sw,0);this.
J(this.PB,0);this.J(this.C$,0);this.J(this.BY,0);this.J(this.CG,0);this.J(this.GP
,0);this.Sw.At([B=this.WeightRecordingScope,B.B_,B.B$]);this.Sw.CK(this.WeightRecordingScope
);this.PB.At([B=A._GetAutoObject(A.Device.Device),B.A79,B.BaK]);this.C$.At([B=this.
Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.BY.At([B=this.AnimalType,B.B_,B.
B$]);this.BY.CK(this.AnimalType);this.CG.Gq([this,this.D_,this.GQ]);this.CG.LX([
B=this.CG,B.FU]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.Breed,B.B_,B.B$
]);this.CG.CK(this.Breed);this.CG.Ant(this.Pm);this.GP.Gq([this,this.D_,this.GQ]
);this.GP.LX([B=this.GP,B.FU]);this.GP.L0(A.aaL(A.ach.Edit));this.GP.At([B=this.
UO,B.B_,B.B$]);this.GP.CK(this.UO);this.GP.Ant(this.KX);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ce;this.Sw._Done();this.PB._Done();this.C$._Done();this.
BY._Done();this.CG._Done();this.GP._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pm._Done();this.UO._Done();this.
KX._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.
Sw._ReInit();this.PB._ReInit();this.C$._ReInit();this.BY._ReInit();this.CG._ReInit(
);this.GP._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pm._ReInit();this.UO._ReInit();
this.KX._ReInit();this.I$((A.aaR(A.acf.Asi)+Ays)+A.aaR(A.acf.AjD));this.Sw.T(A.aaR(
A.acf.A$O));this.PB.T(A.aaR(A.acf.AdQ));this.PB.IP(A.aaR(A.acf.Kl));this.PB.Ja(A.
aaR(A.acf.GK));this.C$.T(A.aaR(A.acf.Afm));this.BY.T(A.aaR(A.acf.Afr));this.CG.T(
A.aaR(A.acf.Breed));this.GP.T(A.aaR(A.acf.Jg));},_Mark:function(D){var B;C.Ce._Mark.
call(this,D);if((B=this.Sw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UO)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AT8={QO:null,FA:null,In:null,C_:null,Dm:null,EL:null,AutoRegistrationMode:null
,AdT:null,Init:function(aArg){var B;A.zX([this,this.Bg4],this.QO.Q,0);A.zX([this
,this.Beh],[B=A._GetAutoObject(A.Device.Device),B.ASb,B.AZW],0);A.zX([this,this.
Adu],[B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1],0);A.zX([this,this.Adu],[B=
A._GetAutoObject(A.Device.Device),B.Ui,B.U2],0);A.pe([this,this.Beh],this);A.pe([
this,this.Adu],this);},Bg4:function(G){var F;A._GetAutoObject(A.Device.Device).Awp((
F=this.QO.Q,F[1].call(F[0])));},Beh:function(G){switch(A._GetAutoObject(A.Device.
Device).Agw){case 0:A._GetAutoObject(A.Device.Helper).JY(this.In,true);break;case
1:A._GetAutoObject(A.Device.Helper).JY(this.In,false);break;default:throw new Error(
BtJ+A._GetAutoObject(A.Device.Device).Agw.toFixed());}},Adu:function(G){var F,CA;
if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dm.Q,CA[1].call(CA[0])))>12)(CA=this.
Dm.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Ce._Init.call(this,aArg);C.BU._Init.call(this.QO={I:this},0);C.BU._Init.call(this.
FA={I:this},0);C.AGx._Init.call(this.In={I:this},0);C.Ir._Init.call(this.C_={I:this
},0);C.Ir._Init.call(this.Dm={I:this},0);C.AvW._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdT._Init.
call(this.AdT={I:this},0);this.__proto__=C.AT8;var B;this.I$(A.aaR(A.acf.Aqi));this.
QO.H(AIC);this.QO.Aj(true);this.QO.T(A.aaR(A.acf.Aqi));this.QO.Bi(false);this.QO.
F$(-1);this.QO.EU(1);this.FA.H(UY);this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.
aaR(A.acf.Aqf));this.FA.Bi(true);this.In.H(Aac);this.In.Aj(true);this.In.Z(true);
this.In.T(A.aaR(A.acf.AEe));this.In.Bi(true);this.C_.H(Ald);this.C_.Aj(true);this.
C_.Z(true);this.C_.T(A.aaR(A.acf.AqA));this.C_.Bi(false);this.C_.F$(2);this.C_.EU(
6);this.C_.IP(A.aaR(A.acf.OB));this.C_.Ja(A.aaR(A.acf.Ey));this.Dm.H(AcO);this.Dm.
Aj(true);this.Dm.T(A.aaR(A.acf.Zh));this.Dm.Bi(true);this.Dm.F$(0);this.Dm.EU(12
);this.Dm.IP(A.aaR(A.acf.OB));this.Dm.Ja(A.aaR(A.acf.Ey));this.EL.H(BtK);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bi(false);this.EL.ArW(A.aaR(A.acf.Aqh));this.AutoRegistrationMode.
At(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QO,0);this.
J(this.FA,0);this.J(this.In,0);this.J(this.C_,0);this.J(this.Dm,0);this.J(this.EL
,0);this.QO.At([B=this.AutoRegistrationMode,B.B_,B.B$]);this.QO.CK(this.AutoRegistrationMode
);this.FA.At([B=this.AdT,B.B_,B.B$]);this.FA.CK(this.AdT);this.In.Ul([B=A._GetAutoObject(
A.Device.Device),B.Wv,B.AZZ]);this.In.Akt([B=A._GetAutoObject(A.Device.Device),B.
Av$,B.AyD]);this.C_.At([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.Dm.
At([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.EL.DB(A.aaL(A.ach.AjU));
this.EL.OM([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.EL.PQ([B=A._GetAutoObject(
A.Device.Device),B.Ui,B.U2]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ce;this.QO._Done();this.FA._Done();this.In._Done();this.C_._Done();this.Dm._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdT._Done();C.Ce._Done.
call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.QO._ReInit();this.FA.
_ReInit();this.In._ReInit();this.C_._ReInit();this.Dm._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdT._ReInit();this.I$(A.aaR(A.acf.Aqi
));this.QO.T(A.aaR(A.acf.Aqi));this.FA.T(A.aaR(A.acf.Aqf));this.In.T(A.aaR(A.acf.
AEe));this.C_.T(A.aaR(A.acf.AqA));this.C_.IP(A.aaR(A.acf.OB));this.C_.Ja(A.aaR(A.
acf.Ey));this.Dm.T(A.aaR(A.acf.Zh));this.Dm.IP(A.aaR(A.acf.OB));this.Dm.Ja(A.aaR(
A.acf.Ey));this.EL.ArW(A.aaR(A.acf.Aqh));},_Mark:function(D){var B;C.Ce._Mark.call(
this,D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FA)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVa={OG:null,FA:null,In:null,C_:null,Dm:null,EL:null,Afq:null,Init:function(
aArg){var B;A.zX([this,this.BeX],[B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0a
],0);A.zX([this,this.Adu],[B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1],0);A.zX([
this,this.Adu],[B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2],0);A.pe([this,this.
BeX],this);A.pe([this,this.Adu],this);},BeX:function(G){var AKX=false;var AaK=false;
switch(A._GetAutoObject(A.Device.Device).Ak1){case 0:{AKX=false;AaK=false;}break;
case 1:{AKX=true;AaK=false;}break;case 2:{AKX=false;AaK=true;}break;default:throw new
Error(BtL+A._GetAutoObject(A.Device.Device).Ak1.toFixed());}A._GetAutoObject(A.Device.
Helper).JY(this.In,AKX);A._GetAutoObject(A.Device.Helper).JY(this.C_,AaK);A._GetAutoObject(
A.Device.Helper).JY(this.Dm,AaK);A._GetAutoObject(A.Device.Helper).JY(this.EL,AaK
);},Adu:function(G){var F,CA;if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dm.Q,CA[
1].call(CA[0])))>12)(CA=this.Dm.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Ce._Init.call(this,aArg);C.Ir._Init.call(this.OG={
I:this},0);C.BU._Init.call(this.FA={I:this},0);C.AGx._Init.call(this.In={I:this}
,0);C.Ir._Init.call(this.C_={I:this},0);C.Ir._Init.call(this.Dm={I:this},0);C.AvW.
_Init.call(this.EL={I:this},0);C.Afq._Init.call(this.Afq={I:this},0);this.__proto__=
C.AVa;var B;this.I$(A.aaR(A.acf.LinkTransponder));this.OG.H(AIC);this.OG.Aj(true
);this.OG.Z(true);this.OG.T(A.aaR(A.acf.A7p));this.OG.Bi(false);this.OG.F$(1);this.
OG.EU(365);this.OG.IP(A.aaR(A.acf.Kl));this.OG.Ja(A.aaR(A.acf.GK));this.FA.H(UY);
this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.aaR(A.acf.Aqf));this.FA.Bi(true);this.
In.H(Aac);this.In.Aj(true);this.In.Z(true);this.In.T(A.aaR(A.acf.AEe));this.In.Bi(
false);this.C_.H(Ald);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.AqA
));this.C_.Bi(false);this.C_.F$(2);this.C_.EU(6);this.C_.IP(A.aaR(A.acf.OB));this.
C_.Ja(A.aaR(A.acf.Ey));this.Dm.H(AcO);this.Dm.Aj(true);this.Dm.T(A.aaR(A.acf.Zh)
);this.Dm.Bi(true);this.Dm.F$(0);this.Dm.EU(12);this.Dm.IP(A.aaR(A.acf.OB));this.
Dm.Ja(A.aaR(A.acf.Ey));this.EL.H(Ayj);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.ArW(A.aaR(A.acf.Aqh));this.J(this.OG,0);this.J(this.FA,0);this.
J(this.In,0);this.J(this.C_,0);this.J(this.Dm,0);this.J(this.EL,0);this.OG.At([B=
A._GetAutoObject(A.Device.Device),B.A8C,B.Ba0]);this.FA.At([B=this.Afq,B.B_,B.B$
]);this.FA.CK(this.Afq);this.In.Ul([B=A._GetAutoObject(A.Device.Device),B.Wv,B.AZZ
]);this.In.Akt([B=A._GetAutoObject(A.Device.Device),B.Av$,B.AyD]);this.C_.At([B=
A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.Dm.At([B=A._GetAutoObject(A.Device.
Device),B.Ui,B.U2]);this.EL.DB(A.aaL(A.ach.AjU));this.EL.OM([B=A._GetAutoObject(
A.Device.Device),B.Uh,B.U1]);this.EL.PQ([B=A._GetAutoObject(A.Device.Device),B.Ui
,B.U2]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.OG._Done();this.
FA._Done();this.In._Done();this.C_._Done();this.Dm._Done();this.EL._Done();this.
Afq._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.
OG._ReInit();this.FA._ReInit();this.In._ReInit();this.C_._ReInit();this.Dm._ReInit(
);this.EL._ReInit();this.Afq._ReInit();this.I$(A.aaR(A.acf.LinkTransponder));this.
OG.T(A.aaR(A.acf.A7p));this.OG.IP(A.aaR(A.acf.Kl));this.OG.Ja(A.aaR(A.acf.GK));this.
FA.T(A.aaR(A.acf.Aqf));this.In.T(A.aaR(A.acf.AEe));this.C_.T(A.aaR(A.acf.AqA));this.
C_.IP(A.aaR(A.acf.OB));this.C_.Ja(A.aaR(A.acf.Ey));this.Dm.T(A.aaR(A.acf.Zh));this.
Dm.IP(A.aaR(A.acf.OB));this.Dm.Ja(A.aaR(A.acf.Ey));this.EL.ArW(A.aaR(A.acf.Aqh));
},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.OG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afq={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bgj],[B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0a],0);A.pe([
this,this.Bgj],this);},Du:function(){return 3;},Gj:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BR(this.C7(aIndex));},At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.
Device).Aw8(E);},Bgj:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak1;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afq;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Jc={B6:null,IV:null,Cq:null,Amu:null,Se:null,Ang:null,AjA:null,Text:null,CX:
null,D6:0,Lz:false,Ai:function(Ae){var B;A.acn.Jc.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IV.Ar(true);else{this.IV.Ar(false);this.CX.Z(false);}},A4i:function(G
){var B;var Bd=this.Text.M;var Nu=0;var Nv=0;if(this.CX.Es[0]<Bd[0])Nu=Bd[0]-this.
CX.Es[0];if(this.CX.Es[0]>Bd[2])Nu=Bd[2]-this.CX.Es[0];if(this.CX.Es[1]<Bd[1])Nv=
Bd[1]-this.CX.Es[1];if(this.CX.EC[1]>Bd[3])Nv=Bd[3]-this.CX.EC[1];if(!!Nu||!!Nv)
this.Text.Ga(A.abf(this.Text.Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];
var C4=[(B=this.Text.Db())[2]-B[0],B[3]-B[1]];if(C4[0]<=((B=this.Text.M)[2]-B[0]
))Nu=0;if(C4[1]<=((B=this.Text.M)[3]-B[1]))Nv=0;this.Text.Ga([Nu,Nv]);},Amh:function(
G){if(!this.B6)return;var A3M=this.Text.AGK(this.D6);var pos=this.Text.Aff(A3M);
this.CX.DM(A.abe(pos,[0,this.B6.Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IV.Bw){this.IV.Ar(false);this.IV.Ar(true);}if(this.Lz){A.pe([this,this.
A4i],this);this.Lz=false;}},AAs:function(G){if(!this.B6)return;var EH=this.Text.
AGK(this.D6);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnN(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ACX(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnN(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CO===4){var pos=this.Text.Aff(EH);var AaJ=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.ATL(A.abe(pos,[0,AaJ]));}if(this.Cq.CO===5
){var pos=this.Text.Aff(EH);var AaJ=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.ATL(A.abf(pos,[0,AaJ]));}var Vf=this.Text.AnN(EH);var Ix=this.Text.
String.charCodeAt(Vf)||0;if(((Ix===0x5E)||(Ix===0x7E))||(Ix===0x25))Vf=Vf-1;if(Vf
!==this.D6){this.D6=Vf;A.pe([this,this.Amh],this);this.Lz=true;}},Beq:function(G
){if(!this.D6)return;var Ix=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
Ix===0x5E)||(Ix===0x7E))||(Ix===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.Lz=true;},AAt:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Ix=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(Ix===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.Lz=true;}
,BeE:function(G){this.Text.R(A.abU(this.Text.String,BtM,this.D6));this.D6=this.D6+
1;this.Lz=true;},Bes:function(G){var Ix=this.AjA.DQ;var Aui=String.fromCharCode(
Ix);A.ab5("%c",Ix);if((((Ix===0x5E)||(Ix===0x7E))||(Ix===0xAD))||(Ix===0x25))Aui=
BtN+String.fromCharCode(Ix);this.Text.R(A.abU(this.Text.String,Aui,this.D6));this.
D6=this.D6+Aui.length;this.Lz=true;},_Init:function(aArg){A.acn.Jc._Init.call(this
,aArg);A.acl.TG._Init.call(this.IV={I:this},0);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.BK._Init.call(this.Amu={I:this},0);A.Core.BK._Init.call(this.Se={I:this
},0);A.Core.BK._Init.call(this.Ang={I:this},0);A.Core.BK._Init.call(this.AjA={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C5._Init.call(this.CX={
I:this},0);this.__proto__=C.Jc;var B;this.H(BtO);this.IV.B1=false;this.IV.Cw=true;
this.IV.Fp(500);this.IV.Um(500);this.Cq.Filter=147;this.Cq.Bw=false;this.Amu.Filter=
151;this.Se.Filter=44;this.Ang.Filter=149;this.AjA.Filter=145;this.Text.AZ(0x3F);
this.Text.H(BtP);this.Text.KR(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CX.DC(BtQ);this.CX.DM(BtR);this.CX.A_u(2);this.CX.A_t(2);this.
CX.L(0xFF000000);this.CX.Z(false);this.J(this.Text,0);this.J(this.CX,0);this.IV.
Q=[B=this.CX,B.Fo,B.Z];this.Cq.BL=[this,this.AAs];this.Cq.D1=[this,this.AAs];this.
Amu.BL=[this,this.Beq];this.Amu.D1=[this,this.Beq];this.Se.BL=[this,this.AAt];this.
Se.D1=[this,this.AAt];this.Ang.BL=[this,this.BeE];this.Ang.D1=[this,this.BeE];this.
AjA.BL=[this,this.Bes];this.AjA.D1=[this,this.Bes];this.Text.Q5([this,this.Amh]);
this.Text.S(A.aaL(A.aci.ACK));this.B6=A.aaL(A.aci.ACK);},_Done:function(){this.__proto__=
A.acn.Jc;this.IV._Done();this.Cq._Done();this.Amu._Done();this.Se._Done();this.Ang.
_Done();this.AjA._Done();this.Text._Done();this.CX._Done();A.acn.Jc._Done.call(this
);},_ReInit:function(){A.acn.Jc._ReInit.call(this);this.IV._ReInit();this.Cq._ReInit(
);this.Amu._ReInit();this.Se._ReInit();this.Ang._ReInit();this.AjA._ReInit();this.
Text._ReInit();this.CX._ReInit();},_Mark:function(D){var B;A.acn.Jc._Mark.call(this
,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IV)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ang)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AU0={Jc:null,DE:function(G
){switch(this.Cq.CO){case 6:A._GetAutoObject(A.Device.Device).AuM();break;case 7:
A._GetAutoObject(A.Device.Device).Aqj();break;case 4:A._GetAutoObject(A.Device.Device
).Ajy();break;case 5:A._GetAutoObject(A.Device.Device).Aqk();break;default:;}},Ev:
function(G){A._GetAutoObject(C.A9).Fy();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Jc._Init.call(this.Jc={I:this},0);this.__proto__=C.AU0;this.H(Cc);this.
N.Z(true);this.Dr(C.AqW);this.Jc.H(Fe);this.J(this.Jc,0);this.Bb(this.Jc);this.N.
CE=[this,this.Ev];this.N.C1(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Jc._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Jc._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Jc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ATS={Wx:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){A._GetAutoObject(
C.B4).Tw(A.aaR(A.acf.AB6),[this,this.BaA]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).Tw(A.aaR(A.acf.AG3),[this,this.A70]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).Tw(A.aaR(A.acf.A5o),[this,this.Baz]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).Tw(A.aaR(A.acf.UnlinkTransponder),[this,this.BnE]);}else{A._GetAutoObject(
C.B4).AaR(A.aaR(A.acf.AB6));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).AaR(
A.aaR(A.acf.AG3));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).AaR(A.aaR(A.
acf.A5o));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).AaR(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.A5M)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.
A54));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.Anc)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},Abp:function(){return C.
AB2;},Abq:function(){return C.ADg;},Q8:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avm());},HO:function(G){C.AkL.HO.call(
this,G);this.N.Cs(null);this.N.FC(A.aaR(A.acf.A5g));if(this.AJy()){this.N.Cg=[this
,this.AID];this.N.Jy.Dk(255);}else{this.N.Cg=null;this.N.Jy.Dk(100);}this.N.C2(A.
aaL(A.ach.Options));this.N.CV(A.jV);this.N.OO(false);this.N.OP(false);this.N.I7.
Dk(255);},AR5:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiV=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A5(96,true,AiV.toFixed(),0,null);},AR6:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A5U(this);},AR$:function(G){var B;A._GetAutoObject(A.Device.Device).
Dw(0);if(!A._GetAutoObject(A.Device.Device).PV){A._GetAutoObject(A.Device.Device
).A5(73,true,A.jV,0,[this,this.BeG]);return;}if(A._GetAutoObject(A.Device.Device
).Arb()===false){A.zX([this,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.
Xc],0);A._GetAutoObject(A.Device.Device).A5(74,true,A.jV,0,[this,this.Age]);return;
}A.zX([this,this.AlW],[B=A._GetAutoObject(A.Device.Device).GC,B.SC,B.Fb],0);A._GetAutoObject(
A.Device.Device).Asl(2);},AJy:function(){if(!this.Bg)return false;var AtD=this.Bg.
AX;if(!AtD)return false;if(!AtD.B9())return false;return true;},AlW:function(G){
var B;switch(A._GetAutoObject(A.Device.Device).GC.EV){case 0:A.z$([this,this.AlW
],[B=A._GetAutoObject(A.Device.Device).GC,B.SC,B.Fb],0);break;case 3:{A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();if(A._GetAutoObject(A.Device.
Converter).S1(A._GetAutoObject(A.Device.Device).PV)===10){this.Dj(A.aaR(A.acf.Bi3
));this.Bg.NL.S(A.aaL(A.fl.Bh));}else this.Dj(A.aaR(A.acf.BnU));A._GetAutoObject(
A.Device.Device).Aqy();}break;case 4:{A._GetAutoObject(A.Device.Device).A5(97,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).GC.E5();}break;default:;}A.ab5("%e"
,A._GetAutoObject(A.Device.Device).GC.EV);},_Init:function(aArg){C.AkL._Init.call(
this,aArg);this.__proto__=C.ATS;this.Dr(C.APl);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADg={Pz:null,I6:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Pz={I:this},0);A.acg.Ap._Init.call(this.I6={I:this},0);this.__proto__=
C.ADg;this.Er.Z(false);this.DS.Z(false);this.Pz.H(BtS);this.Pz.L(A.jb.Text);this.
I6.H(BtT);this.I6.L(A.jb.Text);this.J(this.Pz,0);this.J(this.I6,0);this.Pz.Ax(A.
aaL(A.ach.AvB));this.I6.Ax(A.aaL(A.ach.Avw));},_Done:function(){this.__proto__=C.
Dc;this.Pz._Done();this.I6._Done();C.Dc._Done.call(this);},_ReInit:function(){C.
Dc._ReInit.call(this);this.Pz._ReInit();this.I6._ReInit();},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMR={Init:function(aArg){var B;A.zX([this,this.AAw],[B=A._GetAutoObject(A.Device.
Device),B.AEr,B.AIH],0);A.pe([this,this.AAw],this);},Wx:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){if(this.AJy())A._GetAutoObject(C.B4).Tw(A.aaR(
A.acf.AOf),[this,this.AID]);else A._GetAutoObject(C.B4).AaR(A.aaR(A.acf.AOf));A.
_GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).Tw(A.aaR(A.acf.AB4),[this,this.
BaA]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).Tw(A.aaR(A.acf.AG3),[this
,this.A70]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).Tw(A.aaR(A.acf.A5n
),[this,this.Baz]);}else{A._GetAutoObject(C.B4).AaR(A.aaR(A.acf.AOf));A._GetAutoObject(
C.B4).Gu();A._GetAutoObject(C.B4).AaR(A.aaR(A.acf.AB4));A._GetAutoObject(C.B4).Gu(
);A._GetAutoObject(C.B4).AaR(A.aaR(A.acf.AG3));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).AaR(A.aaR(A.acf.A5n));}A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).
NC(A.aaR(A.acf.A5M)+A.aaR(A.acf.Colon));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(
C.B4).NC(A.aaR(A.acf.A54));A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(
A.aaR(A.acf.Anc)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},Abp:
function(){return C.ABY;},Abq:function(){return C.ADe;},Q8:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOB());},HO:function(G){
C.AkL.HO.call(this,G);this.N.Cs(A.aaL(A.ach.AeA));this.N.Cg=[this,this.Adt];this.
N.FC(A.jV);this.N.C2(null);this.N.CV((A.aaR(A.acf.A5g)+String.fromCharCode(0x0A)
)+A.aaR(A.acf.Bha));this.N.OO(false);this.N.OP(false);this.N.I7.Dk(255);},AR5:function(
G){A._GetAutoObject(A.Device.Device).Dw(0);var AiV=A._GetAutoObject(A.Device.Device
).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device).A5(96,true,AiV.
toFixed(),0,null);},AR6:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.
A5T(this);},AR$:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);if(!A.
_GetAutoObject(A.Device.Device).PV){A._GetAutoObject(A.Device.Device).A5(73,true
,A.jV,0,[this,this.BeG]);return;}if(A._GetAutoObject(A.Device.Device).Arb()===false
){A.zX([this,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);A._GetAutoObject(
A.Device.Device).A5(74,true,A.jV,0,[this,this.Age]);return;}A.zX([this,this.AlW]
,[B=A._GetAutoObject(A.Device.Device).GC,B.SC,B.Fb],0);A._GetAutoObject(A.Device.
Device).Asl(0);},AJy:function(){var AtD=this.Bg.AX;if(!AtD)return false;var O;for(
O=0;O<AtD.B9();O++)if(A._GetAutoObject(A.Device.Helper).Aj3(AtD.AOP(O,34))===false
)return true;return false;},Adt:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
16);},AAw:function(G){if(A._GetAutoObject(A.Device.Device).Aqm===1)A.pe([this,this.
A50],this);},AlW:function(G){var B;switch(A._GetAutoObject(A.Device.Device).GC.EV
){case 0:A.z$([this,this.AlW],[B=A._GetAutoObject(A.Device.Device).GC,B.SC,B.Fb]
,0);break;case 3:{A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending(
);this.Dj(A.aaR(A.acf.Bhb));A._GetAutoObject(A.Device.Device).Aqy();}break;case 4:{
A._GetAutoObject(A.Device.Device).A5(70,true,A.jV,0,null);A._GetAutoObject(A.Device.
Device).GC.E5();}break;default:;}},_Init:function(aArg){C.AkL._Init.call(this,aArg
);this.__proto__=C.AMR;this.Dr(C.AOU);this.Init(aArg);},_className:"Application::BirthRegistrationsListScreen"
};C.AOU={DX:function(G){C.Aes.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.
Converter).AdX(11));},_Init:function(aArg){C.Aes._Init.call(this,aArg);this.__proto__=
C.AOU;this.Text.R(A.aaR(A.acf.ABR));},_ReInit:function(){C.Aes._ReInit.call(this
);this.Text.R(A.aaR(A.acf.ABR));},_className:"Application::HeaderBirthRegistrationsList"
};C.APl={DX:function(G){C.Aes.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.
Converter).AdX(12));},_Init:function(aArg){C.Aes._Init.call(this,aArg);this.__proto__=
C.APl;this.Text.R(A.aaR(A.acf.AF8));},_ReInit:function(){C.Aes._ReInit.call(this
);this.Text.R(A.aaR(A.acf.AF8));},_className:"Application::HeaderPurchasedAnimalsList"
};C.AB2={Kc:0,AP:null,ST:null,O_:0,Init:function(aArg){},Bl:function(aSize){C.Ba.
Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.
abN(this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.ST.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.ST.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rh(this.
Kc));this.ST.R(A._GetAutoObject(A.acj.KK).ACM(this.O_));},Cf:function(Ad){if(!this.
AX)return;this.Hr=Ad;if(!!this.AX){this.Kc=this.AX.KN(Ad,26);this.O_=this.AX.Hu(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);C.CH._Init.call(this.ST={I:this},0);this.__proto__=C.AB2;
this.AP.H(AZS);this.AP.L(A.jb.Bc);this.ST.H(AZT);this.J(this.AP,0);this.J(this.ST
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.ST.S(A.aaL(A.fl.Ak));
this.ST.A2(A.aaL(A.fl.Bh));this.ST.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.ST._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.ST._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.ST.S(A.aaL(A.fl.Ak));this.ST.A2(A.
aaL(A.fl.Bh));this.ST.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUp={
AeT:null,AbY:null,TO:null,KL:null,TM:null,NI:null,Th:A.jV,Ai:function(Ae){var F;
C.SQ.Ai.call(this,Ae);this.TO.L(this.V.AQ);var Apq=false;if((!this.Dl||!(F=this.
Dl,F[1].call(F[0])))&&!this.A8)Apq=true;this.TO.Z(Apq);this.Ps.Z(!Apq);this.VS.Z(
!Apq);this.Q0.Z(!Apq);this.Yg.Z(!Apq);this.P6.Z(!Apq);},Adv:function(G){var B;var
F;if(!this.Th.length){C.SQ.Adv.call(this,G);return;}var BO=this.FX;var Gt=A._GetAutoObject(
A.Device.AnH).Bfh(this.Th);this.Th=A.jV;if(!Gt){A._GetAutoObject(A.Device.Device
).A5(101,true,A.jV,0,this.AbY);A.pe(this.AeT,this);return;}if(this.Ash&&(Gt>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).A5(102,true,A.jV,0,this.
AbY);A.pe(this.AeT,this);return;}this.Uk(((B=(Gt|0))<0)?B+0x100000000:B);if(this.
FX!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FX));A.abo(this.Dl,0);}if(!
!this.OF)A.pe(this.OF,this);},A2X:function(G){if(this.Th.length<10)this.Th=this.
Th+String.fromCharCode(this.KL.DQ);},AR8:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.Adv(this);else this.NI.NH=true;},AS9:function(E){if(A.aa0(this.
AeT,E))return;this.AeT=E;},AS_:function(E){if(A.aa0(this.AbY,E))return;this.AbY=
E;},_Init:function(aArg){C.SQ._Init.call(this,aArg);A.acg.Text._Init.call(this.TO={
I:this},0);A.Core.BK._Init.call(this.KL={I:this},0);A.Core.BK._Init.call(this.TM={
I:this},0);A.Core.BK._Init.call(this.NI={I:this},0);this.__proto__=C.AUp;this.TO.
H(BtU);this.TO.I_(true);this.TO.A6(0x12);this.TO.R(A.aaR(A.acf.A5A));this.KL.Filter=
143;this.TM.Filter=149;this.NI.Filter=145;this.J(this.TO,0);this.TO.S(A.aaL(A.fl.
EK));this.KL.BL=[this,this.A2X];this.TM.BL=[this,this.Bbn];this.NI.BL=[this,this.
AR8];},_Done:function(){this.__proto__=C.SQ;this.TO._Done();this.KL._Done();this.
TM._Done();this.NI._Done();C.SQ._Done.call(this);},_ReInit:function(){C.SQ._ReInit.
call(this);this.TO._ReInit();this.KL._ReInit();this.TM._ReInit();this.NI._ReInit(
);this.TO.R(A.aaR(A.acf.A5A));this.TO.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SQ._Mark.call(this,D);if((B=this.AeT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AbY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUt={AeT:null,AbY:null,KL:null
,TM:null,NI:null,Th:A.jV,IZ:function(G){var F;if(!this.Th.length){C.Q$.IZ.call(this
,G);return;}if(this.Asg)return;if(!this.Th.length)this.TM.NH=true;var BO=this.AM;
var Gt=A._GetAutoObject(A.Device.AnH).BA5(this.Th);this.Th=A.jV;if(!Gt){if((this.
Th.length<13)&&!A._GetAutoObject(A.Device.Device).PV)A._GetAutoObject(A.Device.Device
).A5(105,true,A.jV,0,this.AbY);else A._GetAutoObject(A.Device.Device).A5(103,true
,A.jV,0,this.AbY);A.pe(this.AeT,this);return;}this.Bx(Gt);if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OF)A.pe(this.
OF,this);},A2X:function(G){if(this.Asg)return;if(this.Th.length<17)this.Th=this.
Th+String.fromCharCode(this.KL.DQ);},AR8:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.IZ(this);else this.NI.NH=true;},AS9:function(E){if(A.aa0(this.
AeT,E))return;this.AeT=E;},AS_:function(E){if(A.aa0(this.AbY,E))return;this.AbY=
E;},_Init:function(aArg){C.Q$._Init.call(this,aArg);A.Core.BK._Init.call(this.KL={
I:this},0);A.Core.BK._Init.call(this.TM={I:this},0);A.Core.BK._Init.call(this.NI={
I:this},0);this.__proto__=C.AUt;this.ArX(false);this.KL.Filter=143;this.TM.Filter=
149;this.NI.Filter=145;this.KL.BL=[this,this.A2X];this.TM.BL=[this,this.Atg];this.
NI.BL=[this,this.AR8];},_Done:function(){this.__proto__=C.Q$;this.KL._Done();this.
TM._Done();this.NI._Done();C.Q$._Done.call(this);},_ReInit:function(){C.Q$._ReInit.
call(this);this.KL._ReInit();this.TM._ReInit();this.NI._ReInit();},_Mark:function(
D){var B;C.Q$._Mark.call(this,D);if((B=this.AeT)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AbY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APi={AjZ:null,AjX:null,Gv:null,Q9:null,SN:null,C5:null,Init:function(aArg){var
B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Device),B.A8A,B.AFj],0);A.pe([
this,this.DX],this);},De:function(E){C.BQ.De.call(this,E);this.AjZ.L(E);this.AjX.
L(E);this.Q9.Zo(E);this.Gv.L(E);this.SN.Zo(E);},Wy:function(E){this.Q9.CT(E);this.
SN.CT(E);},DX:function(G){this.Q9.T(A._GetAutoObject(A.Device.Device).AvT.toFixed(
));A.pe([this,this.BCm],this);},BCm:function(G){var Xm=A._GetAutoObject(A.Device.
Device).An.Filter;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).Avm());this.SN.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed());A.
_GetAutoObject(A.Device.Device).An.Bk(Xm);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.AjZ={I:this},0);A.acg.Ap._Init.call(this.AjX={
I:this},0);A.acg.Ap._Init.call(this.Gv={I:this},0);C.D2._Init.call(this.Q9={I:this
},0);C.D2._Init.call(this.SN={I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);
this.__proto__=C.APi;this.AjZ.H(O3);this.AjX.H(BtV);this.Gv.H(BtW);this.Gv.L(A.jb.
CS);this.Q9.AZ(0x14);this.Q9.H(BtX);this.Q9.Zo(A.jb.Bm);this.Q9.CT(A.jb.Rg);this.
Q9.Hm(2);this.Q9.Bly(0x11);this.SN.AZ(0x14);this.SN.H(BtY);this.SN.Zo(A.jb.Bm);this.
SN.CT(A.jb.Rg);this.SN.Hm(2);this.C5.DC(AhS);this.C5.DM(BtZ);this.C5.L(A.jb.Bc);
this.J(this.AjZ,0);this.J(this.AjX,0);this.J(this.Gv,0);this.J(this.Q9,0);this.J(
this.SN,0);this.J(this.C5,0);this.AjZ.Ax(A.aaL(A.ach.Avv));this.AjX.Ax(A.aaL(A.ach.
APQ));this.Gv.Ax(A.aaL(A.ach.Gv));this.Q9.S(A.aaL(A.fl.Bh));this.SN.S(A.aaL(A.fl.
Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.AjZ._Done();this.
AjX._Done();this.Gv._Done();this.Q9._Done();this.SN._Done();this.C5._Done();C.BQ.
_Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.AjZ._ReInit();
this.AjX._ReInit();this.Gv._ReInit();this.Q9._ReInit();this.SN._ReInit();this.C5.
_ReInit();this.Q9.S(A.aaL(A.fl.Bh));this.SN.S(A.aaL(A.fl.Bh));},_Mark:function(D
){var B;C.BQ._Mark.call(this,D);if((B=this.AjZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARx={Abd:null,Aem:null,VO:null,Init:function(aArg){this.Bb(this.Abd);},Lm:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaD];this.BP.Cg=
null;this.BP.Cl=[this,this.A20];this.BP.CV(A.jV);this.BP.Cs(null);this.BP.C1(A.aaL(
A.ach.Yu));}return this.BP;},AAp:function(G){var Aa=(C.Ajh.isPrototypeOf(G)?G:null
);if(Aa===this.Abd)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aem)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$U);},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ajh._Init.call(this.
Abd={I:this},0);C.Ajh._Init.call(this.Aem={I:this},0);C.ARB._Init.call(this.VO={
I:this},0);this.__proto__=C.ARx;var B;this.H(Rn);this.Text.R(A.aaR(A.acf.ABW));this.
Abd.H(IU);this.Abd.T(A.aaR(A.acf.AjD));this.Aem.H(Qa);this.Aem.T(A.aaR(A.acf.AGd
));this.VO.H(Aab);this.VO.T(A.aaR(A.acf.A4_));this.J(this.Abd,0);this.J(this.Aem
,0);this.J(this.VO,0);this.Text.S(A.aaL(A.fl.Ak));this.Abd.AR=[this,this.AAp];this.
Aem.AR=[this,this.AAp];this.VO.ASN([B=A._GetAutoObject(A.Device.Device),B.AEv,B.
AIK]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Abd._Done();this.
Aem._Done();this.VO._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.
call(this);this.Abd._ReInit();this.Aem._ReInit();this.VO._ReInit();this.Text.R(A.
aaR(A.acf.ABW));this.Abd.T(A.aaR(A.acf.AjD));this.Aem.T(A.aaR(A.acf.AGd));this.VO.
T(A.aaR(A.acf.A4_));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fq._Mark.
call(this,D);if((B=this.Abd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aem)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARw={AnimalTableFields:null,Ay:null,Y:
null,JO:null,CP:function(){this.AiI(this);},Init:function(aArg){A.zV([this,this.
AiI],this.AnimalTableFields,0);A.pe([this,this.AiI],this);},DE:function(G){C.Fq.
DE.call(this,G);this.MO(this);},Lm:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.CE=[this,this.Ev];this.BP.Cg=[this,this.A2Y];this.BP.Cl=[this,this.
A3r];this.BP.C2(A.aaL(A.ach.Aq9));this.BP.Cs(A.aaL(A.ach.Aq2));this.BP.C1(A.aaL(
A.ach.Yu));}return this.BP;},Ev:function(G){this.AA1();this.AaD(this);},AiI:function(
G){this.AoZ();var O;for(O=0;O<this.AnimalTableFields.NQ();O=O+1){var Aak=A._GetAutoObject(
C.Amm).OD(O);this.A03(Aak);}this.J(this.JO,0);A.aaS([this,this.MO],this);},Fj:function(
G){var B;this.Ay.Mw((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);
this.Ay.Mx(-this.Y.Br[1]);},MO:function(G){var B;this.Y.Vw(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},A03:function(
G$){var Ay4=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Sf,0);Aa.T(Ay4.BR(G$));Aa.Aj(true);Aa.G5=G$;Aa.A9P(this.AnimalTableFields.NV(G$
));this.J(Aa,0);this.ZB(Aa);},AoZ:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdJ=X;X=X.Ah;if(((AdJ.U&0x400)===0x400))this.HN(AdJ);}}
,AA1:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JO)){var Aa=(C.Sf.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G5);if(Aa.ASl())this.AnimalTableFields.
AUl(Aa.G5);}else A.ab5("%s",Ayn);}X=X.Ah;}this.AnimalTableFields.Ch();},A2Y:function(
G){var B;var Aa=(C.Sf.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAh=(C.Sf.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAh){this.Ahz(AAh,Aa);A.pe([this,this.MO],this);}}},A3r:function(
G){var B;var Aa=(C.Sf.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAN=(C.Sf.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAN){this.Ahz(Aa,AAN);A.pe([this,this.MO],this);}}},AqF:function(
G){var B;A._GetAutoObject(A.Device.Device).Asm(this);A.pe([this,this.AiI],this);
},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Au1._Init.call(this.JO={I:this},0);
this.__proto__=C.ARw;this.H(Rn);this.Text.R(A.aaR(A.acf.AGd));this.Ay.H(It);this.
Y.H(Bao);this.Y.JR(1);this.JO.H(AH2);this.JO.Aj(true);this.JO.T(A.aaR(A.acf.A5N)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JO,0);this.Y.El=[this,this.Fj];
this.JO.AR=[this,this.AqF];this.AnimalTableFields=A._GetAutoObject(C.Amm);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fq;this.Ay._Done();this.Y._Done();this.
JO._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JO._ReInit();this.Text.R(A.aaR(A.acf.AGd));this.
JO.T(A.aaR(A.acf.A5N));this.CP();},_Mark:function(D){var B;C.Fq._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARv={Y:null,BY:null,C$:null,CG:null,GP:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UN:null,Init:function(aArg){A.zX([this,this.AuG],this.BY.Q,0);A.zX([
this,this.AMW],this.CG.Q,0);A.zX([this,this.AVE],this.GP.Q,0);A.zX([this,this.Avj
],this.C$.Q,0);this.Bb(this.BY);},DE:function(G){C.Fq.DE.call(this,G);this.MO(this
);},Lm:function(){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.
AaD];this.BP.Cg=null;this.BP.Cl=null;this.BP.CV(A.jV);this.BP.Cs(null);this.BP.C1(
A.aaL(A.ach.Yu));}return this.BP;},Fj:function(G){var B;this.Ay.Mw((B=this.Y.Db(
0x1))[3]-B[1]);this.Ay.My((B=this.Y.M)[3]-B[1]);this.Ay.Mx(-this.Y.Br[1]);},MO:function(
G){var B;this.Y.Vw(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},AuG:function(G){var F;A._GetAutoObject(A.Device.Device
).EB((F=this.BY.Q,F[1].call(F[0])));},AVE:function(G){var F;A._GetAutoObject(A.Device.
Device).Nf((F=this.GP.Q,F[1].call(F[0])));},Avj:function(G){var F;A._GetAutoObject(
A.Device.Device).JS((F=this.C$.Q,F[1].call(F[0])));},AMW:function(G){var F;A._GetAutoObject(
A.Device.Device).NZ((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fq._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AaQ._Init.call(this.BY={
I:this},0);C.AaQ._Init.call(this.C$={I:this},0);C.AaQ._Init.call(this.CG={I:this
},0);C.AaQ._Init.call(this.GP={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UO._Init.call(this.UN={I:
this},0);this.__proto__=C.ARv;var B;this.H(Rn);this.Text.R(A.aaR(A.acf.AjD));this.
Y.H(Bao);this.Y.JR(1);this.BY.H(AhX);this.BY.Ar(true);this.BY.Aj(true);this.BY.T(
A.aaR(A.acf.Afr));this.C$.H(Ayf);this.C$.Ar(true);this.C$.Aj(true);this.C$.T(A.aaR(
A.acf.Afm));this.CG.H(Aom);this.CG.Ar(true);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.GP.H(As5);this.GP.Ar(true);this.GP.Aj(true);this.GP.T(A.aaR(A.acf.Jg
));this.Ay.H(It);this.AnimalType.At(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.At(A._GetAutoObject(A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(
A.Device.Device).Breed);this.UN.At(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.BY,0);this.J(this.C$,0);this.J(this.CG,0);this.J(
this.GP,0);this.J(this.Ay,0);this.Y.El=[this,this.Fj];this.BY.Zp(A.aaL(A.fl.H1));
this.BY.Zq(A.aaL(A.fl.H1));this.BY.At([B=this.AnimalType,B.B_,B.B$]);this.BY.CK(
this.AnimalType);this.C$.Zp(A.aaL(A.fl.H1));this.C$.Zq(A.aaL(A.fl.H1));this.C$.At([
B=this.Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.CG.Zp(A.aaL(A.fl.H1));this.
CG.Zq(A.aaL(A.fl.H1));this.CG.At([B=this.Breed,B.B_,B.B$]);this.CG.CK(this.Breed
);this.GP.Zp(A.aaL(A.fl.H1));this.GP.Zq(A.aaL(A.fl.H1));this.GP.At([B=this.UN,B.
B_,B.B$]);this.GP.CK(this.UN);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fq;this.Y._Done();this.BY._Done();this.C$._Done();this.CG._Done();this.GP._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UN._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this
);this.Y._ReInit();this.BY._ReInit();this.C$._ReInit();this.CG._ReInit();this.GP.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UN._ReInit();this.Text.R(A.aaR(A.acf.AjD));this.BY.T(A.aaR(
A.acf.Afr));this.C$.T(A.aaR(A.acf.Afm));this.CG.T(A.aaR(A.acf.Breed));this.GP.T(
A.aaR(A.acf.Jg));},_Mark:function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amq={CB:0,Alp:A.abi(17,0,null),OD:function(Hz){return this.Alp.Get(Hz);},NQ:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alp.Set(
O,0);this.CB=0;},J:function(Aae){if(this.CB>=17)A.ab5("%s",Bt0);else{this.Alp.Set(
this.CB,Aae);this.CB=this.CB+1;}},Ch:function(){},E3:function(Ah2){var AJT=Ah2.indexOf(
String.fromCharCode(0x2C),0);var A1q=A.jV;var O=0;this.CB=0;while(O<17)if(Ah2===
A.jV)O++;else{if(AJT===-1){A1q=Ah2;Ah2=A.jV;}else{A1q=A.abV(Ah2,AJT);Ah2=A.ab1(Ah2
,0,AJT+1);}var Aak=A.abZ(A1q,0,10)|0;if(this.Bji(Aak)){this.Alp.Set(this.CB,Aak);
this.CB=this.CB+1;O++;}AJT=Ah2.indexOf(String.fromCharCode(0x2C),0);}if(Ah2!==A.
jV)A.ab5("%s",Bt1);},toString:function(){var B;var AAf=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAf=AAf+AH4;AAf=AAf+(((B=this.Alp.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAf;},Contains:function(Aae){var O;for(O=0;O<this.CB;O=O+1)if(this.Alp.
Get(O)===Aae)return true;return false;},Bji:function(Aae){return true;},_Init:function(
aArg){(this.Alp=[]).__proto__=C.Amq.Alp;this.__proto__=C.Amq;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AL2={AfM:null,Init:function(aArg){var B;A.
zX([this,this.Bel],[B=A._GetAutoObject(A.Device.Device),B.A75,B.BaH],0);A.zX([this
,this.Bem],[B=A._GetAutoObject(A.Device.Device),B.A76,B.BaI],0);A.pe([this,this.
Bel],this);A.pe([this,this.Bem],this);},Clear:function(){C.Amq.Clear.call(this);
this.AfM.Clear();},Ch:function(){A._GetAutoObject(A.Device.Device).ArB(this.AfM.
toString());A._GetAutoObject(A.Device.Device).ArC(this.toString());},Bel:function(
G){this.AfM.E3(A._GetAutoObject(A.Device.Device).ABy);A.we(this,0);},Bem:function(
G){this.E3(A._GetAutoObject(A.Device.Device).ABz);A.we(this,0);},NV:function(Aae
){return this.AfM.Contains(Aae);},AUl:function(Aae){if(!this.NV(Aae))this.AfM.J(
Aae);},AOC:function(){return this.AfM.NQ();},_Init:function(aArg){C.Amq._Init.call(
this,aArg);this.__proto__=C.AL2;this.AfM=A._NewObject(C.Amq,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amq._Mark.call(this,D);if((B=this.AfM)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amm={_Init:function(){C.AL2._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARB={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hm(10);},Bl:function(aSize){C.T$.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Ml.M[0]));},Ai:function(Ae){var B;C.T$.
Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FQ=A.jb.Ad_;var GW=A.jb.Bm;if(this.Hk){FQ=A.jb.Bm;GW=A.jb.Text;}if(!He
){this.Background.L(FQ);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FQ);this.V.L(GW);}this.LF=He;this.KF=Fu;this.Qs=GE;},_Init:function(
aArg){C.T$._Init.call(this,aArg);this.__proto__=C.ARB;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AMQ={YM:null,Ak6:null,Lm:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaD];this.BP.Cg=null;
this.BP.Cl=null;this.BP.CV(A.jV);this.BP.Cs(null);this.BP.C1(A.aaL(A.ach.Yu));}return this.
BP;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.AaQ._Init.call(this.
YM={I:this},0);C.AD3._Init.call(this.Ak6={I:this},0);this.__proto__=C.AMQ;var B;
this.H(KY);this.YM.H(KY);this.YM.T(A.aaR(A.acf.Display));this.Ak6.At(A._GetAutoObject(
A.Device.Device).Aqm);this.J(this.YM,0);this.YM.Zp(A.aaL(A.fl.H1));this.YM.Zq(A.
aaL(A.fl.H1));this.YM.At([B=this.Ak6,B.B_,B.B$]);this.YM.CK(this.Ak6);this.Ak6.BmP([
B=A._GetAutoObject(A.Device.Device),B.AEr,B.AIH]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YM._Done();this.Ak6._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YM._ReInit();this.Ak6._ReInit(
);this.YM.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak6)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AD3={AbL:null,ListViewScopeToString:null,Du:function(){return 2;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gj:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BR(aIndex
);},DZ:function(A_){return A_;},H3:function(){return 1;},At:function(E){var F;C.
AC.At.call(this,E);if(!!this.AbL)(F=this.AbL,F[2].call(F[0],E));},BmP:function(E
){if(A.aaZ(this.AbL,E))return;if(!!this.AbL)A.z$([this,this.A3x],this.AbL,0);this.
AbL=E;if(!!this.AbL)A.zX([this,this.A3x],this.AbL,0);A.pe([this,this.A3x],this);
},A3x:function(G){var F;if(!!this.AbL)this.Q=(F=this.AbL,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AD3;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AUZ={
AB9:0,AB8:0,Ai:function(Ae){C.OV.Ai.call(this,Ae);this.Background.L(this.AB8);this.
V.L(this.AB9);},BlF:function(E){if(this.AB9===E)return;this.AB9=E;this.Am();},BlE:
function(E){if(this.AB8===E)return;this.AB8=E;this.Am();},_Init:function(aArg){C.
OV._Init.call(this,aArg);this.__proto__=C.AUZ;this.Ar(false);this.AB9=A.jb.Text;
this.AB8=A.jb.CJ;},_className:"Application::TextCaptionItem"};C.AHb={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.BdR],[B=A._GetAutoObject(A.Device.
Device),B.A8B,B.BaZ],0);A.pe([this,this.BdR],this);},Du:function(){return 3;},Gj:
function(aIndex){return this.WeightValuePrecisionToString.BR(this.C7(aIndex));},
At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.Device).AwO(E);},BdR:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OK;A.abo([this,this.B_,this.
B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHb;this.
Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cm;this.WeightValuePrecisionToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AUr={UB:null,A$j:A.jV,Init:function(aArg){},Bl:function(aSize){C.BU.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UB.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BU.Ai.call(this,Ae);this.UB.L(this.
V.AQ);},Bnh:function(E){if(this.A$j===E)return;this.A$j=E;this.UB.R(E);},_Init:function(
aArg){C.BU._Init.call(this,aArg);C.CH._Init.call(this.UB={I:this},0);this.__proto__=
C.AUr;this.H(AcN);this.UB.H(Bt2);this.J(this.UB,0);this.UB.S(A.aaL(A.fl.Af));this.
UB.A2(A.aaL(A.fl.Ak));this.UB.Cu(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BU;this.UB._Done();C.BU._Done.call(this);},_ReInit:function(){C.BU._ReInit.call(
this);this.UB._ReInit();this.UB.S(A.aaL(A.fl.Af));this.UB.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BU._Mark.call(this,D);if((B=this.UB)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Y2={MassDeregistrationCriterionToString:
null,Du:function(){return 2;},Gj:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BR(this.C7(aIndex));},_Init:function(
aArg){C.Cm._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Y2;this.
Cb.Set(0,0);this.Cb.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANJ={Vi:null
,Y2:null,Y4:null,Ms:null,At4:0,Init:function(aArg){this.Bb(this.Y4);},Ai:function(
Ae){C.Ei.Ai.call(this,Ae);var BBV=((A.aaR(A.acf.Aqu)+A.aaR(A.acf.Colon))+CQ)+this.
At4.toFixed();this.Ms.Bnh(BBV);},CC:function(G){C.Ei.CC.call(this,G);A.zX([this,
this.ALl],this.Ms.Q,0);A.pe([this,this.ALl],this);},E4:function(G){C.Ei.E4.call(
this,G);A.z$([this,this.ALl],this.Ms.Q,0);},DJ:function(G){C.Ei.DJ.call(this,G);
if((this.AV===this.Ms)&&!this.At4)this.N.HQ.Dk(100);else this.N.HQ.Dk(255);},BeB:
function(G){if(this.At4>0)A._GetAutoObject(A.Device.Device).A5(108,true,this.At4.
toFixed(),0,[this,this.Bz7]);},ALl:function(G){var F;this.At4=A._GetAutoObject(A.
Device.Helper).BiG((F=this.Ms.Q,F[1].call(F[0])));this.Am();A.pe([this,this.MH],
this);},Bev:function(G){var B;if(!A._GetAutoObject(A.Device.Device).An.B9()){A._GetAutoObject(
A.Device.Device).A5(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).Arb()===false){this.Vi=[this,this.Bev];A.zX([this,this.XA],[B=A._GetAutoObject(
A.Device.Device),B.Ww,B.Xc],0);A._GetAutoObject(A.Device.Device).A5(74,true,A.jV
,0,[this,this.Age]);return;}A.zX([this,this.AlW],[B=A._GetAutoObject(A.Device.Device
).GC,B.SC,B.Fb],0);A._GetAutoObject(A.Device.Device).Asl(1);},Age:function(G){var
B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);this.
Vi=null;}},XA:function(G){var B;if(A._GetAutoObject(A.Device.Device).P1.ZX===3){
A._GetAutoObject(A.Device.Device).A5(74,false,A.jV,0,[this,this.Age]);A.z$([this
,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);if(!!this.Vi)A.pe(this.
Vi,this);this.Vi=null;}},Bz7:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BBQ],this);},BBQ:function(
G){A._GetAutoObject(A.Device.Helper).Bx6(this.Y2.Q);A._GetAutoObject(A.Device.Device
).A5(109,true,this.At4.toFixed(),0,null);A.pe([this,this.MH],this);A.pe([this,this.
ALl],this);},AlW:function(G){var B;switch(A._GetAutoObject(A.Device.Device).GC.EV
){case 0:A.z$([this,this.AlW],[B=A._GetAutoObject(A.Device.Device).GC,B.SC,B.Fb]
,0);break;case 3:A._GetAutoObject(A.Device.Device).Aqy();break;case 4:{A._GetAutoObject(
A.Device.Device).A5(88,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).GC.E5(
);}break;default:;}},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Y2._Init.
call(this.Y2={I:this},0);C.Co._Init.call(this.Y4={I:this},0);C.AUr._Init.call(this.
Ms={I:this},0);this.__proto__=C.ANJ;var B;this.Dr(C.AOW);this.Y4.H(IU);this.Y4.Aj(
true);this.Y4.T(A.aaR(A.acf.A6a));this.Y4.Bi(false);this.Ms.H(Bt3);this.Ms.Aj(true
);this.Ms.T(A.aaR(A.acf.A$z));this.Ms.Bi(true);this.Ms.A_h(A.aaR(A.acf.Ok));this.
J(this.Y4,0);this.J(this.Ms,0);this.Y4.AR=[this,this.Bev];this.Ms.AR=[this,this.
BeB];this.Ms.AeU([this,this.BeB]);this.Ms.At([B=this.Y2,B.B_,B.B$]);this.Ms.CK(this.
Y2);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Y2._Done();this.
Y4._Done();this.Ms._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.
call(this);this.Y2._ReInit();this.Y4._ReInit();this.Ms._ReInit();this.Y4.T(A.aaR(
A.acf.A6a));this.Ms.T(A.aaR(A.acf.A$z));this.Ms.A_h(A.aaR(A.acf.Ok));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vi)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y4)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AOW={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AOW;this.
Text.R(A.aaR(A.acf.AdS));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdS));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANM={
Vi:null,Y3:null,AbQ:null,Init:function(aArg){this.Bb(this.Y3);A.pe([this,this.MH
],this);},Beu:function(G){var B;var Az0=A._GetAutoObject(A.Device.Device).ADP();
switch(Az0){case 1:A._GetAutoObject(A.Device.Device).A5(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A5(91,true,UZ,0,[this,this.BeO]);break;
case 2:{this.Vi=[this,this.Beu];A.zX([this,this.XA],[B=A._GetAutoObject(A.Device.
Device),B.Ww,B.Xc],0);A._GetAutoObject(A.Device.Device).A5(74,true,A.jV,0,[this,
this.Age]);}break;default:throw new Error(Bap+Az0.toFixed());}},Age:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);this.
Vi=null;}},XA:function(G){var B;if(A._GetAutoObject(A.Device.Device).P1.ZX===3){
A._GetAutoObject(A.Device.Device).A5(74,false,A.jV,0,[this,this.Age]);A.z$([this
,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);if(!!this.Vi)A.pe(this.
Vi,this);this.Vi=null;}},BeQ:function(G){var B;var Az0=A._GetAutoObject(A.Device.
Device).ADQ();switch(Az0){case 1:A._GetAutoObject(A.Device.Device).A5(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).A5(95,true,A.jV,0,[this
,this.Bz8]);break;case 2:{this.Vi=[this,this.BeQ];A.zX([this,this.XA],[B=A._GetAutoObject(
A.Device.Device),B.Ww,B.Xc],0);A._GetAutoObject(A.Device.Device).A5(74,true,A.jV
,0,[this,this.Age]);}break;case 3:A._GetAutoObject(A.Device.Device).A5(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A5(93,true,A.jV,0,null
);break;default:throw new Error(Bap+Az0.toFixed());}},BeO:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(As.Id){case 91:if(As.PopupState===
9)A.aaS([this,this.ByH],this);break;case 92:if(As.PopupState===9)A.aaS([this,this.
ByJ],this);break;default:throw new Error(Bt4+As.Id.toFixed());}},ByH:function(G){
if(A._GetAutoObject(A.Device.Device).ACg()){var A2K=A._GetAutoObject(A.Device.Device
).An.QI();A._GetAutoObject(A.Device.Device).A5(80,true,A2K.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A5(82,true,A.jV,0,null);A.aaS([this,this.Bz3],
this);},ByJ:function(G){if(A._GetAutoObject(A.Device.Device).AGi()){var A2K=A._GetAutoObject(
A.Device.Device).An.QI();A._GetAutoObject(A.Device.Device).A5(81,true,A2K.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A5(83,true,A.jV,0,null);A.aaS([
this,this.BAI],this);},Bz8:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BBR],this);},BBR:function(
G){A._GetAutoObject(A.Device.Device).A5(92,true,UZ,0,[this,this.BeO]);},BAI:function(
G){A._GetAutoObject(A.Device.Device).A5(92,false,A.jV,0,null);},Bz3:function(G){
A._GetAutoObject(A.Device.Device).A5(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.Co._Init.call(this.Y3={I:this},0);C.Co._Init.call(
this.AbQ={I:this},0);this.__proto__=C.ANM;this.Dr(C.AOZ);this.Y3.H(IU);this.Y3.Aj(
true);this.Y3.T(A.aaR(A.acf.ACg));this.Y3.Bi(false);this.AbQ.H(Qa);this.AbQ.Aj(true
);this.AbQ.T(A.aaR(A.acf.AGi));this.AbQ.Bi(true);this.J(this.Y3,-1);this.J(this.
AbQ,-1);this.Y3.AR=[this,this.Beu];this.AbQ.AR=[this,this.BeQ];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ei;this.Y3._Done();this.AbQ._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y3._ReInit();this.AbQ.
_ReInit();this.Y3.T(A.aaR(A.acf.ACg));this.AbQ.T(A.aaR(A.acf.AGi));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vi)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AOZ={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AOZ;this.Text.R(
A.aaR(A.acf.ACm));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACm));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.QB={NX:null
,ATX:0,ADS:false,ADO:false,ADT:false,Agc:function(G){this.A5Q(this);},AS5:function(
E){if(this.NX===E)return;this.NX=E;if(!this.NX)return;this.DP.AutoActions=E;A.zV([
this,this.BBz],this.NX,0);},AL3:function(){this.AL6(A.aaR(A.acf.A$I),[this,this.
BB7],[this,this.A8v,this.AFa]);this.AL6(A.aaR(A.acf.AF9),[this,this.BB5],[this,this.
A8s,this.AE_]);this.AL6(A.aaR(A.acf.AnW),[this,this.BB6],[this,this.A8t,this.AE$
]);A._GetAutoObject(C.B4).Gu();A._GetAutoObject(C.B4).NC(A.aaR(A.acf.BnP)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.B4).Gu();},AL6:function(Bwz,BxJ,Bw4){if(!this.NX
)return;this.AL5(Bwz,BxJ,Bw4);},BB7:function(G){this.AFa(!this.ADT);},BB5:function(
G){this.AE_(!this.ADO);},BB6:function(G){this.AE$(!this.ADS);},A3Y:function(ED,Bw3
){if(!this.NX)return;if(Bw3)this.NX.BgM(ED);else this.NX.Bn9(ED);this.NX.Ch();},
A4D:function(Aid,Aie,Bx1){A._GetAutoObject(C.B4).ABA(Aid,Aie,[this,this.A8L,this.
ATf],Bx1);},AGv:function(ED){if(!this.NX)return;this.NX.AGv(ED);this.NX.Ch();},AFa:
function(E){if(this.ADT===E)return;this.ADT=E;this.A3Y(256,E);A.abo([this,this.A8v
,this.AFa],0);},AE_:function(E){if(this.ADO===E)return;this.ADO=E;this.A3Y(2,E);
A.abo([this,this.A8s,this.AE_],0);},AE$:function(E){if(this.ADS===E)return;this.
ADS=E;this.A3Y(1,E);A.abo([this,this.A8t,this.AE$],0);},BBz:function(G){this.AFa(
this.NX.Contains(256));this.AE_(this.NX.Contains(2));this.AE$(this.NX.Contains(1
));if(this.NX.NQ()>0)this.ATf(this.NX.OD(this.NX.NQ()-1));},ATf:function(E){if(this.
ATX===E)return;this.ATX=E;A.abo([this,this.A8L,this.ATf],0);},A8v:function(){return this.
ADT;},A8s:function(){return this.ADO;},A8t:function(){return this.ADS;},A8L:function(
){return this.ATX;},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=
C.QB;},_Mark:function(D){var B;C.GZ._Mark.call(this,D);if((B=this.NX)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvS={Q:null,Ch:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADM:
function(ED){switch(ED){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Kf:function(G){var F;if(!!this.Q)this.E3((F=
this.Q,F[1].call(F[0])));A.we(this,0);},At:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Kf],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kf],E,
0);if(!!E)A.pe([this,this.Kf],this);},AGv:function(ED){if(this.NQ()>0)this.Axr(this.
NQ()-1,ED);},BgM:function(ED){if(this.Contains(ED))return;if(this.CB>=17){A.ab5(
"%s",AH3);return;}var AzT=0;for(;(AzT<=this.NQ())&&(this.OD(AzT)<ED);AzT++);var AA6=
this.NQ()-1;this.J(this.OD(AA6));for(;AA6>AzT;AA6--)this.Axr(AA6,this.OD(AA6-1));
this.Axr(AzT,ED);},Bn9:function(ED){var index=this.DZ(ED);if(index<0)return;for(;
index<(this.NQ()-1);index++)this.Axr(index,this.OD(index+1));this.Axr(index,0);this.
CB--;},_Init:function(aArg){C.Vv._Init.call(this,aArg);this.__proto__=C.AvS;},_Mark:
function(D){var B;C.Vv._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.Av2={_Init:
function(){C.AvS._Init.call(this,0);var B;this.At([B=A._GetAutoObject(A.Device.Device
),B.A8F,B.Ba3]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Av3={_Init:function(){C.AvS._Init.call(this,0);var B;this.At([B=A._GetAutoObject(
A.Device.Device),B.A8G,B.Ba4]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AxZ={_Init:function(){C.AvS._Init.call(this,0);var B;this.At([B=
A._GetAutoObject(A.Device.Device),B.A9b,B.Bbg]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ADi={QS:null,AjT:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.QS={I:this},0);A.acg.Ap._Init.
call(this.AjT={I:this},0);this.__proto__=C.ADi;this.Er.H(Bt5);this.DS.H(Bt6);this.
QS.H(Bt7);this.QS.R(A.aaR(A.acf.Uf));this.QS.A6(0x11);this.QS.L(A.jb.Text);this.
AjT.H(AZP);this.AjT.L(A.jb.Text);this.J(this.QS,0);this.J(this.AjT,0);this.QS.S(
A.aaL(A.fl.Af));this.QS.A2(A.aaL(A.fl.Ak));this.QS.Cu(A.aaL(A.fl.Bh));this.AjT.Ax(
A.aaL(A.ach.Avu));},_Done:function(){this.__proto__=C.Dc;this.QS._Done();this.AjT.
_Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
QS._ReInit();this.AjT._ReInit();this.QS.R(A.aaR(A.acf.Uf));this.QS.S(A.aaL(A.fl.
Af));this.QS.A2(A.aaL(A.fl.Ak));this.QS.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.AB1={AP:null,SV:null,OW:null,AKm:A.jV,Bd0:A.jV,Mf:0,Init:function(aArg){},Bl:
function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OW.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OW.M[2]-1,0,this.OW.M[2]+1,
aSize[1]]);this.SV.H([this.OW.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OW.L(this.V.AQ);this.SV.L(this.V.AQ);this.T(this.AKm);this.
OW.R(this.Bd0);this.SV.R(this.Mf.toFixed());},Cf:function(Ad){if(!this.AX)return;
this.Hr=Ad;if(!!this.AX){var Kc=this.AX.KN(Ad,26);var A2C=A._GetAutoObject(A.Device.
Converter).Rh(Kc);this.AKm=A.abV(A2C,A2C.length-5);this.Bd0=A.ab2(A2C,5);if((A._GetAutoObject(
A.Device.Converter).S1(Kc)===10)&&!(Math.trunc(Kc/10000000000)%100))this.AKm=A.ab1(
this.AKm,3,2);this.Mf=this.AX.CF(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AK._Init.call(this.AP={I:this},0);C.CH._Init.call(this.SV={
I:this},0);C.CH._Init.call(this.OW={I:this},0);this.__proto__=C.AB1;this.V.H(Bt8
);this.AP.H(AZS);this.AP.L(A.jb.Bc);this.SV.H(AZT);this.OW.H(Bt9);this.J(this.AP
,0);this.J(this.SV,0);this.J(this.OW,0);this.V.S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(
A.fl.Bh));this.SV.S(A.aaL(A.fl.Ak));this.SV.A2(A.aaL(A.fl.Bh));this.SV.Cu(A.aaL(
A.fl.Bh));this.OW.S(A.aaL(A.fl.Af));this.OW.A2(A.aaL(A.fl.Bh));this.OW.Cu(A.aaL(
A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();
this.SV._Done();this.OW._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AP._ReInit();this.SV._ReInit();this.OW._ReInit();this.V.
S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(A.fl.Bh));this.SV.S(A.aaL(A.fl.Ak));this.SV.A2(
A.aaL(A.fl.Bh));this.SV.Cu(A.aaL(A.fl.Bh));this.OW.S(A.aaL(A.fl.Af));this.OW.A2(
A.aaL(A.fl.Bh));this.OW.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListNaisIdAnimalIdItem"};C.APp={Q:null,Init:function(aArg){var
B;this.AAV(this);this.At([B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr]);},AEE:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
Ni(FilterCriterion);var Ai2=this.Awc();if((Ai2.length>0)&&(Ai2!==UZ)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,Ai2,0,6,false);Filter.CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeX(false);},AAV:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DL(26,4))?B:null);if(!!FilterCriterion)Filter.Ni(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this
,this.C3],this);},C3:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AW.ASY(A.jV);return;}var AyV=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DL(26,4))?B:null);if(!AyV){this.AW.ASY(UZ);this.AW.
AeX(true);}else this.AW.ASY(AyV.A4);},_Init:function(aArg){C.AjP._Init.call(this
,aArg);this.__proto__=C.APp;this.AW.AwH(0);this.AW.BmB(true);this.AW.Di=[this,this.
AEE];this.Init(aArg);},_Mark:function(D){var B;C.AjP._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVc={FA:null,C_:null,Dm:null,EL:null,AsK:null,Init:function(aArg){var B;A.zX([
this,this.BeY],[B=A._GetAutoObject(A.Device.Device),B.ASE,B.A0b],0);A.zX([this,this.
Adu],[B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1],0);A.zX([this,this.Adu],[B=
A._GetAutoObject(A.Device.Device),B.Ui,B.U2],0);A.pe([this,this.BeY],this);A.pe([
this,this.Adu],this);},BeY:function(G){var AaK=false;switch(A._GetAutoObject(A.Device.
Device).An1){case 0:AaK=false;break;case 3:AaK=true;break;default:throw new Error(
Bt_+A._GetAutoObject(A.Device.Device).An1.toFixed());}A._GetAutoObject(A.Device.
Helper).JY(this.C_,AaK);A._GetAutoObject(A.Device.Helper).JY(this.Dm,AaK);A._GetAutoObject(
A.Device.Helper).JY(this.EL,AaK);},Adu:function(G){var F,CA;if(((F=this.C_.Q,F[1
].call(F[0]))+(CA=this.Dm.Q,CA[1].call(CA[0])))>12)(CA=this.Dm.Q,CA[2].call(CA[0
],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Ce._Init.call(this
,aArg);C.BU._Init.call(this.FA={I:this},0);C.Ir._Init.call(this.C_={I:this},0);C.
Ir._Init.call(this.Dm={I:this},0);C.AvW._Init.call(this.EL={I:this},0);C.AVb._Init.
call(this.AsK={I:this},0);this.__proto__=C.AVc;var B;this.I$(A.aaR(A.acf.UnlinkTransponder
));this.FA.H(UY);this.FA.Aj(true);this.FA.Z(true);this.FA.T(A.aaR(A.acf.Aqf));this.
FA.Bi(true);this.C_.H(Ald);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.
AqA));this.C_.Bi(false);this.C_.F$(2);this.C_.EU(6);this.C_.IP(A.aaR(A.acf.OB));
this.C_.Ja(A.aaR(A.acf.Ey));this.Dm.H(AcO);this.Dm.Aj(true);this.Dm.T(A.aaR(A.acf.
Zh));this.Dm.Bi(true);this.Dm.F$(0);this.Dm.EU(12);this.Dm.IP(A.aaR(A.acf.OB));this.
Dm.Ja(A.aaR(A.acf.Ey));this.EL.H(Ayj);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.ArW(A.aaR(A.acf.Aqh));this.J(this.FA,0);this.J(this.C_,0);this.
J(this.Dm,0);this.J(this.EL,0);this.FA.At([B=this.AsK,B.B_,B.B$]);this.FA.CK(this.
AsK);this.C_.At([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.Dm.At([B=A.
_GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.EL.DB(A.aaL(A.ach.AjU));this.EL.
OM([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.EL.PQ([B=A._GetAutoObject(
A.Device.Device),B.Ui,B.U2]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ce;this.FA._Done();this.C_._Done();this.Dm._Done();this.EL._Done();this.AsK._Done(
);C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.FA._ReInit(
);this.C_._ReInit();this.Dm._ReInit();this.EL._ReInit();this.AsK._ReInit();this.
I$(A.aaR(A.acf.UnlinkTransponder));this.FA.T(A.aaR(A.acf.Aqf));this.C_.T(A.aaR(A.
acf.AqA));this.C_.IP(A.aaR(A.acf.OB));this.C_.Ja(A.aaR(A.acf.Ey));this.Dm.T(A.aaR(
A.acf.Zh));this.Dm.IP(A.aaR(A.acf.OB));this.Dm.Ja(A.aaR(A.acf.Ey));this.EL.ArW(A.
aaR(A.acf.Aqh));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.FA).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVb={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bgo],[B=A._GetAutoObject(A.Device.Device),B.ASE,B.A0b],0);A.pe([
this,this.Bgo],this);},Du:function(){return 2;},Gj:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BR(this.C7(aIndex));},At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.
Device).Aw9(E);},Bgo:function(G){this.Q=A._GetAutoObject(A.Device.Device).An1;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVb;this.Cb.Set(0,0);this.Cb.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMD.__proto__=A.Core.Root;C.AB.__proto__=C.Abf;C.WH.__proto__=
A.Core.P;C.Ox.__proto__=A.Core.P;C.Zx.__proto__=A.acl.Gk;C.Ej.__proto__=A.Core.P;
C.XW.__proto__=C.AB;C.AUE.__proto__=C.AB;C.Avs.__proto__=C.AB;C.Q_.__proto__=C.AB;
C.Fm.__proto__=C.Hh;C.Ay.__proto__=A.Core.P;C.Ce.__proto__=C.AB;C.AqW.__proto__=
C.BQ;C.BQ.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADa.__proto__=C.AmU;C.AGN.
__proto__=C.DR;C.Co.__proto__=C.OV;C.Ds.__proto__=C.Eg;C.Ir.__proto__=C.Ds;C.BU.
__proto__=C.Ds;C.SQ.__proto__=C.Ds;C.OI.__proto__=C.Cm;C.Rd.__proto__=C.AC;C.AUT.
__proto__=C.Ba;C.Gb.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GZ.__proto__=C.AB;C.
AB0.__proto__=C.Ba;C.Ad8.__proto__=C.AB;C.Mk.__proto__=C.Ox;C.AUO.__proto__=C.AB;
C.AqV.__proto__=C.ADa;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUu.__proto__=C.Acm;C.EA.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asq.__proto__=A.Core.P;C.AGz.__proto__=C.Ds;C.CH.__proto__=A.Core.P;C.
AjO.__proto__=C.Yo;C.Amp.__proto__=C.Rc;C.Ahw.__proto__=A.Core.P;C.Ei.__proto__=
C.AB;C.ATI.__proto__=C.AB;C.Mn.__proto__=C.Co;C.Ane.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abf;C.APF.__proto__=C.OverlayMenu;C.GJ.__proto__=A.Core.P;C.Abf.__proto__=
A.Core.P;C.AUz.__proto__=A.acl.Aek;C.AmU.__proto__=C.BQ;C.ADb.__proto__=C.AmU;C.
Kl.__proto__=C.AC;C.AUw.__proto__=C.Ds;C.AF_.__proto__=C.AB;C.HY.__proto__=C.AB;
C.Wr.__proto__=C.Arn;C.IJ.__proto__=C.ADb;C.I3.__proto__=C.AB;C.AMb.__proto__=C.
AF_;C.AL9.__proto__=C.GZ;C.ANr.__proto__=C.GZ;C.Aeo.__proto__=C.Co;C.QD.__proto__=
C.Aeo;C.APs.__proto__=C.BQ;C.AjP.__proto__=C.BQ;C.DF.__proto__=C.Ey;C.AW.__proto__=
A.Core.P;C.Gc.__proto__=C.AC;C.Afl.__proto__=C.BU;C.ATY.__proto__=C.AB;C.AbR.__proto__=
C.Co;C.T$.__proto__=C.Co;C.AND.__proto__=C.Ce;C.AUV.__proto__=C.Ce;C.ANQ.__proto__=
C.Ce;C.AT_.__proto__=C.Ce;C.WX.__proto__=A.Core.P;C.QV.__proto__=C.Fm;C.D2.__proto__=
A.Core.P;C.T7.__proto__=C.AB;C.AVt.__proto__=C.GZ;C.AMc.__proto__=C.AxX;C.AVe.__proto__=
C.Ce;C.AeN.__proto__=C.AC;C.AxX.__proto__=C.AB;C.AVC.__proto__=C.Ce;C.AUv.__proto__=
C.Acm;C.ABw.__proto__=A.Graphics.Hy;C.Aqb.__proto__=C.AB;C.ARs.__proto__=A.Core.
P;C.Fq.__proto__=C.OverlayMenu;C.AaQ.__proto__=C.BU;C.Ajh.__proto__=C.Co;C.ALV.__proto__=
C.Fq;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AL0.__proto__=C.Vv;C.AL1.
__proto__=C.Fq;C.Sf.__proto__=C.T$;C.AMI.__proto__=C.Vv;C.Wj.__proto__=C.Fm;C.Vs.
__proto__=A.Core.P;C.Kw.__proto__=A.Core.P;C.ARQ.__proto__=C.HY;C.AT1.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANs.__proto__=C.Amp;C.Hh.__proto__=A.
Core.P;C.AVv.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aa0.
__proto__=C.Gc;C.AxP.__proto__=C.ABw;C.ATD.__proto__=C.OverlayMenu;C.AOw.__proto__=
A.Core.P;C.N1.__proto__=A.Core.P;C.ATE.__proto__=A.Core.P;C.AUy.__proto__=A.acl.
Aek;C.AkR.__proto__=C.Ir;C.Amr.__proto__=C.OverlayMenu;C.AB3.__proto__=C.Ba;C.Yp.
__proto__=C.AjP;C.AqE.__proto__=C.HY;C.Acl.__proto__=C.Ds;C.WeightRecordingScope.
__proto__=C.AC;C.AuD.__proto__=C.AB;C.AUx.__proto__=C.Ir;C.AL$.__proto__=C.AB;C.
Arn.__proto__=C.HY;C.AG8.__proto__=A.Core.P;C.AVy.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeP.__proto__=C.Eg;C.AvX.__proto__=C.AeP;C.SetTransponderScreen.__proto__=
C.Q_;C.ADj.__proto__=C.EA;C.AHa.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mg.__proto__=C.Q_;C.ALT.__proto__=C.Mg;C.ManualActionScanScreen.__proto__=C.Mg;
C.ALU.__proto__=A.Core.P;C.APw.__proto__=C.Dc;C.ADh.__proto__=C.Dc;C.TU.__proto__=
C.Dc;C.APy.__proto__=C.Dc;C.AM8.__proto__=C.Ba;C.M1.__proto__=C.Ba;C.AM6.__proto__=
C.Ba;C.Jr.__proto__=A.Core.P;C.AM5.__proto__=C.Ba;C.AmT.__proto__=C.TF;C.AF0.__proto__=
C.Axh;C.AkE.__proto__=C.Axh;C.Zw.__proto__=C.AkE;C.ANz.__proto__=C.OV;C.OV.__proto__=
C.Hh;C.APB.__proto__=C.EA;C.DS.__proto__=A.Core.P;C.AM2.__proto__=C.Ajz;C.ADd.__proto__=
C.TW;C.Kk.__proto__=A.Core.P;C.AmB.__proto__=C.Mn;C.AOT.__proto__=C.Kp;C.AutoRegistrationMode.
__proto__=C.AC;C.APC.__proto__=C.EA;C.Tz.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMn.__proto__=C.RZ;C.AMB.__proto__=C.AaW;C.AMw.__proto__=C.AaW;C.AT0.__proto__=
C.Ba;C.APA.__proto__=C.EA;C.AMq.__proto__=C.AaW;C.IF.__proto__=C.I2;C.RS.__proto__=
C.Fx;C.RX.__proto__=C.Fx;C.Ty.__proto__=C.JJ;C.QC.__proto__=C.Fx;C.Tx.__proto__=
C.JJ;C.AL_.__proto__=C.Aqb;C.AQR.__proto__=C.Ce;C.AaW.__proto__=C.D9;C.Kj.__proto__=
C.Cm;C.ARo.__proto__=C.Ce;C.AMl.__proto__=C.K_;C.AMm.__proto__=C.D9;C.AMj.__proto__=
C.K_;C.AMk.__proto__=C.K_;C.WJ.__proto__=C.Eg;C.AUs.__proto__=C.WJ;C.RY.__proto__=
C.Fx;C.APr.__proto__=C.IJ;C.ANt.__proto__=C.AB;C.ANa.__proto__=C.Ad8;C.AL8.__proto__=
C.I3;C.AVs.__proto__=C.I3;C.AOV.__proto__=C.Kp;C.APt.__proto__=C.Kp;C.APx.__proto__=
C.TW;C.AM7.__proto__=C.Ajz;C.TW.__proto__=C.Dc;C.Aqp.__proto__=A.acv.ACb;C.Ajz.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AMT.__proto__=C.DR;C.O0.__proto__=C.DR;C.AqT.__proto__=
A.Core.P;C.AMs.__proto__=C.Gb;C.AT4.__proto__=A.Core.P;C.K_.__proto__=C.D9;C.ANA.
__proto__=C.Ce;C.Au1.__proto__=C.Co;C.AC9.__proto__=C.BQ;C.AC_.__proto__=C.BQ;C.
Fx.__proto__=C.JJ;C.AOz.__proto__=C.GZ;C.AOy.__proto__=C.I3;C.AO9.__proto__=C.Kp;
C.ADf.__proto__=C.Dc;C.ABZ.__proto__=C.Ba;C.ATZ.__proto__=C.Ahw;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.AR2.
__proto__=C.QB;C.AR1.__proto__=C.I3;C.AC$.__proto__=C.Kp;C.ABI.__proto__=C.Gc;C.
ALY.__proto__=C.Fq;C.AMa.__proto__=C.AuD;C.NewAnimalSetTransponderScreen.__proto__=
C.Asv;C.C6.__proto__=C.AC;C.OZ.__proto__=A.Core.P;C.RT.__proto__=C.Fx;C.RU.__proto__=
C.Fx;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARz.__proto__=C.OverlayMenu;
C.VO.__proto__=C.T$;C.AvW.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.Tz;
C.AnimalMultiInfoScreen.__proto__=C.Tz;C.AMp.__proto__=C.OverlayMenu;C.I8.__proto__=
A.Core.P;C.ALX.__proto__=C.GZ;C.ALW.__proto__=C.I3;C.APq.__proto__=C.IJ;C.AsF.__proto__=
C.OZ;C.Aq8.__proto__=C.OZ;C.AuX.__proto__=C.AC;C.AMh.__proto__=C.AC;C.AGy.__proto__=
C.Eg;C.G4.__proto__=A.Core.P;C.AQU.__proto__=C.HJ;C.AVj.__proto__=C.XW;C.ARM.__proto__=
C.Wr;C.ADI.__proto__=C.Lf;C.HJ.__proto__=C.G4;C.Lf.__proto__=C.G4;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvM.__proto__=C.HJ;C.AUq.__proto__=C.BU;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asv;C.ReasonOfLeaving.__proto__=C.AC;C.OS.__proto__=C.BU;C.AeS.__proto__=
C.Ek;C.ARF.__proto__=C.Ek;C.ARE.__proto__=C.Ek;C.Ek.__proto__=A.Core.P;C.Q$.__proto__=
C.Eg;C.AQV.__proto__=C.Lf;C.AvL.__proto__=A.Core.P;C.Ey.__proto__=A.Core.P;C.Fz.
__proto__=C.AB;C.AN_.__proto__=C.AB;C.AOb.__proto__=C.Fz;C.AOc.__proto__=C.Fz;C.
AqH.__proto__=C.Fz;C.Abr.__proto__=C.AjO;C.Kp.__proto__=C.AjO;C.Avq.__proto__=C.
Abr;C.AO7.__proto__=C.Abr;C.AO6.__proto__=C.Abr;C.AO5.__proto__=C.BQ;C.Aev.__proto__=
C.EA;C.AmJ.__proto__=C.Ba;C.Ajo.__proto__=C.IF;C.ACB.__proto__=A.Core.P;C.AkO.__proto__=
A.Core.P;C.Rc.__proto__=C.AB;C.AUU.__proto__=C.Rc;C.AO8.__proto__=C.BQ;C.Dc.__proto__=
C.EA;C.KO.__proto__=C.BQ;C.AO1.__proto__=C.KO;C.AO3.__proto__=C.KO;C.Yj.__proto__=
C.AmJ;C.Agv.__proto__=C.Hh;C.ANX.__proto__=C.GZ;C.ANW.__proto__=C.I3;C.AO4.__proto__=
C.Kp;C.Abm.__proto__=C.Acl;C.AjG.__proto__=C.QD;C.ABT.__proto__=C.QD;C.APv.__proto__=
C.Dc;C.AM4.__proto__=C.Ba;C.RW.__proto__=C.Fx;C.AMi.__proto__=C.Fx;C.ANO.__proto__=
C.Ei;C.ANP.__proto__=C.Ei;C.AO2.__proto__=C.KO;C.Nb.__proto__=C.AbR;C.ANK.__proto__=
C.Ei;C.AOX.__proto__=C.KO;C.PN.__proto__=C.Co;C.Sg.__proto__=C.AB;C.AN$.__proto__=
C.Sg;C.AOa.__proto__=C.Sg;C.AOd.__proto__=C.AqH;C.AN8.__proto__=C.Fz;C.AaV.__proto__=
C.IF;C.Pl.__proto__=C.IF;C.AMu.__proto__=C.Amr;C.ARm.__proto__=C.T7;C.ARl.__proto__=
C.T7;C.ARX.__proto__=C.QB;C.ARW.__proto__=C.I3;C.APk.__proto__=C.Kp;C.AkL.__proto__=
C.GZ;C.AT$.__proto__=C.I3;C.Aes.__proto__=C.Yo;C.ABY.__proto__=C.Ba;C.ADe.__proto__=
C.Dc;C.APm.__proto__=C.BQ;C.AaY.__proto__=C.NE;C.XP.__proto__=C.NE;C.RZ.__proto__=
C.D9;C.XQ.__proto__=C.RZ;C.XN.__proto__=C.IE;C.AaT.__proto__=C.IE;C.XM.__proto__=
C.IE;C.AaS.__proto__=C.IE;C.AMr.__proto__=C.AB;C.IE.__proto__=C.I2;C.I2.__proto__=
C.Hh;C.NE.__proto__=C.Fx;C.Axg.__proto__=C.Zw;C.ANy.__proto__=C.AmB;C.Axi.__proto__=
C.Zw;C.ATQ.__proto__=C.Ce;C.ATO.__proto__=C.Ek;C.AQS.__proto__=C.Lf;C.ATP.__proto__=
C.Ek;C.NewMenu.__proto__=C.AB;C.ARN.__proto__=C.HY;C.AMt.__proto__=C.Amr;C.AMJ.__proto__=
C.Vv;C.JJ.__proto__=C.I2;C.APo.__proto__=C.Yp;C.Abl.__proto__=C.Cm;C.APz.__proto__=
C.EA;C.MotherScanScreen.__proto__=C.Mg;C.APn.__proto__=C.AqV;C.Jf.__proto__=A.Core.
P;C.APj.__proto__=C.BQ;C.SetSaveNaisIdScreen.__proto__=C.Q_;C.ANY.__proto__=C.AqE;
C.UN.__proto__=C.Cm;C.UO.__proto__=C.UN;C.AcI.__proto__=C.UN;C.AdT.__proto__=C.AC;
C.AGx.__proto__=C.Eg;C.ANN.__proto__=C.Ei;C.AO0.__proto__=C.KO;C.ANL.__proto__=C.
Ei;C.AOY.__proto__=C.KO;C.AqX.__proto__=C.TU;C.APu.__proto__=C.TU;C.Aqq.__proto__=
C.M1;C.AM3.__proto__=C.M1;C.ARG.__proto__=C.AeS;C.Yo.__proto__=C.BQ;C.Acm.__proto__=
C.BU;C.FI.__proto__=C.AC;C.AMx.__proto__=C.FI;C.AMy.__proto__=C.FI;C.AMe.__proto__=
C.I3;C.TF.__proto__=C.BU;C.ARP.__proto__=C.AB;C.Asv.__proto__=C.SetTransponderScreen;
C.ADJ.__proto__=C.HJ;C.Asw.__proto__=C.OS;C.Axt.__proto__=C.OS;C.Acp.__proto__=C.
Cm;C.AVI.__proto__=C.QB;C.AVH.__proto__=C.I3;C.AQW.__proto__=A.Core.P;C.AQT.__proto__=
C.HJ;C.ACG.__proto__=C.Abm;C.LW.__proto__=A.Core.P;C.AT9.__proto__=C.Ce;C.AT8.__proto__=
C.Ce;C.AVa.__proto__=C.Ce;C.Afq.__proto__=C.Cm;C.Jc.__proto__=A.acn.Jc;C.AU0.__proto__=
C.AB;C.ATS.__proto__=C.AkL;C.ADg.__proto__=C.Dc;C.AMR.__proto__=C.AkL;C.AOU.__proto__=
C.Aes;C.APl.__proto__=C.Aes;C.AB2.__proto__=C.Ba;C.AUp.__proto__=C.SQ;C.AUt.__proto__=
C.Q$;C.APi.__proto__=C.BQ;C.ARx.__proto__=C.Fq;C.ARw.__proto__=C.Fq;C.ARv.__proto__=
C.Fq;C.AL2.__proto__=C.Amq;C.ARB.__proto__=C.T$;C.AMQ.__proto__=C.OverlayMenu;C.
AD3.__proto__=C.AC;C.AUZ.__proto__=C.OV;C.AHb.__proto__=C.Cm;C.AUr.__proto__=C.BU;
C.Y2.__proto__=C.Cm;C.ANJ.__proto__=C.Ei;C.AOW.__proto__=C.KO;C.ANM.__proto__=C.
Ei;C.AOZ.__proto__=C.KO;C.QB.__proto__=C.GZ;C.AvS.__proto__=C.Vv;C.ADi.__proto__=
C.Dc;C.AB1.__proto__=C.Ba;C.APp.__proto__=C.AjP;C.AVc.__proto__=C.Ce;C.AVb.__proto__=
C.Cm;};C._ReInit=function(){var B;if((B=C.Axx._this))B._ReInit(),C.Axx._ReInit.call(
B);if((B=C.Axy._this))B._ReInit(),C.Axy._ReInit.call(B);if((B=C.A9._this))B._ReInit(
),C.A9._ReInit.call(B);if((B=C.Pk._this))B._ReInit(),C.Pk._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afh._this
))B._ReInit(),C.Afh._ReInit.call(B);if((B=C.B4._this))B._ReInit(),C.B4._ReInit.call(
B);if((B=C.WD._this))B._ReInit(),C.WD._ReInit.call(B);if((B=C.Asx._this))B._ReInit(
),C.Asx._ReInit.call(B);if((B=C.AnR._this))B._ReInit(),C.AnR._ReInit.call(B);if((
B=C.DP._this))B._ReInit(),C.DP._ReInit.call(B);if((B=C.AuL._this))B._ReInit(),C.
AuL._ReInit.call(B);if((B=C.Amm._this))B._ReInit(),C.Amm._ReInit.call(B);if((B=C.
Av2._this))B._ReInit(),C.Av2._ReInit.call(B);if((B=C.Av3._this))B._ReInit(),C.Av3.
_ReInit.call(B);if((B=C.AxZ._this))B._ReInit(),C.AxZ._ReInit.call(B);};C.DH=function(
D){var B;if((B=C.Axx._this)&&(B._cycle!=D))B._Done(C.Axx._this=null);if((B=C.Axy.
_this)&&(B._cycle!=D))B._Done(C.Axy._this=null);if((B=C.A9._this)&&(B._cycle!=D)
)B._Done(C.A9._this=null);if((B=C.Pk._this)&&(B._cycle!=D))B._Done(C.Pk._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.Afh._this)&&(B._cycle!=D))B._Done(C.Afh._this=null);if((B=C.B4._this)&&(B._cycle
!=D))B._Done(C.B4._this=null);if((B=C.WD._this)&&(B._cycle!=D))B._Done(C.WD._this=
null);if((B=C.Asx._this)&&(B._cycle!=D))B._Done(C.Asx._this=null);if((B=C.AnR._this
)&&(B._cycle!=D))B._Done(C.AnR._this=null);if((B=C.DP._this)&&(B._cycle!=D))B._Done(
C.DP._this=null);if((B=C.AuL._this)&&(B._cycle!=D))B._Done(C.AuL._this=null);if((
B=C.Amm._this)&&(B._cycle!=D))B._Done(C.Amm._this=null);if((B=C.Av2._this)&&(B._cycle
!=D))B._Done(C.Av2._this=null);if((B=C.Av3._this)&&(B._cycle!=D))B._Done(C.Av3._this=
null);if((B=C.AxZ._this)&&(B._cycle!=D))B._Done(C.AxZ._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */