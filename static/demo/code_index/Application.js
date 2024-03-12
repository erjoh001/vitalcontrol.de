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
var Cc=[0,0,240,320];var BF=[0,0,240,40];var E4=[0,0,20,30];var Hm=[6,21,14,25];var
IQ=[6,15,14,19];var Iq=[6,9,14,13];var O2=[209,7,229,37];var P1=[0,40,240,320];var
P2=[0,228,240,298];var CQ=" ";var E$=[0,40,240,280];var Lu=[0,40,232,280];var P3=[
0,40,116,160];var JZ=[114,40,230,160];var N_=[0,160,116,280];var P4=[116,160,232
,280];var MF=[0,280,116,400];var S4=[116,280,232,400];var UO=[0,400,116,520];var
Z4=[116,400,232,520];var W1=[-1,520,115,640];var Ir=[232,40,240,280];var UP=[5,40
,235,120];var Z5=[120,140,210,230];var W2=[20,140,110,230];var Z6=[0,0,116,120];
var W3=[0,0,120,120];var Z7=[0,0,116,45];var Z8=[0,0,8,200];var UQ=[0,0,8,20];var
W4=[30,0,210,40];var P5=[0,0,40,40];var Z9=[7,8,200,40];var O3=[0,0,200,40];var Ri=[
6,1];var W5="ERROR: Invalid value for ItemHighlighting";var W6=[10,10,40,30];var
W7=[0,0,120,40];var W8=[60,0,180,40];var Z_=[120,0,240,40];var W9=[0,0,100,40];var
W_=[83,0,157,40];var S5=[140,0,240,40];var UR=[0,0,20,40];var US=[220,0,240,40];
var AcM=[0,0,300,30];var S6=[0,30,300,60];var Z$=[0,60,300,90];var Afx=[0,90,300
,120];var Aaa=[0,100,300,110];var W$=[0,50,300,60];var Aab=[0,30,300,40];var Aac=
"*";var AhQ=[40,40];var J0=[0,0,240,80];var Aad=[0,0,240,50];var Lv="Cap";var AhR=[
0,40,40,80];var Aog=[200,40,240,80];var N$=[30,40,210,80];var Xa="--";var Aoh="%d";
var AhS="%m";var AhT="%Y";var AcN=" (";var UT=[0,0,232,80];var Aoi="Date";var Aoj=[
48,40,88,78];var Aok=[39,40,79,80];var Aol=[80,44,87,77];var Afy=".";var Ala=[88
,44,120,77];var AxZ=[120,44,127,77];var Ax0=[127,44,191,77];var O4=[0,0,80,40];var
Rj="Text";var Ax1=[430,102,430,102];var UU=[0,0,240,240];var AsS=[232,0,240,240];
var Ax2=[0,10,240,240];var Ax3="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ax4="Unhandled option";
var Aom=[0,80,240,280];var Afz="Unhandled animal list action";var Aon="Animal list content not handled.";
var IR=[0,40,240,80];var Aoo="Set Selected";var Xb="Unhandled AnimalListInfoItemMode ";
var Alb=" %%";var AsT=[0,180,240,220];var AsU=[82,127,167,150];var AsV="Group";var
AsW=[77,91,167,124];var Alc=[0,0,90,33];var AsX=[4,4,18,29];var Ax5=[20,4,34,29];
var Ax6=[36,4,50,29];var Ax7=[52,4,66,29];var AVP=[68,4,82,29];var AsY="ERROR: Unhandled Device::SyncState";
var Ax8=":\n";var P6="{1}";var Ax9="{2}";var AVQ=[0,49,240,109];var AVR=[0,170,240
,243];var AVS=[0,110,240,170];var AVT=[20,243,220,268];var AHi=[30,8];var AHj="\u2265 ";
var AfA=[0,0,240,160];var Aop=[0,0,0,0];var AVU=[0,0,240,66];var AHk=[10,0,76,66
];var Ald=[33,33];var AHl=[87,0,153,66];var AHm=[164,0,230,66];var AHn="No statistics available";
var AVV="in this environment.";var AVW=" fps";var AVX="CPU: - %%";var AcO=[0,0,240
,120];var AVY=[130,0,237,20];var AHo=[20,0,120,20];var AsZ=[0,20,240,40];var AHp=[
40,20,100,40];var AHq=[100,20,240,40];var Ax_=[0,40,240,60];var AHr=[40,40,100,60
];var Ax$=[100,40,240,60];var AVZ=[0,60,50,80];var AV0=[100,60,240,80];var AV1=[
0,80,50,100];var AV2=[100,80,240,100];var AHs=[0,100,50,120];var AV3=[100,100,240
,120];var O5=[5,5,15,15];var Aya="%H";var AV4="%M";var AV5="Time";var AV6=[79,40
,119,78];var AV7=[125,40,164,80];var AV8=[86,40,126,80];var AV9=":";var AV_=[75,
40,115,80];var Ayb=[0,0,240,150];var As0=[60,0,155,40];var As1=[30,0,65,40];var AV$=[
60,0,100,40];var AWa=[88,0,128,40];var AWb=[60,0,71,40];var AWc=[60,0,74,40];var
AHt=[90,0,123,40];var AWd=[120,0,161,40];var AHu=[120,0,165,40];var AHv=[60,0,88
,40];var AHw=[60,0,95,40];var AWe="Did not expect iterator bigger than number of records";
var AHx=[20,0,240,20];var AHy=[0,38,240,40];var AWf=[0,0,8,4];var Rk=[0,0,240,280
];var Xc=[0,280,240,320];var AWg="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWh="]";var AWi="ERROR: Cannot find closing bracket \'}\' in text [";var AWj=
"] opened at index ";var AWk="#";var AWl="ERROR: Invalid parameter: {";var AWm="}";
var AhU=[20,20];var AHz=[0,12];var AWn="ERROR: Not expected Application::FooterFocus, ";
var AWo="%M:%S";var AHA=[30,150,207,170];var AHB=[20,70,217,194];var Ayc="Unhandled item.";
var P7=[0,80,240,120];var AWp="Unhandled Overlay Menu ";var AWq="Invalid bootloader message: ";
var AWr="Unknown USBState: ";var As2="Invalid fader";var AWs=[2,4,32,40];var AWt=[
29,4,80,40];var AWu=[120,4,200,40];var AWv=[80,0,114,40];var AWw="-1";var AWx="< ";
var As3=[0,0,232,40];var AWy=[22,40,180,80];var AWz=[2,40,22,80];var AWA=[23,40,
163,80];var AWB=[210,40,230,80];var AWC=[164,40,210,80];var AWD=[169,43,205,77];
var AWE="ERROR: No outlet assigned";var AWF="Unhandled screen";var AWG="ERROR: Cannot cache null screen.";
var AWH="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHC="Untreated Rating Method type!";var Ale="Unhandled animal type";var AWI=[
5,60,235,140];var AWJ=[0,130,240,196];var AWK=[49,240,229,280];var Ayd="Implement in derived classes!";
var Alf="Implement in derived class";var AhV=[0,40,230,120];var Aye=[0,120,230,200
];var Aoq=[0,200,230,280];var AhW=[0,280,230,360];var AWL=[0,360,230,440];var Ayf=[
230,40,238,280];var AHD="WARNING: Unhandled filter field: ";var AfB="Should not happen.";
var AHE="Invalid Boolean item";var Aae=[0,120,240,160];var Alg=[0,160,240,200];var
Aor=[0,200,240,240];var AWM=[1152,11,1392,51];var AWN=[1152,51,1392,91];var AWO=[
1152,91,1392,131];var AWP=[1152,131,1392,171];var AWQ=[1152,171,1392,211];var As4=[
0,240,240,280];var AHF=[10,0,240,40];var AHG=[190,0,230,40];var AWR=[60,3,95,39];
var AWS=[95,4,200,40];var AWT=[3,3];var AWU=[6,6];var AWV=[59,5,197,35];var AWW=[
59,2,200,38];var AWX=[3,2,43,42];var AWY=[0,17,43,40];var AWZ=[50,40];var AW0=[50
,0];var AW1="Illegal shifting direction";var Ayg=[0,0,160,30];var AHH=[0,0,25,30
];var AHI=[27,0,52,30];var AHJ=[54,0,79,30];var AHK=[81,0,106,30];var AHL=[108,0
,133,30];var AHM=[135,0,160,30];var AW2="Internal queue error";var AW3="ERROR: No corresponding Id ";
var AW4=" found.";var AW5="ERROR: Error in range test";var AW6=[120,67,210,157];
var AW7=[0,40,240,70];var AW8=[20,67,110,157];var Ayh=[0,160,240,280];var AHN=[20
,77,90,147];var AW9=[0,0,210,40];var AHO=[195,0,235,40];var AhX=[0,40,232,120];var
UV=[0,120,232,200];var AW_=[0,40,232,200];var Aaf=[0,200,232,280];var AW$=[0,320
,240,400];var AXa=[0,120,53,200];var Alh=[0,280,232,360];var Aag="%%";var AcP=[0
,360,232,440];var Ayi=[0,440,232,520];var AXb=[0,80,207,120];var Oa=")";var AHP=
"/";var AXc=[5,0,88,30];var AHQ=[88,0,240,30];var AXd="276000312345678";var AHR=[
5,30,100,60];var AHS=[100,30,240,60];var AXe="Manufacturer";var AXf="Country";var
AXg=[5,60,240,90];var AXh="Niedersachsen";var AXi=[5,90,145,120];var AXj=[140,90
,240,120];var AXk="Protocol";var AXl=[0,0,120,100];var AHT=[0,40,116,120];var AXm=[
40,80,92,107];var AHU=[0,0,50,23];var AHV="ERROR: Unhandled Device::MeasureState";
var Ayj=[0,120,240,280];var AXn=[178,159,248,203];var AXo=[10,145,170,225];var AXp=[
0,61,240,101];var AXq=[0,0,40,23];var AHW=[101,113,141,136];var AXr=[101,235,141
,258];var AXs=[69,288,101,313];var AXt=[0,40,240,200];var As5=[0,200,240,280];var
As6=[0,280,240,360];var AHX="\u2264 ";var AXu=[0,80,94,160];var AXv=[94,80,184,160
];var AXw=[184,80,240,160];var AXx=[197,105,231,139];var AXy=[105,101,173,127];var
AXz=[7,101,75,127];var AXA=[94,125,184,151];var AXB=[2,125,92,151];var AHY=[0,70
,240,101];var AXC=[0,106,240,280];var Ayk=[30,40,240,70];var AHZ=[0,40,30,70];var
AXD="\u278B";var AXE=[0,0,240,175];var AXF=[0,0,232,175];var AXG=[232,0,240,175];
var AXH="Text Here !";var AXI=[200,0,240,40];var AH0="1";var AH1="2";var AH2="3";
var AH3="4";var Ayl=[0,360,232,400];var Aym="ERROR: invalid item class.";var AH4=[
10,220,250,260];var AXJ=[185,0,225,40];var AH5="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXK="ERROR: Received more actions than expected!";var AH6=", ";var AXL=
"ERROR: Cannot set action at position=";var AXM=". Current elements:";var AXN=", max elements:";
var AXO="17";var AXP=[0,0,58,58];var AXQ=[0,0,60,60];var AXR=[30,0,58,20];var AXS=[
7,6,25,24];var AXT=[30,60,130,160];var AXU=[0,0,28,20];var AXV=[4,3,40,24];var AXW=[
0,0,42,27];var Ayn=[0,0,17,17];var AXX="Unknown direction of counting enum value: ";
var AXY="Unknown id generation method enum value: ";var Ayo="Invalid animal id generation method: ";
var As7="Unhandled popup id";var UW="0";var As8=";";var AXZ=[0,400,230,480];var AX0=[
5,120,235,200];var AX1=[0,640,230,760];var AH7=[0,0,300,200];var AX2=[20,40,220,
80];var AH8=[20,80,220,280];var AX3=[140,0,188,40];var AX4="ERROR: Row containing birth weight could not be loaded";
var AX5=[0,440,230,520];var As9="ID";var AX6=[40,40,198,70];var AX7="Extra info: ";
var AH9=" -";var AX8=[0,0,230,120];var AX9=[0,0,230,40];var AX_=[0,80,230,120];var
AX$="\xB0Brix";var AcQ=[0,320,230,400];var AYa=[0,410,230,490];var AYb="ERROR: aNumberOfDays can not be < 0 ";
var AYc="{WEIGHTGAIN} ";var AYd="\xB1";var AH_="+";var AYe="{WEIGHTGAIN}";var AYf=
"{DAYS}";var AYg="ERROR: aString can not be null";var AYh=[166,70,240,114];var AYi=[
0,60,160,120];var AYj=[30,0,240,60];var AH$=[1,6,29,54];var AYk=[30,60,240,120];
var AYl="Con";var AYm=[70,50,170,70];var AIa="Unhandled Device::NaisIdValidationResult: ";
var AIb="Unhandled PopupId";var AYn=[110,123,230,248];var AYo=[5,0,250,40];var AYp=[
102,0,186,40];var AYq=[153,0,240,40];var Rl="-";var As_=[170,0,240,40];var AIc=[
220,0,320,30];var AId=[200,20,300,50];var Aos=[180,0,180,40];var Aot=[170,0,170,
40];var Ayp="Untreated state";var AYr="ERROR: Animal id scanned in an unexpected state : ";
var AIe="ERROR: Null animal id scanned.";var AYs=[40,40,235,100];var AYt=[120,100
,210,190];var AYu=[20,100,110,190];var AYv=[0,40,40,100];var AYw="\u278A";var AYx=
"Action untreated";var AYy="ERROR: No corresponding ";var AYz=" action found!";var
AYA="Unhandled action: ";var AYB=[0,190,240,220];var AYC=[0,220,232,280];var AYD=[
5,190,235,270];var AYE=[232,60];var AYF=[0,2];var AYG=[58,58];var AYH="A";var AYI=[
56,0,156,40];var Aou=[156,0,240,40];var AIf=" 7 ";var AYJ=[40,0,156,40];var AIg=
"/-1/-2";var AIh=[72,0,144,40];var Aah="\n";var AIi="(";var AYK=[72,0,156,40];var
AIj="%y/%m";var AYL=[70,0,240,40];var Ayq=[70,0,120,40];var AYM=[160,0,245,40];var
AYN="- ";var Ayr=" - ";var AYO="{parc}{clr3}";var AYP="{clr0}/^{clr2}";var AYQ="{clr0}/^{clr1}";
var AIk=[0,0,85,40];var Aov="?";var AIl=[0,0,120,140];var AYR=[0,0,116,40];var Ays=[
15,0,100,40];var AIm=[110,0,200,40];var AhY=[0,0,34,34];var AYS=[129,0,157,40];var
Aow=[0,0,25,25];var AYT="\u2611";var AIn="\u2610";var AIo=[5,0,72,40];var AYU=[150
,0,240,40];var AYV=[72,0,139,40];var AIp="Unvalid content class: ";var AYW=[0,320
,240,360];var AYX=[0,360,240,400];var AYY=[144,0,170,40];var AYZ=[187,0,213,40];
var AY0=[207,10,233,50];var AY1=[247,20,273,60];var AY2=[140,0,150,100];var AY3=[
165,0,175,100];var AY4=[185,0,195,100];var AY5=[205,0,215,100];var AY6=[211,0,233
,40];var Aox=[189,0,211,40];var AY7=[167,0,189,40];var AY8=[145,0,167,40];var AIq=[
5,0,240,40];var Aai=[10,0,10,40];var AY9="= \u2211 ";var Ayt=[125,0,240,40];var AY_=[
130,0,170,40];var AY$="\xD8 ";var AIr=[100,10,116,36];var As$=[117,10,133,36];var
AZa=[135,10,151,36];var AZb="Implement in derieved class";var Ata=[0,80,240,240];
var Atb=[0,120,232,160];var Atc=[0,160,232,200];var Atd=[0,200,232,240];var Ayu=[
0,240,232,280];var Aoy=[0,320,232,360];var AZc=[-61,360,232,400];var AZd=[0,400,
32,440];var AZe=[0,100];var AZf=[0,40,240,240];var AZg=[0,50000];var AZh=[0,500];
var AZi=[0,0,240,105];var AZj=[0,105,240,210];var AZk=[0,40,240,81];var AIs=[0,81
,240,122];var AZl=[0,122,240,163];var AIt=[0,163,240,205];var AZm=[0,205,240,240
];var AZn=[0,200];var AIu=[0,40,240,73];var Ayv=[0,0,30,40];var AZo=[0,40,30,80];
var Ayw=[60,40];var Ayx=[60,0];var AZp=[10,0,40,40];var AZq=[0,190,240,260];var AZr=[
0,130,240,190];var AIv=[40,40,200,130];var AZs=[90,230,170,253];var AZt=[80,190,
170,223];var AZu=[0,130,240,180];var AZv=[0,250,240,280];var AZw=[129,0,156,40];
var AZx=[72,0,100,40];var AZy=[100,0,129,40];var AZz=[78,8,103,33];var AIw=[0,0,
300,120];var AZA=[1,-1];var AZB=[20,40,240,120];var AZC=[20,0,240,40];var AZD=[0
,118,240,120];var AZE=[0,20,130,40];var Bqo=[130,20,240,40];var Bqp=[0,0,10,20];
var A$W="\u2191";var Bqq=[230,0,240,20];var AIx=[0,40,232,80];var Bqr=[0,80,232,
160];var Bqs=[0,160,230,240];var AIy=" p. p.";var AZF="Unknown animal type";var AZG=[
80,0,140,40];var Bqt=[50,0,172,40];var Bqu=[172,0,240,40];var Bqv=[0,90,240,92];
var A$X="Unhandled menu item";var A$Y=[0,0,50,30];var Ate=[0,0,30,30];var Bqw="No AnimalActionTemperatureScreen found!";
var Bqx="840003123456789";var Bqy=[40,0,230,40];var Bqz=[50,10,230,30];var AZH="No AnimalMultiInfoScreen found!";
var AIz=[0,0,25,40];var A$Z="/^";var A$0="?/?";var BqA=[100,4,180,40];var BqB=[65
,0,99,40];var BqC=[165,0,200,40];var A$1=[0,0,60,40];var A$2="9999/^9999";var BqD=
"Invalid index: ";var BqE="Unknown AnimalIdGenerationMethod: ";var BqF="Invalid gender: ";
var Atf="Invalid input state: ";var BqG="Unhandled AnimalIdGenerationMethod";var
BqH=[42,35,67,75];var BqI=[5,35,39,75];var BqJ=[70,40,228,70];var BqK="Invalid direction for setting focus";
var AhZ="Invalid index";var BqL="Unvalid direction";var BqM=[0,0,42,30];var A$3=[
22,0,42,30];var BqN=[20,0,40,30];var BqO=[0,0,158,30];var A$4=[32,0,62,30];var A$5=[
64,0,94,30];var A$6=[96,0,126,30];var BqP=[128,0,158,30];var BqQ=" %% ";var BqR=[
0,70,240,220];var BqS=[0,237,240,307];var A$7="\n44 %% done";var BqT=[0,0,166,30
];var AIA=[0,0,12,30];var Ayy=[14,0,26,30];var AZI=[28,0,40,30];var AZJ=[42,0,54
,30];var AZK=[56,0,68,30];var AZL=[70,0,82,30];var AZM=[84,0,96,30];var AZN=[98,
0,110,30];var A$8=[112,0,124,30];var AZO=[126,0,138,30];var BqU=[140,0,152,30];var
BqV=[154,0,166,30];var A$9=[20,0,46,30];var BqW="\u2642";var BqX="{fnt3}\u2642{fnt1}";
var BqY="\u2640";var BqZ="{fnt3}\u2640{fnt1}";var Bq0="{parc}";var Bq1=[30,30,210
,80];var Bq2="Implement in derieved class!";var Bq3=[60,4,226,34];var A$_=[30,4,
58,34];var A$$=[4,0,27,40];var Bq4=[116,4,228,34];var Bq5=[60,4,86,34];var Bq6=[
88,4,114,34];var Aoz="Implement in derived class!";var Baa="Implement in derived class.";
var Bq7="Invalid nais id view: ";var Bq8=[0,35,240,75];var Bq9=[0,0,110,30];var Bq_=[
0,0,26,30];var Bq$="100";var AZP="\n\n";var Bra=[240,240];var Brb=[0,240];var Brc=
"Unknown rated attribute: ";var Brd=[120,80,240,280];var Bre=[0,80,120,280];var AIB=
" %% (";var Ayz=" \xB1 ";var AyA=" (n = ";var AZQ=[0,80,232,120];var Brf=[0,242,
232,282];var AZR=[0,280,232,320];var Brg=[35,0,200,40];var Brh=[1,0,31,40];var Bri=[
32,40];var Brj=[32,0];var Brk=[3,0,83,40];var Bab=[180,0,240,40];var Brl=[120,0,
180,40];var Brm=[65,0,125,40];var Brn=[0,0,120,200];var Bro=[0,40,120,150];var Bac=[
15,160,60,190];var Bad=[60,160,105,190];var Brp=[0,65,240,135];var Brq=[10,112,170
,192];var Brr=[178,129,248,173];var Brs=[0,40,240,110];var Brt=[10,98,170,178];var
Bru=[178,112,248,156];var Brv=[85,190,160,265];var Brw=[89,194,155,260];var Brx=[
26,190,111,250];var Bry=[125,181,225,211];var Brz=[100,220,183,250];var BrA="38.7";
var BrB=[180,220,225,250];var BrC="\xB0C";var BrD=[0,99,240,178];var BrE=[100,280
,140,320];var BrF=[0,26,240,105];var Bae=[30,40];var Baf=[30,0];var BrG=[149,0,200
,40];var BrH=[145,40];var BrI=[145,0];var BrJ=[38,0,88,40];var AZS=[0,0,35,40];var
BrK=[0,0,50,40];var BrL=[40,0,200,40];var BrM=[95,0,145,40];var BrN=[65,5,223,35
];var AZT=[0,0,15,40];var BrO=[72,0,140,40];var Bag="\n(";var BrP="%y/%m/%d";var
BrQ="%y ";var BrR=" %m ";var BrS=" %d ";var BrT="20";var BrU=[225,0,240,40];var BrV=[
0,400,232,440];var BrW=[0,440,232,480];var BrX=[0,480,232,520];var BrY=[0,520,232
,560];var BrZ=[0,560,232,600];var Br0=[0,598,232,638];var Br1=[5,0,215,40];var Br2=[
215,8,240,33];var Br3="Implement in dervied class.";var Br4="ERROR: Unhandled temperature unit: ";
var AIC="ERROR: Unhandled mass unit: ";var Br5=[-1,160,115,280];var Br6=[114,160
,230,280];var AZU=[116,40,232,160];var AyB="Unknown weight class index: ";var Br7=
"< 35";var Br8="35 - 40";var Br9="40 - 45";var Br_="45 - 50";var Br$="\u2265 50";
var Bsa="< 80";var Bsb="80 - 90";var Bsc="90 - 100";var Bsd="100 - 110";var Bse=
"\u2265 110";var Bah="Unknown mass unit";var Bsf=[143,0,193,40];var Bai=[192,0,240
,40];var Bsg=[44,28,44,28];var Bsh="0 %%";var Bsi=[-1,40,115,160];var Bsj=[117,40
,233,160];var Bsk=[1,160,117,280];var Bsl=[114,158,230,278];var Bsm=[1,280,117,400
];var Bsn=[30,0,155,40];var Baj="\u2620";var AZV=[380,150,380,190];var Bak=[105,
0,155,50];var AZW=[190,1,240,41];var Bso=[72,0,108,40];var Bsp=[108,0,180,40];var
Bsq=[60,0,94,40];var Bsr=[94,0,200,40];var Bss="Scroll direction not supported.";
var Bst=[44,0,207,40];var Bsu=[207,0,240,40];var Bsv="99";var Bsw="Unknown birth type";
var Bsx=[44,0,189,40];var Bsy=[5,0,44,40];var Bsz=[44,0,240,40];var BsA=[240,0,240
,40];var BsB="\u25C9";var Bal="\u25CB";var BsC=[75,4,215,34];var BsD=[47,4,73,34
];var Bam=[17,4,45,34];var BsE=[0,0,138,30];var BsF=[47,4,215,34];var AZX="Unhandled MotherSelectionFilterMode: ";
var BsG="Read only!";var BsH="actions array too small to hold all actions";var BsI=[
120,40];var BsJ=[120,0];var BsK=[5,0,115,40];var BsL=[0,0,205,40];var BsM=[59,4,
170,34];var BsN=[59,1,173,37];var BsO=[175,1,205,37];var BsP=[0,0,37,40];var BsQ=[
115,98,205,188];var BsR=[0,40,235,100];var BsS=[2,200,240,280];var BsT=" 01234";
var BsU=[0,0];var BsV=[33,63];var BsW=[25,56];var BsX="Unknown transponder image type: ";
var AID=[0,0,82,82];var BsY=[0,0,81,26];var BsZ=[105,120,195,210];var Bs0=[10,140
,100,230];var Ban="Unhandled EartagNrAssignmentMode: ";var Bs1="Unhandled Gender";
var Bs2=[10,35,35,75];var Bs3=[44,40,202,70];var Bs4=[204,35,232,75];var Bs5="Unvalid FatoryResetScope";
var Bao=[0,120,240,200];var Bs6=[144,0,192,40];var Bs7=[144,0,240,40];var Bs8=[195
,0,245,50];var Bs9=[120,0,120,40];var Bs_=[140,0,240,30];var Bs$=[30,0,232,40];var
Bta=[60,0,160,40];var Btb=[160,0,200,40];var Btc=[150,17,200,40];var Btd=[155,40
];var Bte=[155,0];var Btf=[146,80,240,160];var Btg=[56,80,146,160];var Bth=[0,80
,56,160];var Bti=[13,107,47,141];var Btj=[74,109,104,139];var Btk=[50,100,130,150
];var Btl=[55,112,145,140];var Btm=[146,112,236,140];var Btn=[150,86,223,110];var
AIE=[0,40,240,120];var Bto="Menu item for animal table field not found";var Bap=[
0,360,240,440];var Btp=[0,440,240,520];var Btq=[5,40,235,104];var Btr=[120,108,226
,218];var Bts=[20,120,110,210];var Btt=[5,223,235,280];var Btu=[0,0,64,30];var Btv=[
44,0,64,30];var Btw=[185,5,225,35];var Btx=[170,5,234,35];var Bty="Unhandled number of digits";
var Btz=[0,0,126,30];var BtA=[22,5,149,35];var BtB=[149,0,232,40];var Baq=[5,20];
var BtC=[5,0];var BtD="Unhandled AnimalIdAutoGenerationMethod: ";var BtE=[4,440,
236,520];var BtF="Unhandled TransponderAssignmentIdChangeMethod: ";var BtG="\n";
var BtH="%";var BtI=[0,0,160,120];var BtJ=[2,2,157,117];var BtK=[50,70];var BtL=[
50,50];var BtM="Unhandled data export destination ";var BtN=[0,0,168,40];var BtO=[
168,0,240,40];var BtP=[0,47,232,77];var BtQ=[65,0,101,40];var BtR=[135,0,175,40];
var BtS=[85,17,135,40];var BtT=[125,17,175,40];var BtU=[40,0];var Bar=[0,40,230,
280];var BtV="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BtW="ERROR: Received more animal table fields than expected!";
var BtX=[0,80,240,130];var BtY=[0,80,240,200];var Bas="Unhandled BackupError: ";
var BtZ="Unhandled PopupId: ";var Bt0=[203,0,240,40];var Bt1=[168,0,203,40];var Bt2=[
35,0,152,40];var Bt3=[0,0,84,40];var Bt4=[84,0,167,40];var Bt5="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMD={Device:null,A5O:null,GG:null,Init:function(aArg){},DriveCursorHitting:function(
S8,BG,Fb){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GG._Init.call(this.
GG={I:this},0);this.__proto__=C.AMD;this.H(Cc);this.J(this.GG,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5O=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lw=
this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GG._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GG.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5O)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GG)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A4W._variants();
},K:null,_className:"Application::Application"};C.Ast=[240,320];C.AB={Background:
null,Ej:null,AC5:null,An9:0,Init:function(aArg){A.pe([this,this.A0u],this);A.pe([
this,this.BeA],this);},LO:function(G){},A0u:function(s){this.LO(s);},CF:function(
G){},AIG:function(s){this.CF(s);},E3:function(G){},AyC:function(s){this.E3(s);},
Dq:function(E){if(this.AC5===E)return;this.AC5=E;A.pe([this,this.BeA],this);},BeA:
function(G){var B;if(!!this.AC5)this.Ej.Ab4((C.BS.isPrototypeOf(B=A._NewObject(this.
AC5,0))?B:null));else this.Ej.Ab4(null);},_Init:function(aArg){C.Abi._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ej._Init.call(this.
Ej={I:this},0);this.__proto__=C.AB;this.Background.AZ(0x3F);this.Background.H(Cc
);this.Background.L(A.jb.CS);this.Ej.H(BF);this.Ej.Ar(false);this.J(this.Background
,-1);this.J(this.Ej,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abi;this.
Background._Done();this.Ej._Done();C.Abi._Done.call(this);},_ReInit:function(){C.
Abi._ReInit.call(this);this.Background._ReInit();this.Ej._ReInit();},_Mark:function(
D){var B;C.Abi._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WH={KH:null,Zp:function(E){var B;if(this.KH===E)return;if(!!this.KH)this.AqE(
this.KH,null,null,null,[B=this.KH,B.AyC],null,false);this.KH=E;if(!!this.KH)this.
AkL(this.KH,null,null,null,null,null,null,[B=this.KH,B.AIG],null,false);},AEp:function(
){return this.KH;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WH;this.H([0,0,C.Ast[0],C.Ast[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.KH)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ox={U3:null,Q:null,AnM:null,Zz:null,NO:null,Ov:null,TB:null,TC:null,AF_:255,
Kd:function(G){var F;if(!!this.Q){this.A11();var Ac$=(F=this.Q,F[1].call(F[0]));
if(Ac$>20)this.Ov.L(A.jb.E1);else this.Ov.L(A.jb.Gf);this.Ov.L((this.Ov.AQ&0x00FFFFFF
)|(this.AlI(Ac$,0,30)<<24));this.TB.L((this.TB.AQ&0x00FFFFFF)|(this.AlI(Ac$,31,60
)<<24));this.TC.L((this.TC.AQ&0x00FFFFFF)|(this.AlI(Ac$,61,100)<<24));}},A0s:function(
s){this.Kd(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0s],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0s],E,0);if(!!E)A.pe([this,
this.A0s],this);},A3c:function(G){var F;if(!!this.AnM)this.Zz.Ar((F=this.AnM,F[1
].call(F[0])));else this.Zz.Ar(false);this.A_c(255);},A97:function(E){if(A.aaZ(this.
AnM,E))return;if(!!this.AnM)A.z$([this,this.A3c],this.AnM,0);this.AnM=E;if(!!E)A.
zX([this,this.A3c],E,0);if(!!E)A.pe([this,this.A3c],this);},A_c:function(E){if(this.
AF_===E)return;this.AF_=E;if(!!this.U3)this.U3.L((this.U3.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlI:function(A0y,BbQ,Bxa){if(A0y<BbQ)return 0;else if((A0y>=BbQ)&&(A0y<
Bxa))return this.AF_&0xFF;else return 255;},A11:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U3=this.TC;else if((F=this.Q,F[1].call(F[0]))>
30)this.U3=this.TB;else this.U3=this.Ov;}else this.U3=null;},BkS:function(){return this.
AF_;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.Zz._Init.call(this.Zz={
I:this},0);A.acg.Ap._Init.call(this.NO={I:this},0);A.acg.AL._Init.call(this.Ov={
I:this},0);A.acg.AL._Init.call(this.TB={I:this},0);A.acg.AL._Init.call(this.TC={
I:this},0);this.__proto__=C.Ox;this.H(E4);this.Zz.Fl(2000);this.NO.H(E4);this.NO.
L(A.jb.Text);this.Ov.H(Hm);this.Ov.L(A.jb.E1);this.TB.H(IQ);this.TB.L(A.jb.E1);this.
TC.H(Iq);this.TC.L(A.jb.E1);this.J(this.NO,0);this.J(this.Ov,0);this.J(this.TB,0
);this.J(this.TC,0);this.Zz.Q=[this,this.BkS,this.A_c];this.NO.Aw(A.aaL(A.ach.AMO
));},_Done:function(){this.__proto__=A.Core.P;this.Zz._Done();this.NO._Done();this.
Ov._Done();this.TB._Done();this.TC._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Zz._ReInit();this.NO._ReInit();this.Ov._ReInit(
);this.TB._ReInit();this.TC._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnM)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Zz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.Zz={_Init:function(aArg){A.acl.Gh._Init.call(
this,aArg);this.__proto__=C.Zz;this.AkW=true;this.B2=0;this.Cw=255;},_className:
"Application::PulseAnimation"};C.Ej={GG:null,AR:null,Background:null,Ox:null,Bo:
null,Dm:null,K7:0,Avh:0,Avi:0,Ao2:0,LI:false,KE:false,Qn:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20);
var GA=this.Bo.Bw;if(!G$){this.Ao2=A.jb.CS;this.K7=A.jb.Text;}else if(GA){this.Ao2=
this.Avh;this.K7=this.Avi;}else if(Fq){this.Ao2=this.Avh;this.K7=this.Avi;}else{
this.Ao2=A.jb.CS;this.K7=A.jb.Text;}this.Background.L(this.Ao2);if(!!this.GG){this.
GG.Ww(this.Ao2);this.GG.De(this.K7);}this.LI=G$;this.KE=Fq;this.Qn=GA;},Qm:function(
G){this.Am();A.pe(this.AR,this);},AiO:function(G){if(this.Dm.Aci)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab4:function(
E){if(this.GG===E)return;if(!!this.GG)this.HN(this.GG);this.GG=E;if(!!this.GG)this.
J(this.GG,0);this.Bb(E);this.Am();},A9Q:function(E){if(this.Avh===E)return;this.
Avh=E;this.Am();},A9R:function(E){if(this.Avi===E)return;this.Avi=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.Ox._Init.call(this.Ox={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BN._Init.call(this.Dm={I:this},0);this.__proto__=C.Ej;var B;this.
H(BF);this.Background.AZ(0x3F);this.Background.H(BF);this.Background.L(A.jb.CS);
this.Ox.H(O2);this.K7=A.jb.Text;this.Bo.PO(0);this.Bo.Wx(50);this.Dm.Filter=1;this.
Avh=A.jb.AV;this.Avi=A.jb.Bm;this.Ao2=A.jb.Text;this.J(this.Background,0);this.J(
this.Ox,0);this.Ox.As([B=A._GetAutoObject(A.Device.Device),B.Av6,B.AyD]);this.Ox.
A97([B=A._GetAutoObject(A.Device.Device),B.Av9,B.AyE]);this.Bo.Mx=[this,this.Qm];
this.Dm.BO=[this,this.AiO];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Ox._Done();this.Bo._Done();this.Dm._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
Ox._ReInit();this.Bo._ReInit();this.Dm._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ox)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X1={AeK:null,Uy:null,CF:function(G){if(this.K&&this.K.CF
)return this.K.CF.apply(this,arguments);else return C.AB.CF.apply(this,arguments
);},E3:function(G){if(this.K&&this.K.E3)return this.K.E3.apply(this,arguments);else
return C.AB.E3.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeK={I:this},0);A.acg.Text._Init.call(this.Uy={I:
this},0);this.__proto__=C.X1;this.AeK.H(P1);this.Uy.H(P2);this.Uy.R(A.jV);this.Uy.
L(A.jb.Text);this.Uy.Z(false);this.J(this.AeK,0);this.J(this.Uy,0);this.AeK.Aw(null
);this.Uy.S(A.aaL(A.fl.EK));var Lw=this._variants();if(Lw){this.K={};Lw._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeK._Done();this.Uy._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeK._ReInit();this.Uy._ReInit();this.Uy.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uy)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
X1._variants();},K:null,_className:"Application::BootScreen"};C.AUK={AAz:function(
G){A._GetAutoObject(C.A$).Ahp(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUK;this.Background.L(0xFF000000);this.Ej.Z(false);},_className:
"Application::SleepScreen"};C.Avu={DY:null,Y:null,Yb:null,Yc:null,VD:null,X4:null
,VE:null,X2:null,X7:null,TG:null,X6:null,Yd:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Art,B.Atg],0);A._GetAutoObject(A.Device.Helper).AkO();this.Bb(this.VD);this.
N.Cs(A.aaL(A.ach.ADA));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A2M=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A2M)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJV=A._NewObject(A.acl.AF7,0);AJV.Fl(250);AJV.HM(1);AJV.WC(6);this.
Y.HD(this.AV,true,AJV,null);}},CF:function(G){this.A4g(this);A._GetAutoObject(A.
Device.Device).An.Bl(null);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(
A.Device.Helper).AkO();A._GetAutoObject(A.Device.Helper).Asn();},Fe:function(G){
var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.
Ay.Mv(-this.Y.Br[1]);},If:function(G){var Cx=(C.Fi.isPrototypeOf(G)?G:null);if(!
Cx)return;if(Cx===this.VD)A._GetAutoObject(C.A$).Cg(35);else if(Cx===this.X4)A._GetAutoObject(
C.A$).Cg(34);else if(Cx===this.X7)A._GetAutoObject(C.A$).Cg(69);else if(Cx===this.
VE)A._GetAutoObject(C.A$).Cg(8);else if(Cx===this.X2)A._GetAutoObject(C.A$).Cg(50
);else if(Cx===this.TG)A._GetAutoObject(C.A$).Cg(25);else if(Cx===this.Yb)A._GetAutoObject(
C.A$).Cg(77);else if(Cx===this.Yc)A._GetAutoObject(C.A$).Cg(70);else if(Cx===this.
Yd)A._GetAutoObject(C.A$).Cg(6);else if(Cx===this.X6)A._GetAutoObject(C.A$).Cg(63
);},BAj:function(G){A._GetAutoObject(A.Device.Device).AeZ(!A._GetAutoObject(A.Device.
Device).AmQ);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmQ)this.N.Hu((
A.aaR(A.acf.A7k)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hu((A.aaR(A.acf.
A7k)+CQ)+A.aaR(A.acf.A71).toLowerCase());},XB:function(G){A._GetAutoObject(A.Device.
Device).Ds(1);},A4g:function(G){A._GetAutoObject(A.Device.Device).An.Bl(A._GetAutoObject(
A.Device.Helper).Mo());this.VE.Zv(A._GetAutoObject(A.Device.Device).An.Ca().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fi._Init.call(this.Yb={I:this
},0);C.Fi._Init.call(this.Yc={I:this},0);C.Fi._Init.call(this.VD={I:this},0);C.Fi.
_Init.call(this.X4={I:this},0);C.QR._Init.call(this.VE={I:this},0);C.Fi._Init.call(
this.X2={I:this},0);C.Fi._Init.call(this.X7={I:this},0);C.Fi._Init.call(this.TG={
I:this},0);C.Fi._Init.call(this.X6={I:this},0);C.Fi._Init.call(this.Yd={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avu;this.Background.L(A.
jb.CS);this.N.Ar(false);this.N.Z(true);this.Dq(C.AqZ);this.DY.AZ(0x3F);this.DY.H(
E$);this.DY.L(A.jb.CK);this.Y.H(Lu);this.Y.JP(9);this.Yb.H(P3);this.Yb.Aj(true);
this.Yb.T(A.aaR(A.acf.Gm));this.Yc.H(JZ);this.Yc.Aj(true);this.Yc.T(A.aaR(A.acf.
A7H));this.VD.H(N_);this.VD.Aj(true);this.VD.T(A.aaR(A.acf.Vq));this.X4.H(P4);this.
X4.Aj(true);this.X4.T(A.aaR(A.acf.Tt));this.VE.H(MF);this.VE.Aj(true);this.VE.T(
A.aaR(A.acf.APE));this.X2.H(S4);this.X2.Aj(true);this.X2.T(A.aaR(A.acf.Animal));
this.X7.H(JZ);this.X7.Aj(true);this.X7.T(A.aaR(A.acf.A7n));this.TG.H(UO);this.TG.
Ar(true);this.TG.Aj(true);this.TG.Z(true);this.TG.T(A.aaR(A.acf.A5_));this.X6.H(
Z4);this.X6.Aj(true);this.X6.T(A.aaR(A.acf.Device));this.Yd.H(W1);this.Yd.Aj(true
);this.Yd.T(A.aaR(A.acf.Settings));this.Ay.H(Ir);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.Yb,0);this.J(this.Yc,0);this.J(this.VD,0);this.J(this.X4,0);this.
J(this.VE,0);this.J(this.X2,0);this.J(this.X7,0);this.J(this.TG,0);this.J(this.X6
,0);this.J(this.Yd,0);this.J(this.Ay,0);this.N.CB=[this,this.BAj];this.N.Ck=[this
,this.XB];this.Y.El=[this,this.Fe];this.Yb.AR=[this,this.If];this.Yb.DB(A.aaL(A.
ach.ADE));this.Yc.AR=[this,this.If];this.Yc.DB(A.aaL(A.ach.ADH));this.VD.AR=[this
,this.If];this.VD.DB(A.aaL(A.ach.API));this.X4.AR=[this,this.If];this.X4.DB(A.aaL(
A.ach.APT));this.VE.AR=[this,this.If];this.VE.DB(A.aaL(A.ach.AQf));this.X2.AR=[this
,this.If];this.X2.DB(A.aaL(A.ach.APL));this.X7.AR=[this,this.If];this.X7.DB(A.aaL(
A.ach.AQm));this.TG.AR=[this,this.If];this.TG.DB(A.aaL(A.ach.AP6));this.X6.AR=[this
,this.If];this.X6.DB(A.aaL(A.ach.AP3));this.Yd.AR=[this,this.If];this.Yd.DB(A.aaL(
A.ach.AQE));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.Yb._Done();this.Yc._Done();this.VD._Done();this.X4._Done();
this.VE._Done();this.X2._Done();this.X7._Done();this.TG._Done();this.X6._Done();
this.Yd._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Yb._ReInit();this.Yc.
_ReInit();this.VD._ReInit();this.X4._ReInit();this.VE._ReInit();this.X2._ReInit(
);this.X7._ReInit();this.TG._ReInit();this.X6._ReInit();this.Yd._ReInit();this.Ay.
_ReInit();this.Yb.T(A.aaR(A.acf.Gm));this.Yc.T(A.aaR(A.acf.A7H));this.VD.T(A.aaR(
A.acf.Vq));this.X4.T(A.aaR(A.acf.Tt));this.VE.T(A.aaR(A.acf.APE));this.X2.T(A.aaR(
A.acf.Animal));this.X7.T(A.aaR(A.acf.A7n));this.TG.T(A.aaR(A.acf.A5_));this.X6.T(
A.aaR(A.acf.Device));this.Yd.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q8={Number:null,Jc:null,IP:null,Tz:null,AsJ:0,Init:function(aArg){var B;A.zX([
this,this.Bbt],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.AZ$],0);A.pe([this,this.
Bbt],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An_();},CF:function(G){A.
_GetAutoObject(A.Device.Device).AhE();},E3:function(G){A._GetAutoObject(A.Device.
Device).An1();},Al3:function(G){var F;this.Am();this.Tz.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aek.Ar(true);if(!this.Tz.Bw)(F=this.Tz.Q,F[2].call(F[0],this.Tz.
B2));},Bbt:function(s){this.Al3(s);},An_:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gf);break;case 3:this.Background.
L(A.jb.H6);break;default:this.Background.L(A.jb.CK);}},AkF:function(E){if(this.AsJ===
E)return;this.AsJ=E;this.Jc.AkF(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jc._Init.call(this.Jc={I:this}
,0);A.acg.Ap._Init.call(this.IP={I:this},0);A.acl.Gh._Init.call(this.Tz={I:this}
,0);this.__proto__=C.Q8;var B;this.Background.L(A.jb.CK);this.N.Z(false);this.Number.
H(UP);this.Number.KS(true);this.Number.L(A.jb.Text);this.Jc.H(Z5);this.Jc.AkF(0);
this.IP.H(W2);this.IP.L(A.jb.AV);this.IP.Zq(true);this.Tz.Fl(1750);this.Tz.Uk(750
);this.Tz.AkA(0);this.Tz.Ar(true);this.Tz.B2=3;this.J(this.Number,0);this.J(this.
Jc,0);this.J(this.IP,0);this.Number.S(A.aaL(A.fl.Af));this.IP.Aw(A.aaL(A.ach.ADG
));this.Tz.Q=[B=this.IP,B.ASm,B.Cv];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jc._Done();this.IP._Done();this.Tz._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jc._ReInit();this.IP._ReInit();this.Tz._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fi={C8:null,ADq:null,AR:null,Bo:null,Dm:null,Background:
null,Mn:null,OC:null,QX:null,G4:null,A5l:true,LI:false,KE:false,Qn:false,Init:function(
aArg){},Bk:function(aSize){var B;C.Hc.Bk.call(this,aSize);this.Mn.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.QX.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OC.H(this.QX.M);this.G4.H([].concat(0,this.G4.M.slice(1,4)));this.G4.H(A.abN(
this.G4.M,aSize[0]));this.G4.H(A.abP(this.G4.M,0));this.G4.H([].concat(this.G4.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hc.Ai.call(this,Ae);var G$=((Ae&0x10)===
0x10);var Fq=((Ae&0x20)===0x20);var GA=this.Bo.Bw;if(!G$){this.QX.L(A.jb.Am4);this.
G4.L(A.jb.CK);this.OC.Z(true);this.OC.L(A.jb.AQR);this.Mn.Z(false);}else if(GA){
this.QX.L(A.jb.Bm);this.G4.L(A.jb.Bm);this.OC.Z(false);this.Mn.Z(true);}else if(
Fq){this.QX.L(A.jb.Bm);this.G4.L(A.jb.Bm);this.OC.Z(false);this.Mn.Z(true);}else{
this.QX.L(A.jb.Text);this.G4.L(A.jb.Text);this.OC.Z(true);this.OC.L(A.jb.CS);this.
Mn.Z(false);}this.LI=G$;this.KE=Fq;this.Qn=GA;},Qm:function(G){this.Am();A.pe(this.
AR,this);},AiO:function(G){if(this.Dm.Aci)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G4.R(E);},DB:function(E){if(this.C8===E)return;this.C8=E;this.QX.
Aw(E);this.OC.Aw(E);},Ab3:function(E){if(this.A5l===E)return;this.A5l=E;this.G4.
Z(E);},Ab6:function(E){if(this.ADq===E)return;this.ADq=E;this.Mn.Aw(E);this.Mn.H(
A.abK(this.Mn.M,E.FrameSize));},_Init:function(aArg){C.Hc._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BN._Init.call(this.Dm={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mn={
I:this},0);A.acg.Ap._Init.call(this.OC={I:this},0);A.acg.Ap._Init.call(this.QX={
I:this},0);C.CH._Init.call(this.G4={I:this},0);this.__proto__=C.Fi;this.H(Z6);this.
Bo.PO(0);this.Bo.Wx(50);this.Dm.Filter=1;this.Background.H(W3);this.Background.Z(
false);this.Mn.AZ(0x14);this.Mn.L(A.jb.AV);this.Mn.Cv(0);this.OC.L(A.jb.CS);this.
OC.Cv(1);this.G4.H(Z7);this.J(this.Background,0);this.J(this.Mn,0);this.J(this.OC
,0);this.J(this.QX,0);this.J(this.G4,0);this.Bo.Mx=[this,this.Qm];this.Dm.BO=[this
,this.AiO];this.Mn.Aw(A.aaL(A.ach.NS));this.OC.Aw(A.aaL(A.ach.AvH));this.QX.Aw(A.
aaL(A.ach.AvH));this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(
A.aaL(A.fl.Bh));this.ADq=A.aaL(A.ach.NS);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hc;this.Bo._Done();this.Dm._Done();this.Background._Done();this.Mn._Done(
);this.OC._Done();this.QX._Done();this.G4._Done();C.Hc._Done.call(this);},_ReInit:
function(){C.Hc._ReInit.call(this);this.Bo._ReInit();this.Dm._ReInit();this.Background.
_ReInit();this.Mn._ReInit();this.OC._ReInit();this.QX._ReInit();this.G4._ReInit(
);this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axe:null,Background:null,OY:null,Asf:0,Ak7:10,AjC:100,AQ:0,AoV:true,Bk:function(
aSize){A.Core.P.Bk.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OY.H([].concat(2,this.OY.M.slice(1,4)));this.OY.H(A.abN(this.OY.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af0=this.Ak7<this.AjC;var AJs=(
B=this.M)[3]-B[1];var A2z=10;var Aum=AJs;var A4d=0;if(10>AJs)A2z=AJs;if(this.Ak7<
this.AjC)Aum=((Aum*this.Ak7)/this.AjC)|0;if(Aum<A2z)Aum=A2z;if(this.Ak7<this.AjC
)A4d=((this.BkR()*(AJs-Aum))/(this.AjC-this.Ak7))|0;this.OY.H(A.abP(this.OY.M,A4d
));this.OY.H([].concat(this.OY.M.slice(0,3),A4d+Aum));this.OY.Z(Af0);this.Background.
Z(Af0);if(!!this.Axe&&(this.AoV!==Af0))A.pe(this.Axe,this);this.AoV=Af0;},BkR:function(
){var E=this.Asf;var Hz=this.AjC-this.Ak7;if((Hz>0)&&(E>Hz))E=Hz;if(Hz<=0)E=0;return E;
},Mv:function(E){if(E<0)E=0;if(this.Asf===E)return;this.Asf=E;this.Am();},Mw:function(
E){if(E<0)E=0;if(this.Ak7===E)return;this.Ak7=E;this.Am();},Mu:function(E){if(E<
0)E=0;if(this.AjC===E)return;this.AjC=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OY.L(E);},BmY:function(E){if(A.aa0(this.Axe,E))return;this.
Axe=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.OY={I:this},0);this.__proto__=
C.Ay;this.H(Z8);this.Ar(false);this.AQ=A.jb.AV;this.Background.AZ(0x0);this.Background.
H(UQ);this.Background.L(A.jb.CS);this.OY.AZ(0x0);this.OY.H(UQ);this.OY.L(A.jb.AV
);this.J(this.Background,0);this.J(this.OY,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.OY._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.OY._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axe)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cd={Hd:null,Y:null,Ay:null,Ap:null,A6P:A.jV,Init:function(aArg){A.pe([this,this.
AA6],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);this.AA6(this);},AlZ:
function(G){if(!!this.N.CB)A.pe(this.N.CB,this);},ApL:function(G){if(!!this.N.Cl
)A.pe(this.N.Cl,this);},AAz:function(G){if(!!this.N.Ck)A.pe(this.N.Ck,this);},Fe:
function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[
3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);A.pe([this,this.BAF],this);},AA6:function(G){
var B;var GS=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hu(A.jV);this.N.CY(A.
aaL(A.ach.VZ));this.N.CB=[this,this.Ev];if(!!GS&&!!GS.Amn){this.N.FJ(A.jV);this.
N.Kw.Dr(255);this.N.ArN(GS.AqP);this.N.Cs(GS.AvE);this.N.Ck=GS.Amn;}else{this.N.
FJ(A.jV);this.N.Cs(null);this.N.Ck=null;}if(!!GS&&!!GS.Agn){this.N.CV(GS.AxI);this.
N.HQ.Dr(GS.Axf);this.N.AnA(GS.AmS);this.N.C6(GS.Aq5);this.N.Cl=GS.Agn;}else{this.
N.CV(A.jV);this.N.C6(null);this.N.Cl=null;}},I8:function(E){if(this.A6P===E)return;
this.A6P=E;this.Hd.R(E);},Ev:function(G){A._GetAutoObject(C.A$).Fv();},BAF:function(
G){var B;var BzE=this.Ay.Background.Fk();var BdD=(BzE?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajd=X;
X=X.Ah;if(((Ajd.U&0x400)===0x400)){if(!!(A.Core.Akg.isPrototypeOf(Ajd)?Ajd:null)
){var BdJ=(A.Core.Akg.isPrototypeOf(Ajd)?Ajd:null);BdJ.DC([BdD,BdJ.EC[1]]);}else
if(!!(A.Core.Es.isPrototypeOf(Ajd)?Ajd:null)){var BfD=(A.Core.Es.isPrototypeOf(Ajd
)?Ajd:null);BfD.H(A.abN(BfD.M,BdD));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CH._Init.call(this.Hd={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cd;this.N.Z(true);this.Hd.H(W4);this.Hd.Ar(false);this.Hd.R(A.aaR(A.
acf.Settings));this.Hd.L(A.jb.Text);this.Y.H(E$);this.Y.JP(1);this.Ay.H(Ir);this.
Ap.H(P5);this.Ap.L(A.jb.Text);this.J(this.Hd,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ij));this.Y.
El=[this,this.Fe];this.Ap.Aw(A.aaL(A.ach.AC9));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hd._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hd._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hd.R(A.aaR(A.acf.Settings
));this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ij));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.AqZ={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bgy],[B=
A._GetAutoObject(A.Device.Helper),B.UX,B.U0],0);},De:function(E){C.BS.De.call(this
,E);this.Text.L(E);},Bgy:function(G){this.Text.R(A._GetAutoObject(A.acj.KK).Bin(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BS._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AqZ;this.Timer.Wx(1);this.Timer.Ar(true);
this.Text.H(Z9);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.Mx=[this,this.Bgy
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BS;this.Timer._Done();this.Text._Done();C.BS._Done.call(this);},_ReInit:function(
){C.BS._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BS={KT:0xFFFFFFFF,LS:0,De:function(E){if(
this.KT===E)return;this.KT=E;},Ww:function(E){if(this.LS===E)return;this.LS=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BS;this.H(O3
);},_className:"Application::HeaderContent"};C.N={VQ:null,VS:null,VT:null,AgV:null
,AgW:null,AgX:null,CB:null,Ck:null,Cl:null,Background:null,NG:null,Ja:null,Kw:null
,HQ:null,Pv:null,I4:null,Le:null,TW:null,TX:null,An4:A.jV,An5:A.jV,An6:A.jV,Aq6:
0,Aq7:0,Aq8:0,Ahc:0,ZC:false,ZB:false,Asl:false,Asz:false,Asy:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VQ)this.Ja.S(this.VQ);if(!!this.VS)this.Kw.S(this.
VS);if(!!this.VT)this.HQ.S(this.VT);switch(this.Ahc){case 0:{this.NG.Z(false);this.
Ja.L(A.jb.Bm);this.Kw.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Pv.L(A.jb.Bm);this.I4.L(
A.jb.Bm);this.Le.L(A.jb.Bm);}break;case 1:{if(!this.AgV)this.NG.H(A.aaT(this.Ja.
ASd(),Ri));else this.NG.H(this.Pv.Db());this.NG.Z(true);this.Ja.L(A.jb.Text);this.
Kw.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Pv.L(A.jb.Text);this.I4.L(A.jb.Bm);this.Le.
L(A.jb.Bm);}break;case 3:{if(!this.AgX)this.NG.H(A.aaT(this.HQ.ASd(),Ri));else this.
NG.H(this.Le.Db());this.NG.Z(true);this.Ja.L(A.jb.Bm);this.Kw.L(A.jb.Bm);this.HQ.
L(A.jb.Text);this.Pv.L(A.jb.Bm);this.I4.L(A.jb.Bm);this.Le.L(A.jb.Text);}break;case
2:{if(!this.AgW)this.NG.H(A.aaT(this.Kw.ASd(),Ri));else this.NG.H(this.I4.Db());
this.NG.Z(true);this.Ja.L(A.jb.Bm);this.Kw.L(A.jb.Text);this.HQ.L(A.jb.Bm);this.
Pv.L(A.jb.Bm);this.I4.L(A.jb.Text);this.Le.L(A.jb.Bm);}break;default:{this.NG.Z(
false);A.ab5("%s",W5);}}if(!!this.Pv.Al){this.Pv.Z(true);this.Ja.Z(false);}else{
this.Pv.Z(false);this.Ja.Z(true);}if(this.An5.length<=0){this.I4.Z(true);this.Kw.
Z(false);}else{this.I4.Z(false);this.Kw.Z(true);}if(!!this.Le.Al){this.Le.Z(true
);this.HQ.Z(false);}else{this.Le.Z(false);this.HQ.Z(true);}},Hu:function(E){if(this.
An4===E)return;this.An4=E;this.Ja.R(E);this.Am();},FJ:function(E){if(this.An5===
E)return;this.An5=E;this.Kw.R(E);this.Am();},CV:function(E){if(this.An6===E)return;
this.An6=E;this.HQ.R(E);this.Am();},AFd:function(E){if(this.Ahc===E)return;this.
Ahc=E;this.Am();},AE6:function(E){if(this.VQ===E)return;this.VQ=E;this.Ja.S(E);this.
Am();},ArN:function(E){if(this.VS===E)return;this.VS=E;this.Kw.S(E);this.Am();},
AnA:function(E){if(this.VT===E)return;this.VT=E;this.HQ.S(E);this.Am();},A3r:function(
G){this.Am();},CY:function(E){if(this.AgV===E)return;this.AgV=E;this.Pv.Aw(E);this.
Am();},Cs:function(E){if(this.AgW===E)return;this.AgW=E;this.I4.Aw(E);this.Am();
},C6:function(E){if(this.AgX===E)return;this.AgX=E;this.Le.Aw(E);this.Am();},OO:
function(E){if(this.Asy===E)return;this.Asy=E;this.TW.Z(E);if(E)this.Ja.H([].concat(
this.TW.M[2],this.Ja.M.slice(1,4)));else this.Ja.H([].concat(0,this.Ja.M.slice(1
,4)));this.Am();},OP:function(E){if(this.Asz===E)return;this.Asz=E;this.TX.Z(E);
if(E)this.HQ.H(A.abN(this.HQ.M,this.TX.M[0]));else this.HQ.H(A.abN(this.HQ.M,this.
M[2]));this.Am();},Bmk:function(E){if(this.Aq6===E)return;this.Aq6=E;this.Pv.Cv(
E);this.Am();},AS1:function(E){if(this.Aq7===E)return;this.Aq7=E;this.I4.Cv(E);this.
Am();},A9V:function(E){if(this.Aq8===E)return;this.Aq8=E;this.Le.Cv(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NG={I:this},0);C.CH._Init.call(this.Ja={I:this
},0);C.CH._Init.call(this.Kw={I:this},0);C.CH._Init.call(this.HQ={I:this},0);A.acg.
Ap._Init.call(this.Pv={I:this},0);A.acg.Ap._Init.call(this.I4={I:this},0);A.acg.
Ap._Init.call(this.Le={I:this},0);A.acg.Ap._Init.call(this.TW={I:this},0);A.acg.
Ap._Init.call(this.TX={I:this},0);this.__proto__=C.N;this.H(BF);this.Background.
AZ(0x3F);this.Background.H(BF);this.Background.L(A.jb.Ad9);this.NG.H(W6);this.NG.
L(A.jb.CS);this.NG.Z(false);this.Ja.AZ(0x14);this.Ja.H(W7);this.Ja.A6(0x12);this.
Kw.AZ(0x14);this.Kw.H(W8);this.Kw.A6(0x12);this.HQ.H(Z_);this.Pv.H(W9);this.I4.H(
W_);this.Le.H(S5);this.Le.Z(false);this.TW.H(UR);this.TW.Z(false);this.TX.H(US);
this.TX.Z(false);this.J(this.Background,0);this.J(this.NG,0);this.J(this.Ja,0);this.
J(this.Kw,0);this.J(this.HQ,0);this.J(this.Pv,0);this.J(this.I4,0);this.J(this.Le
,0);this.J(this.TW,0);this.J(this.TX,0);this.Ja.S(A.aaL(A.fl.Ak));this.Ja.A2(A.aaL(
A.fl.Bh));this.Ja.Q1([this,this.A3r]);this.Kw.S(A.aaL(A.fl.Ak));this.Kw.A2(A.aaL(
A.fl.Bh));this.Kw.Q1([this,this.A3r]);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(
A.fl.Bh));this.HQ.Q1([this,this.A3r]);this.VQ=A.aaL(A.fl.Ak);this.VS=A.aaL(A.fl.
Ak);this.VT=A.aaL(A.fl.Ak);this.Pv.Aw(null);this.I4.Aw(null);this.Le.Aw(null);this.
TW.Aw(A.aaL(A.ach.AMG));this.TX.Aw(A.aaL(A.ach.Ajq));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.P;this.Background._Done();this.NG._Done();this.Ja._Done(
);this.Kw._Done();this.HQ._Done();this.Pv._Done();this.I4._Done();this.Le._Done(
);this.TW._Done();this.TX._Done();A.Core.P._Done.call(this);},_ReInit:function(){
A.Core.P._ReInit.call(this);this.Background._ReInit();this.NG._ReInit();this.Ja.
_ReInit();this.Kw._ReInit();this.HQ._ReInit();this.Pv._ReInit();this.I4._ReInit(
);this.Le._ReInit();this.TW._ReInit();this.TX._ReInit();this.Ja.S(A.aaL(A.fl.Ak)
);this.Ja.A2(A.aaL(A.fl.Bh));this.Kw.S(A.aaL(A.fl.Ak));this.Kw.A2(A.aaL(A.fl.Bh)
);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(A.fl.Bh));this.AE6(A.aaL(A.fl.Ak));
this.ArN(A.aaL(A.fl.Ak));this.AnA(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.VQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AgV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgW)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AgX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NG)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ja)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kw).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Le)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADb={Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper),B.Arv,B.AkE],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper)
,B.A8U,B.AFB],0);A.pe([this,this.Nm],this);},D5:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhA)this.Ab5(A._GetAutoObject(A.Device.Helper).AhA.AOO());else this.
Ab5(-1);if(!!A._GetAutoObject(A.Device.Helper).Uw)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak5(A._GetAutoObject(A.Device.Helper).Uw.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmY._Init.call(this,aArg);this.__proto__=C.ADb;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGQ={Ex:null,Eh:null,
FT:null,X0:null,TA:null,ID:null,IE:null,Init:function(aArg){},WF:function(G){var
B;C.DR.WF.call(this,G);var AKJ=this.Azl(A._GetAutoObject(A.Device.Helper).UB.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALx=this.Azl(A._GetAutoObject(
A.Device.Helper).UC.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var Bzu=
this.Azl(A._GetAutoObject(A.Device.Device).Z0);this.Ex.H(A.abP(this.Ex.M,0));this.
Ex.H([].concat(this.Ex.M.slice(0,3),((B=this.M)[3]-B[1])-AKJ));this.IE.H(A.abO(this.
IE.M,this.Ex.M[3]-((((B=this.IE.M)[3]-B[1])/2)|0)));this.Eh.H(A.abP(this.Eh.M,this.
Ex.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-B[1])-ALx));this.
ID.H(A.abO(this.ID.M,(this.Eh.M[3]-((((B=this.ID.M)[3]-B[1])/2)|0))+2));this.FT.
H(A.abP(this.FT.M,this.Eh.M[3]));this.FT.H([].concat(this.FT.M.slice(0,3),((B=this.
M)[3]-B[1])-Bzu));this.TA.H(A.abO(this.TA.M,this.FT.M[3]-((((B=this.TA.M)[3]-B[1
])/2)|0)));this.X0.H(A.abP(this.X0.M,this.FT.M[3]));this.X0.H([].concat(this.X0.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJF:function(AoR){return A._GetAutoObject(A.
Device.Converter).Ak0(AoR);},AKd:function(){return A._GetAutoObject(A.acj.Temperature
).AlJ();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AL._Init.call(this.
Ex={I:this},0);A.acg.AL._Init.call(this.Eh={I:this},0);A.acg.AL._Init.call(this.
FT={I:this},0);A.acg.AL._Init.call(this.X0={I:this},0);A.acg.AL._Init.call(this.
TA={I:this},0);A.acg.AL._Init.call(this.ID={I:this},0);A.acg.AL._Init.call(this.
IE={I:this},0);this.__proto__=C.AGQ;this.Ex.AZ(0xD);this.Ex.H(AcM);this.Ex.L(A.jb.
Gf);this.Eh.AZ(0xD);this.Eh.H(S6);this.Eh.L(A.jb.H6);this.FT.AZ(0xD);this.FT.H(Z$
);this.FT.L(A.jb.E1);this.X0.AZ(0xD);this.X0.H(Afx);this.X0.L(A.jb.Afq);this.TA.
AZ(0xD);this.TA.H(Aaa);this.TA.Aws(A.jb.Afq);this.TA.Awt(A.jb.Afq);this.TA.Awv(A.
jb.E1);this.TA.Awu(A.jb.E1);this.ID.AZ(0xD);this.ID.H(W$);this.ID.Aws(A.jb.E1);this.
ID.Awt(A.jb.E1);this.ID.Awv(A.jb.H6);this.ID.Awu(A.jb.H6);this.IE.AZ(0xD);this.IE.
H(Aab);this.IE.Aws(A.jb.H6);this.IE.Awt(A.jb.H6);this.IE.Awv(A.jb.Gf);this.IE.Awu(
A.jb.Gf);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FT,-1);this.J(this.X0
,-1);this.J(this.TA,-1);this.J(this.ID,-1);this.J(this.IE,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FT._Done(
);this.X0._Done();this.TA._Done();this.ID._Done();this.IE._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ex._ReInit();this.Eh._ReInit(
);this.FT._ReInit();this.X0._ReInit();this.TA._ReInit();this.ID._ReInit();this.IE.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ID)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Co={Avj:null,AmS:null,AQb:null,Aq5:null,AqP:null,AvE:null,AR:null,Agn:null,Amn:
null,N:null,Bo:null,QN:null,AxI:A.jV,AUG:false,AGE:false,Aph:false,Axf:255,LI:false
,KE:false,Qn:false,Ai:function(Ae){var B;C.OV.Ai.call(this,Ae);var G$=((Ae&0x10)===
0x10);var Fq=((Ae&0x20)===0x20);var Iy=((Ae&0x40)===0x40);var GA=this.Bo.Bw;var FN=
A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FN=A.jb.Bm;GQ=A.jb.Text;}if(!G$){this.Background.
L(A.jb.CS);this.V.L(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(Iy){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.
Background.L(A.jb.Am4);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ
);}this.LI=G$;this.KE=Fq;this.Qn=GA;this.Aph=Iy;},Qm:function(G){this.Am();A.pe(
this.AR,this);},Bwo:function(s){this.Qm(s);},IW:function(G){if(this.QN.Aci)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Ati:function(s){this.IW(s);},AeT:function(E){if(A.aa0(this.Agn,E))return;this.
Agn=E;},A_n:function(E){if(this.AxI===E)return;this.AxI=E;},Wy:function(E){if(this.
Avj===E)return;this.Avj=E;},Wz:function(E){if(this.AmS===E)return;this.AmS=E;},A95:
function(E){if(this.Axf===E)return;this.Axf=E;},Gn:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALf();},A20:
function(G){},BF_:function(s){this.A20(s);},Akz:function(E){if(this.Aq5===E)return;
this.Aq5=E;},LX:function(E){if(A.aa0(this.Amn,E))return;this.Amn=E;},Bmd:function(
E){if(this.AqP===E)return;this.AqP=E;},L0:function(E){if(this.AvE===E)return;this.
AvE=E;},Zw:function(E){if(this.AGE===E)return;this.AGE=E;this.ALf();},ALf:function(
){var B;var Qt=this.DK;if(this.AGE)Qt=Qt+A.aaR(A.acf.Colon);if(this.AUG)Qt=Qt+Aac;
this.V.R(Qt);},ATn:function(E){if(this.AUG===E)return;this.AUG=E;this.ALf();},_Init:
function(aArg){C.OV._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BN._Init.call(this.QN={I:this},0);this.__proto__=C.Co;this.Bo.PO(0);
this.Bo.Wx(50);this.Bo.Ar(false);this.QN.Filter=1;this.Bo.Mx=[this,this.Bwo];this.
QN.BO=[this,this.Ati];this.Avj=A.aaL(A.fl.Ak);this.AmS=A.aaL(A.fl.Ak);this.AQb=A.
aaL(A.ach.E2);this.AqP=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OV;this.
Bo._Done();this.QN._Done();C.OV._Done.call(this);},_ReInit:function(){C.OV._ReInit.
call(this);this.Bo._ReInit();this.QN._ReInit();this.Wy(A.aaL(A.fl.Ak));this.Wz(A.
aaL(A.fl.Ak));this.Bmd(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OV._Mark.call(
this,D);if((B=this.Avj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqP)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agn)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dt={Q:null,And:null,Anf:null,Ht:null,H2:null,AM:0,Gl:0,FZ:100,FC:0,Init:function(
aArg){},IW:function(G){this.FC=1;C.Eg.IW.call(this,G);},Bk:function(aSize){C.Eg.
Bk.call(this,aSize);this.Ht.H([0,aSize[1]-40,40,aSize[1]]);this.H2.H([].concat(A.
abe(aSize,AhQ),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fq=((Ae&
0x20)===0x20);var GA=this.Bo.Bw;this.Ht.L(this.V.AQ);this.H2.L(this.V.AQ);this.Ht.
Z((Fq||GA)&&(this.AM>this.Gl));this.H2.Z((Fq||GA)&&(this.AM<this.FZ));if(this.FC===
6)this.Ht.L(A.jb.E1);if(this.FC===7)this.H2.L(A.jb.E1);},BeM:function(G){this.FC=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.AyN],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qm:function(G){if(this.FC===6)A.pe([this,this.AyN],this);if(this.FC===
7)A.pe([this,this.AyO],this);if(this.FC===1)A.pe(this.AR,this);this.FC=0;this.Am(
);},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},AcT:function(
s){this.C2(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcT],E,0);if(!!E)A.pe([this,
this.AcT],this);},BeN:function(G){this.FC=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.AyO],this);this.Bo.Ar(false);}this.Bo.Ar(true);},J$:function(G){this.FC=0;}
,AyO:function(s){this.J$(s);},J6:function(G){this.FC=0;},AyN:function(s){this.J6(
s);},By:function(E){if(E<this.Gl)E=this.Gl;if(E>this.FZ)E=this.FZ;if(this.AM===E
)return;this.AM=E;this.Am();},BaV:function(Aq){this.By(Aq);},F0:function(E){if(this.
Gl===E)return;this.Gl=E;this.Am();},EV:function(E){if(this.FZ===E)return;this.FZ=
E;this.Am();},Ue:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BN._Init.call(this.And={I:this},0);A.Core.BN._Init.call(this.Anf={
I:this},0);A.acg.Ap._Init.call(this.Ht={I:this},0);A.acg.Ap._Init.call(this.H2={
I:this},0);this.__proto__=C.Dt;this.H(J0);this.And.Filter=6;this.Anf.Filter=7;this.
Background.H(J0);this.V.H(Aad);this.V.R(Lv);this.Ht.H(AhR);this.H2.H(Aog);this.H2.
Cv(1);this.J(this.Ht,0);this.J(this.H2,0);this.And.BO=[this,this.BeM];this.And.D0=[
this,this.BeM];this.Anf.BO=[this,this.BeN];this.Anf.D0=[this,this.BeN];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.Ht.Aw(A.aaL(A.ach.
Ajr));this.H2.Aw(A.aaL(A.ach.Ajr));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.And._Done();this.Anf._Done();this.Ht._Done();this.H2._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.And._ReInit();this.
Anf._ReInit();this.Ht._ReInit();this.H2._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.And)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ht)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Do:function(){return-1;},C4:function(aIndex){return-1;},FX:function(
aIndex){return A.jV;},DU:function(A7){return-1;},HH:function(){return-1;},As:function(
E){this.Q=E;},B8:function(Aq){this.As(Aq);},ACQ:function(aIndex){return null;},ACS:
function(aIndex){return 0;},B7:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Ip={AxA:null
,BT:null,AG4:A.jV,AVj:A.jV,Aj4:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dt.Ai.call(this,Ae);if(!this.AxA){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVj);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AG4);}}else(B=
this.AxA)?B[1].call(B[0],this):null;},J$:function(G){var F;var BR=this.AM;C.Dt.J$.
call(this,G);this.By(this.AM+this.Aj4);if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J6:function(G){var F;var BR=this.AM;C.
Dt.J6.call(this,G);this.By(this.AM-this.Aj4);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IM:function(E){if(this.AG4===E)return;
this.AG4=E;this.Am();},I9:function(E){if(this.AVj===E)return;this.AVj=E;this.Am(
);},AS2:function(E){if(this.Aj4===E)return;this.Aj4=E;},A_k:function(E){if(A.aa0(
this.AxA,E))return;this.AxA=E;},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.CH._Init.call(this.BT={I:this},0);this.__proto__=C.Ip;this.H(J0);this.BT.H(N$);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dt;this.BT._Done();C.Dt._Done.call(this
);},_ReInit:function(){C.Dt._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dt._Mark.call(this
,D);if((B=this.AxA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Dy:null,HK:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bk:function(
aSize){var B;C.Dt.Bk.call(this,aSize);this.Dy.H([this.Ht.M[2]-10,this.Ht.M[1],this.
H2.M[0]+10,this.Ht.M[3]]);this.Dy.AFe((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.Dy.
Go,true,null,null);},Ai:function(Ae){var B;C.Dt.Ai.call(this,Ae);var Fq=((Ae&0x20
)===0x20);var GA=this.Bo.Bw;this.Dy.AbG(0,this.Dy.AY-1);this.Ht.Z(Fq||GA);this.H2.
Z(Fq||GA);},C2:function(G){var F;if(!!this.Q&&!!this.AC)this.By(this.AC.DU((F=this.
Q,F[1].call(F[0]))));},J$:function(G){var F;var BR=this.AM;C.Dt.J$.call(this,G);
this.By(this.AM+1);if(this.AM!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},J6:function(G){var F;var BR=this.AM;
C.Dt.J6.call(this,G);this.By(this.AM-1);if(this.AM!==BR){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(E){
var Qs=0;if(E<this.Gl){E=this.FZ;Qs=-this.Dy.V_*this.Dy.AY;}if(E>this.FZ){E=this.
Gl;Qs=this.Dy.V_;}C.Dt.By.call(this,E);if(!!Qs)this.Dy.F_(Qs);this.Dy.G2(this.AM
);if(this.Dy.Bjj())this.Dy.BoL(false,false);this.Dy.HD(this.Dy.Go,true,this.HK,null
);},Hg:function(G){var B;var Gc=this.Dy.G0;var Cz=(C.CH.isPrototypeOf(B=this.Dy.
Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6);Cz.Aw1(19);Cz.A2(this.V.AmR);Cz.Bm8(19
);Cz.Cu(this.V.AqO);Cz.Bm9(19);Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FX(Gc));
else Cz.R(Xa);Cz.H(A.abK(Cz.M,[this.Dy.V_,(B=this.Dy.M)[3]-B[1]]));},Bv2:function(
s){this.Hg(s);},CI:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
F0(0);this.EV(this.AC.Do()-1);this.Dy.Ju(this.AC.Do());this.Dy.AbG(0,this.Dy.AY-
1);}},_Init:function(aArg){C.Dt._Init.call(this,aArg);A.Core.Dy._Init.call(this.
Dy={I:this},0);A.acl.Gh._Init.call(this.HK={I:this},0);this.__proto__=C.BW;this.
H(J0);this.Dy.NZ(C.CH);this.HK.WC(23);this.HK.HM(1);this.HK.Fl(200);this.J(this.
Dy,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dy.Hg=[this,this.Bv2
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dt;this.Dy._Done();this.HK.
_Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.
Dy._ReInit();this.HK._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SL={FF:null,OF:null,Dj:null,Au:null,Js:null,HJ:null,Pp:null,VO:null,QW:null,
Yl:null,P0:null,Gt:null,Gs:null,FU:0,A8:0,Asi:false,Bjf:false,Init:function(aArg
){},Ai:function(Ae){C.Dt.Ai.call(this,Ae);this.Ht.Z(false);this.H2.Z(false);var AtR=
A.jV;if(!!this.Dj){this.Pp.R(this.Au.Format(Aoh));this.QW.R(this.Au.Format(AhS));
this.P0.R(this.Au.Format(AhT));}if(this.A8===1){this.HJ.Z(true);this.HJ.H(this.Pp.
M);this.HJ.L(this.V.AQ);this.Pp.L(this.Background.AQ);this.QW.L(this.V.AQ);this.
P0.L(this.V.AQ);AtR=A.aaR(A.acf.A5F);}else if(this.A8===2){this.HJ.Z(true);this.
HJ.H(this.QW.M);this.HJ.L(this.V.AQ);this.Pp.L(this.V.AQ);this.QW.L(this.Background.
AQ);this.P0.L(this.V.AQ);AtR=A.aaR(A.acf.He);}else if(this.A8===3){this.HJ.Z(true
);this.HJ.H(this.P0.M);this.HJ.L(this.V.AQ);this.Pp.L(this.V.AQ);this.QW.L(this.
V.AQ);this.P0.L(this.Background.AQ);AtR=A.aaR(A.acf.Year);}else{this.HJ.Z(false);
this.Pp.L(this.V.AQ);this.Yl.L(this.V.AQ);this.QW.L(this.V.AQ);this.VO.L(this.V.
AQ);this.P0.L(this.V.AQ);}if(AtR.length>0){if(this.AGE)this.V.R((((this.DK+AcN)+
AtR)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcN)+
AtR)+String.fromCharCode(0x29));}else this.ALf();},Qm:function(G){if(this.FC===1
)A.pe([this,this.U8],this);else if(this.FC===4)A.pe([this,this.AiD],this);else if(
this.FC===5)A.pe([this,this.Aio],this);C.Dt.Qm.call(this,G);},J$:function(G){switch(
this.A8){case 0:C.Dt.J$.call(this,G);break;case 3:break;default:this.Adv(this);}
},J6:function(G){switch(this.A8){case 0:C.Dt.J6.call(this,G);break;default:this.
Ain(this);}},Adx:function(G){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0
])));},Ab8:function(E){if(A.aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adx
],this.Dj,0);this.Dj=E;if(!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx
],this);},Ui:function(E){if(this.FU===E)return;this.FU=E;this.Au.Initialize(this.
FU);this.Am();},Adv:function(G){this.FC=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Bbr:function(s){this.Adv(s);},U8:
function(G){this.Ew(this.A8+1);},Al2:function(G){this.FC=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiD],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Al1:function(
G){this.FC=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Aio],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiD:function(G){var B;var F;var BR=this.FU;switch(this.A8){
case 1:{if(this.Asi){var ABd=A._NewObject(A.Core.An7,0);ABd.Ki=1;if(this.Au.J(ABd
).JO()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Au.GH<this.Au.Zo()
)this.Au.Lp(this.Au.GH+1);}break;case 2:{if(this.Asi){var ABd=A._NewObject(A.Core.
An7,0);ABd.Ki=this.Au.Zo();if(this.Au.J(ABd).JO()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Au.Um(this.Au.He+1);if(this.Au.Zo()<this.Au.GH)this.Au.Lp(this.
Au.Zo());}break;case 3:{if(this.Asi){var A1n=A._NewObject(A.Core.Bs,0);A1n.Initialize(
this.Au.JO());A1n.Year+=1;if(A1n.JO()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
Ui(((B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FU!==BR){if(!!this.Dj)(F=this.
Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}},Aio:function(G){var B;var F;var BR=
this.FU;if(this.A8===1)this.Au.Lp(this.Au.GH-1);if(this.A8===2){this.Au.Um(this.
Au.He-1);if(this.Au.Zo()<this.Au.GH)this.Au.Lp(this.Au.Zo());}if(this.A8===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.Ui(((B=(this.Au.JO()|
0))<0)?B+0x100000000:B);if(this.FU!==BR){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],
this.FU));A.abo(this.Dj,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[
0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=
null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aex));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U8];}break;case 2:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N
,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.Am1
));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Ain];(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aex));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U8];}break;case 3:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N
,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.Am1
));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Ain];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FF.AkP((F=this.N,F[1].call(F[
0])));}},AFy:function(E){if(this.Asi===E)return;this.Asi=E;},FQ:function(G){this.
Ew(1);},G_:function(G){this.Ew(0);},Ew:function(EO){var F;var AAn=this.A8;if(!this.
A8){this.FF.Ajy((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FU){var BR=this.FU;
this.Ui(A._GetAutoObject(A.Device.Helper).Dv());if(this.FU!==BR){if(!!this.Dj)(F=
this.Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}}}this.A8=EO;this.Bjf=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DJ(this);this.Gt.Bw=!!this.A8;this.Gs.Bw=
!!this.A8;if((!!AAn&&!this.A8)&&!!this.OF)A.pe(this.OF,this);this.Am();},Ain:function(
G){if(this.A8>1)this.Ew(this.A8-1);},_Init:function(aArg){C.Dt._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Au={I:this},0);A.Core.BN._Init.call(this.Js={I:this}
,0);A.acg.AL._Init.call(this.HJ={I:this},0);A.acg.Text._Init.call(this.Pp={I:this
},0);A.acg.Text._Init.call(this.VO={I:this},0);A.acg.Text._Init.call(this.QW={I:
this},0);A.acg.Text._Init.call(this.Yl={I:this},0);A.acg.Text._Init.call(this.P0={
I:this},0);A.Core.BN._Init.call(this.Gt={I:this},0);A.Core.BN._Init.call(this.Gs={
I:this},0);this.__proto__=C.SL;this.H(UT);this.V.R(Aoi);this.Ht.Z(false);this.H2.
Z(false);this.Js.Filter=1;this.HJ.H(Aoj);this.HJ.L(0x55FFFFFF);this.Pp.H(Aok);this.
Pp.I7(true);this.Pp.A6(0x14);this.VO.H(Aol);this.VO.I7(true);this.VO.A6(0x14);this.
VO.R(Afy);this.QW.H(Ala);this.QW.I7(true);this.Yl.H(AxZ);this.Yl.I7(true);this.Yl.
R(Afy);this.P0.H(Ax0);this.P0.I7(true);this.P0.A6(0x11);this.Gt.Filter=4;this.Gt.
Bw=false;this.Gs.Filter=5;this.Gs.Bw=false;this.J(this.HJ,0);this.J(this.Pp,0);this.
J(this.VO,0);this.J(this.QW,0);this.J(this.Yl,0);this.J(this.P0,0);this.Js.BO=[this
,this.Bbr];this.Pp.S(A.aaL(A.fl.EK));this.VO.S(A.aaL(A.fl.EK));this.QW.S(A.aaL(A.
fl.EK));this.Yl.S(A.aaL(A.fl.EK));this.P0.S(A.aaL(A.fl.EK));this.Gt.BO=[this,this.
Al2];this.Gt.D0=[this,this.AiD];this.Gs.BO=[this,this.Al1];this.Gs.D0=[this,this.
Aio];this.FF=A._NewObject(C.Aeq,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dt;this.Au._Done();this.Js._Done();this.HJ._Done();this.Pp._Done();this.VO._Done(
);this.QW._Done();this.Yl._Done();this.P0._Done();this.Gt._Done();this.Gs._Done(
);C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.Au._ReInit(
);this.Js._ReInit();this.HJ._ReInit();this.Pp._ReInit();this.VO._ReInit();this.QW.
_ReInit();this.Yl._ReInit();this.P0._ReInit();this.Gt._ReInit();this.Gs._ReInit(
);this.Pp.S(A.aaL(A.fl.EK));this.VO.S(A.aaL(A.fl.EK));this.QW.S(A.aaL(A.fl.EK));
this.Yl.S(A.aaL(A.fl.EK));this.P0.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Dt._Mark.call(this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OI={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.BdG],[B=A._GetAutoObject(A.Device.Device),B.A8C,B.Ba2],0);
A.pe([this,this.BdG],this);},Do:function(){return 16;},FX:function(aIndex){return this.
LanguageToString.BI(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(
A.Device.Device).AnD(E);},BdG:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OI;this.Cf.Set(0,0);this.Cf.Set(1,1);this.Cf.Set(2,5);this.Cf.
Set(3,3);this.Cf.Set(4,8);this.Cf.Set(5,9);this.Cf.Set(6,7);this.Cf.Set(7,6);this.
Cf.Set(8,10);this.Cf.Set(9,2);this.Cf.Set(10,11);this.Cf.Set(11,12);this.Cf.Set(
12,13);this.Cf.Set(13,14);this.Cf.Set(14,15);this.Cf.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.Cm;this.LanguageToString._Done();C.Cm._Done.
call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Rb={TemperatureUnitToString:
null,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Aw5(E);}
,Init:function(aArg){var B;A.zX([this,this.Bgc],[B=A._GetAutoObject(A.Device.Device
),B.Arw,B.Ath],0);A.pe([this,this.Bgc],this);},Bgc:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Rb;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AUZ={Ajw:null,AcC:null,Kx:null,AP:null,A_:null,Bk:function(aSize){C.Ba.Bk.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kx.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajw.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.AcC.H(this.Ajw.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Kx.L(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.AX
)return;this.Hn=Ad;if(!!this.AX){var AlA=this.AX.HF(Ad,6);var ApW=this.AX.CE(Ad,
7);var At7=this.AX.I2(Ad,9);this.T(A._GetAutoObject(A.acj.KK).ACN(AlA));this.Kx.
R(A._GetAutoObject(A.acj.KK).A6p(AlA));this.AcC.R(A._GetAutoObject(A.Device.Converter
).Ak0(ApW));this.AcC.L(A._GetAutoObject(A.acj.Assessment).Xv(At7));this.Ajw.L(A.
_GetAutoObject(A.acj.Assessment).Qj(At7));this.Am();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Ajw={I:this},0);A.acg.Text._Init.
call(this.AcC={I:this},0);A.acg.Text._Init.call(this.Kx={I:this},0);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0);this.__proto__=
C.AUZ;this.V.H(O4);this.AcC.L(A.jb.Text);this.Kx.R(Rj);this.Kx.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A_.H(Ax1);this.A_.L(A.jb.Bc);this.J(this.Ajw,0);this.J(this.AcC
,0);this.J(this.Kx,0);this.J(this.AP,0);this.J(this.A_,0);this.AcC.S(A.aaL(A.fl.
Af));this.Kx.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajw._Done();this.AcC._Done();this.Kx._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajw._ReInit(
);this.AcC._ReInit();this.Kx._ReInit();this.AP._ReInit();this.A_._ReInit();this.
AcC.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.F$={AX:null,AR:null,Cr:null,AD:
null,Afh:null,QC:null,KM:A.jV,Lj:null,AVl:true,Hg:function(G){var B;var Gc=this.
AD.G0;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Aa)return;Aa.Zr(this.
AX);Aa.Ce(Gc);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GK]));
},NZ:function(E){if(E===this.Lj)return;this.Lj=E;this.AD.NZ(E);},Zr:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Ce],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Ce],E,0);A.pe([this,this.Ce],this);},Ce:function(G){if(this.AVl===
false)return;if(!!this.AX){this.AD.Ju(this.AX.Ca());this.AD.AbG(0,this.AD.AY-1);
}else this.AD.Ju(0);if((this.AD.AY>0)&&(this.FH()<0))this.G2(0);if(this.FH()>=this.
AD.AY){this.G2(0);this.AD.F_(0);}if(this.AD.AY<=0){this.QC.Z(true);this.G2(-1);}
else{this.QC.Z(false);this.ABB(null,null);}},Fe:function(G){var B;this.Afh.Mu(this.
AD.GK*this.AD.AY);this.Afh.Mw((B=this.AD.M)[3]-B[1]);this.Afh.Mv(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cr.CO){case 4:if(this.FH()>0)this.G2(
this.FH()-1);break;case 5:if(this.FH()<(this.AD.AY-1))this.G2(this.FH()+1);break;
default:this.Cr.NH=true;}this.AD.HD(this.FH(),true,null,null);}else if((this.Cr.
CO!==4)&&(this.Cr.CO!==5))this.Cr.NH=true;},Zt:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbG(0,this.AD.AY);},G2:function(E){this.AD.G2(E);this.AD.HD(E,
true,null,null);},FH:function(){return this.AD.Go;},Dz:function(E){if(this.KM===
E)return;this.KM=E;this.QC.R(E);},ABB:function(AcW,E5){this.AD.ABB(AcW,E5);},ATC:
function(E){if(this.AVl===E)return;this.AVl=E;if(E)A.pe([this,this.Ce],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BN._Init.call(this.Cr={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afh={I:this},
0);A.acg.Text._Init.call(this.QC={I:this},0);this.__proto__=C.F$;this.H(UU);this.
Lj=C.Ba;this.Cr.Filter=147;this.AD.AZ(0x3F);this.AD.H(UU);this.AD.Ae4(40);this.Afh.
AZ(0x3A);this.Afh.H(AsS);this.QC.AZ(0x3F);this.QC.H(Ax2);this.QC.Hh(10);this.QC.
KS(true);this.QC.A6(0xA);this.QC.L(A.jb.Text);this.J(this.AD,0);this.J(this.Afh,
0);this.J(this.QC,0);this.Cr.BO=[this,this.DE];this.Cr.D0=[this,this.DE];this.AD.
El=[this,this.Fe];this.AD.Hg=[this,this.Hg];this.QC.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.P;this.Cr._Done();this.AD._Done();this.Afh._Done();this.
QC._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Cr._ReInit();this.AD._ReInit();this.Afh._ReInit();this.QC._ReInit();this.
QC.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hn:-1,CP:function(){this.Ce(this.Hn);},Ai:function(Ae){var B;C.Co.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hn%2)===1)this.Background.L(A.
jb.CK);else this.Background.L(A.jb.CS);}},Zr:function(E){if(this.AX===E)return;this.
AX=E;},Ce:function(Ad){A.ab5("%s",Ax3);},_Init:function(aArg){C.Co._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GU={Bj:null,Fy:null
,DO:null,FG:null,VX:null,JH:null,KM:A.jV,AT0:0,AT1:0,AT2:0,Afi:false,CP:function(
){if(A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.
Device).Ds(0);A.pe([this,this.BaG],this);}},Init:function(aArg){var B;A.zX([this
,this.A2P],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AII],0);A.zX([this,this.
A2P],[B=A._GetAutoObject(A.Device.Device),B.A8f,B.BaP],0);A.zV([this,this.Af6],A.
_GetAutoObject(A.Device.Device).An,0);A.zV([this,this.AcG],A._GetAutoObject(A.Device.
Device).An,0);A.zX([this,this.BAK],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0
],0);A.pe([this,this.AcG],this);A.pe([this,this.Bbl],this);A.pe([this,this.Axv],
this);},Wv:function(G){this.Agp();if(!A._GetAutoObject(A.Device.Device).JH){this.
A4E(A.aaR(A.acf.Bjw),[this,this.Bj9],1);this.A4E(A.aaR(A.acf.Box),[this,this.Bj8
],0);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Bi7));A._GetAutoObject(
C.BH).Ft();}var O;for(O=this.JH.Do()-1;O>=0;O=O-1)switch(this.JH.C4(O)){case 0:this.
Ago(A.aaR(A.acf.XP),[this,this.ATD],0);break;case 1:this.Ago(A.aaR(A.acf.Temperature
),[this,this.ATF],1);break;case 2:this.Ago(A.aaR(A.acf.Rating),[this,this.ATE],2
);break;case 3:this.Ago(A.aaR(A.acf.Afr),[this,this.ATG],3);break;default:A.ab5(
"%s",Ax4);}A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.A5S
));A._GetAutoObject(A.Device.Device).Ds(6);},BaG:function(s){this.Wv(s);},DE:function(
G){var D4=(A.Core.BN.isPrototypeOf(G)?G:null);var AfT=this.JH.DU(A._GetAutoObject(
A.Device.Device).JH);if(this.Afi)return;switch(D4.CO){case 6:{AfT=AfT-1;if(AfT<0
)AfT=this.JH.Do()-1;A._GetAutoObject(A.Device.Device).Ab2(this.JH.C4(AfT));}break;
case 7:{AfT=AfT+1;if(AfT>=this.JH.Do())AfT=0;A._GetAutoObject(A.Device.Device).Ab2(
this.JH.C4(AfT));}break;default:D4.NH=true;}},CF:function(G){if(this.DO.AzY()){this.
DO.Ac7();if(this.DO.AzY()===false)this.Bj.ATC(true);return;}else if(this.Afi)this.
A3I(this);if(!!this.Bj)this.Bj.ATC(true);},E3:function(G){if(!!this.Bj)this.Bj.ATC(
false);},Axv:function(G){var B;if(!!this.Bj)this.HN(this.Bj);this.Bj=A._NewObject(
C.AMs,0);this.Bj.H(Aom);this.Bj.Zr(A._GetAutoObject(A.Device.Device).An);this.Bj.
Zt([this,this.AIU]);if(!!this.Fy)this.Bj.A9p([B=this.Fy,B.A8W,B.A_g]);this.A32(this
);this.J(this.Bj,0);if(this.Afi===false)this.Bb(this.Bj);this.A2P(this);this.Bov(
this);},A9m:function(G){A._GetAutoObject(A.Device.Device).Ds(0);this.Dq(this.A6C(
));this.Ej.AR=[this,this.AIU];this.ALk(this);this.Ej.Ar(true);this.Bb(this.Ej);this.
Afi=true;},Bkd:function(G){var B;A._GetAutoObject(A.Device.Device).Ds(0);if(!this.
Bj)return;var Aa=(C.AB0.isPrototypeOf(B=this.Bj.AD.BiT(this.Bj.AD.Go))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).HL(Aa.Hn);else A._GetAutoObject(A.Device.
Helper).W.Hi();this.Agb();},Al0:function(G){var F;if(!this.FG)this.A5T(this);else
switch((F=this.FG,F[1].call(F[0]))){case 0:this.A5T(this);break;case 1:this.BhP(
this);break;case 9:this.A5U(this);break;case 4:this.A5W(this);break;case 6:this.
A5Z(this);break;case 8:this.ANT(this);break;case 2:this.A53(this);break;case 3:this.
BhQ(this);break;case 7:this.BhR(this);break;case 5:this.BhS(this);break;case 10:
this.BhU(this);break;case 11:this.A5V(this);break;case 12:this.A52(this);break;case
13:this.A54(this);break;case 14:this.A5X(this);break;case 18:this.A5Y(this);break;
case 15:this.A50(this);break;case 16:this.A55(this);break;case 17:this.A51(this);
break;default:A.ab5("%s%e",Afz,(F=this.FG,F[1].call(F[0])));}},AIU:function(s){this.
Al0(s);},Bln:function(G){this.Dq(C.Km);this.Ej.AR=null;this.Afi=false;this.AcG(this
);this.BfG();this.N.TW.Dr(255);this.N.TX.Dr(255);this.Bb(this.Bj);this.Ej.Ar(false
);},Anp:function(G){A._GetAutoObject(C.A$).Fv();},Dz:function(E){if(this.KM===E)
return;this.KM=E;this.A32(this);},Abs:function(){switch(A._GetAutoObject(A.Device.
Device).JH){case 0:return this.BgY(A._GetAutoObject(A.Device.Device).Amt);case 2:
return C.AM5;case 1:return C.AM6;case 3:return C.AM8;case 8:case 9:case 10:case 4:
case 5:case 6:return C.Amz;case 7:return C.ABZ;case 12:return C.AB2;case 11:return C.
ABY;case 13:return C.AB1;default:throw new Error(Aon);}},Abt:function(){switch(A.
_GetAutoObject(A.Device.Device).JH){case 0:return this.BgZ(A._GetAutoObject(A.Device.
Device).Amt);case 2:return C.ADi;case 1:return C.APx;case 3:return C.APz;case 4:
return C.ADe;case 8:case 9:case 10:case 5:case 6:return C.Am0;case 7:return C.ADg;
case 12:return C.ADh;case 11:return C.ADf;case 13:return C.ADj;default:throw new
Error(Aon);}},A2P:function(G){this.ATf(A._GetAutoObject(A.Device.Device).JH);this.
ATg(A._GetAutoObject(A.Device.Device).Amt);if(!!this.Bj){this.Bj.NZ(this.Abs());
this.BoB(this);}},BoB:function(G){var B;if(!!this.Fy)this.HN(this.Fy);this.Fy=(C.
Dc.isPrototypeOf(B=A._NewObject(this.Abt(),0))?B:null);this.Fy.H(IR);if(!!this.Bj
)this.Bj.A9p([B=this.Fy,B.A8W,B.A_g]);this.J(this.Fy,0);},Bkb:function(G){this.Q6(
this);A._GetAutoObject(A.Device.Device).Ds(0);},ATD:function(G){A._GetAutoObject(
A.Device.Device).Ab2(0);},ATF:function(G){A._GetAutoObject(A.Device.Device).Ab2(
1);},ATE:function(G){A._GetAutoObject(A.Device.Device).Ab2(2);},ATG:function(G){
A._GetAutoObject(A.Device.Device).Ab2(3);},Q6:function(G){A._GetAutoObject(A.Device.
Device).An.Bl(A._GetAutoObject(A.Device.Helper).Mo());},Bbl:function(s){this.Q6(
s);},HO:function(G){if(this.Afi){this.ALk(this);return;}this.N.CY(A.aaL(A.ach.E2
));this.N.Cs(A.aaL(A.ach.ADC));this.N.C6(A.aaL(A.ach.Options));this.N.CB=[this,this.
Anp];this.N.Ck=[this,this.A9m];this.N.Cl=[this,this.BaG];this.N.Hu(A.jV);this.N.
FJ(A.jV);this.N.CV(A.jV);if(!A._GetAutoObject(A.Device.Device).An.Ca()){this.N.I4.
Dr(100);this.N.Ck=null;}else this.N.I4.Dr(255);},AyM:function(s){this.HO(s);},Ago:
function(Ac5,Ac6,AJg){A._GetAutoObject(C.BH).AuA(Ac5,Ac6,[this,this.A8P,this.ATf
],AJg);},Af6:function(G){this.A32(this);if(this.Afi)A.pe([this,this.ALk],this);}
,Agb:function(){A._GetAutoObject(C.A$).Cg(9);},A32:function(G){if(!this.Bj)return;
if(!A._GetAutoObject(A.Device.Device).An.QE()||!A._GetAutoObject(A.Device.Device
).An.Filter)this.Bj.Dz(A.aaR(A.acf.AEh));else if(A._GetAutoObject(A.Device.Helper
).Arb(A._GetAutoObject(A.Device.Device).An.Filter))this.Bj.Dz(this.KM);else if(!
A._GetAutoObject(A.Device.Device).An.Filter.DQ(1,4)){if(A._GetAutoObject(A.Device.
Helper).ACV(A._GetAutoObject(A.Device.Device).An.Filter)===1)this.Bj.Dz(A.aaR(A.
acf.AN3));else this.Bj.Dz(A.aaR(A.acf.AN2));}else this.Bj.Dz(A.aaR(A.acf.ARZ));}
,AEH:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],0));},AwM:function(
E){if(A.aaZ(this.FG,E))return;if(!!this.FG)A.z$([this,this.A0q],this.FG,0);this.
FG=E;if(!!E)A.zX([this,this.A0q],this.FG,0);if(!!E)A.pe([this,this.A0q],this);},
AEN:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],1));},AwR:function(
G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],2));},ATk:function(G){var F;if(!
!this.FG)(F=this.FG,F[2].call(F[0],3));},ATy:function(G){var F;if(!!this.FG)(F=this.
FG,F[2].call(F[0],7));},ATz:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(
F[0],5));},A53:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.
Helper).HL(this.Bj.FH());this.DO.Qh(1);}},IY:function(Ac5,Ac6,AoY){A._GetAutoObject(
C.BH).AuA(Ac5,Ac6,[this,this.A8R,this.ATh],AoY);},Blx:function(G){var F;if(!!this.
FG)(F=this.FG,F[2].call(F[0],4));},A5W:function(G){if(!this.Bj)return;if(this.M_(
)){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.DO.BBb();}},Bly:function(
G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],6));},A5Z:function(G){if(!this.Bj
)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.DO.
BBc();}},ANT:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.
Helper).HL(this.Bj.FH());this.DO.Qh(1024);}},BmL:function(G){var F;if(!!this.FG)(
F=this.FG,F[2].call(F[0],8));},Aku:function(G){var F;if(!!this.FG)(F=this.FG,F[2
].call(F[0],9));},BhQ:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FH());this.DO.Qh(2);}},A5T:function(G){if(!this.Bj)return;
if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());if(A._GetAutoObject(
A.Device.Helper).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(
A.Device.Device).A9(66,true,A.jV,0,null);else this.BAX();}},BhP:function(G){if(!
this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());
this.DO.Qh(16);}},BAX:function(){A._GetAutoObject(C.A$).Cg(94);},BhR:function(G){
if(!this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH(
));this.DO.Qh(4);}},BhS:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FH());this.DO.Qh(8);}},A5U:function(G){var B;if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());if(this.
Afi){A.zX([this,this.AAp],[B=this.DO,B.Anw,B.Jv],0);this.A3I(this);}this.DO.Ac7(
);}},AL5:function(Ac5,Ac6,Bx0){A._GetAutoObject(C.BH).BgO(Ac5,Ac6,Bx0);},ALk:function(
G){this.N.Hu(A.jV);this.N.CV(A.jV);this.N.CY(A.aaL(A.ach.Aew));this.N.CB=[this,this.
Bln];this.N.TW.Dr(100);this.N.TX.Dr(100);var Gd=A._GetAutoObject(A.Device.Device
).An.Ca();if(Gd<=0){this.N.Cs(null);this.N.C6(null);this.N.Ck=null;this.N.Cl=null;
this.N.ZB=false;this.N.ZC=false;}else if(Gd===1){this.N.Cs(null);this.N.C6(A.aaL(
A.ach.Aex));this.N.Ck=null;this.N.Cl=[this,this.AIU];this.N.ZB=false;this.N.ZC=false;
}else{this.N.Cs(A.aaL(A.ach.Aq4));this.N.C6(A.aaL(A.ach.Aq$));this.N.Ck=[this,this.
A3k];this.N.Cl=[this,this.A3l];this.N.ZB=true;this.N.ZC=true;}},A3k:function(G){
if(!this.Bj)return;if(this.Bj.FH()<(A._GetAutoObject(A.Device.Device).An.Ca()-1)
)this.Bj.G2(this.Bj.FH()+1);},A3l:function(G){if(!this.Bj)return;if(this.Bj.FH()>
0)this.Bj.G2(this.Bj.FH()-1);},Bov:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).An.Lc(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bj.G2(Bf);A.ab5("%s",Aoo);}}},M_:function(){return this.
Bj.FH()>=0;},Akh:function(){return A._GetAutoObject(A.Device.Device).An.Ca()>5;}
,Agp:function(){this.BgP();A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.AUo),[this,this.
A9m]);A._GetAutoObject(C.BH).Ft();},AcG:function(G){if(this.Afi)this.ALk(this);else
this.HO(this);},A3I:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.Fg();var Ay0=aFilter.DQ(1,4);if(!!Ay0){aFilter.N3(Ay0);A._GetAutoObject(A.
Device.Device).An.Bl(aFilter);if(!!this.Bj)this.Bj.G2(0);}},AAp:function(G){var B;
if(!this.DO.Gu&&this.Afi){A.z$([this,this.AAp],[B=this.DO,B.Anw,B.Jv],0);this.A3I(
this);}},Bnm:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],10));},BhU:
function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(
this.Bj.FH());this.DO.Qh(256);}},A3a:function(G){var F;this.ATh((F=this.FG,F[1].
call(F[0])));A.pe([this,this.AyM],this);},A0q:function(s){this.A3a(s);},Blu:function(
G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],11));},A5V:function(G){if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.
DO.Qh(4096);}},A52:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FH());this.DO.Qh(16384);}},A54:function(G){if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.
BAY();}},BAY:function(){A._GetAutoObject(C.A$).Ahp(75);},A5X:function(G){if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.
DO.Qh(32768);}},A50:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FH());this.DO.Qh(65536);}},A55:function(G){if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.
DO.Qh(131072);}},BgP:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Arb(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BH).XN(A.aaR(A.acf.AB5));else A._GetAutoObject(C.BH).Qw(A.aaR(
A.acf.AB5),[this,this.Bkb]);A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.AkS),[this,this.
Bkd]);A._GetAutoObject(C.BH).Ft();},BgZ:function(AoC){switch(AoC){case 0:return C.
Am0;case 1:return C.APv;default:throw new Error(Xb+AoC.toFixed());}},BgY:function(
AoC){switch(AoC){case 0:return C.Amz;case 1:return C.AM3;default:throw new Error(
Xb+AoC.toFixed());}},Bj8:function(G){A._GetAutoObject(A.Device.Device).ArG(0);},
Bj9:function(G){A._GetAutoObject(A.Device.Device).ArG(1);},A4E:function(Ac5,Ac6,
AoC){A._GetAutoObject(C.BH).AuA(Ac5,Ac6,[this,this.A8Q,this.ATg],AoC);},A51:function(
G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.
FH());this.DO.Qh(128);}},BAK:function(G){var B;if(!this.Bj)return;A.pe([B=this.Bj
,B.Ce],this);},A5Y:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FH());this.DO.Qh(524288);}},BhT:function(G){if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.
DO.Qh(262144);}},ATf:function(E){if(this.AT0===E)return;this.AT0=E;A.abo([this,this.
A8P,this.ATf],0);},ATg:function(E){if(this.AT1===E)return;this.AT1=E;A.abo([this
,this.A8Q,this.ATg],0);},ATh:function(E){if(this.AT2===E)return;this.AT2=E;A.abo([
this,this.A8R,this.ATh],0);},A6C:function(){return C.Yu;},BfG:function(){var B;var
Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.Filter){Filter=
A._GetAutoObject(A.Device.Device).An.Filter.Fg();FilterCriterion=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=Filter.DQ(1,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion
);A._GetAutoObject(A.Device.Device).An.Bl(Filter);}},A8P:function(){return this.
AT0;},A8Q:function(){return this.AT1;},A8R:function(){return this.AT2;},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.ADi._Init.call(this.VX={I:this},0);C.JH._Init.
call(this.JH={I:this},0);this.__proto__=C.GU;this.Background.H(Cc);this.N.Z(true
);this.N.OO(true);this.N.OP(true);this.Ej.A9Q(A.jb.CS);this.Ej.A9R(A.jb.Text);this.
Dq(C.Km);this.VX.H(IR);this.KM=A.aaR(A.acf.AEh);this.J(this.VX,0);this.DO=A._GetAutoObject(
C.DO);this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.VX._Done();this.
JH._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
VX._ReInit();this.JH._ReInit();this.Dz(A.aaR(A.acf.AEh));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Bj)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Fy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DO)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.FG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.VX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::AnimalListScreen"};C.AB0={AP:null,A_:null,UE:
null,AcA:null,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);
this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.UE.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.
A_.H([this.UE.M[2]-1,0,this.UE.M[2]+1,aSize[1]]);this.AcA.H([this.UE.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UE.L(this.V.AQ);this.
AcA.L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){this.
T(this.AX.CE(Ad,1).toFixed());this.UE.R(this.AX.CE(Ad,2).toFixed());this.AcA.R(this.
AX.CE(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg
);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0
);A.acg.Text._Init.call(this.UE={I:this},0);A.acg.Text._Init.call(this.AcA={I:this
},0);this.__proto__=C.AB0;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.UE.L(A.jb.Text
);this.AcA.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,0);this.J(this.UE,0);this.
J(this.AcA,0);this.UE.S(A.aaL(A.fl.Af));this.AcA.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.UE.
_Done();this.AcA._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A_._ReInit();this.UE._ReInit();this.AcA._ReInit(
);this.UE.S(A.aaL(A.fl.Af));this.AcA.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad7={Oz:null,SM:null,Mi:null,Init:function(aArg){var B;A.zX([this,this.A2S],[
B=A._GetAutoObject(A.Device.Device),B.Av9,B.AyE],0);A.zX([this,this.Adw],[B=A._GetAutoObject(
A.Device.Device),B.Av6,B.AyD],0);A.pe([this,this.Adw],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SM.R(A._GetAutoObject(A.Device.Device).Aa4.toFixed()+Alb
);this.Oz.Z(A._GetAutoObject(A.Device.Device).AmC);},Adw:function(G){this.Am();}
,MU:function(G){A._GetAutoObject(C.A$).Fv();},A2S:function(G){if(A._GetAutoObject(
A.Device.Device).AmC===false){this.Oz.Z(false);A._GetAutoObject(C.A$).Fv();}else
this.Oz.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oz={I:this},0);A.acg.Text._Init.call(this.SM={I:this},0);C.Mi._Init.call(
this.Mi={I:this},0);this.__proto__=C.Ad7;var B;this.Background.L(A.jb.CS);this.N.
Z(true);this.N.CV(A.aaR(A.acf.Ok));this.Oz.H(AsT);this.Oz.R(A.aaR(A.acf.Oz));this.
Oz.L(A.jb.Text);this.Oz.Z(false);this.SM.H(AsU);this.SM.R(AsV);this.SM.L(A.jb.Text
);this.Mi.H(AsW);this.J(this.Oz,0);this.J(this.SM,0);this.J(this.Mi,0);this.N.Cl=[
this,this.MU];this.Oz.S(A.aaL(A.fl.Af));this.SM.S(A.aaL(A.fl.Af));this.Mi.As([B=
A._GetAutoObject(A.Device.Device),B.Av6,B.AyD]);this.Mi.A97([B=A._GetAutoObject(
A.Device.Device),B.Av9,B.AyE]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oz._Done();this.SM._Done();this.Mi._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oz._ReInit();this.SM._ReInit();this.Mi._ReInit(
);this.N.CV(A.aaR(A.acf.Ok));this.Oz.R(A.aaR(A.acf.Oz));this.Oz.S(A.aaL(A.fl.Af)
);this.SM.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mi={Ad2:null,Ad3:null,Kd:function(G){var F;if(!!this.Q){this.A11();var Ac$=(
F=this.Q,F[1].call(F[0]));if(Ac$>20)this.Ov.L(A.jb.E1);else this.Ov.L(A.jb.Gf);this.
Ov.L((this.Ov.AQ&0x00FFFFFF)|(this.AlI(Ac$,0,20)<<24));this.TB.L((this.TB.AQ&0x00FFFFFF
)|(this.AlI(Ac$,21,40)<<24));this.TC.L((this.TC.AQ&0x00FFFFFF)|(this.AlI(Ac$,41,
60)<<24));this.Ad2.L((this.Ad2.AQ&0x00FFFFFF)|(this.AlI(Ac$,61,80)<<24));this.Ad3.
L((this.Ad3.AQ&0x00FFFFFF)|(this.AlI(Ac$,81,100)<<24));}},A11:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U3=this.Ad3;else if((F=this.Q,F[
1].call(F[0]))>60)this.U3=this.Ad2;else if((F=this.Q,F[1].call(F[0]))>40)this.U3=
this.TC;else if((F=this.Q,F[1].call(F[0]))>20)this.U3=this.TB;else this.U3=this.
Ov;}else this.U3=null;},_Init:function(aArg){C.Ox._Init.call(this,aArg);A.acg.AL.
_Init.call(this.Ad2={I:this},0);A.acg.AL._Init.call(this.Ad3={I:this},0);this.__proto__=
C.Mi;this.H(Alc);this.NO.H(Alc);this.Ov.H(AsX);this.TB.H(Ax5);this.TC.H(Ax6);this.
Ad2.H(Ax7);this.Ad2.L(A.jb.E1);this.Ad3.H(AVP);this.Ad3.L(A.jb.E1);this.J(this.Ad2
,0);this.J(this.Ad3,0);this.NO.Aw(A.aaL(A.ach.AMN));},_Done:function(){this.__proto__=
C.Ox;this.Ad2._Done();this.Ad3._Done();C.Ox._Done.call(this);},_ReInit:function(
){C.Ox._ReInit.call(this);this.Ad2._ReInit();this.Ad3._ReInit();},_Mark:function(
D){var B;C.Ox._Mark.call(this,D);if((B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUU={N6:null,Lr:null,Ak6:null,ZX:null,ZW:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApM],[B=A._GetAutoObject(A.Device.Device),B.
ASB,B.A0b],0);A.zX([this,this.ApM],[B=A._GetAutoObject(A.Device.Device),B.ASE,B.
A0d],0);A.zX([this,this.ApM],[B=A._GetAutoObject(A.Device.Device),B.A86,B.Bba],0
);A.pe([this,this.ApM],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GE(this
);this.ABp(this);this.BB7(this);this.DJ(this);},BAo:function(G){A._GetAutoObject(
A.Device.Device).AsC();},ApM:function(G){this.Am();},GE:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZX.Z(false);break;case 4:{var A3D;if(!A._GetAutoObject(A.Device.Device).Afn)A3D=
0;else A3D=((A._GetAutoObject(A.Device.Device).AxL*100)/A._GetAutoObject(A.Device.
Device).Afn)|0;this.ZX.By(A3D);this.ZX.Z(true);}break;default:A.ab5("%s%e",AsY,A.
_GetAutoObject(A.Device.Device).SyncState);}},BB7:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CK);this.Lr.L(A.jb.Text);this.N6.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gf);this.Lr.L(A.jb.Bm);this.N6.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",AsY,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CY(null);this.N.CB=null;this.N.CV(A.jV);this.N.Cl=null;}break;
case 7:{this.N.CY(null);this.N.CB=null;this.N.CV(A.aaR(A.acf.Ok));this.N.Cl=[this
,this.BAo];}break;default:A.ab5("%s%e",AsY,A._GetAutoObject(A.Device.Device).SyncState
);}},ABp:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lr.R(A.aaR(A.acf.Bpm));break;case 1:this.Lr.R(A.aaR(A.acf.Bpj));break;
case 2:this.Lr.R(A.aaR(A.acf.Bpg));break;case 3:this.Lr.R(A.aaR(A.acf.Bpk));break;
case 4:this.Lr.R((A.aaR(A.acf.Bpi)+Ax8)+A._GetAutoObject(A.Device.Helper).Nk(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.BnY),P6,A._GetAutoObject(A.Device.Device).AxL.toFixed(
)),Ax9,A._GetAutoObject(A.Device.Device).Afn.toFixed()));break;case 5:this.Lr.R(
A.aaR(A.acf.Bpl));break;case 7:this.Lr.R(A.aaR(A.acf.Bph));break;default:A.ab5("%s%e"
,AsY,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CH._Init.call(this.N6={I:this},0);C.CH._Init.call(this.Lr={I:this
},0);A.acg.Ap._Init.call(this.Ak6={I:this},0);A.acr.ADl._Init.call(this.ZX={I:this
},0);A.acr.ADm._Init.call(this.ZW={I:this},0);this.__proto__=C.AUU;this.N.Z(true
);this.N6.H(AVQ);this.N6.R(A.aaR(A.acf.N6));this.Lr.AZ(0x3F);this.Lr.H(AVR);this.
Lr.A6(0x12);this.Ak6.H(AVS);this.Ak6.L(A.jb.AV);this.ZX.H(AVT);this.ZX.Ar(false);
this.ZX.By(0);this.ZW.Bng(0);this.ZW.A_t(0);this.ZW.A_r(A.jb.AV);this.ZW.A_q(0);
this.ZW.AFY(AHi);this.J(this.N6,0);this.J(this.Lr,0);this.J(this.Ak6,0);this.J(this.
ZX,0);this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(A.fl.Af));this.N6.Cu(A.aaL(A.fl.
Ak));this.Lr.S(A.aaL(A.fl.Af));this.Lr.A2(A.aaL(A.fl.Ak));this.Lr.Cu(A.aaL(A.fl.
Bh));this.Ak6.Aw(A.aaL(A.ach.AQH));this.ZX.OnSetAppearance(this.ZW);this.ZW.A_s(
A.aaL(A.ach.NS));this.ZW.A_p(A.aaL(A.ach.NS));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N6._Done();this.Lr._Done();this.Ak6._Done();this.ZX._Done(
);this.ZW._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N6._ReInit();this.Lr._ReInit();this.Ak6._ReInit();this.ZX._ReInit();this.
ZW._ReInit();this.N6.R(A.aaR(A.acf.N6));this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(
A.fl.Af));this.N6.Cu(A.aaL(A.fl.Ak));this.Lr.S(A.aaL(A.fl.Af));this.Lr.A2(A.aaL(
A.fl.Ak));this.Lr.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqY={_Init:function(aArg){C.ADb._Init.call(this,aArg
);this.__proto__=C.AqY;this.A9T(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cf:A.abi(3,0,{0:2,2:1}),Do:function(
){return 3;},C4:function(aIndex){if(aIndex>=3)return-1;return this.Cf.Get(aIndex
);},FX:function(aIndex){return this.GenderToString.BI(this.C4(aIndex));},DU:function(
A7){var O=0;while(O<3){if(this.Cf.Get(O)===A7)return O;O=O+1;}return-1;},HH:function(
){var O=0;var max=-1;while(O<3){if(this.Cf.Get(O)>max)max=this.Cf.Get(O);O=O+1;}
return max;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal)this.Animal.JQ(
E);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.AfY],[B=this.Animal,B.Wt,B.JQ],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AfY],[B=this.Animal,B.Wt,B.JQ],0);A.pe([this,this.AfY],this);},AfY:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B7,
this.B8],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cf=[]).__proto__=C.Gender.Cf;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cf:A.abi(4,0,{1:1,2:2,3:3}),Do:function(){return 4;},C4:function(aIndex){if(
aIndex>=4)return-1;return this.Cf.Get(aIndex);},FX:function(aIndex){return this.
BirthTypeToString.BI(this.C4(aIndex));},DU:function(A7){var O=0;while(O<4){if(this.
Cf.Get(O)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(
O<4){if(this.Cf.Get(O)>max)max=this.Cf.Get(O);O=O+1;}return max;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akv(E);},A1f:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B7,this.
B8],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1f],[B=this.Animal,B.ASf,B.Akv],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1f],[B=this.Animal,B.ASf,B.Akv],0);A.pe([this,this.A1f],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cf=[]).__proto__=C.BirthType.Cf;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acr:null,Do:
function(){return A._GetAutoObject(A.Device.Helper).AdX.MC;},C4:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdX.MC)return-1;return A._GetAutoObject(
A.Device.Helper).AdX.Get(aIndex);},FX:function(aIndex){return this.Acr.BI(this.C4(
aIndex));},DU:function(A7){var O=0;while(O<A._GetAutoObject(A.Device.Helper).AdX.
MC){if(A._GetAutoObject(A.Device.Helper).AdX.Get(O)===A7)return O;O=O+1;}return-
1;},HH:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UB.
MC){if(A._GetAutoObject(A.Device.Helper).UB.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UB.Get(O);O=O+1;}return max;},As:function(E){C.AC.As.call(this,E);if(!!this.
Animal)this.Animal.EB(E);},A0_:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B7,this.B8],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A0_],[B=this.Animal,B.PM,B.EB],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A0_],[B=this.Animal,B.PM,B.EB],0);A.pe([
this,this.A0_],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acr={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acr._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acr._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUA={Init:function(aArg){var B;A.pe([this,this.AfC],this);A.zX([this,this.AfC
],[B=A._GetAutoObject(A.Device.Device),B.Arw,B.Ath],0);},A3J:function(G){A._GetAutoObject(
A.Device.Device).A9(38,true,A.jV,0,[this,this.Bbs]);},A3i:function(G){var B;var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(
A.Device.Device).Aso(this);},A1z:function(G){var F;if(this.A8===1){var BR=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlQ)this.D7=this.AlQ;if(this.D7<A._GetAutoObject(
A.Device.Device).Z0)this.D7=A._GetAutoObject(A.Device.Device).Z0;if(this.DX!==BR
){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A8===
2){var BR=this.DX;this.DX=this.DX-10;if(this.DX<this.D7)this.DX=this.D7;if(this.
DX!==BR){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.
DJ(this);this.Am();},A1_:function(G){var F;if(this.A8===1){var BR=this.D7;this.D7=
this.D7+10;if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BR){if(!!this.JT)(F=this.
JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A8===2){var BR=this.DX;this.
DX=this.DX+10;if(this.DX>this.AlL)this.DX=this.AlL;if(this.DX!==BR){if(!!this.JS
)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.DJ(this);this.Am();
},GE:function(G){this.PF.R(AHj+A._GetAutoObject(A.Device.Converter).Ak0(this.D7)
);this.PG.R(AHj+A._GetAutoObject(A.Device.Converter).Ak0(this.DX));this.Ss.R(A._GetAutoObject(
A.acj.Temperature).AlJ());},A13:function(Ato){if(Ato===1)return this.PF;else if(
Ato===2)return this.PG;else return null;},_Init:function(aArg){C.Acp._Init.call(
this,aArg);this.__proto__=C.AUA;this.AlL=5000;this.AlQ=3000;this.T(A.aaR(A.acf.Arm
));this.Background.H(AfA);this.V.H(BF);this.V.R(A.aaR(A.acf.AGU));this.V.A6(0x12
);this.Init(aArg);},_ReInit:function(){C.Acp._ReInit.call(this);this.T(A.aaR(A.acf.
Arm));this.V.R(A.aaR(A.acf.AGU));},_className:"Application::SettingsItemThresholdsTemp"
};C.EA={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.EA;this.H(BF);this.Background.
H(BF);this.Background.L(A.jb.CK);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa7:null,Aa$:null,Aa9:
null,Background:null,Aa6:null,Aa_:null,Aa8:null,AjD:null,Arr:null,VI:null,A4:0,Bz7:
function(G){if(this.AjD.CO===6){if(this.A4===1)this.AnJ(2);else if(this.A4===2)this.
AnJ(3);else this.AnJ(1);}else if(this.AjD.CO===7){if(this.A4===3)this.AnJ(2);else
if(this.A4===2)this.AnJ(1);else this.AnJ(3);}},AnJ:function(E){if(this.A4===E)return;
this.A4=E;switch(this.A4){case 3:this.Background.H(this.Aa6.M);break;case 2:this.
Background.H(this.Aa_.M);break;case 1:this.Background.H(this.Aa8.M);break;default:
this.Background.H(Aop);}},IW:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hk._Init.
call(this.Aa7={I:this},0);A.acg.Hk._Init.call(this.Aa$={I:this},0);A.acg.Hk._Init.
call(this.Aa9={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aem._Init.call(this.Aa6={I:this},0);A.acg.Aem._Init.call(this.Aa_={I:this},0);A.
acg.Aem._Init.call(this.Aa8={I:this},0);A.Core.BN._Init.call(this.AjD={I:this},0
);A.Core.BN._Init.call(this.Arr={I:this},0);A.Graphics.AME._Init.call(this.VI={I:
this},0);this.__proto__=C.Rating;this.H(AVU);this.Aa7.H(AHk);this.Aa7.L(A.jb.Text
);this.Aa7.AnH(Ald);this.Aa7.Nh(3);this.Aa7.Z(true);this.Aa$.H(AHl);this.Aa$.L(A.
jb.Text);this.Aa$.AnH(Ald);this.Aa$.Nh(3);this.Aa$.Z(true);this.Aa9.H(AHm);this.
Aa9.L(A.jb.Text);this.Aa9.AnH(Ald);this.Aa9.Nh(3);this.Aa9.Z(true);this.Background.
H(Aop);this.Background.L(A.jb.AV);this.Aa6.H(AHk);this.Aa6.L(A.jb.E1);this.Aa6.AnH(
Ald);this.Aa6.Z(true);this.Aa_.H(AHl);this.Aa_.L(A.jb.H6);this.Aa_.AnH(Ald);this.
Aa_.Z(true);this.Aa8.H(AHm);this.Aa8.L(A.jb.Gf);this.Aa8.AnH(Ald);this.Aa8.Z(true
);this.AjD.Filter=147;this.Arr.Filter=1;this.VI.BlQ(360);this.VI.Bm6(22);this.VI.
Bne(2);this.J(this.Aa7,0);this.J(this.Aa$,0);this.J(this.Aa9,0);this.J(this.Background
,0);this.J(this.Aa6,0);this.J(this.Aa_,0);this.J(this.Aa8,0);this.Aa7.Zu(this.VI
);this.Aa$.Zu(this.VI);this.Aa9.Zu(this.VI);this.Background.Aw(A.aaL(A.ach.NR));
this.Aa6.Zu(this.VI);this.Aa_.Zu(this.VI);this.Aa8.Zu(this.VI);this.AjD.BO=[this
,this.Bz7];this.Arr.BO=[this,this.IW];},_Done:function(){this.__proto__=A.Core.P;
this.Aa7._Done();this.Aa$._Done();this.Aa9._Done();this.Background._Done();this.
Aa6._Done();this.Aa_._Done();this.Aa8._Done();this.AjD._Done();this.Arr._Done();
this.VI._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa7._ReInit();this.Aa$._ReInit();this.Aa9._ReInit();this.Background.
_ReInit();this.Aa6._ReInit();this.Aa_._ReInit();this.Aa8._ReInit();this.AjD._ReInit(
);this.Arr._ReInit();this.VI._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asq={Akj:null,Asb:null,Background:null,TN:null,TI:null,AbY:null,AbX:null,AbW:
null,Acv:null,Acu:null,Act:null,Ack:null,Acj:null,AbR:null,AbQ:null,Aca:null,Ab$:
null,Aqz:null,Init:function(aArg){},BjN:function(G){this.AbY.R(AHn);this.AbX.R(A.
jV);this.AbW.R(A.jV);this.Acv.R(AVV);this.Acu.R(A.jV);this.Act.R(A.jV);this.Ack.
R(A.jV);this.Acj.R(A.jV);this.AbR.R(A.jV);this.AbQ.R(A.jV);this.Aca.R(A.jV);this.
Ab$.R(A.jV);},BnF:function(G){this.TI.Z(true);this.TN.Z(true);var IA=this.Ik();if(
!IA)return;this.TN.R(IA.GetFPS().toFixed()+AVW);this.TI.R(AVX);this.TI.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akj={I:this},0);A.Core.Timer._Init.call(this.Asb={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TN={I:this},0);A.acg.
Text._Init.call(this.TI={I:this},0);A.acg.Text._Init.call(this.AbY={I:this},0);A.
acg.Text._Init.call(this.AbX={I:this},0);A.acg.Text._Init.call(this.AbW={I:this}
,0);A.acg.Text._Init.call(this.Acv={I:this},0);A.acg.Text._Init.call(this.Acu={I:
this},0);A.acg.Text._Init.call(this.Act={I:this},0);A.acg.Text._Init.call(this.Ack={
I:this},0);A.acg.Text._Init.call(this.Acj={I:this},0);A.acg.Text._Init.call(this.
AbR={I:this},0);A.acg.Text._Init.call(this.AbQ={I:this},0);A.acg.Text._Init.call(
this.Aca={I:this},0);A.acg.Text._Init.call(this.Ab$={I:this},0);A.acg.AL._Init.call(
this.Aqz={I:this},0);this.__proto__=C.Asq;this.H(AcO);this.Ar(false);this.Akj.PO(
2000);this.Akj.Wx(1);this.Akj.Ar(true);this.Asb.Ar(true);this.Background.AZ(0x3F
);this.Background.H(AcO);this.Background.L(0x78000000);this.TN.H(AVY);this.TN.A6(
0x14);this.TN.R(A.jV);this.TN.L(0xFFFFFC00);this.TN.Z(false);this.TI.H(AHo);this.
TI.A6(0x11);this.TI.R(A.jV);this.TI.Z(false);this.AbY.H(AsZ);this.AbY.A6(0x11);this.
AbY.R(A.jV);this.AbX.H(AHp);this.AbX.A6(0x11);this.AbX.R(A.jV);this.AbW.H(AHq);this.
AbW.A6(0x14);this.AbW.R(A.jV);this.Acv.H(Ax_);this.Acv.A6(0x11);this.Acv.R(A.jV);
this.Acu.H(AHr);this.Acu.A6(0x11);this.Acu.R(A.jV);this.Act.H(Ax$);this.Act.A6(0x14
);this.Act.R(A.jV);this.Ack.H(AVZ);this.Ack.A6(0x11);this.Ack.R(A.jV);this.Acj.H(
AV0);this.Acj.A6(0x14);this.Acj.R(A.jV);this.AbR.H(AV1);this.AbR.A6(0x11);this.AbR.
R(A.jV);this.AbQ.H(AV2);this.AbQ.A6(0x14);this.AbQ.R(A.jV);this.Aca.H(AHs);this.
Aca.A6(0x11);this.Aca.R(A.jV);this.Ab$.H(AV3);this.Ab$.A6(0x14);this.Ab$.R(A.jV);
this.Aqz.H(O5);this.J(this.Background,0);this.J(this.TN,0);this.J(this.TI,0);this.
J(this.AbY,0);this.J(this.AbX,0);this.J(this.AbW,0);this.J(this.Acv,0);this.J(this.
Acu,0);this.J(this.Act,0);this.J(this.Ack,0);this.J(this.Acj,0);this.J(this.AbR,
0);this.J(this.AbQ,0);this.J(this.Aca,0);this.J(this.Ab$,0);this.J(this.Aqz,0);this.
Akj.Mx=[this,this.BjN];this.Asb.Mx=[this,this.BnF];this.TN.S(A.aaL(A.fl.Ak));this.
TI.S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.
AbW.S(A.aaL(A.fl.Ak));this.Acv.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.
Act.S(A.aaL(A.fl.Ak));this.Ack.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.
AbR.S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));this.Aca.S(A.aaL(A.fl.Ak));this.
Ab$.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akj._Done();this.Asb._Done();this.Background._Done();this.TN._Done();this.TI.
_Done();this.AbY._Done();this.AbX._Done();this.AbW._Done();this.Acv._Done();this.
Acu._Done();this.Act._Done();this.Ack._Done();this.Acj._Done();this.AbR._Done();
this.AbQ._Done();this.Aca._Done();this.Ab$._Done();this.Aqz._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akj._ReInit();this.
Asb._ReInit();this.Background._ReInit();this.TN._ReInit();this.TI._ReInit();this.
AbY._ReInit();this.AbX._ReInit();this.AbW._ReInit();this.Acv._ReInit();this.Acu.
_ReInit();this.Act._ReInit();this.Ack._ReInit();this.Acj._ReInit();this.AbR._ReInit(
);this.AbQ._ReInit();this.Aca._ReInit();this.Ab$._ReInit();this.Aqz._ReInit();this.
TN.S(A.aaL(A.fl.Ak));this.TI.S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.AbX.
S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.Acv.S(A.aaL(A.fl.Ak));this.Acu.
S(A.aaL(A.fl.Ak));this.Act.S(A.aaL(A.fl.Ak));this.Ack.S(A.aaL(A.fl.Ak));this.Acj.
S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));this.Aca.
S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Act)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab$)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGC={FF:null,Dj:null,Au:null,Js:null,HJ:null,Uc:null,Bc:null,Sh:null,Gt:null
,Gs:null,FU:0,A8:0,Bjk:false,Init:function(aArg){},Ai:function(Ae){C.Dt.Ai.call(
this,Ae);this.Ht.Z(false);this.H2.Z(false);if(!!this.Dj){this.Sh.R(this.Au.Format(
Aya));this.Uc.R(this.Au.Format(AV4));}if(this.A8===1){this.HJ.Z(true);this.HJ.H(
this.Sh.M);this.HJ.L(A.jb.Bm);this.Sh.L(this.Background.AQ);this.Uc.L(A.jb.Bm);}
else if(this.A8===2){this.HJ.Z(true);this.HJ.H(this.Uc.M);this.HJ.L(A.jb.Bm);this.
Sh.L(A.jb.Bm);this.Uc.L(this.Background.AQ);}else{this.HJ.Z(false);this.Sh.L(this.
V.AQ);this.Bc.L(this.V.AQ);this.Uc.L(this.V.AQ);}},Qm:function(G){if(this.FC===1
)A.pe([this,this.U8],this);else if(this.FC===4)A.pe([this,this.AiD],this);else if(
this.FC===5)A.pe([this,this.Aio],this);C.Dt.Qm.call(this,G);},J$:function(G){switch(
this.A8){case 0:C.Dt.J$.call(this,G);break;case 2:break;default:this.Adv(this);}
},J6:function(G){switch(this.A8){case 0:C.Dt.J6.call(this,G);break;default:this.
Ain(this);}},Adx:function(G){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0
])));},Ab8:function(E){if(A.aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Adx
],this.Dj,0);this.Dj=E;if(!!E)A.zX([this,this.Adx],E,0);if(!!E)A.pe([this,this.Adx
],this);},Ui:function(E){if(this.FU===E)return;this.FU=E;this.Au.Initialize(this.
FU);this.Am();},Adv:function(G){this.FC=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);},U8:function(G){this.Ew(this.A8+1
);},Al2:function(G){this.FC=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiD],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},Al1:function(G){this.FC=5;this.Am();if(this.
Bo.Bw){A.pe([this,this.Aio],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiD:function(
G){var B;var F;var BR=this.FU;if(this.A8===1)this.Au.AnC(this.Au.AjT+1);if(this.
A8===2)this.Au.AnF(this.Au.AvZ+1);this.Au.AnI(0);this.Ui(((B=(this.Au.JO()|0))<0
)?B+0x100000000:B);if(this.FU!==BR){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.
FU));A.abo(this.Dj,0);}},Aio:function(G){var B;var F;var BR=this.FU;if(this.A8===
1)this.Au.AnC(this.Au.AjT-1);if(this.A8===2)this.Au.AnF(this.Au.AvZ-1);this.Au.AnI(
0);this.Ui(((B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FU!==BR){if(!!this.
Dj)(F=this.Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}},DJ:function(G){var F;
if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.
ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this
,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV
);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aex
));(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.
U8];}break;case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].
call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].
call(F[0])).Cs(A.aaL(A.ach.Am1));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[
1].call(F[0])).Ck=[this,this.Ain];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,
F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:this.
FF.AkP((F=this.N,F[1].call(F[0])));}},FQ:function(G){this.Ew(1);},G_:function(G){
this.Ew(0);},Ew:function(EO){var F;if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(F[
0])));this.A8=EO;this.Bjk=true;if((this.A8<0)||(this.A8>2))this.A8=0;this.DJ(this
);this.Gt.Bw=!!this.A8;this.Gs.Bw=!!this.A8;this.Am();},Ain:function(G){if(this.
A8>1)this.Ew(this.A8-1);},_Init:function(aArg){C.Dt._Init.call(this,aArg);A.Core.
Bs._Init.call(this.Au={I:this},0);A.Core.BN._Init.call(this.Js={I:this},0);A.acg.
AL._Init.call(this.HJ={I:this},0);A.acg.Text._Init.call(this.Uc={I:this},0);A.acg.
Text._Init.call(this.Bc={I:this},0);A.acg.Text._Init.call(this.Sh={I:this},0);A.
Core.BN._Init.call(this.Gt={I:this},0);A.Core.BN._Init.call(this.Gs={I:this},0);
this.__proto__=C.AGC;this.H(UT);this.V.R(AV5);this.V.L(A.jb.Bm);this.Ht.Z(false);
this.H2.Z(false);this.Js.Filter=1;this.HJ.H(AV6);this.HJ.L(0x55FFFFFF);this.Uc.H(
AV7);this.Uc.I7(true);this.Bc.H(AV8);this.Bc.A6(0x14);this.Bc.R(AV9);this.Sh.H(AV_
);this.Sh.I7(true);this.Sh.A6(0x14);this.Gt.Filter=4;this.Gt.Bw=false;this.Gs.Filter=
5;this.Gs.Bw=false;this.J(this.HJ,0);this.J(this.Uc,0);this.J(this.Bc,0);this.J(
this.Sh,0);this.Js.BO=[this,this.Adv];this.Uc.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(
A.fl.EK));this.Sh.S(A.aaL(A.fl.EK));this.Gt.BO=[this,this.Al2];this.Gt.D0=[this,
this.AiD];this.Gs.BO=[this,this.Al1];this.Gs.D0=[this,this.Aio];this.FF=A._NewObject(
C.Aeq,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Dt;this.Au._Done();
this.Js._Done();this.HJ._Done();this.Uc._Done();this.Bc._Done();this.Sh._Done();
this.Gt._Done();this.Gs._Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt.
_ReInit.call(this);this.Au._ReInit();this.Js._ReInit();this.HJ._ReInit();this.Uc.
_ReInit();this.Bc._ReInit();this.Sh._ReInit();this.Gt._ReInit();this.Gs._ReInit(
);this.Uc.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Sh.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.FF)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"};C.
CH={B6:null,AmR:null,AqO:null,El:null,Text:null,String:A.jV,Bdp:A.jV,Kg:0x12,AK5:
0,AQ:0xFFFFFFFF,N4:0,AUi:0,A_Y:0,Bdq:true,GY:function(CN){var LJ=(A.Core.ARg.isPrototypeOf(
CN)?CN:null);if(!!LJ)this.BCg(this);return A.Core.P.GY.call(this,CN);},Bk:function(
aSize){A.Core.P.Bk.call(this,aSize);A.pe([this,this.Ajj],this);},Db:function(aFilter
){return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(E){if(this.String===
E)return;this.String=E;if(this.Bdq){this.Bdp=E;this.Bdq=false;}this.AK5=E.length;
A.pe([this,this.Ajj],this);},S:function(E){if(this.B6===E)return;this.B6=E;A.pe([
this,this.Ajj],this);},A2:function(E){if(this.AmR===E)return;this.AmR=E;A.pe([this
,this.Ajj],this);},Cu:function(E){if(this.AqO===E)return;this.AqO=E;A.pe([this,this.
Ajj],this);},A6:function(E){if(E===this.Kg)return;this.Kg=E;this.Text.A6(E);},Ajj:
function(G){var B;var AK$=0;if(!this.AK5){this.Text.Z(false);return;}this.Text.Z(
true);this.Text.R(this.String);this.Text.KS(false);if(!!this.B6){AK$=this.B6.Ys(
this.String,0,this.AK5);if(AK$<(((B=this.M)[2]-B[0])-(2*this.Text.I_))){this.Text.
S(this.B6);this.Text.Aw1(this.N4);return;}}this.Text.KS(true);if(!!this.AmR){AK$=
this.AmR.Ys(this.String,0,this.AK5);this.Text.S(this.AmR);this.Text.Aw1(this.AUi
);if((AK$<(((B=this.M)[2]-B[0])-(2*this.Text.I_)))&&(((B=this.Text.Db())[3]-B[1]
)<=((B=this.M)[3]-B[1])))return;}if(!!this.AqO){this.Text.S(this.AqO);if(((B=this.
Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw1((((this.Text.B6.Ascent+this.
Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;this.AQ=E;this.
Text.L(E);},BCg:function(G){this.R(this.Bdp);},Q1:function(E){if(A.aa0(this.El,E
))return;this.El=E;this.Text.Q1(E);},ASd:function(){return A.abh(this.Text.Db(),
this.M.slice(0,2));},Afd:function(AoM){return A.abf(this.M.slice(0,2),this.Text.
Afd(AoM));},Aw1:function(E){if(this.N4===E)return;this.N4=E;A.pe([this,this.Ajj]
,this);},Bm8:function(E){if(this.AUi===E)return;this.AUi=E;A.pe([this,this.Ajj],
this);},Bm9:function(E){if(this.A_Y===E)return;this.A_Y=E;A.pe([this,this.Ajj],this
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.CH;this.H(Ayb);this.Ar(false);this.Text.AZ(0x3F
);this.Text.H(Ayb);this.Text.R(Rj);this.J(this.Text,0);},_Done:function(){this.__proto__=
A.Core.P;this.Text._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.Text._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmR)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqO)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.El)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Text)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"};C.AjR={Y:null,
II:null,AeI:null,I3:null,M7:null,AeC:null,AeH:null,AeG:null,AeD:null,AeF:null,AeE:
null,M9:null,NT:null,Mp:null,De:function(E){C.Yt.De.call(this,E);this.II.L(E);this.
AeI.L(E);this.I3.L(E);this.M7.L(E);this.Mp.L(E);this.AeC.L(E);this.M9.L(E);this.
NT.L(E);this.AeH.L(E);this.AeG.L(E);this.AeD.L(E);this.AeF.L(E);this.AeE.L(E);},
D5:function(G){C.Yt.D5.call(this,G);this.XK(8,1,this.M7);this.XK(12,1,this.Mp);this.
XK(11,1,this.AeC);this.XK(7,1,this.M9);this.XK(14,1,this.NT);this.XK(1,4,this.II
);this.XK(1,1,this.AeI);this.XK(4,1,this.I3);this.XK(22,1,this.AeH);this.XK(26,1
,this.AeG);this.XK(30,1,this.AeD);this.XK(19,1,this.AeF);this.XK(31,1,this.AeE);
this.Text.Z(!this.Y.TL(null,0x1));},XK:function(AJh,Eb,AfP){var AA8=false;if(!!A.
_GetAutoObject(A.Device.Device).An.Filter){var Adi=A._GetAutoObject(A.Device.Device
).An.Filter.DQ(AJh,Eb);if(!!Adi){AA8=true;switch(AJh){case 14:{var Azn=(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(Adi)?Adi:null);if(!!Azn)AfP.Aw(A._GetAutoObject(
A.Device.Converter).A4T(Azn.A4));}break;case 7:{var Azn=(A.Device.GenderFilterCriterion.
isPrototypeOf(Adi)?Adi:null);if(!!Azn)AfP.Aw(A._GetAutoObject(A.Device.Converter
).AmT(Azn.A4));}break;case 1:if(Eb===4)AfP.Aw(A.aaL(A.ach.ADC));else if(Adi.Operator===
4)AA8=false;break;case 22:switch(Adi.Operator){case 0:case 3:AfP.Aw(A.aaL(A.ach.
AQu));break;default:AfP.Aw(A.aaL(A.ach.AjX));}break;case 26:switch(Adi.Operator){
case 0:case 3:AfP.Aw(A.aaL(A.ach.AQs));break;default:AfP.Aw(A.aaL(A.ach.Avw));}break;
default:;}}else if((AJh===1)&&(Eb===4)){AA8=true;AfP.Aw(A.aaL(A.ach.Aey));}}else
if((AJh===1)&&(Eb===4)){AA8=true;AfP.Aw(A.aaL(A.ach.Aey));}AfP.Z(AA8);},_Init:function(
aArg){C.Yt._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Ap.
_Init.call(this.II={I:this},0);A.acg.Ap._Init.call(this.AeI={I:this},0);A.acg.Ap.
_Init.call(this.I3={I:this},0);A.acg.Ap._Init.call(this.M7={I:this},0);A.acg.Ap.
_Init.call(this.AeC={I:this},0);A.acg.Ap._Init.call(this.AeH={I:this},0);A.acg.Ap.
_Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(this.AeD={I:this},0);A.acg.Ap.
_Init.call(this.AeF={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap.
_Init.call(this.M9={I:this},0);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.Ap.
_Init.call(this.Mp={I:this},0);this.__proto__=C.AjR;this.Y.AZ(0x3F);this.Y.H(As0
);this.Y.JP(3);this.II.H(As1);this.AeI.H(AV$);this.AeI.Aj(true);this.I3.H(AWa);this.
I3.Aj(true);this.M7.H(AWb);this.M7.Aj(true);this.AeC.H(AWc);this.AeC.Aj(true);this.
AeH.H(AHt);this.AeH.Aj(true);this.AeG.H(AHt);this.AeG.Aj(true);this.AeD.H(AWd);this.
AeD.Aj(true);this.AeF.H(AHu);this.AeF.Aj(true);this.AeE.H(AHu);this.AeE.Aj(true);
this.M9.H(AHv);this.M9.Aj(true);this.NT.H(AHw);this.NT.Aj(true);this.Text.R(A.aaR(
A.acf.None));this.Mp.H(AHv);this.Mp.Aj(true);this.JV(this.Gr,-3);this.JV(this.D1
,-3);this.JV(this.A_,-3);this.JV(this.AP,-2);this.J(this.Y,-2);this.J(this.II,-2
);this.J(this.AeI,-2);this.J(this.I3,-2);this.J(this.M7,-2);this.J(this.AeC,-2);
this.J(this.AeH,-2);this.J(this.AeG,-2);this.J(this.AeD,-2);this.J(this.AeF,-2);
this.J(this.AeE,-2);this.J(this.M9,-2);this.J(this.NT,-2);this.J(this.Mp,0);this.
II.Aw(A.aaL(A.ach.Aey));this.AeI.Aw(A.aaL(A.ach.AQj));this.I3.Aw(A.aaL(A.ach.APK
));this.M7.Aw(A.aaL(A.ach.ADw));this.AeC.Aw(A.aaL(A.ach.AbD));this.AeH.Aw(A.aaL(
A.ach.AjX));this.AeG.Aw(A.aaL(A.ach.Avw));this.AeD.Aw(A.aaL(A.ach.AQh));this.AeF.
Aw(A.aaL(A.ach.AQi));this.AeE.Aw(A.aaL(A.ach.AQg));this.M9.Aw(A.aaL(A.ach.ADy));
this.NT.Aw(A.aaL(A.ach.AvB));this.Mp.Aw(A.aaL(A.ach.ADF));},_Done:function(){this.
__proto__=C.Yt;this.Y._Done();this.II._Done();this.AeI._Done();this.I3._Done();this.
M7._Done();this.AeC._Done();this.AeH._Done();this.AeG._Done();this.AeD._Done();this.
AeF._Done();this.AeE._Done();this.M9._Done();this.NT._Done();this.Mp._Done();C.Yt.
_Done.call(this);},_ReInit:function(){C.Yt._ReInit.call(this);this.Y._ReInit();this.
II._ReInit();this.AeI._ReInit();this.I3._ReInit();this.M7._ReInit();this.AeC._ReInit(
);this.AeH._ReInit();this.AeG._ReInit();this.AeD._ReInit();this.AeF._ReInit();this.
AeE._ReInit();this.M9._ReInit();this.NT._ReInit();this.Mp._ReInit();this.Text.R(
A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yt._Mark.call(this,D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.M9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NT)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilter"
};C.Amr={H5:null,CF:function(G){if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);this.H5.Gm();this.H5.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);C.Ra.CF.call(this,G);},An_:function(){C.Ra.An_.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.Background.L(A._GetAutoObject(A.acj.
Temperature).Bzi(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Kv));this.C8.L(A._GetAutoObject(A.acj.Temperature).Bzl(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv));this.JK.L(A.
_GetAutoObject(A.acj.Temperature).Bzj(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Kv));this.HB.L(A._GetAutoObject(A.acj.Temperature
).Bzk(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device
).Kv));this.MD.L(this.JK.AQ);this.TemperatureUnit.L(this.JK.AQ);}break;default:;
}},AcG:function(){C.Ra.AcG.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:{this.N.Cs(A.aaL(A.ach.AQC));this.N.C6(A.aaL(A.ach.Am3));}break;case 4:{
this.N.Cs(null);this.N.C6(A.aaL(A.ach.AvJ));}break;default:;}},WM:function(G){switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(
A.Device.Device).Kv>3240)&&(A._GetAutoObject(A.Device.Device).Kv<5460)){A._GetAutoObject(
A.Device.Device).AhH();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}
break;case 3:{this.H5.OnSetTemperature(A._GetAutoObject(A.Device.Device).Kv);var
B1=A._GetAutoObject(A.Device.Converter).AsE(A._GetAutoObject(A.Device.Helper).W.
AnimalType,A._GetAutoObject(A.Device.Device).Kv);this.H5.OnSetRatingTemperature(
B1);this.H5.Cq(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fv();
}break;case 4:this.AKz(this);break;default:;}},AkV:function(G){C.Ra.AkV.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Ds(9);break;case 4:this.AKz(this);break;default:;}},AxQ:function(
){C.Ra.AxQ.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JK.R(A._GetAutoObject(A.acj.Temperature).Bzq(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv));break;default:;}},AxR:function(
){C.Ra.AxR.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WA(A._GetAutoObject(A.acj.Temperature).Bzm(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Kv));this.Jb.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WA(16711680
);this.Jb.Ar(true);}break;default:this.Jb.Ar(false);}},AUu:function(){this.C8.Aw(
A.aaL(A.ach.AvI));this.C8.Cv(A._GetAutoObject(A.acj.Temperature).Bzr(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv));this.NR.Cv(
0);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.Amr;this.Dq(
C.IG);this.H5=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Ra._Mark.
call(this,D);if((B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Aht={N2:null,DK:null,Ii:null,Bc:null,Aut:null,String:A.jV,AxF:A.jV,Mt:7,Aka:
2,KT:0,AUH:false,Init:function(aArg){},Bk:function(aSize){A.Core.P.Bk.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Aka,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bh));else this.DK.S(A.aaL(A.fl.Ak));this.Ii.S(this.DK.B6);this.Ii.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WF],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahn:function(
E){if(this.AxF===E)return;this.AxF=E;this.Ii.R(E);},Ab7:function(E){this.Mt=E;if(
E<10)this.AS3(2);else if(E<40)this.AS3(1);else this.AS3(0);A.pe([this,this.WF],this
);},WF:function(G){var B;while(!!this.Bc.Ah)this.HN(this.Bc.Ah);if(this.Mt>1){var
Add=this.AOJ();var A1X=this.AOH();var Apq=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var Az3;var AKY;var At4;var Al9=null;if(!!this.N2&&(this.N2.AY>0))Al9=this.N2.K0;
while((Add>=A1X)&&(Add>0)){var AtF=A._NewObject(C.Ajs,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aka)*(((Add-A1X)/86400)|0))/this.Mt)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aka)*((((Add-A1X)/86400)|0)+1))/this.Mt)|0;while(!!Al9&&(Al9.Timestamp>=
Add)){if(Al9.Timestamp<(Add+86400))AtF.Os(Al9.A4,Al9.Timestamp);Al9=Al9.Ah;}var Aue=
0;if(AtF.AY>0)Aue=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtF.AY
)|0;else if(this.Mt<10){Aue=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
At4=A._NewObject(A.acg.Text,0);At4.H([x1,Apq,x2,Apq+Aue]);At4.S(A.aaL(A.fl.Bh));
At4.L(A.jb.Text);At4.R(A.aaR(A.acf.Ae$));this.J(At4,0);}var AJM=AtF.K0;var O=0;while(
!!AJM){if(O>=AtF.AY)throw new Error(AWe);Az3=A._NewObject(A.acg.AL,0);Az3.L(A._GetAutoObject(
A.acj.Assessment).Qj(AJM.A4));if(O===(AtF.AY-1))Az3.H([x1,Apq+(O*Aue),x2,this.Bc.
M[1]]);else Az3.H([x1,Apq+(O*Aue),x2,Apq+((O+1)*Aue)]);this.J(Az3,0);AJM=AJM.Ah;
O=O+1;}if(this.AUH){var Bx7=A._GetAutoObject(A.Device.Helper).Aqp(A._GetAutoObject(
A.Device.Helper).Dv());var Bx6=A._GetAutoObject(A.Device.Helper).Aqp(Add);if(Bx7===
Bx6){var ALq=A._NewObject(A.acg.Aem,0);ALq.L(A.jb.Text);var BdN=(x1+this.Aka)+(((
x2-x1)/2)|0);ALq.H([BdN-4,this.Bc.M[1]-4,BdN+4,this.Bc.M[1]]);ALq.Zu(this.Aut);this.
J(ALq,0);}}Add=Add-86400;if(this.Aka>0){AKY=A._NewObject(A.acg.AL,0);AKY.H([x1,Apq
,x1+this.Aka,Apq+((((B=this.M)[3]-B[1])/2)|0)]);AKY.L(A.jb.Bc);this.J(AKY,0);}}}
},Ab9:function(E){this.N2=E;A.pe([this,this.WF],this);},AS3:function(E){if(this.
Aka===E)return;this.Aka=E;A.pe([this,this.WF],this);},De:function(E){if(this.KT===
E)return;this.KT=E;this.DK.L(E);this.Ii.L(E);},AOH:function(){var B;return this.
AOJ()-(((((B=this.Mt)<0)?B+0x100000000:B)-1)*86400);},AOJ:function(){return A._GetAutoObject(
A.Device.Converter).AhL();},Bna:function(E){if(this.AUH===E)return;this.AUH=E;A.
pe([this,this.WF],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Ii={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.AxO._Init.call(this.Aut={I:this},0);
this.__proto__=C.Aht;this.H(BF);this.Ar(false);this.DK.H(AHx);this.DK.Hh(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Ii.H(AHx);this.Ii.Hh(5);this.Ii.A6(0x14);this.
Ii.L(A.jb.Text);this.Bc.H(AHy);this.Bc.L(A.jb.Bc);this.KT=A.jb.Text;this.Aut.H(AWf
);this.J(this.DK,0);this.J(this.Ii,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Ii.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Ii._Done();this.Bc._Done();this.Aut._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Ii._ReInit();this.Bc._ReInit();this.Aut._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Ii.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aut)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A4Z={Ah:null,Timestamp:0,A4:0,_Init:function(
aArg){this.__proto__=C.A4Z;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajs={K0:null,MS:null,AY:0,Os:
function(A7,Qa){var Hb;Hb=A._NewObject(C.A4Z,0);Hb.A4=A7;Hb.Timestamp=Qa;if(!this.
K0){this.K0=Hb;this.MS=Hb;this.AY=1;}else{this.MS.Ah=Hb;this.MS=Hb;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajs;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ei={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MG],this);},DE:function(G){var B;var Fc=0;var X=this.AV;switch(
this.Cr.CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;
default:;}X=this.QD(X,Fc,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HD(X,true,null,null);this.DJ(this);},AlZ:function(G){A._GetAutoObject(C.A$
).Fv();},ApL:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null).Agn)A.
pe((C.Co.isPrototypeOf(B=this.AV)?B:null).Agn,this);},Fe:function(G){var B;this.
Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.
Y.Br[1]);},DJ:function(G){var B;var GS=(C.Co.isPrototypeOf(B=this.AV)?B:null);if(
!!GS){this.N.Hu(A.jV);this.N.CV(GS.AxI);this.N.Ja.Dr(255);this.N.HQ.Dr(GS.Axf);this.
N.AE6(GS.Avj);this.N.AnA(GS.AmS);this.N.CY(GS.AQb);this.N.C6(GS.Aq5);GS.A20(this
);}},MG:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ei;this.Background.H(Rk);this.Background.L(A.jb.CS);this.N.H(Xc);this.
N.Ar(false);this.N.Z(true);this.Y.H(E$);this.Y.JP(1);this.Ay.H(Ir);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fe];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATM={NA:null,ASK:null,Ad1:null,VC:null,GO:null,PopupTimeout:null,Acb:null,Agz:
null,PopupIdToString:null,AtB:null,Text:A.jV,AkI:A.jV,AJ6:A.jV,Ak2:0,ALb:-1,Azm:-
1,AKG:0,ATO:0,A16:false,CP:function(){this.A_m(this.PopupIdToString.BI(this.ATO)
);},Init:function(aArg){this.Boz(this);},Bgz:function(G){var B;if(this.Ak2>0){this.
A_A((this.Ak2/1000)|0);this.PopupTimeout.Wx(0);this.PopupTimeout.PO(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxE(this);},Bgv:function(G){var Qt=this.
Text;var AfS=this.AkI;var AKE=A.abi(16,A.jV,null);var index=0;var Azh=0;while(AfS
!==A.jV){Azh=AfS.indexOf(A.Device.PopupParamSeparator,0);if(Azh!==-1){AKE.Set(index
,A.ab1(AfS,Azh,(AfS.length-Azh)+1));AfS=A.ab1(AfS,0,Azh+1);index=index+1;if(index>=
16){A.ab5("%s",(AWg+AfS)+AWh);AfS=A.jV;}}else{AKE.Set(index,AfS);AfS=A.jV;}}index=
0;while(index<Qt.length){if((Qt.charCodeAt(index)||0)===0x7B){var Bdo=Qt.indexOf(
String.fromCharCode(0x7D),index);if(Bdo===-1){A.ab5("%s",(((AWi+Qt)+AWj)+index.toFixed(
))+Afy);index=Qt.length;}else{var Bfg=(Bdo-index)-1;var A3z=A.abW(Qt,index+1,Bfg
);var AKD=A.wz(A3z,-1,10);Qt=A.ab1(Qt,index,Bfg+2);if(A3z===AWk)this.Bnr(index);
else if(((AKD>0)&&(AKD<=16))&&(this.AkI!==A.jV)){Qt=A.abU(Qt,AKE.Get(AKD-1),index
);if(this.A16===true)this.Bnq(A.wz(AKE.Get(AKD-1),0,10));}else A.ab5("%s",(AWl+A3z
)+AWm);}}index=index+1;}this.Bnp(Qt);},CF:function(G){A.pe([this,this.Bgz],this);
},Ai:function(Ae){var B;this.Ad1.H(A.aaT(this.GO.Db(),AhU));this.VC.H(A.aaT(this.
GO.Db(),AhU));if(!!this.NA){this.NA.H(A.abM(this.NA.M,this.GO.M[0]));this.NA.H(A.
abO(this.NA.M,this.GO.M[3]+10));this.NA.H(A.abL(this.NA.M,(B=this.GO.M)[2]-B[0])
);this.NA.H(A.abI(this.NA.M,8));this.Ad1.H(A.abh(A.aaT(this.GO.Db(),AhU),AHz));this.
VC.H(A.abh(A.aaT(this.GO.Db(),AhU),AHz));}else{this.Ad1.H(A.aaT(this.GO.Db(),AhU
));this.VC.H(A.aaT(this.GO.Db(),AhU));}},DE:function(G){var Jy=(A.Core.BN.isPrototypeOf(
G)?G:null);if((Jy.CO===4)&&((this.VC.M[1]+this.M[1])<this.M[1])){this.GO.H(A.abO(
this.GO.M,this.GO.M[1]+28));this.Am();}else if((Jy.CO===5)&&((this.VC.M[3]+this.
M[1])>this.N.M[1])){this.GO.H(A.abO(this.GO.M,this.GO.M[1]-28));this.Am();}if((Jy.
CO===6)&&!!this.D_().CB)this.D_().AFd(1);else if((Jy.CO===7)&&!!this.D_().Cl)this.
D_().AFd(3);},IW:function(G){switch(this.D_().Ahc){case 1:this.AlZ(this);break;case
3:this.ApL(this);break;case 2:this.AAz(this);break;case 0:break;default:A.ab5("%s%e"
,AWn,this.D_().Ahc);}},AlZ:function(G){var B;(B=this.D_().CB)?B[1].call(B[0],this
):null;},ApL:function(G){var B;(B=this.D_().Cl)?B[1].call(B[0],this):null;},AAz:
function(G){var B;(B=this.D_().Ck)?B[1].call(B[0],this):null;},LO:function(G){this.
N.I4.L((this.N.I4.AQ&0x00FFFFFF)|(100<<24));},E3:function(G){var B;this.PopupTimeout.
AxE(this);},A_m:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bgv],this);},BAt:function(G){var B;this.A_A(this.Azm-1);if(this.Azm<=0){this.PopupTimeout.
AxE(this);(B=this.ASK)?B[1].call(B[0],this):null;}},A_o:function(E){if(this.Ak2===
E)return;this.Ak2=E;A.pe([this,this.Bgz],this);},A9$:function(E){if(this.AkI===E
)return;this.AkI=E;A.pe([this,this.Bgv],this);},Bnp:function(E){if(this.AJ6===E)
return;this.AJ6=E;this.ABp(this);this.Byc(this);},ABp:function(G){if((this.Azm!==-
1)&&(this.ALb!==-1)){var By4=this.AtB.Format(AWo);this.GO.R(A.abU(this.AJ6,By4,this.
ALb));}else this.GO.R(this.AJ6);this.GO.H(AHA);},Bnr:function(E){if(this.ALb===E
)return;this.ALb=E;this.ABp(this);},A_A:function(E){if(this.Azm===E)return;this.
Azm=E;this.AtB.AFI(E);A.pe([this,this.ABp],this);},Byc:function(G){this.GO.Db();
if(this.GO.M[1]<=this.M[1])this.GO.H(A.abO(this.GO.M,28));this.Am();},A_C:function(
E){if(this.A16===E)return;this.A16=E;if(E===true)A.pe([this,this.BA4],this);},BA4:
function(G){if(!this.NA){this.NA=A._NewObject(A.acr.ADl,0);this.NA.F0(0);this.NA.
EV(100);this.NA.OnSetAppearance(this.Acb);this.J(this.NA,0);this.Ahw(this.NA,this.
GO);}this.NA.By(this.AKG);},Bnq:function(E){if(this.AKG===E)return;this.AKG=E;if(
!!this.NA)this.NA.By(this.AKG);},Boz:function(G){var B;this.N.Dr(0);this.Agz.AnY(
this);},Bm2:function(E){if(this.ATO===E)return;this.ATO=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.Ad1={I:this},0);A.acg.BU._Init.
call(this.VC={I:this},0);A.acg.Text._Init.call(this.GO={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADm._Init.call(this.Acb={I:this},
0);A.acl.Gh._Init.call(this.Agz={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtB={I:this},0);this.
__proto__=C.ATM;var B;this.H(Cc);this.Background.H(E$);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ej.Ar(false);this.Ej.Z(false);this.Ad1.H(AHB);this.
Ad1.L(A.jb.CK);this.VC.H(AHB);this.VC.Nh(2);this.VC.L(A.jb.Text);this.GO.H(AHA);
this.GO.Hh(10);this.GO.I7(true);this.GO.Bno(0);this.GO.KS(true);this.GO.L(A.jb.Text
);this.PopupTimeout.PO(0);this.Acb.A_t(0);this.Acb.A_r(A.jb.AV);this.Acb.A_q(0);
this.Acb.AFY(AHi);this.Agz.HM(1);this.Agz.B2=255;this.Agz.Cw=0;this.JV(this.Ej,-
1);this.J(this.Ad1,0);this.J(this.VC,0);this.J(this.GO,0);this.GO.S(A.aaL(A.fl.Af
));this.PopupTimeout.Mx=[this,this.BAt];this.Acb.A_s(A.aaL(A.ach.NS));this.Acb.A_p(
A.aaL(A.ach.NS));this.Agz.Q=[B=this.N,B.Awi,B.AZ7];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad1._Done();this.VC._Done();this.GO._Done();this.PopupTimeout.
_Done();this.Acb._Done();this.Agz._Done();this.PopupIdToString._Done();this.AtB.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad1._ReInit();this.VC._ReInit();this.GO._ReInit();this.PopupTimeout._ReInit();this.
Acb._ReInit();this.Agz._ReInit();this.PopupIdToString._ReInit();this.AtB._ReInit(
);this.GO.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASK)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Agz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtB)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Ml={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FN=A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FN=A.jb.Text;
GQ=A.jb.Bm;}if(!this.LI){this.Background.L(FN);this.V.L(A.jb.Am4);}else if(this.
Qn){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Ml;},_className:"Application::DarkThemeMenuItem"
};C.Anj={AdB:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Anj;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={XA:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);
this.Bx.Cl=[this,this.A21];this.Bx.Ck=null;this.Bx.CB=[this,this.XA];this.Bx.CV(
A.aaR(A.acf.Ok));this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.Aew));}return this.Bx;}
,A21:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).IW(this);},CF:function(G){},AIG:function(s){this.CF(s);},E3:function(
G){},AyC:function(s){this.E3(s);},_Init:function(aArg){C.Abi._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APG={V7:
null,YP:null,YI:null,Init:function(aArg){this.Bb(this.V7);},Adt:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YP)A._GetAutoObject(A.Device.
Device).A9(6,true,A.jV,0,[this,this.BBg]);else if(Aa===this.V7)A._GetAutoObject(
A.Device.Device).A9(9,true,A.jV,0,[this,this.BBD]);else if(Aa===this.YI)A._GetAutoObject(
C.A$).Cg(4);else throw new Error(Ayc);A._GetAutoObject(A.Device.Device).Ds(0);},
BBg:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(
At.PopupState===7))A._GetAutoObject(A.Device.Device).AGk();},BBD:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))
A._GetAutoObject(A.Device.Device).Axw();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ml._Init.call(this.V7={I:this},0);C.Ml._Init.call(this.YP={I:this
},0);C.Ml._Init.call(this.YI={I:this},0);this.__proto__=C.APG;this.H(AcO);this.V7.
H(BF);this.V7.Ar(true);this.V7.T(A.aaR(A.acf.A$e));this.V7.Bg(true);this.YP.H(IR
);this.YP.Ar(true);this.YP.T(A.aaR(A.acf.A_X));this.YP.Bg(true);this.YI.H(P7);this.
YI.Ar(true);this.YI.T(A.aaR(A.acf.SM));this.YI.Bg(true);this.J(this.V7,0);this.J(
this.YP,0);this.J(this.YI,0);this.V7.AR=[this,this.Adt];this.YP.AR=[this,this.Adt
];this.YI.AR=[this,this.Adt];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.V7._Done();this.YP._Done();this.YI._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.V7._ReInit(
);this.YP._ReInit();this.YI._ReInit();this.V7.T(A.aaR(A.acf.A$e));this.YP.T(A.aaR(
A.acf.A_X));this.YI.T(A.aaR(A.acf.SM));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YI)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GG={AaF:null,OverlayMenu:null,WH:null,A3V:null
,La:null,A3y:null,AkJ:null,N0:null,Az9:100,Init:function(aArg){var B;A.zX([this,
this.BeJ],[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyL],0);A.zX([this,this.BeD
],[B=A._GetAutoObject(A.Device.Device),B.ASq,B.AZ5],0);A.zX([this,this.A2S],[B=A.
_GetAutoObject(A.Device.Device),B.Av9,B.AyE],0);A.zX([this,this.Bz2],[B=A._GetAutoObject(
A.Device.Device),B.Av6,B.AyD],0);A.zX([this,this.Bz3],[B=A._GetAutoObject(A.Device.
Device),B.A8m,B.BaT],0);A.zX([this,this.ApM],[B=A._GetAutoObject(A.Device.Device
),B.ASB,B.A0b],0);A.zX([this,this.Be0],[B=A._GetAutoObject(A.Device.Device),B.Wu
,B.Xd],0);A.pe([this,this.BeJ],this);A.pe([this,this.BeD],this);A.pe([this,this.
ApM],this);A.pe([this,this.Be0],this);this.A3V.As([B=this.WH,B.AEp,B.Zp]);this.J(
this.WH,0);this.Bb(this.WH);this.BxR(this);},Ai:function(Ae){},BeD:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AEc){if(!this.AaF){this.AaF=A._NewObject(
C.Asq,0);this.AaF.H(A.abJ(this.AaF.M,this.WH.M.slice(0,2)));this.AaF.H(A.abO(this.
AaF.M,this.WH.M[3]-((B=this.AaF.M)[3]-B[1])));this.J(this.AaF,1);}}else{if(!!this.
AaF)this.HN(this.AaF);this.AaF=null;}},BeJ:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Ds(null);break;case 1:this.Ds(A._NewObject(
C.APG,0));break;case 8:this.Ds(A._NewObject(C.ALY,0));break;case 2:this.Ds(A._NewObject(
C.ALV,0));break;case 3:this.Ds(A._NewObject(C.AL1,0));break;case 4:this.Ds(A._NewObject(
C.AT7,0));break;case 5:this.Ds(A._NewObject(C.AVB,0));break;case 6:this.Ds(A._NewObject(
C.ATH,0));break;case 7:this.Ds(A._NewObject(C.Amu,0));break;case 11:this.Ds(A._NewObject(
C.AMu,0));break;case 12:this.Ds(A._NewObject(C.AMt,0));break;case 9:this.Ds(A._NewObject(
C.ARA,0));break;case 10:this.Ds(A._NewObject(C.AMp,0));break;case 14:this.Ds(A._NewObject(
C.ARw,0));break;case 15:this.Ds(A._NewObject(C.ARx,0));break;case 13:this.Ds(A._NewObject(
C.ARy,0));break;case 16:this.Ds(A._NewObject(C.ATW,0));break;case 17:this.Ds(A._NewObject(
C.AMQ,0));break;default:throw new Error(AWp+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Ds:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.WD).ArC(null);this.N0.AqE(this.OverlayMenu,A._GetAutoObject(
C.Axz),null,null,[B=this.OverlayMenu,B.AyC],null,true);this.Bb(this.WH);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.N0.AkL(this.OverlayMenu,A._GetAutoObject(C.Axy),null
,null,null,null,null,[B=this.OverlayMenu,B.AIG],null,false);this.Bb(this.N0);A._GetAutoObject(
C.WD).ArC(this.OverlayMenu.KR());}else if(!!this.La){this.Bb(this.N0);A._GetAutoObject(
C.WD).ArC(this.La.Akq().KR());}},Ahh:function(E){var B;if(this.La===E)return;if(
!!this.La){A._GetAutoObject(C.WD).ArC(null);this.N0.AqE(this.La.Akq(),A._GetAutoObject(
C.Aff),null,null,[B=this.La.Akq(),B.AyC],null,false);this.Bb(this.WH);}this.La=E;
if(!!this.La){this.N0.AkL(this.La.Akq(),A._GetAutoObject(C.Aff),null,null,null,null
,null,[this,this.Bll],null,false);this.Bb(this.N0);A._GetAutoObject(C.WD).ArC(this.
La.Akq().KR());}else if(!!this.OverlayMenu){this.Bb(this.N0);A._GetAutoObject(C.
WD).ArC(this.OverlayMenu.KR());}},BxR:function(G){var B;var F;this.J(this.A3y,0);(
F=A._GetAutoObject(C.WD),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WD).M)[3]-B[1]))));this.ZD(this.N0);},A2S:function(G){if(A._GetAutoObject(A.Device.
Device).AmC)switch(A._GetAutoObject(A.Device.Device).KH){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A$).Ahp(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa4<98)A._GetAutoObject(C.A$).Cg(4);}else{this.Az9=100;this.Bcv();}},Bz2:
function(G){this.Bcv();},Bcv:function(){if(!A._GetAutoObject(A.Device.Device).AmC
){if(A._GetAutoObject(A.Device.Device).Aa4<=2){if(this.Az9>2)switch(A._GetAutoObject(
A.Device.Device).KH){case 38:break;case 4:case 39:A._GetAutoObject(C.A$).Ahp(38);
break;default:A._GetAutoObject(C.A$).Cg(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa4<=10){if(this.Az9>10)switch(A._GetAutoObject(A.Device.Device).KH){case
39:break;case 4:case 38:A._GetAutoObject(C.A$).Ahp(39);break;default:A._GetAutoObject(
C.A$).Cg(39);}}else if(A._GetAutoObject(A.Device.Device).Aa4<=20){if(this.Az9>20
)switch(A._GetAutoObject(A.Device.Device).KH){case 39:break;case 4:case 38:A._GetAutoObject(
C.A$).Ahp(39);break;default:A._GetAutoObject(C.A$).Cg(39);}}else switch(A._GetAutoObject(
A.Device.Device).KH){case 38:case 4:case 39:A._GetAutoObject(C.A$).Fv();break;default:;
}this.Az9=A._GetAutoObject(A.Device.Device).Aa4;}},Bz3:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqs){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A9(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Any(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A9(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Any(0
);}break;default:A.ab5("%s",AWq+A._GetAutoObject(A.Device.Device).Aqs.toFixed());
}},ApM:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Ds(0);A._GetAutoObject(C.A$).Cg(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KH===5)A._GetAutoObject(C.A$).Ahp(3);break;
default:;}},Be0:function(G){switch(A._GetAutoObject(A.Device.Device).AhN){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Un(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WA(65535);A._GetAutoObject(A.Device.Device).Un(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WA(255);A._GetAutoObject(A.Device.Device).Un(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WA(16776960);A._GetAutoObject(
A.Device.Device).Un(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WA(16711935
);A._GetAutoObject(A.Device.Device).Un(true);}break;default:A.ab5("%s",AWr+A._GetAutoObject(
A.Device.Device).AhN.toFixed());}},Bll:function(G){var B;this.La.Akq().CF(this);
this.La.BAr(this);},Bkp:function(){return this.La;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);C.AkJ._Init.call(this.AkJ={I:this},0);C.N0._Init.call(this.
N0={I:this},0);this.__proto__=C.GG;this.H(Cc);this.N0.H(Rk);this.J(this.N0,0);this.
WH=A._NewObject(C.WH,0);this.A3V=A._GetAutoObject(C.A$);this.AkJ.ANv=[this,this.
Bkp,this.Ahh];this.A3y=A._GetAutoObject(C.WD);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.P;this.AkJ._Done();this.N0._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AkJ._ReInit();this.N0._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaF)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3V)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.La)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A3y)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.Abi={A_M:null,Bx:null,N:null,Cr:null,Ana:null,Anc:null,QN:null,Anb:null,Am_:
null,Ane:null,Am$:null,DE:function(G){var Fc=0;var X=this.AV;switch(this.Cr.CO){
case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;default:;
}X=this.QD(X,Fc,0x14);if(!!X)this.Bb(X);},Bbq:function(s){this.DE(s);},AlZ:function(
G){var D4=(A.Core.BN.isPrototypeOf(G)?G:null);if(D4.Aci&&(this.D_().Asl===false)
)return;A.pe(this.D_().CB,this);},AIT:function(s){this.AlZ(s);},ApL:function(G){
var D4=(A.Core.BN.isPrototypeOf(G)?G:null);if(D4.Aci&&(this.D_().ZC===false))return;
A.pe(this.D_().Cl,this);},AIW:function(s){this.ApL(s);},IW:function(G){if(this.QN.
Aci)return;},Ati:function(s){this.IW(s);},AAz:function(G){var D4=(A.Core.BN.isPrototypeOf(
G)?G:null);if(D4.Aci&&(this.D_().ZB===false))return;A.pe(this.D_().Ck,this);},AIV:
function(s){this.AAz(s);},D_:function(){if(!!this.KR())return this.Bx;else return this.
N;},KR:function(){return this.Bx;},GN:function(E){this.A_M=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BN._Init.
call(this.Cr={I:this},0);A.Core.BN._Init.call(this.Ana={I:this},0);A.Core.BN._Init.
call(this.Anc={I:this},0);A.Core.BN._Init.call(this.QN={I:this},0);A.Core.BN._Init.
call(this.Anb={I:this},0);A.Core.BN._Init.call(this.Am_={I:this},0);A.Core.BN._Init.
call(this.Ane={I:this},0);A.Core.BN._Init.call(this.Am$={I:this},0);this.__proto__=
C.Abi;this.H([0,0,C.Ast[0],C.Ast[1]]);this.N.H(Xc);this.N.Ar(false);this.N.Z(false
);this.Cr.Filter=147;this.Ana.Filter=26;this.Anc.Filter=28;this.QN.Filter=1;this.
Anb.Filter=27;this.Am_.Filter=44;this.Ane.Filter=9;this.Am$.Filter=42;this.J(this.
N,0);this.Cr.BO=[this,this.Bbq];this.Cr.D0=[this,this.Bbq];this.Ana.BO=[this,this.
AIT];this.Ana.D0=[this,this.AIT];this.Anc.BO=[this,this.AIW];this.Anc.D0=[this,this.
AIW];this.QN.BO=[this,this.Ati];this.QN.D0=[this,this.Ati];this.Anb.BO=[this,this.
AIV];this.Anb.D0=[this,this.AIV];this.Am_.BO=[this,this.AIT];this.Am_.D0=[this,this.
AIT];this.Ane.BO=[this,this.AIW];this.Ane.D0=[this,this.AIW];this.Am$.BO=[this,this.
AIV];this.Am$.D0=[this,this.AIV];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cr._Done();this.Ana._Done();this.Anc._Done();this.QN._Done();this.
Anb._Done();this.Am_._Done();this.Ane._Done();this.Am$._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cr.
_ReInit();this.Ana._ReInit();this.Anc._ReInit();this.QN._ReInit();this.Anb._ReInit(
);this.Am_._ReInit();this.Ane._ReInit();this.Am$._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A_M)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Bx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ana)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ane)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Axy={_Init:function(){A.acl.AGI._Init.call(this,0);this.Kg=0x22;this.Ad5=true;
this.AuY=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.Axz={_Init:function(){A.acl.AGI._Init.call(this,0);this.Kg=0x22;this.Ad5=true;
this.AuY=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUF={R8:function(){var B;var Ao=(A.acl.Ae9.isPrototypeOf(B=A.acl.Aej.R8.call(this
))?B:null);if(!Ao)throw new Error(As2);Ao.Cp.Cw=100;return Ao;},R7:function(){var
B;var Ao=(A.acl.Axg.isPrototypeOf(B=A.acl.Aej.R7.call(this))?B:null);if(!Ao)throw new
Error(As2);Ao.E0.B2=100;return Ao;},_Init:function(aArg){A.acl.Aej._Init.call(this
,aArg);this.__proto__=C.AUF;},_className:"Application::ShadeTransition"};C.AmY={
Ag0:null,SR:null,HP:null,DS:null,AnimalId:-1,GroupId:-1,AC4:true,De:function(E){
C.BS.De.call(this,E);this.SR.L(E);this.HP.L(E);this.Ag0.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.acf.Ae$)
);else this.HP.R(E.toFixed());},Ab5:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SR.R(A.aaR(A.acf.Ae$));else this.SR.R(E.toFixed());},D5:function(
G){},Nm:function(s){this.D5(s);},A9T:function(E){if(this.AC4===E)return;this.AC4=
E;this.SR.Z(this.AC4);this.Ag0.Z(this.AC4);},_Init:function(aArg){C.BS._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag0={I:this},0);A.acg.Text._Init.call(this.SR={
I:this},0);A.acg.Text._Init.call(this.HP={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.AmY;this.Ag0.H(AWs);this.SR.H(AWt);this.SR.A6(0x11);this.
SR.R(A.aaR(A.acf.Ae$));this.HP.H(AWu);this.HP.A6(0x11);this.HP.R(A.aaR(A.acf.Ae$
));this.DS.H(AWv);this.J(this.Ag0,0);this.J(this.SR,0);this.J(this.HP,0);this.J(
this.DS,0);this.Ag0.Aw(A.aaL(A.ach.AQn));this.SR.S(A.aaL(A.fl.Af));this.HP.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BS;this.Ag0._Done();this.SR._Done(
);this.HP._Done();this.DS._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS.
_ReInit.call(this);this.Ag0._ReInit();this.SR._ReInit();this.HP._ReInit();this.DS.
_ReInit();this.SR.R(A.aaR(A.acf.Ae$));this.HP.R(A.aaR(A.acf.Ae$));this.SR.S(A.aaL(
A.fl.Af));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.call(this
,D);if((B=this.Ag0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADc={Init:function(
aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.Ary,B.SA
],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8F,B.AnE],0);
A.zV([this,this.Nm],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nm],[
B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.EB],0);A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9h,B.Axc],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8w,B.Ae0],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8x,B.Ul],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8A,B.Ae3],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8E,B.
Ae5],0);A.pe([this,this.Nm],this);},De:function(E){C.AmY.De.call(this,E);this.DS.
De(E);},D5:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqX()){this.Ab5(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab5(-1);this.OnSetAnimalId(-1);}this.DS.
EB(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AEZ(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae0(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Ul(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae3(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae5(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmY._Init.call(this,aArg);this.
__proto__=C.ADc;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Ki={AhI:A.abi(3,A.jV,null),Cf:A.abi(3,0,{0:7,1:30,2:90}),Ann:3,Do:function(){
if(this.Ann<3)return this.Ann;else return 3;},C4:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ann))return-1;return this.Cf.Get(aIndex);},FX:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ann))return AWw;return this.AhI.Get(aIndex);},DU:function(
A7){var O=0;while((O<3)&&(O<=this.Ann)){if(this.Cf.Get(O)===A7)return O;O=O+1;}return-
1;},HH:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ann)){if(this.Cf.Get(
O)>max)max=this.Cf.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhI=[]).__proto__=C.Ki.AhI;(this.Cf=[]).__proto__=C.Ki.Cf;this.
__proto__=C.Ki;this.AhI.Set(0,A.aaR(A.acf.A7i));this.AhI.Set(1,A.aaR(A.acf.A7g));
this.AhI.Set(2,A.aaR(A.acf.A7h));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhI.Set(0,A.aaR(A.acf.A7i));this.AhI.Set(1,A.aaR(A.acf.A7g));this.AhI.Set(2,A.aaR(
A.acf.A7h));},_className:"Application::Days"};C.AUC={Amw:null,BT:null,Q3:null,QA:
null,A$A:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BAL],[B=A._GetAutoObject(A.Device.Device),B.Arw,B.Ath],0);},Bk:function(
aSize){},Ai:function(Ae){var B;var F;C.Dt.Ai.call(this,Ae);var Fq=((Ae&0x20)===0x20
);var GA=this.Bo.Bw;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWx+A._GetAutoObject(
A.Device.Converter).Ak0((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlJ());this.H2.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6E())&&(
Fq||GA));},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));
},J$:function(G){var F;var BR=this.AM;C.Dt.J$.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6E()){this.By(this.AM+10);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J6:function(G){var F;var BR=this.
AM;C.Dt.J6.call(this,G);this.By(this.AM-10);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_v:function(E){if(this.A$A===E)return;
this.A$A=E;this.Am();},BAL:function(G){this.Am();},_Init:function(aArg){C.Dt._Init.
call(this,aArg);A.acg.AL._Init.call(this.Amw={I:this},0);C.CH._Init.call(this.BT={
I:this},0);A.acg.AL._Init.call(this.Q3={I:this},0);A.acg.Ap._Init.call(this.QA={
I:this},0);this.__proto__=C.AUC;this.H(UT);this.Background.H(UT);this.V.H(As3);this.
V.L(A.jb.Bm);this.Amw.H(AWy);this.Amw.L(A.jb.Afq);this.Ht.H(AWz);this.BT.H(AWA);
this.BT.A6(0x12);this.BT.L(A.jb.Text);this.H2.H(AWB);this.Q3.H(AWC);this.Q3.L(A.
jb.E1);this.QA.H(AWD);this.J(this.Amw,-2);this.J(this.BT,-1);this.J(this.Q3,0);this.
J(this.QA,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EK));this.BT.A2(A.aaL(A.fl.Af));this.QA.Aw(A.aaL(A.ach.ADt));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dt;this.Amw._Done();this.BT._Done();this.Q3.
_Done();this.QA._Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.
call(this);this.Amw._ReInit();this.BT._ReInit();this.Q3._ReInit();this.QA._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EK));this.
BT.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.
Amw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QA)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A_4={Q:null
,Ai2:null,Init:function(aArg){var B;A.zX([this,this.Beh],[B=A._GetAutoObject(A.Device.
Device),B.AEp,B.BaM],0);A.pe([this,this.Beh],this);},As:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ahp:function(Alm){A._GetAutoObject(A.Device.Device).Zp(Alm
);},Beh:function(G){var F;if(!this.Q){A.ab5("%s",AWE);return;}var Bz=null;if(this.
Ai2.Contains(A._GetAutoObject(A.Device.Device).KH)){Bz=this.Ai2.A_K();while(!!Bz&&(
Bz.An9!==A._GetAutoObject(A.Device.Device).KH))Bz=this.Ai2.A_K();}if(!Bz)Bz=this.
Bzp(A._GetAutoObject(A.Device.Device).KH);(F=this.Q,F[2].call(F[0],Bz));},Bzp:function(
Alm){var Bz=null;switch(Alm){case 0:case 1:Bz=A._NewObject(C.AUK,0);break;case 2:
Bz=A._NewObject(C.X1,0);break;case 3:Bz=A._NewObject(C.Avu,0);break;case 53:Bz=A.
_NewObject(C.AVp,0);break;case 77:Bz=A._NewObject(C.NewMenu,0);break;case 27:Bz=
A._NewObject(C.ARQ,0);break;case 6:Bz=A._NewObject(C.ARp,0);break;case 16:Bz=A._NewObject(
C.AND,0);break;case 22:Bz=A._NewObject(C.AVk,0);break;case 17:Bz=A._NewObject(C.
AU1,0);break;case 42:Bz=A._NewObject(C.ANA,0);break;case 87:Bz=A._NewObject(C.AUd
,0);break;case 88:Bz=A._NewObject(C.AUc,0);break;case 89:Bz=A._NewObject(C.AVg,0
);break;case 95:Bz=A._NewObject(C.AVi,0);break;case 23:Bz=A._NewObject(C.AVI,0);
break;case 18:Bz=A._NewObject(C.ANQ,0);break;case 19:Bz=A._NewObject(C.AUe,0);break;
case 37:Bz=A._NewObject(C.AQS,0);break;case 76:Bz=A._NewObject(C.ATU,0);break;case
63:Bz=A._NewObject(C.ANO,0);break;case 64:Bz=A._NewObject(C.ANP,0);break;case 82:
Bz=A._NewObject(C.ANN,0);break;case 83:Bz=A._NewObject(C.ANL,0);break;case 92:Bz=
A._NewObject(C.ANJ,0);break;case 93:Bz=A._NewObject(C.ANM,0);break;case 65:Bz=A.
_NewObject(C.ANK,0);break;case 5:Bz=A._NewObject(C.AUU,0);break;case 4:Bz=A._NewObject(
C.Ad7,0);break;case 39:Bz=A._NewObject(C.ANa,0);break;case 38:Bz=A._NewObject(C.
ANt,0);break;case 28:Bz=A._NewObject(C.Wp,0);break;case 7:Bz=A._NewObject(C.AqH,
0);break;case 81:Bz=A._NewObject(C.ANY,0);break;case 31:Bz=A._NewObject(C.Arp,0);
break;case 78:Bz=A._NewObject(C.ARO,0);break;case 34:Bz=A._NewObject(C.ALT,0);break;
case 35:Bz=A._NewObject(C.ManualActionScanScreen,0);break;case 32:Bz=A._NewObject(
C.SetTransponderScreen,0);break;case 45:Bz=A._NewObject(C.SetSaveTransponderScreen
,0);break;case 49:Bz=A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:
Bz=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case 79:Bz=A._NewObject(
C.MotherScanScreen,0);break;case 80:Bz=A._NewObject(C.SetSaveNaisIdScreen,0);break;
case 8:Bz=A._NewObject(C.GU,0);break;case 9:Bz=A._NewObject(C.I0,0);break;case 24:
Bz=A._NewObject(C.AL_,0);break;case 10:Bz=A._NewObject(C.Amr,0);break;case 21:Bz=
A._NewObject(C.AMc,0);break;case 11:Bz=A._NewObject(C.AMb,0);break;case 29:Bz=A.
_NewObject(C.AuF,0);break;case 48:Bz=A._NewObject(C.AMa,0);break;case 30:Bz=A._NewObject(
C.AL$,0);break;case 12:Bz=A._NewObject(C.AL9,0);break;case 40:Bz=A._NewObject(C.
AL8,0);break;case 14:Bz=A._NewObject(C.ANr,0);break;case 13:Bz=A._NewObject(C.ANs
,0);break;case 20:Bz=A._NewObject(C.AVz,0);break;case 41:Bz=A._NewObject(C.AVy,0
);break;case 43:Bz=A._NewObject(C.AOA,0);break;case 44:Bz=A._NewObject(C.AOz,0);
break;case 61:Bz=A._NewObject(C.ANX,0);break;case 62:Bz=A._NewObject(C.ANW,0);break;
case 46:Bz=A._NewObject(C.AR3,0);break;case 47:Bz=A._NewObject(C.AR2,0);break;case
85:Bz=A._NewObject(C.AVO,0);break;case 86:Bz=A._NewObject(C.AVN,0);break;case 71:
Bz=A._NewObject(C.ARY,0);break;case 72:Bz=A._NewObject(C.ARX,0);break;case 74:Bz=
A._NewObject(C.AMR,0);break;case 90:Bz=A._NewObject(C.ATX,0);break;case 73:Bz=A.
_NewObject(C.AUf,0);break;case 51:Bz=A._NewObject(C.ALX,0);break;case 52:Bz=A._NewObject(
C.ALW,0);break;case 15:Bz=A._NewObject(C.AT4,0);break;case 60:Bz=A._NewObject(C.
AU0,0);break;case 69:Bz=A._NewObject(C.ARn,0);break;case 70:Bz=A._NewObject(C.ARm
,0);break;case 26:Bz=A._NewObject(C.ARR,0);break;case 54:Bz=A._NewObject(C.ARN,0
);break;case 25:Bz=A._NewObject(C.AN$,0);break;case 66:Bz=A._NewObject(C.AOa,0);
break;case 59:Bz=A._NewObject(C.AN_,0);break;case 58:Bz=A._NewObject(C.AOb,0);break;
case 56:Bz=A._NewObject(C.AOc,0);break;case 57:Bz=A._NewObject(C.AqK,0);break;case
68:Bz=A._NewObject(C.AOd,0);break;case 67:Bz=A._NewObject(C.AN8,0);break;case 84:
Bz=A._NewObject(C.AMe,0);break;case 33:Bz=A._NewObject(C.WeightListScreen,0);break;
case 36:Bz=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 50:Bz=A._NewObject(
C.AnimalMultiInfoScreen,0);break;case 75:Bz=A._NewObject(C.AMr,0);break;case 91:
Bz=A._NewObject(C.AU6,0);break;case 94:Bz=A._NewObject(C.Aqf,0);break;default:throw new
Error(AWF);}if(!!Bz)Bz.An9=Alm;return Bz;},Cg:function(Alm){var F;if(!(F=this.Q,
F[1].call(F[0])))A.ab5("%s",AWG);else this.Ai2.BnP((F=this.Q,F[1].call(F[0])));A.
_GetAutoObject(A.Device.Device).Zp(Alm);},Fv:function(){var Bfw=3;var Bfv=this.Ai2.
BnE();if(!!Bfv)Bfw=Bfv.An9;else A.ab5("%s",AWH);A._GetAutoObject(A.Device.Device
).Zp(Bfw);},_Init:function(aArg){C.A_6._Init.call(this.Ai2={I:this},0);this.__proto__=
C.A_4;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=null;this.Ai2._Done(
);A.h7--;},_ReInit:function(){this.Ai2._ReInit();},_Mark:function(D){var B;if((B=
this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenLoaderClass"};C.A$={_Init:function(){C.A_4._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.AGb={H5:null,Yv:null,Afb:null,AaK:null,My:null,Azs:1,RatingMode:0,RatedAttribute:
0,CP:function(){this.Yv.R(this.Bc3(this.RatedAttribute));this.AKy(this);},Ai:function(
Ae){this.My.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.ARE),P6,this.Azs.
toFixed()));if(this.RatingMode===1)this.My.Z(true);else this.My.Z(false);},CF:function(
G){var B;C.AB.CF.call(this,G);if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);this.H5.Gm();this.H5.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);A._GetAutoObject(A.Device.Helper).Axr(this.H5,5);A.zX([this,this.AKy],[B=A._GetAutoObject(
A.Device.Device),B.ASy,B.AZ_],0);A.zX([this,this.AKy],[B=A._GetAutoObject(A.Device.
Helper).W,B.PM,B.EB],0);A.pe([this,this.AKy],this);},AsB:function(G){var a=this.
AKc(this.RatedAttribute);this.BfN();this.Azs=this.Azs-1;this.Am();if(!a)this.ARL(
);else this.Sz(a);},WM:function(G){var a=this.Bc_(this.RatedAttribute);this.BfN(
);this.Azs=this.Azs+1;this.Am();if(!a)this.A7F();else this.Sz(a);},AKc:function(
Np){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Np){case 1:return 2;
case 4:return 1;case 3:return 4;default:return 0;}else throw new Error(AHC);},Bc_:
function(Np){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Np){
case 2:return 1;case 1:return 4;case 4:return 3;default:return 0;}else throw new
Error(AHC);},Sz:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=
E;this.Yv.R(this.Bc3(E));this.DJ(E);this.Afb.AnJ(this.H5.Bix(E));if(!this.AKc(E)
){if(this.AQ1())this.N.Cs(A.aaL(A.ach.AbC));else this.N.Cs(null);}else this.N.Cs(
A.aaL(A.ach.Aew));},Bc3:function(Np){return this.AaK.BI(Np);},Bzo:function(Np){if(
!!Np){var a=this.AKc(Np);if(!a)return A.jV;else return this.Bc4(a);}else return A.
jV;},Bzn:function(Np){if(!!Np){var a=this.Bc_(Np);if(!a)return A.jV;else return this.
Bc4(a);}else return A.jV;},ARL:function(){},A7F:function(){},A6F:function(){return null;
},Bc4:function(Np){return this.AaK.Lt(Np);},BfN:function(){if(!!this.RatedAttribute
)this.H5.Bol(this.RatedAttribute,this.Afb.A4);},AKy:function(G){if(this.AQ1())this.
RatingMode=A._GetAutoObject(A.Device.Device).RatingMode;else this.RatingMode=0;this.
Sz(2);this.DJ(this.RatedAttribute);this.Am();},XB:function(G){A._GetAutoObject(A.
Device.Device).UpdateOverlayMenu(4);},AkV:function(G){var a=this.AKc(this.RatedAttribute
);if(!a){if(this.AQ1())this.XB(this);}else this.ARL();},DJ:function(Np){this.N.Hu(
this.Bzo(Np));if(!!this.N.An4){this.N.CY(null);this.N.OO(true);}else{this.N.CY(A.
aaL(A.ach.Aew));this.N.OO(false);}this.N.CV(this.Bzn(Np));if(!!this.N.An6){this.
N.C6(null);this.N.OP(true);}else{this.N.C6(this.A6F());this.N.OP(false);}},AQ1:function(
){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){case 0:case 2:return true;
case 1:return false;default:A.ab5("%s%e",Ale,A._GetAutoObject(A.Device.Helper).W.
AnimalType);}return false;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Yv={I:this},0);C.Rating._Init.call(this.Afb={I:this},0);A.Device.
RatedAttributeToString._Init.call(this.AaK={I:this},0);A.acg.Text._Init.call(this.
My={I:this},0);this.__proto__=C.AGb;this.Background.L(A.jb.CK);this.N.Z(true);this.
Dq(C.IG);this.Yv.H(AWI);this.Yv.KS(true);this.Yv.L(A.jb.Text);this.Afb.H(AWJ);this.
My.H(AWK);this.My.A6(0x14);this.My.R(A.aaR(A.acf.ARE));this.My.L(A.jb.Text);this.
J(this.Yv,0);this.J(this.Afb,0);this.J(this.My,0);this.Bb(this.Afb);this.N.CB=[this
,this.AsB];this.N.Ck=[this,this.AkV];this.N.Cl=[this,this.WM];this.Yv.S(A.aaL(A.
fl.Af));this.Afb.AR=[this,this.WM];this.My.S(A.aaL(A.fl.Af));this.H5=A._NewObject(
A.Device.Rating,0);},_Done:function(){this.__proto__=C.AB;this.Yv._Done();this.Afb.
_Done();this.AaK._Done();this.My._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Yv._ReInit();this.Afb._ReInit();this.AaK._ReInit(
);this.My._ReInit();this.My.R(A.aaR(A.acf.ARE));this.Yv.S(A.aaL(A.fl.Af));this.My.
S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Afb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.My)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RateScreen"};C.HY={Y:null,Gender:null,AnimalType:null,Breed:null,Jd:
null,Pj:null,AsQ:null,BZ:null,C$:null,C9:null,CG:null,Gi:null,Ay:null,KI:0,Init:
function(aArg){A.zX([this,this.Bbo],this.BZ.Q,0);A.pe([this,this.Bbo],this);A.pe([
this,this.AA6],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.
Device.Helper).ANo(this.Y);},DE:function(G){var B;var Fc=0;var X=this.AV;switch(
this.Cr.CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;
default:;}X=this.QD(X,Fc,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HD(X,true,null,null);this.AA6(this);},Fe:function(G){var B;this.Ay.Mu((B=
this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[
1]);},AeV:function(E){if(this.KI===E)return;this.KI=E;A.abo([this,this.Av7,this.
AeV],0);},AA6:function(G){var B;var GS=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.
N.Hu(A.jV);this.N.CY(A.aaL(A.ach.E2));this.N.CB=[this,this.AIS];if(!!GS&&!!GS.Amn
){this.N.FJ(A.jV);this.N.Kw.Dr(255);this.N.ArN(GS.AqP);this.N.Cs(GS.AvE);this.N.
Ck=GS.Amn;}else{this.N.FJ(A.jV);this.N.Cs(null);this.N.Ck=null;}if(!!GS&&!!GS.Agn
){this.N.CV(GS.AxI);this.N.HQ.Dr(GS.Axf);this.N.AnA(GS.AmS);this.N.C6(GS.Aq5);this.
N.Cl=GS.Agn;}else this.Aug();},Af$:function(G){A.ab5("%s",Ayd);},AyP:function(s){
this.Af$(s);},Ev:function(G){A.ab5("%s",Ayd);},AIS:function(s){this.Ev(s);},Aug:
function(){A.ab5("%s",Alf);},AAs:function(G){A.ab5("%s",Ayd);},AcR:function(s){this.
AAs(s);},JD:function(Ag){this.Bb(Ag);this.Y.HD(Ag,true,null,null);this.Y.Vt(null
,null);},ApH:function(G){var F;this.C9.Ahm(A._GetAutoObject(A.Device.Helper).Abq((
F=this.BZ.Q,F[1].call(F[0]))));},Bbo:function(s){this.ApH(s);},Av7:function(){return this.
KI;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UM._Init.call(
this.Jd={I:this},0);A.Device.M1._Init.call(this.Pj={I:this},0);A.Device.KY._Init.
call(this.AsQ={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.BW._Init.call(this.
C$={I:this},0);C.AkT._Init.call(this.C9={I:this},0);C.Axu._Init.call(this.CG={I:
this},0);C.Asw._Init.call(this.Gi={I:this},0);C.Ay._Init.call(this.Ay={I:this},0
);this.__proto__=C.HY;var B;this.N.Z(true);this.Dq(C.IG);this.Y.H(E$);this.Y.JP(
1);this.KI=A._GetAutoObject(A.Device.Helper).Abq(this.AnimalType.Q);this.BZ.H(AhV
);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afp));this.C$.H(Aye);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afk));this.C9.H(Aoq);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI)
);this.C9.F0(1000);this.C9.EV(99000);this.C9.Ahm(A._GetAutoObject(A.Device.Helper
).Abq(this.AnimalType.Q));this.CG.H(AhW);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.Gi.H(AWL);this.Gi.Aj(true);this.Gi.T(A.aaR(A.acf.Jd));this.Ay.H(Ayf
);this.J(this.Y,0);this.J(this.BZ,0);this.J(this.C$,0);this.J(this.C9,0);this.J(
this.CG,0);this.J(this.Gi,0);this.J(this.Ay,0);this.Y.El=[this,this.Fe];this.Gender.
LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.LY(A._GetAutoObject(A.Device.
Helper).W);this.Breed.LY(A._GetAutoObject(A.Device.Helper).W);this.Jd.LY(A._GetAutoObject(
A.Device.Helper).W);this.BZ.As([B=this.AnimalType,B.B7,B.B8]);this.BZ.CI(this.AnimalType
);this.C$.As([B=this.Gender,B.B7,B.B8]);this.C$.CI(this.Gender);this.C9.As([this
,this.Av7,this.AeV]);this.CG.Gn([this,this.D_,this.GN]);this.CG.LX([B=this.CG,B.
FQ]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.As([B=this.Breed,B.B7,B.B8]);this.CG.
CI(this.Breed);this.CG.Anz(this.Pj);this.Gi.Gn([this,this.D_,this.GN]);this.Gi.LX([
B=this.Gi,B.FQ]);this.Gi.L0(A.aaL(A.ach.Edit));this.Gi.As([B=this.Jd,B.B7,B.B8]);
this.Gi.CI(this.Jd);this.Gi.Anz(this.AsQ);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed.
_Done();this.Jd._Done();this.Pj._Done();this.AsQ._Done();this.BZ._Done();this.C$.
_Done();this.C9._Done();this.CG._Done();this.Gi._Done();this.Ay._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jd._ReInit();this.
Pj._ReInit();this.AsQ._ReInit();this.BZ._ReInit();this.C$._ReInit();this.C9._ReInit(
);this.CG._ReInit();this.Gi._ReInit();this.Ay._ReInit();this.BZ.T(A.aaR(A.acf.Afp
));this.C$.T(A.aaR(A.acf.Afk));this.C9.T(A.aaR(A.acf.KI));this.CG.T(A.aaR(A.acf.
Breed));this.Gi.T(A.aaR(A.acf.Jd));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wp={Ay4:false,LO:function(G){if(A._GetAutoObject(A.Device.Device).An.Lh())A._GetAutoObject(
A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.Device).An.HG().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gm();A._GetAutoObject(A.Device.Helper
).Aqi(A._GetAutoObject(A.Device.Helper).W);},Aug:function(){this.N.CV(A.jV);this.
N.C6(A.aaL(A.ach.ADx));this.N.Cl=[this,this.AyP];},CF:function(G){if(!this.Ay4){
this.Ay4=true;A.pe([this,this.AcR],this);}else C.Arp.CF.call(this,G);},AAs:function(
G){A._GetAutoObject(C.A$).Cg(49);},_Init:function(aArg){C.Arp._Init.call(this,aArg
);this.__proto__=C.Wp;this.JV(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IG={_Init:function(aArg){C.ADc._Init.call(this,aArg);this.__proto__=C.IG;this.
A9T(false);},_className:"Application::HeaderSelectedAnimalId"};C.I0={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Ek:null,Y:null,PX:null,SZ:null,N9:
null,S0:null,Nl:null,Ot:null,RK:null,Ou:null,RL:null,ND:null,Ld:null,Jn:null,KW:
null,Mr:null,Yp:null,S1:null,RM:null,Ay:null,AxU:0,AxT:0,AuD:0,AuC:0,Aro:0,AsI:0
,Avf:0,Avg:0,Am5:true,Amq:false,Aod:false,Init:function(aArg){A.zX([this,this.Avl
],this.Ld.Q,0);A.zX([this,this.AuI],this.Jn.Q,0);A.zX([this,this.Bpy],this.KW.Q,
0);A.zX([this,this.BjT],this.Mr.Q,0);A.zX([this,this.Bp4],this.Nl.Q,0);A.zX([this
,this.Bp3],this.N9.Q,0);A.zX([this,this.BgR],this.ND.Q,0);A.zX([this,this.BgQ],this.
Ou.Q,0);this.Bb(this.PX);},DE:function(G){var Fc=0;var X=this.AV;switch(this.Cr.
CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;default:;
}X=this.QD(X,Fc,0x414);if(!!X)this.Bb(X);this.MO(this);},CF:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bl(A._GetAutoObject(A.Device.Device).An.Filter.Fg(
));else this.Bl(A._NewObject(A.Device.Filter,0));},Ev:function(G){A._GetAutoObject(
C.A$).Fv();},A2N:function(G){var EE=(C.Aen.isPrototypeOf(G)?G:null);if(!EE)return;
var Av=this.Filter.DQ(EE.Ep,EE.Operator);if(!!Av){this.Filter.N3(Av);A.abo([this
,this.Fj,this.Fn],0);}else{if(EE.Ep===11){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Ep===12){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Ep===8){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else A.ab5("%s",AHD+EE.Ep.toFixed());if(!!Av){this.Filter.
CW(Av);A.abo([this,this.Fj,this.Fn],0);}}},Bz0:function(G){A._GetAutoObject(A.Device.
Device).An.Bl(this.Filter);A._GetAutoObject(C.A$).Fv();},AAq:function(G){var EE=(
C.AmX.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.DQ(EE.Ep,EE.Operator
);if(!!Av){this.Filter.N3(Av);A.abo([this,this.Fj,this.Fn],0);}else{if(EE.Ep===7
){Av=A._NewObject(A.Device.GenderFilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;
}else if(EE.Ep===14){Av=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Av.EJ=
EE.Ep;Av.Operator=EE.Operator;}else if((EE.Ep===22)||(EE.Ep===26)){var A0P=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0P.EJ=EE.Ep;A0P.Operator=0;Av=A0P;}else A.ab5(
"%s",AHD+EE.Ep.toFixed());if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fj,this.Fn
],0);}}},A9O:function(E){if(this.Avf===E)return;this.Avf=E;A.abo([this,this.Bkz,
this.A9O],0);},A9P:function(E){if(this.Avg===E)return;this.Avg=E;A.abo([this,this.
BkA,this.A9P],0);},Avl:function(G){var F;this.A9P((F=this.Ld.Q,F[1].call(F[0])));
var Av=this.Filter.DQ(7,0);if(!!Av){var AzM=(A.Device.GenderFilterCriterion.isPrototypeOf(
Av)?Av:null);if(!!AzM)AzM.A4=this.Avg;else A.ab5("%s",AfB);}},AuI:function(G){var
F;this.A9O((F=this.Jn.Q,F[1].call(F[0])));var Av=this.Filter.DQ(14,0);if(!!Av){var
U2=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Av)?Av:null);if(!!U2)U2.A4=
this.Avf;else A.ab5("%s",AfB);}},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1
))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},A_u:function(
E){if(this.AsI===E)return;this.AsI=E;A.abo([this,this.Bla,this.A_u],0);},Bpy:function(
G){var F;this.A_u((F=this.KW.Q,F[1].call(F[0])));var Av=this.Filter.DQ(22,1);if(
!!Av){var Aja=(A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!Aja
)switch(this.AsI){case 1:Aja.Operator=5;break;case 0:Aja.Operator=0;break;default:
A.ab5("%s%e",AHE,this.AsI);}else A.ab5("%s",AfB);}},A91:function(E){if(this.Aro===
E)return;this.Aro=E;A.abo([this,this.BkP,this.A91],0);},BjT:function(G){var F;this.
A91((F=this.Mr.Q,F[1].call(F[0])));var Av=this.Filter.DQ(26,1);if(!!Av){var AtW=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AtW)switch(this.Aro
){case 1:AtW.Operator=5;break;case 0:AtW.Operator=0;break;default:A.ab5("%s%e",AHE
,this.Aro);}else A.ab5("%s",AfB);}},Bl:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PX.Bl([this,this.Fj,this.Fn]);this.SZ.
Bl([this,this.Fj,this.Fn]);this.N9.Bl([this,this.Fj,this.Fn]);this.S0.Bl([this,this.
Fj,this.Fn]);this.Nl.Bl([this,this.Fj,this.Fn]);this.Ot.Bl([this,this.Fj,this.Fn
]);this.RK.Bl([this,this.Fj,this.Fn]);this.Ou.Bl([this,this.Fj,this.Fn]);this.RL.
Bl([this,this.Fj,this.Fn]);this.ND.Bl([this,this.Fj,this.Fn]);this.Ld.Bl([this,this.
Fj,this.Fn]);this.Jn.Bl([this,this.Fj,this.Fn]);this.KW.Bl([this,this.Fj,this.Fn
]);this.Mr.Bl([this,this.Fj,this.Fn]);this.Yp.Bl([this,this.Fj,this.Fn]);this.S1.
Bl([this,this.Fj,this.Fn]);this.RM.Bl([this,this.Fj,this.Fn]);this.Ar7(false);A.
pe([this,this.A4m],this);var BdL=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DQ(1,2))?B:null);if(!!BdL){this.Ar7(true);this.AFU(BdL.A4);}var Bde=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DQ(1,3))?B:null);if(!!
Bde){this.Ar7(true);this.AFV(Bde.A4);}this.ArF(false);A.pe([this,this.ALd],this);
var BdK=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DQ(4,3))?B:null
);if(!!BdK){this.ArF(true);this.AEI(A._GetAutoObject(A.Device.Helper).MN(BdK.A4,
A._GetAutoObject(A.Device.Helper).Dv()));}var Bdd=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DQ(4,2))?B:null);if(!!Bdd){this.ArF(true);this.AEK(A.
_GetAutoObject(A.Device.Helper).MN(Bdd.A4,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var AzM=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DQ(7,0
))?B:null);if(!!AzM)this.Ld.By(this.Gender.DU(AzM.A4));var U2=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DQ(14,0))?B:null);if(!!U2)this.Jn.By(this.AnimalType.
DU(U2.A4));var Aja=this.Filter.DQ(22,1);if(!!Aja){if(!Aja.Operator)this.KW.By(0);
else this.KW.By(1);}var AtW=this.Filter.DQ(26,1);if(!!AtW){if(!AtW.Operator)this.
Mr.By(0);else this.Mr.By(1);}},Fn:function(Aq){this.Bl(Aq);},AFV:function(E){if(
this.AxU===E)return;this.AxU=E;A.abo([this,this.A8$,this.AFV],0);},AFU:function(
E){if(this.AxT===E)return;this.AxT=E;A.abo([this,this.A8_,this.AFU],0);},Bp4:function(
G){var F;this.AFV((F=this.Nl.Q,F[1].call(F[0])));var Av=this.Filter.DQ(1,3);if(!
!Av){var ABr=(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!ABr)
ABr.A4=this.AxU;else A.ab5("%s",AfB);}},Bp3:function(G){var F;this.AFU((F=this.N9.
Q,F[1].call(F[0])));var Av=this.Filter.DQ(1,2);if(!!Av){var ABr=(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!ABr)ABr.A4=this.AxT;else A.ab5("%s",AfB);}},Bee:
function(G){var EE=(C.AjI.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.
DQ(EE.Ep,EE.Operator);if(!!Av){this.Filter.N3(Av);A.abo([this,this.Fj,this.Fn],0
);}else{if(EE===this.SZ){Av=A._NewObject(A.Device.Int32FilterCriterion,0);Av.EJ=
EE.Ep;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:
null).A4=this.AxT;this.Bb(this.N9);}else if(EE===this.S0){Av=A._NewObject(A.Device.
Int32FilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=this.AxU;this.Bb(this.Nl);}if(!!Av){this.Filter.CW(
Av);A.abo([this,this.Fj,this.Fn],0);}}A.pe([this,this.A4m],this);},A4m:function(
G){var A2w=!!this.Filter.DQ(this.N9.Ep,this.N9.Operator);var A4n=!!this.Filter.DQ(
this.Nl.Ep,this.Nl.Operator);A._GetAutoObject(A.Device.Helper).JW(this.SZ,this.Aod
);A._GetAutoObject(A.Device.Helper).JW(this.S0,this.Aod);A._GetAutoObject(A.Device.
Helper).JW(this.N9,A2w);A._GetAutoObject(A.Device.Helper).JW(this.Nl,A4n);},MO:function(
G){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},BAS:function(G){A.pe([this,this.Fe],this);A.pe([this,this.
MO],this);},BzX:function(G){this.Ar7(!this.Aod);if(this.Aod===false){var Av=this.
Filter.DQ(this.PX.Ep,this.PX.Operator);while(!!Av){this.Filter.N3(Av);Av=this.Filter.
DQ(this.PX.Ep,this.PX.Operator);}A.abo([this,this.Fj,this.Fn],0);}},Ar7:function(
E){if(this.Aod===E)return;this.Aod=E;A.abo([this,this.A89,this.Ar7],0);A.pe([this
,this.A4m],this);},AEK:function(E){if(this.AuD===E)return;this.AuD=E;A.abo([this
,this.A8d,this.AEK],0);},AEI:function(E){if(this.AuC===E)return;this.AuC=E;A.abo([
this,this.A8b,this.AEI],0);},BgR:function(G){var F;this.AEK((F=this.ND.Q,F[1].call(
F[0])));var Av=this.Filter.DQ(4,2);if(!!Av){var AfN=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!AfN){var AaP=A._GetAutoObject(A.Device.Helper).ZP(
this.AuD-1);AfN.A4=AaP;}else A.ab5("%s",AfB);}},BgQ:function(G){var F;this.AEI((
F=this.Ou.Q,F[1].call(F[0])));var Av=this.Filter.DQ(4,3);if(!!Av){var AfN=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AfN){var AaP=A._GetAutoObject(
A.Device.Helper).ZP(this.AuC);AfN.A4=AaP;}else A.ab5("%s",AfB);}},ALd:function(G
){var A2w=this.Am5&&!!this.Filter.DQ(this.Ou.Ep,this.Ou.Operator);var A4n=this.Am5&&
!!this.Filter.DQ(this.ND.Ep,this.ND.Operator);A._GetAutoObject(A.Device.Helper).
JW(this.Ot,this.Am5);A._GetAutoObject(A.Device.Helper).JW(this.RK,this.Am5&&this.
Amq);A._GetAutoObject(A.Device.Helper).JW(this.RL,this.Am5&&this.Amq);A._GetAutoObject(
A.Device.Helper).JW(this.Ou,A2w);A._GetAutoObject(A.Device.Helper).JW(this.ND,A4n
);},ArF:function(E){if(this.Amq===E)return;this.Amq=E;A.abo([this,this.A8a,this.
ArF],0);A.pe([this,this.ALd],this);},Bed:function(G){var EE=(C.AjI.isPrototypeOf(
G)?G:null);if(!EE)return;var Av=this.Filter.DQ(EE.Ep,EE.Operator);if(!!Av){this.
Filter.N3(Av);A.abo([this,this.Fj,this.Fn],0);}else{if(EE===this.RK){Av=A._NewObject(
A.Device.UInt32FilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper
).ZP(this.AuC);this.Bb(this.Ou);}else if(EE===this.RL){Av=A._NewObject(A.Device.
UInt32FilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper).ZP(this.AuD-1);this.
Bb(this.ND);}if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fj,this.Fn],0);}}A.pe([
this,this.ALd],this);},BzW:function(G){this.ArF(!this.Amq);if(this.Amq===false){
var Av=this.Filter.DQ(this.Ot.Ep,this.Ot.Operator);while(!!Av){this.Filter.N3(Av
);Av=this.Filter.DQ(this.Ot.Ep,this.Ot.Operator);}A.abo([this,this.Fj,this.Fn],0
);}},Bmy:function(E){if(this.Am5===E)return;this.Am5=E;A.pe([this,this.ALd],this
);},Fj:function(){return this.Filter;},BkA:function(){return this.Avg;},Bkz:function(
){return this.Avf;},Bla:function(){return this.AsI;},BkP:function(){return this.
Aro;},A8$:function(){return this.AxU;},A8_:function(){return this.AxT;},A89:function(
){return this.Aod;},A8d:function(){return this.AuD;},A8b:function(){return this.
AuC;},A8a:function(){return this.Amq;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABI._Init.call(this.Transponder={I:this},0);C.ABI._Init.
call(this.Ek={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ABT._Init.call(
this.PX={I:this},0);C.AjI._Init.call(this.SZ={I:this},0);C.Abp._Init.call(this.N9={
I:this},0);C.AjI._Init.call(this.S0={I:this},0);C.Abp._Init.call(this.Nl={I:this
},0);C.ABT._Init.call(this.Ot={I:this},0);C.AjI._Init.call(this.RK={I:this},0);C.
ACH._Init.call(this.Ou={I:this},0);C.AjI._Init.call(this.RL={I:this},0);C.ACH._Init.
call(this.ND={I:this},0);C.AmX._Init.call(this.Ld={I:this},0);C.AmX._Init.call(this.
Jn={I:this},0);C.AmX._Init.call(this.KW={I:this},0);C.AmX._Init.call(this.Mr={I:
this},0);C.Qy._Init.call(this.Yp={I:this},0);C.Qy._Init.call(this.S1={I:this},0);
C.Qy._Init.call(this.RM={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I0;var B;this.N.Z(true);this.N.CV(A.aaR(A.acf.A4X));this.Dq(C.APt);this.Gender.
As(this.Avg);this.AnimalType.As(this.Avf);this.Transponder.As(this.AsI);this.Ek.
As(this.Aro);this.Y.H(E$);this.Y.JP(1);this.PX.H(IR);this.PX.Aj(true);this.PX.T(
A._GetAutoObject(A.Device.Helper).AmV(0,1));this.PX.Nd(1);this.SZ.H(P7);this.SZ.
Aj(true);this.SZ.T(A.aaR(A.acf.AD5));this.SZ.Nd(1);this.SZ.ON(2);this.N9.H(Aae);
this.N9.Nd(1);this.N9.ON(2);this.N9.AFM(A.aaR(A.acf.GJ));this.S0.H(Alg);this.S0.
Aj(true);this.S0.T(A.aaR(A.acf.AG8));this.S0.Nd(1);this.S0.ON(3);this.Nl.H(Aor);
this.Nl.Aj(true);this.Nl.Nd(1);this.Nl.ON(3);this.Nl.AFM(A.aaR(A.acf.GJ));this.Ot.
H(AWM);this.Ot.Aj(true);this.Ot.T(A.aaR(A.acf.RJ));this.Ot.Nd(4);this.RK.H(AWN);
this.RK.Aj(true);this.RK.T(A.aaR(A.acf.AD5));this.RK.Nd(4);this.RK.ON(3);this.Ou.
H(AWO);this.Ou.Nd(4);this.Ou.ON(3);this.Ou.A96(2);this.RL.H(AWP);this.RL.Aj(true
);this.RL.T(A.aaR(A.acf.AG8));this.RL.Nd(4);this.RL.ON(2);this.ND.H(AWQ);this.ND.
Aj(true);this.ND.Nd(4);this.ND.ON(2);this.ND.A96(3);this.Ld.H(As4);this.Ld.Aj(true
);this.Ld.Nd(7);this.Ld.Aho(0);this.Ld.ON(0);this.Jn.H(Xc);this.Jn.Aj(true);this.
Jn.Nd(14);this.Jn.Aho(0);this.Jn.ON(0);this.KW.H(Xc);this.KW.Aj(true);this.KW.Nd(
22);this.KW.Aho(0);this.KW.ON(1);this.Mr.H(Xc);this.Mr.Aj(true);this.Mr.Nd(26);this.
Mr.Aho(0);this.Mr.ON(1);this.Yp.H(Xc);this.Yp.Aj(true);this.Yp.Nd(11);this.Yp.Aho(
0);this.Yp.ON(0);this.S1.H(Xc);this.S1.Aj(true);this.S1.Nd(12);this.S1.Aho(0);this.
S1.ON(0);this.RM.H(Xc);this.RM.Aj(true);this.RM.Nd(8);this.RM.Aho(0);this.RM.ON(
0);this.Ay.H(Ir);this.J(this.Y,0);this.J(this.PX,0);this.J(this.SZ,0);this.J(this.
N9,0);this.J(this.S0,0);this.J(this.Nl,0);this.J(this.Ot,0);this.J(this.RK,0);this.
J(this.Ou,0);this.J(this.RL,0);this.J(this.ND,0);this.J(this.Ld,0);this.J(this.Jn
,0);this.J(this.KW,0);this.J(this.Mr,0);this.J(this.Yp,0);this.J(this.S1,0);this.
J(this.RM,0);this.J(this.Ay,0);this.N.CB=[this,this.Ev];this.N.Cl=[this,this.Bz0
];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.BAS];this.PX.AR=[this,this.BzX
];this.PX.As([this,this.A89,this.Ar7]);this.SZ.AR=[this,this.Bee];this.N9.Gn([this
,this.D_,this.GN]);this.N9.As([this,this.A8_,this.AFU]);this.S0.AR=[this,this.Bee
];this.Nl.Gn([this,this.D_,this.GN]);this.Nl.As([this,this.A8$,this.AFV]);this.Ot.
AR=[this,this.BzW];this.Ot.As([this,this.A8a,this.ArF]);this.RK.AR=[this,this.Bed
];this.Ou.Gn([this,this.D_,this.GN]);this.Ou.As([this,this.A8b,this.AEI]);this.RL.
AR=[this,this.Bed];this.ND.Gn([this,this.D_,this.GN]);this.ND.As([this,this.A8d,
this.AEK]);this.Ld.AR=[this,this.AAq];this.Ld.As([B=this.Gender,B.B7,B.B8]);this.
Ld.CI(this.Gender);this.Jn.AR=[this,this.AAq];this.Jn.As([B=this.AnimalType,B.B7
,B.B8]);this.Jn.CI(this.AnimalType);this.KW.AR=[this,this.AAq];this.KW.As([B=this.
Transponder,B.B7,B.B8]);this.KW.CI(this.Transponder);this.Mr.AR=[this,this.AAq];
this.Mr.As([B=this.Ek,B.B7,B.B8]);this.Mr.CI(this.Ek);this.Yp.AR=[this,this.A2N];
this.S1.AR=[this,this.A2N];this.RM.AR=[this,this.A2N];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.Ek._Done();this.Y._Done();this.PX._Done();this.SZ._Done();this.N9._Done(
);this.S0._Done();this.Nl._Done();this.Ot._Done();this.RK._Done();this.Ou._Done(
);this.RL._Done();this.ND._Done();this.Ld._Done();this.Jn._Done();this.KW._Done(
);this.Mr._Done();this.Yp._Done();this.S1._Done();this.RM._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.Ek._ReInit();
this.Y._ReInit();this.PX._ReInit();this.SZ._ReInit();this.N9._ReInit();this.S0._ReInit(
);this.Nl._ReInit();this.Ot._ReInit();this.RK._ReInit();this.Ou._ReInit();this.RL.
_ReInit();this.ND._ReInit();this.Ld._ReInit();this.Jn._ReInit();this.KW._ReInit(
);this.Mr._ReInit();this.Yp._ReInit();this.S1._ReInit();this.RM._ReInit();this.Ay.
_ReInit();this.N.CV(A.aaR(A.acf.A4X));this.SZ.T(A.aaR(A.acf.AD5));this.N9.AFM(A.
aaR(A.acf.GJ));this.S0.T(A.aaR(A.acf.AG8));this.Nl.AFM(A.aaR(A.acf.GJ));this.Ot.
T(A.aaR(A.acf.RJ));this.RK.T(A.aaR(A.acf.AD5));this.RL.T(A.aaR(A.acf.AG8));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.N9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ot)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ld)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A_6={ZQ:null,BnP:
function(Bxt){var EF=A._NewObject(C.A_5,0);EF.AB=Bxt;EF.Ms=this.ZQ;this.ZQ=EF;},
A_K:function(){var Vh=null;if(!!this.ZQ){Vh=this.ZQ.AB;this.ZQ=this.ZQ.Ms;}return Vh;
},Contains:function(Alm){var EF=this.ZQ;while(!!EF){if(EF.AB.An9===Alm)return true;
EF=EF.Ms;}return false;},BnE:function(){if(!!this.ZQ)return this.ZQ.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A_6;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A_5={AB:null,
Ms:null,_Init:function(aArg){this.__proto__=C.A_5;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMb={ARL:function(){A._GetAutoObject(
A.Device.Helper).Axr(this.H5,0);A._GetAutoObject(C.A$).Fv();},A7F:function(){this.
H5.Cq(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fv();},A6F:function(
){return A.aaL(A.ach.Am3);},_Init:function(aArg){C.AGb._Init.call(this,aArg);this.
__proto__=C.AMb;this.Dq(C.IG);},_className:"Application::AnimalActionRateScreen"
};C.AL9={Wv:function(G){this.Agp();this.IY(A.aaR(A.acf.AU$),[this,this.ATz],5);this.
IY(A.aaR(A.acf.A5o),[this,this.Blx],4);this.IY(A.aaR(A.acf.AGa),[this,this.ATk],
3);this.IY(A.aaR(A.acf.An3),[this,this.AwR],2);this.IY(A.aaR(A.acf.XP),[this,this.
AEN],1);this.IY(A.aaR(A.acf.Auy),[this,this.AEH],0);A._GetAutoObject(C.BH).Ft();
A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},DE:function(G){},Abs:function(){return C.AM2;},Abt:function(
){return C.ADe;},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Ay2=A._NewObject(A.Device.BoolFilterCriterion,0);Ay2.Initialize(8,0,true,true);Be.
CW(Ay2);A._GetAutoObject(A.Device.Device).An.Bl(Be);},HO:function(G){C.GU.HO.call(
this,G);if(this.Akh()===false){this.N.Cs(A.aaL(A.ach.AGj));this.N.Ck=[this,this.
A5W];this.N.FJ(A.jV);}this.N.OO(false);this.N.OP(false);},Agb:function(){A._GetAutoObject(
C.A$).Cg(40);},_Init:function(aArg){C.GU._Init.call(this,aArg);this.__proto__=C.
AL9;var B;this.Dq(C.AOU);this.Dz(A.aaR(A.acf.A7L));this.AwM([B=A._GetAutoObject(
A.Device.Device),B.A8e,B.BaO]);},_ReInit:function(){C.GU._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7L));},_className:"Application::AlarmListScreen"};C.ANr={DE:function(
G){},Al0:function(G){if(!!this.Bj)A.ab5("%i",this.Bj.AD.Go);var Aa=(C.AB0.isPrototypeOf(
G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper).HL(Aa.Hn);A._GetAutoObject(
C.A$).Cg(13);}},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Azk=A._NewObject(A.Device.BoolFilterCriterion,0);Azk.Initialize(9,0,true,true);Be.
CW(Azk);A._GetAutoObject(A.Device.Device).An.Bl(Be);},HO:function(G){C.GU.HO.call(
this,G);this.N.OO(false);this.N.OP(false);},_Init:function(aArg){C.GU._Init.call(
this,aArg);this.__proto__=C.ANr;this.Dq(C.AOW);this.Dz(A.aaR(A.acf.A7M));},_ReInit:
function(){C.GU._ReInit.call(this);this.Dz(A.aaR(A.acf.A7M));},_className:"Application::ControlListScreen"
};C.Aen={Filter:null,Ep:0,I_:10,TableId:0,Operator:1,CP:function(){var F;this.To((
F=this.Filter,F[1].call(F[0])).DQ(this.Ep,this.Operator));},Bk:function(aSize){C.
Co.Bk.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.I_),aSize[1]]));
},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$],E,0);A.pe([this,this.
L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.To((F=this.Filter,F[1].call(F[0])).DQ(this.Ep,this.Operator));else this.
To(null);},Aho:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.L$],this);},Nd:function(E){if(this.Ep===E)return;this.Ep=E;A.pe([this,this.
L$],this);},To:function(AH){if(!!AH)this.T(A._GetAutoObject(A.Device.Helper).A6z(
this.TableId,AH));else this.T(A._GetAutoObject(A.Device.Helper).AmV(this.TableId
,this.Ep));},ON:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.L$],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aen;this.V.H(AHF);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
Qy={H4:null,Bk:function(aSize){var B;C.Aen.Bk.call(this,aSize);this.H4.H([(aSize[
0]-((B=this.H4.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.I_,0,this.
H4.M[0]-this.I_,aSize[1]]);},To:function(AH){this.T(A._GetAutoObject(A.Device.Helper
).AmV(this.TableId,this.Ep));var Av=(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Av&&Av.A4)this.H4.Cv(1);else this.H4.Cv(0);},_Init:function(aArg
){C.Aen._Init.call(this,aArg);A.acg.Ap._Init.call(this.H4={I:this},0);this.__proto__=
C.Qy;this.H4.H(AHG);this.H4.Cv(0);this.J(this.H4,0);this.H4.Aw(A.aaL(A.ach.AqN));
},_Done:function(){this.__proto__=C.Aen;this.H4._Done();C.Aen._Done.call(this);}
,_ReInit:function(){C.Aen._ReInit.call(this);this.H4._ReInit();},_Mark:function(
D){var B;C.Aen._Mark.call(this,D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APt={Ap:null,Text:null,De:function(
E){C.BS.De.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BS.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APt;this.Ap.H(AWR);this.Text.H(AWS);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Aw(A.aaL(A.ach.Aey));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BS;this.Ap._Done();this.Text._Done();C.BS._Done.call(this);},_ReInit:
function(){C.BS._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjS={
AW:null,T1:null,Gr:null,D1:null,A_:null,Init:function(aArg){var B;A.zX([this,this.
D5],[B=A._GetAutoObject(A.Device.Device).An,B.Fj,B.Fn],0);A.pe([this,this.D5],this
);},Bk:function(aSize){var B;C.BS.Bk.call(this,aSize);this.T1.H(A.abJ(this.T1.M,
A.abe(this.AW.M.slice(0,2),AWT)));this.T1.H(A.abK(this.T1.M,A.abf([(B=this.AW.M)[
2]-B[0],B[3]-B[1]],AWU)));},Ai:function(Ae){var B;C.BS.Ai.call(this,Ae);var Iy=((
Ae&0x40)===0x40)&&(this.AV===this.AW);if(Iy)this.T1.L(A.jb.AV);else this.T1.L(A.
jb.Am4);},De:function(E){C.BS.De.call(this,E);this.Gr.L(E);this.D1.Zs(E);},Ww:function(
E){C.BS.Ww.call(this,E);this.D1.CT(E);},Akp:function(){return this.AW.Akp();},Awd:
function(){return this.AW.Awd();},D5:function(G){this.D1.T(A._GetAutoObject(A.Device.
Device).An.Ca().toFixed());},_Init:function(aArg){C.BS._Init.call(this,aArg);C.AW.
_Init.call(this.AW={I:this},0);A.acg.BU._Init.call(this.T1={I:this},0);A.acg.Ap.
_Init.call(this.Gr={I:this},0);C.D1._Init.call(this.D1={I:this},0);A.acg.C5._Init.
call(this.A_={I:this},0);this.__proto__=C.AjS;this.AW.H(AWV);this.T1.H(AWW);this.
T1.Nh(2);this.Gr.H(AWX);this.Gr.L(A.jb.CS);this.D1.AZ(0x14);this.D1.H(AWY);this.
D1.Zs(A.jb.Bm);this.D1.CT(A.jb.Re);this.D1.Hh(2);this.A_.DC(AWZ);this.A_.DL(AW0);
this.A_.L(A.jb.Bc);this.J(this.AW,0);this.J(this.T1,0);this.J(this.Gr,0);this.J(
this.D1,0);this.J(this.A_,0);this.Bb(this.AW);this.Gr.Aw(A.aaL(A.ach.Gr));this.D1.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BS;this.AW.
_Done();this.T1._Done();this.Gr._Done();this.D1._Done();this.A_._Done();C.BS._Done.
call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.AW._ReInit();this.T1.
_ReInit();this.Gr._ReInit();this.D1._ReInit();this.A_._ReInit();this.D1.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.AW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.T1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearch"
};C.DF={Di:null,In:null,Im:null,Af_:function(G){if(this.Ey<0)this.LZ(1);else if(
this.Ey===9)this.LZ(0);else this.LZ(this.Ey+1);A.pe(this.Di,this);},Ai:function(
Ae){var B;C.Ey.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Iy=((Ae&0x40)===0x40
);if(Iy){this.Background.L(A.jb.AV);this.Text.L(A.jb.Bm);this.Dr(256);}else if(G$
){this.Background.L(this.M0);this.Text.L(A.jb.Text);this.Dr(256);}else{this.Background.
L(this.M0);this.Text.L(A.jb.Text);this.Dr(128);}},Af9:function(G){if(this.Ey<=0)
this.LZ(9);else this.LZ(this.Ey-1);A.pe(this.Di,this);},_Init:function(aArg){C.Ey.
_Init.call(this,aArg);A.Core.BN._Init.call(this.In={I:this},0);A.Core.BN._Init.call(
this.Im={I:this},0);this.__proto__=C.DF;this.In.Filter=4;this.Im.Filter=5;this.In.
BO=[this,this.Af_];this.In.D0=[this,this.Af_];this.Im.BO=[this,this.Af9];this.Im.
D0=[this,this.Af9];},_Done:function(){this.__proto__=C.Ey;this.In._Done();this.Im.
_Done();C.Ey._Done.call(this);},_ReInit:function(){C.Ey._ReInit.call(this);this.
In._ReInit();this.Im._ReInit();},_Mark:function(D){var B;C.Ey._Mark.call(this,D);
if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.In)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputDigit"};C.AW={Di:null,Ct:null,CU:null,Dx:null,Eo:null,FV:null
,ET:null,Fh:null,E8:null,M5:0,AQ2:false,Aqr:false,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);if(((Ae&0x40)===0x40)&&this.Aqr)this.ET.AeW(true);else this.ET.
AeW(false);},AwI:function(E){var B;if(E===this.Akp())return;var Af4=E;var DW=this.
ET;while(!!DW){if(Af4>0){DW.LZ(Af4%10);Af4=(Af4/10)|0;}else DW.LZ(-1);DW=(C.DF.isPrototypeOf(
B=this.QD(DW,2,0x11))?B:null);}},Akp:function(){return A.wz(this.Awd(),-1,10);},
Om:function(G){if(this.FV.Ey>=0)this.BfY(7);},MU:function(G){if(((this.Akp()>0)||
this.AQ2)&&(this.Ct.Ey<0))this.BfY(2);else if(this.Akp()<=0)this.E8.NH=true;},Ads:
function(G){A.pe(this.Di,this);},BfY:function(Gw){var B;var ALr=0;var DW=null;switch(
Gw){case 2:{DW=this.Ct;ALr=7;}break;case 7:{DW=this.ET;ALr=2;}break;default:throw new
Error(AW1);}while(!!DW){var A2G=(C.DF.isPrototypeOf(B=this.QD(DW,ALr,0x11))?B:null
);if(!!A2G)DW.LZ(A2G.Ey);else if(ALr===7)DW.LZ(0);else DW.LZ(-1);DW=A2G;}A.pe([this
,this.Ads],this);},AeW:function(E){if(this.Aqr===E)return;this.Aqr=E;this.Am();}
,Bmz:function(E){if(this.AQ2===E)return;this.AQ2=E;},AS0:function(E){var B;if(E===
this.Awd())return;var Af4=E;var DW=this.ET;while(!!DW){if(Af4.length>0){DW.LZ(A.
wz(A.ab2(Af4,1),-1,10));Af4=A.abV(Af4,Af4.length-1);}else DW.LZ(-1);DW=(C.DF.isPrototypeOf(
B=this.QD(DW,2,0x11))?B:null);}},Awd:function(){var B;var Ic=A.jV;var O=0;var B5=
this.Ct;for(;O<6;O=O+1){if(!!B5&&(B5.Ey>=0))Ic=Ic+B5.Ey.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TL(B5,0x11))?B:null);}A.ab5("%s",Ic);return Ic;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);C.DF._Init.call(this.Ct={I:this},0);C.DF._Init.call(this.
CU={I:this},0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.Eo={I:this
},0);C.DF._Init.call(this.FV={I:this},0);C.DF._Init.call(this.ET={I:this},0);A.Core.
BN._Init.call(this.Fh={I:this},0);A.Core.BN._Init.call(this.E8={I:this},0);this.
__proto__=C.AW;this.H(Ayg);this.Ct.AZ(0x3);this.Ct.H(AHH);this.CU.AZ(0x3);this.CU.
H(AHI);this.Dx.AZ(0x3);this.Dx.H(AHJ);this.Eo.AZ(0x3);this.Eo.H(AHK);this.FV.AZ(
0x3);this.FV.H(AHL);this.ET.AZ(0x3);this.ET.H(AHM);this.ET.LZ(0);this.Fh.Filter=
6;this.E8.Filter=7;this.M5=A.jb.CK;this.J(this.Ct,0);this.J(this.CU,0);this.J(this.
Dx,0);this.J(this.Eo,0);this.J(this.FV,0);this.J(this.ET,0);this.Bb(this.ET);this.
Ct.Di=[this,this.Ads];this.CU.Di=[this,this.Ads];this.Dx.Di=[this,this.Ads];this.
Eo.Di=[this,this.Ads];this.FV.Di=[this,this.Ads];this.ET.Di=[this,this.Ads];this.
Fh.BO=[this,this.Om];this.E8.BO=[this,this.MU];},_Done:function(){this.__proto__=
A.Core.P;this.Ct._Done();this.CU._Done();this.Dx._Done();this.Eo._Done();this.FV.
_Done();this.ET._Done();this.Fh._Done();this.E8._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ct._ReInit();this.CU._ReInit(
);this.Dx._ReInit();this.Eo._ReInit();this.FV._ReInit();this.ET._ReInit();this.Fh.
_ReInit();this.E8._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ct)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputID"};C.Bhs="467cb5b4";C.BCu={Undefined:
0,BDw:1,BCL:2};C.AkJ={Tm:null,AiU:null,La:null,ANv:null,Aoa:null,push:function(MI
){if(!this.Tm){MI.Ahr=null;MI.Ms=null;this.Tm=MI;this.AiU=this.Tm;}else{MI.Ahr=this.
AiU;MI.Ms=null;this.AiU.Ms=MI;this.AiU=MI;}},BBs:function(MI){var Qd=this.Tm;while(
!!Qd){if(Qd.JJ.Id===MI.Id)return Qd;Qd=Qd.Ms;}return Qd;},BBa:function(MI){if(MI===
this.Tm)this.pop();else if(MI===this.AiU){MI=MI.Ahr;if(!!MI)MI.Ms=null;this.AiU=
MI;}else{MI.Ahr.Ms=MI.Ms;MI.Ms.Ahr=MI.Ahr;}},Ahh:function(E){var F;if(this.La===
E)return;this.La=E;if(!!this.La)this.La.AgE(2);(F=this.ANv,F[2].call(F[0],this.La
));},Ve:function(G){var Qd=(C.ATN.isPrototypeOf(G)?G:null);if(!!Qd){if(!Qd.JJ.PopupState
){if(!this.La)this.Ahh(this.top());}else if(Qd.JJ.PopupState===4){this.pop();this.
Ahh(this.top());}else if(Qd.JJ.PopupState===5){this.pop();this.Ahh(this.top());}
else if(Qd.JJ.PopupState===7){this.pop();this.Ahh(this.top());}else if(Qd.JJ.PopupState===
8){this.pop();this.Ahh(this.top());}else if(Qd.JJ.PopupState===6){if(Qd===this.La
){this.pop();this.Ahh(this.top());}else this.BBa(Qd);}else if(Qd.JJ.PopupState===
3){this.pop();this.Ahh(this.top());}}},pop:function(){var AKO=null;if(!!this.Tm){
AKO=this.Tm;if(this.Tm===this.AiU){this.Tm=null;this.AiU=null;}else{this.Tm=this.
Tm.Ms;if(!this.Tm)throw new Error(AW2);this.Tm.Ahr=null;}AKO.Ahr=null;AKO.Ms=null;
}return AKO;},top:function(){return this.Tm;},BAT:function(G){var B;var AtX=(A.Device.
PopupContext.isPrototypeOf(B=this.Aoa.JJ)?B:null);if(!!AtX){var A3W=this.BBs(AtX
);if(!!A3W){A3W.A9E(AtX);if(!AtX.Show)A3W.AgE(6);}else if(AtX.Show){var AKs=A._NewObject(
C.ATN,0);AKs.A9E(AtX);AKs.ASJ=[this,this.Ve];this.push(AKs);AKs.AgE(0);}}},_Init:
function(aArg){A.Core.A$q._Init.call(this.Aoa={I:this},0);this.__proto__=C.AkJ;this.
Aoa.AR$=[this,this.BAT];this.Aoa.BlT(A._GetAutoObject(A.Device.Device).AnP);A.h7++;
},_Done:function(){this.__proto__=null;this.Aoa._Done();A.h7--;},_ReInit:function(
){this.Aoa._ReInit();},_Mark:function(D){var B;if((B=this.Tm)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.La)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANv)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aoa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATN={S3:null,Ms:null,Ahr:null,JJ:null,ASJ:null,PopupIdToString:null,Aii:function(
Bwz,Bw9,Bxs,Bxi,Bxk,Bxh,BwS){var Vg=A._NewObject(C.ATM,0);Vg.Bm2(this.JJ.Id);Vg.
A_m(Bwz);Vg.ASK=Bxh;Vg.A_o(this.JJ.Ak2);Vg.A9$(this.JJ.AkI);Vg.Bx=A._NewObject(C.
N,0);Vg.KR().Cl=Bxk;Vg.KR().Ck=null;Vg.KR().CB=Bxi;Vg.KR().CV(Bxs);Vg.KR().Cs(null
);Vg.KR().Hu(Bw9);Vg.KR().AFd(BwS);return Vg;},Akq:function(){if(!this.S3){var AiS=
this.PopupIdToString.BI(this.JJ.Id);switch(this.JJ.Id){case 46:this.S3=this.Aii(
AiS,A.jV,A.aaR(A.acf.Ok),null,[this,this.AKw],[this,this.AiM],1);break;case 91:case
92:this.S3=this.Aii(AiS,A.jV,A.jV,null,null,[this,this.AiM],0);break;case 39:this.
S3=this.Aii(AiS,A.aaR(A.acf.AmA),A.aaR(A.acf.Ok),[this,this.A2U],[this,this.A2V]
,[this,this.AiM],3);break;case 13:this.S3=this.Aii(AiS,A.aaR(A.acf.AmA),A.aaR(A.
acf.Bn0),[this,this.A2T],[this,this.AKw],[this,this.AiM],3);break;case 25:this.S3=
this.Aii(AiS,A.aaR(A.acf.AmA),A.aaR(A.acf.Ok),[this,this.A2T],[this,this.AKw],[this
,this.AiM],3);break;case 16:case 24:case 49:case 74:this.S3=this.Aii(AiS,A.aaR(A.
acf.AmA),A.jV,[this,this.A2T],null,[this,this.AiM],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.S3=this.Aii(AiS,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A2U],[this,this.A2V],[this,this.AiM],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.S3=this.Aii(AiS,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKw],[this,this.AiM],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.S3=
this.Aii(AiS,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2U],[this,this.A2V],[this
,this.AiM],3);break;default:A.ab5("%s",(AW3+this.JJ.Id.toFixed())+AW4);}}switch(
this.JJ.Id){case 16:case 49:this.S3.A_C(true);break;case 91:case 92:this.S3.A_C(
false);break;default:;}return this.S3;},AKw:function(G){this.AgE(4);},A2T:function(
G){this.AgE(5);},A2V:function(G){this.AgE(7);},A2U:function(G){this.AgE(8);},AiM:
function(G){this.AgE(3);},A9E:function(E){if(this.JJ===E)return;this.JJ=E;if(!!this.
S3){this.Akq().A_o(this.JJ.Ak2);this.Akq().A9$(this.JJ.AkI);}},AgE:function(Bxn){
var B;this.JJ.Bm3(Bxn);(B=this.ASJ)?B[1].call(B[0],this):null;},BAr:function(G){
this.AgE(9);},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ATN;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.S3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahr)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASJ)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.Ga={BooleanToYesNo:null,Do:function(
){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Ga;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afj={Uo:null,J$:function(G){var F;var BR=this.AM;this.By(this.AM+1);if(this.
AM!==BR){if(!!this.Uo&&!!this.AC)switch(this.AC.C4(this.AM)){case 0:(F=this.Uo,F[
2].call(F[0],false));break;case 1:(F=this.Uo,F[2].call(F[0],true));break;default:;
}A.abo(this.Uo,0);}},J6:function(G){var F;var BR=this.AM;this.By(this.AM-1);if(this.
AM!==BR){if(!!this.Uo&&!!this.AC)switch(this.AC.C4(this.AM)){case 0:(F=this.Uo,F[
2].call(F[0],false));break;case 1:(F=this.Uo,F[2].call(F[0],true));break;default:;
}A.abo(this.Uo,0);}},AkC:function(E){if(A.aaZ(this.Uo,E))return;if(!!this.Q)A.z$([
this,this.A3x],this.Uo,0);this.Uo=E;if(!!E)A.zX([this,this.A3x],E,0);if(!!E)A.pe([
this,this.A3x],this);},A3x:function(G){var F;if(!!this.Uo){if((F=this.Uo,F[1].call(
F[0])))this.By(1);else this.By(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.Afj;this.JV(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Uo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AT4={Jc:null,OU:null,IP:null,Gh:null,AL:null,Abh:null,AgJ:null,TH:null,R6:null
,AcD:null,WX:null,Hd:null,ABq:true,Init:function(aArg){var B;A.zX([this,this.Al3
],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.AZ$],0);A.pe([this,this.Al3],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABq)this.N.C6(A.aaL(A.ach.
AQI));else this.N.C6(A.aaL(A.ach.AQJ));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OU.L(A.jb.Bm);this.R6.Z(false);this.TH.Z(false);this.IP.Z(true);this.Gh.
Ar(false);(F=this.Gh.Q,F[2].call(F[0],this.Gh.B2));this.Background.L(A.jb.Gf);}else
if(this.Abh.Bw){this.OU.L(A.jb.Text);this.R6.Z(true);this.TH.Z(true);this.IP.Z(false
);this.Gh.Ar(false);(F=this.Gh.Q,F[2].call(F[0],this.Gh.B2));this.Background.L(A.
jb.E1);}else{this.OU.L(A.jb.Text);this.R6.Z(false);this.TH.Z(false);this.IP.Z(true
);this.Gh.Ar(true);this.Background.L(A.jb.CK);}if(this.AgJ.Bw)this.WX.Z(true);else
this.WX.Z(false);},CF:function(G){A._GetAutoObject(A.Device.Device).AhE();},E3:function(
G){A._GetAutoObject(A.Device.Device).An1();A._GetAutoObject(A.Device.Device).Ae8(
false);A._GetAutoObject(A.Device.Device).Un(false);},Al3:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
Bz9],this);break;case 3:{A.pe([this,this.BeP],this);A.pe([B=this.Abh,B.AxE],this
);A.pe(this.Abh.Mx,this);}break;case 4:A.ab5("%s",AW5);break;default:;}},Ev:function(
G){A._GetAutoObject(C.A$).Fv();},BAU:function(G){this.Bns(!this.ABq);},Bns:function(
E){if(this.ABq===E)return;this.ABq=E;if(!E)A._GetAutoObject(A.Device.Device).Ae8(
false);this.Am();},Bz9:function(G){var B;this.BeP(this);if(this.ABq)A._GetAutoObject(
A.Device.Device).Ae8(true);A._GetAutoObject(A.Device.Device).WA(65280);A._GetAutoObject(
A.Device.Device).Un(true);A.pe([B=this.Abh,B.StartTimer],this);A.pe([B=this.AgJ,
B.StartTimer],this);this.Am();},Bz_:function(G){A._GetAutoObject(A.Device.Device
).Ae8(false);A._GetAutoObject(A.Device.Device).Un(false);this.Am();},BAa:function(
G){this.Am();},BeP:function(G){A._GetAutoObject(A.Device.Device).AhE();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jc._Init.call(this.Jc={I:this},0);C.CH._Init.
call(this.OU={I:this},0);A.acg.Ap._Init.call(this.IP={I:this},0);A.acl.Gh._Init.
call(this.Gh={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Abh={I:this},0);A.Core.Timer._Init.call(this.AgJ={I:this},0);A.acg.Ap.
_Init.call(this.TH={I:this},0);A.acg.Ap._Init.call(this.R6={I:this},0);A.acg.Text.
_Init.call(this.AcD={I:this},0);C.WX._Init.call(this.WX={I:this},0);C.CH._Init.call(
this.Hd={I:this},0);this.__proto__=C.AT4;var B;this.Background.L(A.jb.CK);this.N.
Z(true);this.Jc.H(AW6);this.Jc.AkF(0);this.OU.H(AW7);this.OU.R(A.aaR(A.acf.A$v));
this.OU.L(A.jb.Text);this.IP.H(AW8);this.IP.L(A.jb.AV);this.IP.Zq(true);this.Gh.
Fl(1750);this.Gh.Uk(750);this.Gh.AkA(0);this.Gh.Ar(true);this.Gh.B2=3;this.AL.H(
Ayh);this.Abh.PO(-1);this.Abh.Wx(1000);this.AgJ.PO(-1);this.AgJ.Wx(5000);this.TH.
H(AHN);this.R6.H(AHN);this.R6.L(A.jb.E1);this.AcD.H(Ayh);this.AcD.R(A.aaR(A.acf.
A_7));this.AcD.L(A.jb.Text);this.WX.H(Ayh);this.Hd.H(AW9);this.Hd.Ar(false);this.
Hd.R(A.aaR(A.acf.RangeTest));this.Hd.L(A.jb.Text);this.J(this.Jc,0);this.J(this.
OU,0);this.J(this.IP,0);this.J(this.AL,0);this.J(this.TH,0);this.J(this.R6,0);this.
J(this.AcD,0);this.J(this.WX,0);this.J(this.Hd,0);this.N.CB=[this,this.Ev];this.
N.Cl=[this,this.BAU];this.N.CY(A.aaL(A.ach.E2));this.OU.S(A.aaL(A.fl.Af));this.OU.
A2(A.aaL(A.fl.Ak));this.OU.Cu(A.aaL(A.fl.Bh));this.IP.Aw(A.aaL(A.ach.ADG));this.
Gh.Q=[B=this.IP,B.ASm,B.Cv];this.Abh.Mx=[this,this.Bz_];this.AgJ.Mx=[this,this.BAa
];this.TH.Aw(A.aaL(A.ach.TH));this.R6.Aw(A.aaL(A.ach.R6));this.AcD.S(A.aaL(A.fl.
Af));this.WX.As([B=A._GetAutoObject(A.Device.Device),B.ASA,B.A0a]);this.Hd.S(A.aaL(
A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ij));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jc._Done();this.OU._Done();this.IP._Done();this.Gh._Done();this.AL._Done(
);this.Abh._Done();this.AgJ._Done();this.TH._Done();this.R6._Done();this.AcD._Done(
);this.WX._Done();this.Hd._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jc._ReInit();this.OU._ReInit();this.IP._ReInit();this.Gh.
_ReInit();this.AL._ReInit();this.Abh._ReInit();this.AgJ._ReInit();this.TH._ReInit(
);this.R6._ReInit();this.AcD._ReInit();this.WX._ReInit();this.Hd._ReInit();this.
OU.R(A.aaR(A.acf.A$v));this.AcD.R(A.aaR(A.acf.A_7));this.Hd.R(A.aaR(A.acf.RangeTest
));this.OU.S(A.aaL(A.fl.Af));this.OU.A2(A.aaL(A.fl.Ak));this.OU.Cu(A.aaL(A.fl.Bh
));this.AcD.S(A.aaL(A.fl.Af));this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ij
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jc)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcD)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hd).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbU={
ScreenType:0,Nf:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Ni:
function(G){A._GetAutoObject(C.A$).Cg(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.AbU;},_className:"Application::MenuItemScreen"
};C.T9={Ad6:null,Mj:null,AmB:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.AmB){this.Mj.Cv(1);this.Mj.L(A.jb.H6);}else{this.Mj.Cv(0);
if(this.KE)this.Mj.L(A.jb.Bm);else if(this.Hf)this.Mj.L(A.jb.Text);else this.Mj.
L(A.jb.Bm);}},IW:function(G){var F,CA;if(!!this.Ad6){(CA=this.Ad6,CA[2].call(CA[
0],!(F=this.Ad6,F[1].call(F[0]))));this.AEV((F=this.Ad6,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A20:function(G){this.KE=true;this.DJ(this);},AEV:function(
E){if(this.AmB===E)return;this.AmB=E;this.DJ(this);this.Am();},A3q:function(G){var
F;this.AEV((F=this.Ad6,F[1].call(F[0])));},A0t:function(s){this.A3q(s);},DJ:function(
G){var F;if(!this.N||!this.KE)return;if(this.AmB){(F=this.N,F[1].call(F[0])).CV(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CV(A.aaR(A.acf.A71));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ASP:function(E){if(A.aaZ(this.Ad6,E))
return;if(!!this.Ad6)A.z$([this,this.A0t],this.Ad6,0);this.Ad6=E;if(!!E)A.zX([this
,this.A0t],E,0);if(!!E)A.pe([this,this.A0t],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mj={I:this},0);this.__proto__=C.T9;this.
V.L(A.jb.H6);this.Mj.H(AHO);this.Mj.Cv(0);this.J(this.Mj,0);this.Mj.Aw(A.aaL(A.ach.
AqN));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mj._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mj._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad6)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.AND={H3:null,IJ:null,_Init:function(aArg){C.Cd.
_Init.call(this,aArg);C.SL._Init.call(this.H3={I:this},0);C.AGC._Init.call(this.
IJ={I:this},0);this.__proto__=C.AND;var B;this.I8(A.aaR(A.acf.ACp));this.H3.H(AhX
);this.H3.Aj(true);this.H3.T(A.aaR(A.acf.Date));this.H3.Bg(true);this.IJ.H(UV);this.
IJ.Aj(true);this.IJ.T(A.aaR(A.acf.Bs));this.J(this.H3,-1);this.J(this.IJ,-1);this.
H3.AeT([B=this.H3,B.FQ]);this.H3.Gn([this,this.D_,this.GN]);this.H3.Akz(A.aaL(A.
ach.Edit));this.H3.Ab8([B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);this.IJ.
AeT([B=this.IJ,B.FQ]);this.IJ.Gn([this,this.D_,this.GN]);this.IJ.Akz(A.aaL(A.ach.
Edit));this.IJ.Ab8([B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);},_Done:function(
){this.__proto__=C.Cd;this.H3._Done();this.IJ._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.H3._ReInit();this.IJ._ReInit();this.I8(A.
aaR(A.acf.ACp));this.H3.T(A.aaR(A.acf.Date));this.IJ.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cd._Mark.call(this,D);if((B=this.H3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AU1={Rb:null,FE:null,BZ:null,OH:null,YK:null,Aa2:null,_Init:function(aArg){C.
Cd._Init.call(this,aArg);C.Rb._Init.call(this.Rb={I:this},0);C.AMx._Init.call(this.
FE={I:this},0);C.AUA._Init.call(this.BZ={I:this},0);C.AUC._Init.call(this.OH={I:
this},0);C.Afj._Init.call(this.YK={I:this},0);C.Aa2._Init.call(this.Aa2={I:this}
,0);this.__proto__=C.AU1;var B;this.I8(A.aaR(A.acf.Temperature));this.FE.As(A._GetAutoObject(
A.Device.Device).AnimalType);this.BZ.H(AW_);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.
Arm));this.BZ.Bg(false);this.OH.H(Aaf);this.OH.Aj(true);this.OH.T(A.aaR(A.acf.Undertemperature
));this.OH.Bg(true);this.OH.By(3800);this.OH.F0(3000);this.OH.EV(5000);this.OH.A_v(
A.aaR(A.acf.AGP));this.YK.H(AW$);this.YK.Aj(true);this.YK.Z(true);this.YK.T(A.aaR(
A.acf.A4V));this.J(this.BZ,0);this.J(this.OH,0);this.J(this.YK,0);this.BZ.AeT([B=
this.BZ,B.FQ]);this.BZ.Gn([this,this.D_,this.GN]);this.BZ.Akz(A.aaL(A.ach.Edit));
this.BZ.LX([B=this.BZ,B.AyQ]);this.BZ.L0(A.aaL(A.ach.AnS));this.BZ.As([B=this.FE
,B.B7,B.B8]);this.BZ.CI(this.FE);this.BZ.A99([B=this.FE,B.ASI,B.A0h]);this.BZ.A98([
B=this.FE,B.ASH,B.A0g]);this.OH.LX([B=this.BZ,B.AyQ]);this.OH.L0(A.aaL(A.ach.AnS
));this.OH.As([B=A._GetAutoObject(A.Device.Device),B.A87,B.Bbb]);this.YK.CI(this.
Aa2);this.YK.AkC([B=A._GetAutoObject(A.Device.Device),B.A8q,B.BaX]);},_Done:function(
){this.__proto__=C.Cd;this.Rb._Done();this.FE._Done();this.BZ._Done();this.OH._Done(
);this.YK._Done();this.Aa2._Done();C.Cd._Done.call(this);},_ReInit:function(){C.
Cd._ReInit.call(this);this.Rb._ReInit();this.FE._ReInit();this.BZ._ReInit();this.
OH._ReInit();this.YK._ReInit();this.Aa2._ReInit();this.I8(A.aaR(A.acf.Temperature
));this.BZ.T(A.aaR(A.acf.Arm));this.OH.T(A.aaR(A.acf.Undertemperature));this.OH.
A_v(A.aaR(A.acf.AGP));this.YK.T(A.aaR(A.acf.A4V));},_Mark:function(D){var B;C.Cd.
_Mark.call(this,D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANQ={PD:null,PE:null,So:null,V1:null,Sq:null,Sp:null,Ga:null,Acs:null,Init:function(
aArg){A.zX([this,this.BoK],this.PE.Q,0);},BoK:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw3((F=this.PE.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd.
_Init.call(this,aArg);C.Ip._Init.call(this.PD={I:this},0);C.BW._Init.call(this.PE={
I:this},0);C.Afj._Init.call(this.So={I:this},0);C.Ip._Init.call(this.V1={I:this}
,0);C.Afj._Init.call(this.Sq={I:this},0);C.Afj._Init.call(this.Sp={I:this},0);C.
Ga._Init.call(this.Ga={I:this},0);C.Acs._Init.call(this.Acs={I:this},0);this.__proto__=
C.ANQ;var B;this.N.H(Xc);this.I8(A.aaR(A.acf.Device));this.PD.H(AhX);this.PD.Aj(
true);this.PD.T(A.aaR(A.acf.A$f));this.PD.Bg(false);this.PD.F0(2);this.PD.EV(60);
this.PD.IM(A.aaR(A.acf.AG5));this.PD.I9(A.aaR(A.acf.AG5));this.PE.H(AXa);this.PE.
Aj(true);this.PE.T(A.aaR(A.acf.A$m));this.PE.Bg(true);this.PE.By(0);this.PE.F0(-
1);this.PE.EV(1);this.So.H(Aaf);this.So.Aj(true);this.So.T(A.aaR(A.acf.HB));this.
So.Bg(false);this.So.By(0);this.So.F0(-1);this.So.EV(1);this.V1.H(Alh);this.V1.Aj(
true);this.V1.T(A.aaR(A.acf.A5h));this.V1.Bg(true);this.V1.IM(Aag);this.V1.I9(Aag
);this.Sq.H(AcP);this.Sq.Aj(true);this.Sq.T(A.aaR(A.acf.AsM));this.Sq.Bg(false);
this.Sq.By(1);this.Sq.F0(-1);this.Sq.EV(1);this.Sp.H(Ayi);this.Sp.Aj(true);this.
Sp.T(A.aaR(A.acf.Asq));this.Sp.Bg(true);this.Sp.By(0);this.Sp.F0(-1);this.Sp.EV(
1);this.Acs.As(A._GetAutoObject(A.Device.Device).AxD);this.J(this.PD,0);this.J(this.
PE,0);this.J(this.So,0);this.J(this.V1,0);this.J(this.Sq,0);this.J(this.Sp,0);this.
PD.As([B=A._GetAutoObject(A.Device.Device),B.A8Z,B.Ba9]);this.PE.As([B=this.Acs,
B.B7,B.B8]);this.PE.CI(this.Acs);this.So.CI(this.Ga);this.So.AkC([B=A._GetAutoObject(
A.Device.Device),B.AEu,B.AIK]);this.V1.As([B=A._GetAutoObject(A.Device.Device),B.
A8n,B.BaU]);this.Sq.CI(this.Ga);this.Sq.AkC([B=A._GetAutoObject(A.Device.Device)
,B.A88,B.Bbc]);this.Sp.CI(this.Ga);this.Sp.AkC([B=A._GetAutoObject(A.Device.Device
),B.ASq,B.AZ5]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.PD._Done(
);this.PE._Done();this.So._Done();this.V1._Done();this.Sq._Done();this.Sp._Done(
);this.Ga._Done();this.Acs._Done();C.Cd._Done.call(this);},_ReInit:function(){C.
Cd._ReInit.call(this);this.PD._ReInit();this.PE._ReInit();this.So._ReInit();this.
V1._ReInit();this.Sq._ReInit();this.Sp._ReInit();this.Ga._ReInit();this.Acs._ReInit(
);this.I8(A.aaR(A.acf.Device));this.PD.T(A.aaR(A.acf.A$f));this.PD.IM(A.aaR(A.acf.
AG5));this.PD.I9(A.aaR(A.acf.AG5));this.PE.T(A.aaR(A.acf.A$m));this.So.T(A.aaR(A.
acf.HB));this.V1.T(A.aaR(A.acf.A5h));this.Sq.T(A.aaR(A.acf.AsM));this.Sp.T(A.aaR(
A.acf.Asq));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.PD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acs)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUe={V4:null,V3:
null,QJ:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bh6
],this.QJ.Q,0);},Bh6:function(G){var F;A._GetAutoObject(A.Device.Device).Akw((F=
this.QJ.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd._Init.call(this,aArg);C.
Nc._Init.call(this.V4={I:this},0);C.Nc._Init.call(this.V3={I:this},0);C.AUw._Init.
call(this.QJ={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUe;var B;this.I8(A.aaR(A.acf.Asj));this.V4.H(IR);this.
V4.Aj(true);this.V4.T(A.aaR(A.acf.AjF));this.V4.Bg(false);this.V4.Nf(87);this.V3.
H(AXb);this.V3.Aj(true);this.V3.T(A.aaR(A.acf.Aqm));this.V3.Bg(true);this.V3.Nf(
88);this.QJ.H(UV);this.QJ.Aj(true);this.QJ.T(A.aaR(A.acf.A40));this.QJ.Bg(false);
this.QJ.F0(-1);this.QJ.EV(1);this.EartagNrAssignmentMode.As(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V4,0);this.J(this.V3,0);this.J(this.
QJ,0);this.V4.AR=[B=this.V4,B.Ni];this.V3.AR=[B=this.V3,B.Ni];this.QJ.As([B=this.
EartagNrAssignmentMode,B.B7,B.B8]);this.QJ.CI(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.V4._Done();this.V3._Done(
);this.QJ._Done();this.EartagNrAssignmentMode._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.V4._ReInit();this.V3._ReInit();this.QJ._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.I8(A.aaR(A.acf.Asj));this.V4.T(A.aaR(
A.acf.AjF));this.V3.T(A.aaR(A.acf.Aqm));this.QJ.T(A.aaR(A.acf.A40));},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.V4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.WX={Q:null,TransponderProtocolToString:
null,App:null,Background:null,Y:null,Si:null,GJ:null,PJ:null,OJ:null,Pn:null,C7:
null,Gu:null,SE:null,N1:null,CountryToString:null,As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Kd],E,0);if(!!E)A.pe([this,this.Kd],this);},Kd:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GJ.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BP=(F=this.Q,F[1].call(F[0])).BiB();if(BP<900){var J4=A._GetAutoObject(
A.Device.Converter).ANu(BP);if(!!J4)this.C7.R(((this.CountryToString.Lt(J4)+AcN)+
BP.toFixed())+Oa);else this.C7.R(BP.toFixed());if(J4===10){var AJ$=this.A6U((F=this.
Q,F[1].call(F[0])).Id);this.C7.R(this.C7.String+((((AHP+this.App.Bpu(AJ$))+AcN)+
A.abl(this.App.Bpt(AJ$),2,10))+Oa));}this.C7.Z(true);this.Pn.Z(true);this.OJ.Z(false
);this.PJ.Z(false);}else{this.OJ.R(((A._GetAutoObject(A.Device.Converter).Bhv(BP
)+AcN)+BP.toFixed())+Oa);this.OJ.Z(true);this.PJ.Z(true);this.C7.Z(false);this.Pn.
Z(false);}if(BP===276){this.Gu.R(this.App.BI(this.A6U((F=this.Q,F[1].call(F[0])).
Id)));this.Gu.Z(true);}else this.Gu.Z(false);this.N1.R(this.TransponderProtocolToString.
BI((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GJ.R(A.jV);this.OJ.
R(A.jV);this.Gu.R(A.jV);this.C7.R(A.jV);this.N1.R(A.jV);}},A6U:function(J2){var Qr=
0;var J4=A._GetAutoObject(A.Device.Converter).ZY(J2);switch(J4){case 10:{var Ge=
A._GetAutoObject(A.Device.Helper).Sd(J2,8,2)|0;Qr=A._GetAutoObject(A.Device.Converter
).ACP(Ge);}break;default:;}return Qr;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.App={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CH._Init.call(this.Si={I:this},0);C.CH._Init.call(this.GJ={I:this},0);C.CH._Init.
call(this.PJ={I:this},0);C.CH._Init.call(this.OJ={I:this},0);C.CH._Init.call(this.
Pn={I:this},0);C.CH._Init.call(this.C7={I:this},0);C.CH._Init.call(this.Gu={I:this
},0);C.CH._Init.call(this.SE={I:this},0);C.CH._Init.call(this.N1={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WX;
this.H(AcO);this.Background.AZ(0x3F);this.Background.H(AcO);this.Background.L(A.
jb.CS);this.Y.AZ(0x3F);this.Y.H(AcO);this.Y.JP(9);this.Si.H(AXc);this.Si.Aj(true
);this.Si.R(A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon));this.Si.A6(0x11);this.Si.L(A.jb.
Text);this.GJ.H(AHQ);this.GJ.Aj(true);this.GJ.R(AXd);this.GJ.A6(0x14);this.GJ.L(
A.jb.Text);this.PJ.H(AHR);this.PJ.Aj(true);this.PJ.R(A.aaR(A.acf.A_L)+A.aaR(A.acf.
Colon));this.PJ.A6(0x11);this.PJ.L(A.jb.Text);this.OJ.H(AHS);this.OJ.Aj(true);this.
OJ.R(AXe);this.OJ.A6(0x14);this.OJ.L(A.jb.Text);this.Pn.H(AHR);this.Pn.Aj(true);
this.Pn.R(A.aaR(A.acf.C7)+A.aaR(A.acf.Colon));this.Pn.A6(0x11);this.Pn.L(A.jb.Text
);this.C7.H(AHS);this.C7.Aj(true);this.C7.R(AXf);this.C7.A6(0x14);this.C7.L(A.jb.
Text);this.Gu.H(AXg);this.Gu.Aj(true);this.Gu.R(AXh);this.Gu.A6(0x14);this.Gu.L(
A.jb.Text);this.SE.H(AXi);this.SE.Aj(true);this.SE.R(A.aaR(A.acf.N1)+A.aaR(A.acf.
Colon));this.SE.A6(0x11);this.SE.L(A.jb.Text);this.N1.H(AXj);this.N1.Aj(true);this.
N1.R(AXk);this.N1.A6(0x14);this.N1.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Si,0);this.J(this.GJ,0);this.J(this.PJ,0);this.J(this.OJ,0
);this.J(this.Pn,0);this.J(this.C7,0);this.J(this.Gu,0);this.J(this.SE,0);this.J(
this.N1,0);this.Si.S(A.aaL(A.fl.Ak));this.Si.A2(A.aaL(A.fl.Bh));this.GJ.S(A.aaL(
A.fl.Ak));this.GJ.A2(A.aaL(A.fl.Bh));this.PJ.S(A.aaL(A.fl.Ak));this.PJ.A2(A.aaL(
A.fl.Bh));this.OJ.S(A.aaL(A.fl.Ak));this.OJ.A2(A.aaL(A.fl.Bh));this.Pn.S(A.aaL(A.
fl.Ak));this.Pn.A2(A.aaL(A.fl.Bh));this.C7.S(A.aaL(A.fl.Ak));this.C7.A2(A.aaL(A.
fl.Bh));this.Gu.S(A.aaL(A.fl.Ak));this.Gu.A2(A.aaL(A.fl.Bh));this.SE.S(A.aaL(A.fl.
Ak));this.SE.A2(A.aaL(A.fl.Bh));this.N1.S(A.aaL(A.fl.Ak));this.N1.A2(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.App._Done();this.Background._Done();this.Y._Done();this.Si._Done();
this.GJ._Done();this.PJ._Done();this.OJ._Done();this.Pn._Done();this.C7._Done();
this.Gu._Done();this.SE._Done();this.N1._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.App._ReInit();this.Background._ReInit();this.Y._ReInit();this.Si.
_ReInit();this.GJ._ReInit();this.PJ._ReInit();this.OJ._ReInit();this.Pn._ReInit(
);this.C7._ReInit();this.Gu._ReInit();this.SE._ReInit();this.N1._ReInit();this.CountryToString.
_ReInit();this.Si.R(A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon));this.PJ.R(A.aaR(A.acf.A_L
)+A.aaR(A.acf.Colon));this.Pn.R(A.aaR(A.acf.C7)+A.aaR(A.acf.Colon));this.SE.R(A.
aaR(A.acf.N1)+A.aaR(A.acf.Colon));this.Si.S(A.aaL(A.fl.Ak));this.Si.A2(A.aaL(A.fl.
Bh));this.GJ.S(A.aaL(A.fl.Ak));this.GJ.A2(A.aaL(A.fl.Bh));this.PJ.S(A.aaL(A.fl.Ak
));this.PJ.A2(A.aaL(A.fl.Bh));this.OJ.S(A.aaL(A.fl.Ak));this.OJ.A2(A.aaL(A.fl.Bh
));this.Pn.S(A.aaL(A.fl.Ak));this.Pn.A2(A.aaL(A.fl.Bh));this.C7.S(A.aaL(A.fl.Ak)
);this.C7.A2(A.aaL(A.fl.Bh));this.Gu.S(A.aaL(A.fl.Ak));this.Gu.A2(A.aaL(A.fl.Bh)
);this.SE.S(A.aaL(A.fl.Ak));this.SE.A2(A.aaL(A.fl.Bh));this.N1.S(A.aaL(A.fl.Ak));
this.N1.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.App)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Si)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QR={D1:null,A_Z:A.jV,Ai:function(Ae){C.Fi.Ai.call(
this,Ae);if(this.Mn.Fk())this.D1.CT(A.jb.AV);else this.D1.CT(this.Background.AQ);
this.D1.Zs(this.G4.AQ);},Zv:function(E){if(this.A_Z===E)return;this.A_Z=E;this.D1.
Text.R(E);this.D1.Z(E!==A.jV);},_Init:function(aArg){C.Fi._Init.call(this,aArg);
C.D1._Init.call(this.D1={I:this},0);this.__proto__=C.QR;this.Background.H(AXl);this.
Mn.H(W3);this.OC.H(AHT);this.QX.H(AHT);this.D1.H(AXm);this.D1.Z(false);this.J(this.
D1,0);this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fi;this.D1._Done();C.Fi._Done.call(this
);},_ReInit:function(){C.Fi._ReInit.call(this);this.D1._ReInit();this.G4.S(A.aaL(
A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fi._Mark.call(this,D);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D1={B6:null,AeB:null,Ap:null,Text:null
,DK:A.jV,AmO:0,M0:0,I_:0,A5k:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BB_:function(G){this.Ap.H(this.Text.M);this.
AeB.H(this.Text.M);},Zs:function(E){if(this.AmO===E)return;this.AmO=E;this.AeB.L(
E);this.Text.L(E);},CT:function(E){if(this.M0===E)return;this.M0=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hh:function(E){
if(this.I_===E)return;this.I_=E;this.Text.Hh(E);},Blv:function(E){if(this.A5k===
E)return;this.A5k=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NO._Init.call(this.AeB={I:this},0);A.acg.NO._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D1;this.H(AHU);
this.AeB.AZ(0x8);this.AeB.L(A.jb.Text);this.Ap.AZ(0x8);this.Ap.L(A.jb.CS);this.Text.
AZ(0xD);this.Text.H(AHU);this.Text.Hh(5);this.Text.I7(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeB,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeB.Aw(A.aaL(A.ach.APQ));this.Ap.Aw(A.aaL(A.ach.APP));this.Text.Q1([this,this.BB_
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeB._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeB._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T5={DY:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},CF:function(
G){C.AB.CF.call(this,G);this.ALg(this);A._GetAutoObject(A.Device.Device).An.Bl(null
);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(A.Device.Helper
).AkO();A._GetAutoObject(A.Device.Helper).Asn();},If:function(G){},AcS:function(
s){this.If(s);},A3f:function(G){A._GetAutoObject(C.A$).Fv();},Fe:function(G){var
B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},ALg:function(G){},BGd:function(s){this.ALg(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T5;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Dq(C.AqZ);this.
DY.AZ(0x3F);this.DY.H(E$);this.DY.L(A.jb.CK);this.Y.H(E$);this.Y.JP(9);this.Ay.H(
Ir);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CB=[this,this.A3f
];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fe];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVz={Wv:function(
G){this.Agp();this.IY(A.aaR(A.acf.AU9),[this,this.ATy],7);this.IY(A.aaR(A.acf.Ask
),[this,this.Bly],6);this.IY(A.aaR(A.acf.AGa),[this,this.ATk],3);this.IY(A.aaR(A.
acf.An3),[this,this.AwR],2);this.IY(A.aaR(A.acf.XP),[this,this.AEN],1);this.IY(A.
aaR(A.acf.Auy),[this,this.AEH],0);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.
BH).MZ(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},DE:function(G){},Abs:function(){return C.AM7;},Abt:function(){return C.APy;
},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var ABs=A._NewObject(
A.Device.BoolFilterCriterion,0);ABs.Initialize(12,0,true,true);Be.CW(ABs);A._GetAutoObject(
A.Device.Device).An.Bl(Be);},HO:function(G){C.GU.HO.call(this,G);if(this.Akh()===
false){this.N.Cs(A.aaL(A.ach.Ask));this.N.Ck=[this,this.A5Z];this.N.FJ(A.jV);}this.
N.OO(false);this.N.OP(false);},Agb:function(){A._GetAutoObject(C.A$).Cg(41);},_Init:
function(aArg){C.GU._Init.call(this,aArg);this.__proto__=C.AVz;var B;this.Dq(C.APu
);this.Dz(A.aaR(A.acf.A7N));this.AwM([B=A._GetAutoObject(A.Device.Device),B.A9a,
B.Bbd]);},_ReInit:function(){C.GU._ReInit.call(this);this.Dz(A.aaR(A.acf.A7N));}
,_className:"Application::WatchListScreen"};C.AMc={DE:function(G){var B;var Jy=(
A.Core.BN.isPrototypeOf(G)?G:null);if(((Jy.CO===4)||(Jy.CO===5))===false){C.AxW.
DE.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState!==1)return;
var BcD=A._GetAutoObject(A.Device.Device).KX;var Te;if(Jy.CO===5)Te=5;else Te=4;
var AA9=A._GetAutoObject(A.acj.DV).Bdb(BcD,Te);var GB=(((BcD+((AA9/2)|0))/AA9)|0
)*AA9;if(Jy.CO===4)GB+=AA9;else if(Jy.CO===5)GB-=AA9;if(GB>999900)GB=999900;if(GB<
100)GB=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(GB);},AsB:function(
G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.pe([B=this.O1,B.
CB],this);else A._GetAutoObject(C.A$).Fv();},WM:function(G){if(A._GetAutoObject(
A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device).AsD();A._GetAutoObject(
A.Device.Device).UpdateMeasureState(3);if(this.A$d()===false){this.H5.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KX);this.H5.Cq(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A$).Fv();}}else if(A._GetAutoObject(A.Device.Device).MeasureState===
3){this.H5.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KX);this.H5.Cq(A._GetAutoObject(
A.Device.Device).Bt);A._GetAutoObject(C.A$).Fv();}},AkV:function(G){var B;if(A._GetAutoObject(
A.Device.Device).MeasureState===3)A.pe([B=this.O1,B.Cl],this);},Bda:function(){var
ALu=A._GetAutoObject(A.Device.Helper).W.AhP(1);if(ALu>=100000)ALu=(Math.round(ALu
/1000)|0)*1000;return ALu;},_Init:function(aArg){C.AxW._Init.call(this,aArg);this.
__proto__=C.AMc;},_className:"Application::AnimalActionWeighingScreen"};C.AVk={V8:
null,YM:null,Rb:null,AeM:null,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.
BW._Init.call(this.V8={I:this},0);C.BW._Init.call(this.YM={I:this},0);C.Rb._Init.
call(this.Rb={I:this},0);C.AeM._Init.call(this.AeM={I:this},0);this.__proto__=C.
AVk;var B;this.I8(A.aaR(A.acf.AG6));this.V8.H(AhX);this.V8.Aj(true);this.V8.T(A.
aaR(A.acf.A$C));this.V8.Bg(true);this.V8.By(0);this.YM.H(UV);this.YM.Aj(true);this.
YM.T(A.aaR(A.acf.A$B));this.YM.Bg(false);this.J(this.V8,0);this.J(this.YM,0);this.
V8.As([B=this.Rb,B.B7,B.B8]);this.V8.CI(this.Rb);this.YM.As([B=this.AeM,B.B7,B.B8
]);this.YM.CI(this.AeM);},_Done:function(){this.__proto__=C.Cd;this.V8._Done();this.
YM._Done();this.Rb._Done();this.AeM._Done();C.Cd._Done.call(this);},_ReInit:function(
){C.Cd._ReInit.call(this);this.V8._ReInit();this.YM._ReInit();this.Rb._ReInit();
this.AeM._ReInit();this.I8(A.aaR(A.acf.AG6));this.V8.T(A.aaR(A.acf.A$C));this.YM.
T(A.aaR(A.acf.A$B));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.
V8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeM={MassUnitToString:null
,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).AwN(E);}
,Init:function(aArg){var B;A.zX([this,this.BdP],[B=A._GetAutoObject(A.Device.Device
),B.ASp,B.AZ4],0);A.pe([this,this.BdP],this);},BdP:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeM;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.AxW={H5:null,Aju:null,MassUnit:null,
KX:null,Vv:null,AnO:null,AcF:null,ZZ:null,O1:null,YB:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DV).AfZ());A.zX([this,this.AKx],[B=A._GetAutoObject(
A.Device.Device),B.AEx,B.AIN],0);A.zX([this,this.BAV],[B=A._GetAutoObject(A.Device.
Device),B.AED,B.AIR],0);A.zX([this,this.BAW],[B=this.O1,B.Aru,B.Ju],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxP();this.AcG();},IW:function(G){this.WM(this);}
,CF:function(G){C.AB.CF.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsD();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);this.H5.Gm();this.H5.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGL();else{var BCn=this.Bda();this.ZZ.Z(true);this.AcF.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BCn);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E3:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsD();else A._GetAutoObject(A.Device.Device).AhH(
);},AxP:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.BgA();break;case 3:{this.BgA();this.ZZ.Z(false);this.AcF.Z(false
);if(this.A$d()){this.Vv.Z(false);this.KX.H(A.abO(this.KX.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O1.Ar(true);this.O1.Z(true);this.Bb(this.O1);}}break;
case 4:this.KX.R(A.aaR(A.acu.Akk));break;default:A.ab5("%s%e",AHV,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcG:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.CY(A.aaL(A.ach.Aew));this.N.Cs(null);
this.YB.Z(false);this.N.C6(A.aaL(A.ach.Am3));this.N.CV(A.jV);}break;case 3:{if(this.
O1.AY<=1){this.N.CY(null);this.N.Cs(null);this.YB.Z(false);this.N.C6(null);}else{
this.N.CY(A.aaL(A.ach.Am1));this.N.Cs(A.aaL(A.ach.Aex));this.YB.Z(true);this.N.C6(
null);}this.N.CV(A.aaR(A.acf.Ok));}break;case 4:{this.N.C6(A.aaL(A.ach.AvJ));this.
N.Cl=[this,this.Blm];this.N.Cs(null);this.YB.Z(false);this.N.CV(A.jV);}break;default:;
}},AsB:function(G){},Bwg:function(s){this.AsB(s);},WM:function(G){},A0j:function(
s){this.WM(s);},Blm:function(G){this.CF(this);},BAV:function(G){this.Am();},AKx:
function(G){this.Am();},A$d:function(){var Aup=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Aup>0)&&!A._GetAutoObject(A.Device.Helper).Bpr(Aup
,this.H5.Timestamp);},AkV:function(G){},A0i:function(s){this.AkV(s);},BAW:function(
G){this.Am();},BgA:function(){this.KX.R(A._GetAutoObject(A.Device.Converter).Ak9(
A._GetAutoObject(A.Device.Device).KX));},Bda:function(){return A._GetAutoObject(
A.Device.Helper).W.AhP(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Aju={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KX={I:this},0);A.acg.Text._Init.call(this.Vv={I:this
},0);C.AxO._Init.call(this.AnO={I:this},0);A.acg.Aem._Init.call(this.AcF={I:this
},0);A.acg.Aem._Init.call(this.ZZ={I:this},0);C.AVE._Init.call(this.O1={I:this},
0);A.acg.Ap._Init.call(this.YB={I:this},0);this.__proto__=C.AxW;this.Background.
L(A.jb.CK);this.N.Z(true);this.Dq(C.IG);this.Aju.AZ(0x3F);this.Aju.H(Ayj);this.Aju.
L(A.jb.CK);this.MassUnit.H(AXn);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
Az6));this.MassUnit.L(A.jb.Text);this.KX.H(AXo);this.KX.A6(0x14);this.KX.R(A.aaR(
A.acu.Akk));this.KX.L(A.jb.Text);this.Vv.H(AXp);this.Vv.R(A.aaR(A.acf.A$N));this.
Vv.L(A.jb.Text);this.Vv.Z(true);this.AnO.H(AXq);this.AcF.H(AHW);this.AcF.L(A.jb.
Ad9);this.AcF.Z(false);this.ZZ.H(AXr);this.ZZ.L(A.jb.Ad9);this.ZZ.Bmb(true);this.
ZZ.Z(false);this.O1.AZ(0x3F);this.O1.H(Ayj);this.O1.Ar(false);this.O1.Z(false);this.
YB.H(AXs);this.YB.L(A.jb.Bm);this.J(this.Aju,0);this.J(this.MassUnit,0);this.J(this.
KX,0);this.J(this.Vv,0);this.J(this.AcF,0);this.J(this.ZZ,0);this.J(this.O1,0);this.
J(this.YB,0);this.N.CB=[this,this.Bwg];this.N.Ck=[this,this.A0i];this.N.Cl=[this
,this.A0j];this.MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aep));this.Vv.S(
A.aaL(A.fl.EK));this.AcF.Zu(this.AnO);this.ZZ.Zu(this.AnO);this.H5=A._NewObject(
A.Device.Rating,0);this.O1.LY(A._GetAutoObject(A.Device.Helper).W);this.O1.AkD(this.
H5);this.YB.Aw(A.aaL(A.ach.AQF));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Aju._Done();this.MassUnit._Done();this.KX._Done();this.Vv._Done();this.
AnO._Done();this.AcF._Done();this.ZZ._Done();this.O1._Done();this.YB._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Aju._ReInit();
this.MassUnit._ReInit();this.KX._ReInit();this.Vv._ReInit();this.AnO._ReInit();this.
AcF._ReInit();this.ZZ._ReInit();this.O1._ReInit();this.YB._ReInit();this.MassUnit.
R(A.aaR(A.acf.Az6));this.KX.R(A.aaR(A.acu.Akk));this.Vv.R(A.aaR(A.acf.A$N));this.
MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aep));this.Vv.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H5)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YB)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVI={FE:null
,OK:null,M$:null,C9:null,LV:null,T2:null,Init:function(aArg){var B;A.zX([this,this.
GE],[B=this.FE,B.B7,B.B8],0);A.pe([this,this.GE],this);},CF:function(G){C.Cd.CF.
call(this,G);A.pe([this,this.GE],this);},Bj$:function(G){var F;this.LV.BT.L(this.
LV.V.AQ);if(!!this.LV.Q)this.LV.BT.R((A._GetAutoObject(A.Device.Converter).S2((F=
this.LV.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DV).Aax());},GE:function(
G){var AJr=true;if(this.FE.Q===1)AJr=false;this.C9.Aj(AJr);this.C9.Ar(AJr);this.
C9.Z(AJr);A._GetAutoObject(A.Device.Helper).ANo(this.Y);},_Init:function(aArg){C.
Cd._Init.call(this,aArg);C.AMy._Init.call(this.FE={I:this},0);C.AHf._Init.call(this.
OK={I:this},0);C.AUB._Init.call(this.M$={I:this},0);C.AkT._Init.call(this.C9={I:
this},0);C.Ip._Init.call(this.LV={I:this},0);C.BW._Init.call(this.T2={I:this},0);
this.__proto__=C.AVI;var B;this.I8(A.aaR(A.acf.Settings));this.Hd.R(A.aaR(A.acf.
AsP));this.FE.As(A._GetAutoObject(A.Device.Device).AnimalType);this.OK.As(A._GetAutoObject(
A.Device.Device).OK);this.M$.H(AXt);this.M$.Aj(true);this.C9.H(As5);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KI));this.C9.Bg(true);this.C9.F0(1000);this.C9.EV(99000);
this.LV.H(As6);this.LV.Aj(true);this.LV.T(A.aaR(A.acf.A44));this.LV.F0(50);this.
LV.EV(2000);this.LV.AS2(A._GetAutoObject(A.acj.DV).AzO());this.T2.H(AcP);this.T2.
Aj(true);this.T2.T(A.aaR(A.acf.A7v));this.T2.F0(-1);this.T2.EV(1);this.JV(this.Y
,-1);this.JV(this.Ay,-1);this.J(this.M$,0);this.J(this.C9,0);this.J(this.LV,0);this.
J(this.T2,0);this.M$.AeT([B=this.M$,B.FQ]);this.M$.Gn([this,this.D_,this.GN]);this.
M$.Akz(A.aaL(A.ach.Edit));this.M$.LX([B=this.M$,B.AyQ]);this.M$.L0(A.aaL(A.ach.AnS
));this.M$.As([B=this.FE,B.B7,B.B8]);this.M$.CI(this.FE);this.M$.A99([B=this.FE,
B.ASI,B.A0h]);this.M$.A98([B=this.FE,B.ASH,B.A0g]);this.C9.Gn([this,this.D_,this.
GN]);this.C9.LX([B=this.M$,B.AyQ]);this.C9.L0(A.aaL(A.ach.AnS));this.C9.As([B=this.
FE,B.A8l,B.ASO]);this.LV.Gn([this,this.D_,this.GN]);this.LV.LX([B=this.M$,B.AyQ]
);this.LV.L0(A.aaL(A.ach.AnS));this.LV.As([B=this.FE,B.A8k,B.ASM]);this.LV.A_k([
this,this.Bj$]);this.T2.Gn([this,this.D_,this.GN]);this.T2.As([B=this.OK,B.B7,B.
B8]);this.T2.CI(this.OK);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;
this.FE._Done();this.OK._Done();this.M$._Done();this.C9._Done();this.LV._Done();
this.T2._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this
);this.FE._ReInit();this.OK._ReInit();this.M$._ReInit();this.C9._ReInit();this.LV.
_ReInit();this.T2._ReInit();this.I8(A.aaR(A.acf.Settings));this.Hd.R(A.aaR(A.acf.
AsP));this.C9.T(A.aaR(A.acf.KI));this.LV.T(A.aaR(A.acf.A44));this.T2.T(A.aaR(A.acf.
A7v));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.FE)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M$).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUB={YY:null,Init:
function(aArg){var B;A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Device),B.
ASp,B.AZ4],0);A.pe([this,this.AfC],this);},A3J:function(G){A._GetAutoObject(A.Device.
Device).A9(37,true,A.jV,0,[this,this.Bbs]);},A1z:function(G){var F;if(this.A8===
1){var BR=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DV).AzO();if(this.D7<this.
AlQ)this.D7=this.AlQ;if(this.DX!==BR){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.
D7));A.abo(this.JT,0);}}if(this.A8===2){var BR=this.DX;this.DX=this.DX-A._GetAutoObject(
A.acj.DV).AzO();if(this.DX<this.D7)this.DX=this.D7;if(this.DX!==BR){if(!!this.JS
)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.DJ(this);this.Am();
},A1_:function(G){var F;if(this.A8===1){var BR=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DV).AzO();if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BR){if(!!this.JT
)(F=this.JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A8===2){var BR=this.
DX;this.DX=this.DX+A._GetAutoObject(A.acj.DV).AzO();if(this.DX>this.AlL)this.DX=
this.AlL;if(this.DX!==BR){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.DX));A.abo(
this.JS,0);}}this.DJ(this);this.Am();},GE:function(G){this.PG.R(AHX+A._GetAutoObject(
A.Device.Converter).S2(this.D7,2,true));this.PF.R(AHX+A._GetAutoObject(A.Device.
Converter).S2(this.DX,2,true));this.Ss.R(A._GetAutoObject(A.acj.DV).Aax());this.
YY.R(this.Ss.String);},A3i:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(A.Device.Device).Asp(this
);},A13:function(Ato){if(Ato===1)return this.PG;else if(Ato===2)return this.PF;else
return null;},_Init:function(aArg){C.Acp._Init.call(this,aArg);A.acg.Text._Init.
call(this.YY={I:this},0);this.__proto__=C.AUB;this.T(A.aaR(A.acf.ACj));this.AlL=
2000;this.AlQ=20;this.Background.H(J0);this.V.H(BF);this.V.R(A.aaR(A.acf.ACj)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkM.H(AXu);this.AkN.H(AXv);this.Q3.H(AXw);
this.QA.H(AXx);this.PF.H(AXy);this.PG.H(AXz);this.Ss.H(AXA);this.YY.H(AXB);this.
YY.I7(false);this.YY.A6(0x12);this.YY.L(0xFF000000);this.JV(this.H2,-8);this.J(this.
YY,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YY.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acp;this.YY._Done();C.Acp.
_Done.call(this);},_ReInit:function(){C.Acp._ReInit.call(this);this.YY._ReInit();
this.T(A.aaR(A.acf.ACj));this.V.R(A.aaR(A.acf.ACj)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YY.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acp._Mark.call(this,D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABx={M:P5,A67:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A67();},_Init:function(
aArg){A.Graphics.Hv._Init.call(this,aArg);this.__proto__=C.ABx;},_className:"Application::AbstractPath"
};C.Aqf={DO:null,DY:null,Rg:null,AdP:null,PW:null,AdO:null,Aux:1,A4A:0,Bcl:false
,AzK:true,CP:function(){this.Bgw(this);},Init:function(aArg){var B;this.Bb(this.
AdP);A.zX([this,this.Bgw],[B=this.AdP,B.A8r,B.BaY],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdO.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BhO(this.Aux+this.A4A)));if(this.Aux===1)this.PW.R(A.aaR(A.acf.ANc));else this.
PW.R(A.aaR(A.acf.Bho));},CF:function(G){if(this.AzK)this.AzK=false;else if(this.
DO.Bcu()===false)A.pe([this,this.A2R],this);else if(this.DO.AzY())this.DO.Ac7();
A.zV([this,this.Af6],A._GetAutoObject(A.Device.Device).An,0);},E3:function(G){A.
z9([this,this.Af6],A._GetAutoObject(A.Device.Device).An,0);},A2R:function(G){this.
Bcl=true;A._GetAutoObject(C.A$).Fv();},Bgw:function(G){var B;var BcW=(C.Wh.isPrototypeOf(
B=this.AdP.AV)?B:null);if(!!BcW){var Ay5=A._NewObject(A.Device.ActionToString,0);
this.Rg.R(Ay5.Lt(BcW.Action));}},If:function(G){var Cx=(C.Wh.isPrototypeOf(G)?G:
null);if(!Cx)return;this.DO.Qh(Cx.Action);this.Blp(this.Aux+1);},BAq:function(G){
if(A._GetAutoObject(C.Ph).NU(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Blp:function(E){
if(this.Aux===E)return;this.Aux=E;this.Am();},Af6:function(G){if((this.Bcl===false
)&&(this.DO.Bcu()===false))A.pe([this,this.A2R],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);C.CH._Init.call(this.
Rg={I:this},0);C.ARt._Init.call(this.AdP={I:this},0);C.CH._Init.call(this.PW={I:
this},0);A.acg.Text._Init.call(this.AdO={I:this},0);this.__proto__=C.Aqf;this.Background.
L(A.jb.CS);this.N.H(Xc);this.N.Z(true);this.Dq(C.IG);this.DY.AZ(0x3F);this.DY.H(
E$);this.DY.L(A.jb.CK);this.Rg.H(AHY);this.Rg.L(A.jb.Text);this.AdP.H(AXC);this.
PW.H(Ayk);this.PW.R(A.aaR(A.acf.ANc));this.PW.L(A.jb.Text);this.AdO.H(AHZ);this.
AdO.R(AXD);this.AdO.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rg,0);this.J(this.
AdP,0);this.J(this.PW,0);this.J(this.AdO,0);this.N.CB=[this,this.A2R];this.N.Ck=[
this,this.BAq];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbC));this.Rg.S(
A.aaL(A.fl.EK));this.Rg.A2(A.aaL(A.fl.Af));this.Rg.Cu(A.aaL(A.fl.Ak));this.AdP.A3g=[
this,this.If];this.PW.S(A.aaL(A.fl.EK));this.PW.A2(A.aaL(A.fl.Af));this.PW.Cu(A.
aaL(A.fl.Ak));this.AdO.S(A.aaL(A.fl.Hr));this.DO=A._GetAutoObject(C.DO);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rg._Done();this.
AdP._Done();this.PW._Done();this.AdO._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rg._ReInit();this.AdP._ReInit();
this.PW._ReInit();this.AdO._ReInit();this.PW.R(A.aaR(A.acf.ANc));this.Rg.S(A.aaL(
A.fl.EK));this.Rg.A2(A.aaL(A.fl.Af));this.Rg.Cu(A.aaL(A.fl.Ak));this.PW.S(A.aaL(
A.fl.EK));this.PW.A2(A.aaL(A.fl.Af));this.PW.Cu(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DO)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdO)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARt={H_:null,A3g:null,Cr:null,Y:null,Ay:
null,A3Y:0,Init:function(aArg){A.zV([this,this.ABn],this.H_,0);A.zV([this,this.Bgt
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Auu],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABn],this);},Bb:function(E){var A2M=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A2M)A.abo([this,this.A8r,this.BaY],0);},DE:
function(G){var B;var Fc=0;var X=this.AV;switch(this.Cr.CO){case 6:Fc=2;break;case
7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;default:;}X=this.QD(X,Fc,0x415);
if((Fc===5)&&!X){var AK9=this.AV;while(!X){AK9=this.QD(AK9,2,0x415);if(!!AK9)X=this.
QD(AK9,Fc,0x415);else break;}}if(!!X)this.Bb(X);var GS=(C.Wh.isPrototypeOf(B=this.
AV)?B:null);if(!!GS)this.A3Y=(C.Wh.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A3Y=0;A.pe([this,this.MO],this);},A1r:function(ED){var EQ=A._GetAutoObject(C.DO).
BcC(ED,this.A3g);this.J(EQ,0);},Ao3:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===0x400))this.HN(AdK);
}},ABn:function(G){this.Ao3();var O;var CD=A._GetAutoObject(C.Ph).NP();for(O=0;O<
CD;O=O+1){var Aao=A._GetAutoObject(C.Ph).OD(O);this.A1r(Aao);}A.pe([this,this.Bgt
],this);A.pe([this,this.BpP],this);A.pe([this,this.Auu],this);},BpP:function(G){
var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400
)){var Aa=(C.Wh.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},Auu:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATt(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATt(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATt(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((
B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},Bgt:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Ph).NU(Aa.Action)&&A._GetAutoObject(C.
DO).A4z(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A3Y===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MO],this);},MO:function(G){var B;this.Y.Vt(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BN._Init.call(this.Cr={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARt;this.H(AXE);this.Cr.Filter=147;this.Y.AZ(0xB);this.Y.H(AXF);this.Y.JP(9);this.
Ay.AZ(0xA);this.Ay.H(AXG);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BO=[this,this.
DE];this.Cr.D0=[this,this.DE];this.Y.El=[this,this.Fe];this.H_=A._GetAutoObject(
C.Ph);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.H_)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3g)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fm={Ej:null,AL:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fm;this.N.Ar(false);this.Ej.H(BF);this.Ej.Ar(false
);this.AL.H(E$);this.AL.L(A.jb.Ad9);this.Text.H(BF);this.Text.R(AXH);this.Text.L(
0xFF000000);this.Ap.H(P5);this.Ap.L(A.jb.Text);this.J(this.Ej,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cs(A.aaL(A.ach.AbC));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Aw(A.aaL(A.ach.AC9));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ej._Done();this.AL._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ej._ReInit();this.AL._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.XM={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},IW:function(G){},Ai:function(Ae){C.BW.
Ai.call(this,Ae);var FN=A.jb.Ad9;var GQ=A.jb.CS;if(this.Hf){FN=A.jb.Text;GQ=A.jb.
Bm;}if(!this.LI){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else if(this.Qn){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);}this.Ht.L(A.
jb.CS);this.H2.L(A.jb.CS);},Hg:function(G){var B;var Gc=this.Dy.G0;var Cz=(C.CH.
isPrototypeOf(B=this.Dy.Ch)?B:null);if(!Cz)return;Cz.S(A.aaL(A.fl.Ak));Cz.A2(A.aaL(
A.fl.Bh));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FX(Gc));else Cz.R(Xa);Cz.H(A.
abK(Cz.M,[this.Dy.V_,(B=this.Dy.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.XM;this.Dy.AFe(170);this.Dy.NZ(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Aji={C8:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hh(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FN=A.jb.Ad9;var GQ=A.jb.CS;if(this.Hf){FN=A.jb.Text;
GQ=A.jb.Bm;}if(!this.LI){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else if(this.
Qn){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aji;this.C8.H(AXI);this.C8.Cv(1);this.J(this.C8,0);this.C8.Aw(A.aaL(A.ach.Ajr)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C8._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALV={Y:null,RH:null,Tq:null
,Tr:null,Ts:null,AdN:null,XL:null,Vn:null,Vo:null,AaT:null,Ay:null,Init:function(
aArg){this.Bb(this.RH);},DE:function(G){C.Fm.DE.call(this,G);this.MO(this);},IW:
function(G){this.BfM(this);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N
,0);this.Bx.CB=[this,this.BfM];this.Bx.Ck=null;this.Bx.Cl=null;this.Bx.CV(A.jV);
this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},AA2:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XL.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XL.Q))A._GetAutoObject(C.AutoActions).J(this.XL.Q);if(!!this.Vn.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vn.Q))A._GetAutoObject(C.AutoActions
).J(this.Vn.Q);if(!!this.Vo.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vo.
Q))A._GetAutoObject(C.AutoActions).J(this.Vo.Q);if(!!this.AaT.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaT.Q))A._GetAutoObject(C.AutoActions).J(this.AaT.Q
);A._GetAutoObject(C.AutoActions).Cq();},BfM:function(G){if(this.BzA()===true){this.
AA2();this.XA(this);}else A._GetAutoObject(A.Device.Device).A9(27,true,A.jV,0,null
);},BzA:function(){return(!!this.XL.C4(this.XL.Q)||!!this.Vn.C4(this.Vn.Q))||!!this.
Vo.C4(this.Vo.Q);},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.
Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MO:function(G){var B;this.
Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true
,null,null);},BAC:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XL.Atv(this);this.Vn.Atv(this);this.Vo.Atv(this);this.AaT.Atv(this);}
,_Init:function(aArg){C.Fm._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.XM._Init.call(this.RH={I:this},0);C.XM._Init.call(this.Tq={I:this},0);C.XM.
_Init.call(this.Tr={I:this},0);C.XM._Init.call(this.Ts={I:this},0);C.Au3._Init.call(
this.AdN={I:this},0);C.AutoAction._Init.call(this.XL={I:this},0);C.AutoAction._Init.
call(this.Vn={I:this},0);C.AutoAction._Init.call(this.Vo={I:this},0);C.AutoAction.
_Init.call(this.AaT={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALV;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.Tt));this.Y.H(Lu);this.Y.JP(1);this.
RH.H(AhX);this.RH.Ar(true);this.RH.Aj(true);this.RH.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajh),P6,AH0));this.Tq.H(UV);this.Tq.Ar(true);this.Tq.Aj(true
);this.Tq.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajh),P6,AH1));this.
Tr.H(Aaf);this.Tr.Ar(true);this.Tr.Aj(true);this.Tr.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajh),P6,AH2));this.Ts.H(Alh);this.Ts.Ar(true);this.Ts.Aj(
true);this.Ts.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajh),P6,AH3));this.
AdN.H(Ayl);this.AdN.Aj(true);this.AdN.T(A.aaR(A.acf.A_W));this.Vn.Index=1;this.Vo.
Index=2;this.AaT.Index=3;this.Ay.H(Ir);this.J(this.Y,0);this.J(this.RH,0);this.J(
this.Tq,0);this.J(this.Tr,0);this.J(this.Ts,0);this.J(this.AdN,0);this.J(this.Ay
,0);this.Y.El=[this,this.Fe];this.RH.Wy(A.aaL(A.fl.Hr));this.RH.Wz(A.aaL(A.fl.Hr
));this.RH.As([B=this.XL,B.B7,B.B8]);this.RH.CI(this.XL);this.Tq.Wy(A.aaL(A.fl.Hr
));this.Tq.Wz(A.aaL(A.fl.Hr));this.Tq.As([B=this.Vn,B.B7,B.B8]);this.Tq.CI(this.
Vn);this.Tr.Wy(A.aaL(A.fl.Hr));this.Tr.Wz(A.aaL(A.fl.Hr));this.Tr.As([B=this.Vo,
B.B7,B.B8]);this.Tr.CI(this.Vo);this.Ts.Wy(A.aaL(A.fl.Hr));this.Ts.Wz(A.aaL(A.fl.
Hr));this.Ts.As([B=this.AaT,B.B7,B.B8]);this.Ts.CI(this.AaT);this.AdN.AR=[this,this.
BAC];this.Init(aArg);},_Done:function(){this.__proto__=C.Fm;this.Y._Done();this.
RH._Done();this.Tq._Done();this.Tr._Done();this.Ts._Done();this.AdN._Done();this.
XL._Done();this.Vn._Done();this.Vo._Done();this.AaT._Done();this.Ay._Done();C.Fm.
_Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.Y._ReInit();this.
RH._ReInit();this.Tq._ReInit();this.Tr._ReInit();this.Ts._ReInit();this.AdN._ReInit(
);this.XL._ReInit();this.Vn._ReInit();this.Vo._ReInit();this.AaT._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.Tt));this.RH.T(A._GetAutoObject(A.Device.Helper
).Nk(A.aaR(A.acf.Ajh),P6,AH0));this.Tq.T(A._GetAutoObject(A.Device.Helper).Nk(A.
aaR(A.acf.Ajh),P6,AH1));this.Tr.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.
Ajh),P6,AH2));this.Ts.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajh),P6
,AH3));this.AdN.T(A.aaR(A.acf.A_W));},_Mark:function(D){var B;C.Fm._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ts)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={Cf:
A.abi(16,0,null),Do:function(){return 16;},C4:function(aIndex){if(aIndex>=16)return-
1;return this.Cf.Get(aIndex);},DU:function(A7){var O=0;while(O<16){if(this.Cf.Get(
O)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(O<16){
if(this.Cf.Get(O)>max)max=this.Cf.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.Cf=[]).__proto__=C.Cm.Cf;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={H_:null,Ac7:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.Atv],this.Ac7,0);A.pe([this,this.
Atv],this);},Do:function(){return this.H_.NP();},C4:function(aIndex){if(aIndex>=
this.Do())return-1;return this.H_.OD(aIndex);},FX:function(aIndex){return this.ActionToString.
BI(this.C4(aIndex));},DU:function(A7){var O=0;while(O<this.Do()){if(this.H_.OD(O
)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(O<this.
Do()){if(this.H_.OD(O)>max)max=this.H_.OD(O);O=O+1;}return max;},Atv:function(G){
this.Q=this.Ac7.OD(this.Index);A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.H_=A._GetAutoObject(C.AuN);this.Ac7=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.H_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AL0={Ats:0,Init:function(aArg
){var B;A.zX([this,this.Bef],[B=A._GetAutoObject(A.Device.Device),B.A79,B.BaJ],0
);A.zX([this,this.Bec],[B=A._GetAutoObject(A.Device.Device),B.ASb,B.AZY],0);A.pe([
this,this.Bef],this);A.pe([this,this.Bec],this);},Clear:function(){C.Vs.Clear.call(
this);this.Ats=0;},Cq:function(){A._GetAutoObject(A.Device.Device).ArA(this.Ats);
A._GetAutoObject(A.Device.Device).ArB(this.toString());},Bef:function(G){this.Ats=
A._GetAutoObject(A.Device.Device).Ph;A.we(this,0);},Bec:function(G){this.EM(A._GetAutoObject(
A.Device.Device).Auz);A.we(this,0);},NU:function(ED){if((this.Ats&(((B=ED)<0)?B+
0x100000000:B))===(((B=ED)<0)?B+0x100000000:B))return true;return false;},AUr:function(
ED){this.Ats=this.Ats|(((B=ED)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vs._Init.
call(this,aArg);this.__proto__=C.AL0;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Ph={_Init:function(){C.AL0._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AL1={Vq:null,Ay:null,Y:null,JM:null,CP:function(
){this.AiH(this);},Init:function(aArg){A.zV([this,this.AiH],this.Vq,0);A.pe([this
,this.AiH],this);},DE:function(G){C.Fm.DE.call(this,G);this.MO(this);},KR:function(
){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.Ev];this.Bx.Ck=[
this,this.A2Z];this.Bx.Cl=[this,this.A3s];this.Bx.C6(A.aaL(A.ach.Aq$));this.Bx.Cs(
A.aaL(A.ach.Aq4));this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},Ev:function(G){if(
this.Byq()>0){this.AA2();this.XA(this);}else A._GetAutoObject(A.Device.Device).A9(
28,true,A.jV,0,null);},AiH:function(G){this.Ao3();var O;for(O=0;O<this.Vq.NP();O=
O+1){var Aao=A._GetAutoObject(C.Ph).OD(O);this.A06(Aao);}this.J(this.JM,0);A.aaS([
this,this.MO],this);},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]
);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MO:function(G){var
B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.
AV,true,null,null);},A06:function(G6){var Ay5=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sa,0);Aa.T(Ay5.BI(G6));Aa.Aj(true);Aa.G0=G6;Aa.A9W(this.
Vq.NU(G6));this.J(Aa,0);this.ZD(Aa);},Ao3:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===0x400))this.HN(
AdK);}},AA2:function(){var B;this.Vq.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JM)){var Aa=(C.Sa.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vq.J(Aa.G0);if(Aa.ASn())this.Vq.AUr(Aa.G0);}else A.ab5(
"%s",Aym);}X=X.Ah;}this.Vq.Cq();},Byq:function(){var B;var A3Z=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JM)){var
Aa=(C.Sa.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASn())A3Z=A3Z+1;}else A.ab5("%s"
,Aym);}X=X.Ah;}return A3Z;},A2Z:function(G){var B;var Aa=(C.Sa.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAj=(C.Sa.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAj){this.
Ahw(AAj,Aa);A.pe([this,this.MO],this);}}},A3s:function(G){var B;var Aa=(C.Sa.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAP=(C.Sa.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAP
){this.Ahw(Aa,AAP);A.pe([this,this.MO],this);}}},AqI:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiH],this);},_Init:function(
aArg){C.Fm._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Au3._Init.call(this.JM={I:this},0);this.__proto__=C.AL1;
this.H(Rk);this.Text.R(A.aaR(A.acf.AD$));this.Ay.H(Ir);this.Y.H(Lu);this.Y.JP(1);
this.JM.H(AH4);this.JM.Aj(true);this.JM.T(A.aaR(A.acf.AqI));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JM,0);this.Y.El=[this,this.Fe];this.JM.AR=[this,this.AqI
];this.Vq=A._GetAutoObject(C.Ph);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fm;this.Ay._Done();this.Y._Done();this.JM._Done();C.Fm._Done.call(this);},_ReInit:
function(){C.Fm._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JM._ReInit(
);this.Text.R(A.aaR(A.acf.AD$));this.JM.T(A.aaR(A.acf.AqI));this.CP();},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.Vq)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sa={G0:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hh(10);},Bk:function(aSize){C.T9.Bk.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.T9.Ai.call(this,Ae);var G$=((Ae&0x10
)===0x10);var Fq=((Ae&0x20)===0x20);var GA=this.Bo.Bw;var FN=A.jb.Ad9;var GQ=A.jb.
Bm;if(this.Hf){FN=A.jb.Bm;GQ=A.jb.Text;}if(!G$){this.Background.L(FN);this.V.L(A.
jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);
}this.LI=G$;this.KE=Fq;this.Qn=GA;},IW:function(G){this.A3q(this);},A3q:function(
G){this.AEV(!this.AmB);},A9W:function(E){this.AEV(E);},ASn:function(){return this.
AmB;},_Init:function(aArg){C.T9._Init.call(this,aArg);this.__proto__=C.Sa;this.Mj.
H(AXJ);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vs={CD:0,
H_:A.abi(17,0,null),OD:function(Hw){return this.H_.Get(Hw);},NP:function(){return this.
CD;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.H_.Set(O,0);this.CD=0;},J:function(
ED){if(this.CD>=17)A.ab5("%s",AH5);else{this.H_.Set(this.CD,ED);this.CD=this.CD+
1;}},Cq:function(){},EM:function(AcU){var AJd=AcU.indexOf(String.fromCharCode(0x2C
),0);var A1s=A.jV;var O=0;this.CD=0;while(O<17)if(AcU===A.jV){this.H_.Set(O,0);O++;
}else{if(AJd===-1){A1s=AcU;AcU=A.jV;}else{A1s=A.abV(AcU,AJd);AcU=A.ab1(AcU,0,AJd+
1);}var Aao=A.abZ(A1s,0,10)|0;if(this.ADN(Aao)){this.H_.Set(this.CD,Aao);this.CD=
this.CD+1;O++;}AJd=AcU.indexOf(String.fromCharCode(0x2C),0);}if(AcU!==A.jV)A.ab5(
"%s",AXK);},toString:function(){var A2D=(((B=this.H_.Get(0))<0)?B+0x100000000:B).
toFixed();var O;for(O=1;O<this.CD;O=O+1)A2D=(A2D+AH6)+(((B=this.H_.Get(O))<0)?B+
0x100000000:B).toFixed();return A2D;},Axs:function(Hw,ED){if(Hw>=this.CD){A.ab5(
"%s",((((AXL+Hw.toFixed())+AXM)+this.CD.toFixed())+AXN)+AXO);return;}this.H_.Set(
Hw,ED);},Contains:function(ED){var O;for(O=0;O<this.CD;O=O+1)if(this.H_.Get(O)===
ED)return true;return false;},ADN:function(ED){return true;},DU:function(ED){var
O;for(O=0;O<this.CD;O=O+1)if(this.H_.Get(O)===ED)return O;return-1;},_Init:function(
aArg){(this.H_=[]).__proto__=C.Vs.H_;this.__proto__=C.Vs;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ActionsList"};C.AMI={Init:function(aArg){var B;A.zX([this,this.Bep
],[B=A._GetAutoObject(A.Device.Device),B.A8j,B.BaS],0);A.pe([this,this.Bep],this
);},Cq:function(){A._GetAutoObject(A.Device.Device).Aku(this.toString());},ADN:function(
ED){switch(ED){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Bep:function(G){this.EM(A._GetAutoObject(A.Device.Device).
AutoActions);A.we(this,0);},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.
__proto__=C.AMI;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AMI._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Wh={Vp:null,Kt:null,A66:A.jV,Action:0,A4B:
false,A_I:false,A$o:false,Bk:function(aSize){C.Fi.Bk.call(this,aSize);this.QX.H(
this.Mn.M);this.OC.H(this.QX.M);},Ai:function(Ae){C.Fi.Ai.call(this,Ae);if(!this.
LI){this.Kt.TU.L(A.jb.Am4);this.Kt.QF.Z(true);this.Kt.QF.L(A.jb.AQR);}else if(this.
Qn){this.Kt.TU.L(A.jb.Bm);this.Kt.QF.Z(false);}else if(this.KE){this.Kt.TU.L(A.jb.
Bm);this.Kt.QF.Z(false);}else{this.Kt.TU.L(A.jb.Text);this.Kt.QF.Z(true);this.Kt.
QF.L(A.jb.CS);}},Blo:function(E){if(this.Action===E)return;this.Action=E;},Bmw:function(
E){if(this.A66===E)return;this.A66=E;this.Vp.Text.R(E);},ATt:function(E){if(this.
A$o===E)return;this.A$o=E;this.Kt.Bnh(!this.Kt.AUQ);},AFv:function(E){if(this.A_I===
E)return;this.A_I=E;this.Kt.Z(!this.Kt.Fk());},A9n:function(E){if(this.A4B===E)return;
this.A4B=E;this.Vp.Z(E);},_Init:function(aArg){C.Fi._Init.call(this,aArg);C.Vp._Init.
call(this.Vp={I:this},0);C.Kt._Init.call(this.Kt={I:this},0);this.__proto__=C.Wh;
this.H(AXP);this.Background.H(AXQ);this.G4.Ar(false);this.G4.Z(false);this.Vp.H(
AXR);this.Vp.Z(false);this.Kt.H(AXS);this.Kt.Z(false);this.J(this.Vp,0);this.J(this.
Kt,0);this.Mn.Aw(A.aaL(A.ach.ANd));},_Done:function(){this.__proto__=C.Fi;this.Vp.
_Done();this.Kt._Done();C.Fi._Done.call(this);},_ReInit:function(){C.Fi._ReInit.
call(this);this.Vp._ReInit();this.Kt._ReInit();},_Mark:function(D){var B;C.Fi._Mark.
call(this,D);if((B=this.Vp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kt)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.Vp={AL:
null,Text:null,BU:null,Init:function(aArg){this.Text.H(this.M);this.BU.H(this.M);
this.AL.H(this.M);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL.
_Init.call(this.AL={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);this.__proto__=C.Vp;this.AL.H(AXT);this.AL.L(A.
jb.Bi8);this.H(AXU);this.Text.H(AXV);this.Text.L(A.jb.Text);this.BU.H(AXW);this.
BU.Nh(1);this.BU.L(A.jb.Text);this.J(this.AL,0);this.J(this.Text,0);this.J(this.
BU,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AL._Done();this.Text._Done();this.BU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AL._ReInit();this.Text._ReInit(
);this.BU._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Kt={QF:null,TU:null,AUQ:false,Bnh:function(E){if(this.
AUQ===E)return;this.AUQ=E;if(E){this.TU.Aw(A.aaL(A.ach.ACr));this.QF.Aw(A.aaL(A.
ach.ACr));}else{this.TU.Aw(A.aaL(A.ach.AqC));this.QF.Aw(A.aaL(A.ach.AqC));}},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.QF={I:this
},0);A.acg.Ap._Init.call(this.TU={I:this},0);this.__proto__=C.Kt;this.H(Ayn);this.
QF.H(Ayn);this.QF.Cv(1);this.TU.H(Ayn);this.TU.Cv(0);this.J(this.QF,0);this.J(this.
TU,0);this.QF.Aw(A.aaL(A.ach.AqC));this.TU.Aw(A.aaL(A.ach.AqC));},_Done:function(
){this.__proto__=A.Core.P;this.QF._Done();this.TU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.QF._ReInit();this.TU._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.QF)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.ARR={Gb:null,Cb:null,Dk:null,Dh:null,Ko:null,Zl:10,Aq1:0,AEj:0,AR5:0,Ay4:false
,LU:false,Bct:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).An.Lh())A._GetAutoObject(A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.
Device).An.HG().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gm();A._GetAutoObject(
A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAx],this.
C$.Q,0);A.zX([this,this.BAn],this.Dk.Q,0);A.zX([this,this.ABl],this.Dh.Q,0);A.zX([
this,this.ABl],this.Dh.HC.Q,0);A.zX([this,this.ABl],[this,this.ASu,this.AFt],0);
A.zX([this,this.GE],[B=A._GetAutoObject(A.Device.Device),B.A9f,B.Bbi],0);A.zX([this
,this.BeZ],this.Cb.Q,0);A.pe([this,this.AAx],this);A.pe([this,this.GE],this);A.pe([
this,this.ABl],this);A.pe([this,this.BeZ],this);},CF:function(G){if(!this.Ay4){this.
Ay4=true;A.pe([this,this.AcR],this);}else C.HY.CF.call(this,G);},Af$:function(G){
this.AR5=this.Zl;this.BcB(this);},Ev:function(G){A._GetAutoObject(A.Device.Helper
).W.Hi();A._GetAutoObject(C.A$).Fv();},Aug:function(){this.N.CV(A.jV);this.N.C6(
A.aaL(A.ach.ADx));this.N.Cl=[this,this.AyP];},AAs:function(G){A._GetAutoObject(C.
A$).Cg(55);},AFt:function(E){if(this.Zl===E)return;this.Zl=E;A.abo([this,this.ASu
,this.AFt],0);},BcB:function(G){var F;if(!this.Zl||(this.Bct===true)){A._GetAutoObject(
A.Device.Device).A9(24,false,CQ,0,null);if(this.AEj===1)A._GetAutoObject(A.Device.
Device).A9(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A9(23,
true,this.AEj.toFixed(),2000,null);this.Ev(this);return;}this.Gb.Gm();this.Gb.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gb.NY(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gb.Q0(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gb.JQ(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gb.Ne(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gb.Q2(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gb.SA(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alq=A._GetAutoObject(
A.Device.Helper).A1m(this.Gb,(F=this.Dh.HZ.Hp,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alq)this.AiZ();else{A._GetAutoObject(A.Device.Helper).AKf(
this.Gb,Alq,(F=this.Dh.HZ.Hp,F[1].call(F[0])),this.Zl-1,[this,this.ApG]);A._GetAutoObject(
A.Device.Device).A9(24,false,CQ,0,null);}},GE:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am6())this.C9.Z(true);else this.C9.Z(false);if(this.LU){this.Dk.
Z(false);this.Cb.T(A.aaR(A.acf.ACy));this.Cb.AEX(A.aaL(A.ach.Afa));}else{this.Dk.
Z(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.AEX(null);}if((this.Y.BiG(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JD(this.Y.TL(this.AV,0x1));this.Am();
},ASZ:function(E){if(this.Aq1===E)return;this.Aq1=E;A.abo([this,this.A8v,this.ASZ
],0);},ABl:function(G){var F;var AJ2=(F=this.Dh.Q,F[1].call(F[0]));var AAa=-1;switch((
F=this.Dh.HZ.Hp,F[1].call(F[0]))){case 0:AAa=AJ2+((F=A._GetAutoObject(A.Device.Helper
).Bc9(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zl-1));break;case 1:AAa=(AJ2+this.
Zl)-1;break;case 3:case 2:case 5:case 4:switch(this.Dh.HC.AC.Q){case 0:AAa=(AJ2+
this.Zl)-1;break;case 1:AAa=(AJ2-this.Zl)+1;break;default:throw new Error(AXX+this.
Dh.HC.AC.Q.toFixed());}break;default:throw new Error(AXY+this.Dh.HC.AC.Q.toFixed(
));}this.ASZ(AAa);},BAn:function(G){A.pe([this,this.GE],this);A.pe([this,this.At1
],this);},AAx:function(G){A._GetAutoObject(A.Device.Helper).AVm(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LU);A.pe([this,this.ABl],this);},ApG:function(G){var F;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case 22:case 21:case 48:if((
At.Id===48)&&(At.PopupState===7))this.ApA();else switch((F=this.Dh.HZ.Hp,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JD(this.Dh);break;case 0:this.JD(this.Dk
);break;case 1:this.JD(this.Cb);break;default:throw new Error(Ayo+(F=this.Dh.HZ.
Hp,F[1].call(F[0])).toFixed());}break;case 25:this.JD(this.Cb);break;case 47:if(
At.PopupState===7)this.ApA();else{this.JD(this.Dh);this.JD(this.Cb);}break;case 43:{
this.JD(this.Dh);this.JD(this.Dk);}break;case 42:{this.JD(this.Dh);this.JD(this.
Cb);}break;case 41:break;default:A.ab5("%s%e",As7,At.Id);}},AiZ:function(){this.
Gb.Cq(A._GetAutoObject(A.Device.Device).An);this.AEj=this.AEj+1;if(A._GetAutoObject(
A.Device.Helper).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lh()){A._GetAutoObject(
A.Device.Device).A9(24,false,UW,0,null);A._GetAutoObject(A.Device.Device).A9(50,
true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),0,null);}else{var L6=A.
_GetAutoObject(A.Device.Device).An.Lc(0,this.Gb.Id);A._GetAutoObject(A.Device.Device
).SJ(L6);var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(this.Gb.
Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(this.Gb.DateOfBirth);B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApA();},ApA:function(){var B;var F,CA;if(!!(F=this.Cb.
Q,F[1].call(F[0]))){(F=this.Cb.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LU)(
CA=this.Dk.Q,CA[2].call(CA[0],(F=this.Cb.Q,F[1].call(F[0]))));}if(!this.LU)(CA=this.
Dk.Q,CA[2].call(CA[0],A._GetAutoObject(A.Device.Helper).A$E(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dk.Q,F[1].call(
F[0])),this.Dk.AjN(),this.Dk.AjP())));var IT=null;switch((F=this.Dh.HZ.Hp,F[1].call(
F[0]))){case 3:IT=[B=A._GetAutoObject(A.Device.Device),B.Awb,B.AyG];break;case 2:
IT=[B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyH];break;case 4:case 5:IT=[B=A.
_GetAutoObject(A.Device.Device),B.Ant,B.AoB];break;default:;}if(!!IT){switch((F=
this.Dh.Kj.VN,F[1].call(F[0]))){case 1:IT[2].call(IT[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dh.Q,F[2].call(F[0],IT[1].call(IT[0])));
}var XH=100-((this.Zl/this.AR5)*100);A._GetAutoObject(A.Device.Device).A9(24,true
,(((this.AR5.toFixed()+As8)+(XH|0).toFixed())+As8)+(F=this.Dh.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BAx]);this.AFt(this.Zl-1);A.aaS([this,this.BcB],null);},BAx:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===5))this.Bct=true;},ApH:function(G){var F;C.HY.ApH.call(this,G);var AoW=
0;switch((F=this.BZ.Q,F[1].call(F[0]))){case 0:case 2:AoW=A._GetAutoObject(A.Device.
Device).AdQ;break;case 1:AoW=730;break;default:A.ab5("%s%e",Ale,(F=this.BZ.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q0(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmH(AoW));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnZ));switch(this.BZ.AC.Q){case 0:{this.Ko.I9(A.aaR(A.acf.AM_));this.
Ko.IM(A.aaR(A.acf.AM$));}break;case 1:{this.Ko.I9(A.aaR(A.acf.Bhy));this.Ko.IM(A.
aaR(A.acf.Bhz));}break;case 2:{this.Ko.I9(A.aaR(A.acf.Bju));this.Ko.IM(A.aaR(A.acf.
Bjv));}break;default:throw new Error(Ale);}},Ae1:function(E){if(this.LU===E)return;
this.LU=E;A.abo([this,this.Awe,this.Ae1],0);},At1:function(G){var F,CA,S7;this.Ae1(((
F=this.Cb.Q,F[1].call(F[0]))===(CA=this.Dk.Q,CA[1].call(CA[0])))&&!!(S7=this.Cb.
Q,S7[1].call(S7[0])));A.pe([this,this.GE],this);},BeZ:function(G){A.pe([this,this.
At1],this);},ASu:function(){return this.Zl;},A8v:function(){return this.Aq1;},Awe:
function(){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.AvY.
_Init.call(this.Cb={I:this},0);C.Q9._Init.call(this.Dk={I:this},0);C.AGB._Init.call(
this.Dh={I:this},0);C.AUD._Init.call(this.Ko={I:this},0);this.__proto__=C.ARR;var
B;this.Dq(C.AC$);this.Cb.H(Aoq);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak4));this.
Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.
aaR(A.acf.Akm));this.Dk.H(AXZ);this.Dk.Aj(true);this.Dk.T(A.aaR(A.acf.Ud));this.
Dk.Ar0(false);this.Dh.H(AX0);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.A6T));this.Dh.
By(0);this.Ko.H(AX1);this.Ko.Aj(true);this.Ko.T(A.aaR(A.acf.A70));this.Ko.F0(1);
this.Ko.EV(500);this.Ko.IM(A.aaR(A.acf.AM$));this.Ko.I9(A.aaR(A.acf.AM_));this.Ko.
A9N(A.aaR(A.acf.Aq1)+A.aaR(A.acf.Colon));this.J(this.Cb,0);this.J(this.Dk,0);this.
J(this.Dh,0);this.J(this.Ko,0);this.Gb=A._NewObject(A.Device.Animal,0);this.Cb.AR=[
this,this.AcR];this.Cb.LX([this,this.AcR]);this.Cb.L0(A.aaL(A.ach.Afa));this.Cb.
As([B=A._GetAutoObject(A.Device.Helper).W,B.Arx,B.Q2]);this.Cb.OM([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UY]);this.Cb.PN([B=A._GetAutoObject(A.Device.Device),B.Ug
,B.UZ]);this.Cb.Uh([B=A._GetAutoObject(A.Device.Device),B.Anq,B.AoA]);this.Cb.Ae1([
this,this.Awe,this.Ae1]);this.Dk.Gn([this,this.D_,this.GN]);this.Dk.LX([this,this.
AcR]);this.Dk.L0(A.aaL(A.ach.Afa));this.Dk.Uj([B=this.Gender.Animal,B.Wt,B.JQ]);
this.Dk.OM([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Dk.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.UZ]);this.Dk.Uh([B=A._GetAutoObject(A.Device.Device),B.Anq
,B.AoA]);this.Dk.As([B=A._GetAutoObject(A.Device.Helper).W,B.Anu,B.Ne]);this.Dk.
Anx([B=this.AnimalType.Animal,B.PM,B.EB]);this.Dh.Gn([this,this.D_,this.GN]);this.
Dh.LX([B=this.Dh,B.FQ]);this.Dh.L0(A.aaL(A.ach.Edit));this.Dh.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Ary,B.SA]);this.Dh.A9o(A._GetAutoObject(A.Device.Helper).W);
this.Ko.As([this,this.ASu,this.AFt]);this.Ko.BlU([this,this.A8v,this.ASZ]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HY;this.Cb._Done();this.Dk._Done(
);this.Dh._Done();this.Ko._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY.
_ReInit.call(this);this.Cb._ReInit();this.Dk._ReInit();this.Dh._ReInit();this.Ko.
_ReInit();this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akm));this.Dk.T(A.aaR(A.acf.
Ud));this.Dh.T(A.aaR(A.acf.A6T));this.Ko.T(A.aaR(A.acf.A70));this.Ko.IM(A.aaR(A.
acf.AM$));this.Ko.I9(A.aaR(A.acf.AM_));this.Ko.A9N(A.aaR(A.acf.Aq1)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.Gb)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AT7={BW:null,RatingMode:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.Cl=null;this.Bx.Ck=null;this.Bx.CB=[this,this.XA];this.Bx.CV(A.jV
);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AT7;var B;this.
H(Rk);this.BW.H(As5);this.BW.T(A.aaR(A.acf.A$w));this.J(this.BW,0);this.BW.As([B=
this.RatingMode,B.B7,B.B8]);this.BW.CI(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.A$w));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bfz],[B=A._GetAutoObject(A.Device.Device),B.ASy,B.AZ_],0);A.pe([this,this.Bfz],this
);},Do:function(){return 2;},FX:function(aIndex){return this.RatingModeToString.
BI(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw0(E);},Bfz:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cf.Set(0,0);this.Cf.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANs={WM:
function(G){C.Amr.WM.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqX()){
A._GetAutoObject(A.Device.Helper).W.AkB(false);A._GetAutoObject(A.Device.Helper).
W.Cq(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amr._Init.call(
this,aArg);this.__proto__=C.ANs;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hc={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hc;},_className:"Application::BaseItem"
};C.AVB={BW:null,WeightRecordingMode:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.Cl=null;this.Bx.Ck=null;this.Bx.CB=[this,this.XA];this.Bx.CV(A.jV
);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVB;var B;this.H(Rk);this.BW.H(As5);this.BW.T(A.aaR(A.acf.AsP));this.BW.EV(1);
this.J(this.BW,0);this.BW.As([B=this.WeightRecordingMode,B.B7,B.B8]);this.BW.CI(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BW.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit();this.WeightRecordingMode.
_ReInit();this.BW.T(A.aaR(A.acf.AsP));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Do:function(){return 2;},FX:function(aIndex){return this.
WeightRecordingModeToString.BI(this.C4(aIndex));},As:function(E){C.Cm.As.call(this
,E);A._GetAutoObject(A.Device.Device).Axa(E);},Init:function(aArg){var B;A.zX([this
,this.BgF],[B=A._GetAutoObject(A.Device.Device),B.A9e,B.Bbh],0);A.pe([this,this.
BgF],this);},BgF:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cf.Set(0,0);this.Cf.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightRecordingModeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa2={BooleanToAutoOnOff:null,FX:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BI(aIndex);},_Init:function(aArg){C.Ga._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa2;},_Done:function(
){this.__proto__=C.Ga;this.BooleanToAutoOnOff._Done();C.Ga._Done.call(this);},_ReInit:
function(){C.Ga._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Ga._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxO={A67:function(){var B;this.
Axt(1);this.Jq(0,3);this.VB(0,0,(B=this.M)[3]-B[1]);this.A4F(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4F(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VJ(0);},_Init:
function(aArg){C.ABx._Init.call(this,aArg);this.__proto__=C.AxO;},_className:"Application::Triangle"
};C.ATH={Y:null,Init:function(aArg){this.BxN(this);},BxM:function(P8){var Aa=A._NewObject(
C.ANz,0);Aa.H(BF);Aa.T(P8);Aa.Aj(true);Aa.Ar(false);Aa.Bg(true);this.J(Aa,0);this.
Atu(this);},Atu:function(G){var B;var Aly=1;var A2v=0;var X=this.Y.Ah;var Cx=null;
var K5=null;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OV.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cx){var ALa=(B=Cx.V.B6.A6K(Cx.V.String,0,-1))[2]-B[0
];if(!!(C.Ml.isPrototypeOf(X)?X:null))ALa=ALa+20;if(A2v<ALa)A2v=ALa;Cx.H(A.abL(Cx.
M,120));Cx.H(A.abI(Cx.M,28));Cx.H(A.abM(Cx.M,this.M[0]));Cx.H(A.abO(Cx.M,((B=this.
M)[3]-B[1])-(Aly*28)));Aly=Aly+1;}else{K5=(A.acg.C5.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K5){var Dg=((B=this.M)[3]-B[1])-((Aly-1)*28);K5.DL([this.
M[0],K5.Er[1]]);K5.DL([K5.Er[0],Dg]);K5.DC([this.M[0]+120,K5.EC[1]]);K5.DC([K5.EC[
0],Dg]);}}X=X.Ah;}this.BBe(A2v,28);},BBe:function(aWidth,BwV){var B;var X=this.Y.
Ah;var Cx=null;var K5=null;aWidth=aWidth+20;if(aWidth>(C.Ast[0]-10))aWidth=C.Ast[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OV.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cx){Cx.V.Text.A6(0x14);Cx.V.Text.Hh(10);Cx.H(A.abL(Cx.M,aWidth
));Cx.H(A.abI(Cx.M,BwV));Cx.H(A.abM(Cx.M,this.M[2]-((B=Cx.M)[2]-B[0])));}else{K5=(
A.acg.C5.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K5){K5.DL([this.M[
2]-aWidth,K5.Er[1]]);K5.DC([this.M[2],K5.EC[1]]);}}X=X.Ah;}},BxN:function(G){var
Aa=A._GetAutoObject(C.BH).AqM;while(!!Aa){if(!!(C.Axh.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axh.isPrototypeOf(Aa)?Aa:null);this.BxL(EF.DK,EF.AR,EF.Bw,EF.AQZ);}else
if(!!(C.Axj.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axj.isPrototypeOf(Aa)?Aa:null);
this.BxS(EF.DK,EF.AR,EF.Bw,EF.Ws,EF.WO);}else if(!!(C.Zy.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.Zy.isPrototypeOf(Aa)?Aa:null);this.BxK(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkH.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkH.isPrototypeOf(Aa)?Aa:null);this.
BxM(EF.DK);}else if(!!(C.AF3.isPrototypeOf(Aa)?Aa:null))this.BxT();Aa=Aa.Ms;}A._GetAutoObject(
C.BH).Clear();A.pe([this,this.Atu],this);},BxK:function(P8,Ac0,Ah3){var Aa=A._NewObject(
C.Ml,0);Aa.H(BF);Aa.T(P8);Aa.AR=Ac0;Aa.Aj(true);Aa.Ar(Ah3);Aa.Bg(true);this.J(Aa
,0);this.Atu(this);},BxT:function(){var K5=A._NewObject(A.acg.C5,0);K5.L(A.jb.Bm
);K5.Aj(true);K5.Nh(3);this.J(K5,0);this.Atu(this);},BxL:function(P8,Ac0,Ah3,A0H
){var Aa=A._NewObject(C.AmF,0);Aa.H(BF);Aa.T(P8);Aa.AR=Ac0;Aa.Aj(true);Aa.Ar(Ah3
);Aa.Bg(true);Aa.As(A0H);this.J(Aa,0);this.Atu(this);},BxS:function(P8,Ac0,Ah3,A2L
,Agi){var Aa=A._NewObject(C.ANy,0);Aa.H(BF);Aa.T(P8);Aa.AR=Ac0;Aa.Aj(true);Aa.Ar(
Ah3);Aa.Bg(true);Aa.BmU(A2L);Aa.AFH(Agi);this.J(Aa,0);this.Atu(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.ATH;this.H(Rk);this.Y.H(Rk);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Aff={_Init:
function(){A.acl.Aff._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_E={AqM:null,Ahd:null,MZ:function(P8){var EF=A._NewObject(
C.AkH,0);EF.DK=P8;this.J(EF);},Clear:function(){this.AqM=null;this.Ahd=null;},Ft:
function(){var K5=A._NewObject(C.AF3,0);this.J(K5);},J:function(BbV){if(!this.AqM
){this.AqM=BbV;this.Ahd=this.AqM;}else{this.Ahd.Ms=BbV;this.Ahd=this.Ahd.Ms;}},Qw:
function(P8,Ac0){var EF=A._NewObject(C.Zy,0);EF.DK=P8;EF.AR=Ac0;this.J(EF);},BgO:
function(P8,Ac0,A0H){var EF=A._NewObject(C.Axh,0);EF.DK=P8;EF.AR=Ac0;EF.AQZ=A0H;
this.J(EF);},XN:function(P8){var EF=A._NewObject(C.Zy,0);EF.DK=P8;EF.Bw=false;this.
J(EF);},AuA:function(P8,Ac0,A2L,Agi){var EF=A._NewObject(C.Axj,0);EF.DK=P8;EF.AR=
Ac0;EF.Ws=A2L;EF.WO=Agi;this.J(EF);},_Init:function(aArg){this.__proto__=C.A_E;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BH={_Init:function(){C.A_E._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axi={Ms:null,_Init:function(aArg){this.__proto__=
C.Axi;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOx={Amp:null,ArC:function(E){if(this.Amp===
E)return;if(!!this.Ab)this.Ab.ZD(this);if(!!this.Amp)this.AqE(this.Amp,A._GetAutoObject(
C.Asx),null,null,null,null,false);this.Amp=E;if(!!this.Amp)this.AkL(this.Amp,A._GetAutoObject(
C.Asx),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOx;this.H(BF);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amp)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WD={_Init:function(){C.AOx._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N0={Init:function(aArg){var C1=A._NewObject(C.ATI,0);C1.H(this.M);this.AkL(C1,A.
_GetAutoObject(C.AnW),null,A._GetAutoObject(C.AnW),A._GetAutoObject(C.AnW),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N0;this.H(Rk);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Asx={_Init:function(){C.AUF._Init.call(this,0);this.ACw=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATI={AL:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.ATI;this.H(AH7);this.Dr(0);this.AL.AZ(0x3F);this.AL.H(AH7);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.P;this.AL.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUE={R8:function(){var B;var Ao=(A.acl.Ae9.isPrototypeOf(B=A.acl.Aej.R8.call(this
))?B:null);if(!Ao)throw new Error(As2);Ao.Cp.Cw=255;Ao.Cp.B2=0;return Ao;},R7:function(
){var B;var Ao=(A.acl.Axg.isPrototypeOf(B=A.acl.Aej.R7.call(this))?B:null);if(!Ao
)throw new Error(As2);Ao.E0.Cw=0;Ao.E0.B2=255;Ao.Du=true;return Ao;},_Init:function(
aArg){A.acl.Aej._Init.call(this,aArg);this.__proto__=C.AUE;},_className:"Application::ShadeOverlayTransition"
};C.AnW={_Init:function(){C.AUE._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkT={AnZ:0,A1T:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Ip.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BCo=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).Ak9(BCo)+CQ)+A._GetAutoObject(A.acj.DV).AfZ()
);else this.BT.R(A.aaR(A.acf.Akm));}},J$:function(G){var B;var BgC=(this.A1T===false
)&&(this.AM<=this.Gl);if(BgC)this.By(this.AnZ);this.A4j(this.AM,4);if(BgC){this.
By(this.AM-this.Aj4);this.A1T=true;}C.Ip.J$.call(this,G);},J6:function(G){this.A4j(
this.AM,5);C.Ip.J6.call(this,G);},By:function(E){this.A4j(E,4);E=(((E+((this.Aj4
/2)|0))/this.Aj4)|0)*this.Aj4;if(!E)this.A1T=false;C.Ip.By.call(this,E);},Ahm:function(
E){if(this.AnZ===E)return;this.AnZ=E;},A4j:function(BwD,Gw){this.AS2(A._GetAutoObject(
A.acj.DV).Bdb(BwD,Gw));},_Init:function(aArg){C.Ip._Init.call(this,aArg);this.__proto__=
C.AkT;this.H(J0);this.AnZ=this.Gl;this.JV(this.H2,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BDM={None:0,Left:1,BEo:2,Right:3};C.Amu={Ac8:
null,Fy:null,Ej:null,Background:null,Ani:null,F$:null,KM:A.jV,AD3:null,Init:function(
aArg){var B;A.zV([this,this.Af6],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A3t],[B=A._GetAutoObject(A.Device.Device).An,B.Fj,B.Fn],0);A.pe([this,this.
LO],this);A.pe([this,this.A3t],this);this.Bb(this.Ej);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},KR:function(){if(!this.Bx)this.Bx=A._NewObject(
C.N,0);return this.Bx;},E3:function(G){C.OverlayMenu.E3.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bl(this.Ac8);},CF:function(G){C.OverlayMenu.CF.call(this,G);
this.AKM();},Al0:function(G){var Aa=(C.AB3.isPrototypeOf(G)?G:null);var Hn;if(!!
Aa)Hn=Aa.Hn;else Hn=this.F$.FH();if(Hn>=A._GetAutoObject(A.Device.Device).An.Ca(
))return;A._GetAutoObject(A.Device.Helper).HL(Hn);A.pe([this,this.XA],this);},AKM:
function(){},Af6:function(G){this.Am();},A3k:function(G){if(this.F$.FH()<(A._GetAutoObject(
A.Device.Device).An.Ca()-1))this.F$.G2(this.F$.FH()+1);},A3l:function(G){if(this.
F$.FH()>0)this.F$.G2(this.F$.FH()-1);},DJ:function(G){var Gd=A._GetAutoObject(A.
Device.Device).An.Ca();var MR=this.Bx;if(!MR)return;MR.CY(A.aaL(A.ach.Aew));MR.CB=[
this,this.XA];if(Gd<=0){MR.Cs(null);MR.C6(null);MR.Ck=null;MR.Cl=null;MR.ZB=false;
MR.ZC=false;}else if(Gd===1){MR.Cs(null);MR.C6(A.aaL(A.ach.Aex));MR.Ck=null;MR.Cl=[
this,this.Al0];MR.ZB=false;MR.ZC=false;}else{MR.Cs(A.aaL(A.ach.Aq4));MR.C6(A.aaL(
A.ach.Aq$));MR.Ck=[this,this.A3k];MR.Cl=[this,this.A3l];MR.ZB=true;MR.ZC=true;}}
,LO:function(G){this.BfZ(this);this.Ac8=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKM();},BmM:function(E){if(this.AD3===E)return;this.AD3=E;A.pe([this,this.BAk
],this);},BAk:function(G){this.BfZ(this);},BfZ:function(G){var B;if(!!this.Fy)this.
HN(this.Fy);this.Fy=(C.EA.isPrototypeOf(B=A._NewObject(this.AD3,0))?B:null);if(!
!this.Fy){this.Fy.H(AX2);this.J(this.Fy,0);}},A3t:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DQ(1,4
))this.F$.Dz(A.aaR(A.acf.ARZ));else this.F$.Dz(this.KM);},Dz:function(E){if(this.
KM===E)return;this.KM=E;A.pe([this,this.A3t],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Ani={I:this},0);C.F$._Init.call(
this.F$={I:this},0);this.__proto__=C.Amu;this.H(Rk);this.Ej.H(BF);this.Ej.A9Q(A.
jb.CS);this.Ej.A9R(A.jb.Text);this.Background.H(E$);this.Background.L(A.jb.Boi);
this.Ani.H(AH8);this.Ani.L(A.jb.CS);this.F$.H(AH8);this.F$.NZ(C.AB3);this.AD3=C.
APC;this.KM=A.aaR(A.acf.Av2);this.J(this.Ej,0);this.J(this.Background,0);this.J(
this.Ani,0);this.J(this.F$,0);this.Ej.AR=[this,this.Al0];this.Ej.Ab4(A._NewObject(
C.Yu,0));this.F$.Zr(A._GetAutoObject(A.Device.Device).An);this.F$.Zt([this,this.
Al0]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ej._Done(
);this.Background._Done();this.Ani._Done();this.F$._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ej._ReInit();this.
Background._ReInit();this.Ani._ReInit();this.F$._ReInit();this.Dz(A.aaR(A.acf.Av2
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ac8)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Ani)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F$
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};
C.AB3={AP:null,DS:null,Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(A.abN(
this.V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.DS.De(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){this.T(this.AX.CE(Ad,1).toFixed());this.DS.EB(
this.AX.AmU(Ad,14));this.DS.AEZ(this.AX.I2(Ad,13));this.DS.Ae0(this.AX.H1(Ad,8));
this.DS.Ul(this.AX.H1(Ad,11));this.DS.Ae3(this.AX.H1(Ad,12));this.DS.Ae5(this.AX.
CE(Ad,5));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL.
_Init.call(this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=
C.AB3;this.H(O3);this.AP.L(A.jb.Bc);this.DS.H(AX3);this.J(this.AP,0);this.J(this.
DS,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.
DS._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.
AP._ReInit();this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::CalfListSmallItem"};C.Yu={Q:null,Init:function(
aArg){var B;this.AAX(this);this.As([B=A._GetAutoObject(A.Device.Device).An,B.Fj,
B.Fn]);},AEF:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&
!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DQ(1,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
N3(FilterCriterion);var Ai3=this.Akp();if(Ai3>0){FilterCriterion=A._NewObject(A.
Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,Ai3,false);Filter.
CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeW(false
);},Bv3:function(s){this.AEF(s);},AAX:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DQ(1,4))?
B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);(F=this.Q,F[2].call(F[0]
,Filter));}},BGb:function(s){this.AAX(s);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcT],
E,0);if(!!E)A.pe([this,this.AcT],this);},C2:function(G){var B;var F;if(!(F=this.
Q,F[1].call(F[0]))){this.AW.AwI(-1);return;}var Ay0=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DQ(1,4))?B:null);if(!Ay0){this.AW.AwI(
0);this.AW.AeW(true);}else this.AW.AwI(Ay0.A4);},AcT:function(s){this.C2(s);},_Init:
function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.Yu;this.AW.AwI(0);this.
AW.Di=[this,this.Bv3];this.Init(aArg);},_Mark:function(D){var B;C.AjS._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqH={BirthType:null,EaseOfDelivery:null,Cb:null,Ef:null,AbJ:null,G1:null,Cn:
null,AbH:null,AMS:false,Init:function(aArg){this.AMS=A._GetAutoObject(A.Device.Helper
).W.Arc();if(this.AMS)this.AeV(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeV(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cb.
LX([this,this.AcR]);this.Cb.L0(A.aaL(A.ach.Afa));this.Cb.AR=[this,this.AcR];}this.
Ef.Ar0(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GE],this.Ef.
Q,0);A.zX([this,this.GE],this.Cb.Q,0);A.pe([this,this.GE],this);},Af$:function(G
){if(((this.Ef.Ash===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQ3(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cq(
A._GetAutoObject(A.Device.Device).An);if(this.KI>0){if(this.AMS){var Ad=A._GetAutoObject(
A.Device.Device).Bt.Lc(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.EM(Ad,A._GetAutoObject(A.Device.
Device).Bt);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AX4,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KI);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cq(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A$).Fv();},Ev:function(
G){A._GetAutoObject(A.Device.Helper).W.EM(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A$).Fv();},Aug:function(
){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.Am3));this.N.Cl=[this,this.AyP];},AAs:function(
G){A._GetAutoObject(C.A$).Cg(32);},GE:function(G){var F;var Ka=(F=this.Ef.Q,F[1].
call(F[0]));var ABi=(F=this.Cb.Q,F[1].call(F[0]));var A4e=true;if(!!Ka&&(ABi===Ka
))A4e=false;A._GetAutoObject(A.Device.Helper).JW(this.Cb,A4e);this.Ef.BlM(!A4e);
},_Init:function(aArg){C.HY._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvY._Init.
call(this.Cb={I:this},0);C.Q9._Init.call(this.Ef={I:this},0);C.Aco._Init.call(this.
AbJ={I:this},0);C.BW._Init.call(this.G1={I:this},0);C.SL._Init.call(this.Cn={I:this
},0);C.BW._Init.call(this.AbH={I:this},0);this.__proto__=C.AqH;var B;this.Cb.H(AhW
);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akm));this.Ef.H(AhW);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Ud));this.AbJ.H(AX5);this.AbJ.Aj(true);this.
AbJ.T(A.aaR(A.acf.GJ));this.G1.H(AhW);this.G1.Aj(true);this.G1.T(A.aaR(A.acf.Arn
));this.Cn.H(AhW);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aec));this.Cn.AFy(true);
this.AbH.H(AhW);this.AbH.Aj(true);this.AbH.T(A.aaR(A.acf.AgC));this.J(this.Cb,-1
);this.J(this.Ef,-1);this.J(this.AbJ,-1);this.J(this.G1,-1);this.J(this.Cn,-1);this.
J(this.AbH,-1);this.BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LY(A._GetAutoObject(A.Device.Helper).W);this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Arx,B.Q2]);this.Ef.Gn([this,this.D_,this.GN]);this.Ef.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anu,B.Ne]);this.AbJ.Gn([this,this.D_,this.GN]);this.AbJ.As([
B=A._GetAutoObject(A.Device.Helper).W,B.Ary,B.SA]);this.G1.As([B=this.BirthType,
B.B7,B.B8]);this.G1.CI(this.BirthType);this.Cn.Gn([this,this.D_,this.GN]);this.Cn.
LX([B=this.Cn,B.FQ]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab8([B=A._GetAutoObject(
A.Device.Helper).W,B.Av_,B.Q0]);this.AbH.As([B=this.EaseOfDelivery,B.B7,B.B8]);this.
AbH.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HY;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cb._Done();this.Ef._Done(
);this.AbJ._Done();this.G1._Done();this.Cn._Done();this.AbH._Done();C.HY._Done.call(
this);},_ReInit:function(){C.HY._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cb._ReInit();this.Ef._ReInit();this.AbJ._ReInit();
this.G1._ReInit();this.Cn._ReInit();this.AbH._ReInit();this.Cb.T(A.aaR(A.acf.Ak4
));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.
Cb.ArL(A.aaR(A.acf.Akm));this.Ef.T(A.aaR(A.acf.Ud));this.AbJ.T(A.aaR(A.acf.GJ));
this.G1.T(A.aaR(A.acf.Arn));this.Cn.T(A.aaR(A.acf.Aec));this.AbH.T(A.aaR(A.acf.AgC
));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbH
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Aco={FF:null,AW:null,A8:0,IW:function(G){C.Dt.IW.call(this,G);if(!this.A8)this.
FQ(this);else this.G_(this);},Ai:function(Ae){C.Dt.Ai.call(this,Ae);this.Ht.Z(false
);this.H2.Z(false);if(this.A8===1){this.Bb(this.AW);if(this.Hf){this.AW.FI(A.jb.
CK);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FI(A.jb.CS);this.
Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hf)this.AW.FI(A.jb.CK);
else this.AW.FI(A.jb.CS);this.Bb(null);}},By:function(E){var F;var BR=this.AM;C.
Dt.By.call(this,E);if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Ue,this.BaV],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.
G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:this.FF.AkP((F=
this.N,F[1].call(F[0])));}},FQ:function(G){this.Ew(1);},G_:function(G){this.Ew(0
);},Ew:function(EO){var F;if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(F[0])));this.
A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>1)this.A8=1;if(this.A8===1)this.AW.
SI(7);this.DJ(this);this.Am();},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.AQX._Init.call(this.AW={I:this},0);this.__proto__=C.Aco;this.H(UT);this.EV(999999
);this.V.R(As9);this.V.L(A.jb.Bm);this.Ht.Z(false);this.H2.Z(false);this.AW.H(AX6
);this.AW.AS_(6);this.J(this.AW,0);this.AW.As([this,this.Ue,this.BaV]);this.FF=A.
_NewObject(C.Aeq,0);},_Done:function(){this.__proto__=C.Dt;this.AW._Done();C.Dt.
_Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.FF)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Do:function(){return 4;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},FX:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuF={Y:null,QL:null,NV:null,Ee:null,PC:null,Pz:null,PA:null,Ay:null,Ga:null,
ReasonOfLeaving:null,Ahu:null,M3:0,AmJ:false,AB7:true,AOq:false,Asd:false,Init:function(
aArg){A.zX([this,this.A9l],[this,this.A8N,this.ATb],0);this.Ahi(A._GetAutoObject(
A.Device.Helper).W.AhP(2));this.ReasonOfLeaving.As(this.ReasonOfLeaving.DU(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9l],this);},DE:function(G){
var B;var Fc=0;var X=this.AV;switch(this.Cr.CO){case 6:Fc=2;break;case 7:Fc=7;break;
case 4:Fc=4;break;case 5:Fc=5;break;default:;}X=this.QD(X,Fc,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HD(X,true,null,null);},AlZ:function(G
){A._GetAutoObject(C.A$).Fv();},ApL:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.
Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M3);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmJ){A._GetAutoObject(A.Device.Helper).W.Ahl(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A6M(A._GetAutoObject(A.Device.Helper).Dv(),this.Asd);}A._GetAutoObject(A.Device.
Helper).W.AFx(this.ReasonOfLeaving.C4((F=this.NV.Q,F[1].call(F[0]))));if(this.AB7
)A._GetAutoObject(A.Device.Helper).W.Q2(0);if(this.Asd)A._GetAutoObject(A.Device.
Helper).W.AwK(true);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).An);this.A$c();},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},Ahi:function(E){
if(this.M3===E)return;this.M3=E;},Anr:function(){return this.M3;},Be1:function(G
){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;if((At.PopupState===
4)||(At.PopupState===3)){A._GetAutoObject(C.A$).Fv();A._GetAutoObject(A.Device.Helper
).Asn();}},A9l:function(G){switch(this.Asd){case false:this.Ee.T(A.aaR(A.acf.AVD
));break;case true:this.Ee.T(A.aaR(A.acf.Bqm));break;default:;}},ATb:function(E){
if(this.Asd===E)return;this.Asd=E;},A8N:function(){return this.Asd;},A$c:function(
){A._GetAutoObject(A.Device.Device).A9(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Be1]);},Bma:function(E){if(this.AOq===E)return;
this.AOq=E;},Bkx:function(){return this.AOq;},Blz:function(E){if(this.AB7===E)return;
this.AB7=E;},Bkl:function(){return this.AB7;},BlK:function(E){if(this.AmJ===E)return;
this.AmJ=E;},Bkt:function(){return this.AmJ;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afj._Init.call(this.QL={I:this
},0);C.Asw._Init.call(this.NV={I:this},0);C.AkT._Init.call(this.Ee={I:this},0);C.
Afj._Init.call(this.PC={I:this},0);C.Afj._Init.call(this.Pz={I:this},0);C.Afj._Init.
call(this.PA={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Ga._Init.call(this.
Ga={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahu._Init.call(this.Ahu={I:this},0);this.__proto__=C.AuF;var B;this.N.Z(true);this.
N.CV(A.aaR(A.acf.Unregister));this.Dq(C.IG);this.Y.H(E$);this.Y.JP(1);this.QL.H(
Aaf);this.QL.Aj(true);this.QL.T(A.aaR(A.acf.AmJ));this.QL.Bg(true);this.QL.Zw(false
);this.QL.F0(-1);this.QL.EV(1);this.NV.H(UV);this.NV.Aj(true);this.NV.T(A.aaR(A.
acf.ReasonOfLeaving));this.NV.Bg(true);this.NV.Zw(false);this.Ee.H(AhV);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVD));this.Ee.Bg(false);this.Ee.F0(1000);this.Ee.
EV(999000);this.PC.H(UV);this.PC.Aj(true);this.PC.T(A.aaR(A.acf.A4R));this.PC.Bg(
true);this.PC.Zw(false);this.PC.By(1);this.PC.F0(-1);this.PC.EV(1);this.Pz.H(Aaf
);this.Pz.Aj(true);this.Pz.T(A.aaR(A.acf.A4S));this.Pz.Bg(true);this.Pz.Zw(false
);this.Pz.By(1);this.Pz.F0(-1);this.Pz.EV(1);this.PA.H(UV);this.PA.Aj(true);this.
PA.T(A.aaR(A.acf.A5s));this.PA.Bg(true);this.PA.Zw(false);this.PA.By(1);this.PA.
F0(-1);this.PA.EV(1);this.Ay.H(Ayf);this.Ga.As(0);this.J(this.Y,0);this.J(this.QL
,0);this.J(this.NV,0);this.J(this.Ee,0);this.J(this.PC,0);this.J(this.Pz,0);this.
J(this.PA,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fe
];this.QL.As([B=this.Ga,B.B7,B.B8]);this.QL.CI(this.Ga);this.QL.AkC([this,this.Bkt
,this.BlK]);this.NV.Gn([this,this.D_,this.GN]);this.NV.LX([B=this.NV,B.FQ]);this.
NV.L0(A.aaL(A.ach.Edit));this.NV.As([B=this.ReasonOfLeaving,B.B7,B.B8]);this.NV.
CI(this.ReasonOfLeaving);this.NV.Anz(this.Ahu);this.Ee.As([this,this.Anr,this.Ahi
]);this.PC.As([B=this.Ga,B.B7,B.B8]);this.PC.CI(this.Ga);this.PC.AkC([this,this.
Bkx,this.Bma]);this.Pz.As([B=this.Ga,B.B7,B.B8]);this.Pz.CI(this.Ga);this.Pz.AkC([
this,this.A8N,this.ATb]);this.PA.As([B=this.Ga,B.B7,B.B8]);this.PA.CI(this.Ga);this.
PA.AkC([this,this.Bkl,this.Blz]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QL._Done();this.NV._Done();this.Ee._Done();this.PC._Done(
);this.Pz._Done();this.PA._Done();this.Ay._Done();this.Ga._Done();this.ReasonOfLeaving.
_Done();this.Ahu._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QL._ReInit();this.NV._ReInit();this.Ee._ReInit(
);this.PC._ReInit();this.Pz._ReInit();this.PA._ReInit();this.Ay._ReInit();this.Ga.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahu._ReInit();this.N.CV(A.aaR(A.acf.
Unregister));this.QL.T(A.aaR(A.acf.AmJ));this.NV.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVD));this.PC.T(A.aaR(A.acf.A4R));this.Pz.T(A.aaR(A.acf.A4S
));this.PA.T(A.aaR(A.acf.A5s));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahu)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUD={AjL:null,Ps:null,Au5:AX7,Bk:function(aSize){C.Ip.Bk.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Ht.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H2.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.Ip.Ai.call(this,Ae);this.Ps.L(this.V.AQ);if(!!this.AjL){if((
F=this.AjL,F[1].call(F[0]))===-1)this.Ps.R(this.Au5+AH9);else this.Ps.R((this.Au5+
CQ)+(F=this.AjL,F[1].call(F[0])).toFixed());}else this.Ps.R(this.Au5);},A24:function(
G){this.Am();},BlU:function(E){if(A.aaZ(this.AjL,E))return;if(!!this.AjL)A.z$([this
,this.A24],this.AjL,0);this.AjL=E;if(!!E)A.zX([this,this.A24],E,0);if(!!E)A.pe([
this,this.A24],this);},A9N:function(E){if(this.Au5===E)return;this.Au5=E;this.Am(
);},_Init:function(aArg){C.Ip._Init.call(this,aArg);C.CH._Init.call(this.Ps={I:this
},0);this.__proto__=C.AUD;this.H(AX8);this.V.H(AX9);this.V.A6(0x12);this.Ps.H(AX_
);this.Ps.A6(0x12);this.Ps.L(A.jb.Bm);this.J(this.Ps,0);this.Ps.S(A.aaL(A.fl.Af)
);this.Ps.A2(A.aaL(A.fl.Ak));this.Ps.Cu(null);},_Done:function(){this.__proto__=
C.Ip;this.Ps._Done();C.Ip._Done.call(this);},_ReInit:function(){C.Ip._ReInit.call(
this);this.Ps._ReInit();this.Ps.S(A.aaL(A.fl.Af));this.Ps.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Ip._Mark.call(this,D);if((B=this.AjL)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AL$={Y:null,JL:null,Sn:null,Ay:null,Aqv:2500,ANp:24,DE:function(G){var B;var
Fc=0;var X=this.AV;switch(this.Cr.CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:
Fc=4;break;case 5:Fc=5;break;default:;}X=this.QD(X,Fc,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HD(X,true,null,null);},AlZ:function(G){A._GetAutoObject(
C.A$).Fv();},ApL:function(G){},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1)
)[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},BlD:function(
E){if(this.Aqv===E)return;this.Aqv=E;},Bkn:function(){return this.Aqv;},BlE:function(
E){if(this.ANp===E)return;this.ANp=E;},Bko:function(){return this.ANp;},Bkc:function(
G){var F,CA;this.JL.BT.L(this.JL.V.AQ);if(!!this.JL.Q)this.JL.BT.R((((String.fromCharCode(((
F=this.JL.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Afy)+String.fromCharCode(((
CA=this.JL.Q,CA[1].call(CA[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JL.
AG4);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ip._Init.call(this.JL={I:this},0);C.Ip._Init.call(this.Sn={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AL$;this.N.Z(true);this.
Dq(C.IG);this.Y.H(E$);this.Y.JP(1);this.JL.H(AhV);this.JL.Aj(true);this.JL.T(A.aaR(
A.acf.Aqv));this.JL.Bg(false);this.JL.F0(0);this.JL.EV(5000);this.JL.IM(A.aaR(A.
acf.Af2));this.JL.I9(A.aaR(A.acf.Af2));this.JL.AS2(100);this.Sn.H(UV);this.Sn.Aj(
true);this.Sn.T(A.aaR(A.acf.A_N));this.Sn.Bg(true);this.Sn.By(24);this.Sn.F0(10);
this.Sn.EV(33);this.Sn.IM(AX$);this.Ay.H(Ayf);this.J(this.Y,0);this.J(this.JL,0);
this.J(this.Sn,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.VZ));this.Y.El=[this,this.
Fe];this.JL.As([this,this.Bkn,this.BlD]);this.JL.A_k([this,this.Bkc]);this.Sn.As([
this,this.Bko,this.BlE]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JL._Done();this.Sn._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JL._ReInit();this.Sn._ReInit();this.
Ay._ReInit();this.JL.T(A.aaR(A.acf.Aqv));this.JL.IM(A.aaR(A.acf.Af2));this.JL.I9(
A.aaR(A.acf.Af2));this.Sn.T(A.aaR(A.acf.A_N));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Arp={EaseOfDelivery:null,BirthType:null,Cb:null,Dk:null,Dh:null,Cn:null,Ee:null
,G1:null,Li:null,M3:0,LU:false,Init:function(aArg){A.zX([this,this.GE],this.Cb.Q
,0);A.zX([this,this.GE],this.Dk.Q,0);A.zX([this,this.AAx],this.C$.Q,0);A.zX([this
,this.Bex],this.Cn.Dj,0);A.zX([this,this.Ber],this.C9.Q,0);A.zX([this,this.At1],
this.Cb.Q,0);A.zX([this,this.At1],this.Dk.Q,0);A.pe([this,this.AAx],this);A.pe([
this,this.GE],this);A.pe([this,this.Bex],this);A.pe([this,this.Ber],this);A.pe([
this,this.At1],this);},Ev:function(G){A._GetAutoObject(A.Device.Helper).W.Hi();A.
_GetAutoObject(C.A$).Fv();},Af$:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EB((F=this.BZ.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhA
){var AlK=A._GetAutoObject(A.Device.Helper).AhA.AOO();A._GetAutoObject(A.Device.
Helper).W.Ab5(AlK);A._GetAutoObject(A.Device.Helper).W.AnE(AlK);}var Alq=A._GetAutoObject(
A.Device.Helper).A1m(A._GetAutoObject(A.Device.Helper).W,(F=this.Dh.HZ.Hp,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alq){this.AiZ();A.pe([this,this.
Bwp],this);}else A._GetAutoObject(A.Device.Helper).AKf(A._GetAutoObject(A.Device.
Helper).W,Alq,(F=this.Dh.HZ.Hp,F[1].call(F[0])),0,[this,this.ApG]);},Aug:function(
){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.ADI));this.N.Cl=[this,this.AyP];},AiZ:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).An);var L6=A._GetAutoObject(A.Device.Device).An.Lc(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SJ(L6);var Bdr=false;if(A._GetAutoObject(
A.Device.Helper).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lh()){Bdr=true;A.
_GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.
HG().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cq(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7b()&&(Bdr===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M3);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}}var IT=null;switch((F=this.
Dh.HZ.Hp,F[1].call(F[0]))){case 3:IT=[B=A._GetAutoObject(A.Device.Device),B.Awb,
B.AyG];break;case 2:IT=[B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyH];break;case
4:case 5:IT=[B=A._GetAutoObject(A.Device.Device),B.Ant,B.AoB];break;default:;}if(
!!IT)switch((F=this.Dh.Kj.VN,F[1].call(F[0]))){case 1:IT[2].call(IT[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}if(!!(F=this.Dk.Q,F[1].call(F[0])))
A._GetAutoObject(A.Device.Helper).A$E(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.Gender.Animal.Gender,(F=this.Dk.Q,F[1].call(F[0])),this.Dk.AjN(),this.Dk.AjP(
));},Ap5:function(G){A._GetAutoObject(C.A$).Fv();},Bwp:function(s){this.Ap5(s);}
,AAs:function(G){A._GetAutoObject(C.A$).Cg(49);},Ahi:function(E){if(this.M3===E)
return;this.M3=E;A.abo([this,this.Anr,this.Ahi],0);},GE:function(G){if(A._GetAutoObject(
A.Device.Helper).Am6())this.C9.Z(true);else this.C9.Z(false);if(A._GetAutoObject(
A.Device.Helper).A7b())this.Ee.Z(true);else this.Ee.Z(false);if(this.LU){this.Dk.
Z(false);this.Cb.T(A.aaR(A.acf.ACy));this.Cb.AEX(A.aaL(A.ach.Afa));}else{this.Dk.
Z(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.AEX(null);}},AAx:function(G){A._GetAutoObject(
A.Device.Helper).AVm(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.LU);},Bex:function(G){A.pe([this,this.Bgq],this
);},Ber:function(G){A.pe([this,this.Bgq],this);},Bgq:function(G){var F,CA,S7;switch(
A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.Ee.Ahm(A._GetAutoObject(
A.Device.Helper).AhP(A._GetAutoObject(A.Device.Helper).Abq((F=this.BZ.Q,F[1].call(
F[0]))),(CA=this.Cn.Dj,CA[1].call(CA[0])),2,(S7=this.BZ.Q,S7[1].call(S7[0]))));break;
case 2:this.Ee.Ahm(A._GetAutoObject(A.Device.Helper).AhP(this.KI,(F=this.Cn.Dj,F[
1].call(F[0])),2,(CA=this.BZ.Q,CA[1].call(CA[0]))));break;default:;}},ApG:function(
G){var F;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(
At.Id){case 22:case 21:switch((F=this.Dh.HZ.Hp,F[1].call(F[0]))){case 3:case 2:case
5:case 4:this.JD(this.Dh);break;case 0:this.JD(this.Dk);break;case 1:this.JD(this.
Cb);break;default:throw new Error(Ayo+(F=this.Dh.HZ.Hp,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JD(this.Dh);this.JD(this.Dk);}break;case 25:case 42:{this.
JD(this.Dh);this.JD(this.Cb);}break;case 41:break;default:A.ab5("%s%e",As7,At.Id
);}},ApH:function(G){var F;C.HY.ApH.call(this,G);var AoW=0;switch((F=this.BZ.Q,F[
1].call(F[0]))){case 0:case 2:AoW=A._GetAutoObject(A.Device.Device).AdQ;break;case
1:AoW=730;break;default:A.ab5("%s%e",Ale,(F=this.BZ.Q,F[1].call(F[0])));}(F=this.
Cn.Dj,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmH(AoW)));(F=this.C9.Q,F[2].call(F[0],this.C9.AnZ));this.Ee.Ahm(A._GetAutoObject(
A.Device.Helper).W.AhP(1));},Ae1:function(E){if(this.LU===E)return;this.LU=E;A.abo([
this,this.Awe,this.Ae1],0);},At1:function(G){var F,CA,S7;this.Ae1(((F=this.Cb.Q,
F[1].call(F[0]))===(CA=this.Dk.Q,CA[1].call(CA[0])))&&!!(S7=this.Cb.Q,S7[1].call(
S7[0])));A.pe([this,this.GE],this);},Anr:function(){return this.M3;},Awe:function(
){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AvY._Init.call(this.Cb={I:this},0);C.Q9._Init.call(this.Dk={I:this}
,0);C.AGB._Init.call(this.Dh={I:this},0);C.SL._Init.call(this.Cn={I:this},0);C.AkT.
_Init.call(this.Ee={I:this},0);C.BW._Init.call(this.G1={I:this},0);C.BW._Init.call(
this.Li={I:this},0);this.__proto__=C.Arp;var B;this.Dq(C.AC_);this.CG.H(AcQ);this.
Cb.H(Aoq);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArK(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akm));this.
Dk.H(Aoq);this.Dk.Aj(true);this.Dk.T(A.aaR(A.acf.Ud));this.Dk.Ar0(false);this.Dh.
H(AYa);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.GJ));this.Dh.By(0);this.Cn.H(AcQ);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aec));this.Cn.AFy(true);this.Ee.H(AcQ);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M3));this.Ee.F0(1000);this.Ee.EV(999000);this.
G1.H(AcQ);this.G1.Aj(true);this.G1.T(A.aaR(A.acf.Arn));this.Li.H(AcQ);this.Li.Aj(
true);this.Li.T(A.aaR(A.acf.AgC));this.J(this.Cb,-3);this.J(this.Dk,-3);this.J(this.
Dh,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G1,-1);this.J(this.Li,-
1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LY(
A._GetAutoObject(A.Device.Helper).W);this.Cb.AR=[this,this.AcR];this.Cb.LX([this
,this.AcR]);this.Cb.L0(A.aaL(A.ach.Afa));this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Arx,B.Q2]);this.Cb.OM([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY
]);this.Cb.PN([B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ]);this.Cb.Uh([B=A._GetAutoObject(
A.Device.Device),B.Anq,B.AoA]);this.Cb.Ae1([this,this.Awe,this.Ae1]);this.Dk.Gn([
this,this.D_,this.GN]);this.Dk.LX([this,this.AcR]);this.Dk.L0(A.aaL(A.ach.Afa));
this.Dk.Uj([B=this.Gender.Animal,B.Wt,B.JQ]);this.Dk.OM([B=A._GetAutoObject(A.Device.
Device),B.Uf,B.UY]);this.Dk.PN([B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ]);
this.Dk.Uh([B=A._GetAutoObject(A.Device.Device),B.Anq,B.AoA]);this.Dk.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anu,B.Ne]);this.Dk.Anx([B=this.AnimalType.Animal,B.PM,B.EB]
);this.Dh.Gn([this,this.D_,this.GN]);this.Dh.LX([B=this.Dh,B.FQ]);this.Dh.L0(A.aaL(
A.ach.Edit));this.Dh.As([B=A._GetAutoObject(A.Device.Helper).W,B.Ary,B.SA]);this.
Dh.A9o(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gn([this,this.D_,this.GN]);this.
Cn.LX([B=this.Cn,B.FQ]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab8([B=A._GetAutoObject(
A.Device.Helper).W,B.Av_,B.Q0]);this.Ee.As([this,this.Anr,this.Ahi]);this.G1.As([
B=this.BirthType,B.B7,B.B8]);this.G1.CI(this.BirthType);this.Li.As([B=this.EaseOfDelivery
,B.B7,B.B8]);this.Li.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cb._Done(
);this.Dk._Done();this.Dh._Done();this.Cn._Done();this.Ee._Done();this.G1._Done(
);this.Li._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cb._ReInit();this.
Dk._ReInit();this.Dh._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G1._ReInit(
);this.Li._ReInit();this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akm));this.Dk.T(
A.aaR(A.acf.Ud));this.Dh.T(A.aaR(A.acf.GJ));this.Cn.T(A.aaR(A.acf.Aec));this.Ee.
T(A.aaR(A.acf.M3));this.G1.T(A.aaR(A.acf.Arn));this.Li.T(A.aaR(A.acf.AgC));},_Mark:
function(D){var B;C.HY._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHa={H5:null,AhF:null,AgM:null,AhG:null,AgN:null,AnimalType:null,Background:
null,NX:null,Rh:null,V:null,TP:null,YA:null,AbE:null,PL:null,DK:A.jV,AGD:true,CP:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An_();this.
AxP();},An_:function(){var F,CA;var LD=0;var Amd=0;var AlD=0;var H$=0;if((((!!this.
AhF&&!!this.AhG)&&!!this.AgM)&&!!this.AgN)&&!!this.AnimalType){Amd=(F=this.AhF,F[
1].call(F[0]));AlD=(F=this.AgM,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper
).MN((F=this.AhG,F[1].call(F[0])),(CA=this.AgN,CA[1].call(CA[0])));H$=(F=this.AnimalType
,F[1].call(F[0]));}var K7=A.jb.Text;var Ay8=A.jb.CS;if(!!LD){var ALt=A._GetAutoObject(
A.acj.DV).Alx(LD,Amd,AlD);Ay8=A._GetAutoObject(A.acj.DV).AzN(ALt,H$);K7=A._GetAutoObject(
A.acj.DV).AzP(ALt,H$);}this.Background.L(Ay8);this.TP.L(K7);this.Rh.L(K7);this.NX.
L(K7);this.AbE.L(K7);if(K7===A.jb.Bm)this.YA.L(K7);else this.YA.L(A.jb.CK);this.
V.L(K7);this.PL.L(K7);},AxP:function(){var F,CA;var LD=0;var Amd=0;var AlD=0;if(((
!!this.AhF&&!!this.AhG)&&!!this.AgM)&&!!this.AgN){Amd=(F=this.AhF,F[1].call(F[0]
));AlD=(F=this.AgM,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper).MN((F=this.
AhG,F[1].call(F[0])),(CA=this.AgN,CA[1].call(CA[0])));}if(!!LD){var ALt=A._GetAutoObject(
A.acj.DV).Alx(LD,Amd,AlD);this.Rh.R(A._GetAutoObject(A.Device.Converter).S2(ALt,
2,true));this.NX.Z(true);this.Rh.Z(true);this.PL.Z(false);}else{this.NX.Z(false);
this.Rh.Z(false);this.PL.Z(true);}this.TP.R(this.By3(AlD-Amd,LD));this.AbE.Z(this.
AGD);this.YA.Z(this.AGD);this.NX.R(A._GetAutoObject(A.acj.DV).Aax());},By3:function(
A02,Ah4){var B;if(Ah4<0){A.ab5("%s",AYb);return A.jV;}var It=(AYc+A._GetAutoObject(
A.acj.DV).AfZ())+CQ;var FS=A._GetAutoObject(A.Device.Converter).Ak9(A02);if(!A02
)FS=A.abU(FS,AYd,0);else if(A02>0)FS=A.abU(FS,AH_,0);It=this.BfH(It,AYe,FS);if(Ah4===
1)It=It+A.aaR(A.acf.Bi3);else{It=It+A.aaR(A.acf.Bi4);It=this.BfH(It,AYf,Ah4.toFixed(
));}return It;},BfH:function(aString,BbZ,Bxq){if(aString===A.jV){A.ab5("%s",AYg);
return A.jV;}var A2J=aString.indexOf(BbZ,0);if(A2J>=0){aString=A.ab1(aString,A2J
,BbZ.length);aString=A.abU(aString,Bxq,A2J);}return aString;},ATr:function(E){if(
A.aaZ(this.AhF,E))return;if(!!this.AhF)A.z$([this,this.C2],this.AhF,0);this.AhF=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},BlR:function(
E){if(A.aaZ(this.AgM,E))return;if(!!this.AgM)A.z$([this,this.C2],this.AgM,0);this.
AgM=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},ATs:function(
E){if(A.aaZ(this.AhG,E))return;if(!!this.AhG)A.z$([this,this.C2],this.AhG,0);this.
AhG=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},BlS:function(
E){if(A.aaZ(this.AgN,E))return;if(!!this.AgN)A.z$([this,this.C2],this.AgN,0);this.
AgN=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(
G){this.Am();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_j:function(
E){if(this.AGD===E)return;this.AGD=E;this.Am();},EB:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C2],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.NX={I:this},0);A.acg.Text._Init.call(this.Rh={I:this},
0);C.CH._Init.call(this.V={I:this},0);C.CH._Init.call(this.TP={I:this},0);A.acg.
Ap._Init.call(this.YA={I:this},0);A.acg.Ap._Init.call(this.AbE={I:this},0);C.CH.
_Init.call(this.PL={I:this},0);this.__proto__=C.AHa;this.H(AfA);this.Background.
AZ(0x3F);this.Background.H(AfA);this.NX.H(AYh);this.NX.R(A._GetAutoObject(A.acj.
DV).Aax());this.NX.A6(0x9);this.NX.L(A.jb.Text);this.Rh.H(AYi);this.Rh.A6(0x14);
this.Rh.R(A.aaR(A.acu.Akk));this.Rh.L(A.jb.Text);this.V.AZ(0x1D);this.V.H(AYj);this.
V.R(A.aaR(A.acf.Auv));this.V.A6(0x12);this.V.L(A.jb.Text);this.TP.H(Aae);this.YA.
AZ(0x14);this.YA.H(AH$);this.YA.Cv(1);this.AbE.AZ(0x14);this.AbE.H(AH$);this.AbE.
Cv(0);this.PL.H(AYk);this.PL.R(A.aaR(A.acf.A4y));this.J(this.Background,0);this.
J(this.NX,0);this.J(this.Rh,0);this.J(this.V,0);this.J(this.TP,0);this.J(this.YA
,0);this.J(this.AbE,0);this.J(this.PL,0);this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.
aaL(A.fl.Af));this.NX.Cu(A.aaL(A.fl.Ij));this.Rh.S(A.aaL(A.fl.Aep));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bh));this.TP.S(A.aaL(A.
fl.Af));this.TP.A2(A.aaL(A.fl.Ak));this.TP.Cu(A.aaL(A.fl.Bh));this.YA.Aw(A.aaL(A.
ach.ABH));this.AbE.Aw(A.aaL(A.ach.ABH));this.H5=A._NewObject(A.Device.Rating,0);
this.PL.S(A.aaL(A.fl.Af));this.PL.A2(A.aaL(A.fl.Ak));this.PL.Cu(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.NX._Done(
);this.Rh._Done();this.V._Done();this.TP._Done();this.YA._Done();this.AbE._Done(
);this.PL._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.NX._ReInit();this.Rh._ReInit();this.V.
_ReInit();this.TP._ReInit();this.YA._ReInit();this.AbE._ReInit();this.PL._ReInit(
);this.Rh.R(A.aaR(A.acu.Akk));this.V.R(A.aaR(A.acf.Auv));this.PL.R(A.aaR(A.acf.A4y
));this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.aaL(A.fl.Af));this.NX.Cu(A.aaL(A.fl.Ij
));this.Rh.S(A.aaL(A.fl.Aep));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Cu(A.aaL(A.fl.Bh));this.TP.S(A.aaL(A.fl.Af));this.TP.A2(A.aaL(A.fl.Ak));this.
TP.Cu(A.aaL(A.fl.Bh));this.PL.S(A.aaL(A.fl.Af));this.PL.A2(A.aaL(A.fl.Ak));this.
PL.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhF)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgN)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVE={Animal:null,Rating:null,Cr:null,AD:null,AY:
0,Hg:function(G){var B;if(!this.Animal||!this.Rating)return;var Gc=this.AD.G0;var
Cz=(C.AHa.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Cz)return;Cz.EB([B=this.Animal
,B.PM,B.EB]);Cz.BlR([B=A._GetAutoObject(A.Device.Device),B.AED,B.AIR]);Cz.BlS([B=
this.Rating,B.A84,B.OnSetTimestamp]);switch(Gc%this.AY){case 1:{Cz.ATr([B=this.Animal
,B.A8D,B.AFf]);Cz.ATs([B=this.Animal,B.A85,B.AFJ]);Cz.T(A.aaR(A.acf.Auv));}break;
default:if(this.Animal.Arc()){Cz.ATr([B=this.Animal,B.ASl,B.AwF]);Cz.ATs([B=this.
Animal,B.ASC,B.Aw7]);Cz.T(A.aaR(A.acf.ALR));}else{Cz.ATr([B=this.Animal,B.ASl,B.
AwF]);Cz.ATs([B=this.Animal,B.ASC,B.Aw7]);Cz.T(A.aaR(A.acf.BgJ));}}if(this.AY>1)
Cz.A_j(true);else Cz.A_j(false);Cz.H(A.abK(Cz.M,[(B=this.AD.M)[2]-B[0],this.AD.GK
]));},DE:function(G){if(this.AY>0)switch(this.Cr.CO){case 6:this.CB(this);break;
case 7:this.Cl(this);break;default:this.Cr.NH=true;}},LY:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Ju(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Ju(1);else{this.Ju(2);this.AD.G2(1);this.
AD.HD(this.AD.Go,true,null,null);}if(this.AY>0)this.AD.AbG(0,this.AY-1);},AkD:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbG(0,this.AY-1);
},CB:function(G){if(this.AD.Go>0)this.AD.G2(this.AD.Go-1);else this.AD.G2(this.AY-
1);this.AD.HD(this.AD.Go,true,null,null);},Cl:function(G){if(this.AD.Go<(this.AY-
1))this.AD.G2(this.AD.Go+1);else this.AD.G2(0);this.AD.HD(this.AD.Go,true,null,null
);},Ju:function(E){if(this.AY===E)return;this.AY=E;this.AD.Ju(this.AY);A.abo([this
,this.Aru,this.Ju],0);},Aru:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BN._Init.call(this.Cr={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVE;this.H(AfA);this.Cr.Filter=147;this.
AD.AZ(0x3F);this.AD.H(AfA);this.AD.NZ(C.AHa);this.AD.Ae4(160);this.AD.G2(0);this.
AD.Ju(2);this.J(this.AD,0);this.Cr.BO=[this,this.DE];this.Cr.D0=[this,this.DE];this.
AD.Hg=[this,this.Hg];},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cr._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bk:function(aSize){C.Co.Bk.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((
Ae&0x20)===0x20);var GA=this.Bo.Bw;var FN=A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FN=
A.jb.CS;GQ=A.jb.Text;}if(!G$){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else
if(GA){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);}this.LI=G$;
this.KE=Fq;this.Qn=GA;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(J0);this.V.H(BF);this.Zw(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeO={KJ:null,GG:A.jV,Bk:function(aSize){C.Eg.Bk.call(this,aSize);this.KJ.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KJ.
L(this.V.AQ);},Init:function(aArg){},Ab4:function(E){if(this.GG===E)return;this.
GG=E;this.KJ.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CH._Init.call(
this.KJ={I:this},0);this.__proto__=C.AeO;this.H(J0);this.Background.H(J0);this.V.
H(Aad);this.V.R(Lv);this.KJ.H(IR);this.KJ.R(AYl);this.J(this.KJ,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.KJ.S(A.aaL(A.fl.Af));this.
KJ.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KJ._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KJ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KJ.S(A.aaL(
A.fl.Af));this.KJ.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvY={AB$:null,Q:null,A1:null,AF:null,Ih:null,LU:null,Ap:null,EN:null,AN4:A.jV
,AN5:A.jV,Bk:function(aSize){C.AeO.Bk.call(this,aSize);if(!this.AB$)this.KJ.H([].
concat(0,this.KJ.M.slice(1,4)));else this.KJ.H([].concat(this.Ap.M[2],this.KJ.M.
slice(1,4)));},Ai:function(Ae){var F,CA,S7;C.AeO.Ai.call(this,Ae);var Bcp=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Aph)this.Ab4(this.AN4);else
this.Ab4(this.AN5);}else{this.Ab4(A._GetAutoObject(A.Device.Converter).Rf((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ih&&!!this.A1)&&!!this.AF)&&!!this.LU)&&(((F=this.
Ih,F[1].call(F[0]))===1)||(!(CA=this.Ih,CA[1].call(CA[0]))&&(S7=this.LU,S7[1].call(
S7[0])))))Bcp=true;}}this.EN.Z(Bcp);this.Ap.L(this.V.AQ);A.pe([this,this.Af7],this
);},C2:function(G){this.Am();},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},AEX:function(E){if(this.AB$===E)return;this.AB$=E;this.
Ap.Aw(E);this.Bi$();},OM:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1)A.z$([
this,this.AaH],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.AaH],E,0);if(!!E)A.pe([
this,this.AaH],this);},PN:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaI],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaI],E,0);if(!!E)
A.pe([this,this.AaI],this);},AaI:function(G){this.Am();},AaH:function(G){this.Am(
);},Uh:function(E){if(A.aaZ(this.Ih,E))return;if(!!this.Ih)A.z$([this,this.AlY],
this.Ih,0);this.Ih=E;if(!!E)A.zX([this,this.AlY],E,0);if(!!E)A.pe([this,this.AlY
],this);},AlY:function(G){this.Am();},Af7:function(G){var F,CA;if((!this.Ih||!this.
A1)||!this.AF)return;var A2r=this.KJ.Afd([(this.KJ.String.length-(F=this.AF,F[1].
call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3M=this.KJ.Afd([this.KJ.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABb=this.KJ.Db(0x0);this.EN.H([A2r[0]-
1,ABb[1],A3M[0]+1,ABb[3]]);},ArK:function(E){if(this.AN4===E)return;this.AN4=E;this.
Am();},ArL:function(E){if(this.AN5===E)return;this.AN5=E;this.Am();},Ae1:function(
E){if(A.aaZ(this.LU,E))return;if(!!this.LU)A.z$([this,this.A2$],this.LU,0);this.
LU=E;if(!!E)A.zX([this,this.A2$],E,0);if(!!E)A.pe([this,this.A2$],this);},A2$:function(
G){this.Am();},_Init:function(aArg){C.AeO._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BU._Init.call(this.EN={I:this},0);this.__proto__=C.AvY;
this.Ap.H(AhR);this.EN.H(AYm);this.EN.Nh(2);this.EN.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EN,0);this.KJ.Q1([this,this.Af7]);},_Done:function(){this.__proto__=
C.AeO;this.Ap._Done();this.EN._Done();C.AeO._Done.call(this);},_ReInit:function(
){C.AeO._ReInit.call(this);this.Ap._ReInit();this.EN._ReInit();},_Mark:function(
D){var B;C.AeO._Mark.call(this,D);if((B=this.AB$)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ih)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ig:0,AaG:4,BdC:true,BdB:false,Bcw:true,Bdu:false,Al3:function(
G){C.Q8.Al3.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bdt()){this.Ig=A._GetAutoObject(
A.Device.Helper).Uw.Id;var Aiv=A._GetAutoObject(A.Device.Helper).AQ5(this.Ig);if(
Aiv)A._GetAutoObject(A.Device.Device).A9(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A3d]);else{this.AaG=A._GetAutoObject(A.Device.
Helper).AQ6(this.Ig);var BdZ=false;if((this.AaG===3)||(this.AaG===2))BdZ=A._GetAutoObject(
A.Device.Helper).A7c(this.Ig,A._GetAutoObject(A.Device.Helper).W);if(BdZ)A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(this.Ig),0,null
);else switch(this.AaG){case 2:{var BP=A._GetAutoObject(A.Device.Converter).AxN(
this.Ig);A._GetAutoObject(A.Device.Device).A9(46,true,BP.toFixed(),0,[this,this.
A3d]);}break;case 3:case 1:case 0:case 4:this.A33();break;default:throw new Error(
AIa+this.AaG.toFixed());}}}},Ev:function(G){A._GetAutoObject(C.A$).Fv();},AIS:function(
s){this.Ev(s);},A33:function(){if((this.AaG===3)||(this.AaG===2)){if((this.Bcw&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Ig)){A._GetAutoObject(A.Device.Device).A9(69,true,A.jV,0,[this
,this.A3d]);return;}else this.BBw();}A._GetAutoObject(A.Device.Helper).W.Q2(this.
Ig);this.Bdu=true;this.BBy();this.Ev(this);},A3d:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At)switch(At.Id){case 46:if(At.PopupState===4)this.
A33();break;case 107:switch(At.PopupState){case 7:{this.A33();A._GetAutoObject(A.
Device.Helper).Bn5(this.Ig);}break;case 8:this.Ev(this);break;default:;}break;case
69:if(At.PopupState===4)this.Ev(this);break;default:A.ab5("%s%e",AIb,At.Id);}},BBw:
function(){A._GetAutoObject(A.Device.Helper).W.Ne(this.Ig);if(this.BdB&&(A._GetAutoObject(
A.Device.Converter).ZY(this.Ig)===10)){var Bcb=Math.trunc((this.Ig%1000000000000
)/10000000000);if(!Bcb&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.EB(0);else if((Bcb===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.EB(2);}},BBy:function(){if(this.
BdC){A._GetAutoObject(A.Device.Helper).W.SA(A._GetAutoObject(A.Device.Helper).A4Q(
A._GetAutoObject(A.Device.Device).Ak3,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).Ak3===1)A._GetAutoObject(A.Device.Helper).A$F();
}},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dq(C.IG);this.Number.R(A.aaR(A.acf.OR));this.Jc.H(AYn);this.
IP.H(W2);this.AkF(1);this.N.CB=[this,this.AIS];this.N.CY(A.aaL(A.ach.E2));},_ReInit:
function(){C.Q8._ReInit.call(this);this.Number.R(A.aaR(A.acf.OR));},_className:"Application::SetTransponderScreen"
};C.ADk={Gj:null,Lm:null,Kp:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EA.Ai.call(this,Ae);this.Lm.R(A._GetAutoObject(A.acj.DV
).AfZ());this.Kp.R(A._GetAutoObject(A.acj.DV).Aax());},_Init:function(aArg){C.EA.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gj={I:this},0);A.acg.Text._Init.
call(this.Lm={I:this},0);A.acg.Text._Init.call(this.Kp={I:this},0);this.__proto__=
C.ADk;this.Background.L(A.jb.Text);this.Gj.H(AYo);this.Gj.A6(0x11);this.Gj.R(A.aaR(
A.acf.Date));this.Gj.L(A.jb.Bm);this.Lm.H(AYp);this.Lm.A6(0x11);this.Lm.L(A.jb.Bm
);this.Kp.H(AYq);this.Kp.L(A.jb.Bm);this.J(this.Gj,0);this.J(this.Lm,0);this.J(this.
Kp,0);this.Gj.S(A.aaL(A.fl.Af));this.Lm.S(A.aaL(A.fl.Af));this.Kp.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EA;this.Gj._Done();this.Lm.
_Done();this.Kp._Done();C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.
call(this);this.Gj._ReInit();this.Lm._ReInit();this.Kp._ReInit();this.Gj.R(A.aaR(
A.acf.Date));this.Gj.S(A.aaL(A.fl.Af));this.Lm.S(A.aaL(A.fl.Af));this.Kp.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.
Gj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHe={Mh:null,Hl:null,H9:null,AP:null,A_:null,FS:0,H$:0,AiK:false,Init:function(
aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hl.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hl.M[2]-1,0,this.Hl.M[2]+1,aSize[
1]]);this.Mh.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H9.H(this.Mh.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiK){this.H9.R(Rl);this.H9.L(A.jb.
Text);this.Mh.L(this.Background.AQ);}else{this.H9.R(A._GetAutoObject(A.Device.Converter
).S2(this.FS,2,true));this.H9.L(A._GetAutoObject(A.acj.DV).AzP(this.FS,this.H$));
this.Mh.L(A._GetAutoObject(A.acj.DV).AzN(this.FS,this.H$));}this.Hl.L(this.V.AQ);
},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var AlA=this.AX.HF(
Ad,6);var Al8=this.AX.CE(Ad,8);if(this.Hn>0){var ByB=this.AX.HF(this.Hn-1,6);var
BA$=this.AX.CE(this.Hn-1,8);var LD=A._GetAutoObject(A.Device.Helper).MN(ByB,AlA);
if(!!LD){this.AiK=false;this.FS=A._GetAutoObject(A.acj.DV).Alx(LD,BA$,Al8);}else{
this.AiK=true;this.FS=0;}}else{this.AiK=true;this.FS=0;}this.T(A._GetAutoObject(
A.acj.KK).ACN(AlA));this.Hl.R(A._GetAutoObject(A.Device.Converter).Ak9(Al8));this.
H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mh={I:this},0);A.acg.Text.
_Init.call(this.Hl={I:this},0);A.acg.Text._Init.call(this.H9={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0);this.__proto__=
C.AHe;this.V.H(O4);this.Mh.H(As_);this.Hl.H(AIc);this.Hl.A6(0x12);this.Hl.R(Rj);
this.Hl.L(A.jb.Text);this.H9.H(AId);this.H9.R(Rj);this.H9.L(A.jb.Text);this.AP.H(
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
"Application::WeightListItem"};C.WeightListScreen={Bj:null,VX:null,AhM:null,SU:null
,KM:A.jV,CP:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LD=
A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LD){var FS=A._GetAutoObject(
A.acj.DV).Alx(LD,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdM=A.aaR(A.acf.Bg7);AdM=A._GetAutoObject(
A.Device.Helper).Nk(AdM,P6,A._GetAutoObject(A.Device.Converter).S2(FS,2,true));AdM=
A._GetAutoObject(A.Device.Helper).Nk(AdM,Ax9,A._GetAutoObject(A.acj.DV).Aax());this.
SU.R(AdM);this.AhM.L(A._GetAutoObject(A.acj.DV).AzN(FS,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SU.L(A._GetAutoObject(A.acj.DV).AzP(FS,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SU.R(A.aaR(A.acf.AVC));this.AhM.L(A.jb.
AQR);this.SU.L(A.jb.Text);}},CF:function(G){var Fs=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fs.CW(HV);var Ac9=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac9.Initialize(8,2,0,true);Fs.CW(Ac9);A._GetAutoObject(A.Device.Device).Bt.Bl(
Fs);this.Axv(this);},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bl(null
);},Axv:function(G){this.Bj=A._NewObject(C.F$,0);this.Bj.NZ(C.AHe);this.Bj.H(Ayj
);this.Bj.Zr(A._GetAutoObject(A.Device.Device).Bt);this.Bj.Dz(this.KM);this.J(this.
Bj,0);this.Bb(this.Bj);},Anp:function(G){A._GetAutoObject(C.A$).Fv();},Dz:function(
E){if(this.KM===E)return;this.KM=E;if(!!this.Bj)this.Bj.Dz(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADk._Init.call(this.VX={I:this},0);A.acg.AL._Init.
call(this.AhM={I:this},0);A.acg.Text._Init.call(this.SU={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cc);this.N.Z(true);this.Dq(C.IG);this.VX.H(
P7);this.KM=A.aaR(A.acf.Akl);this.AhM.AZ(0x1D);this.AhM.H(IR);this.SU.AZ(0x1D);this.
SU.H(IR);this.SU.A6(0x12);this.SU.R(Rj);this.J(this.VX,0);this.J(this.AhM,0);this.
J(this.SU,0);this.N.CB=[this,this.Anp];this.N.CY(A.aaL(A.ach.E2));this.SU.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.VX._Done();this.AhM._Done(
);this.SU._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.VX._ReInit();this.AhM._ReInit();this.SU._ReInit();this.Dz(A.aaR(A.acf.Akl
));this.SU.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SU
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Me={DO:null,Acz:null,ARu:11,Gu:0,A4P:true,ABO:false,IW:function(G){if(A._GetAutoObject(
A.Device.Device).An.Ca()>0)this.Jv(4);else A._GetAutoObject(A.Device.Device).A9(
30,true,A.jV,0,null);},CF:function(G){if(this.DO.AzY())this.DO.Ac7();else if((this.
Gu===2)&&A._GetAutoObject(A.Device.Helper).W.AqX())this.Jv(5);else this.Jv(1);},
E3:function(G){this.AK4();},Ev:function(G){this.Jv(0);A._GetAutoObject(C.A$).Fv(
);},BBN:function(){A._GetAutoObject(A.Device.Device).AhE();},AK4:function(){A._GetAutoObject(
A.Device.Device).An1();},A9r:function(E){if(this.ABO===E)return;this.ABO=E;A.abo([
this,this.Bkg,this.A9r],0);},Jv:function(E){var B;if(this.Gu===E)return;this.Gu=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkO();A.zX([this,this.AKu]
,[B=A._GetAutoObject(A.Device.Helper),B.Arv,B.AkE],0);A.z$([this,this.AAp],[B=this.
DO,B.Anw,B.Jv],0);this.BBN();}break;case 3:{A.z$([this,this.AKu],[B=A._GetAutoObject(
A.Device.Helper),B.Arv,B.AkE],0);this.AK4();this.BzL();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Asn();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4P)this.BBz();else this.BBC();}break;case 4:{A.z$([this,this.AKu],[B=A._GetAutoObject(
A.Device.Helper),B.Arv,B.AkE],0);this.AK4();A._GetAutoObject(A.Device.Helper).Asn(
);A.zX([this,this.BeI],[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyL],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARu);}break;case 5:this.Bf3();break;case
6:{A.zX([this,this.AAp],[B=this.DO,B.Anw,B.Jv],0);this.DO.Ac7();}break;case 0:{A.
z$([this,this.AKu],[B=A._GetAutoObject(A.Device.Helper),B.Arv,B.AkE],0);this.AK4(
);}break;default:throw new Error(Ayp);}A.abo([this,this.Anw,this.Bwd],0);},Bwd:function(
Aq){this.Jv(Aq);},AKu:function(G){if(!!A._GetAutoObject(A.Device.Helper).Uw){if(
this.Gu===1)this.Jv(3);else A.ab5("%s%e",AYr,this.Gu);}else A.ab5("%s",AIe);},BBz:
function(){A._GetAutoObject(A.Device.Device).A9(13,true,A._GetAutoObject(A.Device.
Helper).Ak5(A._GetAutoObject(A.Device.Helper).Uw.Id).toFixed(),0,[this,this.BzZ]
);},BzZ:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
At&&((At.PopupState===4)||(At.PopupState===3))){if(this.BcA(false))A._GetAutoObject(
C.A$).Cg(31);else{A._GetAutoObject(A.Device.Helper).AkO();this.Jv(1);}}else if(!
!At&&(At.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkO();this.Jv(1);}},
BcA:function(AiZ){if(A._GetAutoObject(A.Device.Device).An.Lh()){A._GetAutoObject(
A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.Device).An.HG().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gm();A._GetAutoObject(
A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.Q2(A._GetAutoObject(A.Device.Helper).Uw.Id);if(!!A._GetAutoObject(A.Device.
Helper).AhA){var AlK=A._GetAutoObject(A.Device.Helper).AhA.AOO();A._GetAutoObject(
A.Device.Helper).W.Ab5(AlK);A._GetAutoObject(A.Device.Helper).W.AnE(AlK);}if(A._GetAutoObject(
A.Device.Helper).AQ6(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Ne(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SA(A._GetAutoObject(A.Device.Helper).BgT(A._GetAutoObject(A.Device.
Device).Ags,A._GetAutoObject(A.Device.Helper).W));if(AiZ){A._GetAutoObject(A.Device.
Helper).W.Cq(A._GetAutoObject(A.Device.Device).An);var L6=A._GetAutoObject(A.Device.
Device).An.Lc(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SJ(L6);if(A._GetAutoObject(A.Device.Helper).Am6()){if(A._GetAutoObject(A.
Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abq(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Ags)A._GetAutoObject(
A.Device.Helper).A$F();}return true;},BzL:function(){if(!!A._GetAutoObject(A.Device.
Helper).Uw){var AJi=true;if(A._GetAutoObject(A.Device.Helper).Uw.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJi=A._GetAutoObject(A.Device.Helper).A7o(A._GetAutoObject(
A.Device.Helper).Uw.Id);if(!AJi&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.BcA(true);AJi=A._GetAutoObject(A.Device.Helper).A7o(A._GetAutoObject(A.
Device.Helper).Uw.Id);}}if(AJi)this.Jv(5);else this.Jv(2);}else{A.ab5("%s",AIe);
return;}},BeI:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARu){A.z$([this,this.BeI],[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyL
],0);if(A._GetAutoObject(A.Device.Helper).W.AqX())this.Jv(5);else this.Jv(1);}},
Bf3:function(){if(this.ABO===true)this.Jv(6);else A._GetAutoObject(C.A$).Cg(24);
},BBC:function(){A._GetAutoObject(A.Device.Device).A9(36,true,A.jV,0,[this,this.
BAP]);},BAP:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&((At.PopupState===4)||(At.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkO();this.Jv(1);}},AAp:function(G){if(!this.DO.Gu)this.Jv(1);},A23:function(G
){},Bwn:function(s){this.A23(s);},Bkg:function(){return this.ABO;},Anw:function(
){return this.Gu;},_Init:function(aArg){C.Q8._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acz={I:this},0);this.__proto__=C.Me;this.N.Z(true);this.Dq(C.AqY);this.
Number.H(AYs);this.Number.R(A.aaR(A.acf.A_8));this.Jc.H(AYt);this.IP.H(AYu);this.
Acz.H(AYv);this.Acz.R(AYw);this.Acz.L(A.jb.Text);this.J(this.Acz,0);this.N.CB=[this
,this.Ev];this.N.Ck=[this,this.Bwn];this.N.CY(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Acz.S(A.aaL(A.fl.Hr));this.DO=A._GetAutoObject(C.DO);},_Done:function(
){this.__proto__=C.Q8;this.Acz._Done();C.Q8._Done.call(this);},_ReInit:function(
){C.Q8._ReInit.call(this);this.Acz._ReInit();this.Number.R(A.aaR(A.acf.A_8));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q8._Mark.call(this,D);if((B=
this.DO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acz)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4C={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Apc:-1,Gu:0,BxO:function(){var BfI=false;
var Oi=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.
Device.Device).Bt.HG().toFixed(),0,null);else if(Oi){BfI=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axr(B1,5);B1.OnSetAppearance(3);B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axr(B1
,5);B1.OnSetAppearance(1);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.EM(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(BfI)A._GetAutoObject(A.Device.Helper).W.Ul(false);if(Oi)A.
_GetAutoObject(A.Device.Helper).W.AnV(false);else A._GetAutoObject(A.Device.Helper
).W.AnV(true);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A9(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A9(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BxQ:function(){A._GetAutoObject(
A.Device.Helper).W.AGz(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A9(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);else A._GetAutoObject(
A.Device.Device).A9(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);},Qh:function(ED){switch(ED){case 4:this.BxO();break;case
128:A._GetAutoObject(C.A$).Cg(7);break;case 16:A._GetAutoObject(C.A$).Cg(36);break;
case 1:A._GetAutoObject(C.A$).Cg(10);break;case 2:A._GetAutoObject(C.A$).Cg(11);
break;case 8:this.BxQ();break;case 64:A._GetAutoObject(C.A$).Cg(29);break;case 32:
A._GetAutoObject(C.A$).Cg(48);break;case 256:A._GetAutoObject(C.A$).Cg(21);break;
case 512:A._GetAutoObject(C.A$).Cg(30);break;case 1024:this.BzI();break;case 262144:
this.BB3();break;case 2048:this.Ac7();break;case 4096:this.Bcs(false);break;case
8192:this.BxP();break;case 16384:this.BzH();break;case 32768:this.Byd();break;case
524288:this.Bye();break;case 65536:this.ByE();break;case 131072:this.BBq();break;
case 0:break;default:throw new Error(AYx);}},BcC:function(ED,Bxj){var EQ=A._NewObject(
C.Wh,0);EQ.Ab3(false);EQ.Aj(true);EQ.AR=Bxj;EQ.Blo(ED);switch(ED){case 1:{EQ.T(A.
aaR(A.acf.An3));EQ.DB(A.aaL(A.ach.ALH));}break;case 2:{EQ.T(A.aaR(A.acf.A_R));EQ.
DB(A.aaL(A.ach.ALI));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DB(A.aaL(A.ach.ALJ
));EQ.AFv(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asa));EQ.DB(A.aaL(A.ach.ALK));EQ.
AFv(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMg));EQ.DB(A.aaL(A.ach.ALL));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DB(A.aaL(A.ach.ALM));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DB(A.aaL(A.ach.ALN));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DB(A.aaL(A.ach.ALO));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DB(A._GetAutoObject(A.acj.DV).Bzh());}break;case 512:{EQ.T(A.aaR(A.acf.ART));
EQ.DB(A.aaL(A.ach.ALz));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DB(A.aaL(A.ach.ALA));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DB(A.aaL(A.ach.ALG));}break;case 2048:{EQ.T(A.aaR(A.acf.Tt));EQ.DB(A.aaL(A.ach.ALB
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DB(A.aaL(A.ach.ALC));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DB(A.aaL(A.ach.ALD));EQ.AFv(true);}break;case
16384:{EQ.T(A.aaR(A.acf.Bh7));EQ.DB(A.aaL(A.ach.ALE));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bof));EQ.DB(A.aaL(A.ach.ALF));}break;default:A.ab5("%s",(AYy+ED.toFixed(
))+AYz);}return EQ;},ByR:function(){this.Apc=this.Apc+1;if(this.Apc>=this.AutoActions.
NP())this.Jv(0);else this.Jv(2);},BBd:function(){this.Apc=-1;},AzY:function(){return(
this.Apc>-1)&&!this.BzB();},BzB:function(){return this.Apc>=this.AutoActions.NP(
);},Jv:function(E){if(this.Gu===E)return;this.Gu=E;switch(E){case 1:this.ByR();break;
case 2:{var Aao=this.AutoActions.OD(this.Apc);if(this.A4z(A._GetAutoObject(A.Device.
Helper).W,Aao))this.Qh(Aao);else A._GetAutoObject(A.Device.Device).A9(64,true,(this.
ActionToString.Lt(Aao)+As8)+this.AnimalTypeToString.Lt(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MT]);}break;case 0:this.BBd();break;default:throw new
Error(Ayp);}A.abo([this,this.Anw,this.Jv],0);},MT:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;if((At.Id===63)&&(At.PopupState===7))this.
Bcs(true);if((At.Id===32)&&(At.PopupState===7))A._GetAutoObject(C.A$).Cg(45);if((((
At.PopupState===4)||(At.PopupState===3))||(At.PopupState===8))&&this.AzY())this.
Jv(1);},Bcu:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.Lc(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BzI:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A$).Cg(
45);else A._GetAutoObject(A.Device.Device).A9(32,true,A.jV,0,[this,this.MT]);},Ac7:
function(){this.Jv(1);},BBb:function(){var Oi=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oi&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device
).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gm();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axr(B1,5);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.EM(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Ul(false);if(Oi)A._GetAutoObject(
A.Device.Helper).W.AnV(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A9(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BBc:function(){A._GetAutoObject(
A.Device.Helper).W.AGz(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A9(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bcs:function(ByV){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(ByV===false))A._GetAutoObject(A.Device.
Device).A9(63,true,A.jV,0,[this,this.MT]);else A._GetAutoObject(C.A$).Cg(54);},BxP:
function(){A._GetAutoObject(A.Device.Helper).W.ArT(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A9(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A9(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BzH:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A$).Cg(81);else A._GetAutoObject(A.
Device.Device).A9(69,true,A.jV,0,[this,this.MT]);},Byd:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ahl(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A9(65,true,A.jV,2000,[this,this.MT
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae2(false);A._GetAutoObject(A.Device.
Helper).W.Cq(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).A9(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);}}},ByE:function(){A._GetAutoObject(A.Device.Helper).W.Ahl(false);A._GetAutoObject(
A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ahl(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A9(65,true,A.jV,2000,[this,this.MT
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A9(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);else A._GetAutoObject(A.Device.Device).A9(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},A4z:function(Et,ED
){var Qr=false;switch(ED){case 32768:Qr=Et.IsRegistrationNoticePending&&!!Et.NaisIdMother;
break;case 524288:Qr=Et.IsRegistrationNoticePending&&!Et.NaisIdMother;break;case
4096:case 8192:switch(Et.AnimalType){case 1:Qr=true;break;default:;}break;case 512:
switch(Et.AnimalType){case 0:Qr=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qr=true;break;default:A.ab5("%s",AYA+
ED.toFixed());}return Qr;},BBq:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A$).Cg(80);else A._GetAutoObject(A.Device.Device).A9(
69,true,A.jV,0,[this,this.MT]);},BB3:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A9(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MT]);else{A._GetAutoObject(A.
Device.Helper).W.Q2(0);A._GetAutoObject(A.Device.Helper).W.SA(A._GetAutoObject(A.
Device.Helper).A4Q(A._GetAutoObject(A.Device.Device).An8,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).A9(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MT]);}},Bye:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae2(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A9(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},Anw:function(){return this.
Gu;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.A4C;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALT={Aa1:null,Aqk:null,Jv:function(E){if(this.Gu===E)return;C.Me.Jv.call(this
,E);switch(E){case 1:this.Dq(C.AqY);break;case 5:case 6:this.Dq(C.IG);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayp);}},A23:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Me._Init.call(this
,aArg);A.acg.Text._Init.call(this.Aa1={I:this},0);C.ALU._Init.call(this.Aqk={I:this
},0);this.__proto__=C.ALT;this.A9r(true);this.Aa1.H(AYB);this.Aa1.R(A.aaR(A.acf.
Tt));this.Aa1.L(A.jb.Text);this.Aqk.H(AYC);this.J(this.Aa1,0);this.J(this.Aqk,0);
this.N.Cs(A.aaL(A.ach.AbC));this.Aa1.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Me;this.Aa1._Done();this.Aqk._Done();C.Me._Done.call(this);},_ReInit:function(
){C.Me._ReInit.call(this);this.Aa1._ReInit();this.Aqk._ReInit();this.Aa1.R(A.aaR(
A.acf.Tt));this.Aa1.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Me._Mark.call(
this,D);if((B=this.Aa1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqk)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
H_:null,JY:null,A23:function(G){if(this.H_.NU(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Me._Init.call(this,aArg);A.acg.Text._Init.call(this.
JY={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JY.H(AYD);this.JY.KS(
true);this.JY.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABC));this.
JY.L(A.jb.Text);this.J(this.JY,0);this.N.Cs(A.aaL(A.ach.AbC));this.JY.S(A.aaL(A.
fl.Af));this.H_=A._GetAutoObject(C.Ph);},_Done:function(){this.__proto__=C.Me;this.
JY._Done();C.Me._Done.call(this);},_ReInit:function(){C.Me._ReInit.call(this);this.
JY._ReInit();this.JY.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABC
));this.JY.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Me._Mark.call(this,D);if((
B=this.H_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JY)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALU={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABn],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Auu],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABn],this);
A.pe([this,this.Auu],this);this.H(A.abK(this.M,AYE));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYF)));},Bci:function(G){var B;var Aly=0;var Azp=0;
var Bcy;var X=this.Y.Ah;var Cx=null;Bcy=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NP()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.Wh.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cx){Cx.H(A.abK(Cx.M,AYG));Cx.H(A.abM(Cx.M
,(Azp*58)+Bcy));Cx.H(A.abO(Cx.M,Aly*58));if(Azp>=3){Aly=Aly+1;Azp=0;}else Azp=Azp+
1;}X=X.Ah;}this.Bb(null);},A1r:function(ED){var EQ=A._GetAutoObject(C.DO).BcC(ED
,null);this.J(EQ,0);this.Bci(this);},Ao3:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===0x400))this.HN(
AdK);}},ABn:function(G){this.Ao3();var O;var CD=A._GetAutoObject(C.AutoActions).
NP();for(O=0;O<CD;O=O+1){var Aao=A._GetAutoObject(C.AutoActions).OD(O);this.A1r(
Aao);}A.pe([this,this.Bci],this);A.pe([this,this.Auu],this);A.pe([this,this.BCb]
,this);},Auu:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)
){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(X)?X:null);Aa.AFv(false);
}X=X.Ah;}},BCb:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(X)?X:null);var Bx5=A._GetAutoObject(
C.AutoActions).NP();if(!!Aa){var O;Aa.A9n(false);for(O=0;O<Bx5;O=O+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OD(O)){Aa.A9n(true);Aa.Bmw(AYH+(O+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.ALU;this.Y.JP(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Y._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DO={_Init:function(
){C.A4C._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APx={Ll:null,T3:null,Init:function(aArg){this.Ll.R(A._GetAutoObject(
A.acj.Temperature).AlJ());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.
Text._Init.call(this.Ll={I:this},0);C.CH._Init.call(this.T3={I:this},0);this.__proto__=
C.APx;this.Ll.H(AYI);this.Ll.A6(0x12);this.Ll.L(A.jb.Text);this.T3.H(Aou);this.T3.
R((A.aaR(A.acf.Ahd)+AIf)+A.aaR(A.acf.Ki));this.T3.A6(0x12);this.T3.L(A.jb.Text);
this.J(this.Ll,0);this.J(this.T3,0);this.Ll.S(A.aaL(A.fl.Af));this.T3.S(A.aaL(A.
fl.Ak));this.T3.A2(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dc;this.Ll._Done();this.T3._Done();C.Dc._Done.call(this);},_ReInit:function(){
C.Dc._ReInit.call(this);this.Ll._ReInit();this.T3._ReInit();this.T3.R((A.aaR(A.acf.
Ahd)+AIf)+A.aaR(A.acf.Ki));this.Ll.S(A.aaL(A.fl.Af));this.T3.S(A.aaL(A.fl.Ak));this.
T3.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.
Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ADi={Jt:null,DZ:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.call(this.Jt={I:this}
,0);A.acg.Text._Init.call(this.DZ={I:this},0);this.__proto__=C.ADi;this.Jt.H(AYJ
);this.Jt.KS(true);this.Jt.A6(0x14);this.Jt.R(A.aaR(A.acf.AhL)+AIg);this.Jt.L(A.
jb.Text);this.DZ.H(Aou);this.DZ.KS(true);this.DZ.R(A.aaR(A.acf.AF4));this.DZ.L(A.
jb.Text);this.J(this.Jt,0);this.J(this.DZ,0);this.Jt.S(A.aaL(A.fl.Ak));this.DZ.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dc;this.Jt._Done();this.DZ._Done(
);C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Jt._ReInit(
);this.DZ._ReInit();this.Jt.R(A.aaR(A.acf.AhL)+AIg);this.DZ.R(A.aaR(A.acf.AF4));
this.Jt.S(A.aaL(A.fl.Ak));this.DZ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DZ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TS={I6:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.
I6={I:this},0);this.__proto__=C.TS;this.I6.H(AIh);this.I6.R((((A.aaR(A.acf.RJ)+Aah
)+AIi)+A.aaR(A.acf.A$T))+Oa);this.I6.A6(0x12);this.I6.L(A.jb.Text);this.J(this.I6
,0);this.I6.S(A.aaL(A.fl.Af));this.I6.A2(A.aaL(A.fl.Ak));this.I6.Cu(A.aaL(A.fl.Bh
));},_Done:function(){this.__proto__=C.Dc;this.I6._Done();C.Dc._Done.call(this);
},_ReInit:function(){C.Dc._ReInit.call(this);this.I6._ReInit();this.I6.R((((A.aaR(
A.acf.RJ)+Aah)+AIi)+A.aaR(A.acf.A$T))+Oa);this.I6.S(A.aaL(A.fl.Af));this.I6.A2(A.
aaL(A.fl.Ak));this.I6.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(
this,D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APz={Lm:null,Kp:null,CP:function(){this.A__();},Init:function(aArg){this.A__(
);},A__:function(){this.Lm.R(A._GetAutoObject(A.acj.DV).AfZ());this.Kp.R(A._GetAutoObject(
A.acj.DV).Aax());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lm={I:this},0);C.CH._Init.call(this.Kp={I:this},0);this.__proto__=C.APz;
this.Lm.H(AYK);this.Lm.A6(0x12);this.Lm.L(A.jb.Text);this.Kp.H(Aou);this.Kp.L(A.
jb.Text);this.J(this.Lm,0);this.J(this.Kp,0);this.Lm.S(A.aaL(A.fl.Af));this.Kp.S(
A.aaL(A.fl.Af));this.Kp.A2(A.aaL(A.fl.Ak));this.Kp.Cu(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dc;this.Lm._Done();this.Kp._Done();C.Dc.
_Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Lm._ReInit();
this.Kp._ReInit();this.Lm.S(A.aaL(A.fl.Af));this.Kp.S(A.aaL(A.fl.Af));this.Kp.A2(
A.aaL(A.fl.Ak));this.Kp.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kp
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AM8={Mh:null,Hl:null,H9:null,AP:null,A_:null,FS:0,AaD:0,H$:0,AiK:false,Init:function(
aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hl.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hl.M[2]-1,0,this.Hl.M[2]+1,aSize[
1]]);this.Mh.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H9.H(this.Mh.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiK){this.H9.R(Rl);this.H9.L(A.jb.
Text);this.Mh.L(this.Background.AQ);}else{this.H9.R(A._GetAutoObject(A.Device.Converter
).S2(this.FS,2,true));this.H9.L(A._GetAutoObject(A.acj.DV).AzP(this.FS,this.H$));
this.Mh.L(A._GetAutoObject(A.acj.DV).AzN(this.FS,this.H$));}if(this.AaD>0)this.Hl.
R(A._GetAutoObject(A.Device.Converter).Ak9(this.AaD));else this.Hl.R(Rl);this.Hl.
L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Md=
this.AX.CE(Ad,1);var Aup=this.AX.HF(Ad,24);var AJ4=this.AX.CE(Ad,23);var Auq=this.
AX.HF(Ad,19);this.AaD=this.AX.CE(Ad,18);if((Aup>0)&&(Aup!==Auq)){var LD=A._GetAutoObject(
A.Device.Helper).MN(Aup,Auq);if(!!LD){this.AiK=false;this.FS=A._GetAutoObject(A.
acj.DV).Alx(LD,AJ4,this.AaD);}else{this.AiK=true;this.FS=0;}}else{this.AiK=true;
this.FS=0;}this.T(Md.toFixed());this.H$=this.AX.AmU(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mh={I:this},0);A.acg.Text.
_Init.call(this.Hl={I:this},0);A.acg.Text._Init.call(this.H9={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0);this.__proto__=
C.AM8;this.V.H(O4);this.Mh.H(As_);this.Hl.H(AIc);this.Hl.A6(0x12);this.Hl.R(Rj);
this.Hl.L(A.jb.Text);this.H9.H(AId);this.H9.R(Rj);this.H9.L(A.jb.Text);this.AP.H(
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
"Application::CalfListWeightItem"};C.M2={Mg:null,AP:null,A_:null,Gv:null,Xm:0,Init:
function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Mg.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mg.M);this.Background.H([].concat(this.Mg.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gv.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A_.H([this.Gv.M[2]-1,0,this.
Gv.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gv.L(this.V.AQ
);if(!!this.Xm&&(this.Xm!==5)){this.Mg.L(A._GetAutoObject(A.acj.Assessment).Qj(this.
Xm));this.V.L(A._GetAutoObject(A.acj.Assessment).Xv(this.Xm));}else this.Mg.L(this.
Background.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var
Md=this.AX.CE(Ad,1);var LQ=this.AX.I2(Ad,13);var AlE=this.AX.I2(Ad,17);var AlN=this.
AX.H1(Ad,11);var Ay9=this.AX.HF(Ad,4);var AfM=A._GetAutoObject(A.Device.Helper).
MN(Ay9,A._GetAutoObject(A.Device.Helper).Dv());this.Xm=A._GetAutoObject(A.Device.
Helper).AMd(LQ,AlN,AlE);this.T(Md.toFixed());if(AfM<100)this.Gv.R((AfM.toFixed()+
CQ)+A.aaR(A.acf.ALS));else this.Gv.R(A._GetAutoObject(A.acj.KK).ACO(Ay9,A._GetAutoObject(
A.Device.Helper).Dv(),AIj));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Mg={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.Gv={I:this
},0);this.__proto__=C.M2;this.Mg.H(As_);this.Background.H(AYL);this.V.H(O4);this.
AP.H(Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.A_.L(A.jb.Bc);this.Gv.H(Ayq);this.
J(this.Mg,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Gv,0);this.Gv.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mg._Done(
);this.AP._Done();this.A_._Done();this.Gv._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mg._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.Gv._ReInit();this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AM6={Ajx:null,N8:null,AP:null,A_:null,Jo:null,AKn:0,A2q:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N8.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajx.H(this.N8.M);this.A_.H([this.N8.M[2]-1,0,this.N8.M[2]+1,aSize[1]]);
this.Jo.H([this.N8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jo.De(this.V.AQ);if(this.AKn>0){this.Ajx.L(A._GetAutoObject(A.acj.Assessment
).Qj(this.A2q));this.N8.L(A._GetAutoObject(A.acj.Assessment).Xv(this.A2q));}else{
this.Ajx.L(this.Background.AQ);this.N8.L(this.V.AQ);}},Ce:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){var Ic=this.AX.CE(Ad,0);var Md=this.AX.CE(Ad,
1);this.AKn=this.AX.CE(Ad,5);this.A2q=this.AX.I2(Ad,17);this.T(Md.toFixed());if(
this.AKn>0)this.N8.R(A._GetAutoObject(A.Device.Converter).Ak0(this.AKn));else this.
N8.R(Rl);var Xl=A._GetAutoObject(A.Device.Helper).ZP(6);A._GetAutoObject(A.Device.
Device).SJ(Ad);var A0B=A._GetAutoObject(A.Device.Helper).Biv(A._GetAutoObject(A.
Device.Device).Bt,9,Ic,Xl,0);this.Jo.A9F(A0B.Get(3));this.Jo.A9H(A0B.Get(2));this.
Jo.A9G(A0B.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.Ajx={I:this},0);A.acg.Text._Init.call(this.N8={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},
0);C.Jo._Init.call(this.Jo={I:this},0);this.__proto__=C.AM6;this.N8.A6(0x12);this.
N8.R(Rj);this.N8.L(A.jb.Text);this.AP.H(Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.
A_.L(A.jb.Bc);this.Jo.H(AYM);this.J(this.Ajx,0);this.J(this.N8,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jo,0);this.N8.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ajx._Done();this.N8._Done();this.AP.
_Done();this.A_._Done();this.Jo._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ajx._ReInit();this.N8._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jo._ReInit();this.N8.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jo)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jo={Afm:null,
ColoredCounterAttrSet:null,ACe:0,ACf:0,ACd:0,KT:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKe;var ALy;var AKK;var AlV=0;if(this.ACd>0){AKe=this.ACd.toFixed(
);AlV+=AKe.length;}else{AKe=AYN;AlV++;}if(this.ACf>0){ALy=this.ACf.toFixed();AlV+=
ALy.length;}else{ALy=Ayr;AlV++;}if(this.ACe>0){AKK=this.ACe.toFixed();AlV+=AKK.length;
}else{AKK=AH9;AlV++;}if(AlV<=4)this.ColoredCounterAttrSet.Ahj(A.aaL(A.fl.Af));else
if(AlV<=5)this.ColoredCounterAttrSet.Ahj(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahj(A.aaL(A.fl.Bh));this.Afm.R(((((AYO+AKe)+AYP)+ALy)+AYQ)+AKK);},A9G:function(E
){if(this.ACe===E)return;this.ACe=E;this.Am();},A9H:function(E){if(this.ACf===E)
return;this.ACf=E;this.Am();},A9F:function(E){if(this.ACd===E)return;this.ACd=E;
this.Am();},De:function(E){if(this.KT===E)return;this.KT=E;this.ColoredCounterAttrSet.
Ahg(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuM._Init.call(
this.Afm={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jo;this.H(AIk);this.Afm.AZ(0x3F);this.Afm.H(AIk);this.
Afm.R(Rj);this.ColoredCounterAttrSet.BlA(A.jb.E1);this.ColoredCounterAttrSet.A9w(
A.jb.H6);this.ColoredCounterAttrSet.A9v(A.jb.Gf);this.ColoredCounterAttrSet.Ahg(
A.jb.Text);this.KT=A.jb.Text;this.J(this.Afm,0);this.Afm.A9q(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahj(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9s(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afm._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afm._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahj(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AM5={AtC:null
,Acc:null,Acd:null,Ace:null,Jo:null,AP:null,A_:null,Ea:null,Ls:null,AcB:null,KU:
null,KV:null,AJp:0,AJo:0,AJn:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acc.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcB.H(this.
Acc.M);this.A_.H([this.Acc.M[2]-1,0,this.Acc.M[2]+1,aSize[1]]);this.Acd.H([this.
Acc.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KU.H(this.Acd.M);this.Ea.H([this.
Acd.M[2]-1,0,this.Acd.M[2]+1,aSize[1]]);this.Ace.H([this.Acd.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KV.H(this.Ace.M);this.Ls.H([this.Ace.M[2]-1,0,this.Ace.
M[2]+1,aSize[1]]);this.Jo.H([this.Ace.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jo.De(this.V.AQ);this.Acc.L(A._GetAutoObject(A.acj.
Assessment).Qj(this.AJn));this.Acd.L(A._GetAutoObject(A.acj.Assessment).Qj(this.
AJo));this.Ace.L(A._GetAutoObject(A.acj.Assessment).Qj(this.AJp));this.AcB.L(A._GetAutoObject(
A.acj.Assessment).Xv(this.AJn));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xv(
this.AJo));this.KV.L(A._GetAutoObject(A.acj.Assessment).Xv(this.AJp));this.AcB.Z(
!this.AJn);this.KU.Z(!this.AJo);this.KV.Z(!this.AJp);this.Jo.A9F(this.AtC.Get(3)
);this.Jo.A9H(this.AtC.Get(2));this.Jo.A9G(this.AtC.Get(1));},Ce:function(Ad){if(
!this.AX)return;this.Hn=Ad;if(!!this.AX){var Ic=this.AX.CE(Ad,0);var Md=this.AX.
CE(Ad,1);this.T(Md.toFixed());A._GetAutoObject(A.Device.Device).SJ(Ad);this.AJn=
A._GetAutoObject(A.Device.Helper).A14(A._GetAutoObject(A.Device.Device).Bt,Ic,0);
this.AJo=A._GetAutoObject(A.Device.Helper).A14(A._GetAutoObject(A.Device.Device).
Bt,Ic,-1);this.AJp=A._GetAutoObject(A.Device.Helper).A14(A._GetAutoObject(A.Device.
Device).Bt,Ic,-2);this.AtC=A._GetAutoObject(A.Device.Helper).A6v(A._GetAutoObject(
A.Device.Device).Bt,Ic,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Acc={I:this},0);A.acg.AL._Init.call(this.Acd={I:
this},0);A.acg.AL._Init.call(this.Ace={I:this},0);C.Jo._Init.call(this.Jo={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this
},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.Ls={I:this
},0);A.acg.Text._Init.call(this.AcB={I:this},0);A.acg.Text._Init.call(this.KU={I:
this},0);A.acg.Text._Init.call(this.KV={I:this},0);this.__proto__=C.AM5;this.AP.
L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Ls.L(A.jb.Bc);this.AcB.R(Aov
);this.KU.R(Aov);this.KV.R(Aov);this.J(this.Acc,0);this.J(this.Acd,0);this.J(this.
Ace,0);this.J(this.Jo,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.
J(this.Ls,0);this.J(this.AcB,0);this.J(this.KU,0);this.J(this.KV,0);this.AcB.S(A.
aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.AtC=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acc._Done();this.Acd._Done();this.Ace._Done();this.Jo._Done();this.AP.
_Done();this.A_._Done();this.Ea._Done();this.Ls._Done();this.AcB._Done();this.KU.
_Done();this.KV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acc._ReInit();this.Acd._ReInit();this.Ace._ReInit();this.Jo._ReInit(
);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Ls._ReInit();this.AcB.
_ReInit();this.KU._ReInit();this.KV._ReInit();this.AcB.S(A.aaL(A.fl.Af));this.KU.
S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmX={H4:null,Af0:false,Bk:function(aSize){var
B;this.H4.H([(aSize[0]-((B=this.H4.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H4.M[0]-10,40]);C.TD.Bk.call(this,aSize);},Ai:function(Ae){C.TD.Ai.call(
this,Ae);if(this.Af0)this.H4.Cv(1);else this.H4.Cv(0);},J$:function(G){if(this.Af0
)C.TD.J$.call(this,G);},J6:function(G){if(this.Af0)C.TD.J6.call(this,G);},To:function(
AH){C.TD.To.call(this,AH);if(!!AH){this.H(A.abI(this.M,80));this.Af0=true;this.Zw(
true);}else{this.H(A.abI(this.M,40));this.Af0=false;this.Zw(false);}},_Init:function(
aArg){C.TD._Init.call(this,aArg);A.acg.Ap._Init.call(this.H4={I:this},0);this.__proto__=
C.AmX;this.V.A6(0x11);this.H4.H(AHG);this.H4.Cv(0);this.J(this.H4,0);this.V.Cu(A.
aaL(A.fl.Bh));this.H4.Aw(A.aaL(A.ach.AqN));},_Done:function(){this.__proto__=C.TD;
this.H4._Done();C.TD._Done.call(this);},_ReInit:function(){C.TD._ReInit.call(this
);this.H4._ReInit();this.V.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TD._Mark.
call(this,D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AF3={_Init:function(aArg){C.Axi._Init.call(this,aArg);this.__proto__=C.AF3;}
,_className:"Application::OptionsOverlaySeparator"};C.AkH={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axi._Init.call(this,aArg);this.__proto__=C.AkH;},_className:"Application::OptionsOverlayNode"
};C.Zy={AR:null,_Init:function(aArg){C.AkH._Init.call(this,aArg);this.__proto__=
C.Zy;},_Mark:function(D){var B;C.AkH._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANz={Ai:function(Ae){C.OV.Ai.call(this,Ae);var FN=A.jb.CK;var GQ=A.jb.Text;if(
this.Hf){FN=A.jb.Text;GQ=A.jb.Bm;}this.Background.L(FN);this.V.L(GQ);},_Init:function(
aArg){C.OV._Init.call(this,aArg);this.__proto__=C.ANz;},_className:"Application::DarkThemeTextItem"
};C.OV={Background:null,BU:null,V:null,Aqu:0,Hf:false,Init:function(aArg){},Bk:function(
aSize){C.Hc.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BU.H(A.abK(this.BU.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hc.Ai.call(this,Ae);this.BU.L(this.Aqu);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bg:function(E){if(this.Hf===E)return;this.Hf=E;this.Am();
},ArJ:function(E){if(this.Aqu===E)return;this.Aqu=E;this.Am();},_Init:function(aArg
){C.Hc._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);C.CH._Init.call(this.V={I:this},0);this.__proto__=
C.OV;this.H(BF);this.Background.H(AIl);this.BU.H(BF);this.BU.Nh(2);this.BU.L(A.jb.
Re);this.V.H(AYR);this.Aqu=A.jb.Re;this.J(this.Background,0);this.J(this.BU,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hc;this.Background._Done(
);this.BU._Done();this.V._Done();C.Hc._Done.call(this);},_ReInit:function(){C.Hc.
_ReInit.call(this);this.Background._ReInit();this.BU._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hc._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APC={Eq:null,IK:null
,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.Eq={
I:this},0);A.acg.Text._Init.call(this.IK={I:this},0);this.__proto__=C.APC;this.H(
O3);this.Background.H(O3);this.Eq.H(Ays);this.Eq.R(A.aaR(A.acf.GJ));this.Eq.A6(0x11
);this.Eq.L(A.jb.Text);this.IK.AZ(0x3F);this.IK.H(AIm);this.IK.Hh(5);this.IK.A6(
0x14);this.IK.R(A.aaR(A.acf.AGM));this.IK.L(A.jb.Text);this.J(this.Eq,0);this.J(
this.IK,0);this.Eq.S(A.aaL(A.fl.Af));this.IK.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EA;this.Eq._Done();this.IK._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Eq._ReInit();this.IK._ReInit();this.Eq.R(
A.aaR(A.acf.GJ));this.IK.R(A.aaR(A.acf.AGM));this.Eq.S(A.aaL(A.fl.Af));this.IK.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Eq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sj:null,Sk:null,AeA:null,AgY:null,QG:null
,KT:0,LastTemperature:0,AqA:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sj.Aw(A.aaL(A.ach.AvC));this.Sk.Aw(A.aaL(A.ach.AvC));}break;case 2:{this.Sj.Aw(A.
aaL(A.ach.AvF));this.Sk.Aw(A.aaL(A.ach.AvF));}break;default:{this.Sj.Aw(A.aaL(A.
ach.Aev));this.Sk.Aw(A.aaL(A.ach.Aev));}}this.Sj.L(A._GetAutoObject(A.acj.Assessment
).Qj(this.AqA));var ApO;if(this.IsWatch)ApO=A.aaL(A.ach.AQz);else if(this.IsFever
){ApO=A.aaL(A.ach.AQy);switch(A._GetAutoObject(A.Device.Converter).Ajl(this.LastTemperature
,this.AnimalType)){case 3:this.QG.L(A.jb.Gf);break;case 2:this.QG.L(A.jb.H6);break;
case 1:this.QG.L(A.jb.E1);break;case 0:this.QG.L(A.jb.Afq);break;default:;}}else
if(this.IsAlarm){ApO=A.aaL(A.ach.AQx);if(!this.AqA||(this.AqA===5))this.QG.L(A.jb.
Gf);else this.QG.L(0xFF000000);}else ApO=null;this.AeA.Aw(ApO);this.AgY.Aw(ApO);
this.QG.Aw(ApO);if(A._GetAutoObject(A.acj.Assessment).Qj(this.AqA)===A.jb.E1)this.
Sk.L(this.KT);},EB:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AEZ:function(E){if(this.AqA===E)return;this.AqA=E;this.Am();},De:function(
E){if(this.KT===E)return;this.KT=E;this.Am();},Ae3:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Ul:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae0:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae5:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},Hi:function(){this.EB(0);this.AEZ(0);this.Ae0(false);this.Ul(false
);this.Ae3(false);this.Ae5(0);this.De(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sj={I:this},0);A.acg.Ap._Init.call(
this.Sk={I:this},0);A.acg.Ap._Init.call(this.AeA={I:this},0);A.acg.Ap._Init.call(
this.AgY={I:this},0);A.acg.Ap._Init.call(this.QG={I:this},0);this.__proto__=C.DS;
this.H(AhY);this.Sj.AZ(0x3F);this.Sj.H(AhY);this.Sj.L(A.jb.CK);this.Sj.A6(0x12);
this.Sj.Cv(0);this.Sk.AZ(0x3F);this.Sk.H(AhY);this.Sk.L(0xFF000000);this.Sk.A6(0x12
);this.Sk.Cv(1);this.AeA.AZ(0x3F);this.AeA.H(AhY);this.AeA.L(0xFF000000);this.AeA.
Cv(0);this.AgY.AZ(0x3F);this.AgY.H(AhY);this.AgY.Cv(1);this.QG.AZ(0x3F);this.QG.
H(AhY);this.QG.L(A.jb.CS);this.QG.Cv(2);this.KT=A.jb.Text;this.J(this.Sj,0);this.
J(this.Sk,0);this.J(this.AeA,0);this.J(this.AgY,0);this.J(this.QG,0);this.Sj.Aw(
A.aaL(A.ach.Aev));this.Sk.Aw(A.aaL(A.ach.Aev));},_Done:function(){this.__proto__=
A.Core.P;this.Sj._Done();this.Sk._Done();this.AeA._Done();this.AgY._Done();this.
QG._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sj._ReInit();this.Sk._ReInit();this.AeA._ReInit();this.AgY._ReInit();
this.QG._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AM2={Ce:function(Ad){C.AjA.Ce.call(this,Ad);if(!!this.AX){var BzF=this.AX.H1(
Ad,12);var BxX=this.AX.Sf(Ad,15);this.Abf.R(A._GetAutoObject(A.Device.Helper).MN(
BxX,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Sl.Z(BzF);this.Am();
}},_Init:function(aArg){C.AjA._Init.call(this,aArg);this.__proto__=C.AM2;},_className:
"Application::CalfListAlarmItem"};C.ADe={DZ:null,Mp:null,_Init:function(aArg){C.
TT._Init.call(this,aArg);A.acg.Text._Init.call(this.DZ={I:this},0);A.acg.Ap._Init.
call(this.Mp={I:this},0);this.__proto__=C.ADe;this.DZ.H(Aou);this.DZ.KS(true);this.
DZ.R(A.aaR(A.acf.A5G));this.DZ.L(A.jb.Text);this.Mp.H(AYS);this.Mp.I7(false);this.
Mp.L(A.jb.Text);this.Mp.A6(0x12);this.J(this.DZ,-2);this.J(this.Mp,0);this.DZ.S(
A.aaL(A.fl.Ak));this.Mp.Aw(A.aaL(A.ach.ADF));},_Done:function(){this.__proto__=C.
TT;this.DZ._Done();this.Mp._Done();C.TT._Done.call(this);},_ReInit:function(){C.
TT._ReInit.call(this);this.DZ._ReInit();this.Mp._ReInit();this.DZ.R(A.aaR(A.acf.
A5G));this.DZ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TT._Mark.call(this,D
);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kh={Background:null,BU:
null,ACG:0,ABU:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACG);this.BU.L(this.ABU);},AwE:function(E){if(this.ACG===E)return;this.ACG=E;this.
Am();},AER:function(E){if(this.ABU===E)return;this.ABU=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BU={I:this},0);this.__proto__=C.Kh;this.H(Aow);this.
Background.AZ(0x3C);this.Background.H(Aow);this.Background.Cv(1);this.BU.AZ(0x3C
);this.BU.H(Aow);this.ACG=A.jb.E1;this.ABU=A.jb.Text;this.J(this.Background,0);this.
J(this.BU,0);this.Background.Aw(A.aaL(A.ach.Kh));this.BU.Aw(A.aaL(A.ach.Kh));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BU._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmF={Q:null,Pm:
null,A6$:false,Bk:function(aSize){C.Ml.Bk.call(this,aSize);this.V.H([].concat(this.
Pm.M[2]-this.V.Text.I_,this.V.M.slice(1,4)));},Ai:function(Ae){C.Ml.Ai.call(this
,Ae);this.Pm.L(this.V.AQ);},AwJ:function(E){if(this.A6$===E)return;this.A6$=E;if(
E)this.Pm.R(AYT);else this.Pm.R(AIn);},Kd:function(G){var F;if(!!this.Q)this.AwJ((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,0);if(!!E)
A.pe([this,this.Kd],this);},_Init:function(aArg){C.Ml._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pm={I:this},0);this.__proto__=C.AmF;this.Pm.AZ(0x34);this.Pm.
H(UR);this.Pm.R(AIn);this.J(this.Pm,0);this.Pm.S(A.aaL(A.fl.AOv));},_Done:function(
){this.__proto__=C.Ml;this.Pm._Done();C.Ml._Done.call(this);},_ReInit:function(){
C.Ml._ReInit.call(this);this.Pm._ReInit();},_Mark:function(D){var B;C.Ml._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pm)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOU={D5:function(G){C.Km.D5.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter
).AdW(4));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.AOU;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Do:function(){return 3;},C4:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BI(aIndex);},DU:function(A7){return A7;},HH:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APD={Gj:null,Ll:null,YR:null,Init:function(aArg){this.Ll.R(A._GetAutoObject(
A.acj.Temperature).AlJ());},_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gj={I:this},0);A.acg.Text._Init.call(this.Ll={I:this},0);A.
acg.Text._Init.call(this.YR={I:this},0);this.__proto__=C.APD;this.Background.L(A.
jb.Text);this.Gj.H(AIo);this.Gj.A6(0x11);this.Gj.R(A.aaR(A.acf.Date));this.Gj.L(
A.jb.Bm);this.Ll.H(AYU);this.Ll.A6(0x12);this.Ll.L(A.jb.Bm);this.YR.H(AYV);this.
YR.A6(0x12);this.YR.R(A.aaR(A.acf.Bs));this.YR.L(A.jb.Bm);this.J(this.Gj,0);this.
J(this.Ll,0);this.J(this.YR,0);this.Gj.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af
));this.YR.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EA;this.Gj._Done();this.Ll._Done();this.YR._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Gj._ReInit();this.Ll._ReInit();this.YR._ReInit(
);this.Gj.R(A.aaR(A.acf.Date));this.YR.R(A.aaR(A.acf.Bs));this.Gj.S(A.aaL(A.fl.Af
));this.Ll.S(A.aaL(A.fl.Af));this.YR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EA._Mark.call(this,D);if((B=this.Gj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Tx={Lf:null,AjQ:false,Init:function(
aArg){var B;A.zX([this,this.Bbm],[B=A._GetAutoObject(A.Device.Device),B.AEq,B.AIH
],0);this.AGF(this);A.pe([this,this.AyM],this);},DE:function(G){var D4=(A.Core.BN.
isPrototypeOf(G)?G:null);switch(D4.CO){case 6:this.Om(this);break;case 7:this.MU(
this);break;default:D4.NH=true;}},CF:function(G){var B;if(!!this.Lf)this.Lf.CF(this
);C.AB.CF.call(this,G);},E3:function(G){var B;if(!!this.Lf)this.Lf.E3(this);C.AB.
E3.call(this,G);},Anp:function(G){A._GetAutoObject(C.A$).Fv();},AGF:function(G){
var B;if(!!this.Lf){this.Lf.E3(this);this.HN(this.Lf);}if(this.AjQ)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lf=A._NewObject(C.AMk,0);break;case 1:this.Lf=A.
_NewObject(C.AMl,0);break;case 3:this.Lf=A._NewObject(C.AMj,0);break;case 2:this.
Lf=A._NewObject(C.AMm,0);break;default:throw new Error(AIp);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lf=A._NewObject(C.AMn,0);break;case 1:this.Lf=A.
_NewObject(C.AMw,0);break;case 3:this.Lf=A._NewObject(C.AMq,0);break;case 2:this.
Lf=A._NewObject(C.AMB,0);break;default:throw new Error(AIp);}this.HO(this);this.
J(this.Lf,0);this.Lf.H(E$);this.Lf.Zt([this,this.A0n]);this.Lf.CF(this);this.Bb(
this.Lf);},Bbm:function(s){this.AGF(s);},ATD:function(G){A._GetAutoObject(A.Device.
Device).AeU(0);},ATF:function(G){A._GetAutoObject(A.Device.Device).AeU(1);},ATE:
function(G){A._GetAutoObject(A.Device.Device).AeU(3);},ATG:function(G){A._GetAutoObject(
A.Device.Device).AeU(2);},HO:function(G){this.N.CY(A.aaL(A.ach.E2));this.N.Hu(A.
jV);this.N.CB=[this,this.Anp];this.N.AE6(A.aaL(A.fl.Ak));},AyM:function(s){this.
HO(s);},Bmf:function(E){if(this.AjQ===E)return;this.AjQ=E;A.pe([this,this.Bbm],this
);},A_D:function(G){this.Bmf(!this.AjQ);},Bnt:function(G){A._GetAutoObject(A.Device.
Device).A9(31,true,A.jV,0,null);},MU:function(G){},BGa:function(s){this.MU(s);},
Om:function(G){},BF$:function(s){this.Om(s);},BeF:function(G){var FM=A._GetAutoObject(
A.Device.Device).D9;FM=FM+1;if(FM>=4)FM=0;A._GetAutoObject(A.Device.Device).AeU(
FM);},BAw:function(G){var FM=A._GetAutoObject(A.Device.Device).D9;FM=FM-1;if(FM<
0)FM=3;A._GetAutoObject(A.Device.Device).AeU(FM);},Af5:function(G){},A0n:function(
s){this.Af5(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Tx;this.Background.H(Cc);this.N.Z(true);this.N.OO(true);this.N.OP(true);this.Dq(
C.APs);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lf)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dm:null,CF:function(G){},AIG:function(s){this.CF(s);
},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bl(null);},AyC:function(s){
this.E3(s);},Zt:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dm.BO=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BN._Init.call(this.Dm={I:this},0);this.__proto__=
C.D9;this.H(UU);this.AttrSet.A9w(A.jb.Gf);this.AttrSet.A9v(A.jb.H6);this.AttrSet.
Ahg(A.jb.Text);this.Dm.Filter=1;this.AttrSet.Ahj(A.aaL(A.fl.Ak));this.AttrSet.A9s(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dm._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dm._ReInit();this.AttrSet.Ahj(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMn={RN:
null,AaW:null,Tw:null,Tv:null,RR:null,Qx:null,RS:null,RP:null,RQ:null,RO:null,CP:
function(){var B;this.RN.Ce(this);this.AaW.Ce(this);this.Tw.Ce(this);this.Tv.Ce(
this);this.RR.Ce(this);this.Qx.Ce(this);this.RS.Ce(this);this.RP.Ce(this);this.RQ.
Ce(this);this.RO.Ce(this);},GE:function(G){C.RT.GE.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RN.Z(true);this.AaW.Z(false);
this.RP.Z(false);this.RQ.Z(false);this.RO.Z(false);this.RR.Z(true);this.Qx.Z(true
);this.RS.Z(true);}break;case 1:{this.RN.Z(false);this.AaW.Z(true);this.RP.Z(true
);this.RQ.Z(true);this.RO.Z(true);this.RR.Z(false);this.Qx.Z(false);this.RS.Z(false
);}break;default:A.ab5("%s%e",Ale,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MO],this);},_Init:function(aArg){C.RT._Init.call(this,aArg);C.
RN._Init.call(this.RN={I:this},0);C.AMi._Init.call(this.AaW={I:this},0);C.Tw._Init.
call(this.Tw={I:this},0);C.Tv._Init.call(this.Tv={I:this},0);C.RR._Init.call(this.
RR={I:this},0);C.Qx._Init.call(this.Qx={I:this},0);C.RS._Init.call(this.RS={I:this
},0);C.RP._Init.call(this.RP={I:this},0);C.RQ._Init.call(this.RQ={I:this},0);C.RO.
_Init.call(this.RO={I:this},0);this.__proto__=C.AMn;this.RN.H(BF);this.RN.Aj(true
);this.RN.Bg(false);this.AaW.H(IR);this.AaW.Aj(true);this.AaW.Bg(false);this.Tw.
H(P7);this.Tw.Aj(true);this.Tw.Bg(true);this.Tv.H(Aae);this.Tv.Aj(true);this.Tv.
Bg(false);this.RR.H(Alg);this.RR.Aj(true);this.RR.Bg(true);this.Qx.H(Aor);this.Qx.
Aj(true);this.Qx.Bg(false);this.RS.H(As4);this.RS.Aj(true);this.RS.Bg(true);this.
RP.H(Xc);this.RP.Aj(true);this.RP.Bg(true);this.RQ.H(AYW);this.RQ.Aj(true);this.
RQ.Bg(false);this.RO.H(AYX);this.RO.Aj(true);this.RO.Bg(true);this.J(this.RN,0);
this.J(this.AaW,0);this.J(this.Tw,0);this.J(this.Tv,0);this.J(this.RR,0);this.J(
this.Qx,0);this.J(this.RS,0);this.J(this.RP,0);this.J(this.RQ,0);this.J(this.RO,
0);},_Done:function(){this.__proto__=C.RT;this.RN._Done();this.AaW._Done();this.
Tw._Done();this.Tv._Done();this.RR._Done();this.Qx._Done();this.RS._Done();this.
RP._Done();this.RQ._Done();this.RO._Done();C.RT._Done.call(this);},_ReInit:function(
){C.RT._ReInit.call(this);this.RN._ReInit();this.AaW._ReInit();this.Tw._ReInit();
this.Tv._ReInit();this.RR._ReInit();this.Qx._ReInit();this.RS._ReInit();this.RP.
_ReInit();this.RQ._ReInit();this.RO._ReInit();this.CP();},_Mark:function(D){var B;
C.RT._Mark.call(this,D);if((B=this.RN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tw)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Tv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Qx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RQ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMB={AkS:function(L1){if(!L1)return;var Fs=A._NewObject(
A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fs.CW(HV);var Ac9=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac9.Initialize(8,2,0,true);Fs.CW(Ac9);L1.Bl(Fs);
},ADS:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Pe=A.
_GetAutoObject(A.Device.Device).Bt.Ca();if(Pe<2)return false;var BBX=A._GetAutoObject(
A.Device.Device).Bt.HF(0,6);var BBY=A._GetAutoObject(A.Device.Device).Bt.HF(Pe-1
,6);var A1U=A._NewObject(A.Core.Bs,0);A1U.Initialize(BBX);var A3X=A._NewObject(A.
Core.Bs,0);A3X.Initialize(BBY);if((A1U.Ab0()!==A3X.Ab0())||(A1U.Year!==A3X.Year)
)return true;else return false;},_Init:function(aArg){C.AaY._Init.call(this,aArg
);this.__proto__=C.AMB;this.AS8(C.AHe);this.AS9(C.ADk);this.ASY(C.Qx);this.ArP(A.
aaR(A.acf.AVC));this.Dz(A.aaR(A.acf.Akl));},_ReInit:function(){C.AaY._ReInit.call(
this);this.ArP(A.aaR(A.acf.AVC));this.Dz(A.aaR(A.acf.Akl));},_className:"Application::AnimalWeights"
};C.AMw={AkS:function(L1){if(!L1)return;var Fs=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fs.CW(HV);var ABa=A._NewObject(A.Device.Int32FilterCriterion
,0);ABa.Initialize(7,2,0,true);Fs.CW(ABa);L1.Bl(Fs);},ADS:function(){return A._GetAutoObject(
A.Device.Device).Bt.Ca()>0;},_Init:function(aArg){C.AaY._Init.call(this,aArg);this.
__proto__=C.AMw;this.AS8(C.AUZ);this.AS9(C.APD);this.ASY(C.Tw);this.ArP(A.aaR(A.
acf.A7w));this.Dz(A.aaR(A.acf.Arq));},_ReInit:function(){C.AaY._ReInit.call(this
);this.ArP(A.aaR(A.acf.A7w));this.Dz(A.aaR(A.acf.Arq));},_className:"Application::AnimalTemperatures"
};C.AT6={Vy:null,Vz:null,XZ:null,AgA:null,Kx:null,AP:null,A_:null,Ea:null,Ls:null
,AnU:null,KU:null,KV:null,ZM:null,ZN:null,Init:function(aArg){},Bk:function(aSize
){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Kx.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A_.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
Vy.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
Vy.M[2]-1,0,this.Vy.M[2]+1,aSize[1]]);this.Vz.H([this.Vy.M[2],0,this.Vy.M[2]+22,
aSize[1]]);this.Ls.H([this.Vz.M[2]-1,0,this.Vz.M[2]+1,aSize[1]]);this.XZ.H([this.
Vz.M[2],0,this.Vz.M[2]+22,aSize[1]]);this.AnU.H([this.XZ.M[2]-1,0,this.XZ.M[2]+1
,aSize[1]]);this.AgA.H([this.XZ.M[2],0,aSize[0],aSize[1]]);this.KU.H(this.Vy.M);
this.KV.H(this.Vz.M);this.ZM.H(this.XZ.M);this.ZN.H(this.AgA.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Kx.L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;
this.Hn=Ad;if(!!this.AX){var AlA=this.AX.HF(Ad,6);var A0$=this.AX.I2(Ad,3);var A1Q=
this.AX.I2(Ad,2);var A1P=this.AX.I2(Ad,5);var A3K=this.AX.I2(Ad,4);this.T(A._GetAutoObject(
A.acj.KK).ACN(AlA));this.Kx.R(A._GetAutoObject(A.acj.KK).A6p(AlA));this.Vy.L(A._GetAutoObject(
A.acj.Assessment).Qj(A0$));this.Vz.L(A._GetAutoObject(A.acj.Assessment).Qj(A1Q));
this.XZ.L(A._GetAutoObject(A.acj.Assessment).Qj(A1P));this.AgA.L(A._GetAutoObject(
A.acj.Assessment).Qj(A3K));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xv(A0$));
this.KV.L(A._GetAutoObject(A.acj.Assessment).Xv(A1Q));this.ZM.L(A._GetAutoObject(
A.acj.Assessment).Xv(A1P));this.ZN.L(A._GetAutoObject(A.acj.Assessment).Xv(A3K));
this.KU.Z(A0$===5);this.KV.Z(A1Q===5);this.ZM.Z(A1P===5);this.ZN.Z(A3K===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
Vy={I:this},0);A.acg.AL._Init.call(this.Vz={I:this},0);A.acg.AL._Init.call(this.
XZ={I:this},0);A.acg.AL._Init.call(this.AgA={I:this},0);A.acg.Text._Init.call(this.
Kx={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A_={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.
Ls={I:this},0);A.acg.AL._Init.call(this.AnU={I:this},0);A.acg.Text._Init.call(this.
KU={I:this},0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(this.
ZM={I:this},0);A.acg.Text._Init.call(this.ZN={I:this},0);this.__proto__=C.AT6;this.
V.H(O4);this.Vy.H(AYY);this.Vz.H(AYZ);this.XZ.H(AY0);this.AgA.H(AY1);this.Kx.R(Rj
);this.Kx.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ls.L(A.jb.Bc);this.AnU.L(A.jb.Bc);this.KU.H(AY2);this.KU.R(Rl);this.KV.H(AY3
);this.KV.R(Rl);this.ZM.H(AY4);this.ZM.R(Rl);this.ZN.H(AY5);this.ZN.R(Rl);this.J(
this.Vy,0);this.J(this.Vz,0);this.J(this.XZ,0);this.J(this.AgA,0);this.J(this.Kx
,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Ls,0);this.
J(this.AnU,0);this.J(this.KU,0);this.J(this.KV,0);this.J(this.ZM,0);this.J(this.
ZN,0);this.Kx.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af
));this.ZM.S(A.aaL(A.fl.Af));this.ZN.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.Vy._Done();this.Vz._Done();this.XZ._Done();this.AgA._Done(
);this.Kx._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Ls._Done(
);this.AnU._Done();this.KU._Done();this.KV._Done();this.ZM._Done();this.ZN._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Vy._ReInit(
);this.Vz._ReInit();this.XZ._ReInit();this.AgA._ReInit();this.Kx._ReInit();this.
AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Ls._ReInit();this.AnU._ReInit(
);this.KU._ReInit();this.KV._ReInit();this.ZM._ReInit();this.ZN._ReInit();this.Kx.
S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.ZM.S(
A.aaL(A.fl.Af));this.ZN.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vz)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APB={Gj:null,YX:null,YT:null,YU:null,YV:null,YW:
null,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gj={I:this},0);A.acg.Text._Init.call(this.YX={I:this},0);A.acg.Text._Init.call(this.
YT={I:this},0);A.acg.Text._Init.call(this.YU={I:this},0);A.acg.Text._Init.call(this.
YV={I:this},0);A.acg.Text._Init.call(this.YW={I:this},0);this.__proto__=C.APB;this.
Background.L(A.jb.Text);this.Gj.H(AIo);this.Gj.A6(0x11);this.Gj.R(A.aaR(A.acf.Date
));this.Gj.L(A.jb.Bm);this.YX.H(AIh);this.YX.A6(0x12);this.YX.R(A.aaR(A.acf.Bs));
this.YX.L(A.jb.Bm);this.YT.H(AY6);this.YT.A6(0x12);this.YT.R(A.aaR(A.acf.AT8));this.
YT.L(A.jb.Bm);this.YU.H(Aox);this.YU.A6(0x12);this.YU.R(A.aaR(A.acf.AT9));this.YU.
L(A.jb.Bm);this.YV.H(AY7);this.YV.A6(0x12);this.YV.R(A.aaR(A.acf.AOr));this.YV.L(
A.jb.Bm);this.YW.H(AY8);this.YW.A6(0x12);this.YW.R(A.aaR(A.acf.ANq));this.YW.L(A.
jb.Bm);this.J(this.Gj,0);this.J(this.YX,0);this.J(this.YT,0);this.J(this.YU,0);this.
J(this.YV,0);this.J(this.YW,0);this.Gj.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af
));this.YT.S(A.aaL(A.fl.Af));this.YU.S(A.aaL(A.fl.Af));this.YV.S(A.aaL(A.fl.Af));
this.YW.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EA;this.Gj._Done();
this.YX._Done();this.YT._Done();this.YU._Done();this.YV._Done();this.YW._Done();
C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.call(this);this.Gj._ReInit(
);this.YX._ReInit();this.YT._ReInit();this.YU._ReInit();this.YV._ReInit();this.YW.
_ReInit();this.Gj.R(A.aaR(A.acf.Date));this.YX.R(A.aaR(A.acf.Bs));this.YT.R(A.aaR(
A.acf.AT8));this.YU.R(A.aaR(A.acf.AT9));this.YV.R(A.aaR(A.acf.AOr));this.YW.R(A.
aaR(A.acf.ANq));this.Gj.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af));this.YT.S(A.
aaL(A.fl.Af));this.YU.S(A.aaL(A.fl.Af));this.YV.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Gj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMq={AkS:function(L1){if(!L1)return;
var Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fs.CW(HV);var
AAU=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAU.Initialize(3,5,0,true
);Fs.CW(AAU);L1.Bl(Fs);},ADS:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.Ca()>0;},_Init:function(
aArg){C.AaY._Init.call(this,aArg);this.__proto__=C.AMq;this.AS8(C.AT6);this.AS9(
C.APB);this.ASY(C.Tv);this.ArP(A.aaR(A.acf.Axn));this.Dz(A.aaR(A.acf.Ano));},_ReInit:
function(){C.AaY._ReInit.call(this);this.ArP(A.aaR(A.acf.Axn));this.Dz(A.aaR(A.acf.
Ano));},_className:"Application::AnimalRatings"};C.IC={B6:null,Y:null,V:null,Uq:
5,T:function(E){C.IZ.T.call(this,E);this.V.R(E);},De:function(E){C.IZ.De.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},AuQ:function(G){var B;var Nz=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nz)return;
if(((B=Nz.Db(0x1))[2]-B[0])>((B=Nz.M)[2]-B[0]))this.S(A.aaL(A.fl.Ij));},Kq:function(
E){if(this.Uq===E)return;this.Uq=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAO:function(G){A.pe([this,this.AuQ],this);},_Init:function(aArg){C.IZ._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IC;this.Y.AZ(0x3F);this.Y.H(AIq);this.Y.A_l(5);this.
Y.JP(3);this.V.AZ(0x34);this.V.H(Aai);this.V.I7(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.El=[this,this.
AAO];this.V.S(A.aaL(A.fl.Kl));},_Done:function(){this.__proto__=C.IZ;this.Y._Done(
);this.V._Done();C.IZ._Done.call(this);},_ReInit:function(){C.IZ._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kl));},_Mark:function(D){
var B;C.IZ._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RN={AfM:0,Ai:function(Ae){C.Fu.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RJ));if(this.AfM>=0)this.Ks((this.AfM.toFixed(
)+CQ)+A.aaR(A.acf.Ki));else this.Ks(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fu.
Ce.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfM=-1;
else this.AfM=A._GetAutoObject(A.Device.Helper).W.RJ();this.Am();},_Init:function(
aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RN;},_className:"Application::AnimalInfoItemAge"
};C.RR={A4p:0,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afr));if(
this.A4p>0)this.Ks((A._GetAutoObject(A.Device.Converter).Ak9(this.A4p)+CQ)+A._GetAutoObject(
A.acj.DV).AfZ());else this.Ks(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fu.Ce.call(
this,G);this.A4p=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RR;},_className:
"Application::AnimalInfoItemWeight"};C.Tw={Y:null,Eh:null,Ex:null,E_:null,PR:null
,E9:null,PT:null,Ajg:0,Pd:0,CP:function(){this.Am();},Ai:function(Ae){C.JG.Ai.call(
this,Ae);this.T(A.aaR(A.acf.BhI));this.E_.R(this.Ajg.toFixed());this.E9.R(this.Pd.
toFixed());if(!!this.Ajg||!!this.Pd)this.PT.R(AY9+(this.Ajg+this.Pd).toFixed());
else this.PT.R(A.aaR(A.acf.AR4));},Ce:function(G){C.JG.Ce.call(this,G);var AkZ;AkZ=
A._GetAutoObject(A.Device.Helper).Biw(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajg=AkZ.Get(2);this.Pd=AkZ.Get(1);this.Am();},De:
function(E){C.JG.De.call(this,E);this.PR.L(E);this.PT.L(E);},AsL:function(G){if(
!!this.Ajg||!!this.Pd){this.E_.Z(true);this.PR.Z(true);this.E9.Z(true);}else{this.
E_.Z(false);this.PR.Z(false);this.E9.Z(false);}this.Eh.H(this.E_.M);this.Eh.Z(this.
E_.Fk());this.Ex.H(this.E9.M);this.Ex.Z(this.E9.Fk());},AuQ:function(G){var B;var
Nz=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nz)return;if(((B=Nz.Db(0x1))[2]-B[0])>((
B=Nz.M)[2]-B[0])){this.E9.S(A.aaL(A.fl.Ak));this.PR.S(A.aaL(A.fl.Ak));this.E_.S(
A.aaL(A.fl.Ak));this.PT.S(A.aaL(A.fl.Ak));}},AAO:function(G){A.pe([this,this.AuQ
],this);},_Init:function(aArg){C.JG._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.Eh={I:this},0);A.acg.AL._Init.call(this.Ex={
I:this},0);A.acg.Text._Init.call(this.E_={I:this},0);A.acg.Text._Init.call(this.
PR={I:this},0);A.acg.Text._Init.call(this.E9={I:this},0);A.acg.Text._Init.call(this.
PT={I:this},0);this.__proto__=C.Tw;this.Y.H(Ayt);this.Y.Bnc(0);this.Y.JP(3);this.
Eh.H(AY_);this.Eh.L(A.jb.H6);this.Ex.H(Ayq);this.Ex.L(A.jb.Gf);this.E_.AZ(0x34);
this.E_.H(Aai);this.E_.Hh(2);this.E_.I7(true);this.E_.R(UW);this.E_.L(A.jb.Text);
this.E_.Aj(true);this.PR.AZ(0x34);this.PR.H(Aai);this.PR.I7(true);this.PR.R(AH_);
this.PR.L(A.jb.Text);this.PR.Aj(true);this.E9.AZ(0x34);this.E9.H(Aai);this.E9.Hh(
2);this.E9.I7(true);this.E9.R(UW);this.E9.L(A.jb.Bm);this.E9.Aj(true);this.PT.AZ(
0x34);this.PT.H(Aai);this.PT.I7(true);this.PT.R(Rj);this.PT.L(A.jb.Text);this.PT.
Aj(true);this.J(this.Y,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.E_,0);
this.J(this.PR,0);this.J(this.E9,0);this.J(this.PT,0);this.Y.El=[this,this.AAO];
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
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qx={FS:0,H$:0
,A2g:false,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(AY$+A.aaR(A.acf.AG$));if(
this.A2g){this.Ks((A._GetAutoObject(A.Device.Converter).S2(this.FS,2,true)+CQ)+A.
_GetAutoObject(A.acj.DV).Aax());this.Background.L(A._GetAutoObject(A.acj.DV).AzN(
this.FS,this.H$));this.De(A._GetAutoObject(A.acj.DV).AzP(this.FS,this.H$));}else{
this.Ks(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CK);this.De(A.jb.Text);}},Ce:
function(G){C.Fu.Ce.call(this,G);var LD=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LD){this.A2g=true;this.FS=A._GetAutoObject(A.acj.DV).Alx(LD,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2g=false;this.FS=0;}this.H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.Qx;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tv={Y:null,FT:null,Eh:
null,Ex:null,ME:null,E_:null,E9:null,OX:null,Aaz:0,Ajg:0,Pd:0,CP:function(){this.
Am();},Ai:function(Ae){C.JG.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axn));this.ME.R(
this.Aaz.toFixed());this.E_.R(this.Ajg.toFixed());this.E9.R(this.Pd.toFixed());}
,Ce:function(G){C.JG.Ce.call(this,G);var AkZ;AkZ=A._GetAutoObject(A.Device.Helper
).A6v(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aaz=AkZ.Get(3);this.Ajg=AkZ.Get(2);this.Pd=AkZ.Get(1);this.Am();},AsL:
function(G){if((!!this.Aaz||!!this.Ajg)||!!this.Pd){this.ME.Z(true);this.E_.Z(true
);this.E9.Z(true);this.OX.Z(false);}else{this.ME.Z(false);this.E_.Z(false);this.
E9.Z(false);this.OX.Z(true);}this.FT.H(this.ME.M);this.FT.Z(this.ME.Fk());this.Eh.
H(this.E_.M);this.Eh.Z(this.E_.Fk());this.Ex.H(this.E9.M);this.Ex.Z(this.E9.Fk()
);},AuQ:function(G){var B;var Nz=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nz)return;
if(((B=Nz.Db(0x1))[2]-B[0])>((B=Nz.M)[2]-B[0])){this.E9.S(A.aaL(A.fl.Ak));this.E_.
S(A.aaL(A.fl.Ak));this.ME.S(A.aaL(A.fl.Ak));}},AAO:function(G){A.pe([this,this.AuQ
],this);},_Init:function(aArg){C.JG._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FT={I:this},0);A.acg.AL._Init.call(this.Eh={
I:this},0);A.acg.AL._Init.call(this.Ex={I:this},0);A.acg.Text._Init.call(this.ME={
I:this},0);A.acg.Text._Init.call(this.E_={I:this},0);A.acg.Text._Init.call(this.
E9={I:this},0);A.acg.Text._Init.call(this.OX={I:this},0);this.__proto__=C.Tv;this.
Y.AZ(0x3F);this.Y.H(Ayt);this.Y.A_l(5);this.Y.JP(3);this.FT.H(AIr);this.FT.L(A.jb.
E1);this.Eh.H(As$);this.Eh.L(A.jb.H6);this.Ex.H(AZa);this.Ex.L(A.jb.Gf);this.ME.
AZ(0x3C);this.ME.H(Aai);this.ME.Hh(2);this.ME.I7(true);this.ME.R(UW);this.ME.L(A.
jb.Text);this.ME.Aj(true);this.E_.AZ(0x3C);this.E_.H(Aai);this.E_.Hh(2);this.E_.
I7(true);this.E_.R(UW);this.E_.L(A.jb.Text);this.E_.Aj(true);this.E9.AZ(0x3C);this.
E9.H(Aai);this.E9.Hh(2);this.E9.I7(true);this.E9.R(UW);this.E9.L(A.jb.Bm);this.E9.
Aj(true);this.OX.AZ(0x34);this.OX.H(Aai);this.OX.I7(true);this.OX.A6(0x11);this.
OX.R(A.aaR(A.acf.AR4));this.OX.L(A.jb.Text);this.OX.Aj(true);this.OX.Z(false);this.
J(this.Y,0);this.J(this.FT,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.ME
,0);this.J(this.E_,0);this.J(this.E9,0);this.J(this.OX,0);this.Y.El=[this,this.AAO
];this.ME.Q1([this,this.AsL]);this.ME.S(A.aaL(A.fl.Af));this.E_.Q1([this,this.AsL
]);this.E_.S(A.aaL(A.fl.Af));this.E9.Q1([this,this.AsL]);this.E9.S(A.aaL(A.fl.Af
));this.OX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JG;this.Y._Done(
);this.FT._Done();this.Eh._Done();this.Ex._Done();this.ME._Done();this.E_._Done(
);this.E9._Done();this.OX._Done();C.JG._Done.call(this);},_ReInit:function(){C.JG.
_ReInit.call(this);this.Y._ReInit();this.FT._ReInit();this.Eh._ReInit();this.Ex.
_ReInit();this.ME._ReInit();this.E_._ReInit();this.E9._ReInit();this.OX._ReInit(
);this.OX.R(A.aaR(A.acf.AR4));this.ME.S(A.aaL(A.fl.Af));this.E_.S(A.aaL(A.fl.Af)
);this.E9.S(A.aaL(A.fl.Af));this.OX.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JG._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AL_={_Init:function(aArg){C.Aqf._Init.call(
this,aArg);this.__proto__=C.AL_;this.A4A=1;this.Rg.Cu(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqf._ReInit.call(this);this.Rg.Cu(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.AQS={OI:null,IL:null,H3:null,IJ:null,GL:null,AlZ:function(G){A.pe([this,this.
Bz4],this);},Bz4:function(G){A._GetAutoObject(C.A$).Cg(3);},_Init:function(aArg){
C.Cd._Init.call(this,aArg);C.OI._Init.call(this.OI={I:this},0);C.BW._Init.call(this.
IL={I:this},0);C.SL._Init.call(this.H3={I:this},0);C.AGC._Init.call(this.IJ={I:this
},0);C.Q9._Init.call(this.GL={I:this},0);this.__proto__=C.AQS;var B;this.I8(A.aaR(
A.acf.A$l));this.IL.H(AhX);this.IL.Aj(true);this.IL.T(A.aaR(A.acf.Language));this.
IL.A95(100);this.H3.H(UV);this.H3.Aj(true);this.H3.T(A.aaR(A.acf.Date));this.H3.
Bg(true);this.IJ.H(Aaf);this.IJ.Aj(true);this.IJ.T(A.aaR(A.acf.Bs));this.GL.H(AhW
);this.GL.Aj(true);this.GL.Z(true);this.GL.T(A.aaR(A.acf.AF9));this.GL.Bg(true);
this.GL.Ar0(false);this.GL.A_b(true);this.JV(this.Y,-1);this.JV(this.Ay,-1);this.
J(this.IL,0);this.J(this.H3,0);this.J(this.IJ,0);this.J(this.GL,0);this.IL.Wy(A.
aaL(A.fl.Hr));this.IL.Wz(A.aaL(A.fl.Hr));this.IL.As([B=this.OI,B.B7,B.B8]);this.
IL.CI(this.OI);this.H3.AeT([B=this.H3,B.FQ]);this.H3.Gn([this,this.D_,this.GN]);
this.H3.Akz(A.aaL(A.ach.Edit));this.H3.Ab8([B=A._GetAutoObject(A.Device.Helper),
B.UX,B.U0]);this.IJ.AeT([B=this.IJ,B.FQ]);this.IJ.Gn([this,this.D_,this.GN]);this.
IJ.Akz(A.aaL(A.ach.Edit));this.IJ.Ab8([B=A._GetAutoObject(A.Device.Helper),B.UX,
B.U0]);this.GL.AeT([B=this.GL,B.FQ]);this.GL.Gn([this,this.D_,this.GN]);this.GL.
Akz(A.aaL(A.ach.Edit));this.GL.As([B=A._GetAutoObject(A.Device.Device),B.ASw,B.AZ9
]);},_Done:function(){this.__proto__=C.Cd;this.OI._Done();this.IL._Done();this.H3.
_Done();this.IJ._Done();this.GL._Done();C.Cd._Done.call(this);},_ReInit:function(
){C.Cd._ReInit.call(this);this.OI._ReInit();this.IL._ReInit();this.H3._ReInit();
this.IJ._ReInit();this.GL._ReInit();this.I8(A.aaR(A.acf.A$l));this.IL.T(A.aaR(A.
acf.Language));this.H3.T(A.aaR(A.acf.Date));this.IJ.T(A.aaR(A.acf.Bs));this.GL.T(
A.aaR(A.acf.AF9));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.OI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaY={Bj:null,Fy:null,AmZ:null,AmI:null,R_:null,A6Q:A.jV,KM:A.jV,ARk:null,ARl:
null,ADd:null,CF:function(G){var B;C.D9.CF.call(this,G);A.zX([this,this.A2O],[B=
A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0);this.A2O(this);},E3:function(
G){var B;A.z$([this,this.A2O],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId
],0);C.D9.E3.call(this,G);},Zt:function(E){C.D9.Zt.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bj)this.Bj.Zt(E);},AS8:function(E){if(this.ARk===E)return;this.
ARk=E;if(!!this.Bj)this.Bj.NZ(E);},AS9:function(E){if(this.ARl===E)return;this.ARl=
E;this.BoD(this);},ASY:function(E){if(this.ADd===E)return;this.ADd=E;A.pe([this,
this.BoC],this);},ArP:function(E){if(this.A6Q===E)return;this.A6Q=E;this.R_.R(E);
},Dz:function(E){if(this.KM===E)return;this.KM=E;if(!!this.Bj)this.Bj.Dz(E);},AkS:
function(L1){A.ab5("%s",AZb);},ADS:function(){A.ab5("%s",Alf);return false;},Axv:
function(G){if(!!this.Bj)this.HN(this.Bj);this.Bj=A._NewObject(C.F$,0);this.Bj.H(
Ata);this.Bj.Zr(A._GetAutoObject(A.Device.Device).Bt);this.Bj.Dz(this.KM);this.Bj.
NZ(this.ARk);this.Bj.Zt(this.AR);this.J(this.Bj,0);this.Bb(this.Bj);},BoD:function(
G){var B;if(!!this.Fy)this.HN(this.Fy);this.Fy=(C.EA.isPrototypeOf(B=A._NewObject(
this.ARl,0))?B:null);this.Fy.H(IR);this.J(this.Fy,0);},BoC:function(G){var B;if(
!!this.AmZ)this.HN(this.AmZ);if(!!this.ADd&&this.ADS()){this.AmZ=(C.IZ.isPrototypeOf(
B=A._NewObject(this.ADd,0))?B:null);this.AmZ.H(BF);this.AmZ.Bg(false);this.J(this.
AmZ,0);this.R_.Z(false);}else this.R_.Z(true);},A2O:function(G){this.AkS(A._GetAutoObject(
A.Device.Device).Bt);this.Axv(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AL._Init.call(this.AmI={I:this},0);C.CH._Init.call(this.R_={I:this},
0);this.__proto__=C.AaY;this.AmI.H(BF);this.AmI.L(A.jb.CK);this.R_.H(AHF);this.R_.
A6(0x11);this.R_.L(A.jb.Text);this.J(this.AmI,0);this.J(this.R_,0);this.R_.S(A.aaL(
A.fl.Kl));this.R_.A2(A.aaL(A.fl.Ij));},_Done:function(){this.__proto__=C.D9;this.
AmI._Done();this.R_._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmI._ReInit();this.R_._ReInit();this.R_.S(A.aaL(A.fl.Kl));this.R_.
A2(A.aaL(A.fl.Ij));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmI)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.JH={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bcf],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AII],0);A.pe([this,this.Bcf],this
);},Do:function(){return 4;},FX:function(aIndex){return this.AnimalListContentToString.
BI(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).Ab2(E);},Bcf:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.JH;this.Cf.Set(0,0);this.Cf.Set(1,1);this.Cf.Set(2,2
);this.Cf.Set(3,3);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.AnimalListContentToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
AnimalListContentToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this
,D);if((B=this.AnimalListContentToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListContent"};C.ARp={IL:null,Y9:null,Zh:null,Ze:null,Zi:null
,Y_:null,Zc:null,Zf:null,Zg:null,Zb:null,OI:null,_Init:function(aArg){C.Cd._Init.
call(this,aArg);C.BW._Init.call(this.IL={I:this},0);C.Nc._Init.call(this.Y9={I:this
},0);C.Nc._Init.call(this.Zh={I:this},0);C.Nc._Init.call(this.Ze={I:this},0);C.Nc.
_Init.call(this.Zi={I:this},0);C.Nc._Init.call(this.Y_={I:this},0);C.Nc._Init.call(
this.Zc={I:this},0);C.Nc._Init.call(this.Zf={I:this},0);C.Nc._Init.call(this.Zg={
I:this},0);C.Nc._Init.call(this.Zb={I:this},0);C.OI._Init.call(this.OI={I:this},
0);this.__proto__=C.ARp;var B;this.I8(A.aaR(A.acf.Settings));this.IL.H(AhX);this.
IL.Aj(true);this.IL.T(A.aaR(A.acf.Language));this.IL.A95(100);this.Y9.H(Atb);this.
Y9.Aj(true);this.Y9.T(A.aaR(A.acf.ACp));this.Y9.Nf(16);this.Zh.H(Atc);this.Zh.Aj(
true);this.Zh.T(A.aaR(A.acf.AG6));this.Zh.Nf(22);this.Ze.H(Atd);this.Ze.Aj(true);
this.Ze.T(A.aaR(A.acf.Temperature));this.Ze.Nf(17);this.Zi.H(Ayu);this.Zi.Aj(true
);this.Zi.T(A.aaR(A.acf.ACl));this.Zi.Nf(42);this.Y_.H(Aoy);this.Y_.Aj(true);this.
Y_.T(A.aaR(A.acf.Device));this.Y_.Nf(18);this.Zc.H(Aoy);this.Zc.Aj(true);this.Zc.
T(A.aaR(A.acf.Asj));this.Zc.Nf(19);this.Zf.H(AZc);this.Zf.Aj(true);this.Zf.T(A.aaR(
A.acf.LinkTransponder));this.Zf.Nf(89);this.Zg.H(AZd);this.Zg.Aj(true);this.Zg.T(
A.aaR(A.acf.UnlinkTransponder));this.Zg.Nf(95);this.Zb.H(Ayl);this.Zb.Aj(true);this.
Zb.T(A.aaR(A.acf.ACE));this.Zb.Nf(76);this.J(this.IL,0);this.J(this.Y9,0);this.J(
this.Zh,0);this.J(this.Ze,0);this.J(this.Zi,0);this.J(this.Y_,0);this.J(this.Zc,
0);this.J(this.Zf,0);this.J(this.Zg,0);this.J(this.Zb,0);this.IL.Wy(A.aaL(A.fl.Hr
));this.IL.Wz(A.aaL(A.fl.Hr));this.IL.As([B=this.OI,B.B7,B.B8]);this.IL.CI(this.
OI);this.Y9.AR=[B=this.Y9,B.Ni];this.Zh.AR=[B=this.Zh,B.Ni];this.Ze.AR=[B=this.Ze
,B.Ni];this.Zi.AR=[B=this.Zi,B.Ni];this.Y_.AR=[B=this.Y_,B.Ni];this.Zc.AR=[B=this.
Zc,B.Ni];this.Zf.AR=[B=this.Zf,B.Ni];this.Zg.AR=[B=this.Zg,B.Ni];this.Zb.AR=[B=this.
Zb,B.Ni];},_Done:function(){this.__proto__=C.Cd;this.IL._Done();this.Y9._Done();
this.Zh._Done();this.Ze._Done();this.Zi._Done();this.Y_._Done();this.Zc._Done();
this.Zf._Done();this.Zg._Done();this.Zb._Done();this.OI._Done();C.Cd._Done.call(
this);},_ReInit:function(){C.Cd._ReInit.call(this);this.IL._ReInit();this.Y9._ReInit(
);this.Zh._ReInit();this.Ze._ReInit();this.Zi._ReInit();this.Y_._ReInit();this.Zc.
_ReInit();this.Zf._ReInit();this.Zg._ReInit();this.Zb._ReInit();this.OI._ReInit(
);this.I8(A.aaR(A.acf.Settings));this.IL.T(A.aaR(A.acf.Language));this.Y9.T(A.aaR(
A.acf.ACp));this.Zh.T(A.aaR(A.acf.AG6));this.Ze.T(A.aaR(A.acf.Temperature));this.
Zi.T(A.aaR(A.acf.ACl));this.Y_.T(A.aaR(A.acf.Device));this.Zc.T(A.aaR(A.acf.Asj)
);this.Zf.T(A.aaR(A.acf.LinkTransponder));this.Zg.T(A.aaR(A.acf.UnlinkTransponder
));this.Zb.T(A.aaR(A.acf.ACE));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);
if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OI)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MainSettingsScreen"};C.AMl={EU:null,Init:
function(aArg){this.EU.Ahn(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)));},AUb:function(){this.EU.AeX(this.
AOP());this.AaB=!this.EU.EZ.AY;},AiV:function(G){this.EU.Ahn(A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)
));this.AUb();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>0)
this.Dz(A.aaR(A.acf.A7W));else this.Dz(A.aaR(A.acf.Arq));this.Am();},AOP:function(
){var BC=A._NewObject(C.Aqt,0);var Qg=A._GetAutoObject(A.Device.Helper).AN7(A._GetAutoObject(
A.Device.Helper).Dv());var Dw=A._GetAutoObject(A.Device.Helper).Aqp(Qg-(86400*this.
Mt));BC.AnB(AZe);BC.QZ([].concat(0,BC.Gg.slice(1,4)));BC.QZ(A.abN(BC.Gg,(Qg-Dw)|
0));BC.QZ(A.abP(BC.Gg,3400));BC.QZ([].concat(BC.Gg.slice(0,3),4200));var Gd=A._GetAutoObject(
A.Device.Device).Bt.Ca();BC.AwO(Gd);BC.Yh();if(Gd>0){var O=0;while(O<Gd){var ApW=
A._GetAutoObject(A.Device.Device).Bt.CE(O,7);var ApX=A._GetAutoObject(A.Device.Device
).Bt.HF(O,6)-Dw;if(ApW>0)BC.Aqg(ApX,ApW);O=O+1;}}return BC;},_Init:function(aArg
){C.K_._Init.call(this,aArg);C.AqW._Init.call(this.EU={I:this},0);this.__proto__=
C.AMl;this.EU.H(AZf);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AE9(C.AGQ);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.EU._Done(
);C.K_._Done.call(this);},_ReInit:function(){C.K_._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMm={Z3:null,O0:null,AgL:null,AaB:false,Init:function(aArg){this.Z3.Ahn(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgR)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgL.Z(this.AaB);},CF:function(
G){var B;C.D9.CF.call(this,G);A.zX([this,this.AiV],[B=A._GetAutoObject(A.Device.
Helper),B.UX,B.U0],0);A.zV([this,this.AiV],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Amb],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0
);A.pe([this,this.Amb],this);},E3:function(G){var B;A.z$([this,this.AiV],[B=A._GetAutoObject(
A.Device.Helper),B.UX,B.U0],0);A.z9([this,this.AiV],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amb],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId
],0);C.D9.E3.call(this,G);},Amb:function(G){var Fs=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fs.CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bl(Fs
);},AiV:function(G){this.Z3.Ahn(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)));this.BnZ();this.Am();},BnZ:function(
){var B;var Gd=A._GetAutoObject(A.Device.Device).Bt.Ca();var K8=A._NewObject(C.Aqt
,0);var Vl=A._NewObject(C.Aqt,0);var Qg=A._GetAutoObject(A.Device.Helper).AN7(A.
_GetAutoObject(A.Device.Helper).Dv());var Dw=A._GetAutoObject(A.Device.Helper).Aqp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K8.QZ([].concat(0,K8.Gg.slice(1
,4)));K8.QZ(A.abN(K8.Gg,(Qg-Dw)|0));K8.QZ(A.abP(K8.Gg,0));K8.QZ([].concat(K8.Gg.
slice(0,3),150000));K8.AnB(AZg);Vl.QZ([].concat(0,Vl.Gg.slice(1,4)));Vl.QZ(A.abN(
Vl.Gg,(Qg-Dw)|0));Vl.QZ(A.abP(Vl.Gg,0));Vl.QZ([].concat(Vl.Gg.slice(0,3),1500));
Vl.AnB(AZh);K8.AwO(Gd);K8.Yh();Vl.AwO(Gd);Vl.Yh();if(Gd>0){var O=0;var AaD=0;var
AAc=0;var AJ4=0;var A1V=0;var BcU=true;while(O<Gd){var Al8=A._GetAutoObject(A.Device.
Device).Bt.CE(O,8);var AaP=A._GetAutoObject(A.Device.Device).Bt.HF(O,6)-Dw;if(Al8>
0){K8.Aqg(AaP,Al8);if(!A1V){A1V=AaP;AJ4=Al8;}if(AAc>0){var LD=A._GetAutoObject(A.
Device.Helper).MN(AAc,AaP);if(!!LD){var FS=A._GetAutoObject(A.acj.DV).Alx(LD,AaD
,Al8);if(BcU){Vl.Aqg(AAc,FS);BcU=false;}Vl.Aqg(AaP,FS);}}AaD=Al8;AAc=AaP;}O=O+1;
}var AdM=A.aaR(A.acf.BgI);var FS=A._GetAutoObject(A.Device.Helper).Biy(A1V,AAc,AJ4
,AaD);AdM=A._GetAutoObject(A.Device.Helper).Nk(AdM,P6,FS.toFixed());AdM=A._GetAutoObject(
A.Device.Helper).Nk(AdM,Ax9,A._GetAutoObject(A.acj.DV).Aax());this.O0.Ii.R(AdM);
}this.AaB=!K8.AY;if(this.AaB)this.O0.Ii.R(A.jV);(C.O0.isPrototypeOf(B=this.O0.EU
)?B:null).Anx([B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.EB]);this.Z3.AeX(K8);
this.O0.AeX(Vl);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqW._Init.call(
this.Z3={I:this},0);C.AqW._Init.call(this.O0={I:this},0);C.AkQ._Init.call(this.AgL={
I:this},0);this.__proto__=C.AMm;this.Z3.H(AZi);this.Z3.T(A.aaR(A.acf.Afr));this.
Z3.AE9(C.AMT);this.O0.H(AZj);this.O0.T(A.aaR(A.acf.AG$));this.O0.AE9(C.O0);this.
AgL.H(UU);this.AgL.R(A.aaR(A.acf.Akl));this.J(this.Z3,0);this.J(this.O0,0);this.
J(this.AgL,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z3._Done(
);this.O0._Done();this.AgL._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z3._ReInit();this.O0._ReInit();this.AgL._ReInit();this.
Z3.T(A.aaR(A.acf.Afr));this.O0.T(A.aaR(A.acf.AG$));this.AgL.R(A.aaR(A.acf.Akl));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgL)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMj={
Avd:null,Avc:null,Axp:null,AuK:null,Vx:null,Abn:null,Abm:null,Acl:null,Afe:null,
Init:function(aArg){this.Vx.Ahn(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)));},A4h:function(G){this.Vx.Ab9(this.
AuK);this.Abn.Ab9(this.Avd);this.Abm.Ab9(this.Avc);this.Acl.Ab9(this.Axp);},Axo:
function(){var Gd=A._GetAutoObject(A.Device.Device).Bt.Ca();this.AuK=A._NewObject(
C.Ajs,0);this.Avd=A._NewObject(C.Ajs,0);this.Avc=A._NewObject(C.Ajs,0);this.Axp=
A._NewObject(C.Ajs,0);if(Gd>0){var O=Gd-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.HF(O,6);this.Att(this.AuK,O,3,D8);this.Att(this.Avd,O,2,D8);this.
Att(this.Avc,O,5,D8);this.Att(this.Axp,O,4,D8);O=O-1;}}this.AaB=!(((this.AuK.AY+
this.Avc.AY)+this.Avd.AY)+this.Axp.AY);A.pe([this,this.A4h],this);},Att:function(
A0T,Ad,A0S,Qa){var Alt=A._GetAutoObject(A.Device.Device).Bt.I2(Ad,A0S);if(!!Alt)
A0T.Os(Alt,Qa);},Ab7:function(E){if(this.Mt===E)return;C.K_.Ab7.call(this,E);if(
!!this.Vx)this.Vx.Ab7(E);if(!!this.Abn)this.Abn.Ab7(E);if(!!this.Abm)this.Abm.Ab7(
E);if(!!this.Acl)this.Acl.Ab7(E);this.Afe.Ab7(E);},AiV:function(G){this.Vx.Ahn(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.AgR)));this.Axo();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dz(A.aaR(A.acf.BjY));else this.Dz(A.aaR(A.acf.Ano));this.Am();},_Init:function(
aArg){C.K_._Init.call(this,aArg);C.Aht._Init.call(this.Vx={I:this},0);C.Aht._Init.
call(this.Abn={I:this},0);C.Aht._Init.call(this.Abm={I:this},0);C.Aht._Init.call(
this.Acl={I:this},0);C.AT_._Init.call(this.Afe={I:this},0);this.__proto__=C.AMj;
this.Dz(A.aaR(A.acf.Ano));this.Vx.H(AZk);this.Vx.R(A.aaR(A.acf.AGc));this.Abn.H(
AIs);this.Abn.R(A.aaR(A.acf.Feed));this.Abm.H(AZl);this.Abm.R(A.aaR(A.acf.AGe));
this.Acl.H(AIt);this.Acl.R(A.aaR(A.acf.AGf));this.Afe.H(AZm);this.J(this.Vx,-1);
this.J(this.Abn,-1);this.J(this.Abm,-1);this.J(this.Acl,-1);this.J(this.Afe,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.Vx._Done();this.Abn.
_Done();this.Abm._Done();this.Acl._Done();this.Afe._Done();C.K_._Done.call(this);
},_ReInit:function(){C.K_._ReInit.call(this);this.Vx._ReInit();this.Abn._ReInit(
);this.Abm._ReInit();this.Acl._ReInit();this.Afe._ReInit();this.Dz(A.aaR(A.acf.Ano
));this.Vx.R(A.aaR(A.acf.AGc));this.Abn.R(A.aaR(A.acf.Feed));this.Abm.R(A.aaR(A.
acf.AGe));this.Acl.R(A.aaR(A.acf.AGf));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.Avd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avc)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abm)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afe)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMk={EU:null,WE:null,Aeg:null,A2e:false,Init:function(aArg){this.WE.Ahn(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgR)));},Bk:function(aSize){C.K_.Bk.call(this,aSize);this.Aeg.H(this.EU.M);},Ai:
function(Ae){C.K_.Ai.call(this,Ae);var BBA=!this.AaB&&this.A2e;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aeg.R(A.aaR(A.acf.A7W));else this.
Aeg.R(A.aaR(A.acf.Arq));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dz(A.aaR(
A.acf.BjZ));else this.Dz(A.aaR(A.acf.Bj0));this.Aeg.Z(BBA);},AiV:function(G){this.
WE.Ahn(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.AgR)));this.AaB=true;this.A2e=true;this.Axo();this.AUb();this.
Am();},AUb:function(){this.EU.AeX(this.AOP());if(!!this.EU.EZ&&(this.EU.EZ.AY>0)
){this.AaB=false;this.A2e=false;}},AOP:function(){var BC=A._NewObject(C.Aqt,0);var
Qg=A._GetAutoObject(A.Device.Helper).AN7(A._GetAutoObject(A.Device.Helper).Dv());
var Dw=A._GetAutoObject(A.Device.Helper).Aqp(Qg-(86400*this.Mt));BC.AnB(AZn);BC.
QZ([].concat(0,BC.Gg.slice(1,4)));BC.QZ(A.abN(BC.Gg,(Qg-Dw)|0));BC.QZ(A.abP(BC.Gg
,3400));BC.QZ([].concat(BC.Gg.slice(0,3),4200));var Gd=A._GetAutoObject(A.Device.
Device).Bt.Ca();BC.AwO(Gd);BC.Yh();if(Gd>0){var O=0;while(O<Gd){var ApW=A._GetAutoObject(
A.Device.Device).Bt.CE(O,7);var ApX=A._GetAutoObject(A.Device.Device).Bt.HF(O,6)-
Dw;if(ApW>0)BC.Aqg(ApX,ApW);O=O+1;}}return BC;},BiN:function(){var Gd=A._GetAutoObject(
A.Device.Device).Bt.Ca();if(Gd>0){var BfA=A._NewObject(C.Ajs,0);var O=Gd-1;while(
O>=0){var D2=A._NewObject(A.Device.Rating,0);D2.EM(O,A._GetAutoObject(A.Device.Device
).Bt);var LQ=A._GetAutoObject(A.Device.Helper).AC3(D2);if(!!LQ)BfA.Os(LQ,D2.Timestamp
);O=O-1;}return BfA;}else return null;},Axo:function(){this.WE.Ab9(this.BiN());if(
!!this.WE.N2&&(this.WE.N2.AY>0))this.AaB=false;},_Init:function(aArg){C.K_._Init.
call(this,aArg);C.AqW._Init.call(this.EU={I:this},0);C.Aht._Init.call(this.WE={I:
this},0);C.AkQ._Init.call(this.Aeg={I:this},0);this.__proto__=C.AMk;this.EU.H(Ata
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AE9(C.AGQ);this.WE.H(AIu);this.WE.
R(A.aaR(A.acf.Rating));this.Aeg.H(Ata);this.J(this.EU,-2);this.J(this.WE,-2);this.
J(this.Aeg,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.EU._Done(
);this.WE._Done();this.Aeg._Done();C.K_._Done.call(this);},_ReInit:function(){C.
K_._ReInit.call(this);this.EU._ReInit();this.WE._ReInit();this.Aeg._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WE.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K_._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeg)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WJ={Q:null,Gs:null,Gt:null
,QH:null,AM:0,Gl:0,FZ:100,FC:0,Init:function(aArg){},IW:function(G){this.FC=1;C.
Eg.IW.call(this,G);},Bk:function(aSize){C.Eg.Bk.call(this,aSize);this.QH.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QH.Z(this.Gl!==
this.FZ);this.QH.L(this.V.AQ);if((this.FC===4)||(this.FC===5))this.QH.L(A.jb.E1);
},Al1:function(G){this.FC=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AyN],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qm:function(G){if(this.FC===5)A.pe([this,this.
AyN],this);if(this.FC===4)A.pe([this,this.AyO],this);if(this.FC===1)A.pe(this.AR
,this);this.FC=0;this.Am();},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,
F[1].call(F[0])));},AcT:function(s){this.C2(s);},As:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcT],E,0);if(!!E)A.pe([this,this.AcT],this);},Al2:function(G){this.FC=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.AyO],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},J$:function(G){this.FC=0;},AyO:function(s){this.J$(s);},J6:function(G){this.
FC=0;},AyN:function(s){this.J6(s);},By:function(E){if(E<this.Gl)E=this.Gl;if(E>this.
FZ)E=this.FZ;if(this.AM===E)return;this.AM=E;this.Am();},F0:function(E){if(this.
Gl===E)return;this.Gl=E;this.Am();},EV:function(E){if(this.FZ===E)return;this.FZ=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BN._Init.call(
this.Gs={I:this},0);A.Core.BN._Init.call(this.Gt={I:this},0);A.acg.Ap._Init.call(
this.QH={I:this},0);this.__proto__=C.WJ;this.H(J0);this.Gs.Filter=5;this.Gt.Filter=
4;this.Background.H(J0);this.V.H(Aad);this.V.R(Lv);this.QH.H(Ayv);this.J(this.QH
,0);this.Gs.BO=[this,this.Al1];this.Gs.D0=[this,this.Al1];this.Gt.BO=[this,this.
Al2];this.Gt.D0=[this,this.Al2];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Cu(null);this.QH.Aw(A.aaL(A.ach.AMH));this.Init(aArg);},_Done:function(
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
F[0]))));},J$:function(G){var F;var BR=this.AM;C.WJ.J$.call(this,G);this.By(this.
AM+1);if(this.AM!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(
this.AM)));A.abo(this.Q,0);}},J6:function(G){var F;var BR=this.AM;C.WJ.J6.call(this
,G);this.By(this.AM-1);if(this.AM!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(E){var Qs=0;if(this.Gl
!==this.FZ){if(E<this.Gl){E=this.FZ;Qs=-this.CM.GK*this.CM.AY;}if(E>this.FZ){E=this.
Gl;Qs=this.CM.GK;}}C.WJ.By.call(this,E);if(!!Qs)this.CM.F_(Qs);this.CM.G2(this.AM
);this.CM.HD(this.CM.Go,true,this.HK,null);},Hg:function(G){var B;var Gc=this.CM.
G0;var Cz=(C.CH.isPrototypeOf(B=this.CM.Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6
);Cz.A2(A.aaL(A.fl.Af));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FX(Gc));else Cz.
R(Xa);Cz.H(A.abK(Cz.M,[(B=this.CM.M)[2]-B[0],this.CM.GK]));},CI:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.F0(0);this.EV(this.AC.Do()-1);this.CM.
Ju(this.AC.Do());this.CM.AbG(0,this.CM.AY-1);}},_Init:function(aArg){C.WJ._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gh._Init.call(this.
HK={I:this},0);this.__proto__=C.AUy;this.H(J0);this.QH.H(AZo);this.CM.Ae4(40);this.
CM.NZ(C.CH);this.HK.WC(23);this.HK.HM(1);this.HK.Fl(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CM.Hg=[this,this.Hg];this.Init(
aArg);},_Done:function(){this.__proto__=C.WJ;this.CM._Done();this.HK._Done();C.WJ.
_Done.call(this);},_ReInit:function(){C.WJ._ReInit.call(this);this.CM._ReInit();
this.HK._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WJ._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RS={ALs:0
,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.AG$));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Ks((A._GetAutoObject(A.Device.Converter).Ak9(this.ALs
)+CQ)+A._GetAutoObject(A.acj.DV).AfZ());else this.Ks(A.aaR(A.acf.Unknown));},Ce:
function(G){C.Fu.Ce.call(this,G);this.ALs=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fu._Init.call(this,aArg);this.__proto__=C.RS;},_className:"Application::AnimalInfoItemWeightGain"
};C.APs={Bc:null,Dd:null,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Device),B.AEq,B.AIH],0);},D5:function(G){C.IG.D5.call(this,G);this.Dd.Aw(
A._GetAutoObject(A.Device.Converter).BgW(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.C5._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);this.__proto__=C.APs;this.Bc.DC(
Ayw);this.Bc.DL(Ayx);this.Bc.L(A.jb.Bc);this.Dd.H(AZp);this.Dd.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Dd,0);this.Dd.Aw(A.aaL(A.ach.AjV));this.Init(aArg);},_Done:
function(){this.__proto__=C.IG;this.Bc._Done();this.Dd._Done();C.IG._Done.call(this
);},_ReInit:function(){C.IG._ReInit.call(this);this.Bc._ReInit();this.Dd._ReInit(
);},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANt={ZK:null,Ky:null,Mi:null,Timer:null,ACc:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZK.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Bqi),P6,this.ACc.
toFixed()));},CF:function(G){this.Timer.Ar(true);},E3:function(G){this.Timer.Ar(
false);},BAM:function(G){if(this.ACc>1){this.ACc=this.ACc-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Axw();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZK={I:this},0);A.acg.Text.
_Init.call(this.Ky={I:this},0);A.acg.Ap._Init.call(this.Mi={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANt;this.Background.L(A.jb.CS
);this.N.Z(true);this.ZK.H(AZq);this.ZK.KS(true);this.ZK.R(A.jV);this.ZK.L(A.jb.
Text);this.Ky.H(AZr);this.Ky.KS(true);this.Ky.R(A.aaR(A.acf.A4_));this.Ky.L(A.jb.
Text);this.Mi.H(AIv);this.J(this.ZK,0);this.J(this.Ky,0);this.J(this.Mi,0);this.
ZK.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af));this.Mi.Aw(A.aaL(A.ach.ABJ));this.
Timer.Mx=[this,this.BAM];},_Done:function(){this.__proto__=C.AB;this.ZK._Done();
this.Ky._Done();this.Mi._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZK._ReInit();this.Ky._ReInit();this.Mi._ReInit(
);this.Timer._ReInit();this.Ky.R(A.aaR(A.acf.A4_));this.ZK.S(A.aaL(A.fl.Af));this.
Ky.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANa={Ky:null,Amy:null
,Qz:null,CP:function(){this.Am();},Ai:function(Ae){C.Ad7.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa4<=10)this.Ky.R(A.aaR(A.acf.Bg$));else this.Ky.R(A.aaR(A.acf.
A4$));},_Init:function(aArg){C.Ad7._Init.call(this,aArg);A.acg.Text._Init.call(this.
Ky={I:this},0);A.acg.Ap._Init.call(this.Amy={I:this},0);C.CH._Init.call(this.Qz={
I:this},0);this.__proto__=C.ANa;this.SM.H(AZs);this.Mi.H(AZt);this.Ky.H(AZu);this.
Ky.KS(true);this.Ky.L(A.jb.Text);this.Amy.H(AIv);this.Qz.H(AZv);this.Qz.Z(true);
this.Qz.R(A.aaR(A.acf.AT$));this.Qz.L(A.jb.Text);this.J(this.Ky,0);this.J(this.Amy
,0);this.J(this.Qz,0);this.Ky.S(A.aaL(A.fl.Af));this.Amy.Aw(A.aaL(A.ach.ABJ));this.
Qz.S(A.aaL(A.fl.Af));this.Qz.A2(A.aaL(A.fl.Ak));this.Qz.Cu(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Ad7;this.Ky._Done();this.Amy._Done();this.Qz._Done();
C.Ad7._Done.call(this);},_ReInit:function(){C.Ad7._ReInit.call(this);this.Ky._ReInit(
);this.Amy._ReInit();this.Qz._ReInit();this.Qz.R(A.aaR(A.acf.AT$));this.Ky.S(A.aaL(
A.fl.Af));this.Qz.S(A.aaL(A.fl.Af));this.Qz.A2(A.aaL(A.fl.Ak));this.Qz.Cu(A.aaL(
A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ad7._Mark.call(this,D);if((B=this.
Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amy)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Qz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AL8={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AL8;this.
RM.Ar(false);this.RM.Aj(false);this.RM.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVy={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AVy;this.
S1.Ar(false);this.S1.Aj(false);this.S1.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AOW={D5:function(G){C.Km.D5.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdW(5));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.AOW;},_className:"Application::HeaderControlListFilter"};C.APu={D5:function(G){
C.Km.D5.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdW(6));},_Init:
function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.APu;},_className:"Application::HeaderWatchListFilter"
};C.APy={DZ:null,M7:null,_Init:function(aArg){C.TT._Init.call(this,aArg);C.CH._Init.
call(this.DZ={I:this},0);A.acg.Ap._Init.call(this.M7={I:this},0);this.__proto__=
C.APy;this.DZ.H(Aou);this.DZ.R(A.aaR(A.acf.A5H));this.DZ.L(A.jb.Text);this.M7.H(
AZw);this.M7.L(A.jb.Text);this.M7.A6(0x12);this.J(this.DZ,-2);this.J(this.M7,0);
this.DZ.S(A.aaL(A.fl.Ak));this.DZ.A2(A.aaL(A.fl.Bh));this.M7.Aw(A.aaL(A.ach.ADw)
);},_Done:function(){this.__proto__=C.TT;this.DZ._Done();this.M7._Done();C.TT._Done.
call(this);},_ReInit:function(){C.TT._ReInit.call(this);this.DZ._ReInit();this.M7.
_ReInit();this.DZ.R(A.aaR(A.acf.A5H));this.DZ.S(A.aaL(A.fl.Ak));this.DZ.A2(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.TT._Mark.call(this,D);if((B=this.DZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.AM7={Ce:function(Ad){C.AjA.Ce.call(this,Ad);if(
!!this.AX){var Oi=this.AX.H1(Ad,8);var BCl=this.AX.Sf(Ad,21);this.Abf.R(A._GetAutoObject(
A.Device.Helper).MN(BCl,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Sl.Z(Oi);this.Am();}},_Init:function(aArg){C.AjA._Init.call(this,aArg);this.__proto__=
C.AM7;},_className:"Application::CalfListWatchItem"};C.TT={Ag1:null,Ag3:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag1={I:this},
0);A.acg.Ap._Init.call(this.Ag3={I:this},0);this.__proto__=C.TT;this.Ag1.H(AZx);
this.Ag1.L(A.jb.Text);this.Ag1.A6(0x12);this.Ag3.H(AZy);this.Ag3.L(A.jb.Text);this.
Ag3.A6(0x12);this.JV(this.DS,-1);this.J(this.Ag1,0);this.J(this.Ag3,0);this.Ag1.
Aw(A.aaL(A.ach.Am2));this.Ag3.Aw(A.aaL(A.ach.AbD));},_Done:function(){this.__proto__=
C.Dc;this.Ag1._Done();this.Ag3._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Ag1._ReInit();this.Ag3._ReInit();},_Mark:function(
D){var B;C.Dc._Mark.call(this,D);if((B=this.Ag1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqt={Gg:A.wg,OE:A.wf,QZ:function(E){if(A.aaY(this.Gg,E))return;this.Gg=E;},AnB:
function(E){if(A.aaX(this.OE,E))return;this.OE=E;},_Init:function(aArg){A.acv.ACb.
_Init.call(this,aArg);this.__proto__=C.Aqt;},_className:"Application::BoundCoordList"
};C.AjA={TZ:null,Wq:null,T0:null,Wr:null,Sl:null,Zj:null,Abf:null,AP:null,A_:null
,Ea:null,Ls:null,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TZ.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wq.H(this.TZ.M);this.A_.H([this.TZ.
M[2]-1,0,this.TZ.M[2]+1,aSize[1]]);this.T0.H([this.TZ.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wr.H(this.T0.M);this.Ea.H([this.T0.M[2]-1,0,this.T0.M[2]+1,aSize[
1]]);this.Sl.H([this.T0.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zj.H(this.Sl.
M);this.Ls.H([this.Sl.M[2]-1,0,this.Sl.M[2]+1,aSize[1]]);this.Abf.H([this.Sl.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K7=this.V.AQ;
this.TZ.AER(K7);this.Wq.L(K7);this.T0.AER(K7);this.Wr.L(K7);this.Sl.AER(K7);this.
Zj.L(K7);this.Abf.L(K7);this.Zj.Z(!this.Sl.Fk());},Ce:function(Ad){if(!this.AX)return;
this.Hn=Ad;var Md=this.AX.CE(Ad,1);var H$=this.AX.AmU(Ad,14);var Aul=this.AX.CE(
Ad,5);var LQ=this.AX.I2(Ad,13);this.T(Md.toFixed());if(!!LQ){this.TZ.Z(true);this.
TZ.AwE(A._GetAutoObject(A.acj.Assessment).Bc2(LQ));this.Wq.Z(false);}else{this.TZ.
Z(false);this.Wq.Z(true);}if(Aul>0){this.T0.Z(true);this.T0.AwE(A._GetAutoObject(
A.acj.Assessment).Bc2(A._GetAutoObject(A.Device.Converter).AsE(H$,Aul)));this.Wr.
Z(false);}else{this.T0.Z(false);this.Wr.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kh._Init.call(this.TZ={I:this},0);A.acg.Text._Init.
call(this.Wq={I:this},0);C.Kh._Init.call(this.T0={I:this},0);A.acg.Text._Init.call(
this.Wr={I:this},0);C.Kh._Init.call(this.Sl={I:this},0);A.acg.Text._Init.call(this.
Zj={I:this},0);A.acg.Text._Init.call(this.Abf={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0);A.acg.AL._Init.call(this.
Ea={I:this},0);A.acg.AL._Init.call(this.Ls={I:this},0);this.__proto__=C.AjA;this.
Wq.H(AZz);this.Wq.R(Aov);this.Wr.H(Aow);this.Wr.R(Aov);this.Sl.AwE(A.jb.Re);this.
Zj.H(Aow);this.Zj.R(Rl);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ls.L(A.jb.Bc);this.J(this.TZ,0);this.J(this.Wq,0);this.J(this.T0,0);this.J(
this.Wr,0);this.J(this.Sl,0);this.J(this.Zj,0);this.J(this.Abf,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Ls,0);this.Wq.S(A.aaL(A.fl.Af
));this.Wr.S(A.aaL(A.fl.Af));this.Zj.S(A.aaL(A.fl.Af));this.Abf.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.TZ._Done();this.Wq.
_Done();this.T0._Done();this.Wr._Done();this.Sl._Done();this.Zj._Done();this.Abf.
_Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Ls._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.TZ._ReInit();this.Wq.
_ReInit();this.T0._ReInit();this.Wr._ReInit();this.Sl._ReInit();this.Zj._ReInit(
);this.Abf._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.
Ls._ReInit();this.Wq.S(A.aaL(A.fl.Af));this.Wr.S(A.aaL(A.fl.Af));this.Zj.S(A.aaL(
A.fl.Af));this.Abf.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pq:null,Ang:null
,EZ:null,DR:null,Arj:0,Ark:0,A7d:0,AmL:0,AqF:0,Init:function(aArg){this.AST(6);this.
ASU(8);this.AS5(A.jb.AV);this.AS6(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.BlF([this.DR.Aba[0],(B=this.DR.M)[3]-B[1]]);this.WF(this);},ASS:function(
E){if(this.Pq===E)return;this.Pq=E;this.DR.ASS(E);},AS6:function(E){if(this.Ark===
E)return;this.Ark=E;this.DR.AS6(E);},AS5:function(E){if(this.Arj===E)return;this.
Arj=E;this.DR.AS5(E);this.DR.BlL(E);},WF:function(G){var B;while(!!this.DR.Ah)this.
HN(this.DR.Ah);if(!this.EZ)return;this.DR.AnB([((this.EZ.OE[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gg[2]-this.EZ.Gg[0]))|0,this.DR.OE[1]]);this.DR.AnB([this.DR.OE[0]
,((this.EZ.OE[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gg[3]-this.EZ.Gg[1]))|0]);var O;
var Dg=this.DR.OE[1];var D8;var A4s=this.EZ.Gg[1];var BjX=(((B=this.DR.M)[3]-B[1
])/this.DR.OE[1])|0;for(O=0;O<BjX;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dg))-(this.Ang.Ascent+this.Ang.Descent))+2,((B=this.M)[2]-
B[0])-this.Ark,(((B=this.M)[3]-B[1])-(O*Dg))+2]);D8.L(this.A7d);D8.S(this.Ang);D8.
A6(0x24);if(O>0)D8.R(this.AJF(A4s));else D8.R(this.AKd());A4s=A4s+this.EZ.OE[1];
this.J(D8,0);}},BF0:function(s){this.WF(s);},BmB:function(E){if(this.Ang===E)return;
this.Ang=E;this.Am();},Azl:function(A0z){var B;if(!this.EZ||(this.EZ.Gg[3]===this.
EZ.Gg[1]))return 0;return(((A0z-this.EZ.Gg[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gg[
3]-this.EZ.Gg[1]))|0;},AeX:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.AeX(null);else{var BC=A._NewObject(A.acv.ACb,0);BC.AwO(this.EZ.AD8);BC.Yh();var
Jw=E.AlH;while(!!Jw){BC.Aqg(this.Byo(Jw.PY),this.Byp(Jw.PZ));Jw=Jw.Ah;}this.DR.AeX(
BC);this.Am();}},Byo:function(BwB){var B;if(!this.EZ||(this.EZ.Gg[2]===this.EZ.Gg[
0]))return 0;return((BwB-this.EZ.Gg[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gg[2]-this.
EZ.Gg[0]);},Byp:function(A0z){var B;if(!this.EZ||(this.EZ.Gg[3]===this.EZ.Gg[1])
)return 0;return((A0z-this.EZ.Gg[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gg[3]-this.EZ.
Gg[1]);},AJF:function(AoR){return AoR.toFixed();},AKd:function(){return A.jV;},ASU:
function(E){if(this.AmL===E)return;this.AmL=E;this.DR.ASU(E);},AST:function(E){if(
this.AqF===E)return;this.AqF=E;this.DR.AST(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIw);this.A7d=A.jb.Text;this.DR.AZ(0x3F);this.DR.H(AIw);this.DR.Bm1(AZA);this.
DR.Blt(A.jb.Re);this.DR.Bmi(A.jb.Bc);this.DR.Bnl(A.jb.Re);this.J(this.DR,0);this.
Pq=A.aaL(A.acv.ACv);this.Ang=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.BmB(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pq)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ang)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMT={AJF:function(AoR){return A._GetAutoObject(
A.Device.Converter).AxX(AoR,0);},AKd:function(){return A._GetAutoObject(A.acj.DV
).AfZ();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AMT;}
,_className:"Application::BodyWeightGraph"};C.O0={JI:null,Ex:null,Eh:null,FT:null
,ID:null,IE:null,Init:function(aArg){this.ASS(null);},WF:function(G){var B;var F;
C.DR.WF.call(this,G);var AKJ=0;var ALx=0;if(!!this.JI){AKJ=this.Azl(A._GetAutoObject(
A.Device.Helper).AC2((F=this.JI,F[1].call(F[0]))));ALx=this.Azl(A._GetAutoObject(
A.Device.Helper).AC1((F=this.JI,F[1].call(F[0]))));}this.FT.H(A.abP(this.FT.M,0)
);this.FT.H([].concat(this.FT.M.slice(0,3),((B=this.M)[3]-B[1])-ALx));this.ID.H(
A.abO(this.ID.M,(this.FT.M[3]-((((B=this.ID.M)[3]-B[1])/2)|0))-2));this.Eh.H(A.abP(
this.Eh.M,this.FT.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-
B[1])-AKJ));this.IE.H(A.abO(this.IE.M,(this.Eh.M[3]-((((B=this.IE.M)[3]-B[1])/2)|
0))+2));this.Ex.H(A.abP(this.Ex.M,this.Eh.M[3]));this.Ex.H([].concat(this.Ex.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJF:function(AoR){return A._GetAutoObject(A.Device.Converter
).S2(AoR,0,true);},AKd:function(){return A._GetAutoObject(A.acj.DV).Aax();},Anx:
function(E){if(A.aaZ(this.JI,E))return;if(!!this.JI)A.z$([this,this.AiL],this.JI
,0);this.JI=E;if(!!E)A.zX([this,this.AiL],E,0);if(!!E)A.pe([this,this.AiL],this);
},AiL:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ex={I:this},0);A.acg.AL._Init.call(this.Eh={I:this},0);A.
acg.AL._Init.call(this.FT={I:this},0);A.acg.AL._Init.call(this.ID={I:this},0);A.
acg.AL._Init.call(this.IE={I:this},0);this.__proto__=C.O0;this.Ex.AZ(0xD);this.Ex.
H(Z$);this.Ex.L(A.jb.Gf);this.Eh.AZ(0xD);this.Eh.H(S6);this.Eh.L(A.jb.H6);this.FT.
AZ(0xD);this.FT.H(AcM);this.FT.L(A.jb.E1);this.ID.AZ(0xD);this.ID.H(Aab);this.ID.
Aws(A.jb.H6);this.ID.Awt(A.jb.H6);this.ID.Awv(A.jb.E1);this.ID.Awu(A.jb.E1);this.
IE.AZ(0xD);this.IE.H(W$);this.IE.Aws(A.jb.Gf);this.IE.Awt(A.jb.Gf);this.IE.Awv(A.
jb.H6);this.IE.Awu(A.jb.H6);this.J(this.Ex,-1);this.J(this.Eh,-1);this.J(this.FT
,-1);this.J(this.ID,-1);this.J(this.IE,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ex._Done();this.Eh._Done();this.FT._Done();this.ID._Done();this.
IE._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ex._ReInit();this.Eh._ReInit();this.FT._ReInit();this.ID._ReInit();this.IE._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JI)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ID)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqW={EU:null,EZ:null,R5:null,Ii:
null,Bc:null,AxF:A.jV,DK:A.jV,AOR:null,Init:function(aArg){},Bk:function(aSize){
A.Core.P.Bk.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R5.
H([30,0,aSize[0]-2,30]);this.Ii.H(this.R5.M);if(!!this.EU)this.EU.H([30,this.R5.
M[3],aSize[0],this.Bc.M[1]]);},Ahn:function(E){if(this.AxF===E)return;this.AxF=E;
this.Ii.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.R5.R(E);},AE9:
function(E){if(this.AOR===E)return;this.AOR=E;this.BoA(this);},BoA:function(G){var
B;if(!!this.EU)this.HN(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOR,0))?B:null);if(!!this.EU){this.EU.H(AZB);this.EU.AeX(this.EZ);this.J(this.EU
,0);}},AeX:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.AeX(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
R5={I:this},0);A.acg.Text._Init.call(this.Ii={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqW;this.H(AcO);this.Ar(false);this.R5.H(AZC);this.
R5.A6(0x11);this.R5.R(Lv);this.R5.L(A.jb.Text);this.Ii.A6(0x14);this.Ii.R(A.jV);
this.Ii.L(A.jb.Text);this.Bc.H(AZD);this.Bc.L(A.jb.Bc);this.J(this.R5,0);this.J(
this.Ii,0);this.J(this.Bc,0);this.R5.S(A.aaL(A.fl.Ak));this.Ii.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.R5._Done();this.
Ii._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.R5._ReInit();this.Ii._ReInit();this.Bc._ReInit();this.
R5.S(A.aaL(A.fl.Ak));this.Ii.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMs={Agv:null,G2:function(E
){var F;C.F$.G2.call(this,E);if(!!this.Agv)(F=this.Agv,F[2].call(F[0],E));},A9p:
function(E){if(A.aaZ(this.Agv,E))return;if(!!this.Agv)A.z$([this,this.A2Q],this.
Agv,0);this.Agv=E;if(!!E)A.zX([this,this.A2Q],E,0);if(!!E)A.pe([this,this.A2Q],this
);},A2Q:function(G){var F;if(!this.Agv)return;(F=this.Agv,F[2].call(F[0],this.FH(
)));},_Init:function(aArg){C.F$._Init.call(this,aArg);this.__proto__=C.AMs;},_Mark:
function(D){var B;C.F$._Mark.call(this,D);if((B=this.Agv)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AT_={Rc:null
,PU:null,XX:null,XY:null,Mt:0,CP:function(){this.Am();},Bk:function(aSize){var B;
A.Core.P.Bk.call(this,aSize);this.Rc.H(A.abI(this.Rc.M,(((B=this.M)[3]-B[1])/2)|
0));this.PU.H(A.abI(this.PU.M,(((B=this.M)[3]-B[1])/2)|0));this.Rc.H(A.abO(this.
Rc.M,(((B=this.M)[3]-B[1])/2)|0));this.PU.H(A.abO(this.PU.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rc.R(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.BjR),P6,this.Mt.toFixed()));},Ab7:function(E){if(
this.Mt===E)return;this.Mt=E;this.BBn(this);},BBn:function(G){var B;var AJN=(((B=
this.M)[2]-B[0])/this.Mt)|0;this.XX.H(A.abM(this.XX.M,(((B=this.M)[2]-B[0])-(this.
Mt*AJN))+(((AJN/2)-(((B=this.XX.M)[2]-B[0])/2))|0)));this.XY.H(A.abM(this.XY.M,(((
B=this.M)[2]-B[0])-AJN)+(((AJN/2)-(((B=this.XY.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rc={
I:this},0);A.acg.Text._Init.call(this.PU={I:this},0);A.acg.Text._Init.call(this.
XX={I:this},0);A.acg.Text._Init.call(this.XY={I:this},0);this.__proto__=C.AT_;this.
H(BF);this.Rc.H(AZE);this.Rc.Hh(5);this.Rc.A6(0x11);this.Rc.L(A.jb.Text);this.PU.
H(Bqo);this.PU.Hh(5);this.PU.A6(0x14);this.PU.R(A.aaR(A.acf.AhL));this.PU.L(A.jb.
Text);this.XX.H(Bqp);this.XX.R(A$W);this.XX.L(A.jb.Text);this.XY.H(Bqq);this.XY.
R(A$W);this.XY.L(A.jb.Text);this.J(this.Rc,0);this.J(this.PU,0);this.J(this.XX,0
);this.J(this.XY,0);this.Rc.S(A.aaL(A.fl.Ak));this.PU.S(A.aaL(A.fl.Ak));this.XX.
S(A.aaL(A.fl.Hr));this.XY.S(A.aaL(A.fl.Hr));},_Done:function(){this.__proto__=A.
Core.P;this.Rc._Done();this.PU._Done();this.XX._Done();this.XY._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rc._ReInit(
);this.PU._ReInit();this.XX._ReInit();this.XY._ReInit();this.PU.R(A.aaR(A.acf.AhL
));this.Rc.S(A.aaL(A.fl.Ak));this.PU.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rc)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K_={V2:null,AjH:null,KM:A.jV,Mt:0,AaB:false,Init:function(aArg){var A1y=A._NewObject(
C.Ki,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RJ()<A1y.
C4(O))A1y.Ann=O+1;this.V2.CI(A1y);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjH.
Z(this.AaB);if(this.AaB)this.Bb(null);else this.Bb(this.V2);},CF:function(G){var
B;var F;C.D9.CF.call(this,G);if(!(F=this.V2.Q,F[1].call(F[0])))(F=this.V2.Q,F[2].
call(F[0],this.V2.AC.C4(0)));A.zX([this,this.AIX],[B=A._GetAutoObject(A.Device.Helper
),B.UX,B.U0],0);A.zV([this,this.AIX],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amb],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0);A.pe([this
,this.Amb],this);},E3:function(G){var B;A.z$([this,this.AIX],[B=A._GetAutoObject(
A.Device.Helper),B.UX,B.U0],0);A.z9([this,this.AIX],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amb],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId
],0);C.D9.E3.call(this,G);},Zt:function(E){if(A.aa0(this.AR,E))return;C.D9.Zt.call(
this,E);this.V2.AR=E;},Ab7:function(E){if(this.Mt===E)return;this.Mt=E;A.pe([this
,this.Amb],this);},Bv$:function(Aq){this.Ab7(Aq);},AiV:function(G){},AIX:function(
s){this.AiV(s);},Dz:function(E){if(this.KM===E)return;this.KM=E;this.AjH.R(E);},
Amb:function(G){var Fs=A._NewObject(A.Device.Filter,0);var Azv=A._NewObject(A.Device.
UInt32FilterCriterion,0);Azv.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhL()-((this.Mt-1)*86400))-1,true);Fs.CW(Azv);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fs.CW(HV);A._GetAutoObject(
A.Device.Device).Bt.Bl(Fs);},BkQ:function(){return this.Mt;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUy._Init.call(this.V2={I:this},0);C.AkQ._Init.call(
this.AjH={I:this},0);this.__proto__=C.K_;this.V2.H(BF);this.AjH.H(UU);this.J(this.
V2,0);this.J(this.AjH,0);this.V2.As([this,this.BkQ,this.Bv$]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V2._Done();this.AjH._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V2._ReInit();this.AjH.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V2)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjH)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANA={V9:null,YN:null,RatingMode:null,PB:null,_Init:
function(aArg){C.Cd._Init.call(this,aArg);C.Nc._Init.call(this.V9={I:this},0);C.
BW._Init.call(this.YN={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Ip._Init.call(this.PB={I:this},0);this.__proto__=C.ANA;var B;this.Hd.R(A.
aaR(A.acf.ACl));this.I8(A.aaR(A.acf.A5A));this.V9.H(AIx);this.V9.Aj(true);this.V9.
T(A.aaR(A.acf.AsP));this.V9.Bg(true);this.V9.Nf(23);this.YN.H(Bqr);this.YN.Aj(true
);this.YN.T(A.aaR(A.acf.A_S));this.YN.Bg(false);this.PB.H(Bqs);this.PB.Aj(true);
this.PB.T(A.aaR(A.acf.A5x));this.PB.Bg(true);this.PB.F0(3);this.PB.EV(14);this.PB.
IM(A.aaR(A.acf.Ki)+AIy);this.PB.I9(A.aaR(A.acf.GH)+AIy);this.J(this.V9,0);this.J(
this.YN,0);this.J(this.PB,0);this.V9.AR=[B=this.V9,B.Ni];this.YN.As([B=this.RatingMode
,B.B7,B.B8]);this.YN.CI(this.RatingMode);this.PB.As([B=A._GetAutoObject(A.Device.
Device),B.A8t,B.Ba0]);},_Done:function(){this.__proto__=C.Cd;this.V9._Done();this.
YN._Done();this.RatingMode._Done();this.PB._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.V9._ReInit();this.YN._ReInit();this.RatingMode.
_ReInit();this.PB._ReInit();this.Hd.R(A.aaR(A.acf.ACl));this.I8(A.aaR(A.acf.A5A)
);this.V9.T(A.aaR(A.acf.AsP));this.YN.T(A.aaR(A.acf.A_S));this.PB.T(A.aaR(A.acf.
A5x));this.PB.IM(A.aaR(A.acf.Ki)+AIy);this.PB.I9(A.aaR(A.acf.GH)+AIy);},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Au3={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hh(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20
);var GA=this.Bo.Bw;var FN=A.jb.Ad9;var GQ=A.jb.Bm;if(this.Hf){FN=A.jb.Bm;GQ=A.jb.
Text;}if(!G$){this.Background.L(FN);this.V.L(A.jb.CK);}else if(GA){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);}this.LI=G$;this.KE=Fq;this.Qn=GA;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Au3;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.AC_={Ap:null,Init:
function(aArg){var B;A.zX([this,this.D5],[B=A._GetAutoObject(A.Device.Helper).W,
B.PM,B.EB],0);A.pe([this,this.D5],this);},De:function(E){C.BS.De.call(this,E);this.
Ap.L(E);},D5:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Aw(A.aaL(A.ach.AC7));break;case 1:this.Ap.Aw(A.aaL(A.ach.APc));break;
case 2:this.Ap.Aw(A.aaL(A.ach.APe));break;default:A.ab5("%s%e",AZF,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BS._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC_;this.Ap.H(AZG);this.
J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC7));this.Init(aArg);},_Done:function(){this.
__proto__=C.BS;this.Ap._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.AC$={Ap:null,Init:function(aArg){var B;A.zX([this,this.D5],[B=A._GetAutoObject(
A.Device.Helper).W,B.PM,B.EB],0);A.pe([this,this.D5],this);},De:function(E){C.BS.
De.call(this,E);this.Ap.L(E);},D5:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Aw(A.aaL(A.ach.AC8));break;case 1:this.Ap.Aw(A.aaL(
A.ach.APd));break;case 2:this.Ap.Aw(A.aaL(A.ach.APf));break;default:A.ab5("%s%e"
,AZF,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BS.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC$;
this.Ap.H(AZG);this.J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC8));this.Init(aArg);},
_Done:function(){this.__proto__=C.BS;this.Ap._Done();C.BS._Done.call(this);},_ReInit:
function(){C.BS._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BS._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fu={BT:null,AxS:A.jV,De:function(E){C.JG.De.call(
this,E);this.BT.L(E);},Ks:function(E){if(this.AxS===E)return;this.AxS=E;this.BT.
R(E);},_Init:function(aArg){C.JG._Init.call(this,aArg);C.CH._Init.call(this.BT={
I:this},0);this.__proto__=C.Fu;this.BT.AZ(0x34);this.BT.H(Ayt);this.BT.A6(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(
A.fl.Ak));this.BT.Cu(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JG;this.
BT._Done();C.JG._Done.call(this);},_ReInit:function(){C.JG._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.BT.Cu(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JG._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOA={Wv:function(G){var B;this.Agp();this.AL5(A.aaR(A.acf.Bi0),[this,this.Bnx],[
B=A._GetAutoObject(A.Device.Device),B.A8u,B.Ba1]);A._GetAutoObject(C.BH).Ft();this.
IY(A.aaR(A.acf.AU$),[this,this.ATz],5);this.IY(A.aaR(A.acf.AU9),[this,this.ATy],
7);this.IY(A.aaR(A.acf.An3),[this,this.AwR],2);this.IY(A.aaR(A.acf.XP),[this,this.
AEN],1);this.IY(A.aaR(A.acf.Auy),[this,this.AEH],0);A._GetAutoObject(C.BH).Ft();
A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},DE:function(G){},Abs:function(){return C.ABZ;},Abt:function(
){return C.ADg;},Q6:function(G){A._GetAutoObject(A.Device.Device).An.Bl(A._GetAutoObject(
A.Device.Helper).A6B());},HO:function(G){C.GU.HO.call(this,G);if(this.Akh()===false
){this.N.Cs(A.aaL(A.ach.AbD));this.N.Ck=[this,this.A53];this.N.FJ(A.jV);}this.N.
OO(false);this.N.OP(false);},Agb:function(){A._GetAutoObject(C.A$).Cg(44);},Bnx:
function(G){A._GetAutoObject(A.Device.Device).AwH(!A._GetAutoObject(A.Device.Device
).AqR);this.An$(this);},An$:function(G){var Be=A._GetAutoObject(A.Device.Device).
An.Filter.Fg();var Av=Be.DQ(30,3);if(!!Av)Be.N3(Av);if(A._GetAutoObject(A.Device.
Device).AqR){var AAb=A._NewObject(A.Device.UInt32FilterCriterion,0);var A2o=A._GetAutoObject(
A.Device.Helper).Dv()-21600;AAb.Initialize(30,3,A2o,true);Be.CW(AAb);}A._GetAutoObject(
A.Device.Device).An.Bl(Be);},_Init:function(aArg){C.GU._Init.call(this,aArg);this.
__proto__=C.AOA;var B;this.Dq(C.AO_);this.Dz(A.aaR(A.acf.A7T));this.AwM([B=A._GetAutoObject(
A.Device.Device),B.A8s,B.BaZ]);},_ReInit:function(){C.GU._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7T));},_className:"Application::FreshCowListScreen"};C.AOz={_Init:
function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AOz;this.Ld.Ar(false);
this.Ld.Aj(false);this.Ld.Z(false);this.Jn.Ar(false);this.Jn.Aj(false);this.Jn.Z(
false);},_className:"Application::FreshCowListFilterScreen"};C.AO_={D5:function(
G){C.Km.D5.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdW(7));
},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.AO_;},_className:
"Application::HeaderFreshCowListFilter"};C.ADg={Jt:null,DZ:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.Jt={I:this},0);C.CH._Init.call(
this.DZ={I:this},0);this.__proto__=C.ADg;this.A9K(1);this.Jt.H(Bqt);this.Jt.R((A.
aaR(A.acf.Calving)+Aah)+A.aaR(A.acf.A$s));this.Jt.L(A.jb.Text);this.DZ.H(Bqu);this.
DZ.R(A.aaR(A.acf.AD0));this.DZ.L(A.jb.Text);this.J(this.Jt,0);this.J(this.DZ,0);
this.Jt.S(A.aaL(A.fl.Ak));this.Jt.A2(A.aaL(A.fl.Bh));this.DZ.S(A.aaL(A.fl.Ak));this.
DZ.A2(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.Jt._Done();this.
DZ._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
Jt._ReInit();this.DZ._ReInit();this.Jt.R((A.aaR(A.acf.Calving)+Aah)+A.aaR(A.acf.
A$s));this.DZ.R(A.aaR(A.acf.AD0));this.Jt.S(A.aaL(A.fl.Ak));this.Jt.A2(A.aaL(A.fl.
Bh));this.DZ.S(A.aaL(A.fl.Ak));this.DZ.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
DZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.ABZ={AGR:null,KP:null,UA:null,AP:null,A_:null,Init:function(aArg){},Bk:function(
aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.UA.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A_.H([this.UA.M[2]-1,0,this.UA.M[2]+1,aSize[1]]);this.KP.H([this.UA.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.
UA.De(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var
Ic=this.AX.CE(Ad,0);var Md=this.AX.CE(Ad,1);var A2n=this.AX.CE(Ad,29);var Alz=this.
AX.HF(Ad,28);this.T(Md.toFixed());this.KP.R(A2n.toFixed());this.UA.Ab7(A._GetAutoObject(
A.Device.Device).AqQ+1);this.UA.Bnd(Alz);this.UA.R(A._GetAutoObject(A.acj.KK).AjM(
Alz));A._GetAutoObject(A.Device.Device).SJ(Ad);this.Ap6(Ic);this.Axo();A._GetAutoObject(
A.Device.Device).Bt.Bl(null);this.Am();}},A4h:function(G){this.UA.Ab9(this.AGR);
},Axo:function(){var Gd=A._GetAutoObject(A.Device.Device).Bt.Ca();this.AGR=A._NewObject(
C.Ajs,0);if(Gd>0){var O=Gd-1;while(O>=0){var D8=A._GetAutoObject(A.Device.Device
).Bt.HF(O,6);this.Att(this.AGR,O,9,D8);O=O-1;}}A.pe([this,this.A4h],this);},Att:
function(A0T,Ad,A0S,Qa){var Alt=A._GetAutoObject(A.Device.Device).Bt.I2(Ad,A0S);
if(!!Alt)A0T.Os(Alt,Qa);},Ap6:function(Ac4){var Fs=A._NewObject(A.Device.Filter,
0);var Azv=A._NewObject(A.Device.UInt32FilterCriterion,0);Azv.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).ZP(A._GetAutoObject(A.Device.Device).AqQ)-1,true);Fs.CW(Azv);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,Ac4,true);Fs.
CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bl(Fs);},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.Text._Init.call(this.KP={I:this},0);C.AT5._Init.call(this.
UA={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A_={I:this},0);this.__proto__=C.ABZ;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.J(
this.KP,0);this.J(this.UA,0);this.J(this.AP,0);this.J(this.A_,0);this.KP.S(A.aaL(
A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.KP._Done();
this.UA._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.KP._ReInit();this.UA._ReInit();this.AP._ReInit(
);this.A_._ReInit();this.KP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AGR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.AT5={AUM:0,Init:function(aArg
){},AOH:function(){return A._GetAutoObject(A.Device.Helper).Aqp(this.AUM);},AOJ:
function(){return this.AOH()+(this.Mt*86400);},Bnd:function(E){if(this.AUM===E)return;
this.AUM=E;A.pe([this,this.WF],this);},_Init:function(aArg){C.Aht._Init.call(this
,aArg);this.__proto__=C.AT5;this.Bc.H(Bqv);this.Bna(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Do:function(){if(this.K&&this.K.Do)return this.K.Do.apply(this,arguments);else
return C.FactoryResetScope.Bt$.apply(this,arguments);},Bt$:function(){return 2;}
,FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.FactoryResetScopeToString.
BI(this.C4(aIndex));},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.FactoryResetScopeToString.
_Init.call(this.FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;
this.Cf.Set(0,0);this.Cf.Set(1,1);var Lw=this._variants();if(Lw){this.K={};Lw._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Cm;this.FactoryResetScopeToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Bgm:false,Init:function(
aArg){this.Bgm=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Ev:function(
G){if(this.Bdu){A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).An);if(this.Bgm)A._GetAutoObject(A.Device.Device).A9(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A9(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Ev.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.AR3={Wv:function(G){this.Agp();A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.Settings
),[this,this.A3o]);A._GetAutoObject(C.BH).Ft();this.AL3();A._GetAutoObject(C.BH).
MZ(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.
BH).MZ(A.aaR(A.acf.ARh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},DE:function(G){},Abs:function(){return C.Amz;},Abt:function(){return C.Am0;
},Q6:function(G){A._GetAutoObject(A.Device.Device).An.Bl(A._GetAutoObject(A.Device.
Helper).ACU());},HO:function(G){C.Tu.HO.call(this,G);if(this.Akh()===false){this.
N.Cs(A.aaL(A.ach.Avv));this.N.Ck=[this,this.ANT];this.N.FJ(A.jV);}this.N.OO(false
);this.N.OP(false);},Agb:function(){A._GetAutoObject(C.A$).Cg(47);},A3o:function(
G){A._GetAutoObject(A.Device.Device).Ds(0);A._GetAutoObject(C.A$).Cg(89);},_Init:
function(aArg){C.Tu._Init.call(this,aArg);this.__proto__=C.AR3;this.Dq(C.ADa);this.
Dz(A.aaR(A.acf.A7P));this.AS7(A._GetAutoObject(C.Av4));},_ReInit:function(){C.Tu.
_ReInit.call(this);this.Dz(A.aaR(A.acf.A7P));},_className:"Application::NoTransponderListScreen"
};C.AR2={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AR2;this.
KW.Ar(false);this.KW.Aj(false);this.KW.Z(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ADa={D5:function(G){C.Km.D5.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdW(8));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.ADa;},_className:"Application::HeaderNoTransponderListFilter"};C.ABI={AuP:null
,FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuP.BI(aIndex
);},_Init:function(aArg){C.Ga._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuP={I:this},0);this.__proto__=C.ABI;},_Done:function(){this.__proto__=
C.Ga;this.AuP._Done();C.Ga._Done.call(this);},_ReInit:function(){C.Ga._ReInit.call(
this);this.AuP._ReInit();},_Mark:function(D){var B;C.Ga._Mark.call(this,D);if((B=
this.AuP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.ALY={Co:null,AdZ:null,Init:function(aArg){this.Bb(this.Co);},KR:function(){if(
!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.XA];this.Bx.Ck=null;
this.Bx.Cl=[this,this.A21];this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.
ach.Aew));}return this.Bx;},AAr:function(G){var Aa=(C.Aji.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.AdZ)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$X);},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Aji._Init.call(this.
Co={I:this},0);C.Aji._Init.call(this.AdZ={I:this},0);this.__proto__=C.ALY;this.H(
Rk);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(IR);this.Co.T(A.aaR(A.acf.
AD$));this.AdZ.H(P7);this.AdZ.T(A.aaR(A.acf.Tt));this.J(this.Co,0);this.J(this.AdZ
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAr];this.AdZ.AR=[this,this.
AAr];this.Init(aArg);},_Done:function(){this.__proto__=C.Fm;this.Co._Done();this.
AdZ._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.
Co._ReInit();this.AdZ._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AD$));this.AdZ.T(A.aaR(A.acf.Tt));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fm._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AdZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BFm={Undefined:0,BFk:1,BFl:2,IdScanned:3,BEj:4,BDk:5,BD5:6};C.AMa={A$c:function(
){A._GetAutoObject(A.Device.Device).A9(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Be1]);},_Init:function(aArg){C.AuF._Init.call(
this,aArg);this.__proto__=C.AMa;this.Ga.As(1);this.ATb(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aeq={VQ:null,VS:null,VT:null,AgV:null,AgW:null,AgX:null,CB:null,Ck:null,Cl:null
,An4:A.jV,An5:A.jV,An6:A.jV,Aq6:0,Aq7:0,Aq8:0,Ahc:0,ZC:false,ZB:false,Asl:false,
Asz:false,Asy:false,Ajy:function(Fa){this.CB=Fa.CB;this.Ck=Fa.Ck;this.Cl=Fa.Cl;this.
An4=Fa.An4;this.An5=Fa.An5;this.An6=Fa.An6;this.Ahc=Fa.Ahc;this.VQ=Fa.VQ;this.VS=
Fa.VS;this.VT=Fa.VT;this.AgV=Fa.AgV;this.AgW=Fa.AgW;this.AgX=Fa.AgX;this.Asy=Fa.
Asy;this.Asz=Fa.Asz;this.Asl=Fa.Asl;this.ZB=Fa.ZB;this.ZC=Fa.ZC;this.Aq6=Fa.Aq6;
this.Aq7=Fa.Aq7;this.Aq8=Fa.Aq8;},AkP:function(Fa){Fa.CB=this.CB;Fa.Ck=this.Ck;Fa.
Cl=this.Cl;Fa.Hu(this.An4);Fa.FJ(this.An5);Fa.CV(this.An6);Fa.AFd(this.Ahc);Fa.AE6(
this.VQ);Fa.ArN(this.VS);Fa.AnA(this.VT);Fa.CY(this.AgV);Fa.Cs(this.AgW);Fa.C6(this.
AgX);Fa.OO(this.Asy);Fa.OP(this.Asz);Fa.Asl=this.Asl;Fa.ZB=this.ZB;Fa.ZC=this.ZC;
Fa.Bmk(this.Aq6);Fa.AS1(this.Aq7);Fa.A9V(this.Aq8);},_Init:function(aArg){this.__proto__=
C.Aeq;this.VQ=A.aaL(A.fl.Ak);this.VS=A.aaL(A.fl.Ak);this.VT=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VQ=A.aaL(
A.fl.Ak);this.VS=A.aaL(A.fl.Ak);this.VT=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VS)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.VT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgW)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AgX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CB)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Asv._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dq(C.AC_);},_className:"Application::NewAnimalSetTransponderScreen"};C.C7={Abb:null
,CountryToString:null,Do:function(){return 40;},C4:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lt(aIndex);},DU:function(A7){return A7;
},HH:function(){return 39;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.
Abb)(F=this.Abb,F[2].call(F[0],E));},A1q:function(G){var F;if(!!this.Abb)this.Q=(
F=this.Abb,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},AEY:
function(E){if(A.aaZ(this.Abb,E))return;if(!!this.Abb)A.z$([this,this.A1q],this.
Abb,0);this.Abb=E;if(!!this.Abb)A.zX([this,this.A1q],this.Abb,0);A.pe([this,this.
A1q],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C7;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abb)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OZ={AC:null,Q:null,Background:null,In:null,Im:null,M0:
0,AM:0,Gl:0,FZ:0,Af_:function(G){this.J$(this);},Bk:function(aSize){A.Core.P.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.
L(A.jb.AV);this.Dr(256);}else{this.Background.L(this.M0);this.Dr(256);}},Af9:function(
G){this.J6(this);},CI:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3m],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3m],E,0);if(!!E)A.pe([this
,this.A3m],this);},CT:function(E){if(this.M0===E)return;this.M0=E;this.Am();},J$:
function(G){var F;var BR=this.AM;this.By(this.AM+1);if(this.AM!==BR){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},J6:function(
G){var F;var BR=this.AM;this.By(this.AM-1);if(this.AM!==BR){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(
E){if(E<this.Gl)E=this.FZ;if(E>this.FZ)E=this.Gl;if(this.AM===E)return;this.AM=E;
this.Am();},F0:function(E){if(this.Gl===E)return;this.Gl=E;this.Am();},EV:function(
E){if(this.FZ===E)return;this.FZ=E;this.Am();},C2:function(G){var F;if(!!this.Q)
this.By(this.AC.DU((F=this.Q,F[1].call(F[0]))));},As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},A3m:function(G){var F;if(!!this.
AC){this.F0(0);this.EV(this.AC.HH());if(!!this.Q)this.By(this.AC.DU((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BN._Init.call(this.In={
I:this},0);A.Core.BN._Init.call(this.Im={I:this},0);this.__proto__=C.OZ;this.H(A$Y
);this.Background.H(Ate);this.In.Filter=4;this.Im.Filter=5;this.M0=A.jb.CK;this.
J(this.Background,0);this.In.BO=[this,this.Af_];this.In.D0=[this,this.Af_];this.
Im.BO=[this,this.Af9];this.Im.D0=[this,this.Af9];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.In._Done();this.Im._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.In._ReInit();this.Im._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RO={A1i:A.jV,Ai:function(
Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5j));this.Ks(this.A1i);},Ce:function(
G){C.Fu.Ce.call(this,G);var Alz=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Alz)this.A1i=Xa;else this.A1i=A._GetAutoObject(A.acj.KK).AjM(Alz);this.Am();
},_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RO;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RP={A2m:0,Ai:function(Ae){C.Fu.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARf));if(this.A2m>0)this.Ks(this.A2m.toFixed());else
this.Ks(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fu.Ce.call(this,G);this.A2m=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fu._Init.call(
this,aArg);this.__proto__=C.RP;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Do:function(){return 5;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},FX:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 4;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akx(E);},A1K:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B7,
this.B8],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1K],[B=this.Animal,B.ASk,B.Akx],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1K],[B=this.Animal,B.ASk,B.Akx],0);A.pe([this,this.A1K],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Do:function(){return 99;},C4:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BI(aIndex);},DU:function(A7){return A7;
},HH:function(){return 98;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal
)this.Animal.NY(E);},A1g:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B7,this.B8],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1g],[B=this.Animal,B.Av8,B.NY],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1g],[B=this.Animal,B.Av8,B.NY],0);A.pe([
this,this.A1g],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARA={V5:null,YL:null,AeJ:null,Init:function(
aArg){this.Bb(this.V5);},Adt:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YL)this.BxU();else if(Aa===this.V5)this.BAB(this);else throw new
Error(Ayc);A._GetAutoObject(A.Device.Device).Ds(0);},BAB:function(G){var B;var F;
var Vh=(C.Amr.isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null
);if(!Vh){A.ab5("%s",Bqw);return;}Vh.AKz(this);},BxU:function(){A._GetAutoObject(
A.Device.Helper).W.AGz(true);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A9(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ml._Init.call(this.V5={I:this},0);C.Ml._Init.call(this.YL={
I:this},0);C.VL._Init.call(this.AeJ={I:this},0);this.__proto__=C.ARA;var B;this.
H(AcO);this.V5.H(P7);this.V5.Ar(true);this.V5.T(A.aaR(A.acf.A_U));this.V5.Bg(true
);this.YL.H(IR);this.YL.Ar(true);this.YL.T(A.aaR(A.acf.A4I));this.YL.Bg(true);this.
AeJ.H(BF);this.AeJ.T(A.aaR(A.acf.ACJ));this.AeJ.Bg(true);this.J(this.V5,0);this.
J(this.YL,0);this.J(this.AeJ,0);this.V5.AR=[this,this.Adt];this.YL.AR=[this,this.
Adt];this.AeJ.ASP([B=A._GetAutoObject(A.Device.Device),B.Art,B.Atg]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V5._Done();this.YL._Done(
);this.AeJ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V5._ReInit();this.YL._ReInit();this.AeJ._ReInit();this.V5.
T(A.aaR(A.acf.A_U));this.YL.T(A.aaR(A.acf.A4I));this.AeJ.T(A.aaR(A.acf.ACJ));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeJ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VL={
Ai:function(Ae){C.T9.Ai.call(this,Ae);var FN=A.jb.CK;var GQ=A.jb.Text;if(this.Hf
){FN=A.jb.Text;GQ=A.jb.Bm;}if(!this.LI){this.Background.L(FN);this.V.L(A.jb.Am4);
}else if(this.Qn){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.
L(GQ);}if(this.AmB){this.Mj.Cv(1);this.Mj.L(A.jb.H6);}else{this.Mj.Cv(0);this.Mj.
L(A.jb.Bm);}},_Init:function(aArg){C.T9._Init.call(this,aArg);this.__proto__=C.VL;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AvX={C8:null,A1:null,AF:
null,Aki:null,QS:null,EN:null,ARS:Lv,Bk:function(aSize){C.Co.Bk.call(this,aSize);
var FN=A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FN=A.jb.Bm;GQ=A.jb.Text;}this.Background.
L(FN);this.V.L(GQ);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CA;C.Co.Ai.call(this
,Ae);this.Aki.L(this.V.AQ);this.QS.L(this.V.AQ);this.QS.R(Bqx);this.T(((this.ARS+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak5(840003123456789).toFixed(
));if(!!this.A1&&!!this.AF){var A2r=this.QS.Afd([(this.QS.String.length-(F=this.
AF,F[1].call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3M=this.QS.Afd([this.
QS.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABb=this.QS.Db();this.EN.H([
A2r[0]-1,ABb[1],A3M[0]+1,ABb[3]]);}else this.EN.H(this.QS.Db());},DB:function(E){
if(this.C8===E)return;this.C8=E;this.Aki.Aw(E);},OM:function(E){if(A.aaZ(this.A1
,E))return;if(!!this.A1)A.z$([this,this.AaH],this.A1,0);this.A1=E;if(!!E)A.zX([this
,this.AaH],E,0);if(!!E)A.pe([this,this.AaH],this);},PN:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaI],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaI],E,0);if(!!E)A.pe([this,this.AaI],this);},AaI:function(G){this.Am(
);},AaH:function(G){this.Am();},ArZ:function(E){if(this.ARS===E)return;this.ARS=
E;this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Aki={I:this},0);A.acg.Text._Init.call(this.QS={I:this},0);A.acg.BU._Init.call(
this.EN={I:this},0);this.__proto__=C.AvX;this.H(J0);this.V.A6(0x11);this.Aki.H(P5
);this.QS.H(Bqy);this.EN.H(Bqz);this.EN.Nh(2);this.EN.L(A.jb.E1);this.J(this.Aki
,0);this.J(this.QS,0);this.J(this.EN,0);this.QS.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Aki._Done();this.QS._Done();this.EN._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Aki._ReInit();this.
QS._ReInit();this.EN._ReInit();this.QS.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aki)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={ATZ:0,Init:
function(aArg){var B;A.zX([this,this.Bek],[B=A._GetAutoObject(A.Device.Device),B.
AEq,B.AIH],0);A.pe([this,this.Bek],this);},HO:function(G){C.Tx.HO.call(this,G);if(
this.AjQ)this.N.Cs(A.aaL(A.ach.AD));else this.N.Cs(A.aaL(A.ach.ANb));this.N.C6(A.
aaL(A.ach.Options));this.N.FJ(A.jV);this.N.CV(A.jV);this.N.Ck=[this,this.A_D];this.
N.Cl=[this,this.Wv];this.N.ArN(A.aaL(A.fl.Ak));this.N.AnA(A.aaL(A.fl.Ak));},MU:function(
G){this.BeF(this);},Om:function(G){this.BAw(this);},Ago:function(Ac5,Ac6,BwY){A.
_GetAutoObject(C.BH).AuA(Ac5,Ac6,[this,this.A8O,this.ATe],BwY);},Wv:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjQ){A._GetAutoObject(C.BH).
Qw(A.aaR(A.acf.BhL),[this,this.Bnt]);A._GetAutoObject(C.BH).Ft();}this.Ago(A.aaR(
A.acf.Rating),[this,this.ATE],3);this.Ago(A.aaR(A.acf.Afr),[this,this.ATG],2);this.
Ago(A.aaR(A.acf.Temperature),[this,this.ATF],1);this.Ago(A.aaR(A.acf.XP),[this,this.
ATD],0);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.A5S));
A._GetAutoObject(A.Device.Device).Ds(6);},ATe:function(E){if(this.ATZ===E)return;
this.ATZ=E;A.abo([this,this.A8O,this.ATe],0);},Bek:function(G){this.ATe(A._GetAutoObject(
A.Device.Device).D9);},A8O:function(){return this.ATZ;},_Init:function(aArg){C.Tx.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vu:null
,Init:function(aArg){var B;A.zX([this,this.Af6],[B=A._GetAutoObject(A.Device.Device
).An,B.Fj,B.Fn],0);A.pe([this,this.Bgr],this);A.pe([this,this.Q6],this);},CF:function(
G){C.Tx.CF.call(this,G);A.pe([this,this.Bgx],this);},AGF:function(G){C.Tx.AGF.call(
this,G);if(!!this.Lf)this.Ahw(this.Lf,this.Vu);},HO:function(G){C.Tx.HO.call(this
,G);this.N.Cs(A.aaL(A.ach.AQP));this.N.C6(A.aaL(A.ach.AQQ));if(this.AjQ)this.N.AS1(
0);else this.N.AS1(1);this.N.A9V(A._GetAutoObject(A.Device.Converter).BgV(A._GetAutoObject(
A.Device.Device).D9));this.N.FJ(A.jV);this.N.CV(A.jV);this.N.Ck=[this,this.Blj];
this.N.Cl=[this,this.Bnv];this.N.ArN(A.aaL(A.fl.Ak));this.N.AnA(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QE()){this.N.I4.Dr(100);this.N.Ck=null;
}else this.N.I4.Dr(255);if(!A._GetAutoObject(A.Device.Device).An.Ca()){this.N.Le.
Dr(100);this.N.Cl=null;}else this.N.Le.Dr(255);if(A._GetAutoObject(A.Device.Device
).An.Ca()<=1){this.N.TW.Dr(100);this.N.TX.Dr(100);}else{this.N.TW.Dr(255);this.N.
TX.Dr(255);}},MU:function(G){if(A._GetAutoObject(A.Device.Device).An.Ca()<=1)return;
var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;if(LC>=A._GetAutoObject(A.
Device.Device).An.Ca())LC=0;A._GetAutoObject(A.Device.Helper).HL(LC);},Om:function(
G){if(A._GetAutoObject(A.Device.Device).An.Ca()<=1)return;var LC=A._GetAutoObject(
A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(A.Device.Device).An.Ca(
)-1;A._GetAutoObject(A.Device.Helper).HL(LC);},Af5:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A$).Cg(94);},Blj:function(G){A._GetAutoObject(
A.Device.Device).Ds(10);},Bnv:function(G){this.BeF(this);},Q6:function(G){A._GetAutoObject(
A.Device.Device).An.Bl(A._GetAutoObject(A.Device.Helper).Mo());A.pe([this,this.Bgx
],this);},Bgr:function(G){if(!A._GetAutoObject(A.Device.Device).An.Ca()){this.Vu.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QE()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.Vu.R(A.aaR(A.acf.AEh));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DQ(1,4)){if(A._GetAutoObject(A.Device.Helper).ACV(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Vu.R(A.aaR(A.acf.AN3));else this.Vu.R(A.aaR(
A.acf.AN2));}else this.Vu.R(A.aaR(A.acf.ARZ));}else this.Vu.Z(false);},Bgx:function(
G){var BBu=A._GetAutoObject(A.Device.Helper).W.Id;var A3P=A._GetAutoObject(A.Device.
Device).An.Lc(0,BBu);if(!A._GetAutoObject(A.Device.Device).An.Ca())A._GetAutoObject(
A.Device.Helper).HL(-1);else if(A3P<0)A._GetAutoObject(A.Device.Helper).HL(0);},
Af6:function(G){this.Bgr(this);this.HO(this);},_Init:function(aArg){C.Tx._Init.call(
this,aArg);C.AkQ._Init.call(this.Vu={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dq(C.APr);this.Vu.H(E$);this.J(this.Vu,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tx;this.Vu._Done();C.Tx._Done.call(this);},_ReInit:function(){
C.Tx._ReInit.call(this);this.Vu._ReInit();},_Mark:function(D){var B;C.Tx._Mark.call(
this,D);if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMp={QM:null,V6:null,AbI:null,YO:null,Init:function(aArg){var B;var F;this.Bb(
this.QM);if(!!A._GetAutoObject(C.A$).Q){var Vh=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.ab5("%s",AZH);
return;}else{if(Vh.AjQ)this.QM.T(A.aaR(A.acf.Bj));else this.QM.T(A.aaR(A.acf.EU)
);var Azq=A._GetAutoObject(A.Device.Device).An.Filter;if(!Azq||A._GetAutoObject(
A.Device.Helper).Arb(Azq))this.YO.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).An.Ca()){this.V6.Ar(false);this.QM.Ar(false);}}}},Adt:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Ds(0);if(
Aa===this.AbI)A._GetAutoObject(C.A$).Cg(9);else if(Aa===this.V6)A._GetAutoObject(
A.Device.Device).Ds(7);else if(Aa===this.QM)this.BBZ();else if(Aa===this.YO)this.
A1o();else throw new Error(Ayc);},BBZ:function(){var B;var F;var Vh=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.
ab5("%s",AZH);return;}Vh.A_D(this);},A1o:function(){var B;var F;var Vh=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.
ab5("%s",AZH);return;}Vh.Q6(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Ml._Init.call(this.QM={I:this},0);C.Ml._Init.call(this.V6={I:this},
0);C.Ml._Init.call(this.AbI={I:this},0);C.Ml._Init.call(this.YO={I:this},0);this.
__proto__=C.AMp;this.H(AfA);this.QM.H(Aae);this.QM.Ar(true);this.QM.T(A.aaR(A.acf.
EU));this.QM.Bg(true);this.V6.H(P7);this.V6.Ar(true);this.V6.T(A.aaR(A.acf.AUo));
this.V6.Bg(true);this.AbI.H(IR);this.AbI.T(A.aaR(A.acf.AkS));this.AbI.Bg(true);this.
YO.H(BF);this.YO.T(A.aaR(A.acf.AB5));this.YO.Bg(true);this.J(this.QM,0);this.J(this.
V6,0);this.J(this.AbI,0);this.J(this.YO,0);this.QM.AR=[this,this.Adt];this.V6.AR=[
this,this.Adt];this.AbI.AR=[this,this.Adt];this.YO.AR=[this,this.Adt];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QM._Done();this.V6._Done(
);this.AbI._Done();this.YO._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QM._ReInit();this.V6._ReInit();this.AbI.
_ReInit();this.YO._ReInit();this.QM.T(A.aaR(A.acf.EU));this.V6.T(A.aaR(A.acf.AUo
));this.AbI.T(A.aaR(A.acf.AkS));this.YO.T(A.aaR(A.acf.AB5));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I5={TY:null,Ez:null,Ym:null,Background:null,Ap:null,In:null,Im:null,M0:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10
);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.Dr(256);}else if(G$){this.Background.L(this.M0);this.Ap.L(A.jb.Text);this.Dr(
256);}else{this.Background.L(this.M0);this.Ap.L(A.jb.Text);this.Dr(128);}if(!this.
AM)this.Ap.Cv(0);else if(this.AM>0){if(A.aaZ(this.TY,[B=A._GetAutoObject(A.Device.
Device),B.Awg,B.AyJ]))this.Ap.Cv(2);else if(A.aaZ(this.TY,[B=A._GetAutoObject(A.
Device.Device),B.Awf,B.AyI]))this.Ap.Cv(3);else if(!!this.Ym&&((F=this.Ym,F[1].call(
F[0]))===1))this.Ap.Cv(1);else this.Ap.Cv(0);}else if(A.aaZ(this.TY,[B=A._GetAutoObject(
A.Device.Device),B.Awg,B.AyJ]))this.Ap.Cv(6);else if(A.aaZ(this.TY,[B=A._GetAutoObject(
A.Device.Device),B.Awf,B.AyI]))this.Ap.Cv(7);else if(!!this.Ym&&((F=this.Ym,F[1].
call(F[0]))===1))this.Ap.Cv(5);else this.Ap.Cv(4);},Af_:function(G){this.J$(this
);},Af9:function(G){this.J6(this);},J$:function(G){this.By(1);},J6:function(G){this.
By(-1);},Bmu:function(E){if(A.aaZ(this.TY,E))return;if(!!this.TY)A.z$([this,this.
A27],this.TY,0);this.TY=E;if(!!E)A.zX([this,this.A27],this.TY,0);A.pe([this,this.
A27],this);},Uj:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.
Af8],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.Af8],this.Ez,0);if(!!E)A.pe([this
,this.Af8],this);},A27:function(G){var F;if(!!this.TY)this.By((F=this.TY,F[1].call(
F[0])));},Af8:function(G){A.pe([this,this.BCa],this);},CT:function(E){if(this.M0===
E)return;this.M0=E;this.Am();},By:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.TY)(F=this.TY,F[2].call(F[0],E));this.Am();A.abo([this,this.Ue,this.
By],0);},A9L:function(E){if(A.aaZ(this.Ym,E))return;if(!!this.Ym)A.z$([this,this.
Af8],this.Ym,0);this.Ym=E;if(!!E)A.zX([this,this.Af8],this.Ym,0);if(!!E)A.pe([this
,this.Af8],this);},BCa:function(G){var F,CA;if(!this.Ym||!this.Ez)return;this.Bmu(
A._GetAutoObject(A.Device.Helper).Bc9((F=this.Ym,F[1].call(F[0])),(CA=this.Ez,CA[
1].call(CA[0]))));this.Am();},Ue:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BN._Init.call(this.In={I:this},0);
A.Core.BN._Init.call(this.Im={I:this},0);this.__proto__=C.I5;this.H(AIz);this.Background.
AZ(0x3F);this.Background.H(AIz);this.Ap.AZ(0x3C);this.Ap.H(AIz);this.In.Filter=4;
this.Im.Filter=5;this.M0=A.jb.CK;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.AUO));this.In.BO=[this,this.Af_];this.Im.BO=[this,this.Af9];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.In._Done();this.Im._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.In._ReInit(
);this.Im._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.TY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ym)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Im).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.ALX={Wv:function(G){var B;var F;this.Agp();if(!!A._GetAutoObject(A.Device.Helper
).AOF((F=this.FG,F[1].call(F[0])),0,true))this.AL5(A.aaR(A.acf.A6R),[this,this.Bnw
],[B=A._GetAutoObject(A.Device.Device),B.A78,B.BaI]);else A._GetAutoObject(C.BH).
XN(A.aaR(A.acf.A6R));A._GetAutoObject(C.BH).Ft();this.IY(A.aaR(A.acf.LinkTransponder
),[this,this.BmL],8);this.IY(A.aaR(A.acf.Tt),[this,this.Aku],9);this.IY(A.aaR(A.
acf.A$L),[this,this.Bnm],10);this.IY(A.aaR(A.acf.AGa),[this,this.ATk],3);this.IY(
A.aaR(A.acf.An3),[this,this.AwR],2);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(
C.BH).MZ(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},DE:function(G){},Abs:function(){return C.Amz;},Abt:function(){return C.Am0;
},Q6:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bl(A._GetAutoObject(
A.Device.Helper).A6s((F=this.FG,F[1].call(F[0]))));},HO:function(G){var F;C.GU.HO.
call(this,G);if(this.Akh()===false){this.N.Cs(A._GetAutoObject(A.Device.Converter
).BgX((F=this.FG,F[1].call(F[0]))));this.N.Ck=[this,this.AIU];this.N.FJ(A.jV);}this.
N.OO(false);this.N.OP(false);},Agb:function(){A._GetAutoObject(C.A$).Cg(52);},A3a:
function(G){C.GU.A3a.call(this,G);A.pe([this,this.Bbl],this);},Bnw:function(G){A.
_GetAutoObject(A.Device.Device).Awm(!A._GetAutoObject(A.Device.Device).Aqe);this.
An$(this);},An$:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
Fg();A._GetAutoObject(A.Device.Helper).Bn4(Be);if(A._GetAutoObject(A.Device.Device
).Aqe){var A17=A._GetAutoObject(A.Device.Helper).AOF((F=this.FG,F[1].call(F[0]))
,21600,true);Be.CW(A17);}A._GetAutoObject(A.Device.Device).An.Bl(Be);},_Init:function(
aArg){C.GU._Init.call(this,aArg);this.__proto__=C.ALX;var B;this.Dz(A.aaR(A.acf.
Av2));this.AwM([B=A._GetAutoObject(A.Device.Device),B.A77,B.BaH]);},_ReInit:function(
){C.GU._ReInit.call(this);this.Dz(A.aaR(A.acf.Av2));},_className:"Application::ActionListScreen"
};C.ALW={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.ALW;},
_className:"Application::ActionListFilterScreen"};C.APr={II:null,IO:null,Bc:null
,My:A.jV,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8T,B.A_e],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Device
).An,B.Fj,B.Fn],0);},De:function(E){C.IG.De.call(this,E);this.IO.L(E);},D5:function(
G){C.IG.D5.call(this,G);var Azq=A._GetAutoObject(A.Device.Device).An.Filter;if(!
Azq||A._GetAutoObject(A.Device.Helper).Arb(Azq))this.II.Z(false);else this.II.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqX())this.AwY(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+A$Z)+A._GetAutoObject(A.Device.Device).An.Ca().
toFixed());else this.AwY(A$0);},AwY:function(E){if(this.My===E)return;this.My=E;
this.IO.R(E);},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.Ap._Init.call(
this.II={I:this},0);A.acg.Text._Init.call(this.IO={I:this},0);A.acg.C5._Init.call(
this.Bc={I:this},0);this.__proto__=C.APr;this.HP.H(BqA);this.DS.H(BqB);this.II.H(
BqC);this.II.L(A.jb.Text);this.IO.H(A$1);this.IO.Hh(2);this.IO.KS(true);this.IO.
A6(0x12);this.IO.R(A$2);this.Bc.DC(Ayw);this.Bc.DL(Ayx);this.Bc.L(A.jb.Bc);this.
J(this.II,0);this.J(this.IO,0);this.J(this.Bc,0);this.II.Aw(A.aaL(A.ach.Aey));this.
IO.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IG;this.
II._Done();this.IO._Done();this.Bc._Done();C.IG._Done.call(this);},_ReInit:function(
){C.IG._ReInit.call(this);this.II._ReInit();this.IO._ReInit();this.Bc._ReInit();
this.IO.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((
B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsF={Text:null,Bk:function(aSize){C.OZ.Bk.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OZ.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xa);else this.Text.R(this.AC.FX((F=this.Q,F[1].call(F[0]
))));var Iy=((Ae&0x40)===0x40);if(Iy)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OZ._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsF;this.Text.R(Rl);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.OZ;this.Text._Done();C.OZ.
_Done.call(this);},_ReInit:function(){C.OZ._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.OZ._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Aq_={C8:null,Bk:function(aSize){C.OZ.Bk.call(this,aSize);this.C8.H(A.abK(this.
C8.M,aSize));},Ai:function(Ae){var B;var F;C.OZ.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C8.Aw(null);else{this.C8.Aw(this.AC.ACQ(this.AC.DU((F=this.Q,F[1].call(F[
0])))));this.C8.Cv(this.AC.ACS(this.AC.DU((F=this.Q,F[1].call(F[0])))));}var Iy=((
Ae&0x40)===0x40);if(Iy)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OZ._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aq_;this.H(AIz);this.C8.H(A$Y);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OZ;this.C8._Done();C.OZ._Done.call(this);},_ReInit:function(){C.OZ._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OZ._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuZ={VN:null,DirectionOfCountingToString:null,Aee:null,Do:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return-1;return aIndex;
},FX:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return A.jV;return this.
DirectionOfCountingToString.BI(aIndex);},DU:function(A7){return A7;},HH:function(
){return this.Do()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.VN)(F=
this.VN,F[2].call(F[0],E));},ACQ:function(aIndex){if((aIndex<0)||(aIndex>=this.Do(
)))return null;return this.Aee.AsG(aIndex);},ACS:function(aIndex){if((aIndex<0)||(
aIndex>=this.Do()))return-1;return this.Aee.AsH(aIndex);},A1D:function(G){var F;
if(!!this.VN)this.Q=(F=this.VN,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7
,this.B8],0);},AeY:function(E){if(A.aaZ(this.VN,E))return;if(!!this.VN)A.z$([this
,this.A1D],this.VN,0);this.VN=E;if(!!this.VN)A.zX([this,this.A1D],this.VN,0);A.pe([
this,this.A1D],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aee._Init.call(this.Aee={I:this},0);this.__proto__=C.AuZ;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aee._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aee._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aee)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMh={Hp:null,Ez:null,AnimalIdGenerationMethodToString:
null,AdV:null,Do:function(){return 4;},C4:function(aIndex){var F;var A7=-1;if((aIndex<
0)||(aIndex>=this.Do()))return-1;switch(aIndex){case 0:A7=0;break;case 1:A7=1;break;
case 2:A7=this.By6((F=this.Ez,F[1].call(F[0])));break;case 3:A7=5;break;default:
throw new Error(BqD+aIndex.toFixed());}return A7;},FX:function(aIndex){if((aIndex<
0)||(aIndex>=this.Do()))return A.jV;return this.AnimalIdGenerationMethodToString.
BI(this.C4(aIndex));},DU:function(A7){var aIndex=-1;switch(A7){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(BqE+A7.toFixed());}return aIndex;},HH:function(){return this.
Do()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Hp)(F=this.Hp,F[2].
call(F[0],E));},ACQ:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return null;
return this.AdV.AsG(this.C4(aIndex));},ACS:function(aIndex){if((aIndex<0)||(aIndex>=
this.Do()))return-1;return this.AdV.AsH(this.C4(aIndex));},A08:function(G){var F;
if(!!this.Hp)this.Q=(F=this.Hp,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7
,this.B8],0);},Blr:function(E){if(A.aaZ(this.Hp,E))return;if(!!this.Hp)A.z$([this
,this.A08],this.Hp,0);this.Hp=E;if(!!this.Hp)A.zX([this,this.A08],this.Hp,0);A.pe([
this,this.A08],this);},Uj:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.
z$([this,this.Af8],this.Ez,0);this.Ez=E;if(!!this.Ez)A.zX([this,this.Af8],this.Ez
,0);A.pe([this,this.Af8],this);},Af8:function(G){A.pe([this,this.BxW],this);},By6:
function(L3){var Rn=0;switch(L3){case 0:Rn=2;break;case 1:Rn=3;break;case 2:Rn=4;
break;default:throw new Error(BqF+L3.toFixed());}return Rn;},BxW:function(G){var
Bd7=this.C4(this.DU(this.Q));if(this.Q!==Bd7)this.As(Bd7);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdV._Init.call(this.
AdV={I:this},0);this.__proto__=C.AMh;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdV._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdV._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGB={FF:null,AaZ:null,Q:null,Fh:null,E8:null,HC:null,Wn:null,AW:null,HZ:null
,Kj:null,A8:0,AM:0,Alr:0,Init:function(aArg){var B;A.zX([this,this.Bej],[B=A._GetAutoObject(
A.Device.Device),B.Anq,B.AoA],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hf){this.AW.FI(A.jb.CK);this.HC.CT(A.jb.CK);this.Wn.CT(A.jb.CK);
this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FI(A.jb.CS);this.HC.
CT(A.jb.CS);this.Wn.CT(A.jb.CS);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}
}else{if(this.Hf){this.AW.FI(A.jb.CK);this.HC.CT(A.jb.CK);this.Wn.CT(A.jb.CK);}else{
this.AW.FI(A.jb.CS);this.HC.CT(A.jb.CS);this.Wn.CT(A.jb.CS);}this.Bb(null);}},IW:
function(G){C.Eg.IW.call(this,G);if(!this.A8)this.FQ(this);else this.G_(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(
F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(
F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;
default:this.FF.AkP((F=this.N,F[1].call(F[0])));}},FQ:function(G){this.Ew(1);},G_:
function(G){this.Ew(0);},Ew:function(EO){var F;if(!this.A8&&!!this.N)this.FF.Ajy((
F=this.N,F[1].call(F[0])));this.A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>1)this.
A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{if(this.AW.A8p())this.Bb(
this.AW);else this.Bb(this.Wn);if(!this.AM)this.AW.SI(2);else this.AW.SI(7);}break;
default:throw new Error(Atf+this.A8.toFixed());}this.DJ(this);this.Am();},As:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(G
){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ue,this.
By],0);}},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Om:function(G){this.AA5(2);},MU:function(G){this.AA5(
7);},AA5:function(Gw){var B;var Azr=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azr){var AAi=(A.Core.P.isPrototypeOf(B=this.QD(Azr,Gw,0x15))?B:null);if(!!AAi){
this.Bb(AAi);return true;}}return false;},Ao1:function(G){A.pe([this,this.Bej],this
);},A31:function(G){var B;var F;if(!this.HZ.Hp){this.Kj.AeY(null);return;}switch((
F=this.HZ.Hp,F[1].call(F[0]))){case 0:case 1:this.Kj.AeY(null);break;case 3:this.
Kj.AeY([B=A._GetAutoObject(A.Device.Device),B.ASi,B.AZ1]);break;case 2:this.Kj.AeY([
B=A._GetAutoObject(A.Device.Device),B.ASj,B.AZ2]);break;case 4:case 5:this.Kj.AeY([
B=A._GetAutoObject(A.Device.Device),B.AEv,B.AIL]);break;default:throw new Error(
BqG+(F=this.HZ.Hp,F[1].call(F[0])).toFixed());}},Bej:function(G){var F;if(!this.
HZ.Hp)return;A.pe([this,this.A31],this);var AtU=false;switch((F=this.HZ.Hp,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtU=true;this.AW.A_w(-1);}break;case 0:
case 1:{AtU=false;this.AW.A_w(A._GetAutoObject(A.Device.Device).A1);}break;default:
throw new Error(Ayo+(F=this.HZ.Hp,F[1].call(F[0])).toFixed());}this.AW.Ar(AtU);this.
HC.Ar(AtU);this.HC.Z(AtU);if(((F=this.HZ.Hp,F[1].call(F[0]))!==this.Alr)||(AtU===
false)){var BR=this.AM;this.By(A._GetAutoObject(A.Device.Helper).AMf((F=this.HZ.
Hp,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BR){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bjc((F=this.HZ.Hp,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kq(A._GetAutoObject(A.Device.Device).A1);else this.AW.Kq(0);this.Alr=(
F=this.HZ.Hp,F[1].call(F[0]));},A9o:function(E){var B;if(this.AaZ===E)return;if(
!!this.AaZ){A.z$([this,this.Ao1],[B=this.AaZ,B.Wt,B.JQ],0);A.z$([this,this.Ao1],[
B=this.AaZ,B.Anu,B.Ne],0);A.z$([this,this.Ao1],[B=this.AaZ,B.Arx,B.Q2],0);this.HZ.
Uj(null);}this.AaZ=E;if(!!E){A.zX([this,this.Ao1],[B=this.AaZ,B.Wt,B.JQ],0);A.zX([
this,this.Ao1],[B=this.AaZ,B.Anu,B.Ne],0);A.zX([this,this.Ao1],[B=this.AaZ,B.Arx
,B.Q2],0);this.HZ.Uj([B=this.AaZ,B.Wt,B.JQ]);}if(!!E)A.pe([this,this.Ao1],this);
},Ue:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BN._Init.call(this.Fh={I:this},0);A.Core.BN._Init.call(this.E8={I:this},0
);C.Aq_._Init.call(this.HC={I:this},0);C.Aq_._Init.call(this.Wn={I:this},0);C.AvO.
_Init.call(this.AW={I:this},0);C.AMh._Init.call(this.HZ={I:this},0);C.AuZ._Init.
call(this.Kj={I:this},0);this.__proto__=C.AGB;var B;this.H(UT);this.V.Ar(false);
this.V.R(As9);this.V.L(A.jb.Bm);this.Fh.Filter=6;this.E8.Filter=7;this.HC.H(BqH);
this.HC.Ar(false);this.Wn.H(BqI);this.AW.H(BqJ);this.AW.Ar(false);this.J(this.HC
,0);this.J(this.Wn,0);this.J(this.AW,0);this.FF=A._NewObject(C.Aeq,0);this.Fh.BO=[
this,this.Om];this.E8.BO=[this,this.MU];this.HC.CI(this.Kj);this.HC.As([B=this.Kj
,B.B7,B.B8]);this.Wn.CI(this.HZ);this.Wn.As([B=this.HZ,B.B7,B.B8]);this.AW.As([this
,this.Ue,this.By]);this.HZ.Blr([B=A._GetAutoObject(A.Device.Device),B.Anq,B.AoA]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fh._Done();this.E8.
_Done();this.HC._Done();this.Wn._Done();this.AW._Done();this.HZ._Done();this.Kj.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fh._ReInit();this.E8._ReInit();this.HC._ReInit();this.Wn._ReInit();this.AW._ReInit(
);this.HZ._ReInit();this.Kj._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wn)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.GZ={AzL:null,Fh:null,E8:null,GW:null,
FW:null,EN:null,M5:0,AMV:0,ABV:0,Uq:0,A$I:-1,AMU:false,Init:function(aArg){A.pe([
this,this.A0u],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EN.Z(this.
AMU);this.EN.H(A.wC(this.Yr(this.ABV).M,this.Yr((this.ABV+this.AMV)-1).M));},Om:
function(G){var D4=(A.Core.BN.isPrototypeOf(G)?G:null);var A1l=this.BfS(2);if(A1l===
false)D4.NH=true;},MU:function(G){var D4=(A.Core.BN.isPrototypeOf(G)?G:null);var
A1l=this.BfS(7);if(A1l===false)D4.NH=true;},BfS:function(Gw){var B;var DW=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DW=this.Bc$(DW,Gw,true);if(!!DW){this.Bb(DW);this.
AzL=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Ads:function(
G){A.ab5("%s",Alf);},GP:function(s){this.Ads(s);},FI:function(E){if(this.M5===E)
return;this.M5=E;this.FW.CT(E);this.GW.CT(E);},SI:function(Gw){var B;switch(Gw){
case 2:this.Bb(this.GW);break;case 7:this.Bb(this.FW);break;default:A.ab5("%s%e"
,BqK,Gw);}this.AzL=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LO:function(G){},A0u:
function(s){this.LO(s);},AES:function(E){if(this.AMU===E)return;this.AMU=E;this.
Am();},A9u:function(E){if(this.AMV===E)return;this.AMV=E;this.Am();},A9t:function(
E){if(this.ABV===E)return;this.ABV=E;this.Am();},Yr:function(Hw){var B5=null;switch(
Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.GW;break;default:A.ab5("%s",AhZ
);}return B5;},Kq:function(E){if(this.Uq===E)return;this.Uq=E;this.Amk();},Amk:function(
){A.ab5("%s",Alf);},Bc$:function(AcY,Gw,LI){var B;if(!!AcY){var Be;if(LI)Be=0x11;
else Be=0x0;switch(Gw){case 2:AcY=(C.DF.isPrototypeOf(B=this.AqL(AcY,Be))?B:null
);break;case 7:AcY=(C.DF.isPrototypeOf(B=this.TL(AcY,Be))?B:null);break;default:
throw new Error(BqL);}}return AcY;},A_w:function(E){if(this.A$I===E)return;this.
A$I=E;var DW=this.FW;var A1L;while(!!DW){A1L=!!E;DW.Ar(A1L);DW.Z(A1L);if(DW===this.
AzL)this.Bb(DW);DW=this.Bc$(DW,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BN._Init.call(this.Fh={I:this},0);A.Core.BN._Init.
call(this.E8={I:this},0);C.DF._Init.call(this.GW={I:this},0);C.DF._Init.call(this.
FW={I:this},0);A.acg.BU._Init.call(this.EN={I:this},0);this.__proto__=C.GZ;this.
H(BqM);this.Fh.Filter=6;this.E8.Filter=7;this.M5=A.jb.CK;this.GW.H(E4);this.FW.H(
A$3);this.EN.H(BqN);this.EN.Nh(2);this.EN.L(A.jb.E1);this.J(this.GW,0);this.J(this.
FW,0);this.J(this.EN,0);this.Fh.BO=[this,this.Om];this.Fh.D0=[this,this.Om];this.
E8.BO=[this,this.MU];this.E8.D0=[this,this.MU];this.AzL=this.FW;this.GW.Di=[this
,this.GP];this.FW.Di=[this,this.GP];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fh._Done();this.E8._Done();this.GW._Done();this.FW._Done();this.EN.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fh._ReInit();this.E8._ReInit();this.GW._ReInit();this.FW._ReInit();this.EN.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzL)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQV={Dx:null,CU:null,Ct:null
,FI:function(E){if(this.M5===E)return;C.HI.FI.call(this,E);this.Ct.CT(E);this.CU.
CT(E);this.Dx.CT(E);},Yr:function(Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.
FW;break;case 1:B5=this.Ct;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;
case 4:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;},_Init:function(aArg
){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(
this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQV;this.
H(BqO);this.GW.H(Ate);this.Dx.H(A$4);this.CU.H(A$5);this.Ct.H(A$6);this.FW.H(BqP
);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Ct,-2);this.Dx.Di=[this,this.
GP];this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP];},_Done:function(){this.
__proto__=C.HI;this.Dx._Done();this.CU._Done();this.Ct._Done();C.HI._Done.call(this
);},_ReInit:function(){C.HI._ReInit.call(this);this.Dx._ReInit();this.CU._ReInit(
);this.Ct._ReInit();},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.
Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVp={Q_:null,AcH:null,AVo:0,CF:function(G){this.AcH.Ar(true);},E3:function(G
){this.AcH.Ar(false);},Bnk:function(E){if(this.AVo===E)return;this.AVo=E;this.Q_.
R((((A.aaR(A.acf.AVn)+Aah)+E.toFixed())+BqQ)+A.aaR(A.acf.Lb));},Bld:function(){return this.
AVo;},BAR:function(G){A._GetAutoObject(C.A$).Cg(3);A._GetAutoObject(A.Device.Device
).Any(1);},_Init:function(aArg){C.X1._Init.call(this,aArg);C.CH._Init.call(this.
Q_={I:this},0);A.acl.Gh._Init.call(this.AcH={I:this},0);this.__proto__=C.AVp;this.
AeK.H(BqR);this.Uy.R(A.jV);this.Q_.H(BqS);this.Q_.R(A.aaR(A.acf.AVn)+A$7);this.Q_.
L(A.jb.Text);this.AcH.HM(1);this.AcH.Fl(5000);this.AcH.B2=100;this.J(this.Q_,0);
this.Q_.S(A.aaL(A.fl.Af));this.Q_.A2(A.aaL(A.fl.Ak));this.Q_.Cu(A.aaL(A.fl.Bh));
this.AcH.Sv=[this,this.BAR];this.AcH.Q=[this,this.Bld,this.Bnk];},_Done:function(
){this.__proto__=C.X1;this.Q_._Done();this.AcH._Done();C.X1._Done.call(this);},_ReInit:
function(){C.X1._ReInit.call(this);this.Q_._ReInit();this.AcH._ReInit();this.Q_.
R(A.aaR(A.acf.AVn)+A$7);this.Q_.S(A.aaL(A.fl.Af));this.Q_.A2(A.aaL(A.fl.Ak));this.
Q_.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.X1._Mark.call(this,D);if((B=this.
Q_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcH)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARN={K4:null,Lk:null,BdW:false,Init:
function(aArg){this.Bb(this.C$);},Ev:function(G){var B;if(!!this.K4)this.K4.Ev(this
);C.Wp.Ev.call(this,G);},Af$:function(G){var B;if(!!this.K4)this.K4.Af$(this);C.
Wp.Af$.call(this,G);},CF:function(G){var B;if(!this.BdW){this.BdW=true;A.pe([this
,this.A3u],this);}else if(!this.K4){this.K4=A._NewObject(C.ARP,0);this.K4.A9I([this
,this.AAV]);this.LO(this);this.K4.LO(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ev(this);else C.Wp.CF.call(this,G);}else C.Wp.CF.call(this,G
);},Ap5:function(G){var B;if(!!this.K4)this.K4.Ap5(this);},AAV:function(G){var B;
var F;this.LO(this);this.K4.LO(this);A.pe([this,this.AcR],this);var Bdx=this.LU;
this.AeV(A._GetAutoObject(A.Device.Helper).Abq(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVm(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bdx);if(Bdx)A._GetAutoObject(
A.Device.Helper).W.Q2(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SA(A._GetAutoObject(A.Device.Helper).AMf((F=this.Dh.HZ.Hp,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JD(this.C$);},A3u:function(
G){A._GetAutoObject(C.A$).Cg(79);},_Init:function(aArg){C.Wp._Init.call(this,aArg
);C.Q9._Init.call(this.Lk={I:this},0);this.__proto__=C.ARN;var B;this.Lk.H(AhV);
this.Lk.Aj(true);this.Lk.T(A.aaR(A.acf.ACk));this.J(this.Lk,-9);this.JV(this.Gi,-
1);this.Lk.Gn([this,this.D_,this.GN]);this.Lk.As([B=A._GetAutoObject(A.Device.Helper
).W,B.ASs,B.AnG]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wp;this.Lk.
_Done();C.Wp._Done.call(this);},_ReInit:function(){C.Wp._ReInit.call(this);this.
Lk._ReInit();this.Lk.T(A.aaR(A.acf.ACk));},_Mark:function(D){var B;C.Wp._Mark.call(
this,D);if((B=this.K4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADJ={AgH:null,AgI:null,NK:null,NJ:null,ET:null,FV:null,Eo:null,Dx:null,CU:null,Ct:
null,FI:function(E){if(this.M5===E)return;C.Lg.FI.call(this,E);this.Ct.CT(E);this.
CU.CT(E);this.Dx.CT(E);this.Eo.CT(E);this.FV.CT(E);this.ET.CT(E);this.NJ.CT(E);this.
NK.CT(E);this.AgI.CT(E);this.AgH.CT(E);},Yr:function(Hw){var B5=null;switch(Hw){
case-1:case 0:B5=this.FW;break;case 1:B5=this.Ct;break;case 2:B5=this.CU;break;case
3:B5=this.Dx;break;case 4:B5=this.Eo;break;case 5:B5=this.FV;break;case 6:B5=this.
ET;break;case 7:B5=this.NJ;break;case 8:B5=this.NK;break;case 9:B5=this.AgI;break;
case 10:B5=this.AgH;break;case 11:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;
},_Init:function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(this.AgH={I:this
},0);C.DF._Init.call(this.AgI={I:this},0);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FV={I:this},0);C.DF._Init.call(this.Eo={I:this},0);C.DF._Init.call(this.
Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADJ;this.H(BqT);this.GW.H(AIA);this.AgH.H(Ayy);this.AgI.H(
AZI);this.NK.H(AZJ);this.NJ.H(AZK);this.ET.H(AZL);this.FV.H(AZM);this.Eo.H(AZN);
this.Dx.H(A$8);this.CU.H(AZO);this.Ct.H(BqU);this.FW.H(BqV);this.J(this.AgH,-2);
this.J(this.AgI,-2);this.J(this.NK,-2);this.J(this.NJ,-2);this.J(this.ET,-2);this.
J(this.FV,-2);this.J(this.Eo,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.
Ct,-2);this.AgH.Di=[this,this.GP];this.AgI.Di=[this,this.GP];this.NK.Di=[this,this.
GP];this.NJ.Di=[this,this.GP];this.ET.Di=[this,this.GP];this.FV.Di=[this,this.GP
];this.Eo.Di=[this,this.GP];this.Dx.Di=[this,this.GP];this.CU.Di=[this,this.GP];
this.Ct.Di=[this,this.GP];},_Done:function(){this.__proto__=C.Lg;this.AgH._Done(
);this.AgI._Done();this.NK._Done();this.NJ._Done();this.ET._Done();this.FV._Done(
);this.Eo._Done();this.Dx._Done();this.CU._Done();this.Ct._Done();C.Lg._Done.call(
this);},_ReInit:function(){C.Lg._ReInit.call(this);this.AgH._ReInit();this.AgI._ReInit(
);this.NK._ReInit();this.NJ._ReInit();this.ET._ReInit();this.FV._ReInit();this.Eo.
_ReInit();this.Dx._ReInit();this.CU._ReInit();this.Ct._ReInit();},_Mark:function(
D){var B;C.Lg._Mark.call(this,D);if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eo)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HI={Q:null,AM:0,Ai:function(Ae){C.GZ.Ai.call(this
,Ae);this.Amk();},Ads:function(G){var B;var F;var Ic=A.jV;var B5=this.GW;while(!
!B5){if(B5.Ey>0)Ic=Ic+B5.Ey.toFixed();else Ic=Ic+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TL(B5,0x11))?B:null);}var BR=this.AM;this.By(A.wz(Ic,-1,
10));if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LO:function(G){},Amk:function(){var B;var F;if(!!this.Q){var DW=this.FW;
var AdA=this.Uq;var A7=(F=this.Q,F[1].call(F[0]));while(!!DW){if(A7>0){DW.LZ(A7%
10);A7=(A7/10)|0;}else if(AdA>0)DW.LZ(0);else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=
this.AqL(DW,0x11))?B:null);AdA=AdA-1;}}},C2:function(G){var F;if(!!this.Q)this.By((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},By:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.HI;},_Mark:
function(D){var B;C.GZ._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lg={AM:0,Q:null
,Ai:function(Ae){C.GZ.Ai.call(this,Ae);this.Amk();},Ads:function(G){var B;var F;
var Ic=A.jV;var B5=this.GW;while(!!B5){if(B5.Ey>0)Ic=Ic+B5.Ey.toFixed();else Ic=
Ic+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TL(B5,0x11))?B:null);
}var BR=this.AM;this.By(A.ab0(Ic,0,10));if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LO:function(G){},Amk:function(){var B;
var F;if(!!this.Q){var DW=this.FW;var AdA=this.Uq;var A7=(F=this.Q,F[1].call(F[0
]));while(!!DW){if(A7>0){DW.LZ((A7%10)|0);A7=Math.trunc(A7/10);}else if(AdA>0)DW.
LZ(0);else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=this.AqL(DW,0x11))?B:null);AdA=AdA-
1;}}},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},As:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},By:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.GZ._Init.call(
this,aArg);this.__proto__=C.Lg;},_Mark:function(D){var B;C.GZ._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Do:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},FX:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvO={Eo:null,Dx:null,CU:null,Ct:null,FI:function(E){if(this.M5===E)return;C.
HI.FI.call(this,E);this.Ct.CT(E);this.CU.CT(E);this.Dx.CT(E);this.Eo.CT(E);},Yr:
function(Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.
Ct;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Eo;break;
case 5:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;},_Init:function(aArg
){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Eo={I:this},0);C.DF._Init.call(
this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={
I:this},0);this.__proto__=C.AvO;this.H(Ayg);this.GW.H(AHH);this.Eo.H(AHI);this.Dx.
H(AHJ);this.CU.H(AHK);this.Ct.H(AHL);this.FW.H(AHM);this.EN.H(A$9);this.J(this.Eo
,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Ct,-2);this.Eo.Di=[this,this.
GP];this.Dx.Di=[this,this.GP];this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP
];},_Done:function(){this.__proto__=C.HI;this.Eo._Done();this.Dx._Done();this.CU.
_Done();this.Ct._Done();C.HI._Done.call(this);},_ReInit:function(){C.HI._ReInit.
call(this);this.Eo._ReInit();this.Dx._ReInit();this.CU._ReInit();this.Ct._ReInit(
);},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.Eo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUw={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bor(0);this.AttributeSet.Bos(1);this.AttributeSet.Bot(4);},Ai:function(Ae){var B;
C.BW.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20);var Iy=((
Ae&0x40)===0x40);var GA=this.Bo.Bw;var FN=A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FN=
A.jb.Bm;GQ=A.jb.Text;}if(!G$){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);this.
AttributeSet.Ahg(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahg(A.jb.Bm);}else if(Iy){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahg(A.jb.Bm);}else if(Fq){this.Background.L(A.jb.
Am4);this.V.L(A.jb.Bm);this.AttributeSet.Ahg(A.jb.Bm);}else{this.Background.L(FN
);this.V.L(GQ);this.AttributeSet.Ahg(GQ);}this.LI=G$;this.KE=Fq;this.Qn=GA;this.
Aph=Iy;},Hg:function(G){var B;var Gc=this.Dy.G0;var Cz=(A.acg.AuM.isPrototypeOf(
B=this.Dy.Ch)?B:null);Cz.A9q(this.AttributeSet);Cz.A6(0x12);if(!Cz)return;if(!!this.
AC)Cz.R(this.ByZ(this.AC.FX(Gc)));else Cz.R(Xa);Cz.H(A.abK(Cz.M,[this.Dy.V_,(B=this.
Dy.M)[3]-B[1]]));},ByZ:function(Bxl){var AAF=Bxl;AAF=A._GetAutoObject(A.Device.Helper
).Nk(AAF,BqW,BqX);AAF=A._GetAutoObject(A.Device.Helper).Nk(AAF,BqY,BqZ);return Bq0+
AAF;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUw;this.Dy.H(Bq1);this.Dy.Ju(2);
this.Dy.NZ(A.acg.AuM);this.AttributeSet.Ahg(this.V.AQ);this.AttributeSet.Bmc(A.aaL(
A.fl.AOw));this.AttributeSet.A9S(A.aaL(A.fl.Ak));this.AttributeSet.Ahj(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9S(A.aaL(A.fl.Ak));this.AttributeSet.Ahj(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asv._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dq(C.AC$);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Do:function(){return 14;},C4:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},FX:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BI(aIndex
);},DU:function(A7){return A7;},HH:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OS={FF:null,EnumToCodeset:
null,Js:null,A8:0,Number:0,Ai:function(Ae){C.BW.Ai.call(this,Ae);if(this.A8===1){
if(this.Hf){this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}},By:function(E){C.BW.By.call(this,E);var BzS=this.
EnumToCodeset.AmE(this.Number);var Bd6=this.AC.C4(this.AM);if(BzS!==Bd6){this.AFs(
this.EnumToCodeset.Aeh(Bd6));A.abo([this,this.ASt,this.AFs],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[
this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(
A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=
this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:
this.FF.AkP((F=this.N,F[1].call(F[0])));}},FQ:function(G){this.Ew(1);},G_:function(
G){this.Ew(0);},Ew:function(EO){var F;if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(
F[0])));this.A8=EO;if((this.A8<0)||(this.A8>1))this.A8=0;this.DJ(this);if(!this.
A8)this.Bb(null);else this.A1Y();this.Am();},AFs:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqT()>E)E=this.EnumToCodeset.
AqT();if(this.EnumToCodeset.HH()<E)E=this.EnumToCodeset.HH();}this.Number=E;var BR=
this.AM;if(!!this.EnumToCodeset){var ByP=this.EnumToCodeset.AmE(E);this.By(this.
AC.DU(ByP));if(this.AM!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C4(this.AM)));A.abo(this.Q,0);}}},Anz:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},U8:function(G){this.Ew(this.A8+1);},A1Y:function(){A.ab5(
"%s",Bq2);},ASt:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BN._Init.call(this.Js={I:this},0);this.__proto__=C.OS;this.
Js.Filter=1;this.FF=A._NewObject(C.Aeq,0);this.Js.BO=[this,this.U8];},_Done:function(
){this.__proto__=C.BW;this.Js._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Js._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeR={Text:null,Ai:function(
Ae){C.Ek.Ai.call(this,Ae);this.Text.L(this.ACM);},By:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rf(this.AM));this.
Am();},AaI:function(G){A.pe([this,this.Af7],this);},AaH:function(G){A.pe([this,this.
Af7],this);},AlY:function(G){A.pe([this,this.Af7],this);},Af7:function(G){if((!this.
Ih||!this.A1)||!this.AF)return;},_Init:function(aArg){C.Ek._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeR;this.Text.AZ(0x3F
);this.Text.H(As3);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ek;this.Text._Done();C.Ek.
_Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARG={GF:0,C7:null,AW:null,E7:null,
I5:null,CountryToString:null,K$:0,L9:false,Init:function(aArg){A.zX([this,this.MG
],[this,this.Sw,this.Lo],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.I5.Z(this.
Afl);this.AW.FI(this.LS);this.E7.CT(this.LS);this.I5.CT(this.LS);},DJ:function(G
){var F;if(!this.N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(
F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(this.CountryToString.BI(this.K$));(F=this.N,
F[1].call(F[0])).Cl=null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.
G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EO){var Tk=this.
A8;this.A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>this.RD)this.A8=this.RD;if((
this.A8===1)&&!this.Afl)this.A8=2;switch(this.A8){case 0:{this.Bb(null);if(!this.
GF)this.Lo(0);}break;case 1:this.Bb(this.I5);break;case 2:this.Bb(this.E7);break;
case 3:{this.Bb(this.AW);if(!this.GF||(Tk>0))this.AW.SI(2);else this.AW.SI(7);}break;
default:throw new Error(Atf+this.A8.toFixed());}C.Ek.Ew.call(this,this.A8);},Apo:
function(G){this.I5.Uj(this.Ez);},AaI:function(G){var F;this.AW.A9t((F=this.AF,F[
1].call(F[0])));},AaH:function(G){var F;this.AW.A9u((F=this.A1,F[1].call(F[0])));
},By:function(E){if(this.AM===E)return;this.AM=E;this.L9=true;this.Sx(A._GetAutoObject(
A.Device.Helper).Sd(E,0,12));this.Lo(A._GetAutoObject(A.Device.Converter).ZY(E));
this.L9=false;if(!!E)this.AW.Kq(12);else this.AW.Kq(0);this.Am();},AlY:function(
G){A.pe([this,this.Af7],this);},FQ:function(G){var F;if(!this.AM){var BR=this.AM;
this.By(A._GetAutoObject(A.Device.Helper).AC0());if(this.AM!==BR){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(3);},AjN:function(){return this.
GF;},AjP:function(){return 999999999999;},Lo:function(E){if(this.K$===E)return;this.
K$=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Sw,this.Lo],0
);},Sx:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this
,this.Vj],this);A.abo([this,this.AbZ,this.Sx],0);},Vj:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abm(this.GF,12,10
);var BR=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af7:function(G){var F;if((!this.Ih||
!this.A1)||!this.AF)return;if(!(F=this.Ih,F[1].call(F[0])))this.AW.AES(true);else
this.AW.AES(false);},Sw:function(){return this.K$;},AbZ:function(){return this.GF;
},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.C7._Init.call(this.C7={I:this
},0);C.ADJ._Init.call(this.AW={I:this},0);C.AsF._Init.call(this.E7={I:this},0);C.
I5._Init.call(this.I5={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARG;var B;this.RD=3;this.AW.H(Bq3);this.E7.H(A$_);this.
I5.H(A$$);this.J(this.AW,0);this.J(this.E7,0);this.J(this.I5,0);this.C7.AEY([this
,this.Sw,this.Lo]);this.AW.As([this,this.AbZ,this.Sx]);this.E7.CI(this.C7);this.
E7.As([B=this.C7,B.B7,B.B8]);this.I5.A9L([B=A._GetAutoObject(A.Device.Device),B.
Awa,B.AyF]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.C7._Done(
);this.AW._Done();this.E7._Done();this.I5._Done();this.CountryToString._Done();C.
Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit(
);this.AW._ReInit();this.E7._ReInit();this.I5._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARF={GF:0,C7:null,AW:null,YD:null,Kn:null,E7:null,I5:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pt:0,K$:0,L9:false,Init:function(aArg){A.
zX([this,this.MG],[this,this.PM,this.EB],0);A.zX([this,this.MG],[this,this.Sw,this.
Lo],0);A.zX([this,this.MG],[this,this.Ans,this.Ahk],0);},Ai:function(Ae){C.Ek.Ai.
call(this,Ae);this.I5.Z(this.Afl);this.AW.FI(this.LS);this.YD.FI(this.LS);this.Kn.
FI(this.LS);this.E7.CT(this.LS);this.I5.CT(this.LS);},DJ:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this
,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV
);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.
N,F[1].call(F[0])).CV(this.CountryToString.BI(this.K$));(F=this.N,F[1].call(F[0]
)).Cl=null;}break;case 3:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGK)+A.aaR(A.acf.Colon))+Aah)+A.aaR(A.
acf.Bhh));break;case 1:(F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGK)+A.aaR(A.
acf.Colon))+Aah)+A.aaR(A.acf.Boy));break;case 2:(F=this.N,F[1].call(F[0])).CV(((
A.aaR(A.acf.AGK)+A.aaR(A.acf.Colon))+Aah)+A.aaR(A.acf.Bh9));break;default:(F=this.
N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGK)+A.aaR(A.acf.Colon))+Aah)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cl=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0]
)).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0
])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null
);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.Gu)+Ax8)+this.GermanStateToString.Lt(
A._GetAutoObject(A.Device.Converter).ACP(this.Pt)));(F=this.N,F[1].call(F[0])).Cl=
null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[
1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(
A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EO){var Tk=this.A8;if(EO<
0)EO=0;else if(EO>this.RD)EO=this.RD;if((EO===1)&&!this.Afl)EO=2;switch(EO){case
0:{this.Bb(null);if((!this.GF&&!this.AnimalType)&&!this.Pt)this.Lo(0);}break;case
1:this.Bb(this.I5);break;case 2:this.Bb(this.E7);break;case 3:if(!Tk)A.pe([this,
this.BA6],this);else this.Bb(this.YD);break;case 4:this.Bb(this.Kn);break;case 5:
if(((Tk===4)&&!this.Pt)&&!this.GF)return;else{this.Bb(this.AW);if(!this.GF||(Tk>
0))this.AW.SI(2);else this.AW.SI(7);}break;default:throw new Error(Atf+EO.toFixed(
));}this.A8=EO;C.Ek.Ew.call(this,this.A8);},By:function(E){if(this.AM===E)return;
this.AM=E;this.L9=true;this.Sx(A._GetAutoObject(A.Device.Helper).Sd(E,0,8));this.
Ahk(A._GetAutoObject(A.Device.Helper).Sd(E,8,2)|0);this.EB(A._GetAutoObject(A.Device.
Helper).Sd(E,10,2)|0);this.Lo(A._GetAutoObject(A.Device.Converter).ZY(E));this.L9=
false;if(!!this.AM){this.YD.Kq(2);this.Kn.Kq(2);this.AW.Kq(8);}else{this.YD.Kq(0
);this.Kn.Kq(0);this.AW.Kq(0);}this.Am();},Apo:function(G){this.I5.Uj(this.Ez);}
,AaI:function(G){var F;this.AW.A9t((F=this.AF,F[1].call(F[0])));},AaH:function(G
){var F;this.AW.A9u((F=this.A1,F[1].call(F[0])));},AlY:function(G){A.pe([this,this.
Af7],this);},FQ:function(G){var F;if(!this.AM){var BR=this.AM;this.By(A._GetAutoObject(
A.Device.Helper).AC0());if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ew(3);}else this.Ew(this.RD);},AjN:function(){return this.
GF;},AjP:function(){return 99999999;},Lo:function(E){if(this.K$===E)return;this.
K$=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Sw,this.Lo],0
);},Sx:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this
,this.Vj],this);A.abo([this,this.AbZ,this.Sx],0);},Vj:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pt,2,10))+A.abm(this.GF,8,10);var BR=this.AM;this.By(A.ab0(aString
,0,10));if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Af7:function(G){var F;if((!this.Ih||!this.A1)||!this.AF)return;if(!(F=this.
Ih,F[1].call(F[0])))this.AW.AES(true);else this.AW.AES(false);},EB:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L9===false)A.pe([this,this.
Vj],this);A.abo([this,this.PM,this.EB],0);},Ahk:function(E){if(this.Pt===E)return;
this.Pt=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Ans,this.
Ahk],0);},BA6:function(G){var F;if(!!this.JI){var H$=(F=this.JI,F[1].call(F[0]));
var A09=0;switch(H$){case 0:case 1:A09=0;break;case 2:A09=1;break;default:A.ab5(
"%s%e",Ale,H$);}this.EB(A09);}if(!this.Pt)this.Ew(4);else this.Ew(5);},Sw:function(
){return this.K$;},AbZ:function(){return this.GF;},PM:function(){return this.AnimalType;
},Ans:function(){return this.Pt;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C7._Init.call(this.C7={I:this},0);C.AQW._Init.call(this.AW={I:this},0);C.AvN.
_Init.call(this.YD={I:this},0);C.AvN._Init.call(this.Kn={I:this},0);C.AsF._Init.
call(this.E7={I:this},0);C.I5._Init.call(this.I5={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARF;var B;this.RD=5;this.AW.H(
Bq4);this.YD.H(Bq5);this.YD.EV(2);this.Kn.H(Bq6);this.Kn.EV(16);this.E7.H(A$_);this.
I5.H(A$$);this.J(this.AW,0);this.J(this.YD,0);this.J(this.Kn,0);this.J(this.E7,0
);this.J(this.I5,0);this.C7.AEY([this,this.Sw,this.Lo]);this.AW.As([this,this.AbZ
,this.Sx]);this.YD.As([this,this.PM,this.EB]);this.Kn.As([this,this.Ans,this.Ahk
]);this.E7.CI(this.C7);this.E7.As([B=this.C7,B.B7,B.B8]);this.I5.A9L([B=A._GetAutoObject(
A.Device.Device),B.Awa,B.AyF]);this.Init(aArg);},_Done:function(){this.__proto__=
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
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ek={AM:0,Awl:null,OF:null,
Q:null,Ez:null,A1:null,AF:null,Ih:null,N:null,JI:null,Fh:null,E8:null,ACM:0,LS:0
,A8:0,RD:0,Afl:true,Init:function(aArg){A.pe([this,this.LO],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A8)this.Bb(null);},Bme:function(E){if(this.
ACM===E)return;this.ACM=E;this.Am();},Ww:function(E){if(this.LS===E)return;this.
LS=E;this.Am();},DJ:function(G){A.ab5("%s",Alf);},MG:function(s){this.DJ(s);},Ew:
function(EO){A.pe([this,this.MG],this);A.pe(this.Awl,this);if(!EO)A.pe(this.OF,this
);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);}
,C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},By:function(
E){A.ab5("%s",Aoz);},Om:function(G){if(this.A8>1)this.Ew(this.A8-1);},MU:function(
G){if((this.A8>0)&&(this.A8<this.RD))this.Ew(this.A8+1);},Uj:function(E){if(A.aaZ(
this.Ez,E))return;if(!!this.Ez)A.z$([this,this.A0l],this.Ez,0);this.Ez=E;if(!!E)
A.zX([this,this.A0l],this.Ez,0);A.pe([this,this.A0l],this);},Apo:function(G){},A0l:
function(s){this.Apo(s);},OM:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1
)A.z$([this,this.A0p],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.A0p],E,0);if(!
!E)A.pe([this,this.A0p],this);},PN:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0r],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0r],E,0);if(
!!E)A.pe([this,this.A0r],this);},AaI:function(G){},A0r:function(s){this.AaI(s);}
,AaH:function(G){},A0p:function(s){this.AaH(s);},Uh:function(E){if(A.aaZ(this.Ih
,E))return;if(!!this.Ih)A.z$([this,this.A0o],this.Ih,0);this.Ih=E;if(!!E)A.zX([this
,this.A0o],E,0);if(!!E)A.pe([this,this.A0o],this);},AlY:function(G){},A0o:function(
s){this.AlY(s);},FQ:function(G){A.ab5("%s",Baa);},BGc:function(s){this.FQ(s);},G_:
function(G){this.Ew(0);},AjN:function(){A.ab5("%s",Aoz);return 0;},AjP:function(
){A.ab5("%s",Aoz);return 0;},LO:function(G){},Anx:function(E){if(A.aaZ(this.JI,E
))return;if(!!this.JI)A.z$([this,this.Ao0],this.JI,0);this.JI=E;if(!!E)A.zX([this
,this.Ao0],this.JI,0);A.pe([this,this.Ao0],this);},Ao0:function(G){},AE$:function(
E){if(A.aa0(this.OF,E))return;this.OF=E;},AFE:function(E){if(this.Afl===E)return;
this.Afl=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BN._Init.call(this.Fh={I:this},0);A.Core.BN._Init.call(this.E8={I:this},0);this.
__proto__=C.Ek;this.H(As3);this.ACM=A.jb.Text;this.LS=A.jb.CS;this.Fh.Filter=6;this.
E8.Filter=7;this.Fh.BO=[this,this.Om];this.E8.BO=[this,this.MU];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fh._Done();this.E8._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fh._ReInit(
);this.E8._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ih)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JI)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q9={AM:0,Dp:null,FF:
null,OF:null,Ez:null,A1:null,AF:null,Ih:null,Q:null,JI:null,AEf:-1,Afl:true,AN1:
false,ATR:false,Ash:true,Init:function(aArg){A.pe([this,this.ABo],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dp)return;if(this.Dp.A8>0){if(this.Hf){this.Dp.
Ww(A.jb.CK);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Dp.Ww(A.jb.
CS);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hf)this.Dp.Ww(
A.jb.CK);else this.Dp.Ww(A.jb.CS);this.Dp.Bme(this.V.AQ);}},IW:function(G){C.Eg.
IW.call(this,G);if(!this.Dp)return;if(!this.Dp.A8)this.FQ(this);else this.G_(this
);},Gn:function(E){C.Eg.Gn.call(this,E);if(!!this.Dp)this.Dp.N=E;},Uj:function(E
){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.Apo],this.Ez,0);this.Ez=
E;if(!!E)A.zX([this,this.Apo],this.Ez,0);A.pe([this,this.Apo],this);},Apo:function(
G){if(!!this.Dp)this.Dp.Uj(this.Ez);},OM:function(E){if(A.aaZ(this.A1,E))return;
this.A1=E;if(!!this.Dp)this.Dp.OM(E);},PN:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dp)this.Dp.PN(E);},Uh:function(E){if(A.aaZ(this.Ih,E))return;
this.Ih=E;if(!!this.Dp)this.Dp.Uh(E);},BBB:function(G){var AAn=0;if(!!this.Dp){AAn=
this.Dp.A8;this.Dp.N=null;this.HN(this.Dp);}switch(this.AEf){case 0:this.Dp=A._NewObject(
C.AeR,0);break;case 1:this.Dp=A._NewObject(C.ARG,0);break;case 2:this.Dp=A._NewObject(
C.ARF,0);break;case 3:this.Dp=A._NewObject(C.ATT,0);break;case 4:this.Dp=A._NewObject(
C.ATS,0);break;case 5:this.Dp=A._NewObject(C.ARH,0);break;default:throw new Error(
Bq7+this.AEf.toFixed());}this.J(this.Dp,0);this.Dp.Anx(this.JI);this.Dp.H(Bq8);this.
Dp.N=this.N;this.Dp.Uj(this.Ez);this.Dp.Awl=[this,this.Awl];this.Dp.As([this,this.
Ue,this.By]);this.Dp.Uh(this.Ih);this.Dp.OM(this.A1);this.Dp.PN(this.AF);this.Dp.
AE$(this.OF);this.Dp.AFE(this.Afl);if(AAn>0)this.Dp.Ew(AAn);this.Bb(this.Dp);this.
Am();},FQ:function(G){var B;var F;if(!!this.Dp){if(!!this.N)this.FF.Ajy((F=this.
N,F[1].call(F[0])));else this.FF=A._NewObject(C.Aeq,0);this.Dp.FQ(this);}},G_:function(
G){var B;if(!!this.Dp)this.Dp.G_(this);},AjN:function(){if(!this.Dp)return 0;return this.
Dp.AjN();},AjP:function(){if(!this.Dp)return 0;return this.Dp.AjP();},C2:function(
G){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ue,this.
By],0);}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],
this);},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABo],this);},BmT:function(
E){if(this.AEf===E)return;this.AEf=E;A.pe([this,this.BBB],this);},Ar0:function(E
){if(this.Ash===E)return;this.Ash=E;A.pe([this,this.ABo],this);},ABo:function(G){
var Apz;if(this.Ash){if(this.AN1)Apz=5;else Apz=0;}else if(this.ATR){if(A._GetAutoObject(
A.Device.Converter).ZY(this.AM)===10)Apz=4;else Apz=3;}else if(A._GetAutoObject(
A.Device.Converter).ZY(this.AM)===10)Apz=2;else Apz=1;this.BmT(Apz);},Awl:function(
G){var F;if((!!this.N&&!!this.Dp)&&!this.Dp.A8)this.FF.AkP((F=this.N,F[1].call(F[
0])));this.Am();},Anx:function(E){if(A.aaZ(this.JI,E))return;if(!!this.JI)A.z$([
this,this.Ao0],this.JI,0);this.JI=E;if(!!E)A.zX([this,this.Ao0],this.JI,0);A.pe([
this,this.Ao0],this);},Ao0:function(G){if(!!this.Dp)this.Dp.Anx(this.JI);},A_b:function(
E){if(this.ATR===E)return;this.ATR=E;A.pe([this,this.ABo],this);},BlM:function(E
){if(this.AN1===E)return;this.AN1=E;A.pe([this,this.ABo],this);},AE$:function(E){
if(A.aa0(this.OF,E))return;this.OF=E;if(!!this.Dp)this.Dp.AE$(E);},AFE:function(
E){if(this.Afl===E)return;this.Afl=E;if(!!this.Dp)this.Dp.AFE(E);},Ue:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Q9;this.H(UT);this.V.R(As9);this.V.L(A.jb.Bm);this.FF=A._NewObject(C.Aeq,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dp)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ih
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQW={ET:null,FV:null,Eo:null,Dx:null,CU:null
,Ct:null,FI:function(E){if(this.M5===E)return;C.Lg.FI.call(this,E);this.Ct.CT(E);
this.CU.CT(E);this.Dx.CT(E);this.Eo.CT(E);this.FV.CT(E);this.ET.CT(E);},Yr:function(
Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.Ct;break;
case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Eo;break;case 5:B5=
this.FV;break;case 6:B5=this.ET;break;case 7:B5=this.GW;break;default:A.ab5("%s"
,AhZ);}return B5;},_Init:function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(
this.ET={I:this},0);C.DF._Init.call(this.FV={I:this},0);C.DF._Init.call(this.Eo={
I:this},0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQW;this.H(Bq9);this.GW.
H(AIA);this.ET.H(Ayy);this.FV.H(AZI);this.Eo.H(AZJ);this.Dx.H(AZK);this.CU.H(AZL
);this.Ct.H(AZM);this.FW.H(AZN);this.EN.H(A$9);this.J(this.ET,-2);this.J(this.FV
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
};C.AvN={Q:null,GW:null,FW:null,EN:null,In:null,Im:null,M5:0,Uq:0,AM:0,FZ:99,Init:
function(aArg){A.pe([this,this.LO],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EN.Z(false);this.EN.H(A.wC(this.Yr(0).M,this.Yr(-1).M));var Iy=((Ae&
0x40)===0x40);if(Iy){this.BfT(A.jb.AV);this.BfU(A.jb.Bm);}else{this.BfT(this.M5);
this.BfU(A.jb.Text);}this.Amk();},FI:function(E){if(this.M5===E)return;this.M5=E;
this.Am();},LO:function(G){},Yr:function(Hw){var B5=null;switch(Hw){case-1:case 0:
B5=this.FW;break;case 1:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;},Kq:
function(E){if(this.Uq===E)return;this.Uq=E;this.Amk();},Amk:function(){var B;var
F;if(!!this.Q){var DW=this.FW;var AdA=this.Uq;var A7=(F=this.Q,F[1].call(F[0]));
while(!!DW){if(A7>0){DW.LZ(A7%10);A7=(A7/10)|0;}else if(AdA>0)DW.LZ(0);else DW.LZ(-
1);DW=(C.Ey.isPrototypeOf(B=this.AqL(DW,0x11))?B:null);AdA=AdA-1;}}},Af_:function(
G){var F;var BR=this.AM;this.By(this.AM+1);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af9:function(G){var F;var BR=this.
AM;this.By(this.AM-1);if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].
call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2
],this);},By:function(E){if(E<0)E=0;if(E>this.FZ)E=this.FZ;if(this.AM===E)return;
this.AM=E;this.Am();},EV:function(E){if(this.FZ===E)return;this.FZ=E;this.Am();}
,BfT:function(aColor){this.FW.CT(aColor);this.GW.CT(aColor);},BfU:function(aColor
){this.FW.Zs(aColor);this.GW.Zs(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ey._Init.call(this.GW={I:this},0);C.Ey._Init.call(this.FW={I:this},
0);A.acg.BU._Init.call(this.EN={I:this},0);A.Core.BN._Init.call(this.In={I:this}
,0);A.Core.BN._Init.call(this.Im={I:this},0);this.__proto__=C.AvN;this.H(Bq_);this.
M5=A.jb.CK;this.GW.H(AIA);this.FW.H(Ayy);this.EN.H(Ayy);this.EN.Nh(2);this.EN.L(
A.jb.E1);this.In.Filter=4;this.Im.Filter=5;this.J(this.GW,0);this.J(this.FW,0);this.
J(this.EN,0);this.In.BO=[this,this.Af_];this.In.D0=[this,this.Af_];this.Im.BO=[this
,this.Af9];this.Im.D0=[this,this.Af9];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.GW._Done();this.FW._Done();this.EN._Done();this.In._Done();this.Im.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.GW._ReInit();this.FW._ReInit();this.EN._ReInit();this.In._ReInit();this.Im.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Im)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ey={AgB:
null,Background:null,Text:null,Ey:-1,M0:0,AmO:0,Aqr:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ey<0)this.Text.R(Rl);else this.Text.R(this.Ey.toFixed(
));this.Background.L(this.M0);this.Text.L(this.AmO);},LZ:function(E){if(this.Ey===
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ey=B5;this.Am();},CT:function(E){
if(this.M0===E)return;this.M0=E;this.Am();},AeW:function(E){if(this.Aqr===E)return;
this.Aqr=E;this.AgB.Ar(E);if(E===false)this.Text.Z(true);},Zs:function(E){if(this.
AmO===E)return;this.AmO=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TE._Init.call(this.AgB={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ey;var B;
this.H(Ate);this.M0=A.jb.CK;this.AgB.Fl(750);this.AgB.Uk(750);this.AgB.AkA(750);
this.AmO=A.jb.Text;this.Background.AZ(0x3);this.Background.H(Ate);this.Text.AZ(0x3
);this.Text.H(Ate);this.Text.R(Rl);this.J(this.Background,0);this.J(this.Text,0);
this.AgB.Q=[B=this.Text,B.Fk,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgB._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgB._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fw={Y:null,I1:null,AN9:A.jV,ARV:A.jV,Ta:0,AJG:0,A1O:false,A1j:false,Init:function(
aArg){},CF:function(G){var B;C.AB.CF.call(this,G);A.zX([this,this.ABj],[B=A._GetAutoObject(
A.Device.Device).An,B.Fj,B.Fn],0);A.zX([this,this.MG],[B=A._GetAutoObject(A.Device.
Device).An,B.Fj,B.Fn],0);A.pe([this,this.ABj],this);A.pe([this,this.MG],this);},
E3:function(G){var B;C.AB.E3.call(this,G);A.z$([this,this.ABj],[B=A._GetAutoObject(
A.Device.Device).An,B.Fj,B.Fn],0);},BxJ:function(L6){A._GetAutoObject(A.Device.Helper
).HL(L6);this.Ap6(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap6:function(L1,AcV){A.ab5("%s",Alf);},Ve:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===9))A.aaS([
this,this.ByH],this);else if(!!At&&(At.PopupState===5)){this.A1j=true;this.Ev(this
);}},ByH:function(G){if(this.Ta>0){this.A1j=false;this.Adn(this);this.A_B(0);}},
Ait:function(G){if((this.AJG+1)<this.Ta)this.A_B(this.AJG+1);else A.aaS([this,this.
Bwh],this);},Bwi:function(s){this.Ait(s);},A_B:function(E){this.AJG=E;if(this.A1j===
false){this.BxJ(E);A.aaS([this,this.Bwi],this);var XH=(this.AJG/this.Ta)*100;A._GetAutoObject(
A.Device.Device).A9(49,true,A.abk(XH,0,0),0,[this,this.Ve]);}},Aas:function(G){A.
_GetAutoObject(A.Device.Device).A9(49,false,Bq$,0,[this,this.Ve]);this.A1O=true;
A.pe([this,this.ALh],this);},Bwh:function(s){this.Aas(s);},Adn:function(G){this.
I1.Z(true);this.A1O=false;this.ALh(this);},BF9:function(s){this.Adn(s);},AAC:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6y();A._GetAutoObject(A.Device.Device
).An.Bl(Be);},Ev:function(G){A._GetAutoObject(C.A$).Fv();},A3n:function(G){A._GetAutoObject(
C.A$).Cg(84);},DJ:function(G){this.N.Z(true);this.N.CY(A.aaL(A.ach.E2));this.N.CB=[
this,this.Ev];this.N.Cs(A.aaL(A.ach.ADz));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Arb(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Ck=null;this.N.I4.Dr(100);}else{this.N.Ck=[this,this.AAC];this.
N.I4.Dr(255);}this.N.C6(A.aaL(A.ach.Aey));this.N.Cl=[this,this.A3n];},MG:function(
s){this.DJ(s);},ABj:function(G){this.Ta=A._GetAutoObject(A.Device.Device).An.Ca(
);if(this.Ta>0)A._GetAutoObject(A.Device.Device).A9(49,true,UW,0,[this,this.Ve]);
else{this.Adn(this);this.Aas(this);}},Aky:function(E){if(this.AN9===E)return;this.
AN9=E;A.pe([this,this.ALh],this);},ALh:function(G){var B;if(this.A1O===false){this.
I1.R(A.jV);return;}var Apb;if(!A._GetAutoObject(A.Device.Device).An.Ca()){var Adh=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABj],[B=A._GetAutoObject(
A.Device.Device).An,B.Fj,B.Fn],0);this.AAC(this);if(!A._GetAutoObject(A.Device.Device
).An.QE()||!Adh)Apb=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACV(A._GetAutoObject(A.Device.Device).An.Filter)===1)Apb=A.aaR(
A.acf.AN3);else Apb=A.aaR(A.acf.AN2);A._GetAutoObject(A.Device.Device).An.Bl(Adh
);A.zX([this,this.ABj],[B=A._GetAutoObject(A.Device.Device).An,B.Fj,B.Fn],0);}else
Apb=this.ARV;Apb=Apb+(AZP+this.AN9);this.I1.R(Apb);},Ae6:function(E){if(this.ARV===
E)return;this.ARV=E;A.pe([this,this.ALh],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkQ._Init.call(this.I1={
I:this},0);this.__proto__=C.Fw;this.Dq(C.Abu);this.Y.H(E$);this.Y.JP(1);this.I1.
H(E$);this.J(this.Y,0);this.J(this.I1,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I1._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I1._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A68={Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A68;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvP={K0:null,MS:null,AY:0,Yh:function(){this.K0=null;this.MS=null;this.AY=0;
},Os:function(A7){var Hb;Hb=A._NewObject(C.A68,0);Hb.A4=A7;if(!this.K0){this.K0=
Hb;this.MS=Hb;this.AY=1;}else{this.MS.Ah=Hb;this.MS=Hb;this.AY=this.AY+1;}},AmW:
function(){var B;var RG=0;var Of=this.K0;while(!!Of){RG+=Of.A4;Of=Of.Ah;}return RG;
},AjO:function(){if(!this.AY)return 0;return this.AmW()/this.AY;},AqV:function(){
var B;if(!this.AY)return 0;var A1d=this.AjO();var Ade=0;var Of=this.K0;while(!!Of
){Ade+=Math.pow(Of.A4-A1d,2);Of=Of.Ah;}Ade/=this.AY;Ade=Math.sqrt(Ade);return Ade;
},_Init:function(aArg){this.__proto__=C.AvP;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AN_={F$:null,Aeu:null,Yo:null,C5:null,I1:null,
CP:function(){this.A4l(this);},Init:function(aArg){A.zV([this,this.A4l],A._GetAutoObject(
A.Device.Device).Pl,0);A.pe([this,this.A4l],this);},Ev:function(G){A._GetAutoObject(
C.A$).Fv();},A4l:function(G){this.Yo.Ce(-1);this.I1.Z(!this.F$.AX.Ca());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.F$._Init.call(this.F$={I:this},0);C.
Aeu._Init.call(this.Aeu={I:this},0);C.Yo._Init.call(this.Yo={I:this},0);A.acg.C5.
_Init.call(this.C5={I:this},0);C.AkQ._Init.call(this.I1={I:this},0);this.__proto__=
C.AN_;this.N.Z(true);this.Dq(C.AO6);this.F$.H(Ata);this.F$.NZ(C.AmN);this.Aeu.H(
IR);this.Yo.H(As4);this.C5.DC(Bra);this.C5.DL(Brb);this.C5.Nh(3);this.C5.L(A.jb.
Text);this.I1.H(Aom);this.I1.R((A.aaR(A.acf.A7R)+AZP)+A.aaR(A.acf.A6a));this.J(this.
F$,0);this.J(this.Aeu,0);this.J(this.Yo,0);this.J(this.C5,0);this.J(this.I1,0);this.
N.CB=[this,this.Ev];this.N.CY(A.aaL(A.ach.E2));this.F$.Zr(A._GetAutoObject(A.Device.
Device).Pl);this.Yo.Zr(A._GetAutoObject(A.Device.Device).Pl);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.F$._Done();this.Aeu._Done();this.Yo._Done();
this.C5._Done();this.I1._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.F$._ReInit();this.Aeu._ReInit();this.Yo._ReInit();this.C5.
_ReInit();this.I1._ReInit();this.I1.R((A.aaR(A.acf.A7R)+AZP)+A.aaR(A.acf.A6a));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.F$)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aeu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yo).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOb={At9:null,At8:null,At$:null,At_:null,Aub:null,Aua:null,Aud:null,Auc:null
,AaK:null,Yw:null,Abl:null,Abk:null,RatedAttribute:0,Init:function(aArg){this.Sz(
2);},DE:function(G){var D4=(A.Core.BN.isPrototypeOf(G)?G:null);switch(D4.CO){case
6:switch(this.RatedAttribute){case 2:this.Sz(3);break;case 1:this.Sz(2);break;case
4:this.Sz(1);break;case 3:this.Sz(4);break;default:this.Sz(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.Sz(1);break;case 1:this.Sz(4);break;case 4:this.
Sz(3);break;case 3:this.Sz(2);break;default:this.Sz(0);}break;default:D4.NH=true;
}},Ap6:function(L1,AcV){if(!L1)return;var Fs=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcV,true);Fs.
CW(HV);var AAU=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAU.Initialize(
3,5,0,true);Fs.CW(AAU);L1.Bl(Fs);},Ait:function(G){var Ap4=0;var A3G=A._GetAutoObject(
A.Device.Device).Bt.Ca();var B1=A._NewObject(A.Device.Rating,0);while(Ap4<A3G){B1.
EM(Ap4,A._GetAutoObject(A.Device.Device).Bt);this.Bdc(B1,0);var BBW=A._GetAutoObject(
A.Device.Helper).ZP(2);this.Bdc(B1,BBW);Ap4++;}C.Fw.Ait.call(this,G);},Aas:function(
G){A.pe([this,this.BcR],this);C.Fw.Aas.call(this,G);},Adn:function(G){this.At9=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.At8=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At_=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At$=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aua=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aub=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auc=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aud=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fw.Adn.
call(this,G);},DJ:function(G){C.Fw.DJ.call(this,G);this.N.OO(true);this.N.OP(true
);},Bdc:function(D2,BbP){if(!D2||(D2.Timestamp<BbP))return;if(!BbP){this.At9.Set(
D2.Appearance,this.At9.Get(D2.Appearance)+1);this.At$.Set(D2.Faeces,this.At$.Get(
D2.Faeces)+1);this.Aub.Set(D2.Feed,this.Aub.Get(D2.Feed)+1);this.Aud.Set(D2.Respiratory
,this.Aud.Get(D2.Respiratory)+1);}else{this.At8.Set(D2.Appearance,this.At8.Get(D2.
Appearance)+1);this.At_.Set(D2.Faeces,this.At_.Get(D2.Faeces)+1);this.Aua.Set(D2.
Feed,this.Aua.Get(D2.Feed)+1);this.Auc.Set(D2.Respiratory,this.Auc.Get(D2.Respiratory
)+1);}},Sz:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yw.Ks(this.AaK.Lt(E));A.pe([this,this.BcR],this);},BcR:function(G){var AaL=null;
var AaM=null;switch(this.RatedAttribute){case 2:{AaL=this.At8;AaM=this.At9;}break;
case 4:{AaL=this.At_;AaM=this.At$;}break;case 1:{AaL=this.Aua;AaM=this.Aub;}break;
case 0:{AaL=A._NewObject(A.Device.Int32ArrayWrapper,0);AaM=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaL=this.Auc;AaM=this.Aud;}break;default:throw new
Error(Brc+this.RatedAttribute.toFixed());}var AGh=A._NewObject(A.acv.AUa,0);AGh.
Os(AaL.Get(3),A.jb.E1);AGh.Os(AaL.Get(2),A.jb.H6);AGh.Os(AaL.Get(1),A.jb.Gf);var
AGi=A._NewObject(A.acv.AUa,0);AGi.Os(AaM.Get(3),A.jb.E1);AGi.Os(AaM.Get(2),A.jb.
H6);AGi.Os(AaM.Get(1),A.jb.Gf);this.Abk.Ab9(AGh);this.Abl.Ab9(AGi);var A39=AaL.AmW(
)-AaL.Get(5);var Bfp=0;var Bfn=0;if(A39>0){Bfp=(AaL.Get(2)/A39)*100;Bfn=(AaL.Get(
1)/A39)*100;}var AK7=AaM.AmW()-AaM.Get(5);this.I1.Z(!AK7);var Bfq=0;var Bfo=0;if(
AK7>0){Bfq=(AaM.Get(2)/AK7)*100;Bfo=(AaM.Get(1)/AK7)*100;}this.Abk.A_z(A.abk(Bfp
,0,0)+Aag);this.Abk.A_d(A.abk(Bfn,0,0)+Aag);this.Abl.A_z(A.abk(Bfq,0,0)+Aag);this.
Abl.A_d(A.abk(Bfo,0,0)+Aag);},_Init:function(aArg){C.Fw._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaK={I:this},0);C.NE._Init.call(this.
Yw={I:this},0);C.ACC._Init.call(this.Abl={I:this},0);C.ACC._Init.call(this.Abk={
I:this},0);this.__proto__=C.AOb;this.Dq(C.AO7);this.Aky(A.aaR(A.acf.A6b));this.Ae6(
A.aaR(A.acf.Ano));this.Yw.H(IR);this.Yw.Aj(true);this.Yw.T(A.aaR(A.acf.Axn)+A.aaR(
A.acf.Colon));this.Yw.Bg(false);this.Yw.BmR(false);this.Abl.H(Brd);this.Abl.T(A.
aaR(A.acf.AF4));this.Abk.H(Bre);this.Abk.T(A.aaR(A.acf.A7f));this.I1.H(Aom);this.
J(this.Yw,-1);this.J(this.Abl,-1);this.J(this.Abk,-1);this.At9=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At8=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At$=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.At_=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aub=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aua=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aud=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auc=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fw;this.AaK._Done();this.Yw._Done();this.Abl._Done();this.Abk.
_Done();C.Fw._Done.call(this);},_ReInit:function(){C.Fw._ReInit.call(this);this.
AaK._ReInit();this.Yw._ReInit();this.Abl._ReInit();this.Abk._ReInit();this.Aky(A.
aaR(A.acf.A6b));this.Ae6(A.aaR(A.acf.Ano));this.Yw.T(A.aaR(A.acf.Axn)+A.aaR(A.acf.
Colon));this.Abl.T(A.aaR(A.acf.AF4));this.Abk.T(A.aaR(A.acf.A7f));},_Mark:function(
D){var B;C.Fw._Mark.call(this,D);if((B=this.At9)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At$)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aub)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aua)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aud)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Auc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOc={Aet:null,UJ:null,UK:null,Aes:null,UG:null,UH:null,AJI:0,AJH:0,AJm:0,AJl:
0,Adg:false,CP:function(){this.Aas(this);},Ap6:function(L1,AcV){if(!L1)return;var
Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcV,true);Fs.CW(HV);var ABa=A._NewObject(A.Device.Int32FilterCriterion
,0);ABa.Initialize(7,2,0,true);Fs.CW(ABa);L1.Bl(Fs);},Ait:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJI++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJH++;var Ap4=0;var A3G=A._GetAutoObject(
A.Device.Device).Bt.Ca();var At7;var ABu=0;while(Ap4<A3G){this.Adg=true;At7=A._GetAutoObject(
A.Device.Device).Bt.I2(Ap4,9);if(At7===1)ABu=1;else if((At7===2)&&(ABu!==1))ABu=
2;Ap4++;}if(ABu===1)this.AJl++;else if(ABu===2)this.AJm++;C.Fw.Ait.call(this,G);
},Aas:function(G){var Bfl=0;var Bfm=0;if(this.Ta>0){Bfl=(this.AJI/this.Ta)*100;Bfm=(
this.AJH/this.Ta)*100;}this.UJ.Ks(((((((A.abk(Bfl,0,0)+AIB)+this.AJI.toFixed())+
CQ)+A.aaR(A.acf.AEl))+CQ)+this.Ta.toFixed())+Oa);this.UK.Ks(((((((A.abk(Bfm,0,0)+
AIB)+this.AJH.toFixed())+CQ)+A.aaR(A.acf.AEl))+CQ)+this.Ta.toFixed())+Oa);var Bfj=
0;var Bfk=0;if(this.Ta>0){Bfj=(this.AJm/this.Ta)*100;Bfk=(this.AJl/this.Ta)*100;
}this.UG.Ks(((((((A.abk(Bfj,0,0)+AIB)+this.AJm.toFixed())+CQ)+A.aaR(A.acf.AEl))+
CQ)+this.Ta.toFixed())+Oa);this.UH.Ks(((((((A.abk(Bfk,0,0)+AIB)+this.AJl.toFixed(
))+CQ)+A.aaR(A.acf.AEl))+CQ)+this.Ta.toFixed())+Oa);this.I1.Z(!this.Adg);C.Fw.Aas.
call(this,G);},Adn:function(G){this.AJl=0;this.AJm=0;this.AJH=0;this.AJI=0;this.
Adg=false;C.Fw.Adn.call(this,G);},_Init:function(aArg){C.Fw._Init.call(this,aArg
);C.Agr._Init.call(this.Aet={I:this},0);C.Ajp._Init.call(this.UJ={I:this},0);C.Ajp.
_Init.call(this.UK={I:this},0);C.Agr._Init.call(this.Aes={I:this},0);C.Ajp._Init.
call(this.UG={I:this},0);C.Ajp._Init.call(this.UH={I:this},0);this.__proto__=C.AOc;
this.Dq(C.AO8);this.Aky(A.aaR(A.acf.A6c));this.Ae6(A.aaR(A.acf.Arq));this.Aet.H(
IR);this.Aet.Aj(true);this.Aet.T(A.aaR(A.acf.A6g));this.Aet.Bg(false);this.UJ.H(
P7);this.UJ.Aj(true);this.UJ.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UJ.
Bg(true);this.UJ.AkD(2);this.UK.H(Aae);this.UK.Aj(true);this.UK.T(A.aaR(A.acf.Avt
)+A.aaR(A.acf.Colon));this.UK.Bg(true);this.UK.AkD(1);this.Aes.H(Alg);this.Aes.Aj(
true);this.Aes.T(A.aaR(A.acf.A6h));this.Aes.Bg(false);this.UG.H(Aor);this.UG.Aj(
true);this.UG.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UG.Bg(true);this.
UG.AkD(2);this.UH.H(As4);this.UH.Aj(true);this.UH.T(A.aaR(A.acf.Avt)+A.aaR(A.acf.
Colon));this.UH.Bg(true);this.UH.AkD(1);this.J(this.Aet,0);this.J(this.UJ,0);this.
J(this.UK,0);this.J(this.Aes,0);this.J(this.UG,0);this.J(this.UH,0);this.UJ.S(A.
aaL(A.fl.Ak));this.UK.S(A.aaL(A.fl.Ak));this.UG.S(A.aaL(A.fl.Ak));this.UH.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fw;this.Aet._Done();this.UJ._Done(
);this.UK._Done();this.Aes._Done();this.UG._Done();this.UH._Done();C.Fw._Done.call(
this);},_ReInit:function(){C.Fw._ReInit.call(this);this.Aet._ReInit();this.UJ._ReInit(
);this.UK._ReInit();this.Aes._ReInit();this.UG._ReInit();this.UH._ReInit();this.
Aky(A.aaR(A.acf.A6c));this.Ae6(A.aaR(A.acf.Arq));this.Aet.T(A.aaR(A.acf.A6g));this.
UJ.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UK.T(A.aaR(A.acf.Avt)+A.aaR(
A.acf.Colon));this.Aes.T(A.aaR(A.acf.A6h));this.UG.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UH.T(A.aaR(A.acf.Avt)+A.aaR(A.acf.Colon));this.UJ.S(A.aaL(A.fl.
Ak));this.UK.S(A.aaL(A.fl.Ak));this.UG.S(A.aaL(A.fl.Ak));this.UH.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.Fw._Mark.call(this,D);if((B=this.Aet)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aes)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqK={K8:null
,Aje:null,Ajf:null,Aml:null,Aby:null,WY:null,Abv:null,SX:null,Abw:null,SY:null,Abz:
null,WZ:null,Ay:null,Adb:0,AAo:0,Apu:0,A2p:0,BdI:0,CP:function(){this.Aas(this);
},DE:function(G){switch(this.Cr.CO){case 4:{if(this.I1.Fk())return;var Qs=this.Y.
Br[1]+80;this.Y.F_([this.Y.Br[0],Qs]);this.Y.Vt(null,null);}break;case 5:{if(this.
I1.Fk())return;var Qs=this.Y.Br[1]-80;this.Y.F_([this.Y.Br[0],Qs]);this.Y.Vt(null
,null);}break;default:C.Fw.DE.call(this,G);}},Ap6:function(L1,AcV){if(!L1)return;
var Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcV,true);Fs.CW(HV);var Ac9=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac9.Initialize(8,2,0,true);Fs.CW(Ac9);L1.Bl(Fs);},Ait:function(G){if(this.Bdy(
)){this.K8.Os(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arc()){var Qe=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qe>0){var A10=A._GetAutoObject(A.acj.DV).Alx(Qe,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Aje.
Os(A10);}}var A2I=A._GetAutoObject(A.Device.Device).Bt.Ca()-2;if(A2I>=0){var BzO=
A._GetAutoObject(A.Device.Device).Bt.ACX(A2I,8);var BzN=A._GetAutoObject(A.Device.
Device).Bt.HF(A2I,6);var Qe=A._GetAutoObject(A.Device.Helper).MN(BzN,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qe>0){var A10=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BzO)/Qe)|0;this.Ajf.Os(A10);}}if((A._GetAutoObject(
A.Device.Helper).W.Arc()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RJ()<=180)){var ALs=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tl=A._GetAutoObject(A.Device.
Helper).MN(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BA2=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALs/Tl);this.Aml.Os(BA2);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Adb++;this.Apu=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZP(7)){this.AAo++;this.A2p=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BdI=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.Fw.Ait.call(
this,G);},Aas:function(G){var A4u=this.Aje.AjO()|0;var A4w=this.Ajf.AjO()|0;if(this.
Adb>1)A._GetAutoObject(A.Device.Device).A9(56,true,this.Adb.toFixed(),0,null);if(
this.Adb===1)A._GetAutoObject(A.Device.Device).A9(53,true,this.Apu.toFixed(),0,null
);if(this.AAo>1)A._GetAutoObject(A.Device.Device).A9(52,true,this.AAo.toFixed(),
0,null);if(this.AAo===1)A._GetAutoObject(A.Device.Device).A9(57,true,(this.A2p.toFixed(
)+As8)+this.BdI.toFixed(),0,null);if(this.K8.AY>0)this.WY.T(((((((A._GetAutoObject(
A.Device.Converter).AxX(this.K8.AjO()|0,1)+Ayz)+A._GetAutoObject(A.Device.Converter
).AxX(this.K8.AqV()|0,1))+CQ)+A._GetAutoObject(A.acj.DV).AfZ())+AyA)+this.K8.AY.
toFixed())+Oa);else this.WY.T(A.aaR(A.acf.Unknown));if(this.Aje.AY>0)this.SX.T(((((((
A._GetAutoObject(A.Device.Converter).S2(A4u,2,true)+Ayz)+A._GetAutoObject(A.Device.
Converter).S2(this.Aje.AqV()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DV).Aax())+AyA
)+this.Aje.AY.toFixed())+Oa);else this.SX.T(A.aaR(A.acf.Unknown));if(this.Ajf.AY>
0)this.SY.T(((((((A._GetAutoObject(A.Device.Converter).S2(A4w,2,true)+Ayz)+A._GetAutoObject(
A.Device.Converter).S2(this.Ajf.AqV()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DV).
Aax())+AyA)+this.Ajf.AY.toFixed())+Oa);else this.SY.T(A.aaR(A.acf.Unknown));if(this.
Aml.AY>0)this.WZ.T(((((((A.abk(this.Aml.AjO(),0,1)+Ayz)+A.abk(this.Aml.AqV(),0,1
))+CQ)+A.aaR(A.acf.BhH))+AyA)+this.Aml.AY.toFixed())+Oa);else this.WZ.T(A.aaR(A.
acf.Unknown));var A4v=0;var A4x=0;var Adg=false;if(this.K8.AY>0)Adg=true;var H$=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AJ1=A._GetAutoObject(A.Device.
Device).An.Filter.DQ(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJ1)?AJ1:null))H$=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJ1)?AJ1:null
).A4;}if(this.Aje.AY>0){Adg=true;A4v=A._GetAutoObject(A.Device.Converter).A$Q(A4u
,H$);}if(this.Ajf.AY>0){Adg=true;A4x=A._GetAutoObject(A.Device.Converter).A$Q(A4w
,H$);}this.SX.AkD(A4v);this.SY.AkD(A4x);this.I1.Z(!Adg);C.Fw.Aas.call(this,G);},
Adn:function(G){this.K8.Yh();this.Aje.Yh();this.Ajf.Yh();this.Aml.Yh();this.Adb=
0;this.AAo=0;this.Apu=0;this.A2p=0;C.Fw.Adn.call(this,G);},Fe:function(G){var B;
this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},Bdy:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.Fw._Init.call(this,aArg);C.Agr._Init.call(this.Aby={I:
this},0);C.IC._Init.call(this.WY={I:this},0);C.Agr._Init.call(this.Abv={I:this},
0);C.Ajp._Init.call(this.SX={I:this},0);C.Agr._Init.call(this.Abw={I:this},0);C.
Ajp._Init.call(this.SY={I:this},0);C.Agr._Init.call(this.Abz={I:this},0);C.IC._Init.
call(this.WZ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqK;
this.Dq(C.Avs);this.Aky(A.aaR(A.acf.A6d));this.Ae6(A.aaR(A.acf.Akl));this.Aby.H(
AIx);this.Aby.Aj(true);this.Aby.T(A.aaR(A.acf.A45));this.Aby.Bg(false);this.Aby.
Kq(5);this.WY.H(AZQ);this.WY.Aj(true);this.WY.T(A.jV);this.WY.Bg(true);this.Abv.
H(Atb);this.Abv.Aj(true);this.Abv.T(A.aaR(A.acf.ALR));this.Abv.Bg(false);this.Abv.
Kq(5);this.SX.H(Atc);this.SX.Aj(true);this.SX.T(A.jV);this.SX.Bg(true);this.SX.Ks(
A.jV);this.Abw.H(Atd);this.Abw.Aj(true);this.Abw.T(A.aaR(A.acf.Auv));this.Abw.Bg(
false);this.Abw.Kq(5);this.SY.H(Brf);this.SY.Aj(true);this.SY.T(A.jV);this.SY.Bg(
true);this.SY.Ks(A.jV);this.Abz.H(AZR);this.Abz.Aj(true);this.Abz.T(A.aaR(A.acf.
A5b));this.Abz.Bg(false);this.Abz.Kq(5);this.WZ.H(Aoy);this.WZ.Aj(true);this.WZ.
T(A.jV);this.WZ.Bg(true);this.Ay.H(Ir);this.J(this.Aby,-1);this.J(this.WY,-1);this.
J(this.Abv,-1);this.J(this.SX,-1);this.J(this.Abw,-1);this.J(this.SY,-1);this.J(
this.Abz,-1);this.J(this.WZ,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fe];this.
K8=A._NewObject(C.AvP,0);this.Aje=A._NewObject(C.AvP,0);this.Ajf=A._NewObject(C.
AvP,0);this.WY.S(A.aaL(A.fl.Af));this.SX.S(A.aaL(A.fl.Ak));this.SY.S(A.aaL(A.fl.
Ak));this.WZ.S(A.aaL(A.fl.Ak));this.Aml=A._NewObject(C.A6n,0);},_Done:function(){
this.__proto__=C.Fw;this.Aby._Done();this.WY._Done();this.Abv._Done();this.SX._Done(
);this.Abw._Done();this.SY._Done();this.Abz._Done();this.WZ._Done();this.Ay._Done(
);C.Fw._Done.call(this);},_ReInit:function(){C.Fw._ReInit.call(this);this.Aby._ReInit(
);this.WY._ReInit();this.Abv._ReInit();this.SX._ReInit();this.Abw._ReInit();this.
SY._ReInit();this.Abz._ReInit();this.WZ._ReInit();this.Ay._ReInit();this.Aky(A.aaR(
A.acf.A6d));this.Ae6(A.aaR(A.acf.Akl));this.Aby.T(A.aaR(A.acf.A45));this.Abv.T(A.
aaR(A.acf.ALR));this.Abw.T(A.aaR(A.acf.Auv));this.Abz.T(A.aaR(A.acf.A5b));this.WY.
S(A.aaL(A.fl.Af));this.SX.S(A.aaL(A.fl.Ak));this.SY.S(A.aaL(A.fl.Ak));this.WZ.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.Fw._Mark.call(this,D);if((
B=this.K8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aje)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aml)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abu={_Init:function(aArg){C.AjR._Init.call(this,aArg);this.__proto__=C.Abu;this.
Dd.Aw(A.aaL(A.ach.ADv));},_className:"Application::HeaderEvaluationFilter"};C.Km={
CP:function(){this.Text.R(A.aaR(A.acf.None));},D5:function(G){C.AjR.D5.call(this
,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdW(A._GetAutoObject(A.Device.
Device).JH));},_Init:function(aArg){C.AjR._Init.call(this,aArg);this.__proto__=C.
Km;},_ReInit:function(){C.AjR._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avs={Init:function(aArg){this.Dd.Aw(A._GetAutoObject(A.acj.DV).Bc7());},_Init:
function(aArg){C.Abu._Init.call(this,aArg);this.__proto__=C.Avs;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AO8={Init:function(
aArg){this.Dd.Aw(A.aaL(A.ach.AbD));},_Init:function(aArg){C.Abu._Init.call(this,
aArg);this.__proto__=C.AO8;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AO7={Init:function(aArg){this.Dd.Aw(A.aaL(A.ach.Am2));},_Init:function(aArg){
C.Abu._Init.call(this,aArg);this.__proto__=C.AO7;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AO6={Sg:null,Dd:null,AP:null,CP:function(){this.Sg.R(A.aaR(A.acf.AM9));},De:
function(E){C.BS.De.call(this,E);this.Sg.L(E);this.Dd.L(E);},_Init:function(aArg
){C.BS._Init.call(this,aArg);C.CH._Init.call(this.Sg={I:this},0);A.acg.Ap._Init.
call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0);this.__proto__=
C.AO6;this.Sg.H(Brg);this.Sg.R(A.aaR(A.acf.AM9));this.Sg.A6(0x11);this.Dd.H(Brh);
this.AP.DC(Bri);this.AP.DL(Brj);this.AP.L(A.jb.Bc);this.J(this.Sg,0);this.J(this.
Dd,0);this.J(this.AP,0);this.Sg.S(A.aaL(A.fl.Af));this.Sg.A2(A.aaL(A.fl.Ak));this.
Dd.Aw(A.aaL(A.ach.AQe));},_Done:function(){this.__proto__=C.BS;this.Sg._Done();this.
Dd._Done();this.AP._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.
call(this);this.Sg._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Sg.R(A.aaR(
A.acf.AM9));this.Sg.S(A.aaL(A.fl.Af));this.Sg.A2(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BS._Mark.call(this,D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aeu={TR:null,Aj1:
null,AjY:null,AjZ:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.TR={I:this},0);A.acg.Ap._Init.call(this.Aj1={I:this},0);A.acg.Ap._Init.
call(this.AjY={I:this},0);A.acg.Ap._Init.call(this.AjZ={I:this},0);this.__proto__=
C.Aeu;this.TR.H(Brk);this.TR.R(A.aaR(A.acf.Year));this.TR.A6(0x11);this.TR.L(A.jb.
Text);this.Aj1.H(Bab);this.Aj1.L(A.jb.Text);this.AjY.H(Brl);this.AjY.L(A.jb.Text
);this.AjZ.H(Brm);this.AjZ.L(A.jb.Text);this.J(this.TR,0);this.J(this.Aj1,0);this.
J(this.AjY,0);this.J(this.AjZ,0);this.TR.S(A.aaL(A.fl.Kl));this.TR.A2(A.aaL(A.fl.
Ij));this.Aj1.Aw(A.aaL(A.ach.AQp));this.AjY.Aw(A.aaL(A.ach.AQo));this.AjZ.Aw(A.aaL(
A.ach.AQw));},_Done:function(){this.__proto__=C.EA;this.TR._Done();this.Aj1._Done(
);this.AjY._Done();this.AjZ._Done();C.EA._Done.call(this);},_ReInit:function(){C.
EA._ReInit.call(this);this.TR._ReInit();this.Aj1._ReInit();this.AjY._ReInit();this.
AjZ._ReInit();this.TR.R(A.aaR(A.acf.Year));this.TR.S(A.aaL(A.fl.Kl));this.TR.A2(
A.aaL(A.fl.Ij));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.TR).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmN={Ajv:null,AP:null
,A_:null,Ea:null,UD:null,SP:null,Gp:null,XH:0,AtG:0,AlB:0,ABv:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SP.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.SP.M[2]-1,0,this.SP.M[
2]+1,aSize[1]]);this.UD.H([this.SP.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UD.M[2]-1,0,this.UD.M[2]+1,aSize[1]]);this.Gp.H([this.UD.M[2],0,aSize[
0],aSize[1]]);this.Ajv.H(this.Gp.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABv.toFixed());this.SP.L(this.V.AQ);this.SP.R(this.AlB.toFixed());this.UD.
L(this.V.AQ);this.UD.R(this.AtG.toFixed());var B1=this.BA1(this.XH);this.Gp.L(A.
_GetAutoObject(A.acj.Assessment).Xv(B1));this.Ajv.L(A._GetAutoObject(A.acj.Assessment
).Qj(B1));this.Gp.R(A.abk(this.XH,0,0)+Aag);},Ce:function(Ad){if(!this.AX)return;
this.Hn=Ad;Ad=(this.AX.Ca()-Ad)-1;if(!!this.AX){this.AlB=this.AX.CE(Ad,1);this.AtG=
this.AX.CE(Ad,2);this.ABv=this.AX.CE(Ad,0);if(this.AlB>0)this.XH=(this.AtG/this.
AlB)*100;else this.XH=0;this.Am();}},BA1:function(XH){if(XH>=8)return 1;else if(
XH>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ajv={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A_={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UD={I:this},0);A.acg.Text._Init.call(this.SP={I:this},0
);A.acg.Text._Init.call(this.Gp={I:this},0);this.__proto__=C.AmN;this.Ajv.H(Aop);
this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.H(Aop);this.Ea.L(A.jb.Bc);this.UD.
L(A.jb.Text);this.SP.H(Aop);this.SP.L(A.jb.Text);this.Gp.L(A.jb.Text);this.J(this.
Ajv,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.UD,0);this.
J(this.SP,0);this.J(this.Gp,0);this.UD.S(A.aaL(A.fl.Af));this.SP.S(A.aaL(A.fl.Af
));this.Gp.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajv._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.UD._Done(
);this.SP._Done();this.Gp._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajv._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea.
_ReInit();this.UD._ReInit();this.SP._ReInit();this.Gp._ReInit();this.UD.S(A.aaL(
A.fl.Af));this.SP.S(A.aaL(A.fl.Af));this.Gp.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajp={
BT:null,AxS:A.jV,Rating:0,Ai:function(Ae){C.IC.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qj(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xv(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IC.S.call(this,E);if((E===A.aaL(A.fl.Kl))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Ij))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Ks:function(E){if(this.AxS===E)return;this.AxS=E;this.
BT.R(E);},AkD:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IC._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Ajp;this.BT.AZ(0x34);this.BT.H(Aai);this.BT.I7(true);this.BT.
A6(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IC;this.BT._Done();C.IC._Done.call(
this);},_ReInit:function(){C.IC._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IC._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACC={
N2:null,SC:null,V:null,AnR:null,AnQ:null,Acg:null,Acf:null,DK:Lv,A$V:A.jV,A_T:A.
jV,Ab9:function(E){if(this.N2===E)return;this.N2=E;this.SC.Ab9(this.N2);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_z:function(E){if(this.A$V===E
)return;this.A$V=E;this.Acg.R(E);},A_d:function(E){if(this.A_T===E)return;this.A_T=
E;this.Acf.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SC._Init.
call(this.SC={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnR={I:this},0);A.acg.AL._Init.call(this.AnQ={I:this},0);A.acg.Text._Init.
call(this.Acg={I:this},0);A.acg.Text._Init.call(this.Acf={I:this},0);this.__proto__=
C.ACC;this.H(Brn);this.SC.H(Bro);this.SC.Ar(false);this.SC.Bm0(360);this.SC.Bm_(
0.5);this.V.AZ(0x1D);this.V.H(W7);this.V.KS(true);this.V.R(Lv);this.V.L(A.jb.Text
);this.AnR.H(Bac);this.AnR.L(A.jb.H6);this.AnQ.H(Bad);this.AnQ.L(A.jb.Gf);this.Acg.
AZ(0x1D);this.Acg.H(Bac);this.Acg.L(A.jb.Text);this.Acf.AZ(0x1D);this.Acf.H(Bad);
this.Acf.L(A.jb.CS);this.J(this.SC,0);this.J(this.V,0);this.J(this.AnR,0);this.J(
this.AnQ,0);this.J(this.Acg,0);this.J(this.Acf,0);this.SC.Bm$(A.aaL(A.acv.ATK));
this.V.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SC._Done();this.V._Done();this.AnR.
_Done();this.AnQ._Done();this.Acg._Done();this.Acf._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SC._ReInit();this.V._ReInit(
);this.AnR._ReInit();this.AnQ._ReInit();this.Acg._ReInit();this.Acf._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N2)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkQ={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.AkQ;this.H(UU);this.Background.AZ(0x3F);this.Background.
H(UU);this.Background.L(A.jb.Bjy);this.Text.AZ(0x3F);this.Text.H(UU);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Ra={Ak1:null,NR:null,C8:null,AcE:null,JK:null,TemperatureUnit:null,MD:null,PP:
null,Sc:null,Us:null,Lq:null,Jb:null,Z2:null,Z1:null,Se:null,HB:null,AjG:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlJ());
this.Us.R(A._GetAutoObject(A.acj.Temperature).AlJ());this.Se.Z(!A._GetAutoObject(
A.Device.Device).AmP);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An_();this.AxP(
);this.AcG();this.AxQ();},IW:function(G){this.WM(this);},CF:function(G){var B;C.
AB.CF.call(this,G);A.zX([this,this.AKx],[B=A._GetAutoObject(A.Device.Device),B.AEx
,B.AIN],0);A.zX([this,this.AAD],[B=A._GetAutoObject(A.Device.Device),B.AEB,B.AIP
],0);A.zX([this,this.AAD],[B=A._GetAutoObject(A.Device.Device),B.ASv,B.AZ8],0);A.
zX([this,this.A25],[B=A._GetAutoObject(A.Device.Device),B.Art,B.Atg],0);A.zX([this
,this.A2X],[B=A._GetAutoObject(A.Device.Device),B.AEu,B.AIK],0);A._GetAutoObject(
A.Device.Device).AhH();if(A._GetAutoObject(A.Device.Device).AmP)A._GetAutoObject(
A.Device.Device).AeZ(true);A._GetAutoObject(A.Device.Device).AxC();A.pe([this,this.
A2X],this);A.pe([this,this.AAD],this);A.pe([this,this.A25],this);},E3:function(G
){var B;A._GetAutoObject(A.Device.Device).AhH();A._GetAutoObject(A.Device.Device
).Un(false);A._GetAutoObject(A.Device.Device).Ae8(false);A._GetAutoObject(A.Device.
Device).AeZ(false);A.z$([this,this.AKx],[B=A._GetAutoObject(A.Device.Device),B.AEx
,B.AIN],0);A.z$([this,this.AAD],[B=A._GetAutoObject(A.Device.Device),B.AEB,B.AIP
],0);A.z$([this,this.AAD],[B=A._GetAutoObject(A.Device.Device),B.ASv,B.AZ8],0);A.
z$([this,this.A25],[B=A._GetAutoObject(A.Device.Device),B.Art,B.Atg],0);A.z$([this
,this.A2X],[B=A._GetAutoObject(A.Device.Device),B.AEu,B.AIK],0);},AAD:function(G
){this.Am();},An_:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CK);this.C8.L(A.jb.Gf);this.JK.L(this.C8.AQ);this.
MD.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CK);this.C8.L(A.jb.AV);this.JK.L(A.jb.Text);this.MD.L(this.JK.AQ);this.TemperatureUnit.
L(this.JK.AQ);this.HB.L(A.jb.Gf);}}},AxP:function(){this.Ak1.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JK.R(A.aaR(A.acf.ADL));this.C8.Aw(A.aaL(A.ach.AvG));this.C8.Cv(0);
this.NR.Cv(0);}break;case 1:{this.AVq(A._GetAutoObject(A.Device.Device).Kv,false
);this.C8.Aw(A.aaL(A.ach.AvG));this.NR.Cv(0);}break;case 2:{this.Sc.R(A._GetAutoObject(
A.Device.Converter).Ak0(A._GetAutoObject(A.Device.Device).AF8));this.AVq(A._GetAutoObject(
A.Device.Device).Kv,false);this.C8.Aw(null);this.NR.Cv(1);this.AcE.Z(true);this.
PP.Z(true);this.Sc.Z(true);this.Us.Z(true);}break;case 3:{this.AUu();this.AVq(A.
_GetAutoObject(A.Device.Device).Kv,true);this.AcE.Z(false);this.PP.Z(false);this.
Sc.Z(false);this.Us.Z(false);}break;case 4:{this.JK.R(A.aaR(A.acf.BjL));this.MD.
R(A.aaR(A.acu.Akk));this.C8.Aw(A.aaL(A.ach.AvI));this.C8.Cv(2);this.NR.Cv(0);}break;
default:A.ab5("%s%e",AHV,A._GetAutoObject(A.Device.Device).MeasureState);}},AcG:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Kv<=3240)||(A._GetAutoObject(A.Device.Device
).Kv>=5460))this.N.C6(null);else this.N.C6(A.aaL(A.ach.Aex));this.N.Cs(null);}break;
default:;}},AsB:function(G){A._GetAutoObject(C.A$).Fv();},WM:function(G){},A0j:function(
s){this.WM(s);},AkV:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BAN(this);break;default:;}},A0i:function(s){this.AkV(s);},AVq:
function(AoO,BzD){if(BzD)this.Lq.L(A.jb.Bm);else this.Lq.L(A.jb.Gf);if(AoO<=3240
){this.MD.Z(false);this.TemperatureUnit.Z(false);this.Lq.Z(true);this.Lq.R(A.aaR(
A.acu.AVa));}else if(AoO>=5460){this.MD.Z(false);this.TemperatureUnit.Z(false);this.
Lq.Z(true);this.Lq.R(A.aaR(A.acu.Bpv));}else{this.MD.Z(true);this.TemperatureUnit.
Z(true);this.Lq.Z(false);this.MD.R(A._GetAutoObject(A.Device.Converter).Ak0(AoO)
);}},AxQ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Kv<=3240)||(A._GetAutoObject(A.Device.
Device).Kv>=5460))this.JK.R(A.aaR(A.acf.ADL));else this.JK.R(A.aaR(A.acf.Bp7));break;
default:;}},AxR:function(){},BpQ:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Z2.Ar(true);break;case 4:this.Z1.Ar(true);break;default:{
this.Z2.Ar(false);this.Z1.Ar(false);A._GetAutoObject(A.Device.Device).Ae8(false);
}}},AKx:function(G){this.Am();this.AxR();this.BpQ();this.BpO();},A25:function(G){
if(A._GetAutoObject(A.Device.Device).AmQ){this.Se.L(A.jb.H6);this.Se.Cv(1);}else{
this.Se.L(A.jb.Bm);this.Se.Cv(0);}},BAN:function(G){if(!A._GetAutoObject(A.Device.
Device).AmP)A._GetAutoObject(A.Device.Device).AeZ(!A._GetAutoObject(A.Device.Device
).AmQ);},BpO:function(){if(A._GetAutoObject(A.Device.Device).AmP){this.Se.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).AeZ(true);else A._GetAutoObject(A.Device.Device).AeZ(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Se.Z(true);else this.Se.Z(false);},AKz:function(
G){this.CF(this);},AUu:function(){A.ab5("%s",Baa);},A2X:function(G){if(A._GetAutoObject(
A.Device.Device).HB){this.JK.H(Brp);this.MD.H(Brq);this.TemperatureUnit.H(Brr);}
else{this.JK.H(Brs);this.MD.H(Brt);this.TemperatureUnit.H(Bru);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gh._Init.call(this.Ak1={I:this},0);A.acg.
Ap._Init.call(this.NR={I:this},0);A.acg.Ap._Init.call(this.C8={I:this},0);A.acg.
Ap._Init.call(this.AcE={I:this},0);A.acg.Text._Init.call(this.JK={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MD={
I:this},0);A.acg.Text._Init.call(this.PP={I:this},0);A.acg.Text._Init.call(this.
Sc={I:this},0);A.acg.Text._Init.call(this.Us={I:this},0);C.CH._Init.call(this.Lq={
I:this},0);A.Device.TE._Init.call(this.Jb={I:this},0);A.Device.TE._Init.call(this.
Z2={I:this},0);A.Device.TE._Init.call(this.Z1={I:this},0);A.acg.Ap._Init.call(this.
Se={I:this},0);C.CH._Init.call(this.HB={I:this},0);A.acl.TE._Init.call(this.AjG={
I:this},0);this.__proto__=C.Ra;var B;this.N.Z(true);this.Ak1.Fl(1000);this.Ak1.B2=
2;this.NR.H(Brv);this.NR.L(A.jb.CS);this.C8.H(Brw);this.C8.L(A.jb.AV);this.C8.Cv(
0);this.C8.Z(true);this.AcE.H(Brx);this.AcE.L(A.jb.Text);this.AcE.Z(false);this.
JK.KS(true);this.JK.R(A.aaR(A.acf.ADL));this.JK.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.MD.A6(0x14);this.MD.R(A.aaR(A.acu.
Akk));this.MD.L(A.jb.Text);this.PP.H(Bry);this.PP.R(A.aaR(A.acf.PP));this.PP.L(A.
jb.Text);this.PP.Z(false);this.Sc.H(Brz);this.Sc.A6(0x14);this.Sc.R(BrA);this.Sc.
L(A.jb.Text);this.Sc.Z(false);this.Us.H(BrB);this.Us.R(BrC);this.Us.L(A.jb.Text);
this.Us.Z(false);this.Lq.H(BrD);this.Lq.R(A.aaR(A.acu.AVa));this.Lq.A6(0x12);this.
Lq.L(A.jb.Gf);this.Jb.B2=false;this.Jb.Cw=true;this.Jb.HM(1);this.Jb.Fl(4000);this.
Jb.Uk(0);this.Z2.B2=false;this.Z2.Cw=true;this.Z2.HM(2);this.Z2.Fl(400);this.Z2.
Uk(200);this.Z1.B2=false;this.Z1.Cw=true;this.Z1.HM(3);this.Z1.Fl(500);this.Z1.Uk(
250);this.Se.H(BrE);this.HB.H(BrF);this.HB.Z(A._GetAutoObject(A.Device.Device).HB
);this.HB.R(A.aaR(A.acf.HB));this.HB.A6(0x12);this.HB.L(A.jb.Gf);this.AjG.Ar(A._GetAutoObject(
A.Device.Device).HB);this.AjG.Fl(500);this.AjG.Uk(1000);this.J(this.NR,0);this.J(
this.C8,0);this.J(this.AcE,0);this.J(this.JK,0);this.J(this.TemperatureUnit,0);this.
J(this.MD,0);this.J(this.PP,0);this.J(this.Sc,0);this.J(this.Us,0);this.J(this.Lq
,0);this.J(this.Se,0);this.J(this.HB,0);this.N.CB=[this,this.AsB];this.N.Ck=[this
,this.A0i];this.N.Cl=[this,this.A0j];this.N.CY(A.aaL(A.ach.Aew));this.Ak1.Q=[B=this.
C8,B.ASm,B.Cv];this.NR.Aw(A.aaL(A.ach.NR));this.C8.Aw(A.aaL(A.ach.AvG));this.AcE.
Aw(A.aaL(A.ach.AQG));this.JK.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MD.S(A.aaL(A.fl.Aep));this.PP.S(A.aaL(A.fl.Af));this.Sc.S(A.aaL(A.fl.EK
));this.Us.S(A.aaL(A.fl.EK));this.Lq.S(A.aaL(A.fl.Aep));this.Lq.A2(A.aaL(A.fl.EK
));this.Lq.Cu(A.aaL(A.fl.Af));this.Jb.Q=[B=A._GetAutoObject(A.Device.Device),B.ASD
,B.A0c];this.Z2.Q=[B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIQ];this.Z1.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEC,B.AIQ];this.Se.Aw(A.aaL(A.ach.AqN));this.
HB.S(A.aaL(A.fl.EK));this.HB.A2(A.aaL(A.fl.Kl));this.HB.Cu(A.aaL(A.fl.Ij));this.
AjG.Q=[B=this.HB,B.Fk,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Ak1._Done();this.NR._Done();this.C8._Done();this.AcE._Done();this.JK._Done(
);this.TemperatureUnit._Done();this.MD._Done();this.PP._Done();this.Sc._Done();this.
Us._Done();this.Lq._Done();this.Jb._Done();this.Z2._Done();this.Z1._Done();this.
Se._Done();this.HB._Done();this.AjG._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Ak1._ReInit();this.NR._ReInit();this.C8._ReInit();
this.AcE._ReInit();this.JK._ReInit();this.TemperatureUnit._ReInit();this.MD._ReInit(
);this.PP._ReInit();this.Sc._ReInit();this.Us._ReInit();this.Lq._ReInit();this.Jb.
_ReInit();this.Z2._ReInit();this.Z1._ReInit();this.Se._ReInit();this.HB._ReInit(
);this.AjG._ReInit();this.JK.R(A.aaR(A.acf.ADL));this.MD.R(A.aaR(A.acu.Akk));this.
PP.R(A.aaR(A.acf.PP));this.Lq.R(A.aaR(A.acu.AVa));this.HB.R(A.aaR(A.acf.HB));this.
JK.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MD.S(A.aaL(A.fl.
Aep));this.PP.S(A.aaL(A.fl.Af));this.Sc.S(A.aaL(A.fl.EK));this.Us.S(A.aaL(A.fl.EK
));this.Lq.S(A.aaL(A.fl.Aep));this.Lq.A2(A.aaL(A.fl.EK));this.Lq.Cu(A.aaL(A.fl.Af
));this.HB.S(A.aaL(A.fl.EK));this.HB.A2(A.aaL(A.fl.Kl));this.HB.Cu(A.aaL(A.fl.Ij
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ak1)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Us
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjG)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AU0={AcG:
function(){C.Ra.AcG.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cs(null);this.N.C6(A.aaL(A.ach.AvJ));}break;default:;}},
WM:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Kv>3240)&&(A._GetAutoObject(A.Device.Device
).Kv<5460)){A._GetAutoObject(A.Device.Device).AhH();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKz(this);break;default:;}},AxQ:
function(){C.Ra.AxQ.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JK.R(A.aaR(A.acf.BjM));break;default:;}},AxR:function(){C.Ra.AxR.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WA(16711680);this.Jb.Ar(true);}break;default:this.Jb.Ar(false);
}},AUu:function(){this.C8.Aw(A.aaL(A.ach.AvI));this.C8.Cv(0);this.NR.Cv(0);},_Init:
function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.AU0;this.Dq(C.AO4);},
_className:"Application::TemperatureMeasurementScreen"};C.AO9={Dd:null,II:null,NT:
null,AP:null,AgZ:null,A_:null,De:function(E){C.BS.De.call(this,E);this.Dd.L(E);this.
II.L(E);this.NT.L(E);this.AgZ.L(E);},_Init:function(aArg){C.BS._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.Ap._Init.call(this.II={I:this},0
);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.AgZ={I:this},0);A.acg.C5._Init.call(this.A_={I:this},
0);this.__proto__=C.AO9;this.Dd.H(Ayv);this.II.H(As1);this.NT.H(AHw);this.AP.DC(
Bae);this.AP.DL(Baf);this.AP.L(A.jb.Bc);this.AgZ.H(BrG);this.AgZ.L(A.jb.CS);this.
A_.DC(BrH);this.A_.DL(BrI);this.A_.L(A.jb.Bc);this.J(this.Dd,0);this.J(this.II,0
);this.J(this.NT,0);this.J(this.AP,0);this.J(this.AgZ,0);this.J(this.A_,0);this.
Dd.Aw(A.aaL(A.ach.ADv));this.II.Aw(A.aaL(A.ach.Aey));this.NT.Aw(A.aaL(A.ach.AvB)
);this.AgZ.Aw(A.aaL(A.ach.AQd));},_Done:function(){this.__proto__=C.BS;this.Dd._Done(
);this.II._Done();this.NT._Done();this.AP._Done();this.AgZ._Done();this.A_._Done(
);C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.Dd._ReInit(
);this.II._ReInit();this.NT._ReInit();this.AP._ReInit();this.AgZ._ReInit();this.
A_._ReInit();},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Dd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dc={Eq:null,DS:null,AGt:
0,ANF:0,Init:function(aArg){A.zV([this,this.ALe],A._GetAutoObject(A.Device.Device
).An,0);A.pe([this,this.ALe],this);},ALe:function(G){var Ad=this.AGt;if(Ad<0){this.
DS.Hi();this.DS.EB(this.ANF);return;}this.DS.EB(A._GetAutoObject(A.Device.Device
).An.AmU(Ad,14));this.DS.AEZ(A._GetAutoObject(A.Device.Device).An.I2(Ad,13));this.
DS.Ae0(A._GetAutoObject(A.Device.Device).An.H1(Ad,8));this.DS.Ul(A._GetAutoObject(
A.Device.Device).An.H1(Ad,11));this.DS.Ae3(A._GetAutoObject(A.Device.Device).An.
H1(Ad,12));this.DS.Ae5(A._GetAutoObject(A.Device.Device).An.CE(Ad,5));},A_g:function(
E){if(this.AGt===E)return;this.AGt=E;A.pe([this,this.ALe],this);},A9K:function(E
){if(this.ANF===E)return;this.ANF=E;A.pe([this,this.ALe],this);},A8W:function(){
return this.AGt;},_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.call(
this.Eq={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dc;this.
Eq.H(BrJ);this.Eq.R(A.aaR(A.acf.GJ));this.Eq.A6(0x11);this.Eq.L(A.jb.Text);this.
DS.H(AZS);this.J(this.Eq,0);this.J(this.DS,0);this.Eq.S(A.aaL(A.fl.Af));this.Eq.
A2(A.aaL(A.fl.Ak));this.Eq.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){
this.__proto__=C.EA;this.Eq._Done();this.DS._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Eq._ReInit();this.DS._ReInit();this.Eq.R(
A.aaR(A.acf.GJ));this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.Ak));this.Eq.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Eq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KO={AgG:null,Text:null,Afg:null,De:function(E
){C.BS.De.call(this,E);this.AgG.L(E);this.Text.L(E);this.Afg.L(E);},_Init:function(
aArg){C.BS._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgG={I:this},0);C.CH._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afg={I:this},0);this.__proto__=
C.KO;this.AgG.H(BrK);this.AgG.L(A.jb.Text);this.Text.H(BrL);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afg.H(BrM);this.Afg.L(A.jb.Text);this.
J(this.AgG,0);this.J(this.Text,0);this.J(this.Afg,0);this.AgG.Aw(A.aaL(A.ach.AO$
));this.Text.S(A.aaL(A.fl.Kl));this.Text.A2(A.aaL(A.fl.Ij));},_Done:function(){this.
__proto__=C.BS;this.AgG._Done();this.Text._Done();this.Afg._Done();C.BS._Done.call(
this);},_ReInit:function(){C.BS._ReInit.call(this);this.AgG._ReInit();this.Text.
_ReInit();this.Afg._ReInit();this.Text.S(A.aaL(A.fl.Kl));this.Text.A2(A.aaL(A.fl.
Ij));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.AgG)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afg
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AO2={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO2;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AO4={_Init:function(
aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO4;this.JV(this.Afg,-2);this.
Afg.Aw(A.aaL(A.ach.AbD));},_className:"Application::HeaderDeviceTemperature"};C.
Yo={Ai:function(Ae){C.AmN.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bpw)+A.aaR(A.acf.Colon
));},Ce:function(Ad){var B;if(!this.AX)return;this.AlB=0;this.AtG=0;this.XH=0;if(
!!this.AX){var O;for(O=0;O<this.AX.Ca();O++){this.AlB+=this.AX.CE(O,1);this.AtG+=
this.AX.CE(O,2);}if(this.AlB>0)this.XH=(this.AtG/this.AlB)*100;this.Am();}},_Init:
function(aArg){C.AmN._Init.call(this,aArg);this.__proto__=C.Yo;this.AP.Z(false);
this.A_.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.
Ij));},_ReInit:function(){C.AmN._ReInit.call(this);this.V.S(A.aaL(A.fl.Kl));this.
V.A2(A.aaL(A.fl.Ij));},_className:"Application::EvaluationLossesSumItem"};C.A6m={
Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A6m;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6n={K0:null,MS:null,AY:0,Yh:function(){this.K0=null;this.MS=null;this.AY=0;
},Os:function(A7){var Hb;Hb=A._NewObject(C.A6m,0);Hb.A4=A7;if(!this.K0){this.K0=
Hb;this.MS=Hb;this.AY=1;}else{this.MS.Ah=Hb;this.MS=Hb;this.AY=this.AY+1;}},AmW:
function(){var B;var RG=0;var Of=this.K0;while(!!Of){RG+=Of.A4;Of=Of.Ah;}return RG;
},AjO:function(){if(!this.AY)return 0;return this.AmW()/this.AY;},AqV:function(){
var B;if(!this.AY)return 0;var A1d=this.AjO();var Ade=0;var Of=this.K0;while(!!Of
){Ade+=Math.pow(Of.A4-A1d,2);Of=Of.Ah;}Ade/=this.AY;Ade=Math.sqrt(Ade);return Ade;
},_Init:function(aArg){this.__proto__=C.A6n;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agr={Background:null,V:null,KT:0,Uq:5,Hf:false
,Ai:function(Ae){C.Hc.Ai.call(this,Ae);if(this.Hf)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CK);},T:function(E){C.Hc.T.call(this,E);this.V.R(E);},Bg:
function(E){if(this.Hf===E)return;this.Hf=E;this.Am();},Kq:function(E){if(this.Uq===
E)return;this.Uq=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hc._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CH.
_Init.call(this.V={I:this},0);this.__proto__=C.Agr;this.H(BF);this.Background.AZ(
0x3F);this.Background.H(BF);this.V.AZ(0x3F);this.V.H(AIq);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KT=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ij));this.V.Cu(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hc;this.Background._Done();this.V._Done();C.Hc._Done.call(this
);},_ReInit:function(){C.Hc._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ij));this.V.Cu(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.ANX={Wv:function(G){this.Agp();this.IY(A.aaR(
A.acf.AU$),[this,this.ATz],5);this.IY(A.aaR(A.acf.AU9),[this,this.ATy],7);this.IY(
A.aaR(A.acf.Calving),[this,this.Blu],11);this.IY(A.aaR(A.acf.An3),[this,this.AwR
],2);this.IY(A.aaR(A.acf.XP),[this,this.AEN],1);this.IY(A.aaR(A.acf.Auy),[this,this.
AEH],0);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Anh)+A.
aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(6);},DE:function(G){},Abs:
function(){return C.AM4;},Abt:function(){return C.APw;},Q6:function(G){A._GetAutoObject(
A.Device.Device).An.Bl(A._GetAutoObject(A.Device.Helper).ACR());},HO:function(G){
C.GU.HO.call(this,G);if(this.Akh()===false){this.N.Cs(A.aaL(A.ach.ADs));this.N.Ck=[
this,this.A5V];this.N.FJ(A.jV);}this.N.OO(false);this.N.OP(false);},Agb:function(
){A._GetAutoObject(C.A$).Cg(62);},_Init:function(aArg){C.GU._Init.call(this,aArg
);this.__proto__=C.ANX;var B;this.Dq(C.AO5);this.Dz(A.aaR(A.acf.ARU));this.AwM([
B=A._GetAutoObject(A.Device.Device),B.A8o,B.BaW]);},_ReInit:function(){C.GU._ReInit.
call(this);this.Dz(A.aaR(A.acf.ARU));},_className:"Application::DryCowListScreen"
};C.ANW={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.ANW;this.
Ld.Ar(false);this.Ld.Aj(false);this.Ld.Z(false);this.Jn.Ar(false);this.Jn.Aj(false
);this.Jn.Z(false);},_className:"Application::DryCowListFilterScreen"};C.AO5={D5:
function(G){C.Km.D5.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).
AdW(9));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.AO5;}
,_className:"Application::HeaderDryCowListFilter"};C.Abp={Filter:null,LW:null,AGW:
A.jV,Ep:0,AF2:1,Operator:1,Bk:function(aSize){C.Aco.Bk.call(this,aSize);this.V.H([
15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Aco.Ai.call(this,Ae);this.LW.
L(this.V.AQ);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.
z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$],E,0);A.
pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.Filter
,F[1].call(F[0])))this.To((F=this.Filter,F[1].call(F[0])).DQ(this.Ep,this.Operator
));else this.To(null);},Nd:function(E){if(this.Ep===E)return;this.Ep=E;A.pe([this
,this.L$],this);},To:function(AH){if(!!AH){var A1S;if(this.AF2!==1)A1S=this.AF2;
else A1S=AH.Operator;this.T((this.AGW+CQ)+A._GetAutoObject(A.Device.Converter).A6i(
A1S));this.Zw(false);}else{this.T(this.AGW);this.Zw(true);}},ON:function(E){if(this.
Operator===E)return;this.Operator=E;A.pe([this,this.L$],this);},AFM:function(E){
if(this.AGW===E)return;this.AGW=E;A.pe([this,this.L$],this);},A96:function(E){if(
this.AF2===E)return;this.AF2=E;A.pe([this,this.L$],this);},_Init:function(aArg){
C.Aco._Init.call(this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.
Abp;this.H(As3);this.AW.H(BrN);this.LW.H(AZT);this.JV(this.V,-1);this.J(this.LW,
0);},_Done:function(){this.__proto__=C.Aco;this.LW._Done();C.Aco._Done.call(this
);},_ReInit:function(){C.Aco._ReInit.call(this);this.LW._ReInit();},_Mark:function(
D){var B;C.Aco._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.AjI={LW:null,Ai:function(Ae){C.Qy.Ai.call(this,Ae);this.LW.L(this.V.AQ);},To:
function(AH){if(!!AH){this.H4.Cv(1);this.Zw(true);this.LW.A9X(false);}else{this.
H4.Cv(0);this.Zw(false);this.LW.A9X(true);}},_Init:function(aArg){C.Qy._Init.call(
this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.AjI;this.I_=20;this.
LW.H(AZT);this.J(this.LW,0);},_Done:function(){this.__proto__=C.Qy;this.LW._Done(
);C.Qy._Done.call(this);},_ReInit:function(){C.Qy._ReInit.call(this);this.LW._ReInit(
);},_Mark:function(D){var B;C.Qy._Mark.call(this,D);if((B=this.LW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABT={Q:null,CP:function(
){this.T(A._GetAutoObject(A.Device.Helper).AmV(this.TableId,this.Ep));},To:function(
AH){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.H4.Cv(1);else this.H4.Cv(
0);},Kd:function(G){A.pe([this,this.L$],this);},As:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
Kd],E,0);if(!!E)A.pe([this,this.Kd],this);},_Init:function(aArg){C.Qy._Init.call(
this,aArg);this.__proto__=C.ABT;},_ReInit:function(){C.Qy._ReInit.call(this);this.
CP();},_Mark:function(D){var B;C.Qy._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.APw={YS:null,I6:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YS={I:this},0);A.acg.Text._Init.call(this.I6={I:this},0);this.__proto__=
C.APw;this.A9K(1);this.YS.H(BrO);this.YS.KS(true);this.YS.R(A.aaR(A.acf.AD0));this.
YS.L(A.jb.Text);this.I6.H(S5);this.I6.R(((A.aaR(A.acf.RJ)+Bag)+A.aaR(A.acf.A$U))+
Oa);this.I6.L(A.jb.Text);this.J(this.YS,0);this.J(this.I6,0);this.YS.S(A.aaL(A.fl.
Ak));this.I6.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.YS._Done(
);this.I6._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this
);this.YS._ReInit();this.I6._ReInit();this.YS.R(A.aaR(A.acf.AD0));this.I6.R(((A.
aaR(A.acf.RJ)+Bag)+A.aaR(A.acf.A$U))+Oa);this.YS.S(A.aaL(A.fl.Ak));this.I6.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.YS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AM4={Mg:null,KP:null,AdR:null,AP:null,A_:null
,Xm:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mg.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KP.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KP.M[2]-1,0,this.
KP.M[2]+1,aSize[1]]);this.AdR.H([this.KP.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.AdR.L(this.V.AQ);if(!!this.Xm&&(
this.Xm!==5)){this.Mg.L(A._GetAutoObject(A.acj.Assessment).Qj(this.Xm));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xv(this.Xm));}else this.Mg.L(this.Background.
AQ);},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Md=this.AX.
CE(Ad,1);var A2n=this.AX.CE(Ad,29);var Td=this.AX.HF(Ad,4);var LQ=this.AX.I2(Ad,
13);var AlE=this.AX.I2(Ad,17);var AlN=this.AX.H1(Ad,11);this.Xm=A._GetAutoObject(
A.Device.Helper).AMd(LQ,AlN,AlE);this.T(Md.toFixed());this.KP.R(A2n.toFixed());this.
AdR.R(A._GetAutoObject(A.acj.KK).ACO(Td,A._GetAutoObject(A.Device.Helper).Dv(),BrP
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Mg={I:this},0);A.acg.Text._Init.call(this.KP={I:this},0);A.acg.Text._Init.call(
this.AdR={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A_={I:this},0);this.__proto__=C.AM4;this.Mg.H(As_);this.AP.L(A.jb.Bc);this.
A_.L(A.jb.Bc);this.J(this.Mg,0);this.J(this.KP,0);this.J(this.AdR,0);this.J(this.
AP,0);this.J(this.A_,0);this.KP.S(A.aaL(A.fl.Af));this.AdR.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mg._Done();this.KP._Done(
);this.AdR._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mg._ReInit();this.KP._ReInit();this.AdR.
_ReInit();this.AP._ReInit();this.A_._ReInit();this.KP.S(A.aaL(A.fl.Af));this.AdR.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mg
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RQ={AJL:0,Bdv:false,Ai:function(Ae){C.Fu.Ai.call(this,Ae);if(this.Bdv){this.
T(A.aaR(A.acf.ANU));this.Ks(A.jV);}else{this.T(A.aaR(A.acf.Bjs));if(this.AJL>0)this.
Ks(this.AJL.toFixed());else this.Ks(Xa);}},Ce:function(G){C.Fu.Ce.call(this,G);this.
Bdv=A._GetAutoObject(A.Device.Helper).W.IsDry;var Alz=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Alz>0)this.AJL=A._GetAutoObject(A.Device.Helper).
MN(Alz,A._GetAutoObject(A.Device.Helper).Dv());else this.AJL=0;this.Am();},_Init:
function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RQ;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMi={ALo:A.jV,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.RJ));
this.Ks(this.ALo);},Ce:function(G){C.Fu.Ce.call(this,G);var Td=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALo=A._GetAutoObject(A.acj.KK).ACO(Td,A._GetAutoObject(
A.Device.Helper).Dv(),((((BrQ+A.aaR(A.acf.BgM))+BrR)+A.aaR(A.acf.BgL))+BrS)+A.aaR(
A.acf.ALS));this.Am();},_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=
C.AMi;this.ALo=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fu._ReInit.call(this);
this.ALo=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANO={Ua:null,Za:null,Wl:null,Wm:null,St:null,Init:function(aArg){this.Bb(this.
Ua);A.pe([this,this.MG],this);},XB:function(G){A._GetAutoObject(A.Device.Device).
Ds(1);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Nc._Init.call(this.Ua={
I:this},0);C.Nc._Init.call(this.Za={I:this},0);C.Nc._Init.call(this.Wl={I:this},
0);C.AbU._Init.call(this.Wm={I:this},0);C.T9._Init.call(this.St={I:this},0);this.
__proto__=C.ANO;var B;this.Dq(C.AO2);this.Ua.H(IR);this.Ua.Aj(true);this.Ua.T(A.
aaR(A.acf.ACo));this.Ua.Bg(false);this.Ua.Nf(83);this.Za.H(P7);this.Za.Aj(true);
this.Za.T(A.acf.Info);this.Za.Bg(true);this.Za.Nf(82);this.Wl.H(Aae);this.Wl.Aj(
true);this.Wl.T(A.aaR(A.acf.AGw));this.Wl.Bg(false);this.Wl.Nf(64);this.Wm.H(Alg
);this.Wm.Aj(true);this.Wm.T(A.aaR(A.acf.TempMeasurement));this.Wm.Bg(true);this.
Wm.Nf(60);this.St.H(Aor);this.St.Aj(true);this.St.T(A.aaR(A.acf.ACJ));this.St.Bg(
false);this.J(this.Ua,-1);this.J(this.Za,-1);this.J(this.Wl,-1);this.J(this.Wm,-
1);this.J(this.St,-1);this.N.Ck=[this,this.XB];this.N.Cs(A.aaL(A.ach.ADA));this.
Ua.AR=[B=this.Ua,B.Ni];this.Za.AR=[B=this.Za,B.Ni];this.Wl.AR=[B=this.Wl,B.Ni];this.
Wm.AR=[B=this.Wm,B.Ni];this.St.AR=null;this.St.AeT([B=this.St,B.Ati]);this.St.Gn([
this,this.D_,this.GN]);this.St.ASP([B=A._GetAutoObject(A.Device.Device),B.Art,B.
Atg]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ua._Done();this.
Za._Done();this.Wl._Done();this.Wm._Done();this.St._Done();C.Ei._Done.call(this);
},_ReInit:function(){C.Ei._ReInit.call(this);this.Ua._ReInit();this.Za._ReInit();
this.Wl._ReInit();this.Wm._ReInit();this.St._ReInit();this.Ua.T(A.aaR(A.acf.ACo)
);this.Wl.T(A.aaR(A.acf.AGw));this.Wm.T(A.aaR(A.acf.TempMeasurement));this.St.T(
A.aaR(A.acf.ACJ));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Ua
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"
};C.ANP={T_:null,AbS:null,Wj:null,Init:function(aArg){this.Bb(this.T_);},ByT:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},Bj7:function(G){if(A._GetAutoObject(
A.Device.Device).Aa4<=20)A._GetAutoObject(A.Device.Device).A9(76,true,BrT,0,null
);else A._GetAutoObject(A.Device.Device).A9(39,true,A.jV,0,[this,this.ByT]);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Nc._Init.call(this.T_={I:this},0);C.
Co._Init.call(this.AbS={I:this},0);C.AbU._Init.call(this.Wj={I:this},0);this.__proto__=
C.ANP;var B;this.Dq(C.AO3);this.T_.H(IR);this.T_.Aj(true);this.T_.T(A.aaR(A.acf.
A5m));this.T_.Bg(false);this.T_.Nf(65);this.AbS.H(P7);this.AbS.Aj(true);this.AbS.
T(A.aaR(A.acf.A6k));this.AbS.Bg(true);this.Wj.H(Aae);this.Wj.Aj(true);this.Wj.T(
A.aaR(A.acf.RangeTest));this.Wj.Bg(false);this.Wj.Nf(15);this.J(this.T_,-1);this.
J(this.AbS,-1);this.J(this.Wj,-1);this.T_.AR=[B=this.T_,B.Ni];this.AbS.AR=[this,
this.Bj7];this.Wj.AR=[B=this.Wj,B.Ni];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.T_._Done();this.AbS._Done();this.Wj._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.T_._ReInit();this.AbS._ReInit();this.Wj.
_ReInit();this.T_.T(A.aaR(A.acf.A5m));this.AbS.T(A.aaR(A.acf.A6k));this.Wj.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.T_
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AO3={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO3;this.
Text.R(A.aaR(A.acf.AGw));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGw));},_className:"Application::HeaderDeviceServiceMenu"};C.Nc={M8:
null,Ai:function(Ae){C.AbU.Ai.call(this,Ae);this.M8.L(this.V.AQ);},_Init:function(
aArg){C.AbU._Init.call(this,aArg);A.acg.Ap._Init.call(this.M8={I:this},0);this.__proto__=
C.Nc;this.M8.AZ(0x38);this.M8.H(BrU);this.J(this.M8,0);this.V.Cu(A.aaL(A.fl.Bh));
this.M8.Aw(A.aaL(A.ach.Ajq));},_Done:function(){this.__proto__=C.AbU;this.M8._Done(
);C.AbU._Done.call(this);},_ReInit:function(){C.AbU._ReInit.call(this);this.M8._ReInit(
);this.V.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.AbU._Mark.call(this,D);if((
B=this.M8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANK={Ag5:null,Ag$:null,Ahb:null,Ag9:null,Aj9:null,Ag8:null,Ag7:null,Ag6:null
,Aj7:null,Ag4:null,Aj8:null,Aha:null,Aj_:null,Ag_:null,Aj$:null,Init:function(aArg
){this.Bb(this.Ag5);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.PK._Init.
call(this.Ag5={I:this},0);C.PK._Init.call(this.Ag$={I:this},0);C.PK._Init.call(this.
Ahb={I:this},0);C.PK._Init.call(this.Ag9={I:this},0);C.PK._Init.call(this.Aj9={I:
this},0);C.PK._Init.call(this.Ag8={I:this},0);C.PK._Init.call(this.Ag7={I:this},
0);C.PK._Init.call(this.Ag6={I:this},0);C.PK._Init.call(this.Aj7={I:this},0);C.PK.
_Init.call(this.Ag4={I:this},0);C.PK._Init.call(this.Aj8={I:this},0);C.PK._Init.
call(this.Aha={I:this},0);C.PK._Init.call(this.Aj_={I:this},0);C.PK._Init.call(this.
Ag_={I:this},0);C.PK._Init.call(this.Aj$={I:this},0);this.__proto__=C.ANK;this.Dq(
C.AOY);this.Ag5.H(AIx);this.Ag5.Aj(true);this.Ag5.Sy(1);this.Ag$.H(AZQ);this.Ag$.
Aj(true);this.Ag$.Bg(true);this.Ag$.Sy(2);this.Ahb.H(Atb);this.Ahb.Aj(true);this.
Ahb.Bg(false);this.Ahb.Sy(3);this.Ag9.H(Atc);this.Ag9.Aj(true);this.Ag9.Bg(true);
this.Ag9.Sy(4);this.Aj9.H(Ayl);this.Aj9.Aj(true);this.Aj9.Sy(5);this.Ag8.H(BrV);
this.Ag8.Aj(true);this.Ag8.Bg(true);this.Ag8.Sy(6);this.Ag7.H(Atd);this.Ag7.Aj(true
);this.Ag7.Bg(false);this.Ag7.Sy(7);this.Ag6.H(Ayu);this.Ag6.Aj(true);this.Ag6.Bg(
true);this.Ag6.Sy(8);this.Aj7.H(AZR);this.Aj7.Aj(true);this.Aj7.Sy(9);this.Ag4.H(
Aoy);this.Ag4.Aj(true);this.Ag4.Bg(true);this.Ag4.Sy(10);this.Aj8.H(BrW);this.Aj8.
Aj(true);this.Aj8.Sy(11);this.Aha.H(BrX);this.Aha.Aj(true);this.Aha.Bg(true);this.
Aha.Sy(12);this.Aj_.H(BrY);this.Aj_.Aj(true);this.Aj_.Sy(13);this.Ag_.H(BrZ);this.
Ag_.Aj(true);this.Ag_.Bg(true);this.Ag_.Sy(14);this.Aj$.H(Br0);this.Aj$.Aj(true);
this.Aj$.Sy(15);this.J(this.Ag5,-1);this.J(this.Ag$,-1);this.J(this.Ahb,-1);this.
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
"Application::DeviceCheckScreen"};C.AOY={_Init:function(aArg){C.KO._Init.call(this
,aArg);this.__proto__=C.AOY;this.Text.R(A.aaR(A.acf.A5N));},_ReInit:function(){C.
KO._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5N));},_className:"Application::HeaderDeviceCheck"
};C.PK={DeviceComponentToString:null,Kh:null,AuX:0,Bb9:false,CP:function(){this.
V.R(this.DeviceComponentToString.BI(this.AuX));},Bk:function(aSize){var B;C.Co.Bk.
call(this,aSize);this.Kh.H(A.abM(this.Kh.M,aSize[0]-((B=this.Kh.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kh.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kh.
AER(this.V.AQ);if(this.Bb9)this.Kh.AwE(A.jb.E1);else this.Kh.AwE(A.jb.Gf);},Sy:function(
E){if(this.AuX===E)return;this.AuX=E;this.T(this.DeviceComponentToString.BI(E));
this.D5(this);},D5:function(G){this.Bb9=A._GetAutoObject(A.Device.Device).AJB(this.
AuX);this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kh._Init.call(this.Kh={I:this
},0);this.__proto__=C.PK;this.V.H(Br1);this.V.A6(0x11);this.Kh.H(Br2);this.J(this.
Kh,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kh._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kh._ReInit();this.CP();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sb={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAC],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALi(this);this.DJ(this);},CF:function(G
){A.pe([this,this.MG],this);},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[
3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},AAC:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6y();A._GetAutoObject(A.Device.Device
).An.Bl(Be);A.pe([this,this.MG],this);},Ev:function(G){A._GetAutoObject(C.A$).Fv(
);},A3n:function(G){A._GetAutoObject(C.A$).Cg(84);},DJ:function(G){this.N.CY(A.aaL(
A.ach.E2));this.N.CB=[this,this.Ev];this.N.Cs(A.aaL(A.ach.ADz));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Arb(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Ck=null;this.N.I4.Dr(100);}else{this.N.Ck=[this
,this.AAC];this.N.I4.Dr(255);}this.N.C6(A.aaL(A.ach.Aey));this.N.Cl=[this,this.A3n
];},MG:function(s){this.DJ(s);},ALi:function(G){A.ab5("%s",Br3);},BGe:function(s
){this.ALi(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sb;this.N.Ar(false);this.N.Z(true);this.Dq(C.
Abu);this.Ay.H(Ir);this.DY.AZ(0x3F);this.DY.H(E$);this.DY.L(A.jb.CK);this.Y.H(Lu
);this.Y.JP(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.El=[this
,this.Fe];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AN$={Yf:null,Ye:null,X3:null
,TF:null,DJ:function(G){C.Sb.DJ.call(this,G);if(this.AV===this.TF){this.N.Cs(null
);this.N.Ck=null;this.N.C6(null);this.N.Cl=null;}},ALi:function(G){if(this.AV===
this.TF)this.Dq(C.AO9);else this.Dq(C.Abu);},Bza:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AP9);case 1:return A.
aaL(A.ach.AP_);default:A.ab5("%s%s",Br4,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},Bzb:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AP$);case 1:return A.aaL(A.ach.AQa);default:
A.ab5("%s%s",AIC,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},If:function(G){var Cx=(C.Fi.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.
Yf)A._GetAutoObject(C.A$).Cg(66);else if(Cx===this.Ye)A._GetAutoObject(C.A$).Cg(
56);else if(Cx===this.X3)A._GetAutoObject(C.A$).Cg(58);else if(Cx===this.TF)A._GetAutoObject(
C.A$).Cg(59);},_Init:function(aArg){C.Sb._Init.call(this,aArg);C.Fi._Init.call(this.
Yf={I:this},0);C.Fi._Init.call(this.Ye={I:this},0);C.Fi._Init.call(this.X3={I:this
},0);C.Fi._Init.call(this.TF={I:this},0);this.__proto__=C.AN$;this.Yf.H(P3);this.
Yf.Aj(true);this.Yf.T(A.aaR(A.acf.Afr));this.Ye.H(JZ);this.Ye.Aj(true);this.Ye.T(
A.aaR(A.acf.Temperature));this.X3.H(Br5);this.X3.Aj(true);this.X3.T(A.aaR(A.acf.
Rating));this.TF.H(Br6);this.TF.Aj(true);this.TF.T(A.aaR(A.acf.A7C));this.J(this.
Yf,0);this.J(this.Ye,0);this.J(this.X3,0);this.J(this.TF,0);this.Yf.AR=[this,this.
If];this.Yf.DB(this.Bzb());this.Ye.AR=[this,this.If];this.Ye.DB(this.Bza());this.
X3.AR=[this,this.If];this.X3.DB(A.aaL(A.ach.AP7));this.TF.AR=[this,this.If];this.
TF.DB(A.aaL(A.ach.AP8));},_Done:function(){this.__proto__=C.Sb;this.Yf._Done();this.
Ye._Done();this.X3._Done();this.TF._Done();C.Sb._Done.call(this);},_ReInit:function(
){C.Sb._ReInit.call(this);this.Yf._ReInit();this.Ye._ReInit();this.X3._ReInit();
this.TF._ReInit();this.Yf.T(A.aaR(A.acf.Afr));this.Ye.T(A.aaR(A.acf.Temperature)
);this.X3.T(A.aaR(A.acf.Rating));this.TF.T(A.aaR(A.acf.A7C));},_Mark:function(D){
var B;C.Sb._Mark.call(this,D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOa={VG:null,X5:null,Yg:null,ALi:function(G){this.Dq(C.Avs);},Bze:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQL
);case 1:return A.aaL(A.ach.AQM);default:A.ab5("%s%s",AIC,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},If:function(G){var Cx=(C.Fi.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VG)A._GetAutoObject(C.A$).Cg(68);else if(Cx===
this.Yg)A._GetAutoObject(C.A$).Cg(57);else if(Cx===this.X5)A._GetAutoObject(C.A$
).Cg(67);},Bzd:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.APW);case 1:return A.aaL(A.ach.APX);default:A.ab5("%s%s",AIC
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},Bzf:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQN
);case 1:return A.aaL(A.ach.AQO);default:A.ab5("%s%s",AIC,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sb._Init.call(
this,aArg);C.Fi._Init.call(this.VG={I:this},0);C.Fi._Init.call(this.X5={I:this},
0);C.Fi._Init.call(this.Yg={I:this},0);this.__proto__=C.AOa;this.VG.H(P3);this.VG.
Aj(true);this.VG.T(A.aaR(A.acf.A$M));this.X5.H(AZU);this.X5.Aj(true);this.X5.T(A.
aaR(A.acf.A5c));this.Yg.H(N_);this.Yg.Aj(true);this.Yg.T(A.aaR(A.acf.A$P));this.
J(this.VG,0);this.J(this.X5,0);this.J(this.Yg,0);this.VG.AR=[this,this.If];this.
VG.DB(this.Bze());this.VG.Ab6(A.aaL(A.ach.NS));this.X5.AR=[this,this.If];this.X5.
DB(this.Bzd());this.Yg.AR=[this,this.If];this.Yg.DB(this.Bzf());},_Done:function(
){this.__proto__=C.Sb;this.VG._Done();this.X5._Done();this.Yg._Done();C.Sb._Done.
call(this);},_ReInit:function(){C.Sb._ReInit.call(this);this.VG._ReInit();this.X5.
_ReInit();this.Yg._ReInit();this.VG.T(A.aaR(A.acf.A$M));this.X5.T(A.aaR(A.acf.A5c
));this.Yg.T(A.aaR(A.acf.A$P));},_Mark:function(D){var B;C.Sb._Mark.call(this,D);
if((B=this.VG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOd={Bdy:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZP(0));},_Init:function(aArg){C.AqK._Init.call(this,aArg);this.
__proto__=C.AOd;this.Ae6(A.aaR(A.acf.A7X));},_ReInit:function(){C.AqK._ReInit.call(
this);this.Ae6(A.aaR(A.acf.A7X));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AN8={Aie:null,Abx:null,UI:null,AaX:null,Pi:null,Ajn:null,Agt:null,Ajo:null,Agu:
null,Ay:null,AaR:null,Adb:0,Apu:0,DE:function(G){switch(this.Cr.CO){case 4:{if(this.
I1.Fk())return;var Qs=this.Y.Br[1]+80;this.Y.F_([this.Y.Br[0],Qs]);this.Y.Vt(null
,null);}break;case 5:{if(this.I1.Fk())return;var Qs=this.Y.Br[1]-80;this.Y.F_([this.
Y.Br[0],Qs]);this.Y.Vt(null,null);}break;default:C.Fw.DE.call(this,G);}},Ap6:function(
L1,AcV){if(!L1)return;var Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(
A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcV,true);Fs.CW(HV);var Ac9=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac9.Initialize(8,2,0,true);Fs.CW(Ac9
);L1.Bl(Fs);},Ait:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arc()){this.
Aie.Os(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azd=this.By_(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaR.Set(Azd,this.AaR.Get(Azd)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Adb++;this.Apu=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fw.Ait.call(
this,G);},Aas:function(G){if(this.Adb>1)A._GetAutoObject(A.Device.Device).A9(56,
true,this.Adb.toFixed(),0,null);if(this.Adb===1)A._GetAutoObject(A.Device.Device
).A9(53,true,this.Apu.toFixed(),0,null);if(this.Aie.AY>0)this.UI.T(((((((A._GetAutoObject(
A.Device.Converter).AxX(this.Aie.AjO()|0,1)+Ayz)+A._GetAutoObject(A.Device.Converter
).AxX(this.Aie.AqV()|0,1))+CQ)+A._GetAutoObject(A.acj.DV).AfZ())+AyA)+this.Aie.AY.
toFixed())+Oa);else this.UI.T(A.aaR(A.acf.Unknown));var RG=this.AaR.AmW();var O;
for(O=0;O<this.AaR.MC;O++){var Bf=this.Bzt(O);if(!!Bf){var CD=this.AaR.Get(O);Bf.
BlG(CD);if(!RG)Bf.A_a(0);else Bf.A_a(Math.round((CD*100)/RG)|0);Bf.Bnn(this.Bzs(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adg=false;if(this.Aie.AY>0)
Adg=true;this.I1.Z(!Adg);C.Fw.Aas.call(this,G);},Adn:function(G){this.Aie.Yh();this.
AaR.Hi();this.Adb=0;this.Apu=0;C.Fw.Adn.call(this,G);},Bzt:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Pi;break;case 1:Bf=this.Ajn;break;case 2:Bf=this.
Agt;break;case 3:Bf=this.Ajo;break;case 4:Bf=this.Agu;break;default:throw new Error(
AyB+aIndex.toFixed());}return Bf;},Bzs:function(aIndex,AoJ){var B;var Tp=A.jV;switch(
AoJ){case 0:{switch(aIndex){case 0:Tp=Br7;break;case 1:Tp=Br8;break;case 2:Tp=Br9;
break;case 3:Tp=Br_;break;case 4:Tp=Br$;break;default:throw new Error(AyB+aIndex.
toFixed());}Tp=Tp+(CQ+A.aaR(A.acf.Az6));}break;case 1:{switch(aIndex){case 0:Tp=
Bsa;break;case 1:Tp=Bsb;break;case 2:Tp=Bsc;break;case 3:Tp=Bsd;break;case 4:Tp=
Bse;break;default:throw new Error(AyB+aIndex.toFixed());}Tp=Tp+(CQ+A.aaR(A.acf.A7j
));}break;default:A.ab5("%s%e",Bah,AoJ);}return Tp;},By$:function(AIY,AoJ){var Ac_=
0;switch(AoJ){case 0:switch(AIY){case 0:Ac_=35000;break;case 1:Ac_=40000;break;case
2:Ac_=45000;break;case 3:Ac_=50000;break;case 4:Ac_=2147483647;break;default:throw new
Error(AyB+AIY.toFixed());}break;case 1:switch(AIY){case 0:Ac_=36287;break;case 1:
Ac_=40823;break;case 2:Ac_=45359;break;case 3:Ac_=49895;break;case 4:Ac_=2147483647;
break;default:throw new Error(AyB+AIY.toFixed());}break;default:A.ab5("%s%e",Bah
,AoJ);}return Ac_;},By_:function(A7,AoJ){var Azd=0;var O;for(O=0;O<this.AaR.MC;O++
)if(A7<this.By$(O,AoJ)){Azd=O;break;}return Azd;},Fe:function(G){var B;this.Ay.Mu((
B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[
1]);},_Init:function(aArg){C.Fw._Init.call(this,aArg);C.Agr._Init.call(this.Abx={
I:this},0);C.IC._Init.call(this.UI={I:this},0);C.AaX._Init.call(this.AaX={I:this
},0);C.Pi._Init.call(this.Pi={I:this},0);C.Pi._Init.call(this.Ajn={I:this},0);C.
Pi._Init.call(this.Agt={I:this},0);C.Pi._Init.call(this.Ajo={I:this},0);C.Pi._Init.
call(this.Agu={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaR={I:this},0);this.__proto__=C.AN8;this.Dq(C.Avs);this.Aky(A.aaR(
A.acf.A5$));this.Ae6(A.aaR(A.acf.A7Q));this.Abx.H(AIx);this.Abx.Aj(true);this.Abx.
T(A.aaR(A.acf.A43));this.Abx.Bg(false);this.Abx.Kq(5);this.UI.H(AZQ);this.UI.Aj(
true);this.UI.T(A.jV);this.UI.Bg(true);this.UI.Kq(5);this.AaX.H(Atb);this.AaX.Aj(
true);this.Pi.H(Atc);this.Pi.Aj(true);this.Pi.Bg(true);this.Ajn.H(Atd);this.Ajn.
Aj(true);this.Agt.H(Ayu);this.Agt.Aj(true);this.Agt.Bg(true);this.Ajo.H(AZR);this.
Ajo.Aj(true);this.Agu.H(Aoy);this.Agu.Aj(true);this.Agu.Bg(true);this.Ay.H(Ir);this.
AaR.Zx(5);this.J(this.Abx,-1);this.J(this.UI,-1);this.J(this.AaX,-1);this.J(this.
Pi,-1);this.J(this.Ajn,-1);this.J(this.Agt,-1);this.J(this.Ajo,-1);this.J(this.Agu
,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fe];this.Aie=A._NewObject(C.AvP,0);
this.UI.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Fw;this.Abx._Done(
);this.UI._Done();this.AaX._Done();this.Pi._Done();this.Ajn._Done();this.Agt._Done(
);this.Ajo._Done();this.Agu._Done();this.Ay._Done();this.AaR._Done();C.Fw._Done.
call(this);},_ReInit:function(){C.Fw._ReInit.call(this);this.Abx._ReInit();this.
UI._ReInit();this.AaX._ReInit();this.Pi._ReInit();this.Ajn._ReInit();this.Agt._ReInit(
);this.Ajo._ReInit();this.Agu._ReInit();this.Ay._ReInit();this.AaR._ReInit();this.
Aky(A.aaR(A.acf.A5$));this.Ae6(A.aaR(A.acf.A7Q));this.Abx.T(A.aaR(A.acf.A43));this.
UI.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fw._Mark.call(this,D);if((B=this.
Aie)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajo
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaR)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaX={H8:null,Gp:null
,Bk:function(aSize){C.IC.Bk.call(this,aSize);this.H8.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gp.H([this.H8.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IC.Ai.call(this,Ae);this.H8.L(this.V.AQ);this.Gp.L(this.V.AQ);},_Init:
function(aArg){C.IC._Init.call(this,aArg);A.acg.Text._Init.call(this.H8={I:this}
,0);A.acg.Text._Init.call(this.Gp={I:this},0);this.__proto__=C.AaX;this.T(A.aaR(
A.acf.AG_));this.H8.H(Bsf);this.H8.KS(true);this.H8.R(A.aaR(A.acf.Aqx));this.H8.
L(A.jb.Text);this.Gp.H(Bai);this.Gp.R(Aag);this.Gp.L(A.jb.Text);this.J(this.H8,0
);this.J(this.Gp,0);this.V.S(A.aaL(A.fl.Ij));this.H8.S(A.aaL(A.fl.Ij));this.Gp.S(
A.aaL(A.fl.Kl));},_Done:function(){this.__proto__=C.IC;this.H8._Done();this.Gp._Done(
);C.IC._Done.call(this);},_ReInit:function(){C.IC._ReInit.call(this);this.H8._ReInit(
);this.Gp._ReInit();this.T(A.aaR(A.acf.AG_));this.H8.R(A.aaR(A.acf.Aqx));this.V.
S(A.aaL(A.fl.Ij));this.H8.S(A.aaL(A.fl.Ij));this.Gp.S(A.aaL(A.fl.Kl));},_Mark:function(
D){var B;C.IC._Mark.call(this,D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pi={AP:null,A_:null,PV:null,H8:null,Gp:null,A$O:A.jV,Aqx:0,A_H:0,Bk:function(
aSize){C.IC.Bk.call(this,aSize);this.PV.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.PV.M[2]-1,0,this.PV.M[2]+1,aSize[1]]);this.H8.H([this.PV.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A_.H([this.H8.M[2]-1,0,this.H8.M[2]+1,aSize[
1]]);this.Gp.H([this.H8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IC.Ai.call(
this,Ae);this.PV.L(this.V.AQ);this.H8.L(this.V.AQ);this.Gp.L(this.V.AQ);},Bnn:function(
E){if(this.A$O===E)return;this.A$O=E;this.PV.R(E);},BlG:function(E){if(this.Aqx===
E)return;this.Aqx=E;this.H8.R(E.toFixed());},A_a:function(E){if(this.A_H===E)return;
this.A_H=E;this.Gp.R(E.toFixed()+Alb);},_Init:function(aArg){C.IC._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this
},0);A.acg.Text._Init.call(this.PV={I:this},0);A.acg.Text._Init.call(this.H8={I:
this},0);A.acg.Text._Init.call(this.Gp={I:this},0);this.__proto__=C.Pi;this.AP.L(
A.jb.Bc);this.A_.L(A.jb.Bc);this.PV.H(Bsg);this.PV.R(A.aaR(A.acf.AG_));this.PV.L(
A.jb.Text);this.H8.R(UW);this.H8.L(A.jb.Text);this.Gp.R(Bsh);this.Gp.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A_,0);this.J(this.PV,0);this.J(this.H8,0);this.J(
this.Gp,0);this.PV.S(A.aaL(A.fl.Af));this.H8.S(A.aaL(A.fl.Af));this.Gp.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IC;this.AP._Done();this.A_._Done();this.
PV._Done();this.H8._Done();this.Gp._Done();C.IC._Done.call(this);},_ReInit:function(
){C.IC._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.PV._ReInit();
this.H8._ReInit();this.Gp._ReInit();this.PV.R(A.aaR(A.acf.AG_));this.PV.S(A.aaL(
A.fl.Af));this.H8.S(A.aaL(A.fl.Af));this.Gp.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IC._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMu={AKM:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mo();A._GetAutoObject(A.Device.
Device).An.Bl(Be);},_Init:function(aArg){C.Amu._Init.call(this,aArg);this.__proto__=
C.AMu;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARn={RX:null,
R3:null,RW:null,R0:null,Pk:null,RZ:null,ALg:function(G){A.pe([this,this.BCi],this
);A.pe([this,this.BB8],this);A.pe([this,this.BB4],this);A.pe([this,this.A4g],this
);A.pe([this,this.BB$],this);A.pe([this,this.BB9],this);},If:function(G){var Cx=(
C.QR.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.R3)A._GetAutoObject(C.A$
).Cg(20);else if(Cx===this.Pk)A._GetAutoObject(C.A$).Cg(14);else if(Cx===this.RX
)A._GetAutoObject(C.A$).Cg(12);else if(Cx===this.R0)A._GetAutoObject(C.A$).Cg(43
);else if(Cx===this.RW)A._GetAutoObject(C.A$).Cg(51);else if(Cx===this.RZ)A._GetAutoObject(
C.A$).Cg(61);},BB8:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Azk=A._NewObject(A.Device.BoolFilterCriterion,0);Azk.Initialize(9,0,true,true);Be.
CW(Azk);A._GetAutoObject(A.Device.Device).An.Bl(Be);this.Pk.Zv(A._GetAutoObject(
A.Device.Device).An.Ca().toFixed());},BCi:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mo();var ABs=A._NewObject(A.Device.BoolFilterCriterion,0);ABs.Initialize(
12,0,true,true);Be.CW(ABs);A._GetAutoObject(A.Device.Device).An.Bl(Be);this.R3.Zv(
A._GetAutoObject(A.Device.Device).An.Ca().toFixed());},BB4:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mo();var Ay2=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay2.Initialize(8,0,true,true);Be.CW(Ay2);A._GetAutoObject(A.Device.Device).An.
Bl(Be);this.RX.Zv(A._GetAutoObject(A.Device.Device).An.Ca().toFixed());},A4g:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6s(A._GetAutoObject(A.Device.Device
).ABy);A._GetAutoObject(A.Device.Device).An.Bl(Be);this.RW.Zv(A._GetAutoObject(A.
Device.Device).An.Ca().toFixed());},BB$:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6B();A._GetAutoObject(A.Device.Device).An.Bl(Be);this.R0.Zv(A._GetAutoObject(
A.Device.Device).An.Ca().toFixed());},BB9:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACR();A._GetAutoObject(A.Device.Device).An.Bl(Be);this.RZ.Zv(A._GetAutoObject(
A.Device.Device).An.Ca().toFixed());},_Init:function(aArg){C.T5._Init.call(this,
aArg);C.QR._Init.call(this.RX={I:this},0);C.QR._Init.call(this.R3={I:this},0);C.
QR._Init.call(this.RW={I:this},0);C.QR._Init.call(this.R0={I:this},0);C.QR._Init.
call(this.Pk={I:this},0);C.QR._Init.call(this.RZ={I:this},0);this.__proto__=C.ARn;
this.RX.H(P3);this.RX.Aj(true);this.RX.T(A.aaR(A.acf.Alarm));this.RX.Ab3(true);this.
R3.H(AZU);this.R3.Aj(true);this.R3.T(A.aaR(A.acf.Asa));this.R3.Ab3(true);this.RW.
H(N_);this.RW.Aj(true);this.RW.T(A.aaR(A.acf.ActionList));this.RW.Ab3(true);this.
R0.H(P4);this.R0.Aj(true);this.R0.T(A.aaR(A.acf.AOB));this.R0.Ab3(true);this.Pk.
H(S4);this.Pk.Ar(false);this.Pk.Aj(false);this.Pk.Z(false);this.Pk.T(A.aaR(A.acf.
ACa));this.Pk.Ab3(true);this.RZ.H(UO);this.RZ.Aj(true);this.RZ.T(A.aaR(A.acf.A57
));this.RZ.Ab3(true);this.J(this.RX,-1);this.J(this.R3,-1);this.J(this.RW,-1);this.
J(this.R0,-1);this.J(this.Pk,-1);this.J(this.RZ,-1);this.RX.AR=[this,this.AcS];this.
RX.DB(A.aaL(A.ach.ADp));this.RX.Ab6(A.aaL(A.ach.NS));this.R3.AR=[this,this.AcS];
this.R3.DB(A.aaL(A.ach.AQK));this.R3.Ab6(A.aaL(A.ach.NS));this.RW.AR=[this,this.
AcS];this.RW.DB(A.aaL(A.ach.APH));this.RW.Ab6(A.aaL(A.ach.NS));this.R0.AR=[this,
this.AcS];this.R0.DB(A.aaL(A.ach.AQc));this.R0.Ab6(A.aaL(A.ach.NS));this.Pk.AR=[
this,this.AcS];this.Pk.DB(A.aaL(A.ach.ADp));this.Pk.Ab6(A.aaL(A.ach.NS));this.RZ.
AR=[this,this.AcS];this.RZ.DB(A.aaL(A.ach.AP4));this.RZ.Ab6(A.aaL(A.ach.NS));},_Done:
function(){this.__proto__=C.T5;this.RX._Done();this.R3._Done();this.RW._Done();this.
R0._Done();this.Pk._Done();this.RZ._Done();C.T5._Done.call(this);},_ReInit:function(
){C.T5._ReInit.call(this);this.RX._ReInit();this.R3._ReInit();this.RW._ReInit();
this.R0._ReInit();this.Pk._ReInit();this.RZ._ReInit();this.RX.T(A.aaR(A.acf.Alarm
));this.R3.T(A.aaR(A.acf.Asa));this.RW.T(A.aaR(A.acf.ActionList));this.R0.T(A.aaR(
A.acf.AOB));this.Pk.T(A.aaR(A.acf.ACa));this.RZ.T(A.aaR(A.acf.A57));},_Mark:function(
D){var B;C.T5._Mark.call(this,D);if((B=this.RX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARm={R4:null,VF:null,R1:null,RY:null,R2:null,ALg:function(G){A.pe([this,this.
BB5],this);A.pe([this,this.BCd],this);A.pe([this,this.BCe],this);A.pe([this,this.
BCj],this);A.pe([this,this.BCf],this);},If:function(G){var Cx=(C.QR.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VF)A._GetAutoObject(C.A$).Cg(90);if(Cx===this.
RY)A._GetAutoObject(C.A$).Cg(74);if(Cx===this.R1)A._GetAutoObject(C.A$).Cg(71);if(
Cx===this.R2)A._GetAutoObject(C.A$).Cg(46);if(Cx===this.R4)A._GetAutoObject(C.A$
).Cg(85);},BCe:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACU();A._GetAutoObject(
A.Device.Device).An.Bl(Be);this.R2.Zv(A._GetAutoObject(A.Device.Device).An.Ca().
toFixed());},BCj:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6L();A._GetAutoObject(
A.Device.Device).An.Bl(Be);this.R4.Zv(A._GetAutoObject(A.Device.Device).An.Ca().
toFixed());},BCd:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6G();A._GetAutoObject(
A.Device.Device).An.Bl(Be);this.R1.Zv(A._GetAutoObject(A.Device.Device).An.Ca().
toFixed());},BB5:function(G){var Be=A._GetAutoObject(A.Device.Helper).AOC();A._GetAutoObject(
A.Device.Device).An.Bl(Be);this.RY.Zv(A._GetAutoObject(A.Device.Device).An.Ca().
toFixed());},BCf:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACW();A._GetAutoObject(
A.Device.Device).An.Bl(Be);this.VF.Zv(A._GetAutoObject(A.Device.Device).An.Ca().
toFixed());},_Init:function(aArg){C.T5._Init.call(this,aArg);C.QR._Init.call(this.
R4={I:this},0);C.QR._Init.call(this.VF={I:this},0);C.QR._Init.call(this.R1={I:this
},0);C.QR._Init.call(this.RY={I:this},0);C.QR._Init.call(this.R2={I:this},0);this.
__proto__=C.ARm;this.R4.H(Bsi);this.R4.Aj(true);this.R4.T(A.aaR(A.acf.A7I));this.
R4.Ab3(true);this.VF.H(Bsj);this.VF.Aj(true);this.VF.T(A.aaR(A.acf.AF$));this.R1.
H(Bsk);this.R1.Aj(true);this.R1.T(A.aaR(A.acf.A7K));this.R1.Ab3(true);this.RY.H(
Bsl);this.RY.Aj(true);this.RY.T(A.aaR(A.acf.ABR));this.RY.Ab3(true);this.R2.H(Bsm
);this.R2.Aj(true);this.R2.T(A.aaR(A.acf.AR0));this.R2.Ab3(true);this.J(this.R4,-
1);this.J(this.VF,-1);this.J(this.R1,-1);this.J(this.RY,-1);this.J(this.R2,-1);this.
R4.AR=[this,this.AcS];this.R4.DB(A.aaL(A.ach.AQr));this.R4.Ab6(A.aaL(A.ach.NS));
this.VF.AR=[this,this.AcS];this.VF.DB(A.aaL(A.ach.ADH));this.R1.AR=[this,this.AcS
];this.R1.DB(A.aaL(A.ach.AQt));this.R1.Ab6(A.aaL(A.ach.NS));this.RY.AR=[this,this.
AcS];this.RY.DB(A.aaL(A.ach.APZ));this.RY.Ab6(A.aaL(A.ach.NS));this.R2.AR=[this,
this.AcS];this.R2.DB(A.aaL(A.ach.AQv));this.R2.Ab6(A.aaL(A.ach.NS));},_Done:function(
){this.__proto__=C.T5;this.R4._Done();this.VF._Done();this.R1._Done();this.RY._Done(
);this.R2._Done();C.T5._Done.call(this);},_ReInit:function(){C.T5._ReInit.call(this
);this.R4._ReInit();this.VF._ReInit();this.R1._ReInit();this.RY._ReInit();this.R2.
_ReInit();this.R4.T(A.aaR(A.acf.A7I));this.VF.T(A.aaR(A.acf.AF$));this.R1.T(A.aaR(
A.acf.A7K));this.RY.T(A.aaR(A.acf.ABR));this.R2.T(A.aaR(A.acf.AR0));},_Mark:function(
D){var B;C.T5._Mark.call(this,D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ListsIdManagementScreen"};C.ARY={Wv:function(
G){this.Agp();this.AL3();this.A4G(A.aaR(A.acf.A7m),[this,this.Bm5],131072);this.
A4G(A.aaR(A.acf.A7l),[this,this.Bm4],16384);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(
C.BH).MZ(A.aaR(A.acf.ARh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},DE:function(G){},Abs:function(){return C.Amz;},Abt:function(){return C.Am0;
},Q6:function(G){A._GetAutoObject(A.Device.Device).An.Bl(A._GetAutoObject(A.Device.
Helper).A6G());},HO:function(G){var F;C.Tu.HO.call(this,G);if(this.Akh()===false
){if(!!this.FG&&((F=this.FG,F[1].call(F[0]))===16)){this.N.Cs(A.aaL(A.ach.AQD));
this.N.Ck=[this,this.A55];}else{this.N.Cs(A.aaL(A.ach.AQl));this.N.Ck=[this,this.
A52];}this.N.FJ(A.jV);}this.N.OO(false);this.N.OP(false);},Agb:function(){A._GetAutoObject(
C.A$).Cg(72);},Bm4:function(G){this.AGy(16384);},Bm5:function(G){this.AGy(131072
);},_Init:function(aArg){C.Tu._Init.call(this,aArg);this.__proto__=C.ARY;this.Dq(
C.APl);this.Dz(A.aaR(A.acf.A7O));this.AS7(A._GetAutoObject(C.Av3));},_ReInit:function(
){C.Tu._ReInit.call(this);this.Dz(A.aaR(A.acf.A7O));},_className:"Application::NoNaisIdListScreen"
};C.ARX={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.ARX;this.
Mr.Ar(false);this.Mr.Aj(false);this.Mr.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APl={D5:function(G){C.Km.D5.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdW(10));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.APl;},_className:"Application::HeaderNoNaisIdListFilter"};C.Q4={Bfu:false,CP:function(
){A.pe([this,this.AyM],this);},DE:function(G){},CF:function(G){C.GU.CF.call(this
,G);if(this.Bfu&&(A._GetAutoObject(A.Device.Device).Ut>0))A.pe([this,this.AIF],this
);},Al0:function(G){this.A51(this);},Agb:function(){A._GetAutoObject(C.A$).Cg(73
);},AR6:function(G){throw new Error(Aoz);},BaC:function(s){this.AR6(s);},AR7:function(
G){throw new Error(Aoz);},BaD:function(s){this.AR7(s);},ASa:function(G){throw new
Error(Aoz);},AIF:function(s){this.ASa(s);},BeG:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7)){this.Bfu=true;A._GetAutoObject(
C.A$).Cg(76);}},Aga:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===5))A.z$([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);},XC:function(G){var B;if(A._GetAutoObject(A.Device.
Device).AhN===3){A._GetAutoObject(A.Device.Device).A9(74,false,A.jV,0,[this,this.
Aga]);A.z$([this,this.XC],[B=A._GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);A.pe([
this,this.AIF],this);}},AJA:function(){throw new Error(Aoz);},A75:function(G){A.
_GetAutoObject(A.Device.Device).Ds(0);this.A50(this);},Bny:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);this.BhT(this);},_Init:function(aArg){C.GU._Init.call(this
,aArg);this.__proto__=C.Q4;this.Dz(A.aaR(A.acf.A7V));},_ReInit:function(){C.GU._ReInit.
call(this);this.Dz(A.aaR(A.acf.A7V));this.CP();},_className:"Application::RegistrationsListScreen"
};C.AUf={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AUf;},
_className:"Application::RegistrationsListFilterScreen"};C.Aer={_Init:function(aArg
){C.Yt._Init.call(this,aArg);this.__proto__=C.Aer;this.Text.H(Bsn);this.Text.R(A.
jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"};C.ABY={
Ka:0,AP:null,A_:null,Ea:null,IH:null,SS:null,Gv:null,Md:0,K9:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.IH.H([this.V.M[2],0,this.V.M[2]+(((aSize[0]*15
)/100)|0),aSize[1]]);this.A_.H([this.IH.M[2]-1,0,this.IH.M[2]+1,aSize[1]]);this.
SS.H([this.IH.M[2],0,this.IH.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.Ea.H([
this.SS.M[2]-1,0,this.SS.M[2]+1,aSize[1]]);this.Gv.H([this.SS.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IH.L(this.V.AQ);this.Gv.L(this.
V.AQ);this.SS.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj6(this.K9)){this.
V.S(A.aaL(A.fl.Hr));this.T(Baj);this.SS.R(Rl);}else{this.V.S(A.aaL(A.fl.Af));this.
T(this.Md.toFixed());this.SS.R(A._GetAutoObject(A.Device.Helper).Sd(this.Ka,0,5).
toFixed());}},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){this.Md=
this.AX.CE(Ad,1);this.K9=this.AX.AOQ(Ad,34);var AtO=this.AX.AOI(Ad,7);this.Ka=this.
AX.KN(Ad,26);var Ay9=this.AX.HF(Ad,4);var AfM=A._GetAutoObject(A.Device.Helper).
MN(Ay9,A._GetAutoObject(A.Device.Helper).Dv());this.IH.Aw(A._GetAutoObject(A.Device.
Converter).AmT(AtO));if(AfM<100)this.Gv.R((AfM.toFixed()+CQ)+A.aaR(A.acf.ALS));else
this.Gv.R(A._GetAutoObject(A.acj.KK).ACO(Ay9,A._GetAutoObject(A.Device.Helper).Dv(
),AIj));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0);A.acg.AL._Init.
call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IH={I:this},0);A.acg.Text._Init.
call(this.SS={I:this},0);C.CH._Init.call(this.Gv={I:this},0);this.__proto__=C.ABY;
this.AP.H(Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.A_.L(A.jb.Bc);this.Ea.H(AZV
);this.Ea.L(A.jb.Bc);this.IH.H(Bak);this.IH.L(A.jb.Text);this.SS.H(Ayq);this.Gv.
H(AZW);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.IH,0);this.
J(this.SS,0);this.J(this.Gv,0);this.SS.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.fl.Af
));this.Gv.A2(A.aaL(A.fl.Ak));this.Gv.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:
function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.Ea._Done();this.
IH._Done();this.SS._Done();this.Gv._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();
this.IH._ReInit();this.SS._ReInit();this.Gv._ReInit();this.SS.S(A.aaL(A.fl.Af));
this.Gv.S(A.aaL(A.fl.Af));this.Gv.A2(A.aaL(A.fl.Ak));this.Gv.Cu(A.aaL(A.fl.Bh));
},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListBirthRegistrationItem"};C.ADf={Aj3:null,Pw:null,I3:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj3={I:this},
0);A.acg.Ap._Init.call(this.Pw={I:this},0);A.acg.Ap._Init.call(this.I3={I:this},
0);this.__proto__=C.ADf;this.Aj3.H(Bso);this.Aj3.L(A.jb.Text);this.Pw.H(Bsp);this.
Pw.L(A.jb.Text);this.I3.H(Bab);this.I3.L(A.jb.Text);this.J(this.Aj3,0);this.J(this.
Pw,0);this.J(this.I3,0);this.Aj3.Aw(A.aaL(A.ach.ADD));this.Pw.Aw(A.aaL(A.ach.AvD
));this.I3.Aw(A.aaL(A.ach.Avy));},_Done:function(){this.__proto__=C.Dc;this.Aj3.
_Done();this.Pw._Done();this.I3._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Aj3._ReInit();this.Pw._ReInit();this.I3._ReInit();
},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.Aj3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I3)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.APn={IO:null
,AgT:null,HP:null,Bc:null,My:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2,Init:function(
aArg){var B;A.zX([this,this.D5],[B=A._GetAutoObject(A.Device.Helper).W,B.A8T,B.A_e
],0);A.zX([this,this.D5],[B=A._GetAutoObject(A.Device.Helper).W,B.Wt,B.JQ],0);A.
zX([this,this.D5],[B=A._GetAutoObject(A.Device.Helper).W,B.Ary,B.SA],0);A.zV([this
,this.D5],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.D5],this);},De:
function(E){C.BS.De.call(this,E);this.IO.L(E);this.AgT.L(E);this.HP.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.
acf.Ae$));else this.HP.R(((A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon))+CQ)+E.toFixed());
},D5:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqX()){this.AwY(((A._GetAutoObject(
A.Device.Helper).W.CL+1).toFixed()+A$Z)+A._GetAutoObject(A.Device.Device).An.Ca(
).toFixed());this.JQ(A._GetAutoObject(A.Device.Helper).W.Gender);this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.VisualId);this.Ng(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts);}else{this.AwY(A$0);this.JQ(2);this.OnSetAnimalId(-1);this.
Ng(0);}},JQ:function(E){if(this.Gender===E)return;this.Gender=E;this.AgT.Aw(A._GetAutoObject(
A.Device.Converter).AmT(E));},AwY:function(E){if(this.My===E)return;this.My=E;this.
IO.R(E);},Ng:function(E){if(this.WhereAbouts===E)return;this.WhereAbouts=E;if(A.
_GetAutoObject(A.Device.Helper).Aj6(E))this.HP.Z(false);else this.HP.Z(true);},_Init:
function(aArg){C.BS._Init.call(this,aArg);A.acg.Text._Init.call(this.IO={I:this}
,0);A.acg.Ap._Init.call(this.AgT={I:this},0);A.acg.Text._Init.call(this.HP={I:this
},0);A.acg.C5._Init.call(this.Bc={I:this},0);this.__proto__=C.APn;this.IO.H(A$1);
this.IO.Hh(2);this.IO.KS(true);this.IO.A6(0x12);this.IO.R(A$2);this.AgT.H(Bsq);this.
HP.H(Bsr);this.HP.A6(0x11);this.HP.R(A.aaR(A.acf.Ae$));this.Bc.DC(Ayw);this.Bc.DL(
Ayx);this.Bc.L(A.jb.Bc);this.J(this.IO,0);this.J(this.AgT,0);this.J(this.HP,0);this.
J(this.Bc,0);this.IO.S(A.aaL(A.fl.Ak));this.AgT.Aw(A._GetAutoObject(A.Device.Converter
).AmT(2));this.HP.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BS;this.IO._Done();this.AgT._Done();this.HP._Done();this.Bc._Done();C.BS._Done.
call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.IO._ReInit();this.AgT.
_ReInit();this.HP._ReInit();this.Bc._ReInit();this.HP.R(A.aaR(A.acf.Ae$));this.IO.
S(A.aaL(A.fl.Ak));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.
call(this,D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderRegistrationInfo"
};C.Aa0={EaseOfDeliveryToString:null,AgK:null,Ce:function(G){C.NE.Ce.call(this,G
);var AJU=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;this.Ks(this.EaseOfDeliveryToString.
Lt(AJU));this.GX.R(this.AgK.Aeh(AJU).toFixed());},De:function(E){C.NE.De.call(this
,E);this.GX.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgK._Init.call(this.
AgK={I:this},0);this.__proto__=C.Aa0;this.T(A.aaR(A.acf.AgC));},_Done:function(){
this.__proto__=C.NE;this.EaseOfDeliveryToString._Done();this.AgK._Done();C.NE._Done.
call(this);},_ReInit:function(){C.NE._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgK._ReInit();this.T(A.aaR(A.acf.AgC));},_Mark:function(D){var B;
C.NE._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XU={WhereAboutsToString:null,KY:null,Ce:function(G){C.NE.Ce.call(this,G);var
K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Ks(this.WhereAboutsToString.
Lt(K9));this.GX.R(this.KY.Aeh(K9).toFixed());},De:function(E){C.NE.De.call(this,
E);this.GX.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KY._Init.call(this.KY={
I:this},0);this.__proto__=C.XU;this.T(A.aaR(A.acf.Jd));},_Done:function(){this.__proto__=
C.NE;this.WhereAboutsToString._Done();this.KY._Done();C.NE._Done.call(this);},_ReInit:
function(){C.NE._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KY._ReInit(
);this.T(A.aaR(A.acf.Jd));},_Mark:function(D){var B;C.NE._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RT={Cr:null,Y:null,Ay:null,Init:function(aArg){},CF:function(G){var B;C.D9.CF.
call(this,G);A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.
OnSetId],0);A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]
,0);A.pe([this,this.AfC],this);},E3:function(G){var B;C.D9.E3.call(this,G);A.z$([
this,this.AfC],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0);A.z$([this
,this.AfC],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0],0);},Fe:function(G){var
B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},DE:function(G){switch(this.Cr.CO){case 6:case 7:this.Cr.NH=true;
break;case 4:this.BfQ(4);break;case 5:this.BfQ(5);break;default:;}},BfQ:function(
Gw){var B;switch(Gw){case 5:{var CC=this.Y.Br[1]-40;if(CC<-(((B=this.Y.Db(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CC=-(((B=this.Y.Db(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CC>0)CC=0;this.Y.F_([this.Y.Br[0],CC]);}break;case 4:{var CC=this.Y.
Br[1]+40;if(CC>0)CC=0;this.Y.F_([this.Y.Br[0],CC]);}break;default:throw new Error(
Bss);}},GE:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.IZ.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ce(this
);}X=X.Ah;}},AfC:function(s){this.GE(s);},MO:function(G){var B;this.Y.Vt(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BN._Init.call(this.Cr={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.RT;this.Cr.Filter=147;this.Y.H(UU);this.Y.JP(1);this.Ay.H(AsS
);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BO=[this,this.DE];this.Cr.D0=[this,
this.DE];this.Y.El=[this,this.Fe];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cr._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XV={AaU:null,
XR:null,AaV:null,XS:null,Aa0:null,XU:null,_Init:function(aArg){C.RT._Init.call(this
,aArg);C.AaU._Init.call(this.AaU={I:this},0);C.XR._Init.call(this.XR={I:this},0);
C.AaV._Init.call(this.AaV={I:this},0);C.XS._Init.call(this.XS={I:this},0);C.Aa0.
_Init.call(this.Aa0={I:this},0);C.XU._Init.call(this.XU={I:this},0);this.__proto__=
C.XV;this.AaU.H(BF);this.AaU.Aj(true);this.XR.H(IR);this.XR.Aj(true);this.XR.Bg(
true);this.AaV.H(P7);this.AaV.Aj(true);this.XS.H(Aae);this.XS.Aj(true);this.XS.Bg(
true);this.Aa0.H(Alg);this.Aa0.Aj(true);this.XU.H(Aor);this.XU.Aj(true);this.XU.
Bg(true);this.J(this.AaU,0);this.J(this.XR,0);this.J(this.AaV,0);this.J(this.XS,
0);this.J(this.Aa0,0);this.J(this.XU,0);},_Done:function(){this.__proto__=C.RT;this.
AaU._Done();this.XR._Done();this.AaV._Done();this.XS._Done();this.Aa0._Done();this.
XU._Done();C.RT._Done.call(this);},_ReInit:function(){C.RT._ReInit.call(this);this.
AaU._ReInit();this.XR._ReInit();this.AaV._ReInit();this.XS._ReInit();this.Aa0._ReInit(
);this.XU._ReInit();},_Mark:function(D){var B;C.RT._Mark.call(this,D);if((B=this.
AaU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XS={
BreedToString:null,GX:null,M1:null,Ce:function(G){C.IB.Ce.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BI(Bv));this.GX.
R(this.M1.Aeh(Bv).toFixed());},De:function(E){C.IB.De.call(this,E);this.GX.L(E);
},_Init:function(aArg){C.IB._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.GX={I:this},0);A.Device.
M1._Init.call(this.M1={I:this},0);this.__proto__=C.XS;this.BT.H(Bst);this.GX.H(Bsu
);this.GX.Hh(5);this.GX.A6(0x14);this.GX.R(Bsv);this.GX.L(A.jb.Text);this.J(this.
GX,0);this.Hs.Aw(A.aaL(A.ach.ADu));this.GX.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IB;this.BreedToString._Done();this.GX._Done();this.M1._Done();C.
IB._Done.call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.BreedToString.
_ReInit();this.GX._ReInit();this.M1._ReInit();this.GX.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IB._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M1)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaV={
Ce:function(G){C.IB.Ce.call(this,G);var AAg=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAg>0)this.T(A._GetAutoObject(A.Device.Converter).Rf(AAg));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IB._Init.call(this,aArg);this.__proto__=
C.AaV;this.Hs.Aw(A.aaL(A.ach.AP5));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XR={Yy:null,Ce:function(G){C.IB.Ce.call(this,G);var Td=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfR=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Td>
0)this.T(A._GetAutoObject(A.acj.KK).AjM(Td));else this.T(A.aaR(A.acf.Unknown));var
Ay$=A.aaL(A.aci.TJ);switch(AfR){case 0:Ay$=A.aaL(A.ach.ADr);break;case 1:{Ay$=A.
aaL(A.ach.Avz);this.Yy.Cv(0);}break;case 2:{Ay$=A.aaL(A.ach.Avz);this.Yy.Cv(1);}
break;case 3:{Ay$=A.aaL(A.ach.Avz);this.Yy.Cv(2);}break;default:A.ab5("%s%e",Bsw
,AfR);}this.Yy.Aw(Ay$);},_Init:function(aArg){C.IB._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Yy={I:this},0);this.__proto__=C.XR;this.BT.H(Bsx);this.Yy.H(AHO);
this.Yy.L(A.jb.Text);this.J(this.Yy,0);this.Hs.Aw(A.aaL(A.ach.Avy));this.Yy.Aw(A.
aaL(A.ach.ADr));},_Done:function(){this.__proto__=C.IB;this.Yy._Done();C.IB._Done.
call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.Yy._ReInit();},_Mark:
function(D){var B;C.IB._Mark.call(this,D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaU={Ka:0,XT:null,K9:0
,Bk:function(aSize){C.IB.Bk.call(this,aSize);this.XT.H(this.Hs.M);},Ai:function(
Ae){C.IB.Ai.call(this,Ae);this.XT.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj6(this.K9)){this.T(A.aaR(A.acf.AnimalLoss));this.Hs.Z(false);this.XT.Z(true);
}else if(this.Ka>0){this.T(A._GetAutoObject(A.Device.Converter).Rf(this.Ka));this.
Hs.Z(true);this.XT.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hs.Z(true);this.
XT.Z(false);}},Ce:function(G){C.IB.Ce.call(this,G);this.Ka=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IB._Init.call(this,aArg);A.acg.Text._Init.call(this.XT={
I:this},0);this.__proto__=C.AaU;this.XT.R(Baj);this.J(this.XT,0);this.Hs.Aw(A.aaL(
A.ach.AvD));this.XT.S(A.aaL(A.fl.Hr));},_Done:function(){this.__proto__=C.IB;this.
XT._Done();C.IB._Done.call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.
XT._ReInit();},_Mark:function(D){var B;C.IB._Mark.call(this,D);if((B=this.XT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMr={XV:null,Init:function(aArg){var B;A.zX([this,this.AAy],[B=A._GetAutoObject(
A.Device.Device),B.AEs,B.AIJ],0);A.pe([this,this.AAy],this);},DE:function(G){var
D4=(A.Core.BN.isPrototypeOf(G)?G:null);switch(D4.CO){case 6:this.Om(this);break;
case 7:this.MU(this);break;default:D4.NH=true;}},CF:function(G){var B;this.XV.CF(
this);C.AB.CF.call(this,G);},E3:function(G){var B;this.XV.E3(this);C.AB.E3.call(
this,G);},Anp:function(G){A._GetAutoObject(C.A$).Fv();},XB:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MU:function(G){if(A._GetAutoObject(A.Device.
Device).An.Ca()<=1)return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;
if(LC>=A._GetAutoObject(A.Device.Device).An.Ca())LC=0;A._GetAutoObject(A.Device.
Helper).HL(LC);},Om:function(G){if(A._GetAutoObject(A.Device.Device).An.Ca()<=1)
return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(
A.Device.Device).An.Ca()-1;A._GetAutoObject(A.Device.Helper).HL(LC);},AAy:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqq)A._GetAutoObject(C.A$).Ahp(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XV._Init.call(this.XV={I:this},0);this.
__proto__=C.AMr;this.Background.H(Cc);this.N.Z(true);this.N.OO(true);this.N.OP(true
);this.Dq(C.APn);this.XV.H(E$);this.J(this.XV,0);this.N.CB=[this,this.Anp];this.
N.Ck=[this,this.XB];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbC));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XV._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XV._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IB={Hs:null,BT:null
,T:function(E){C.IZ.T.call(this,E);this.BT.R(this.DK);},De:function(E){C.IZ.De.call(
this,E);this.Hs.L(E);this.BT.L(E);},_Init:function(aArg){C.IZ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hs={I:this},0);C.CH._Init.call(this.BT={I:this},0);this.
__proto__=C.IB;this.Hs.H(Bsy);this.Hs.L(A.jb.Text);this.BT.H(Bsz);this.BT.A6(0x11
);this.BT.L(A.jb.Text);this.J(this.Hs,0);this.J(this.BT,0);this.Hs.Aw(A.aaL(A.aci.
TJ));this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.IZ;this.Hs._Done();this.BT._Done();C.IZ._Done.call(this);},_ReInit:function(
){C.IZ._ReInit.call(this);this.Hs._ReInit();this.BT._ReInit();this.BT.S(A.aaL(A.
fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IZ._Mark.call(this
,D);if((B=this.Hs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.IZ={Background:null
,KT:0,Hf:false,CP:function(){this.Ce(this);},Init:function(aArg){var B;A.zX([this
,this.Bbn],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0);A.pe([this,
this.Bbn],this);},Bk:function(aSize){C.Hc.Bk.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hc.Ai.call(this,Ae);if(this.
Hf)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CK);},Ce:function(G){}
,Bbn:function(s){this.Ce(s);},Bg:function(E){if(this.Hf===E)return;this.Hf=E;this.
Am();},De:function(E){if(this.KT===E)return;this.KT=E;},_Init:function(aArg){C.Hc.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.IZ;this.H(BF);this.Background.H(AIl);this.KT=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hc;this.Background._Done(
);C.Hc._Done.call(this);},_ReInit:function(){C.Hc._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NE={GX:null,BAQ:function(G){this.BT.H(A.abN(this.BT.M,this.GX.M[0]));},_Init:
function(aArg){C.Fu._Init.call(this,aArg);A.acg.Text._Init.call(this.GX={I:this}
,0);this.__proto__=C.NE;this.GX.AZ(0xA);this.GX.H(BsA);this.GX.Hh(5);this.GX.I7(
true);this.GX.A6(0x14);this.GX.R(A.jV);this.GX.L(A.jb.Text);this.J(this.GX,0);this.
GX.Q1([this,this.BAQ]);this.GX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fu;this.GX._Done();C.Fu._Done.call(this);},_ReInit:function(){C.Fu._ReInit.call(
this);this.GX._ReInit();this.GX.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fu.
_Mark.call(this,D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axh={AQZ:null,_Init:function(aArg){C.Zy._Init.call(this,aArg);this.__proto__=
C.Axh;},_Mark:function(D){var B;C.Zy._Mark.call(this,D);if((B=this.AQZ)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANy={Ws:null,WO:0,AwJ:function(E){C.AmF.AwJ.call(this,E);if(E)this.Pm.R(BsB);
else this.Pm.R(Bal);},BmU:function(E){if(A.aaZ(this.Ws,E))return;if(!!this.Ws)A.
z$([this,this.A3b],this.Ws,0);this.Ws=E;if(!!E)A.zX([this,this.A3b],E,0);if(!!E)
A.pe([this,this.A3b],this);},AFH:function(E){var F;if(this.WO===E)return;this.WO=
E;this.AwJ(!!this.Ws&&((F=this.Ws,F[1].call(F[0]))===E));},A3b:function(G){var F;
this.AwJ(!!this.Ws&&((F=this.Ws,F[1].call(F[0]))===this.WO));},_Init:function(aArg
){C.AmF._Init.call(this,aArg);this.__proto__=C.ANy;this.Pm.R(Bal);this.Pm.S(A.aaL(
A.fl.Hr));},_Mark:function(D){var B;C.AmF._Mark.call(this,D);if((B=this.Ws)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axj={Ws:null,WO:0,_Init:function(aArg){C.Zy._Init.call(this,aArg);this.__proto__=
C.Axj;},_Mark:function(D){var B;C.Zy._Mark.call(this,D);if((B=this.Ws)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATU={GL:null,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.Q9._Init.call(
this.GL={I:this},0);this.__proto__=C.ATU;var B;this.I8(A.aaR(A.acf.ACE));this.GL.
H(AhV);this.GL.Aj(true);this.GL.Z(true);this.GL.T(A.aaR(A.acf.AF9));this.GL.Ar0(
false);this.GL.A_b(true);this.J(this.GL,0);this.GL.AeT([B=this.GL,B.FQ]);this.GL.
Gn([this,this.D_,this.GN]);this.GL.Akz(A.aaL(A.ach.Edit));this.GL.As([B=A._GetAutoObject(
A.Device.Device),B.ASw,B.AZ9]);},_Done:function(){this.__proto__=C.Cd;this.GL._Done(
);C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.GL._ReInit(
);this.I8(A.aaR(A.acf.ACE));this.GL.T(A.aaR(A.acf.AF9));},_Mark:function(D){var B;
C.Cd._Mark.call(this,D);if((B=this.GL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATS={GF:0,C7:null,AW:null,Kn:null,E7:null
,GermanStateToString:null,CountryToString:null,Pt:0,K$:0,L9:false,Init:function(
aArg){A.zX([this,this.MG],[this,this.Sw,this.Lo],0);A.zX([this,this.MG],[this,this.
Ans,this.Ahk],0);},Ai:function(Ae){C.Ek.Ai.call(this,Ae);this.AW.FI(this.LS);this.
Kn.FI(this.LS);this.E7.CT(this.LS);},DJ:function(G){var F;if(!this.N)return;switch(
this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=
this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[
1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[
0])).CV(this.CountryToString.BI(this.K$));(F=this.N,F[1].call(F[0])).Cl=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0]
)).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(
F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.Gu
)+Ax8)+this.GermanStateToString.Lt(A._GetAutoObject(A.Device.Converter).ACP(this.
Pt)));(F=this.N,F[1].call(F[0])).Cl=null;}break;default:{(F=this.N,F[1].call(F[0
])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(
F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(
F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(
null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}}
,Ew:function(EO){var Tk=this.A8;if(EO<0)EO=0;else if(EO>this.RD)EO=this.RD;switch(
EO){case 0:{this.Bb(null);if(!this.GF&&!this.Pt)this.Lo(0);}break;case 1:this.Bb(
this.E7);break;case 2:this.Bb(this.Kn);break;case 3:if(((Tk===2)&&!this.Pt)&&!this.
GF)return;else{this.Bb(this.AW);if(!this.GF||(Tk>0))this.AW.SI(2);else this.AW.SI(
7);}break;default:throw new Error(Atf+EO.toFixed());}this.A8=EO;C.Ek.Ew.call(this
,EO);},By:function(E){if(this.AM===E)return;this.AM=E;this.L9=true;this.Sx(A._GetAutoObject(
A.Device.Helper).Sd(E,0,10));this.Ahk(A._GetAutoObject(A.Device.Helper).Sd(E,10,
2)|0);this.Lo(A._GetAutoObject(A.Device.Converter).ZY(E));this.L9=false;if(!!this.
AM){this.Kn.Kq(2);this.AW.Kq(10);}else{this.Kn.Kq(0);this.AW.Kq(0);}this.Am();},
FQ:function(G){var F;if(!this.AM){var BR=this.AM;this.By(A._GetAutoObject(A.Device.
Helper).AC0());if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ew(2);}else this.Ew(this.RD);},AjN:function(){return this.GF;
},AjP:function(){return 9999999999;},Lo:function(E){if(this.K$===E)return;this.K$=
E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Sw,this.Lo],0);}
,Sx:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this,this.
Vj],this);A.abo([this,this.AbZ,this.Sx],0);},Vj:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abl(this.Pt,2,10))+
A.abm(this.GF,10,10);var BR=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BR
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahk:function(
E){if(this.Pt===E)return;this.Pt=E;if(this.L9===false)A.pe([this,this.Vj],this);
A.abo([this,this.Ans,this.Ahk],0);},Sw:function(){return this.K$;},AbZ:function(
){return this.GF;},Ans:function(){return this.Pt;},_Init:function(aArg){C.Ek._Init.
call(this,aArg);C.C7._Init.call(this.C7={I:this},0);C.AQT._Init.call(this.AW={I:
this},0);C.AvN._Init.call(this.Kn={I:this},0);C.AsF._Init.call(this.E7={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATS;var B;this.RD=3;this.AW.H(BsC);this.Kn.H(BsD);this.Kn.EV(16);this.E7.H(Bam
);this.J(this.AW,0);this.J(this.Kn,0);this.J(this.E7,0);this.C7.AEY([this,this.Sw
,this.Lo]);this.AW.As([this,this.AbZ,this.Sx]);this.Kn.As([this,this.Ans,this.Ahk
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
};C.AQT={NK:null,NJ:null,ET:null,FV:null,Eo:null,Dx:null,CU:null,Ct:null,FI:function(
E){if(this.M5===E)return;C.Lg.FI.call(this,E);this.Ct.CT(E);this.CU.CT(E);this.Dx.
CT(E);this.Eo.CT(E);this.FV.CT(E);this.ET.CT(E);this.NJ.CT(E);this.NK.CT(E);},Yr:
function(Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.
Ct;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Eo;break;
case 5:B5=this.FV;break;case 6:B5=this.ET;break;case 7:B5=this.NJ;break;case 8:B5=
this.NK;break;case 9:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;},_Init:
function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(this.NK={I:this},0);C.
DF._Init.call(this.NJ={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FV={I:this},0);C.DF._Init.call(this.Eo={I:this},0);C.DF._Init.call(this.
Dx={I:this},0);C.DF._Init.call(this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.AQT;this.H(BsE);this.GW.H(AIA);this.NK.H(Ayy);this.NJ.H(AZI
);this.ET.H(AZJ);this.FV.H(AZK);this.Eo.H(AZL);this.Dx.H(AZM);this.CU.H(AZN);this.
Ct.H(A$8);this.FW.H(AZO);this.EN.H(AZO);this.J(this.NK,-2);this.J(this.NJ,-2);this.
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
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATT={
GF:0,C7:null,AW:null,E7:null,CountryToString:null,K$:0,L9:false,Init:function(aArg
){A.zX([this,this.MG],[this,this.Sw,this.Lo],0);},Ai:function(Ae){C.Ek.Ai.call(this
,Ae);this.AW.FI(this.LS);this.E7.CT(this.LS);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.
G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(
F[0])).CV(this.CountryToString.BI(this.K$));(F=this.N,F[1].call(F[0])).Cl=null;}
break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(
F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=
null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EO){var Tk=this.A8;if(EO<0)EO=0;
else if(EO>this.RD)EO=this.RD;switch(EO){case 0:{this.Bb(null);if(!this.GF)this.
Lo(0);}break;case 1:this.Bb(this.E7);break;case 2:{this.Bb(this.AW);if(!this.GF||(
Tk>0))this.AW.SI(2);else this.AW.SI(7);}break;default:throw new Error(Atf+EO.toFixed(
));}this.A8=EO;C.Ek.Ew.call(this,EO);},By:function(E){if(this.AM===E)return;this.
AM=E;this.L9=true;this.Sx(A._GetAutoObject(A.Device.Helper).Sd(E,0,12));this.Lo(
A._GetAutoObject(A.Device.Converter).ZY(E));this.L9=false;if(!!this.AM)this.AW.Kq(
12);else this.AW.Kq(0);this.Am();},FQ:function(G){var F;if(!this.AM){var BR=this.
AM;this.By(A._GetAutoObject(A.Device.Helper).AC0());if(this.AM!==BR){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(this.RD);},AjN:function(
){return this.GF;},AjP:function(){return 999999999999;},Lo:function(E){if(this.K$===
E)return;this.K$=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.
Sw,this.Lo],0);},Sx:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false
)A.pe([this,this.Vj],this);A.abo([this,this.AbZ,this.Sx],0);},Vj:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abm(
this.GF,12,10);var BR=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BR){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Sw:function(){return this.
K$;},AbZ:function(){return this.GF;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C7._Init.call(this.C7={I:this},0);C.ADJ._Init.call(this.AW={I:this},0);C.AsF.
_Init.call(this.E7={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATT;var B;this.RD=2;this.AW.H(BsF);this.E7.H(Bam);this.
J(this.AW,0);this.J(this.E7,0);this.C7.AEY([this,this.Sw,this.Lo]);this.AW.As([this
,this.AbZ,this.Sx]);this.E7.CI(this.C7);this.E7.As([B=this.C7,B.B7,B.B8]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ek;this.C7._Done();this.AW._Done();this.
E7._Done();this.CountryToString._Done();C.Ek._Done.call(this);},_ReInit:function(
){C.Ek._ReInit.call(this);this.C7._ReInit();this.AW._ReInit();this.E7._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,X$:null,Ya:null,X_:null,X8:null,X9:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},CF:function(G){C.AB.CF.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bl(null);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(
A.Device.Helper).AkO();A._GetAutoObject(A.Device.Helper).Asn();},If:function(G){
var Cx=(C.Fi.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.X$)A._GetAutoObject(
C.A$).Cg(28);else if(Cx===this.Ya)A._GetAutoObject(C.A$).Cg(26);else if(Cx===this.
X_)A._GetAutoObject(C.A$).Cg(54);else if(Cx===this.X8)A._GetAutoObject(C.A$).Cg(
27);else if(Cx===this.X9)A._GetAutoObject(C.A$).Cg(78);},A3f:function(G){A._GetAutoObject(
C.A$).Fv();},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.
Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fi._Init.call(this.X$={I:this
},0);C.Fi._Init.call(this.Ya={I:this},0);C.Fi._Init.call(this.X_={I:this},0);C.Fi.
_Init.call(this.X8={I:this},0);C.Fi._Init.call(this.X9={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Ej.Ar(false
);this.Dq(C.AqZ);this.DY.AZ(0x3F);this.DY.H(E$);this.DY.L(A.jb.CK);this.Y.H(E$);
this.Y.JP(9);this.Ay.H(Ir);this.X$.H(P3);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.
A7G));this.Ya.H(AZU);this.Ya.Aj(true);this.Ya.T(A.aaR(A.acf.NewAnimals));this.X_.
H(N_);this.X_.Aj(true);this.X_.T(A.aaR(A.acf.Calving));this.X8.H(P4);this.X8.Aj(
true);this.X8.T(A.aaR(A.acf.ABW));this.X9.H(MF);this.X9.Aj(true);this.X9.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
X$,0);this.J(this.Ya,0);this.J(this.X_,0);this.J(this.X8,0);this.J(this.X9,0);this.
N.CB=[this,this.A3f];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fe];this.X$.
AR=[this,this.If];this.X$.DB(A.aaL(A.ach.ADE));this.Ya.AR=[this,this.If];this.Ya.
DB(A.aaL(A.ach.AvH));this.X_.AR=[this,this.If];this.X_.DB(A.aaL(A.ach.APY));this.
X8.AR=[this,this.If];this.X8.DB(A.aaL(A.ach.APV));this.X9.AR=[this,this.If];this.
X9.DB(A.aaL(A.ach.APO));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.X$._Done();this.Ya._Done();this.X_._Done();this.X8.
_Done();this.X9._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.X$._ReInit(
);this.Ya._ReInit();this.X_._ReInit();this.X8._ReInit();this.X9._ReInit();this.X$.
T(A.aaR(A.acf.A7G));this.Ya.T(A.aaR(A.acf.NewAnimals));this.X_.T(A.aaR(A.acf.Calving
));this.X8.T(A.aaR(A.acf.ABW));this.X9.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARO={K4:null,EaseOfDelivery:null,BirthType:null,AcK:null
,Lk:null,Cn:null,G1:null,Li:null,AzK:true,Init:function(aArg){this.Bb(this.C$);A.
pe([this,this.GE],this);},Ev:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.Hi();A._GetAutoObject(C.A$).Fv();if(!!this.K4)this.K4.Ev(this);},Af$:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EB((F=this.BZ.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwK(true);if(!!this.K4)this.K4.Af$(this
);if(A._GetAutoObject(A.Device.Device).An.Lh())A._GetAutoObject(A.Device.Helper).
AKf(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApG]);else{this.AiZ();A.
pe([this,this.Ap5],this);}},Aug:function(){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.
ADI));this.N.Cl=[this,this.AyP];},CF:function(G){var B;C.HY.CF.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lh()){A._GetAutoObject(A.Device.Device).A9(41
,true,A._GetAutoObject(A.Device.Device).An.HG().toFixed(),0,null);this.Ev(this);
}else if(this.AzK){this.AzK=false;A.pe([this,this.A3u],this);}else if(!this.K4){
this.K4=A._NewObject(C.ARP,0);this.K4.A9I([this,this.AAV]);A._GetAutoObject(A.Device.
Helper).W.Gm();A._GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Ng(this.AsQ.Aeh(6));this.K4.LO(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ev(this);}},AiZ:function(
){A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).An);var
L6=A._GetAutoObject(A.Device.Device).An.Lc(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SJ(L6);if(A._GetAutoObject(A.Device.Helper
).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.
Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A6M(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap5:function(G){var B;if(!!this.K4)this.K4.Ap5(this);},GE:function(G){if(
A._GetAutoObject(A.Device.Helper).Am6())this.C9.Z(true);else this.C9.Z(false);},
ApG:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;
switch(At.Id){case 41:break;default:A.ab5("%s%e",As7,At.Id);}},AAV:function(G){this.
LO(this);this.AeV(A._GetAutoObject(A.Device.Helper).Abq(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JD(this.C$);},ApH:function(G){var F;C.HY.ApH.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnZ));},A3u:function(G){A._GetAutoObject(
C.A$).Cg(79);},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcK._Init.call(this.AcK={I:this},0);C.Q9._Init.call(this.Lk={I:this
},0);C.SL._Init.call(this.Cn={I:this},0);C.BW._Init.call(this.G1={I:this},0);C.BW.
_Init.call(this.Li={I:this},0);this.__proto__=C.ARO;var B;this.Dq(C.APk);this.Lk.
H(AhV);this.Lk.Aj(true);this.Lk.T(A.aaR(A.acf.ACk));this.CG.H(AcQ);this.Cn.H(AcQ
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aec));this.Cn.AFy(true);this.G1.H(AcQ);
this.G1.Aj(true);this.G1.T(A.aaR(A.acf.Arn));this.Li.H(AcQ);this.Li.Aj(true);this.
Li.T(A.aaR(A.acf.AgC));this.J(this.Lk,-5);this.J(this.Cn,-3);this.J(this.G1,-1);
this.J(this.Li,-1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.AcK.LY(A._GetAutoObject(A.
Device.Helper).W);this.Lk.Gn([this,this.D_,this.GN]);this.Lk.As([B=A._GetAutoObject(
A.Device.Helper).W,B.ASs,B.AnG]);this.Cn.Gn([this,this.D_,this.GN]);this.Cn.LX([
B=this.Cn,B.FQ]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab8([B=A._GetAutoObject(A.
Device.Helper).W,B.Av_,B.Q0]);this.Gi.As([B=this.AcK,B.B7,B.B8]);this.Gi.CI(this.
AcK);this.G1.As([B=this.BirthType,B.B7,B.B8]);this.G1.CI(this.BirthType);this.Li.
As([B=this.EaseOfDelivery,B.B7,B.B8]);this.Li.CI(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcK._Done();this.Lk._Done();this.Cn._Done();this.G1._Done();this.Li.
_Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcK._ReInit();this.Lk._ReInit(
);this.Cn._ReInit();this.G1._ReInit();this.Li._ReInit();this.Lk.T(A.aaR(A.acf.ACk
));this.Cn.T(A.aaR(A.acf.Aec));this.G1.T(A.aaR(A.acf.Arn));this.Li.T(A.aaR(A.acf.
AgC));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.K4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMt={Init:function(aArg){var B;A.zX([this,this.Bgs],[B=A._GetAutoObject(A.Device.
Device),B.AEz,B.AIO],0);A.pe([this,this.Bgs],this);},AKM:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbV){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACR();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOE();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mo();break;default:throw new Error(AZX+A.
_GetAutoObject(A.Device.Device).AbV.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bl(Be);},Bgs:function(G){switch(A._GetAutoObject(A.Device.Device).AbV){case
0:this.Dz(A.aaR(A.acf.ARU));break;case 1:this.Dz(A.aaR(A.acf.BjW));break;case 2:
this.Dz(A.aaR(A.acf.Av2));break;default:A.ab5("%s",AZX+A._GetAutoObject(A.Device.
Device).AbV.toFixed());}},_Init:function(aArg){C.Amu._Init.call(this,aArg);this.
__proto__=C.AMt;this.BmM(C.APA);this.Ej.Ab4(A._NewObject(C.APp,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ARP={AAg:0,Adh:null
,AuV:null,BdV:0,A3H:0,A2A:0,Init:function(aArg){this.BdV=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adh=A._GetAutoObject(A.Device.Device).An.Filter;this.AAg=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2A=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LO:function(G){A._GetAutoObject(A.Device.Helper).W.AnG(this.AAg);A._GetAutoObject(
A.Device.Helper).W.Ae2(true);switch(this.A2A){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EB(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EB(2);break;default:
A.ab5("%s%e",AZF,this.A2A);}},Ev:function(G){A._GetAutoObject(A.Device.Device).An.
Bl(this.Adh);if(!!this.A3H)this.Bgu();},Af$:function(G){A._GetAutoObject(A.Device.
Device).An.Bl(null);},Bgu:function(){var AtV=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.Lc(0,this.BdV);AtV.EM(Ad,A._GetAutoObject(
A.Device.Device).An);AtV.Aww(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);AtV.
ArT(false);AtV.AwL(AtV.LactationNumber+1);AtV.Cq(A._GetAutoObject(A.Device.Device
).An);},Ap5:function(G){this.A3H++;var Bx2=A._GetAutoObject(A.Device.Converter).
Bhe(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3H<Bx2)&&(A._GetAutoObject(
A.Device.Helper).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A9(59,true,A.jV,0,[this,this.Ve]);else this.BcT(
this);},Ve:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&(At.PopupState===8))this.BcT(this);else if(!!At&&(At.PopupState===7))this.
AAV(this);},AAV:function(G){var B;var H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfR=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Td=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJU=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuV)(B=this.AuV
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EB(H$);A._GetAutoObject(
A.Device.Helper).W.Akv(AfR);A._GetAutoObject(A.Device.Helper).W.NY(Bv);A._GetAutoObject(
A.Device.Helper).W.Q0(Td);A._GetAutoObject(A.Device.Helper).W.Akx(AJU);},BcT:function(
G){this.Bgu();A._GetAutoObject(C.A$).Fv();A._GetAutoObject(A.Device.Device).An.Bl(
this.Adh);},A9I:function(E){if(A.aa0(this.AuV,E))return;this.AuV=E;},_Init:function(
aArg){this.__proto__=C.ARP;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adh)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMJ={Init:function(aArg){
var B;A.zX([this,this.Beg],[B=A._GetAutoObject(A.Device.Device),B.ASb,B.AZY],0);
this.Beg(this);},Cq:function(){A.ab5("%s",BsG);},EM:function(AcU){C.Vs.EM.call(this
,AcU);var O;for(O=16;O>0;O--)this.H_.Set(O,this.H_.Get(O-1));this.H_.Set(0,0);if(
this.CD<17)this.CD++;else A.ab5("%s",BsH);},ADN:function(ED){switch(ED){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Beg:
function(G){this.EM(A._GetAutoObject(A.Device.Device).Auz);A.we(this,0);},_Init:
function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.AMJ;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuN={_Init:function(){C.
AMJ._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JG={C5:null,V:null,A7z:true,T:function(E){C.IZ.T.call(this,E);this.
V.R(E);},De:function(E){C.IZ.De.call(this,E);this.V.L(E);},BmR:function(E){if(this.
A7z===E)return;this.A7z=E;this.C5.Z(E);},_Init:function(aArg){C.IZ._Init.call(this
,aArg);A.acg.C5._Init.call(this.C5={I:this},0);C.CH._Init.call(this.V={I:this},0
);this.__proto__=C.JG;this.C5.DC(BsI);this.C5.DL(BsJ);this.C5.L(A.jb.Bc);this.V.
AZ(0x3F);this.V.H(BsK);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C5,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ij));this.V.Cu(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.IZ;this.C5._Done();this.V._Done();C.
IZ._Done.call(this);},_ReInit:function(){C.IZ._ReInit.call(this);this.C5._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ij));this.V.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.IZ._Mark.call(this,D);if((B=this.C5).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APp={AgP:null,Dd:null,Abo:null,Fh:null,E8:
null,Init:function(aArg){var B;A.zX([this,this.A4i],[B=A._GetAutoObject(A.Device.
Device),B.AEz,B.AIO],0);A.pe([this,this.A4i],this);},De:function(E){C.Yu.De.call(
this,E);this.Dd.L(E);},AEF:function(G){A.pe([this,this.A4i],this);},AAX:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).Fg();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DQ(1,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bl(Filter);}},C2:function(G){var B;var F;C.Yu.C2.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Dd.Aw(A.aaL(A.ach.AjV));return;}var ByJ=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DQ(38,0)
)?B:null);var Bbw=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DQ(14,0))?B:null);if(!!ByJ)this.Dd.Aw(A.aaL(A.ach.AC6));else if(
!!Bbw&&(Bbw.A4===1))this.Dd.Aw(A.aaL(A.ach.AP0));else this.Dd.Aw(A.aaL(A.ach.AjV
));},A4i:function(G){var F;var Filter=null;var AOs;switch(A._GetAutoObject(A.Device.
Device).AbV){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACR();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOE();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mo();break;default:throw new Error(AZX+A._GetAutoObject(A.Device.
Device).AbV.toFixed());}var Ai3=this.Akp();if(Ai3>0){AOs=A._NewObject(A.Device.Int32FilterCriterion
,0);AOs.Initialize(1,4,Ai3,false);Filter.CW(AOs);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeW(false);},Om:function(G){if(!this.Akp())this.AW.AeW(true
);this.Bb(this.AW);this.Am();},MU:function(G){this.AW.AeW(false);this.Bb(this.AgP
);this.Am();},_Init:function(aArg){C.Yu._Init.call(this,aArg);C.Aq_._Init.call(this.
AgP={I:this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);C.Abo._Init.call(this.Abo={
I:this},0);A.Core.BN._Init.call(this.Fh={I:this},0);A.Core.BN._Init.call(this.E8={
I:this},0);this.__proto__=C.APp;var B;this.H(BsL);this.AW.H(BsM);this.T1.H(BsN);
this.Gr.Z(false);this.AgP.H(BsO);this.Dd.H(BsP);this.Abo.As(A._GetAutoObject(A.Device.
Device).AbV);this.Fh.Filter=6;this.E8.Filter=7;this.JV(this.A_,-1);this.J(this.AgP
,-1);this.J(this.Dd,-1);this.AgP.CI(this.Abo);this.AgP.As([B=this.Abo,B.B7,B.B8]
);this.Dd.Aw(A.aaL(A.ach.AjV));this.Fh.BO=[this,this.Om];this.E8.BO=[this,this.MU
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yu;this.AgP._Done();this.Dd.
_Done();this.Abo._Done();this.Fh._Done();this.E8._Done();C.Yu._Done.call(this);}
,_ReInit:function(){C.Yu._ReInit.call(this);this.AgP._ReInit();this.Dd._ReInit();
this.Abo._ReInit();this.Fh._ReInit();this.E8._ReInit();},_Mark:function(D){var B;
C.Yu._Mark.call(this,D);if((B=this.AgP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abo)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abo={AeQ:null
,Init:function(aArg){var B;A.zX([this,this.BdX],[B=A._GetAutoObject(A.Device.Device
),B.AEz,B.AIO],0);A.pe([this,this.BdX],this);},Do:function(){return 3;},As:function(
E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.Device).AwS(E);},ACQ:function(
aIndex){if((aIndex<0)||(aIndex>=this.Do()))return null;return this.AeQ.AsG(aIndex
);},ACS:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return-1;return this.
AeQ.AsH(aIndex);},BdX:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbV;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeQ._Init.call(this.AeQ={I:this},0);this.__proto__=C.Abo;this.Cf.Set(0,
0);this.Cf.Set(1,1);this.Cf.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeQ._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeQ._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APA={Eq:null,IK:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.Eq={I:this},0);A.acg.Text._Init.call(this.IK={I:this},0);this.__proto__=
C.APA;this.H(O3);this.Background.H(O3);this.Eq.H(Ays);this.Eq.R(A.aaR(A.acf.A6S)
);this.Eq.A6(0x12);this.Eq.L(A.jb.Text);this.IK.AZ(0x3F);this.IK.H(AIm);this.IK.
Hh(5);this.IK.A6(0x14);this.IK.R(A.aaR(A.acf.AGM));this.IK.L(A.jb.Text);this.J(this.
Eq,0);this.J(this.IK,0);this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.Ij));this.
Eq.Cu(A.aaL(A.fl.Bh));this.IK.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EA;this.Eq._Done();this.IK._Done();C.EA._Done.call(this);},_ReInit:function(){
C.EA._ReInit.call(this);this.Eq._ReInit();this.IK._ReInit();this.Eq.R(A.aaR(A.acf.
A6S));this.IK.R(A.aaR(A.acf.AGM));this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.
Ij));this.Eq.Cu(A.aaL(A.fl.Bh));this.IK.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EA._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={JY:null,Bf3:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.BeH(this);else A._GetAutoObject(A.Device.Device).A9(63,true,A.
jV,0,[this,this.Ve]);},BeH:function(G){A._GetAutoObject(C.A$).Fv();},Ve:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!At&&(At.Id===63)
)&&(At.PopupState===7))this.BeH(this);},_Init:function(aArg){C.Me._Init.call(this
,aArg);A.acg.Text._Init.call(this.JY={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dq(C.APo);this.Jc.H(BsQ);this.Jc.AkF(2);this.Acz.Z(false);this.ARu=12;this.
Number.H(BsR);this.Number.R(A.aaR(A.acf.A_9));this.A4P=false;this.JY.H(BsS);this.
JY.Hh(5);this.JY.KS(true);this.JY.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABC));this.JY.L(A.jb.Text);this.JV(this.Jc,-1);this.JV(this.IP,-1);this.
JV(this.Acz,-1);this.J(this.JY,0);this.JY.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Me;this.JY._Done();C.Me._Done.call(this);},_ReInit:function(){C.Me._ReInit.
call(this);this.JY._ReInit();this.Number.R(A.aaR(A.acf.A_9));this.JY.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABC));this.JY.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Me._Mark.call(this,D);if((B=this.JY)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APo={_Init:function(aArg){C.AqY.
_Init.call(this,aArg);this.__proto__=C.APo;this.DS.EB(1);},_className:"Application::HeaderScannedCowId"
};C.Jc={AbM:null,AbL:null,AbK:null,QB:null,CountryToString:null,AsJ:0,CP:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QB.R(this.CountryToString.
Lt(A._GetAutoObject(A.Device.Converter).A7e(A._GetAutoObject(A.Device.Device).Language
))+BsT);},AkF:function(E){if(this.AsJ===E)return;this.AsJ=E;var bitmap=null;var A1I=
BsU;var A1H=null;var A1J=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aq9);break;case
1:{bitmap=A.aaL(A.ach.AQA);A1I=BsV;A1H=A.aaL(A.fl.Ak);A1J=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQB);A1I=BsW;A1H=A.aaL(A.fl.Bh);A1J=true;}break;default:throw new Error(
BsX+E.toFixed());}this.AbK.Aw(bitmap);this.AbL.Aw(bitmap);this.AbM.Aw(bitmap);this.
QB.H(A.abJ(this.QB.M,A1I));this.QB.S(A1H);this.QB.Z(A1J);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbM={I:this},0);A.acg.Ap._Init.call(this.AbL={I:this},0);A.acg.Ap._Init.
call(this.AbK={I:this},0);A.acg.Text._Init.call(this.QB={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jc;this.H(AID);this.
AbM.AZ(0x3);this.AbM.H(AID);this.AbM.L(A.jb.H6);this.AbM.Cv(2);this.AbL.AZ(0x3);
this.AbL.H(AID);this.AbL.L(A.jb.Ad9);this.AbL.Cv(1);this.AbK.AZ(0x3);this.AbK.H(
AID);this.AbK.L(A.jb.Text);this.AbK.Cv(0);this.QB.AZ(0x14);this.QB.H(BsY);this.QB.
L(0xFF020202);this.QB.Z(false);this.J(this.AbM,0);this.J(this.AbL,0);this.J(this.
AbK,0);this.J(this.QB,0);this.AbM.Aw(A.aaL(A.ach.Aq9));this.AbL.Aw(A.aaL(A.ach.Aq9
));this.AbK.Aw(A.aaL(A.ach.Aq9));this.QB.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbM._Done();this.AbL._Done();this.AbK._Done();this.QB._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbM._ReInit();this.AbL._ReInit();this.AbK._ReInit(
);this.QB._ReInit();this.CountryToString._ReInit();this.QB.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsJ={Transponder:0,BFK:1,BFL:2};C.APk={Ap:null,De:function(E){C.BS.De.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BS._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APk;this.Ap.H(AZG);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.APb));},_Done:function(){this.__proto__=C.BS;this.Ap._Done();C.
BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ig:0,AaG:4,Al3:function(G){C.Q8.Al3.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bdt()){this.Ig=A._GetAutoObject(A.Device.Helper).Uw.Id;var Aiv=A._GetAutoObject(
A.Device.Helper).A7c(this.Ig,A._GetAutoObject(A.Device.Helper).W);if(Aiv){A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(this.Ig),0,[
this,this.Ve]);return;}Aiv=A._GetAutoObject(A.Device.Helper).Bjl(this.Ig,A._GetAutoObject(
A.Device.Helper).W);if(Aiv&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ig)){A._GetAutoObject(A.Device.Device).A9(25,true,A._GetAutoObject(A.Device.
Converter).Rf(this.Ig),0,[this,this.Ve]);return;}this.AaG=A._GetAutoObject(A.Device.
Helper).AQ6(this.Ig);switch(this.AaG){case 0:A._GetAutoObject(A.Device.Device).A9(
45,true,this.Ig.toFixed().length.toFixed(),0,[this,this.Ve]);break;case 1:case 2:{
var BP=A._GetAutoObject(A.Device.Converter).AxN(this.Ig);A._GetAutoObject(A.Device.
Device).A9(46,true,BP.toFixed(),0,[this,this.Ve]);}break;case 3:this.BfV();break;
default:throw new Error(AIa+this.AaG.toFixed());}}},Ev:function(G){A._GetAutoObject(
C.A$).Fv();},Ve:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!At)switch(At.PopupState){case 4:if(this.AaG===2)this.BfV();else A._GetAutoObject(
A.Device.Device).AhE();break;case 5:this.Ev(this);break;default:;}},BfV:function(
){A._GetAutoObject(A.Device.Helper).W.Ne(this.Ig);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.Q2(this.Ig);A._GetAutoObject(
A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).A9(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ev(this);},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dq(C.IG);this.Number.R(A.aaR(A.acf.A_2
));this.Jc.H(BsZ);this.IP.H(Bs0);this.AkF(1);this.N.CB=[this,this.Ev];this.N.CY(
A.aaL(A.ach.E2));},_ReInit:function(){C.Q8._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_2));},_className:"Application::SetSaveNaisIdScreen"};C.ANY={LO:function(
G){C.AqH.LO.call(this,G);A.pe([this,this.BBt],this);},BBt:function(G){this.JD(this.
Ef);},_Init:function(aArg){C.AqH._Init.call(this,aArg);this.__proto__=C.ANY;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UL={Animal:null,WhereAboutsToString:
null,FX:function(aIndex){return this.WhereAboutsToString.BI(this.C4(aIndex));},As:
function(E){C.Cm.As.call(this,E);if(!!this.Animal)this.Animal.Ng(E);},A4q:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B7,this.B8],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4q],[B=this.Animal,B.Awk,B.Ng],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4q],[B=this.Animal,B.Awk,B.Ng],0);A.pe([this,this.A4q],this);}
,_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UL;this.Cf.Set(0,1);this.
Cf.Set(1,2);this.Cf.Set(2,3);this.Cf.Set(3,4);this.Cf.Set(4,5);},_Done:function(
){this.__proto__=C.Cm;this.WhereAboutsToString._Done();C.Cm._Done.call(this);},_ReInit:
function(){C.Cm._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UM={Do:function(){return 6;},_Init:function(aArg){C.UL._Init.call(this,aArg);
this.__proto__=C.UM;this.Cf.Set(0,0);this.Cf.Set(1,1);this.Cf.Set(2,2);this.Cf.Set(
3,3);this.Cf.Set(4,4);this.Cf.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcK={Do:function(){return 5;},_Init:function(aArg){C.UL._Init.call(this,aArg
);this.__proto__=C.AcK;this.Cf.Set(0,6);this.Cf.Set(1,7);this.Cf.Set(2,8);this.Cf.
Set(3,9);this.Cf.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdS={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bcd],[B=A._GetAutoObject(A.Device.
Device),B.ASc,B.AZZ],0);A.pe([this,this.Bcd],this);},Do:function(){return 2;},C4:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},FX:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;},As:function(E){
C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Awn(E);},Bcd:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Ags;A.abo([this,this.B7,this.B8],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdS;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGA={FF:null
,Ez:null,EartagNrAssignmentMode:null,Fh:null,E8:null,HC:null,AW:null,Kj:null,M9:
null,A8:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hf){this.AW.FI(A.jb.CK);this.HC.CT(A.jb.CK);this.Background.L(A.
jb.CS);this.V.L(A.jb.Text);}else{this.AW.FI(A.jb.CS);this.HC.CT(A.jb.CS);this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hf){this.AW.FI(A.jb.CK);this.HC.CT(
A.jb.CK);}else{this.AW.FI(A.jb.CS);this.HC.CT(A.jb.CS);}this.Bb(null);}this.M9.L(
this.V.AQ);},IW:function(G){C.Eg.IW.call(this,G);if(!this.A8)this.FQ(this);else this.
G_(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.
N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.
N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(
F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=
null;}break;default:this.FF.AkP((F=this.N,F[1].call(F[0])));}},FQ:function(G){this.
Ew(1);},G_:function(G){this.Ew(0);},Ew:function(EO){var F;if(!this.A8&&!!this.N)
this.FF.Ajy((F=this.N,F[1].call(F[0])));this.A8=EO;if(this.A8<0)this.A8=0;else if(
this.A8>1)this.A8=1;switch(this.A8){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SI(2);else this.AW.SI(7);}break;default:throw new Error(
Atf+this.A8.toFixed());}this.DJ(this);this.Am();},By:function(E){if(this.AM===E)
return;this.AM=E;},Om:function(G){this.AA5(2);},MU:function(G){this.AA5(7);},AA5:
function(Gw){var B;var Azr=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azr){
var AAi=(A.Core.P.isPrototypeOf(B=this.QD(Azr,Gw,0x15))?B:null);if(!!AAi){this.Bb(
AAi);return true;}}return false;},AfY:function(G){var F;if(!this.Ez||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M9.Aw(
A._GetAutoObject(A.Device.Converter).AmT(2));break;case 1:this.M9.Aw(A._GetAutoObject(
A.Device.Converter).AmT((F=this.Ez,F[1].call(F[0]))));break;default:throw new Error(
Ban+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A31],this);},A31:function(G){var B;var F;if(!this.Ez||!this.EartagNrAssignmentMode
){this.Kj.AeY(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Ant,B.AoB]);this.Kj.
AeY([B=A._GetAutoObject(A.Device.Device),B.AEv,B.AIL]);}break;case 1:switch((F=this.
Ez,F[1].call(F[0]))){case 1:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Awb
,B.AyG]);this.Kj.AeY([B=A._GetAutoObject(A.Device.Device),B.ASi,B.AZ1]);}break;case
0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyH]);this.Kj.AeY([B=
A._GetAutoObject(A.Device.Device),B.ASj,B.AZ2]);}break;case 2:{this.AW.As([B=A._GetAutoObject(
A.Device.Device),B.Ant,B.AoB]);this.Kj.AeY([B=A._GetAutoObject(A.Device.Device),
B.AEv,B.AIL]);}break;default:throw new Error(Bs1+(F=this.Ez,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Ban+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Uj:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([
this,this.AfY],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.AfY],this.Ez,0);if(!!
E)A.pe([this,this.AfY],this);},Akw:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfY],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfY],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfY],this);},Ue:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BN._Init.call(this.Fh={I:this},0);A.Core.
BN._Init.call(this.E8={I:this},0);C.Aq_._Init.call(this.HC={I:this},0);C.AvO._Init.
call(this.AW={I:this},0);C.AuZ._Init.call(this.Kj={I:this},0);A.acg.Ap._Init.call(
this.M9={I:this},0);this.__proto__=C.AGA;var B;this.H(UT);this.V.Ar(false);this.
V.R(As9);this.V.L(A.jb.Bm);this.Fh.Filter=6;this.E8.Filter=7;this.HC.H(Bs2);this.
AW.H(Bs3);this.M9.H(Bs4);this.J(this.HC,0);this.J(this.AW,0);this.J(this.M9,0);this.
FF=A._NewObject(C.Aeq,0);this.Fh.BO=[this,this.Om];this.E8.BO=[this,this.MU];this.
HC.CI(this.Kj);this.HC.As([B=this.Kj,B.B7,B.B8]);this.AW.As([this,this.Ue,this.By
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fh._Done();this.E8.
_Done();this.HC._Done();this.AW._Done();this.Kj._Done();this.M9._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fh._ReInit();this.E8.
_ReInit();this.HC._ReInit();this.AW._ReInit();this.Kj._ReInit();this.M9._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FF)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M9)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANN={Wk:
null,Zd:null,Y$:null,T8:null,Init:function(aArg){this.Bb(this.Wk);},AEn:function(
G){var BdT=(C.Anj.isPrototypeOf(G)?G:null);if(!!BdT)A._GetAutoObject(A.Device.Device
).A9(BdT.AdB,true,A.jV,0,null);},DE:function(G){if((this.Cr.CO===7)&&(this.AV===
this.T8))A._GetAutoObject(A.Device.Device).A9(10,true,A.jV,0,null);else if((this.
Cr.CO===6)&&(this.AV===this.T8))A._GetAutoObject(C.A$).Cg(91);C.Ei.DE.call(this,
G);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Anj._Init.call(this.Wk={I:
this},0);C.Anj._Init.call(this.Zd={I:this},0);C.Anj._Init.call(this.Y$={I:this},
0);C.Anj._Init.call(this.T8={I:this},0);this.__proto__=C.ANN;this.Dq(C.AO1);this.
Wk.H(IR);this.Wk.Aj(true);this.Wk.T(A.aaR(A.acf.AhD));this.Wk.Bg(false);this.Wk.
AdB=79;this.Zd.H(P7);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.A$j));this.Zd.Bg(true
);this.Zd.AdB=77;this.Y$.H(Aae);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.A6N));this.
Y$.Bg(false);this.Y$.AdB=78;this.T8.H(Alg);this.T8.Aj(true);this.T8.T(A.aaR(A.acf.
About));this.T8.Bg(true);this.T8.AdB=3;this.J(this.Wk,-1);this.J(this.Zd,-1);this.
J(this.Y$,-1);this.J(this.T8,-1);this.Wk.AR=[this,this.AEn];this.Zd.AR=[this,this.
AEn];this.Y$.AR=[this,this.AEn];this.T8.AR=[this,this.AEn];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Wk._Done();this.Zd._Done();this.Y$._Done();this.
T8._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.
Wk._ReInit();this.Zd._ReInit();this.Y$._ReInit();this.T8._ReInit();this.Wk.T(A.aaR(
A.acf.AhD));this.Zd.T(A.aaR(A.acf.A$j));this.Y$.T(A.aaR(A.acf.A6N));this.T8.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Wk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AO1={_Init:function(aArg){C.KO.
_Init.call(this,aArg);this.__proto__=C.AO1;this.Text.R(A.acf.Info);},_className:
"Application::HeaderDeviceInfoMenu"};C.ANL={FactoryResetScope:null,T$:null,Wi:null
,Ub:null,Init:function(aArg){this.Bb(this.T$);A.pe([this,this.MG],this);},Bj6:function(
G){switch(this.FactoryResetScope.C4(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(
A.Device.Device).A9(33,true,A.jV,0,[this,this.BfJ]);break;case 0:A._GetAutoObject(
A.Device.Device).A9(7,true,A.jV,0,[this,this.BfJ]);break;default:A.ab5("%s%i",Bs5
,this.FactoryResetScope.Q);}},BfJ:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))switch(At.Id){case 7:{A._GetAutoObject(A.
Device.Device).Bn7();A._GetAutoObject(A.Device.Device).A9(8,true,A.jV,0,null);A.
_GetAutoObject(C.A$).Cg(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bn6(
);A._GetAutoObject(A.Device.Device).ArQ(0);A._GetAutoObject(A.Device.Device).ArR(
0);A._GetAutoObject(A.Device.Device).ArS(0);A._GetAutoObject(A.Device.Device).ArW(
0);A._GetAutoObject(A.Device.Device).ArX(0);A._GetAutoObject(A.Device.Device).ArY(
0);A._GetAutoObject(A.Device.Device).Uh(5);A._GetAutoObject(A.Device.Device).Awz(
0);A._GetAutoObject(A.Device.Device).AwA(0);A._GetAutoObject(A.Device.Device).AwB(
0);A._GetAutoObject(A.Device.Device).AwT(1);A._GetAutoObject(A.Device.Device).AwU(
1);A._GetAutoObject(A.Device.Device).AwV(1);A._GetAutoObject(A.Device.Device).A9(
34,true,A.jV,0,null);}break;default:A.ab5("%s%e",AIb,At.Id);}},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={
I:this},0);C.Nc._Init.call(this.T$={I:this},0);C.Nc._Init.call(this.Wi={I:this},
0);C.BW._Init.call(this.Ub={I:this},0);this.__proto__=C.ANL;var B;this.Dq(C.AOZ);
this.T$.H(IR);this.T$.Aj(true);this.T$.T(A.aaR(A.acf.ACm));this.T$.Bg(false);this.
T$.Nf(93);this.Wi.H(P7);this.Wi.Aj(true);this.Wi.T(A.aaR(A.acf.XP));this.Wi.Bg(true
);this.Wi.Nf(92);this.Ub.H(Bao);this.Ub.Aj(true);this.Ub.Blq(true);this.Ub.T(A.aaR(
A.acf.A6f));this.Ub.Bg(false);this.J(this.T$,-1);this.J(this.Wi,-1);this.J(this.
Ub,-1);this.T$.AR=[B=this.T$,B.Ni];this.Wi.AR=[B=this.Wi,B.Ni];this.Ub.AR=[this,
this.Bj6];this.Ub.As([B=this.FactoryResetScope,B.B7,B.B8]);this.Ub.CI(this.FactoryResetScope
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.FactoryResetScope.
_Done();this.T$._Done();this.Wi._Done();this.Ub._Done();C.Ei._Done.call(this);},
_ReInit:function(){C.Ei._ReInit.call(this);this.FactoryResetScope._ReInit();this.
T$._ReInit();this.Wi._ReInit();this.Ub._ReInit();this.T$.T(A.aaR(A.acf.ACm));this.
Wi.T(A.aaR(A.acf.XP));this.Ub.T(A.aaR(A.acf.A6f));},_Mark:function(D){var B;C.Ei.
_Mark.call(this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ub)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AOZ={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AOZ;this.
Text.R(A.aaR(A.acf.ACo));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ACo));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.Am0={QP:null,V$:null,_Init:function(aArg){C.TS._Init.call(this,aArg);C.CH._Init.
call(this.QP={I:this},0);C.CH._Init.call(this.V$={I:this},0);this.__proto__=C.Am0;
this.QP.H(Bs6);this.QP.R(A.aaR(A.acf.A$b));this.QP.A6(0x12);this.QP.L(A.jb.Text);
this.V$.H(Bai);this.V$.R(A.aaR(A.acf.An9));this.V$.L(A.jb.Text);this.J(this.QP,0
);this.J(this.V$,0);this.QP.S(A.aaL(A.fl.Af));this.QP.A2(A.aaL(A.fl.Ak));this.QP.
Cu(A.aaL(A.fl.Bh));this.V$.S(A.aaL(A.fl.Af));this.V$.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TS;this.QP._Done();this.V$._Done();C.TS._Done.call(this
);},_ReInit:function(){C.TS._ReInit.call(this);this.QP._ReInit();this.V$._ReInit(
);this.QP.R(A.aaR(A.acf.A$b));this.V$.R(A.aaR(A.acf.An9));this.QP.S(A.aaL(A.fl.Af
));this.QP.A2(A.aaL(A.fl.Ak));this.QP.Cu(A.aaL(A.fl.Bh));this.V$.S(A.aaL(A.fl.Af
));this.V$.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TS._Mark.call(this,D);
if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V$)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.APv={QQ:
null,_Init:function(aArg){C.TS._Init.call(this,aArg);C.CH._Init.call(this.QQ={I:
this},0);this.__proto__=C.APv;this.QQ.H(Bs7);this.QQ.R(A.aaR(A.acf.Ud));this.QQ.
A6(0x12);this.QQ.L(A.jb.Text);this.J(this.QQ,0);this.QQ.S(A.aaL(A.fl.Af));this.QQ.
A2(A.aaL(A.fl.Ak));this.QQ.Cu(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=
C.TS;this.QQ._Done();C.TS._Done.call(this);},_ReInit:function(){C.TS._ReInit.call(
this);this.QQ._ReInit();this.QQ.R(A.aaR(A.acf.Ud));this.QQ.S(A.aaL(A.fl.Af));this.
QQ.A2(A.aaL(A.fl.Ak));this.QQ.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TS.
_Mark.call(this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Amz={IH:null,AbB:null,Ea:null,Bk:function(aSize){C.M2.Bk.call(this,aSize);this.
IH.H([this.Gv.M[2],0,this.Gv.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([
this.IH.M[2]-1,0,this.IH.M[2]+1,aSize[1]]);this.AbB.H([this.IH.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M2.Ai.call(this,Ae);this.AbB.L(this.Gv.AQ);this.IH.L(this.
Gv.AQ);},Ce:function(Ad){C.M2.Ce.call(this,Ad);if(!this.AX)return;this.Hn=Ad;if(
!!this.AX){var H$=this.AX.AmU(Ad,14);var AtO=this.AX.AOI(Ad,7);this.IH.Aw(A._GetAutoObject(
A.Device.Converter).AmT(AtO));this.AbB.Aw(A._GetAutoObject(A.Device.Converter).A4T(
H$));this.Am();}},_Init:function(aArg){C.M2._Init.call(this,aArg);A.acg.Ap._Init.
call(this.IH={I:this},0);A.acg.Ap._Init.call(this.AbB={I:this},0);A.acg.AL._Init.
call(this.Ea={I:this},0);this.__proto__=C.Amz;this.IH.H(Bak);this.IH.L(A.jb.Text
);this.AbB.H(Bs8);this.AbB.L(A.jb.Text);this.Ea.H(Bs9);this.Ea.L(A.jb.Bc);this.J(
this.IH,0);this.J(this.AbB,0);this.J(this.Ea,0);this.IH.Aw(A.aaL(A.aci.TJ));this.
AbB.Aw(A.aaL(A.aci.TJ));},_Done:function(){this.__proto__=C.M2;this.IH._Done();this.
AbB._Done();this.Ea._Done();C.M2._Done.call(this);},_ReInit:function(){C.M2._ReInit.
call(this);this.IH._ReInit();this.AbB._ReInit();this.Ea._ReInit();},_Mark:function(
D){var B;C.M2._Mark.call(this,D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AM3={ZO:null
,Bk:function(aSize){C.M2.Bk.call(this,aSize);this.ZO.H([this.Gv.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M2.Ai.call(this,Ae);this.ZO.L(this.Gv.AQ);},Ce:function(
Ad){C.M2.Ce.call(this,Ad);if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Ka=this.
AX.KN(Ad,26);if(Ka>0)this.ZO.R(A.ab2(Ka.toFixed(),5));else this.ZO.R(Rl);this.Am(
);}},_Init:function(aArg){C.M2._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZO={I:this},0);this.__proto__=C.AM3;this.ZO.H(Bs_);this.J(this.ZO,0);this.ZO.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M2;this.ZO._Done();C.M2._Done.
call(this);},_ReInit:function(){C.M2._ReInit.call(this);this.ZO._ReInit();this.ZO.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M2._Mark.call(this,D);if((B=this.ZO
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARH={Ap:null,Ai:function(Ae){C.AeR.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeR._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ARH;this.Text.H(Bs$);this.Ap.H(AZS);this.J(this.Ap,0
);this.Ap.Aw(A.aaL(A.ach.Afa));},_Done:function(){this.__proto__=C.AeR;this.Ap._Done(
);C.AeR._Done.call(this);},_ReInit:function(){C.AeR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yt={Text:
null,Dd:null,AP:null,Gr:null,D1:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.Nm],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AII],0);A.zV([this,this.Nm
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nm],this);},De:function(
E){C.BS.De.call(this,E);this.Dd.L(E);this.Text.L(E);this.Gr.L(E);this.D1.Zs(E);}
,Ww:function(E){C.BS.Ww.call(this,E);this.D1.CT(E);},D5:function(G){this.D1.T(A.
_GetAutoObject(A.Device.Device).An.Ca().toFixed());},Nm:function(s){this.D5(s);}
,_Init:function(aArg){C.BS._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gr={I:this},0);C.D1._Init.call(this.D1={I:this},0);
A.acg.C5._Init.call(this.A_={I:this},0);this.__proto__=C.Yt;this.Text.H(Bta);this.
Text.A6(0x11);this.Dd.H(Ayv);this.AP.DC(Bae);this.AP.DL(Baf);this.AP.L(A.jb.Bc);
this.Gr.H(Btb);this.Gr.L(A.jb.CS);this.D1.AZ(0x14);this.D1.H(Btc);this.D1.Zs(A.jb.
Bm);this.D1.CT(A.jb.Re);this.D1.Hh(2);this.A_.DC(Btd);this.A_.DL(Bte);this.A_.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Dd,0);this.J(this.AP,0);this.J(this.Gr,
0);this.J(this.D1,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Dd.Aw(A.aaL(A.ach.AjV));this.Gr.Aw(A.aaL(A.ach.Gr));this.D1.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BS;this.Text.
_Done();this.Dd._Done();this.AP._Done();this.Gr._Done();this.D1._Done();this.A_.
_Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.
Text._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Gr._ReInit();this.D1._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
D1.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acp={FF:null
,JT:null,JS:null,AkM:null,AkN:null,Q3:null,QA:null,AbA:null,VY:null,PF:null,PG:null
,Ss:null,Gs:null,Gt:null,Js:null,AlL:0,AlQ:0,D7:0,DX:0,A8:0,Bk:function(aSize){var
B;this.Dy.H([this.Ht.M[2]-10,this.Ht.M[1],this.H2.M[0]+10,this.Ht.M[3]]);this.Dy.
AFe((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.Dy.Go,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fq=((Ae&0x20)===0x20);var GA=this.Bo.Bw;if(!!this.
Q)this.GE(this);if((this.A8===1)||(this.A8===2)){var A05=this.A13(this.A8);if(!!
A05){this.AbA.Z(true);this.AbA.H(A05.M);this.AbA.L(this.V.AQ);this.VY.Z(true);this.
VY.H(A05.M);}else{this.AbA.Z(false);this.VY.Z(false);}this.Ht.Z(false);this.H2.Z(
false);}else{this.AbA.Z(false);this.VY.Z(false);this.Ht.Z(Fq||GA);this.H2.Z(Fq||
GA);}},Qm:function(G){if(!!this.Q){if(this.FC===1)A.pe([this,this.U8],this);else
if(this.FC===4)A.pe([this,this.A0m],this);else if(this.FC===5)A.pe([this,this.A0k
],this);}C.BW.Qm.call(this,G);},J$:function(G){switch(this.A8){case 0:C.BW.J$.call(
this,G);break;case 2:break;default:this.Adv(this);}},J6:function(G){switch(this.
A8){case 0:C.BW.J6.call(this,G);break;default:this.Ain(this);}},A1z:function(G){
var F;if(this.A8===1){var BR=this.D7;this.D7=this.D7-10;if(this.D7<this.AlQ)this.
D7=this.AlQ;if(this.D7<A._GetAutoObject(A.Device.Device).Z0)this.D7=A._GetAutoObject(
A.Device.Device).Z0;if(this.DX!==BR){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.
D7));A.abo(this.JT,0);}}if(this.A8===2){var BR=this.DX;this.DX=this.DX-10;if(this.
DX<this.D7)this.DX=this.D7;if(this.DX!==BR){if(!!this.JS)(F=this.JS,F[2].call(F[
0],this.DX));A.abo(this.JS,0);}}this.DJ(this);this.Am();},A0k:function(s){this.A1z(
s);},Al1:function(G){this.FC=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A0k],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A1_:function(G){var F;if(this.A8===1){var
BR=this.D7;this.D7=this.D7+10;if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BR
){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A8===
2){var BR=this.DX;this.DX=this.DX+10;if(this.DX>this.AlL)this.DX=this.AlL;if(this.
DX!==BR){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.
DJ(this);this.Am();},A0m:function(s){this.A1_(s);},Al2:function(G){this.FC=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A0m],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},U8:function(G){this.Ew(this.A8+1);},Adv:function(G){this.FC=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GE:function(G){},AfC:function(s){this.GE(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aex));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U8];}break;case 2:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.
N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.Am1
));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Ain];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FF.AkP((F=this.N,F[1].call(F[
0])));}},A99:function(E){if(A.aaZ(this.JT,E))return;if(!!this.JT)A.z$([this,this.
A3w],this.JT,0);this.JT=E;if(!!this.JT)A.zX([this,this.A3w],this.JT,0);A.pe([this
,this.A3w],this);},A3w:function(G){var F;this.D7=(F=this.JT,F[1].call(F[0]));this.
Am();},A98:function(E){if(A.aaZ(this.JS,E))return;if(!!this.JS)A.z$([this,this.A3v
],this.JS,0);this.JS=E;if(!!this.JS)A.zX([this,this.A3v],this.JS,0);A.pe([this,this.
A3v],this);},A3v:function(G){var F;this.DX=(F=this.JS,F[1].call(F[0]));this.Am();
},FQ:function(G){this.Ew(1);},G_:function(G){this.Ew(0);},Ew:function(EO){var F;
if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(F[0])));this.A8=EO;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DJ(this);this.Gt.Bw=!!this.A8;this.Gs.Bw=!!this.A8;this.
Am();},Ain:function(G){if(this.A8>1)this.Ew(this.A8-1);},A3J:function(G){},AyQ:function(
s){this.A3J(s);},A3i:function(G){},Bbs:function(s){this.A3i(s);},A13:function(Ato
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AL._Init.call(
this.AkM={I:this},0);A.acg.AL._Init.call(this.AkN={I:this},0);A.acg.AL._Init.call(
this.Q3={I:this},0);A.acg.Ap._Init.call(this.QA={I:this},0);A.acg.AL._Init.call(
this.AbA={I:this},0);A.acg.BU._Init.call(this.VY={I:this},0);A.acg.Text._Init.call(
this.PF={I:this},0);A.acg.Text._Init.call(this.PG={I:this},0);A.acg.Text._Init.call(
this.Ss={I:this},0);A.Core.BN._Init.call(this.Gs={I:this},0);A.Core.BN._Init.call(
this.Gt={I:this},0);A.Core.BN._Init.call(this.Js={I:this},0);this.__proto__=C.Acp;
this.H(AfA);this.T(A.aaR(A.acf.Arm));this.Background.H(AfA);this.V.H(BF);this.V.
R(A.aaR(A.acf.AGU));this.V.A6(0x12);this.AkM.H(Btf);this.AkM.L(A.jb.Gf);this.AkN.
H(Btg);this.AkN.L(A.jb.H6);this.Q3.H(Bth);this.Q3.L(A.jb.E1);this.QA.H(Bti);this.
AbA.H(Btj);this.VY.H(Btk);this.VY.Nh(3);this.VY.L(A.jb.AV);this.VY.Z(false);this.
PF.H(Btl);this.PF.Hh(8);this.PF.I7(true);this.PF.A6(0x11);this.PF.L(0xFF000000);
this.PG.H(Btm);this.PG.Hh(8);this.PG.I7(true);this.PG.A6(0x11);this.PG.L(0xFF000000
);this.Ss.H(Btn);this.Ss.I7(false);this.Ss.A6(0x12);this.Ss.L(0xFF000000);this.Gs.
Filter=5;this.Gs.Bw=false;this.Gt.Filter=4;this.Gt.Bw=false;this.Js.Filter=1;this.
JV(this.V,-1);this.JV(this.Dy,-2);this.J(this.AkM,-1);this.J(this.AkN,-1);this.J(
this.Q3,-1);this.J(this.QA,-1);this.J(this.AbA,-1);this.J(this.VY,-1);this.J(this.
PF,-1);this.J(this.PG,0);this.J(this.Ss,0);this.QA.Aw(A.aaL(A.ach.ADt));this.PF.
S(A.aaL(A.fl.Af));this.PG.S(A.aaL(A.fl.Af));this.Ss.S(A.aaL(A.fl.Ak));this.Gs.BO=[
this,this.Al1];this.Gs.D0=[this,this.A0k];this.Gt.BO=[this,this.Al2];this.Gt.D0=[
this,this.A0m];this.Js.BO=[this,this.Adv];this.FF=A._NewObject(C.Aeq,0);},_Done:
function(){this.__proto__=C.BW;this.AkM._Done();this.AkN._Done();this.Q3._Done();
this.QA._Done();this.AbA._Done();this.VY._Done();this.PF._Done();this.PG._Done();
this.Ss._Done();this.Gs._Done();this.Gt._Done();this.Js._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkM._ReInit();this.AkN._ReInit(
);this.Q3._ReInit();this.QA._ReInit();this.AbA._ReInit();this.VY._ReInit();this.
PF._ReInit();this.PG._ReInit();this.Ss._ReInit();this.Gs._ReInit();this.Gt._ReInit(
);this.Js._ReInit();this.T(A.aaR(A.acf.Arm));this.V.R(A.aaR(A.acf.AGU));this.PF.
S(A.aaL(A.fl.Af));this.PG.S(A.aaL(A.fl.Af));this.Ss.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JS)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FE={XW:null,Acr:
null,Aob:0,Aoc:0,Do:function(){if(!this.XW)return 0;return this.XW.MC;},C4:function(
aIndex){if(!this.XW||(aIndex>=this.XW.MC))return-1;return this.XW.Get(aIndex);},
FX:function(aIndex){return this.A6x().BI(this.C4(aIndex));},DU:function(A7){if(!
this.XW)return-1;return this.XW.Avo(A7);},HH:function(){if(!this.XW)return-1;return this.
XW.HH();},AnK:function(E){if(this.Aob===E)return;this.Aob=E;A.pe([this,this.AVs]
,this);},A0g:function(Aq){this.AnK(Aq);},AnL:function(E){if(this.Aoc===E)return;
this.Aoc=E;A.pe([this,this.AVt],this);},A0h:function(Aq){this.AnL(Aq);},AVt:function(
G){A.abo([this,this.ASI,this.A0h],0);},AVs:function(G){A.abo([this,this.ASH,this.
A0g],0);},A6x:function(){return this.Acr;},ASH:function(){return this.Aob;},ASI:
function(){return this.Aoc;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acr={I:this},0);this.__proto__=C.FE;},_Done:function(
){this.__proto__=C.AC;this.Acr._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acr._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acr)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMx={Init:
function(aArg){A.zV([this,this.BeV],A._GetAutoObject(A.Device.Helper).UC,0);A.zV([
this,this.BeT],A._GetAutoObject(A.Device.Helper).UB,0);this.BeV(this);this.BeT(this
);},As:function(E){C.FE.As.call(this,E);this.AnL(A._GetAutoObject(A.Device.Helper
).UC.Get(this.DU(E)));this.AnK(A._GetAutoObject(A.Device.Helper).UB.Get(this.DU(
E)));},AnK:function(E){if(this.Aob===E)return;C.FE.AnK.call(this,E);A._GetAutoObject(
A.Device.Helper).UB.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).UB.
Cq();},AnL:function(E){if(this.Aoc===E)return;C.FE.AnL.call(this,E);A._GetAutoObject(
A.Device.Helper).UC.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).UC.
Cq();},BeV:function(G){this.Aoc=A._GetAutoObject(A.Device.Helper).UC.Get(this.DU(
this.Q));A.pe([this,this.AVt],this);},BeT:function(G){this.Aob=A._GetAutoObject(
A.Device.Helper).UB.Get(this.DU(this.Q));A.pe([this,this.AVs],this);},_Init:function(
aArg){C.FE._Init.call(this,aArg);this.__proto__=C.AMx;this.XW=A._GetAutoObject(A.
Device.Helper).AdX;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMy={Agx:null,ABQ:0,ABP:0,Init:function(aArg){A.zV([this,this.Be8],A._GetAutoObject(
A.Device.Helper).Afu,0);A.zV([this,this.Be6],A._GetAutoObject(A.Device.Helper).Aft
,0);A.zV([this,this.Be4],A._GetAutoObject(A.Device.Helper).Afs,0);A.zV([this,this.
Be_],A._GetAutoObject(A.Device.Helper).Afv,0);this.Be8(this);this.Be6(this);this.
Be4(this);this.Be_(this);},As:function(E){C.FE.As.call(this,E);this.AnL(A._GetAutoObject(
A.Device.Helper).Afu.Get(this.DU(E)));this.AnK(A._GetAutoObject(A.Device.Helper).
Aft.Get(this.DU(E)));this.ASM(A._GetAutoObject(A.Device.Helper).Afs.Get(this.DU(
E)));this.ASO(A._GetAutoObject(A.Device.Helper).Afv.Get(this.DU(E)));},AnK:function(
E){if(this.Aob===E)return;C.FE.AnK.call(this,E);A._GetAutoObject(A.Device.Helper
).Aft.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Aft.Cq();},AnL:function(
E){if(this.Aoc===E)return;C.FE.AnL.call(this,E);A._GetAutoObject(A.Device.Helper
).Afu.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afu.Cq();},A6x:function(
){return this.Agx;},Be8:function(G){this.Aoc=A._GetAutoObject(A.Device.Helper).Afu.
Get(this.DU(this.Q));A.pe([this,this.AVt],this);},Be6:function(G){this.Aob=A._GetAutoObject(
A.Device.Helper).Aft.Get(this.DU(this.Q));A.pe([this,this.AVs],this);},ASO:function(
E){if(this.ABQ===E)return;this.ABQ=E;A._GetAutoObject(A.Device.Helper).Afv.Set(this.
DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afv.Cq();A.pe([this,this.A$H],this
);},ASM:function(E){if(this.ABP===E)return;this.ABP=E;A._GetAutoObject(A.Device.
Helper).Afs.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afs.Cq();A.
pe([this,this.A$G],this);},A$G:function(G){A.abo([this,this.A8k,this.ASM],0);},A$H:
function(G){A.abo([this,this.A8l,this.ASO],0);},Be4:function(G){this.ABP=A._GetAutoObject(
A.Device.Helper).Afs.Get(this.DU(this.Q));A.pe([this,this.A$G],this);},Be_:function(
G){this.ABQ=A._GetAutoObject(A.Device.Helper).Afv.Get(this.DU(this.Q));A.pe([this
,this.A$H],this);},A8l:function(){return this.ABQ;},A8k:function(){return this.ABP;
},_Init:function(aArg){C.FE._Init.call(this,aArg);A.Device.Agx._Init.call(this.Agx={
I:this},0);this.__proto__=C.AMy;this.XW=A._GetAutoObject(A.Device.Helper).Agy;this.
Init(aArg);},_Done:function(){this.__proto__=C.FE;this.Agx._Done();C.FE._Done.call(
this);},_ReInit:function(){C.FE._ReInit.call(this);this.Agx._ReInit();},_Mark:function(
D){var B;C.FE._Mark.call(this,D);if((B=this.Agx)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMe={RI:null,Init:function(
aArg){var B;A.zX([this,this.AiL],[B=this.AnimalType,B.B7,B.B8],0);A.pe([this,this.
AiL],this);this.Bb(this.RI);},Bl:function(E){C.I0.Bl.call(this,E);this.RI.By(this.
Jn.AM);},AiL:function(G){A._GetAutoObject(A.Device.Device).AwC(this.AnimalType.Q
);},_Init:function(aArg){C.I0._Init.call(this,aArg);C.TD._Init.call(this.RI={I:this
},0);this.__proto__=C.AMe;var B;this.Jn.Ar(false);this.Jn.Aj(false);this.Jn.Z(false
);this.RI.H(AIE);this.RI.Aj(true);this.RI.Nd(14);this.RI.Aho(0);this.RI.ON(0);this.
J(this.RI,-4);this.RI.AR=[this,this.AAq];this.RI.As([B=this.AnimalType,B.B7,B.B8
]);this.RI.CI(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I0;this.RI._Done();C.I0._Done.call(this);},_ReInit:function(){C.I0._ReInit.call(
this);this.RI._ReInit();},_Mark:function(D){var B;C.I0._Mark.call(this,D);if((B=
this.RI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TD={Filter:null,Ep:0,TableId:0,Operator:1,CP:function(){var F;this.To((F=this.
Filter,F[1].call(F[0])).DQ(this.Ep,this.Operator));},Bk:function(aSize){var B;C.
BW.Bk.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Ht.H(AhR
);this.H2.H([aSize[0]-40,40,aSize[0],80]);this.Dy.H([this.Ht.M[2]-5,this.Ht.M[1]
,this.H2.M[0]+5,this.Ht.M[3]]);this.Dy.AFe((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.
Dy.Go,true,null,null);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$
],E,0);A.pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.To((F=this.Filter,F[1].call(F[0])).DQ(this.Ep,this.
Operator));else this.To(null);},Aho:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.L$],this);},Nd:function(E){if(this.Ep===E)return;this.
Ep=E;A.pe([this,this.L$],this);},To:function(AH){this.T(A._GetAutoObject(A.Device.
Helper).AmV(this.TableId,this.Ep));this.Am();},ON:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.L$],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TD;this.H(J0);this.V.A6(0x11);this.V.Cu(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Cu(A.aaL(A.fl.Bh));this.
CP();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ARQ={Gb:null,MP:null,DY:null,Y:null,Ef:null,Cn:null,CG:null,C$:null,Gi:null,
Ee:null,C9:null,BZ:null,Ay:null,Breed:null,Jd:null,AnimalType:null,Gender:null,Pj:
null,KY:null,Jb:null,YG:null,Amg:null,KI:0,M3:0,A3R:false,Init:function(aArg){var
B;A.zX([this,this.BAl],[B=A._GetAutoObject(A.Device.Device),B.AEw,B.AIM],0);A.zV([
this,this.At0],this.MP,0);A.zX([this,this.At0],[B=A._GetAutoObject(A.Device.Device
),B.Awj,B.AyL],0);A.zX([this,this.GE],[B=A._GetAutoObject(A.Device.Device),B.AEw
,B.AIM],0);A.zV([this,this.GE],this.MP,0);A.zX([this,this.AiL],this.BZ.Q,0);A.pe([
this,this.AiL],this);A.pe([this,this.Bew],this);A.pe([this,this.At0],this);A.pe([
this,this.GE],this);A.pe([this,this.A3j],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALj],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArJ(A.jb.E1);else
this.Ef.ArJ(A.jb.Gf);if(A._GetAutoObject(A.Device.Device).AeL){if(!!(F=this.Cn.Dj
,F[1].call(F[0])))this.Cn.ArJ(A.jb.E1);else this.Cn.ArJ(A.jb.Gf);}else this.Cn.ArJ(
A.jb.Re);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},LO:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lh())A._GetAutoObject(A.Device.Device
).A9(41,true,A._GetAutoObject(A.Device.Device).An.HG().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gm();A._GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(A.
Device.Helper).W);this.ApA();},CF:function(G){C.AB.CF.call(this,G);A._GetAutoObject(
A.Device.Device).AFl(0);},E3:function(G){C.AB.E3.call(this,G);this.Jb.Ar(false);
A._GetAutoObject(A.Device.Device).Un(false);},Ev:function(G){A._GetAutoObject(A.
Device.Helper).W.Hi();A._GetAutoObject(C.A$).Fv();},Fe:function(G){var B;this.Ay.
Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.
Y.Br[1]);},At0:function(G){var F,CA;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALj(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aei(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter
).Rf((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A2_]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A29],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeL)this.JD(this.Cn);}var BdM=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeL||!!(CA=this.Cn.Dj,CA[1].call(CA[0])));if(this.MP.AOD()>0){if((
this.AV===this.Cn)&&BdM)this.Bb(this.Y.TL(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeL&&(this.AV===this.Cn))&&!!(F=this.Cn.Dj,F[1].call(F[0])))this.
JD(this.Ef);if(BdM)this.Bcz(this);},XB:function(G){A._GetAutoObject(A.Device.Device
).Ds(13);},AiZ:function(){var F;this.Gb.Cq(A._GetAutoObject(A.Device.Device).An);
if(this.MP.NU(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);else{var L6=A._GetAutoObject(A.Device.Device).An.Lc(0,this.Gb.Id);A._GetAutoObject(
A.Device.Device).SJ(L6);var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(
this.Gb.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(this.Gb.DateOfBirth);B1.
Cq(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MP.NU(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var L6=A._GetAutoObject(A.Device.
Device).An.Lc(0,this.Gb.Id);A._GetAutoObject(A.Device.Device).SJ(L6);var B1=A._NewObject(
A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(this.Gb.Id);B1.OnSetBodyWeight(this.
M3);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WA(65280);this.Jb.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFl(F.AvV+1));this.A3R=true;A.pe([this,
this.ALj],this);this.ApA();},GE:function(G){this.Cn.ATn(A._GetAutoObject(A.Device.
Device).AeL);A._GetAutoObject(A.Device.Helper).JW(this.BZ,this.MP.NU(14));A._GetAutoObject(
A.Device.Helper).JW(this.C9,this.MP.NU(23));A._GetAutoObject(A.Device.Helper).JW(
this.CG,this.MP.NU(32));A._GetAutoObject(A.Device.Helper).JW(this.Ee,this.MP.NU(
18));A._GetAutoObject(A.Device.Helper).JW(this.C$,this.MP.NU(7));A._GetAutoObject(
A.Device.Helper).JW(this.Gi,this.MP.NU(34));this.YG.Z(!this.MP.AOD());var O;var Aa=
null;var Aph=this.AV;for(O=0;O<this.MP.AfL.NP();O++){Aa=this.Bzg(this.MP.AfL.OD(
O));if(!!Aa)this.ZD(Aa);}this.JD(Aph);A._GetAutoObject(A.Device.Helper).ANo(this.
Y);A.pe([this,this.A3j],this);this.Am();},AeV:function(E){if(this.KI===E)return;
this.KI=E;A.abo([this,this.Av7,this.AeV],0);},Ahi:function(E){if(this.M3===E)return;
this.M3=E;A.abo([this,this.Anr,this.Ahi],0);},Bcz:function(G){this.Gb.Gm();A._GetAutoObject(
A.Device.Helper).Aqi(this.Gb);this.Gb.Q0(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gb.Ne(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gb.SA(A._GetAutoObject(
A.Device.Helper).AMf(0,this.Gb));this.Gb.Ae2(true);if(this.MP.NU(14))this.Gb.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MP.NU(32))this.Gb.NY(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MP.NU(7))this.Gb.JQ(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MP.NU(34))this.Gb.Ng(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alq=A._GetAutoObject(A.Device.Helper).A1m(this.Gb,0,A._GetAutoObject(
A.Device.Device).An);if(!Alq)this.AiZ();else A._GetAutoObject(A.Device.Helper).AKf(
this.Gb,Alq,0,0,[this,this.ApG]);},ApA:function(){A._GetAutoObject(A.Device.Helper
).W.Ne(0);if(A._GetAutoObject(A.Device.Device).AeL)A._GetAutoObject(A.Device.Helper
).W.Q0(0);this.AeV(0);this.Ahi(0);this.JD(this.Ef);this.Am();},ApG:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case
22:case 21:case 48:this.ApA();break;case 43:this.JD(this.Ef);break;case 41:break;
default:A.ab5("%s%e",As7,At.Id);}},JD:function(Ag){this.Bb(Ag);this.Y.HD(Ag,true
,null,null);this.Y.Vt(null,null);},Bew:function(G){this.Ee.Ahm(A._GetAutoObject(
A.Device.Helper).W.AhP(1));this.At0(this);},AiL:function(G){this.C9.Ahm(A._GetAutoObject(
A.Device.Helper).Abq(this.AnimalType.Q));},A3j:function(G){var B;var BBr=this.Ay.
Background.Fk();var width=(BBr?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xq=this.Y.TL(null,0x401);while(!!Xq&&(((B=Xq)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OV.isPrototypeOf(Xq)?Xq:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xq=this.Y.TL(Xq,0x1);}},Bzg:function(Aaj){var Aa=null;switch(Aaj){case 14:Aa=
this.BZ;break;case 32:Aa=this.CG;break;case 23:Aa=this.C9;break;case 7:Aa=this.C$;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gi;break;default:A.ab5("%s%e",Bto
,Aaj);}return Aa;},BAl:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeL
)A._GetAutoObject(A.Device.Helper).W.Q0(0);else if(!(F=this.Cn.Dj,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q0(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmH(A._GetAutoObject(A.Device.Device).AdQ));this.
At0(this);},ALj:function(G){var B;var AKk=A.jV;var Ay8=A.jb.CK;var BcQ=A.jb.AV;this.
Amg.AxE(this);if(this.A3R){this.A3R=false;AKk=A._GetAutoObject(A.Device.Helper).
Nk(A.aaR(A.acf.Bo3),P6,A._GetAutoObject(A.Device.Converter).Rf(this.Gb.NaisId));
A.pe([B=this.Amg,B.StartTimer],this);Ay8=A.jb.E1;BcQ=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKk=A.aaR(A.acf.Boh);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKk=A.aaR(A.
acf.Bog);this.YG.T(AKk);this.YG.BlB(Ay8);this.YG.BlC(BcQ);},A2_:function(G){var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At){if(At.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajz();else if(At.Id===105){if(At.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajz();else if(At.PopupState===7){A._GetAutoObject(C.A$).Cg(76);
A._GetAutoObject(A.Device.Device).Ajz();}}}else A._GetAutoObject(A.Device.Device
).Ajz();},A29:function(G){A._GetAutoObject(A.Device.Device).AuO();},DJ:function(
G){var B;if(!this.MP.AOD()){this.N.Le.Dr(255);if(this.AV===this.Ef){this.N.C6(A.
aaL(A.ach.Edit));this.N.Cl=[B=this.Ef,B.FQ];}else if(this.AV===this.Cn){this.N.C6(
A.aaL(A.ach.Edit));this.N.Cl=[B=this.Cn,B.FQ];}else{this.N.C6(null);this.N.Cl=null;
}}else{this.N.C6(A.aaL(A.ach.Am3));if((this.Ef.Aqu===A.jb.Gf)||(this.Cn.Aqu===A.
jb.Gf)){this.N.Le.Dr(100);this.N.Cl=null;}else{this.N.Le.Dr(255);this.N.Cl=[this
,this.Bcz];}}},Av7:function(){return this.KI;},Anr:function(){return this.M3;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUz._Init.call(this.Ef={I:this},0);C.
AUv._Init.call(this.Cn={I:this},0);C.Axu._Init.call(this.CG={I:this},0);C.BW._Init.
call(this.C$={I:this},0);C.Asw._Init.call(this.Gi={I:this},0);C.AkT._Init.call(this.
Ee={I:this},0);C.AkT._Init.call(this.C9={I:this},0);C.BW._Init.call(this.BZ={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UM._Init.call(this.Jd={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M1._Init.call(this.
Pj={I:this},0);A.Device.KY._Init.call(this.KY={I:this},0);A.Device.TE._Init.call(
this.Jb={I:this},0);C.AU5._Init.call(this.YG={I:this},0);A.Core.Timer._Init.call(
this.Amg={I:this},0);this.__proto__=C.ARQ;var B;this.Background.L(A.jb.CS);this.
N.Z(true);this.Ej.Ar(false);this.Dq(C.APj);this.DY.AZ(0x3F);this.DY.H(E$);this.DY.
L(A.jb.CK);this.Y.H(E$);this.Y.JP(9);this.Ef.H(AIE);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACy));this.Ef.ATn(true);this.Ef.AFE(false);this.Cn.H(Bao);this.Cn.Aj(true
);this.Cn.T(A.aaR(A.acf.Aec));this.Cn.ATn(true);this.Cn.AFy(true);this.CG.H(As6);
this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.C$.H(As6);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afk));this.Gi.H(Bap);this.Gi.Aj(true);this.Gi.T(A.aaR(A.acf.Jd)
);this.Ee.H(Btp);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M3));this.Ee.F0(1000);this.
Ee.EV(999000);this.Ee.Ahm(A._GetAutoObject(A.Device.Helper).Abq(this.AnimalType.
Q));this.C9.H(Bap);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI));this.C9.F0(1000);
this.C9.EV(99000);this.C9.Ahm(A._GetAutoObject(A.Device.Helper).Abq(this.AnimalType.
Q));this.BZ.H(As5);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afp));this.Ay.H(Ir);this.
Jb.B2=false;this.Jb.Cw=true;this.Jb.HM(1);this.Jb.Fl(1000);this.Jb.Uk(0);this.YG.
H(Aaf);this.YG.Aj(true);this.YG.ArJ(A.jb.Text);this.Amg.PO(3000);this.J(this.DY,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CG,0);this.J(
this.C$,0);this.J(this.Gi,0);this.J(this.Ee,0);this.J(this.C9,0);this.J(this.BZ,
0);this.J(this.Ay,0);this.J(this.YG,0);this.N.CB=[this,this.Ev];this.N.Ck=[this,
this.XB];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbC));this.Y.El=[this,
this.Fe];this.Ef.Gn([this,this.D_,this.GN]);this.Ef.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Anu,B.Ne]);this.Ef.AE$([this,this.At0]);this.Ef.AS$([this,this.A29]);
this.Ef.ATa([this,this.A2_]);this.Cn.Gn([this,this.D_,this.GN]);this.Cn.Ab8([B=A.
_GetAutoObject(A.Device.Helper).W,B.Av_,B.Q0]);this.Cn.OF=[this,this.Bew];this.Cn.
AS$([this,this.A29]);this.Cn.ATa([this,this.A2_]);this.CG.Gn([this,this.D_,this.
GN]);this.CG.LX([B=this.CG,B.FQ]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.As([B=this.
Breed,B.B7,B.B8]);this.CG.CI(this.Breed);this.CG.Anz(this.Pj);this.C$.As([B=this.
Gender,B.B7,B.B8]);this.C$.CI(this.Gender);this.Gi.Gn([this,this.D_,this.GN]);this.
Gi.LX([B=this.Gi,B.FQ]);this.Gi.L0(A.aaL(A.ach.Edit));this.Gi.As([B=this.Jd,B.B7
,B.B8]);this.Gi.CI(this.Jd);this.Gi.Anz(this.KY);this.Ee.As([this,this.Anr,this.
Ahi]);this.C9.As([this,this.Av7,this.AeV]);this.BZ.As([B=this.AnimalType,B.B7,B.
B8]);this.BZ.CI(this.AnimalType);this.Ay.BmY([this,this.A3j]);this.Breed.LY(A._GetAutoObject(
A.Device.Helper).W);this.Jd.LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LY(A._GetAutoObject(A.Device.Helper).W);this.Gender.LY(A._GetAutoObject(A.Device.
Helper).W);this.Gb=A._NewObject(A.Device.Animal,0);this.MP=A._GetAutoObject(C.Amo
);this.Jb.Q=[B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0c];this.Amg.Mx=[this,
this.ALj];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();
this.Y._Done();this.Ef._Done();this.Cn._Done();this.CG._Done();this.C$._Done();this.
Gi._Done();this.Ee._Done();this.C9._Done();this.BZ._Done();this.Ay._Done();this.
Breed._Done();this.Jd._Done();this.AnimalType._Done();this.Gender._Done();this.Pj.
_Done();this.KY._Done();this.Jb._Done();this.YG._Done();this.Amg._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cn._ReInit();this.CG._ReInit();this.C$._ReInit(
);this.Gi._ReInit();this.Ee._ReInit();this.C9._ReInit();this.BZ._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jd._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pj._ReInit();this.KY._ReInit();this.Jb._ReInit();this.YG._ReInit(
);this.Amg._ReInit();this.Ef.T(A.aaR(A.acf.ACy));this.Cn.T(A.aaR(A.acf.Aec));this.
CG.T(A.aaR(A.acf.Breed));this.C$.T(A.aaR(A.acf.Afk));this.Gi.T(A.aaR(A.acf.Jd));
this.Ee.T(A.aaR(A.acf.M3));this.C9.T(A.aaR(A.acf.KI));this.BZ.T(A.aaR(A.acf.Afp)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gb)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amg)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Asv={Zk:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zk={
I:this},0);this.__proto__=C.Asv;this.N.CV(A.acf.Bh5);this.Number.H(Btq);this.Jc.
H(Btr);this.IP.H(Bts);this.AkF(2);this.Bcw=false;this.BdB=true;this.BdC=false;this.
Zk.H(Btt);this.Zk.KS(true);this.Zk.R(A.aaR(A.acf.A$i));this.Zk.L(A.jb.Text);this.
J(this.Zk,0);this.N.CB=null;this.N.Cl=[this,this.AIS];this.N.CY(null);this.Zk.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Zk.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zk._ReInit();this.Zk.R(A.aaR(A.acf.A$i));this.Zk.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADK={Ct:null,FI:function(E){if(this.M5===E)return;C.HI.FI.call(this,E);this.
Ct.CT(E);},Yr:function(Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;
case 1:B5=this.Ct;break;case 2:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;
},_Init:function(aArg){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADK;this.H(Btu);this.Ct.H(A$3);this.FW.H(Btv);this.J(this.
Ct,-2);this.Ct.Di=[this,this.GP];},_Done:function(){this.__proto__=C.HI;this.Ct.
_Done();C.HI._Done.call(this);},_ReInit:function(){C.HI._ReInit.call(this);this.
Ct._ReInit();},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.Ct)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Asw={GZ:null
,Bk:function(aSize){C.OS.Bk.call(this,aSize);this.V.H(A.abN(this.V.M,this.GZ.M[0
]));},Ai:function(Ae){C.OS.Ai.call(this,Ae);if(this.Hf)this.GZ.FI(A.jb.CK);else this.
GZ.FI(A.jb.CS);},A1Y:function(){this.Bb(this.GZ);},_Init:function(aArg){C.OS._Init.
call(this,aArg);C.HI._Init.call(this.GZ={I:this},0);this.__proto__=C.Asw;this.GZ.
H(Btw);this.J(this.GZ,0);this.GZ.As([this,this.ASt,this.AFs]);},_Done:function(){
this.__proto__=C.OS;this.GZ._Done();C.OS._Done.call(this);},_ReInit:function(){C.
OS._ReInit.call(this);this.GZ._ReInit();},_Mark:function(D){var B;C.OS._Mark.call(
this,D);if((B=this.GZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axu={GZ:null,Bk:function(aSize){C.OS.Bk.call(this,aSize);this.V.H(A.abN(this.
V.M,this.GZ.M[0]));},Ai:function(Ae){C.OS.Ai.call(this,Ae);if(this.Hf)this.GZ.FI(
A.jb.CK);else this.GZ.FI(A.jb.CS);},A1Y:function(){this.Bb(this.GZ);},_Init:function(
aArg){C.OS._Init.call(this,aArg);C.ADK._Init.call(this.GZ={I:this},0);this.__proto__=
C.Axu;this.GZ.AZ(0x18);this.GZ.H(Btx);this.J(this.GZ,0);this.GZ.As([this,this.ASt
,this.AFs]);},_Done:function(){this.__proto__=C.OS;this.GZ._Done();C.OS._Done.call(
this);},_ReInit:function(){C.OS._ReInit.call(this);this.GZ._ReInit();},_Mark:function(
D){var B;C.OS._Mark.call(this,D);if((B=this.GZ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acs={ScreenTypeToString:
null,Do:function(){return 4;},FX:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BI(this.C4(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acs;this.Cf.Set(0,3);this.Cf.Set(1,35);this.Cf.Set(2
,34);this.Cf.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVO={Wv:function(G){this.Agp();A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.Settings
),[this,this.A3o]);A._GetAutoObject(C.BH).Ft();this.AL3();A._GetAutoObject(C.BH).
MZ(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.
BH).MZ(A.aaR(A.acf.ARh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},DE:function(G){},Abs:function(){return C.AB1;},Abt:function(){return C.ADj;
},Q6:function(G){A._GetAutoObject(A.Device.Device).An.Bl(A._GetAutoObject(A.Device.
Helper).A6L());},HO:function(G){C.Tu.HO.call(this,G);if(this.Akh()===false){this.
N.Cs(A.aaL(A.ach.Avv));this.N.Ck=[this,this.ANT];this.N.FJ(A.jV);}this.N.OO(false
);this.N.OP(false);},Agb:function(){A._GetAutoObject(C.A$).Cg(86);},A6C:function(
){return C.APq;},BfG:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.Fg(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DQ(26,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bl(Filter);}},A3o:function(G){A._GetAutoObject(A.Device.Device
).Ds(0);A._GetAutoObject(C.A$).Cg(89);},_Init:function(aArg){C.Tu._Init.call(this
,aArg);this.__proto__=C.AVO;this.Dq(C.ADa);this.Dz(A.aaR(A.acf.A7Y));this.AS7(A.
_GetAutoObject(C.AxY));},_ReInit:function(){C.Tu._ReInit.call(this);this.Dz(A.aaR(
A.acf.A7Y));},_className:"Application::YoungNoTransponderListScreen"};C.AVN={_Init:
function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AVN;this.KW.Ar(false);
this.KW.Aj(false);this.KW.Z(false);this.Bmy(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQX={Sm:null,Q:null,A7U:0,M5:0,Init:function(aArg){this.AS_(6);},As:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sm)this.Sm.As(E);},AS_:function(
E){if(this.A7U===E)return;this.A7U=E;var X;switch(E){case 2:X=A._NewObject(C.HI,
0);break;case 3:X=A._NewObject(C.ADK,0);break;case 4:X=A._NewObject(C.AQU,0);break;
case 5:X=A._NewObject(C.AQV,0);break;case 6:X=A._NewObject(C.AvO,0);break;default:{
X=null;A.ab5("%s%i",Bty,E);}}this.Bmx(X);},Bmx:function(E){if(this.Sm===E)return;
if(!!this.Sm){this.Sm.As(null);this.HN(this.Sm);}this.Sm=E;if(!!this.Sm){this.Sm.
As(this.Q);this.J(this.Sm,0);}},FI:function(E){if(this.M5===E)return;this.M5=E;if(
!!this.Sm)this.Sm.FI(E);},SI:function(Gw){if(!!this.Sm)this.Sm.SI(Gw);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.AQX;this.H(Ayg);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sm)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQU={CU:null,Ct:null,FI:function(
E){if(this.M5===E)return;C.HI.FI.call(this,E);this.Ct.CT(E);this.CU.CT(E);},Yr:function(
Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.Ct;break;
case 2:B5=this.CU;break;case 3:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;
},_Init:function(aArg){C.HI._Init.call(this,aArg);C.DF._Init.call(this.CU={I:this
},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQU;this.H(Btz);this.GW.
H(Ate);this.CU.H(A$4);this.Ct.H(A$5);this.FW.H(A$6);this.J(this.CU,-2);this.J(this.
Ct,-2);this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP];},_Done:function(){this.
__proto__=C.HI;this.CU._Done();this.Ct._Done();C.HI._Done.call(this);},_ReInit:function(
){C.HI._ReInit.call(this);this.CU._ReInit();this.Ct._ReInit();},_Mark:function(D
){var B;C.HI._Mark.call(this,D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACH={SW:null,Ai:function(Ae){C.Abp.Ai.call(this,Ae);this.SW.L(this.V.AQ);},_Init:
function(aArg){C.Abp._Init.call(this,aArg);C.CH._Init.call(this.SW={I:this},0);this.
__proto__=C.ACH;this.V.Z(false);this.AW.H(BtA);this.AW.AS_(4);this.SW.H(BtB);this.
SW.R(A.aaR(A.acf.Ki));this.SW.L(A.jb.Bm);this.J(this.SW,0);this.SW.S(A.aaL(A.fl.
Af));this.SW.A2(A.aaL(A.fl.Ak));this.SW.Cu(null);},_Done:function(){this.__proto__=
C.Abp;this.SW._Done();C.Abp._Done.call(this);},_ReInit:function(){C.Abp._ReInit.
call(this);this.SW._ReInit();this.SW.R(A.aaR(A.acf.Ki));this.SW.S(A.aaL(A.fl.Af)
);this.SW.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abp._Mark.call(this,D);
if((B=this.SW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LW={YZ:null,T4:null,AQ:0,A7a:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YZ.L(this.AQ);this.T4.L(this.AQ);},A9X:function(E){var B;if(this.A7a===
E)return;this.A7a=E;if(E){this.YZ.Z(true);this.T4.DC([this.T4.EC[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YZ.Z(false);this.T4.DC([this.T4.EC[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C5._Init.call(
this.YZ={I:this},0);A.acg.C5._Init.call(this.T4={I:this},0);this.__proto__=C.LW;
this.H(AZT);this.YZ.AZ(0x2D);this.YZ.DC(AhU);this.YZ.DL(Baq);this.YZ.L(A.jb.Text
);this.T4.AZ(0x36);this.T4.DC(Baq);this.T4.DL(BtC);this.T4.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YZ,0);this.J(this.T4,0);},_Done:function(){this.__proto__=
A.Core.P;this.YZ._Done();this.T4._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.YZ._ReInit();this.T4._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUd={Sr:null,Py:null,C$:null,BZ:null,CG:null,GM:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pj:null,UM:null,KY:null,Init:function(aArg){A.zX([this
,this.AuI],this.BZ.Q,0);A.zX([this,this.AMW],this.CG.Q,0);A.zX([this,this.Bqn],this.
Sr.Q,0);A.zX([this,this.Avl],this.C$.Q,0);A.zX([this,this.AVK],this.GM.Q,0);},AuI:
function(G){var F;A._GetAutoObject(A.Device.Device).EB((F=this.BZ.Q,F[1].call(F[
0])));},Bqn:function(G){var F;A._GetAutoObject(A.Device.Device).Axb((F=this.Sr.Q
,F[1].call(F[0])));},Avl:function(G){var F;A._GetAutoObject(A.Device.Device).JQ((
F=this.C$.Q,F[1].call(F[0])));},AVK:function(G){var F;A._GetAutoObject(A.Device.
Device).Ng((F=this.GM.Q,F[1].call(F[0])));},AMW:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd._Init.
call(this,aArg);C.BW._Init.call(this.Sr={I:this},0);C.Ip._Init.call(this.Py={I:this
},0);C.BW._Init.call(this.C$={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.Axu.
_Init.call(this.CG={I:this},0);C.Asw._Init.call(this.GM={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M1._Init.call(this.Pj={I:this},0);C.UM._Init.call(this.UM={I:
this},0);A.Device.KY._Init.call(this.KY={I:this},0);this.__proto__=C.AUd;var B;this.
I8((A.aaR(A.acf.Asj)+Ayr)+A.aaR(A.acf.AjF));this.Sr.H(AhX);this.Sr.Aj(true);this.
Sr.T(A.aaR(A.acf.A$R));this.Sr.Bg(true);this.Sr.By(0);this.Py.H(Aye);this.Py.Aj(
true);this.Py.Z(true);this.Py.T(A.aaR(A.acf.AdQ));this.Py.F0(0);this.Py.EV(99);this.
Py.IM(A.aaR(A.acf.Ki));this.Py.I9(A.aaR(A.acf.GH));this.C$.H(Aaf);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.Afk));this.C$.Bg(true);this.C$.By(0);this.BZ.H(Alh);this.
BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afp));this.BZ.Bg(true);this.BZ.By(0);this.CG.H(
AcP);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.CG.Bg(false);this.GM.H(
AcP);this.GM.Aj(true);this.GM.T(A.aaR(A.acf.Jd));this.GM.Bg(true);this.AnimalType.
As(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.As(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.As(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.Device).Breed);
this.UM.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sr,0);this.
J(this.Py,0);this.J(this.C$,0);this.J(this.BZ,0);this.J(this.CG,0);this.J(this.GM
,0);this.Sr.As([B=this.WeightRecordingScope,B.B7,B.B8]);this.Sr.CI(this.WeightRecordingScope
);this.Py.As([B=A._GetAutoObject(A.Device.Device),B.A8c,B.BaN]);this.C$.As([B=this.
Gender,B.B7,B.B8]);this.C$.CI(this.Gender);this.BZ.As([B=this.AnimalType,B.B7,B.
B8]);this.BZ.CI(this.AnimalType);this.CG.Gn([this,this.D_,this.GN]);this.CG.LX([
B=this.CG,B.FQ]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.As([B=this.Breed,B.B7,B.B8
]);this.CG.CI(this.Breed);this.CG.Anz(this.Pj);this.GM.Gn([this,this.D_,this.GN]
);this.GM.LX([B=this.GM,B.FQ]);this.GM.L0(A.aaL(A.ach.Edit));this.GM.As([B=this.
UM,B.B7,B.B8]);this.GM.CI(this.UM);this.GM.Anz(this.KY);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cd;this.Sr._Done();this.Py._Done();this.C$._Done();this.
BZ._Done();this.CG._Done();this.GM._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pj._Done();this.UM._Done();this.
KY._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.
Sr._ReInit();this.Py._ReInit();this.C$._ReInit();this.BZ._ReInit();this.CG._ReInit(
);this.GM._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pj._ReInit();this.UM._ReInit();
this.KY._ReInit();this.I8((A.aaR(A.acf.Asj)+Ayr)+A.aaR(A.acf.AjF));this.Sr.T(A.aaR(
A.acf.A$R));this.Py.T(A.aaR(A.acf.AdQ));this.Py.IM(A.aaR(A.acf.Ki));this.Py.I9(A.
aaR(A.acf.GH));this.C$.T(A.aaR(A.acf.Afk));this.BZ.T(A.aaR(A.acf.Afp));this.CG.T(
A.aaR(A.acf.Breed));this.GM.T(A.aaR(A.acf.Jd));},_Mark:function(D){var B;C.Cd._Mark.
call(this,D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Py)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUc={QK:null,Fx:null,Il:null,C_:null,Dl:null,EL:null,AutoRegistrationMode:null
,AdS:null,Init:function(aArg){var B;A.zX([this,this.Bg6],this.QK.Q,0);A.zX([this
,this.Bei],[B=A._GetAutoObject(A.Device.Device),B.ASc,B.AZZ],0);A.zX([this,this.
Adu],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY],0);A.zX([this,this.Adu],[B=
A._GetAutoObject(A.Device.Device),B.Ug,B.UZ],0);A.pe([this,this.Bei],this);A.pe([
this,this.Adu],this);},Bg6:function(G){var F;A._GetAutoObject(A.Device.Device).Awq((
F=this.QK.Q,F[1].call(F[0])));},Bei:function(G){switch(A._GetAutoObject(A.Device.
Device).Ags){case 0:A._GetAutoObject(A.Device.Helper).JW(this.Il,true);break;case
1:A._GetAutoObject(A.Device.Helper).JW(this.Il,false);break;default:throw new Error(
BtD+A._GetAutoObject(A.Device.Device).Ags.toFixed());}},Adu:function(G){var F,CA;
if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dl.Q,CA[1].call(CA[0])))>12)(CA=this.
Dl.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cd._Init.call(this,aArg);C.BW._Init.call(this.QK={I:this},0);C.BW._Init.call(this.
Fx={I:this},0);C.AGA._Init.call(this.Il={I:this},0);C.Ip._Init.call(this.C_={I:this
},0);C.Ip._Init.call(this.Dl={I:this},0);C.AvX._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdS._Init.
call(this.AdS={I:this},0);this.__proto__=C.AUc;var B;this.I8(A.aaR(A.acf.Aqm));this.
QK.H(AIE);this.QK.Aj(true);this.QK.T(A.aaR(A.acf.Aqm));this.QK.Bg(false);this.QK.
F0(-1);this.QK.EV(1);this.Fx.H(UV);this.Fx.Aj(true);this.Fx.Z(true);this.Fx.T(A.
aaR(A.acf.Aqj));this.Fx.Bg(true);this.Il.H(Aaf);this.Il.Aj(true);this.Il.Z(true);
this.Il.T(A.aaR(A.acf.AEg));this.Il.Bg(true);this.C_.H(Alh);this.C_.Aj(true);this.
C_.Z(true);this.C_.T(A.aaR(A.acf.AqD));this.C_.Bg(false);this.C_.F0(2);this.C_.EV(
6);this.C_.IM(A.aaR(A.acf.OB));this.C_.I9(A.aaR(A.acf.Ey));this.Dl.H(AcP);this.Dl.
Aj(true);this.Dl.T(A.aaR(A.acf.Zm));this.Dl.Bg(true);this.Dl.F0(0);this.Dl.EV(12
);this.Dl.IM(A.aaR(A.acf.OB));this.Dl.I9(A.aaR(A.acf.Ey));this.EL.H(BtE);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bg(false);this.EL.ArZ(A.aaR(A.acf.Aql));this.AutoRegistrationMode.
As(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QK,0);this.
J(this.Fx,0);this.J(this.Il,0);this.J(this.C_,0);this.J(this.Dl,0);this.J(this.EL
,0);this.QK.As([B=this.AutoRegistrationMode,B.B7,B.B8]);this.QK.CI(this.AutoRegistrationMode
);this.Fx.As([B=this.AdS,B.B7,B.B8]);this.Fx.CI(this.AdS);this.Il.Uj([B=A._GetAutoObject(
A.Device.Device),B.Wt,B.AZ3]);this.Il.Akw([B=A._GetAutoObject(A.Device.Device),B.
Awa,B.AyF]);this.C_.As([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Dl.
As([B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ]);this.EL.DB(A.aaL(A.ach.AjX));
this.EL.OM([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.EL.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cd;this.QK._Done();this.Fx._Done();this.Il._Done();this.C_._Done();this.Dl._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdS._Done();C.Cd._Done.
call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.QK._ReInit();this.Fx.
_ReInit();this.Il._ReInit();this.C_._ReInit();this.Dl._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdS._ReInit();this.I8(A.aaR(A.acf.Aqm
));this.QK.T(A.aaR(A.acf.Aqm));this.Fx.T(A.aaR(A.acf.Aqj));this.Il.T(A.aaR(A.acf.
AEg));this.C_.T(A.aaR(A.acf.AqD));this.C_.IM(A.aaR(A.acf.OB));this.C_.I9(A.aaR(A.
acf.Ey));this.Dl.T(A.aaR(A.acf.Zm));this.Dl.IM(A.aaR(A.acf.OB));this.Dl.I9(A.aaR(
A.acf.Ey));this.EL.ArZ(A.aaR(A.acf.Aql));},_Mark:function(D){var B;C.Cd._Mark.call(
this,D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fx)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Il)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVg={OG:null,Fx:null,Il:null,C_:null,Dl:null,EL:null,Afo:null,Init:function(
aArg){var B;A.zX([this,this.BeX],[B=A._GetAutoObject(A.Device.Device),B.ASF,B.A0e
],0);A.zX([this,this.Adu],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY],0);A.zX([
this,this.Adu],[B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ],0);A.pe([this,this.
BeX],this);A.pe([this,this.Adu],this);},BeX:function(G){var AKZ=false;var AaO=false;
switch(A._GetAutoObject(A.Device.Device).Ak3){case 0:{AKZ=false;AaO=false;}break;
case 1:{AKZ=true;AaO=false;}break;case 2:{AKZ=false;AaO=true;}break;default:throw new
Error(BtF+A._GetAutoObject(A.Device.Device).Ak3.toFixed());}A._GetAutoObject(A.Device.
Helper).JW(this.Il,AKZ);A._GetAutoObject(A.Device.Helper).JW(this.C_,AaO);A._GetAutoObject(
A.Device.Helper).JW(this.Dl,AaO);A._GetAutoObject(A.Device.Helper).JW(this.EL,AaO
);},Adu:function(G){var F,CA;if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dl.Q,CA[
1].call(CA[0])))>12)(CA=this.Dl.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cd._Init.call(this,aArg);C.Ip._Init.call(this.OG={
I:this},0);C.BW._Init.call(this.Fx={I:this},0);C.AGA._Init.call(this.Il={I:this}
,0);C.Ip._Init.call(this.C_={I:this},0);C.Ip._Init.call(this.Dl={I:this},0);C.AvX.
_Init.call(this.EL={I:this},0);C.Afo._Init.call(this.Afo={I:this},0);this.__proto__=
C.AVg;var B;this.I8(A.aaR(A.acf.LinkTransponder));this.OG.H(AIE);this.OG.Aj(true
);this.OG.Z(true);this.OG.T(A.aaR(A.acf.A7t));this.OG.Bg(false);this.OG.F0(1);this.
OG.EV(365);this.OG.IM(A.aaR(A.acf.Ki));this.OG.I9(A.aaR(A.acf.GH));this.Fx.H(UV);
this.Fx.Aj(true);this.Fx.Z(true);this.Fx.T(A.aaR(A.acf.Aqj));this.Fx.Bg(true);this.
Il.H(Aaf);this.Il.Aj(true);this.Il.Z(true);this.Il.T(A.aaR(A.acf.AEg));this.Il.Bg(
false);this.C_.H(Alh);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.AqD
));this.C_.Bg(false);this.C_.F0(2);this.C_.EV(6);this.C_.IM(A.aaR(A.acf.OB));this.
C_.I9(A.aaR(A.acf.Ey));this.Dl.H(AcP);this.Dl.Aj(true);this.Dl.T(A.aaR(A.acf.Zm)
);this.Dl.Bg(true);this.Dl.F0(0);this.Dl.EV(12);this.Dl.IM(A.aaR(A.acf.OB));this.
Dl.I9(A.aaR(A.acf.Ey));this.EL.H(Ayi);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bg(false);this.EL.ArZ(A.aaR(A.acf.Aql));this.J(this.OG,0);this.J(this.Fx,0);this.
J(this.Il,0);this.J(this.C_,0);this.J(this.Dl,0);this.J(this.EL,0);this.OG.As([B=
A._GetAutoObject(A.Device.Device),B.A8I,B.Ba4]);this.Fx.As([B=this.Afo,B.B7,B.B8
]);this.Fx.CI(this.Afo);this.Il.Uj([B=A._GetAutoObject(A.Device.Device),B.Wt,B.AZ3
]);this.Il.Akw([B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyF]);this.C_.As([B=
A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Dl.As([B=A._GetAutoObject(A.Device.
Device),B.Ug,B.UZ]);this.EL.DB(A.aaL(A.ach.AjX));this.EL.OM([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UY]);this.EL.PN([B=A._GetAutoObject(A.Device.Device),B.Ug
,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.OG._Done();this.
Fx._Done();this.Il._Done();this.C_._Done();this.Dl._Done();this.EL._Done();this.
Afo._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.
OG._ReInit();this.Fx._ReInit();this.Il._ReInit();this.C_._ReInit();this.Dl._ReInit(
);this.EL._ReInit();this.Afo._ReInit();this.I8(A.aaR(A.acf.LinkTransponder));this.
OG.T(A.aaR(A.acf.A7t));this.OG.IM(A.aaR(A.acf.Ki));this.OG.I9(A.aaR(A.acf.GH));this.
Fx.T(A.aaR(A.acf.Aqj));this.Il.T(A.aaR(A.acf.AEg));this.C_.T(A.aaR(A.acf.AqD));this.
C_.IM(A.aaR(A.acf.OB));this.C_.I9(A.aaR(A.acf.Ey));this.Dl.T(A.aaR(A.acf.Zm));this.
Dl.IM(A.aaR(A.acf.OB));this.Dl.I9(A.aaR(A.acf.Ey));this.EL.ArZ(A.aaR(A.acf.Aql));
},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.OG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afo={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bgj],[B=A._GetAutoObject(A.Device.Device),B.ASF,B.A0e],0);A.pe([
this,this.Bgj],this);},Do:function(){return 3;},FX:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BI(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw9(E);},Bgj:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak3;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afo;this.Cf.Set(0,0);this.Cf.Set(1,1);this.Cf.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.I$={B6:null,IS:null,Cr:null,Amx:null,R$:null,Anl:null,AjB:null,Text:null,CX:
null,D6:0,LA:false,Ai:function(Ae){var B;A.acn.I$.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IS.Ar(true);else{this.IS.Ar(false);this.CX.Z(false);}},A4k:function(G
){var B;var Bd=this.Text.M;var Nv=0;var Nw=0;if(this.CX.Er[0]<Bd[0])Nv=Bd[0]-this.
CX.Er[0];if(this.CX.Er[0]>Bd[2])Nv=Bd[2]-this.CX.Er[0];if(this.CX.Er[1]<Bd[1])Nw=
Bd[1]-this.CX.Er[1];if(this.CX.EC[1]>Bd[3])Nw=Bd[3]-this.CX.EC[1];if(!!Nv||!!Nw)
this.Text.F_(A.abf(this.Text.Br,[Nv,Nw]));Nv=this.Text.Br[0];Nw=this.Text.Br[1];
var C3=[(B=this.Text.Db())[2]-B[0],B[3]-B[1]];if(C3[0]<=((B=this.Text.M)[2]-B[0]
))Nv=0;if(C3[1]<=((B=this.Text.M)[3]-B[1]))Nw=0;this.Text.F_([Nv,Nw]);},Amj:function(
G){if(!this.B6)return;var A3N=this.Text.AGN(this.D6);var pos=this.Text.Afd(A3N);
this.CX.DL(A.abe(pos,[0,this.B6.Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IS.Bw){this.IS.Ar(false);this.IS.Ar(true);}if(this.LA){A.pe([this,this.
A4k],this);this.LA=false;}},AAu:function(G){if(!this.B6)return;var EH=this.Text.
AGN(this.D6);if(this.Cr.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnT(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ACY(EH[1]).length,EH[1]];}}if(this.Cr.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnT(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cr.CO===4){var pos=this.Text.Afd(EH);var AaN=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.ATP(A.abe(pos,[0,AaN]));}if(this.Cr.CO===5
){var pos=this.Text.Afd(EH);var AaN=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.ATP(A.abf(pos,[0,AaN]));}var Vc=this.Text.AnT(EH);var Iv=this.Text.
String.charCodeAt(Vc)||0;if(((Iv===0x5E)||(Iv===0x7E))||(Iv===0x25))Vc=Vc-1;if(Vc
!==this.D6){this.D6=Vc;A.pe([this,this.Amj],this);this.LA=true;}},Beq:function(G
){if(!this.D6)return;var Iv=this.Text.String.charCodeAt(this.D6-1)||0;var CD=1;if(((
Iv===0x5E)||(Iv===0x7E))||(Iv===0x25))CD=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CD,CD));this.D6=this.D6-CD;this.LA=true;},AAv:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Iv=this.Text.String.charCodeAt(this.D6)||0;var CD=1;
if(Iv===0x25)CD=2;this.Text.R(A.ab1(this.Text.String,this.D6,CD));this.LA=true;}
,BeE:function(G){this.Text.R(A.abU(this.Text.String,BtG,this.D6));this.D6=this.D6+
1;this.LA=true;},Bes:function(G){var Iv=this.AjB.DP;var Auj=String.fromCharCode(
Iv);A.ab5("%c",Iv);if((((Iv===0x5E)||(Iv===0x7E))||(Iv===0xAD))||(Iv===0x25))Auj=
BtH+String.fromCharCode(Iv);this.Text.R(A.abU(this.Text.String,Auj,this.D6));this.
D6=this.D6+Auj.length;this.LA=true;},_Init:function(aArg){A.acn.I$._Init.call(this
,aArg);A.acl.TE._Init.call(this.IS={I:this},0);A.Core.BN._Init.call(this.Cr={I:this
},0);A.Core.BN._Init.call(this.Amx={I:this},0);A.Core.BN._Init.call(this.R$={I:this
},0);A.Core.BN._Init.call(this.Anl={I:this},0);A.Core.BN._Init.call(this.AjB={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C5._Init.call(this.CX={
I:this},0);this.__proto__=C.I$;var B;this.H(BtI);this.IS.B2=false;this.IS.Cw=true;
this.IS.Fl(500);this.IS.Uk(500);this.Cr.Filter=147;this.Cr.Bw=false;this.Amx.Filter=
151;this.R$.Filter=44;this.Anl.Filter=149;this.AjB.Filter=145;this.Text.AZ(0x3F);
this.Text.H(BtJ);this.Text.KS(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CX.DC(BtK);this.CX.DL(BtL);this.CX.A_y(2);this.CX.A_x(2);this.
CX.L(0xFF000000);this.CX.Z(false);this.J(this.Text,0);this.J(this.CX,0);this.IS.
Q=[B=this.CX,B.Fk,B.Z];this.Cr.BO=[this,this.AAu];this.Cr.D0=[this,this.AAu];this.
Amx.BO=[this,this.Beq];this.Amx.D0=[this,this.Beq];this.R$.BO=[this,this.AAv];this.
R$.D0=[this,this.AAv];this.Anl.BO=[this,this.BeE];this.Anl.D0=[this,this.BeE];this.
AjB.BO=[this,this.Bes];this.AjB.D0=[this,this.Bes];this.Text.Q1([this,this.Amj]);
this.Text.S(A.aaL(A.aci.ACL));this.B6=A.aaL(A.aci.ACL);},_Done:function(){this.__proto__=
A.acn.I$;this.IS._Done();this.Cr._Done();this.Amx._Done();this.R$._Done();this.Anl.
_Done();this.AjB._Done();this.Text._Done();this.CX._Done();A.acn.I$._Done.call(this
);},_ReInit:function(){A.acn.I$._ReInit.call(this);this.IS._ReInit();this.Cr._ReInit(
);this.Amx._ReInit();this.R$._ReInit();this.Anl._ReInit();this.AjB._ReInit();this.
Text._ReInit();this.CX._ReInit();},_Mark:function(D){var B;A.acn.I$._Mark.call(this
,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amx)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AU6={I$:null,DE:function(G
){switch(this.Cr.CO){case 6:A._GetAutoObject(A.Device.Device).AuO();break;case 7:
A._GetAutoObject(A.Device.Device).Aqn();break;case 4:A._GetAutoObject(A.Device.Device
).Ajz();break;case 5:A._GetAutoObject(A.Device.Device).Aqo();break;default:;}},Ev:
function(G){A._GetAutoObject(C.A$).Fv();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.I$._Init.call(this.I$={I:this},0);this.__proto__=C.AU6;this.H(Cc);this.
N.Z(true);this.Dq(C.AqZ);this.I$.H(E$);this.J(this.I$,0);this.Bb(this.I$);this.N.
CB=[this,this.Ev];this.N.CY(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.I$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.I$._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ATX={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AyM],[B=A._GetAutoObject(A.Device.Device),B.ASh,B.AZ0],0);},Wv:function(G){
if((!!this.Bj&&!!this.Bj.AX)&&(this.Bj.AX.Ca()>0)){if(this.AJA())A._GetAutoObject(
C.BH).Qw(A.aaR(A.acf.AOg),[this,this.AIF]);else A._GetAutoObject(C.BH).Qw(A.aaR(
A.acf.AOg),null);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.
AB6),[this,this.BaD]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).Qw(A.aaR(
A.acf.AG7),[this,this.A75]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).Qw(
A.aaR(A.acf.A5q),[this,this.BaC]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.
BH).Qw(A.aaR(A.acf.UnlinkTransponder),[this,this.Bny]);}else{A._GetAutoObject(C.
BH).XN(A.aaR(A.acf.AOg));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.
aaR(A.acf.AB6));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.
AG7));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.A5q));A.
_GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.A5P)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.
A58));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Anh)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(6);},Abs:function(){return C.
AB2;},Abt:function(){return C.ADh;},Q6:function(G){A._GetAutoObject(A.Device.Device
).An.Bl(A._GetAutoObject(A.Device.Helper).ACW());},HO:function(G){C.Q4.HO.call(this
,G);this.N.Cs(A.aaL(A.ach.AbC));this.N.Ck=[this,this.XB];this.N.FJ(A.jV);this.N.
C6(null);this.N.CV((A.aaR(A.acf.A5i)+Aah)+this.DataExportDestinationToString.BI(
A._GetAutoObject(A.Device.Device).VM));this.N.OO(false);this.N.OP(false);this.N.
I4.Dr(255);},AR6:function(G){A._GetAutoObject(A.Device.Device).Ds(0);var AiW=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A9(96,true,AiW.toFixed(),0,null);},AR7:function(G){A._GetAutoObject(A.Device.Device
).Ds(0);this.A5Y(this);},ASa:function(G){var B;A._GetAutoObject(A.Device.Device).
Ds(0);if(!A._GetAutoObject(A.Device.Device).VM&&!A._GetAutoObject(A.Device.Device
).Ut){A._GetAutoObject(A.Device.Device).A9(73,true,A.jV,0,[this,this.BeG]);return;
}if(A._GetAutoObject(A.Device.Device).Ard()===false){A.zX([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Aga]);return;}var AfX=null;switch(A._GetAutoObject(A.Device.Device
).VM){case 0:AfX=A._GetAutoObject(A.Device.Device).AnX(2);break;case 1:AfX=A._GetAutoObject(
A.Device.Device).AnX(3);break;default:throw new Error(BtM+A._GetAutoObject(A.Device.
Device).VM.toFixed());}if(AfX.An2){A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);this.Dz(A.aaR(A.acf.BnO));A._GetAutoObject(A.Device.Device).AqB(AfX);}else A._GetAutoObject(
A.Device.Device).A9(97,true,A.jV,0,null);},AJA:function(){var Azu=this.Bj.AX;if(
!Azu)return false;return true;},XB:function(G){A._GetAutoObject(A.Device.Device).
UpdateOverlayMenu(16);},_Init:function(aArg){C.Q4._Init.call(this,aArg);A.Device.
DataExportDestinationToString._Init.call(this.DataExportDestinationToString={I:this
},0);this.__proto__=C.ATX;this.Dq(C.APm);this.Init(aArg);},_Done:function(){this.
__proto__=C.Q4;this.DataExportDestinationToString._Done();C.Q4._Done.call(this);
},_ReInit:function(){C.Q4._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q4._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADh={Pw:null,I3:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Pw={I:this},0);A.acg.Ap._Init.call(this.I3={I:this},0);this.__proto__=
C.ADh;this.Eq.Z(false);this.DS.Z(false);this.Pw.H(BtN);this.Pw.L(A.jb.Text);this.
I3.H(BtO);this.I3.L(A.jb.Text);this.J(this.Pw,0);this.J(this.I3,0);this.Pw.Aw(A.
aaL(A.ach.AvD));this.I3.Aw(A.aaL(A.ach.Avy));},_Done:function(){this.__proto__=C.
Dc;this.Pw._Done();this.I3._Done();C.Dc._Done.call(this);},_ReInit:function(){C.
Dc._ReInit.call(this);this.Pw._ReInit();this.I3._ReInit();},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMR={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AAy],[B=A._GetAutoObject(A.Device.Device),B.AEs,B.AIJ],0);A.pe([this,this.
AAy],this);},Wv:function(G){if((!!this.Bj&&!!this.Bj.AX)&&(this.Bj.AX.Ca()>0)){if(
this.AJA())A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.AOf),[this,this.AIF]);else A._GetAutoObject(
C.BH).XN(A.aaR(A.acf.AOf));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).Qw(
A.aaR(A.acf.AB4),[this,this.BaD]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.
BH).Qw(A.aaR(A.acf.AG7),[this,this.A75]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(
C.BH).Qw(A.aaR(A.acf.A5p),[this,this.BaC]);}else{A._GetAutoObject(C.BH).XN(A.aaR(
A.acf.AOf));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.AB4
));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.AG7));A._GetAutoObject(
C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.A5p));}A._GetAutoObject(C.BH).Ft(
);A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.A5P)+A.aaR(A.acf.Colon));A._GetAutoObject(
C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.A58));A._GetAutoObject(C.BH).Ft(
);A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},Abs:function(){return C.ABY;},Abt:function(){return C.ADf;
},Q6:function(G){A._GetAutoObject(A.Device.Device).An.Bl(A._GetAutoObject(A.Device.
Helper).AOC());},HO:function(G){C.Q4.HO.call(this,G);this.N.Cs(A.aaL(A.ach.AbC));
this.N.Ck=[this,this.XB];this.N.FJ(A.jV);this.N.C6(null);this.N.CV((A.aaR(A.acf.
A5i)+String.fromCharCode(0x0A))+A.aaR(A.acf.Bhc));this.N.OO(false);this.N.OP(false
);this.N.I4.Dr(255);},AR6:function(G){A._GetAutoObject(A.Device.Device).Ds(0);var
AiW=A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(
A.Device.Device).A9(96,true,AiW.toFixed(),0,null);},AR7:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);this.A5X(this);},ASa:function(G){var B;A._GetAutoObject(A.
Device.Device).Ds(0);if(!A._GetAutoObject(A.Device.Device).Ut){A._GetAutoObject(
A.Device.Device).A9(73,true,A.jV,0,[this,this.BeG]);return;}if(A._GetAutoObject(
A.Device.Device).Ard()===false){A.zX([this,this.XC],[B=A._GetAutoObject(A.Device.
Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV,0,[this,
this.Aga]);return;}var AfX=A._GetAutoObject(A.Device.Device).AnX(0);if(AfX.An2){
A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();this.Dz(A.aaR(A.
acf.Bhd));A._GetAutoObject(A.Device.Device).AqB(AfX);}else A._GetAutoObject(A.Device.
Device).A9(70,true,A.jV,0,null);},AJA:function(){var Azu=this.Bj.AX;if(!Azu)return false;
var O;for(O=0;O<Azu.Ca();O++)if(A._GetAutoObject(A.Device.Helper).Aj6(Azu.AOQ(O,
34))===false)return true;return false;},XB:function(G){A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(17);},AAy:function(G){if(A._GetAutoObject(A.Device.Device
).Aqq===1)A.pe([this,this.A54],this);},_Init:function(aArg){C.Q4._Init.call(this
,aArg);A.Device.DataExportDestinationToString._Init.call(this.DataExportDestinationToString={
I:this},0);this.__proto__=C.AMR;this.Dq(C.AOV);this.Init(aArg);},_Done:function(
){this.__proto__=C.Q4;this.DataExportDestinationToString._Done();C.Q4._Done.call(
this);},_ReInit:function(){C.Q4._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q4._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListScreen"
};C.AOV={D5:function(G){C.Aer.D5.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdW(11));},_Init:function(aArg){C.Aer._Init.call(this,aArg);this.__proto__=
C.AOV;this.Text.R(A.aaR(A.acf.ABR));},_ReInit:function(){C.Aer._ReInit.call(this
);this.Text.R(A.aaR(A.acf.ABR));},_className:"Application::HeaderBirthRegistrationsList"
};C.APm={D5:function(G){C.Aer.D5.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdW(12));},_Init:function(aArg){C.Aer._Init.call(this,aArg);this.__proto__=
C.APm;this.Text.R(A.aaR(A.acf.AF$));},_ReInit:function(){C.Aer._ReInit.call(this
);this.Text.R(A.aaR(A.acf.AF$));},_className:"Application::HeaderPurchasedAnimalsList"
};C.AB2={Ka:0,AP:null,SO:null,Td:0,Init:function(aArg){},Bk:function(aSize){C.Ba.
Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.
abN(this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SO.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SO.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rf(this.
Ka));this.SO.R(A._GetAutoObject(A.acj.KK).ACN(this.Td));},Ce:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){this.Ka=this.AX.KN(Ad,26);this.Td=this.AX.HF(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CH._Init.call(this.SO={I:this},0);this.__proto__=C.AB2;
this.AP.H(AZV);this.AP.L(A.jb.Bc);this.SO.H(AZW);this.J(this.AP,0);this.J(this.SO
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SO.S(A.aaL(A.fl.Ak));
this.SO.A2(A.aaL(A.fl.Bh));this.SO.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SO._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SO._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SO.S(A.aaL(A.fl.Ak));this.SO.A2(A.
aaL(A.fl.Bh));this.SO.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SO)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUv={
AeS:null,Ab1:null,TM:null,KL:null,TK:null,NI:null,Tf:A.jV,Ai:function(Ae){var F;
C.SL.Ai.call(this,Ae);this.TM.L(this.V.AQ);var Apt=false;if((!this.Dj||!(F=this.
Dj,F[1].call(F[0])))&&!this.A8)Apt=true;this.TM.Z(Apt);this.Pp.Z(!Apt);this.VO.Z(
!Apt);this.QW.Z(!Apt);this.Yl.Z(!Apt);this.P0.Z(!Apt);},Adv:function(G){var B;var
F;if(!this.Tf.length){C.SL.Adv.call(this,G);return;}var BR=this.FU;var GB=A._GetAutoObject(
A.Device.AnN).Bfh(this.Tf);this.Tf=A.jV;if(!GB){A._GetAutoObject(A.Device.Device
).A9(101,true,A.jV,0,this.Ab1);A.pe(this.AeS,this);return;}if(this.Asi&&(GB>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).A9(102,true,A.jV,0,this.
Ab1);A.pe(this.AeS,this);return;}this.Ui(((B=(GB|0))<0)?B+0x100000000:B);if(this.
FU!==BR){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}if(!
!this.OF)A.pe(this.OF,this);},A2Y:function(G){if(this.Tf.length<10)this.Tf=this.
Tf+String.fromCharCode(this.KL.DP);},AR9:function(G){if((this.NI.DP===0x0D)||(this.
NI.DP===0x0A))this.Adv(this);else this.NI.NH=true;},AS$:function(E){if(A.aa0(this.
AeS,E))return;this.AeS=E;},ATa:function(E){if(A.aa0(this.Ab1,E))return;this.Ab1=
E;},_Init:function(aArg){C.SL._Init.call(this,aArg);A.acg.Text._Init.call(this.TM={
I:this},0);A.Core.BN._Init.call(this.KL={I:this},0);A.Core.BN._Init.call(this.TK={
I:this},0);A.Core.BN._Init.call(this.NI={I:this},0);this.__proto__=C.AUv;this.TM.
H(BtP);this.TM.I7(true);this.TM.A6(0x12);this.TM.R(A.aaR(A.acf.A5D));this.KL.Filter=
143;this.TK.Filter=149;this.NI.Filter=145;this.J(this.TM,0);this.TM.S(A.aaL(A.fl.
EK));this.KL.BO=[this,this.A2Y];this.TK.BO=[this,this.Bbr];this.NI.BO=[this,this.
AR9];},_Done:function(){this.__proto__=C.SL;this.TM._Done();this.KL._Done();this.
TK._Done();this.NI._Done();C.SL._Done.call(this);},_ReInit:function(){C.SL._ReInit.
call(this);this.TM._ReInit();this.KL._ReInit();this.TK._ReInit();this.NI._ReInit(
);this.TM.R(A.aaR(A.acf.A5D));this.TM.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SL._Mark.call(this,D);if((B=this.AeS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ab1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUz={AeS:null,Ab1:null,KL:null
,TK:null,NI:null,Tf:A.jV,IW:function(G){var F;if(!this.Tf.length){C.Q9.IW.call(this
,G);return;}if(this.Ash)return;if(!this.Tf.length)this.TK.NH=true;var BR=this.AM;
var GB=A._GetAutoObject(A.Device.AnN).BA0(this.Tf);this.Tf=A.jV;if(!GB){if((this.
Tf.length<13)&&!A._GetAutoObject(A.Device.Device).Ut)A._GetAutoObject(A.Device.Device
).A9(105,true,A.jV,0,this.Ab1);else A._GetAutoObject(A.Device.Device).A9(103,true
,A.jV,0,this.Ab1);A.pe(this.AeS,this);return;}this.By(GB);if(this.AM!==BR){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OF)A.pe(this.
OF,this);},A2Y:function(G){if(this.Ash)return;if(this.Tf.length<17)this.Tf=this.
Tf+String.fromCharCode(this.KL.DP);},AR9:function(G){if((this.NI.DP===0x0D)||(this.
NI.DP===0x0A))this.IW(this);else this.NI.NH=true;},AS$:function(E){if(A.aa0(this.
AeS,E))return;this.AeS=E;},ATa:function(E){if(A.aa0(this.Ab1,E))return;this.Ab1=
E;},_Init:function(aArg){C.Q9._Init.call(this,aArg);A.Core.BN._Init.call(this.KL={
I:this},0);A.Core.BN._Init.call(this.TK={I:this},0);A.Core.BN._Init.call(this.NI={
I:this},0);this.__proto__=C.AUz;this.Ar0(false);this.KL.Filter=143;this.TK.Filter=
149;this.NI.Filter=145;this.KL.BO=[this,this.A2Y];this.TK.BO=[this,this.Ati];this.
NI.BO=[this,this.AR9];},_Done:function(){this.__proto__=C.Q9;this.KL._Done();this.
TK._Done();this.NI._Done();C.Q9._Done.call(this);},_ReInit:function(){C.Q9._ReInit.
call(this);this.KL._ReInit();this.TK._ReInit();this.NI._ReInit();},_Mark:function(
D){var B;C.Q9._Mark.call(this,D);if((B=this.AeS)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ab1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APj={Aj2:null,Aj0:null,Gr:null,Q7:null,SG:null,C5:null,Init:function(aArg){var
B;A.zX([this,this.D5],[B=A._GetAutoObject(A.Device.Device),B.A8G,B.AFl],0);A.pe([
this,this.D5],this);},De:function(E){C.BS.De.call(this,E);this.Aj2.L(E);this.Aj0.
L(E);this.Q7.Zs(E);this.Gr.L(E);this.SG.Zs(E);},Ww:function(E){this.Q7.CT(E);this.
SG.CT(E);},D5:function(G){this.Q7.T(A._GetAutoObject(A.Device.Device).AvV.toFixed(
));A.pe([this,this.BCh],this);},BCh:function(G){var Ac8=A._GetAutoObject(A.Device.
Device).An.Filter;A._GetAutoObject(A.Device.Device).An.Bl(A._GetAutoObject(A.Device.
Helper).ACW());this.SG.T(A._GetAutoObject(A.Device.Device).An.Ca().toFixed());A.
_GetAutoObject(A.Device.Device).An.Bl(Ac8);},_Init:function(aArg){C.BS._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.call(this.Aj0={
I:this},0);A.acg.Ap._Init.call(this.Gr={I:this},0);C.D1._Init.call(this.Q7={I:this
},0);C.D1._Init.call(this.SG={I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);
this.__proto__=C.APj;this.Aj2.H(P5);this.Aj0.H(BtQ);this.Gr.H(BtR);this.Gr.L(A.jb.
CS);this.Q7.AZ(0x14);this.Q7.H(BtS);this.Q7.Zs(A.jb.Bm);this.Q7.CT(A.jb.Re);this.
Q7.Hh(2);this.Q7.Blv(0x11);this.SG.AZ(0x14);this.SG.H(BtT);this.SG.Zs(A.jb.Bm);this.
SG.CT(A.jb.Re);this.SG.Hh(2);this.C5.DC(AhQ);this.C5.DL(BtU);this.C5.L(A.jb.Bc);
this.J(this.Aj2,0);this.J(this.Aj0,0);this.J(this.Gr,0);this.J(this.Q7,0);this.J(
this.SG,0);this.J(this.C5,0);this.Aj2.Aw(A.aaL(A.ach.Avx));this.Aj0.Aw(A.aaL(A.ach.
APR));this.Gr.Aw(A.aaL(A.ach.Gr));this.Q7.S(A.aaL(A.fl.Bh));this.SG.S(A.aaL(A.fl.
Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BS;this.Aj2._Done();this.
Aj0._Done();this.Gr._Done();this.Q7._Done();this.SG._Done();this.C5._Done();C.BS.
_Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.Aj2._ReInit();
this.Aj0._ReInit();this.Gr._ReInit();this.Q7._ReInit();this.SG._ReInit();this.C5.
_ReInit();this.Q7.S(A.aaL(A.fl.Bh));this.SG.S(A.aaL(A.fl.Bh));},_Mark:function(D
){var B;C.BS._Mark.call(this,D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aj0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARy={Abg:null,Ael:null,VL:null,Init:function(aArg){this.Bb(this.Abg);},KR:function(
){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.XA];this.Bx.Ck=
null;this.Bx.Cl=[this,this.A21];this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(
A.ach.VZ));}return this.Bx;},AAr:function(G){var Aa=(C.Aji.isPrototypeOf(G)?G:null
);if(Aa===this.Abg)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Ael)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$X);},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Aji._Init.call(this.
Abg={I:this},0);C.Aji._Init.call(this.Ael={I:this},0);C.ARC._Init.call(this.VL={
I:this},0);this.__proto__=C.ARy;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.ABW));this.
Abg.H(IR);this.Abg.T(A.aaR(A.acf.AjF));this.Ael.H(P7);this.Ael.T(A.aaR(A.acf.AGg
));this.VL.H(Aae);this.VL.T(A.aaR(A.acf.A5a));this.J(this.Abg,0);this.J(this.Ael
,0);this.J(this.VL,0);this.Text.S(A.aaL(A.fl.Ak));this.Abg.AR=[this,this.AAr];this.
Ael.AR=[this,this.AAr];this.VL.ASP([B=A._GetAutoObject(A.Device.Device),B.AEw,B.
AIM]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fm;this.Abg._Done();this.
Ael._Done();this.VL._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.
call(this);this.Abg._ReInit();this.Ael._ReInit();this.VL._ReInit();this.Text.R(A.
aaR(A.acf.ABW));this.Abg.T(A.aaR(A.acf.AjF));this.Ael.T(A.aaR(A.acf.AGg));this.VL.
T(A.aaR(A.acf.A5a));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fm._Mark.
call(this,D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ael)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARx={AnimalTableFields:null,Ay:null,Y:
null,JM:null,CP:function(){this.AiH(this);},Init:function(aArg){A.zV([this,this.
AiH],this.AnimalTableFields,0);A.pe([this,this.AiH],this);},DE:function(G){C.Fm.
DE.call(this,G);this.MO(this);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.CB=[this,this.Ev];this.Bx.Ck=[this,this.A2Z];this.Bx.Cl=[this,this.
A3s];this.Bx.C6(A.aaL(A.ach.Aq$));this.Bx.Cs(A.aaL(A.ach.Aq4));this.Bx.CY(A.aaL(
A.ach.VZ));}return this.Bx;},Ev:function(G){this.AA2();this.XA(this);},AiH:function(
G){this.Ao3();var O;for(O=0;O<this.AnimalTableFields.NP();O=O+1){var Aap=A._GetAutoObject(
C.Amo).OD(O);this.A06(Aap);}this.J(this.JM,0);A.aaS([this,this.MO],this);},Fe:function(
G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);
this.Ay.Mv(-this.Y.Br[1]);},MO:function(G){var B;this.Y.Vt(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},A06:function(
G6){var Ay5=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Sa,0);Aa.T(Ay5.BI(G6));Aa.Aj(true);Aa.G0=G6;Aa.A9W(this.AnimalTableFields.NU(G6
));this.J(Aa,0);this.ZD(Aa);},Ao3:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===0x400))this.HN(AdK);}}
,AA2:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JM)){var Aa=(C.Sa.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G0);if(Aa.ASn())this.AnimalTableFields.
AUr(Aa.G0);}else A.ab5("%s",Aym);}X=X.Ah;}this.AnimalTableFields.Cq();},A2Z:function(
G){var B;var Aa=(C.Sa.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAj=(C.Sa.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAj){this.Ahw(AAj,Aa);A.pe([this,this.MO],this);}}},A3s:function(
G){var B;var Aa=(C.Sa.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAP=(C.Sa.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAP){this.Ahw(Aa,AAP);A.pe([this,this.MO],this);}}},AqI:function(
G){var B;A._GetAutoObject(A.Device.Device).Asm(this);A.pe([this,this.AiH],this);
},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Au3._Init.call(this.JM={I:this},0);
this.__proto__=C.ARx;this.H(Rk);this.Text.R(A.aaR(A.acf.AGg));this.Ay.H(Ir);this.
Y.H(Bar);this.Y.JP(1);this.JM.H(AH4);this.JM.Aj(true);this.JM.T(A.aaR(A.acf.A5Q)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JM,0);this.Y.El=[this,this.Fe];
this.JM.AR=[this,this.AqI];this.AnimalTableFields=A._GetAutoObject(C.Amo);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fm;this.Ay._Done();this.Y._Done();this.
JM._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JM._ReInit();this.Text.R(A.aaR(A.acf.AGg));this.
JM.T(A.aaR(A.acf.A5Q));this.CP();},_Mark:function(D){var B;C.Fm._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARw={Y:null,BZ:null,C$:null,CG:null,GM:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UL:null,Init:function(aArg){A.zX([this,this.AuI],this.BZ.Q,0);A.zX([
this,this.AMW],this.CG.Q,0);A.zX([this,this.AVK],this.GM.Q,0);A.zX([this,this.Avl
],this.C$.Q,0);this.Bb(this.BZ);},DE:function(G){C.Fm.DE.call(this,G);this.MO(this
);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.
XA];this.Bx.Ck=null;this.Bx.Cl=null;this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(
A.aaL(A.ach.VZ));}return this.Bx;},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(
0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MO:function(
G){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},AuI:function(G){var F;A._GetAutoObject(A.Device.Device
).EB((F=this.BZ.Q,F[1].call(F[0])));},AVK:function(G){var F;A._GetAutoObject(A.Device.
Device).Ng((F=this.GM.Q,F[1].call(F[0])));},Avl:function(G){var F;A._GetAutoObject(
A.Device.Device).JQ((F=this.C$.Q,F[1].call(F[0])));},AMW:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fm._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.XM._Init.call(this.BZ={
I:this},0);C.XM._Init.call(this.C$={I:this},0);C.XM._Init.call(this.CG={I:this},
0);C.XM._Init.call(this.GM={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},
0);C.Breed._Init.call(this.Breed={I:this},0);C.UM._Init.call(this.UL={I:this},0);
this.__proto__=C.ARw;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.AjF));this.Y.H(Bar
);this.Y.JP(1);this.BZ.H(AhV);this.BZ.Ar(true);this.BZ.Aj(true);this.BZ.T(A.aaR(
A.acf.Afp));this.C$.H(Aye);this.C$.Ar(true);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.
Afk));this.CG.H(Aoq);this.CG.Ar(true);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed
));this.GM.H(As6);this.GM.Ar(true);this.GM.Aj(true);this.GM.T(A.aaR(A.acf.Jd));this.
Ay.H(Ir);this.AnimalType.As(A._GetAutoObject(A.Device.Device).AnimalType);this.Gender.
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
UL._ReInit();this.Text.R(A.aaR(A.acf.AjF));this.BZ.T(A.aaR(A.acf.Afp));this.C$.T(
A.aaR(A.acf.Afk));this.CG.T(A.aaR(A.acf.Breed));this.GM.T(A.aaR(A.acf.Jd));},_Mark:
function(D){var B;C.Fm._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Ams={CD:0,Als:A.abi(17,0,null),OD:function(Hw){return this.Als.Get(Hw);},NP:
function(){return this.CD;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Als.Set(
O,0);this.CD=0;},J:function(Aaj){if(this.CD>=17)A.ab5("%s",BtV);else{this.Als.Set(
this.CD,Aaj);this.CD=this.CD+1;}},Cq:function(){},EM:function(Ah0){var AJW=Ah0.indexOf(
String.fromCharCode(0x2C),0);var A1t=A.jV;var O=0;this.CD=0;while(O<17)if(Ah0===
A.jV)O++;else{if(AJW===-1){A1t=Ah0;Ah0=A.jV;}else{A1t=A.abV(Ah0,AJW);Ah0=A.ab1(Ah0
,0,AJW+1);}var Aap=A.abZ(A1t,0,10)|0;if(this.Bjg(Aap)){this.Als.Set(this.CD,Aap);
this.CD=this.CD+1;O++;}AJW=Ah0.indexOf(String.fromCharCode(0x2C),0);}if(Ah0!==A.
jV)A.ab5("%s",BtW);},toString:function(){var B;var AAh=A.jV;var O;for(O=0;O<this.
CD;O=O+1){if(O>0)AAh=AAh+AH6;AAh=AAh+(((B=this.Als.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAh;},Contains:function(Aaj){var O;for(O=0;O<this.CD;O=O+1)if(this.Als.
Get(O)===Aaj)return true;return false;},Bjg:function(Aaj){return true;},_Init:function(
aArg){(this.Als=[]).__proto__=C.Ams.Als;this.__proto__=C.Ams;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AL2={AfL:null,Init:function(aArg){var B;A.
zX([this,this.Bel],[B=A._GetAutoObject(A.Device.Device),B.A7_,B.BaK],0);A.zX([this
,this.Bem],[B=A._GetAutoObject(A.Device.Device),B.A7$,B.BaL],0);A.pe([this,this.
Bel],this);A.pe([this,this.Bem],this);},Clear:function(){C.Ams.Clear.call(this);
this.AfL.Clear();},Cq:function(){A._GetAutoObject(A.Device.Device).ArD(this.AfL.
toString());A._GetAutoObject(A.Device.Device).ArE(this.toString());},Bel:function(
G){this.AfL.EM(A._GetAutoObject(A.Device.Device).ABz);A.we(this,0);},Bem:function(
G){this.EM(A._GetAutoObject(A.Device.Device).ABA);A.we(this,0);},NU:function(Aaj
){return this.AfL.Contains(Aaj);},AUr:function(Aaj){if(!this.NU(Aaj))this.AfL.J(
Aaj);},AOD:function(){return this.AfL.NP();},_Init:function(aArg){C.Ams._Init.call(
this,aArg);this.__proto__=C.AL2;this.AfL=A._NewObject(C.Ams,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Ams._Mark.call(this,D);if((B=this.AfL)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amo={_Init:function(){C.AL2._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARC={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hh(10);},Bk:function(aSize){C.T9.Bk.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.T9.
Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20);var GA=this.
Bo.Bw;var FN=A.jb.Ad9;var GQ=A.jb.Bm;if(this.Hf){FN=A.jb.Bm;GQ=A.jb.Text;}if(!G$
){this.Background.L(FN);this.V.L(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fq){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FN);this.V.L(GQ);}this.LI=G$;this.KE=Fq;this.Qn=GA;},_Init:function(
aArg){C.T9._Init.call(this,aArg);this.__proto__=C.ARC;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.ATW={YJ:null,AjK:null,KR:function(){if(
!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.XA];this.Bx.Ck=null;
this.Bx.Cl=null;this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.
Bx;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.XM._Init.call(this.
YJ={I:this},0);C.VM._Init.call(this.AjK={I:this},0);this.__proto__=C.ATW;var B;this.
H(J0);this.YJ.H(J0);this.YJ.T(A.aaR(A.acf.A5B));this.AjK.As(A._GetAutoObject(A.Device.
Device).VM);this.J(this.YJ,0);this.YJ.Wy(A.aaL(A.fl.Hr));this.YJ.Wz(A.aaL(A.fl.Hr
));this.YJ.As([B=this.AjK,B.B7,B.B8]);this.YJ.CI(this.AjK);this.AjK.BlI([B=A._GetAutoObject(
A.Device.Device),B.ASh,B.AZ0]);},_Done:function(){this.__proto__=C.OverlayMenu;this.
YJ._Done();this.AjK._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){
C.OverlayMenu._ReInit.call(this);this.YJ._ReInit();this.AjK._ReInit();this.YJ.T(
A.aaR(A.acf.A5B));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((
B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjK)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::PurchasedAnimalsListOverlayMenu"};C.VM={Abc:null,DataExportDestinationToString:
null,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.BI(aIndex);},DU:function(A7){return A7;},HH:function(
){return 1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Abc)(F=this.Abc
,F[2].call(F[0],E));},BlI:function(E){if(A.aaZ(this.Abc,E))return;if(!!this.Abc)
A.z$([this,this.ApN],this.Abc,0);this.Abc=E;if(!!this.Abc)A.zX([this,this.ApN],this.
Abc,0);A.pe([this,this.ApN],this);},ApN:function(G){var F;if(!!this.Abc)this.Q=(
F=this.Abc,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.VM;},
_Done:function(){this.__proto__=C.AC;this.DataExportDestinationToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Abc)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.AMQ={
YQ:null,Ak8:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.
CB=[this,this.XA];this.Bx.Ck=null;this.Bx.Cl=null;this.Bx.CV(A.jV);this.Bx.Cs(null
);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.XM._Init.call(this.YQ={I:this},0);C.AD4._Init.call(this.
Ak8={I:this},0);this.__proto__=C.AMQ;var B;this.H(J0);this.YQ.H(J0);this.YQ.T(A.
aaR(A.acf.Display));this.Ak8.As(A._GetAutoObject(A.Device.Device).Aqq);this.J(this.
YQ,0);this.YQ.Wy(A.aaL(A.fl.Hr));this.YQ.Wz(A.aaL(A.fl.Hr));this.YQ.As([B=this.Ak8
,B.B7,B.B8]);this.YQ.CI(this.Ak8);this.Ak8.BmN([B=A._GetAutoObject(A.Device.Device
),B.AEs,B.AIJ]);},_Done:function(){this.__proto__=C.OverlayMenu;this.YQ._Done();
this.Ak8._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.YQ._ReInit();this.Ak8._ReInit();this.YQ.T(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.YQ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ak8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.AD4={AbP:null,ListViewScopeToString:
null,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){var F;C.AC.As.call(this,E);if(!!this.AbP)(F=this.AbP,F[2].call(
F[0],E));},BmN:function(E){if(A.aaZ(this.AbP,E))return;if(!!this.AbP)A.z$([this,
this.ApN],this.AbP,0);this.AbP=E;if(!!this.AbP)A.zX([this,this.ApN],this.AbP,0);
A.pe([this,this.ApN],this);},ApN:function(G){var F;if(!!this.AbP)this.Q=(F=this.
AbP,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.AD4;},_Done:function(){this.__proto__=
C.AC;this.ListViewScopeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AbP)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};C.AU5={AB9:0,AB8:0,Ai:function(Ae){C.OV.Ai.call(this
,Ae);this.Background.L(this.AB8);this.V.L(this.AB9);},BlC:function(E){if(this.AB9===
E)return;this.AB9=E;this.Am();},BlB:function(E){if(this.AB8===E)return;this.AB8=
E;this.Am();},_Init:function(aArg){C.OV._Init.call(this,aArg);this.__proto__=C.AU5;
this.Ar(false);this.AB9=A.jb.Text;this.AB8=A.jb.CK;},_className:"Application::TextCaptionItem"
};C.AHf={WeightValuePrecisionToString:null,Init:function(aArg){var B;A.zX([this,
this.BdR],[B=A._GetAutoObject(A.Device.Device),B.A8H,B.Ba3],0);A.pe([this,this.BdR
],this);},Do:function(){return 3;},FX:function(aIndex){return this.WeightValuePrecisionToString.
BI(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).AwP(E);},BdR:function(G){this.Q=A._GetAutoObject(A.Device.Device).OK;A.abo([
this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.
WeightValuePrecisionToString._Init.call(this.WeightValuePrecisionToString={I:this
},0);this.__proto__=C.AHf;this.Cf.Set(0,0);this.Cf.Set(1,1);this.Cf.Set(2,2);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightValuePrecisionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightValuePrecisionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightValuePrecisionToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightValuePrecision"};C.AUx={Uz:null,A$n:A.jV,Init:function(
aArg){},Bk:function(aSize){C.BW.Bk.call(this,[aSize[0],80]);this.Background.H(A.
abK(this.Background.M,aSize));this.Uz.H([0,80,aSize[0],aSize[1]]);},Ai:function(
Ae){C.BW.Ai.call(this,Ae);this.Uz.L(this.V.AQ);},Bnf:function(E){if(this.A$n===E
)return;this.A$n=E;this.Uz.R(E);},_Init:function(aArg){C.BW._Init.call(this,aArg
);C.CH._Init.call(this.Uz={I:this},0);this.__proto__=C.AUx;this.H(AcO);this.Uz.H(
BtX);this.J(this.Uz,0);this.Uz.S(A.aaL(A.fl.Af));this.Uz.A2(A.aaL(A.fl.Ak));this.
Uz.Cu(null);this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.Uz._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.Uz._ReInit(
);this.Uz.S(A.aaL(A.fl.Af));this.Uz.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;
C.BW._Mark.call(this,D);if((B=this.Uz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupSubCaption"};C.Y6={MassDeregistrationCriterionToString:
null,Do:function(){return 2;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BI(this.C4(aIndex));},_Init:function(
aArg){C.Cm._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Y6;this.
Cf.Set(0,0);this.Cf.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANJ={Vf:null
,Y6:null,Y8:null,Mq:null,At5:0,Init:function(aArg){this.Bb(this.Y8);},Ai:function(
Ae){C.Ei.Ai.call(this,Ae);var BBQ=((A.aaR(A.acf.Aqx)+A.aaR(A.acf.Colon))+CQ)+this.
At5.toFixed();this.Mq.Bnf(BBQ);},CF:function(G){C.Ei.CF.call(this,G);A.zX([this,
this.ALl],this.Mq.Q,0);A.pe([this,this.ALl],this);},E3:function(G){C.Ei.E3.call(
this,G);A.z$([this,this.ALl],this.Mq.Q,0);},DJ:function(G){C.Ei.DJ.call(this,G);
if((this.AV===this.Mq)&&!this.At5)this.N.HQ.Dr(100);else this.N.HQ.Dr(255);},BeB:
function(G){if(this.At5>0)A._GetAutoObject(A.Device.Device).A9(108,true,this.At5.
toFixed(),0,[this,this.Bz5]);},ALl:function(G){var F;this.At5=A._GetAutoObject(A.
Device.Helper).BiE((F=this.Mq.Q,F[1].call(F[0])));this.Am();A.pe([this,this.MG],
this);},Bev:function(G){var B;if(!A._GetAutoObject(A.Device.Device).An.Ca()){A._GetAutoObject(
A.Device.Device).A9(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).Ard()===false){this.Vf=[this,this.Bev];A.zX([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Aga]);return;}var AfX=A._GetAutoObject(A.Device.Device).AnX(1);if(
AfX.An2)A._GetAutoObject(A.Device.Device).AqB(AfX);else A._GetAutoObject(A.Device.
Device).A9(88,true,A.jV,0,null);},Aga:function(G){var B;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===5)){A.z$([this,this.XC],[B=A.
_GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);this.Vf=null;}},XC:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AhN===3){A._GetAutoObject(A.Device.Device
).A9(74,false,A.jV,0,[this,this.Aga]);A.z$([this,this.XC],[B=A._GetAutoObject(A.
Device.Device),B.Wu,B.Xd],0);if(!!this.Vf)A.pe(this.Vf,this);this.Vf=null;}},Bz5:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===7))A.pe([this,this.BBL],this);},BBL:function(G){A._GetAutoObject(A.
Device.Helper).Bx3(this.Y6.Q);A._GetAutoObject(A.Device.Device).A9(109,true,this.
At5.toFixed(),0,null);A.pe([this,this.MG],this);A.pe([this,this.ALl],this);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Y6._Init.call(this.Y6={I:this},0);C.
Co._Init.call(this.Y8={I:this},0);C.AUx._Init.call(this.Mq={I:this},0);this.__proto__=
C.ANJ;var B;this.Dq(C.AOX);this.Y8.H(IR);this.Y8.Aj(true);this.Y8.T(A.aaR(A.acf.
A6e));this.Y8.Bg(false);this.Mq.H(BtY);this.Mq.Aj(true);this.Mq.T(A.aaR(A.acf.A$D
));this.Mq.Bg(true);this.Mq.A_n(A.aaR(A.acf.Ok));this.J(this.Y8,0);this.J(this.Mq
,0);this.Y8.AR=[this,this.Bev];this.Mq.AR=[this,this.BeB];this.Mq.AeT([this,this.
BeB]);this.Mq.As([B=this.Y6,B.B7,B.B8]);this.Mq.CI(this.Y6);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Y6._Done();this.Y8._Done();this.Mq._Done();C.
Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y6._ReInit(
);this.Y8._ReInit();this.Mq._ReInit();this.Y8.T(A.aaR(A.acf.A6e));this.Mq.T(A.aaR(
A.acf.A$D));this.Mq.A_n(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Y6).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Mq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AOX={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AOX;this.
Text.R(A.aaR(A.acf.XP));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(
A.aaR(A.acf.XP));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANM={
Vf:null,Y7:null,AbT:null,Init:function(aArg){this.Bb(this.Y7);A.pe([this,this.MG
],this);},Beu:function(G){var B;var Az2=A._GetAutoObject(A.Device.Device).ADQ();
switch(Az2){case 1:A._GetAutoObject(A.Device.Device).A9(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A9(91,true,UW,0,[this,this.BeO]);break;
case 2:{this.Vf=[this,this.Beu];A.zX([this,this.XC],[B=A._GetAutoObject(A.Device.
Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV,0,[this,
this.Aga]);}break;default:throw new Error(Bas+Az2.toFixed());}},Aga:function(G){
var B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5)){A.z$([this,this.XC],[B=A._GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);this.
Vf=null;}},XC:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhN===3){A.
_GetAutoObject(A.Device.Device).A9(74,false,A.jV,0,[this,this.Aga]);A.z$([this,this.
XC],[B=A._GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);if(!!this.Vf)A.pe(this.Vf
,this);this.Vf=null;}},BeQ:function(G){var B;var Az2=A._GetAutoObject(A.Device.Device
).ADR();switch(Az2){case 1:A._GetAutoObject(A.Device.Device).A9(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A9(95,true,A.jV,0,[this,this.Bz6
]);break;case 2:{this.Vf=[this,this.BeQ];A.zX([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Aga]);}break;case 3:A._GetAutoObject(A.Device.Device).A9(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A9(93,true,A.jV,0,null
);break;default:throw new Error(Bas+Az2.toFixed());}},BeO:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(At.Id){case 91:if(At.PopupState===
9)A.aaS([this,this.ByG],this);break;case 92:if(At.PopupState===9)A.aaS([this,this.
ByI],this);break;default:throw new Error(BtZ+At.Id.toFixed());}},ByG:function(G){
if(A._GetAutoObject(A.Device.Device).ACg()){var A2K=A._GetAutoObject(A.Device.Device
).An.QE();A._GetAutoObject(A.Device.Device).A9(80,true,A2K.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A9(82,true,A.jV,0,null);A.aaS([this,this.Bz1],
this);},ByI:function(G){if(A._GetAutoObject(A.Device.Device).AGl()){var A2K=A._GetAutoObject(
A.Device.Device).An.QE();A._GetAutoObject(A.Device.Device).A9(81,true,A2K.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A9(83,true,A.jV,0,null);A.aaS([
this,this.BAD],this);},Bz6:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A.pe([this,this.BBM],this);},BBM:function(
G){A._GetAutoObject(A.Device.Device).A9(92,true,UW,0,[this,this.BeO]);},BAD:function(
G){A._GetAutoObject(A.Device.Device).A9(92,false,A.jV,0,null);},Bz1:function(G){
A._GetAutoObject(A.Device.Device).A9(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.Co._Init.call(this.Y7={I:this},0);C.Co._Init.call(
this.AbT={I:this},0);this.__proto__=C.ANM;this.Dq(C.AO0);this.Y7.H(IR);this.Y7.Aj(
true);this.Y7.T(A.aaR(A.acf.ACg));this.Y7.Bg(false);this.AbT.H(P7);this.AbT.Aj(true
);this.AbT.T(A.aaR(A.acf.AGl));this.AbT.Bg(true);this.J(this.Y7,-1);this.J(this.
AbT,-1);this.Y7.AR=[this,this.Beu];this.AbT.AR=[this,this.BeQ];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ei;this.Y7._Done();this.AbT._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y7._ReInit();this.AbT.
_ReInit();this.Y7.T(A.aaR(A.acf.ACg));this.AbT.T(A.aaR(A.acf.AGl));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbT)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO0={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO0;this.Text.R(
A.aaR(A.acf.ACm));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACm));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.Tu={NW:null
,AT3:0,ADT:false,ADP:false,ADU:false,Al0:function(G){this.A5U(this);},AS7:function(
E){if(this.NW===E)return;this.NW=E;if(!this.NW)return;this.DO.AutoActions=E;A.zV([
this,this.BBv],this.NW,0);},AL3:function(){this.AL6(A.aaR(A.acf.A$L),[this,this.
BB2],[this,this.A8B,this.AFc]);this.AL6(A.aaR(A.acf.AGa),[this,this.BB0],[this,this.
A8y,this.AFa]);this.AL6(A.aaR(A.acf.An3),[this,this.BB1],[this,this.A8z,this.AFb
]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.BnJ)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BH).Ft();},AL6:function(Bwv,BxG,Bw0){if(!this.NW
)return;this.AL5(Bwv,BxG,Bw0);},BB2:function(G){this.AFc(!this.ADU);},BB0:function(
G){this.AFa(!this.ADP);},BB1:function(G){this.AFb(!this.ADT);},A30:function(ED,BwZ
){if(!this.NW)return;if(BwZ)this.NW.BgN(ED);else this.NW.Bn2(ED);this.NW.Cq();},
A4G:function(Ac5,Ac6,BxY){A._GetAutoObject(C.BH).AuA(Ac5,Ac6,[this,this.A8S,this.
ATi],BxY);},AGy:function(ED){if(!this.NW)return;this.NW.AGy(ED);this.NW.Cq();},AFc:
function(E){if(this.ADU===E)return;this.ADU=E;this.A30(256,E);A.abo([this,this.A8B
,this.AFc],0);},AFa:function(E){if(this.ADP===E)return;this.ADP=E;this.A30(2,E);
A.abo([this,this.A8y,this.AFa],0);},AFb:function(E){if(this.ADT===E)return;this.
ADT=E;this.A30(1,E);A.abo([this,this.A8z,this.AFb],0);},BBv:function(G){this.AFc(
this.NW.Contains(256));this.AFa(this.NW.Contains(2));this.AFb(this.NW.Contains(1
));if(this.NW.NP()>0)this.ATi(this.NW.OD(this.NW.NP()-1));},ATi:function(E){if(this.
AT3===E)return;this.AT3=E;A.abo([this,this.A8S,this.ATi],0);},A8B:function(){return this.
ADU;},A8y:function(){return this.ADP;},A8z:function(){return this.ADT;},A8S:function(
){return this.AT3;},_Init:function(aArg){C.GU._Init.call(this,aArg);this.__proto__=
C.Tu;},_Mark:function(D){var B;C.GU._Mark.call(this,D);if((B=this.NW)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvU={Q:null,Cq:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADN:
function(ED){switch(ED){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Kd:function(G){var F;if(!!this.Q)this.EM((F=
this.Q,F[1].call(F[0])));A.we(this,0);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,
0);if(!!E)A.pe([this,this.Kd],this);},AGy:function(ED){if(this.NP()>0)this.Axs(this.
NP()-1,ED);},BgN:function(ED){if(this.Contains(ED))return;if(this.CD>=17){A.ab5(
"%s",AH5);return;}var AzV=0;for(;(AzV<=this.NP())&&(this.OD(AzV)<ED);AzV++);var AA7=
this.NP()-1;this.J(this.OD(AA7));for(;AA7>AzV;AA7--)this.Axs(AA7,this.OD(AA7-1));
this.Axs(AzV,ED);},Bn2:function(ED){var index=this.DU(ED);if(index<0)return;for(;
index<(this.NP()-1);index++)this.Axs(index,this.OD(index+1));this.Axs(index,0);this.
CD--;},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.AvU;},_Mark:
function(D){var B;C.Vs._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.Av3={_Init:
function(){C.AvU._Init.call(this,0);var B;this.As([B=A._GetAutoObject(A.Device.Device
),B.A8L,B.Ba7]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Av4={_Init:function(){C.AvU._Init.call(this,0);var B;this.As([B=A._GetAutoObject(
A.Device.Device),B.A8M,B.Ba8]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AxY={_Init:function(){C.AvU._Init.call(this,0);var B;this.As([B=
A._GetAutoObject(A.Device.Device),B.A9i,B.Bbk]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ADj={QO:null,AjW:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.QO={I:this},0);A.acg.Ap._Init.
call(this.AjW={I:this},0);this.__proto__=C.ADj;this.Eq.H(Bt0);this.DS.H(Bt1);this.
QO.H(Bt2);this.QO.R(A.aaR(A.acf.Ud));this.QO.A6(0x11);this.QO.L(A.jb.Text);this.
AjW.H(AZS);this.AjW.L(A.jb.Text);this.J(this.QO,0);this.J(this.AjW,0);this.QO.S(
A.aaL(A.fl.Af));this.QO.A2(A.aaL(A.fl.Ak));this.QO.Cu(A.aaL(A.fl.Bh));this.AjW.Aw(
A.aaL(A.ach.Avw));},_Done:function(){this.__proto__=C.Dc;this.QO._Done();this.AjW.
_Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
QO._ReInit();this.AjW._ReInit();this.QO.R(A.aaR(A.acf.Ud));this.QO.S(A.aaL(A.fl.
Af));this.QO.A2(A.aaL(A.fl.Ak));this.QO.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.AB1={AP:null,SQ:null,OW:null,AKr:A.jV,Bd0:A.jV,Md:0,Init:function(aArg){},Bk:
function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OW.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OW.M[2]-1,0,this.OW.M[2]+1,
aSize[1]]);this.SQ.H([this.OW.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OW.L(this.V.AQ);this.SQ.L(this.V.AQ);this.T(this.AKr);this.
OW.R(this.Bd0);this.SQ.R(this.Md.toFixed());},Ce:function(Ad){if(!this.AX)return;
this.Hn=Ad;if(!!this.AX){var Ka=this.AX.KN(Ad,26);var A2C=A._GetAutoObject(A.Device.
Converter).Rf(Ka);this.AKr=A.abV(A2C,A2C.length-5);this.Bd0=A.ab2(A2C,5);if((A._GetAutoObject(
A.Device.Converter).ZY(Ka)===10)&&!(Math.trunc(Ka/10000000000)%100))this.AKr=A.ab1(
this.AKr,3,2);this.Md=this.AX.CE(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CH._Init.call(this.SQ={
I:this},0);C.CH._Init.call(this.OW={I:this},0);this.__proto__=C.AB1;this.V.H(Bt3
);this.AP.H(AZV);this.AP.L(A.jb.Bc);this.SQ.H(AZW);this.OW.H(Bt4);this.J(this.AP
,0);this.J(this.SQ,0);this.J(this.OW,0);this.V.S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(
A.fl.Bh));this.SQ.S(A.aaL(A.fl.Ak));this.SQ.A2(A.aaL(A.fl.Bh));this.SQ.Cu(A.aaL(
A.fl.Bh));this.OW.S(A.aaL(A.fl.Af));this.OW.A2(A.aaL(A.fl.Bh));this.OW.Cu(A.aaL(
A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();
this.SQ._Done();this.OW._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AP._ReInit();this.SQ._ReInit();this.OW._ReInit();this.V.
S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(A.fl.Bh));this.SQ.S(A.aaL(A.fl.Ak));this.SQ.A2(
A.aaL(A.fl.Bh));this.SQ.Cu(A.aaL(A.fl.Bh));this.OW.S(A.aaL(A.fl.Af));this.OW.A2(
A.aaL(A.fl.Bh));this.OW.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListNaisIdAnimalIdItem"};C.APq={Q:null,Init:function(aArg){var
B;this.AAX(this);this.As([B=A._GetAutoObject(A.Device.Device).An,B.Fj,B.Fn]);},AEF:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DQ(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
N3(FilterCriterion);var Ai3=this.Awd();if((Ai3.length>0)&&(Ai3!==UW)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,Ai3,0,6,false);Filter.CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeW(false);},AAX:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DQ(26,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this
,this.C2],this);},C2:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AW.AS0(A.jV);return;}var BbR=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DQ(26,4))?B:null);if(!BbR){this.AW.AS0(UW);this.AW.
AeW(true);}else this.AW.AS0(BbR.A4);},_Init:function(aArg){C.AjS._Init.call(this
,aArg);this.__proto__=C.APq;this.AW.AwI(0);this.AW.Bmz(true);this.AW.Di=[this,this.
AEF];this.Init(aArg);},_Mark:function(D){var B;C.AjS._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVi={Fx:null,C_:null,Dl:null,EL:null,AsK:null,Init:function(aArg){var B;A.zX([
this,this.BeY],[B=A._GetAutoObject(A.Device.Device),B.ASG,B.A0f],0);A.zX([this,this.
Adu],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY],0);A.zX([this,this.Adu],[B=
A._GetAutoObject(A.Device.Device),B.Ug,B.UZ],0);A.pe([this,this.BeY],this);A.pe([
this,this.Adu],this);},BeY:function(G){var AaO=false;switch(A._GetAutoObject(A.Device.
Device).An8){case 0:AaO=false;break;case 3:AaO=true;break;default:throw new Error(
Bt5+A._GetAutoObject(A.Device.Device).An8.toFixed());}A._GetAutoObject(A.Device.
Helper).JW(this.C_,AaO);A._GetAutoObject(A.Device.Helper).JW(this.Dl,AaO);A._GetAutoObject(
A.Device.Helper).JW(this.EL,AaO);},Adu:function(G){var F,CA;if(((F=this.C_.Q,F[1
].call(F[0]))+(CA=this.Dl.Q,CA[1].call(CA[0])))>12)(CA=this.Dl.Q,CA[2].call(CA[0
],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cd._Init.call(this
,aArg);C.BW._Init.call(this.Fx={I:this},0);C.Ip._Init.call(this.C_={I:this},0);C.
Ip._Init.call(this.Dl={I:this},0);C.AvX._Init.call(this.EL={I:this},0);C.AVh._Init.
call(this.AsK={I:this},0);this.__proto__=C.AVi;var B;this.I8(A.aaR(A.acf.UnlinkTransponder
));this.Fx.H(UV);this.Fx.Aj(true);this.Fx.Z(true);this.Fx.T(A.aaR(A.acf.Aqj));this.
Fx.Bg(true);this.C_.H(Alh);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.
AqD));this.C_.Bg(false);this.C_.F0(2);this.C_.EV(6);this.C_.IM(A.aaR(A.acf.OB));
this.C_.I9(A.aaR(A.acf.Ey));this.Dl.H(AcP);this.Dl.Aj(true);this.Dl.T(A.aaR(A.acf.
Zm));this.Dl.Bg(true);this.Dl.F0(0);this.Dl.EV(12);this.Dl.IM(A.aaR(A.acf.OB));this.
Dl.I9(A.aaR(A.acf.Ey));this.EL.H(Ayi);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bg(false);this.EL.ArZ(A.aaR(A.acf.Aql));this.J(this.Fx,0);this.J(this.C_,0);this.
J(this.Dl,0);this.J(this.EL,0);this.Fx.As([B=this.AsK,B.B7,B.B8]);this.Fx.CI(this.
AsK);this.C_.As([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Dl.As([B=A.
_GetAutoObject(A.Device.Device),B.Ug,B.UZ]);this.EL.DB(A.aaL(A.ach.AjX));this.EL.
OM([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.EL.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cd;this.Fx._Done();this.C_._Done();this.Dl._Done();this.EL._Done();this.AsK._Done(
);C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.Fx._ReInit(
);this.C_._ReInit();this.Dl._ReInit();this.EL._ReInit();this.AsK._ReInit();this.
I8(A.aaR(A.acf.UnlinkTransponder));this.Fx.T(A.aaR(A.acf.Aqj));this.C_.T(A.aaR(A.
acf.AqD));this.C_.IM(A.aaR(A.acf.OB));this.C_.I9(A.aaR(A.acf.Ey));this.Dl.T(A.aaR(
A.acf.Zm));this.Dl.IM(A.aaR(A.acf.OB));this.Dl.I9(A.aaR(A.acf.Ey));this.EL.ArZ(A.
aaR(A.acf.Aql));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.Fx).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVh={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bgo],[B=A._GetAutoObject(A.Device.Device),B.ASG,B.A0f],0);A.pe([
this,this.Bgo],this);},Do:function(){return 2;},FX:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BI(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw_(E);},Bgo:function(G){this.Q=A._GetAutoObject(A.Device.Device).An8;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVh;this.Cf.Set(0,0);this.Cf.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMD.__proto__=A.Core.Root;C.AB.__proto__=C.Abi;C.WH.__proto__=
A.Core.P;C.Ox.__proto__=A.Core.P;C.Zz.__proto__=A.acl.Gh;C.Ej.__proto__=A.Core.P;
C.X1.__proto__=C.AB;C.AUK.__proto__=C.AB;C.Avu.__proto__=C.AB;C.Q8.__proto__=C.AB;
C.Fi.__proto__=C.Hc;C.Ay.__proto__=A.Core.P;C.Cd.__proto__=C.AB;C.AqZ.__proto__=
C.BS;C.BS.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADb.__proto__=C.AmY;C.AGQ.
__proto__=C.DR;C.Co.__proto__=C.OV;C.Dt.__proto__=C.Eg;C.Ip.__proto__=C.Dt;C.BW.
__proto__=C.Dt;C.SL.__proto__=C.Dt;C.OI.__proto__=C.Cm;C.Rb.__proto__=C.AC;C.AUZ.
__proto__=C.Ba;C.F$.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GU.__proto__=C.AB;C.
AB0.__proto__=C.Ba;C.Ad7.__proto__=C.AB;C.Mi.__proto__=C.Ox;C.AUU.__proto__=C.AB;
C.AqY.__proto__=C.ADb;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUA.__proto__=C.Acp;C.EA.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asq.__proto__=A.Core.P;C.AGC.__proto__=C.Dt;C.CH.__proto__=A.Core.P;C.
AjR.__proto__=C.Yt;C.Amr.__proto__=C.Ra;C.Aht.__proto__=A.Core.P;C.Ei.__proto__=
C.AB;C.ATM.__proto__=C.AB;C.Ml.__proto__=C.Co;C.Anj.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abi;C.APG.__proto__=C.OverlayMenu;C.GG.__proto__=A.Core.P;C.Abi.__proto__=
A.Core.P;C.AUF.__proto__=A.acl.Aej;C.AmY.__proto__=C.BS;C.ADc.__proto__=C.AmY;C.
Ki.__proto__=C.AC;C.AUC.__proto__=C.Dt;C.AGb.__proto__=C.AB;C.HY.__proto__=C.AB;
C.Wp.__proto__=C.Arp;C.IG.__proto__=C.ADc;C.I0.__proto__=C.AB;C.AMb.__proto__=C.
AGb;C.AL9.__proto__=C.GU;C.ANr.__proto__=C.GU;C.Aen.__proto__=C.Co;C.Qy.__proto__=
C.Aen;C.APt.__proto__=C.BS;C.AjS.__proto__=C.BS;C.DF.__proto__=C.Ey;C.AW.__proto__=
A.Core.P;C.Ga.__proto__=C.AC;C.Afj.__proto__=C.BW;C.AT4.__proto__=C.AB;C.AbU.__proto__=
C.Co;C.T9.__proto__=C.Co;C.AND.__proto__=C.Cd;C.AU1.__proto__=C.Cd;C.ANQ.__proto__=
C.Cd;C.AUe.__proto__=C.Cd;C.WX.__proto__=A.Core.P;C.QR.__proto__=C.Fi;C.D1.__proto__=
A.Core.P;C.T5.__proto__=C.AB;C.AVz.__proto__=C.GU;C.AMc.__proto__=C.AxW;C.AVk.__proto__=
C.Cd;C.AeM.__proto__=C.AC;C.AxW.__proto__=C.AB;C.AVI.__proto__=C.Cd;C.AUB.__proto__=
C.Acp;C.ABx.__proto__=A.Graphics.Hv;C.Aqf.__proto__=C.AB;C.ARt.__proto__=A.Core.
P;C.Fm.__proto__=C.OverlayMenu;C.XM.__proto__=C.BW;C.Aji.__proto__=C.Co;C.ALV.__proto__=
C.Fm;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AL0.__proto__=C.Vs;C.AL1.
__proto__=C.Fm;C.Sa.__proto__=C.T9;C.AMI.__proto__=C.Vs;C.Wh.__proto__=C.Fi;C.Vp.
__proto__=A.Core.P;C.Kt.__proto__=A.Core.P;C.ARR.__proto__=C.HY;C.AT7.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANs.__proto__=C.Amr;C.Hc.__proto__=A.
Core.P;C.AVB.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aa2.
__proto__=C.Ga;C.AxO.__proto__=C.ABx;C.ATH.__proto__=C.OverlayMenu;C.AOx.__proto__=
A.Core.P;C.N0.__proto__=A.Core.P;C.ATI.__proto__=A.Core.P;C.AUE.__proto__=A.acl.
Aej;C.AkT.__proto__=C.Ip;C.Amu.__proto__=C.OverlayMenu;C.AB3.__proto__=C.Ba;C.Yu.
__proto__=C.AjS;C.AqH.__proto__=C.HY;C.Aco.__proto__=C.Dt;C.WeightRecordingScope.
__proto__=C.AC;C.AuF.__proto__=C.AB;C.AUD.__proto__=C.Ip;C.AL$.__proto__=C.AB;C.
Arp.__proto__=C.HY;C.AHa.__proto__=A.Core.P;C.AVE.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeO.__proto__=C.Eg;C.AvY.__proto__=C.AeO;C.SetTransponderScreen.__proto__=
C.Q8;C.ADk.__proto__=C.EA;C.AHe.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Me.__proto__=C.Q8;C.ALT.__proto__=C.Me;C.ManualActionScanScreen.__proto__=C.Me;
C.ALU.__proto__=A.Core.P;C.APx.__proto__=C.Dc;C.ADi.__proto__=C.Dc;C.TS.__proto__=
C.Dc;C.APz.__proto__=C.Dc;C.AM8.__proto__=C.Ba;C.M2.__proto__=C.Ba;C.AM6.__proto__=
C.Ba;C.Jo.__proto__=A.Core.P;C.AM5.__proto__=C.Ba;C.AmX.__proto__=C.TD;C.AF3.__proto__=
C.Axi;C.AkH.__proto__=C.Axi;C.Zy.__proto__=C.AkH;C.ANz.__proto__=C.OV;C.OV.__proto__=
C.Hc;C.APC.__proto__=C.EA;C.DS.__proto__=A.Core.P;C.AM2.__proto__=C.AjA;C.ADe.__proto__=
C.TT;C.Kh.__proto__=A.Core.P;C.AmF.__proto__=C.Ml;C.AOU.__proto__=C.Km;C.AutoRegistrationMode.
__proto__=C.AC;C.APD.__proto__=C.EA;C.Tx.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMn.__proto__=C.RT;C.AMB.__proto__=C.AaY;C.AMw.__proto__=C.AaY;C.AT6.__proto__=
C.Ba;C.APB.__proto__=C.EA;C.AMq.__proto__=C.AaY;C.IC.__proto__=C.IZ;C.RN.__proto__=
C.Fu;C.RR.__proto__=C.Fu;C.Tw.__proto__=C.JG;C.Qx.__proto__=C.Fu;C.Tv.__proto__=
C.JG;C.AL_.__proto__=C.Aqf;C.AQS.__proto__=C.Cd;C.AaY.__proto__=C.D9;C.JH.__proto__=
C.Cm;C.ARp.__proto__=C.Cd;C.AMl.__proto__=C.K_;C.AMm.__proto__=C.D9;C.AMj.__proto__=
C.K_;C.AMk.__proto__=C.K_;C.WJ.__proto__=C.Eg;C.AUy.__proto__=C.WJ;C.RS.__proto__=
C.Fu;C.APs.__proto__=C.IG;C.ANt.__proto__=C.AB;C.ANa.__proto__=C.Ad7;C.AL8.__proto__=
C.I0;C.AVy.__proto__=C.I0;C.AOW.__proto__=C.Km;C.APu.__proto__=C.Km;C.APy.__proto__=
C.TT;C.AM7.__proto__=C.AjA;C.TT.__proto__=C.Dc;C.Aqt.__proto__=A.acv.ACb;C.AjA.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AMT.__proto__=C.DR;C.O0.__proto__=C.DR;C.AqW.__proto__=
A.Core.P;C.AMs.__proto__=C.F$;C.AT_.__proto__=A.Core.P;C.K_.__proto__=C.D9;C.ANA.
__proto__=C.Cd;C.Au3.__proto__=C.Co;C.AC_.__proto__=C.BS;C.AC$.__proto__=C.BS;C.
Fu.__proto__=C.JG;C.AOA.__proto__=C.GU;C.AOz.__proto__=C.I0;C.AO_.__proto__=C.Km;
C.ADg.__proto__=C.Dc;C.ABZ.__proto__=C.Ba;C.AT5.__proto__=C.Aht;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.AR3.
__proto__=C.Tu;C.AR2.__proto__=C.I0;C.ADa.__proto__=C.Km;C.ABI.__proto__=C.Ga;C.
ALY.__proto__=C.Fm;C.AMa.__proto__=C.AuF;C.NewAnimalSetTransponderScreen.__proto__=
C.Asv;C.C7.__proto__=C.AC;C.OZ.__proto__=A.Core.P;C.RO.__proto__=C.Fu;C.RP.__proto__=
C.Fu;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARA.__proto__=C.OverlayMenu;
C.VL.__proto__=C.T9;C.AvX.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.Tx;
C.AnimalMultiInfoScreen.__proto__=C.Tx;C.AMp.__proto__=C.OverlayMenu;C.I5.__proto__=
A.Core.P;C.ALX.__proto__=C.GU;C.ALW.__proto__=C.I0;C.APr.__proto__=C.IG;C.AsF.__proto__=
C.OZ;C.Aq_.__proto__=C.OZ;C.AuZ.__proto__=C.AC;C.AMh.__proto__=C.AC;C.AGB.__proto__=
C.Eg;C.GZ.__proto__=A.Core.P;C.AQV.__proto__=C.HI;C.AVp.__proto__=C.X1;C.ARN.__proto__=
C.Wp;C.ADJ.__proto__=C.Lg;C.HI.__proto__=C.GZ;C.Lg.__proto__=C.GZ;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvO.__proto__=C.HI;C.AUw.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asv;C.ReasonOfLeaving.__proto__=C.AC;C.OS.__proto__=C.BW;C.AeR.__proto__=
C.Ek;C.ARG.__proto__=C.Ek;C.ARF.__proto__=C.Ek;C.Ek.__proto__=A.Core.P;C.Q9.__proto__=
C.Eg;C.AQW.__proto__=C.Lg;C.AvN.__proto__=A.Core.P;C.Ey.__proto__=A.Core.P;C.Fw.
__proto__=C.AB;C.AN_.__proto__=C.AB;C.AOb.__proto__=C.Fw;C.AOc.__proto__=C.Fw;C.
AqK.__proto__=C.Fw;C.Abu.__proto__=C.AjR;C.Km.__proto__=C.AjR;C.Avs.__proto__=C.
Abu;C.AO8.__proto__=C.Abu;C.AO7.__proto__=C.Abu;C.AO6.__proto__=C.BS;C.Aeu.__proto__=
C.EA;C.AmN.__proto__=C.Ba;C.Ajp.__proto__=C.IC;C.ACC.__proto__=A.Core.P;C.AkQ.__proto__=
A.Core.P;C.Ra.__proto__=C.AB;C.AU0.__proto__=C.Ra;C.AO9.__proto__=C.BS;C.Dc.__proto__=
C.EA;C.KO.__proto__=C.BS;C.AO2.__proto__=C.KO;C.AO4.__proto__=C.KO;C.Yo.__proto__=
C.AmN;C.Agr.__proto__=C.Hc;C.ANX.__proto__=C.GU;C.ANW.__proto__=C.I0;C.AO5.__proto__=
C.Km;C.Abp.__proto__=C.Aco;C.AjI.__proto__=C.Qy;C.ABT.__proto__=C.Qy;C.APw.__proto__=
C.Dc;C.AM4.__proto__=C.Ba;C.RQ.__proto__=C.Fu;C.AMi.__proto__=C.Fu;C.ANO.__proto__=
C.Ei;C.ANP.__proto__=C.Ei;C.AO3.__proto__=C.KO;C.Nc.__proto__=C.AbU;C.ANK.__proto__=
C.Ei;C.AOY.__proto__=C.KO;C.PK.__proto__=C.Co;C.Sb.__proto__=C.AB;C.AN$.__proto__=
C.Sb;C.AOa.__proto__=C.Sb;C.AOd.__proto__=C.AqK;C.AN8.__proto__=C.Fw;C.AaX.__proto__=
C.IC;C.Pi.__proto__=C.IC;C.AMu.__proto__=C.Amu;C.ARn.__proto__=C.T5;C.ARm.__proto__=
C.T5;C.ARY.__proto__=C.Tu;C.ARX.__proto__=C.I0;C.APl.__proto__=C.Km;C.Q4.__proto__=
C.GU;C.AUf.__proto__=C.I0;C.Aer.__proto__=C.Yt;C.ABY.__proto__=C.Ba;C.ADf.__proto__=
C.Dc;C.APn.__proto__=C.BS;C.Aa0.__proto__=C.NE;C.XU.__proto__=C.NE;C.RT.__proto__=
C.D9;C.XV.__proto__=C.RT;C.XS.__proto__=C.IB;C.AaV.__proto__=C.IB;C.XR.__proto__=
C.IB;C.AaU.__proto__=C.IB;C.AMr.__proto__=C.AB;C.IB.__proto__=C.IZ;C.IZ.__proto__=
C.Hc;C.NE.__proto__=C.Fu;C.Axh.__proto__=C.Zy;C.ANy.__proto__=C.AmF;C.Axj.__proto__=
C.Zy;C.ATU.__proto__=C.Cd;C.ATS.__proto__=C.Ek;C.AQT.__proto__=C.Lg;C.ATT.__proto__=
C.Ek;C.NewMenu.__proto__=C.AB;C.ARO.__proto__=C.HY;C.AMt.__proto__=C.Amu;C.AMJ.__proto__=
C.Vs;C.JG.__proto__=C.IZ;C.APp.__proto__=C.Yu;C.Abo.__proto__=C.Cm;C.APA.__proto__=
C.EA;C.MotherScanScreen.__proto__=C.Me;C.APo.__proto__=C.AqY;C.Jc.__proto__=A.Core.
P;C.APk.__proto__=C.BS;C.SetSaveNaisIdScreen.__proto__=C.Q8;C.ANY.__proto__=C.AqH;
C.UL.__proto__=C.Cm;C.UM.__proto__=C.UL;C.AcK.__proto__=C.UL;C.AdS.__proto__=C.AC;
C.AGA.__proto__=C.Eg;C.ANN.__proto__=C.Ei;C.AO1.__proto__=C.KO;C.ANL.__proto__=C.
Ei;C.AOZ.__proto__=C.KO;C.Am0.__proto__=C.TS;C.APv.__proto__=C.TS;C.Amz.__proto__=
C.M2;C.AM3.__proto__=C.M2;C.ARH.__proto__=C.AeR;C.Yt.__proto__=C.BS;C.Acp.__proto__=
C.BW;C.FE.__proto__=C.AC;C.AMx.__proto__=C.FE;C.AMy.__proto__=C.FE;C.AMe.__proto__=
C.I0;C.TD.__proto__=C.BW;C.ARQ.__proto__=C.AB;C.Asv.__proto__=C.SetTransponderScreen;
C.ADK.__proto__=C.HI;C.Asw.__proto__=C.OS;C.Axu.__proto__=C.OS;C.Acs.__proto__=C.
Cm;C.AVO.__proto__=C.Tu;C.AVN.__proto__=C.I0;C.AQX.__proto__=A.Core.P;C.AQU.__proto__=
C.HI;C.ACH.__proto__=C.Abp;C.LW.__proto__=A.Core.P;C.AUd.__proto__=C.Cd;C.AUc.__proto__=
C.Cd;C.AVg.__proto__=C.Cd;C.Afo.__proto__=C.Cm;C.I$.__proto__=A.acn.I$;C.AU6.__proto__=
C.AB;C.ATX.__proto__=C.Q4;C.ADh.__proto__=C.Dc;C.AMR.__proto__=C.Q4;C.AOV.__proto__=
C.Aer;C.APm.__proto__=C.Aer;C.AB2.__proto__=C.Ba;C.AUv.__proto__=C.SL;C.AUz.__proto__=
C.Q9;C.APj.__proto__=C.BS;C.ARy.__proto__=C.Fm;C.ARx.__proto__=C.Fm;C.ARw.__proto__=
C.Fm;C.AL2.__proto__=C.Ams;C.ARC.__proto__=C.T9;C.ATW.__proto__=C.OverlayMenu;C.
VM.__proto__=C.AC;C.AMQ.__proto__=C.OverlayMenu;C.AD4.__proto__=C.AC;C.AU5.__proto__=
C.OV;C.AHf.__proto__=C.Cm;C.AUx.__proto__=C.BW;C.Y6.__proto__=C.Cm;C.ANJ.__proto__=
C.Ei;C.AOX.__proto__=C.KO;C.ANM.__proto__=C.Ei;C.AO0.__proto__=C.KO;C.Tu.__proto__=
C.GU;C.AvU.__proto__=C.Vs;C.ADj.__proto__=C.Dc;C.AB1.__proto__=C.Ba;C.APq.__proto__=
C.AjS;C.AVi.__proto__=C.Cd;C.AVh.__proto__=C.Cm;};C._ReInit=function(){var B;if((
B=C.Axy._this))B._ReInit(),C.Axy._ReInit.call(B);if((B=C.Axz._this))B._ReInit(),
C.Axz._ReInit.call(B);if((B=C.A$._this))B._ReInit(),C.A$._ReInit.call(B);if((B=C.
Ph._this))B._ReInit(),C.Ph._ReInit.call(B);if((B=C.AutoActions._this))B._ReInit(
),C.AutoActions._ReInit.call(B);if((B=C.Aff._this))B._ReInit(),C.Aff._ReInit.call(
B);if((B=C.BH._this))B._ReInit(),C.BH._ReInit.call(B);if((B=C.WD._this))B._ReInit(
),C.WD._ReInit.call(B);if((B=C.Asx._this))B._ReInit(),C.Asx._ReInit.call(B);if((
B=C.AnW._this))B._ReInit(),C.AnW._ReInit.call(B);if((B=C.DO._this))B._ReInit(),C.
DO._ReInit.call(B);if((B=C.AuN._this))B._ReInit(),C.AuN._ReInit.call(B);if((B=C.
Amo._this))B._ReInit(),C.Amo._ReInit.call(B);if((B=C.Av3._this))B._ReInit(),C.Av3.
_ReInit.call(B);if((B=C.Av4._this))B._ReInit(),C.Av4._ReInit.call(B);if((B=C.AxY.
_this))B._ReInit(),C.AxY._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Axy._this
)&&(B._cycle!=D))B._Done(C.Axy._this=null);if((B=C.Axz._this)&&(B._cycle!=D))B._Done(
C.Axz._this=null);if((B=C.A$._this)&&(B._cycle!=D))B._Done(C.A$._this=null);if((
B=C.Ph._this)&&(B._cycle!=D))B._Done(C.Ph._this=null);if((B=C.AutoActions._this)&&(
B._cycle!=D))B._Done(C.AutoActions._this=null);if((B=C.Aff._this)&&(B._cycle!=D)
)B._Done(C.Aff._this=null);if((B=C.BH._this)&&(B._cycle!=D))B._Done(C.BH._this=null
);if((B=C.WD._this)&&(B._cycle!=D))B._Done(C.WD._this=null);if((B=C.Asx._this)&&(
B._cycle!=D))B._Done(C.Asx._this=null);if((B=C.AnW._this)&&(B._cycle!=D))B._Done(
C.AnW._this=null);if((B=C.DO._this)&&(B._cycle!=D))B._Done(C.DO._this=null);if((
B=C.AuN._this)&&(B._cycle!=D))B._Done(C.AuN._this=null);if((B=C.Amo._this)&&(B._cycle
!=D))B._Done(C.Amo._this=null);if((B=C.Av3._this)&&(B._cycle!=D))B._Done(C.Av3._this=
null);if((B=C.Av4._this)&&(B._cycle!=D))B._Done(C.Av4._this=null);if((B=C.AxY._this
)&&(B._cycle!=D))B._Done(C.AxY._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */