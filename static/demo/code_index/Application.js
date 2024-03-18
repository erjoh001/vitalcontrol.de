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
IQ=[6,15,14,19];var Ip=[6,9,14,13];var O1=[209,7,229,37];var P2=[0,40,240,320];var
P3=[0,228,240,298];var CQ=" ";var Fb=[0,40,240,280];var Lt=[0,40,232,280];var P4=[
0,40,116,160];var JY=[114,40,230,160];var N_=[0,160,116,280];var P5=[116,160,232
,280];var ME=[0,280,116,400];var S5=[116,280,232,400];var UP=[0,400,116,520];var
Z4=[116,400,232,520];var W2=[-1,520,115,640];var Iq=[232,40,240,280];var UQ=[5,40
,235,120];var Z5=[120,140,210,230];var W3=[20,140,110,230];var Z6=[0,0,116,120];
var W4=[0,0,120,120];var Z7=[0,0,116,45];var Z8=[0,0,8,200];var UR=[0,0,8,20];var
W5=[30,0,210,40];var P6=[0,0,40,40];var Z9=[7,8,200,40];var O2=[0,0,200,40];var Ri=[
6,1];var W6="ERROR: Invalid value for ItemHighlighting";var W7=[10,10,40,30];var
W8=[0,0,120,40];var W9=[60,0,180,40];var Z_=[120,0,240,40];var W_=[0,0,100,40];var
W$=[83,0,157,40];var S6=[140,0,240,40];var US=[0,0,20,40];var UT=[220,0,240,40];
var AcM=[0,0,300,30];var S7=[0,30,300,60];var Z$=[0,60,300,90];var Afw=[0,90,300
,120];var Aaa=[0,100,300,110];var Xa=[0,50,300,60];var Aab=[0,30,300,40];var Aac=
"*";var AhP=[40,40];var JZ=[0,0,240,80];var Aad=[0,0,240,50];var Lu="Cap";var AhQ=[
0,40,40,80];var Aoc=[200,40,240,80];var N$=[30,40,210,80];var Xb="--";var Aod="%d";
var AhR="%m";var AhS="%Y";var Rj=" (";var UU=[0,0,232,80];var Aoe="Date";var Aof=[
48,40,88,78];var Aog=[39,40,79,80];var Aoh=[80,44,87,77];var Afx=".";var Ala=[88
,44,120,77];var Aoi=[120,44,127,77];var AxX=[127,44,191,77];var O3=[0,0,80,40];var
Rk="Text";var AxY=[430,102,430,102];var UV=[0,0,240,240];var AsU=[232,0,240,240];
var AxZ=[0,10,240,240];var Ax0="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ax1="Unhandled option";
var Aoj=[0,80,240,280];var Afy="Unhandled animal list action";var Aok="Animal list content not handled.";
var IR=[0,40,240,80];var Aol="Set Selected";var Xc=" %%";var Aom=[0,180,240,220];
var AsV=[82,127,167,150];var AsW="Group";var AsX=[77,91,167,124];var Aon=[0,0,90
,33];var Aoo=[4,4,18,29];var AsY=[20,4,34,29];var Ax2=[36,4,50,29];var Ax3=[52,4
,66,29];var Ax4=[68,4,82,29];var AsZ="ERROR: Unhandled Device::SyncState";var Ax5=
":\n";var P7="{1}";var Ax6="{2}";var AVQ=[0,49,240,109];var AVR=[0,170,240,243];
var AVS=[0,110,240,170];var AVT=[20,243,220,268];var AHh=[30,8];var AHi="\u2265 ";
var Afz=[0,0,240,160];var Aop=[0,0,0,0];var AVU=[0,0,240,66];var AHj=[10,0,76,66
];var Alb=[33,33];var AHk=[87,0,153,66];var AHl=[164,0,230,66];var AVV="No statistics available";
var AHm="in this environment.";var AVW=" fps";var AVX="CPU: - %%";var AcN=[0,0,240
,120];var AVY=[130,0,237,20];var AVZ=[20,0,120,20];var AHn=[0,20,240,40];var As0=[
40,20,100,40];var AHo=[100,20,240,40];var AHp=[0,40,240,60];var Ax7=[40,40,100,60
];var AHq=[100,40,240,60];var Ax8=[0,60,50,80];var AV0=[100,60,240,80];var AV1=[
0,80,50,100];var AV2=[100,80,240,100];var AV3=[0,100,50,120];var AHr=[100,100,240
,120];var AV4=[5,5,15,15];var O4="%H";var Ax9="%M";var AV5="Time";var AV6=[79,40
,119,78];var AV7=[125,40,164,80];var AV8=[86,40,126,80];var AV9=":";var AV_=[75,
40,115,80];var AHs=[0,0,240,150];var AHt=[60,0,155,40];var Aoq=[30,0,65,40];var Ax_=[
60,0,100,40];var AV$=[88,0,128,40];var AWa=[60,0,71,40];var AWb=[60,0,74,40];var
AHu=[90,0,123,40];var AWc=[120,0,161,40];var AHv=[120,0,165,40];var AHw=[60,0,88
,40];var AHx=[60,0,95,40];var AWd="Did not expect iterator bigger than number of records";
var AHy=[20,0,240,20];var AWe=[0,38,240,40];var AHz=[0,0,8,4];var Rl=[0,0,240,280
];var Xd=[0,280,240,320];var AWf="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWg="]";var AWh="ERROR: Cannot find closing bracket \'}\' in text [";var AWi=
"] opened at index ";var AWj="#";var AWk="ERROR: Invalid parameter: {";var AWl="}";
var AhT=[20,20];var AHA=[0,12];var AWm="ERROR: Not expected Application::FooterFocus, ";
var AWn="%M:%S";var AHB=[30,150,207,170];var AHC=[20,70,217,194];var Ax$="Unhandled item.";
var P8=[0,80,240,120];var AWo="Unhandled Overlay Menu ";var AWp="Invalid bootloader message: ";
var AWq="Unknown USBState: ";var As1="Invalid fader";var AWr=[2,4,32,40];var AWs=[
29,4,80,40];var AWt=[120,4,200,40];var AWu=[80,0,114,40];var AWv="-1";var AWw="< ";
var As2=[0,0,232,40];var AWx=[22,40,180,80];var AWy=[2,40,22,80];var AWz=[23,40,
163,80];var AWA=[210,40,230,80];var AWB=[164,40,210,80];var AWC=[169,43,205,77];
var AWD="ERROR: No outlet assigned";var AWE="Unhandled screen";var AWF="ERROR: Cannot cache null screen.";
var AWG="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHD="Untreated Rating Method type!";var Alc="Unhandled animal type";var AWH=[
5,60,235,140];var AWI=[0,130,240,196];var AWJ=[49,240,229,280];var Aya="Implement in derived classes!";
var Ald="Implement in derived class";var AhU=[0,40,230,120];var Ayb=[0,120,230,200
];var Aor=[0,200,230,280];var AhV=[0,280,230,360];var AWK=[0,360,230,440];var Ayc=[
230,40,238,280];var AHE="WARNING: Unhandled filter field: ";var AfA="Should not happen.";
var AHF="Invalid Boolean item";var Aae=[0,120,240,160];var Ale=[0,160,240,200];var
Aos=[0,200,240,240];var AWL=[1152,11,1392,51];var AWM=[1152,51,1392,91];var AWN=[
1152,91,1392,131];var AWO=[1152,131,1392,171];var AWP=[1152,171,1392,211];var As3=[
0,240,240,280];var AHG=[10,0,240,40];var AHH=[190,0,230,40];var AWQ=[60,3,95,39];
var AWR=[95,4,200,40];var AWS=[3,3];var AWT=[6,6];var AWU=[59,5,197,35];var AWV=[
59,2,200,38];var AWW=[3,2,43,42];var AWX=[0,17,43,40];var AWY=[50,40];var AWZ=[50
,0];var AW0="Illegal shifting direction";var Ayd=[0,0,160,30];var AHI=[0,0,25,30
];var AHJ=[27,0,52,30];var AHK=[54,0,79,30];var AHL=[81,0,106,30];var AHM=[108,0
,133,30];var AHN=[135,0,160,30];var AW1="Internal queue error";var AW2="ERROR: No corresponding Id ";
var AW3=" found.";var AW4="ERROR: Error in range test";var AW5=[120,67,210,157];
var AW6=[0,40,240,70];var AW7=[20,67,110,157];var Aye=[0,160,240,280];var AHO=[20
,77,90,147];var AW8=[0,0,210,40];var AHP=[195,0,235,40];var AhW=[0,40,232,120];var
UW=[0,120,232,200];var AW9=[0,40,232,200];var Aaf=[0,200,232,280];var AW_=[0,320
,240,400];var AW$=[0,120,53,200];var Alf=[0,280,232,360];var AfB="%%";var AcO=[0
,360,232,440];var Aot=[0,440,232,520];var AXa=[0,80,207,120];var O5=")";var AHQ=
"/";var AHR=[5,0,88,30];var AXb=[88,0,240,30];var AHS="276000312345678";var AHT=[
5,30,100,60];var AHU=[100,30,240,60];var AXc="Manufacturer";var AXd="Country";var
AXe=[5,60,240,90];var AXf="Niedersachsen";var AXg=[5,90,145,120];var AXh=[140,90
,240,120];var AXi="Protocol";var AXj=[0,0,120,100];var AHV=[0,40,116,120];var AXk=[
40,80,92,107];var AHW=[0,0,50,23];var AHX="ERROR: Unhandled Device::MeasureState";
var Ayf=[0,120,240,280];var AXl=[178,159,248,203];var AXm=[10,145,170,225];var AXn=[
0,61,240,101];var AXo=[0,0,40,23];var AXp=[101,113,141,136];var AHY=[101,235,141
,258];var AXq=[69,288,101,313];var AXr=[0,40,240,200];var As4=[0,200,240,280];var
As5=[0,280,240,360];var AHZ="\u2264 ";var AXs=[0,80,94,160];var AXt=[94,80,184,160
];var AXu=[184,80,240,160];var AXv=[197,105,231,139];var AXw=[105,101,173,127];var
AXx=[7,101,75,127];var AXy=[94,125,184,151];var AXz=[2,125,92,151];var AXA=[0,70
,240,101];var AH0=[0,106,240,280];var AXB=[30,40,240,70];var Ayg=[0,40,30,70];var
AH1="\u278B";var AXC=[0,0,240,175];var AXD=[0,0,232,175];var AXE=[232,0,240,175];
var AXF="Text Here !";var AXG=[200,0,240,40];var AH2="1";var AH3="2";var AH4="3";
var AH5="4";var Ayh=[0,360,232,400];var Ayi="ERROR: invalid item class.";var AH6=[
10,220,250,260];var AXH=[185,0,225,40];var AH7="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXI="ERROR: Received more actions than expected!";var AH8=", ";var AXJ=
"ERROR: Cannot set action at position=";var AXK=". Current elements:";var AXL=", max elements:";
var AXM="17";var AXN=[0,0,58,58];var AXO=[0,0,60,60];var AXP=[30,0,58,20];var AXQ=[
7,6,25,24];var AXR=[30,60,130,160];var AXS=[0,0,28,20];var AXT=[4,3,40,24];var AXU=[
0,0,42,27];var Ayj=[0,0,17,17];var AXV="Unknown direction of counting enum value: ";
var AXW="Unknown id generation method enum value: ";var Ayk="Invalid animal id generation method: ";
var As6="Unhandled popup id";var UX="0";var As7=";";var AXX=[0,400,230,480];var AXY=[
5,120,235,200];var AXZ=[0,640,230,760];var AH9=[0,0,300,200];var AX0=[20,40,220,
80];var AH_=[20,80,220,280];var AX1=[140,0,188,40];var AX2="ERROR: Row containing birth weight could not be loaded";
var AX3=[0,440,230,520];var As8="ID";var AX4=[40,40,198,70];var AX5="Extra info: ";
var AH$=" -";var AX6=[0,0,230,120];var AX7=[0,0,230,40];var AX8=[0,80,230,120];var
AX9="\xB0Brix";var AcP=[0,320,230,400];var AX_=[0,410,230,490];var AX$="ERROR: aNumberOfDays can not be < 0 ";
var AYa="{WEIGHTGAIN} ";var AYb="\xB1";var AIa="+";var AYc="{WEIGHTGAIN}";var AYd=
"{DAYS}";var AYe="ERROR: aString can not be null";var AYf=[166,70,240,114];var AYg=[
0,60,160,120];var AYh=[30,0,240,60];var AIb=[1,6,29,54];var AYi=[30,60,240,120];
var AYj="Con";var AYk=[70,50,170,70];var AIc="Unhandled Device::NaisIdValidationResult: ";
var AId="Unhandled PopupId";var AYl=[110,123,230,248];var AYm=[5,0,250,40];var AYn=[
102,0,186,40];var AYo=[153,0,240,40];var Rm="-";var As9=[170,0,240,40];var AIe=[
220,0,320,30];var AIf=[200,20,300,50];var Aou=[180,0,180,40];var Aov=[170,0,170,
40];var Ayl="Untreated state";var AYp="ERROR: Animal id scanned in an unexpected state : ";
var AIg="ERROR: Null animal id scanned.";var AYq=[40,40,235,100];var AYr=[120,100
,210,190];var AYs=[20,100,110,190];var AYt=[0,40,40,100];var AYu="\u278A";var AYv=
"Action untreated";var AYw="ERROR: No corresponding ";var AYx=" action found!";var
AYy="Unhandled action: ";var AYz=[0,190,240,220];var AYA=[0,220,232,280];var AYB=[
5,190,235,270];var AYC=[232,60];var AYD=[0,2];var AYE=[58,58];var AYF="A";var AYG=[
56,0,156,40];var Aow=[156,0,240,40];var AIh=" 7 ";var AYH=[40,0,156,40];var AIi=
"/-1/-2";var AIj=[72,0,144,40];var Aag="\n";var AIk="(";var AYI=[72,0,156,40];var
AIl="%y/%m";var AYJ=[70,0,240,40];var Aym=[70,0,120,40];var AYK=[160,0,245,40];var
AYL="- ";var Ayn=" - ";var AYM="{parc}{clr3}";var AYN="{clr0}/^{clr2}";var AYO="{clr0}/^{clr1}";
var AIm=[0,0,85,40];var Aox="?";var AIn=[0,0,120,140];var AYP=[0,0,116,40];var AIo=[
15,0,100,40];var Ayo=[110,0,200,40];var Alg=[0,0,34,34];var AIp=[129,0,157,40];var
Aoy=[0,0,25,25];var AYQ="\u2611";var AIq="\u2610";var AIr=[5,0,72,40];var AYR=[150
,0,240,40];var AYS=[72,0,139,40];var AIs="Unvalid content class: ";var AYT=[0,320
,240,360];var AYU=[0,360,240,400];var AYV=[144,0,170,40];var AYW=[187,0,213,40];
var AYX=[207,10,233,50];var AYY=[247,20,273,60];var AYZ=[140,0,150,100];var AY0=[
165,0,175,100];var AY1=[185,0,195,100];var AY2=[205,0,215,100];var AY3=[211,0,233
,40];var AY4=[189,0,211,40];var AY5=[167,0,189,40];var Aoz=[145,0,167,40];var AIt=[
5,0,240,40];var Aah=[10,0,10,40];var AY6="= \u2211 ";var Ayp=[125,0,240,40];var AY7=[
130,0,170,40];var AY8="\xD8 ";var AY9=[100,10,116,36];var AY_=[117,10,133,36];var
AIu=[135,10,151,36];var As_="Implement in derieved class";var As$=[0,80,240,240];
var Ata=[0,120,232,160];var Atb=[0,160,232,200];var Atc=[0,200,232,240];var Ayq=[
0,240,232,280];var AoA=[0,320,232,360];var AY$=[-61,360,232,400];var AZa=[0,400,
32,440];var AZb=[0,100];var AZc=[0,40,240,240];var AZd=[0,50000];var AZe=[0,500];
var AZf=[0,0,240,105];var AZg=[0,105,240,210];var AZh=[0,40,240,81];var AZi=[0,81
,240,122];var AZj=[0,122,240,163];var AIv=[0,163,240,205];var AZk=[0,205,240,240
];var AIw=[0,200];var AZl=[0,40,240,73];var Ayr=[0,0,30,40];var AIx=[0,40,30,80];
var Ays=[60,40];var Ayt=[60,0];var AZm=[10,0,40,40];var AZn=[0,190,240,260];var AZo=[
0,130,240,190];var AIy=[40,40,200,130];var AZp=[90,230,170,253];var AZq=[80,190,
170,223];var AZr=[0,130,240,180];var AZs=[0,250,240,280];var AZt=[129,0,156,40];
var AZu=[72,0,100,40];var AZv=[100,0,129,40];var AZw=[78,8,103,33];var AIz=[0,0,
300,120];var AZx=[1,-1];var AZy=[20,40,240,120];var AZz=[20,0,240,40];var AZA=[0
,118,240,120];var AZB=[0,20,130,40];var AZC=[130,20,240,40];var Bqg=[0,0,10,20];
var A$M="\u2191";var Bqh=[230,0,240,20];var AIA=[0,40,232,80];var Bqi=[0,80,232,
160];var Bqj=[0,160,230,240];var AIB=" p. p.";var AZD="Unknown animal type";var AZE=[
80,0,140,40];var Bqk=[50,0,172,40];var Bql=[172,0,240,40];var Bqm=[0,90,240,92];
var A$N="Unhandled menu item";var A$O=[0,0,50,30];var Atd=[0,0,30,30];var Bqn="No AnimalActionTemperatureScreen found!";
var Bqo="840003123456789";var Bqp=[40,0,230,40];var Bqq=[50,10,230,30];var AZF="No AnimalMultiInfoScreen found!";
var AIC=[0,0,25,40];var A$P="/^";var A$Q="?/?";var Bqr=[100,4,180,40];var Bqs=[65
,0,99,40];var Bqt=[165,0,200,40];var A$R=[0,0,60,40];var A$S="9999/^9999";var Bqu=
"Invalid index: ";var Bqv="Unknown AnimalIdGenerationMethod: ";var Bqw="Invalid gender: ";
var Ate="Invalid input state: ";var Bqx="Unhandled AnimalIdGenerationMethod";var
Bqy=[42,35,67,75];var Bqz=[5,35,39,75];var BqA=[70,40,228,70];var BqB="Invalid direction for setting focus";
var AhX="Invalid index";var BqC="Unvalid direction";var BqD=[0,0,42,30];var A$T=[
22,0,42,30];var BqE=[20,0,40,30];var BqF=[0,0,158,30];var A$U=[32,0,62,30];var A$V=[
64,0,94,30];var A$W=[96,0,126,30];var BqG=[128,0,158,30];var BqH=" %% ";var BqI=[
0,70,240,220];var BqJ=[0,237,240,307];var A$X="\n44 %% done";var BqK=[0,0,166,30
];var AID=[0,0,12,30];var Ayu=[14,0,26,30];var AZG=[28,0,40,30];var AZH=[42,0,54
,30];var AZI=[56,0,68,30];var AZJ=[70,0,82,30];var AZK=[84,0,96,30];var AZL=[98,
0,110,30];var A$Y=[112,0,124,30];var AZM=[126,0,138,30];var BqL=[140,0,152,30];var
BqM=[154,0,166,30];var A$Z=[20,0,46,30];var BqN="\u2642";var BqO="{fnt3}\u2642{fnt1}";
var BqP="\u2640";var BqQ="{fnt3}\u2640{fnt1}";var BqR="{parc}";var BqS=[30,30,210
,80];var BqT="Implement in derieved class!";var BqU=[60,4,226,34];var A$0=[30,4,
58,34];var A$1=[4,0,27,40];var BqV=[116,4,228,34];var BqW=[60,4,86,34];var BqX=[
88,4,114,34];var AoB="Implement in derived class!";var A$2="Implement in derived class.";
var BqY="Invalid nais id view: ";var BqZ=[0,35,240,75];var Bq0=[0,0,110,30];var Bq1=[
0,0,26,30];var Bq2="100";var AZN="\n\n";var Bq3=[240,240];var Bq4=[0,240];var Bq5=
"Unknown rated attribute: ";var Bq6=[120,80,240,280];var Bq7=[0,80,120,280];var AIE=
" %% (";var Ayv=" \xB1 ";var Ayw=" (n = ";var AZO=[0,80,232,120];var Bq8=[0,242,
232,282];var AZP=[0,280,232,320];var Bq9=[35,0,200,40];var Bq_=[1,0,31,40];var Bq$=[
32,40];var Bra=[32,0];var Brb=[3,0,83,40];var A$3=[180,0,240,40];var Brc=[120,0,
180,40];var Brd=[65,0,125,40];var Bre=[0,0,120,200];var Brf=[0,40,120,150];var A$4=[
15,160,60,190];var A$5=[60,160,105,190];var Brg=[0,65,240,135];var Brh=[10,112,170
,192];var Bri=[178,129,248,173];var Brj=[0,40,240,110];var Brk=[10,98,170,178];var
Brl=[178,112,248,156];var Brm=[85,190,160,265];var Brn=[89,194,155,260];var Bro=[
26,190,111,250];var Brp=[125,181,225,211];var Brq=[100,220,183,250];var Brr="38.7";
var Brs=[180,220,225,250];var Brt="\xB0C";var Bru=[0,99,240,178];var Brv=[100,280
,140,320];var Brw=[0,26,240,105];var A$6=[30,40];var A$7=[30,0];var Brx=[149,0,200
,40];var Bry=[145,40];var Brz=[145,0];var BrA=[38,0,88,40];var AZQ=[0,0,35,40];var
BrB=[0,0,50,40];var BrC=[40,0,200,40];var BrD=[95,0,145,40];var BrE=[65,5,223,35
];var AZR=[0,0,15,40];var BrF=[72,0,140,40];var A$8="\n(";var BrG="%y/%m/%d";var
BrH="%y ";var BrI=" %m ";var BrJ=" %d ";var BrK="20";var BrL=[225,0,240,40];var BrM=[
0,400,232,440];var BrN=[0,440,232,480];var BrO=[0,480,232,520];var BrP=[0,520,232
,560];var BrQ=[0,560,232,600];var BrR=[0,598,232,638];var BrS=[5,0,215,40];var BrT=[
215,8,240,33];var BrU="Implement in dervied class.";var BrV="ERROR: Unhandled temperature unit: ";
var AIF="ERROR: Unhandled mass unit: ";var BrW=[-1,160,115,280];var BrX=[114,160
,230,280];var AZS=[116,40,232,160];var Ayx="Unknown weight class index: ";var BrY=
"< 35";var BrZ="35 - 40";var Br0="40 - 45";var Br1="45 - 50";var Br2="\u2265 50";
var Br3="< 80";var Br4="80 - 90";var Br5="90 - 100";var Br6="100 - 110";var Br7=
"\u2265 110";var A$9="Unknown mass unit";var Br8=[143,0,193,40];var A$_=[192,0,240
,40];var Br9=[44,28,44,28];var Br_="0 %%";var Br$=[-1,40,115,160];var Bsa=[117,40
,233,160];var Bsb=[1,160,117,280];var Bsc=[114,158,230,278];var Bsd=[1,280,117,400
];var Bse=[30,0,155,40];var A$$="\u2620";var AZT=[380,150,380,190];var Baa=[105,
0,155,50];var AZU=[190,1,240,41];var Bsf=[72,0,108,40];var Bsg=[108,0,180,40];var
Bsh=[60,0,94,40];var Bsi=[94,0,200,40];var Bsj="Scroll direction not supported.";
var Bsk=[44,0,207,40];var Bsl=[207,0,240,40];var Bsm="99";var Bsn="Unknown birth type";
var Bso=[44,0,189,40];var Bsp=[5,0,44,40];var Bsq=[44,0,240,40];var Bsr=[240,0,240
,40];var Bss="\u25C9";var Bab="\u25CB";var Bst=[75,4,215,34];var Bsu=[47,4,73,34
];var Bac=[17,4,45,34];var Bsv=[0,0,138,30];var Bsw=[47,4,215,34];var AZV="Unhandled MotherSelectionFilterMode: ";
var Bsx="Read only!";var Bsy="actions array too small to hold all actions";var Bsz=[
120,40];var BsA=[120,0];var BsB=[5,0,115,40];var BsC=[0,0,205,40];var BsD=[59,4,
170,34];var BsE=[59,1,173,37];var BsF=[175,1,205,37];var BsG=[0,0,37,40];var BsH=[
115,98,205,188];var BsI=[0,40,235,100];var BsJ=[2,200,240,280];var BsK=" 01234";
var BsL=[0,0];var BsM=[33,63];var BsN=[25,56];var BsO="Unknown transponder image type: ";
var AIG=[0,0,82,82];var BsP=[0,0,81,26];var BsQ=[105,120,195,210];var BsR=[10,140
,100,230];var Bad="Unhandled EartagNrAssignmentMode: ";var BsS="Unhandled Gender";
var BsT=[10,35,35,75];var BsU=[44,40,202,70];var BsV=[204,35,232,75];var BsW="Unvalid FatoryResetScope";
var Bae=[0,120,240,200];var BsX=[144,0,192,40];var BsY=[144,0,240,40];var BsZ=[195
,0,245,50];var Bs0=[120,0,120,40];var Bs1=[140,0,240,30];var Bs2=[30,0,232,40];var
Bs3=[60,0,160,40];var Bs4=[160,0,200,40];var Bs5=[150,17,200,40];var Bs6=[155,40
];var Bs7=[155,0];var Bs8=[146,80,240,160];var Bs9=[56,80,146,160];var Bs_=[0,80
,56,160];var Bs$=[13,107,47,141];var Bta=[74,109,104,139];var Btb=[50,100,130,150
];var Btc=[55,112,145,140];var Btd=[146,112,236,140];var Bte=[150,86,223,110];var
AIH=[0,40,240,120];var Btf="Menu item for animal table field not found";var Baf=[
0,360,240,440];var Btg=[0,440,240,520];var Bth=[5,40,235,104];var Bti=[120,108,226
,218];var Btj=[20,120,110,210];var Btk=[5,223,235,280];var Btl=[0,0,64,30];var Btm=[
44,0,64,30];var Btn=[185,5,225,35];var Bto=[170,5,234,35];var Btp="Unhandled number of digits";
var Btq=[0,0,126,30];var Btr=[22,5,149,35];var Bts=[149,0,232,40];var Bag=[5,20];
var Btt=[5,0];var Btu="Unhandled AnimalIdAutoGenerationMethod: ";var Btv=[4,440,
236,520];var Btw="Unhandled TransponderAssignmentIdChangeMethod: ";var Btx="\n";
var Bty="%";var Btz=[0,0,160,120];var BtA=[2,2,157,117];var BtB=[50,70];var BtC=[
50,50];var BtD="Unhandled data export destination ";var BtE=[0,0,168,40];var BtF=[
168,0,240,40];var BtG=[0,47,232,77];var BtH=[65,0,101,40];var BtI=[135,0,175,40];
var BtJ=[85,17,135,40];var BtK=[125,17,175,40];var BtL=[40,0];var Bah=[0,40,230,
280];var BtM="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BtN="ERROR: Received more animal table fields than expected!";
var BtO=[0,80,240,130];var BtP=[0,80,240,200];var Bai="Unhandled BackupError: ";
var BtQ="Unhandled PopupId: ";var BtR=[203,0,240,40];var BtS=[168,0,203,40];var BtT=[
35,0,152,40];var BtU=[0,0,84,40];var BtV=[84,0,167,40];var BtW="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMH={Device:null,A5I:null,GG:null,Init:function(aArg){},DriveCursorHitting:function(
S9,BG,Fd){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GG._Init.call(this.
GG={I:this},0);this.__proto__=C.AMH;this.H(Cd);this.J(this.GG,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5I=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lv=
this._variants();if(Lv){this.K={};Lv._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GG._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GG.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5I)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GG)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A4Q._variants();
},K:null,_className:"Application::Application"};C.Asv=[240,320];C.AB={Background:
null,Ej:null,AC5:null,An5:0,Init:function(aArg){A.pe([this,this.A0s],this);A.pe([
this,this.Beq],this);},LN:function(G){},A0s:function(s){this.LN(s);},CF:function(
G){},AIJ:function(s){this.CF(s);},E3:function(G){},Ayy:function(s){this.E3(s);},
Dq:function(E){if(this.AC5===E)return;this.AC5=E;A.pe([this,this.Beq],this);},Beq:
function(G){var B;if(!!this.AC5)this.Ej.Ab3((C.BR.isPrototypeOf(B=A._NewObject(this.
AC5,0))?B:null));else this.Ej.Ab3(null);},_Init:function(aArg){C.Abh._Init.call(
this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.Ej._Init.call(this.
Ej={I:this},0);this.__proto__=C.AB;this.Background.AZ(0x3F);this.Background.H(Cd
);this.Background.L(A.jb.CS);this.Ej.H(BF);this.Ej.Ar(false);this.J(this.Background
,-1);this.J(this.Ej,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abh;this.
Background._Done();this.Ej._Done();C.Abh._Done.call(this);},_ReInit:function(){C.
Abh._ReInit.call(this);this.Background._ReInit();this.Ej._ReInit();},_Mark:function(
D){var B;C.Abh._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WI={KG:null,Zp:function(E){var B;if(this.KG===E)return;if(!!this.KG)this.AqG(
this.KG,null,null,null,[B=this.KG,B.Ayy],null,false);this.KG=E;if(!!this.KG)this.
AkL(this.KG,null,null,null,null,null,null,[B=this.KG,B.AIJ],null,false);},AEp:function(
){return this.KG;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WI;this.H([0,0,C.Asv[0],C.Asv[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.KG)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ow={U4:null,Q:null,AnI:null,ZA:null,NO:null,Ou:null,TB:null,TC:null,AF_:255,
Kc:function(G){var F;if(!!this.Q){this.A1Y();var Ac8=(F=this.Q,F[1].call(F[0]));
if(Ac8>20)this.Ou.L(A.jb.E1);else this.Ou.L(A.jb.Gg);this.Ou.L((this.Ou.AQ&0x00FFFFFF
)|(this.AlH(Ac8,0,30)<<24));this.TB.L((this.TB.AQ&0x00FFFFFF)|(this.AlH(Ac8,31,60
)<<24));this.TC.L((this.TC.AQ&0x00FFFFFF)|(this.AlH(Ac8,61,100)<<24));}},A0q:function(
s){this.Kc(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0q],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0q],E,0);if(!!E)A.pe([this,
this.A0q],this);},A2_:function(G){var F;if(!!this.AnI)this.ZA.Ar((F=this.AnI,F[1
].call(F[0])));else this.ZA.Ar(false);this.A94(255);},A9X:function(E){if(A.aaZ(this.
AnI,E))return;if(!!this.AnI)A.z$([this,this.A2_],this.AnI,0);this.AnI=E;if(!!E)A.
zX([this,this.A2_],E,0);if(!!E)A.pe([this,this.A2_],this);},A94:function(E){if(this.
AF_===E)return;this.AF_=E;if(!!this.U4)this.U4.L((this.U4.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlH:function(A0w,BbF,Bw2){if(A0w<BbF)return 0;else if((A0w>=BbF)&&(A0w<
Bw2))return this.AF_&0xFF;else return 255;},A1Y:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U4=this.TC;else if((F=this.Q,F[1].call(F[0]))>
30)this.U4=this.TB;else this.U4=this.Ou;}else this.U4=null;},BkI:function(){return this.
AF_;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZA._Init.call(this.ZA={
I:this},0);A.acg.Ap._Init.call(this.NO={I:this},0);A.acg.AK._Init.call(this.Ou={
I:this},0);A.acg.AK._Init.call(this.TB={I:this},0);A.acg.AK._Init.call(this.TC={
I:this},0);this.__proto__=C.Ow;this.H(E4);this.ZA.Fm(2000);this.NO.H(E4);this.NO.
L(A.jb.Text);this.Ou.H(Hm);this.Ou.L(A.jb.E1);this.TB.H(IQ);this.TB.L(A.jb.E1);this.
TC.H(Ip);this.TC.L(A.jb.E1);this.J(this.NO,0);this.J(this.Ou,0);this.J(this.TB,0
);this.J(this.TC,0);this.ZA.Q=[this,this.BkI,this.A94];this.NO.Aw(A.aaL(A.ach.AMS
));},_Done:function(){this.__proto__=A.Core.P;this.ZA._Done();this.NO._Done();this.
Ou._Done();this.TB._Done();this.TC._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZA._ReInit();this.NO._ReInit();this.Ou._ReInit(
);this.TB._ReInit();this.TC._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnI)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZA={_Init:function(aArg){A.acl.Gi._Init.call(
this,aArg);this.__proto__=C.ZA;this.AkW=true;this.B2=0;this.Cw=255;},_className:
"Application::PulseAnimation"};C.Ej={GG:null,AR:null,Background:null,Ow:null,Bo:
null,Dl:null,K6:0,Avf:0,Avg:0,Ao3:0,LF:false,KD:false,Qo:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fr=((Ae&0x20)===0x20);
var GA=this.Bo.Bw;if(!G$){this.Ao3=A.jb.CS;this.K6=A.jb.Text;}else if(GA){this.Ao3=
this.Avf;this.K6=this.Avg;}else if(Fr){this.Ao3=this.Avf;this.K6=this.Avg;}else{
this.Ao3=A.jb.CS;this.K6=A.jb.Text;}this.Background.L(this.Ao3);if(!!this.GG){this.
GG.Wx(this.Ao3);this.GG.De(this.K6);}this.LF=G$;this.KD=Fr;this.Qo=GA;},Qn:function(
G){this.An();A.pe(this.AR,this);},AiO:function(G){if(this.Dl.Ach)return;this.An(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab3:function(
E){if(this.GG===E)return;if(!!this.GG)this.HN(this.GG);this.GG=E;if(!!this.GG)this.
J(this.GG,0);this.Bb(E);this.An();},A9G:function(E){if(this.Avf===E)return;this.
Avf=E;this.An();},A9H:function(E){if(this.Avg===E)return;this.Avg=E;this.An();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);C.Ow._Init.call(this.Ow={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BM._Init.call(this.Dl={I:this},0);this.__proto__=C.Ej;var B;this.
H(BF);this.Background.AZ(0x3F);this.Background.H(BF);this.Background.L(A.jb.CS);
this.Ow.H(O1);this.K6=A.jb.Text;this.Bo.PO(0);this.Bo.Wy(50);this.Dl.Filter=1;this.
Avf=A.jb.AV;this.Avg=A.jb.Bm;this.Ao3=A.jb.Text;this.J(this.Background,0);this.J(
this.Ow,0);this.Ow.As([B=A._GetAutoObject(A.Device.Device),B.Av3,B.Ayz]);this.Ow.
A9X([B=A._GetAutoObject(A.Device.Device),B.Av6,B.AyA]);this.Bo.Mx=[this,this.Qn];
this.Dl.BN=[this,this.AiO];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Ow._Done();this.Bo._Done();this.Dl._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
Ow._ReInit();this.Bo._ReInit();this.Dl._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X1={AeI:null,Uz:null,CF:function(G){if(this.K&&this.K.CF
)return this.K.CF.apply(this,arguments);else return C.AB.CF.apply(this,arguments
);},E3:function(G){if(this.K&&this.K.E3)return this.K.E3.apply(this,arguments);else
return C.AB.E3.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeI={I:this},0);A.acg.Text._Init.call(this.Uz={I:
this},0);this.__proto__=C.X1;this.AeI.H(P2);this.Uz.H(P3);this.Uz.R(A.jV);this.Uz.
L(A.jb.Text);this.Uz.Z(false);this.J(this.AeI,0);this.J(this.Uz,0);this.AeI.Aw(null
);this.Uz.S(A.aaL(A.fl.EL));var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeI._Done();this.Uz._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeI._ReInit();this.Uz._ReInit();this.Uz.S(A.aaL(A.fl.
EL));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uz)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
X1._variants();},K:null,_className:"Application::BootScreen"};C.AUL={AAw:function(
G){A._GetAutoObject(C.A$).Aho(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUL;this.Background.L(0xFF000000);this.Ej.Z(false);},_className:
"Application::SleepScreen"};C.Avr={DZ:null,Y:null,Yb:null,Yc:null,VE:null,X4:null
,VF:null,X2:null,X7:null,TG:null,X6:null,Yd:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Arw,B.Atf],0);A._GetAutoObject(A.Device.Helper).AkO();this.Bb(this.VE);this.
N.Cs(A.aaL(A.ach.ADA));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A2J=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A2J)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJY=A._NewObject(A.acl.AF7,0);AJY.Fm(250);AJY.HM(1);AJY.WD(6);this.
Y.HD(this.AV,true,AJY,null);}},CF:function(G){this.A4a(this);A._GetAutoObject(A.
Device.Device).Am.Bl(null);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(
A.Device.Helper).AkO();A._GetAutoObject(A.Device.Helper).Asp();},Fg:function(G){
var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.
Ay.Mv(-this.Y.Br[1]);},Ie:function(G){var Cx=(C.Fj.isPrototypeOf(G)?G:null);if(!
Cx)return;if(Cx===this.VE)A._GetAutoObject(C.A$).Cg(35);else if(Cx===this.X4)A._GetAutoObject(
C.A$).Cg(34);else if(Cx===this.X7)A._GetAutoObject(C.A$).Cg(69);else if(Cx===this.
VF)A._GetAutoObject(C.A$).Cg(8);else if(Cx===this.X2)A._GetAutoObject(C.A$).Cg(50
);else if(Cx===this.TG)A._GetAutoObject(C.A$).Cg(25);else if(Cx===this.Yb)A._GetAutoObject(
C.A$).Cg(77);else if(Cx===this.Yc)A._GetAutoObject(C.A$).Cg(70);else if(Cx===this.
Yd)A._GetAutoObject(C.A$).Cg(6);else if(Cx===this.X6)A._GetAutoObject(C.A$).Cg(63
);},Bz$:function(G){A._GetAutoObject(A.Device.Device).AeX(!A._GetAutoObject(A.Device.
Device).AmN);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmN)this.N.Hu((
A.aaR(A.acf.A7c)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hu((A.aaR(A.acf.
A7c)+CQ)+A.aaR(A.acf.A7T).toLowerCase());},XC:function(G){A._GetAutoObject(A.Device.
Device).Ds(1);},A4a:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(
A.Device.Helper).Mo());this.VF.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fj._Init.call(this.Yb={I:this
},0);C.Fj._Init.call(this.Yc={I:this},0);C.Fj._Init.call(this.VE={I:this},0);C.Fj.
_Init.call(this.X4={I:this},0);C.QS._Init.call(this.VF={I:this},0);C.Fj._Init.call(
this.X2={I:this},0);C.Fj._Init.call(this.X7={I:this},0);C.Fj._Init.call(this.TG={
I:this},0);C.Fj._Init.call(this.X6={I:this},0);C.Fj._Init.call(this.Yd={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avr;this.Background.L(A.
jb.CS);this.N.Ar(false);this.N.Z(true);this.Dq(C.Aq1);this.DZ.AZ(0x3F);this.DZ.H(
Fb);this.DZ.L(A.jb.CK);this.Y.H(Lt);this.Y.JO(9);this.Yb.H(P4);this.Yb.Aj(true);
this.Yb.T(A.aaR(A.acf.Gn));this.Yc.H(JY);this.Yc.Aj(true);this.Yc.T(A.aaR(A.acf.
A7z));this.VE.H(N_);this.VE.Aj(true);this.VE.T(A.aaR(A.acf.Vr));this.X4.H(P5);this.
X4.Aj(true);this.X4.T(A.aaR(A.acf.Tt));this.VF.H(ME);this.VF.Aj(true);this.VF.T(
A.aaR(A.acf.API));this.X2.H(S5);this.X2.Aj(true);this.X2.T(A.aaR(A.acf.Animal));
this.X7.H(JY);this.X7.Aj(true);this.X7.T(A.aaR(A.acf.A7f));this.TG.H(UP);this.TG.
Ar(true);this.TG.Aj(true);this.TG.Z(true);this.TG.T(A.aaR(A.acf.A53));this.X6.H(
Z4);this.X6.Aj(true);this.X6.T(A.aaR(A.acf.Device));this.Yd.H(W2);this.Yd.Aj(true
);this.Yd.T(A.aaR(A.acf.Settings));this.Ay.H(Iq);this.J(this.DZ,0);this.J(this.Y
,0);this.J(this.Yb,0);this.J(this.Yc,0);this.J(this.VE,0);this.J(this.X4,0);this.
J(this.VF,0);this.J(this.X2,0);this.J(this.X7,0);this.J(this.TG,0);this.J(this.X6
,0);this.J(this.Yd,0);this.J(this.Ay,0);this.N.CC=[this,this.Bz$];this.N.Cl=[this
,this.XC];this.Y.El=[this,this.Fg];this.Yb.AR=[this,this.Ie];this.Yb.DB(A.aaL(A.
ach.ADE));this.Yc.AR=[this,this.Ie];this.Yc.DB(A.aaL(A.ach.ADH));this.VE.AR=[this
,this.Ie];this.VE.DB(A.aaL(A.ach.APM));this.X4.AR=[this,this.Ie];this.X4.DB(A.aaL(
A.ach.APX));this.VF.AR=[this,this.Ie];this.VF.DB(A.aaL(A.ach.AQj));this.X2.AR=[this
,this.Ie];this.X2.DB(A.aaL(A.ach.APP));this.X7.AR=[this,this.Ie];this.X7.DB(A.aaL(
A.ach.AQq));this.TG.AR=[this,this.Ie];this.TG.DB(A.aaL(A.ach.AP_));this.X6.AR=[this
,this.Ie];this.X6.DB(A.aaL(A.ach.AP7));this.Yd.AR=[this,this.Ie];this.Yd.DB(A.aaL(
A.ach.AQI));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done(
);this.Y._Done();this.Yb._Done();this.Yc._Done();this.VE._Done();this.X4._Done();
this.VF._Done();this.X2._Done();this.X7._Done();this.TG._Done();this.X6._Done();
this.Yd._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Yb._ReInit();this.Yc.
_ReInit();this.VE._ReInit();this.X4._ReInit();this.VF._ReInit();this.X2._ReInit(
);this.X7._ReInit();this.TG._ReInit();this.X6._ReInit();this.Yd._ReInit();this.Ay.
_ReInit();this.Yb.T(A.aaR(A.acf.Gn));this.Yc.T(A.aaR(A.acf.A7z));this.VE.T(A.aaR(
A.acf.Vr));this.X4.T(A.aaR(A.acf.Tt));this.VF.T(A.aaR(A.acf.API));this.X2.T(A.aaR(
A.acf.Animal));this.X7.T(A.aaR(A.acf.A7f));this.TG.T(A.aaR(A.acf.A53));this.X6.T(
A.aaR(A.acf.Device));this.Yd.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q8={Number:null,Jc:null,IP:null,Tz:null,AsL:0,Init:function(aArg){var B;A.zX([
this,this.Bbi],[B=A._GetAutoObject(A.Device.Device),B.ASD,B.AZ9],0);A.pe([this,this.
Bbi],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An6();},CF:function(G){A.
_GetAutoObject(A.Device.Device).AhD();},E3:function(G){A._GetAutoObject(A.Device.
Device).AnX();},Al2:function(G){var F;this.An();this.Tz.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aej.Ar(true);if(!this.Tz.Bw)(F=this.Tz.Q,F[2].call(F[0],this.Tz.
B2));},Bbi:function(s){this.Al2(s);},An6:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gg);break;case 3:this.Background.
L(A.jb.H6);break;default:this.Background.L(A.jb.CK);}},AkF:function(E){if(this.AsL===
E)return;this.AsL=E;this.Jc.AkF(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jc._Init.call(this.Jc={I:this}
,0);A.acg.Ap._Init.call(this.IP={I:this},0);A.acl.Gi._Init.call(this.Tz={I:this}
,0);this.__proto__=C.Q8;var B;this.Background.L(A.jb.CK);this.N.Z(false);this.Number.
H(UQ);this.Number.KR(true);this.Number.L(A.jb.Text);this.Jc.H(Z5);this.Jc.AkF(0);
this.IP.H(W3);this.IP.L(A.jb.AV);this.IP.Zr(true);this.Tz.Fm(1750);this.Tz.Uk(750
);this.Tz.AkA(0);this.Tz.Ar(true);this.Tz.B2=3;this.J(this.Number,0);this.J(this.
Jc,0);this.J(this.IP,0);this.Number.S(A.aaL(A.fl.Af));this.IP.Aw(A.aaL(A.ach.ADG
));this.Tz.Q=[B=this.IP,B.ASq,B.Cv];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jc._Done();this.IP._Done();this.Tz._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jc._ReInit();this.IP._ReInit();this.Tz._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fj={C8:null,ADq:null,AR:null,Bo:null,Dl:null,Background:
null,Mn:null,OB:null,QY:null,G4:null,A5f:true,LF:false,KD:false,Qo:false,Init:function(
aArg){},Bk:function(aSize){var B;C.Hc.Bk.call(this,aSize);this.Mn.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.QY.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OB.H(this.QY.M);this.G4.H([].concat(0,this.G4.M.slice(1,4)));this.G4.H(A.abN(
this.G4.M,aSize[0]));this.G4.H(A.abP(this.G4.M,0));this.G4.H([].concat(this.G4.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hc.Ai.call(this,Ae);var G$=((Ae&0x10)===
0x10);var Fr=((Ae&0x20)===0x20);var GA=this.Bo.Bw;if(!G$){this.QY.L(A.jb.Am0);this.
G4.L(A.jb.CK);this.OB.Z(true);this.OB.L(A.jb.AQV);this.Mn.Z(false);}else if(GA){
this.QY.L(A.jb.Bm);this.G4.L(A.jb.Bm);this.OB.Z(false);this.Mn.Z(true);}else if(
Fr){this.QY.L(A.jb.Bm);this.G4.L(A.jb.Bm);this.OB.Z(false);this.Mn.Z(true);}else{
this.QY.L(A.jb.Text);this.G4.L(A.jb.Text);this.OB.Z(true);this.OB.L(A.jb.CS);this.
Mn.Z(false);}this.LF=G$;this.KD=Fr;this.Qo=GA;},Qn:function(G){this.An();A.pe(this.
AR,this);},AiO:function(G){if(this.Dl.Ach)return;this.An();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G4.R(E);},DB:function(E){if(this.C8===E)return;this.C8=E;this.QY.
Aw(E);this.OB.Aw(E);},Ab2:function(E){if(this.A5f===E)return;this.A5f=E;this.G4.
Z(E);},Ab5:function(E){if(this.ADq===E)return;this.ADq=E;this.Mn.Aw(E);this.Mn.H(
A.abK(this.Mn.M,E.FrameSize));},_Init:function(aArg){C.Hc._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BM._Init.call(this.Dl={I:this
},0);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mn={
I:this},0);A.acg.Ap._Init.call(this.OB={I:this},0);A.acg.Ap._Init.call(this.QY={
I:this},0);C.CH._Init.call(this.G4={I:this},0);this.__proto__=C.Fj;this.H(Z6);this.
Bo.PO(0);this.Bo.Wy(50);this.Dl.Filter=1;this.Background.H(W4);this.Background.Z(
false);this.Mn.AZ(0x14);this.Mn.L(A.jb.AV);this.Mn.Cv(0);this.OB.L(A.jb.CS);this.
OB.Cv(1);this.G4.H(Z7);this.J(this.Background,0);this.J(this.Mn,0);this.J(this.OB
,0);this.J(this.QY,0);this.J(this.G4,0);this.Bo.Mx=[this,this.Qn];this.Dl.BN=[this
,this.AiO];this.Mn.Aw(A.aaL(A.ach.NS));this.OB.Aw(A.aaL(A.ach.AvE));this.QY.Aw(A.
aaL(A.ach.AvE));this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(
A.aaL(A.fl.Bi));this.ADq=A.aaL(A.ach.NS);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hc;this.Bo._Done();this.Dl._Done();this.Background._Done();this.Mn._Done(
);this.OB._Done();this.QY._Done();this.G4._Done();C.Hc._Done.call(this);},_ReInit:
function(){C.Hc._ReInit.call(this);this.Bo._ReInit();this.Dl._ReInit();this.Background.
_ReInit();this.Mn._ReInit();this.OB._ReInit();this.QY._ReInit();this.G4._ReInit(
);this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.Bi)
);},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axb:null,Background:null,OX:null,Ash:0,Ak7:10,AjC:100,AQ:0,AoW:true,Bk:function(
aSize){A.Core.P.Bk.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OX.H([].concat(2,this.OX.M.slice(1,4)));this.OX.H(A.abN(this.OX.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af1=this.Ak7<this.AjC;var AJv=(
B=this.M)[3]-B[1];var A2w=10;var Aul=AJv;var A39=0;if(10>AJv)A2w=AJv;if(this.Ak7<
this.AjC)Aul=((Aul*this.Ak7)/this.AjC)|0;if(Aul<A2w)Aul=A2w;if(this.Ak7<this.AjC
)A39=((this.BkH()*(AJv-Aul))/(this.AjC-this.Ak7))|0;this.OX.H(A.abP(this.OX.M,A39
));this.OX.H([].concat(this.OX.M.slice(0,3),A39+Aul));this.OX.Z(Af1);this.Background.
Z(Af1);if(!!this.Axb&&(this.AoW!==Af1))A.pe(this.Axb,this);this.AoW=Af1;},BkH:function(
){var E=this.Ash;var Hz=this.AjC-this.Ak7;if((Hz>0)&&(E>Hz))E=Hz;if(Hz<=0)E=0;return E;
},Mv:function(E){if(E<0)E=0;if(this.Ash===E)return;this.Ash=E;this.An();},Mw:function(
E){if(E<0)E=0;if(this.Ak7===E)return;this.Ak7=E;this.An();},Mu:function(E){if(E<
0)E=0;if(this.AjC===E)return;this.AjC=E;this.An();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OX.L(E);},BmO:function(E){if(A.aa0(this.Axb,E))return;this.
Axb=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(
this.Background={I:this},0);A.acg.AK._Init.call(this.OX={I:this},0);this.__proto__=
C.Ay;this.H(Z8);this.Ar(false);this.AQ=A.jb.AV;this.Background.AZ(0x0);this.Background.
H(UR);this.Background.L(A.jb.CS);this.OX.AZ(0x0);this.OX.H(UR);this.OX.L(A.jb.AV
);this.J(this.Background,0);this.J(this.OX,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.OX._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.OX._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axb)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Ce={Hd:null,Y:null,Ay:null,Ap:null,A6H:A.jV,Init:function(aArg){A.pe([this,this.
AA4],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.An();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);this.AA4(this);},AlY:
function(G){if(!!this.N.CC)A.pe(this.N.CC,this);},ApM:function(G){if(!!this.N.Cm
)A.pe(this.N.Cm,this);},AAw:function(G){if(!!this.N.Cl)A.pe(this.N.Cl,this);},Fg:
function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[
3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);A.pe([this,this.BAv],this);},AA4:function(G){
var B;var GT=(C.Cp.isPrototypeOf(B=this.AV)?B:null);this.N.Hu(A.jV);this.N.CY(A.
aaL(A.ach.V0));this.N.CC=[this,this.Ew];if(!!GT&&!!GT.Amm){this.N.FJ(A.jV);this.
N.Kv.Dr(255);this.N.ArP(GT.AqR);this.N.Cs(GT.AvB);this.N.Cl=GT.Amm;}else{this.N.
FJ(A.jV);this.N.Cs(null);this.N.Cl=null;}if(!!GT&&!!GT.Ago){this.N.CV(GT.AxF);this.
N.HQ.Dr(GT.Axc);this.N.Anw(GT.AmP);this.N.C6(GT.Aq8);this.N.Cm=GT.Ago;}else{this.
N.CV(A.jV);this.N.C6(null);this.N.Cm=null;}},I8:function(E){if(this.A6H===E)return;
this.A6H=E;this.Hd.R(E);},Ew:function(G){A._GetAutoObject(C.A$).Fv();},BAv:function(
G){var B;var Bzu=this.Ay.Background.Fl();var Bds=(Bzu?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajd=X;
X=X.Ah;if(((Ajd.U&0x400)===0x400)){if(!!(A.Core.Akg.isPrototypeOf(Ajd)?Ajd:null)
){var Bdy=(A.Core.Akg.isPrototypeOf(Ajd)?Ajd:null);Bdy.DC([Bds,Bdy.ED[1]]);}else
if(!!(A.Core.Et.isPrototypeOf(Ajd)?Ajd:null)){var Bft=(A.Core.Et.isPrototypeOf(Ajd
)?Ajd:null);Bft.H(A.abN(Bft.M,Bds));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CH._Init.call(this.Hd={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Ce;this.N.Z(true);this.Hd.H(W5);this.Hd.Ar(false);this.Hd.R(A.aaR(A.
acf.Settings));this.Hd.L(A.jb.Text);this.Y.H(Fb);this.Y.JO(1);this.Ay.H(Iq);this.
Ap.H(P6);this.Ap.L(A.jb.Text);this.J(this.Hd,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii));this.Y.
El=[this,this.Fg];this.Ap.Aw(A.aaL(A.ach.AC9));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hd._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hd._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hd.R(A.aaR(A.acf.Settings
));this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq1={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bgo],[B=
A._GetAutoObject(A.Device.Helper),B.UY,B.U1],0);},De:function(E){C.BR.De.call(this
,E);this.Text.L(E);},Bgo:function(G){this.Text.R(A._GetAutoObject(A.acj.KJ).Big(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq1;this.Timer.Wy(1);this.Timer.Ar(true);
this.Text.H(Z9);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.Mx=[this,this.Bgo
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Timer._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BR={KS:0xFFFFFFFF,LQ:0,De:function(E){if(
this.KS===E)return;this.KS=E;},Wx:function(E){if(this.LQ===E)return;this.LQ=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BR;this.H(O2
);},_className:"Application::HeaderContent"};C.N={VS:null,VT:null,VU:null,AgV:null
,AgW:null,AgX:null,CC:null,Cl:null,Cm:null,Background:null,NG:null,Ja:null,Kv:null
,HQ:null,Pv:null,I4:null,Lc:null,TW:null,TX:null,An0:A.jV,An1:A.jV,An2:A.jV,Aq9:
0,Aq_:0,Aq$:0,Ahc:0,ZD:false,ZC:false,Asn:false,AsB:false,AsA:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VS)this.Ja.S(this.VS);if(!!this.VT)this.Kv.S(this.
VT);if(!!this.VU)this.HQ.S(this.VU);switch(this.Ahc){case 0:{this.NG.Z(false);this.
Ja.L(A.jb.Bm);this.Kv.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Pv.L(A.jb.Bm);this.I4.L(
A.jb.Bm);this.Lc.L(A.jb.Bm);}break;case 1:{if(!this.AgV)this.NG.H(A.aaT(this.Ja.
ASh(),Ri));else this.NG.H(this.Pv.Db());this.NG.Z(true);this.Ja.L(A.jb.Text);this.
Kv.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Pv.L(A.jb.Text);this.I4.L(A.jb.Bm);this.Lc.
L(A.jb.Bm);}break;case 3:{if(!this.AgX)this.NG.H(A.aaT(this.HQ.ASh(),Ri));else this.
NG.H(this.Lc.Db());this.NG.Z(true);this.Ja.L(A.jb.Bm);this.Kv.L(A.jb.Bm);this.HQ.
L(A.jb.Text);this.Pv.L(A.jb.Bm);this.I4.L(A.jb.Bm);this.Lc.L(A.jb.Text);}break;case
2:{if(!this.AgW)this.NG.H(A.aaT(this.Kv.ASh(),Ri));else this.NG.H(this.I4.Db());
this.NG.Z(true);this.Ja.L(A.jb.Bm);this.Kv.L(A.jb.Text);this.HQ.L(A.jb.Bm);this.
Pv.L(A.jb.Bm);this.I4.L(A.jb.Text);this.Lc.L(A.jb.Bm);}break;default:{this.NG.Z(
false);A.ab5("%s",W6);}}if(!!this.Pv.Al){this.Pv.Z(true);this.Ja.Z(false);}else{
this.Pv.Z(false);this.Ja.Z(true);}if(this.An1.length<=0){this.I4.Z(true);this.Kv.
Z(false);}else{this.I4.Z(false);this.Kv.Z(true);}if(!!this.Lc.Al){this.Lc.Z(true
);this.HQ.Z(false);}else{this.Lc.Z(false);this.HQ.Z(true);}},Hu:function(E){if(this.
An0===E)return;this.An0=E;this.Ja.R(E);this.An();},FJ:function(E){if(this.An1===
E)return;this.An1=E;this.Kv.R(E);this.An();},CV:function(E){if(this.An2===E)return;
this.An2=E;this.HQ.R(E);this.An();},AFd:function(E){if(this.Ahc===E)return;this.
Ahc=E;this.An();},AE6:function(E){if(this.VS===E)return;this.VS=E;this.Ja.S(E);this.
An();},ArP:function(E){if(this.VT===E)return;this.VT=E;this.Kv.S(E);this.An();},
Anw:function(E){if(this.VU===E)return;this.VU=E;this.HQ.S(E);this.An();},A3n:function(
G){this.An();},CY:function(E){if(this.AgV===E)return;this.AgV=E;this.Pv.Aw(E);this.
An();},Cs:function(E){if(this.AgW===E)return;this.AgW=E;this.I4.Aw(E);this.An();
},C6:function(E){if(this.AgX===E)return;this.AgX=E;this.Lc.Aw(E);this.An();},ON:
function(E){if(this.AsA===E)return;this.AsA=E;this.TW.Z(E);if(E)this.Ja.H([].concat(
this.TW.M[2],this.Ja.M.slice(1,4)));else this.Ja.H([].concat(0,this.Ja.M.slice(1
,4)));this.An();},OO:function(E){if(this.AsB===E)return;this.AsB=E;this.TX.Z(E);
if(E)this.HQ.H(A.abN(this.HQ.M,this.TX.M[0]));else this.HQ.H(A.abN(this.HQ.M,this.
M[2]));this.An();},Bma:function(E){if(this.Aq9===E)return;this.Aq9=E;this.Pv.Cv(
E);this.An();},AS5:function(E){if(this.Aq_===E)return;this.Aq_=E;this.I4.Cv(E);this.
An();},A9L:function(E){if(this.Aq$===E)return;this.Aq$=E;this.Lc.Cv(E);this.An();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.AK._Init.call(this.NG={I:this},0);C.CH._Init.call(this.Ja={I:this
},0);C.CH._Init.call(this.Kv={I:this},0);C.CH._Init.call(this.HQ={I:this},0);A.acg.
Ap._Init.call(this.Pv={I:this},0);A.acg.Ap._Init.call(this.I4={I:this},0);A.acg.
Ap._Init.call(this.Lc={I:this},0);A.acg.Ap._Init.call(this.TW={I:this},0);A.acg.
Ap._Init.call(this.TX={I:this},0);this.__proto__=C.N;this.H(BF);this.Background.
AZ(0x3F);this.Background.H(BF);this.Background.L(A.jb.Ad8);this.NG.H(W7);this.NG.
L(A.jb.CS);this.NG.Z(false);this.Ja.AZ(0x14);this.Ja.H(W8);this.Ja.A6(0x12);this.
Kv.AZ(0x14);this.Kv.H(W9);this.Kv.A6(0x12);this.HQ.H(Z_);this.Pv.H(W_);this.I4.H(
W$);this.Lc.H(S6);this.Lc.Z(false);this.TW.H(US);this.TW.Z(false);this.TX.H(UT);
this.TX.Z(false);this.J(this.Background,0);this.J(this.NG,0);this.J(this.Ja,0);this.
J(this.Kv,0);this.J(this.HQ,0);this.J(this.Pv,0);this.J(this.I4,0);this.J(this.Lc
,0);this.J(this.TW,0);this.J(this.TX,0);this.Ja.S(A.aaL(A.fl.Ak));this.Ja.A2(A.aaL(
A.fl.Bi));this.Ja.Q2([this,this.A3n]);this.Kv.S(A.aaL(A.fl.Ak));this.Kv.A2(A.aaL(
A.fl.Bi));this.Kv.Q2([this,this.A3n]);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(
A.fl.Bi));this.HQ.Q2([this,this.A3n]);this.VS=A.aaL(A.fl.Ak);this.VT=A.aaL(A.fl.
Ak);this.VU=A.aaL(A.fl.Ak);this.Pv.Aw(null);this.I4.Aw(null);this.Lc.Aw(null);this.
TW.Aw(A.aaL(A.ach.AMK));this.TX.Aw(A.aaL(A.ach.Ajq));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.P;this.Background._Done();this.NG._Done();this.Ja._Done(
);this.Kv._Done();this.HQ._Done();this.Pv._Done();this.I4._Done();this.Lc._Done(
);this.TW._Done();this.TX._Done();A.Core.P._Done.call(this);},_ReInit:function(){
A.Core.P._ReInit.call(this);this.Background._ReInit();this.NG._ReInit();this.Ja.
_ReInit();this.Kv._ReInit();this.HQ._ReInit();this.Pv._ReInit();this.I4._ReInit(
);this.Lc._ReInit();this.TW._ReInit();this.TX._ReInit();this.Ja.S(A.aaL(A.fl.Ak)
);this.Ja.A2(A.aaL(A.fl.Bi));this.Kv.S(A.aaL(A.fl.Ak));this.Kv.A2(A.aaL(A.fl.Bi)
);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(A.fl.Bi));this.AE6(A.aaL(A.fl.Ak));
this.ArP(A.aaL(A.fl.Ak));this.Anw(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.VS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VU)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AgV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgW)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AgX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NG)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ja)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kv).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADb={Init:function(aArg){var B;A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.
Helper),B.Ary,B.AkE],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper)
,B.A8K,B.AFB],0);A.pe([this,this.Nl],this);},DY:function(G){if(!!A._GetAutoObject(
A.Device.Helper).Ahz)this.Ab4(A._GetAutoObject(A.Device.Helper).Ahz.AOS());else this.
Ab4(-1);if(!!A._GetAutoObject(A.Device.Helper).Uw)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak5(A._GetAutoObject(A.Device.Helper).Uw.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmV._Init.call(this,aArg);this.__proto__=C.ADb;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGQ={Ey:null,Eh:null,
FU:null,X0:null,TA:null,ID:null,IE:null,Init:function(aArg){},WG:function(G){var
B;C.DR.WG.call(this,G);var AKM=this.Azi(A._GetAutoObject(A.Device.Helper).UC.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALB=this.Azi(A._GetAutoObject(
A.Device.Helper).UD.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var Bzk=
this.Azi(A._GetAutoObject(A.Device.Device).AcF);this.Ey.H(A.abP(this.Ey.M,0));this.
Ey.H([].concat(this.Ey.M.slice(0,3),((B=this.M)[3]-B[1])-AKM));this.IE.H(A.abO(this.
IE.M,this.Ey.M[3]-((((B=this.IE.M)[3]-B[1])/2)|0)));this.Eh.H(A.abP(this.Eh.M,this.
Ey.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-B[1])-ALB));this.
ID.H(A.abO(this.ID.M,(this.Eh.M[3]-((((B=this.ID.M)[3]-B[1])/2)|0))+2));this.FU.
H(A.abP(this.FU.M,this.Eh.M[3]));this.FU.H([].concat(this.FU.M.slice(0,3),((B=this.
M)[3]-B[1])-Bzk));this.TA.H(A.abO(this.TA.M,this.FU.M[3]-((((B=this.TA.M)[3]-B[1
])/2)|0)));this.X0.H(A.abP(this.X0.M,this.FU.M[3]));this.X0.H([].concat(this.X0.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJI:function(AoS){return A._GetAutoObject(A.
Device.Converter).Ak0(AoS);},AKg:function(){return A._GetAutoObject(A.acj.Temperature
).AlI();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AK._Init.call(this.
Ey={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.
FU={I:this},0);A.acg.AK._Init.call(this.X0={I:this},0);A.acg.AK._Init.call(this.
TA={I:this},0);A.acg.AK._Init.call(this.ID={I:this},0);A.acg.AK._Init.call(this.
IE={I:this},0);this.__proto__=C.AGQ;this.Ey.AZ(0xD);this.Ey.H(AcM);this.Ey.L(A.jb.
Gg);this.Eh.AZ(0xD);this.Eh.H(S7);this.Eh.L(A.jb.H6);this.FU.AZ(0xD);this.FU.H(Z$
);this.FU.L(A.jb.E1);this.X0.AZ(0xD);this.X0.H(Afw);this.X0.L(A.jb.Afp);this.TA.
AZ(0xD);this.TA.H(Aaa);this.TA.Awp(A.jb.Afp);this.TA.Awq(A.jb.Afp);this.TA.Aws(A.
jb.E1);this.TA.Awr(A.jb.E1);this.ID.AZ(0xD);this.ID.H(Xa);this.ID.Awp(A.jb.E1);this.
ID.Awq(A.jb.E1);this.ID.Aws(A.jb.H6);this.ID.Awr(A.jb.H6);this.IE.AZ(0xD);this.IE.
H(Aab);this.IE.Awp(A.jb.H6);this.IE.Awq(A.jb.H6);this.IE.Aws(A.jb.Gg);this.IE.Awr(
A.jb.Gg);this.J(this.Ey,-1);this.J(this.Eh,-1);this.J(this.FU,-1);this.J(this.X0
,-1);this.J(this.TA,-1);this.J(this.ID,-1);this.J(this.IE,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ey._Done();this.Eh._Done();this.FU._Done(
);this.X0._Done();this.TA._Done();this.ID._Done();this.IE._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ey._ReInit();this.Eh._ReInit(
);this.FU._ReInit();this.X0._ReInit();this.TA._ReInit();this.ID._ReInit();this.IE.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ey)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ID)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Cp={Avh:null,AmP:null,AQf:null,Aq8:null,AqR:null,AvB:null,AR:null,Ago:null,Amm:
null,N:null,Bo:null,QO:null,AxF:A.jV,AUH:false,AGE:false,Api:false,Axc:255,LF:false
,KD:false,Qo:false,Ai:function(Ae){var B;C.OU.Ai.call(this,Ae);var G$=((Ae&0x10)===
0x10);var Fr=((Ae&0x20)===0x20);var Iy=((Ae&0x40)===0x40);var GA=this.Bo.Bw;var FN=
A.jb.CK;var GS=A.jb.Text;if(this.Hf){FN=A.jb.Bm;GS=A.jb.Text;}if(!G$){this.Background.
L(A.jb.CS);this.V.L(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(Iy){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fr){this.
Background.L(A.jb.Am0);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GS
);}this.LF=G$;this.KD=Fr;this.Qo=GA;this.Api=Iy;},Qn:function(G){this.An();A.pe(
this.AR,this);},Bwe:function(s){this.Qn(s);},IW:function(G){if(this.QO.Ach)return;
this.An();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Ath:function(s){this.IW(s);},AeR:function(E){if(A.aa0(this.Ago,E))return;this.
Ago=E;},A_d:function(E){if(this.AxF===E)return;this.AxF=E;},Wz:function(E){if(this.
Avh===E)return;this.Avh=E;},WA:function(E){if(this.AmP===E)return;this.AmP=E;},A9V:
function(E){if(this.Axc===E)return;this.Axc=E;},Go:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALj();},A2W:
function(G){},BF0:function(s){this.A2W(s);},Akz:function(E){if(this.Aq8===E)return;
this.Aq8=E;},LX:function(E){if(A.aa0(this.Amm,E))return;this.Amm=E;},Bl5:function(
E){if(this.AqR===E)return;this.AqR=E;},L0:function(E){if(this.AvB===E)return;this.
AvB=E;},Zx:function(E){if(this.AGE===E)return;this.AGE=E;this.ALj();},ALj:function(
){var B;var Qu=this.DK;if(this.AGE)Qu=Qu+A.aaR(A.acf.Colon);if(this.AUH)Qu=Qu+Aac;
this.V.R(Qu);},ATq:function(E){if(this.AUH===E)return;this.AUH=E;this.ALj();},_Init:
function(aArg){C.OU._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BM._Init.call(this.QO={I:this},0);this.__proto__=C.Cp;this.Bo.PO(0);
this.Bo.Wy(50);this.Bo.Ar(false);this.QO.Filter=1;this.Bo.Mx=[this,this.Bwe];this.
QO.BN=[this,this.Ath];this.Avh=A.aaL(A.fl.Ak);this.AmP=A.aaL(A.fl.Ak);this.AQf=A.
aaL(A.ach.E2);this.AqR=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OU;this.
Bo._Done();this.QO._Done();C.OU._Done.call(this);},_ReInit:function(){C.OU._ReInit.
call(this);this.Bo._ReInit();this.QO._ReInit();this.Wz(A.aaL(A.fl.Ak));this.WA(A.
aaL(A.fl.Ak));this.Bl5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OU._Mark.call(
this,D);if((B=this.Avh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmP)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqR)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ago)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dt={Q:null,Am$:null,Anb:null,Ht:null,H2:null,AM:0,Gm:0,F0:100,FC:0,Init:function(
aArg){},IW:function(G){this.FC=1;C.Eg.IW.call(this,G);},Bk:function(aSize){C.Eg.
Bk.call(this,aSize);this.Ht.H([0,aSize[1]-40,40,aSize[1]]);this.H2.H([].concat(A.
abe(aSize,AhP),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fr=((Ae&
0x20)===0x20);var GA=this.Bo.Bw;this.Ht.L(this.V.AQ);this.H2.L(this.V.AQ);this.Ht.
Z((Fr||GA)&&(this.AM>this.Gm));this.H2.Z((Fr||GA)&&(this.AM<this.F0));if(this.FC===
6)this.Ht.L(A.jb.E1);if(this.FC===7)this.H2.L(A.jb.E1);},BeC:function(G){this.FC=
6;this.An();if(this.Bo.Bw){A.pe([this,this.AyJ],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qn:function(G){if(this.FC===6)A.pe([this,this.AyJ],this);if(this.FC===
7)A.pe([this,this.AyK],this);if(this.FC===1)A.pe(this.AR,this);this.FC=0;this.An(
);},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},AcS:function(
s){this.C2(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcS],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcS],E,0);if(!!E)A.pe([this,
this.AcS],this);},BeD:function(G){this.FC=7;this.An();if(this.Bo.Bw){A.pe([this,
this.AyK],this);this.Bo.Ar(false);}this.Bo.Ar(true);},J_:function(G){this.FC=0;}
,AyK:function(s){this.J_(s);},J5:function(G){this.FC=0;},AyJ:function(s){this.J5(
s);},By:function(E){if(E<this.Gm)E=this.Gm;if(E>this.F0)E=this.F0;if(this.AM===E
)return;this.AM=E;this.An();},BaK:function(Aq){this.By(Aq);},F_:function(E){if(this.
Gm===E)return;this.Gm=E;this.An();},EV:function(E){if(this.F0===E)return;this.F0=
E;this.An();},Ue:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BM._Init.call(this.Am$={I:this},0);A.Core.BM._Init.call(this.Anb={
I:this},0);A.acg.Ap._Init.call(this.Ht={I:this},0);A.acg.Ap._Init.call(this.H2={
I:this},0);this.__proto__=C.Dt;this.H(JZ);this.Am$.Filter=6;this.Anb.Filter=7;this.
Background.H(JZ);this.V.H(Aad);this.V.R(Lu);this.Ht.H(AhQ);this.H2.H(Aoc);this.H2.
Cv(1);this.J(this.Ht,0);this.J(this.H2,0);this.Am$.BN=[this,this.BeC];this.Am$.D1=[
this,this.BeC];this.Anb.BN=[this,this.BeD];this.Anb.D1=[this,this.BeD];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.Ht.Aw(A.aaL(A.ach.
Ajr));this.H2.Aw(A.aaL(A.ach.Ajr));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Am$._Done();this.Anb._Done();this.Ht._Done();this.H2._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Am$._ReInit();this.
Anb._ReInit();this.Ht._ReInit();this.H2._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Am$)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Anb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ht)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dn:function(){return-1;},C4:function(aIndex){return-1;},FY:function(
aIndex){return A.jV;},DU:function(A7){return-1;},HH:function(){return-1;},As:function(
E){this.Q=E;},B9:function(Aq){this.As(Aq);},ACQ:function(aIndex){return null;},ACS:
function(aIndex){return 0;},B8:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Io={Axx:null
,BT:null,AG3:A.jV,AVk:A.jV,Aj4:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dt.Ai.call(this,Ae);if(!this.Axx){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVk);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AG3);}}else(B=
this.Axx)?B[1].call(B[0],this):null;},J_:function(G){var F;var BQ=this.AM;C.Dt.J_.
call(this,G);this.By(this.AM+this.Aj4);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J5:function(G){var F;var BQ=this.AM;C.
Dt.J5.call(this,G);this.By(this.AM-this.Aj4);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IM:function(E){if(this.AG3===E)return;
this.AG3=E;this.An();},I9:function(E){if(this.AVk===E)return;this.AVk=E;this.An(
);},AS6:function(E){if(this.Aj4===E)return;this.Aj4=E;},A_a:function(E){if(A.aa0(
this.Axx,E))return;this.Axx=E;},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.CH._Init.call(this.BT={I:this},0);this.__proto__=C.Io;this.H(JZ);this.BT.H(N$);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dt;this.BT._Done();C.Dt._Done.call(this
);},_ReInit:function(){C.Dt._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dt._Mark.call(this
,D);if((B=this.Axx)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Dy:null,HK:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bk:function(
aSize){var B;C.Dt.Bk.call(this,aSize);this.Dy.H([this.Ht.M[2]-10,this.Ht.M[1],this.
H2.M[0]+10,this.Ht.M[3]]);this.Dy.AFe((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.Dy.
Gp,true,null,null);},Ai:function(Ae){var B;C.Dt.Ai.call(this,Ae);var Fr=((Ae&0x20
)===0x20);var GA=this.Bo.Bw;this.Dy.AbF(0,this.Dy.AY-1);this.Ht.Z(Fr||GA);this.H2.
Z(Fr||GA);},C2:function(G){var F;if(!!this.Q&&!!this.AC)this.By(this.AC.DU((F=this.
Q,F[1].call(F[0]))));},J_:function(G){var F;var BQ=this.AM;C.Dt.J_.call(this,G);
this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},J5:function(G){var F;var BQ=this.AM;
C.Dt.J5.call(this,G);this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(E){
var Qt=0;if(E<this.Gm){E=this.F0;Qt=-this.Dy.V$*this.Dy.AY;}if(E>this.F0){E=this.
Gm;Qt=this.Dy.V$;}C.Dt.By.call(this,E);if(!!Qt)this.Dy.F$(Qt);this.Dy.GO(this.AM
);if(this.Dy.Bjc())this.Dy.BoD(false,false);this.Dy.HD(this.Dy.Gp,true,this.HK,null
);},Hg:function(G){var B;var Gd=this.Dy.G1;var Cz=(C.CH.isPrototypeOf(B=this.Dy.
Ci)?B:null);if(!Cz)return;Cz.S(this.V.B7);Cz.AwY(19);Cz.A2(this.V.AmO);Cz.BmY(19
);Cz.Cu(this.V.AqQ);Cz.BmZ(19);Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FY(Gd));
else Cz.R(Xb);Cz.H(A.abK(Cz.M,[this.Dy.V$,(B=this.Dy.M)[3]-B[1]]));},BvS:function(
s){this.Hg(s);},CI:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
F_(0);this.EV(this.AC.Dn()-1);this.Dy.Ju(this.AC.Dn());this.Dy.AbF(0,this.Dy.AY-
1);}},_Init:function(aArg){C.Dt._Init.call(this,aArg);A.Core.Dy._Init.call(this.
Dy={I:this},0);A.acl.Gi._Init.call(this.HK={I:this},0);this.__proto__=C.BW;this.
H(JZ);this.Dy.NZ(C.CH);this.HK.WD(23);this.HK.HM(1);this.HK.Fm(200);this.J(this.
Dy,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dy.Hg=[this,this.BvS
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dt;this.Dy._Done();this.HK.
_Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.
Dy._ReInit();this.HK._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SM={FF:null,OE:null,Dj:null,Au:null,Js:null,HJ:null,Pp:null,VP:null,QX:null,
Yl:null,P1:null,Gt:null,Gs:null,FV:0,A8:0,Ask:false,Bi_:false,Init:function(aArg
){},Ai:function(Ae){C.Dt.Ai.call(this,Ae);this.Ht.Z(false);this.H2.Z(false);var AtQ=
A.jV;if(!!this.Dj){this.Pp.R(this.Au.Format(Aod));this.QX.R(this.Au.Format(AhR));
this.P1.R(this.Au.Format(AhS));}if(this.A8===1){this.HJ.Z(true);this.HJ.H(this.Pp.
M);this.HJ.L(this.V.AQ);this.Pp.L(this.Background.AQ);this.QX.L(this.V.AQ);this.
P1.L(this.V.AQ);AtQ=A.aaR(A.acf.A5z);}else if(this.A8===2){this.HJ.Z(true);this.
HJ.H(this.QX.M);this.HJ.L(this.V.AQ);this.Pp.L(this.V.AQ);this.QX.L(this.Background.
AQ);this.P1.L(this.V.AQ);AtQ=A.aaR(A.acf.He);}else if(this.A8===3){this.HJ.Z(true
);this.HJ.H(this.P1.M);this.HJ.L(this.V.AQ);this.Pp.L(this.V.AQ);this.QX.L(this.
V.AQ);this.P1.L(this.Background.AQ);AtQ=A.aaR(A.acf.Year);}else{this.HJ.Z(false);
this.Pp.L(this.V.AQ);this.Yl.L(this.V.AQ);this.QX.L(this.V.AQ);this.VP.L(this.V.
AQ);this.P1.L(this.V.AQ);}if(AtQ.length>0){if(this.AGE)this.V.R((((this.DK+Rj)+AtQ
)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+Rj)+AtQ
)+String.fromCharCode(0x29));}else this.ALj();},Qn:function(G){if(this.FC===1)A.
pe([this,this.U9],this);else if(this.FC===4)A.pe([this,this.AiD],this);else if(this.
FC===5)A.pe([this,this.Aio],this);C.Dt.Qn.call(this,G);},J_:function(G){switch(this.
A8){case 0:C.Dt.J_.call(this,G);break;case 3:break;default:this.Ads(this);}},J5:
function(G){switch(this.A8){case 0:C.Dt.J5.call(this,G);break;default:this.Ain(this
);}},Adu:function(G){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0])));},Ab7:
function(E){if(A.aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adu],this.Dj
,0);this.Dj=E;if(!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu],this);
},Ui:function(E){if(this.FV===E)return;this.FV=E;this.Au.Initialize(this.FV);this.
An();},Ads:function(G){this.FC=1;this.An();if(this.Bo.Bw){A.pe([this,this.U9],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},Bbg:function(s){this.Ads(s);},U9:function(
G){this.Ex(this.A8+1);},Al1:function(G){this.FC=4;this.An();if(this.Bo.Bw){A.pe([
this,this.AiD],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Al0:function(G){this.
FC=5;this.An();if(this.Bo.Bw){A.pe([this,this.Aio],this);this.Bo.Ar(false);}this.
Bo.Ar(true);},AiD:function(G){var B;var F;var BQ=this.FV;switch(this.A8){case 1:{
if(this.Ask){var ABb=A._NewObject(A.Core.An3,0);ABb.Ki=1;if(this.Au.J(ABb).JN()>
A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Au.GH<this.Au.Zo())this.Au.
Ln(this.Au.GH+1);}break;case 2:{if(this.Ask){var ABb=A._NewObject(A.Core.An3,0);
ABb.Ki=this.Au.Zo();if(this.Au.J(ABb).JN()>A._GetAutoObject(A.Device.Helper).Dv(
))return;}this.Au.Um(this.Au.He+1);if(this.Au.Zo()<this.Au.GH)this.Au.Ln(this.Au.
Zo());}break;case 3:{if(this.Ask){var A1k=A._NewObject(A.Core.Bs,0);A1k.Initialize(
this.Au.JN());A1k.Year+=1;if(A1k.JN()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
Ui(((B=(this.Au.JN()|0))<0)?B+0x100000000:B);if(this.FV!==BQ){if(!!this.Dj)(F=this.
Dj,F[2].call(F[0],this.FV));A.abo(this.Dj,0);}},Aio:function(G){var B;var F;var BQ=
this.FV;if(this.A8===1)this.Au.Ln(this.Au.GH-1);if(this.A8===2){this.Au.Um(this.
Au.He-1);if(this.Au.Zo()<this.Au.GH)this.Au.Ln(this.Au.Zo());}if(this.A8===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.Ui(((B=(this.Au.JN()|
0))<0)?B+0x100000000:B);if(this.FV!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],
this.FV));A.abo(this.Dj,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.G_];(F=this.N,F[1].call(F[
0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=
null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aew));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=[this,this.U9];}break;case 2:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N
,F[1].call(F[0])).CC=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmX
));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.
Ain];(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aew));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=[this,this.U9];}break;case 3:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N
,F[1].call(F[0])).CC=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmX
));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.
Ain];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cm=null;}break;default:this.FF.AkP((F=this.N,F[1].call(F[
0])));}},AFy:function(E){if(this.Ask===E)return;this.Ask=E;},FQ:function(G){this.
Ex(1);},G_:function(G){this.Ex(0);},Ex:function(EO){var F;var AAk=this.A8;if(!this.
A8){this.FF.Ajy((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FV){var BQ=this.FV;
this.Ui(A._GetAutoObject(A.Device.Helper).Dv());if(this.FV!==BQ){if(!!this.Dj)(F=
this.Dj,F[2].call(F[0],this.FV));A.abo(this.Dj,0);}}}this.A8=EO;this.Bi_=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DJ(this);this.Gt.Bw=!!this.A8;this.Gs.Bw=
!!this.A8;if((!!AAk&&!this.A8)&&!!this.OE)A.pe(this.OE,this);this.An();},Ain:function(
G){if(this.A8>1)this.Ex(this.A8-1);},_Init:function(aArg){C.Dt._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Au={I:this},0);A.Core.BM._Init.call(this.Js={I:this}
,0);A.acg.AK._Init.call(this.HJ={I:this},0);A.acg.Text._Init.call(this.Pp={I:this
},0);A.acg.Text._Init.call(this.VP={I:this},0);A.acg.Text._Init.call(this.QX={I:
this},0);A.acg.Text._Init.call(this.Yl={I:this},0);A.acg.Text._Init.call(this.P1={
I:this},0);A.Core.BM._Init.call(this.Gt={I:this},0);A.Core.BM._Init.call(this.Gs={
I:this},0);this.__proto__=C.SM;this.H(UU);this.V.R(Aoe);this.Ht.Z(false);this.H2.
Z(false);this.Js.Filter=1;this.HJ.H(Aof);this.HJ.L(0x55FFFFFF);this.Pp.H(Aog);this.
Pp.I7(true);this.Pp.A6(0x14);this.VP.H(Aoh);this.VP.I7(true);this.VP.A6(0x14);this.
VP.R(Afx);this.QX.H(Ala);this.QX.I7(true);this.Yl.H(Aoi);this.Yl.I7(true);this.Yl.
R(Afx);this.P1.H(AxX);this.P1.I7(true);this.P1.A6(0x11);this.Gt.Filter=4;this.Gt.
Bw=false;this.Gs.Filter=5;this.Gs.Bw=false;this.J(this.HJ,0);this.J(this.Pp,0);this.
J(this.VP,0);this.J(this.QX,0);this.J(this.Yl,0);this.J(this.P1,0);this.Js.BN=[this
,this.Bbg];this.Pp.S(A.aaL(A.fl.EL));this.VP.S(A.aaL(A.fl.EL));this.QX.S(A.aaL(A.
fl.EL));this.Yl.S(A.aaL(A.fl.EL));this.P1.S(A.aaL(A.fl.EL));this.Gt.BN=[this,this.
Al1];this.Gt.D1=[this,this.AiD];this.Gs.BN=[this,this.Al0];this.Gs.D1=[this,this.
Aio];this.FF=A._NewObject(C.Aep,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dt;this.Au._Done();this.Js._Done();this.HJ._Done();this.Pp._Done();this.VP._Done(
);this.QX._Done();this.Yl._Done();this.P1._Done();this.Gt._Done();this.Gs._Done(
);C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.Au._ReInit(
);this.Js._ReInit();this.HJ._ReInit();this.Pp._ReInit();this.VP._ReInit();this.QX.
_ReInit();this.Yl._ReInit();this.P1._ReInit();this.Gt._ReInit();this.Gs._ReInit(
);this.Pp.S(A.aaL(A.fl.EL));this.VP.S(A.aaL(A.fl.EL));this.QX.S(A.aaL(A.fl.EL));
this.Yl.S(A.aaL(A.fl.EL));this.P1.S(A.aaL(A.fl.EL));},_Mark:function(D){var B;C.
Dt._Mark.call(this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OH={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bdv],[B=A._GetAutoObject(A.Device.Device),B.A8t,B.BaR],0);
A.pe([this,this.Bdv],this);},Dn:function(){return 16;},FY:function(aIndex){return this.
LanguageToString.BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(
A.Device.Device).Anz(E);},Bdv:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B8,this.B9],0);},_Init:function(aArg){C.Cn._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OH;this.Cc.Set(0,0);this.Cc.Set(1,1);this.Cc.Set(2,5);this.Cc.
Set(3,3);this.Cc.Set(4,8);this.Cc.Set(5,9);this.Cc.Set(6,7);this.Cc.Set(7,6);this.
Cc.Set(8,10);this.Cc.Set(9,2);this.Cc.Set(10,11);this.Cc.Set(11,12);this.Cc.Set(
12,13);this.Cc.Set(13,14);this.Cc.Set(14,15);this.Cc.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.Cn;this.LanguageToString._Done();C.Cn._Done.
call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Rb={TemperatureUnitToString:
null,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FY:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Aw2(E);}
,Init:function(aArg){var B;A.zX([this,this.Bf4],[B=A._GetAutoObject(A.Device.Device
),B.Arz,B.Atg],0);A.pe([this,this.Bf4],this);},Bf4:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B8,this.B9],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Rb;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AU0={Ajw:null,AcB:null,Kw:null,AP:null,A_:null,Bk:function(aSize){C.Ba.Bk.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kw.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajw.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.AcB.H(this.Ajw.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Kw.L(this.V.AQ);},Init:function(aArg){},Cf:function(Ad){if(!this.AX
)return;this.Hn=Ad;if(!!this.AX){var Alz=this.AX.HF(Ad,6);var ApX=this.AX.CE(Ad,
7);var At6=this.AX.I2(Ad,9);this.T(A._GetAutoObject(A.acj.KJ).ACM(Alz));this.Kw.
R(A._GetAutoObject(A.acj.KJ).A6i(Alz));this.AcB.R(A._GetAutoObject(A.Device.Converter
).Ak0(ApX));this.AcB.L(A._GetAutoObject(A.acj.Assessment).Xw(At6));this.Ajw.L(A.
_GetAutoObject(A.acj.Assessment).Qk(At6));this.An();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Ajw={I:this},0);A.acg.Text._Init.
call(this.AcB={I:this},0);A.acg.Text._Init.call(this.Kw={I:this},0);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AU0;this.V.H(O3);this.AcB.L(A.jb.Text);this.Kw.R(Rk);this.Kw.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A_.H(AxY);this.A_.L(A.jb.Bc);this.J(this.Ajw,0);this.J(this.AcB
,0);this.J(this.Kw,0);this.J(this.AP,0);this.J(this.A_,0);this.AcB.S(A.aaL(A.fl.
Af));this.Kw.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajw._Done();this.AcB._Done();this.Kw._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajw._ReInit(
);this.AcB._ReInit();this.Kw._ReInit();this.AP._ReInit();this.A_._ReInit();this.
AcB.S(A.aaL(A.fl.Af));this.Kw.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.Ga={AX:null,AR:null,Cr:null,AD:
null,Afg:null,QD:null,KL:A.jV,Lh:null,AVm:true,Hg:function(G){var B;var Gd=this.
AD.G1;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ci)?B:null);if(!Aa)return;Aa.Zs(this.
AX);Aa.Cf(Gd);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GK]));
},NZ:function(E){if(E===this.Lh)return;this.Lh=E;this.AD.NZ(E);},Zs:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Cf],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Cf],E,0);A.pe([this,this.Cf],this);},Cf:function(G){if(this.AVm===
false)return;if(!!this.AX){this.AD.Ju(this.AX.Ca());this.AD.AbF(0,this.AD.AY-1);
}else this.AD.Ju(0);if((this.AD.AY>0)&&(this.FH()<0))this.GO(0);if(this.FH()>=this.
AD.AY){this.GO(0);this.AD.F$(0);}if(this.AD.AY<=0){this.QD.Z(true);this.GO(-1);}
else{this.QD.Z(false);this.ABA(null,null);}},Fg:function(G){var B;this.Afg.Mu(this.
AD.GK*this.AD.AY);this.Afg.Mw((B=this.AD.M)[3]-B[1]);this.Afg.Mv(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cr.CO){case 4:if(this.FH()>0)this.GO(
this.FH()-1);break;case 5:if(this.FH()<(this.AD.AY-1))this.GO(this.FH()+1);break;
default:this.Cr.NH=true;}this.AD.HD(this.FH(),true,null,null);}else if((this.Cr.
CO!==4)&&(this.Cr.CO!==5))this.Cr.NH=true;},Zu:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbF(0,this.AD.AY);},GO:function(E){this.AD.GO(E);this.AD.HD(E,
true,null,null);},FH:function(){return this.AD.Gp;},Dz:function(E){if(this.KL===
E)return;this.KL=E;this.QD.R(E);},ABA:function(AcV,E5){this.AD.ABA(AcV,E5);},ATF:
function(E){if(this.AVm===E)return;this.AVm=E;if(E)A.pe([this,this.Cf],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afg={I:this},
0);A.acg.Text._Init.call(this.QD={I:this},0);this.__proto__=C.Ga;this.H(UV);this.
Lh=C.Ba;this.Cr.Filter=147;this.AD.AZ(0x3F);this.AD.H(UV);this.AD.Ae3(40);this.Afg.
AZ(0x3A);this.Afg.H(AsU);this.QD.AZ(0x3F);this.QD.H(AxZ);this.QD.Hh(10);this.QD.
KR(true);this.QD.A6(0xA);this.QD.L(A.jb.Text);this.J(this.AD,0);this.J(this.Afg,
0);this.J(this.QD,0);this.Cr.BN=[this,this.DE];this.Cr.D1=[this,this.DE];this.AD.
El=[this,this.Fg];this.AD.Hg=[this,this.Hg];this.QD.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.P;this.Cr._Done();this.AD._Done();this.Afg._Done();this.
QD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Cr._ReInit();this.AD._ReInit();this.Afg._ReInit();this.QD._ReInit();this.
QD.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hn:-1,CP:function(){this.Cf(this.Hn);},Ai:function(Ae){var B;C.Cp.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hn%2)===1)this.Background.L(A.
jb.CK);else this.Background.L(A.jb.CS);}},Zs:function(E){if(this.AX===E)return;this.
AX=E;},Cf:function(Ad){A.ab5("%s",Ax0);},_Init:function(aArg){C.Cp._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Cp._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GW={Bg:null,Fy:null
,DP:null,FG:null,VY:null,Kg:null,KL:A.jV,AT2:0,AT3:0,Afh:false,CP:function(){if(
A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.Device
).Ds(0);A.pe([this,this.Baw],this);}},Init:function(aArg){var B;A.zX([this,this.
Bea],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AIL],0);A.zV([this,this.Af7],A.
_GetAutoObject(A.Device.Device).Am,0);A.zV([this,this.AcG],A._GetAutoObject(A.Device.
Device).Am,0);A.zX([this,this.BAA],[B=A._GetAutoObject(A.Device.Helper),B.UY,B.U1
],0);A.pe([this,this.AcG],this);A.pe([this,this.Bba],this);A.pe([this,this.Axs],
this);},Ww:function(G){this.Agp();var O;for(O=this.Kg.Dn()-1;O>=0;O=O-1)switch(this.
Kg.C4(O)){case 0:this.AdN(A.aaR(A.acf.A4J),[this,this.Bnk],0);break;case 14:this.
AdN(A.aaR(A.acf.BgJ),[this,this.Bnl],14);break;case 1:this.AdN(A.aaR(A.acf.Temperature
),[this,this.ATH],1);break;case 2:this.AdN(A.aaR(A.acf.Rating),[this,this.ATG],2
);break;case 3:this.AdN(A.aaR(A.acf.Afq),[this,this.ATI],3);break;default:A.ab5(
"%s",Ax1);}A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.BhG
));A._GetAutoObject(A.Device.Device).Ds(6);},Baw:function(s){this.Ww(s);},DE:function(
G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);var AfT=this.Kg.DU(A._GetAutoObject(
A.Device.Device).Kg);if(this.Afh)return;switch(D5.CO){case 6:{AfT=AfT-1;if(AfT<0
)AfT=this.Kg.Dn()-1;A._GetAutoObject(A.Device.Device).Zq(this.Kg.C4(AfT));}break;
case 7:{AfT=AfT+1;if(AfT>=this.Kg.Dn())AfT=0;A._GetAutoObject(A.Device.Device).Zq(
this.Kg.C4(AfT));}break;default:D5.NH=true;}},CF:function(G){if(this.DP.AzV()){this.
DP.Ac4();if(this.DP.AzV()===false)this.Bg.ATF(true);return;}else if(this.Afh)this.
AAV(this);if(!!this.Bg)this.Bg.ATF(true);},E3:function(G){if(!!this.Bg)this.Bg.ATF(
false);},Axs:function(G){var B;if(!!this.Bg)this.HN(this.Bg);this.Bg=A._NewObject(
C.AMw,0);this.Bg.H(Aoj);this.Bg.Zs(A._GetAutoObject(A.Device.Device).Am);this.Bg.
Zu([this,this.AIX]);if(!!this.Fy)this.Bg.A9f([B=this.Fy,B.A8M,B.A98]);this.A3W(this
);this.J(this.Bg,0);if(this.Afh===false)this.Bb(this.Bg);this.Bea(this);this.Boo(
this);},A9c:function(G){A._GetAutoObject(A.Device.Device).Ds(0);this.Dq(this.A6v(
));this.Ej.AR=[this,this.AIX];this.ALo(this);this.Ej.Ar(true);this.Bb(this.Ej);this.
Afh=true;},Bj5:function(G){var B;A._GetAutoObject(A.Device.Device).Ds(0);if(!this.
Bg)return;var Aa=(C.ABZ.isPrototypeOf(B=this.Bg.AD.BiM(this.Bg.AD.Gp))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).HL(Aa.Hn);else A._GetAutoObject(A.Device.
Helper).W.Hi();this.Agc();},AlZ:function(G){var F;if(!this.FG)this.A5M(this);else
switch((F=this.FG,F[1].call(F[0]))){case 0:this.A5M(this);break;case 1:this.BhH(
this);break;case 9:this.A5N(this);break;case 4:this.A5P(this);break;case 6:this.
A5S(this);break;case 8:this.ANX(this);break;case 2:this.A5W(this);break;case 3:this.
BhI(this);break;case 7:this.BhJ(this);break;case 5:this.BhK(this);break;case 10:
this.BhM(this);break;case 11:this.A5O(this);break;case 12:this.A5V(this);break;case
13:this.A5X(this);break;case 14:this.A5Q(this);break;case 18:this.A5R(this);break;
case 15:this.A5T(this);break;case 16:this.A5Y(this);break;case 17:this.A5U(this);
break;default:A.ab5("%s%e",Afy,(F=this.FG,F[1].call(F[0])));}},AIX:function(s){this.
AlZ(s);},Bld:function(G){this.Dq(C.Km);this.Ej.AR=null;this.Afh=false;this.AcG(this
);this.Bfw();this.N.TW.Dr(255);this.N.TX.Dr(255);this.Bb(this.Bg);this.Ej.Ar(false
);},Anl:function(G){A._GetAutoObject(C.A$).Fv();},Dz:function(E){if(this.KL===E)
return;this.KL=E;this.A3W(this);},Abr:function(){switch(A._GetAutoObject(A.Device.
Device).Kg){case 14:return C.AM7;case 2:return C.AM9;case 1:return C.AM_;case 3:
return C.ANa;case 0:case 8:case 9:case 10:case 4:case 5:case 6:return C.Aqv;case
7:return C.ABY;case 12:return C.AB1;case 11:return C.ABX;case 13:return C.AB0;default:
throw new Error(Aok);}},Abs:function(){switch(A._GetAutoObject(A.Device.Device).
Kg){case 14:return C.APz;case 2:return C.ADi;case 1:return C.APB;case 3:return C.
APD;case 4:return C.ADe;case 0:case 8:case 9:case 10:case 5:case 6:return C.Aq2;
case 7:return C.ADg;case 12:return C.ADh;case 11:return C.ADf;case 13:return C.ADj;
default:throw new Error(Aok);}},Bea:function(G){this.ATj(A._GetAutoObject(A.Device.
Device).Kg);if(!!this.Bg){this.Bg.NZ(this.Abr());this.Bot(this);}},Bot:function(
G){var B;if(!!this.Fy)this.HN(this.Fy);this.Fy=(C.Dc.isPrototypeOf(B=A._NewObject(
this.Abs(),0))?B:null);this.Fy.H(IR);if(!!this.Bg)this.Bg.A9f([B=this.Fy,B.A8M,B.
A98]);this.J(this.Fy,0);},Bj3:function(G){this.Q6(this);A._GetAutoObject(A.Device.
Device).Ds(0);},ATH:function(G){A._GetAutoObject(A.Device.Device).Zq(1);},ATG:function(
G){A._GetAutoObject(A.Device.Device).Zq(2);},ATI:function(G){A._GetAutoObject(A.
Device.Device).Zq(3);},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A.
_GetAutoObject(A.Device.Helper).Mo());},Bba:function(s){this.Q6(s);},HO:function(
G){if(this.Afh){this.ALo(this);return;}this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(
A.ach.ADC));this.N.C6(A.aaL(A.ach.Options));this.N.CC=[this,this.Anl];this.N.Cl=[
this,this.A9c];this.N.Cm=[this,this.Baw];this.N.Hu(A.jV);this.N.FJ(A.jV);this.N.
CV(A.jV);if(!A._GetAutoObject(A.Device.Device).Am.Ca()){this.N.I4.Dr(100);this.N.
Cl=null;}else this.N.I4.Dr(255);},AyI:function(s){this.HO(s);},AdN:function(Aia,
Aib,AJk){A._GetAutoObject(C.BS).ABz(Aia,Aib,[this,this.A8G,this.ATj],AJk);},Af7:
function(G){this.A3W(this);if(this.Afh)A.pe([this,this.ALo],this);},Agc:function(
){A._GetAutoObject(C.A$).Cg(9);},A3W:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).Am.QF()||!A._GetAutoObject(A.Device.Device).Am.Filter)this.Bg.Dz(
A.aaR(A.acf.AEh));else if(A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(
A.Device.Device).Am.Filter))this.Bg.Dz(this.KL);else if(!A._GetAutoObject(A.Device.
Device).Am.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).ACV(A._GetAutoObject(
A.Device.Device).Am.Filter)===1)this.Bg.Dz(A.aaR(A.acf.AN7));else this.Bg.Dz(A.aaR(
A.acf.AN6));}else this.Bg.Dz(A.aaR(A.acf.AR3));},AEH:function(G){var F;if(!!this.
FG)(F=this.FG,F[2].call(F[0],0));},AwJ:function(E){if(A.aaZ(this.FG,E))return;if(
!!this.FG)A.z$([this,this.A0o],this.FG,0);this.FG=E;if(!!E)A.zX([this,this.A0o],
this.FG,0);if(!!E)A.pe([this,this.A0o],this);},AEN:function(G){var F;if(!!this.FG
)(F=this.FG,F[2].call(F[0],1));},AwO:function(G){var F;if(!!this.FG)(F=this.FG,F[
2].call(F[0],2));},ATn:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],
3));},ATB:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],7));},ATC:function(
G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],5));},A5W:function(G){if(!this.Bg
)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(this.Bg.FH());this.DP.
Qi(1);}},IY:function(Aia,Aib,AoZ){A._GetAutoObject(C.BS).ABz(Aia,Aib,[this,this.
A8H,this.ATk],AoZ);},Bln:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0
],4));},A5P:function(G){if(!this.Bg)return;if(this.M8()){A._GetAutoObject(A.Device.
Helper).HL(this.Bg.FH());this.DP.BA3();}},Blo:function(G){var F;if(!!this.FG)(F=
this.FG,F[2].call(F[0],6));},A5S:function(G){if(!this.Bg)return;if(this.M8()){A.
_GetAutoObject(A.Device.Helper).HL(this.Bg.FH());this.DP.BA4();}},ANX:function(G
){if(!this.Bg)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(this.Bg.
FH());this.DP.Qi(1024);}},BmB:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(
F[0],8));},Aku:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],9));},BhI:
function(G){if(!this.Bg)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(
this.Bg.FH());this.DP.Qi(2);}},A5M:function(G){if(!this.Bg)return;if(this.M8()){
A._GetAutoObject(A.Device.Helper).HL(this.Bg.FH());if(A._GetAutoObject(A.Device.
Helper).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A9(66,true,A.jV,0,null);else this.BAN();}},BhH:function(G){if(!this.
Bg)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(this.Bg.FH());this.
DP.Qi(16);}},BAN:function(){A._GetAutoObject(C.A$).Cg(94);},BhJ:function(G){if(!
this.Bg)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(this.Bg.FH());
this.DP.Qi(4);}},BhK:function(G){if(!this.Bg)return;if(this.M8()){A._GetAutoObject(
A.Device.Helper).HL(this.Bg.FH());this.DP.Qi(8);}},A5N:function(G){var B;if(!this.
Bg)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(this.Bg.FH());if(this.
Afh){A.zX([this,this.AAm],[B=this.DP,B.Ans,B.Jv],0);this.AAV(this);}this.DP.Ac4(
);}},AL9:function(Aia,Aib,BxQ){A._GetAutoObject(C.BS).BgE(Aia,Aib,BxQ);},ALo:function(
G){this.N.Hu(A.jV);this.N.CV(A.jV);this.N.CY(A.aaL(A.ach.Aev));this.N.CC=[this,this.
Bld];this.N.TW.Dr(100);this.N.TX.Dr(100);var Ge=A._GetAutoObject(A.Device.Device
).Am.Ca();if(Ge<=0){this.N.Cs(null);this.N.C6(null);this.N.Cl=null;this.N.Cm=null;
this.N.ZC=false;this.N.ZD=false;}else if(Ge===1){this.N.Cs(null);this.N.C6(A.aaL(
A.ach.Aew));this.N.Cl=null;this.N.Cm=[this,this.AIX];this.N.ZC=false;this.N.ZD=false;
}else{this.N.Cs(A.aaL(A.ach.Aq7));this.N.C6(A.aaL(A.ach.Arc));this.N.Cl=[this,this.
A3g];this.N.Cm=[this,this.A3h];this.N.ZC=true;this.N.ZD=true;}},A3g:function(G){
if(!this.Bg)return;if(this.Bg.FH()<(A._GetAutoObject(A.Device.Device).Am.Ca()-1)
)this.Bg.GO(this.Bg.FH()+1);},A3h:function(G){if(!this.Bg)return;if(this.Bg.FH()>
0)this.Bg.GO(this.Bg.FH()-1);},Boo:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).Am.LS(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bg.GO(Bf);A.ab5("%s",Aol);}}},M8:function(){return this.
Bg.FH()>=0;},Akh:function(){return A._GetAutoObject(A.Device.Device).Am.Ca()>5;}
,Agp:function(){this.BgF();A._GetAutoObject(C.BS).Qx(A.aaR(A.acf.AUp),[this,this.
A9c]);A._GetAutoObject(C.BS).FT();},AcG:function(G){if(this.Afh)this.ALo(this);else
this.HO(this);},AAV:function(G){var aFilter=A._GetAutoObject(A.Device.Device).Am.
Filter.E8();var AyX=aFilter.DL(1,4);if(!!AyX){aFilter.Nh(AyX);A._GetAutoObject(A.
Device.Device).Am.Bl(aFilter);if(!!this.Bg)this.Bg.GO(0);}},BF4:function(s){this.
AAV(s);},AAm:function(G){var B;if(!this.DP.Gu&&this.Afh){A.z$([this,this.AAm],[B=
this.DP,B.Ans,B.Jv],0);this.AAV(this);}},Bnc:function(G){var F;if(!!this.FG)(F=this.
FG,F[2].call(F[0],10));},BhM:function(G){if(!this.Bg)return;if(this.M8()){A._GetAutoObject(
A.Device.Helper).HL(this.Bg.FH());this.DP.Qi(256);}},A28:function(G){var F;this.
ATk((F=this.FG,F[1].call(F[0])));A.pe([this,this.AyI],this);},A0o:function(s){this.
A28(s);},Blk:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],11));},A5O:
function(G){if(!this.Bg)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(
this.Bg.FH());this.DP.Qi(4096);}},A5V:function(G){if(!this.Bg)return;if(this.M8(
)){A._GetAutoObject(A.Device.Helper).HL(this.Bg.FH());this.DP.Qi(16384);}},A5X:function(
G){if(!this.Bg)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(this.Bg.
FH());this.BAO();}},BAO:function(){A._GetAutoObject(C.A$).Aho(75);},A5Q:function(
G){if(!this.Bg)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(this.Bg.
FH());this.DP.Qi(32768);}},A5T:function(G){if(!this.Bg)return;if(this.M8()){A._GetAutoObject(
A.Device.Helper).HL(this.Bg.FH());this.DP.Qi(65536);}},A5Y:function(G){if(!this.
Bg)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(this.Bg.FH());this.
DP.Qi(131072);}},BgF:function(){if(!A._GetAutoObject(A.Device.Device).Am.Filter||
A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(A.Device.Device).Am.Filter
))A._GetAutoObject(C.BS).XO(A.aaR(A.acf.AB4));else A._GetAutoObject(C.BS).Qx(A.aaR(
A.acf.AB4),[this,this.Bj3]);A._GetAutoObject(C.BS).Qx(A.aaR(A.acf.AkS),[this,this.
Bj5]);A._GetAutoObject(C.BS).FT();},A5U:function(G){if(!this.Bg)return;if(this.M8(
)){A._GetAutoObject(A.Device.Helper).HL(this.Bg.FH());this.DP.Qi(128);}},BAA:function(
G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Cf],this);},A5R:function(G){if(!this.
Bg)return;if(this.M8()){A._GetAutoObject(A.Device.Helper).HL(this.Bg.FH());this.
DP.Qi(524288);}},BhL:function(G){if(!this.Bg)return;if(this.M8()){A._GetAutoObject(
A.Device.Helper).HL(this.Bg.FH());this.DP.Qi(262144);}},ATj:function(E){if(this.
AT2===E)return;this.AT2=E;A.abo([this,this.A8G,this.ATj],0);},ATk:function(E){if(
this.AT3===E)return;this.AT3=E;A.abo([this,this.A8H,this.ATk],0);},A6v:function(
){return C.Yu;},Bfw:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).Am.Filter){Filter=A._GetAutoObject(A.Device.Device).Am.Filter.E8(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Nh(FilterCriterion);A._GetAutoObject(A.Device.
Device).Am.Bl(Filter);}},Bnk:function(G){A._GetAutoObject(A.Device.Device).Zq(0);
},Bnl:function(G){A._GetAutoObject(A.Device.Device).Zq(14);},A8G:function(){return this.
AT2;},A8H:function(){return this.AT3;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADi._Init.call(this.VY={I:this},0);C.Kg._Init.call(this.Kg={I:this},0);
this.__proto__=C.GW;this.Background.H(Cd);this.N.Z(true);this.N.ON(true);this.N.
OO(true);this.Ej.A9G(A.jb.CS);this.Ej.A9H(A.jb.Text);this.Dq(C.Km);this.VY.H(IR);
this.KL=A.aaR(A.acf.AEh);this.J(this.VY,0);this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.VY._Done();this.Kg._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.VY._ReInit();
this.Kg._ReInit();this.Dz(A.aaR(A.acf.AEh));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Fy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.FG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kg)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ABZ={AP:null,A_:null,UF:null,Acz:
null,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UF.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A_.H([
this.UF.M[2]-1,0,this.UF.M[2]+1,aSize[1]]);this.Acz.H([this.UF.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UF.L(this.V.AQ);this.Acz.L(this.
V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){this.T(this.
AX.CE(Ad,1).toFixed());this.UF.R(this.AX.CE(Ad,2).toFixed());this.Acz.R(this.AX.
CE(Ad,3).toFixed());this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);
A.acg.Text._Init.call(this.UF={I:this},0);A.acg.Text._Init.call(this.Acz={I:this
},0);this.__proto__=C.ABZ;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.UF.L(A.jb.Text
);this.Acz.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,0);this.J(this.UF,0);this.
J(this.Acz,0);this.UF.S(A.aaL(A.fl.Af));this.Acz.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.UF.
_Done();this.Acz._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A_._ReInit();this.UF._ReInit();this.Acz._ReInit(
);this.UF.S(A.aaL(A.fl.Af));this.Acz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad6={Oy:null,SN:null,Mi:null,Init:function(aArg){var B;A.zX([this,this.A2O],[
B=A._GetAutoObject(A.Device.Device),B.Av6,B.AyA],0);A.zX([this,this.Adt],[B=A._GetAutoObject(
A.Device.Device),B.Av3,B.Ayz],0);A.pe([this,this.Adt],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SN.R(A._GetAutoObject(A.Device.Device).Aa3.toFixed()+Xc
);this.Oy.Z(A._GetAutoObject(A.Device.Device).Amz);},Adt:function(G){this.An();}
,MT:function(G){A._GetAutoObject(C.A$).Fv();},A2O:function(G){if(A._GetAutoObject(
A.Device.Device).Amz===false){this.Oy.Z(false);A._GetAutoObject(C.A$).Fv();}else
this.Oy.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oy={I:this},0);A.acg.Text._Init.call(this.SN={I:this},0);C.Mi._Init.call(
this.Mi={I:this},0);this.__proto__=C.Ad6;var B;this.Background.L(A.jb.CS);this.N.
Z(true);this.N.CV(A.aaR(A.acf.Ok));this.Oy.H(Aom);this.Oy.R(A.aaR(A.acf.Oy));this.
Oy.L(A.jb.Text);this.Oy.Z(false);this.SN.H(AsV);this.SN.R(AsW);this.SN.L(A.jb.Text
);this.Mi.H(AsX);this.J(this.Oy,0);this.J(this.SN,0);this.J(this.Mi,0);this.N.Cm=[
this,this.MT];this.Oy.S(A.aaL(A.fl.Af));this.SN.S(A.aaL(A.fl.Af));this.Mi.As([B=
A._GetAutoObject(A.Device.Device),B.Av3,B.Ayz]);this.Mi.A9X([B=A._GetAutoObject(
A.Device.Device),B.Av6,B.AyA]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oy._Done();this.SN._Done();this.Mi._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oy._ReInit();this.SN._ReInit();this.Mi._ReInit(
);this.N.CV(A.aaR(A.acf.Ok));this.Oy.R(A.aaR(A.acf.Oy));this.Oy.S(A.aaL(A.fl.Af)
);this.SN.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mi={Ad1:null,Ad2:null,Kc:function(G){var F;if(!!this.Q){this.A1Y();var Ac8=(
F=this.Q,F[1].call(F[0]));if(Ac8>20)this.Ou.L(A.jb.E1);else this.Ou.L(A.jb.Gg);this.
Ou.L((this.Ou.AQ&0x00FFFFFF)|(this.AlH(Ac8,0,20)<<24));this.TB.L((this.TB.AQ&0x00FFFFFF
)|(this.AlH(Ac8,21,40)<<24));this.TC.L((this.TC.AQ&0x00FFFFFF)|(this.AlH(Ac8,41,
60)<<24));this.Ad1.L((this.Ad1.AQ&0x00FFFFFF)|(this.AlH(Ac8,61,80)<<24));this.Ad2.
L((this.Ad2.AQ&0x00FFFFFF)|(this.AlH(Ac8,81,100)<<24));}},A1Y:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U4=this.Ad2;else if((F=this.Q,F[
1].call(F[0]))>60)this.U4=this.Ad1;else if((F=this.Q,F[1].call(F[0]))>40)this.U4=
this.TC;else if((F=this.Q,F[1].call(F[0]))>20)this.U4=this.TB;else this.U4=this.
Ou;}else this.U4=null;},_Init:function(aArg){C.Ow._Init.call(this,aArg);A.acg.AK.
_Init.call(this.Ad1={I:this},0);A.acg.AK._Init.call(this.Ad2={I:this},0);this.__proto__=
C.Mi;this.H(Aon);this.NO.H(Aon);this.Ou.H(Aoo);this.TB.H(AsY);this.TC.H(Ax2);this.
Ad1.H(Ax3);this.Ad1.L(A.jb.E1);this.Ad2.H(Ax4);this.Ad2.L(A.jb.E1);this.J(this.Ad1
,0);this.J(this.Ad2,0);this.NO.Aw(A.aaL(A.ach.AMR));},_Done:function(){this.__proto__=
C.Ow;this.Ad1._Done();this.Ad2._Done();C.Ow._Done.call(this);},_ReInit:function(
){C.Ow._ReInit.call(this);this.Ad1._ReInit();this.Ad2._ReInit();},_Mark:function(
D){var B;C.Ow._Mark.call(this,D);if((B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUV={N6:null,Lp:null,Ak6:null,ZY:null,ZX:null,CP:function(){this.An();},Init:
function(aArg){var B;A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.Device),B.
ASF,B.AZ$],0);A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.Device),B.ASI,B.
A0b],0);A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.Device),B.A8W,B.Ba1],0
);A.pe([this,this.ApN],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GE(this
);this.ABn(this);this.BBW(this);this.DJ(this);},BAe:function(G){A._GetAutoObject(
A.Device.Device).AsE();},ApN:function(G){this.An();},GE:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZY.Z(false);break;case 4:{var A3z;if(!A._GetAutoObject(A.Device.Device).Afm)A3z=
0;else A3z=((A._GetAutoObject(A.Device.Device).AxI*100)/A._GetAutoObject(A.Device.
Device).Afm)|0;this.ZY.By(A3z);this.ZY.Z(true);}break;default:A.ab5("%s%e",AsZ,A.
_GetAutoObject(A.Device.Device).SyncState);}},BBW:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CK);this.Lp.L(A.jb.Text);this.N6.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gg);this.Lp.L(A.jb.Bm);this.N6.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",AsZ,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CY(null);this.N.CC=null;this.N.CV(A.jV);this.N.Cm=null;}break;
case 7:{this.N.CY(null);this.N.CC=null;this.N.CV(A.aaR(A.acf.Ok));this.N.Cm=[this
,this.BAe];}break;default:A.ab5("%s%e",AsZ,A._GetAutoObject(A.Device.Device).SyncState
);}},ABn:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lp.R(A.aaR(A.acf.Bpe));break;case 1:this.Lp.R(A.aaR(A.acf.Bpb));break;
case 2:this.Lp.R(A.aaR(A.acf.Bo_));break;case 3:this.Lp.R(A.aaR(A.acf.Bpc));break;
case 4:this.Lp.R((A.aaR(A.acf.Bpa)+Ax5)+A._GetAutoObject(A.Device.Helper).Nj(A._GetAutoObject(
A.Device.Helper).Nj(A.aaR(A.acf.BnR),P7,A._GetAutoObject(A.Device.Device).AxI.toFixed(
)),Ax6,A._GetAutoObject(A.Device.Device).Afm.toFixed()));break;case 5:this.Lp.R(
A.aaR(A.acf.Bpd));break;case 7:this.Lp.R(A.aaR(A.acf.Bo$));break;default:A.ab5("%s%e"
,AsZ,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CH._Init.call(this.N6={I:this},0);C.CH._Init.call(this.Lp={I:this
},0);A.acg.Ap._Init.call(this.Ak6={I:this},0);A.acr.ADl._Init.call(this.ZY={I:this
},0);A.acr.ADm._Init.call(this.ZX={I:this},0);this.__proto__=C.AUV;this.N.Z(true
);this.N6.H(AVQ);this.N6.R(A.aaR(A.acf.N6));this.Lp.AZ(0x3F);this.Lp.H(AVR);this.
Lp.A6(0x12);this.Ak6.H(AVS);this.Ak6.L(A.jb.AV);this.ZY.H(AVT);this.ZY.Ar(false);
this.ZY.By(0);this.ZX.Bm8(0);this.ZX.A_j(0);this.ZX.A_h(A.jb.AV);this.ZX.A_g(0);
this.ZX.AFY(AHh);this.J(this.N6,0);this.J(this.Lp,0);this.J(this.Ak6,0);this.J(this.
ZY,0);this.N6.S(A.aaL(A.fl.EL));this.N6.A2(A.aaL(A.fl.Af));this.N6.Cu(A.aaL(A.fl.
Ak));this.Lp.S(A.aaL(A.fl.Af));this.Lp.A2(A.aaL(A.fl.Ak));this.Lp.Cu(A.aaL(A.fl.
Bi));this.Ak6.Aw(A.aaL(A.ach.AQL));this.ZY.OnSetAppearance(this.ZX);this.ZX.A_i(
A.aaL(A.ach.NS));this.ZX.A_f(A.aaL(A.ach.NS));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N6._Done();this.Lp._Done();this.Ak6._Done();this.ZY._Done(
);this.ZX._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N6._ReInit();this.Lp._ReInit();this.Ak6._ReInit();this.ZY._ReInit();this.
ZX._ReInit();this.N6.R(A.aaR(A.acf.N6));this.N6.S(A.aaL(A.fl.EL));this.N6.A2(A.aaL(
A.fl.Af));this.N6.Cu(A.aaL(A.fl.Ak));this.Lp.S(A.aaL(A.fl.Af));this.Lp.A2(A.aaL(
A.fl.Ak));this.Lp.Cu(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Aq0={_Init:function(aArg){C.ADb._Init.call(this,aArg
);this.__proto__=C.Aq0;this.A9J(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cc:A.abi(3,0,{0:2,2:1}),Dn:function(
){return 3;},C4:function(aIndex){if(aIndex>=3)return-1;return this.Cc.Get(aIndex
);},FY:function(aIndex){return this.GenderToString.BH(this.C4(aIndex));},DU:function(
A7){var O=0;while(O<3){if(this.Cc.Get(O)===A7)return O;O=O+1;}return-1;},HH:function(
){var O=0;var max=-1;while(O<3){if(this.Cc.Get(O)>max)max=this.Cc.Get(O);O=O+1;}
return max;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal)this.Animal.JP(
E);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.AfY],[B=this.Animal,B.Wu,B.JP],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AfY],[B=this.Animal,B.Wu,B.JP],0);A.pe([this,this.AfY],this);},AfY:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B8,
this.B9],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cc=[]).__proto__=C.Gender.Cc;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cc:A.abi(4,0,{1:1,2:2,3:3}),Dn:function(){return 4;},C4:function(aIndex){if(
aIndex>=4)return-1;return this.Cc.Get(aIndex);},FY:function(aIndex){return this.
BirthTypeToString.BH(this.C4(aIndex));},DU:function(A7){var O=0;while(O<4){if(this.
Cc.Get(O)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(
O<4){if(this.Cc.Get(O)>max)max=this.Cc.Get(O);O=O+1;}return max;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akv(E);},A1c:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B8,this.
B9],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1c],[B=this.Animal,B.ASj,B.Akv],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1c],[B=this.Animal,B.ASj,B.Akv],0);A.pe([this,this.A1c],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cc=[]).__proto__=C.BirthType.Cc;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acq:null,Dn:
function(){return A._GetAutoObject(A.Device.Helper).AdW.MB;},C4:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdW.MB)return-1;return A._GetAutoObject(
A.Device.Helper).AdW.Get(aIndex);},FY:function(aIndex){return this.Acq.BH(this.C4(
aIndex));},DU:function(A7){var O=0;while(O<A._GetAutoObject(A.Device.Helper).AdW.
MB){if(A._GetAutoObject(A.Device.Helper).AdW.Get(O)===A7)return O;O=O+1;}return-
1;},HH:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UC.
MB){if(A._GetAutoObject(A.Device.Helper).UC.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UC.Get(O);O=O+1;}return max;},As:function(E){C.AC.As.call(this,E);if(!!this.
Animal)this.Animal.EC(E);},A07:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B8,this.B9],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A07],[B=this.Animal,B.PM,B.EC],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A07],[B=this.Animal,B.PM,B.EC],0);A.pe([
this,this.A07],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acq={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acq._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acq._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUB={Init:function(aArg){var B;A.pe([this,this.AfC],this);A.zX([this,this.AfC
],[B=A._GetAutoObject(A.Device.Device),B.Arz,B.Atg],0);},A3E:function(G){A._GetAutoObject(
A.Device.Device).A9(38,true,A.jV,0,[this,this.Bbh]);},A3e:function(G){var B;var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(
A.Device.Device).Asq(this);},A1w:function(G){var F;if(this.A8===1){var BQ=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlP)this.D7=this.AlP;if(this.D7<A._GetAutoObject(
A.Device.Device).AcF)this.D7=A._GetAutoObject(A.Device.Device).AcF;if(this.DX!==
BQ){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.D7));A.abo(this.JS,0);}}if(this.
A8===2){var BQ=this.DX;this.DX=this.DX-10;if(this.DX<this.D7)this.DX=this.D7;if(
this.DX!==BQ){if(!!this.JR)(F=this.JR,F[2].call(F[0],this.DX));A.abo(this.JR,0);
}}this.DJ(this);this.An();},A17:function(G){var F;if(this.A8===1){var BQ=this.D7;
this.D7=this.D7+10;if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BQ){if(!!this.
JS)(F=this.JS,F[2].call(F[0],this.D7));A.abo(this.JS,0);}}if(this.A8===2){var BQ=
this.DX;this.DX=this.DX+10;if(this.DX>this.AlK)this.DX=this.AlK;if(this.DX!==BQ){
if(!!this.JR)(F=this.JR,F[2].call(F[0],this.DX));A.abo(this.JR,0);}}this.DJ(this
);this.An();},GE:function(G){this.PF.R(AHi+A._GetAutoObject(A.Device.Converter).
Ak0(this.D7));this.PG.R(AHi+A._GetAutoObject(A.Device.Converter).Ak0(this.DX));this.
Su.R(A._GetAutoObject(A.acj.Temperature).AlI());},A10:function(Atn){if(Atn===1)return this.
PF;else if(Atn===2)return this.PG;else return null;},_Init:function(aArg){C.Aco.
_Init.call(this,aArg);this.__proto__=C.AUB;this.AlK=5000;this.AlP=3000;this.T(A.
aaR(A.acf.Arp));this.Background.H(Afz);this.V.H(BF);this.V.R(A.aaR(A.acf.AGU));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Aco._ReInit.call(this);this.T(
A.aaR(A.acf.Arp));this.V.R(A.aaR(A.acf.AGU));},_className:"Application::SettingsItemThresholdsTemp"
};C.EB={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);this.__proto__=C.EB;this.H(BF);this.Background.
H(BF);this.Background.L(A.jb.CK);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa6:null,Aa_:null,Aa8:
null,Background:null,Aa5:null,Aa9:null,Aa7:null,AjD:null,Aru:null,VJ:null,A4:0,BzX:
function(G){if(this.AjD.CO===6){if(this.A4===1)this.AnF(2);else if(this.A4===2)this.
AnF(3);else this.AnF(1);}else if(this.AjD.CO===7){if(this.A4===3)this.AnF(2);else
if(this.A4===2)this.AnF(1);else this.AnF(3);}},AnF:function(E){if(this.A4===E)return;
this.A4=E;switch(this.A4){case 3:this.Background.H(this.Aa5.M);break;case 2:this.
Background.H(this.Aa9.M);break;case 1:this.Background.H(this.Aa7.M);break;default:
this.Background.H(Aop);}},IW:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hk._Init.
call(this.Aa6={I:this},0);A.acg.Hk._Init.call(this.Aa_={I:this},0);A.acg.Hk._Init.
call(this.Aa8={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Ael._Init.call(this.Aa5={I:this},0);A.acg.Ael._Init.call(this.Aa9={I:this},0);A.
acg.Ael._Init.call(this.Aa7={I:this},0);A.Core.BM._Init.call(this.AjD={I:this},0
);A.Core.BM._Init.call(this.Aru={I:this},0);A.Graphics.AMI._Init.call(this.VJ={I:
this},0);this.__proto__=C.Rating;this.H(AVU);this.Aa6.H(AHj);this.Aa6.L(A.jb.Text
);this.Aa6.AnD(Alb);this.Aa6.Nf(3);this.Aa6.Z(true);this.Aa_.H(AHk);this.Aa_.L(A.
jb.Text);this.Aa_.AnD(Alb);this.Aa_.Nf(3);this.Aa_.Z(true);this.Aa8.H(AHl);this.
Aa8.L(A.jb.Text);this.Aa8.AnD(Alb);this.Aa8.Nf(3);this.Aa8.Z(true);this.Background.
H(Aop);this.Background.L(A.jb.AV);this.Aa5.H(AHj);this.Aa5.L(A.jb.E1);this.Aa5.AnD(
Alb);this.Aa5.Z(true);this.Aa9.H(AHk);this.Aa9.L(A.jb.H6);this.Aa9.AnD(Alb);this.
Aa9.Z(true);this.Aa7.H(AHl);this.Aa7.L(A.jb.Gg);this.Aa7.AnD(Alb);this.Aa7.Z(true
);this.AjD.Filter=147;this.Aru.Filter=1;this.VJ.BlG(360);this.VJ.BmW(22);this.VJ.
Bm6(2);this.J(this.Aa6,0);this.J(this.Aa_,0);this.J(this.Aa8,0);this.J(this.Background
,0);this.J(this.Aa5,0);this.J(this.Aa9,0);this.J(this.Aa7,0);this.Aa6.Zv(this.VJ
);this.Aa_.Zv(this.VJ);this.Aa8.Zv(this.VJ);this.Background.Aw(A.aaL(A.ach.NR));
this.Aa5.Zv(this.VJ);this.Aa9.Zv(this.VJ);this.Aa7.Zv(this.VJ);this.AjD.BN=[this
,this.BzX];this.Aru.BN=[this,this.IW];},_Done:function(){this.__proto__=A.Core.P;
this.Aa6._Done();this.Aa_._Done();this.Aa8._Done();this.Background._Done();this.
Aa5._Done();this.Aa9._Done();this.Aa7._Done();this.AjD._Done();this.Aru._Done();
this.VJ._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa6._ReInit();this.Aa_._ReInit();this.Aa8._ReInit();this.Background.
_ReInit();this.Aa5._ReInit();this.Aa9._ReInit();this.Aa7._ReInit();this.AjD._ReInit(
);this.Aru._ReInit();this.VJ._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa9).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aru)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Ass={Akj:null,Asd:null,Background:null,TN:null,TI:null,AbY:null,AbX:null,AbW:
null,Acu:null,Act:null,Acs:null,Acj:null,Aci:null,AbQ:null,AbP:null,Ab$:null,Ab_:
null,AqB:null,Init:function(aArg){},BjF:function(G){this.AbY.R(AVV);this.AbX.R(A.
jV);this.AbW.R(A.jV);this.Acu.R(AHm);this.Act.R(A.jV);this.Acs.R(A.jV);this.Acj.
R(A.jV);this.Aci.R(A.jV);this.AbQ.R(A.jV);this.AbP.R(A.jV);this.Ab$.R(A.jV);this.
Ab_.R(A.jV);},Bny:function(G){this.TI.Z(true);this.TN.Z(true);var IA=this.Ij();if(
!IA)return;this.TN.R(IA.GetFPS().toFixed()+AVW);this.TI.R(AVX);this.TI.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akj={I:this},0);A.Core.Timer._Init.call(this.Asd={I:this},0);A.acg.AK._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TN={I:this},0);A.acg.
Text._Init.call(this.TI={I:this},0);A.acg.Text._Init.call(this.AbY={I:this},0);A.
acg.Text._Init.call(this.AbX={I:this},0);A.acg.Text._Init.call(this.AbW={I:this}
,0);A.acg.Text._Init.call(this.Acu={I:this},0);A.acg.Text._Init.call(this.Act={I:
this},0);A.acg.Text._Init.call(this.Acs={I:this},0);A.acg.Text._Init.call(this.Acj={
I:this},0);A.acg.Text._Init.call(this.Aci={I:this},0);A.acg.Text._Init.call(this.
AbQ={I:this},0);A.acg.Text._Init.call(this.AbP={I:this},0);A.acg.Text._Init.call(
this.Ab$={I:this},0);A.acg.Text._Init.call(this.Ab_={I:this},0);A.acg.AK._Init.call(
this.AqB={I:this},0);this.__proto__=C.Ass;this.H(AcN);this.Ar(false);this.Akj.PO(
2000);this.Akj.Wy(1);this.Akj.Ar(true);this.Asd.Ar(true);this.Background.AZ(0x3F
);this.Background.H(AcN);this.Background.L(0x78000000);this.TN.H(AVY);this.TN.A6(
0x14);this.TN.R(A.jV);this.TN.L(0xFFFFFC00);this.TN.Z(false);this.TI.H(AVZ);this.
TI.A6(0x11);this.TI.R(A.jV);this.TI.Z(false);this.AbY.H(AHn);this.AbY.A6(0x11);this.
AbY.R(A.jV);this.AbX.H(As0);this.AbX.A6(0x11);this.AbX.R(A.jV);this.AbW.H(AHo);this.
AbW.A6(0x14);this.AbW.R(A.jV);this.Acu.H(AHp);this.Acu.A6(0x11);this.Acu.R(A.jV);
this.Act.H(Ax7);this.Act.A6(0x11);this.Act.R(A.jV);this.Acs.H(AHq);this.Acs.A6(0x14
);this.Acs.R(A.jV);this.Acj.H(Ax8);this.Acj.A6(0x11);this.Acj.R(A.jV);this.Aci.H(
AV0);this.Aci.A6(0x14);this.Aci.R(A.jV);this.AbQ.H(AV1);this.AbQ.A6(0x11);this.AbQ.
R(A.jV);this.AbP.H(AV2);this.AbP.A6(0x14);this.AbP.R(A.jV);this.Ab$.H(AV3);this.
Ab$.A6(0x11);this.Ab$.R(A.jV);this.Ab_.H(AHr);this.Ab_.A6(0x14);this.Ab_.R(A.jV);
this.AqB.H(AV4);this.J(this.Background,0);this.J(this.TN,0);this.J(this.TI,0);this.
J(this.AbY,0);this.J(this.AbX,0);this.J(this.AbW,0);this.J(this.Acu,0);this.J(this.
Act,0);this.J(this.Acs,0);this.J(this.Acj,0);this.J(this.Aci,0);this.J(this.AbQ,
0);this.J(this.AbP,0);this.J(this.Ab$,0);this.J(this.Ab_,0);this.J(this.AqB,0);this.
Akj.Mx=[this,this.BjF];this.Asd.Mx=[this,this.Bny];this.TN.S(A.aaL(A.fl.Ak));this.
TI.S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.
AbW.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Act.S(A.aaL(A.fl.Ak));this.
Acs.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.Aci.S(A.aaL(A.fl.Ak));this.
AbQ.S(A.aaL(A.fl.Ak));this.AbP.S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));this.
Ab_.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akj._Done();this.Asd._Done();this.Background._Done();this.TN._Done();this.TI.
_Done();this.AbY._Done();this.AbX._Done();this.AbW._Done();this.Acu._Done();this.
Act._Done();this.Acs._Done();this.Acj._Done();this.Aci._Done();this.AbQ._Done();
this.AbP._Done();this.Ab$._Done();this.Ab_._Done();this.AqB._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akj._ReInit();this.
Asd._ReInit();this.Background._ReInit();this.TN._ReInit();this.TI._ReInit();this.
AbY._ReInit();this.AbX._ReInit();this.AbW._ReInit();this.Acu._ReInit();this.Act.
_ReInit();this.Acs._ReInit();this.Acj._ReInit();this.Aci._ReInit();this.AbQ._ReInit(
);this.AbP._ReInit();this.Ab$._ReInit();this.Ab_._ReInit();this.AqB._ReInit();this.
TN.S(A.aaL(A.fl.Ak));this.TI.S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.AbX.
S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Act.
S(A.aaL(A.fl.Ak));this.Acs.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.Aci.
S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));this.AbP.S(A.aaL(A.fl.Ak));this.Ab$.
S(A.aaL(A.fl.Ak));this.Ab_.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asd).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Act)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGC={FF:null,Dj:null,Au:null,Js:null,HJ:null,Uc:null,Bc:null,Sj:null,Gt:null
,Gs:null,FV:0,A8:0,Bjd:false,Init:function(aArg){},Ai:function(Ae){C.Dt.Ai.call(
this,Ae);this.Ht.Z(false);this.H2.Z(false);if(!!this.Dj){this.Sj.R(this.Au.Format(
O4));this.Uc.R(this.Au.Format(Ax9));}if(this.A8===1){this.HJ.Z(true);this.HJ.H(this.
Sj.M);this.HJ.L(A.jb.Bm);this.Sj.L(this.Background.AQ);this.Uc.L(A.jb.Bm);}else if(
this.A8===2){this.HJ.Z(true);this.HJ.H(this.Uc.M);this.HJ.L(A.jb.Bm);this.Sj.L(A.
jb.Bm);this.Uc.L(this.Background.AQ);}else{this.HJ.Z(false);this.Sj.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Uc.L(this.V.AQ);}},Qn:function(G){if(this.FC===1)A.pe([
this,this.U9],this);else if(this.FC===4)A.pe([this,this.AiD],this);else if(this.
FC===5)A.pe([this,this.Aio],this);C.Dt.Qn.call(this,G);},J_:function(G){switch(this.
A8){case 0:C.Dt.J_.call(this,G);break;case 2:break;default:this.Ads(this);}},J5:
function(G){switch(this.A8){case 0:C.Dt.J5.call(this,G);break;default:this.Ain(this
);}},Adu:function(G){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0])));},Ab7:
function(E){if(A.aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adu],this.Dj
,0);this.Dj=E;if(!!E)A.zX([this,this.Adu],E,0);if(!!E)A.pe([this,this.Adu],this);
},Ui:function(E){if(this.FV===E)return;this.FV=E;this.Au.Initialize(this.FV);this.
An();},Ads:function(G){this.FC=1;this.An();if(this.Bo.Bw){A.pe([this,this.U9],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},U9:function(G){this.Ex(this.A8+1);},Al1:
function(G){this.FC=4;this.An();if(this.Bo.Bw){A.pe([this,this.AiD],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},Al0:function(G){this.FC=5;this.An();if(this.Bo.Bw){
A.pe([this,this.Aio],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiD:function(G){
var B;var F;var BQ=this.FV;if(this.A8===1)this.Au.Any(this.Au.AjT+1);if(this.A8===
2)this.Au.AnB(this.Au.AvW+1);this.Au.AnE(0);this.Ui(((B=(this.Au.JN()|0))<0)?B+0x100000000:
B);if(this.FV!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FV));A.abo(this.
Dj,0);}},Aio:function(G){var B;var F;var BQ=this.FV;if(this.A8===1)this.Au.Any(this.
Au.AjT-1);if(this.A8===2)this.Au.AnB(this.Au.AvW-1);this.Au.AnE(0);this.Ui(((B=(
this.Au.JN()|0))<0)?B+0x100000000:B);if(this.FV!==BQ){if(!!this.Dj)(F=this.Dj,F[
2].call(F[0],this.FV));A.abo(this.Dj,0);}},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.G_];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(
F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aew));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=[this,this.U9];}break;case 2:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.
N,F[1].call(F[0])).CC=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmX
));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.
Ain];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cm=null;}break;default:this.FF.AkP((F=this.N,F[1].call(F[
0])));}},FQ:function(G){this.Ex(1);},G_:function(G){this.Ex(0);},Ex:function(EO){
var F;if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(F[0])));this.A8=EO;this.Bjd=true;
if((this.A8<0)||(this.A8>2))this.A8=0;this.DJ(this);this.Gt.Bw=!!this.A8;this.Gs.
Bw=!!this.A8;this.An();},Ain:function(G){if(this.A8>1)this.Ex(this.A8-1);},_Init:
function(aArg){C.Dt._Init.call(this,aArg);A.Core.Bs._Init.call(this.Au={I:this},
0);A.Core.BM._Init.call(this.Js={I:this},0);A.acg.AK._Init.call(this.HJ={I:this}
,0);A.acg.Text._Init.call(this.Uc={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Sj={I:this},0);A.Core.BM._Init.call(this.Gt={I:this
},0);A.Core.BM._Init.call(this.Gs={I:this},0);this.__proto__=C.AGC;this.H(UU);this.
V.R(AV5);this.V.L(A.jb.Bm);this.Ht.Z(false);this.H2.Z(false);this.Js.Filter=1;this.
HJ.H(AV6);this.HJ.L(0x55FFFFFF);this.Uc.H(AV7);this.Uc.I7(true);this.Bc.H(AV8);this.
Bc.A6(0x14);this.Bc.R(AV9);this.Sj.H(AV_);this.Sj.I7(true);this.Sj.A6(0x14);this.
Gt.Filter=4;this.Gt.Bw=false;this.Gs.Filter=5;this.Gs.Bw=false;this.J(this.HJ,0);
this.J(this.Uc,0);this.J(this.Bc,0);this.J(this.Sj,0);this.Js.BN=[this,this.Ads];
this.Uc.S(A.aaL(A.fl.EL));this.Bc.S(A.aaL(A.fl.EL));this.Sj.S(A.aaL(A.fl.EL));this.
Gt.BN=[this,this.Al1];this.Gt.D1=[this,this.AiD];this.Gs.BN=[this,this.Al0];this.
Gs.D1=[this,this.Aio];this.FF=A._NewObject(C.Aep,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Dt;this.Au._Done();this.Js._Done();this.HJ._Done();this.Uc._Done(
);this.Bc._Done();this.Sj._Done();this.Gt._Done();this.Gs._Done();C.Dt._Done.call(
this);},_ReInit:function(){C.Dt._ReInit.call(this);this.Au._ReInit();this.Js._ReInit(
);this.HJ._ReInit();this.Uc._ReInit();this.Bc._ReInit();this.Sj._ReInit();this.Gt.
_ReInit();this.Gs._ReInit();this.Uc.S(A.aaL(A.fl.EL));this.Bc.S(A.aaL(A.fl.EL));
this.Sj.S(A.aaL(A.fl.EL));},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((
B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Uc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CH={B7:null,AmO:null,AqQ:null,El:null,Text:null,String:A.jV,Bde:A.jV,Kf:0x12
,AK9:0,AQ:0xFFFFFFFF,N3:0,AUj:0,A_O:0,Bdf:true,GZ:function(CN){var LI=(A.Core.ARk.
isPrototypeOf(CN)?CN:null);if(!!LI)this.BB7(this);return A.Core.P.GZ.call(this,CN
);},Bk:function(aSize){A.Core.P.Bk.call(this,aSize);A.pe([this,this.Ajj],this);}
,Db:function(aFilter){return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bdf){this.Bde=E;this.Bdf=false;
}this.AK9=E.length;A.pe([this,this.Ajj],this);},S:function(E){if(this.B7===E)return;
this.B7=E;A.pe([this,this.Ajj],this);},A2:function(E){if(this.AmO===E)return;this.
AmO=E;A.pe([this,this.Ajj],this);},Cu:function(E){if(this.AqQ===E)return;this.AqQ=
E;A.pe([this,this.Ajj],this);},A6:function(E){if(E===this.Kf)return;this.Kf=E;this.
Text.A6(E);},Ajj:function(G){var B;var ALd=0;if(!this.AK9){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KR(false);if(!!this.B7){ALd=
this.B7.Ys(this.String,0,this.AK9);if(ALd<(((B=this.M)[2]-B[0])-(2*this.Text.I_)
)){this.Text.S(this.B7);this.Text.AwY(this.N3);return;}}this.Text.KR(true);if(!!
this.AmO){ALd=this.AmO.Ys(this.String,0,this.AK9);this.Text.S(this.AmO);this.Text.
AwY(this.AUj);if((ALd<(((B=this.M)[2]-B[0])-(2*this.Text.I_)))&&(((B=this.Text.Db(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqQ){this.Text.S(this.AqQ);
if(((B=this.Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.AwY((((this.Text.
B7.Ascent+this.Text.B7.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BB7:function(G){this.R(this.Bde);},Q2:function(E){if(
A.aa0(this.El,E))return;this.El=E;this.Text.Q2(E);},ASh:function(){return A.abh(
this.Text.Db(),this.M.slice(0,2));},Afc:function(AoN){return A.abf(this.M.slice(
0,2),this.Text.Afc(AoN));},AwY:function(E){if(this.N3===E)return;this.N3=E;A.pe([
this,this.Ajj],this);},BmY:function(E){if(this.AUj===E)return;this.AUj=E;A.pe([this
,this.Ajj],this);},BmZ:function(E){if(this.A_O===E)return;this.A_O=E;A.pe([this,
this.Ajj],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CH;this.H(AHs);this.Ar(false);
this.Text.AZ(0x3F);this.Text.H(AHs);this.Text.R(Rk);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjR={Y:null,II:null,AeG:null,I3:null,M5:null,AeA:null,AeF:null,AeE:null,AeB:
null,AeD:null,AeC:null,M7:null,NT:null,Mp:null,De:function(E){C.Yt.De.call(this,
E);this.II.L(E);this.AeG.L(E);this.I3.L(E);this.M5.L(E);this.Mp.L(E);this.AeA.L(
E);this.M7.L(E);this.NT.L(E);this.AeF.L(E);this.AeE.L(E);this.AeB.L(E);this.AeD.
L(E);this.AeC.L(E);},DY:function(G){C.Yt.DY.call(this,G);this.XL(8,1,this.M5);this.
XL(12,1,this.Mp);this.XL(11,1,this.AeA);this.XL(7,1,this.M7);this.XL(14,1,this.NT
);this.XL(1,4,this.II);this.XL(1,1,this.AeG);this.XL(4,1,this.I3);this.XL(22,1,this.
AeF);this.XL(26,1,this.AeE);this.XL(30,1,this.AeB);this.XL(19,1,this.AeD);this.XL(
31,1,this.AeC);this.Text.Z(!this.Y.TL(null,0x1));},XL:function(AJl,Eb,AfP){var AA6=
false;if(!!A._GetAutoObject(A.Device.Device).Am.Filter){var Adf=A._GetAutoObject(
A.Device.Device).Am.Filter.DL(AJl,Eb);if(!!Adf){AA6=true;switch(AJl){case 14:{var
Azk=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adf)?Adf:null);if(!!Azk)AfP.
Aw(A._GetAutoObject(A.Device.Converter).A4N(Azk.A4));}break;case 7:{var Azk=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adf)?Adf:null);if(!!Azk)AfP.Aw(A._GetAutoObject(
A.Device.Converter).AmQ(Azk.A4));}break;case 1:if(Eb===4)AfP.Aw(A.aaL(A.ach.ADC)
);else if(Adf.Operator===4)AA6=false;break;case 22:switch(Adf.Operator){case 0:case
3:AfP.Aw(A.aaL(A.ach.AQy));break;default:AfP.Aw(A.aaL(A.ach.AjX));}break;case 26:
switch(Adf.Operator){case 0:case 3:AfP.Aw(A.aaL(A.ach.AQw));break;default:AfP.Aw(
A.aaL(A.ach.Avt));}break;default:;}}else if((AJl===1)&&(Eb===4)){AA6=true;AfP.Aw(
A.aaL(A.ach.Aex));}}else if((AJl===1)&&(Eb===4)){AA6=true;AfP.Aw(A.aaL(A.ach.Aex
));}AfP.Z(AA6);},_Init:function(aArg){C.Yt._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.II={I:this},0);A.acg.Ap._Init.call(
this.AeG={I:this},0);A.acg.Ap._Init.call(this.I3={I:this},0);A.acg.Ap._Init.call(
this.M5={I:this},0);A.acg.Ap._Init.call(this.AeA={I:this},0);A.acg.Ap._Init.call(
this.AeF={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap._Init.call(
this.AeB={I:this},0);A.acg.Ap._Init.call(this.AeD={I:this},0);A.acg.Ap._Init.call(
this.AeC={I:this},0);A.acg.Ap._Init.call(this.M7={I:this},0);A.acg.Ap._Init.call(
this.NT={I:this},0);A.acg.Ap._Init.call(this.Mp={I:this},0);this.__proto__=C.AjR;
this.Y.AZ(0x3F);this.Y.H(AHt);this.Y.JO(3);this.II.H(Aoq);this.AeG.H(Ax_);this.AeG.
Aj(true);this.I3.H(AV$);this.I3.Aj(true);this.M5.H(AWa);this.M5.Aj(true);this.AeA.
H(AWb);this.AeA.Aj(true);this.AeF.H(AHu);this.AeF.Aj(true);this.AeE.H(AHu);this.
AeE.Aj(true);this.AeB.H(AWc);this.AeB.Aj(true);this.AeD.H(AHv);this.AeD.Aj(true);
this.AeC.H(AHv);this.AeC.Aj(true);this.M7.H(AHw);this.M7.Aj(true);this.NT.H(AHx);
this.NT.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mp.H(AHw);this.Mp.Aj(true);
this.JU(this.Gr,-3);this.JU(this.D2,-3);this.JU(this.A_,-3);this.JU(this.AP,-2);
this.J(this.Y,-2);this.J(this.II,-2);this.J(this.AeG,-2);this.J(this.I3,-2);this.
J(this.M5,-2);this.J(this.AeA,-2);this.J(this.AeF,-2);this.J(this.AeE,-2);this.J(
this.AeB,-2);this.J(this.AeD,-2);this.J(this.AeC,-2);this.J(this.M7,-2);this.J(this.
NT,-2);this.J(this.Mp,0);this.II.Aw(A.aaL(A.ach.Aex));this.AeG.Aw(A.aaL(A.ach.AQn
));this.I3.Aw(A.aaL(A.ach.APO));this.M5.Aw(A.aaL(A.ach.ADw));this.AeA.Aw(A.aaL(A.
ach.AbC));this.AeF.Aw(A.aaL(A.ach.AjX));this.AeE.Aw(A.aaL(A.ach.Avt));this.AeB.Aw(
A.aaL(A.ach.AQl));this.AeD.Aw(A.aaL(A.ach.AQm));this.AeC.Aw(A.aaL(A.ach.AQk));this.
M7.Aw(A.aaL(A.ach.ADy));this.NT.Aw(A.aaL(A.ach.Avy));this.Mp.Aw(A.aaL(A.ach.ADF)
);},_Done:function(){this.__proto__=C.Yt;this.Y._Done();this.II._Done();this.AeG.
_Done();this.I3._Done();this.M5._Done();this.AeA._Done();this.AeF._Done();this.AeE.
_Done();this.AeB._Done();this.AeD._Done();this.AeC._Done();this.M7._Done();this.
NT._Done();this.Mp._Done();C.Yt._Done.call(this);},_ReInit:function(){C.Yt._ReInit.
call(this);this.Y._ReInit();this.II._ReInit();this.AeG._ReInit();this.I3._ReInit(
);this.M5._ReInit();this.AeA._ReInit();this.AeF._ReInit();this.AeE._ReInit();this.
AeB._ReInit();this.AeD._ReInit();this.AeC._ReInit();this.M7._ReInit();this.NT._ReInit(
);this.Mp._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yt.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amq={H5:null,CF:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);this.H5.Gn();this.H5.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Ra.CF.call(this,G);},An6:function(){C.Ra.
An6.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).By_(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lr));this.C8.L(A._GetAutoObject(
A.acj.Temperature).Bzb(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lr));this.JJ.L(A._GetAutoObject(A.acj.Temperature).By$(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lr));this.HB.L(A.
_GetAutoObject(A.acj.Temperature).Bza(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lr));this.MC.L(this.JJ.AQ);this.TemperatureUnit.
L(this.JJ.AQ);}break;default:;}},AcG:function(){C.Ra.AcG.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cs(A.aaL(A.ach.AQG));this.N.C6(A.aaL(
A.ach.AmZ));}break;case 4:{this.N.Cs(null);this.N.C6(A.aaL(A.ach.AvG));}break;default:;
}},WN:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lr>3240)&&(A._GetAutoObject(A.Device.
Device).Lr<5460)){A._GetAutoObject(A.Device.Device).AhG();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H5.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Lr);var B1=A._GetAutoObject(A.Device.Converter).AsG(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lr);this.H5.OnSetRatingTemperature(
B1);this.H5.Ch(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fv();
}break;case 4:this.AKC(this);break;default:;}},AkV:function(G){C.Ra.AkV.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Ds(9);break;case 4:this.AKC(this);break;default:;}},AxO:function(
){C.Ra.AxO.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JJ.R(A._GetAutoObject(A.acj.Temperature).Bzg(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lr));break;default:;}},AxP:function(
){C.Ra.AxP.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WC(A._GetAutoObject(A.acj.Temperature).Bzc(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lr));this.Jb.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WC(16711680
);this.Jb.Ar(true);}break;default:this.Jb.Ar(false);}},AUv:function(){this.C8.Aw(
A.aaL(A.ach.AvF));this.C8.Cv(A._GetAutoObject(A.acj.Temperature).Bzh(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lr));this.NR.Cv(
0);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.Amq;this.Dq(
C.IG);this.H5=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Ra._Mark.
call(this,D);if((B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahs={N2:null,DK:null,Ih:null,Bc:null,Aus:null,String:A.jV,AxC:A.jV,Mt:7,Aka:
2,KS:0,AUI:false,Init:function(aArg){},Bk:function(aSize){A.Core.P.Bk.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Aka,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bi));else this.DK.S(A.aaL(A.fl.Ak));this.Ih.S(this.DK.B7);this.Ih.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WG],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahm:function(
E){if(this.AxC===E)return;this.AxC=E;this.Ih.R(E);},Ab6:function(E){this.Mt=E;if(
E<10)this.AS7(2);else if(E<40)this.AS7(1);else this.AS7(0);A.pe([this,this.WG],this
);},WG:function(G){var B;while(!!this.Bc.Ah)this.HN(this.Bc.Ah);if(this.Mt>1){var
Ada=this.AON();var A1U=this.AOL();var Apr=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var Az0;var AK2;var At3;var Al8=null;if(!!this.N2&&(this.N2.AY>0))Al8=this.N2.KZ;
while((Ada>=A1U)&&(Ada>0)){var AtE=A._NewObject(C.Ajs,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aka)*(((Ada-A1U)/86400)|0))/this.Mt)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aka)*((((Ada-A1U)/86400)|0)+1))/this.Mt)|0;while(!!Al8&&(Al8.Timestamp>=
Ada)){if(Al8.Timestamp<(Ada+86400))AtE.Or(Al8.A4,Al8.Timestamp);Al8=Al8.Ah;}var Aud=
0;if(AtE.AY>0)Aud=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtE.AY
)|0;else if(this.Mt<10){Aud=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
At3=A._NewObject(A.acg.Text,0);At3.H([x1,Apr,x2,Apr+Aud]);At3.S(A.aaL(A.fl.Bi));
At3.L(A.jb.Text);At3.R(A.aaR(A.acf.Ae_));this.J(At3,0);}var AJP=AtE.KZ;var O=0;while(
!!AJP){if(O>=AtE.AY)throw new Error(AWd);Az0=A._NewObject(A.acg.AK,0);Az0.L(A._GetAutoObject(
A.acj.Assessment).Qk(AJP.A4));if(O===(AtE.AY-1))Az0.H([x1,Apr+(O*Aud),x2,this.Bc.
M[1]]);else Az0.H([x1,Apr+(O*Aud),x2,Apr+((O+1)*Aud)]);this.J(Az0,0);AJP=AJP.Ah;
O=O+1;}if(this.AUI){var BxX=A._GetAutoObject(A.Device.Helper).Aqq(A._GetAutoObject(
A.Device.Helper).Dv());var BxW=A._GetAutoObject(A.Device.Helper).Aqq(Ada);if(BxX===
BxW){var ALu=A._NewObject(A.acg.Ael,0);ALu.L(A.jb.Text);var BdC=(x1+this.Aka)+(((
x2-x1)/2)|0);ALu.H([BdC-4,this.Bc.M[1]-4,BdC+4,this.Bc.M[1]]);ALu.Zv(this.Aus);this.
J(ALu,0);}}Ada=Ada-86400;if(this.Aka>0){AK2=A._NewObject(A.acg.AK,0);AK2.H([x1,Apr
,x1+this.Aka,Apr+((((B=this.M)[3]-B[1])/2)|0)]);AK2.L(A.jb.Bc);this.J(AK2,0);}}}
},Ab8:function(E){this.N2=E;A.pe([this,this.WG],this);},AS7:function(E){if(this.
Aka===E)return;this.Aka=E;A.pe([this,this.WG],this);},De:function(E){if(this.KS===
E)return;this.KS=E;this.DK.L(E);this.Ih.L(E);},AOL:function(){var B;return this.
AON()-(((((B=this.Mt)<0)?B+0x100000000:B)-1)*86400);},AON:function(){return A._GetAutoObject(
A.Device.Converter).AhK();},Bm2:function(E){if(this.AUI===E)return;this.AUI=E;A.
pe([this,this.WG],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Ih={I:this},0
);A.acg.AK._Init.call(this.Bc={I:this},0);C.AxM._Init.call(this.Aus={I:this},0);
this.__proto__=C.Ahs;this.H(BF);this.Ar(false);this.DK.H(AHy);this.DK.Hh(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Ih.H(AHy);this.Ih.Hh(5);this.Ih.A6(0x14);this.
Ih.L(A.jb.Text);this.Bc.H(AWe);this.Bc.L(A.jb.Bc);this.KS=A.jb.Text;this.Aus.H(AHz
);this.J(this.DK,0);this.J(this.Ih,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Ih.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Ih._Done();this.Bc._Done();this.Aus._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Ih._ReInit();this.Bc._ReInit();this.Aus._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Ih.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aus)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A4T={Ah:null,Timestamp:0,A4:0,_Init:function(
aArg){this.__proto__=C.A4T;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajs={KZ:null,MR:null,AY:0,Or:
function(A7,Qb){var Hb;Hb=A._NewObject(C.A4T,0);Hb.A4=A7;Hb.Timestamp=Qb;if(!this.
KZ){this.KZ=Hb;this.MR=Hb;this.AY=1;}else{this.MR.Ah=Hb;this.MR=Hb;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajs;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
KZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MR)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ei={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MF],this);},DE:function(G){var B;var Fe=0;var X=this.AV;switch(
this.Cr.CO){case 6:Fe=2;break;case 7:Fe=7;break;case 4:Fe=4;break;case 5:Fe=5;break;
default:;}X=this.QE(X,Fe,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HD(X,true,null,null);this.DJ(this);},AlY:function(G){A._GetAutoObject(C.A$
).Fv();},ApM:function(G){var B;if(!!(C.Cp.isPrototypeOf(B=this.AV)?B:null).Ago)A.
pe((C.Cp.isPrototypeOf(B=this.AV)?B:null).Ago,this);},Fg:function(G){var B;this.
Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.
Y.Br[1]);},DJ:function(G){var B;var GT=(C.Cp.isPrototypeOf(B=this.AV)?B:null);if(
!!GT){this.N.Hu(A.jV);this.N.CV(GT.AxF);this.N.Ja.Dr(255);this.N.HQ.Dr(GT.Axc);this.
N.AE6(GT.Avh);this.N.Anw(GT.AmP);this.N.CY(GT.AQf);this.N.C6(GT.Aq8);GT.A2W(this
);}},MF:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ei;this.Background.H(Rl);this.Background.L(A.jb.CS);this.N.H(Xd);this.
N.Ar(false);this.N.Z(true);this.Y.H(Fb);this.Y.JO(1);this.Ay.H(Iq);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fg];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATO={Nz:null,ASO:null,Ad0:null,VD:null,GP:null,PopupTimeout:null,Aca:null,Agz:
null,PopupIdToString:null,AtA:null,Text:A.jV,AkI:A.jV,AJ9:A.jV,Ak2:0,ALf:-1,Azj:-
1,AKJ:0,ATQ:0,A13:false,CP:function(){this.A_c(this.PopupIdToString.BH(this.ATQ)
);},Init:function(aArg){this.Bor(this);},Bgp:function(G){var B;if(this.Ak2>0){this.
A_q((this.Ak2/1000)|0);this.PopupTimeout.Wy(0);this.PopupTimeout.PO(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxB(this);},Bgl:function(G){var Qu=this.
Text;var AfS=this.AkI;var AKH=A.abi(16,A.jV,null);var index=0;var Aze=0;while(AfS
!==A.jV){Aze=AfS.indexOf(A.Device.PopupParamSeparator,0);if(Aze!==-1){AKH.Set(index
,A.ab1(AfS,Aze,(AfS.length-Aze)+1));AfS=A.ab1(AfS,0,Aze+1);index=index+1;if(index>=
16){A.ab5("%s",(AWf+AfS)+AWg);AfS=A.jV;}}else{AKH.Set(index,AfS);AfS=A.jV;}}index=
0;while(index<Qu.length){if((Qu.charCodeAt(index)||0)===0x7B){var Bdd=Qu.indexOf(
String.fromCharCode(0x7D),index);if(Bdd===-1){A.ab5("%s",(((AWh+Qu)+AWi)+index.toFixed(
))+Afx);index=Qu.length;}else{var Be8=(Bdd-index)-1;var A3v=A.abW(Qu,index+1,Be8
);var AKG=A.wz(A3v,-1,10);Qu=A.ab1(Qu,index,Be8+2);if(A3v===AWj)this.Bnh(index);
else if(((AKG>0)&&(AKG<=16))&&(this.AkI!==A.jV)){Qu=A.abU(Qu,AKH.Get(AKG-1),index
);if(this.A13===true)this.Bng(A.wz(AKH.Get(AKG-1),0,10));}else A.ab5("%s",(AWk+A3v
)+AWl);}}index=index+1;}this.Bnf(Qu);},CF:function(G){A.pe([this,this.Bgp],this);
},Ai:function(Ae){var B;this.Ad0.H(A.aaT(this.GP.Db(),AhT));this.VD.H(A.aaT(this.
GP.Db(),AhT));if(!!this.Nz){this.Nz.H(A.abM(this.Nz.M,this.GP.M[0]));this.Nz.H(A.
abO(this.Nz.M,this.GP.M[3]+10));this.Nz.H(A.abL(this.Nz.M,(B=this.GP.M)[2]-B[0])
);this.Nz.H(A.abI(this.Nz.M,8));this.Ad0.H(A.abh(A.aaT(this.GP.Db(),AhT),AHA));this.
VD.H(A.abh(A.aaT(this.GP.Db(),AhT),AHA));}else{this.Ad0.H(A.aaT(this.GP.Db(),AhT
));this.VD.H(A.aaT(this.GP.Db(),AhT));}},DE:function(G){var Jy=(A.Core.BM.isPrototypeOf(
G)?G:null);if((Jy.CO===4)&&((this.VD.M[1]+this.M[1])<this.M[1])){this.GP.H(A.abO(
this.GP.M,this.GP.M[1]+28));this.An();}else if((Jy.CO===5)&&((this.VD.M[3]+this.
M[1])>this.N.M[1])){this.GP.H(A.abO(this.GP.M,this.GP.M[1]-28));this.An();}if((Jy.
CO===6)&&!!this.D_().CC)this.D_().AFd(1);else if((Jy.CO===7)&&!!this.D_().Cm)this.
D_().AFd(3);},IW:function(G){switch(this.D_().Ahc){case 1:this.AlY(this);break;case
3:this.ApM(this);break;case 2:this.AAw(this);break;case 0:break;default:A.ab5("%s%e"
,AWm,this.D_().Ahc);}},AlY:function(G){var B;(B=this.D_().CC)?B[1].call(B[0],this
):null;},ApM:function(G){var B;(B=this.D_().Cm)?B[1].call(B[0],this):null;},AAw:
function(G){var B;(B=this.D_().Cl)?B[1].call(B[0],this):null;},LN:function(G){this.
N.I4.L((this.N.I4.AQ&0x00FFFFFF)|(100<<24));},E3:function(G){var B;this.PopupTimeout.
AxB(this);},A_c:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bgl],this);},BAj:function(G){var B;this.A_q(this.Azj-1);if(this.Azj<=0){this.PopupTimeout.
AxB(this);(B=this.ASO)?B[1].call(B[0],this):null;}},A_e:function(E){if(this.Ak2===
E)return;this.Ak2=E;A.pe([this,this.Bgp],this);},A91:function(E){if(this.AkI===E
)return;this.AkI=E;A.pe([this,this.Bgl],this);},Bnf:function(E){if(this.AJ9===E)
return;this.AJ9=E;this.ABn(this);this.Bx4(this);},ABn:function(G){if((this.Azj!==-
1)&&(this.ALf!==-1)){var ByU=this.AtA.Format(AWn);this.GP.R(A.abU(this.AJ9,ByU,this.
ALf));}else this.GP.R(this.AJ9);this.GP.H(AHB);},Bnh:function(E){if(this.ALf===E
)return;this.ALf=E;this.ABn(this);},A_q:function(E){if(this.Azj===E)return;this.
Azj=E;this.AtA.AFI(E);A.pe([this,this.ABn],this);},Bx4:function(G){this.GP.Db();
if(this.GP.M[1]<=this.M[1])this.GP.H(A.abO(this.GP.M,28));this.An();},A_s:function(
E){if(this.A13===E)return;this.A13=E;if(E===true)A.pe([this,this.BAT],this);},BAT:
function(G){if(!this.Nz){this.Nz=A._NewObject(A.acr.ADl,0);this.Nz.F_(0);this.Nz.
EV(100);this.Nz.OnSetAppearance(this.Aca);this.J(this.Nz,0);this.Ahv(this.Nz,this.
GP);}this.Nz.By(this.AKJ);},Bng:function(E){if(this.AKJ===E)return;this.AKJ=E;if(
!!this.Nz)this.Nz.By(this.AKJ);},Bor:function(G){var B;this.N.Dr(0);this.Agz.AnU(
this);},BmS:function(E){if(this.ATQ===E)return;this.ATQ=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.Ad0={I:this},0);A.acg.BU._Init.
call(this.VD={I:this},0);A.acg.Text._Init.call(this.GP={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADm._Init.call(this.Aca={I:this},
0);A.acl.Gi._Init.call(this.Agz={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtA={I:this},0);this.
__proto__=C.ATO;var B;this.H(Cd);this.Background.H(Fb);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ej.Ar(false);this.Ej.Z(false);this.Ad0.H(AHC);this.
Ad0.L(A.jb.CK);this.VD.H(AHC);this.VD.Nf(2);this.VD.L(A.jb.Text);this.GP.H(AHB);
this.GP.Hh(10);this.GP.I7(true);this.GP.Bne(0);this.GP.KR(true);this.GP.L(A.jb.Text
);this.PopupTimeout.PO(0);this.Aca.A_j(0);this.Aca.A_h(A.jb.AV);this.Aca.A_g(0);
this.Aca.AFY(AHh);this.Agz.HM(1);this.Agz.B2=255;this.Agz.Cw=0;this.JU(this.Ej,-
1);this.J(this.Ad0,0);this.J(this.VD,0);this.J(this.GP,0);this.GP.S(A.aaL(A.fl.Af
));this.PopupTimeout.Mx=[this,this.BAj];this.Aca.A_i(A.aaL(A.ach.NS));this.Aca.A_f(
A.aaL(A.ach.NS));this.Agz.Q=[B=this.N,B.Awf,B.AZ5];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad0._Done();this.VD._Done();this.GP._Done();this.PopupTimeout.
_Done();this.Aca._Done();this.Agz._Done();this.PopupIdToString._Done();this.AtA.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad0._ReInit();this.VD._ReInit();this.GP._ReInit();this.PopupTimeout._ReInit();this.
Aca._ReInit();this.Agz._ReInit();this.PopupIdToString._ReInit();this.AtA._ReInit(
);this.GP.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Nz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASO)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GP)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Agz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtA)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Ml={Ai:function(Ae
){C.Cp.Ai.call(this,Ae);var FN=A.jb.CK;var GS=A.jb.Text;if(this.Hf){FN=A.jb.Text;
GS=A.jb.Bm;}if(!this.LF){this.Background.L(FN);this.V.L(A.jb.Am0);}else if(this.
Qo){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GS);}},_Init:function(
aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.Ml;},_className:"Application::DarkThemeMenuItem"
};C.Anf={Ady:0,_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.
Anf;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={XB:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);},KQ:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);
this.Bx.Cm=[this,this.A2X];this.Bx.Cl=null;this.Bx.CC=[this,this.XB];this.Bx.CV(
A.aaR(A.acf.Ok));this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.Aev));}return this.Bx;}
,A2X:function(G){var B;if(!!(C.Cp.isPrototypeOf(B=this.AV)?B:null))(C.Cp.isPrototypeOf(
B=this.AV)?B:null).IW(this);},CF:function(G){},AIJ:function(s){this.CF(s);},E3:function(
G){},Ayy:function(s){this.E3(s);},_Init:function(aArg){C.Abh._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APK={V8:
null,YQ:null,YJ:null,Init:function(aArg){this.Bb(this.V8);},Adq:function(G){var Aa=(
C.Cp.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YQ)A._GetAutoObject(A.Device.
Device).A9(6,true,A.jV,0,[this,this.BA8]);else if(Aa===this.V8)A._GetAutoObject(
A.Device.Device).A9(9,true,A.jV,0,[this,this.BBs]);else if(Aa===this.YJ)A._GetAutoObject(
C.A$).Cg(4);else throw new Error(Ax$);A._GetAutoObject(A.Device.Device).Ds(0);},
BA8:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(
At.PopupState===7))A._GetAutoObject(A.Device.Device).AGk();},BBs:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))
A._GetAutoObject(A.Device.Device).Axt();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ml._Init.call(this.V8={I:this},0);C.Ml._Init.call(this.YQ={I:this
},0);C.Ml._Init.call(this.YJ={I:this},0);this.__proto__=C.APK;this.H(AcN);this.V8.
H(BF);this.V8.Ar(true);this.V8.T(A.aaR(A.acf.A_6));this.V8.Bh(true);this.YQ.H(IR
);this.YQ.Ar(true);this.YQ.T(A.aaR(A.acf.A_N));this.YQ.Bh(true);this.YJ.H(P8);this.
YJ.Ar(true);this.YJ.T(A.aaR(A.acf.SN));this.YJ.Bh(true);this.J(this.V8,0);this.J(
this.YQ,0);this.J(this.YJ,0);this.V8.AR=[this,this.Adq];this.YQ.AR=[this,this.Adq
];this.YJ.AR=[this,this.Adq];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.V8._Done();this.YQ._Done();this.YJ._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.V8._ReInit(
);this.YQ._ReInit();this.YJ._ReInit();this.V8.T(A.aaR(A.acf.A_6));this.YQ.T(A.aaR(
A.acf.A_N));this.YJ.T(A.aaR(A.acf.SN));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GG={AaE:null,OverlayMenu:null,WI:null,A3P:null
,K$:null,A3u:null,AkJ:null,N0:null,Az6:100,Init:function(aArg){var B;A.zX([this,
this.Bez],[B=A._GetAutoObject(A.Device.Device),B.Awg,B.AyH],0);A.zX([this,this.Bet
],[B=A._GetAutoObject(A.Device.Device),B.ASu,B.AZ3],0);A.zX([this,this.A2O],[B=A.
_GetAutoObject(A.Device.Device),B.Av6,B.AyA],0);A.zX([this,this.BzS],[B=A._GetAutoObject(
A.Device.Device),B.Av3,B.Ayz],0);A.zX([this,this.BzT],[B=A._GetAutoObject(A.Device.
Device),B.A8d,B.BaI],0);A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.Device
),B.ASF,B.AZ$],0);A.zX([this,this.BeQ],[B=A._GetAutoObject(A.Device.Device),B.Wv
,B.Xe],0);A.pe([this,this.Bez],this);A.pe([this,this.Bet],this);A.pe([this,this.
ApN],this);A.pe([this,this.BeQ],this);this.A3P.As([B=this.WI,B.AEp,B.Zp]);this.J(
this.WI,0);this.Bb(this.WI);this.BxH(this);},Ai:function(Ae){},Bet:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AEc){if(!this.AaE){this.AaE=A._NewObject(
C.Ass,0);this.AaE.H(A.abJ(this.AaE.M,this.WI.M.slice(0,2)));this.AaE.H(A.abO(this.
AaE.M,this.WI.M[3]-((B=this.AaE.M)[3]-B[1])));this.J(this.AaE,1);}}else{if(!!this.
AaE)this.HN(this.AaE);this.AaE=null;}},Bez:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Ds(null);break;case 1:this.Ds(A._NewObject(
C.APK,0));break;case 8:this.Ds(A._NewObject(C.AL2,0));break;case 2:this.Ds(A._NewObject(
C.ALZ,0));break;case 3:this.Ds(A._NewObject(C.AL5,0));break;case 4:this.Ds(A._NewObject(
C.AT8,0));break;case 5:this.Ds(A._NewObject(C.AVC,0));break;case 6:this.Ds(A._NewObject(
C.ATJ,0));break;case 7:this.Ds(A._NewObject(C.Ams,0));break;case 11:this.Ds(A._NewObject(
C.AMy,0));break;case 12:this.Ds(A._NewObject(C.AMx,0));break;case 9:this.Ds(A._NewObject(
C.ARE,0));break;case 10:this.Ds(A._NewObject(C.AMt,0));break;case 14:this.Ds(A._NewObject(
C.ARA,0));break;case 15:this.Ds(A._NewObject(C.ARB,0));break;case 13:this.Ds(A._NewObject(
C.ARC,0));break;case 16:this.Ds(A._NewObject(C.ATY,0));break;case 17:this.Ds(A._NewObject(
C.AMU,0));break;default:throw new Error(AWo+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Ds:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.WE).ArF(null);this.N0.AqG(this.OverlayMenu,A._GetAutoObject(
C.Axw),null,null,[B=this.OverlayMenu,B.Ayy],null,true);this.Bb(this.WI);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.N0.AkL(this.OverlayMenu,A._GetAutoObject(C.Axv),null
,null,null,null,null,[B=this.OverlayMenu,B.AIJ],null,false);this.Bb(this.N0);A._GetAutoObject(
C.WE).ArF(this.OverlayMenu.KQ());}else if(!!this.K$){this.Bb(this.N0);A._GetAutoObject(
C.WE).ArF(this.K$.Akq().KQ());}},Ahh:function(E){var B;if(this.K$===E)return;if(
!!this.K$){A._GetAutoObject(C.WE).ArF(null);this.N0.AqG(this.K$.Akq(),A._GetAutoObject(
C.Afe),null,null,[B=this.K$.Akq(),B.Ayy],null,false);this.Bb(this.WI);}this.K$=E;
if(!!this.K$){this.N0.AkL(this.K$.Akq(),A._GetAutoObject(C.Afe),null,null,null,null
,null,[this,this.Blb],null,false);this.Bb(this.N0);A._GetAutoObject(C.WE).ArF(this.
K$.Akq().KQ());}else if(!!this.OverlayMenu){this.Bb(this.N0);A._GetAutoObject(C.
WE).ArF(this.OverlayMenu.KQ());}},BxH:function(G){var B;var F;this.J(this.A3u,0);(
F=A._GetAutoObject(C.WE),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WE).M)[3]-B[1]))));this.ZE(this.N0);},A2O:function(G){if(A._GetAutoObject(A.Device.
Device).Amz)switch(A._GetAutoObject(A.Device.Device).KG){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A$).Aho(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa3<98)A._GetAutoObject(C.A$).Cg(4);}else{this.Az6=100;this.Bck();}},BzS:
function(G){this.Bck();},Bck:function(){if(!A._GetAutoObject(A.Device.Device).Amz
){if(A._GetAutoObject(A.Device.Device).Aa3<=2){if(this.Az6>2)switch(A._GetAutoObject(
A.Device.Device).KG){case 38:break;case 4:case 39:A._GetAutoObject(C.A$).Aho(38);
break;default:A._GetAutoObject(C.A$).Cg(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa3<=10){if(this.Az6>10)switch(A._GetAutoObject(A.Device.Device).KG){case
39:break;case 4:case 38:A._GetAutoObject(C.A$).Aho(39);break;default:A._GetAutoObject(
C.A$).Cg(39);}}else if(A._GetAutoObject(A.Device.Device).Aa3<=20){if(this.Az6>20
)switch(A._GetAutoObject(A.Device.Device).KG){case 39:break;case 4:case 38:A._GetAutoObject(
C.A$).Aho(39);break;default:A._GetAutoObject(C.A$).Cg(39);}}else switch(A._GetAutoObject(
A.Device.Device).KG){case 38:case 4:case 39:A._GetAutoObject(C.A$).Fv();break;default:;
}this.Az6=A._GetAutoObject(A.Device.Device).Aa3;}},BzT:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqt){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A9(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anu(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A9(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anu(0
);}break;default:A.ab5("%s",AWp+A._GetAutoObject(A.Device.Device).Aqt.toFixed());
}},ApN:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Ds(0);A._GetAutoObject(C.A$).Cg(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KG===5)A._GetAutoObject(C.A$).Aho(3);break;
default:;}},BeQ:function(G){switch(A._GetAutoObject(A.Device.Device).AhM){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Un(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WC(65535);A._GetAutoObject(A.Device.Device).Un(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WC(255);A._GetAutoObject(A.Device.Device).Un(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WC(16776960);A._GetAutoObject(
A.Device.Device).Un(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WC(16711935
);A._GetAutoObject(A.Device.Device).Un(true);}break;default:A.ab5("%s",AWq+A._GetAutoObject(
A.Device.Device).AhM.toFixed());}},Blb:function(G){var B;this.K$.Akq().CF(this);
this.K$.BAh(this);},Bkf:function(){return this.K$;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);C.AkJ._Init.call(this.AkJ={I:this},0);C.N0._Init.call(this.
N0={I:this},0);this.__proto__=C.GG;this.H(Cd);this.N0.H(Rl);this.J(this.N0,0);this.
WI=A._NewObject(C.WI,0);this.A3P=A._GetAutoObject(C.A$);this.AkJ.ANz=[this,this.
Bkf,this.Ahh];this.A3u=A._GetAutoObject(C.WE);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.P;this.AkJ._Done();this.N0._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AkJ._ReInit();this.N0._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaE)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3P)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.K$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A3u)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.Abh={A_C:null,Bx:null,N:null,Cr:null,Am8:null,Am_:null,QO:null,Am9:null,Am6:
null,Ana:null,Am7:null,DE:function(G){var Fe=0;var X=this.AV;switch(this.Cr.CO){
case 6:Fe=2;break;case 7:Fe=7;break;case 4:Fe=4;break;case 5:Fe=5;break;default:;
}X=this.QE(X,Fe,0x14);if(!!X)this.Bb(X);},Bbf:function(s){this.DE(s);},AlY:function(
G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);if(D5.Ach&&(this.D_().Asn===false)
)return;A.pe(this.D_().CC,this);},AIW:function(s){this.AlY(s);},ApM:function(G){
var D5=(A.Core.BM.isPrototypeOf(G)?G:null);if(D5.Ach&&(this.D_().ZD===false))return;
A.pe(this.D_().Cm,this);},AIZ:function(s){this.ApM(s);},IW:function(G){if(this.QO.
Ach)return;},Ath:function(s){this.IW(s);},AAw:function(G){var D5=(A.Core.BM.isPrototypeOf(
G)?G:null);if(D5.Ach&&(this.D_().ZC===false))return;A.pe(this.D_().Cl,this);},AIY:
function(s){this.AAw(s);},D_:function(){if(!!this.KQ())return this.Bx;else return this.
N;},KQ:function(){return this.Bx;},GN:function(E){this.A_C=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BM._Init.
call(this.Cr={I:this},0);A.Core.BM._Init.call(this.Am8={I:this},0);A.Core.BM._Init.
call(this.Am_={I:this},0);A.Core.BM._Init.call(this.QO={I:this},0);A.Core.BM._Init.
call(this.Am9={I:this},0);A.Core.BM._Init.call(this.Am6={I:this},0);A.Core.BM._Init.
call(this.Ana={I:this},0);A.Core.BM._Init.call(this.Am7={I:this},0);this.__proto__=
C.Abh;this.H([0,0,C.Asv[0],C.Asv[1]]);this.N.H(Xd);this.N.Ar(false);this.N.Z(false
);this.Cr.Filter=147;this.Am8.Filter=26;this.Am_.Filter=28;this.QO.Filter=1;this.
Am9.Filter=27;this.Am6.Filter=44;this.Ana.Filter=9;this.Am7.Filter=42;this.J(this.
N,0);this.Cr.BN=[this,this.Bbf];this.Cr.D1=[this,this.Bbf];this.Am8.BN=[this,this.
AIW];this.Am8.D1=[this,this.AIW];this.Am_.BN=[this,this.AIZ];this.Am_.D1=[this,this.
AIZ];this.QO.BN=[this,this.Ath];this.QO.D1=[this,this.Ath];this.Am9.BN=[this,this.
AIY];this.Am9.D1=[this,this.AIY];this.Am6.BN=[this,this.AIW];this.Am6.D1=[this,this.
AIW];this.Ana.BN=[this,this.AIZ];this.Ana.D1=[this,this.AIZ];this.Am7.BN=[this,this.
AIY];this.Am7.D1=[this,this.AIY];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cr._Done();this.Am8._Done();this.Am_._Done();this.QO._Done();this.
Am9._Done();this.Am6._Done();this.Ana._Done();this.Am7._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cr.
_ReInit();this.Am8._ReInit();this.Am_._ReInit();this.QO._ReInit();this.Am9._ReInit(
);this.Am6._ReInit();this.Ana._ReInit();this.Am7._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A_C)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Bx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Am_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Axv={_Init:function(){A.acl.AGI._Init.call(this,0);this.Kf=0x22;this.Ad4=true;
this.AuW=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.Axw={_Init:function(){A.acl.AGI._Init.call(this,0);this.Kf=0x22;this.Ad4=true;
this.AuW=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUG={R_:function(){var B;var Ao=(A.acl.Ae8.isPrototypeOf(B=A.acl.Aei.R_.call(this
))?B:null);if(!Ao)throw new Error(As1);Ao.Cq.Cw=100;return Ao;},R9:function(){var
B;var Ao=(A.acl.Axd.isPrototypeOf(B=A.acl.Aei.R9.call(this))?B:null);if(!Ao)throw new
Error(As1);Ao.E0.B2=100;return Ao;},_Init:function(aArg){A.acl.Aei._Init.call(this
,aArg);this.__proto__=C.AUG;},_className:"Application::ShadeTransition"};C.AmV={
Ag0:null,SS:null,HP:null,DS:null,AnimalId:-1,GroupId:-1,AC4:true,De:function(E){
C.BR.De.call(this,E);this.SS.L(E);this.HP.L(E);this.Ag0.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.acf.Ae_)
);else this.HP.R(E.toFixed());},Ab4:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SS.R(A.aaR(A.acf.Ae_));else this.SS.R(E.toFixed());},DY:function(
G){},Nl:function(s){this.DY(s);},A9J:function(E){if(this.AC4===E)return;this.AC4=
E;this.SS.Z(this.AC4);this.Ag0.Z(this.AC4);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag0={I:this},0);A.acg.Text._Init.call(this.SS={
I:this},0);A.acg.Text._Init.call(this.HP={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.AmV;this.Ag0.H(AWr);this.SS.H(AWs);this.SS.A6(0x11);this.
SS.R(A.aaR(A.acf.Ae_));this.HP.H(AWt);this.HP.A6(0x11);this.HP.R(A.aaR(A.acf.Ae_
));this.DS.H(AWu);this.J(this.Ag0,0);this.J(this.SS,0);this.J(this.HP,0);this.J(
this.DS,0);this.Ag0.Aw(A.aaL(A.ach.AQr));this.SS.S(A.aaL(A.fl.Af));this.HP.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BR;this.Ag0._Done();this.SS._Done(
);this.HP._Done();this.DS._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR.
_ReInit.call(this);this.Ag0._ReInit();this.SS._ReInit();this.HP._ReInit();this.DS.
_ReInit();this.SS.R(A.aaR(A.acf.Ae_));this.HP.R(A.aaR(A.acf.Ae_));this.SS.S(A.aaL(
A.fl.Af));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this
,D);if((B=this.Ag0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADc={Init:function(
aArg){var B;A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SC
],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper).W,B.A8w,B.AnA],0);
A.zV([this,this.Nl],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nl],[
B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.EC],0);A.zX([this,this.Nl],[B=A._GetAutoObject(
A.Device.Helper).W,B.A89,B.Aw$],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8n,B.AeY],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8o,B.Ul],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8r,B.Ae2],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Helper).W,B.A8v,B.
Ae4],0);A.pe([this,this.Nl],this);},De:function(E){C.AmV.De.call(this,E);this.DS.
De(E);},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqZ()){this.Ab4(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab4(-1);this.OnSetAnimalId(-1);}this.DS.
EC(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AEZ(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.AeY(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Ul(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae2(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae4(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmV._Init.call(this,aArg);this.
__proto__=C.ADc;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Ki={AhH:A.abi(3,A.jV,null),Cc:A.abi(3,0,{0:7,1:30,2:90}),Anj:3,Dn:function(){
if(this.Anj<3)return this.Anj;else return 3;},C4:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Anj))return-1;return this.Cc.Get(aIndex);},FY:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Anj))return AWv;return this.AhH.Get(aIndex);},DU:function(
A7){var O=0;while((O<3)&&(O<=this.Anj)){if(this.Cc.Get(O)===A7)return O;O=O+1;}return-
1;},HH:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Anj)){if(this.Cc.Get(
O)>max)max=this.Cc.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhH=[]).__proto__=C.Ki.AhH;(this.Cc=[]).__proto__=C.Ki.Cc;this.
__proto__=C.Ki;this.AhH.Set(0,A.aaR(A.acf.A7a));this.AhH.Set(1,A.aaR(A.acf.A6_));
this.AhH.Set(2,A.aaR(A.acf.A6$));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhH.Set(0,A.aaR(A.acf.A7a));this.AhH.Set(1,A.aaR(A.acf.A6_));this.AhH.Set(2,A.aaR(
A.acf.A6$));},_className:"Application::Days"};C.AUD={Amu:null,BT:null,Q3:null,QB:
null,A$q:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BAB],[B=A._GetAutoObject(A.Device.Device),B.Arz,B.Atg],0);},Bk:function(
aSize){},Ai:function(Ae){var B;var F;C.Dt.Ai.call(this,Ae);var Fr=((Ae&0x20)===0x20
);var GA=this.Bo.Bw;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWw+A._GetAutoObject(
A.Device.Converter).Ak0((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlI());this.H2.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6x())&&(
Fr||GA));},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));
},J_:function(G){var F;var BQ=this.AM;C.Dt.J_.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6x()){this.By(this.AM+10);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J5:function(G){var F;var BQ=this.
AM;C.Dt.J5.call(this,G);this.By(this.AM-10);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_l:function(E){if(this.A$q===E)return;
this.A$q=E;this.An();},BAB:function(G){this.An();},_Init:function(aArg){C.Dt._Init.
call(this,aArg);A.acg.AK._Init.call(this.Amu={I:this},0);C.CH._Init.call(this.BT={
I:this},0);A.acg.AK._Init.call(this.Q3={I:this},0);A.acg.Ap._Init.call(this.QB={
I:this},0);this.__proto__=C.AUD;this.H(UU);this.Background.H(UU);this.V.H(As2);this.
V.L(A.jb.Bm);this.Amu.H(AWx);this.Amu.L(A.jb.Afp);this.Ht.H(AWy);this.BT.H(AWz);
this.BT.A6(0x12);this.BT.L(A.jb.Text);this.H2.H(AWA);this.Q3.H(AWB);this.Q3.L(A.
jb.E1);this.QB.H(AWC);this.J(this.Amu,-2);this.J(this.BT,-1);this.J(this.Q3,0);this.
J(this.QB,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EL));this.BT.A2(A.aaL(A.fl.Af));this.QB.Aw(A.aaL(A.ach.ADt));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dt;this.Amu._Done();this.BT._Done();this.Q3.
_Done();this.QB._Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.
call(this);this.Amu._ReInit();this.BT._ReInit();this.Q3._ReInit();this.QB._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EL));this.
BT.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.
Amu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QB)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A_U={Q:null
,Ai2:null,Init:function(aArg){var B;A.zX([this,this.Bd8],[B=A._GetAutoObject(A.Device.
Device),B.AEp,B.BaC],0);A.pe([this,this.Bd8],this);},As:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Aho:function(All){A._GetAutoObject(A.Device.Device).Zp(All
);},Bd8:function(G){var F;if(!this.Q){A.ab5("%s",AWD);return;}var Bz=null;if(this.
Ai2.Contains(A._GetAutoObject(A.Device.Device).KG)){Bz=this.Ai2.A_A();while(!!Bz&&(
Bz.An5!==A._GetAutoObject(A.Device.Device).KG))Bz=this.Ai2.A_A();}if(!Bz)Bz=this.
Bzf(A._GetAutoObject(A.Device.Device).KG);(F=this.Q,F[2].call(F[0],Bz));},Bzf:function(
All){var Bz=null;switch(All){case 0:case 1:Bz=A._NewObject(C.AUL,0);break;case 2:
Bz=A._NewObject(C.X1,0);break;case 3:Bz=A._NewObject(C.Avr,0);break;case 53:Bz=A.
_NewObject(C.AVq,0);break;case 77:Bz=A._NewObject(C.NewMenu,0);break;case 27:Bz=
A._NewObject(C.ARU,0);break;case 6:Bz=A._NewObject(C.ARt,0);break;case 16:Bz=A._NewObject(
C.ANH,0);break;case 22:Bz=A._NewObject(C.AVl,0);break;case 17:Bz=A._NewObject(C.
AU2,0);break;case 42:Bz=A._NewObject(C.ANE,0);break;case 87:Bz=A._NewObject(C.AUe
,0);break;case 88:Bz=A._NewObject(C.AUd,0);break;case 89:Bz=A._NewObject(C.AVh,0
);break;case 95:Bz=A._NewObject(C.AVj,0);break;case 23:Bz=A._NewObject(C.AVJ,0);
break;case 18:Bz=A._NewObject(C.ANU,0);break;case 19:Bz=A._NewObject(C.AUf,0);break;
case 37:Bz=A._NewObject(C.AQW,0);break;case 76:Bz=A._NewObject(C.ATW,0);break;case
63:Bz=A._NewObject(C.ANS,0);break;case 64:Bz=A._NewObject(C.ANT,0);break;case 82:
Bz=A._NewObject(C.ANR,0);break;case 83:Bz=A._NewObject(C.ANP,0);break;case 92:Bz=
A._NewObject(C.ANN,0);break;case 93:Bz=A._NewObject(C.ANQ,0);break;case 65:Bz=A.
_NewObject(C.ANO,0);break;case 5:Bz=A._NewObject(C.AUV,0);break;case 4:Bz=A._NewObject(
C.Ad6,0);break;case 39:Bz=A._NewObject(C.ANe,0);break;case 38:Bz=A._NewObject(C.
ANx,0);break;case 28:Bz=A._NewObject(C.Wq,0);break;case 7:Bz=A._NewObject(C.AqJ,
0);break;case 81:Bz=A._NewObject(C.AN2,0);break;case 31:Bz=A._NewObject(C.Ars,0);
break;case 78:Bz=A._NewObject(C.ARS,0);break;case 34:Bz=A._NewObject(C.ALX,0);break;
case 35:Bz=A._NewObject(C.ManualActionScanScreen,0);break;case 32:Bz=A._NewObject(
C.SetTransponderScreen,0);break;case 45:Bz=A._NewObject(C.SetSaveTransponderScreen
,0);break;case 49:Bz=A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:
Bz=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case 79:Bz=A._NewObject(
C.MotherScanScreen,0);break;case 80:Bz=A._NewObject(C.SetSaveNaisIdScreen,0);break;
case 8:Bz=A._NewObject(C.GW,0);break;case 9:Bz=A._NewObject(C.I0,0);break;case 24:
Bz=A._NewObject(C.AMc,0);break;case 10:Bz=A._NewObject(C.Amq,0);break;case 21:Bz=
A._NewObject(C.AMg,0);break;case 11:Bz=A._NewObject(C.AMf,0);break;case 29:Bz=A.
_NewObject(C.AuD,0);break;case 48:Bz=A._NewObject(C.AMe,0);break;case 30:Bz=A._NewObject(
C.AMd,0);break;case 12:Bz=A._NewObject(C.AMb,0);break;case 40:Bz=A._NewObject(C.
AMa,0);break;case 14:Bz=A._NewObject(C.ANv,0);break;case 13:Bz=A._NewObject(C.ANw
,0);break;case 20:Bz=A._NewObject(C.AVA,0);break;case 41:Bz=A._NewObject(C.AVz,0
);break;case 43:Bz=A._NewObject(C.AOE,0);break;case 44:Bz=A._NewObject(C.AOD,0);
break;case 61:Bz=A._NewObject(C.AN1,0);break;case 62:Bz=A._NewObject(C.AN0,0);break;
case 46:Bz=A._NewObject(C.AR7,0);break;case 47:Bz=A._NewObject(C.AR6,0);break;case
85:Bz=A._NewObject(C.AVP,0);break;case 86:Bz=A._NewObject(C.AVO,0);break;case 71:
Bz=A._NewObject(C.AR2,0);break;case 72:Bz=A._NewObject(C.AR1,0);break;case 74:Bz=
A._NewObject(C.AMV,0);break;case 90:Bz=A._NewObject(C.ATZ,0);break;case 73:Bz=A.
_NewObject(C.AUg,0);break;case 51:Bz=A._NewObject(C.AL1,0);break;case 52:Bz=A._NewObject(
C.AL0,0);break;case 15:Bz=A._NewObject(C.AT5,0);break;case 60:Bz=A._NewObject(C.
AU1,0);break;case 69:Bz=A._NewObject(C.ARr,0);break;case 70:Bz=A._NewObject(C.ARq
,0);break;case 26:Bz=A._NewObject(C.ARV,0);break;case 54:Bz=A._NewObject(C.ARR,0
);break;case 25:Bz=A._NewObject(C.AOd,0);break;case 66:Bz=A._NewObject(C.AOe,0);
break;case 59:Bz=A._NewObject(C.AOc,0);break;case 58:Bz=A._NewObject(C.AOf,0);break;
case 56:Bz=A._NewObject(C.AOg,0);break;case 57:Bz=A._NewObject(C.AqM,0);break;case
68:Bz=A._NewObject(C.AOh,0);break;case 67:Bz=A._NewObject(C.AOa,0);break;case 84:
Bz=A._NewObject(C.AMi,0);break;case 33:Bz=A._NewObject(C.WeightListScreen,0);break;
case 36:Bz=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 50:Bz=A._NewObject(
C.AnimalMultiInfoScreen,0);break;case 75:Bz=A._NewObject(C.AMv,0);break;case 91:
Bz=A._NewObject(C.AU7,0);break;case 94:Bz=A._NewObject(C.Aqg,0);break;default:throw new
Error(AWE);}if(!!Bz)Bz.An5=All;return Bz;},Cg:function(All){var F;if(!(F=this.Q,
F[1].call(F[0])))A.ab5("%s",AWF);else this.Ai2.BnI((F=this.Q,F[1].call(F[0])));A.
_GetAutoObject(A.Device.Device).Zp(All);},Fv:function(){var Bfm=3;var Bfl=this.Ai2.
Bnx();if(!!Bfl)Bfm=Bfl.An5;else A.ab5("%s",AWG);A._GetAutoObject(A.Device.Device
).Zp(Bfm);},_Init:function(aArg){C.A_W._Init.call(this.Ai2={I:this},0);this.__proto__=
C.A_U;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=null;this.Ai2._Done(
);A.h7--;},_ReInit:function(){this.Ai2._ReInit();},_Mark:function(D){var B;if((B=
this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenLoaderClass"};C.A$={_Init:function(){C.A_U._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.AGb={H5:null,Yv:null,Afa:null,AaJ:null,My:null,Azp:1,RatingMode:0,RatedAttribute:
0,CP:function(){this.Yv.R(this.BcS(this.RatedAttribute));this.AKB(this);},Ai:function(
Ae){this.My.R(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.ARI),P7,this.Azp.
toFixed()));if(this.RatingMode===1)this.My.Z(true);else this.My.Z(false);},CF:function(
G){var B;C.AB.CF.call(this,G);if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);this.H5.Gn();this.H5.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);A._GetAutoObject(A.Device.Helper).Axo(this.H5,5);A.zX([this,this.AKB],[B=A._GetAutoObject(
A.Device.Device),B.ASC,B.AZ8],0);A.zX([this,this.AKB],[B=A._GetAutoObject(A.Device.
Helper).W,B.PM,B.EC],0);A.pe([this,this.AKB],this);},AsD:function(G){var a=this.
AKf(this.RatedAttribute);this.BfD();this.Azp=this.Azp-1;this.An();if(!a)this.ARP(
);else this.SB(a);},WN:function(G){var a=this.BcZ(this.RatedAttribute);this.BfD(
);this.Azp=this.Azp+1;this.An();if(!a)this.A7x();else this.SB(a);},AKf:function(
Nn){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Nn){case 1:return 2;
case 4:return 1;case 3:return 4;default:return 0;}else throw new Error(AHD);},BcZ:
function(Nn){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Nn){
case 2:return 1;case 1:return 4;case 4:return 3;default:return 0;}else throw new
Error(AHD);},SB:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=
E;this.Yv.R(this.BcS(E));this.DJ(E);this.Afa.AnF(this.H5.Biq(E));if(!this.AKf(E)
){if(this.AQ5())this.N.Cs(A.aaL(A.ach.AbB));else this.N.Cs(null);}else this.N.Cs(
A.aaL(A.ach.Aev));},BcS:function(Nn){return this.AaJ.BH(Nn);},Bze:function(Nn){if(
!!Nn){var a=this.AKf(Nn);if(!a)return A.jV;else return this.BcT(a);}else return A.
jV;},Bzd:function(Nn){if(!!Nn){var a=this.BcZ(Nn);if(!a)return A.jV;else return this.
BcT(a);}else return A.jV;},ARP:function(){},A7x:function(){},A6y:function(){return null;
},BcT:function(Nn){return this.AaJ.Ls(Nn);},BfD:function(){if(!!this.RatedAttribute
)this.H5.Boe(this.RatedAttribute,this.Afa.A4);},AKB:function(G){if(this.AQ5())this.
RatingMode=A._GetAutoObject(A.Device.Device).RatingMode;else this.RatingMode=0;this.
SB(2);this.DJ(this.RatedAttribute);this.An();},XC:function(G){A._GetAutoObject(A.
Device.Device).UpdateOverlayMenu(4);},AkV:function(G){var a=this.AKf(this.RatedAttribute
);if(!a){if(this.AQ5())this.XC(this);}else this.ARP();},DJ:function(Nn){this.N.Hu(
this.Bze(Nn));if(!!this.N.An0){this.N.CY(null);this.N.ON(true);}else{this.N.CY(A.
aaL(A.ach.Aev));this.N.ON(false);}this.N.CV(this.Bzd(Nn));if(!!this.N.An2){this.
N.C6(null);this.N.OO(true);}else{this.N.C6(this.A6y());this.N.OO(false);}},AQ5:function(
){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){case 0:case 2:return true;
case 1:return false;default:A.ab5("%s%e",Alc,A._GetAutoObject(A.Device.Helper).W.
AnimalType);}return false;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Yv={I:this},0);C.Rating._Init.call(this.Afa={I:this},0);A.Device.
RatedAttributeToString._Init.call(this.AaJ={I:this},0);A.acg.Text._Init.call(this.
My={I:this},0);this.__proto__=C.AGb;this.Background.L(A.jb.CK);this.N.Z(true);this.
Dq(C.IG);this.Yv.H(AWH);this.Yv.KR(true);this.Yv.L(A.jb.Text);this.Afa.H(AWI);this.
My.H(AWJ);this.My.A6(0x14);this.My.R(A.aaR(A.acf.ARI));this.My.L(A.jb.Text);this.
J(this.Yv,0);this.J(this.Afa,0);this.J(this.My,0);this.Bb(this.Afa);this.N.CC=[this
,this.AsD];this.N.Cl=[this,this.AkV];this.N.Cm=[this,this.WN];this.Yv.S(A.aaL(A.
fl.Af));this.Afa.AR=[this,this.WN];this.My.S(A.aaL(A.fl.Af));this.H5=A._NewObject(
A.Device.Rating,0);},_Done:function(){this.__proto__=C.AB;this.Yv._Done();this.Afa.
_Done();this.AaJ._Done();this.My._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Yv._ReInit();this.Afa._ReInit();this.AaJ._ReInit(
);this.My._ReInit();this.My.R(A.aaR(A.acf.ARI));this.Yv.S(A.aaL(A.fl.Af));this.My.
S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Afa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.My)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RateScreen"};C.HY={Y:null,Gender:null,AnimalType:null,Breed:null,Jd:
null,Pj:null,AsS:null,BZ:null,C$:null,C9:null,CG:null,Gj:null,Ay:null,KH:0,Init:
function(aArg){A.zX([this,this.Bbd],this.BZ.Q,0);A.pe([this,this.Bbd],this);A.pe([
this,this.AA4],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.
Device.Helper).ANs(this.Y);},DE:function(G){var B;var Fe=0;var X=this.AV;switch(
this.Cr.CO){case 6:Fe=2;break;case 7:Fe=7;break;case 4:Fe=4;break;case 5:Fe=5;break;
default:;}X=this.QE(X,Fe,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HD(X,true,null,null);this.AA4(this);},Fg:function(G){var B;this.Ay.Mu((B=
this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[
1]);},AeT:function(E){if(this.KH===E)return;this.KH=E;A.abo([this,this.Av4,this.
AeT],0);},AA4:function(G){var B;var GT=(C.Cp.isPrototypeOf(B=this.AV)?B:null);this.
N.Hu(A.jV);this.N.CY(A.aaL(A.ach.E2));this.N.CC=[this,this.AIV];if(!!GT&&!!GT.Amm
){this.N.FJ(A.jV);this.N.Kv.Dr(255);this.N.ArP(GT.AqR);this.N.Cs(GT.AvB);this.N.
Cl=GT.Amm;}else{this.N.FJ(A.jV);this.N.Cs(null);this.N.Cl=null;}if(!!GT&&!!GT.Ago
){this.N.CV(GT.AxF);this.N.HQ.Dr(GT.Axc);this.N.Anw(GT.AmP);this.N.C6(GT.Aq8);this.
N.Cm=GT.Ago;}else this.Auf();},Aga:function(G){A.ab5("%s",Aya);},AyL:function(s){
this.Aga(s);},Ew:function(G){A.ab5("%s",Aya);},AIV:function(s){this.Ew(s);},Auf:
function(){A.ab5("%s",Ald);},AAp:function(G){A.ab5("%s",Aya);},AcQ:function(s){this.
AAp(s);},JD:function(Ag){this.Bb(Ag);this.Y.HD(Ag,true,null,null);this.Y.Vu(null
,null);},ApI:function(G){var F;this.C9.Ahl(A._GetAutoObject(A.Device.Helper).Abp((
F=this.BZ.Q,F[1].call(F[0]))));},Bbd:function(s){this.ApI(s);},Av4:function(){return this.
KH;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UN._Init.call(
this.Jd={I:this},0);A.Device.MZ._Init.call(this.Pj={I:this},0);A.Device.KX._Init.
call(this.AsS={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.BW._Init.call(this.
C$={I:this},0);C.AkT._Init.call(this.C9={I:this},0);C.Axr._Init.call(this.CG={I:
this},0);C.Asy._Init.call(this.Gj={I:this},0);C.Ay._Init.call(this.Ay={I:this},0
);this.__proto__=C.HY;var B;this.N.Z(true);this.Dq(C.IG);this.Y.H(Fb);this.Y.JO(
1);this.KH=A._GetAutoObject(A.Device.Helper).Abp(this.AnimalType.Q);this.BZ.H(AhU
);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afo));this.C$.H(Ayb);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afj));this.C9.H(Aor);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KH)
);this.C9.F_(1000);this.C9.EV(99000);this.C9.Ahl(A._GetAutoObject(A.Device.Helper
).Abp(this.AnimalType.Q));this.CG.H(AhV);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.Gj.H(AWK);this.Gj.Aj(true);this.Gj.T(A.aaR(A.acf.Jd));this.Ay.H(Ayc
);this.J(this.Y,0);this.J(this.BZ,0);this.J(this.C$,0);this.J(this.C9,0);this.J(
this.CG,0);this.J(this.Gj,0);this.J(this.Ay,0);this.Y.El=[this,this.Fg];this.Gender.
LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.LY(A._GetAutoObject(A.Device.
Helper).W);this.Breed.LY(A._GetAutoObject(A.Device.Helper).W);this.Jd.LY(A._GetAutoObject(
A.Device.Helper).W);this.BZ.As([B=this.AnimalType,B.B8,B.B9]);this.BZ.CI(this.AnimalType
);this.C$.As([B=this.Gender,B.B8,B.B9]);this.C$.CI(this.Gender);this.C9.As([this
,this.Av4,this.AeT]);this.CG.Go([this,this.D_,this.GN]);this.CG.LX([B=this.CG,B.
FQ]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.As([B=this.Breed,B.B8,B.B9]);this.CG.
CI(this.Breed);this.CG.Anv(this.Pj);this.Gj.Go([this,this.D_,this.GN]);this.Gj.LX([
B=this.Gj,B.FQ]);this.Gj.L0(A.aaL(A.ach.Edit));this.Gj.As([B=this.Jd,B.B8,B.B9]);
this.Gj.CI(this.Jd);this.Gj.Anv(this.AsS);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed.
_Done();this.Jd._Done();this.Pj._Done();this.AsS._Done();this.BZ._Done();this.C$.
_Done();this.C9._Done();this.CG._Done();this.Gj._Done();this.Ay._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jd._ReInit();this.
Pj._ReInit();this.AsS._ReInit();this.BZ._ReInit();this.C$._ReInit();this.C9._ReInit(
);this.CG._ReInit();this.Gj._ReInit();this.Ay._ReInit();this.BZ.T(A.aaR(A.acf.Afo
));this.C$.T(A.aaR(A.acf.Afj));this.C9.T(A.aaR(A.acf.KH));this.CG.T(A.aaR(A.acf.
Breed));this.Gj.T(A.aaR(A.acf.Jd));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wq={Ay1:false,LN:function(G){if(A._GetAutoObject(A.Device.Device).Am.Lf())A._GetAutoObject(
A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gn();A._GetAutoObject(A.Device.Helper
).Aqj(A._GetAutoObject(A.Device.Helper).W);},Auf:function(){this.N.CV(A.jV);this.
N.C6(A.aaL(A.ach.ADx));this.N.Cm=[this,this.AyL];},CF:function(G){if(!this.Ay1){
this.Ay1=true;A.pe([this,this.AcQ],this);}else C.Ars.CF.call(this,G);},AAp:function(
G){A._GetAutoObject(C.A$).Cg(49);},_Init:function(aArg){C.Ars._Init.call(this,aArg
);this.__proto__=C.Wq;this.JU(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IG={_Init:function(aArg){C.ADc._Init.call(this,aArg);this.__proto__=C.IG;this.
A9J(false);},_className:"Application::HeaderSelectedAnimalId"};C.I0={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Ek:null,Y:null,PY:null,S0:null,N9:
null,S1:null,Nk:null,Os:null,RM:null,Ot:null,RN:null,ND:null,Lb:null,Jn:null,KV:
null,Mr:null,Yp:null,S2:null,RO:null,Ay:null,AxS:0,AxR:0,AuB:0,AuA:0,Arr:0,AsK:0
,Avd:0,Ave:0,Am1:true,Amp:false,An$:false,Init:function(aArg){A.zX([this,this.Avj
],this.Lb.Q,0);A.zX([this,this.AuG],this.Jn.Q,0);A.zX([this,this.Bpq],this.KV.Q,
0);A.zX([this,this.BjL],this.Mr.Q,0);A.zX([this,this.BpW],this.Nk.Q,0);A.zX([this
,this.BpV],this.N9.Q,0);A.zX([this,this.BgH],this.ND.Q,0);A.zX([this,this.BgG],this.
Ot.Q,0);this.Bb(this.PY);},DE:function(G){var Fe=0;var X=this.AV;switch(this.Cr.
CO){case 6:Fe=2;break;case 7:Fe=7;break;case 4:Fe=4;break;case 5:Fe=5;break;default:;
}X=this.QE(X,Fe,0x414);if(!!X)this.Bb(X);this.MN(this);},CF:function(G){if(!!A._GetAutoObject(
A.Device.Device).Am.Filter)this.Bl(A._GetAutoObject(A.Device.Device).Am.Filter.E8(
));else this.Bl(A._NewObject(A.Device.Filter,0));},Ew:function(G){A._GetAutoObject(
C.A$).Fv();},A2K:function(G){var EF=(C.Aem.isPrototypeOf(G)?G:null);if(!EF)return;
var Av=this.Filter.DL(EF.Ep,EF.Operator);if(!!Av){this.Filter.Nh(Av);A.abo([this
,this.Fk,this.Fo],0);}else{if(EF.Ep===11){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EK=EF.Ep;Av.Operator=EF.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EF.Ep===12){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EK=EF.Ep;Av.Operator=EF.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EF.Ep===8){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EK=EF.Ep;Av.Operator=EF.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else A.ab5("%s",AHE+EF.Ep.toFixed());if(!!Av){this.Filter.
CW(Av);A.abo([this,this.Fk,this.Fo],0);}}},BzQ:function(G){A._GetAutoObject(A.Device.
Device).Am.Bl(this.Filter);A._GetAutoObject(C.A$).Fv();},AAn:function(G){var EF=(
C.AmU.isPrototypeOf(G)?G:null);if(!EF)return;var Av=this.Filter.DL(EF.Ep,EF.Operator
);if(!!Av){this.Filter.Nh(Av);A.abo([this,this.Fk,this.Fo],0);}else{if(EF.Ep===7
){Av=A._NewObject(A.Device.GenderFilterCriterion,0);Av.EK=EF.Ep;Av.Operator=EF.Operator;
}else if(EF.Ep===14){Av=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Av.EK=
EF.Ep;Av.Operator=EF.Operator;}else if((EF.Ep===22)||(EF.Ep===26)){var A0N=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0N.EK=EF.Ep;A0N.Operator=0;Av=A0N;}else A.ab5(
"%s",AHE+EF.Ep.toFixed());if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fk,this.Fo
],0);}}},A9E:function(E){if(this.Avd===E)return;this.Avd=E;A.abo([this,this.Bkp,
this.A9E],0);},A9F:function(E){if(this.Ave===E)return;this.Ave=E;A.abo([this,this.
Bkq,this.A9F],0);},Avj:function(G){var F;this.A9F((F=this.Lb.Q,F[1].call(F[0])));
var Av=this.Filter.DL(7,0);if(!!Av){var AzJ=(A.Device.GenderFilterCriterion.isPrototypeOf(
Av)?Av:null);if(!!AzJ)AzJ.A4=this.Ave;else A.ab5("%s",AfA);}},AuG:function(G){var
F;this.A9E((F=this.Jn.Q,F[1].call(F[0])));var Av=this.Filter.DL(14,0);if(!!Av){var
U3=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Av)?Av:null);if(!!U3)U3.A4=
this.Avd;else A.ab5("%s",AfA);}},Fg:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1
))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},A_k:function(
E){if(this.AsK===E)return;this.AsK=E;A.abo([this,this.Bk2,this.A_k],0);},Bpq:function(
G){var F;this.A_k((F=this.KV.Q,F[1].call(F[0])));var Av=this.Filter.DL(22,1);if(
!!Av){var Aja=(A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!Aja
)switch(this.AsK){case 1:Aja.Operator=5;break;case 0:Aja.Operator=0;break;default:
A.ab5("%s%e",AHF,this.AsK);}else A.ab5("%s",AfA);}},A9R:function(E){if(this.Arr===
E)return;this.Arr=E;A.abo([this,this.BkF,this.A9R],0);},BjL:function(G){var F;this.
A9R((F=this.Mr.Q,F[1].call(F[0])));var Av=this.Filter.DL(26,1);if(!!Av){var AtV=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AtV)switch(this.Arr
){case 1:AtV.Operator=5;break;case 0:AtV.Operator=0;break;default:A.ab5("%s%e",AHF
,this.Arr);}else A.ab5("%s",AfA);}},Bl:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PY.Bl([this,this.Fk,this.Fo]);this.S0.
Bl([this,this.Fk,this.Fo]);this.N9.Bl([this,this.Fk,this.Fo]);this.S1.Bl([this,this.
Fk,this.Fo]);this.Nk.Bl([this,this.Fk,this.Fo]);this.Os.Bl([this,this.Fk,this.Fo
]);this.RM.Bl([this,this.Fk,this.Fo]);this.Ot.Bl([this,this.Fk,this.Fo]);this.RN.
Bl([this,this.Fk,this.Fo]);this.ND.Bl([this,this.Fk,this.Fo]);this.Lb.Bl([this,this.
Fk,this.Fo]);this.Jn.Bl([this,this.Fk,this.Fo]);this.KV.Bl([this,this.Fk,this.Fo
]);this.Mr.Bl([this,this.Fk,this.Fo]);this.Yp.Bl([this,this.Fk,this.Fo]);this.S2.
Bl([this,this.Fk,this.Fo]);this.RO.Bl([this,this.Fk,this.Fo]);this.Ar9(false);A.
pe([this,this.A4g],this);var BdA=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DL(1,2))?B:null);if(!!BdA){this.Ar9(true);this.AFU(BdA.A4);}var Bc5=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DL(1,3))?B:null);if(!!
Bc5){this.Ar9(true);this.AFV(Bc5.A4);}this.ArI(false);A.pe([this,this.ALh],this);
var Bdz=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DL(4,3))?B:null
);if(!!Bdz){this.ArI(true);this.AEI(A._GetAutoObject(A.Device.Helper).MM(Bdz.A4,
A._GetAutoObject(A.Device.Helper).Dv()));}var Bc4=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DL(4,2))?B:null);if(!!Bc4){this.ArI(true);this.AEK(A.
_GetAutoObject(A.Device.Helper).MM(Bc4.A4,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var AzJ=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DL(7,0
))?B:null);if(!!AzJ)this.Lb.By(this.Gender.DU(AzJ.A4));var U3=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DL(14,0))?B:null);if(!!U3)this.Jn.By(this.AnimalType.
DU(U3.A4));var Aja=this.Filter.DL(22,1);if(!!Aja){if(!Aja.Operator)this.KV.By(0);
else this.KV.By(1);}var AtV=this.Filter.DL(26,1);if(!!AtV){if(!AtV.Operator)this.
Mr.By(0);else this.Mr.By(1);}},Fo:function(Aq){this.Bl(Aq);},AFV:function(E){if(
this.AxS===E)return;this.AxS=E;A.abo([this,this.A81,this.AFV],0);},AFU:function(
E){if(this.AxR===E)return;this.AxR=E;A.abo([this,this.A80,this.AFU],0);},BpW:function(
G){var F;this.AFV((F=this.Nk.Q,F[1].call(F[0])));var Av=this.Filter.DL(1,3);if(!
!Av){var ABp=(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!ABp)
ABp.A4=this.AxS;else A.ab5("%s",AfA);}},BpV:function(G){var F;this.AFU((F=this.N9.
Q,F[1].call(F[0])));var Av=this.Filter.DL(1,2);if(!!Av){var ABp=(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!ABp)ABp.A4=this.AxR;else A.ab5("%s",AfA);}},Bd5:
function(G){var EF=(C.AjI.isPrototypeOf(G)?G:null);if(!EF)return;var Av=this.Filter.
DL(EF.Ep,EF.Operator);if(!!Av){this.Filter.Nh(Av);A.abo([this,this.Fk,this.Fo],0
);}else{if(EF===this.S0){Av=A._NewObject(A.Device.Int32FilterCriterion,0);Av.EK=
EF.Ep;Av.Operator=EF.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:
null).A4=this.AxR;this.Bb(this.N9);}else if(EF===this.S1){Av=A._NewObject(A.Device.
Int32FilterCriterion,0);Av.EK=EF.Ep;Av.Operator=EF.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=this.AxS;this.Bb(this.Nk);}if(!!Av){this.Filter.CW(
Av);A.abo([this,this.Fk,this.Fo],0);}}A.pe([this,this.A4g],this);},A4g:function(
G){var A2t=!!this.Filter.DL(this.N9.Ep,this.N9.Operator);var A4h=!!this.Filter.DL(
this.Nk.Ep,this.Nk.Operator);A._GetAutoObject(A.Device.Helper).JV(this.S0,this.An$
);A._GetAutoObject(A.Device.Helper).JV(this.S1,this.An$);A._GetAutoObject(A.Device.
Helper).JV(this.N9,A2t);A._GetAutoObject(A.Device.Helper).JV(this.Nk,A4h);},MN:function(
G){var B;this.Y.Vu(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},BAI:function(G){A.pe([this,this.Fg],this);A.pe([this,this.
MN],this);},BzN:function(G){this.Ar9(!this.An$);if(this.An$===false){var Av=this.
Filter.DL(this.PY.Ep,this.PY.Operator);while(!!Av){this.Filter.Nh(Av);Av=this.Filter.
DL(this.PY.Ep,this.PY.Operator);}A.abo([this,this.Fk,this.Fo],0);}},Ar9:function(
E){if(this.An$===E)return;this.An$=E;A.abo([this,this.A8Z,this.Ar9],0);A.pe([this
,this.A4g],this);},AEK:function(E){if(this.AuB===E)return;this.AuB=E;A.abo([this
,this.A77,this.AEK],0);},AEI:function(E){if(this.AuA===E)return;this.AuA=E;A.abo([
this,this.A75,this.AEI],0);},BgH:function(G){var F;this.AEK((F=this.ND.Q,F[1].call(
F[0])));var Av=this.Filter.DL(4,2);if(!!Av){var AfN=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!AfN){var AaO=A._GetAutoObject(A.Device.Helper).ZQ(
this.AuB-1);AfN.A4=AaO;}else A.ab5("%s",AfA);}},BgG:function(G){var F;this.AEI((
F=this.Ot.Q,F[1].call(F[0])));var Av=this.Filter.DL(4,3);if(!!Av){var AfN=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AfN){var AaO=A._GetAutoObject(
A.Device.Helper).ZQ(this.AuA);AfN.A4=AaO;}else A.ab5("%s",AfA);}},ALh:function(G
){var A2t=this.Am1&&!!this.Filter.DL(this.Ot.Ep,this.Ot.Operator);var A4h=this.Am1&&
!!this.Filter.DL(this.ND.Ep,this.ND.Operator);A._GetAutoObject(A.Device.Helper).
JV(this.Os,this.Am1);A._GetAutoObject(A.Device.Helper).JV(this.RM,this.Am1&&this.
Amp);A._GetAutoObject(A.Device.Helper).JV(this.RN,this.Am1&&this.Amp);A._GetAutoObject(
A.Device.Helper).JV(this.Ot,A2t);A._GetAutoObject(A.Device.Helper).JV(this.ND,A4h
);},ArI:function(E){if(this.Amp===E)return;this.Amp=E;A.abo([this,this.A74,this.
ArI],0);A.pe([this,this.ALh],this);},Bd4:function(G){var EF=(C.AjI.isPrototypeOf(
G)?G:null);if(!EF)return;var Av=this.Filter.DL(EF.Ep,EF.Operator);if(!!Av){this.
Filter.Nh(Av);A.abo([this,this.Fk,this.Fo],0);}else{if(EF===this.RM){Av=A._NewObject(
A.Device.UInt32FilterCriterion,0);Av.EK=EF.Ep;Av.Operator=EF.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper
).ZQ(this.AuA);this.Bb(this.Ot);}else if(EF===this.RN){Av=A._NewObject(A.Device.
UInt32FilterCriterion,0);Av.EK=EF.Ep;Av.Operator=EF.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper).ZQ(this.AuB-1);this.
Bb(this.ND);}if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fk,this.Fo],0);}}A.pe([
this,this.ALh],this);},BzM:function(G){this.ArI(!this.Amp);if(this.Amp===false){
var Av=this.Filter.DL(this.Os.Ep,this.Os.Operator);while(!!Av){this.Filter.Nh(Av
);Av=this.Filter.DL(this.Os.Ep,this.Os.Operator);}A.abo([this,this.Fk,this.Fo],0
);}},Bmo:function(E){if(this.Am1===E)return;this.Am1=E;A.pe([this,this.ALh],this
);},Fk:function(){return this.Filter;},Bkq:function(){return this.Ave;},Bkp:function(
){return this.Avd;},Bk2:function(){return this.AsK;},BkF:function(){return this.
Arr;},A81:function(){return this.AxS;},A80:function(){return this.AxR;},A8Z:function(
){return this.An$;},A77:function(){return this.AuB;},A75:function(){return this.
AuA;},A74:function(){return this.Amp;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABH._Init.call(this.Transponder={I:this},0);C.ABH._Init.
call(this.Ek={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ABS._Init.call(
this.PY={I:this},0);C.AjI._Init.call(this.S0={I:this},0);C.Abo._Init.call(this.N9={
I:this},0);C.AjI._Init.call(this.S1={I:this},0);C.Abo._Init.call(this.Nk={I:this
},0);C.ABS._Init.call(this.Os={I:this},0);C.AjI._Init.call(this.RM={I:this},0);C.
ACG._Init.call(this.Ot={I:this},0);C.AjI._Init.call(this.RN={I:this},0);C.ACG._Init.
call(this.ND={I:this},0);C.AmU._Init.call(this.Lb={I:this},0);C.AmU._Init.call(this.
Jn={I:this},0);C.AmU._Init.call(this.KV={I:this},0);C.AmU._Init.call(this.Mr={I:
this},0);C.Qz._Init.call(this.Yp={I:this},0);C.Qz._Init.call(this.S2={I:this},0);
C.Qz._Init.call(this.RO={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I0;var B;this.N.Z(true);this.N.CV(A.aaR(A.acf.A4R));this.Dq(C.APx);this.Gender.
As(this.Ave);this.AnimalType.As(this.Avd);this.Transponder.As(this.AsK);this.Ek.
As(this.Arr);this.Y.H(Fb);this.Y.JO(1);this.PY.H(IR);this.PY.Aj(true);this.PY.T(
A._GetAutoObject(A.Device.Helper).AmS(0,1));this.PY.Nb(1);this.S0.H(P8);this.S0.
Aj(true);this.S0.T(A.aaR(A.acf.AD5));this.S0.Nb(1);this.S0.OM(2);this.N9.H(Aae);
this.N9.Nb(1);this.N9.OM(2);this.N9.AFM(A.aaR(A.acf.GJ));this.S1.H(Ale);this.S1.
Aj(true);this.S1.T(A.aaR(A.acf.AG7));this.S1.Nb(1);this.S1.OM(3);this.Nk.H(Aos);
this.Nk.Aj(true);this.Nk.Nb(1);this.Nk.OM(3);this.Nk.AFM(A.aaR(A.acf.GJ));this.Os.
H(AWL);this.Os.Aj(true);this.Os.T(A.aaR(A.acf.RL));this.Os.Nb(4);this.RM.H(AWM);
this.RM.Aj(true);this.RM.T(A.aaR(A.acf.AD5));this.RM.Nb(4);this.RM.OM(3);this.Ot.
H(AWN);this.Ot.Nb(4);this.Ot.OM(3);this.Ot.A9W(2);this.RN.H(AWO);this.RN.Aj(true
);this.RN.T(A.aaR(A.acf.AG7));this.RN.Nb(4);this.RN.OM(2);this.ND.H(AWP);this.ND.
Aj(true);this.ND.Nb(4);this.ND.OM(2);this.ND.A9W(3);this.Lb.H(As3);this.Lb.Aj(true
);this.Lb.Nb(7);this.Lb.Ahn(0);this.Lb.OM(0);this.Jn.H(Xd);this.Jn.Aj(true);this.
Jn.Nb(14);this.Jn.Ahn(0);this.Jn.OM(0);this.KV.H(Xd);this.KV.Aj(true);this.KV.Nb(
22);this.KV.Ahn(0);this.KV.OM(1);this.Mr.H(Xd);this.Mr.Aj(true);this.Mr.Nb(26);this.
Mr.Ahn(0);this.Mr.OM(1);this.Yp.H(Xd);this.Yp.Aj(true);this.Yp.Nb(11);this.Yp.Ahn(
0);this.Yp.OM(0);this.S2.H(Xd);this.S2.Aj(true);this.S2.Nb(12);this.S2.Ahn(0);this.
S2.OM(0);this.RO.H(Xd);this.RO.Aj(true);this.RO.Nb(8);this.RO.Ahn(0);this.RO.OM(
0);this.Ay.H(Iq);this.J(this.Y,0);this.J(this.PY,0);this.J(this.S0,0);this.J(this.
N9,0);this.J(this.S1,0);this.J(this.Nk,0);this.J(this.Os,0);this.J(this.RM,0);this.
J(this.Ot,0);this.J(this.RN,0);this.J(this.ND,0);this.J(this.Lb,0);this.J(this.Jn
,0);this.J(this.KV,0);this.J(this.Mr,0);this.J(this.Yp,0);this.J(this.S2,0);this.
J(this.RO,0);this.J(this.Ay,0);this.N.CC=[this,this.Ew];this.N.Cm=[this,this.BzQ
];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.BAI];this.PY.AR=[this,this.BzN
];this.PY.As([this,this.A8Z,this.Ar9]);this.S0.AR=[this,this.Bd5];this.N9.Go([this
,this.D_,this.GN]);this.N9.As([this,this.A80,this.AFU]);this.S1.AR=[this,this.Bd5
];this.Nk.Go([this,this.D_,this.GN]);this.Nk.As([this,this.A81,this.AFV]);this.Os.
AR=[this,this.BzM];this.Os.As([this,this.A74,this.ArI]);this.RM.AR=[this,this.Bd4
];this.Ot.Go([this,this.D_,this.GN]);this.Ot.As([this,this.A75,this.AEI]);this.RN.
AR=[this,this.Bd4];this.ND.Go([this,this.D_,this.GN]);this.ND.As([this,this.A77,
this.AEK]);this.Lb.AR=[this,this.AAn];this.Lb.As([B=this.Gender,B.B8,B.B9]);this.
Lb.CI(this.Gender);this.Jn.AR=[this,this.AAn];this.Jn.As([B=this.AnimalType,B.B8
,B.B9]);this.Jn.CI(this.AnimalType);this.KV.AR=[this,this.AAn];this.KV.As([B=this.
Transponder,B.B8,B.B9]);this.KV.CI(this.Transponder);this.Mr.AR=[this,this.AAn];
this.Mr.As([B=this.Ek,B.B8,B.B9]);this.Mr.CI(this.Ek);this.Yp.AR=[this,this.A2K];
this.S2.AR=[this,this.A2K];this.RO.AR=[this,this.A2K];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.Ek._Done();this.Y._Done();this.PY._Done();this.S0._Done();this.N9._Done(
);this.S1._Done();this.Nk._Done();this.Os._Done();this.RM._Done();this.Ot._Done(
);this.RN._Done();this.ND._Done();this.Lb._Done();this.Jn._Done();this.KV._Done(
);this.Mr._Done();this.Yp._Done();this.S2._Done();this.RO._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.Ek._ReInit();
this.Y._ReInit();this.PY._ReInit();this.S0._ReInit();this.N9._ReInit();this.S1._ReInit(
);this.Nk._ReInit();this.Os._ReInit();this.RM._ReInit();this.Ot._ReInit();this.RN.
_ReInit();this.ND._ReInit();this.Lb._ReInit();this.Jn._ReInit();this.KV._ReInit(
);this.Mr._ReInit();this.Yp._ReInit();this.S2._ReInit();this.RO._ReInit();this.Ay.
_ReInit();this.N.CV(A.aaR(A.acf.A4R));this.S0.T(A.aaR(A.acf.AD5));this.N9.AFM(A.
aaR(A.acf.GJ));this.S1.T(A.aaR(A.acf.AG7));this.Nk.AFM(A.aaR(A.acf.GJ));this.Os.
T(A.aaR(A.acf.RL));this.RM.T(A.aaR(A.acf.AD5));this.RN.T(A.aaR(A.acf.AG7));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.N9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Os)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ot)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A_W={ZR:null,BnI:
function(Bxj){var EG=A._NewObject(C.A_V,0);EG.AB=Bxj;EG.Ms=this.ZR;this.ZR=EG;},
A_A:function(){var Vi=null;if(!!this.ZR){Vi=this.ZR.AB;this.ZR=this.ZR.Ms;}return Vi;
},Contains:function(All){var EG=this.ZR;while(!!EG){if(EG.AB.An5===All)return true;
EG=EG.Ms;}return false;},Bnx:function(){if(!!this.ZR)return this.ZR.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A_W;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A_V={AB:null,
Ms:null,_Init:function(aArg){this.__proto__=C.A_V;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMf={ARP:function(){A._GetAutoObject(
A.Device.Helper).Axo(this.H5,0);A._GetAutoObject(C.A$).Fv();},A7x:function(){this.
H5.Ch(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fv();},A6y:function(
){return A.aaL(A.ach.AmZ);},_Init:function(aArg){C.AGb._Init.call(this,aArg);this.
__proto__=C.AMf;this.Dq(C.IG);},_className:"Application::AnimalActionRateScreen"
};C.AMb={Ww:function(G){this.Agp();this.IY(A.aaR(A.acf.AVa),[this,this.ATC],5);this.
IY(A.aaR(A.acf.A5i),[this,this.Bln],4);this.IY(A.aaR(A.acf.AGa),[this,this.ATn],
3);this.IY(A.aaR(A.acf.AnZ),[this,this.AwO],2);this.IY(A.aaR(A.acf.AdQ),[this,this.
AEN],1);this.IY(A.aaR(A.acf.Aux),[this,this.AEH],0);A._GetAutoObject(C.BS).FT();
A._GetAutoObject(C.BS).NC(A.aaR(A.acf.And)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},DE:function(G){},Abr:function(){return C.AM6;},Abs:function(
){return C.ADe;},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
AyZ=A._NewObject(A.Device.BoolFilterCriterion,0);AyZ.Initialize(8,0,true,true);Be.
CW(AyZ);A._GetAutoObject(A.Device.Device).Am.Bl(Be);},HO:function(G){C.GW.HO.call(
this,G);if(this.Akh()===false){this.N.Cs(A.aaL(A.ach.AGj));this.N.Cl=[this,this.
A5P];this.N.FJ(A.jV);}this.N.ON(false);this.N.OO(false);},Agc:function(){A._GetAutoObject(
C.A$).Cg(40);},_Init:function(aArg){C.GW._Init.call(this,aArg);this.__proto__=C.
AMb;var B;this.Dq(C.AOY);this.Dz(A.aaR(A.acf.A7D));this.AwJ([B=A._GetAutoObject(
A.Device.Device),B.A78,B.BaE]);},_ReInit:function(){C.GW._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7D));},_className:"Application::AlarmListScreen"};C.ANv={DE:function(
G){},AlZ:function(G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gp);var Aa=(C.ABZ.isPrototypeOf(
G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper).HL(Aa.Hn);A._GetAutoObject(
C.A$).Cg(13);}},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Azh=A._NewObject(A.Device.BoolFilterCriterion,0);Azh.Initialize(9,0,true,true);Be.
CW(Azh);A._GetAutoObject(A.Device.Device).Am.Bl(Be);},HO:function(G){C.GW.HO.call(
this,G);this.N.ON(false);this.N.OO(false);},_Init:function(aArg){C.GW._Init.call(
this,aArg);this.__proto__=C.ANv;this.Dq(C.AO0);this.Dz(A.aaR(A.acf.A7E));},_ReInit:
function(){C.GW._ReInit.call(this);this.Dz(A.aaR(A.acf.A7E));},_className:"Application::ControlListScreen"
};C.Aem={Filter:null,Ep:0,I_:10,TableId:0,Operator:1,CP:function(){var F;this.To((
F=this.Filter,F[1].call(F[0])).DL(this.Ep,this.Operator));},Bk:function(aSize){C.
Cp.Bk.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.I_),aSize[1]]));
},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$],E,0);A.pe([this,this.
L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.To((F=this.Filter,F[1].call(F[0])).DL(this.Ep,this.Operator));else this.
To(null);},Ahn:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.L$],this);},Nb:function(E){if(this.Ep===E)return;this.Ep=E;A.pe([this,this.
L$],this);},To:function(AH){if(!!AH)this.T(A._GetAutoObject(A.Device.Helper).A6s(
this.TableId,AH));else this.T(A._GetAutoObject(A.Device.Helper).AmS(this.TableId
,this.Ep));},OM:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.L$],this);},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=
C.Aem;this.V.H(AHG);this.V.A6(0x11);},_ReInit:function(){C.Cp._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
Qz={H4:null,Bk:function(aSize){var B;C.Aem.Bk.call(this,aSize);this.H4.H([(aSize[
0]-((B=this.H4.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.I_,0,this.
H4.M[0]-this.I_,aSize[1]]);},To:function(AH){this.T(A._GetAutoObject(A.Device.Helper
).AmS(this.TableId,this.Ep));var Av=(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Av&&Av.A4)this.H4.Cv(1);else this.H4.Cv(0);},_Init:function(aArg
){C.Aem._Init.call(this,aArg);A.acg.Ap._Init.call(this.H4={I:this},0);this.__proto__=
C.Qz;this.H4.H(AHH);this.H4.Cv(0);this.J(this.H4,0);this.H4.Aw(A.aaL(A.ach.AqP));
},_Done:function(){this.__proto__=C.Aem;this.H4._Done();C.Aem._Done.call(this);}
,_ReInit:function(){C.Aem._ReInit.call(this);this.H4._ReInit();},_Mark:function(
D){var B;C.Aem._Mark.call(this,D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APx={Ap:null,Text:null,De:function(
E){C.BR.De.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APx;this.Ap.H(AWQ);this.Text.H(AWR);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Aw(A.aaL(A.ach.Aex));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BR;this.Ap._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjS={
AW:null,T1:null,Gr:null,D2:null,A_:null,Init:function(aArg){var B;A.zV([this,this.
DY],A._GetAutoObject(A.Device.Device).Am,0);A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fk,B.Fo],0);A.pe([this,this.DY],this);},Bk:function(aSize){
var B;C.BR.Bk.call(this,aSize);this.T1.H(A.abJ(this.T1.M,A.abe(this.AW.M.slice(0
,2),AWS)));this.T1.H(A.abK(this.T1.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AWT
)));},Ai:function(Ae){var B;C.BR.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(Iy)this.T1.L(A.jb.AV);else this.T1.L(A.jb.Am0);},De:function(E){
C.BR.De.call(this,E);this.Gr.L(E);this.D2.Zt(E);},Wx:function(E){C.BR.Wx.call(this
,E);this.D2.CT(E);},Akp:function(){return this.AW.Akp();},Awa:function(){return this.
AW.Awa();},DY:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed(
));},_Init:function(aArg){C.BR._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BU._Init.call(this.T1={I:this},0);A.acg.Ap._Init.call(this.Gr={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C5._Init.call(this.A_={I:this
},0);this.__proto__=C.AjS;this.AW.H(AWU);this.T1.H(AWV);this.T1.Nf(2);this.Gr.H(
AWW);this.Gr.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(AWX);this.D2.Zt(A.jb.Bm);this.
D2.CT(A.jb.Re);this.D2.Hh(2);this.A_.DC(AWY);this.A_.DM(AWZ);this.A_.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.T1,0);this.J(this.Gr,0);this.J(this.D2,0);this.J(this.
A_,0);this.Bb(this.AW);this.Gr.Aw(A.aaL(A.ach.Gr));this.D2.S(A.aaL(A.fl.Bi));this.
Init(aArg);},_Done:function(){this.__proto__=C.BR;this.AW._Done();this.T1._Done(
);this.Gr._Done();this.D2._Done();this.A_._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.AW._ReInit();this.T1._ReInit();this.Gr._ReInit(
);this.D2._ReInit();this.A_._ReInit();this.D2.S(A.aaL(A.fl.Bi));},_Mark:function(
D){var B;C.BR._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DF={Di:null,Im:null,Il:null
,Af$:function(G){if(this.Ez<0)this.LZ(1);else if(this.Ez===9)this.LZ(0);else this.
LZ(this.Ez+1);A.pe(this.Di,this);},Ai:function(Ae){var B;C.Ez.Ai.call(this,Ae);var
G$=((Ae&0x10)===0x10);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.Dr(256);}else if(G$){this.Background.L(this.MY);this.
Text.L(A.jb.Text);this.Dr(256);}else{this.Background.L(this.MY);this.Text.L(A.jb.
Text);this.Dr(128);}},Af_:function(G){if(this.Ez<=0)this.LZ(9);else this.LZ(this.
Ez-1);A.pe(this.Di,this);},_Init:function(aArg){C.Ez._Init.call(this,aArg);A.Core.
BM._Init.call(this.Im={I:this},0);A.Core.BM._Init.call(this.Il={I:this},0);this.
__proto__=C.DF;this.Im.Filter=4;this.Il.Filter=5;this.Im.BN=[this,this.Af$];this.
Im.D1=[this,this.Af$];this.Il.BN=[this,this.Af_];this.Il.D1=[this,this.Af_];},_Done:
function(){this.__proto__=C.Ez;this.Im._Done();this.Il._Done();C.Ez._Done.call(this
);},_ReInit:function(){C.Ez._ReInit.call(this);this.Im._ReInit();this.Il._ReInit(
);},_Mark:function(D){var B;C.Ez._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Il)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Di:null,Ct:null,CU:null,Dx:null,Eo:null,FW:null,ET:null,Fi:null,E_:null,M3:0,AQ6:
false,Aqs:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqs)this.ET.AeU(true);else this.ET.AeU(false);},AwF:function(E){var B;
if(E===this.Akp())return;var Af5=E;var DW=this.ET;while(!!DW){if(Af5>0){DW.LZ(Af5
%10);Af5=(Af5/10)|0;}else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=this.QE(DW,2,0x11))?
B:null);}},Akp:function(){return A.wz(this.Awa(),-1,10);},Ol:function(G){if(this.
FW.Ez>=0)this.BfO(7);},MT:function(G){if(((this.Akp()>0)||this.AQ6)&&(this.Ct.Ez<
0))this.BfO(2);else if(this.Akp()<=0)this.E_.NH=true;},Adp:function(G){A.pe(this.
Di,this);},BfO:function(Gw){var B;var ALv=0;var DW=null;switch(Gw){case 2:{DW=this.
Ct;ALv=7;}break;case 7:{DW=this.ET;ALv=2;}break;default:throw new Error(AW0);}while(
!!DW){var A2D=(C.DF.isPrototypeOf(B=this.QE(DW,ALv,0x11))?B:null);if(!!A2D)DW.LZ(
A2D.Ez);else if(ALv===7)DW.LZ(0);else DW.LZ(-1);DW=A2D;}A.pe([this,this.Adp],this
);},AeU:function(E){if(this.Aqs===E)return;this.Aqs=E;this.An();},Bmp:function(E
){if(this.AQ6===E)return;this.AQ6=E;},AS4:function(E){var B;if(E===this.Awa())return;
var Af5=E;var DW=this.ET;while(!!DW){if(Af5.length>0){DW.LZ(A.wz(A.ab2(Af5,1),-1
,10));Af5=A.abV(Af5,Af5.length-1);}else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=this.
QE(DW,2,0x11))?B:null);}},Awa:function(){var B;var Iw=A.jV;var O=0;var B6=this.Ct;
for(;O<6;O=O+1){if(!!B6&&(B6.Ez>=0))Iw=Iw+B6.Ez.toFixed();B6=(C.DF.isPrototypeOf(
B=this.TL(B6,0x11))?B:null);}return Iw;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Ct={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.Eo={I:this},0);C.DF.
_Init.call(this.FW={I:this},0);C.DF._Init.call(this.ET={I:this},0);A.Core.BM._Init.
call(this.Fi={I:this},0);A.Core.BM._Init.call(this.E_={I:this},0);this.__proto__=
C.AW;this.H(Ayd);this.Ct.AZ(0x3);this.Ct.H(AHI);this.CU.AZ(0x3);this.CU.H(AHJ);this.
Dx.AZ(0x3);this.Dx.H(AHK);this.Eo.AZ(0x3);this.Eo.H(AHL);this.FW.AZ(0x3);this.FW.
H(AHM);this.ET.AZ(0x3);this.ET.H(AHN);this.ET.LZ(0);this.Fi.Filter=6;this.E_.Filter=
7;this.M3=A.jb.CK;this.J(this.Ct,0);this.J(this.CU,0);this.J(this.Dx,0);this.J(this.
Eo,0);this.J(this.FW,0);this.J(this.ET,0);this.Bb(this.ET);this.Ct.Di=[this,this.
Adp];this.CU.Di=[this,this.Adp];this.Dx.Di=[this,this.Adp];this.Eo.Di=[this,this.
Adp];this.FW.Di=[this,this.Adp];this.ET.Di=[this,this.Adp];this.Fi.BN=[this,this.
Ol];this.E_.BN=[this,this.MT];},_Done:function(){this.__proto__=A.Core.P;this.Ct.
_Done();this.CU._Done();this.Dx._Done();this.Eo._Done();this.FW._Done();this.ET.
_Done();this.Fi._Done();this.E_._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Ct._ReInit();this.CU._ReInit();this.Dx._ReInit(
);this.Eo._ReInit();this.FW._ReInit();this.ET._ReInit();this.Fi._ReInit();this.E_.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Di)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fi
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bhh="15ed31e9";C.BCj={Undefined:0,BDm:1,BCB:2};C.AkJ={
Tm:null,AiU:null,K$:null,ANz:null,An8:null,push:function(MH){if(!this.Tm){MH.Ahq=
null;MH.Ms=null;this.Tm=MH;this.AiU=this.Tm;}else{MH.Ahq=this.AiU;MH.Ms=null;this.
AiU.Ms=MH;this.AiU=MH;}},BBh:function(MH){var Qe=this.Tm;while(!!Qe){if(Qe.JI.Id===
MH.Id)return Qe;Qe=Qe.Ms;}return Qe;},BA2:function(MH){if(MH===this.Tm)this.pop(
);else if(MH===this.AiU){MH=MH.Ahq;if(!!MH)MH.Ms=null;this.AiU=MH;}else{MH.Ahq.Ms=
MH.Ms;MH.Ms.Ahq=MH.Ahq;}},Ahh:function(E){var F;if(this.K$===E)return;this.K$=E;
if(!!this.K$)this.K$.AgE(2);(F=this.ANz,F[2].call(F[0],this.K$));},Vf:function(G
){var Qe=(C.ATP.isPrototypeOf(G)?G:null);if(!!Qe){if(!Qe.JI.PopupState){if(!this.
K$)this.Ahh(this.top());}else if(Qe.JI.PopupState===4){this.pop();this.Ahh(this.
top());}else if(Qe.JI.PopupState===5){this.pop();this.Ahh(this.top());}else if(Qe.
JI.PopupState===7){this.pop();this.Ahh(this.top());}else if(Qe.JI.PopupState===8
){this.pop();this.Ahh(this.top());}else if(Qe.JI.PopupState===6){if(Qe===this.K$
){this.pop();this.Ahh(this.top());}else this.BA2(Qe);}else if(Qe.JI.PopupState===
3){this.pop();this.Ahh(this.top());}}},pop:function(){var AKR=null;if(!!this.Tm){
AKR=this.Tm;if(this.Tm===this.AiU){this.Tm=null;this.AiU=null;}else{this.Tm=this.
Tm.Ms;if(!this.Tm)throw new Error(AW1);this.Tm.Ahq=null;}AKR.Ahq=null;AKR.Ms=null;
}return AKR;},top:function(){return this.Tm;},BAJ:function(G){var B;var AtW=(A.Device.
PopupContext.isPrototypeOf(B=this.An8.JI)?B:null);if(!!AtW){var A3Q=this.BBh(AtW
);if(!!A3Q){A3Q.A9u(AtW);if(!AtW.Show)A3Q.AgE(6);}else if(AtW.Show){var AKv=A._NewObject(
C.ATP,0);AKv.A9u(AtW);AKv.ASN=[this,this.Vf];this.push(AKv);AKv.AgE(0);}}},_Init:
function(aArg){A.Core.A$g._Init.call(this.An8={I:this},0);this.__proto__=C.AkJ;this.
An8.ASd=[this,this.BAJ];this.An8.BlJ(A._GetAutoObject(A.Device.Device).AnL);A.h7++;
},_Done:function(){this.__proto__=null;this.An8._Done();A.h7--;},_ReInit:function(
){this.An8._ReInit();},_Mark:function(D){var B;if((B=this.Tm)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K$)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANz)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATP={S4:null,Ms:null,Ahq:null,JI:null,ASN:null,PopupIdToString:null,Aii:function(
Bwp,BwZ,Bxi,Bw_,Bxa,Bw9,BwI){var Vh=A._NewObject(C.ATO,0);Vh.BmS(this.JI.Id);Vh.
A_c(Bwp);Vh.ASO=Bw9;Vh.A_e(this.JI.Ak2);Vh.A91(this.JI.AkI);Vh.Bx=A._NewObject(C.
N,0);Vh.KQ().Cm=Bxa;Vh.KQ().Cl=null;Vh.KQ().CC=Bw_;Vh.KQ().CV(Bxi);Vh.KQ().Cs(null
);Vh.KQ().Hu(BwZ);Vh.KQ().AFd(BwI);return Vh;},Akq:function(){if(!this.S4){var AiS=
this.PopupIdToString.BH(this.JI.Id);switch(this.JI.Id){case 46:this.S4=this.Aii(
AiS,A.jV,A.aaR(A.acf.Ok),null,[this,this.AKz],[this,this.AiM],1);break;case 91:case
92:this.S4=this.Aii(AiS,A.jV,A.jV,null,null,[this,this.AiM],0);break;case 39:this.
S4=this.Aii(AiS,A.aaR(A.acf.Amx),A.aaR(A.acf.Ok),[this,this.A2Q],[this,this.A2R]
,[this,this.AiM],3);break;case 13:this.S4=this.Aii(AiS,A.aaR(A.acf.Amx),A.aaR(A.
acf.BnT),[this,this.A2P],[this,this.AKz],[this,this.AiM],3);break;case 25:this.S4=
this.Aii(AiS,A.aaR(A.acf.Amx),A.aaR(A.acf.Ok),[this,this.A2P],[this,this.AKz],[this
,this.AiM],3);break;case 16:case 24:case 49:case 74:this.S4=this.Aii(AiS,A.aaR(A.
acf.Amx),A.jV,[this,this.A2P],null,[this,this.AiM],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.S4=this.Aii(AiS,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A2Q],[this,this.A2R],[this,this.AiM],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.S4=this.Aii(AiS,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKz],[this,this.AiM],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.S4=
this.Aii(AiS,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2Q],[this,this.A2R],[this
,this.AiM],3);break;default:A.ab5("%s",(AW2+this.JI.Id.toFixed())+AW3);}}switch(
this.JI.Id){case 16:case 49:this.S4.A_s(true);break;case 91:case 92:this.S4.A_s(
false);break;default:;}return this.S4;},AKz:function(G){this.AgE(4);},A2P:function(
G){this.AgE(5);},A2R:function(G){this.AgE(7);},A2Q:function(G){this.AgE(8);},AiM:
function(G){this.AgE(3);},A9u:function(E){if(this.JI===E)return;this.JI=E;if(!!this.
S4){this.Akq().A_e(this.JI.Ak2);this.Akq().A91(this.JI.AkI);}},AgE:function(Bxd){
var B;this.JI.BmT(Bxd);(B=this.ASN)?B[1].call(B[0],this):null;},BAh:function(G){
this.AgE(9);},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ATP;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.S4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahq)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASN)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.Gb={BooleanToYesNo:null,Dn:function(
){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},FY:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Gb;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afi={Uo:null,J_:function(G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.
AM!==BQ){if(!!this.Uo&&!!this.AC)switch(this.AC.C4(this.AM)){case 0:(F=this.Uo,F[
2].call(F[0],false));break;case 1:(F=this.Uo,F[2].call(F[0],true));break;default:;
}A.abo(this.Uo,0);}},J5:function(G){var F;var BQ=this.AM;this.By(this.AM-1);if(this.
AM!==BQ){if(!!this.Uo&&!!this.AC)switch(this.AC.C4(this.AM)){case 0:(F=this.Uo,F[
2].call(F[0],false));break;case 1:(F=this.Uo,F[2].call(F[0],true));break;default:;
}A.abo(this.Uo,0);}},AkC:function(E){if(A.aaZ(this.Uo,E))return;if(!!this.Q)A.z$([
this,this.A3t],this.Uo,0);this.Uo=E;if(!!E)A.zX([this,this.A3t],E,0);if(!!E)A.pe([
this,this.A3t],this);},A3t:function(G){var F;if(!!this.Uo){if((F=this.Uo,F[1].call(
F[0])))this.By(1);else this.By(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.Afi;this.JU(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Uo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AT5={Jc:null,OT:null,IP:null,Gi:null,AK:null,Abg:null,AgJ:null,TH:null,R8:null
,AcC:null,WY:null,Hd:null,ABo:true,Init:function(aArg){var B;A.zX([this,this.Al2
],[B=A._GetAutoObject(A.Device.Device),B.ASD,B.AZ9],0);A.pe([this,this.Al2],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABo)this.N.C6(A.aaL(A.ach.
AQM));else this.N.C6(A.aaL(A.ach.AQN));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OT.L(A.jb.Bm);this.R8.Z(false);this.TH.Z(false);this.IP.Z(true);this.Gi.
Ar(false);(F=this.Gi.Q,F[2].call(F[0],this.Gi.B2));this.Background.L(A.jb.Gg);}else
if(this.Abg.Bw){this.OT.L(A.jb.Text);this.R8.Z(true);this.TH.Z(true);this.IP.Z(false
);this.Gi.Ar(false);(F=this.Gi.Q,F[2].call(F[0],this.Gi.B2));this.Background.L(A.
jb.E1);}else{this.OT.L(A.jb.Text);this.R8.Z(false);this.TH.Z(false);this.IP.Z(true
);this.Gi.Ar(true);this.Background.L(A.jb.CK);}if(this.AgJ.Bw)this.WY.Z(true);else
this.WY.Z(false);},CF:function(G){A._GetAutoObject(A.Device.Device).AhD();},E3:function(
G){A._GetAutoObject(A.Device.Device).AnX();A._GetAutoObject(A.Device.Device).Ae7(
false);A._GetAutoObject(A.Device.Device).Un(false);},Al2:function(G){var B;this.
An();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BzZ],this);break;case 3:{A.pe([this,this.BeF],this);A.pe([B=this.Abg,B.AxB],this
);A.pe(this.Abg.Mx,this);}break;case 4:A.ab5("%s",AW4);break;default:;}},Ew:function(
G){A._GetAutoObject(C.A$).Fv();},BAK:function(G){this.Bni(!this.ABo);},Bni:function(
E){if(this.ABo===E)return;this.ABo=E;if(!E)A._GetAutoObject(A.Device.Device).Ae7(
false);this.An();},BzZ:function(G){var B;this.BeF(this);if(this.ABo)A._GetAutoObject(
A.Device.Device).Ae7(true);A._GetAutoObject(A.Device.Device).WC(65280);A._GetAutoObject(
A.Device.Device).Un(true);A.pe([B=this.Abg,B.StartTimer],this);A.pe([B=this.AgJ,
B.StartTimer],this);this.An();},Bz0:function(G){A._GetAutoObject(A.Device.Device
).Ae7(false);A._GetAutoObject(A.Device.Device).Un(false);this.An();},Bz2:function(
G){this.An();},BeF:function(G){A._GetAutoObject(A.Device.Device).AhD();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jc._Init.call(this.Jc={I:this},0);C.CH._Init.
call(this.OT={I:this},0);A.acg.Ap._Init.call(this.IP={I:this},0);A.acl.Gi._Init.
call(this.Gi={I:this},0);A.acg.AK._Init.call(this.AK={I:this},0);A.Core.Timer._Init.
call(this.Abg={I:this},0);A.Core.Timer._Init.call(this.AgJ={I:this},0);A.acg.Ap.
_Init.call(this.TH={I:this},0);A.acg.Ap._Init.call(this.R8={I:this},0);A.acg.Text.
_Init.call(this.AcC={I:this},0);C.WY._Init.call(this.WY={I:this},0);C.CH._Init.call(
this.Hd={I:this},0);this.__proto__=C.AT5;var B;this.Background.L(A.jb.CK);this.N.
Z(true);this.Jc.H(AW5);this.Jc.AkF(0);this.OT.H(AW6);this.OT.R(A.aaR(A.acf.A$l));
this.OT.L(A.jb.Text);this.IP.H(AW7);this.IP.L(A.jb.AV);this.IP.Zr(true);this.Gi.
Fm(1750);this.Gi.Uk(750);this.Gi.AkA(0);this.Gi.Ar(true);this.Gi.B2=3;this.AK.H(
Aye);this.Abg.PO(-1);this.Abg.Wy(1000);this.AgJ.PO(-1);this.AgJ.Wy(5000);this.TH.
H(AHO);this.R8.H(AHO);this.R8.L(A.jb.E1);this.AcC.H(Aye);this.AcC.R(A.aaR(A.acf.
A_X));this.AcC.L(A.jb.Text);this.WY.H(Aye);this.Hd.H(AW8);this.Hd.Ar(false);this.
Hd.R(A.aaR(A.acf.RangeTest));this.Hd.L(A.jb.Text);this.J(this.Jc,0);this.J(this.
OT,0);this.J(this.IP,0);this.J(this.AK,0);this.J(this.TH,0);this.J(this.R8,0);this.
J(this.AcC,0);this.J(this.WY,0);this.J(this.Hd,0);this.N.CC=[this,this.Ew];this.
N.Cm=[this,this.BAK];this.N.CY(A.aaL(A.ach.E2));this.OT.S(A.aaL(A.fl.Af));this.OT.
A2(A.aaL(A.fl.Ak));this.OT.Cu(A.aaL(A.fl.Bi));this.IP.Aw(A.aaL(A.ach.ADG));this.
Gi.Q=[B=this.IP,B.ASq,B.Cv];this.Abg.Mx=[this,this.Bz0];this.AgJ.Mx=[this,this.Bz2
];this.TH.Aw(A.aaL(A.ach.TH));this.R8.Aw(A.aaL(A.ach.R8));this.AcC.S(A.aaL(A.fl.
Af));this.WY.As([B=A._GetAutoObject(A.Device.Device),B.ASE,B.AZ_]);this.Hd.S(A.aaL(
A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jc._Done();this.OT._Done();this.IP._Done();this.Gi._Done();this.AK._Done(
);this.Abg._Done();this.AgJ._Done();this.TH._Done();this.R8._Done();this.AcC._Done(
);this.WY._Done();this.Hd._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jc._ReInit();this.OT._ReInit();this.IP._ReInit();this.Gi.
_ReInit();this.AK._ReInit();this.Abg._ReInit();this.AgJ._ReInit();this.TH._ReInit(
);this.R8._ReInit();this.AcC._ReInit();this.WY._ReInit();this.Hd._ReInit();this.
OT.R(A.aaR(A.acf.A$l));this.AcC.R(A.aaR(A.acf.A_X));this.Hd.R(A.aaR(A.acf.RangeTest
));this.OT.S(A.aaL(A.fl.Af));this.OT.A2(A.aaL(A.fl.Ak));this.OT.Cu(A.aaL(A.fl.Bi
));this.AcC.S(A.aaL(A.fl.Af));this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jc)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hd).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbU={
ScreenType:0,Nd:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Ng:
function(G){A._GetAutoObject(C.A$).Cg(this.ScreenType);},_Init:function(aArg){C.
Cp._Init.call(this,aArg);this.__proto__=C.AbU;},_className:"Application::MenuItemScreen"
};C.T9={Ad5:null,Mj:null,Amy:false,Init:function(aArg){},Ai:function(Ae){C.Cp.Ai.
call(this,Ae);if(this.Amy){this.Mj.Cv(1);this.Mj.L(A.jb.H6);}else{this.Mj.Cv(0);
if(this.KD)this.Mj.L(A.jb.Bm);else if(this.Hf)this.Mj.L(A.jb.Text);else this.Mj.
L(A.jb.Bm);}},IW:function(G){var F,CA;if(!!this.Ad5){(CA=this.Ad5,CA[2].call(CA[
0],!(F=this.Ad5,F[1].call(F[0]))));this.AEV((F=this.Ad5,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A2W:function(G){this.KD=true;this.DJ(this);},AEV:function(
E){if(this.Amy===E)return;this.Amy=E;this.DJ(this);this.An();},A3m:function(G){var
F;this.AEV((F=this.Ad5,F[1].call(F[0])));},A0r:function(s){this.A3m(s);},DJ:function(
G){var F;if(!this.N||!this.KD)return;if(this.Amy){(F=this.N,F[1].call(F[0])).CV(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CV(A.aaR(A.acf.A7T));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).An();},AST:function(E){if(A.aaZ(this.Ad5,E))
return;if(!!this.Ad5)A.z$([this,this.A0r],this.Ad5,0);this.Ad5=E;if(!!E)A.zX([this
,this.A0r],E,0);if(!!E)A.pe([this,this.A0r],this);},_Init:function(aArg){C.Cp._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mj={I:this},0);this.__proto__=C.T9;this.
V.L(A.jb.H6);this.Mj.H(AHP);this.Mj.Cv(0);this.J(this.Mj,0);this.Mj.Aw(A.aaL(A.ach.
AqP));this.Init(aArg);},_Done:function(){this.__proto__=C.Cp;this.Mj._Done();C.Cp.
_Done.call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.Mj._ReInit();
},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.Ad5)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANH={H3:null,IJ:null,_Init:function(aArg){C.Ce.
_Init.call(this,aArg);C.SM._Init.call(this.H3={I:this},0);C.AGC._Init.call(this.
IJ={I:this},0);this.__proto__=C.ANH;var B;this.I8(A.aaR(A.acf.ACo));this.H3.H(AhW
);this.H3.Aj(true);this.H3.T(A.aaR(A.acf.Date));this.H3.Bh(true);this.IJ.H(UW);this.
IJ.Aj(true);this.IJ.T(A.aaR(A.acf.Bs));this.J(this.H3,-1);this.J(this.IJ,-1);this.
H3.AeR([B=this.H3,B.FQ]);this.H3.Go([this,this.D_,this.GN]);this.H3.Akz(A.aaL(A.
ach.Edit));this.H3.Ab7([B=A._GetAutoObject(A.Device.Helper),B.UY,B.U1]);this.IJ.
AeR([B=this.IJ,B.FQ]);this.IJ.Go([this,this.D_,this.GN]);this.IJ.Akz(A.aaL(A.ach.
Edit));this.IJ.Ab7([B=A._GetAutoObject(A.Device.Helper),B.UY,B.U1]);},_Done:function(
){this.__proto__=C.Ce;this.H3._Done();this.IJ._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.H3._ReInit();this.IJ._ReInit();this.I8(A.
aaR(A.acf.ACo));this.H3.T(A.aaR(A.acf.Date));this.IJ.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Ce._Mark.call(this,D);if((B=this.H3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AU2={Rb:null,FE:null,BZ:null,OG:null,YL:null,Aa1:null,_Init:function(aArg){C.
Ce._Init.call(this,aArg);C.Rb._Init.call(this.Rb={I:this},0);C.AMB._Init.call(this.
FE={I:this},0);C.AUB._Init.call(this.BZ={I:this},0);C.AUD._Init.call(this.OG={I:
this},0);C.Afi._Init.call(this.YL={I:this},0);C.Aa1._Init.call(this.Aa1={I:this}
,0);this.__proto__=C.AU2;var B;this.I8(A.aaR(A.acf.Temperature));this.FE.As(A._GetAutoObject(
A.Device.Device).AnimalType);this.BZ.H(AW9);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.
Arp));this.BZ.Bh(false);this.OG.H(Aaf);this.OG.Aj(true);this.OG.T(A.aaR(A.acf.Undertemperature
));this.OG.Bh(true);this.OG.By(3800);this.OG.F_(3000);this.OG.EV(5000);this.OG.A_l(
A.aaR(A.acf.AGP));this.YL.H(AW_);this.YL.Aj(true);this.YL.Z(true);this.YL.T(A.aaR(
A.acf.A4P));this.J(this.BZ,0);this.J(this.OG,0);this.J(this.YL,0);this.BZ.AeR([B=
this.BZ,B.FQ]);this.BZ.Go([this,this.D_,this.GN]);this.BZ.Akz(A.aaL(A.ach.Edit));
this.BZ.LX([B=this.BZ,B.AyM]);this.BZ.L0(A.aaL(A.ach.AnO));this.BZ.As([B=this.FE
,B.B8,B.B9]);this.BZ.CI(this.FE);this.BZ.A9Z([B=this.FE,B.ASM,B.A0f]);this.BZ.A9Y([
B=this.FE,B.ASL,B.A0e]);this.OG.LX([B=this.BZ,B.AyM]);this.OG.L0(A.aaL(A.ach.AnO
));this.OG.As([B=A._GetAutoObject(A.Device.Device),B.A8X,B.Ba2]);this.YL.CI(this.
Aa1);this.YL.AkC([B=A._GetAutoObject(A.Device.Device),B.A8h,B.BaM]);},_Done:function(
){this.__proto__=C.Ce;this.Rb._Done();this.FE._Done();this.BZ._Done();this.OG._Done(
);this.YL._Done();this.Aa1._Done();C.Ce._Done.call(this);},_ReInit:function(){C.
Ce._ReInit.call(this);this.Rb._ReInit();this.FE._ReInit();this.BZ._ReInit();this.
OG._ReInit();this.YL._ReInit();this.Aa1._ReInit();this.I8(A.aaR(A.acf.Temperature
));this.BZ.T(A.aaR(A.acf.Arp));this.OG.T(A.aaR(A.acf.Undertemperature));this.OG.
A_l(A.aaR(A.acf.AGP));this.YL.T(A.aaR(A.acf.A4P));},_Mark:function(D){var B;C.Ce.
_Mark.call(this,D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANU={PD:null,PE:null,Sq:null,V2:null,Ss:null,Sr:null,Gb:null,Acr:null,Init:function(
aArg){A.zX([this,this.BoC],this.PE.Q,0);},BoC:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw0((F=this.PE.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce.
_Init.call(this,aArg);C.Io._Init.call(this.PD={I:this},0);C.BW._Init.call(this.PE={
I:this},0);C.Afi._Init.call(this.Sq={I:this},0);C.Io._Init.call(this.V2={I:this}
,0);C.Afi._Init.call(this.Ss={I:this},0);C.Afi._Init.call(this.Sr={I:this},0);C.
Gb._Init.call(this.Gb={I:this},0);C.Acr._Init.call(this.Acr={I:this},0);this.__proto__=
C.ANU;var B;this.N.H(Xd);this.I8(A.aaR(A.acf.Device));this.PD.H(AhW);this.PD.Aj(
true);this.PD.T(A.aaR(A.acf.A_7));this.PD.Bh(false);this.PD.F_(2);this.PD.EV(60);
this.PD.IM(A.aaR(A.acf.AG4));this.PD.I9(A.aaR(A.acf.AG4));this.PE.H(AW$);this.PE.
Aj(true);this.PE.T(A.aaR(A.acf.A$c));this.PE.Bh(true);this.PE.By(0);this.PE.F_(-
1);this.PE.EV(1);this.Sq.H(Aaf);this.Sq.Aj(true);this.Sq.T(A.aaR(A.acf.HB));this.
Sq.Bh(false);this.Sq.By(0);this.Sq.F_(-1);this.Sq.EV(1);this.V2.H(Alf);this.V2.Aj(
true);this.V2.T(A.aaR(A.acf.A5b));this.V2.Bh(true);this.V2.IM(AfB);this.V2.I9(AfB
);this.Ss.H(AcO);this.Ss.Aj(true);this.Ss.T(A.aaR(A.acf.AsO));this.Ss.Bh(false);
this.Ss.By(1);this.Ss.F_(-1);this.Ss.EV(1);this.Sr.H(Aot);this.Sr.Aj(true);this.
Sr.T(A.aaR(A.acf.Ass));this.Sr.Bh(true);this.Sr.By(0);this.Sr.F_(-1);this.Sr.EV(
1);this.Acr.As(A._GetAutoObject(A.Device.Device).AxA);this.J(this.PD,0);this.J(this.
PE,0);this.J(this.Sq,0);this.J(this.V2,0);this.J(this.Ss,0);this.J(this.Sr,0);this.
PD.As([B=A._GetAutoObject(A.Device.Device),B.A8P,B.BaY]);this.PE.As([B=this.Acr,
B.B8,B.B9]);this.PE.CI(this.Acr);this.Sq.CI(this.Gb);this.Sq.AkC([B=A._GetAutoObject(
A.Device.Device),B.AEu,B.AIN]);this.V2.As([B=A._GetAutoObject(A.Device.Device),B.
A8e,B.BaJ]);this.Ss.CI(this.Gb);this.Ss.AkC([B=A._GetAutoObject(A.Device.Device)
,B.A8Y,B.Ba3]);this.Sr.CI(this.Gb);this.Sr.AkC([B=A._GetAutoObject(A.Device.Device
),B.ASu,B.AZ3]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.PD._Done(
);this.PE._Done();this.Sq._Done();this.V2._Done();this.Ss._Done();this.Sr._Done(
);this.Gb._Done();this.Acr._Done();C.Ce._Done.call(this);},_ReInit:function(){C.
Ce._ReInit.call(this);this.PD._ReInit();this.PE._ReInit();this.Sq._ReInit();this.
V2._ReInit();this.Ss._ReInit();this.Sr._ReInit();this.Gb._ReInit();this.Acr._ReInit(
);this.I8(A.aaR(A.acf.Device));this.PD.T(A.aaR(A.acf.A_7));this.PD.IM(A.aaR(A.acf.
AG4));this.PD.I9(A.aaR(A.acf.AG4));this.PE.T(A.aaR(A.acf.A$c));this.Sq.T(A.aaR(A.
acf.HB));this.V2.T(A.aaR(A.acf.A5b));this.Ss.T(A.aaR(A.acf.AsO));this.Sr.T(A.aaR(
A.acf.Ass));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.PD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUf={V5:null,V4:
null,QK:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BhY
],this.QK.Q,0);},BhY:function(G){var F;A._GetAutoObject(A.Device.Device).Akw((F=
this.QK.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce._Init.call(this,aArg);C.
Na._Init.call(this.V5={I:this},0);C.Na._Init.call(this.V4={I:this},0);C.AUx._Init.
call(this.QK={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUf;var B;this.I8(A.aaR(A.acf.Asl));this.V5.H(IR);this.
V5.Aj(true);this.V5.T(A.aaR(A.acf.AjF));this.V5.Bh(false);this.V5.Nd(87);this.V4.
H(AXa);this.V4.Aj(true);this.V4.T(A.aaR(A.acf.Aqn));this.V4.Bh(true);this.V4.Nd(
88);this.QK.H(UW);this.QK.Aj(true);this.QK.T(A.aaR(A.acf.A4U));this.QK.Bh(false);
this.QK.F_(-1);this.QK.EV(1);this.EartagNrAssignmentMode.As(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V5,0);this.J(this.V4,0);this.J(this.
QK,0);this.V5.AR=[B=this.V5,B.Ng];this.V4.AR=[B=this.V4,B.Ng];this.QK.As([B=this.
EartagNrAssignmentMode,B.B8,B.B9]);this.QK.CI(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.V5._Done();this.V4._Done(
);this.QK._Done();this.EartagNrAssignmentMode._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.V5._ReInit();this.V4._ReInit();this.QK._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.I8(A.aaR(A.acf.Asl));this.V5.T(A.aaR(
A.acf.AjF));this.V4.T(A.aaR(A.acf.Aqn));this.QK.T(A.aaR(A.acf.A4U));},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.V5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.WY={Q:null,TransponderProtocolToString:
null,Apq:null,Background:null,Y:null,Sk:null,GJ:null,PJ:null,OI:null,Pn:null,C7:
null,Gu:null,SG:null,N1:null,CountryToString:null,As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Kc],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Kc],E,0);if(!!E)A.pe([this,this.Kc],this);},Kc:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GJ.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BO=(F=this.Q,F[1].call(F[0])).Biu();if(BO<900){var J3=A._GetAutoObject(
A.Device.Converter).ANy(BO);if(!!J3)this.C7.R(((this.CountryToString.Ls(J3)+Rj)+
BO.toFixed())+O5);else this.C7.R(BO.toFixed());if(J3===10){var AKc=this.A6M((F=this.
Q,F[1].call(F[0])).Id);this.C7.R(this.C7.String+((((AHQ+this.Apq.Bpm(AKc))+Rj)+A.
abl(this.Apq.Bpl(AKc),2,10))+O5));}this.C7.Z(true);this.Pn.Z(true);this.OI.Z(false
);this.PJ.Z(false);}else{this.OI.R(((A._GetAutoObject(A.Device.Converter).Bhk(BO
)+Rj)+BO.toFixed())+O5);this.OI.Z(true);this.PJ.Z(true);this.C7.Z(false);this.Pn.
Z(false);}if(BO===276){this.Gu.R(this.Apq.BH(this.A6M((F=this.Q,F[1].call(F[0])).
Id)));this.Gu.Z(true);}else this.Gu.Z(false);this.N1.R(this.TransponderProtocolToString.
BH((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GJ.R(A.jV);this.OI.
R(A.jV);this.Gu.R(A.jV);this.C7.R(A.jV);this.N1.R(A.jV);}},A6M:function(J1){var Qs=
0;var J3=A._GetAutoObject(A.Device.Converter).ZZ(J1);switch(J3){case 10:{var Gf=
A._GetAutoObject(A.Device.Helper).Sf(J1,8,2)|0;Qs=A._GetAutoObject(A.Device.Converter
).ACO(Gf);}break;default:;}return Qs;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apq={I:this},0);A.acg.AK.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CH._Init.call(this.Sk={I:this},0);C.CH._Init.call(this.GJ={I:this},0);C.CH._Init.
call(this.PJ={I:this},0);C.CH._Init.call(this.OI={I:this},0);C.CH._Init.call(this.
Pn={I:this},0);C.CH._Init.call(this.C7={I:this},0);C.CH._Init.call(this.Gu={I:this
},0);C.CH._Init.call(this.SG={I:this},0);C.CH._Init.call(this.N1={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WY;
this.H(AcN);this.Background.AZ(0x3F);this.Background.H(AcN);this.Background.L(A.
jb.CS);this.Y.AZ(0x3F);this.Y.H(AcN);this.Y.JO(9);this.Sk.H(AHR);this.Sk.Aj(true
);this.Sk.R(A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon));this.Sk.A6(0x11);this.Sk.L(A.jb.
Text);this.GJ.H(AXb);this.GJ.Aj(true);this.GJ.R(AHS);this.GJ.A6(0x14);this.GJ.L(
A.jb.Text);this.PJ.H(AHT);this.PJ.Aj(true);this.PJ.R(A.aaR(A.acf.A_B)+A.aaR(A.acf.
Colon));this.PJ.A6(0x11);this.PJ.L(A.jb.Text);this.OI.H(AHU);this.OI.Aj(true);this.
OI.R(AXc);this.OI.A6(0x14);this.OI.L(A.jb.Text);this.Pn.H(AHT);this.Pn.Aj(true);
this.Pn.R(A.aaR(A.acf.C7)+A.aaR(A.acf.Colon));this.Pn.A6(0x11);this.Pn.L(A.jb.Text
);this.C7.H(AHU);this.C7.Aj(true);this.C7.R(AXd);this.C7.A6(0x14);this.C7.L(A.jb.
Text);this.Gu.H(AXe);this.Gu.Aj(true);this.Gu.R(AXf);this.Gu.A6(0x14);this.Gu.L(
A.jb.Text);this.SG.H(AXg);this.SG.Aj(true);this.SG.R(A.aaR(A.acf.N1)+A.aaR(A.acf.
Colon));this.SG.A6(0x11);this.SG.L(A.jb.Text);this.N1.H(AXh);this.N1.Aj(true);this.
N1.R(AXi);this.N1.A6(0x14);this.N1.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sk,0);this.J(this.GJ,0);this.J(this.PJ,0);this.J(this.OI,0
);this.J(this.Pn,0);this.J(this.C7,0);this.J(this.Gu,0);this.J(this.SG,0);this.J(
this.N1,0);this.Sk.S(A.aaL(A.fl.Ak));this.Sk.A2(A.aaL(A.fl.Bi));this.GJ.S(A.aaL(
A.fl.Ak));this.GJ.A2(A.aaL(A.fl.Bi));this.PJ.S(A.aaL(A.fl.Ak));this.PJ.A2(A.aaL(
A.fl.Bi));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bi));this.Pn.S(A.aaL(A.
fl.Ak));this.Pn.A2(A.aaL(A.fl.Bi));this.C7.S(A.aaL(A.fl.Ak));this.C7.A2(A.aaL(A.
fl.Bi));this.Gu.S(A.aaL(A.fl.Ak));this.Gu.A2(A.aaL(A.fl.Bi));this.SG.S(A.aaL(A.fl.
Ak));this.SG.A2(A.aaL(A.fl.Bi));this.N1.S(A.aaL(A.fl.Ak));this.N1.A2(A.aaL(A.fl.
Bi));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apq._Done();this.Background._Done();this.Y._Done();this.Sk._Done();
this.GJ._Done();this.PJ._Done();this.OI._Done();this.Pn._Done();this.C7._Done();
this.Gu._Done();this.SG._Done();this.N1._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apq._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sk.
_ReInit();this.GJ._ReInit();this.PJ._ReInit();this.OI._ReInit();this.Pn._ReInit(
);this.C7._ReInit();this.Gu._ReInit();this.SG._ReInit();this.N1._ReInit();this.CountryToString.
_ReInit();this.Sk.R(A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon));this.PJ.R(A.aaR(A.acf.A_B
)+A.aaR(A.acf.Colon));this.Pn.R(A.aaR(A.acf.C7)+A.aaR(A.acf.Colon));this.SG.R(A.
aaR(A.acf.N1)+A.aaR(A.acf.Colon));this.Sk.S(A.aaL(A.fl.Ak));this.Sk.A2(A.aaL(A.fl.
Bi));this.GJ.S(A.aaL(A.fl.Ak));this.GJ.A2(A.aaL(A.fl.Bi));this.PJ.S(A.aaL(A.fl.Ak
));this.PJ.A2(A.aaL(A.fl.Bi));this.OI.S(A.aaL(A.fl.Ak));this.OI.A2(A.aaL(A.fl.Bi
));this.Pn.S(A.aaL(A.fl.Ak));this.Pn.A2(A.aaL(A.fl.Bi));this.C7.S(A.aaL(A.fl.Ak)
);this.C7.A2(A.aaL(A.fl.Bi));this.Gu.S(A.aaL(A.fl.Ak));this.Gu.A2(A.aaL(A.fl.Bi)
);this.SG.S(A.aaL(A.fl.Ak));this.SG.A2(A.aaL(A.fl.Bi));this.N1.S(A.aaL(A.fl.Ak));
this.N1.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QS={D2:null,A_P:A.jV,Ai:function(Ae){C.Fj.Ai.call(
this,Ae);if(this.Mn.Fl())this.D2.CT(A.jb.AV);else this.D2.CT(this.Background.AQ);
this.D2.Zt(this.G4.AQ);},Zw:function(E){if(this.A_P===E)return;this.A_P=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fj._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QS;this.Background.H(AXj);this.
Mn.H(W4);this.OB.H(AHV);this.QY.H(AHV);this.D2.H(AXk);this.D2.Z(false);this.J(this.
D2,0);this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.
Bi));},_Done:function(){this.__proto__=C.Fj;this.D2._Done();C.Fj._Done.call(this
);},_ReInit:function(){C.Fj._ReInit.call(this);this.D2._ReInit();this.G4.S(A.aaL(
A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.Bi));},_Mark:function(
D){var B;C.Fj._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B7:null,Aez:null,Ap:null,Text:null
,DK:A.jV,AmL:0,MY:0,I_:0,A5e:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BBZ:function(G){this.Ap.H(this.Text.M);this.
Aez.H(this.Text.M);},Zt:function(E){if(this.AmL===E)return;this.AmL=E;this.Aez.L(
E);this.Text.L(E);},CT:function(E){if(this.MY===E)return;this.MY=E;this.Ap.L(E);
},S:function(E){if(this.B7===E)return;this.B7=E;this.Text.S(E);},Hh:function(E){
if(this.I_===E)return;this.I_=E;this.Text.Hh(E);},Bll:function(E){if(this.A5e===
E)return;this.A5e=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NO._Init.call(this.Aez={I:this},0);A.acg.NO._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AHW);
this.Aez.AZ(0x8);this.Aez.L(A.jb.Text);this.Ap.AZ(0x8);this.Ap.L(A.jb.CS);this.Text.
AZ(0xD);this.Text.H(AHW);this.Text.Hh(5);this.Text.I7(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.Aez,0);this.J(this.Ap,0);this.J(this.Text,0);this.
Aez.Aw(A.aaL(A.ach.APU));this.Ap.Aw(A.aaL(A.ach.APT));this.Text.Q2([this,this.BBZ
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Aez._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Aez._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aez)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T5={DZ:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},CF:function(
G){C.AB.CF.call(this,G);this.ALk(this);A._GetAutoObject(A.Device.Device).Am.Bl(null
);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(A.Device.Helper
).AkO();A._GetAutoObject(A.Device.Helper).Asp();},Ie:function(G){},AcR:function(
s){this.Ie(s);},A3b:function(G){A._GetAutoObject(C.A$).Fv();},Fg:function(G){var
B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},ALk:function(G){},BF6:function(s){this.ALk(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T5;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Dq(C.Aq1);this.
DZ.AZ(0x3F);this.DZ.H(Fb);this.DZ.L(A.jb.CK);this.Y.H(Fb);this.Y.JO(9);this.Ay.H(
Iq);this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CC=[this,this.A3b
];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fg];},_Done:function(){this.__proto__=
C.AB;this.DZ._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVA={Ww:function(
G){this.Agp();this.IY(A.aaR(A.acf.AU_),[this,this.ATB],7);this.IY(A.aaR(A.acf.Asm
),[this,this.Blo],6);this.IY(A.aaR(A.acf.AGa),[this,this.ATn],3);this.IY(A.aaR(A.
acf.AnZ),[this,this.AwO],2);this.IY(A.aaR(A.acf.AdQ),[this,this.AEN],1);this.IY(
A.aaR(A.acf.Aux),[this,this.AEH],0);A._GetAutoObject(C.BS).FT();A._GetAutoObject(
C.BS).NC(A.aaR(A.acf.And)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},DE:function(G){},Abr:function(){return C.AM$;},Abs:function(){return C.APC;
},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var ABq=A._NewObject(
A.Device.BoolFilterCriterion,0);ABq.Initialize(12,0,true,true);Be.CW(ABq);A._GetAutoObject(
A.Device.Device).Am.Bl(Be);},HO:function(G){C.GW.HO.call(this,G);if(this.Akh()===
false){this.N.Cs(A.aaL(A.ach.Asm));this.N.Cl=[this,this.A5S];this.N.FJ(A.jV);}this.
N.ON(false);this.N.OO(false);},Agc:function(){A._GetAutoObject(C.A$).Cg(41);},_Init:
function(aArg){C.GW._Init.call(this,aArg);this.__proto__=C.AVA;var B;this.Dq(C.APy
);this.Dz(A.aaR(A.acf.A7F));this.AwJ([B=A._GetAutoObject(A.Device.Device),B.A82,
B.Ba4]);},_ReInit:function(){C.GW._ReInit.call(this);this.Dz(A.aaR(A.acf.A7F));}
,_className:"Application::WatchListScreen"};C.AMg={DE:function(G){var B;var Jy=(
A.Core.BM.isPrototypeOf(G)?G:null);if(((Jy.CO===4)||(Jy.CO===5))===false){C.AxU.
DE.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState!==1)return;
var Bcs=A._GetAutoObject(A.Device.Device).KW;var Te;if(Jy.CO===5)Te=5;else Te=4;
var AA7=A._GetAutoObject(A.acj.DV).Bc2(Bcs,Te);var GB=(((Bcs+((AA7/2)|0))/AA7)|0
)*AA7;if(Jy.CO===4)GB+=AA7;else if(Jy.CO===5)GB-=AA7;if(GB>999900)GB=999900;if(GB<
100)GB=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(GB);},AsD:function(
G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.pe([B=this.O0,B.
CC],this);else A._GetAutoObject(C.A$).Fv();},WN:function(G){if(A._GetAutoObject(
A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device).AsF();A._GetAutoObject(
A.Device.Device).UpdateMeasureState(3);if(this.A_5()===false){this.H5.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KW);this.H5.Ch(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A$).Fv();}}else if(A._GetAutoObject(A.Device.Device).MeasureState===
3){this.H5.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KW);this.H5.Ch(A._GetAutoObject(
A.Device.Device).Bt);A._GetAutoObject(C.A$).Fv();}},AkV:function(G){var B;if(A._GetAutoObject(
A.Device.Device).MeasureState===3)A.pe([B=this.O0,B.Cm],this);},Bc1:function(){var
ALy=A._GetAutoObject(A.Device.Helper).W.AhO(1);if(ALy>=100000)ALy=(Math.round(ALy
/1000)|0)*1000;return ALy;},_Init:function(aArg){C.AxU._Init.call(this,aArg);this.
__proto__=C.AMg;},_className:"Application::AnimalActionWeighingScreen"};C.AVl={V9:
null,YN:null,Rb:null,AeK:null,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.
BW._Init.call(this.V9={I:this},0);C.BW._Init.call(this.YN={I:this},0);C.Rb._Init.
call(this.Rb={I:this},0);C.AeK._Init.call(this.AeK={I:this},0);this.__proto__=C.
AVl;var B;this.I8(A.aaR(A.acf.AG5));this.V9.H(AhW);this.V9.Aj(true);this.V9.T(A.
aaR(A.acf.A$s));this.V9.Bh(true);this.V9.By(0);this.YN.H(UW);this.YN.Aj(true);this.
YN.T(A.aaR(A.acf.A$r));this.YN.Bh(false);this.J(this.V9,0);this.J(this.YN,0);this.
V9.As([B=this.Rb,B.B8,B.B9]);this.V9.CI(this.Rb);this.YN.As([B=this.AeK,B.B8,B.B9
]);this.YN.CI(this.AeK);},_Done:function(){this.__proto__=C.Ce;this.V9._Done();this.
YN._Done();this.Rb._Done();this.AeK._Done();C.Ce._Done.call(this);},_ReInit:function(
){C.Ce._ReInit.call(this);this.V9._ReInit();this.YN._ReInit();this.Rb._ReInit();
this.AeK._ReInit();this.I8(A.aaR(A.acf.AG5));this.V9.T(A.aaR(A.acf.A$s));this.YN.
T(A.aaR(A.acf.A$r));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.
V9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeK={MassUnitToString:null
,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FY:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).AwK(E);}
,Init:function(aArg){var B;A.zX([this,this.BdE],[B=A._GetAutoObject(A.Device.Device
),B.ASt,B.AZ2],0);A.pe([this,this.BdE],this);},BdE:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B8,this.B9],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeK;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.AxU={H5:null,Aju:null,MassUnit:null,
KW:null,Vw:null,AnK:null,AcE:null,Z0:null,O0:null,YC:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DV).AfZ());A.zX([this,this.AKA],[B=A._GetAutoObject(
A.Device.Device),B.AEx,B.AIQ],0);A.zX([this,this.BAL],[B=A._GetAutoObject(A.Device.
Device),B.AED,B.AIU],0);A.zX([this,this.BAM],[B=this.O0,B.Arx,B.Ju],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxN();this.AcG();},IW:function(G){this.WN(this);}
,CF:function(G){C.AB.CF.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsF();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);this.H5.Gn();this.H5.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGL();else{var BCc=this.Bc1();this.Z0.Z(true);this.AcE.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BCc);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E3:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsF();else A._GetAutoObject(A.Device.Device).AhG(
);},AxN:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bgq();break;case 3:{this.Bgq();this.Z0.Z(false);this.AcE.Z(false
);if(this.A_5()){this.Vw.Z(false);this.KW.H(A.abO(this.KW.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O0.Ar(true);this.O0.Z(true);this.Bb(this.O0);}}break;
case 4:this.KW.R(A.aaR(A.acu.Akk));break;default:A.ab5("%s%e",AHX,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcG:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.CY(A.aaL(A.ach.Aev));this.N.Cs(null);
this.YC.Z(false);this.N.C6(A.aaL(A.ach.AmZ));this.N.CV(A.jV);}break;case 3:{if(this.
O0.AY<=1){this.N.CY(null);this.N.Cs(null);this.YC.Z(false);this.N.C6(null);}else{
this.N.CY(A.aaL(A.ach.AmX));this.N.Cs(A.aaL(A.ach.Aew));this.YC.Z(true);this.N.C6(
null);}this.N.CV(A.aaR(A.acf.Ok));}break;case 4:{this.N.C6(A.aaL(A.ach.AvG));this.
N.Cm=[this,this.Blc];this.N.Cs(null);this.YC.Z(false);this.N.CV(A.jV);}break;default:;
}},AsD:function(G){},Bv8:function(s){this.AsD(s);},WN:function(G){},A0h:function(
s){this.WN(s);},Blc:function(G){this.CF(this);},BAL:function(G){this.An();},AKA:
function(G){this.An();},A_5:function(){var Auo=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Auo>0)&&!A._GetAutoObject(A.Device.Helper).Bpj(Auo
,this.H5.Timestamp);},AkV:function(G){},A0g:function(s){this.AkV(s);},BAM:function(
G){this.An();},Bgq:function(){this.KW.R(A._GetAutoObject(A.Device.Converter).Ak9(
A._GetAutoObject(A.Device.Device).KW));},Bc1:function(){return A._GetAutoObject(
A.Device.Helper).W.AhO(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AK._Init.call(this.Aju={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KW={I:this},0);A.acg.Text._Init.call(this.Vw={I:this
},0);C.AxM._Init.call(this.AnK={I:this},0);A.acg.Ael._Init.call(this.AcE={I:this
},0);A.acg.Ael._Init.call(this.Z0={I:this},0);C.AVF._Init.call(this.O0={I:this},
0);A.acg.Ap._Init.call(this.YC={I:this},0);this.__proto__=C.AxU;this.Background.
L(A.jb.CK);this.N.Z(true);this.Dq(C.IG);this.Aju.AZ(0x3F);this.Aju.H(Ayf);this.Aju.
L(A.jb.CK);this.MassUnit.H(AXl);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
Az3));this.MassUnit.L(A.jb.Text);this.KW.H(AXm);this.KW.A6(0x14);this.KW.R(A.aaR(
A.acu.Akk));this.KW.L(A.jb.Text);this.Vw.H(AXn);this.Vw.R(A.aaR(A.acf.A$D));this.
Vw.L(A.jb.Text);this.Vw.Z(true);this.AnK.H(AXo);this.AcE.H(AXp);this.AcE.L(A.jb.
Ad8);this.AcE.Z(false);this.Z0.H(AHY);this.Z0.L(A.jb.Ad8);this.Z0.Bl3(true);this.
Z0.Z(false);this.O0.AZ(0x3F);this.O0.H(Ayf);this.O0.Ar(false);this.O0.Z(false);this.
YC.H(AXq);this.YC.L(A.jb.Bm);this.J(this.Aju,0);this.J(this.MassUnit,0);this.J(this.
KW,0);this.J(this.Vw,0);this.J(this.AcE,0);this.J(this.Z0,0);this.J(this.O0,0);this.
J(this.YC,0);this.N.CC=[this,this.Bv8];this.N.Cl=[this,this.A0g];this.N.Cm=[this
,this.A0h];this.MassUnit.S(A.aaL(A.fl.EL));this.KW.S(A.aaL(A.fl.Aeo));this.Vw.S(
A.aaL(A.fl.EL));this.AcE.Zv(this.AnK);this.Z0.Zv(this.AnK);this.H5=A._NewObject(
A.Device.Rating,0);this.O0.LY(A._GetAutoObject(A.Device.Helper).W);this.O0.AkD(this.
H5);this.YC.Aw(A.aaL(A.ach.AQJ));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Aju._Done();this.MassUnit._Done();this.KW._Done();this.Vw._Done();this.
AnK._Done();this.AcE._Done();this.Z0._Done();this.O0._Done();this.YC._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Aju._ReInit();
this.MassUnit._ReInit();this.KW._ReInit();this.Vw._ReInit();this.AnK._ReInit();this.
AcE._ReInit();this.Z0._ReInit();this.O0._ReInit();this.YC._ReInit();this.MassUnit.
R(A.aaR(A.acf.Az3));this.KW.R(A.aaR(A.acu.Akk));this.Vw.R(A.aaR(A.acf.A$D));this.
MassUnit.S(A.aaL(A.fl.EL));this.KW.S(A.aaL(A.fl.Aeo));this.Vw.S(A.aaL(A.fl.EL));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H5)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YC)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVJ={FE:null
,OJ:null,M9:null,C9:null,LV:null,T2:null,Init:function(aArg){var B;A.zX([this,this.
GE],[B=this.FE,B.B8,B.B9],0);A.pe([this,this.GE],this);},CF:function(G){C.Ce.CF.
call(this,G);A.pe([this,this.GE],this);},Bj1:function(G){var F;this.LV.BT.L(this.
LV.V.AQ);if(!!this.LV.Q)this.LV.BT.R((A._GetAutoObject(A.Device.Converter).S3((F=
this.LV.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DV).Aaw());},GE:function(
G){var AJu=true;if(this.FE.Q===1)AJu=false;this.C9.Aj(AJu);this.C9.Ar(AJu);this.
C9.Z(AJu);A._GetAutoObject(A.Device.Helper).ANs(this.Y);},_Init:function(aArg){C.
Ce._Init.call(this,aArg);C.AMC._Init.call(this.FE={I:this},0);C.AHe._Init.call(this.
OJ={I:this},0);C.AUC._Init.call(this.M9={I:this},0);C.AkT._Init.call(this.C9={I:
this},0);C.Io._Init.call(this.LV={I:this},0);C.BW._Init.call(this.T2={I:this},0);
this.__proto__=C.AVJ;var B;this.I8(A.aaR(A.acf.Settings));this.Hd.R(A.aaR(A.acf.
AsR));this.FE.As(A._GetAutoObject(A.Device.Device).AnimalType);this.OJ.As(A._GetAutoObject(
A.Device.Device).OJ);this.M9.H(AXr);this.M9.Aj(true);this.C9.H(As4);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KH));this.C9.Bh(true);this.C9.F_(1000);this.C9.EV(99000);
this.LV.H(As5);this.LV.Aj(true);this.LV.T(A.aaR(A.acf.A4Y));this.LV.F_(50);this.
LV.EV(2000);this.LV.AS6(A._GetAutoObject(A.acj.DV).AzL());this.T2.H(AcO);this.T2.
Aj(true);this.T2.T(A.aaR(A.acf.A7n));this.T2.F_(-1);this.T2.EV(1);this.JU(this.Y
,-1);this.JU(this.Ay,-1);this.J(this.M9,0);this.J(this.C9,0);this.J(this.LV,0);this.
J(this.T2,0);this.M9.AeR([B=this.M9,B.FQ]);this.M9.Go([this,this.D_,this.GN]);this.
M9.Akz(A.aaL(A.ach.Edit));this.M9.LX([B=this.M9,B.AyM]);this.M9.L0(A.aaL(A.ach.AnO
));this.M9.As([B=this.FE,B.B8,B.B9]);this.M9.CI(this.FE);this.M9.A9Z([B=this.FE,
B.ASM,B.A0f]);this.M9.A9Y([B=this.FE,B.ASL,B.A0e]);this.C9.Go([this,this.D_,this.
GN]);this.C9.LX([B=this.M9,B.AyM]);this.C9.L0(A.aaL(A.ach.AnO));this.C9.As([B=this.
FE,B.A8c,B.ASS]);this.LV.Go([this,this.D_,this.GN]);this.LV.LX([B=this.M9,B.AyM]
);this.LV.L0(A.aaL(A.ach.AnO));this.LV.As([B=this.FE,B.A8b,B.ASQ]);this.LV.A_a([
this,this.Bj1]);this.T2.Go([this,this.D_,this.GN]);this.T2.As([B=this.OJ,B.B8,B.
B9]);this.T2.CI(this.OJ);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;
this.FE._Done();this.OJ._Done();this.M9._Done();this.C9._Done();this.LV._Done();
this.T2._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this
);this.FE._ReInit();this.OJ._ReInit();this.M9._ReInit();this.C9._ReInit();this.LV.
_ReInit();this.T2._ReInit();this.I8(A.aaR(A.acf.Settings));this.Hd.R(A.aaR(A.acf.
AsR));this.C9.T(A.aaR(A.acf.KH));this.LV.T(A.aaR(A.acf.A4Y));this.T2.T(A.aaR(A.acf.
A7n));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.FE)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M9).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUC={YZ:null,Init:
function(aArg){var B;A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Device),B.
ASt,B.AZ2],0);A.pe([this,this.AfC],this);},A3E:function(G){A._GetAutoObject(A.Device.
Device).A9(37,true,A.jV,0,[this,this.Bbh]);},A1w:function(G){var F;if(this.A8===
1){var BQ=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DV).AzL();if(this.D7<this.
AlP)this.D7=this.AlP;if(this.DX!==BQ){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.
D7));A.abo(this.JS,0);}}if(this.A8===2){var BQ=this.DX;this.DX=this.DX-A._GetAutoObject(
A.acj.DV).AzL();if(this.DX<this.D7)this.DX=this.D7;if(this.DX!==BQ){if(!!this.JR
)(F=this.JR,F[2].call(F[0],this.DX));A.abo(this.JR,0);}}this.DJ(this);this.An();
},A17:function(G){var F;if(this.A8===1){var BQ=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DV).AzL();if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BQ){if(!!this.JS
)(F=this.JS,F[2].call(F[0],this.D7));A.abo(this.JS,0);}}if(this.A8===2){var BQ=this.
DX;this.DX=this.DX+A._GetAutoObject(A.acj.DV).AzL();if(this.DX>this.AlK)this.DX=
this.AlK;if(this.DX!==BQ){if(!!this.JR)(F=this.JR,F[2].call(F[0],this.DX));A.abo(
this.JR,0);}}this.DJ(this);this.An();},GE:function(G){this.PG.R(AHZ+A._GetAutoObject(
A.Device.Converter).S3(this.D7,2,true));this.PF.R(AHZ+A._GetAutoObject(A.Device.
Converter).S3(this.DX,2,true));this.Su.R(A._GetAutoObject(A.acj.DV).Aaw());this.
YZ.R(this.Su.String);},A3e:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(A.Device.Device).Asr(this
);},A10:function(Atn){if(Atn===1)return this.PG;else if(Atn===2)return this.PF;else
return null;},_Init:function(aArg){C.Aco._Init.call(this,aArg);A.acg.Text._Init.
call(this.YZ={I:this},0);this.__proto__=C.AUC;this.T(A.aaR(A.acf.ACi));this.AlK=
2000;this.AlP=20;this.Background.H(JZ);this.V.H(BF);this.V.R(A.aaR(A.acf.ACi)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkM.H(AXs);this.AkN.H(AXt);this.Q3.H(AXu);
this.QB.H(AXv);this.PF.H(AXw);this.PG.H(AXx);this.Su.H(AXy);this.YZ.H(AXz);this.
YZ.I7(false);this.YZ.A6(0x12);this.YZ.L(0xFF000000);this.JU(this.H2,-8);this.J(this.
YZ,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YZ.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Aco;this.YZ._Done();C.Aco.
_Done.call(this);},_ReInit:function(){C.Aco._ReInit.call(this);this.YZ._ReInit();
this.T(A.aaR(A.acf.ACi));this.V.R(A.aaR(A.acf.ACi)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YZ.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Aco._Mark.call(this,D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABv={M:P6,A6Z:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A6Z();},_Init:function(
aArg){A.Graphics.Hv._Init.call(this,aArg);this.__proto__=C.ABv;},_className:"Application::AbstractPath"
};C.Aqg={DP:null,DZ:null,Rg:null,AdM:null,PX:null,AdL:null,Auw:1,A4u:0,Bca:false
,AzH:true,CP:function(){this.Bgm(this);},Init:function(aArg){var B;this.Bb(this.
AdM);A.zX([this,this.Bgm],[B=this.AdM,B.A8i,B.BaN],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdL.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BhE(this.Auw+this.A4u)));if(this.Auw===1)this.PX.R(A.aaR(A.acf.ANg));else this.
PX.R(A.aaR(A.acf.Bhd));},CF:function(G){if(this.AzH)this.AzH=false;else if(this.
DP.Bcj()===false)A.pe([this,this.A2N],this);else if(this.DP.AzV())this.DP.Ac4();
A.zV([this,this.Af7],A._GetAutoObject(A.Device.Device).Am,0);},E3:function(G){A.
z9([this,this.Af7],A._GetAutoObject(A.Device.Device).Am,0);},A2N:function(G){this.
Bca=true;A._GetAutoObject(C.A$).Fv();},Bgm:function(G){var B;var BcL=(C.Wi.isPrototypeOf(
B=this.AdM.AV)?B:null);if(!!BcL){var Ay2=A._NewObject(A.Device.ActionToString,0);
this.Rg.R(Ay2.Ls(BcL.Action));}},Ie:function(G){var Cx=(C.Wi.isPrototypeOf(G)?G:
null);if(!Cx)return;this.DP.Qi(Cx.Action);this.Blf(this.Auw+1);},BAg:function(G){
if(A._GetAutoObject(C.Ph).NU(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Blf:function(E){
if(this.Auw===E)return;this.Auw=E;this.An();},Af7:function(G){if((this.Bca===false
)&&(this.DP.Bcj()===false))A.pe([this,this.A2N],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);C.CH._Init.call(this.
Rg={I:this},0);C.ARx._Init.call(this.AdM={I:this},0);C.CH._Init.call(this.PX={I:
this},0);A.acg.Text._Init.call(this.AdL={I:this},0);this.__proto__=C.Aqg;this.Background.
L(A.jb.CS);this.N.H(Xd);this.N.Z(true);this.Dq(C.IG);this.DZ.AZ(0x3F);this.DZ.H(
Fb);this.DZ.L(A.jb.CK);this.Rg.H(AXA);this.Rg.L(A.jb.Text);this.AdM.H(AH0);this.
PX.H(AXB);this.PX.R(A.aaR(A.acf.ANg));this.PX.L(A.jb.Text);this.AdL.H(Ayg);this.
AdL.R(AH1);this.AdL.L(A.jb.Text);this.J(this.DZ,0);this.J(this.Rg,0);this.J(this.
AdM,0);this.J(this.PX,0);this.J(this.AdL,0);this.N.CC=[this,this.A2N];this.N.Cl=[
this,this.BAg];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbB));this.Rg.S(
A.aaL(A.fl.EL));this.Rg.A2(A.aaL(A.fl.Af));this.Rg.Cu(A.aaL(A.fl.Ak));this.AdM.A3c=[
this,this.Ie];this.PX.S(A.aaL(A.fl.EL));this.PX.A2(A.aaL(A.fl.Af));this.PX.Cu(A.
aaL(A.fl.Ak));this.AdL.S(A.aaL(A.fl.Hr));this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.Rg._Done();this.
AdM._Done();this.PX._Done();this.AdL._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DZ._ReInit();this.Rg._ReInit();this.AdM._ReInit();
this.PX._ReInit();this.AdL._ReInit();this.PX.R(A.aaR(A.acf.ANg));this.Rg.S(A.aaL(
A.fl.EL));this.Rg.A2(A.aaL(A.fl.Af));this.Rg.Cu(A.aaL(A.fl.Ak));this.PX.S(A.aaL(
A.fl.EL));this.PX.A2(A.aaL(A.fl.Af));this.PX.Cu(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdL)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARx={H_:null,A3c:null,Cr:null,Y:null,Ay:
null,A3S:0,Init:function(aArg){A.zV([this,this.ABl],this.H_,0);A.zV([this,this.Bgj
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Aut],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABl],this);},Bb:function(E){var A2J=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A2J)A.abo([this,this.A8i,this.BaN],0);},DE:
function(G){var B;var Fe=0;var X=this.AV;switch(this.Cr.CO){case 6:Fe=2;break;case
7:Fe=7;break;case 4:Fe=4;break;case 5:Fe=5;break;default:;}X=this.QE(X,Fe,0x415);
if((Fe===5)&&!X){var ALb=this.AV;while(!X){ALb=this.QE(ALb,2,0x415);if(!!ALb)X=this.
QE(ALb,Fe,0x415);else break;}}if(!!X)this.Bb(X);var GT=(C.Wi.isPrototypeOf(B=this.
AV)?B:null);if(!!GT)this.A3S=(C.Wi.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A3S=0;A.pe([this,this.MN],this);},A1o:function(EE){var EQ=A._GetAutoObject(C.DP).
Bcr(EE,this.A3c);this.J(EQ,0);},Ao4:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdH=X;X=X.Ah;if(((AdH.U&0x400)===0x400))this.HN(AdH);
}},ABl:function(G){this.Ao4();var O;var CB=A._GetAutoObject(C.Ph).NP();for(O=0;O<
CB;O=O+1){var Aan=A._GetAutoObject(C.Ph).OC(O);this.A1o(Aan);}A.pe([this,this.Bgj
],this);A.pe([this,this.BpH],this);A.pe([this,this.Aut],this);},BpH:function(G){
var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400
)){var Aa=(C.Wi.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},Aut:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wi.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATw(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATw(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATw(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fg:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((
B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},Bgj:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wi.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Ph).NU(Aa.Action)&&A._GetAutoObject(C.
DP).A4t(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A3S===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MN],this);},MN:function(G){var B;this.Y.Vu(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARx;this.H(AXC);this.Cr.Filter=147;this.Y.AZ(0xB);this.Y.H(AXD);this.Y.JO(9);this.
Ay.AZ(0xA);this.Ay.H(AXE);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BN=[this,this.
DE];this.Cr.D1=[this,this.DE];this.Y.El=[this,this.Fg];this.H_=A._GetAutoObject(
C.Ph);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.H_)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3c)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fn={Ej:null,AK:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.AK={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fn;this.N.Ar(false);this.Ej.H(BF);this.Ej.Ar(false
);this.AK.H(Fb);this.AK.L(A.jb.Ad8);this.Text.H(BF);this.Text.R(AXF);this.Text.L(
0xFF000000);this.Ap.H(P6);this.Ap.L(A.jb.Text);this.J(this.Ej,0);this.J(this.AK,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cs(A.aaL(A.ach.AbB));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Aw(A.aaL(A.ach.AC9));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ej._Done();this.AK._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ej._ReInit();this.AK._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.XN={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},IW:function(G){},Ai:function(Ae){C.BW.
Ai.call(this,Ae);var FN=A.jb.Ad8;var GS=A.jb.CS;if(this.Hf){FN=A.jb.Text;GS=A.jb.
Bm;}if(!this.LF){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else if(this.Qo){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GS);}this.Ht.L(A.
jb.CS);this.H2.L(A.jb.CS);},Hg:function(G){var B;var Gd=this.Dy.G1;var Cz=(C.CH.
isPrototypeOf(B=this.Dy.Ci)?B:null);if(!Cz)return;Cz.S(A.aaL(A.fl.Ak));Cz.A2(A.aaL(
A.fl.Bi));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FY(Gd));else Cz.R(Xb);Cz.H(A.
abK(Cz.M,[this.Dy.V$,(B=this.Dy.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.XN;this.Dy.AFe(170);this.Dy.NZ(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Aji={C8:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hh(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Cp.Ai.call(this,Ae);var FN=A.jb.Ad8;var GS=A.jb.CS;if(this.Hf){FN=A.jb.Text;
GS=A.jb.Bm;}if(!this.LF){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else if(this.
Qo){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GS);}},_Init:function(
aArg){C.Cp._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aji;this.C8.H(AXG);this.C8.Cv(1);this.J(this.C8,0);this.C8.Aw(A.aaL(A.ach.Ajr)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cp;this.C8._Done();C.Cp._Done.
call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Cp._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALZ={Y:null,RJ:null,Tq:null
,Tr:null,Ts:null,AdK:null,XM:null,Vo:null,Vp:null,AaS:null,Ay:null,Init:function(
aArg){this.Bb(this.RJ);},DE:function(G){C.Fn.DE.call(this,G);this.MN(this);},IW:
function(G){this.BfC(this);},KQ:function(){if(!this.Bx){this.Bx=A._NewObject(C.N
,0);this.Bx.CC=[this,this.BfC];this.Bx.Cl=null;this.Bx.Cm=null;this.Bx.CV(A.jV);
this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.V0));}return this.Bx;},AA0:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XM.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XM.Q))A._GetAutoObject(C.AutoActions).J(this.XM.Q);if(!!this.Vo.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vo.Q))A._GetAutoObject(C.AutoActions
).J(this.Vo.Q);if(!!this.Vp.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vp.
Q))A._GetAutoObject(C.AutoActions).J(this.Vp.Q);if(!!this.AaS.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaS.Q))A._GetAutoObject(C.AutoActions).J(this.AaS.Q
);A._GetAutoObject(C.AutoActions).Ch();},BfC:function(G){if(this.Bzq()===true){this.
AA0();this.XB(this);}else A._GetAutoObject(A.Device.Device).A9(27,true,A.jV,0,null
);},Bzq:function(){return(!!this.XM.C4(this.XM.Q)||!!this.Vo.C4(this.Vo.Q))||!!this.
Vp.C4(this.Vp.Q);},Fg:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.
Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MN:function(G){var B;this.
Y.Vu(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true
,null,null);},BAs:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XM.Atu(this);this.Vo.Atu(this);this.Vp.Atu(this);this.AaS.Atu(this);}
,_Init:function(aArg){C.Fn._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.XN._Init.call(this.RJ={I:this},0);C.XN._Init.call(this.Tq={I:this},0);C.XN.
_Init.call(this.Tr={I:this},0);C.XN._Init.call(this.Ts={I:this},0);C.Au1._Init.call(
this.AdK={I:this},0);C.AutoAction._Init.call(this.XM={I:this},0);C.AutoAction._Init.
call(this.Vo={I:this},0);C.AutoAction._Init.call(this.Vp={I:this},0);C.AutoAction.
_Init.call(this.AaS={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALZ;var B;this.H(Rl);this.Text.R(A.aaR(A.acf.Tt));this.Y.H(Lt);this.Y.JO(1);this.
RJ.H(AhW);this.RJ.Ar(true);this.RJ.Aj(true);this.RJ.T(A._GetAutoObject(A.Device.
Helper).Nj(A.aaR(A.acf.Ajh),P7,AH2));this.Tq.H(UW);this.Tq.Ar(true);this.Tq.Aj(true
);this.Tq.T(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.Ajh),P7,AH3));this.
Tr.H(Aaf);this.Tr.Ar(true);this.Tr.Aj(true);this.Tr.T(A._GetAutoObject(A.Device.
Helper).Nj(A.aaR(A.acf.Ajh),P7,AH4));this.Ts.H(Alf);this.Ts.Ar(true);this.Ts.Aj(
true);this.Ts.T(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.Ajh),P7,AH5));this.
AdK.H(Ayh);this.AdK.Aj(true);this.AdK.T(A.aaR(A.acf.A_M));this.Vo.Index=1;this.Vp.
Index=2;this.AaS.Index=3;this.Ay.H(Iq);this.J(this.Y,0);this.J(this.RJ,0);this.J(
this.Tq,0);this.J(this.Tr,0);this.J(this.Ts,0);this.J(this.AdK,0);this.J(this.Ay
,0);this.Y.El=[this,this.Fg];this.RJ.Wz(A.aaL(A.fl.Hr));this.RJ.WA(A.aaL(A.fl.Hr
));this.RJ.As([B=this.XM,B.B8,B.B9]);this.RJ.CI(this.XM);this.Tq.Wz(A.aaL(A.fl.Hr
));this.Tq.WA(A.aaL(A.fl.Hr));this.Tq.As([B=this.Vo,B.B8,B.B9]);this.Tq.CI(this.
Vo);this.Tr.Wz(A.aaL(A.fl.Hr));this.Tr.WA(A.aaL(A.fl.Hr));this.Tr.As([B=this.Vp,
B.B8,B.B9]);this.Tr.CI(this.Vp);this.Ts.Wz(A.aaL(A.fl.Hr));this.Ts.WA(A.aaL(A.fl.
Hr));this.Ts.As([B=this.AaS,B.B8,B.B9]);this.Ts.CI(this.AaS);this.AdK.AR=[this,this.
BAs];this.Init(aArg);},_Done:function(){this.__proto__=C.Fn;this.Y._Done();this.
RJ._Done();this.Tq._Done();this.Tr._Done();this.Ts._Done();this.AdK._Done();this.
XM._Done();this.Vo._Done();this.Vp._Done();this.AaS._Done();this.Ay._Done();C.Fn.
_Done.call(this);},_ReInit:function(){C.Fn._ReInit.call(this);this.Y._ReInit();this.
RJ._ReInit();this.Tq._ReInit();this.Tr._ReInit();this.Ts._ReInit();this.AdK._ReInit(
);this.XM._ReInit();this.Vo._ReInit();this.Vp._ReInit();this.AaS._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.Tt));this.RJ.T(A._GetAutoObject(A.Device.Helper
).Nj(A.aaR(A.acf.Ajh),P7,AH2));this.Tq.T(A._GetAutoObject(A.Device.Helper).Nj(A.
aaR(A.acf.Ajh),P7,AH3));this.Tr.T(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.
Ajh),P7,AH4));this.Ts.T(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.Ajh),P7
,AH5));this.AdK.T(A.aaR(A.acf.A_M));},_Mark:function(D){var B;C.Fn._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ts)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cn={Cc:
A.abi(16,0,null),Dn:function(){return 16;},C4:function(aIndex){if(aIndex>=16)return-
1;return this.Cc.Get(aIndex);},DU:function(A7){var O=0;while(O<16){if(this.Cc.Get(
O)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(O<16){
if(this.Cc.Get(O)>max)max=this.Cc.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.Cc=[]).__proto__=C.Cn.Cc;this.__proto__=C.Cn;
},_className:"Application::ArraySelection"};C.AutoAction={H_:null,Ac4:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.Atu],this.Ac4,0);A.pe([this,this.
Atu],this);},Dn:function(){return this.H_.NP();},C4:function(aIndex){if(aIndex>=
this.Dn())return-1;return this.H_.OC(aIndex);},FY:function(aIndex){return this.ActionToString.
BH(this.C4(aIndex));},DU:function(A7){var O=0;while(O<this.Dn()){if(this.H_.OC(O
)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(O<this.
Dn()){if(this.H_.OC(O)>max)max=this.H_.OC(O);O=O+1;}return max;},Atu:function(G){
this.Q=this.Ac4.OC(this.Index);A.abo([this,this.B8,this.B9],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.H_=A._GetAutoObject(C.AuL);this.Ac4=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.H_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AL4={Atr:0,Init:function(aArg
){var B;A.zX([this,this.Bd6],[B=A._GetAutoObject(A.Device.Device),B.A71,B.Baz],0
);A.zX([this,this.Bd3],[B=A._GetAutoObject(A.Device.Device),B.ASf,B.AZW],0);A.pe([
this,this.Bd6],this);A.pe([this,this.Bd3],this);},Clear:function(){C.Vt.Clear.call(
this);this.Atr=0;},Ch:function(){A._GetAutoObject(A.Device.Device).ArD(this.Atr);
A._GetAutoObject(A.Device.Device).ArE(this.toString());},Bd6:function(G){this.Atr=
A._GetAutoObject(A.Device.Device).Ph;A.we(this,0);},Bd3:function(G){this.Er(A._GetAutoObject(
A.Device.Device).Auy);A.we(this,0);},NU:function(EE){if((this.Atr&(((B=EE)<0)?B+
0x100000000:B))===(((B=EE)<0)?B+0x100000000:B))return true;return false;},AUs:function(
EE){this.Atr=this.Atr|(((B=EE)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vt._Init.
call(this,aArg);this.__proto__=C.AL4;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Ph={_Init:function(){C.AL4._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AL5={Vr:null,Ay:null,Y:null,JL:null,CP:function(
){this.AiH(this);},Init:function(aArg){A.zV([this,this.AiH],this.Vr,0);A.pe([this
,this.AiH],this);},DE:function(G){C.Fn.DE.call(this,G);this.MN(this);},KQ:function(
){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CC=[this,this.Ew];this.Bx.Cl=[
this,this.A2V];this.Bx.Cm=[this,this.A3o];this.Bx.C6(A.aaL(A.ach.Arc));this.Bx.Cs(
A.aaL(A.ach.Aq7));this.Bx.CY(A.aaL(A.ach.V0));}return this.Bx;},Ew:function(G){if(
this.Byg()>0){this.AA0();this.XB(this);}else A._GetAutoObject(A.Device.Device).A9(
28,true,A.jV,0,null);},AiH:function(G){this.Ao4();var O;for(O=0;O<this.Vr.NP();O=
O+1){var Aan=A._GetAutoObject(C.Ph).OC(O);this.A03(Aan);}this.J(this.JL,0);A.aaS([
this,this.MN],this);},Fg:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]
);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MN:function(G){var
B;this.Y.Vu(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.
AV,true,null,null);},A03:function(G6){var Ay2=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sc,0);Aa.T(Ay2.BH(G6));Aa.Aj(true);Aa.G1=G6;Aa.A9M(this.
Vr.NU(G6));this.J(Aa,0);this.ZE(Aa);},Ao4:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdH=X;X=X.Ah;if(((AdH.U&0x400)===0x400))this.HN(
AdH);}},AA0:function(){var B;this.Vr.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JL)){var Aa=(C.Sc.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vr.J(Aa.G1);if(Aa.ASr())this.Vr.AUs(Aa.G1);}else A.ab5(
"%s",Ayi);}X=X.Ah;}this.Vr.Ch();},Byg:function(){var B;var A3T=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JL)){var
Aa=(C.Sc.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASr())A3T=A3T+1;}else A.ab5("%s"
,Ayi);}X=X.Ah;}return A3T;},A2V:function(G){var B;var Aa=(C.Sc.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAg=(C.Sc.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAg){this.
Ahv(AAg,Aa);A.pe([this,this.MN],this);}}},A3o:function(G){var B;var Aa=(C.Sc.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAM=(C.Sc.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAM
){this.Ahv(Aa,AAM);A.pe([this,this.MN],this);}}},AqK:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiH],this);},_Init:function(
aArg){C.Fn._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Au1._Init.call(this.JL={I:this},0);this.__proto__=C.AL5;
this.H(Rl);this.Text.R(A.aaR(A.acf.AD$));this.Ay.H(Iq);this.Y.H(Lt);this.Y.JO(1);
this.JL.H(AH6);this.JL.Aj(true);this.JL.T(A.aaR(A.acf.AqK));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JL,0);this.Y.El=[this,this.Fg];this.JL.AR=[this,this.AqK
];this.Vr=A._GetAutoObject(C.Ph);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fn;this.Ay._Done();this.Y._Done();this.JL._Done();C.Fn._Done.call(this);},_ReInit:
function(){C.Fn._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JL._ReInit(
);this.Text.R(A.aaR(A.acf.AD$));this.JL.T(A.aaR(A.acf.AqK));this.CP();},_Mark:function(
D){var B;C.Fn._Mark.call(this,D);if((B=this.Vr)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sc={G1:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hh(10);},Bk:function(aSize){C.T9.Bk.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.T9.Ai.call(this,Ae);var G$=((Ae&0x10
)===0x10);var Fr=((Ae&0x20)===0x20);var GA=this.Bo.Bw;var FN=A.jb.Ad8;var GS=A.jb.
Bm;if(this.Hf){FN=A.jb.Bm;GS=A.jb.Text;}if(!G$){this.Background.L(FN);this.V.L(A.
jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fr){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GS);
}this.LF=G$;this.KD=Fr;this.Qo=GA;},IW:function(G){this.A3m(this);},A3m:function(
G){this.AEV(!this.Amy);},A9M:function(E){this.AEV(E);},ASr:function(){return this.
Amy;},_Init:function(aArg){C.T9._Init.call(this,aArg);this.__proto__=C.Sc;this.Mj.
H(AXH);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vt={CB:0,
H_:A.abi(17,0,null),OC:function(Hw){return this.H_.Get(Hw);},NP:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.H_.Set(O,0);this.CB=0;},J:function(
EE){if(this.CB>=17)A.ab5("%s",AH7);else{this.H_.Set(this.CB,EE);this.CB=this.CB+
1;}},Ch:function(){},Er:function(AcT){var AJh=AcT.indexOf(String.fromCharCode(0x2C
),0);var A1p=A.jV;var O=0;this.CB=0;while(O<17)if(AcT===A.jV){this.H_.Set(O,0);O++;
}else{if(AJh===-1){A1p=AcT;AcT=A.jV;}else{A1p=A.abV(AcT,AJh);AcT=A.ab1(AcT,0,AJh+
1);}var Aan=A.abZ(A1p,0,10)|0;if(this.ADN(Aan)){this.H_.Set(this.CB,Aan);this.CB=
this.CB+1;O++;}AJh=AcT.indexOf(String.fromCharCode(0x2C),0);}if(AcT!==A.jV)A.ab5(
"%s",AXI);},toString:function(){var A2A=(((B=this.H_.Get(0))<0)?B+0x100000000:B).
toFixed();var O;for(O=1;O<this.CB;O=O+1)A2A=(A2A+AH8)+(((B=this.H_.Get(O))<0)?B+
0x100000000:B).toFixed();return A2A;},Axp:function(Hw,EE){if(Hw>=this.CB){A.ab5(
"%s",((((AXJ+Hw.toFixed())+AXK)+this.CB.toFixed())+AXL)+AXM);return;}this.H_.Set(
Hw,EE);},Contains:function(EE){var O;for(O=0;O<this.CB;O=O+1)if(this.H_.Get(O)===
EE)return true;return false;},ADN:function(EE){return true;},DU:function(EE){var
O;for(O=0;O<this.CB;O=O+1)if(this.H_.Get(O)===EE)return O;return-1;},_Init:function(
aArg){(this.H_=[]).__proto__=C.Vt.H_;this.__proto__=C.Vt;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ActionsList"};C.AMM={Init:function(aArg){var B;A.zX([this,this.Bef
],[B=A._GetAutoObject(A.Device.Device),B.A8a,B.BaH],0);A.pe([this,this.Bef],this
);},Ch:function(){A._GetAutoObject(A.Device.Device).Aku(this.toString());},ADN:function(
EE){switch(EE){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Bef:function(G){this.Er(A._GetAutoObject(A.Device.Device).
AutoActions);A.we(this,0);},_Init:function(aArg){C.Vt._Init.call(this,aArg);this.
__proto__=C.AMM;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AMM._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Wi={Vq:null,Kt:null,A6Y:A.jV,Action:0,A4v:
false,A_y:false,A$e:false,Bk:function(aSize){C.Fj.Bk.call(this,aSize);this.QY.H(
this.Mn.M);this.OB.H(this.QY.M);},Ai:function(Ae){C.Fj.Ai.call(this,Ae);if(!this.
LF){this.Kt.TU.L(A.jb.Am0);this.Kt.QG.Z(true);this.Kt.QG.L(A.jb.AQV);}else if(this.
Qo){this.Kt.TU.L(A.jb.Bm);this.Kt.QG.Z(false);}else if(this.KD){this.Kt.TU.L(A.jb.
Bm);this.Kt.QG.Z(false);}else{this.Kt.TU.L(A.jb.Text);this.Kt.QG.Z(true);this.Kt.
QG.L(A.jb.CS);}},Ble:function(E){if(this.Action===E)return;this.Action=E;},Bmm:function(
E){if(this.A6Y===E)return;this.A6Y=E;this.Vq.Text.R(E);},ATw:function(E){if(this.
A$e===E)return;this.A$e=E;this.Kt.Bm9(!this.Kt.AUR);},AFv:function(E){if(this.A_y===
E)return;this.A_y=E;this.Kt.Z(!this.Kt.Fl());},A9d:function(E){if(this.A4v===E)return;
this.A4v=E;this.Vq.Z(E);},_Init:function(aArg){C.Fj._Init.call(this,aArg);C.Vq._Init.
call(this.Vq={I:this},0);C.Kt._Init.call(this.Kt={I:this},0);this.__proto__=C.Wi;
this.H(AXN);this.Background.H(AXO);this.G4.Ar(false);this.G4.Z(false);this.Vq.H(
AXP);this.Vq.Z(false);this.Kt.H(AXQ);this.Kt.Z(false);this.J(this.Vq,0);this.J(this.
Kt,0);this.Mn.Aw(A.aaL(A.ach.ANh));},_Done:function(){this.__proto__=C.Fj;this.Vq.
_Done();this.Kt._Done();C.Fj._Done.call(this);},_ReInit:function(){C.Fj._ReInit.
call(this);this.Vq._ReInit();this.Kt._ReInit();},_Mark:function(D){var B;C.Fj._Mark.
call(this,D);if((B=this.Vq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kt)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.Vq={AK:
null,Text:null,BU:null,Init:function(aArg){this.Text.H(this.M);this.BU.H(this.M);
this.AK.H(this.M);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK.
_Init.call(this.AK={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);this.__proto__=C.Vq;this.AK.H(AXR);this.AK.L(A.
jb.Bi1);this.H(AXS);this.Text.H(AXT);this.Text.L(A.jb.Text);this.BU.H(AXU);this.
BU.Nf(1);this.BU.L(A.jb.Text);this.J(this.AK,0);this.J(this.Text,0);this.J(this.
BU,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AK._Done();this.Text._Done();this.BU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AK._ReInit();this.Text._ReInit(
);this.BU._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Kt={QG:null,TU:null,AUR:false,Bm9:function(E){if(this.
AUR===E)return;this.AUR=E;if(E){this.TU.Aw(A.aaL(A.ach.ACq));this.QG.Aw(A.aaL(A.
ach.ACq));}else{this.TU.Aw(A.aaL(A.ach.AqE));this.QG.Aw(A.aaL(A.ach.AqE));}},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.QG={I:this
},0);A.acg.Ap._Init.call(this.TU={I:this},0);this.__proto__=C.Kt;this.H(Ayj);this.
QG.H(Ayj);this.QG.Cv(1);this.TU.H(Ayj);this.TU.Cv(0);this.J(this.QG,0);this.J(this.
TU,0);this.QG.Aw(A.aaL(A.ach.AqE));this.TU.Aw(A.aaL(A.ach.AqE));},_Done:function(
){this.__proto__=A.Core.P;this.QG._Done();this.TU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.QG._ReInit();this.TU._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.QG)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.ARV={Gc:null,Cb:null,Do:null,Dh:null,Ko:null,Zl:10,Aq4:0,AEj:0,AR9:0,Ay1:false
,LU:false,Bci:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).Am.Lf())A._GetAutoObject(A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.
Device).Am.HG().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gn();A._GetAutoObject(
A.Device.Helper).Aqj(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAu],this.
C$.Q,0);A.zX([this,this.BAd],this.Do.Q,0);A.zX([this,this.ABj],this.Dh.Q,0);A.zX([
this,this.ABj],this.Dh.HC.Q,0);A.zX([this,this.ABj],[this,this.ASy,this.AFt],0);
A.zX([this,this.GE],[B=A._GetAutoObject(A.Device.Device),B.A87,B.Ba9],0);A.zX([this
,this.BeP],this.Cb.Q,0);A.pe([this,this.AAu],this);A.pe([this,this.GE],this);A.pe([
this,this.ABj],this);A.pe([this,this.BeP],this);},CF:function(G){if(!this.Ay1){this.
Ay1=true;A.pe([this,this.AcQ],this);}else C.HY.CF.call(this,G);},Aga:function(G){
this.AR9=this.Zl;this.Bcq(this);},Ew:function(G){A._GetAutoObject(A.Device.Helper
).W.Hi();A._GetAutoObject(C.A$).Fv();},Auf:function(){this.N.CV(A.jV);this.N.C6(
A.aaL(A.ach.ADx));this.N.Cm=[this,this.AyL];},AAp:function(G){A._GetAutoObject(C.
A$).Cg(55);},AFt:function(E){if(this.Zl===E)return;this.Zl=E;A.abo([this,this.ASy
,this.AFt],0);},Bcq:function(G){var F;if(!this.Zl||(this.Bci===true)){A._GetAutoObject(
A.Device.Device).A9(24,false,CQ,0,null);if(this.AEj===1)A._GetAutoObject(A.Device.
Device).A9(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A9(23,
true,this.AEj.toFixed(),2000,null);this.Ew(this);return;}this.Gc.Gn();this.Gc.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gc.NY(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gc.Q1(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gc.JP(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gc.Nc(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gc.PP(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gc.SC(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alp=A._GetAutoObject(
A.Device.Helper).A1j(this.Gc,(F=this.Dh.HZ.Hp,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Am);if(!Alp)this.AiZ();else{A._GetAutoObject(A.Device.Helper).AKi(
this.Gc,Alp,(F=this.Dh.HZ.Hp,F[1].call(F[0])),this.Zl-1,[this,this.ApH]);A._GetAutoObject(
A.Device.Device).A9(24,false,CQ,0,null);}},GE:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am2())this.C9.Z(true);else this.C9.Z(false);if(this.LU){this.Do.
Z(false);this.Cb.T(A.aaR(A.acf.ACx));this.Cb.AEX(A.aaL(A.ach.Ae$));}else{this.Do.
Z(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.AEX(null);}if((this.Y.Biz(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JD(this.Y.TL(this.AV,0x1));this.An();
},AS3:function(E){if(this.Aq4===E)return;this.Aq4=E;A.abo([this,this.A8m,this.AS3
],0);},ABj:function(G){var F;var AJ5=(F=this.Dh.Q,F[1].call(F[0]));var Az9=-1;switch((
F=this.Dh.HZ.Hp,F[1].call(F[0]))){case 0:Az9=AJ5+((F=A._GetAutoObject(A.Device.Helper
).BcY(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zl-1));break;case 1:Az9=(AJ5+this.
Zl)-1;break;case 3:case 2:case 5:case 4:switch(this.Dh.HC.AC.Q){case 0:Az9=(AJ5+
this.Zl)-1;break;case 1:Az9=(AJ5-this.Zl)+1;break;default:throw new Error(AXV+this.
Dh.HC.AC.Q.toFixed());}break;default:throw new Error(AXW+this.Dh.HC.AC.Q.toFixed(
));}this.AS3(Az9);},BAd:function(G){A.pe([this,this.GE],this);A.pe([this,this.At0
],this);},AAu:function(G){A._GetAutoObject(A.Device.Helper).AVn(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LU);A.pe([this,this.ABj],this);},ApH:function(G){var F;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case 22:case 21:case 48:if((
At.Id===48)&&(At.PopupState===7))this.ApB();else switch((F=this.Dh.HZ.Hp,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JD(this.Dh);break;case 0:this.JD(this.Do
);break;case 1:this.JD(this.Cb);break;default:throw new Error(Ayk+(F=this.Dh.HZ.
Hp,F[1].call(F[0])).toFixed());}break;case 25:this.JD(this.Cb);break;case 47:if(
At.PopupState===7)this.ApB();else{this.JD(this.Dh);this.JD(this.Cb);}break;case 43:{
this.JD(this.Dh);this.JD(this.Do);}break;case 42:{this.JD(this.Dh);this.JD(this.
Cb);}break;case 41:break;default:A.ab5("%s%e",As6,At.Id);}},AiZ:function(){this.
Gc.Ch(A._GetAutoObject(A.Device.Device).Am);this.AEj=this.AEj+1;if(A._GetAutoObject(
A.Device.Helper).Am2()){if(A._GetAutoObject(A.Device.Device).Bt.Lf()){A._GetAutoObject(
A.Device.Device).A9(24,false,UX,0,null);A._GetAutoObject(A.Device.Device).A9(50,
true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),0,null);}else{var L6=A.
_GetAutoObject(A.Device.Device).Am.LS(0,this.Gc.Id);A._GetAutoObject(A.Device.Device
).SL(L6);var B1=A._NewObject(A.Device.Rating,0);B1.Gn();B1.OnSetAnimalId(this.Gc.
Id);B1.OnSetBodyWeight(this.KH);B1.OnSetTimestamp(this.Gc.DateOfBirth);B1.Ch(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApB();},ApB:function(){var B;var F,CA;if(!!(F=this.Cb.
Q,F[1].call(F[0]))){(F=this.Cb.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LU)(
CA=this.Do.Q,CA[2].call(CA[0],(F=this.Cb.Q,F[1].call(F[0]))));}if(!this.LU)(CA=this.
Do.Q,CA[2].call(CA[0],A._GetAutoObject(A.Device.Helper).A$u(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Do.Q,F[1].call(
F[0])),this.Do.AjN(),this.Do.AjP())));var IT=null;switch((F=this.Dh.HZ.Hp,F[1].call(
F[0]))){case 3:IT=[B=A._GetAutoObject(A.Device.Device),B.Av_,B.AyC];break;case 2:
IT=[B=A._GetAutoObject(A.Device.Device),B.Av$,B.AyD];break;case 4:case 5:IT=[B=A.
_GetAutoObject(A.Device.Device),B.Anp,B.AoD];break;default:;}if(!!IT){switch((F=
this.Dh.Kj.VO,F[1].call(F[0]))){case 1:IT[2].call(IT[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dh.Q,F[2].call(F[0],IT[1].call(IT[0])));
}var XI=100-((this.Zl/this.AR9)*100);A._GetAutoObject(A.Device.Device).A9(24,true
,(((this.AR9.toFixed()+As7)+(XI|0).toFixed())+As7)+(F=this.Dh.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BAn]);this.AFt(this.Zl-1);A.aaS([this,this.Bcq],null);},BAn:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===5))this.Bci=true;},ApI:function(G){var F;C.HY.ApI.call(this,G);var AoX=
0;switch((F=this.BZ.Q,F[1].call(F[0]))){case 0:case 2:AoX=A._GetAutoObject(A.Device.
Device).AdO;break;case 1:AoX=730;break;default:A.ab5("%s%e",Alc,(F=this.BZ.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q1(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmE(AoX));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnV));switch(this.BZ.AC.Q){case 0:{this.Ko.I9(A.aaR(A.acf.ANc));this.
Ko.IM(A.aaR(A.acf.ANd));}break;case 1:{this.Ko.I9(A.aaR(A.acf.Bhn));this.Ko.IM(A.
aaR(A.acf.Bho));}break;case 2:{this.Ko.I9(A.aaR(A.acf.Bjn));this.Ko.IM(A.aaR(A.acf.
Bjo));}break;default:throw new Error(Alc);}},AeZ:function(E){if(this.LU===E)return;
this.LU=E;A.abo([this,this.Awb,this.AeZ],0);},At0:function(G){var F,CA,S8;this.AeZ(((
F=this.Cb.Q,F[1].call(F[0]))===(CA=this.Do.Q,CA[1].call(CA[0])))&&!!(S8=this.Cb.
Q,S8[1].call(S8[0])));A.pe([this,this.GE],this);},BeP:function(G){A.pe([this,this.
At0],this);},ASy:function(){return this.Zl;},A8m:function(){return this.Aq4;},Awb:
function(){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.AvV.
_Init.call(this.Cb={I:this},0);C.Q9._Init.call(this.Do={I:this},0);C.AGB._Init.call(
this.Dh={I:this},0);C.AUE._Init.call(this.Ko={I:this},0);this.__proto__=C.ARV;var
B;this.Dq(C.AC$);this.Cb.H(Aor);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak4));this.
Cb.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asu));this.Cb.ArN(A.
aaR(A.acf.Akm));this.Do.H(AXX);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Ud));this.
Do.Ar2(false);this.Dh.H(AXY);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.A6L));this.Dh.
By(0);this.Ko.H(AXZ);this.Ko.Aj(true);this.Ko.T(A.aaR(A.acf.A7S));this.Ko.F_(1);
this.Ko.EV(500);this.Ko.IM(A.aaR(A.acf.ANd));this.Ko.I9(A.aaR(A.acf.ANc));this.Ko.
A9D(A.aaR(A.acf.Aq4)+A.aaR(A.acf.Colon));this.J(this.Cb,0);this.J(this.Do,0);this.
J(this.Dh,0);this.J(this.Ko,0);this.Gc=A._NewObject(A.Device.Animal,0);this.Cb.AR=[
this,this.AcQ];this.Cb.LX([this,this.AcQ]);this.Cb.L0(A.aaL(A.ach.Ae$));this.Cb.
As([B=A._GetAutoObject(A.Device.Helper).W,B.ArA,B.PP]);this.Cb.OL([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UZ]);this.Cb.PN([B=A._GetAutoObject(A.Device.Device),B.Ug
,B.U0]);this.Cb.Uh([B=A._GetAutoObject(A.Device.Device),B.Anm,B.AoC]);this.Cb.AeZ([
this,this.Awb,this.AeZ]);this.Do.Go([this,this.D_,this.GN]);this.Do.LX([this,this.
AcQ]);this.Do.L0(A.aaL(A.ach.Ae$));this.Do.Uj([B=this.Gender.Animal,B.Wu,B.JP]);
this.Do.OL([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ]);this.Do.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.U0]);this.Do.Uh([B=A._GetAutoObject(A.Device.Device),B.Anm
,B.AoC]);this.Do.As([B=A._GetAutoObject(A.Device.Helper).W,B.Anq,B.Nc]);this.Do.
Ant([B=this.AnimalType.Animal,B.PM,B.EC]);this.Dh.Go([this,this.D_,this.GN]);this.
Dh.LX([B=this.Dh,B.FQ]);this.Dh.L0(A.aaL(A.ach.Edit));this.Dh.As([B=A._GetAutoObject(
A.Device.Helper).W,B.ArB,B.SC]);this.Dh.A9e(A._GetAutoObject(A.Device.Helper).W);
this.Ko.As([this,this.ASy,this.AFt]);this.Ko.BlK([this,this.A8m,this.AS3]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HY;this.Cb._Done();this.Do._Done(
);this.Dh._Done();this.Ko._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY.
_ReInit.call(this);this.Cb._ReInit();this.Do._ReInit();this.Dh._ReInit();this.Ko.
_ReInit();this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Asu));this.Cb.ArN(A.aaR(A.acf.Akm));this.Do.T(A.aaR(A.acf.
Ud));this.Dh.T(A.aaR(A.acf.A6L));this.Ko.T(A.aaR(A.acf.A7S));this.Ko.IM(A.aaR(A.
acf.ANd));this.Ko.I9(A.aaR(A.acf.ANc));this.Ko.A9D(A.aaR(A.acf.Aq4)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.Gc)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AT8={BW:null,RatingMode:null,KQ:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.Cm=null;this.Bx.Cl=null;this.Bx.CC=[this,this.XB];this.Bx.CV(A.jV
);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.V0));}return this.Bx;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AT8;var B;this.
H(Rl);this.BW.H(As4);this.BW.T(A.aaR(A.acf.A$m));this.J(this.BW,0);this.BW.As([B=
this.RatingMode,B.B8,B.B9]);this.BW.CI(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.A$m));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bfp],[B=A._GetAutoObject(A.Device.Device),B.ASC,B.AZ8],0);A.pe([this,this.Bfp],this
);},Dn:function(){return 2;},FY:function(aIndex){return this.RatingModeToString.
BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.
Device).AwX(E);},Bfp:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B8,this.B9],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cc.Set(0,0);this.Cc.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cn;this.RatingModeToString._Done();C.Cn._Done.call(this
);},_ReInit:function(){C.Cn._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANw={WN:
function(G){C.Amq.WN.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqZ()){
A._GetAutoObject(A.Device.Helper).W.AkB(false);A._GetAutoObject(A.Device.Helper).
W.Ch(A._GetAutoObject(A.Device.Device).Am);}},_Init:function(aArg){C.Amq._Init.call(
this,aArg);this.__proto__=C.ANw;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hc={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hc;},_className:"Application::BaseItem"
};C.AVC={BW:null,WeightRecordingMode:null,KQ:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.Cm=null;this.Bx.Cl=null;this.Bx.CC=[this,this.XB];this.Bx.CV(A.jV
);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.V0));}return this.Bx;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVC;var B;this.H(Rl);this.BW.H(As4);this.BW.T(A.aaR(A.acf.AsR));this.BW.EV(1);
this.J(this.BW,0);this.BW.As([B=this.WeightRecordingMode,B.B8,B.B9]);this.BW.CI(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BW.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit();this.WeightRecordingMode.
_ReInit();this.BW.T(A.aaR(A.acf.AsR));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dn:function(){return 2;},FY:function(aIndex){return this.
WeightRecordingModeToString.BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this
,E);A._GetAutoObject(A.Device.Device).Aw9(E);},Init:function(aArg){var B;A.zX([this
,this.Bgv],[B=A._GetAutoObject(A.Device.Device),B.A86,B.Ba8],0);A.pe([this,this.
Bgv],this);},Bgv:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B8,this.B9],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cc.Set(0,0);this.Cc.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.WeightRecordingModeToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa1={BooleanToAutoOnOff:null,FY:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BH(aIndex);},_Init:function(aArg){C.Gb._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa1;},_Done:function(
){this.__proto__=C.Gb;this.BooleanToAutoOnOff._Done();C.Gb._Done.call(this);},_ReInit:
function(){C.Gb._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gb._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxM={A6Z:function(){var B;this.
Axq(1);this.Jq(0,3);this.VC(0,0,(B=this.M)[3]-B[1]);this.A4y(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4y(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VK(0);},_Init:
function(aArg){C.ABv._Init.call(this,aArg);this.__proto__=C.AxM;},_className:"Application::Triangle"
};C.ATJ={Y:null,Init:function(aArg){this.BxD(this);},BxC:function(P9){var Aa=A._NewObject(
C.AND,0);Aa.H(BF);Aa.T(P9);Aa.Aj(true);Aa.Ar(false);Aa.Bh(true);this.J(Aa,0);this.
Att(this);},Att:function(G){var B;var Alx=1;var A2s=0;var X=this.Y.Ah;var Cx=null;
var K4=null;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OU.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cx){var ALe=(B=Cx.V.B7.A6D(Cx.V.String,0,-1))[2]-B[0
];if(!!(C.Ml.isPrototypeOf(X)?X:null))ALe=ALe+20;if(A2s<ALe)A2s=ALe;Cx.H(A.abL(Cx.
M,120));Cx.H(A.abI(Cx.M,28));Cx.H(A.abM(Cx.M,this.M[0]));Cx.H(A.abO(Cx.M,((B=this.
M)[3]-B[1])-(Alx*28)));Alx=Alx+1;}else{K4=(A.acg.C5.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K4){var Dg=((B=this.M)[3]-B[1])-((Alx-1)*28);K4.DM([this.
M[0],K4.Es[1]]);K4.DM([K4.Es[0],Dg]);K4.DC([this.M[0]+120,K4.ED[1]]);K4.DC([K4.ED[
0],Dg]);}}X=X.Ah;}this.BA6(A2s,28);},BA6:function(aWidth,BwL){var B;var X=this.Y.
Ah;var Cx=null;var K4=null;aWidth=aWidth+20;if(aWidth>(C.Asv[0]-10))aWidth=C.Asv[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OU.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cx){Cx.V.Text.A6(0x14);Cx.V.Text.Hh(10);Cx.H(A.abL(Cx.M,aWidth
));Cx.H(A.abI(Cx.M,BwL));Cx.H(A.abM(Cx.M,this.M[2]-((B=Cx.M)[2]-B[0])));}else{K4=(
A.acg.C5.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K4){K4.DM([this.M[
2]-aWidth,K4.Es[1]]);K4.DC([this.M[2],K4.ED[1]]);}}X=X.Ah;}},BxD:function(G){var
Aa=A._GetAutoObject(C.BS).AqO;while(!!Aa){if(!!(C.Axe.isPrototypeOf(Aa)?Aa:null)
){var EG=(C.Axe.isPrototypeOf(Aa)?Aa:null);this.BxB(EG.DK,EG.AR,EG.Bw,EG.AQ3);}else
if(!!(C.Axg.isPrototypeOf(Aa)?Aa:null)){var EG=(C.Axg.isPrototypeOf(Aa)?Aa:null);
this.BxI(EG.DK,EG.AR,EG.Bw,EG.Wt,EG.WQ);}else if(!!(C.Zz.isPrototypeOf(Aa)?Aa:null
)){var EG=(C.Zz.isPrototypeOf(Aa)?Aa:null);this.BxA(EG.DK,EG.AR,EG.Bw);}else if(
!!(C.AkH.isPrototypeOf(Aa)?Aa:null)){var EG=(C.AkH.isPrototypeOf(Aa)?Aa:null);this.
BxC(EG.DK);}else if(!!(C.AF3.isPrototypeOf(Aa)?Aa:null))this.BxJ();Aa=Aa.Ms;}A._GetAutoObject(
C.BS).Clear();A.pe([this,this.Att],this);},BxA:function(P9,AcZ,Ah1){var Aa=A._NewObject(
C.Ml,0);Aa.H(BF);Aa.T(P9);Aa.AR=AcZ;Aa.Aj(true);Aa.Ar(Ah1);Aa.Bh(true);this.J(Aa
,0);this.Att(this);},BxJ:function(){var K4=A._NewObject(A.acg.C5,0);K4.L(A.jb.Bm
);K4.Aj(true);K4.Nf(3);this.J(K4,0);this.Att(this);},BxB:function(P9,AcZ,Ah1,A0F
){var Aa=A._NewObject(C.AmC,0);Aa.H(BF);Aa.T(P9);Aa.AR=AcZ;Aa.Aj(true);Aa.Ar(Ah1
);Aa.Bh(true);Aa.As(A0F);this.J(Aa,0);this.Att(this);},BxI:function(P9,AcZ,Ah1,A2I
,Agj){var Aa=A._NewObject(C.ANC,0);Aa.H(BF);Aa.T(P9);Aa.AR=AcZ;Aa.Aj(true);Aa.Ar(
Ah1);Aa.Bh(true);Aa.BmK(A2I);Aa.AFH(Agj);this.J(Aa,0);this.Att(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.ATJ;this.H(Rl);this.Y.H(Rl);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afe={_Init:
function(){A.acl.Afe._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_u={AqO:null,Ahd:null,NC:function(P9){var EG=A._NewObject(
C.AkH,0);EG.DK=P9;this.J(EG);},Clear:function(){this.AqO=null;this.Ahd=null;},FT:
function(){var K4=A._NewObject(C.AF3,0);this.J(K4);},J:function(BbJ){if(!this.AqO
){this.AqO=BbJ;this.Ahd=this.AqO;}else{this.Ahd.Ms=BbJ;this.Ahd=this.Ahd.Ms;}},Qx:
function(P9,AcZ){var EG=A._NewObject(C.Zz,0);EG.DK=P9;EG.AR=AcZ;this.J(EG);},BgE:
function(P9,AcZ,A0F){var EG=A._NewObject(C.Axe,0);EG.DK=P9;EG.AR=AcZ;EG.AQ3=A0F;
this.J(EG);},XO:function(P9){var EG=A._NewObject(C.Zz,0);EG.DK=P9;EG.Bw=false;this.
J(EG);},ABz:function(P9,AcZ,A2I,Agj){var EG=A._NewObject(C.Axg,0);EG.DK=P9;EG.AR=
AcZ;EG.Wt=A2I;EG.WQ=Agj;this.J(EG);},_Init:function(aArg){this.__proto__=C.A_u;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BS={_Init:function(){C.A_u._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axf={Ms:null,_Init:function(aArg){this.__proto__=
C.Axf;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOB={Amo:null,ArF:function(E){if(this.Amo===
E)return;if(!!this.Ab)this.Ab.ZE(this);if(!!this.Amo)this.AqG(this.Amo,A._GetAutoObject(
C.Asz),null,null,null,null,false);this.Amo=E;if(!!this.Amo)this.AkL(this.Amo,A._GetAutoObject(
C.Asz),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOB;this.H(BF);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amo)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WE={_Init:function(){C.AOB._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N0={Init:function(aArg){var C1=A._NewObject(C.ATK,0);C1.H(this.M);this.AkL(C1,A.
_GetAutoObject(C.AnS),null,A._GetAutoObject(C.AnS),A._GetAutoObject(C.AnS),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N0;this.H(Rl);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Asz={_Init:function(){C.AUG._Init.call(this,0);this.ACv=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATK={AK:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);this.
__proto__=C.ATK;this.H(AH9);this.Dr(0);this.AK.AZ(0x3F);this.AK.H(AH9);this.AK.L(
0xAAFFFFFF);this.J(this.AK,0);},_Done:function(){this.__proto__=A.Core.P;this.AK.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUF={R_:function(){var B;var Ao=(A.acl.Ae8.isPrototypeOf(B=A.acl.Aei.R_.call(this
))?B:null);if(!Ao)throw new Error(As1);Ao.Cq.Cw=255;Ao.Cq.B2=0;return Ao;},R9:function(
){var B;var Ao=(A.acl.Axd.isPrototypeOf(B=A.acl.Aei.R9.call(this))?B:null);if(!Ao
)throw new Error(As1);Ao.E0.Cw=0;Ao.E0.B2=255;Ao.Du=true;return Ao;},_Init:function(
aArg){A.acl.Aei._Init.call(this,aArg);this.__proto__=C.AUF;},_className:"Application::ShadeOverlayTransition"
};C.AnS={_Init:function(){C.AUF._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkT={AnV:0,A1Q:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Io.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BCd=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).Ak9(BCd)+CQ)+A._GetAutoObject(A.acj.DV).AfZ()
);else this.BT.R(A.aaR(A.acf.Akm));}},J_:function(G){var B;var Bgs=(this.A1Q===false
)&&(this.AM<=this.Gm);if(Bgs)this.By(this.AnV);this.A4d(this.AM,4);if(Bgs){this.
By(this.AM-this.Aj4);this.A1Q=true;}C.Io.J_.call(this,G);},J5:function(G){this.A4d(
this.AM,5);C.Io.J5.call(this,G);},By:function(E){this.A4d(E,4);E=(((E+((this.Aj4
/2)|0))/this.Aj4)|0)*this.Aj4;if(!E)this.A1Q=false;C.Io.By.call(this,E);},Ahl:function(
E){if(this.AnV===E)return;this.AnV=E;},A4d:function(Bwt,Gw){this.AS6(A._GetAutoObject(
A.acj.DV).Bc2(Bwt,Gw));},_Init:function(aArg){C.Io._Init.call(this,aArg);this.__proto__=
C.AkT;this.H(JZ);this.AnV=this.Gm;this.JU(this.H2,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BDC={None:0,Left:1,BEd:2,Right:3};C.Ams={Ac5:
null,Fy:null,Ej:null,Background:null,Ane:null,Ga:null,KL:A.jV,AD3:null,Init:function(
aArg){var B;A.zV([this,this.Af7],A._GetAutoObject(A.Device.Device).Am,0);A.zX([this
,this.A3p],[B=A._GetAutoObject(A.Device.Device).Am,B.Fk,B.Fo],0);A.pe([this,this.
LN],this);A.pe([this,this.A3p],this);this.Bb(this.Ej);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},KQ:function(){if(!this.Bx)this.Bx=A._NewObject(
C.N,0);return this.Bx;},E3:function(G){C.OverlayMenu.E3.call(this,G);A._GetAutoObject(
A.Device.Device).Am.Bl(this.Ac5);},CF:function(G){C.OverlayMenu.CF.call(this,G);
this.AKP();},AlZ:function(G){var Aa=(C.AB2.isPrototypeOf(G)?G:null);var Hn;if(!!
Aa)Hn=Aa.Hn;else Hn=this.Ga.FH();if(Hn>=A._GetAutoObject(A.Device.Device).Am.Ca(
))return;A._GetAutoObject(A.Device.Helper).HL(Hn);A.pe([this,this.XB],this);},AKP:
function(){},Af7:function(G){this.An();},A3g:function(G){if(this.Ga.FH()<(A._GetAutoObject(
A.Device.Device).Am.Ca()-1))this.Ga.GO(this.Ga.FH()+1);},A3h:function(G){if(this.
Ga.FH()>0)this.Ga.GO(this.Ga.FH()-1);},DJ:function(G){var Ge=A._GetAutoObject(A.
Device.Device).Am.Ca();var MQ=this.Bx;if(!MQ)return;MQ.CY(A.aaL(A.ach.Aev));MQ.CC=[
this,this.XB];if(Ge<=0){MQ.Cs(null);MQ.C6(null);MQ.Cl=null;MQ.Cm=null;MQ.ZC=false;
MQ.ZD=false;}else if(Ge===1){MQ.Cs(null);MQ.C6(A.aaL(A.ach.Aew));MQ.Cl=null;MQ.Cm=[
this,this.AlZ];MQ.ZC=false;MQ.ZD=false;}else{MQ.Cs(A.aaL(A.ach.Aq7));MQ.C6(A.aaL(
A.ach.Arc));MQ.Cl=[this,this.A3g];MQ.Cm=[this,this.A3h];MQ.ZC=true;MQ.ZD=true;}}
,LN:function(G){this.BfP(this);this.Ac5=A._GetAutoObject(A.Device.Device).Am.Filter;
this.AKP();},BmC:function(E){if(this.AD3===E)return;this.AD3=E;A.pe([this,this.BAa
],this);},BAa:function(G){this.BfP(this);},BfP:function(G){var B;if(!!this.Fy)this.
HN(this.Fy);this.Fy=(C.EB.isPrototypeOf(B=A._NewObject(this.AD3,0))?B:null);if(!
!this.Fy){this.Fy.H(AX0);this.J(this.Fy,0);}},A3p:function(G){if(!!A._GetAutoObject(
A.Device.Device).Am.Filter&&!!A._GetAutoObject(A.Device.Device).Am.Filter.DL(1,4
))this.Ga.Dz(A.aaR(A.acf.AR3));else this.Ga.Dz(this.KL);},Dz:function(E){if(this.
KL===E)return;this.KL=E;A.pe([this,this.A3p],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.
Background={I:this},0);A.acg.AK._Init.call(this.Ane={I:this},0);C.Ga._Init.call(
this.Ga={I:this},0);this.__proto__=C.Ams;this.H(Rl);this.Ej.H(BF);this.Ej.A9G(A.
jb.CS);this.Ej.A9H(A.jb.Text);this.Background.H(Fb);this.Background.L(A.jb.Bob);
this.Ane.H(AH_);this.Ane.L(A.jb.CS);this.Ga.H(AH_);this.Ga.NZ(C.AB2);this.AD3=C.
APG;this.KL=A.aaR(A.acf.AvZ);this.J(this.Ej,0);this.J(this.Background,0);this.J(
this.Ane,0);this.J(this.Ga,0);this.Ej.AR=[this,this.AlZ];this.Ej.Ab3(A._NewObject(
C.Yu,0));this.Ga.Zs(A._GetAutoObject(A.Device.Device).Am);this.Ga.Zu([this,this.
AlZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ej._Done(
);this.Background._Done();this.Ane._Done();this.Ga._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ej._ReInit();this.
Background._ReInit();this.Ane._ReInit();this.Ga._ReInit();this.Dz(A.aaR(A.acf.AvZ
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ac5)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Ane)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ga
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};
C.AB2={AP:null,DS:null,Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(A.abN(
this.V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.DS.De(this.V.AQ);},Init:function(aArg){},Cf:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){this.T(this.AX.CE(Ad,1).toFixed());this.DS.EC(
this.AX.AmR(Ad,14));this.DS.AEZ(this.AX.I2(Ad,13));this.DS.AeY(this.AX.H1(Ad,8));
this.DS.Ul(this.AX.H1(Ad,11));this.DS.Ae2(this.AX.H1(Ad,12));this.DS.Ae4(this.AX.
CE(Ad,5));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK.
_Init.call(this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=
C.AB2;this.H(O2);this.AP.L(A.jb.Bc);this.DS.H(AX1);this.J(this.AP,0);this.J(this.
DS,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.
DS._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.
AP._ReInit();this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::CalfListSmallItem"};C.Yu={Q:null,Init:function(
aArg){var B;this.AAU(this);this.As([B=A._GetAutoObject(A.Device.Device).Am,B.Fk,
B.Fo]);},AEF:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&
!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E8();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
Nh(FilterCriterion);var Ai3=this.Akp();if(Ai3>0){FilterCriterion=A._NewObject(A.
Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,Ai3,false);Filter.
CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeU(false
);},BvT:function(s){this.AEF(s);},AAU:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E8(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Nh(FilterCriterion);(F=this.Q,F[2].call(F[0]
,Filter));}},BF3:function(s){this.AAU(s);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.AcS],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcS],
E,0);if(!!E)A.pe([this,this.AcS],this);},C2:function(G){var B;var F;if(!(F=this.
Q,F[1].call(F[0]))){this.AW.AwF(-1);return;}var AyX=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(1,4))?B:null);if(!AyX){this.AW.AwF(
0);this.AW.AeU(true);}else this.AW.AwF(AyX.A4);},AcS:function(s){this.C2(s);},_Init:
function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.Yu;this.AW.AwF(0);this.
AW.Di=[this,this.BvT];this.Init(aArg);},_Mark:function(D){var B;C.AjS._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqJ={BirthType:null,EaseOfDelivery:null,Cb:null,Ef:null,AbI:null,G2:null,Co:
null,AbG:null,AMW:false,Init:function(aArg){this.AMW=A._GetAutoObject(A.Device.Helper
).W.Arf();if(this.AMW)this.AeT(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeT(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cb.
LX([this,this.AcQ]);this.Cb.L0(A.aaL(A.ach.Ae$));this.Cb.AR=[this,this.AcQ];}this.
Ef.Ar2(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GE],this.Ef.
Q,0);A.zX([this,this.GE],this.Cb.Q,0);A.pe([this,this.GE],this);},Aga:function(G
){if(((this.Ef.Asj===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQ7(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ch(
A._GetAutoObject(A.Device.Device).Am);if(this.KH>0){if(this.AMW){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LS(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.Er(Ad,A._GetAutoObject(A.Device.
Device).Bt);B1.OnSetBodyWeight(this.KH);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Ch(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AX2,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gn();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KH);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ch(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A$).Fv();},Ew:function(
G){A._GetAutoObject(A.Device.Helper).W.Er(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).Am);A._GetAutoObject(C.A$).Fv();},Auf:function(
){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.AmZ));this.N.Cm=[this,this.AyL];},AAp:function(
G){A._GetAutoObject(C.A$).Cg(32);},GE:function(G){var F;var J$=(F=this.Ef.Q,F[1].
call(F[0]));var ABg=(F=this.Cb.Q,F[1].call(F[0]));var A3_=true;if(!!J$&&(ABg===J$
))A3_=false;A._GetAutoObject(A.Device.Helper).JV(this.Cb,A3_);this.Ef.BlC(!A3_);
},_Init:function(aArg){C.HY._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvV._Init.
call(this.Cb={I:this},0);C.Q9._Init.call(this.Ef={I:this},0);C.Acn._Init.call(this.
AbI={I:this},0);C.BW._Init.call(this.G2={I:this},0);C.SM._Init.call(this.Co={I:this
},0);C.BW._Init.call(this.AbG={I:this},0);this.__proto__=C.AqJ;var B;this.Cb.H(AhV
);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArM(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Asu));this.Cb.ArN(A.aaR(A.acf.Akm));this.Ef.H(AhV);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Ud));this.AbI.H(AX3);this.AbI.Aj(true);this.
AbI.T(A.aaR(A.acf.GJ));this.G2.H(AhV);this.G2.Aj(true);this.G2.T(A.aaR(A.acf.Arq
));this.Co.H(AhV);this.Co.Aj(true);this.Co.T(A.aaR(A.acf.Aeb));this.Co.AFy(true);
this.AbG.H(AhV);this.AbG.Aj(true);this.AbG.T(A.aaR(A.acf.AgC));this.J(this.Cb,-1
);this.J(this.Ef,-1);this.J(this.AbI,-1);this.J(this.G2,-1);this.J(this.Co,-1);this.
J(this.AbG,-1);this.BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LY(A._GetAutoObject(A.Device.Helper).W);this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.ArA,B.PP]);this.Ef.Go([this,this.D_,this.GN]);this.Ef.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anq,B.Nc]);this.AbI.Go([this,this.D_,this.GN]);this.AbI.As([
B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SC]);this.G2.As([B=this.BirthType,
B.B8,B.B9]);this.G2.CI(this.BirthType);this.Co.Go([this,this.D_,this.GN]);this.Co.
LX([B=this.Co,B.FQ]);this.Co.L0(A.aaL(A.ach.Edit));this.Co.Ab7([B=A._GetAutoObject(
A.Device.Helper).W,B.Av7,B.Q1]);this.AbG.As([B=this.EaseOfDelivery,B.B8,B.B9]);this.
AbG.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HY;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cb._Done();this.Ef._Done(
);this.AbI._Done();this.G2._Done();this.Co._Done();this.AbG._Done();C.HY._Done.call(
this);},_ReInit:function(){C.HY._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cb._ReInit();this.Ef._ReInit();this.AbI._ReInit();
this.G2._ReInit();this.Co._ReInit();this.AbG._ReInit();this.Cb.T(A.aaR(A.acf.Ak4
));this.Cb.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asu));this.
Cb.ArN(A.aaR(A.acf.Akm));this.Ef.T(A.aaR(A.acf.Ud));this.AbI.T(A.aaR(A.acf.GJ));
this.G2.T(A.aaR(A.acf.Arq));this.Co.T(A.aaR(A.acf.Aeb));this.AbG.T(A.aaR(A.acf.AgC
));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbG
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acn={FF:null,AW:null,A8:0,IW:function(G){C.Dt.IW.call(this,G);if(!this.A8)this.
FQ(this);else this.G_(this);},Ai:function(Ae){C.Dt.Ai.call(this,Ae);this.Ht.Z(false
);this.H2.Z(false);if(this.A8===1){this.Bb(this.AW);if(this.Hf){this.AW.FI(A.jb.
CK);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FI(A.jb.CS);this.
Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hf)this.AW.FI(A.jb.CK);
else this.AW.FI(A.jb.CS);this.Bb(null);}},By:function(E){var F;var BQ=this.AM;C.
Dt.By.call(this,E);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Ue,this.BaK],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.
G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.
N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}break;default:this.FF.AkP((F=
this.N,F[1].call(F[0])));}},FQ:function(G){this.Ex(1);},G_:function(G){this.Ex(0
);},Ex:function(EO){var F;if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(F[0])));this.
A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>1)this.A8=1;if(this.A8===1)this.AW.
SK(7);this.DJ(this);this.An();},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.AQ1._Init.call(this.AW={I:this},0);this.__proto__=C.Acn;this.H(UU);this.EV(999999
);this.V.R(As8);this.V.L(A.jb.Bm);this.Ht.Z(false);this.H2.Z(false);this.AW.H(AX4
);this.AW.ATc(6);this.J(this.AW,0);this.AW.As([this,this.Ue,this.BaK]);this.FF=A.
_NewObject(C.Aep,0);},_Done:function(){this.__proto__=C.Dt;this.AW._Done();C.Dt.
_Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.FF)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dn:function(){return 4;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},FY:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuD={Y:null,QM:null,NV:null,Ee:null,PC:null,Pz:null,PA:null,Ay:null,Gb:null,
ReasonOfLeaving:null,Aht:null,M1:0,AmG:false,AB6:true,AOu:false,Asf:false,Init:function(
aArg){A.zX([this,this.A9b],[this,this.A8E,this.ATf],0);this.Ahi(A._GetAutoObject(
A.Device.Helper).W.AhO(2));this.ReasonOfLeaving.As(this.ReasonOfLeaving.DU(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9b],this);},DE:function(G){
var B;var Fe=0;var X=this.AV;switch(this.Cr.CO){case 6:Fe=2;break;case 7:Fe=7;break;
case 4:Fe=4;break;case 5:Fe=5;break;default:;}X=this.QE(X,Fe,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HD(X,true,null,null);},AlY:function(G
){A._GetAutoObject(C.A$).Fv();},ApM:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.
Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gn();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M1);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Ch(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmG){A._GetAutoObject(A.Device.Helper).W.Ae0(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A6F(A._GetAutoObject(A.Device.Helper).Dv(),this.Asf);}A._GetAutoObject(A.Device.
Helper).W.AFx(this.ReasonOfLeaving.C4((F=this.NV.Q,F[1].call(F[0]))));if(this.AB6
)A._GetAutoObject(A.Device.Helper).W.PP(0);if(this.Asf)A._GetAutoObject(A.Device.
Helper).W.AwH(true);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).Am);this.A_4();},Fg:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},Ahi:function(E){
if(this.M1===E)return;this.M1=E;},Ann:function(){return this.M1;},BeR:function(G
){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;if((At.PopupState===
4)||(At.PopupState===3)){A._GetAutoObject(C.A$).Fv();A._GetAutoObject(A.Device.Helper
).Asp();}},A9b:function(G){switch(this.Asf){case false:this.Ee.T(A.aaR(A.acf.AVE
));break;case true:this.Ee.T(A.aaR(A.acf.Bqe));break;default:;}},ATf:function(E){
if(this.Asf===E)return;this.Asf=E;},A8E:function(){return this.Asf;},A_4:function(
){A._GetAutoObject(A.Device.Device).A9(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeR]);},Bl2:function(E){if(this.AOu===E)return;
this.AOu=E;},Bkn:function(){return this.AOu;},Blp:function(E){if(this.AB6===E)return;
this.AB6=E;},Bkb:function(){return this.AB6;},BlA:function(E){if(this.AmG===E)return;
this.AmG=E;},Bkj:function(){return this.AmG;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afi._Init.call(this.QM={I:this
},0);C.Asy._Init.call(this.NV={I:this},0);C.AkT._Init.call(this.Ee={I:this},0);C.
Afi._Init.call(this.PC={I:this},0);C.Afi._Init.call(this.Pz={I:this},0);C.Afi._Init.
call(this.PA={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gb._Init.call(this.
Gb={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Aht._Init.call(this.Aht={I:this},0);this.__proto__=C.AuD;var B;this.N.Z(true);this.
N.CV(A.aaR(A.acf.Unregister));this.Dq(C.IG);this.Y.H(Fb);this.Y.JO(1);this.QM.H(
Aaf);this.QM.Aj(true);this.QM.T(A.aaR(A.acf.AmG));this.QM.Bh(true);this.QM.Zx(false
);this.QM.F_(-1);this.QM.EV(1);this.NV.H(UW);this.NV.Aj(true);this.NV.T(A.aaR(A.
acf.ReasonOfLeaving));this.NV.Bh(true);this.NV.Zx(false);this.Ee.H(AhU);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVE));this.Ee.Bh(false);this.Ee.F_(1000);this.Ee.
EV(999000);this.PC.H(UW);this.PC.Aj(true);this.PC.T(A.aaR(A.acf.A4L));this.PC.Bh(
true);this.PC.Zx(false);this.PC.By(1);this.PC.F_(-1);this.PC.EV(1);this.Pz.H(Aaf
);this.Pz.Aj(true);this.Pz.T(A.aaR(A.acf.A4M));this.Pz.Bh(true);this.Pz.Zx(false
);this.Pz.By(1);this.Pz.F_(-1);this.Pz.EV(1);this.PA.H(UW);this.PA.Aj(true);this.
PA.T(A.aaR(A.acf.A5m));this.PA.Bh(true);this.PA.Zx(false);this.PA.By(1);this.PA.
F_(-1);this.PA.EV(1);this.Ay.H(Ayc);this.Gb.As(0);this.J(this.Y,0);this.J(this.QM
,0);this.J(this.NV,0);this.J(this.Ee,0);this.J(this.PC,0);this.J(this.Pz,0);this.
J(this.PA,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fg
];this.QM.As([B=this.Gb,B.B8,B.B9]);this.QM.CI(this.Gb);this.QM.AkC([this,this.Bkj
,this.BlA]);this.NV.Go([this,this.D_,this.GN]);this.NV.LX([B=this.NV,B.FQ]);this.
NV.L0(A.aaL(A.ach.Edit));this.NV.As([B=this.ReasonOfLeaving,B.B8,B.B9]);this.NV.
CI(this.ReasonOfLeaving);this.NV.Anv(this.Aht);this.Ee.As([this,this.Ann,this.Ahi
]);this.PC.As([B=this.Gb,B.B8,B.B9]);this.PC.CI(this.Gb);this.PC.AkC([this,this.
Bkn,this.Bl2]);this.Pz.As([B=this.Gb,B.B8,B.B9]);this.Pz.CI(this.Gb);this.Pz.AkC([
this,this.A8E,this.ATf]);this.PA.As([B=this.Gb,B.B8,B.B9]);this.PA.CI(this.Gb);this.
PA.AkC([this,this.Bkb,this.Blp]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QM._Done();this.NV._Done();this.Ee._Done();this.PC._Done(
);this.Pz._Done();this.PA._Done();this.Ay._Done();this.Gb._Done();this.ReasonOfLeaving.
_Done();this.Aht._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QM._ReInit();this.NV._ReInit();this.Ee._ReInit(
);this.PC._ReInit();this.Pz._ReInit();this.PA._ReInit();this.Ay._ReInit();this.Gb.
_ReInit();this.ReasonOfLeaving._ReInit();this.Aht._ReInit();this.N.CV(A.aaR(A.acf.
Unregister));this.QM.T(A.aaR(A.acf.AmG));this.NV.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVE));this.PC.T(A.aaR(A.acf.A4L));this.Pz.T(A.aaR(A.acf.A4M
));this.PA.T(A.aaR(A.acf.A5m));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aht)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUE={AjL:null,Ps:null,Au3:AX5,Bk:function(aSize){C.Io.Bk.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Ht.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H2.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.Io.Ai.call(this,Ae);this.Ps.L(this.V.AQ);if(!!this.AjL){if((
F=this.AjL,F[1].call(F[0]))===-1)this.Ps.R(this.Au3+AH$);else this.Ps.R((this.Au3+
CQ)+(F=this.AjL,F[1].call(F[0])).toFixed());}else this.Ps.R(this.Au3);},A20:function(
G){this.An();},BlK:function(E){if(A.aaZ(this.AjL,E))return;if(!!this.AjL)A.z$([this
,this.A20],this.AjL,0);this.AjL=E;if(!!E)A.zX([this,this.A20],E,0);if(!!E)A.pe([
this,this.A20],this);},A9D:function(E){if(this.Au3===E)return;this.Au3=E;this.An(
);},_Init:function(aArg){C.Io._Init.call(this,aArg);C.CH._Init.call(this.Ps={I:this
},0);this.__proto__=C.AUE;this.H(AX6);this.V.H(AX7);this.V.A6(0x12);this.Ps.H(AX8
);this.Ps.A6(0x12);this.Ps.L(A.jb.Bm);this.J(this.Ps,0);this.Ps.S(A.aaL(A.fl.Af)
);this.Ps.A2(A.aaL(A.fl.Ak));this.Ps.Cu(null);},_Done:function(){this.__proto__=
C.Io;this.Ps._Done();C.Io._Done.call(this);},_ReInit:function(){C.Io._ReInit.call(
this);this.Ps._ReInit();this.Ps.S(A.aaL(A.fl.Af));this.Ps.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Io._Mark.call(this,D);if((B=this.AjL)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMd={Y:null,JK:null,Sp:null,Ay:null,Aqx:2500,ANt:24,DE:function(G){var B;var
Fe=0;var X=this.AV;switch(this.Cr.CO){case 6:Fe=2;break;case 7:Fe=7;break;case 4:
Fe=4;break;case 5:Fe=5;break;default:;}X=this.QE(X,Fe,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HD(X,true,null,null);},AlY:function(G){A._GetAutoObject(
C.A$).Fv();},ApM:function(G){},Fg:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1)
)[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},Blt:function(
E){if(this.Aqx===E)return;this.Aqx=E;},Bkd:function(){return this.Aqx;},Blu:function(
E){if(this.ANt===E)return;this.ANt=E;},Bke:function(){return this.ANt;},Bj4:function(
G){var F,CA;this.JK.BT.L(this.JK.V.AQ);if(!!this.JK.Q)this.JK.BT.R((((String.fromCharCode(((
F=this.JK.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Afx)+String.fromCharCode(((
CA=this.JK.Q,CA[1].call(CA[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JK.
AG3);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Io._Init.call(this.JK={I:this},0);C.Io._Init.call(this.Sp={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMd;this.N.Z(true);this.
Dq(C.IG);this.Y.H(Fb);this.Y.JO(1);this.JK.H(AhU);this.JK.Aj(true);this.JK.T(A.aaR(
A.acf.Aqx));this.JK.Bh(false);this.JK.F_(0);this.JK.EV(5000);this.JK.IM(A.aaR(A.
acf.Af3));this.JK.I9(A.aaR(A.acf.Af3));this.JK.AS6(100);this.Sp.H(UW);this.Sp.Aj(
true);this.Sp.T(A.aaR(A.acf.A_D));this.Sp.Bh(true);this.Sp.By(24);this.Sp.F_(10);
this.Sp.EV(33);this.Sp.IM(AX9);this.Ay.H(Ayc);this.J(this.Y,0);this.J(this.JK,0);
this.J(this.Sp,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.V0));this.Y.El=[this,this.
Fg];this.JK.As([this,this.Bkd,this.Blt]);this.JK.A_a([this,this.Bj4]);this.Sp.As([
this,this.Bke,this.Blu]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JK._Done();this.Sp._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JK._ReInit();this.Sp._ReInit();this.
Ay._ReInit();this.JK.T(A.aaR(A.acf.Aqx));this.JK.IM(A.aaR(A.acf.Af3));this.JK.I9(
A.aaR(A.acf.Af3));this.Sp.T(A.aaR(A.acf.A_D));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Ars={EaseOfDelivery:null,BirthType:null,Cb:null,Do:null,Dh:null,Co:null,Ee:null
,G2:null,Lg:null,M1:0,LU:false,Init:function(aArg){A.zX([this,this.GE],this.Cb.Q
,0);A.zX([this,this.GE],this.Do.Q,0);A.zX([this,this.AAu],this.C$.Q,0);A.zX([this
,this.Ben],this.Co.Dj,0);A.zX([this,this.Beh],this.C9.Q,0);A.zX([this,this.At0],
this.Cb.Q,0);A.zX([this,this.At0],this.Do.Q,0);A.pe([this,this.AAu],this);A.pe([
this,this.GE],this);A.pe([this,this.Ben],this);A.pe([this,this.Beh],this);A.pe([
this,this.At0],this);},Ew:function(G){A._GetAutoObject(A.Device.Helper).W.Hi();A.
_GetAutoObject(C.A$).Fv();},Aga:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EC((F=this.BZ.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).Ahz
){var AlJ=A._GetAutoObject(A.Device.Helper).Ahz.AOS();A._GetAutoObject(A.Device.
Helper).W.Ab4(AlJ);A._GetAutoObject(A.Device.Helper).W.AnA(AlJ);}var Alp=A._GetAutoObject(
A.Device.Helper).A1j(A._GetAutoObject(A.Device.Helper).W,(F=this.Dh.HZ.Hp,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).Am);if(!Alp){this.AiZ();A.pe([this,this.
Bwf],this);}else A._GetAutoObject(A.Device.Helper).AKi(A._GetAutoObject(A.Device.
Helper).W,Alp,(F=this.Dh.HZ.Hp,F[1].call(F[0])),0,[this,this.ApH]);},Auf:function(
){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.ADI));this.N.Cm=[this,this.AyL];},AiZ:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).Am);var L6=A._GetAutoObject(A.Device.Device).Am.LS(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SL(L6);var Bdg=false;if(A._GetAutoObject(
A.Device.Helper).Am2()){if(A._GetAutoObject(A.Device.Device).Bt.Lf()){Bdg=true;A.
_GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.
HG().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gn();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KH);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ch(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A65()&&(Bdg===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gn();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M1);B1.Ch(A._GetAutoObject(A.Device.Device).Bt);}}var IT=null;switch((F=this.
Dh.HZ.Hp,F[1].call(F[0]))){case 3:IT=[B=A._GetAutoObject(A.Device.Device),B.Av_,
B.AyC];break;case 2:IT=[B=A._GetAutoObject(A.Device.Device),B.Av$,B.AyD];break;case
4:case 5:IT=[B=A._GetAutoObject(A.Device.Device),B.Anp,B.AoD];break;default:;}if(
!!IT)switch((F=this.Dh.Kj.VO,F[1].call(F[0]))){case 1:IT[2].call(IT[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).A$u(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Do.Q,F[1].call(F[0])),this.Do.AjN(),this.Do.AjP());},Ap6:function(G){A.
_GetAutoObject(C.A$).Fv();},Bwf:function(s){this.Ap6(s);},AAp:function(G){A._GetAutoObject(
C.A$).Cg(49);},Ahi:function(E){if(this.M1===E)return;this.M1=E;A.abo([this,this.
Ann,this.Ahi],0);},GE:function(G){if(A._GetAutoObject(A.Device.Helper).Am2())this.
C9.Z(true);else this.C9.Z(false);if(A._GetAutoObject(A.Device.Helper).A65())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LU){this.Do.Z(false);this.Cb.T(A.aaR(A.
acf.ACx));this.Cb.AEX(A.aaL(A.ach.Ae$));}else{this.Do.Z(true);this.Cb.T(A.aaR(A.
acf.Ak4));this.Cb.AEX(null);}},AAu:function(G){A._GetAutoObject(A.Device.Helper).
AVn(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LU);},Ben:function(G){A.pe([this,this.Bgg],this);},Beh:function(G){A.pe([this
,this.Bgg],this);},Bgg:function(G){var F,CA,S8;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahl(A._GetAutoObject(A.Device.Helper
).AhO(A._GetAutoObject(A.Device.Helper).Abp((F=this.BZ.Q,F[1].call(F[0]))),(CA=this.
Co.Dj,CA[1].call(CA[0])),2,(S8=this.BZ.Q,S8[1].call(S8[0]))));break;case 2:this.
Ee.Ahl(A._GetAutoObject(A.Device.Helper).AhO(this.KH,(F=this.Co.Dj,F[1].call(F[0
])),2,(CA=this.BZ.Q,CA[1].call(CA[0]))));break;default:;}},ApH:function(G){var F;
var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id
){case 22:case 21:switch((F=this.Dh.HZ.Hp,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JD(this.Dh);break;case 0:this.JD(this.Do);break;case 1:this.JD(this.
Cb);break;default:throw new Error(Ayk+(F=this.Dh.HZ.Hp,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JD(this.Dh);this.JD(this.Do);}break;case 25:case 42:{this.
JD(this.Dh);this.JD(this.Cb);}break;case 41:break;default:A.ab5("%s%e",As6,At.Id
);}},ApI:function(G){var F;C.HY.ApI.call(this,G);var AoX=0;switch((F=this.BZ.Q,F[
1].call(F[0]))){case 0:case 2:AoX=A._GetAutoObject(A.Device.Device).AdO;break;case
1:AoX=730;break;default:A.ab5("%s%e",Alc,(F=this.BZ.Q,F[1].call(F[0])));}(F=this.
Co.Dj,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmE(AoX)));(F=this.C9.Q,F[2].call(F[0],this.C9.AnV));this.Ee.Ahl(A._GetAutoObject(
A.Device.Helper).W.AhO(1));},AeZ:function(E){if(this.LU===E)return;this.LU=E;A.abo([
this,this.Awb,this.AeZ],0);},At0:function(G){var F,CA,S8;this.AeZ(((F=this.Cb.Q,
F[1].call(F[0]))===(CA=this.Do.Q,CA[1].call(CA[0])))&&!!(S8=this.Cb.Q,S8[1].call(
S8[0])));A.pe([this,this.GE],this);},Ann:function(){return this.M1;},Awb:function(
){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AvV._Init.call(this.Cb={I:this},0);C.Q9._Init.call(this.Do={I:this}
,0);C.AGB._Init.call(this.Dh={I:this},0);C.SM._Init.call(this.Co={I:this},0);C.AkT.
_Init.call(this.Ee={I:this},0);C.BW._Init.call(this.G2={I:this},0);C.BW._Init.call(
this.Lg={I:this},0);this.__proto__=C.Ars;var B;this.Dq(C.AC_);this.CG.H(AcP);this.
Cb.H(Aor);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArM(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asu));this.Cb.ArN(A.aaR(A.acf.Akm));this.
Do.H(Aor);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Ud));this.Do.Ar2(false);this.Dh.
H(AX_);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.GJ));this.Dh.By(0);this.Co.H(AcP);
this.Co.Aj(true);this.Co.T(A.aaR(A.acf.Aeb));this.Co.AFy(true);this.Ee.H(AcP);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M1));this.Ee.F_(1000);this.Ee.EV(999000);this.
G2.H(AcP);this.G2.Aj(true);this.G2.T(A.aaR(A.acf.Arq));this.Lg.H(AcP);this.Lg.Aj(
true);this.Lg.T(A.aaR(A.acf.AgC));this.J(this.Cb,-3);this.J(this.Do,-3);this.J(this.
Dh,-3);this.J(this.Co,-3);this.J(this.Ee,-2);this.J(this.G2,-1);this.J(this.Lg,-
1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LY(
A._GetAutoObject(A.Device.Helper).W);this.Cb.AR=[this,this.AcQ];this.Cb.LX([this
,this.AcQ]);this.Cb.L0(A.aaL(A.ach.Ae$));this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.ArA,B.PP]);this.Cb.OL([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ
]);this.Cb.PN([B=A._GetAutoObject(A.Device.Device),B.Ug,B.U0]);this.Cb.Uh([B=A._GetAutoObject(
A.Device.Device),B.Anm,B.AoC]);this.Cb.AeZ([this,this.Awb,this.AeZ]);this.Do.Go([
this,this.D_,this.GN]);this.Do.LX([this,this.AcQ]);this.Do.L0(A.aaL(A.ach.Ae$));
this.Do.Uj([B=this.Gender.Animal,B.Wu,B.JP]);this.Do.OL([B=A._GetAutoObject(A.Device.
Device),B.Uf,B.UZ]);this.Do.PN([B=A._GetAutoObject(A.Device.Device),B.Ug,B.U0]);
this.Do.Uh([B=A._GetAutoObject(A.Device.Device),B.Anm,B.AoC]);this.Do.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anq,B.Nc]);this.Do.Ant([B=this.AnimalType.Animal,B.PM,B.EC]
);this.Dh.Go([this,this.D_,this.GN]);this.Dh.LX([B=this.Dh,B.FQ]);this.Dh.L0(A.aaL(
A.ach.Edit));this.Dh.As([B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SC]);this.
Dh.A9e(A._GetAutoObject(A.Device.Helper).W);this.Co.Go([this,this.D_,this.GN]);this.
Co.LX([B=this.Co,B.FQ]);this.Co.L0(A.aaL(A.ach.Edit));this.Co.Ab7([B=A._GetAutoObject(
A.Device.Helper).W,B.Av7,B.Q1]);this.Ee.As([this,this.Ann,this.Ahi]);this.G2.As([
B=this.BirthType,B.B8,B.B9]);this.G2.CI(this.BirthType);this.Lg.As([B=this.EaseOfDelivery
,B.B8,B.B9]);this.Lg.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cb._Done(
);this.Do._Done();this.Dh._Done();this.Co._Done();this.Ee._Done();this.G2._Done(
);this.Lg._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cb._ReInit();this.
Do._ReInit();this.Dh._ReInit();this.Co._ReInit();this.Ee._ReInit();this.G2._ReInit(
);this.Lg._ReInit();this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArM(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asu));this.Cb.ArN(A.aaR(A.acf.Akm));this.Do.T(
A.aaR(A.acf.Ud));this.Dh.T(A.aaR(A.acf.GJ));this.Co.T(A.aaR(A.acf.Aeb));this.Ee.
T(A.aaR(A.acf.M1));this.G2.T(A.aaR(A.acf.Arq));this.Lg.T(A.aaR(A.acf.AgC));},_Mark:
function(D){var B;C.HY._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AG$={H5:null,AhE:null,AgM:null,AhF:null,AgN:null,AnimalType:null,Background:
null,NX:null,Rh:null,V:null,TP:null,YB:null,AbD:null,PL:null,DK:A.jV,AGD:true,CP:
function(){this.An();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An6();this.
AxN();},An6:function(){var F,CA;var LC=0;var Amc=0;var AlC=0;var H$=0;if((((!!this.
AhE&&!!this.AhF)&&!!this.AgM)&&!!this.AgN)&&!!this.AnimalType){Amc=(F=this.AhE,F[
1].call(F[0]));AlC=(F=this.AgM,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper
).MM((F=this.AhF,F[1].call(F[0])),(CA=this.AgN,CA[1].call(CA[0])));H$=(F=this.AnimalType
,F[1].call(F[0]));}var K6=A.jb.Text;var Ay5=A.jb.CS;if(!!LC){var ALx=A._GetAutoObject(
A.acj.DV).Alw(LC,Amc,AlC);Ay5=A._GetAutoObject(A.acj.DV).AzK(ALx,H$);K6=A._GetAutoObject(
A.acj.DV).AzM(ALx,H$);}this.Background.L(Ay5);this.TP.L(K6);this.Rh.L(K6);this.NX.
L(K6);this.AbD.L(K6);if(K6===A.jb.Bm)this.YB.L(K6);else this.YB.L(A.jb.CK);this.
V.L(K6);this.PL.L(K6);},AxN:function(){var F,CA;var LC=0;var Amc=0;var AlC=0;if(((
!!this.AhE&&!!this.AhF)&&!!this.AgM)&&!!this.AgN){Amc=(F=this.AhE,F[1].call(F[0]
));AlC=(F=this.AgM,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper).MM((F=this.
AhF,F[1].call(F[0])),(CA=this.AgN,CA[1].call(CA[0])));}if(!!LC){var ALx=A._GetAutoObject(
A.acj.DV).Alw(LC,Amc,AlC);this.Rh.R(A._GetAutoObject(A.Device.Converter).S3(ALx,
2,true));this.NX.Z(true);this.Rh.Z(true);this.PL.Z(false);}else{this.NX.Z(false);
this.Rh.Z(false);this.PL.Z(true);}this.TP.R(this.ByT(AlC-Amc,LC));this.AbD.Z(this.
AGD);this.YB.Z(this.AGD);this.NX.R(A._GetAutoObject(A.acj.DV).Aaw());},ByT:function(
A00,Ah2){var B;if(Ah2<0){A.ab5("%s",AX$);return A.jV;}var Is=(AYa+A._GetAutoObject(
A.acj.DV).AfZ())+CQ;var FS=A._GetAutoObject(A.Device.Converter).Ak9(A00);if(!A00
)FS=A.abU(FS,AYb,0);else if(A00>0)FS=A.abU(FS,AIa,0);Is=this.Bfx(Is,AYc,FS);if(Ah2===
1)Is=Is+A.aaR(A.acf.BiX);else{Is=Is+A.aaR(A.acf.BiY);Is=this.Bfx(Is,AYd,Ah2.toFixed(
));}return Is;},Bfx:function(aString,BbN,Bxg){if(aString===A.jV){A.ab5("%s",AYe);
return A.jV;}var A2G=aString.indexOf(BbN,0);if(A2G>=0){aString=A.ab1(aString,A2G
,BbN.length);aString=A.abU(aString,Bxg,A2G);}return aString;},ATu:function(E){if(
A.aaZ(this.AhE,E))return;if(!!this.AhE)A.z$([this,this.C2],this.AhE,0);this.AhE=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},BlH:function(
E){if(A.aaZ(this.AgM,E))return;if(!!this.AgM)A.z$([this,this.C2],this.AgM,0);this.
AgM=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},ATv:function(
E){if(A.aaZ(this.AhF,E))return;if(!!this.AhF)A.z$([this,this.C2],this.AhF,0);this.
AhF=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},BlI:function(
E){if(A.aaZ(this.AgN,E))return;if(!!this.AgN)A.z$([this,this.C2],this.AgN,0);this.
AgN=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(
G){this.An();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A9$:function(
E){if(this.AGD===E)return;this.AGD=E;this.An();},EC:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C2],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.NX={I:this},0);A.acg.Text._Init.call(this.Rh={I:this},
0);C.CH._Init.call(this.V={I:this},0);C.CH._Init.call(this.TP={I:this},0);A.acg.
Ap._Init.call(this.YB={I:this},0);A.acg.Ap._Init.call(this.AbD={I:this},0);C.CH.
_Init.call(this.PL={I:this},0);this.__proto__=C.AG$;this.H(Afz);this.Background.
AZ(0x3F);this.Background.H(Afz);this.NX.H(AYf);this.NX.R(A._GetAutoObject(A.acj.
DV).Aaw());this.NX.A6(0x9);this.NX.L(A.jb.Text);this.Rh.H(AYg);this.Rh.A6(0x14);
this.Rh.R(A.aaR(A.acu.Akk));this.Rh.L(A.jb.Text);this.V.AZ(0x1D);this.V.H(AYh);this.
V.R(A.aaR(A.acf.Auu));this.V.A6(0x12);this.V.L(A.jb.Text);this.TP.H(Aae);this.YB.
AZ(0x14);this.YB.H(AIb);this.YB.Cv(1);this.AbD.AZ(0x14);this.AbD.H(AIb);this.AbD.
Cv(0);this.PL.H(AYi);this.PL.R(A.aaR(A.acf.A4s));this.J(this.Background,0);this.
J(this.NX,0);this.J(this.Rh,0);this.J(this.V,0);this.J(this.TP,0);this.J(this.YB
,0);this.J(this.AbD,0);this.J(this.PL,0);this.NX.S(A.aaL(A.fl.EL));this.NX.A2(A.
aaL(A.fl.Af));this.NX.Cu(A.aaL(A.fl.Ii));this.Rh.S(A.aaL(A.fl.Aeo));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bi));this.TP.S(A.aaL(A.
fl.Af));this.TP.A2(A.aaL(A.fl.Ak));this.TP.Cu(A.aaL(A.fl.Bi));this.YB.Aw(A.aaL(A.
ach.ABG));this.AbD.Aw(A.aaL(A.ach.ABG));this.H5=A._NewObject(A.Device.Rating,0);
this.PL.S(A.aaL(A.fl.Af));this.PL.A2(A.aaL(A.fl.Ak));this.PL.Cu(A.aaL(A.fl.Bi));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.NX._Done(
);this.Rh._Done();this.V._Done();this.TP._Done();this.YB._Done();this.AbD._Done(
);this.PL._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.NX._ReInit();this.Rh._ReInit();this.V.
_ReInit();this.TP._ReInit();this.YB._ReInit();this.AbD._ReInit();this.PL._ReInit(
);this.Rh.R(A.aaR(A.acu.Akk));this.V.R(A.aaR(A.acf.Auu));this.PL.R(A.aaR(A.acf.A4s
));this.NX.S(A.aaL(A.fl.EL));this.NX.A2(A.aaL(A.fl.Af));this.NX.Cu(A.aaL(A.fl.Ii
));this.Rh.S(A.aaL(A.fl.Aeo));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Cu(A.aaL(A.fl.Bi));this.TP.S(A.aaL(A.fl.Af));this.TP.A2(A.aaL(A.fl.Ak));this.
TP.Cu(A.aaL(A.fl.Bi));this.PL.S(A.aaL(A.fl.Af));this.PL.A2(A.aaL(A.fl.Ak));this.
PL.Cu(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhE)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgN)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVF={Animal:null,Rating:null,Cr:null,AD:null,AY:
0,Hg:function(G){var B;if(!this.Animal||!this.Rating)return;var Gd=this.AD.G1;var
Cz=(C.AG$.isPrototypeOf(B=this.AD.Ci)?B:null);if(!Cz)return;Cz.EC([B=this.Animal
,B.PM,B.EC]);Cz.BlH([B=A._GetAutoObject(A.Device.Device),B.AED,B.AIU]);Cz.BlI([B=
this.Rating,B.A8U,B.OnSetTimestamp]);switch(Gd%this.AY){case 1:{Cz.ATu([B=this.Animal
,B.A8u,B.AFf]);Cz.ATv([B=this.Animal,B.A8V,B.AFJ]);Cz.T(A.aaR(A.acf.Auu));}break;
default:if(this.Animal.Arf()){Cz.ATu([B=this.Animal,B.ASp,B.AwC]);Cz.ATv([B=this.
Animal,B.ASG,B.Aw4]);Cz.T(A.aaR(A.acf.ALV));}else{Cz.ATu([B=this.Animal,B.ASp,B.
AwC]);Cz.ATv([B=this.Animal,B.ASG,B.Aw4]);Cz.T(A.aaR(A.acf.Bgz));}}if(this.AY>1)
Cz.A9$(true);else Cz.A9$(false);Cz.H(A.abK(Cz.M,[(B=this.AD.M)[2]-B[0],this.AD.GK
]));},DE:function(G){if(this.AY>0)switch(this.Cr.CO){case 6:this.CC(this);break;
case 7:this.Cm(this);break;default:this.Cr.NH=true;}},LY:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Ju(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Ju(1);else{this.Ju(2);this.AD.GO(1);this.
AD.HD(this.AD.Gp,true,null,null);}if(this.AY>0)this.AD.AbF(0,this.AY-1);},AkD:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbF(0,this.AY-1);
},CC:function(G){if(this.AD.Gp>0)this.AD.GO(this.AD.Gp-1);else this.AD.GO(this.AY-
1);this.AD.HD(this.AD.Gp,true,null,null);},Cm:function(G){if(this.AD.Gp<(this.AY-
1))this.AD.GO(this.AD.Gp+1);else this.AD.GO(0);this.AD.HD(this.AD.Gp,true,null,null
);},Ju:function(E){if(this.AY===E)return;this.AY=E;this.AD.Ju(this.AY);A.abo([this
,this.Arx,this.Ju],0);},Arx:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVF;this.H(Afz);this.Cr.Filter=147;this.
AD.AZ(0x3F);this.AD.H(Afz);this.AD.NZ(C.AG$);this.AD.Ae3(160);this.AD.GO(0);this.
AD.Ju(2);this.J(this.AD,0);this.Cr.BN=[this,this.DE];this.Cr.D1=[this,this.DE];this.
AD.Hg=[this,this.Hg];},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cr._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bk:function(aSize){C.Cp.Bk.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Cp.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fr=((
Ae&0x20)===0x20);var GA=this.Bo.Bw;var FN=A.jb.CK;var GS=A.jb.Text;if(this.Hf){FN=
A.jb.CS;GS=A.jb.Text;}if(!G$){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else
if(GA){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fr){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GS);}this.LF=G$;
this.KD=Fr;this.Qo=GA;},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(JZ);this.V.H(BF);this.Zx(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeM={KI:null,GG:A.jV,Bk:function(aSize){C.Eg.Bk.call(this,aSize);this.KI.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KI.
L(this.V.AQ);},Init:function(aArg){},Ab3:function(E){if(this.GG===E)return;this.
GG=E;this.KI.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CH._Init.call(
this.KI={I:this},0);this.__proto__=C.AeM;this.H(JZ);this.Background.H(JZ);this.V.
H(Aad);this.V.R(Lu);this.KI.H(IR);this.KI.R(AYj);this.J(this.KI,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.KI.S(A.aaL(A.fl.Af));this.
KI.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KI._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KI._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KI.S(A.aaL(
A.fl.Af));this.KI.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvV={AB_:null,Q:null,A1:null,AF:null,Ig:null,LU:null,Ap:null,EN:null,AN8:A.jV
,AN9:A.jV,Bk:function(aSize){C.AeM.Bk.call(this,aSize);if(!this.AB_)this.KI.H([].
concat(0,this.KI.M.slice(1,4)));else this.KI.H([].concat(this.Ap.M[2],this.KI.M.
slice(1,4)));},Ai:function(Ae){var F,CA,S8;C.AeM.Ai.call(this,Ae);var Bce=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Api)this.Ab3(this.AN8);else
this.Ab3(this.AN9);}else{this.Ab3(A._GetAutoObject(A.Device.Converter).Rf((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ig&&!!this.A1)&&!!this.AF)&&!!this.LU)&&(((F=this.
Ig,F[1].call(F[0]))===1)||(!(CA=this.Ig,CA[1].call(CA[0]))&&(S8=this.LU,S8[1].call(
S8[0])))))Bce=true;}}this.EN.Z(Bce);this.Ap.L(this.V.AQ);A.pe([this,this.Af8],this
);},C2:function(G){this.An();},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},AEX:function(E){if(this.AB_===E)return;this.AB_=E;this.
Ap.Aw(E);this.Bi4();},OL:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1)A.z$([
this,this.AaG],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.AaG],E,0);if(!!E)A.pe([
this,this.AaG],this);},PN:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaH],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaH],E,0);if(!!E)
A.pe([this,this.AaH],this);},AaH:function(G){this.An();},AaG:function(G){this.An(
);},Uh:function(E){if(A.aaZ(this.Ig,E))return;if(!!this.Ig)A.z$([this,this.AlX],
this.Ig,0);this.Ig=E;if(!!E)A.zX([this,this.AlX],E,0);if(!!E)A.pe([this,this.AlX
],this);},AlX:function(G){this.An();},Af8:function(G){var F,CA;if((!this.Ig||!this.
A1)||!this.AF)return;var A2o=this.KI.Afc([(this.KI.String.length-(F=this.AF,F[1].
call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3H=this.KI.Afc([this.KI.String.
length-(F=this.AF,F[1].call(F[0])),0]);var AA$=this.KI.Db(0x0);this.EN.H([A2o[0]-
1,AA$[1],A3H[0]+1,AA$[3]]);},ArM:function(E){if(this.AN8===E)return;this.AN8=E;this.
An();},ArN:function(E){if(this.AN9===E)return;this.AN9=E;this.An();},AeZ:function(
E){if(A.aaZ(this.LU,E))return;if(!!this.LU)A.z$([this,this.A27],this.LU,0);this.
LU=E;if(!!E)A.zX([this,this.A27],E,0);if(!!E)A.pe([this,this.A27],this);},A27:function(
G){this.An();},_Init:function(aArg){C.AeM._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BU._Init.call(this.EN={I:this},0);this.__proto__=C.AvV;
this.Ap.H(AhQ);this.EN.H(AYk);this.EN.Nf(2);this.EN.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EN,0);this.KI.Q2([this,this.Af8]);},_Done:function(){this.__proto__=
C.AeM;this.Ap._Done();this.EN._Done();C.AeM._Done.call(this);},_ReInit:function(
){C.AeM._ReInit.call(this);this.Ap._ReInit();this.EN._ReInit();},_Mark:function(
D){var B;C.AeM._Mark.call(this,D);if((B=this.AB_)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ig)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={If:0,AaF:4,Bdr:true,Bdq:false,Bcl:true,Bdj:false,Al2:function(
G){C.Q8.Al2.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bdi()){this.If=A._GetAutoObject(
A.Device.Helper).Uw.Id;var Aiv=A._GetAutoObject(A.Device.Helper).AQ9(this.If);if(
Aiv)A._GetAutoObject(A.Device.Device).A9(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A2$]);else{this.AaF=A._GetAutoObject(A.Device.
Helper).AQ_(this.If);var BdO=false;if((this.AaF===3)||(this.AaF===2))BdO=A._GetAutoObject(
A.Device.Helper).A66(this.If,A._GetAutoObject(A.Device.Helper).W);if(BdO)A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(this.If),0,null
);else switch(this.AaF){case 2:{var BO=A._GetAutoObject(A.Device.Converter).AxL(
this.If);A._GetAutoObject(A.Device.Device).A9(46,true,BO.toFixed(),0,[this,this.
A2$]);}break;case 3:case 1:case 0:case 4:this.A3X();break;default:throw new Error(
AIc+this.AaF.toFixed());}}}},Ew:function(G){A._GetAutoObject(C.A$).Fv();},AIV:function(
s){this.Ew(s);},A3X:function(){if((this.AaF===3)||(this.AaF===2)){if((this.Bcl&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.If)){A._GetAutoObject(A.Device.Device).A9(69,true,A.jV,0,[this
,this.A2$]);return;}else this.BBl();}A._GetAutoObject(A.Device.Helper).W.PP(this.
If);this.Bdj=true;this.BBn();this.Ew(this);},A2$:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At)switch(At.Id){case 46:if(At.PopupState===4)this.
A3X();break;case 107:switch(At.PopupState){case 7:{this.A3X();A._GetAutoObject(A.
Device.Helper).BnY(this.If);}break;case 8:this.Ew(this);break;default:;}break;case
69:if(At.PopupState===4)this.Ew(this);break;default:A.ab5("%s%e",AId,At.Id);}},BBl:
function(){A._GetAutoObject(A.Device.Helper).W.Nc(this.If);if(this.Bdq&&(A._GetAutoObject(
A.Device.Converter).ZZ(this.If)===10)){var Bb1=Math.trunc((this.If%1000000000000
)/10000000000);if(!Bb1&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.EC(0);else if((Bb1===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.EC(2);}},BBn:function(){if(this.
Bdr){A._GetAutoObject(A.Device.Helper).W.SC(A._GetAutoObject(A.Device.Helper).A4K(
A._GetAutoObject(A.Device.Device).Ak3,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).Ak3===1)A._GetAutoObject(A.Device.Helper).A$v();
}},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dq(C.IG);this.Number.R(A.aaR(A.acf.OQ));this.Jc.H(AYl);this.
IP.H(W3);this.AkF(1);this.N.CC=[this,this.AIV];this.N.CY(A.aaL(A.ach.E2));},_ReInit:
function(){C.Q8._ReInit.call(this);this.Number.R(A.aaR(A.acf.OQ));},_className:"Application::SetTransponderScreen"
};C.ADk={Gk:null,Lk:null,Kp:null,CP:function(){this.An();},Init:function(aArg){this.
An();},Ai:function(Ae){C.EB.Ai.call(this,Ae);this.Lk.R(A._GetAutoObject(A.acj.DV
).AfZ());this.Kp.R(A._GetAutoObject(A.acj.DV).Aaw());},_Init:function(aArg){C.EB.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gk={I:this},0);A.acg.Text._Init.
call(this.Lk={I:this},0);A.acg.Text._Init.call(this.Kp={I:this},0);this.__proto__=
C.ADk;this.Background.L(A.jb.Text);this.Gk.H(AYm);this.Gk.A6(0x11);this.Gk.R(A.aaR(
A.acf.Date));this.Gk.L(A.jb.Bm);this.Lk.H(AYn);this.Lk.A6(0x11);this.Lk.L(A.jb.Bm
);this.Kp.H(AYo);this.Kp.L(A.jb.Bm);this.J(this.Gk,0);this.J(this.Lk,0);this.J(this.
Kp,0);this.Gk.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af));this.Kp.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EB;this.Gk._Done();this.Lk.
_Done();this.Kp._Done();C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.
call(this);this.Gk._ReInit();this.Lk._ReInit();this.Kp._ReInit();this.Gk.R(A.aaR(
A.acf.Date));this.Gk.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af));this.Kp.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.
Gk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHd={Mh:null,Hl:null,H9:null,AP:null,A_:null,FS:0,H$:0,AiK:false,Init:function(
aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hl.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hl.M[2]-1,0,this.Hl.M[2]+1,aSize[
1]]);this.Mh.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H9.H(this.Mh.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiK){this.H9.R(Rm);this.H9.L(A.jb.
Text);this.Mh.L(this.Background.AQ);}else{this.H9.R(A._GetAutoObject(A.Device.Converter
).S3(this.FS,2,true));this.H9.L(A._GetAutoObject(A.acj.DV).AzM(this.FS,this.H$));
this.Mh.L(A._GetAutoObject(A.acj.DV).AzK(this.FS,this.H$));}this.Hl.L(this.V.AQ);
},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Alz=this.AX.HF(
Ad,6);var Al7=this.AX.CE(Ad,8);if(this.Hn>0){var Byr=this.AX.HF(this.Hn-1,6);var
BA1=this.AX.CE(this.Hn-1,8);var LC=A._GetAutoObject(A.Device.Helper).MM(Byr,Alz);
if(!!LC){this.AiK=false;this.FS=A._GetAutoObject(A.acj.DV).Alw(LC,BA1,Al7);}else{
this.AiK=true;this.FS=0;}}else{this.AiK=true;this.FS=0;}this.T(A._GetAutoObject(
A.acj.KJ).ACM(Alz));this.Hl.R(A._GetAutoObject(A.Device.Converter).Ak9(Al7));this.
H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.An();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mh={I:this},0);A.acg.Text.
_Init.call(this.Hl={I:this},0);A.acg.Text._Init.call(this.H9={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AHd;this.V.H(O3);this.Mh.H(As9);this.Hl.H(AIe);this.Hl.A6(0x12);this.Hl.R(Rk);
this.Hl.L(A.jb.Text);this.H9.H(AIf);this.H9.R(Rk);this.H9.L(A.jb.Text);this.AP.H(
Aou);this.AP.L(A.jb.Bc);this.A_.H(Aov);this.A_.L(A.jb.Bc);this.J(this.Mh,0);this.
J(this.Hl,0);this.J(this.H9,0);this.J(this.AP,0);this.J(this.A_,0);this.Hl.S(A.aaL(
A.fl.Af));this.H9.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mh._Done();this.Hl._Done();this.H9._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mh._ReInit(
);this.Hl._ReInit();this.H9._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hl.
S(A.aaL(A.fl.Af));this.H9.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hl)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,VY:null,AhL:null,SV:null
,KL:A.jV,CP:function(){this.An();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LC=
A._GetAutoObject(A.Device.Helper).MM(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LC){var FS=A._GetAutoObject(
A.acj.DV).Alw(LC,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdJ=A.aaR(A.acf.BgW);AdJ=A._GetAutoObject(
A.Device.Helper).Nj(AdJ,P7,A._GetAutoObject(A.Device.Converter).S3(FS,2,true));AdJ=
A._GetAutoObject(A.Device.Helper).Nj(AdJ,Ax6,A._GetAutoObject(A.acj.DV).Aaw());this.
SV.R(AdJ);this.AhL.L(A._GetAutoObject(A.acj.DV).AzK(FS,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SV.L(A._GetAutoObject(A.acj.DV).AzM(FS,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SV.R(A.aaR(A.acf.AVD));this.AhL.L(A.jb.
AQV);this.SV.L(A.jb.Text);}},CF:function(G){var Ft=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Ft.CW(HV);var Ac6=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac6.Initialize(8,2,0,true);Ft.CW(Ac6);A._GetAutoObject(A.Device.Device).Bt.Bl(
Ft);this.Axs(this);},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bl(null
);},Axs:function(G){this.Bg=A._NewObject(C.Ga,0);this.Bg.NZ(C.AHd);this.Bg.H(Ayf
);this.Bg.Zs(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dz(this.KL);this.J(this.
Bg,0);this.Bb(this.Bg);},Anl:function(G){A._GetAutoObject(C.A$).Fv();},Dz:function(
E){if(this.KL===E)return;this.KL=E;if(!!this.Bg)this.Bg.Dz(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADk._Init.call(this.VY={I:this},0);A.acg.AK._Init.
call(this.AhL={I:this},0);A.acg.Text._Init.call(this.SV={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cd);this.N.Z(true);this.Dq(C.IG);this.VY.H(
P8);this.KL=A.aaR(A.acf.Akl);this.AhL.AZ(0x1D);this.AhL.H(IR);this.SV.AZ(0x1D);this.
SV.H(IR);this.SV.A6(0x12);this.SV.R(Rk);this.J(this.VY,0);this.J(this.AhL,0);this.
J(this.SV,0);this.N.CC=[this,this.Anl];this.N.CY(A.aaL(A.ach.E2));this.SV.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.VY._Done();this.AhL._Done(
);this.SV._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.VY._ReInit();this.AhL._ReInit();this.SV._ReInit();this.Dz(A.aaR(A.acf.Akl
));this.SV.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SV
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Me={DP:null,Acy:null,ARy:11,Gu:0,A4I:true,ABN:false,IW:function(G){if(A._GetAutoObject(
A.Device.Device).Am.Ca()>0)this.Jv(4);else A._GetAutoObject(A.Device.Device).A9(
30,true,A.jV,0,null);},CF:function(G){if(this.DP.AzV())this.DP.Ac4();else if((this.
Gu===2)&&A._GetAutoObject(A.Device.Helper).W.AqZ())this.Jv(5);else this.Jv(1);},
E3:function(G){this.AK8();},Ew:function(G){this.Jv(0);A._GetAutoObject(C.A$).Fv(
);},BBC:function(){A._GetAutoObject(A.Device.Device).AhD();},AK8:function(){A._GetAutoObject(
A.Device.Device).AnX();},A9h:function(E){if(this.ABN===E)return;this.ABN=E;A.abo([
this,this.Bj8,this.A9h],0);},Jv:function(E){var B;if(this.Gu===E)return;this.Gu=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkO();A.zX([this,this.AKx]
,[B=A._GetAutoObject(A.Device.Helper),B.Ary,B.AkE],0);A.z$([this,this.AAm],[B=this.
DP,B.Ans,B.Jv],0);this.BBC();}break;case 3:{A.z$([this,this.AKx],[B=A._GetAutoObject(
A.Device.Helper),B.Ary,B.AkE],0);this.AK8();this.BzB();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Asp();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4I)this.BBo();else this.BBr();}break;case 4:{A.z$([this,this.AKx],[B=A._GetAutoObject(
A.Device.Helper),B.Ary,B.AkE],0);this.AK8();A._GetAutoObject(A.Device.Helper).Asp(
);A.zX([this,this.Bey],[B=A._GetAutoObject(A.Device.Device),B.Awg,B.AyH],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARy);}break;case 5:this.BfT();break;case
6:{A.zX([this,this.AAm],[B=this.DP,B.Ans,B.Jv],0);this.DP.Ac4();}break;case 0:{A.
z$([this,this.AKx],[B=A._GetAutoObject(A.Device.Helper),B.Ary,B.AkE],0);this.AK8(
);}break;default:throw new Error(Ayl);}A.abo([this,this.Ans,this.Bv5],0);},Bv5:function(
Aq){this.Jv(Aq);},AKx:function(G){if(!!A._GetAutoObject(A.Device.Helper).Uw){if(
this.Gu===1)this.Jv(3);else A.ab5("%s%e",AYp,this.Gu);}else A.ab5("%s",AIg);},BBo:
function(){A._GetAutoObject(A.Device.Device).A9(13,true,A._GetAutoObject(A.Device.
Helper).Ak5(A._GetAutoObject(A.Device.Helper).Uw.Id).toFixed(),0,[this,this.BzP]
);},BzP:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
At&&((At.PopupState===4)||(At.PopupState===3))){if(this.Bcp(false))A._GetAutoObject(
C.A$).Cg(31);else{A._GetAutoObject(A.Device.Helper).AkO();this.Jv(1);}}else if(!
!At&&(At.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkO();this.Jv(1);}},
Bcp:function(AiZ){if(A._GetAutoObject(A.Device.Device).Am.Lf()){A._GetAutoObject(
A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gn();A._GetAutoObject(
A.Device.Helper).Aqj(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.PP(A._GetAutoObject(A.Device.Helper).Uw.Id);if(!!A._GetAutoObject(A.Device.
Helper).Ahz){var AlJ=A._GetAutoObject(A.Device.Helper).Ahz.AOS();A._GetAutoObject(
A.Device.Helper).W.Ab4(AlJ);A._GetAutoObject(A.Device.Helper).W.AnA(AlJ);}if(A._GetAutoObject(
A.Device.Helper).AQ_(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nc(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SC(A._GetAutoObject(A.Device.Helper).BgK(A._GetAutoObject(A.Device.
Device).Ags,A._GetAutoObject(A.Device.Helper).W));if(AiZ){A._GetAutoObject(A.Device.
Helper).W.Ch(A._GetAutoObject(A.Device.Device).Am);var L6=A._GetAutoObject(A.Device.
Device).Am.LS(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SL(L6);if(A._GetAutoObject(A.Device.Helper).Am2()){if(A._GetAutoObject(A.
Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gn();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abp(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ch(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Ags)A._GetAutoObject(
A.Device.Helper).A$v();}return true;},BzB:function(){if(!!A._GetAutoObject(A.Device.
Helper).Uw){var AJm=true;if(A._GetAutoObject(A.Device.Helper).Uw.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJm=A._GetAutoObject(A.Device.Helper).A7g(A._GetAutoObject(
A.Device.Helper).Uw.Id);if(!AJm&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bcp(true);AJm=A._GetAutoObject(A.Device.Helper).A7g(A._GetAutoObject(A.
Device.Helper).Uw.Id);}}if(AJm)this.Jv(5);else this.Jv(2);}else{A.ab5("%s",AIg);
return;}},Bey:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARy){A.z$([this,this.Bey],[B=A._GetAutoObject(A.Device.Device),B.Awg,B.AyH
],0);if(A._GetAutoObject(A.Device.Helper).W.AqZ())this.Jv(5);else this.Jv(1);}},
BfT:function(){if(this.ABN===true)this.Jv(6);else A._GetAutoObject(C.A$).Cg(24);
},BBr:function(){A._GetAutoObject(A.Device.Device).A9(36,true,A.jV,0,[this,this.
BAF]);},BAF:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&((At.PopupState===4)||(At.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkO();this.Jv(1);}},AAm:function(G){if(!this.DP.Gu)this.Jv(1);},A2Z:function(G
){},Bwd:function(s){this.A2Z(s);},Bj8:function(){return this.ABN;},Ans:function(
){return this.Gu;},_Init:function(aArg){C.Q8._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acy={I:this},0);this.__proto__=C.Me;this.N.Z(true);this.Dq(C.Aq0);this.
Number.H(AYq);this.Number.R(A.aaR(A.acf.A_Y));this.Jc.H(AYr);this.IP.H(AYs);this.
Acy.H(AYt);this.Acy.R(AYu);this.Acy.L(A.jb.Text);this.J(this.Acy,0);this.N.CC=[this
,this.Ew];this.N.Cl=[this,this.Bwd];this.N.CY(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Acy.S(A.aaL(A.fl.Hr));this.DP=A._GetAutoObject(C.DP);},_Done:function(
){this.__proto__=C.Q8;this.Acy._Done();C.Q8._Done.call(this);},_ReInit:function(
){C.Q8._ReInit.call(this);this.Acy._ReInit();this.Number.R(A.aaR(A.acf.A_Y));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q8._Mark.call(this,D);if((B=
this.DP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4w={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Apd:-1,Gu:0,BxE:function(){var Bfy=false;
var Oh=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.
Device.Device).Bt.HG().toFixed(),0,null);else if(Oh){Bfy=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gn();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axo(B1,5);B1.OnSetAppearance(3);B1.Ch(A._GetAutoObject(
A.Device.Device).Bt);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gn();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axo(B1
,5);B1.OnSetAppearance(1);B1.Ch(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.Er(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).Am);if(Bfy)A._GetAutoObject(A.Device.Helper).W.Ul(false);if(Oh)A.
_GetAutoObject(A.Device.Helper).W.AnR(false);else A._GetAutoObject(A.Device.Helper
).W.AnR(true);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).Am);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A9(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MS]);else A._GetAutoObject(A.Device.Device).A9(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MS]);},BxG:function(){A._GetAutoObject(
A.Device.Helper).W.AGz(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).Am);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A9(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MS]);else A._GetAutoObject(
A.Device.Device).A9(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MS]);},Qi:function(EE){switch(EE){case 4:this.BxE();break;case
128:A._GetAutoObject(C.A$).Cg(7);break;case 16:A._GetAutoObject(C.A$).Cg(36);break;
case 1:A._GetAutoObject(C.A$).Cg(10);break;case 2:A._GetAutoObject(C.A$).Cg(11);
break;case 8:this.BxG();break;case 64:A._GetAutoObject(C.A$).Cg(29);break;case 32:
A._GetAutoObject(C.A$).Cg(48);break;case 256:A._GetAutoObject(C.A$).Cg(21);break;
case 512:A._GetAutoObject(C.A$).Cg(30);break;case 1024:this.Bzy();break;case 262144:
this.BBS();break;case 2048:this.Ac4();break;case 4096:this.Bch(false);break;case
8192:this.BxF();break;case 16384:this.Bzx();break;case 32768:this.Bx5();break;case
524288:this.Bx6();break;case 65536:this.Byu();break;case 131072:this.BBf();break;
case 0:break;default:throw new Error(AYv);}},Bcr:function(EE,Bw$){var EQ=A._NewObject(
C.Wi,0);EQ.Ab2(false);EQ.Aj(true);EQ.AR=Bw$;EQ.Ble(EE);switch(EE){case 1:{EQ.T(A.
aaR(A.acf.AnZ));EQ.DB(A.aaL(A.ach.ALL));}break;case 2:{EQ.T(A.aaR(A.acf.A_H));EQ.
DB(A.aaL(A.ach.ALM));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DB(A.aaL(A.ach.ALN
));EQ.AFv(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asc));EQ.DB(A.aaL(A.ach.ALO));EQ.
AFv(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMk));EQ.DB(A.aaL(A.ach.ALP));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DB(A.aaL(A.ach.ALQ));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DB(A.aaL(A.ach.ALR));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DB(A.aaL(A.ach.ALS));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DB(A._GetAutoObject(A.acj.DV).By9());}break;case 512:{EQ.T(A.aaR(A.acf.ARX));
EQ.DB(A.aaL(A.ach.ALD));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DB(A.aaL(A.ach.ALE));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DB(A.aaL(A.ach.ALK));}break;case 2048:{EQ.T(A.aaR(A.acf.Tt));EQ.DB(A.aaL(A.ach.ALF
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DB(A.aaL(A.ach.ALG));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DB(A.aaL(A.ach.ALH));EQ.AFv(true);}break;case
16384:{EQ.T(A.aaR(A.acf.Bh0));EQ.DB(A.aaL(A.ach.ALI));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bn_));EQ.DB(A.aaL(A.ach.ALJ));}break;default:A.ab5("%s",(AYw+EE.toFixed(
))+AYx);}return EQ;},ByH:function(){this.Apd=this.Apd+1;if(this.Apd>=this.AutoActions.
NP())this.Jv(0);else this.Jv(2);},BA5:function(){this.Apd=-1;},AzV:function(){return(
this.Apd>-1)&&!this.Bzr();},Bzr:function(){return this.Apd>=this.AutoActions.NP(
);},Jv:function(E){if(this.Gu===E)return;this.Gu=E;switch(E){case 1:this.ByH();break;
case 2:{var Aan=this.AutoActions.OC(this.Apd);if(this.A4t(A._GetAutoObject(A.Device.
Helper).W,Aan))this.Qi(Aan);else A._GetAutoObject(A.Device.Device).A9(64,true,(this.
ActionToString.Ls(Aan)+As7)+this.AnimalTypeToString.Ls(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MS]);}break;case 0:this.BA5();break;default:throw new
Error(Ayl);}A.abo([this,this.Ans,this.Jv],0);},MS:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;if((At.Id===63)&&(At.PopupState===7))this.
Bch(true);if((At.Id===32)&&(At.PopupState===7))A._GetAutoObject(C.A$).Cg(45);if((((
At.PopupState===4)||(At.PopupState===3))||(At.PopupState===8))&&this.AzV())this.
Jv(1);},Bcj:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).Am.LS(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},Bzy:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A$).Cg(
45);else A._GetAutoObject(A.Device.Device).A9(32,true,A.jV,0,[this,this.MS]);},Ac4:
function(){this.Jv(1);},BA3:function(){var Oh=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oh&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lf())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device
).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gn();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axo(B1,5);B1.Ch(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.Er(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).Am);A._GetAutoObject(A.Device.Helper).W.Ul(false);if(Oh)A._GetAutoObject(
A.Device.Helper).W.AnR(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(
A.Device.Device).Am);A._GetAutoObject(A.Device.Device).A9(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MS]);},BA4:function(){A._GetAutoObject(
A.Device.Helper).W.AGz(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(
A.Device.Device).Am);A._GetAutoObject(A.Device.Device).A9(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MS]);},Bch:function(ByL){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(ByL===false))A._GetAutoObject(A.Device.
Device).A9(63,true,A.jV,0,[this,this.MS]);else A._GetAutoObject(C.A$).Cg(54);},BxF:
function(){A._GetAutoObject(A.Device.Helper).W.ArV(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).Am);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A9(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MS]);else A._GetAutoObject(A.Device.Device).A9(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MS]);},Bzx:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A$).Cg(81);else A._GetAutoObject(A.
Device.Device).A9(69,true,A.jV,0,[this,this.MS]);},Bx5:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae0(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).Am);A._GetAutoObject(A.Device.Device).A9(65,true,A.jV,2000,[this,this.MS
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae1(false);A._GetAutoObject(A.Device.
Helper).W.Ch(A._GetAutoObject(A.Device.Device).Am);A._GetAutoObject(A.Device.Device
).A9(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MS]);}}},Byu:function(){A._GetAutoObject(A.Device.Helper).W.Ae0(false);A._GetAutoObject(
A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).Am);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae0(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).Am);A._GetAutoObject(A.Device.Device).A9(65,true,A.jV,2000,[this,this.MS
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A9(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MS]);else A._GetAutoObject(A.Device.Device).A9(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MS]);}},A4t:function(Eu,EE
){var Qs=false;switch(EE){case 32768:Qs=Eu.IsRegistrationNoticePending&&!!Eu.NaisIdMother;
break;case 524288:Qs=Eu.IsRegistrationNoticePending&&!Eu.NaisIdMother;break;case
4096:case 8192:switch(Eu.AnimalType){case 1:Qs=true;break;default:;}break;case 512:
switch(Eu.AnimalType){case 0:Qs=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qs=true;break;default:A.ab5("%s",AYy+
EE.toFixed());}return Qs;},BBf:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A$).Cg(80);else A._GetAutoObject(A.Device.Device).A9(
69,true,A.jV,0,[this,this.MS]);},BBS:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A9(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MS]);else{A._GetAutoObject(A.
Device.Helper).W.PP(0);A._GetAutoObject(A.Device.Helper).W.SC(A._GetAutoObject(A.
Device.Helper).A4K(A._GetAutoObject(A.Device.Device).An4,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device
).Am);A._GetAutoObject(A.Device.Device).A9(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MS]);}},Bx6:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae1(false);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).Am);A._GetAutoObject(A.Device.Device).A9(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MS]);}},Ans:function(){return this.
Gu;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.A4w;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALX={Aa0:null,Aql:null,Jv:function(E){if(this.Gu===E)return;C.Me.Jv.call(this
,E);switch(E){case 1:this.Dq(C.Aq0);break;case 5:case 6:this.Dq(C.IG);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayl);}},A2Z:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Me._Init.call(this
,aArg);A.acg.Text._Init.call(this.Aa0={I:this},0);C.ALY._Init.call(this.Aql={I:this
},0);this.__proto__=C.ALX;this.A9h(true);this.Aa0.H(AYz);this.Aa0.R(A.aaR(A.acf.
Tt));this.Aa0.L(A.jb.Text);this.Aql.H(AYA);this.J(this.Aa0,0);this.J(this.Aql,0);
this.N.Cs(A.aaL(A.ach.AbB));this.Aa0.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Me;this.Aa0._Done();this.Aql._Done();C.Me._Done.call(this);},_ReInit:function(
){C.Me._ReInit.call(this);this.Aa0._ReInit();this.Aql._ReInit();this.Aa0.R(A.aaR(
A.acf.Tt));this.Aa0.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Me._Mark.call(
this,D);if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aql)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
H_:null,JX:null,A2Z:function(G){if(this.H_.NU(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Me._Init.call(this,aArg);A.acg.Text._Init.call(this.
JX={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JX.H(AYB);this.JX.KR(
true);this.JX.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABB));this.
JX.L(A.jb.Text);this.J(this.JX,0);this.N.Cs(A.aaL(A.ach.AbB));this.JX.S(A.aaL(A.
fl.Af));this.H_=A._GetAutoObject(C.Ph);},_Done:function(){this.__proto__=C.Me;this.
JX._Done();C.Me._Done.call(this);},_ReInit:function(){C.Me._ReInit.call(this);this.
JX._ReInit();this.JX.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABB
));this.JX.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Me._Mark.call(this,D);if((
B=this.H_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JX)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALY={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABl],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Aut],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABl],this);
A.pe([this,this.Aut],this);this.H(A.abK(this.M,AYC));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYD)));},Bb9:function(G){var B;var Alx=0;var Azm=0;
var Bcn;var X=this.Y.Ah;var Cx=null;Bcn=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NP()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.Wi.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cx){Cx.H(A.abK(Cx.M,AYE));Cx.H(A.abM(Cx.M
,(Azm*58)+Bcn));Cx.H(A.abO(Cx.M,Alx*58));if(Azm>=3){Alx=Alx+1;Azm=0;}else Azm=Azm+
1;}X=X.Ah;}this.Bb(null);},A1o:function(EE){var EQ=A._GetAutoObject(C.DP).Bcr(EE
,null);this.J(EQ,0);this.Bb9(this);},Ao4:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdH=X;X=X.Ah;if(((AdH.U&0x400)===0x400))this.HN(
AdH);}},ABl:function(G){this.Ao4();var O;var CB=A._GetAutoObject(C.AutoActions).
NP();for(O=0;O<CB;O=O+1){var Aan=A._GetAutoObject(C.AutoActions).OC(O);this.A1o(
Aan);}A.pe([this,this.Bb9],this);A.pe([this,this.Aut],this);A.pe([this,this.BB2]
,this);},Aut:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)
){if(((X.U&0x400)===0x400)){var Aa=(C.Wi.isPrototypeOf(X)?X:null);Aa.AFv(false);
}X=X.Ah;}},BB2:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){var Aa=(C.Wi.isPrototypeOf(X)?X:null);var BxV=A._GetAutoObject(
C.AutoActions).NP();if(!!Aa){var O;Aa.A9d(false);for(O=0;O<BxV;O=O+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OC(O)){Aa.A9d(true);Aa.Bmm(AYF+(O+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.ALY;this.Y.JO(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Y._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DP={_Init:function(
){C.A4w._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APB={Lj:null,T3:null,Init:function(aArg){this.Lj.R(A._GetAutoObject(
A.acj.Temperature).AlI());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.
Text._Init.call(this.Lj={I:this},0);C.CH._Init.call(this.T3={I:this},0);this.__proto__=
C.APB;this.Lj.H(AYG);this.Lj.A6(0x12);this.Lj.L(A.jb.Text);this.T3.H(Aow);this.T3.
R((A.aaR(A.acf.Ahd)+AIh)+A.aaR(A.acf.Ki));this.T3.A6(0x12);this.T3.L(A.jb.Text);
this.J(this.Lj,0);this.J(this.T3,0);this.Lj.S(A.aaL(A.fl.Af));this.T3.S(A.aaL(A.
fl.Ak));this.T3.A2(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dc;this.Lj._Done();this.T3._Done();C.Dc._Done.call(this);},_ReInit:function(){
C.Dc._ReInit.call(this);this.Lj._ReInit();this.T3._ReInit();this.T3.R((A.aaR(A.acf.
Ahd)+AIh)+A.aaR(A.acf.Ki));this.Lj.S(A.aaL(A.fl.Af));this.T3.S(A.aaL(A.fl.Ak));this.
T3.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.
Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ADi={Jt:null,D0:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.call(this.Jt={I:this}
,0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=C.ADi;this.Jt.H(AYH
);this.Jt.KR(true);this.Jt.A6(0x14);this.Jt.R(A.aaR(A.acf.AhK)+AIi);this.Jt.L(A.
jb.Text);this.D0.H(Aow);this.D0.KR(true);this.D0.R(A.aaR(A.acf.AF4));this.D0.L(A.
jb.Text);this.J(this.Jt,0);this.J(this.D0,0);this.Jt.S(A.aaL(A.fl.Ak));this.D0.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dc;this.Jt._Done();this.D0._Done(
);C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Jt._ReInit(
);this.D0._ReInit();this.Jt.R(A.aaR(A.acf.AhK)+AIi);this.D0.R(A.aaR(A.acf.AF4));
this.Jt.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D0
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TS={I6:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.
I6={I:this},0);this.__proto__=C.TS;this.I6.H(AIj);this.I6.R((((A.aaR(A.acf.RL)+Aag
)+AIk)+A.aaR(A.acf.A$J))+O5);this.I6.A6(0x12);this.I6.L(A.jb.Text);this.J(this.I6
,0);this.I6.S(A.aaL(A.fl.Af));this.I6.A2(A.aaL(A.fl.Ak));this.I6.Cu(A.aaL(A.fl.Bi
));},_Done:function(){this.__proto__=C.Dc;this.I6._Done();C.Dc._Done.call(this);
},_ReInit:function(){C.Dc._ReInit.call(this);this.I6._ReInit();this.I6.R((((A.aaR(
A.acf.RL)+Aag)+AIk)+A.aaR(A.acf.A$J))+O5);this.I6.S(A.aaL(A.fl.Af));this.I6.A2(A.
aaL(A.fl.Ak));this.I6.Cu(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Dc._Mark.call(
this,D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APD={Lk:null,Kp:null,CP:function(){this.A_0();},Init:function(aArg){this.A_0(
);},A_0:function(){this.Lk.R(A._GetAutoObject(A.acj.DV).AfZ());this.Kp.R(A._GetAutoObject(
A.acj.DV).Aaw());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lk={I:this},0);C.CH._Init.call(this.Kp={I:this},0);this.__proto__=C.APD;
this.Lk.H(AYI);this.Lk.A6(0x12);this.Lk.L(A.jb.Text);this.Kp.H(Aow);this.Kp.L(A.
jb.Text);this.J(this.Lk,0);this.J(this.Kp,0);this.Lk.S(A.aaL(A.fl.Af));this.Kp.S(
A.aaL(A.fl.Af));this.Kp.A2(A.aaL(A.fl.Ak));this.Kp.Cu(A.aaL(A.fl.Bi));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dc;this.Lk._Done();this.Kp._Done();C.Dc.
_Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Lk._ReInit();
this.Kp._ReInit();this.Lk.S(A.aaL(A.fl.Af));this.Kp.S(A.aaL(A.fl.Af));this.Kp.A2(
A.aaL(A.fl.Ak));this.Kp.Cu(A.aaL(A.fl.Bi));this.CP();},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kp
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANa={Mh:null,Hl:null,H9:null,AP:null,A_:null,FS:0,AaC:0,H$:0,AiK:false,Init:function(
aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hl.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hl.M[2]-1,0,this.Hl.M[2]+1,aSize[
1]]);this.Mh.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H9.H(this.Mh.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiK){this.H9.R(Rm);this.H9.L(A.jb.
Text);this.Mh.L(this.Background.AQ);}else{this.H9.R(A._GetAutoObject(A.Device.Converter
).S3(this.FS,2,true));this.H9.L(A._GetAutoObject(A.acj.DV).AzM(this.FS,this.H$));
this.Mh.L(A._GetAutoObject(A.acj.DV).AzK(this.FS,this.H$));}if(this.AaC>0)this.Hl.
R(A._GetAutoObject(A.Device.Converter).Ak9(this.AaC));else this.Hl.R(Rm);this.Hl.
L(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Md=
this.AX.CE(Ad,1);var Auo=this.AX.HF(Ad,24);var AJ7=this.AX.CE(Ad,23);var Aup=this.
AX.HF(Ad,19);this.AaC=this.AX.CE(Ad,18);if((Auo>0)&&(Auo!==Aup)){var LC=A._GetAutoObject(
A.Device.Helper).MM(Auo,Aup);if(!!LC){this.AiK=false;this.FS=A._GetAutoObject(A.
acj.DV).Alw(LC,AJ7,this.AaC);}else{this.AiK=true;this.FS=0;}}else{this.AiK=true;
this.FS=0;}this.T(Md.toFixed());this.H$=this.AX.AmR(Ad,14);this.An();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.Mh={I:this},0);A.acg.Text.
_Init.call(this.Hl={I:this},0);A.acg.Text._Init.call(this.H9={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.ANa;this.V.H(O3);this.Mh.H(As9);this.Hl.H(AIe);this.Hl.A6(0x12);this.Hl.R(Rk);
this.Hl.L(A.jb.Text);this.H9.H(AIf);this.H9.R(Rk);this.H9.L(A.jb.Text);this.AP.H(
Aou);this.AP.L(A.jb.Bc);this.A_.H(Aov);this.A_.L(A.jb.Bc);this.J(this.Mh,0);this.
J(this.Hl,0);this.J(this.H9,0);this.J(this.AP,0);this.J(this.A_,0);this.Hl.S(A.aaL(
A.fl.Af));this.H9.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mh._Done();this.Hl._Done();this.H9._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mh._ReInit(
);this.Hl._ReInit();this.H9._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hl.
S(A.aaL(A.fl.Af));this.H9.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hl)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M0={Mg:null,AP:null,A_:null,Gv:null,Xn:0,Init:
function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Mg.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mg.M);this.Background.H([].concat(this.Mg.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gv.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A_.H([this.Gv.M[2]-1,0,this.
Gv.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gv.L(this.V.AQ
);if(!!this.Xn&&(this.Xn!==5)){this.Mg.L(A._GetAutoObject(A.acj.Assessment).Qk(this.
Xn));this.V.L(A._GetAutoObject(A.acj.Assessment).Xw(this.Xn));}else this.Mg.L(this.
Background.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var
Md=this.AX.CE(Ad,1);var LP=this.AX.I2(Ad,13);var AlD=this.AX.I2(Ad,17);var AlM=this.
AX.H1(Ad,11);var Ay6=this.AX.HF(Ad,4);var AfM=A._GetAutoObject(A.Device.Helper).
MM(Ay6,A._GetAutoObject(A.Device.Helper).Dv());this.Xn=A._GetAutoObject(A.Device.
Helper).AMh(LP,AlM,AlD);this.T(Md.toFixed());if(AfM<100)this.Gv.R((AfM.toFixed()+
CQ)+A.aaR(A.acf.ALW));else this.Gv.R(A._GetAutoObject(A.acj.KJ).ACN(Ay6,A._GetAutoObject(
A.Device.Helper).Dv(),AIl));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Mg={I:this},0);A.acg.AK._Init.call(this.AP={I:this
},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.Gv={I:this
},0);this.__proto__=C.M0;this.Mg.H(As9);this.Background.H(AYJ);this.V.H(O3);this.
AP.H(Aou);this.AP.L(A.jb.Bc);this.A_.H(Aov);this.A_.L(A.jb.Bc);this.Gv.H(Aym);this.
J(this.Mg,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Gv,0);this.Gv.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mg._Done(
);this.AP._Done();this.A_._Done();this.Gv._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mg._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.Gv._ReInit();this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AM_={Ajx:null,N8:null,AP:null,A_:null,Jo:null,AKp:0,A2n:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N8.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajx.H(this.N8.M);this.A_.H([this.N8.M[2]-1,0,this.N8.M[2]+1,aSize[1]]);
this.Jo.H([this.N8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jo.De(this.V.AQ);if(this.AKp>0){this.Ajx.L(A._GetAutoObject(A.acj.Assessment
).Qk(this.A2n));this.N8.L(A._GetAutoObject(A.acj.Assessment).Xw(this.A2n));}else{
this.Ajx.L(this.Background.AQ);this.N8.L(this.V.AQ);}},Cf:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){var Iw=this.AX.CE(Ad,0);var Md=this.AX.CE(Ad,
1);this.AKp=this.AX.CE(Ad,5);this.A2n=this.AX.I2(Ad,17);this.T(Md.toFixed());if(
this.AKp>0)this.N8.R(A._GetAutoObject(A.Device.Converter).Ak0(this.AKp));else this.
N8.R(Rm);var Xm=A._GetAutoObject(A.Device.Helper).ZQ(6);A._GetAutoObject(A.Device.
Device).SL(Ad);var A0z=A._GetAutoObject(A.Device.Helper).Bio(A._GetAutoObject(A.
Device.Device).Bt,9,Iw,Xm,0);this.Jo.A9v(A0z.Get(3));this.Jo.A9x(A0z.Get(2));this.
Jo.A9w(A0z.Get(1));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AK._Init.call(this.Ajx={I:this},0);A.acg.Text._Init.call(this.N8={I:this},
0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},
0);C.Jo._Init.call(this.Jo={I:this},0);this.__proto__=C.AM_;this.N8.A6(0x12);this.
N8.R(Rk);this.N8.L(A.jb.Text);this.AP.H(Aou);this.AP.L(A.jb.Bc);this.A_.H(Aov);this.
A_.L(A.jb.Bc);this.Jo.H(AYK);this.J(this.Ajx,0);this.J(this.N8,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jo,0);this.N8.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ajx._Done();this.N8._Done();this.AP.
_Done();this.A_._Done();this.Jo._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ajx._ReInit();this.N8._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jo._ReInit();this.N8.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jo)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jo={Afl:null,
ColoredCounterAttrSet:null,ACd:0,ACe:0,ACc:0,KS:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKh;var ALC;var AKN;var AlU=0;if(this.ACc>0){AKh=this.ACc.toFixed(
);AlU+=AKh.length;}else{AKh=AYL;AlU++;}if(this.ACe>0){ALC=this.ACe.toFixed();AlU+=
ALC.length;}else{ALC=Ayn;AlU++;}if(this.ACd>0){AKN=this.ACd.toFixed();AlU+=AKN.length;
}else{AKN=AH$;AlU++;}if(AlU<=4)this.ColoredCounterAttrSet.Ahj(A.aaL(A.fl.Af));else
if(AlU<=5)this.ColoredCounterAttrSet.Ahj(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahj(A.aaL(A.fl.Bi));this.Afl.R(((((AYM+AKh)+AYN)+ALC)+AYO)+AKN);},A9w:function(E
){if(this.ACd===E)return;this.ACd=E;this.An();},A9x:function(E){if(this.ACe===E)
return;this.ACe=E;this.An();},A9v:function(E){if(this.ACc===E)return;this.ACc=E;
this.An();},De:function(E){if(this.KS===E)return;this.KS=E;this.ColoredCounterAttrSet.
Ahg(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuK._Init.call(
this.Afl={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jo;this.H(AIm);this.Afl.AZ(0x3F);this.Afl.H(AIm);this.
Afl.R(Rk);this.ColoredCounterAttrSet.Blq(A.jb.E1);this.ColoredCounterAttrSet.A9m(
A.jb.H6);this.ColoredCounterAttrSet.A9l(A.jb.Gg);this.ColoredCounterAttrSet.Ahg(
A.jb.Text);this.KS=A.jb.Text;this.J(this.Afl,0);this.Afl.A9g(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahj(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9i(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afl._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afl._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahj(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AM9={AtB:null
,Acb:null,Acc:null,Acd:null,Jo:null,AP:null,A_:null,Ea:null,Lq:null,AcA:null,KT:
null,KU:null,AJs:0,AJr:0,AJq:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acb.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcA.H(this.
Acb.M);this.A_.H([this.Acb.M[2]-1,0,this.Acb.M[2]+1,aSize[1]]);this.Acc.H([this.
Acb.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KT.H(this.Acc.M);this.Ea.H([this.
Acc.M[2]-1,0,this.Acc.M[2]+1,aSize[1]]);this.Acd.H([this.Acc.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KU.H(this.Acd.M);this.Lq.H([this.Acd.M[2]-1,0,this.Acd.
M[2]+1,aSize[1]]);this.Jo.H([this.Acd.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jo.De(this.V.AQ);this.Acb.L(A._GetAutoObject(A.acj.
Assessment).Qk(this.AJq));this.Acc.L(A._GetAutoObject(A.acj.Assessment).Qk(this.
AJr));this.Acd.L(A._GetAutoObject(A.acj.Assessment).Qk(this.AJs));this.AcA.L(A._GetAutoObject(
A.acj.Assessment).Xw(this.AJq));this.KT.L(A._GetAutoObject(A.acj.Assessment).Xw(
this.AJr));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xw(this.AJs));this.AcA.Z(
!this.AJq);this.KT.Z(!this.AJr);this.KU.Z(!this.AJs);this.Jo.A9v(this.AtB.Get(3)
);this.Jo.A9x(this.AtB.Get(2));this.Jo.A9w(this.AtB.Get(1));},Cf:function(Ad){if(
!this.AX)return;this.Hn=Ad;if(!!this.AX){var Iw=this.AX.CE(Ad,0);var Md=this.AX.
CE(Ad,1);this.T(Md.toFixed());A._GetAutoObject(A.Device.Device).SL(Ad);this.AJq=
A._GetAutoObject(A.Device.Helper).A11(A._GetAutoObject(A.Device.Device).Bt,Iw,0);
this.AJr=A._GetAutoObject(A.Device.Helper).A11(A._GetAutoObject(A.Device.Device).
Bt,Iw,-1);this.AJs=A._GetAutoObject(A.Device.Helper).A11(A._GetAutoObject(A.Device.
Device).Bt,Iw,-2);this.AtB=A._GetAutoObject(A.Device.Helper).A6o(A._GetAutoObject(
A.Device.Device).Bt,Iw,0,0);this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AK._Init.call(this.Acb={I:this},0);A.acg.AK._Init.call(this.Acc={I:
this},0);A.acg.AK._Init.call(this.Acd={I:this},0);C.Jo._Init.call(this.Jo={I:this
},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.Lq={I:this
},0);A.acg.Text._Init.call(this.AcA={I:this},0);A.acg.Text._Init.call(this.KT={I:
this},0);A.acg.Text._Init.call(this.KU={I:this},0);this.__proto__=C.AM9;this.AP.
L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Lq.L(A.jb.Bc);this.AcA.R(Aox
);this.KT.R(Aox);this.KU.R(Aox);this.J(this.Acb,0);this.J(this.Acc,0);this.J(this.
Acd,0);this.J(this.Jo,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.
J(this.Lq,0);this.J(this.AcA,0);this.J(this.KT,0);this.J(this.KU,0);this.AcA.S(A.
aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.AtB=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acb._Done();this.Acc._Done();this.Acd._Done();this.Jo._Done();this.AP.
_Done();this.A_._Done();this.Ea._Done();this.Lq._Done();this.AcA._Done();this.KT.
_Done();this.KU._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acb._ReInit();this.Acc._ReInit();this.Acd._ReInit();this.Jo._ReInit(
);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Lq._ReInit();this.AcA.
_ReInit();this.KT._ReInit();this.KU._ReInit();this.AcA.S(A.aaL(A.fl.Af));this.KT.
S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmU={H4:null,Af1:false,Bk:function(aSize){var
B;this.H4.H([(aSize[0]-((B=this.H4.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H4.M[0]-10,40]);C.TD.Bk.call(this,aSize);},Ai:function(Ae){C.TD.Ai.call(
this,Ae);if(this.Af1)this.H4.Cv(1);else this.H4.Cv(0);},J_:function(G){if(this.Af1
)C.TD.J_.call(this,G);},J5:function(G){if(this.Af1)C.TD.J5.call(this,G);},To:function(
AH){C.TD.To.call(this,AH);if(!!AH){this.H(A.abI(this.M,80));this.Af1=true;this.Zx(
true);}else{this.H(A.abI(this.M,40));this.Af1=false;this.Zx(false);}},_Init:function(
aArg){C.TD._Init.call(this,aArg);A.acg.Ap._Init.call(this.H4={I:this},0);this.__proto__=
C.AmU;this.V.A6(0x11);this.H4.H(AHH);this.H4.Cv(0);this.J(this.H4,0);this.V.Cu(A.
aaL(A.fl.Bi));this.H4.Aw(A.aaL(A.ach.AqP));},_Done:function(){this.__proto__=C.TD;
this.H4._Done();C.TD._Done.call(this);},_ReInit:function(){C.TD._ReInit.call(this
);this.H4._ReInit();this.V.Cu(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.TD._Mark.
call(this,D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AF3={_Init:function(aArg){C.Axf._Init.call(this,aArg);this.__proto__=C.AF3;}
,_className:"Application::OptionsOverlaySeparator"};C.AkH={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axf._Init.call(this,aArg);this.__proto__=C.AkH;},_className:"Application::OptionsOverlayNode"
};C.Zz={AR:null,_Init:function(aArg){C.AkH._Init.call(this,aArg);this.__proto__=
C.Zz;},_Mark:function(D){var B;C.AkH._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.AND={Ai:function(Ae){C.OU.Ai.call(this,Ae);var FN=A.jb.CK;var GS=A.jb.Text;if(
this.Hf){FN=A.jb.Text;GS=A.jb.Bm;}this.Background.L(FN);this.V.L(GS);},_Init:function(
aArg){C.OU._Init.call(this,aArg);this.__proto__=C.AND;},_className:"Application::DarkThemeTextItem"
};C.OU={Background:null,BU:null,V:null,Aqw:0,Hf:false,Init:function(aArg){},Bk:function(
aSize){C.Hc.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BU.H(A.abK(this.BU.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hc.Ai.call(this,Ae);this.BU.L(this.Aqw);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bh:function(E){if(this.Hf===E)return;this.Hf=E;this.An();
},ArL:function(E){if(this.Aqw===E)return;this.Aqw=E;this.An();},_Init:function(aArg
){C.Hc._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);C.CH._Init.call(this.V={I:this},0);this.__proto__=
C.OU;this.H(BF);this.Background.H(AIn);this.BU.H(BF);this.BU.Nf(2);this.BU.L(A.jb.
Re);this.V.H(AYP);this.Aqw=A.jb.Re;this.J(this.Background,0);this.J(this.BU,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.
fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.Hc;this.Background._Done(
);this.BU._Done();this.V._Done();C.Hc._Done.call(this);},_ReInit:function(){C.Hc.
_ReInit.call(this);this.Background._ReInit();this.BU._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bi));},_Mark:
function(D){var B;C.Hc._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APG={Eq:null,IK:null
,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.Eq={
I:this},0);A.acg.Text._Init.call(this.IK={I:this},0);this.__proto__=C.APG;this.H(
O2);this.Background.H(O2);this.Eq.H(AIo);this.Eq.R(A.aaR(A.acf.GJ));this.Eq.A6(0x11
);this.Eq.L(A.jb.Text);this.IK.AZ(0x3F);this.IK.H(Ayo);this.IK.Hh(5);this.IK.A6(
0x14);this.IK.R(A.aaR(A.acf.AGM));this.IK.L(A.jb.Text);this.J(this.Eq,0);this.J(
this.IK,0);this.Eq.S(A.aaL(A.fl.Af));this.IK.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EB;this.Eq._Done();this.IK._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Eq._ReInit();this.IK._ReInit();this.Eq.R(
A.aaR(A.acf.GJ));this.IK.R(A.aaR(A.acf.AGM));this.Eq.S(A.aaL(A.fl.Af));this.IK.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Eq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sl:null,Sm:null,Aey:null,AgY:null,QH:null
,KS:0,LastTemperature:0,AqC:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sl.Aw(A.aaL(A.ach.Avz));this.Sm.Aw(A.aaL(A.ach.Avz));}break;case 2:{this.Sl.Aw(A.
aaL(A.ach.AvC));this.Sm.Aw(A.aaL(A.ach.AvC));}break;default:{this.Sl.Aw(A.aaL(A.
ach.Aeu));this.Sm.Aw(A.aaL(A.ach.Aeu));}}this.Sl.L(A._GetAutoObject(A.acj.Assessment
).Qk(this.AqC));var ApP;if(this.IsWatch)ApP=A.aaL(A.ach.AQD);else if(this.IsFever
){ApP=A.aaL(A.ach.AQC);switch(A._GetAutoObject(A.Device.Converter).Ajl(this.LastTemperature
,this.AnimalType)){case 3:this.QH.L(A.jb.Gg);break;case 2:this.QH.L(A.jb.H6);break;
case 1:this.QH.L(A.jb.E1);break;case 0:this.QH.L(A.jb.Afp);break;default:;}}else
if(this.IsAlarm){ApP=A.aaL(A.ach.AQB);if(!this.AqC||(this.AqC===5))this.QH.L(A.jb.
Gg);else this.QH.L(0xFF000000);}else ApP=null;this.Aey.Aw(ApP);this.AgY.Aw(ApP);
this.QH.Aw(ApP);if(A._GetAutoObject(A.acj.Assessment).Qk(this.AqC)===A.jb.E1)this.
Sm.L(this.KS);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
An();},AEZ:function(E){if(this.AqC===E)return;this.AqC=E;this.An();},De:function(
E){if(this.KS===E)return;this.KS=E;this.An();},Ae2:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.An();},Ul:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.An();},AeY:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.An();},Ae4:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.An();},Hi:function(){this.EC(0);this.AEZ(0);this.AeY(false);this.Ul(false
);this.Ae2(false);this.Ae4(0);this.De(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sl={I:this},0);A.acg.Ap._Init.call(
this.Sm={I:this},0);A.acg.Ap._Init.call(this.Aey={I:this},0);A.acg.Ap._Init.call(
this.AgY={I:this},0);A.acg.Ap._Init.call(this.QH={I:this},0);this.__proto__=C.DS;
this.H(Alg);this.Sl.AZ(0x3F);this.Sl.H(Alg);this.Sl.L(A.jb.CK);this.Sl.A6(0x12);
this.Sl.Cv(0);this.Sm.AZ(0x3F);this.Sm.H(Alg);this.Sm.L(0xFF000000);this.Sm.A6(0x12
);this.Sm.Cv(1);this.Aey.AZ(0x3F);this.Aey.H(Alg);this.Aey.L(0xFF000000);this.Aey.
Cv(0);this.AgY.AZ(0x3F);this.AgY.H(Alg);this.AgY.Cv(1);this.QH.AZ(0x3F);this.QH.
H(Alg);this.QH.L(A.jb.CS);this.QH.Cv(2);this.KS=A.jb.Text;this.J(this.Sl,0);this.
J(this.Sm,0);this.J(this.Aey,0);this.J(this.AgY,0);this.J(this.QH,0);this.Sl.Aw(
A.aaL(A.ach.Aeu));this.Sm.Aw(A.aaL(A.ach.Aeu));},_Done:function(){this.__proto__=
A.Core.P;this.Sl._Done();this.Sm._Done();this.Aey._Done();this.AgY._Done();this.
QH._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sl._ReInit();this.Sm._ReInit();this.Aey._ReInit();this.AgY._ReInit();
this.QH._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AM6={Cf:function(Ad){C.AjA.Cf.call(this,Ad);if(!!this.AX){var Bzv=this.AX.H1(
Ad,12);var BxN=this.AX.Sh(Ad,15);this.Abe.R(A._GetAutoObject(A.Device.Helper).MM(
BxN,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Sn.Z(Bzv);this.An();
}},_Init:function(aArg){C.AjA._Init.call(this,aArg);this.__proto__=C.AM6;},_className:
"Application::CalfListAlarmItem"};C.ADe={D0:null,Mp:null,_Init:function(aArg){C.
TT._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mp={I:this},0);this.__proto__=C.ADe;this.D0.H(Aow);this.D0.KR(true);this.
D0.R(A.aaR(A.acf.A5A));this.D0.L(A.jb.Text);this.Mp.H(AIp);this.Mp.I7(false);this.
Mp.L(A.jb.Text);this.Mp.A6(0x12);this.J(this.D0,-2);this.J(this.Mp,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mp.Aw(A.aaL(A.ach.ADF));},_Done:function(){this.__proto__=C.
TT;this.D0._Done();this.Mp._Done();C.TT._Done.call(this);},_ReInit:function(){C.
TT._ReInit.call(this);this.D0._ReInit();this.Mp._ReInit();this.D0.R(A.aaR(A.acf.
A5A));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TT._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kh={Background:null,BU:
null,ACF:0,ABT:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACF);this.BU.L(this.ABT);},AwB:function(E){if(this.ACF===E)return;this.ACF=E;this.
An();},AER:function(E){if(this.ABT===E)return;this.ABT=E;this.An();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BU={I:this},0);this.__proto__=C.Kh;this.H(Aoy);this.
Background.AZ(0x3C);this.Background.H(Aoy);this.Background.Cv(1);this.BU.AZ(0x3C
);this.BU.H(Aoy);this.ACF=A.jb.E1;this.ABT=A.jb.Text;this.J(this.Background,0);this.
J(this.BU,0);this.Background.Aw(A.aaL(A.ach.Kh));this.BU.Aw(A.aaL(A.ach.Kh));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BU._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmC={Q:null,Pm:
null,A63:false,Bk:function(aSize){C.Ml.Bk.call(this,aSize);this.V.H([].concat(this.
Pm.M[2]-this.V.Text.I_,this.V.M.slice(1,4)));},Ai:function(Ae){C.Ml.Ai.call(this
,Ae);this.Pm.L(this.V.AQ);},AwG:function(E){if(this.A63===E)return;this.A63=E;if(
E)this.Pm.R(AYQ);else this.Pm.R(AIq);},Kc:function(G){var F;if(!!this.Q)this.AwG((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Kc],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kc],E,0);if(!!E)
A.pe([this,this.Kc],this);},_Init:function(aArg){C.Ml._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pm={I:this},0);this.__proto__=C.AmC;this.Pm.AZ(0x34);this.Pm.
H(US);this.Pm.R(AIq);this.J(this.Pm,0);this.Pm.S(A.aaL(A.fl.AOz));},_Done:function(
){this.__proto__=C.Ml;this.Pm._Done();C.Ml._Done.call(this);},_ReInit:function(){
C.Ml._ReInit.call(this);this.Pm._ReInit();},_Mark:function(D){var B;C.Ml._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pm)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOY={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter
).AdV(4));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.AOY;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Dn:function(){return 3;},C4:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},FY:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APH={Gk:null,Lj:null,YS:null,Init:function(aArg){this.Lj.R(A._GetAutoObject(
A.acj.Temperature).AlI());},_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gk={I:this},0);A.acg.Text._Init.call(this.Lj={I:this},0);A.
acg.Text._Init.call(this.YS={I:this},0);this.__proto__=C.APH;this.Background.L(A.
jb.Text);this.Gk.H(AIr);this.Gk.A6(0x11);this.Gk.R(A.aaR(A.acf.Date));this.Gk.L(
A.jb.Bm);this.Lj.H(AYR);this.Lj.A6(0x12);this.Lj.L(A.jb.Bm);this.YS.H(AYS);this.
YS.A6(0x12);this.YS.R(A.aaR(A.acf.Bs));this.YS.L(A.jb.Bm);this.J(this.Gk,0);this.
J(this.Lj,0);this.J(this.YS,0);this.Gk.S(A.aaL(A.fl.Af));this.Lj.S(A.aaL(A.fl.Af
));this.YS.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EB;this.Gk._Done();this.Lj._Done();this.YS._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Gk._ReInit();this.Lj._ReInit();this.YS._ReInit(
);this.Gk.R(A.aaR(A.acf.Date));this.YS.R(A.aaR(A.acf.Bs));this.Gk.S(A.aaL(A.fl.Af
));this.Lj.S(A.aaL(A.fl.Af));this.YS.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EB._Mark.call(this,D);if((B=this.Gk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Tx={Ld:null,AjQ:false,Init:function(
aArg){var B;A.zX([this,this.Bbb],[B=A._GetAutoObject(A.Device.Device),B.AEq,B.AIK
],0);this.AGF(this);A.pe([this,this.AyI],this);},DE:function(G){var D5=(A.Core.BM.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Ol(this);break;case 7:this.MT(
this);break;default:D5.NH=true;}},CF:function(G){var B;if(!!this.Ld)this.Ld.CF(this
);C.AB.CF.call(this,G);},E3:function(G){var B;if(!!this.Ld)this.Ld.E3(this);C.AB.
E3.call(this,G);},Anl:function(G){A._GetAutoObject(C.A$).Fv();},AGF:function(G){
var B;if(!!this.Ld){this.Ld.E3(this);this.HN(this.Ld);}if(this.AjQ)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Ld=A._NewObject(C.AMo,0);break;case 1:this.Ld=A.
_NewObject(C.AMp,0);break;case 3:this.Ld=A._NewObject(C.AMn,0);break;case 2:this.
Ld=A._NewObject(C.AMq,0);break;default:throw new Error(AIs);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Ld=A._NewObject(C.AMr,0);break;case 1:this.Ld=A.
_NewObject(C.AMA,0);break;case 3:this.Ld=A._NewObject(C.AMu,0);break;case 2:this.
Ld=A._NewObject(C.AMF,0);break;default:throw new Error(AIs);}this.HO(this);this.
J(this.Ld,0);this.Ld.H(Fb);this.Ld.Zu([this,this.A0l]);this.Ld.CF(this);this.Bb(
this.Ld);},Bbb:function(s){this.AGF(s);},Bnj:function(G){A._GetAutoObject(A.Device.
Device).AeS(0);},ATH:function(G){A._GetAutoObject(A.Device.Device).AeS(1);},ATG:
function(G){A._GetAutoObject(A.Device.Device).AeS(3);},ATI:function(G){A._GetAutoObject(
A.Device.Device).AeS(2);},HO:function(G){this.N.CY(A.aaL(A.ach.E2));this.N.Hu(A.
jV);this.N.CC=[this,this.Anl];this.N.AE6(A.aaL(A.fl.Ak));},AyI:function(s){this.
HO(s);},Bl7:function(E){if(this.AjQ===E)return;this.AjQ=E;A.pe([this,this.Bbb],this
);},A_t:function(G){this.Bl7(!this.AjQ);},Bnm:function(G){A._GetAutoObject(A.Device.
Device).A9(31,true,A.jV,0,null);},MT:function(G){},BF2:function(s){this.MT(s);},
Ol:function(G){},BF1:function(s){this.Ol(s);},Bev:function(G){var FM=A._GetAutoObject(
A.Device.Device).D9;FM=FM+1;if(FM>=4)FM=0;A._GetAutoObject(A.Device.Device).AeS(
FM);},BAm:function(G){var FM=A._GetAutoObject(A.Device.Device).D9;FM=FM-1;if(FM<
0)FM=3;A._GetAutoObject(A.Device.Device).AeS(FM);},Af6:function(G){},A0l:function(
s){this.Af6(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Tx;this.Background.H(Cd);this.N.Z(true);this.N.ON(true);this.N.OO(true);this.Dq(
C.APw);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Ld)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dl:null,CF:function(G){},AIJ:function(s){this.CF(s);
},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bl(null);},Ayy:function(s){
this.E3(s);},Zu:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dl.BN=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BM._Init.call(this.Dl={I:this},0);this.__proto__=
C.D9;this.H(UV);this.AttrSet.A9m(A.jb.Gg);this.AttrSet.A9l(A.jb.H6);this.AttrSet.
Ahg(A.jb.Text);this.Dl.Filter=1;this.AttrSet.Ahj(A.aaL(A.fl.Ak));this.AttrSet.A9i(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dl._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dl._ReInit();this.AttrSet.Ahj(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMr={RP:
null,AaV:null,Tw:null,Tv:null,RT:null,Qy:null,RU:null,RR:null,RS:null,RQ:null,CP:
function(){var B;this.RP.Cf(this);this.AaV.Cf(this);this.Tw.Cf(this);this.Tv.Cf(
this);this.RT.Cf(this);this.Qy.Cf(this);this.RU.Cf(this);this.RR.Cf(this);this.RS.
Cf(this);this.RQ.Cf(this);},GE:function(G){C.RW.GE.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RP.Z(true);this.AaV.Z(false);
this.RR.Z(false);this.RS.Z(false);this.RQ.Z(false);this.RT.Z(true);this.Qy.Z(true
);this.RU.Z(true);}break;case 1:{this.RP.Z(false);this.AaV.Z(true);this.RR.Z(true
);this.RS.Z(true);this.RQ.Z(true);this.RT.Z(false);this.Qy.Z(false);this.RU.Z(false
);}break;default:A.ab5("%s%e",Alc,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MN],this);},_Init:function(aArg){C.RW._Init.call(this,aArg);C.
RP._Init.call(this.RP={I:this},0);C.AMm._Init.call(this.AaV={I:this},0);C.Tw._Init.
call(this.Tw={I:this},0);C.Tv._Init.call(this.Tv={I:this},0);C.RT._Init.call(this.
RT={I:this},0);C.Qy._Init.call(this.Qy={I:this},0);C.RU._Init.call(this.RU={I:this
},0);C.RR._Init.call(this.RR={I:this},0);C.RS._Init.call(this.RS={I:this},0);C.RQ.
_Init.call(this.RQ={I:this},0);this.__proto__=C.AMr;this.RP.H(BF);this.RP.Aj(true
);this.RP.Bh(false);this.AaV.H(IR);this.AaV.Aj(true);this.AaV.Bh(false);this.Tw.
H(P8);this.Tw.Aj(true);this.Tw.Bh(true);this.Tv.H(Aae);this.Tv.Aj(true);this.Tv.
Bh(false);this.RT.H(Ale);this.RT.Aj(true);this.RT.Bh(true);this.Qy.H(Aos);this.Qy.
Aj(true);this.Qy.Bh(false);this.RU.H(As3);this.RU.Aj(true);this.RU.Bh(true);this.
RR.H(Xd);this.RR.Aj(true);this.RR.Bh(true);this.RS.H(AYT);this.RS.Aj(true);this.
RS.Bh(false);this.RQ.H(AYU);this.RQ.Aj(true);this.RQ.Bh(true);this.J(this.RP,0);
this.J(this.AaV,0);this.J(this.Tw,0);this.J(this.Tv,0);this.J(this.RT,0);this.J(
this.Qy,0);this.J(this.RU,0);this.J(this.RR,0);this.J(this.RS,0);this.J(this.RQ,
0);},_Done:function(){this.__proto__=C.RW;this.RP._Done();this.AaV._Done();this.
Tw._Done();this.Tv._Done();this.RT._Done();this.Qy._Done();this.RU._Done();this.
RR._Done();this.RS._Done();this.RQ._Done();C.RW._Done.call(this);},_ReInit:function(
){C.RW._ReInit.call(this);this.RP._ReInit();this.AaV._ReInit();this.Tw._ReInit();
this.Tv._ReInit();this.RT._ReInit();this.Qy._ReInit();this.RU._ReInit();this.RR.
_ReInit();this.RS._ReInit();this.RQ._ReInit();this.CP();},_Mark:function(D){var B;
C.RW._Mark.call(this,D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tw)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Tv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RT)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Qy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RQ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMF={AkS:function(L1){if(!L1)return;var Ft=A._NewObject(
A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Ft.CW(HV);var Ac6=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac6.Initialize(8,2,0,true);Ft.CW(Ac6);L1.Bl(Ft);
},ADS:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Pe=A.
_GetAutoObject(A.Device.Device).Bt.Ca();if(Pe<2)return false;var BBM=A._GetAutoObject(
A.Device.Device).Bt.HF(0,6);var BBN=A._GetAutoObject(A.Device.Device).Bt.HF(Pe-1
,6);var A1R=A._NewObject(A.Core.Bs,0);A1R.Initialize(BBM);var A3R=A._NewObject(A.
Core.Bs,0);A3R.Initialize(BBN);if((A1R.Ab0()!==A3R.Ab0())||(A1R.Year!==A3R.Year)
)return true;else return false;},_Init:function(aArg){C.AaX._Init.call(this,aArg
);this.__proto__=C.AMF;this.ATa(C.AHd);this.ATb(C.ADk);this.AS2(C.Qy);this.ArR(A.
aaR(A.acf.AVD));this.Dz(A.aaR(A.acf.Akl));},_ReInit:function(){C.AaX._ReInit.call(
this);this.ArR(A.aaR(A.acf.AVD));this.Dz(A.aaR(A.acf.Akl));},_className:"Application::AnimalWeights"
};C.AMA={AkS:function(L1){if(!L1)return;var Ft=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Ft.CW(HV);var AA_=A._NewObject(A.Device.Int32FilterCriterion
,0);AA_.Initialize(7,2,0,true);Ft.CW(AA_);L1.Bl(Ft);},ADS:function(){return A._GetAutoObject(
A.Device.Device).Bt.Ca()>0;},_Init:function(aArg){C.AaX._Init.call(this,aArg);this.
__proto__=C.AMA;this.ATa(C.AU0);this.ATb(C.APH);this.AS2(C.Tw);this.ArR(A.aaR(A.
acf.A7o));this.Dz(A.aaR(A.acf.Art));},_ReInit:function(){C.AaX._ReInit.call(this
);this.ArR(A.aaR(A.acf.A7o));this.Dz(A.aaR(A.acf.Art));},_className:"Application::AnimalTemperatures"
};C.AT7={Vz:null,VA:null,XZ:null,AgA:null,Kw:null,AP:null,A_:null,Ea:null,Lq:null
,AnQ:null,KT:null,KU:null,ZN:null,ZO:null,Init:function(aArg){},Bk:function(aSize
){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Kw.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A_.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
Vz.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
Vz.M[2]-1,0,this.Vz.M[2]+1,aSize[1]]);this.VA.H([this.Vz.M[2],0,this.Vz.M[2]+22,
aSize[1]]);this.Lq.H([this.VA.M[2]-1,0,this.VA.M[2]+1,aSize[1]]);this.XZ.H([this.
VA.M[2],0,this.VA.M[2]+22,aSize[1]]);this.AnQ.H([this.XZ.M[2]-1,0,this.XZ.M[2]+1
,aSize[1]]);this.AgA.H([this.XZ.M[2],0,aSize[0],aSize[1]]);this.KT.H(this.Vz.M);
this.KU.H(this.VA.M);this.ZN.H(this.XZ.M);this.ZO.H(this.AgA.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Kw.L(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;
this.Hn=Ad;if(!!this.AX){var Alz=this.AX.HF(Ad,6);var A08=this.AX.I2(Ad,3);var A1N=
this.AX.I2(Ad,2);var A1M=this.AX.I2(Ad,5);var A3F=this.AX.I2(Ad,4);this.T(A._GetAutoObject(
A.acj.KJ).ACM(Alz));this.Kw.R(A._GetAutoObject(A.acj.KJ).A6i(Alz));this.Vz.L(A._GetAutoObject(
A.acj.Assessment).Qk(A08));this.VA.L(A._GetAutoObject(A.acj.Assessment).Qk(A1N));
this.XZ.L(A._GetAutoObject(A.acj.Assessment).Qk(A1M));this.AgA.L(A._GetAutoObject(
A.acj.Assessment).Qk(A3F));this.KT.L(A._GetAutoObject(A.acj.Assessment).Xw(A08));
this.KU.L(A._GetAutoObject(A.acj.Assessment).Xw(A1N));this.ZN.L(A._GetAutoObject(
A.acj.Assessment).Xw(A1M));this.ZO.L(A._GetAutoObject(A.acj.Assessment).Xw(A3F));
this.KT.Z(A08===5);this.KU.Z(A1N===5);this.ZN.Z(A1M===5);this.ZO.Z(A3F===5);this.
An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(this.
Vz={I:this},0);A.acg.AK._Init.call(this.VA={I:this},0);A.acg.AK._Init.call(this.
XZ={I:this},0);A.acg.AK._Init.call(this.AgA={I:this},0);A.acg.Text._Init.call(this.
Kw={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.
Lq={I:this},0);A.acg.AK._Init.call(this.AnQ={I:this},0);A.acg.Text._Init.call(this.
KT={I:this},0);A.acg.Text._Init.call(this.KU={I:this},0);A.acg.Text._Init.call(this.
ZN={I:this},0);A.acg.Text._Init.call(this.ZO={I:this},0);this.__proto__=C.AT7;this.
V.H(O3);this.Vz.H(AYV);this.VA.H(AYW);this.XZ.H(AYX);this.AgA.H(AYY);this.Kw.R(Rk
);this.Kw.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lq.L(A.jb.Bc);this.AnQ.L(A.jb.Bc);this.KT.H(AYZ);this.KT.R(Rm);this.KU.H(AY0
);this.KU.R(Rm);this.ZN.H(AY1);this.ZN.R(Rm);this.ZO.H(AY2);this.ZO.R(Rm);this.J(
this.Vz,0);this.J(this.VA,0);this.J(this.XZ,0);this.J(this.AgA,0);this.J(this.Kw
,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Lq,0);this.
J(this.AnQ,0);this.J(this.KT,0);this.J(this.KU,0);this.J(this.ZN,0);this.J(this.
ZO,0);this.Kw.S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af
));this.ZN.S(A.aaL(A.fl.Af));this.ZO.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.Vz._Done();this.VA._Done();this.XZ._Done();this.AgA._Done(
);this.Kw._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Lq._Done(
);this.AnQ._Done();this.KT._Done();this.KU._Done();this.ZN._Done();this.ZO._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Vz._ReInit(
);this.VA._ReInit();this.XZ._ReInit();this.AgA._ReInit();this.Kw._ReInit();this.
AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Lq._ReInit();this.AnQ._ReInit(
);this.KT._ReInit();this.KU._ReInit();this.ZN._ReInit();this.ZO._ReInit();this.Kw.
S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.ZN.S(
A.aaL(A.fl.Af));this.ZO.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.Vz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VA)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APF={Gk:null,YY:null,YU:null,YV:null,YW:null,YX:
null,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gk={I:this},0);A.acg.Text._Init.call(this.YY={I:this},0);A.acg.Text._Init.call(this.
YU={I:this},0);A.acg.Text._Init.call(this.YV={I:this},0);A.acg.Text._Init.call(this.
YW={I:this},0);A.acg.Text._Init.call(this.YX={I:this},0);this.__proto__=C.APF;this.
Background.L(A.jb.Text);this.Gk.H(AIr);this.Gk.A6(0x11);this.Gk.R(A.aaR(A.acf.Date
));this.Gk.L(A.jb.Bm);this.YY.H(AIj);this.YY.A6(0x12);this.YY.R(A.aaR(A.acf.Bs));
this.YY.L(A.jb.Bm);this.YU.H(AY3);this.YU.A6(0x12);this.YU.R(A.aaR(A.acf.AT9));this.
YU.L(A.jb.Bm);this.YV.H(AY4);this.YV.A6(0x12);this.YV.R(A.aaR(A.acf.AT_));this.YV.
L(A.jb.Bm);this.YW.H(AY5);this.YW.A6(0x12);this.YW.R(A.aaR(A.acf.AOv));this.YW.L(
A.jb.Bm);this.YX.H(Aoz);this.YX.A6(0x12);this.YX.R(A.aaR(A.acf.ANu));this.YX.L(A.
jb.Bm);this.J(this.Gk,0);this.J(this.YY,0);this.J(this.YU,0);this.J(this.YV,0);this.
J(this.YW,0);this.J(this.YX,0);this.Gk.S(A.aaL(A.fl.Af));this.YY.S(A.aaL(A.fl.Af
));this.YU.S(A.aaL(A.fl.Af));this.YV.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(A.fl.Af));
this.YX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EB;this.Gk._Done();
this.YY._Done();this.YU._Done();this.YV._Done();this.YW._Done();this.YX._Done();
C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.call(this);this.Gk._ReInit(
);this.YY._ReInit();this.YU._ReInit();this.YV._ReInit();this.YW._ReInit();this.YX.
_ReInit();this.Gk.R(A.aaR(A.acf.Date));this.YY.R(A.aaR(A.acf.Bs));this.YU.R(A.aaR(
A.acf.AT9));this.YV.R(A.aaR(A.acf.AT_));this.YW.R(A.aaR(A.acf.AOv));this.YX.R(A.
aaR(A.acf.ANu));this.Gk.S(A.aaL(A.fl.Af));this.YY.S(A.aaL(A.fl.Af));this.YU.S(A.
aaL(A.fl.Af));this.YV.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Gk)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMu={AkS:function(L1){if(!L1)return;
var Ft=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Ft.CW(HV);var
AAR=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAR.Initialize(3,5,0,true
);Ft.CW(AAR);L1.Bl(Ft);},ADS:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.Ca()>0;},_Init:function(
aArg){C.AaX._Init.call(this,aArg);this.__proto__=C.AMu;this.ATa(C.AT7);this.ATb(
C.APF);this.AS2(C.Tv);this.ArR(A.aaR(A.acf.Axk));this.Dz(A.aaR(A.acf.Ank));},_ReInit:
function(){C.AaX._ReInit.call(this);this.ArR(A.aaR(A.acf.Axk));this.Dz(A.aaR(A.acf.
Ank));},_className:"Application::AnimalRatings"};C.IC={B7:null,Y:null,V:null,Uq:
5,T:function(E){C.IZ.T.call(this,E);this.V.R(E);},De:function(E){C.IZ.De.call(this
,E);this.V.L(E);},S:function(E){if(this.B7===E)return;this.B7=E;this.V.S(this.B7
);},AuO:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0]))this.S(A.aaL(A.fl.Ii));},Kq:function(
E){if(this.Uq===E)return;this.Uq=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAL:function(G){A.pe([this,this.AuO],this);},_Init:function(aArg){C.IZ._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IC;this.Y.AZ(0x3F);this.Y.H(AIt);this.Y.A_b(5);this.
Y.JO(3);this.V.AZ(0x34);this.V.H(Aah);this.V.I7(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.El=[this,this.
AAL];this.V.S(A.aaL(A.fl.Kl));},_Done:function(){this.__proto__=C.IZ;this.Y._Done(
);this.V._Done();C.IZ._Done.call(this);},_ReInit:function(){C.IZ._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kl));},_Mark:function(D){
var B;C.IZ._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RP={AfM:0,Ai:function(Ae){C.Fu.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RL));if(this.AfM>=0)this.Ks((this.AfM.toFixed(
)+CQ)+A.aaR(A.acf.Ki));else this.Ks(A.aaR(A.acf.Unknown));},Cf:function(G){C.Fu.
Cf.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfM=-1;
else this.AfM=A._GetAutoObject(A.Device.Helper).W.RL();this.An();},_Init:function(
aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RP;},_className:"Application::AnimalInfoItemAge"
};C.RT={A4j:0,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afq));if(
this.A4j>0)this.Ks((A._GetAutoObject(A.Device.Converter).Ak9(this.A4j)+CQ)+A._GetAutoObject(
A.acj.DV).AfZ());else this.Ks(A.aaR(A.acf.Unknown));},Cf:function(G){C.Fu.Cf.call(
this,G);this.A4j=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.An();},
_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RT;},_className:
"Application::AnimalInfoItemWeight"};C.Tw={Y:null,Eh:null,Ey:null,Fa:null,PT:null
,E$:null,PU:null,Ajg:0,Pd:0,CP:function(){this.An();},Ai:function(Ae){C.JG.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Bhx));this.Fa.R(this.Ajg.toFixed());this.E$.R(this.Pd.
toFixed());if(!!this.Ajg||!!this.Pd)this.PU.R(AY6+(this.Ajg+this.Pd).toFixed());
else this.PU.R(A.aaR(A.acf.AR8));},Cf:function(G){C.JG.Cf.call(this,G);var AkZ;AkZ=
A._GetAutoObject(A.Device.Helper).Bip(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajg=AkZ.Get(2);this.Pd=AkZ.Get(1);this.An();},De:
function(E){C.JG.De.call(this,E);this.PT.L(E);this.PU.L(E);},AsN:function(G){if(
!!this.Ajg||!!this.Pd){this.Fa.Z(true);this.PT.Z(true);this.E$.Z(true);}else{this.
Fa.Z(false);this.PT.Z(false);this.E$.Z(false);}this.Eh.H(this.Fa.M);this.Eh.Z(this.
Fa.Fl());this.Ey.H(this.E$.M);this.Ey.Z(this.E$.Fl());},AuO:function(G){var B;var
Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;if(((B=Ny.Db(0x1))[2]-B[0])>((
B=Ny.M)[2]-B[0])){this.E$.S(A.aaL(A.fl.Ak));this.PT.S(A.aaL(A.fl.Ak));this.Fa.S(
A.aaL(A.fl.Ak));this.PU.S(A.aaL(A.fl.Ak));}},AAL:function(G){A.pe([this,this.AuO
],this);},_Init:function(aArg){C.JG._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.acg.AK._Init.call(this.Ey={
I:this},0);A.acg.Text._Init.call(this.Fa={I:this},0);A.acg.Text._Init.call(this.
PT={I:this},0);A.acg.Text._Init.call(this.E$={I:this},0);A.acg.Text._Init.call(this.
PU={I:this},0);this.__proto__=C.Tw;this.Y.H(Ayp);this.Y.Bm4(0);this.Y.JO(3);this.
Eh.H(AY7);this.Eh.L(A.jb.H6);this.Ey.H(Aym);this.Ey.L(A.jb.Gg);this.Fa.AZ(0x34);
this.Fa.H(Aah);this.Fa.Hh(2);this.Fa.I7(true);this.Fa.R(UX);this.Fa.L(A.jb.Text);
this.Fa.Aj(true);this.PT.AZ(0x34);this.PT.H(Aah);this.PT.I7(true);this.PT.R(AIa);
this.PT.L(A.jb.Text);this.PT.Aj(true);this.E$.AZ(0x34);this.E$.H(Aah);this.E$.Hh(
2);this.E$.I7(true);this.E$.R(UX);this.E$.L(A.jb.Bm);this.E$.Aj(true);this.PU.AZ(
0x34);this.PU.H(Aah);this.PU.I7(true);this.PU.R(Rk);this.PU.L(A.jb.Text);this.PU.
Aj(true);this.J(this.Y,0);this.J(this.Eh,0);this.J(this.Ey,0);this.J(this.Fa,0);
this.J(this.PT,0);this.J(this.E$,0);this.J(this.PU,0);this.Y.El=[this,this.AAL];
this.Fa.Q2([this,this.AsN]);this.Fa.S(A.aaL(A.fl.Af));this.PT.S(A.aaL(A.fl.Af));
this.E$.Q2([this,this.AsN]);this.E$.S(A.aaL(A.fl.Af));this.PU.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JG;this.Y._Done();this.Eh._Done();this.Ey._Done(
);this.Fa._Done();this.PT._Done();this.E$._Done();this.PU._Done();C.JG._Done.call(
this);},_ReInit:function(){C.JG._ReInit.call(this);this.Y._ReInit();this.Eh._ReInit(
);this.Ey._ReInit();this.Fa._ReInit();this.PT._ReInit();this.E$._ReInit();this.PU.
_ReInit();this.Fa.S(A.aaL(A.fl.Af));this.PT.S(A.aaL(A.fl.Af));this.E$.S(A.aaL(A.
fl.Af));this.PU.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JG._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qy={FS:0,H$:0
,A2d:false,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(AY8+A.aaR(A.acf.AG_));if(
this.A2d){this.Ks((A._GetAutoObject(A.Device.Converter).S3(this.FS,2,true)+CQ)+A.
_GetAutoObject(A.acj.DV).Aaw());this.Background.L(A._GetAutoObject(A.acj.DV).AzK(
this.FS,this.H$));this.De(A._GetAutoObject(A.acj.DV).AzM(this.FS,this.H$));}else{
this.Ks(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CK);this.De(A.jb.Text);}},Cf:
function(G){C.Fu.Cf.call(this,G);var LC=A._GetAutoObject(A.Device.Helper).MM(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LC){this.A2d=true;this.FS=A._GetAutoObject(A.acj.DV).Alw(LC,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2d=false;this.FS=0;}this.H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.An();},_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.Qy;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tv={Y:null,FU:null,Eh:
null,Ey:null,MD:null,Fa:null,E$:null,OW:null,Aay:0,Ajg:0,Pd:0,CP:function(){this.
An();},Ai:function(Ae){C.JG.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axk));this.MD.R(
this.Aay.toFixed());this.Fa.R(this.Ajg.toFixed());this.E$.R(this.Pd.toFixed());}
,Cf:function(G){C.JG.Cf.call(this,G);var AkZ;AkZ=A._GetAutoObject(A.Device.Helper
).A6o(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aay=AkZ.Get(3);this.Ajg=AkZ.Get(2);this.Pd=AkZ.Get(1);this.An();},AsN:
function(G){if((!!this.Aay||!!this.Ajg)||!!this.Pd){this.MD.Z(true);this.Fa.Z(true
);this.E$.Z(true);this.OW.Z(false);}else{this.MD.Z(false);this.Fa.Z(false);this.
E$.Z(false);this.OW.Z(true);}this.FU.H(this.MD.M);this.FU.Z(this.MD.Fl());this.Eh.
H(this.Fa.M);this.Eh.Z(this.Fa.Fl());this.Ey.H(this.E$.M);this.Ey.Z(this.E$.Fl()
);},AuO:function(G){var B;var Ny=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Ny)return;
if(((B=Ny.Db(0x1))[2]-B[0])>((B=Ny.M)[2]-B[0])){this.E$.S(A.aaL(A.fl.Ak));this.Fa.
S(A.aaL(A.fl.Ak));this.MD.S(A.aaL(A.fl.Ak));}},AAL:function(G){A.pe([this,this.AuO
],this);},_Init:function(aArg){C.JG._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.FU={I:this},0);A.acg.AK._Init.call(this.Eh={
I:this},0);A.acg.AK._Init.call(this.Ey={I:this},0);A.acg.Text._Init.call(this.MD={
I:this},0);A.acg.Text._Init.call(this.Fa={I:this},0);A.acg.Text._Init.call(this.
E$={I:this},0);A.acg.Text._Init.call(this.OW={I:this},0);this.__proto__=C.Tv;this.
Y.AZ(0x3F);this.Y.H(Ayp);this.Y.A_b(5);this.Y.JO(3);this.FU.H(AY9);this.FU.L(A.jb.
E1);this.Eh.H(AY_);this.Eh.L(A.jb.H6);this.Ey.H(AIu);this.Ey.L(A.jb.Gg);this.MD.
AZ(0x3C);this.MD.H(Aah);this.MD.Hh(2);this.MD.I7(true);this.MD.R(UX);this.MD.L(A.
jb.Text);this.MD.Aj(true);this.Fa.AZ(0x3C);this.Fa.H(Aah);this.Fa.Hh(2);this.Fa.
I7(true);this.Fa.R(UX);this.Fa.L(A.jb.Text);this.Fa.Aj(true);this.E$.AZ(0x3C);this.
E$.H(Aah);this.E$.Hh(2);this.E$.I7(true);this.E$.R(UX);this.E$.L(A.jb.Bm);this.E$.
Aj(true);this.OW.AZ(0x34);this.OW.H(Aah);this.OW.I7(true);this.OW.A6(0x11);this.
OW.R(A.aaR(A.acf.AR8));this.OW.L(A.jb.Text);this.OW.Aj(true);this.OW.Z(false);this.
J(this.Y,0);this.J(this.FU,0);this.J(this.Eh,0);this.J(this.Ey,0);this.J(this.MD
,0);this.J(this.Fa,0);this.J(this.E$,0);this.J(this.OW,0);this.Y.El=[this,this.AAL
];this.MD.Q2([this,this.AsN]);this.MD.S(A.aaL(A.fl.Af));this.Fa.Q2([this,this.AsN
]);this.Fa.S(A.aaL(A.fl.Af));this.E$.Q2([this,this.AsN]);this.E$.S(A.aaL(A.fl.Af
));this.OW.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JG;this.Y._Done(
);this.FU._Done();this.Eh._Done();this.Ey._Done();this.MD._Done();this.Fa._Done(
);this.E$._Done();this.OW._Done();C.JG._Done.call(this);},_ReInit:function(){C.JG.
_ReInit.call(this);this.Y._ReInit();this.FU._ReInit();this.Eh._ReInit();this.Ey.
_ReInit();this.MD._ReInit();this.Fa._ReInit();this.E$._ReInit();this.OW._ReInit(
);this.OW.R(A.aaR(A.acf.AR8));this.MD.S(A.aaL(A.fl.Af));this.Fa.S(A.aaL(A.fl.Af)
);this.E$.S(A.aaL(A.fl.Af));this.OW.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JG._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMc={_Init:function(aArg){C.Aqg._Init.call(
this,aArg);this.__proto__=C.AMc;this.A4u=1;this.Rg.Cu(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqg._ReInit.call(this);this.Rg.Cu(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.AQW={OH:null,IL:null,H3:null,IJ:null,GL:null,AlY:function(G){A.pe([this,this.
BzU],this);},BzU:function(G){A._GetAutoObject(C.A$).Cg(3);},_Init:function(aArg){
C.Ce._Init.call(this,aArg);C.OH._Init.call(this.OH={I:this},0);C.BW._Init.call(this.
IL={I:this},0);C.SM._Init.call(this.H3={I:this},0);C.AGC._Init.call(this.IJ={I:this
},0);C.Q9._Init.call(this.GL={I:this},0);this.__proto__=C.AQW;var B;this.I8(A.aaR(
A.acf.A$b));this.IL.H(AhW);this.IL.Aj(true);this.IL.T(A.aaR(A.acf.Language));this.
IL.A9V(100);this.H3.H(UW);this.H3.Aj(true);this.H3.T(A.aaR(A.acf.Date));this.H3.
Bh(true);this.IJ.H(Aaf);this.IJ.Aj(true);this.IJ.T(A.aaR(A.acf.Bs));this.GL.H(AhV
);this.GL.Aj(true);this.GL.Z(true);this.GL.T(A.aaR(A.acf.AF9));this.GL.Bh(true);
this.GL.Ar2(false);this.GL.A93(true);this.JU(this.Y,-1);this.JU(this.Ay,-1);this.
J(this.IL,0);this.J(this.H3,0);this.J(this.IJ,0);this.J(this.GL,0);this.IL.Wz(A.
aaL(A.fl.Hr));this.IL.WA(A.aaL(A.fl.Hr));this.IL.As([B=this.OH,B.B8,B.B9]);this.
IL.CI(this.OH);this.H3.AeR([B=this.H3,B.FQ]);this.H3.Go([this,this.D_,this.GN]);
this.H3.Akz(A.aaL(A.ach.Edit));this.H3.Ab7([B=A._GetAutoObject(A.Device.Helper),
B.UY,B.U1]);this.IJ.AeR([B=this.IJ,B.FQ]);this.IJ.Go([this,this.D_,this.GN]);this.
IJ.Akz(A.aaL(A.ach.Edit));this.IJ.Ab7([B=A._GetAutoObject(A.Device.Helper),B.UY,
B.U1]);this.GL.AeR([B=this.GL,B.FQ]);this.GL.Go([this,this.D_,this.GN]);this.GL.
Akz(A.aaL(A.ach.Edit));this.GL.As([B=A._GetAutoObject(A.Device.Device),B.ASA,B.AZ7
]);},_Done:function(){this.__proto__=C.Ce;this.OH._Done();this.IL._Done();this.H3.
_Done();this.IJ._Done();this.GL._Done();C.Ce._Done.call(this);},_ReInit:function(
){C.Ce._ReInit.call(this);this.OH._ReInit();this.IL._ReInit();this.H3._ReInit();
this.IJ._ReInit();this.GL._ReInit();this.I8(A.aaR(A.acf.A$b));this.IL.T(A.aaR(A.
acf.Language));this.H3.T(A.aaR(A.acf.Date));this.IJ.T(A.aaR(A.acf.Bs));this.GL.T(
A.aaR(A.acf.AF9));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.OH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaX={Bg:null,Fy:null,AmW:null,AmF:null,Sa:null,A6I:A.jV,KL:A.jV,ARo:null,ARp:
null,ADd:null,CF:function(G){var B;C.D9.CF.call(this,G);A.zX([this,this.A2L],[B=
A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId],0);this.A2L(this);},E3:function(
G){var B;A.z$([this,this.A2L],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId
],0);C.D9.E3.call(this,G);},Zu:function(E){C.D9.Zu.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.Zu(E);},ATa:function(E){if(this.ARo===E)return;this.
ARo=E;if(!!this.Bg)this.Bg.NZ(E);},ATb:function(E){if(this.ARp===E)return;this.ARp=
E;this.Bov(this);},AS2:function(E){if(this.ADd===E)return;this.ADd=E;A.pe([this,
this.Bou],this);},ArR:function(E){if(this.A6I===E)return;this.A6I=E;this.Sa.R(E);
},Dz:function(E){if(this.KL===E)return;this.KL=E;if(!!this.Bg)this.Bg.Dz(E);},AkS:
function(L1){A.ab5("%s",As_);},ADS:function(){A.ab5("%s",Ald);return false;},Axs:
function(G){if(!!this.Bg)this.HN(this.Bg);this.Bg=A._NewObject(C.Ga,0);this.Bg.H(
As$);this.Bg.Zs(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dz(this.KL);this.Bg.
NZ(this.ARo);this.Bg.Zu(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},Bov:function(
G){var B;if(!!this.Fy)this.HN(this.Fy);this.Fy=(C.EB.isPrototypeOf(B=A._NewObject(
this.ARp,0))?B:null);this.Fy.H(IR);this.J(this.Fy,0);},Bou:function(G){var B;if(
!!this.AmW)this.HN(this.AmW);if(!!this.ADd&&this.ADS()){this.AmW=(C.IZ.isPrototypeOf(
B=A._NewObject(this.ADd,0))?B:null);this.AmW.H(BF);this.AmW.Bh(false);this.J(this.
AmW,0);this.Sa.Z(false);}else this.Sa.Z(true);},A2L:function(G){this.AkS(A._GetAutoObject(
A.Device.Device).Bt);this.Axs(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AK._Init.call(this.AmF={I:this},0);C.CH._Init.call(this.Sa={I:this},
0);this.__proto__=C.AaX;this.AmF.H(BF);this.AmF.L(A.jb.CK);this.Sa.H(AHG);this.Sa.
A6(0x11);this.Sa.L(A.jb.Text);this.J(this.AmF,0);this.J(this.Sa,0);this.Sa.S(A.aaL(
A.fl.Kl));this.Sa.A2(A.aaL(A.fl.Ii));},_Done:function(){this.__proto__=C.D9;this.
AmF._Done();this.Sa._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmF._ReInit();this.Sa._ReInit();this.Sa.S(A.aaL(A.fl.Kl));this.Sa.
A2(A.aaL(A.fl.Ii));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmF)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kg={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bb6],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AIL],0);A.pe([this,this.Bb6],this
);},Dn:function(){return 5;},FY:function(aIndex){return this.AnimalListContentToString.
BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.
Device).Zq(E);},Bb6:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B8,this.B9],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kg;this.Cc.Set(0,0);this.Cc.Set(1,14);this.Cc.Set(2,
1);this.Cc.Set(3,2);this.Cc.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cn;this.AnimalListContentToString._Done();C.Cn._Done.call(this);},_ReInit:function(
){C.Cn._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARt={IL:null
,Y_:null,Zh:null,Ze:null,Zi:null,Y$:null,Zc:null,Zf:null,Zg:null,Zb:null,OH:null
,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.BW._Init.call(this.IL={I:this
},0);C.Na._Init.call(this.Y_={I:this},0);C.Na._Init.call(this.Zh={I:this},0);C.Na.
_Init.call(this.Ze={I:this},0);C.Na._Init.call(this.Zi={I:this},0);C.Na._Init.call(
this.Y$={I:this},0);C.Na._Init.call(this.Zc={I:this},0);C.Na._Init.call(this.Zf={
I:this},0);C.Na._Init.call(this.Zg={I:this},0);C.Na._Init.call(this.Zb={I:this},
0);C.OH._Init.call(this.OH={I:this},0);this.__proto__=C.ARt;var B;this.I8(A.aaR(
A.acf.Settings));this.IL.H(AhW);this.IL.Aj(true);this.IL.T(A.aaR(A.acf.Language)
);this.IL.A9V(100);this.Y_.H(Ata);this.Y_.Aj(true);this.Y_.T(A.aaR(A.acf.ACo));this.
Y_.Nd(16);this.Zh.H(Atb);this.Zh.Aj(true);this.Zh.T(A.aaR(A.acf.AG5));this.Zh.Nd(
22);this.Ze.H(Atc);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.Temperature));this.Ze.
Nd(17);this.Zi.H(Ayq);this.Zi.Aj(true);this.Zi.T(A.aaR(A.acf.ACk));this.Zi.Nd(42
);this.Y$.H(AoA);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.Device));this.Y$.Nd(18);
this.Zc.H(AoA);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.Asl));this.Zc.Nd(19);this.
Zf.H(AY$);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.LinkTransponder));this.Zf.Nd(89
);this.Zg.H(AZa);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.UnlinkTransponder));this.
Zg.Nd(95);this.Zb.H(Ayh);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.ACD));this.Zb.Nd(
76);this.J(this.IL,0);this.J(this.Y_,0);this.J(this.Zh,0);this.J(this.Ze,0);this.
J(this.Zi,0);this.J(this.Y$,0);this.J(this.Zc,0);this.J(this.Zf,0);this.J(this.Zg
,0);this.J(this.Zb,0);this.IL.Wz(A.aaL(A.fl.Hr));this.IL.WA(A.aaL(A.fl.Hr));this.
IL.As([B=this.OH,B.B8,B.B9]);this.IL.CI(this.OH);this.Y_.AR=[B=this.Y_,B.Ng];this.
Zh.AR=[B=this.Zh,B.Ng];this.Ze.AR=[B=this.Ze,B.Ng];this.Zi.AR=[B=this.Zi,B.Ng];this.
Y$.AR=[B=this.Y$,B.Ng];this.Zc.AR=[B=this.Zc,B.Ng];this.Zf.AR=[B=this.Zf,B.Ng];this.
Zg.AR=[B=this.Zg,B.Ng];this.Zb.AR=[B=this.Zb,B.Ng];},_Done:function(){this.__proto__=
C.Ce;this.IL._Done();this.Y_._Done();this.Zh._Done();this.Ze._Done();this.Zi._Done(
);this.Y$._Done();this.Zc._Done();this.Zf._Done();this.Zg._Done();this.Zb._Done(
);this.OH._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this
);this.IL._ReInit();this.Y_._ReInit();this.Zh._ReInit();this.Ze._ReInit();this.Zi.
_ReInit();this.Y$._ReInit();this.Zc._ReInit();this.Zf._ReInit();this.Zg._ReInit(
);this.Zb._ReInit();this.OH._ReInit();this.I8(A.aaR(A.acf.Settings));this.IL.T(A.
aaR(A.acf.Language));this.Y_.T(A.aaR(A.acf.ACo));this.Zh.T(A.aaR(A.acf.AG5));this.
Ze.T(A.aaR(A.acf.Temperature));this.Zi.T(A.aaR(A.acf.ACk));this.Y$.T(A.aaR(A.acf.
Device));this.Zc.T(A.aaR(A.acf.Asl));this.Zf.T(A.aaR(A.acf.LinkTransponder));this.
Zg.T(A.aaR(A.acf.UnlinkTransponder));this.Zb.T(A.aaR(A.acf.ACD));},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMp={EU:null,Init:function(aArg){this.EU.Ahm(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)));},AUc:function(
){this.EU.AeV(this.AOT());this.AaA=!this.EU.EZ.AY;},AiV:function(G){this.EU.Ahm(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.AgR)));this.AUc();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dz(A.aaR(A.acf.A7O));else this.Dz(A.aaR(A.acf.Art));this.An();},AOT:function(
){var BC=A._NewObject(C.Aqu,0);var Qh=A._GetAutoObject(A.Device.Helper).AN$(A._GetAutoObject(
A.Device.Helper).Dv());var Dw=A._GetAutoObject(A.Device.Helper).Aqq(Qh-(86400*this.
Mt));BC.Anx(AZb);BC.Q0([].concat(0,BC.Gh.slice(1,4)));BC.Q0(A.abN(BC.Gh,(Qh-Dw)|
0));BC.Q0(A.abP(BC.Gh,3400));BC.Q0([].concat(BC.Gh.slice(0,3),4200));var Ge=A._GetAutoObject(
A.Device.Device).Bt.Ca();BC.AwL(Ge);BC.Yh();if(Ge>0){var O=0;while(O<Ge){var ApX=
A._GetAutoObject(A.Device.Device).Bt.CE(O,7);var ApY=A._GetAutoObject(A.Device.Device
).Bt.HF(O,6)-Dw;if(ApX>0)BC.Aqh(ApY,ApX);O=O+1;}}return BC;},_Init:function(aArg
){C.K9._Init.call(this,aArg);C.AqY._Init.call(this.EU={I:this},0);this.__proto__=
C.AMp;this.EU.H(AZc);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AE9(C.AGQ);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.EU._Done(
);C.K9._Done.call(this);},_ReInit:function(){C.K9._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K9._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMq={Z3:null,OZ:null,AgL:null,AaA:false,Init:function(aArg){this.Z3.Ahm(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgR)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgL.Z(this.AaA);},CF:function(
G){var B;C.D9.CF.call(this,G);A.zX([this,this.AiV],[B=A._GetAutoObject(A.Device.
Helper),B.UY,B.U1],0);A.zV([this,this.AiV],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Ama],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId],0
);A.pe([this,this.Ama],this);},E3:function(G){var B;A.z$([this,this.AiV],[B=A._GetAutoObject(
A.Device.Helper),B.UY,B.U1],0);A.z9([this,this.AiV],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Ama],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId
],0);C.D9.E3.call(this,G);},Ama:function(G){var Ft=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Ft.CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bl(Ft
);},AiV:function(G){this.Z3.Ahm(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)));this.BnS();this.An();},BnS:function(
){var B;var Ge=A._GetAutoObject(A.Device.Device).Bt.Ca();var K7=A._NewObject(C.Aqu
,0);var Vm=A._NewObject(C.Aqu,0);var Qh=A._GetAutoObject(A.Device.Helper).AN$(A.
_GetAutoObject(A.Device.Helper).Dv());var Dw=A._GetAutoObject(A.Device.Helper).Aqq(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K7.Q0([].concat(0,K7.Gh.slice(1
,4)));K7.Q0(A.abN(K7.Gh,(Qh-Dw)|0));K7.Q0(A.abP(K7.Gh,0));K7.Q0([].concat(K7.Gh.
slice(0,3),150000));K7.Anx(AZd);Vm.Q0([].concat(0,Vm.Gh.slice(1,4)));Vm.Q0(A.abN(
Vm.Gh,(Qh-Dw)|0));Vm.Q0(A.abP(Vm.Gh,0));Vm.Q0([].concat(Vm.Gh.slice(0,3),1500));
Vm.Anx(AZe);K7.AwL(Ge);K7.Yh();Vm.AwL(Ge);Vm.Yh();if(Ge>0){var O=0;var AaC=0;var
Az$=0;var AJ7=0;var A1S=0;var BcJ=true;while(O<Ge){var Al7=A._GetAutoObject(A.Device.
Device).Bt.CE(O,8);var AaO=A._GetAutoObject(A.Device.Device).Bt.HF(O,6)-Dw;if(Al7>
0){K7.Aqh(AaO,Al7);if(!A1S){A1S=AaO;AJ7=Al7;}if(Az$>0){var LC=A._GetAutoObject(A.
Device.Helper).MM(Az$,AaO);if(!!LC){var FS=A._GetAutoObject(A.acj.DV).Alw(LC,AaC
,Al7);if(BcJ){Vm.Aqh(Az$,FS);BcJ=false;}Vm.Aqh(AaO,FS);}}AaC=Al7;Az$=AaO;}O=O+1;
}var AdJ=A.aaR(A.acf.Bgy);var FS=A._GetAutoObject(A.Device.Helper).Bir(A1S,Az$,AJ7
,AaC);AdJ=A._GetAutoObject(A.Device.Helper).Nj(AdJ,P7,FS.toFixed());AdJ=A._GetAutoObject(
A.Device.Helper).Nj(AdJ,Ax6,A._GetAutoObject(A.acj.DV).Aaw());this.OZ.Ih.R(AdJ);
}this.AaA=!K7.AY;if(this.AaA)this.OZ.Ih.R(A.jV);(C.OZ.isPrototypeOf(B=this.OZ.EU
)?B:null).Ant([B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.EC]);this.Z3.AeV(K7);
this.OZ.AeV(Vm);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqY._Init.call(
this.Z3={I:this},0);C.AqY._Init.call(this.OZ={I:this},0);C.AkQ._Init.call(this.AgL={
I:this},0);this.__proto__=C.AMq;this.Z3.H(AZf);this.Z3.T(A.aaR(A.acf.Afq));this.
Z3.AE9(C.AMX);this.OZ.H(AZg);this.OZ.T(A.aaR(A.acf.AG_));this.OZ.AE9(C.OZ);this.
AgL.H(UV);this.AgL.R(A.aaR(A.acf.Akl));this.J(this.Z3,0);this.J(this.OZ,0);this.
J(this.AgL,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z3._Done(
);this.OZ._Done();this.AgL._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z3._ReInit();this.OZ._ReInit();this.AgL._ReInit();this.
Z3.T(A.aaR(A.acf.Afq));this.OZ.T(A.aaR(A.acf.AG_));this.AgL.R(A.aaR(A.acf.Akl));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgL)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMn={
Avb:null,Ava:null,Axm:null,AuI:null,Vy:null,Abm:null,Abl:null,Ack:null,Afd:null,
Init:function(aArg){this.Vy.Ahm(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)));},A4b:function(G){this.Vy.Ab8(this.
AuI);this.Abm.Ab8(this.Avb);this.Abl.Ab8(this.Ava);this.Ack.Ab8(this.Axm);},Axl:
function(){var Ge=A._GetAutoObject(A.Device.Device).Bt.Ca();this.AuI=A._NewObject(
C.Ajs,0);this.Avb=A._NewObject(C.Ajs,0);this.Ava=A._NewObject(C.Ajs,0);this.Axm=
A._NewObject(C.Ajs,0);if(Ge>0){var O=Ge-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.HF(O,6);this.Ats(this.AuI,O,3,D8);this.Ats(this.Avb,O,2,D8);this.
Ats(this.Ava,O,5,D8);this.Ats(this.Axm,O,4,D8);O=O-1;}}this.AaA=!(((this.AuI.AY+
this.Ava.AY)+this.Avb.AY)+this.Axm.AY);A.pe([this,this.A4b],this);},Ats:function(
A0R,Ad,A0Q,Qb){var Als=A._GetAutoObject(A.Device.Device).Bt.I2(Ad,A0Q);if(!!Als)
A0R.Or(Als,Qb);},Ab6:function(E){if(this.Mt===E)return;C.K9.Ab6.call(this,E);if(
!!this.Vy)this.Vy.Ab6(E);if(!!this.Abm)this.Abm.Ab6(E);if(!!this.Abl)this.Abl.Ab6(
E);if(!!this.Ack)this.Ack.Ab6(E);this.Afd.Ab6(E);},AiV:function(G){this.Vy.Ahm(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.AgR)));this.Axl();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dz(A.aaR(A.acf.BjQ));else this.Dz(A.aaR(A.acf.Ank));this.An();},_Init:function(
aArg){C.K9._Init.call(this,aArg);C.Ahs._Init.call(this.Vy={I:this},0);C.Ahs._Init.
call(this.Abm={I:this},0);C.Ahs._Init.call(this.Abl={I:this},0);C.Ahs._Init.call(
this.Ack={I:this},0);C.AT$._Init.call(this.Afd={I:this},0);this.__proto__=C.AMn;
this.Dz(A.aaR(A.acf.Ank));this.Vy.H(AZh);this.Vy.R(A.aaR(A.acf.AGc));this.Abm.H(
AZi);this.Abm.R(A.aaR(A.acf.Feed));this.Abl.H(AZj);this.Abl.R(A.aaR(A.acf.AGe));
this.Ack.H(AIv);this.Ack.R(A.aaR(A.acf.AGf));this.Afd.H(AZk);this.J(this.Vy,-1);
this.J(this.Abm,-1);this.J(this.Abl,-1);this.J(this.Ack,-1);this.J(this.Afd,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.Vy._Done();this.Abm.
_Done();this.Abl._Done();this.Ack._Done();this.Afd._Done();C.K9._Done.call(this);
},_ReInit:function(){C.K9._ReInit.call(this);this.Vy._ReInit();this.Abm._ReInit(
);this.Abl._ReInit();this.Ack._ReInit();this.Afd._ReInit();this.Dz(A.aaR(A.acf.Ank
));this.Vy.R(A.aaR(A.acf.AGc));this.Abm.R(A.aaR(A.acf.Feed));this.Abl.R(A.aaR(A.
acf.AGe));this.Ack.R(A.aaR(A.acf.AGf));},_Mark:function(D){var B;C.K9._Mark.call(
this,D);if((B=this.Avb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ava)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abl)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMo={EU:null,WF:null,Aef:null,A2b:false,Init:function(aArg){this.WF.Ahm(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgR)));},Bk:function(aSize){C.K9.Bk.call(this,aSize);this.Aef.H(this.EU.M);},Ai:
function(Ae){C.K9.Ai.call(this,Ae);var BBp=!this.AaA&&this.A2b;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aef.R(A.aaR(A.acf.A7O));else this.
Aef.R(A.aaR(A.acf.Art));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dz(A.aaR(
A.acf.BjR));else this.Dz(A.aaR(A.acf.BjS));this.Aef.Z(BBp);},AiV:function(G){this.
WF.Ahm(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.AgR)));this.AaA=true;this.A2b=true;this.Axl();this.AUc();this.
An();},AUc:function(){this.EU.AeV(this.AOT());if(!!this.EU.EZ&&(this.EU.EZ.AY>0)
){this.AaA=false;this.A2b=false;}},AOT:function(){var BC=A._NewObject(C.Aqu,0);var
Qh=A._GetAutoObject(A.Device.Helper).AN$(A._GetAutoObject(A.Device.Helper).Dv());
var Dw=A._GetAutoObject(A.Device.Helper).Aqq(Qh-(86400*this.Mt));BC.Anx(AIw);BC.
Q0([].concat(0,BC.Gh.slice(1,4)));BC.Q0(A.abN(BC.Gh,(Qh-Dw)|0));BC.Q0(A.abP(BC.Gh
,3400));BC.Q0([].concat(BC.Gh.slice(0,3),4200));var Ge=A._GetAutoObject(A.Device.
Device).Bt.Ca();BC.AwL(Ge);BC.Yh();if(Ge>0){var O=0;while(O<Ge){var ApX=A._GetAutoObject(
A.Device.Device).Bt.CE(O,7);var ApY=A._GetAutoObject(A.Device.Device).Bt.HF(O,6)-
Dw;if(ApX>0)BC.Aqh(ApY,ApX);O=O+1;}}return BC;},BiG:function(){var Ge=A._GetAutoObject(
A.Device.Device).Bt.Ca();if(Ge>0){var Bfq=A._NewObject(C.Ajs,0);var O=Ge-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.Er(O,A._GetAutoObject(A.Device.Device
).Bt);var LP=A._GetAutoObject(A.Device.Helper).AC3(D3);if(!!LP)Bfq.Or(LP,D3.Timestamp
);O=O-1;}return Bfq;}else return null;},Axl:function(){this.WF.Ab8(this.BiG());if(
!!this.WF.N2&&(this.WF.N2.AY>0))this.AaA=false;},_Init:function(aArg){C.K9._Init.
call(this,aArg);C.AqY._Init.call(this.EU={I:this},0);C.Ahs._Init.call(this.WF={I:
this},0);C.AkQ._Init.call(this.Aef={I:this},0);this.__proto__=C.AMo;this.EU.H(As$
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AE9(C.AGQ);this.WF.H(AZl);this.WF.
R(A.aaR(A.acf.Rating));this.Aef.H(As$);this.J(this.EU,-2);this.J(this.WF,-2);this.
J(this.Aef,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.EU._Done(
);this.WF._Done();this.Aef._Done();C.K9._Done.call(this);},_ReInit:function(){C.
K9._ReInit.call(this);this.EU._ReInit();this.WF._ReInit();this.Aef._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WF.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K9._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aef)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WK={Q:null,Gs:null,Gt:null
,QI:null,AM:0,Gm:0,F0:100,FC:0,Init:function(aArg){},IW:function(G){this.FC=1;C.
Eg.IW.call(this,G);},Bk:function(aSize){C.Eg.Bk.call(this,aSize);this.QI.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QI.Z(this.Gm!==
this.F0);this.QI.L(this.V.AQ);if((this.FC===4)||(this.FC===5))this.QI.L(A.jb.E1);
},Al0:function(G){this.FC=5;this.An();if(this.Bo.Bw){A.pe([this,this.AyJ],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qn:function(G){if(this.FC===5)A.pe([this,this.
AyJ],this);if(this.FC===4)A.pe([this,this.AyK],this);if(this.FC===1)A.pe(this.AR
,this);this.FC=0;this.An();},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,
F[1].call(F[0])));},AcS:function(s){this.C2(s);},As:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcS],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcS],E,0);if(!!E)A.pe([this,this.AcS],this);},Al1:function(G){this.FC=4;this.
An();if(this.Bo.Bw){A.pe([this,this.AyK],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},J_:function(G){this.FC=0;},AyK:function(s){this.J_(s);},J5:function(G){this.
FC=0;},AyJ:function(s){this.J5(s);},By:function(E){if(E<this.Gm)E=this.Gm;if(E>this.
F0)E=this.F0;if(this.AM===E)return;this.AM=E;this.An();},F_:function(E){if(this.
Gm===E)return;this.Gm=E;this.An();},EV:function(E){if(this.F0===E)return;this.F0=
E;this.An();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BM._Init.call(
this.Gs={I:this},0);A.Core.BM._Init.call(this.Gt={I:this},0);A.acg.Ap._Init.call(
this.QI={I:this},0);this.__proto__=C.WK;this.H(JZ);this.Gs.Filter=5;this.Gt.Filter=
4;this.Background.H(JZ);this.V.H(Aad);this.V.R(Lu);this.QI.H(Ayr);this.J(this.QI
,0);this.Gs.BN=[this,this.Al0];this.Gs.D1=[this,this.Al0];this.Gt.BN=[this,this.
Al1];this.Gt.D1=[this,this.Al1];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Cu(null);this.QI.Aw(A.aaL(A.ach.AML));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gs._Done();this.Gt._Done();this.QI._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gs._ReInit();this.Gt.
_ReInit();this.QI._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUz={AC:null,CM:null,HK:
null,Bk:function(aSize){C.WK.Bk.call(this,aSize);this.CM.H([this.QI.M[2],this.QI.
M[1],this.M[2],this.QI.M[3]]);},Ai:function(Ae){C.WK.Ai.call(this,Ae);this.CM.AbF(
0,this.CM.AY-1);if(this.Gm!==this.F0)this.QI.Z(true);},Init:function(aArg){},C2:
function(G){var F;if(!!this.Q&&!!this.AC)this.By(this.AC.DU((F=this.Q,F[1].call(
F[0]))));},J_:function(G){var F;var BQ=this.AM;C.WK.J_.call(this,G);this.By(this.
AM+1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(
this.AM)));A.abo(this.Q,0);}},J5:function(G){var F;var BQ=this.AM;C.WK.J5.call(this
,G);this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(E){var Qt=0;if(this.Gm
!==this.F0){if(E<this.Gm){E=this.F0;Qt=-this.CM.GK*this.CM.AY;}if(E>this.F0){E=this.
Gm;Qt=this.CM.GK;}}C.WK.By.call(this,E);if(!!Qt)this.CM.F$(Qt);this.CM.GO(this.AM
);this.CM.HD(this.CM.Gp,true,this.HK,null);},Hg:function(G){var B;var Gd=this.CM.
G1;var Cz=(C.CH.isPrototypeOf(B=this.CM.Ci)?B:null);if(!Cz)return;Cz.S(this.V.B7
);Cz.A2(A.aaL(A.fl.Af));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FY(Gd));else Cz.
R(Xb);Cz.H(A.abK(Cz.M,[(B=this.CM.M)[2]-B[0],this.CM.GK]));},CI:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.F_(0);this.EV(this.AC.Dn()-1);this.CM.
Ju(this.AC.Dn());this.CM.AbF(0,this.CM.AY-1);}},_Init:function(aArg){C.WK._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gi._Init.call(this.
HK={I:this},0);this.__proto__=C.AUz;this.H(JZ);this.QI.H(AIx);this.CM.Ae3(40);this.
CM.NZ(C.CH);this.HK.WD(23);this.HK.HM(1);this.HK.Fm(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CM.Hg=[this,this.Hg];this.Init(
aArg);},_Done:function(){this.__proto__=C.WK;this.CM._Done();this.HK._Done();C.WK.
_Done.call(this);},_ReInit:function(){C.WK._ReInit.call(this);this.CM._ReInit();
this.HK._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WK._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RU={ALw:0
,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.AG_));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Ks((A._GetAutoObject(A.Device.Converter).Ak9(this.ALw
)+CQ)+A._GetAutoObject(A.acj.DV).AfZ());else this.Ks(A.aaR(A.acf.Unknown));},Cf:
function(G){C.Fu.Cf.call(this,G);this.ALw=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.An();},_Init:function(aArg
){C.Fu._Init.call(this,aArg);this.__proto__=C.RU;},_className:"Application::AnimalInfoItemWeightGain"
};C.APw={Bc:null,Dd:null,Init:function(aArg){var B;A.zX([this,this.Nl],[B=A._GetAutoObject(
A.Device.Device),B.AEq,B.AIK],0);},DY:function(G){C.IG.DY.call(this,G);this.Dd.Aw(
A._GetAutoObject(A.Device.Converter).BgN(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.C5._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);this.__proto__=C.APw;this.Bc.DC(
Ays);this.Bc.DM(Ayt);this.Bc.L(A.jb.Bc);this.Dd.H(AZm);this.Dd.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Dd,0);this.Dd.Aw(A.aaL(A.ach.AjV));this.Init(aArg);},_Done:
function(){this.__proto__=C.IG;this.Bc._Done();this.Dd._Done();C.IG._Done.call(this
);},_ReInit:function(){C.IG._ReInit.call(this);this.Bc._ReInit();this.Dd._ReInit(
);},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANx={ZL:null,Kx:null,Mi:null,Timer:null,ACb:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZL.R(A._GetAutoObject(A.Device.Helper).Nj(A.aaR(A.acf.Bqa),P7,this.ACb.
toFixed()));},CF:function(G){this.Timer.Ar(true);},E3:function(G){this.Timer.Ar(
false);},BAC:function(G){if(this.ACb>1){this.ACb=this.ACb-1;this.An();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Axt();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZL={I:this},0);A.acg.Text.
_Init.call(this.Kx={I:this},0);A.acg.Ap._Init.call(this.Mi={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANx;this.Background.L(A.jb.CS
);this.N.Z(true);this.ZL.H(AZn);this.ZL.KR(true);this.ZL.R(A.jV);this.ZL.L(A.jb.
Text);this.Kx.H(AZo);this.Kx.KR(true);this.Kx.R(A.aaR(A.acf.A44));this.Kx.L(A.jb.
Text);this.Mi.H(AIy);this.J(this.ZL,0);this.J(this.Kx,0);this.J(this.Mi,0);this.
ZL.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af));this.Mi.Aw(A.aaL(A.ach.ABI));this.
Timer.Mx=[this,this.BAC];},_Done:function(){this.__proto__=C.AB;this.ZL._Done();
this.Kx._Done();this.Mi._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZL._ReInit();this.Kx._ReInit();this.Mi._ReInit(
);this.Timer._ReInit();this.Kx.R(A.aaR(A.acf.A44));this.ZL.S(A.aaL(A.fl.Af));this.
Kx.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANe={Kx:null,Amw:null
,QA:null,CP:function(){this.An();},Ai:function(Ae){C.Ad6.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa3<=10)this.Kx.R(A.aaR(A.acf.Bg0));else this.Kx.R(A.aaR(A.acf.
A45));},_Init:function(aArg){C.Ad6._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kx={I:this},0);A.acg.Ap._Init.call(this.Amw={I:this},0);C.CH._Init.call(this.QA={
I:this},0);this.__proto__=C.ANe;this.SN.H(AZp);this.Mi.H(AZq);this.Kx.H(AZr);this.
Kx.KR(true);this.Kx.L(A.jb.Text);this.Amw.H(AIy);this.QA.H(AZs);this.QA.Z(true);
this.QA.R(A.aaR(A.acf.AUa));this.QA.L(A.jb.Text);this.J(this.Kx,0);this.J(this.Amw
,0);this.J(this.QA,0);this.Kx.S(A.aaL(A.fl.Af));this.Amw.Aw(A.aaL(A.ach.ABI));this.
QA.S(A.aaL(A.fl.Af));this.QA.A2(A.aaL(A.fl.Ak));this.QA.Cu(A.aaL(A.fl.Bi));},_Done:
function(){this.__proto__=C.Ad6;this.Kx._Done();this.Amw._Done();this.QA._Done();
C.Ad6._Done.call(this);},_ReInit:function(){C.Ad6._ReInit.call(this);this.Kx._ReInit(
);this.Amw._ReInit();this.QA._ReInit();this.QA.R(A.aaR(A.acf.AUa));this.Kx.S(A.aaL(
A.fl.Af));this.QA.S(A.aaL(A.fl.Af));this.QA.A2(A.aaL(A.fl.Ak));this.QA.Cu(A.aaL(
A.fl.Bi));this.CP();},_Mark:function(D){var B;C.Ad6._Mark.call(this,D);if((B=this.
Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amw)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMa={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AMa;this.
RO.Ar(false);this.RO.Aj(false);this.RO.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVz={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AVz;this.
S2.Ar(false);this.S2.Aj(false);this.S2.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AO0={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdV(5));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.AO0;},_className:"Application::HeaderControlListFilter"};C.APy={DY:function(G){
C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdV(6));},_Init:
function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.APy;},_className:"Application::HeaderWatchListFilter"
};C.APC={D0:null,M5:null,_Init:function(aArg){C.TT._Init.call(this,aArg);C.CH._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.M5={I:this},0);this.__proto__=
C.APC;this.D0.H(Aow);this.D0.R(A.aaR(A.acf.A5B));this.D0.L(A.jb.Text);this.M5.H(
AZt);this.M5.L(A.jb.Text);this.M5.A6(0x12);this.J(this.D0,-2);this.J(this.M5,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bi));this.M5.Aw(A.aaL(A.ach.ADw)
);},_Done:function(){this.__proto__=C.TT;this.D0._Done();this.M5._Done();C.TT._Done.
call(this);},_ReInit:function(){C.TT._ReInit.call(this);this.D0._ReInit();this.M5.
_ReInit();this.D0.R(A.aaR(A.acf.A5B));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.TT._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M5)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.AM$={Cf:function(Ad){C.AjA.Cf.call(this,Ad);if(
!!this.AX){var Oh=this.AX.H1(Ad,8);var BCa=this.AX.Sh(Ad,21);this.Abe.R(A._GetAutoObject(
A.Device.Helper).MM(BCa,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Sn.Z(Oh);this.An();}},_Init:function(aArg){C.AjA._Init.call(this,aArg);this.__proto__=
C.AM$;},_className:"Application::CalfListWatchItem"};C.TT={Ag1:null,Ag3:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag1={I:this},
0);A.acg.Ap._Init.call(this.Ag3={I:this},0);this.__proto__=C.TT;this.Ag1.H(AZu);
this.Ag1.L(A.jb.Text);this.Ag1.A6(0x12);this.Ag3.H(AZv);this.Ag3.L(A.jb.Text);this.
Ag3.A6(0x12);this.JU(this.DS,-1);this.J(this.Ag1,0);this.J(this.Ag3,0);this.Ag1.
Aw(A.aaL(A.ach.AmY));this.Ag3.Aw(A.aaL(A.ach.AbC));},_Done:function(){this.__proto__=
C.Dc;this.Ag1._Done();this.Ag3._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Ag1._ReInit();this.Ag3._ReInit();},_Mark:function(
D){var B;C.Dc._Mark.call(this,D);if((B=this.Ag1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqu={Gh:A.wg,OD:A.wf,Q0:function(E){if(A.aaY(this.Gh,E))return;this.Gh=E;},Anx:
function(E){if(A.aaX(this.OD,E))return;this.OD=E;},_Init:function(aArg){A.acv.ACa.
_Init.call(this,aArg);this.__proto__=C.Aqu;},_className:"Application::BoundCoordList"
};C.AjA={TZ:null,Wr:null,T0:null,Ws:null,Sn:null,Zj:null,Abe:null,AP:null,A_:null
,Ea:null,Lq:null,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TZ.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wr.H(this.TZ.M);this.A_.H([this.TZ.
M[2]-1,0,this.TZ.M[2]+1,aSize[1]]);this.T0.H([this.TZ.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Ws.H(this.T0.M);this.Ea.H([this.T0.M[2]-1,0,this.T0.M[2]+1,aSize[
1]]);this.Sn.H([this.T0.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zj.H(this.Sn.
M);this.Lq.H([this.Sn.M[2]-1,0,this.Sn.M[2]+1,aSize[1]]);this.Abe.H([this.Sn.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K6=this.V.AQ;
this.TZ.AER(K6);this.Wr.L(K6);this.T0.AER(K6);this.Ws.L(K6);this.Sn.AER(K6);this.
Zj.L(K6);this.Abe.L(K6);this.Zj.Z(!this.Sn.Fl());},Cf:function(Ad){if(!this.AX)return;
this.Hn=Ad;var Md=this.AX.CE(Ad,1);var H$=this.AX.AmR(Ad,14);var Auk=this.AX.CE(
Ad,5);var LP=this.AX.I2(Ad,13);this.T(Md.toFixed());if(!!LP){this.TZ.Z(true);this.
TZ.AwB(A._GetAutoObject(A.acj.Assessment).BcR(LP));this.Wr.Z(false);}else{this.TZ.
Z(false);this.Wr.Z(true);}if(Auk>0){this.T0.Z(true);this.T0.AwB(A._GetAutoObject(
A.acj.Assessment).BcR(A._GetAutoObject(A.Device.Converter).AsG(H$,Auk)));this.Ws.
Z(false);}else{this.T0.Z(false);this.Ws.Z(true);}this.An();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kh._Init.call(this.TZ={I:this},0);A.acg.Text._Init.
call(this.Wr={I:this},0);C.Kh._Init.call(this.T0={I:this},0);A.acg.Text._Init.call(
this.Ws={I:this},0);C.Kh._Init.call(this.Sn={I:this},0);A.acg.Text._Init.call(this.
Zj={I:this},0);A.acg.Text._Init.call(this.Abe={I:this},0);A.acg.AK._Init.call(this.
AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.
Ea={I:this},0);A.acg.AK._Init.call(this.Lq={I:this},0);this.__proto__=C.AjA;this.
Wr.H(AZw);this.Wr.R(Aox);this.Ws.H(Aoy);this.Ws.R(Aox);this.Sn.AwB(A.jb.Re);this.
Zj.H(Aoy);this.Zj.R(Rm);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lq.L(A.jb.Bc);this.J(this.TZ,0);this.J(this.Wr,0);this.J(this.T0,0);this.J(
this.Ws,0);this.J(this.Sn,0);this.J(this.Zj,0);this.J(this.Abe,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Lq,0);this.Wr.S(A.aaL(A.fl.Af
));this.Ws.S(A.aaL(A.fl.Af));this.Zj.S(A.aaL(A.fl.Af));this.Abe.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.TZ._Done();this.Wr.
_Done();this.T0._Done();this.Ws._Done();this.Sn._Done();this.Zj._Done();this.Abe.
_Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Lq._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.TZ._ReInit();this.Wr.
_ReInit();this.T0._ReInit();this.Ws._ReInit();this.Sn._ReInit();this.Zj._ReInit(
);this.Abe._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.
Lq._ReInit();this.Wr.S(A.aaL(A.fl.Af));this.Ws.S(A.aaL(A.fl.Af));this.Zj.S(A.aaL(
A.fl.Af));this.Abe.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ws)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pq:null,Anc:null
,EZ:null,DR:null,Arm:0,Arn:0,A67:0,AmI:0,AqH:0,Init:function(aArg){this.ASX(6);this.
ASY(8);this.AS9(A.jb.AV);this.AS_(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.Blv([this.DR.Aa$[0],(B=this.DR.M)[3]-B[1]]);this.WG(this);},ASW:function(
E){if(this.Pq===E)return;this.Pq=E;this.DR.ASW(E);},AS_:function(E){if(this.Arn===
E)return;this.Arn=E;this.DR.AS_(E);},AS9:function(E){if(this.Arm===E)return;this.
Arm=E;this.DR.AS9(E);this.DR.BlB(E);},WG:function(G){var B;while(!!this.DR.Ah)this.
HN(this.DR.Ah);if(!this.EZ)return;this.DR.Anx([((this.EZ.OD[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gh[2]-this.EZ.Gh[0]))|0,this.DR.OD[1]]);this.DR.Anx([this.DR.OD[0]
,((this.EZ.OD[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gh[3]-this.EZ.Gh[1]))|0]);var O;
var Dg=this.DR.OD[1];var D8;var A4m=this.EZ.Gh[1];var BjP=(((B=this.DR.M)[3]-B[1
])/this.DR.OD[1])|0;for(O=0;O<BjP;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dg))-(this.Anc.Ascent+this.Anc.Descent))+2,((B=this.M)[2]-
B[0])-this.Arn,(((B=this.M)[3]-B[1])-(O*Dg))+2]);D8.L(this.A67);D8.S(this.Anc);D8.
A6(0x24);if(O>0)D8.R(this.AJI(A4m));else D8.R(this.AKg());A4m=A4m+this.EZ.OD[1];
this.J(D8,0);}},BFQ:function(s){this.WG(s);},Bmr:function(E){if(this.Anc===E)return;
this.Anc=E;this.An();},Azi:function(A0x){var B;if(!this.EZ||(this.EZ.Gh[3]===this.
EZ.Gh[1]))return 0;return(((A0x-this.EZ.Gh[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gh[
3]-this.EZ.Gh[1]))|0;},AeV:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.AeV(null);else{var BC=A._NewObject(A.acv.ACa,0);BC.AwL(this.EZ.AD8);BC.Yh();var
Jw=E.AlG;while(!!Jw){BC.Aqh(this.Bye(Jw.PZ),this.Byf(Jw.P0));Jw=Jw.Ah;}this.DR.AeV(
BC);this.An();}},Bye:function(Bwr){var B;if(!this.EZ||(this.EZ.Gh[2]===this.EZ.Gh[
0]))return 0;return((Bwr-this.EZ.Gh[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gh[2]-this.
EZ.Gh[0]);},Byf:function(A0x){var B;if(!this.EZ||(this.EZ.Gh[3]===this.EZ.Gh[1])
)return 0;return((A0x-this.EZ.Gh[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gh[3]-this.EZ.
Gh[1]);},AJI:function(AoS){return AoS.toFixed();},AKg:function(){return A.jV;},ASY:
function(E){if(this.AmI===E)return;this.AmI=E;this.DR.ASY(E);},ASX:function(E){if(
this.AqH===E)return;this.AqH=E;this.DR.ASX(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIz);this.A67=A.jb.Text;this.DR.AZ(0x3F);this.DR.H(AIz);this.DR.BmR(AZx);this.
DR.Blj(A.jb.Re);this.DR.Bl_(A.jb.Bc);this.DR.Bnb(A.jb.Re);this.J(this.DR,0);this.
Pq=A.aaL(A.acv.ACu);this.Anc=A.aaL(A.fl.Bi);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.Bmr(A.aaL(A.fl.Bi));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pq)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Anc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMX={AJI:function(AoS){return A._GetAutoObject(
A.Device.Converter).AxV(AoS,0);},AKg:function(){return A._GetAutoObject(A.acj.DV
).AfZ();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AMX;}
,_className:"Application::BodyWeightGraph"};C.OZ={JH:null,Ey:null,Eh:null,FU:null
,ID:null,IE:null,Init:function(aArg){this.ASW(null);},WG:function(G){var B;var F;
C.DR.WG.call(this,G);var AKM=0;var ALB=0;if(!!this.JH){AKM=this.Azi(A._GetAutoObject(
A.Device.Helper).AC2((F=this.JH,F[1].call(F[0]))));ALB=this.Azi(A._GetAutoObject(
A.Device.Helper).AC1((F=this.JH,F[1].call(F[0]))));}this.FU.H(A.abP(this.FU.M,0)
);this.FU.H([].concat(this.FU.M.slice(0,3),((B=this.M)[3]-B[1])-ALB));this.ID.H(
A.abO(this.ID.M,(this.FU.M[3]-((((B=this.ID.M)[3]-B[1])/2)|0))-2));this.Eh.H(A.abP(
this.Eh.M,this.FU.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-
B[1])-AKM));this.IE.H(A.abO(this.IE.M,(this.Eh.M[3]-((((B=this.IE.M)[3]-B[1])/2)|
0))+2));this.Ey.H(A.abP(this.Ey.M,this.Eh.M[3]));this.Ey.H([].concat(this.Ey.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJI:function(AoS){return A._GetAutoObject(A.Device.Converter
).S3(AoS,0,true);},AKg:function(){return A._GetAutoObject(A.acj.DV).Aaw();},Ant:
function(E){if(A.aaZ(this.JH,E))return;if(!!this.JH)A.z$([this,this.AiL],this.JH
,0);this.JH=E;if(!!E)A.zX([this,this.AiL],E,0);if(!!E)A.pe([this,this.AiL],this);
},AiL:function(G){this.An();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ey={I:this},0);A.acg.AK._Init.call(this.Eh={I:this},0);A.
acg.AK._Init.call(this.FU={I:this},0);A.acg.AK._Init.call(this.ID={I:this},0);A.
acg.AK._Init.call(this.IE={I:this},0);this.__proto__=C.OZ;this.Ey.AZ(0xD);this.Ey.
H(Z$);this.Ey.L(A.jb.Gg);this.Eh.AZ(0xD);this.Eh.H(S7);this.Eh.L(A.jb.H6);this.FU.
AZ(0xD);this.FU.H(AcM);this.FU.L(A.jb.E1);this.ID.AZ(0xD);this.ID.H(Aab);this.ID.
Awp(A.jb.H6);this.ID.Awq(A.jb.H6);this.ID.Aws(A.jb.E1);this.ID.Awr(A.jb.E1);this.
IE.AZ(0xD);this.IE.H(Xa);this.IE.Awp(A.jb.Gg);this.IE.Awq(A.jb.Gg);this.IE.Aws(A.
jb.H6);this.IE.Awr(A.jb.H6);this.J(this.Ey,-1);this.J(this.Eh,-1);this.J(this.FU
,-1);this.J(this.ID,-1);this.J(this.IE,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ey._Done();this.Eh._Done();this.FU._Done();this.ID._Done();this.
IE._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ey._ReInit();this.Eh._ReInit();this.FU._ReInit();this.ID._ReInit();this.IE._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JH)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ID)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqY={EU:null,EZ:null,R7:null,Ih:
null,Bc:null,AxC:A.jV,DK:A.jV,AOV:null,Init:function(aArg){},Bk:function(aSize){
A.Core.P.Bk.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R7.
H([30,0,aSize[0]-2,30]);this.Ih.H(this.R7.M);if(!!this.EU)this.EU.H([30,this.R7.
M[3],aSize[0],this.Bc.M[1]]);},Ahm:function(E){if(this.AxC===E)return;this.AxC=E;
this.Ih.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.R7.R(E);},AE9:
function(E){if(this.AOV===E)return;this.AOV=E;this.Bos(this);},Bos:function(G){var
B;if(!!this.EU)this.HN(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOV,0))?B:null);if(!!this.EU){this.EU.H(AZy);this.EU.AeV(this.EZ);this.J(this.EU
,0);}},AeV:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.AeV(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
R7={I:this},0);A.acg.Text._Init.call(this.Ih={I:this},0);A.acg.AK._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqY;this.H(AcN);this.Ar(false);this.R7.H(AZz);this.
R7.A6(0x11);this.R7.R(Lu);this.R7.L(A.jb.Text);this.Ih.A6(0x14);this.Ih.R(A.jV);
this.Ih.L(A.jb.Text);this.Bc.H(AZA);this.Bc.L(A.jb.Bc);this.J(this.R7,0);this.J(
this.Ih,0);this.J(this.Bc,0);this.R7.S(A.aaL(A.fl.Ak));this.Ih.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.R7._Done();this.
Ih._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.R7._ReInit();this.Ih._ReInit();this.Bc._ReInit();this.
R7.S(A.aaL(A.fl.Ak));this.Ih.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMw={Agv:null,GO:function(E
){var F;C.Ga.GO.call(this,E);if(!!this.Agv)(F=this.Agv,F[2].call(F[0],E));},A9f:
function(E){if(A.aaZ(this.Agv,E))return;if(!!this.Agv)A.z$([this,this.A2M],this.
Agv,0);this.Agv=E;if(!!E)A.zX([this,this.A2M],E,0);if(!!E)A.pe([this,this.A2M],this
);},A2M:function(G){var F;if(!this.Agv)return;(F=this.Agv,F[2].call(F[0],this.FH(
)));},_Init:function(aArg){C.Ga._Init.call(this,aArg);this.__proto__=C.AMw;},_Mark:
function(D){var B;C.Ga._Mark.call(this,D);if((B=this.Agv)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AT$={Rc:null
,PV:null,XX:null,XY:null,Mt:0,CP:function(){this.An();},Bk:function(aSize){var B;
A.Core.P.Bk.call(this,aSize);this.Rc.H(A.abI(this.Rc.M,(((B=this.M)[3]-B[1])/2)|
0));this.PV.H(A.abI(this.PV.M,(((B=this.M)[3]-B[1])/2)|0));this.Rc.H(A.abO(this.
Rc.M,(((B=this.M)[3]-B[1])/2)|0));this.PV.H(A.abO(this.PV.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rc.R(A._GetAutoObject(
A.Device.Helper).Nj(A.aaR(A.acf.BjJ),P7,this.Mt.toFixed()));},Ab6:function(E){if(
this.Mt===E)return;this.Mt=E;this.BBc(this);},BBc:function(G){var B;var AJQ=(((B=
this.M)[2]-B[0])/this.Mt)|0;this.XX.H(A.abM(this.XX.M,(((B=this.M)[2]-B[0])-(this.
Mt*AJQ))+(((AJQ/2)-(((B=this.XX.M)[2]-B[0])/2))|0)));this.XY.H(A.abM(this.XY.M,(((
B=this.M)[2]-B[0])-AJQ)+(((AJQ/2)-(((B=this.XY.M)[2]-B[0])/2))|0)));this.An();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rc={
I:this},0);A.acg.Text._Init.call(this.PV={I:this},0);A.acg.Text._Init.call(this.
XX={I:this},0);A.acg.Text._Init.call(this.XY={I:this},0);this.__proto__=C.AT$;this.
H(BF);this.Rc.H(AZB);this.Rc.Hh(5);this.Rc.A6(0x11);this.Rc.L(A.jb.Text);this.PV.
H(AZC);this.PV.Hh(5);this.PV.A6(0x14);this.PV.R(A.aaR(A.acf.AhK));this.PV.L(A.jb.
Text);this.XX.H(Bqg);this.XX.R(A$M);this.XX.L(A.jb.Text);this.XY.H(Bqh);this.XY.
R(A$M);this.XY.L(A.jb.Text);this.J(this.Rc,0);this.J(this.PV,0);this.J(this.XX,0
);this.J(this.XY,0);this.Rc.S(A.aaL(A.fl.Ak));this.PV.S(A.aaL(A.fl.Ak));this.XX.
S(A.aaL(A.fl.Hr));this.XY.S(A.aaL(A.fl.Hr));},_Done:function(){this.__proto__=A.
Core.P;this.Rc._Done();this.PV._Done();this.XX._Done();this.XY._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rc._ReInit(
);this.PV._ReInit();this.XX._ReInit();this.XY._ReInit();this.PV.R(A.aaR(A.acf.AhK
));this.Rc.S(A.aaL(A.fl.Ak));this.PV.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rc)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.PV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K9={V3:null,AjH:null,KL:A.jV,Mt:0,AaA:false,Init:function(aArg){var A1v=A._NewObject(
C.Ki,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RL()<A1v.
C4(O))A1v.Anj=O+1;this.V3.CI(A1v);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjH.
Z(this.AaA);if(this.AaA)this.Bb(null);else this.Bb(this.V3);},CF:function(G){var
B;var F;C.D9.CF.call(this,G);if(!(F=this.V3.Q,F[1].call(F[0])))(F=this.V3.Q,F[2].
call(F[0],this.V3.AC.C4(0)));A.zX([this,this.AI0],[B=A._GetAutoObject(A.Device.Helper
),B.UY,B.U1],0);A.zV([this,this.AI0],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Ama],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId],0);A.pe([this
,this.Ama],this);},E3:function(G){var B;A.z$([this,this.AI0],[B=A._GetAutoObject(
A.Device.Helper),B.UY,B.U1],0);A.z9([this,this.AI0],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Ama],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId
],0);C.D9.E3.call(this,G);},Zu:function(E){if(A.aa0(this.AR,E))return;C.D9.Zu.call(
this,E);this.V3.AR=E;},Ab6:function(E){if(this.Mt===E)return;this.Mt=E;A.pe([this
,this.Ama],this);},Bv1:function(Aq){this.Ab6(Aq);},AiV:function(G){},AI0:function(
s){this.AiV(s);},Dz:function(E){if(this.KL===E)return;this.KL=E;this.AjH.R(E);},
Ama:function(G){var Ft=A._NewObject(A.Device.Filter,0);var Azs=A._NewObject(A.Device.
UInt32FilterCriterion,0);Azs.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhK()-((this.Mt-1)*86400))-1,true);Ft.CW(Azs);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Ft.CW(HV);A._GetAutoObject(
A.Device.Device).Bt.Bl(Ft);},BkG:function(){return this.Mt;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUz._Init.call(this.V3={I:this},0);C.AkQ._Init.call(
this.AjH={I:this},0);this.__proto__=C.K9;this.V3.H(BF);this.AjH.H(UV);this.J(this.
V3,0);this.J(this.AjH,0);this.V3.As([this,this.BkG,this.Bv1]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V3._Done();this.AjH._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V3._ReInit();this.AjH.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V3)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjH)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANE={V_:null,YO:null,RatingMode:null,PB:null,_Init:
function(aArg){C.Ce._Init.call(this,aArg);C.Na._Init.call(this.V_={I:this},0);C.
BW._Init.call(this.YO={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Io._Init.call(this.PB={I:this},0);this.__proto__=C.ANE;var B;this.Hd.R(A.
aaR(A.acf.ACk));this.I8(A.aaR(A.acf.A5u));this.V_.H(AIA);this.V_.Aj(true);this.V_.
T(A.aaR(A.acf.AsR));this.V_.Bh(true);this.V_.Nd(23);this.YO.H(Bqi);this.YO.Aj(true
);this.YO.T(A.aaR(A.acf.A_I));this.YO.Bh(false);this.PB.H(Bqj);this.PB.Aj(true);
this.PB.T(A.aaR(A.acf.A5r));this.PB.Bh(true);this.PB.F_(3);this.PB.EV(14);this.PB.
IM(A.aaR(A.acf.Ki)+AIB);this.PB.I9(A.aaR(A.acf.GH)+AIB);this.J(this.V_,0);this.J(
this.YO,0);this.J(this.PB,0);this.V_.AR=[B=this.V_,B.Ng];this.YO.As([B=this.RatingMode
,B.B8,B.B9]);this.YO.CI(this.RatingMode);this.PB.As([B=A._GetAutoObject(A.Device.
Device),B.A8k,B.BaP]);},_Done:function(){this.__proto__=C.Ce;this.V_._Done();this.
YO._Done();this.RatingMode._Done();this.PB._Done();C.Ce._Done.call(this);},_ReInit:
function(){C.Ce._ReInit.call(this);this.V_._ReInit();this.YO._ReInit();this.RatingMode.
_ReInit();this.PB._ReInit();this.Hd.R(A.aaR(A.acf.ACk));this.I8(A.aaR(A.acf.A5u)
);this.V_.T(A.aaR(A.acf.AsR));this.YO.T(A.aaR(A.acf.A_I));this.PB.T(A.aaR(A.acf.
A5r));this.PB.IM(A.aaR(A.acf.Ki)+AIB);this.PB.I9(A.aaR(A.acf.GH)+AIB);},_Mark:function(
D){var B;C.Ce._Mark.call(this,D);if((B=this.V_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Au1={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hh(10);},Ai:function(
Ae){var B;C.Cp.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fr=((Ae&0x20)===0x20
);var GA=this.Bo.Bw;var FN=A.jb.Ad8;var GS=A.jb.Bm;if(this.Hf){FN=A.jb.Bm;GS=A.jb.
Text;}if(!G$){this.Background.L(FN);this.V.L(A.jb.CK);}else if(GA){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fr){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FN);this.V.L(GS);}this.LF=G$;this.KD=Fr;this.Qo=GA;
},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.Au1;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cp._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.AC_={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,
B.PM,B.EC],0);A.pe([this,this.DY],this);},De:function(E){C.BR.De.call(this,E);this.
Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Aw(A.aaL(A.ach.AC7));break;case 1:this.Ap.Aw(A.aaL(A.ach.APg));break;
case 2:this.Ap.Aw(A.aaL(A.ach.APi));break;default:A.ab5("%s%e",AZD,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC_;this.Ap.H(AZE);this.
J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC7));this.Init(aArg);},_Done:function(){this.
__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.AC$={Ap:null,Init:function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Helper).W,B.PM,B.EC],0);A.pe([this,this.DY],this);},De:function(E){C.BR.
De.call(this,E);this.Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Aw(A.aaL(A.ach.AC8));break;case 1:this.Ap.Aw(A.aaL(
A.ach.APh));break;case 2:this.Ap.Aw(A.aaL(A.ach.APj));break;default:A.ab5("%s%e"
,AZD,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC$;
this.Ap.H(AZE);this.J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC8));this.Init(aArg);},
_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fu={BT:null,AxQ:A.jV,De:function(E){C.JG.De.call(
this,E);this.BT.L(E);},Ks:function(E){if(this.AxQ===E)return;this.AxQ=E;this.BT.
R(E);},_Init:function(aArg){C.JG._Init.call(this,aArg);C.CH._Init.call(this.BT={
I:this},0);this.__proto__=C.Fu;this.BT.AZ(0x34);this.BT.H(Ayp);this.BT.A6(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(
A.fl.Ak));this.BT.Cu(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.JG;this.
BT._Done();C.JG._Done.call(this);},_ReInit:function(){C.JG._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.BT.Cu(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.JG._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOE={Ww:function(G){var B;this.Agp();this.AL9(A.aaR(A.acf.BiU),[this,this.Bnq],[
B=A._GetAutoObject(A.Device.Device),B.A8l,B.BaQ]);A._GetAutoObject(C.BS).FT();this.
IY(A.aaR(A.acf.AVa),[this,this.ATC],5);this.IY(A.aaR(A.acf.AU_),[this,this.ATB],
7);this.IY(A.aaR(A.acf.AnZ),[this,this.AwO],2);this.IY(A.aaR(A.acf.AdQ),[this,this.
AEN],1);this.IY(A.aaR(A.acf.Aux),[this,this.AEH],0);A._GetAutoObject(C.BS).FT();
A._GetAutoObject(C.BS).NC(A.aaR(A.acf.And)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},DE:function(G){},Abr:function(){return C.ABY;},Abs:function(
){return C.ADg;},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(
A.Device.Helper).A6u());},HO:function(G){C.GW.HO.call(this,G);if(this.Akh()===false
){this.N.Cs(A.aaL(A.ach.AbC));this.N.Cl=[this,this.A5W];this.N.FJ(A.jV);}this.N.
ON(false);this.N.OO(false);},Agc:function(){A._GetAutoObject(C.A$).Cg(44);},Bnq:
function(G){A._GetAutoObject(A.Device.Device).AwE(!A._GetAutoObject(A.Device.Device
).AqT);this.An7(this);},An7:function(G){var Be=A._GetAutoObject(A.Device.Device).
Am.Filter.E8();var Av=Be.DL(30,3);if(!!Av)Be.Nh(Av);if(A._GetAutoObject(A.Device.
Device).AqT){var Az_=A._NewObject(A.Device.UInt32FilterCriterion,0);var A2l=A._GetAutoObject(
A.Device.Helper).Dv()-21600;Az_.Initialize(30,3,A2l,true);Be.CW(Az_);}A._GetAutoObject(
A.Device.Device).Am.Bl(Be);},_Init:function(aArg){C.GW._Init.call(this,aArg);this.
__proto__=C.AOE;var B;this.Dq(C.APc);this.Dz(A.aaR(A.acf.A7L));this.AwJ([B=A._GetAutoObject(
A.Device.Device),B.A8j,B.BaO]);},_ReInit:function(){C.GW._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7L));},_className:"Application::FreshCowListScreen"};C.AOD={_Init:
function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AOD;this.Lb.Ar(false);
this.Lb.Aj(false);this.Lb.Z(false);this.Jn.Ar(false);this.Jn.Aj(false);this.Jn.Z(
false);},_className:"Application::FreshCowListFilterScreen"};C.APc={DY:function(
G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdV(7));
},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.APc;},_className:
"Application::HeaderFreshCowListFilter"};C.ADg={Jt:null,D0:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.Jt={I:this},0);C.CH._Init.call(
this.D0={I:this},0);this.__proto__=C.ADg;this.A9A(1);this.Jt.H(Bqk);this.Jt.R((A.
aaR(A.acf.Calving)+Aag)+A.aaR(A.acf.A$i));this.Jt.L(A.jb.Text);this.D0.H(Bql);this.
D0.R(A.aaR(A.acf.AD0));this.D0.L(A.jb.Text);this.J(this.Jt,0);this.J(this.D0,0);
this.Jt.S(A.aaL(A.fl.Ak));this.Jt.A2(A.aaL(A.fl.Bi));this.D0.S(A.aaL(A.fl.Ak));this.
D0.A2(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.Dc;this.Jt._Done();this.
D0._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
Jt._ReInit();this.D0._ReInit();this.Jt.R((A.aaR(A.acf.Calving)+Aag)+A.aaR(A.acf.
A$i));this.D0.R(A.aaR(A.acf.AD0));this.Jt.S(A.aaL(A.fl.Ak));this.Jt.A2(A.aaL(A.fl.
Bi));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.ABY={AGR:null,KO:null,UB:null,AP:null,A_:null,Init:function(aArg){},Bk:function(
aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.UB.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A_.H([this.UB.M[2]-1,0,this.UB.M[2]+1,aSize[1]]);this.KO.H([this.UB.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.KO.L(this.V.AQ);this.
UB.De(this.V.AQ);},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var
Iw=this.AX.CE(Ad,0);var Md=this.AX.CE(Ad,1);var A2k=this.AX.CE(Ad,29);var Aly=this.
AX.HF(Ad,28);this.T(Md.toFixed());this.KO.R(A2k.toFixed());this.UB.Ab6(A._GetAutoObject(
A.Device.Device).AqS+1);this.UB.Bm5(Aly);this.UB.R(A._GetAutoObject(A.acj.KJ).AjM(
Aly));A._GetAutoObject(A.Device.Device).SL(Ad);this.Ap7(Iw);this.Axl();A._GetAutoObject(
A.Device.Device).Bt.Bl(null);this.An();}},A4b:function(G){this.UB.Ab8(this.AGR);
},Axl:function(){var Ge=A._GetAutoObject(A.Device.Device).Bt.Ca();this.AGR=A._NewObject(
C.Ajs,0);if(Ge>0){var O=Ge-1;while(O>=0){var D8=A._GetAutoObject(A.Device.Device
).Bt.HF(O,6);this.Ats(this.AGR,O,9,D8);O=O-1;}}A.pe([this,this.A4b],this);},Ats:
function(A0R,Ad,A0Q,Qb){var Als=A._GetAutoObject(A.Device.Device).Bt.I2(Ad,A0Q);
if(!!Als)A0R.Or(Als,Qb);},Ap7:function(Ac3){var Ft=A._NewObject(A.Device.Filter,
0);var Azs=A._NewObject(A.Device.UInt32FilterCriterion,0);Azs.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).ZQ(A._GetAutoObject(A.Device.Device).AqS)-1,true);Ft.CW(Azs);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,Ac3,true);Ft.
CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bl(Ft);},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.Text._Init.call(this.KO={I:this},0);C.AT6._Init.call(this.
UB={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);this.__proto__=C.ABY;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.J(
this.KO,0);this.J(this.UB,0);this.J(this.AP,0);this.J(this.A_,0);this.KO.S(A.aaL(
A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.KO._Done();
this.UB._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.KO._ReInit();this.UB._ReInit();this.AP._ReInit(
);this.A_._ReInit();this.KO.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AGR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.AT6={AUN:0,Init:function(aArg
){},AOL:function(){return A._GetAutoObject(A.Device.Helper).Aqq(this.AUN);},AON:
function(){return this.AOL()+(this.Mt*86400);},Bm5:function(E){if(this.AUN===E)return;
this.AUN=E;A.pe([this,this.WG],this);},_Init:function(aArg){C.Ahs._Init.call(this
,aArg);this.__proto__=C.AT6;this.Bc.H(Bqm);this.Bm2(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Dn:function(){if(this.K&&this.K.Dn)return this.K.Dn.apply(this,arguments);else
return C.FactoryResetScope.Bt2.apply(this,arguments);},Bt2:function(){return 2;}
,FY:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.FactoryResetScopeToString.
BH(this.C4(aIndex));},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.FactoryResetScopeToString.
_Init.call(this.FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;
this.Cc.Set(0,0);this.Cc.Set(1,1);var Lv=this._variants();if(Lv){this.K={};Lv._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Cn;this.FactoryResetScopeToString._Done();C.Cn._Done.call(this);},_ReInit:function(
){C.Cn._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Bgc:false,Init:function(
aArg){this.Bgc=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Ew:function(
G){if(this.Bdj){A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.
Device).Am);if(this.Bgc)A._GetAutoObject(A.Device.Device).A9(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A9(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Ew.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.AR7={Ww:function(G){this.Agp();A._GetAutoObject(C.BS).Qx(A.aaR(A.acf.Settings
),[this,this.A3k]);A._GetAutoObject(C.BS).FT();this.AL7();A._GetAutoObject(C.BS).
NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.
BS).NC(A.aaR(A.acf.ARl)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},DE:function(G){},Abr:function(){return C.Aqv;},Abs:function(){return C.Aq2;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).ACU());},HO:function(G){C.Tu.HO.call(this,G);if(this.Akh()===false){this.
N.Cs(A.aaL(A.ach.Avs));this.N.Cl=[this,this.ANX];this.N.FJ(A.jV);}this.N.ON(false
);this.N.OO(false);},Agc:function(){A._GetAutoObject(C.A$).Cg(47);},A3k:function(
G){A._GetAutoObject(A.Device.Device).Ds(0);A._GetAutoObject(C.A$).Cg(89);},_Init:
function(aArg){C.Tu._Init.call(this,aArg);this.__proto__=C.AR7;this.Dq(C.ADa);this.
Dz(A.aaR(A.acf.A7H));this.AS$(A._GetAutoObject(C.Av1));},_ReInit:function(){C.Tu.
_ReInit.call(this);this.Dz(A.aaR(A.acf.A7H));},_className:"Application::NoTransponderListScreen"
};C.AR6={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AR6;this.
KV.Ar(false);this.KV.Aj(false);this.KV.Z(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ADa={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdV(8));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.ADa;},_className:"Application::HeaderNoTransponderListFilter"};C.ABH={AuN:null
,FY:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuN.BH(aIndex
);},_Init:function(aArg){C.Gb._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuN={I:this},0);this.__proto__=C.ABH;},_Done:function(){this.__proto__=
C.Gb;this.AuN._Done();C.Gb._Done.call(this);},_ReInit:function(){C.Gb._ReInit.call(
this);this.AuN._ReInit();},_Mark:function(D){var B;C.Gb._Mark.call(this,D);if((B=
this.AuN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AL2={Cp:null,AdY:null,Init:function(aArg){this.Bb(this.Cp);},KQ:function(){if(
!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CC=[this,this.XB];this.Bx.Cl=null;
this.Bx.Cm=[this,this.A2X];this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.
ach.Aev));}return this.Bx;},AAo:function(G){var Aa=(C.Aji.isPrototypeOf(G)?G:null
);if(Aa===this.Cp)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.AdY)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$N);},_Init:function(aArg){C.Fn._Init.call(this,aArg);C.Aji._Init.call(this.
Cp={I:this},0);C.Aji._Init.call(this.AdY={I:this},0);this.__proto__=C.AL2;this.H(
Rl);this.Text.R(A.aaR(A.acf.ActionSettings));this.Cp.H(IR);this.Cp.T(A.aaR(A.acf.
AD$));this.AdY.H(P8);this.AdY.T(A.aaR(A.acf.Tt));this.J(this.Cp,0);this.J(this.AdY
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cp.AR=[this,this.AAo];this.AdY.AR=[this,this.
AAo];this.Init(aArg);},_Done:function(){this.__proto__=C.Fn;this.Cp._Done();this.
AdY._Done();C.Fn._Done.call(this);},_ReInit:function(){C.Fn._ReInit.call(this);this.
Cp._ReInit();this.AdY._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Cp.
T(A.aaR(A.acf.AD$));this.AdY.T(A.aaR(A.acf.Tt));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fn._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AdY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BFb={Undefined:0,BE$:1,BFa:2,IdScanned:3,BD_:4,BDa:5,BDU:6};C.AMe={A_4:function(
){A._GetAutoObject(A.Device.Device).A9(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BeR]);},_Init:function(aArg){C.AuD._Init.call(
this,aArg);this.__proto__=C.AMe;this.Gb.As(1);this.ATf(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aep={VS:null,VT:null,VU:null,AgV:null,AgW:null,AgX:null,CC:null,Cl:null,Cm:null
,An0:A.jV,An1:A.jV,An2:A.jV,Aq9:0,Aq_:0,Aq$:0,Ahc:0,ZD:false,ZC:false,Asn:false,
AsB:false,AsA:false,Ajy:function(Fc){this.CC=Fc.CC;this.Cl=Fc.Cl;this.Cm=Fc.Cm;this.
An0=Fc.An0;this.An1=Fc.An1;this.An2=Fc.An2;this.Ahc=Fc.Ahc;this.VS=Fc.VS;this.VT=
Fc.VT;this.VU=Fc.VU;this.AgV=Fc.AgV;this.AgW=Fc.AgW;this.AgX=Fc.AgX;this.AsA=Fc.
AsA;this.AsB=Fc.AsB;this.Asn=Fc.Asn;this.ZC=Fc.ZC;this.ZD=Fc.ZD;this.Aq9=Fc.Aq9;
this.Aq_=Fc.Aq_;this.Aq$=Fc.Aq$;},AkP:function(Fc){Fc.CC=this.CC;Fc.Cl=this.Cl;Fc.
Cm=this.Cm;Fc.Hu(this.An0);Fc.FJ(this.An1);Fc.CV(this.An2);Fc.AFd(this.Ahc);Fc.AE6(
this.VS);Fc.ArP(this.VT);Fc.Anw(this.VU);Fc.CY(this.AgV);Fc.Cs(this.AgW);Fc.C6(this.
AgX);Fc.ON(this.AsA);Fc.OO(this.AsB);Fc.Asn=this.Asn;Fc.ZC=this.ZC;Fc.ZD=this.ZD;
Fc.Bma(this.Aq9);Fc.AS5(this.Aq_);Fc.A9L(this.Aq$);},_Init:function(aArg){this.__proto__=
C.Aep;this.VS=A.aaL(A.fl.Ak);this.VT=A.aaL(A.fl.Ak);this.VU=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VS=A.aaL(
A.fl.Ak);this.VT=A.aaL(A.fl.Ak);this.VU=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VT)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.VU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgW)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AgX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CC)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Asx._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dq(C.AC_);},_className:"Application::NewAnimalSetTransponderScreen"};C.C7={Aba:null
,CountryToString:null,Dn:function(){return 40;},C4:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},FY:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Ls(aIndex);},DU:function(A7){return A7;
},HH:function(){return 39;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.
Aba)(F=this.Aba,F[2].call(F[0],E));},A1n:function(G){var F;if(!!this.Aba)this.Q=(
F=this.Aba,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B8,this.B9],0);},AEY:
function(E){if(A.aaZ(this.Aba,E))return;if(!!this.Aba)A.z$([this,this.A1n],this.
Aba,0);this.Aba=E;if(!!this.Aba)A.zX([this,this.A1n],this.Aba,0);A.pe([this,this.
A1n],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C7;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Aba)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OY={AC:null,Q:null,Background:null,Im:null,Il:null,MY:
0,AM:0,Gm:0,F0:0,Af$:function(G){this.J_(this);},Bk:function(aSize){A.Core.P.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.
L(A.jb.AV);this.Dr(256);}else{this.Background.L(this.MY);this.Dr(256);}},Af_:function(
G){this.J5(this);},CI:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3i],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3i],E,0);if(!!E)A.pe([this
,this.A3i],this);},CT:function(E){if(this.MY===E)return;this.MY=E;this.An();},J_:
function(G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},J5:function(
G){var F;var BQ=this.AM;this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(
E){if(E<this.Gm)E=this.F0;if(E>this.F0)E=this.Gm;if(this.AM===E)return;this.AM=E;
this.An();},F_:function(E){if(this.Gm===E)return;this.Gm=E;this.An();},EV:function(
E){if(this.F0===E)return;this.F0=E;this.An();},C2:function(G){var F;if(!!this.Q)
this.By(this.AC.DU((F=this.Q,F[1].call(F[0]))));},As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},A3i:function(G){var F;if(!!this.
AC){this.F_(0);this.EV(this.AC.HH());if(!!this.Q)this.By(this.AC.DU((F=this.Q,F[
1].call(F[0]))));this.An();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);A.Core.BM._Init.call(this.Im={
I:this},0);A.Core.BM._Init.call(this.Il={I:this},0);this.__proto__=C.OY;this.H(A$O
);this.Background.H(Atd);this.Im.Filter=4;this.Il.Filter=5;this.MY=A.jb.CK;this.
J(this.Background,0);this.Im.BN=[this,this.Af$];this.Im.D1=[this,this.Af$];this.
Il.BN=[this,this.Af_];this.Il.D1=[this,this.Af_];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Im._Done();this.Il._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Im._ReInit();this.Il._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RQ={A1f:A.jV,Ai:function(
Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5d));this.Ks(this.A1f);},Cf:function(
G){C.Fu.Cf.call(this,G);var Aly=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Aly)this.A1f=Xb;else this.A1f=A._GetAutoObject(A.acj.KJ).AjM(Aly);this.An();
},_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RQ;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RR={A2j:0,Ai:function(Ae){C.Fu.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARj));if(this.A2j>0)this.Ks(this.A2j.toFixed());else
this.Ks(A.aaR(A.acf.Unknown));},Cf:function(G){C.Fu.Cf.call(this,G);this.A2j=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.An();},_Init:function(aArg){C.Fu._Init.call(
this,aArg);this.__proto__=C.RR;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dn:function(){return 5;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},FY:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 4;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akx(E);},A1H:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B8,
this.B9],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1H],[B=this.Animal,B.ASo,B.Akx],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1H],[B=this.Animal,B.ASo,B.Akx],0);A.pe([this,this.A1H],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dn:function(){return 99;},C4:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},FY:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BH(aIndex);},DU:function(A7){return A7;
},HH:function(){return 98;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal
)this.Animal.NY(E);},A1d:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B8,this.B9],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1d],[B=this.Animal,B.Av5,B.NY],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1d],[B=this.Animal,B.Av5,B.NY],0);A.pe([
this,this.A1d],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARE={V6:null,YM:null,AeH:null,Init:function(
aArg){this.Bb(this.V6);},Adq:function(G){var Aa=(C.Cp.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YM)this.BxK();else if(Aa===this.V6)this.BAr(this);else throw new
Error(Ax$);A._GetAutoObject(A.Device.Device).Ds(0);},BAr:function(G){var B;var F;
var Vi=(C.Amq.isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null
);if(!Vi){A.ab5("%s",Bqn);return;}Vi.AKC(this);},BxK:function(){A._GetAutoObject(
A.Device.Helper).W.AGz(true);A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(
A.Device.Device).Am);A._GetAutoObject(A.Device.Device).A9(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ml._Init.call(this.V6={I:this},0);C.Ml._Init.call(this.YM={
I:this},0);C.VM._Init.call(this.AeH={I:this},0);this.__proto__=C.ARE;var B;this.
H(AcN);this.V6.H(P8);this.V6.Ar(true);this.V6.T(A.aaR(A.acf.A_K));this.V6.Bh(true
);this.YM.H(IR);this.YM.Ar(true);this.YM.T(A.aaR(A.acf.A4B));this.YM.Bh(true);this.
AeH.H(BF);this.AeH.T(A.aaR(A.acf.ACI));this.AeH.Bh(true);this.J(this.V6,0);this.
J(this.YM,0);this.J(this.AeH,0);this.V6.AR=[this,this.Adq];this.YM.AR=[this,this.
Adq];this.AeH.AST([B=A._GetAutoObject(A.Device.Device),B.Arw,B.Atf]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V6._Done();this.YM._Done(
);this.AeH._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V6._ReInit();this.YM._ReInit();this.AeH._ReInit();this.V6.
T(A.aaR(A.acf.A_K));this.YM.T(A.aaR(A.acf.A4B));this.AeH.T(A.aaR(A.acf.ACI));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VM={
Ai:function(Ae){C.T9.Ai.call(this,Ae);var FN=A.jb.CK;var GS=A.jb.Text;if(this.Hf
){FN=A.jb.Text;GS=A.jb.Bm;}if(!this.LF){this.Background.L(FN);this.V.L(A.jb.Am0);
}else if(this.Qo){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KD){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.
L(GS);}if(this.Amy){this.Mj.Cv(1);this.Mj.L(A.jb.H6);}else{this.Mj.Cv(0);this.Mj.
L(A.jb.Bm);}},_Init:function(aArg){C.T9._Init.call(this,aArg);this.__proto__=C.VM;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AvU={C8:null,A1:null,AF:
null,Aki:null,QT:null,EN:null,ARW:Lu,Bk:function(aSize){C.Cp.Bk.call(this,aSize);
var FN=A.jb.CK;var GS=A.jb.Text;if(this.Hf){FN=A.jb.Bm;GS=A.jb.Text;}this.Background.
L(FN);this.V.L(GS);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CA;C.Cp.Ai.call(this
,Ae);this.Aki.L(this.V.AQ);this.QT.L(this.V.AQ);this.QT.R(Bqo);this.T(((this.ARW+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak5(840003123456789).toFixed(
));if(!!this.A1&&!!this.AF){var A2o=this.QT.Afc([(this.QT.String.length-(F=this.
AF,F[1].call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3H=this.QT.Afc([this.
QT.String.length-(F=this.AF,F[1].call(F[0])),0]);var AA$=this.QT.Db();this.EN.H([
A2o[0]-1,AA$[1],A3H[0]+1,AA$[3]]);}else this.EN.H(this.QT.Db());},DB:function(E){
if(this.C8===E)return;this.C8=E;this.Aki.Aw(E);},OL:function(E){if(A.aaZ(this.A1
,E))return;if(!!this.A1)A.z$([this,this.AaG],this.A1,0);this.A1=E;if(!!E)A.zX([this
,this.AaG],E,0);if(!!E)A.pe([this,this.AaG],this);},PN:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaH],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaH],E,0);if(!!E)A.pe([this,this.AaH],this);},AaH:function(G){this.An(
);},AaG:function(G){this.An();},Ar1:function(E){if(this.ARW===E)return;this.ARW=
E;this.An();},_Init:function(aArg){C.Cp._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Aki={I:this},0);A.acg.Text._Init.call(this.QT={I:this},0);A.acg.BU._Init.call(
this.EN={I:this},0);this.__proto__=C.AvU;this.H(JZ);this.V.A6(0x11);this.Aki.H(P6
);this.QT.H(Bqp);this.EN.H(Bqq);this.EN.Nf(2);this.EN.L(A.jb.E1);this.J(this.Aki
,0);this.J(this.QT,0);this.J(this.EN,0);this.QT.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Cp;this.Aki._Done();this.QT._Done();this.EN._Done();C.Cp._Done.
call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.Aki._ReInit();this.
QT._ReInit();this.EN._ReInit();this.QT.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Cp._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aki)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AT1:0,Init:
function(aArg){var B;A.zX([this,this.Bd$],[B=A._GetAutoObject(A.Device.Device),B.
AEq,B.AIK],0);A.pe([this,this.Bd$],this);},HO:function(G){C.Tx.HO.call(this,G);if(
this.AjQ)this.N.Cs(A.aaL(A.ach.AD));else this.N.Cs(A.aaL(A.ach.ANf));this.N.C6(A.
aaL(A.ach.Options));this.N.FJ(A.jV);this.N.CV(A.jV);this.N.Cl=[this,this.A_t];this.
N.Cm=[this,this.Ww];this.N.ArP(A.aaL(A.fl.Ak));this.N.Anw(A.aaL(A.fl.Ak));},MT:function(
G){this.Bev(this);},Ol:function(G){this.BAm(this);},AdN:function(Aia,Aib,BwO){A.
_GetAutoObject(C.BS).ABz(Aia,Aib,[this,this.A8F,this.ATi],BwO);},Ww:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjQ){A._GetAutoObject(C.BS).
Qx(A.aaR(A.acf.BhB),[this,this.Bnm]);A._GetAutoObject(C.BS).FT();}this.AdN(A.aaR(
A.acf.Rating),[this,this.ATG],3);this.AdN(A.aaR(A.acf.Afq),[this,this.ATI],2);this.
AdN(A.aaR(A.acf.Temperature),[this,this.ATH],1);this.AdN(A.aaR(A.acf.AdQ),[this,
this.Bnj],0);A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.BhF
));A._GetAutoObject(A.Device.Device).Ds(6);},ATi:function(E){if(this.AT1===E)return;
this.AT1=E;A.abo([this,this.A8F,this.ATi],0);},Bd$:function(G){this.ATi(A._GetAutoObject(
A.Device.Device).D9);},A8F:function(){return this.AT1;},_Init:function(aArg){C.Tx.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vv:null
,Init:function(aArg){var B;A.zX([this,this.Af7],[B=A._GetAutoObject(A.Device.Device
).Am,B.Fk,B.Fo],0);A.pe([this,this.Bgh],this);A.pe([this,this.Q6],this);},CF:function(
G){C.Tx.CF.call(this,G);A.pe([this,this.Bgn],this);},AGF:function(G){C.Tx.AGF.call(
this,G);if(!!this.Ld)this.Ahv(this.Ld,this.Vv);},HO:function(G){C.Tx.HO.call(this
,G);this.N.Cs(A.aaL(A.ach.AQT));this.N.C6(A.aaL(A.ach.AQU));if(this.AjQ)this.N.AS5(
0);else this.N.AS5(1);this.N.A9L(A._GetAutoObject(A.Device.Converter).BgM(A._GetAutoObject(
A.Device.Device).D9));this.N.FJ(A.jV);this.N.CV(A.jV);this.N.Cl=[this,this.Bk$];
this.N.Cm=[this,this.Bno];this.N.ArP(A.aaL(A.fl.Ak));this.N.Anw(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).Am.QF()){this.N.I4.Dr(100);this.N.Cl=null;
}else this.N.I4.Dr(255);if(!A._GetAutoObject(A.Device.Device).Am.Ca()){this.N.Lc.
Dr(100);this.N.Cm=null;}else this.N.Lc.Dr(255);if(A._GetAutoObject(A.Device.Device
).Am.Ca()<=1){this.N.TW.Dr(100);this.N.TX.Dr(100);}else{this.N.TW.Dr(255);this.N.
TX.Dr(255);}},MT:function(G){if(A._GetAutoObject(A.Device.Device).Am.Ca()<=1)return;
var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB+1;if(LB>=A._GetAutoObject(A.
Device.Device).Am.Ca())LB=0;A._GetAutoObject(A.Device.Helper).HL(LB);},Ol:function(
G){if(A._GetAutoObject(A.Device.Device).Am.Ca()<=1)return;var LB=A._GetAutoObject(
A.Device.Helper).W.CL;LB=LB-1;if(LB<0)LB=A._GetAutoObject(A.Device.Device).Am.Ca(
)-1;A._GetAutoObject(A.Device.Helper).HL(LB);},Af6:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A$).Cg(94);},Bk$:function(G){A._GetAutoObject(
A.Device.Device).Ds(10);},Bno:function(G){this.Bev(this);},Q6:function(G){A._GetAutoObject(
A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.Helper).Mo());A.pe([this,this.Bgn
],this);},Bgh:function(G){if(!A._GetAutoObject(A.Device.Device).Am.Ca()){this.Vv.
Z(true);if(!A._GetAutoObject(A.Device.Device).Am.QF()||!A._GetAutoObject(A.Device.
Device).Am.Filter)this.Vv.R(A.aaR(A.acf.AEh));else if(!A._GetAutoObject(A.Device.
Device).Am.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).ACV(A._GetAutoObject(
A.Device.Device).Am.Filter)===1)this.Vv.R(A.aaR(A.acf.AN7));else this.Vv.R(A.aaR(
A.acf.AN6));}else this.Vv.R(A.aaR(A.acf.AR3));}else this.Vv.Z(false);},Bgn:function(
G){var BBj=A._GetAutoObject(A.Device.Helper).W.Id;var A3K=A._GetAutoObject(A.Device.
Device).Am.LS(0,BBj);if(!A._GetAutoObject(A.Device.Device).Am.Ca())A._GetAutoObject(
A.Device.Helper).HL(-1);else if(A3K<0)A._GetAutoObject(A.Device.Helper).HL(0);},
Af7:function(G){this.Bgh(this);this.HO(this);},_Init:function(aArg){C.Tx._Init.call(
this,aArg);C.AkQ._Init.call(this.Vv={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dq(C.APv);this.Vv.H(Fb);this.J(this.Vv,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tx;this.Vv._Done();C.Tx._Done.call(this);},_ReInit:function(){
C.Tx._ReInit.call(this);this.Vv._ReInit();},_Mark:function(D){var B;C.Tx._Mark.call(
this,D);if((B=this.Vv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMt={QN:null,V7:null,AbH:null,YP:null,Init:function(aArg){var B;var F;this.Bb(
this.QN);if(!!A._GetAutoObject(C.A$).Q){var Vi=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vi){A.ab5("%s",AZF);
return;}else{if(Vi.AjQ)this.QN.T(A.aaR(A.acf.Bg));else this.QN.T(A.aaR(A.acf.EU)
);var Azn=A._GetAutoObject(A.Device.Device).Am.Filter;if(!Azn||A._GetAutoObject(
A.Device.Helper).Are(Azn))this.YP.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).Am.Ca()){this.V7.Ar(false);this.QN.Ar(false);}}}},Adq:function(G){var Aa=(C.Cp.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Ds(0);if(
Aa===this.AbH)A._GetAutoObject(C.A$).Cg(9);else if(Aa===this.V7)A._GetAutoObject(
A.Device.Device).Ds(7);else if(Aa===this.QN)this.BBO();else if(Aa===this.YP)this.
A1l();else throw new Error(Ax$);},BBO:function(){var B;var F;var Vi=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vi){A.
ab5("%s",AZF);return;}Vi.A_t(this);},A1l:function(){var B;var F;var Vi=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vi){A.
ab5("%s",AZF);return;}Vi.Q6(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Ml._Init.call(this.QN={I:this},0);C.Ml._Init.call(this.V7={I:this},
0);C.Ml._Init.call(this.AbH={I:this},0);C.Ml._Init.call(this.YP={I:this},0);this.
__proto__=C.AMt;this.H(Afz);this.QN.H(Aae);this.QN.Ar(true);this.QN.T(A.aaR(A.acf.
EU));this.QN.Bh(true);this.V7.H(P8);this.V7.Ar(true);this.V7.T(A.aaR(A.acf.AUp));
this.V7.Bh(true);this.AbH.H(IR);this.AbH.T(A.aaR(A.acf.AkS));this.AbH.Bh(true);this.
YP.H(BF);this.YP.T(A.aaR(A.acf.AB4));this.YP.Bh(true);this.J(this.QN,0);this.J(this.
V7,0);this.J(this.AbH,0);this.J(this.YP,0);this.QN.AR=[this,this.Adq];this.V7.AR=[
this,this.Adq];this.AbH.AR=[this,this.Adq];this.YP.AR=[this,this.Adq];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QN._Done();this.V7._Done(
);this.AbH._Done();this.YP._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QN._ReInit();this.V7._ReInit();this.AbH.
_ReInit();this.YP._ReInit();this.QN.T(A.aaR(A.acf.EU));this.V7.T(A.aaR(A.acf.AUp
));this.AbH.T(A.aaR(A.acf.AkS));this.YP.T(A.aaR(A.acf.AB4));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I5={TY:null,EA:null,Ym:null,Background:null,Ap:null,Im:null,Il:null,MY:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10
);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.Dr(256);}else if(G$){this.Background.L(this.MY);this.Ap.L(A.jb.Text);this.Dr(
256);}else{this.Background.L(this.MY);this.Ap.L(A.jb.Text);this.Dr(128);}if(!this.
AM)this.Ap.Cv(0);else if(this.AM>0){if(A.aaZ(this.TY,[B=A._GetAutoObject(A.Device.
Device),B.Awd,B.AyF]))this.Ap.Cv(2);else if(A.aaZ(this.TY,[B=A._GetAutoObject(A.
Device.Device),B.Awc,B.AyE]))this.Ap.Cv(3);else if(!!this.Ym&&((F=this.Ym,F[1].call(
F[0]))===1))this.Ap.Cv(1);else this.Ap.Cv(0);}else if(A.aaZ(this.TY,[B=A._GetAutoObject(
A.Device.Device),B.Awd,B.AyF]))this.Ap.Cv(6);else if(A.aaZ(this.TY,[B=A._GetAutoObject(
A.Device.Device),B.Awc,B.AyE]))this.Ap.Cv(7);else if(!!this.Ym&&((F=this.Ym,F[1].
call(F[0]))===1))this.Ap.Cv(5);else this.Ap.Cv(4);},Af$:function(G){this.J_(this
);},Af_:function(G){this.J5(this);},J_:function(G){this.By(1);},J5:function(G){this.
By(-1);},Bmk:function(E){if(A.aaZ(this.TY,E))return;if(!!this.TY)A.z$([this,this.
A23],this.TY,0);this.TY=E;if(!!E)A.zX([this,this.A23],this.TY,0);A.pe([this,this.
A23],this);},Uj:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.
Af9],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Af9],this.EA,0);if(!!E)A.pe([this
,this.Af9],this);},A23:function(G){var F;if(!!this.TY)this.By((F=this.TY,F[1].call(
F[0])));},Af9:function(G){A.pe([this,this.BB1],this);},CT:function(E){if(this.MY===
E)return;this.MY=E;this.An();},By:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.TY)(F=this.TY,F[2].call(F[0],E));this.An();A.abo([this,this.Ue,this.
By],0);},A9B:function(E){if(A.aaZ(this.Ym,E))return;if(!!this.Ym)A.z$([this,this.
Af9],this.Ym,0);this.Ym=E;if(!!E)A.zX([this,this.Af9],this.Ym,0);if(!!E)A.pe([this
,this.Af9],this);},BB1:function(G){var F,CA;if(!this.Ym||!this.EA)return;this.Bmk(
A._GetAutoObject(A.Device.Helper).BcY((F=this.Ym,F[1].call(F[0])),(CA=this.EA,CA[
1].call(CA[0]))));this.An();},Ue:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BM._Init.call(this.Im={I:this},0);
A.Core.BM._Init.call(this.Il={I:this},0);this.__proto__=C.I5;this.H(AIC);this.Background.
AZ(0x3F);this.Background.H(AIC);this.Ap.AZ(0x3C);this.Ap.H(AIC);this.Im.Filter=4;
this.Il.Filter=5;this.MY=A.jb.CK;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.AUP));this.Im.BN=[this,this.Af$];this.Il.BN=[this,this.Af_];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Im._Done();this.Il._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Im._ReInit(
);this.Il._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.TY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ym)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AL1={Ww:function(G){var B;var F;this.Agp();if(!!A._GetAutoObject(A.Device.Helper
).AOJ((F=this.FG,F[1].call(F[0])),0,true))this.AL9(A.aaR(A.acf.A6J),[this,this.Bnp
],[B=A._GetAutoObject(A.Device.Device),B.A70,B.Bay]);else A._GetAutoObject(C.BS).
XO(A.aaR(A.acf.A6J));A._GetAutoObject(C.BS).FT();this.IY(A.aaR(A.acf.LinkTransponder
),[this,this.BmB],8);this.IY(A.aaR(A.acf.Tt),[this,this.Aku],9);this.IY(A.aaR(A.
acf.A$B),[this,this.Bnc],10);this.IY(A.aaR(A.acf.AGa),[this,this.ATn],3);this.IY(
A.aaR(A.acf.AnZ),[this,this.AwO],2);A._GetAutoObject(C.BS).FT();A._GetAutoObject(
C.BS).NC(A.aaR(A.acf.And)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},DE:function(G){},Abr:function(){return C.Aqv;},Abs:function(){return C.Aq2;
},Q6:function(G){var F;A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(
A.Device.Helper).A6l((F=this.FG,F[1].call(F[0]))));},HO:function(G){var F;C.GW.HO.
call(this,G);if(this.Akh()===false){this.N.Cs(A._GetAutoObject(A.Device.Converter
).BgO((F=this.FG,F[1].call(F[0]))));this.N.Cl=[this,this.AIX];this.N.FJ(A.jV);}this.
N.ON(false);this.N.OO(false);},Agc:function(){A._GetAutoObject(C.A$).Cg(52);},A28:
function(G){C.GW.A28.call(this,G);A.pe([this,this.Bba],this);},Bnp:function(G){A.
_GetAutoObject(A.Device.Device).Awj(!A._GetAutoObject(A.Device.Device).Aqf);this.
An7(this);},An7:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).Am.Filter.
E8();A._GetAutoObject(A.Device.Helper).BnX(Be);if(A._GetAutoObject(A.Device.Device
).Aqf){var A14=A._GetAutoObject(A.Device.Helper).AOJ((F=this.FG,F[1].call(F[0]))
,21600,true);Be.CW(A14);}A._GetAutoObject(A.Device.Device).Am.Bl(Be);},_Init:function(
aArg){C.GW._Init.call(this,aArg);this.__proto__=C.AL1;var B;this.Dz(A.aaR(A.acf.
AvZ));this.AwJ([B=A._GetAutoObject(A.Device.Device),B.A7Z,B.Bax]);},_ReInit:function(
){C.GW._ReInit.call(this);this.Dz(A.aaR(A.acf.AvZ));},_className:"Application::ActionListScreen"
};C.AL0={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AL0;},
_className:"Application::ActionListFilterScreen"};C.APv={II:null,IO:null,Bc:null
,My:A.jV,Init:function(aArg){var B;A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8J,B.A96],0);A.zX([this,this.Nl],[B=A._GetAutoObject(A.Device.Device
).Am,B.Fk,B.Fo],0);},De:function(E){C.IG.De.call(this,E);this.IO.L(E);},DY:function(
G){C.IG.DY.call(this,G);var Azn=A._GetAutoObject(A.Device.Device).Am.Filter;if(!
Azn||A._GetAutoObject(A.Device.Helper).Are(Azn))this.II.Z(false);else this.II.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqZ())this.AwV(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+A$P)+A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());else this.AwV(A$Q);},AwV:function(E){if(this.My===E)return;this.My=E;
this.IO.R(E);},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.Ap._Init.call(
this.II={I:this},0);A.acg.Text._Init.call(this.IO={I:this},0);A.acg.C5._Init.call(
this.Bc={I:this},0);this.__proto__=C.APv;this.HP.H(Bqr);this.DS.H(Bqs);this.II.H(
Bqt);this.II.L(A.jb.Text);this.IO.H(A$R);this.IO.Hh(2);this.IO.KR(true);this.IO.
A6(0x12);this.IO.R(A$S);this.Bc.DC(Ays);this.Bc.DM(Ayt);this.Bc.L(A.jb.Bc);this.
J(this.II,0);this.J(this.IO,0);this.J(this.Bc,0);this.II.Aw(A.aaL(A.ach.Aex));this.
IO.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IG;this.
II._Done();this.IO._Done();this.Bc._Done();C.IG._Done.call(this);},_ReInit:function(
){C.IG._ReInit.call(this);this.II._ReInit();this.IO._ReInit();this.Bc._ReInit();
this.IO.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((
B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsH={Text:null,Bk:function(aSize){C.OY.Bk.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OY.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xb);else this.Text.R(this.AC.FY((F=this.Q,F[1].call(F[0]
))));var Iy=((Ae&0x40)===0x40);if(Iy)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OY._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsH;this.Text.R(Rm);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.OY;this.Text._Done();C.OY.
_Done.call(this);},_ReInit:function(){C.OY._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.OY._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Arb={C8:null,Bk:function(aSize){C.OY.Bk.call(this,aSize);this.C8.H(A.abK(this.
C8.M,aSize));},Ai:function(Ae){var B;var F;C.OY.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C8.Aw(null);else{this.C8.Aw(this.AC.ACQ(this.AC.DU((F=this.Q,F[1].call(F[
0])))));this.C8.Cv(this.AC.ACS(this.AC.DU((F=this.Q,F[1].call(F[0])))));}var Iy=((
Ae&0x40)===0x40);if(Iy)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OY._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Arb;this.H(AIC);this.C8.H(A$O);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OY;this.C8._Done();C.OY._Done.call(this);},_ReInit:function(){C.OY._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OY._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuX={VO:null,DirectionOfCountingToString:null,Aed:null,Dn:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return-1;return aIndex;
},FY:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return A.jV;return this.
DirectionOfCountingToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(
){return this.Dn()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.VO)(F=
this.VO,F[2].call(F[0],E));},ACQ:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn(
)))return null;return this.Aed.AsI(aIndex);},ACS:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dn()))return-1;return this.Aed.AsJ(aIndex);},A1A:function(G){var F;
if(!!this.VO)this.Q=(F=this.VO,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B8
,this.B9],0);},AeW:function(E){if(A.aaZ(this.VO,E))return;if(!!this.VO)A.z$([this
,this.A1A],this.VO,0);this.VO=E;if(!!this.VO)A.zX([this,this.A1A],this.VO,0);A.pe([
this,this.A1A],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aed._Init.call(this.Aed={I:this},0);this.__proto__=C.AuX;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aed._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aed._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aed)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMl={Hp:null,EA:null,AnimalIdGenerationMethodToString:
null,AdU:null,Dn:function(){return 4;},C4:function(aIndex){var F;var A7=-1;if((aIndex<
0)||(aIndex>=this.Dn()))return-1;switch(aIndex){case 0:A7=0;break;case 1:A7=1;break;
case 2:A7=this.ByW((F=this.EA,F[1].call(F[0])));break;case 3:A7=5;break;default:
throw new Error(Bqu+aIndex.toFixed());}return A7;},FY:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dn()))return A.jV;return this.AnimalIdGenerationMethodToString.
BH(this.C4(aIndex));},DU:function(A7){var aIndex=-1;switch(A7){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bqv+A7.toFixed());}return aIndex;},HH:function(){return this.
Dn()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Hp)(F=this.Hp,F[2].
call(F[0],E));},ACQ:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return null;
return this.AdU.AsI(this.C4(aIndex));},ACS:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dn()))return-1;return this.AdU.AsJ(this.C4(aIndex));},A05:function(G){var F;
if(!!this.Hp)this.Q=(F=this.Hp,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B8
,this.B9],0);},Blh:function(E){if(A.aaZ(this.Hp,E))return;if(!!this.Hp)A.z$([this
,this.A05],this.Hp,0);this.Hp=E;if(!!this.Hp)A.zX([this,this.A05],this.Hp,0);A.pe([
this,this.A05],this);},Uj:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.
z$([this,this.Af9],this.EA,0);this.EA=E;if(!!this.EA)A.zX([this,this.Af9],this.EA
,0);A.pe([this,this.Af9],this);},Af9:function(G){A.pe([this,this.BxM],this);},ByW:
function(L3){var Ro=0;switch(L3){case 0:Ro=2;break;case 1:Ro=3;break;case 2:Ro=4;
break;default:throw new Error(Bqw+L3.toFixed());}return Ro;},BxM:function(G){var
BdW=this.C4(this.DU(this.Q));if(this.Q!==BdW)this.As(BdW);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdU._Init.call(this.
AdU={I:this},0);this.__proto__=C.AMl;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdU._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdU._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGB={FF:null,AaY:null,Q:null,Fi:null,E_:null,HC:null,Wo:null,AW:null,HZ:null
,Kj:null,A8:0,AM:0,Alq:0,Init:function(aArg){var B;A.zX([this,this.Bd_],[B=A._GetAutoObject(
A.Device.Device),B.Anm,B.AoC],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hf){this.AW.FI(A.jb.CK);this.HC.CT(A.jb.CK);this.Wo.CT(A.jb.CK);
this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FI(A.jb.CS);this.HC.
CT(A.jb.CS);this.Wo.CT(A.jb.CS);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}
}else{if(this.Hf){this.AW.FI(A.jb.CK);this.HC.CT(A.jb.CK);this.Wo.CT(A.jb.CK);}else{
this.AW.FI(A.jb.CS);this.HC.CT(A.jb.CS);this.Wo.CT(A.jb.CS);}this.Bb(null);}},IW:
function(G){C.Eg.IW.call(this,G);if(!this.A8)this.FQ(this);else this.G_(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(
F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(
F[0])).CC=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}break;
default:this.FF.AkP((F=this.N,F[1].call(F[0])));}},FQ:function(G){this.Ex(1);},G_:
function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A8&&!!this.N)this.FF.Ajy((
F=this.N,F[1].call(F[0])));this.A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>1)this.
A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{if(this.AW.A8g())this.Bb(
this.AW);else this.Bb(this.Wo);if(!this.AM)this.AW.SK(2);else this.AW.SK(7);}break;
default:throw new Error(Ate+this.A8.toFixed());}this.DJ(this);this.An();},As:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(G
){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ue,this.
By],0);}},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Ol:function(G){this.AA3(2);},MT:function(G){this.AA3(
7);},AA3:function(Gw){var B;var Azo=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azo){var AAf=(A.Core.P.isPrototypeOf(B=this.QE(Azo,Gw,0x15))?B:null);if(!!AAf){
this.Bb(AAf);return true;}}return false;},Ao2:function(G){A.pe([this,this.Bd_],this
);},A3V:function(G){var B;var F;if(!this.HZ.Hp){this.Kj.AeW(null);return;}switch((
F=this.HZ.Hp,F[1].call(F[0]))){case 0:case 1:this.Kj.AeW(null);break;case 3:this.
Kj.AeW([B=A._GetAutoObject(A.Device.Device),B.ASm,B.AZZ]);break;case 2:this.Kj.AeW([
B=A._GetAutoObject(A.Device.Device),B.ASn,B.AZ0]);break;case 4:case 5:this.Kj.AeW([
B=A._GetAutoObject(A.Device.Device),B.AEv,B.AIO]);break;default:throw new Error(
Bqx+(F=this.HZ.Hp,F[1].call(F[0])).toFixed());}},Bd_:function(G){var F;if(!this.
HZ.Hp)return;A.pe([this,this.A3V],this);var AtT=false;switch((F=this.HZ.Hp,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtT=true;this.AW.A_m(-1);}break;case 0:
case 1:{AtT=false;this.AW.A_m(A._GetAutoObject(A.Device.Device).A1);}break;default:
throw new Error(Ayk+(F=this.HZ.Hp,F[1].call(F[0])).toFixed());}this.AW.Ar(AtT);this.
HC.Ar(AtT);this.HC.Z(AtT);if(((F=this.HZ.Hp,F[1].call(F[0]))!==this.Alq)||(AtT===
false)){var BQ=this.AM;this.By(A._GetAutoObject(A.Device.Helper).AMj((F=this.HZ.
Hp,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BQ){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bi7((F=this.HZ.Hp,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kq(A._GetAutoObject(A.Device.Device).A1);else this.AW.Kq(0);this.Alq=(
F=this.HZ.Hp,F[1].call(F[0]));},A9e:function(E){var B;if(this.AaY===E)return;if(
!!this.AaY){A.z$([this,this.Ao2],[B=this.AaY,B.Wu,B.JP],0);A.z$([this,this.Ao2],[
B=this.AaY,B.Anq,B.Nc],0);A.z$([this,this.Ao2],[B=this.AaY,B.ArA,B.PP],0);this.HZ.
Uj(null);}this.AaY=E;if(!!E){A.zX([this,this.Ao2],[B=this.AaY,B.Wu,B.JP],0);A.zX([
this,this.Ao2],[B=this.AaY,B.Anq,B.Nc],0);A.zX([this,this.Ao2],[B=this.AaY,B.ArA
,B.PP],0);this.HZ.Uj([B=this.AaY,B.Wu,B.JP]);}if(!!E)A.pe([this,this.Ao2],this);
},Ue:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BM._Init.call(this.Fi={I:this},0);A.Core.BM._Init.call(this.E_={I:this},0
);C.Arb._Init.call(this.HC={I:this},0);C.Arb._Init.call(this.Wo={I:this},0);C.AvL.
_Init.call(this.AW={I:this},0);C.AMl._Init.call(this.HZ={I:this},0);C.AuX._Init.
call(this.Kj={I:this},0);this.__proto__=C.AGB;var B;this.H(UU);this.V.Ar(false);
this.V.R(As8);this.V.L(A.jb.Bm);this.Fi.Filter=6;this.E_.Filter=7;this.HC.H(Bqy);
this.HC.Ar(false);this.Wo.H(Bqz);this.AW.H(BqA);this.AW.Ar(false);this.J(this.HC
,0);this.J(this.Wo,0);this.J(this.AW,0);this.FF=A._NewObject(C.Aep,0);this.Fi.BN=[
this,this.Ol];this.E_.BN=[this,this.MT];this.HC.CI(this.Kj);this.HC.As([B=this.Kj
,B.B8,B.B9]);this.Wo.CI(this.HZ);this.Wo.As([B=this.HZ,B.B8,B.B9]);this.AW.As([this
,this.Ue,this.By]);this.HZ.Blh([B=A._GetAutoObject(A.Device.Device),B.Anm,B.AoC]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fi._Done();this.E_.
_Done();this.HC._Done();this.Wo._Done();this.AW._Done();this.HZ._Done();this.Kj.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fi._ReInit();this.E_._ReInit();this.HC._ReInit();this.Wo._ReInit();this.AW._ReInit(
);this.HZ._ReInit();this.Kj._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaY)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wo)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G0={AzI:null,Fi:null,E_:null,GX:null,
FX:null,EN:null,M3:0,AMZ:0,ABU:0,Uq:0,A$y:-1,AMY:false,Init:function(aArg){A.pe([
this,this.A0s],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EN.Z(this.
AMY);this.EN.H(A.wC(this.Yr(this.ABU).M,this.Yr((this.ABU+this.AMZ)-1).M));},Ol:
function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);var A1i=this.BfI(2);if(A1i===
false)D5.NH=true;},MT:function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);var
A1i=this.BfI(7);if(A1i===false)D5.NH=true;},BfI:function(Gw){var B;var DW=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DW=this.Bc0(DW,Gw,true);if(!!DW){this.Bb(DW);this.
AzI=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adp:function(
G){A.ab5("%s",Ald);},GQ:function(s){this.Adp(s);},FI:function(E){if(this.M3===E)
return;this.M3=E;this.FX.CT(E);this.GX.CT(E);},SK:function(Gw){var B;switch(Gw){
case 2:this.Bb(this.GX);break;case 7:this.Bb(this.FX);break;default:A.ab5("%s%e"
,BqB,Gw);}this.AzI=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LN:function(G){},A0s:
function(s){this.LN(s);},AES:function(E){if(this.AMY===E)return;this.AMY=E;this.
An();},A9k:function(E){if(this.AMZ===E)return;this.AMZ=E;this.An();},A9j:function(
E){if(this.ABU===E)return;this.ABU=E;this.An();},Yr:function(Hw){var B6=null;switch(
Hw){case-1:case 0:B6=this.FX;break;case 1:B6=this.GX;break;default:A.ab5("%s",AhX
);}return B6;},Kq:function(E){if(this.Uq===E)return;this.Uq=E;this.Amj();},Amj:function(
){A.ab5("%s",Ald);},Bc0:function(AcX,Gw,LF){var B;if(!!AcX){var Be;if(LF)Be=0x11;
else Be=0x0;switch(Gw){case 2:AcX=(C.DF.isPrototypeOf(B=this.AqN(AcX,Be))?B:null
);break;case 7:AcX=(C.DF.isPrototypeOf(B=this.TL(AcX,Be))?B:null);break;default:
throw new Error(BqC);}}return AcX;},A_m:function(E){if(this.A$y===E)return;this.
A$y=E;var DW=this.FX;var A1I;while(!!DW){A1I=!!E;DW.Ar(A1I);DW.Z(A1I);if(DW===this.
AzI)this.Bb(DW);DW=this.Bc0(DW,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BM._Init.call(this.Fi={I:this},0);A.Core.BM._Init.
call(this.E_={I:this},0);C.DF._Init.call(this.GX={I:this},0);C.DF._Init.call(this.
FX={I:this},0);A.acg.BU._Init.call(this.EN={I:this},0);this.__proto__=C.G0;this.
H(BqD);this.Fi.Filter=6;this.E_.Filter=7;this.M3=A.jb.CK;this.GX.H(E4);this.FX.H(
A$T);this.EN.H(BqE);this.EN.Nf(2);this.EN.L(A.jb.E1);this.J(this.GX,0);this.J(this.
FX,0);this.J(this.EN,0);this.Fi.BN=[this,this.Ol];this.Fi.D1=[this,this.Ol];this.
E_.BN=[this,this.MT];this.E_.D1=[this,this.MT];this.AzI=this.FX;this.GX.Di=[this
,this.GQ];this.FX.Di=[this,this.GQ];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fi._Done();this.E_._Done();this.GX._Done();this.FX._Done();this.EN.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fi._ReInit();this.E_._ReInit();this.GX._ReInit();this.FX._ReInit();this.EN.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzI)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQZ={Dx:null,CU:null,Ct:null
,FI:function(E){if(this.M3===E)return;C.HI.FI.call(this,E);this.Ct.CT(E);this.CU.
CT(E);this.Dx.CT(E);},Yr:function(Hw){var B6=null;switch(Hw){case-1:case 0:B6=this.
FX;break;case 1:B6=this.Ct;break;case 2:B6=this.CU;break;case 3:B6=this.Dx;break;
case 4:B6=this.GX;break;default:A.ab5("%s",AhX);}return B6;},_Init:function(aArg
){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(
this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQZ;this.
H(BqF);this.GX.H(Atd);this.Dx.H(A$U);this.CU.H(A$V);this.Ct.H(A$W);this.FX.H(BqG
);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Ct,-2);this.Dx.Di=[this,this.
GQ];this.CU.Di=[this,this.GQ];this.Ct.Di=[this,this.GQ];},_Done:function(){this.
__proto__=C.HI;this.Dx._Done();this.CU._Done();this.Ct._Done();C.HI._Done.call(this
);},_ReInit:function(){C.HI._ReInit.call(this);this.Dx._ReInit();this.CU._ReInit(
);this.Ct._ReInit();},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.
Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVq={Q_:null,AcH:null,AVp:0,CF:function(G){this.AcH.Ar(true);},E3:function(G
){this.AcH.Ar(false);},Bna:function(E){if(this.AVp===E)return;this.AVp=E;this.Q_.
R((((A.aaR(A.acf.AVo)+Aag)+E.toFixed())+BqH)+A.aaR(A.acf.La));},Bk5:function(){return this.
AVp;},BAH:function(G){A._GetAutoObject(C.A$).Cg(3);A._GetAutoObject(A.Device.Device
).Anu(1);},_Init:function(aArg){C.X1._Init.call(this,aArg);C.CH._Init.call(this.
Q_={I:this},0);A.acl.Gi._Init.call(this.AcH={I:this},0);this.__proto__=C.AVq;this.
AeI.H(BqI);this.Uz.R(A.jV);this.Q_.H(BqJ);this.Q_.R(A.aaR(A.acf.AVo)+A$X);this.Q_.
L(A.jb.Text);this.AcH.HM(1);this.AcH.Fm(5000);this.AcH.B2=100;this.J(this.Q_,0);
this.Q_.S(A.aaL(A.fl.Af));this.Q_.A2(A.aaL(A.fl.Ak));this.Q_.Cu(A.aaL(A.fl.Bi));
this.AcH.Sx=[this,this.BAH];this.AcH.Q=[this,this.Bk5,this.Bna];},_Done:function(
){this.__proto__=C.X1;this.Q_._Done();this.AcH._Done();C.X1._Done.call(this);},_ReInit:
function(){C.X1._ReInit.call(this);this.Q_._ReInit();this.AcH._ReInit();this.Q_.
R(A.aaR(A.acf.AVo)+A$X);this.Q_.S(A.aaL(A.fl.Af));this.Q_.A2(A.aaL(A.fl.Ak));this.
Q_.Cu(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.X1._Mark.call(this,D);if((B=this.
Q_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcH)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARR={K3:null,Li:null,BdL:false,Init:
function(aArg){this.Bb(this.C$);},Ew:function(G){var B;if(!!this.K3)this.K3.Ew(this
);C.Wq.Ew.call(this,G);},Aga:function(G){var B;if(!!this.K3)this.K3.Aga(this);C.
Wq.Aga.call(this,G);},CF:function(G){var B;if(!this.BdL){this.BdL=true;A.pe([this
,this.A3q],this);}else if(!this.K3){this.K3=A._NewObject(C.ART,0);this.K3.A9y([this
,this.AAS]);this.LN(this);this.K3.LN(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ew(this);else C.Wq.CF.call(this,G);}else C.Wq.CF.call(this,G
);},Ap6:function(G){var B;if(!!this.K3)this.K3.Ap6(this);},AAS:function(G){var B;
var F;this.LN(this);this.K3.LN(this);A.pe([this,this.AcQ],this);var Bdm=this.LU;
this.AeT(A._GetAutoObject(A.Device.Helper).Abp(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVn(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bdm);if(Bdm)A._GetAutoObject(
A.Device.Helper).W.PP(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SC(A._GetAutoObject(A.Device.Helper).AMj((F=this.Dh.HZ.Hp,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JD(this.C$);},A3q:function(
G){A._GetAutoObject(C.A$).Cg(79);},_Init:function(aArg){C.Wq._Init.call(this,aArg
);C.Q9._Init.call(this.Li={I:this},0);this.__proto__=C.ARR;var B;this.Li.H(AhU);
this.Li.Aj(true);this.Li.T(A.aaR(A.acf.ACj));this.J(this.Li,-9);this.JU(this.Gj,-
1);this.Li.Go([this,this.D_,this.GN]);this.Li.As([B=A._GetAutoObject(A.Device.Helper
).W,B.ASw,B.AnC]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wq;this.Li.
_Done();C.Wq._Done.call(this);},_ReInit:function(){C.Wq._ReInit.call(this);this.
Li._ReInit();this.Li.T(A.aaR(A.acf.ACj));},_Mark:function(D){var B;C.Wq._Mark.call(
this,D);if((B=this.K3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Li)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADJ={AgH:null,AgI:null,NK:null,NJ:null,ET:null,FW:null,Eo:null,Dx:null,CU:null,Ct:
null,FI:function(E){if(this.M3===E)return;C.Le.FI.call(this,E);this.Ct.CT(E);this.
CU.CT(E);this.Dx.CT(E);this.Eo.CT(E);this.FW.CT(E);this.ET.CT(E);this.NJ.CT(E);this.
NK.CT(E);this.AgI.CT(E);this.AgH.CT(E);},Yr:function(Hw){var B6=null;switch(Hw){
case-1:case 0:B6=this.FX;break;case 1:B6=this.Ct;break;case 2:B6=this.CU;break;case
3:B6=this.Dx;break;case 4:B6=this.Eo;break;case 5:B6=this.FW;break;case 6:B6=this.
ET;break;case 7:B6=this.NJ;break;case 8:B6=this.NK;break;case 9:B6=this.AgI;break;
case 10:B6=this.AgH;break;case 11:B6=this.GX;break;default:A.ab5("%s",AhX);}return B6;
},_Init:function(aArg){C.Le._Init.call(this,aArg);C.DF._Init.call(this.AgH={I:this
},0);C.DF._Init.call(this.AgI={I:this},0);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FW={I:this},0);C.DF._Init.call(this.Eo={I:this},0);C.DF._Init.call(this.
Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADJ;this.H(BqK);this.GX.H(AID);this.AgH.H(Ayu);this.AgI.H(
AZG);this.NK.H(AZH);this.NJ.H(AZI);this.ET.H(AZJ);this.FW.H(AZK);this.Eo.H(AZL);
this.Dx.H(A$Y);this.CU.H(AZM);this.Ct.H(BqL);this.FX.H(BqM);this.J(this.AgH,-2);
this.J(this.AgI,-2);this.J(this.NK,-2);this.J(this.NJ,-2);this.J(this.ET,-2);this.
J(this.FW,-2);this.J(this.Eo,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.
Ct,-2);this.AgH.Di=[this,this.GQ];this.AgI.Di=[this,this.GQ];this.NK.Di=[this,this.
GQ];this.NJ.Di=[this,this.GQ];this.ET.Di=[this,this.GQ];this.FW.Di=[this,this.GQ
];this.Eo.Di=[this,this.GQ];this.Dx.Di=[this,this.GQ];this.CU.Di=[this,this.GQ];
this.Ct.Di=[this,this.GQ];},_Done:function(){this.__proto__=C.Le;this.AgH._Done(
);this.AgI._Done();this.NK._Done();this.NJ._Done();this.ET._Done();this.FW._Done(
);this.Eo._Done();this.Dx._Done();this.CU._Done();this.Ct._Done();C.Le._Done.call(
this);},_ReInit:function(){C.Le._ReInit.call(this);this.AgH._ReInit();this.AgI._ReInit(
);this.NK._ReInit();this.NJ._ReInit();this.ET._ReInit();this.FW._ReInit();this.Eo.
_ReInit();this.Dx._ReInit();this.CU._ReInit();this.Ct._ReInit();},_Mark:function(
D){var B;C.Le._Mark.call(this,D);if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eo)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HI={Q:null,AM:0,Ai:function(Ae){C.G0.Ai.call(this
,Ae);this.Amj();},Adp:function(G){var B;var F;var Iw=A.jV;var B6=this.GX;while(!
!B6){if(B6.Ez>0)Iw=Iw+B6.Ez.toFixed();else Iw=Iw+String.fromCharCode(0x30);B6=(C.
DF.isPrototypeOf(B=this.TL(B6,0x11))?B:null);}var BQ=this.AM;this.By(A.wz(Iw,-1,
10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LN:function(G){},Amj:function(){var B;var F;if(!!this.Q){var DW=this.FX;
var Adx=this.Uq;var A7=(F=this.Q,F[1].call(F[0]));while(!!DW){if(A7>0){DW.LZ(A7%
10);A7=(A7/10)|0;}else if(Adx>0)DW.LZ(0);else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=
this.AqN(DW,0x11))?B:null);Adx=Adx-1;}}},C2:function(G){var F;if(!!this.Q)this.By((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},By:function(E){if(this.AM===E)return;this.AM=E;this.
An();},_Init:function(aArg){C.G0._Init.call(this,aArg);this.__proto__=C.HI;},_Mark:
function(D){var B;C.G0._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Le={AM:0,Q:null
,Ai:function(Ae){C.G0.Ai.call(this,Ae);this.Amj();},Adp:function(G){var B;var F;
var Iw=A.jV;var B6=this.GX;while(!!B6){if(B6.Ez>0)Iw=Iw+B6.Ez.toFixed();else Iw=
Iw+String.fromCharCode(0x30);B6=(C.DF.isPrototypeOf(B=this.TL(B6,0x11))?B:null);
}var BQ=this.AM;this.By(A.ab0(Iw,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LN:function(G){},Amj:function(){var B;
var F;if(!!this.Q){var DW=this.FX;var Adx=this.Uq;var A7=(F=this.Q,F[1].call(F[0
]));while(!!DW){if(A7>0){DW.LZ((A7%10)|0);A7=Math.trunc(A7/10);}else if(Adx>0)DW.
LZ(0);else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=this.AqN(DW,0x11))?B:null);Adx=Adx-
1;}}},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},As:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},By:function(
E){if(this.AM===E)return;this.AM=E;this.An();},_Init:function(aArg){C.G0._Init.call(
this,aArg);this.__proto__=C.Le;},_Mark:function(D){var B;C.G0._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dn:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},FY:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvL={Eo:null,Dx:null,CU:null,Ct:null,FI:function(E){if(this.M3===E)return;C.
HI.FI.call(this,E);this.Ct.CT(E);this.CU.CT(E);this.Dx.CT(E);this.Eo.CT(E);},Yr:
function(Hw){var B6=null;switch(Hw){case-1:case 0:B6=this.FX;break;case 1:B6=this.
Ct;break;case 2:B6=this.CU;break;case 3:B6=this.Dx;break;case 4:B6=this.Eo;break;
case 5:B6=this.GX;break;default:A.ab5("%s",AhX);}return B6;},_Init:function(aArg
){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Eo={I:this},0);C.DF._Init.call(
this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={
I:this},0);this.__proto__=C.AvL;this.H(Ayd);this.GX.H(AHI);this.Eo.H(AHJ);this.Dx.
H(AHK);this.CU.H(AHL);this.Ct.H(AHM);this.FX.H(AHN);this.EN.H(A$Z);this.J(this.Eo
,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Ct,-2);this.Eo.Di=[this,this.
GQ];this.Dx.Di=[this,this.GQ];this.CU.Di=[this,this.GQ];this.Ct.Di=[this,this.GQ
];},_Done:function(){this.__proto__=C.HI;this.Eo._Done();this.Dx._Done();this.CU.
_Done();this.Ct._Done();C.HI._Done.call(this);},_ReInit:function(){C.HI._ReInit.
call(this);this.Eo._ReInit();this.Dx._ReInit();this.CU._ReInit();this.Ct._ReInit(
);},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.Eo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUx={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bok(0);this.AttributeSet.Bol(1);this.AttributeSet.Bom(4);},Ai:function(Ae){var B;
C.BW.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fr=((Ae&0x20)===0x20);var Iy=((
Ae&0x40)===0x40);var GA=this.Bo.Bw;var FN=A.jb.CK;var GS=A.jb.Text;if(this.Hf){FN=
A.jb.Bm;GS=A.jb.Text;}if(!G$){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);this.
AttributeSet.Ahg(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahg(A.jb.Bm);}else if(Iy){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahg(A.jb.Bm);}else if(Fr){this.Background.L(A.jb.
Am0);this.V.L(A.jb.Bm);this.AttributeSet.Ahg(A.jb.Bm);}else{this.Background.L(FN
);this.V.L(GS);this.AttributeSet.Ahg(GS);}this.LF=G$;this.KD=Fr;this.Qo=GA;this.
Api=Iy;},Hg:function(G){var B;var Gd=this.Dy.G1;var Cz=(A.acg.AuK.isPrototypeOf(
B=this.Dy.Ci)?B:null);Cz.A9g(this.AttributeSet);Cz.A6(0x12);if(!Cz)return;if(!!this.
AC)Cz.R(this.ByP(this.AC.FY(Gd)));else Cz.R(Xb);Cz.H(A.abK(Cz.M,[this.Dy.V$,(B=this.
Dy.M)[3]-B[1]]));},ByP:function(Bxb){var AAC=Bxb;AAC=A._GetAutoObject(A.Device.Helper
).Nj(AAC,BqN,BqO);AAC=A._GetAutoObject(A.Device.Helper).Nj(AAC,BqP,BqQ);return BqR+
AAC;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUx;this.Dy.H(BqS);this.Dy.Ju(2);
this.Dy.NZ(A.acg.AuK);this.AttributeSet.Ahg(this.V.AQ);this.AttributeSet.Bl4(A.aaL(
A.fl.AOA));this.AttributeSet.A9I(A.aaL(A.fl.Ak));this.AttributeSet.Ahj(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9I(A.aaL(A.fl.Ak));this.AttributeSet.Ahj(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asx._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dq(C.AC$);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dn:function(){return 14;},C4:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},FY:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BH(aIndex
);},DU:function(A7){return A7;},HH:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OR={FF:null,EnumToCodeset:
null,Js:null,A8:0,Number:0,Ai:function(Ae){C.BW.Ai.call(this,Ae);if(this.A8===1){
if(this.Hf){this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}},By:function(E){C.BW.By.call(this,E);var BzI=this.
EnumToCodeset.AmB(this.Number);var BdV=this.AC.C4(this.AM);if(BzI!==BdV){this.AFs(
this.EnumToCodeset.Aeg(BdV));A.abo([this,this.ASx,this.AFs],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[
this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(
A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=
this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}break;default:
this.FF.AkP((F=this.N,F[1].call(F[0])));}},FQ:function(G){this.Ex(1);},G_:function(
G){this.Ex(0);},Ex:function(EO){var F;if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(
F[0])));this.A8=EO;if((this.A8<0)||(this.A8>1))this.A8=0;this.DJ(this);if(!this.
A8)this.Bb(null);else this.A1V();this.An();},AFs:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqV()>E)E=this.EnumToCodeset.
AqV();if(this.EnumToCodeset.HH()<E)E=this.EnumToCodeset.HH();}this.Number=E;var BQ=
this.AM;if(!!this.EnumToCodeset){var ByF=this.EnumToCodeset.AmB(E);this.By(this.
AC.DU(ByF));if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C4(this.AM)));A.abo(this.Q,0);}}},Anv:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},U9:function(G){this.Ex(this.A8+1);},A1V:function(){A.ab5(
"%s",BqT);},ASx:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BM._Init.call(this.Js={I:this},0);this.__proto__=C.OR;this.
Js.Filter=1;this.FF=A._NewObject(C.Aep,0);this.Js.BN=[this,this.U9];},_Done:function(
){this.__proto__=C.BW;this.Js._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Js._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeP={Text:null,Ai:function(
Ae){C.Ek.Ai.call(this,Ae);this.Text.L(this.ACL);},By:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rf(this.AM));this.
An();},AaH:function(G){A.pe([this,this.Af8],this);},AaG:function(G){A.pe([this,this.
Af8],this);},AlX:function(G){A.pe([this,this.Af8],this);},Af8:function(G){if((!this.
Ig||!this.A1)||!this.AF)return;},_Init:function(aArg){C.Ek._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeP;this.Text.AZ(0x3F
);this.Text.H(As2);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ek;this.Text._Done();C.Ek.
_Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARK={GF:0,C7:null,AW:null,E9:null,
I5:null,CountryToString:null,K_:0,L9:false,Init:function(aArg){A.zX([this,this.MF
],[this,this.Sy,this.Lm],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.I5.Z(this.
Afk);this.AW.FI(this.LQ);this.E9.CT(this.LQ);this.I5.CT(this.LQ);},DJ:function(G
){var F;if(!this.N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(
F[0])).CC=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(this.CountryToString.BH(this.K_));(F=this.N,
F[1].call(F[0])).Cm=null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.
G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.
N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}}},Ex:function(EO){var Tk=this.
A8;this.A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>this.RF)this.A8=this.RF;if((
this.A8===1)&&!this.Afk)this.A8=2;switch(this.A8){case 0:{this.Bb(null);if(!this.
GF)this.Lm(0);}break;case 1:this.Bb(this.I5);break;case 2:this.Bb(this.E9);break;
case 3:{this.Bb(this.AW);if(!this.GF||(Tk>0))this.AW.SK(2);else this.AW.SK(7);}break;
default:throw new Error(Ate+this.A8.toFixed());}C.Ek.Ex.call(this,this.A8);},App:
function(G){this.I5.Uj(this.EA);},AaH:function(G){var F;this.AW.A9j((F=this.AF,F[
1].call(F[0])));},AaG:function(G){var F;this.AW.A9k((F=this.A1,F[1].call(F[0])));
},By:function(E){if(this.AM===E)return;this.AM=E;this.L9=true;this.Sz(A._GetAutoObject(
A.Device.Helper).Sf(E,0,12));this.Lm(A._GetAutoObject(A.Device.Converter).ZZ(E));
this.L9=false;if(!!E)this.AW.Kq(12);else this.AW.Kq(0);this.An();},AlX:function(
G){A.pe([this,this.Af8],this);},FQ:function(G){var F;if(!this.AM){var BQ=this.AM;
this.By(A._GetAutoObject(A.Device.Helper).AC0());if(this.AM!==BQ){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(3);},AjN:function(){return this.
GF;},AjP:function(){return 999999999999;},Lm:function(E){if(this.K_===E)return;this.
K_=E;if(this.L9===false)A.pe([this,this.Vk],this);A.abo([this,this.Sy,this.Lm],0
);},Sz:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this
,this.Vk],this);A.abo([this,this.AbZ,this.Sz],0);},Vk:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).AqA(this.K_),3,10)+A.abm(this.GF,12,10
);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af8:function(G){var F;if((!this.Ig||
!this.A1)||!this.AF)return;if(!(F=this.Ig,F[1].call(F[0])))this.AW.AES(true);else
this.AW.AES(false);},Sy:function(){return this.K_;},AbZ:function(){return this.GF;
},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.C7._Init.call(this.C7={I:this
},0);C.ADJ._Init.call(this.AW={I:this},0);C.AsH._Init.call(this.E9={I:this},0);C.
I5._Init.call(this.I5={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARK;var B;this.RF=3;this.AW.H(BqU);this.E9.H(A$0);this.
I5.H(A$1);this.J(this.AW,0);this.J(this.E9,0);this.J(this.I5,0);this.C7.AEY([this
,this.Sy,this.Lm]);this.AW.As([this,this.AbZ,this.Sz]);this.E9.CI(this.C7);this.
E9.As([B=this.C7,B.B8,B.B9]);this.I5.A9B([B=A._GetAutoObject(A.Device.Device),B.
Av9,B.AyB]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.C7._Done(
);this.AW._Done();this.E9._Done();this.I5._Done();this.CountryToString._Done();C.
Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit(
);this.AW._ReInit();this.E9._ReInit();this.I5._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARJ={GF:0,C7:null,AW:null,YE:null,Kn:null,E9:null,I5:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pt:0,K_:0,L9:false,Init:function(aArg){A.
zX([this,this.MF],[this,this.PM,this.EC],0);A.zX([this,this.MF],[this,this.Sy,this.
Lm],0);A.zX([this,this.MF],[this,this.Ano,this.Ahk],0);},Ai:function(Ae){C.Ek.Ai.
call(this,Ae);this.I5.Z(this.Afk);this.AW.FI(this.LQ);this.YE.FI(this.LQ);this.Kn.
FI(this.LQ);this.E9.CT(this.LQ);this.I5.CT(this.LQ);},DJ:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this
,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV
);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.
N,F[1].call(F[0])).CV(this.CountryToString.BH(this.K_));(F=this.N,F[1].call(F[0]
)).Cm=null;}break;case 3:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.G_];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(
F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGK)+A.aaR(A.acf.Colon))+Aag)+A.aaR(A.
acf.Bg8));break;case 1:(F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGK)+A.aaR(A.
acf.Colon))+Aag)+A.aaR(A.acf.Boq));break;case 2:(F=this.N,F[1].call(F[0])).CV(((
A.aaR(A.acf.AGK)+A.aaR(A.acf.Colon))+Aag)+A.aaR(A.acf.Bh2));break;default:(F=this.
N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGK)+A.aaR(A.acf.Colon))+Aag)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cm=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0]
)).CC=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0
])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null
);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.Gu)+Ax5)+this.GermanStateToString.Ls(
A._GetAutoObject(A.Device.Converter).ACO(this.Pt)));(F=this.N,F[1].call(F[0])).Cm=
null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.G_];(F=this.N,F[
1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(
F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(
A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}}},Ex:function(EO){var Tk=this.A8;if(EO<
0)EO=0;else if(EO>this.RF)EO=this.RF;if((EO===1)&&!this.Afk)EO=2;switch(EO){case
0:{this.Bb(null);if((!this.GF&&!this.AnimalType)&&!this.Pt)this.Lm(0);}break;case
1:this.Bb(this.I5);break;case 2:this.Bb(this.E9);break;case 3:if(!Tk)A.pe([this,
this.BAV],this);else this.Bb(this.YE);break;case 4:this.Bb(this.Kn);break;case 5:
if(((Tk===4)&&!this.Pt)&&!this.GF)return;else{this.Bb(this.AW);if(!this.GF||(Tk>
0))this.AW.SK(2);else this.AW.SK(7);}break;default:throw new Error(Ate+EO.toFixed(
));}this.A8=EO;C.Ek.Ex.call(this,this.A8);},By:function(E){if(this.AM===E)return;
this.AM=E;this.L9=true;this.Sz(A._GetAutoObject(A.Device.Helper).Sf(E,0,8));this.
Ahk(A._GetAutoObject(A.Device.Helper).Sf(E,8,2)|0);this.EC(A._GetAutoObject(A.Device.
Helper).Sf(E,10,2)|0);this.Lm(A._GetAutoObject(A.Device.Converter).ZZ(E));this.L9=
false;if(!!this.AM){this.YE.Kq(2);this.Kn.Kq(2);this.AW.Kq(8);}else{this.YE.Kq(0
);this.Kn.Kq(0);this.AW.Kq(0);}this.An();},App:function(G){this.I5.Uj(this.EA);}
,AaH:function(G){var F;this.AW.A9j((F=this.AF,F[1].call(F[0])));},AaG:function(G
){var F;this.AW.A9k((F=this.A1,F[1].call(F[0])));},AlX:function(G){A.pe([this,this.
Af8],this);},FQ:function(G){var F;if(!this.AM){var BQ=this.AM;this.By(A._GetAutoObject(
A.Device.Helper).AC0());if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ex(3);}else this.Ex(this.RF);},AjN:function(){return this.
GF;},AjP:function(){return 99999999;},Lm:function(E){if(this.K_===E)return;this.
K_=E;if(this.L9===false)A.pe([this,this.Vk],this);A.abo([this,this.Sy,this.Lm],0
);},Sz:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this
,this.Vk],this);A.abo([this,this.AbZ,this.Sz],0);},Vk:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).AqA(this.K_),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pt,2,10))+A.abm(this.GF,8,10);var BQ=this.AM;this.By(A.ab0(aString
,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Af8:function(G){var F;if((!this.Ig||!this.A1)||!this.AF)return;if(!(F=this.
Ig,F[1].call(F[0])))this.AW.AES(true);else this.AW.AES(false);},EC:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L9===false)A.pe([this,this.
Vk],this);A.abo([this,this.PM,this.EC],0);},Ahk:function(E){if(this.Pt===E)return;
this.Pt=E;if(this.L9===false)A.pe([this,this.Vk],this);A.abo([this,this.Ano,this.
Ahk],0);},BAV:function(G){var F;if(!!this.JH){var H$=(F=this.JH,F[1].call(F[0]));
var A06=0;switch(H$){case 0:case 1:A06=0;break;case 2:A06=1;break;default:A.ab5(
"%s%e",Alc,H$);}this.EC(A06);}if(!this.Pt)this.Ex(4);else this.Ex(5);},Sy:function(
){return this.K_;},AbZ:function(){return this.GF;},PM:function(){return this.AnimalType;
},Ano:function(){return this.Pt;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C7._Init.call(this.C7={I:this},0);C.AQ0._Init.call(this.AW={I:this},0);C.AvK.
_Init.call(this.YE={I:this},0);C.AvK._Init.call(this.Kn={I:this},0);C.AsH._Init.
call(this.E9={I:this},0);C.I5._Init.call(this.I5={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARJ;var B;this.RF=5;this.AW.H(
BqV);this.YE.H(BqW);this.YE.EV(2);this.Kn.H(BqX);this.Kn.EV(16);this.E9.H(A$0);this.
I5.H(A$1);this.J(this.AW,0);this.J(this.YE,0);this.J(this.Kn,0);this.J(this.E9,0
);this.J(this.I5,0);this.C7.AEY([this,this.Sy,this.Lm]);this.AW.As([this,this.AbZ
,this.Sz]);this.YE.As([this,this.PM,this.EC]);this.Kn.As([this,this.Ano,this.Ahk
]);this.E9.CI(this.C7);this.E9.As([B=this.C7,B.B8,B.B9]);this.I5.A9B([B=A._GetAutoObject(
A.Device.Device),B.Av9,B.AyB]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ek;this.C7._Done();this.AW._Done();this.YE._Done();this.Kn._Done();this.E9._Done(
);this.I5._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit(
);this.AW._ReInit();this.YE._ReInit();this.Kn._ReInit();this.E9._ReInit();this.I5.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ek={AM:0,Awi:null,OE:null,
Q:null,EA:null,A1:null,AF:null,Ig:null,N:null,JH:null,Fi:null,E_:null,ACL:0,LQ:0
,A8:0,RF:0,Afk:true,Init:function(aArg){A.pe([this,this.LN],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A8)this.Bb(null);},Bl6:function(E){if(this.
ACL===E)return;this.ACL=E;this.An();},Wx:function(E){if(this.LQ===E)return;this.
LQ=E;this.An();},DJ:function(G){A.ab5("%s",Ald);},MF:function(s){this.DJ(s);},Ex:
function(EO){A.pe([this,this.MF],this);A.pe(this.Awi,this);if(!EO)A.pe(this.OE,this
);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);}
,C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},By:function(
E){A.ab5("%s",AoB);},Ol:function(G){if(this.A8>1)this.Ex(this.A8-1);},MT:function(
G){if((this.A8>0)&&(this.A8<this.RF))this.Ex(this.A8+1);},Uj:function(E){if(A.aaZ(
this.EA,E))return;if(!!this.EA)A.z$([this,this.A0j],this.EA,0);this.EA=E;if(!!E)
A.zX([this,this.A0j],this.EA,0);A.pe([this,this.A0j],this);},App:function(G){},A0j:
function(s){this.App(s);},OL:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1
)A.z$([this,this.A0n],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.A0n],E,0);if(!
!E)A.pe([this,this.A0n],this);},PN:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0p],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0p],E,0);if(
!!E)A.pe([this,this.A0p],this);},AaH:function(G){},A0p:function(s){this.AaH(s);}
,AaG:function(G){},A0n:function(s){this.AaG(s);},Uh:function(E){if(A.aaZ(this.Ig
,E))return;if(!!this.Ig)A.z$([this,this.A0m],this.Ig,0);this.Ig=E;if(!!E)A.zX([this
,this.A0m],E,0);if(!!E)A.pe([this,this.A0m],this);},AlX:function(G){},A0m:function(
s){this.AlX(s);},FQ:function(G){A.ab5("%s",A$2);},BF5:function(s){this.FQ(s);},G_:
function(G){this.Ex(0);},AjN:function(){A.ab5("%s",AoB);return 0;},AjP:function(
){A.ab5("%s",AoB);return 0;},LN:function(G){},Ant:function(E){if(A.aaZ(this.JH,E
))return;if(!!this.JH)A.z$([this,this.Ao1],this.JH,0);this.JH=E;if(!!E)A.zX([this
,this.Ao1],this.JH,0);A.pe([this,this.Ao1],this);},Ao1:function(G){},AE$:function(
E){if(A.aa0(this.OE,E))return;this.OE=E;},AFE:function(E){if(this.Afk===E)return;
this.Afk=E;this.An();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BM._Init.call(this.Fi={I:this},0);A.Core.BM._Init.call(this.E_={I:this},0);this.
__proto__=C.Ek;this.H(As2);this.ACL=A.jb.Text;this.LQ=A.jb.CS;this.Fi.Filter=6;this.
E_.Filter=7;this.Fi.BN=[this,this.Ol];this.E_.BN=[this,this.MT];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fi._Done();this.E_._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fi._ReInit(
);this.E_._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awi)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OE)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ig)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JH)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q9={AM:0,Dp:null,FF:
null,OE:null,EA:null,A1:null,AF:null,Ig:null,Q:null,JH:null,AEf:-1,Afk:true,AN5:
false,ATT:false,Asj:true,Init:function(aArg){A.pe([this,this.ABm],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dp)return;if(this.Dp.A8>0){if(this.Hf){this.Dp.
Wx(A.jb.CK);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Dp.Wx(A.jb.
CS);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hf)this.Dp.Wx(
A.jb.CK);else this.Dp.Wx(A.jb.CS);this.Dp.Bl6(this.V.AQ);}},IW:function(G){C.Eg.
IW.call(this,G);if(!this.Dp)return;if(!this.Dp.A8)this.FQ(this);else this.G_(this
);},Go:function(E){C.Eg.Go.call(this,E);if(!!this.Dp)this.Dp.N=E;},Uj:function(E
){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.App],this.EA,0);this.EA=
E;if(!!E)A.zX([this,this.App],this.EA,0);A.pe([this,this.App],this);},App:function(
G){if(!!this.Dp)this.Dp.Uj(this.EA);},OL:function(E){if(A.aaZ(this.A1,E))return;
this.A1=E;if(!!this.Dp)this.Dp.OL(E);},PN:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dp)this.Dp.PN(E);},Uh:function(E){if(A.aaZ(this.Ig,E))return;
this.Ig=E;if(!!this.Dp)this.Dp.Uh(E);},BBq:function(G){var AAk=0;if(!!this.Dp){AAk=
this.Dp.A8;this.Dp.N=null;this.HN(this.Dp);}switch(this.AEf){case 0:this.Dp=A._NewObject(
C.AeP,0);break;case 1:this.Dp=A._NewObject(C.ARK,0);break;case 2:this.Dp=A._NewObject(
C.ARJ,0);break;case 3:this.Dp=A._NewObject(C.ATV,0);break;case 4:this.Dp=A._NewObject(
C.ATU,0);break;case 5:this.Dp=A._NewObject(C.ARL,0);break;default:throw new Error(
BqY+this.AEf.toFixed());}this.J(this.Dp,0);this.Dp.Ant(this.JH);this.Dp.H(BqZ);this.
Dp.N=this.N;this.Dp.Uj(this.EA);this.Dp.Awi=[this,this.Awi];this.Dp.As([this,this.
Ue,this.By]);this.Dp.Uh(this.Ig);this.Dp.OL(this.A1);this.Dp.PN(this.AF);this.Dp.
AE$(this.OE);this.Dp.AFE(this.Afk);if(AAk>0)this.Dp.Ex(AAk);this.Bb(this.Dp);this.
An();},FQ:function(G){var B;var F;if(!!this.Dp){if(!!this.N)this.FF.Ajy((F=this.
N,F[1].call(F[0])));else this.FF=A._NewObject(C.Aep,0);this.Dp.FQ(this);}},G_:function(
G){var B;if(!!this.Dp)this.Dp.G_(this);},AjN:function(){if(!this.Dp)return 0;return this.
Dp.AjN();},AjP:function(){if(!this.Dp)return 0;return this.Dp.AjP();},C2:function(
G){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ue,this.
By],0);}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],
this);},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABm],this);},BmJ:function(
E){if(this.AEf===E)return;this.AEf=E;A.pe([this,this.BBq],this);},Ar2:function(E
){if(this.Asj===E)return;this.Asj=E;A.pe([this,this.ABm],this);},ABm:function(G){
var ApA;if(this.Asj){if(this.AN5)ApA=5;else ApA=0;}else if(this.ATT){if(A._GetAutoObject(
A.Device.Converter).ZZ(this.AM)===10)ApA=4;else ApA=3;}else if(A._GetAutoObject(
A.Device.Converter).ZZ(this.AM)===10)ApA=2;else ApA=1;this.BmJ(ApA);},Awi:function(
G){var F;if((!!this.N&&!!this.Dp)&&!this.Dp.A8)this.FF.AkP((F=this.N,F[1].call(F[
0])));this.An();},Ant:function(E){if(A.aaZ(this.JH,E))return;if(!!this.JH)A.z$([
this,this.Ao1],this.JH,0);this.JH=E;if(!!E)A.zX([this,this.Ao1],this.JH,0);A.pe([
this,this.Ao1],this);},Ao1:function(G){if(!!this.Dp)this.Dp.Ant(this.JH);},A93:function(
E){if(this.ATT===E)return;this.ATT=E;A.pe([this,this.ABm],this);},BlC:function(E
){if(this.AN5===E)return;this.AN5=E;A.pe([this,this.ABm],this);},AE$:function(E){
if(A.aa0(this.OE,E))return;this.OE=E;if(!!this.Dp)this.Dp.AE$(E);},AFE:function(
E){if(this.Afk===E)return;this.Afk=E;if(!!this.Dp)this.Dp.AFE(E);},Ue:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Q9;this.H(UU);this.V.R(As8);this.V.L(A.jb.Bm);this.FF=A._NewObject(C.Aep,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dp)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ig
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQ0={ET:null,FW:null,Eo:null,Dx:null,CU:null
,Ct:null,FI:function(E){if(this.M3===E)return;C.Le.FI.call(this,E);this.Ct.CT(E);
this.CU.CT(E);this.Dx.CT(E);this.Eo.CT(E);this.FW.CT(E);this.ET.CT(E);},Yr:function(
Hw){var B6=null;switch(Hw){case-1:case 0:B6=this.FX;break;case 1:B6=this.Ct;break;
case 2:B6=this.CU;break;case 3:B6=this.Dx;break;case 4:B6=this.Eo;break;case 5:B6=
this.FW;break;case 6:B6=this.ET;break;case 7:B6=this.GX;break;default:A.ab5("%s"
,AhX);}return B6;},_Init:function(aArg){C.Le._Init.call(this,aArg);C.DF._Init.call(
this.ET={I:this},0);C.DF._Init.call(this.FW={I:this},0);C.DF._Init.call(this.Eo={
I:this},0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQ0;this.H(Bq0);this.GX.
H(AID);this.ET.H(Ayu);this.FW.H(AZG);this.Eo.H(AZH);this.Dx.H(AZI);this.CU.H(AZJ
);this.Ct.H(AZK);this.FX.H(AZL);this.EN.H(A$Z);this.J(this.ET,-2);this.J(this.FW
,-2);this.J(this.Eo,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Ct,-2);
this.ET.Di=[this,this.GQ];this.FW.Di=[this,this.GQ];this.Eo.Di=[this,this.GQ];this.
Dx.Di=[this,this.GQ];this.CU.Di=[this,this.GQ];this.Ct.Di=[this,this.GQ];},_Done:
function(){this.__proto__=C.Le;this.ET._Done();this.FW._Done();this.Eo._Done();this.
Dx._Done();this.CU._Done();this.Ct._Done();C.Le._Done.call(this);},_ReInit:function(
){C.Le._ReInit.call(this);this.ET._ReInit();this.FW._ReInit();this.Eo._ReInit();
this.Dx._ReInit();this.CU._ReInit();this.Ct._ReInit();},_Mark:function(D){var B;
C.Le._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvK={Q:null,GX:null,FX:null,EN:null,Im:null,Il:null,M3:0,Uq:0,AM:0,F0:99,Init:
function(aArg){A.pe([this,this.LN],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EN.Z(false);this.EN.H(A.wC(this.Yr(0).M,this.Yr(-1).M));var Iy=((Ae&
0x40)===0x40);if(Iy){this.BfJ(A.jb.AV);this.BfK(A.jb.Bm);}else{this.BfJ(this.M3);
this.BfK(A.jb.Text);}this.Amj();},FI:function(E){if(this.M3===E)return;this.M3=E;
this.An();},LN:function(G){},Yr:function(Hw){var B6=null;switch(Hw){case-1:case 0:
B6=this.FX;break;case 1:B6=this.GX;break;default:A.ab5("%s",AhX);}return B6;},Kq:
function(E){if(this.Uq===E)return;this.Uq=E;this.Amj();},Amj:function(){var B;var
F;if(!!this.Q){var DW=this.FX;var Adx=this.Uq;var A7=(F=this.Q,F[1].call(F[0]));
while(!!DW){if(A7>0){DW.LZ(A7%10);A7=(A7/10)|0;}else if(Adx>0)DW.LZ(0);else DW.LZ(-
1);DW=(C.Ez.isPrototypeOf(B=this.AqN(DW,0x11))?B:null);Adx=Adx-1;}}},Af$:function(
G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af_:function(G){var F;var BQ=this.
AM;this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].
call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2
],this);},By:function(E){if(E<0)E=0;if(E>this.F0)E=this.F0;if(this.AM===E)return;
this.AM=E;this.An();},EV:function(E){if(this.F0===E)return;this.F0=E;this.An();}
,BfJ:function(aColor){this.FX.CT(aColor);this.GX.CT(aColor);},BfK:function(aColor
){this.FX.Zt(aColor);this.GX.Zt(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ez._Init.call(this.GX={I:this},0);C.Ez._Init.call(this.FX={I:this},
0);A.acg.BU._Init.call(this.EN={I:this},0);A.Core.BM._Init.call(this.Im={I:this}
,0);A.Core.BM._Init.call(this.Il={I:this},0);this.__proto__=C.AvK;this.H(Bq1);this.
M3=A.jb.CK;this.GX.H(AID);this.FX.H(Ayu);this.EN.H(Ayu);this.EN.Nf(2);this.EN.L(
A.jb.E1);this.Im.Filter=4;this.Il.Filter=5;this.J(this.GX,0);this.J(this.FX,0);this.
J(this.EN,0);this.Im.BN=[this,this.Af$];this.Im.D1=[this,this.Af$];this.Il.BN=[this
,this.Af_];this.Il.D1=[this,this.Af_];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.GX._Done();this.FX._Done();this.EN._Done();this.Im._Done();this.Il.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.GX._ReInit();this.FX._ReInit();this.EN._ReInit();this.Im._ReInit();this.Il.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ez={AgB:
null,Background:null,Text:null,Ez:-1,MY:0,AmL:0,Aqs:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ez<0)this.Text.R(Rm);else this.Text.R(this.Ez.toFixed(
));this.Background.L(this.MY);this.Text.L(this.AmL);},LZ:function(E){if(this.Ez===
E)return;var B6=E;if((B6<0)||(B6>9))B6=-1;this.Ez=B6;this.An();},CT:function(E){
if(this.MY===E)return;this.MY=E;this.An();},AeU:function(E){if(this.Aqs===E)return;
this.Aqs=E;this.AgB.Ar(E);if(E===false)this.Text.Z(true);},Zt:function(E){if(this.
AmL===E)return;this.AmL=E;this.An();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TE._Init.call(this.AgB={I:this},0);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ez;var B;
this.H(Atd);this.MY=A.jb.CK;this.AgB.Fm(750);this.AgB.Uk(750);this.AgB.AkA(750);
this.AmL=A.jb.Text;this.Background.AZ(0x3);this.Background.H(Atd);this.Text.AZ(0x3
);this.Text.H(Atd);this.Text.R(Rm);this.J(this.Background,0);this.J(this.Text,0);
this.AgB.Q=[B=this.Text,B.Fl,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgB._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgB._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fw={Y:null,I1:null,AOb:A.jV,ARZ:A.jV,Ta:0,AJJ:0,A1L:false,A1g:false,Init:function(
aArg){},CF:function(G){var B;C.AB.CF.call(this,G);A.zX([this,this.ABh],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fk,B.Fo],0);A.zX([this,this.MF],[B=A._GetAutoObject(A.Device.
Device).Am,B.Fk,B.Fo],0);A.pe([this,this.ABh],this);A.pe([this,this.MF],this);},
E3:function(G){var B;C.AB.E3.call(this,G);A.z$([this,this.ABh],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fk,B.Fo],0);},Bxz:function(L6){A._GetAutoObject(A.Device.Helper
).HL(L6);this.Ap7(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap7:function(L1,AcU){A.ab5("%s",Ald);},Vf:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===9))A.aaS([
this,this.Byx],this);else if(!!At&&(At.PopupState===5)){this.A1g=true;this.Ew(this
);}},Byx:function(G){if(this.Ta>0){this.A1g=false;this.Adk(this);this.A_r(0);}},
Ait:function(G){if((this.AJJ+1)<this.Ta)this.A_r(this.AJJ+1);else A.aaS([this,this.
Bv9],this);},Bv_:function(s){this.Ait(s);},A_r:function(E){this.AJJ=E;if(this.A1g===
false){this.Bxz(E);A.aaS([this,this.Bv_],this);var XI=(this.AJJ/this.Ta)*100;A._GetAutoObject(
A.Device.Device).A9(49,true,A.abk(XI,0,0),0,[this,this.Vf]);}},Aar:function(G){A.
_GetAutoObject(A.Device.Device).A9(49,false,Bq2,0,[this,this.Vf]);this.A1L=true;
A.pe([this,this.ALl],this);},Bv9:function(s){this.Aar(s);},Adk:function(G){this.
I1.Z(true);this.A1L=false;this.ALl(this);},BFZ:function(s){this.Adk(s);},AAz:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6r();A._GetAutoObject(A.Device.Device
).Am.Bl(Be);},Ew:function(G){A._GetAutoObject(C.A$).Fv();},A3j:function(G){A._GetAutoObject(
C.A$).Cg(84);},DJ:function(G){this.N.Z(true);this.N.CY(A.aaL(A.ach.E2));this.N.CC=[
this,this.Ew];this.N.Cs(A.aaL(A.ach.ADz));if(!A._GetAutoObject(A.Device.Device).
Am.Filter||A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(A.Device.Device
).Am.Filter)){this.N.Cl=null;this.N.I4.Dr(100);}else{this.N.Cl=[this,this.AAz];this.
N.I4.Dr(255);}this.N.C6(A.aaL(A.ach.Aex));this.N.Cm=[this,this.A3j];},MF:function(
s){this.DJ(s);},ABh:function(G){this.Ta=A._GetAutoObject(A.Device.Device).Am.Ca(
);if(this.Ta>0)A._GetAutoObject(A.Device.Device).A9(49,true,UX,0,[this,this.Vf]);
else{this.Adk(this);this.Aar(this);}},Aky:function(E){if(this.AOb===E)return;this.
AOb=E;A.pe([this,this.ALl],this);},ALl:function(G){var B;if(this.A1L===false){this.
I1.R(A.jV);return;}var Apc;if(!A._GetAutoObject(A.Device.Device).Am.Ca()){var Ade=
A._GetAutoObject(A.Device.Device).Am.Filter;A.z$([this,this.ABh],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fk,B.Fo],0);this.AAz(this);if(!A._GetAutoObject(A.Device.Device
).Am.QF()||!Ade)Apc=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACV(A._GetAutoObject(A.Device.Device).Am.Filter)===1)Apc=A.aaR(
A.acf.AN7);else Apc=A.aaR(A.acf.AN6);A._GetAutoObject(A.Device.Device).Am.Bl(Ade
);A.zX([this,this.ABh],[B=A._GetAutoObject(A.Device.Device).Am,B.Fk,B.Fo],0);}else
Apc=this.ARZ;Apc=Apc+(AZN+this.AOb);this.I1.R(Apc);},Ae5:function(E){if(this.ARZ===
E)return;this.ARZ=E;A.pe([this,this.ALl],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkQ._Init.call(this.I1={
I:this},0);this.__proto__=C.Fw;this.Dq(C.Abt);this.Y.H(Fb);this.Y.JO(1);this.I1.
H(Fb);this.J(this.Y,0);this.J(this.I1,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I1._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I1._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A60={Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A60;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvM={KZ:null,MR:null,AY:0,Yh:function(){this.KZ=null;this.MR=null;this.AY=0;
},Or:function(A7){var Hb;Hb=A._NewObject(C.A60,0);Hb.A4=A7;if(!this.KZ){this.KZ=
Hb;this.MR=Hb;this.AY=1;}else{this.MR.Ah=Hb;this.MR=Hb;this.AY=this.AY+1;}},AmT:
function(){var B;var RI=0;var Oe=this.KZ;while(!!Oe){RI+=Oe.A4;Oe=Oe.Ah;}return RI;
},AjO:function(){if(!this.AY)return 0;return this.AmT()/this.AY;},AqX:function(){
var B;if(!this.AY)return 0;var A1a=this.AjO();var Adb=0;var Oe=this.KZ;while(!!Oe
){Adb+=Math.pow(Oe.A4-A1a,2);Oe=Oe.Ah;}Adb/=this.AY;Adb=Math.sqrt(Adb);return Adb;
},_Init:function(aArg){this.__proto__=C.AvM;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOc={Ga:null,Aet:null,Yo:null,C5:null,I1:null,
CP:function(){this.A4f(this);},Init:function(aArg){A.zV([this,this.A4f],A._GetAutoObject(
A.Device.Device).Pl,0);A.pe([this,this.A4f],this);},Ew:function(G){A._GetAutoObject(
C.A$).Fv();},A4f:function(G){this.Yo.Cf(-1);this.I1.Z(!this.Ga.AX.Ca());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Ga._Init.call(this.Ga={I:this},0);C.
Aet._Init.call(this.Aet={I:this},0);C.Yo._Init.call(this.Yo={I:this},0);A.acg.C5.
_Init.call(this.C5={I:this},0);C.AkQ._Init.call(this.I1={I:this},0);this.__proto__=
C.AOc;this.N.Z(true);this.Dq(C.AO_);this.Ga.H(As$);this.Ga.NZ(C.AmK);this.Aet.H(
IR);this.Yo.H(As3);this.C5.DC(Bq3);this.C5.DM(Bq4);this.C5.Nf(3);this.C5.L(A.jb.
Text);this.I1.H(Aoj);this.I1.R((A.aaR(A.acf.A7J)+AZN)+A.aaR(A.acf.A55));this.J(this.
Ga,0);this.J(this.Aet,0);this.J(this.Yo,0);this.J(this.C5,0);this.J(this.I1,0);this.
N.CC=[this,this.Ew];this.N.CY(A.aaL(A.ach.E2));this.Ga.Zs(A._GetAutoObject(A.Device.
Device).Pl);this.Yo.Zs(A._GetAutoObject(A.Device.Device).Pl);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Ga._Done();this.Aet._Done();this.Yo._Done();
this.C5._Done();this.I1._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Ga._ReInit();this.Aet._ReInit();this.Yo._ReInit();this.C5.
_ReInit();this.I1._ReInit();this.I1.R((A.aaR(A.acf.A7J)+AZN)+A.aaR(A.acf.A55));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ga)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yo).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOf={At8:null,At7:null,At_:null,At9:null,Aua:null,At$:null,Auc:null,Aub:null
,AaJ:null,Yw:null,Abk:null,Abj:null,RatedAttribute:0,Init:function(aArg){this.SB(
2);},DE:function(G){var D5=(A.Core.BM.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SB(3);break;case 1:this.SB(2);break;case
4:this.SB(1);break;case 3:this.SB(4);break;default:this.SB(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SB(1);break;case 1:this.SB(4);break;case 4:this.
SB(3);break;case 3:this.SB(2);break;default:this.SB(0);}break;default:D5.NH=true;
}},Ap7:function(L1,AcU){if(!L1)return;var Ft=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcU,true);Ft.
CW(HV);var AAR=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAR.Initialize(
3,5,0,true);Ft.CW(AAR);L1.Bl(Ft);},Ait:function(G){var Ap5=0;var A3C=A._GetAutoObject(
A.Device.Device).Bt.Ca();var B1=A._NewObject(A.Device.Rating,0);while(Ap5<A3C){B1.
Er(Ap5,A._GetAutoObject(A.Device.Device).Bt);this.Bc3(B1,0);var BBL=A._GetAutoObject(
A.Device.Helper).ZQ(2);this.Bc3(B1,BBL);Ap5++;}C.Fw.Ait.call(this,G);},Aar:function(
G){A.pe([this,this.BcG],this);C.Fw.Aar.call(this,G);},Adk:function(G){this.At8=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.At7=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At_=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.At$=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aua=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aub=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auc=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fw.Adk.
call(this,G);},DJ:function(G){C.Fw.DJ.call(this,G);this.N.ON(true);this.N.OO(true
);},Bc3:function(D3,BbE){if(!D3||(D3.Timestamp<BbE))return;if(!BbE){this.At8.Set(
D3.Appearance,this.At8.Get(D3.Appearance)+1);this.At_.Set(D3.Faeces,this.At_.Get(
D3.Faeces)+1);this.Aua.Set(D3.Feed,this.Aua.Get(D3.Feed)+1);this.Auc.Set(D3.Respiratory
,this.Auc.Get(D3.Respiratory)+1);}else{this.At7.Set(D3.Appearance,this.At7.Get(D3.
Appearance)+1);this.At9.Set(D3.Faeces,this.At9.Get(D3.Faeces)+1);this.At$.Set(D3.
Feed,this.At$.Get(D3.Feed)+1);this.Aub.Set(D3.Respiratory,this.Aub.Get(D3.Respiratory
)+1);}},SB:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yw.Ks(this.AaJ.Ls(E));A.pe([this,this.BcG],this);},BcG:function(G){var AaK=null;
var AaL=null;switch(this.RatedAttribute){case 2:{AaK=this.At7;AaL=this.At8;}break;
case 4:{AaK=this.At9;AaL=this.At_;}break;case 1:{AaK=this.At$;AaL=this.Aua;}break;
case 0:{AaK=A._NewObject(A.Device.Int32ArrayWrapper,0);AaL=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaK=this.Aub;AaL=this.Auc;}break;default:throw new
Error(Bq5+this.RatedAttribute.toFixed());}var AGh=A._NewObject(A.acv.AUb,0);AGh.
Or(AaK.Get(3),A.jb.E1);AGh.Or(AaK.Get(2),A.jb.H6);AGh.Or(AaK.Get(1),A.jb.Gg);var
AGi=A._NewObject(A.acv.AUb,0);AGi.Or(AaL.Get(3),A.jb.E1);AGi.Or(AaL.Get(2),A.jb.
H6);AGi.Or(AaL.Get(1),A.jb.Gg);this.Abj.Ab8(AGh);this.Abk.Ab8(AGi);var A33=AaK.AmT(
)-AaK.Get(5);var Bff=0;var Bfd=0;if(A33>0){Bff=(AaK.Get(2)/A33)*100;Bfd=(AaK.Get(
1)/A33)*100;}var AK$=AaL.AmT()-AaL.Get(5);this.I1.Z(!AK$);var Bfg=0;var Bfe=0;if(
AK$>0){Bfg=(AaL.Get(2)/AK$)*100;Bfe=(AaL.Get(1)/AK$)*100;}this.Abj.A_p(A.abk(Bff
,0,0)+AfB);this.Abj.A95(A.abk(Bfd,0,0)+AfB);this.Abk.A_p(A.abk(Bfg,0,0)+AfB);this.
Abk.A95(A.abk(Bfe,0,0)+AfB);},_Init:function(aArg){C.Fw._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaJ={I:this},0);C.NE._Init.call(this.
Yw={I:this},0);C.ACB._Init.call(this.Abk={I:this},0);C.ACB._Init.call(this.Abj={
I:this},0);this.__proto__=C.AOf;this.Dq(C.AO$);this.Aky(A.aaR(A.acf.A56));this.Ae5(
A.aaR(A.acf.Ank));this.Yw.H(IR);this.Yw.Aj(true);this.Yw.T(A.aaR(A.acf.Axk)+A.aaR(
A.acf.Colon));this.Yw.Bh(false);this.Yw.BmH(false);this.Abk.H(Bq6);this.Abk.T(A.
aaR(A.acf.AF4));this.Abj.H(Bq7);this.Abj.T(A.aaR(A.acf.A69));this.I1.H(Aoj);this.
J(this.Yw,-1);this.J(this.Abk,-1);this.J(this.Abj,-1);this.At8=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At7=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At_=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.At9=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aua=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At$=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auc=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aub=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fw;this.AaJ._Done();this.Yw._Done();this.Abk._Done();this.Abj.
_Done();C.Fw._Done.call(this);},_ReInit:function(){C.Fw._ReInit.call(this);this.
AaJ._ReInit();this.Yw._ReInit();this.Abk._ReInit();this.Abj._ReInit();this.Aky(A.
aaR(A.acf.A56));this.Ae5(A.aaR(A.acf.Ank));this.Yw.T(A.aaR(A.acf.Axk)+A.aaR(A.acf.
Colon));this.Abk.T(A.aaR(A.acf.AF4));this.Abj.T(A.aaR(A.acf.A69));},_Mark:function(
D){var B;C.Fw._Mark.call(this,D);if((B=this.At8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At_)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aua)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At$)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Auc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aub)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOg={Aes:null,UK:null,UL:null,Aer:null,UH:null,UI:null,AJL:0,AJK:0,AJp:0,AJo:
0,Add:false,CP:function(){this.Aar(this);},Ap7:function(L1,AcU){if(!L1)return;var
Ft=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcU,true);Ft.CW(HV);var AA_=A._NewObject(A.Device.Int32FilterCriterion
,0);AA_.Initialize(7,2,0,true);Ft.CW(AA_);L1.Bl(Ft);},Ait:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJL++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJK++;var Ap5=0;var A3C=A._GetAutoObject(
A.Device.Device).Bt.Ca();var At6;var ABs=0;while(Ap5<A3C){this.Add=true;At6=A._GetAutoObject(
A.Device.Device).Bt.I2(Ap5,9);if(At6===1)ABs=1;else if((At6===2)&&(ABs!==1))ABs=
2;Ap5++;}if(ABs===1)this.AJo++;else if(ABs===2)this.AJp++;C.Fw.Ait.call(this,G);
},Aar:function(G){var Bfb=0;var Bfc=0;if(this.Ta>0){Bfb=(this.AJL/this.Ta)*100;Bfc=(
this.AJK/this.Ta)*100;}this.UK.Ks(((((((A.abk(Bfb,0,0)+AIE)+this.AJL.toFixed())+
CQ)+A.aaR(A.acf.AEl))+CQ)+this.Ta.toFixed())+O5);this.UL.Ks(((((((A.abk(Bfc,0,0)+
AIE)+this.AJK.toFixed())+CQ)+A.aaR(A.acf.AEl))+CQ)+this.Ta.toFixed())+O5);var Be$=
0;var Bfa=0;if(this.Ta>0){Be$=(this.AJp/this.Ta)*100;Bfa=(this.AJo/this.Ta)*100;
}this.UH.Ks(((((((A.abk(Be$,0,0)+AIE)+this.AJp.toFixed())+CQ)+A.aaR(A.acf.AEl))+
CQ)+this.Ta.toFixed())+O5);this.UI.Ks(((((((A.abk(Bfa,0,0)+AIE)+this.AJo.toFixed(
))+CQ)+A.aaR(A.acf.AEl))+CQ)+this.Ta.toFixed())+O5);this.I1.Z(!this.Add);C.Fw.Aar.
call(this,G);},Adk:function(G){this.AJo=0;this.AJp=0;this.AJK=0;this.AJL=0;this.
Add=false;C.Fw.Adk.call(this,G);},_Init:function(aArg){C.Fw._Init.call(this,aArg
);C.Agr._Init.call(this.Aes={I:this},0);C.Ajp._Init.call(this.UK={I:this},0);C.Ajp.
_Init.call(this.UL={I:this},0);C.Agr._Init.call(this.Aer={I:this},0);C.Ajp._Init.
call(this.UH={I:this},0);C.Ajp._Init.call(this.UI={I:this},0);this.__proto__=C.AOg;
this.Dq(C.APa);this.Aky(A.aaR(A.acf.A57));this.Ae5(A.aaR(A.acf.Art));this.Aes.H(
IR);this.Aes.Aj(true);this.Aes.T(A.aaR(A.acf.A5$));this.Aes.Bh(false);this.UK.H(
P8);this.UK.Aj(true);this.UK.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UK.
Bh(true);this.UK.AkD(2);this.UL.H(Aae);this.UL.Aj(true);this.UL.T(A.aaR(A.acf.Avq
)+A.aaR(A.acf.Colon));this.UL.Bh(true);this.UL.AkD(1);this.Aer.H(Ale);this.Aer.Aj(
true);this.Aer.T(A.aaR(A.acf.A6a));this.Aer.Bh(false);this.UH.H(Aos);this.UH.Aj(
true);this.UH.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UH.Bh(true);this.
UH.AkD(2);this.UI.H(As3);this.UI.Aj(true);this.UI.T(A.aaR(A.acf.Avq)+A.aaR(A.acf.
Colon));this.UI.Bh(true);this.UI.AkD(1);this.J(this.Aes,0);this.J(this.UK,0);this.
J(this.UL,0);this.J(this.Aer,0);this.J(this.UH,0);this.J(this.UI,0);this.UK.S(A.
aaL(A.fl.Ak));this.UL.S(A.aaL(A.fl.Ak));this.UH.S(A.aaL(A.fl.Ak));this.UI.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fw;this.Aes._Done();this.UK._Done(
);this.UL._Done();this.Aer._Done();this.UH._Done();this.UI._Done();C.Fw._Done.call(
this);},_ReInit:function(){C.Fw._ReInit.call(this);this.Aes._ReInit();this.UK._ReInit(
);this.UL._ReInit();this.Aer._ReInit();this.UH._ReInit();this.UI._ReInit();this.
Aky(A.aaR(A.acf.A57));this.Ae5(A.aaR(A.acf.Art));this.Aes.T(A.aaR(A.acf.A5$));this.
UK.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UL.T(A.aaR(A.acf.Avq)+A.aaR(
A.acf.Colon));this.Aer.T(A.aaR(A.acf.A6a));this.UH.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UI.T(A.aaR(A.acf.Avq)+A.aaR(A.acf.Colon));this.UK.S(A.aaL(A.fl.
Ak));this.UL.S(A.aaL(A.fl.Ak));this.UH.S(A.aaL(A.fl.Ak));this.UI.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.Fw._Mark.call(this,D);if((B=this.Aes)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aer)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UI)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqM={K7:null
,Aje:null,Ajf:null,Amk:null,Abx:null,WZ:null,Abu:null,SY:null,Abv:null,SZ:null,Aby:
null,W0:null,Ay:null,Ac_:0,AAl:0,Apv:0,A2m:0,Bdx:0,CP:function(){this.Aar(this);
},DE:function(G){switch(this.Cr.CO){case 4:{if(this.I1.Fl())return;var Qt=this.Y.
Br[1]+80;this.Y.F$([this.Y.Br[0],Qt]);this.Y.Vu(null,null);}break;case 5:{if(this.
I1.Fl())return;var Qt=this.Y.Br[1]-80;this.Y.F$([this.Y.Br[0],Qt]);this.Y.Vu(null
,null);}break;default:C.Fw.DE.call(this,G);}},Ap7:function(L1,AcU){if(!L1)return;
var Ft=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcU,true);Ft.CW(HV);var Ac6=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac6.Initialize(8,2,0,true);Ft.CW(Ac6);L1.Bl(Ft);},Ait:function(G){if(this.Bdn(
)){this.K7.Or(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arf()){var Qf=A._GetAutoObject(A.Device.Helper).MM(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qf>0){var A1X=A._GetAutoObject(A.acj.DV).Alw(Qf,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Aje.
Or(A1X);}}var A2F=A._GetAutoObject(A.Device.Device).Bt.Ca()-2;if(A2F>=0){var BzE=
A._GetAutoObject(A.Device.Device).Bt.ACX(A2F,8);var BzD=A._GetAutoObject(A.Device.
Device).Bt.HF(A2F,6);var Qf=A._GetAutoObject(A.Device.Helper).MM(BzD,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qf>0){var A1X=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BzE)/Qf)|0;this.Ajf.Or(A1X);}}if((A._GetAutoObject(
A.Device.Helper).W.Arf()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RL()<=180)){var ALw=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tl=A._GetAutoObject(A.Device.
Helper).MM(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BAR=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALw/Tl);this.Amk.Or(BAR);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Ac_++;this.Apv=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZQ(7)){this.AAl++;this.A2m=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bdx=A._GetAutoObject(A.Device.Helper).MM(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.Fw.Ait.call(
this,G);},Aar:function(G){var A4o=this.Aje.AjO()|0;var A4q=this.Ajf.AjO()|0;if(this.
Ac_>1)A._GetAutoObject(A.Device.Device).A9(56,true,this.Ac_.toFixed(),0,null);if(
this.Ac_===1)A._GetAutoObject(A.Device.Device).A9(53,true,this.Apv.toFixed(),0,null
);if(this.AAl>1)A._GetAutoObject(A.Device.Device).A9(52,true,this.AAl.toFixed(),
0,null);if(this.AAl===1)A._GetAutoObject(A.Device.Device).A9(57,true,(this.A2m.toFixed(
)+As7)+this.Bdx.toFixed(),0,null);if(this.K7.AY>0)this.WZ.T(((((((A._GetAutoObject(
A.Device.Converter).AxV(this.K7.AjO()|0,1)+Ayv)+A._GetAutoObject(A.Device.Converter
).AxV(this.K7.AqX()|0,1))+CQ)+A._GetAutoObject(A.acj.DV).AfZ())+Ayw)+this.K7.AY.
toFixed())+O5);else this.WZ.T(A.aaR(A.acf.Unknown));if(this.Aje.AY>0)this.SY.T(((((((
A._GetAutoObject(A.Device.Converter).S3(A4o,2,true)+Ayv)+A._GetAutoObject(A.Device.
Converter).S3(this.Aje.AqX()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DV).Aaw())+Ayw
)+this.Aje.AY.toFixed())+O5);else this.SY.T(A.aaR(A.acf.Unknown));if(this.Ajf.AY>
0)this.SZ.T(((((((A._GetAutoObject(A.Device.Converter).S3(A4q,2,true)+Ayv)+A._GetAutoObject(
A.Device.Converter).S3(this.Ajf.AqX()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DV).
Aaw())+Ayw)+this.Ajf.AY.toFixed())+O5);else this.SZ.T(A.aaR(A.acf.Unknown));if(this.
Amk.AY>0)this.W0.T(((((((A.abk(this.Amk.AjO(),0,1)+Ayv)+A.abk(this.Amk.AqX(),0,1
))+CQ)+A.aaR(A.acf.Bhw))+Ayw)+this.Amk.AY.toFixed())+O5);else this.W0.T(A.aaR(A.
acf.Unknown));var A4p=0;var A4r=0;var Add=false;if(this.K7.AY>0)Add=true;var H$=
0;if(!!A._GetAutoObject(A.Device.Device).Am.Filter){var AJ4=A._GetAutoObject(A.Device.
Device).Am.Filter.DL(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJ4)?AJ4:null))H$=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJ4)?AJ4:null
).A4;}if(this.Aje.AY>0){Add=true;A4p=A._GetAutoObject(A.Device.Converter).A$G(A4o
,H$);}if(this.Ajf.AY>0){Add=true;A4r=A._GetAutoObject(A.Device.Converter).A$G(A4q
,H$);}this.SY.AkD(A4p);this.SZ.AkD(A4r);this.I1.Z(!Add);C.Fw.Aar.call(this,G);},
Adk:function(G){this.K7.Yh();this.Aje.Yh();this.Ajf.Yh();this.Amk.Yh();this.Ac_=
0;this.AAl=0;this.Apv=0;this.A2m=0;C.Fw.Adk.call(this,G);},Fg:function(G){var B;
this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},Bdn:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.Fw._Init.call(this,aArg);C.Agr._Init.call(this.Abx={I:
this},0);C.IC._Init.call(this.WZ={I:this},0);C.Agr._Init.call(this.Abu={I:this},
0);C.Ajp._Init.call(this.SY={I:this},0);C.Agr._Init.call(this.Abv={I:this},0);C.
Ajp._Init.call(this.SZ={I:this},0);C.Agr._Init.call(this.Aby={I:this},0);C.IC._Init.
call(this.W0={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqM;
this.Dq(C.Avp);this.Aky(A.aaR(A.acf.A58));this.Ae5(A.aaR(A.acf.Akl));this.Abx.H(
AIA);this.Abx.Aj(true);this.Abx.T(A.aaR(A.acf.A4Z));this.Abx.Bh(false);this.Abx.
Kq(5);this.WZ.H(AZO);this.WZ.Aj(true);this.WZ.T(A.jV);this.WZ.Bh(true);this.Abu.
H(Ata);this.Abu.Aj(true);this.Abu.T(A.aaR(A.acf.ALV));this.Abu.Bh(false);this.Abu.
Kq(5);this.SY.H(Atb);this.SY.Aj(true);this.SY.T(A.jV);this.SY.Bh(true);this.SY.Ks(
A.jV);this.Abv.H(Atc);this.Abv.Aj(true);this.Abv.T(A.aaR(A.acf.Auu));this.Abv.Bh(
false);this.Abv.Kq(5);this.SZ.H(Bq8);this.SZ.Aj(true);this.SZ.T(A.jV);this.SZ.Bh(
true);this.SZ.Ks(A.jV);this.Aby.H(AZP);this.Aby.Aj(true);this.Aby.T(A.aaR(A.acf.
A47));this.Aby.Bh(false);this.Aby.Kq(5);this.W0.H(AoA);this.W0.Aj(true);this.W0.
T(A.jV);this.W0.Bh(true);this.Ay.H(Iq);this.J(this.Abx,-1);this.J(this.WZ,-1);this.
J(this.Abu,-1);this.J(this.SY,-1);this.J(this.Abv,-1);this.J(this.SZ,-1);this.J(
this.Aby,-1);this.J(this.W0,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fg];this.
K7=A._NewObject(C.AvM,0);this.Aje=A._NewObject(C.AvM,0);this.Ajf=A._NewObject(C.
AvM,0);this.WZ.S(A.aaL(A.fl.Af));this.SY.S(A.aaL(A.fl.Ak));this.SZ.S(A.aaL(A.fl.
Ak));this.W0.S(A.aaL(A.fl.Ak));this.Amk=A._NewObject(C.A6g,0);},_Done:function(){
this.__proto__=C.Fw;this.Abx._Done();this.WZ._Done();this.Abu._Done();this.SY._Done(
);this.Abv._Done();this.SZ._Done();this.Aby._Done();this.W0._Done();this.Ay._Done(
);C.Fw._Done.call(this);},_ReInit:function(){C.Fw._ReInit.call(this);this.Abx._ReInit(
);this.WZ._ReInit();this.Abu._ReInit();this.SY._ReInit();this.Abv._ReInit();this.
SZ._ReInit();this.Aby._ReInit();this.W0._ReInit();this.Ay._ReInit();this.Aky(A.aaR(
A.acf.A58));this.Ae5(A.aaR(A.acf.Akl));this.Abx.T(A.aaR(A.acf.A4Z));this.Abu.T(A.
aaR(A.acf.ALV));this.Abv.T(A.aaR(A.acf.Auu));this.Aby.T(A.aaR(A.acf.A47));this.WZ.
S(A.aaL(A.fl.Af));this.SY.S(A.aaL(A.fl.Ak));this.SZ.S(A.aaL(A.fl.Ak));this.W0.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.Fw._Mark.call(this,D);if((
B=this.K7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aje)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amk)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abt={_Init:function(aArg){C.AjR._Init.call(this,aArg);this.__proto__=C.Abt;this.
Dd.Aw(A.aaL(A.ach.ADv));},_className:"Application::HeaderEvaluationFilter"};C.Km={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DY:function(G){C.AjR.DY.call(this
,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdV(A._GetAutoObject(A.Device.
Device).Kg));},_Init:function(aArg){C.AjR._Init.call(this,aArg);this.__proto__=C.
Km;},_ReInit:function(){C.AjR._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avp={Init:function(aArg){this.Dd.Aw(A._GetAutoObject(A.acj.DV).BcW());},_Init:
function(aArg){C.Abt._Init.call(this,aArg);this.__proto__=C.Avp;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APa={Init:function(
aArg){this.Dd.Aw(A.aaL(A.ach.AbC));},_Init:function(aArg){C.Abt._Init.call(this,
aArg);this.__proto__=C.APa;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AO$={Init:function(aArg){this.Dd.Aw(A.aaL(A.ach.AmY));},_Init:function(aArg){
C.Abt._Init.call(this,aArg);this.__proto__=C.AO$;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AO_={Si:null,Dd:null,AP:null,CP:function(){this.Si.R(A.aaR(A.acf.ANb));},De:
function(E){C.BR.De.call(this,E);this.Si.L(E);this.Dd.L(E);},_Init:function(aArg
){C.BR._Init.call(this,aArg);C.CH._Init.call(this.Si={I:this},0);A.acg.Ap._Init.
call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0);this.__proto__=
C.AO_;this.Si.H(Bq9);this.Si.R(A.aaR(A.acf.ANb));this.Si.A6(0x11);this.Dd.H(Bq_);
this.AP.DC(Bq$);this.AP.DM(Bra);this.AP.L(A.jb.Bc);this.J(this.Si,0);this.J(this.
Dd,0);this.J(this.AP,0);this.Si.S(A.aaL(A.fl.Af));this.Si.A2(A.aaL(A.fl.Ak));this.
Dd.Aw(A.aaL(A.ach.AQi));},_Done:function(){this.__proto__=C.BR;this.Si._Done();this.
Dd._Done();this.AP._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Si._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Si.R(A.aaR(
A.acf.ANb));this.Si.S(A.aaL(A.fl.Af));this.Si.A2(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BR._Mark.call(this,D);if((B=this.Si)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aet={TR:null,Aj1:
null,AjY:null,AjZ:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CH._Init.
call(this.TR={I:this},0);A.acg.Ap._Init.call(this.Aj1={I:this},0);A.acg.Ap._Init.
call(this.AjY={I:this},0);A.acg.Ap._Init.call(this.AjZ={I:this},0);this.__proto__=
C.Aet;this.TR.H(Brb);this.TR.R(A.aaR(A.acf.Year));this.TR.A6(0x11);this.TR.L(A.jb.
Text);this.Aj1.H(A$3);this.Aj1.L(A.jb.Text);this.AjY.H(Brc);this.AjY.L(A.jb.Text
);this.AjZ.H(Brd);this.AjZ.L(A.jb.Text);this.J(this.TR,0);this.J(this.Aj1,0);this.
J(this.AjY,0);this.J(this.AjZ,0);this.TR.S(A.aaL(A.fl.Kl));this.TR.A2(A.aaL(A.fl.
Ii));this.Aj1.Aw(A.aaL(A.ach.AQt));this.AjY.Aw(A.aaL(A.ach.AQs));this.AjZ.Aw(A.aaL(
A.ach.AQA));},_Done:function(){this.__proto__=C.EB;this.TR._Done();this.Aj1._Done(
);this.AjY._Done();this.AjZ._Done();C.EB._Done.call(this);},_ReInit:function(){C.
EB._ReInit.call(this);this.TR._ReInit();this.Aj1._ReInit();this.AjY._ReInit();this.
AjZ._ReInit();this.TR.R(A.aaR(A.acf.Year));this.TR.S(A.aaL(A.fl.Kl));this.TR.A2(
A.aaL(A.fl.Ii));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.TR).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmK={Ajv:null,AP:null
,A_:null,Ea:null,UE:null,SQ:null,Gq:null,XI:0,AtF:0,AlA:0,ABt:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SQ.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.SQ.M[2]-1,0,this.SQ.M[
2]+1,aSize[1]]);this.UE.H([this.SQ.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UE.M[2]-1,0,this.UE.M[2]+1,aSize[1]]);this.Gq.H([this.UE.M[2],0,aSize[
0],aSize[1]]);this.Ajv.H(this.Gq.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABt.toFixed());this.SQ.L(this.V.AQ);this.SQ.R(this.AlA.toFixed());this.UE.
L(this.V.AQ);this.UE.R(this.AtF.toFixed());var B1=this.BAQ(this.XI);this.Gq.L(A.
_GetAutoObject(A.acj.Assessment).Xw(B1));this.Ajv.L(A._GetAutoObject(A.acj.Assessment
).Qk(B1));this.Gq.R(A.abk(this.XI,0,0)+AfB);},Cf:function(Ad){if(!this.AX)return;
this.Hn=Ad;Ad=(this.AX.Ca()-Ad)-1;if(!!this.AX){this.AlA=this.AX.CE(Ad,1);this.AtF=
this.AX.CE(Ad,2);this.ABt=this.AX.CE(Ad,0);if(this.AlA>0)this.XI=(this.AtF/this.
AlA)*100;else this.XI=0;this.An();}},BAQ:function(XI){if(XI>=8)return 1;else if(
XI>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ajv={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.
acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UE={I:this},0);A.acg.Text._Init.call(this.SQ={I:this},0
);A.acg.Text._Init.call(this.Gq={I:this},0);this.__proto__=C.AmK;this.Ajv.H(Aop);
this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.H(Aop);this.Ea.L(A.jb.Bc);this.UE.
L(A.jb.Text);this.SQ.H(Aop);this.SQ.L(A.jb.Text);this.Gq.L(A.jb.Text);this.J(this.
Ajv,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.UE,0);this.
J(this.SQ,0);this.J(this.Gq,0);this.UE.S(A.aaL(A.fl.Af));this.SQ.S(A.aaL(A.fl.Af
));this.Gq.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajv._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.UE._Done(
);this.SQ._Done();this.Gq._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajv._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea.
_ReInit();this.UE._ReInit();this.SQ._ReInit();this.Gq._ReInit();this.UE.S(A.aaL(
A.fl.Af));this.SQ.S(A.aaL(A.fl.Af));this.Gq.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gq)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajp={
BT:null,AxQ:A.jV,Rating:0,Ai:function(Ae){C.IC.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qk(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xw(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IC.S.call(this,E);if((E===A.aaL(A.fl.Kl))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Ii))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Ks:function(E){if(this.AxQ===E)return;this.AxQ=E;this.
BT.R(E);},AkD:function(E){if(this.Rating===E)return;this.Rating=E;this.An();},_Init:
function(aArg){C.IC._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Ajp;this.BT.AZ(0x34);this.BT.H(Aah);this.BT.I7(true);this.BT.
A6(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IC;this.BT._Done();C.IC._Done.call(
this);},_ReInit:function(){C.IC._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IC._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACB={
N2:null,SF:null,V:null,AnN:null,AnM:null,Acf:null,Ace:null,DK:Lu,A$L:A.jV,A_J:A.
jV,Ab8:function(E){if(this.N2===E)return;this.N2=E;this.SF.Ab8(this.N2);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_p:function(E){if(this.A$L===E
)return;this.A$L=E;this.Acf.R(E);},A95:function(E){if(this.A_J===E)return;this.A_J=
E;this.Ace.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SF._Init.
call(this.SF={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AK._Init.
call(this.AnN={I:this},0);A.acg.AK._Init.call(this.AnM={I:this},0);A.acg.Text._Init.
call(this.Acf={I:this},0);A.acg.Text._Init.call(this.Ace={I:this},0);this.__proto__=
C.ACB;this.H(Bre);this.SF.H(Brf);this.SF.Ar(false);this.SF.BmQ(360);this.SF.Bm0(
0.5);this.V.AZ(0x1D);this.V.H(W8);this.V.KR(true);this.V.R(Lu);this.V.L(A.jb.Text
);this.AnN.H(A$4);this.AnN.L(A.jb.H6);this.AnM.H(A$5);this.AnM.L(A.jb.Gg);this.Acf.
AZ(0x1D);this.Acf.H(A$4);this.Acf.L(A.jb.Text);this.Ace.AZ(0x1D);this.Ace.H(A$5);
this.Ace.L(A.jb.CS);this.J(this.SF,0);this.J(this.V,0);this.J(this.AnN,0);this.J(
this.AnM,0);this.J(this.Acf,0);this.J(this.Ace,0);this.SF.Bm1(A.aaL(A.acv.ATM));
this.V.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SF._Done();this.V._Done();this.AnN.
_Done();this.AnM._Done();this.Acf._Done();this.Ace._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SF._ReInit();this.V._ReInit(
);this.AnN._ReInit();this.AnM._ReInit();this.Acf._ReInit();this.Ace._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N2)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkQ={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.AkQ;this.H(UV);this.Background.AZ(0x3F);this.Background.
H(UV);this.Background.L(A.jb.Bjq);this.Text.AZ(0x3F);this.Text.H(UV);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Ra={Ak1:null,NR:null,C8:null,AcD:null,JJ:null,TemperatureUnit:null,MC:null,PQ:
null,Se:null,Us:null,Lo:null,Jb:null,Z2:null,Z1:null,Sg:null,HB:null,AjG:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlI());
this.Us.R(A._GetAutoObject(A.acj.Temperature).AlI());this.Sg.Z(!A._GetAutoObject(
A.Device.Device).AmM);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An6();this.AxN(
);this.AcG();this.AxO();},IW:function(G){this.WN(this);},CF:function(G){var B;C.
AB.CF.call(this,G);A.zX([this,this.AKA],[B=A._GetAutoObject(A.Device.Device),B.AEx
,B.AIQ],0);A.zX([this,this.AAA],[B=A._GetAutoObject(A.Device.Device),B.AEB,B.AIS
],0);A.zX([this,this.AAA],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.AZ6],0);A.
zX([this,this.A21],[B=A._GetAutoObject(A.Device.Device),B.Arw,B.Atf],0);A.zX([this
,this.A2T],[B=A._GetAutoObject(A.Device.Device),B.AEu,B.AIN],0);A._GetAutoObject(
A.Device.Device).AhG();if(A._GetAutoObject(A.Device.Device).AmM)A._GetAutoObject(
A.Device.Device).AeX(true);A._GetAutoObject(A.Device.Device).Axz();A.pe([this,this.
A2T],this);A.pe([this,this.AAA],this);A.pe([this,this.A21],this);},E3:function(G
){var B;A._GetAutoObject(A.Device.Device).AhG();A._GetAutoObject(A.Device.Device
).Un(false);A._GetAutoObject(A.Device.Device).Ae7(false);A._GetAutoObject(A.Device.
Device).AeX(false);A.z$([this,this.AKA],[B=A._GetAutoObject(A.Device.Device),B.AEx
,B.AIQ],0);A.z$([this,this.AAA],[B=A._GetAutoObject(A.Device.Device),B.AEB,B.AIS
],0);A.z$([this,this.AAA],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.AZ6],0);A.
z$([this,this.A21],[B=A._GetAutoObject(A.Device.Device),B.Arw,B.Atf],0);A.z$([this
,this.A2T],[B=A._GetAutoObject(A.Device.Device),B.AEu,B.AIN],0);},AAA:function(G
){this.An();},An6:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CK);this.C8.L(A.jb.Gg);this.JJ.L(this.C8.AQ);this.
MC.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CK);this.C8.L(A.jb.AV);this.JJ.L(A.jb.Text);this.MC.L(this.JJ.AQ);this.TemperatureUnit.
L(this.JJ.AQ);this.HB.L(A.jb.Gg);}}},AxN:function(){this.Ak1.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JJ.R(A.aaR(A.acf.ADL));this.C8.Aw(A.aaL(A.ach.AvD));this.C8.Cv(0);
this.NR.Cv(0);}break;case 1:{this.AVr(A._GetAutoObject(A.Device.Device).Lr,false
);this.C8.Aw(A.aaL(A.ach.AvD));this.NR.Cv(0);}break;case 2:{this.Se.R(A._GetAutoObject(
A.Device.Converter).Ak0(A._GetAutoObject(A.Device.Device).AF8));this.AVr(A._GetAutoObject(
A.Device.Device).Lr,false);this.C8.Aw(null);this.NR.Cv(1);this.AcD.Z(true);this.
PQ.Z(true);this.Se.Z(true);this.Us.Z(true);}break;case 3:{this.AUv();this.AVr(A.
_GetAutoObject(A.Device.Device).Lr,true);this.AcD.Z(false);this.PQ.Z(false);this.
Se.Z(false);this.Us.Z(false);}break;case 4:{this.JJ.R(A.aaR(A.acf.BjD));this.MC.
R(A.aaR(A.acu.Akk));this.C8.Aw(A.aaL(A.ach.AvF));this.C8.Cv(2);this.NR.Cv(0);}break;
default:A.ab5("%s%e",AHX,A._GetAutoObject(A.Device.Device).MeasureState);}},AcG:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Lr<=3240)||(A._GetAutoObject(A.Device.Device
).Lr>=5460))this.N.C6(null);else this.N.C6(A.aaL(A.ach.Aew));this.N.Cs(null);}break;
default:;}},AsD:function(G){A._GetAutoObject(C.A$).Fv();},WN:function(G){},A0h:function(
s){this.WN(s);},AkV:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BAD(this);break;default:;}},A0g:function(s){this.AkV(s);},AVr:
function(AoP,Bzt){if(Bzt)this.Lo.L(A.jb.Bm);else this.Lo.L(A.jb.Gg);if(AoP<=3240
){this.MC.Z(false);this.TemperatureUnit.Z(false);this.Lo.Z(true);this.Lo.R(A.aaR(
A.acu.AVb));}else if(AoP>=5460){this.MC.Z(false);this.TemperatureUnit.Z(false);this.
Lo.Z(true);this.Lo.R(A.aaR(A.acu.Bpn));}else{this.MC.Z(true);this.TemperatureUnit.
Z(true);this.Lo.Z(false);this.MC.R(A._GetAutoObject(A.Device.Converter).Ak0(AoP)
);}},AxO:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lr<=3240)||(A._GetAutoObject(A.Device.
Device).Lr>=5460))this.JJ.R(A.aaR(A.acf.ADL));else this.JJ.R(A.aaR(A.acf.BpZ));break;
default:;}},AxP:function(){},BpI:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Z2.Ar(true);break;case 4:this.Z1.Ar(true);break;default:{
this.Z2.Ar(false);this.Z1.Ar(false);A._GetAutoObject(A.Device.Device).Ae7(false);
}}},AKA:function(G){this.An();this.AxP();this.BpI();this.BpG();},A21:function(G){
if(A._GetAutoObject(A.Device.Device).AmN){this.Sg.L(A.jb.H6);this.Sg.Cv(1);}else{
this.Sg.L(A.jb.Bm);this.Sg.Cv(0);}},BAD:function(G){if(!A._GetAutoObject(A.Device.
Device).AmM)A._GetAutoObject(A.Device.Device).AeX(!A._GetAutoObject(A.Device.Device
).AmN);},BpG:function(){if(A._GetAutoObject(A.Device.Device).AmM){this.Sg.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).AeX(true);else A._GetAutoObject(A.Device.Device).AeX(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sg.Z(true);else this.Sg.Z(false);},AKC:function(
G){this.CF(this);},AUv:function(){A.ab5("%s",A$2);},A2T:function(G){if(A._GetAutoObject(
A.Device.Device).HB){this.JJ.H(Brg);this.MC.H(Brh);this.TemperatureUnit.H(Bri);}
else{this.JJ.H(Brj);this.MC.H(Brk);this.TemperatureUnit.H(Brl);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gi._Init.call(this.Ak1={I:this},0);A.acg.
Ap._Init.call(this.NR={I:this},0);A.acg.Ap._Init.call(this.C8={I:this},0);A.acg.
Ap._Init.call(this.AcD={I:this},0);A.acg.Text._Init.call(this.JJ={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MC={
I:this},0);A.acg.Text._Init.call(this.PQ={I:this},0);A.acg.Text._Init.call(this.
Se={I:this},0);A.acg.Text._Init.call(this.Us={I:this},0);C.CH._Init.call(this.Lo={
I:this},0);A.Device.TE._Init.call(this.Jb={I:this},0);A.Device.TE._Init.call(this.
Z2={I:this},0);A.Device.TE._Init.call(this.Z1={I:this},0);A.acg.Ap._Init.call(this.
Sg={I:this},0);C.CH._Init.call(this.HB={I:this},0);A.acl.TE._Init.call(this.AjG={
I:this},0);this.__proto__=C.Ra;var B;this.N.Z(true);this.Ak1.Fm(1000);this.Ak1.B2=
2;this.NR.H(Brm);this.NR.L(A.jb.CS);this.C8.H(Brn);this.C8.L(A.jb.AV);this.C8.Cv(
0);this.C8.Z(true);this.AcD.H(Bro);this.AcD.L(A.jb.Text);this.AcD.Z(false);this.
JJ.KR(true);this.JJ.R(A.aaR(A.acf.ADL));this.JJ.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.MC.A6(0x14);this.MC.R(A.aaR(A.acu.
Akk));this.MC.L(A.jb.Text);this.PQ.H(Brp);this.PQ.R(A.aaR(A.acf.PQ));this.PQ.L(A.
jb.Text);this.PQ.Z(false);this.Se.H(Brq);this.Se.A6(0x14);this.Se.R(Brr);this.Se.
L(A.jb.Text);this.Se.Z(false);this.Us.H(Brs);this.Us.R(Brt);this.Us.L(A.jb.Text);
this.Us.Z(false);this.Lo.H(Bru);this.Lo.R(A.aaR(A.acu.AVb));this.Lo.A6(0x12);this.
Lo.L(A.jb.Gg);this.Jb.B2=false;this.Jb.Cw=true;this.Jb.HM(1);this.Jb.Fm(4000);this.
Jb.Uk(0);this.Z2.B2=false;this.Z2.Cw=true;this.Z2.HM(2);this.Z2.Fm(400);this.Z2.
Uk(200);this.Z1.B2=false;this.Z1.Cw=true;this.Z1.HM(3);this.Z1.Fm(500);this.Z1.Uk(
250);this.Sg.H(Brv);this.HB.H(Brw);this.HB.Z(A._GetAutoObject(A.Device.Device).HB
);this.HB.R(A.aaR(A.acf.HB));this.HB.A6(0x12);this.HB.L(A.jb.Gg);this.AjG.Ar(A._GetAutoObject(
A.Device.Device).HB);this.AjG.Fm(500);this.AjG.Uk(1000);this.J(this.NR,0);this.J(
this.C8,0);this.J(this.AcD,0);this.J(this.JJ,0);this.J(this.TemperatureUnit,0);this.
J(this.MC,0);this.J(this.PQ,0);this.J(this.Se,0);this.J(this.Us,0);this.J(this.Lo
,0);this.J(this.Sg,0);this.J(this.HB,0);this.N.CC=[this,this.AsD];this.N.Cl=[this
,this.A0g];this.N.Cm=[this,this.A0h];this.N.CY(A.aaL(A.ach.Aev));this.Ak1.Q=[B=this.
C8,B.ASq,B.Cv];this.NR.Aw(A.aaL(A.ach.NR));this.C8.Aw(A.aaL(A.ach.AvD));this.AcD.
Aw(A.aaL(A.ach.AQK));this.JJ.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MC.S(A.aaL(A.fl.Aeo));this.PQ.S(A.aaL(A.fl.Af));this.Se.S(A.aaL(A.fl.EL
));this.Us.S(A.aaL(A.fl.EL));this.Lo.S(A.aaL(A.fl.Aeo));this.Lo.A2(A.aaL(A.fl.EL
));this.Lo.Cu(A.aaL(A.fl.Af));this.Jb.Q=[B=A._GetAutoObject(A.Device.Device),B.ASH
,B.A0a];this.Z2.Q=[B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIT];this.Z1.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEC,B.AIT];this.Sg.Aw(A.aaL(A.ach.AqP));this.
HB.S(A.aaL(A.fl.EL));this.HB.A2(A.aaL(A.fl.Kl));this.HB.Cu(A.aaL(A.fl.Ii));this.
AjG.Q=[B=this.HB,B.Fl,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Ak1._Done();this.NR._Done();this.C8._Done();this.AcD._Done();this.JJ._Done(
);this.TemperatureUnit._Done();this.MC._Done();this.PQ._Done();this.Se._Done();this.
Us._Done();this.Lo._Done();this.Jb._Done();this.Z2._Done();this.Z1._Done();this.
Sg._Done();this.HB._Done();this.AjG._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Ak1._ReInit();this.NR._ReInit();this.C8._ReInit();
this.AcD._ReInit();this.JJ._ReInit();this.TemperatureUnit._ReInit();this.MC._ReInit(
);this.PQ._ReInit();this.Se._ReInit();this.Us._ReInit();this.Lo._ReInit();this.Jb.
_ReInit();this.Z2._ReInit();this.Z1._ReInit();this.Sg._ReInit();this.HB._ReInit(
);this.AjG._ReInit();this.JJ.R(A.aaR(A.acf.ADL));this.MC.R(A.aaR(A.acu.Akk));this.
PQ.R(A.aaR(A.acf.PQ));this.Lo.R(A.aaR(A.acu.AVb));this.HB.R(A.aaR(A.acf.HB));this.
JJ.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MC.S(A.aaL(A.fl.
Aeo));this.PQ.S(A.aaL(A.fl.Af));this.Se.S(A.aaL(A.fl.EL));this.Us.S(A.aaL(A.fl.EL
));this.Lo.S(A.aaL(A.fl.Aeo));this.Lo.A2(A.aaL(A.fl.EL));this.Lo.Cu(A.aaL(A.fl.Af
));this.HB.S(A.aaL(A.fl.EL));this.HB.A2(A.aaL(A.fl.Kl));this.HB.Cu(A.aaL(A.fl.Ii
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ak1)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Us
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjG)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AU1={AcG:
function(){C.Ra.AcG.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cs(null);this.N.C6(A.aaL(A.ach.AvG));}break;default:;}},
WN:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Lr>3240)&&(A._GetAutoObject(A.Device.Device
).Lr<5460)){A._GetAutoObject(A.Device.Device).AhG();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKC(this);break;default:;}},AxO:
function(){C.Ra.AxO.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JJ.R(A.aaR(A.acf.BjE));break;default:;}},AxP:function(){C.Ra.AxP.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WC(16711680);this.Jb.Ar(true);}break;default:this.Jb.Ar(false);
}},AUv:function(){this.C8.Aw(A.aaL(A.ach.AvF));this.C8.Cv(0);this.NR.Cv(0);},_Init:
function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.AU1;this.Dq(C.AO8);},
_className:"Application::TemperatureMeasurementScreen"};C.APb={Dd:null,II:null,NT:
null,AP:null,AgZ:null,A_:null,De:function(E){C.BR.De.call(this,E);this.Dd.L(E);this.
II.L(E);this.NT.L(E);this.AgZ.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.Ap._Init.call(this.II={I:this},0
);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.AgZ={I:this},0);A.acg.C5._Init.call(this.A_={I:this},
0);this.__proto__=C.APb;this.Dd.H(Ayr);this.II.H(Aoq);this.NT.H(AHx);this.AP.DC(
A$6);this.AP.DM(A$7);this.AP.L(A.jb.Bc);this.AgZ.H(Brx);this.AgZ.L(A.jb.CS);this.
A_.DC(Bry);this.A_.DM(Brz);this.A_.L(A.jb.Bc);this.J(this.Dd,0);this.J(this.II,0
);this.J(this.NT,0);this.J(this.AP,0);this.J(this.AgZ,0);this.J(this.A_,0);this.
Dd.Aw(A.aaL(A.ach.ADv));this.II.Aw(A.aaL(A.ach.Aex));this.NT.Aw(A.aaL(A.ach.Avy)
);this.AgZ.Aw(A.aaL(A.ach.AQh));},_Done:function(){this.__proto__=C.BR;this.Dd._Done(
);this.II._Done();this.NT._Done();this.AP._Done();this.AgZ._Done();this.A_._Done(
);C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Dd._ReInit(
);this.II._ReInit();this.NT._ReInit();this.AP._ReInit();this.AgZ._ReInit();this.
A_._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Dd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dc={Eq:null,DS:null,AGt:
0,ANJ:0,Init:function(aArg){A.zV([this,this.ALi],A._GetAutoObject(A.Device.Device
).Am,0);A.pe([this,this.ALi],this);},ALi:function(G){var Ad=this.AGt;if(Ad<0){this.
DS.Hi();this.DS.EC(this.ANJ);return;}this.DS.EC(A._GetAutoObject(A.Device.Device
).Am.AmR(Ad,14));this.DS.AEZ(A._GetAutoObject(A.Device.Device).Am.I2(Ad,13));this.
DS.AeY(A._GetAutoObject(A.Device.Device).Am.H1(Ad,8));this.DS.Ul(A._GetAutoObject(
A.Device.Device).Am.H1(Ad,11));this.DS.Ae2(A._GetAutoObject(A.Device.Device).Am.
H1(Ad,12));this.DS.Ae4(A._GetAutoObject(A.Device.Device).Am.CE(Ad,5));},A98:function(
E){if(this.AGt===E)return;this.AGt=E;A.pe([this,this.ALi],this);},A9A:function(E
){if(this.ANJ===E)return;this.ANJ=E;A.pe([this,this.ALi],this);},A8M:function(){
return this.AGt;},_Init:function(aArg){C.EB._Init.call(this,aArg);C.CH._Init.call(
this.Eq={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dc;this.
Eq.H(BrA);this.Eq.R(A.aaR(A.acf.GJ));this.Eq.A6(0x11);this.Eq.L(A.jb.Text);this.
DS.H(AZQ);this.J(this.Eq,0);this.J(this.DS,0);this.Eq.S(A.aaL(A.fl.Af));this.Eq.
A2(A.aaL(A.fl.Ak));this.Eq.Cu(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){
this.__proto__=C.EB;this.Eq._Done();this.DS._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Eq._ReInit();this.DS._ReInit();this.Eq.R(
A.aaR(A.acf.GJ));this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.Ak));this.Eq.Cu(
A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Eq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KN={AgG:null,Text:null,Aff:null,De:function(E
){C.BR.De.call(this,E);this.AgG.L(E);this.Text.L(E);this.Aff.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgG={I:this},0);C.CH._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Aff={I:this},0);this.__proto__=
C.KN;this.AgG.H(BrB);this.AgG.L(A.jb.Text);this.Text.H(BrC);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Aff.H(BrD);this.Aff.L(A.jb.Text);this.
J(this.AgG,0);this.J(this.Text,0);this.J(this.Aff,0);this.AgG.Aw(A.aaL(A.ach.APd
));this.Text.S(A.aaL(A.fl.Kl));this.Text.A2(A.aaL(A.fl.Ii));},_Done:function(){this.
__proto__=C.BR;this.AgG._Done();this.Text._Done();this.Aff._Done();C.BR._Done.call(
this);},_ReInit:function(){C.BR._ReInit.call(this);this.AgG._ReInit();this.Text.
_ReInit();this.Aff._ReInit();this.Text.S(A.aaL(A.fl.Kl));this.Text.A2(A.aaL(A.fl.
Ii));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AgG)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aff
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AO6={
_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AO6;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AO8={_Init:function(
aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AO8;this.JU(this.Aff,-2);this.
Aff.Aw(A.aaL(A.ach.AbC));},_className:"Application::HeaderDeviceTemperature"};C.
Yo={Ai:function(Ae){C.AmK.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bpo)+A.aaR(A.acf.Colon
));},Cf:function(Ad){var B;if(!this.AX)return;this.AlA=0;this.AtF=0;this.XI=0;if(
!!this.AX){var O;for(O=0;O<this.AX.Ca();O++){this.AlA+=this.AX.CE(O,1);this.AtF+=
this.AX.CE(O,2);}if(this.AlA>0)this.XI=(this.AtF/this.AlA)*100;this.An();}},_Init:
function(aArg){C.AmK._Init.call(this,aArg);this.__proto__=C.Yo;this.AP.Z(false);
this.A_.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.
Ii));},_ReInit:function(){C.AmK._ReInit.call(this);this.V.S(A.aaL(A.fl.Kl));this.
V.A2(A.aaL(A.fl.Ii));},_className:"Application::EvaluationLossesSumItem"};C.A6f={
Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A6f;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6g={KZ:null,MR:null,AY:0,Yh:function(){this.KZ=null;this.MR=null;this.AY=0;
},Or:function(A7){var Hb;Hb=A._NewObject(C.A6f,0);Hb.A4=A7;if(!this.KZ){this.KZ=
Hb;this.MR=Hb;this.AY=1;}else{this.MR.Ah=Hb;this.MR=Hb;this.AY=this.AY+1;}},AmT:
function(){var B;var RI=0;var Oe=this.KZ;while(!!Oe){RI+=Oe.A4;Oe=Oe.Ah;}return RI;
},AjO:function(){if(!this.AY)return 0;return this.AmT()/this.AY;},AqX:function(){
var B;if(!this.AY)return 0;var A1a=this.AjO();var Adb=0;var Oe=this.KZ;while(!!Oe
){Adb+=Math.pow(Oe.A4-A1a,2);Oe=Oe.Ah;}Adb/=this.AY;Adb=Math.sqrt(Adb);return Adb;
},_Init:function(aArg){this.__proto__=C.A6g;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agr={Background:null,V:null,KS:0,Uq:5,Hf:false
,Ai:function(Ae){C.Hc.Ai.call(this,Ae);if(this.Hf)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CK);},T:function(E){C.Hc.T.call(this,E);this.V.R(E);},Bh:
function(E){if(this.Hf===E)return;this.Hf=E;this.An();},Kq:function(E){if(this.Uq===
E)return;this.Uq=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hc._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CH.
_Init.call(this.V={I:this},0);this.__proto__=C.Agr;this.H(BF);this.Background.AZ(
0x3F);this.Background.H(BF);this.V.AZ(0x3F);this.V.H(AIt);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KS=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(A.aaL(A.fl.Bi));},_Done:function(
){this.__proto__=C.Hc;this.Background._Done();this.V._Done();C.Hc._Done.call(this
);},_ReInit:function(){C.Hc._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(A.aaL(A.fl.
Bi));},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AN1={Ww:function(G){this.Agp();this.IY(A.aaR(
A.acf.AVa),[this,this.ATC],5);this.IY(A.aaR(A.acf.AU_),[this,this.ATB],7);this.IY(
A.aaR(A.acf.Calving),[this,this.Blk],11);this.IY(A.aaR(A.acf.AnZ),[this,this.AwO
],2);this.IY(A.aaR(A.acf.AdQ),[this,this.AEN],1);this.IY(A.aaR(A.acf.Aux),[this,
this.AEH],0);A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.And
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(6);},DE:function(G){}
,Abr:function(){return C.AM8;},Abs:function(){return C.APA;},Q6:function(G){A._GetAutoObject(
A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.Helper).ACR());},HO:function(G){
C.GW.HO.call(this,G);if(this.Akh()===false){this.N.Cs(A.aaL(A.ach.ADs));this.N.Cl=[
this,this.A5O];this.N.FJ(A.jV);}this.N.ON(false);this.N.OO(false);},Agc:function(
){A._GetAutoObject(C.A$).Cg(62);},_Init:function(aArg){C.GW._Init.call(this,aArg
);this.__proto__=C.AN1;var B;this.Dq(C.AO9);this.Dz(A.aaR(A.acf.ARY));this.AwJ([
B=A._GetAutoObject(A.Device.Device),B.A8f,B.BaL]);},_ReInit:function(){C.GW._ReInit.
call(this);this.Dz(A.aaR(A.acf.ARY));},_className:"Application::DryCowListScreen"
};C.AN0={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AN0;this.
Lb.Ar(false);this.Lb.Aj(false);this.Lb.Z(false);this.Jn.Ar(false);this.Jn.Aj(false
);this.Jn.Z(false);},_className:"Application::DryCowListFilterScreen"};C.AO9={DY:
function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).
AdV(9));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.AO9;}
,_className:"Application::HeaderDryCowListFilter"};C.Abo={Filter:null,LW:null,AGW:
A.jV,Ep:0,AF2:1,Operator:1,Bk:function(aSize){C.Acn.Bk.call(this,aSize);this.V.H([
15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Acn.Ai.call(this,Ae);this.LW.
L(this.V.AQ);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.
z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$],E,0);A.
pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.Filter
,F[1].call(F[0])))this.To((F=this.Filter,F[1].call(F[0])).DL(this.Ep,this.Operator
));else this.To(null);},Nb:function(E){if(this.Ep===E)return;this.Ep=E;A.pe([this
,this.L$],this);},To:function(AH){if(!!AH){var A1P;if(this.AF2!==1)A1P=this.AF2;
else A1P=AH.Operator;this.T((this.AGW+CQ)+A._GetAutoObject(A.Device.Converter).A6b(
A1P));this.Zx(false);}else{this.T(this.AGW);this.Zx(true);}},OM:function(E){if(this.
Operator===E)return;this.Operator=E;A.pe([this,this.L$],this);},AFM:function(E){
if(this.AGW===E)return;this.AGW=E;A.pe([this,this.L$],this);},A9W:function(E){if(
this.AF2===E)return;this.AF2=E;A.pe([this,this.L$],this);},_Init:function(aArg){
C.Acn._Init.call(this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.
Abo;this.H(As2);this.AW.H(BrE);this.LW.H(AZR);this.JU(this.V,-1);this.J(this.LW,
0);},_Done:function(){this.__proto__=C.Acn;this.LW._Done();C.Acn._Done.call(this
);},_ReInit:function(){C.Acn._ReInit.call(this);this.LW._ReInit();},_Mark:function(
D){var B;C.Acn._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.AjI={LW:null,Ai:function(Ae){C.Qz.Ai.call(this,Ae);this.LW.L(this.V.AQ);},To:
function(AH){if(!!AH){this.H4.Cv(1);this.Zx(true);this.LW.A9N(false);}else{this.
H4.Cv(0);this.Zx(false);this.LW.A9N(true);}},_Init:function(aArg){C.Qz._Init.call(
this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.AjI;this.I_=20;this.
LW.H(AZR);this.J(this.LW,0);},_Done:function(){this.__proto__=C.Qz;this.LW._Done(
);C.Qz._Done.call(this);},_ReInit:function(){C.Qz._ReInit.call(this);this.LW._ReInit(
);},_Mark:function(D){var B;C.Qz._Mark.call(this,D);if((B=this.LW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABS={Q:null,CP:function(
){this.T(A._GetAutoObject(A.Device.Helper).AmS(this.TableId,this.Ep));},To:function(
AH){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.H4.Cv(1);else this.H4.Cv(
0);},Kc:function(G){A.pe([this,this.L$],this);},As:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.Kc],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
Kc],E,0);if(!!E)A.pe([this,this.Kc],this);},_Init:function(aArg){C.Qz._Init.call(
this,aArg);this.__proto__=C.ABS;},_ReInit:function(){C.Qz._ReInit.call(this);this.
CP();},_Mark:function(D){var B;C.Qz._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.APA={YT:null,I6:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YT={I:this},0);A.acg.Text._Init.call(this.I6={I:this},0);this.__proto__=
C.APA;this.A9A(1);this.YT.H(BrF);this.YT.KR(true);this.YT.R(A.aaR(A.acf.AD0));this.
YT.L(A.jb.Text);this.I6.H(S6);this.I6.R(((A.aaR(A.acf.RL)+A$8)+A.aaR(A.acf.A$K))+
O5);this.I6.L(A.jb.Text);this.J(this.YT,0);this.J(this.I6,0);this.YT.S(A.aaL(A.fl.
Ak));this.I6.S(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.Dc;this.YT._Done(
);this.I6._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this
);this.YT._ReInit();this.I6._ReInit();this.YT.R(A.aaR(A.acf.AD0));this.I6.R(((A.
aaR(A.acf.RL)+A$8)+A.aaR(A.acf.A$K))+O5);this.YT.S(A.aaL(A.fl.Ak));this.I6.S(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.YT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AM8={Mg:null,KO:null,AdP:null,AP:null,A_:null
,Xn:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mg.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KO.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KO.M[2]-1,0,this.
KO.M[2]+1,aSize[1]]);this.AdP.H([this.KO.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KO.L(this.V.AQ);this.AdP.L(this.V.AQ);if(!!this.Xn&&(
this.Xn!==5)){this.Mg.L(A._GetAutoObject(A.acj.Assessment).Qk(this.Xn));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xw(this.Xn));}else this.Mg.L(this.Background.
AQ);},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Md=this.AX.
CE(Ad,1);var A2k=this.AX.CE(Ad,29);var Td=this.AX.HF(Ad,4);var LP=this.AX.I2(Ad,
13);var AlD=this.AX.I2(Ad,17);var AlM=this.AX.H1(Ad,11);this.Xn=A._GetAutoObject(
A.Device.Helper).AMh(LP,AlM,AlD);this.T(Md.toFixed());this.KO.R(A2k.toFixed());this.
AdP.R(A._GetAutoObject(A.acj.KJ).ACN(Td,A._GetAutoObject(A.Device.Helper).Dv(),BrG
));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.call(
this.Mg={I:this},0);A.acg.Text._Init.call(this.KO={I:this},0);A.acg.Text._Init.call(
this.AdP={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(
this.A_={I:this},0);this.__proto__=C.AM8;this.Mg.H(As9);this.AP.L(A.jb.Bc);this.
A_.L(A.jb.Bc);this.J(this.Mg,0);this.J(this.KO,0);this.J(this.AdP,0);this.J(this.
AP,0);this.J(this.A_,0);this.KO.S(A.aaL(A.fl.Af));this.AdP.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mg._Done();this.KO._Done(
);this.AdP._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mg._ReInit();this.KO._ReInit();this.AdP.
_ReInit();this.AP._ReInit();this.A_._ReInit();this.KO.S(A.aaL(A.fl.Af));this.AdP.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mg
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RS={AJO:0,Bdk:false,Ai:function(Ae){C.Fu.Ai.call(this,Ae);if(this.Bdk){this.
T(A.aaR(A.acf.ANY));this.Ks(A.jV);}else{this.T(A.aaR(A.acf.Bjl));if(this.AJO>0)this.
Ks(this.AJO.toFixed());else this.Ks(Xb);}},Cf:function(G){C.Fu.Cf.call(this,G);this.
Bdk=A._GetAutoObject(A.Device.Helper).W.IsDry;var Aly=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Aly>0)this.AJO=A._GetAutoObject(A.Device.Helper).
MM(Aly,A._GetAutoObject(A.Device.Helper).Dv());else this.AJO=0;this.An();},_Init:
function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RS;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMm={ALs:A.jV,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.RL));
this.Ks(this.ALs);},Cf:function(G){C.Fu.Cf.call(this,G);var Td=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALs=A._GetAutoObject(A.acj.KJ).ACN(Td,A._GetAutoObject(
A.Device.Helper).Dv(),((((BrH+A.aaR(A.acf.BgC))+BrI)+A.aaR(A.acf.BgB))+BrJ)+A.aaR(
A.acf.ALW));this.An();},_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=
C.AMm;this.ALs=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fu._ReInit.call(this);
this.ALs=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANS={Ua:null,Za:null,Wm:null,Wn:null,Sv:null,Init:function(aArg){this.Bb(this.
Ua);A.pe([this,this.MF],this);},XC:function(G){A._GetAutoObject(A.Device.Device).
Ds(1);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Na._Init.call(this.Ua={
I:this},0);C.Na._Init.call(this.Za={I:this},0);C.Na._Init.call(this.Wm={I:this},
0);C.AbU._Init.call(this.Wn={I:this},0);C.T9._Init.call(this.Sv={I:this},0);this.
__proto__=C.ANS;var B;this.Dq(C.AO6);this.Ua.H(IR);this.Ua.Aj(true);this.Ua.T(A.
aaR(A.acf.ACn));this.Ua.Bh(false);this.Ua.Nd(83);this.Za.H(P8);this.Za.Aj(true);
this.Za.T(A.acf.Info);this.Za.Bh(true);this.Za.Nd(82);this.Wm.H(Aae);this.Wm.Aj(
true);this.Wm.T(A.aaR(A.acf.AGw));this.Wm.Bh(false);this.Wm.Nd(64);this.Wn.H(Ale
);this.Wn.Aj(true);this.Wn.T(A.aaR(A.acf.TempMeasurement));this.Wn.Bh(true);this.
Wn.Nd(60);this.Sv.H(Aos);this.Sv.Aj(true);this.Sv.T(A.aaR(A.acf.ACI));this.Sv.Bh(
false);this.J(this.Ua,-1);this.J(this.Za,-1);this.J(this.Wm,-1);this.J(this.Wn,-
1);this.J(this.Sv,-1);this.N.Cl=[this,this.XC];this.N.Cs(A.aaL(A.ach.ADA));this.
Ua.AR=[B=this.Ua,B.Ng];this.Za.AR=[B=this.Za,B.Ng];this.Wm.AR=[B=this.Wm,B.Ng];this.
Wn.AR=[B=this.Wn,B.Ng];this.Sv.AR=null;this.Sv.AeR([B=this.Sv,B.Ath]);this.Sv.Go([
this,this.D_,this.GN]);this.Sv.AST([B=A._GetAutoObject(A.Device.Device),B.Arw,B.
Atf]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ua._Done();this.
Za._Done();this.Wm._Done();this.Wn._Done();this.Sv._Done();C.Ei._Done.call(this);
},_ReInit:function(){C.Ei._ReInit.call(this);this.Ua._ReInit();this.Za._ReInit();
this.Wm._ReInit();this.Wn._ReInit();this.Sv._ReInit();this.Ua.T(A.aaR(A.acf.ACn)
);this.Wm.T(A.aaR(A.acf.AGw));this.Wn.T(A.aaR(A.acf.TempMeasurement));this.Sv.T(
A.aaR(A.acf.ACI));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Ua
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"
};C.ANT={T_:null,AbR:null,Wk:null,Init:function(aArg){this.Bb(this.T_);},ByJ:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},BjZ:function(G){if(A._GetAutoObject(
A.Device.Device).Aa3<=20)A._GetAutoObject(A.Device.Device).A9(76,true,BrK,0,null
);else A._GetAutoObject(A.Device.Device).A9(39,true,A.jV,0,[this,this.ByJ]);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Na._Init.call(this.T_={I:this},0);C.
Cp._Init.call(this.AbR={I:this},0);C.AbU._Init.call(this.Wk={I:this},0);this.__proto__=
C.ANT;var B;this.Dq(C.AO7);this.T_.H(IR);this.T_.Aj(true);this.T_.T(A.aaR(A.acf.
A5g));this.T_.Bh(false);this.T_.Nd(65);this.AbR.H(P8);this.AbR.Aj(true);this.AbR.
T(A.aaR(A.acf.A6d));this.AbR.Bh(true);this.Wk.H(Aae);this.Wk.Aj(true);this.Wk.T(
A.aaR(A.acf.RangeTest));this.Wk.Bh(false);this.Wk.Nd(15);this.J(this.T_,-1);this.
J(this.AbR,-1);this.J(this.Wk,-1);this.T_.AR=[B=this.T_,B.Ng];this.AbR.AR=[this,
this.BjZ];this.Wk.AR=[B=this.Wk,B.Ng];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.T_._Done();this.AbR._Done();this.Wk._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.T_._ReInit();this.AbR._ReInit();this.Wk.
_ReInit();this.T_.T(A.aaR(A.acf.A5g));this.AbR.T(A.aaR(A.acf.A6d));this.Wk.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.T_
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AO7={_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AO7;this.
Text.R(A.aaR(A.acf.AGw));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGw));},_className:"Application::HeaderDeviceServiceMenu"};C.Na={M6:
null,Ai:function(Ae){C.AbU.Ai.call(this,Ae);this.M6.L(this.V.AQ);},_Init:function(
aArg){C.AbU._Init.call(this,aArg);A.acg.Ap._Init.call(this.M6={I:this},0);this.__proto__=
C.Na;this.M6.AZ(0x38);this.M6.H(BrL);this.J(this.M6,0);this.V.Cu(A.aaL(A.fl.Bi));
this.M6.Aw(A.aaL(A.ach.Ajq));},_Done:function(){this.__proto__=C.AbU;this.M6._Done(
);C.AbU._Done.call(this);},_ReInit:function(){C.AbU._ReInit.call(this);this.M6._ReInit(
);this.V.Cu(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.AbU._Mark.call(this,D);if((
B=this.M6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANO={Ag5:null,Ag$:null,Ahb:null,Ag9:null,Aj9:null,Ag8:null,Ag7:null,Ag6:null
,Aj7:null,Ag4:null,Aj8:null,Aha:null,Aj_:null,Ag_:null,Aj$:null,Init:function(aArg
){this.Bb(this.Ag5);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.PK._Init.
call(this.Ag5={I:this},0);C.PK._Init.call(this.Ag$={I:this},0);C.PK._Init.call(this.
Ahb={I:this},0);C.PK._Init.call(this.Ag9={I:this},0);C.PK._Init.call(this.Aj9={I:
this},0);C.PK._Init.call(this.Ag8={I:this},0);C.PK._Init.call(this.Ag7={I:this},
0);C.PK._Init.call(this.Ag6={I:this},0);C.PK._Init.call(this.Aj7={I:this},0);C.PK.
_Init.call(this.Ag4={I:this},0);C.PK._Init.call(this.Aj8={I:this},0);C.PK._Init.
call(this.Aha={I:this},0);C.PK._Init.call(this.Aj_={I:this},0);C.PK._Init.call(this.
Ag_={I:this},0);C.PK._Init.call(this.Aj$={I:this},0);this.__proto__=C.ANO;this.Dq(
C.AO2);this.Ag5.H(AIA);this.Ag5.Aj(true);this.Ag5.SA(1);this.Ag$.H(AZO);this.Ag$.
Aj(true);this.Ag$.Bh(true);this.Ag$.SA(2);this.Ahb.H(Ata);this.Ahb.Aj(true);this.
Ahb.Bh(false);this.Ahb.SA(3);this.Ag9.H(Atb);this.Ag9.Aj(true);this.Ag9.Bh(true);
this.Ag9.SA(4);this.Aj9.H(Ayh);this.Aj9.Aj(true);this.Aj9.SA(5);this.Ag8.H(BrM);
this.Ag8.Aj(true);this.Ag8.Bh(true);this.Ag8.SA(6);this.Ag7.H(Atc);this.Ag7.Aj(true
);this.Ag7.Bh(false);this.Ag7.SA(7);this.Ag6.H(Ayq);this.Ag6.Aj(true);this.Ag6.Bh(
true);this.Ag6.SA(8);this.Aj7.H(AZP);this.Aj7.Aj(true);this.Aj7.SA(9);this.Ag4.H(
AoA);this.Ag4.Aj(true);this.Ag4.Bh(true);this.Ag4.SA(10);this.Aj8.H(BrN);this.Aj8.
Aj(true);this.Aj8.SA(11);this.Aha.H(BrO);this.Aha.Aj(true);this.Aha.Bh(true);this.
Aha.SA(12);this.Aj_.H(BrP);this.Aj_.Aj(true);this.Aj_.SA(13);this.Ag_.H(BrQ);this.
Ag_.Aj(true);this.Ag_.Bh(true);this.Ag_.SA(14);this.Aj$.H(BrR);this.Aj$.Aj(true);
this.Aj$.SA(15);this.J(this.Ag5,-1);this.J(this.Ag$,-1);this.J(this.Ahb,-1);this.
J(this.Ag9,-1);this.J(this.Aj9,-1);this.J(this.Ag8,-1);this.J(this.Ag7,-1);this.
J(this.Ag6,-1);this.J(this.Aj7,-1);this.J(this.Ag4,-1);this.J(this.Aj8,-1);this.
J(this.Aha,-1);this.J(this.Aj_,-1);this.J(this.Ag_,-1);this.J(this.Aj$,-1);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ag5._Done();this.Ag$._Done(
);this.Ahb._Done();this.Ag9._Done();this.Aj9._Done();this.Ag8._Done();this.Ag7._Done(
);this.Ag6._Done();this.Aj7._Done();this.Ag4._Done();this.Aj8._Done();this.Aha._Done(
);this.Aj_._Done();this.Ag_._Done();this.Aj$._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.Ag5._ReInit();this.Ag$._ReInit();this.Ahb.
_ReInit();this.Ag9._ReInit();this.Aj9._ReInit();this.Ag8._ReInit();this.Ag7._ReInit(
);this.Ag6._ReInit();this.Aj7._ReInit();this.Ag4._ReInit();this.Aj8._ReInit();this.
Aha._ReInit();this.Aj_._ReInit();this.Ag_._ReInit();this.Aj$._ReInit();},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Ag5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ag8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag7)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ag6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag4)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aha)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aj$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AO2={_Init:function(aArg){C.KN._Init.call(this
,aArg);this.__proto__=C.AO2;this.Text.R(A.aaR(A.acf.A5H));},_ReInit:function(){C.
KN._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5H));},_className:"Application::HeaderDeviceCheck"
};C.PK={DeviceComponentToString:null,Kh:null,AuV:0,BbX:false,CP:function(){this.
V.R(this.DeviceComponentToString.BH(this.AuV));},Bk:function(aSize){var B;C.Cp.Bk.
call(this,aSize);this.Kh.H(A.abM(this.Kh.M,aSize[0]-((B=this.Kh.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kh.M[0]));},Ai:function(Ae){C.Cp.Ai.call(this,Ae);this.Kh.
AER(this.V.AQ);if(this.BbX)this.Kh.AwB(A.jb.E1);else this.Kh.AwB(A.jb.Gg);},SA:function(
E){if(this.AuV===E)return;this.AuV=E;this.T(this.DeviceComponentToString.BH(E));
this.DY(this);},DY:function(G){this.BbX=A._GetAutoObject(A.Device.Device).AJE(this.
AuV);this.An();},_Init:function(aArg){C.Cp._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kh._Init.call(this.Kh={I:this
},0);this.__proto__=C.PK;this.V.H(BrS);this.V.A6(0x11);this.Kh.H(BrT);this.J(this.
Kh,0);},_Done:function(){this.__proto__=C.Cp;this.DeviceComponentToString._Done(
);this.Kh._Done();C.Cp._Done.call(this);},_ReInit:function(){C.Cp._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kh._ReInit();this.CP();},_Mark:function(
D){var B;C.Cp._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sd={Ay:null,DZ:null,Y:null,Init:function(aArg){A.pe([this,this.AAz],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALm(this);this.DJ(this);},CF:function(G
){A.pe([this,this.MF],this);},Fg:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[
3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},AAz:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6r();A._GetAutoObject(A.Device.Device
).Am.Bl(Be);A.pe([this,this.MF],this);},Ew:function(G){A._GetAutoObject(C.A$).Fv(
);},A3j:function(G){A._GetAutoObject(C.A$).Cg(84);},DJ:function(G){this.N.CY(A.aaL(
A.ach.E2));this.N.CC=[this,this.Ew];this.N.Cs(A.aaL(A.ach.ADz));if(!A._GetAutoObject(
A.Device.Device).Am.Filter||A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(
A.Device.Device).Am.Filter)){this.N.Cl=null;this.N.I4.Dr(100);}else{this.N.Cl=[this
,this.AAz];this.N.I4.Dr(255);}this.N.C6(A.aaL(A.ach.Aex));this.N.Cm=[this,this.A3j
];},MF:function(s){this.DJ(s);},ALm:function(G){A.ab5("%s",BrU);},BF7:function(s
){this.ALm(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sd;this.N.Ar(false);this.N.Z(true);this.Dq(C.
Abt);this.Ay.H(Iq);this.DZ.AZ(0x3F);this.DZ.H(Fb);this.DZ.L(A.jb.CK);this.Y.H(Lt
);this.Y.JO(9);this.J(this.Ay,0);this.J(this.DZ,0);this.J(this.Y,0);this.Y.El=[this
,this.Fg];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DZ._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DZ._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOd={Yf:null,Ye:null,X3:null
,TF:null,DJ:function(G){C.Sd.DJ.call(this,G);if(this.AV===this.TF){this.N.Cs(null
);this.N.Cl=null;this.N.C6(null);this.N.Cm=null;}},ALm:function(G){if(this.AV===
this.TF)this.Dq(C.APb);else this.Dq(C.Abt);},By2:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQb);case 1:return A.
aaL(A.ach.AQc);default:A.ab5("%s%s",BrV,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},By3:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQd);case 1:return A.aaL(A.ach.AQe);default:
A.ab5("%s%s",AIF,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ie:function(G){var Cx=(C.Fj.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.
Yf)A._GetAutoObject(C.A$).Cg(66);else if(Cx===this.Ye)A._GetAutoObject(C.A$).Cg(
56);else if(Cx===this.X3)A._GetAutoObject(C.A$).Cg(58);else if(Cx===this.TF)A._GetAutoObject(
C.A$).Cg(59);},_Init:function(aArg){C.Sd._Init.call(this,aArg);C.Fj._Init.call(this.
Yf={I:this},0);C.Fj._Init.call(this.Ye={I:this},0);C.Fj._Init.call(this.X3={I:this
},0);C.Fj._Init.call(this.TF={I:this},0);this.__proto__=C.AOd;this.Yf.H(P4);this.
Yf.Aj(true);this.Yf.T(A.aaR(A.acf.Afq));this.Ye.H(JY);this.Ye.Aj(true);this.Ye.T(
A.aaR(A.acf.Temperature));this.X3.H(BrW);this.X3.Aj(true);this.X3.T(A.aaR(A.acf.
Rating));this.TF.H(BrX);this.TF.Aj(true);this.TF.T(A.aaR(A.acf.A7u));this.J(this.
Yf,0);this.J(this.Ye,0);this.J(this.X3,0);this.J(this.TF,0);this.Yf.AR=[this,this.
Ie];this.Yf.DB(this.By3());this.Ye.AR=[this,this.Ie];this.Ye.DB(this.By2());this.
X3.AR=[this,this.Ie];this.X3.DB(A.aaL(A.ach.AP$));this.TF.AR=[this,this.Ie];this.
TF.DB(A.aaL(A.ach.AQa));},_Done:function(){this.__proto__=C.Sd;this.Yf._Done();this.
Ye._Done();this.X3._Done();this.TF._Done();C.Sd._Done.call(this);},_ReInit:function(
){C.Sd._ReInit.call(this);this.Yf._ReInit();this.Ye._ReInit();this.X3._ReInit();
this.TF._ReInit();this.Yf.T(A.aaR(A.acf.Afq));this.Ye.T(A.aaR(A.acf.Temperature)
);this.X3.T(A.aaR(A.acf.Rating));this.TF.T(A.aaR(A.acf.A7u));},_Mark:function(D){
var B;C.Sd._Mark.call(this,D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOe={VH:null,X5:null,Yg:null,ALm:function(G){this.Dq(C.Avp);},By6:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQP
);case 1:return A.aaL(A.ach.AQQ);default:A.ab5("%s%s",AIF,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ie:function(G){var Cx=(C.Fj.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VH)A._GetAutoObject(C.A$).Cg(68);else if(Cx===
this.Yg)A._GetAutoObject(C.A$).Cg(57);else if(Cx===this.X5)A._GetAutoObject(C.A$
).Cg(67);},By5:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AP0);case 1:return A.aaL(A.ach.AP1);default:A.ab5("%s%s",AIF
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},By7:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQR
);case 1:return A.aaL(A.ach.AQS);default:A.ab5("%s%s",AIF,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sd._Init.call(
this,aArg);C.Fj._Init.call(this.VH={I:this},0);C.Fj._Init.call(this.X5={I:this},
0);C.Fj._Init.call(this.Yg={I:this},0);this.__proto__=C.AOe;this.VH.H(P4);this.VH.
Aj(true);this.VH.T(A.aaR(A.acf.A$C));this.X5.H(AZS);this.X5.Aj(true);this.X5.T(A.
aaR(A.acf.A48));this.Yg.H(N_);this.Yg.Aj(true);this.Yg.T(A.aaR(A.acf.A$F));this.
J(this.VH,0);this.J(this.X5,0);this.J(this.Yg,0);this.VH.AR=[this,this.Ie];this.
VH.DB(this.By6());this.VH.Ab5(A.aaL(A.ach.NS));this.X5.AR=[this,this.Ie];this.X5.
DB(this.By5());this.Yg.AR=[this,this.Ie];this.Yg.DB(this.By7());},_Done:function(
){this.__proto__=C.Sd;this.VH._Done();this.X5._Done();this.Yg._Done();C.Sd._Done.
call(this);},_ReInit:function(){C.Sd._ReInit.call(this);this.VH._ReInit();this.X5.
_ReInit();this.Yg._ReInit();this.VH.T(A.aaR(A.acf.A$C));this.X5.T(A.aaR(A.acf.A48
));this.Yg.T(A.aaR(A.acf.A$F));},_Mark:function(D){var B;C.Sd._Mark.call(this,D);
if((B=this.VH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOh={Bdn:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZQ(0));},_Init:function(aArg){C.AqM._Init.call(this,aArg);this.
__proto__=C.AOh;this.Ae5(A.aaR(A.acf.A7P));},_ReInit:function(){C.AqM._ReInit.call(
this);this.Ae5(A.aaR(A.acf.A7P));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOa={Aie:null,Abw:null,UJ:null,AaW:null,Pi:null,Ajn:null,Agt:null,Ajo:null,Agu:
null,Ay:null,AaQ:null,Ac_:0,Apv:0,DE:function(G){switch(this.Cr.CO){case 4:{if(this.
I1.Fl())return;var Qt=this.Y.Br[1]+80;this.Y.F$([this.Y.Br[0],Qt]);this.Y.Vu(null
,null);}break;case 5:{if(this.I1.Fl())return;var Qt=this.Y.Br[1]-80;this.Y.F$([this.
Y.Br[0],Qt]);this.Y.Vu(null,null);}break;default:C.Fw.DE.call(this,G);}},Ap7:function(
L1,AcU){if(!L1)return;var Ft=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(
A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcU,true);Ft.CW(HV);var Ac6=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac6.Initialize(8,2,0,true);Ft.CW(Ac6
);L1.Bl(Ft);},Ait:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arf()){this.
Aie.Or(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Aza=this.By0(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaQ.Set(Aza,this.AaQ.Get(Aza)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Ac_++;this.Apv=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fw.Ait.call(
this,G);},Aar:function(G){if(this.Ac_>1)A._GetAutoObject(A.Device.Device).A9(56,
true,this.Ac_.toFixed(),0,null);if(this.Ac_===1)A._GetAutoObject(A.Device.Device
).A9(53,true,this.Apv.toFixed(),0,null);if(this.Aie.AY>0)this.UJ.T(((((((A._GetAutoObject(
A.Device.Converter).AxV(this.Aie.AjO()|0,1)+Ayv)+A._GetAutoObject(A.Device.Converter
).AxV(this.Aie.AqX()|0,1))+CQ)+A._GetAutoObject(A.acj.DV).AfZ())+Ayw)+this.Aie.AY.
toFixed())+O5);else this.UJ.T(A.aaR(A.acf.Unknown));var RI=this.AaQ.AmT();var O;
for(O=0;O<this.AaQ.MB;O++){var Bf=this.Bzj(O);if(!!Bf){var CB=this.AaQ.Get(O);Bf.
Blw(CB);if(!RI)Bf.A92(0);else Bf.A92(Math.round((CB*100)/RI)|0);Bf.Bnd(this.Bzi(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Add=false;if(this.Aie.AY>0)
Add=true;this.I1.Z(!Add);C.Fw.Aar.call(this,G);},Adk:function(G){this.Aie.Yh();this.
AaQ.Hi();this.Ac_=0;this.Apv=0;C.Fw.Adk.call(this,G);},Bzj:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Pi;break;case 1:Bf=this.Ajn;break;case 2:Bf=this.
Agt;break;case 3:Bf=this.Ajo;break;case 4:Bf=this.Agu;break;default:throw new Error(
Ayx+aIndex.toFixed());}return Bf;},Bzi:function(aIndex,AoK){var B;var Tp=A.jV;switch(
AoK){case 0:{switch(aIndex){case 0:Tp=BrY;break;case 1:Tp=BrZ;break;case 2:Tp=Br0;
break;case 3:Tp=Br1;break;case 4:Tp=Br2;break;default:throw new Error(Ayx+aIndex.
toFixed());}Tp=Tp+(CQ+A.aaR(A.acf.Az3));}break;case 1:{switch(aIndex){case 0:Tp=
Br3;break;case 1:Tp=Br4;break;case 2:Tp=Br5;break;case 3:Tp=Br6;break;case 4:Tp=
Br7;break;default:throw new Error(Ayx+aIndex.toFixed());}Tp=Tp+(CQ+A.aaR(A.acf.A7b
));}break;default:A.ab5("%s%e",A$9,AoK);}return Tp;},By1:function(AI1,AoK){var Ac7=
0;switch(AoK){case 0:switch(AI1){case 0:Ac7=35000;break;case 1:Ac7=40000;break;case
2:Ac7=45000;break;case 3:Ac7=50000;break;case 4:Ac7=2147483647;break;default:throw new
Error(Ayx+AI1.toFixed());}break;case 1:switch(AI1){case 0:Ac7=36287;break;case 1:
Ac7=40823;break;case 2:Ac7=45359;break;case 3:Ac7=49895;break;case 4:Ac7=2147483647;
break;default:throw new Error(Ayx+AI1.toFixed());}break;default:A.ab5("%s%e",A$9
,AoK);}return Ac7;},By0:function(A7,AoK){var Aza=0;var O;for(O=0;O<this.AaQ.MB;O++
)if(A7<this.By1(O,AoK)){Aza=O;break;}return Aza;},Fg:function(G){var B;this.Ay.Mu((
B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[
1]);},_Init:function(aArg){C.Fw._Init.call(this,aArg);C.Agr._Init.call(this.Abw={
I:this},0);C.IC._Init.call(this.UJ={I:this},0);C.AaW._Init.call(this.AaW={I:this
},0);C.Pi._Init.call(this.Pi={I:this},0);C.Pi._Init.call(this.Ajn={I:this},0);C.
Pi._Init.call(this.Agt={I:this},0);C.Pi._Init.call(this.Ajo={I:this},0);C.Pi._Init.
call(this.Agu={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaQ={I:this},0);this.__proto__=C.AOa;this.Dq(C.Avp);this.Aky(A.aaR(
A.acf.A54));this.Ae5(A.aaR(A.acf.A7I));this.Abw.H(AIA);this.Abw.Aj(true);this.Abw.
T(A.aaR(A.acf.A4X));this.Abw.Bh(false);this.Abw.Kq(5);this.UJ.H(AZO);this.UJ.Aj(
true);this.UJ.T(A.jV);this.UJ.Bh(true);this.UJ.Kq(5);this.AaW.H(Ata);this.AaW.Aj(
true);this.Pi.H(Atb);this.Pi.Aj(true);this.Pi.Bh(true);this.Ajn.H(Atc);this.Ajn.
Aj(true);this.Agt.H(Ayq);this.Agt.Aj(true);this.Agt.Bh(true);this.Ajo.H(AZP);this.
Ajo.Aj(true);this.Agu.H(AoA);this.Agu.Aj(true);this.Agu.Bh(true);this.Ay.H(Iq);this.
AaQ.Zy(5);this.J(this.Abw,-1);this.J(this.UJ,-1);this.J(this.AaW,-1);this.J(this.
Pi,-1);this.J(this.Ajn,-1);this.J(this.Agt,-1);this.J(this.Ajo,-1);this.J(this.Agu
,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fg];this.Aie=A._NewObject(C.AvM,0);
this.UJ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Fw;this.Abw._Done(
);this.UJ._Done();this.AaW._Done();this.Pi._Done();this.Ajn._Done();this.Agt._Done(
);this.Ajo._Done();this.Agu._Done();this.Ay._Done();this.AaQ._Done();C.Fw._Done.
call(this);},_ReInit:function(){C.Fw._ReInit.call(this);this.Abw._ReInit();this.
UJ._ReInit();this.AaW._ReInit();this.Pi._ReInit();this.Ajn._ReInit();this.Agt._ReInit(
);this.Ajo._ReInit();this.Agu._ReInit();this.Ay._ReInit();this.AaQ._ReInit();this.
Aky(A.aaR(A.acf.A54));this.Ae5(A.aaR(A.acf.A7I));this.Abw.T(A.aaR(A.acf.A4X));this.
UJ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fw._Mark.call(this,D);if((B=this.
Aie)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajo
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaW={H8:null,Gq:null
,Bk:function(aSize){C.IC.Bk.call(this,aSize);this.H8.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gq.H([this.H8.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IC.Ai.call(this,Ae);this.H8.L(this.V.AQ);this.Gq.L(this.V.AQ);},_Init:
function(aArg){C.IC._Init.call(this,aArg);A.acg.Text._Init.call(this.H8={I:this}
,0);A.acg.Text._Init.call(this.Gq={I:this},0);this.__proto__=C.AaW;this.T(A.aaR(
A.acf.AG9));this.H8.H(Br8);this.H8.KR(true);this.H8.R(A.aaR(A.acf.Aqz));this.H8.
L(A.jb.Text);this.Gq.H(A$_);this.Gq.R(AfB);this.Gq.L(A.jb.Text);this.J(this.H8,0
);this.J(this.Gq,0);this.V.S(A.aaL(A.fl.Ii));this.H8.S(A.aaL(A.fl.Ii));this.Gq.S(
A.aaL(A.fl.Kl));},_Done:function(){this.__proto__=C.IC;this.H8._Done();this.Gq._Done(
);C.IC._Done.call(this);},_ReInit:function(){C.IC._ReInit.call(this);this.H8._ReInit(
);this.Gq._ReInit();this.T(A.aaR(A.acf.AG9));this.H8.R(A.aaR(A.acf.Aqz));this.V.
S(A.aaL(A.fl.Ii));this.H8.S(A.aaL(A.fl.Ii));this.Gq.S(A.aaL(A.fl.Kl));},_Mark:function(
D){var B;C.IC._Mark.call(this,D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pi={AP:null,A_:null,PW:null,H8:null,Gq:null,A$E:A.jV,Aqz:0,A_x:0,Bk:function(
aSize){C.IC.Bk.call(this,aSize);this.PW.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.PW.M[2]-1,0,this.PW.M[2]+1,aSize[1]]);this.H8.H([this.PW.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A_.H([this.H8.M[2]-1,0,this.H8.M[2]+1,aSize[
1]]);this.Gq.H([this.H8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IC.Ai.call(
this,Ae);this.PW.L(this.V.AQ);this.H8.L(this.V.AQ);this.Gq.L(this.V.AQ);},Bnd:function(
E){if(this.A$E===E)return;this.A$E=E;this.PW.R(E);},Blw:function(E){if(this.Aqz===
E)return;this.Aqz=E;this.H8.R(E.toFixed());},A92:function(E){if(this.A_x===E)return;
this.A_x=E;this.Gq.R(E.toFixed()+Xc);},_Init:function(aArg){C.IC._Init.call(this
,aArg);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.Text._Init.call(this.PW={I:this},0);A.acg.Text._Init.call(this.H8={I:
this},0);A.acg.Text._Init.call(this.Gq={I:this},0);this.__proto__=C.Pi;this.AP.L(
A.jb.Bc);this.A_.L(A.jb.Bc);this.PW.H(Br9);this.PW.R(A.aaR(A.acf.AG9));this.PW.L(
A.jb.Text);this.H8.R(UX);this.H8.L(A.jb.Text);this.Gq.R(Br_);this.Gq.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A_,0);this.J(this.PW,0);this.J(this.H8,0);this.J(
this.Gq,0);this.PW.S(A.aaL(A.fl.Af));this.H8.S(A.aaL(A.fl.Af));this.Gq.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IC;this.AP._Done();this.A_._Done();this.
PW._Done();this.H8._Done();this.Gq._Done();C.IC._Done.call(this);},_ReInit:function(
){C.IC._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.PW._ReInit();
this.H8._ReInit();this.Gq._ReInit();this.PW.R(A.aaR(A.acf.AG9));this.PW.S(A.aaL(
A.fl.Af));this.H8.S(A.aaL(A.fl.Af));this.Gq.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IC._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gq)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMy={AKP:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mo();A._GetAutoObject(A.Device.
Device).Am.Bl(Be);},_Init:function(aArg){C.Ams._Init.call(this,aArg);this.__proto__=
C.AMy;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARr={RZ:null,
R5:null,RY:null,R2:null,Pk:null,R1:null,ALk:function(G){A.pe([this,this.BB9],this
);A.pe([this,this.BBX],this);A.pe([this,this.BBT],this);A.pe([this,this.A4a],this
);A.pe([this,this.BB0],this);A.pe([this,this.BBY],this);},Ie:function(G){var Cx=(
C.QS.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.R5)A._GetAutoObject(C.A$
).Cg(20);else if(Cx===this.Pk)A._GetAutoObject(C.A$).Cg(14);else if(Cx===this.RZ
)A._GetAutoObject(C.A$).Cg(12);else if(Cx===this.R2)A._GetAutoObject(C.A$).Cg(43
);else if(Cx===this.RY)A._GetAutoObject(C.A$).Cg(51);else if(Cx===this.R1)A._GetAutoObject(
C.A$).Cg(61);},BBX:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Azh=A._NewObject(A.Device.BoolFilterCriterion,0);Azh.Initialize(9,0,true,true);Be.
CW(Azh);A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.Pk.Zw(A._GetAutoObject(
A.Device.Device).Am.Ca().toFixed());},BB9:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mo();var ABq=A._NewObject(A.Device.BoolFilterCriterion,0);ABq.Initialize(
12,0,true,true);Be.CW(ABq);A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.R5.Zw(
A._GetAutoObject(A.Device.Device).Am.Ca().toFixed());},BBT:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mo();var AyZ=A._NewObject(A.Device.BoolFilterCriterion
,0);AyZ.Initialize(8,0,true,true);Be.CW(AyZ);A._GetAutoObject(A.Device.Device).Am.
Bl(Be);this.RZ.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed());},A4a:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6l(A._GetAutoObject(A.Device.Device
).ABw);A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.RY.Zw(A._GetAutoObject(A.
Device.Device).Am.Ca().toFixed());},BB0:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6u();A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.R2.Zw(A._GetAutoObject(
A.Device.Device).Am.Ca().toFixed());},BBY:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACR();A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.R1.Zw(A._GetAutoObject(
A.Device.Device).Am.Ca().toFixed());},_Init:function(aArg){C.T5._Init.call(this,
aArg);C.QS._Init.call(this.RZ={I:this},0);C.QS._Init.call(this.R5={I:this},0);C.
QS._Init.call(this.RY={I:this},0);C.QS._Init.call(this.R2={I:this},0);C.QS._Init.
call(this.Pk={I:this},0);C.QS._Init.call(this.R1={I:this},0);this.__proto__=C.ARr;
this.RZ.H(P4);this.RZ.Aj(true);this.RZ.T(A.aaR(A.acf.Alarm));this.RZ.Ab2(true);this.
R5.H(AZS);this.R5.Aj(true);this.R5.T(A.aaR(A.acf.Asc));this.R5.Ab2(true);this.RY.
H(N_);this.RY.Aj(true);this.RY.T(A.aaR(A.acf.ActionList));this.RY.Ab2(true);this.
R2.H(P5);this.R2.Aj(true);this.R2.T(A.aaR(A.acf.AOF));this.R2.Ab2(true);this.Pk.
H(S5);this.Pk.Ar(false);this.Pk.Aj(false);this.Pk.Z(false);this.Pk.T(A.aaR(A.acf.
AB$));this.Pk.Ab2(true);this.R1.H(UP);this.R1.Aj(true);this.R1.T(A.aaR(A.acf.A50
));this.R1.Ab2(true);this.J(this.RZ,-1);this.J(this.R5,-1);this.J(this.RY,-1);this.
J(this.R2,-1);this.J(this.Pk,-1);this.J(this.R1,-1);this.RZ.AR=[this,this.AcR];this.
RZ.DB(A.aaL(A.ach.ADp));this.RZ.Ab5(A.aaL(A.ach.NS));this.R5.AR=[this,this.AcR];
this.R5.DB(A.aaL(A.ach.AQO));this.R5.Ab5(A.aaL(A.ach.NS));this.RY.AR=[this,this.
AcR];this.RY.DB(A.aaL(A.ach.APL));this.RY.Ab5(A.aaL(A.ach.NS));this.R2.AR=[this,
this.AcR];this.R2.DB(A.aaL(A.ach.AQg));this.R2.Ab5(A.aaL(A.ach.NS));this.Pk.AR=[
this,this.AcR];this.Pk.DB(A.aaL(A.ach.ADp));this.Pk.Ab5(A.aaL(A.ach.NS));this.R1.
AR=[this,this.AcR];this.R1.DB(A.aaL(A.ach.AP8));this.R1.Ab5(A.aaL(A.ach.NS));},_Done:
function(){this.__proto__=C.T5;this.RZ._Done();this.R5._Done();this.RY._Done();this.
R2._Done();this.Pk._Done();this.R1._Done();C.T5._Done.call(this);},_ReInit:function(
){C.T5._ReInit.call(this);this.RZ._ReInit();this.R5._ReInit();this.RY._ReInit();
this.R2._ReInit();this.Pk._ReInit();this.R1._ReInit();this.RZ.T(A.aaR(A.acf.Alarm
));this.R5.T(A.aaR(A.acf.Asc));this.RY.T(A.aaR(A.acf.ActionList));this.R2.T(A.aaR(
A.acf.AOF));this.Pk.T(A.aaR(A.acf.AB$));this.R1.T(A.aaR(A.acf.A50));},_Mark:function(
D){var B;C.T5._Mark.call(this,D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARq={R6:null,VG:null,R3:null,R0:null,R4:null,ALk:function(G){A.pe([this,this.
BBU],this);A.pe([this,this.BB4],this);A.pe([this,this.BB5],this);A.pe([this,this.
BB_],this);A.pe([this,this.BB6],this);},Ie:function(G){var Cx=(C.QS.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VG)A._GetAutoObject(C.A$).Cg(90);if(Cx===this.
R0)A._GetAutoObject(C.A$).Cg(74);if(Cx===this.R3)A._GetAutoObject(C.A$).Cg(71);if(
Cx===this.R4)A._GetAutoObject(C.A$).Cg(46);if(Cx===this.R6)A._GetAutoObject(C.A$
).Cg(85);},BB5:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACU();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.R4.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BB_:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6E();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.R6.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BB4:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6z();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.R3.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BBU:function(G){var Be=A._GetAutoObject(A.Device.Helper).AOG();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.R0.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BB6:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACW();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.VG.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},_Init:function(aArg){C.T5._Init.call(this,aArg);C.QS._Init.call(this.
R6={I:this},0);C.QS._Init.call(this.VG={I:this},0);C.QS._Init.call(this.R3={I:this
},0);C.QS._Init.call(this.R0={I:this},0);C.QS._Init.call(this.R4={I:this},0);this.
__proto__=C.ARq;this.R6.H(Br$);this.R6.Aj(true);this.R6.T(A.aaR(A.acf.A7A));this.
R6.Ab2(true);this.VG.H(Bsa);this.VG.Aj(true);this.VG.T(A.aaR(A.acf.AF$));this.R3.
H(Bsb);this.R3.Aj(true);this.R3.T(A.aaR(A.acf.A7C));this.R3.Ab2(true);this.R0.H(
Bsc);this.R0.Aj(true);this.R0.T(A.aaR(A.acf.ABQ));this.R0.Ab2(true);this.R4.H(Bsd
);this.R4.Aj(true);this.R4.T(A.aaR(A.acf.AR4));this.R4.Ab2(true);this.J(this.R6,-
1);this.J(this.VG,-1);this.J(this.R3,-1);this.J(this.R0,-1);this.J(this.R4,-1);this.
R6.AR=[this,this.AcR];this.R6.DB(A.aaL(A.ach.AQv));this.R6.Ab5(A.aaL(A.ach.NS));
this.VG.AR=[this,this.AcR];this.VG.DB(A.aaL(A.ach.ADH));this.R3.AR=[this,this.AcR
];this.R3.DB(A.aaL(A.ach.AQx));this.R3.Ab5(A.aaL(A.ach.NS));this.R0.AR=[this,this.
AcR];this.R0.DB(A.aaL(A.ach.AP3));this.R0.Ab5(A.aaL(A.ach.NS));this.R4.AR=[this,
this.AcR];this.R4.DB(A.aaL(A.ach.AQz));this.R4.Ab5(A.aaL(A.ach.NS));},_Done:function(
){this.__proto__=C.T5;this.R6._Done();this.VG._Done();this.R3._Done();this.R0._Done(
);this.R4._Done();C.T5._Done.call(this);},_ReInit:function(){C.T5._ReInit.call(this
);this.R6._ReInit();this.VG._ReInit();this.R3._ReInit();this.R0._ReInit();this.R4.
_ReInit();this.R6.T(A.aaR(A.acf.A7A));this.VG.T(A.aaR(A.acf.AF$));this.R3.T(A.aaR(
A.acf.A7C));this.R0.T(A.aaR(A.acf.ABQ));this.R4.T(A.aaR(A.acf.AR4));},_Mark:function(
D){var B;C.T5._Mark.call(this,D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ListsIdManagementScreen"};C.AR2={Ww:function(
G){this.Agp();this.AL7();this.A4z(A.aaR(A.acf.A7e),[this,this.BmV],131072);this.
A4z(A.aaR(A.acf.A7d),[this,this.BmU],16384);A._GetAutoObject(C.BS).FT();A._GetAutoObject(
C.BS).NC(A.aaR(A.acf.ARl)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},DE:function(G){},Abr:function(){return C.Aqv;},Abs:function(){return C.Aq2;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).A6z());},HO:function(G){var F;C.Tu.HO.call(this,G);if(this.Akh()===false
){if(!!this.FG&&((F=this.FG,F[1].call(F[0]))===16)){this.N.Cs(A.aaL(A.ach.AQH));
this.N.Cl=[this,this.A5Y];}else{this.N.Cs(A.aaL(A.ach.AQp));this.N.Cl=[this,this.
A5V];}this.N.FJ(A.jV);}this.N.ON(false);this.N.OO(false);},Agc:function(){A._GetAutoObject(
C.A$).Cg(72);},BmU:function(G){this.AGy(16384);},BmV:function(G){this.AGy(131072
);},_Init:function(aArg){C.Tu._Init.call(this,aArg);this.__proto__=C.AR2;this.Dq(
C.APp);this.Dz(A.aaR(A.acf.A7G));this.AS$(A._GetAutoObject(C.Av0));},_ReInit:function(
){C.Tu._ReInit.call(this);this.Dz(A.aaR(A.acf.A7G));},_className:"Application::NoNaisIdListScreen"
};C.AR1={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AR1;this.
Mr.Ar(false);this.Mr.Aj(false);this.Mr.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APp={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdV(10));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.APp;},_className:"Application::HeaderNoNaisIdListFilter"};C.Q4={Bfk:false,CP:function(
){A.pe([this,this.AyI],this);},DE:function(G){},CF:function(G){C.GW.CF.call(this
,G);if(this.Bfk&&(A._GetAutoObject(A.Device.Device).Ut>0))A.pe([this,this.AII],this
);},AlZ:function(G){this.A5U(this);},Agc:function(){A._GetAutoObject(C.A$).Cg(73
);},AR_:function(G){throw new Error(AoB);},Bas:function(s){this.AR_(s);},AR$:function(
G){throw new Error(AoB);},Bat:function(s){this.AR$(s);},ASe:function(G){throw new
Error(AoB);},AII:function(s){this.ASe(s);},Bew:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7)){this.Bfk=true;A._GetAutoObject(
C.A$).Cg(76);}},Agb:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===5))A.z$([this,this.XD],[B=A._GetAutoObject(
A.Device.Device),B.Wv,B.Xe],0);},XD:function(G){var B;if(A._GetAutoObject(A.Device.
Device).AhM===3){A._GetAutoObject(A.Device.Device).A9(74,false,A.jV,0,[this,this.
Agb]);A.z$([this,this.XD],[B=A._GetAutoObject(A.Device.Device),B.Wv,B.Xe],0);A.pe([
this,this.AII],this);}},AJD:function(){throw new Error(AoB);},A7X:function(G){A.
_GetAutoObject(A.Device.Device).Ds(0);this.A5T(this);},Bnr:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);this.BhL(this);},_Init:function(aArg){C.GW._Init.call(this
,aArg);this.__proto__=C.Q4;this.Dz(A.aaR(A.acf.A7N));},_ReInit:function(){C.GW._ReInit.
call(this);this.Dz(A.aaR(A.acf.A7N));this.CP();},_className:"Application::RegistrationsListScreen"
};C.AUg={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AUg;},
_className:"Application::RegistrationsListFilterScreen"};C.Aeq={_Init:function(aArg
){C.Yt._Init.call(this,aArg);this.__proto__=C.Aeq;this.Text.H(Bse);this.Text.R(A.
jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"};C.ABX={
J$:0,AP:null,A_:null,Ea:null,IH:null,ST:null,Gv:null,Md:0,K8:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.IH.H([this.V.M[2],0,this.V.M[2]+(((aSize[0]*15
)/100)|0),aSize[1]]);this.A_.H([this.IH.M[2]-1,0,this.IH.M[2]+1,aSize[1]]);this.
ST.H([this.IH.M[2],0,this.IH.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.Ea.H([
this.ST.M[2]-1,0,this.ST.M[2]+1,aSize[1]]);this.Gv.H([this.ST.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IH.L(this.V.AQ);this.Gv.L(this.
V.AQ);this.ST.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj6(this.K8)){this.
V.S(A.aaL(A.fl.Hr));this.T(A$$);this.ST.R(Rm);}else{this.V.S(A.aaL(A.fl.Af));this.
T(this.Md.toFixed());this.ST.R(A._GetAutoObject(A.Device.Helper).Sf(this.J$,0,5).
toFixed());}},Cf:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){this.Md=
this.AX.CE(Ad,1);this.K8=this.AX.AOU(Ad,34);var AtN=this.AX.AOM(Ad,7);this.J$=this.
AX.KM(Ad,26);var Ay6=this.AX.HF(Ad,4);var AfM=A._GetAutoObject(A.Device.Helper).
MM(Ay6,A._GetAutoObject(A.Device.Helper).Dv());this.IH.Aw(A._GetAutoObject(A.Device.
Converter).AmQ(AtN));if(AfM<100)this.Gv.R((AfM.toFixed()+CQ)+A.aaR(A.acf.ALW));else
this.Gv.R(A._GetAutoObject(A.acj.KJ).ACN(Ay6,A._GetAutoObject(A.Device.Helper).Dv(
),AIl));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.
call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IH={I:this},0);A.acg.Text._Init.
call(this.ST={I:this},0);C.CH._Init.call(this.Gv={I:this},0);this.__proto__=C.ABX;
this.AP.H(Aou);this.AP.L(A.jb.Bc);this.A_.H(Aov);this.A_.L(A.jb.Bc);this.Ea.H(AZT
);this.Ea.L(A.jb.Bc);this.IH.H(Baa);this.IH.L(A.jb.Text);this.ST.H(Aym);this.Gv.
H(AZU);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.IH,0);this.
J(this.ST,0);this.J(this.Gv,0);this.ST.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.fl.Af
));this.Gv.A2(A.aaL(A.fl.Ak));this.Gv.Cu(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:
function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.Ea._Done();this.
IH._Done();this.ST._Done();this.Gv._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();
this.IH._ReInit();this.ST._ReInit();this.Gv._ReInit();this.ST.S(A.aaL(A.fl.Af));
this.Gv.S(A.aaL(A.fl.Af));this.Gv.A2(A.aaL(A.fl.Ak));this.Gv.Cu(A.aaL(A.fl.Bi));
},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListBirthRegistrationItem"};C.ADf={Aj3:null,Pw:null,I3:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj3={I:this},
0);A.acg.Ap._Init.call(this.Pw={I:this},0);A.acg.Ap._Init.call(this.I3={I:this},
0);this.__proto__=C.ADf;this.Aj3.H(Bsf);this.Aj3.L(A.jb.Text);this.Pw.H(Bsg);this.
Pw.L(A.jb.Text);this.I3.H(A$3);this.I3.L(A.jb.Text);this.J(this.Aj3,0);this.J(this.
Pw,0);this.J(this.I3,0);this.Aj3.Aw(A.aaL(A.ach.ADD));this.Pw.Aw(A.aaL(A.ach.AvA
));this.I3.Aw(A.aaL(A.ach.Avv));},_Done:function(){this.__proto__=C.Dc;this.Aj3.
_Done();this.Pw._Done();this.I3._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Aj3._ReInit();this.Pw._ReInit();this.I3._ReInit();
},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.Aj3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I3)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.APr={IO:null
,AgT:null,HP:null,Bc:null,My:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2,Init:function(
aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.A8J,B.A96
],0);A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.Wu,B.JP],0);A.
zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SC],0);A.zV([this
,this.DY],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.DY],this);},De:
function(E){C.BR.De.call(this,E);this.IO.L(E);this.AgT.L(E);this.HP.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.
acf.Ae_));else this.HP.R(((A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon))+CQ)+E.toFixed());
},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqZ()){this.AwV(((A._GetAutoObject(
A.Device.Helper).W.CL+1).toFixed()+A$P)+A._GetAutoObject(A.Device.Device).Am.Ca(
).toFixed());this.JP(A._GetAutoObject(A.Device.Helper).W.Gender);this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.VisualId);this.Ne(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts);}else{this.AwV(A$Q);this.JP(2);this.OnSetAnimalId(-1);this.
Ne(0);}},JP:function(E){if(this.Gender===E)return;this.Gender=E;this.AgT.Aw(A._GetAutoObject(
A.Device.Converter).AmQ(E));},AwV:function(E){if(this.My===E)return;this.My=E;this.
IO.R(E);},Ne:function(E){if(this.WhereAbouts===E)return;this.WhereAbouts=E;if(A.
_GetAutoObject(A.Device.Helper).Aj6(E))this.HP.Z(false);else this.HP.Z(true);},_Init:
function(aArg){C.BR._Init.call(this,aArg);A.acg.Text._Init.call(this.IO={I:this}
,0);A.acg.Ap._Init.call(this.AgT={I:this},0);A.acg.Text._Init.call(this.HP={I:this
},0);A.acg.C5._Init.call(this.Bc={I:this},0);this.__proto__=C.APr;this.IO.H(A$R);
this.IO.Hh(2);this.IO.KR(true);this.IO.A6(0x12);this.IO.R(A$S);this.AgT.H(Bsh);this.
HP.H(Bsi);this.HP.A6(0x11);this.HP.R(A.aaR(A.acf.Ae_));this.Bc.DC(Ays);this.Bc.DM(
Ayt);this.Bc.L(A.jb.Bc);this.J(this.IO,0);this.J(this.AgT,0);this.J(this.HP,0);this.
J(this.Bc,0);this.IO.S(A.aaL(A.fl.Ak));this.AgT.Aw(A._GetAutoObject(A.Device.Converter
).AmQ(2));this.HP.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.IO._Done();this.AgT._Done();this.HP._Done();this.Bc._Done();C.BR._Done.
call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.IO._ReInit();this.AgT.
_ReInit();this.HP._ReInit();this.Bc._ReInit();this.HP.R(A.aaR(A.acf.Ae_));this.IO.
S(A.aaL(A.fl.Ak));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.
call(this,D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderRegistrationInfo"
};C.AaZ={EaseOfDeliveryToString:null,AgK:null,Cf:function(G){C.NE.Cf.call(this,G
);var AJX=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;this.Ks(this.EaseOfDeliveryToString.
Ls(AJX));this.GY.R(this.AgK.Aeg(AJX).toFixed());},De:function(E){C.NE.De.call(this
,E);this.GY.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgK._Init.call(this.
AgK={I:this},0);this.__proto__=C.AaZ;this.T(A.aaR(A.acf.AgC));},_Done:function(){
this.__proto__=C.NE;this.EaseOfDeliveryToString._Done();this.AgK._Done();C.NE._Done.
call(this);},_ReInit:function(){C.NE._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgK._ReInit();this.T(A.aaR(A.acf.AgC));},_Mark:function(D){var B;
C.NE._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XU={WhereAboutsToString:null,KX:null,Cf:function(G){C.NE.Cf.call(this,G);var
K8=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Ks(this.WhereAboutsToString.
Ls(K8));this.GY.R(this.KX.Aeg(K8).toFixed());},De:function(E){C.NE.De.call(this,
E);this.GY.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KX._Init.call(this.KX={
I:this},0);this.__proto__=C.XU;this.T(A.aaR(A.acf.Jd));},_Done:function(){this.__proto__=
C.NE;this.WhereAboutsToString._Done();this.KX._Done();C.NE._Done.call(this);},_ReInit:
function(){C.NE._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KX._ReInit(
);this.T(A.aaR(A.acf.Jd));},_Mark:function(D){var B;C.NE._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RW={Cr:null,Y:null,Ay:null,Init:function(aArg){},CF:function(G){var B;C.D9.CF.
call(this,G);A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.
OnSetId],0);A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Helper),B.UY,B.U1]
,0);A.pe([this,this.AfC],this);},E3:function(G){var B;C.D9.E3.call(this,G);A.z$([
this,this.AfC],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId],0);A.z$([this
,this.AfC],[B=A._GetAutoObject(A.Device.Helper),B.UY,B.U1],0);},Fg:function(G){var
B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},DE:function(G){switch(this.Cr.CO){case 6:case 7:this.Cr.NH=true;
break;case 4:this.BfG(4);break;case 5:this.BfG(5);break;default:;}},BfG:function(
Gw){var B;switch(Gw){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Db(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Db(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.F$([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.F$([this.Y.Br[0],CD]);}break;default:throw new Error(
Bsj);}},GE:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.IZ.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Cf(this
);}X=X.Ah;}},AfC:function(s){this.GE(s);},MN:function(G){var B;this.Y.Vu(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BM._Init.call(this.Cr={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.RW;this.Cr.Filter=147;this.Y.H(UV);this.Y.JO(1);this.Ay.H(AsU
);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BN=[this,this.DE];this.Cr.D1=[this,
this.DE];this.Y.El=[this,this.Fg];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cr._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XV={AaT:null,
XR:null,AaU:null,XS:null,AaZ:null,XU:null,_Init:function(aArg){C.RW._Init.call(this
,aArg);C.AaT._Init.call(this.AaT={I:this},0);C.XR._Init.call(this.XR={I:this},0);
C.AaU._Init.call(this.AaU={I:this},0);C.XS._Init.call(this.XS={I:this},0);C.AaZ.
_Init.call(this.AaZ={I:this},0);C.XU._Init.call(this.XU={I:this},0);this.__proto__=
C.XV;this.AaT.H(BF);this.AaT.Aj(true);this.XR.H(IR);this.XR.Aj(true);this.XR.Bh(
true);this.AaU.H(P8);this.AaU.Aj(true);this.XS.H(Aae);this.XS.Aj(true);this.XS.Bh(
true);this.AaZ.H(Ale);this.AaZ.Aj(true);this.XU.H(Aos);this.XU.Aj(true);this.XU.
Bh(true);this.J(this.AaT,0);this.J(this.XR,0);this.J(this.AaU,0);this.J(this.XS,
0);this.J(this.AaZ,0);this.J(this.XU,0);},_Done:function(){this.__proto__=C.RW;this.
AaT._Done();this.XR._Done();this.AaU._Done();this.XS._Done();this.AaZ._Done();this.
XU._Done();C.RW._Done.call(this);},_ReInit:function(){C.RW._ReInit.call(this);this.
AaT._ReInit();this.XR._ReInit();this.AaU._ReInit();this.XS._ReInit();this.AaZ._ReInit(
);this.XU._ReInit();},_Mark:function(D){var B;C.RW._Mark.call(this,D);if((B=this.
AaT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XS={
BreedToString:null,GY:null,MZ:null,Cf:function(G){C.IB.Cf.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BH(Bv));this.GY.
R(this.MZ.Aeg(Bv).toFixed());},De:function(E){C.IB.De.call(this,E);this.GY.L(E);
},_Init:function(aArg){C.IB._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.GY={I:this},0);A.Device.
MZ._Init.call(this.MZ={I:this},0);this.__proto__=C.XS;this.BT.H(Bsk);this.GY.H(Bsl
);this.GY.Hh(5);this.GY.A6(0x14);this.GY.R(Bsm);this.GY.L(A.jb.Text);this.J(this.
GY,0);this.Hs.Aw(A.aaL(A.ach.ADu));this.GY.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IB;this.BreedToString._Done();this.GY._Done();this.MZ._Done();C.
IB._Done.call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.BreedToString.
_ReInit();this.GY._ReInit();this.MZ._ReInit();this.GY.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IB._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.GY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MZ)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaU={
Cf:function(G){C.IB.Cf.call(this,G);var AAd=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAd>0)this.T(A._GetAutoObject(A.Device.Converter).Rf(AAd));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IB._Init.call(this,aArg);this.__proto__=
C.AaU;this.Hs.Aw(A.aaL(A.ach.AP9));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XR={Yy:null,Cf:function(G){C.IB.Cf.call(this,G);var Td=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfR=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Td>
0)this.T(A._GetAutoObject(A.acj.KJ).AjM(Td));else this.T(A.aaR(A.acf.Unknown));var
Ay8=A.aaL(A.aci.TJ);switch(AfR){case 0:Ay8=A.aaL(A.ach.ADr);break;case 1:{Ay8=A.
aaL(A.ach.Avw);this.Yy.Cv(0);}break;case 2:{Ay8=A.aaL(A.ach.Avw);this.Yy.Cv(1);}
break;case 3:{Ay8=A.aaL(A.ach.Avw);this.Yy.Cv(2);}break;default:A.ab5("%s%e",Bsn
,AfR);}this.Yy.Aw(Ay8);},_Init:function(aArg){C.IB._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Yy={I:this},0);this.__proto__=C.XR;this.BT.H(Bso);this.Yy.H(AHP);
this.Yy.L(A.jb.Text);this.J(this.Yy,0);this.Hs.Aw(A.aaL(A.ach.Avv));this.Yy.Aw(A.
aaL(A.ach.ADr));},_Done:function(){this.__proto__=C.IB;this.Yy._Done();C.IB._Done.
call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.Yy._ReInit();},_Mark:
function(D){var B;C.IB._Mark.call(this,D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaT={J$:0,XT:null,K8:0
,Bk:function(aSize){C.IB.Bk.call(this,aSize);this.XT.H(this.Hs.M);},Ai:function(
Ae){C.IB.Ai.call(this,Ae);this.XT.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj6(this.K8)){this.T(A.aaR(A.acf.AnimalLoss));this.Hs.Z(false);this.XT.Z(true);
}else if(this.J$>0){this.T(A._GetAutoObject(A.Device.Converter).Rf(this.J$));this.
Hs.Z(true);this.XT.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hs.Z(true);this.
XT.Z(false);}},Cf:function(G){C.IB.Cf.call(this,G);this.J$=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K8=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.An(
);},_Init:function(aArg){C.IB._Init.call(this,aArg);A.acg.Text._Init.call(this.XT={
I:this},0);this.__proto__=C.AaT;this.XT.R(A$$);this.J(this.XT,0);this.Hs.Aw(A.aaL(
A.ach.AvA));this.XT.S(A.aaL(A.fl.Hr));},_Done:function(){this.__proto__=C.IB;this.
XT._Done();C.IB._Done.call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.
XT._ReInit();},_Mark:function(D){var B;C.IB._Mark.call(this,D);if((B=this.XT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMv={XV:null,Init:function(aArg){var B;A.zX([this,this.AAv],[B=A._GetAutoObject(
A.Device.Device),B.AEs,B.AIM],0);A.pe([this,this.AAv],this);},DE:function(G){var
D5=(A.Core.BM.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Ol(this);break;
case 7:this.MT(this);break;default:D5.NH=true;}},CF:function(G){var B;this.XV.CF(
this);C.AB.CF.call(this,G);},E3:function(G){var B;this.XV.E3(this);C.AB.E3.call(
this,G);},Anl:function(G){A._GetAutoObject(C.A$).Fv();},XC:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MT:function(G){if(A._GetAutoObject(A.Device.
Device).Am.Ca()<=1)return;var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB+1;
if(LB>=A._GetAutoObject(A.Device.Device).Am.Ca())LB=0;A._GetAutoObject(A.Device.
Helper).HL(LB);},Ol:function(G){if(A._GetAutoObject(A.Device.Device).Am.Ca()<=1)
return;var LB=A._GetAutoObject(A.Device.Helper).W.CL;LB=LB-1;if(LB<0)LB=A._GetAutoObject(
A.Device.Device).Am.Ca()-1;A._GetAutoObject(A.Device.Helper).HL(LB);},AAv:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqr)A._GetAutoObject(C.A$).Aho(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XV._Init.call(this.XV={I:this},0);this.
__proto__=C.AMv;this.Background.H(Cd);this.N.Z(true);this.N.ON(true);this.N.OO(true
);this.Dq(C.APr);this.XV.H(Fb);this.J(this.XV,0);this.N.CC=[this,this.Anl];this.
N.Cl=[this,this.XC];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbB));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XV._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XV._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);},
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
,KS:0,Hf:false,CP:function(){this.Cf(this);},Init:function(aArg){var B;A.zX([this
,this.Bbc],[B=A._GetAutoObject(A.Device.Helper).W,B.QZ,B.OnSetId],0);A.pe([this,
this.Bbc],this);},Bk:function(aSize){C.Hc.Bk.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hc.Ai.call(this,Ae);if(this.
Hf)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CK);},Cf:function(G){}
,Bbc:function(s){this.Cf(s);},Bh:function(E){if(this.Hf===E)return;this.Hf=E;this.
An();},De:function(E){if(this.KS===E)return;this.KS=E;},_Init:function(aArg){C.Hc.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);this.__proto__=
C.IZ;this.H(BF);this.Background.H(AIn);this.KS=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hc;this.Background._Done(
);C.Hc._Done.call(this);},_ReInit:function(){C.Hc._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NE={GY:null,BAG:function(G){this.BT.H(A.abN(this.BT.M,this.GY.M[0]));},_Init:
function(aArg){C.Fu._Init.call(this,aArg);A.acg.Text._Init.call(this.GY={I:this}
,0);this.__proto__=C.NE;this.GY.AZ(0xA);this.GY.H(Bsr);this.GY.Hh(5);this.GY.I7(
true);this.GY.A6(0x14);this.GY.R(A.jV);this.GY.L(A.jb.Text);this.J(this.GY,0);this.
GY.Q2([this,this.BAG]);this.GY.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fu;this.GY._Done();C.Fu._Done.call(this);},_ReInit:function(){C.Fu._ReInit.call(
this);this.GY._ReInit();this.GY.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fu.
_Mark.call(this,D);if((B=this.GY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axe={AQ3:null,_Init:function(aArg){C.Zz._Init.call(this,aArg);this.__proto__=
C.Axe;},_Mark:function(D){var B;C.Zz._Mark.call(this,D);if((B=this.AQ3)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANC={Wt:null,WQ:0,AwG:function(E){C.AmC.AwG.call(this,E);if(E)this.Pm.R(Bss);
else this.Pm.R(Bab);},BmK:function(E){if(A.aaZ(this.Wt,E))return;if(!!this.Wt)A.
z$([this,this.A29],this.Wt,0);this.Wt=E;if(!!E)A.zX([this,this.A29],E,0);if(!!E)
A.pe([this,this.A29],this);},AFH:function(E){var F;if(this.WQ===E)return;this.WQ=
E;this.AwG(!!this.Wt&&((F=this.Wt,F[1].call(F[0]))===E));},A29:function(G){var F;
this.AwG(!!this.Wt&&((F=this.Wt,F[1].call(F[0]))===this.WQ));},_Init:function(aArg
){C.AmC._Init.call(this,aArg);this.__proto__=C.ANC;this.Pm.R(Bab);this.Pm.S(A.aaL(
A.fl.Hr));},_Mark:function(D){var B;C.AmC._Mark.call(this,D);if((B=this.Wt)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axg={Wt:null,WQ:0,_Init:function(aArg){C.Zz._Init.call(this,aArg);this.__proto__=
C.Axg;},_Mark:function(D){var B;C.Zz._Mark.call(this,D);if((B=this.Wt)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATW={GL:null,_Init:function(aArg){C.Ce._Init.call(this,aArg);C.Q9._Init.call(
this.GL={I:this},0);this.__proto__=C.ATW;var B;this.I8(A.aaR(A.acf.ACD));this.GL.
H(AhU);this.GL.Aj(true);this.GL.Z(true);this.GL.T(A.aaR(A.acf.AF9));this.GL.Ar2(
false);this.GL.A93(true);this.J(this.GL,0);this.GL.AeR([B=this.GL,B.FQ]);this.GL.
Go([this,this.D_,this.GN]);this.GL.Akz(A.aaL(A.ach.Edit));this.GL.As([B=A._GetAutoObject(
A.Device.Device),B.ASA,B.AZ7]);},_Done:function(){this.__proto__=C.Ce;this.GL._Done(
);C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.GL._ReInit(
);this.I8(A.aaR(A.acf.ACD));this.GL.T(A.aaR(A.acf.AF9));},_Mark:function(D){var B;
C.Ce._Mark.call(this,D);if((B=this.GL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATU={GF:0,C7:null,AW:null,Kn:null,E9:null
,GermanStateToString:null,CountryToString:null,Pt:0,K_:0,L9:false,Init:function(
aArg){A.zX([this,this.MF],[this,this.Sy,this.Lm],0);A.zX([this,this.MF],[this,this.
Ano,this.Ahk],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.AW.FI(this.LQ);this.
Kn.FI(this.LQ);this.E9.CT(this.LQ);},DJ:function(G){var F;if(!this.N)return;switch(
this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.G_];(F=
this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[
1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[
0])).CV(this.CountryToString.BH(this.K_));(F=this.N,F[1].call(F[0])).Cm=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.G_];(F=this.N,F[1].call(F[0]
)).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(
F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.Gu
)+Ax5)+this.GermanStateToString.Ls(A._GetAutoObject(A.Device.Converter).ACO(this.
Pt)));(F=this.N,F[1].call(F[0])).Cm=null;}break;default:{(F=this.N,F[1].call(F[0
])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(
F[0])).CC=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=null;}}}
,Ex:function(EO){var Tk=this.A8;if(EO<0)EO=0;else if(EO>this.RF)EO=this.RF;switch(
EO){case 0:{this.Bb(null);if(!this.GF&&!this.Pt)this.Lm(0);}break;case 1:this.Bb(
this.E9);break;case 2:this.Bb(this.Kn);break;case 3:if(((Tk===2)&&!this.Pt)&&!this.
GF)return;else{this.Bb(this.AW);if(!this.GF||(Tk>0))this.AW.SK(2);else this.AW.SK(
7);}break;default:throw new Error(Ate+EO.toFixed());}this.A8=EO;C.Ek.Ex.call(this
,EO);},By:function(E){if(this.AM===E)return;this.AM=E;this.L9=true;this.Sz(A._GetAutoObject(
A.Device.Helper).Sf(E,0,10));this.Ahk(A._GetAutoObject(A.Device.Helper).Sf(E,10,
2)|0);this.Lm(A._GetAutoObject(A.Device.Converter).ZZ(E));this.L9=false;if(!!this.
AM){this.Kn.Kq(2);this.AW.Kq(10);}else{this.Kn.Kq(0);this.AW.Kq(0);}this.An();},
FQ:function(G){var F;if(!this.AM){var BQ=this.AM;this.By(A._GetAutoObject(A.Device.
Helper).AC0());if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(2);}else this.Ex(this.RF);},AjN:function(){return this.GF;
},AjP:function(){return 9999999999;},Lm:function(E){if(this.K_===E)return;this.K_=
E;if(this.L9===false)A.pe([this,this.Vk],this);A.abo([this,this.Sy,this.Lm],0);}
,Sz:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this,this.
Vk],this);A.abo([this,this.AbZ,this.Sz],0);},Vk:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).AqA(this.K_),3,10)+A.abl(this.Pt,2,10))+
A.abm(this.GF,10,10);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahk:function(
E){if(this.Pt===E)return;this.Pt=E;if(this.L9===false)A.pe([this,this.Vk],this);
A.abo([this,this.Ano,this.Ahk],0);},Sy:function(){return this.K_;},AbZ:function(
){return this.GF;},Ano:function(){return this.Pt;},_Init:function(aArg){C.Ek._Init.
call(this,aArg);C.C7._Init.call(this.C7={I:this},0);C.AQX._Init.call(this.AW={I:
this},0);C.AvK._Init.call(this.Kn={I:this},0);C.AsH._Init.call(this.E9={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATU;var B;this.RF=3;this.AW.H(Bst);this.Kn.H(Bsu);this.Kn.EV(16);this.E9.H(Bac
);this.J(this.AW,0);this.J(this.Kn,0);this.J(this.E9,0);this.C7.AEY([this,this.Sy
,this.Lm]);this.AW.As([this,this.AbZ,this.Sz]);this.Kn.As([this,this.Ano,this.Ahk
]);this.E9.CI(this.C7);this.E9.As([B=this.C7,B.B8,B.B9]);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ek;this.C7._Done();this.AW._Done();this.Kn._Done();this.
E9._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.Ek._Done.
call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit();this.AW.
_ReInit();this.Kn._ReInit();this.E9._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E9)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AQX={NK:null,NJ:null,ET:null,FW:null,Eo:null,Dx:null,CU:null,Ct:null,FI:function(
E){if(this.M3===E)return;C.Le.FI.call(this,E);this.Ct.CT(E);this.CU.CT(E);this.Dx.
CT(E);this.Eo.CT(E);this.FW.CT(E);this.ET.CT(E);this.NJ.CT(E);this.NK.CT(E);},Yr:
function(Hw){var B6=null;switch(Hw){case-1:case 0:B6=this.FX;break;case 1:B6=this.
Ct;break;case 2:B6=this.CU;break;case 3:B6=this.Dx;break;case 4:B6=this.Eo;break;
case 5:B6=this.FW;break;case 6:B6=this.ET;break;case 7:B6=this.NJ;break;case 8:B6=
this.NK;break;case 9:B6=this.GX;break;default:A.ab5("%s",AhX);}return B6;},_Init:
function(aArg){C.Le._Init.call(this,aArg);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FW={I:this},0);C.DF._Init.call(this.Eo={I:this},0);C.DF._Init.call(this.
Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.AQX;this.H(Bsv);this.GX.H(AID);this.NK.H(Ayu);this.NJ.H(AZG
);this.ET.H(AZH);this.FW.H(AZI);this.Eo.H(AZJ);this.Dx.H(AZK);this.CU.H(AZL);this.
Ct.H(A$Y);this.FX.H(AZM);this.EN.H(AZM);this.J(this.NK,-2);this.J(this.NJ,-2);this.
J(this.ET,-2);this.J(this.FW,-2);this.J(this.Eo,-2);this.J(this.Dx,-2);this.J(this.
CU,-2);this.J(this.Ct,-2);this.NK.Di=[this,this.GQ];this.NJ.Di=[this,this.GQ];this.
ET.Di=[this,this.GQ];this.FW.Di=[this,this.GQ];this.Eo.Di=[this,this.GQ];this.Dx.
Di=[this,this.GQ];this.CU.Di=[this,this.GQ];this.Ct.Di=[this,this.GQ];},_Done:function(
){this.__proto__=C.Le;this.NK._Done();this.NJ._Done();this.ET._Done();this.FW._Done(
);this.Eo._Done();this.Dx._Done();this.CU._Done();this.Ct._Done();C.Le._Done.call(
this);},_ReInit:function(){C.Le._ReInit.call(this);this.NK._ReInit();this.NJ._ReInit(
);this.ET._ReInit();this.FW._ReInit();this.Eo._ReInit();this.Dx._ReInit();this.CU.
_ReInit();this.Ct._ReInit();},_Mark:function(D){var B;C.Le._Mark.call(this,D);if((
B=this.NK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ct
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATV={
GF:0,C7:null,AW:null,E9:null,CountryToString:null,K_:0,L9:false,Init:function(aArg
){A.zX([this,this.MF],[this,this.Sy,this.Lm],0);},Ai:function(Ae){C.Ek.Ai.call(this
,Ae);this.AW.FI(this.LQ);this.E9.CT(this.LQ);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.
G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.
N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(this.CountryToString.BH(this.K_));(F=this.N,F[1].call(F[0])).Cm=null;}
break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.G_];(F=this.N,F[1].call(
F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=
null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cm=null;}}},Ex:function(EO){var Tk=this.A8;if(EO<0)EO=0;
else if(EO>this.RF)EO=this.RF;switch(EO){case 0:{this.Bb(null);if(!this.GF)this.
Lm(0);}break;case 1:this.Bb(this.E9);break;case 2:{this.Bb(this.AW);if(!this.GF||(
Tk>0))this.AW.SK(2);else this.AW.SK(7);}break;default:throw new Error(Ate+EO.toFixed(
));}this.A8=EO;C.Ek.Ex.call(this,EO);},By:function(E){if(this.AM===E)return;this.
AM=E;this.L9=true;this.Sz(A._GetAutoObject(A.Device.Helper).Sf(E,0,12));this.Lm(
A._GetAutoObject(A.Device.Converter).ZZ(E));this.L9=false;if(!!this.AM)this.AW.Kq(
12);else this.AW.Kq(0);this.An();},FQ:function(G){var F;if(!this.AM){var BQ=this.
AM;this.By(A._GetAutoObject(A.Device.Helper).AC0());if(this.AM!==BQ){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(this.RF);},AjN:function(
){return this.GF;},AjP:function(){return 999999999999;},Lm:function(E){if(this.K_===
E)return;this.K_=E;if(this.L9===false)A.pe([this,this.Vk],this);A.abo([this,this.
Sy,this.Lm],0);},Sz:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false
)A.pe([this,this.Vk],this);A.abo([this,this.AbZ,this.Sz],0);},Vk:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).AqA(this.K_),3,10)+A.abm(
this.GF,12,10);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Sy:function(){return this.
K_;},AbZ:function(){return this.GF;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C7._Init.call(this.C7={I:this},0);C.ADJ._Init.call(this.AW={I:this},0);C.AsH.
_Init.call(this.E9={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATV;var B;this.RF=2;this.AW.H(Bsw);this.E9.H(Bac);this.
J(this.AW,0);this.J(this.E9,0);this.C7.AEY([this,this.Sy,this.Lm]);this.AW.As([this
,this.AbZ,this.Sz]);this.E9.CI(this.C7);this.E9.As([B=this.C7,B.B8,B.B9]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ek;this.C7._Done();this.AW._Done();this.
E9._Done();this.CountryToString._Done();C.Ek._Done.call(this);},_ReInit:function(
){C.Ek._ReInit.call(this);this.C7._ReInit();this.AW._ReInit();this.E9._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DZ:null,Y:null,Ay:null,X$:null,Ya:null,X_:null,X8:null,X9:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},CF:function(G){C.AB.CF.call(this,G);A._GetAutoObject(A.
Device.Device).Am.Bl(null);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(
A.Device.Helper).AkO();A._GetAutoObject(A.Device.Helper).Asp();},Ie:function(G){
var Cx=(C.Fj.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.X$)A._GetAutoObject(
C.A$).Cg(28);else if(Cx===this.Ya)A._GetAutoObject(C.A$).Cg(26);else if(Cx===this.
X_)A._GetAutoObject(C.A$).Cg(54);else if(Cx===this.X8)A._GetAutoObject(C.A$).Cg(
27);else if(Cx===this.X9)A._GetAutoObject(C.A$).Cg(78);},A3b:function(G){A._GetAutoObject(
C.A$).Fv();},Fg:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.
Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fj._Init.call(this.X$={I:this
},0);C.Fj._Init.call(this.Ya={I:this},0);C.Fj._Init.call(this.X_={I:this},0);C.Fj.
_Init.call(this.X8={I:this},0);C.Fj._Init.call(this.X9={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Ej.Ar(false
);this.Dq(C.Aq1);this.DZ.AZ(0x3F);this.DZ.H(Fb);this.DZ.L(A.jb.CK);this.Y.H(Fb);
this.Y.JO(9);this.Ay.H(Iq);this.X$.H(P4);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.
A7y));this.Ya.H(AZS);this.Ya.Aj(true);this.Ya.T(A.aaR(A.acf.NewAnimals));this.X_.
H(N_);this.X_.Aj(true);this.X_.T(A.aaR(A.acf.Calving));this.X8.H(P5);this.X8.Aj(
true);this.X8.T(A.aaR(A.acf.ABV));this.X9.H(ME);this.X9.Aj(true);this.X9.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
X$,0);this.J(this.Ya,0);this.J(this.X_,0);this.J(this.X8,0);this.J(this.X9,0);this.
N.CC=[this,this.A3b];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fg];this.X$.
AR=[this,this.Ie];this.X$.DB(A.aaL(A.ach.ADE));this.Ya.AR=[this,this.Ie];this.Ya.
DB(A.aaL(A.ach.AvE));this.X_.AR=[this,this.Ie];this.X_.DB(A.aaL(A.ach.AP2));this.
X8.AR=[this,this.Ie];this.X8.DB(A.aaL(A.ach.APZ));this.X9.AR=[this,this.Ie];this.
X9.DB(A.aaL(A.ach.APS));},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.
Y._Done();this.Ay._Done();this.X$._Done();this.Ya._Done();this.X_._Done();this.X8.
_Done();this.X9._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit();this.X$._ReInit(
);this.Ya._ReInit();this.X_._ReInit();this.X8._ReInit();this.X9._ReInit();this.X$.
T(A.aaR(A.acf.A7y));this.Ya.T(A.aaR(A.acf.NewAnimals));this.X_.T(A.aaR(A.acf.Calving
));this.X8.T(A.aaR(A.acf.ABV));this.X9.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARS={K3:null,EaseOfDelivery:null,BirthType:null,AcK:null
,Li:null,Co:null,G2:null,Lg:null,AzH:true,Init:function(aArg){this.Bb(this.C$);A.
pe([this,this.GE],this);},Ew:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.Hi();A._GetAutoObject(C.A$).Fv();if(!!this.K3)this.K3.Ew(this);},Aga:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EC((F=this.BZ.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwH(true);if(!!this.K3)this.K3.Aga(this
);if(A._GetAutoObject(A.Device.Device).Am.Lf())A._GetAutoObject(A.Device.Helper).
AKi(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApH]);else{this.AiZ();A.
pe([this,this.Ap6],this);}},Auf:function(){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.
ADI));this.N.Cm=[this,this.AyL];},CF:function(G){var B;C.HY.CF.call(this,G);if(A.
_GetAutoObject(A.Device.Device).Am.Lf()){A._GetAutoObject(A.Device.Device).A9(41
,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),0,null);this.Ew(this);
}else if(this.AzH){this.AzH=false;A.pe([this,this.A3q],this);}else if(!this.K3){
this.K3=A._NewObject(C.ART,0);this.K3.A9y([this,this.AAS]);A._GetAutoObject(A.Device.
Helper).W.Gn();A._GetAutoObject(A.Device.Helper).Aqj(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Ne(this.AsS.Aeg(6));this.K3.LN(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ew(this);}},AiZ:function(
){A._GetAutoObject(A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).Am);var
L6=A._GetAutoObject(A.Device.Device).Am.LS(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SL(L6);if(A._GetAutoObject(A.Device.Helper
).Am2()){if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.
Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gn();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KH);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Ch(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A6F(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap6:function(G){var B;if(!!this.K3)this.K3.Ap6(this);},GE:function(G){if(
A._GetAutoObject(A.Device.Helper).Am2())this.C9.Z(true);else this.C9.Z(false);},
ApH:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;
switch(At.Id){case 41:break;default:A.ab5("%s%e",As6,At.Id);}},AAS:function(G){this.
LN(this);this.AeT(A._GetAutoObject(A.Device.Helper).Abp(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JD(this.C$);},ApI:function(G){var F;C.HY.ApI.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnV));},A3q:function(G){A._GetAutoObject(
C.A$).Cg(79);},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcK._Init.call(this.AcK={I:this},0);C.Q9._Init.call(this.Li={I:this
},0);C.SM._Init.call(this.Co={I:this},0);C.BW._Init.call(this.G2={I:this},0);C.BW.
_Init.call(this.Lg={I:this},0);this.__proto__=C.ARS;var B;this.Dq(C.APo);this.Li.
H(AhU);this.Li.Aj(true);this.Li.T(A.aaR(A.acf.ACj));this.CG.H(AcP);this.Co.H(AcP
);this.Co.Aj(true);this.Co.T(A.aaR(A.acf.Aeb));this.Co.AFy(true);this.G2.H(AcP);
this.G2.Aj(true);this.G2.T(A.aaR(A.acf.Arq));this.Lg.H(AcP);this.Lg.Aj(true);this.
Lg.T(A.aaR(A.acf.AgC));this.J(this.Li,-5);this.J(this.Co,-3);this.J(this.G2,-1);
this.J(this.Lg,-1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.AcK.LY(A._GetAutoObject(A.
Device.Helper).W);this.Li.Go([this,this.D_,this.GN]);this.Li.As([B=A._GetAutoObject(
A.Device.Helper).W,B.ASw,B.AnC]);this.Co.Go([this,this.D_,this.GN]);this.Co.LX([
B=this.Co,B.FQ]);this.Co.L0(A.aaL(A.ach.Edit));this.Co.Ab7([B=A._GetAutoObject(A.
Device.Helper).W,B.Av7,B.Q1]);this.Gj.As([B=this.AcK,B.B8,B.B9]);this.Gj.CI(this.
AcK);this.G2.As([B=this.BirthType,B.B8,B.B9]);this.G2.CI(this.BirthType);this.Lg.
As([B=this.EaseOfDelivery,B.B8,B.B9]);this.Lg.CI(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcK._Done();this.Li._Done();this.Co._Done();this.G2._Done();this.Lg.
_Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcK._ReInit();this.Li._ReInit(
);this.Co._ReInit();this.G2._ReInit();this.Lg._ReInit();this.Li.T(A.aaR(A.acf.ACj
));this.Co.T(A.aaR(A.acf.Aeb));this.G2.T(A.aaR(A.acf.Arq));this.Lg.T(A.aaR(A.acf.
AgC));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.K3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMx={Init:function(aArg){var B;A.zX([this,this.Bgi],[B=A._GetAutoObject(A.Device.
Device),B.AEz,B.AIR],0);A.pe([this,this.Bgi],this);},AKP:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbV){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACR();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOI();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mo();break;default:throw new Error(AZV+A.
_GetAutoObject(A.Device.Device).AbV.toFixed());}A._GetAutoObject(A.Device.Device
).Am.Bl(Be);},Bgi:function(G){switch(A._GetAutoObject(A.Device.Device).AbV){case
0:this.Dz(A.aaR(A.acf.ARY));break;case 1:this.Dz(A.aaR(A.acf.BjO));break;case 2:
this.Dz(A.aaR(A.acf.AvZ));break;default:A.ab5("%s",AZV+A._GetAutoObject(A.Device.
Device).AbV.toFixed());}},_Init:function(aArg){C.Ams._Init.call(this,aArg);this.
__proto__=C.AMx;this.BmC(C.APE);this.Ej.Ab3(A._NewObject(C.APt,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ART={AAd:0,Ade:null
,AuT:null,BdK:0,A3D:0,A2x:0,Init:function(aArg){this.BdK=A._GetAutoObject(A.Device.
Helper).W.Id;this.Ade=A._GetAutoObject(A.Device.Device).Am.Filter;this.AAd=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2x=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LN:function(G){A._GetAutoObject(A.Device.Helper).W.AnC(this.AAd);A._GetAutoObject(
A.Device.Helper).W.Ae1(true);switch(this.A2x){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EC(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EC(2);break;default:
A.ab5("%s%e",AZD,this.A2x);}},Ew:function(G){A._GetAutoObject(A.Device.Device).Am.
Bl(this.Ade);if(!!this.A3D)this.Bgk();},Aga:function(G){A._GetAutoObject(A.Device.
Device).Am.Bl(null);},Bgk:function(){var AtU=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).Am.LS(0,this.BdK);AtU.Er(Ad,A._GetAutoObject(
A.Device.Device).Am);AtU.Awt(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);AtU.
ArV(false);AtU.AwI(AtU.LactationNumber+1);AtU.Ch(A._GetAutoObject(A.Device.Device
).Am);},Ap6:function(G){this.A3D++;var BxS=A._GetAutoObject(A.Device.Converter).
Bg5(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3D<BxS)&&(A._GetAutoObject(
A.Device.Helper).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A9(59,true,A.jV,0,[this,this.Vf]);else this.BcI(
this);},Vf:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&(At.PopupState===8))this.BcI(this);else if(!!At&&(At.PopupState===7))this.
AAS(this);},AAS:function(G){var B;var H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfR=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Td=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJX=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuT)(B=this.AuT
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EC(H$);A._GetAutoObject(
A.Device.Helper).W.Akv(AfR);A._GetAutoObject(A.Device.Helper).W.NY(Bv);A._GetAutoObject(
A.Device.Helper).W.Q1(Td);A._GetAutoObject(A.Device.Helper).W.Akx(AJX);},BcI:function(
G){this.Bgk();A._GetAutoObject(C.A$).Fv();A._GetAutoObject(A.Device.Device).Am.Bl(
this.Ade);},A9y:function(E){if(A.aa0(this.AuT,E))return;this.AuT=E;},_Init:function(
aArg){this.__proto__=C.ART;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ade)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMN={Init:function(aArg){
var B;A.zX([this,this.Bd7],[B=A._GetAutoObject(A.Device.Device),B.ASf,B.AZW],0);
this.Bd7(this);},Ch:function(){A.ab5("%s",Bsx);},Er:function(AcT){C.Vt.Er.call(this
,AcT);var O;for(O=16;O>0;O--)this.H_.Set(O,this.H_.Get(O-1));this.H_.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Bsy);},ADN:function(EE){switch(EE){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bd7:
function(G){this.Er(A._GetAutoObject(A.Device.Device).Auy);A.we(this,0);},_Init:
function(aArg){C.Vt._Init.call(this,aArg);this.__proto__=C.AMN;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuL={_Init:function(){C.
AMN._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JG={C5:null,V:null,A7r:true,T:function(E){C.IZ.T.call(this,E);this.
V.R(E);},De:function(E){C.IZ.De.call(this,E);this.V.L(E);},BmH:function(E){if(this.
A7r===E)return;this.A7r=E;this.C5.Z(E);},_Init:function(aArg){C.IZ._Init.call(this
,aArg);A.acg.C5._Init.call(this.C5={I:this},0);C.CH._Init.call(this.V={I:this},0
);this.__proto__=C.JG;this.C5.DC(Bsz);this.C5.DM(BsA);this.C5.L(A.jb.Bc);this.V.
AZ(0x3F);this.V.H(BsB);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C5,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(A.aaL(A.
fl.Bi));},_Done:function(){this.__proto__=C.IZ;this.C5._Done();this.V._Done();C.
IZ._Done.call(this);},_ReInit:function(){C.IZ._ReInit.call(this);this.C5._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(
A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.IZ._Mark.call(this,D);if((B=this.C5).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APt={AgP:null,Dd:null,Abn:null,Fi:null,E_:
null,Init:function(aArg){var B;A.zX([this,this.A4c],[B=A._GetAutoObject(A.Device.
Device),B.AEz,B.AIR],0);A.pe([this,this.A4c],this);},De:function(E){C.Yu.De.call(
this,E);this.Dd.L(E);},AEF:function(G){A.pe([this,this.A4c],this);},AAU:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E8();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DL(1,4))?B:null);if(!!FilterCriterion)Filter.Nh(FilterCriterion);A._GetAutoObject(
A.Device.Device).Am.Bl(Filter);}},C2:function(G){var B;var F;C.Yu.C2.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Dd.Aw(A.aaL(A.ach.AjV));return;}var Byz=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(38,0)
)?B:null);var Bbl=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DL(14,0))?B:null);if(!!Byz)this.Dd.Aw(A.aaL(A.ach.AC6));else if(
!!Bbl&&(Bbl.A4===1))this.Dd.Aw(A.aaL(A.ach.AP4));else this.Dd.Aw(A.aaL(A.ach.AjV
));},A4c:function(G){var F;var Filter=null;var AOw;switch(A._GetAutoObject(A.Device.
Device).AbV){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACR();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOI();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mo();break;default:throw new Error(AZV+A._GetAutoObject(A.Device.
Device).AbV.toFixed());}var Ai3=this.Akp();if(Ai3>0){AOw=A._NewObject(A.Device.Int32FilterCriterion
,0);AOw.Initialize(1,4,Ai3,false);Filter.CW(AOw);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeU(false);},Ol:function(G){if(!this.Akp())this.AW.AeU(true
);this.Bb(this.AW);this.An();},MT:function(G){this.AW.AeU(false);this.Bb(this.AgP
);this.An();},_Init:function(aArg){C.Yu._Init.call(this,aArg);C.Arb._Init.call(this.
AgP={I:this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);C.Abn._Init.call(this.Abn={
I:this},0);A.Core.BM._Init.call(this.Fi={I:this},0);A.Core.BM._Init.call(this.E_={
I:this},0);this.__proto__=C.APt;var B;this.H(BsC);this.AW.H(BsD);this.T1.H(BsE);
this.Gr.Z(false);this.AgP.H(BsF);this.Dd.H(BsG);this.Abn.As(A._GetAutoObject(A.Device.
Device).AbV);this.Fi.Filter=6;this.E_.Filter=7;this.JU(this.A_,-1);this.J(this.AgP
,-1);this.J(this.Dd,-1);this.AgP.CI(this.Abn);this.AgP.As([B=this.Abn,B.B8,B.B9]
);this.Dd.Aw(A.aaL(A.ach.AjV));this.Fi.BN=[this,this.Ol];this.E_.BN=[this,this.MT
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yu;this.AgP._Done();this.Dd.
_Done();this.Abn._Done();this.Fi._Done();this.E_._Done();C.Yu._Done.call(this);}
,_ReInit:function(){C.Yu._ReInit.call(this);this.AgP._ReInit();this.Dd._ReInit();
this.Abn._ReInit();this.Fi._ReInit();this.E_._ReInit();},_Mark:function(D){var B;
C.Yu._Mark.call(this,D);if((B=this.AgP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abn={AeO:null
,Init:function(aArg){var B;A.zX([this,this.BdM],[B=A._GetAutoObject(A.Device.Device
),B.AEz,B.AIR],0);A.pe([this,this.BdM],this);},Dn:function(){return 3;},As:function(
E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.Device).AwP(E);},ACQ:function(
aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return null;return this.AeO.AsI(aIndex
);},ACS:function(aIndex){if((aIndex<0)||(aIndex>=this.Dn()))return-1;return this.
AeO.AsJ(aIndex);},BdM:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbV;A.
abo([this,this.B8,this.B9],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.AeO._Init.call(this.AeO={I:this},0);this.__proto__=C.Abn;this.Cc.Set(0,
0);this.Cc.Set(1,1);this.Cc.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cn;this.AeO._Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(
this);this.AeO._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=
this.AeO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APE={Eq:null,IK:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CH._Init.
call(this.Eq={I:this},0);A.acg.Text._Init.call(this.IK={I:this},0);this.__proto__=
C.APE;this.H(O2);this.Background.H(O2);this.Eq.H(AIo);this.Eq.R(A.aaR(A.acf.A6K)
);this.Eq.A6(0x12);this.Eq.L(A.jb.Text);this.IK.AZ(0x3F);this.IK.H(Ayo);this.IK.
Hh(5);this.IK.A6(0x14);this.IK.R(A.aaR(A.acf.AGM));this.IK.L(A.jb.Text);this.J(this.
Eq,0);this.J(this.IK,0);this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.Ii));this.
Eq.Cu(A.aaL(A.fl.Bi));this.IK.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EB;this.Eq._Done();this.IK._Done();C.EB._Done.call(this);},_ReInit:function(){
C.EB._ReInit.call(this);this.Eq._ReInit();this.IK._ReInit();this.Eq.R(A.aaR(A.acf.
A6K));this.IK.R(A.aaR(A.acf.AGM));this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.
Ii));this.Eq.Cu(A.aaL(A.fl.Bi));this.IK.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EB._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={JX:null,BfT:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bex(this);else A._GetAutoObject(A.Device.Device).A9(63,true,A.
jV,0,[this,this.Vf]);},Bex:function(G){A._GetAutoObject(C.A$).Fv();},Vf:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!At&&(At.Id===63)
)&&(At.PopupState===7))this.Bex(this);},_Init:function(aArg){C.Me._Init.call(this
,aArg);A.acg.Text._Init.call(this.JX={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dq(C.APs);this.Jc.H(BsH);this.Jc.AkF(2);this.Acy.Z(false);this.ARy=12;this.
Number.H(BsI);this.Number.R(A.aaR(A.acf.A_Z));this.A4I=false;this.JX.H(BsJ);this.
JX.Hh(5);this.JX.KR(true);this.JX.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABB));this.JX.L(A.jb.Text);this.JU(this.Jc,-1);this.JU(this.IP,-1);this.
JU(this.Acy,-1);this.J(this.JX,0);this.JX.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Me;this.JX._Done();C.Me._Done.call(this);},_ReInit:function(){C.Me._ReInit.
call(this);this.JX._ReInit();this.Number.R(A.aaR(A.acf.A_Z));this.JX.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABB));this.JX.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Me._Mark.call(this,D);if((B=this.JX)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APs={_Init:function(aArg){C.Aq0.
_Init.call(this,aArg);this.__proto__=C.APs;this.DS.EC(1);},_className:"Application::HeaderScannedCowId"
};C.Jc={AbL:null,AbK:null,AbJ:null,QC:null,CountryToString:null,AsL:0,CP:function(
){this.An();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QC.R(this.CountryToString.
Ls(A._GetAutoObject(A.Device.Converter).A68(A._GetAutoObject(A.Device.Device).Language
))+BsK);},AkF:function(E){if(this.AsL===E)return;this.AsL=E;var bitmap=null;var A1F=
BsL;var A1E=null;var A1G=false;switch(E){case 0:bitmap=A.aaL(A.ach.Ara);break;case
1:{bitmap=A.aaL(A.ach.AQE);A1F=BsM;A1E=A.aaL(A.fl.Ak);A1G=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQF);A1F=BsN;A1E=A.aaL(A.fl.Bi);A1G=true;}break;default:throw new Error(
BsO+E.toFixed());}this.AbJ.Aw(bitmap);this.AbK.Aw(bitmap);this.AbL.Aw(bitmap);this.
QC.H(A.abJ(this.QC.M,A1F));this.QC.S(A1E);this.QC.Z(A1G);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbL={I:this},0);A.acg.Ap._Init.call(this.AbK={I:this},0);A.acg.Ap._Init.
call(this.AbJ={I:this},0);A.acg.Text._Init.call(this.QC={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jc;this.H(AIG);this.
AbL.AZ(0x3);this.AbL.H(AIG);this.AbL.L(A.jb.H6);this.AbL.Cv(2);this.AbK.AZ(0x3);
this.AbK.H(AIG);this.AbK.L(A.jb.Ad8);this.AbK.Cv(1);this.AbJ.AZ(0x3);this.AbJ.H(
AIG);this.AbJ.L(A.jb.Text);this.AbJ.Cv(0);this.QC.AZ(0x14);this.QC.H(BsP);this.QC.
L(0xFF020202);this.QC.Z(false);this.J(this.AbL,0);this.J(this.AbK,0);this.J(this.
AbJ,0);this.J(this.QC,0);this.AbL.Aw(A.aaL(A.ach.Ara));this.AbK.Aw(A.aaL(A.ach.Ara
));this.AbJ.Aw(A.aaL(A.ach.Ara));this.QC.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbL._Done();this.AbK._Done();this.AbJ._Done();this.QC._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbL._ReInit();this.AbK._ReInit();this.AbJ._ReInit(
);this.QC._ReInit();this.CountryToString._ReInit();this.QC.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QC)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsL={Transponder:0,BFz:1,BFA:2};C.APo={Ap:null,De:function(E){C.BR.De.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APo;this.Ap.H(AZE);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.APf));},_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.
BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
If:0,AaF:4,Al2:function(G){C.Q8.Al2.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bdi()){this.If=A._GetAutoObject(A.Device.Helper).Uw.Id;var Aiv=A._GetAutoObject(
A.Device.Helper).A66(this.If,A._GetAutoObject(A.Device.Helper).W);if(Aiv){A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(this.If),0,[
this,this.Vf]);return;}Aiv=A._GetAutoObject(A.Device.Helper).Bje(this.If,A._GetAutoObject(
A.Device.Helper).W);if(Aiv&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.If)){A._GetAutoObject(A.Device.Device).A9(25,true,A._GetAutoObject(A.Device.
Converter).Rf(this.If),0,[this,this.Vf]);return;}this.AaF=A._GetAutoObject(A.Device.
Helper).AQ_(this.If);switch(this.AaF){case 0:A._GetAutoObject(A.Device.Device).A9(
45,true,this.If.toFixed().length.toFixed(),0,[this,this.Vf]);break;case 1:case 2:{
var BO=A._GetAutoObject(A.Device.Converter).AxL(this.If);A._GetAutoObject(A.Device.
Device).A9(46,true,BO.toFixed(),0,[this,this.Vf]);}break;case 3:this.BfL();break;
default:throw new Error(AIc+this.AaF.toFixed());}}},Ew:function(G){A._GetAutoObject(
C.A$).Fv();},Vf:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!At)switch(At.PopupState){case 4:if(this.AaF===2)this.BfL();else A._GetAutoObject(
A.Device.Device).AhD();break;case 5:this.Ew(this);break;default:;}},BfL:function(
){A._GetAutoObject(A.Device.Helper).W.Nc(this.If);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PP(this.If);A._GetAutoObject(
A.Device.Helper).W.Ch(A._GetAutoObject(A.Device.Device).Am);A._GetAutoObject(A.Device.
Device).A9(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ew(this);},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dq(C.IG);this.Number.R(A.aaR(A.acf.A_S
));this.Jc.H(BsQ);this.IP.H(BsR);this.AkF(1);this.N.CC=[this,this.Ew];this.N.CY(
A.aaL(A.ach.E2));},_ReInit:function(){C.Q8._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_S));},_className:"Application::SetSaveNaisIdScreen"};C.AN2={LN:function(
G){C.AqJ.LN.call(this,G);A.pe([this,this.BBi],this);},BBi:function(G){this.JD(this.
Ef);},_Init:function(aArg){C.AqJ._Init.call(this,aArg);this.__proto__=C.AN2;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UM={Animal:null,WhereAboutsToString:
null,FY:function(aIndex){return this.WhereAboutsToString.BH(this.C4(aIndex));},As:
function(E){C.Cn.As.call(this,E);if(!!this.Animal)this.Animal.Ne(E);},A4k:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B8,this.B9],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4k],[B=this.Animal,B.Awh,B.Ne],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4k],[B=this.Animal,B.Awh,B.Ne],0);A.pe([this,this.A4k],this);}
,_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UM;this.Cc.Set(0,1);this.
Cc.Set(1,2);this.Cc.Set(2,3);this.Cc.Set(3,4);this.Cc.Set(4,5);},_Done:function(
){this.__proto__=C.Cn;this.WhereAboutsToString._Done();C.Cn._Done.call(this);},_ReInit:
function(){C.Cn._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UN={Dn:function(){return 6;},_Init:function(aArg){C.UM._Init.call(this,aArg);
this.__proto__=C.UN;this.Cc.Set(0,0);this.Cc.Set(1,1);this.Cc.Set(2,2);this.Cc.Set(
3,3);this.Cc.Set(4,4);this.Cc.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcK={Dn:function(){return 5;},_Init:function(aArg){C.UM._Init.call(this,aArg
);this.__proto__=C.AcK;this.Cc.Set(0,6);this.Cc.Set(1,7);this.Cc.Set(2,8);this.Cc.
Set(3,9);this.Cc.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdR={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bb4],[B=A._GetAutoObject(A.Device.
Device),B.ASg,B.AZX],0);A.pe([this,this.Bb4],this);},Dn:function(){return 2;},C4:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},FY:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;},As:function(E){
C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Awk(E);},Bb4:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Ags;A.abo([this,this.B8,this.B9],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdR;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGA={FF:null
,EA:null,EartagNrAssignmentMode:null,Fi:null,E_:null,HC:null,AW:null,Kj:null,M7:
null,A8:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hf){this.AW.FI(A.jb.CK);this.HC.CT(A.jb.CK);this.Background.L(A.
jb.CS);this.V.L(A.jb.Text);}else{this.AW.FI(A.jb.CS);this.HC.CT(A.jb.CS);this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hf){this.AW.FI(A.jb.CK);this.HC.CT(
A.jb.CK);}else{this.AW.FI(A.jb.CS);this.HC.CT(A.jb.CS);}this.Bb(null);}this.M7.L(
this.V.AQ);},IW:function(G){C.Eg.IW.call(this,G);if(!this.A8)this.FQ(this);else this.
G_(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.
N,F[1].call(F[0])).CC=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.
N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;(F=this.N,F[1].call(
F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=
null;}break;default:this.FF.AkP((F=this.N,F[1].call(F[0])));}},FQ:function(G){this.
Ex(1);},G_:function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A8&&!!this.N)
this.FF.Ajy((F=this.N,F[1].call(F[0])));this.A8=EO;if(this.A8<0)this.A8=0;else if(
this.A8>1)this.A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SK(2);else this.AW.SK(7);}break;default:throw new Error(
Ate+this.A8.toFixed());}this.DJ(this);this.An();},By:function(E){if(this.AM===E)
return;this.AM=E;},Ol:function(G){this.AA3(2);},MT:function(G){this.AA3(7);},AA3:
function(Gw){var B;var Azo=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azo){
var AAf=(A.Core.P.isPrototypeOf(B=this.QE(Azo,Gw,0x15))?B:null);if(!!AAf){this.Bb(
AAf);return true;}}return false;},AfY:function(G){var F;if(!this.EA||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M7.Aw(
A._GetAutoObject(A.Device.Converter).AmQ(2));break;case 1:this.M7.Aw(A._GetAutoObject(
A.Device.Converter).AmQ((F=this.EA,F[1].call(F[0]))));break;default:throw new Error(
Bad+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A3V],this);},A3V:function(G){var B;var F;if(!this.EA||!this.EartagNrAssignmentMode
){this.Kj.AeW(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Anp,B.AoD]);this.Kj.
AeW([B=A._GetAutoObject(A.Device.Device),B.AEv,B.AIO]);}break;case 1:switch((F=this.
EA,F[1].call(F[0]))){case 1:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Av_
,B.AyC]);this.Kj.AeW([B=A._GetAutoObject(A.Device.Device),B.ASm,B.AZZ]);}break;case
0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Av$,B.AyD]);this.Kj.AeW([B=
A._GetAutoObject(A.Device.Device),B.ASn,B.AZ0]);}break;case 2:{this.AW.As([B=A._GetAutoObject(
A.Device.Device),B.Anp,B.AoD]);this.Kj.AeW([B=A._GetAutoObject(A.Device.Device),
B.AEv,B.AIO]);}break;default:throw new Error(BsS+(F=this.EA,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Bad+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Uj:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([
this,this.AfY],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.AfY],this.EA,0);if(!!
E)A.pe([this,this.AfY],this);},Akw:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfY],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfY],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfY],this);},Ue:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BM._Init.call(this.Fi={I:this},0);A.Core.
BM._Init.call(this.E_={I:this},0);C.Arb._Init.call(this.HC={I:this},0);C.AvL._Init.
call(this.AW={I:this},0);C.AuX._Init.call(this.Kj={I:this},0);A.acg.Ap._Init.call(
this.M7={I:this},0);this.__proto__=C.AGA;var B;this.H(UU);this.V.Ar(false);this.
V.R(As8);this.V.L(A.jb.Bm);this.Fi.Filter=6;this.E_.Filter=7;this.HC.H(BsT);this.
AW.H(BsU);this.M7.H(BsV);this.J(this.HC,0);this.J(this.AW,0);this.J(this.M7,0);this.
FF=A._NewObject(C.Aep,0);this.Fi.BN=[this,this.Ol];this.E_.BN=[this,this.MT];this.
HC.CI(this.Kj);this.HC.As([B=this.Kj,B.B8,B.B9]);this.AW.As([this,this.Ue,this.By
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fi._Done();this.E_.
_Done();this.HC._Done();this.AW._Done();this.Kj._Done();this.M7._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fi._ReInit();this.E_.
_ReInit();this.HC._ReInit();this.AW._ReInit();this.Kj._ReInit();this.M7._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FF)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANR={Wl:
null,Zd:null,AbS:null,T8:null,Init:function(aArg){this.Bb(this.Wl);},AEn:function(
G){var BdI=(C.Anf.isPrototypeOf(G)?G:null);if(!!BdI)A._GetAutoObject(A.Device.Device
).A9(BdI.Ady,true,A.jV,0,null);},DE:function(G){if((this.Cr.CO===7)&&(this.AV===
this.T8))A._GetAutoObject(A.Device.Device).A9(10,true,A.jV,0,null);else if((this.
Cr.CO===6)&&(this.AV===this.T8))A._GetAutoObject(C.A$).Cg(91);C.Ei.DE.call(this,
G);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Anf._Init.call(this.Wl={I:
this},0);C.Anf._Init.call(this.Zd={I:this},0);C.Anf._Init.call(this.AbS={I:this}
,0);C.Anf._Init.call(this.T8={I:this},0);this.__proto__=C.ANR;this.Dq(C.AO5);this.
Wl.H(IR);this.Wl.Aj(true);this.Wl.T(A.aaR(A.acf.AhC));this.Wl.Bh(false);this.Wl.
Ady=79;this.Zd.H(P8);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.A_$));this.Zd.Bh(true
);this.Zd.Ady=77;this.AbS.H(Aae);this.AbS.Aj(true);this.AbS.T(A.acf.BiR);this.AbS.
Bh(false);this.AbS.Ady=78;this.T8.H(Ale);this.T8.Aj(true);this.T8.T(A.aaR(A.acf.
About));this.T8.Bh(true);this.T8.Ady=3;this.J(this.Wl,-1);this.J(this.Zd,-1);this.
J(this.AbS,-1);this.J(this.T8,-1);this.Wl.AR=[this,this.AEn];this.Zd.AR=[this,this.
AEn];this.AbS.AR=[this,this.AEn];this.T8.AR=[this,this.AEn];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Wl._Done();this.Zd._Done();this.AbS._Done();
this.T8._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this
);this.Wl._ReInit();this.Zd._ReInit();this.AbS._ReInit();this.T8._ReInit();this.
Wl.T(A.aaR(A.acf.AhC));this.Zd.T(A.aaR(A.acf.A_$));this.T8.T(A.aaR(A.acf.About));
},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Wl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceInfoScreen"};C.AO5={_Init:function(aArg){C.KN._Init.call(this
,aArg);this.__proto__=C.AO5;this.Text.R(A.acf.Info);},_className:"Application::HeaderDeviceInfoMenu"
};C.ANP={FactoryResetScope:null,T$:null,Wj:null,Ub:null,Init:function(aArg){this.
Bb(this.T$);A.pe([this,this.MF],this);},BjY:function(G){switch(this.FactoryResetScope.
C4(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).A9(33,true
,A.jV,0,[this,this.Bfz]);break;case 0:A._GetAutoObject(A.Device.Device).A9(7,true
,A.jV,0,[this,this.Bfz]);break;default:A.ab5("%s%i",BsW,this.FactoryResetScope.Q
);}},Bfz:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!At&&(At.PopupState===7))switch(At.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bn0();A._GetAutoObject(A.Device.Device).A9(8,true,A.jV,0,null);A._GetAutoObject(
C.A$).Cg(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).BnZ();A._GetAutoObject(
A.Device.Device).ArS(0);A._GetAutoObject(A.Device.Device).ArT(0);A._GetAutoObject(
A.Device.Device).ArU(0);A._GetAutoObject(A.Device.Device).ArY(0);A._GetAutoObject(
A.Device.Device).ArZ(0);A._GetAutoObject(A.Device.Device).Ar0(0);A._GetAutoObject(
A.Device.Device).Uh(5);A._GetAutoObject(A.Device.Device).Aww(0);A._GetAutoObject(
A.Device.Device).Awx(0);A._GetAutoObject(A.Device.Device).Awy(0);A._GetAutoObject(
A.Device.Device).AwQ(1);A._GetAutoObject(A.Device.Device).AwR(1);A._GetAutoObject(
A.Device.Device).AwS(1);A._GetAutoObject(A.Device.Device).A9(34,true,A.jV,0,null
);}break;default:A.ab5("%s%e",AId,At.Id);}},_Init:function(aArg){C.Ei._Init.call(
this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={I:this},0);C.Na.
_Init.call(this.T$={I:this},0);C.Na._Init.call(this.Wj={I:this},0);C.BW._Init.call(
this.Ub={I:this},0);this.__proto__=C.ANP;var B;this.Dq(C.AO3);this.T$.H(IR);this.
T$.Aj(true);this.T$.T(A.aaR(A.acf.ACl));this.T$.Bh(false);this.T$.Nd(93);this.Wj.
H(P8);this.Wj.Aj(true);this.Wj.T(A.aaR(A.acf.AdQ));this.Wj.Bh(true);this.Wj.Nd(92
);this.Ub.H(Bae);this.Ub.Aj(true);this.Ub.Blg(true);this.Ub.T(A.aaR(A.acf.A5_));
this.Ub.Bh(false);this.J(this.T$,-1);this.J(this.Wj,-1);this.J(this.Ub,-1);this.
T$.AR=[B=this.T$,B.Ng];this.Wj.AR=[B=this.Wj,B.Ng];this.Ub.AR=[this,this.BjY];this.
Ub.As([B=this.FactoryResetScope,B.B8,B.B9]);this.Ub.CI(this.FactoryResetScope);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.FactoryResetScope._Done();
this.T$._Done();this.Wj._Done();this.Ub._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.FactoryResetScope._ReInit();this.T$._ReInit(
);this.Wj._ReInit();this.Ub._ReInit();this.T$.T(A.aaR(A.acf.ACl));this.Wj.T(A.aaR(
A.acf.AdQ));this.Ub.T(A.aaR(A.acf.A5_));},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T$
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ub)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AO3={_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AO3;this.
Text.R(A.aaR(A.acf.ACn));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ACn));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.Aq2={QQ:null,Wa:null,_Init:function(aArg){C.TS._Init.call(this,aArg);C.CH._Init.
call(this.QQ={I:this},0);C.CH._Init.call(this.Wa={I:this},0);this.__proto__=C.Aq2;
this.QQ.H(BsX);this.QQ.R(A.aaR(A.acf.A_3));this.QQ.A6(0x12);this.QQ.L(A.jb.Text);
this.Wa.H(A$_);this.Wa.R(A.aaR(A.acf.An5));this.Wa.L(A.jb.Text);this.J(this.QQ,0
);this.J(this.Wa,0);this.QQ.S(A.aaL(A.fl.Af));this.QQ.A2(A.aaL(A.fl.Ak));this.QQ.
Cu(A.aaL(A.fl.Bi));this.Wa.S(A.aaL(A.fl.Af));this.Wa.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TS;this.QQ._Done();this.Wa._Done();C.TS._Done.call(this
);},_ReInit:function(){C.TS._ReInit.call(this);this.QQ._ReInit();this.Wa._ReInit(
);this.QQ.R(A.aaR(A.acf.A_3));this.Wa.R(A.aaR(A.acf.An5));this.QQ.S(A.aaL(A.fl.Af
));this.QQ.A2(A.aaL(A.fl.Ak));this.QQ.Cu(A.aaL(A.fl.Bi));this.Wa.S(A.aaL(A.fl.Af
));this.Wa.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TS._Mark.call(this,D);
if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wa)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.APz={QR:
null,_Init:function(aArg){C.TS._Init.call(this,aArg);C.CH._Init.call(this.QR={I:
this},0);this.__proto__=C.APz;this.QR.H(BsY);this.QR.R(A.aaR(A.acf.Ud));this.QR.
A6(0x12);this.QR.L(A.jb.Text);this.J(this.QR,0);this.QR.S(A.aaL(A.fl.Af));this.QR.
A2(A.aaL(A.fl.Ak));this.QR.Cu(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=
C.TS;this.QR._Done();C.TS._Done.call(this);},_ReInit:function(){C.TS._ReInit.call(
this);this.QR._ReInit();this.QR.R(A.aaR(A.acf.Ud));this.QR.S(A.aaL(A.fl.Af));this.
QR.A2(A.aaL(A.fl.Ak));this.QR.Cu(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.TS.
_Mark.call(this,D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Aqv={IH:null,AbA:null,Ea:null,Bk:function(aSize){C.M0.Bk.call(this,aSize);this.
IH.H([this.Gv.M[2],0,this.Gv.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([
this.IH.M[2]-1,0,this.IH.M[2]+1,aSize[1]]);this.AbA.H([this.IH.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M0.Ai.call(this,Ae);this.AbA.L(this.Gv.AQ);this.IH.L(this.
Gv.AQ);},Cf:function(Ad){C.M0.Cf.call(this,Ad);if(!this.AX)return;this.Hn=Ad;if(
!!this.AX){var H$=this.AX.AmR(Ad,14);var AtN=this.AX.AOM(Ad,7);this.IH.Aw(A._GetAutoObject(
A.Device.Converter).AmQ(AtN));this.AbA.Aw(A._GetAutoObject(A.Device.Converter).A4N(
H$));this.An();}},_Init:function(aArg){C.M0._Init.call(this,aArg);A.acg.Ap._Init.
call(this.IH={I:this},0);A.acg.Ap._Init.call(this.AbA={I:this},0);A.acg.AK._Init.
call(this.Ea={I:this},0);this.__proto__=C.Aqv;this.IH.H(Baa);this.IH.L(A.jb.Text
);this.AbA.H(BsZ);this.AbA.L(A.jb.Text);this.Ea.H(Bs0);this.Ea.L(A.jb.Bc);this.J(
this.IH,0);this.J(this.AbA,0);this.J(this.Ea,0);this.IH.Aw(A.aaL(A.aci.TJ));this.
AbA.Aw(A.aaL(A.aci.TJ));},_Done:function(){this.__proto__=C.M0;this.IH._Done();this.
AbA._Done();this.Ea._Done();C.M0._Done.call(this);},_ReInit:function(){C.M0._ReInit.
call(this);this.IH._ReInit();this.AbA._ReInit();this.Ea._ReInit();},_Mark:function(
D){var B;C.M0._Mark.call(this,D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AM7={ZP:null
,Bk:function(aSize){C.M0.Bk.call(this,aSize);this.ZP.H([this.Gv.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M0.Ai.call(this,Ae);this.ZP.L(this.Gv.AQ);},Cf:function(
Ad){C.M0.Cf.call(this,Ad);if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var J$=this.
AX.KM(Ad,26);if(J$>0)this.ZP.R(A.ab2(J$.toFixed(),5));else this.ZP.R(Rm);this.An(
);}},_Init:function(aArg){C.M0._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZP={I:this},0);this.__proto__=C.AM7;this.ZP.H(Bs1);this.J(this.ZP,0);this.ZP.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M0;this.ZP._Done();C.M0._Done.
call(this);},_ReInit:function(){C.M0._ReInit.call(this);this.ZP._ReInit();this.ZP.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M0._Mark.call(this,D);if((B=this.ZP
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARL={Ap:null,Ai:function(Ae){C.AeP.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeP._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ARL;this.Text.H(Bs2);this.Ap.H(AZQ);this.J(this.Ap,0
);this.Ap.Aw(A.aaL(A.ach.Ae$));},_Done:function(){this.__proto__=C.AeP;this.Ap._Done(
);C.AeP._Done.call(this);},_ReInit:function(){C.AeP._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeP._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yt={Text:
null,Dd:null,AP:null,Gr:null,D2:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.Nl],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AIL],0);A.zV([this,this.Nl
],A._GetAutoObject(A.Device.Device).Am,0);A.pe([this,this.Nl],this);},De:function(
E){C.BR.De.call(this,E);this.Dd.L(E);this.Text.L(E);this.Gr.L(E);this.D2.Zt(E);}
,Wx:function(E){C.BR.Wx.call(this,E);this.D2.CT(E);},DY:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).Am.Ca().toFixed());},Nl:function(s){this.DY(s);}
,_Init:function(aArg){C.BR._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gr={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C5._Init.call(this.A_={I:this},0);this.__proto__=C.Yt;this.Text.H(Bs3);this.
Text.A6(0x11);this.Dd.H(Ayr);this.AP.DC(A$6);this.AP.DM(A$7);this.AP.L(A.jb.Bc);
this.Gr.H(Bs4);this.Gr.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(Bs5);this.D2.Zt(A.jb.
Bm);this.D2.CT(A.jb.Re);this.D2.Hh(2);this.A_.DC(Bs6);this.A_.DM(Bs7);this.A_.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Dd,0);this.J(this.AP,0);this.J(this.Gr,
0);this.J(this.D2,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Dd.Aw(A.aaL(A.ach.AjV));this.Gr.Aw(A.aaL(A.ach.Gr));this.D2.
S(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Text.
_Done();this.Dd._Done();this.AP._Done();this.Gr._Done();this.D2._Done();this.A_.
_Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.
Text._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Gr._ReInit();this.D2._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Aco={FF:null
,JS:null,JR:null,AkM:null,AkN:null,Q3:null,QB:null,Abz:null,VZ:null,PF:null,PG:null
,Su:null,Gs:null,Gt:null,Js:null,AlK:0,AlP:0,D7:0,DX:0,A8:0,Bk:function(aSize){var
B;this.Dy.H([this.Ht.M[2]-10,this.Ht.M[1],this.H2.M[0]+10,this.Ht.M[3]]);this.Dy.
AFe((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.Dy.Gp,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fr=((Ae&0x20)===0x20);var GA=this.Bo.Bw;if(!!this.
Q)this.GE(this);if((this.A8===1)||(this.A8===2)){var A02=this.A10(this.A8);if(!!
A02){this.Abz.Z(true);this.Abz.H(A02.M);this.Abz.L(this.V.AQ);this.VZ.Z(true);this.
VZ.H(A02.M);}else{this.Abz.Z(false);this.VZ.Z(false);}this.Ht.Z(false);this.H2.Z(
false);}else{this.Abz.Z(false);this.VZ.Z(false);this.Ht.Z(Fr||GA);this.H2.Z(Fr||
GA);}},Qn:function(G){if(!!this.Q){if(this.FC===1)A.pe([this,this.U9],this);else
if(this.FC===4)A.pe([this,this.A0k],this);else if(this.FC===5)A.pe([this,this.A0i
],this);}C.BW.Qn.call(this,G);},J_:function(G){switch(this.A8){case 0:C.BW.J_.call(
this,G);break;case 2:break;default:this.Ads(this);}},J5:function(G){switch(this.
A8){case 0:C.BW.J5.call(this,G);break;default:this.Ain(this);}},A1w:function(G){
var F;if(this.A8===1){var BQ=this.D7;this.D7=this.D7-10;if(this.D7<this.AlP)this.
D7=this.AlP;if(this.D7<A._GetAutoObject(A.Device.Device).AcF)this.D7=A._GetAutoObject(
A.Device.Device).AcF;if(this.DX!==BQ){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.
D7));A.abo(this.JS,0);}}if(this.A8===2){var BQ=this.DX;this.DX=this.DX-10;if(this.
DX<this.D7)this.DX=this.D7;if(this.DX!==BQ){if(!!this.JR)(F=this.JR,F[2].call(F[
0],this.DX));A.abo(this.JR,0);}}this.DJ(this);this.An();},A0i:function(s){this.A1w(
s);},Al0:function(G){this.FC=5;this.An();if(this.Bo.Bw){A.pe([this,this.A0i],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A17:function(G){var F;if(this.A8===1){var
BQ=this.D7;this.D7=this.D7+10;if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BQ
){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.D7));A.abo(this.JS,0);}}if(this.A8===
2){var BQ=this.DX;this.DX=this.DX+10;if(this.DX>this.AlK)this.DX=this.AlK;if(this.
DX!==BQ){if(!!this.JR)(F=this.JR,F[2].call(F[0],this.DX));A.abo(this.JR,0);}}this.
DJ(this);this.An();},A0k:function(s){this.A17(s);},Al1:function(G){this.FC=4;this.
An();if(this.Bo.Bw){A.pe([this,this.A0k],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},U9:function(G){this.Ex(this.A8+1);},Ads:function(G){this.FC=1;this.An(
);if(this.Bo.Bw){A.pe([this,this.U9],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GE:function(G){},AfC:function(s){this.GE(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CC=[this,this.G_];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(
F[0])).Cl=null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aew));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cm=[this,this.U9];}break;case 2:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.
N,F[1].call(F[0])).CC=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.AmX
));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.
Ain];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cm=null;}break;default:this.FF.AkP((F=this.N,F[1].call(F[
0])));}},A9Z:function(E){if(A.aaZ(this.JS,E))return;if(!!this.JS)A.z$([this,this.
A3s],this.JS,0);this.JS=E;if(!!this.JS)A.zX([this,this.A3s],this.JS,0);A.pe([this
,this.A3s],this);},A3s:function(G){var F;this.D7=(F=this.JS,F[1].call(F[0]));this.
An();},A9Y:function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([this,this.A3r
],this.JR,0);this.JR=E;if(!!this.JR)A.zX([this,this.A3r],this.JR,0);A.pe([this,this.
A3r],this);},A3r:function(G){var F;this.DX=(F=this.JR,F[1].call(F[0]));this.An();
},FQ:function(G){this.Ex(1);},G_:function(G){this.Ex(0);},Ex:function(EO){var F;
if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(F[0])));this.A8=EO;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DJ(this);this.Gt.Bw=!!this.A8;this.Gs.Bw=!!this.A8;this.
An();},Ain:function(G){if(this.A8>1)this.Ex(this.A8-1);},A3E:function(G){},AyM:function(
s){this.A3E(s);},A3e:function(G){},Bbh:function(s){this.A3e(s);},A10:function(Atn
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AK._Init.call(
this.AkM={I:this},0);A.acg.AK._Init.call(this.AkN={I:this},0);A.acg.AK._Init.call(
this.Q3={I:this},0);A.acg.Ap._Init.call(this.QB={I:this},0);A.acg.AK._Init.call(
this.Abz={I:this},0);A.acg.BU._Init.call(this.VZ={I:this},0);A.acg.Text._Init.call(
this.PF={I:this},0);A.acg.Text._Init.call(this.PG={I:this},0);A.acg.Text._Init.call(
this.Su={I:this},0);A.Core.BM._Init.call(this.Gs={I:this},0);A.Core.BM._Init.call(
this.Gt={I:this},0);A.Core.BM._Init.call(this.Js={I:this},0);this.__proto__=C.Aco;
this.H(Afz);this.T(A.aaR(A.acf.Arp));this.Background.H(Afz);this.V.H(BF);this.V.
R(A.aaR(A.acf.AGU));this.V.A6(0x12);this.AkM.H(Bs8);this.AkM.L(A.jb.Gg);this.AkN.
H(Bs9);this.AkN.L(A.jb.H6);this.Q3.H(Bs_);this.Q3.L(A.jb.E1);this.QB.H(Bs$);this.
Abz.H(Bta);this.VZ.H(Btb);this.VZ.Nf(3);this.VZ.L(A.jb.AV);this.VZ.Z(false);this.
PF.H(Btc);this.PF.Hh(8);this.PF.I7(true);this.PF.A6(0x11);this.PF.L(0xFF000000);
this.PG.H(Btd);this.PG.Hh(8);this.PG.I7(true);this.PG.A6(0x11);this.PG.L(0xFF000000
);this.Su.H(Bte);this.Su.I7(false);this.Su.A6(0x12);this.Su.L(0xFF000000);this.Gs.
Filter=5;this.Gs.Bw=false;this.Gt.Filter=4;this.Gt.Bw=false;this.Js.Filter=1;this.
JU(this.V,-1);this.JU(this.Dy,-2);this.J(this.AkM,-1);this.J(this.AkN,-1);this.J(
this.Q3,-1);this.J(this.QB,-1);this.J(this.Abz,-1);this.J(this.VZ,-1);this.J(this.
PF,-1);this.J(this.PG,0);this.J(this.Su,0);this.QB.Aw(A.aaL(A.ach.ADt));this.PF.
S(A.aaL(A.fl.Af));this.PG.S(A.aaL(A.fl.Af));this.Su.S(A.aaL(A.fl.Ak));this.Gs.BN=[
this,this.Al0];this.Gs.D1=[this,this.A0i];this.Gt.BN=[this,this.Al1];this.Gt.D1=[
this,this.A0k];this.Js.BN=[this,this.Ads];this.FF=A._NewObject(C.Aep,0);},_Done:
function(){this.__proto__=C.BW;this.AkM._Done();this.AkN._Done();this.Q3._Done();
this.QB._Done();this.Abz._Done();this.VZ._Done();this.PF._Done();this.PG._Done();
this.Su._Done();this.Gs._Done();this.Gt._Done();this.Js._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkM._ReInit();this.AkN._ReInit(
);this.Q3._ReInit();this.QB._ReInit();this.Abz._ReInit();this.VZ._ReInit();this.
PF._ReInit();this.PG._ReInit();this.Su._ReInit();this.Gs._ReInit();this.Gt._ReInit(
);this.Js._ReInit();this.T(A.aaR(A.acf.Arp));this.V.R(A.aaR(A.acf.AGU));this.PF.
S(A.aaL(A.fl.Af));this.PG.S(A.aaL(A.fl.Af));this.Su.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JR)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FE={XW:null,Acq:
null,An9:0,An_:0,Dn:function(){if(!this.XW)return 0;return this.XW.MB;},C4:function(
aIndex){if(!this.XW||(aIndex>=this.XW.MB))return-1;return this.XW.Get(aIndex);},
FY:function(aIndex){return this.A6q().BH(this.C4(aIndex));},DU:function(A7){if(!
this.XW)return-1;return this.XW.Avl(A7);},HH:function(){if(!this.XW)return-1;return this.
XW.HH();},AnG:function(E){if(this.An9===E)return;this.An9=E;A.pe([this,this.AVt]
,this);},A0e:function(Aq){this.AnG(Aq);},AnH:function(E){if(this.An_===E)return;
this.An_=E;A.pe([this,this.AVu],this);},A0f:function(Aq){this.AnH(Aq);},AVu:function(
G){A.abo([this,this.ASM,this.A0f],0);},AVt:function(G){A.abo([this,this.ASL,this.
A0e],0);},A6q:function(){return this.Acq;},ASL:function(){return this.An9;},ASM:
function(){return this.An_;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acq={I:this},0);this.__proto__=C.FE;},_Done:function(
){this.__proto__=C.AC;this.Acq._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acq._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acq)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMB={Init:
function(aArg){A.zV([this,this.BeL],A._GetAutoObject(A.Device.Helper).UD,0);A.zV([
this,this.BeJ],A._GetAutoObject(A.Device.Helper).UC,0);this.BeL(this);this.BeJ(this
);},As:function(E){C.FE.As.call(this,E);this.AnH(A._GetAutoObject(A.Device.Helper
).UD.Get(this.DU(E)));this.AnG(A._GetAutoObject(A.Device.Helper).UC.Get(this.DU(
E)));},AnG:function(E){if(this.An9===E)return;C.FE.AnG.call(this,E);A._GetAutoObject(
A.Device.Helper).UC.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).UC.
Ch();},AnH:function(E){if(this.An_===E)return;C.FE.AnH.call(this,E);A._GetAutoObject(
A.Device.Helper).UD.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).UD.
Ch();},BeL:function(G){this.An_=A._GetAutoObject(A.Device.Helper).UD.Get(this.DU(
this.Q));A.pe([this,this.AVu],this);},BeJ:function(G){this.An9=A._GetAutoObject(
A.Device.Helper).UC.Get(this.DU(this.Q));A.pe([this,this.AVt],this);},_Init:function(
aArg){C.FE._Init.call(this,aArg);this.__proto__=C.AMB;this.XW=A._GetAutoObject(A.
Device.Helper).AdW;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMC={Agx:null,ABP:0,ABO:0,Init:function(aArg){A.zV([this,this.BeY],A._GetAutoObject(
A.Device.Helper).Aft,0);A.zV([this,this.BeW],A._GetAutoObject(A.Device.Helper).Afs
,0);A.zV([this,this.BeU],A._GetAutoObject(A.Device.Helper).Afr,0);A.zV([this,this.
Be0],A._GetAutoObject(A.Device.Helper).Afu,0);this.BeY(this);this.BeW(this);this.
BeU(this);this.Be0(this);},As:function(E){C.FE.As.call(this,E);this.AnH(A._GetAutoObject(
A.Device.Helper).Aft.Get(this.DU(E)));this.AnG(A._GetAutoObject(A.Device.Helper).
Afs.Get(this.DU(E)));this.ASQ(A._GetAutoObject(A.Device.Helper).Afr.Get(this.DU(
E)));this.ASS(A._GetAutoObject(A.Device.Helper).Afu.Get(this.DU(E)));},AnG:function(
E){if(this.An9===E)return;C.FE.AnG.call(this,E);A._GetAutoObject(A.Device.Helper
).Afs.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afs.Ch();},AnH:function(
E){if(this.An_===E)return;C.FE.AnH.call(this,E);A._GetAutoObject(A.Device.Helper
).Aft.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Aft.Ch();},A6q:function(
){return this.Agx;},BeY:function(G){this.An_=A._GetAutoObject(A.Device.Helper).Aft.
Get(this.DU(this.Q));A.pe([this,this.AVu],this);},BeW:function(G){this.An9=A._GetAutoObject(
A.Device.Helper).Afs.Get(this.DU(this.Q));A.pe([this,this.AVt],this);},ASS:function(
E){if(this.ABP===E)return;this.ABP=E;A._GetAutoObject(A.Device.Helper).Afu.Set(this.
DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afu.Ch();A.pe([this,this.A$x],this
);},ASQ:function(E){if(this.ABO===E)return;this.ABO=E;A._GetAutoObject(A.Device.
Helper).Afr.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afr.Ch();A.
pe([this,this.A$w],this);},A$w:function(G){A.abo([this,this.A8b,this.ASQ],0);},A$x:
function(G){A.abo([this,this.A8c,this.ASS],0);},BeU:function(G){this.ABO=A._GetAutoObject(
A.Device.Helper).Afr.Get(this.DU(this.Q));A.pe([this,this.A$w],this);},Be0:function(
G){this.ABP=A._GetAutoObject(A.Device.Helper).Afu.Get(this.DU(this.Q));A.pe([this
,this.A$x],this);},A8c:function(){return this.ABP;},A8b:function(){return this.ABO;
},_Init:function(aArg){C.FE._Init.call(this,aArg);A.Device.Agx._Init.call(this.Agx={
I:this},0);this.__proto__=C.AMC;this.XW=A._GetAutoObject(A.Device.Helper).Agy;this.
Init(aArg);},_Done:function(){this.__proto__=C.FE;this.Agx._Done();C.FE._Done.call(
this);},_ReInit:function(){C.FE._ReInit.call(this);this.Agx._ReInit();},_Mark:function(
D){var B;C.FE._Mark.call(this,D);if((B=this.Agx)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMi={RK:null,Init:function(
aArg){var B;A.zX([this,this.AiL],[B=this.AnimalType,B.B8,B.B9],0);A.pe([this,this.
AiL],this);this.Bb(this.RK);},Bl:function(E){C.I0.Bl.call(this,E);this.RK.By(this.
Jn.AM);},AiL:function(G){A._GetAutoObject(A.Device.Device).Awz(this.AnimalType.Q
);},_Init:function(aArg){C.I0._Init.call(this,aArg);C.TD._Init.call(this.RK={I:this
},0);this.__proto__=C.AMi;var B;this.Jn.Ar(false);this.Jn.Aj(false);this.Jn.Z(false
);this.RK.H(AIH);this.RK.Aj(true);this.RK.Nb(14);this.RK.Ahn(0);this.RK.OM(0);this.
J(this.RK,-4);this.RK.AR=[this,this.AAn];this.RK.As([B=this.AnimalType,B.B8,B.B9
]);this.RK.CI(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I0;this.RK._Done();C.I0._Done.call(this);},_ReInit:function(){C.I0._ReInit.call(
this);this.RK._ReInit();},_Mark:function(D){var B;C.I0._Mark.call(this,D);if((B=
this.RK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TD={Filter:null,Ep:0,TableId:0,Operator:1,CP:function(){var F;this.To((F=this.
Filter,F[1].call(F[0])).DL(this.Ep,this.Operator));},Bk:function(aSize){var B;C.
BW.Bk.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Ht.H(AhQ
);this.H2.H([aSize[0]-40,40,aSize[0],80]);this.Dy.H([this.Ht.M[2]-5,this.Ht.M[1]
,this.H2.M[0]+5,this.Ht.M[3]]);this.Dy.AFe((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.
Dy.Gp,true,null,null);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$
],E,0);A.pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.To((F=this.Filter,F[1].call(F[0])).DL(this.Ep,this.
Operator));else this.To(null);},Ahn:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.L$],this);},Nb:function(E){if(this.Ep===E)return;this.
Ep=E;A.pe([this,this.L$],this);},To:function(AH){this.T(A._GetAutoObject(A.Device.
Helper).AmS(this.TableId,this.Ep));this.An();},OM:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.L$],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TD;this.H(JZ);this.V.A6(0x11);this.V.Cu(A.aaL(A.
fl.Bi));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Cu(A.aaL(A.fl.Bi));this.
CP();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ARU={Gc:null,MO:null,DZ:null,Y:null,Ef:null,Co:null,CG:null,C$:null,Gj:null,
Ee:null,C9:null,BZ:null,Ay:null,Breed:null,Jd:null,AnimalType:null,Gender:null,Pj:
null,KX:null,Jb:null,YH:null,Amf:null,KH:0,M1:0,A3M:false,Init:function(aArg){var
B;A.zX([this,this.BAb],[B=A._GetAutoObject(A.Device.Device),B.AEw,B.AIP],0);A.zV([
this,this.AtZ],this.MO,0);A.zX([this,this.AtZ],[B=A._GetAutoObject(A.Device.Device
),B.Awg,B.AyH],0);A.zX([this,this.GE],[B=A._GetAutoObject(A.Device.Device),B.AEw
,B.AIP],0);A.zV([this,this.GE],this.MO,0);A.zX([this,this.AiL],this.BZ.Q,0);A.pe([
this,this.AiL],this);A.pe([this,this.Bem],this);A.pe([this,this.AtZ],this);A.pe([
this,this.GE],this);A.pe([this,this.A3f],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALn],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArL(A.jb.E1);else
this.Ef.ArL(A.jb.Gg);if(A._GetAutoObject(A.Device.Device).AeJ){if(!!(F=this.Co.Dj
,F[1].call(F[0])))this.Co.ArL(A.jb.E1);else this.Co.ArL(A.jb.Gg);}else this.Co.ArL(
A.jb.Re);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},LN:function(
G){if(A._GetAutoObject(A.Device.Device).Am.Lf())A._GetAutoObject(A.Device.Device
).A9(41,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gn();A._GetAutoObject(A.Device.Helper).Aqj(A._GetAutoObject(A.
Device.Helper).W);this.ApB();},CF:function(G){C.AB.CF.call(this,G);A._GetAutoObject(
A.Device.Device).AFl(0);},E3:function(G){C.AB.E3.call(this,G);this.Jb.Ar(false);
A._GetAutoObject(A.Device.Device).Un(false);},Ew:function(G){A._GetAutoObject(A.
Device.Helper).W.Hi();A._GetAutoObject(C.A$).Fv();},Fg:function(G){var B;this.Ay.
Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.
Y.Br[1]);},AtZ:function(G){var F,CA;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALn(this);this.An();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).Am.Aeh(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter
).Rf((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A26]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A25],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeJ)this.JD(this.Co);}var BdB=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeJ||!!(CA=this.Co.Dj,CA[1].call(CA[0])));if(this.MO.AOH()>0){if((
this.AV===this.Co)&&BdB)this.Bb(this.Y.TL(this.Co,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeJ&&(this.AV===this.Co))&&!!(F=this.Co.Dj,F[1].call(F[0])))this.
JD(this.Ef);if(BdB)this.Bco(this);},XC:function(G){A._GetAutoObject(A.Device.Device
).Ds(13);},AiZ:function(){var F;this.Gc.Ch(A._GetAutoObject(A.Device.Device).Am);
if(this.MO.NU(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lf())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);else{var L6=A._GetAutoObject(A.Device.Device).Am.LS(0,this.Gc.Id);A._GetAutoObject(
A.Device.Device).SL(L6);var B1=A._NewObject(A.Device.Rating,0);B1.Gn();B1.OnSetAnimalId(
this.Gc.Id);B1.OnSetBodyWeight(this.KH);B1.OnSetTimestamp(this.Gc.DateOfBirth);B1.
Ch(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MO.NU(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lf())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var L6=A._GetAutoObject(A.Device.
Device).Am.LS(0,this.Gc.Id);A._GetAutoObject(A.Device.Device).SL(L6);var B1=A._NewObject(
A.Device.Rating,0);B1.Gn();B1.OnSetAnimalId(this.Gc.Id);B1.OnSetBodyWeight(this.
M1);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Ch(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WC(65280);this.Jb.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFl(F.AvS+1));this.A3M=true;A.pe([this,
this.ALn],this);this.ApB();},GE:function(G){this.Co.ATq(A._GetAutoObject(A.Device.
Device).AeJ);A._GetAutoObject(A.Device.Helper).JV(this.BZ,this.MO.NU(14));A._GetAutoObject(
A.Device.Helper).JV(this.C9,this.MO.NU(23));A._GetAutoObject(A.Device.Helper).JV(
this.CG,this.MO.NU(32));A._GetAutoObject(A.Device.Helper).JV(this.Ee,this.MO.NU(
18));A._GetAutoObject(A.Device.Helper).JV(this.C$,this.MO.NU(7));A._GetAutoObject(
A.Device.Helper).JV(this.Gj,this.MO.NU(34));this.YH.Z(!this.MO.AOH());var O;var Aa=
null;var Api=this.AV;for(O=0;O<this.MO.AfL.NP();O++){Aa=this.By8(this.MO.AfL.OC(
O));if(!!Aa)this.ZE(Aa);}this.JD(Api);A._GetAutoObject(A.Device.Helper).ANs(this.
Y);A.pe([this,this.A3f],this);this.An();},AeT:function(E){if(this.KH===E)return;
this.KH=E;A.abo([this,this.Av4,this.AeT],0);},Ahi:function(E){if(this.M1===E)return;
this.M1=E;A.abo([this,this.Ann,this.Ahi],0);},Bco:function(G){this.Gc.Gn();A._GetAutoObject(
A.Device.Helper).Aqj(this.Gc);this.Gc.Q1(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gc.Nc(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gc.SC(A._GetAutoObject(
A.Device.Helper).AMj(0,this.Gc));this.Gc.Ae1(true);if(this.MO.NU(14))this.Gc.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MO.NU(32))this.Gc.NY(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MO.NU(7))this.Gc.JP(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MO.NU(34))this.Gc.Ne(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alp=A._GetAutoObject(A.Device.Helper).A1j(this.Gc,0,A._GetAutoObject(
A.Device.Device).Am);if(!Alp)this.AiZ();else A._GetAutoObject(A.Device.Helper).AKi(
this.Gc,Alp,0,0,[this,this.ApH]);},ApB:function(){A._GetAutoObject(A.Device.Helper
).W.Nc(0);if(A._GetAutoObject(A.Device.Device).AeJ)A._GetAutoObject(A.Device.Helper
).W.Q1(0);this.AeT(0);this.Ahi(0);this.JD(this.Ef);this.An();},ApH:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case
22:case 21:case 48:this.ApB();break;case 43:this.JD(this.Ef);break;case 41:break;
default:A.ab5("%s%e",As6,At.Id);}},JD:function(Ag){this.Bb(Ag);this.Y.HD(Ag,true
,null,null);this.Y.Vu(null,null);},Bem:function(G){this.Ee.Ahl(A._GetAutoObject(
A.Device.Helper).W.AhO(1));this.AtZ(this);},AiL:function(G){this.C9.Ahl(A._GetAutoObject(
A.Device.Helper).Abp(this.AnimalType.Q));},A3f:function(G){var B;var BBg=this.Ay.
Background.Fl();var width=(BBg?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xr=this.Y.TL(null,0x401);while(!!Xr&&(((B=Xr)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OU.isPrototypeOf(Xr)?Xr:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xr=this.Y.TL(Xr,0x1);}},By8:function(Aai){var Aa=null;switch(Aai){case 14:Aa=
this.BZ;break;case 32:Aa=this.CG;break;case 23:Aa=this.C9;break;case 7:Aa=this.C$;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gj;break;default:A.ab5("%s%e",Btf
,Aai);}return Aa;},BAb:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeJ
)A._GetAutoObject(A.Device.Helper).W.Q1(0);else if(!(F=this.Co.Dj,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q1(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmE(A._GetAutoObject(A.Device.Device).AdO));this.
AtZ(this);},ALn:function(G){var B;var AKm=A.jV;var Ay5=A.jb.CK;var BcF=A.jb.AV;this.
Amf.AxB(this);if(this.A3M){this.A3M=false;AKm=A._GetAutoObject(A.Device.Helper).
Nj(A.aaR(A.acf.BoV),P7,A._GetAutoObject(A.Device.Converter).Rf(this.Gc.NaisId));
A.pe([B=this.Amf,B.StartTimer],this);Ay5=A.jb.E1;BcF=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKm=A.aaR(A.acf.Boa);else if((
this.AV===this.Co)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKm=A.aaR(A.
acf.Bn$);this.YH.T(AKm);this.YH.Blr(Ay5);this.YH.Bls(BcF);},A26:function(G){var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At){if(At.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajz();else if(At.Id===105){if(At.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajz();else if(At.PopupState===7){A._GetAutoObject(C.A$).Cg(76);
A._GetAutoObject(A.Device.Device).Ajz();}}}else A._GetAutoObject(A.Device.Device
).Ajz();},A25:function(G){A._GetAutoObject(A.Device.Device).AuM();},DJ:function(
G){var B;if(!this.MO.AOH()){this.N.Lc.Dr(255);if(this.AV===this.Ef){this.N.C6(A.
aaL(A.ach.Edit));this.N.Cm=[B=this.Ef,B.FQ];}else if(this.AV===this.Co){this.N.C6(
A.aaL(A.ach.Edit));this.N.Cm=[B=this.Co,B.FQ];}else{this.N.C6(null);this.N.Cm=null;
}}else{this.N.C6(A.aaL(A.ach.AmZ));if((this.Ef.Aqw===A.jb.Gg)||(this.Co.Aqw===A.
jb.Gg)){this.N.Lc.Dr(100);this.N.Cm=null;}else{this.N.Lc.Dr(255);this.N.Cm=[this
,this.Bco];}}},Av4:function(){return this.KH;},Ann:function(){return this.M1;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUA._Init.call(this.Ef={I:this},0);C.
AUw._Init.call(this.Co={I:this},0);C.Axr._Init.call(this.CG={I:this},0);C.BW._Init.
call(this.C$={I:this},0);C.Asy._Init.call(this.Gj={I:this},0);C.AkT._Init.call(this.
Ee={I:this},0);C.AkT._Init.call(this.C9={I:this},0);C.BW._Init.call(this.BZ={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UN._Init.call(this.Jd={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.MZ._Init.call(this.
Pj={I:this},0);A.Device.KX._Init.call(this.KX={I:this},0);A.Device.TE._Init.call(
this.Jb={I:this},0);C.AU6._Init.call(this.YH={I:this},0);A.Core.Timer._Init.call(
this.Amf={I:this},0);this.__proto__=C.ARU;var B;this.Background.L(A.jb.CS);this.
N.Z(true);this.Ej.Ar(false);this.Dq(C.APn);this.DZ.AZ(0x3F);this.DZ.H(Fb);this.DZ.
L(A.jb.CK);this.Y.H(Fb);this.Y.JO(9);this.Ef.H(AIH);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACx));this.Ef.ATq(true);this.Ef.AFE(false);this.Co.H(Bae);this.Co.Aj(true
);this.Co.T(A.aaR(A.acf.Aeb));this.Co.ATq(true);this.Co.AFy(true);this.CG.H(As5);
this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.C$.H(As5);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afj));this.Gj.H(Baf);this.Gj.Aj(true);this.Gj.T(A.aaR(A.acf.Jd)
);this.Ee.H(Btg);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M1));this.Ee.F_(1000);this.
Ee.EV(999000);this.Ee.Ahl(A._GetAutoObject(A.Device.Helper).Abp(this.AnimalType.
Q));this.C9.H(Baf);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KH));this.C9.F_(1000);
this.C9.EV(99000);this.C9.Ahl(A._GetAutoObject(A.Device.Helper).Abp(this.AnimalType.
Q));this.BZ.H(As4);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afo));this.Ay.H(Iq);this.
Jb.B2=false;this.Jb.Cw=true;this.Jb.HM(1);this.Jb.Fm(1000);this.Jb.Uk(0);this.YH.
H(Aaf);this.YH.Aj(true);this.YH.ArL(A.jb.Text);this.Amf.PO(3000);this.J(this.DZ,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Co,0);this.J(this.CG,0);this.J(
this.C$,0);this.J(this.Gj,0);this.J(this.Ee,0);this.J(this.C9,0);this.J(this.BZ,
0);this.J(this.Ay,0);this.J(this.YH,0);this.N.CC=[this,this.Ew];this.N.Cl=[this,
this.XC];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbB));this.Y.El=[this,
this.Fg];this.Ef.Go([this,this.D_,this.GN]);this.Ef.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Anq,B.Nc]);this.Ef.AE$([this,this.AtZ]);this.Ef.ATd([this,this.A25]);
this.Ef.ATe([this,this.A26]);this.Co.Go([this,this.D_,this.GN]);this.Co.Ab7([B=A.
_GetAutoObject(A.Device.Helper).W,B.Av7,B.Q1]);this.Co.OE=[this,this.Bem];this.Co.
ATd([this,this.A25]);this.Co.ATe([this,this.A26]);this.CG.Go([this,this.D_,this.
GN]);this.CG.LX([B=this.CG,B.FQ]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.As([B=this.
Breed,B.B8,B.B9]);this.CG.CI(this.Breed);this.CG.Anv(this.Pj);this.C$.As([B=this.
Gender,B.B8,B.B9]);this.C$.CI(this.Gender);this.Gj.Go([this,this.D_,this.GN]);this.
Gj.LX([B=this.Gj,B.FQ]);this.Gj.L0(A.aaL(A.ach.Edit));this.Gj.As([B=this.Jd,B.B8
,B.B9]);this.Gj.CI(this.Jd);this.Gj.Anv(this.KX);this.Ee.As([this,this.Ann,this.
Ahi]);this.C9.As([this,this.Av4,this.AeT]);this.BZ.As([B=this.AnimalType,B.B8,B.
B9]);this.BZ.CI(this.AnimalType);this.Ay.BmO([this,this.A3f]);this.Breed.LY(A._GetAutoObject(
A.Device.Helper).W);this.Jd.LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LY(A._GetAutoObject(A.Device.Helper).W);this.Gender.LY(A._GetAutoObject(A.Device.
Helper).W);this.Gc=A._NewObject(A.Device.Animal,0);this.MO=A._GetAutoObject(C.Amn
);this.Jb.Q=[B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0a];this.Amf.Mx=[this,
this.ALn];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();
this.Y._Done();this.Ef._Done();this.Co._Done();this.CG._Done();this.C$._Done();this.
Gj._Done();this.Ee._Done();this.C9._Done();this.BZ._Done();this.Ay._Done();this.
Breed._Done();this.Jd._Done();this.AnimalType._Done();this.Gender._Done();this.Pj.
_Done();this.KX._Done();this.Jb._Done();this.YH._Done();this.Amf._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Co._ReInit();this.CG._ReInit();this.C$._ReInit(
);this.Gj._ReInit();this.Ee._ReInit();this.C9._ReInit();this.BZ._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jd._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pj._ReInit();this.KX._ReInit();this.Jb._ReInit();this.YH._ReInit(
);this.Amf._ReInit();this.Ef.T(A.aaR(A.acf.ACx));this.Co.T(A.aaR(A.acf.Aeb));this.
CG.T(A.aaR(A.acf.Breed));this.C$.T(A.aaR(A.acf.Afj));this.Gj.T(A.aaR(A.acf.Jd));
this.Ee.T(A.aaR(A.acf.M1));this.C9.T(A.aaR(A.acf.KH));this.BZ.T(A.aaR(A.acf.Afo)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gc)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amf)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Asx={Zk:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zk={
I:this},0);this.__proto__=C.Asx;this.N.CV(A.acf.BhX);this.Number.H(Bth);this.Jc.
H(Bti);this.IP.H(Btj);this.AkF(2);this.Bcl=false;this.Bdq=true;this.Bdr=false;this.
Zk.H(Btk);this.Zk.KR(true);this.Zk.R(A.aaR(A.acf.A__));this.Zk.L(A.jb.Text);this.
J(this.Zk,0);this.N.CC=null;this.N.Cm=[this,this.AIV];this.N.CY(null);this.Zk.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Zk.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zk._ReInit();this.Zk.R(A.aaR(A.acf.A__));this.Zk.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADK={Ct:null,FI:function(E){if(this.M3===E)return;C.HI.FI.call(this,E);this.
Ct.CT(E);},Yr:function(Hw){var B6=null;switch(Hw){case-1:case 0:B6=this.FX;break;
case 1:B6=this.Ct;break;case 2:B6=this.GX;break;default:A.ab5("%s",AhX);}return B6;
},_Init:function(aArg){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADK;this.H(Btl);this.Ct.H(A$T);this.FX.H(Btm);this.J(this.
Ct,-2);this.Ct.Di=[this,this.GQ];},_Done:function(){this.__proto__=C.HI;this.Ct.
_Done();C.HI._Done.call(this);},_ReInit:function(){C.HI._ReInit.call(this);this.
Ct._ReInit();},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.Ct)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Asy={G0:null
,Bk:function(aSize){C.OR.Bk.call(this,aSize);this.V.H(A.abN(this.V.M,this.G0.M[0
]));},Ai:function(Ae){C.OR.Ai.call(this,Ae);if(this.Hf)this.G0.FI(A.jb.CK);else this.
G0.FI(A.jb.CS);},A1V:function(){this.Bb(this.G0);},_Init:function(aArg){C.OR._Init.
call(this,aArg);C.HI._Init.call(this.G0={I:this},0);this.__proto__=C.Asy;this.G0.
H(Btn);this.J(this.G0,0);this.G0.As([this,this.ASx,this.AFs]);},_Done:function(){
this.__proto__=C.OR;this.G0._Done();C.OR._Done.call(this);},_ReInit:function(){C.
OR._ReInit.call(this);this.G0._ReInit();},_Mark:function(D){var B;C.OR._Mark.call(
this,D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axr={G0:null,Bk:function(aSize){C.OR.Bk.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G0.M[0]));},Ai:function(Ae){C.OR.Ai.call(this,Ae);if(this.Hf)this.G0.FI(
A.jb.CK);else this.G0.FI(A.jb.CS);},A1V:function(){this.Bb(this.G0);},_Init:function(
aArg){C.OR._Init.call(this,aArg);C.ADK._Init.call(this.G0={I:this},0);this.__proto__=
C.Axr;this.G0.AZ(0x18);this.G0.H(Bto);this.J(this.G0,0);this.G0.As([this,this.ASx
,this.AFs]);},_Done:function(){this.__proto__=C.OR;this.G0._Done();C.OR._Done.call(
this);},_ReInit:function(){C.OR._ReInit.call(this);this.G0._ReInit();},_Mark:function(
D){var B;C.OR._Mark.call(this,D);if((B=this.G0)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acr={ScreenTypeToString:
null,Dn:function(){return 4;},FY:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BH(this.C4(aIndex));},_Init:function(aArg){C.Cn.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acr;this.Cc.Set(0,3);this.Cc.Set(1,35);this.Cc.Set(2
,34);this.Cc.Set(3,43);},_Done:function(){this.__proto__=C.Cn;this.ScreenTypeToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVP={Ww:function(G){this.Agp();A._GetAutoObject(C.BS).Qx(A.aaR(A.acf.Settings
),[this,this.A3k]);A._GetAutoObject(C.BS).FT();this.AL7();A._GetAutoObject(C.BS).
NC(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.
BS).NC(A.aaR(A.acf.ARl)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},DE:function(G){},Abr:function(){return C.AB0;},Abs:function(){return C.ADj;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).A6E());},HO:function(G){C.Tu.HO.call(this,G);if(this.Akh()===false){this.
N.Cs(A.aaL(A.ach.Avs));this.N.Cl=[this,this.ANX];this.N.FJ(A.jV);}this.N.ON(false
);this.N.OO(false);},Agc:function(){A._GetAutoObject(C.A$).Cg(86);},AAV:function(
G){var aFilter=A._GetAutoObject(A.Device.Device).Am.Filter.E8();var AyT=aFilter.
DL(26,4);if(!!AyT){aFilter.Nh(AyT);A._GetAutoObject(A.Device.Device).Am.Bl(aFilter
);if(!!this.Bg)this.Bg.GO(0);}},A6v:function(){return C.APu;},Bfw:function(){var
B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).Am.Filter
){Filter=A._GetAutoObject(A.Device.Device).Am.Filter.E8();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion
)Filter.Nh(FilterCriterion);A._GetAutoObject(A.Device.Device).Am.Bl(Filter);}},A3k:
function(G){A._GetAutoObject(A.Device.Device).Ds(0);A._GetAutoObject(C.A$).Cg(89
);},_Init:function(aArg){C.Tu._Init.call(this,aArg);this.__proto__=C.AVP;this.Dq(
C.ADa);this.Dz(A.aaR(A.acf.A7Q));this.AS$(A._GetAutoObject(C.AxW));},_ReInit:function(
){C.Tu._ReInit.call(this);this.Dz(A.aaR(A.acf.A7Q));},_className:"Application::YoungNoTransponderListScreen"
};C.AVO={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AVO;this.
KV.Ar(false);this.KV.Aj(false);this.KV.Z(false);this.Bmo(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQ1={So:null,Q:null,A7M:0,M3:0,Init:function(aArg){this.ATc(6);},As:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.So)this.So.As(E);},ATc:function(
E){if(this.A7M===E)return;this.A7M=E;var X;switch(E){case 2:X=A._NewObject(C.HI,
0);break;case 3:X=A._NewObject(C.ADK,0);break;case 4:X=A._NewObject(C.AQY,0);break;
case 5:X=A._NewObject(C.AQZ,0);break;case 6:X=A._NewObject(C.AvL,0);break;default:{
X=null;A.ab5("%s%i",Btp,E);}}this.Bmn(X);},Bmn:function(E){if(this.So===E)return;
if(!!this.So){this.So.As(null);this.HN(this.So);}this.So=E;if(!!this.So){this.So.
As(this.Q);this.J(this.So,0);}},FI:function(E){if(this.M3===E)return;this.M3=E;if(
!!this.So)this.So.FI(E);},SK:function(Gw){if(!!this.So)this.So.SK(Gw);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.AQ1;this.H(Ayd);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.So)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQY={CU:null,Ct:null,FI:function(
E){if(this.M3===E)return;C.HI.FI.call(this,E);this.Ct.CT(E);this.CU.CT(E);},Yr:function(
Hw){var B6=null;switch(Hw){case-1:case 0:B6=this.FX;break;case 1:B6=this.Ct;break;
case 2:B6=this.CU;break;case 3:B6=this.GX;break;default:A.ab5("%s",AhX);}return B6;
},_Init:function(aArg){C.HI._Init.call(this,aArg);C.DF._Init.call(this.CU={I:this
},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQY;this.H(Btq);this.GX.
H(Atd);this.CU.H(A$U);this.Ct.H(A$V);this.FX.H(A$W);this.J(this.CU,-2);this.J(this.
Ct,-2);this.CU.Di=[this,this.GQ];this.Ct.Di=[this,this.GQ];},_Done:function(){this.
__proto__=C.HI;this.CU._Done();this.Ct._Done();C.HI._Done.call(this);},_ReInit:function(
){C.HI._ReInit.call(this);this.CU._ReInit();this.Ct._ReInit();},_Mark:function(D
){var B;C.HI._Mark.call(this,D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACG={SX:null,Ai:function(Ae){C.Abo.Ai.call(this,Ae);this.SX.L(this.V.AQ);},_Init:
function(aArg){C.Abo._Init.call(this,aArg);C.CH._Init.call(this.SX={I:this},0);this.
__proto__=C.ACG;this.V.Z(false);this.AW.H(Btr);this.AW.ATc(4);this.SX.H(Bts);this.
SX.R(A.aaR(A.acf.Ki));this.SX.L(A.jb.Bm);this.J(this.SX,0);this.SX.S(A.aaL(A.fl.
Af));this.SX.A2(A.aaL(A.fl.Ak));this.SX.Cu(null);},_Done:function(){this.__proto__=
C.Abo;this.SX._Done();C.Abo._Done.call(this);},_ReInit:function(){C.Abo._ReInit.
call(this);this.SX._ReInit();this.SX.R(A.aaR(A.acf.Ki));this.SX.S(A.aaL(A.fl.Af)
);this.SX.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abo._Mark.call(this,D);
if((B=this.SX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LW={Y0:null,T4:null,AQ:0,A64:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y0.L(this.AQ);this.T4.L(this.AQ);},A9N:function(E){var B;if(this.A64===
E)return;this.A64=E;if(E){this.Y0.Z(true);this.T4.DC([this.T4.ED[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y0.Z(false);this.T4.DC([this.T4.ED[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C5._Init.call(
this.Y0={I:this},0);A.acg.C5._Init.call(this.T4={I:this},0);this.__proto__=C.LW;
this.H(AZR);this.Y0.AZ(0x2D);this.Y0.DC(AhT);this.Y0.DM(Bag);this.Y0.L(A.jb.Text
);this.T4.AZ(0x36);this.T4.DC(Bag);this.T4.DM(Btt);this.T4.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y0,0);this.J(this.T4,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y0._Done();this.T4._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y0._ReInit();this.T4._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y0)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUe={St:null,Py:null,C$:null,BZ:null,CG:null,GM:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pj:null,UN:null,KX:null,Init:function(aArg){A.zX([this
,this.AuG],this.BZ.Q,0);A.zX([this,this.AM0],this.CG.Q,0);A.zX([this,this.Bqf],this.
St.Q,0);A.zX([this,this.Avj],this.C$.Q,0);A.zX([this,this.AVL],this.GM.Q,0);},AuG:
function(G){var F;A._GetAutoObject(A.Device.Device).EC((F=this.BZ.Q,F[1].call(F[
0])));},Bqf:function(G){var F;A._GetAutoObject(A.Device.Device).Aw_((F=this.St.Q
,F[1].call(F[0])));},Avj:function(G){var F;A._GetAutoObject(A.Device.Device).JP((
F=this.C$.Q,F[1].call(F[0])));},AVL:function(G){var F;A._GetAutoObject(A.Device.
Device).Ne((F=this.GM.Q,F[1].call(F[0])));},AM0:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ce._Init.
call(this,aArg);C.BW._Init.call(this.St={I:this},0);C.Io._Init.call(this.Py={I:this
},0);C.BW._Init.call(this.C$={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.Axr.
_Init.call(this.CG={I:this},0);C.Asy._Init.call(this.GM={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.MZ._Init.call(this.Pj={I:this},0);C.UN._Init.call(this.UN={I:
this},0);A.Device.KX._Init.call(this.KX={I:this},0);this.__proto__=C.AUe;var B;this.
I8((A.aaR(A.acf.Asl)+Ayn)+A.aaR(A.acf.AjF));this.St.H(AhW);this.St.Aj(true);this.
St.T(A.aaR(A.acf.A$H));this.St.Bh(true);this.St.By(0);this.Py.H(Ayb);this.Py.Aj(
true);this.Py.Z(true);this.Py.T(A.aaR(A.acf.AdO));this.Py.F_(0);this.Py.EV(99);this.
Py.IM(A.aaR(A.acf.Ki));this.Py.I9(A.aaR(A.acf.GH));this.C$.H(Aaf);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.Afj));this.C$.Bh(true);this.C$.By(0);this.BZ.H(Alf);this.
BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afo));this.BZ.Bh(true);this.BZ.By(0);this.CG.H(
AcO);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.CG.Bh(false);this.GM.H(
AcO);this.GM.Aj(true);this.GM.T(A.aaR(A.acf.Jd));this.GM.Bh(true);this.AnimalType.
As(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.As(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.As(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.Device).Breed);
this.UN.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.St,0);this.
J(this.Py,0);this.J(this.C$,0);this.J(this.BZ,0);this.J(this.CG,0);this.J(this.GM
,0);this.St.As([B=this.WeightRecordingScope,B.B8,B.B9]);this.St.CI(this.WeightRecordingScope
);this.Py.As([B=A._GetAutoObject(A.Device.Device),B.A76,B.BaD]);this.C$.As([B=this.
Gender,B.B8,B.B9]);this.C$.CI(this.Gender);this.BZ.As([B=this.AnimalType,B.B8,B.
B9]);this.BZ.CI(this.AnimalType);this.CG.Go([this,this.D_,this.GN]);this.CG.LX([
B=this.CG,B.FQ]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.As([B=this.Breed,B.B8,B.B9
]);this.CG.CI(this.Breed);this.CG.Anv(this.Pj);this.GM.Go([this,this.D_,this.GN]
);this.GM.LX([B=this.GM,B.FQ]);this.GM.L0(A.aaL(A.ach.Edit));this.GM.As([B=this.
UN,B.B8,B.B9]);this.GM.CI(this.UN);this.GM.Anv(this.KX);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ce;this.St._Done();this.Py._Done();this.C$._Done();this.
BZ._Done();this.CG._Done();this.GM._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pj._Done();this.UN._Done();this.
KX._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.
St._ReInit();this.Py._ReInit();this.C$._ReInit();this.BZ._ReInit();this.CG._ReInit(
);this.GM._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pj._ReInit();this.UN._ReInit();
this.KX._ReInit();this.I8((A.aaR(A.acf.Asl)+Ayn)+A.aaR(A.acf.AjF));this.St.T(A.aaR(
A.acf.A$H));this.Py.T(A.aaR(A.acf.AdO));this.Py.IM(A.aaR(A.acf.Ki));this.Py.I9(A.
aaR(A.acf.GH));this.C$.T(A.aaR(A.acf.Afj));this.BZ.T(A.aaR(A.acf.Afo));this.CG.T(
A.aaR(A.acf.Breed));this.GM.T(A.aaR(A.acf.Jd));},_Mark:function(D){var B;C.Ce._Mark.
call(this,D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Py)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UN)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUd={QL:null,Fx:null,Ik:null,C_:null,Dk:null,EM:null,AutoRegistrationMode:null
,AdR:null,Init:function(aArg){var B;A.zX([this,this.BgV],this.QL.Q,0);A.zX([this
,this.Bd9],[B=A._GetAutoObject(A.Device.Device),B.ASg,B.AZX],0);A.zX([this,this.
Adr],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ],0);A.zX([this,this.Adr],[B=
A._GetAutoObject(A.Device.Device),B.Ug,B.U0],0);A.pe([this,this.Bd9],this);A.pe([
this,this.Adr],this);},BgV:function(G){var F;A._GetAutoObject(A.Device.Device).Awn((
F=this.QL.Q,F[1].call(F[0])));},Bd9:function(G){switch(A._GetAutoObject(A.Device.
Device).Ags){case 0:A._GetAutoObject(A.Device.Helper).JV(this.Ik,true);break;case
1:A._GetAutoObject(A.Device.Helper).JV(this.Ik,false);break;default:throw new Error(
Btu+A._GetAutoObject(A.Device.Device).Ags.toFixed());}},Adr:function(G){var F,CA;
if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dk.Q,CA[1].call(CA[0])))>12)(CA=this.
Dk.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Ce._Init.call(this,aArg);C.BW._Init.call(this.QL={I:this},0);C.BW._Init.call(this.
Fx={I:this},0);C.AGA._Init.call(this.Ik={I:this},0);C.Io._Init.call(this.C_={I:this
},0);C.Io._Init.call(this.Dk={I:this},0);C.AvU._Init.call(this.EM={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdR._Init.
call(this.AdR={I:this},0);this.__proto__=C.AUd;var B;this.I8(A.aaR(A.acf.Aqn));this.
QL.H(AIH);this.QL.Aj(true);this.QL.T(A.aaR(A.acf.Aqn));this.QL.Bh(false);this.QL.
F_(-1);this.QL.EV(1);this.Fx.H(UW);this.Fx.Aj(true);this.Fx.Z(true);this.Fx.T(A.
aaR(A.acf.Aqk));this.Fx.Bh(true);this.Ik.H(Aaf);this.Ik.Aj(true);this.Ik.Z(true);
this.Ik.T(A.aaR(A.acf.AEg));this.Ik.Bh(true);this.C_.H(Alf);this.C_.Aj(true);this.
C_.Z(true);this.C_.T(A.aaR(A.acf.AqF));this.C_.Bh(false);this.C_.F_(2);this.C_.EV(
6);this.C_.IM(A.aaR(A.acf.OA));this.C_.I9(A.aaR(A.acf.Ez));this.Dk.H(AcO);this.Dk.
Aj(true);this.Dk.T(A.aaR(A.acf.Zm));this.Dk.Bh(true);this.Dk.F_(0);this.Dk.EV(12
);this.Dk.IM(A.aaR(A.acf.OA));this.Dk.I9(A.aaR(A.acf.Ez));this.EM.H(Btv);this.EM.
Ar(true);this.EM.Aj(true);this.EM.Bh(false);this.EM.Ar1(A.aaR(A.acf.Aqm));this.AutoRegistrationMode.
As(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QL,0);this.
J(this.Fx,0);this.J(this.Ik,0);this.J(this.C_,0);this.J(this.Dk,0);this.J(this.EM
,0);this.QL.As([B=this.AutoRegistrationMode,B.B8,B.B9]);this.QL.CI(this.AutoRegistrationMode
);this.Fx.As([B=this.AdR,B.B8,B.B9]);this.Fx.CI(this.AdR);this.Ik.Uj([B=A._GetAutoObject(
A.Device.Device),B.Wu,B.AZ1]);this.Ik.Akw([B=A._GetAutoObject(A.Device.Device),B.
Av9,B.AyB]);this.C_.As([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ]);this.Dk.
As([B=A._GetAutoObject(A.Device.Device),B.Ug,B.U0]);this.EM.DB(A.aaL(A.ach.AjX));
this.EM.OL([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ]);this.EM.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.U0]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ce;this.QL._Done();this.Fx._Done();this.Ik._Done();this.C_._Done();this.Dk._Done(
);this.EM._Done();this.AutoRegistrationMode._Done();this.AdR._Done();C.Ce._Done.
call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.QL._ReInit();this.Fx.
_ReInit();this.Ik._ReInit();this.C_._ReInit();this.Dk._ReInit();this.EM._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdR._ReInit();this.I8(A.aaR(A.acf.Aqn
));this.QL.T(A.aaR(A.acf.Aqn));this.Fx.T(A.aaR(A.acf.Aqk));this.Ik.T(A.aaR(A.acf.
AEg));this.C_.T(A.aaR(A.acf.AqF));this.C_.IM(A.aaR(A.acf.OA));this.C_.I9(A.aaR(A.
acf.Ez));this.Dk.T(A.aaR(A.acf.Zm));this.Dk.IM(A.aaR(A.acf.OA));this.Dk.I9(A.aaR(
A.acf.Ez));this.EM.Ar1(A.aaR(A.acf.Aqm));},_Mark:function(D){var B;C.Ce._Mark.call(
this,D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fx)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVh={OF:null,Fx:null,Ik:null,C_:null,Dk:null,EM:null,Afn:null,Init:function(
aArg){var B;A.zX([this,this.BeN],[B=A._GetAutoObject(A.Device.Device),B.ASJ,B.A0c
],0);A.zX([this,this.Adr],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ],0);A.zX([
this,this.Adr],[B=A._GetAutoObject(A.Device.Device),B.Ug,B.U0],0);A.pe([this,this.
BeN],this);A.pe([this,this.Adr],this);},BeN:function(G){var AK3=false;var AaN=false;
switch(A._GetAutoObject(A.Device.Device).Ak3){case 0:{AK3=false;AaN=false;}break;
case 1:{AK3=true;AaN=false;}break;case 2:{AK3=false;AaN=true;}break;default:throw new
Error(Btw+A._GetAutoObject(A.Device.Device).Ak3.toFixed());}A._GetAutoObject(A.Device.
Helper).JV(this.Ik,AK3);A._GetAutoObject(A.Device.Helper).JV(this.C_,AaN);A._GetAutoObject(
A.Device.Helper).JV(this.Dk,AaN);A._GetAutoObject(A.Device.Helper).JV(this.EM,AaN
);},Adr:function(G){var F,CA;if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dk.Q,CA[
1].call(CA[0])))>12)(CA=this.Dk.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Ce._Init.call(this,aArg);C.Io._Init.call(this.OF={
I:this},0);C.BW._Init.call(this.Fx={I:this},0);C.AGA._Init.call(this.Ik={I:this}
,0);C.Io._Init.call(this.C_={I:this},0);C.Io._Init.call(this.Dk={I:this},0);C.AvU.
_Init.call(this.EM={I:this},0);C.Afn._Init.call(this.Afn={I:this},0);this.__proto__=
C.AVh;var B;this.I8(A.aaR(A.acf.LinkTransponder));this.OF.H(AIH);this.OF.Aj(true
);this.OF.Z(true);this.OF.T(A.aaR(A.acf.A7l));this.OF.Bh(false);this.OF.F_(1);this.
OF.EV(365);this.OF.IM(A.aaR(A.acf.Ki));this.OF.I9(A.aaR(A.acf.GH));this.Fx.H(UW);
this.Fx.Aj(true);this.Fx.Z(true);this.Fx.T(A.aaR(A.acf.Aqk));this.Fx.Bh(true);this.
Ik.H(Aaf);this.Ik.Aj(true);this.Ik.Z(true);this.Ik.T(A.aaR(A.acf.AEg));this.Ik.Bh(
false);this.C_.H(Alf);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.AqF
));this.C_.Bh(false);this.C_.F_(2);this.C_.EV(6);this.C_.IM(A.aaR(A.acf.OA));this.
C_.I9(A.aaR(A.acf.Ez));this.Dk.H(AcO);this.Dk.Aj(true);this.Dk.T(A.aaR(A.acf.Zm)
);this.Dk.Bh(true);this.Dk.F_(0);this.Dk.EV(12);this.Dk.IM(A.aaR(A.acf.OA));this.
Dk.I9(A.aaR(A.acf.Ez));this.EM.H(Aot);this.EM.Ar(true);this.EM.Aj(true);this.EM.
Bh(false);this.EM.Ar1(A.aaR(A.acf.Aqm));this.J(this.OF,0);this.J(this.Fx,0);this.
J(this.Ik,0);this.J(this.C_,0);this.J(this.Dk,0);this.J(this.EM,0);this.OF.As([B=
A._GetAutoObject(A.Device.Device),B.A8z,B.BaT]);this.Fx.As([B=this.Afn,B.B8,B.B9
]);this.Fx.CI(this.Afn);this.Ik.Uj([B=A._GetAutoObject(A.Device.Device),B.Wu,B.AZ1
]);this.Ik.Akw([B=A._GetAutoObject(A.Device.Device),B.Av9,B.AyB]);this.C_.As([B=
A._GetAutoObject(A.Device.Device),B.Uf,B.UZ]);this.Dk.As([B=A._GetAutoObject(A.Device.
Device),B.Ug,B.U0]);this.EM.DB(A.aaL(A.ach.AjX));this.EM.OL([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UZ]);this.EM.PN([B=A._GetAutoObject(A.Device.Device),B.Ug
,B.U0]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ce;this.OF._Done();this.
Fx._Done();this.Ik._Done();this.C_._Done();this.Dk._Done();this.EM._Done();this.
Afn._Done();C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.
OF._ReInit();this.Fx._ReInit();this.Ik._ReInit();this.C_._ReInit();this.Dk._ReInit(
);this.EM._ReInit();this.Afn._ReInit();this.I8(A.aaR(A.acf.LinkTransponder));this.
OF.T(A.aaR(A.acf.A7l));this.OF.IM(A.aaR(A.acf.Ki));this.OF.I9(A.aaR(A.acf.GH));this.
Fx.T(A.aaR(A.acf.Aqk));this.Ik.T(A.aaR(A.acf.AEg));this.C_.T(A.aaR(A.acf.AqF));this.
C_.IM(A.aaR(A.acf.OA));this.C_.I9(A.aaR(A.acf.Ez));this.Dk.T(A.aaR(A.acf.Zm));this.
Dk.IM(A.aaR(A.acf.OA));this.Dk.I9(A.aaR(A.acf.Ez));this.EM.Ar1(A.aaR(A.acf.Aqm));
},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.OF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ik)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afn={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bf$],[B=A._GetAutoObject(A.Device.Device),B.ASJ,B.A0c],0);A.pe([
this,this.Bf$],this);},Dn:function(){return 3;},FY:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw6(E);},Bf$:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak3;A.
abo([this,this.B8,this.B9],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afn;this.Cc.Set(0,0);this.Cc.Set(1,1);this.Cc.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cn.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.I$={B7:null,IS:null,Cr:null,Amv:null,Sb:null,Anh:null,AjB:null,Text:null,CX:
null,D6:0,Lz:false,Ai:function(Ae){var B;A.acn.I$.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IS.Ar(true);else{this.IS.Ar(false);this.CX.Z(false);}},A4e:function(G
){var B;var Bd=this.Text.M;var Nu=0;var Nv=0;if(this.CX.Es[0]<Bd[0])Nu=Bd[0]-this.
CX.Es[0];if(this.CX.Es[0]>Bd[2])Nu=Bd[2]-this.CX.Es[0];if(this.CX.Es[1]<Bd[1])Nv=
Bd[1]-this.CX.Es[1];if(this.CX.ED[1]>Bd[3])Nv=Bd[3]-this.CX.ED[1];if(!!Nu||!!Nv)
this.Text.F$(A.abf(this.Text.Br,[Nu,Nv]));Nu=this.Text.Br[0];Nv=this.Text.Br[1];
var C3=[(B=this.Text.Db())[2]-B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]
))Nu=0;if(C3[1]<=((B=this.Text.M)[3]-B[1]))Nv=0;this.Text.F$([Nu,Nv]);},Ami:function(
G){if(!this.B7)return;var A3I=this.Text.AGN(this.D6);var pos=this.Text.Afc(A3I);
this.CX.DM(A.abe(pos,[0,this.B7.Ascent]));this.CX.DC(A.abf(pos,[0,this.B7.Descent
]));if(this.IS.Bw){this.IS.Ar(false);this.IS.Ar(true);}if(this.Lz){A.pe([this,this.
A4e],this);this.Lz=false;}},AAr:function(G){if(!this.B7)return;var EI=this.Text.
AGN(this.D6);if(this.Cr.CO===6){EI=[EI[0]-1,EI[1]];if(this.Text.AnP(EI)===this.D6
){EI=[EI[0],EI[1]-1];EI=[this.Text.ACY(EI[1]).length,EI[1]];}}if(this.Cr.CO===7){
EI=[EI[0]+1,EI[1]];if(this.Text.AnP(EI)===this.D6){EI=[EI[0],EI[1]+1];EI=[0,EI[1
]];}}if(this.Cr.CO===4){var pos=this.Text.Afc(EI);var AaM=(this.B7.Ascent+this.B7.
Descent)+this.B7.Leading;EI=this.Text.ATR(A.abe(pos,[0,AaM]));}if(this.Cr.CO===5
){var pos=this.Text.Afc(EI);var AaM=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;
EI=this.Text.ATR(A.abf(pos,[0,AaM]));}var Vd=this.Text.AnP(EI);var Iu=this.Text.
String.charCodeAt(Vd)||0;if(((Iu===0x5E)||(Iu===0x7E))||(Iu===0x25))Vd=Vd-1;if(Vd
!==this.D6){this.D6=Vd;A.pe([this,this.Ami],this);this.Lz=true;}},Beg:function(G
){if(!this.D6)return;var Iu=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
Iu===0x5E)||(Iu===0x7E))||(Iu===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.Lz=true;},AAs:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Iu=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(Iu===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.Lz=true;}
,Beu:function(G){this.Text.R(A.abU(this.Text.String,Btx,this.D6));this.D6=this.D6+
1;this.Lz=true;},Bei:function(G){var Iu=this.AjB.DQ;var Aui=String.fromCharCode(
Iu);A.ab5("%c",Iu);if((((Iu===0x5E)||(Iu===0x7E))||(Iu===0xAD))||(Iu===0x25))Aui=
Bty+String.fromCharCode(Iu);this.Text.R(A.abU(this.Text.String,Aui,this.D6));this.
D6=this.D6+Aui.length;this.Lz=true;},_Init:function(aArg){A.acn.I$._Init.call(this
,aArg);A.acl.TE._Init.call(this.IS={I:this},0);A.Core.BM._Init.call(this.Cr={I:this
},0);A.Core.BM._Init.call(this.Amv={I:this},0);A.Core.BM._Init.call(this.Sb={I:this
},0);A.Core.BM._Init.call(this.Anh={I:this},0);A.Core.BM._Init.call(this.AjB={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C5._Init.call(this.CX={
I:this},0);this.__proto__=C.I$;var B;this.H(Btz);this.IS.B2=false;this.IS.Cw=true;
this.IS.Fm(500);this.IS.Uk(500);this.Cr.Filter=147;this.Cr.Bw=false;this.Amv.Filter=
151;this.Sb.Filter=44;this.Anh.Filter=149;this.AjB.Filter=145;this.Text.AZ(0x3F);
this.Text.H(BtA);this.Text.KR(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CX.DC(BtB);this.CX.DM(BtC);this.CX.A_o(2);this.CX.A_n(2);this.
CX.L(0xFF000000);this.CX.Z(false);this.J(this.Text,0);this.J(this.CX,0);this.IS.
Q=[B=this.CX,B.Fl,B.Z];this.Cr.BN=[this,this.AAr];this.Cr.D1=[this,this.AAr];this.
Amv.BN=[this,this.Beg];this.Amv.D1=[this,this.Beg];this.Sb.BN=[this,this.AAs];this.
Sb.D1=[this,this.AAs];this.Anh.BN=[this,this.Beu];this.Anh.D1=[this,this.Beu];this.
AjB.BN=[this,this.Bei];this.AjB.D1=[this,this.Bei];this.Text.Q2([this,this.Ami]);
this.Text.S(A.aaL(A.aci.ACK));this.B7=A.aaL(A.aci.ACK);},_Done:function(){this.__proto__=
A.acn.I$;this.IS._Done();this.Cr._Done();this.Amv._Done();this.Sb._Done();this.Anh.
_Done();this.AjB._Done();this.Text._Done();this.CX._Done();A.acn.I$._Done.call(this
);},_ReInit:function(){A.acn.I$._ReInit.call(this);this.IS._ReInit();this.Cr._ReInit(
);this.Amv._ReInit();this.Sb._ReInit();this.Anh._ReInit();this.AjB._ReInit();this.
Text._ReInit();this.CX._ReInit();},_Mark:function(D){var B;A.acn.I$._Mark.call(this
,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AU7={I$:null,DE:function(G
){switch(this.Cr.CO){case 6:A._GetAutoObject(A.Device.Device).AuM();break;case 7:
A._GetAutoObject(A.Device.Device).Aqo();break;case 4:A._GetAutoObject(A.Device.Device
).Ajz();break;case 5:A._GetAutoObject(A.Device.Device).Aqp();break;default:;}},Ew:
function(G){A._GetAutoObject(C.A$).Fv();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.I$._Init.call(this.I$={I:this},0);this.__proto__=C.AU7;this.H(Cd);this.
N.Z(true);this.Dq(C.Aq1);this.I$.H(Fb);this.J(this.I$,0);this.Bb(this.I$);this.N.
CC=[this,this.Ew];this.N.CY(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.I$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.I$._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ATZ={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AyI],[B=A._GetAutoObject(A.Device.Device),B.ASl,B.AZY],0);},Ww:function(G){
if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.Ca()>0)){if(this.AJD())A._GetAutoObject(
C.BS).Qx(A.aaR(A.acf.AOk),[this,this.AII]);else A._GetAutoObject(C.BS).Qx(A.aaR(
A.acf.AOk),null);A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).Qx(A.aaR(A.acf.
AB5),[this,this.Bat]);A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).Qx(A.aaR(
A.acf.AG6),[this,this.A7X]);A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).Qx(
A.aaR(A.acf.A5k),[this,this.Bas]);A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.
BS).Qx(A.aaR(A.acf.UnlinkTransponder),[this,this.Bnr]);}else{A._GetAutoObject(C.
BS).XO(A.aaR(A.acf.AOk));A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).XO(A.
aaR(A.acf.AB5));A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).XO(A.aaR(A.acf.
AG6));A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).XO(A.aaR(A.acf.A5k));A.
_GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).XO(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.A5J)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.
A51));A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.And)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(6);},Abr:function(){return C.
AB1;},Abs:function(){return C.ADh;},Q6:function(G){A._GetAutoObject(A.Device.Device
).Am.Bl(A._GetAutoObject(A.Device.Helper).ACW());},HO:function(G){C.Q4.HO.call(this
,G);this.N.Cs(A.aaL(A.ach.AbB));this.N.Cl=[this,this.XC];this.N.FJ(A.jV);this.N.
C6(null);this.N.CV((A.aaR(A.acf.A5c)+Aag)+this.DataExportDestinationToString.BH(
A._GetAutoObject(A.Device.Device).VN));this.N.ON(false);this.N.OO(false);this.N.
I4.Dr(255);},AR_:function(G){A._GetAutoObject(A.Device.Device).Ds(0);var AiW=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A9(96,true,AiW.toFixed(),0,null);},AR$:function(G){A._GetAutoObject(A.Device.Device
).Ds(0);this.A5R(this);},ASe:function(G){var B;A._GetAutoObject(A.Device.Device).
Ds(0);if(!A._GetAutoObject(A.Device.Device).VN&&!A._GetAutoObject(A.Device.Device
).Ut){A._GetAutoObject(A.Device.Device).A9(73,true,A.jV,0,[this,this.Bew]);return;
}if(A._GetAutoObject(A.Device.Device).Arg()===false){A.zX([this,this.XD],[B=A._GetAutoObject(
A.Device.Device),B.Wv,B.Xe],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Agb]);return;}var AfX=null;switch(A._GetAutoObject(A.Device.Device
).VN){case 0:AfX=A._GetAutoObject(A.Device.Device).AnT(2);break;case 1:AfX=A._GetAutoObject(
A.Device.Device).AnT(3);break;default:throw new Error(BtD+A._GetAutoObject(A.Device.
Device).VN.toFixed());}if(AfX.AnY){A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);this.Dz(A.aaR(A.acf.BnH));A._GetAutoObject(A.Device.Device).AqD(AfX);}else A._GetAutoObject(
A.Device.Device).A9(97,true,A.jV,0,null);},AJD:function(){var Azr=this.Bg.AX;if(
!Azr)return false;return true;},XC:function(G){A._GetAutoObject(A.Device.Device).
UpdateOverlayMenu(16);},_Init:function(aArg){C.Q4._Init.call(this,aArg);A.Device.
DataExportDestinationToString._Init.call(this.DataExportDestinationToString={I:this
},0);this.__proto__=C.ATZ;this.Dq(C.APq);this.Init(aArg);},_Done:function(){this.
__proto__=C.Q4;this.DataExportDestinationToString._Done();C.Q4._Done.call(this);
},_ReInit:function(){C.Q4._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q4._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADh={Pw:null,I3:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Pw={I:this},0);A.acg.Ap._Init.call(this.I3={I:this},0);this.__proto__=
C.ADh;this.Eq.Z(false);this.DS.Z(false);this.Pw.H(BtE);this.Pw.L(A.jb.Text);this.
I3.H(BtF);this.I3.L(A.jb.Text);this.J(this.Pw,0);this.J(this.I3,0);this.Pw.Aw(A.
aaL(A.ach.AvA));this.I3.Aw(A.aaL(A.ach.Avv));},_Done:function(){this.__proto__=C.
Dc;this.Pw._Done();this.I3._Done();C.Dc._Done.call(this);},_ReInit:function(){C.
Dc._ReInit.call(this);this.Pw._ReInit();this.I3._ReInit();},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMV={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AAv],[B=A._GetAutoObject(A.Device.Device),B.AEs,B.AIM],0);A.pe([this,this.
AAv],this);},Ww:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.Ca()>0)){if(
this.AJD())A._GetAutoObject(C.BS).Qx(A.aaR(A.acf.AOj),[this,this.AII]);else A._GetAutoObject(
C.BS).XO(A.aaR(A.acf.AOj));A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).Qx(
A.aaR(A.acf.AB3),[this,this.Bat]);A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.
BS).Qx(A.aaR(A.acf.AG6),[this,this.A7X]);A._GetAutoObject(C.BS).FT();A._GetAutoObject(
C.BS).Qx(A.aaR(A.acf.A5j),[this,this.Bas]);}else{A._GetAutoObject(C.BS).XO(A.aaR(
A.acf.AOj));A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).XO(A.aaR(A.acf.AB3
));A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).XO(A.aaR(A.acf.AG6));A._GetAutoObject(
C.BS).FT();A._GetAutoObject(C.BS).XO(A.aaR(A.acf.A5j));}A._GetAutoObject(C.BS).FT(
);A._GetAutoObject(C.BS).NC(A.aaR(A.acf.A5J)+A.aaR(A.acf.Colon));A._GetAutoObject(
C.BS).FT();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.A51));A._GetAutoObject(C.BS).FT(
);A._GetAutoObject(C.BS).NC(A.aaR(A.acf.And)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},Abr:function(){return C.ABX;},Abs:function(){return C.ADf;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).AOG());},HO:function(G){C.Q4.HO.call(this,G);this.N.Cs(A.aaL(A.ach.AbB));
this.N.Cl=[this,this.XC];this.N.FJ(A.jV);this.N.C6(null);this.N.CV((A.aaR(A.acf.
A5c)+String.fromCharCode(0x0A))+A.aaR(A.acf.Bg3));this.N.ON(false);this.N.OO(false
);this.N.I4.Dr(255);},AR_:function(G){A._GetAutoObject(A.Device.Device).Ds(0);var
AiW=A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(
A.Device.Device).A9(96,true,AiW.toFixed(),0,null);},AR$:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);this.A5Q(this);},ASe:function(G){var B;A._GetAutoObject(A.
Device.Device).Ds(0);if(!A._GetAutoObject(A.Device.Device).Ut){A._GetAutoObject(
A.Device.Device).A9(73,true,A.jV,0,[this,this.Bew]);return;}if(A._GetAutoObject(
A.Device.Device).Arg()===false){A.zX([this,this.XD],[B=A._GetAutoObject(A.Device.
Device),B.Wv,B.Xe],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV,0,[this,
this.Agb]);return;}var AfX=A._GetAutoObject(A.Device.Device).AnT(0);if(AfX.AnY){
A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();this.Dz(A.aaR(A.
acf.Bg4));A._GetAutoObject(A.Device.Device).AqD(AfX);}else A._GetAutoObject(A.Device.
Device).A9(70,true,A.jV,0,null);},AJD:function(){var Azr=this.Bg.AX;if(!Azr)return false;
var O;for(O=0;O<Azr.Ca();O++)if(A._GetAutoObject(A.Device.Helper).Aj6(Azr.AOU(O,
34))===false)return true;return false;},XC:function(G){A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(17);},AAv:function(G){if(A._GetAutoObject(A.Device.Device
).Aqr===1)A.pe([this,this.A5X],this);},_Init:function(aArg){C.Q4._Init.call(this
,aArg);A.Device.DataExportDestinationToString._Init.call(this.DataExportDestinationToString={
I:this},0);this.__proto__=C.AMV;this.Dq(C.AOZ);this.Init(aArg);},_Done:function(
){this.__proto__=C.Q4;this.DataExportDestinationToString._Done();C.Q4._Done.call(
this);},_ReInit:function(){C.Q4._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q4._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListScreen"
};C.AOZ={DY:function(G){C.Aeq.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdV(11));},_Init:function(aArg){C.Aeq._Init.call(this,aArg);this.__proto__=
C.AOZ;this.Text.R(A.aaR(A.acf.ABQ));},_ReInit:function(){C.Aeq._ReInit.call(this
);this.Text.R(A.aaR(A.acf.ABQ));},_className:"Application::HeaderBirthRegistrationsList"
};C.APq={DY:function(G){C.Aeq.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdV(12));},_Init:function(aArg){C.Aeq._Init.call(this,aArg);this.__proto__=
C.APq;this.Text.R(A.aaR(A.acf.AF$));},_ReInit:function(){C.Aeq._ReInit.call(this
);this.Text.R(A.aaR(A.acf.AF$));},_className:"Application::HeaderPurchasedAnimalsList"
};C.AB1={J$:0,AP:null,SP:null,Td:0,Init:function(aArg){},Bk:function(aSize){C.Ba.
Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.
abN(this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SP.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SP.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rf(this.
J$));this.SP.R(A._GetAutoObject(A.acj.KJ).ACM(this.Td));},Cf:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){this.J$=this.AX.KM(Ad,26);this.Td=this.AX.HF(
Ad,4);this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);C.CH._Init.call(this.SP={I:this},0);this.__proto__=C.AB1;
this.AP.H(AZT);this.AP.L(A.jb.Bc);this.SP.H(AZU);this.J(this.AP,0);this.J(this.SP
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bi));this.SP.S(A.aaL(A.fl.Ak));
this.SP.A2(A.aaL(A.fl.Bi));this.SP.Cu(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SP._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SP._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bi));this.SP.S(A.aaL(A.fl.Ak));this.SP.A2(A.
aaL(A.fl.Bi));this.SP.Cu(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUw={
AeQ:null,Ab1:null,TM:null,KK:null,TK:null,NI:null,Tf:A.jV,Ai:function(Ae){var F;
C.SM.Ai.call(this,Ae);this.TM.L(this.V.AQ);var Apu=false;if((!this.Dj||!(F=this.
Dj,F[1].call(F[0])))&&!this.A8)Apu=true;this.TM.Z(Apu);this.Pp.Z(!Apu);this.VP.Z(
!Apu);this.QX.Z(!Apu);this.Yl.Z(!Apu);this.P1.Z(!Apu);},Ads:function(G){var B;var
F;if(!this.Tf.length){C.SM.Ads.call(this,G);return;}var BQ=this.FV;var GB=A._GetAutoObject(
A.Device.AnJ).Be9(this.Tf);this.Tf=A.jV;if(!GB){A._GetAutoObject(A.Device.Device
).A9(101,true,A.jV,0,this.Ab1);A.pe(this.AeQ,this);return;}if(this.Ask&&(GB>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).A9(102,true,A.jV,0,this.
Ab1);A.pe(this.AeQ,this);return;}this.Ui(((B=(GB|0))<0)?B+0x100000000:B);if(this.
FV!==BQ){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FV));A.abo(this.Dj,0);}if(!
!this.OE)A.pe(this.OE,this);},A2U:function(G){if(this.Tf.length<10)this.Tf=this.
Tf+String.fromCharCode(this.KK.DQ);},ASb:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.Ads(this);else this.NI.NH=true;},ATd:function(E){if(A.aa0(this.
AeQ,E))return;this.AeQ=E;},ATe:function(E){if(A.aa0(this.Ab1,E))return;this.Ab1=
E;},_Init:function(aArg){C.SM._Init.call(this,aArg);A.acg.Text._Init.call(this.TM={
I:this},0);A.Core.BM._Init.call(this.KK={I:this},0);A.Core.BM._Init.call(this.TK={
I:this},0);A.Core.BM._Init.call(this.NI={I:this},0);this.__proto__=C.AUw;this.TM.
H(BtG);this.TM.I7(true);this.TM.A6(0x12);this.TM.R(A.aaR(A.acf.A5x));this.KK.Filter=
143;this.TK.Filter=149;this.NI.Filter=145;this.J(this.TM,0);this.TM.S(A.aaL(A.fl.
EL));this.KK.BN=[this,this.A2U];this.TK.BN=[this,this.Bbg];this.NI.BN=[this,this.
ASb];},_Done:function(){this.__proto__=C.SM;this.TM._Done();this.KK._Done();this.
TK._Done();this.NI._Done();C.SM._Done.call(this);},_ReInit:function(){C.SM._ReInit.
call(this);this.TM._ReInit();this.KK._ReInit();this.TK._ReInit();this.NI._ReInit(
);this.TM.R(A.aaR(A.acf.A5x));this.TM.S(A.aaL(A.fl.EL));},_Mark:function(D){var B;
C.SM._Mark.call(this,D);if((B=this.AeQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ab1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUA={AeQ:null,Ab1:null,KK:null
,TK:null,NI:null,Tf:A.jV,IW:function(G){var F;if(!this.Tf.length){C.Q9.IW.call(this
,G);return;}if(this.Asj)return;if(!this.Tf.length)this.TK.NH=true;var BQ=this.AM;
var GB=A._GetAutoObject(A.Device.AnJ).BAP(this.Tf);this.Tf=A.jV;if(!GB){if((this.
Tf.length<13)&&!A._GetAutoObject(A.Device.Device).Ut)A._GetAutoObject(A.Device.Device
).A9(105,true,A.jV,0,this.Ab1);else A._GetAutoObject(A.Device.Device).A9(103,true
,A.jV,0,this.Ab1);A.pe(this.AeQ,this);return;}this.By(GB);if(this.AM!==BQ){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OE)A.pe(this.
OE,this);},A2U:function(G){if(this.Asj)return;if(this.Tf.length<17)this.Tf=this.
Tf+String.fromCharCode(this.KK.DQ);},ASb:function(G){if((this.NI.DQ===0x0D)||(this.
NI.DQ===0x0A))this.IW(this);else this.NI.NH=true;},ATd:function(E){if(A.aa0(this.
AeQ,E))return;this.AeQ=E;},ATe:function(E){if(A.aa0(this.Ab1,E))return;this.Ab1=
E;},_Init:function(aArg){C.Q9._Init.call(this,aArg);A.Core.BM._Init.call(this.KK={
I:this},0);A.Core.BM._Init.call(this.TK={I:this},0);A.Core.BM._Init.call(this.NI={
I:this},0);this.__proto__=C.AUA;this.Ar2(false);this.KK.Filter=143;this.TK.Filter=
149;this.NI.Filter=145;this.KK.BN=[this,this.A2U];this.TK.BN=[this,this.Ath];this.
NI.BN=[this,this.ASb];},_Done:function(){this.__proto__=C.Q9;this.KK._Done();this.
TK._Done();this.NI._Done();C.Q9._Done.call(this);},_ReInit:function(){C.Q9._ReInit.
call(this);this.KK._ReInit();this.TK._ReInit();this.NI._ReInit();},_Mark:function(
D){var B;C.Q9._Mark.call(this,D);if((B=this.AeQ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ab1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APn={Aj2:null,Aj0:null,Gr:null,Q7:null,SJ:null,C5:null,Init:function(aArg){var
B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Device),B.A8x,B.AFl],0);A.pe([
this,this.DY],this);},De:function(E){C.BR.De.call(this,E);this.Aj2.L(E);this.Aj0.
L(E);this.Q7.Zt(E);this.Gr.L(E);this.SJ.Zt(E);},Wx:function(E){this.Q7.CT(E);this.
SJ.CT(E);},DY:function(G){this.Q7.T(A._GetAutoObject(A.Device.Device).AvS.toFixed(
));A.pe([this,this.BB8],this);},BB8:function(G){var Ac5=A._GetAutoObject(A.Device.
Device).Am.Filter;A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).ACW());this.SJ.T(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed());A.
_GetAutoObject(A.Device.Device).Am.Bl(Ac5);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.call(this.Aj0={
I:this},0);A.acg.Ap._Init.call(this.Gr={I:this},0);C.D2._Init.call(this.Q7={I:this
},0);C.D2._Init.call(this.SJ={I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);
this.__proto__=C.APn;this.Aj2.H(P6);this.Aj0.H(BtH);this.Gr.H(BtI);this.Gr.L(A.jb.
CS);this.Q7.AZ(0x14);this.Q7.H(BtJ);this.Q7.Zt(A.jb.Bm);this.Q7.CT(A.jb.Re);this.
Q7.Hh(2);this.Q7.Bll(0x11);this.SJ.AZ(0x14);this.SJ.H(BtK);this.SJ.Zt(A.jb.Bm);this.
SJ.CT(A.jb.Re);this.SJ.Hh(2);this.C5.DC(AhP);this.C5.DM(BtL);this.C5.L(A.jb.Bc);
this.J(this.Aj2,0);this.J(this.Aj0,0);this.J(this.Gr,0);this.J(this.Q7,0);this.J(
this.SJ,0);this.J(this.C5,0);this.Aj2.Aw(A.aaL(A.ach.Avu));this.Aj0.Aw(A.aaL(A.ach.
APV));this.Gr.Aw(A.aaL(A.ach.Gr));this.Q7.S(A.aaL(A.fl.Bi));this.SJ.S(A.aaL(A.fl.
Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Aj2._Done();this.
Aj0._Done();this.Gr._Done();this.Q7._Done();this.SJ._Done();this.C5._Done();C.BR.
_Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Aj2._ReInit();
this.Aj0._ReInit();this.Gr._ReInit();this.Q7._ReInit();this.SJ._ReInit();this.C5.
_ReInit();this.Q7.S(A.aaL(A.fl.Bi));this.SJ.S(A.aaL(A.fl.Bi));},_Mark:function(D
){var B;C.BR._Mark.call(this,D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aj0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARC={Abf:null,Aek:null,VM:null,Init:function(aArg){this.Bb(this.Abf);},KQ:function(
){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CC=[this,this.XB];this.Bx.Cl=
null;this.Bx.Cm=[this,this.A2X];this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(
A.ach.V0));}return this.Bx;},AAo:function(G){var Aa=(C.Aji.isPrototypeOf(G)?G:null
);if(Aa===this.Abf)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aek)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$N);},_Init:function(aArg){C.Fn._Init.call(this,aArg);C.Aji._Init.call(this.
Abf={I:this},0);C.Aji._Init.call(this.Aek={I:this},0);C.ARG._Init.call(this.VM={
I:this},0);this.__proto__=C.ARC;var B;this.H(Rl);this.Text.R(A.aaR(A.acf.ABV));this.
Abf.H(IR);this.Abf.T(A.aaR(A.acf.AjF));this.Aek.H(P8);this.Aek.T(A.aaR(A.acf.AGg
));this.VM.H(Aae);this.VM.T(A.aaR(A.acf.A46));this.J(this.Abf,0);this.J(this.Aek
,0);this.J(this.VM,0);this.Text.S(A.aaL(A.fl.Ak));this.Abf.AR=[this,this.AAo];this.
Aek.AR=[this,this.AAo];this.VM.AST([B=A._GetAutoObject(A.Device.Device),B.AEw,B.
AIP]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fn;this.Abf._Done();this.
Aek._Done();this.VM._Done();C.Fn._Done.call(this);},_ReInit:function(){C.Fn._ReInit.
call(this);this.Abf._ReInit();this.Aek._ReInit();this.VM._ReInit();this.Text.R(A.
aaR(A.acf.ABV));this.Abf.T(A.aaR(A.acf.AjF));this.Aek.T(A.aaR(A.acf.AGg));this.VM.
T(A.aaR(A.acf.A46));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fn._Mark.
call(this,D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARB={AnimalTableFields:null,Ay:null,Y:
null,JL:null,CP:function(){this.AiH(this);},Init:function(aArg){A.zV([this,this.
AiH],this.AnimalTableFields,0);A.pe([this,this.AiH],this);},DE:function(G){C.Fn.
DE.call(this,G);this.MN(this);},KQ:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.CC=[this,this.Ew];this.Bx.Cl=[this,this.A2V];this.Bx.Cm=[this,this.
A3o];this.Bx.C6(A.aaL(A.ach.Arc));this.Bx.Cs(A.aaL(A.ach.Aq7));this.Bx.CY(A.aaL(
A.ach.V0));}return this.Bx;},Ew:function(G){this.AA0();this.XB(this);},AiH:function(
G){this.Ao4();var O;for(O=0;O<this.AnimalTableFields.NP();O=O+1){var Aao=A._GetAutoObject(
C.Amn).OC(O);this.A03(Aao);}this.J(this.JL,0);A.aaS([this,this.MN],this);},Fg:function(
G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);
this.Ay.Mv(-this.Y.Br[1]);},MN:function(G){var B;this.Y.Vu(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},A03:function(
G6){var Ay2=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Sc,0);Aa.T(Ay2.BH(G6));Aa.Aj(true);Aa.G1=G6;Aa.A9M(this.AnimalTableFields.NU(G6
));this.J(Aa,0);this.ZE(Aa);},Ao4:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdH=X;X=X.Ah;if(((AdH.U&0x400)===0x400))this.HN(AdH);}}
,AA0:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JL)){var Aa=(C.Sc.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G1);if(Aa.ASr())this.AnimalTableFields.
AUs(Aa.G1);}else A.ab5("%s",Ayi);}X=X.Ah;}this.AnimalTableFields.Ch();},A2V:function(
G){var B;var Aa=(C.Sc.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAg=(C.Sc.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAg){this.Ahv(AAg,Aa);A.pe([this,this.MN],this);}}},A3o:function(
G){var B;var Aa=(C.Sc.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAM=(C.Sc.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAM){this.Ahv(Aa,AAM);A.pe([this,this.MN],this);}}},AqK:function(
G){var B;A._GetAutoObject(A.Device.Device).Aso(this);A.pe([this,this.AiH],this);
},_Init:function(aArg){C.Fn._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Au1._Init.call(this.JL={I:this},0);
this.__proto__=C.ARB;this.H(Rl);this.Text.R(A.aaR(A.acf.AGg));this.Ay.H(Iq);this.
Y.H(Bah);this.Y.JO(1);this.JL.H(AH6);this.JL.Aj(true);this.JL.T(A.aaR(A.acf.A5K)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JL,0);this.Y.El=[this,this.Fg];
this.JL.AR=[this,this.AqK];this.AnimalTableFields=A._GetAutoObject(C.Amn);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fn;this.Ay._Done();this.Y._Done();this.
JL._Done();C.Fn._Done.call(this);},_ReInit:function(){C.Fn._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JL._ReInit();this.Text.R(A.aaR(A.acf.AGg));this.
JL.T(A.aaR(A.acf.A5K));this.CP();},_Mark:function(D){var B;C.Fn._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARA={Y:null,BZ:null,C$:null,CG:null,GM:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UM:null,Init:function(aArg){A.zX([this,this.AuG],this.BZ.Q,0);A.zX([
this,this.AM0],this.CG.Q,0);A.zX([this,this.AVL],this.GM.Q,0);A.zX([this,this.Avj
],this.C$.Q,0);this.Bb(this.BZ);},DE:function(G){C.Fn.DE.call(this,G);this.MN(this
);},KQ:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CC=[this,this.
XB];this.Bx.Cl=null;this.Bx.Cm=null;this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(
A.aaL(A.ach.V0));}return this.Bx;},Fg:function(G){var B;this.Ay.Mu((B=this.Y.Db(
0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MN:function(
G){var B;this.Y.Vu(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},AuG:function(G){var F;A._GetAutoObject(A.Device.Device
).EC((F=this.BZ.Q,F[1].call(F[0])));},AVL:function(G){var F;A._GetAutoObject(A.Device.
Device).Ne((F=this.GM.Q,F[1].call(F[0])));},Avj:function(G){var F;A._GetAutoObject(
A.Device.Device).JP((F=this.C$.Q,F[1].call(F[0])));},AM0:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fn._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.XN._Init.call(this.BZ={
I:this},0);C.XN._Init.call(this.C$={I:this},0);C.XN._Init.call(this.CG={I:this},
0);C.XN._Init.call(this.GM={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},
0);C.Breed._Init.call(this.Breed={I:this},0);C.UN._Init.call(this.UM={I:this},0);
this.__proto__=C.ARA;var B;this.H(Rl);this.Text.R(A.aaR(A.acf.AjF));this.Y.H(Bah
);this.Y.JO(1);this.BZ.H(AhU);this.BZ.Ar(true);this.BZ.Aj(true);this.BZ.T(A.aaR(
A.acf.Afo));this.C$.H(Ayb);this.C$.Ar(true);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.
Afj));this.CG.H(Aor);this.CG.Ar(true);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed
));this.GM.H(As5);this.GM.Ar(true);this.GM.Aj(true);this.GM.T(A.aaR(A.acf.Jd));this.
Ay.H(Iq);this.AnimalType.As(A._GetAutoObject(A.Device.Device).AnimalType);this.Gender.
As(A._GetAutoObject(A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.
Device).Breed);this.UM.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(
this.Y,0);this.J(this.BZ,0);this.J(this.C$,0);this.J(this.CG,0);this.J(this.GM,0
);this.J(this.Ay,0);this.Y.El=[this,this.Fg];this.BZ.Wz(A.aaL(A.fl.Hr));this.BZ.
WA(A.aaL(A.fl.Hr));this.BZ.As([B=this.AnimalType,B.B8,B.B9]);this.BZ.CI(this.AnimalType
);this.C$.Wz(A.aaL(A.fl.Hr));this.C$.WA(A.aaL(A.fl.Hr));this.C$.As([B=this.Gender
,B.B8,B.B9]);this.C$.CI(this.Gender);this.CG.Wz(A.aaL(A.fl.Hr));this.CG.WA(A.aaL(
A.fl.Hr));this.CG.As([B=this.Breed,B.B8,B.B9]);this.CG.CI(this.Breed);this.GM.Wz(
A.aaL(A.fl.Hr));this.GM.WA(A.aaL(A.fl.Hr));this.GM.As([B=this.UM,B.B8,B.B9]);this.
GM.CI(this.UM);this.Init(aArg);},_Done:function(){this.__proto__=C.Fn;this.Y._Done(
);this.BZ._Done();this.C$._Done();this.CG._Done();this.GM._Done();this.Ay._Done(
);this.AnimalType._Done();this.Gender._Done();this.Breed._Done();this.UM._Done();
C.Fn._Done.call(this);},_ReInit:function(){C.Fn._ReInit.call(this);this.Y._ReInit(
);this.BZ._ReInit();this.C$._ReInit();this.CG._ReInit();this.GM._ReInit();this.Ay.
_ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.Breed._ReInit();this.
UM._ReInit();this.Text.R(A.aaR(A.acf.AjF));this.BZ.T(A.aaR(A.acf.Afo));this.C$.T(
A.aaR(A.acf.Afj));this.CG.T(A.aaR(A.acf.Breed));this.GM.T(A.aaR(A.acf.Jd));},_Mark:
function(D){var B;C.Fn._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amr={CB:0,Alr:A.abi(17,0,null),OC:function(Hw){return this.Alr.Get(Hw);},NP:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alr.Set(
O,0);this.CB=0;},J:function(Aai){if(this.CB>=17)A.ab5("%s",BtM);else{this.Alr.Set(
this.CB,Aai);this.CB=this.CB+1;}},Ch:function(){},Er:function(AhY){var AJZ=AhY.indexOf(
String.fromCharCode(0x2C),0);var A1q=A.jV;var O=0;this.CB=0;while(O<17)if(AhY===
A.jV)O++;else{if(AJZ===-1){A1q=AhY;AhY=A.jV;}else{A1q=A.abV(AhY,AJZ);AhY=A.ab1(AhY
,0,AJZ+1);}var Aao=A.abZ(A1q,0,10)|0;if(this.Bi$(Aao)){this.Alr.Set(this.CB,Aao);
this.CB=this.CB+1;O++;}AJZ=AhY.indexOf(String.fromCharCode(0x2C),0);}if(AhY!==A.
jV)A.ab5("%s",BtN);},toString:function(){var B;var AAe=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAe=AAe+AH8;AAe=AAe+(((B=this.Alr.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAe;},Contains:function(Aai){var O;for(O=0;O<this.CB;O=O+1)if(this.Alr.
Get(O)===Aai)return true;return false;},Bi$:function(Aai){return true;},_Init:function(
aArg){(this.Alr=[]).__proto__=C.Amr.Alr;this.__proto__=C.Amr;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AL6={AfL:null,Init:function(aArg){var B;A.
zX([this,this.Beb],[B=A._GetAutoObject(A.Device.Device),B.A72,B.BaA],0);A.zX([this
,this.Bec],[B=A._GetAutoObject(A.Device.Device),B.A73,B.BaB],0);A.pe([this,this.
Beb],this);A.pe([this,this.Bec],this);},Clear:function(){C.Amr.Clear.call(this);
this.AfL.Clear();},Ch:function(){A._GetAutoObject(A.Device.Device).ArG(this.AfL.
toString());A._GetAutoObject(A.Device.Device).ArH(this.toString());},Beb:function(
G){this.AfL.Er(A._GetAutoObject(A.Device.Device).ABx);A.we(this,0);},Bec:function(
G){this.Er(A._GetAutoObject(A.Device.Device).ABy);A.we(this,0);},NU:function(Aai
){return this.AfL.Contains(Aai);},AUs:function(Aai){if(!this.NU(Aai))this.AfL.J(
Aai);},AOH:function(){return this.AfL.NP();},_Init:function(aArg){C.Amr._Init.call(
this,aArg);this.__proto__=C.AL6;this.AfL=A._NewObject(C.Amr,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amr._Mark.call(this,D);if((B=this.AfL)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amn={_Init:function(){C.AL6._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARG={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hh(10);},Bk:function(aSize){C.T9.Bk.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.T9.
Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fr=((Ae&0x20)===0x20);var GA=this.
Bo.Bw;var FN=A.jb.Ad8;var GS=A.jb.Bm;if(this.Hf){FN=A.jb.Bm;GS=A.jb.Text;}if(!G$
){this.Background.L(FN);this.V.L(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fr){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FN);this.V.L(GS);}this.LF=G$;this.KD=Fr;this.Qo=GA;},_Init:function(
aArg){C.T9._Init.call(this,aArg);this.__proto__=C.ARG;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.ATY={YK:null,AjK:null,KQ:function(){if(
!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CC=[this,this.XB];this.Bx.Cl=null;
this.Bx.Cm=null;this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.V0));}return this.
Bx;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.XN._Init.call(this.
YK={I:this},0);C.VN._Init.call(this.AjK={I:this},0);this.__proto__=C.ATY;var B;this.
H(JZ);this.YK.H(JZ);this.YK.T(A.aaR(A.acf.A5v));this.AjK.As(A._GetAutoObject(A.Device.
Device).VN);this.J(this.YK,0);this.YK.Wz(A.aaL(A.fl.Hr));this.YK.WA(A.aaL(A.fl.Hr
));this.YK.As([B=this.AjK,B.B8,B.B9]);this.YK.CI(this.AjK);this.AjK.Bly([B=A._GetAutoObject(
A.Device.Device),B.ASl,B.AZY]);},_Done:function(){this.__proto__=C.OverlayMenu;this.
YK._Done();this.AjK._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){
C.OverlayMenu._ReInit.call(this);this.YK._ReInit();this.AjK._ReInit();this.YK.T(
A.aaR(A.acf.A5v));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((
B=this.YK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjK)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::PurchasedAnimalsListOverlayMenu"};C.VN={Abb:null,DataExportDestinationToString:
null,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FY:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(
){return 1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Abb)(F=this.Abb
,F[2].call(F[0],E));},Bly:function(E){if(A.aaZ(this.Abb,E))return;if(!!this.Abb)
A.z$([this,this.ApO],this.Abb,0);this.Abb=E;if(!!this.Abb)A.zX([this,this.ApO],this.
Abb,0);A.pe([this,this.ApO],this);},ApO:function(G){var F;if(!!this.Abb)this.Q=(
F=this.Abb,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B8,this.B9],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.VN;},
_Done:function(){this.__proto__=C.AC;this.DataExportDestinationToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Abb)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.AMU={
YR:null,Ak8:null,KQ:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.
CC=[this,this.XB];this.Bx.Cl=null;this.Bx.Cm=null;this.Bx.CV(A.jV);this.Bx.Cs(null
);this.Bx.CY(A.aaL(A.ach.V0));}return this.Bx;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.XN._Init.call(this.YR={I:this},0);C.AD4._Init.call(this.
Ak8={I:this},0);this.__proto__=C.AMU;var B;this.H(JZ);this.YR.H(JZ);this.YR.T(A.
aaR(A.acf.Display));this.Ak8.As(A._GetAutoObject(A.Device.Device).Aqr);this.J(this.
YR,0);this.YR.Wz(A.aaL(A.fl.Hr));this.YR.WA(A.aaL(A.fl.Hr));this.YR.As([B=this.Ak8
,B.B8,B.B9]);this.YR.CI(this.Ak8);this.Ak8.BmD([B=A._GetAutoObject(A.Device.Device
),B.AEs,B.AIM]);},_Done:function(){this.__proto__=C.OverlayMenu;this.YR._Done();
this.Ak8._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.YR._ReInit();this.Ak8._ReInit();this.YR.T(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.YR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ak8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.AD4={AbO:null,ListViewScopeToString:
null,Dn:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FY:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.BH(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){var F;C.AC.As.call(this,E);if(!!this.AbO)(F=this.AbO,F[2].call(
F[0],E));},BmD:function(E){if(A.aaZ(this.AbO,E))return;if(!!this.AbO)A.z$([this,
this.ApO],this.AbO,0);this.AbO=E;if(!!this.AbO)A.zX([this,this.ApO],this.AbO,0);
A.pe([this,this.ApO],this);},ApO:function(G){var F;if(!!this.AbO)this.Q=(F=this.
AbO,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B8,this.B9],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.AD4;},_Done:function(){this.__proto__=
C.AC;this.ListViewScopeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AbO)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};C.AU6={AB8:0,AB7:0,Ai:function(Ae){C.OU.Ai.call(this
,Ae);this.Background.L(this.AB7);this.V.L(this.AB8);},Bls:function(E){if(this.AB8===
E)return;this.AB8=E;this.An();},Blr:function(E){if(this.AB7===E)return;this.AB7=
E;this.An();},_Init:function(aArg){C.OU._Init.call(this,aArg);this.__proto__=C.AU6;
this.Ar(false);this.AB8=A.jb.Text;this.AB7=A.jb.CK;},_className:"Application::TextCaptionItem"
};C.AHe={WeightValuePrecisionToString:null,Init:function(aArg){var B;A.zX([this,
this.BdG],[B=A._GetAutoObject(A.Device.Device),B.A8y,B.BaS],0);A.pe([this,this.BdG
],this);},Dn:function(){return 3;},FY:function(aIndex){return this.WeightValuePrecisionToString.
BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.
Device).AwM(E);},BdG:function(G){this.Q=A._GetAutoObject(A.Device.Device).OJ;A.abo([
this,this.B8,this.B9],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.
WeightValuePrecisionToString._Init.call(this.WeightValuePrecisionToString={I:this
},0);this.__proto__=C.AHe;this.Cc.Set(0,0);this.Cc.Set(1,1);this.Cc.Set(2,2);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.WeightValuePrecisionToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
WeightValuePrecisionToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(
this,D);if((B=this.WeightValuePrecisionToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightValuePrecision"};C.AUy={UA:null,A$d:A.jV,Init:function(
aArg){},Bk:function(aSize){C.BW.Bk.call(this,[aSize[0],80]);this.Background.H(A.
abK(this.Background.M,aSize));this.UA.H([0,80,aSize[0],aSize[1]]);},Ai:function(
Ae){C.BW.Ai.call(this,Ae);this.UA.L(this.V.AQ);},Bm7:function(E){if(this.A$d===E
)return;this.A$d=E;this.UA.R(E);},_Init:function(aArg){C.BW._Init.call(this,aArg
);C.CH._Init.call(this.UA={I:this},0);this.__proto__=C.AUy;this.H(AcN);this.UA.H(
BtO);this.J(this.UA,0);this.UA.S(A.aaL(A.fl.Af));this.UA.A2(A.aaL(A.fl.Ak));this.
UA.Cu(null);this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.UA._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.UA._ReInit(
);this.UA.S(A.aaL(A.fl.Af));this.UA.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;
C.BW._Mark.call(this,D);if((B=this.UA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupSubCaption"};C.Y7={MassDeregistrationCriterionToString:
null,Dn:function(){return 2;},FY:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BH(this.C4(aIndex));},_Init:function(
aArg){C.Cn._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Y7;this.
Cc.Set(0,0);this.Cc.Set(1,1);},_Done:function(){this.__proto__=C.Cn;this.MassDeregistrationCriterionToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANN={Vg:null
,Y7:null,Y9:null,Mq:null,At4:0,Init:function(aArg){this.Bb(this.Y9);},Ai:function(
Ae){C.Ei.Ai.call(this,Ae);var BBF=((A.aaR(A.acf.Aqz)+A.aaR(A.acf.Colon))+CQ)+this.
At4.toFixed();this.Mq.Bm7(BBF);},CF:function(G){C.Ei.CF.call(this,G);A.zX([this,
this.ALp],this.Mq.Q,0);A.pe([this,this.ALp],this);},E3:function(G){C.Ei.E3.call(
this,G);A.z$([this,this.ALp],this.Mq.Q,0);},DJ:function(G){C.Ei.DJ.call(this,G);
if((this.AV===this.Mq)&&!this.At4)this.N.HQ.Dr(100);else this.N.HQ.Dr(255);},Ber:
function(G){if(this.At4>0)A._GetAutoObject(A.Device.Device).A9(108,true,this.At4.
toFixed(),0,[this,this.BzV]);},ALp:function(G){var F;this.At4=A._GetAutoObject(A.
Device.Helper).Bix((F=this.Mq.Q,F[1].call(F[0])));this.An();A.pe([this,this.MF],
this);},Bel:function(G){var B;if(!A._GetAutoObject(A.Device.Device).Am.Ca()){A._GetAutoObject(
A.Device.Device).A9(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).Arg()===false){this.Vg=[this,this.Bel];A.zX([this,this.XD],[B=A._GetAutoObject(
A.Device.Device),B.Wv,B.Xe],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Agb]);return;}var AfX=A._GetAutoObject(A.Device.Device).AnT(1);if(
AfX.AnY)A._GetAutoObject(A.Device.Device).AqD(AfX);else A._GetAutoObject(A.Device.
Device).A9(88,true,A.jV,0,null);},Agb:function(G){var B;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===5)){A.z$([this,this.XD],[B=A.
_GetAutoObject(A.Device.Device),B.Wv,B.Xe],0);this.Vg=null;}},XD:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AhM===3){A._GetAutoObject(A.Device.Device
).A9(74,false,A.jV,0,[this,this.Agb]);A.z$([this,this.XD],[B=A._GetAutoObject(A.
Device.Device),B.Wv,B.Xe],0);if(!!this.Vg)A.pe(this.Vg,this);this.Vg=null;}},BzV:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===7))A.pe([this,this.BBA],this);},BBA:function(G){A._GetAutoObject(A.
Device.Helper).BxT(this.Y7.Q);A._GetAutoObject(A.Device.Device).A9(109,true,this.
At4.toFixed(),0,null);A.pe([this,this.MF],this);A.pe([this,this.ALp],this);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Y7._Init.call(this.Y7={I:this},0);C.
Cp._Init.call(this.Y9={I:this},0);C.AUy._Init.call(this.Mq={I:this},0);this.__proto__=
C.ANN;var B;this.Dq(C.AO1);this.Y9.H(IR);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.
A59));this.Y9.Bh(false);this.Mq.H(BtP);this.Mq.Aj(true);this.Mq.T(A.aaR(A.acf.A$t
));this.Mq.Bh(true);this.Mq.A_d(A.aaR(A.acf.Ok));this.J(this.Y9,0);this.J(this.Mq
,0);this.Y9.AR=[this,this.Bel];this.Mq.AR=[this,this.Ber];this.Mq.AeR([this,this.
Ber]);this.Mq.As([B=this.Y7,B.B8,B.B9]);this.Mq.CI(this.Y7);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Y7._Done();this.Y9._Done();this.Mq._Done();C.
Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y7._ReInit(
);this.Y9._ReInit();this.Mq._ReInit();this.Y9.T(A.aaR(A.acf.A59));this.Mq.T(A.aaR(
A.acf.A$t));this.Mq.A_d(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.Vg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Y7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Mq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AO1={_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AO1;this.
Text.R(A.aaR(A.acf.AdQ));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdQ));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANQ={
Vg:null,Y8:null,AbT:null,Init:function(aArg){this.Bb(this.Y8);A.pe([this,this.MF
],this);},Bek:function(G){var B;var AzZ=A._GetAutoObject(A.Device.Device).ADQ();
switch(AzZ){case 1:A._GetAutoObject(A.Device.Device).A9(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A9(91,true,UX,0,[this,this.BeE]);break;
case 2:{this.Vg=[this,this.Bek];A.zX([this,this.XD],[B=A._GetAutoObject(A.Device.
Device),B.Wv,B.Xe],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV,0,[this,
this.Agb]);}break;default:throw new Error(Bai+AzZ.toFixed());}},Agb:function(G){
var B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5)){A.z$([this,this.XD],[B=A._GetAutoObject(A.Device.Device),B.Wv,B.Xe],0);this.
Vg=null;}},XD:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhM===3){A.
_GetAutoObject(A.Device.Device).A9(74,false,A.jV,0,[this,this.Agb]);A.z$([this,this.
XD],[B=A._GetAutoObject(A.Device.Device),B.Wv,B.Xe],0);if(!!this.Vg)A.pe(this.Vg
,this);this.Vg=null;}},BeG:function(G){var B;var AzZ=A._GetAutoObject(A.Device.Device
).ADR();switch(AzZ){case 1:A._GetAutoObject(A.Device.Device).A9(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A9(95,true,A.jV,0,[this,this.BzW
]);break;case 2:{this.Vg=[this,this.BeG];A.zX([this,this.XD],[B=A._GetAutoObject(
A.Device.Device),B.Wv,B.Xe],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Agb]);}break;case 3:A._GetAutoObject(A.Device.Device).A9(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A9(93,true,A.jV,0,null
);break;default:throw new Error(Bai+AzZ.toFixed());}},BeE:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(At.Id){case 91:if(At.PopupState===
9)A.aaS([this,this.Byw],this);break;case 92:if(At.PopupState===9)A.aaS([this,this.
Byy],this);break;default:throw new Error(BtQ+At.Id.toFixed());}},Byw:function(G){
if(A._GetAutoObject(A.Device.Device).ACf()){var A2H=A._GetAutoObject(A.Device.Device
).Am.QF();A._GetAutoObject(A.Device.Device).A9(80,true,A2H.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A9(82,true,A.jV,0,null);A.aaS([this,this.BzR],
this);},Byy:function(G){if(A._GetAutoObject(A.Device.Device).AGl()){var A2H=A._GetAutoObject(
A.Device.Device).Am.QF();A._GetAutoObject(A.Device.Device).A9(81,true,A2H.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A9(83,true,A.jV,0,null);A.aaS([
this,this.BAt],this);},BzW:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A.pe([this,this.BBB],this);},BBB:function(
G){A._GetAutoObject(A.Device.Device).A9(92,true,UX,0,[this,this.BeE]);},BAt:function(
G){A._GetAutoObject(A.Device.Device).A9(92,false,A.jV,0,null);},BzR:function(G){
A._GetAutoObject(A.Device.Device).A9(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.Cp._Init.call(this.Y8={I:this},0);C.Cp._Init.call(
this.AbT={I:this},0);this.__proto__=C.ANQ;this.Dq(C.AO4);this.Y8.H(IR);this.Y8.Aj(
true);this.Y8.T(A.aaR(A.acf.ACf));this.Y8.Bh(false);this.AbT.H(P8);this.AbT.Aj(true
);this.AbT.T(A.aaR(A.acf.AGl));this.AbT.Bh(true);this.J(this.Y8,-1);this.J(this.
AbT,-1);this.Y8.AR=[this,this.Bek];this.AbT.AR=[this,this.BeG];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ei;this.Y8._Done();this.AbT._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y8._ReInit();this.AbT.
_ReInit();this.Y8.T(A.aaR(A.acf.ACf));this.AbT.T(A.aaR(A.acf.AGl));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vg)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbT)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO4={
_Init:function(aArg){C.KN._Init.call(this,aArg);this.__proto__=C.AO4;this.Text.R(
A.aaR(A.acf.ACl));},_ReInit:function(){C.KN._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACl));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.Tu={NW:null
,AT4:0,ADT:false,ADP:false,ADU:false,AlZ:function(G){this.A5N(this);},AS$:function(
E){if(this.NW===E)return;this.NW=E;if(!this.NW)return;this.DP.AutoActions=E;A.zV([
this,this.BBk],this.NW,0);},AL7:function(){this.AL_(A.aaR(A.acf.A$B),[this,this.
BBR],[this,this.A8s,this.AFc]);this.AL_(A.aaR(A.acf.AGa),[this,this.BBP],[this,this.
A8p,this.AFa]);this.AL_(A.aaR(A.acf.AnZ),[this,this.BBQ],[this,this.A8q,this.AFb
]);A._GetAutoObject(C.BS).FT();A._GetAutoObject(C.BS).NC(A.aaR(A.acf.BnC)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).FT();},AL_:function(Bwl,Bxw,BwQ){if(!this.NW
)return;this.AL9(Bwl,Bxw,BwQ);},BBR:function(G){this.AFc(!this.ADU);},BBP:function(
G){this.AFa(!this.ADP);},BBQ:function(G){this.AFb(!this.ADT);},A3U:function(EE,BwP
){if(!this.NW)return;if(BwP)this.NW.BgD(EE);else this.NW.BnV(EE);this.NW.Ch();},
A4z:function(Aia,Aib,BxO){A._GetAutoObject(C.BS).ABz(Aia,Aib,[this,this.A8I,this.
ATl],BxO);},AGy:function(EE){if(!this.NW)return;this.NW.AGy(EE);this.NW.Ch();},AFc:
function(E){if(this.ADU===E)return;this.ADU=E;this.A3U(256,E);A.abo([this,this.A8s
,this.AFc],0);},AFa:function(E){if(this.ADP===E)return;this.ADP=E;this.A3U(2,E);
A.abo([this,this.A8p,this.AFa],0);},AFb:function(E){if(this.ADT===E)return;this.
ADT=E;this.A3U(1,E);A.abo([this,this.A8q,this.AFb],0);},BBk:function(G){this.AFc(
this.NW.Contains(256));this.AFa(this.NW.Contains(2));this.AFb(this.NW.Contains(1
));if(this.NW.NP()>0)this.ATl(this.NW.OC(this.NW.NP()-1));},ATl:function(E){if(this.
AT4===E)return;this.AT4=E;A.abo([this,this.A8I,this.ATl],0);},A8s:function(){return this.
ADU;},A8p:function(){return this.ADP;},A8q:function(){return this.ADT;},A8I:function(
){return this.AT4;},_Init:function(aArg){C.GW._Init.call(this,aArg);this.__proto__=
C.Tu;},_Mark:function(D){var B;C.GW._Mark.call(this,D);if((B=this.NW)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvR={Q:null,Ch:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADN:
function(EE){switch(EE){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Kc:function(G){var F;if(!!this.Q)this.Er((F=
this.Q,F[1].call(F[0])));A.we(this,0);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Kc],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kc],E,
0);if(!!E)A.pe([this,this.Kc],this);},AGy:function(EE){if(this.NP()>0)this.Axp(this.
NP()-1,EE);},BgD:function(EE){if(this.Contains(EE))return;if(this.CB>=17){A.ab5(
"%s",AH7);return;}var AzS=0;for(;(AzS<=this.NP())&&(this.OC(AzS)<EE);AzS++);var AA5=
this.NP()-1;this.J(this.OC(AA5));for(;AA5>AzS;AA5--)this.Axp(AA5,this.OC(AA5-1));
this.Axp(AzS,EE);},BnV:function(EE){var index=this.DU(EE);if(index<0)return;for(;
index<(this.NP()-1);index++)this.Axp(index,this.OC(index+1));this.Axp(index,0);this.
CB--;},_Init:function(aArg){C.Vt._Init.call(this,aArg);this.__proto__=C.AvR;},_Mark:
function(D){var B;C.Vt._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.Av0={_Init:
function(){C.AvR._Init.call(this,0);var B;this.As([B=A._GetAutoObject(A.Device.Device
),B.A8C,B.BaW]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Av1={_Init:function(){C.AvR._Init.call(this,0);var B;this.As([B=A._GetAutoObject(
A.Device.Device),B.A8D,B.BaX]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AxW={_Init:function(){C.AvR._Init.call(this,0);var B;this.As([B=
A._GetAutoObject(A.Device.Device),B.A8_,B.Ba$]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ADj={QP:null,AjW:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.QP={I:this},0);A.acg.Ap._Init.
call(this.AjW={I:this},0);this.__proto__=C.ADj;this.Eq.H(BtR);this.DS.H(BtS);this.
QP.H(BtT);this.QP.R(A.aaR(A.acf.Ud));this.QP.A6(0x11);this.QP.L(A.jb.Text);this.
AjW.H(AZQ);this.AjW.L(A.jb.Text);this.J(this.QP,0);this.J(this.AjW,0);this.QP.S(
A.aaL(A.fl.Af));this.QP.A2(A.aaL(A.fl.Ak));this.QP.Cu(A.aaL(A.fl.Bi));this.AjW.Aw(
A.aaL(A.ach.Avt));},_Done:function(){this.__proto__=C.Dc;this.QP._Done();this.AjW.
_Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
QP._ReInit();this.AjW._ReInit();this.QP.R(A.aaR(A.acf.Ud));this.QP.S(A.aaL(A.fl.
Af));this.QP.A2(A.aaL(A.fl.Ak));this.QP.Cu(A.aaL(A.fl.Bi));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.AB0={AP:null,SR:null,OV:null,AKt:A.jV,BdP:A.jV,Md:0,Init:function(aArg){},Bk:
function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OV.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OV.M[2]-1,0,this.OV.M[2]+1,
aSize[1]]);this.SR.H([this.OV.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OV.L(this.V.AQ);this.SR.L(this.V.AQ);this.T(this.AKt);this.
OV.R(this.BdP);this.SR.R(this.Md.toFixed());},Cf:function(Ad){if(!this.AX)return;
this.Hn=Ad;if(!!this.AX){var J$=this.AX.KM(Ad,26);var A2z=A._GetAutoObject(A.Device.
Converter).Rf(J$);this.AKt=A.abV(A2z,A2z.length-5);this.BdP=A.ab2(A2z,5);if((A._GetAutoObject(
A.Device.Converter).ZZ(J$)===10)&&!(Math.trunc(J$/10000000000)%100))this.AKt=A.ab1(
this.AKt,3,2);this.Md=this.AX.CE(Ad,1);this.An();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AK._Init.call(this.AP={I:this},0);C.CH._Init.call(this.SR={
I:this},0);C.CH._Init.call(this.OV={I:this},0);this.__proto__=C.AB0;this.V.H(BtU
);this.AP.H(AZT);this.AP.L(A.jb.Bc);this.SR.H(AZU);this.OV.H(BtV);this.J(this.AP
,0);this.J(this.SR,0);this.J(this.OV,0);this.V.S(A.aaL(A.fl.Bi));this.V.A2(A.aaL(
A.fl.Bi));this.SR.S(A.aaL(A.fl.Ak));this.SR.A2(A.aaL(A.fl.Bi));this.SR.Cu(A.aaL(
A.fl.Bi));this.OV.S(A.aaL(A.fl.Af));this.OV.A2(A.aaL(A.fl.Bi));this.OV.Cu(A.aaL(
A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();
this.SR._Done();this.OV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AP._ReInit();this.SR._ReInit();this.OV._ReInit();this.V.
S(A.aaL(A.fl.Bi));this.V.A2(A.aaL(A.fl.Bi));this.SR.S(A.aaL(A.fl.Ak));this.SR.A2(
A.aaL(A.fl.Bi));this.SR.Cu(A.aaL(A.fl.Bi));this.OV.S(A.aaL(A.fl.Af));this.OV.A2(
A.aaL(A.fl.Bi));this.OV.Cu(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListNaisIdAnimalIdItem"};C.APu={Q:null,Init:function(aArg){var
B;this.AAU(this);this.As([B=A._GetAutoObject(A.Device.Device).Am,B.Fk,B.Fo]);},AEF:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E8();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
Nh(FilterCriterion);var Ai3=this.Awa();if((Ai3.length>0)&&(Ai3!==UX)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,Ai3,0,6,false);Filter.CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeU(false);},AAU:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E8(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DL(26,4))?B:null);if(!!FilterCriterion)Filter.Nh(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this
,this.C2],this);},C2:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AW.AS4(A.jV);return;}var AyT=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DL(26,4))?B:null);if(!AyT){this.AW.AS4(UX);this.AW.
AeU(true);}else this.AW.AS4(AyT.A4);},_Init:function(aArg){C.AjS._Init.call(this
,aArg);this.__proto__=C.APu;this.AW.AwF(0);this.AW.Bmp(true);this.AW.Di=[this,this.
AEF];this.Init(aArg);},_Mark:function(D){var B;C.AjS._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVj={Fx:null,C_:null,Dk:null,EM:null,AsM:null,Init:function(aArg){var B;A.zX([
this,this.BeO],[B=A._GetAutoObject(A.Device.Device),B.ASK,B.A0d],0);A.zX([this,this.
Adr],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ],0);A.zX([this,this.Adr],[B=
A._GetAutoObject(A.Device.Device),B.Ug,B.U0],0);A.pe([this,this.BeO],this);A.pe([
this,this.Adr],this);},BeO:function(G){var AaN=false;switch(A._GetAutoObject(A.Device.
Device).An4){case 0:AaN=false;break;case 3:AaN=true;break;default:throw new Error(
BtW+A._GetAutoObject(A.Device.Device).An4.toFixed());}A._GetAutoObject(A.Device.
Helper).JV(this.C_,AaN);A._GetAutoObject(A.Device.Helper).JV(this.Dk,AaN);A._GetAutoObject(
A.Device.Helper).JV(this.EM,AaN);},Adr:function(G){var F,CA;if(((F=this.C_.Q,F[1
].call(F[0]))+(CA=this.Dk.Q,CA[1].call(CA[0])))>12)(CA=this.Dk.Q,CA[2].call(CA[0
],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Ce._Init.call(this
,aArg);C.BW._Init.call(this.Fx={I:this},0);C.Io._Init.call(this.C_={I:this},0);C.
Io._Init.call(this.Dk={I:this},0);C.AvU._Init.call(this.EM={I:this},0);C.AVi._Init.
call(this.AsM={I:this},0);this.__proto__=C.AVj;var B;this.I8(A.aaR(A.acf.UnlinkTransponder
));this.Fx.H(UW);this.Fx.Aj(true);this.Fx.Z(true);this.Fx.T(A.aaR(A.acf.Aqk));this.
Fx.Bh(true);this.C_.H(Alf);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.
AqF));this.C_.Bh(false);this.C_.F_(2);this.C_.EV(6);this.C_.IM(A.aaR(A.acf.OA));
this.C_.I9(A.aaR(A.acf.Ez));this.Dk.H(AcO);this.Dk.Aj(true);this.Dk.T(A.aaR(A.acf.
Zm));this.Dk.Bh(true);this.Dk.F_(0);this.Dk.EV(12);this.Dk.IM(A.aaR(A.acf.OA));this.
Dk.I9(A.aaR(A.acf.Ez));this.EM.H(Aot);this.EM.Ar(true);this.EM.Aj(true);this.EM.
Bh(false);this.EM.Ar1(A.aaR(A.acf.Aqm));this.J(this.Fx,0);this.J(this.C_,0);this.
J(this.Dk,0);this.J(this.EM,0);this.Fx.As([B=this.AsM,B.B8,B.B9]);this.Fx.CI(this.
AsM);this.C_.As([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ]);this.Dk.As([B=A.
_GetAutoObject(A.Device.Device),B.Ug,B.U0]);this.EM.DB(A.aaL(A.ach.AjX));this.EM.
OL([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UZ]);this.EM.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.U0]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ce;this.Fx._Done();this.C_._Done();this.Dk._Done();this.EM._Done();this.AsM._Done(
);C.Ce._Done.call(this);},_ReInit:function(){C.Ce._ReInit.call(this);this.Fx._ReInit(
);this.C_._ReInit();this.Dk._ReInit();this.EM._ReInit();this.AsM._ReInit();this.
I8(A.aaR(A.acf.UnlinkTransponder));this.Fx.T(A.aaR(A.acf.Aqk));this.C_.T(A.aaR(A.
acf.AqF));this.C_.IM(A.aaR(A.acf.OA));this.C_.I9(A.aaR(A.acf.Ez));this.Dk.T(A.aaR(
A.acf.Zm));this.Dk.IM(A.aaR(A.acf.OA));this.Dk.I9(A.aaR(A.acf.Ez));this.EM.Ar1(A.
aaR(A.acf.Aqm));},_Mark:function(D){var B;C.Ce._Mark.call(this,D);if((B=this.Fx).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVi={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bge],[B=A._GetAutoObject(A.Device.Device),B.ASK,B.A0d],0);A.pe([
this,this.Bge],this);},Dn:function(){return 2;},FY:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BH(this.C4(aIndex));},As:function(E){C.Cn.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw7(E);},Bge:function(G){this.Q=A._GetAutoObject(A.Device.Device).An4;A.
abo([this,this.B8,this.B9],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVi;this.Cc.Set(0,0);this.Cc.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cn;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cn.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMH.__proto__=A.Core.Root;C.AB.__proto__=C.Abh;C.WI.__proto__=
A.Core.P;C.Ow.__proto__=A.Core.P;C.ZA.__proto__=A.acl.Gi;C.Ej.__proto__=A.Core.P;
C.X1.__proto__=C.AB;C.AUL.__proto__=C.AB;C.Avr.__proto__=C.AB;C.Q8.__proto__=C.AB;
C.Fj.__proto__=C.Hc;C.Ay.__proto__=A.Core.P;C.Ce.__proto__=C.AB;C.Aq1.__proto__=
C.BR;C.BR.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADb.__proto__=C.AmV;C.AGQ.
__proto__=C.DR;C.Cp.__proto__=C.OU;C.Dt.__proto__=C.Eg;C.Io.__proto__=C.Dt;C.BW.
__proto__=C.Dt;C.SM.__proto__=C.Dt;C.OH.__proto__=C.Cn;C.Rb.__proto__=C.AC;C.AU0.
__proto__=C.Ba;C.Ga.__proto__=A.Core.P;C.Ba.__proto__=C.Cp;C.GW.__proto__=C.AB;C.
ABZ.__proto__=C.Ba;C.Ad6.__proto__=C.AB;C.Mi.__proto__=C.Ow;C.AUV.__proto__=C.AB;
C.Aq0.__proto__=C.ADb;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUB.__proto__=C.Aco;C.EB.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Ass.__proto__=A.Core.P;C.AGC.__proto__=C.Dt;C.CH.__proto__=A.Core.P;C.
AjR.__proto__=C.Yt;C.Amq.__proto__=C.Ra;C.Ahs.__proto__=A.Core.P;C.Ei.__proto__=
C.AB;C.ATO.__proto__=C.AB;C.Ml.__proto__=C.Cp;C.Anf.__proto__=C.Cp;C.OverlayMenu.
__proto__=C.Abh;C.APK.__proto__=C.OverlayMenu;C.GG.__proto__=A.Core.P;C.Abh.__proto__=
A.Core.P;C.AUG.__proto__=A.acl.Aei;C.AmV.__proto__=C.BR;C.ADc.__proto__=C.AmV;C.
Ki.__proto__=C.AC;C.AUD.__proto__=C.Dt;C.AGb.__proto__=C.AB;C.HY.__proto__=C.AB;
C.Wq.__proto__=C.Ars;C.IG.__proto__=C.ADc;C.I0.__proto__=C.AB;C.AMf.__proto__=C.
AGb;C.AMb.__proto__=C.GW;C.ANv.__proto__=C.GW;C.Aem.__proto__=C.Cp;C.Qz.__proto__=
C.Aem;C.APx.__proto__=C.BR;C.AjS.__proto__=C.BR;C.DF.__proto__=C.Ez;C.AW.__proto__=
A.Core.P;C.Gb.__proto__=C.AC;C.Afi.__proto__=C.BW;C.AT5.__proto__=C.AB;C.AbU.__proto__=
C.Cp;C.T9.__proto__=C.Cp;C.ANH.__proto__=C.Ce;C.AU2.__proto__=C.Ce;C.ANU.__proto__=
C.Ce;C.AUf.__proto__=C.Ce;C.WY.__proto__=A.Core.P;C.QS.__proto__=C.Fj;C.D2.__proto__=
A.Core.P;C.T5.__proto__=C.AB;C.AVA.__proto__=C.GW;C.AMg.__proto__=C.AxU;C.AVl.__proto__=
C.Ce;C.AeK.__proto__=C.AC;C.AxU.__proto__=C.AB;C.AVJ.__proto__=C.Ce;C.AUC.__proto__=
C.Aco;C.ABv.__proto__=A.Graphics.Hv;C.Aqg.__proto__=C.AB;C.ARx.__proto__=A.Core.
P;C.Fn.__proto__=C.OverlayMenu;C.XN.__proto__=C.BW;C.Aji.__proto__=C.Cp;C.ALZ.__proto__=
C.Fn;C.Cn.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AL4.__proto__=C.Vt;C.AL5.
__proto__=C.Fn;C.Sc.__proto__=C.T9;C.AMM.__proto__=C.Vt;C.Wi.__proto__=C.Fj;C.Vq.
__proto__=A.Core.P;C.Kt.__proto__=A.Core.P;C.ARV.__proto__=C.HY;C.AT8.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cn;C.ANw.__proto__=C.Amq;C.Hc.__proto__=A.
Core.P;C.AVC.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cn;C.Aa1.
__proto__=C.Gb;C.AxM.__proto__=C.ABv;C.ATJ.__proto__=C.OverlayMenu;C.AOB.__proto__=
A.Core.P;C.N0.__proto__=A.Core.P;C.ATK.__proto__=A.Core.P;C.AUF.__proto__=A.acl.
Aei;C.AkT.__proto__=C.Io;C.Ams.__proto__=C.OverlayMenu;C.AB2.__proto__=C.Ba;C.Yu.
__proto__=C.AjS;C.AqJ.__proto__=C.HY;C.Acn.__proto__=C.Dt;C.WeightRecordingScope.
__proto__=C.AC;C.AuD.__proto__=C.AB;C.AUE.__proto__=C.Io;C.AMd.__proto__=C.AB;C.
Ars.__proto__=C.HY;C.AG$.__proto__=A.Core.P;C.AVF.__proto__=A.Core.P;C.Eg.__proto__=
C.Cp;C.AeM.__proto__=C.Eg;C.AvV.__proto__=C.AeM;C.SetTransponderScreen.__proto__=
C.Q8;C.ADk.__proto__=C.EB;C.AHd.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Me.__proto__=C.Q8;C.ALX.__proto__=C.Me;C.ManualActionScanScreen.__proto__=C.Me;
C.ALY.__proto__=A.Core.P;C.APB.__proto__=C.Dc;C.ADi.__proto__=C.Dc;C.TS.__proto__=
C.Dc;C.APD.__proto__=C.Dc;C.ANa.__proto__=C.Ba;C.M0.__proto__=C.Ba;C.AM_.__proto__=
C.Ba;C.Jo.__proto__=A.Core.P;C.AM9.__proto__=C.Ba;C.AmU.__proto__=C.TD;C.AF3.__proto__=
C.Axf;C.AkH.__proto__=C.Axf;C.Zz.__proto__=C.AkH;C.AND.__proto__=C.OU;C.OU.__proto__=
C.Hc;C.APG.__proto__=C.EB;C.DS.__proto__=A.Core.P;C.AM6.__proto__=C.AjA;C.ADe.__proto__=
C.TT;C.Kh.__proto__=A.Core.P;C.AmC.__proto__=C.Ml;C.AOY.__proto__=C.Km;C.AutoRegistrationMode.
__proto__=C.AC;C.APH.__proto__=C.EB;C.Tx.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMr.__proto__=C.RW;C.AMF.__proto__=C.AaX;C.AMA.__proto__=C.AaX;C.AT7.__proto__=
C.Ba;C.APF.__proto__=C.EB;C.AMu.__proto__=C.AaX;C.IC.__proto__=C.IZ;C.RP.__proto__=
C.Fu;C.RT.__proto__=C.Fu;C.Tw.__proto__=C.JG;C.Qy.__proto__=C.Fu;C.Tv.__proto__=
C.JG;C.AMc.__proto__=C.Aqg;C.AQW.__proto__=C.Ce;C.AaX.__proto__=C.D9;C.Kg.__proto__=
C.Cn;C.ARt.__proto__=C.Ce;C.AMp.__proto__=C.K9;C.AMq.__proto__=C.D9;C.AMn.__proto__=
C.K9;C.AMo.__proto__=C.K9;C.WK.__proto__=C.Eg;C.AUz.__proto__=C.WK;C.RU.__proto__=
C.Fu;C.APw.__proto__=C.IG;C.ANx.__proto__=C.AB;C.ANe.__proto__=C.Ad6;C.AMa.__proto__=
C.I0;C.AVz.__proto__=C.I0;C.AO0.__proto__=C.Km;C.APy.__proto__=C.Km;C.APC.__proto__=
C.TT;C.AM$.__proto__=C.AjA;C.TT.__proto__=C.Dc;C.Aqu.__proto__=A.acv.ACa;C.AjA.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AMX.__proto__=C.DR;C.OZ.__proto__=C.DR;C.AqY.__proto__=
A.Core.P;C.AMw.__proto__=C.Ga;C.AT$.__proto__=A.Core.P;C.K9.__proto__=C.D9;C.ANE.
__proto__=C.Ce;C.Au1.__proto__=C.Cp;C.AC_.__proto__=C.BR;C.AC$.__proto__=C.BR;C.
Fu.__proto__=C.JG;C.AOE.__proto__=C.GW;C.AOD.__proto__=C.I0;C.APc.__proto__=C.Km;
C.ADg.__proto__=C.Dc;C.ABY.__proto__=C.Ba;C.AT6.__proto__=C.Ahs;C.FactoryResetScope.
__proto__=C.Cn;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.AR7.
__proto__=C.Tu;C.AR6.__proto__=C.I0;C.ADa.__proto__=C.Km;C.ABH.__proto__=C.Gb;C.
AL2.__proto__=C.Fn;C.AMe.__proto__=C.AuD;C.NewAnimalSetTransponderScreen.__proto__=
C.Asx;C.C7.__proto__=C.AC;C.OY.__proto__=A.Core.P;C.RQ.__proto__=C.Fu;C.RR.__proto__=
C.Fu;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARE.__proto__=C.OverlayMenu;
C.VM.__proto__=C.T9;C.AvU.__proto__=C.Cp;C.AnimalSingleInfoScreen.__proto__=C.Tx;
C.AnimalMultiInfoScreen.__proto__=C.Tx;C.AMt.__proto__=C.OverlayMenu;C.I5.__proto__=
A.Core.P;C.AL1.__proto__=C.GW;C.AL0.__proto__=C.I0;C.APv.__proto__=C.IG;C.AsH.__proto__=
C.OY;C.Arb.__proto__=C.OY;C.AuX.__proto__=C.AC;C.AMl.__proto__=C.AC;C.AGB.__proto__=
C.Eg;C.G0.__proto__=A.Core.P;C.AQZ.__proto__=C.HI;C.AVq.__proto__=C.X1;C.ARR.__proto__=
C.Wq;C.ADJ.__proto__=C.Le;C.HI.__proto__=C.G0;C.Le.__proto__=C.G0;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvL.__proto__=C.HI;C.AUx.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asx;C.ReasonOfLeaving.__proto__=C.AC;C.OR.__proto__=C.BW;C.AeP.__proto__=
C.Ek;C.ARK.__proto__=C.Ek;C.ARJ.__proto__=C.Ek;C.Ek.__proto__=A.Core.P;C.Q9.__proto__=
C.Eg;C.AQ0.__proto__=C.Le;C.AvK.__proto__=A.Core.P;C.Ez.__proto__=A.Core.P;C.Fw.
__proto__=C.AB;C.AOc.__proto__=C.AB;C.AOf.__proto__=C.Fw;C.AOg.__proto__=C.Fw;C.
AqM.__proto__=C.Fw;C.Abt.__proto__=C.AjR;C.Km.__proto__=C.AjR;C.Avp.__proto__=C.
Abt;C.APa.__proto__=C.Abt;C.AO$.__proto__=C.Abt;C.AO_.__proto__=C.BR;C.Aet.__proto__=
C.EB;C.AmK.__proto__=C.Ba;C.Ajp.__proto__=C.IC;C.ACB.__proto__=A.Core.P;C.AkQ.__proto__=
A.Core.P;C.Ra.__proto__=C.AB;C.AU1.__proto__=C.Ra;C.APb.__proto__=C.BR;C.Dc.__proto__=
C.EB;C.KN.__proto__=C.BR;C.AO6.__proto__=C.KN;C.AO8.__proto__=C.KN;C.Yo.__proto__=
C.AmK;C.Agr.__proto__=C.Hc;C.AN1.__proto__=C.GW;C.AN0.__proto__=C.I0;C.AO9.__proto__=
C.Km;C.Abo.__proto__=C.Acn;C.AjI.__proto__=C.Qz;C.ABS.__proto__=C.Qz;C.APA.__proto__=
C.Dc;C.AM8.__proto__=C.Ba;C.RS.__proto__=C.Fu;C.AMm.__proto__=C.Fu;C.ANS.__proto__=
C.Ei;C.ANT.__proto__=C.Ei;C.AO7.__proto__=C.KN;C.Na.__proto__=C.AbU;C.ANO.__proto__=
C.Ei;C.AO2.__proto__=C.KN;C.PK.__proto__=C.Cp;C.Sd.__proto__=C.AB;C.AOd.__proto__=
C.Sd;C.AOe.__proto__=C.Sd;C.AOh.__proto__=C.AqM;C.AOa.__proto__=C.Fw;C.AaW.__proto__=
C.IC;C.Pi.__proto__=C.IC;C.AMy.__proto__=C.Ams;C.ARr.__proto__=C.T5;C.ARq.__proto__=
C.T5;C.AR2.__proto__=C.Tu;C.AR1.__proto__=C.I0;C.APp.__proto__=C.Km;C.Q4.__proto__=
C.GW;C.AUg.__proto__=C.I0;C.Aeq.__proto__=C.Yt;C.ABX.__proto__=C.Ba;C.ADf.__proto__=
C.Dc;C.APr.__proto__=C.BR;C.AaZ.__proto__=C.NE;C.XU.__proto__=C.NE;C.RW.__proto__=
C.D9;C.XV.__proto__=C.RW;C.XS.__proto__=C.IB;C.AaU.__proto__=C.IB;C.XR.__proto__=
C.IB;C.AaT.__proto__=C.IB;C.AMv.__proto__=C.AB;C.IB.__proto__=C.IZ;C.IZ.__proto__=
C.Hc;C.NE.__proto__=C.Fu;C.Axe.__proto__=C.Zz;C.ANC.__proto__=C.AmC;C.Axg.__proto__=
C.Zz;C.ATW.__proto__=C.Ce;C.ATU.__proto__=C.Ek;C.AQX.__proto__=C.Le;C.ATV.__proto__=
C.Ek;C.NewMenu.__proto__=C.AB;C.ARS.__proto__=C.HY;C.AMx.__proto__=C.Ams;C.AMN.__proto__=
C.Vt;C.JG.__proto__=C.IZ;C.APt.__proto__=C.Yu;C.Abn.__proto__=C.Cn;C.APE.__proto__=
C.EB;C.MotherScanScreen.__proto__=C.Me;C.APs.__proto__=C.Aq0;C.Jc.__proto__=A.Core.
P;C.APo.__proto__=C.BR;C.SetSaveNaisIdScreen.__proto__=C.Q8;C.AN2.__proto__=C.AqJ;
C.UM.__proto__=C.Cn;C.UN.__proto__=C.UM;C.AcK.__proto__=C.UM;C.AdR.__proto__=C.AC;
C.AGA.__proto__=C.Eg;C.ANR.__proto__=C.Ei;C.AO5.__proto__=C.KN;C.ANP.__proto__=C.
Ei;C.AO3.__proto__=C.KN;C.Aq2.__proto__=C.TS;C.APz.__proto__=C.TS;C.Aqv.__proto__=
C.M0;C.AM7.__proto__=C.M0;C.ARL.__proto__=C.AeP;C.Yt.__proto__=C.BR;C.Aco.__proto__=
C.BW;C.FE.__proto__=C.AC;C.AMB.__proto__=C.FE;C.AMC.__proto__=C.FE;C.AMi.__proto__=
C.I0;C.TD.__proto__=C.BW;C.ARU.__proto__=C.AB;C.Asx.__proto__=C.SetTransponderScreen;
C.ADK.__proto__=C.HI;C.Asy.__proto__=C.OR;C.Axr.__proto__=C.OR;C.Acr.__proto__=C.
Cn;C.AVP.__proto__=C.Tu;C.AVO.__proto__=C.I0;C.AQ1.__proto__=A.Core.P;C.AQY.__proto__=
C.HI;C.ACG.__proto__=C.Abo;C.LW.__proto__=A.Core.P;C.AUe.__proto__=C.Ce;C.AUd.__proto__=
C.Ce;C.AVh.__proto__=C.Ce;C.Afn.__proto__=C.Cn;C.I$.__proto__=A.acn.I$;C.AU7.__proto__=
C.AB;C.ATZ.__proto__=C.Q4;C.ADh.__proto__=C.Dc;C.AMV.__proto__=C.Q4;C.AOZ.__proto__=
C.Aeq;C.APq.__proto__=C.Aeq;C.AB1.__proto__=C.Ba;C.AUw.__proto__=C.SM;C.AUA.__proto__=
C.Q9;C.APn.__proto__=C.BR;C.ARC.__proto__=C.Fn;C.ARB.__proto__=C.Fn;C.ARA.__proto__=
C.Fn;C.AL6.__proto__=C.Amr;C.ARG.__proto__=C.T9;C.ATY.__proto__=C.OverlayMenu;C.
VN.__proto__=C.AC;C.AMU.__proto__=C.OverlayMenu;C.AD4.__proto__=C.AC;C.AU6.__proto__=
C.OU;C.AHe.__proto__=C.Cn;C.AUy.__proto__=C.BW;C.Y7.__proto__=C.Cn;C.ANN.__proto__=
C.Ei;C.AO1.__proto__=C.KN;C.ANQ.__proto__=C.Ei;C.AO4.__proto__=C.KN;C.Tu.__proto__=
C.GW;C.AvR.__proto__=C.Vt;C.ADj.__proto__=C.Dc;C.AB0.__proto__=C.Ba;C.APu.__proto__=
C.AjS;C.AVj.__proto__=C.Ce;C.AVi.__proto__=C.Cn;};C._ReInit=function(){var B;if((
B=C.Axv._this))B._ReInit(),C.Axv._ReInit.call(B);if((B=C.Axw._this))B._ReInit(),
C.Axw._ReInit.call(B);if((B=C.A$._this))B._ReInit(),C.A$._ReInit.call(B);if((B=C.
Ph._this))B._ReInit(),C.Ph._ReInit.call(B);if((B=C.AutoActions._this))B._ReInit(
),C.AutoActions._ReInit.call(B);if((B=C.Afe._this))B._ReInit(),C.Afe._ReInit.call(
B);if((B=C.BS._this))B._ReInit(),C.BS._ReInit.call(B);if((B=C.WE._this))B._ReInit(
),C.WE._ReInit.call(B);if((B=C.Asz._this))B._ReInit(),C.Asz._ReInit.call(B);if((
B=C.AnS._this))B._ReInit(),C.AnS._ReInit.call(B);if((B=C.DP._this))B._ReInit(),C.
DP._ReInit.call(B);if((B=C.AuL._this))B._ReInit(),C.AuL._ReInit.call(B);if((B=C.
Amn._this))B._ReInit(),C.Amn._ReInit.call(B);if((B=C.Av0._this))B._ReInit(),C.Av0.
_ReInit.call(B);if((B=C.Av1._this))B._ReInit(),C.Av1._ReInit.call(B);if((B=C.AxW.
_this))B._ReInit(),C.AxW._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Axv._this
)&&(B._cycle!=D))B._Done(C.Axv._this=null);if((B=C.Axw._this)&&(B._cycle!=D))B._Done(
C.Axw._this=null);if((B=C.A$._this)&&(B._cycle!=D))B._Done(C.A$._this=null);if((
B=C.Ph._this)&&(B._cycle!=D))B._Done(C.Ph._this=null);if((B=C.AutoActions._this)&&(
B._cycle!=D))B._Done(C.AutoActions._this=null);if((B=C.Afe._this)&&(B._cycle!=D)
)B._Done(C.Afe._this=null);if((B=C.BS._this)&&(B._cycle!=D))B._Done(C.BS._this=null
);if((B=C.WE._this)&&(B._cycle!=D))B._Done(C.WE._this=null);if((B=C.Asz._this)&&(
B._cycle!=D))B._Done(C.Asz._this=null);if((B=C.AnS._this)&&(B._cycle!=D))B._Done(
C.AnS._this=null);if((B=C.DP._this)&&(B._cycle!=D))B._Done(C.DP._this=null);if((
B=C.AuL._this)&&(B._cycle!=D))B._Done(C.AuL._this=null);if((B=C.Amn._this)&&(B._cycle
!=D))B._Done(C.Amn._this=null);if((B=C.Av0._this)&&(B._cycle!=D))B._Done(C.Av0._this=
null);if((B=C.Av1._this)&&(B._cycle!=D))B._Done(C.Av1._this=null);if((B=C.AxW._this
)&&(B._cycle!=D))B._Done(C.AxW._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */