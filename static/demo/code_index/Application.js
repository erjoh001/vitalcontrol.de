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
var Cc=[0,0,240,320];var BD=[0,0,240,40];var E7=[0,0,20,30];var Hq=[6,21,14,25];var
IU=[6,15,14,19];var Is=[6,9,14,13];var O2=[209,7,229,37];var P7=[0,40,240,320];var
P8=[0,228,240,298];var CQ=" ";var Ff=[0,40,240,280];var L1=[0,40,232,280];var P9=[
0,40,116,160];var J2=[114,40,230,160];var N$=[0,160,116,280];var P_=[116,160,232
,280];var MH=[0,280,116,400];var S8=[116,280,232,400];var UQ=[0,400,116,520];var
Z1=[116,400,232,520];var W1=[-1,520,115,640];var It=[232,40,240,280];var UR=[5,40
,235,120];var Z2=[120,140,210,230];var W2=[20,140,110,230];var Z3=[0,0,116,120];
var W3=[0,0,120,120];var Z4=[0,0,116,45];var Z5=[0,0,8,200];var US=[0,0,8,20];var
W4=[30,0,210,40];var O3=[0,0,40,40];var Z6=[7,8,200,40];var O4=[0,0,200,40];var Rl=[
6,1];var W5="ERROR: Invalid value for ItemHighlighting";var W6=[10,10,40,30];var
UT=[0,0,120,40];var Z7=[60,0,180,40];var Z8=[120,0,240,40];var W7=[0,0,100,40];var
W8=[83,0,157,40];var S9=[140,0,240,40];var UU=[0,0,20,40];var UV=[220,0,240,40];
var AcK=[0,0,300,30];var S_=[0,30,300,60];var Z9=[0,60,300,90];var Afz=[0,90,300
,120];var Z_=[0,100,300,110];var W9=[0,50,300,60];var Z$=[0,30,300,40];var W_="*";
var AhT=[40,40];var KY=[0,0,240,80];var AcL=[0,0,240,50];var Lv="Cap";var AhU=[0
,40,40,80];var Aob=[200,40,240,80];var Oa=[30,40,210,80];var W$="--";var Aaa="%d";
var AhV="%m";var AhW="%Y";var AcM=" (";var UW=[0,0,232,80];var Aoc="Date";var Aod=[
48,40,88,78];var Aoe=[39,40,79,80];var Aof=[80,44,87,77];var Ak$=".";var AsV=[88
,44,120,77];var Ax2=[120,44,127,77];var Ax3=[127,44,191,77];var O5=[0,0,80,40];var
Rm="Text";var Ax4=[430,102,430,102];var UX=[0,0,240,240];var AsW=[232,0,240,240];
var Ax5=[0,10,240,240];var Ax6="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ax7="Unhandled option";
var Aog=[0,80,240,280];var AfA="Unhandled animal list action";var Aoh="Animal list content not handled.";
var IV=[0,40,240,80];var Aoi="Set Selected";var Xa=" %%";var Aoj=[0,180,240,220];
var AsX=[82,127,167,150];var AsY="Group";var AsZ=[77,91,167,124];var Aok=[0,0,90
,33];var Aol=[4,4,18,29];var As0=[20,4,34,29];var Ax8=[36,4,50,29];var Ax9=[52,4
,66,29];var Ax_=[68,4,82,29];var As1="ERROR: Unhandled Device::SyncState";var Ax$=
":\n";var P$="{1}";var Aya="{2}";var AVU=[0,49,240,109];var AVV=[0,170,240,243];
var AVW=[0,110,240,170];var AVX=[20,243,220,268];var AHi=[30,8];var AHj="\u2265 ";
var AfB=[0,0,240,160];var Aom=[0,0,0,0];var AVY=[0,0,240,66];var AHk=[10,0,76,66
];var Ala=[33,33];var AHl=[87,0,153,66];var AHm=[164,0,230,66];var AVZ="No statistics available";
var AHn="in this environment.";var AV0=" fps";var AV1="CPU: - %%";var AcN=[0,0,240
,120];var AV2=[130,0,237,20];var AV3=[20,0,120,20];var AHo=[0,20,240,40];var As2=[
40,20,100,40];var AHp=[100,20,240,40];var AHq=[0,40,240,60];var Ayb=[40,40,100,60
];var AHr=[100,40,240,60];var Ayc=[0,60,50,80];var AV4=[100,60,240,80];var AV5=[
0,80,50,100];var AV6=[100,80,240,100];var AV7=[0,100,50,120];var AHs=[100,100,240
,120];var AV8=[5,5,15,15];var O6="%H";var Ayd="%M";var AV9="Time";var AV_=[79,40
,119,78];var AV$=[125,40,164,80];var AWa=[86,40,126,80];var AWb=":";var AWc=[75,
40,115,80];var AHt=[0,0,240,150];var AHu=[60,0,155,40];var Aon=[30,0,65,40];var Aye=[
60,0,100,40];var AWd=[88,0,128,40];var AWe=[60,0,71,40];var AWf=[60,0,74,40];var
AHv=[90,0,123,40];var AWg=[120,0,161,40];var AHw=[120,0,165,40];var AHx=[60,0,88
,40];var AHy=[60,0,95,40];var AWh="Did not expect iterator bigger than number of records";
var AHz=[20,0,240,20];var AWi=[0,38,240,40];var AHA=[0,0,8,4];var Rn=[0,0,240,280
];var Xb=[0,280,240,320];var AWj="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWk="]";var AWl="ERROR: Cannot find closing bracket \'}\' in text [";var AWm=
"] opened at index ";var AWn="#";var AWo="ERROR: Invalid parameter: {";var AWp="}";
var AhX=[20,20];var AHB=[0,12];var AWq="ERROR: Not expected Application::FooterFocus, ";
var AWr="%M:%S";var AHC=[30,150,207,170];var AHD=[20,70,217,194];var Ayf="Unhandled item.";
var Qa=[0,80,240,120];var AWs="Unhandled Overlay Menu ";var AWt="Invalid bootloader message: ";
var AWu="Unknown USBState: ";var As3="Invalid fader";var AWv=[2,4,32,40];var AWw=[
29,4,80,40];var AWx=[120,4,200,40];var AWy=[80,0,114,40];var AWz="-1";var AWA="< ";
var As4=[0,0,232,40];var AWB=[22,40,180,80];var AWC=[2,40,22,80];var AWD=[23,40,
163,80];var AWE=[210,40,230,80];var AWF=[164,40,210,80];var AWG=[169,43,205,77];
var AWH="ERROR: No outlet assigned";var AWI="Unhandled screen";var AWJ="ERROR: Cannot cache null screen.";
var AWK="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHE="Untreated Rating Method type!";var Alb="Unhandled animal type";var AWL=[
5,60,235,140];var AWM=[0,130,240,196];var AWN=[49,240,229,280];var Ayg="Implement in derived classes!";
var Alc="Implement in derived class";var AhY=[0,40,230,120];var Ayh=[0,120,230,200
];var Aoo=[0,200,230,280];var AhZ=[0,280,230,360];var AWO=[0,360,230,440];var Ayi=[
230,40,238,280];var AHF="WARNING: Unhandled filter field: ";var AfC="Should not happen.";
var AHG="Invalid Boolean item";var Aab=[0,120,240,160];var Ald=[0,160,240,200];var
Aop=[0,200,240,240];var AWP=[1152,11,1392,51];var AWQ=[1152,51,1392,91];var AWR=[
1152,91,1392,131];var AWS=[1152,131,1392,171];var AWT=[1152,171,1392,211];var As5=[
0,240,240,280];var AHH=[10,0,240,40];var AHI=[190,0,230,40];var AWU=[60,3,95,39];
var AWV=[95,4,200,40];var AWW=[3,3];var AWX=[6,6];var AWY=[59,5,197,35];var AWZ=[
59,2,200,38];var AW0=[3,2,43,42];var AW1=[0,17,43,40];var AW2=[50,40];var AW3=[50
,0];var AW4="Illegal shifting direction";var Ayj=[0,0,160,30];var AHJ=[0,0,25,30
];var AHK=[27,0,52,30];var AHL=[54,0,79,30];var AHM=[81,0,106,30];var AHN=[108,0
,133,30];var AHO=[135,0,160,30];var AW5="Internal queue error";var AW6="ERROR: No corresponding Id ";
var AW7=" found.";var AW8="ERROR: Error in range test";var AW9=[120,67,210,157];
var AW_=[0,40,240,70];var AW$=[20,67,110,157];var Ayk=[0,160,240,280];var AHP=[20
,77,90,147];var AXa=[0,0,210,40];var AHQ=[195,0,235,40];var Ah0=[0,40,232,120];var
UY=[0,120,232,200];var AXb=[0,40,232,200];var Aac=[0,200,232,280];var AXc=[0,320
,240,400];var AXd=[0,120,53,200];var Ale=[0,280,232,360];var Aad="%%";var AcO=[0
,360,232,440];var Ayl=[0,440,232,520];var AXe=[0,80,207,120];var Ob=")";var AHR=
"/";var AXf=[5,0,88,30];var AHS=[88,0,240,30];var AXg="276000312345678";var AHT=[
5,30,100,60];var AHU=[100,30,240,60];var AXh="Manufacturer";var AXi="Country";var
AXj=[5,60,240,90];var AXk="Niedersachsen";var AXl=[5,90,145,120];var AXm=[140,90
,240,120];var AXn="Protocol";var AXo=[0,0,120,100];var AHV=[0,40,116,120];var AXp=[
40,80,92,107];var AHW=[0,0,50,23];var AHX="ERROR: Unhandled Device::MeasureState";
var Aym=[0,120,240,280];var AXq=[178,159,248,203];var AXr=[10,145,170,225];var AXs=[
0,61,240,101];var AXt=[0,0,40,23];var AHY=[101,113,141,136];var AXu=[101,235,141
,258];var AXv=[69,288,101,313];var AXw=[0,40,240,200];var As6=[0,200,240,280];var
As7=[0,280,240,360];var AHZ="\u2264 ";var AXx=[0,80,94,160];var AXy=[94,80,184,160
];var AXz=[184,80,240,160];var AXA=[197,105,231,139];var AXB=[105,101,173,127];var
AXC=[7,101,75,127];var AXD=[94,125,184,151];var AXE=[2,125,92,151];var AH0=[0,70
,240,101];var AXF=[0,106,240,280];var Ayn=[30,40,240,70];var AH1=[0,40,30,70];var
AXG="\u278B";var AXH=[0,0,240,175];var AXI=[0,0,232,175];var AXJ=[232,0,240,175];
var AXK="Text Here !";var AXL=[200,0,240,40];var AH2="1";var AH3="2";var AH4="3";
var AH5="4";var Ayo=[0,360,232,400];var Ayp="ERROR: invalid item class.";var AH6=[
10,220,250,260];var AXM=[185,0,225,40];var AH7="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXN="ERROR: Received more actions than expected!";var AH8=", ";var AXO=
"ERROR: Cannot set action at position=";var AXP=". Current elements:";var AXQ=", max elements:";
var AXR="17";var AXS=[0,0,58,58];var AXT=[0,0,60,60];var AXU=[30,0,58,20];var AXV=[
7,6,25,24];var AXW=[30,60,130,160];var AXX=[0,0,28,20];var AXY=[4,3,40,24];var AXZ=[
0,0,42,27];var Ayq=[0,0,17,17];var AX0="Unknown direction of counting enum value: ";
var AX1="Unknown id generation method enum value: ";var Ayr="Invalid animal id generation method: ";
var As8="Unhandled popup id";var UZ="0";var As9=";";var AX2=[0,400,230,480];var AX3=[
5,120,235,200];var AX4=[0,640,230,760];var AH9=[0,0,300,200];var AX5=[20,40,220,
80];var AH_=[20,80,220,280];var AX6=[140,0,188,40];var AX7="ERROR: Row containing birth weight could not be loaded";
var AX8=[0,440,230,520];var As_="ID";var AX9=[40,40,198,70];var AX_="Extra info: ";
var AH$=" -";var AX$=[0,0,230,120];var AYa=[0,0,230,40];var AYb=[0,80,230,120];var
AYc="\xB0Brix";var AcP=[0,320,230,400];var AYd=[0,410,230,490];var AYe="ERROR: aNumberOfDays can not be < 0 ";
var AYf="{WEIGHTGAIN} ";var AYg="\xB1";var AIa="+";var AYh="{WEIGHTGAIN}";var AYi=
"{DAYS}";var AYj="ERROR: aString can not be null";var AYk=[166,70,240,114];var AYl=[
0,60,160,120];var AYm=[30,0,240,60];var AIb=[1,6,29,54];var AYn=[30,60,240,120];
var AYo="Con";var AYp=[70,50,170,70];var AIc="Unhandled Device::NaisIdValidationResult: ";
var AId="Unhandled PopupId";var AYq=[110,123,230,248];var AYr=[5,0,250,40];var AYs=[
102,0,186,40];var AYt=[153,0,240,40];var Ro="-";var As$=[170,0,240,40];var AIe=[
220,0,320,30];var AIf=[200,20,300,50];var Aoq=[180,0,180,40];var Aor=[170,0,170,
40];var Ays="Untreated state";var AYu="ERROR: Animal id scanned in an unexpected state : ";
var AIg="ERROR: Null animal id scanned.";var AYv=[40,40,235,100];var AYw=[120,100
,210,190];var AYx=[20,100,110,190];var AYy=[0,40,40,100];var AYz="\u278A";var AYA=
"Action untreated";var AYB="ERROR: No corresponding ";var AYC=" action found!";var
AYD="Unhandled action: ";var AYE=[0,190,240,220];var AYF=[0,220,232,280];var AYG=[
5,190,235,270];var AYH=[232,60];var AYI=[0,2];var AYJ=[58,58];var AYK="A";var AYL=[
56,0,156,40];var Aos=[156,0,240,40];var AIh=" 7 ";var AYM=[40,0,156,40];var AIi=
"/-1/-2";var AIj=[72,0,144,40];var AcQ="\n";var AIk="(";var AYN=[72,0,156,40];var
AIl="%y/%m";var AYO=[70,0,240,40];var Ayt=[70,0,120,40];var AYP=[160,0,245,40];var
AYQ="- ";var Ayu=" - ";var AYR="{parc}{clr3}";var AYS="{clr0}/^{clr2}";var AYT="{clr0}/^{clr1}";
var AIm=[0,0,85,40];var Aot="?";var AIn=[0,0,120,140];var AYU=[0,0,116,40];var AIo=[
15,0,100,40];var AIp=[110,0,200,40];var Alf=[0,0,34,34];var AYV=[129,0,157,40];var
Alg=[0,0,25,25];var AYW="\u2611";var Ayv="\u2610";var AIq=[5,0,72,40];var AYX=[150
,0,240,40];var AYY=[72,0,139,40];var AIr="Unvalid content class: ";var AYZ=[0,320
,240,360];var AY0=[0,360,240,400];var AY1=[144,0,170,40];var AY2=[187,0,213,40];
var AY3=[207,10,233,50];var AY4=[247,20,273,60];var AY5=[140,0,150,100];var AY6=[
165,0,175,100];var AY7=[185,0,195,100];var AY8=[205,0,215,100];var AY9=[211,0,233
,40];var AY_=[189,0,211,40];var AY$=[167,0,189,40];var AZa=[145,0,167,40];var AIs=[
5,0,240,40];var Aae=[10,0,10,40];var Aou="= \u2211 ";var Ayw=[125,0,240,40];var AZb=[
130,0,170,40];var AZc="\xD8 ";var AZd=[100,10,116,36];var AZe=[117,10,133,36];var
AZf=[135,10,151,36];var AZg="Implement in derieved class";var Ata=[0,80,240,240];
var Aov=[0,120,232,160];var Ah1=[0,160,232,200];var Atb=[0,200,232,240];var Ayx=[
0,240,232,280];var Aow=[0,320,232,360];var AZh=[-61,360,232,400];var AZi=[0,400,
32,440];var AZj=[0,100];var AZk=[0,40,240,240];var AZl=[0,50000];var AZm=[0,500];
var AZn=[0,0,240,105];var AZo=[0,105,240,210];var AZp=[0,40,240,81];var AZq=[0,81
,240,122];var AZr=[0,122,240,163];var AZs=[0,163,240,205];var AZt=[0,205,240,240
];var AZu=[0,200];var AIt=[0,40,240,73];var Ayy=[0,0,30,40];var AIu=[0,40,30,80];
var Ayz=[60,40];var AyA=[60,0];var AIv=[10,0,40,40];var AZv=[0,190,240,260];var AZw=[
0,130,240,190];var AIw=[40,40,200,130];var AZx=[90,230,170,253];var AZy=[80,190,
170,223];var AZz=[0,130,240,180];var AZA=[0,250,240,280];var AZB=[129,0,156,40];
var AZC=[72,0,100,40];var AZD=[100,0,129,40];var AZE=[78,8,103,33];var AIx=[0,0,
300,120];var AZF=[1,-1];var AZG=[20,40,240,120];var AZH=[20,0,240,40];var AZI=[0
,118,240,120];var AZJ=[0,20,130,40];var AZK=[130,20,240,40];var AZL=[0,0,10,20];
var AIy="\u2191";var BqN=[230,0,240,20];var AIz=[0,40,232,80];var BqO=[0,80,232,
160];var BqP=[0,160,230,240];var AIA=" p. p.";var AZM="Unknown animal type";var AZN=[
80,0,140,40];var BqQ=[50,0,172,40];var BqR=[172,0,240,40];var BqS=[0,90,240,92];
var A$3="Unhandled menu item";var A$4=[0,0,50,30];var Atc=[0,0,30,30];var BqT="No AnimalActionTemperatureScreen found!";
var BqU="840003123456789";var BqV=[40,0,230,40];var BqW=[50,10,230,30];var AZO="No AnimalMultiInfoScreen found!";
var AIB=[0,0,25,40];var A$5="/^";var A$6="?/?";var BqX=[100,4,180,40];var BqY=[65
,0,99,40];var BqZ=[165,0,200,40];var A$7=[0,0,60,40];var A$8="9999/^9999";var Bq0=
"Invalid index: ";var Bq1="Unknown AnimalIdGenerationMethod: ";var Bq2="Invalid gender: ";
var Atd="Invalid input state: ";var Bq3="Unhandled AnimalIdGenerationMethod";var
Bq4=[42,35,67,75];var Bq5=[5,35,39,75];var Bq6=[70,40,228,70];var Bq7="Invalid direction for setting focus";
var Ah2="Invalid index";var Bq8="Unvalid direction";var Bq9=[0,0,42,30];var A$9=[
22,0,42,30];var Bq_=[20,0,40,30];var Bq$=[0,0,158,30];var A$_=[32,0,62,30];var A$$=[
64,0,94,30];var Baa=[96,0,126,30];var Bra=[128,0,158,30];var Brb=" %% ";var Brc=[
0,70,240,220];var Brd=[0,237,240,307];var Bab="\n44 %% done";var Bre=[0,0,166,30
];var AIC=[0,0,12,30];var AyB=[14,0,26,30];var AZP=[28,0,40,30];var AZQ=[42,0,54
,30];var AZR=[56,0,68,30];var AZS=[70,0,82,30];var AZT=[84,0,96,30];var AZU=[98,
0,110,30];var Bac=[112,0,124,30];var AZV=[126,0,138,30];var Brf=[140,0,152,30];var
Brg=[154,0,166,30];var Bad=[20,0,46,30];var Brh="\u2642";var Bri="{fnt3}\u2642{fnt1}";
var Brj="\u2640";var Brk="{fnt3}\u2640{fnt1}";var Brl="{parc}";var Brm=[30,30,210
,80];var Brn="Implement in derieved class!";var Bro=[60,4,226,34];var Bae=[30,4,
58,34];var Baf=[4,0,27,40];var Brp=[116,4,228,34];var Brq=[60,4,86,34];var Brr=[
88,4,114,34];var Aox="Implement in derived class!";var Bag="Implement in derived class.";
var Brs="Invalid nais id view: ";var Brt=[0,35,240,75];var Bru=[0,0,110,30];var Brv=[
0,0,26,30];var Brw="100";var AZW="\n\n";var Brx=[240,240];var Bry=[0,240];var Brz=
"Unknown rated attribute: ";var BrA=[120,80,240,280];var BrB=[0,80,120,280];var AID=
" %% (";var AyC=" \xB1 ";var AyD=" (n = ";var AZX=[0,80,232,120];var BrC=[0,242,
232,282];var AZY=[0,280,232,320];var BrD=[35,0,200,40];var BrE=[1,0,31,40];var BrF=[
32,40];var BrG=[32,0];var BrH=[3,0,83,40];var Bah=[180,0,240,40];var BrI=[120,0,
180,40];var BrJ=[65,0,125,40];var BrK=[0,0,120,200];var BrL=[0,40,120,150];var Bai=[
15,160,60,190];var Baj=[60,160,105,190];var BrM=[0,65,240,135];var BrN=[10,112,170
,192];var BrO=[178,129,248,173];var BrP=[0,40,240,110];var BrQ=[10,98,170,178];var
BrR=[178,112,248,156];var BrS=[85,190,160,265];var BrT=[89,194,155,260];var BrU=[
26,190,111,250];var BrV=[125,181,225,211];var BrW=[100,220,183,250];var BrX="38.7";
var BrY=[180,220,225,250];var BrZ="\xB0C";var Br0=[0,99,240,178];var Br1=[100,280
,140,320];var Br2=[0,26,240,105];var Bak=[30,40];var Bal=[30,0];var Br3=[149,0,200
,40];var Br4=[145,40];var Br5=[145,0];var Br6=[38,0,88,40];var AZZ=[0,0,35,40];var
Br7=[0,0,50,40];var Br8=[40,0,200,40];var Br9=[95,0,145,40];var Br_=[65,5,223,35
];var AZ0=[0,0,15,40];var Br$=[72,0,140,40];var Bam="\n(";var Bsa="%y/%m/%d";var
Bsb="%y ";var Bsc=" %m ";var Bsd=" %d ";var Bse="20";var Bsf=[225,0,240,40];var Bsg=[
0,400,232,440];var Bsh=[0,440,232,480];var Bsi=[0,480,232,520];var Bsj=[0,520,232
,560];var Bsk=[0,560,232,600];var Bsl=[0,598,232,638];var Bsm=[5,0,215,40];var Bsn=[
215,8,240,33];var Bso="Implement in dervied class.";var Bsp="ERROR: Unhandled temperature unit: ";
var AIE="ERROR: Unhandled mass unit: ";var Bsq=[-1,160,115,280];var Bsr=[114,160
,230,280];var AZ1=[116,40,232,160];var AyE="Unknown weight class index: ";var Bss=
"< 35";var Bst="35 - 40";var Bsu="40 - 45";var Bsv="45 - 50";var Bsw="\u2265 50";
var Bsx="< 80";var Bsy="80 - 90";var Bsz="90 - 100";var BsA="100 - 110";var BsB=
"\u2265 110";var Ban="Unknown mass unit";var BsC=[143,0,193,40];var Bao=[192,0,240
,40];var BsD=[44,28,44,28];var BsE="0 %%";var BsF=[-1,40,115,160];var BsG=[117,40
,233,160];var BsH=[1,160,117,280];var BsI=[114,158,230,278];var BsJ=[1,280,117,400
];var BsK=[30,0,155,40];var Bap="\u2620";var AZ2=[380,150,380,190];var Baq=[105,
0,155,50];var AZ3=[190,1,240,41];var BsL=[72,0,108,40];var BsM=[108,0,180,40];var
BsN=[60,0,94,40];var BsO=[94,0,200,40];var BsP="Scroll direction not supported.";
var BsQ=[44,0,207,40];var BsR=[207,0,240,40];var BsS="99";var BsT="Unknown birth type";
var BsU=[44,0,189,40];var BsV=[5,0,44,40];var BsW=[44,0,240,40];var BsX=[240,0,240
,40];var BsY="\u25C9";var Bar="\u25CB";var BsZ=[75,4,215,34];var Bs0=[47,4,73,34
];var Bas=[17,4,45,34];var Bs1=[0,0,138,30];var Bs2=[47,4,215,34];var AZ4="Unhandled MotherSelectionFilterMode: ";
var Bs3="Read only!";var Bs4="actions array too small to hold all actions";var Bs5=[
120,40];var Bs6=[120,0];var Bs7=[5,0,115,40];var Bs8=[0,0,205,40];var Bs9=[59,4,
170,34];var Bs_=[59,1,173,37];var Bs$=[175,1,205,37];var Bta=[0,0,37,40];var Btb=[
115,98,205,188];var Btc=[0,40,235,100];var Btd=[2,200,240,280];var Bte=" 01234";
var Btf=[0,0];var Btg=[33,63];var Bth=[25,56];var Bti="Unknown transponder image type: ";
var AIF=[0,0,82,82];var Btj=[0,0,81,26];var Btk=[105,120,195,210];var Btl=[10,140
,100,230];var Bat="Unhandled EartagNrAssignmentMode: ";var Btm="Unhandled Gender";
var Btn=[10,35,35,75];var Bto=[44,40,202,70];var Btp=[204,35,232,75];var Btq="Unvalid FatoryResetScope";
var Bau=[0,120,240,200];var Btr=[144,0,192,40];var Bts=[144,0,240,40];var Btt=[195
,0,245,50];var Btu=[120,0,120,40];var Btv=[140,0,240,30];var Btw=[30,0,232,40];var
Btx=[60,0,160,40];var Bty=[160,0,200,40];var Btz=[150,17,200,40];var BtA=[155,40
];var BtB=[155,0];var BtC=[146,80,240,160];var BtD=[56,80,146,160];var BtE=[0,80
,56,160];var BtF=[13,107,47,141];var BtG=[74,109,104,139];var BtH=[50,100,130,150
];var BtI=[55,112,145,140];var BtJ=[146,112,236,140];var BtK=[150,86,223,110];var
AIG=[0,40,240,120];var BtL="Menu item for animal table field not found";var Bav=[
0,360,240,440];var BtM=[0,440,240,520];var BtN=[5,40,235,104];var BtO=[120,108,226
,218];var BtP=[20,120,110,210];var BtQ=[5,223,235,280];var BtR=[0,0,64,30];var BtS=[
44,0,64,30];var BtT=[185,5,225,35];var BtU=[170,5,234,35];var BtV="Unhandled number of digits";
var BtW=[0,0,126,30];var BtX=[22,5,149,35];var BtY=[149,0,232,40];var Baw=[5,20];
var BtZ=[5,0];var Bt0="Unhandled AnimalIdAutoGenerationMethod: ";var Bt1=[4,440,
236,520];var Bt2="Unhandled TransponderAssignmentIdChangeMethod: ";var Bt3="\n";
var Bt4="%";var Bt5=[0,0,160,120];var Bt6=[2,2,157,117];var Bt7=[50,70];var Bt8=[
50,50];var Bt9=[0,0,168,40];var Bt_=[168,0,240,40];var Bt$=[0,47,232,77];var Bua=[
65,0,101,40];var Bub=[135,0,175,40];var Buc=[85,17,135,40];var Bud=[125,17,175,40
];var Bue=[40,0];var Bax=[0,40,230,280];var Buf="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var Bug="ERROR: Received more animal table fields than expected!";
var Buh=[0,80,240,130];var Bui=[0,80,240,200];var Bay="Unhandled BackupError: ";
var Buj="Unhandled PopupId: ";var Buk=[203,0,240,40];var Bul=[168,0,203,40];var Bum=[
35,0,152,40];var Bun=[0,0,84,40];var Buo=[84,0,167,40];var Bup="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMF={Device:null,A5W:null,GK:null,Init:function(aArg){},DriveCursorHitting:function(
Ta,BF,Fh){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GK._Init.call(this.
GK={I:this},0);this.__proto__=C.AMF;this.H(Cc);this.J(this.GK,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5W=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var J3=
this._variants();if(J3){this.K={};J3._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GK._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GK.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5W)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GK)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A44._variants();
},K:null,_className:"Application::Application"};C.Asv=[240,320];C.AB={Background:
null,Ej:null,AC9:null,An4:0,Init:function(aArg){A.pe([this,this.A0B],this);A.pe([
this,this.BeL],this);},LN:function(G){},A0B:function(s){this.LN(s);},CC:function(
G){},AII:function(s){this.CC(s);},E5:function(G){},AyF:function(s){this.E5(s);},
Dr:function(E){if(this.AC9===E)return;this.AC9=E;A.pe([this,this.BeL],this);},BeL:
function(G){var B;if(!!this.AC9)this.Ej.Ab0((C.BQ.isPrototypeOf(B=A._NewObject(this.
AC9,0))?B:null));else this.Ej.Ab0(null);},_Init:function(aArg){C.Abg._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ej._Init.call(this.
Ej={I:this},0);this.__proto__=C.AB;this.Background.AZ(0x3F);this.Background.H(Cc
);this.Background.L(A.jb.CS);this.Ej.H(BD);this.Ej.Ar(false);this.J(this.Background
,-1);this.J(this.Ej,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abg;this.
Background._Done();this.Ej._Done();C.Abg._Done.call(this);},_ReInit:function(){C.
Abg._ReInit.call(this);this.Background._ReInit();this.Ej._ReInit();},_Mark:function(
D){var B;C.Abg._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WH={Ii:null,Zk:function(E){var B;if(this.Ii===E)return;if(!!this.Ii)this.AqD(
this.Ii,null,null,null,[B=this.Ii,B.AyF],null,false);this.Ii=E;if(!!this.Ii)this.
AkJ(this.Ii,null,null,null,null,null,null,[B=this.Ii,B.AII],null,false);},AEr:function(
){return this.Ii;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WH;this.H([0,0,C.Asv[0],C.Asv[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Ii)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ox={U6:null,Q:null,AnI:null,Zx:null,NP:null,Ov:null,TC:null,TD:null,AGa:255,
IC:function(G){var F;if(!!this.Q){this.A18();var Ac9=(F=this.Q,F[1].call(F[0]));
if(Ac9>20)this.Ov.L(A.jb.E1);else this.Ov.L(A.jb.Gi);this.Ov.L((this.Ov.AQ&0x00FFFFFF
)|(this.AlI(Ac9,0,30)<<24));this.TC.L((this.TC.AQ&0x00FFFFFF)|(this.AlI(Ac9,31,60
)<<24));this.TD.L((this.TD.AQ&0x00FFFFFF)|(this.AlI(Ac9,61,100)<<24));}},A0z:function(
s){this.IC(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0z],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0z],E,0);if(!!E)A.pe([this,
this.A0z],this);},A3l:function(G){var F;if(!!this.AnI)this.Zx.Ar((F=this.AnI,F[1
].call(F[0])));else this.Zx.Ar(false);this.A_g(255);},A9_:function(E){if(A.aaZ(this.
AnI,E))return;if(!!this.AnI)A.z$([this,this.A3l],this.AnI,0);this.AnI=E;if(!!E)A.
zX([this,this.A3l],E,0);if(!!E)A.pe([this,this.A3l],this);},A_g:function(E){if(this.
AGa===E)return;this.AGa=E;if(!!this.U6)this.U6.L((this.U6.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlI:function(A0F,BbY,Bxx){if(A0F<BbY)return 0;else if((A0F>=BbY)&&(A0F<
Bxx))return this.AGa&0xFF;else return 255;},A18:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U6=this.TD;else if((F=this.Q,F[1].call(F[0]))>
30)this.U6=this.TC;else this.U6=this.Ov;}else this.U6=null;},Bk8:function(){return this.
AGa;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.Zx._Init.call(this.Zx={
I:this},0);A.acg.Ap._Init.call(this.NP={I:this},0);A.acg.AL._Init.call(this.Ov={
I:this},0);A.acg.AL._Init.call(this.TC={I:this},0);A.acg.AL._Init.call(this.TD={
I:this},0);this.__proto__=C.Ox;this.H(E7);this.Zx.Fq(2000);this.NP.H(E7);this.NP.
L(A.jb.Text);this.Ov.H(Hq);this.Ov.L(A.jb.E1);this.TC.H(IU);this.TC.L(A.jb.E1);this.
TD.H(Is);this.TD.L(A.jb.E1);this.J(this.NP,0);this.J(this.Ov,0);this.J(this.TC,0
);this.J(this.TD,0);this.Zx.Q=[this,this.Bk8,this.A_g];this.NP.Ax(A.aaL(A.ach.AMQ
));},_Done:function(){this.__proto__=A.Core.P;this.Zx._Done();this.NP._Done();this.
Ov._Done();this.TC._Done();this.TD._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Zx._ReInit();this.NP._ReInit();this.Ov._ReInit(
);this.TC._ReInit();this.TD._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnI)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Zx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TC
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.Zx={_Init:function(aArg){A.acl.Gl._Init.call(
this,aArg);this.__proto__=C.Zx;this.AkV=true;this.B2=0;this.Cx=255;},_className:
"Application::PulseAnimation"};C.Ej={GK:null,AR:null,Background:null,Ox:null,Bo:
null,Dn:null,K7:0,Avh:0,Avi:0,Ao0:0,LF:false,KF:false,Qs:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!He){this.Ao0=A.jb.CS;this.K7=A.jb.Text;}else if(GE){this.Ao0=
this.Avh;this.K7=this.Avi;}else if(Fv){this.Ao0=this.Avh;this.K7=this.Avi;}else{
this.Ao0=A.jb.CS;this.K7=A.jb.Text;}this.Background.L(this.Ao0);if(!!this.GK){this.
GK.Wy(this.Ao0);this.GK.De(this.K7);}this.LF=He;this.KF=Fv;this.Qs=GE;},Qr:function(
G){this.Am();A.pe(this.AR,this);},AiP:function(G){if(this.Dn.Acf)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab0:function(
E){if(this.GK===E)return;if(!!this.GK)this.HN(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.Am();},A9T:function(E){if(this.Avh===E)return;this.
Avh=E;this.Am();},A9U:function(E){if(this.Avi===E)return;this.Avi=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.Ox._Init.call(this.Ox={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=C.Ej;var B;this.
H(BD);this.Background.AZ(0x3F);this.Background.H(BD);this.Background.L(A.jb.CS);
this.Ox.H(O2);this.K7=A.jb.Text;this.Bo.PR(0);this.Bo.Wz(50);this.Dn.Filter=1;this.
Avh=A.jb.AV;this.Avi=A.jb.Bm;this.Ao0=A.jb.Text;this.J(this.Background,0);this.J(
this.Ox,0);this.Ox.At([B=A._GetAutoObject(A.Device.Device),B.Av7,B.AyG]);this.Ox.
A9_([B=A._GetAutoObject(A.Device.Device),B.Av_,B.AyH]);this.Bo.MB=[this,this.Qr];
this.Dn.BL=[this,this.AiP];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Ox._Done();this.Bo._Done();this.Dn._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
Ox._ReInit();this.Bo._ReInit();this.Dn._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ox)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.XW={AeL:null,UA:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E5:function(G){if(this.K&&this.K.E5)return this.K.E5.apply(this,arguments);else
return C.AB.E5.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeL={I:this},0);A.acg.Text._Init.call(this.UA={I:
this},0);this.__proto__=C.XW;this.AeL.H(P7);this.UA.H(P8);this.UA.R(A.jV);this.UA.
L(A.jb.Text);this.UA.Z(false);this.J(this.AeL,0);this.J(this.UA,0);this.AeL.Ax(null
);this.UA.S(A.aaL(A.fl.EK));var J3=this._variants();if(J3){this.K={};J3._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeL._Done();this.UA._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeL._ReInit();this.UA._ReInit();this.UA.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UA)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
XW._variants();},K:null,_className:"Application::BootScreen"};C.AUP={AAC:function(
G){A._GetAutoObject(C.A9).Ab7(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUP;this.Background.L(0xFF000000);this.Ej.Z(false);},_className:
"Application::SleepScreen"};C.Avu={DY:null,Y:null,X8:null,X9:null,VG:null,XZ:null
,VH:null,XX:null,X2:null,TH:null,X1:null,X_:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Aru,B.Ate],0);A._GetAutoObject(A.Device.Helper).AkN();this.Bb(this.VG);this.
N.Cs(A.aaL(A.ach.ADD));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A2W=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A2W)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJV=A._NewObject(A.acl.AF9,0);AJV.Fq(250);AJV.HM(1);AJV.WC(6);this.
Y.HH(this.AV,true,AJV,null);}},CC:function(G){this.A4o(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkN();A._GetAutoObject(A.Device.Helper).Asp();},Fk:function(G){
var B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.
Ay.My(-this.Y.Br[1]);},Ig:function(G){var Cy=(C.Fn.isPrototypeOf(G)?G:null);if(!
Cy)return;if(Cy===this.VG)A._GetAutoObject(C.A9).Cd(35);else if(Cy===this.XZ)A._GetAutoObject(
C.A9).Cd(34);else if(Cy===this.X2)A._GetAutoObject(C.A9).Cd(69);else if(Cy===this.
VH)A._GetAutoObject(C.A9).Cd(8);else if(Cy===this.XX)A._GetAutoObject(C.A9).Cd(50
);else if(Cy===this.TH)A._GetAutoObject(C.A9).Cd(25);else if(Cy===this.X8)A._GetAutoObject(
C.A9).Cd(77);else if(Cy===this.X9)A._GetAutoObject(C.A9).Cd(70);else if(Cy===this.
X_)A._GetAutoObject(C.A9).Cd(6);else if(Cy===this.X1)A._GetAutoObject(C.A9).Cd(63
);},BAF:function(G){A._GetAutoObject(A.Device.Device).Ae0(!A._GetAutoObject(A.Device.
Device).AmP);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmP)this.N.Hx((
A.aaR(A.acf.A7n)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hx((A.aaR(A.acf.
A7n)+CQ)+A.aaR(A.acf.A73).toLowerCase());},Adt:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A4o:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).Mr());this.VH.Zt(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fn._Init.call(this.X8={I:this
},0);C.Fn._Init.call(this.X9={I:this},0);C.Fn._Init.call(this.VG={I:this},0);C.Fn.
_Init.call(this.XZ={I:this},0);C.QV._Init.call(this.VH={I:this},0);C.Fn._Init.call(
this.XX={I:this},0);C.Fn._Init.call(this.X2={I:this},0);C.Fn._Init.call(this.TH={
I:this},0);C.Fn._Init.call(this.X1={I:this},0);C.Fn._Init.call(this.X_={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avu;this.Background.L(A.
jb.CS);this.N.Ar(false);this.N.Z(true);this.Dr(C.AqY);this.DY.AZ(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Y.H(L1);this.Y.JS(9);this.X8.H(P9);this.X8.Aj(true);
this.X8.T(A.aaR(A.acf.Gq));this.X9.H(J2);this.X9.Aj(true);this.X9.T(A.aaR(A.acf.
A7K));this.VG.H(N$);this.VG.Aj(true);this.VG.T(A.aaR(A.acf.Vt));this.XZ.H(P_);this.
XZ.Aj(true);this.XZ.T(A.aaR(A.acf.Tu));this.VH.H(MH);this.VH.Aj(true);this.VH.T(
A.aaR(A.acf.APG));this.XX.H(S8);this.XX.Aj(true);this.XX.T(A.aaR(A.acf.Animal));
this.X2.H(J2);this.X2.Aj(true);this.X2.T(A.aaR(A.acf.A7q));this.TH.H(UQ);this.TH.
Ar(true);this.TH.Aj(true);this.TH.Z(true);this.TH.T(A.aaR(A.acf.A6b));this.X1.H(
Z1);this.X1.Aj(true);this.X1.T(A.aaR(A.acf.Device));this.X_.H(W1);this.X_.Aj(true
);this.X_.T(A.aaR(A.acf.Settings));this.Ay.H(It);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.X8,0);this.J(this.X9,0);this.J(this.VG,0);this.J(this.XZ,0);this.
J(this.VH,0);this.J(this.XX,0);this.J(this.X2,0);this.J(this.TH,0);this.J(this.X1
,0);this.J(this.X_,0);this.J(this.Ay,0);this.N.CE=[this,this.BAF];this.N.Cg=[this
,this.Adt];this.Y.El=[this,this.Fk];this.X8.AR=[this,this.Ig];this.X8.DB(A.aaL(A.
ach.ADG));this.X9.AR=[this,this.Ig];this.X9.DB(A.aaL(A.ach.ADJ));this.VG.AR=[this
,this.Ig];this.VG.DB(A.aaL(A.ach.APK));this.XZ.AR=[this,this.Ig];this.XZ.DB(A.aaL(
A.ach.APV));this.VH.AR=[this,this.Ig];this.VH.DB(A.aaL(A.ach.AQi));this.XX.AR=[this
,this.Ig];this.XX.DB(A.aaL(A.ach.APN));this.X2.AR=[this,this.Ig];this.X2.DB(A.aaL(
A.ach.AQr));this.TH.AR=[this,this.Ig];this.TH.DB(A.aaL(A.ach.AP9));this.X1.AR=[this
,this.Ig];this.X1.DB(A.aaL(A.ach.AP6));this.X_.AR=[this,this.Ig];this.X_.DB(A.aaL(
A.ach.AQM));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.X8._Done();this.X9._Done();this.VG._Done();this.XZ._Done();
this.VH._Done();this.XX._Done();this.X2._Done();this.TH._Done();this.X1._Done();
this.X_._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.X8._ReInit();this.X9.
_ReInit();this.VG._ReInit();this.XZ._ReInit();this.VH._ReInit();this.XX._ReInit(
);this.X2._ReInit();this.TH._ReInit();this.X1._ReInit();this.X_._ReInit();this.Ay.
_ReInit();this.X8.T(A.aaR(A.acf.Gq));this.X9.T(A.aaR(A.acf.A7K));this.VG.T(A.aaR(
A.acf.Vt));this.XZ.T(A.aaR(A.acf.Tu));this.VH.T(A.aaR(A.acf.APG));this.XX.T(A.aaR(
A.acf.Animal));this.X2.T(A.aaR(A.acf.A7q));this.TH.T(A.aaR(A.acf.A6b));this.X1.T(
A.aaR(A.acf.Device));this.X_.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X2
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q_={Number:null,Jg:null,IT:null,TA:null,AsL:0,Init:function(aArg){var B;A.zX([
this,this.BbA],[B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0f],0);A.pe([this,this.
BbA],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An5();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhI();},E5:function(G){A._GetAutoObject(A.Device.
Device).AnX();},Al3:function(G){var F;this.Am();this.TA.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Ael.Ar(true);if(!this.TA.Bw)(F=this.TA.Q,F[2].call(F[0],this.TA.
B2));},BbA:function(s){this.Al3(s);},An5:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gi);break;case 3:this.Background.
L(A.jb.H8);break;default:this.Background.L(A.jb.CJ);}},AkD:function(E){if(this.AsL===
E)return;this.AsL=E;this.Jg.AkD(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jg._Init.call(this.Jg={I:this}
,0);A.acg.Ap._Init.call(this.IT={I:this},0);A.acl.Gl._Init.call(this.TA={I:this}
,0);this.__proto__=C.Q_;var B;this.Background.L(A.jb.CJ);this.N.Z(false);this.Number.
H(UR);this.Number.KR(true);this.Number.L(A.jb.Text);this.Jg.H(Z2);this.Jg.AkD(0);
this.IT.H(W2);this.IT.L(A.jb.AV);this.IT.Zm(true);this.TA.Fq(1750);this.TA.Um(750
);this.TA.Aky(0);this.TA.Ar(true);this.TA.B2=3;this.J(this.Number,0);this.J(this.
Jg,0);this.J(this.IT,0);this.Number.S(A.aaL(A.fl.Af));this.IT.Ax(A.aaL(A.ach.ADI
));this.TA.Q=[B=this.IT,B.ASu,B.Cw];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jg._Done();this.IT._Done();this.TA._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jg._ReInit();this.IT._ReInit();this.TA._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fn={C8:null,ADu:null,AR:null,Bo:null,Dn:null,Background:
null,Mq:null,OC:null,Q1:null,G9:null,A5t:true,LF:false,KF:false,Qs:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hh.Bl.call(this,aSize);this.Mq.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q1.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OC.H(this.Q1.M);this.G9.H([].concat(0,this.G9.M.slice(1,4)));this.G9.H(A.abN(
this.G9.M,aSize[0]));this.G9.H(A.abP(this.G9.M,0));this.G9.H([].concat(this.G9.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hh.Ai.call(this,Ae);var He=((Ae&0x10)===
0x10);var Fv=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!He){this.Q1.L(A.jb.Am1);this.
G9.L(A.jb.CJ);this.OC.Z(true);this.OC.L(A.jb.AQ0);this.Mq.Z(false);}else if(GE){
this.Q1.L(A.jb.Bm);this.G9.L(A.jb.Bm);this.OC.Z(false);this.Mq.Z(true);}else if(
Fv){this.Q1.L(A.jb.Bm);this.G9.L(A.jb.Bm);this.OC.Z(false);this.Mq.Z(true);}else{
this.Q1.L(A.jb.Text);this.G9.L(A.jb.Text);this.OC.Z(true);this.OC.L(A.jb.CS);this.
Mq.Z(false);}this.LF=He;this.KF=Fv;this.Qs=GE;},Qr:function(G){this.Am();A.pe(this.
AR,this);},AiP:function(G){if(this.Dn.Acf)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G9.R(E);},DB:function(E){if(this.C8===E)return;this.C8=E;this.Q1.
Ax(E);this.OC.Ax(E);},AbZ:function(E){if(this.A5t===E)return;this.A5t=E;this.G9.
Z(E);},Ab2:function(E){if(this.ADu===E)return;this.ADu=E;this.Mq.Ax(E);this.Mq.H(
A.abK(this.Mq.M,E.FrameSize));},_Init:function(aArg){C.Hh._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dn={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mq={
I:this},0);A.acg.Ap._Init.call(this.OC={I:this},0);A.acg.Ap._Init.call(this.Q1={
I:this},0);C.CH._Init.call(this.G9={I:this},0);this.__proto__=C.Fn;this.H(Z3);this.
Bo.PR(0);this.Bo.Wz(50);this.Dn.Filter=1;this.Background.H(W3);this.Background.Z(
false);this.Mq.AZ(0x14);this.Mq.L(A.jb.AV);this.Mq.Cw(0);this.OC.L(A.jb.CS);this.
OC.Cw(1);this.G9.H(Z4);this.J(this.Background,0);this.J(this.Mq,0);this.J(this.OC
,0);this.J(this.Q1,0);this.J(this.G9,0);this.Bo.MB=[this,this.Qr];this.Dn.BL=[this
,this.AiP];this.Mq.Ax(A.aaL(A.ach.NT));this.OC.Ax(A.aaL(A.ach.AvH));this.Q1.Ax(A.
aaL(A.ach.AvH));this.G9.S(A.aaL(A.fl.Af));this.G9.A2(A.aaL(A.fl.Ak));this.G9.Cv(
A.aaL(A.fl.Bh));this.ADu=A.aaL(A.ach.NT);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hh;this.Bo._Done();this.Dn._Done();this.Background._Done();this.Mq._Done(
);this.OC._Done();this.Q1._Done();this.G9._Done();C.Hh._Done.call(this);},_ReInit:
function(){C.Hh._ReInit.call(this);this.Bo._ReInit();this.Dn._ReInit();this.Background.
_ReInit();this.Mq._ReInit();this.OC._ReInit();this.Q1._ReInit();this.G9._ReInit(
);this.G9.S(A.aaL(A.fl.Af));this.G9.A2(A.aaL(A.fl.Ak));this.G9.Cv(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axf:null,Background:null,OY:null,Asg:0,Ak6:10,AjC:100,AQ:0,AoT:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OY.H([].concat(2,this.OY.M.slice(1,4)));this.OY.H(A.abN(this.OY.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af2=this.Ak6<this.AjC;var AJt=(
B=this.M)[3]-B[1];var A2J=10;var Aul=AJt;var A4l=0;if(10>AJt)A2J=AJt;if(this.Ak6<
this.AjC)Aul=((Aul*this.Ak6)/this.AjC)|0;if(Aul<A2J)Aul=A2J;if(this.Ak6<this.AjC
)A4l=((this.Bk6()*(AJt-Aul))/(this.AjC-this.Ak6))|0;this.OY.H(A.abP(this.OY.M,A4l
));this.OY.H([].concat(this.OY.M.slice(0,3),A4l+Aul));this.OY.Z(Af2);this.Background.
Z(Af2);if(!!this.Axf&&(this.AoT!==Af2))A.pe(this.Axf,this);this.AoT=Af2;},Bk6:function(
){var E=this.Asg;var HC=this.AjC-this.Ak6;if((HC>0)&&(E>HC))E=HC;if(HC<=0)E=0;return E;
},My:function(E){if(E<0)E=0;if(this.Asg===E)return;this.Asg=E;this.Am();},Mz:function(
E){if(E<0)E=0;if(this.Ak6===E)return;this.Ak6=E;this.Am();},Mx:function(E){if(E<
0)E=0;if(this.AjC===E)return;this.AjC=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OY.L(E);},Bnd:function(E){if(A.aa0(this.Axf,E))return;this.
Axf=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.OY={I:this},0);this.__proto__=
C.Ay;this.H(Z5);this.Ar(false);this.AQ=A.jb.AV;this.Background.AZ(0x0);this.Background.
H(US);this.Background.L(A.jb.CS);this.OY.AZ(0x0);this.OY.H(US);this.OY.L(A.jb.AV
);this.J(this.Background,0);this.J(this.OY,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.OY._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.OY._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axf)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Ce={Hi:null,Y:null,Ay:null,Ap:null,A6S:A.jV,Init:function(aArg){A.pe([this,this.
AA_],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);this.AA_(this);},Al0:
function(G){if(!!this.N.CE)A.pe(this.N.CE,this);},ApK:function(G){if(!!this.N.Cl
)A.pe(this.N.Cl,this);},AAC:function(G){if(!!this.N.Cg)A.pe(this.N.Cg,this);},Fk:
function(G){var B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[
3]-B[1]);this.Ay.My(-this.Y.Br[1]);A.pe([this,this.BA4],this);},AA_:function(G){
var B;var GY=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hx(A.jV);this.N.C1(A.
aaL(A.ach.Yu));this.N.CE=[this,this.Ev];if(!!GY&&!!GY.Amo){this.N.FE(A.jV);this.
N.Jz.Dk(255);this.N.ArN(GY.AqO);this.N.Cs(GY.AvE);this.N.Cg=GY.Amo;}else{this.N.
FE(A.jV);this.N.Cs(null);this.N.Cg=null;}if(!!GY&&!!GY.Ags){this.N.CV(GY.AxK);this.
N.HQ.Dk(GY.Axg);this.N.Anw(GY.AmR);this.N.C2(GY.Aq5);this.N.Cl=GY.Ags;}else{this.
N.CV(A.jV);this.N.C2(null);this.N.Cl=null;}},Ja:function(E){if(this.A6S===E)return;
this.A6S=E;this.Hi.R(E);},Ev:function(G){A._GetAutoObject(C.A9).FA();},BA4:function(
G){var B;var BzY=this.Ay.Background.Fp();var BdO=(BzY?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajd=X;
X=X.Ah;if(((Ajd.U&0x400)===0x400)){if(!!(A.Core.Ake.isPrototypeOf(Ajd)?Ajd:null)
){var BdU=(A.Core.Ake.isPrototypeOf(Ajd)?Ajd:null);BdU.DC([BdO,BdU.EC[1]]);}else
if(!!(A.Core.Et.isPrototypeOf(Ajd)?Ajd:null)){var BfO=(A.Core.Et.isPrototypeOf(Ajd
)?Ajd:null);BfO.H(A.abN(BfO.M,BdO));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CH._Init.call(this.Hi={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Ce;this.N.Z(true);this.Hi.H(W4);this.Hi.Ar(false);this.Hi.R(A.aaR(A.
acf.Settings));this.Hi.L(A.jb.Text);this.Y.H(Ff);this.Y.JS(1);this.Ay.H(It);this.
Ap.H(O3);this.Ap.L(A.jb.Text);this.J(this.Hi,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hi.S(A.aaL(A.fl.Ko));this.Hi.A2(A.aaL(A.fl.Il));this.Y.
El=[this,this.Fk];this.Ap.Ax(A.aaL(A.ach.ADb));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hi._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hi._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hi.R(A.aaR(A.acf.Settings
));this.Hi.S(A.aaL(A.fl.Ko));this.Hi.A2(A.aaL(A.fl.Il));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.AqY={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.BgJ],[B=
A._GetAutoObject(A.Device.Helper),B.U0,B.U3],0);},De:function(E){C.BQ.De.call(this
,E);this.Text.L(E);},BgJ:function(G){this.Text.R(A._GetAutoObject(A.acj.KK).BiE(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AqY;this.Timer.Wz(1);this.Timer.Ar(true);
this.Text.H(Z6);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.MB=[this,this.BgJ
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BQ;this.Timer._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BQ={KS:0xFFFFFFFF,LQ:0,De:function(E){if(
this.KS===E)return;this.KS=E;},Wy:function(E){if(this.LQ===E)return;this.LQ=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BQ;this.H(O4
);},_className:"Application::HeaderContent"};C.N={VU:null,VV:null,VX:null,Ag0:null
,Ag1:null,Ag2:null,CE:null,Cg:null,Cl:null,Background:null,NG:null,Je:null,Jz:null
,HQ:null,Py:null,I8:null,Ld:null,TY:null,TZ:null,AnZ:A.jV,An0:A.jV,An1:A.jV,Aq6:
0,Aq7:0,Aq8:0,Ahi:0,ZA:false,Zz:false,Asm:false,AsB:false,AsA:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VU)this.Je.S(this.VU);if(!!this.VV)this.Jz.S(this.
VV);if(!!this.VX)this.HQ.S(this.VX);switch(this.Ahi){case 0:{this.NG.Z(false);this.
Je.L(A.jb.Bm);this.Jz.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Py.L(A.jb.Bm);this.I8.L(
A.jb.Bm);this.Ld.L(A.jb.Bm);}break;case 1:{if(!this.Ag0)this.NG.H(A.aaT(this.Je.
ASm(),Rl));else this.NG.H(this.Py.Db());this.NG.Z(true);this.Je.L(A.jb.Text);this.
Jz.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Py.L(A.jb.Text);this.I8.L(A.jb.Bm);this.Ld.
L(A.jb.Bm);}break;case 3:{if(!this.Ag2)this.NG.H(A.aaT(this.HQ.ASm(),Rl));else this.
NG.H(this.Ld.Db());this.NG.Z(true);this.Je.L(A.jb.Bm);this.Jz.L(A.jb.Bm);this.HQ.
L(A.jb.Text);this.Py.L(A.jb.Bm);this.I8.L(A.jb.Bm);this.Ld.L(A.jb.Text);}break;case
2:{if(!this.Ag1)this.NG.H(A.aaT(this.Jz.ASm(),Rl));else this.NG.H(this.I8.Db());
this.NG.Z(true);this.Je.L(A.jb.Bm);this.Jz.L(A.jb.Text);this.HQ.L(A.jb.Bm);this.
Py.L(A.jb.Bm);this.I8.L(A.jb.Text);this.Ld.L(A.jb.Bm);}break;default:{this.NG.Z(
false);A.ab5("%s",W5);}}if(!!this.Py.Al){this.Py.Z(true);this.Je.Z(false);}else{
this.Py.Z(false);this.Je.Z(true);}if(this.An0.length<=0){this.I8.Z(true);this.Jz.
Z(false);}else{this.I8.Z(false);this.Jz.Z(true);}if(!!this.Ld.Al){this.Ld.Z(true
);this.HQ.Z(false);}else{this.Ld.Z(false);this.HQ.Z(true);}},Hx:function(E){if(this.
AnZ===E)return;this.AnZ=E;this.Je.R(E);this.Am();},FE:function(E){if(this.An0===
E)return;this.An0=E;this.Jz.R(E);this.Am();},CV:function(E){if(this.An1===E)return;
this.An1=E;this.HQ.R(E);this.Am();},AFf:function(E){if(this.Ahi===E)return;this.
Ahi=E;this.Am();},AE8:function(E){if(this.VU===E)return;this.VU=E;this.Je.S(E);this.
Am();},ArN:function(E){if(this.VV===E)return;this.VV=E;this.Jz.S(E);this.Am();},
Anw:function(E){if(this.VX===E)return;this.VX=E;this.HQ.S(E);this.Am();},A3A:function(
G){this.Am();},C1:function(E){if(this.Ag0===E)return;this.Ag0=E;this.Py.Ax(E);this.
Am();},Cs:function(E){if(this.Ag1===E)return;this.Ag1=E;this.I8.Ax(E);this.Am();
},C2:function(E){if(this.Ag2===E)return;this.Ag2=E;this.Ld.Ax(E);this.Am();},OO:
function(E){if(this.AsA===E)return;this.AsA=E;this.TY.Z(E);if(E)this.Je.H([].concat(
this.TY.M[2],this.Je.M.slice(1,4)));else this.Je.H([].concat(0,this.Je.M.slice(1
,4)));this.Am();},OP:function(E){if(this.AsB===E)return;this.AsB=E;this.TZ.Z(E);
if(E)this.HQ.H(A.abN(this.HQ.M,this.TZ.M[0]));else this.HQ.H(A.abN(this.HQ.M,this.
M[2]));this.Am();},BmB:function(E){if(this.Aq6===E)return;this.Aq6=E;this.Py.Cw(
E);this.Am();},AS9:function(E){if(this.Aq7===E)return;this.Aq7=E;this.I8.Cw(E);this.
Am();},A9Y:function(E){if(this.Aq8===E)return;this.Aq8=E;this.Ld.Cw(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NG={I:this},0);C.CH._Init.call(this.Je={I:this
},0);C.CH._Init.call(this.Jz={I:this},0);C.CH._Init.call(this.HQ={I:this},0);A.acg.
Ap._Init.call(this.Py={I:this},0);A.acg.Ap._Init.call(this.I8={I:this},0);A.acg.
Ap._Init.call(this.Ld={I:this},0);A.acg.Ap._Init.call(this.TY={I:this},0);A.acg.
Ap._Init.call(this.TZ={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
AZ(0x3F);this.Background.H(BD);this.Background.L(A.jb.Ad_);this.NG.H(W6);this.NG.
L(A.jb.CS);this.NG.Z(false);this.Je.AZ(0x14);this.Je.H(UT);this.Je.A6(0x12);this.
Jz.AZ(0x14);this.Jz.H(Z7);this.Jz.A6(0x12);this.HQ.H(Z8);this.Py.H(W7);this.I8.H(
W8);this.Ld.H(S9);this.Ld.Z(false);this.TY.H(UU);this.TY.Z(false);this.TZ.H(UV);
this.TZ.Z(false);this.J(this.Background,0);this.J(this.NG,0);this.J(this.Je,0);this.
J(this.Jz,0);this.J(this.HQ,0);this.J(this.Py,0);this.J(this.I8,0);this.J(this.Ld
,0);this.J(this.TY,0);this.J(this.TZ,0);this.Je.S(A.aaL(A.fl.Ak));this.Je.A2(A.aaL(
A.fl.Bh));this.Je.Q5([this,this.A3A]);this.Jz.S(A.aaL(A.fl.Ak));this.Jz.A2(A.aaL(
A.fl.Bh));this.Jz.Q5([this,this.A3A]);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(
A.fl.Bh));this.HQ.Q5([this,this.A3A]);this.VU=A.aaL(A.fl.Ak);this.VV=A.aaL(A.fl.
Ak);this.VX=A.aaL(A.fl.Ak);this.Py.Ax(null);this.I8.Ax(null);this.Ld.Ax(null);this.
TY.Ax(A.aaL(A.ach.AMI));this.TZ.Ax(A.aaL(A.ach.Ajq));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.P;this.Background._Done();this.NG._Done();this.Je._Done(
);this.Jz._Done();this.HQ._Done();this.Py._Done();this.I8._Done();this.Ld._Done(
);this.TY._Done();this.TZ._Done();A.Core.P._Done.call(this);},_ReInit:function(){
A.Core.P._ReInit.call(this);this.Background._ReInit();this.NG._ReInit();this.Je.
_ReInit();this.Jz._ReInit();this.HQ._ReInit();this.Py._ReInit();this.I8._ReInit(
);this.Ld._ReInit();this.TY._ReInit();this.TZ._ReInit();this.Je.S(A.aaL(A.fl.Ak)
);this.Je.A2(A.aaL(A.fl.Bh));this.Jz.S(A.aaL(A.fl.Ak));this.Jz.A2(A.aaL(A.fl.Bh)
);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(A.fl.Bh));this.AE8(A.aaL(A.fl.Ak));
this.ArN(A.aaL(A.fl.Ak));this.Anw(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.VU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cg)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NG)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Je)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jz).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Py)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ld)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADf={Init:function(aArg){var B;A.zX([this,this.Nn],[B=A._GetAutoObject(A.Device.
Helper),B.Arw,B.AkC],0);A.zX([this,this.Nn],[B=A._GetAutoObject(A.Device.Helper)
,B.A8W,B.AFD],0);A.pe([this,this.Nn],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhE)this.Ab1(A._GetAutoObject(A.Device.Helper).AhE.AOQ());else this.
Ab1(-1);if(!!A._GetAutoObject(A.Device.Helper).Ux)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak4(A._GetAutoObject(A.Device.Helper).Ux.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmX._Init.call(this,aArg);this.__proto__=C.ADf;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGR={Ex:null,Eh:null,
FX:null,XV:null,TB:null,IH:null,II:null,Init:function(aArg){},WF:function(G){var
B;C.DR.WF.call(this,G);var AKJ=this.Azp(A._GetAutoObject(A.Device.Helper).UD.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALA=this.Azp(A._GetAutoObject(
A.Device.Helper).UE.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BzO=
this.Azp(A._GetAutoObject(A.Device.Device).AcD);this.Ex.H(A.abP(this.Ex.M,0));this.
Ex.H([].concat(this.Ex.M.slice(0,3),((B=this.M)[3]-B[1])-AKJ));this.II.H(A.abO(this.
II.M,this.Ex.M[3]-((((B=this.II.M)[3]-B[1])/2)|0)));this.Eh.H(A.abP(this.Eh.M,this.
Ex.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-B[1])-ALA));this.
IH.H(A.abO(this.IH.M,(this.Eh.M[3]-((((B=this.IH.M)[3]-B[1])/2)|0))+2));this.FX.
H(A.abP(this.FX.M,this.Eh.M[3]));this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.
M)[3]-B[1])-BzO));this.TB.H(A.abO(this.TB.M,this.FX.M[3]-((((B=this.TB.M)[3]-B[1
])/2)|0)));this.XV.H(A.abP(this.XV.M,this.FX.M[3]));this.XV.H([].concat(this.XV.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJG:function(AoP){return A._GetAutoObject(A.
Device.Converter).AkZ(AoP);},AKd:function(){return A._GetAutoObject(A.acj.Temperature
).AlJ();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AL._Init.call(this.
Ex={I:this},0);A.acg.AL._Init.call(this.Eh={I:this},0);A.acg.AL._Init.call(this.
FX={I:this},0);A.acg.AL._Init.call(this.XV={I:this},0);A.acg.AL._Init.call(this.
TB={I:this},0);A.acg.AL._Init.call(this.IH={I:this},0);A.acg.AL._Init.call(this.
II={I:this},0);this.__proto__=C.AGR;this.Ex.AZ(0xD);this.Ex.H(AcK);this.Ex.L(A.jb.
Gi);this.Eh.AZ(0xD);this.Eh.H(S_);this.Eh.L(A.jb.H8);this.FX.AZ(0xD);this.FX.H(Z9
);this.FX.L(A.jb.E1);this.XV.AZ(0xD);this.XV.H(Afz);this.XV.L(A.jb.Afs);this.TB.
AZ(0xD);this.TB.H(Z_);this.TB.Awt(A.jb.Afs);this.TB.Awu(A.jb.Afs);this.TB.Aww(A.
jb.E1);this.TB.Awv(A.jb.E1);this.IH.AZ(0xD);this.IH.H(W9);this.IH.Awt(A.jb.E1);this.
IH.Awu(A.jb.E1);this.IH.Aww(A.jb.H8);this.IH.Awv(A.jb.H8);this.II.AZ(0xD);this.II.
H(Z$);this.II.Awt(A.jb.H8);this.II.Awu(A.jb.H8);this.II.Aww(A.jb.Gi);this.II.Awv(
A.jb.Gi);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FX,-1);this.J(this.XV
,-1);this.J(this.TB,-1);this.J(this.IH,-1);this.J(this.II,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FX._Done(
);this.XV._Done();this.TB._Done();this.IH._Done();this.II._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ex._ReInit();this.Eh._ReInit(
);this.FX._ReInit();this.XV._ReInit();this.TB._ReInit();this.IH._ReInit();this.II.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Co={Avj:null,AmR:null,AQe:null,Aq5:null,AqO:null,AvE:null,AR:null,Ags:null,Amo:
null,N:null,Bo:null,QR:null,AxK:A.jV,AUL:false,AGF:false,Apf:false,Axg:255,LF:false
,KF:false,Qs:false,Ai:function(Ae){var B;C.OV.Ai.call(this,Ae);var He=((Ae&0x10)===
0x10);var Fv=((Ae&0x20)===0x20);var IB=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=
A.jb.CJ;var GX=A.jb.Text;if(this.Hk){FS=A.jb.Bm;GX=A.jb.Text;}if(!He){this.Background.
L(A.jb.CS);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IB){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.
Background.L(A.jb.Am1);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GX
);}this.LF=He;this.KF=Fv;this.Qs=GE;this.Apf=IB;},Qr:function(G){this.Am();A.pe(
this.AR,this);},BwL:function(s){this.Qr(s);},I0:function(G){if(this.QR.Acf)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Atg:function(s){this.I0(s);},AeU:function(E){if(A.aa0(this.Ags,E))return;this.
Ags=E;},A_r:function(E){if(this.AxK===E)return;this.AxK=E;},Zp:function(E){if(this.
Avj===E)return;this.Avj=E;},Zq:function(E){if(this.AmR===E)return;this.AmR=E;},A98:
function(E){if(this.Axg===E)return;this.Axg=E;},Gr:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALh();},A29:
function(G){},BGy:function(s){this.A29(s);},Akx:function(E){if(this.Aq5===E)return;
this.Aq5=E;},LX:function(E){if(A.aa0(this.Amo,E))return;this.Amo=E;},Bmu:function(
E){if(this.AqO===E)return;this.AqO=E;},L0:function(E){if(this.AvE===E)return;this.
AvE=E;},Zu:function(E){if(this.AGF===E)return;this.AGF=E;this.ALh();},ALh:function(
){var B;var Qy=this.DK;if(this.AGF)Qy=Qy+A.aaR(A.acf.Colon);if(this.AUL)Qy=Qy+W_;
this.V.R(Qy);},ATu:function(E){if(this.AUL===E)return;this.AUL=E;this.ALh();},_Init:
function(aArg){C.OV._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BK._Init.call(this.QR={I:this},0);this.__proto__=C.Co;this.Bo.PR(0);
this.Bo.Wz(50);this.Bo.Ar(false);this.QR.Filter=1;this.Bo.MB=[this,this.BwL];this.
QR.BL=[this,this.Atg];this.Avj=A.aaL(A.fl.Ak);this.AmR=A.aaL(A.fl.Ak);this.AQe=A.
aaL(A.ach.E2);this.AqO=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OV;this.
Bo._Done();this.QR._Done();C.OV._Done.call(this);},_ReInit:function(){C.OV._ReInit.
call(this);this.Bo._ReInit();this.QR._ReInit();this.Zp(A.aaL(A.fl.Ak));this.Zq(A.
aaL(A.fl.Ak));this.Bmu(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OV._Mark.call(
this,D);if((B=this.Avj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqO)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ags)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Ds={Q:null,Ana:null,Anc:null,Hw:null,H4:null,AM:0,Gp:0,F$:100,FI:0,Init:function(
aArg){},I0:function(G){this.FI=1;C.Eg.I0.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hw.H([0,aSize[1]-40,40,aSize[1]]);this.H4.H([].concat(A.
abe(aSize,AhT),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fv=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hw.L(this.V.AQ);this.H4.L(this.V.AQ);this.Hw.
Z((Fv||GE)&&(this.AM>this.Gp));this.H4.Z((Fv||GE)&&(this.AM<this.F$));if(this.FI===
6)this.Hw.L(A.jb.E1);if(this.FI===7)this.H4.L(A.jb.E1);},BeX:function(G){this.FI=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.AyQ],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qr:function(G){if(this.FI===6)A.pe([this,this.AyQ],this);if(this.FI===
7)A.pe([this,this.AyR],this);if(this.FI===1)A.pe(this.AR,this);this.FI=0;this.Am(
);},C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcT:function(
s){this.C3(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcT],E,0);if(!!E)A.pe([this,
this.AcT],this);},BeY:function(G){this.FI=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.AyR],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Kc:function(G){this.FI=0;}
,AyR:function(s){this.Kc(s);},J9:function(G){this.FI=0;},AyQ:function(s){this.J9(
s);},Bx:function(E){if(E<this.Gp)E=this.Gp;if(E>this.F$)E=this.F$;if(this.AM===E
)return;this.AM=E;this.Am();},Ba1:function(Aq){this.Bx(Aq);},Ga:function(E){if(this.
Gp===E)return;this.Gp=E;this.Am();},EU:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},Ug:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BK._Init.call(this.Ana={I:this},0);A.Core.BK._Init.call(this.Anc={
I:this},0);A.acg.Ap._Init.call(this.Hw={I:this},0);A.acg.Ap._Init.call(this.H4={
I:this},0);this.__proto__=C.Ds;this.H(KY);this.Ana.Filter=6;this.Anc.Filter=7;this.
Background.H(KY);this.V.H(AcL);this.V.R(Lv);this.Hw.H(AhU);this.H4.H(Aob);this.H4.
Cw(1);this.J(this.Hw,0);this.J(this.H4,0);this.Ana.BL=[this,this.BeX];this.Ana.D1=[
this,this.BeX];this.Anc.BL=[this,this.BeY];this.Anc.D1=[this,this.BeY];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(null);this.Hw.Ax(A.aaL(A.ach.
Ajr));this.H4.Ax(A.aaL(A.ach.Ajr));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Ana._Done();this.Anc._Done();this.Hw._Done();this.H4._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Ana._ReInit();this.
Anc._ReInit();this.Hw._ReInit();this.H4._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ana)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Du:function(){return-1;},C7:function(aIndex){return-1;},Gk:function(
aIndex){return A.jV;},DZ:function(A_){return-1;},H3:function(){return-1;},At:function(
E){this.Q=E;},B$:function(Aq){this.At(Aq);},ACV:function(aIndex){return null;},ACX:
function(aIndex){return 0;},B_:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Ir={AxB:null
,BT:null,AG4:A.jV,AVo:A.jV,Aj2:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Ds.Ai.call(this,Ae);if(!this.AxB){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVo);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AG4);}}else(B=
this.AxB)?B[1].call(B[0],this):null;},Kc:function(G){var F;var BO=this.AM;C.Ds.Kc.
call(this,G);this.Bx(this.AM+this.Aj2);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J9:function(G){var F;var BO=this.AM;C.
Ds.J9.call(this,G);this.Bx(this.AM-this.Aj2);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IQ:function(E){if(this.AG4===E)return;
this.AG4=E;this.Am();},Jb:function(E){if(this.AVo===E)return;this.AVo=E;this.Am(
);},AS_:function(E){if(this.Aj2===E)return;this.Aj2=E;},A_o:function(E){if(A.aa0(
this.AxB,E))return;this.AxB=E;},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.CH._Init.call(this.BT={I:this},0);this.__proto__=C.Ir;this.H(KY);this.BT.H(Oa);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Ds;this.BT._Done();C.Ds._Done.call(this
);},_ReInit:function(){C.Ds._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ds._Mark.call(this
,D);if((B=this.AxB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Dz:null,HL:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Ds.Bl.call(this,aSize);this.Dz.H([this.Hw.M[2]-10,this.Hw.M[1],this.
H4.M[0]+10,this.Hw.M[3]]);this.Dz.AFg((B=this.Dz.M)[2]-B[0]);this.Dz.HH(this.Dz.
Gs,true,null,null);},Ai:function(Ae){var B;C.Ds.Ai.call(this,Ae);var Fv=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.Dz.AbC(0,this.Dz.AY-1);this.Hw.Z(Fv||GE);this.H4.
Z(Fv||GE);},C3:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},Kc:function(G){var F;var BO=this.AM;C.Ds.Kc.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J9:function(G){var F;var BO=this.AM;
C.Ds.J9.call(this,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var Qx=0;if(E<this.Gp){E=this.F$;Qx=-this.Dz.Wa*this.Dz.AY;}if(E>this.F$){E=this.
Gp;Qx=this.Dz.Wa;}C.Ds.Bx.call(this,E);if(!!Qx)this.Dz.Gb(Qx);this.Dz.GT(this.AM
);if(this.Dz.BjB())this.Dz.Bo9(false,false);this.Dz.HH(this.Dz.Gs,true,this.HL,null
);},Hl:function(G){var B;var Gf=this.Dz.G5;var CA=(C.CH.isPrototypeOf(B=this.Dz.
Ci)?B:null);if(!CA)return;CA.S(this.V.B6);CA.Aw2(19);CA.A2(this.V.AmQ);CA.Bnn(19
);CA.Cv(this.V.AqN);CA.Bno(19);CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gk(Gf));
else CA.R(W$);CA.H(A.abK(CA.M,[this.Dz.Wa,(B=this.Dz.M)[3]-B[1]]));},Bwn:function(
s){this.Hl(s);},CK:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Ga(0);this.EU(this.AC.Du()-1);this.Dz.Jy(this.AC.Du());this.Dz.AbC(0,this.Dz.AY-
1);}},_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Core.Dz._Init.call(this.
Dz={I:this},0);A.acl.Gl._Init.call(this.HL={I:this},0);this.__proto__=C.BW;this.
H(KY);this.Dz.N0(C.CH);this.HL.WC(23);this.HL.HM(1);this.HL.Fq(200);this.J(this.
Dz,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dz.Hl=[this,this.Bwn
];this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.Dz._Done();this.HL.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
Dz._ReInit();this.HL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SP={FM:null,OF:null,Dl:null,Au:null,Jw:null,HK:null,Ps:null,VS:null,Q0:null,
Yg:null,P6:null,Gx:null,Gw:null,FY:0,A8:0,Ask:false,Bjw:false,Init:function(aArg
){},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hw.Z(false);this.H4.Z(false);var AtQ=
A.jV;if(!!this.Dl){this.Ps.R(this.Au.Format(Aaa));this.Q0.R(this.Au.Format(AhV));
this.P6.R(this.Au.Format(AhW));}if(this.A8===1){this.HK.Z(true);this.HK.H(this.Ps.
M);this.HK.L(this.V.AQ);this.Ps.L(this.Background.AQ);this.Q0.L(this.V.AQ);this.
P6.L(this.V.AQ);AtQ=A.aaR(A.acf.A5M);}else if(this.A8===2){this.HK.Z(true);this.
HK.H(this.Q0.M);this.HK.L(this.V.AQ);this.Ps.L(this.V.AQ);this.Q0.L(this.Background.
AQ);this.P6.L(this.V.AQ);AtQ=A.aaR(A.acf.Hj);}else if(this.A8===3){this.HK.Z(true
);this.HK.H(this.P6.M);this.HK.L(this.V.AQ);this.Ps.L(this.V.AQ);this.Q0.L(this.
V.AQ);this.P6.L(this.Background.AQ);AtQ=A.aaR(A.acf.Year);}else{this.HK.Z(false);
this.Ps.L(this.V.AQ);this.Yg.L(this.V.AQ);this.Q0.L(this.V.AQ);this.VS.L(this.V.
AQ);this.P6.L(this.V.AQ);}if(AtQ.length>0){if(this.AGF)this.V.R((((this.DK+AcM)+
AtQ)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcM)+
AtQ)+String.fromCharCode(0x29));}else this.ALh();},Qr:function(G){if(this.FI===1
)A.pe([this,this.U$],this);else if(this.FI===4)A.pe([this,this.AiF],this);else if(
this.FI===5)A.pe([this,this.Air],this);C.Ds.Qr.call(this,G);},Kc:function(G){switch(
this.A8){case 0:C.Ds.Kc.call(this,G);break;case 3:break;default:this.Adv(this);}
},J9:function(G){switch(this.A8){case 0:C.Ds.J9.call(this,G);break;default:this.
Aiq(this);}},Adx:function(G){var F;if(!!this.Dl)this.Uk((F=this.Dl,F[1].call(F[0
])));},Ab4:function(E){if(A.aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.Adx
],this.Dl,0);this.Dl=E;if(!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx
],this);},Uk:function(E){if(this.FY===E)return;this.FY=E;this.Au.Initialize(this.
FY);this.Am();},Adv:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
U$],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Bby:function(s){this.Adv(s);},U$:
function(G){this.Ew(this.A8+1);},Al2:function(G){this.FI=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiF],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Al1:function(
G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Air],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiF:function(G){var B;var F;var BO=this.FY;switch(this.A8){
case 1:{if(this.Ask){var ABh=A._NewObject(A.Core.An2,0);ABh.Kl=1;if(this.Au.J(ABh
).JR()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Au.GL<this.Au.Zj()
)this.Au.Lp(this.Au.GL+1);}break;case 2:{if(this.Ask){var ABh=A._NewObject(A.Core.
An2,0);ABh.Kl=this.Au.Zj();if(this.Au.J(ABh).JR()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Au.Uo(this.Au.Hj+1);if(this.Au.Zj()<this.Au.GL)this.Au.Lp(this.
Au.Zj());}break;case 3:{if(this.Ask){var A1u=A._NewObject(A.Core.Bs,0);A1u.Initialize(
this.Au.JR());A1u.Year+=1;if(A1u.JR()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
Uk(((B=(this.Au.JR()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.
Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}},Air:function(G){var B;var F;var BO=
this.FY;if(this.A8===1)this.Au.Lp(this.Au.GL-1);if(this.A8===2){this.Au.Uo(this.
Au.Hj-1);if(this.Au.Zj()<this.Au.GL)this.Au.Lp(this.Au.Zj());}if(this.A8===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.Uk(((B=(this.Au.JR()|
0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],
this.FY));A.abo(this.Dl,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[
0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=
null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aey));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U$];}break;case 2:{(F=this.N,F[
1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmZ
));(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
Aiq];(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aey));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U$];}break;case 3:{(F=this.N,F[
1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmZ
));(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
Aiq];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FM.AkO((F=this.N,F[1].call(F[
0])));}},AFB:function(E){if(this.Ask===E)return;this.Ask=E;},FV:function(G){this.
Ew(1);},Hd:function(G){this.Ew(0);},Ew:function(EN){var F;var AAq=this.A8;if(!this.
A8){this.FM.Ajy((F=this.N,F[1].call(F[0])));if((EN===1)&&!this.FY){var BO=this.FY;
this.Uk(A._GetAutoObject(A.Device.Helper).Dv());if(this.FY!==BO){if(!!this.Dl)(F=
this.Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}}}this.A8=EN;this.Bjw=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.Bw=
!!this.A8;if((!!AAq&&!this.A8)&&!!this.OF)A.pe(this.OF,this);this.Am();},Aiq:function(
G){if(this.A8>1)this.Ew(this.A8-1);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Au={I:this},0);A.Core.BK._Init.call(this.Jw={I:this}
,0);A.acg.AL._Init.call(this.HK={I:this},0);A.acg.Text._Init.call(this.Ps={I:this
},0);A.acg.Text._Init.call(this.VS={I:this},0);A.acg.Text._Init.call(this.Q0={I:
this},0);A.acg.Text._Init.call(this.Yg={I:this},0);A.acg.Text._Init.call(this.P6={
I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.Core.BK._Init.call(this.Gw={
I:this},0);this.__proto__=C.SP;this.H(UW);this.V.R(Aoc);this.Hw.Z(false);this.H4.
Z(false);this.Jw.Filter=1;this.HK.H(Aod);this.HK.L(0x55FFFFFF);this.Ps.H(Aoe);this.
Ps.I$(true);this.Ps.A6(0x14);this.VS.H(Aof);this.VS.I$(true);this.VS.A6(0x14);this.
VS.R(Ak$);this.Q0.H(AsV);this.Q0.I$(true);this.Yg.H(Ax2);this.Yg.I$(true);this.Yg.
R(Ak$);this.P6.H(Ax3);this.P6.I$(true);this.P6.A6(0x11);this.Gx.Filter=4;this.Gx.
Bw=false;this.Gw.Filter=5;this.Gw.Bw=false;this.J(this.HK,0);this.J(this.Ps,0);this.
J(this.VS,0);this.J(this.Q0,0);this.J(this.Yg,0);this.J(this.P6,0);this.Jw.BL=[this
,this.Bby];this.Ps.S(A.aaL(A.fl.EK));this.VS.S(A.aaL(A.fl.EK));this.Q0.S(A.aaL(A.
fl.EK));this.Yg.S(A.aaL(A.fl.EK));this.P6.S(A.aaL(A.fl.EK));this.Gx.BL=[this,this.
Al2];this.Gx.D1=[this,this.AiF];this.Gw.BL=[this,this.Al1];this.Gw.D1=[this,this.
Air];this.FM=A._NewObject(C.Aer,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ds;this.Au._Done();this.Jw._Done();this.HK._Done();this.Ps._Done();this.VS._Done(
);this.Q0._Done();this.Yg._Done();this.P6._Done();this.Gx._Done();this.Gw._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Au._ReInit(
);this.Jw._ReInit();this.HK._ReInit();this.Ps._ReInit();this.VS._ReInit();this.Q0.
_ReInit();this.Yg._ReInit();this.P6._ReInit();this.Gx._ReInit();this.Gw._ReInit(
);this.Ps.S(A.aaL(A.fl.EK));this.VS.S(A.aaL(A.fl.EK));this.Q0.S(A.aaL(A.fl.EK));
this.Yg.S(A.aaL(A.fl.EK));this.P6.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Ds._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OI={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.BdR],[B=A._GetAutoObject(A.Device.Device),B.A8E,B.Ba8],0);
A.pe([this,this.BdR],this);},Du:function(){return 16;},Gk:function(aIndex){return this.
LanguageToString.BS(this.C7(aIndex));},At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(
A.Device.Device).Anz(E);},BdR:function(G){this.Q=A._GetAutoObject(A.Device.Device
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
1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BS(aIndex);},DZ:function(A_){return A_;},H3:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Aw6(E);}
,Init:function(aArg){var B;A.zX([this,this.Bgn],[B=A._GetAutoObject(A.Device.Device
),B.Arx,B.Atf],0);A.pe([this,this.Bgn],this);},Bgn:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B_,this.B$],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Rd;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AU4={Ajw:null,Acz:null,Ky:null,AP:null,A$:null,Bl:function(aSize){C.Ba.Bl.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Ky.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajw.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.Acz.H(this.Ajw.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Ky.L(this.V.AQ);},Init:function(aArg){},Cf:function(Ad){if(!this.AX
)return;this.Hr=Ad;if(!!this.AX){var AlA=this.AX.Hu(Ad,6);var ApU=this.AX.CF(Ad,
7);var At6=this.AX.I6(Ad,9);this.T(A._GetAutoObject(A.acj.KK).ACR(AlA));this.Ky.
R(A._GetAutoObject(A.acj.KK).A6s(AlA));this.Acz.R(A._GetAutoObject(A.Device.Converter
).AkZ(ApU));this.Acz.L(A._GetAutoObject(A.acj.Assessment).Xv(At6));this.Ajw.L(A.
_GetAutoObject(A.acj.Assessment).Qo(At6));this.Am();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Ajw={I:this},0);A.acg.Text._Init.
call(this.Acz={I:this},0);A.acg.Text._Init.call(this.Ky={I:this},0);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AU4;this.V.H(O5);this.Acz.L(A.jb.Text);this.Ky.R(Rm);this.Ky.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A$.H(Ax4);this.A$.L(A.jb.Bc);this.J(this.Ajw,0);this.J(this.Acz
,0);this.J(this.Ky,0);this.J(this.AP,0);this.J(this.A$,0);this.Acz.S(A.aaL(A.fl.
Af));this.Ky.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajw._Done();this.Acz._Done();this.Ky._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajw._ReInit(
);this.Acz._ReInit();this.Ky._ReInit();this.AP._ReInit();this.A$._ReInit();this.
Acz.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acz)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.Gc={AX:null,AR:null,Cq:null,AD:
null,Afj:null,NL:null,KM:A.jV,Li:null,AVq:true,Hl:function(G){var B;var Gf=this.
AD.G5;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ci)?B:null);if(!Aa)return;Aa.Zn(this.
AX);Aa.Cf(Gf);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GO]));
},N0:function(E){if(E===this.Li)return;this.Li=E;this.AD.N0(E);},Zn:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Cf],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Cf],E,0);A.pe([this,this.Cf],this);},Cf:function(G){if(this.AVq===
false)return;if(!!this.AX){this.AD.Jy(this.AX.B9());this.AD.AbC(0,this.AD.AY-1);
}else this.AD.Jy(0);if((this.AD.AY>0)&&(this.FN()<0))this.GT(0);if(this.FN()>=this.
AD.AY){this.GT(0);this.AD.Gb(0);}if(this.AD.AY<=0){this.NL.Z(true);this.GT(-1);}
else{this.NL.Z(false);this.ABG(null,null);}},Fk:function(G){var B;this.Afj.Mx(this.
AD.GO*this.AD.AY);this.Afj.Mz((B=this.AD.M)[3]-B[1]);this.Afj.My(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cq.CO){case 4:if(this.FN()>0)this.GT(
this.FN()-1);break;case 5:if(this.FN()<(this.AD.AY-1))this.GT(this.FN()+1);break;
default:this.Cq.NH=true;}this.AD.HH(this.FN(),true,null,null);}else if((this.Cq.
CO!==4)&&(this.Cq.CO!==5))this.Cq.NH=true;},Zr:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbC(0,this.AD.AY);},GT:function(E){this.AD.GT(E);this.AD.HH(E,
true,null,null);},FN:function(){return this.AD.Gs;},Dj:function(E){if(this.KM===
E)return;this.KM=E;this.NL.R(E);},ABG:function(AcW,E8){this.AD.ABG(AcW,E8);},ATJ:
function(E){if(this.AVq===E)return;this.AVq=E;if(E)A.pe([this,this.Cf],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afj={I:this},
0);A.acg.Text._Init.call(this.NL={I:this},0);this.__proto__=C.Gc;this.H(UX);this.
Li=C.Ba;this.Cq.Filter=147;this.AD.AZ(0x3F);this.AD.H(UX);this.AD.Ae6(40);this.Afj.
AZ(0x3A);this.Afj.H(AsW);this.NL.AZ(0x3F);this.NL.H(Ax5);this.NL.Hm(10);this.NL.
KR(true);this.NL.A6(0xA);this.NL.L(A.jb.Text);this.J(this.AD,0);this.J(this.Afj,
0);this.J(this.NL,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.AD.
El=[this,this.Fk];this.AD.Hl=[this,this.Hl];this.NL.S(A.aaL(A.fl.Af));},_Done:function(
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
AX=E;},Cf:function(Ad){A.ab5("%s",Ax6);},_Init:function(aArg){C.Co._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GJ={Bg:null,FD:null
,DP:null,E3:null,V0:null,Kj:null,KM:A.jV,AT6:0,AT7:0,Afk:false,CP:function(){if(
A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.Device
).Dw(0);A.pe([this,this.BaM],this);}},Init:function(aArg){var B;A.zX([this,this.
Bev],[B=A._GetAutoObject(A.Device.Device),B.AEt,B.AIK],0);A.zV([this,this.Af8],A.
_GetAutoObject(A.Device.Device).An,0);A.zV([this,this.AcE],A._GetAutoObject(A.Device.
Device).An,0);A.zX([this,this.BA9],[B=A._GetAutoObject(A.Device.Helper),B.U0,B.U3
],0);A.pe([this,this.AcE],this);A.pe([this,this.A0o],this);A.pe([this,this.Axw],
this);},Wx:function(G){this.Agt();var O;for(O=this.Kj.Du()-1;O>=0;O=O-1)switch(this.
Kj.C7(O)){case 0:this.AdP(A.aaR(A.acf.A4X),[this,this.BnM],0);break;case 14:this.
AdP(A.aaR(A.acf.Bg4),[this,this.BnN],14);break;case 1:this.AdP(A.aaR(A.acf.Temperature
),[this,this.ATL],1);break;case 2:this.AdP(A.aaR(A.acf.Rating),[this,this.ATK],2
);break;case 3:this.AdP(A.aaR(A.acf.Aft),[this,this.ATM],3);break;default:A.ab5(
"%s",Ax7);}A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Mh(A.aaR(A.acf.Bh0
));A._GetAutoObject(A.Device.Device).Dw(6);},BaM:function(s){this.Wx(s);},DE:function(
G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var AfV=this.Kj.DZ(A._GetAutoObject(
A.Device.Device).Kj);if(this.Afk)return;switch(D5.CO){case 6:{AfV=AfV-1;if(AfV<0
)AfV=this.Kj.Du()-1;A._GetAutoObject(A.Device.Device).Zl(this.Kj.C7(AfV));}break;
case 7:{AfV=AfV+1;if(AfV>=this.Kj.Du())AfV=0;A._GetAutoObject(A.Device.Device).Zl(
this.Kj.C7(AfV));}break;default:D5.NH=true;}},CC:function(G){if(this.DP.Az1()){this.
DP.Ac6();if(this.DP.Az1()===false)this.Bg.ATJ(true);return;}else if(this.Afk)this.
AA1(this);if(!!this.Bg)this.Bg.ATJ(true);},E5:function(G){if(!!this.Bg)this.Bg.ATJ(
false);},Axw:function(G){var B;if(!!this.Bg)this.HN(this.Bg);this.Bg=A._NewObject(
C.AMu,0);this.Bg.H(Aog);this.Bg.Zn(A._GetAutoObject(A.Device.Device).An);this.Bg.
Zr([this,this.Alh]);if(!!this.FD)this.Bg.A9r([B=this.FD,B.A8Y,B.A_k]);this.A3_(this
);this.J(this.Bg,0);if(this.Afk===false)this.Bb(this.Bg);this.Bev(this);this.BoU(
this);},A9o:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Dr(this.A6F(
));this.Ej.AR=[this,this.Alh];this.ALn(this);this.Ej.Ar(true);this.Bb(this.Ej);this.
Afk=true;},Bks:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);if(!this.
Bg)return;var Aa=(C.AB5.isPrototypeOf(B=this.Bg.AD.Bi_(this.Bg.AD.Gs))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).G7(Aa.Hr);else A._GetAutoObject(A.Device.
Helper).W.E6();this.Agf();},Agc:function(G){var F;if(!this.E3)this.A50(this);else
switch((F=this.E3,F[1].call(F[0]))){case 0:this.A50(this);break;case 1:this.Bh1(
this);break;case 9:this.A51(this);break;case 4:this.Bh3(this);break;case 6:this.
Bh4(this);break;case 8:this.ANW(this);break;case 2:this.Bh5(this);break;case 3:this.
Bh6(this);break;case 7:this.Bh7(this);break;case 5:this.Bh8(this);break;case 10:
this.Bh_(this);break;case 11:this.Bh2(this);break;case 12:this.A56(this);break;case
13:this.A57(this);break;case 14:this.A52(this);break;case 18:this.A53(this);break;
case 15:this.A54(this);break;case 16:this.A58(this);break;case 17:this.A55(this);
break;default:A.ab5("%s%e",AfA,(F=this.E3,F[1].call(F[0])));}},Alh:function(s){this.
Agc(s);},BlF:function(G){this.Dr(C.Kp);this.Ej.AR=null;this.Afk=false;this.AcE(this
);this.BfR();this.N.TY.Dk(255);this.N.TZ.Dk(255);this.Bb(this.Bg);this.Ej.Ar(false
);},Anm:function(G){A._GetAutoObject(C.A9).FA();},Dj:function(E){if(this.KM===E)
return;this.KM=E;this.A3_(this);},Abq:function(){switch(A._GetAutoObject(A.Device.
Device).Kj){case 14:return C.AM6;case 2:return C.AM8;case 1:return C.AM9;case 3:
return C.AM$;case 0:case 8:case 9:case 10:case 4:case 5:case 6:return C.Aqs;case
7:return C.AB4;case 12:return C.AB7;case 11:return C.AB3;case 13:return C.AB6;default:
throw new Error(Aoh);}},Abr:function(){switch(A._GetAutoObject(A.Device.Device).
Kj){case 14:return C.APx;case 2:return C.ADm;case 1:return C.APz;case 3:return C.
APB;case 4:return C.ADi;case 0:case 8:case 9:case 10:case 5:case 6:return C.AqZ;
case 7:return C.ADk;case 12:return C.ADl;case 11:return C.ADj;case 13:return C.ADn;
default:throw new Error(Aoh);}},Bev:function(G){this.ATn(A._GetAutoObject(A.Device.
Device).Kj);if(!!this.Bg){this.Bg.N0(this.Abq());this.BoZ(this);}},BoZ:function(
G){var B;if(!!this.FD)this.HN(this.FD);this.FD=(C.Dc.isPrototypeOf(B=A._NewObject(
this.Abr(),0))?B:null);this.FD.H(IV);if(!!this.Bg)this.Bg.A9r([B=this.FD,B.A8Y,B.
A_k]);this.J(this.FD,0);},Bkq:function(G){this.Q8(this);A._GetAutoObject(A.Device.
Device).Dw(0);},ATL:function(G){A._GetAutoObject(A.Device.Device).Zl(1);},ATK:function(
G){A._GetAutoObject(A.Device.Device).Zl(2);},ATM:function(G){A._GetAutoObject(A.
Device.Device).Zl(3);},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A.
_GetAutoObject(A.Device.Helper).Mr());},A0o:function(s){this.Q8(s);},HO:function(
G){if(this.Afk){this.ALn(this);return;}this.N.C1(A.aaL(A.ach.E2));this.N.Cs(A.aaL(
A.ach.ADE));this.N.C2(A.aaL(A.ach.Options));this.N.CE=[this,this.Anm];this.N.Cg=[
this,this.A9o];this.N.Cl=[this,this.BaM];this.N.Hx(A.jV);this.N.FE(A.jV);this.N.
CV(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.I8.Dk(100);this.N.
Cg=null;}else this.N.I8.Dk(255);},AyP:function(s){this.HO(s);},AdP:function(Aie,
Aif,AJi){A._GetAutoObject(C.BR).ABF(Aie,Aif,[this,this.A8S,this.ATn],AJi);},Af8:
function(G){this.A3_(this);if(this.Afk)A.pe([this,this.ALn],this);},Agf:function(
){A._GetAutoObject(C.A9).Cd(9);},A3_:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QI()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dj(
A.aaR(A.acf.AEi));else if(A._GetAutoObject(A.Device.Helper).Arc(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dj(this.KM);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).AC0(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dj(A.aaR(A.acf.AN6));else this.Bg.Dj(A.aaR(
A.acf.AN5));}else this.Bg.Dj(A.aaR(A.acf.AR8));},AEJ:function(G){var F;if(!!this.
E3)(F=this.E3,F[2].call(F[0],0));},AwN:function(E){if(A.aaZ(this.E3,E))return;if(
!!this.E3)A.z$([this,this.A0x],this.E3,0);this.E3=E;if(!!E)A.zX([this,this.A0x],
this.E3,0);if(!!E)A.pe([this,this.A0x],this);},AEP:function(G){var F;if(!!this.E3
)(F=this.E3,F[2].call(F[0],1));},AwS:function(G){var F;if(!!this.E3)(F=this.E3,F[
2].call(F[0],2));},ATr:function(G){var F;if(!!this.E3)(F=this.E3,F[2].call(F[0],
3));},ATF:function(G){var F;if(!!this.E3)(F=this.E3,F[2].call(F[0],7));},ATG:function(
G){var F;if(!!this.E3)(F=this.E3,F[2].call(F[0],5));},Bh5:function(G){if(!this.Bg
)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FN());this.DP.
Qm(1);}},I2:function(Aie,Aif,AoW){A._GetAutoObject(C.BR).ABF(Aie,Aif,[this,this.
A8T,this.ATo],AoW);},BlP:function(G){var F;if(!!this.E3)(F=this.E3,F[2].call(F[0
],4));},Bh3:function(G){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(A.Device.
Helper).G7(this.Bg.FN());this.DP.BBz();}},BlQ:function(G){var F;if(!!this.E3)(F=
this.E3,F[2].call(F[0],6));},Bh4:function(G){if(!this.Bg)return;if(this.M_()){A.
_GetAutoObject(A.Device.Helper).G7(this.Bg.FN());this.DP.BBA();}},ANW:function(G
){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.
FN());this.DP.Qm(1024);}},Bm2:function(G){var F;if(!!this.E3)(F=this.E3,F[2].call(
F[0],8));},Aks:function(G){var F;if(!!this.E3)(F=this.E3,F[2].call(F[0],9));},Bh6:
function(G){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(
this.Bg.FN());this.DP.Qm(2);}},A50:function(G){if(!this.Bg)return;if(this.M_()){
A._GetAutoObject(A.Device.Helper).G7(this.Bg.FN());if(A._GetAutoObject(A.Device.
Helper).Aj4(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A3(66,true,A.jV,0,null);else this.BBk();}},Bh1:function(G){if(!this.
Bg)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FN());this.
DP.Qm(16);}},BBk:function(){A._GetAutoObject(C.A9).Cd(94);},Bh7:function(G){if(!
this.Bg)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FN());
this.DP.Qm(4);}},Bh8:function(G){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).G7(this.Bg.FN());this.DP.Qm(8);}},A51:function(G){var B;if(!this.
Bg)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FN());if(this.
Afk){A.zX([this,this.AAs],[B=this.DP,B.SB,B.Fc],0);this.AA1(this);}this.DP.Ac6();
}},Auz:function(Aie,Aif,Byk){A._GetAutoObject(C.BR).BgZ(Aie,Aif,Byk);},ALn:function(
G){this.N.Hx(A.jV);this.N.CV(A.jV);this.N.C1(A.aaL(A.ach.Aex));this.N.CE=[this,this.
BlF];this.N.TY.Dk(100);this.N.TZ.Dk(100);var Gg=A._GetAutoObject(A.Device.Device
).An.B9();if(Gg<=0){this.N.Cs(null);this.N.C2(null);this.N.Cg=null;this.N.Cl=null;
this.N.Zz=false;this.N.ZA=false;}else if(Gg===1){this.N.Cs(null);this.N.C2(A.aaL(
A.ach.Aey));this.N.Cg=null;this.N.Cl=[this,this.Alh];this.N.Zz=false;this.N.ZA=false;
}else{this.N.Cs(A.aaL(A.ach.Aq4));this.N.C2(A.aaL(A.ach.Ara));this.N.Cg=[this,this.
A3t];this.N.Cl=[this,this.A3u];this.N.Zz=true;this.N.ZA=true;}},A3t:function(G){
if(!this.Bg)return;if(this.Bg.FN()<(A._GetAutoObject(A.Device.Device).An.B9()-1)
)this.Bg.GT(this.Bg.FN()+1);},A3u:function(G){if(!this.Bg)return;if(this.Bg.FN()>
0)this.Bg.GT(this.Bg.FN()-1);},BoU:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bg.GT(Bf);A.ab5("%s",Aoi);}}},M_:function(){return this.
Bg.FN()>=0;},Akf:function(){return A._GetAutoObject(A.Device.Device).An.B9()>5;}
,Agt:function(){this.Bg0();A._GetAutoObject(C.BR).Tv(A.aaR(A.acf.AUt),[this,this.
A9o]);A._GetAutoObject(C.BR).Fy();},AcE:function(G){if(this.Afk)this.ALn(this);else
this.HO(this);},AA1:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E$();var Ay4=aFilter.DL(1,4);if(!!Ay4){aFilter.Nj(Ay4);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GT(0);}},BGD:function(s){this.
AA1(s);},AAs:function(G){var B;if(!this.DP.EV&&this.Afk){A.z$([this,this.AAs],[B=
this.DP,B.SB,B.Fc],0);this.AA1(this);}},BnD:function(G){var F;if(!!this.E3)(F=this.
E3,F[2].call(F[0],10));},Bh_:function(G){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).G7(this.Bg.FN());this.DP.Qm(256);}},A3j:function(G){var F;this.
ATo((F=this.E3,F[1].call(F[0])));A.pe([this,this.AyP],this);},A0x:function(s){this.
A3j(s);},BlM:function(G){var F;if(!!this.E3)(F=this.E3,F[2].call(F[0],11));},Bh2:
function(G){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(
this.Bg.FN());this.DP.Qm(4096);}},A56:function(G){if(!this.Bg)return;if(this.M_(
)){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FN());this.DP.Qm(16384);}},A57:function(
G){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.
FN());this.BBl();}},BBl:function(){A._GetAutoObject(C.A9).Ab7(75);},A52:function(
G){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.
FN());this.DP.Qm(32768);}},A54:function(G){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).G7(this.Bg.FN());this.DP.Qm(65536);}},A58:function(G){if(!this.
Bg)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FN());this.
DP.Qm(131072);}},Bg0:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Arc(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.AB_));else A._GetAutoObject(C.BR).Tv(A.
aaR(A.acf.AB_),[this,this.Bkq]);A._GetAutoObject(C.BR).Tv(A.aaR(A.acf.AkR),[this
,this.Bks]);A._GetAutoObject(C.BR).Fy();},A55:function(G){if(!this.Bg)return;if(
this.M_()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.FN());this.DP.Qm(128);}}
,BA9:function(G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Cf],this);},A53:function(
G){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).G7(this.Bg.
FN());this.DP.Qm(524288);}},Bh9:function(G){if(!this.Bg)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).G7(this.Bg.FN());this.DP.Qm(262144);}},ATn:function(E){if(this.
AT6===E)return;this.AT6=E;A.abo([this,this.A8S,this.ATn],0);},ATo:function(E){if(
this.AT7===E)return;this.AT7=E;A.abo([this,this.A8T,this.ATo],0);},A6F:function(
){return C.Yp;},BfR:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Nj(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},BnM:function(G){A._GetAutoObject(A.Device.Device).Zl(0);
},BnN:function(G){A._GetAutoObject(A.Device.Device).Zl(14);},A8S:function(){return this.
AT6;},A8T:function(){return this.AT7;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADm._Init.call(this.V0={I:this},0);C.Kj._Init.call(this.Kj={I:this},0);
this.__proto__=C.GJ;this.Background.H(Cc);this.N.Z(true);this.N.OO(true);this.N.
OP(true);this.Ej.A9T(A.jb.CS);this.Ej.A9U(A.jb.Text);this.Dr(C.Kp);this.V0.H(IV);
this.KM=A.aaR(A.acf.AEi);this.J(this.V0,0);this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V0._Done();this.Kj._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V0._ReInit();
this.Kj._ReInit();this.Dj(A.aaR(A.acf.AEi));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.E3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.AB5={AP:null,A$:null,UG:null,Acx:
null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UG.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A$.H([
this.UG.M[2]-1,0,this.UG.M[2]+1,aSize[1]]);this.Acx.H([this.UG.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UG.L(this.V.AQ);this.Acx.L(this.
V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){this.T(this.
AX.CF(Ad,1).toFixed());this.UG.R(this.AX.CF(Ad,2).toFixed());this.Acx.R(this.AX.
CF(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.Text._Init.call(this.UG={I:this},0);A.acg.Text._Init.call(this.Acx={I:this
},0);this.__proto__=C.AB5;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.UG.L(A.jb.Text
);this.Acx.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.UG,0);this.
J(this.Acx,0);this.UG.S(A.aaL(A.fl.Af));this.Acx.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.UG.
_Done();this.Acx._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.UG._ReInit();this.Acx._ReInit(
);this.UG.S(A.aaL(A.fl.Af));this.Acx.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad8={Oz:null,SQ:null,Ml:null,Init:function(aArg){var B;A.zX([this,this.A21],[
B=A._GetAutoObject(A.Device.Device),B.Av_,B.AyH],0);A.zX([this,this.Adw],[B=A._GetAutoObject(
A.Device.Device),B.Av7,B.AyG],0);A.pe([this,this.Adw],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SQ.R(A._GetAutoObject(A.Device.Device).Aa3.toFixed()+Xa
);this.Oz.Z(A._GetAutoObject(A.Device.Device).AmB);},Adw:function(G){this.Am();}
,MV:function(G){A._GetAutoObject(C.A9).FA();},A21:function(G){if(A._GetAutoObject(
A.Device.Device).AmB===false){this.Oz.Z(false);A._GetAutoObject(C.A9).FA();}else
this.Oz.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oz={I:this},0);A.acg.Text._Init.call(this.SQ={I:this},0);C.Ml._Init.call(
this.Ml={I:this},0);this.__proto__=C.Ad8;var B;this.Background.L(A.jb.CS);this.N.
Z(true);this.N.CV(A.aaR(A.acf.Ok));this.Oz.H(Aoj);this.Oz.R(A.aaR(A.acf.Oz));this.
Oz.L(A.jb.Text);this.Oz.Z(false);this.SQ.H(AsX);this.SQ.R(AsY);this.SQ.L(A.jb.Text
);this.Ml.H(AsZ);this.J(this.Oz,0);this.J(this.SQ,0);this.J(this.Ml,0);this.N.Cl=[
this,this.MV];this.Oz.S(A.aaL(A.fl.Af));this.SQ.S(A.aaL(A.fl.Af));this.Ml.At([B=
A._GetAutoObject(A.Device.Device),B.Av7,B.AyG]);this.Ml.A9_([B=A._GetAutoObject(
A.Device.Device),B.Av_,B.AyH]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oz._Done();this.SQ._Done();this.Ml._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oz._ReInit();this.SQ._ReInit();this.Ml._ReInit(
);this.N.CV(A.aaR(A.acf.Ok));this.Oz.R(A.aaR(A.acf.Oz));this.Oz.S(A.aaL(A.fl.Af)
);this.SQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ml)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Ml={Ad3:null,Ad4:null,IC:function(G){var F;if(!!this.Q){this.A18();var Ac9=(
F=this.Q,F[1].call(F[0]));if(Ac9>20)this.Ov.L(A.jb.E1);else this.Ov.L(A.jb.Gi);this.
Ov.L((this.Ov.AQ&0x00FFFFFF)|(this.AlI(Ac9,0,20)<<24));this.TC.L((this.TC.AQ&0x00FFFFFF
)|(this.AlI(Ac9,21,40)<<24));this.TD.L((this.TD.AQ&0x00FFFFFF)|(this.AlI(Ac9,41,
60)<<24));this.Ad3.L((this.Ad3.AQ&0x00FFFFFF)|(this.AlI(Ac9,61,80)<<24));this.Ad4.
L((this.Ad4.AQ&0x00FFFFFF)|(this.AlI(Ac9,81,100)<<24));}},A18:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U6=this.Ad4;else if((F=this.Q,F[
1].call(F[0]))>60)this.U6=this.Ad3;else if((F=this.Q,F[1].call(F[0]))>40)this.U6=
this.TD;else if((F=this.Q,F[1].call(F[0]))>20)this.U6=this.TC;else this.U6=this.
Ov;}else this.U6=null;},_Init:function(aArg){C.Ox._Init.call(this,aArg);A.acg.AL.
_Init.call(this.Ad3={I:this},0);A.acg.AL._Init.call(this.Ad4={I:this},0);this.__proto__=
C.Ml;this.H(Aok);this.NP.H(Aok);this.Ov.H(Aol);this.TC.H(As0);this.TD.H(Ax8);this.
Ad3.H(Ax9);this.Ad3.L(A.jb.E1);this.Ad4.H(Ax_);this.Ad4.L(A.jb.E1);this.J(this.Ad3
,0);this.J(this.Ad4,0);this.NP.Ax(A.aaL(A.ach.AMP));},_Done:function(){this.__proto__=
C.Ox;this.Ad3._Done();this.Ad4._Done();C.Ox._Done.call(this);},_ReInit:function(
){C.Ox._ReInit.call(this);this.Ad3._ReInit();this.Ad4._ReInit();},_Mark:function(
D){var B;C.Ox._Mark.call(this,D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUZ={N7:null,Lr:null,Ak5:null,ZV:null,ZU:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApL],[B=A._GetAutoObject(A.Device.Device),B.
ASJ,B.A0h],0);A.zX([this,this.ApL],[B=A._GetAutoObject(A.Device.Device),B.ASM,B.
A0j],0);A.zX([this,this.ApL],[B=A._GetAutoObject(A.Device.Device),B.A88,B.Bbh],0
);A.pe([this,this.ApL],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABt(this);this.BCt(this);this.DJ(this);},BAK:function(G){A._GetAutoObject(
A.Device.Device).AsE();},ApL:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZV.Z(false);break;case 4:{var A3N;if(!A._GetAutoObject(A.Device.Device).Afp)A3N=
0;else A3N=((A._GetAutoObject(A.Device.Device).AxN*100)/A._GetAutoObject(A.Device.
Device).Afp)|0;this.ZV.Bx(A3N);this.ZV.Z(true);}break;default:A.ab5("%s%e",As1,A.
_GetAutoObject(A.Device.Device).SyncState);}},BCt:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CJ);this.Lr.L(A.jb.Text);this.N7.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gi);this.Lr.L(A.jb.Bm);this.N7.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",As1,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C1(null);this.N.CE=null;this.N.CV(A.jV);this.N.Cl=null;}break;
case 7:{this.N.C1(null);this.N.CE=null;this.N.CV(A.aaR(A.acf.Ok));this.N.Cl=[this
,this.BAK];}break;default:A.ab5("%s%e",As1,A._GetAutoObject(A.Device.Device).SyncState
);}},ABt:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lr.R(A.aaR(A.acf.BpL));break;case 1:this.Lr.R(A.aaR(A.acf.BpI));break;
case 2:this.Lr.R(A.aaR(A.acf.BpF));break;case 3:this.Lr.R(A.aaR(A.acf.BpJ));break;
case 4:this.Lr.R((A.aaR(A.acf.BpH)+Ax$)+A._GetAutoObject(A.Device.Helper).Nl(A._GetAutoObject(
A.Device.Helper).Nl(A.aaR(A.acf.Boh),P$,A._GetAutoObject(A.Device.Device).AxN.toFixed(
)),Aya,A._GetAutoObject(A.Device.Device).Afp.toFixed()));break;case 5:this.Lr.R(
A.aaR(A.acf.BpK));break;case 7:this.Lr.R(A.aaR(A.acf.BpG));break;default:A.ab5("%s%e"
,As1,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CH._Init.call(this.N7={I:this},0);C.CH._Init.call(this.Lr={I:this
},0);A.acg.Ap._Init.call(this.Ak5={I:this},0);A.acr.ADp._Init.call(this.ZV={I:this
},0);A.acr.ADq._Init.call(this.ZU={I:this},0);this.__proto__=C.AUZ;this.N.Z(true
);this.N7.H(AVU);this.N7.R(A.aaR(A.acf.N7));this.Lr.AZ(0x3F);this.Lr.H(AVV);this.
Lr.A6(0x12);this.Ak5.H(AVW);this.Ak5.L(A.jb.AV);this.ZV.H(AVX);this.ZV.Ar(false);
this.ZV.Bx(0);this.ZU.Bnx(0);this.ZU.A_x(0);this.ZU.A_v(A.jb.AV);this.ZU.A_u(0);
this.ZU.AF0(AHi);this.J(this.N7,0);this.J(this.Lr,0);this.J(this.Ak5,0);this.J(this.
ZV,0);this.N7.S(A.aaL(A.fl.EK));this.N7.A2(A.aaL(A.fl.Af));this.N7.Cv(A.aaL(A.fl.
Ak));this.Lr.S(A.aaL(A.fl.Af));this.Lr.A2(A.aaL(A.fl.Ak));this.Lr.Cv(A.aaL(A.fl.
Bh));this.Ak5.Ax(A.aaL(A.ach.AQQ));this.ZV.OnSetAppearance(this.ZU);this.ZU.A_w(
A.aaL(A.ach.NT));this.ZU.A_t(A.aaL(A.ach.NT));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N7._Done();this.Lr._Done();this.Ak5._Done();this.ZV._Done(
);this.ZU._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N7._ReInit();this.Lr._ReInit();this.Ak5._ReInit();this.ZV._ReInit();this.
ZU._ReInit();this.N7.R(A.aaR(A.acf.N7));this.N7.S(A.aaL(A.fl.EK));this.N7.A2(A.aaL(
A.fl.Af));this.N7.Cv(A.aaL(A.fl.Ak));this.Lr.S(A.aaL(A.fl.Af));this.Lr.A2(A.aaL(
A.fl.Ak));this.Lr.Cv(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqX={_Init:function(aArg){C.ADf._Init.call(this,aArg
);this.__proto__=C.AqX;this.A9W(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cb:A.abi(3,0,{0:2,2:1}),Du:function(
){return 3;},C7:function(aIndex){if(aIndex>=3)return-1;return this.Cb.Get(aIndex
);},Gk:function(aIndex){return this.GenderToString.BS(this.C7(aIndex));},DZ:function(
A_){var O=0;while(O<3){if(this.Cb.Get(O)===A_)return O;O=O+1;}return-1;},H3:function(
){var O=0;var max=-1;while(O<3){if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}
return max;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal)this.Animal.JT(
E);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.AfZ],[B=this.Animal,B.Wv,B.JT],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AfZ],[B=this.Animal,B.Wv,B.JT],0);A.pe([this,this.AfZ],this);},AfZ:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B_,
this.B$],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cb=[]).__proto__=C.Gender.Cb;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cb:A.abi(4,0,{1:1,2:2,3:3}),Du:function(){return 4;},C7:function(aIndex){if(
aIndex>=4)return-1;return this.Cb.Get(aIndex);},Gk:function(aIndex){return this.
BirthTypeToString.BS(this.C7(aIndex));},DZ:function(A_){var O=0;while(O<4){if(this.
Cb.Get(O)===A_)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(
O<4){if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}return max;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Akt(E);},A1m:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B_,this.
B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1m],[B=this.Animal,B.ASo,B.Akt],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1m],[B=this.Animal,B.ASo,B.Akt],0);A.pe([this,this.A1m],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cb=[]).__proto__=C.BirthType.Cb;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Aco:null,Du:
function(){return A._GetAutoObject(A.Device.Helper).AdY.ME;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdY.ME)return-1;return A._GetAutoObject(
A.Device.Helper).AdY.Get(aIndex);},Gk:function(aIndex){return this.Aco.BS(this.C7(
aIndex));},DZ:function(A_){var O=0;while(O<A._GetAutoObject(A.Device.Helper).AdY.
ME){if(A._GetAutoObject(A.Device.Helper).AdY.Get(O)===A_)return O;O=O+1;}return-
1;},H3:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UD.
ME){if(A._GetAutoObject(A.Device.Helper).UD.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UD.Get(O);O=O+1;}return max;},At:function(E){C.AC.At.call(this,E);if(!!this.
Animal)this.Animal.EB(E);},A1f:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B_,this.B$],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1f],[B=this.Animal,B.PP,B.EB],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1f],[B=this.Animal,B.PP,B.EB],0);A.pe([
this,this.A1f],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Aco={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Aco._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Aco._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUF={Init:function(aArg){var B;A.pe([this,this.AfD],this);A.zX([this,this.AfD
],[B=A._GetAutoObject(A.Device.Device),B.Arx,B.Atf],0);},A3S:function(G){A._GetAutoObject(
A.Device.Device).A3(38,true,A.jV,0,[this,this.Bbz]);},A3r:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).Asq(this);},A1F:function(G){var F;if(this.A8===1){var BO=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlQ)this.D7=this.AlQ;if(this.D7<A._GetAutoObject(
A.Device.Device).AcD)this.D7=A._GetAutoObject(A.Device.Device).AcD;if(this.DW!==
BO){if(!!this.JW)(F=this.JW,F[2].call(F[0],this.D7));A.abo(this.JW,0);}}if(this.
A8===2){var BO=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BO){if(!!this.JV)(F=this.JV,F[2].call(F[0],this.DW));A.abo(this.JV,0);
}}this.DJ(this);this.Am();},A2f:function(G){var F;if(this.A8===1){var BO=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.
JW)(F=this.JW,F[2].call(F[0],this.D7));A.abo(this.JW,0);}}if(this.A8===2){var BO=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlL)this.DW=this.AlL;if(this.DW!==BO){
if(!!this.JV)(F=this.JV,F[2].call(F[0],this.DW));A.abo(this.JV,0);}}this.DJ(this
);this.Am();},GH:function(G){this.PJ.R(AHj+A._GetAutoObject(A.Device.Converter).
AkZ(this.D7));this.PK.R(AHj+A._GetAutoObject(A.Device.Converter).AkZ(this.DW));this.
Sw.R(A._GetAutoObject(A.acj.Temperature).AlJ());},A1_:function(Atm){if(Atm===1)return this.
PJ;else if(Atm===2)return this.PK;else return null;},_Init:function(aArg){C.Acm.
_Init.call(this,aArg);this.__proto__=C.AUF;this.AlL=5000;this.AlQ=3000;this.T(A.
aaR(A.acf.Arn));this.Background.H(AfB);this.V.H(BD);this.V.R(A.aaR(A.acf.AGV));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Acm._ReInit.call(this);this.T(
A.aaR(A.acf.Arn));this.V.R(A.aaR(A.acf.AGV));},_className:"Application::SettingsItemThresholdsTemp"
};C.EA={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.EA;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CJ);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa6:null,Aa_:null,Aa8:
null,Background:null,Aa5:null,Aa9:null,Aa7:null,AjD:null,Ars:null,VL:null,A5:0,BAq:
function(G){if(this.AjD.CO===6){if(this.A5===1)this.AnF(2);else if(this.A5===2)this.
AnF(3);else this.AnF(1);}else if(this.AjD.CO===7){if(this.A5===3)this.AnF(2);else
if(this.A5===2)this.AnF(1);else this.AnF(3);}},AnF:function(E){if(this.A5===E)return;
this.A5=E;switch(this.A5){case 3:this.Background.H(this.Aa5.M);break;case 2:this.
Background.H(this.Aa9.M);break;case 1:this.Background.H(this.Aa7.M);break;default:
this.Background.H(Aom);}},I0:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ho._Init.
call(this.Aa6={I:this},0);A.acg.Ho._Init.call(this.Aa_={I:this},0);A.acg.Ho._Init.
call(this.Aa8={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aen._Init.call(this.Aa5={I:this},0);A.acg.Aen._Init.call(this.Aa9={I:this},0);A.
acg.Aen._Init.call(this.Aa7={I:this},0);A.Core.BK._Init.call(this.AjD={I:this},0
);A.Core.BK._Init.call(this.Ars={I:this},0);A.Graphics.AMG._Init.call(this.VL={I:
this},0);this.__proto__=C.Rating;this.H(AVY);this.Aa6.H(AHk);this.Aa6.L(A.jb.Text
);this.Aa6.AnD(Ala);this.Aa6.Nh(3);this.Aa6.Z(true);this.Aa_.H(AHl);this.Aa_.L(A.
jb.Text);this.Aa_.AnD(Ala);this.Aa_.Nh(3);this.Aa_.Z(true);this.Aa8.H(AHm);this.
Aa8.L(A.jb.Text);this.Aa8.AnD(Ala);this.Aa8.Nh(3);this.Aa8.Z(true);this.Background.
H(Aom);this.Background.L(A.jb.AV);this.Aa5.H(AHk);this.Aa5.L(A.jb.E1);this.Aa5.AnD(
Ala);this.Aa5.Z(true);this.Aa9.H(AHl);this.Aa9.L(A.jb.H8);this.Aa9.AnD(Ala);this.
Aa9.Z(true);this.Aa7.H(AHm);this.Aa7.L(A.jb.Gi);this.Aa7.AnD(Ala);this.Aa7.Z(true
);this.AjD.Filter=147;this.Ars.Filter=1;this.VL.Bl7(360);this.VL.Bnl(22);this.VL.
Bnv(2);this.J(this.Aa6,0);this.J(this.Aa_,0);this.J(this.Aa8,0);this.J(this.Background
,0);this.J(this.Aa5,0);this.J(this.Aa9,0);this.J(this.Aa7,0);this.Aa6.Zs(this.VL
);this.Aa_.Zs(this.VL);this.Aa8.Zs(this.VL);this.Background.Ax(A.aaL(A.ach.NS));
this.Aa5.Zs(this.VL);this.Aa9.Zs(this.VL);this.Aa7.Zs(this.VL);this.AjD.BL=[this
,this.BAq];this.Ars.BL=[this,this.I0];},_Done:function(){this.__proto__=A.Core.P;
this.Aa6._Done();this.Aa_._Done();this.Aa8._Done();this.Background._Done();this.
Aa5._Done();this.Aa9._Done();this.Aa7._Done();this.AjD._Done();this.Ars._Done();
this.VL._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa6._ReInit();this.Aa_._ReInit();this.Aa8._ReInit();this.Background.
_ReInit();this.Aa5._ReInit();this.Aa9._ReInit();this.Aa7._ReInit();this.AjD._ReInit(
);this.Ars._ReInit();this.VL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa9).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ars)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Ass={Akh:null,Asc:null,Background:null,TP:null,TJ:null,AbV:null,AbU:null,AbT:
null,Acs:null,Acr:null,Acq:null,Ach:null,Acg:null,AbN:null,AbM:null,Ab9:null,Ab8:
null,Aqy:null,Init:function(aArg){},Bj4:function(G){this.AbV.R(AVZ);this.AbU.R(A.
jV);this.AbT.R(A.jV);this.Acs.R(AHn);this.Acr.R(A.jV);this.Acq.R(A.jV);this.Ach.
R(A.jV);this.Acg.R(A.jV);this.AbN.R(A.jV);this.AbM.R(A.jV);this.Ab9.R(A.jV);this.
Ab8.R(A.jV);},Bn0:function(G){this.TJ.Z(true);this.TP.Z(true);var IE=this.Im();if(
!IE)return;this.TP.R(IE.GetFPS().toFixed()+AV0);this.TJ.R(AV1);this.TJ.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akh={I:this},0);A.Core.Timer._Init.call(this.Asc={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TP={I:this},0);A.acg.
Text._Init.call(this.TJ={I:this},0);A.acg.Text._Init.call(this.AbV={I:this},0);A.
acg.Text._Init.call(this.AbU={I:this},0);A.acg.Text._Init.call(this.AbT={I:this}
,0);A.acg.Text._Init.call(this.Acs={I:this},0);A.acg.Text._Init.call(this.Acr={I:
this},0);A.acg.Text._Init.call(this.Acq={I:this},0);A.acg.Text._Init.call(this.Ach={
I:this},0);A.acg.Text._Init.call(this.Acg={I:this},0);A.acg.Text._Init.call(this.
AbN={I:this},0);A.acg.Text._Init.call(this.AbM={I:this},0);A.acg.Text._Init.call(
this.Ab9={I:this},0);A.acg.Text._Init.call(this.Ab8={I:this},0);A.acg.AL._Init.call(
this.Aqy={I:this},0);this.__proto__=C.Ass;this.H(AcN);this.Ar(false);this.Akh.PR(
2000);this.Akh.Wz(1);this.Akh.Ar(true);this.Asc.Ar(true);this.Background.AZ(0x3F
);this.Background.H(AcN);this.Background.L(0x78000000);this.TP.H(AV2);this.TP.A6(
0x14);this.TP.R(A.jV);this.TP.L(0xFFFFFC00);this.TP.Z(false);this.TJ.H(AV3);this.
TJ.A6(0x11);this.TJ.R(A.jV);this.TJ.Z(false);this.AbV.H(AHo);this.AbV.A6(0x11);this.
AbV.R(A.jV);this.AbU.H(As2);this.AbU.A6(0x11);this.AbU.R(A.jV);this.AbT.H(AHp);this.
AbT.A6(0x14);this.AbT.R(A.jV);this.Acs.H(AHq);this.Acs.A6(0x11);this.Acs.R(A.jV);
this.Acr.H(Ayb);this.Acr.A6(0x11);this.Acr.R(A.jV);this.Acq.H(AHr);this.Acq.A6(0x14
);this.Acq.R(A.jV);this.Ach.H(Ayc);this.Ach.A6(0x11);this.Ach.R(A.jV);this.Acg.H(
AV4);this.Acg.A6(0x14);this.Acg.R(A.jV);this.AbN.H(AV5);this.AbN.A6(0x11);this.AbN.
R(A.jV);this.AbM.H(AV6);this.AbM.A6(0x14);this.AbM.R(A.jV);this.Ab9.H(AV7);this.
Ab9.A6(0x11);this.Ab9.R(A.jV);this.Ab8.H(AHs);this.Ab8.A6(0x14);this.Ab8.R(A.jV);
this.Aqy.H(AV8);this.J(this.Background,0);this.J(this.TP,0);this.J(this.TJ,0);this.
J(this.AbV,0);this.J(this.AbU,0);this.J(this.AbT,0);this.J(this.Acs,0);this.J(this.
Acr,0);this.J(this.Acq,0);this.J(this.Ach,0);this.J(this.Acg,0);this.J(this.AbN,
0);this.J(this.AbM,0);this.J(this.Ab9,0);this.J(this.Ab8,0);this.J(this.Aqy,0);this.
Akh.MB=[this,this.Bj4];this.Asc.MB=[this,this.Bn0];this.TP.S(A.aaL(A.fl.Ak));this.
TJ.S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));this.AbU.S(A.aaL(A.fl.Ak));this.
AbT.S(A.aaL(A.fl.Ak));this.Acs.S(A.aaL(A.fl.Ak));this.Acr.S(A.aaL(A.fl.Ak));this.
Acq.S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));this.
AbN.S(A.aaL(A.fl.Ak));this.AbM.S(A.aaL(A.fl.Ak));this.Ab9.S(A.aaL(A.fl.Ak));this.
Ab8.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akh._Done();this.Asc._Done();this.Background._Done();this.TP._Done();this.TJ.
_Done();this.AbV._Done();this.AbU._Done();this.AbT._Done();this.Acs._Done();this.
Acr._Done();this.Acq._Done();this.Ach._Done();this.Acg._Done();this.AbN._Done();
this.AbM._Done();this.Ab9._Done();this.Ab8._Done();this.Aqy._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akh._ReInit();this.
Asc._ReInit();this.Background._ReInit();this.TP._ReInit();this.TJ._ReInit();this.
AbV._ReInit();this.AbU._ReInit();this.AbT._ReInit();this.Acs._ReInit();this.Acr.
_ReInit();this.Acq._ReInit();this.Ach._ReInit();this.Acg._ReInit();this.AbN._ReInit(
);this.AbM._ReInit();this.Ab9._ReInit();this.Ab8._ReInit();this.Aqy._ReInit();this.
TP.S(A.aaL(A.fl.Ak));this.TJ.S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));this.AbU.
S(A.aaL(A.fl.Ak));this.AbT.S(A.aaL(A.fl.Ak));this.Acs.S(A.aaL(A.fl.Ak));this.Acr.
S(A.aaL(A.fl.Ak));this.Acq.S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));this.Acg.
S(A.aaL(A.fl.Ak));this.AbN.S(A.aaL(A.fl.Ak));this.AbM.S(A.aaL(A.fl.Ak));this.Ab9.
S(A.aaL(A.fl.Ak));this.Ab8.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ach)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab8)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGD={FM:null,Dl:null,Au:null,Jw:null,HK:null,Ue:null,Bc:null,Sl:null,Gx:null
,Gw:null,FY:0,A8:0,BjC:false,Init:function(aArg){},Ai:function(Ae){C.Ds.Ai.call(
this,Ae);this.Hw.Z(false);this.H4.Z(false);if(!!this.Dl){this.Sl.R(this.Au.Format(
O6));this.Ue.R(this.Au.Format(Ayd));}if(this.A8===1){this.HK.Z(true);this.HK.H(this.
Sl.M);this.HK.L(A.jb.Bm);this.Sl.L(this.Background.AQ);this.Ue.L(A.jb.Bm);}else if(
this.A8===2){this.HK.Z(true);this.HK.H(this.Ue.M);this.HK.L(A.jb.Bm);this.Sl.L(A.
jb.Bm);this.Ue.L(this.Background.AQ);}else{this.HK.Z(false);this.Sl.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Ue.L(this.V.AQ);}},Qr:function(G){if(this.FI===1)A.pe([
this,this.U$],this);else if(this.FI===4)A.pe([this,this.AiF],this);else if(this.
FI===5)A.pe([this,this.Air],this);C.Ds.Qr.call(this,G);},Kc:function(G){switch(this.
A8){case 0:C.Ds.Kc.call(this,G);break;case 2:break;default:this.Adv(this);}},J9:
function(G){switch(this.A8){case 0:C.Ds.J9.call(this,G);break;default:this.Aiq(this
);}},Adx:function(G){var F;if(!!this.Dl)this.Uk((F=this.Dl,F[1].call(F[0])));},Ab4:
function(E){if(A.aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.Adx],this.Dl
,0);this.Dl=E;if(!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx],this);
},Uk:function(E){if(this.FY===E)return;this.FY=E;this.Au.Initialize(this.FY);this.
Am();},Adv:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.U$],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},U$:function(G){this.Ew(this.A8+1);},Al2:
function(G){this.FI=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiF],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},Al1:function(G){this.FI=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Air],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiF:function(G){
var B;var F;var BO=this.FY;if(this.A8===1)this.Au.Any(this.Au.AjR+1);if(this.A8===
2)this.Au.AnB(this.Au.Av0+1);this.Au.AnE(0);this.Uk(((B=(this.Au.JR()|0))<0)?B+0x100000000:
B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FY));A.abo(this.
Dl,0);}},Air:function(G){var B;var F;var BO=this.FY;if(this.A8===1)this.Au.Any(this.
Au.AjR-1);if(this.A8===2)this.Au.AnB(this.Au.Av0-1);this.Au.AnE(0);this.Uk(((B=(
this.Au.JR()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[
2].call(F[0],this.FY));A.abo(this.Dl,0);}},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aey));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U$];}break;case 2:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmZ
));(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
Aiq];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FM.AkO((F=this.N,F[1].call(F[
0])));}},FV:function(G){this.Ew(1);},Hd:function(G){this.Ew(0);},Ew:function(EN){
var F;if(!this.A8)this.FM.Ajy((F=this.N,F[1].call(F[0])));this.A8=EN;this.BjC=true;
if((this.A8<0)||(this.A8>2))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.
Bw=!!this.A8;this.Am();},Aiq:function(G){if(this.A8>1)this.Ew(this.A8-1);},_Init:
function(aArg){C.Ds._Init.call(this,aArg);A.Core.Bs._Init.call(this.Au={I:this},
0);A.Core.BK._Init.call(this.Jw={I:this},0);A.acg.AL._Init.call(this.HK={I:this}
,0);A.acg.Text._Init.call(this.Ue={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Sl={I:this},0);A.Core.BK._Init.call(this.Gx={I:this
},0);A.Core.BK._Init.call(this.Gw={I:this},0);this.__proto__=C.AGD;this.H(UW);this.
V.R(AV9);this.V.L(A.jb.Bm);this.Hw.Z(false);this.H4.Z(false);this.Jw.Filter=1;this.
HK.H(AV_);this.HK.L(0x55FFFFFF);this.Ue.H(AV$);this.Ue.I$(true);this.Bc.H(AWa);this.
Bc.A6(0x14);this.Bc.R(AWb);this.Sl.H(AWc);this.Sl.I$(true);this.Sl.A6(0x14);this.
Gx.Filter=4;this.Gx.Bw=false;this.Gw.Filter=5;this.Gw.Bw=false;this.J(this.HK,0);
this.J(this.Ue,0);this.J(this.Bc,0);this.J(this.Sl,0);this.Jw.BL=[this,this.Adv];
this.Ue.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Sl.S(A.aaL(A.fl.EK));this.
Gx.BL=[this,this.Al2];this.Gx.D1=[this,this.AiF];this.Gw.BL=[this,this.Al1];this.
Gw.D1=[this,this.Air];this.FM=A._NewObject(C.Aer,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ds;this.Au._Done();this.Jw._Done();this.HK._Done();this.Ue._Done(
);this.Bc._Done();this.Sl._Done();this.Gx._Done();this.Gw._Done();C.Ds._Done.call(
this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Au._ReInit();this.Jw._ReInit(
);this.HK._ReInit();this.Ue._ReInit();this.Bc._ReInit();this.Sl._ReInit();this.Gx.
_ReInit();this.Gw._ReInit();this.Ue.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.Sl.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((
B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ue)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CH={B6:null,AmQ:null,AqN:null,El:null,Text:null,String:A.jV,BdA:A.jV,Ki:0x12
,AK6:0,AQ:0xFFFFFFFF,N4:0,AUn:0,A_5:0,BdB:true,G3:function(CN){var LI=(A.Core.ARp.
isPrototypeOf(CN)?CN:null);if(!!LI)this.BCE(this);return A.Core.P.G3.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajj],this);}
,Db:function(aFilter){return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.BdB){this.BdA=E;this.BdB=false;
}this.AK6=E.length;A.pe([this,this.Ajj],this);},S:function(E){if(this.B6===E)return;
this.B6=E;A.pe([this,this.Ajj],this);},A2:function(E){if(this.AmQ===E)return;this.
AmQ=E;A.pe([this,this.Ajj],this);},Cv:function(E){if(this.AqN===E)return;this.AqN=
E;A.pe([this,this.Ajj],this);},A6:function(E){if(E===this.Ki)return;this.Ki=E;this.
Text.A6(E);},Ajj:function(G){var B;var ALa=0;if(!this.AK6){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KR(false);if(!!this.B6){ALa=
this.B6.Yn(this.String,0,this.AK6);if(ALa<(((B=this.M)[2]-B[0])-(2*this.Text.Jc)
)){this.Text.S(this.B6);this.Text.Aw2(this.N4);return;}}this.Text.KR(true);if(!!
this.AmQ){ALa=this.AmQ.Yn(this.String,0,this.AK6);this.Text.S(this.AmQ);this.Text.
Aw2(this.AUn);if((ALa<(((B=this.M)[2]-B[0])-(2*this.Text.Jc)))&&(((B=this.Text.Db(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqN){this.Text.S(this.AqN);
if(((B=this.Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw2((((this.Text.
B6.Ascent+this.Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BCE:function(G){this.R(this.BdA);},Q5:function(E){if(
A.aa0(this.El,E))return;this.El=E;this.Text.Q5(E);},ASm:function(){return A.abh(
this.Text.Db(),this.M.slice(0,2));},Aff:function(AoK){return A.abf(this.M.slice(
0,2),this.Text.Aff(AoK));},Aw2:function(E){if(this.N4===E)return;this.N4=E;A.pe([
this,this.Ajj],this);},Bnn:function(E){if(this.AUn===E)return;this.AUn=E;A.pe([this
,this.Ajj],this);},Bno:function(E){if(this.A_5===E)return;this.A_5=E;A.pe([this,
this.Ajj],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CH;this.H(AHt);this.Ar(false);
this.Text.AZ(0x3F);this.Text.H(AHt);this.Text.R(Rm);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqN)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjP={Y:null,IM:null,AeJ:null,I7:null,M7:null,AeD:null,AeI:null,AeH:null,AeE:
null,AeG:null,AeF:null,M9:null,NU:null,Ms:null,De:function(E){C.Yo.De.call(this,
E);this.IM.L(E);this.AeJ.L(E);this.I7.L(E);this.M7.L(E);this.Ms.L(E);this.AeD.L(
E);this.M9.L(E);this.NU.L(E);this.AeI.L(E);this.AeH.L(E);this.AeE.L(E);this.AeG.
L(E);this.AeF.L(E);},DX:function(G){C.Yo.DX.call(this,G);this.XI(8,1,this.M7);this.
XI(12,1,this.Ms);this.XI(11,1,this.AeD);this.XI(7,1,this.M9);this.XI(14,1,this.NU
);this.XI(1,4,this.IM);this.XI(1,1,this.AeJ);this.XI(4,1,this.I7);this.XI(22,1,this.
AeI);this.XI(26,1,this.AeH);this.XI(30,1,this.AeE);this.XI(19,1,this.AeG);this.XI(
31,1,this.AeF);this.Text.Z(!this.Y.TN(null,0x1));},XI:function(AJj,Eb,AfQ){var ABa=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adh=A._GetAutoObject(
A.Device.Device).An.Filter.DL(AJj,Eb);if(!!Adh){ABa=true;switch(AJj){case 14:{var
Azr=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adh)?Adh:null);if(!!Azr)AfQ.
Ax(A._GetAutoObject(A.Device.Converter).A41(Azr.A5));}break;case 7:{var Azr=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adh)?Adh:null);if(!!Azr)AfQ.Ax(A._GetAutoObject(
A.Device.Converter).AmS(Azr.A5));}break;case 1:if(Eb===4)AfQ.Ax(A.aaL(A.ach.ADE)
);else if(Adh.Operator===4)ABa=false;break;case 22:switch(Adh.Operator){case 0:case
3:AfQ.Ax(A.aaL(A.ach.AQz));break;default:AfQ.Ax(A.aaL(A.ach.AjV));}break;case 26:
switch(Adh.Operator){case 0:case 3:AfQ.Ax(A.aaL(A.ach.AQx));break;default:AfQ.Ax(
A.aaL(A.ach.Avw));}break;default:;}}else if((AJj===1)&&(Eb===4)){ABa=true;AfQ.Ax(
A.aaL(A.ach.Aez));}}else if((AJj===1)&&(Eb===4)){ABa=true;AfQ.Ax(A.aaL(A.ach.Aez
));}AfQ.Z(ABa);},_Init:function(aArg){C.Yo._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IM={I:this},0);A.acg.Ap._Init.call(
this.AeJ={I:this},0);A.acg.Ap._Init.call(this.I7={I:this},0);A.acg.Ap._Init.call(
this.M7={I:this},0);A.acg.Ap._Init.call(this.AeD={I:this},0);A.acg.Ap._Init.call(
this.AeI={I:this},0);A.acg.Ap._Init.call(this.AeH={I:this},0);A.acg.Ap._Init.call(
this.AeE={I:this},0);A.acg.Ap._Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(
this.AeF={I:this},0);A.acg.Ap._Init.call(this.M9={I:this},0);A.acg.Ap._Init.call(
this.NU={I:this},0);A.acg.Ap._Init.call(this.Ms={I:this},0);this.__proto__=C.AjP;
this.Y.AZ(0x3F);this.Y.H(AHu);this.Y.JS(3);this.IM.H(Aon);this.AeJ.H(Aye);this.AeJ.
Aj(true);this.I7.H(AWd);this.I7.Aj(true);this.M7.H(AWe);this.M7.Aj(true);this.AeD.
H(AWf);this.AeD.Aj(true);this.AeI.H(AHv);this.AeI.Aj(true);this.AeH.H(AHv);this.
AeH.Aj(true);this.AeE.H(AWg);this.AeE.Aj(true);this.AeG.H(AHw);this.AeG.Aj(true);
this.AeF.H(AHw);this.AeF.Aj(true);this.M9.H(AHx);this.M9.Aj(true);this.NU.H(AHy);
this.NU.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Ms.H(AHx);this.Ms.Aj(true);
this.JY(this.Gv,-3);this.JY(this.D2,-3);this.JY(this.A$,-3);this.JY(this.AP,-2);
this.J(this.Y,-2);this.J(this.IM,-2);this.J(this.AeJ,-2);this.J(this.I7,-2);this.
J(this.M7,-2);this.J(this.AeD,-2);this.J(this.AeI,-2);this.J(this.AeH,-2);this.J(
this.AeE,-2);this.J(this.AeG,-2);this.J(this.AeF,-2);this.J(this.M9,-2);this.J(this.
NU,-2);this.J(this.Ms,0);this.IM.Ax(A.aaL(A.ach.Aez));this.AeJ.Ax(A.aaL(A.ach.AQn
));this.I7.Ax(A.aaL(A.ach.APM));this.M7.Ax(A.aaL(A.ach.ADz));this.AeD.Ax(A.aaL(A.
ach.Ag3));this.AeI.Ax(A.aaL(A.ach.AjV));this.AeH.Ax(A.aaL(A.ach.Avw));this.AeE.Ax(
A.aaL(A.ach.AQk));this.AeG.Ax(A.aaL(A.ach.AQl));this.AeF.Ax(A.aaL(A.ach.AQj));this.
M9.Ax(A.aaL(A.ach.ADB));this.NU.Ax(A.aaL(A.ach.AvB));this.Ms.Ax(A.aaL(A.ach.ADH)
);},_Done:function(){this.__proto__=C.Yo;this.Y._Done();this.IM._Done();this.AeJ.
_Done();this.I7._Done();this.M7._Done();this.AeD._Done();this.AeI._Done();this.AeH.
_Done();this.AeE._Done();this.AeG._Done();this.AeF._Done();this.M9._Done();this.
NU._Done();this.Ms._Done();C.Yo._Done.call(this);},_ReInit:function(){C.Yo._ReInit.
call(this);this.Y._ReInit();this.IM._ReInit();this.AeJ._ReInit();this.I7._ReInit(
);this.M7._ReInit();this.AeD._ReInit();this.AeI._ReInit();this.AeH._ReInit();this.
AeE._ReInit();this.AeG._ReInit();this.AeF._ReInit();this.M9._ReInit();this.NU._ReInit(
);this.Ms._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yo.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Ams={H7:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);this.H7.Gq();this.H7.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Rc.CC.call(this,G);},An5:function(){C.Rc.
An5.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).BzC(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lt));this.C8.L(A._GetAutoObject(
A.acj.Temperature).BzF(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lt));this.JN.L(A._GetAutoObject(A.acj.Temperature).BzD(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lt));this.HF.L(A.
_GetAutoObject(A.acj.Temperature).BzE(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lt));this.MF.L(this.JN.AQ);this.TemperatureUnit.
L(this.JN.AQ);}break;default:;}},AcE:function(){C.Rc.AcE.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cs(A.aaL(A.ach.AQK));this.N.C2(A.aaL(
A.ach.Am0));}break;case 4:{this.N.Cs(null);this.N.C2(A.aaL(A.ach.AvJ));}break;default:;
}},WM:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lt>3240)&&(A._GetAutoObject(A.Device.
Device).Lt<5460)){A._GetAutoObject(A.Device.Device).AhL();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H7.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Lt);var B1=A._GetAutoObject(A.Device.Converter).AsG(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lt);this.H7.OnSetRatingTemperature(
B1);this.H7.Ch(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A9).FA();
}break;case 4:this.AKz(this);break;default:;}},AkU:function(G){C.Rc.AkU.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKz(this);break;default:;}},AxT:function(
){C.Rc.AxT.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JN.R(A._GetAutoObject(A.acj.Temperature).BzK(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lt));break;default:;}},AxU:function(
){C.Rc.AxU.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WA(A._GetAutoObject(A.acj.Temperature).BzG(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lt));this.Jf.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WA(16711680
);this.Jf.Ar(true);}break;default:this.Jf.Ar(false);}},AUz:function(){this.C8.Ax(
A.aaL(A.ach.AvI));this.C8.Cw(A._GetAutoObject(A.acj.Temperature).BzL(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lt));this.NS.Cw(
0);},_Init:function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=C.Ams;this.Dr(
C.IK);this.H7=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Rc._Mark.
call(this,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahx={N3:null,DK:null,Ik:null,Bc:null,Aus:null,String:A.jV,AxH:A.jV,Mw:7,Aj_:
2,KS:0,AUM:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Aj_,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bh));else this.DK.S(A.aaL(A.fl.Ak));this.Ik.S(this.DK.B6);this.Ik.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WF],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahs:function(
E){if(this.AxH===E)return;this.AxH=E;this.Ik.R(E);},Ab3:function(E){this.Mw=E;if(
E<10)this.AS$(2);else if(E<40)this.AS$(1);else this.AS$(0);A.pe([this,this.WF],this
);},WF:function(G){var B;while(!!this.Bc.Ah)this.HN(this.Bc.Ah);if(this.Mw>1){var
Adc=this.AOL();var A13=this.AOJ();var App=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var Az6;var AKZ;var At3;var Al9=null;if(!!this.N3&&(this.N3.AY>0))Al9=this.N3.K0;
while((Adc>=A13)&&(Adc>0)){var AtE=A._NewObject(C.Ajs,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aj_)*(((Adc-A13)/86400)|0))/this.Mw)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aj_)*((((Adc-A13)/86400)|0)+1))/this.Mw)|0;while(!!Al9&&(Al9.Timestamp>=
Adc)){if(Al9.Timestamp<(Adc+86400))AtE.Os(Al9.A5,Al9.Timestamp);Al9=Al9.Ah;}var Aud=
0;if(AtE.AY>0)Aud=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtE.AY
)|0;else if(this.Mw<10){Aud=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
At3=A._NewObject(A.acg.Text,0);At3.H([x1,App,x2,App+Aud]);At3.S(A.aaL(A.fl.Bh));
At3.L(A.jb.Text);At3.R(A.aaR(A.acf.Afb));this.J(At3,0);}var AJM=AtE.K0;var O=0;while(
!!AJM){if(O>=AtE.AY)throw new Error(AWh);Az6=A._NewObject(A.acg.AL,0);Az6.L(A._GetAutoObject(
A.acj.Assessment).Qo(AJM.A5));if(O===(AtE.AY-1))Az6.H([x1,App+(O*Aud),x2,this.Bc.
M[1]]);else Az6.H([x1,App+(O*Aud),x2,App+((O+1)*Aud)]);this.J(Az6,0);AJM=AJM.Ah;
O=O+1;}if(this.AUM){var Byr=A._GetAutoObject(A.Device.Helper).Aqn(A._GetAutoObject(
A.Device.Helper).Dv());var Byq=A._GetAutoObject(A.Device.Helper).Aqn(Adc);if(Byr===
Byq){var ALt=A._NewObject(A.acg.Aen,0);ALt.L(A.jb.Text);var BdY=(x1+this.Aj_)+(((
x2-x1)/2)|0);ALt.H([BdY-4,this.Bc.M[1]-4,BdY+4,this.Bc.M[1]]);ALt.Zs(this.Aus);this.
J(ALt,0);}}Adc=Adc-86400;if(this.Aj_>0){AKZ=A._NewObject(A.acg.AL,0);AKZ.H([x1,App
,x1+this.Aj_,App+((((B=this.M)[3]-B[1])/2)|0)]);AKZ.L(A.jb.Bc);this.J(AKZ,0);}}}
},Ab5:function(E){this.N3=E;A.pe([this,this.WF],this);},AS$:function(E){if(this.
Aj_===E)return;this.Aj_=E;A.pe([this,this.WF],this);},De:function(E){if(this.KS===
E)return;this.KS=E;this.DK.L(E);this.Ik.L(E);},AOJ:function(){var B;return this.
AOL()-(((((B=this.Mw)<0)?B+0x100000000:B)-1)*86400);},AOL:function(){return A._GetAutoObject(
A.Device.Converter).AhP();},Bnr:function(E){if(this.AUM===E)return;this.AUM=E;A.
pe([this,this.WF],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Ik={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.AxR._Init.call(this.Aus={I:this},0);
this.__proto__=C.Ahx;this.H(BD);this.Ar(false);this.DK.H(AHz);this.DK.Hm(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Ik.H(AHz);this.Ik.Hm(5);this.Ik.A6(0x14);this.
Ik.L(A.jb.Text);this.Bc.H(AWi);this.Bc.L(A.jb.Bc);this.KS=A.jb.Text;this.Aus.H(AHA
);this.J(this.DK,0);this.J(this.Ik,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Ik.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Ik._Done();this.Bc._Done();this.Aus._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Ik._ReInit();this.Bc._ReInit();this.Aus._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Ik.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aus)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A47={Ah:null,Timestamp:0,A5:0,_Init:function(
aArg){this.__proto__=C.A47;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajs={K0:null,MT:null,AY:0,Os:
function(A_,Qf){var Hg;Hg=A._NewObject(C.A47,0);Hg.A5=A_;Hg.Timestamp=Qf;if(!this.
K0){this.K0=Hg;this.MT=Hg;this.AY=1;}else{this.MT.Ah=Hg;this.MT=Hg;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajs;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ei={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MI],this);},DE:function(G){var B;var Fi=0;var X=this.AV;switch(
this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;
default:;}X=this.QH(X,Fi,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HH(X,true,null,null);this.DJ(this);},Al0:function(G){A._GetAutoObject(C.A9
).FA();},ApK:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null).Ags)A.
pe((C.Co.isPrototypeOf(B=this.AV)?B:null).Ags,this);},Fk:function(G){var B;this.
Ay.Mx((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.
Y.Br[1]);},DJ:function(G){var B;var GY=(C.Co.isPrototypeOf(B=this.AV)?B:null);if(
!!GY){this.N.Hx(A.jV);this.N.CV(GY.AxK);this.N.Je.Dk(255);this.N.HQ.Dk(GY.Axg);this.
N.AE8(GY.Avj);this.N.Anw(GY.AmR);this.N.C1(GY.AQe);this.N.C2(GY.Aq5);GY.A29(this
);}},MI:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ei;this.Background.H(Rn);this.Background.L(A.jb.CS);this.N.H(Xb);this.
N.Ar(false);this.N.Z(true);this.Y.H(Ff);this.Y.JS(1);this.Ay.H(It);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fk];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATS={NA:null,ASS:null,Ad2:null,VF:null,GU:null,PopupTimeout:null,Ab_:null,AgD:
null,PopupIdToString:null,Atz:null,Text:A.jV,AkG:A.jV,AJ6:A.jV,Ak1:0,ALc:-1,Azq:-
1,AKG:0,ATU:0,A2b:false,CP:function(){this.A_q(this.PopupIdToString.BS(this.ATU)
);},Init:function(aArg){this.BoX(this);},BgK:function(G){var B;if(this.Ak1>0){this.
A_G((this.Ak1/1000)|0);this.PopupTimeout.Wz(0);this.PopupTimeout.PR(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxG(this);},BgG:function(G){var Qy=this.
Text;var AfT=this.AkG;var AKE=A.abi(16,A.jV,null);var index=0;var Azl=0;while(AfT
!==A.jV){Azl=AfT.indexOf(A.Device.PopupParamSeparator,0);if(Azl!==-1){AKE.Set(index
,A.ab1(AfT,Azl,(AfT.length-Azl)+1));AfT=A.ab1(AfT,0,Azl+1);index=index+1;if(index>=
16){A.ab5("%s",(AWj+AfT)+AWk);AfT=A.jV;}}else{AKE.Set(index,AfT);AfT=A.jV;}}index=
0;while(index<Qy.length){if((Qy.charCodeAt(index)||0)===0x7B){var Bdz=Qy.indexOf(
String.fromCharCode(0x7D),index);if(Bdz===-1){A.ab5("%s",(((AWl+Qy)+AWm)+index.toFixed(
))+Ak$);index=Qy.length;}else{var Bfr=(Bdz-index)-1;var A3J=A.abW(Qy,index+1,Bfr
);var AKD=A.wz(A3J,-1,10);Qy=A.ab1(Qy,index,Bfr+2);if(A3J===AWn)this.BnJ(index);
else if(((AKD>0)&&(AKD<=16))&&(this.AkG!==A.jV)){Qy=A.abU(Qy,AKE.Get(AKD-1),index
);if(this.A2b===true)this.BnI(A.wz(AKE.Get(AKD-1),0,10));}else A.ab5("%s",(AWo+A3J
)+AWp);}}index=index+1;}this.BnH(Qy);},CC:function(G){A.pe([this,this.BgK],this);
},Ai:function(Ae){var B;this.Ad2.H(A.aaT(this.GU.Db(),AhX));this.VF.H(A.aaT(this.
GU.Db(),AhX));if(!!this.NA){this.NA.H(A.abM(this.NA.M,this.GU.M[0]));this.NA.H(A.
abO(this.NA.M,this.GU.M[3]+10));this.NA.H(A.abL(this.NA.M,(B=this.GU.M)[2]-B[0])
);this.NA.H(A.abI(this.NA.M,8));this.Ad2.H(A.abh(A.aaT(this.GU.Db(),AhX),AHB));this.
VF.H(A.abh(A.aaT(this.GU.Db(),AhX),AHB));}else{this.Ad2.H(A.aaT(this.GU.Db(),AhX
));this.VF.H(A.aaT(this.GU.Db(),AhX));}},DE:function(G){var JC=(A.Core.BK.isPrototypeOf(
G)?G:null);if((JC.CO===4)&&((this.VF.M[1]+this.M[1])<this.M[1])){this.GU.H(A.abO(
this.GU.M,this.GU.M[1]+28));this.Am();}else if((JC.CO===5)&&((this.VF.M[3]+this.
M[1])>this.N.M[1])){this.GU.H(A.abO(this.GU.M,this.GU.M[1]-28));this.Am();}if((JC.
CO===6)&&!!this.D_().CE)this.D_().AFf(1);else if((JC.CO===7)&&!!this.D_().Cl)this.
D_().AFf(3);},I0:function(G){switch(this.D_().Ahi){case 1:this.Al0(this);break;case
3:this.ApK(this);break;case 2:this.AAC(this);break;case 0:break;default:A.ab5("%s%e"
,AWq,this.D_().Ahi);}},Al0:function(G){var B;(B=this.D_().CE)?B[1].call(B[0],this
):null;},ApK:function(G){var B;(B=this.D_().Cl)?B[1].call(B[0],this):null;},AAC:
function(G){var B;(B=this.D_().Cg)?B[1].call(B[0],this):null;},LN:function(G){this.
N.I8.L((this.N.I8.AQ&0x00FFFFFF)|(100<<24));},E5:function(G){var B;this.PopupTimeout.
AxG(this);},A_q:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
BgG],this);},BAP:function(G){var B;this.A_G(this.Azq-1);if(this.Azq<=0){this.PopupTimeout.
AxG(this);(B=this.ASS)?B[1].call(B[0],this):null;}},A_s:function(E){if(this.Ak1===
E)return;this.Ak1=E;A.pe([this,this.BgK],this);},A_c:function(E){if(this.AkG===E
)return;this.AkG=E;A.pe([this,this.BgG],this);},BnH:function(E){if(this.AJ6===E)
return;this.AJ6=E;this.ABt(this);this.Byy(this);},ABt:function(G){if((this.Azq!==-
1)&&(this.ALc!==-1)){var Bzm=this.Atz.Format(AWr);this.GU.R(A.abU(this.AJ6,Bzm,this.
ALc));}else this.GU.R(this.AJ6);this.GU.H(AHC);},BnJ:function(E){if(this.ALc===E
)return;this.ALc=E;this.ABt(this);},A_G:function(E){if(this.Azq===E)return;this.
Azq=E;this.Atz.AFK(E);A.pe([this,this.ABt],this);},Byy:function(G){this.GU.Db();
if(this.GU.M[1]<=this.M[1])this.GU.H(A.abO(this.GU.M,28));this.Am();},A_I:function(
E){if(this.A2b===E)return;this.A2b=E;if(E===true)A.pe([this,this.BBq],this);},BBq:
function(G){if(!this.NA){this.NA=A._NewObject(A.acr.ADp,0);this.NA.Ga(0);this.NA.
EU(100);this.NA.OnSetAppearance(this.Ab_);this.J(this.NA,0);this.AhA(this.NA,this.
GU);}this.NA.Bx(this.AKG);},BnI:function(E){if(this.AKG===E)return;this.AKG=E;if(
!!this.NA)this.NA.Bx(this.AKG);},BoX:function(G){var B;this.N.Dk(0);this.AgD.AnU(
this);},Bnh:function(E){if(this.ATU===E)return;this.ATU=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.Ad2={I:this},0);A.acg.BU._Init.
call(this.VF={I:this},0);A.acg.Text._Init.call(this.GU={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADq._Init.call(this.Ab_={I:this},
0);A.acl.Gl._Init.call(this.AgD={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.Atz={I:this},0);this.
__proto__=C.ATS;var B;this.H(Cc);this.Background.H(Ff);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ej.Ar(false);this.Ej.Z(false);this.Ad2.H(AHD);this.
Ad2.L(A.jb.CJ);this.VF.H(AHD);this.VF.Nh(2);this.VF.L(A.jb.Text);this.GU.H(AHC);
this.GU.Hm(10);this.GU.I$(true);this.GU.BnF(0);this.GU.KR(true);this.GU.L(A.jb.Text
);this.PopupTimeout.PR(0);this.Ab_.A_x(0);this.Ab_.A_v(A.jb.AV);this.Ab_.A_u(0);
this.Ab_.AF0(AHi);this.AgD.HM(1);this.AgD.B2=255;this.AgD.Cx=0;this.JY(this.Ej,-
1);this.J(this.Ad2,0);this.J(this.VF,0);this.J(this.GU,0);this.GU.S(A.aaL(A.fl.Af
));this.PopupTimeout.MB=[this,this.BAP];this.Ab_.A_w(A.aaL(A.ach.NT));this.Ab_.A_t(
A.aaL(A.ach.NT));this.AgD.Q=[B=this.N,B.Awj,B.A0b];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad2._Done();this.VF._Done();this.GU._Done();this.PopupTimeout.
_Done();this.Ab_._Done();this.AgD._Done();this.PopupIdToString._Done();this.Atz.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad2._ReInit();this.VF._ReInit();this.GU._ReInit();this.PopupTimeout._ReInit();this.
Ab_._ReInit();this.AgD._ReInit();this.PopupIdToString._ReInit();this.Atz._ReInit(
);this.GU.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASS)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Atz)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Mo={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FS=A.jb.CJ;var GX=A.jb.Text;if(this.Hk){FS=A.jb.Text;
GX=A.jb.Bm;}if(!this.LF){this.Background.L(FS);this.V.L(A.jb.Am1);}else if(this.
Qs){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KF){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GX);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Mo;},_className:"Application::DarkThemeMenuItem"
};C.Ang={AdB:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Ang;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaE:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Lm:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Cl=[this,this.A2_];this.BP.Cg=null;this.BP.CE=[this,this.AaE];this.
BP.CV(A.aaR(A.acf.Ok));this.BP.Cs(null);this.BP.C1(A.aaL(A.ach.Aex));}return this.
BP;},A2_:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).I0(this);},CC:function(G){},AII:function(s){this.CC(s);},E5:function(
G){},AyF:function(s){this.E5(s);},_Init:function(aArg){C.Abg._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.API={V9:
null,YL:null,YF:null,Init:function(aArg){this.Bb(this.V9);},Ads:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YL)A._GetAutoObject(A.Device.
Device).A3(6,true,A.jV,0,[this,this.BBE]);else if(Aa===this.V9)A._GetAutoObject(
A.Device.Device).A3(9,true,A.jV,0,[this,this.BB0]);else if(Aa===this.YF)A._GetAutoObject(
C.A9).Cd(4);else throw new Error(Ayf);A._GetAutoObject(A.Device.Device).Dw(0);},
BBE:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(
As.PopupState===7))A._GetAutoObject(A.Device.Device).AGl();},BB0:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))
A._GetAutoObject(A.Device.Device).Axx();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Mo._Init.call(this.V9={I:this},0);C.Mo._Init.call(this.YL={I:this
},0);C.Mo._Init.call(this.YF={I:this},0);this.__proto__=C.API;this.H(AcN);this.V9.
H(BD);this.V9.Ar(true);this.V9.T(A.aaR(A.acf.A$k));this.V9.Bi(true);this.YL.H(IV
);this.YL.Ar(true);this.YL.T(A.aaR(A.acf.A_4));this.YL.Bi(true);this.YF.H(Qa);this.
YF.Ar(true);this.YF.T(A.aaR(A.acf.SQ));this.YF.Bi(true);this.J(this.V9,0);this.J(
this.YL,0);this.J(this.YF,0);this.V9.AR=[this,this.Ads];this.YL.AR=[this,this.Ads
];this.YF.AR=[this,this.Ads];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.V9._Done();this.YL._Done();this.YF._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.V9._ReInit(
);this.YL._ReInit();this.YF._ReInit();this.V9.T(A.aaR(A.acf.A$k));this.YL.T(A.aaR(
A.acf.A_4));this.YF.T(A.aaR(A.acf.SQ));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GK={AaB:null,OverlayMenu:null,WH:null,A33:null
,La:null,A3I:null,AkH:null,N1:null,AAa:100,Bcw:false,Init:function(aArg){var B;A.
zX([this,this.BeU],[B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyO],0);A.zX([this
,this.BeO],[B=A._GetAutoObject(A.Device.Device),B.ASy,B.AZ$],0);A.zX([this,this.
A21],[B=A._GetAutoObject(A.Device.Device),B.Av_,B.AyH],0);A.zX([this,this.BAl],[
B=A._GetAutoObject(A.Device.Device),B.Av7,B.AyG],0);A.zX([this,this.BAm],[B=A._GetAutoObject(
A.Device.Device),B.A8o,B.BaZ],0);A.zX([this,this.ApL],[B=A._GetAutoObject(A.Device.
Device),B.ASJ,B.A0h],0);A.zX([this,this.Be$],[B=A._GetAutoObject(A.Device.Device
),B.Ww,B.Xc],0);A.pe([this,this.BeU],this);A.pe([this,this.BeO],this);A.pe([this
,this.ApL],this);A.pe([this,this.Be$],this);this.A33.At([B=this.WH,B.AEr,B.Zk]);
this.J(this.WH,0);this.Bb(this.WH);this.Byb(this);},Ai:function(Ae){},BeO:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEd){if(!this.AaB){this.AaB=A._NewObject(
C.Ass,0);this.AaB.H(A.abJ(this.AaB.M,this.WH.M.slice(0,2)));this.AaB.H(A.abO(this.
AaB.M,this.WH.M[3]-((B=this.AaB.M)[3]-B[1])));this.J(this.AaB,1);}}else{if(!!this.
AaB)this.HN(this.AaB);this.AaB=null;}},BeU:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.API,0));break;case 8:this.Dw(A._NewObject(C.AL1,0));break;case 2:this.Dw(A._NewObject(
C.ALY,0));break;case 3:this.Dw(A._NewObject(C.AL4,0));break;case 4:this.Dw(A._NewObject(
C.AUa,0));break;case 5:this.Dw(A._NewObject(C.AVG,0));break;case 6:this.Dw(A._NewObject(
C.ATN,0));break;case 7:this.Dw(A._NewObject(C.Amu,0));break;case 11:this.Dw(A._NewObject(
C.AMw,0));break;case 12:this.Dw(A._NewObject(C.AMv,0));break;case 9:this.Dw(A._NewObject(
C.ARJ,0));break;case 10:this.Dw(A._NewObject(C.AMr,0));break;case 14:this.Dw(A._NewObject(
C.ARF,0));break;case 15:this.Dw(A._NewObject(C.ARG,0));break;case 13:this.Dw(A._NewObject(
C.ARH,0));break;case 16:this.Dw(A._NewObject(C.AMS,0));break;default:throw new Error(
AWs+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WD).ArD(
null);this.N1.AqD(this.OverlayMenu,A._GetAutoObject(C.AxA),null,null,[B=this.OverlayMenu
,B.AyF],null,true);this.Bb(this.WH);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N1.AkJ(this.OverlayMenu,A._GetAutoObject(C.Axz),null,null,null,null,null,[B=this.
OverlayMenu,B.AII],null,false);this.Bb(this.N1);A._GetAutoObject(C.WD).ArD(this.
OverlayMenu.Lm());}else if(!!this.La){this.Bb(this.N1);A._GetAutoObject(C.WD).ArD(
this.La.Ako().Lm());}},Ahn:function(E){var B;if(this.La===E)return;if(!!this.La){
A._GetAutoObject(C.WD).ArD(null);this.N1.AqD(this.La.Ako(),A._GetAutoObject(C.Afh
),null,null,[B=this.La.Ako(),B.AyF],null,false);this.Bb(this.WH);}this.La=E;if(!
!this.La){this.N1.AkJ(this.La.Ako(),A._GetAutoObject(C.Afh),null,null,null,null,
null,[this,this.BlD],null,false);this.Bb(this.N1);A._GetAutoObject(C.WD).ArD(this.
La.Ako().Lm());}else if(!!this.OverlayMenu){this.Bb(this.N1);A._GetAutoObject(C.
WD).ArD(this.OverlayMenu.Lm());}},Byb:function(G){var B;var F;this.J(this.A3I,0);(
F=A._GetAutoObject(C.WD),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WD).M)[3]-B[1]))));this.ZB(this.N1);},A21:function(G){if(A._GetAutoObject(A.Device.
Device).AmB)switch(A._GetAutoObject(A.Device.Device).Ii){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A9).Ab7(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa3<98)A._GetAutoObject(C.A9).Cd(4);}else{this.AAa=100;this.BcG();}},BAl:
function(G){this.BcG();},BcG:function(){if(!A._GetAutoObject(A.Device.Device).AmB
){if(A._GetAutoObject(A.Device.Device).Aa3<=2){if(this.AAa>2)switch(A._GetAutoObject(
A.Device.Device).Ii){case 38:break;case 4:case 39:A._GetAutoObject(C.A9).Ab7(38);
break;default:A._GetAutoObject(C.A9).Cd(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa3<=10){if(this.AAa>10)switch(A._GetAutoObject(A.Device.Device).Ii){case
39:break;case 4:case 38:A._GetAutoObject(C.A9).Ab7(39);break;default:A._GetAutoObject(
C.A9).Cd(39);}}else if(A._GetAutoObject(A.Device.Device).Aa3<=20){if(this.AAa>20
)switch(A._GetAutoObject(A.Device.Device).Ii){case 39:break;case 4:case 38:A._GetAutoObject(
C.A9).Ab7(39);break;default:A._GetAutoObject(C.A9).Cd(39);}}else switch(A._GetAutoObject(
A.Device.Device).Ii){case 38:case 4:case 39:A._GetAutoObject(C.A9).FA();break;default:;
}this.AAa=A._GetAutoObject(A.Device.Device).Aa3;}},BAm:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqq){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A3(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anu(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A3(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anu(0
);}break;default:A.ab5("%s",AWt+A._GetAutoObject(A.Device.Device).Aqq.toFixed());
}},ApL:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A9).Cd(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Ii===5)A._GetAutoObject(C.A9).Ab7(3);break;
default:;}},Be$:function(G){switch(A._GetAutoObject(A.Device.Device).P1.ZX){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).Uq(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WA(65535);A._GetAutoObject(A.Device.Device).Uq(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WA(255);A._GetAutoObject(A.Device.Device).Uq(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WA(16776960);A._GetAutoObject(
A.Device.Device).Uq(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WA(16711935
);A._GetAutoObject(A.Device.Device).Uq(true);}break;default:A.ab5("%s",AWu+A._GetAutoObject(
A.Device.Device).P1.ZX.toFixed());}this.BnG(A._GetAutoObject(A.Device.Helper).BjA(
));},BlD:function(G){var B;this.La.Ako().CC(this);this.La.BAN(this);},BnG:function(
E){if(this.Bcw===E)return;this.Bcw=E;if(E){if(A._GetAutoObject(A.Device.Device).
Ii===3)A._GetAutoObject(C.A9).Cd(27);else if(A._GetAutoObject(A.Device.Device).Ii
!==27)A._GetAutoObject(A.Device.Device).A3(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).Ii===27)A._GetAutoObject(A.Device.Device).A3(112,true,A.jV,0,[this
,this.A0Z]);},A0Z:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!As&&(As.Id===112))&&(As.PopupState===7))A._GetAutoObject(C.A9).Ab7(85);}
,BkE:function(){return this.La;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkH._Init.call(this.AkH={I:this},0);C.N1._Init.call(this.N1={I:this},0);this.
__proto__=C.GK;this.H(Cc);this.N1.H(Rn);this.J(this.N1,0);this.WH=A._NewObject(C.
WH,0);this.A33=A._GetAutoObject(C.A9);this.AkH.ANy=[this,this.BkE,this.Ahn];this.
A3I=A._GetAutoObject(C.WD);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkH._Done();this.N1._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkH._ReInit();this.N1._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaB)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WH)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A33)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.La)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3I)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abg={A_T:
null,BP:null,N:null,Cq:null,Am9:null,Am$:null,QR:null,Am_:null,Am7:null,Anb:null
,Am8:null,DE:function(G){var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;
case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QH(X,Fi,0x14
);if(!!X)this.Bb(X);},Bbx:function(s){this.DE(s);},Al0:function(G){var D5=(A.Core.
BK.isPrototypeOf(G)?G:null);if(D5.Acf&&(this.D_().Asm===false))return;A.pe(this.
D_().CE,this);},AIV:function(s){this.Al0(s);},ApK:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);if(D5.Acf&&(this.D_().ZA===false))return;A.pe(this.D_().
Cl,this);},AIX:function(s){this.ApK(s);},I0:function(G){if(this.QR.Acf)return;},
Atg:function(s){this.I0(s);},AAC:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?
G:null);if(D5.Acf&&(this.D_().Zz===false))return;A.pe(this.D_().Cg,this);},AIW:function(
s){this.AAC(s);},D_:function(){if(!!this.Lm())return this.BP;else return this.N;
},Lm:function(){return this.BP;},GS:function(E){this.A_T=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BK._Init.
call(this.Cq={I:this},0);A.Core.BK._Init.call(this.Am9={I:this},0);A.Core.BK._Init.
call(this.Am$={I:this},0);A.Core.BK._Init.call(this.QR={I:this},0);A.Core.BK._Init.
call(this.Am_={I:this},0);A.Core.BK._Init.call(this.Am7={I:this},0);A.Core.BK._Init.
call(this.Anb={I:this},0);A.Core.BK._Init.call(this.Am8={I:this},0);this.__proto__=
C.Abg;this.H([0,0,C.Asv[0],C.Asv[1]]);this.N.H(Xb);this.N.Ar(false);this.N.Z(false
);this.Cq.Filter=147;this.Am9.Filter=26;this.Am$.Filter=28;this.QR.Filter=1;this.
Am_.Filter=27;this.Am7.Filter=44;this.Anb.Filter=9;this.Am8.Filter=42;this.J(this.
N,0);this.Cq.BL=[this,this.Bbx];this.Cq.D1=[this,this.Bbx];this.Am9.BL=[this,this.
AIV];this.Am9.D1=[this,this.AIV];this.Am$.BL=[this,this.AIX];this.Am$.D1=[this,this.
AIX];this.QR.BL=[this,this.Atg];this.QR.D1=[this,this.Atg];this.Am_.BL=[this,this.
AIW];this.Am_.D1=[this,this.AIW];this.Am7.BL=[this,this.AIV];this.Am7.D1=[this,this.
AIV];this.Anb.BL=[this,this.AIX];this.Anb.D1=[this,this.AIX];this.Am8.BL=[this,this.
AIW];this.Am8.D1=[this,this.AIW];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Am9._Done();this.Am$._Done();this.QR._Done();this.
Am_._Done();this.Am7._Done();this.Anb._Done();this.Am8._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Am9._ReInit();this.Am$._ReInit();this.QR._ReInit();this.Am_._ReInit(
);this.Am7._ReInit();this.Anb._ReInit();this.Am8._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A_T)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Am$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Axz={_Init:function(){A.acl.AGJ._Init.call(this,0);this.Ki=0x22;this.Ad6=true;
this.AuY=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxA={_Init:function(){A.acl.AGJ._Init.call(this,0);this.Ki=0x22;this.Ad6=true;
this.AuY=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUK={Sa:function(){var B;var Ao=(A.acl.Ae$.isPrototypeOf(B=A.acl.Aek.Sa.call(this
))?B:null);if(!Ao)throw new Error(As3);Ao.Cp.Cx=100;return Ao;},R$:function(){var
B;var Ao=(A.acl.Axh.isPrototypeOf(B=A.acl.Aek.R$.call(this))?B:null);if(!Ao)throw new
Error(As3);Ao.E0.B2=100;return Ao;},_Init:function(aArg){A.acl.Aek._Init.call(this
,aArg);this.__proto__=C.AUK;},_className:"Application::ShadeTransition"};C.AmX={
Ag6:null,SV:null,HP:null,DS:null,AnimalId:-1,GroupId:-1,AC8:true,De:function(E){
C.BQ.De.call(this,E);this.SV.L(E);this.HP.L(E);this.Ag6.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.acf.Afb)
);else this.HP.R(E.toFixed());},Ab1:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SV.R(A.aaR(A.acf.Afb));else this.SV.R(E.toFixed());},DX:function(
G){},Nn:function(s){this.DX(s);},A9W:function(E){if(this.AC8===E)return;this.AC8=
E;this.SV.Z(this.AC8);this.Ag6.Z(this.AC8);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag6={I:this},0);A.acg.Text._Init.call(this.SV={
I:this},0);A.acg.Text._Init.call(this.HP={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.AmX;this.Ag6.H(AWv);this.SV.H(AWw);this.SV.A6(0x11);this.
SV.R(A.aaR(A.acf.Afb));this.HP.H(AWx);this.HP.A6(0x11);this.HP.R(A.aaR(A.acf.Afb
));this.DS.H(AWy);this.J(this.Ag6,0);this.J(this.SV,0);this.J(this.HP,0);this.J(
this.DS,0);this.Ag6.Ax(A.aaL(A.ach.AQs));this.SV.S(A.aaL(A.fl.Af));this.HP.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BQ;this.Ag6._Done();this.SV._Done(
);this.HP._Done();this.DS._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ.
_ReInit.call(this);this.Ag6._ReInit();this.SV._ReInit();this.HP._ReInit();this.DS.
_ReInit();this.SV.R(A.aaR(A.acf.Afb));this.HP.R(A.aaR(A.acf.Afb));this.SV.S(A.aaL(
A.fl.Af));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this
,D);if((B=this.Ag6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADg={Init:function(
aArg){var B;A.zX([this,this.Nn],[B=A._GetAutoObject(A.Device.Helper).W,B.Arz,B.SG
],0);A.zX([this,this.Nn],[B=A._GetAutoObject(A.Device.Helper).W,B.A8H,B.AnA],0);
A.zV([this,this.Nn],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nn],[
B=A._GetAutoObject(A.Device.Helper).W,B.PP,B.EB],0);A.zX([this,this.Nn],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9j,B.Axd],0);A.zX([this,this.Nn],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8y,B.Ae1],0);A.zX([this,this.Nn],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8z,B.Un],0);A.zX([this,this.Nn],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8C,B.Ae5],0);A.zX([this,this.Nn],[B=A._GetAutoObject(A.Device.Helper).W,B.A8G,B.
Ae7],0);A.pe([this,this.Nn],this);},De:function(E){C.AmX.De.call(this,E);this.DS.
De(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqW()){this.Ab1(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab1(-1);this.OnSetAnimalId(-1);}this.DS.
EB(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AE2(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae1(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Un(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae5(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae7(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmX._Init.call(this,aArg);this.
__proto__=C.ADg;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Kl={AhM:A.abi(3,A.jV,null),Cb:A.abi(3,0,{0:7,1:30,2:90}),Ank:3,Du:function(){
if(this.Ank<3)return this.Ank;else return 3;},C7:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ank))return-1;return this.Cb.Get(aIndex);},Gk:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ank))return AWz;return this.AhM.Get(aIndex);},DZ:function(
A_){var O=0;while((O<3)&&(O<=this.Ank)){if(this.Cb.Get(O)===A_)return O;O=O+1;}return-
1;},H3:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ank)){if(this.Cb.Get(
O)>max)max=this.Cb.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhM=[]).__proto__=C.Kl.AhM;(this.Cb=[]).__proto__=C.Kl.Cb;this.
__proto__=C.Kl;this.AhM.Set(0,A.aaR(A.acf.A7l));this.AhM.Set(1,A.aaR(A.acf.A7j));
this.AhM.Set(2,A.aaR(A.acf.A7k));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhM.Set(0,A.aaR(A.acf.A7l));this.AhM.Set(1,A.aaR(A.acf.A7j));this.AhM.Set(2,A.aaR(
A.acf.A7k));},_className:"Application::Days"};C.AUH={Amw:null,BT:null,Q6:null,QF:
null,A$G:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BA_],[B=A._GetAutoObject(A.Device.Device),B.Arx,B.Atf],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Ds.Ai.call(this,Ae);var Fv=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWA+A._GetAutoObject(
A.Device.Converter).AkZ((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlJ());this.H4.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6I())&&(
Fv||GE));},C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},Kc:function(G){var F;var BO=this.AM;C.Ds.Kc.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6I()){this.Bx(this.AM+10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J9:function(G){var F;var BO=this.
AM;C.Ds.J9.call(this,G);this.Bx(this.AM-10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_A:function(E){if(this.A$G===E)return;
this.A$G=E;this.Am();},BA_:function(G){this.Am();},_Init:function(aArg){C.Ds._Init.
call(this,aArg);A.acg.AL._Init.call(this.Amw={I:this},0);C.CH._Init.call(this.BT={
I:this},0);A.acg.AL._Init.call(this.Q6={I:this},0);A.acg.Ap._Init.call(this.QF={
I:this},0);this.__proto__=C.AUH;this.H(UW);this.Background.H(UW);this.V.H(As4);this.
V.L(A.jb.Bm);this.Amw.H(AWB);this.Amw.L(A.jb.Afs);this.Hw.H(AWC);this.BT.H(AWD);
this.BT.A6(0x12);this.BT.L(A.jb.Text);this.H4.H(AWE);this.Q6.H(AWF);this.Q6.L(A.
jb.E1);this.QF.H(AWG);this.J(this.Amw,-2);this.J(this.BT,-1);this.J(this.Q6,0);this.
J(this.QF,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EK));this.BT.A2(A.aaL(A.fl.Af));this.QF.Ax(A.aaL(A.ach.ADw));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ds;this.Amw._Done();this.BT._Done();this.Q6.
_Done();this.QF._Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.
call(this);this.Amw._ReInit();this.BT._ReInit();this.Q6._ReInit();this.QF._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EK));this.
BT.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.
Amw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QF)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnQ={Q:null
,Ai2:null,Init:function(aArg){var B;A.zX([this,this.Bbu],[B=A._GetAutoObject(A.Device.
Device),B.AEr,B.BaS],0);A.pe([this,this.Bbu],this);},At:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ab7:function(Alm){A._GetAutoObject(A.Device.Device).Zk(Alm
);},AKt:function(G){if(this.K&&this.K.AKt)return this.K.AKt.apply(this,arguments
);else return C.AnQ.BbB.apply(this,arguments);},BbB:function(G){var F;if(!this.Q
){A.ab5("%s",AWH);return;}var By=null;if(this.Ai2.Contains(A._GetAutoObject(A.Device.
Device).Ii)){By=this.Ai2.A_R();while(!!By&&(By.An4!==A._GetAutoObject(A.Device.Device
).Ii))By=this.Ai2.A_R();}if(!By)By=this.BzJ(A._GetAutoObject(A.Device.Device).Ii
);(F=this.Q,F[2].call(F[0],By));},Bbu:function(s){this.AKt(s);},BzJ:function(Alm
){var By=null;switch(Alm){case 0:case 1:By=A._NewObject(C.AUP,0);break;case 2:By=
A._NewObject(C.XW,0);break;case 3:By=A._NewObject(C.Avu,0);break;case 53:By=A._NewObject(
C.AVu,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=A._NewObject(
C.ARZ,0);break;case 6:By=A._NewObject(C.ARy,0);break;case 16:By=A._NewObject(C.ANG
,0);break;case 22:By=A._NewObject(C.AVp,0);break;case 17:By=A._NewObject(C.AU6,0
);break;case 42:By=A._NewObject(C.AND,0);break;case 87:By=A._NewObject(C.AUi,0);
break;case 88:By=A._NewObject(C.AUh,0);break;case 89:By=A._NewObject(C.AVl,0);break;
case 95:By=A._NewObject(C.AVn,0);break;case 23:By=A._NewObject(C.AVN,0);break;case
18:By=A._NewObject(C.ANT,0);break;case 19:By=A._NewObject(C.AUj,0);break;case 37:
By=A._NewObject(C.AQ1,0);break;case 76:By=A._NewObject(C.AT0,0);break;case 63:By=
A._NewObject(C.ANR,0);break;case 64:By=A._NewObject(C.ANS,0);break;case 82:By=A.
_NewObject(C.ANQ,0);break;case 83:By=A._NewObject(C.ANO,0);break;case 92:By=A._NewObject(
C.ANM,0);break;case 93:By=A._NewObject(C.ANP,0);break;case 65:By=A._NewObject(C.
ANN,0);break;case 5:By=A._NewObject(C.AUZ,0);break;case 4:By=A._NewObject(C.Ad8,
0);break;case 39:By=A._NewObject(C.ANd,0);break;case 38:By=A._NewObject(C.ANw,0);
break;case 28:By=A._NewObject(C.Wr,0);break;case 7:By=A._NewObject(C.AqG,0);break;
case 81:By=A._NewObject(C.AN1,0);break;case 31:By=A._NewObject(C.Arq,0);break;case
78:By=A._NewObject(C.ARX,0);break;case 34:By=A._NewObject(C.ALW,0);break;case 35:
By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(C.SetTransponderScreen
,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:By=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:By=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(C.MotherScanScreen
,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:By=A._NewObject(
C.GJ,0);break;case 9:By=A._NewObject(C.I4,0);break;case 24:By=A._NewObject(C.AMa
,0);break;case 10:By=A._NewObject(C.Ams,0);break;case 21:By=A._NewObject(C.AMe,0
);break;case 11:By=A._NewObject(C.AMd,0);break;case 29:By=A._NewObject(C.AuE,0);
break;case 48:By=A._NewObject(C.AMc,0);break;case 30:By=A._NewObject(C.AMb,0);break;
case 12:By=A._NewObject(C.AL$,0);break;case 40:By=A._NewObject(C.AL_,0);break;case
14:By=A._NewObject(C.ANu,0);break;case 13:By=A._NewObject(C.ANv,0);break;case 20:
By=A._NewObject(C.AVE,0);break;case 41:By=A._NewObject(C.AVD,0);break;case 43:By=
A._NewObject(C.AOC,0);break;case 44:By=A._NewObject(C.AOB,0);break;case 61:By=A.
_NewObject(C.AN0,0);break;case 62:By=A._NewObject(C.ANZ,0);break;case 46:By=A._NewObject(
C.ASa,0);break;case 47:By=A._NewObject(C.AR$,0);break;case 85:By=A._NewObject(C.
AVT,0);break;case 86:By=A._NewObject(C.AVS,0);break;case 71:By=A._NewObject(C.AR7
,0);break;case 72:By=A._NewObject(C.AR6,0);break;case 74:By=A._NewObject(C.AMU,0
);break;case 90:By=A._NewObject(C.AT2,0);break;case 73:By=A._NewObject(C.AUk,0);
break;case 51:By=A._NewObject(C.AL0,0);break;case 52:By=A._NewObject(C.ALZ,0);break;
case 15:By=A._NewObject(C.AT9,0);break;case 60:By=A._NewObject(C.AU5,0);break;case
69:By=A._NewObject(C.ARw,0);break;case 70:By=A._NewObject(C.ARv,0);break;case 26:
By=A._NewObject(C.AR0,0);break;case 54:By=A._NewObject(C.ARW,0);break;case 25:By=
A._NewObject(C.AOc,0);break;case 66:By=A._NewObject(C.AOd,0);break;case 59:By=A.
_NewObject(C.AOb,0);break;case 58:By=A._NewObject(C.AOe,0);break;case 56:By=A._NewObject(
C.AOf,0);break;case 57:By=A._NewObject(C.AqJ,0);break;case 68:By=A._NewObject(C.
AOg,0);break;case 67:By=A._NewObject(C.AN$,0);break;case 84:By=A._NewObject(C.AMg
,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;case 36:By=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:By=A._NewObject(C.AMt,0);break;case 91:By=A._NewObject(C.AU$,0
);break;case 94:By=A._NewObject(C.Aqd,0);break;default:throw new Error(AWI);}if(
!!By)By.An4=Alm;return By;},Cd:function(Alm){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AWJ);else this.Ai2.Bn_((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zk(Alm);},FA:function(){var BfH=3;var BfG=this.Ai2.BnZ();if(!!BfG
)BfH=BfG.An4;else A.ab5("%s",AWK);A._GetAutoObject(A.Device.Device).Zk(BfH);},_Init:
function(aArg){C.A$a._Init.call(this.Ai2={I:this},0);this.__proto__=C.AnQ;this.Init(
aArg);var J3=this._variants();if(J3){this.K={};J3._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai2.
_Done();A.h7--;},_ReInit:function(){this.Ai2._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnQ._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A9={_Init:function(){C.AnQ._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGd={H7:null,Yq:null,Afd:null,AaH:null,MC:
null,Azw:1,RatingMode:0,RatedAttribute:0,CP:function(){this.Yq.R(this.Bdc(this.RatedAttribute
));this.AKy(this);},Ai:function(Ae){this.MC.R(A._GetAutoObject(A.Device.Helper).
Nl(A.aaR(A.acf.ARN),P$,this.Azw.toFixed()));if(this.RatingMode===1)this.MC.Z(true
);else this.MC.Z(false);},CC:function(G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);this.H7.Gq();this.H7.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axs(this.
H7,5);A.zX([this,this.AKy],[B=A._GetAutoObject(A.Device.Device),B.ASG,B.A0e],0);
A.zX([this,this.AKy],[B=A._GetAutoObject(A.Device.Helper).W,B.PP,B.EB],0);A.pe([
this,this.AKy],this);},AsD:function(G){var a=this.AKc(this.RatedAttribute);this.
BfY();this.Azw=this.Azw-1;this.Am();if(!a)this.ARU();else this.SF(a);},WM:function(
G){var a=this.Bdj(this.RatedAttribute);this.BfY();this.Azw=this.Azw+1;this.Am();
if(!a)this.A7I();else this.SF(a);},AKc:function(Nq){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Nq){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHE);},Bdj:function(Nq){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Nq){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHE);},SF:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.Yq.R(this.Bdc(E));this.
DJ(E);this.Afd.AnF(this.H7.BiO(E));if(!this.AKc(E)){if(this.AQ_())this.N.Cs(A.aaL(
A.ach.AeA));else this.N.Cs(null);}else this.N.Cs(A.aaL(A.ach.Aex));},Bdc:function(
Nq){return this.AaH.BS(Nq);},BzI:function(Nq){if(!!Nq){var a=this.AKc(Nq);if(!a)
return A.jV;else return this.Bdd(a);}else return A.jV;},BzH:function(Nq){if(!!Nq
){var a=this.Bdj(Nq);if(!a)return A.jV;else return this.Bdd(a);}else return A.jV;
},ARU:function(){},A7I:function(){},A6J:function(){return null;},Bdd:function(Nq
){return this.AaH.Lu(Nq);},BfY:function(){if(!!this.RatedAttribute)this.H7.BoK(this.
RatedAttribute,this.Afd.A5);},AKy:function(G){if(this.AQ_())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SF(2);this.DJ(this.RatedAttribute
);this.Am();},Adt:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkU:function(G){var a=this.AKc(this.RatedAttribute);if(!a){if(this.AQ_())this.
Adt(this);}else this.ARU();},DJ:function(Nq){this.N.Hx(this.BzI(Nq));if(!!this.N.
AnZ){this.N.C1(null);this.N.OO(true);}else{this.N.C1(A.aaL(A.ach.Aex));this.N.OO(
false);}this.N.CV(this.BzH(Nq));if(!!this.N.An1){this.N.C2(null);this.N.OP(true);
}else{this.N.C2(this.A6J());this.N.OP(false);}},AQ_:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Alb,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Yq={
I:this},0);C.Rating._Init.call(this.Afd={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaH={I:this},0);A.acg.Text._Init.call(this.MC={I:this},0);this.__proto__=
C.AGd;this.Background.L(A.jb.CJ);this.N.Z(true);this.Dr(C.IK);this.Yq.H(AWL);this.
Yq.KR(true);this.Yq.L(A.jb.Text);this.Afd.H(AWM);this.MC.H(AWN);this.MC.A6(0x14);
this.MC.R(A.aaR(A.acf.ARN));this.MC.L(A.jb.Text);this.J(this.Yq,0);this.J(this.Afd
,0);this.J(this.MC,0);this.Bb(this.Afd);this.N.CE=[this,this.AsD];this.N.Cg=[this
,this.AkU];this.N.Cl=[this,this.WM];this.Yq.S(A.aaL(A.fl.Af));this.Afd.AR=[this,
this.WM];this.MC.S(A.aaL(A.fl.Af));this.H7=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.Yq._Done();this.Afd._Done();this.AaH._Done();
this.MC._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Yq._ReInit();this.Afd._ReInit();this.AaH._ReInit();this.MC._ReInit();this.
MC.R(A.aaR(A.acf.ARN));this.Yq.S(A.aaL(A.fl.Af));this.MC.S(A.aaL(A.fl.Af));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaH)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.MC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HY={Y:null,Gender:null,AnimalType:null,Breed:null,Jh:null,Pm:null,AsT:null,BZ:
null,C$:null,C9:null,CG:null,Gm:null,Ay:null,KI:0,Init:function(aArg){A.zX([this
,this.Bbv],this.BZ.Q,0);A.pe([this,this.Bbv],this);A.pe([this,this.AA_],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANr(this.
Y);},DE:function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;
break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QH(
X,Fi,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HH(X,true,null
,null);this.AA_(this);},Fk:function(G){var B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[1]);},AeW:function(E){
if(this.KI===E)return;this.KI=E;A.abo([this,this.Av8,this.AeW],0);},AA_:function(
G){var B;var GY=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hx(A.jV);this.N.C1(
A.aaL(A.ach.E2));this.N.CE=[this,this.AIU];if(!!GY&&!!GY.Amo){this.N.FE(A.jV);this.
N.Jz.Dk(255);this.N.ArN(GY.AqO);this.N.Cs(GY.AvE);this.N.Cg=GY.Amo;}else{this.N.
FE(A.jV);this.N.Cs(null);this.N.Cg=null;}if(!!GY&&!!GY.Ags){this.N.CV(GY.AxK);this.
N.HQ.Dk(GY.Axg);this.N.Anw(GY.AmR);this.N.C2(GY.Aq5);this.N.Cl=GY.Ags;}else this.
Auf();},Agd:function(G){A.ab5("%s",Ayg);},AyS:function(s){this.Agd(s);},Ev:function(
G){A.ab5("%s",Ayg);},AIU:function(s){this.Ev(s);},Auf:function(){A.ab5("%s",Alc);
},AAv:function(G){A.ab5("%s",Ayg);},AcR:function(s){this.AAv(s);},JH:function(Ag
){this.Bb(Ag);this.Y.HH(Ag,true,null,null);this.Y.Vw(null,null);},ApG:function(G
){var F;this.C9.Ahr(A._GetAutoObject(A.Device.Helper).Abo((F=this.BZ.Q,F[1].call(
F[0]))));},Bbv:function(s){this.ApG(s);},Av8:function(){return this.KI;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UO._Init.call(this.Jh={I:this},
0);A.Device.M1._Init.call(this.Pm={I:this},0);A.Device.KX._Init.call(this.AsT={I:
this},0);C.BW._Init.call(this.BZ={I:this},0);C.BW._Init.call(this.C$={I:this},0);
C.AkS._Init.call(this.C9={I:this},0);C.Axv._Init.call(this.CG={I:this},0);C.Asy.
_Init.call(this.Gm={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.HY;var B;this.N.Z(true);this.Dr(C.IK);this.Y.H(Ff);this.Y.JS(1);this.KI=A._GetAutoObject(
A.Device.Helper).Abo(this.AnimalType.Q);this.BZ.H(AhY);this.BZ.Aj(true);this.BZ.
T(A.aaR(A.acf.Afr));this.C$.H(Ayh);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.Afm));
this.C9.H(Aoo);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI));this.C9.Ga(1000);this.
C9.EU(99000);this.C9.Ahr(A._GetAutoObject(A.Device.Helper).Abo(this.AnimalType.Q
));this.CG.H(AhZ);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.Gm.H(AWO);
this.Gm.Aj(true);this.Gm.T(A.aaR(A.acf.Jh));this.Ay.H(Ayi);this.J(this.Y,0);this.
J(this.BZ,0);this.J(this.C$,0);this.J(this.C9,0);this.J(this.CG,0);this.J(this.Gm
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fk];this.Gender.LY(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.LY(A._GetAutoObject(A.Device.Helper).W);this.Breed.
LY(A._GetAutoObject(A.Device.Helper).W);this.Jh.LY(A._GetAutoObject(A.Device.Helper
).W);this.BZ.At([B=this.AnimalType,B.B_,B.B$]);this.BZ.CK(this.AnimalType);this.
C$.At([B=this.Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.C9.At([this,this.Av8
,this.AeW]);this.CG.Gr([this,this.D_,this.GS]);this.CG.LX([B=this.CG,B.FV]);this.
CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.Breed,B.B_,B.B$]);this.CG.CK(this.Breed
);this.CG.Anv(this.Pm);this.Gm.Gr([this,this.D_,this.GS]);this.Gm.LX([B=this.Gm,
B.FV]);this.Gm.L0(A.aaL(A.ach.Edit));this.Gm.At([B=this.Jh,B.B_,B.B$]);this.Gm.CK(
this.Jh);this.Gm.Anv(this.AsT);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.Jh._Done();this.Pm._Done();this.AsT._Done();this.BZ._Done();this.C$._Done(
);this.C9._Done();this.CG._Done();this.Gm._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jh._ReInit();this.
Pm._ReInit();this.AsT._ReInit();this.BZ._ReInit();this.C$._ReInit();this.C9._ReInit(
);this.CG._ReInit();this.Gm._ReInit();this.Ay._ReInit();this.BZ.T(A.aaR(A.acf.Afr
));this.C$.T(A.aaR(A.acf.Afm));this.C9.T(A.aaR(A.acf.KI));this.CG.T(A.aaR(A.acf.
Breed));this.Gm.T(A.aaR(A.acf.Jh));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wr={Ay8:false,LN:function(G){if(A._GetAutoObject(A.Device.Device).An.Lg())A._GetAutoObject(
A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gq();A._GetAutoObject(A.Device.Helper
).Aqg(A._GetAutoObject(A.Device.Helper).W);},Auf:function(){this.N.CV(A.jV);this.
N.C2(A.aaL(A.ach.ADA));this.N.Cl=[this,this.AyS];},CC:function(G){if(!this.Ay8){
this.Ay8=true;A.pe([this,this.AcR],this);}else C.Arq.CC.call(this,G);},AAv:function(
G){A._GetAutoObject(C.A9).Cd(49);},_Init:function(aArg){C.Arq._Init.call(this,aArg
);this.__proto__=C.Wr;this.JY(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IK={_Init:function(aArg){C.ADg._Init.call(this,aArg);this.__proto__=C.IK;this.
A9W(false);},_className:"Application::HeaderSelectedAnimalId"};C.I4={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Ek:null,Y:null,P3:null,S4:null,N_:
null,S5:null,Nm:null,Ot:null,RO:null,Ou:null,RP:null,ND:null,Lc:null,Jr:null,KV:
null,Mu:null,Yk:null,S6:null,RQ:null,Ay:null,AxX:0,AxW:0,AuC:0,AuB:0,Arp:0,AsK:0
,Avf:0,Avg:0,Am2:true,Amr:false,An_:false,Init:function(aArg){A.zX([this,this.Avl
],this.Lc.Q,0);A.zX([this,this.AuI],this.Jr.Q,0);A.zX([this,this.BpX],this.KV.Q,
0);A.zX([this,this.Bj_],this.Mu.Q,0);A.zX([this,this.Bqr],this.Nm.Q,0);A.zX([this
,this.Bqq],this.N_.Q,0);A.zX([this,this.Bg2],this.ND.Q,0);A.zX([this,this.Bg1],this.
Ou.Q,0);this.Bb(this.P3);},DE:function(G){var Fi=0;var X=this.AV;switch(this.Cq.
CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;
}X=this.QH(X,Fi,0x414);if(!!X)this.Bb(X);this.MP(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E$(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ev:function(G){A._GetAutoObject(
C.A9).FA();},A2X:function(G){var EE=(C.Aeo.isPrototypeOf(G)?G:null);if(!EE)return;
var Av=this.Filter.DL(EE.Eq,EE.Operator);if(!!Av){this.Filter.Nj(Av);A.abo([this
,this.Fo,this.Fs],0);}else{if(EE.Eq===11){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A5=true;}else if(EE.Eq===12){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A5=true;}else if(EE.Eq===8){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A5=true;}else A.ab5("%s",AHF+EE.Eq.toFixed());if(!!Av){this.Filter.
CW(Av);A.abo([this,this.Fo,this.Fs],0);}}},BAj:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A9).FA();},AAt:function(G){var EE=(
C.AmW.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.DL(EE.Eq,EE.Operator
);if(!!Av){this.Filter.Nj(Av);A.abo([this,this.Fo,this.Fs],0);}else{if(EE.Eq===7
){Av=A._NewObject(A.Device.GenderFilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;
}else if(EE.Eq===14){Av=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Av.EJ=
EE.Eq;Av.Operator=EE.Operator;}else if((EE.Eq===22)||(EE.Eq===26)){var A0W=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0W.EJ=EE.Eq;A0W.Operator=0;Av=A0W;}else A.ab5(
"%s",AHF+EE.Eq.toFixed());if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fo,this.Fs
],0);}}},A9R:function(E){if(this.Avf===E)return;this.Avf=E;A.abo([this,this.BkO,
this.A9R],0);},A9S:function(E){if(this.Avg===E)return;this.Avg=E;A.abo([this,this.
BkP,this.A9S],0);},Avl:function(G){var F;this.A9S((F=this.Lc.Q,F[1].call(F[0])));
var Av=this.Filter.DL(7,0);if(!!Av){var AzO=(A.Device.GenderFilterCriterion.isPrototypeOf(
Av)?Av:null);if(!!AzO)AzO.A5=this.Avg;else A.ab5("%s",AfC);}},AuI:function(G){var
F;this.A9R((F=this.Jr.Q,F[1].call(F[0])));var Av=this.Filter.DL(14,0);if(!!Av){var
U5=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Av)?Av:null);if(!!U5)U5.A5=
this.Avf;else A.ab5("%s",AfC);}},Fk:function(G){var B;this.Ay.Mx((B=this.Y.Db(0x1
))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[1]);},A_y:function(
E){if(this.AsK===E)return;this.AsK=E;A.abo([this,this.Blq,this.A_y],0);},BpX:function(
G){var F;this.A_y((F=this.KV.Q,F[1].call(F[0])));var Av=this.Filter.DL(22,1);if(
!!Av){var Aja=(A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!Aja
)switch(this.AsK){case 1:Aja.Operator=5;break;case 0:Aja.Operator=0;break;default:
A.ab5("%s%e",AHG,this.AsK);}else A.ab5("%s",AfC);}},A94:function(E){if(this.Arp===
E)return;this.Arp=E;A.abo([this,this.Bk4,this.A94],0);},Bj_:function(G){var F;this.
A94((F=this.Mu.Q,F[1].call(F[0])));var Av=this.Filter.DL(26,1);if(!!Av){var AtV=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AtV)switch(this.Arp
){case 1:AtV.Operator=5;break;case 0:AtV.Operator=0;break;default:A.ab5("%s%e",AHG
,this.Arp);}else A.ab5("%s",AfC);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P3.Bk([this,this.Fo,this.Fs]);this.S4.
Bk([this,this.Fo,this.Fs]);this.N_.Bk([this,this.Fo,this.Fs]);this.S5.Bk([this,this.
Fo,this.Fs]);this.Nm.Bk([this,this.Fo,this.Fs]);this.Ot.Bk([this,this.Fo,this.Fs
]);this.RO.Bk([this,this.Fo,this.Fs]);this.Ou.Bk([this,this.Fo,this.Fs]);this.RP.
Bk([this,this.Fo,this.Fs]);this.ND.Bk([this,this.Fo,this.Fs]);this.Lc.Bk([this,this.
Fo,this.Fs]);this.Jr.Bk([this,this.Fo,this.Fs]);this.KV.Bk([this,this.Fo,this.Fs
]);this.Mu.Bk([this,this.Fo,this.Fs]);this.Yk.Bk([this,this.Fo,this.Fs]);this.S6.
Bk([this,this.Fo,this.Fs]);this.RQ.Bk([this,this.Fo,this.Fs]);this.Ar8(false);A.
pe([this,this.A4u],this);var BdW=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DL(1,2))?B:null);if(!!BdW){this.Ar8(true);this.AFW(BdW.A5);}var Bdp=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DL(1,3))?B:null);if(!!
Bdp){this.Ar8(true);this.AFX(Bdp.A5);}this.ArG(false);A.pe([this,this.ALf],this);
var BdV=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DL(4,3))?B:null
);if(!!BdV){this.ArG(true);this.AEK(A._GetAutoObject(A.Device.Helper).L9(BdV.A5,
A._GetAutoObject(A.Device.Helper).Dv()));}var Bdo=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DL(4,2))?B:null);if(!!Bdo){this.ArG(true);this.AEM(A.
_GetAutoObject(A.Device.Helper).L9(Bdo.A5,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var AzO=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DL(7,0
))?B:null);if(!!AzO)this.Lc.Bx(this.Gender.DZ(AzO.A5));var U5=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DL(14,0))?B:null);if(!!U5)this.Jr.Bx(this.AnimalType.
DZ(U5.A5));var Aja=this.Filter.DL(22,1);if(!!Aja){if(!Aja.Operator)this.KV.Bx(0);
else this.KV.Bx(1);}var AtV=this.Filter.DL(26,1);if(!!AtV){if(!AtV.Operator)this.
Mu.Bx(0);else this.Mu.Bx(1);}},Fs:function(Aq){this.Bk(Aq);},AFX:function(E){if(
this.AxX===E)return;this.AxX=E;A.abo([this,this.A9b,this.AFX],0);},AFW:function(
E){if(this.AxW===E)return;this.AxW=E;A.abo([this,this.A9a,this.AFW],0);},Bqr:function(
G){var F;this.AFX((F=this.Nm.Q,F[1].call(F[0])));var Av=this.Filter.DL(1,3);if(!
!Av){var ABv=(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!ABv)
ABv.A5=this.AxX;else A.ab5("%s",AfC);}},Bqq:function(G){var F;this.AFW((F=this.N_.
Q,F[1].call(F[0])));var Av=this.Filter.DL(1,2);if(!!Av){var ABv=(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!ABv)ABv.A5=this.AxW;else A.ab5("%s",AfC);}},Bep:
function(G){var EE=(C.AjH.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.
DL(EE.Eq,EE.Operator);if(!!Av){this.Filter.Nj(Av);A.abo([this,this.Fo,this.Fs],0
);}else{if(EE===this.S4){Av=A._NewObject(A.Device.Int32FilterCriterion,0);Av.EJ=
EE.Eq;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:
null).A5=this.AxW;this.Bb(this.N_);}else if(EE===this.S5){Av=A._NewObject(A.Device.
Int32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null).A5=this.AxX;this.Bb(this.Nm);}if(!!Av){this.Filter.CW(
Av);A.abo([this,this.Fo,this.Fs],0);}}A.pe([this,this.A4u],this);},A4u:function(
G){var A2F=!!this.Filter.DL(this.N_.Eq,this.N_.Operator);var A4v=!!this.Filter.DL(
this.Nm.Eq,this.Nm.Operator);A._GetAutoObject(A.Device.Helper).JZ(this.S4,this.An_
);A._GetAutoObject(A.Device.Helper).JZ(this.S5,this.An_);A._GetAutoObject(A.Device.
Helper).JZ(this.N_,A2F);A._GetAutoObject(A.Device.Helper).JZ(this.Nm,A4v);},MP:function(
G){var B;this.Y.Vw(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},BBf:function(G){A.pe([this,this.Fk],this);A.pe([this,this.
MP],this);},BAg:function(G){this.Ar8(!this.An_);if(this.An_===false){var Av=this.
Filter.DL(this.P3.Eq,this.P3.Operator);while(!!Av){this.Filter.Nj(Av);Av=this.Filter.
DL(this.P3.Eq,this.P3.Operator);}A.abo([this,this.Fo,this.Fs],0);}},Ar8:function(
E){if(this.An_===E)return;this.An_=E;A.abo([this,this.A8$,this.Ar8],0);A.pe([this
,this.A4u],this);},AEM:function(E){if(this.AuC===E)return;this.AuC=E;A.abo([this
,this.A8f,this.AEM],0);},AEK:function(E){if(this.AuB===E)return;this.AuB=E;A.abo([
this,this.A8d,this.AEK],0);},Bg2:function(G){var F;this.AEM((F=this.ND.Q,F[1].call(
F[0])));var Av=this.Filter.DL(4,2);if(!!Av){var AfO=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!AfO){var AaM=A._GetAutoObject(A.Device.Helper).ZN(
this.AuC-1);AfO.A5=AaM;}else A.ab5("%s",AfC);}},Bg1:function(G){var F;this.AEK((
F=this.Ou.Q,F[1].call(F[0])));var Av=this.Filter.DL(4,3);if(!!Av){var AfO=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AfO){var AaM=A._GetAutoObject(
A.Device.Helper).ZN(this.AuB);AfO.A5=AaM;}else A.ab5("%s",AfC);}},ALf:function(G
){var A2F=this.Am2&&!!this.Filter.DL(this.Ou.Eq,this.Ou.Operator);var A4v=this.Am2&&
!!this.Filter.DL(this.ND.Eq,this.ND.Operator);A._GetAutoObject(A.Device.Helper).
JZ(this.Ot,this.Am2);A._GetAutoObject(A.Device.Helper).JZ(this.RO,this.Am2&&this.
Amr);A._GetAutoObject(A.Device.Helper).JZ(this.RP,this.Am2&&this.Amr);A._GetAutoObject(
A.Device.Helper).JZ(this.Ou,A2F);A._GetAutoObject(A.Device.Helper).JZ(this.ND,A4v
);},ArG:function(E){if(this.Amr===E)return;this.Amr=E;A.abo([this,this.A8c,this.
ArG],0);A.pe([this,this.ALf],this);},Beo:function(G){var EE=(C.AjH.isPrototypeOf(
G)?G:null);if(!EE)return;var Av=this.Filter.DL(EE.Eq,EE.Operator);if(!!Av){this.
Filter.Nj(Av);A.abo([this,this.Fo,this.Fs],0);}else{if(EE===this.RO){Av=A._NewObject(
A.Device.UInt32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null).A5=A._GetAutoObject(A.Device.Helper
).ZN(this.AuB);this.Bb(this.Ou);}else if(EE===this.RP){Av=A._NewObject(A.Device.
UInt32FilterCriterion,0);Av.EJ=EE.Eq;Av.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null).A5=A._GetAutoObject(A.Device.Helper).ZN(this.AuC-1);this.
Bb(this.ND);}if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fo,this.Fs],0);}}A.pe([
this,this.ALf],this);},BAf:function(G){this.ArG(!this.Amr);if(this.Amr===false){
var Av=this.Filter.DL(this.Ot.Eq,this.Ot.Operator);while(!!Av){this.Filter.Nj(Av
);Av=this.Filter.DL(this.Ot.Eq,this.Ot.Operator);}A.abo([this,this.Fo,this.Fs],0
);}},BmP:function(E){if(this.Am2===E)return;this.Am2=E;A.pe([this,this.ALf],this
);},Fo:function(){return this.Filter;},BkP:function(){return this.Avg;},BkO:function(
){return this.Avf;},Blq:function(){return this.AsK;},Bk4:function(){return this.
Arp;},A9b:function(){return this.AxX;},A9a:function(){return this.AxW;},A8$:function(
){return this.An_;},A8f:function(){return this.AuC;},A8d:function(){return this.
AuB;},A8c:function(){return this.Amr;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABN._Init.call(this.Transponder={I:this},0);C.ABN._Init.
call(this.Ek={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ABY._Init.call(
this.P3={I:this},0);C.AjH._Init.call(this.S4={I:this},0);C.Abn._Init.call(this.N_={
I:this},0);C.AjH._Init.call(this.S5={I:this},0);C.Abn._Init.call(this.Nm={I:this
},0);C.ABY._Init.call(this.Ot={I:this},0);C.AjH._Init.call(this.RO={I:this},0);C.
ACL._Init.call(this.Ou={I:this},0);C.AjH._Init.call(this.RP={I:this},0);C.ACL._Init.
call(this.ND={I:this},0);C.AmW._Init.call(this.Lc={I:this},0);C.AmW._Init.call(this.
Jr={I:this},0);C.AmW._Init.call(this.KV={I:this},0);C.AmW._Init.call(this.Mu={I:
this},0);C.QD._Init.call(this.Yk={I:this},0);C.QD._Init.call(this.S6={I:this},0);
C.QD._Init.call(this.RQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I4;var B;this.N.Z(true);this.N.CV(A.aaR(A.acf.A45));this.Dr(C.APv);this.Gender.
At(this.Avg);this.AnimalType.At(this.Avf);this.Transponder.At(this.AsK);this.Ek.
At(this.Arp);this.Y.H(Ff);this.Y.JS(1);this.P3.H(IV);this.P3.Aj(true);this.P3.T(
A._GetAutoObject(A.Device.Helper).AmU(0,1));this.P3.Nd(1);this.S4.H(Qa);this.S4.
Aj(true);this.S4.T(A.aaR(A.acf.AD7));this.S4.Nd(1);this.S4.ON(2);this.N_.H(Aab);
this.N_.Nd(1);this.N_.ON(2);this.N_.AFO(A.aaR(A.acf.GN));this.S5.H(Ald);this.S5.
Aj(true);this.S5.T(A.aaR(A.acf.AG8));this.S5.Nd(1);this.S5.ON(3);this.Nm.H(Aop);
this.Nm.Aj(true);this.Nm.Nd(1);this.Nm.ON(3);this.Nm.AFO(A.aaR(A.acf.GN));this.Ot.
H(AWP);this.Ot.Aj(true);this.Ot.T(A.aaR(A.acf.RN));this.Ot.Nd(4);this.RO.H(AWQ);
this.RO.Aj(true);this.RO.T(A.aaR(A.acf.AD7));this.RO.Nd(4);this.RO.ON(3);this.Ou.
H(AWR);this.Ou.Nd(4);this.Ou.ON(3);this.Ou.A99(2);this.RP.H(AWS);this.RP.Aj(true
);this.RP.T(A.aaR(A.acf.AG8));this.RP.Nd(4);this.RP.ON(2);this.ND.H(AWT);this.ND.
Aj(true);this.ND.Nd(4);this.ND.ON(2);this.ND.A99(3);this.Lc.H(As5);this.Lc.Aj(true
);this.Lc.Nd(7);this.Lc.Aht(0);this.Lc.ON(0);this.Jr.H(Xb);this.Jr.Aj(true);this.
Jr.Nd(14);this.Jr.Aht(0);this.Jr.ON(0);this.KV.H(Xb);this.KV.Aj(true);this.KV.Nd(
22);this.KV.Aht(0);this.KV.ON(1);this.Mu.H(Xb);this.Mu.Aj(true);this.Mu.Nd(26);this.
Mu.Aht(0);this.Mu.ON(1);this.Yk.H(Xb);this.Yk.Aj(true);this.Yk.Nd(11);this.Yk.Aht(
0);this.Yk.ON(0);this.S6.H(Xb);this.S6.Aj(true);this.S6.Nd(12);this.S6.Aht(0);this.
S6.ON(0);this.RQ.H(Xb);this.RQ.Aj(true);this.RQ.Nd(8);this.RQ.Aht(0);this.RQ.ON(
0);this.Ay.H(It);this.J(this.Y,0);this.J(this.P3,0);this.J(this.S4,0);this.J(this.
N_,0);this.J(this.S5,0);this.J(this.Nm,0);this.J(this.Ot,0);this.J(this.RO,0);this.
J(this.Ou,0);this.J(this.RP,0);this.J(this.ND,0);this.J(this.Lc,0);this.J(this.Jr
,0);this.J(this.KV,0);this.J(this.Mu,0);this.J(this.Yk,0);this.J(this.S6,0);this.
J(this.RQ,0);this.J(this.Ay,0);this.N.CE=[this,this.Ev];this.N.Cl=[this,this.BAj
];this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.BBf];this.P3.AR=[this,this.BAg
];this.P3.At([this,this.A8$,this.Ar8]);this.S4.AR=[this,this.Bep];this.N_.Gr([this
,this.D_,this.GS]);this.N_.At([this,this.A9a,this.AFW]);this.S5.AR=[this,this.Bep
];this.Nm.Gr([this,this.D_,this.GS]);this.Nm.At([this,this.A9b,this.AFX]);this.Ot.
AR=[this,this.BAf];this.Ot.At([this,this.A8c,this.ArG]);this.RO.AR=[this,this.Beo
];this.Ou.Gr([this,this.D_,this.GS]);this.Ou.At([this,this.A8d,this.AEK]);this.RP.
AR=[this,this.Beo];this.ND.Gr([this,this.D_,this.GS]);this.ND.At([this,this.A8f,
this.AEM]);this.Lc.AR=[this,this.AAt];this.Lc.At([B=this.Gender,B.B_,B.B$]);this.
Lc.CK(this.Gender);this.Jr.AR=[this,this.AAt];this.Jr.At([B=this.AnimalType,B.B_
,B.B$]);this.Jr.CK(this.AnimalType);this.KV.AR=[this,this.AAt];this.KV.At([B=this.
Transponder,B.B_,B.B$]);this.KV.CK(this.Transponder);this.Mu.AR=[this,this.AAt];
this.Mu.At([B=this.Ek,B.B_,B.B$]);this.Mu.CK(this.Ek);this.Yk.AR=[this,this.A2X];
this.S6.AR=[this,this.A2X];this.RQ.AR=[this,this.A2X];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.Ek._Done();this.Y._Done();this.P3._Done();this.S4._Done();this.N_._Done(
);this.S5._Done();this.Nm._Done();this.Ot._Done();this.RO._Done();this.Ou._Done(
);this.RP._Done();this.ND._Done();this.Lc._Done();this.Jr._Done();this.KV._Done(
);this.Mu._Done();this.Yk._Done();this.S6._Done();this.RQ._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.Ek._ReInit();
this.Y._ReInit();this.P3._ReInit();this.S4._ReInit();this.N_._ReInit();this.S5._ReInit(
);this.Nm._ReInit();this.Ot._ReInit();this.RO._ReInit();this.Ou._ReInit();this.RP.
_ReInit();this.ND._ReInit();this.Lc._ReInit();this.Jr._ReInit();this.KV._ReInit(
);this.Mu._ReInit();this.Yk._ReInit();this.S6._ReInit();this.RQ._ReInit();this.Ay.
_ReInit();this.N.CV(A.aaR(A.acf.A45));this.S4.T(A.aaR(A.acf.AD7));this.N_.AFO(A.
aaR(A.acf.GN));this.S5.T(A.aaR(A.acf.AG8));this.Nm.AFO(A.aaR(A.acf.GN));this.Ot.
T(A.aaR(A.acf.RN));this.RO.T(A.aaR(A.acf.AD7));this.RP.T(A.aaR(A.acf.AG8));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S4)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.N_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ot)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$a={ZO:null,Bn_:
function(BxP){var EF=A._NewObject(C.A_$,0);EF.AB=BxP;EF.Mv=this.ZO;this.ZO=EF;},
A_R:function(){var Vk=null;if(!!this.ZO){Vk=this.ZO.AB;this.ZO=this.ZO.Mv;}return Vk;
},Contains:function(Alm){var EF=this.ZO;while(!!EF){if(EF.AB.An4===Alm)return true;
EF=EF.Mv;}return false;},BnZ:function(){if(!!this.ZO)return this.ZO.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$a;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZO)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A_$={AB:null,
Mv:null,_Init:function(aArg){this.__proto__=C.A_$;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mv)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMd={ARU:function(){A._GetAutoObject(
A.Device.Helper).Axs(this.H7,0);A._GetAutoObject(C.A9).FA();},A7I:function(){this.
H7.Ch(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A9).FA();},A6J:function(
){return A.aaL(A.ach.Am0);},_Init:function(aArg){C.AGd._Init.call(this,aArg);this.
__proto__=C.AMd;this.Dr(C.IK);},_className:"Application::AnimalActionRateScreen"
};C.AL$={Wx:function(G){this.Agt();this.I2(A.aaR(A.acf.AVe),[this,this.ATG],5);this.
I2(A.aaR(A.acf.A5w),[this,this.BlP],4);this.I2(A.aaR(A.acf.AGc),[this,this.ATr],
3);this.I2(A.aaR(A.acf.AnY),[this,this.AwS],2);this.I2(A.aaR(A.acf.AdS),[this,this.
AEP],1);this.I2(A.aaR(A.acf.Aux),[this,this.AEJ],0);A._GetAutoObject(C.BR).Fy();
A._GetAutoObject(C.BR).Mh(A.aaR(A.acf.Ane)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abq:function(){return C.AM5;},Abr:function(
){return C.ADi;},Q8:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mr();var
Ay6=A._NewObject(A.Device.BoolFilterCriterion,0);Ay6.Initialize(8,0,true,true);Be.
CW(Ay6);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HO:function(G){var F;C.GJ.
HO.call(this,G);if(this.Akf()===false){this.N.Cs(A._GetAutoObject(A.Device.Converter
).AuG((F=this.E3,F[1].call(F[0]))));this.N.Cg=[this,this.Alh];this.N.FE(A.jV);}this.
N.OO(false);this.N.OP(false);},Agf:function(){A._GetAutoObject(C.A9).Cd(40);},_Init:
function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AL$;var B;this.Dr(C.AOW
);this.Dj(A.aaR(A.acf.A7O));this.AwN([B=A._GetAutoObject(A.Device.Device),B.A8g,
B.BaU]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dj(A.aaR(A.acf.A7O));}
,_className:"Application::AlarmListScreen"};C.ANu={DE:function(G){},Agc:function(
G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gs);var Aa=(C.AB5.isPrototypeOf(G)?G:null);
if(!!Aa){A._GetAutoObject(A.Device.Helper).G7(Aa.Hr);A._GetAutoObject(C.A9).Cd(13
);}},Q8:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mr();var Azo=A._NewObject(
A.Device.BoolFilterCriterion,0);Azo.Initialize(9,0,true,true);Be.CW(Azo);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HO:function(G){C.GJ.HO.call(this,G);this.N.OO(false
);this.N.OP(false);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.ANu;this.Dr(C.AOY);this.Dj(A.aaR(A.acf.A7P));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dj(A.aaR(A.acf.A7P));},_className:"Application::ControlListScreen"
};C.Aeo={Filter:null,Eq:0,Jc:10,TableId:0,Operator:1,CP:function(){var F;this.Tp((
F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));},Bl:function(aSize){C.
Co.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jc),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb],E,0);A.pe([this,this.
Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tp((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));else this.
Tp(null);},Aht:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mb],this);},Nd:function(E){if(this.Eq===E)return;this.Eq=E;A.pe([this,this.
Mb],this);},Tp:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A6C(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).AmU(this.TableId
,this.Eq));},ON:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mb],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aeo;this.V.H(AHH);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QD={H6:null,Bl:function(aSize){var B;C.Aeo.Bl.call(this,aSize);this.H6.H([(aSize[
0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jc,0,this.
H6.M[0]-this.Jc,aSize[1]]);},Tp:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).AmU(this.TableId,this.Eq));var Av=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Av&&Av.A5)this.H6.Cw(1);else this.H6.Cw(0);},_Init:function(aArg
){C.Aeo._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.QD;this.H6.H(AHI);this.H6.Cw(0);this.J(this.H6,0);this.H6.Ax(A.aaL(A.ach.AqM));
},_Done:function(){this.__proto__=C.Aeo;this.H6._Done();C.Aeo._Done.call(this);}
,_ReInit:function(){C.Aeo._ReInit.call(this);this.H6._ReInit();},_Mark:function(
D){var B;C.Aeo._Mark.call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APv={Ap:null,Text:null,De:function(
E){C.BQ.De.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APv;this.Ap.H(AWU);this.Text.H(AWV);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.Aez));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BQ;this.Ap._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjQ={
AW:null,T3:null,Gv:null,D2:null,A$:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BQ.Bl.call(this,aSize);this.T3.H(A.abJ(this.T3.M,A.abe(this.AW.M.slice(0
,2),AWW)));this.T3.H(A.abK(this.T3.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AWX
)));},Ai:function(Ae){var B;C.BQ.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IB)this.T3.L(A.jb.AV);else this.T3.L(A.jb.Am1);},De:function(E){
C.BQ.De.call(this,E);this.Gv.L(E);this.D2.Zo(E);},Wy:function(E){C.BQ.Wy.call(this
,E);this.D2.CT(E);},Akn:function(){return this.AW.Akn();},Awe:function(){return this.
AW.Awe();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.BQ._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BU._Init.call(this.T3={I:this},0);A.acg.Ap._Init.call(this.Gv={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C5._Init.call(this.A$={I:this
},0);this.__proto__=C.AjQ;this.AW.H(AWY);this.T3.H(AWZ);this.T3.Nh(2);this.Gv.H(
AW0);this.Gv.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(AW1);this.D2.Zo(A.jb.Bm);this.
D2.CT(A.jb.Rg);this.D2.Hm(2);this.A$.DC(AW2);this.A$.DM(AW3);this.A$.L(A.jb.Bc);
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
);this.Text.L(A.jb.Bm);this.Dk(256);}else if(He){this.Background.L(this.M0);this.
Text.L(A.jb.Text);this.Dk(256);}else{this.Background.L(this.M0);this.Text.L(A.jb.
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
Di:null,Cu:null,CU:null,Dy:null,Ep:null,FZ:null,ES:null,Fm:null,Fb:null,M5:0,AQ$:
false,Aqp:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqp)this.ES.AeX(true);else this.ES.AeX(false);},AwJ:function(E){var B;
if(E===this.Akn())return;var Af6=E;var DV=this.ES;while(!!DV){if(Af6>0){DV.LZ(Af6
%10);Af6=(Af6/10)|0;}else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.QH(DV,2,0x11))?
B:null);}},Akn:function(){return A.wz(this.Awe(),-1,10);},On:function(G){if(this.
FZ.Ey>=0)this.Bf9(7);},MV:function(G){if(((this.Akn()>0)||this.AQ$)&&(this.Cu.Ey<
0))this.Bf9(2);else if(this.Akn()<=0)this.Fb.NH=true;},Adr:function(G){A.pe(this.
Di,this);},Bf9:function(Gz){var B;var ALu=0;var DV=null;switch(Gz){case 2:{DV=this.
Cu;ALu=7;}break;case 7:{DV=this.ES;ALu=2;}break;default:throw new Error(AW4);}while(
!!DV){var A2Q=(C.DF.isPrototypeOf(B=this.QH(DV,ALu,0x11))?B:null);if(!!A2Q)DV.LZ(
A2Q.Ey);else if(ALu===7)DV.LZ(0);else DV.LZ(-1);DV=A2Q;}A.pe([this,this.Adr],this
);},AeX:function(E){if(this.Aqp===E)return;this.Aqp=E;this.Am();},BmQ:function(E
){if(this.AQ$===E)return;this.AQ$=E;},AS8:function(E){var B;if(E===this.Awe())return;
var Af6=E;var DV=this.ES;while(!!DV){if(Af6.length>0){DV.LZ(A.wz(A.ab2(Af6,1),-1
,10));Af6=A.abV(Af6,Af6.length-1);}else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.
QH(DV,2,0x11))?B:null);}},Awe:function(){var B;var Iz=A.jV;var O=0;var B5=this.Cu;
for(;O<6;O=O+1){if(!!B5&&(B5.Ey>=0))Iz=Iz+B5.Ey.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TN(B5,0x11))?B:null);}return Iz;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Cu={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF.
_Init.call(this.FZ={I:this},0);C.DF._Init.call(this.ES={I:this},0);A.Core.BK._Init.
call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={I:this},0);this.__proto__=
C.AW;this.H(Ayj);this.Cu.AZ(0x3);this.Cu.H(AHJ);this.CU.AZ(0x3);this.CU.H(AHK);this.
Dy.AZ(0x3);this.Dy.H(AHL);this.Ep.AZ(0x3);this.Ep.H(AHM);this.FZ.AZ(0x3);this.FZ.
H(AHN);this.ES.AZ(0x3);this.ES.H(AHO);this.ES.LZ(0);this.Fm.Filter=6;this.Fb.Filter=
7;this.M5=A.jb.CJ;this.J(this.Cu,0);this.J(this.CU,0);this.J(this.Dy,0);this.J(this.
Ep,0);this.J(this.FZ,0);this.J(this.ES,0);this.Bb(this.ES);this.Cu.Di=[this,this.
Adr];this.CU.Di=[this,this.Adr];this.Dy.Di=[this,this.Adr];this.Ep.Di=[this,this.
Adr];this.FZ.Di=[this,this.Adr];this.ES.Di=[this,this.Adr];this.Fm.BL=[this,this.
On];this.Fb.BL=[this,this.MV];},_Done:function(){this.__proto__=A.Core.P;this.Cu.
_Done();this.CU._Done();this.Dy._Done();this.Ep._Done();this.FZ._Done();this.ES.
_Done();this.Fm._Done();this.Fb._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cu._ReInit();this.CU._ReInit();this.Dy._ReInit(
);this.Ep._ReInit();this.FZ._ReInit();this.ES._ReInit();this.Fm._ReInit();this.Fb.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Di)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.BhC="00558be9";C.BCS={Undefined:0,BDW:1,BC_:2};C.AkH={
Tn:null,AiU:null,La:null,ANy:null,An7:null,push:function(MK){if(!this.Tn){MK.Ahv=
null;MK.Mv=null;this.Tn=MK;this.AiU=this.Tn;}else{MK.Ahv=this.AiU;MK.Mv=null;this.
AiU.Mv=MK;this.AiU=MK;}},BBP:function(MK){var Qi=this.Tn;while(!!Qi){if(Qi.JM.Id===
MK.Id)return Qi;Qi=Qi.Mv;}return Qi;},BBy:function(MK){if(MK===this.Tn)this.pop(
);else if(MK===this.AiU){MK=MK.Ahv;if(!!MK)MK.Mv=null;this.AiU=MK;}else{MK.Ahv.Mv=
MK.Mv;MK.Mv.Ahv=MK.Ahv;}},Ahn:function(E){var F;if(this.La===E)return;this.La=E;
if(!!this.La)this.La.AgI(2);(F=this.ANy,F[2].call(F[0],this.La));},Vh:function(G
){var Qi=(C.ATT.isPrototypeOf(G)?G:null);if(!!Qi){if(!Qi.JM.PopupState){if(!this.
La)this.Ahn(this.top());}else if(Qi.JM.PopupState===4){this.pop();this.Ahn(this.
top());}else if(Qi.JM.PopupState===5){this.pop();this.Ahn(this.top());}else if(Qi.
JM.PopupState===7){this.pop();this.Ahn(this.top());}else if(Qi.JM.PopupState===8
){this.pop();this.Ahn(this.top());}else if(Qi.JM.PopupState===6){if(Qi===this.La
){this.pop();this.Ahn(this.top());}else this.BBy(Qi);}else if(Qi.JM.PopupState===
3){this.pop();this.Ahn(this.top());}}},pop:function(){var AKO=null;if(!!this.Tn){
AKO=this.Tn;if(this.Tn===this.AiU){this.Tn=null;this.AiU=null;}else{this.Tn=this.
Tn.Mv;if(!this.Tn)throw new Error(AW5);this.Tn.Ahv=null;}AKO.Ahv=null;AKO.Mv=null;
}return AKO;},top:function(){return this.Tn;},BBg:function(G){var B;var AtW=(A.Device.
PopupContext.isPrototypeOf(B=this.An7.JM)?B:null);if(!!AtW){var A34=this.BBP(AtW
);if(!!A34){A34.A9G(AtW);if(!AtW.Show)A34.AgI(6);}else if(AtW.Show){var AKr=A._NewObject(
C.ATT,0);AKr.A9G(AtW);AKr.ASR=[this,this.Vh];this.push(AKr);AKr.AgI(0);}}},_Init:
function(aArg){A.Core.A$w._Init.call(this.An7={I:this},0);this.__proto__=C.AkH;this.
An7.ASi=[this,this.BBg];this.An7.Bl_(A._GetAutoObject(A.Device.Device).AnL);A.h7++;
},_Done:function(){this.__proto__=null;this.An7._Done();A.h7--;},_ReInit:function(
){this.An7._ReInit();},_Mark:function(D){var B;if((B=this.Tn)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.La)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANy)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATT={Rk:null,Mv:null,Ahv:null,JM:null,ASR:null,PopupIdToString:null,AfU:function(
BwW,Bxu,BxO,BxF,BxH,BxE,Bxd){var Vj=A._NewObject(C.ATS,0);Vj.Bnh(this.JM.Id);Vj.
A_q(BwW);Vj.ASS=BxE;Vj.A_s(this.JM.Ak1);Vj.A_c(this.JM.AkG);Vj.BP=A._NewObject(C.
N,0);Vj.Lm().Cl=BxH;Vj.Lm().Cg=null;Vj.Lm().CE=BxF;Vj.Lm().CV(BxO);Vj.Lm().Cs(null
);Vj.Lm().Hx(Bxu);Vj.Lm().AFf(Bxd);return Vj;},Ako:function(){if(!this.Rk){var Agm=
this.PopupIdToString.BS(this.JM.Id);switch(this.JM.Id){case 91:case 92:this.Rk=this.
AfU(Agm,A.jV,A.jV,null,null,[this,this.Af9],0);break;case 39:this.Rk=this.AfU(Agm
,A.aaR(A.acf.Amz),A.aaR(A.acf.Ok),[this,this.A23],[this,this.A24],[this,this.Af9
],3);break;case 13:this.Rk=this.AfU(Agm,A.aaR(A.acf.Amz),A.aaR(A.acf.Bok),[this,
this.A22],[this,this.AKw],[this,this.Af9],3);break;case 25:this.Rk=this.AfU(Agm,
A.aaR(A.acf.Amz),A.aaR(A.acf.Ok),[this,this.A22],[this,this.AKw],[this,this.Af9]
,3);break;case 16:case 24:case 49:case 74:this.Rk=this.AfU(Agm,A.aaR(A.acf.Amz),
A.jV,[this,this.A22],null,[this,this.Af9],1);break;case 58:case 9:case 6:case 29:
case 107:case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:
this.Rk=this.AfU(Agm,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A23],[this,this.
A24],[this,this.Af9],3);break;case 110:this.Rk=this.AfU(Agm,A.jV,A.jV,null,null,[
this,this.Af9],1);break;case 46:case 111:this.Rk=this.AfU(Agm,A.jV,A.aaR(A.acf.Ok
),null,[this,this.AKw],[this,this.Af9],1);break;case 4:case 7:case 33:case 44:case
37:case 38:case 63:case 95:case 108:case 112:this.Rk=this.AfU(Agm,A.aaR(A.acf.No
),A.aaR(A.acf.Yes),[this,this.A23],[this,this.A24],[this,this.Af9],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:case 113:this.Rk=this.AfU(Agm,A.jV,A.aaR(A.acf.
Ok),null,[this,this.AKw],[this,this.Af9],3);break;default:A.ab5("%s",(AW6+this.JM.
Id.toFixed())+AW7);}}switch(this.JM.Id){case 16:case 49:this.Rk.A_I(true);break;
case 91:case 92:this.Rk.A_I(false);break;default:;}return this.Rk;},AKw:function(
G){this.AgI(4);},A22:function(G){this.AgI(5);},A24:function(G){this.AgI(7);},A23:
function(G){this.AgI(8);},Af9:function(G){this.AgI(3);},A9G:function(E){if(this.
JM===E)return;this.JM=E;if(!!this.Rk){this.Ako().A_s(this.JM.Ak1);this.Ako().A_c(
this.JM.AkG);}},AgI:function(BxK){var B;this.JM.Bni(BxK);(B=this.ASR)?B[1].call(
B[0],this):null;},BAN:function(G){this.AgI(9);},_Init:function(aArg){A.Device.PopupIdToString.
_Init.call(this.PopupIdToString={I:this},0);this.__proto__=C.ATT;A.h7++;},_Done:
function(){this.__proto__=null;this.PopupIdToString._Done();A.h7--;},_ReInit:function(
){this.PopupIdToString._ReInit();},_Mark:function(D){var B;if((B=this.Rk)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ahv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JM)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ASR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupEntry"
};C.Gd={BooleanToYesNo:null,Du:function(){return 2;},C7:function(aIndex){if((aIndex<
0)||(aIndex>=2))return-1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=
2))return A.jV;return this.BooleanToYesNo.BS(aIndex);},DZ:function(A_){return A_;
},H3:function(){return 1;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BooleanToYesNo._Init.call(this.BooleanToYesNo={I:this},0);this.__proto__=C.Gd;},
_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BooleanToYesNo._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.BooleanToYesNo)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"};C.Afl={Ur:null,Kc:function(
G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Ur&&!!this.
AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Ur,F[2].call(F[0],false));break;case
1:(F=this.Ur,F[2].call(F[0],true));break;default:;}A.abo(this.Ur,0);}},J9:function(
G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Ur&&!!this.
AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Ur,F[2].call(F[0],false));break;case
1:(F=this.Ur,F[2].call(F[0],true));break;default:;}A.abo(this.Ur,0);}},AkA:function(
E){if(A.aaZ(this.Ur,E))return;if(!!this.Q)A.z$([this,this.A3G],this.Ur,0);this.Ur=
E;if(!!E)A.zX([this,this.A3G],E,0);if(!!E)A.pe([this,this.A3G],this);},A3G:function(
G){var F;if(!!this.Ur){if((F=this.Ur,F[1].call(F[0])))this.Bx(1);else this.Bx(0);
}},_Init:function(aArg){C.BW._Init.call(this,aArg);this.__proto__=C.Afl;this.JY(
this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Ur)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AT9={Jg:null,OU:null,IT:null,Gl:null,AL:null,Abf:null,AgO:null,TI:null,R_:null
,AcA:null,WX:null,Hi:null,ABu:true,Init:function(aArg){var B;A.zX([this,this.Al3
],[B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0f],0);A.pe([this,this.Al3],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABu)this.N.C2(A.aaL(A.ach.
AQR));else this.N.C2(A.aaL(A.ach.AQS));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OU.L(A.jb.Bm);this.R_.Z(false);this.TI.Z(false);this.IT.Z(true);this.Gl.
Ar(false);(F=this.Gl.Q,F[2].call(F[0],this.Gl.B2));this.Background.L(A.jb.Gi);}else
if(this.Abf.Bw){this.OU.L(A.jb.Text);this.R_.Z(true);this.TI.Z(true);this.IT.Z(false
);this.Gl.Ar(false);(F=this.Gl.Q,F[2].call(F[0],this.Gl.B2));this.Background.L(A.
jb.E1);}else{this.OU.L(A.jb.Text);this.R_.Z(false);this.TI.Z(false);this.IT.Z(true
);this.Gl.Ar(true);this.Background.L(A.jb.CJ);}if(this.AgO.Bw)this.WX.Z(true);else
this.WX.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhI();},E5:function(
G){A._GetAutoObject(A.Device.Device).AnX();A._GetAutoObject(A.Device.Device).Ae_(
false);A._GetAutoObject(A.Device.Device).Uq(false);},Al3:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BAt],this);break;case 3:{A.pe([this,this.Be0],this);A.pe([B=this.Abf,B.AxG],this
);A.pe(this.Abf.MB,this);}break;case 4:A.ab5("%s",AW8);break;default:;}},Ev:function(
G){A._GetAutoObject(C.A9).FA();},BBh:function(G){this.BnK(!this.ABu);},BnK:function(
E){if(this.ABu===E)return;this.ABu=E;if(!E)A._GetAutoObject(A.Device.Device).Ae_(
false);this.Am();},BAt:function(G){var B;this.Be0(this);if(this.ABu)A._GetAutoObject(
A.Device.Device).Ae_(true);A._GetAutoObject(A.Device.Device).WA(65280);A._GetAutoObject(
A.Device.Device).Uq(true);A.pe([B=this.Abf,B.StartTimer],this);A.pe([B=this.AgO,
B.StartTimer],this);this.Am();},BAu:function(G){A._GetAutoObject(A.Device.Device
).Ae_(false);A._GetAutoObject(A.Device.Device).Uq(false);this.Am();},BAw:function(
G){this.Am();},Be0:function(G){A._GetAutoObject(A.Device.Device).AhI();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jg._Init.call(this.Jg={I:this},0);C.CH._Init.
call(this.OU={I:this},0);A.acg.Ap._Init.call(this.IT={I:this},0);A.acl.Gl._Init.
call(this.Gl={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Abf={I:this},0);A.Core.Timer._Init.call(this.AgO={I:this},0);A.acg.Ap.
_Init.call(this.TI={I:this},0);A.acg.Ap._Init.call(this.R_={I:this},0);A.acg.Text.
_Init.call(this.AcA={I:this},0);C.WX._Init.call(this.WX={I:this},0);C.CH._Init.call(
this.Hi={I:this},0);this.__proto__=C.AT9;var B;this.Background.L(A.jb.CJ);this.N.
Z(true);this.Jg.H(AW9);this.Jg.AkD(0);this.OU.H(AW_);this.OU.R(A.aaR(A.acf.A$B));
this.OU.L(A.jb.Text);this.IT.H(AW$);this.IT.L(A.jb.AV);this.IT.Zm(true);this.Gl.
Fq(1750);this.Gl.Um(750);this.Gl.Aky(0);this.Gl.Ar(true);this.Gl.B2=3;this.AL.H(
Ayk);this.Abf.PR(-1);this.Abf.Wz(1000);this.AgO.PR(-1);this.AgO.Wz(5000);this.TI.
H(AHP);this.R_.H(AHP);this.R_.L(A.jb.E1);this.AcA.H(Ayk);this.AcA.R(A.aaR(A.acf.
A$b));this.AcA.L(A.jb.Text);this.WX.H(Ayk);this.Hi.H(AXa);this.Hi.Ar(false);this.
Hi.R(A.aaR(A.acf.RangeTest));this.Hi.L(A.jb.Text);this.J(this.Jg,0);this.J(this.
OU,0);this.J(this.IT,0);this.J(this.AL,0);this.J(this.TI,0);this.J(this.R_,0);this.
J(this.AcA,0);this.J(this.WX,0);this.J(this.Hi,0);this.N.CE=[this,this.Ev];this.
N.Cl=[this,this.BBh];this.N.C1(A.aaL(A.ach.E2));this.OU.S(A.aaL(A.fl.Af));this.OU.
A2(A.aaL(A.fl.Ak));this.OU.Cv(A.aaL(A.fl.Bh));this.IT.Ax(A.aaL(A.ach.ADI));this.
Gl.Q=[B=this.IT,B.ASu,B.Cw];this.Abf.MB=[this,this.BAu];this.AgO.MB=[this,this.BAw
];this.TI.Ax(A.aaL(A.ach.TI));this.R_.Ax(A.aaL(A.ach.R_));this.AcA.S(A.aaL(A.fl.
Af));this.WX.At([B=A._GetAutoObject(A.Device.Device),B.ASI,B.A0g]);this.Hi.S(A.aaL(
A.fl.Ko));this.Hi.A2(A.aaL(A.fl.Il));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jg._Done();this.OU._Done();this.IT._Done();this.Gl._Done();this.AL._Done(
);this.Abf._Done();this.AgO._Done();this.TI._Done();this.R_._Done();this.AcA._Done(
);this.WX._Done();this.Hi._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jg._ReInit();this.OU._ReInit();this.IT._ReInit();this.Gl.
_ReInit();this.AL._ReInit();this.Abf._ReInit();this.AgO._ReInit();this.TI._ReInit(
);this.R_._ReInit();this.AcA._ReInit();this.WX._ReInit();this.Hi._ReInit();this.
OU.R(A.aaR(A.acf.A$B));this.AcA.R(A.aaR(A.acf.A$b));this.Hi.R(A.aaR(A.acf.RangeTest
));this.OU.S(A.aaL(A.fl.Af));this.OU.A2(A.aaL(A.fl.Ak));this.OU.Cv(A.aaL(A.fl.Bh
));this.AcA.S(A.aaL(A.fl.Af));this.Hi.S(A.aaL(A.fl.Ko));this.Hi.A2(A.aaL(A.fl.Il
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jg)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hi).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbR={
ScreenType:0,Nf:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Ni:
function(G){A._GetAutoObject(C.A9).Cd(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.AbR;},_className:"Application::MenuItemScreen"
};C.T$={Ad7:null,Mm:null,AmA:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.AmA){this.Mm.Cw(1);this.Mm.L(A.jb.H8);}else{this.Mm.Cw(0);
if(this.KF)this.Mm.L(A.jb.Bm);else if(this.Hk)this.Mm.L(A.jb.Text);else this.Mm.
L(A.jb.Bm);}},I0:function(G){var F,Ct;if(!!this.Ad7){(Ct=this.Ad7,Ct[2].call(Ct[
0],!(F=this.Ad7,F[1].call(F[0]))));this.AEY((F=this.Ad7,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A29:function(G){this.KF=true;this.DJ(this);},AEY:function(
E){if(this.AmA===E)return;this.AmA=E;this.DJ(this);this.Am();},A3z:function(G){var
F;this.AEY((F=this.Ad7,F[1].call(F[0])));},A0A:function(s){this.A3z(s);},DJ:function(
G){var F;if(!this.N||!this.KF)return;if(this.AmA){(F=this.N,F[1].call(F[0])).CV(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CV(A.aaR(A.acf.A73));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ASX:function(E){if(A.aaZ(this.Ad7,E))
return;if(!!this.Ad7)A.z$([this,this.A0A],this.Ad7,0);this.Ad7=E;if(!!E)A.zX([this
,this.A0A],E,0);if(!!E)A.pe([this,this.A0A],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mm={I:this},0);this.__proto__=C.T$;this.
V.L(A.jb.H8);this.Mm.H(AHQ);this.Mm.Cw(0);this.J(this.Mm,0);this.Mm.Ax(A.aaL(A.ach.
AqM));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mm._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mm._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad7)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mm)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANG={H5:null,IN:null,_Init:function(aArg){C.Ce.
_Init.call(this,aArg);C.SP._Init.call(this.H5={I:this},0);C.AGD._Init.call(this.
IN={I:this},0);this.__proto__=C.ANG;var B;this.Ja(A.aaR(A.acf.ACt));this.H5.H(Ah0
);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.Bi(true);this.IN.H(UY);this.
IN.Aj(true);this.IN.T(A.aaR(A.acf.Bs));this.J(this.H5,-1);this.J(this.IN,-1);this.
H5.AeU([B=this.H5,B.FV]);this.H5.Gr([this,this.D_,this.GS]);this.H5.Akx(A.aaL(A.
ach.Edit));this.H5.Ab4([B=A._GetAutoObject(A.Device.Helper),B.U0,B.U3]);this.IN.
AeU([B=this.IN,B.FV]);this.IN.Gr([this,this.D_,this.GS]);this.IN.Akx(A.aaL(A.ach.
Edit));this.IN.Ab4([B=A._GetAutoObject(A.Device.Helper),B.U0,B.U3]);},_Done:function(
){this.__proto__=C.Ce;this.H5._Done();this.IN._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.H5._ReInit();this.IN._ReInit();this.Ja(A.
aaR(A.acf.ACt));this.H5.T(A.aaR(A.acf.Date));this.IN.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Ce._Mark.call(this,D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AU6={Rd:null,FK:null,BZ:null,OH:null,YG:null,Aa1:null,_Init:function(aArg){C.
Ce._Init.call(this,aArg);C.Rd._Init.call(this.Rd={I:this},0);C.AMz._Init.call(this.
FK={I:this},0);C.AUF._Init.call(this.BZ={I:this},0);C.AUH._Init.call(this.OH={I:
this},0);C.Afl._Init.call(this.YG={I:this},0);C.Aa1._Init.call(this.Aa1={I:this}
,0);this.__proto__=C.AU6;var B;this.Ja(A.aaR(A.acf.Temperature));this.FK.At(A._GetAutoObject(
A.Device.Device).AnimalType);this.BZ.H(AXb);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.
Arn));this.BZ.Bi(false);this.OH.H(Aac);this.OH.Aj(true);this.OH.T(A.aaR(A.acf.Undertemperature
));this.OH.Bi(true);this.OH.Bx(3800);this.OH.Ga(3000);this.OH.EU(5000);this.OH.A_A(
A.aaR(A.acf.AGQ));this.YG.H(AXc);this.YG.Aj(true);this.YG.Z(true);this.YG.T(A.aaR(
A.acf.A43));this.J(this.BZ,0);this.J(this.OH,0);this.J(this.YG,0);this.BZ.AeU([B=
this.BZ,B.FV]);this.BZ.Gr([this,this.D_,this.GS]);this.BZ.Akx(A.aaL(A.ach.Edit));
this.BZ.LX([B=this.BZ,B.AyT]);this.BZ.L0(A.aaL(A.ach.AnO));this.BZ.At([B=this.FK
,B.B_,B.B$]);this.BZ.CK(this.FK);this.BZ.A_a([B=this.FK,B.ASQ,B.A0n]);this.BZ.A9$([
B=this.FK,B.ASP,B.A0m]);this.OH.LX([B=this.BZ,B.AyT]);this.OH.L0(A.aaL(A.ach.AnO
));this.OH.At([B=A._GetAutoObject(A.Device.Device),B.A89,B.Bbi]);this.YG.CK(this.
Aa1);this.YG.AkA([B=A._GetAutoObject(A.Device.Device),B.A8s,B.Ba3]);},_Done:function(
){this.__proto__=C.Ce;this.Rd._Done();this.FK._Done();this.BZ._Done();this.OH._Done(
);this.YG._Done();this.Aa1._Done();C.Ce._Done.call(this);},_ReInit:function(){C.
Ce._ReInit.call(this);this.Rd._ReInit();this.FK._ReInit();this.BZ._ReInit();this.
OH._ReInit();this.YG._ReInit();this.Aa1._ReInit();this.Ja(A.aaR(A.acf.Temperature
));this.BZ.T(A.aaR(A.acf.Arn));this.OH.T(A.aaR(A.acf.Undertemperature));this.OH.
A_A(A.aaR(A.acf.AGQ));this.YG.T(A.aaR(A.acf.A43));},_Mark:function(D){var B;C.Ce.
_Mark.call(this,D);if((B=this.Rd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANT={PG:null,PH:null,Ss:null,V3:null,Su:null,St:null,Gd:null,Acp:null,Init:function(
aArg){A.zX([this,this.Bo8],this.PH.Q,0);},Bo8:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw4((F=this.PH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce.
_Init.call(this,aArg);C.Ir._Init.call(this.PG={I:this},0);C.BW._Init.call(this.PH={
I:this},0);C.Afl._Init.call(this.Ss={I:this},0);C.Ir._Init.call(this.V3={I:this}
,0);C.Afl._Init.call(this.Su={I:this},0);C.Afl._Init.call(this.St={I:this},0);C.
Gd._Init.call(this.Gd={I:this},0);C.Acp._Init.call(this.Acp={I:this},0);this.__proto__=
C.ANT;var B;this.N.H(Xb);this.Ja(A.aaR(A.acf.Device));this.PG.H(Ah0);this.PG.Aj(
true);this.PG.T(A.aaR(A.acf.A$l));this.PG.Bi(false);this.PG.Ga(2);this.PG.EU(60);
this.PG.IQ(A.aaR(A.acf.AG5));this.PG.Jb(A.aaR(A.acf.AG5));this.PH.H(AXd);this.PH.
Aj(true);this.PH.T(A.aaR(A.acf.A$s));this.PH.Bi(true);this.PH.Bx(0);this.PH.Ga(-
1);this.PH.EU(1);this.Ss.H(Aac);this.Ss.Aj(true);this.Ss.T(A.aaR(A.acf.HF));this.
Ss.Bi(false);this.Ss.Bx(0);this.Ss.Ga(-1);this.Ss.EU(1);this.V3.H(Ale);this.V3.Aj(
true);this.V3.T(A.aaR(A.acf.A5p));this.V3.Bi(true);this.V3.IQ(Aad);this.V3.Jb(Aad
);this.Su.H(AcO);this.Su.Aj(true);this.Su.T(A.aaR(A.acf.AsP));this.Su.Bi(false);
this.Su.Bx(1);this.Su.Ga(-1);this.Su.EU(1);this.St.H(Ayl);this.St.Aj(true);this.
St.T(A.aaR(A.acf.Ass));this.St.Bi(true);this.St.Bx(0);this.St.Ga(-1);this.St.EU(
1);this.Acp.At(A._GetAutoObject(A.Device.Device).AxF);this.J(this.PG,0);this.J(this.
PH,0);this.J(this.Ss,0);this.J(this.V3,0);this.J(this.Su,0);this.J(this.St,0);this.
PG.At([B=A._GetAutoObject(A.Device.Device),B.A81,B.Bbe]);this.PH.At([B=this.Acp,
B.B_,B.B$]);this.PH.CK(this.Acp);this.Ss.CK(this.Gd);this.Ss.AkA([B=A._GetAutoObject(
A.Device.Device),B.AEw,B.AIM]);this.V3.At([B=A._GetAutoObject(A.Device.Device),B.
A8p,B.Ba0]);this.Su.CK(this.Gd);this.Su.AkA([B=A._GetAutoObject(A.Device.Device)
,B.A8_,B.Bbj]);this.St.CK(this.Gd);this.St.AkA([B=A._GetAutoObject(A.Device.Device
),B.ASy,B.AZ$]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.PG._Done(
);this.PH._Done();this.Ss._Done();this.V3._Done();this.Su._Done();this.St._Done(
);this.Gd._Done();this.Acp._Done();C.Ce._Done.call(this);},_ReInit:function(){C.
Ce._ReInit.call(this);this.PG._ReInit();this.PH._ReInit();this.Ss._ReInit();this.
V3._ReInit();this.Su._ReInit();this.St._ReInit();this.Gd._ReInit();this.Acp._ReInit(
);this.Ja(A.aaR(A.acf.Device));this.PG.T(A.aaR(A.acf.A$l));this.PG.IQ(A.aaR(A.acf.
AG5));this.PG.Jb(A.aaR(A.acf.AG5));this.PH.T(A.aaR(A.acf.A$s));this.Ss.T(A.aaR(A.
acf.HF));this.V3.T(A.aaR(A.acf.A5p));this.Su.T(A.aaR(A.acf.AsP));this.St.T(A.aaR(
A.acf.Ass));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.PG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUj={V6:null,V5:
null,QN:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bik
],this.QN.Q,0);},Bik:function(G){var F;A._GetAutoObject(A.Device.Device).Aku((F=
this.QN.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce._Init.call(this,aArg);C.
Nc._Init.call(this.V6={I:this},0);C.Nc._Init.call(this.V5={I:this},0);C.AUB._Init.
call(this.QN={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUj;var B;this.Ja(A.aaR(A.acf.Asl));this.V6.H(IV);this.
V6.Aj(true);this.V6.T(A.aaR(A.acf.AjE));this.V6.Bi(false);this.V6.Nf(87);this.V5.
H(AXe);this.V5.Aj(true);this.V5.T(A.aaR(A.acf.Aqk));this.V5.Bi(true);this.V5.Nf(
88);this.QN.H(UY);this.QN.Aj(true);this.QN.T(A.aaR(A.acf.A48));this.QN.Bi(false);
this.QN.Ga(-1);this.QN.EU(1);this.EartagNrAssignmentMode.At(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V6,0);this.J(this.V5,0);this.J(this.
QN,0);this.V6.AR=[B=this.V6,B.Ni];this.V5.AR=[B=this.V5,B.Ni];this.QN.At([B=this.
EartagNrAssignmentMode,B.B_,B.B$]);this.QN.CK(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.V6._Done();this.V5._Done(
);this.QN._Done();this.EartagNrAssignmentMode._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.V6._ReInit();this.V5._ReInit();this.QN._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Ja(A.aaR(A.acf.Asl));this.V6.T(A.aaR(
A.acf.AjE));this.V5.T(A.aaR(A.acf.Aqk));this.QN.T(A.aaR(A.acf.A48));},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.WX={Q:null,TransponderProtocolToString:
null,Apo:null,Background:null,Y:null,Sm:null,GN:null,PM:null,OJ:null,Pq:null,C6:
null,EV:null,SK:null,N2:null,CountryToString:null,At:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.IC],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.IC],E,0);if(!!E)A.pe([this,this.IC],this);},IC:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GN.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BM=(F=this.Q,F[1].call(F[0])).BiS();if(BM<900){var J7=A._GetAutoObject(
A.Device.Converter).ANx(BM);if(!!J7)this.C6.R(((this.CountryToString.Lu(J7)+AcM)+
BM.toFixed())+Ob);else this.C6.R(BM.toFixed());if(J7===10){var AJ$=this.A6X((F=this.
Q,F[1].call(F[0])).Id);this.C6.R(this.C6.String+((((AHR+this.Apo.BpT(AJ$))+AcM)+
A.abl(this.Apo.BpS(AJ$),2,10))+Ob));}this.C6.Z(true);this.Pq.Z(true);this.OJ.Z(false
);this.PM.Z(false);}else{this.OJ.R(((A._GetAutoObject(A.Device.Converter).BhF(BM
)+AcM)+BM.toFixed())+Ob);this.OJ.Z(true);this.PM.Z(true);this.C6.Z(false);this.Pq.
Z(false);}if(BM===276){this.EV.R(this.Apo.BS(this.A6X((F=this.Q,F[1].call(F[0])).
Id)));this.EV.Z(true);}else this.EV.Z(false);this.N2.R(this.TransponderProtocolToString.
BS((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GN.R(A.jV);this.OJ.
R(A.jV);this.EV.R(A.jV);this.C6.R(A.jV);this.N2.R(A.jV);}},A6X:function(J5){var Qw=
0;var J7=A._GetAutoObject(A.Device.Converter).S0(J5);switch(J7){case 10:{var Gh=
A._GetAutoObject(A.Device.Helper).Sh(J5,8,2)|0;Qw=A._GetAutoObject(A.Device.Converter
).ACT(Gh);}break;default:;}return Qw;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apo={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CH._Init.call(this.Sm={I:this},0);C.CH._Init.call(this.GN={I:this},0);C.CH._Init.
call(this.PM={I:this},0);C.CH._Init.call(this.OJ={I:this},0);C.CH._Init.call(this.
Pq={I:this},0);C.CH._Init.call(this.C6={I:this},0);C.CH._Init.call(this.EV={I:this
},0);C.CH._Init.call(this.SK={I:this},0);C.CH._Init.call(this.N2={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WX;
this.H(AcN);this.Background.AZ(0x3F);this.Background.H(AcN);this.Background.L(A.
jb.CS);this.Y.AZ(0x3F);this.Y.H(AcN);this.Y.JS(9);this.Sm.H(AXf);this.Sm.Aj(true
);this.Sm.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.Sm.A6(0x11);this.Sm.L(A.jb.
Text);this.GN.H(AHS);this.GN.Aj(true);this.GN.R(AXg);this.GN.A6(0x14);this.GN.L(
A.jb.Text);this.PM.H(AHT);this.PM.Aj(true);this.PM.R(A.aaR(A.acf.A_S)+A.aaR(A.acf.
Colon));this.PM.A6(0x11);this.PM.L(A.jb.Text);this.OJ.H(AHU);this.OJ.Aj(true);this.
OJ.R(AXh);this.OJ.A6(0x14);this.OJ.L(A.jb.Text);this.Pq.H(AHT);this.Pq.Aj(true);
this.Pq.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.Pq.A6(0x11);this.Pq.L(A.jb.Text
);this.C6.H(AHU);this.C6.Aj(true);this.C6.R(AXi);this.C6.A6(0x14);this.C6.L(A.jb.
Text);this.EV.H(AXj);this.EV.Aj(true);this.EV.R(AXk);this.EV.A6(0x14);this.EV.L(
A.jb.Text);this.SK.H(AXl);this.SK.Aj(true);this.SK.R(A.aaR(A.acf.N2)+A.aaR(A.acf.
Colon));this.SK.A6(0x11);this.SK.L(A.jb.Text);this.N2.H(AXm);this.N2.Aj(true);this.
N2.R(AXn);this.N2.A6(0x14);this.N2.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sm,0);this.J(this.GN,0);this.J(this.PM,0);this.J(this.OJ,0
);this.J(this.Pq,0);this.J(this.C6,0);this.J(this.EV,0);this.J(this.SK,0);this.J(
this.N2,0);this.Sm.S(A.aaL(A.fl.Ak));this.Sm.A2(A.aaL(A.fl.Bh));this.GN.S(A.aaL(
A.fl.Ak));this.GN.A2(A.aaL(A.fl.Bh));this.PM.S(A.aaL(A.fl.Ak));this.PM.A2(A.aaL(
A.fl.Bh));this.OJ.S(A.aaL(A.fl.Ak));this.OJ.A2(A.aaL(A.fl.Bh));this.Pq.S(A.aaL(A.
fl.Ak));this.Pq.A2(A.aaL(A.fl.Bh));this.C6.S(A.aaL(A.fl.Ak));this.C6.A2(A.aaL(A.
fl.Bh));this.EV.S(A.aaL(A.fl.Ak));this.EV.A2(A.aaL(A.fl.Bh));this.SK.S(A.aaL(A.fl.
Ak));this.SK.A2(A.aaL(A.fl.Bh));this.N2.S(A.aaL(A.fl.Ak));this.N2.A2(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apo._Done();this.Background._Done();this.Y._Done();this.Sm._Done();
this.GN._Done();this.PM._Done();this.OJ._Done();this.Pq._Done();this.C6._Done();
this.EV._Done();this.SK._Done();this.N2._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apo._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sm.
_ReInit();this.GN._ReInit();this.PM._ReInit();this.OJ._ReInit();this.Pq._ReInit(
);this.C6._ReInit();this.EV._ReInit();this.SK._ReInit();this.N2._ReInit();this.CountryToString.
_ReInit();this.Sm.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.PM.R(A.aaR(A.acf.A_S
)+A.aaR(A.acf.Colon));this.Pq.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.SK.R(A.
aaR(A.acf.N2)+A.aaR(A.acf.Colon));this.Sm.S(A.aaL(A.fl.Ak));this.Sm.A2(A.aaL(A.fl.
Bh));this.GN.S(A.aaL(A.fl.Ak));this.GN.A2(A.aaL(A.fl.Bh));this.PM.S(A.aaL(A.fl.Ak
));this.PM.A2(A.aaL(A.fl.Bh));this.OJ.S(A.aaL(A.fl.Ak));this.OJ.A2(A.aaL(A.fl.Bh
));this.Pq.S(A.aaL(A.fl.Ak));this.Pq.A2(A.aaL(A.fl.Bh));this.C6.S(A.aaL(A.fl.Ak)
);this.C6.A2(A.aaL(A.fl.Bh));this.EV.S(A.aaL(A.fl.Ak));this.EV.A2(A.aaL(A.fl.Bh)
);this.SK.S(A.aaL(A.fl.Ak));this.SK.A2(A.aaL(A.fl.Bh));this.N2.S(A.aaL(A.fl.Ak));
this.N2.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QV={D2:null,A_6:A.jV,Ai:function(Ae){C.Fn.Ai.call(
this,Ae);if(this.Mq.Fp())this.D2.CT(A.jb.AV);else this.D2.CT(this.Background.AQ);
this.D2.Zo(this.G9.AQ);},Zt:function(E){if(this.A_6===E)return;this.A_6=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fn._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QV;this.Background.H(AXo);this.
Mq.H(W3);this.OC.H(AHV);this.Q1.H(AHV);this.D2.H(AXp);this.D2.Z(false);this.J(this.
D2,0);this.G9.S(A.aaL(A.fl.Af));this.G9.A2(A.aaL(A.fl.Ak));this.G9.Cv(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fn;this.D2._Done();C.Fn._Done.call(this
);},_ReInit:function(){C.Fn._ReInit.call(this);this.D2._ReInit();this.G9.S(A.aaL(
A.fl.Af));this.G9.A2(A.aaL(A.fl.Ak));this.G9.Cv(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fn._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B6:null,AeC:null,Ap:null,Text:null
,DK:A.jV,AmN:0,M0:0,Jc:0,A5s:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BCw:function(G){this.Ap.H(this.Text.M);this.
AeC.H(this.Text.M);},Zo:function(E){if(this.AmN===E)return;this.AmN=E;this.AeC.L(
E);this.Text.L(E);},CT:function(E){if(this.M0===E)return;this.M0=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hm:function(E){
if(this.Jc===E)return;this.Jc=E;this.Text.Hm(E);},BlN:function(E){if(this.A5s===
E)return;this.A5s=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NP._Init.call(this.AeC={I:this},0);A.acg.NP._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AHW);
this.AeC.AZ(0x8);this.AeC.L(A.jb.Text);this.Ap.AZ(0x8);this.Ap.L(A.jb.CS);this.Text.
AZ(0xD);this.Text.H(AHW);this.Text.Hm(5);this.Text.I$(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeC,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeC.Ax(A.aaL(A.ach.APS));this.Ap.Ax(A.aaL(A.ach.APR));this.Text.Q5([this,this.BCw
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeC._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeC._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T7={DY:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALi(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkN();A._GetAutoObject(A.Device.Helper).Asp();},Ig:function(G){},AcS:function(
s){this.Ig(s);},A3o:function(G){A._GetAutoObject(C.A9).FA();},Fk:function(G){var
B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.
My(-this.Y.Br[1]);},ALi:function(G){},BGF:function(s){this.ALi(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T7;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Dr(C.AqY);this.
DY.AZ(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);this.Y.JS(9);this.Ay.H(
It);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CE=[this,this.A3o
];this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fk];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVE={Wx:function(
G){this.Agt();this.I2(A.aaR(A.acf.AVc),[this,this.ATF],7);this.I2(A.aaR(A.acf.Bop
),[this,this.BlQ],6);this.I2(A.aaR(A.acf.AGc),[this,this.ATr],3);this.I2(A.aaR(A.
acf.AnY),[this,this.AwS],2);this.I2(A.aaR(A.acf.AdS),[this,this.AEP],1);this.I2(
A.aaR(A.acf.Aux),[this,this.AEJ],0);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(
C.BR).Mh(A.aaR(A.acf.Ane)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abq:function(){return C.AM_;},Abr:function(){return C.APA;
},Q8:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mr();var ABw=A._NewObject(
A.Device.BoolFilterCriterion,0);ABw.Initialize(12,0,true,true);Be.CW(ABw);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HO:function(G){var F;C.GJ.HO.call(this,G);if(this.Akf(
)===false){this.N.Cs(A._GetAutoObject(A.Device.Converter).AuG((F=this.E3,F[1].call(
F[0]))));this.N.Cg=[this,this.Alh];this.N.FE(A.jV);}this.N.OO(false);this.N.OP(false
);},Agf:function(){A._GetAutoObject(C.A9).Cd(41);},_Init:function(aArg){C.GJ._Init.
call(this,aArg);this.__proto__=C.AVE;var B;this.Dr(C.APw);this.Dj(A.aaR(A.acf.A7Q
));this.AwN([B=A._GetAutoObject(A.Device.Device),B.A9c,B.Bbk]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dj(A.aaR(A.acf.A7Q));},_className:"Application::WatchListScreen"
};C.AMe={DE:function(G){var B;var JC=(A.Core.BK.isPrototypeOf(G)?G:null);if(((JC.
CO===4)||(JC.CO===5))===false){C.AxZ.DE.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var BcO=A._GetAutoObject(A.Device.Device
).KW;var Tf;if(JC.CO===5)Tf=5;else Tf=4;var ABb=A._GetAutoObject(A.acj.DU).Bdm(BcO
,Tf);var Gu=(((BcO+((ABb/2)|0))/ABb)|0)*ABb;if(JC.CO===4)Gu+=ABb;else if(JC.CO===
5)Gu-=ABb;if(Gu>999900)Gu=999900;if(Gu<100)Gu=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(Gu);},AsD:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O1,B.CE],this);else A._GetAutoObject(C.A9).FA();
},WM:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsF();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$j()===false){this.H7.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KW
);this.H7.Ch(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A9).FA();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.H7.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KW);this.H7.Ch(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A9).FA();}},AkU:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O1,B.Cl],this);},Bdl:function(){var
ALx=A._GetAutoObject(A.Device.Helper).W.AhS(1);if(ALx>=100000)ALx=(Math.round(ALx
/1000)|0)*1000;return ALx;},_Init:function(aArg){C.AxZ._Init.call(this,aArg);this.
__proto__=C.AMe;},_className:"Application::AnimalActionWeighingScreen"};C.AVp={V_:
null,YI:null,Rd:null,AeN:null,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.
BW._Init.call(this.V_={I:this},0);C.BW._Init.call(this.YI={I:this},0);C.Rd._Init.
call(this.Rd={I:this},0);C.AeN._Init.call(this.AeN={I:this},0);this.__proto__=C.
AVp;var B;this.Ja(A.aaR(A.acf.AG6));this.V_.H(Ah0);this.V_.Aj(true);this.V_.T(A.
aaR(A.acf.A$I));this.V_.Bi(true);this.V_.Bx(0);this.YI.H(UY);this.YI.Aj(true);this.
YI.T(A.aaR(A.acf.A$H));this.YI.Bi(false);this.J(this.V_,0);this.J(this.YI,0);this.
V_.At([B=this.Rd,B.B_,B.B$]);this.V_.CK(this.Rd);this.YI.At([B=this.AeN,B.B_,B.B$
]);this.YI.CK(this.AeN);},_Done:function(){this.__proto__=C.Ce;this.V_._Done();this.
YI._Done();this.Rd._Done();this.AeN._Done();C.Ce._Done.call(this);},_ReInit:function(
){C.Ce._ReInit.call(this);this.V_._ReInit();this.YI._ReInit();this.Rd._ReInit();
this.AeN._ReInit();this.Ja(A.aaR(A.acf.AG6));this.V_.T(A.aaR(A.acf.A$I));this.YI.
T(A.aaR(A.acf.A$H));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.
V_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeN={MassUnitToString:null
,Du:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BS(aIndex);},DZ:function(A_){return A_;},H3:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).AwO(E);}
,Init:function(aArg){var B;A.zX([this,this.Bd0],[B=A._GetAutoObject(A.Device.Device
),B.ASx,B.AZ_],0);A.pe([this,this.Bd0],this);},Bd0:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeN;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.AxZ={H7:null,Aju:null,MassUnit:null,
KW:null,Vy:null,AnK:null,AcC:null,ZW:null,O1:null,Yy:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).Af0());A.zX([this,this.AKx],[B=A._GetAutoObject(
A.Device.Device),B.AEz,B.AIP],0);A.zX([this,this.BBi],[B=A._GetAutoObject(A.Device.
Device),B.AEF,B.AIT],0);A.zX([this,this.BBj],[B=this.O1,B.Arv,B.Jy],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxS();this.AcE();},I0:function(G){this.WM(this);}
,CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsF();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lg())A._GetAutoObject(
A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),
0,null);this.H7.Gq();this.H7.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGM();else{var BCL=this.Bdl();this.ZW.Z(true);this.AcC.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BCL);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E5:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsF();else A._GetAutoObject(A.Device.Device).AhL(
);},AxS:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.BgL();break;case 3:{this.BgL();this.ZW.Z(false);this.AcC.Z(false
);if(this.A$j()){this.Vy.Z(false);this.KW.H(A.abO(this.KW.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O1.Ar(true);this.O1.Z(true);this.Bb(this.O1);}}break;
case 4:this.KW.R(A.aaR(A.acu.Aki));break;default:A.ab5("%s%e",AHX,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcE:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C1(A.aaL(A.ach.Aex));this.N.Cs(null);
this.Yy.Z(false);this.N.C2(A.aaL(A.ach.Am0));this.N.CV(A.jV);}break;case 3:{if(this.
O1.AY<=1){this.N.C1(null);this.N.Cs(null);this.Yy.Z(false);this.N.C2(null);}else{
this.N.C1(A.aaL(A.ach.AmZ));this.N.Cs(A.aaL(A.ach.Aey));this.Yy.Z(true);this.N.C2(
null);}this.N.CV(A.aaR(A.acf.Ok));}break;case 4:{this.N.C2(A.aaL(A.ach.AvJ));this.
N.Cl=[this,this.BlE];this.N.Cs(null);this.Yy.Z(false);this.N.CV(A.jV);}break;default:;
}},AsD:function(G){},BwD:function(s){this.AsD(s);},WM:function(G){},A0q:function(
s){this.WM(s);},BlE:function(G){this.CC(this);},BBi:function(G){this.Am();},AKx:
function(G){this.Am();},A$j:function(){var Auo=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Auo>0)&&!A._GetAutoObject(A.Device.Helper).BpQ(Auo
,this.H7.Timestamp);},AkU:function(G){},A0p:function(s){this.AkU(s);},BBj:function(
G){this.Am();},BgL:function(){this.KW.R(A._GetAutoObject(A.Device.Converter).Ak8(
A._GetAutoObject(A.Device.Device).KW));},Bdl:function(){return A._GetAutoObject(
A.Device.Helper).W.AhS(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Aju={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KW={I:this},0);A.acg.Text._Init.call(this.Vy={I:this
},0);C.AxR._Init.call(this.AnK={I:this},0);A.acg.Aen._Init.call(this.AcC={I:this
},0);A.acg.Aen._Init.call(this.ZW={I:this},0);C.AVJ._Init.call(this.O1={I:this},
0);A.acg.Ap._Init.call(this.Yy={I:this},0);this.__proto__=C.AxZ;this.Background.
L(A.jb.CJ);this.N.Z(true);this.Dr(C.IK);this.Aju.AZ(0x3F);this.Aju.H(Aym);this.Aju.
L(A.jb.CJ);this.MassUnit.H(AXq);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
Az9));this.MassUnit.L(A.jb.Text);this.KW.H(AXr);this.KW.A6(0x14);this.KW.R(A.aaR(
A.acu.Aki));this.KW.L(A.jb.Text);this.Vy.H(AXs);this.Vy.R(A.aaR(A.acf.A$U));this.
Vy.L(A.jb.Text);this.Vy.Z(true);this.AnK.H(AXt);this.AcC.H(AHY);this.AcC.L(A.jb.
Ad_);this.AcC.Z(false);this.ZW.H(AXu);this.ZW.L(A.jb.Ad_);this.ZW.Bms(true);this.
ZW.Z(false);this.O1.AZ(0x3F);this.O1.H(Aym);this.O1.Ar(false);this.O1.Z(false);this.
Yy.H(AXv);this.Yy.L(A.jb.Bm);this.J(this.Aju,0);this.J(this.MassUnit,0);this.J(this.
KW,0);this.J(this.Vy,0);this.J(this.AcC,0);this.J(this.ZW,0);this.J(this.O1,0);this.
J(this.Yy,0);this.N.CE=[this,this.BwD];this.N.Cg=[this,this.A0p];this.N.Cl=[this
,this.A0q];this.MassUnit.S(A.aaL(A.fl.EK));this.KW.S(A.aaL(A.fl.Aeq));this.Vy.S(
A.aaL(A.fl.EK));this.AcC.Zs(this.AnK);this.ZW.Zs(this.AnK);this.H7=A._NewObject(
A.Device.Rating,0);this.O1.LY(A._GetAutoObject(A.Device.Helper).W);this.O1.AkB(this.
H7);this.Yy.Ax(A.aaL(A.ach.AQN));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Aju._Done();this.MassUnit._Done();this.KW._Done();this.Vy._Done();this.
AnK._Done();this.AcC._Done();this.ZW._Done();this.O1._Done();this.Yy._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Aju._ReInit();
this.MassUnit._ReInit();this.KW._ReInit();this.Vy._ReInit();this.AnK._ReInit();this.
AcC._ReInit();this.ZW._ReInit();this.O1._ReInit();this.Yy._ReInit();this.MassUnit.
R(A.aaR(A.acf.Az9));this.KW.R(A.aaR(A.acu.Aki));this.Vy.R(A.aaR(A.acf.A$U));this.
MassUnit.S(A.aaL(A.fl.EK));this.KW.S(A.aaL(A.fl.Aeq));this.Vy.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H7)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yy)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVN={FK:null
,OK:null,M$:null,C9:null,LV:null,T4:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FK,B.B_,B.B$],0);A.pe([this,this.GH],this);},CC:function(G){C.Ce.CC.
call(this,G);A.pe([this,this.GH],this);},Bko:function(G){var F;this.LV.BT.L(this.
LV.V.AQ);if(!!this.LV.Q)this.LV.BT.R((A._GetAutoObject(A.Device.Converter).S7((F=
this.LV.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DU).Aat());},GH:function(
G){var AJs=true;if(this.FK.Q===1)AJs=false;this.C9.Aj(AJs);this.C9.Ar(AJs);this.
C9.Z(AJs);A._GetAutoObject(A.Device.Helper).ANr(this.Y);},_Init:function(aArg){C.
Ce._Init.call(this,aArg);C.AMA._Init.call(this.FK={I:this},0);C.AHf._Init.call(this.
OK={I:this},0);C.AUG._Init.call(this.M$={I:this},0);C.AkS._Init.call(this.C9={I:
this},0);C.Ir._Init.call(this.LV={I:this},0);C.BW._Init.call(this.T4={I:this},0);
this.__proto__=C.AVN;var B;this.Ja(A.aaR(A.acf.Settings));this.Hi.R(A.aaR(A.acf.
AsS));this.FK.At(A._GetAutoObject(A.Device.Device).AnimalType);this.OK.At(A._GetAutoObject(
A.Device.Device).OK);this.M$.H(AXw);this.M$.Aj(true);this.C9.H(As6);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KI));this.C9.Bi(true);this.C9.Ga(1000);this.C9.EU(99000);
this.LV.H(As7);this.LV.Aj(true);this.LV.T(A.aaR(A.acf.A5a));this.LV.Ga(50);this.
LV.EU(2000);this.LV.AS_(A._GetAutoObject(A.acj.DU).AzQ());this.T4.H(AcO);this.T4.
Aj(true);this.T4.T(A.aaR(A.acf.A7y));this.T4.Ga(-1);this.T4.EU(1);this.JY(this.Y
,-1);this.JY(this.Ay,-1);this.J(this.M$,0);this.J(this.C9,0);this.J(this.LV,0);this.
J(this.T4,0);this.M$.AeU([B=this.M$,B.FV]);this.M$.Gr([this,this.D_,this.GS]);this.
M$.Akx(A.aaL(A.ach.Edit));this.M$.LX([B=this.M$,B.AyT]);this.M$.L0(A.aaL(A.ach.AnO
));this.M$.At([B=this.FK,B.B_,B.B$]);this.M$.CK(this.FK);this.M$.A_a([B=this.FK,
B.ASQ,B.A0n]);this.M$.A9$([B=this.FK,B.ASP,B.A0m]);this.C9.Gr([this,this.D_,this.
GS]);this.C9.LX([B=this.M$,B.AyT]);this.C9.L0(A.aaL(A.ach.AnO));this.C9.At([B=this.
FK,B.A8n,B.ASW]);this.LV.Gr([this,this.D_,this.GS]);this.LV.LX([B=this.M$,B.AyT]
);this.LV.L0(A.aaL(A.ach.AnO));this.LV.At([B=this.FK,B.A8l,B.ASU]);this.LV.A_o([
this,this.Bko]);this.T4.Gr([this,this.D_,this.GS]);this.T4.At([B=this.OK,B.B_,B.
B$]);this.T4.CK(this.OK);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;
this.FK._Done();this.OK._Done();this.M$._Done();this.C9._Done();this.LV._Done();
this.T4._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this
);this.FK._ReInit();this.OK._ReInit();this.M$._ReInit();this.C9._ReInit();this.LV.
_ReInit();this.T4._ReInit();this.Ja(A.aaR(A.acf.Settings));this.Hi.R(A.aaR(A.acf.
AsS));this.C9.T(A.aaR(A.acf.KI));this.LV.T(A.aaR(A.acf.A5a));this.T4.T(A.aaR(A.acf.
A7y));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.FK)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M$).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUG={YU:null,Init:
function(aArg){var B;A.zX([this,this.AfD],[B=A._GetAutoObject(A.Device.Device),B.
ASx,B.AZ_],0);A.pe([this,this.AfD],this);},A3S:function(G){A._GetAutoObject(A.Device.
Device).A3(37,true,A.jV,0,[this,this.Bbz]);},A1F:function(G){var F;if(this.A8===
1){var BO=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).AzQ();if(this.D7<this.
AlQ)this.D7=this.AlQ;if(this.DW!==BO){if(!!this.JW)(F=this.JW,F[2].call(F[0],this.
D7));A.abo(this.JW,0);}}if(this.A8===2){var BO=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).AzQ();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JV
)(F=this.JV,F[2].call(F[0],this.DW));A.abo(this.JV,0);}}this.DJ(this);this.Am();
},A2f:function(G){var F;if(this.A8===1){var BO=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).AzQ();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.JW
)(F=this.JW,F[2].call(F[0],this.D7));A.abo(this.JW,0);}}if(this.A8===2){var BO=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).AzQ();if(this.DW>this.AlL)this.DW=
this.AlL;if(this.DW!==BO){if(!!this.JV)(F=this.JV,F[2].call(F[0],this.DW));A.abo(
this.JV,0);}}this.DJ(this);this.Am();},GH:function(G){this.PK.R(AHZ+A._GetAutoObject(
A.Device.Converter).S7(this.D7,2,true));this.PJ.R(AHZ+A._GetAutoObject(A.Device.
Converter).S7(this.DW,2,true));this.Sw.R(A._GetAutoObject(A.acj.DU).Aat());this.
YU.R(this.Sw.String);},A3r:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).Asr(this
);},A1_:function(Atm){if(Atm===1)return this.PK;else if(Atm===2)return this.PJ;else
return null;},_Init:function(aArg){C.Acm._Init.call(this,aArg);A.acg.Text._Init.
call(this.YU={I:this},0);this.__proto__=C.AUG;this.T(A.aaR(A.acf.ACo));this.AlL=
2000;this.AlQ=20;this.Background.H(KY);this.V.H(BD);this.V.R(A.aaR(A.acf.ACo)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkK.H(AXx);this.AkL.H(AXy);this.Q6.H(AXz);
this.QF.H(AXA);this.PJ.H(AXB);this.PK.H(AXC);this.Sw.H(AXD);this.YU.H(AXE);this.
YU.I$(false);this.YU.A6(0x12);this.YU.L(0xFF000000);this.JY(this.H4,-8);this.J(this.
YU,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YU.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acm;this.YU._Done();C.Acm.
_Done.call(this);},_ReInit:function(){C.Acm._ReInit.call(this);this.YU._ReInit();
this.T(A.aaR(A.acf.ACo));this.V.R(A.aaR(A.acf.ACo)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YU.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acm._Mark.call(this,D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABB={M:O3,A6_:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A6_();},_Init:function(
aArg){A.Graphics.Hy._Init.call(this,aArg);this.__proto__=C.ABB;},_className:"Application::AbstractPath"
};C.Aqd={DP:null,DY:null,Ri:null,AdO:null,P2:null,AdN:null,Auw:1,A4I:0,Bcv:false
,AzM:true,CP:function(){this.BgH(this);},Init:function(aArg){var B;this.Bb(this.
AdO);A.zX([this,this.BgH],[B=this.AdO,B.A8t,B.Ba4],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdN.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BhY(this.Auw+this.A4I)));if(this.Auw===1)this.P2.R(A.aaR(A.acf.ANf));else this.
P2.R(A.aaR(A.acf.Bhy));},CC:function(G){if(this.AzM)this.AzM=false;else if(this.
DP.BcF()===false)A.pe([this,this.A20],this);else if(this.DP.Az1())this.DP.Ac6();
A.zV([this,this.Af8],A._GetAutoObject(A.Device.Device).An,0);},E5:function(G){A.
z9([this,this.Af8],A._GetAutoObject(A.Device.Device).An,0);},A20:function(G){this.
Bcv=true;A._GetAutoObject(C.A9).FA();},BgH:function(G){var B;var Bc7=(C.Wj.isPrototypeOf(
B=this.AdO.AV)?B:null);if(!!Bc7){var Ay9=A._NewObject(A.Device.ActionToString,0);
this.Ri.R(Ay9.Lu(Bc7.Action));}},Ig:function(G){var Cy=(C.Wj.isPrototypeOf(G)?G:
null);if(!Cy)return;this.DP.Qm(Cy.Action);this.BlH(this.Auw+1);},BAM:function(G){
if(A._GetAutoObject(C.Pk).NV(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},BlH:function(E){
if(this.Auw===E)return;this.Auw=E;this.Am();},Af8:function(G){if((this.Bcv===false
)&&(this.DP.BcF()===false))A.pe([this,this.A20],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);C.CH._Init.call(this.
Ri={I:this},0);C.ARC._Init.call(this.AdO={I:this},0);C.CH._Init.call(this.P2={I:
this},0);A.acg.Text._Init.call(this.AdN={I:this},0);this.__proto__=C.Aqd;this.Background.
L(A.jb.CS);this.N.H(Xb);this.N.Z(true);this.Dr(C.IK);this.DY.AZ(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Ri.H(AH0);this.Ri.L(A.jb.Text);this.AdO.H(AXF);this.
P2.H(Ayn);this.P2.R(A.aaR(A.acf.ANf));this.P2.L(A.jb.Text);this.AdN.H(AH1);this.
AdN.R(AXG);this.AdN.L(A.jb.Text);this.J(this.DY,0);this.J(this.Ri,0);this.J(this.
AdO,0);this.J(this.P2,0);this.J(this.AdN,0);this.N.CE=[this,this.A20];this.N.Cg=[
this,this.BAM];this.N.C1(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AeA));this.Ri.S(
A.aaL(A.fl.EK));this.Ri.A2(A.aaL(A.fl.Af));this.Ri.Cv(A.aaL(A.fl.Ak));this.AdO.A3p=[
this,this.Ig];this.P2.S(A.aaL(A.fl.EK));this.P2.A2(A.aaL(A.fl.Af));this.P2.Cv(A.
aaL(A.fl.Ak));this.AdN.S(A.aaL(A.fl.H1));this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Ri._Done();this.
AdO._Done();this.P2._Done();this.AdN._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Ri._ReInit();this.AdO._ReInit();
this.P2._ReInit();this.AdN._ReInit();this.P2.R(A.aaR(A.acf.ANf));this.Ri.S(A.aaL(
A.fl.EK));this.Ri.A2(A.aaL(A.fl.Af));this.Ri.Cv(A.aaL(A.fl.Ak));this.P2.S(A.aaL(
A.fl.EK));this.P2.A2(A.aaL(A.fl.Af));this.P2.Cv(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ri)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P2
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdN)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARC={Ia:null,A3p:null,Cq:null,Y:null,Ay:
null,A36:0,Init:function(aArg){A.zV([this,this.ABr],this.Ia,0);A.zV([this,this.BgE
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Aut],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABr],this);},Bb:function(E){var A2W=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A2W)A.abo([this,this.A8t,this.Ba4],0);},DE:
function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case
7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QH(X,Fi,0x415);
if((Fi===5)&&!X){var AK_=this.AV;while(!X){AK_=this.QH(AK_,2,0x415);if(!!AK_)X=this.
QH(AK_,Fi,0x415);else break;}}if(!!X)this.Bb(X);var GY=(C.Wj.isPrototypeOf(B=this.
AV)?B:null);if(!!GY)this.A36=(C.Wj.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A36=0;A.pe([this,this.MP],this);},A1y:function(ED){var EP=A._GetAutoObject(C.DP).
BcN(ED,this.A3p);this.J(EP,0);},Ao1:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdJ=X;X=X.Ah;if(((AdJ.U&0x400)===0x400))this.HN(AdJ);
}},ABr:function(G){this.Ao1();var O;var CB=A._GetAutoObject(C.Pk).NQ();for(O=0;O<
CB;O=O+1){var Aak=A._GetAutoObject(C.Pk).OD(O);this.A1y(Aak);}A.pe([this,this.BgE
],this);A.pe([this,this.Bqc],this);A.pe([this,this.Aut],this);},Bqc:function(G){
var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400
)){var Aa=(C.Wj.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},Aut:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wj.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATA(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATA(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATA(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fk:function(G){var B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mz((
B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[1]);},BgE:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wj.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pk).NV(Aa.Action)&&A._GetAutoObject(C.
DP).A4H(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A36===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MP],this);},MP:function(G){var B;this.Y.Vw(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARC;this.H(AXH);this.Cq.Filter=147;this.Y.AZ(0xB);this.Y.H(AXI);this.Y.JS(9);this.
Ay.AZ(0xA);this.Ay.H(AXJ);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.
DE];this.Cq.D1=[this,this.DE];this.Y.El=[this,this.Fk];this.Ia=A._GetAutoObject(
C.Pk);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3p)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fr={Ej:null,AL:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fr;this.N.Ar(false);this.Ej.H(BD);this.Ej.Ar(false
);this.AL.H(Ff);this.AL.L(A.jb.Ad_);this.Text.H(BD);this.Text.R(AXK);this.Text.L(
0xFF000000);this.Ap.H(O3);this.Ap.L(A.jb.Text);this.J(this.Ej,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cs(A.aaL(A.ach.AeA));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADb));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ej._Done();this.AL._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ej._ReInit();this.AL._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.AaR={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},I0:function(G){},Ai:function(Ae){C.BW.
Ai.call(this,Ae);var FS=A.jb.Ad_;var GX=A.jb.CS;if(this.Hk){FS=A.jb.Text;GX=A.jb.
Bm;}if(!this.LF){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else if(this.Qs){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KF){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GX);}this.Hw.L(A.
jb.CS);this.H4.L(A.jb.CS);},Hl:function(G){var B;var Gf=this.Dz.G5;var CA=(C.CH.
isPrototypeOf(B=this.Dz.Ci)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.A2(A.aaL(
A.fl.Bh));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gk(Gf));else CA.R(W$);CA.H(A.
abK(CA.M,[this.Dz.Wa,(B=this.Dz.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.AaR;this.Dz.AFg(170);this.Dz.N0(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Aji={C8:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hm(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FS=A.jb.Ad_;var GX=A.jb.CS;if(this.Hk){FS=A.jb.Text;
GX=A.jb.Bm;}if(!this.LF){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else if(this.
Qs){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KF){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GX);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aji;this.C8.H(AXL);this.C8.Cw(1);this.J(this.C8,0);this.C8.Ax(A.aaL(A.ach.Ajr)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C8._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALY={Y:null,RL:null,Tr:null
,Ts:null,Tt:null,AdM:null,XJ:null,Vq:null,Vr:null,AaQ:null,Ay:null,Init:function(
aArg){this.Bb(this.RL);},DE:function(G){C.Fr.DE.call(this,G);this.MP(this);},I0:
function(G){this.BfX(this);},Lm:function(){if(!this.BP){this.BP=A._NewObject(C.N
,0);this.BP.CE=[this,this.BfX];this.BP.Cg=null;this.BP.Cl=null;this.BP.CV(A.jV);
this.BP.Cs(null);this.BP.C1(A.aaL(A.ach.Yu));}return this.BP;},AA6:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XJ.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XJ.Q))A._GetAutoObject(C.AutoActions).J(this.XJ.Q);if(!!this.Vq.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vq.Q))A._GetAutoObject(C.AutoActions
).J(this.Vq.Q);if(!!this.Vr.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vr.
Q))A._GetAutoObject(C.AutoActions).J(this.Vr.Q);if(!!this.AaQ.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaQ.Q))A._GetAutoObject(C.AutoActions).J(this.AaQ.Q
);A._GetAutoObject(C.AutoActions).Ch();},BfX:function(G){if(this.BzU()===true){this.
AA6();this.AaE(this);}else A._GetAutoObject(A.Device.Device).A3(27,true,A.jV,0,null
);},BzU:function(){return(!!this.XJ.C7(this.XJ.Q)||!!this.Vq.C7(this.Vq.Q))||!!this.
Vr.C7(this.Vr.Q);},Fk:function(G){var B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[1]);this.
Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[1]);},MP:function(G){var B;this.
Y.Vw(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true
,null,null);},BA1:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XJ.Att(this);this.Vq.Att(this);this.Vr.Att(this);this.AaQ.Att(this);}
,_Init:function(aArg){C.Fr._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.AaR._Init.call(this.RL={I:this},0);C.AaR._Init.call(this.Tr={I:this},0);C.
AaR._Init.call(this.Ts={I:this},0);C.AaR._Init.call(this.Tt={I:this},0);C.Au3._Init.
call(this.AdM={I:this},0);C.AutoAction._Init.call(this.XJ={I:this},0);C.AutoAction.
_Init.call(this.Vq={I:this},0);C.AutoAction._Init.call(this.Vr={I:this},0);C.AutoAction.
_Init.call(this.AaQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALY;var B;this.H(Rn);this.Text.R(A.aaR(A.acf.Tu));this.Y.H(L1);this.Y.JS(1);this.
RL.H(Ah0);this.RL.Ar(true);this.RL.Aj(true);this.RL.T(A._GetAutoObject(A.Device.
Helper).Nl(A.aaR(A.acf.Ajh),P$,AH2));this.Tr.H(UY);this.Tr.Ar(true);this.Tr.Aj(true
);this.Tr.T(A._GetAutoObject(A.Device.Helper).Nl(A.aaR(A.acf.Ajh),P$,AH3));this.
Ts.H(Aac);this.Ts.Ar(true);this.Ts.Aj(true);this.Ts.T(A._GetAutoObject(A.Device.
Helper).Nl(A.aaR(A.acf.Ajh),P$,AH4));this.Tt.H(Ale);this.Tt.Ar(true);this.Tt.Aj(
true);this.Tt.T(A._GetAutoObject(A.Device.Helper).Nl(A.aaR(A.acf.Ajh),P$,AH5));this.
AdM.H(Ayo);this.AdM.Aj(true);this.AdM.T(A.aaR(A.acf.A_3));this.Vq.Index=1;this.Vr.
Index=2;this.AaQ.Index=3;this.Ay.H(It);this.J(this.Y,0);this.J(this.RL,0);this.J(
this.Tr,0);this.J(this.Ts,0);this.J(this.Tt,0);this.J(this.AdM,0);this.J(this.Ay
,0);this.Y.El=[this,this.Fk];this.RL.Zp(A.aaL(A.fl.H1));this.RL.Zq(A.aaL(A.fl.H1
));this.RL.At([B=this.XJ,B.B_,B.B$]);this.RL.CK(this.XJ);this.Tr.Zp(A.aaL(A.fl.H1
));this.Tr.Zq(A.aaL(A.fl.H1));this.Tr.At([B=this.Vq,B.B_,B.B$]);this.Tr.CK(this.
Vq);this.Ts.Zp(A.aaL(A.fl.H1));this.Ts.Zq(A.aaL(A.fl.H1));this.Ts.At([B=this.Vr,
B.B_,B.B$]);this.Ts.CK(this.Vr);this.Tt.Zp(A.aaL(A.fl.H1));this.Tt.Zq(A.aaL(A.fl.
H1));this.Tt.At([B=this.AaQ,B.B_,B.B$]);this.Tt.CK(this.AaQ);this.AdM.AR=[this,this.
BA1];this.Init(aArg);},_Done:function(){this.__proto__=C.Fr;this.Y._Done();this.
RL._Done();this.Tr._Done();this.Ts._Done();this.Tt._Done();this.AdM._Done();this.
XJ._Done();this.Vq._Done();this.Vr._Done();this.AaQ._Done();this.Ay._Done();C.Fr.
_Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.Y._ReInit();this.
RL._ReInit();this.Tr._ReInit();this.Ts._ReInit();this.Tt._ReInit();this.AdM._ReInit(
);this.XJ._ReInit();this.Vq._ReInit();this.Vr._ReInit();this.AaQ._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.Tu));this.RL.T(A._GetAutoObject(A.Device.Helper
).Nl(A.aaR(A.acf.Ajh),P$,AH2));this.Tr.T(A._GetAutoObject(A.Device.Helper).Nl(A.
aaR(A.acf.Ajh),P$,AH3));this.Ts.T(A._GetAutoObject(A.Device.Helper).Nl(A.aaR(A.acf.
Ajh),P$,AH4));this.Tt.T(A._GetAutoObject(A.Device.Helper).Nl(A.aaR(A.acf.Ajh),P$
,AH5));this.AdM.T(A.aaR(A.acf.A_3));},_Mark:function(D){var B;C.Fr._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ts)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Tt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={Cb:
A.abi(16,0,null),Du:function(){return 16;},C7:function(aIndex){if(aIndex>=16)return-
1;return this.Cb.Get(aIndex);},DZ:function(A_){var O=0;while(O<16){if(this.Cb.Get(
O)===A_)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(O<16){
if(this.Cb.Get(O)>max)max=this.Cb.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.Cb=[]).__proto__=C.Cm.Cb;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={Ia:null,Ac6:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.Att],this.Ac6,0);A.pe([this,this.
Att],this);},Du:function(){return this.Ia.NQ();},C7:function(aIndex){if(aIndex>=
this.Du())return-1;return this.Ia.OD(aIndex);},Gk:function(aIndex){return this.ActionToString.
BS(this.C7(aIndex));},DZ:function(A_){var O=0;while(O<this.Du()){if(this.Ia.OD(O
)===A_)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(O<this.
Du()){if(this.Ia.OD(O)>max)max=this.Ia.OD(O);O=O+1;}return max;},Att:function(G){
this.Q=this.Ac6.OD(this.Index);A.abo([this,this.B_,this.B$],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ia=A._GetAutoObject(C.AuN);this.Ac6=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AL3={Atq:0,Init:function(aArg
){var B;A.zX([this,this.Beq],[B=A._GetAutoObject(A.Device.Device),B.A7$,B.BaP],0
);A.zX([this,this.Ben],[B=A._GetAutoObject(A.Device.Device),B.ASk,B.AZ5],0);A.pe([
this,this.Beq],this);A.pe([this,this.Ben],this);},Clear:function(){C.Vv.Clear.call(
this);this.Atq=0;},Ch:function(){A._GetAutoObject(A.Device.Device).ArB(this.Atq);
A._GetAutoObject(A.Device.Device).ArC(this.toString());},Beq:function(G){this.Atq=
A._GetAutoObject(A.Device.Device).Pk;A.we(this,0);},Ben:function(G){this.E4(A._GetAutoObject(
A.Device.Device).Auy);A.we(this,0);},NV:function(ED){if((this.Atq&(((B=ED)<0)?B+
0x100000000:B))===(((B=ED)<0)?B+0x100000000:B))return true;return false;},AUw:function(
ED){this.Atq=this.Atq|(((B=ED)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vv._Init.
call(this,aArg);this.__proto__=C.AL3;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pk={_Init:function(){C.AL3._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AL4={Vt:null,Ay:null,Y:null,JP:null,CP:function(
){this.AiJ(this);},Init:function(aArg){A.zV([this,this.AiJ],this.Vt,0);A.pe([this
,this.AiJ],this);},DE:function(G){C.Fr.DE.call(this,G);this.MP(this);},Lm:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.Ev];this.BP.Cg=[
this,this.A28];this.BP.Cl=[this,this.A3B];this.BP.C2(A.aaL(A.ach.Ara));this.BP.Cs(
A.aaL(A.ach.Aq4));this.BP.C1(A.aaL(A.ach.Yu));}return this.BP;},Ev:function(G){if(
this.ByM()>0){this.AA6();this.AaE(this);}else A._GetAutoObject(A.Device.Device).
A3(28,true,A.jV,0,null);},AiJ:function(G){this.Ao1();var O;for(O=0;O<this.Vt.NQ(
);O=O+1){var Aak=A._GetAutoObject(C.Pk).OD(O);this.A1b(Aak);}this.J(this.JP,0);A.
aaS([this,this.MP],this);},Fk:function(G){var B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-
B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[1]);},MP:function(G
){var B;this.Y.Vw(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},A1b:function(G$){var Ay9=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Se,0);Aa.T(Ay9.BS(G$));Aa.Aj(true);Aa.G5=G$;Aa.A9Z(this.
Vt.NV(G$));this.J(Aa,0);this.ZB(Aa);},Ao1:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdJ=X;X=X.Ah;if(((AdJ.U&0x400)===0x400))this.HN(
AdJ);}},AA6:function(){var B;this.Vt.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JP)){var Aa=(C.Se.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vt.J(Aa.G5);if(Aa.ASv())this.Vt.AUw(Aa.G5);}else A.ab5(
"%s",Ayp);}X=X.Ah;}this.Vt.Ch();},ByM:function(){var B;var A37=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JP)){var
Aa=(C.Se.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASv())A37=A37+1;}else A.ab5("%s"
,Ayp);}X=X.Ah;}return A37;},A28:function(G){var B;var Aa=(C.Se.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAm=(C.Se.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAm){this.
AhA(AAm,Aa);A.pe([this,this.MP],this);}}},A3B:function(G){var B;var Aa=(C.Se.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAS=(C.Se.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAS
){this.AhA(Aa,AAS);A.pe([this,this.MP],this);}}},AqH:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiJ],this);},_Init:function(
aArg){C.Fr._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Au3._Init.call(this.JP={I:this},0);this.__proto__=C.AL4;
this.H(Rn);this.Text.R(A.aaR(A.acf.AEa));this.Ay.H(It);this.Y.H(L1);this.Y.JS(1);
this.JP.H(AH6);this.JP.Aj(true);this.JP.T(A.aaR(A.acf.AqH));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JP,0);this.Y.El=[this,this.Fk];this.JP.AR=[this,this.AqH
];this.Vt=A._GetAutoObject(C.Pk);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fr;this.Ay._Done();this.Y._Done();this.JP._Done();C.Fr._Done.call(this);},_ReInit:
function(){C.Fr._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JP._ReInit(
);this.Text.R(A.aaR(A.acf.AEa));this.JP.T(A.aaR(A.acf.AqH));this.CP();},_Mark:function(
D){var B;C.Fr._Mark.call(this,D);if((B=this.Vt)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Se={G5:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hm(10);},Bl:function(aSize){C.T$.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mm.M[0]));},Ai:function(Ae){var B;C.T$.Ai.call(this,Ae);var He=((Ae&0x10
)===0x10);var Fv=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FS=A.jb.Ad_;var GX=A.jb.
Bm;if(this.Hk){FS=A.jb.Bm;GX=A.jb.Text;}if(!He){this.Background.L(FS);this.V.L(A.
jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GX);
}this.LF=He;this.KF=Fv;this.Qs=GE;},I0:function(G){this.A3z(this);},A3z:function(
G){this.AEY(!this.AmA);},A9Z:function(E){this.AEY(E);},ASv:function(){return this.
AmA;},_Init:function(aArg){C.T$._Init.call(this,aArg);this.__proto__=C.Se;this.Mm.
H(AXM);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vv={CB:0,
Ia:A.abi(17,0,null),OD:function(Hz){return this.Ia.Get(Hz);},NQ:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ia.Set(O,0);this.CB=0;},J:function(
ED){if(this.CB>=17)A.ab5("%s",AH7);else{this.Ia.Set(this.CB,ED);this.CB=this.CB+
1;}},Ch:function(){},E4:function(AcU){var AJf=AcU.indexOf(String.fromCharCode(0x2C
),0);var A1z=A.jV;var O=0;this.CB=0;while(O<17)if(AcU===A.jV){this.Ia.Set(O,0);O++;
}else{if(AJf===-1){A1z=AcU;AcU=A.jV;}else{A1z=A.abV(AcU,AJf);AcU=A.ab1(AcU,0,AJf+
1);}var Aak=A.abZ(A1z,0,10)|0;if(this.ADP(Aak)){this.Ia.Set(this.CB,Aak);this.CB=
this.CB+1;O++;}AJf=AcU.indexOf(String.fromCharCode(0x2C),0);}if(AcU!==A.jV)A.ab5(
"%s",AXN);},toString:function(){var A2N=(((B=this.Ia.Get(0))<0)?B+0x100000000:B).
toFixed();var O;for(O=1;O<this.CB;O=O+1)A2N=(A2N+AH8)+(((B=this.Ia.Get(O))<0)?B+
0x100000000:B).toFixed();return A2N;},Axt:function(Hz,ED){if(Hz>=this.CB){A.ab5(
"%s",((((AXO+Hz.toFixed())+AXP)+this.CB.toFixed())+AXQ)+AXR);return;}this.Ia.Set(
Hz,ED);},Contains:function(ED){var O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===
ED)return true;return false;},ADP:function(ED){return true;},DZ:function(ED){var
O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===ED)return O;return-1;},_Init:function(
aArg){(this.Ia=[]).__proto__=C.Vv.Ia;this.__proto__=C.Vv;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ActionsList"};C.AMK={Init:function(aArg){var B;A.zX([this,this.BeA
],[B=A._GetAutoObject(A.Device.Device),B.A8k,B.BaX],0);A.pe([this,this.BeA],this
);},Ch:function(){A._GetAutoObject(A.Device.Device).Aks(this.toString());},ADP:function(
ED){switch(ED){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},BeA:function(G){this.E4(A._GetAutoObject(A.Device.Device).
AutoActions);A.we(this,0);},_Init:function(aArg){C.Vv._Init.call(this,aArg);this.
__proto__=C.AMK;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AMK._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Wj={Vs:null,Kw:null,A69:A.jV,Action:0,A4J:
false,A_P:false,A$u:false,Bl:function(aSize){C.Fn.Bl.call(this,aSize);this.Q1.H(
this.Mq.M);this.OC.H(this.Q1.M);},Ai:function(Ae){C.Fn.Ai.call(this,Ae);if(!this.
LF){this.Kw.TX.L(A.jb.Am1);this.Kw.QJ.Z(true);this.Kw.QJ.L(A.jb.AQ0);}else if(this.
Qs){this.Kw.TX.L(A.jb.Bm);this.Kw.QJ.Z(false);}else if(this.KF){this.Kw.TX.L(A.jb.
Bm);this.Kw.QJ.Z(false);}else{this.Kw.TX.L(A.jb.Text);this.Kw.QJ.Z(true);this.Kw.
QJ.L(A.jb.CS);}},BlG:function(E){if(this.Action===E)return;this.Action=E;},BmN:function(
E){if(this.A69===E)return;this.A69=E;this.Vs.Text.R(E);},ATA:function(E){if(this.
A$u===E)return;this.A$u=E;this.Kw.Bny(!this.Kw.AUV);},AFx:function(E){if(this.A_P===
E)return;this.A_P=E;this.Kw.Z(!this.Kw.Fp());},A9p:function(E){if(this.A4J===E)return;
this.A4J=E;this.Vs.Z(E);},_Init:function(aArg){C.Fn._Init.call(this,aArg);C.Vs._Init.
call(this.Vs={I:this},0);C.Kw._Init.call(this.Kw={I:this},0);this.__proto__=C.Wj;
this.H(AXS);this.Background.H(AXT);this.G9.Ar(false);this.G9.Z(false);this.Vs.H(
AXU);this.Vs.Z(false);this.Kw.H(AXV);this.Kw.Z(false);this.J(this.Vs,0);this.J(this.
Kw,0);this.Mq.Ax(A.aaL(A.ach.ANg));},_Done:function(){this.__proto__=C.Fn;this.Vs.
_Done();this.Kw._Done();C.Fn._Done.call(this);},_ReInit:function(){C.Fn._ReInit.
call(this);this.Vs._ReInit();this.Kw._ReInit();},_Mark:function(D){var B;C.Fn._Mark.
call(this,D);if((B=this.Vs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.Vs={AL:
null,Text:null,BU:null,Init:function(aArg){this.Text.H(this.M);this.BU.H(this.M);
this.AL.H(this.M);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL.
_Init.call(this.AL={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);this.__proto__=C.Vs;this.AL.H(AXW);this.AL.L(A.
jb.Bjn);this.H(AXX);this.Text.H(AXY);this.Text.L(A.jb.Text);this.BU.H(AXZ);this.
BU.Nh(1);this.BU.L(A.jb.Text);this.J(this.AL,0);this.J(this.Text,0);this.J(this.
BU,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AL._Done();this.Text._Done();this.BU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AL._ReInit();this.Text._ReInit(
);this.BU._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Kw={QJ:null,TX:null,AUV:false,Bny:function(E){if(this.
AUV===E)return;this.AUV=E;if(E){this.TX.Ax(A.aaL(A.ach.ACv));this.QJ.Ax(A.aaL(A.
ach.ACv));}else{this.TX.Ax(A.aaL(A.ach.AqB));this.QJ.Ax(A.aaL(A.ach.AqB));}},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.QJ={I:this
},0);A.acg.Ap._Init.call(this.TX={I:this},0);this.__proto__=C.Kw;this.H(Ayq);this.
QJ.H(Ayq);this.QJ.Cw(1);this.TX.H(Ayq);this.TX.Cw(0);this.J(this.QJ,0);this.J(this.
TX,0);this.QJ.Ax(A.aaL(A.ach.AqB));this.TX.Ax(A.aaL(A.ach.AqB));},_Done:function(
){this.__proto__=A.Core.P;this.QJ._Done();this.TX._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.QJ._ReInit();this.TX._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.QJ)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.AR0={Ge:null,Ca:null,Dp:null,Dh:null,Kr:null,Zg:10,Aq1:0,AEl:0,ASc:0,Ay8:false
,LU:false,BcE:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).An.Lg())A._GetAutoObject(A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.
Device).An.HI().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gq();A._GetAutoObject(
A.Device.Helper).Aqg(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAA],this.
C$.Q,0);A.zX([this,this.BAJ],this.Dp.Q,0);A.zX([this,this.ABp],this.Dh.Q,0);A.zX([
this,this.ABp],this.Dh.HG.Q,0);A.zX([this,this.ABp],[this,this.ASC,this.AFv],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A9h,B.Bbp],0);A.zX([this
,this.Be_],this.Ca.Q,0);A.pe([this,this.AAA],this);A.pe([this,this.GH],this);A.pe([
this,this.ABp],this);A.pe([this,this.Be_],this);},CC:function(G){if(!this.Ay8){this.
Ay8=true;A.pe([this,this.AcR],this);}else C.HY.CC.call(this,G);},Agd:function(G){
this.ASc=this.Zg;this.BcM(this);},Ev:function(G){A._GetAutoObject(A.Device.Helper
).W.E6();A._GetAutoObject(C.A9).FA();},Auf:function(){this.N.CV(A.jV);this.N.C2(
A.aaL(A.ach.ADA));this.N.Cl=[this,this.AyS];},AAv:function(G){A._GetAutoObject(C.
A9).Cd(55);},AFv:function(E){if(this.Zg===E)return;this.Zg=E;A.abo([this,this.ASC
,this.AFv],0);},BcM:function(G){var F;if(!this.Zg||(this.BcE===true)){A._GetAutoObject(
A.Device.Device).A3(24,false,CQ,0,null);if(this.AEl===1)A._GetAutoObject(A.Device.
Device).A3(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A3(23,
true,this.AEl.toFixed(),2000,null);this.Ev(this);return;}this.Ge.Gq();this.Ge.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Ge.NZ(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Ge.Q4(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Ge.JT(A._GetAutoObject(A.Device.Helper).W.Gender);this.Ge.Ne(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Ge.PT(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Ge.SG(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alq=A._GetAutoObject(
A.Device.Helper).A1t(this.Ge,(F=this.Dh.HZ.Ht,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alq)this.AiZ();else{A._GetAutoObject(A.Device.Helper).AKf(
this.Ge,Alq,(F=this.Dh.HZ.Ht,F[1].call(F[0])),this.Zg-1,[this,this.ApF]);A._GetAutoObject(
A.Device.Device).A3(24,false,CQ,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am3())this.C9.Z(true);else this.C9.Z(false);if(this.LU){this.Dp.
Z(false);this.Ca.T(A.aaR(A.acf.ACC));this.Ca.AE0(A.aaL(A.ach.Afc));}else{this.Dp.
Z(true);this.Ca.T(A.aaR(A.acf.Ak3));this.Ca.AE0(null);}if((this.Y.BiX(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JH(this.Y.TN(this.AV,0x1));this.Am();
},AS7:function(E){if(this.Aq1===E)return;this.Aq1=E;A.abo([this,this.A8x,this.AS7
],0);},ABp:function(G){var F;var AJ3=(F=this.Dh.Q,F[1].call(F[0]));var AAd=-1;switch((
F=this.Dh.HZ.Ht,F[1].call(F[0]))){case 0:AAd=AJ3+((F=A._GetAutoObject(A.Device.Helper
).Bdi(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zg-1));break;case 1:AAd=(AJ3+this.
Zg)-1;break;case 3:case 2:case 5:case 4:switch(this.Dh.HG.AC.Q){case 0:AAd=(AJ3+
this.Zg)-1;break;case 1:AAd=(AJ3-this.Zg)+1;break;default:throw new Error(AX0+this.
Dh.HG.AC.Q.toFixed());}break;default:throw new Error(AX1+this.Dh.HG.AC.Q.toFixed(
));}this.AS7(AAd);},BAJ:function(G){A.pe([this,this.GH],this);A.pe([this,this.At0
],this);},AAA:function(G){A._GetAutoObject(A.Device.Helper).AVr(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LU);A.pe([this,this.ABp],this);},ApF:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.Apz();else switch((F=this.Dh.HZ.Ht,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JH(this.Dh);break;case 0:this.JH(this.Dp
);break;case 1:this.JH(this.Ca);break;default:throw new Error(Ayr+(F=this.Dh.HZ.
Ht,F[1].call(F[0])).toFixed());}break;case 25:this.JH(this.Ca);break;case 47:if(
As.PopupState===7)this.Apz();else{this.JH(this.Dh);this.JH(this.Ca);}break;case 43:{
this.JH(this.Dh);this.JH(this.Dp);}break;case 42:{this.JH(this.Dh);this.JH(this.
Ca);}break;case 41:break;default:A.ab5("%s%e",As8,As.Id);}},AiZ:function(){this.
Ge.Ch(A._GetAutoObject(A.Device.Device).An);this.AEl=this.AEl+1;if(A._GetAutoObject(
A.Device.Helper).Am3()){if(A._GetAutoObject(A.Device.Device).Bt.Lg()){A._GetAutoObject(
A.Device.Device).A3(24,false,UZ,0,null);A._GetAutoObject(A.Device.Device).A3(50,
true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),0,null);}else{var L7=A.
_GetAutoObject(A.Device.Device).An.LS(0,this.Ge.Id);A._GetAutoObject(A.Device.Device
).SO(L7);var B1=A._NewObject(A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(this.Ge.
Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(this.Ge.DateOfBirth);B1.Ch(A._GetAutoObject(
A.Device.Device).Bt);}}this.Apz();},Apz:function(){var B;var F,Ct;if(!!(F=this.Ca.
Q,F[1].call(F[0]))){(F=this.Ca.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LU)(
Ct=this.Dp.Q,Ct[2].call(Ct[0],(F=this.Ca.Q,F[1].call(F[0]))));}if(!this.LU)(Ct=this.
Dp.Q,Ct[2].call(Ct[0],A._GetAutoObject(A.Device.Helper).A$K(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dp.Q,F[1].call(
F[0])),this.Dp.AjL(),this.Dp.AjN())));var IX=null;switch((F=this.Dh.HZ.Ht,F[1].call(
F[0]))){case 3:IX=[B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyJ];break;case 2:
IX=[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyK];break;case 4:case 5:IX=[B=A.
_GetAutoObject(A.Device.Device),B.Anq,B.Aoz];break;default:;}if(!!IX){switch((F=
this.Dh.Km.VQ,F[1].call(F[0]))){case 1:IX[2].call(IX[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IX[2].call(IX[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dh.Q,F[2].call(F[0],IX[1].call(IX[0])));
}var XF=100-((this.Zg/this.ASc)*100);A._GetAutoObject(A.Device.Device).A3(24,true
,(((this.ASc.toFixed()+As9)+(XF|0).toFixed())+As9)+(F=this.Dh.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BAT]);this.AFv(this.Zg-1);A.aaS([this,this.BcM],null);},BAT:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.BcE=true;},ApG:function(G){var F;C.HY.ApG.call(this,G);var AoU=
0;switch((F=this.BZ.Q,F[1].call(F[0]))){case 0:case 2:AoU=A._GetAutoObject(A.Device.
Device).AdQ;break;case 1:AoU=730;break;default:A.ab5("%s%e",Alb,(F=this.BZ.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q4(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmG(AoU));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnV));switch(this.BZ.AC.Q){case 0:{this.Kr.Jb(A.aaR(A.acf.ANb));this.
Kr.IQ(A.aaR(A.acf.ANc));}break;case 1:{this.Kr.Jb(A.aaR(A.acf.BhI));this.Kr.IQ(A.
aaR(A.acf.BhJ));}break;case 2:{this.Kr.Jb(A.aaR(A.acf.BjM));this.Kr.IQ(A.aaR(A.acf.
BjN));}break;default:throw new Error(Alb);}},Ae2:function(E){if(this.LU===E)return;
this.LU=E;A.abo([this,this.Awf,this.Ae2],0);},At0:function(G){var F,Ct,S$;this.Ae2(((
F=this.Ca.Q,F[1].call(F[0]))===(Ct=this.Dp.Q,Ct[1].call(Ct[0])))&&!!(S$=this.Ca.
Q,S$[1].call(S$[0])));A.pe([this,this.GH],this);},Be_:function(G){A.pe([this,this.
At0],this);},ASC:function(){return this.Zg;},A8x:function(){return this.Aq1;},Awf:
function(){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.AvZ.
_Init.call(this.Ca={I:this},0);C.Q$._Init.call(this.Dp={I:this},0);C.AGC._Init.call(
this.Dh={I:this},0);C.AUI._Init.call(this.Kr={I:this},0);this.__proto__=C.AR0;var
B;this.Dr(C.ADd);this.Ca.H(Aoo);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.Ak3));this.
Ca.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asu));this.Ca.ArL(A.
aaR(A.acf.Akk));this.Dp.H(AX2);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uf));this.
Dp.Ar0(false);this.Dh.H(AX3);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.A6W));this.Dh.
Bx(0);this.Kr.H(AX4);this.Kr.Aj(true);this.Kr.T(A.aaR(A.acf.A72));this.Kr.Ga(1);
this.Kr.EU(500);this.Kr.IQ(A.aaR(A.acf.ANc));this.Kr.Jb(A.aaR(A.acf.ANb));this.Kr.
A9Q(A.aaR(A.acf.Aq1)+A.aaR(A.acf.Colon));this.J(this.Ca,0);this.J(this.Dp,0);this.
J(this.Dh,0);this.J(this.Kr,0);this.Ge=A._NewObject(A.Device.Animal,0);this.Ca.AR=[
this,this.AcR];this.Ca.LX([this,this.AcR]);this.Ca.L0(A.aaL(A.ach.Afc));this.Ca.
At([B=A._GetAutoObject(A.Device.Helper).W,B.Ary,B.PT]);this.Ca.OM([B=A._GetAutoObject(
A.Device.Device),B.Uh,B.U1]);this.Ca.PQ([B=A._GetAutoObject(A.Device.Device),B.Ui
,B.U2]);this.Ca.Uj([B=A._GetAutoObject(A.Device.Device),B.Ann,B.Aoy]);this.Ca.Ae2([
this,this.Awf,this.Ae2]);this.Dp.Gr([this,this.D_,this.GS]);this.Dp.LX([this,this.
AcR]);this.Dp.L0(A.aaL(A.ach.Afc));this.Dp.Ul([B=this.Gender.Animal,B.Wv,B.JT]);
this.Dp.OM([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.Dp.PQ([B=A._GetAutoObject(
A.Device.Device),B.Ui,B.U2]);this.Dp.Uj([B=A._GetAutoObject(A.Device.Device),B.Ann
,B.Aoy]);this.Dp.At([B=A._GetAutoObject(A.Device.Helper).W,B.Anr,B.Ne]);this.Dp.
Ant([B=this.AnimalType.Animal,B.PP,B.EB]);this.Dh.Gr([this,this.D_,this.GS]);this.
Dh.LX([B=this.Dh,B.FV]);this.Dh.L0(A.aaL(A.ach.Edit));this.Dh.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Arz,B.SG]);this.Dh.A9q(A._GetAutoObject(A.Device.Helper).W);
this.Kr.At([this,this.ASC,this.AFv]);this.Kr.Bl$([this,this.A8x,this.AS7]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HY;this.Ca._Done();this.Dp._Done(
);this.Dh._Done();this.Kr._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY.
_ReInit.call(this);this.Ca._ReInit();this.Dp._ReInit();this.Dh._ReInit();this.Kr.
_ReInit();this.Ca.T(A.aaR(A.acf.Ak3));this.Ca.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Asu));this.Ca.ArL(A.aaR(A.acf.Akk));this.Dp.T(A.aaR(A.acf.
Uf));this.Dh.T(A.aaR(A.acf.A6W));this.Kr.T(A.aaR(A.acf.A72));this.Kr.IQ(A.aaR(A.
acf.ANc));this.Kr.Jb(A.aaR(A.acf.ANb));this.Kr.A9Q(A.aaR(A.acf.Aq1)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.Ge)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUa={BW:null,RatingMode:null,Lm:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Cl=null;this.BP.Cg=null;this.BP.CE=[this,this.AaE];this.BP.CV(A.jV
);this.BP.Cs(null);this.BP.C1(A.aaL(A.ach.Yu));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AUa;var B;this.
H(Rn);this.BW.H(As6);this.BW.T(A.aaR(A.acf.A$C));this.J(this.BW,0);this.BW.At([B=
this.RatingMode,B.B_,B.B$]);this.BW.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.A$C));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
BfK],[B=A._GetAutoObject(A.Device.Device),B.ASG,B.A0e],0);A.pe([this,this.BfK],this
);},Du:function(){return 2;},Gk:function(aIndex){return this.RatingModeToString.
BS(this.C7(aIndex));},At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.
Device).Aw1(E);},BfK:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANv={WM:
function(G){C.Ams.WM.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqW()){
A._GetAutoObject(A.Device.Helper).W.Akz(false);A._GetAutoObject(A.Device.Helper).
W.Ch(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Ams._Init.call(
this,aArg);this.__proto__=C.ANv;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hh={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hh;},_className:"Application::BaseItem"
};C.AVG={BW:null,WeightRecordingMode:null,Lm:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Cl=null;this.BP.Cg=null;this.BP.CE=[this,this.AaE];this.BP.CV(A.jV
);this.BP.Cs(null);this.BP.C1(A.aaL(A.ach.Yu));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVG;var B;this.H(Rn);this.BW.H(As6);this.BW.T(A.aaR(A.acf.AsS));this.BW.EU(1);
this.J(this.BW,0);this.BW.At([B=this.WeightRecordingMode,B.B_,B.B$]);this.BW.CK(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BW.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit();this.WeightRecordingMode.
_ReInit();this.BW.T(A.aaR(A.acf.AsS));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Du:function(){return 2;},Gk:function(aIndex){return this.
WeightRecordingModeToString.BS(this.C7(aIndex));},At:function(E){C.Cm.At.call(this
,E);A._GetAutoObject(A.Device.Device).Axb(E);},Init:function(aArg){var B;A.zX([this
,this.BgQ],[B=A._GetAutoObject(A.Device.Device),B.A9g,B.Bbo],0);A.pe([this,this.
BgQ],this);},BgQ:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cb.Set(0,0);this.Cb.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightRecordingModeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa1={BooleanToAutoOnOff:null,Gk:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BS(aIndex);},_Init:function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa1;},_Done:function(
){this.__proto__=C.Gd;this.BooleanToAutoOnOff._Done();C.Gd._Done.call(this);},_ReInit:
function(){C.Gd._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gd._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxR={A6_:function(){var B;this.
Axu(1);this.Ju(0,3);this.VE(0,0,(B=this.M)[3]-B[1]);this.A4M(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4M(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VM(0);},_Init:
function(aArg){C.ABB._Init.call(this,aArg);this.__proto__=C.AxR;},_className:"Application::Triangle"
};C.ATN={Y:null,Init:function(aArg){this.Bx9(this);},Bx8:function(Qb){var Aa=A._NewObject(
C.ANC,0);Aa.H(BD);Aa.T(Qb);Aa.Aj(true);Aa.Ar(false);Aa.Bi(true);this.J(Aa,0);this.
Ats(this);},Ats:function(G){var B;var Aly=1;var A2E=0;var X=this.Y.Ah;var Cy=null;
var K5=null;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OV.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cy){var ALb=(B=Cy.V.B6.A6O(Cy.V.String,0,-1))[2]-B[0
];if(!!(C.Mo.isPrototypeOf(X)?X:null))ALb=ALb+20;if(A2E<ALb)A2E=ALb;Cy.H(A.abL(Cy.
M,120));Cy.H(A.abI(Cy.M,28));Cy.H(A.abM(Cy.M,this.M[0]));Cy.H(A.abO(Cy.M,((B=this.
M)[3]-B[1])-(Aly*28)));Aly=Aly+1;}else{K5=(A.acg.C5.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K5){var Dg=((B=this.M)[3]-B[1])-((Aly-1)*28);K5.DM([this.
M[0],K5.Es[1]]);K5.DM([K5.Es[0],Dg]);K5.DC([this.M[0]+120,K5.EC[1]]);K5.DC([K5.EC[
0],Dg]);}}X=X.Ah;}this.BBC(A2E,28);},BBC:function(aWidth,Bxg){var B;var X=this.Y.
Ah;var Cy=null;var K5=null;aWidth=aWidth+20;if(aWidth>(C.Asv[0]-10))aWidth=C.Asv[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OV.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cy){Cy.V.Text.A6(0x14);Cy.V.Text.Hm(10);Cy.H(A.abL(Cy.M,aWidth
));Cy.H(A.abI(Cy.M,Bxg));Cy.H(A.abM(Cy.M,this.M[2]-((B=Cy.M)[2]-B[0])));}else{K5=(
A.acg.C5.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K5){K5.DM([this.M[
2]-aWidth,K5.Es[1]]);K5.DC([this.M[2],K5.EC[1]]);}}X=X.Ah;}},Bx9:function(G){var
Aa=A._GetAutoObject(C.BR).AqL;while(!!Aa){if(!!(C.Axi.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axi.isPrototypeOf(Aa)?Aa:null);this.Bx7(EF.DK,EF.AR,EF.Bw,EF.AQ8);}else
if(!!(C.Axk.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axk.isPrototypeOf(Aa)?Aa:null);
this.Byc(EF.DK,EF.AR,EF.Bw,EF.Wu,EF.WO);}else if(!!(C.Zw.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.Zw.isPrototypeOf(Aa)?Aa:null);this.Bx6(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkF.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkF.isPrototypeOf(Aa)?Aa:null);this.
Bx8(EF.DK);}else if(!!(C.AF5.isPrototypeOf(Aa)?Aa:null))this.Byd();Aa=Aa.Mv;}A._GetAutoObject(
C.BR).Clear();A.pe([this,this.Ats],this);},Bx6:function(Qb,Ac1,Ah5){var Aa=A._NewObject(
C.Mo,0);Aa.H(BD);Aa.T(Qb);Aa.AR=Ac1;Aa.Aj(true);Aa.Ar(Ah5);Aa.Bi(true);this.J(Aa
,0);this.Ats(this);},Byd:function(){var K5=A._NewObject(A.acg.C5,0);K5.L(A.jb.Bm
);K5.Aj(true);K5.Nh(3);this.J(K5,0);this.Ats(this);},Bx7:function(Qb,Ac1,Ah5,A0O
){var Aa=A._NewObject(C.AmE,0);Aa.H(BD);Aa.T(Qb);Aa.AR=Ac1;Aa.Aj(true);Aa.Ar(Ah5
);Aa.Bi(true);Aa.At(A0O);this.J(Aa,0);this.Ats(this);},Byc:function(Qb,Ac1,Ah5,A2V
,Agn){var Aa=A._NewObject(C.ANB,0);Aa.H(BD);Aa.T(Qb);Aa.AR=Ac1;Aa.Aj(true);Aa.Ar(
Ah5);Aa.Bi(true);Aa.Bm$(A2V);Aa.AFJ(Agn);this.J(Aa,0);this.Ats(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.ATN;this.H(Rn);this.Y.H(Rn);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afh={_Init:
function(){A.acl.Afh._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_L={AqL:null,Ahj:null,Mh:function(Qb){var EF=A._NewObject(
C.AkF,0);EF.DK=Qb;this.J(EF);},Clear:function(){this.AqL=null;this.Ahj=null;},Fy:
function(){var K5=A._NewObject(C.AF5,0);this.J(K5);},J:function(Bb2){if(!this.AqL
){this.AqL=Bb2;this.Ahj=this.AqL;}else{this.Ahj.Mv=Bb2;this.Ahj=this.Ahj.Mv;}},Tv:
function(Qb,Ac1){var EF=A._NewObject(C.Zw,0);EF.DK=Qb;EF.AR=Ac1;this.J(EF);},BgZ:
function(Qb,Ac1,A0O){var EF=A._NewObject(C.Axi,0);EF.DK=Qb;EF.AR=Ac1;EF.AQ8=A0O;
this.J(EF);},AaS:function(Qb){var EF=A._NewObject(C.Zw,0);EF.DK=Qb;EF.Bw=false;this.
J(EF);},ABF:function(Qb,Ac1,A2V,Agn){var EF=A._NewObject(C.Axk,0);EF.DK=Qb;EF.AR=
Ac1;EF.Wu=A2V;EF.WO=Agn;this.J(EF);},_Init:function(aArg){this.__proto__=C.A_L;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BR={_Init:function(){C.A_L._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axj={Mv:null,_Init:function(aArg){this.__proto__=
C.Axj;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Mv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOz={Amq:null,ArD:function(E){if(this.Amq===
E)return;if(!!this.Ab)this.Ab.ZB(this);if(!!this.Amq)this.AqD(this.Amq,A._GetAutoObject(
C.Asz),null,null,null,null,false);this.Amq=E;if(!!this.Amq)this.AkJ(this.Amq,A._GetAutoObject(
C.Asz),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOz;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amq)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WD={_Init:function(){C.AOz._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N1={Init:function(aArg){var C0=A._NewObject(C.ATO,0);C0.H(this.M);this.AkJ(C0,A.
_GetAutoObject(C.AnT),null,A._GetAutoObject(C.AnT),A._GetAutoObject(C.AnT),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N1;this.H(Rn);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Asz={_Init:function(){C.AUK._Init.call(this,0);this.ACA=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATO={AL:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.ATO;this.H(AH9);this.Dk(0);this.AL.AZ(0x3F);this.AL.H(AH9);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.P;this.AL.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUJ={Sa:function(){var B;var Ao=(A.acl.Ae$.isPrototypeOf(B=A.acl.Aek.Sa.call(this
))?B:null);if(!Ao)throw new Error(As3);Ao.Cp.Cx=255;Ao.Cp.B2=0;return Ao;},R$:function(
){var B;var Ao=(A.acl.Axh.isPrototypeOf(B=A.acl.Aek.R$.call(this))?B:null);if(!Ao
)throw new Error(As3);Ao.E0.Cx=0;Ao.E0.B2=255;Ao.Dt=true;return Ao;},_Init:function(
aArg){A.acl.Aek._Init.call(this,aArg);this.__proto__=C.AUJ;},_className:"Application::ShadeOverlayTransition"
};C.AnT={_Init:function(){C.AUJ._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkS={AnV:0,A1Z:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Ir.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BCM=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).Ak8(BCM)+CQ)+A._GetAutoObject(A.acj.DU).Af0()
);else this.BT.R(A.aaR(A.acf.Akk));}},Kc:function(G){var B;var BgN=(this.A1Z===false
)&&(this.AM<=this.Gp);if(BgN)this.Bx(this.AnV);this.A4r(this.AM,4);if(BgN){this.
Bx(this.AM-this.Aj2);this.A1Z=true;}C.Ir.Kc.call(this,G);},J9:function(G){this.A4r(
this.AM,5);C.Ir.J9.call(this,G);},Bx:function(E){this.A4r(E,4);E=(((E+((this.Aj2
/2)|0))/this.Aj2)|0)*this.Aj2;if(!E)this.A1Z=false;C.Ir.Bx.call(this,E);},Ahr:function(
E){if(this.AnV===E)return;this.AnV=E;},A4r:function(Bw0,Gz){this.AS_(A._GetAutoObject(
A.acj.DU).Bdm(Bw0,Gz));},_Init:function(aArg){C.Ir._Init.call(this,aArg);this.__proto__=
C.AkS;this.H(KY);this.AnV=this.Gp;this.JY(this.H4,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BEa={None:0,Left:1,BEJ:2,Right:3};C.Amu={Xm:
null,FD:null,Ej:null,Background:null,Anf:null,Gc:null,KM:A.jV,AD5:null,Init:function(
aArg){var B;A.zV([this,this.Af8],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A3C],[B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs],0);A.pe([this,this.
LN],this);A.pe([this,this.A3C],this);this.Bb(this.Ej);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},Lm:function(){if(!this.BP)this.BP=A._NewObject(
C.N,0);return this.BP;},E5:function(G){C.OverlayMenu.E5.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xm);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AKM();},Agc:function(G){var Aa=(C.AB8.isPrototypeOf(G)?G:null);var Hr;if(!!Aa)Hr=
Aa.Hr;else Hr=this.Gc.FN();if(Hr>=A._GetAutoObject(A.Device.Device).An.B9())return;
A._GetAutoObject(A.Device.Helper).G7(Hr);A.pe([this,this.AaE],this);},AKM:function(
){},Af8:function(G){this.Am();},A3t:function(G){if(this.Gc.FN()<(A._GetAutoObject(
A.Device.Device).An.B9()-1))this.Gc.GT(this.Gc.FN()+1);},A3u:function(G){if(this.
Gc.FN()>0)this.Gc.GT(this.Gc.FN()-1);},DJ:function(G){var Gg=A._GetAutoObject(A.
Device.Device).An.B9();var MS=this.BP;if(!MS)return;MS.C1(A.aaL(A.ach.Aex));MS.CE=[
this,this.AaE];if(Gg<=0){MS.Cs(null);MS.C2(null);MS.Cg=null;MS.Cl=null;MS.Zz=false;
MS.ZA=false;}else if(Gg===1){MS.Cs(null);MS.C2(A.aaL(A.ach.Aey));MS.Cg=null;MS.Cl=[
this,this.Agc];MS.Zz=false;MS.ZA=false;}else{MS.Cs(A.aaL(A.ach.Aq4));MS.C2(A.aaL(
A.ach.Ara));MS.Cg=[this,this.A3t];MS.Cl=[this,this.A3u];MS.Zz=true;MS.ZA=true;}}
,LN:function(G){this.Bf_(this);this.Xm=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKM();},Bm3:function(E){if(this.AD5===E)return;this.AD5=E;A.pe([this,this.BAG
],this);},BAG:function(G){this.Bf_(this);},Bf_:function(G){var B;if(!!this.FD)this.
HN(this.FD);this.FD=(C.EA.isPrototypeOf(B=A._NewObject(this.AD5,0))?B:null);if(!
!this.FD){this.FD.H(AX5);this.J(this.FD,0);}},A3C:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DL(1,4
))this.Gc.Dj(A.aaR(A.acf.AR8));else this.Gc.Dj(this.KM);},Dj:function(E){if(this.
KM===E)return;this.KM=E;A.pe([this,this.A3C],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Anf={I:this},0);C.Gc._Init.call(
this.Gc={I:this},0);this.__proto__=C.Amu;this.H(Rn);this.Ej.H(BD);this.Ej.A9T(A.
jb.CS);this.Ej.A9U(A.jb.Text);this.Background.H(Ff);this.Background.L(A.jb.BoH);
this.Anf.H(AH_);this.Anf.L(A.jb.CS);this.Gc.H(AH_);this.Gc.N0(C.AB8);this.AD5=C.
APE;this.KM=A.aaR(A.acf.Av3);this.J(this.Ej,0);this.J(this.Background,0);this.J(
this.Anf,0);this.J(this.Gc,0);this.Ej.AR=[this,this.Agc];this.Ej.Ab0(A._NewObject(
C.Yp,0));this.Gc.Zn(A._GetAutoObject(A.Device.Device).An);this.Gc.Zr([this,this.
Agc]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ej._Done(
);this.Background._Done();this.Anf._Done();this.Gc._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ej._ReInit();this.
Background._ReInit();this.Anf._ReInit();this.Gc._ReInit();this.Dj(A.aaR(A.acf.Av3
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xm)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FD)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.AB8={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.De(this.V.AQ);},Init:function(aArg){},Cf:function(Ad){if(!this.AX)return;
this.Hr=Ad;if(!!this.AX){this.T(this.AX.CF(Ad,1).toFixed());this.DS.EB(this.AX.AmT(
Ad,14));this.DS.AE2(this.AX.I6(Ad,13));this.DS.Ae1(this.AX.H2(Ad,8));this.DS.Un(
this.AX.H2(Ad,11));this.DS.Ae5(this.AX.H2(Ad,12));this.DS.Ae7(this.AX.CF(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.AB8;this.
H(O4);this.AP.L(A.jb.Bc);this.DS.H(AX6);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.Yp={Q:null,Init:function(aArg){var
B;this.AA0(this);this.At([B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs]);},AEH:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Nj(FilterCriterion
);var Ai3=this.Akn();if(Ai3>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai3,false);Filter.CW(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeX(false);},Bwo:function(s){this.AEH(
s);},AA0:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);if(!!FilterCriterion
)Filter.Nj(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BGC:function(s){
this.AA0(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcT],E,0);if(!!E)A.pe([this,this.
AcT],this);},C3:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwJ(-1);return;}var Ay4=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DL(1,4))?B:null);if(!Ay4){this.AW.AwJ(0);this.AW.AeX(true);}else
this.AW.AwJ(Ay4.A5);},AcT:function(s){this.C3(s);},_Init:function(aArg){C.AjQ._Init.
call(this,aArg);this.__proto__=C.Yp;this.AW.AwJ(0);this.AW.Di=[this,this.Bwo];this.
Init(aArg);},_Mark:function(D){var B;C.AjQ._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqG={BirthType:null,EaseOfDelivery:null,Ca:null,Ef:null,AbF:null,G6:null,Cn:
null,AbD:null,AMV:false,Init:function(aArg){this.AMV=A._GetAutoObject(A.Device.Helper
).W.Ard();if(this.AMV)this.AeW(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeW(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Ca.
LX([this,this.AcR]);this.Ca.L0(A.aaL(A.ach.Afc));this.Ca.AR=[this,this.AcR];}this.
Ef.Ar0(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Ca.Q,0);A.pe([this,this.GH],this);},Agd:function(G
){if(((this.Ef.Asj===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARa(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rh(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ch(
A._GetAutoObject(A.Device.Device).An);if(this.KI>0){if(this.AMV){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LS(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.E4(Ad,A._GetAutoObject(A.Device.
Device).Bt);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Ch(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AX7,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KI);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ch(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A9).FA();},Ev:function(
G){A._GetAutoObject(A.Device.Helper).W.E4(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A9).FA();},Auf:function(
){this.N.CV(A.jV);this.N.C2(A.aaL(A.ach.Am0));this.N.Cl=[this,this.AyS];},AAv:function(
G){A._GetAutoObject(C.A9).Cd(32);},GH:function(G){var F;var Kd=(F=this.Ef.Q,F[1].
call(F[0]));var ABm=(F=this.Ca.Q,F[1].call(F[0]));var A4m=true;if(!!Kd&&(ABm===Kd
))A4m=false;A._GetAutoObject(A.Device.Helper).JZ(this.Ca,A4m);this.Ef.Bl3(!A4m);
},_Init:function(aArg){C.HY._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvZ._Init.
call(this.Ca={I:this},0);C.Q$._Init.call(this.Ef={I:this},0);C.Acl._Init.call(this.
AbF={I:this},0);C.BW._Init.call(this.G6={I:this},0);C.SP._Init.call(this.Cn={I:this
},0);C.BW._Init.call(this.AbD={I:this},0);this.__proto__=C.AqG;var B;this.Ca.H(AhZ
);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.Ak3));this.Ca.ArK(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Asu));this.Ca.ArL(A.aaR(A.acf.Akk));this.Ef.H(AhZ);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Uf));this.AbF.H(AX8);this.AbF.Aj(true);this.
AbF.T(A.aaR(A.acf.GN));this.G6.H(AhZ);this.G6.Aj(true);this.G6.T(A.aaR(A.acf.Aro
));this.Cn.H(AhZ);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.AFB(true);
this.AbD.H(AhZ);this.AbD.Aj(true);this.AbD.T(A.aaR(A.acf.AgG));this.J(this.Ca,-1
);this.J(this.Ef,-1);this.J(this.AbF,-1);this.J(this.G6,-1);this.J(this.Cn,-1);this.
J(this.AbD,-1);this.BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LY(A._GetAutoObject(A.Device.Helper).W);this.Ca.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Ary,B.PT]);this.Ef.Gr([this,this.D_,this.GS]);this.Ef.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Anr,B.Ne]);this.AbF.Gr([this,this.D_,this.GS]);this.AbF.At([
B=A._GetAutoObject(A.Device.Helper).W,B.Arz,B.SG]);this.G6.At([B=this.BirthType,
B.B_,B.B$]);this.G6.CK(this.BirthType);this.Cn.Gr([this,this.D_,this.GS]);this.Cn.
LX([B=this.Cn,B.FV]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab4([B=A._GetAutoObject(
A.Device.Helper).W,B.Av$,B.Q4]);this.AbD.At([B=this.EaseOfDelivery,B.B_,B.B$]);this.
AbD.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HY;this.BirthType._Done();this.EaseOfDelivery._Done();this.Ca._Done();this.Ef._Done(
);this.AbF._Done();this.G6._Done();this.Cn._Done();this.AbD._Done();C.HY._Done.call(
this);},_ReInit:function(){C.HY._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Ca._ReInit();this.Ef._ReInit();this.AbF._ReInit();
this.G6._ReInit();this.Cn._ReInit();this.AbD._ReInit();this.Ca.T(A.aaR(A.acf.Ak3
));this.Ca.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asu));this.
Ca.ArL(A.aaR(A.acf.Akk));this.Ef.T(A.aaR(A.acf.Uf));this.AbF.T(A.aaR(A.acf.GN));
this.G6.T(A.aaR(A.acf.Aro));this.Cn.T(A.aaR(A.acf.Aed));this.AbD.T(A.aaR(A.acf.AgG
));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G6)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbD
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acl={FM:null,AW:null,A8:0,I0:function(G){C.Ds.I0.call(this,G);if(!this.A8)this.
FV(this);else this.Hd(this);},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hw.Z(false
);this.H4.Z(false);if(this.A8===1){this.Bb(this.AW);if(this.Hk){this.AW.FO(A.jb.
CJ);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CS);this.
Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hk)this.AW.FO(A.jb.CJ);
else this.AW.FO(A.jb.CS);this.Bb(null);}},Bx:function(E){var F;var BO=this.AM;C.
Ds.Bx.call(this,E);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Ug,this.Ba1],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:this.FM.AkO((F=
this.N,F[1].call(F[0])));}},FV:function(G){this.Ew(1);},Hd:function(G){this.Ew(0
);},Ew:function(EN){var F;if(!this.A8)this.FM.Ajy((F=this.N,F[1].call(F[0])));this.
A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>1)this.A8=1;if(this.A8===1)this.AW.
SN(7);this.DJ(this);this.Am();},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.AQ6._Init.call(this.AW={I:this},0);this.__proto__=C.Acl;this.H(UW);this.EU(999999
);this.V.R(As_);this.V.L(A.jb.Bm);this.Hw.Z(false);this.H4.Z(false);this.AW.H(AX9
);this.AW.ATg(6);this.J(this.AW,0);this.AW.At([this,this.Ug,this.Ba1]);this.FM=A.
_NewObject(C.Aer,0);},_Done:function(){this.__proto__=C.Ds;this.AW._Done();C.Ds.
_Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Du:function(){return 4;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gk:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BS(aIndex);},DZ:function(A_){return A_;},H3:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuE={Y:null,QP:null,NW:null,Ee:null,PF:null,PC:null,PD:null,Ay:null,Gd:null,
ReasonOfLeaving:null,Ahy:null,M3:0,AmI:false,ACa:true,AOs:false,Ase:false,Init:function(
aArg){A.zX([this,this.A9n],[this,this.A8P,this.ATj],0);this.Aho(A._GetAutoObject(
A.Device.Helper).W.AhS(2));this.ReasonOfLeaving.At(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9n],this);},DE:function(G){
var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;
case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QH(X,Fi,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HH(X,true,null,null);},Al0:function(G
){A._GetAutoObject(C.A9).FA();},ApK:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.
Device.Device).Bt.HI().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M3);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Ch(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmI){A._GetAutoObject(A.Device.Helper).W.Ae3(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A6Q(A._GetAutoObject(A.Device.Helper).Dv(),this.Ase);}A._GetAutoObject(A.Device.
Helper).W.AFA(this.ReasonOfLeaving.C7((F=this.NW.Q,F[1].call(F[0]))));if(this.ACa
)A._GetAutoObject(A.Device.Helper).W.PT(0);if(this.Ase)A._GetAutoObject(A.Device.
Helper).W.AwL(true);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).An);this.A$i();},Fk:function(G){var B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[1]);},Aho:function(E){
if(this.M3===E)return;this.M3=E;},Ano:function(){return this.M3;},Bfa:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.A9).FA();A._GetAutoObject(A.Device.Helper
).Asp();}},A9n:function(G){switch(this.Ase){case false:this.Ee.T(A.aaR(A.acf.AVI
));break;case true:this.Ee.T(A.aaR(A.acf.BqL));break;default:;}},ATj:function(E){
if(this.Ase===E)return;this.Ase=E;},A8P:function(){return this.Ase;},A$i:function(
){A._GetAutoObject(A.Device.Device).A3(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Bfa]);},Bmr:function(E){if(this.AOs===E)return;
this.AOs=E;},BkM:function(){return this.AOs;},BlR:function(E){if(this.ACa===E)return;
this.ACa=E;},BkA:function(){return this.ACa;},Bl1:function(E){if(this.AmI===E)return;
this.AmI=E;},BkI:function(){return this.AmI;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afl._Init.call(this.QP={I:this
},0);C.Asy._Init.call(this.NW={I:this},0);C.AkS._Init.call(this.Ee={I:this},0);C.
Afl._Init.call(this.PF={I:this},0);C.Afl._Init.call(this.PC={I:this},0);C.Afl._Init.
call(this.PD={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gd._Init.call(this.
Gd={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahy._Init.call(this.Ahy={I:this},0);this.__proto__=C.AuE;var B;this.N.Z(true);this.
N.CV(A.aaR(A.acf.Unregister));this.Dr(C.IK);this.Y.H(Ff);this.Y.JS(1);this.QP.H(
Aac);this.QP.Aj(true);this.QP.T(A.aaR(A.acf.AmI));this.QP.Bi(true);this.QP.Zu(false
);this.QP.Ga(-1);this.QP.EU(1);this.NW.H(UY);this.NW.Aj(true);this.NW.T(A.aaR(A.
acf.ReasonOfLeaving));this.NW.Bi(true);this.NW.Zu(false);this.Ee.H(AhY);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVI));this.Ee.Bi(false);this.Ee.Ga(1000);this.Ee.
EU(999000);this.PF.H(UY);this.PF.Aj(true);this.PF.T(A.aaR(A.acf.A4Z));this.PF.Bi(
true);this.PF.Zu(false);this.PF.Bx(1);this.PF.Ga(-1);this.PF.EU(1);this.PC.H(Aac
);this.PC.Aj(true);this.PC.T(A.aaR(A.acf.A40));this.PC.Bi(true);this.PC.Zu(false
);this.PC.Bx(1);this.PC.Ga(-1);this.PC.EU(1);this.PD.H(UY);this.PD.Aj(true);this.
PD.T(A.aaR(A.acf.A5A));this.PD.Bi(true);this.PD.Zu(false);this.PD.Bx(1);this.PD.
Ga(-1);this.PD.EU(1);this.Ay.H(Ayi);this.Gd.At(0);this.J(this.Y,0);this.J(this.QP
,0);this.J(this.NW,0);this.J(this.Ee,0);this.J(this.PF,0);this.J(this.PC,0);this.
J(this.PD,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fk
];this.QP.At([B=this.Gd,B.B_,B.B$]);this.QP.CK(this.Gd);this.QP.AkA([this,this.BkI
,this.Bl1]);this.NW.Gr([this,this.D_,this.GS]);this.NW.LX([B=this.NW,B.FV]);this.
NW.L0(A.aaL(A.ach.Edit));this.NW.At([B=this.ReasonOfLeaving,B.B_,B.B$]);this.NW.
CK(this.ReasonOfLeaving);this.NW.Anv(this.Ahy);this.Ee.At([this,this.Ano,this.Aho
]);this.PF.At([B=this.Gd,B.B_,B.B$]);this.PF.CK(this.Gd);this.PF.AkA([this,this.
BkM,this.Bmr]);this.PC.At([B=this.Gd,B.B_,B.B$]);this.PC.CK(this.Gd);this.PC.AkA([
this,this.A8P,this.ATj]);this.PD.At([B=this.Gd,B.B_,B.B$]);this.PD.CK(this.Gd);this.
PD.AkA([this,this.BkA,this.BlR]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QP._Done();this.NW._Done();this.Ee._Done();this.PF._Done(
);this.PC._Done();this.PD._Done();this.Ay._Done();this.Gd._Done();this.ReasonOfLeaving.
_Done();this.Ahy._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QP._ReInit();this.NW._ReInit();this.Ee._ReInit(
);this.PF._ReInit();this.PC._ReInit();this.PD._ReInit();this.Ay._ReInit();this.Gd.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahy._ReInit();this.N.CV(A.aaR(A.acf.
Unregister));this.QP.T(A.aaR(A.acf.AmI));this.NW.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVI));this.PF.T(A.aaR(A.acf.A4Z));this.PC.T(A.aaR(A.acf.A40
));this.PD.T(A.aaR(A.acf.A5A));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahy)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUI={AjJ:null,Pv:null,Au5:AX_,Bl:function(aSize){C.Ir.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Hw.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H4.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.Ir.Ai.call(this,Ae);this.Pv.L(this.V.AQ);if(!!this.AjJ){if((
F=this.AjJ,F[1].call(F[0]))===-1)this.Pv.R(this.Au5+AH$);else this.Pv.R((this.Au5+
CQ)+(F=this.AjJ,F[1].call(F[0])).toFixed());}else this.Pv.R(this.Au5);},A3b:function(
G){this.Am();},Bl$:function(E){if(A.aaZ(this.AjJ,E))return;if(!!this.AjJ)A.z$([this
,this.A3b],this.AjJ,0);this.AjJ=E;if(!!E)A.zX([this,this.A3b],E,0);if(!!E)A.pe([
this,this.A3b],this);},A9Q:function(E){if(this.Au5===E)return;this.Au5=E;this.Am(
);},_Init:function(aArg){C.Ir._Init.call(this,aArg);C.CH._Init.call(this.Pv={I:this
},0);this.__proto__=C.AUI;this.H(AX$);this.V.H(AYa);this.V.A6(0x12);this.Pv.H(AYb
);this.Pv.A6(0x12);this.Pv.L(A.jb.Bm);this.J(this.Pv,0);this.Pv.S(A.aaL(A.fl.Af)
);this.Pv.A2(A.aaL(A.fl.Ak));this.Pv.Cv(null);},_Done:function(){this.__proto__=
C.Ir;this.Pv._Done();C.Ir._Done.call(this);},_ReInit:function(){C.Ir._ReInit.call(
this);this.Pv._ReInit();this.Pv.S(A.aaL(A.fl.Af));this.Pv.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Ir._Mark.call(this,D);if((B=this.AjJ)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMb={Y:null,JO:null,Sr:null,Ay:null,Aqu:2500,ANs:24,DE:function(G){var B;var
Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:
Fi=4;break;case 5:Fi=5;break;default:;}X=this.QH(X,Fi,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HH(X,true,null,null);},Al0:function(G){A._GetAutoObject(
C.A9).FA();},ApK:function(G){},Fk:function(G){var B;this.Ay.Mx((B=this.Y.Db(0x1)
)[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[1]);},BlV:function(
E){if(this.Aqu===E)return;this.Aqu=E;},BkC:function(){return this.Aqu;},BlW:function(
E){if(this.ANs===E)return;this.ANs=E;},BkD:function(){return this.ANs;},Bkr:function(
G){var F,Ct;this.JO.BT.L(this.JO.V.AQ);if(!!this.JO.Q)this.JO.BT.R((((String.fromCharCode(((
F=this.JO.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Ak$)+String.fromCharCode(((
Ct=this.JO.Q,Ct[1].call(Ct[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JO.
AG4);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ir._Init.call(this.JO={I:this},0);C.Ir._Init.call(this.Sr={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMb;this.N.Z(true);this.
Dr(C.IK);this.Y.H(Ff);this.Y.JS(1);this.JO.H(AhY);this.JO.Aj(true);this.JO.T(A.aaR(
A.acf.Aqu));this.JO.Bi(false);this.JO.Ga(0);this.JO.EU(5000);this.JO.IQ(A.aaR(A.
acf.Af4));this.JO.Jb(A.aaR(A.acf.Af4));this.JO.AS_(100);this.Sr.H(UY);this.Sr.Aj(
true);this.Sr.T(A.aaR(A.acf.A_U));this.Sr.Bi(true);this.Sr.Bx(24);this.Sr.Ga(10);
this.Sr.EU(33);this.Sr.IQ(AYc);this.Ay.H(Ayi);this.J(this.Y,0);this.J(this.JO,0);
this.J(this.Sr,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.Yu));this.Y.El=[this,this.
Fk];this.JO.At([this,this.BkC,this.BlV]);this.JO.A_o([this,this.Bkr]);this.Sr.At([
this,this.BkD,this.BlW]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JO._Done();this.Sr._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JO._ReInit();this.Sr._ReInit();this.
Ay._ReInit();this.JO.T(A.aaR(A.acf.Aqu));this.JO.IQ(A.aaR(A.acf.Af4));this.JO.Jb(
A.aaR(A.acf.Af4));this.Sr.T(A.aaR(A.acf.A_U));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Arq={EaseOfDelivery:null,BirthType:null,Ca:null,Dp:null,Dh:null,Cn:null,Ee:null
,G6:null,Lh:null,M3:0,LU:false,Init:function(aArg){A.zX([this,this.GH],this.Ca.Q
,0);A.zX([this,this.GH],this.Dp.Q,0);A.zX([this,this.AAA],this.C$.Q,0);A.zX([this
,this.BeI],this.Cn.Dl,0);A.zX([this,this.BeC],this.C9.Q,0);A.zX([this,this.At0],
this.Ca.Q,0);A.zX([this,this.At0],this.Dp.Q,0);A.pe([this,this.AAA],this);A.pe([
this,this.GH],this);A.pe([this,this.BeI],this);A.pe([this,this.BeC],this);A.pe([
this,this.At0],this);},Ev:function(G){A._GetAutoObject(A.Device.Helper).W.E6();A.
_GetAutoObject(C.A9).FA();},Agd:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EB((F=this.BZ.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhE
){var AlK=A._GetAutoObject(A.Device.Helper).AhE.AOQ();A._GetAutoObject(A.Device.
Helper).W.Ab1(AlK);A._GetAutoObject(A.Device.Helper).W.AnA(AlK);}var Alq=A._GetAutoObject(
A.Device.Helper).A1t(A._GetAutoObject(A.Device.Helper).W,(F=this.Dh.HZ.Ht,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alq){this.AiZ();A.pe([this,this.
BwM],this);}else A._GetAutoObject(A.Device.Helper).AKf(A._GetAutoObject(A.Device.
Helper).W,Alq,(F=this.Dh.HZ.Ht,F[1].call(F[0])),0,[this,this.ApF]);},Auf:function(
){this.N.CV(A.jV);this.N.C2(A.aaL(A.ach.ADK));this.N.Cl=[this,this.AyS];},AiZ:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).An);var L7=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SO(L7);var BdC=false;if(A._GetAutoObject(
A.Device.Helper).Am3()){if(A._GetAutoObject(A.Device.Device).Bt.Lg()){BdC=true;A.
_GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.
HI().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ch(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7e()&&(BdC===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M3);B1.Ch(A._GetAutoObject(A.Device.Device).Bt);}}var IX=null;switch((F=this.
Dh.HZ.Ht,F[1].call(F[0]))){case 3:IX=[B=A._GetAutoObject(A.Device.Device),B.Awc,
B.AyJ];break;case 2:IX=[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyK];break;case
4:case 5:IX=[B=A._GetAutoObject(A.Device.Device),B.Anq,B.Aoz];break;default:;}if(
!!IX)switch((F=this.Dh.Km.VQ,F[1].call(F[0]))){case 1:IX[2].call(IX[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IX[2].call(IX[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).A$K(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjL(),this.Dp.AjN());},Ap3:function(G){A.
_GetAutoObject(C.A9).FA();},BwM:function(s){this.Ap3(s);},AAv:function(G){A._GetAutoObject(
C.A9).Cd(49);},Aho:function(E){if(this.M3===E)return;this.M3=E;A.abo([this,this.
Ano,this.Aho],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).Am3())this.
C9.Z(true);else this.C9.Z(false);if(A._GetAutoObject(A.Device.Helper).A7e())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LU){this.Dp.Z(false);this.Ca.T(A.aaR(A.
acf.ACC));this.Ca.AE0(A.aaL(A.ach.Afc));}else{this.Dp.Z(true);this.Ca.T(A.aaR(A.
acf.Ak3));this.Ca.AE0(null);}},AAA:function(G){A._GetAutoObject(A.Device.Helper).
AVr(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LU);},BeI:function(G){A.pe([this,this.BgC],this);},BeC:function(G){A.pe([this
,this.BgC],this);},BgC:function(G){var F,Ct,S$;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahr(A._GetAutoObject(A.Device.Helper
).AhS(A._GetAutoObject(A.Device.Helper).Abo((F=this.BZ.Q,F[1].call(F[0]))),(Ct=this.
Cn.Dl,Ct[1].call(Ct[0])),2,(S$=this.BZ.Q,S$[1].call(S$[0]))));break;case 2:this.
Ee.Ahr(A._GetAutoObject(A.Device.Helper).AhS(this.KI,(F=this.Cn.Dl,F[1].call(F[0
])),2,(Ct=this.BZ.Q,Ct[1].call(Ct[0]))));break;default:;}},ApF:function(G){var F;
var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id
){case 22:case 21:switch((F=this.Dh.HZ.Ht,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JH(this.Dh);break;case 0:this.JH(this.Dp);break;case 1:this.JH(this.
Ca);break;default:throw new Error(Ayr+(F=this.Dh.HZ.Ht,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JH(this.Dh);this.JH(this.Dp);}break;case 25:case 42:{this.
JH(this.Dh);this.JH(this.Ca);}break;case 41:break;default:A.ab5("%s%e",As8,As.Id
);}},ApG:function(G){var F;C.HY.ApG.call(this,G);var AoU=0;switch((F=this.BZ.Q,F[
1].call(F[0]))){case 0:case 2:AoU=A._GetAutoObject(A.Device.Device).AdQ;break;case
1:AoU=730;break;default:A.ab5("%s%e",Alb,(F=this.BZ.Q,F[1].call(F[0])));}(F=this.
Cn.Dl,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmG(AoU)));(F=this.C9.Q,F[2].call(F[0],this.C9.AnV));this.Ee.Ahr(A._GetAutoObject(
A.Device.Helper).W.AhS(1));},Ae2:function(E){if(this.LU===E)return;this.LU=E;A.abo([
this,this.Awf,this.Ae2],0);},At0:function(G){var F,Ct,S$;this.Ae2(((F=this.Ca.Q,
F[1].call(F[0]))===(Ct=this.Dp.Q,Ct[1].call(Ct[0])))&&!!(S$=this.Ca.Q,S$[1].call(
S$[0])));A.pe([this,this.GH],this);},Ano:function(){return this.M3;},Awf:function(
){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AvZ._Init.call(this.Ca={I:this},0);C.Q$._Init.call(this.Dp={I:this}
,0);C.AGC._Init.call(this.Dh={I:this},0);C.SP._Init.call(this.Cn={I:this},0);C.AkS.
_Init.call(this.Ee={I:this},0);C.BW._Init.call(this.G6={I:this},0);C.BW._Init.call(
this.Lh={I:this},0);this.__proto__=C.Arq;var B;this.Dr(C.ADc);this.CG.H(AcP);this.
Ca.H(Aoo);this.Ca.Aj(true);this.Ca.T(A.aaR(A.acf.Ak3));this.Ca.ArK(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asu));this.Ca.ArL(A.aaR(A.acf.Akk));this.
Dp.H(Aoo);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uf));this.Dp.Ar0(false);this.Dh.
H(AYd);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.GN));this.Dh.Bx(0);this.Cn.H(AcP);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.AFB(true);this.Ee.H(AcP);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M3));this.Ee.Ga(1000);this.Ee.EU(999000);this.
G6.H(AcP);this.G6.Aj(true);this.G6.T(A.aaR(A.acf.Aro));this.Lh.H(AcP);this.Lh.Aj(
true);this.Lh.T(A.aaR(A.acf.AgG));this.J(this.Ca,-3);this.J(this.Dp,-3);this.J(this.
Dh,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G6,-1);this.J(this.Lh,-
1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LY(
A._GetAutoObject(A.Device.Helper).W);this.Ca.AR=[this,this.AcR];this.Ca.LX([this
,this.AcR]);this.Ca.L0(A.aaL(A.ach.Afc));this.Ca.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Ary,B.PT]);this.Ca.OM([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1
]);this.Ca.PQ([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.Ca.Uj([B=A._GetAutoObject(
A.Device.Device),B.Ann,B.Aoy]);this.Ca.Ae2([this,this.Awf,this.Ae2]);this.Dp.Gr([
this,this.D_,this.GS]);this.Dp.LX([this,this.AcR]);this.Dp.L0(A.aaL(A.ach.Afc));
this.Dp.Ul([B=this.Gender.Animal,B.Wv,B.JT]);this.Dp.OM([B=A._GetAutoObject(A.Device.
Device),B.Uh,B.U1]);this.Dp.PQ([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);
this.Dp.Uj([B=A._GetAutoObject(A.Device.Device),B.Ann,B.Aoy]);this.Dp.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Anr,B.Ne]);this.Dp.Ant([B=this.AnimalType.Animal,B.PP,B.EB]
);this.Dh.Gr([this,this.D_,this.GS]);this.Dh.LX([B=this.Dh,B.FV]);this.Dh.L0(A.aaL(
A.ach.Edit));this.Dh.At([B=A._GetAutoObject(A.Device.Helper).W,B.Arz,B.SG]);this.
Dh.A9q(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gr([this,this.D_,this.GS]);this.
Cn.LX([B=this.Cn,B.FV]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab4([B=A._GetAutoObject(
A.Device.Helper).W,B.Av$,B.Q4]);this.Ee.At([this,this.Ano,this.Aho]);this.G6.At([
B=this.BirthType,B.B_,B.B$]);this.G6.CK(this.BirthType);this.Lh.At([B=this.EaseOfDelivery
,B.B_,B.B$]);this.Lh.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType._Done();this.Ca._Done(
);this.Dp._Done();this.Dh._Done();this.Cn._Done();this.Ee._Done();this.G6._Done(
);this.Lh._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Ca._ReInit();this.
Dp._ReInit();this.Dh._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G6._ReInit(
);this.Lh._ReInit();this.Ca.T(A.aaR(A.acf.Ak3));this.Ca.ArK(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asu));this.Ca.ArL(A.aaR(A.acf.Akk));this.Dp.T(
A.aaR(A.acf.Uf));this.Dh.T(A.aaR(A.acf.GN));this.Cn.T(A.aaR(A.acf.Aed));this.Ee.
T(A.aaR(A.acf.M3));this.G6.T(A.aaR(A.acf.Aro));this.Lh.T(A.aaR(A.acf.AgG));},_Mark:
function(D){var B;C.HY._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHa={H7:null,AhJ:null,AgR:null,AhK:null,AgS:null,AnimalType:null,Background:
null,NY:null,Rj:null,V:null,TR:null,Yx:null,AbA:null,PO:null,DK:A.jV,AGE:true,CP:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An5();this.
AxS();},An5:function(){var F,Ct;var LC=0;var Ame=0;var AlD=0;var Ib=0;if((((!!this.
AhJ&&!!this.AhK)&&!!this.AgR)&&!!this.AgS)&&!!this.AnimalType){Ame=(F=this.AhJ,F[
1].call(F[0]));AlD=(F=this.AgR,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper
).L9((F=this.AhK,F[1].call(F[0])),(Ct=this.AgS,Ct[1].call(Ct[0])));Ib=(F=this.AnimalType
,F[1].call(F[0]));}var K7=A.jb.Text;var Aza=A.jb.CS;if(!!LC){var ALw=A._GetAutoObject(
A.acj.DU).Alx(LC,Ame,AlD);Aza=A._GetAutoObject(A.acj.DU).AzP(ALw,Ib);K7=A._GetAutoObject(
A.acj.DU).AzR(ALw,Ib);}this.Background.L(Aza);this.TR.L(K7);this.Rj.L(K7);this.NY.
L(K7);this.AbA.L(K7);if(K7===A.jb.Bm)this.Yx.L(K7);else this.Yx.L(A.jb.CJ);this.
V.L(K7);this.PO.L(K7);},AxS:function(){var F,Ct;var LC=0;var Ame=0;var AlD=0;if(((
!!this.AhJ&&!!this.AhK)&&!!this.AgR)&&!!this.AgS){Ame=(F=this.AhJ,F[1].call(F[0]
));AlD=(F=this.AgR,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper).L9((F=this.
AhK,F[1].call(F[0])),(Ct=this.AgS,Ct[1].call(Ct[0])));}if(!!LC){var ALw=A._GetAutoObject(
A.acj.DU).Alx(LC,Ame,AlD);this.Rj.R(A._GetAutoObject(A.Device.Converter).S7(ALw,
2,true));this.NY.Z(true);this.Rj.Z(true);this.PO.Z(false);}else{this.NY.Z(false);
this.Rj.Z(false);this.PO.Z(true);}this.TR.R(this.Bzl(AlD-Ame,LC));this.AbA.Z(this.
AGE);this.Yx.Z(this.AGE);this.NY.R(A._GetAutoObject(A.acj.DU).Aat());},Bzl:function(
A0_,Ah6){var B;if(Ah6<0){A.ab5("%s",AYe);return A.jV;}var Iv=(AYf+A._GetAutoObject(
A.acj.DU).Af0())+CQ;var FW=A._GetAutoObject(A.Device.Converter).Ak8(A0_);if(!A0_
)FW=A.abU(FW,AYg,0);else if(A0_>0)FW=A.abU(FW,AIa,0);Iv=this.BfS(Iv,AYh,FW);if(Ah6===
1)Iv=Iv+A.aaR(A.acf.Bjj);else{Iv=Iv+A.aaR(A.acf.Bjk);Iv=this.BfS(Iv,AYi,Ah6.toFixed(
));}return Iv;},BfS:function(aString,Bb7,BxM){if(aString===A.jV){A.ab5("%s",AYj);
return A.jV;}var A2T=aString.indexOf(Bb7,0);if(A2T>=0){aString=A.ab1(aString,A2T
,Bb7.length);aString=A.abU(aString,BxM,A2T);}return aString;},ATy:function(E){if(
A.aaZ(this.AhJ,E))return;if(!!this.AhJ)A.z$([this,this.C3],this.AhJ,0);this.AhJ=
E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},Bl8:function(
E){if(A.aaZ(this.AgR,E))return;if(!!this.AgR)A.z$([this,this.C3],this.AgR,0);this.
AgR=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},ATz:function(
E){if(A.aaZ(this.AhK,E))return;if(!!this.AhK)A.z$([this,this.C3],this.AhK,0);this.
AhK=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},Bl9:function(
E){if(A.aaZ(this.AgS,E))return;if(!!this.AgS)A.z$([this,this.C3],this.AgS,0);this.
AgS=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},C3:function(
G){this.Am();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_n:function(
E){if(this.AGE===E)return;this.AGE=E;this.Am();},EB:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C3],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.NY={I:this},0);A.acg.Text._Init.call(this.Rj={I:this},
0);C.CH._Init.call(this.V={I:this},0);C.CH._Init.call(this.TR={I:this},0);A.acg.
Ap._Init.call(this.Yx={I:this},0);A.acg.Ap._Init.call(this.AbA={I:this},0);C.CH.
_Init.call(this.PO={I:this},0);this.__proto__=C.AHa;this.H(AfB);this.Background.
AZ(0x3F);this.Background.H(AfB);this.NY.H(AYk);this.NY.R(A._GetAutoObject(A.acj.
DU).Aat());this.NY.A6(0x9);this.NY.L(A.jb.Text);this.Rj.H(AYl);this.Rj.A6(0x14);
this.Rj.R(A.aaR(A.acu.Aki));this.Rj.L(A.jb.Text);this.V.AZ(0x1D);this.V.H(AYm);this.
V.R(A.aaR(A.acf.Auu));this.V.A6(0x12);this.V.L(A.jb.Text);this.TR.H(Aab);this.Yx.
AZ(0x14);this.Yx.H(AIb);this.Yx.Cw(1);this.AbA.AZ(0x14);this.AbA.H(AIb);this.AbA.
Cw(0);this.PO.H(AYn);this.PO.R(A.aaR(A.acf.A4G));this.J(this.Background,0);this.
J(this.NY,0);this.J(this.Rj,0);this.J(this.V,0);this.J(this.TR,0);this.J(this.Yx
,0);this.J(this.AbA,0);this.J(this.PO,0);this.NY.S(A.aaL(A.fl.EK));this.NY.A2(A.
aaL(A.fl.Af));this.NY.Cv(A.aaL(A.fl.Il));this.Rj.S(A.aaL(A.fl.Aeq));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(A.aaL(A.fl.Bh));this.TR.S(A.aaL(A.
fl.Af));this.TR.A2(A.aaL(A.fl.Ak));this.TR.Cv(A.aaL(A.fl.Bh));this.Yx.Ax(A.aaL(A.
ach.ABM));this.AbA.Ax(A.aaL(A.ach.ABM));this.H7=A._NewObject(A.Device.Rating,0);
this.PO.S(A.aaL(A.fl.Af));this.PO.A2(A.aaL(A.fl.Ak));this.PO.Cv(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.NY._Done(
);this.Rj._Done();this.V._Done();this.TR._Done();this.Yx._Done();this.AbA._Done(
);this.PO._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.NY._ReInit();this.Rj._ReInit();this.V.
_ReInit();this.TR._ReInit();this.Yx._ReInit();this.AbA._ReInit();this.PO._ReInit(
);this.Rj.R(A.aaR(A.acu.Aki));this.V.R(A.aaR(A.acf.Auu));this.PO.R(A.aaR(A.acf.A4G
));this.NY.S(A.aaL(A.fl.EK));this.NY.A2(A.aaL(A.fl.Af));this.NY.Cv(A.aaL(A.fl.Il
));this.Rj.S(A.aaL(A.fl.Aeq));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Cv(A.aaL(A.fl.Bh));this.TR.S(A.aaL(A.fl.Af));this.TR.A2(A.aaL(A.fl.Ak));this.
TR.Cv(A.aaL(A.fl.Bh));this.PO.S(A.aaL(A.fl.Af));this.PO.A2(A.aaL(A.fl.Ak));this.
PO.Cv(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhJ)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgS)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVJ={Animal:null,Rating:null,Cq:null,AD:null,AY:
0,Hl:function(G){var B;if(!this.Animal||!this.Rating)return;var Gf=this.AD.G5;var
CA=(C.AHa.isPrototypeOf(B=this.AD.Ci)?B:null);if(!CA)return;CA.EB([B=this.Animal
,B.PP,B.EB]);CA.Bl8([B=A._GetAutoObject(A.Device.Device),B.AEF,B.AIT]);CA.Bl9([B=
this.Rating,B.A86,B.OnSetTimestamp]);switch(Gf%this.AY){case 1:{CA.ATy([B=this.Animal
,B.A8F,B.AFh]);CA.ATz([B=this.Animal,B.A87,B.AFL]);CA.T(A.aaR(A.acf.Auu));}break;
default:if(this.Animal.Ard()){CA.ATy([B=this.Animal,B.ASt,B.AwG]);CA.ATz([B=this.
Animal,B.ASK,B.Aw8]);CA.T(A.aaR(A.acf.ALU));}else{CA.ATy([B=this.Animal,B.ASt,B.
AwG]);CA.ATz([B=this.Animal,B.ASK,B.Aw8]);CA.T(A.aaR(A.acf.BgU));}}if(this.AY>1)
CA.A_n(true);else CA.A_n(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GO
]));},DE:function(G){if(this.AY>0)switch(this.Cq.CO){case 6:this.CE(this);break;
case 7:this.Cl(this);break;default:this.Cq.NH=true;}},LY:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jy(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jy(1);else{this.Jy(2);this.AD.GT(1);this.
AD.HH(this.AD.Gs,true,null,null);}if(this.AY>0)this.AD.AbC(0,this.AY-1);},AkB:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbC(0,this.AY-1);
},CE:function(G){if(this.AD.Gs>0)this.AD.GT(this.AD.Gs-1);else this.AD.GT(this.AY-
1);this.AD.HH(this.AD.Gs,true,null,null);},Cl:function(G){if(this.AD.Gs<(this.AY-
1))this.AD.GT(this.AD.Gs+1);else this.AD.GT(0);this.AD.HH(this.AD.Gs,true,null,null
);},Jy:function(E){if(this.AY===E)return;this.AY=E;this.AD.Jy(this.AY);A.abo([this
,this.Arv,this.Jy],0);},Arv:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVJ;this.H(AfB);this.Cq.Filter=147;this.
AD.AZ(0x3F);this.AD.H(AfB);this.AD.N0(C.AHa);this.AD.Ae6(160);this.AD.GT(0);this.
AD.Jy(2);this.J(this.AD,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.
AD.Hl=[this,this.Hl];},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cq._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bl:function(aSize){C.Co.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fv=((
Ae&0x20)===0x20);var GE=this.Bo.Bw;var FS=A.jb.CJ;var GX=A.jb.Text;if(this.Hk){FS=
A.jb.CS;GX=A.jb.Text;}if(!He){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else
if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GX);}this.LF=He;
this.KF=Fv;this.Qs=GE;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(KY);this.V.H(BD);this.Zu(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeP={KJ:null,GK:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KJ.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KJ.
L(this.V.AQ);},Init:function(aArg){},Ab0:function(E){if(this.GK===E)return;this.
GK=E;this.KJ.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CH._Init.call(
this.KJ={I:this},0);this.__proto__=C.AeP;this.H(KY);this.Background.H(KY);this.V.
H(AcL);this.V.R(Lv);this.KJ.H(IV);this.KJ.R(AYo);this.J(this.KJ,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(null);this.KJ.S(A.aaL(A.fl.Af));this.
KJ.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KJ._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KJ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KJ.S(A.aaL(
A.fl.Af));this.KJ.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvZ={ACe:null,Q:null,A1:null,AF:null,Ij:null,LU:null,Ap:null,EM:null,AN7:A.jV
,AN8:A.jV,Bl:function(aSize){C.AeP.Bl.call(this,aSize);if(!this.ACe)this.KJ.H([].
concat(0,this.KJ.M.slice(1,4)));else this.KJ.H([].concat(this.Ap.M[2],this.KJ.M.
slice(1,4)));},Ai:function(Ae){var F,Ct,S$;C.AeP.Ai.call(this,Ae);var BcA=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apf)this.Ab0(this.AN7);else
this.Ab0(this.AN8);}else{this.Ab0(A._GetAutoObject(A.Device.Converter).Rh((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ij&&!!this.A1)&&!!this.AF)&&!!this.LU)&&(((F=this.
Ij,F[1].call(F[0]))===1)||(!(Ct=this.Ij,Ct[1].call(Ct[0]))&&(S$=this.LU,S$[1].call(
S$[0])))))BcA=true;}}this.EM.Z(BcA);this.Ap.L(this.V.AQ);A.pe([this,this.Af_],this
);},C3:function(G){this.Am();},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)
A.pe([this,this.C3],this);},AE0:function(E){if(this.ACe===E)return;this.ACe=E;this.
Ap.Ax(E);this.Bjq();},OM:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1)A.z$([
this,this.AaD],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.AaD],E,0);if(!!E)A.pe([
this,this.AaD],this);},PQ:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaF],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaF],E,0);if(!!E)
A.pe([this,this.AaF],this);},AaF:function(G){this.Am();},AaD:function(G){this.Am(
);},Uj:function(E){if(A.aaZ(this.Ij,E))return;if(!!this.Ij)A.z$([this,this.AlY],
this.Ij,0);this.Ij=E;if(!!E)A.zX([this,this.AlY],E,0);if(!!E)A.pe([this,this.AlY
],this);},AlY:function(G){this.Am();},Af_:function(G){var F,Ct;if((!this.Ij||!this.
A1)||!this.AF)return;var A2A=this.KJ.Aff([(this.KJ.String.length-(F=this.AF,F[1].
call(F[0])))-(Ct=this.A1,Ct[1].call(Ct[0])),0]);var A3V=this.KJ.Aff([this.KJ.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABf=this.KJ.Db(0x0);this.EM.H([A2A[0]-
1,ABf[1],A3V[0]+1,ABf[3]]);},ArK:function(E){if(this.AN7===E)return;this.AN7=E;this.
Am();},ArL:function(E){if(this.AN8===E)return;this.AN8=E;this.Am();},Ae2:function(
E){if(A.aaZ(this.LU,E))return;if(!!this.LU)A.z$([this,this.A3i],this.LU,0);this.
LU=E;if(!!E)A.zX([this,this.A3i],E,0);if(!!E)A.pe([this,this.A3i],this);},A3i:function(
G){this.Am();},_Init:function(aArg){C.AeP._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.AvZ;
this.Ap.H(AhU);this.EM.H(AYp);this.EM.Nh(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KJ.Q5([this,this.Af_]);},_Done:function(){this.__proto__=
C.AeP;this.Ap._Done();this.EM._Done();C.AeP._Done.call(this);},_ReInit:function(
){C.AeP._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeP._Mark.call(this,D);if((B=this.ACe)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ij)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ih:0,AaC:4,BdN:true,BdM:false,BcH:true,BdF:false,Al3:function(
G){C.Q_.Al3.call(this,G);if(A._GetAutoObject(A.Device.Helper).BdE()){this.Ih=A._GetAutoObject(
A.Device.Helper).Ux.Id;var Aiy=A._GetAutoObject(A.Device.Helper).ARc(this.Ih);if(
Aiy)A._GetAutoObject(A.Device.Device).A3(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A3m]);else{this.AaC=A._GetAutoObject(A.Device.
Helper).ARd(this.Ih);var Bd_=false;if((this.AaC===3)||(this.AaC===2))Bd_=A._GetAutoObject(
A.Device.Helper).A7f(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(Bd_)A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rh(this.Ih),0,null
);else switch(this.AaC){case 2:{var BM=A._GetAutoObject(A.Device.Converter).AxQ(
this.Ih);A._GetAutoObject(A.Device.Device).A3(46,true,BM.toFixed(),0,[this,this.
A3m]);}break;case 3:case 1:case 0:case 4:this.A3$();break;default:throw new Error(
AIc+this.AaC.toFixed());}}}},Ev:function(G){A._GetAutoObject(C.A9).FA();},AIU:function(
s){this.Ev(s);},A3$:function(){if((this.AaC===3)||(this.AaC===2)){if((this.BcH&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Ih)){A._GetAutoObject(A.Device.Device).A3(69,true,A.jV,0,[this
,this.A3m]);return;}else this.BBT();}A._GetAutoObject(A.Device.Helper).W.PT(this.
Ih);this.BdF=true;this.BBV();this.Ev(this);},A3m:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A3$();break;case 107:switch(As.PopupState){case 7:{this.A3$();A._GetAutoObject(A.
Device.Helper).Boq(this.Ih);}break;case 8:this.Ev(this);break;default:;}break;case
69:if(As.PopupState===4)this.Ev(this);break;default:A.ab5("%s%e",AId,As.Id);}},BBT:
function(){A._GetAutoObject(A.Device.Helper).W.Ne(this.Ih);if(this.BdM&&(A._GetAutoObject(
A.Device.Converter).S0(this.Ih)===10)){var Bck=Math.trunc((this.Ih%1000000000000
)/10000000000);if(!Bck&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.EB(0);else if((Bck===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.EB(2);}},BBV:function(){if(this.
BdN){A._GetAutoObject(A.Device.Helper).W.SG(A._GetAutoObject(A.Device.Helper).A4Y(
A._GetAutoObject(A.Device.Device).Ak2,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).Ak2===1)A._GetAutoObject(A.Device.Helper).A$L();
}},_Init:function(aArg){C.Q_._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dr(C.IK);this.Number.R(A.aaR(A.acf.OR));this.Jg.H(AYq);this.
IT.H(W2);this.AkD(1);this.N.CE=[this,this.AIU];this.N.C1(A.aaL(A.ach.E2));},_ReInit:
function(){C.Q_._ReInit.call(this);this.Number.R(A.aaR(A.acf.OR));},_className:"Application::SetTransponderScreen"
};C.ADo={Gn:null,Ll:null,Ks:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EA.Ai.call(this,Ae);this.Ll.R(A._GetAutoObject(A.acj.DU
).Af0());this.Ks.R(A._GetAutoObject(A.acj.DU).Aat());},_Init:function(aArg){C.EA.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gn={I:this},0);A.acg.Text._Init.
call(this.Ll={I:this},0);A.acg.Text._Init.call(this.Ks={I:this},0);this.__proto__=
C.ADo;this.Background.L(A.jb.Text);this.Gn.H(AYr);this.Gn.A6(0x11);this.Gn.R(A.aaR(
A.acf.Date));this.Gn.L(A.jb.Bm);this.Ll.H(AYs);this.Ll.A6(0x11);this.Ll.L(A.jb.Bm
);this.Ks.H(AYt);this.Ks.L(A.jb.Bm);this.J(this.Gn,0);this.J(this.Ll,0);this.J(this.
Ks,0);this.Gn.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af));this.Ks.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EA;this.Gn._Done();this.Ll.
_Done();this.Ks._Done();C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.
call(this);this.Gn._ReInit();this.Ll._ReInit();this.Ks._ReInit();this.Gn.R(A.aaR(
A.acf.Date));this.Gn.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af));this.Ks.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.
Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ks)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHe={Mk:null,Hp:null,H$:null,AP:null,A$:null,FW:0,Ib:0,AiM:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hp.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hp.M[2]-1,0,this.Hp.M[2]+1,aSize[
1]]);this.Mk.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mk.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiM){this.H$.R(Ro);this.H$.L(A.jb.
Text);this.Mk.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S7(this.FW,2,true));this.H$.L(A._GetAutoObject(A.acj.DU).AzR(this.FW,this.Ib));
this.Mk.L(A._GetAutoObject(A.acj.DU).AzP(this.FW,this.Ib));}this.Hp.L(this.V.AQ);
},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var AlA=this.AX.Hu(
Ad,6);var Al8=this.AX.CF(Ad,8);if(this.Hr>0){var ByV=this.AX.Hu(this.Hr-1,6);var
BBx=this.AX.CF(this.Hr-1,8);var LC=A._GetAutoObject(A.Device.Helper).L9(ByV,AlA);
if(!!LC){this.AiM=false;this.FW=A._GetAutoObject(A.acj.DU).Alx(LC,BBx,Al8);}else{
this.AiM=true;this.FW=0;}}else{this.AiM=true;this.FW=0;}this.T(A._GetAutoObject(
A.acj.KK).ACR(AlA));this.Hp.R(A._GetAutoObject(A.Device.Converter).Ak8(Al8));this.
Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mk={I:this},0);A.acg.Text.
_Init.call(this.Hp={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AHe;this.V.H(O5);this.Mk.H(As$);this.Hp.H(AIe);this.Hp.A6(0x12);this.Hp.R(Rm);
this.Hp.L(A.jb.Text);this.H$.H(AIf);this.H$.R(Rm);this.H$.L(A.jb.Text);this.AP.H(
Aoq);this.AP.L(A.jb.Bc);this.A$.H(Aor);this.A$.L(A.jb.Bc);this.J(this.Mk,0);this.
J(this.Hp,0);this.J(this.H$,0);this.J(this.AP,0);this.J(this.A$,0);this.Hp.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mk._Done();this.Hp._Done();this.H$._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mk._ReInit(
);this.Hp._ReInit();this.H$._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hp.
S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,V0:null,AhQ:null,SY:null
,KM:A.jV,CP:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LC=
A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LC){var FW=A._GetAutoObject(
A.acj.DU).Alx(LC,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdL=A.aaR(A.acf.Bhe);AdL=A._GetAutoObject(
A.Device.Helper).Nl(AdL,P$,A._GetAutoObject(A.Device.Converter).S7(FW,2,true));AdL=
A._GetAutoObject(A.Device.Helper).Nl(AdL,Aya,A._GetAutoObject(A.acj.DU).Aat());this.
SY.R(AdL);this.AhQ.L(A._GetAutoObject(A.acj.DU).AzP(FW,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SY.L(A._GetAutoObject(A.acj.DU).AzR(FW,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SY.R(A.aaR(A.acf.AVH));this.AhQ.L(A.jb.
AQ0);this.SY.L(A.jb.Text);}},CC:function(G){var Fx=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fx.CW(HV);var Ac7=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac7.Initialize(8,2,0,true);Fx.CW(Ac7);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fx);this.Axw(this);},E5:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},Axw:function(G){this.Bg=A._NewObject(C.Gc,0);this.Bg.N0(C.AHe);this.Bg.H(Aym
);this.Bg.Zn(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dj(this.KM);this.J(this.
Bg,0);this.Bb(this.Bg);},Anm:function(G){A._GetAutoObject(C.A9).FA();},Dj:function(
E){if(this.KM===E)return;this.KM=E;if(!!this.Bg)this.Bg.Dj(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADo._Init.call(this.V0={I:this},0);A.acg.AL._Init.
call(this.AhQ={I:this},0);A.acg.Text._Init.call(this.SY={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cc);this.N.Z(true);this.Dr(C.IK);this.V0.H(
Qa);this.KM=A.aaR(A.acf.Akj);this.AhQ.AZ(0x1D);this.AhQ.H(IV);this.SY.AZ(0x1D);this.
SY.H(IV);this.SY.A6(0x12);this.SY.R(Rm);this.J(this.V0,0);this.J(this.AhQ,0);this.
J(this.SY,0);this.N.CE=[this,this.Anm];this.N.C1(A.aaL(A.ach.E2));this.SY.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V0._Done();this.AhQ._Done(
);this.SY._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V0._ReInit();this.AhQ._ReInit();this.SY._ReInit();this.Dj(A.aaR(A.acf.Akj
));this.SY.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SY
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mg={DP:null,Acw:null,ARD:11,EV:0,A4W:true,ABT:false,I0:function(G){if(A._GetAutoObject(
A.Device.Device).An.B9()>0)this.Fc(4);else A._GetAutoObject(A.Device.Device).A3(
30,true,A.jV,0,null);},CC:function(G){if(this.DP.Az1())this.DP.Ac6();else if((this.
EV===2)&&A._GetAutoObject(A.Device.Helper).W.AqW())this.Fc(5);else this.Fc(1);},
E5:function(G){this.AK5();},Ev:function(G){this.Fc(0);A._GetAutoObject(C.A9).FA(
);},BB$:function(){A._GetAutoObject(A.Device.Device).AhI();},AK5:function(){A._GetAutoObject(
A.Device.Device).AnX();},A9t:function(E){if(this.ABT===E)return;this.ABT=E;A.abo([
this,this.Bkv,this.A9t],0);},Fc:function(E){var B;if(this.EV===E)return;this.EV=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkN();A.zX([this,this.AKu]
,[B=A._GetAutoObject(A.Device.Helper),B.Arw,B.AkC],0);A.z$([this,this.AAs],[B=this.
DP,B.SB,B.Fc],0);this.BB$();}break;case 3:{A.z$([this,this.AKu],[B=A._GetAutoObject(
A.Device.Helper),B.Arw,B.AkC],0);this.AK5();this.Bz5();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Asp();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4W)this.BBW();else this.BBZ();}break;case 4:{A.z$([this,this.AKu],[B=A._GetAutoObject(
A.Device.Helper),B.Arw,B.AkC],0);this.AK5();A._GetAutoObject(A.Device.Helper).Asp(
);A.zX([this,this.BeT],[B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyO],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARD);}break;case 5:this.Bgc();break;case
6:{A.zX([this,this.AAs],[B=this.DP,B.SB,B.Fc],0);this.DP.Ac6();}break;case 0:{A.
z$([this,this.AKu],[B=A._GetAutoObject(A.Device.Helper),B.Arw,B.AkC],0);this.AK5(
);}break;default:throw new Error(Ays);}A.abo([this,this.SB,this.BwA],0);},BwA:function(
Aq){this.Fc(Aq);},AKu:function(G){if(!!A._GetAutoObject(A.Device.Helper).Ux){if(
this.EV===1)this.Fc(3);else A.ab5("%s%e",AYu,this.EV);}else A.ab5("%s",AIg);},BBW:
function(){A._GetAutoObject(A.Device.Device).A3(13,true,A._GetAutoObject(A.Device.
Helper).Ak4(A._GetAutoObject(A.Device.Helper).Ux.Id).toFixed(),0,[this,this.BAi]
);},BAi:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
As&&((As.PopupState===4)||(As.PopupState===3))){if(this.BcL(false))A._GetAutoObject(
C.A9).Cd(31);else{A._GetAutoObject(A.Device.Helper).AkN();this.Fc(1);}}else if(!
!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkN();this.Fc(1);}},
BcL:function(AiZ){if(A._GetAutoObject(A.Device.Device).An.Lg()){A._GetAutoObject(
A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gq();A._GetAutoObject(
A.Device.Helper).Aqg(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.PT(A._GetAutoObject(A.Device.Helper).Ux.Id);if(!!A._GetAutoObject(A.Device.
Helper).AhE){var AlK=A._GetAutoObject(A.Device.Helper).AhE.AOQ();A._GetAutoObject(
A.Device.Helper).W.Ab1(AlK);A._GetAutoObject(A.Device.Helper).W.AnA(AlK);}if(A._GetAutoObject(
A.Device.Helper).ARd(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Ne(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SG(A._GetAutoObject(A.Device.Helper).Bg5(A._GetAutoObject(A.Device.
Device).Agw,A._GetAutoObject(A.Device.Helper).W));if(AiZ){A._GetAutoObject(A.Device.
Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);var L7=A._GetAutoObject(A.Device.
Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SO(L7);if(A._GetAutoObject(A.Device.Helper).Am3()){if(A._GetAutoObject(A.
Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abo(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ch(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Agw)A._GetAutoObject(
A.Device.Helper).A$L();}return true;},Bz5:function(){if(!!A._GetAutoObject(A.Device.
Helper).Ux){var AJk=true;if(A._GetAutoObject(A.Device.Helper).Ux.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJk=A._GetAutoObject(A.Device.Helper).A7r(A._GetAutoObject(
A.Device.Helper).Ux.Id);if(!AJk&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.BcL(true);AJk=A._GetAutoObject(A.Device.Helper).A7r(A._GetAutoObject(A.
Device.Helper).Ux.Id);}}if(AJk)this.Fc(5);else this.Fc(2);}else{A.ab5("%s",AIg);
return;}},BeT:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARD){A.z$([this,this.BeT],[B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyO
],0);if(A._GetAutoObject(A.Device.Helper).W.AqW())this.Fc(5);else this.Fc(1);}},
Bgc:function(){if(this.ABT===true)this.Fc(6);else A._GetAutoObject(C.A9).Cd(24);
},BBZ:function(){A._GetAutoObject(A.Device.Device).A3(36,true,A.jV,0,[this,this.
BBc]);},BBc:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkN();this.Fc(1);}},AAs:function(G){if(!this.DP.EV)this.Fc(1);},A3a:function(G
){},BwK:function(s){this.A3a(s);},Bkv:function(){return this.ABT;},SB:function(){
return this.EV;},_Init:function(aArg){C.Q_._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acw={I:this},0);this.__proto__=C.Mg;this.N.Z(true);this.Dr(C.AqX);this.
Number.H(AYv);this.Number.R(A.aaR(A.acf.A$c));this.Jg.H(AYw);this.IT.H(AYx);this.
Acw.H(AYy);this.Acw.R(AYz);this.Acw.L(A.jb.Text);this.J(this.Acw,0);this.N.CE=[this
,this.Ev];this.N.Cg=[this,this.BwK];this.N.C1(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Acw.S(A.aaL(A.fl.H1));this.DP=A._GetAutoObject(C.DP);},_Done:function(
){this.__proto__=C.Q_;this.Acw._Done();C.Q_._Done.call(this);},_ReInit:function(
){C.Q_._ReInit.call(this);this.Acw._ReInit();this.Number.R(A.aaR(A.acf.A$c));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q_._Mark.call(this,D);if((B=
this.DP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acw)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4K={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Apa:-1,EV:0,Bx_:function(){var BfT=false;
var Oj=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.
Device.Device).Bt.HI().toFixed(),0,null);else if(Oj){BfT=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axs(B1,5);B1.OnSetAppearance(3);B1.Ch(A._GetAutoObject(
A.Device.Device).Bt);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axs(B1
,5);B1.OnSetAppearance(1);B1.Ch(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E4(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(BfT)A._GetAutoObject(A.Device.Helper).W.Un(false);if(Oj)A.
_GetAutoObject(A.Device.Helper).W.AnS(false);else A._GetAutoObject(A.Device.Helper
).W.AnS(true);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A3(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MU]);else A._GetAutoObject(A.Device.Device).A3(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MU]);},Bya:function(){A._GetAutoObject(
A.Device.Helper).W.AGA(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A3(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MU]);else A._GetAutoObject(
A.Device.Device).A3(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MU]);},Qm:function(ED){switch(ED){case 4:this.Bx_();break;case
128:A._GetAutoObject(C.A9).Cd(7);break;case 16:A._GetAutoObject(C.A9).Cd(36);break;
case 1:A._GetAutoObject(C.A9).Cd(10);break;case 2:A._GetAutoObject(C.A9).Cd(11);
break;case 8:this.Bya();break;case 64:A._GetAutoObject(C.A9).Cd(29);break;case 32:
A._GetAutoObject(C.A9).Cd(48);break;case 256:A._GetAutoObject(C.A9).Cd(21);break;
case 512:A._GetAutoObject(C.A9).Cd(30);break;case 1024:this.Bz2();break;case 262144:
this.BCp();break;case 2048:this.Ac6();break;case 4096:this.BcD(false);break;case
8192:this.Bx$();break;case 16384:this.Bz1();break;case 32768:this.Byz();break;case
524288:this.ByA();break;case 65536:this.ByY();break;case 131072:this.BBN();break;
case 0:break;default:throw new Error(AYA);}},BcN:function(ED,BxG){var EP=A._NewObject(
C.Wj,0);EP.AbZ(false);EP.Aj(true);EP.AR=BxG;EP.BlG(ED);switch(ED){case 1:{EP.T(A.
aaR(A.acf.AnY));EP.DB(A.aaL(A.ach.ALK));}break;case 2:{EP.T(A.aaR(A.acf.A_Y));EP.
DB(A.aaL(A.ach.ALL));}break;case 4:{EP.T(A.aaR(A.acf.Alarm));EP.DB(A.aaL(A.ach.ALM
));EP.AFx(true);}break;case 8:{EP.T(A.aaR(A.acf.Asb));EP.DB(A.aaL(A.ach.ALN));EP.
AFx(true);}break;case 16:{EP.T(A.aaR(A.acf.AMi));EP.DB(A.aaL(A.ach.ALO));}break;
case 32:{EP.T(A.aaR(A.acf.AnimalLoss));EP.DB(A.aaL(A.ach.ALP));}break;case 64:{EP.
T(A.aaR(A.acf.Unregister));EP.DB(A.aaL(A.ach.ALQ));}break;case 128:{EP.T(A.aaR(A.
acf.Edit));EP.DB(A.aaL(A.ach.ALR));}break;case 256:{EP.T(A.aaR(A.acf.Weighing));
EP.DB(A._GetAutoObject(A.acj.DU).BzB());}break;case 512:{EP.T(A.aaR(A.acf.AR2));
EP.DB(A.aaL(A.ach.ALC));}break;case 1024:{EP.T(A.aaR(A.acf.LinkTransponder));EP.
DB(A.aaL(A.ach.ALD));}break;case 262144:{EP.T(A.aaR(A.acf.UnlinkTransponder));EP.
DB(A.aaL(A.ach.ALJ));}break;case 2048:{EP.T(A.aaR(A.acf.Tu));EP.DB(A.aaL(A.ach.ALE
));}break;case 4096:{EP.T(A.aaR(A.acf.Calving));EP.DB(A.aaL(A.ach.ALF));}break;case
8192:{EP.T(A.aaR(A.acf.DryOff));EP.DB(A.aaL(A.ach.ALG));EP.AFx(true);}break;case
16384:{EP.T(A.aaR(A.acf.Bim));EP.DB(A.aaL(A.ach.ALH));}break;case 131072:{EP.T(A.
aaR(A.acf.BoC));EP.DB(A.aaL(A.ach.ALI));}break;default:A.ab5("%s",(AYB+ED.toFixed(
))+AYC);}return EP;},By$:function(){this.Apa=this.Apa+1;if(this.Apa>=this.AutoActions.
NQ())this.Fc(0);else this.Fc(2);},BBB:function(){this.Apa=-1;},Az1:function(){return(
this.Apa>-1)&&!this.BzV();},BzV:function(){return this.Apa>=this.AutoActions.NQ(
);},Fc:function(E){if(this.EV===E)return;this.EV=E;switch(E){case 1:this.By$();break;
case 2:{var Aak=this.AutoActions.OD(this.Apa);if(this.A4H(A._GetAutoObject(A.Device.
Helper).W,Aak))this.Qm(Aak);else A._GetAutoObject(A.Device.Device).A3(64,true,(this.
ActionToString.Lu(Aak)+As9)+this.AnimalTypeToString.Lu(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MU]);}break;case 0:this.BBB();break;default:throw new
Error(Ays);}A.abo([this,this.SB,this.Fc],0);},MU:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;if((As.Id===63)&&(As.PopupState===7))this.
BcD(true);if((As.Id===32)&&(As.PopupState===7))A._GetAutoObject(C.A9).Cd(45);if((((
As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8))&&this.Az1())this.
Fc(1);},BcF:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},Bz2:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A9).Cd(
45);else A._GetAutoObject(A.Device.Device).A3(32,true,A.jV,0,[this,this.MU]);},Ac6:
function(){this.Fc(1);},BBz:function(){var Oj=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oj&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lg())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device
).Bt.HI().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gq();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axs(B1,5);B1.Ch(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E4(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Un(false);if(Oj)A._GetAutoObject(
A.Device.Helper).W.AnS(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MU]);},BBA:function(){A._GetAutoObject(
A.Device.Helper).W.AGA(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MU]);},BcD:function(Bzd){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(Bzd===false))A._GetAutoObject(A.Device.
Device).A3(63,true,A.jV,0,[this,this.MU]);else A._GetAutoObject(C.A9).Cd(54);},Bx$:
function(){A._GetAutoObject(A.Device.Helper).W.ArT(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A3(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MU]);else A._GetAutoObject(A.Device.Device).A3(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MU]);},Bz1:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A9).Cd(81);else A._GetAutoObject(A.
Device.Device).A3(69,true,A.jV,0,[this,this.MU]);},Byz:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj4(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae3(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(65,true,A.jV,2000,[this,this.MU
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae4(false);A._GetAutoObject(A.Device.
Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).A3(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MU]);}}},ByY:function(){A._GetAutoObject(A.Device.Helper).W.Ae3(false);A._GetAutoObject(
A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj4(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae3(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(65,true,A.jV,2000,[this,this.MU
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A3(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MU]);else A._GetAutoObject(A.Device.Device).A3(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MU]);}},A4H:function(Em,ED
){var Qw=false;switch(ED){case 32768:Qw=Em.IsRegistrationNoticePending&&!!Em.NaisIdMother;
break;case 524288:Qw=Em.IsRegistrationNoticePending&&!Em.NaisIdMother;break;case
4096:case 8192:switch(Em.AnimalType){case 1:Qw=true;break;default:;}break;case 512:
switch(Em.AnimalType){case 0:Qw=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qw=true;break;default:A.ab5("%s",AYD+
ED.toFixed());}return Qw;},BBN:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A9).Cd(80);else A._GetAutoObject(A.Device.Device).A3(
69,true,A.jV,0,[this,this.MU]);},BCp:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A3(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MU]);else{A._GetAutoObject(A.
Device.Helper).W.PT(0);A._GetAutoObject(A.Device.Helper).W.SG(A._GetAutoObject(A.
Device.Helper).A4Y(A._GetAutoObject(A.Device.Device).An3,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).A3(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MU]);}},ByA:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae4(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MU]);}},SB:function(){return this.EV;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A4K;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALW={Aa0:null,Aqi:null,Fc:function(E){if(this.EV===E)return;C.Mg.Fc.call(this
,E);switch(E){case 1:this.Dr(C.AqX);break;case 5:case 6:this.Dr(C.IK);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ays);}},A3a:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mg._Init.call(this
,aArg);A.acg.Text._Init.call(this.Aa0={I:this},0);C.ALX._Init.call(this.Aqi={I:this
},0);this.__proto__=C.ALW;this.A9t(true);this.Aa0.H(AYE);this.Aa0.R(A.aaR(A.acf.
Tu));this.Aa0.L(A.jb.Text);this.Aqi.H(AYF);this.J(this.Aa0,0);this.J(this.Aqi,0);
this.N.Cs(A.aaL(A.ach.AeA));this.Aa0.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Mg;this.Aa0._Done();this.Aqi._Done();C.Mg._Done.call(this);},_ReInit:function(
){C.Mg._ReInit.call(this);this.Aa0._ReInit();this.Aqi._ReInit();this.Aa0.R(A.aaR(
A.acf.Tu));this.Aa0.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mg._Mark.call(
this,D);if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqi)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
Ia:null,J1:null,A3a:function(G){if(this.Ia.NV(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Mg._Init.call(this,aArg);A.acg.Text._Init.call(this.
J1={I:this},0);this.__proto__=C.ManualActionScanScreen;this.J1.H(AYG);this.J1.KR(
true);this.J1.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABH));this.
J1.L(A.jb.Text);this.J(this.J1,0);this.N.Cs(A.aaL(A.ach.AeA));this.J1.S(A.aaL(A.
fl.Af));this.Ia=A._GetAutoObject(C.Pk);},_Done:function(){this.__proto__=C.Mg;this.
J1._Done();C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.call(this);this.
J1._ReInit();this.J1.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABH
));this.J1.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mg._Mark.call(this,D);if((
B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.J1)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALX={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABr],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Aut],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABr],this);
A.pe([this,this.Aut],this);this.H(A.abK(this.M,AYH));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYI)));},Bcs:function(G){var B;var Aly=0;var Azt=0;
var BcJ;var X=this.Y.Ah;var Cy=null;BcJ=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NQ()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.Wj.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cy){Cy.H(A.abK(Cy.M,AYJ));Cy.H(A.abM(Cy.M
,(Azt*58)+BcJ));Cy.H(A.abO(Cy.M,Aly*58));if(Azt>=3){Aly=Aly+1;Azt=0;}else Azt=Azt+
1;}X=X.Ah;}this.Bb(null);},A1y:function(ED){var EP=A._GetAutoObject(C.DP).BcN(ED
,null);this.J(EP,0);this.Bcs(this);},Ao1:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdJ=X;X=X.Ah;if(((AdJ.U&0x400)===0x400))this.HN(
AdJ);}},ABr:function(G){this.Ao1();var O;var CB=A._GetAutoObject(C.AutoActions).
NQ();for(O=0;O<CB;O=O+1){var Aak=A._GetAutoObject(C.AutoActions).OD(O);this.A1y(
Aak);}A.pe([this,this.Bcs],this);A.pe([this,this.Aut],this);A.pe([this,this.BCz]
,this);},Aut:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)
){if(((X.U&0x400)===0x400)){var Aa=(C.Wj.isPrototypeOf(X)?X:null);Aa.AFx(false);
}X=X.Ah;}},BCz:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){var Aa=(C.Wj.isPrototypeOf(X)?X:null);var Byp=A._GetAutoObject(
C.AutoActions).NQ();if(!!Aa){var O;Aa.A9p(false);for(O=0;O<Byp;O=O+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OD(O)){Aa.A9p(true);Aa.BmN(AYK+(O+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.ALX;this.Y.JS(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Y._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DP={_Init:function(
){C.A4K._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APz={Lk:null,T5:null,Init:function(aArg){this.Lk.R(A._GetAutoObject(
A.acj.Temperature).AlJ());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.
Text._Init.call(this.Lk={I:this},0);C.CH._Init.call(this.T5={I:this},0);this.__proto__=
C.APz;this.Lk.H(AYL);this.Lk.A6(0x12);this.Lk.L(A.jb.Text);this.T5.H(Aos);this.T5.
R((A.aaR(A.acf.Ahj)+AIh)+A.aaR(A.acf.Kl));this.T5.A6(0x12);this.T5.L(A.jb.Text);
this.J(this.Lk,0);this.J(this.T5,0);this.Lk.S(A.aaL(A.fl.Af));this.T5.S(A.aaL(A.
fl.Ak));this.T5.A2(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dc;this.Lk._Done();this.T5._Done();C.Dc._Done.call(this);},_ReInit:function(){
C.Dc._ReInit.call(this);this.Lk._ReInit();this.T5._ReInit();this.T5.R((A.aaR(A.acf.
Ahj)+AIh)+A.aaR(A.acf.Kl));this.Lk.S(A.aaL(A.fl.Af));this.T5.S(A.aaL(A.fl.Ak));this.
T5.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.
Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T5)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ADm={Jx:null,D0:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.call(this.Jx={I:this}
,0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=C.ADm;this.Jx.H(AYM
);this.Jx.KR(true);this.Jx.A6(0x14);this.Jx.R(A.aaR(A.acf.AhP)+AIi);this.Jx.L(A.
jb.Text);this.D0.H(Aos);this.D0.KR(true);this.D0.R(A.aaR(A.acf.AF6));this.D0.L(A.
jb.Text);this.J(this.Jx,0);this.J(this.D0,0);this.Jx.S(A.aaL(A.fl.Ak));this.D0.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dc;this.Jx._Done();this.D0._Done(
);C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Jx._ReInit(
);this.D0._ReInit();this.Jx.R(A.aaR(A.acf.AhP)+AIi);this.D0.R(A.aaR(A.acf.AF6));
this.Jx.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Jx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D0
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TU={I_:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.
I_={I:this},0);this.__proto__=C.TU;this.I_.H(AIj);this.I_.R((((A.aaR(A.acf.RN)+AcQ
)+AIk)+A.aaR(A.acf.A$0))+Ob);this.I_.A6(0x12);this.I_.L(A.jb.Text);this.J(this.I_
,0);this.I_.S(A.aaL(A.fl.Af));this.I_.A2(A.aaL(A.fl.Ak));this.I_.Cv(A.aaL(A.fl.Bh
));},_Done:function(){this.__proto__=C.Dc;this.I_._Done();C.Dc._Done.call(this);
},_ReInit:function(){C.Dc._ReInit.call(this);this.I_._ReInit();this.I_.R((((A.aaR(
A.acf.RN)+AcQ)+AIk)+A.aaR(A.acf.A$0))+Ob);this.I_.S(A.aaL(A.fl.Af));this.I_.A2(A.
aaL(A.fl.Ak));this.I_.Cv(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(
this,D);if((B=this.I_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APB={Ll:null,Ks:null,CP:function(){this.A$e();},Init:function(aArg){this.A$e(
);},A$e:function(){this.Ll.R(A._GetAutoObject(A.acj.DU).Af0());this.Ks.R(A._GetAutoObject(
A.acj.DU).Aat());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.
call(this.Ll={I:this},0);C.CH._Init.call(this.Ks={I:this},0);this.__proto__=C.APB;
this.Ll.H(AYN);this.Ll.A6(0x12);this.Ll.L(A.jb.Text);this.Ks.H(Aos);this.Ks.L(A.
jb.Text);this.J(this.Ll,0);this.J(this.Ks,0);this.Ll.S(A.aaL(A.fl.Af));this.Ks.S(
A.aaL(A.fl.Af));this.Ks.A2(A.aaL(A.fl.Ak));this.Ks.Cv(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dc;this.Ll._Done();this.Ks._Done();C.Dc.
_Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Ll._ReInit();
this.Ks._ReInit();this.Ll.S(A.aaL(A.fl.Af));this.Ks.S(A.aaL(A.fl.Af));this.Ks.A2(
A.aaL(A.fl.Ak));this.Ks.Cv(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ks
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AM$={Mk:null,Hp:null,H$:null,AP:null,A$:null,FW:0,Aaz:0,Ib:0,AiM:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hp.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hp.M[2]-1,0,this.Hp.M[2]+1,aSize[
1]]);this.Mk.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mk.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiM){this.H$.R(Ro);this.H$.L(A.jb.
Text);this.Mk.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S7(this.FW,2,true));this.H$.L(A._GetAutoObject(A.acj.DU).AzR(this.FW,this.Ib));
this.Mk.L(A._GetAutoObject(A.acj.DU).AzP(this.FW,this.Ib));}if(this.Aaz>0)this.Hp.
R(A._GetAutoObject(A.Device.Converter).Ak8(this.Aaz));else this.Hp.R(Ro);this.Hp.
L(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Mf=
this.AX.CF(Ad,1);var Auo=this.AX.Hu(Ad,24);var AJ5=this.AX.CF(Ad,23);var Aup=this.
AX.Hu(Ad,19);this.Aaz=this.AX.CF(Ad,18);if((Auo>0)&&(Auo!==Aup)){var LC=A._GetAutoObject(
A.Device.Helper).L9(Auo,Aup);if(!!LC){this.AiM=false;this.FW=A._GetAutoObject(A.
acj.DU).Alx(LC,AJ5,this.Aaz);}else{this.AiM=true;this.FW=0;}}else{this.AiM=true;
this.FW=0;}this.T(Mf.toFixed());this.Ib=this.AX.AmT(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mk={I:this},0);A.acg.Text.
_Init.call(this.Hp={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AM$;this.V.H(O5);this.Mk.H(As$);this.Hp.H(AIe);this.Hp.A6(0x12);this.Hp.R(Rm);
this.Hp.L(A.jb.Text);this.H$.H(AIf);this.H$.R(Rm);this.H$.L(A.jb.Text);this.AP.H(
Aoq);this.AP.L(A.jb.Bc);this.A$.H(Aor);this.A$.L(A.jb.Bc);this.J(this.Mk,0);this.
J(this.Hp,0);this.J(this.H$,0);this.J(this.AP,0);this.J(this.A$,0);this.Hp.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mk._Done();this.Hp._Done();this.H$._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mk._ReInit(
);this.Hp._ReInit();this.H$._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hp.
S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M2={Mj:null,AP:null,A$:null,Gy:null,Xl:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Mj.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mj.M);this.Background.H([].concat(this.Mj.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gy.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A$.H([this.Gy.M[2]-1,0,this.
Gy.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gy.L(this.V.AQ
);if(!!this.Xl&&(this.Xl!==5)){this.Mj.L(A._GetAutoObject(A.acj.Assessment).Qo(this.
Xl));this.V.L(A._GetAutoObject(A.acj.Assessment).Xv(this.Xl));}else this.Mj.L(this.
Background.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var
Mf=this.AX.CF(Ad,1);var LP=this.AX.I6(Ad,13);var AlE=this.AX.I6(Ad,17);var AlN=this.
AX.H2(Ad,11);var Azb=this.AX.Hu(Ad,4);var AfN=A._GetAutoObject(A.Device.Helper).
L9(Azb,A._GetAutoObject(A.Device.Helper).Dv());this.Xl=A._GetAutoObject(A.Device.
Helper).AMf(LP,AlN,AlE);this.T(Mf.toFixed());if(AfN<100)this.Gy.R((AfN.toFixed()+
CQ)+A.aaR(A.acf.ALV));else this.Gy.R(A._GetAutoObject(A.acj.KK).ACS(Azb,A._GetAutoObject(
A.Device.Helper).Dv(),AIl));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Mj={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.Text._Init.call(this.Gy={I:this
},0);this.__proto__=C.M2;this.Mj.H(As$);this.Background.H(AYO);this.V.H(O5);this.
AP.H(Aoq);this.AP.L(A.jb.Bc);this.A$.H(Aor);this.A$.L(A.jb.Bc);this.Gy.H(Ayt);this.
J(this.Mj,-3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Gy,0);this.Gy.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mj._Done(
);this.AP._Done();this.A$._Done();this.Gy._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mj._ReInit();this.AP._ReInit();this.A$._ReInit(
);this.Gy._ReInit();this.Gy.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AM9={Ajx:null,N9:null,AP:null,A$:null,Js:null,AKl:0,A2z:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N9.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajx.H(this.N9.M);this.A$.H([this.N9.M[2]-1,0,this.N9.M[2]+1,aSize[1]]);
this.Js.H([this.N9.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Js.De(this.V.AQ);if(this.AKl>0){this.Ajx.L(A._GetAutoObject(A.acj.Assessment
).Qo(this.A2z));this.N9.L(A._GetAutoObject(A.acj.Assessment).Xv(this.A2z));}else{
this.Ajx.L(this.Background.AQ);this.N9.L(this.V.AQ);}},Cf:function(Ad){if(!this.
AX)return;this.Hr=Ad;if(!!this.AX){var Iz=this.AX.CF(Ad,0);var Mf=this.AX.CF(Ad,
1);this.AKl=this.AX.CF(Ad,5);this.A2z=this.AX.I6(Ad,17);this.T(Mf.toFixed());if(
this.AKl>0)this.N9.R(A._GetAutoObject(A.Device.Converter).AkZ(this.AKl));else this.
N9.R(Ro);var Xk=A._GetAutoObject(A.Device.Helper).ZN(6);A._GetAutoObject(A.Device.
Device).SO(Ad);var A0I=A._GetAutoObject(A.Device.Helper).BiM(A._GetAutoObject(A.
Device.Device).Bt,9,Iz,Xk,0);this.Js.A9H(A0I.Get(3));this.Js.A9J(A0I.Get(2));this.
Js.A9I(A0I.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.Ajx={I:this},0);A.acg.Text._Init.call(this.N9={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},
0);C.Js._Init.call(this.Js={I:this},0);this.__proto__=C.AM9;this.N9.A6(0x12);this.
N9.R(Rm);this.N9.L(A.jb.Text);this.AP.H(Aoq);this.AP.L(A.jb.Bc);this.A$.H(Aor);this.
A$.L(A.jb.Bc);this.Js.H(AYP);this.J(this.Ajx,0);this.J(this.N9,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Js,0);this.N9.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ajx._Done();this.N9._Done();this.AP.
_Done();this.A$._Done();this.Js._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ajx._ReInit();this.N9._ReInit();this.AP._ReInit();
this.A$._ReInit();this.Js._ReInit();this.N9.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Js={Afo:null,
ColoredCounterAttrSet:null,ACj:0,ACk:0,ACi:0,KS:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKe;var ALB;var AKK;var AlV=0;if(this.ACi>0){AKe=this.ACi.toFixed(
);AlV+=AKe.length;}else{AKe=AYQ;AlV++;}if(this.ACk>0){ALB=this.ACk.toFixed();AlV+=
ALB.length;}else{ALB=Ayu;AlV++;}if(this.ACj>0){AKK=this.ACj.toFixed();AlV+=AKK.length;
}else{AKK=AH$;AlV++;}if(AlV<=4)this.ColoredCounterAttrSet.Ahp(A.aaL(A.fl.Af));else
if(AlV<=5)this.ColoredCounterAttrSet.Ahp(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahp(A.aaL(A.fl.Bh));this.Afo.R(((((AYR+AKe)+AYS)+ALB)+AYT)+AKK);},A9I:function(E
){if(this.ACj===E)return;this.ACj=E;this.Am();},A9J:function(E){if(this.ACk===E)
return;this.ACk=E;this.Am();},A9H:function(E){if(this.ACi===E)return;this.ACi=E;
this.Am();},De:function(E){if(this.KS===E)return;this.KS=E;this.ColoredCounterAttrSet.
Ahm(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuM._Init.call(
this.Afo={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Js;this.H(AIm);this.Afo.AZ(0x3F);this.Afo.H(AIm);this.
Afo.R(Rm);this.ColoredCounterAttrSet.BlS(A.jb.E1);this.ColoredCounterAttrSet.A9y(
A.jb.H8);this.ColoredCounterAttrSet.A9x(A.jb.Gi);this.ColoredCounterAttrSet.Ahm(
A.jb.Text);this.KS=A.jb.Text;this.J(this.Afo,0);this.Afo.A9s(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahp(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9u(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afo._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afo._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahp(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AM8={AtA:null
,Ab$:null,Aca:null,Acb:null,Js:null,AP:null,A$:null,Ea:null,Ls:null,Acy:null,KT:
null,KU:null,AJq:0,AJp:0,AJo:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Ab$.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Acy.H(this.
Ab$.M);this.A$.H([this.Ab$.M[2]-1,0,this.Ab$.M[2]+1,aSize[1]]);this.Aca.H([this.
Ab$.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KT.H(this.Aca.M);this.Ea.H([this.
Aca.M[2]-1,0,this.Aca.M[2]+1,aSize[1]]);this.Acb.H([this.Aca.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KU.H(this.Acb.M);this.Ls.H([this.Acb.M[2]-1,0,this.Acb.
M[2]+1,aSize[1]]);this.Js.H([this.Acb.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Js.De(this.V.AQ);this.Ab$.L(A._GetAutoObject(A.acj.
Assessment).Qo(this.AJo));this.Aca.L(A._GetAutoObject(A.acj.Assessment).Qo(this.
AJp));this.Acb.L(A._GetAutoObject(A.acj.Assessment).Qo(this.AJq));this.Acy.L(A._GetAutoObject(
A.acj.Assessment).Xv(this.AJo));this.KT.L(A._GetAutoObject(A.acj.Assessment).Xv(
this.AJp));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xv(this.AJq));this.Acy.Z(
!this.AJo);this.KT.Z(!this.AJp);this.KU.Z(!this.AJq);this.Js.A9H(this.AtA.Get(3)
);this.Js.A9J(this.AtA.Get(2));this.Js.A9I(this.AtA.Get(1));},Cf:function(Ad){if(
!this.AX)return;this.Hr=Ad;if(!!this.AX){var Iz=this.AX.CF(Ad,0);var Mf=this.AX.
CF(Ad,1);this.T(Mf.toFixed());A._GetAutoObject(A.Device.Device).SO(Ad);this.AJo=
A._GetAutoObject(A.Device.Helper).A1$(A._GetAutoObject(A.Device.Device).Bt,Iz,0);
this.AJp=A._GetAutoObject(A.Device.Helper).A1$(A._GetAutoObject(A.Device.Device).
Bt,Iz,-1);this.AJq=A._GetAutoObject(A.Device.Helper).A1$(A._GetAutoObject(A.Device.
Device).Bt,Iz,-2);this.AtA=A._GetAutoObject(A.Device.Helper).A6y(A._GetAutoObject(
A.Device.Device).Bt,Iz,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Ab$={I:this},0);A.acg.AL._Init.call(this.Aca={I:
this},0);A.acg.AL._Init.call(this.Acb={I:this},0);C.Js._Init.call(this.Js={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.Ls={I:this
},0);A.acg.Text._Init.call(this.Acy={I:this},0);A.acg.Text._Init.call(this.KT={I:
this},0);A.acg.Text._Init.call(this.KU={I:this},0);this.__proto__=C.AM8;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Ls.L(A.jb.Bc);this.Acy.R(Aot
);this.KT.R(Aot);this.KU.R(Aot);this.J(this.Ab$,0);this.J(this.Aca,0);this.J(this.
Acb,0);this.J(this.Js,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.Ls,0);this.J(this.Acy,0);this.J(this.KT,0);this.J(this.KU,0);this.Acy.S(A.
aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.AtA=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ab$._Done();this.Aca._Done();this.Acb._Done();this.Js._Done();this.AP.
_Done();this.A$._Done();this.Ea._Done();this.Ls._Done();this.Acy._Done();this.KT.
_Done();this.KU._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Ab$._ReInit();this.Aca._ReInit();this.Acb._ReInit();this.Js._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Ls._ReInit();this.Acy.
_ReInit();this.KT._ReInit();this.KU._ReInit();this.Acy.S(A.aaL(A.fl.Af));this.KT.
S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab$).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmW={H6:null,Af2:false,Bl:function(aSize){var
B;this.H6.H([(aSize[0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H6.M[0]-10,40]);C.TE.Bl.call(this,aSize);},Ai:function(Ae){C.TE.Ai.call(
this,Ae);if(this.Af2)this.H6.Cw(1);else this.H6.Cw(0);},Kc:function(G){if(this.Af2
)C.TE.Kc.call(this,G);},J9:function(G){if(this.Af2)C.TE.J9.call(this,G);},Tp:function(
AI){C.TE.Tp.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.Af2=true;this.Zu(
true);}else{this.H(A.abI(this.M,40));this.Af2=false;this.Zu(false);}},_Init:function(
aArg){C.TE._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.AmW;this.V.A6(0x11);this.H6.H(AHI);this.H6.Cw(0);this.J(this.H6,0);this.V.Cv(A.
aaL(A.fl.Bh));this.H6.Ax(A.aaL(A.ach.AqM));},_Done:function(){this.__proto__=C.TE;
this.H6._Done();C.TE._Done.call(this);},_ReInit:function(){C.TE._ReInit.call(this
);this.H6._ReInit();this.V.Cv(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TE._Mark.
call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AF5={_Init:function(aArg){C.Axj._Init.call(this,aArg);this.__proto__=C.AF5;}
,_className:"Application::OptionsOverlaySeparator"};C.AkF={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axj._Init.call(this,aArg);this.__proto__=C.AkF;},_className:"Application::OptionsOverlayNode"
};C.Zw={AR:null,_Init:function(aArg){C.AkF._Init.call(this,aArg);this.__proto__=
C.Zw;},_Mark:function(D){var B;C.AkF._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANC={Ai:function(Ae){C.OV.Ai.call(this,Ae);var FS=A.jb.CJ;var GX=A.jb.Text;if(
this.Hk){FS=A.jb.Text;GX=A.jb.Bm;}this.Background.L(FS);this.V.L(GX);},_Init:function(
aArg){C.OV._Init.call(this,aArg);this.__proto__=C.ANC;},_className:"Application::DarkThemeTextItem"
};C.OV={Background:null,BU:null,V:null,Aqt:0,Hk:false,Init:function(aArg){},Bl:function(
aSize){C.Hh.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BU.H(A.abK(this.BU.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hh.Ai.call(this,Ae);this.BU.L(this.Aqt);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bi:function(E){if(this.Hk===E)return;this.Hk=E;this.Am();
},ArJ:function(E){if(this.Aqt===E)return;this.Aqt=E;this.Am();},_Init:function(aArg
){C.Hh._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);C.CH._Init.call(this.V={I:this},0);this.__proto__=
C.OV;this.H(BD);this.Background.H(AIn);this.BU.H(BD);this.BU.Nh(2);this.BU.L(A.jb.
Rg);this.V.H(AYU);this.Aqt=A.jb.Rg;this.J(this.Background,0);this.J(this.BU,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hh;this.Background._Done(
);this.BU._Done();this.V._Done();C.Hh._Done.call(this);},_ReInit:function(){C.Hh.
_ReInit.call(this);this.Background._ReInit();this.BU._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cv(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hh._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APE={Er:null,IO:null
,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.Er={
I:this},0);A.acg.Text._Init.call(this.IO={I:this},0);this.__proto__=C.APE;this.H(
O4);this.Background.H(O4);this.Er.H(AIo);this.Er.R(A.aaR(A.acf.GN));this.Er.A6(0x11
);this.Er.L(A.jb.Text);this.IO.AZ(0x3F);this.IO.H(AIp);this.IO.Hm(5);this.IO.A6(
0x14);this.IO.R(A.aaR(A.acf.AGN));this.IO.L(A.jb.Text);this.J(this.Er,0);this.J(
this.IO,0);this.Er.S(A.aaL(A.fl.Af));this.IO.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EA;this.Er._Done();this.IO._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Er._ReInit();this.IO._ReInit();this.Er.R(
A.aaR(A.acf.GN));this.IO.R(A.aaR(A.acf.AGN));this.Er.S(A.aaL(A.fl.Af));this.IO.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sn:null,So:null,AeB:null,Ag4:null,QK:null
,KS:0,LastTemperature:0,Aqz:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sn.Ax(A.aaL(A.ach.AvC));this.So.Ax(A.aaL(A.ach.AvC));}break;case 2:{this.Sn.Ax(A.
aaL(A.ach.AvF));this.So.Ax(A.aaL(A.ach.AvF));}break;default:{this.Sn.Ax(A.aaL(A.
ach.Aew));this.So.Ax(A.aaL(A.ach.Aew));}}this.Sn.L(A._GetAutoObject(A.acj.Assessment
).Qo(this.Aqz));var ApM;if(this.IsWatch)ApM=A.aaL(A.ach.AQE);else if(this.IsFever
){ApM=A.aaL(A.ach.AQD);switch(A._GetAutoObject(A.Device.Converter).Ajl(this.LastTemperature
,this.AnimalType)){case 3:this.QK.L(A.jb.Gi);break;case 2:this.QK.L(A.jb.H8);break;
case 1:this.QK.L(A.jb.E1);break;case 0:this.QK.L(A.jb.Afs);break;default:;}}else
if(this.IsAlarm){ApM=A.aaL(A.ach.AQC);if(!this.Aqz||(this.Aqz===5))this.QK.L(A.jb.
Gi);else this.QK.L(0xFF000000);}else ApM=null;this.AeB.Ax(ApM);this.Ag4.Ax(ApM);
this.QK.Ax(ApM);if(A._GetAutoObject(A.acj.Assessment).Qo(this.Aqz)===A.jb.E1)this.
So.L(this.KS);},EB:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AE2:function(E){if(this.Aqz===E)return;this.Aqz=E;this.Am();},De:function(
E){if(this.KS===E)return;this.KS=E;this.Am();},Ae5:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Un:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae1:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae7:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E6:function(){this.EB(0);this.AE2(0);this.Ae1(false);this.Un(false
);this.Ae5(false);this.Ae7(0);this.De(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sn={I:this},0);A.acg.Ap._Init.call(
this.So={I:this},0);A.acg.Ap._Init.call(this.AeB={I:this},0);A.acg.Ap._Init.call(
this.Ag4={I:this},0);A.acg.Ap._Init.call(this.QK={I:this},0);this.__proto__=C.DS;
this.H(Alf);this.Sn.AZ(0x3F);this.Sn.H(Alf);this.Sn.L(A.jb.CJ);this.Sn.A6(0x12);
this.Sn.Cw(0);this.So.AZ(0x3F);this.So.H(Alf);this.So.L(0xFF000000);this.So.A6(0x12
);this.So.Cw(1);this.AeB.AZ(0x3F);this.AeB.H(Alf);this.AeB.L(0xFF000000);this.AeB.
Cw(0);this.Ag4.AZ(0x3F);this.Ag4.H(Alf);this.Ag4.Cw(1);this.QK.AZ(0x3F);this.QK.
H(Alf);this.QK.L(A.jb.CS);this.QK.Cw(2);this.KS=A.jb.Text;this.J(this.Sn,0);this.
J(this.So,0);this.J(this.AeB,0);this.J(this.Ag4,0);this.J(this.QK,0);this.Sn.Ax(
A.aaL(A.ach.Aew));this.So.Ax(A.aaL(A.ach.Aew));},_Done:function(){this.__proto__=
A.Core.P;this.Sn._Done();this.So._Done();this.AeB._Done();this.Ag4._Done();this.
QK._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sn._ReInit();this.So._ReInit();this.AeB._ReInit();this.Ag4._ReInit();
this.QK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AM5={Cf:function(Ad){C.AjA.Cf.call(this,Ad);if(!!this.AX){var BzZ=this.AX.H2(
Ad,12);var Byh=this.AX.Sj(Ad,15);this.Abd.R(A._GetAutoObject(A.Device.Helper).L9(
Byh,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Sp.Z(BzZ);this.Am();
}},_Init:function(aArg){C.AjA._Init.call(this,aArg);this.__proto__=C.AM5;},_className:
"Application::CalfListAlarmItem"};C.ADi={D0:null,Ms:null,_Init:function(aArg){C.
TW._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Ms={I:this},0);this.__proto__=C.ADi;this.D0.H(Aos);this.D0.KR(true);this.
D0.R(A.aaR(A.acf.A5N));this.D0.L(A.jb.Text);this.Ms.H(AYV);this.Ms.I$(false);this.
Ms.L(A.jb.Text);this.Ms.A6(0x12);this.J(this.D0,-2);this.J(this.Ms,0);this.D0.S(
A.aaL(A.fl.Ak));this.Ms.Ax(A.aaL(A.ach.ADH));},_Done:function(){this.__proto__=C.
TW;this.D0._Done();this.Ms._Done();C.TW._Done.call(this);},_ReInit:function(){C.
TW._ReInit.call(this);this.D0._ReInit();this.Ms._ReInit();this.D0.R(A.aaR(A.acf.
A5N));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TW._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ms)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kk={Background:null,BU:
null,ACK:0,ABZ:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACK);this.BU.L(this.ABZ);},AwF:function(E){if(this.ACK===E)return;this.ACK=E;this.
Am();},AEU:function(E){if(this.ABZ===E)return;this.ABZ=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BU={I:this},0);this.__proto__=C.Kk;this.H(Alg);this.
Background.AZ(0x3C);this.Background.H(Alg);this.Background.Cw(1);this.BU.AZ(0x3C
);this.BU.H(Alg);this.ACK=A.jb.E1;this.ABZ=A.jb.Text;this.J(this.Background,0);this.
J(this.BU,0);this.Background.Ax(A.aaL(A.ach.Kk));this.BU.Ax(A.aaL(A.ach.Kk));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BU._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmE={Q:null,Pp:
null,A7c:false,Bl:function(aSize){C.Mo.Bl.call(this,aSize);this.V.H([].concat(this.
Pp.M[2]-this.V.Text.Jc,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mo.Ai.call(this
,Ae);this.Pp.L(this.V.AQ);},AwK:function(E){if(this.A7c===E)return;this.A7c=E;if(
E)this.Pp.R(AYW);else this.Pp.R(Ayv);},IC:function(G){var F;if(!!this.Q)this.AwK((
F=this.Q,F[1].call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.IC],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.IC],E,0);if(!!E)
A.pe([this,this.IC],this);},_Init:function(aArg){C.Mo._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pp={I:this},0);this.__proto__=C.AmE;this.Pp.AZ(0x34);this.Pp.
H(UU);this.Pp.R(Ayv);this.J(this.Pp,0);this.Pp.S(A.aaL(A.fl.AOx));},_Done:function(
){this.__proto__=C.Mo;this.Pp._Done();C.Mo._Done.call(this);},_ReInit:function(){
C.Mo._ReInit.call(this);this.Pp._ReInit();},_Mark:function(D){var B;C.Mo._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pp)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOW={DX:function(G){C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter
).AdX(4));},_Init:function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=C.AOW;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Du:function(){return 3;},C7:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BS(aIndex);},DZ:function(A_){return A_;},H3:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APF={Gn:null,Lk:null,YN:null,Init:function(aArg){this.Lk.R(A._GetAutoObject(
A.acj.Temperature).AlJ());},_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gn={I:this},0);A.acg.Text._Init.call(this.Lk={I:this},0);A.
acg.Text._Init.call(this.YN={I:this},0);this.__proto__=C.APF;this.Background.L(A.
jb.Text);this.Gn.H(AIq);this.Gn.A6(0x11);this.Gn.R(A.aaR(A.acf.Date));this.Gn.L(
A.jb.Bm);this.Lk.H(AYX);this.Lk.A6(0x12);this.Lk.L(A.jb.Bm);this.YN.H(AYY);this.
YN.A6(0x12);this.YN.R(A.aaR(A.acf.Bs));this.YN.L(A.jb.Bm);this.J(this.Gn,0);this.
J(this.Lk,0);this.J(this.YN,0);this.Gn.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af
));this.YN.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EA;this.Gn._Done();this.Lk._Done();this.YN._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Gn._ReInit();this.Lk._ReInit();this.YN._ReInit(
);this.Gn.R(A.aaR(A.acf.Date));this.YN.R(A.aaR(A.acf.Bs));this.Gn.S(A.aaL(A.fl.Af
));this.Lk.S(A.aaL(A.fl.Af));this.YN.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EA._Mark.call(this,D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Ty={Le:null,AjO:false,Init:function(
aArg){var B;A.zX([this,this.Bbs],[B=A._GetAutoObject(A.Device.Device),B.AEs,B.AIJ
],0);this.AGG(this);A.pe([this,this.AyP],this);},DE:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.On(this);break;case 7:this.MV(
this);break;default:D5.NH=true;}},CC:function(G){var B;if(!!this.Le)this.Le.CC(this
);C.AB.CC.call(this,G);},E5:function(G){var B;if(!!this.Le)this.Le.E5(this);C.AB.
E5.call(this,G);},Anm:function(G){A._GetAutoObject(C.A9).FA();},AGG:function(G){
var B;if(!!this.Le){this.Le.E5(this);this.HN(this.Le);}if(this.AjO)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Le=A._NewObject(C.AMm,0);break;case 1:this.Le=A.
_NewObject(C.AMn,0);break;case 3:this.Le=A._NewObject(C.AMl,0);break;case 2:this.
Le=A._NewObject(C.AMo,0);break;default:throw new Error(AIr);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Le=A._NewObject(C.AMp,0);break;case 1:this.Le=A.
_NewObject(C.AMy,0);break;case 3:this.Le=A._NewObject(C.AMs,0);break;case 2:this.
Le=A._NewObject(C.AMD,0);break;default:throw new Error(AIr);}this.HO(this);this.
J(this.Le,0);this.Le.H(Ff);this.Le.Zr([this,this.A0u]);this.Le.CC(this);this.Bb(
this.Le);},Bbs:function(s){this.AGG(s);},BnL:function(G){A._GetAutoObject(A.Device.
Device).AeV(0);},ATL:function(G){A._GetAutoObject(A.Device.Device).AeV(1);},ATK:
function(G){A._GetAutoObject(A.Device.Device).AeV(3);},ATM:function(G){A._GetAutoObject(
A.Device.Device).AeV(2);},HO:function(G){this.N.C1(A.aaL(A.ach.E2));this.N.Hx(A.
jV);this.N.CE=[this,this.Anm];this.N.AE8(A.aaL(A.fl.Ak));},AyP:function(s){this.
HO(s);},Bmw:function(E){if(this.AjO===E)return;this.AjO=E;A.pe([this,this.Bbs],this
);},A_K:function(G){this.Bmw(!this.AjO);},BnO:function(G){A._GetAutoObject(A.Device.
Device).A3(31,true,A.jV,0,null);},MV:function(G){},BGB:function(s){this.MV(s);},
On:function(G){},BGz:function(s){this.On(s);},BeQ:function(G){var FQ=A._GetAutoObject(
A.Device.Device).D9;FQ=FQ+1;if(FQ>=4)FQ=0;A._GetAutoObject(A.Device.Device).AeV(
FQ);},BAS:function(G){var FQ=A._GetAutoObject(A.Device.Device).D9;FQ=FQ-1;if(FQ<
0)FQ=3;A._GetAutoObject(A.Device.Device).AeV(FQ);},Af7:function(G){},A0u:function(
s){this.Af7(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Ty;this.Background.H(Cc);this.N.Z(true);this.N.OO(true);this.N.OP(true);this.Dr(
C.APu);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Le)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dn:null,CC:function(G){},AII:function(s){this.CC(s);
},E5:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyF:function(s){
this.E5(s);},Zr:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dn.BL=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=
C.D9;this.H(UX);this.AttrSet.A9y(A.jb.Gi);this.AttrSet.A9x(A.jb.H8);this.AttrSet.
Ahm(A.jb.Text);this.Dn.Filter=1;this.AttrSet.Ahp(A.aaL(A.fl.Ak));this.AttrSet.A9u(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dn._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dn._ReInit();this.AttrSet.Ahp(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMp={RR:
null,AaV:null,Tx:null,Tw:null,RW:null,QC:null,RX:null,RT:null,RU:null,RS:null,CP:
function(){var B;this.RR.Cf(this);this.AaV.Cf(this);this.Tx.Cf(this);this.Tw.Cf(
this);this.RW.Cf(this);this.QC.Cf(this);this.RX.Cf(this);this.RT.Cf(this);this.RU.
Cf(this);this.RS.Cf(this);},GH:function(G){C.RY.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RR.Z(true);this.AaV.Z(false);
this.RT.Z(false);this.RU.Z(false);this.RS.Z(false);this.RW.Z(true);this.QC.Z(true
);this.RX.Z(true);}break;case 1:{this.RR.Z(false);this.AaV.Z(true);this.RT.Z(true
);this.RU.Z(true);this.RS.Z(true);this.RW.Z(false);this.QC.Z(false);this.RX.Z(false
);}break;default:A.ab5("%s%e",Alb,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MP],this);},_Init:function(aArg){C.RY._Init.call(this,aArg);C.
RR._Init.call(this.RR={I:this},0);C.AMk._Init.call(this.AaV={I:this},0);C.Tx._Init.
call(this.Tx={I:this},0);C.Tw._Init.call(this.Tw={I:this},0);C.RW._Init.call(this.
RW={I:this},0);C.QC._Init.call(this.QC={I:this},0);C.RX._Init.call(this.RX={I:this
},0);C.RT._Init.call(this.RT={I:this},0);C.RU._Init.call(this.RU={I:this},0);C.RS.
_Init.call(this.RS={I:this},0);this.__proto__=C.AMp;this.RR.H(BD);this.RR.Aj(true
);this.RR.Bi(false);this.AaV.H(IV);this.AaV.Aj(true);this.AaV.Bi(false);this.Tx.
H(Qa);this.Tx.Aj(true);this.Tx.Bi(true);this.Tw.H(Aab);this.Tw.Aj(true);this.Tw.
Bi(false);this.RW.H(Ald);this.RW.Aj(true);this.RW.Bi(true);this.QC.H(Aop);this.QC.
Aj(true);this.QC.Bi(false);this.RX.H(As5);this.RX.Aj(true);this.RX.Bi(true);this.
RT.H(Xb);this.RT.Aj(true);this.RT.Bi(true);this.RU.H(AYZ);this.RU.Aj(true);this.
RU.Bi(false);this.RS.H(AY0);this.RS.Aj(true);this.RS.Bi(true);this.J(this.RR,0);
this.J(this.AaV,0);this.J(this.Tx,0);this.J(this.Tw,0);this.J(this.RW,0);this.J(
this.QC,0);this.J(this.RX,0);this.J(this.RT,0);this.J(this.RU,0);this.J(this.RS,
0);},_Done:function(){this.__proto__=C.RY;this.RR._Done();this.AaV._Done();this.
Tx._Done();this.Tw._Done();this.RW._Done();this.QC._Done();this.RX._Done();this.
RT._Done();this.RU._Done();this.RS._Done();C.RY._Done.call(this);},_ReInit:function(
){C.RY._ReInit.call(this);this.RR._ReInit();this.AaV._ReInit();this.Tx._ReInit();
this.Tw._ReInit();this.RW._ReInit();this.QC._ReInit();this.RX._ReInit();this.RT.
_ReInit();this.RU._ReInit();this.RS._ReInit();this.CP();},_Mark:function(D){var B;
C.RY._Mark.call(this,D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tx)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Tw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RU).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMD={AkR:function(L2){if(!L2)return;var Fx=A._NewObject(
A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CW(HV);var Ac7=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac7.Initialize(8,2,0,true);Fx.CW(Ac7);L2.Bk(Fx);
},ADU:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Ph=A.
_GetAutoObject(A.Device.Device).Bt.B9();if(Ph<2)return false;var BCj=A._GetAutoObject(
A.Device.Device).Bt.Hu(0,6);var BCk=A._GetAutoObject(A.Device.Device).Bt.Hu(Ph-1
,6);var A10=A._NewObject(A.Core.Bs,0);A10.Initialize(BCj);var A35=A._NewObject(A.
Core.Bs,0);A35.Initialize(BCk);if((A10.AbX()!==A35.AbX())||(A10.Year!==A35.Year)
)return true;else return false;},_Init:function(aArg){C.AaX._Init.call(this,aArg
);this.__proto__=C.AMD;this.ATe(C.AHe);this.ATf(C.ADo);this.AS6(C.QC);this.ArP(A.
aaR(A.acf.AVH));this.Dj(A.aaR(A.acf.Akj));},_ReInit:function(){C.AaX._ReInit.call(
this);this.ArP(A.aaR(A.acf.AVH));this.Dj(A.aaR(A.acf.Akj));},_className:"Application::AnimalWeights"
};C.AMy={AkR:function(L2){if(!L2)return;var Fx=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fx.CW(HV);var ABe=A._NewObject(A.Device.Int32FilterCriterion
,0);ABe.Initialize(7,2,0,true);Fx.CW(ABe);L2.Bk(Fx);},ADU:function(){return A._GetAutoObject(
A.Device.Device).Bt.B9()>0;},_Init:function(aArg){C.AaX._Init.call(this,aArg);this.
__proto__=C.AMy;this.ATe(C.AU4);this.ATf(C.APF);this.AS6(C.Tx);this.ArP(A.aaR(A.
acf.A7z));this.Dj(A.aaR(A.acf.Arr));},_ReInit:function(){C.AaX._ReInit.call(this
);this.ArP(A.aaR(A.acf.A7z));this.Dj(A.aaR(A.acf.Arr));},_className:"Application::AnimalTemperatures"
};C.AT$={VB:null,VC:null,XU:null,AgE:null,Ky:null,AP:null,A$:null,Ea:null,Ls:null
,AnR:null,KT:null,KU:null,ZK:null,ZL:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Ky.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VB.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VB.M[2]-1,0,this.VB.M[2]+1,aSize[1]]);this.VC.H([this.VB.M[2],0,this.VB.M[2]+22,
aSize[1]]);this.Ls.H([this.VC.M[2]-1,0,this.VC.M[2]+1,aSize[1]]);this.XU.H([this.
VC.M[2],0,this.VC.M[2]+22,aSize[1]]);this.AnR.H([this.XU.M[2]-1,0,this.XU.M[2]+1
,aSize[1]]);this.AgE.H([this.XU.M[2],0,aSize[0],aSize[1]]);this.KT.H(this.VB.M);
this.KU.H(this.VC.M);this.ZK.H(this.XU.M);this.ZL.H(this.AgE.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Ky.L(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;
this.Hr=Ad;if(!!this.AX){var AlA=this.AX.Hu(Ad,6);var A1g=this.AX.I6(Ad,3);var A1W=
this.AX.I6(Ad,2);var A1V=this.AX.I6(Ad,5);var A3T=this.AX.I6(Ad,4);this.T(A._GetAutoObject(
A.acj.KK).ACR(AlA));this.Ky.R(A._GetAutoObject(A.acj.KK).A6s(AlA));this.VB.L(A._GetAutoObject(
A.acj.Assessment).Qo(A1g));this.VC.L(A._GetAutoObject(A.acj.Assessment).Qo(A1W));
this.XU.L(A._GetAutoObject(A.acj.Assessment).Qo(A1V));this.AgE.L(A._GetAutoObject(
A.acj.Assessment).Qo(A3T));this.KT.L(A._GetAutoObject(A.acj.Assessment).Xv(A1g));
this.KU.L(A._GetAutoObject(A.acj.Assessment).Xv(A1W));this.ZK.L(A._GetAutoObject(
A.acj.Assessment).Xv(A1V));this.ZL.L(A._GetAutoObject(A.acj.Assessment).Xv(A3T));
this.KT.Z(A1g===5);this.KU.Z(A1W===5);this.ZK.Z(A1V===5);this.ZL.Z(A3T===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
VB={I:this},0);A.acg.AL._Init.call(this.VC={I:this},0);A.acg.AL._Init.call(this.
XU={I:this},0);A.acg.AL._Init.call(this.AgE={I:this},0);A.acg.Text._Init.call(this.
Ky={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.
Ls={I:this},0);A.acg.AL._Init.call(this.AnR={I:this},0);A.acg.Text._Init.call(this.
KT={I:this},0);A.acg.Text._Init.call(this.KU={I:this},0);A.acg.Text._Init.call(this.
ZK={I:this},0);A.acg.Text._Init.call(this.ZL={I:this},0);this.__proto__=C.AT$;this.
V.H(O5);this.VB.H(AY1);this.VC.H(AY2);this.XU.H(AY3);this.AgE.H(AY4);this.Ky.R(Rm
);this.Ky.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ls.L(A.jb.Bc);this.AnR.L(A.jb.Bc);this.KT.H(AY5);this.KT.R(Ro);this.KU.H(AY6
);this.KU.R(Ro);this.ZK.H(AY7);this.ZK.R(Ro);this.ZL.H(AY8);this.ZL.R(Ro);this.J(
this.VB,0);this.J(this.VC,0);this.J(this.XU,0);this.J(this.AgE,0);this.J(this.Ky
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Ls,0);this.
J(this.AnR,0);this.J(this.KT,0);this.J(this.KU,0);this.J(this.ZK,0);this.J(this.
ZL,0);this.Ky.S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af
));this.ZK.S(A.aaL(A.fl.Af));this.ZL.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.VB._Done();this.VC._Done();this.XU._Done();this.AgE._Done(
);this.Ky._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Ls._Done(
);this.AnR._Done();this.KT._Done();this.KU._Done();this.ZK._Done();this.ZL._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.VB._ReInit(
);this.VC._ReInit();this.XU._ReInit();this.AgE._ReInit();this.Ky._ReInit();this.
AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Ls._ReInit();this.AnR._ReInit(
);this.KT._ReInit();this.KU._ReInit();this.ZK._ReInit();this.ZL._ReInit();this.Ky.
S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.ZK.S(
A.aaL(A.fl.Af));this.ZL.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.VB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VC)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APD={Gn:null,YT:null,YP:null,YQ:null,YR:null,YS:
null,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gn={I:this},0);A.acg.Text._Init.call(this.YT={I:this},0);A.acg.Text._Init.call(this.
YP={I:this},0);A.acg.Text._Init.call(this.YQ={I:this},0);A.acg.Text._Init.call(this.
YR={I:this},0);A.acg.Text._Init.call(this.YS={I:this},0);this.__proto__=C.APD;this.
Background.L(A.jb.Text);this.Gn.H(AIq);this.Gn.A6(0x11);this.Gn.R(A.aaR(A.acf.Date
));this.Gn.L(A.jb.Bm);this.YT.H(AIj);this.YT.A6(0x12);this.YT.R(A.aaR(A.acf.Bs));
this.YT.L(A.jb.Bm);this.YP.H(AY9);this.YP.A6(0x12);this.YP.R(A.aaR(A.acf.AUb));this.
YP.L(A.jb.Bm);this.YQ.H(AY_);this.YQ.A6(0x12);this.YQ.R(A.aaR(A.acf.AUc));this.YQ.
L(A.jb.Bm);this.YR.H(AY$);this.YR.A6(0x12);this.YR.R(A.aaR(A.acf.AOt));this.YR.L(
A.jb.Bm);this.YS.H(AZa);this.YS.A6(0x12);this.YS.R(A.aaR(A.acf.ANt));this.YS.L(A.
jb.Bm);this.J(this.Gn,0);this.J(this.YT,0);this.J(this.YP,0);this.J(this.YQ,0);this.
J(this.YR,0);this.J(this.YS,0);this.Gn.S(A.aaL(A.fl.Af));this.YT.S(A.aaL(A.fl.Af
));this.YP.S(A.aaL(A.fl.Af));this.YQ.S(A.aaL(A.fl.Af));this.YR.S(A.aaL(A.fl.Af));
this.YS.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EA;this.Gn._Done();
this.YT._Done();this.YP._Done();this.YQ._Done();this.YR._Done();this.YS._Done();
C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.call(this);this.Gn._ReInit(
);this.YT._ReInit();this.YP._ReInit();this.YQ._ReInit();this.YR._ReInit();this.YS.
_ReInit();this.Gn.R(A.aaR(A.acf.Date));this.YT.R(A.aaR(A.acf.Bs));this.YP.R(A.aaR(
A.acf.AUb));this.YQ.R(A.aaR(A.acf.AUc));this.YR.R(A.aaR(A.acf.AOt));this.YS.R(A.
aaR(A.acf.ANt));this.Gn.S(A.aaL(A.fl.Af));this.YT.S(A.aaL(A.fl.Af));this.YP.S(A.
aaL(A.fl.Af));this.YQ.S(A.aaL(A.fl.Af));this.YR.S(A.aaL(A.fl.Af));this.YS.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Gn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMs={AkR:function(L2){if(!L2)return;
var Fx=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CW(HV);var
AAX=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAX.Initialize(3,5,0,true
);Fx.CW(AAX);L2.Bk(Fx);},ADU:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B9()>0;},_Init:function(
aArg){C.AaX._Init.call(this,aArg);this.__proto__=C.AMs;this.ATe(C.AT$);this.ATf(
C.APD);this.AS6(C.Tw);this.ArP(A.aaR(A.acf.Axo));this.Dj(A.aaR(A.acf.Anl));},_ReInit:
function(){C.AaX._ReInit.call(this);this.ArP(A.aaR(A.acf.Axo));this.Dj(A.aaR(A.acf.
Anl));},_className:"Application::AnimalRatings"};C.IG={B6:null,Y:null,V:null,Us:
5,T:function(E){C.I3.T.call(this,E);this.V.R(E);},De:function(E){C.I3.De.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},AuQ:function(G){var B;var Nz=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nz)return;
if(((B=Nz.Db(0x1))[2]-B[0])>((B=Nz.M)[2]-B[0]))this.S(A.aaL(A.fl.Il));},Kt:function(
E){if(this.Us===E)return;this.Us=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAR:function(G){A.pe([this,this.AuQ],this);},_Init:function(aArg){C.I3._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IG;this.Y.AZ(0x3F);this.Y.H(AIs);this.Y.A_p(5);this.
Y.JS(3);this.V.AZ(0x34);this.V.H(Aae);this.V.I$(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.El=[this,this.
AAR];this.V.S(A.aaL(A.fl.Ko));},_Done:function(){this.__proto__=C.I3;this.Y._Done(
);this.V._Done();C.I3._Done.call(this);},_ReInit:function(){C.I3._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Ko));},_Mark:function(D){
var B;C.I3._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RR={AfN:0,Ai:function(Ae){C.Fz.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RN));if(this.AfN>=0)this.Kv((this.AfN.toFixed(
)+CQ)+A.aaR(A.acf.Kl));else this.Kv(A.aaR(A.acf.Unknown));},Cf:function(G){C.Fz.
Cf.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfN=-1;
else this.AfN=A._GetAutoObject(A.Device.Helper).W.RN();this.Am();},_Init:function(
aArg){C.Fz._Init.call(this,aArg);this.__proto__=C.RR;},_className:"Application::AnimalInfoItemAge"
};C.RW={A4x:0,Ai:function(Ae){C.Fz.Ai.call(this,Ae);this.T(A.aaR(A.acf.Aft));if(
this.A4x>0)this.Kv((A._GetAutoObject(A.Device.Converter).Ak8(this.A4x)+CQ)+A._GetAutoObject(
A.acj.DU).Af0());else this.Kv(A.aaR(A.acf.Unknown));},Cf:function(G){C.Fz.Cf.call(
this,G);this.A4x=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fz._Init.call(this,aArg);this.__proto__=C.RW;},_className:
"Application::AnimalInfoItemWeight"};C.Tx={Y:null,Eh:null,Ex:null,Fe:null,PX:null
,Fd:null,PY:null,Ajg:0,Pg:0,CP:function(){this.Am();},Ai:function(Ae){C.JK.Ai.call(
this,Ae);this.T(A.aaR(A.acf.BhR));this.Fe.R(this.Ajg.toFixed());this.Fd.R(this.Pg.
toFixed());if(!!this.Ajg||!!this.Pg)this.PY.R(Aou+(this.Ajg+this.Pg).toFixed());
else this.PY.R(A.aaR(A.acf.ASb));},Cf:function(G){C.JK.Cf.call(this,G);var AkY;AkY=
A._GetAutoObject(A.Device.Helper).BiN(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajg=AkY.Get(2);this.Pg=AkY.Get(1);this.Am();},De:
function(E){C.JK.De.call(this,E);this.PX.L(E);this.PY.L(E);},AsN:function(G){if(
!!this.Ajg||!!this.Pg){this.Fe.Z(true);this.PX.Z(true);this.Fd.Z(true);}else{this.
Fe.Z(false);this.PX.Z(false);this.Fd.Z(false);}this.Eh.H(this.Fe.M);this.Eh.Z(this.
Fe.Fp());this.Ex.H(this.Fd.M);this.Ex.Z(this.Fd.Fp());},AuQ:function(G){var B;var
Nz=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nz)return;if(((B=Nz.Db(0x1))[2]-B[0])>((
B=Nz.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.PX.S(A.aaL(A.fl.Ak));this.Fe.S(
A.aaL(A.fl.Ak));this.PY.S(A.aaL(A.fl.Ak));}},AAR:function(G){A.pe([this,this.AuQ
],this);},_Init:function(aArg){C.JK._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.Eh={I:this},0);A.acg.AL._Init.call(this.Ex={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
PX={I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
PY={I:this},0);this.__proto__=C.Tx;this.Y.H(Ayw);this.Y.Bnt(0);this.Y.JS(3);this.
Eh.H(AZb);this.Eh.L(A.jb.H8);this.Ex.H(Ayt);this.Ex.L(A.jb.Gi);this.Fe.AZ(0x34);
this.Fe.H(Aae);this.Fe.Hm(2);this.Fe.I$(true);this.Fe.R(UZ);this.Fe.L(A.jb.Text);
this.Fe.Aj(true);this.PX.AZ(0x34);this.PX.H(Aae);this.PX.I$(true);this.PX.R(AIa);
this.PX.L(A.jb.Text);this.PX.Aj(true);this.Fd.AZ(0x34);this.Fd.H(Aae);this.Fd.Hm(
2);this.Fd.I$(true);this.Fd.R(UZ);this.Fd.L(A.jb.Bm);this.Fd.Aj(true);this.PY.AZ(
0x34);this.PY.H(Aae);this.PY.I$(true);this.PY.R(Rm);this.PY.L(A.jb.Text);this.PY.
Aj(true);this.J(this.Y,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.Fe,0);
this.J(this.PX,0);this.J(this.Fd,0);this.J(this.PY,0);this.Y.El=[this,this.AAR];
this.Fe.Q5([this,this.AsN]);this.Fe.S(A.aaL(A.fl.Af));this.PX.S(A.aaL(A.fl.Af));
this.Fd.Q5([this,this.AsN]);this.Fd.S(A.aaL(A.fl.Af));this.PY.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JK;this.Y._Done();this.Eh._Done();this.Ex._Done(
);this.Fe._Done();this.PX._Done();this.Fd._Done();this.PY._Done();C.JK._Done.call(
this);},_ReInit:function(){C.JK._ReInit.call(this);this.Y._ReInit();this.Eh._ReInit(
);this.Ex._ReInit();this.Fe._ReInit();this.PX._ReInit();this.Fd._ReInit();this.PY.
_ReInit();this.Fe.S(A.aaL(A.fl.Af));this.PX.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.
fl.Af));this.PY.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JK._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fe
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PY)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QC={FW:0,Ib:0
,A2o:false,Ai:function(Ae){C.Fz.Ai.call(this,Ae);this.T(AZc+A.aaR(A.acf.AG$));if(
this.A2o){this.Kv((A._GetAutoObject(A.Device.Converter).S7(this.FW,2,true)+CQ)+A.
_GetAutoObject(A.acj.DU).Aat());this.Background.L(A._GetAutoObject(A.acj.DU).AzP(
this.FW,this.Ib));this.De(A._GetAutoObject(A.acj.DU).AzR(this.FW,this.Ib));}else{
this.Kv(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CJ);this.De(A.jb.Text);}},Cf:
function(G){C.Fz.Cf.call(this,G);var LC=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LC){this.A2o=true;this.FW=A._GetAutoObject(A.acj.DU).Alx(LC,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2o=false;this.FW=0;}this.Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fz._Init.call(this,aArg);this.__proto__=C.QC;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tw={Y:null,FX:null,Eh:
null,Ex:null,MG:null,Fe:null,Fd:null,OX:null,Aav:0,Ajg:0,Pg:0,CP:function(){this.
Am();},Ai:function(Ae){C.JK.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axo));this.MG.R(
this.Aav.toFixed());this.Fe.R(this.Ajg.toFixed());this.Fd.R(this.Pg.toFixed());}
,Cf:function(G){C.JK.Cf.call(this,G);var AkY;AkY=A._GetAutoObject(A.Device.Helper
).A6y(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aav=AkY.Get(3);this.Ajg=AkY.Get(2);this.Pg=AkY.Get(1);this.Am();},AsN:
function(G){if((!!this.Aav||!!this.Ajg)||!!this.Pg){this.MG.Z(true);this.Fe.Z(true
);this.Fd.Z(true);this.OX.Z(false);}else{this.MG.Z(false);this.Fe.Z(false);this.
Fd.Z(false);this.OX.Z(true);}this.FX.H(this.MG.M);this.FX.Z(this.MG.Fp());this.Eh.
H(this.Fe.M);this.Eh.Z(this.Fe.Fp());this.Ex.H(this.Fd.M);this.Ex.Z(this.Fd.Fp()
);},AuQ:function(G){var B;var Nz=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nz)return;
if(((B=Nz.Db(0x1))[2]-B[0])>((B=Nz.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.Fe.
S(A.aaL(A.fl.Ak));this.MG.S(A.aaL(A.fl.Ak));}},AAR:function(G){A.pe([this,this.AuQ
],this);},_Init:function(aArg){C.JK._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FX={I:this},0);A.acg.AL._Init.call(this.Eh={
I:this},0);A.acg.AL._Init.call(this.Ex={I:this},0);A.acg.Text._Init.call(this.MG={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
Fd={I:this},0);A.acg.Text._Init.call(this.OX={I:this},0);this.__proto__=C.Tw;this.
Y.AZ(0x3F);this.Y.H(Ayw);this.Y.A_p(5);this.Y.JS(3);this.FX.H(AZd);this.FX.L(A.jb.
E1);this.Eh.H(AZe);this.Eh.L(A.jb.H8);this.Ex.H(AZf);this.Ex.L(A.jb.Gi);this.MG.
AZ(0x3C);this.MG.H(Aae);this.MG.Hm(2);this.MG.I$(true);this.MG.R(UZ);this.MG.L(A.
jb.Text);this.MG.Aj(true);this.Fe.AZ(0x3C);this.Fe.H(Aae);this.Fe.Hm(2);this.Fe.
I$(true);this.Fe.R(UZ);this.Fe.L(A.jb.Text);this.Fe.Aj(true);this.Fd.AZ(0x3C);this.
Fd.H(Aae);this.Fd.Hm(2);this.Fd.I$(true);this.Fd.R(UZ);this.Fd.L(A.jb.Bm);this.Fd.
Aj(true);this.OX.AZ(0x34);this.OX.H(Aae);this.OX.I$(true);this.OX.A6(0x11);this.
OX.R(A.aaR(A.acf.ASb));this.OX.L(A.jb.Text);this.OX.Aj(true);this.OX.Z(false);this.
J(this.Y,0);this.J(this.FX,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.MG
,0);this.J(this.Fe,0);this.J(this.Fd,0);this.J(this.OX,0);this.Y.El=[this,this.AAR
];this.MG.Q5([this,this.AsN]);this.MG.S(A.aaL(A.fl.Af));this.Fe.Q5([this,this.AsN
]);this.Fe.S(A.aaL(A.fl.Af));this.Fd.Q5([this,this.AsN]);this.Fd.S(A.aaL(A.fl.Af
));this.OX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JK;this.Y._Done(
);this.FX._Done();this.Eh._Done();this.Ex._Done();this.MG._Done();this.Fe._Done(
);this.Fd._Done();this.OX._Done();C.JK._Done.call(this);},_ReInit:function(){C.JK.
_ReInit.call(this);this.Y._ReInit();this.FX._ReInit();this.Eh._ReInit();this.Ex.
_ReInit();this.MG._ReInit();this.Fe._ReInit();this.Fd._ReInit();this.OX._ReInit(
);this.OX.R(A.aaR(A.acf.ASb));this.MG.S(A.aaL(A.fl.Af));this.Fe.S(A.aaL(A.fl.Af)
);this.Fd.S(A.aaL(A.fl.Af));this.OX.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JK._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMa={_Init:function(aArg){C.Aqd._Init.call(
this,aArg);this.__proto__=C.AMa;this.A4I=1;this.Ri.Cv(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqd._ReInit.call(this);this.Ri.Cv(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.AQ1={OI:null,IP:null,H5:null,IN:null,GP:null,Al0:function(G){A.pe([this,this.
BAn],this);},BAn:function(G){A._GetAutoObject(C.A9).Cd(3);},_Init:function(aArg){
C.Ce._Init.call(this,aArg);C.OI._Init.call(this.OI={I:this},0);C.BW._Init.call(this.
IP={I:this},0);C.SP._Init.call(this.H5={I:this},0);C.AGD._Init.call(this.IN={I:this
},0);C.Q$._Init.call(this.GP={I:this},0);this.__proto__=C.AQ1;var B;this.Ja(A.aaR(
A.acf.A$r));this.IP.H(Ah0);this.IP.Aj(true);this.IP.T(A.aaR(A.acf.Language));this.
IP.A98(100);this.H5.H(UY);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.
Bi(true);this.IN.H(Aac);this.IN.Aj(true);this.IN.T(A.aaR(A.acf.Bs));this.GP.H(AhZ
);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AF$));this.GP.Bi(true);
this.GP.Ar0(false);this.GP.A_e(true);this.JY(this.Y,-1);this.JY(this.Ay,-1);this.
J(this.IP,0);this.J(this.H5,0);this.J(this.IN,0);this.J(this.GP,0);this.IP.Zp(A.
aaL(A.fl.H1));this.IP.Zq(A.aaL(A.fl.H1));this.IP.At([B=this.OI,B.B_,B.B$]);this.
IP.CK(this.OI);this.H5.AeU([B=this.H5,B.FV]);this.H5.Gr([this,this.D_,this.GS]);
this.H5.Akx(A.aaL(A.ach.Edit));this.H5.Ab4([B=A._GetAutoObject(A.Device.Helper),
B.U0,B.U3]);this.IN.AeU([B=this.IN,B.FV]);this.IN.Gr([this,this.D_,this.GS]);this.
IN.Akx(A.aaL(A.ach.Edit));this.IN.Ab4([B=A._GetAutoObject(A.Device.Helper),B.U0,
B.U3]);this.GP.AeU([B=this.GP,B.FV]);this.GP.Gr([this,this.D_,this.GS]);this.GP.
Akx(A.aaL(A.ach.Edit));this.GP.At([B=A._GetAutoObject(A.Device.Device),B.ASE,B.A0d
]);},_Done:function(){this.__proto__=C.Ce;this.OI._Done();this.IP._Done();this.H5.
_Done();this.IN._Done();this.GP._Done();C.Ce._Done.call(this);},_ReInit:function(
){C.Ce._ReInit.call(this);this.OI._ReInit();this.IP._ReInit();this.H5._ReInit();
this.IN._ReInit();this.GP._ReInit();this.Ja(A.aaR(A.acf.A$r));this.IP.T(A.aaR(A.
acf.Language));this.H5.T(A.aaR(A.acf.Date));this.IN.T(A.aaR(A.acf.Bs));this.GP.T(
A.aaR(A.acf.AF$));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.OI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaX={Bg:null,FD:null,AmY:null,AmH:null,Sc:null,A6T:A.jV,KM:A.jV,ARt:null,ARu:
null,ADh:null,CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.A2Y],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId],0);this.A2Y(this);},E5:function(
G){var B;A.z$([this,this.A2Y],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId
],0);C.D9.E5.call(this,G);},Zr:function(E){C.D9.Zr.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.Zr(E);},ATe:function(E){if(this.ARt===E)return;this.
ARt=E;if(!!this.Bg)this.Bg.N0(E);},ATf:function(E){if(this.ARu===E)return;this.ARu=
E;this.Bo1(this);},AS6:function(E){if(this.ADh===E)return;this.ADh=E;A.pe([this,
this.Bo0],this);},ArP:function(E){if(this.A6T===E)return;this.A6T=E;this.Sc.R(E);
},Dj:function(E){if(this.KM===E)return;this.KM=E;if(!!this.Bg)this.Bg.Dj(E);},AkR:
function(L2){A.ab5("%s",AZg);},ADU:function(){A.ab5("%s",Alc);return false;},Axw:
function(G){if(!!this.Bg)this.HN(this.Bg);this.Bg=A._NewObject(C.Gc,0);this.Bg.H(
Ata);this.Bg.Zn(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dj(this.KM);this.Bg.
N0(this.ARt);this.Bg.Zr(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},Bo1:function(
G){var B;if(!!this.FD)this.HN(this.FD);this.FD=(C.EA.isPrototypeOf(B=A._NewObject(
this.ARu,0))?B:null);this.FD.H(IV);this.J(this.FD,0);},Bo0:function(G){var B;if(
!!this.AmY)this.HN(this.AmY);if(!!this.ADh&&this.ADU()){this.AmY=(C.I3.isPrototypeOf(
B=A._NewObject(this.ADh,0))?B:null);this.AmY.H(BD);this.AmY.Bi(false);this.J(this.
AmY,0);this.Sc.Z(false);}else this.Sc.Z(true);},A2Y:function(G){this.AkR(A._GetAutoObject(
A.Device.Device).Bt);this.Axw(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AL._Init.call(this.AmH={I:this},0);C.CH._Init.call(this.Sc={I:this},
0);this.__proto__=C.AaX;this.AmH.H(BD);this.AmH.L(A.jb.CJ);this.Sc.H(AHH);this.Sc.
A6(0x11);this.Sc.L(A.jb.Text);this.J(this.AmH,0);this.J(this.Sc,0);this.Sc.S(A.aaL(
A.fl.Ko));this.Sc.A2(A.aaL(A.fl.Il));},_Done:function(){this.__proto__=C.D9;this.
AmH._Done();this.Sc._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmH._ReInit();this.Sc._ReInit();this.Sc.S(A.aaL(A.fl.Ko));this.Sc.
A2(A.aaL(A.fl.Il));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FD)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmH)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kj={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bcp],[B=A._GetAutoObject(A.Device.Device),B.AEt,B.AIK],0);A.pe([this,this.Bcp],this
);},Du:function(){return 5;},Gk:function(aIndex){return this.AnimalListContentToString.
BS(this.C7(aIndex));},At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.
Device).Zl(E);},Bcp:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kj;this.Cb.Set(0,0);this.Cb.Set(1,14);this.Cb.Set(2,
1);this.Cb.Set(3,2);this.Cb.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AnimalListContentToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARy={IP:null
,Y5:null,Zc:null,Y$:null,Zd:null,Y6:null,Y9:null,Za:null,Zb:null,Y8:null,OI:null
,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.BW._Init.call(this.IP={I:this
},0);C.Nc._Init.call(this.Y5={I:this},0);C.Nc._Init.call(this.Zc={I:this},0);C.Nc.
_Init.call(this.Y$={I:this},0);C.Nc._Init.call(this.Zd={I:this},0);C.Nc._Init.call(
this.Y6={I:this},0);C.Nc._Init.call(this.Y9={I:this},0);C.Nc._Init.call(this.Za={
I:this},0);C.Nc._Init.call(this.Zb={I:this},0);C.Nc._Init.call(this.Y8={I:this},
0);C.OI._Init.call(this.OI={I:this},0);this.__proto__=C.ARy;var B;this.Ja(A.aaR(
A.acf.Settings));this.IP.H(Ah0);this.IP.Aj(true);this.IP.T(A.aaR(A.acf.Language)
);this.IP.A98(100);this.Y5.H(Aov);this.Y5.Aj(true);this.Y5.T(A.aaR(A.acf.ACt));this.
Y5.Nf(16);this.Zc.H(Ah1);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.AG6));this.Zc.Nf(
22);this.Y$.H(Atb);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.Temperature));this.Y$.
Nf(17);this.Zd.H(Ayx);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.ACq));this.Zd.Nf(42
);this.Y6.H(Aow);this.Y6.Aj(true);this.Y6.T(A.aaR(A.acf.Device));this.Y6.Nf(18);
this.Y9.H(Aow);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.Asl));this.Y9.Nf(19);this.
Za.H(AZh);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.LinkTransponder));this.Za.Nf(89
);this.Zb.H(AZi);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.UnlinkTransponder));this.
Zb.Nf(95);this.Y8.H(Ayo);this.Y8.Aj(true);this.Y8.T(A.aaR(A.acf.ACI));this.Y8.Nf(
76);this.J(this.IP,0);this.J(this.Y5,0);this.J(this.Zc,0);this.J(this.Y$,0);this.
J(this.Zd,0);this.J(this.Y6,0);this.J(this.Y9,0);this.J(this.Za,0);this.J(this.Zb
,0);this.J(this.Y8,0);this.IP.Zp(A.aaL(A.fl.H1));this.IP.Zq(A.aaL(A.fl.H1));this.
IP.At([B=this.OI,B.B_,B.B$]);this.IP.CK(this.OI);this.Y5.AR=[B=this.Y5,B.Ni];this.
Zc.AR=[B=this.Zc,B.Ni];this.Y$.AR=[B=this.Y$,B.Ni];this.Zd.AR=[B=this.Zd,B.Ni];this.
Y6.AR=[B=this.Y6,B.Ni];this.Y9.AR=[B=this.Y9,B.Ni];this.Za.AR=[B=this.Za,B.Ni];this.
Zb.AR=[B=this.Zb,B.Ni];this.Y8.AR=[B=this.Y8,B.Ni];},_Done:function(){this.__proto__=
C.Ce;this.IP._Done();this.Y5._Done();this.Zc._Done();this.Y$._Done();this.Zd._Done(
);this.Y6._Done();this.Y9._Done();this.Za._Done();this.Zb._Done();this.Y8._Done(
);this.OI._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this
);this.IP._ReInit();this.Y5._ReInit();this.Zc._ReInit();this.Y$._ReInit();this.Zd.
_ReInit();this.Y6._ReInit();this.Y9._ReInit();this.Za._ReInit();this.Zb._ReInit(
);this.Y8._ReInit();this.OI._ReInit();this.Ja(A.aaR(A.acf.Settings));this.IP.T(A.
aaR(A.acf.Language));this.Y5.T(A.aaR(A.acf.ACt));this.Zc.T(A.aaR(A.acf.AG6));this.
Y$.T(A.aaR(A.acf.Temperature));this.Zd.T(A.aaR(A.acf.ACq));this.Y6.T(A.aaR(A.acf.
Device));this.Y9.T(A.aaR(A.acf.Asl));this.Za.T(A.aaR(A.acf.LinkTransponder));this.
Zb.T(A.aaR(A.acf.UnlinkTransponder));this.Y8.T(A.aaR(A.acf.ACI));},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.IP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMn={ET:null,Init:function(aArg){this.ET.Ahs(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgW)));},AUg:function(
){this.ET.AeY(this.AOR());this.Aax=!this.ET.EZ.AY;},AiV:function(G){this.ET.Ahs(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.AgW)));this.AUg();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dj(A.aaR(A.acf.A7Z));else this.Dj(A.aaR(A.acf.Arr));this.Am();},AOR:function(
){var Bz=A._NewObject(C.Aqr,0);var Ql=A._GetAutoObject(A.Device.Helper).AN_(A._GetAutoObject(
A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqn(Ql-(86400*this.
Mw));Bz.Anx(AZj);Bz.Q3([].concat(0,Bz.Gj.slice(1,4)));Bz.Q3(A.abN(Bz.Gj,(Ql-Dx)|
0));Bz.Q3(A.abP(Bz.Gj,3400));Bz.Q3([].concat(Bz.Gj.slice(0,3),4200));var Gg=A._GetAutoObject(
A.Device.Device).Bt.B9();Bz.AwP(Gg);Bz.Yc();if(Gg>0){var O=0;while(O<Gg){var ApU=
A._GetAutoObject(A.Device.Device).Bt.CF(O,7);var ApV=A._GetAutoObject(A.Device.Device
).Bt.Hu(O,6)-Dx;if(ApU>0)Bz.Aqe(ApV,ApU);O=O+1;}}return Bz;},_Init:function(aArg
){C.K_._Init.call(this,aArg);C.AqV._Init.call(this.ET={I:this},0);this.__proto__=
C.AMn;this.ET.H(AZk);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AE$(C.AGR);this.
J(this.ET,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.ET._Done(
);C.K_._Done.call(this);},_ReInit:function(){C.K_._ReInit.call(this);this.ET._ReInit(
);this.ET.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMo={Z0:null,O0:null,AgQ:null,Aax:false,Init:function(aArg){this.Z0.Ahs(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgW)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgQ.Z(this.Aax);},CC:function(
G){var B;C.D9.CC.call(this,G);A.zX([this,this.AiV],[B=A._GetAutoObject(A.Device.
Helper),B.U0,B.U3],0);A.zV([this,this.AiV],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Amc],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId],0
);A.pe([this,this.Amc],this);},E5:function(G){var B;A.z$([this,this.AiV],[B=A._GetAutoObject(
A.Device.Helper),B.U0,B.U3],0);A.z9([this,this.AiV],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amc],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId
],0);C.D9.E5.call(this,G);},Amc:function(G){var Fx=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fx.CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bk(Fx
);},AiV:function(G){this.Z0.Ahs(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgW)));this.Boj();this.Am();},Boj:function(
){var B;var Gg=A._GetAutoObject(A.Device.Device).Bt.B9();var K8=A._NewObject(C.Aqr
,0);var Vo=A._NewObject(C.Aqr,0);var Ql=A._GetAutoObject(A.Device.Helper).AN_(A.
_GetAutoObject(A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqn(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K8.Q3([].concat(0,K8.Gj.slice(1
,4)));K8.Q3(A.abN(K8.Gj,(Ql-Dx)|0));K8.Q3(A.abP(K8.Gj,0));K8.Q3([].concat(K8.Gj.
slice(0,3),150000));K8.Anx(AZl);Vo.Q3([].concat(0,Vo.Gj.slice(1,4)));Vo.Q3(A.abN(
Vo.Gj,(Ql-Dx)|0));Vo.Q3(A.abP(Vo.Gj,0));Vo.Q3([].concat(Vo.Gj.slice(0,3),1500));
Vo.Anx(AZm);K8.AwP(Gg);K8.Yc();Vo.AwP(Gg);Vo.Yc();if(Gg>0){var O=0;var Aaz=0;var
AAf=0;var AJ5=0;var A11=0;var Bc5=true;while(O<Gg){var Al8=A._GetAutoObject(A.Device.
Device).Bt.CF(O,8);var AaM=A._GetAutoObject(A.Device.Device).Bt.Hu(O,6)-Dx;if(Al8>
0){K8.Aqe(AaM,Al8);if(!A11){A11=AaM;AJ5=Al8;}if(AAf>0){var LC=A._GetAutoObject(A.
Device.Helper).L9(AAf,AaM);if(!!LC){var FW=A._GetAutoObject(A.acj.DU).Alx(LC,Aaz
,Al8);if(Bc5){Vo.Aqe(AAf,FW);Bc5=false;}Vo.Aqe(AaM,FW);}}Aaz=Al8;AAf=AaM;}O=O+1;
}var AdL=A.aaR(A.acf.BgT);var FW=A._GetAutoObject(A.Device.Helper).BiP(A11,AAf,AJ5
,Aaz);AdL=A._GetAutoObject(A.Device.Helper).Nl(AdL,P$,FW.toFixed());AdL=A._GetAutoObject(
A.Device.Helper).Nl(AdL,Aya,A._GetAutoObject(A.acj.DU).Aat());this.O0.Ik.R(AdL);
}this.Aax=!K8.AY;if(this.Aax)this.O0.Ik.R(A.jV);(C.O0.isPrototypeOf(B=this.O0.ET
)?B:null).Ant([B=A._GetAutoObject(A.Device.Helper).W,B.PP,B.EB]);this.Z0.AeY(K8);
this.O0.AeY(Vo);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqV._Init.call(
this.Z0={I:this},0);C.AqV._Init.call(this.O0={I:this},0);C.AkP._Init.call(this.AgQ={
I:this},0);this.__proto__=C.AMo;this.Z0.H(AZn);this.Z0.T(A.aaR(A.acf.Aft));this.
Z0.AE$(C.AMW);this.O0.H(AZo);this.O0.T(A.aaR(A.acf.AG$));this.O0.AE$(C.O0);this.
AgQ.H(UX);this.AgQ.R(A.aaR(A.acf.Akj));this.J(this.Z0,0);this.J(this.O0,0);this.
J(this.AgQ,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z0._Done(
);this.O0._Done();this.AgQ._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z0._ReInit();this.O0._ReInit();this.AgQ._ReInit();this.
Z0.T(A.aaR(A.acf.Aft));this.O0.T(A.aaR(A.acf.AG$));this.AgQ.R(A.aaR(A.acf.Akj));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgQ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMl={
Avd:null,Avc:null,Axq:null,AuK:null,VA:null,Abl:null,Abk:null,Aci:null,Afg:null,
Init:function(aArg){this.VA.Ahs(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgW)));},A4p:function(G){this.VA.Ab5(this.
AuK);this.Abl.Ab5(this.Avd);this.Abk.Ab5(this.Avc);this.Aci.Ab5(this.Axq);},Axp:
function(){var Gg=A._GetAutoObject(A.Device.Device).Bt.B9();this.AuK=A._NewObject(
C.Ajs,0);this.Avd=A._NewObject(C.Ajs,0);this.Avc=A._NewObject(C.Ajs,0);this.Axq=
A._NewObject(C.Ajs,0);if(Gg>0){var O=Gg-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.Hu(O,6);this.Atr(this.AuK,O,3,D8);this.Atr(this.Avd,O,2,D8);this.
Atr(this.Avc,O,5,D8);this.Atr(this.Axq,O,4,D8);O=O-1;}}this.Aax=!(((this.AuK.AY+
this.Avc.AY)+this.Avd.AY)+this.Axq.AY);A.pe([this,this.A4p],this);},Atr:function(
A01,Ad,A00,Qf){var Alt=A._GetAutoObject(A.Device.Device).Bt.I6(Ad,A00);if(!!Alt)
A01.Os(Alt,Qf);},Ab3:function(E){if(this.Mw===E)return;C.K_.Ab3.call(this,E);if(
!!this.VA)this.VA.Ab3(E);if(!!this.Abl)this.Abl.Ab3(E);if(!!this.Abk)this.Abk.Ab3(
E);if(!!this.Aci)this.Aci.Ab3(E);this.Afg.Ab3(E);},AiV:function(G){this.VA.Ahs(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.AgW)));this.Axp();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dj(A.aaR(A.acf.Bkd));else this.Dj(A.aaR(A.acf.Anl));this.Am();},_Init:function(
aArg){C.K_._Init.call(this,aArg);C.Ahx._Init.call(this.VA={I:this},0);C.Ahx._Init.
call(this.Abl={I:this},0);C.Ahx._Init.call(this.Abk={I:this},0);C.Ahx._Init.call(
this.Aci={I:this},0);C.AUd._Init.call(this.Afg={I:this},0);this.__proto__=C.AMl;
this.Dj(A.aaR(A.acf.Anl));this.VA.H(AZp);this.VA.R(A.aaR(A.acf.AGe));this.Abl.H(
AZq);this.Abl.R(A.aaR(A.acf.Feed));this.Abk.H(AZr);this.Abk.R(A.aaR(A.acf.AGg));
this.Aci.H(AZs);this.Aci.R(A.aaR(A.acf.AGh));this.Afg.H(AZt);this.J(this.VA,-1);
this.J(this.Abl,-1);this.J(this.Abk,-1);this.J(this.Aci,-1);this.J(this.Afg,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.VA._Done();this.Abl.
_Done();this.Abk._Done();this.Aci._Done();this.Afg._Done();C.K_._Done.call(this);
},_ReInit:function(){C.K_._ReInit.call(this);this.VA._ReInit();this.Abl._ReInit(
);this.Abk._ReInit();this.Aci._ReInit();this.Afg._ReInit();this.Dj(A.aaR(A.acf.Anl
));this.VA.R(A.aaR(A.acf.AGe));this.Abl.R(A.aaR(A.acf.Feed));this.Abk.R(A.aaR(A.
acf.AGg));this.Aci.R(A.aaR(A.acf.AGh));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.Avd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avc)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abk)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMm={ET:null,WE:null,Aeh:null,A2m:false,Init:function(aArg){this.WE.Ahs(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgW)));},Bl:function(aSize){C.K_.Bl.call(this,aSize);this.Aeh.H(this.ET.M);},Ai:
function(Ae){C.K_.Ai.call(this,Ae);var BBX=!this.Aax&&this.A2m;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aeh.R(A.aaR(A.acf.A7Z));else this.
Aeh.R(A.aaR(A.acf.Arr));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dj(A.aaR(
A.acf.Bke));else this.Dj(A.aaR(A.acf.Bkf));this.Aeh.Z(BBX);},AiV:function(G){this.
WE.Ahs(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.AgW)));this.Aax=true;this.A2m=true;this.Axp();this.AUg();this.
Am();},AUg:function(){this.ET.AeY(this.AOR());if(!!this.ET.EZ&&(this.ET.EZ.AY>0)
){this.Aax=false;this.A2m=false;}},AOR:function(){var Bz=A._NewObject(C.Aqr,0);var
Ql=A._GetAutoObject(A.Device.Helper).AN_(A._GetAutoObject(A.Device.Helper).Dv());
var Dx=A._GetAutoObject(A.Device.Helper).Aqn(Ql-(86400*this.Mw));Bz.Anx(AZu);Bz.
Q3([].concat(0,Bz.Gj.slice(1,4)));Bz.Q3(A.abN(Bz.Gj,(Ql-Dx)|0));Bz.Q3(A.abP(Bz.Gj
,3400));Bz.Q3([].concat(Bz.Gj.slice(0,3),4200));var Gg=A._GetAutoObject(A.Device.
Device).Bt.B9();Bz.AwP(Gg);Bz.Yc();if(Gg>0){var O=0;while(O<Gg){var ApU=A._GetAutoObject(
A.Device.Device).Bt.CF(O,7);var ApV=A._GetAutoObject(A.Device.Device).Bt.Hu(O,6)-
Dx;if(ApU>0)Bz.Aqe(ApV,ApU);O=O+1;}}return Bz;},Bi4:function(){var Gg=A._GetAutoObject(
A.Device.Device).Bt.B9();if(Gg>0){var BfL=A._NewObject(C.Ajs,0);var O=Gg-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E4(O,A._GetAutoObject(A.Device.Device
).Bt);var LP=A._GetAutoObject(A.Device.Helper).AC7(D3);if(!!LP)BfL.Os(LP,D3.Timestamp
);O=O-1;}return BfL;}else return null;},Axp:function(){this.WE.Ab5(this.Bi4());if(
!!this.WE.N3&&(this.WE.N3.AY>0))this.Aax=false;},_Init:function(aArg){C.K_._Init.
call(this,aArg);C.AqV._Init.call(this.ET={I:this},0);C.Ahx._Init.call(this.WE={I:
this},0);C.AkP._Init.call(this.Aeh={I:this},0);this.__proto__=C.AMm;this.ET.H(Ata
);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AE$(C.AGR);this.WE.H(AIt);this.WE.
R(A.aaR(A.acf.Rating));this.Aeh.H(Ata);this.J(this.ET,-2);this.J(this.WE,-2);this.
J(this.Aeh,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.ET._Done(
);this.WE._Done();this.Aeh._Done();C.K_._Done.call(this);},_ReInit:function(){C.
K_._ReInit.call(this);this.ET._ReInit();this.WE._ReInit();this.Aeh._ReInit();this.
ET.T(A.aaR(A.acf.Temperature));this.WE.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K_._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeh)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WJ={Q:null,Gw:null,Gx:null
,QL:null,AM:0,Gp:0,F$:100,FI:0,Init:function(aArg){},I0:function(G){this.FI=1;C.
Eg.I0.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QL.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QL.Z(this.Gp!==
this.F$);this.QL.L(this.V.AQ);if((this.FI===4)||(this.FI===5))this.QL.L(A.jb.E1);
},Al1:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AyQ],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qr:function(G){if(this.FI===5)A.pe([this,this.
AyQ],this);if(this.FI===4)A.pe([this,this.AyR],this);if(this.FI===1)A.pe(this.AR
,this);this.FI=0;this.Am();},C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcT:function(s){this.C3(s);},At:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcT],E,0);if(!!E)A.pe([this,this.AcT],this);},Al2:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.AyR],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},Kc:function(G){this.FI=0;},AyR:function(s){this.Kc(s);},J9:function(G){this.
FI=0;},AyQ:function(s){this.J9(s);},Bx:function(E){if(E<this.Gp)E=this.Gp;if(E>this.
F$)E=this.F$;if(this.AM===E)return;this.AM=E;this.Am();},Ga:function(E){if(this.
Gp===E)return;this.Gp=E;this.Am();},EU:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(
this.Gw={I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.acg.Ap._Init.call(
this.QL={I:this},0);this.__proto__=C.WJ;this.H(KY);this.Gw.Filter=5;this.Gx.Filter=
4;this.Background.H(KY);this.V.H(AcL);this.V.R(Lv);this.QL.H(Ayy);this.J(this.QL
,0);this.Gw.BL=[this,this.Al1];this.Gw.D1=[this,this.Al1];this.Gx.BL=[this,this.
Al2];this.Gx.D1=[this,this.Al2];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Cv(null);this.QL.Ax(A.aaL(A.ach.AMJ));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gw._Done();this.Gx._Done();this.QL._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gw._ReInit();this.Gx.
_ReInit();this.QL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUD={AC:null,CM:null,HL:
null,Bl:function(aSize){C.WJ.Bl.call(this,aSize);this.CM.H([this.QL.M[2],this.QL.
M[1],this.M[2],this.QL.M[3]]);},Ai:function(Ae){C.WJ.Ai.call(this,Ae);this.CM.AbC(
0,this.CM.AY-1);if(this.Gp!==this.F$)this.QL.Z(true);},Init:function(aArg){},C3:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},Kc:function(G){var F;var BO=this.AM;C.WJ.Kc.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(
this.AM)));A.abo(this.Q,0);}},J9:function(G){var F;var BO=this.AM;C.WJ.J9.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var Qx=0;if(this.Gp
!==this.F$){if(E<this.Gp){E=this.F$;Qx=-this.CM.GO*this.CM.AY;}if(E>this.F$){E=this.
Gp;Qx=this.CM.GO;}}C.WJ.Bx.call(this,E);if(!!Qx)this.CM.Gb(Qx);this.CM.GT(this.AM
);this.CM.HH(this.CM.Gs,true,this.HL,null);},Hl:function(G){var B;var Gf=this.CM.
G5;var CA=(C.CH.isPrototypeOf(B=this.CM.Ci)?B:null);if(!CA)return;CA.S(this.V.B6
);CA.A2(A.aaL(A.fl.Af));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gk(Gf));else CA.
R(W$);CA.H(A.abK(CA.M,[(B=this.CM.M)[2]-B[0],this.CM.GO]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Ga(0);this.EU(this.AC.Du()-1);this.CM.
Jy(this.AC.Du());this.CM.AbC(0,this.CM.AY-1);}},_Init:function(aArg){C.WJ._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gl._Init.call(this.
HL={I:this},0);this.__proto__=C.AUD;this.H(KY);this.QL.H(AIu);this.CM.Ae6(40);this.
CM.N0(C.CH);this.HL.WC(23);this.HL.HM(1);this.HL.Fq(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CM.Hl=[this,this.Hl];this.Init(
aArg);},_Done:function(){this.__proto__=C.WJ;this.CM._Done();this.HL._Done();C.WJ.
_Done.call(this);},_ReInit:function(){C.WJ._ReInit.call(this);this.CM._ReInit();
this.HL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WJ._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HL)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RX={ALv:0
,Ai:function(Ae){C.Fz.Ai.call(this,Ae);this.T(A.aaR(A.acf.AG$));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kv((A._GetAutoObject(A.Device.Converter).Ak8(this.ALv
)+CQ)+A._GetAutoObject(A.acj.DU).Af0());else this.Kv(A.aaR(A.acf.Unknown));},Cf:
function(G){C.Fz.Cf.call(this,G);this.ALv=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fz._Init.call(this,aArg);this.__proto__=C.RX;},_className:"Application::AnimalInfoItemWeightGain"
};C.APu={Bc:null,Dd:null,Init:function(aArg){var B;A.zX([this,this.Nn],[B=A._GetAutoObject(
A.Device.Device),B.AEs,B.AIJ],0);},DX:function(G){C.IK.DX.call(this,G);this.Dd.Ax(
A._GetAutoObject(A.Device.Converter).Bg8(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IK._Init.call(this,aArg);A.acg.C5._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);this.__proto__=C.APu;this.Bc.DC(
Ayz);this.Bc.DM(AyA);this.Bc.L(A.jb.Bc);this.Dd.H(AIv);this.Dd.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Dd,0);this.Dd.Ax(A.aaL(A.ach.AjT));this.Init(aArg);},_Done:
function(){this.__proto__=C.IK;this.Bc._Done();this.Dd._Done();C.IK._Done.call(this
);},_ReInit:function(){C.IK._ReInit.call(this);this.Bc._ReInit();this.Dd._ReInit(
);},_Mark:function(D){var B;C.IK._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANw={ZI:null,Kz:null,Ml:null,Timer:null,ACh:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZI.R(A._GetAutoObject(A.Device.Helper).Nl(A.aaR(A.acf.BqH),P$,this.ACh.
toFixed()));},CC:function(G){this.Timer.Ar(true);},E5:function(G){this.Timer.Ar(
false);},BA$:function(G){if(this.ACh>1){this.ACh=this.ACh-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Axx();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZI={I:this},0);A.acg.Text.
_Init.call(this.Kz={I:this},0);A.acg.Ap._Init.call(this.Ml={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANw;this.Background.L(A.jb.CS
);this.N.Z(true);this.ZI.H(AZv);this.ZI.KR(true);this.ZI.R(A.jV);this.ZI.L(A.jb.
Text);this.Kz.H(AZw);this.Kz.KR(true);this.Kz.R(A.aaR(A.acf.A5g));this.Kz.L(A.jb.
Text);this.Ml.H(AIw);this.J(this.ZI,0);this.J(this.Kz,0);this.J(this.Ml,0);this.
ZI.S(A.aaL(A.fl.Af));this.Kz.S(A.aaL(A.fl.Af));this.Ml.Ax(A.aaL(A.ach.ABO));this.
Timer.MB=[this,this.BA$];},_Done:function(){this.__proto__=C.AB;this.ZI._Done();
this.Kz._Done();this.Ml._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZI._ReInit();this.Kz._ReInit();this.Ml._ReInit(
);this.Timer._ReInit();this.Kz.R(A.aaR(A.acf.A5g));this.ZI.S(A.aaL(A.fl.Af));this.
Kz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ml)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANd={Kz:null,Amy:null
,QE:null,CP:function(){this.Am();},Ai:function(Ae){C.Ad8.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa3<=10)this.Kz.R(A.aaR(A.acf.Bhi));else this.Kz.R(A.aaR(A.acf.
A5h));},_Init:function(aArg){C.Ad8._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kz={I:this},0);A.acg.Ap._Init.call(this.Amy={I:this},0);C.CH._Init.call(this.QE={
I:this},0);this.__proto__=C.ANd;this.SQ.H(AZx);this.Ml.H(AZy);this.Kz.H(AZz);this.
Kz.KR(true);this.Kz.L(A.jb.Text);this.Amy.H(AIw);this.QE.H(AZA);this.QE.Z(true);
this.QE.R(A.aaR(A.acf.AUe));this.QE.L(A.jb.Text);this.J(this.Kz,0);this.J(this.Amy
,0);this.J(this.QE,0);this.Kz.S(A.aaL(A.fl.Af));this.Amy.Ax(A.aaL(A.ach.ABO));this.
QE.S(A.aaL(A.fl.Af));this.QE.A2(A.aaL(A.fl.Ak));this.QE.Cv(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Ad8;this.Kz._Done();this.Amy._Done();this.QE._Done();
C.Ad8._Done.call(this);},_ReInit:function(){C.Ad8._ReInit.call(this);this.Kz._ReInit(
);this.Amy._ReInit();this.QE._ReInit();this.QE.R(A.aaR(A.acf.AUe));this.Kz.S(A.aaL(
A.fl.Af));this.QE.S(A.aaL(A.fl.Af));this.QE.A2(A.aaL(A.fl.Ak));this.QE.Cv(A.aaL(
A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ad8._Mark.call(this,D);if((B=this.
Kz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amy)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AL_={_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AL_;this.
RQ.Ar(false);this.RQ.Aj(false);this.RQ.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVD={_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AVD;this.
S6.Ar(false);this.S6.Aj(false);this.S6.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AOY={DX:function(G){C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.
Converter).AdX(5));},_Init:function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=
C.AOY;},_className:"Application::HeaderControlListFilter"};C.APw={DX:function(G){
C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter).AdX(6));},_Init:
function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=C.APw;},_className:"Application::HeaderWatchListFilter"
};C.APA={D0:null,M7:null,_Init:function(aArg){C.TW._Init.call(this,aArg);C.CH._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.M7={I:this},0);this.__proto__=
C.APA;this.D0.H(Aos);this.D0.R(A.aaR(A.acf.A5O));this.D0.L(A.jb.Text);this.M7.H(
AZB);this.M7.L(A.jb.Text);this.M7.A6(0x12);this.J(this.D0,-2);this.J(this.M7,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));this.M7.Ax(A.aaL(A.ach.ADz)
);},_Done:function(){this.__proto__=C.TW;this.D0._Done();this.M7._Done();C.TW._Done.
call(this);},_ReInit:function(){C.TW._ReInit.call(this);this.D0._ReInit();this.M7.
_ReInit();this.D0.R(A.aaR(A.acf.A5O));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.TW._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.AM_={Cf:function(Ad){C.AjA.Cf.call(this,Ad);if(
!!this.AX){var Oj=this.AX.H2(Ad,8);var BCJ=this.AX.Sj(Ad,21);this.Abd.R(A._GetAutoObject(
A.Device.Helper).L9(BCJ,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Sp.Z(Oj);this.Am();}},_Init:function(aArg){C.AjA._Init.call(this,aArg);this.__proto__=
C.AM_;},_className:"Application::CalfListWatchItem"};C.TW={Ag7:null,Ag9:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag7={I:this},
0);A.acg.Ap._Init.call(this.Ag9={I:this},0);this.__proto__=C.TW;this.Ag7.H(AZC);
this.Ag7.L(A.jb.Text);this.Ag7.A6(0x12);this.Ag9.H(AZD);this.Ag9.L(A.jb.Text);this.
Ag9.A6(0x12);this.JY(this.DS,-1);this.J(this.Ag7,0);this.J(this.Ag9,0);this.Ag7.
Ax(A.aaL(A.ach.Aq_));this.Ag9.Ax(A.aaL(A.ach.Ag3));},_Done:function(){this.__proto__=
C.Dc;this.Ag7._Done();this.Ag9._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Ag7._ReInit();this.Ag9._ReInit();},_Mark:function(
D){var B;C.Dc._Mark.call(this,D);if((B=this.Ag7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqr={Gj:A.wg,OE:A.wf,Q3:function(E){if(A.aaY(this.Gj,E))return;this.Gj=E;},Anx:
function(E){if(A.aaX(this.OE,E))return;this.OE=E;},_Init:function(aArg){A.acv.ACg.
_Init.call(this,aArg);this.__proto__=C.Aqr;},_className:"Application::BoundCoordList"
};C.AjA={T1:null,Ws:null,T2:null,Wt:null,Sp:null,Ze:null,Abd:null,AP:null,A$:null
,Ea:null,Ls:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T1.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Ws.H(this.T1.M);this.A$.H([this.T1.
M[2]-1,0,this.T1.M[2]+1,aSize[1]]);this.T2.H([this.T1.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wt.H(this.T2.M);this.Ea.H([this.T2.M[2]-1,0,this.T2.M[2]+1,aSize[
1]]);this.Sp.H([this.T2.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Ze.H(this.Sp.
M);this.Ls.H([this.Sp.M[2]-1,0,this.Sp.M[2]+1,aSize[1]]);this.Abd.H([this.Sp.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K7=this.V.AQ;
this.T1.AEU(K7);this.Ws.L(K7);this.T2.AEU(K7);this.Wt.L(K7);this.Sp.AEU(K7);this.
Ze.L(K7);this.Abd.L(K7);this.Ze.Z(!this.Sp.Fp());},Cf:function(Ad){if(!this.AX)return;
this.Hr=Ad;var Mf=this.AX.CF(Ad,1);var Ib=this.AX.AmT(Ad,14);var Auk=this.AX.CF(
Ad,5);var LP=this.AX.I6(Ad,13);this.T(Mf.toFixed());if(!!LP){this.T1.Z(true);this.
T1.AwF(A._GetAutoObject(A.acj.Assessment).Bdb(LP));this.Ws.Z(false);}else{this.T1.
Z(false);this.Ws.Z(true);}if(Auk>0){this.T2.Z(true);this.T2.AwF(A._GetAutoObject(
A.acj.Assessment).Bdb(A._GetAutoObject(A.Device.Converter).AsG(Ib,Auk)));this.Wt.
Z(false);}else{this.T2.Z(false);this.Wt.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kk._Init.call(this.T1={I:this},0);A.acg.Text._Init.
call(this.Ws={I:this},0);C.Kk._Init.call(this.T2={I:this},0);A.acg.Text._Init.call(
this.Wt={I:this},0);C.Kk._Init.call(this.Sp={I:this},0);A.acg.Text._Init.call(this.
Ze={I:this},0);A.acg.Text._Init.call(this.Abd={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.
Ea={I:this},0);A.acg.AL._Init.call(this.Ls={I:this},0);this.__proto__=C.AjA;this.
Ws.H(AZE);this.Ws.R(Aot);this.Wt.H(Alg);this.Wt.R(Aot);this.Sp.AwF(A.jb.Rg);this.
Ze.H(Alg);this.Ze.R(Ro);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ls.L(A.jb.Bc);this.J(this.T1,0);this.J(this.Ws,0);this.J(this.T2,0);this.J(
this.Wt,0);this.J(this.Sp,0);this.J(this.Ze,0);this.J(this.Abd,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Ls,0);this.Ws.S(A.aaL(A.fl.Af
));this.Wt.S(A.aaL(A.fl.Af));this.Ze.S(A.aaL(A.fl.Af));this.Abd.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.T1._Done();this.Ws.
_Done();this.T2._Done();this.Wt._Done();this.Sp._Done();this.Ze._Done();this.Abd.
_Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Ls._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.T1._ReInit();this.Ws.
_ReInit();this.T2._ReInit();this.Wt._ReInit();this.Sp._ReInit();this.Ze._ReInit(
);this.Abd._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.
Ls._ReInit();this.Ws.S(A.aaL(A.fl.Af));this.Wt.S(A.aaL(A.fl.Af));this.Ze.S(A.aaL(
A.fl.Af));this.Abd.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.T1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ws)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pt:null,And:null
,EZ:null,DR:null,Ark:0,Arl:0,A7g:0,AmK:0,AqE:0,Init:function(aArg){this.AS1(6);this.
AS2(8);this.ATb(A.jb.AV);this.ATc(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.BlX([this.DR.Aa$[0],(B=this.DR.M)[3]-B[1]]);this.WF(this);},AS0:function(
E){if(this.Pt===E)return;this.Pt=E;this.DR.AS0(E);},ATc:function(E){if(this.Arl===
E)return;this.Arl=E;this.DR.ATc(E);},ATb:function(E){if(this.Ark===E)return;this.
Ark=E;this.DR.ATb(E);this.DR.Bl2(E);},WF:function(G){var B;while(!!this.DR.Ah)this.
HN(this.DR.Ah);if(!this.EZ)return;this.DR.Anx([((this.EZ.OE[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gj[2]-this.EZ.Gj[0]))|0,this.DR.OE[1]]);this.DR.Anx([this.DR.OE[0]
,((this.EZ.OE[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gj[3]-this.EZ.Gj[1]))|0]);var O;
var Dg=this.DR.OE[1];var D8;var A4A=this.EZ.Gj[1];var Bkc=(((B=this.DR.M)[3]-B[1
])/this.DR.OE[1])|0;for(O=0;O<Bkc;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dg))-(this.And.Ascent+this.And.Descent))+2,((B=this.M)[2]-
B[0])-this.Arl,(((B=this.M)[3]-B[1])-(O*Dg))+2]);D8.L(this.A7g);D8.S(this.And);D8.
A6(0x24);if(O>0)D8.R(this.AJG(A4A));else D8.R(this.AKd());A4A=A4A+this.EZ.OE[1];
this.J(D8,0);}},BGo:function(s){this.WF(s);},BmS:function(E){if(this.And===E)return;
this.And=E;this.Am();},Azp:function(A0G){var B;if(!this.EZ||(this.EZ.Gj[3]===this.
EZ.Gj[1]))return 0;return(((A0G-this.EZ.Gj[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gj[
3]-this.EZ.Gj[1]))|0;},AeY:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.AeY(null);else{var Bz=A._NewObject(A.acv.ACg,0);Bz.AwP(this.EZ.AD_);Bz.Yc();var
JA=E.AlH;while(!!JA){Bz.Aqe(this.ByK(JA.P4),this.ByL(JA.P5));JA=JA.Ah;}this.DR.AeY(
Bz);this.Am();}},ByK:function(BwY){var B;if(!this.EZ||(this.EZ.Gj[2]===this.EZ.Gj[
0]))return 0;return((BwY-this.EZ.Gj[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gj[2]-this.
EZ.Gj[0]);},ByL:function(A0G){var B;if(!this.EZ||(this.EZ.Gj[3]===this.EZ.Gj[1])
)return 0;return((A0G-this.EZ.Gj[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gj[3]-this.EZ.
Gj[1]);},AJG:function(AoP){return AoP.toFixed();},AKd:function(){return A.jV;},AS2:
function(E){if(this.AmK===E)return;this.AmK=E;this.DR.AS2(E);},AS1:function(E){if(
this.AqE===E)return;this.AqE=E;this.DR.AS1(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIx);this.A7g=A.jb.Text;this.DR.AZ(0x3F);this.DR.H(AIx);this.DR.Bng(AZF);this.
DR.BlL(A.jb.Rg);this.DR.Bmz(A.jb.Bc);this.DR.BnC(A.jb.Rg);this.J(this.DR,0);this.
Pt=A.aaL(A.acv.ACz);this.And=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.BmS(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pt)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.And)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMW={AJG:function(AoP){return A._GetAutoObject(
A.Device.Converter).Ax0(AoP,0);},AKd:function(){return A._GetAutoObject(A.acj.DU
).Af0();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AMW;}
,_className:"Application::BodyWeightGraph"};C.O0={JL:null,Ex:null,Eh:null,FX:null
,IH:null,II:null,Init:function(aArg){this.AS0(null);},WF:function(G){var B;var F;
C.DR.WF.call(this,G);var AKJ=0;var ALA=0;if(!!this.JL){AKJ=this.Azp(A._GetAutoObject(
A.Device.Helper).AC6((F=this.JL,F[1].call(F[0]))));ALA=this.Azp(A._GetAutoObject(
A.Device.Helper).AC5((F=this.JL,F[1].call(F[0]))));}this.FX.H(A.abP(this.FX.M,0)
);this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.M)[3]-B[1])-ALA));this.IH.H(
A.abO(this.IH.M,(this.FX.M[3]-((((B=this.IH.M)[3]-B[1])/2)|0))-2));this.Eh.H(A.abP(
this.Eh.M,this.FX.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-
B[1])-AKJ));this.II.H(A.abO(this.II.M,(this.Eh.M[3]-((((B=this.II.M)[3]-B[1])/2)|
0))+2));this.Ex.H(A.abP(this.Ex.M,this.Eh.M[3]));this.Ex.H([].concat(this.Ex.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJG:function(AoP){return A._GetAutoObject(A.Device.Converter
).S7(AoP,0,true);},AKd:function(){return A._GetAutoObject(A.acj.DU).Aat();},Ant:
function(E){if(A.aaZ(this.JL,E))return;if(!!this.JL)A.z$([this,this.AiN],this.JL
,0);this.JL=E;if(!!E)A.zX([this,this.AiN],E,0);if(!!E)A.pe([this,this.AiN],this);
},AiN:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ex={I:this},0);A.acg.AL._Init.call(this.Eh={I:this},0);A.
acg.AL._Init.call(this.FX={I:this},0);A.acg.AL._Init.call(this.IH={I:this},0);A.
acg.AL._Init.call(this.II={I:this},0);this.__proto__=C.O0;this.Ex.AZ(0xD);this.Ex.
H(Z9);this.Ex.L(A.jb.Gi);this.Eh.AZ(0xD);this.Eh.H(S_);this.Eh.L(A.jb.H8);this.FX.
AZ(0xD);this.FX.H(AcK);this.FX.L(A.jb.E1);this.IH.AZ(0xD);this.IH.H(Z$);this.IH.
Awt(A.jb.H8);this.IH.Awu(A.jb.H8);this.IH.Aww(A.jb.E1);this.IH.Awv(A.jb.E1);this.
II.AZ(0xD);this.II.H(W9);this.II.Awt(A.jb.Gi);this.II.Awu(A.jb.Gi);this.II.Aww(A.
jb.H8);this.II.Awv(A.jb.H8);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FX
,-1);this.J(this.IH,-1);this.J(this.II,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FX._Done();this.IH._Done();this.
II._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ex._ReInit();this.Eh._ReInit();this.FX._ReInit();this.IH._ReInit();this.II._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JL)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqV={ET:null,EZ:null,R9:null,Ik:
null,Bc:null,AxH:A.jV,DK:A.jV,AOT:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R9.
H([30,0,aSize[0]-2,30]);this.Ik.H(this.R9.M);if(!!this.ET)this.ET.H([30,this.R9.
M[3],aSize[0],this.Bc.M[1]]);},Ahs:function(E){if(this.AxH===E)return;this.AxH=E;
this.Ik.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.R9.R(E);},AE$:
function(E){if(this.AOT===E)return;this.AOT=E;this.BoY(this);},BoY:function(G){var
B;if(!!this.ET)this.HN(this.ET);this.ET=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOT,0))?B:null);if(!!this.ET){this.ET.H(AZG);this.ET.AeY(this.EZ);this.J(this.ET
,0);}},AeY:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.ET)this.ET.AeY(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
R9={I:this},0);A.acg.Text._Init.call(this.Ik={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqV;this.H(AcN);this.Ar(false);this.R9.H(AZH);this.
R9.A6(0x11);this.R9.R(Lv);this.R9.L(A.jb.Text);this.Ik.A6(0x14);this.Ik.R(A.jV);
this.Ik.L(A.jb.Text);this.Bc.H(AZI);this.Bc.L(A.jb.Bc);this.J(this.R9,0);this.J(
this.Ik,0);this.J(this.Bc,0);this.R9.S(A.aaL(A.fl.Ak));this.Ik.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.R9._Done();this.
Ik._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.R9._ReInit();this.Ik._ReInit();this.Bc._ReInit();this.
R9.S(A.aaL(A.fl.Ak));this.Ik.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.ET)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMu={Agz:null,GT:function(E
){var F;C.Gc.GT.call(this,E);if(!!this.Agz)(F=this.Agz,F[2].call(F[0],E));},A9r:
function(E){if(A.aaZ(this.Agz,E))return;if(!!this.Agz)A.z$([this,this.A2Z],this.
Agz,0);this.Agz=E;if(!!E)A.zX([this,this.A2Z],E,0);if(!!E)A.pe([this,this.A2Z],this
);},A2Z:function(G){var F;if(!this.Agz)return;(F=this.Agz,F[2].call(F[0],this.FN(
)));},_Init:function(aArg){C.Gc._Init.call(this,aArg);this.__proto__=C.AMu;},_Mark:
function(D){var B;C.Gc._Mark.call(this,D);if((B=this.Agz)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUd={Re:null
,PZ:null,XS:null,XT:null,Mw:0,CP:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Re.H(A.abI(this.Re.M,(((B=this.M)[3]-B[1])/2)|
0));this.PZ.H(A.abI(this.PZ.M,(((B=this.M)[3]-B[1])/2)|0));this.Re.H(A.abO(this.
Re.M,(((B=this.M)[3]-B[1])/2)|0));this.PZ.H(A.abO(this.PZ.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Re.R(A._GetAutoObject(
A.Device.Helper).Nl(A.aaR(A.acf.Bj8),P$,this.Mw.toFixed()));},Ab3:function(E){if(
this.Mw===E)return;this.Mw=E;this.BBK(this);},BBK:function(G){var B;var AJN=(((B=
this.M)[2]-B[0])/this.Mw)|0;this.XS.H(A.abM(this.XS.M,(((B=this.M)[2]-B[0])-(this.
Mw*AJN))+(((AJN/2)-(((B=this.XS.M)[2]-B[0])/2))|0)));this.XT.H(A.abM(this.XT.M,(((
B=this.M)[2]-B[0])-AJN)+(((AJN/2)-(((B=this.XT.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Re={
I:this},0);A.acg.Text._Init.call(this.PZ={I:this},0);A.acg.Text._Init.call(this.
XS={I:this},0);A.acg.Text._Init.call(this.XT={I:this},0);this.__proto__=C.AUd;this.
H(BD);this.Re.H(AZJ);this.Re.Hm(5);this.Re.A6(0x11);this.Re.L(A.jb.Text);this.PZ.
H(AZK);this.PZ.Hm(5);this.PZ.A6(0x14);this.PZ.R(A.aaR(A.acf.AhP));this.PZ.L(A.jb.
Text);this.XS.H(AZL);this.XS.R(AIy);this.XS.L(A.jb.Text);this.XT.H(BqN);this.XT.
R(AIy);this.XT.L(A.jb.Text);this.J(this.Re,0);this.J(this.PZ,0);this.J(this.XS,0
);this.J(this.XT,0);this.Re.S(A.aaL(A.fl.Ak));this.PZ.S(A.aaL(A.fl.Ak));this.XS.
S(A.aaL(A.fl.H1));this.XT.S(A.aaL(A.fl.H1));},_Done:function(){this.__proto__=A.
Core.P;this.Re._Done();this.PZ._Done();this.XS._Done();this.XT._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Re._ReInit(
);this.PZ._ReInit();this.XS._ReInit();this.XT._ReInit();this.PZ.R(A.aaR(A.acf.AhP
));this.Re.S(A.aaL(A.fl.Ak));this.PZ.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Re)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.PZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K_={V4:null,AjG:null,KM:A.jV,Mw:0,Aax:false,Init:function(aArg){var A1E=A._NewObject(
C.Kl,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RN()<A1E.
C7(O))A1E.Ank=O+1;this.V4.CK(A1E);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjG.
Z(this.Aax);if(this.Aax)this.Bb(null);else this.Bb(this.V4);},CC:function(G){var
B;var F;C.D9.CC.call(this,G);if(!(F=this.V4.Q,F[1].call(F[0])))(F=this.V4.Q,F[2].
call(F[0],this.V4.AC.C7(0)));A.zX([this,this.AIY],[B=A._GetAutoObject(A.Device.Helper
),B.U0,B.U3],0);A.zV([this,this.AIY],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amc],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId],0);A.pe([this
,this.Amc],this);},E5:function(G){var B;A.z$([this,this.AIY],[B=A._GetAutoObject(
A.Device.Helper),B.U0,B.U3],0);A.z9([this,this.AIY],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amc],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId
],0);C.D9.E5.call(this,G);},Zr:function(E){if(A.aa0(this.AR,E))return;C.D9.Zr.call(
this,E);this.V4.AR=E;},Ab3:function(E){if(this.Mw===E)return;this.Mw=E;A.pe([this
,this.Amc],this);},Bww:function(Aq){this.Ab3(Aq);},AiV:function(G){},AIY:function(
s){this.AiV(s);},Dj:function(E){if(this.KM===E)return;this.KM=E;this.AjG.R(E);},
Amc:function(G){var Fx=A._NewObject(A.Device.Filter,0);var Azy=A._NewObject(A.Device.
UInt32FilterCriterion,0);Azy.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhP()-((this.Mw-1)*86400))-1,true);Fx.CW(Azy);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CW(HV);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fx);},Bk5:function(){return this.Mw;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUD._Init.call(this.V4={I:this},0);C.AkP._Init.call(
this.AjG={I:this},0);this.__proto__=C.K_;this.V4.H(BD);this.AjG.H(UX);this.J(this.
V4,0);this.J(this.AjG,0);this.V4.At([this,this.Bk5,this.Bww]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V4._Done();this.AjG._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V4._ReInit();this.AjG.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.AND={V$:null,YJ:null,RatingMode:null,PE:null,_Init:
function(aArg){C.Ce._Init.call(this,aArg);C.Nc._Init.call(this.V$={I:this},0);C.
BW._Init.call(this.YJ={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Ir._Init.call(this.PE={I:this},0);this.__proto__=C.AND;var B;this.Hi.R(A.
aaR(A.acf.ACq));this.Ja(A.aaR(A.acf.A5I));this.V$.H(AIz);this.V$.Aj(true);this.V$.
T(A.aaR(A.acf.AsS));this.V$.Bi(true);this.V$.Nf(23);this.YJ.H(BqO);this.YJ.Aj(true
);this.YJ.T(A.aaR(A.acf.A_Z));this.YJ.Bi(false);this.PE.H(BqP);this.PE.Aj(true);
this.PE.T(A.aaR(A.acf.A5F));this.PE.Bi(true);this.PE.Ga(3);this.PE.EU(14);this.PE.
IQ(A.aaR(A.acf.Kl)+AIA);this.PE.Jb(A.aaR(A.acf.GL)+AIA);this.J(this.V$,0);this.J(
this.YJ,0);this.J(this.PE,0);this.V$.AR=[B=this.V$,B.Ni];this.YJ.At([B=this.RatingMode
,B.B_,B.B$]);this.YJ.CK(this.RatingMode);this.PE.At([B=A._GetAutoObject(A.Device.
Device),B.A8v,B.Ba6]);},_Done:function(){this.__proto__=C.Ce;this.V$._Done();this.
YJ._Done();this.RatingMode._Done();this.PE._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.V$._ReInit();this.YJ._ReInit();this.RatingMode.
_ReInit();this.PE._ReInit();this.Hi.R(A.aaR(A.acf.ACq));this.Ja(A.aaR(A.acf.A5I)
);this.V$.T(A.aaR(A.acf.AsS));this.YJ.T(A.aaR(A.acf.A_Z));this.PE.T(A.aaR(A.acf.
A5F));this.PE.IQ(A.aaR(A.acf.Kl)+AIA);this.PE.Jb(A.aaR(A.acf.GL)+AIA);},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.V$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Au3={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hm(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FS=A.jb.Ad_;var GX=A.jb.Bm;if(this.Hk){FS=A.jb.Bm;GX=A.jb.
Text;}if(!He){this.Background.L(FS);this.V.L(A.jb.CJ);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FS);this.V.L(GX);}this.LF=He;this.KF=Fv;this.Qs=GE;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Au3;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADc={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PP,B.EB],0);A.pe([this,this.DX],this);},De:function(E){C.BQ.De.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.AC$));break;case 1:this.Ap.Ax(A.aaL(A.ach.APe));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APg));break;default:A.ab5("%s%e",AZM,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADc;this.Ap.H(AZN);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.AC$));this.Init(aArg);},_Done:function(){this.
__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADd={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PP,B.EB],0);A.pe([this,this.DX],this);},De:function(E){C.BQ.
De.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.ADa));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APf));break;case 2:this.Ap.Ax(A.aaL(A.ach.APh));break;default:A.ab5("%s%e"
,AZM,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADd;
this.Ap.H(AZN);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADa));this.Init(aArg);},
_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fz={BT:null,AxV:A.jV,De:function(E){C.JK.De.call(
this,E);this.BT.L(E);},Kv:function(E){if(this.AxV===E)return;this.AxV=E;this.BT.
R(E);},_Init:function(aArg){C.JK._Init.call(this,aArg);C.CH._Init.call(this.BT={
I:this},0);this.__proto__=C.Fz;this.BT.AZ(0x34);this.BT.H(Ayw);this.BT.A6(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(
A.fl.Ak));this.BT.Cv(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JK;this.
BT._Done();C.JK._Done.call(this);},_ReInit:function(){C.JK._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.BT.Cv(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JK._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOC={Wx:function(G){var B;this.Agt();this.Auz(A.aaR(A.acf.Bjf),[this,this.BnS],[
B=A._GetAutoObject(A.Device.Device),B.A8w,B.Ba7]);A._GetAutoObject(C.BR).Fy();this.
I2(A.aaR(A.acf.AVe),[this,this.ATG],5);this.I2(A.aaR(A.acf.AVc),[this,this.ATF],
7);this.I2(A.aaR(A.acf.AnY),[this,this.AwS],2);this.I2(A.aaR(A.acf.AdS),[this,this.
AEP],1);this.I2(A.aaR(A.acf.Aux),[this,this.AEJ],0);A._GetAutoObject(C.BR).Fy();
A._GetAutoObject(C.BR).Mh(A.aaR(A.acf.Ane)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abq:function(){return C.AB4;},Abr:function(
){return C.ADk;},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6E());},HO:function(G){var F;C.GJ.HO.call(this,G);if(this.Akf(
)===false){this.N.Cs(A._GetAutoObject(A.Device.Converter).AuG((F=this.E3,F[1].call(
F[0]))));this.N.Cg=[this,this.Alh];this.N.FE(A.jV);}this.N.OO(false);this.N.OP(false
);},Agf:function(){A._GetAutoObject(C.A9).Cd(44);},BnS:function(G){A._GetAutoObject(
A.Device.Device).AwI(!A._GetAutoObject(A.Device.Device).AqQ);this.An6(this);},An6:
function(G){var Be=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Av=Be.DL(
30,3);if(!!Av)Be.Nj(Av);if(A._GetAutoObject(A.Device.Device).AqQ){var AAe=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A2w=A._GetAutoObject(A.Device.Helper).Dv()-
21600;AAe.Initialize(30,3,A2w,true);Be.CW(AAe);}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOC;
var B;this.Dr(C.APa);this.Dj(A.aaR(A.acf.A7W));this.AwN([B=A._GetAutoObject(A.Device.
Device),B.A8u,B.Ba5]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dj(A.aaR(
A.acf.A7W));},_className:"Application::FreshCowListScreen"};C.AOB={_Init:function(
aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AOB;this.Lc.Ar(false);this.Lc.
Aj(false);this.Lc.Z(false);this.Jr.Ar(false);this.Jr.Aj(false);this.Jr.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APa={DX:function(G){C.Kp.
DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter).AdX(7));},_Init:
function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=C.APa;},_className:"Application::HeaderFreshCowListFilter"
};C.ADk={Jx:null,D0:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);C.CH._Init.
call(this.Jx={I:this},0);C.CH._Init.call(this.D0={I:this},0);this.__proto__=C.ADk;
this.A9M(1);this.Jx.H(BqQ);this.Jx.R((A.aaR(A.acf.Calving)+AcQ)+A.aaR(A.acf.A$y)
);this.Jx.L(A.jb.Text);this.D0.H(BqR);this.D0.R(A.aaR(A.acf.AD2));this.D0.L(A.jb.
Text);this.J(this.Jx,0);this.J(this.D0,0);this.Jx.S(A.aaL(A.fl.Ak));this.Jx.A2(A.
aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Dc;this.Jx._Done();this.D0._Done();C.Dc._Done.call(this);},_ReInit:
function(){C.Dc._ReInit.call(this);this.Jx._ReInit();this.D0._ReInit();this.Jx.R((
A.aaR(A.acf.Calving)+AcQ)+A.aaR(A.acf.A$y));this.D0.R(A.aaR(A.acf.AD2));this.Jx.
S(A.aaL(A.fl.Ak));this.Jx.A2(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.Jx).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.AB4={AGS:null,KP:null,UC:null,AP:null,A$:null
,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UC.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A$.H([this.UC.M[2]-1,0,this.UC.M[2]+1,aSize[
1]]);this.KP.H([this.UC.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KP.L(this.V.AQ);this.UC.De(this.V.AQ);},Cf:function(Ad){if(!this.AX
)return;this.Hr=Ad;if(!!this.AX){var Iz=this.AX.CF(Ad,0);var Mf=this.AX.CF(Ad,1);
var A2v=this.AX.CF(Ad,29);var Alz=this.AX.Hu(Ad,28);this.T(Mf.toFixed());this.KP.
R(A2v.toFixed());this.UC.Ab3(A._GetAutoObject(A.Device.Device).AqP+1);this.UC.Bnu(
Alz);this.UC.R(A._GetAutoObject(A.acj.KK).AjK(Alz));A._GetAutoObject(A.Device.Device
).SO(Ad);this.Ap4(Iz);this.Axp();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A4p:function(G){this.UC.Ab5(this.AGS);},Axp:function(){var Gg=A._GetAutoObject(
A.Device.Device).Bt.B9();this.AGS=A._NewObject(C.Ajs,0);if(Gg>0){var O=Gg-1;while(
O>=0){var D8=A._GetAutoObject(A.Device.Device).Bt.Hu(O,6);this.Atr(this.AGS,O,9,
D8);O=O-1;}}A.pe([this,this.A4p],this);},Atr:function(A01,Ad,A00,Qf){var Alt=A._GetAutoObject(
A.Device.Device).Bt.I6(Ad,A00);if(!!Alt)A01.Os(Alt,Qf);},Ap4:function(Ac5){var Fx=
A._NewObject(A.Device.Filter,0);var Azy=A._NewObject(A.Device.UInt32FilterCriterion
,0);Azy.Initialize(6,2,A._GetAutoObject(A.Device.Helper).ZN(A._GetAutoObject(A.Device.
Device).AqP)-1,true);Fx.CW(Azy);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,Ac5,true);Fx.CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fx);},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.Text._Init.call(this.
KP={I:this},0);C.AT_._Init.call(this.UC={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.AB4;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(this.KP,0);this.J(this.UC,0);this.J(this.AP
,0);this.J(this.A$,0);this.KP.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.KP._Done();this.UC._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.KP._ReInit(
);this.UC._ReInit();this.AP._ReInit();this.A$._ReInit();this.KP.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AGS)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AT_={AUR:0,Init:function(aArg){},AOJ:function(){return A._GetAutoObject(A.Device.
Helper).Aqn(this.AUR);},AOL:function(){return this.AOJ()+(this.Mw*86400);},Bnu:function(
E){if(this.AUR===E)return;this.AUR=E;A.pe([this,this.WF],this);},_Init:function(
aArg){C.Ahx._Init.call(this,aArg);this.__proto__=C.AT_;this.Bc.H(BqS);this.Bnr(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Du:function(){if(this.K&&this.K.Du)return this.K.
Du.apply(this,arguments);else return C.FactoryResetScope.Buv.apply(this,arguments
);},Buv:function(){return 2;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.FactoryResetScopeToString.BS(this.C7(aIndex));},_Init:function(aArg
){C.Cm._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.Cb.
Set(0,0);this.Cb.Set(1,1);var J3=this._variants();if(J3){this.K={};J3._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Cm;this.FactoryResetScopeToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Bgy:false,Init:function(
aArg){this.Bgy=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Ev:function(
G){if(this.BdF){A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).An);if(this.Bgy)A._GetAutoObject(A.Device.Device).A3(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A3(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Ev.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.ASa={Wx:function(G){this.Agt();A._GetAutoObject(C.BR).Tv(A.aaR(A.acf.Settings
),[this,this.A3x]);A._GetAutoObject(C.BR).Fy();this.AL6();A._GetAutoObject(C.BR).
Mh(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.
BR).Mh(A.aaR(A.acf.ARq)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(
6);},DE:function(G){},Abq:function(){return C.Aqs;},Abr:function(){return C.AqZ;
},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).ACZ());},HO:function(G){C.QB.HO.call(this,G);if(this.Akf()===false){this.
N.Cs(A.aaL(A.ach.Avv));this.N.Cg=[this,this.ANW];this.N.FE(A.jV);}this.N.OO(false
);this.N.OP(false);},Agf:function(){A._GetAutoObject(C.A9).Cd(47);},A3x:function(
G){A._GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A9).Cd(89);},_Init:
function(aArg){C.QB._Init.call(this,aArg);this.__proto__=C.ASa;this.Dr(C.ADe);this.
Dj(A.aaR(A.acf.A7S));this.ATd(A._GetAutoObject(C.Av5));},_ReInit:function(){C.QB.
_ReInit.call(this);this.Dj(A.aaR(A.acf.A7S));},_className:"Application::NoTransponderListScreen"
};C.AR$={_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AR$;this.
KV.Ar(false);this.KV.Aj(false);this.KV.Z(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ADe={DX:function(G){C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.
Converter).AdX(8));},_Init:function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=
C.ADe;},_className:"Application::HeaderNoTransponderListFilter"};C.ABN={AuP:null
,Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuP.BS(aIndex
);},_Init:function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuP={I:this},0);this.__proto__=C.ABN;},_Done:function(){this.__proto__=
C.Gd;this.AuP._Done();C.Gd._Done.call(this);},_ReInit:function(){C.Gd._ReInit.call(
this);this.AuP._ReInit();},_Mark:function(D){var B;C.Gd._Mark.call(this,D);if((B=
this.AuP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AL1={Co:null,Ad0:null,Init:function(aArg){this.Bb(this.Co);},Lm:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaE];this.BP.Cg=null;
this.BP.Cl=[this,this.A2_];this.BP.CV(A.jV);this.BP.Cs(null);this.BP.C1(A.aaL(A.
ach.Aex));}return this.BP;},AAu:function(G){var Aa=(C.Aji.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad0)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$3);},_Init:function(aArg){C.Fr._Init.call(this,aArg);C.Aji._Init.call(this.
Co={I:this},0);C.Aji._Init.call(this.Ad0={I:this},0);this.__proto__=C.AL1;this.H(
Rn);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(IV);this.Co.T(A.aaR(A.acf.
AEa));this.Ad0.H(Qa);this.Ad0.T(A.aaR(A.acf.Tu));this.J(this.Co,0);this.J(this.Ad0
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAu];this.Ad0.AR=[this,this.
AAu];this.Init(aArg);},_Done:function(){this.__proto__=C.Fr;this.Co._Done();this.
Ad0._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.
Co._ReInit();this.Ad0._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AEa));this.Ad0.T(A.aaR(A.acf.Tu));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BFK={Undefined:0,BFI:1,BFJ:2,IdScanned:3,BEE:4,BDK:5,BEo:6};C.AMc={A$i:function(
){A._GetAutoObject(A.Device.Device).A3(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Bfa]);},_Init:function(aArg){C.AuE._Init.call(
this,aArg);this.__proto__=C.AMc;this.Gd.At(1);this.ATj(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aer={VU:null,VV:null,VX:null,Ag0:null,Ag1:null,Ag2:null,CE:null,Cg:null,Cl:null
,AnZ:A.jV,An0:A.jV,An1:A.jV,Aq6:0,Aq7:0,Aq8:0,Ahi:0,ZA:false,Zz:false,Asm:false,
AsB:false,AsA:false,Ajy:function(Fg){this.CE=Fg.CE;this.Cg=Fg.Cg;this.Cl=Fg.Cl;this.
AnZ=Fg.AnZ;this.An0=Fg.An0;this.An1=Fg.An1;this.Ahi=Fg.Ahi;this.VU=Fg.VU;this.VV=
Fg.VV;this.VX=Fg.VX;this.Ag0=Fg.Ag0;this.Ag1=Fg.Ag1;this.Ag2=Fg.Ag2;this.AsA=Fg.
AsA;this.AsB=Fg.AsB;this.Asm=Fg.Asm;this.Zz=Fg.Zz;this.ZA=Fg.ZA;this.Aq6=Fg.Aq6;
this.Aq7=Fg.Aq7;this.Aq8=Fg.Aq8;},AkO:function(Fg){Fg.CE=this.CE;Fg.Cg=this.Cg;Fg.
Cl=this.Cl;Fg.Hx(this.AnZ);Fg.FE(this.An0);Fg.CV(this.An1);Fg.AFf(this.Ahi);Fg.AE8(
this.VU);Fg.ArN(this.VV);Fg.Anw(this.VX);Fg.C1(this.Ag0);Fg.Cs(this.Ag1);Fg.C2(this.
Ag2);Fg.OO(this.AsA);Fg.OP(this.AsB);Fg.Asm=this.Asm;Fg.Zz=this.Zz;Fg.ZA=this.ZA;
Fg.BmB(this.Aq6);Fg.AS9(this.Aq7);Fg.A9Y(this.Aq8);},_Init:function(aArg){this.__proto__=
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
){C.Asx._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.ADc);},_className:"Application::NewAnimalSetTransponderScreen"};C.C6={Aba:null
,CountryToString:null,Du:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lu(aIndex);},DZ:function(A_){return A_;
},H3:function(){return 39;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.
Aba)(F=this.Aba,F[2].call(F[0],E));},A1x:function(G){var F;if(!!this.Aba)this.Q=(
F=this.Aba,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_,this.B$],0);},AE1:
function(E){if(A.aaZ(this.Aba,E))return;if(!!this.Aba)A.z$([this,this.A1x],this.
Aba,0);this.Aba=E;if(!!this.Aba)A.zX([this,this.A1x],this.Aba,0);A.pe([this,this.
A1x],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C6;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Aba)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OZ={AC:null,Q:null,Background:null,Ip:null,Io:null,M0:
0,AM:0,Gp:0,F$:0,Agb:function(G){this.Kc(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(IB){this.Background.
L(A.jb.AV);this.Dk(256);}else{this.Background.L(this.M0);this.Dk(256);}},Aga:function(
G){this.J9(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3v],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3v],E,0);if(!!E)A.pe([this
,this.A3v],this);},CT:function(E){if(this.M0===E)return;this.M0=E;this.Am();},Kc:
function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J9:function(
G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Gp)E=this.F$;if(E>this.F$)E=this.Gp;if(this.AM===E)return;this.AM=E;
this.Am();},Ga:function(E){if(this.Gp===E)return;this.Gp=E;this.Am();},EU:function(
E){if(this.F$===E)return;this.F$=E;this.Am();},C3:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},At:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},A3v:function(G){var F;if(!!this.
AC){this.Ga(0);this.EU(this.AC.H3());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BK._Init.call(this.Ip={
I:this},0);A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.OZ;this.H(A$4
);this.Background.H(Atc);this.Ip.Filter=4;this.Io.Filter=5;this.M0=A.jb.CJ;this.
J(this.Background,0);this.Ip.BL=[this,this.Agb];this.Ip.D1=[this,this.Agb];this.
Io.BL=[this,this.Aga];this.Io.D1=[this,this.Aga];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Ip._Done();this.Io._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Ip._ReInit();this.Io._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RS={A1p:A.jV,Ai:function(
Ae){C.Fz.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5r));this.Kv(this.A1p);},Cf:function(
G){C.Fz.Cf.call(this,G);var Alz=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Alz)this.A1p=W$;else this.A1p=A._GetAutoObject(A.acj.KK).AjK(Alz);this.Am();
},_Init:function(aArg){C.Fz._Init.call(this,aArg);this.__proto__=C.RS;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RT={A2u:0,Ai:function(Ae){C.Fz.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARo));if(this.A2u>0)this.Kv(this.A2u.toFixed());else
this.Kv(A.aaR(A.acf.Unknown));},Cf:function(G){C.Fz.Cf.call(this,G);this.A2u=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fz._Init.call(
this,aArg);this.__proto__=C.RT;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Du:function(){return 5;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gk:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BS(aIndex);},DZ:function(A_){return A_;},H3:function(){return 4;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Akv(E);},A1Q:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B_,
this.B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1Q],[B=this.Animal,B.ASs,B.Akv],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1Q],[B=this.Animal,B.ASs,B.Akv],0);A.pe([this,this.A1Q],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Du:function(){return 99;},C7:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BS(aIndex);},DZ:function(A_){return A_;
},H3:function(){return 98;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal
)this.Animal.NZ(E);},A1n:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B_,this.B$],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1n],[B=this.Animal,B.Av9,B.NZ],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1n],[B=this.Animal,B.Av9,B.NZ],0);A.pe([
this,this.A1n],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARJ={V7:null,YH:null,AeK:null,Init:function(
aArg){this.Bb(this.V7);},Ads:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YH)this.Bye();else if(Aa===this.V7)this.BA0(this);else throw new
Error(Ayf);A._GetAutoObject(A.Device.Device).Dw(0);},BA0:function(G){var B;var F;
var Vk=(C.Ams.isPrototypeOf(B=(F=A._GetAutoObject(C.A9).Q,F[1].call(F[0])))?B:null
);if(!Vk){A.ab5("%s",BqT);return;}Vk.AKz(this);},Bye:function(){A._GetAutoObject(
A.Device.Helper).W.AGA(true);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mo._Init.call(this.V7={I:this},0);C.Mo._Init.call(this.YH={
I:this},0);C.VO._Init.call(this.AeK={I:this},0);this.__proto__=C.ARJ;var B;this.
H(AcN);this.V7.H(Qa);this.V7.Ar(true);this.V7.T(A.aaR(A.acf.A_1));this.V7.Bi(true
);this.YH.H(IV);this.YH.Ar(true);this.YH.T(A.aaR(A.acf.A4P));this.YH.Bi(true);this.
AeK.H(BD);this.AeK.T(A.aaR(A.acf.ACN));this.AeK.Bi(true);this.J(this.V7,0);this.
J(this.YH,0);this.J(this.AeK,0);this.V7.AR=[this,this.Ads];this.YH.AR=[this,this.
Ads];this.AeK.ASX([B=A._GetAutoObject(A.Device.Device),B.Aru,B.Ate]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V7._Done();this.YH._Done(
);this.AeK._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V7._ReInit();this.YH._ReInit();this.AeK._ReInit();this.V7.
T(A.aaR(A.acf.A_1));this.YH.T(A.aaR(A.acf.A4P));this.AeK.T(A.aaR(A.acf.ACN));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VO={
Ai:function(Ae){C.T$.Ai.call(this,Ae);var FS=A.jb.CJ;var GX=A.jb.Text;if(this.Hk
){FS=A.jb.Text;GX=A.jb.Bm;}if(!this.LF){this.Background.L(FS);this.V.L(A.jb.Am1);
}else if(this.Qs){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KF){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.
L(GX);}if(this.AmA){this.Mm.Cw(1);this.Mm.L(A.jb.H8);}else{this.Mm.Cw(0);this.Mm.
L(A.jb.Bm);}},_Init:function(aArg){C.T$._Init.call(this,aArg);this.__proto__=C.VO;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AvY={C8:null,A1:null,AF:
null,Akg:null,QW:null,EM:null,AR1:Lv,Bl:function(aSize){C.Co.Bl.call(this,aSize);
var FS=A.jb.CJ;var GX=A.jb.Text;if(this.Hk){FS=A.jb.Bm;GX=A.jb.Text;}this.Background.
L(FS);this.V.L(GX);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,Ct;C.Co.Ai.call(this
,Ae);this.Akg.L(this.V.AQ);this.QW.L(this.V.AQ);this.QW.R(BqU);this.T(((this.AR1+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak4(840003123456789).toFixed(
));if(!!this.A1&&!!this.AF){var A2A=this.QW.Aff([(this.QW.String.length-(F=this.
AF,F[1].call(F[0])))-(Ct=this.A1,Ct[1].call(Ct[0])),0]);var A3V=this.QW.Aff([this.
QW.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABf=this.QW.Db();this.EM.H([
A2A[0]-1,ABf[1],A3V[0]+1,ABf[3]]);}else this.EM.H(this.QW.Db());},DB:function(E){
if(this.C8===E)return;this.C8=E;this.Akg.Ax(E);},OM:function(E){if(A.aaZ(this.A1
,E))return;if(!!this.A1)A.z$([this,this.AaD],this.A1,0);this.A1=E;if(!!E)A.zX([this
,this.AaD],E,0);if(!!E)A.pe([this,this.AaD],this);},PQ:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaF],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaF],E,0);if(!!E)A.pe([this,this.AaF],this);},AaF:function(G){this.Am(
);},AaD:function(G){this.Am();},ArZ:function(E){if(this.AR1===E)return;this.AR1=
E;this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akg={I:this},0);A.acg.Text._Init.call(this.QW={I:this},0);A.acg.BU._Init.call(
this.EM={I:this},0);this.__proto__=C.AvY;this.H(KY);this.V.A6(0x11);this.Akg.H(O3
);this.QW.H(BqV);this.EM.H(BqW);this.EM.Nh(2);this.EM.L(A.jb.E1);this.J(this.Akg
,0);this.J(this.QW,0);this.J(this.EM,0);this.QW.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Akg._Done();this.QW._Done();this.EM._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Akg._ReInit();this.
QW._ReInit();this.EM._ReInit();this.QW.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AT5:0,Init:
function(aArg){var B;A.zX([this,this.Beu],[B=A._GetAutoObject(A.Device.Device),B.
AEs,B.AIJ],0);A.pe([this,this.Beu],this);},HO:function(G){C.Ty.HO.call(this,G);if(
this.AjO)this.N.Cs(A.aaL(A.ach.AD));else this.N.Cs(A.aaL(A.ach.ANe));this.N.C2(A.
aaL(A.ach.Options));this.N.FE(A.jV);this.N.CV(A.jV);this.N.Cg=[this,this.A_K];this.
N.Cl=[this,this.Wx];this.N.ArN(A.aaL(A.fl.Ak));this.N.Anw(A.aaL(A.fl.Ak));},MV:function(
G){this.BeQ(this);},On:function(G){this.BAS(this);},AdP:function(Aie,Aif,Bxj){A.
_GetAutoObject(C.BR).ABF(Aie,Aif,[this,this.A8R,this.ATm],Bxj);},Wx:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjO){A._GetAutoObject(C.BR).
Tv(A.aaR(A.acf.BhV),[this,this.BnO]);A._GetAutoObject(C.BR).Fy();}this.AdP(A.aaR(
A.acf.Rating),[this,this.ATK],3);this.AdP(A.aaR(A.acf.Aft),[this,this.ATM],2);this.
AdP(A.aaR(A.acf.Temperature),[this,this.ATL],1);this.AdP(A.aaR(A.acf.AdS),[this,
this.BnL],0);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Mh(A.aaR(A.acf.BhZ
));A._GetAutoObject(A.Device.Device).Dw(6);},ATm:function(E){if(this.AT5===E)return;
this.AT5=E;A.abo([this,this.A8R,this.ATm],0);},Beu:function(G){this.ATm(A._GetAutoObject(
A.Device.Device).D9);},A8R:function(){return this.AT5;},_Init:function(aArg){C.Ty.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vx:null
,Init:function(aArg){var B;A.zX([this,this.Af8],[B=A._GetAutoObject(A.Device.Device
).An,B.Fo,B.Fs],0);A.pe([this,this.BgD],this);A.pe([this,this.Q8],this);},CC:function(
G){C.Ty.CC.call(this,G);A.pe([this,this.BgI],this);},AGG:function(G){C.Ty.AGG.call(
this,G);if(!!this.Le)this.AhA(this.Le,this.Vx);},HO:function(G){C.Ty.HO.call(this
,G);this.N.Cs(A.aaL(A.ach.AQY));this.N.C2(A.aaL(A.ach.AQZ));if(this.AjO)this.N.AS9(
0);else this.N.AS9(1);this.N.A9Y(A._GetAutoObject(A.Device.Converter).Bg7(A._GetAutoObject(
A.Device.Device).D9));this.N.FE(A.jV);this.N.CV(A.jV);this.N.Cg=[this,this.BlB];
this.N.Cl=[this,this.BnQ];this.N.ArN(A.aaL(A.fl.Ak));this.N.Anw(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QI()){this.N.I8.Dk(100);this.N.Cg=null;
}else this.N.I8.Dk(255);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.Ld.
Dk(100);this.N.Cl=null;}else this.N.Ld.Dk(255);if(A._GetAutoObject(A.Device.Device
).An.B9()<=1){this.N.TY.Dk(100);this.N.TZ.Dk(100);}else{this.N.TY.Dk(255);this.N.
TZ.Dk(255);}},MV:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;
var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB+1;if(LB>=A._GetAutoObject(A.
Device.Device).An.B9())LB=0;A._GetAutoObject(A.Device.Helper).G7(LB);},On:function(
G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;var LB=A._GetAutoObject(
A.Device.Helper).W.CL;LB=LB-1;if(LB<0)LB=A._GetAutoObject(A.Device.Device).An.B9(
)-1;A._GetAutoObject(A.Device.Helper).G7(LB);},Af7:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A9).Cd(94);},BlB:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},BnQ:function(G){this.BeQ(this);},Q8:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).Mr());A.pe([this,this.BgI
],this);},BgD:function(G){if(!A._GetAutoObject(A.Device.Device).An.B9()){this.Vx.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QI()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.Vx.R(A.aaR(A.acf.AEi));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).AC0(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Vx.R(A.aaR(A.acf.AN6));else this.Vx.R(A.aaR(
A.acf.AN5));}else this.Vx.R(A.aaR(A.acf.AR8));}else this.Vx.Z(false);},BgI:function(
G){var BBR=A._GetAutoObject(A.Device.Helper).W.Id;var A3Y=A._GetAutoObject(A.Device.
Device).An.LS(0,BBR);if(!A._GetAutoObject(A.Device.Device).An.B9())A._GetAutoObject(
A.Device.Helper).G7(-1);else if(A3Y<0)A._GetAutoObject(A.Device.Helper).G7(0);},
Af8:function(G){this.BgD(this);this.HO(this);},_Init:function(aArg){C.Ty._Init.call(
this,aArg);C.AkP._Init.call(this.Vx={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.APt);this.Vx.H(Ff);this.J(this.Vx,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ty;this.Vx._Done();C.Ty._Done.call(this);},_ReInit:function(){
C.Ty._ReInit.call(this);this.Vx._ReInit();},_Mark:function(D){var B;C.Ty._Mark.call(
this,D);if((B=this.Vx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMr={QQ:null,V8:null,AbE:null,YK:null,Init:function(aArg){var B;var F;this.Bb(
this.QQ);if(!!A._GetAutoObject(C.A9).Q){var Vk=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A9).Q,F[1].call(F[0])))?B:null);if(!Vk){A.ab5("%s",AZO);
return;}else{if(Vk.AjO)this.QQ.T(A.aaR(A.acf.Bg));else this.QQ.T(A.aaR(A.acf.ET)
);var Azu=A._GetAutoObject(A.Device.Device).An.Filter;if(!Azu||A._GetAutoObject(
A.Device.Helper).Arc(Azu))this.YK.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).An.B9()){this.V8.Ar(false);this.QQ.Ar(false);}}}},Ads:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbE)A._GetAutoObject(C.A9).Cd(9);else if(Aa===this.V8)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QQ)this.BCl();else if(Aa===this.YK)this.
A1v();else throw new Error(Ayf);},BCl:function(){var B;var F;var Vk=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A9).Q,F[1].call(F[0])))?B:null);if(!Vk){A.
ab5("%s",AZO);return;}Vk.A_K(this);},A1v:function(){var B;var F;var Vk=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A9).Q,F[1].call(F[0])))?B:null);if(!Vk){A.
ab5("%s",AZO);return;}Vk.Q8(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mo._Init.call(this.QQ={I:this},0);C.Mo._Init.call(this.V8={I:this},
0);C.Mo._Init.call(this.AbE={I:this},0);C.Mo._Init.call(this.YK={I:this},0);this.
__proto__=C.AMr;this.H(AfB);this.QQ.H(Aab);this.QQ.Ar(true);this.QQ.T(A.aaR(A.acf.
ET));this.QQ.Bi(true);this.V8.H(Qa);this.V8.Ar(true);this.V8.T(A.aaR(A.acf.AUt));
this.V8.Bi(true);this.AbE.H(IV);this.AbE.T(A.aaR(A.acf.AkR));this.AbE.Bi(true);this.
YK.H(BD);this.YK.T(A.aaR(A.acf.AB_));this.YK.Bi(true);this.J(this.QQ,0);this.J(this.
V8,0);this.J(this.AbE,0);this.J(this.YK,0);this.QQ.AR=[this,this.Ads];this.V8.AR=[
this,this.Ads];this.AbE.AR=[this,this.Ads];this.YK.AR=[this,this.Ads];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QQ._Done();this.V8._Done(
);this.AbE._Done();this.YK._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QQ._ReInit();this.V8._ReInit();this.AbE.
_ReInit();this.YK._ReInit();this.QQ.T(A.aaR(A.acf.ET));this.V8.T(A.aaR(A.acf.AUt
));this.AbE.T(A.aaR(A.acf.AkR));this.YK.T(A.aaR(A.acf.AB_));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I9={T0:null,Ez:null,Yh:null,Background:null,Ap:null,Ip:null,Io:null,M0:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var He=((Ae&0x10)===0x10
);var IB=((Ae&0x40)===0x40);if(IB){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.Dk(256);}else if(He){this.Background.L(this.M0);this.Ap.L(A.jb.Text);this.Dk(
256);}else{this.Background.L(this.M0);this.Ap.L(A.jb.Text);this.Dk(128);}if(!this.
AM)this.Ap.Cw(0);else if(this.AM>0){if(A.aaZ(this.T0,[B=A._GetAutoObject(A.Device.
Device),B.Awh,B.AyM]))this.Ap.Cw(2);else if(A.aaZ(this.T0,[B=A._GetAutoObject(A.
Device.Device),B.Awg,B.AyL]))this.Ap.Cw(3);else if(!!this.Yh&&((F=this.Yh,F[1].call(
F[0]))===1))this.Ap.Cw(1);else this.Ap.Cw(0);}else if(A.aaZ(this.T0,[B=A._GetAutoObject(
A.Device.Device),B.Awh,B.AyM]))this.Ap.Cw(6);else if(A.aaZ(this.T0,[B=A._GetAutoObject(
A.Device.Device),B.Awg,B.AyL]))this.Ap.Cw(7);else if(!!this.Yh&&((F=this.Yh,F[1].
call(F[0]))===1))this.Ap.Cw(5);else this.Ap.Cw(4);},Agb:function(G){this.Kc(this
);},Aga:function(G){this.J9(this);},Kc:function(G){this.Bx(1);},J9:function(G){this.
Bx(-1);},BmL:function(E){if(A.aaZ(this.T0,E))return;if(!!this.T0)A.z$([this,this.
A3e],this.T0,0);this.T0=E;if(!!E)A.zX([this,this.A3e],this.T0,0);A.pe([this,this.
A3e],this);},Ul:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.
Af$],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.Af$],this.Ez,0);if(!!E)A.pe([this
,this.Af$],this);},A3e:function(G){var F;if(!!this.T0)this.Bx((F=this.T0,F[1].call(
F[0])));},Af$:function(G){A.pe([this,this.BCy],this);},CT:function(E){if(this.M0===
E)return;this.M0=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T0)(F=this.T0,F[2].call(F[0],E));this.Am();A.abo([this,this.Ug,this.
Bx],0);},A9O:function(E){if(A.aaZ(this.Yh,E))return;if(!!this.Yh)A.z$([this,this.
Af$],this.Yh,0);this.Yh=E;if(!!E)A.zX([this,this.Af$],this.Yh,0);if(!!E)A.pe([this
,this.Af$],this);},BCy:function(G){var F,Ct;if(!this.Yh||!this.Ez)return;this.BmL(
A._GetAutoObject(A.Device.Helper).Bdi((F=this.Yh,F[1].call(F[0])),(Ct=this.Ez,Ct[
1].call(Ct[0]))));this.Am();},Ug:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BK._Init.call(this.Ip={I:this},0);
A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.I9;this.H(AIB);this.Background.
AZ(0x3F);this.Background.H(AIB);this.Ap.AZ(0x3C);this.Ap.H(AIB);this.Ip.Filter=4;
this.Io.Filter=5;this.M0=A.jb.CJ;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AUT));this.Ip.BL=[this,this.Agb];this.Io.BL=[this,this.Aga];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Ip._Done();this.Io._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Ip._ReInit(
);this.Io._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AL0={Wx:function(G){var B;var F;this.Agt();if(!!A._GetAutoObject(A.Device.Helper
).AOH((F=this.E3,F[1].call(F[0])),0,true))this.Auz(A.aaR(A.acf.A6U),[this,this.BnR
],[B=A._GetAutoObject(A.Device.Device),B.A7_,B.BaO]);else A._GetAutoObject(C.BR).
AaS(A.aaR(A.acf.A6U));A._GetAutoObject(C.BR).Fy();this.I2(A.aaR(A.acf.LinkTransponder
),[this,this.Bm2],8);this.I2(A.aaR(A.acf.Tu),[this,this.Aks],9);this.I2(A.aaR(A.
acf.A$S),[this,this.BnD],10);this.I2(A.aaR(A.acf.AGc),[this,this.ATr],3);this.I2(
A.aaR(A.acf.AnY),[this,this.AwS],2);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(
C.BR).Mh(A.aaR(A.acf.Ane)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abq:function(){return C.Aqs;},Abr:function(){return C.AqZ;
},Q8:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6v((F=this.E3,F[1].call(F[0]))));},HO:function(G){var F;C.GJ.HO.
call(this,G);if(this.Akf()===false){this.N.Cs(A._GetAutoObject(A.Device.Converter
).AuG((F=this.E3,F[1].call(F[0]))));this.N.Cg=[this,this.Alh];this.N.FE(A.jV);}this.
N.OO(false);this.N.OP(false);},Agf:function(){A._GetAutoObject(C.A9).Cd(52);},A3j:
function(G){C.GJ.A3j.call(this,G);A.pe([this,this.A0o],this);},BnR:function(G){A.
_GetAutoObject(A.Device.Device).Awn(!A._GetAutoObject(A.Device.Device).Aqc);this.
An6(this);},An6:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E$();A._GetAutoObject(A.Device.Helper).Boo(Be);if(A._GetAutoObject(A.Device.Device
).Aqc){var A2c=A._GetAutoObject(A.Device.Helper).AOH((F=this.E3,F[1].call(F[0]))
,21600,true);Be.CW(A2c);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AL0;var B;this.Dj(A.aaR(A.acf.
Av3));this.AwN([B=A._GetAutoObject(A.Device.Device),B.A79,B.BaN]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dj(A.aaR(A.acf.Av3));},_className:"Application::ActionListScreen"
};C.ALZ={_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.ALZ;},
_className:"Application::ActionListFilterScreen"};C.APt={IM:null,IS:null,Bc:null
,MC:A.jV,Init:function(aArg){var B;A.zX([this,this.Nn],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8V,B.A_i],0);A.zX([this,this.Nn],[B=A._GetAutoObject(A.Device.Device
).An,B.Fo,B.Fs],0);},De:function(E){C.IK.De.call(this,E);this.IS.L(E);},DX:function(
G){C.IK.DX.call(this,G);var Azu=A._GetAutoObject(A.Device.Device).An.Filter;if(!
Azu||A._GetAutoObject(A.Device.Helper).Arc(Azu))this.IM.Z(false);else this.IM.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqW())this.AwZ(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+A$5)+A._GetAutoObject(A.Device.Device).An.B9().
toFixed());else this.AwZ(A$6);},AwZ:function(E){if(this.MC===E)return;this.MC=E;
this.IS.R(E);},_Init:function(aArg){C.IK._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IM={I:this},0);A.acg.Text._Init.call(this.IS={I:this},0);A.acg.C5._Init.call(
this.Bc={I:this},0);this.__proto__=C.APt;this.HP.H(BqX);this.DS.H(BqY);this.IM.H(
BqZ);this.IM.L(A.jb.Text);this.IS.H(A$7);this.IS.Hm(2);this.IS.KR(true);this.IS.
A6(0x12);this.IS.R(A$8);this.Bc.DC(Ayz);this.Bc.DM(AyA);this.Bc.L(A.jb.Bc);this.
J(this.IM,0);this.J(this.IS,0);this.J(this.Bc,0);this.IM.Ax(A.aaL(A.ach.Aez));this.
IS.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IK;this.
IM._Done();this.IS._Done();this.Bc._Done();C.IK._Done.call(this);},_ReInit:function(
){C.IK._ReInit.call(this);this.IM._ReInit();this.IS._ReInit();this.Bc._ReInit();
this.IS.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IK._Mark.call(this,D);if((
B=this.IM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsH={Text:null,Bl:function(aSize){C.OZ.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OZ.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(W$);else this.Text.R(this.AC.Gk((F=this.Q,F[1].call(F[0]
))));var IB=((Ae&0x40)===0x40);if(IB)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OZ._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsH;this.Text.R(Ro);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.OZ;this.Text._Done();C.OZ.
_Done.call(this);},_ReInit:function(){C.OZ._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.OZ._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Aq$={C8:null,Bl:function(aSize){C.OZ.Bl.call(this,aSize);this.C8.H(A.abK(this.
C8.M,aSize));},Ai:function(Ae){var B;var F;C.OZ.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C8.Ax(null);else{this.C8.Ax(this.AC.ACV(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C8.Cw(this.AC.ACX(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var IB=((
Ae&0x40)===0x40);if(IB)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OZ._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aq$;this.H(AIB);this.C8.H(A$4);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OZ;this.C8._Done();C.OZ._Done.call(this);},_ReInit:function(){C.OZ._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OZ._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuZ={VQ:null,DirectionOfCountingToString:null,Aef:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return aIndex;
},Gk:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return A.jV;return this.
DirectionOfCountingToString.BS(aIndex);},DZ:function(A_){return A_;},H3:function(
){return this.Du()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.VQ)(F=
this.VQ,F[2].call(F[0],E));},ACV:function(aIndex){if((aIndex<0)||(aIndex>=this.Du(
)))return null;return this.Aef.AsI(aIndex);},ACX:function(aIndex){if((aIndex<0)||(
aIndex>=this.Du()))return-1;return this.Aef.AsJ(aIndex);},A1J:function(G){var F;
if(!!this.VQ)this.Q=(F=this.VQ,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.B$],0);},AeZ:function(E){if(A.aaZ(this.VQ,E))return;if(!!this.VQ)A.z$([this
,this.A1J],this.VQ,0);this.VQ=E;if(!!this.VQ)A.zX([this,this.A1J],this.VQ,0);A.pe([
this,this.A1J],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aef._Init.call(this.Aef={I:this},0);this.__proto__=C.AuZ;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aef._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aef._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aef)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMj={Ht:null,Ez:null,AnimalIdGenerationMethodToString:
null,AdW:null,Du:function(){return 4;},C7:function(aIndex){var F;var A_=-1;if((aIndex<
0)||(aIndex>=this.Du()))return-1;switch(aIndex){case 0:A_=0;break;case 1:A_=1;break;
case 2:A_=this.Bzo((F=this.Ez,F[1].call(F[0])));break;case 3:A_=5;break;default:
throw new Error(Bq0+aIndex.toFixed());}return A_;},Gk:function(aIndex){if((aIndex<
0)||(aIndex>=this.Du()))return A.jV;return this.AnimalIdGenerationMethodToString.
BS(this.C7(aIndex));},DZ:function(A_){var aIndex=-1;switch(A_){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bq1+A_.toFixed());}return aIndex;},H3:function(){return this.
Du()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.Ht)(F=this.Ht,F[2].
call(F[0],E));},ACV:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;
return this.AdW.AsI(this.C7(aIndex));},ACX:function(aIndex){if((aIndex<0)||(aIndex>=
this.Du()))return-1;return this.AdW.AsJ(this.C7(aIndex));},A1d:function(G){var F;
if(!!this.Ht)this.Q=(F=this.Ht,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.B$],0);},BlJ:function(E){if(A.aaZ(this.Ht,E))return;if(!!this.Ht)A.z$([this
,this.A1d],this.Ht,0);this.Ht=E;if(!!this.Ht)A.zX([this,this.A1d],this.Ht,0);A.pe([
this,this.A1d],this);},Ul:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.
z$([this,this.Af$],this.Ez,0);this.Ez=E;if(!!this.Ez)A.zX([this,this.Af$],this.Ez
,0);A.pe([this,this.Af$],this);},Af$:function(G){A.pe([this,this.Byg],this);},Bzo:
function(L4){var Rq=0;switch(L4){case 0:Rq=2;break;case 1:Rq=3;break;case 2:Rq=4;
break;default:throw new Error(Bq2+L4.toFixed());}return Rq;},Byg:function(G){var
Beg=this.C7(this.DZ(this.Q));if(this.Q!==Beg)this.At(Beg);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdW._Init.call(this.
AdW={I:this},0);this.__proto__=C.AMj;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdW._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdW._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Ht)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGC={FM:null,AaY:null,Q:null,Fm:null,Fb:null,HG:null,Wp:null,AW:null,HZ:null
,Km:null,A8:0,AM:0,Alr:0,Init:function(aArg){var B;A.zX([this,this.Bet],[B=A._GetAutoObject(
A.Device.Device),B.Ann,B.Aoy],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hk){this.AW.FO(A.jb.CJ);this.HG.CT(A.jb.CJ);this.Wp.CT(A.jb.CJ);
this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CS);this.HG.
CT(A.jb.CS);this.Wp.CT(A.jb.CS);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}
}else{if(this.Hk){this.AW.FO(A.jb.CJ);this.HG.CT(A.jb.CJ);this.Wp.CT(A.jb.CJ);}else{
this.AW.FO(A.jb.CS);this.HG.CT(A.jb.CS);this.Wp.CT(A.jb.CS);}this.Bb(null);}},I0:
function(G){C.Eg.I0.call(this,G);if(!this.A8)this.FV(this);else this.Hd(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;
default:this.FM.AkO((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ew(1);},Hd:
function(G){this.Ew(0);},Ew:function(EN){var F;if(!this.A8&&!!this.N)this.FM.Ajy((
F=this.N,F[1].call(F[0])));this.A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>1)this.
A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{if(this.AW.A8r())this.Bb(
this.AW);else this.Bb(this.Wp);if(!this.AM)this.AW.SN(2);else this.AW.SN(7);}break;
default:throw new Error(Atd+this.A8.toFixed());}this.DJ(this);this.Am();},At:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},C3:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ug,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},On:function(G){this.AA9(2);},MV:function(G){this.AA9(
7);},AA9:function(Gz){var B;var Azv=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azv){var AAl=(A.Core.P.isPrototypeOf(B=this.QH(Azv,Gz,0x15))?B:null);if(!!AAl){
this.Bb(AAl);return true;}}return false;},AoZ:function(G){A.pe([this,this.Bet],this
);},A39:function(G){var B;var F;if(!this.HZ.Ht){this.Km.AeZ(null);return;}switch((
F=this.HZ.Ht,F[1].call(F[0]))){case 0:case 1:this.Km.AeZ(null);break;case 3:this.
Km.AeZ([B=A._GetAutoObject(A.Device.Device),B.ASq,B.AZ7]);break;case 2:this.Km.AeZ([
B=A._GetAutoObject(A.Device.Device),B.ASr,B.AZ8]);break;case 4:case 5:this.Km.AeZ([
B=A._GetAutoObject(A.Device.Device),B.AEx,B.AIN]);break;default:throw new Error(
Bq3+(F=this.HZ.Ht,F[1].call(F[0])).toFixed());}},Bet:function(G){var F;if(!this.
HZ.Ht)return;A.pe([this,this.A39],this);var AtT=false;switch((F=this.HZ.Ht,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtT=true;this.AW.A_C(-1);}break;case 0:
case 1:{AtT=false;this.AW.A_C(A._GetAutoObject(A.Device.Device).A1);}break;default:
throw new Error(Ayr+(F=this.HZ.Ht,F[1].call(F[0])).toFixed());}this.AW.Ar(AtT);this.
HG.Ar(AtT);this.HG.Z(AtT);if(((F=this.HZ.Ht,F[1].call(F[0]))!==this.Alr)||(AtT===
false)){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMh((F=this.HZ.
Ht,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bjt((F=this.HZ.Ht,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kt(A._GetAutoObject(A.Device.Device).A1);else this.AW.Kt(0);this.Alr=(
F=this.HZ.Ht,F[1].call(F[0]));},A9q:function(E){var B;if(this.AaY===E)return;if(
!!this.AaY){A.z$([this,this.AoZ],[B=this.AaY,B.Wv,B.JT],0);A.z$([this,this.AoZ],[
B=this.AaY,B.Anr,B.Ne],0);A.z$([this,this.AoZ],[B=this.AaY,B.Ary,B.PT],0);this.HZ.
Ul(null);}this.AaY=E;if(!!E){A.zX([this,this.AoZ],[B=this.AaY,B.Wv,B.JT],0);A.zX([
this,this.AoZ],[B=this.AaY,B.Anr,B.Ne],0);A.zX([this,this.AoZ],[B=this.AaY,B.Ary
,B.PT],0);this.HZ.Ul([B=this.AaY,B.Wv,B.JT]);}if(!!E)A.pe([this,this.AoZ],this);
},Ug:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={I:this},0
);C.Aq$._Init.call(this.HG={I:this},0);C.Aq$._Init.call(this.Wp={I:this},0);C.AvO.
_Init.call(this.AW={I:this},0);C.AMj._Init.call(this.HZ={I:this},0);C.AuZ._Init.
call(this.Km={I:this},0);this.__proto__=C.AGC;var B;this.H(UW);this.V.Ar(false);
this.V.R(As_);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fb.Filter=7;this.HG.H(Bq4);
this.HG.Ar(false);this.Wp.H(Bq5);this.AW.H(Bq6);this.AW.Ar(false);this.J(this.HG
,0);this.J(this.Wp,0);this.J(this.AW,0);this.FM=A._NewObject(C.Aer,0);this.Fm.BL=[
this,this.On];this.Fb.BL=[this,this.MV];this.HG.CK(this.Km);this.HG.At([B=this.Km
,B.B_,B.B$]);this.Wp.CK(this.HZ);this.Wp.At([B=this.HZ,B.B_,B.B$]);this.AW.At([this
,this.Ug,this.Bx]);this.HZ.BlJ([B=A._GetAutoObject(A.Device.Device),B.Ann,B.Aoy]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fb.
_Done();this.HG._Done();this.Wp._Done();this.AW._Done();this.HZ._Done();this.Km.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fm._ReInit();this.Fb._ReInit();this.HG._ReInit();this.Wp._ReInit();this.AW._ReInit(
);this.HZ._ReInit();this.Km._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaY)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wp)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Km)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G4={AzN:null,Fm:null,Fb:null,G1:null,
F0:null,EM:null,M5:0,AMY:0,AB0:0,Us:0,A$P:-1,AMX:false,Init:function(aArg){A.pe([
this,this.A0B],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
AMX);this.EM.H(A.wC(this.Ym(this.AB0).M,this.Ym((this.AB0+this.AMY)-1).M));},On:
function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var A1s=this.Bf3(2);if(A1s===
false)D5.NH=true;},MV:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var
A1s=this.Bf3(7);if(A1s===false)D5.NH=true;},Bf3:function(Gz){var B;var DV=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DV=this.Bdk(DV,Gz,true);if(!!DV){this.Bb(DV);this.
AzN=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adr:function(
G){A.ab5("%s",Alc);},GW:function(s){this.Adr(s);},FO:function(E){if(this.M5===E)
return;this.M5=E;this.F0.CT(E);this.G1.CT(E);},SN:function(Gz){var B;switch(Gz){
case 2:this.Bb(this.G1);break;case 7:this.Bb(this.F0);break;default:A.ab5("%s%e"
,Bq7,Gz);}this.AzN=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LN:function(G){},A0B:
function(s){this.LN(s);},AEV:function(E){if(this.AMX===E)return;this.AMX=E;this.
Am();},A9w:function(E){if(this.AMY===E)return;this.AMY=E;this.Am();},A9v:function(
E){if(this.AB0===E)return;this.AB0=E;this.Am();},Ym:function(Hz){var B5=null;switch(
Hz){case-1:case 0:B5=this.F0;break;case 1:B5=this.G1;break;default:A.ab5("%s",Ah2
);}return B5;},Kt:function(E){if(this.Us===E)return;this.Us=E;this.Aml();},Aml:function(
){A.ab5("%s",Alc);},Bdk:function(AcZ,Gz,LF){var B;if(!!AcZ){var Be;if(LF)Be=0x11;
else Be=0x0;switch(Gz){case 2:AcZ=(C.DF.isPrototypeOf(B=this.AqK(AcZ,Be))?B:null
);break;case 7:AcZ=(C.DF.isPrototypeOf(B=this.TN(AcZ,Be))?B:null);break;default:
throw new Error(Bq8);}}return AcZ;},A_C:function(E){if(this.A$P===E)return;this.
A$P=E;var DV=this.F0;var A1R;while(!!DV){A1R=!!E;DV.Ar(A1R);DV.Z(A1R);if(DV===this.
AzN)this.Bb(DV);DV=this.Bdk(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.
call(this.Fb={I:this},0);C.DF._Init.call(this.G1={I:this},0);C.DF._Init.call(this.
F0={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.G4;this.
H(Bq9);this.Fm.Filter=6;this.Fb.Filter=7;this.M5=A.jb.CJ;this.G1.H(E7);this.F0.H(
A$9);this.EM.H(Bq_);this.EM.Nh(2);this.EM.L(A.jb.E1);this.J(this.G1,0);this.J(this.
F0,0);this.J(this.EM,0);this.Fm.BL=[this,this.On];this.Fm.D1=[this,this.On];this.
Fb.BL=[this,this.MV];this.Fb.D1=[this,this.MV];this.AzN=this.F0;this.G1.Di=[this
,this.GW];this.F0.Di=[this,this.GW];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fm._Done();this.Fb._Done();this.G1._Done();this.F0._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fm._ReInit();this.Fb._ReInit();this.G1._ReInit();this.F0._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzN)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQ4={Dy:null,CU:null,Cu:null
,FO:function(E){if(this.M5===E)return;C.HJ.FO.call(this,E);this.Cu.CT(E);this.CU.
CT(E);this.Dy.CT(E);},Ym:function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.
F0;break;case 1:B5=this.Cu;break;case 2:B5=this.CU;break;case 3:B5=this.Dy;break;
case 4:B5=this.G1;break;default:A.ab5("%s",Ah2);}return B5;},_Init:function(aArg
){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(
this.CU={I:this},0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.AQ4;this.
H(Bq$);this.G1.H(Atc);this.Dy.H(A$_);this.CU.H(A$$);this.Cu.H(Baa);this.F0.H(Bra
);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.Cu,-2);this.Dy.Di=[this,this.
GW];this.CU.Di=[this,this.GW];this.Cu.Di=[this,this.GW];},_Done:function(){this.
__proto__=C.HJ;this.Dy._Done();this.CU._Done();this.Cu._Done();C.HJ._Done.call(this
);},_ReInit:function(){C.HJ._ReInit.call(this);this.Dy._ReInit();this.CU._ReInit(
);this.Cu._ReInit();},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.
Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVu={Ra:null,AcF:null,AVt:0,CC:function(G){this.AcF.Ar(true);},E5:function(G
){this.AcF.Ar(false);},BnB:function(E){if(this.AVt===E)return;this.AVt=E;this.Ra.
R((((A.aaR(A.acf.AVs)+AcQ)+E.toFixed())+Brb)+A.aaR(A.acf.Lb));},Blu:function(){return this.
AVt;},BBe:function(G){A._GetAutoObject(C.A9).Cd(3);A._GetAutoObject(A.Device.Device
).Anu(1);},_Init:function(aArg){C.XW._Init.call(this,aArg);C.CH._Init.call(this.
Ra={I:this},0);A.acl.Gl._Init.call(this.AcF={I:this},0);this.__proto__=C.AVu;this.
AeL.H(Brc);this.UA.R(A.jV);this.Ra.H(Brd);this.Ra.R(A.aaR(A.acf.AVs)+Bab);this.Ra.
L(A.jb.Text);this.AcF.HM(1);this.AcF.Fq(5000);this.AcF.B2=100;this.J(this.Ra,0);
this.Ra.S(A.aaL(A.fl.Af));this.Ra.A2(A.aaL(A.fl.Ak));this.Ra.Cv(A.aaL(A.fl.Bh));
this.AcF.Sz=[this,this.BBe];this.AcF.Q=[this,this.Blu,this.BnB];},_Done:function(
){this.__proto__=C.XW;this.Ra._Done();this.AcF._Done();C.XW._Done.call(this);},_ReInit:
function(){C.XW._ReInit.call(this);this.Ra._ReInit();this.AcF._ReInit();this.Ra.
R(A.aaR(A.acf.AVs)+Bab);this.Ra.S(A.aaL(A.fl.Af));this.Ra.A2(A.aaL(A.fl.Ak));this.
Ra.Cv(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.XW._Mark.call(this,D);if((B=this.
Ra)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARW={K4:null,Lj:null,Bd7:false,Init:
function(aArg){this.Bb(this.C$);},Ev:function(G){var B;if(!!this.K4)this.K4.Ev(this
);C.Wr.Ev.call(this,G);},Agd:function(G){var B;if(!!this.K4)this.K4.Agd(this);C.
Wr.Agd.call(this,G);},CC:function(G){var B;if(!this.Bd7){this.Bd7=true;A.pe([this
,this.A3D],this);}else if(!this.K4){this.K4=A._NewObject(C.ARY,0);this.K4.A9K([this
,this.AAY]);this.LN(this);this.K4.LN(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ev(this);else C.Wr.CC.call(this,G);}else C.Wr.CC.call(this,G
);},Ap3:function(G){var B;if(!!this.K4)this.K4.Ap3(this);},AAY:function(G){var B;
var F;this.LN(this);this.K4.LN(this);A.pe([this,this.AcR],this);var BdI=this.LU;
this.AeW(A._GetAutoObject(A.Device.Helper).Abo(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVr(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,BdI);if(BdI)A._GetAutoObject(
A.Device.Helper).W.PT(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SG(A._GetAutoObject(A.Device.Helper).AMh((F=this.Dh.HZ.Ht,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JH(this.C$);},A3D:function(
G){A._GetAutoObject(C.A9).Cd(79);},_Init:function(aArg){C.Wr._Init.call(this,aArg
);C.Q$._Init.call(this.Lj={I:this},0);this.__proto__=C.ARW;var B;this.Lj.H(AhY);
this.Lj.Aj(true);this.Lj.T(A.aaR(A.acf.ACp));this.J(this.Lj,-9);this.JY(this.Gm,-
1);this.Lj.Gr([this,this.D_,this.GS]);this.Lj.At([B=A._GetAutoObject(A.Device.Helper
).W,B.ASA,B.AnC]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wr;this.Lj.
_Done();C.Wr._Done.call(this);},_ReInit:function(){C.Wr._ReInit.call(this);this.
Lj._ReInit();this.Lj.T(A.aaR(A.acf.ACp));},_Mark:function(D){var B;C.Wr._Mark.call(
this,D);if((B=this.K4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADL={AgM:null,AgN:null,NK:null,NJ:null,ES:null,FZ:null,Ep:null,Dy:null,CU:null,Cu:
null,FO:function(E){if(this.M5===E)return;C.Lf.FO.call(this,E);this.Cu.CT(E);this.
CU.CT(E);this.Dy.CT(E);this.Ep.CT(E);this.FZ.CT(E);this.ES.CT(E);this.NJ.CT(E);this.
NK.CT(E);this.AgN.CT(E);this.AgM.CT(E);},Ym:function(Hz){var B5=null;switch(Hz){
case-1:case 0:B5=this.F0;break;case 1:B5=this.Cu;break;case 2:B5=this.CU;break;case
3:B5=this.Dy;break;case 4:B5=this.Ep;break;case 5:B5=this.FZ;break;case 6:B5=this.
ES;break;case 7:B5=this.NJ;break;case 8:B5=this.NK;break;case 9:B5=this.AgN;break;
case 10:B5=this.AgM;break;case 11:B5=this.G1;break;default:A.ab5("%s",Ah2);}return B5;
},_Init:function(aArg){C.Lf._Init.call(this,aArg);C.DF._Init.call(this.AgM={I:this
},0);C.DF._Init.call(this.AgN={I:this},0);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ADL;this.H(Bre);this.G1.H(AIC);this.AgM.H(AyB);this.AgN.H(
AZP);this.NK.H(AZQ);this.NJ.H(AZR);this.ES.H(AZS);this.FZ.H(AZT);this.Ep.H(AZU);
this.Dy.H(Bac);this.CU.H(AZV);this.Cu.H(Brf);this.F0.H(Brg);this.J(this.AgM,-2);
this.J(this.AgN,-2);this.J(this.NK,-2);this.J(this.NJ,-2);this.J(this.ES,-2);this.
J(this.FZ,-2);this.J(this.Ep,-2);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.
Cu,-2);this.AgM.Di=[this,this.GW];this.AgN.Di=[this,this.GW];this.NK.Di=[this,this.
GW];this.NJ.Di=[this,this.GW];this.ES.Di=[this,this.GW];this.FZ.Di=[this,this.GW
];this.Ep.Di=[this,this.GW];this.Dy.Di=[this,this.GW];this.CU.Di=[this,this.GW];
this.Cu.Di=[this,this.GW];},_Done:function(){this.__proto__=C.Lf;this.AgM._Done(
);this.AgN._Done();this.NK._Done();this.NJ._Done();this.ES._Done();this.FZ._Done(
);this.Ep._Done();this.Dy._Done();this.CU._Done();this.Cu._Done();C.Lf._Done.call(
this);},_ReInit:function(){C.Lf._ReInit.call(this);this.AgM._ReInit();this.AgN._ReInit(
);this.NK._ReInit();this.NJ._ReInit();this.ES._ReInit();this.FZ._ReInit();this.Ep.
_ReInit();this.Dy._ReInit();this.CU._ReInit();this.Cu._ReInit();},_Mark:function(
D){var B;C.Lf._Mark.call(this,D);if((B=this.AgM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HJ={Q:null,AM:0,Ai:function(Ae){C.G4.Ai.call(this
,Ae);this.Aml();},Adr:function(G){var B;var F;var Iz=A.jV;var B5=this.G1;while(!
!B5){if(B5.Ey>0)Iz=Iz+B5.Ey.toFixed();else Iz=Iz+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TN(B5,0x11))?B:null);}var BO=this.AM;this.Bx(A.wz(Iz,-1,
10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LN:function(G){},Aml:function(){var B;var F;if(!!this.Q){var DV=this.F0;
var AdA=this.Us;var A_=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A_>0){DV.LZ(A_%
10);A_=(A_/10)|0;}else if(AdA>0)DV.LZ(0);else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=
this.AqK(DV,0x11))?B:null);AdA=AdA-1;}}},C3:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)
A.pe([this,this.C3],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G4._Init.call(this,aArg);this.__proto__=C.HJ;},_Mark:
function(D){var B;C.G4._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lf={AM:0,Q:null
,Ai:function(Ae){C.G4.Ai.call(this,Ae);this.Aml();},Adr:function(G){var B;var F;
var Iz=A.jV;var B5=this.G1;while(!!B5){if(B5.Ey>0)Iz=Iz+B5.Ey.toFixed();else Iz=
Iz+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TN(B5,0x11))?B:null);
}var BO=this.AM;this.Bx(A.ab0(Iz,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LN:function(G){},Aml:function(){var B;
var F;if(!!this.Q){var DV=this.F0;var AdA=this.Us;var A_=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A_>0){DV.LZ((A_%10)|0);A_=Math.trunc(A_/10);}else if(AdA>0)DV.
LZ(0);else DV.LZ(-1);DV=(C.DF.isPrototypeOf(B=this.AqK(DV,0x11))?B:null);AdA=AdA-
1;}}},C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},At:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G4._Init.call(
this,aArg);this.__proto__=C.Lf;},_Mark:function(D){var B;C.G4._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gk:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BS(aIndex);},DZ:function(A_){return A_;},H3:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvO={Ep:null,Dy:null,CU:null,Cu:null,FO:function(E){if(this.M5===E)return;C.
HJ.FO.call(this,E);this.Cu.CT(E);this.CU.CT(E);this.Dy.CT(E);this.Ep.CT(E);},Ym:
function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.F0;break;case 1:B5=this.
Cu;break;case 2:B5=this.CU;break;case 3:B5=this.Dy;break;case 4:B5=this.Ep;break;
case 5:B5=this.G1;break;default:A.ab5("%s",Ah2);}return B5;},_Init:function(aArg
){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(
this.Dy={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cu={
I:this},0);this.__proto__=C.AvO;this.H(Ayj);this.G1.H(AHJ);this.Ep.H(AHK);this.Dy.
H(AHL);this.CU.H(AHM);this.Cu.H(AHN);this.F0.H(AHO);this.EM.H(Bad);this.J(this.Ep
,-2);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.Cu,-2);this.Ep.Di=[this,this.
GW];this.Dy.Di=[this,this.GW];this.CU.Di=[this,this.GW];this.Cu.Di=[this,this.GW
];},_Done:function(){this.__proto__=C.HJ;this.Ep._Done();this.Dy._Done();this.CU.
_Done();this.Cu._Done();C.HJ._Done.call(this);},_ReInit:function(){C.HJ._ReInit.
call(this);this.Ep._ReInit();this.Dy._ReInit();this.CU._ReInit();this.Cu._ReInit(
);},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.Ep)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUB={AttributeSet:null,Init:function(aArg){this.AttributeSet.
BoQ(0);this.AttributeSet.BoR(1);this.AttributeSet.BoS(4);},Ai:function(Ae){var B;
C.BW.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var IB=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=A.jb.CJ;var GX=A.jb.Text;if(this.Hk){FS=
A.jb.Bm;GX=A.jb.Text;}if(!He){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);this.
AttributeSet.Ahm(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahm(A.jb.Bm);}else if(IB){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahm(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.
Am1);this.V.L(A.jb.Bm);this.AttributeSet.Ahm(A.jb.Bm);}else{this.Background.L(FS
);this.V.L(GX);this.AttributeSet.Ahm(GX);}this.LF=He;this.KF=Fv;this.Qs=GE;this.
Apf=IB;},Hl:function(G){var B;var Gf=this.Dz.G5;var CA=(A.acg.AuM.isPrototypeOf(
B=this.Dz.Ci)?B:null);CA.A9s(this.AttributeSet);CA.A6(0x12);if(!CA)return;if(!!this.
AC)CA.R(this.Bzh(this.AC.Gk(Gf)));else CA.R(W$);CA.H(A.abK(CA.M,[this.Dz.Wa,(B=this.
Dz.M)[3]-B[1]]));},Bzh:function(BxI){var AAI=BxI;AAI=A._GetAutoObject(A.Device.Helper
).Nl(AAI,Brh,Bri);AAI=A._GetAutoObject(A.Device.Helper).Nl(AAI,Brj,Brk);return Brl+
AAI;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUB;this.Dz.H(Brm);this.Dz.Jy(2);
this.Dz.N0(A.acg.AuM);this.AttributeSet.Ahm(this.V.AQ);this.AttributeSet.Bmt(A.aaL(
A.fl.AOy));this.AttributeSet.A9V(A.aaL(A.fl.Ak));this.AttributeSet.Ahp(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9V(A.aaL(A.fl.Ak));this.AttributeSet.Ahp(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asx._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dr(C.ADd);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Du:function(){return 14;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gk:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BS(aIndex
);},DZ:function(A_){return A_;},H3:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OS={FM:null,EnumToCodeset:
null,Jw:null,A8:0,Number:0,Ai:function(Ae){C.BW.Ai.call(this,Ae);if(this.A8===1){
if(this.Hk){this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}},Bx:function(E){C.BW.Bx.call(this,E);var BAb=this.
EnumToCodeset.AmD(this.Number);var Bef=this.AC.C7(this.AM);if(BAb!==Bef){this.AFu(
this.EnumToCodeset.Aei(Bef));A.abo([this,this.ASB,this.AFu],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[
this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(
A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=
this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:
this.FM.AkO((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ew(1);},Hd:function(
G){this.Ew(0);},Ew:function(EN){var F;if(!this.A8)this.FM.Ajy((F=this.N,F[1].call(
F[0])));this.A8=EN;if((this.A8<0)||(this.A8>1))this.A8=0;this.DJ(this);if(!this.
A8)this.Bb(null);else this.A14();this.Am();},AFu:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqS()>E)E=this.EnumToCodeset.
AqS();if(this.EnumToCodeset.H3()<E)E=this.EnumToCodeset.H3();}this.Number=E;var BO=
this.AM;if(!!this.EnumToCodeset){var By9=this.EnumToCodeset.AmD(E);this.Bx(this.
AC.DZ(By9));if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},Anv:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},U$:function(G){this.Ew(this.A8+1);},A14:function(){A.ab5(
"%s",Brn);},ASB:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BK._Init.call(this.Jw={I:this},0);this.__proto__=C.OS;this.
Jw.Filter=1;this.FM=A._NewObject(C.Aer,0);this.Jw.BL=[this,this.U$];},_Done:function(
){this.__proto__=C.BW;this.Jw._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Jw._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jw)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeS={Text:null,Ai:function(
Ae){C.Ek.Ai.call(this,Ae);this.Text.L(this.ACQ);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rh(this.AM));this.
Am();},AaF:function(G){A.pe([this,this.Af_],this);},AaD:function(G){A.pe([this,this.
Af_],this);},AlY:function(G){A.pe([this,this.Af_],this);},Af_:function(G){if((!this.
Ij||!this.A1)||!this.AF)return;},_Init:function(aArg){C.Ek._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeS;this.Text.AZ(0x3F
);this.Text.H(As4);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ek;this.Text._Done();C.Ek.
_Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARP={GI:0,C6:null,AW:null,Fa:null,
I9:null,CountryToString:null,K$:0,L$:false,Init:function(aArg){A.zX([this,this.MI
],[this,this.SA,this.Lo],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.I9.Z(this.
Afn);this.AW.FO(this.LQ);this.Fa.CT(this.LQ);this.I9.CT(this.LQ);},DJ:function(G
){var F;if(!this.N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CV(this.CountryToString.BS(this.K$));(F=this.N,
F[1].call(F[0])).Cl=null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EN){var Tl=this.
A8;this.A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>this.RH)this.A8=this.RH;if((
this.A8===1)&&!this.Afn)this.A8=2;switch(this.A8){case 0:{this.Bb(null);if(!this.
GI)this.Lo(0);}break;case 1:this.Bb(this.I9);break;case 2:this.Bb(this.Fa);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Tl>0))this.AW.SN(2);else this.AW.SN(7);}break;
default:throw new Error(Atd+this.A8.toFixed());}C.Ek.Ew.call(this,this.A8);},Apn:
function(G){this.I9.Ul(this.Ez);},AaF:function(G){var F;this.AW.A9v((F=this.AF,F[
1].call(F[0])));},AaD:function(G){var F;this.AW.A9w((F=this.A1,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.L$=true;this.SC(A._GetAutoObject(
A.Device.Helper).Sh(E,0,12));this.Lo(A._GetAutoObject(A.Device.Converter).S0(E));
this.L$=false;if(!!E)this.AW.Kt(12);else this.AW.Kt(0);this.Am();},AlY:function(
G){A.pe([this,this.Af_],this);},FV:function(G){var F;if(!this.AM){var BO=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).AC4());if(this.AM!==BO){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(3);},AjL:function(){return this.
GI;},AjN:function(){return 999999999999;},Lo:function(E){if(this.K$===E)return;this.
K$=E;if(this.L$===false)A.pe([this,this.Vm],this);A.abo([this,this.SA,this.Lo],0
);},SC:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this
,this.Vm],this);A.abo([this,this.AbW,this.SC],0);},Vm:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqx(this.K$),3,10)+A.abm(this.GI,12,10
);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af_:function(G){var F;if((!this.Ij||
!this.A1)||!this.AF)return;if(!(F=this.Ij,F[1].call(F[0])))this.AW.AEV(true);else
this.AW.AEV(false);},SA:function(){return this.K$;},AbW:function(){return this.GI;
},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.C6._Init.call(this.C6={I:this
},0);C.ADL._Init.call(this.AW={I:this},0);C.AsH._Init.call(this.Fa={I:this},0);C.
I9._Init.call(this.I9={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARP;var B;this.RH=3;this.AW.H(Bro);this.Fa.H(Bae);this.
I9.H(Baf);this.J(this.AW,0);this.J(this.Fa,0);this.J(this.I9,0);this.C6.AE1([this
,this.SA,this.Lo]);this.AW.At([this,this.AbW,this.SC]);this.Fa.CK(this.C6);this.
Fa.At([B=this.C6,B.B_,B.B$]);this.I9.A9O([B=A._GetAutoObject(A.Device.Device),B.
Awb,B.AyI]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.C6._Done(
);this.AW._Done();this.Fa._Done();this.I9._Done();this.CountryToString._Done();C.
Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C6._ReInit(
);this.AW._ReInit();this.Fa._ReInit();this.I9._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARO={GI:0,C6:null,AW:null,YA:null,Kq:null,Fa:null,I9:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pw:0,K$:0,L$:false,Init:function(aArg){A.
zX([this,this.MI],[this,this.PP,this.EB],0);A.zX([this,this.MI],[this,this.SA,this.
Lo],0);A.zX([this,this.MI],[this,this.Anp,this.Ahq],0);},Ai:function(Ae){C.Ek.Ai.
call(this,Ae);this.I9.Z(this.Afn);this.AW.FO(this.LQ);this.YA.FO(this.LQ);this.Kq.
FO(this.LQ);this.Fa.CT(this.LQ);this.I9.CT(this.LQ);},DJ:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this
,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV
);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.
N,F[1].call(F[0])).CV(this.CountryToString.BS(this.K$));(F=this.N,F[1].call(F[0]
)).Cl=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGL)+A.aaR(A.acf.Colon))+AcQ)+A.aaR(A.
acf.Bhq));break;case 1:(F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGL)+A.aaR(A.
acf.Colon))+AcQ)+A.aaR(A.acf.BoW));break;case 2:(F=this.N,F[1].call(F[0])).CV(((
A.aaR(A.acf.AGL)+A.aaR(A.acf.Colon))+AcQ)+A.aaR(A.acf.Bio));break;default:(F=this.
N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGL)+A.aaR(A.acf.Colon))+AcQ)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cl=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0]
)).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0
])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null
);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.EV)+Ax$)+this.GermanStateToString.Lu(
A._GetAutoObject(A.Device.Converter).ACT(this.Pw)));(F=this.N,F[1].call(F[0])).Cl=
null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[
1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(
A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EN){var Tl=this.A8;if(EN<
0)EN=0;else if(EN>this.RH)EN=this.RH;if((EN===1)&&!this.Afn)EN=2;switch(EN){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.Pw)this.Lo(0);}break;case
1:this.Bb(this.I9);break;case 2:this.Bb(this.Fa);break;case 3:if(!Tl)A.pe([this,
this.BBs],this);else this.Bb(this.YA);break;case 4:this.Bb(this.Kq);break;case 5:
if(((Tl===4)&&!this.Pw)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Tl>
0))this.AW.SN(2);else this.AW.SN(7);}break;default:throw new Error(Atd+EN.toFixed(
));}this.A8=EN;C.Ek.Ew.call(this,this.A8);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.L$=true;this.SC(A._GetAutoObject(A.Device.Helper).Sh(E,0,8));this.
Ahq(A._GetAutoObject(A.Device.Helper).Sh(E,8,2)|0);this.EB(A._GetAutoObject(A.Device.
Helper).Sh(E,10,2)|0);this.Lo(A._GetAutoObject(A.Device.Converter).S0(E));this.L$=
false;if(!!this.AM){this.YA.Kt(2);this.Kq.Kt(2);this.AW.Kt(8);}else{this.YA.Kt(0
);this.Kq.Kt(0);this.AW.Kt(0);}this.Am();},Apn:function(G){this.I9.Ul(this.Ez);}
,AaF:function(G){var F;this.AW.A9v((F=this.AF,F[1].call(F[0])));},AaD:function(G
){var F;this.AW.A9w((F=this.A1,F[1].call(F[0])));},AlY:function(G){A.pe([this,this.
Af_],this);},FV:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(
A.Device.Helper).AC4());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ew(3);}else this.Ew(this.RH);},AjL:function(){return this.
GI;},AjN:function(){return 99999999;},Lo:function(E){if(this.K$===E)return;this.
K$=E;if(this.L$===false)A.pe([this,this.Vm],this);A.abo([this,this.SA,this.Lo],0
);},SC:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this
,this.Vm],this);A.abo([this,this.AbW,this.SC],0);},Vm:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqx(this.K$),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pw,2,10))+A.abm(this.GI,8,10);var BO=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Af_:function(G){var F;if((!this.Ij||!this.A1)||!this.AF)return;if(!(F=this.
Ij,F[1].call(F[0])))this.AW.AEV(true);else this.AW.AEV(false);},EB:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L$===false)A.pe([this,this.
Vm],this);A.abo([this,this.PP,this.EB],0);},Ahq:function(E){if(this.Pw===E)return;
this.Pw=E;if(this.L$===false)A.pe([this,this.Vm],this);A.abo([this,this.Anp,this.
Ahq],0);},BBs:function(G){var F;if(!!this.JL){var Ib=(F=this.JL,F[1].call(F[0]));
var A1e=0;switch(Ib){case 0:case 1:A1e=0;break;case 2:A1e=1;break;default:A.ab5(
"%s%e",Alb,Ib);}this.EB(A1e);}if(!this.Pw)this.Ew(4);else this.Ew(5);},SA:function(
){return this.K$;},AbW:function(){return this.GI;},PP:function(){return this.AnimalType;
},Anp:function(){return this.Pw;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.AQ5._Init.call(this.AW={I:this},0);C.AvN.
_Init.call(this.YA={I:this},0);C.AvN._Init.call(this.Kq={I:this},0);C.AsH._Init.
call(this.Fa={I:this},0);C.I9._Init.call(this.I9={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARO;var B;this.RH=5;this.AW.H(
Brp);this.YA.H(Brq);this.YA.EU(2);this.Kq.H(Brr);this.Kq.EU(16);this.Fa.H(Bae);this.
I9.H(Baf);this.J(this.AW,0);this.J(this.YA,0);this.J(this.Kq,0);this.J(this.Fa,0
);this.J(this.I9,0);this.C6.AE1([this,this.SA,this.Lo]);this.AW.At([this,this.AbW
,this.SC]);this.YA.At([this,this.PP,this.EB]);this.Kq.At([this,this.Anp,this.Ahq
]);this.Fa.CK(this.C6);this.Fa.At([B=this.C6,B.B_,B.B$]);this.I9.A9O([B=A._GetAutoObject(
A.Device.Device),B.Awb,B.AyI]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ek;this.C6._Done();this.AW._Done();this.YA._Done();this.Kq._Done();this.Fa._Done(
);this.I9._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C6._ReInit(
);this.AW._ReInit();this.YA._ReInit();this.Kq._ReInit();this.Fa._ReInit();this.I9.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ek={AM:0,Awm:null,OF:null,
Q:null,Ez:null,A1:null,AF:null,Ij:null,N:null,JL:null,Fm:null,Fb:null,ACQ:0,LQ:0
,A8:0,RH:0,Afn:true,Init:function(aArg){A.pe([this,this.LN],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A8)this.Bb(null);},Bmv:function(E){if(this.
ACQ===E)return;this.ACQ=E;this.Am();},Wy:function(E){if(this.LQ===E)return;this.
LQ=E;this.Am();},DJ:function(G){A.ab5("%s",Alc);},MI:function(s){this.DJ(s);},Ew:
function(EN){A.pe([this,this.MI],this);A.pe(this.Awm,this);if(!EN)A.pe(this.OF,this
);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);}
,C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",Aox);},On:function(G){if(this.A8>1)this.Ew(this.A8-1);},MV:function(
G){if((this.A8>0)&&(this.A8<this.RH))this.Ew(this.A8+1);},Ul:function(E){if(A.aaZ(
this.Ez,E))return;if(!!this.Ez)A.z$([this,this.A0s],this.Ez,0);this.Ez=E;if(!!E)
A.zX([this,this.A0s],this.Ez,0);A.pe([this,this.A0s],this);},Apn:function(G){},A0s:
function(s){this.Apn(s);},OM:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1
)A.z$([this,this.A0w],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.A0w],E,0);if(!
!E)A.pe([this,this.A0w],this);},PQ:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0y],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0y],E,0);if(
!!E)A.pe([this,this.A0y],this);},AaF:function(G){},A0y:function(s){this.AaF(s);}
,AaD:function(G){},A0w:function(s){this.AaD(s);},Uj:function(E){if(A.aaZ(this.Ij
,E))return;if(!!this.Ij)A.z$([this,this.A0v],this.Ij,0);this.Ij=E;if(!!E)A.zX([this
,this.A0v],E,0);if(!!E)A.pe([this,this.A0v],this);},AlY:function(G){},A0v:function(
s){this.AlY(s);},FV:function(G){A.ab5("%s",Bag);},BGE:function(s){this.FV(s);},Hd:
function(G){this.Ew(0);},AjL:function(){A.ab5("%s",Aox);return 0;},AjN:function(
){A.ab5("%s",Aox);return 0;},LN:function(G){},Ant:function(E){if(A.aaZ(this.JL,E
))return;if(!!this.JL)A.z$([this,this.AoY],this.JL,0);this.JL=E;if(!!E)A.zX([this
,this.AoY],this.JL,0);A.pe([this,this.AoY],this);},AoY:function(G){},AFb:function(
E){if(A.aa0(this.OF,E))return;this.OF=E;},AFG:function(E){if(this.Afn===E)return;
this.Afn=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={I:this},0);this.
__proto__=C.Ek;this.H(As4);this.ACQ=A.jb.Text;this.LQ=A.jb.CS;this.Fm.Filter=6;this.
Fb.Filter=7;this.Fm.BL=[this,this.On];this.Fb.BL=[this,this.MV];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fm._Done();this.Fb._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fm._ReInit(
);this.Fb._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ij)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JL)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q$={AM:0,Dq:null,FM:
null,OF:null,Ez:null,A1:null,AF:null,Ij:null,Q:null,JL:null,AEg:-1,Afn:true,AN4:
false,ATX:false,Asj:true,Init:function(aArg){A.pe([this,this.ABs],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dq)return;if(this.Dq.A8>0){if(this.Hk){this.Dq.
Wy(A.jb.CJ);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Dq.Wy(A.jb.
CS);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hk)this.Dq.Wy(
A.jb.CJ);else this.Dq.Wy(A.jb.CS);this.Dq.Bmv(this.V.AQ);}},I0:function(G){C.Eg.
I0.call(this,G);if(!this.Dq)return;if(!this.Dq.A8)this.FV(this);else this.Hd(this
);},Gr:function(E){C.Eg.Gr.call(this,E);if(!!this.Dq)this.Dq.N=E;},Ul:function(E
){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.Apn],this.Ez,0);this.Ez=
E;if(!!E)A.zX([this,this.Apn],this.Ez,0);A.pe([this,this.Apn],this);},Apn:function(
G){if(!!this.Dq)this.Dq.Ul(this.Ez);},OM:function(E){if(A.aaZ(this.A1,E))return;
this.A1=E;if(!!this.Dq)this.Dq.OM(E);},PQ:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PQ(E);},Uj:function(E){if(A.aaZ(this.Ij,E))return;
this.Ij=E;if(!!this.Dq)this.Dq.Uj(E);},BBY:function(G){var AAq=0;if(!!this.Dq){AAq=
this.Dq.A8;this.Dq.N=null;this.HN(this.Dq);}switch(this.AEg){case 0:this.Dq=A._NewObject(
C.AeS,0);break;case 1:this.Dq=A._NewObject(C.ARP,0);break;case 2:this.Dq=A._NewObject(
C.ARO,0);break;case 3:this.Dq=A._NewObject(C.ATZ,0);break;case 4:this.Dq=A._NewObject(
C.ATY,0);break;case 5:this.Dq=A._NewObject(C.ARQ,0);break;default:throw new Error(
Brs+this.AEg.toFixed());}this.J(this.Dq,0);this.Dq.Ant(this.JL);this.Dq.H(Brt);this.
Dq.N=this.N;this.Dq.Ul(this.Ez);this.Dq.Awm=[this,this.Awm];this.Dq.At([this,this.
Ug,this.Bx]);this.Dq.Uj(this.Ij);this.Dq.OM(this.A1);this.Dq.PQ(this.AF);this.Dq.
AFb(this.OF);this.Dq.AFG(this.Afn);if(AAq>0)this.Dq.Ew(AAq);this.Bb(this.Dq);this.
Am();},FV:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FM.Ajy((F=this.
N,F[1].call(F[0])));else this.FM=A._NewObject(C.Aer,0);this.Dq.FV(this);}},Hd:function(
G){var B;if(!!this.Dq)this.Dq.Hd(this);},AjL:function(){if(!this.Dq)return 0;return this.
Dq.AjL();},AjN:function(){if(!this.Dq)return 0;return this.Dq.AjN();},C3:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ug,this.
Bx],0);}},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABs],this);},Bm_:function(
E){if(this.AEg===E)return;this.AEg=E;A.pe([this,this.BBY],this);},Ar0:function(E
){if(this.Asj===E)return;this.Asj=E;A.pe([this,this.ABs],this);},ABs:function(G){
var Apy;if(this.Asj){if(this.AN4)Apy=5;else Apy=0;}else if(this.ATX){if(A._GetAutoObject(
A.Device.Converter).S0(this.AM)===10)Apy=4;else Apy=3;}else if(A._GetAutoObject(
A.Device.Converter).S0(this.AM)===10)Apy=2;else Apy=1;this.Bm_(Apy);},Awm:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A8)this.FM.AkO((F=this.N,F[1].call(F[
0])));this.Am();},Ant:function(E){if(A.aaZ(this.JL,E))return;if(!!this.JL)A.z$([
this,this.AoY],this.JL,0);this.JL=E;if(!!E)A.zX([this,this.AoY],this.JL,0);A.pe([
this,this.AoY],this);},AoY:function(G){if(!!this.Dq)this.Dq.Ant(this.JL);},A_e:function(
E){if(this.ATX===E)return;this.ATX=E;A.pe([this,this.ABs],this);},Bl3:function(E
){if(this.AN4===E)return;this.AN4=E;A.pe([this,this.ABs],this);},AFb:function(E){
if(A.aa0(this.OF,E))return;this.OF=E;if(!!this.Dq)this.Dq.AFb(E);},AFG:function(
E){if(this.Afn===E)return;this.Afn=E;if(!!this.Dq)this.Dq.AFG(E);},Ug:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Q$;this.H(UW);this.V.R(As_);this.V.L(A.jb.Bm);this.FM=A._NewObject(C.Aer,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ij
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQ5={ES:null,FZ:null,Ep:null,Dy:null,CU:null
,Cu:null,FO:function(E){if(this.M5===E)return;C.Lf.FO.call(this,E);this.Cu.CT(E);
this.CU.CT(E);this.Dy.CT(E);this.Ep.CT(E);this.FZ.CT(E);this.ES.CT(E);},Ym:function(
Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.F0;break;case 1:B5=this.Cu;break;
case 2:B5=this.CU;break;case 3:B5=this.Dy;break;case 4:B5=this.Ep;break;case 5:B5=
this.FZ;break;case 6:B5=this.ES;break;case 7:B5=this.G1;break;default:A.ab5("%s"
,Ah2);}return B5;},_Init:function(aArg){C.Lf._Init.call(this,aArg);C.DF._Init.call(
this.ES={I:this},0);C.DF._Init.call(this.FZ={I:this},0);C.DF._Init.call(this.Ep={
I:this},0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.AQ5;this.H(Bru);this.G1.
H(AIC);this.ES.H(AyB);this.FZ.H(AZP);this.Ep.H(AZQ);this.Dy.H(AZR);this.CU.H(AZS
);this.Cu.H(AZT);this.F0.H(AZU);this.EM.H(Bad);this.J(this.ES,-2);this.J(this.FZ
,-2);this.J(this.Ep,-2);this.J(this.Dy,-2);this.J(this.CU,-2);this.J(this.Cu,-2);
this.ES.Di=[this,this.GW];this.FZ.Di=[this,this.GW];this.Ep.Di=[this,this.GW];this.
Dy.Di=[this,this.GW];this.CU.Di=[this,this.GW];this.Cu.Di=[this,this.GW];},_Done:
function(){this.__proto__=C.Lf;this.ES._Done();this.FZ._Done();this.Ep._Done();this.
Dy._Done();this.CU._Done();this.Cu._Done();C.Lf._Done.call(this);},_ReInit:function(
){C.Lf._ReInit.call(this);this.ES._ReInit();this.FZ._ReInit();this.Ep._ReInit();
this.Dy._ReInit();this.CU._ReInit();this.Cu._ReInit();},_Mark:function(D){var B;
C.Lf._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvN={Q:null,G1:null,F0:null,EM:null,Ip:null,Io:null,M5:0,Us:0,AM:0,F$:99,Init:
function(aArg){A.pe([this,this.LN],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Ym(0).M,this.Ym(-1).M));var IB=((Ae&
0x40)===0x40);if(IB){this.Bf4(A.jb.AV);this.Bf5(A.jb.Bm);}else{this.Bf4(this.M5);
this.Bf5(A.jb.Text);}this.Aml();},FO:function(E){if(this.M5===E)return;this.M5=E;
this.Am();},LN:function(G){},Ym:function(Hz){var B5=null;switch(Hz){case-1:case 0:
B5=this.F0;break;case 1:B5=this.G1;break;default:A.ab5("%s",Ah2);}return B5;},Kt:
function(E){if(this.Us===E)return;this.Us=E;this.Aml();},Aml:function(){var B;var
F;if(!!this.Q){var DV=this.F0;var AdA=this.Us;var A_=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A_>0){DV.LZ(A_%10);A_=(A_/10)|0;}else if(AdA>0)DV.LZ(0);else DV.LZ(-
1);DV=(C.Ey.isPrototypeOf(B=this.AqK(DV,0x11))?B:null);AdA=AdA-1;}}},Agb:function(
G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Aga:function(G){var F;var BO=this.
AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C3:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3
],this);},Bx:function(E){if(E<0)E=0;if(E>this.F$)E=this.F$;if(this.AM===E)return;
this.AM=E;this.Am();},EU:function(E){if(this.F$===E)return;this.F$=E;this.Am();}
,Bf4:function(aColor){this.F0.CT(aColor);this.G1.CT(aColor);},Bf5:function(aColor
){this.F0.Zo(aColor);this.G1.Zo(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ey._Init.call(this.G1={I:this},0);C.Ey._Init.call(this.F0={I:this},
0);A.acg.BU._Init.call(this.EM={I:this},0);A.Core.BK._Init.call(this.Ip={I:this}
,0);A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.AvN;this.H(Brv);this.
M5=A.jb.CJ;this.G1.H(AIC);this.F0.H(AyB);this.EM.H(AyB);this.EM.Nh(2);this.EM.L(
A.jb.E1);this.Ip.Filter=4;this.Io.Filter=5;this.J(this.G1,0);this.J(this.F0,0);this.
J(this.EM,0);this.Ip.BL=[this,this.Agb];this.Ip.D1=[this,this.Agb];this.Io.BL=[this
,this.Aga];this.Io.D1=[this,this.Aga];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G1._Done();this.F0._Done();this.EM._Done();this.Ip._Done();this.Io.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G1._ReInit();this.F0._ReInit();this.EM._ReInit();this.Ip._ReInit();this.Io.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ey={AgF:
null,Background:null,Text:null,Ey:-1,M0:0,AmN:0,Aqp:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ey<0)this.Text.R(Ro);else this.Text.R(this.Ey.toFixed(
));this.Background.L(this.M0);this.Text.L(this.AmN);},LZ:function(E){if(this.Ey===
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ey=B5;this.Am();},CT:function(E){
if(this.M0===E)return;this.M0=E;this.Am();},AeX:function(E){if(this.Aqp===E)return;
this.Aqp=E;this.AgF.Ar(E);if(E===false)this.Text.Z(true);},Zo:function(E){if(this.
AmN===E)return;this.AmN=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TF._Init.call(this.AgF={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ey;var B;
this.H(Atc);this.M0=A.jb.CJ;this.AgF.Fq(750);this.AgF.Um(750);this.AgF.Aky(750);
this.AmN=A.jb.Text;this.Background.AZ(0x3);this.Background.H(Atc);this.Text.AZ(0x3
);this.Text.H(Atc);this.Text.R(Ro);this.J(this.Background,0);this.J(this.Text,0);
this.AgF.Q=[B=this.Text,B.Fp,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgF._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgF._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FB={Y:null,I5:null,AOa:A.jV,AR4:A.jV,Td:0,AJH:0,A1U:false,A1q:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABn],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);A.zX([this,this.MI],[B=A._GetAutoObject(A.Device.
Device).An,B.Fo,B.Fs],0);A.pe([this,this.ABn],this);A.pe([this,this.MI],this);},
E5:function(G){var B;C.AB.E5.call(this,G);A.z$([this,this.ABn],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);},Bx5:function(L7){A._GetAutoObject(A.Device.Helper
).G7(L7);this.Ap4(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap4:function(L2,AcV){A.ab5("%s",Alc);},Vh:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.By1],this);else if(!!As&&(As.PopupState===5)){this.A1q=true;this.Ev(this
);}},By1:function(G){if(this.Td>0){this.A1q=false;this.Adm(this);this.A_H(0);}},
Aiw:function(G){if((this.AJH+1)<this.Td)this.A_H(this.AJH+1);else A.aaS([this,this.
BwE],this);},BwF:function(s){this.Aiw(s);},A_H:function(E){this.AJH=E;if(this.A1q===
false){this.Bx5(E);A.aaS([this,this.BwF],this);var XF=(this.AJH/this.Td)*100;A._GetAutoObject(
A.Device.Device).A3(49,true,A.abk(XF,0,0),0,[this,this.Vh]);}},Aao:function(G){A.
_GetAutoObject(A.Device.Device).A3(49,false,Brw,0,[this,this.Vh]);this.A1U=true;
A.pe([this,this.ALj],this);},BwE:function(s){this.Aao(s);},Adm:function(G){this.
I5.Z(true);this.A1U=false;this.ALj(this);},BGx:function(s){this.Adm(s);},AAF:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6B();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ev:function(G){A._GetAutoObject(C.A9).FA();},A3w:function(G){A._GetAutoObject(
C.A9).Cd(84);},DJ:function(G){this.N.Z(true);this.N.C1(A.aaL(A.ach.E2));this.N.CE=[
this,this.Ev];this.N.Cs(A.aaL(A.ach.ADC));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Arc(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Cg=null;this.N.I8.Dk(100);}else{this.N.Cg=[this,this.AAF];this.
N.I8.Dk(255);}this.N.C2(A.aaL(A.ach.Aez));this.N.Cl=[this,this.A3w];},MI:function(
s){this.DJ(s);},ABn:function(G){this.Td=A._GetAutoObject(A.Device.Device).An.B9(
);if(this.Td>0)A._GetAutoObject(A.Device.Device).A3(49,true,UZ,0,[this,this.Vh]);
else{this.Adm(this);this.Aao(this);}},Akw:function(E){if(this.AOa===E)return;this.
AOa=E;A.pe([this,this.ALj],this);},ALj:function(G){var B;if(this.A1U===false){this.
I5.R(A.jV);return;}var Ao$;if(!A._GetAutoObject(A.Device.Device).An.B9()){var Adg=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABn],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);this.AAF(this);if(!A._GetAutoObject(A.Device.Device
).An.QI()||!Adg)Ao$=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).AC0(A._GetAutoObject(A.Device.Device).An.Filter)===1)Ao$=A.aaR(
A.acf.AN6);else Ao$=A.aaR(A.acf.AN5);A._GetAutoObject(A.Device.Device).An.Bk(Adg
);A.zX([this,this.ABn],[B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs],0);}else
Ao$=this.AR4;Ao$=Ao$+(AZW+this.AOa);this.I5.R(Ao$);},Ae8:function(E){if(this.AR4===
E)return;this.AR4=E;A.pe([this,this.ALj],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkP._Init.call(this.I5={
I:this},0);this.__proto__=C.FB;this.Dr(C.Abs);this.Y.H(Ff);this.Y.JS(1);this.I5.
H(Ff);this.J(this.Y,0);this.J(this.I5,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I5._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I5._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A6$={Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A6$;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvP={K0:null,MT:null,AY:0,Yc:function(){this.K0=null;this.MT=null;this.AY=0;
},Os:function(A_){var Hg;Hg=A._NewObject(C.A6$,0);Hg.A5=A_;if(!this.K0){this.K0=
Hg;this.MT=Hg;this.AY=1;}else{this.MT.Ah=Hg;this.MT=Hg;this.AY=this.AY+1;}},AmV:
function(){var B;var RK=0;var Og=this.K0;while(!!Og){RK+=Og.A5;Og=Og.Ah;}return RK;
},AjM:function(){if(!this.AY)return 0;return this.AmV()/this.AY;},AqU:function(){
var B;if(!this.AY)return 0;var A1k=this.AjM();var Add=0;var Og=this.K0;while(!!Og
){Add+=Math.pow(Og.A5-A1k,2);Og=Og.Ah;}Add/=this.AY;Add=Math.sqrt(Add);return Add;
},_Init:function(aArg){this.__proto__=C.AvP;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOb={Gc:null,Aev:null,Yj:null,C5:null,I5:null,
CP:function(){this.A4t(this);},Init:function(aArg){A.zV([this,this.A4t],A._GetAutoObject(
A.Device.Device).Po,0);A.pe([this,this.A4t],this);},Ev:function(G){A._GetAutoObject(
C.A9).FA();},A4t:function(G){this.Yj.Cf(-1);this.I5.Z(!this.Gc.AX.B9());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gc._Init.call(this.Gc={I:this},0);C.
Aev._Init.call(this.Aev={I:this},0);C.Yj._Init.call(this.Yj={I:this},0);A.acg.C5.
_Init.call(this.C5={I:this},0);C.AkP._Init.call(this.I5={I:this},0);this.__proto__=
C.AOb;this.N.Z(true);this.Dr(C.AO8);this.Gc.H(Ata);this.Gc.N0(C.AmM);this.Aev.H(
IV);this.Yj.H(As5);this.C5.DC(Brx);this.C5.DM(Bry);this.C5.Nh(3);this.C5.L(A.jb.
Text);this.I5.H(Aog);this.I5.R((A.aaR(A.acf.A7U)+AZW)+A.aaR(A.acf.A6d));this.J(this.
Gc,0);this.J(this.Aev,0);this.J(this.Yj,0);this.J(this.C5,0);this.J(this.I5,0);this.
N.CE=[this,this.Ev];this.N.C1(A.aaL(A.ach.E2));this.Gc.Zn(A._GetAutoObject(A.Device.
Device).Po);this.Yj.Zn(A._GetAutoObject(A.Device.Device).Po);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gc._Done();this.Aev._Done();this.Yj._Done();
this.C5._Done();this.I5._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gc._ReInit();this.Aev._ReInit();this.Yj._ReInit();this.C5.
_ReInit();this.I5._ReInit();this.I5.R((A.aaR(A.acf.A7U)+AZW)+A.aaR(A.acf.A6d));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gc)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aev)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yj).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOe={At8:null,At7:null,At_:null,At9:null,Aua:null,At$:null,Auc:null,Aub:null
,AaH:null,Yr:null,Abj:null,Abi:null,RatedAttribute:0,Init:function(aArg){this.SF(
2);},DE:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SF(3);break;case 1:this.SF(2);break;case
4:this.SF(1);break;case 3:this.SF(4);break;default:this.SF(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SF(1);break;case 1:this.SF(4);break;case 4:this.
SF(3);break;case 3:this.SF(2);break;default:this.SF(0);}break;default:D5.NH=true;
}},Ap4:function(L2,AcV){if(!L2)return;var Fx=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcV,true);Fx.
CW(HV);var AAX=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAX.Initialize(
3,5,0,true);Fx.CW(AAX);L2.Bk(Fx);},Aiw:function(G){var Ap2=0;var A3Q=A._GetAutoObject(
A.Device.Device).Bt.B9();var B1=A._NewObject(A.Device.Rating,0);while(Ap2<A3Q){B1.
E4(Ap2,A._GetAutoObject(A.Device.Device).Bt);this.Bdn(B1,0);var BCi=A._GetAutoObject(
A.Device.Helper).ZN(2);this.Bdn(B1,BCi);Ap2++;}C.FB.Aiw.call(this,G);},Aao:function(
G){A.pe([this,this.Bc2],this);C.FB.Aao.call(this,G);},Adm:function(G){this.At8=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.At7=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At_=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.At$=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aua=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aub=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auc=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FB.Adm.
call(this,G);},DJ:function(G){C.FB.DJ.call(this,G);this.N.OO(true);this.N.OP(true
);},Bdn:function(D3,BbX){if(!D3||(D3.Timestamp<BbX))return;if(!BbX){this.At8.Set(
D3.Appearance,this.At8.Get(D3.Appearance)+1);this.At_.Set(D3.Faeces,this.At_.Get(
D3.Faeces)+1);this.Aua.Set(D3.Feed,this.Aua.Get(D3.Feed)+1);this.Auc.Set(D3.Respiratory
,this.Auc.Get(D3.Respiratory)+1);}else{this.At7.Set(D3.Appearance,this.At7.Get(D3.
Appearance)+1);this.At9.Set(D3.Faeces,this.At9.Get(D3.Faeces)+1);this.At$.Set(D3.
Feed,this.At$.Get(D3.Feed)+1);this.Aub.Set(D3.Respiratory,this.Aub.Get(D3.Respiratory
)+1);}},SF:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yr.Kv(this.AaH.Lu(E));A.pe([this,this.Bc2],this);},Bc2:function(G){var AaI=null;
var AaJ=null;switch(this.RatedAttribute){case 2:{AaI=this.At7;AaJ=this.At8;}break;
case 4:{AaI=this.At9;AaJ=this.At_;}break;case 1:{AaI=this.At$;AaJ=this.Aua;}break;
case 0:{AaI=A._NewObject(A.Device.Int32ArrayWrapper,0);AaJ=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaI=this.Aub;AaJ=this.Auc;}break;default:throw new
Error(Brz+this.RatedAttribute.toFixed());}var AGj=A._NewObject(A.acv.AUf,0);AGj.
Os(AaI.Get(3),A.jb.E1);AGj.Os(AaI.Get(2),A.jb.H8);AGj.Os(AaI.Get(1),A.jb.Gi);var
AGk=A._NewObject(A.acv.AUf,0);AGk.Os(AaJ.Get(3),A.jb.E1);AGk.Os(AaJ.Get(2),A.jb.
H8);AGk.Os(AaJ.Get(1),A.jb.Gi);this.Abi.Ab5(AGj);this.Abj.Ab5(AGk);var A4f=AaI.AmV(
)-AaI.Get(5);var BfA=0;var Bfy=0;if(A4f>0){BfA=(AaI.Get(2)/A4f)*100;Bfy=(AaI.Get(
1)/A4f)*100;}var AK8=AaJ.AmV()-AaJ.Get(5);this.I5.Z(!AK8);var BfB=0;var Bfz=0;if(
AK8>0){BfB=(AaJ.Get(2)/AK8)*100;Bfz=(AaJ.Get(1)/AK8)*100;}this.Abi.A_F(A.abk(BfA
,0,0)+Aad);this.Abi.A_h(A.abk(Bfy,0,0)+Aad);this.Abj.A_F(A.abk(BfB,0,0)+Aad);this.
Abj.A_h(A.abk(Bfz,0,0)+Aad);},_Init:function(aArg){C.FB._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaH={I:this},0);C.NE._Init.call(this.
Yr={I:this},0);C.ACG._Init.call(this.Abj={I:this},0);C.ACG._Init.call(this.Abi={
I:this},0);this.__proto__=C.AOe;this.Dr(C.AO9);this.Akw(A.aaR(A.acf.A6e));this.Ae8(
A.aaR(A.acf.Anl));this.Yr.H(IV);this.Yr.Aj(true);this.Yr.T(A.aaR(A.acf.Axo)+A.aaR(
A.acf.Colon));this.Yr.Bi(false);this.Yr.Bm8(false);this.Abj.H(BrA);this.Abj.T(A.
aaR(A.acf.AF6));this.Abi.H(BrB);this.Abi.T(A.aaR(A.acf.A7i));this.I5.H(Aog);this.
J(this.Yr,-1);this.J(this.Abj,-1);this.J(this.Abi,-1);this.At8=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At7=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At_=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aua=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At$=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auc=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aub=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FB;this.AaH._Done();this.Yr._Done();this.Abj._Done();this.Abi.
_Done();C.FB._Done.call(this);},_ReInit:function(){C.FB._ReInit.call(this);this.
AaH._ReInit();this.Yr._ReInit();this.Abj._ReInit();this.Abi._ReInit();this.Akw(A.
aaR(A.acf.A6e));this.Ae8(A.aaR(A.acf.Anl));this.Yr.T(A.aaR(A.acf.Axo)+A.aaR(A.acf.
Colon));this.Abj.T(A.aaR(A.acf.AF6));this.Abi.T(A.aaR(A.acf.A7i));},_Mark:function(
D){var B;C.FB._Mark.call(this,D);if((B=this.At8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At_)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aua)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At$)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Auc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aub)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOf={Aeu:null,UL:null,UM:null,Aet:null,UI:null,UJ:null,AJJ:0,AJI:0,AJn:0,AJm:
0,Adf:false,CP:function(){this.Aao(this);},Ap4:function(L2,AcV){if(!L2)return;var
Fx=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcV,true);Fx.CW(HV);var ABe=A._NewObject(A.Device.Int32FilterCriterion
,0);ABe.Initialize(7,2,0,true);Fx.CW(ABe);L2.Bk(Fx);},Aiw:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJJ++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJI++;var Ap2=0;var A3Q=A._GetAutoObject(
A.Device.Device).Bt.B9();var At6;var ABy=0;while(Ap2<A3Q){this.Adf=true;At6=A._GetAutoObject(
A.Device.Device).Bt.I6(Ap2,9);if(At6===1)ABy=1;else if((At6===2)&&(ABy!==1))ABy=
2;Ap2++;}if(ABy===1)this.AJm++;else if(ABy===2)this.AJn++;C.FB.Aiw.call(this,G);
},Aao:function(G){var Bfw=0;var Bfx=0;if(this.Td>0){Bfw=(this.AJJ/this.Td)*100;Bfx=(
this.AJI/this.Td)*100;}this.UL.Kv(((((((A.abk(Bfw,0,0)+AID)+this.AJJ.toFixed())+
CQ)+A.aaR(A.acf.AEn))+CQ)+this.Td.toFixed())+Ob);this.UM.Kv(((((((A.abk(Bfx,0,0)+
AID)+this.AJI.toFixed())+CQ)+A.aaR(A.acf.AEn))+CQ)+this.Td.toFixed())+Ob);var Bfu=
0;var Bfv=0;if(this.Td>0){Bfu=(this.AJn/this.Td)*100;Bfv=(this.AJm/this.Td)*100;
}this.UI.Kv(((((((A.abk(Bfu,0,0)+AID)+this.AJn.toFixed())+CQ)+A.aaR(A.acf.AEn))+
CQ)+this.Td.toFixed())+Ob);this.UJ.Kv(((((((A.abk(Bfv,0,0)+AID)+this.AJm.toFixed(
))+CQ)+A.aaR(A.acf.AEn))+CQ)+this.Td.toFixed())+Ob);this.I5.Z(!this.Adf);C.FB.Aao.
call(this,G);},Adm:function(G){this.AJm=0;this.AJn=0;this.AJI=0;this.AJJ=0;this.
Adf=false;C.FB.Adm.call(this,G);},_Init:function(aArg){C.FB._Init.call(this,aArg
);C.Agv._Init.call(this.Aeu={I:this},0);C.Ajp._Init.call(this.UL={I:this},0);C.Ajp.
_Init.call(this.UM={I:this},0);C.Agv._Init.call(this.Aet={I:this},0);C.Ajp._Init.
call(this.UI={I:this},0);C.Ajp._Init.call(this.UJ={I:this},0);this.__proto__=C.AOf;
this.Dr(C.AO_);this.Akw(A.aaR(A.acf.A6f));this.Ae8(A.aaR(A.acf.Arr));this.Aeu.H(
IV);this.Aeu.Aj(true);this.Aeu.T(A.aaR(A.acf.A6j));this.Aeu.Bi(false);this.UL.H(
Qa);this.UL.Aj(true);this.UL.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UL.
Bi(true);this.UL.AkB(2);this.UM.H(Aab);this.UM.Aj(true);this.UM.T(A.aaR(A.acf.Avt
)+A.aaR(A.acf.Colon));this.UM.Bi(true);this.UM.AkB(1);this.Aet.H(Ald);this.Aet.Aj(
true);this.Aet.T(A.aaR(A.acf.A6k));this.Aet.Bi(false);this.UI.H(Aop);this.UI.Aj(
true);this.UI.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UI.Bi(true);this.
UI.AkB(2);this.UJ.H(As5);this.UJ.Aj(true);this.UJ.T(A.aaR(A.acf.Avt)+A.aaR(A.acf.
Colon));this.UJ.Bi(true);this.UJ.AkB(1);this.J(this.Aeu,0);this.J(this.UL,0);this.
J(this.UM,0);this.J(this.Aet,0);this.J(this.UI,0);this.J(this.UJ,0);this.UL.S(A.
aaL(A.fl.Ak));this.UM.S(A.aaL(A.fl.Ak));this.UI.S(A.aaL(A.fl.Ak));this.UJ.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FB;this.Aeu._Done();this.UL._Done(
);this.UM._Done();this.Aet._Done();this.UI._Done();this.UJ._Done();C.FB._Done.call(
this);},_ReInit:function(){C.FB._ReInit.call(this);this.Aeu._ReInit();this.UL._ReInit(
);this.UM._ReInit();this.Aet._ReInit();this.UI._ReInit();this.UJ._ReInit();this.
Akw(A.aaR(A.acf.A6f));this.Ae8(A.aaR(A.acf.Arr));this.Aeu.T(A.aaR(A.acf.A6j));this.
UL.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UM.T(A.aaR(A.acf.Avt)+A.aaR(
A.acf.Colon));this.Aet.T(A.aaR(A.acf.A6k));this.UI.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UJ.T(A.aaR(A.acf.Avt)+A.aaR(A.acf.Colon));this.UL.S(A.aaL(A.fl.
Ak));this.UM.S(A.aaL(A.fl.Ak));this.UI.S(A.aaL(A.fl.Ak));this.UJ.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.FB._Mark.call(this,D);if((B=this.Aeu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqJ={K8:null
,Aje:null,Ajf:null,Amm:null,Abw:null,WY:null,Abt:null,S2:null,Abu:null,S3:null,Abx:
null,WZ:null,Ay:null,Ada:0,AAr:0,Apt:0,A2x:0,BdT:0,CP:function(){this.Aao(this);
},DE:function(G){switch(this.Cq.CO){case 4:{if(this.I5.Fp())return;var Qx=this.Y.
Br[1]+80;this.Y.Gb([this.Y.Br[0],Qx]);this.Y.Vw(null,null);}break;case 5:{if(this.
I5.Fp())return;var Qx=this.Y.Br[1]-80;this.Y.Gb([this.Y.Br[0],Qx]);this.Y.Vw(null
,null);}break;default:C.FB.DE.call(this,G);}},Ap4:function(L2,AcV){if(!L2)return;
var Fx=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcV,true);Fx.CW(HV);var Ac7=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac7.Initialize(8,2,0,true);Fx.CW(Ac7);L2.Bk(Fx);},Aiw:function(G){if(this.BdJ(
)){this.K8.Os(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Ard()){var Qj=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qj>0){var A17=A._GetAutoObject(A.acj.DU).Alx(Qj,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Aje.
Os(A17);}}var A2S=A._GetAutoObject(A.Device.Device).Bt.B9()-2;if(A2S>=0){var Bz9=
A._GetAutoObject(A.Device.Device).Bt.AC1(A2S,8);var Bz8=A._GetAutoObject(A.Device.
Device).Bt.Hu(A2S,6);var Qj=A._GetAutoObject(A.Device.Helper).L9(Bz8,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qj>0){var A17=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-Bz9)/Qj)|0;this.Ajf.Os(A17);}}if((A._GetAutoObject(
A.Device.Helper).W.Ard()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RN()<=180)){var ALv=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tm=A._GetAutoObject(A.Device.
Helper).L9(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BBo=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALv/Tm);this.Amm.Os(BBo);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Ada++;this.Apt=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZN(7)){this.AAr++;this.A2x=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BdT=A._GetAutoObject(A.Device.Helper).L9(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.FB.Aiw.call(
this,G);},Aao:function(G){var A4C=this.Aje.AjM()|0;var A4E=this.Ajf.AjM()|0;if(this.
Ada>1)A._GetAutoObject(A.Device.Device).A3(56,true,this.Ada.toFixed(),0,null);if(
this.Ada===1)A._GetAutoObject(A.Device.Device).A3(53,true,this.Apt.toFixed(),0,null
);if(this.AAr>1)A._GetAutoObject(A.Device.Device).A3(52,true,this.AAr.toFixed(),
0,null);if(this.AAr===1)A._GetAutoObject(A.Device.Device).A3(57,true,(this.A2x.toFixed(
)+As9)+this.BdT.toFixed(),0,null);if(this.K8.AY>0)this.WY.T(((((((A._GetAutoObject(
A.Device.Converter).Ax0(this.K8.AjM()|0,1)+AyC)+A._GetAutoObject(A.Device.Converter
).Ax0(this.K8.AqU()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).Af0())+AyD)+this.K8.AY.
toFixed())+Ob);else this.WY.T(A.aaR(A.acf.Unknown));if(this.Aje.AY>0)this.S2.T(((((((
A._GetAutoObject(A.Device.Converter).S7(A4C,2,true)+AyC)+A._GetAutoObject(A.Device.
Converter).S7(this.Aje.AqU()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).Aat())+AyD
)+this.Aje.AY.toFixed())+Ob);else this.S2.T(A.aaR(A.acf.Unknown));if(this.Ajf.AY>
0)this.S3.T(((((((A._GetAutoObject(A.Device.Converter).S7(A4E,2,true)+AyC)+A._GetAutoObject(
A.Device.Converter).S7(this.Ajf.AqU()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).
Aat())+AyD)+this.Ajf.AY.toFixed())+Ob);else this.S3.T(A.aaR(A.acf.Unknown));if(this.
Amm.AY>0)this.WZ.T(((((((A.abk(this.Amm.AjM(),0,1)+AyC)+A.abk(this.Amm.AqU(),0,1
))+CQ)+A.aaR(A.acf.BhQ))+AyD)+this.Amm.AY.toFixed())+Ob);else this.WZ.T(A.aaR(A.
acf.Unknown));var A4D=0;var A4F=0;var Adf=false;if(this.K8.AY>0)Adf=true;var Ib=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AJ2=A._GetAutoObject(A.Device.
Device).An.Filter.DL(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJ2)?AJ2:null))Ib=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJ2)?AJ2:null
).A5;}if(this.Aje.AY>0){Adf=true;A4D=A._GetAutoObject(A.Device.Converter).A$X(A4C
,Ib);}if(this.Ajf.AY>0){Adf=true;A4F=A._GetAutoObject(A.Device.Converter).A$X(A4E
,Ib);}this.S2.AkB(A4D);this.S3.AkB(A4F);this.I5.Z(!Adf);C.FB.Aao.call(this,G);},
Adm:function(G){this.K8.Yc();this.Aje.Yc();this.Ajf.Yc();this.Amm.Yc();this.Ada=
0;this.AAr=0;this.Apt=0;this.A2x=0;C.FB.Adm.call(this,G);},Fk:function(G){var B;
this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.
My(-this.Y.Br[1]);},BdJ:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FB._Init.call(this,aArg);C.Agv._Init.call(this.Abw={I:
this},0);C.IG._Init.call(this.WY={I:this},0);C.Agv._Init.call(this.Abt={I:this},
0);C.Ajp._Init.call(this.S2={I:this},0);C.Agv._Init.call(this.Abu={I:this},0);C.
Ajp._Init.call(this.S3={I:this},0);C.Agv._Init.call(this.Abx={I:this},0);C.IG._Init.
call(this.WZ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqJ;
this.Dr(C.Avs);this.Akw(A.aaR(A.acf.A6g));this.Ae8(A.aaR(A.acf.Akj));this.Abw.H(
AIz);this.Abw.Aj(true);this.Abw.T(A.aaR(A.acf.A5b));this.Abw.Bi(false);this.Abw.
Kt(5);this.WY.H(AZX);this.WY.Aj(true);this.WY.T(A.jV);this.WY.Bi(true);this.Abt.
H(Aov);this.Abt.Aj(true);this.Abt.T(A.aaR(A.acf.ALU));this.Abt.Bi(false);this.Abt.
Kt(5);this.S2.H(Ah1);this.S2.Aj(true);this.S2.T(A.jV);this.S2.Bi(true);this.S2.Kv(
A.jV);this.Abu.H(Atb);this.Abu.Aj(true);this.Abu.T(A.aaR(A.acf.Auu));this.Abu.Bi(
false);this.Abu.Kt(5);this.S3.H(BrC);this.S3.Aj(true);this.S3.T(A.jV);this.S3.Bi(
true);this.S3.Kv(A.jV);this.Abx.H(AZY);this.Abx.Aj(true);this.Abx.T(A.aaR(A.acf.
A5j));this.Abx.Bi(false);this.Abx.Kt(5);this.WZ.H(Aow);this.WZ.Aj(true);this.WZ.
T(A.jV);this.WZ.Bi(true);this.Ay.H(It);this.J(this.Abw,-1);this.J(this.WY,-1);this.
J(this.Abt,-1);this.J(this.S2,-1);this.J(this.Abu,-1);this.J(this.S3,-1);this.J(
this.Abx,-1);this.J(this.WZ,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fk];this.
K8=A._NewObject(C.AvP,0);this.Aje=A._NewObject(C.AvP,0);this.Ajf=A._NewObject(C.
AvP,0);this.WY.S(A.aaL(A.fl.Af));this.S2.S(A.aaL(A.fl.Ak));this.S3.S(A.aaL(A.fl.
Ak));this.WZ.S(A.aaL(A.fl.Ak));this.Amm=A._NewObject(C.A6q,0);},_Done:function(){
this.__proto__=C.FB;this.Abw._Done();this.WY._Done();this.Abt._Done();this.S2._Done(
);this.Abu._Done();this.S3._Done();this.Abx._Done();this.WZ._Done();this.Ay._Done(
);C.FB._Done.call(this);},_ReInit:function(){C.FB._ReInit.call(this);this.Abw._ReInit(
);this.WY._ReInit();this.Abt._ReInit();this.S2._ReInit();this.Abu._ReInit();this.
S3._ReInit();this.Abx._ReInit();this.WZ._ReInit();this.Ay._ReInit();this.Akw(A.aaR(
A.acf.A6g));this.Ae8(A.aaR(A.acf.Akj));this.Abw.T(A.aaR(A.acf.A5b));this.Abt.T(A.
aaR(A.acf.ALU));this.Abu.T(A.aaR(A.acf.Auu));this.Abx.T(A.aaR(A.acf.A5j));this.WY.
S(A.aaL(A.fl.Af));this.S2.S(A.aaL(A.fl.Ak));this.S3.S(A.aaL(A.fl.Ak));this.WZ.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.FB._Mark.call(this,D);if((
B=this.K8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aje)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amm)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abt)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abs={_Init:function(aArg){C.AjP._Init.call(this,aArg);this.__proto__=C.Abs;this.
Dd.Ax(A.aaL(A.ach.ADy));},_className:"Application::HeaderEvaluationFilter"};C.Kp={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjP.DX.call(this
,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter).AdX(A._GetAutoObject(A.Device.
Device).Kj));},_Init:function(aArg){C.AjP._Init.call(this,aArg);this.__proto__=C.
Kp;},_ReInit:function(){C.AjP._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avs={Init:function(aArg){this.Dd.Ax(A._GetAutoObject(A.acj.DU).Bdg());},_Init:
function(aArg){C.Abs._Init.call(this,aArg);this.__proto__=C.Avs;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AO_={Init:function(
aArg){this.Dd.Ax(A.aaL(A.ach.Ag3));},_Init:function(aArg){C.Abs._Init.call(this,
aArg);this.__proto__=C.AO_;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AO9={Init:function(aArg){this.Dd.Ax(A.aaL(A.ach.Aq_));},_Init:function(aArg){
C.Abs._Init.call(this,aArg);this.__proto__=C.AO9;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AO8={Sk:null,Dd:null,AP:null,CP:function(){this.Sk.R(A.aaR(A.acf.ANa));},De:
function(E){C.BQ.De.call(this,E);this.Sk.L(E);this.Dd.L(E);},_Init:function(aArg
){C.BQ._Init.call(this,aArg);C.CH._Init.call(this.Sk={I:this},0);A.acg.Ap._Init.
call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0);this.__proto__=
C.AO8;this.Sk.H(BrD);this.Sk.R(A.aaR(A.acf.ANa));this.Sk.A6(0x11);this.Dd.H(BrE);
this.AP.DC(BrF);this.AP.DM(BrG);this.AP.L(A.jb.Bc);this.J(this.Sk,0);this.J(this.
Dd,0);this.J(this.AP,0);this.Sk.S(A.aaL(A.fl.Af));this.Sk.A2(A.aaL(A.fl.Ak));this.
Dd.Ax(A.aaL(A.ach.AQh));},_Done:function(){this.__proto__=C.BQ;this.Sk._Done();this.
Dd._Done();this.AP._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Sk._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Sk.R(A.aaR(
A.acf.ANa));this.Sk.S(A.aaL(A.fl.Af));this.Sk.A2(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aev={TT:null,AjZ:
null,AjW:null,AjX:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.TT={I:this},0);A.acg.Ap._Init.call(this.AjZ={I:this},0);A.acg.Ap._Init.
call(this.AjW={I:this},0);A.acg.Ap._Init.call(this.AjX={I:this},0);this.__proto__=
C.Aev;this.TT.H(BrH);this.TT.R(A.aaR(A.acf.Year));this.TT.A6(0x11);this.TT.L(A.jb.
Text);this.AjZ.H(Bah);this.AjZ.L(A.jb.Text);this.AjW.H(BrI);this.AjW.L(A.jb.Text
);this.AjX.H(BrJ);this.AjX.L(A.jb.Text);this.J(this.TT,0);this.J(this.AjZ,0);this.
J(this.AjW,0);this.J(this.AjX,0);this.TT.S(A.aaL(A.fl.Ko));this.TT.A2(A.aaL(A.fl.
Il));this.AjZ.Ax(A.aaL(A.ach.AQu));this.AjW.Ax(A.aaL(A.ach.AQt));this.AjX.Ax(A.aaL(
A.ach.AQB));},_Done:function(){this.__proto__=C.EA;this.TT._Done();this.AjZ._Done(
);this.AjW._Done();this.AjX._Done();C.EA._Done.call(this);},_ReInit:function(){C.
EA._ReInit.call(this);this.TT._ReInit();this.AjZ._ReInit();this.AjW._ReInit();this.
AjX._ReInit();this.TT.R(A.aaR(A.acf.Year));this.TT.S(A.aaL(A.fl.Ko));this.TT.A2(
A.aaL(A.fl.Il));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.TT).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AjZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjX)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmM={Ajv:null,AP:null
,A$:null,Ea:null,UF:null,ST:null,Gt:null,XF:0,AtF:0,AlB:0,ABz:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.ST.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.ST.M[2]-1,0,this.ST.M[
2]+1,aSize[1]]);this.UF.H([this.ST.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UF.M[2]-1,0,this.UF.M[2]+1,aSize[1]]);this.Gt.H([this.UF.M[2],0,aSize[
0],aSize[1]]);this.Ajv.H(this.Gt.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABz.toFixed());this.ST.L(this.V.AQ);this.ST.R(this.AlB.toFixed());this.UF.
L(this.V.AQ);this.UF.R(this.AtF.toFixed());var B1=this.BBn(this.XF);this.Gt.L(A.
_GetAutoObject(A.acj.Assessment).Xv(B1));this.Ajv.L(A._GetAutoObject(A.acj.Assessment
).Qo(B1));this.Gt.R(A.abk(this.XF,0,0)+Aad);},Cf:function(Ad){if(!this.AX)return;
this.Hr=Ad;Ad=(this.AX.B9()-Ad)-1;if(!!this.AX){this.AlB=this.AX.CF(Ad,1);this.AtF=
this.AX.CF(Ad,2);this.ABz=this.AX.CF(Ad,0);if(this.AlB>0)this.XF=(this.AtF/this.
AlB)*100;else this.XF=0;this.Am();}},BBn:function(XF){if(XF>=8)return 1;else if(
XF>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ajv={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UF={I:this},0);A.acg.Text._Init.call(this.ST={I:this},0
);A.acg.Text._Init.call(this.Gt={I:this},0);this.__proto__=C.AmM;this.Ajv.H(Aom);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.H(Aom);this.Ea.L(A.jb.Bc);this.UF.
L(A.jb.Text);this.ST.H(Aom);this.ST.L(A.jb.Text);this.Gt.L(A.jb.Text);this.J(this.
Ajv,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.UF,0);this.
J(this.ST,0);this.J(this.Gt,0);this.UF.S(A.aaL(A.fl.Af));this.ST.S(A.aaL(A.fl.Af
));this.Gt.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajv._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.UF._Done(
);this.ST._Done();this.Gt._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajv._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea.
_ReInit();this.UF._ReInit();this.ST._ReInit();this.Gt._ReInit();this.UF.S(A.aaL(
A.fl.Af));this.ST.S(A.aaL(A.fl.Af));this.Gt.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ST)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajp={
BT:null,AxV:A.jV,Rating:0,Ai:function(Ae){C.IG.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qo(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xv(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IG.S.call(this,E);if((E===A.aaL(A.fl.Ko))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Il))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Kv:function(E){if(this.AxV===E)return;this.AxV=E;this.
BT.R(E);},AkB:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IG._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Ajp;this.BT.AZ(0x34);this.BT.H(Aae);this.BT.I$(true);this.BT.
A6(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IG;this.BT._Done();C.IG._Done.call(
this);},_ReInit:function(){C.IG._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACG={
N3:null,SJ:null,V:null,AnN:null,AnM:null,Acd:null,Acc:null,DK:Lv,A$2:A.jV,A_0:A.
jV,Ab5:function(E){if(this.N3===E)return;this.N3=E;this.SJ.Ab5(this.N3);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_F:function(E){if(this.A$2===E
)return;this.A$2=E;this.Acd.R(E);},A_h:function(E){if(this.A_0===E)return;this.A_0=
E;this.Acc.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SJ._Init.
call(this.SJ={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnN={I:this},0);A.acg.AL._Init.call(this.AnM={I:this},0);A.acg.Text._Init.
call(this.Acd={I:this},0);A.acg.Text._Init.call(this.Acc={I:this},0);this.__proto__=
C.ACG;this.H(BrK);this.SJ.H(BrL);this.SJ.Ar(false);this.SJ.Bnf(360);this.SJ.Bnp(
0.5);this.V.AZ(0x1D);this.V.H(UT);this.V.KR(true);this.V.R(Lv);this.V.L(A.jb.Text
);this.AnN.H(Bai);this.AnN.L(A.jb.H8);this.AnM.H(Baj);this.AnM.L(A.jb.Gi);this.Acd.
AZ(0x1D);this.Acd.H(Bai);this.Acd.L(A.jb.Text);this.Acc.AZ(0x1D);this.Acc.H(Baj);
this.Acc.L(A.jb.CS);this.J(this.SJ,0);this.J(this.V,0);this.J(this.AnN,0);this.J(
this.AnM,0);this.J(this.Acd,0);this.J(this.Acc,0);this.SJ.Bnq(A.aaL(A.acv.ATQ));
this.V.S(A.aaL(A.fl.Ak));this.Acd.S(A.aaL(A.fl.Ak));this.Acc.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SJ._Done();this.V._Done();this.AnN.
_Done();this.AnM._Done();this.Acd._Done();this.Acc._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SJ._ReInit();this.V._ReInit(
);this.AnN._ReInit();this.AnM._ReInit();this.Acd._ReInit();this.Acc._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acd.S(A.aaL(A.fl.Ak));this.Acc.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N3)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkP={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.AkP;this.H(UX);this.Background.AZ(0x3F);this.Background.
H(UX);this.Background.L(A.jb.BjP);this.Text.AZ(0x3F);this.Text.H(UX);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Rc={Ak0:null,NS:null,C8:null,AcB:null,JN:null,TemperatureUnit:null,MF:null,PU:
null,Sg:null,Uu:null,Lq:null,Jf:null,ZZ:null,ZY:null,Si:null,HF:null,AjF:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlJ());
this.Uu.R(A._GetAutoObject(A.acj.Temperature).AlJ());this.Si.Z(!A._GetAutoObject(
A.Device.Device).AmO);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An5();this.AxS(
);this.AcE();this.AxT();},I0:function(G){this.WM(this);},CC:function(G){var B;C.
AB.CC.call(this,G);A.zX([this,this.AKx],[B=A._GetAutoObject(A.Device.Device),B.AEz
,B.AIP],0);A.zX([this,this.AAG],[B=A._GetAutoObject(A.Device.Device),B.AED,B.AIR
],0);A.zX([this,this.AAG],[B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0c],0);A.
zX([this,this.A3c],[B=A._GetAutoObject(A.Device.Device),B.Aru,B.Ate],0);A.zX([this
,this.A26],[B=A._GetAutoObject(A.Device.Device),B.AEw,B.AIM],0);A._GetAutoObject(
A.Device.Device).AhL();if(A._GetAutoObject(A.Device.Device).AmO)A._GetAutoObject(
A.Device.Device).Ae0(true);A._GetAutoObject(A.Device.Device).AxE();A.pe([this,this.
A26],this);A.pe([this,this.AAG],this);A.pe([this,this.A3c],this);},E5:function(G
){var B;A._GetAutoObject(A.Device.Device).AhL();A._GetAutoObject(A.Device.Device
).Uq(false);A._GetAutoObject(A.Device.Device).Ae_(false);A._GetAutoObject(A.Device.
Device).Ae0(false);A.z$([this,this.AKx],[B=A._GetAutoObject(A.Device.Device),B.AEz
,B.AIP],0);A.z$([this,this.AAG],[B=A._GetAutoObject(A.Device.Device),B.AED,B.AIR
],0);A.z$([this,this.AAG],[B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0c],0);A.
z$([this,this.A3c],[B=A._GetAutoObject(A.Device.Device),B.Aru,B.Ate],0);A.z$([this
,this.A26],[B=A._GetAutoObject(A.Device.Device),B.AEw,B.AIM],0);},AAG:function(G
){this.Am();},An5:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CJ);this.C8.L(A.jb.Gi);this.JN.L(this.C8.AQ);this.
MF.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CJ);this.C8.L(A.jb.AV);this.JN.L(A.jb.Text);this.MF.L(this.JN.AQ);this.TemperatureUnit.
L(this.JN.AQ);this.HF.L(A.jb.Gi);}}},AxS:function(){this.Ak0.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JN.R(A.aaR(A.acf.ADN));this.C8.Ax(A.aaL(A.ach.AvG));this.C8.Cw(0);
this.NS.Cw(0);}break;case 1:{this.AVv(A._GetAutoObject(A.Device.Device).Lt,false
);this.C8.Ax(A.aaL(A.ach.AvG));this.NS.Cw(0);}break;case 2:{this.Sg.R(A._GetAutoObject(
A.Device.Converter).AkZ(A._GetAutoObject(A.Device.Device).AF_));this.AVv(A._GetAutoObject(
A.Device.Device).Lt,false);this.C8.Ax(null);this.NS.Cw(1);this.AcB.Z(true);this.
PU.Z(true);this.Sg.Z(true);this.Uu.Z(true);}break;case 3:{this.AUz();this.AVv(A.
_GetAutoObject(A.Device.Device).Lt,true);this.AcB.Z(false);this.PU.Z(false);this.
Sg.Z(false);this.Uu.Z(false);}break;case 4:{this.JN.R(A.aaR(A.acf.Bj2));this.MF.
R(A.aaR(A.acu.Aki));this.C8.Ax(A.aaL(A.ach.AvI));this.C8.Cw(2);this.NS.Cw(0);}break;
default:A.ab5("%s%e",AHX,A._GetAutoObject(A.Device.Device).MeasureState);}},AcE:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Lt<=3240)||(A._GetAutoObject(A.Device.Device
).Lt>=5460))this.N.C2(null);else this.N.C2(A.aaL(A.ach.Aey));this.N.Cs(null);}break;
default:;}},AsD:function(G){A._GetAutoObject(C.A9).FA();},WM:function(G){},A0q:function(
s){this.WM(s);},AkU:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BBa(this);break;default:;}},A0p:function(s){this.AkU(s);},AVv:
function(AoM,BzX){if(BzX)this.Lq.L(A.jb.Bm);else this.Lq.L(A.jb.Gi);if(AoM<=3240
){this.MF.Z(false);this.TemperatureUnit.Z(false);this.Lq.Z(true);this.Lq.R(A.aaR(
A.acu.AVf));}else if(AoM>=5460){this.MF.Z(false);this.TemperatureUnit.Z(false);this.
Lq.Z(true);this.Lq.R(A.aaR(A.acu.BpU));}else{this.MF.Z(true);this.TemperatureUnit.
Z(true);this.Lq.Z(false);this.MF.R(A._GetAutoObject(A.Device.Converter).AkZ(AoM)
);}},AxT:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lt<=3240)||(A._GetAutoObject(A.Device.
Device).Lt>=5460))this.JN.R(A.aaR(A.acf.ADN));else this.JN.R(A.aaR(A.acf.Bqu));break;
default:;}},AxU:function(){},Bqd:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.ZZ.Ar(true);break;case 4:this.ZY.Ar(true);break;default:{
this.ZZ.Ar(false);this.ZY.Ar(false);A._GetAutoObject(A.Device.Device).Ae_(false);
}}},AKx:function(G){this.Am();this.AxU();this.Bqd();this.Bqb();},A3c:function(G){
if(A._GetAutoObject(A.Device.Device).AmP){this.Si.L(A.jb.H8);this.Si.Cw(1);}else{
this.Si.L(A.jb.Bm);this.Si.Cw(0);}},BBa:function(G){if(!A._GetAutoObject(A.Device.
Device).AmO)A._GetAutoObject(A.Device.Device).Ae0(!A._GetAutoObject(A.Device.Device
).AmP);},Bqb:function(){if(A._GetAutoObject(A.Device.Device).AmO){this.Si.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).Ae0(true);else A._GetAutoObject(A.Device.Device).Ae0(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Si.Z(true);else this.Si.Z(false);},AKz:function(
G){this.CC(this);},AUz:function(){A.ab5("%s",Bag);},A26:function(G){if(A._GetAutoObject(
A.Device.Device).HF){this.JN.H(BrM);this.MF.H(BrN);this.TemperatureUnit.H(BrO);}
else{this.JN.H(BrP);this.MF.H(BrQ);this.TemperatureUnit.H(BrR);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gl._Init.call(this.Ak0={I:this},0);A.acg.
Ap._Init.call(this.NS={I:this},0);A.acg.Ap._Init.call(this.C8={I:this},0);A.acg.
Ap._Init.call(this.AcB={I:this},0);A.acg.Text._Init.call(this.JN={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MF={
I:this},0);A.acg.Text._Init.call(this.PU={I:this},0);A.acg.Text._Init.call(this.
Sg={I:this},0);A.acg.Text._Init.call(this.Uu={I:this},0);C.CH._Init.call(this.Lq={
I:this},0);A.Device.TF._Init.call(this.Jf={I:this},0);A.Device.TF._Init.call(this.
ZZ={I:this},0);A.Device.TF._Init.call(this.ZY={I:this},0);A.acg.Ap._Init.call(this.
Si={I:this},0);C.CH._Init.call(this.HF={I:this},0);A.acl.TF._Init.call(this.AjF={
I:this},0);this.__proto__=C.Rc;var B;this.N.Z(true);this.Ak0.Fq(1000);this.Ak0.B2=
2;this.NS.H(BrS);this.NS.L(A.jb.CS);this.C8.H(BrT);this.C8.L(A.jb.AV);this.C8.Cw(
0);this.C8.Z(true);this.AcB.H(BrU);this.AcB.L(A.jb.Text);this.AcB.Z(false);this.
JN.KR(true);this.JN.R(A.aaR(A.acf.ADN));this.JN.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.MF.A6(0x14);this.MF.R(A.aaR(A.acu.
Aki));this.MF.L(A.jb.Text);this.PU.H(BrV);this.PU.R(A.aaR(A.acf.PU));this.PU.L(A.
jb.Text);this.PU.Z(false);this.Sg.H(BrW);this.Sg.A6(0x14);this.Sg.R(BrX);this.Sg.
L(A.jb.Text);this.Sg.Z(false);this.Uu.H(BrY);this.Uu.R(BrZ);this.Uu.L(A.jb.Text);
this.Uu.Z(false);this.Lq.H(Br0);this.Lq.R(A.aaR(A.acu.AVf));this.Lq.A6(0x12);this.
Lq.L(A.jb.Gi);this.Jf.B2=false;this.Jf.Cx=true;this.Jf.HM(1);this.Jf.Fq(4000);this.
Jf.Um(0);this.ZZ.B2=false;this.ZZ.Cx=true;this.ZZ.HM(2);this.ZZ.Fq(400);this.ZZ.
Um(200);this.ZY.B2=false;this.ZY.Cx=true;this.ZY.HM(3);this.ZY.Fq(500);this.ZY.Um(
250);this.Si.H(Br1);this.HF.H(Br2);this.HF.Z(A._GetAutoObject(A.Device.Device).HF
);this.HF.R(A.aaR(A.acf.HF));this.HF.A6(0x12);this.HF.L(A.jb.Gi);this.AjF.Ar(A._GetAutoObject(
A.Device.Device).HF);this.AjF.Fq(500);this.AjF.Um(1000);this.J(this.NS,0);this.J(
this.C8,0);this.J(this.AcB,0);this.J(this.JN,0);this.J(this.TemperatureUnit,0);this.
J(this.MF,0);this.J(this.PU,0);this.J(this.Sg,0);this.J(this.Uu,0);this.J(this.Lq
,0);this.J(this.Si,0);this.J(this.HF,0);this.N.CE=[this,this.AsD];this.N.Cg=[this
,this.A0p];this.N.Cl=[this,this.A0q];this.N.C1(A.aaL(A.ach.Aex));this.Ak0.Q=[B=this.
C8,B.ASu,B.Cw];this.NS.Ax(A.aaL(A.ach.NS));this.C8.Ax(A.aaL(A.ach.AvG));this.AcB.
Ax(A.aaL(A.ach.AQP));this.JN.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MF.S(A.aaL(A.fl.Aeq));this.PU.S(A.aaL(A.fl.Af));this.Sg.S(A.aaL(A.fl.EK
));this.Uu.S(A.aaL(A.fl.EK));this.Lq.S(A.aaL(A.fl.Aeq));this.Lq.A2(A.aaL(A.fl.EK
));this.Lq.Cv(A.aaL(A.fl.Af));this.Jf.Q=[B=A._GetAutoObject(A.Device.Device),B.ASL
,B.A0i];this.ZZ.Q=[B=A._GetAutoObject(A.Device.Device),B.AEE,B.AIS];this.ZY.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEE,B.AIS];this.Si.Ax(A.aaL(A.ach.AqM));this.
HF.S(A.aaL(A.fl.EK));this.HF.A2(A.aaL(A.fl.Ko));this.HF.Cv(A.aaL(A.fl.Il));this.
AjF.Q=[B=this.HF,B.Fp,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Ak0._Done();this.NS._Done();this.C8._Done();this.AcB._Done();this.JN._Done(
);this.TemperatureUnit._Done();this.MF._Done();this.PU._Done();this.Sg._Done();this.
Uu._Done();this.Lq._Done();this.Jf._Done();this.ZZ._Done();this.ZY._Done();this.
Si._Done();this.HF._Done();this.AjF._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Ak0._ReInit();this.NS._ReInit();this.C8._ReInit();
this.AcB._ReInit();this.JN._ReInit();this.TemperatureUnit._ReInit();this.MF._ReInit(
);this.PU._ReInit();this.Sg._ReInit();this.Uu._ReInit();this.Lq._ReInit();this.Jf.
_ReInit();this.ZZ._ReInit();this.ZY._ReInit();this.Si._ReInit();this.HF._ReInit(
);this.AjF._ReInit();this.JN.R(A.aaR(A.acf.ADN));this.MF.R(A.aaR(A.acu.Aki));this.
PU.R(A.aaR(A.acf.PU));this.Lq.R(A.aaR(A.acu.AVf));this.HF.R(A.aaR(A.acf.HF));this.
JN.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MF.S(A.aaL(A.fl.
Aeq));this.PU.S(A.aaL(A.fl.Af));this.Sg.S(A.aaL(A.fl.EK));this.Uu.S(A.aaL(A.fl.EK
));this.Lq.S(A.aaL(A.fl.Aeq));this.Lq.A2(A.aaL(A.fl.EK));this.Lq.Cv(A.aaL(A.fl.Af
));this.HF.S(A.aaL(A.fl.EK));this.HF.A2(A.aaL(A.fl.Ko));this.HF.Cv(A.aaL(A.fl.Il
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ak0)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uu
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Si)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjF)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AU5={AcE:
function(){C.Rc.AcE.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cs(null);this.N.C2(A.aaL(A.ach.AvJ));}break;default:;}},
WM:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Lt>3240)&&(A._GetAutoObject(A.Device.Device
).Lt<5460)){A._GetAutoObject(A.Device.Device).AhL();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKz(this);break;default:;}},AxT:
function(){C.Rc.AxT.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JN.R(A.aaR(A.acf.Bj3));break;default:;}},AxU:function(){C.Rc.AxU.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WA(16711680);this.Jf.Ar(true);}break;default:this.Jf.Ar(false);
}},AUz:function(){this.C8.Ax(A.aaL(A.ach.AvI));this.C8.Cw(0);this.NS.Cw(0);},_Init:
function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=C.AU5;this.Dr(C.AO6);},
_className:"Application::TemperatureMeasurementScreen"};C.AO$={Dd:null,IM:null,NU:
null,AP:null,Ag5:null,A$:null,De:function(E){C.BQ.De.call(this,E);this.Dd.L(E);this.
IM.L(E);this.NU.L(E);this.Ag5.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.Ap._Init.call(this.IM={I:this},0
);A.acg.Ap._Init.call(this.NU={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.Ag5={I:this},0);A.acg.C5._Init.call(this.A$={I:this},
0);this.__proto__=C.AO$;this.Dd.H(Ayy);this.IM.H(Aon);this.NU.H(AHy);this.AP.DC(
Bak);this.AP.DM(Bal);this.AP.L(A.jb.Bc);this.Ag5.H(Br3);this.Ag5.L(A.jb.CS);this.
A$.DC(Br4);this.A$.DM(Br5);this.A$.L(A.jb.Bc);this.J(this.Dd,0);this.J(this.IM,0
);this.J(this.NU,0);this.J(this.AP,0);this.J(this.Ag5,0);this.J(this.A$,0);this.
Dd.Ax(A.aaL(A.ach.ADy));this.IM.Ax(A.aaL(A.ach.Aez));this.NU.Ax(A.aaL(A.ach.AvB)
);this.Ag5.Ax(A.aaL(A.ach.AQg));},_Done:function(){this.__proto__=C.BQ;this.Dd._Done(
);this.IM._Done();this.NU._Done();this.AP._Done();this.Ag5._Done();this.A$._Done(
);C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Dd._ReInit(
);this.IM._ReInit();this.NU._ReInit();this.AP._ReInit();this.Ag5._ReInit();this.
A$._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Dd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dc={Er:null,DS:null,AGu:
0,ANI:0,Init:function(aArg){A.zV([this,this.ALg],A._GetAutoObject(A.Device.Device
).An,0);A.pe([this,this.ALg],this);},ALg:function(G){var Ad=this.AGu;if(Ad<0){this.
DS.E6();this.DS.EB(this.ANI);return;}this.DS.EB(A._GetAutoObject(A.Device.Device
).An.AmT(Ad,14));this.DS.AE2(A._GetAutoObject(A.Device.Device).An.I6(Ad,13));this.
DS.Ae1(A._GetAutoObject(A.Device.Device).An.H2(Ad,8));this.DS.Un(A._GetAutoObject(
A.Device.Device).An.H2(Ad,11));this.DS.Ae5(A._GetAutoObject(A.Device.Device).An.
H2(Ad,12));this.DS.Ae7(A._GetAutoObject(A.Device.Device).An.CF(Ad,5));},A_k:function(
E){if(this.AGu===E)return;this.AGu=E;A.pe([this,this.ALg],this);},A9M:function(E
){if(this.ANI===E)return;this.ANI=E;A.pe([this,this.ALg],this);},A8Y:function(){
return this.AGu;},_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.call(
this.Er={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dc;this.
Er.H(Br6);this.Er.R(A.aaR(A.acf.GN));this.Er.A6(0x11);this.Er.L(A.jb.Text);this.
DS.H(AZZ);this.J(this.Er,0);this.J(this.DS,0);this.Er.S(A.aaL(A.fl.Af));this.Er.
A2(A.aaL(A.fl.Ak));this.Er.Cv(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){
this.__proto__=C.EA;this.Er._Done();this.DS._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Er._ReInit();this.DS._ReInit();this.Er.R(
A.aaR(A.acf.GN));this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.Ak));this.Er.Cv(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KO={AgL:null,Text:null,Afi:null,De:function(E
){C.BQ.De.call(this,E);this.AgL.L(E);this.Text.L(E);this.Afi.L(E);},_Init:function(
aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgL={I:this},0);C.CH._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afi={I:this},0);this.__proto__=
C.KO;this.AgL.H(Br7);this.AgL.L(A.jb.Text);this.Text.H(Br8);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afi.H(Br9);this.Afi.L(A.jb.Text);this.
J(this.AgL,0);this.J(this.Text,0);this.J(this.Afi,0);this.AgL.Ax(A.aaL(A.ach.APb
));this.Text.S(A.aaL(A.fl.Ko));this.Text.A2(A.aaL(A.fl.Il));},_Done:function(){this.
__proto__=C.BQ;this.AgL._Done();this.Text._Done();this.Afi._Done();C.BQ._Done.call(
this);},_ReInit:function(){C.BQ._ReInit.call(this);this.AgL._ReInit();this.Text.
_ReInit();this.Afi._ReInit();this.Text.S(A.aaL(A.fl.Ko));this.Text.A2(A.aaL(A.fl.
Il));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.AgL)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afi
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AO4={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO4;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AO6={_Init:function(
aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO6;this.JY(this.Afi,-2);this.
Afi.Ax(A.aaL(A.ach.Ag3));},_className:"Application::HeaderDeviceTemperature"};C.
Yj={Ai:function(Ae){C.AmM.Ai.call(this,Ae);this.T(A.aaR(A.acf.BpV)+A.aaR(A.acf.Colon
));},Cf:function(Ad){var B;if(!this.AX)return;this.AlB=0;this.AtF=0;this.XF=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B9();O++){this.AlB+=this.AX.CF(O,1);this.AtF+=
this.AX.CF(O,2);}if(this.AlB>0)this.XF=(this.AtF/this.AlB)*100;this.Am();}},_Init:
function(aArg){C.AmM._Init.call(this,aArg);this.__proto__=C.Yj;this.AP.Z(false);
this.A$.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Ko));this.V.A2(A.aaL(A.fl.
Il));},_ReInit:function(){C.AmM._ReInit.call(this);this.V.S(A.aaL(A.fl.Ko));this.
V.A2(A.aaL(A.fl.Il));},_className:"Application::EvaluationLossesSumItem"};C.A6p={
Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A6p;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6q={K0:null,MT:null,AY:0,Yc:function(){this.K0=null;this.MT=null;this.AY=0;
},Os:function(A_){var Hg;Hg=A._NewObject(C.A6p,0);Hg.A5=A_;if(!this.K0){this.K0=
Hg;this.MT=Hg;this.AY=1;}else{this.MT.Ah=Hg;this.MT=Hg;this.AY=this.AY+1;}},AmV:
function(){var B;var RK=0;var Og=this.K0;while(!!Og){RK+=Og.A5;Og=Og.Ah;}return RK;
},AjM:function(){if(!this.AY)return 0;return this.AmV()/this.AY;},AqU:function(){
var B;if(!this.AY)return 0;var A1k=this.AjM();var Add=0;var Og=this.K0;while(!!Og
){Add+=Math.pow(Og.A5-A1k,2);Og=Og.Ah;}Add/=this.AY;Add=Math.sqrt(Add);return Add;
},_Init:function(aArg){this.__proto__=C.A6q;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agv={Background:null,V:null,KS:0,Us:5,Hk:false
,Ai:function(Ae){C.Hh.Ai.call(this,Ae);if(this.Hk)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CJ);},T:function(E){C.Hh.T.call(this,E);this.V.R(E);},Bi:
function(E){if(this.Hk===E)return;this.Hk=E;this.Am();},Kt:function(E){if(this.Us===
E)return;this.Us=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hh._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CH.
_Init.call(this.V={I:this},0);this.__proto__=C.Agv;this.H(BD);this.Background.AZ(
0x3F);this.Background.H(BD);this.V.AZ(0x3F);this.V.H(AIs);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KS=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Ko));this.V.A2(A.aaL(A.fl.Il));this.V.Cv(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hh;this.Background._Done();this.V._Done();C.Hh._Done.call(this
);},_ReInit:function(){C.Hh._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Ko));this.V.A2(A.aaL(A.fl.Il));this.V.Cv(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AN0={Wx:function(G){this.Agt();this.I2(A.aaR(
A.acf.AVe),[this,this.ATG],5);this.I2(A.aaR(A.acf.AVc),[this,this.ATF],7);this.I2(
A.aaR(A.acf.Calving),[this,this.BlM],11);this.I2(A.aaR(A.acf.AnY),[this,this.AwS
],2);this.I2(A.aaR(A.acf.AdS),[this,this.AEP],1);this.I2(A.aaR(A.acf.Aux),[this,
this.AEJ],0);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Mh(A.aaR(A.acf.Ane
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){}
,Abq:function(){return C.AM7;},Abr:function(){return C.APy;},Q8:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ACW());},HO:function(G){
var F;C.GJ.HO.call(this,G);if(this.Akf()===false){this.N.Cs(A._GetAutoObject(A.Device.
Converter).AuG((F=this.E3,F[1].call(F[0]))));this.N.Cg=[this,this.Alh];this.N.FE(
A.jV);}this.N.OO(false);this.N.OP(false);},Agf:function(){A._GetAutoObject(C.A9).
Cd(62);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AN0;var
B;this.Dr(C.AO7);this.Dj(A.aaR(A.acf.AR3));this.AwN([B=A._GetAutoObject(A.Device.
Device),B.A8q,B.Ba2]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dj(A.aaR(
A.acf.AR3));},_className:"Application::DryCowListScreen"};C.ANZ={_Init:function(
aArg){C.I4._Init.call(this,aArg);this.__proto__=C.ANZ;this.Lc.Ar(false);this.Lc.
Aj(false);this.Lc.Z(false);this.Jr.Ar(false);this.Jr.Aj(false);this.Jr.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.AO7={DX:function(G){C.Kp.DX.
call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter).AdX(9));},_Init:function(
aArg){C.Kp._Init.call(this,aArg);this.__proto__=C.AO7;},_className:"Application::HeaderDryCowListFilter"
};C.Abn={Filter:null,LW:null,AGX:A.jV,Eq:0,AF4:1,Operator:1,Bl:function(aSize){C.
Acl.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(
Ae){C.Acl.Ai.call(this,Ae);this.LW.L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Mb],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Mb],E,0);A.pe([this,this.Mb],this);},Mb:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.Tp((F=this.Filter,F[1].call(
F[0])).DL(this.Eq,this.Operator));else this.Tp(null);},Nd:function(E){if(this.Eq===
E)return;this.Eq=E;A.pe([this,this.Mb],this);},Tp:function(AI){if(!!AI){var A1Y;
if(this.AF4!==1)A1Y=this.AF4;else A1Y=AI.Operator;this.T((this.AGX+CQ)+A._GetAutoObject(
A.Device.Converter).A6l(A1Y));this.Zu(false);}else{this.T(this.AGX);this.Zu(true
);}},ON:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Mb],this);},AFO:function(E){if(this.AGX===E)return;this.AGX=E;A.pe([this,this.Mb
],this);},A99:function(E){if(this.AF4===E)return;this.AF4=E;A.pe([this,this.Mb],
this);},_Init:function(aArg){C.Acl._Init.call(this,aArg);C.LW._Init.call(this.LW={
I:this},0);this.__proto__=C.Abn;this.H(As4);this.AW.H(Br_);this.LW.H(AZ0);this.JY(
this.V,-1);this.J(this.LW,0);},_Done:function(){this.__proto__=C.Acl;this.LW._Done(
);C.Acl._Done.call(this);},_ReInit:function(){C.Acl._ReInit.call(this);this.LW._ReInit(
);},_Mark:function(D){var B;C.Acl._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.LW)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjH={LW:null,Ai:function(Ae){C.QD.
Ai.call(this,Ae);this.LW.L(this.V.AQ);},Tp:function(AI){if(!!AI){this.H6.Cw(1);this.
Zu(true);this.LW.A90(false);}else{this.H6.Cw(0);this.Zu(false);this.LW.A90(true);
}},_Init:function(aArg){C.QD._Init.call(this,aArg);C.LW._Init.call(this.LW={I:this
},0);this.__proto__=C.AjH;this.Jc=20;this.LW.H(AZ0);this.J(this.LW,0);},_Done:function(
){this.__proto__=C.QD;this.LW._Done();C.QD._Done.call(this);},_ReInit:function(){
C.QD._ReInit.call(this);this.LW._ReInit();},_Mark:function(D){var B;C.QD._Mark.call(
this,D);if((B=this.LW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.ABY={Q:null,CP:function(){this.T(A._GetAutoObject(A.Device.Helper).AmU(this.
TableId,this.Eq));},Tp:function(AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H6.Cw(1);else this.H6.Cw(0);},IC:function(G){A.pe([this,this.Mb],this);},
At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.IC],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.IC],E,0);if(!!E)A.pe([this,this.IC],this);},_Init:
function(aArg){C.QD._Init.call(this,aArg);this.__proto__=C.ABY;},_ReInit:function(
){C.QD._ReInit.call(this);this.CP();},_Mark:function(D){var B;C.QD._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.APy={YO:null,I_:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YO={I:this},0);A.acg.Text._Init.call(this.I_={I:this},0);this.__proto__=
C.APy;this.A9M(1);this.YO.H(Br$);this.YO.KR(true);this.YO.R(A.aaR(A.acf.AD2));this.
YO.L(A.jb.Text);this.I_.H(S9);this.I_.R(((A.aaR(A.acf.RN)+Bam)+A.aaR(A.acf.A$1))+
Ob);this.I_.L(A.jb.Text);this.J(this.YO,0);this.J(this.I_,0);this.YO.S(A.aaL(A.fl.
Ak));this.I_.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.YO._Done(
);this.I_._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this
);this.YO._ReInit();this.I_._ReInit();this.YO.R(A.aaR(A.acf.AD2));this.I_.R(((A.
aaR(A.acf.RN)+Bam)+A.aaR(A.acf.A$1))+Ob);this.YO.S(A.aaL(A.fl.Ak));this.I_.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.YO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AM7={Mj:null,KP:null,AdR:null,AP:null,A$:null
,Xl:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mj.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KP.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KP.M[2]-1,0,this.
KP.M[2]+1,aSize[1]]);this.AdR.H([this.KP.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.AdR.L(this.V.AQ);if(!!this.Xl&&(
this.Xl!==5)){this.Mj.L(A._GetAutoObject(A.acj.Assessment).Qo(this.Xl));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xv(this.Xl));}else this.Mj.L(this.Background.
AQ);},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Mf=this.AX.
CF(Ad,1);var A2v=this.AX.CF(Ad,29);var O_=this.AX.Hu(Ad,4);var LP=this.AX.I6(Ad,
13);var AlE=this.AX.I6(Ad,17);var AlN=this.AX.H2(Ad,11);this.Xl=A._GetAutoObject(
A.Device.Helper).AMf(LP,AlN,AlE);this.T(Mf.toFixed());this.KP.R(A2v.toFixed());this.
AdR.R(A._GetAutoObject(A.acj.KK).ACS(O_,A._GetAutoObject(A.Device.Helper).Dv(),Bsa
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Mj={I:this},0);A.acg.Text._Init.call(this.KP={I:this},0);A.acg.Text._Init.call(
this.AdR={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A$={I:this},0);this.__proto__=C.AM7;this.Mj.H(As$);this.AP.L(A.jb.Bc);this.
A$.L(A.jb.Bc);this.J(this.Mj,-1);this.J(this.KP,0);this.J(this.AdR,0);this.J(this.
AP,0);this.J(this.A$,0);this.KP.S(A.aaL(A.fl.Af));this.AdR.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mj._Done();this.KP._Done(
);this.AdR._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mj._ReInit();this.KP._ReInit();this.AdR.
_ReInit();this.AP._ReInit();this.A$._ReInit();this.KP.S(A.aaL(A.fl.Af));this.AdR.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RU={AJL:0,BdG:false,Ai:function(Ae){C.Fz.Ai.call(this,Ae);if(this.BdG){this.
T(A.aaR(A.acf.ANX));this.Kv(A.jV);}else{this.T(A.aaR(A.acf.BjK));if(this.AJL>0)this.
Kv(this.AJL.toFixed());else this.Kv(W$);}},Cf:function(G){C.Fz.Cf.call(this,G);this.
BdG=A._GetAutoObject(A.Device.Helper).W.IsDry;var Alz=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Alz>0)this.AJL=A._GetAutoObject(A.Device.Helper).
L9(Alz,A._GetAutoObject(A.Device.Helper).Dv());else this.AJL=0;this.Am();},_Init:
function(aArg){C.Fz._Init.call(this,aArg);this.__proto__=C.RU;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMk={ALr:A.jV,Ai:function(Ae){C.Fz.Ai.call(this,Ae);this.T(A.aaR(A.acf.RN));
this.Kv(this.ALr);},Cf:function(G){C.Fz.Cf.call(this,G);var O_=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALr=A._GetAutoObject(A.acj.KK).ACS(O_,A._GetAutoObject(
A.Device.Helper).Dv(),((((Bsb+A.aaR(A.acf.BgX))+Bsc)+A.aaR(A.acf.BgW))+Bsd)+A.aaR(
A.acf.ALV));this.Am();},_Init:function(aArg){C.Fz._Init.call(this,aArg);this.__proto__=
C.AMk;this.ALr=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fz._ReInit.call(this);
this.ALr=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANR={Uc:null,Y7:null,Wn:null,Wo:null,Sx:null,Init:function(aArg){this.Bb(this.
Uc);A.pe([this,this.MI],this);},Adt:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Nc._Init.call(this.Uc={
I:this},0);C.Nc._Init.call(this.Y7={I:this},0);C.Nc._Init.call(this.Wn={I:this},
0);C.AbR._Init.call(this.Wo={I:this},0);C.T$._Init.call(this.Sx={I:this},0);this.
__proto__=C.ANR;var B;this.Dr(C.AO4);this.Uc.H(IV);this.Uc.Aj(true);this.Uc.T(A.
aaR(A.acf.ACs));this.Uc.Bi(false);this.Uc.Nf(83);this.Y7.H(Qa);this.Y7.Aj(true);
this.Y7.T(A.acf.Info);this.Y7.Bi(true);this.Y7.Nf(82);this.Wn.H(Aab);this.Wn.Aj(
true);this.Wn.T(A.aaR(A.acf.AGx));this.Wn.Bi(false);this.Wn.Nf(64);this.Wo.H(Ald
);this.Wo.Aj(true);this.Wo.T(A.aaR(A.acf.TempMeasurement));this.Wo.Bi(true);this.
Wo.Nf(60);this.Sx.H(Aop);this.Sx.Aj(true);this.Sx.T(A.aaR(A.acf.ACN));this.Sx.Bi(
false);this.J(this.Uc,-1);this.J(this.Y7,-1);this.J(this.Wn,-1);this.J(this.Wo,-
1);this.J(this.Sx,-1);this.N.Cg=[this,this.Adt];this.N.Cs(A.aaL(A.ach.ADD));this.
Uc.AR=[B=this.Uc,B.Ni];this.Y7.AR=[B=this.Y7,B.Ni];this.Wn.AR=[B=this.Wn,B.Ni];this.
Wo.AR=[B=this.Wo,B.Ni];this.Sx.AR=null;this.Sx.AeU([B=this.Sx,B.Atg]);this.Sx.Gr([
this,this.D_,this.GS]);this.Sx.ASX([B=A._GetAutoObject(A.Device.Device),B.Aru,B.
Ate]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Uc._Done();this.
Y7._Done();this.Wn._Done();this.Wo._Done();this.Sx._Done();C.Ei._Done.call(this);
},_ReInit:function(){C.Ei._ReInit.call(this);this.Uc._ReInit();this.Y7._ReInit();
this.Wn._ReInit();this.Wo._ReInit();this.Sx._ReInit();this.Uc.T(A.aaR(A.acf.ACs)
);this.Wn.T(A.aaR(A.acf.AGx));this.Wo.T(A.aaR(A.acf.TempMeasurement));this.Sx.T(
A.aaR(A.acf.ACN));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Uc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"
};C.ANS={Ua:null,AbO:null,Wl:null,Init:function(aArg){this.Bb(this.Ua);},Bzb:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},Bkm:function(G){if(A._GetAutoObject(
A.Device.Device).Aa3<=20)A._GetAutoObject(A.Device.Device).A3(76,true,Bse,0,null
);else A._GetAutoObject(A.Device.Device).A3(39,true,A.jV,0,[this,this.Bzb]);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Nc._Init.call(this.Ua={I:this},0);C.
Co._Init.call(this.AbO={I:this},0);C.AbR._Init.call(this.Wl={I:this},0);this.__proto__=
C.ANS;var B;this.Dr(C.AO5);this.Ua.H(IV);this.Ua.Aj(true);this.Ua.T(A.aaR(A.acf.
A5u));this.Ua.Bi(false);this.Ua.Nf(65);this.AbO.H(Qa);this.AbO.Aj(true);this.AbO.
T(A.aaR(A.acf.A6n));this.AbO.Bi(true);this.Wl.H(Aab);this.Wl.Aj(true);this.Wl.T(
A.aaR(A.acf.RangeTest));this.Wl.Bi(false);this.Wl.Nf(15);this.J(this.Ua,-1);this.
J(this.AbO,-1);this.J(this.Wl,-1);this.Ua.AR=[B=this.Ua,B.Ni];this.AbO.AR=[this,
this.Bkm];this.Wl.AR=[B=this.Wl,B.Ni];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.Ua._Done();this.AbO._Done();this.Wl._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.Ua._ReInit();this.AbO._ReInit();this.Wl.
_ReInit();this.Ua.T(A.aaR(A.acf.A5u));this.AbO.T(A.aaR(A.acf.A6n));this.Wl.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Ua
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AO5={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO5;this.
Text.R(A.aaR(A.acf.AGx));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGx));},_className:"Application::HeaderDeviceServiceMenu"};C.Nc={M8:
null,Ai:function(Ae){C.AbR.Ai.call(this,Ae);this.M8.L(this.V.AQ);},_Init:function(
aArg){C.AbR._Init.call(this,aArg);A.acg.Ap._Init.call(this.M8={I:this},0);this.__proto__=
C.Nc;this.M8.AZ(0x38);this.M8.H(Bsf);this.J(this.M8,0);this.V.Cv(A.aaL(A.fl.Bh));
this.M8.Ax(A.aaL(A.ach.Ajq));},_Done:function(){this.__proto__=C.AbR;this.M8._Done(
);C.AbR._Done.call(this);},_ReInit:function(){C.AbR._ReInit.call(this);this.M8._ReInit(
);this.V.Cv(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.AbR._Mark.call(this,D);if((
B=this.M8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANN={Ag$:null,Ahf:null,Ahh:null,Ahd:null,Aj7:null,Ahc:null,Ahb:null,Aha:null
,Aj5:null,Ag_:null,Aj6:null,Ahg:null,Aj8:null,Ahe:null,Aj9:null,Init:function(aArg
){this.Bb(this.Ag$);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.PN._Init.
call(this.Ag$={I:this},0);C.PN._Init.call(this.Ahf={I:this},0);C.PN._Init.call(this.
Ahh={I:this},0);C.PN._Init.call(this.Ahd={I:this},0);C.PN._Init.call(this.Aj7={I:
this},0);C.PN._Init.call(this.Ahc={I:this},0);C.PN._Init.call(this.Ahb={I:this},
0);C.PN._Init.call(this.Aha={I:this},0);C.PN._Init.call(this.Aj5={I:this},0);C.PN.
_Init.call(this.Ag_={I:this},0);C.PN._Init.call(this.Aj6={I:this},0);C.PN._Init.
call(this.Ahg={I:this},0);C.PN._Init.call(this.Aj8={I:this},0);C.PN._Init.call(this.
Ahe={I:this},0);C.PN._Init.call(this.Aj9={I:this},0);this.__proto__=C.ANN;this.Dr(
C.AO0);this.Ag$.H(AIz);this.Ag$.Aj(true);this.Ag$.SE(1);this.Ahf.H(AZX);this.Ahf.
Aj(true);this.Ahf.Bi(true);this.Ahf.SE(2);this.Ahh.H(Aov);this.Ahh.Aj(true);this.
Ahh.Bi(false);this.Ahh.SE(3);this.Ahd.H(Ah1);this.Ahd.Aj(true);this.Ahd.Bi(true);
this.Ahd.SE(4);this.Aj7.H(Ayo);this.Aj7.Aj(true);this.Aj7.SE(5);this.Ahc.H(Bsg);
this.Ahc.Aj(true);this.Ahc.Bi(true);this.Ahc.SE(6);this.Ahb.H(Atb);this.Ahb.Aj(true
);this.Ahb.Bi(false);this.Ahb.SE(7);this.Aha.H(Ayx);this.Aha.Aj(true);this.Aha.Bi(
true);this.Aha.SE(8);this.Aj5.H(AZY);this.Aj5.Aj(true);this.Aj5.SE(9);this.Ag_.H(
Aow);this.Ag_.Aj(true);this.Ag_.Bi(true);this.Ag_.SE(10);this.Aj6.H(Bsh);this.Aj6.
Aj(true);this.Aj6.SE(11);this.Ahg.H(Bsi);this.Ahg.Aj(true);this.Ahg.Bi(true);this.
Ahg.SE(12);this.Aj8.H(Bsj);this.Aj8.Aj(true);this.Aj8.SE(13);this.Ahe.H(Bsk);this.
Ahe.Aj(true);this.Ahe.Bi(true);this.Ahe.SE(14);this.Aj9.H(Bsl);this.Aj9.Aj(true);
this.Aj9.SE(15);this.J(this.Ag$,-1);this.J(this.Ahf,-1);this.J(this.Ahh,-1);this.
J(this.Ahd,-1);this.J(this.Aj7,-1);this.J(this.Ahc,-1);this.J(this.Ahb,-1);this.
J(this.Aha,-1);this.J(this.Aj5,-1);this.J(this.Ag_,-1);this.J(this.Aj6,-1);this.
J(this.Ahg,-1);this.J(this.Aj8,-1);this.J(this.Ahe,-1);this.J(this.Aj9,-1);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ag$._Done();this.Ahf._Done(
);this.Ahh._Done();this.Ahd._Done();this.Aj7._Done();this.Ahc._Done();this.Ahb._Done(
);this.Aha._Done();this.Aj5._Done();this.Ag_._Done();this.Aj6._Done();this.Ahg._Done(
);this.Aj8._Done();this.Ahe._Done();this.Aj9._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.Ag$._ReInit();this.Ahf._ReInit();this.Ahh.
_ReInit();this.Ahd._ReInit();this.Aj7._ReInit();this.Ahc._ReInit();this.Ahb._ReInit(
);this.Aha._ReInit();this.Aj5._ReInit();this.Ag_._ReInit();this.Aj6._ReInit();this.
Ahg._ReInit();this.Aj8._ReInit();this.Ahe._ReInit();this.Aj9._ReInit();},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahe)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aj9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AO0={_Init:function(aArg){C.KO._Init.call(this
,aArg);this.__proto__=C.AO0;this.Text.R(A.aaR(A.acf.A5V));},_ReInit:function(){C.
KO._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5V));},_className:"Application::HeaderDeviceCheck"
};C.PN={DeviceComponentToString:null,Kk:null,AuX:0,Bcg:false,CP:function(){this.
V.R(this.DeviceComponentToString.BS(this.AuX));},Bl:function(aSize){var B;C.Co.Bl.
call(this,aSize);this.Kk.H(A.abM(this.Kk.M,aSize[0]-((B=this.Kk.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kk.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kk.
AEU(this.V.AQ);if(this.Bcg)this.Kk.AwF(A.jb.E1);else this.Kk.AwF(A.jb.Gi);},SE:function(
E){if(this.AuX===E)return;this.AuX=E;this.T(this.DeviceComponentToString.BS(E));
this.DX(this);},DX:function(G){this.Bcg=A._GetAutoObject(A.Device.Device).AJC(this.
AuX);this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kk._Init.call(this.Kk={I:this
},0);this.__proto__=C.PN;this.V.H(Bsm);this.V.A6(0x11);this.Kk.H(Bsn);this.J(this.
Kk,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kk._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kk._ReInit();this.CP();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sf={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAF],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALl(this);this.DJ(this);},CC:function(G
){A.pe([this,this.MI],this);},Fk:function(G){var B;this.Ay.Mx((B=this.Y.Db(0x1))[
3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[1]);},AAF:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6B();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.MI],this);},Ev:function(G){A._GetAutoObject(C.A9).FA(
);},A3w:function(G){A._GetAutoObject(C.A9).Cd(84);},DJ:function(G){this.N.C1(A.aaL(
A.ach.E2));this.N.CE=[this,this.Ev];this.N.Cs(A.aaL(A.ach.ADC));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Arc(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Cg=null;this.N.I8.Dk(100);}else{this.N.Cg=[this
,this.AAF];this.N.I8.Dk(255);}this.N.C2(A.aaL(A.ach.Aez));this.N.Cl=[this,this.A3w
];},MI:function(s){this.DJ(s);},ALl:function(G){A.ab5("%s",Bso);},BGG:function(s
){this.ALl(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sf;this.N.Ar(false);this.N.Z(true);this.Dr(C.
Abs);this.Ay.H(It);this.DY.AZ(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(L1
);this.Y.JS(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.El=[this
,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOc={Ya:null,X$:null,XY:null
,TG:null,DJ:function(G){C.Sf.DJ.call(this,G);if(this.AV===this.TG){this.N.Cs(null
);this.N.Cg=null;this.N.C2(null);this.N.Cl=null;}},ALl:function(G){if(this.AV===
this.TG)this.Dr(C.AO$);else this.Dr(C.Abs);},Bzu:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQa);case 1:return A.
aaL(A.ach.AQb);default:A.ab5("%s%s",Bsp,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},Bzv:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQc);case 1:return A.aaL(A.ach.AQd);default:
A.ab5("%s%s",AIE,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ig:function(G){var Cy=(C.Fn.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.
Ya)A._GetAutoObject(C.A9).Cd(66);else if(Cy===this.X$)A._GetAutoObject(C.A9).Cd(
56);else if(Cy===this.XY)A._GetAutoObject(C.A9).Cd(58);else if(Cy===this.TG)A._GetAutoObject(
C.A9).Cd(59);},_Init:function(aArg){C.Sf._Init.call(this,aArg);C.Fn._Init.call(this.
Ya={I:this},0);C.Fn._Init.call(this.X$={I:this},0);C.Fn._Init.call(this.XY={I:this
},0);C.Fn._Init.call(this.TG={I:this},0);this.__proto__=C.AOc;this.Ya.H(P9);this.
Ya.Aj(true);this.Ya.T(A.aaR(A.acf.Aft));this.X$.H(J2);this.X$.Aj(true);this.X$.T(
A.aaR(A.acf.Temperature));this.XY.H(Bsq);this.XY.Aj(true);this.XY.T(A.aaR(A.acf.
Rating));this.TG.H(Bsr);this.TG.Aj(true);this.TG.T(A.aaR(A.acf.A7F));this.J(this.
Ya,0);this.J(this.X$,0);this.J(this.XY,0);this.J(this.TG,0);this.Ya.AR=[this,this.
Ig];this.Ya.DB(this.Bzv());this.X$.AR=[this,this.Ig];this.X$.DB(this.Bzu());this.
XY.AR=[this,this.Ig];this.XY.DB(A.aaL(A.ach.AP_));this.TG.AR=[this,this.Ig];this.
TG.DB(A.aaL(A.ach.AP$));},_Done:function(){this.__proto__=C.Sf;this.Ya._Done();this.
X$._Done();this.XY._Done();this.TG._Done();C.Sf._Done.call(this);},_ReInit:function(
){C.Sf._ReInit.call(this);this.Ya._ReInit();this.X$._ReInit();this.XY._ReInit();
this.TG._ReInit();this.Ya.T(A.aaR(A.acf.Aft));this.X$.T(A.aaR(A.acf.Temperature)
);this.XY.T(A.aaR(A.acf.Rating));this.TG.T(A.aaR(A.acf.A7F));},_Mark:function(D){
var B;C.Sf._Mark.call(this,D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOd={VJ:null,X0:null,Yb:null,ALl:function(G){this.Dr(C.Avs);},Bzy:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQU
);case 1:return A.aaL(A.ach.AQV);default:A.ab5("%s%s",AIE,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ig:function(G){var Cy=(C.Fn.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VJ)A._GetAutoObject(C.A9).Cd(68);else if(Cy===
this.Yb)A._GetAutoObject(C.A9).Cd(57);else if(Cy===this.X0)A._GetAutoObject(C.A9
).Cd(67);},Bzx:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.APY);case 1:return A.aaL(A.ach.APZ);default:A.ab5("%s%s",AIE
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},Bzz:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQW
);case 1:return A.aaL(A.ach.AQX);default:A.ab5("%s%s",AIE,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sf._Init.call(
this,aArg);C.Fn._Init.call(this.VJ={I:this},0);C.Fn._Init.call(this.X0={I:this},
0);C.Fn._Init.call(this.Yb={I:this},0);this.__proto__=C.AOd;this.VJ.H(P9);this.VJ.
Aj(true);this.VJ.T(A.aaR(A.acf.A$T));this.X0.H(AZ1);this.X0.Aj(true);this.X0.T(A.
aaR(A.acf.A5k));this.Yb.H(N$);this.Yb.Aj(true);this.Yb.T(A.aaR(A.acf.A$W));this.
J(this.VJ,0);this.J(this.X0,0);this.J(this.Yb,0);this.VJ.AR=[this,this.Ig];this.
VJ.DB(this.Bzy());this.VJ.Ab2(A.aaL(A.ach.NT));this.X0.AR=[this,this.Ig];this.X0.
DB(this.Bzx());this.Yb.AR=[this,this.Ig];this.Yb.DB(this.Bzz());},_Done:function(
){this.__proto__=C.Sf;this.VJ._Done();this.X0._Done();this.Yb._Done();C.Sf._Done.
call(this);},_ReInit:function(){C.Sf._ReInit.call(this);this.VJ._ReInit();this.X0.
_ReInit();this.Yb._ReInit();this.VJ.T(A.aaR(A.acf.A$T));this.X0.T(A.aaR(A.acf.A5k
));this.Yb.T(A.aaR(A.acf.A$W));},_Mark:function(D){var B;C.Sf._Mark.call(this,D);
if((B=this.VJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOg={BdJ:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZN(0));},_Init:function(aArg){C.AqJ._Init.call(this,aArg);this.
__proto__=C.AOg;this.Ae8(A.aaR(A.acf.A70));},_ReInit:function(){C.AqJ._ReInit.call(
this);this.Ae8(A.aaR(A.acf.A70));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AN$={Aii:null,Abv:null,UK:null,AaW:null,Pl:null,Ajn:null,Agx:null,Ajo:null,Agy:
null,Ay:null,AaO:null,Ada:0,Apt:0,DE:function(G){switch(this.Cq.CO){case 4:{if(this.
I5.Fp())return;var Qx=this.Y.Br[1]+80;this.Y.Gb([this.Y.Br[0],Qx]);this.Y.Vw(null
,null);}break;case 5:{if(this.I5.Fp())return;var Qx=this.Y.Br[1]-80;this.Y.Gb([this.
Y.Br[0],Qx]);this.Y.Vw(null,null);}break;default:C.FB.DE.call(this,G);}},Ap4:function(
L2,AcV){if(!L2)return;var Fx=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(
A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcV,true);Fx.CW(HV);var Ac7=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac7.Initialize(8,2,0,true);Fx.CW(Ac7
);L2.Bk(Fx);},Aiw:function(G){if(A._GetAutoObject(A.Device.Helper).W.Ard()){this.
Aii.Os(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azh=this.Bzs(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaO.Set(Azh,this.AaO.Get(Azh)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Ada++;this.Apt=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FB.Aiw.call(
this,G);},Aao:function(G){if(this.Ada>1)A._GetAutoObject(A.Device.Device).A3(56,
true,this.Ada.toFixed(),0,null);if(this.Ada===1)A._GetAutoObject(A.Device.Device
).A3(53,true,this.Apt.toFixed(),0,null);if(this.Aii.AY>0)this.UK.T(((((((A._GetAutoObject(
A.Device.Converter).Ax0(this.Aii.AjM()|0,1)+AyC)+A._GetAutoObject(A.Device.Converter
).Ax0(this.Aii.AqU()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).Af0())+AyD)+this.Aii.AY.
toFixed())+Ob);else this.UK.T(A.aaR(A.acf.Unknown));var RK=this.AaO.AmV();var O;
for(O=0;O<this.AaO.ME;O++){var Bf=this.BzN(O);if(!!Bf){var CB=this.AaO.Get(O);Bf.
BlY(CB);if(!RK)Bf.A_d(0);else Bf.A_d(Math.round((CB*100)/RK)|0);Bf.BnE(this.BzM(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adf=false;if(this.Aii.AY>0)
Adf=true;this.I5.Z(!Adf);C.FB.Aao.call(this,G);},Adm:function(G){this.Aii.Yc();this.
AaO.E6();this.Ada=0;this.Apt=0;C.FB.Adm.call(this,G);},BzN:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Pl;break;case 1:Bf=this.Ajn;break;case 2:Bf=this.
Agx;break;case 3:Bf=this.Ajo;break;case 4:Bf=this.Agy;break;default:throw new Error(
AyE+aIndex.toFixed());}return Bf;},BzM:function(aIndex,AoH){var B;var Tq=A.jV;switch(
AoH){case 0:{switch(aIndex){case 0:Tq=Bss;break;case 1:Tq=Bst;break;case 2:Tq=Bsu;
break;case 3:Tq=Bsv;break;case 4:Tq=Bsw;break;default:throw new Error(AyE+aIndex.
toFixed());}Tq=Tq+(CQ+A.aaR(A.acf.Az9));}break;case 1:{switch(aIndex){case 0:Tq=
Bsx;break;case 1:Tq=Bsy;break;case 2:Tq=Bsz;break;case 3:Tq=BsA;break;case 4:Tq=
BsB;break;default:throw new Error(AyE+aIndex.toFixed());}Tq=Tq+(CQ+A.aaR(A.acf.A7m
));}break;default:A.ab5("%s%e",Ban,AoH);}return Tq;},Bzt:function(AIZ,AoH){var Ac8=
0;switch(AoH){case 0:switch(AIZ){case 0:Ac8=35000;break;case 1:Ac8=40000;break;case
2:Ac8=45000;break;case 3:Ac8=50000;break;case 4:Ac8=2147483647;break;default:throw new
Error(AyE+AIZ.toFixed());}break;case 1:switch(AIZ){case 0:Ac8=36287;break;case 1:
Ac8=40823;break;case 2:Ac8=45359;break;case 3:Ac8=49895;break;case 4:Ac8=2147483647;
break;default:throw new Error(AyE+AIZ.toFixed());}break;default:A.ab5("%s%e",Ban
,AoH);}return Ac8;},Bzs:function(A_,AoH){var Azh=0;var O;for(O=0;O<this.AaO.ME;O++
)if(A_<this.Bzt(O,AoH)){Azh=O;break;}return Azh;},Fk:function(G){var B;this.Ay.Mx((
B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[
1]);},_Init:function(aArg){C.FB._Init.call(this,aArg);C.Agv._Init.call(this.Abv={
I:this},0);C.IG._Init.call(this.UK={I:this},0);C.AaW._Init.call(this.AaW={I:this
},0);C.Pl._Init.call(this.Pl={I:this},0);C.Pl._Init.call(this.Ajn={I:this},0);C.
Pl._Init.call(this.Agx={I:this},0);C.Pl._Init.call(this.Ajo={I:this},0);C.Pl._Init.
call(this.Agy={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaO={I:this},0);this.__proto__=C.AN$;this.Dr(C.Avs);this.Akw(A.aaR(
A.acf.A6c));this.Ae8(A.aaR(A.acf.A7T));this.Abv.H(AIz);this.Abv.Aj(true);this.Abv.
T(A.aaR(A.acf.A4$));this.Abv.Bi(false);this.Abv.Kt(5);this.UK.H(AZX);this.UK.Aj(
true);this.UK.T(A.jV);this.UK.Bi(true);this.UK.Kt(5);this.AaW.H(Aov);this.AaW.Aj(
true);this.Pl.H(Ah1);this.Pl.Aj(true);this.Pl.Bi(true);this.Ajn.H(Atb);this.Ajn.
Aj(true);this.Agx.H(Ayx);this.Agx.Aj(true);this.Agx.Bi(true);this.Ajo.H(AZY);this.
Ajo.Aj(true);this.Agy.H(Aow);this.Agy.Aj(true);this.Agy.Bi(true);this.Ay.H(It);this.
AaO.Zv(5);this.J(this.Abv,-1);this.J(this.UK,-1);this.J(this.AaW,-1);this.J(this.
Pl,-1);this.J(this.Ajn,-1);this.J(this.Agx,-1);this.J(this.Ajo,-1);this.J(this.Agy
,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fk];this.Aii=A._NewObject(C.AvP,0);
this.UK.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FB;this.Abv._Done(
);this.UK._Done();this.AaW._Done();this.Pl._Done();this.Ajn._Done();this.Agx._Done(
);this.Ajo._Done();this.Agy._Done();this.Ay._Done();this.AaO._Done();C.FB._Done.
call(this);},_ReInit:function(){C.FB._ReInit.call(this);this.Abv._ReInit();this.
UK._ReInit();this.AaW._ReInit();this.Pl._ReInit();this.Ajn._ReInit();this.Agx._ReInit(
);this.Ajo._ReInit();this.Agy._ReInit();this.Ay._ReInit();this.AaO._ReInit();this.
Akw(A.aaR(A.acf.A6c));this.Ae8(A.aaR(A.acf.A7T));this.Abv.T(A.aaR(A.acf.A4$));this.
UK.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FB._Mark.call(this,D);if((B=this.
Aii)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajo
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaO)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaW={H_:null,Gt:null
,Bl:function(aSize){C.IG.Bl.call(this,aSize);this.H_.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gt.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IG.Ai.call(this,Ae);this.H_.L(this.V.AQ);this.Gt.L(this.V.AQ);},_Init:
function(aArg){C.IG._Init.call(this,aArg);A.acg.Text._Init.call(this.H_={I:this}
,0);A.acg.Text._Init.call(this.Gt={I:this},0);this.__proto__=C.AaW;this.T(A.aaR(
A.acf.AG_));this.H_.H(BsC);this.H_.KR(true);this.H_.R(A.aaR(A.acf.Aqw));this.H_.
L(A.jb.Text);this.Gt.H(Bao);this.Gt.R(Aad);this.Gt.L(A.jb.Text);this.J(this.H_,0
);this.J(this.Gt,0);this.V.S(A.aaL(A.fl.Il));this.H_.S(A.aaL(A.fl.Il));this.Gt.S(
A.aaL(A.fl.Ko));},_Done:function(){this.__proto__=C.IG;this.H_._Done();this.Gt._Done(
);C.IG._Done.call(this);},_ReInit:function(){C.IG._ReInit.call(this);this.H_._ReInit(
);this.Gt._ReInit();this.T(A.aaR(A.acf.AG_));this.H_.R(A.aaR(A.acf.Aqw));this.V.
S(A.aaL(A.fl.Il));this.H_.S(A.aaL(A.fl.Il));this.Gt.S(A.aaL(A.fl.Ko));},_Mark:function(
D){var B;C.IG._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pl={AP:null,A$:null,P0:null,H_:null,Gt:null,A$V:A.jV,Aqw:0,A_O:0,Bl:function(
aSize){C.IG.Bl.call(this,aSize);this.P0.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P0.M[2]-1,0,this.P0.M[2]+1,aSize[1]]);this.H_.H([this.P0.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A$.H([this.H_.M[2]-1,0,this.H_.M[2]+1,aSize[
1]]);this.Gt.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IG.Ai.call(
this,Ae);this.P0.L(this.V.AQ);this.H_.L(this.V.AQ);this.Gt.L(this.V.AQ);},BnE:function(
E){if(this.A$V===E)return;this.A$V=E;this.P0.R(E);},BlY:function(E){if(this.Aqw===
E)return;this.Aqw=E;this.H_.R(E.toFixed());},A_d:function(E){if(this.A_O===E)return;
this.A_O=E;this.Gt.R(E.toFixed()+Xa);},_Init:function(aArg){C.IG._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.P0={I:this},0);A.acg.Text._Init.call(this.H_={I:
this},0);A.acg.Text._Init.call(this.Gt={I:this},0);this.__proto__=C.Pl;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.P0.H(BsD);this.P0.R(A.aaR(A.acf.AG_));this.P0.L(
A.jb.Text);this.H_.R(UZ);this.H_.L(A.jb.Text);this.Gt.R(BsE);this.Gt.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A$,0);this.J(this.P0,0);this.J(this.H_,0);this.J(
this.Gt,0);this.P0.S(A.aaL(A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gt.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IG;this.AP._Done();this.A$._Done();this.
P0._Done();this.H_._Done();this.Gt._Done();C.IG._Done.call(this);},_ReInit:function(
){C.IG._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.P0._ReInit();
this.H_._ReInit();this.Gt._ReInit();this.P0.R(A.aaR(A.acf.AG_));this.P0.S(A.aaL(
A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gt.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IG._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMw={AKM:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mr();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amu._Init.call(this,aArg);this.__proto__=
C.AMw;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARw={R1:null,
R7:null,R0:null,R4:null,Pn:null,R3:null,ALi:function(G){A.pe([this,this.BCG],this
);A.pe([this,this.BCu],this);A.pe([this,this.BCq],this);A.pe([this,this.A4o],this
);A.pe([this,this.BCx],this);A.pe([this,this.BCv],this);},Ig:function(G){var Cy=(
C.QV.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.R7)A._GetAutoObject(C.A9
).Cd(20);else if(Cy===this.Pn)A._GetAutoObject(C.A9).Cd(14);else if(Cy===this.R1
)A._GetAutoObject(C.A9).Cd(12);else if(Cy===this.R4)A._GetAutoObject(C.A9).Cd(43
);else if(Cy===this.R0)A._GetAutoObject(C.A9).Cd(51);else if(Cy===this.R3)A._GetAutoObject(
C.A9).Cd(61);},BCu:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mr();var
Azo=A._NewObject(A.Device.BoolFilterCriterion,0);Azo.Initialize(9,0,true,true);Be.
CW(Azo);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pn.Zt(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BCG:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mr();var ABw=A._NewObject(A.Device.BoolFilterCriterion,0);ABw.Initialize(
12,0,true,true);Be.CW(ABw);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R7.Zt(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCq:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mr();var Ay6=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay6.Initialize(8,0,true,true);Be.CW(Ay6);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R1.Zt(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},A4o:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6v(A._GetAutoObject(A.Device.Device
).ABC);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R0.Zt(A._GetAutoObject(A.
Device.Device).An.B9().toFixed());},BCx:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6E();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R4.Zt(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BCv:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACW();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R3.Zt(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},_Init:function(aArg){C.T7._Init.call(this,
aArg);C.QV._Init.call(this.R1={I:this},0);C.QV._Init.call(this.R7={I:this},0);C.
QV._Init.call(this.R0={I:this},0);C.QV._Init.call(this.R4={I:this},0);C.QV._Init.
call(this.Pn={I:this},0);C.QV._Init.call(this.R3={I:this},0);this.__proto__=C.ARw;
this.R1.H(P9);this.R1.Aj(true);this.R1.T(A.aaR(A.acf.Alarm));this.R1.AbZ(true);this.
R7.H(AZ1);this.R7.Aj(true);this.R7.T(A.aaR(A.acf.Asb));this.R7.AbZ(true);this.R0.
H(N$);this.R0.Aj(true);this.R0.T(A.aaR(A.acf.ActionList));this.R0.AbZ(true);this.
R4.H(P_);this.R4.Aj(true);this.R4.T(A.aaR(A.acf.AOD));this.R4.AbZ(true);this.Pn.
H(S8);this.Pn.Ar(false);this.Pn.Aj(false);this.Pn.Z(false);this.Pn.T(A.aaR(A.acf.
ACf));this.Pn.AbZ(true);this.R3.H(UQ);this.R3.Aj(true);this.R3.T(A.aaR(A.acf.A5_
));this.R3.AbZ(true);this.J(this.R1,-1);this.J(this.R7,-1);this.J(this.R0,-1);this.
J(this.R4,-1);this.J(this.Pn,-1);this.J(this.R3,-1);this.R1.AR=[this,this.AcS];this.
R1.DB(A.aaL(A.ach.ADt));this.R1.Ab2(A.aaL(A.ach.NT));this.R7.AR=[this,this.AcS];
this.R7.DB(A.aaL(A.ach.AQT));this.R7.Ab2(A.aaL(A.ach.NT));this.R0.AR=[this,this.
AcS];this.R0.DB(A.aaL(A.ach.APJ));this.R0.Ab2(A.aaL(A.ach.NT));this.R4.AR=[this,
this.AcS];this.R4.DB(A.aaL(A.ach.AQf));this.R4.Ab2(A.aaL(A.ach.NT));this.Pn.AR=[
this,this.AcS];this.Pn.DB(A.aaL(A.ach.ADt));this.Pn.Ab2(A.aaL(A.ach.NT));this.R3.
AR=[this,this.AcS];this.R3.DB(A.aaL(A.ach.AP7));this.R3.Ab2(A.aaL(A.ach.NT));},_Done:
function(){this.__proto__=C.T7;this.R1._Done();this.R7._Done();this.R0._Done();this.
R4._Done();this.Pn._Done();this.R3._Done();C.T7._Done.call(this);},_ReInit:function(
){C.T7._ReInit.call(this);this.R1._ReInit();this.R7._ReInit();this.R0._ReInit();
this.R4._ReInit();this.Pn._ReInit();this.R3._ReInit();this.R1.T(A.aaR(A.acf.Alarm
));this.R7.T(A.aaR(A.acf.Asb));this.R0.T(A.aaR(A.acf.ActionList));this.R4.T(A.aaR(
A.acf.AOD));this.Pn.T(A.aaR(A.acf.ACf));this.R3.T(A.aaR(A.acf.A5_));},_Mark:function(
D){var B;C.T7._Mark.call(this,D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARv={R8:null,VI:null,R5:null,R2:null,R6:null,ALi:function(G){A.pe([this,this.
BCr],this);A.pe([this,this.BCB],this);A.pe([this,this.BCC],this);A.pe([this,this.
BCH],this);A.pe([this,this.BCD],this);},Ig:function(G){var Cy=(C.QV.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VI)A._GetAutoObject(C.A9).Cd(90);if(Cy===this.
R2)A._GetAutoObject(C.A9).Cd(74);if(Cy===this.R5)A._GetAutoObject(C.A9).Cd(71);if(
Cy===this.R6)A._GetAutoObject(C.A9).Cd(46);if(Cy===this.R8)A._GetAutoObject(C.A9
).Cd(85);},BCC:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACZ();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.R6.Zt(A._GetAutoObject(A.Device.Device).An.B9().
toFixed());},BCH:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6P(Math.max(
A._GetAutoObject(A.Device.Device).AvX,A._GetAutoObject(A.Device.Helper).A6H(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R8.Zt(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCB:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A6K();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.R5.Zt(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCr:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOE();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R2.Zt(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCD:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avo();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VI.Zt(A._GetAutoObject(A.Device.Device).An.B9().toFixed()
);},_Init:function(aArg){C.T7._Init.call(this,aArg);C.QV._Init.call(this.R8={I:this
},0);C.QV._Init.call(this.VI={I:this},0);C.QV._Init.call(this.R5={I:this},0);C.QV.
_Init.call(this.R2={I:this},0);C.QV._Init.call(this.R6={I:this},0);this.__proto__=
C.ARv;this.R8.H(BsF);this.R8.Aj(true);this.R8.T(A.aaR(A.acf.A7L));this.R8.AbZ(true
);this.VI.H(BsG);this.VI.Aj(true);this.VI.T(A.aaR(A.acf.AGb));this.R5.H(BsH);this.
R5.Aj(true);this.R5.T(A.aaR(A.acf.A7N));this.R5.AbZ(true);this.R2.H(BsI);this.R2.
Aj(true);this.R2.T(A.aaR(A.acf.ABW));this.R2.AbZ(true);this.R6.H(BsJ);this.R6.Aj(
true);this.R6.T(A.aaR(A.acf.AR9));this.R6.AbZ(true);this.J(this.R8,-1);this.J(this.
VI,-1);this.J(this.R5,-1);this.J(this.R2,-1);this.J(this.R6,-1);this.R8.AR=[this
,this.AcS];this.R8.DB(A.aaL(A.ach.AQw));this.R8.Ab2(A.aaL(A.ach.NT));this.VI.AR=[
this,this.AcS];this.VI.DB(A.aaL(A.ach.ADJ));this.R5.AR=[this,this.AcS];this.R5.DB(
A.aaL(A.ach.AQy));this.R5.Ab2(A.aaL(A.ach.NT));this.R2.AR=[this,this.AcS];this.R2.
DB(A.aaL(A.ach.AP2));this.R2.Ab2(A.aaL(A.ach.NT));this.R6.AR=[this,this.AcS];this.
R6.DB(A.aaL(A.ach.AQA));this.R6.Ab2(A.aaL(A.ach.NT));},_Done:function(){this.__proto__=
C.T7;this.R8._Done();this.VI._Done();this.R5._Done();this.R2._Done();this.R6._Done(
);C.T7._Done.call(this);},_ReInit:function(){C.T7._ReInit.call(this);this.R8._ReInit(
);this.VI._ReInit();this.R5._ReInit();this.R2._ReInit();this.R6._ReInit();this.R8.
T(A.aaR(A.acf.A7L));this.VI.T(A.aaR(A.acf.AGb));this.R5.T(A.aaR(A.acf.A7N));this.
R2.T(A.aaR(A.acf.ABW));this.R6.T(A.aaR(A.acf.AR9));},_Mark:function(D){var B;C.T7.
_Mark.call(this,D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.AR7={Wx:function(G){this.Agt(
);this.AL6();this.A4N(A.aaR(A.acf.A7p),[this,this.Bnk],131072);this.A4N(A.aaR(A.
acf.A7o),[this,this.Bnj],16384);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR
).Mh(A.aaR(A.acf.ARq)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DE:function(G){},Abq:function(){return C.Aqs;},Abr:function(){return C.AqZ;}
,Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A6K());},HO:function(G){var F;C.QB.HO.call(this,G);if(this.Akf()===false
){if(!!this.E3&&((F=this.E3,F[1].call(F[0]))===16)){this.N.Cs(A.aaL(A.ach.AQL));
this.N.Cg=[this,this.A58];}else{this.N.Cs(A.aaL(A.ach.AQq));this.N.Cg=[this,this.
A56];}this.N.FE(A.jV);}this.N.OO(false);this.N.OP(false);},Agf:function(){A._GetAutoObject(
C.A9).Cd(72);},Bnj:function(G){this.AGz(16384);},Bnk:function(G){this.AGz(131072
);},_Init:function(aArg){C.QB._Init.call(this,aArg);this.__proto__=C.AR7;this.Dr(
C.APn);this.Dj(A.aaR(A.acf.A7R));this.ATd(A._GetAutoObject(C.Av4));},_ReInit:function(
){C.QB._ReInit.call(this);this.Dj(A.aaR(A.acf.A7R));},_className:"Application::NoNaisIdListScreen"
};C.AR6={_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AR6;this.
Mu.Ar(false);this.Mu.Aj(false);this.Mu.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APn={DX:function(G){C.Kp.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.
Converter).AdX(10));},_Init:function(aArg){C.Kp._Init.call(this,aArg);this.__proto__=
C.APn;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkM={TL:null,BfF:false
,CP:function(){A.pe([this,this.AyP],this);},DE:function(G){},CC:function(G){C.GJ.
CC.call(this,G);if(this.BfF&&(A._GetAutoObject(A.Device.Device).PV>0))A.pe([this
,this.AIH],this);},Agc:function(G){this.A55(this);},Agf:function(){A._GetAutoObject(
C.A9).Cd(73);},ASd:function(G){throw new Error(Aox);},BaI:function(s){this.ASd(s
);},ASe:function(G){throw new Error(Aox);},BaJ:function(s){this.ASe(s);},ASj:function(
G){throw new Error(Aox);},AIH:function(s){this.ASj(s);},BeR:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7)){this.
BfF=true;A._GetAutoObject(C.A9).Cd(76);}},Age:function(G){var B;var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([this,this.
XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);},XA:function(G){var B;if(
A._GetAutoObject(A.Device.Device).P1.ZX===3){A._GetAutoObject(A.Device.Device).A3(
74,false,A.jV,0,[this,this.Age]);A.z$([this,this.XA],[B=A._GetAutoObject(A.Device.
Device),B.Ww,B.Xc],0);A.pe([this,this.AIH],this);}},AJB:function(){throw new Error(
Aox);},A77:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A54(this);},
BnT:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Bh9(this);},IC:function(
G){},A9N:function(E){if(A.aaZ(this.TL,E))return;if(!!this.TL)A.z$([this,this.IC]
,this.TL,0);this.TL=E;if(!!E)A.zX([this,this.IC],E,0);if(!!E)A.pe([this,this.IC]
,this);},Bgs:function(G){var F,Ct;if(!this.TL)return;(Ct=this.TL,Ct[2].call(Ct[0
],!(F=this.TL,F[1].call(F[0]))));},_Init:function(aArg){C.GJ._Init.call(this,aArg
);this.__proto__=C.AkM;this.Dj(A.aaR(A.acf.A7Y));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dj(A.aaR(A.acf.A7Y));this.CP();},_Mark:function(D){var B;C.GJ._Mark.
call(this,D);if((B=this.TL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::RegistrationsListScreen"};C.AUk={_Init:function(aArg){C.I4._Init.call(
this,aArg);this.__proto__=C.AUk;},_className:"Application::RegistrationsListFilterScreen"
};C.Aes={_Init:function(aArg){C.Yo._Init.call(this,aArg);this.__proto__=C.Aes;this.
Text.H(BsK);this.Text.R(A.jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"
};C.AB3={Kd:0,AP:null,A$:null,Ea:null,IL:null,SW:null,Gy:null,Mf:0,K9:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IL.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A$.H([this.IL.M[2]-1,0,this.IL.M[2]+1,aSize[
1]]);this.SW.H([this.IL.M[2],0,this.IL.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.SW.M[2]-1,0,this.SW.M[2]+1,aSize[1]]);this.Gy.H([this.SW.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IL.L(this.V.AQ);this.
Gy.L(this.V.AQ);this.SW.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj4(this.
K9)){this.V.S(A.aaL(A.fl.H1));this.T(Bap);this.SW.R(Ro);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mf.toFixed());this.SW.R(A._GetAutoObject(A.Device.Helper).Sh(this.
Kd,0,5).toFixed());}},Cf:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX
){this.Mf=this.AX.CF(Ad,1);this.K9=this.AX.AOS(Ad,34);var AtN=this.AX.AOK(Ad,7);
this.Kd=this.AX.KN(Ad,26);var Azb=this.AX.Hu(Ad,4);var AfN=A._GetAutoObject(A.Device.
Helper).L9(Azb,A._GetAutoObject(A.Device.Helper).Dv());this.IL.Ax(A._GetAutoObject(
A.Device.Converter).AmS(AtN));if(AfN<100)this.Gy.R((AfN.toFixed()+CQ)+A.aaR(A.acf.
ALV));else this.Gy.R(A._GetAutoObject(A.acj.KK).ACS(Azb,A._GetAutoObject(A.Device.
Helper).Dv(),AIl));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IL={I:this},0);
A.acg.Text._Init.call(this.SW={I:this},0);C.CH._Init.call(this.Gy={I:this},0);this.
__proto__=C.AB3;this.AP.H(Aoq);this.AP.L(A.jb.Bc);this.A$.H(Aor);this.A$.L(A.jb.
Bc);this.Ea.H(AZ2);this.Ea.L(A.jb.Bc);this.IL.H(Baq);this.IL.L(A.jb.Text);this.SW.
H(Ayt);this.Gy.H(AZ3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.IL,0);this.J(this.SW,0);this.J(this.Gy,0);this.SW.S(A.aaL(A.fl.Af));this.
Gy.S(A.aaL(A.fl.Af));this.Gy.A2(A.aaL(A.fl.Ak));this.Gy.Cv(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done(
);this.Ea._Done();this.IL._Done();this.SW._Done();this.Gy._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.A$._ReInit(
);this.Ea._ReInit();this.IL._ReInit();this.SW._ReInit();this.Gy._ReInit();this.SW.
S(A.aaL(A.fl.Af));this.Gy.S(A.aaL(A.fl.Af));this.Gy.A2(A.aaL(A.fl.Ak));this.Gy.Cv(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADj={Aj1:
null,Pz:null,I7:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Aj1={I:this},0);A.acg.Ap._Init.call(this.Pz={I:this},0);A.acg.Ap._Init.
call(this.I7={I:this},0);this.__proto__=C.ADj;this.Aj1.H(BsL);this.Aj1.L(A.jb.Text
);this.Pz.H(BsM);this.Pz.L(A.jb.Text);this.I7.H(Bah);this.I7.L(A.jb.Text);this.J(
this.Aj1,0);this.J(this.Pz,0);this.J(this.I7,0);this.Aj1.Ax(A.aaL(A.ach.ADF));this.
Pz.Ax(A.aaL(A.ach.AvD));this.I7.Ax(A.aaL(A.ach.Avy));},_Done:function(){this.__proto__=
C.Dc;this.Aj1._Done();this.Pz._Done();this.I7._Done();C.Dc._Done.call(this);},_ReInit:
function(){C.Dc._ReInit.call(this);this.Aj1._ReInit();this.Pz._ReInit();this.I7.
_ReInit();},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.Aj1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APp={IS:null,AgY:null,HP:null,Bc:null,MC:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8V,B.A_i],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
Wv,B.JT],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.Arz,B.SG
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},De:function(E){C.BQ.De.call(this,E);this.IS.L(E);this.AgY.L(E);this.
HP.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HP.R(A.aaR(A.acf.Afb));else this.HP.R(((A.aaR(A.acf.GN)+A.aaR(A.acf.
Colon))+CQ)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
AqW()){this.AwZ(((A._GetAutoObject(A.Device.Helper).W.CL+1).toFixed()+A$5)+A._GetAutoObject(
A.Device.Device).An.B9().toFixed());this.JT(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Ng(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.AwZ(A$6);this.JT(2);
this.OnSetAnimalId(-1);this.Ng(0);}},JT:function(E){if(this.Gender===E)return;this.
Gender=E;this.AgY.Ax(A._GetAutoObject(A.Device.Converter).AmS(E));},AwZ:function(
E){if(this.MC===E)return;this.MC=E;this.IS.R(E);},Ng:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj4(E))this.HP.
Z(false);else this.HP.Z(true);},_Init:function(aArg){C.BQ._Init.call(this,aArg);
A.acg.Text._Init.call(this.IS={I:this},0);A.acg.Ap._Init.call(this.AgY={I:this},
0);A.acg.Text._Init.call(this.HP={I:this},0);A.acg.C5._Init.call(this.Bc={I:this
},0);this.__proto__=C.APp;this.IS.H(A$7);this.IS.Hm(2);this.IS.KR(true);this.IS.
A6(0x12);this.IS.R(A$8);this.AgY.H(BsN);this.HP.H(BsO);this.HP.A6(0x11);this.HP.
R(A.aaR(A.acf.Afb));this.Bc.DC(Ayz);this.Bc.DM(AyA);this.Bc.L(A.jb.Bc);this.J(this.
IS,0);this.J(this.AgY,0);this.J(this.HP,0);this.J(this.Bc,0);this.IS.S(A.aaL(A.fl.
Ak));this.AgY.Ax(A._GetAutoObject(A.Device.Converter).AmS(2));this.HP.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.IS._Done();this.
AgY._Done();this.HP._Done();this.Bc._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.IS._ReInit();this.AgY._ReInit();this.HP._ReInit();
this.Bc._ReInit();this.HP.R(A.aaR(A.acf.Afb));this.IS.S(A.aaL(A.fl.Ak));this.HP.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.IS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.AaZ={EaseOfDeliveryToString:
null,AgP:null,Cf:function(G){C.NE.Cf.call(this,G);var AJU=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.Kv(this.EaseOfDeliveryToString.Lu(AJU));this.G2.R(
this.AgP.Aei(AJU).toFixed());},De:function(E){C.NE.De.call(this,E);this.G2.L(E);
},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgP._Init.call(this.
AgP={I:this},0);this.__proto__=C.AaZ;this.T(A.aaR(A.acf.AgG));},_Done:function(){
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
I:this},0);this.__proto__=C.XP;this.T(A.aaR(A.acf.Jh));},_Done:function(){this.__proto__=
C.NE;this.WhereAboutsToString._Done();this.KX._Done();C.NE._Done.call(this);},_ReInit:
function(){C.NE._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KX._ReInit(
);this.T(A.aaR(A.acf.Jh));},_Mark:function(D){var B;C.NE._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RY={Cq:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D9.CC.
call(this,G);A.zX([this,this.AfD],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.
OnSetId],0);A.zX([this,this.AfD],[B=A._GetAutoObject(A.Device.Helper),B.U0,B.U3]
,0);A.pe([this,this.AfD],this);},E5:function(G){var B;C.D9.E5.call(this,G);A.z$([
this,this.AfD],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId],0);A.z$([this
,this.AfD],[B=A._GetAutoObject(A.Device.Helper),B.U0,B.U3],0);},Fk:function(G){var
B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.
My(-this.Y.Br[1]);},DE:function(G){switch(this.Cq.CO){case 6:case 7:this.Cq.NH=true;
break;case 4:this.Bf1(4);break;case 5:this.Bf1(5);break;default:;}},Bf1:function(
Gz){var B;switch(Gz){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Db(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Db(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;default:throw new Error(
BsP);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I3.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Cf(this
);}X=X.Ah;}},AfD:function(s){this.GH(s);},MP:function(G){var B;this.Y.Vw(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.RY;this.Cq.Filter=147;this.Y.H(UX);this.Y.JS(1);this.Ay.H(AsW
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,
this.DE];this.Y.El=[this,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cq._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XQ={AaT:null,
XM:null,AaU:null,XN:null,AaZ:null,XP:null,_Init:function(aArg){C.RY._Init.call(this
,aArg);C.AaT._Init.call(this.AaT={I:this},0);C.XM._Init.call(this.XM={I:this},0);
C.AaU._Init.call(this.AaU={I:this},0);C.XN._Init.call(this.XN={I:this},0);C.AaZ.
_Init.call(this.AaZ={I:this},0);C.XP._Init.call(this.XP={I:this},0);this.__proto__=
C.XQ;this.AaT.H(BD);this.AaT.Aj(true);this.XM.H(IV);this.XM.Aj(true);this.XM.Bi(
true);this.AaU.H(Qa);this.AaU.Aj(true);this.XN.H(Aab);this.XN.Aj(true);this.XN.Bi(
true);this.AaZ.H(Ald);this.AaZ.Aj(true);this.XP.H(Aop);this.XP.Aj(true);this.XP.
Bi(true);this.J(this.AaT,0);this.J(this.XM,0);this.J(this.AaU,0);this.J(this.XN,
0);this.J(this.AaZ,0);this.J(this.XP,0);},_Done:function(){this.__proto__=C.RY;this.
AaT._Done();this.XM._Done();this.AaU._Done();this.XN._Done();this.AaZ._Done();this.
XP._Done();C.RY._Done.call(this);},_ReInit:function(){C.RY._ReInit.call(this);this.
AaT._ReInit();this.XM._ReInit();this.AaU._ReInit();this.XN._ReInit();this.AaZ._ReInit(
);this.XP._ReInit();},_Mark:function(D){var B;C.RY._Mark.call(this,D);if((B=this.
AaT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XM)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XN)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XN={
BreedToString:null,G2:null,M1:null,Cf:function(G){C.IF.Cf.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BS(Bv));this.G2.
R(this.M1.Aei(Bv).toFixed());},De:function(E){C.IF.De.call(this,E);this.G2.L(E);
},_Init:function(aArg){C.IF._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G2={I:this},0);A.Device.
M1._Init.call(this.M1={I:this},0);this.__proto__=C.XN;this.BT.H(BsQ);this.G2.H(BsR
);this.G2.Hm(5);this.G2.A6(0x14);this.G2.R(BsS);this.G2.L(A.jb.Text);this.J(this.
G2,0);this.Hv.Ax(A.aaL(A.ach.ADx));this.G2.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IF;this.BreedToString._Done();this.G2._Done();this.M1._Done();C.
IF._Done.call(this);},_ReInit:function(){C.IF._ReInit.call(this);this.BreedToString.
_ReInit();this.G2._ReInit();this.M1._ReInit();this.G2.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IF._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M1)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaU={
Cf:function(G){C.IF.Cf.call(this,G);var AAj=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAj>0)this.T(A._GetAutoObject(A.Device.Converter).Rh(AAj));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IF._Init.call(this,aArg);this.__proto__=
C.AaU;this.Hv.Ax(A.aaL(A.ach.AP8));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XM={Yt:null,Cf:function(G){C.IF.Cf.call(this,G);var O_=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfS=A._GetAutoObject(A.Device.Helper).W.BirthType;if(O_>
0)this.T(A._GetAutoObject(A.acj.KK).AjK(O_));else this.T(A.aaR(A.acf.Unknown));var
Azd=A.aaL(A.aci.TK);switch(AfS){case 0:Azd=A.aaL(A.ach.ADv);break;case 1:{Azd=A.
aaL(A.ach.Avz);this.Yt.Cw(0);}break;case 2:{Azd=A.aaL(A.ach.Avz);this.Yt.Cw(1);}
break;case 3:{Azd=A.aaL(A.ach.Avz);this.Yt.Cw(2);}break;default:A.ab5("%s%e",BsT
,AfS);}this.Yt.Ax(Azd);},_Init:function(aArg){C.IF._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Yt={I:this},0);this.__proto__=C.XM;this.BT.H(BsU);this.Yt.H(AHQ);
this.Yt.L(A.jb.Text);this.J(this.Yt,0);this.Hv.Ax(A.aaL(A.ach.Avy));this.Yt.Ax(A.
aaL(A.ach.ADv));},_Done:function(){this.__proto__=C.IF;this.Yt._Done();C.IF._Done.
call(this);},_ReInit:function(){C.IF._ReInit.call(this);this.Yt._ReInit();},_Mark:
function(D){var B;C.IF._Mark.call(this,D);if((B=this.Yt)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaT={Kd:0,XO:null,K9:0
,Bl:function(aSize){C.IF.Bl.call(this,aSize);this.XO.H(this.Hv.M);},Ai:function(
Ae){C.IF.Ai.call(this,Ae);this.XO.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj4(this.K9)){this.T(A.aaR(A.acf.AnimalLoss));this.Hv.Z(false);this.XO.Z(true);
}else if(this.Kd>0){this.T(A._GetAutoObject(A.Device.Converter).Rh(this.Kd));this.
Hv.Z(true);this.XO.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hv.Z(true);this.
XO.Z(false);}},Cf:function(G){C.IF.Cf.call(this,G);this.Kd=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IF._Init.call(this,aArg);A.acg.Text._Init.call(this.XO={
I:this},0);this.__proto__=C.AaT;this.XO.R(Bap);this.J(this.XO,0);this.Hv.Ax(A.aaL(
A.ach.AvD));this.XO.S(A.aaL(A.fl.H1));},_Done:function(){this.__proto__=C.IF;this.
XO._Done();C.IF._Done.call(this);},_ReInit:function(){C.IF._ReInit.call(this);this.
XO._ReInit();},_Mark:function(D){var B;C.IF._Mark.call(this,D);if((B=this.XO)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMt={XQ:null,Init:function(aArg){var B;A.zX([this,this.AAB],[B=A._GetAutoObject(
A.Device.Device),B.AEu,B.AIL],0);A.pe([this,this.AAB],this);},DE:function(G){var
D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.On(this);break;
case 7:this.MV(this);break;default:D5.NH=true;}},CC:function(G){var B;this.XQ.CC(
this);C.AB.CC.call(this,G);},E5:function(G){var B;this.XQ.E5(this);C.AB.E5.call(
this,G);},Anm:function(G){A._GetAutoObject(C.A9).FA();},Adt:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},MV:function(G){if(A._GetAutoObject(A.Device.
Device).An.B9()<=1)return;var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB+1;
if(LB>=A._GetAutoObject(A.Device.Device).An.B9())LB=0;A._GetAutoObject(A.Device.
Helper).G7(LB);},On:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)
return;var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB-1;if(LB<0)LB=A._GetAutoObject(
A.Device.Device).An.B9()-1;A._GetAutoObject(A.Device.Helper).G7(LB);},AAB:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqo)A._GetAutoObject(C.A9).Ab7(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XQ._Init.call(this.XQ={I:this},0);this.
__proto__=C.AMt;this.Background.H(Cc);this.N.Z(true);this.N.OO(true);this.N.OP(true
);this.Dr(C.APp);this.XQ.H(Ff);this.J(this.XQ,0);this.N.CE=[this,this.Anm];this.
N.Cg=[this,this.Adt];this.N.C1(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AeA));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XQ._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XQ._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IF={Hv:null,BT:null
,T:function(E){C.I3.T.call(this,E);this.BT.R(this.DK);},De:function(E){C.I3.De.call(
this,E);this.Hv.L(E);this.BT.L(E);},_Init:function(aArg){C.I3._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hv={I:this},0);C.CH._Init.call(this.BT={I:this},0);this.
__proto__=C.IF;this.Hv.H(BsV);this.Hv.L(A.jb.Text);this.BT.H(BsW);this.BT.A6(0x11
);this.BT.L(A.jb.Text);this.J(this.Hv,0);this.J(this.BT,0);this.Hv.Ax(A.aaL(A.aci.
TK));this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I3;this.Hv._Done();this.BT._Done();C.I3._Done.call(this);},_ReInit:function(
){C.I3._ReInit.call(this);this.Hv._ReInit();this.BT._ReInit();this.BT.S(A.aaL(A.
fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I3._Mark.call(this
,D);if((B=this.Hv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I3={Background:null
,KS:0,Hk:false,CP:function(){this.Cf(this);},Init:function(aArg){var B;A.zX([this
,this.Bbt],[B=A._GetAutoObject(A.Device.Helper).W,B.Q2,B.OnSetId],0);A.pe([this,
this.Bbt],this);},Bl:function(aSize){C.Hh.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hh.Ai.call(this,Ae);if(this.
Hk)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CJ);},Cf:function(G){}
,Bbt:function(s){this.Cf(s);},Bi:function(E){if(this.Hk===E)return;this.Hk=E;this.
Am();},De:function(E){if(this.KS===E)return;this.KS=E;},_Init:function(aArg){C.Hh.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.I3;this.H(BD);this.Background.H(AIn);this.KS=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hh;this.Background._Done(
);C.Hh._Done.call(this);},_ReInit:function(){C.Hh._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NE={G2:null,BBd:function(G){this.BT.H(A.abN(this.BT.M,this.G2.M[0]));},_Init:
function(aArg){C.Fz._Init.call(this,aArg);A.acg.Text._Init.call(this.G2={I:this}
,0);this.__proto__=C.NE;this.G2.AZ(0xA);this.G2.H(BsX);this.G2.Hm(5);this.G2.I$(
true);this.G2.A6(0x14);this.G2.R(A.jV);this.G2.L(A.jb.Text);this.J(this.G2,0);this.
G2.Q5([this,this.BBd]);this.G2.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fz;this.G2._Done();C.Fz._Done.call(this);},_ReInit:function(){C.Fz._ReInit.call(
this);this.G2._ReInit();this.G2.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fz.
_Mark.call(this,D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axi={AQ8:null,_Init:function(aArg){C.Zw._Init.call(this,aArg);this.__proto__=
C.Axi;},_Mark:function(D){var B;C.Zw._Mark.call(this,D);if((B=this.AQ8)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANB={Wu:null,WO:0,AwK:function(E){C.AmE.AwK.call(this,E);if(E)this.Pp.R(BsY);
else this.Pp.R(Bar);},Bm$:function(E){if(A.aaZ(this.Wu,E))return;if(!!this.Wu)A.
z$([this,this.A3k],this.Wu,0);this.Wu=E;if(!!E)A.zX([this,this.A3k],E,0);if(!!E)
A.pe([this,this.A3k],this);},AFJ:function(E){var F;if(this.WO===E)return;this.WO=
E;this.AwK(!!this.Wu&&((F=this.Wu,F[1].call(F[0]))===E));},A3k:function(G){var F;
this.AwK(!!this.Wu&&((F=this.Wu,F[1].call(F[0]))===this.WO));},_Init:function(aArg
){C.AmE._Init.call(this,aArg);this.__proto__=C.ANB;this.Pp.R(Bar);this.Pp.S(A.aaL(
A.fl.H1));},_Mark:function(D){var B;C.AmE._Mark.call(this,D);if((B=this.Wu)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axk={Wu:null,WO:0,_Init:function(aArg){C.Zw._Init.call(this,aArg);this.__proto__=
C.Axk;},_Mark:function(D){var B;C.Zw._Mark.call(this,D);if((B=this.Wu)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AT0={GP:null,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.Q$._Init.call(
this.GP={I:this},0);this.__proto__=C.AT0;var B;this.Ja(A.aaR(A.acf.ACI));this.GP.
H(AhY);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AF$));this.GP.Ar0(
false);this.GP.A_e(true);this.J(this.GP,0);this.GP.AeU([B=this.GP,B.FV]);this.GP.
Gr([this,this.D_,this.GS]);this.GP.Akx(A.aaL(A.ach.Edit));this.GP.At([B=A._GetAutoObject(
A.Device.Device),B.ASE,B.A0d]);},_Done:function(){this.__proto__=C.Ce;this.GP._Done(
);C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.GP._ReInit(
);this.Ja(A.aaR(A.acf.ACI));this.GP.T(A.aaR(A.acf.AF$));},_Mark:function(D){var B;
C.Ce._Mark.call(this,D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATY={GI:0,C6:null,AW:null,Kq:null,Fa:null
,GermanStateToString:null,CountryToString:null,Pw:0,K$:0,L$:false,Init:function(
aArg){A.zX([this,this.MI],[this,this.SA,this.Lo],0);A.zX([this,this.MI],[this,this.
Anp,this.Ahq],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.AW.FO(this.LQ);this.
Kq.FO(this.LQ);this.Fa.CT(this.LQ);},DJ:function(G){var F;if(!this.N)return;switch(
this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=
this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[
1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[
0])).CV(this.CountryToString.BS(this.K$));(F=this.N,F[1].call(F[0])).Cl=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0]
)).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(
F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.EV
)+Ax$)+this.GermanStateToString.Lu(A._GetAutoObject(A.Device.Converter).ACT(this.
Pw)));(F=this.N,F[1].call(F[0])).Cl=null;}break;default:{(F=this.N,F[1].call(F[0
])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}}
,Ew:function(EN){var Tl=this.A8;if(EN<0)EN=0;else if(EN>this.RH)EN=this.RH;switch(
EN){case 0:{this.Bb(null);if(!this.GI&&!this.Pw)this.Lo(0);}break;case 1:this.Bb(
this.Fa);break;case 2:this.Bb(this.Kq);break;case 3:if(((Tl===2)&&!this.Pw)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Tl>0))this.AW.SN(2);else this.AW.SN(
7);}break;default:throw new Error(Atd+EN.toFixed());}this.A8=EN;C.Ek.Ew.call(this
,EN);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.L$=true;this.SC(A._GetAutoObject(
A.Device.Helper).Sh(E,0,10));this.Ahq(A._GetAutoObject(A.Device.Helper).Sh(E,10,
2)|0);this.Lo(A._GetAutoObject(A.Device.Converter).S0(E));this.L$=false;if(!!this.
AM){this.Kq.Kt(2);this.AW.Kt(10);}else{this.Kq.Kt(0);this.AW.Kt(0);}this.Am();},
FV:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).AC4());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ew(2);}else this.Ew(this.RH);},AjL:function(){return this.GI;
},AjN:function(){return 9999999999;},Lo:function(E){if(this.K$===E)return;this.K$=
E;if(this.L$===false)A.pe([this,this.Vm],this);A.abo([this,this.SA,this.Lo],0);}
,SC:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false)A.pe([this,this.
Vm],this);A.abo([this,this.AbW,this.SC],0);},Vm:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqx(this.K$),3,10)+A.abl(this.Pw,2,10))+
A.abm(this.GI,10,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahq:function(
E){if(this.Pw===E)return;this.Pw=E;if(this.L$===false)A.pe([this,this.Vm],this);
A.abo([this,this.Anp,this.Ahq],0);},SA:function(){return this.K$;},AbW:function(
){return this.GI;},Anp:function(){return this.Pw;},_Init:function(aArg){C.Ek._Init.
call(this,aArg);C.C6._Init.call(this.C6={I:this},0);C.AQ2._Init.call(this.AW={I:
this},0);C.AvN._Init.call(this.Kq={I:this},0);C.AsH._Init.call(this.Fa={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATY;var B;this.RH=3;this.AW.H(BsZ);this.Kq.H(Bs0);this.Kq.EU(16);this.Fa.H(Bas
);this.J(this.AW,0);this.J(this.Kq,0);this.J(this.Fa,0);this.C6.AE1([this,this.SA
,this.Lo]);this.AW.At([this,this.AbW,this.SC]);this.Kq.At([this,this.Anp,this.Ahq
]);this.Fa.CK(this.C6);this.Fa.At([B=this.C6,B.B_,B.B$]);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ek;this.C6._Done();this.AW._Done();this.Kq._Done();this.
Fa._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.Ek._Done.
call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C6._ReInit();this.AW.
_ReInit();this.Kq._ReInit();this.Fa._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AQ2={NK:null,NJ:null,ES:null,FZ:null,Ep:null,Dy:null,CU:null,Cu:null,FO:function(
E){if(this.M5===E)return;C.Lf.FO.call(this,E);this.Cu.CT(E);this.CU.CT(E);this.Dy.
CT(E);this.Ep.CT(E);this.FZ.CT(E);this.ES.CT(E);this.NJ.CT(E);this.NK.CT(E);},Ym:
function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.F0;break;case 1:B5=this.
Cu;break;case 2:B5=this.CU;break;case 3:B5=this.Dy;break;case 4:B5=this.Ep;break;
case 5:B5=this.FZ;break;case 6:B5=this.ES;break;case 7:B5=this.NJ;break;case 8:B5=
this.NK;break;case 9:B5=this.G1;break;default:A.ab5("%s",Ah2);}return B5;},_Init:
function(aArg){C.Lf._Init.call(this,aArg);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Ep={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.AQ2;this.H(Bs1);this.G1.H(AIC);this.NK.H(AyB);this.NJ.H(AZP
);this.ES.H(AZQ);this.FZ.H(AZR);this.Ep.H(AZS);this.Dy.H(AZT);this.CU.H(AZU);this.
Cu.H(Bac);this.F0.H(AZV);this.EM.H(AZV);this.J(this.NK,-2);this.J(this.NJ,-2);this.
J(this.ES,-2);this.J(this.FZ,-2);this.J(this.Ep,-2);this.J(this.Dy,-2);this.J(this.
CU,-2);this.J(this.Cu,-2);this.NK.Di=[this,this.GW];this.NJ.Di=[this,this.GW];this.
ES.Di=[this,this.GW];this.FZ.Di=[this,this.GW];this.Ep.Di=[this,this.GW];this.Dy.
Di=[this,this.GW];this.CU.Di=[this,this.GW];this.Cu.Di=[this,this.GW];},_Done:function(
){this.__proto__=C.Lf;this.NK._Done();this.NJ._Done();this.ES._Done();this.FZ._Done(
);this.Ep._Done();this.Dy._Done();this.CU._Done();this.Cu._Done();C.Lf._Done.call(
this);},_ReInit:function(){C.Lf._ReInit.call(this);this.NK._ReInit();this.NJ._ReInit(
);this.ES._ReInit();this.FZ._ReInit();this.Ep._ReInit();this.Dy._ReInit();this.CU.
_ReInit();this.Cu._ReInit();},_Mark:function(D){var B;C.Lf._Mark.call(this,D);if((
B=this.NK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cu
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATZ={
GI:0,C6:null,AW:null,Fa:null,CountryToString:null,K$:0,L$:false,Init:function(aArg
){A.zX([this,this.MI],[this,this.SA,this.Lo],0);},Ai:function(Ae){C.Ek.Ai.call(this
,Ae);this.AW.FO(this.LQ);this.Fa.CT(this.LQ);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CV(this.CountryToString.BS(this.K$));(F=this.N,F[1].call(F[0])).Cl=null;}
break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(
F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=
null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EN){var Tl=this.A8;if(EN<0)EN=0;
else if(EN>this.RH)EN=this.RH;switch(EN){case 0:{this.Bb(null);if(!this.GI)this.
Lo(0);}break;case 1:this.Bb(this.Fa);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Tl>0))this.AW.SN(2);else this.AW.SN(7);}break;default:throw new Error(Atd+EN.toFixed(
));}this.A8=EN;C.Ek.Ew.call(this,EN);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.L$=true;this.SC(A._GetAutoObject(A.Device.Helper).Sh(E,0,12));this.Lo(
A._GetAutoObject(A.Device.Converter).S0(E));this.L$=false;if(!!this.AM)this.AW.Kt(
12);else this.AW.Kt(0);this.Am();},FV:function(G){var F;if(!this.AM){var BO=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).AC4());if(this.AM!==BO){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(this.RH);},AjL:function(
){return this.GI;},AjN:function(){return 999999999999;},Lo:function(E){if(this.K$===
E)return;this.K$=E;if(this.L$===false)A.pe([this,this.Vm],this);A.abo([this,this.
SA,this.Lo],0);},SC:function(E){if(this.GI===E)return;this.GI=E;if(this.L$===false
)A.pe([this,this.Vm],this);A.abo([this,this.AbW,this.SC],0);},Vm:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqx(this.K$),3,10)+A.abm(
this.GI,12,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SA:function(){return this.
K$;},AbW:function(){return this.GI;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.ADL._Init.call(this.AW={I:this},0);C.AsH.
_Init.call(this.Fa={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATZ;var B;this.RH=2;this.AW.H(Bs2);this.Fa.H(Bas);this.
J(this.AW,0);this.J(this.Fa,0);this.C6.AE1([this,this.SA,this.Lo]);this.AW.At([this
,this.AbW,this.SC]);this.Fa.CK(this.C6);this.Fa.At([B=this.C6,B.B_,B.B$]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ek;this.C6._Done();this.AW._Done();this.
Fa._Done();this.CountryToString._Done();C.Ek._Done.call(this);},_ReInit:function(
){C.Ek._ReInit.call(this);this.C6._ReInit();this.AW._ReInit();this.Fa._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,X6:null,X7:null,X5:null,X3:null,X4:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkN();A._GetAutoObject(A.Device.Helper).Asp();},Ig:function(G){
var Cy=(C.Fn.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.X6)A._GetAutoObject(
C.A9).Cd(28);else if(Cy===this.X7)A._GetAutoObject(C.A9).Cd(26);else if(Cy===this.
X5)A._GetAutoObject(C.A9).Cd(54);else if(Cy===this.X3)A._GetAutoObject(C.A9).Cd(
27);else if(Cy===this.X4)A._GetAutoObject(C.A9).Cd(78);},A3o:function(G){A._GetAutoObject(
C.A9).FA();},Fk:function(G){var B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.
Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fn._Init.call(this.X6={I:this
},0);C.Fn._Init.call(this.X7={I:this},0);C.Fn._Init.call(this.X5={I:this},0);C.Fn.
_Init.call(this.X3={I:this},0);C.Fn._Init.call(this.X4={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Ej.Ar(false
);this.Dr(C.AqY);this.DY.AZ(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);
this.Y.JS(9);this.Ay.H(It);this.X6.H(P9);this.X6.Aj(true);this.X6.T(A.aaR(A.acf.
A7J));this.X7.H(AZ1);this.X7.Aj(true);this.X7.T(A.aaR(A.acf.NewAnimals));this.X5.
H(N$);this.X5.Aj(true);this.X5.T(A.aaR(A.acf.Calving));this.X3.H(P_);this.X3.Aj(
true);this.X3.T(A.aaR(A.acf.AB1));this.X4.H(MH);this.X4.Aj(true);this.X4.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
X6,0);this.J(this.X7,0);this.J(this.X5,0);this.J(this.X3,0);this.J(this.X4,0);this.
N.CE=[this,this.A3o];this.N.C1(A.aaL(A.ach.E2));this.Y.El=[this,this.Fk];this.X6.
AR=[this,this.Ig];this.X6.DB(A.aaL(A.ach.ADG));this.X7.AR=[this,this.Ig];this.X7.
DB(A.aaL(A.ach.AvH));this.X5.AR=[this,this.Ig];this.X5.DB(A.aaL(A.ach.AP1));this.
X3.AR=[this,this.Ig];this.X3.DB(A.aaL(A.ach.APX));this.X4.AR=[this,this.Ig];this.
X4.DB(A.aaL(A.ach.APQ));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.X6._Done();this.X7._Done();this.X5._Done();this.X3.
_Done();this.X4._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.X6._ReInit(
);this.X7._ReInit();this.X5._ReInit();this.X3._ReInit();this.X4._ReInit();this.X6.
T(A.aaR(A.acf.A7J));this.X7.T(A.aaR(A.acf.NewAnimals));this.X5.T(A.aaR(A.acf.Calving
));this.X3.T(A.aaR(A.acf.AB1));this.X4.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARX={K4:null,EaseOfDelivery:null,BirthType:null,AcI:null
,Lj:null,Cn:null,G6:null,Lh:null,AzM:true,Init:function(aArg){this.Bb(this.C$);A.
pe([this,this.GH],this);},Ev:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E6();A._GetAutoObject(C.A9).FA();if(!!this.K4)this.K4.Ev(this);},Agd:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EB((F=this.BZ.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwL(true);if(!!this.K4)this.K4.Agd(this
);if(A._GetAutoObject(A.Device.Device).An.Lg())A._GetAutoObject(A.Device.Helper).
AKf(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApF]);else{this.AiZ();A.
pe([this,this.Ap3],this);}},Auf:function(){this.N.CV(A.jV);this.N.C2(A.aaL(A.ach.
ADK));this.N.Cl=[this,this.AyS];},CC:function(G){var B;C.HY.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lg()){A._GetAutoObject(A.Device.Device).A3(41
,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),0,null);this.Ev(this);
}else if(this.AzM){this.AzM=false;A.pe([this,this.A3D],this);}else if(!this.K4){
this.K4=A._NewObject(C.ARY,0);this.K4.A9K([this,this.AAY]);A._GetAutoObject(A.Device.
Helper).W.Gq();A._GetAutoObject(A.Device.Helper).Aqg(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Ng(this.AsT.Aei(6));this.K4.LN(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ev(this);}},AiZ:function(
){A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);var
L7=A._GetAutoObject(A.Device.Device).An.LS(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SO(L7);if(A._GetAutoObject(A.Device.Helper
).Am3()){if(A._GetAutoObject(A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.
Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Ch(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A6Q(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap3:function(G){var B;if(!!this.K4)this.K4.Ap3(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).Am3())this.C9.Z(true);else this.C9.Z(false);},
ApF:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",As8,As.Id);}},AAY:function(G){this.
LN(this);this.AeW(A._GetAutoObject(A.Device.Helper).Abo(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JH(this.C$);},ApG:function(G){var F;C.HY.ApG.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnV));},A3D:function(G){A._GetAutoObject(
C.A9).Cd(79);},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcI._Init.call(this.AcI={I:this},0);C.Q$._Init.call(this.Lj={I:this
},0);C.SP._Init.call(this.Cn={I:this},0);C.BW._Init.call(this.G6={I:this},0);C.BW.
_Init.call(this.Lh={I:this},0);this.__proto__=C.ARX;var B;this.Dr(C.APm);this.Lj.
H(AhY);this.Lj.Aj(true);this.Lj.T(A.aaR(A.acf.ACp));this.CG.H(AcP);this.Cn.H(AcP
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.AFB(true);this.G6.H(AcP);
this.G6.Aj(true);this.G6.T(A.aaR(A.acf.Aro));this.Lh.H(AcP);this.Lh.Aj(true);this.
Lh.T(A.aaR(A.acf.AgG));this.J(this.Lj,-5);this.J(this.Cn,-3);this.J(this.G6,-1);
this.J(this.Lh,-1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.AcI.LY(A._GetAutoObject(A.
Device.Helper).W);this.Lj.Gr([this,this.D_,this.GS]);this.Lj.At([B=A._GetAutoObject(
A.Device.Helper).W,B.ASA,B.AnC]);this.Cn.Gr([this,this.D_,this.GS]);this.Cn.LX([
B=this.Cn,B.FV]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab4([B=A._GetAutoObject(A.
Device.Helper).W,B.Av$,B.Q4]);this.Gm.At([B=this.AcI,B.B_,B.B$]);this.Gm.CK(this.
AcI);this.G6.At([B=this.BirthType,B.B_,B.B$]);this.G6.CK(this.BirthType);this.Lh.
At([B=this.EaseOfDelivery,B.B_,B.B$]);this.Lh.CK(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcI._Done();this.Lj._Done();this.Cn._Done();this.G6._Done();this.Lh.
_Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcI._ReInit();this.Lj._ReInit(
);this.Cn._ReInit();this.G6._ReInit();this.Lh._ReInit();this.Lj.T(A.aaR(A.acf.ACp
));this.Cn.T(A.aaR(A.acf.Aed));this.G6.T(A.aaR(A.acf.Aro));this.Lh.T(A.aaR(A.acf.
AgG));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.K4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcI)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G6)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMv={Init:function(aArg){var B;A.zX([this,this.ALk],[B=A._GetAutoObject(A.Device.
Device),B.AEB,B.AIQ],0);A.pe([this,this.ALk],this);},AKM:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbS){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACW();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOG();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mr();break;default:throw new Error(AZ4+A.
_GetAutoObject(A.Device.Device).AbS.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},ALk:function(G){switch(A._GetAutoObject(A.Device.Device).AbS){case
0:this.Dj(A.aaR(A.acf.AR3));break;case 1:this.Dj(A.aaR(A.acf.Bkb));break;case 2:
this.Dj(A.aaR(A.acf.Av3));break;default:A.ab5("%s",AZ4+A._GetAutoObject(A.Device.
Device).AbS.toFixed());}},_Init:function(aArg){C.Amu._Init.call(this,aArg);this.
__proto__=C.AMv;this.Bm3(C.APC);this.Ej.Ab0(A._NewObject(C.APr,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ARY={AAj:0,Adg:null
,AuV:null,Bd6:0,A3R:0,A2K:0,Init:function(aArg){this.Bd6=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adg=A._GetAutoObject(A.Device.Device).An.Filter;this.AAj=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2K=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LN:function(G){A._GetAutoObject(A.Device.Helper).W.AnC(this.AAj);A._GetAutoObject(
A.Device.Helper).W.Ae4(true);switch(this.A2K){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EB(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EB(2);break;default:
A.ab5("%s%e",AZM,this.A2K);}},Ev:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adg);if(!!this.A3R)this.BgF();},Agd:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},BgF:function(){var AtU=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LS(0,this.Bd6);AtU.E4(Ad,A._GetAutoObject(
A.Device.Device).An);AtU.Awx(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);AtU.
ArT(false);AtU.AwM(AtU.LactationNumber+1);AtU.Ch(A._GetAutoObject(A.Device.Device
).An);},Ap3:function(G){this.A3R++;var Bym=A._GetAutoObject(A.Device.Converter).
Bhn(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3R<Bym)&&(A._GetAutoObject(
A.Device.Helper).Aj4(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A3(59,true,A.jV,0,[this,this.Vh]);else this.Bc4(
this);},Vh:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&(As.PopupState===8))this.Bc4(this);else if(!!As&&(As.PopupState===7))this.
AAY(this);},AAY:function(G){var B;var Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfS=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var O_=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJU=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuV)(B=this.AuV
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EB(Ib);A._GetAutoObject(
A.Device.Helper).W.Akt(AfS);A._GetAutoObject(A.Device.Helper).W.NZ(Bv);A._GetAutoObject(
A.Device.Helper).W.Q4(O_);A._GetAutoObject(A.Device.Helper).W.Akv(AJU);},Bc4:function(
G){this.BgF();A._GetAutoObject(C.A9).FA();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adg);},A9K:function(E){if(A.aa0(this.AuV,E))return;this.AuV=E;},_Init:function(
aArg){this.__proto__=C.ARY;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adg)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AML={Init:function(aArg){
var B;A.zX([this,this.Ber],[B=A._GetAutoObject(A.Device.Device),B.ASk,B.AZ5],0);
this.Ber(this);},Ch:function(){A.ab5("%s",Bs3);},E4:function(AcU){C.Vv.E4.call(this
,AcU);var O;for(O=16;O>0;O--)this.Ia.Set(O,this.Ia.Get(O-1));this.Ia.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Bs4);},ADP:function(ED){switch(ED){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Ber:
function(G){this.E4(A._GetAutoObject(A.Device.Device).Auy);A.we(this,0);},_Init:
function(aArg){C.Vv._Init.call(this,aArg);this.__proto__=C.AML;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuN={_Init:function(){C.
AML._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JK={C5:null,V:null,A7C:true,T:function(E){C.I3.T.call(this,E);this.
V.R(E);},De:function(E){C.I3.De.call(this,E);this.V.L(E);},Bm8:function(E){if(this.
A7C===E)return;this.A7C=E;this.C5.Z(E);},_Init:function(aArg){C.I3._Init.call(this
,aArg);A.acg.C5._Init.call(this.C5={I:this},0);C.CH._Init.call(this.V={I:this},0
);this.__proto__=C.JK;this.C5.DC(Bs5);this.C5.DM(Bs6);this.C5.L(A.jb.Bc);this.V.
AZ(0x3F);this.V.H(Bs7);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C5,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Ko));this.V.A2(A.aaL(A.fl.Il));this.V.Cv(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.I3;this.C5._Done();this.V._Done();C.
I3._Done.call(this);},_ReInit:function(){C.I3._ReInit.call(this);this.C5._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Ko));this.V.A2(A.aaL(A.fl.Il));this.V.Cv(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.I3._Mark.call(this,D);if((B=this.C5).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APr={AgU:null,Dd:null,Abm:null,Fm:null,Fb:
null,Init:function(aArg){var B;A.zX([this,this.A4q],[B=A._GetAutoObject(A.Device.
Device),B.AEB,B.AIQ],0);A.pe([this,this.A4q],this);},De:function(E){C.Yp.De.call(
this,E);this.Dd.L(E);},AEH:function(G){A.pe([this,this.A4q],this);},AA0:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E$();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DL(1,4))?B:null);if(!!FilterCriterion)Filter.Nj(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C3:function(G){var B;var F;C.Yp.C3.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Dd.Ax(A.aaL(A.ach.AjT));return;}var By3=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(38,0)
)?B:null);var BbE=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DL(14,0))?B:null);if(!!By3)this.Dd.Ax(A.aaL(A.ach.AC_));else if(
!!BbE&&(BbE.A5===1))this.Dd.Ax(A.aaL(A.ach.AP3));else this.Dd.Ax(A.aaL(A.ach.AjT
));},A4q:function(G){var F;var Filter=null;var AOu;switch(A._GetAutoObject(A.Device.
Device).AbS){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACW();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOG();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mr();break;default:throw new Error(AZ4+A._GetAutoObject(A.Device.
Device).AbS.toFixed());}var Ai3=this.Akn();if(Ai3>0){AOu=A._NewObject(A.Device.Int32FilterCriterion
,0);AOu.Initialize(1,4,Ai3,false);Filter.CW(AOu);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeX(false);},On:function(G){if(!this.Akn())this.AW.AeX(true
);this.Bb(this.AW);this.Am();},MV:function(G){this.AW.AeX(false);this.Bb(this.AgU
);this.Am();},_Init:function(aArg){C.Yp._Init.call(this,aArg);C.Aq$._Init.call(this.
AgU={I:this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);C.Abm._Init.call(this.Abm={
I:this},0);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={
I:this},0);this.__proto__=C.APr;var B;this.H(Bs8);this.AW.H(Bs9);this.T3.H(Bs_);
this.Gv.Z(false);this.AgU.H(Bs$);this.Dd.H(Bta);this.Abm.At(A._GetAutoObject(A.Device.
Device).AbS);this.Fm.Filter=6;this.Fb.Filter=7;this.JY(this.A$,-1);this.J(this.AgU
,-1);this.J(this.Dd,-1);this.AgU.CK(this.Abm);this.AgU.At([B=this.Abm,B.B_,B.B$]
);this.Dd.Ax(A.aaL(A.ach.AjT));this.Fm.BL=[this,this.On];this.Fb.BL=[this,this.MV
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yp;this.AgU._Done();this.Dd.
_Done();this.Abm._Done();this.Fm._Done();this.Fb._Done();C.Yp._Done.call(this);}
,_ReInit:function(){C.Yp._ReInit.call(this);this.AgU._ReInit();this.Dd._ReInit();
this.Abm._ReInit();this.Fm._ReInit();this.Fb._ReInit();},_Mark:function(D){var B;
C.Yp._Mark.call(this,D);if((B=this.AgU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abm)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abm={AeR:null
,Init:function(aArg){var B;A.zX([this,this.Bd8],[B=A._GetAutoObject(A.Device.Device
),B.AEB,B.AIQ],0);A.pe([this,this.Bd8],this);},Du:function(){return 3;},At:function(
E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.Device).AwT(E);},ACV:function(
aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;return this.AeR.AsI(aIndex
);},ACX:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return this.
AeR.AsJ(aIndex);},Bd8:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbS;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeR._Init.call(this.AeR={I:this},0);this.__proto__=C.Abm;this.Cb.Set(0,
0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeR._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeR._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APC={Er:null,IO:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.Er={I:this},0);A.acg.Text._Init.call(this.IO={I:this},0);this.__proto__=
C.APC;this.H(O4);this.Background.H(O4);this.Er.H(AIo);this.Er.R(A.aaR(A.acf.A6V)
);this.Er.A6(0x12);this.Er.L(A.jb.Text);this.IO.AZ(0x3F);this.IO.H(AIp);this.IO.
Hm(5);this.IO.A6(0x14);this.IO.R(A.aaR(A.acf.AGN));this.IO.L(A.jb.Text);this.J(this.
Er,0);this.J(this.IO,0);this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.Il));this.
Er.Cv(A.aaL(A.fl.Bh));this.IO.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EA;this.Er._Done();this.IO._Done();C.EA._Done.call(this);},_ReInit:function(){
C.EA._ReInit.call(this);this.Er._ReInit();this.IO._ReInit();this.Er.R(A.aaR(A.acf.
A6V));this.IO.R(A.aaR(A.acf.AGN));this.Er.S(A.aaL(A.fl.Af));this.Er.A2(A.aaL(A.fl.
Il));this.Er.Cv(A.aaL(A.fl.Bh));this.IO.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EA._Mark.call(this,D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J1:null,Bgc:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.BeS(this);else A._GetAutoObject(A.Device.Device).A3(63,true,A.
jV,0,[this,this.Vh]);},BeS:function(G){A._GetAutoObject(C.A9).FA();},Vh:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63)
)&&(As.PopupState===7))this.BeS(this);},_Init:function(aArg){C.Mg._Init.call(this
,aArg);A.acg.Text._Init.call(this.J1={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dr(C.APq);this.Jg.H(Btb);this.Jg.AkD(2);this.Acw.Z(false);this.ARD=12;this.
Number.H(Btc);this.Number.R(A.aaR(A.acf.A$d));this.A4W=false;this.J1.H(Btd);this.
J1.Hm(5);this.J1.KR(true);this.J1.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABH));this.J1.L(A.jb.Text);this.JY(this.Jg,-1);this.JY(this.IT,-1);this.
JY(this.Acw,-1);this.J(this.J1,0);this.J1.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mg;this.J1._Done();C.Mg._Done.call(this);},_ReInit:function(){C.Mg._ReInit.
call(this);this.J1._ReInit();this.Number.R(A.aaR(A.acf.A$d));this.J1.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABH));this.J1.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mg._Mark.call(this,D);if((B=this.J1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APq={_Init:function(aArg){C.AqX.
_Init.call(this,aArg);this.__proto__=C.APq;this.DS.EB(1);},_className:"Application::HeaderScannedCowId"
};C.Jg={AbI:null,AbH:null,AbG:null,QG:null,CountryToString:null,AsL:0,CP:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QG.R(this.CountryToString.
Lu(A._GetAutoObject(A.Device.Converter).A7h(A._GetAutoObject(A.Device.Device).Language
))+Bte);},AkD:function(E){if(this.AsL===E)return;this.AsL=E;var bitmap=null;var A1O=
Btf;var A1N=null;var A1P=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aq9);break;case
1:{bitmap=A.aaL(A.ach.AQF);A1O=Btg;A1N=A.aaL(A.fl.Ak);A1P=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQG);A1O=Bth;A1N=A.aaL(A.fl.Bh);A1P=true;}break;default:throw new Error(
Bti+E.toFixed());}this.AbG.Ax(bitmap);this.AbH.Ax(bitmap);this.AbI.Ax(bitmap);this.
QG.H(A.abJ(this.QG.M,A1O));this.QG.S(A1N);this.QG.Z(A1P);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbI={I:this},0);A.acg.Ap._Init.call(this.AbH={I:this},0);A.acg.Ap._Init.
call(this.AbG={I:this},0);A.acg.Text._Init.call(this.QG={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jg;this.H(AIF);this.
AbI.AZ(0x3);this.AbI.H(AIF);this.AbI.L(A.jb.H8);this.AbI.Cw(2);this.AbH.AZ(0x3);
this.AbH.H(AIF);this.AbH.L(A.jb.Ad_);this.AbH.Cw(1);this.AbG.AZ(0x3);this.AbG.H(
AIF);this.AbG.L(A.jb.Text);this.AbG.Cw(0);this.QG.AZ(0x14);this.QG.H(Btj);this.QG.
L(0xFF020202);this.QG.Z(false);this.J(this.AbI,0);this.J(this.AbH,0);this.J(this.
AbG,0);this.J(this.QG,0);this.AbI.Ax(A.aaL(A.ach.Aq9));this.AbH.Ax(A.aaL(A.ach.Aq9
));this.AbG.Ax(A.aaL(A.ach.Aq9));this.QG.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbI._Done();this.AbH._Done();this.AbG._Done();this.QG._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbI._ReInit();this.AbH._ReInit();this.AbG._ReInit(
);this.QG._ReInit();this.CountryToString._ReInit();this.QG.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsL={Transponder:0,BF9:1,BF_:2};C.APm={Ap:null,De:function(E){C.BQ.De.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APm;this.Ap.H(AZN);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APd));},_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.
BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ih:0,AaC:4,Al3:function(G){C.Q_.Al3.call(this,G);if(A._GetAutoObject(A.Device.Helper
).BdE()){this.Ih=A._GetAutoObject(A.Device.Helper).Ux.Id;var Aiy=A._GetAutoObject(
A.Device.Helper).A7f(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(Aiy){A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rh(this.Ih),0,[
this,this.Vh]);return;}Aiy=A._GetAutoObject(A.Device.Helper).BjD(this.Ih,A._GetAutoObject(
A.Device.Helper).W);if(Aiy&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ih)){A._GetAutoObject(A.Device.Device).A3(25,true,A._GetAutoObject(A.Device.
Converter).Rh(this.Ih),0,[this,this.Vh]);return;}this.AaC=A._GetAutoObject(A.Device.
Helper).ARd(this.Ih);switch(this.AaC){case 0:A._GetAutoObject(A.Device.Device).A3(
45,true,this.Ih.toFixed().length.toFixed(),0,[this,this.Vh]);break;case 1:case 2:{
var BM=A._GetAutoObject(A.Device.Converter).AxQ(this.Ih);A._GetAutoObject(A.Device.
Device).A3(46,true,BM.toFixed(),0,[this,this.Vh]);}break;case 3:this.Bf6();break;
default:throw new Error(AIc+this.AaC.toFixed());}}},Ev:function(G){A._GetAutoObject(
C.A9).FA();},Vh:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.AaC===2)this.Bf6();else A._GetAutoObject(
A.Device.Device).AhI();break;case 5:this.Ev(this);break;default:;}},Bf6:function(
){A._GetAutoObject(A.Device.Helper).W.Ne(this.Ih);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PT(this.Ih);A._GetAutoObject(
A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).A3(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ev(this);},_Init:function(aArg){C.Q_._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dr(C.IK);this.Number.R(A.aaR(A.acf.A_9
));this.Jg.H(Btk);this.IT.H(Btl);this.AkD(1);this.N.CE=[this,this.Ev];this.N.C1(
A.aaL(A.ach.E2));},_ReInit:function(){C.Q_._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_9));},_className:"Application::SetSaveNaisIdScreen"};C.AN1={LN:function(
G){C.AqG.LN.call(this,G);A.pe([this,this.BBQ],this);},BBQ:function(G){this.JH(this.
Ef);},_Init:function(aArg){C.AqG._Init.call(this,aArg);this.__proto__=C.AN1;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UN={Animal:null,WhereAboutsToString:
null,Gk:function(aIndex){return this.WhereAboutsToString.BS(this.C7(aIndex));},At:
function(E){C.Cm.At.call(this,E);if(!!this.Animal)this.Animal.Ng(E);},A4y:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B_,this.B$],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4y],[B=this.Animal,B.Awl,B.Ng],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4y],[B=this.Animal,B.Awl,B.Ng],0);A.pe([this,this.A4y],this);}
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
null,Init:function(aArg){var B;A.zX([this,this.Bcn],[B=A._GetAutoObject(A.Device.
Device),B.ASl,B.AZ6],0);A.pe([this,this.Bcn],this);},Du:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gk:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BS(aIndex);},DZ:function(A_){return A_;},H3:function(){return 1;},At:function(E){
C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Awo(E);},Bcn:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Agw;A.abo([this,this.B_,this.B$],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdT;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGB={FM:null
,Ez:null,EartagNrAssignmentMode:null,Fm:null,Fb:null,HG:null,AW:null,Km:null,M9:
null,A8:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hk){this.AW.FO(A.jb.CJ);this.HG.CT(A.jb.CJ);this.Background.L(A.
jb.CS);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CS);this.HG.CT(A.jb.CS);this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hk){this.AW.FO(A.jb.CJ);this.HG.CT(
A.jb.CJ);}else{this.AW.FO(A.jb.CS);this.HG.CT(A.jb.CS);}this.Bb(null);}this.M9.L(
this.V.AQ);},I0:function(G){C.Eg.I0.call(this,G);if(!this.A8)this.FV(this);else this.
Hd(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.
N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(
F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=
null;}break;default:this.FM.AkO((F=this.N,F[1].call(F[0])));}},FV:function(G){this.
Ew(1);},Hd:function(G){this.Ew(0);},Ew:function(EN){var F;if(!this.A8&&!!this.N)
this.FM.Ajy((F=this.N,F[1].call(F[0])));this.A8=EN;if(this.A8<0)this.A8=0;else if(
this.A8>1)this.A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SN(2);else this.AW.SN(7);}break;default:throw new Error(
Atd+this.A8.toFixed());}this.DJ(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},On:function(G){this.AA9(2);},MV:function(G){this.AA9(7);},AA9:
function(Gz){var B;var Azv=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azv){
var AAl=(A.Core.P.isPrototypeOf(B=this.QH(Azv,Gz,0x15))?B:null);if(!!AAl){this.Bb(
AAl);return true;}}return false;},AfZ:function(G){var F;if(!this.Ez||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M9.Ax(
A._GetAutoObject(A.Device.Converter).AmS(2));break;case 1:this.M9.Ax(A._GetAutoObject(
A.Device.Converter).AmS((F=this.Ez,F[1].call(F[0]))));break;default:throw new Error(
Bat+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A39],this);},A39:function(G){var B;var F;if(!this.Ez||!this.EartagNrAssignmentMode
){this.Km.AeZ(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Anq,B.Aoz]);this.Km.
AeZ([B=A._GetAutoObject(A.Device.Device),B.AEx,B.AIN]);}break;case 1:switch((F=this.
Ez,F[1].call(F[0]))){case 1:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Awc
,B.AyJ]);this.Km.AeZ([B=A._GetAutoObject(A.Device.Device),B.ASq,B.AZ7]);}break;case
0:{this.AW.At([B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyK]);this.Km.AeZ([B=
A._GetAutoObject(A.Device.Device),B.ASr,B.AZ8]);}break;case 2:{this.AW.At([B=A._GetAutoObject(
A.Device.Device),B.Anq,B.Aoz]);this.Km.AeZ([B=A._GetAutoObject(A.Device.Device),
B.AEx,B.AIN]);}break;default:throw new Error(Btm+(F=this.Ez,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Bat+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Ul:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([
this,this.AfZ],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.AfZ],this.Ez,0);if(!!
E)A.pe([this,this.AfZ],this);},Aku:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfZ],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfZ],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfZ],this);},Ug:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.
BK._Init.call(this.Fb={I:this},0);C.Aq$._Init.call(this.HG={I:this},0);C.AvO._Init.
call(this.AW={I:this},0);C.AuZ._Init.call(this.Km={I:this},0);A.acg.Ap._Init.call(
this.M9={I:this},0);this.__proto__=C.AGB;var B;this.H(UW);this.V.Ar(false);this.
V.R(As_);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fb.Filter=7;this.HG.H(Btn);this.
AW.H(Bto);this.M9.H(Btp);this.J(this.HG,0);this.J(this.AW,0);this.J(this.M9,0);this.
FM=A._NewObject(C.Aer,0);this.Fm.BL=[this,this.On];this.Fb.BL=[this,this.MV];this.
HG.CK(this.Km);this.HG.At([B=this.Km,B.B_,B.B$]);this.AW.At([this,this.Ug,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fb.
_Done();this.HG._Done();this.AW._Done();this.Km._Done();this.M9._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fm._ReInit();this.Fb.
_ReInit();this.HG._ReInit();this.AW._ReInit();this.Km._ReInit();this.M9._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Km)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M9)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANQ={Wm:
null,Y_:null,AbP:null,T_:null,Init:function(aArg){this.Bb(this.Wm);},AEp:function(
G){var Bd4=(C.Ang.isPrototypeOf(G)?G:null);if(!!Bd4)A._GetAutoObject(A.Device.Device
).A3(Bd4.AdB,true,A.jV,0,null);},DE:function(G){if((this.Cq.CO===7)&&(this.AV===
this.T_))A._GetAutoObject(A.Device.Device).A3(10,true,A.jV,0,null);else if((this.
Cq.CO===6)&&(this.AV===this.T_))A._GetAutoObject(C.A9).Cd(91);C.Ei.DE.call(this,
G);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Ang._Init.call(this.Wm={I:
this},0);C.Ang._Init.call(this.Y_={I:this},0);C.Ang._Init.call(this.AbP={I:this}
,0);C.Ang._Init.call(this.T_={I:this},0);this.__proto__=C.ANQ;this.Dr(C.AO3);this.
Wm.H(IV);this.Wm.Aj(true);this.Wm.T(A.aaR(A.acf.AhH));this.Wm.Bi(false);this.Wm.
AdB=79;this.Y_.H(Qa);this.Y_.Aj(true);this.Y_.T(A.aaR(A.acf.A$p));this.Y_.Bi(true
);this.Y_.AdB=77;this.AbP.H(Aab);this.AbP.Aj(true);this.AbP.T(A.acf.Bjc);this.AbP.
Bi(false);this.AbP.AdB=78;this.T_.H(Ald);this.T_.Aj(true);this.T_.T(A.aaR(A.acf.
About));this.T_.Bi(true);this.T_.AdB=3;this.J(this.Wm,-1);this.J(this.Y_,-1);this.
J(this.AbP,-1);this.J(this.T_,-1);this.Wm.AR=[this,this.AEp];this.Y_.AR=[this,this.
AEp];this.AbP.AR=[this,this.AEp];this.T_.AR=[this,this.AEp];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Wm._Done();this.Y_._Done();this.AbP._Done();
this.T_._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this
);this.Wm._ReInit();this.Y_._ReInit();this.AbP._ReInit();this.T_._ReInit();this.
Wm.T(A.aaR(A.acf.AhH));this.Y_.T(A.aaR(A.acf.A$p));this.T_.T(A.aaR(A.acf.About));
},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Wm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.T_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceInfoScreen"};C.AO3={_Init:function(aArg){C.KO._Init.call(this
,aArg);this.__proto__=C.AO3;this.Text.R(A.acf.Info);},_className:"Application::HeaderDeviceInfoMenu"
};C.ANO={FactoryResetScope:null,Ub:null,Wk:null,Ud:null,Init:function(aArg){this.
Bb(this.Ub);A.pe([this,this.MI],this);},Bkl:function(G){switch(this.FactoryResetScope.
C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).A3(33,true
,A.jV,0,[this,this.BfU]);break;case 0:A._GetAutoObject(A.Device.Device).A3(7,true
,A.jV,0,[this,this.BfU]);break;default:A.ab5("%s%i",Btq,this.FactoryResetScope.Q
);}},BfU:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bos();A._GetAutoObject(A.Device.Device).A3(8,true,A.jV,0,null);A._GetAutoObject(
C.A9).Cd(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bor();A._GetAutoObject(
A.Device.Device).ArQ(0);A._GetAutoObject(A.Device.Device).ArR(0);A._GetAutoObject(
A.Device.Device).ArS(0);A._GetAutoObject(A.Device.Device).ArW(0);A._GetAutoObject(
A.Device.Device).ArX(0);A._GetAutoObject(A.Device.Device).ArY(0);A._GetAutoObject(
A.Device.Device).Uj(5);A._GetAutoObject(A.Device.Device).AwA(0);A._GetAutoObject(
A.Device.Device).AwB(0);A._GetAutoObject(A.Device.Device).AwC(0);A._GetAutoObject(
A.Device.Device).AwU(1);A._GetAutoObject(A.Device.Device).AwV(1);A._GetAutoObject(
A.Device.Device).AwW(1);A._GetAutoObject(A.Device.Device).A3(34,true,A.jV,0,null
);}break;default:A.ab5("%s%e",AId,As.Id);}},_Init:function(aArg){C.Ei._Init.call(
this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={I:this},0);C.Nc.
_Init.call(this.Ub={I:this},0);C.Nc._Init.call(this.Wk={I:this},0);C.BW._Init.call(
this.Ud={I:this},0);this.__proto__=C.ANO;var B;this.Dr(C.AO1);this.Ub.H(IV);this.
Ub.Aj(true);this.Ub.T(A.aaR(A.acf.ACr));this.Ub.Bi(false);this.Ub.Nf(93);this.Wk.
H(Qa);this.Wk.Aj(true);this.Wk.T(A.aaR(A.acf.AdS));this.Wk.Bi(true);this.Wk.Nf(92
);this.Ud.H(Bau);this.Ud.Aj(true);this.Ud.BlI(true);this.Ud.T(A.aaR(A.acf.A6i));
this.Ud.Bi(false);this.J(this.Ub,-1);this.J(this.Wk,-1);this.J(this.Ud,-1);this.
Ub.AR=[B=this.Ub,B.Ni];this.Wk.AR=[B=this.Wk,B.Ni];this.Ud.AR=[this,this.Bkl];this.
Ud.At([B=this.FactoryResetScope,B.B_,B.B$]);this.Ud.CK(this.FactoryResetScope);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.FactoryResetScope._Done();
this.Ub._Done();this.Wk._Done();this.Ud._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.FactoryResetScope._ReInit();this.Ub._ReInit(
);this.Wk._ReInit();this.Ud._ReInit();this.Ub.T(A.aaR(A.acf.ACr));this.Wk.T(A.aaR(
A.acf.AdS));this.Ud.T(A.aaR(A.acf.A6i));},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ub
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ud)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AO1={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO1;this.
Text.R(A.aaR(A.acf.ACs));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ACs));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.AqZ={QT:null,Wb:null,_Init:function(aArg){C.TU._Init.call(this,aArg);C.CH._Init.
call(this.QT={I:this},0);C.CH._Init.call(this.Wb={I:this},0);this.__proto__=C.AqZ;
this.QT.H(Btr);this.QT.R(A.aaR(A.acf.A$h));this.QT.A6(0x12);this.QT.L(A.jb.Text);
this.Wb.H(Bao);this.Wb.R(A.aaR(A.acf.An4));this.Wb.L(A.jb.Text);this.J(this.QT,0
);this.J(this.Wb,0);this.QT.S(A.aaL(A.fl.Af));this.QT.A2(A.aaL(A.fl.Ak));this.QT.
Cv(A.aaL(A.fl.Bh));this.Wb.S(A.aaL(A.fl.Af));this.Wb.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TU;this.QT._Done();this.Wb._Done();C.TU._Done.call(this
);},_ReInit:function(){C.TU._ReInit.call(this);this.QT._ReInit();this.Wb._ReInit(
);this.QT.R(A.aaR(A.acf.A$h));this.Wb.R(A.aaR(A.acf.An4));this.QT.S(A.aaL(A.fl.Af
));this.QT.A2(A.aaL(A.fl.Ak));this.QT.Cv(A.aaL(A.fl.Bh));this.Wb.S(A.aaL(A.fl.Af
));this.Wb.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TU._Mark.call(this,D);
if((B=this.QT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wb)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.APx={QU:
null,_Init:function(aArg){C.TU._Init.call(this,aArg);C.CH._Init.call(this.QU={I:
this},0);this.__proto__=C.APx;this.QU.H(Bts);this.QU.R(A.aaR(A.acf.Uf));this.QU.
A6(0x12);this.QU.L(A.jb.Text);this.J(this.QU,0);this.QU.S(A.aaL(A.fl.Af));this.QU.
A2(A.aaL(A.fl.Ak));this.QU.Cv(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=
C.TU;this.QU._Done();C.TU._Done.call(this);},_ReInit:function(){C.TU._ReInit.call(
this);this.QU._ReInit();this.QU.R(A.aaR(A.acf.Uf));this.QU.S(A.aaL(A.fl.Af));this.
QU.A2(A.aaL(A.fl.Ak));this.QU.Cv(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TU.
_Mark.call(this,D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Aqs={IL:null,Abz:null,Ea:null,Bl:function(aSize){C.M2.Bl.call(this,aSize);this.
IL.H([this.Gy.M[2],0,this.Gy.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([
this.IL.M[2]-1,0,this.IL.M[2]+1,aSize[1]]);this.Abz.H([this.IL.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M2.Ai.call(this,Ae);this.Abz.L(this.Gy.AQ);this.IL.L(this.
Gy.AQ);},Cf:function(Ad){C.M2.Cf.call(this,Ad);if(!this.AX)return;this.Hr=Ad;if(
!!this.AX){var Ib=this.AX.AmT(Ad,14);var AtN=this.AX.AOK(Ad,7);this.IL.Ax(A._GetAutoObject(
A.Device.Converter).AmS(AtN));this.Abz.Ax(A._GetAutoObject(A.Device.Converter).A41(
Ib));this.Am();}},_Init:function(aArg){C.M2._Init.call(this,aArg);A.acg.Ap._Init.
call(this.IL={I:this},0);A.acg.Ap._Init.call(this.Abz={I:this},0);A.acg.AL._Init.
call(this.Ea={I:this},0);this.__proto__=C.Aqs;this.IL.H(Baq);this.IL.L(A.jb.Text
);this.Abz.H(Btt);this.Abz.L(A.jb.Text);this.Ea.H(Btu);this.Ea.L(A.jb.Bc);this.J(
this.IL,0);this.J(this.Abz,0);this.J(this.Ea,0);this.IL.Ax(A.aaL(A.aci.TK));this.
Abz.Ax(A.aaL(A.aci.TK));},_Done:function(){this.__proto__=C.M2;this.IL._Done();this.
Abz._Done();this.Ea._Done();C.M2._Done.call(this);},_ReInit:function(){C.M2._ReInit.
call(this);this.IL._ReInit();this.Abz._ReInit();this.Ea._ReInit();},_Mark:function(
D){var B;C.M2._Mark.call(this,D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AM6={ZM:null
,Bl:function(aSize){C.M2.Bl.call(this,aSize);this.ZM.H([this.Gy.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M2.Ai.call(this,Ae);this.ZM.L(this.Gy.AQ);},Cf:function(
Ad){C.M2.Cf.call(this,Ad);if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Kd=this.
AX.KN(Ad,26);if(Kd>0)this.ZM.R(A.ab2(Kd.toFixed(),5));else this.ZM.R(Ro);this.Am(
);}},_Init:function(aArg){C.M2._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZM={I:this},0);this.__proto__=C.AM6;this.ZM.H(Btv);this.J(this.ZM,0);this.ZM.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M2;this.ZM._Done();C.M2._Done.
call(this);},_ReInit:function(){C.M2._ReInit.call(this);this.ZM._ReInit();this.ZM.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M2._Mark.call(this,D);if((B=this.ZM
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARQ={Ap:null,Ai:function(Ae){C.AeS.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeS._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ARQ;this.Text.H(Btw);this.Ap.H(AZZ);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Afc));},_Done:function(){this.__proto__=C.AeS;this.Ap._Done(
);C.AeS._Done.call(this);},_ReInit:function(){C.AeS._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeS._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yo={Text:
null,Dd:null,AP:null,Gv:null,D2:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Nn],[B=A._GetAutoObject(A.Device.Device),B.AEt,B.AIK],0);A.zV([this,this.Nn
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nn],this);},De:function(
E){C.BQ.De.call(this,E);this.Dd.L(E);this.Text.L(E);this.Gv.L(E);this.D2.Zo(E);}
,Wy:function(E){C.BQ.Wy.call(this,E);this.D2.CT(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B9().toFixed());},Nn:function(s){this.DX(s);}
,_Init:function(aArg){C.BQ._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gv={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C5._Init.call(this.A$={I:this},0);this.__proto__=C.Yo;this.Text.H(Btx);this.
Text.A6(0x11);this.Dd.H(Ayy);this.AP.DC(Bak);this.AP.DM(Bal);this.AP.L(A.jb.Bc);
this.Gv.H(Bty);this.Gv.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(Btz);this.D2.Zo(A.jb.
Bm);this.D2.CT(A.jb.Rg);this.D2.Hm(2);this.A$.DC(BtA);this.A$.DM(BtB);this.A$.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Dd,0);this.J(this.AP,0);this.J(this.Gv,
0);this.J(this.D2,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Dd.Ax(A.aaL(A.ach.AjT));this.Gv.Ax(A.aaL(A.ach.Gv));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Text.
_Done();this.Dd._Done();this.AP._Done();this.Gv._Done();this.D2._Done();this.A$.
_Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.
Text._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Gv._ReInit();this.D2._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acm={FM:null
,JW:null,JV:null,AkK:null,AkL:null,Q6:null,QF:null,Aby:null,V1:null,PJ:null,PK:null
,Sw:null,Gw:null,Gx:null,Jw:null,AlL:0,AlQ:0,D7:0,DW:0,A8:0,Bl:function(aSize){var
B;this.Dz.H([this.Hw.M[2]-10,this.Hw.M[1],this.H4.M[0]+10,this.Hw.M[3]]);this.Dz.
AFg((B=this.Dz.M)[2]-B[0]);this.Dz.HH(this.Dz.Gs,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fv=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A8===1)||(this.A8===2)){var A1a=this.A1_(this.A8);if(!!
A1a){this.Aby.Z(true);this.Aby.H(A1a.M);this.Aby.L(this.V.AQ);this.V1.Z(true);this.
V1.H(A1a.M);}else{this.Aby.Z(false);this.V1.Z(false);}this.Hw.Z(false);this.H4.Z(
false);}else{this.Aby.Z(false);this.V1.Z(false);this.Hw.Z(Fv||GE);this.H4.Z(Fv||
GE);}},Qr:function(G){if(!!this.Q){if(this.FI===1)A.pe([this,this.U$],this);else
if(this.FI===4)A.pe([this,this.A0t],this);else if(this.FI===5)A.pe([this,this.A0r
],this);}C.BW.Qr.call(this,G);},Kc:function(G){switch(this.A8){case 0:C.BW.Kc.call(
this,G);break;case 2:break;default:this.Adv(this);}},J9:function(G){switch(this.
A8){case 0:C.BW.J9.call(this,G);break;default:this.Aiq(this);}},A1F:function(G){
var F;if(this.A8===1){var BO=this.D7;this.D7=this.D7-10;if(this.D7<this.AlQ)this.
D7=this.AlQ;if(this.D7<A._GetAutoObject(A.Device.Device).AcD)this.D7=A._GetAutoObject(
A.Device.Device).AcD;if(this.DW!==BO){if(!!this.JW)(F=this.JW,F[2].call(F[0],this.
D7));A.abo(this.JW,0);}}if(this.A8===2){var BO=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JV)(F=this.JV,F[2].call(F[
0],this.DW));A.abo(this.JV,0);}}this.DJ(this);this.Am();},A0r:function(s){this.A1F(
s);},Al1:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A0r],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A2f:function(G){var F;if(this.A8===1){var
BO=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO
){if(!!this.JW)(F=this.JW,F[2].call(F[0],this.D7));A.abo(this.JW,0);}}if(this.A8===
2){var BO=this.DW;this.DW=this.DW+10;if(this.DW>this.AlL)this.DW=this.AlL;if(this.
DW!==BO){if(!!this.JV)(F=this.JV,F[2].call(F[0],this.DW));A.abo(this.JV,0);}}this.
DJ(this);this.Am();},A0t:function(s){this.A2f(s);},Al2:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A0t],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},U$:function(G){this.Ew(this.A8+1);},Adv:function(G){this.FI=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.U$],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GH:function(G){},AfD:function(s){this.GH(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hx(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.Aey));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U$];}break;case 2:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hx(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.Hd];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmZ
));(F=this.N,F[1].call(F[0])).FE(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
Aiq];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FM.AkO((F=this.N,F[1].call(F[
0])));}},A_a:function(E){if(A.aaZ(this.JW,E))return;if(!!this.JW)A.z$([this,this.
A3F],this.JW,0);this.JW=E;if(!!this.JW)A.zX([this,this.A3F],this.JW,0);A.pe([this
,this.A3F],this);},A3F:function(G){var F;this.D7=(F=this.JW,F[1].call(F[0]));this.
Am();},A9$:function(E){if(A.aaZ(this.JV,E))return;if(!!this.JV)A.z$([this,this.A3E
],this.JV,0);this.JV=E;if(!!this.JV)A.zX([this,this.A3E],this.JV,0);A.pe([this,this.
A3E],this);},A3E:function(G){var F;this.DW=(F=this.JV,F[1].call(F[0]));this.Am();
},FV:function(G){this.Ew(1);},Hd:function(G){this.Ew(0);},Ew:function(EN){var F;
if(!this.A8)this.FM.Ajy((F=this.N,F[1].call(F[0])));this.A8=EN;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DJ(this);this.Gx.Bw=!!this.A8;this.Gw.Bw=!!this.A8;this.
Am();},Aiq:function(G){if(this.A8>1)this.Ew(this.A8-1);},A3S:function(G){},AyT:function(
s){this.A3S(s);},A3r:function(G){},Bbz:function(s){this.A3r(s);},A1_:function(Atm
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AL._Init.call(
this.AkK={I:this},0);A.acg.AL._Init.call(this.AkL={I:this},0);A.acg.AL._Init.call(
this.Q6={I:this},0);A.acg.Ap._Init.call(this.QF={I:this},0);A.acg.AL._Init.call(
this.Aby={I:this},0);A.acg.BU._Init.call(this.V1={I:this},0);A.acg.Text._Init.call(
this.PJ={I:this},0);A.acg.Text._Init.call(this.PK={I:this},0);A.acg.Text._Init.call(
this.Sw={I:this},0);A.Core.BK._Init.call(this.Gw={I:this},0);A.Core.BK._Init.call(
this.Gx={I:this},0);A.Core.BK._Init.call(this.Jw={I:this},0);this.__proto__=C.Acm;
this.H(AfB);this.T(A.aaR(A.acf.Arn));this.Background.H(AfB);this.V.H(BD);this.V.
R(A.aaR(A.acf.AGV));this.V.A6(0x12);this.AkK.H(BtC);this.AkK.L(A.jb.Gi);this.AkL.
H(BtD);this.AkL.L(A.jb.H8);this.Q6.H(BtE);this.Q6.L(A.jb.E1);this.QF.H(BtF);this.
Aby.H(BtG);this.V1.H(BtH);this.V1.Nh(3);this.V1.L(A.jb.AV);this.V1.Z(false);this.
PJ.H(BtI);this.PJ.Hm(8);this.PJ.I$(true);this.PJ.A6(0x11);this.PJ.L(0xFF000000);
this.PK.H(BtJ);this.PK.Hm(8);this.PK.I$(true);this.PK.A6(0x11);this.PK.L(0xFF000000
);this.Sw.H(BtK);this.Sw.I$(false);this.Sw.A6(0x12);this.Sw.L(0xFF000000);this.Gw.
Filter=5;this.Gw.Bw=false;this.Gx.Filter=4;this.Gx.Bw=false;this.Jw.Filter=1;this.
JY(this.V,-1);this.JY(this.Dz,-2);this.J(this.AkK,-1);this.J(this.AkL,-1);this.J(
this.Q6,-1);this.J(this.QF,-1);this.J(this.Aby,-1);this.J(this.V1,-1);this.J(this.
PJ,-1);this.J(this.PK,0);this.J(this.Sw,0);this.QF.Ax(A.aaL(A.ach.ADw));this.PJ.
S(A.aaL(A.fl.Af));this.PK.S(A.aaL(A.fl.Af));this.Sw.S(A.aaL(A.fl.Ak));this.Gw.BL=[
this,this.Al1];this.Gw.D1=[this,this.A0r];this.Gx.BL=[this,this.Al2];this.Gx.D1=[
this,this.A0t];this.Jw.BL=[this,this.Adv];this.FM=A._NewObject(C.Aer,0);},_Done:
function(){this.__proto__=C.BW;this.AkK._Done();this.AkL._Done();this.Q6._Done();
this.QF._Done();this.Aby._Done();this.V1._Done();this.PJ._Done();this.PK._Done();
this.Sw._Done();this.Gw._Done();this.Gx._Done();this.Jw._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkK._ReInit();this.AkL._ReInit(
);this.Q6._ReInit();this.QF._ReInit();this.Aby._ReInit();this.V1._ReInit();this.
PJ._ReInit();this.PK._ReInit();this.Sw._ReInit();this.Gw._ReInit();this.Gx._ReInit(
);this.Jw._ReInit();this.T(A.aaR(A.acf.Arn));this.V.R(A.aaR(A.acf.AGV));this.PJ.
S(A.aaL(A.fl.Af));this.PK.S(A.aaL(A.fl.Af));this.Sw.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JV)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jw)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FK={XR:null,Aco:
null,An8:0,An9:0,Du:function(){if(!this.XR)return 0;return this.XR.ME;},C7:function(
aIndex){if(!this.XR||(aIndex>=this.XR.ME))return-1;return this.XR.Get(aIndex);},
Gk:function(aIndex){return this.A6A().BS(this.C7(aIndex));},DZ:function(A_){if(!
this.XR)return-1;return this.XR.Avn(A_);},H3:function(){if(!this.XR)return-1;return this.
XR.H3();},AnG:function(E){if(this.An8===E)return;this.An8=E;A.pe([this,this.AVx]
,this);},A0m:function(Aq){this.AnG(Aq);},AnH:function(E){if(this.An9===E)return;
this.An9=E;A.pe([this,this.AVy],this);},A0n:function(Aq){this.AnH(Aq);},AVy:function(
G){A.abo([this,this.ASQ,this.A0n],0);},AVx:function(G){A.abo([this,this.ASP,this.
A0m],0);},A6A:function(){return this.Aco;},ASP:function(){return this.An8;},ASQ:
function(){return this.An9;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Aco={I:this},0);this.__proto__=C.FK;},_Done:function(
){this.__proto__=C.AC;this.Aco._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Aco._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aco)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMz={Init:
function(aArg){A.zV([this,this.Be6],A._GetAutoObject(A.Device.Helper).UE,0);A.zV([
this,this.Be4],A._GetAutoObject(A.Device.Helper).UD,0);this.Be6(this);this.Be4(this
);},At:function(E){C.FK.At.call(this,E);this.AnH(A._GetAutoObject(A.Device.Helper
).UE.Get(this.DZ(E)));this.AnG(A._GetAutoObject(A.Device.Helper).UD.Get(this.DZ(
E)));},AnG:function(E){if(this.An8===E)return;C.FK.AnG.call(this,E);A._GetAutoObject(
A.Device.Helper).UD.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UD.
Ch();},AnH:function(E){if(this.An9===E)return;C.FK.AnH.call(this,E);A._GetAutoObject(
A.Device.Helper).UE.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UE.
Ch();},Be6:function(G){this.An9=A._GetAutoObject(A.Device.Helper).UE.Get(this.DZ(
this.Q));A.pe([this,this.AVy],this);},Be4:function(G){this.An8=A._GetAutoObject(
A.Device.Helper).UD.Get(this.DZ(this.Q));A.pe([this,this.AVx],this);},_Init:function(
aArg){C.FK._Init.call(this,aArg);this.__proto__=C.AMz;this.XR=A._GetAutoObject(A.
Device.Helper).AdY;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMA={AgB:null,ABV:0,ABU:0,Init:function(aArg){A.zV([this,this.Bfh],A._GetAutoObject(
A.Device.Helper).Afw,0);A.zV([this,this.Bff],A._GetAutoObject(A.Device.Helper).Afv
,0);A.zV([this,this.Bfd],A._GetAutoObject(A.Device.Helper).Afu,0);A.zV([this,this.
Bfj],A._GetAutoObject(A.Device.Helper).Afx,0);this.Bfh(this);this.Bff(this);this.
Bfd(this);this.Bfj(this);},At:function(E){C.FK.At.call(this,E);this.AnH(A._GetAutoObject(
A.Device.Helper).Afw.Get(this.DZ(E)));this.AnG(A._GetAutoObject(A.Device.Helper).
Afv.Get(this.DZ(E)));this.ASU(A._GetAutoObject(A.Device.Helper).Afu.Get(this.DZ(
E)));this.ASW(A._GetAutoObject(A.Device.Helper).Afx.Get(this.DZ(E)));},AnG:function(
E){if(this.An8===E)return;C.FK.AnG.call(this,E);A._GetAutoObject(A.Device.Helper
).Afv.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afv.Ch();},AnH:function(
E){if(this.An9===E)return;C.FK.AnH.call(this,E);A._GetAutoObject(A.Device.Helper
).Afw.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afw.Ch();},A6A:function(
){return this.AgB;},Bfh:function(G){this.An9=A._GetAutoObject(A.Device.Helper).Afw.
Get(this.DZ(this.Q));A.pe([this,this.AVy],this);},Bff:function(G){this.An8=A._GetAutoObject(
A.Device.Helper).Afv.Get(this.DZ(this.Q));A.pe([this,this.AVx],this);},ASW:function(
E){if(this.ABV===E)return;this.ABV=E;A._GetAutoObject(A.Device.Helper).Afx.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afx.Ch();A.pe([this,this.A$O],this
);},ASU:function(E){if(this.ABU===E)return;this.ABU=E;A._GetAutoObject(A.Device.
Helper).Afu.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afu.Ch();A.
pe([this,this.A$N],this);},A$N:function(G){A.abo([this,this.A8l,this.ASU],0);},A$O:
function(G){A.abo([this,this.A8n,this.ASW],0);},Bfd:function(G){this.ABU=A._GetAutoObject(
A.Device.Helper).Afu.Get(this.DZ(this.Q));A.pe([this,this.A$N],this);},Bfj:function(
G){this.ABV=A._GetAutoObject(A.Device.Helper).Afx.Get(this.DZ(this.Q));A.pe([this
,this.A$O],this);},A8n:function(){return this.ABV;},A8l:function(){return this.ABU;
},_Init:function(aArg){C.FK._Init.call(this,aArg);A.Device.AgB._Init.call(this.AgB={
I:this},0);this.__proto__=C.AMA;this.XR=A._GetAutoObject(A.Device.Helper).AgC;this.
Init(aArg);},_Done:function(){this.__proto__=C.FK;this.AgB._Done();C.FK._Done.call(
this);},_ReInit:function(){C.FK._ReInit.call(this);this.AgB._ReInit();},_Mark:function(
D){var B;C.FK._Mark.call(this,D);if((B=this.AgB)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMg={RM:null,Init:function(
aArg){var B;A.zX([this,this.AiN],[B=this.AnimalType,B.B_,B.B$],0);A.pe([this,this.
AiN],this);this.Bb(this.RM);},Bk:function(E){C.I4.Bk.call(this,E);this.RM.Bx(this.
Jr.AM);},AiN:function(G){A._GetAutoObject(A.Device.Device).AwD(this.AnimalType.Q
);},_Init:function(aArg){C.I4._Init.call(this,aArg);C.TE._Init.call(this.RM={I:this
},0);this.__proto__=C.AMg;var B;this.Jr.Ar(false);this.Jr.Aj(false);this.Jr.Z(false
);this.RM.H(AIG);this.RM.Aj(true);this.RM.Nd(14);this.RM.Aht(0);this.RM.ON(0);this.
J(this.RM,-4);this.RM.AR=[this,this.AAt];this.RM.At([B=this.AnimalType,B.B_,B.B$
]);this.RM.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I4;this.RM._Done();C.I4._Done.call(this);},_ReInit:function(){C.I4._ReInit.call(
this);this.RM._ReInit();},_Mark:function(D){var B;C.I4._Mark.call(this,D);if((B=
this.RM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TE={Filter:null,Eq:0,TableId:0,Operator:1,CP:function(){var F;this.Tp((F=this.
Filter,F[1].call(F[0])).DL(this.Eq,this.Operator));},Bl:function(aSize){var B;C.
BW.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hw.H(AhU
);this.H4.H([aSize[0]-40,40,aSize[0],80]);this.Dz.H([this.Hw.M[2]-5,this.Hw.M[1]
,this.H4.M[0]+5,this.Hw.M[3]]);this.Dz.AFg((B=this.Dz.M)[2]-B[0]);this.Dz.HH(this.
Dz.Gs,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mb],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mb
],E,0);A.pe([this,this.Mb],this);},Mb:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tp((F=this.Filter,F[1].call(F[0])).DL(this.Eq,this.
Operator));else this.Tp(null);},Aht:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mb],this);},Nd:function(E){if(this.Eq===E)return;this.
Eq=E;A.pe([this,this.Mb],this);},Tp:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).AmU(this.TableId,this.Eq));this.Am();},ON:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mb],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TE;this.H(KY);this.V.A6(0x11);this.V.Cv(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Cv(A.aaL(A.fl.Bh));this.
CP();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ARZ={Ge:null,MQ:null,DY:null,Y:null,Ef:null,Cn:null,CG:null,C$:null,Gm:null,
Ee:null,C9:null,BZ:null,Ay:null,Breed:null,Jh:null,AnimalType:null,Gender:null,Pm:
null,KX:null,Jf:null,YD:null,Amh:null,KI:0,M3:0,A30:false,Init:function(aArg){var
B;A.zX([this,this.BAH],[B=A._GetAutoObject(A.Device.Device),B.AEy,B.AIO],0);A.zV([
this,this.AtZ],this.MQ,0);A.zX([this,this.AtZ],[B=A._GetAutoObject(A.Device.Device
),B.Awk,B.AyO],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEy
,B.AIO],0);A.zV([this,this.GH],this.MQ,0);A.zX([this,this.AiN],this.BZ.Q,0);A.pe([
this,this.AiN],this);A.pe([this,this.BeH],this);A.pe([this,this.AtZ],this);A.pe([
this,this.GH],this);A.pe([this,this.A3s],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALm],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArJ(A.jb.E1);else
this.Ef.ArJ(A.jb.Gi);if(A._GetAutoObject(A.Device.Device).AeM){if(!!(F=this.Cn.Dl
,F[1].call(F[0])))this.Cn.ArJ(A.jb.E1);else this.Cn.ArJ(A.jb.Gi);}else this.Cn.ArJ(
A.jb.Rg);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},LN:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lg())A._GetAutoObject(A.Device.Device
).A3(41,true,A._GetAutoObject(A.Device.Device).An.HI().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gq();A._GetAutoObject(A.Device.Helper).Aqg(A._GetAutoObject(A.
Device.Helper).W);this.Apz();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFn(0);},E5:function(G){C.AB.E5.call(this,G);this.Jf.Ar(false);
A._GetAutoObject(A.Device.Device).Uq(false);},Ev:function(G){A._GetAutoObject(A.
Device.Helper).W.E6();A._GetAutoObject(C.A9).FA();},Fk:function(G){var B;this.Ay.
Mx((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.
Y.Br[1]);},AtZ:function(G){var F,Ct;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALm(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aej(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter
).Rh((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A3h]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A3g],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeM)this.JH(this.Cn);}var BdX=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeM||!!(Ct=this.Cn.Dl,Ct[1].call(Ct[0])));if(this.MQ.AOF()>0){if((
this.AV===this.Cn)&&BdX)this.Bb(this.Y.TN(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeM&&(this.AV===this.Cn))&&!!(F=this.Cn.Dl,F[1].call(F[0])))this.
JH(this.Ef);if(BdX)this.BcK(this);},Adt:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},AiZ:function(){var F;this.Ge.Ch(A._GetAutoObject(A.Device.Device).An);
if(this.MQ.NV(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lg())A._GetAutoObject(
A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HI().toFixed(),
0,null);else{var L7=A._GetAutoObject(A.Device.Device).An.LS(0,this.Ge.Id);A._GetAutoObject(
A.Device.Device).SO(L7);var B1=A._NewObject(A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(
this.Ge.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(this.Ge.DateOfBirth);B1.
Ch(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MQ.NV(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lg())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HI().toFixed(),0,null);else{var L7=A._GetAutoObject(A.Device.
Device).An.LS(0,this.Ge.Id);A._GetAutoObject(A.Device.Device).SO(L7);var B1=A._NewObject(
A.Device.Rating,0);B1.Gq();B1.OnSetAnimalId(this.Ge.Id);B1.OnSetBodyWeight(this.
M3);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Ch(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WA(65280);this.Jf.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFn(F.AvV+1));this.A30=true;A.pe([this,
this.ALm],this);this.Apz();},GH:function(G){this.Cn.ATu(A._GetAutoObject(A.Device.
Device).AeM);A._GetAutoObject(A.Device.Helper).JZ(this.BZ,this.MQ.NV(14));A._GetAutoObject(
A.Device.Helper).JZ(this.C9,this.MQ.NV(23));A._GetAutoObject(A.Device.Helper).JZ(
this.CG,this.MQ.NV(32));A._GetAutoObject(A.Device.Helper).JZ(this.Ee,this.MQ.NV(
18));A._GetAutoObject(A.Device.Helper).JZ(this.C$,this.MQ.NV(7));A._GetAutoObject(
A.Device.Helper).JZ(this.Gm,this.MQ.NV(34));this.YD.Z(!this.MQ.AOF());var O;var Aa=
null;var Apf=this.AV;for(O=0;O<this.MQ.AfM.NQ();O++){Aa=this.BzA(this.MQ.AfM.OD(
O));if(!!Aa)this.ZB(Aa);}this.JH(Apf);A._GetAutoObject(A.Device.Helper).ANr(this.
Y);A.pe([this,this.A3s],this);this.Am();},AeW:function(E){if(this.KI===E)return;
this.KI=E;A.abo([this,this.Av8,this.AeW],0);},Aho:function(E){if(this.M3===E)return;
this.M3=E;A.abo([this,this.Ano,this.Aho],0);},BcK:function(G){this.Ge.Gq();A._GetAutoObject(
A.Device.Helper).Aqg(this.Ge);this.Ge.Q4(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Ge.Ne(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Ge.SG(A._GetAutoObject(
A.Device.Helper).AMh(0,this.Ge));this.Ge.Ae4(true);if(this.MQ.NV(14))this.Ge.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MQ.NV(32))this.Ge.NZ(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MQ.NV(7))this.Ge.JT(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MQ.NV(34))this.Ge.Ng(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alq=A._GetAutoObject(A.Device.Helper).A1t(this.Ge,0,A._GetAutoObject(
A.Device.Device).An);if(!Alq)this.AiZ();else A._GetAutoObject(A.Device.Helper).AKf(
this.Ge,Alq,0,0,[this,this.ApF]);},Apz:function(){A._GetAutoObject(A.Device.Helper
).W.Ne(0);if(A._GetAutoObject(A.Device.Device).AeM)A._GetAutoObject(A.Device.Helper
).W.Q4(0);this.AeW(0);this.Aho(0);this.JH(this.Ef);this.Am();},ApF:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.Apz();break;case 43:this.JH(this.Ef);break;case 41:break;
default:A.ab5("%s%e",As8,As.Id);}},JH:function(Ag){this.Bb(Ag);this.Y.HH(Ag,true
,null,null);this.Y.Vw(null,null);},BeH:function(G){this.Ee.Ahr(A._GetAutoObject(
A.Device.Helper).W.AhS(1));this.AtZ(this);},AiN:function(G){this.C9.Ahr(A._GetAutoObject(
A.Device.Helper).Abo(this.AnimalType.Q));},A3s:function(G){var B;var BBO=this.Ay.
Background.Fp();var width=(BBO?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xq=this.Y.TN(null,0x401);while(!!Xq&&(((B=Xq)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OV.isPrototypeOf(Xq)?Xq:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xq=this.Y.TN(Xq,0x1);}},BzA:function(Aaf){var Aa=null;switch(Aaf){case 14:Aa=
this.BZ;break;case 32:Aa=this.CG;break;case 23:Aa=this.C9;break;case 7:Aa=this.C$;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gm;break;default:A.ab5("%s%e",BtL
,Aaf);}return Aa;},BAH:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeM
)A._GetAutoObject(A.Device.Helper).W.Q4(0);else if(!(F=this.Cn.Dl,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q4(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmG(A._GetAutoObject(A.Device.Device).AdQ));this.
AtZ(this);},ALm:function(G){var B;var AKi=A.jV;var Aza=A.jb.CJ;var Bc1=A.jb.AV;this.
Amh.AxG(this);if(this.A30){this.A30=false;AKi=A._GetAutoObject(A.Device.Helper).
Nl(A.aaR(A.acf.Bpp),P$,A._GetAutoObject(A.Device.Converter).Rh(this.Ge.NaisId));
A.pe([B=this.Amh,B.StartTimer],this);Aza=A.jb.E1;Bc1=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKi=A.aaR(A.acf.BoE);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKi=A.aaR(A.
acf.BoD);this.YD.T(AKi);this.YD.BlT(Aza);this.YD.BlU(Bc1);},A3h:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajz();else if(As.Id===105){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajz();else if(As.PopupState===7){A._GetAutoObject(C.A9).Cd(76);
A._GetAutoObject(A.Device.Device).Ajz();}}}else A._GetAutoObject(A.Device.Device
).Ajz();},A3g:function(G){A._GetAutoObject(A.Device.Device).AuO();},DJ:function(
G){var B;if(!this.MQ.AOF()){this.N.Ld.Dk(255);if(this.AV===this.Ef){this.N.C2(A.
aaL(A.ach.Edit));this.N.Cl=[B=this.Ef,B.FV];}else if(this.AV===this.Cn){this.N.C2(
A.aaL(A.ach.Edit));this.N.Cl=[B=this.Cn,B.FV];}else{this.N.C2(null);this.N.Cl=null;
}}else{this.N.C2(A.aaL(A.ach.Am0));if((this.Ef.Aqt===A.jb.Gi)||(this.Cn.Aqt===A.
jb.Gi)){this.N.Ld.Dk(100);this.N.Cl=null;}else{this.N.Ld.Dk(255);this.N.Cl=[this
,this.BcK];}}},Av8:function(){return this.KI;},Ano:function(){return this.M3;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUE._Init.call(this.Ef={I:this},0);C.
AUA._Init.call(this.Cn={I:this},0);C.Axv._Init.call(this.CG={I:this},0);C.BW._Init.
call(this.C$={I:this},0);C.Asy._Init.call(this.Gm={I:this},0);C.AkS._Init.call(this.
Ee={I:this},0);C.AkS._Init.call(this.C9={I:this},0);C.BW._Init.call(this.BZ={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UO._Init.call(this.Jh={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M1._Init.call(this.
Pm={I:this},0);A.Device.KX._Init.call(this.KX={I:this},0);A.Device.TF._Init.call(
this.Jf={I:this},0);C.AU_._Init.call(this.YD={I:this},0);A.Core.Timer._Init.call(
this.Amh={I:this},0);this.__proto__=C.ARZ;var B;this.Background.L(A.jb.CS);this.
N.Z(true);this.Ej.Ar(false);this.Dr(C.APl);this.DY.AZ(0x3F);this.DY.H(Ff);this.DY.
L(A.jb.CJ);this.Y.H(Ff);this.Y.JS(9);this.Ef.H(AIG);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACC));this.Ef.ATu(true);this.Ef.AFG(false);this.Cn.H(Bau);this.Cn.Aj(true
);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.ATu(true);this.Cn.AFB(true);this.CG.H(As7);
this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.C$.H(As7);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afm));this.Gm.H(Bav);this.Gm.Aj(true);this.Gm.T(A.aaR(A.acf.Jh)
);this.Ee.H(BtM);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M3));this.Ee.Ga(1000);this.
Ee.EU(999000);this.Ee.Ahr(A._GetAutoObject(A.Device.Helper).Abo(this.AnimalType.
Q));this.C9.H(Bav);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI));this.C9.Ga(1000);
this.C9.EU(99000);this.C9.Ahr(A._GetAutoObject(A.Device.Helper).Abo(this.AnimalType.
Q));this.BZ.H(As6);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afr));this.Ay.H(It);this.
Jf.B2=false;this.Jf.Cx=true;this.Jf.HM(1);this.Jf.Fq(1000);this.Jf.Um(0);this.YD.
H(Aac);this.YD.Aj(true);this.YD.ArJ(A.jb.Text);this.Amh.PR(3000);this.J(this.DY,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CG,0);this.J(
this.C$,0);this.J(this.Gm,0);this.J(this.Ee,0);this.J(this.C9,0);this.J(this.BZ,
0);this.J(this.Ay,0);this.J(this.YD,0);this.N.CE=[this,this.Ev];this.N.Cg=[this,
this.Adt];this.N.C1(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AeA));this.Y.El=[this
,this.Fk];this.Ef.Gr([this,this.D_,this.GS]);this.Ef.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Anr,B.Ne]);this.Ef.AFb([this,this.AtZ]);this.Ef.ATh([this,this.A3g]);
this.Ef.ATi([this,this.A3h]);this.Cn.Gr([this,this.D_,this.GS]);this.Cn.Ab4([B=A.
_GetAutoObject(A.Device.Helper).W,B.Av$,B.Q4]);this.Cn.OF=[this,this.BeH];this.Cn.
ATh([this,this.A3g]);this.Cn.ATi([this,this.A3h]);this.CG.Gr([this,this.D_,this.
GS]);this.CG.LX([B=this.CG,B.FV]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.
Breed,B.B_,B.B$]);this.CG.CK(this.Breed);this.CG.Anv(this.Pm);this.C$.At([B=this.
Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.Gm.Gr([this,this.D_,this.GS]);this.
Gm.LX([B=this.Gm,B.FV]);this.Gm.L0(A.aaL(A.ach.Edit));this.Gm.At([B=this.Jh,B.B_
,B.B$]);this.Gm.CK(this.Jh);this.Gm.Anv(this.KX);this.Ee.At([this,this.Ano,this.
Aho]);this.C9.At([this,this.Av8,this.AeW]);this.BZ.At([B=this.AnimalType,B.B_,B.
B$]);this.BZ.CK(this.AnimalType);this.Ay.Bnd([this,this.A3s]);this.Breed.LY(A._GetAutoObject(
A.Device.Helper).W);this.Jh.LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LY(A._GetAutoObject(A.Device.Helper).W);this.Gender.LY(A._GetAutoObject(A.Device.
Helper).W);this.Ge=A._NewObject(A.Device.Animal,0);this.MQ=A._GetAutoObject(C.Amp
);this.Jf.Q=[B=A._GetAutoObject(A.Device.Device),B.ASL,B.A0i];this.Amh.MB=[this,
this.ALm];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();
this.Y._Done();this.Ef._Done();this.Cn._Done();this.CG._Done();this.C$._Done();this.
Gm._Done();this.Ee._Done();this.C9._Done();this.BZ._Done();this.Ay._Done();this.
Breed._Done();this.Jh._Done();this.AnimalType._Done();this.Gender._Done();this.Pm.
_Done();this.KX._Done();this.Jf._Done();this.YD._Done();this.Amh._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cn._ReInit();this.CG._ReInit();this.C$._ReInit(
);this.Gm._ReInit();this.Ee._ReInit();this.C9._ReInit();this.BZ._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jh._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pm._ReInit();this.KX._ReInit();this.Jf._ReInit();this.YD._ReInit(
);this.Amh._ReInit();this.Ef.T(A.aaR(A.acf.ACC));this.Cn.T(A.aaR(A.acf.Aed));this.
CG.T(A.aaR(A.acf.Breed));this.C$.T(A.aaR(A.acf.Afm));this.Gm.T(A.aaR(A.acf.Jh));
this.Ee.T(A.aaR(A.acf.M3));this.C9.T(A.aaR(A.acf.KI));this.BZ.T(A.aaR(A.acf.Afr)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ge)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amh)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Asx={Zf:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zf={
I:this},0);this.__proto__=C.Asx;this.N.CV(A.acf.Bij);this.Number.H(BtN);this.Jg.
H(BtO);this.IT.H(BtP);this.AkD(2);this.BcH=false;this.BdM=true;this.BdN=false;this.
Zf.H(BtQ);this.Zf.KR(true);this.Zf.R(A.aaR(A.acf.A$o));this.Zf.L(A.jb.Text);this.
J(this.Zf,0);this.N.CE=null;this.N.Cl=[this,this.AIU];this.N.C1(null);this.Zf.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Zf.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zf._ReInit();this.Zf.R(A.aaR(A.acf.A$o));this.Zf.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADM={Cu:null,FO:function(E){if(this.M5===E)return;C.HJ.FO.call(this,E);this.
Cu.CT(E);},Ym:function(Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.F0;break;
case 1:B5=this.Cu;break;case 2:B5=this.G1;break;default:A.ab5("%s",Ah2);}return B5;
},_Init:function(aArg){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ADM;this.H(BtR);this.Cu.H(A$9);this.F0.H(BtS);this.J(this.
Cu,-2);this.Cu.Di=[this,this.GW];},_Done:function(){this.__proto__=C.HJ;this.Cu.
_Done();C.HJ._Done.call(this);},_ReInit:function(){C.HJ._ReInit.call(this);this.
Cu._ReInit();},_Mark:function(D){var B;C.HJ._Mark.call(this,D);if((B=this.Cu)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Asy={G4:null
,Bl:function(aSize){C.OS.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G4.M[0
]));},Ai:function(Ae){C.OS.Ai.call(this,Ae);if(this.Hk)this.G4.FO(A.jb.CJ);else this.
G4.FO(A.jb.CS);},A14:function(){this.Bb(this.G4);},_Init:function(aArg){C.OS._Init.
call(this,aArg);C.HJ._Init.call(this.G4={I:this},0);this.__proto__=C.Asy;this.G4.
H(BtT);this.J(this.G4,0);this.G4.At([this,this.ASB,this.AFu]);},_Done:function(){
this.__proto__=C.OS;this.G4._Done();C.OS._Done.call(this);},_ReInit:function(){C.
OS._ReInit.call(this);this.G4._ReInit();},_Mark:function(D){var B;C.OS._Mark.call(
this,D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axv={G4:null,Bl:function(aSize){C.OS.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G4.M[0]));},Ai:function(Ae){C.OS.Ai.call(this,Ae);if(this.Hk)this.G4.FO(
A.jb.CJ);else this.G4.FO(A.jb.CS);},A14:function(){this.Bb(this.G4);},_Init:function(
aArg){C.OS._Init.call(this,aArg);C.ADM._Init.call(this.G4={I:this},0);this.__proto__=
C.Axv;this.G4.AZ(0x18);this.G4.H(BtU);this.J(this.G4,0);this.G4.At([this,this.ASB
,this.AFu]);},_Done:function(){this.__proto__=C.OS;this.G4._Done();C.OS._Done.call(
this);},_ReInit:function(){C.OS._ReInit.call(this);this.G4._ReInit();},_Mark:function(
D){var B;C.OS._Mark.call(this,D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acp={ScreenTypeToString:
null,Du:function(){return 4;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BS(this.C7(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acp;this.Cb.Set(0,3);this.Cb.Set(1,35);this.Cb.Set(2
,34);this.Cb.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVT={ALd:false,A2l:false,Wx:function(G){this.Agt();A._GetAutoObject(C.BR).Tv(
A.aaR(A.acf.Settings),[this,this.A3x]);A._GetAutoObject(C.BR).Fy();this.AL6();A.
_GetAutoObject(C.BR).Mh(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BR).Fy(
);A._GetAutoObject(C.BR).Mh(A.aaR(A.acf.ARq)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},CC:function(G){C.QB.CC.call(this,G);if(
this.A2l){this.A2l=false;A.pe([this,this.A0o],this);}},Agc:function(G){C.QB.Agc.
call(this,G);this.A_J(true);},Abq:function(){return C.AB6;},Abr:function(){return C.
ADn;},Q8:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.
Device.Helper).A6P(Math.max(A._GetAutoObject(A.Device.Device).AvX,A._GetAutoObject(
A.Device.Helper).A6H(A._GetAutoObject(A.Device.Device).An))+1));},HO:function(G){
C.QB.HO.call(this,G);if((((A._GetAutoObject(A.Device.Converter).S0(A._GetAutoObject(
A.Device.Device).PV)===10)&&this.ALd)&&!!this.Bg.AX)&&!this.Bg.AX.B9()){this.N.Cs(
null);this.N.FE(A.aaR(A.acf.No));this.N.Cg=[this,this.BAV];this.N.C2(null);this.
N.CV(A.aaR(A.acf.Yes));this.N.Cl=[this,this.BAW];}else if(this.Akf()===false){this.
N.Cs(A.aaL(A.ach.Avv));this.N.Cg=[this,this.ANW];this.N.FE(A.jV);}this.N.OO(false
);this.N.OP(false);},Agf:function(){A._GetAutoObject(C.A9).Cd(86);},AA1:function(
G){var aFilter=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Ay0=aFilter.
DL(26,4);if(!!Ay0){aFilter.Nj(Ay0);A._GetAutoObject(A.Device.Device).An.Bk(aFilter
);if(!!this.Bg)this.Bg.GT(0);}},A6F:function(){return C.APs;},BfR:function(){var
B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.Filter
){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion
)Filter.Nj(FilterCriterion);A._GetAutoObject(A.Device.Device).An.Bk(Filter);}},A3x:
function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A2l=true;A._GetAutoObject(
C.A9).Cd(89);},ALk:function(G){if(A._GetAutoObject(A.Device.Converter).S0(A._GetAutoObject(
A.Device.Device).PV)===10){if(this.ALd){this.Dj(A.aaR(A.acf.Boi));this.Bg.NL.S(A.
aaL(A.fl.Bh));}else{this.Dj(A.aaR(A.acf.AEj));this.Bg.NL.S(A.aaL(A.fl.Af));}}else
this.Dj(A.aaR(A.acf.AEj));},A_J:function(E){if(this.ALd===E)return;this.ALd=E;A.
pe([this,this.AyP],this);A.pe([this,this.ALk],this);},BAW:function(G){A._GetAutoObject(
C.A9).Ab7(90);},BAV:function(G){this.A_J(false);},_Init:function(aArg){C.QB._Init.
call(this,aArg);this.__proto__=C.AVT;this.Dr(C.ADe);this.Dj(A.aaR(A.acf.AEj));this.
ATd(A._GetAutoObject(C.Ax1));},_ReInit:function(){C.QB._ReInit.call(this);this.Dj(
A.aaR(A.acf.AEj));},_className:"Application::YoungNoTransponderListScreen"};C.AVS={
_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AVS;this.KV.Ar(
false);this.KV.Aj(false);this.KV.Z(false);this.BmP(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQ6={Sq:null,Q:null,A7X:0,M5:0,Init:function(aArg){this.ATg(6);},At:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sq)this.Sq.At(E);},ATg:function(
E){if(this.A7X===E)return;this.A7X=E;var X;switch(E){case 2:X=A._NewObject(C.HJ,
0);break;case 3:X=A._NewObject(C.ADM,0);break;case 4:X=A._NewObject(C.AQ3,0);break;
case 5:X=A._NewObject(C.AQ4,0);break;case 6:X=A._NewObject(C.AvO,0);break;default:{
X=null;A.ab5("%s%i",BtV,E);}}this.BmO(X);},BmO:function(E){if(this.Sq===E)return;
if(!!this.Sq){this.Sq.At(null);this.HN(this.Sq);}this.Sq=E;if(!!this.Sq){this.Sq.
At(this.Q);this.J(this.Sq,0);}},FO:function(E){if(this.M5===E)return;this.M5=E;if(
!!this.Sq)this.Sq.FO(E);},SN:function(Gz){if(!!this.Sq)this.Sq.SN(Gz);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.AQ6;this.H(Ayj);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sq)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQ3={CU:null,Cu:null,FO:function(
E){if(this.M5===E)return;C.HJ.FO.call(this,E);this.Cu.CT(E);this.CU.CT(E);},Ym:function(
Hz){var B5=null;switch(Hz){case-1:case 0:B5=this.F0;break;case 1:B5=this.Cu;break;
case 2:B5=this.CU;break;case 3:B5=this.G1;break;default:A.ab5("%s",Ah2);}return B5;
},_Init:function(aArg){C.HJ._Init.call(this,aArg);C.DF._Init.call(this.CU={I:this
},0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.AQ3;this.H(BtW);this.G1.
H(Atc);this.CU.H(A$_);this.Cu.H(A$$);this.F0.H(Baa);this.J(this.CU,-2);this.J(this.
Cu,-2);this.CU.Di=[this,this.GW];this.Cu.Di=[this,this.GW];},_Done:function(){this.
__proto__=C.HJ;this.CU._Done();this.Cu._Done();C.HJ._Done.call(this);},_ReInit:function(
){C.HJ._ReInit.call(this);this.CU._ReInit();this.Cu._ReInit();},_Mark:function(D
){var B;C.HJ._Mark.call(this,D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACL={S1:null,Ai:function(Ae){C.Abn.Ai.call(this,Ae);this.S1.L(this.V.AQ);},_Init:
function(aArg){C.Abn._Init.call(this,aArg);C.CH._Init.call(this.S1={I:this},0);this.
__proto__=C.ACL;this.V.Z(false);this.AW.H(BtX);this.AW.ATg(4);this.S1.H(BtY);this.
S1.R(A.aaR(A.acf.Kl));this.S1.L(A.jb.Bm);this.J(this.S1,0);this.S1.S(A.aaL(A.fl.
Af));this.S1.A2(A.aaL(A.fl.Ak));this.S1.Cv(null);},_Done:function(){this.__proto__=
C.Abn;this.S1._Done();C.Abn._Done.call(this);},_ReInit:function(){C.Abn._ReInit.
call(this);this.S1._ReInit();this.S1.R(A.aaR(A.acf.Kl));this.S1.S(A.aaL(A.fl.Af)
);this.S1.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abn._Mark.call(this,D);
if((B=this.S1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LW={YV:null,T6:null,AQ:0,A7d:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YV.L(this.AQ);this.T6.L(this.AQ);},A90:function(E){var B;if(this.A7d===
E)return;this.A7d=E;if(E){this.YV.Z(true);this.T6.DC([this.T6.EC[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YV.Z(false);this.T6.DC([this.T6.EC[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C5._Init.call(
this.YV={I:this},0);A.acg.C5._Init.call(this.T6={I:this},0);this.__proto__=C.LW;
this.H(AZ0);this.YV.AZ(0x2D);this.YV.DC(AhX);this.YV.DM(Baw);this.YV.L(A.jb.Text
);this.T6.AZ(0x36);this.T6.DC(Baw);this.T6.DM(BtZ);this.T6.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YV,0);this.J(this.T6,0);},_Done:function(){this.__proto__=
A.Core.P;this.YV._Done();this.T6._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.YV._ReInit();this.T6._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.YV)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUi={Sv:null,PB:null,C$:null,BZ:null,CG:null,GQ:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pm:null,UO:null,KX:null,Init:function(aArg){A.zX([this
,this.AuI],this.BZ.Q,0);A.zX([this,this.AMZ],this.CG.Q,0);A.zX([this,this.BqM],this.
Sv.Q,0);A.zX([this,this.Avl],this.C$.Q,0);A.zX([this,this.AVP],this.GQ.Q,0);},AuI:
function(G){var F;A._GetAutoObject(A.Device.Device).EB((F=this.BZ.Q,F[1].call(F[
0])));},BqM:function(G){var F;A._GetAutoObject(A.Device.Device).Axc((F=this.Sv.Q
,F[1].call(F[0])));},Avl:function(G){var F;A._GetAutoObject(A.Device.Device).JT((
F=this.C$.Q,F[1].call(F[0])));},AVP:function(G){var F;A._GetAutoObject(A.Device.
Device).Ng((F=this.GQ.Q,F[1].call(F[0])));},AMZ:function(G){var F;A._GetAutoObject(
A.Device.Device).NZ((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce._Init.
call(this,aArg);C.BW._Init.call(this.Sv={I:this},0);C.Ir._Init.call(this.PB={I:this
},0);C.BW._Init.call(this.C$={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.Axv.
_Init.call(this.CG={I:this},0);C.Asy._Init.call(this.GQ={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M1._Init.call(this.Pm={I:this},0);C.UO._Init.call(this.UO={I:
this},0);A.Device.KX._Init.call(this.KX={I:this},0);this.__proto__=C.AUi;var B;this.
Ja((A.aaR(A.acf.Asl)+Ayu)+A.aaR(A.acf.AjE));this.Sv.H(Ah0);this.Sv.Aj(true);this.
Sv.T(A.aaR(A.acf.A$Y));this.Sv.Bi(true);this.Sv.Bx(0);this.PB.H(Ayh);this.PB.Aj(
true);this.PB.Z(true);this.PB.T(A.aaR(A.acf.AdQ));this.PB.Ga(0);this.PB.EU(99);this.
PB.IQ(A.aaR(A.acf.Kl));this.PB.Jb(A.aaR(A.acf.GL));this.C$.H(Aac);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.Afm));this.C$.Bi(true);this.C$.Bx(0);this.BZ.H(Ale);this.
BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afr));this.BZ.Bi(true);this.BZ.Bx(0);this.CG.H(
AcO);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.CG.Bi(false);this.GQ.H(
AcO);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jh));this.GQ.Bi(true);this.AnimalType.
At(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.At(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.At(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(A.Device.Device).Breed);
this.UO.At(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sv,0);this.
J(this.PB,0);this.J(this.C$,0);this.J(this.BZ,0);this.J(this.CG,0);this.J(this.GQ
,0);this.Sv.At([B=this.WeightRecordingScope,B.B_,B.B$]);this.Sv.CK(this.WeightRecordingScope
);this.PB.At([B=A._GetAutoObject(A.Device.Device),B.A8e,B.BaT]);this.C$.At([B=this.
Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.BZ.At([B=this.AnimalType,B.B_,B.
B$]);this.BZ.CK(this.AnimalType);this.CG.Gr([this,this.D_,this.GS]);this.CG.LX([
B=this.CG,B.FV]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.At([B=this.Breed,B.B_,B.B$
]);this.CG.CK(this.Breed);this.CG.Anv(this.Pm);this.GQ.Gr([this,this.D_,this.GS]
);this.GQ.LX([B=this.GQ,B.FV]);this.GQ.L0(A.aaL(A.ach.Edit));this.GQ.At([B=this.
UO,B.B_,B.B$]);this.GQ.CK(this.UO);this.GQ.Anv(this.KX);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ce;this.Sv._Done();this.PB._Done();this.C$._Done();this.
BZ._Done();this.CG._Done();this.GQ._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pm._Done();this.UO._Done();this.
KX._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.
Sv._ReInit();this.PB._ReInit();this.C$._ReInit();this.BZ._ReInit();this.CG._ReInit(
);this.GQ._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pm._ReInit();this.UO._ReInit();
this.KX._ReInit();this.Ja((A.aaR(A.acf.Asl)+Ayu)+A.aaR(A.acf.AjE));this.Sv.T(A.aaR(
A.acf.A$Y));this.PB.T(A.aaR(A.acf.AdQ));this.PB.IQ(A.aaR(A.acf.Kl));this.PB.Jb(A.
aaR(A.acf.GL));this.C$.T(A.aaR(A.acf.Afm));this.BZ.T(A.aaR(A.acf.Afr));this.CG.T(
A.aaR(A.acf.Breed));this.GQ.T(A.aaR(A.acf.Jh));},_Mark:function(D){var B;C.Ce._Mark.
call(this,D);if((B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UO)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUh={QO:null,FC:null,In:null,C_:null,Dm:null,EL:null,AutoRegistrationMode:null
,AdT:null,Init:function(aArg){var B;A.zX([this,this.Bhd],this.QO.Q,0);A.zX([this
,this.Bes],[B=A._GetAutoObject(A.Device.Device),B.ASl,B.AZ6],0);A.zX([this,this.
Adu],[B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1],0);A.zX([this,this.Adu],[B=
A._GetAutoObject(A.Device.Device),B.Ui,B.U2],0);A.pe([this,this.Bes],this);A.pe([
this,this.Adu],this);},Bhd:function(G){var F;A._GetAutoObject(A.Device.Device).Awr((
F=this.QO.Q,F[1].call(F[0])));},Bes:function(G){switch(A._GetAutoObject(A.Device.
Device).Agw){case 0:A._GetAutoObject(A.Device.Helper).JZ(this.In,true);break;case
1:A._GetAutoObject(A.Device.Helper).JZ(this.In,false);break;default:throw new Error(
Bt0+A._GetAutoObject(A.Device.Device).Agw.toFixed());}},Adu:function(G){var F,Ct;
if(((F=this.C_.Q,F[1].call(F[0]))+(Ct=this.Dm.Q,Ct[1].call(Ct[0])))>12)(Ct=this.
Dm.Q,Ct[2].call(Ct[0],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Ce._Init.call(this,aArg);C.BW._Init.call(this.QO={I:this},0);C.BW._Init.call(this.
FC={I:this},0);C.AGB._Init.call(this.In={I:this},0);C.Ir._Init.call(this.C_={I:this
},0);C.Ir._Init.call(this.Dm={I:this},0);C.AvY._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdT._Init.
call(this.AdT={I:this},0);this.__proto__=C.AUh;var B;this.Ja(A.aaR(A.acf.Aqk));this.
QO.H(AIG);this.QO.Aj(true);this.QO.T(A.aaR(A.acf.Aqk));this.QO.Bi(false);this.QO.
Ga(-1);this.QO.EU(1);this.FC.H(UY);this.FC.Aj(true);this.FC.Z(true);this.FC.T(A.
aaR(A.acf.Aqh));this.FC.Bi(true);this.In.H(Aac);this.In.Aj(true);this.In.Z(true);
this.In.T(A.aaR(A.acf.AEh));this.In.Bi(true);this.C_.H(Ale);this.C_.Aj(true);this.
C_.Z(true);this.C_.T(A.aaR(A.acf.AqC));this.C_.Bi(false);this.C_.Ga(2);this.C_.EU(
6);this.C_.IQ(A.aaR(A.acf.OB));this.C_.Jb(A.aaR(A.acf.Ey));this.Dm.H(AcO);this.Dm.
Aj(true);this.Dm.T(A.aaR(A.acf.Zh));this.Dm.Bi(true);this.Dm.Ga(0);this.Dm.EU(12
);this.Dm.IQ(A.aaR(A.acf.OB));this.Dm.Jb(A.aaR(A.acf.Ey));this.EL.H(Bt1);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bi(false);this.EL.ArZ(A.aaR(A.acf.Aqj));this.AutoRegistrationMode.
At(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QO,0);this.
J(this.FC,0);this.J(this.In,0);this.J(this.C_,0);this.J(this.Dm,0);this.J(this.EL
,0);this.QO.At([B=this.AutoRegistrationMode,B.B_,B.B$]);this.QO.CK(this.AutoRegistrationMode
);this.FC.At([B=this.AdT,B.B_,B.B$]);this.FC.CK(this.AdT);this.In.Ul([B=A._GetAutoObject(
A.Device.Device),B.Wv,B.AZ9]);this.In.Aku([B=A._GetAutoObject(A.Device.Device),B.
Awb,B.AyI]);this.C_.At([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.Dm.
At([B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.EL.DB(A.aaL(A.ach.AjV));
this.EL.OM([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.EL.PQ([B=A._GetAutoObject(
A.Device.Device),B.Ui,B.U2]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ce;this.QO._Done();this.FC._Done();this.In._Done();this.C_._Done();this.Dm._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdT._Done();C.Ce._Done.
call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.QO._ReInit();this.FC.
_ReInit();this.In._ReInit();this.C_._ReInit();this.Dm._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdT._ReInit();this.Ja(A.aaR(A.acf.Aqk
));this.QO.T(A.aaR(A.acf.Aqk));this.FC.T(A.aaR(A.acf.Aqh));this.In.T(A.aaR(A.acf.
AEh));this.C_.T(A.aaR(A.acf.AqC));this.C_.IQ(A.aaR(A.acf.OB));this.C_.Jb(A.aaR(A.
acf.Ey));this.Dm.T(A.aaR(A.acf.Zh));this.Dm.IQ(A.aaR(A.acf.OB));this.Dm.Jb(A.aaR(
A.acf.Ey));this.EL.ArZ(A.aaR(A.acf.Aqj));},_Mark:function(D){var B;C.Ce._Mark.call(
this,D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FC)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVl={OG:null,FC:null,In:null,C_:null,Dm:null,EL:null,Afq:null,Init:function(
aArg){var B;A.zX([this,this.Be8],[B=A._GetAutoObject(A.Device.Device),B.ASN,B.A0k
],0);A.zX([this,this.Adu],[B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1],0);A.zX([
this,this.Adu],[B=A._GetAutoObject(A.Device.Device),B.Ui,B.U2],0);A.pe([this,this.
Be8],this);A.pe([this,this.Adu],this);},Be8:function(G){var AK0=false;var AaL=false;
switch(A._GetAutoObject(A.Device.Device).Ak2){case 0:{AK0=false;AaL=false;}break;
case 1:{AK0=true;AaL=false;}break;case 2:{AK0=false;AaL=true;}break;default:throw new
Error(Bt2+A._GetAutoObject(A.Device.Device).Ak2.toFixed());}A._GetAutoObject(A.Device.
Helper).JZ(this.In,AK0);A._GetAutoObject(A.Device.Helper).JZ(this.C_,AaL);A._GetAutoObject(
A.Device.Helper).JZ(this.Dm,AaL);A._GetAutoObject(A.Device.Helper).JZ(this.EL,AaL
);},Adu:function(G){var F,Ct;if(((F=this.C_.Q,F[1].call(F[0]))+(Ct=this.Dm.Q,Ct[
1].call(Ct[0])))>12)(Ct=this.Dm.Q,Ct[2].call(Ct[0],12-(F=this.C_.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Ce._Init.call(this,aArg);C.Ir._Init.call(this.OG={
I:this},0);C.BW._Init.call(this.FC={I:this},0);C.AGB._Init.call(this.In={I:this}
,0);C.Ir._Init.call(this.C_={I:this},0);C.Ir._Init.call(this.Dm={I:this},0);C.AvY.
_Init.call(this.EL={I:this},0);C.Afq._Init.call(this.Afq={I:this},0);this.__proto__=
C.AVl;var B;this.Ja(A.aaR(A.acf.LinkTransponder));this.OG.H(AIG);this.OG.Aj(true
);this.OG.Z(true);this.OG.T(A.aaR(A.acf.A7w));this.OG.Bi(false);this.OG.Ga(1);this.
OG.EU(365);this.OG.IQ(A.aaR(A.acf.Kl));this.OG.Jb(A.aaR(A.acf.GL));this.FC.H(UY);
this.FC.Aj(true);this.FC.Z(true);this.FC.T(A.aaR(A.acf.Aqh));this.FC.Bi(true);this.
In.H(Aac);this.In.Aj(true);this.In.Z(true);this.In.T(A.aaR(A.acf.AEh));this.In.Bi(
false);this.C_.H(Ale);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.AqC
));this.C_.Bi(false);this.C_.Ga(2);this.C_.EU(6);this.C_.IQ(A.aaR(A.acf.OB));this.
C_.Jb(A.aaR(A.acf.Ey));this.Dm.H(AcO);this.Dm.Aj(true);this.Dm.T(A.aaR(A.acf.Zh)
);this.Dm.Bi(true);this.Dm.Ga(0);this.Dm.EU(12);this.Dm.IQ(A.aaR(A.acf.OB));this.
Dm.Jb(A.aaR(A.acf.Ey));this.EL.H(Ayl);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.ArZ(A.aaR(A.acf.Aqj));this.J(this.OG,0);this.J(this.FC,0);this.
J(this.In,0);this.J(this.C_,0);this.J(this.Dm,0);this.J(this.EL,0);this.OG.At([B=
A._GetAutoObject(A.Device.Device),B.A8K,B.Ba_]);this.FC.At([B=this.Afq,B.B_,B.B$
]);this.FC.CK(this.Afq);this.In.Ul([B=A._GetAutoObject(A.Device.Device),B.Wv,B.AZ9
]);this.In.Aku([B=A._GetAutoObject(A.Device.Device),B.Awb,B.AyI]);this.C_.At([B=
A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.Dm.At([B=A._GetAutoObject(A.Device.
Device),B.Ui,B.U2]);this.EL.DB(A.aaL(A.ach.AjV));this.EL.OM([B=A._GetAutoObject(
A.Device.Device),B.Uh,B.U1]);this.EL.PQ([B=A._GetAutoObject(A.Device.Device),B.Ui
,B.U2]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.OG._Done();this.
FC._Done();this.In._Done();this.C_._Done();this.Dm._Done();this.EL._Done();this.
Afq._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.
OG._ReInit();this.FC._ReInit();this.In._ReInit();this.C_._ReInit();this.Dm._ReInit(
);this.EL._ReInit();this.Afq._ReInit();this.Ja(A.aaR(A.acf.LinkTransponder));this.
OG.T(A.aaR(A.acf.A7w));this.OG.IQ(A.aaR(A.acf.Kl));this.OG.Jb(A.aaR(A.acf.GL));this.
FC.T(A.aaR(A.acf.Aqh));this.In.T(A.aaR(A.acf.AEh));this.C_.T(A.aaR(A.acf.AqC));this.
C_.IQ(A.aaR(A.acf.OB));this.C_.Jb(A.aaR(A.acf.Ey));this.Dm.T(A.aaR(A.acf.Zh));this.
Dm.IQ(A.aaR(A.acf.OB));this.Dm.Jb(A.aaR(A.acf.Ey));this.EL.ArZ(A.aaR(A.acf.Aqj));
},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.OG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afq={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bgv],[B=A._GetAutoObject(A.Device.Device),B.ASN,B.A0k],0);A.pe([
this,this.Bgv],this);},Du:function(){return 3;},Gk:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BS(this.C7(aIndex));},At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.
Device).Aw_(E);},Bgv:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak2;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afq;this.Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Jd={B6:null,IW:null,Cq:null,Amx:null,Sd:null,Ani:null,AjB:null,Text:null,CX:
null,D6:0,Lz:false,Ai:function(Ae){var B;A.acn.Jd.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IW.Ar(true);else{this.IW.Ar(false);this.CX.Z(false);}},A4s:function(G
){var B;var Bd=this.Text.M;var Nv=0;var Nw=0;if(this.CX.Es[0]<Bd[0])Nv=Bd[0]-this.
CX.Es[0];if(this.CX.Es[0]>Bd[2])Nv=Bd[2]-this.CX.Es[0];if(this.CX.Es[1]<Bd[1])Nw=
Bd[1]-this.CX.Es[1];if(this.CX.EC[1]>Bd[3])Nw=Bd[3]-this.CX.EC[1];if(!!Nv||!!Nw)
this.Text.Gb(A.abf(this.Text.Br,[Nv,Nw]));Nv=this.Text.Br[0];Nw=this.Text.Br[1];
var C4=[(B=this.Text.Db())[2]-B[0],B[3]-B[1]];if(C4[0]<=((B=this.Text.M)[2]-B[0]
))Nv=0;if(C4[1]<=((B=this.Text.M)[3]-B[1]))Nw=0;this.Text.Gb([Nv,Nw]);},Amk:function(
G){if(!this.B6)return;var A3W=this.Text.AGO(this.D6);var pos=this.Text.Aff(A3W);
this.CX.DM(A.abe(pos,[0,this.B6.Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IW.Bw){this.IW.Ar(false);this.IW.Ar(true);}if(this.Lz){A.pe([this,this.
A4s],this);this.Lz=false;}},AAx:function(G){if(!this.B6)return;var EH=this.Text.
AGO(this.D6);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnP(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.AC2(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnP(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CO===4){var pos=this.Text.Aff(EH);var AaK=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.ATV(A.abe(pos,[0,AaK]));}if(this.Cq.CO===5
){var pos=this.Text.Aff(EH);var AaK=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.ATV(A.abf(pos,[0,AaK]));}var Vf=this.Text.AnP(EH);var Ix=this.Text.
String.charCodeAt(Vf)||0;if(((Ix===0x5E)||(Ix===0x7E))||(Ix===0x25))Vf=Vf-1;if(Vf
!==this.D6){this.D6=Vf;A.pe([this,this.Amk],this);this.Lz=true;}},BeB:function(G
){if(!this.D6)return;var Ix=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
Ix===0x5E)||(Ix===0x7E))||(Ix===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.Lz=true;},AAy:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Ix=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(Ix===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.Lz=true;}
,BeP:function(G){this.Text.R(A.abU(this.Text.String,Bt3,this.D6));this.D6=this.D6+
1;this.Lz=true;},BeD:function(G){var Ix=this.AjB.DQ;var Aui=String.fromCharCode(
Ix);A.ab5("%c",Ix);if((((Ix===0x5E)||(Ix===0x7E))||(Ix===0xAD))||(Ix===0x25))Aui=
Bt4+String.fromCharCode(Ix);this.Text.R(A.abU(this.Text.String,Aui,this.D6));this.
D6=this.D6+Aui.length;this.Lz=true;},_Init:function(aArg){A.acn.Jd._Init.call(this
,aArg);A.acl.TF._Init.call(this.IW={I:this},0);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.BK._Init.call(this.Amx={I:this},0);A.Core.BK._Init.call(this.Sd={I:this
},0);A.Core.BK._Init.call(this.Ani={I:this},0);A.Core.BK._Init.call(this.AjB={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C5._Init.call(this.CX={
I:this},0);this.__proto__=C.Jd;var B;this.H(Bt5);this.IW.B2=false;this.IW.Cx=true;
this.IW.Fq(500);this.IW.Um(500);this.Cq.Filter=147;this.Cq.Bw=false;this.Amx.Filter=
151;this.Sd.Filter=44;this.Ani.Filter=149;this.AjB.Filter=145;this.Text.AZ(0x3F);
this.Text.H(Bt6);this.Text.KR(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CX.DC(Bt7);this.CX.DM(Bt8);this.CX.A_E(2);this.CX.A_D(2);this.
CX.L(0xFF000000);this.CX.Z(false);this.J(this.Text,0);this.J(this.CX,0);this.IW.
Q=[B=this.CX,B.Fp,B.Z];this.Cq.BL=[this,this.AAx];this.Cq.D1=[this,this.AAx];this.
Amx.BL=[this,this.BeB];this.Amx.D1=[this,this.BeB];this.Sd.BL=[this,this.AAy];this.
Sd.D1=[this,this.AAy];this.Ani.BL=[this,this.BeP];this.Ani.D1=[this,this.BeP];this.
AjB.BL=[this,this.BeD];this.AjB.D1=[this,this.BeD];this.Text.Q5([this,this.Amk]);
this.Text.S(A.aaL(A.aci.ACP));this.B6=A.aaL(A.aci.ACP);},_Done:function(){this.__proto__=
A.acn.Jd;this.IW._Done();this.Cq._Done();this.Amx._Done();this.Sd._Done();this.Ani.
_Done();this.AjB._Done();this.Text._Done();this.CX._Done();A.acn.Jd._Done.call(this
);},_ReInit:function(){A.acn.Jd._ReInit.call(this);this.IW._ReInit();this.Cq._ReInit(
);this.Amx._ReInit();this.Sd._ReInit();this.Ani._ReInit();this.AjB._ReInit();this.
Text._ReInit();this.CX._ReInit();},_Mark:function(D){var B;A.acn.Jd._Mark.call(this
,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IW)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amx)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ani)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AU$={Jd:null,DE:function(G
){switch(this.Cq.CO){case 6:A._GetAutoObject(A.Device.Device).AuO();break;case 7:
A._GetAutoObject(A.Device.Device).Aql();break;case 4:A._GetAutoObject(A.Device.Device
).Ajz();break;case 5:A._GetAutoObject(A.Device.Device).Aqm();break;default:;}},Ev:
function(G){A._GetAutoObject(C.A9).FA();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Jd._Init.call(this.Jd={I:this},0);this.__proto__=C.AU$;this.H(Cc);this.
N.Z(true);this.Dr(C.AqY);this.Jd.H(Ff);this.J(this.Jd,0);this.Bb(this.Jd);this.N.
CE=[this,this.Ev];this.N.C1(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Jd._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Jd._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AT2={Wx:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){A._GetAutoObject(
C.BR).Tv(A.aaR(A.acf.AB$),[this,this.BaJ]);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(
C.BR).Tv(A.aaR(A.acf.AG7),[this,this.A77]);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(
C.BR).Tv(A.aaR(A.acf.A5y),[this,this.BaI]);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(
C.BR).Tv(A.aaR(A.acf.UnlinkTransponder),[this,this.BnT]);}else{A._GetAutoObject(
C.BR).AaS(A.aaR(A.acf.AB$));A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).AaS(
A.aaR(A.acf.AG7));A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).AaS(A.aaR(A.
acf.A5y));A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Mh(A.aaR(A.acf.A5X)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).Fy();this.Auz(A.aaR(A.acf.A5P),[this,this.Bgs
],this.TL);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Mh(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Mh(A.aaR(
A.acf.A5$));A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Mh(A.aaR(A.acf.Ane
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},Abq:function(){return C.
AB7;},Abr:function(){return C.ADl;},Q8:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avo());},HO:function(G){C.AkM.HO.call(
this,G);this.N.Cs(null);this.N.FE(A.aaR(A.acf.A5q));if(this.AJB()){this.N.Cg=[this
,this.AIH];this.N.Jz.Dk(255);}else{this.N.Cg=null;this.N.Jz.Dk(100);}this.N.C2(A.
aaL(A.ach.Options));this.N.CV(A.jV);this.N.OO(false);this.N.OP(false);this.N.I8.
Dk(255);},ASd:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiW=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A3(96,true,AiW.toFixed(),0,null);},ASe:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A53(this);},ASj:function(G){var B;A._GetAutoObject(A.Device.Device).
Dw(0);if(!A._GetAutoObject(A.Device.Device).PV){A._GetAutoObject(A.Device.Device
).A3(73,true,A.jV,0,[this,this.BeR]);return;}if(A._GetAutoObject(A.Device.Device
).Are()===false){A.zX([this,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.
Xc],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,this.Age]);return;
}A.zX([this,this.AlZ],[B=A._GetAutoObject(A.Device.Device).GC,B.SB,B.Fc],0);A._GetAutoObject(
A.Device.Device).Asn(2);},AJB:function(){if(!this.Bg)return false;var AtD=this.Bg.
AX;if(!AtD)return false;if(!AtD.B9())return false;return true;},AlZ:function(G){
var B;var F;switch(A._GetAutoObject(A.Device.Device).GC.EV){case 0:A.z$([this,this.
AlZ],[B=A._GetAutoObject(A.Device.Device).GC,B.SB,B.Fc],0);break;case 3:{if(!!this.
TL&&(F=this.TL,F[1].call(F[0])))A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);else A._GetAutoObject(A.Device.Device).A3(113,true,A.jV,0,null);if(A._GetAutoObject(
A.Device.Converter).S0(A._GetAutoObject(A.Device.Device).PV)===10){this.Dj(A.aaR(
A.acf.Bjg));this.Bg.NL.S(A.aaL(A.fl.Bh));}else this.Dj(A.aaR(A.acf.Bn9));A._GetAutoObject(
A.Device.Device).AqA();}break;case 4:{A._GetAutoObject(A.Device.Device).A3(97,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).GC.E6();}break;default:;}A.ab5("%e"
,A._GetAutoObject(A.Device.Device).GC.EV);},_Init:function(aArg){C.AkM._Init.call(
this,aArg);this.__proto__=C.AT2;var B;this.Dr(C.APo);this.A9N([B=A._GetAutoObject(
A.Device.Device),B.A8Q,B.Bbd]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADl={Pz:null,I7:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Pz={I:this},0);A.acg.Ap._Init.call(this.I7={I:this},0);this.__proto__=
C.ADl;this.Er.Z(false);this.DS.Z(false);this.Pz.H(Bt9);this.Pz.L(A.jb.Text);this.
I7.H(Bt_);this.I7.L(A.jb.Text);this.J(this.Pz,0);this.J(this.I7,0);this.Pz.Ax(A.
aaL(A.ach.AvD));this.I7.Ax(A.aaL(A.ach.Avy));},_Done:function(){this.__proto__=C.
Dc;this.Pz._Done();this.I7._Done();C.Dc._Done.call(this);},_ReInit:function(){C.
Dc._ReInit.call(this);this.Pz._ReInit();this.I7._ReInit();},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMU={Init:function(aArg){var B;A.zX([this,this.AAB],[B=A._GetAutoObject(A.Device.
Device),B.AEu,B.AIL],0);A.pe([this,this.AAB],this);},Wx:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){if(this.AJB())A._GetAutoObject(C.BR).Tv(A.aaR(
A.acf.AOi),[this,this.AIH]);else A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.AOi));A.
_GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Tv(A.aaR(A.acf.AB9),[this,this.
BaJ]);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Tv(A.aaR(A.acf.AG7),[this
,this.A77]);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Tv(A.aaR(A.acf.A5x
),[this,this.BaI]);}else{A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.AOi));A._GetAutoObject(
C.BR).Fy();A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.AB9));A._GetAutoObject(C.BR).Fy(
);A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.AG7));A._GetAutoObject(C.BR).Fy();A._GetAutoObject(
C.BR).AaS(A.aaR(A.acf.A5x));}A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).
Mh(A.aaR(A.acf.A5X)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fy();this.Auz(A.aaR(
A.acf.A5P),[this,this.Bgs],this.TL);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(
C.BR).Mh(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fy();A.
_GetAutoObject(C.BR).Mh(A.aaR(A.acf.A5$));A._GetAutoObject(C.BR).Fy();A._GetAutoObject(
C.BR).Mh(A.aaR(A.acf.Ane)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},Abq:function(){return C.AB3;},Abr:function(){return C.ADj;},Q8:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOE(
));},HO:function(G){C.AkM.HO.call(this,G);this.N.Cs(A.aaL(A.ach.AeA));this.N.Cg=[
this,this.Adt];this.N.FE(A.jV);this.N.C2(null);this.N.CV((A.aaR(A.acf.A5q)+String.
fromCharCode(0x0A))+A.aaR(A.acf.Bhl));this.N.OO(false);this.N.OP(false);this.N.I8.
Dk(255);},ASd:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiW=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).A3(96,true,AiW.toFixed(),0,null);},ASe:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A52(this);},ASj:function(G){var B;A._GetAutoObject(A.Device.Device).
Dw(0);if(!A._GetAutoObject(A.Device.Device).PV){A._GetAutoObject(A.Device.Device
).A3(73,true,A.jV,0,[this,this.BeR]);return;}if(A._GetAutoObject(A.Device.Device
).Are()===false){A.zX([this,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.
Xc],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,this.Age]);return;
}A.zX([this,this.AlZ],[B=A._GetAutoObject(A.Device.Device).GC,B.SB,B.Fc],0);A._GetAutoObject(
A.Device.Device).Asn(0);},AJB:function(){var AtD=this.Bg.AX;if(!AtD)return false;
var O;for(O=0;O<AtD.B9();O++)if(A._GetAutoObject(A.Device.Helper).Aj4(AtD.AOS(O,
34))===false)return true;return false;},Adt:function(G){A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(16);},AAB:function(G){if(A._GetAutoObject(A.Device.Device
).Aqo===1)A.pe([this,this.A57],this);},AlZ:function(G){var B;var F;switch(A._GetAutoObject(
A.Device.Device).GC.EV){case 0:A.z$([this,this.AlZ],[B=A._GetAutoObject(A.Device.
Device).GC,B.SB,B.Fc],0);break;case 3:{if(!!this.TL&&(F=this.TL,F[1].call(F[0]))
)A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();else A._GetAutoObject(
A.Device.Device).A3(113,true,A.jV,0,null);this.Dj(A.aaR(A.acf.Bhm));A._GetAutoObject(
A.Device.Device).AqA();}break;case 4:{A._GetAutoObject(A.Device.Device).A3(70,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).GC.E6();}break;default:;}},_Init:
function(aArg){C.AkM._Init.call(this,aArg);this.__proto__=C.AMU;var B;this.Dr(C.
AOX);this.A9N([B=A._GetAutoObject(A.Device.Device),B.A8m,B.BaY]);this.Init(aArg);
},_className:"Application::BirthRegistrationsListScreen"};C.AOX={DX:function(G){
C.Aes.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter).AdX(11));}
,_Init:function(aArg){C.Aes._Init.call(this,aArg);this.__proto__=C.AOX;this.Text.
R(A.aaR(A.acf.ABW));},_ReInit:function(){C.Aes._ReInit.call(this);this.Text.R(A.
aaR(A.acf.ABW));},_className:"Application::HeaderBirthRegistrationsList"};C.APo={
DX:function(G){C.Aes.DX.call(this,G);this.Dd.Ax(A._GetAutoObject(A.Device.Converter
).AdX(12));},_Init:function(aArg){C.Aes._Init.call(this,aArg);this.__proto__=C.APo;
this.Text.R(A.aaR(A.acf.AGb));},_ReInit:function(){C.Aes._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AGb));},_className:"Application::HeaderPurchasedAnimalsList"};
C.AB7={Kd:0,AP:null,SS:null,O_:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SS.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rh(this.
Kd));this.SS.R(A._GetAutoObject(A.acj.KK).ACR(this.O_));},Cf:function(Ad){if(!this.
AX)return;this.Hr=Ad;if(!!this.AX){this.Kd=this.AX.KN(Ad,26);this.O_=this.AX.Hu(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CH._Init.call(this.SS={I:this},0);this.__proto__=C.AB7;
this.AP.H(AZ2);this.AP.L(A.jb.Bc);this.SS.H(AZ3);this.J(this.AP,0);this.J(this.SS
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SS.S(A.aaL(A.fl.Ak));
this.SS.A2(A.aaL(A.fl.Bh));this.SS.Cv(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SS._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SS._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SS.S(A.aaL(A.fl.Ak));this.SS.A2(A.
aaL(A.fl.Bh));this.SS.Cv(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SS)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUA={
AeT:null,AbY:null,TO:null,KL:null,TM:null,NI:null,Tg:A.jV,Ai:function(Ae){var F;
C.SP.Ai.call(this,Ae);this.TO.L(this.V.AQ);var Aps=false;if((!this.Dl||!(F=this.
Dl,F[1].call(F[0])))&&!this.A8)Aps=true;this.TO.Z(Aps);this.Ps.Z(!Aps);this.VS.Z(
!Aps);this.Q0.Z(!Aps);this.Yg.Z(!Aps);this.P6.Z(!Aps);},Adv:function(G){var B;var
F;if(!this.Tg.length){C.SP.Adv.call(this,G);return;}var BO=this.FY;var Gu=A._GetAutoObject(
A.Device.AnJ).Bfs(this.Tg);this.Tg=A.jV;if(!Gu){A._GetAutoObject(A.Device.Device
).A3(101,true,A.jV,0,this.AbY);A.pe(this.AeT,this);return;}if(this.Ask&&(Gu>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).A3(102,true,A.jV,0,this.
AbY);A.pe(this.AeT,this);return;}this.Uk(((B=(Gu|0))<0)?B+0x100000000:B);if(this.
FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}if(!
!this.OF)A.pe(this.OF,this);},A27:function(G){if(this.Tg.length<10)this.Tg=this.
Tg+String.fromCharCode(this.KL.DQ);},ASg:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.Adv(this);else this.NI.NH=true;},ATh:function(E){if(A.aa0(this.
AeT,E))return;this.AeT=E;},ATi:function(E){if(A.aa0(this.AbY,E))return;this.AbY=
E;},_Init:function(aArg){C.SP._Init.call(this,aArg);A.acg.Text._Init.call(this.TO={
I:this},0);A.Core.BK._Init.call(this.KL={I:this},0);A.Core.BK._Init.call(this.TM={
I:this},0);A.Core.BK._Init.call(this.NI={I:this},0);this.__proto__=C.AUA;this.TO.
H(Bt$);this.TO.I$(true);this.TO.A6(0x12);this.TO.R(A.aaR(A.acf.A5K));this.KL.Filter=
143;this.TM.Filter=149;this.NI.Filter=145;this.J(this.TO,0);this.TO.S(A.aaL(A.fl.
EK));this.KL.BL=[this,this.A27];this.TM.BL=[this,this.Bby];this.NI.BL=[this,this.
ASg];},_Done:function(){this.__proto__=C.SP;this.TO._Done();this.KL._Done();this.
TM._Done();this.NI._Done();C.SP._Done.call(this);},_ReInit:function(){C.SP._ReInit.
call(this);this.TO._ReInit();this.KL._ReInit();this.TM._ReInit();this.NI._ReInit(
);this.TO.R(A.aaR(A.acf.A5K));this.TO.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SP._Mark.call(this,D);if((B=this.AeT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AbY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUE={AeT:null,AbY:null,KL:null
,TM:null,NI:null,Tg:A.jV,I0:function(G){var F;if(!this.Tg.length){C.Q$.I0.call(this
,G);return;}if(this.Asj)return;if(!this.Tg.length)this.TM.NH=true;var BO=this.AM;
var Gu=A._GetAutoObject(A.Device.AnJ).BBm(this.Tg);this.Tg=A.jV;if(!Gu){if((this.
Tg.length<13)&&!A._GetAutoObject(A.Device.Device).PV)A._GetAutoObject(A.Device.Device
).A3(105,true,A.jV,0,this.AbY);else A._GetAutoObject(A.Device.Device).A3(103,true
,A.jV,0,this.AbY);A.pe(this.AeT,this);return;}this.Bx(Gu);if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OF)A.pe(this.
OF,this);},A27:function(G){if(this.Asj)return;if(this.Tg.length<17)this.Tg=this.
Tg+String.fromCharCode(this.KL.DQ);},ASg:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.I0(this);else this.NI.NH=true;},ATh:function(E){if(A.aa0(this.
AeT,E))return;this.AeT=E;},ATi:function(E){if(A.aa0(this.AbY,E))return;this.AbY=
E;},_Init:function(aArg){C.Q$._Init.call(this,aArg);A.Core.BK._Init.call(this.KL={
I:this},0);A.Core.BK._Init.call(this.TM={I:this},0);A.Core.BK._Init.call(this.NI={
I:this},0);this.__proto__=C.AUE;this.Ar0(false);this.KL.Filter=143;this.TM.Filter=
149;this.NI.Filter=145;this.KL.BL=[this,this.A27];this.TM.BL=[this,this.Atg];this.
NI.BL=[this,this.ASg];},_Done:function(){this.__proto__=C.Q$;this.KL._Done();this.
TM._Done();this.NI._Done();C.Q$._Done.call(this);},_ReInit:function(){C.Q$._ReInit.
call(this);this.KL._ReInit();this.TM._ReInit();this.NI._ReInit();},_Mark:function(
D){var B;C.Q$._Mark.call(this,D);if((B=this.AeT)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AbY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APl={Aj0:null,AjY:null,Gv:null,Q9:null,SM:null,C5:null,Init:function(aArg){var
B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Device),B.A8I,B.AFn],0);A.pe([
this,this.DX],this);},De:function(E){C.BQ.De.call(this,E);this.Aj0.L(E);this.AjY.
L(E);this.Q9.Zo(E);this.Gv.L(E);this.SM.Zo(E);},Wy:function(E){this.Q9.CT(E);this.
SM.CT(E);},DX:function(G){this.Q9.T(A._GetAutoObject(A.Device.Device).AvV.toFixed(
));A.pe([this,this.BCF],this);},BCF:function(G){var Xm=A._GetAutoObject(A.Device.
Device).An.Filter;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).Avo());this.SM.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed());A.
_GetAutoObject(A.Device.Device).An.Bk(Xm);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aj0={I:this},0);A.acg.Ap._Init.call(this.AjY={
I:this},0);A.acg.Ap._Init.call(this.Gv={I:this},0);C.D2._Init.call(this.Q9={I:this
},0);C.D2._Init.call(this.SM={I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);
this.__proto__=C.APl;this.Aj0.H(O3);this.AjY.H(Bua);this.Gv.H(Bub);this.Gv.L(A.jb.
CS);this.Q9.AZ(0x14);this.Q9.H(Buc);this.Q9.Zo(A.jb.Bm);this.Q9.CT(A.jb.Rg);this.
Q9.Hm(2);this.Q9.BlN(0x11);this.SM.AZ(0x14);this.SM.H(Bud);this.SM.Zo(A.jb.Bm);this.
SM.CT(A.jb.Rg);this.SM.Hm(2);this.C5.DC(AhT);this.C5.DM(Bue);this.C5.L(A.jb.Bc);
this.J(this.Aj0,0);this.J(this.AjY,0);this.J(this.Gv,0);this.J(this.Q9,0);this.J(
this.SM,0);this.J(this.C5,0);this.Aj0.Ax(A.aaL(A.ach.Avx));this.AjY.Ax(A.aaL(A.ach.
APT));this.Gv.Ax(A.aaL(A.ach.Gv));this.Q9.S(A.aaL(A.fl.Bh));this.SM.S(A.aaL(A.fl.
Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Aj0._Done();this.
AjY._Done();this.Gv._Done();this.Q9._Done();this.SM._Done();this.C5._Done();C.BQ.
_Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Aj0._ReInit();
this.AjY._ReInit();this.Gv._ReInit();this.Q9._ReInit();this.SM._ReInit();this.C5.
_ReInit();this.Q9.S(A.aaL(A.fl.Bh));this.SM.S(A.aaL(A.fl.Bh));},_Mark:function(D
){var B;C.BQ._Mark.call(this,D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARH={Abe:null,Aem:null,VO:null,Init:function(aArg){this.Bb(this.Abe);},Lm:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaE];this.BP.Cg=
null;this.BP.Cl=[this,this.A2_];this.BP.CV(A.jV);this.BP.Cs(null);this.BP.C1(A.aaL(
A.ach.Yu));}return this.BP;},AAu:function(G){var Aa=(C.Aji.isPrototypeOf(G)?G:null
);if(Aa===this.Abe)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aem)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$3);},_Init:function(aArg){C.Fr._Init.call(this,aArg);C.Aji._Init.call(this.
Abe={I:this},0);C.Aji._Init.call(this.Aem={I:this},0);C.ARL._Init.call(this.VO={
I:this},0);this.__proto__=C.ARH;var B;this.H(Rn);this.Text.R(A.aaR(A.acf.AB1));this.
Abe.H(IV);this.Abe.T(A.aaR(A.acf.AjE));this.Aem.H(Qa);this.Aem.T(A.aaR(A.acf.AGi
));this.VO.H(Aab);this.VO.T(A.aaR(A.acf.A5i));this.J(this.Abe,0);this.J(this.Aem
,0);this.J(this.VO,0);this.Text.S(A.aaL(A.fl.Ak));this.Abe.AR=[this,this.AAu];this.
Aem.AR=[this,this.AAu];this.VO.ASX([B=A._GetAutoObject(A.Device.Device),B.AEy,B.
AIO]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fr;this.Abe._Done();this.
Aem._Done();this.VO._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.
call(this);this.Abe._ReInit();this.Aem._ReInit();this.VO._ReInit();this.Text.R(A.
aaR(A.acf.AB1));this.Abe.T(A.aaR(A.acf.AjE));this.Aem.T(A.aaR(A.acf.AGi));this.VO.
T(A.aaR(A.acf.A5i));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fr._Mark.
call(this,D);if((B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aem)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARG={AnimalTableFields:null,Ay:null,Y:
null,JP:null,CP:function(){this.AiJ(this);},Init:function(aArg){A.zV([this,this.
AiJ],this.AnimalTableFields,0);A.pe([this,this.AiJ],this);},DE:function(G){C.Fr.
DE.call(this,G);this.MP(this);},Lm:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.CE=[this,this.Ev];this.BP.Cg=[this,this.A28];this.BP.Cl=[this,this.
A3B];this.BP.C2(A.aaL(A.ach.Ara));this.BP.Cs(A.aaL(A.ach.Aq4));this.BP.C1(A.aaL(
A.ach.Yu));}return this.BP;},Ev:function(G){this.AA6();this.AaE(this);},AiJ:function(
G){this.Ao1();var O;for(O=0;O<this.AnimalTableFields.NQ();O=O+1){var Aal=A._GetAutoObject(
C.Amp).OD(O);this.A1b(Aal);}this.J(this.JP,0);A.aaS([this,this.MP],this);},Fk:function(
G){var B;this.Ay.Mx((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);
this.Ay.My(-this.Y.Br[1]);},MP:function(G){var B;this.Y.Vw(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HH(this.AV,true,null,null);},A1b:function(
G$){var Ay9=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Se,0);Aa.T(Ay9.BS(G$));Aa.Aj(true);Aa.G5=G$;Aa.A9Z(this.AnimalTableFields.NV(G$
));this.J(Aa,0);this.ZB(Aa);},Ao1:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdJ=X;X=X.Ah;if(((AdJ.U&0x400)===0x400))this.HN(AdJ);}}
,AA6:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JP)){var Aa=(C.Se.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G5);if(Aa.ASv())this.AnimalTableFields.
AUw(Aa.G5);}else A.ab5("%s",Ayp);}X=X.Ah;}this.AnimalTableFields.Ch();},A28:function(
G){var B;var Aa=(C.Se.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAm=(C.Se.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAm){this.AhA(AAm,Aa);A.pe([this,this.MP],this);}}},A3B:function(
G){var B;var Aa=(C.Se.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAS=(C.Se.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAS){this.AhA(Aa,AAS);A.pe([this,this.MP],this);}}},AqH:function(
G){var B;A._GetAutoObject(A.Device.Device).Aso(this);A.pe([this,this.AiJ],this);
},_Init:function(aArg){C.Fr._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Au3._Init.call(this.JP={I:this},0);
this.__proto__=C.ARG;this.H(Rn);this.Text.R(A.aaR(A.acf.AGi));this.Ay.H(It);this.
Y.H(Bax);this.Y.JS(1);this.JP.H(AH6);this.JP.Aj(true);this.JP.T(A.aaR(A.acf.A5Y)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JP,0);this.Y.El=[this,this.Fk];
this.JP.AR=[this,this.AqH];this.AnimalTableFields=A._GetAutoObject(C.Amp);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fr;this.Ay._Done();this.Y._Done();this.
JP._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JP._ReInit();this.Text.R(A.aaR(A.acf.AGi));this.
JP.T(A.aaR(A.acf.A5Y));this.CP();},_Mark:function(D){var B;C.Fr._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARF={Y:null,BZ:null,C$:null,CG:null,GQ:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UN:null,Init:function(aArg){A.zX([this,this.AuI],this.BZ.Q,0);A.zX([
this,this.AMZ],this.CG.Q,0);A.zX([this,this.AVP],this.GQ.Q,0);A.zX([this,this.Avl
],this.C$.Q,0);this.Bb(this.BZ);},DE:function(G){C.Fr.DE.call(this,G);this.MP(this
);},Lm:function(){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.
AaE];this.BP.Cg=null;this.BP.Cl=null;this.BP.CV(A.jV);this.BP.Cs(null);this.BP.C1(
A.aaL(A.ach.Yu));}return this.BP;},Fk:function(G){var B;this.Ay.Mx((B=this.Y.Db(
0x1))[3]-B[1]);this.Ay.Mz((B=this.Y.M)[3]-B[1]);this.Ay.My(-this.Y.Br[1]);},MP:function(
G){var B;this.Y.Vw(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HH(
this.AV,true,null,null);},AuI:function(G){var F;A._GetAutoObject(A.Device.Device
).EB((F=this.BZ.Q,F[1].call(F[0])));},AVP:function(G){var F;A._GetAutoObject(A.Device.
Device).Ng((F=this.GQ.Q,F[1].call(F[0])));},Avl:function(G){var F;A._GetAutoObject(
A.Device.Device).JT((F=this.C$.Q,F[1].call(F[0])));},AMZ:function(G){var F;A._GetAutoObject(
A.Device.Device).NZ((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fr._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AaR._Init.call(this.BZ={
I:this},0);C.AaR._Init.call(this.C$={I:this},0);C.AaR._Init.call(this.CG={I:this
},0);C.AaR._Init.call(this.GQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UO._Init.call(this.UN={I:
this},0);this.__proto__=C.ARF;var B;this.H(Rn);this.Text.R(A.aaR(A.acf.AjE));this.
Y.H(Bax);this.Y.JS(1);this.BZ.H(AhY);this.BZ.Ar(true);this.BZ.Aj(true);this.BZ.T(
A.aaR(A.acf.Afr));this.C$.H(Ayh);this.C$.Ar(true);this.C$.Aj(true);this.C$.T(A.aaR(
A.acf.Afm));this.CG.H(Aoo);this.CG.Ar(true);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.GQ.H(As7);this.GQ.Ar(true);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jh
));this.Ay.H(It);this.AnimalType.At(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.At(A._GetAutoObject(A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(
A.Device.Device).Breed);this.UN.At(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.BZ,0);this.J(this.C$,0);this.J(this.CG,0);this.J(
this.GQ,0);this.J(this.Ay,0);this.Y.El=[this,this.Fk];this.BZ.Zp(A.aaL(A.fl.H1));
this.BZ.Zq(A.aaL(A.fl.H1));this.BZ.At([B=this.AnimalType,B.B_,B.B$]);this.BZ.CK(
this.AnimalType);this.C$.Zp(A.aaL(A.fl.H1));this.C$.Zq(A.aaL(A.fl.H1));this.C$.At([
B=this.Gender,B.B_,B.B$]);this.C$.CK(this.Gender);this.CG.Zp(A.aaL(A.fl.H1));this.
CG.Zq(A.aaL(A.fl.H1));this.CG.At([B=this.Breed,B.B_,B.B$]);this.CG.CK(this.Breed
);this.GQ.Zp(A.aaL(A.fl.H1));this.GQ.Zq(A.aaL(A.fl.H1));this.GQ.At([B=this.UN,B.
B_,B.B$]);this.GQ.CK(this.UN);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fr;this.Y._Done();this.BZ._Done();this.C$._Done();this.CG._Done();this.GQ._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UN._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this
);this.Y._ReInit();this.BZ._ReInit();this.C$._ReInit();this.CG._ReInit();this.GQ.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UN._ReInit();this.Text.R(A.aaR(A.acf.AjE));this.BZ.T(A.aaR(
A.acf.Afr));this.C$.T(A.aaR(A.acf.Afm));this.CG.T(A.aaR(A.acf.Breed));this.GQ.T(
A.aaR(A.acf.Jh));},_Mark:function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amt={CB:0,Als:A.abi(17,0,null),OD:function(Hz){return this.Als.Get(Hz);},NQ:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Als.Set(
O,0);this.CB=0;},J:function(Aaf){if(this.CB>=17)A.ab5("%s",Buf);else{this.Als.Set(
this.CB,Aaf);this.CB=this.CB+1;}},Ch:function(){},E4:function(Ah3){var AJW=Ah3.indexOf(
String.fromCharCode(0x2C),0);var A1A=A.jV;var O=0;this.CB=0;while(O<17)if(Ah3===
A.jV)O++;else{if(AJW===-1){A1A=Ah3;Ah3=A.jV;}else{A1A=A.abV(Ah3,AJW);Ah3=A.ab1(Ah3
,0,AJW+1);}var Aal=A.abZ(A1A,0,10)|0;if(this.Bjx(Aal)){this.Als.Set(this.CB,Aal);
this.CB=this.CB+1;O++;}AJW=Ah3.indexOf(String.fromCharCode(0x2C),0);}if(Ah3!==A.
jV)A.ab5("%s",Bug);},toString:function(){var B;var AAk=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAk=AAk+AH8;AAk=AAk+(((B=this.Als.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAk;},Contains:function(Aaf){var O;for(O=0;O<this.CB;O=O+1)if(this.Als.
Get(O)===Aaf)return true;return false;},Bjx:function(Aaf){return true;},_Init:function(
aArg){(this.Als=[]).__proto__=C.Amt.Als;this.__proto__=C.Amt;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AL5={AfM:null,Init:function(aArg){var B;A.
zX([this,this.Bew],[B=A._GetAutoObject(A.Device.Device),B.A8a,B.BaQ],0);A.zX([this
,this.Bex],[B=A._GetAutoObject(A.Device.Device),B.A8b,B.BaR],0);A.pe([this,this.
Bew],this);A.pe([this,this.Bex],this);},Clear:function(){C.Amt.Clear.call(this);
this.AfM.Clear();},Ch:function(){A._GetAutoObject(A.Device.Device).ArE(this.AfM.
toString());A._GetAutoObject(A.Device.Device).ArF(this.toString());},Bew:function(
G){this.AfM.E4(A._GetAutoObject(A.Device.Device).ABD);A.we(this,0);},Bex:function(
G){this.E4(A._GetAutoObject(A.Device.Device).ABE);A.we(this,0);},NV:function(Aaf
){return this.AfM.Contains(Aaf);},AUw:function(Aaf){if(!this.NV(Aaf))this.AfM.J(
Aaf);},AOF:function(){return this.AfM.NQ();},_Init:function(aArg){C.Amt._Init.call(
this,aArg);this.__proto__=C.AL5;this.AfM=A._NewObject(C.Amt,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amt._Mark.call(this,D);if((B=this.AfM)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amp={_Init:function(){C.AL5._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARL={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hm(10);},Bl:function(aSize){C.T$.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mm.M[0]));},Ai:function(Ae){var B;C.T$.
Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FS=A.jb.Ad_;var GX=A.jb.Bm;if(this.Hk){FS=A.jb.Bm;GX=A.jb.Text;}if(!He
){this.Background.L(FS);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FS);this.V.L(GX);}this.LF=He;this.KF=Fv;this.Qs=GE;},_Init:function(
aArg){C.T$._Init.call(this,aArg);this.__proto__=C.ARL;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AMS={YM:null,Ak7:null,Lm:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaE];this.BP.Cg=null;
this.BP.Cl=null;this.BP.CV(A.jV);this.BP.Cs(null);this.BP.C1(A.aaL(A.ach.Yu));}return this.
BP;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.AaR._Init.call(this.
YM={I:this},0);C.AD6._Init.call(this.Ak7={I:this},0);this.__proto__=C.AMS;var B;
this.H(KY);this.YM.H(KY);this.YM.T(A.aaR(A.acf.Display));this.Ak7.At(A._GetAutoObject(
A.Device.Device).Aqo);this.J(this.YM,0);this.YM.Zp(A.aaL(A.fl.H1));this.YM.Zq(A.
aaL(A.fl.H1));this.YM.At([B=this.Ak7,B.B_,B.B$]);this.YM.CK(this.Ak7);this.Ak7.Bm4([
B=A._GetAutoObject(A.Device.Device),B.AEu,B.AIL]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YM._Done();this.Ak7._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YM._ReInit();this.Ak7._ReInit(
);this.YM.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak7)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AD6={AbL:null,ListViewScopeToString:null,Du:function(){return 2;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gk:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BS(aIndex
);},DZ:function(A_){return A_;},H3:function(){return 1;},At:function(E){var F;C.
AC.At.call(this,E);if(!!this.AbL)(F=this.AbL,F[2].call(F[0],E));},Bm4:function(E
){if(A.aaZ(this.AbL,E))return;if(!!this.AbL)A.z$([this,this.A3H],this.AbL,0);this.
AbL=E;if(!!this.AbL)A.zX([this,this.A3H],this.AbL,0);A.pe([this,this.A3H],this);
},A3H:function(G){var F;if(!!this.AbL)this.Q=(F=this.AbL,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AD6;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AU_={
ACc:0,ACb:0,Ai:function(Ae){C.OV.Ai.call(this,Ae);this.Background.L(this.ACb);this.
V.L(this.ACc);},BlU:function(E){if(this.ACc===E)return;this.ACc=E;this.Am();},BlT:
function(E){if(this.ACb===E)return;this.ACb=E;this.Am();},_Init:function(aArg){C.
OV._Init.call(this,aArg);this.__proto__=C.AU_;this.Ar(false);this.ACc=A.jb.Text;
this.ACb=A.jb.CJ;},_className:"Application::TextCaptionItem"};C.AHf={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.Bd2],[B=A._GetAutoObject(A.Device.
Device),B.A8J,B.Ba9],0);A.pe([this,this.Bd2],this);},Du:function(){return 3;},Gk:
function(aIndex){return this.WeightValuePrecisionToString.BS(this.C7(aIndex));},
At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.Device).AwQ(E);},Bd2:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OK;A.abo([this,this.B_,this.
B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHf;this.
Cb.Set(0,0);this.Cb.Set(1,1);this.Cb.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cm;this.WeightValuePrecisionToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AUC={UB:null,A$t:A.jV,Init:function(aArg){},Bl:function(aSize){C.BW.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UB.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BW.Ai.call(this,Ae);this.UB.L(this.
V.AQ);},Bnw:function(E){if(this.A$t===E)return;this.A$t=E;this.UB.R(E);},_Init:function(
aArg){C.BW._Init.call(this,aArg);C.CH._Init.call(this.UB={I:this},0);this.__proto__=
C.AUC;this.H(AcN);this.UB.H(Buh);this.J(this.UB,0);this.UB.S(A.aaL(A.fl.Af));this.
UB.A2(A.aaL(A.fl.Ak));this.UB.Cv(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BW;this.UB._Done();C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(
this);this.UB._ReInit();this.UB.S(A.aaL(A.fl.Af));this.UB.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BW._Mark.call(this,D);if((B=this.UB)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Y2={MassDeregistrationCriterionToString:
null,Du:function(){return 2;},Gk:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BS(this.C7(aIndex));},_Init:function(
aArg){C.Cm._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Y2;this.
Cb.Set(0,0);this.Cb.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANM={Vi:null
,Y2:null,Y4:null,Mt:null,At4:0,Init:function(aArg){this.Bb(this.Y4);},Ai:function(
Ae){C.Ei.Ai.call(this,Ae);var BCc=((A.aaR(A.acf.Aqw)+A.aaR(A.acf.Colon))+CQ)+this.
At4.toFixed();this.Mt.Bnw(BCc);},CC:function(G){C.Ei.CC.call(this,G);A.zX([this,
this.ALo],this.Mt.Q,0);A.pe([this,this.ALo],this);},E5:function(G){C.Ei.E5.call(
this,G);A.z$([this,this.ALo],this.Mt.Q,0);},DJ:function(G){C.Ei.DJ.call(this,G);
if((this.AV===this.Mt)&&!this.At4)this.N.HQ.Dk(100);else this.N.HQ.Dk(255);},BeM:
function(G){if(this.At4>0)A._GetAutoObject(A.Device.Device).A3(108,true,this.At4.
toFixed(),0,[this,this.BAo]);},ALo:function(G){var F;this.At4=A._GetAutoObject(A.
Device.Helper).BiV((F=this.Mt.Q,F[1].call(F[0])));this.Am();A.pe([this,this.MI],
this);},BeG:function(G){var B;if(!A._GetAutoObject(A.Device.Device).An.B9()){A._GetAutoObject(
A.Device.Device).A3(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).Are()===false){this.Vi=[this,this.BeG];A.zX([this,this.XA],[B=A._GetAutoObject(
A.Device.Device),B.Ww,B.Xc],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV
,0,[this,this.Age]);return;}A.zX([this,this.AlZ],[B=A._GetAutoObject(A.Device.Device
).GC,B.SB,B.Fc],0);A._GetAutoObject(A.Device.Device).Asn(1);},Age:function(G){var
B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);this.
Vi=null;}},XA:function(G){var B;if(A._GetAutoObject(A.Device.Device).P1.ZX===3){
A._GetAutoObject(A.Device.Device).A3(74,false,A.jV,0,[this,this.Age]);A.z$([this
,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);if(!!this.Vi)A.pe(this.
Vi,this);this.Vi=null;}},BAo:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BB9],this);},BB9:function(
G){A._GetAutoObject(A.Device.Helper).Byn(this.Y2.Q);A._GetAutoObject(A.Device.Device
).A3(109,true,this.At4.toFixed(),0,null);A.pe([this,this.MI],this);A.pe([this,this.
ALo],this);},AlZ:function(G){var B;switch(A._GetAutoObject(A.Device.Device).GC.EV
){case 0:A.z$([this,this.AlZ],[B=A._GetAutoObject(A.Device.Device).GC,B.SB,B.Fc]
,0);break;case 3:A._GetAutoObject(A.Device.Device).AqA();break;case 4:{A._GetAutoObject(
A.Device.Device).A3(88,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).GC.E6(
);}break;default:;}},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Y2._Init.
call(this.Y2={I:this},0);C.Co._Init.call(this.Y4={I:this},0);C.AUC._Init.call(this.
Mt={I:this},0);this.__proto__=C.ANM;var B;this.Dr(C.AOZ);this.Y4.H(IV);this.Y4.Aj(
true);this.Y4.T(A.aaR(A.acf.A6h));this.Y4.Bi(false);this.Mt.H(Bui);this.Mt.Aj(true
);this.Mt.T(A.aaR(A.acf.A$J));this.Mt.Bi(true);this.Mt.A_r(A.aaR(A.acf.Ok));this.
J(this.Y4,0);this.J(this.Mt,0);this.Y4.AR=[this,this.BeG];this.Mt.AR=[this,this.
BeM];this.Mt.AeU([this,this.BeM]);this.Mt.At([B=this.Y2,B.B_,B.B$]);this.Mt.CK(this.
Y2);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Y2._Done();this.
Y4._Done();this.Mt._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.
call(this);this.Y2._ReInit();this.Y4._ReInit();this.Mt._ReInit();this.Y4.T(A.aaR(
A.acf.A6h));this.Mt.T(A.aaR(A.acf.A$J));this.Mt.A_r(A.aaR(A.acf.Ok));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vi)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y4)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AOZ={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AOZ;this.
Text.R(A.aaR(A.acf.AdS));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdS));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANP={
Vi:null,Y3:null,AbQ:null,Init:function(aArg){this.Bb(this.Y3);A.pe([this,this.MI
],this);},BeF:function(G){var B;var Az5=A._GetAutoObject(A.Device.Device).ADS();
switch(Az5){case 1:A._GetAutoObject(A.Device.Device).A3(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A3(91,true,UZ,0,[this,this.BeZ]);break;
case 2:{this.Vi=[this,this.BeF];A.zX([this,this.XA],[B=A._GetAutoObject(A.Device.
Device),B.Ww,B.Xc],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,
this.Age]);}break;default:throw new Error(Bay+Az5.toFixed());}},Age:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);this.
Vi=null;}},XA:function(G){var B;if(A._GetAutoObject(A.Device.Device).P1.ZX===3){
A._GetAutoObject(A.Device.Device).A3(74,false,A.jV,0,[this,this.Age]);A.z$([this
,this.XA],[B=A._GetAutoObject(A.Device.Device),B.Ww,B.Xc],0);if(!!this.Vi)A.pe(this.
Vi,this);this.Vi=null;}},Be1:function(G){var B;var Az5=A._GetAutoObject(A.Device.
Device).ADT();switch(Az5){case 1:A._GetAutoObject(A.Device.Device).A3(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).A3(95,true,A.jV,0,[this
,this.BAp]);break;case 2:{this.Vi=[this,this.Be1];A.zX([this,this.XA],[B=A._GetAutoObject(
A.Device.Device),B.Ww,B.Xc],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV
,0,[this,this.Age]);}break;case 3:A._GetAutoObject(A.Device.Device).A3(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A3(93,true,A.jV,0,null
);break;default:throw new Error(Bay+Az5.toFixed());}},BeZ:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(As.Id){case 91:if(As.PopupState===
9)A.aaS([this,this.By0],this);break;case 92:if(As.PopupState===9)A.aaS([this,this.
By2],this);break;default:throw new Error(Buj+As.Id.toFixed());}},By0:function(G){
if(A._GetAutoObject(A.Device.Device).ACl()){var A2U=A._GetAutoObject(A.Device.Device
).An.QI();A._GetAutoObject(A.Device.Device).A3(80,true,A2U.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A3(82,true,A.jV,0,null);A.aaS([this,this.BAk],
this);},By2:function(G){if(A._GetAutoObject(A.Device.Device).AGm()){var A2U=A._GetAutoObject(
A.Device.Device).An.QI();A._GetAutoObject(A.Device.Device).A3(81,true,A2U.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A3(83,true,A.jV,0,null);A.aaS([
this,this.BA2],this);},BAp:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BB_],this);},BB_:function(
G){A._GetAutoObject(A.Device.Device).A3(92,true,UZ,0,[this,this.BeZ]);},BA2:function(
G){A._GetAutoObject(A.Device.Device).A3(92,false,A.jV,0,null);},BAk:function(G){
A._GetAutoObject(A.Device.Device).A3(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.Co._Init.call(this.Y3={I:this},0);C.Co._Init.call(
this.AbQ={I:this},0);this.__proto__=C.ANP;this.Dr(C.AO2);this.Y3.H(IV);this.Y3.Aj(
true);this.Y3.T(A.aaR(A.acf.ACl));this.Y3.Bi(false);this.AbQ.H(Qa);this.AbQ.Aj(true
);this.AbQ.T(A.aaR(A.acf.AGm));this.AbQ.Bi(true);this.J(this.Y3,-1);this.J(this.
AbQ,-1);this.Y3.AR=[this,this.BeF];this.AbQ.AR=[this,this.Be1];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ei;this.Y3._Done();this.AbQ._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y3._ReInit();this.AbQ.
_ReInit();this.Y3.T(A.aaR(A.acf.ACl));this.AbQ.T(A.aaR(A.acf.AGm));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vi)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO2={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO2;this.Text.R(
A.aaR(A.acf.ACr));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACr));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.QB={NX:null
,AT8:0,ADV:false,ADR:false,ADW:false,Agc:function(G){this.A51(this);},ATd:function(
E){if(this.NX===E)return;this.NX=E;if(!this.NX)return;this.DP.AutoActions=E;A.zV([
this,this.BBS],this.NX,0);},AL6:function(){this.AL8(A.aaR(A.acf.A$S),[this,this.
BCo],[this,this.A8D,this.AFe]);this.AL8(A.aaR(A.acf.AGc),[this,this.BCm],[this,this.
A8A,this.AFc]);this.AL8(A.aaR(A.acf.AnY),[this,this.BCn],[this,this.A8B,this.AFd
]);A._GetAutoObject(C.BR).Fy();A._GetAutoObject(C.BR).Mh(A.aaR(A.acf.Bn4)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).Fy();},AL8:function(BwS,Bx2,Bxl){if(!this.NX
)return;this.Auz(BwS,Bx2,Bxl);},BCo:function(G){this.AFe(!this.ADW);},BCm:function(
G){this.AFc(!this.ADR);},BCn:function(G){this.AFd(!this.ADV);},A38:function(ED,Bxk
){if(!this.NX)return;if(Bxk)this.NX.BgY(ED);else this.NX.Bom(ED);this.NX.Ch();},
A4N:function(Aie,Aif,Byi){A._GetAutoObject(C.BR).ABF(Aie,Aif,[this,this.A8U,this.
ATp],Byi);},AGz:function(ED){if(!this.NX)return;this.NX.AGz(ED);this.NX.Ch();},AFe:
function(E){if(this.ADW===E)return;this.ADW=E;this.A38(256,E);A.abo([this,this.A8D
,this.AFe],0);},AFc:function(E){if(this.ADR===E)return;this.ADR=E;this.A38(2,E);
A.abo([this,this.A8A,this.AFc],0);},AFd:function(E){if(this.ADV===E)return;this.
ADV=E;this.A38(1,E);A.abo([this,this.A8B,this.AFd],0);},BBS:function(G){this.AFe(
this.NX.Contains(256));this.AFc(this.NX.Contains(2));this.AFd(this.NX.Contains(1
));if(this.NX.NQ()>0)this.ATp(this.NX.OD(this.NX.NQ()-1));},ATp:function(E){if(this.
AT8===E)return;this.AT8=E;A.abo([this,this.A8U,this.ATp],0);},A8D:function(){return this.
ADW;},A8A:function(){return this.ADR;},A8B:function(){return this.ADV;},A8U:function(
){return this.AT8;},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.QB;},_Mark:function(D){var B;C.GJ._Mark.call(this,D);if((B=this.NX)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvU={Q:null,Ch:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADP:
function(ED){switch(ED){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},IC:function(G){var F;if(!!this.Q)this.E4((F=
this.Q,F[1].call(F[0])));A.we(this,0);},At:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.IC],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.IC],E,
0);if(!!E)A.pe([this,this.IC],this);},AGz:function(ED){if(this.NQ()>0)this.Axt(this.
NQ()-1,ED);},BgY:function(ED){if(this.Contains(ED))return;if(this.CB>=17){A.ab5(
"%s",AH7);return;}var AzY=0;for(;(AzY<=this.NQ())&&(this.OD(AzY)<ED);AzY++);var AA$=
this.NQ()-1;this.J(this.OD(AA$));for(;AA$>AzY;AA$--)this.Axt(AA$,this.OD(AA$-1));
this.Axt(AzY,ED);},Bom:function(ED){var index=this.DZ(ED);if(index<0)return;for(;
index<(this.NQ()-1);index++)this.Axt(index,this.OD(index+1));this.Axt(index,0);this.
CB--;},_Init:function(aArg){C.Vv._Init.call(this,aArg);this.__proto__=C.AvU;},_Mark:
function(D){var B;C.Vv._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.Av4={_Init:
function(){C.AvU._Init.call(this,0);var B;this.At([B=A._GetAutoObject(A.Device.Device
),B.A8N,B.Bbb]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Av5={_Init:function(){C.AvU._Init.call(this,0);var B;this.At([B=A._GetAutoObject(
A.Device.Device),B.A8O,B.Bbc]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Ax1={_Init:function(){C.AvU._Init.call(this,0);var B;this.At([B=
A._GetAutoObject(A.Device.Device),B.A9k,B.Bbr]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ADn={QS:null,AjU:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.QS={I:this},0);A.acg.Ap._Init.
call(this.AjU={I:this},0);this.__proto__=C.ADn;this.Er.H(Buk);this.DS.H(Bul);this.
QS.H(Bum);this.QS.R(A.aaR(A.acf.Uf));this.QS.A6(0x11);this.QS.L(A.jb.Text);this.
AjU.H(AZZ);this.AjU.L(A.jb.Text);this.J(this.QS,0);this.J(this.AjU,0);this.QS.S(
A.aaL(A.fl.Af));this.QS.A2(A.aaL(A.fl.Ak));this.QS.Cv(A.aaL(A.fl.Bh));this.AjU.Ax(
A.aaL(A.ach.Avw));},_Done:function(){this.__proto__=C.Dc;this.QS._Done();this.AjU.
_Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
QS._ReInit();this.AjU._ReInit();this.QS.R(A.aaR(A.acf.Uf));this.QS.S(A.aaL(A.fl.
Af));this.QS.A2(A.aaL(A.fl.Ak));this.QS.Cv(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.AB6={AP:null,SU:null,OW:null,AKp:A.jV,Bd$:A.jV,Mf:0,Init:function(aArg){},Bl:
function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OW.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OW.M[2]-1,0,this.OW.M[2]+1,
aSize[1]]);this.SU.H([this.OW.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OW.L(this.V.AQ);this.SU.L(this.V.AQ);this.T(this.AKp);this.
OW.R(this.Bd$);this.SU.R(this.Mf.toFixed());},Cf:function(Ad){if(!this.AX)return;
this.Hr=Ad;if(!!this.AX){var Kd=this.AX.KN(Ad,26);var A2M=A._GetAutoObject(A.Device.
Converter).Rh(Kd);this.AKp=A.abV(A2M,A2M.length-5);this.Bd$=A.ab2(A2M,5);if((A._GetAutoObject(
A.Device.Converter).S0(Kd)===10)&&!(Math.trunc(Kd/10000000000)%100))this.AKp=A.ab1(
this.AKp,3,2);this.Mf=this.AX.CF(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CH._Init.call(this.SU={
I:this},0);C.CH._Init.call(this.OW={I:this},0);this.__proto__=C.AB6;this.V.H(Bun
);this.AP.H(AZ2);this.AP.L(A.jb.Bc);this.SU.H(AZ3);this.OW.H(Buo);this.J(this.AP
,0);this.J(this.SU,0);this.J(this.OW,0);this.V.S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(
A.fl.Bh));this.SU.S(A.aaL(A.fl.Ak));this.SU.A2(A.aaL(A.fl.Bh));this.SU.Cv(A.aaL(
A.fl.Bh));this.OW.S(A.aaL(A.fl.Af));this.OW.A2(A.aaL(A.fl.Bh));this.OW.Cv(A.aaL(
A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();
this.SU._Done();this.OW._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AP._ReInit();this.SU._ReInit();this.OW._ReInit();this.V.
S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(A.fl.Bh));this.SU.S(A.aaL(A.fl.Ak));this.SU.A2(
A.aaL(A.fl.Bh));this.SU.Cv(A.aaL(A.fl.Bh));this.OW.S(A.aaL(A.fl.Af));this.OW.A2(
A.aaL(A.fl.Bh));this.OW.Cv(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListNaisIdAnimalIdItem"};C.APs={Q:null,Init:function(aArg){var
B;this.AA0(this);this.At([B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs]);},AEH:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
Nj(FilterCriterion);var Ai3=this.Awe();if((Ai3.length>0)&&(Ai3!==UZ)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,Ai3,0,6,false);Filter.CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeX(false);},AA0:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DL(26,4))?B:null);if(!!FilterCriterion)Filter.Nj(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this
,this.C3],this);},C3:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AW.AS8(A.jV);return;}var Ay0=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DL(26,4))?B:null);if(!Ay0){this.AW.AS8(UZ);this.AW.
AeX(true);}else this.AW.AS8(Ay0.A5);},_Init:function(aArg){C.AjQ._Init.call(this
,aArg);this.__proto__=C.APs;this.AW.AwJ(0);this.AW.BmQ(true);this.AW.Di=[this,this.
AEH];this.Init(aArg);},_Mark:function(D){var B;C.AjQ._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVn={FC:null,C_:null,Dm:null,EL:null,AsM:null,Init:function(aArg){var B;A.zX([
this,this.Be9],[B=A._GetAutoObject(A.Device.Device),B.ASO,B.A0l],0);A.zX([this,this.
Adu],[B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1],0);A.zX([this,this.Adu],[B=
A._GetAutoObject(A.Device.Device),B.Ui,B.U2],0);A.pe([this,this.Be9],this);A.pe([
this,this.Adu],this);},Be9:function(G){var AaL=false;switch(A._GetAutoObject(A.Device.
Device).An3){case 0:AaL=false;break;case 3:AaL=true;break;default:throw new Error(
Bup+A._GetAutoObject(A.Device.Device).An3.toFixed());}A._GetAutoObject(A.Device.
Helper).JZ(this.C_,AaL);A._GetAutoObject(A.Device.Helper).JZ(this.Dm,AaL);A._GetAutoObject(
A.Device.Helper).JZ(this.EL,AaL);},Adu:function(G){var F,Ct;if(((F=this.C_.Q,F[1
].call(F[0]))+(Ct=this.Dm.Q,Ct[1].call(Ct[0])))>12)(Ct=this.Dm.Q,Ct[2].call(Ct[0
],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Ce._Init.call(this
,aArg);C.BW._Init.call(this.FC={I:this},0);C.Ir._Init.call(this.C_={I:this},0);C.
Ir._Init.call(this.Dm={I:this},0);C.AvY._Init.call(this.EL={I:this},0);C.AVm._Init.
call(this.AsM={I:this},0);this.__proto__=C.AVn;var B;this.Ja(A.aaR(A.acf.UnlinkTransponder
));this.FC.H(UY);this.FC.Aj(true);this.FC.Z(true);this.FC.T(A.aaR(A.acf.Aqh));this.
FC.Bi(true);this.C_.H(Ale);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.
AqC));this.C_.Bi(false);this.C_.Ga(2);this.C_.EU(6);this.C_.IQ(A.aaR(A.acf.OB));
this.C_.Jb(A.aaR(A.acf.Ey));this.Dm.H(AcO);this.Dm.Aj(true);this.Dm.T(A.aaR(A.acf.
Zh));this.Dm.Bi(true);this.Dm.Ga(0);this.Dm.EU(12);this.Dm.IQ(A.aaR(A.acf.OB));this.
Dm.Jb(A.aaR(A.acf.Ey));this.EL.H(Ayl);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.ArZ(A.aaR(A.acf.Aqj));this.J(this.FC,0);this.J(this.C_,0);this.
J(this.Dm,0);this.J(this.EL,0);this.FC.At([B=this.AsM,B.B_,B.B$]);this.FC.CK(this.
AsM);this.C_.At([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.Dm.At([B=A.
_GetAutoObject(A.Device.Device),B.Ui,B.U2]);this.EL.DB(A.aaL(A.ach.AjV));this.EL.
OM([B=A._GetAutoObject(A.Device.Device),B.Uh,B.U1]);this.EL.PQ([B=A._GetAutoObject(
A.Device.Device),B.Ui,B.U2]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ce;this.FC._Done();this.C_._Done();this.Dm._Done();this.EL._Done();this.AsM._Done(
);C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.FC._ReInit(
);this.C_._ReInit();this.Dm._ReInit();this.EL._ReInit();this.AsM._ReInit();this.
Ja(A.aaR(A.acf.UnlinkTransponder));this.FC.T(A.aaR(A.acf.Aqh));this.C_.T(A.aaR(A.
acf.AqC));this.C_.IQ(A.aaR(A.acf.OB));this.C_.Jb(A.aaR(A.acf.Ey));this.Dm.T(A.aaR(
A.acf.Zh));this.Dm.IQ(A.aaR(A.acf.OB));this.Dm.Jb(A.aaR(A.acf.Ey));this.EL.ArZ(A.
aaR(A.acf.Aqj));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.FC).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVm={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.BgA],[B=A._GetAutoObject(A.Device.Device),B.ASO,B.A0l],0);A.pe([
this,this.BgA],this);},Du:function(){return 2;},Gk:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BS(this.C7(aIndex));},At:function(E){C.Cm.At.call(this,E);A._GetAutoObject(A.Device.
Device).Aw$(E);},BgA:function(G){this.Q=A._GetAutoObject(A.Device.Device).An3;A.
abo([this,this.B_,this.B$],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVm;this.Cb.Set(0,0);this.Cb.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMF.__proto__=A.Core.Root;C.AB.__proto__=C.Abg;C.WH.__proto__=
A.Core.P;C.Ox.__proto__=A.Core.P;C.Zx.__proto__=A.acl.Gl;C.Ej.__proto__=A.Core.P;
C.XW.__proto__=C.AB;C.AUP.__proto__=C.AB;C.Avu.__proto__=C.AB;C.Q_.__proto__=C.AB;
C.Fn.__proto__=C.Hh;C.Ay.__proto__=A.Core.P;C.Ce.__proto__=C.AB;C.AqY.__proto__=
C.BQ;C.BQ.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADf.__proto__=C.AmX;C.AGR.
__proto__=C.DR;C.Co.__proto__=C.OV;C.Ds.__proto__=C.Eg;C.Ir.__proto__=C.Ds;C.BW.
__proto__=C.Ds;C.SP.__proto__=C.Ds;C.OI.__proto__=C.Cm;C.Rd.__proto__=C.AC;C.AU4.
__proto__=C.Ba;C.Gc.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GJ.__proto__=C.AB;C.
AB5.__proto__=C.Ba;C.Ad8.__proto__=C.AB;C.Ml.__proto__=C.Ox;C.AUZ.__proto__=C.AB;
C.AqX.__proto__=C.ADf;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUF.__proto__=C.Acm;C.EA.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Ass.__proto__=A.Core.P;C.AGD.__proto__=C.Ds;C.CH.__proto__=A.Core.P;C.
AjP.__proto__=C.Yo;C.Ams.__proto__=C.Rc;C.Ahx.__proto__=A.Core.P;C.Ei.__proto__=
C.AB;C.ATS.__proto__=C.AB;C.Mo.__proto__=C.Co;C.Ang.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abg;C.API.__proto__=C.OverlayMenu;C.GK.__proto__=A.Core.P;C.Abg.__proto__=
A.Core.P;C.AUK.__proto__=A.acl.Aek;C.AmX.__proto__=C.BQ;C.ADg.__proto__=C.AmX;C.
Kl.__proto__=C.AC;C.AUH.__proto__=C.Ds;C.AGd.__proto__=C.AB;C.HY.__proto__=C.AB;
C.Wr.__proto__=C.Arq;C.IK.__proto__=C.ADg;C.I4.__proto__=C.AB;C.AMd.__proto__=C.
AGd;C.AL$.__proto__=C.GJ;C.ANu.__proto__=C.GJ;C.Aeo.__proto__=C.Co;C.QD.__proto__=
C.Aeo;C.APv.__proto__=C.BQ;C.AjQ.__proto__=C.BQ;C.DF.__proto__=C.Ey;C.AW.__proto__=
A.Core.P;C.Gd.__proto__=C.AC;C.Afl.__proto__=C.BW;C.AT9.__proto__=C.AB;C.AbR.__proto__=
C.Co;C.T$.__proto__=C.Co;C.ANG.__proto__=C.Ce;C.AU6.__proto__=C.Ce;C.ANT.__proto__=
C.Ce;C.AUj.__proto__=C.Ce;C.WX.__proto__=A.Core.P;C.QV.__proto__=C.Fn;C.D2.__proto__=
A.Core.P;C.T7.__proto__=C.AB;C.AVE.__proto__=C.GJ;C.AMe.__proto__=C.AxZ;C.AVp.__proto__=
C.Ce;C.AeN.__proto__=C.AC;C.AxZ.__proto__=C.AB;C.AVN.__proto__=C.Ce;C.AUG.__proto__=
C.Acm;C.ABB.__proto__=A.Graphics.Hy;C.Aqd.__proto__=C.AB;C.ARC.__proto__=A.Core.
P;C.Fr.__proto__=C.OverlayMenu;C.AaR.__proto__=C.BW;C.Aji.__proto__=C.Co;C.ALY.__proto__=
C.Fr;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AL3.__proto__=C.Vv;C.AL4.
__proto__=C.Fr;C.Se.__proto__=C.T$;C.AMK.__proto__=C.Vv;C.Wj.__proto__=C.Fn;C.Vs.
__proto__=A.Core.P;C.Kw.__proto__=A.Core.P;C.AR0.__proto__=C.HY;C.AUa.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANv.__proto__=C.Ams;C.Hh.__proto__=A.
Core.P;C.AVG.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aa1.
__proto__=C.Gd;C.AxR.__proto__=C.ABB;C.ATN.__proto__=C.OverlayMenu;C.AOz.__proto__=
A.Core.P;C.N1.__proto__=A.Core.P;C.ATO.__proto__=A.Core.P;C.AUJ.__proto__=A.acl.
Aek;C.AkS.__proto__=C.Ir;C.Amu.__proto__=C.OverlayMenu;C.AB8.__proto__=C.Ba;C.Yp.
__proto__=C.AjQ;C.AqG.__proto__=C.HY;C.Acl.__proto__=C.Ds;C.WeightRecordingScope.
__proto__=C.AC;C.AuE.__proto__=C.AB;C.AUI.__proto__=C.Ir;C.AMb.__proto__=C.AB;C.
Arq.__proto__=C.HY;C.AHa.__proto__=A.Core.P;C.AVJ.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeP.__proto__=C.Eg;C.AvZ.__proto__=C.AeP;C.SetTransponderScreen.__proto__=
C.Q_;C.ADo.__proto__=C.EA;C.AHe.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mg.__proto__=C.Q_;C.ALW.__proto__=C.Mg;C.ManualActionScanScreen.__proto__=C.Mg;
C.ALX.__proto__=A.Core.P;C.APz.__proto__=C.Dc;C.ADm.__proto__=C.Dc;C.TU.__proto__=
C.Dc;C.APB.__proto__=C.Dc;C.AM$.__proto__=C.Ba;C.M2.__proto__=C.Ba;C.AM9.__proto__=
C.Ba;C.Js.__proto__=A.Core.P;C.AM8.__proto__=C.Ba;C.AmW.__proto__=C.TE;C.AF5.__proto__=
C.Axj;C.AkF.__proto__=C.Axj;C.Zw.__proto__=C.AkF;C.ANC.__proto__=C.OV;C.OV.__proto__=
C.Hh;C.APE.__proto__=C.EA;C.DS.__proto__=A.Core.P;C.AM5.__proto__=C.AjA;C.ADi.__proto__=
C.TW;C.Kk.__proto__=A.Core.P;C.AmE.__proto__=C.Mo;C.AOW.__proto__=C.Kp;C.AutoRegistrationMode.
__proto__=C.AC;C.APF.__proto__=C.EA;C.Ty.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMp.__proto__=C.RY;C.AMD.__proto__=C.AaX;C.AMy.__proto__=C.AaX;C.AT$.__proto__=
C.Ba;C.APD.__proto__=C.EA;C.AMs.__proto__=C.AaX;C.IG.__proto__=C.I3;C.RR.__proto__=
C.Fz;C.RW.__proto__=C.Fz;C.Tx.__proto__=C.JK;C.QC.__proto__=C.Fz;C.Tw.__proto__=
C.JK;C.AMa.__proto__=C.Aqd;C.AQ1.__proto__=C.Ce;C.AaX.__proto__=C.D9;C.Kj.__proto__=
C.Cm;C.ARy.__proto__=C.Ce;C.AMn.__proto__=C.K_;C.AMo.__proto__=C.D9;C.AMl.__proto__=
C.K_;C.AMm.__proto__=C.K_;C.WJ.__proto__=C.Eg;C.AUD.__proto__=C.WJ;C.RX.__proto__=
C.Fz;C.APu.__proto__=C.IK;C.ANw.__proto__=C.AB;C.ANd.__proto__=C.Ad8;C.AL_.__proto__=
C.I4;C.AVD.__proto__=C.I4;C.AOY.__proto__=C.Kp;C.APw.__proto__=C.Kp;C.APA.__proto__=
C.TW;C.AM_.__proto__=C.AjA;C.TW.__proto__=C.Dc;C.Aqr.__proto__=A.acv.ACg;C.AjA.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AMW.__proto__=C.DR;C.O0.__proto__=C.DR;C.AqV.__proto__=
A.Core.P;C.AMu.__proto__=C.Gc;C.AUd.__proto__=A.Core.P;C.K_.__proto__=C.D9;C.AND.
__proto__=C.Ce;C.Au3.__proto__=C.Co;C.ADc.__proto__=C.BQ;C.ADd.__proto__=C.BQ;C.
Fz.__proto__=C.JK;C.AOC.__proto__=C.GJ;C.AOB.__proto__=C.I4;C.APa.__proto__=C.Kp;
C.ADk.__proto__=C.Dc;C.AB4.__proto__=C.Ba;C.AT_.__proto__=C.Ahx;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASa.
__proto__=C.QB;C.AR$.__proto__=C.I4;C.ADe.__proto__=C.Kp;C.ABN.__proto__=C.Gd;C.
AL1.__proto__=C.Fr;C.AMc.__proto__=C.AuE;C.NewAnimalSetTransponderScreen.__proto__=
C.Asx;C.C6.__proto__=C.AC;C.OZ.__proto__=A.Core.P;C.RS.__proto__=C.Fz;C.RT.__proto__=
C.Fz;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARJ.__proto__=C.OverlayMenu;
C.VO.__proto__=C.T$;C.AvY.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.Ty;
C.AnimalMultiInfoScreen.__proto__=C.Ty;C.AMr.__proto__=C.OverlayMenu;C.I9.__proto__=
A.Core.P;C.AL0.__proto__=C.GJ;C.ALZ.__proto__=C.I4;C.APt.__proto__=C.IK;C.AsH.__proto__=
C.OZ;C.Aq$.__proto__=C.OZ;C.AuZ.__proto__=C.AC;C.AMj.__proto__=C.AC;C.AGC.__proto__=
C.Eg;C.G4.__proto__=A.Core.P;C.AQ4.__proto__=C.HJ;C.AVu.__proto__=C.XW;C.ARW.__proto__=
C.Wr;C.ADL.__proto__=C.Lf;C.HJ.__proto__=C.G4;C.Lf.__proto__=C.G4;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvO.__proto__=C.HJ;C.AUB.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asx;C.ReasonOfLeaving.__proto__=C.AC;C.OS.__proto__=C.BW;C.AeS.__proto__=
C.Ek;C.ARP.__proto__=C.Ek;C.ARO.__proto__=C.Ek;C.Ek.__proto__=A.Core.P;C.Q$.__proto__=
C.Eg;C.AQ5.__proto__=C.Lf;C.AvN.__proto__=A.Core.P;C.Ey.__proto__=A.Core.P;C.FB.
__proto__=C.AB;C.AOb.__proto__=C.AB;C.AOe.__proto__=C.FB;C.AOf.__proto__=C.FB;C.
AqJ.__proto__=C.FB;C.Abs.__proto__=C.AjP;C.Kp.__proto__=C.AjP;C.Avs.__proto__=C.
Abs;C.AO_.__proto__=C.Abs;C.AO9.__proto__=C.Abs;C.AO8.__proto__=C.BQ;C.Aev.__proto__=
C.EA;C.AmM.__proto__=C.Ba;C.Ajp.__proto__=C.IG;C.ACG.__proto__=A.Core.P;C.AkP.__proto__=
A.Core.P;C.Rc.__proto__=C.AB;C.AU5.__proto__=C.Rc;C.AO$.__proto__=C.BQ;C.Dc.__proto__=
C.EA;C.KO.__proto__=C.BQ;C.AO4.__proto__=C.KO;C.AO6.__proto__=C.KO;C.Yj.__proto__=
C.AmM;C.Agv.__proto__=C.Hh;C.AN0.__proto__=C.GJ;C.ANZ.__proto__=C.I4;C.AO7.__proto__=
C.Kp;C.Abn.__proto__=C.Acl;C.AjH.__proto__=C.QD;C.ABY.__proto__=C.QD;C.APy.__proto__=
C.Dc;C.AM7.__proto__=C.Ba;C.RU.__proto__=C.Fz;C.AMk.__proto__=C.Fz;C.ANR.__proto__=
C.Ei;C.ANS.__proto__=C.Ei;C.AO5.__proto__=C.KO;C.Nc.__proto__=C.AbR;C.ANN.__proto__=
C.Ei;C.AO0.__proto__=C.KO;C.PN.__proto__=C.Co;C.Sf.__proto__=C.AB;C.AOc.__proto__=
C.Sf;C.AOd.__proto__=C.Sf;C.AOg.__proto__=C.AqJ;C.AN$.__proto__=C.FB;C.AaW.__proto__=
C.IG;C.Pl.__proto__=C.IG;C.AMw.__proto__=C.Amu;C.ARw.__proto__=C.T7;C.ARv.__proto__=
C.T7;C.AR7.__proto__=C.QB;C.AR6.__proto__=C.I4;C.APn.__proto__=C.Kp;C.AkM.__proto__=
C.GJ;C.AUk.__proto__=C.I4;C.Aes.__proto__=C.Yo;C.AB3.__proto__=C.Ba;C.ADj.__proto__=
C.Dc;C.APp.__proto__=C.BQ;C.AaZ.__proto__=C.NE;C.XP.__proto__=C.NE;C.RY.__proto__=
C.D9;C.XQ.__proto__=C.RY;C.XN.__proto__=C.IF;C.AaU.__proto__=C.IF;C.XM.__proto__=
C.IF;C.AaT.__proto__=C.IF;C.AMt.__proto__=C.AB;C.IF.__proto__=C.I3;C.I3.__proto__=
C.Hh;C.NE.__proto__=C.Fz;C.Axi.__proto__=C.Zw;C.ANB.__proto__=C.AmE;C.Axk.__proto__=
C.Zw;C.AT0.__proto__=C.Ce;C.ATY.__proto__=C.Ek;C.AQ2.__proto__=C.Lf;C.ATZ.__proto__=
C.Ek;C.NewMenu.__proto__=C.AB;C.ARX.__proto__=C.HY;C.AMv.__proto__=C.Amu;C.AML.__proto__=
C.Vv;C.JK.__proto__=C.I3;C.APr.__proto__=C.Yp;C.Abm.__proto__=C.Cm;C.APC.__proto__=
C.EA;C.MotherScanScreen.__proto__=C.Mg;C.APq.__proto__=C.AqX;C.Jg.__proto__=A.Core.
P;C.APm.__proto__=C.BQ;C.SetSaveNaisIdScreen.__proto__=C.Q_;C.AN1.__proto__=C.AqG;
C.UN.__proto__=C.Cm;C.UO.__proto__=C.UN;C.AcI.__proto__=C.UN;C.AdT.__proto__=C.AC;
C.AGB.__proto__=C.Eg;C.ANQ.__proto__=C.Ei;C.AO3.__proto__=C.KO;C.ANO.__proto__=C.
Ei;C.AO1.__proto__=C.KO;C.AqZ.__proto__=C.TU;C.APx.__proto__=C.TU;C.Aqs.__proto__=
C.M2;C.AM6.__proto__=C.M2;C.ARQ.__proto__=C.AeS;C.Yo.__proto__=C.BQ;C.Acm.__proto__=
C.BW;C.FK.__proto__=C.AC;C.AMz.__proto__=C.FK;C.AMA.__proto__=C.FK;C.AMg.__proto__=
C.I4;C.TE.__proto__=C.BW;C.ARZ.__proto__=C.AB;C.Asx.__proto__=C.SetTransponderScreen;
C.ADM.__proto__=C.HJ;C.Asy.__proto__=C.OS;C.Axv.__proto__=C.OS;C.Acp.__proto__=C.
Cm;C.AVT.__proto__=C.QB;C.AVS.__proto__=C.I4;C.AQ6.__proto__=A.Core.P;C.AQ3.__proto__=
C.HJ;C.ACL.__proto__=C.Abn;C.LW.__proto__=A.Core.P;C.AUi.__proto__=C.Ce;C.AUh.__proto__=
C.Ce;C.AVl.__proto__=C.Ce;C.Afq.__proto__=C.Cm;C.Jd.__proto__=A.acn.Jd;C.AU$.__proto__=
C.AB;C.AT2.__proto__=C.AkM;C.ADl.__proto__=C.Dc;C.AMU.__proto__=C.AkM;C.AOX.__proto__=
C.Aes;C.APo.__proto__=C.Aes;C.AB7.__proto__=C.Ba;C.AUA.__proto__=C.SP;C.AUE.__proto__=
C.Q$;C.APl.__proto__=C.BQ;C.ARH.__proto__=C.Fr;C.ARG.__proto__=C.Fr;C.ARF.__proto__=
C.Fr;C.AL5.__proto__=C.Amt;C.ARL.__proto__=C.T$;C.AMS.__proto__=C.OverlayMenu;C.
AD6.__proto__=C.AC;C.AU_.__proto__=C.OV;C.AHf.__proto__=C.Cm;C.AUC.__proto__=C.BW;
C.Y2.__proto__=C.Cm;C.ANM.__proto__=C.Ei;C.AOZ.__proto__=C.KO;C.ANP.__proto__=C.
Ei;C.AO2.__proto__=C.KO;C.QB.__proto__=C.GJ;C.AvU.__proto__=C.Vv;C.ADn.__proto__=
C.Dc;C.AB6.__proto__=C.Ba;C.APs.__proto__=C.AjQ;C.AVn.__proto__=C.Ce;C.AVm.__proto__=
C.Cm;};C._ReInit=function(){var B;if((B=C.Axz._this))B._ReInit(),C.Axz._ReInit.call(
B);if((B=C.AxA._this))B._ReInit(),C.AxA._ReInit.call(B);if((B=C.A9._this))B._ReInit(
),C.A9._ReInit.call(B);if((B=C.Pk._this))B._ReInit(),C.Pk._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afh._this
))B._ReInit(),C.Afh._ReInit.call(B);if((B=C.BR._this))B._ReInit(),C.BR._ReInit.call(
B);if((B=C.WD._this))B._ReInit(),C.WD._ReInit.call(B);if((B=C.Asz._this))B._ReInit(
),C.Asz._ReInit.call(B);if((B=C.AnT._this))B._ReInit(),C.AnT._ReInit.call(B);if((
B=C.DP._this))B._ReInit(),C.DP._ReInit.call(B);if((B=C.AuN._this))B._ReInit(),C.
AuN._ReInit.call(B);if((B=C.Amp._this))B._ReInit(),C.Amp._ReInit.call(B);if((B=C.
Av4._this))B._ReInit(),C.Av4._ReInit.call(B);if((B=C.Av5._this))B._ReInit(),C.Av5.
_ReInit.call(B);if((B=C.Ax1._this))B._ReInit(),C.Ax1._ReInit.call(B);};C.DH=function(
D){var B;if((B=C.Axz._this)&&(B._cycle!=D))B._Done(C.Axz._this=null);if((B=C.AxA.
_this)&&(B._cycle!=D))B._Done(C.AxA._this=null);if((B=C.A9._this)&&(B._cycle!=D)
)B._Done(C.A9._this=null);if((B=C.Pk._this)&&(B._cycle!=D))B._Done(C.Pk._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.Afh._this)&&(B._cycle!=D))B._Done(C.Afh._this=null);if((B=C.BR._this)&&(B._cycle
!=D))B._Done(C.BR._this=null);if((B=C.WD._this)&&(B._cycle!=D))B._Done(C.WD._this=
null);if((B=C.Asz._this)&&(B._cycle!=D))B._Done(C.Asz._this=null);if((B=C.AnT._this
)&&(B._cycle!=D))B._Done(C.AnT._this=null);if((B=C.DP._this)&&(B._cycle!=D))B._Done(
C.DP._this=null);if((B=C.AuN._this)&&(B._cycle!=D))B._Done(C.AuN._this=null);if((
B=C.Amp._this)&&(B._cycle!=D))B._Done(C.Amp._this=null);if((B=C.Av4._this)&&(B._cycle
!=D))B._Done(C.Av4._this=null);if((B=C.Av5._this)&&(B._cycle!=D))B._Done(C.Av5._this=
null);if((B=C.Ax1._this)&&(B._cycle!=D))B._Done(C.Ax1._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */