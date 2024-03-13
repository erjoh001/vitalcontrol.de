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
IQ=[6,15,14,19];var Ip=[6,9,14,13];var O2=[209,7,229,37];var P1=[0,40,240,320];var
P2=[0,228,240,298];var CQ=" ";var E$=[0,40,240,280];var Lu=[0,40,232,280];var P3=[
0,40,116,160];var JZ=[114,40,230,160];var N_=[0,160,116,280];var P4=[116,160,232
,280];var MF=[0,280,116,400];var S4=[116,280,232,400];var UO=[0,400,116,520];var
Z5=[116,400,232,520];var W1=[-1,520,115,640];var Iq=[232,40,240,280];var UP=[5,40
,235,120];var Z6=[120,140,210,230];var W2=[20,140,110,230];var Z7=[0,0,116,120];
var W3=[0,0,120,120];var Z8=[0,0,116,45];var Z9=[0,0,8,200];var UQ=[0,0,8,20];var
W4=[30,0,210,40];var P5=[0,0,40,40];var Z_=[7,8,200,40];var O3=[0,0,200,40];var Ri=[
6,1];var W5="ERROR: Invalid value for ItemHighlighting";var W6=[10,10,40,30];var
W7=[0,0,120,40];var W8=[60,0,180,40];var Z$=[120,0,240,40];var W9=[0,0,100,40];var
W_=[83,0,157,40];var S5=[140,0,240,40];var UR=[0,0,20,40];var US=[220,0,240,40];
var AcN=[0,0,300,30];var S6=[0,30,300,60];var Aaa=[0,60,300,90];var Afx=[0,90,300
,120];var Aab=[0,100,300,110];var W$=[0,50,300,60];var Aac=[0,30,300,40];var Aad=
"*";var AhQ=[40,40];var J0=[0,0,240,80];var Aae=[0,0,240,50];var Lv="Cap";var AhR=[
0,40,40,80];var Aog=[200,40,240,80];var N$=[30,40,210,80];var Xa="--";var Aoh="%d";
var AhS="%m";var AhT="%Y";var AcO=" (";var UT=[0,0,232,80];var Aoi="Date";var Aoj=[
48,40,88,78];var Aok=[39,40,79,80];var Aol=[80,44,87,77];var Afy=".";var Ala=[88
,44,120,77];var Ax0=[120,44,127,77];var Ax1=[127,44,191,77];var O4=[0,0,80,40];var
Rj="Text";var Ax2=[430,102,430,102];var UU=[0,0,240,240];var AsS=[232,0,240,240];
var Ax3=[0,10,240,240];var Ax4="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ax5="Unhandled option";
var Aom=[0,80,240,280];var Afz="Unhandled animal list action";var Aon="Animal list content not handled.";
var IR=[0,40,240,80];var Aoo="Set Selected";var Xb="Unhandled AnimalListInfoItemMode ";
var Alb=" %%";var AsT=[0,180,240,220];var AsU=[82,127,167,150];var AsV="Group";var
AsW=[77,91,167,124];var Alc=[0,0,90,33];var AsX=[4,4,18,29];var Ax6=[20,4,34,29];
var Ax7=[36,4,50,29];var Ax8=[52,4,66,29];var AVS=[68,4,82,29];var AsY="ERROR: Unhandled Device::SyncState";
var Ax9=":\n";var P6="{1}";var Ax_="{2}";var AVT=[0,49,240,109];var AVU=[0,170,240
,243];var AVV=[0,110,240,170];var AVW=[20,243,220,268];var AHi=[30,8];var AHj="\u2265 ";
var AfA=[0,0,240,160];var Aop=[0,0,0,0];var AVX=[0,0,240,66];var AHk=[10,0,76,66
];var Ald=[33,33];var AHl=[87,0,153,66];var AHm=[164,0,230,66];var AHn="No statistics available";
var AVY="in this environment.";var AVZ=" fps";var AV0="CPU: - %%";var AcP=[0,0,240
,120];var AV1=[130,0,237,20];var AHo=[20,0,120,20];var AsZ=[0,20,240,40];var AHp=[
40,20,100,40];var AHq=[100,20,240,40];var Ax$=[0,40,240,60];var AHr=[40,40,100,60
];var Aya=[100,40,240,60];var AV2=[0,60,50,80];var AV3=[100,60,240,80];var AV4=[
0,80,50,100];var AV5=[100,80,240,100];var AHs=[0,100,50,120];var AV6=[100,100,240
,120];var O5=[5,5,15,15];var Ayb="%H";var AV7="%M";var AV8="Time";var AV9=[79,40
,119,78];var AV_=[125,40,164,80];var AV$=[86,40,126,80];var AWa=":";var AWb=[75,
40,115,80];var Ayc=[0,0,240,150];var As0=[60,0,155,40];var As1=[30,0,65,40];var AWc=[
60,0,100,40];var AWd=[88,0,128,40];var AWe=[60,0,71,40];var AWf=[60,0,74,40];var
AHt=[90,0,123,40];var AWg=[120,0,161,40];var AHu=[120,0,165,40];var AHv=[60,0,88
,40];var AHw=[60,0,95,40];var AWh="Did not expect iterator bigger than number of records";
var AHx=[20,0,240,20];var AHy=[0,38,240,40];var AWi=[0,0,8,4];var Rk=[0,0,240,280
];var Xc=[0,280,240,320];var AWj="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWk="]";var AWl="ERROR: Cannot find closing bracket \'}\' in text [";var AWm=
"] opened at index ";var AWn="#";var AWo="ERROR: Invalid parameter: {";var AWp="}";
var AhU=[20,20];var AHz=[0,12];var AWq="ERROR: Not expected Application::FooterFocus, ";
var AWr="%M:%S";var AHA=[30,150,207,170];var AHB=[20,70,217,194];var Ayd="Unhandled item.";
var P7=[0,80,240,120];var AWs="Unhandled Overlay Menu ";var AWt="Invalid bootloader message: ";
var AWu="Unknown USBState: ";var As2="Invalid fader";var AWv=[2,4,32,40];var AWw=[
29,4,80,40];var AWx=[120,4,200,40];var AWy=[80,0,114,40];var AWz="-1";var AWA="< ";
var As3=[0,0,232,40];var AWB=[22,40,180,80];var AWC=[2,40,22,80];var AWD=[23,40,
163,80];var AWE=[210,40,230,80];var AWF=[164,40,210,80];var AWG=[169,43,205,77];
var AWH="ERROR: No outlet assigned";var AWI="Unhandled screen";var AWJ="ERROR: Cannot cache null screen.";
var AWK="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHC="Untreated Rating Method type!";var Ale="Unhandled animal type";var AWL=[
5,60,235,140];var AWM=[0,130,240,196];var AWN=[49,240,229,280];var Aye="Implement in derived classes!";
var Alf="Implement in derived class";var AhV=[0,40,230,120];var Ayf=[0,120,230,200
];var Aoq=[0,200,230,280];var AhW=[0,280,230,360];var AWO=[0,360,230,440];var Ayg=[
230,40,238,280];var AHD="WARNING: Unhandled filter field: ";var AfB="Should not happen.";
var AHE="Invalid Boolean item";var Aaf=[0,120,240,160];var Alg=[0,160,240,200];var
Aor=[0,200,240,240];var AWP=[1152,11,1392,51];var AWQ=[1152,51,1392,91];var AWR=[
1152,91,1392,131];var AWS=[1152,131,1392,171];var AWT=[1152,171,1392,211];var As4=[
0,240,240,280];var AHF=[10,0,240,40];var AHG=[190,0,230,40];var AWU=[60,3,95,39];
var AWV=[95,4,200,40];var AWW=[3,3];var AWX=[6,6];var AWY=[59,5,197,35];var AWZ=[
59,2,200,38];var AW0=[3,2,43,42];var AW1=[0,17,43,40];var AW2=[50,40];var AW3=[50
,0];var AW4="Illegal shifting direction";var Ayh=[0,0,160,30];var AHH=[0,0,25,30
];var AHI=[27,0,52,30];var AHJ=[54,0,79,30];var AHK=[81,0,106,30];var AHL=[108,0
,133,30];var AHM=[135,0,160,30];var AW5="Internal queue error";var AW6="ERROR: No corresponding Id ";
var AW7=" found.";var AW8="ERROR: Error in range test";var AW9=[120,67,210,157];
var AW_=[0,40,240,70];var AW$=[20,67,110,157];var Ayi=[0,160,240,280];var AHN=[20
,77,90,147];var AXa=[0,0,210,40];var AHO=[195,0,235,40];var AhX=[0,40,232,120];var
UV=[0,120,232,200];var AXb=[0,40,232,200];var Aag=[0,200,232,280];var AXc=[0,320
,240,400];var AXd=[0,120,53,200];var Alh=[0,280,232,360];var Aah="%%";var AcQ=[0
,360,232,440];var Ayj=[0,440,232,520];var AXe=[0,80,207,120];var Oa=")";var AHP=
"/";var AXf=[5,0,88,30];var AHQ=[88,0,240,30];var AXg="276000312345678";var AHR=[
5,30,100,60];var AHS=[100,30,240,60];var AXh="Manufacturer";var AXi="Country";var
AXj=[5,60,240,90];var AXk="Niedersachsen";var AXl=[5,90,145,120];var AXm=[140,90
,240,120];var AXn="Protocol";var AXo=[0,0,120,100];var AHT=[0,40,116,120];var AXp=[
40,80,92,107];var AHU=[0,0,50,23];var AHV="ERROR: Unhandled Device::MeasureState";
var Ayk=[0,120,240,280];var AXq=[178,159,248,203];var AXr=[10,145,170,225];var AXs=[
0,61,240,101];var AXt=[0,0,40,23];var AHW=[101,113,141,136];var AXu=[101,235,141
,258];var AXv=[69,288,101,313];var AXw=[0,40,240,200];var As5=[0,200,240,280];var
As6=[0,280,240,360];var AHX="\u2264 ";var AXx=[0,80,94,160];var AXy=[94,80,184,160
];var AXz=[184,80,240,160];var AXA=[197,105,231,139];var AXB=[105,101,173,127];var
AXC=[7,101,75,127];var AXD=[94,125,184,151];var AXE=[2,125,92,151];var AHY=[0,70
,240,101];var AXF=[0,106,240,280];var Ayl=[30,40,240,70];var AHZ=[0,40,30,70];var
AXG="\u278B";var AXH=[0,0,240,175];var AXI=[0,0,232,175];var AXJ=[232,0,240,175];
var AXK="Text Here !";var AXL=[200,0,240,40];var AH0="1";var AH1="2";var AH2="3";
var AH3="4";var Aym=[0,360,232,400];var Ayn="ERROR: invalid item class.";var AH4=[
10,220,250,260];var AXM=[185,0,225,40];var AH5="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXN="ERROR: Received more actions than expected!";var AH6=", ";var AXO=
"ERROR: Cannot set action at position=";var AXP=". Current elements:";var AXQ=", max elements:";
var AXR="17";var AXS=[0,0,58,58];var AXT=[0,0,60,60];var AXU=[30,0,58,20];var AXV=[
7,6,25,24];var AXW=[30,60,130,160];var AXX=[0,0,28,20];var AXY=[4,3,40,24];var AXZ=[
0,0,42,27];var Ayo=[0,0,17,17];var AX0="Unknown direction of counting enum value: ";
var AX1="Unknown id generation method enum value: ";var Ayp="Invalid animal id generation method: ";
var As7="Unhandled popup id";var UW="0";var As8=";";var AX2=[0,400,230,480];var AX3=[
5,120,235,200];var AX4=[0,640,230,760];var AH7=[0,0,300,200];var AX5=[20,40,220,
80];var AH8=[20,80,220,280];var AX6=[140,0,188,40];var AX7="ERROR: Row containing birth weight could not be loaded";
var AX8=[0,440,230,520];var As9="ID";var AX9=[40,40,198,70];var AX_="Extra info: ";
var AH9=" -";var AX$=[0,0,230,120];var AYa=[0,0,230,40];var AYb=[0,80,230,120];var
AYc="\xB0Brix";var AcR=[0,320,230,400];var AYd=[0,410,230,490];var AYe="ERROR: aNumberOfDays can not be < 0 ";
var AYf="{WEIGHTGAIN} ";var AYg="\xB1";var AH_="+";var AYh="{WEIGHTGAIN}";var AYi=
"{DAYS}";var AYj="ERROR: aString can not be null";var AYk=[166,70,240,114];var AYl=[
0,60,160,120];var AYm=[30,0,240,60];var AH$=[1,6,29,54];var AYn=[30,60,240,120];
var AYo="Con";var AYp=[70,50,170,70];var AIa="Unhandled Device::NaisIdValidationResult: ";
var AIb="Unhandled PopupId";var AYq=[110,123,230,248];var AYr=[5,0,250,40];var AYs=[
102,0,186,40];var AYt=[153,0,240,40];var Rl="-";var As_=[170,0,240,40];var AIc=[
220,0,320,30];var AId=[200,20,300,50];var Aos=[180,0,180,40];var Aot=[170,0,170,
40];var Ayq="Untreated state";var AYu="ERROR: Animal id scanned in an unexpected state : ";
var AIe="ERROR: Null animal id scanned.";var AYv=[40,40,235,100];var AYw=[120,100
,210,190];var AYx=[20,100,110,190];var AYy=[0,40,40,100];var AYz="\u278A";var AYA=
"Action untreated";var AYB="ERROR: No corresponding ";var AYC=" action found!";var
AYD="Unhandled action: ";var AYE=[0,190,240,220];var AYF=[0,220,232,280];var AYG=[
5,190,235,270];var AYH=[232,60];var AYI=[0,2];var AYJ=[58,58];var AYK="A";var AYL=[
56,0,156,40];var Aou=[156,0,240,40];var AIf=" 7 ";var AYM=[40,0,156,40];var AIg=
"/-1/-2";var AIh=[72,0,144,40];var Aai="\n";var AIi="(";var AYN=[72,0,156,40];var
AIj="%y/%m";var AYO=[70,0,240,40];var Ayr=[70,0,120,40];var AYP=[160,0,245,40];var
AYQ="- ";var Ays=" - ";var AYR="{parc}{clr3}";var AYS="{clr0}/^{clr2}";var AYT="{clr0}/^{clr1}";
var AIk=[0,0,85,40];var Aov="?";var AIl=[0,0,120,140];var AYU=[0,0,116,40];var Ayt=[
15,0,100,40];var AIm=[110,0,200,40];var AhY=[0,0,34,34];var AYV=[129,0,157,40];var
Aow=[0,0,25,25];var AYW="\u2611";var AIn="\u2610";var AIo=[5,0,72,40];var AYX=[150
,0,240,40];var AYY=[72,0,139,40];var AIp="Unvalid content class: ";var AYZ=[0,320
,240,360];var AY0=[0,360,240,400];var AY1=[144,0,170,40];var AY2=[187,0,213,40];
var AY3=[207,10,233,50];var AY4=[247,20,273,60];var AY5=[140,0,150,100];var AY6=[
165,0,175,100];var AY7=[185,0,195,100];var AY8=[205,0,215,100];var AY9=[211,0,233
,40];var Aox=[189,0,211,40];var AY_=[167,0,189,40];var AY$=[145,0,167,40];var AIq=[
5,0,240,40];var Aaj=[10,0,10,40];var AZa="= \u2211 ";var Ayu=[125,0,240,40];var AZb=[
130,0,170,40];var AZc="\xD8 ";var AIr=[100,10,116,36];var As$=[117,10,133,36];var
AZd=[135,10,151,36];var AZe="Implement in derieved class";var Ata=[0,80,240,240];
var Atb=[0,120,232,160];var Atc=[0,160,232,200];var Atd=[0,200,232,240];var Ayv=[
0,240,232,280];var Aoy=[0,320,232,360];var AZf=[-61,360,232,400];var AZg=[0,400,
32,440];var AZh=[0,100];var AZi=[0,40,240,240];var AZj=[0,50000];var AZk=[0,500];
var AZl=[0,0,240,105];var AZm=[0,105,240,210];var AZn=[0,40,240,81];var AIs=[0,81
,240,122];var AZo=[0,122,240,163];var AIt=[0,163,240,205];var AZp=[0,205,240,240
];var AZq=[0,200];var AIu=[0,40,240,73];var Ayw=[0,0,30,40];var AZr=[0,40,30,80];
var Ayx=[60,40];var Ayy=[60,0];var AZs=[10,0,40,40];var AZt=[0,190,240,260];var AZu=[
0,130,240,190];var AIv=[40,40,200,130];var AZv=[90,230,170,253];var AZw=[80,190,
170,223];var AZx=[0,130,240,180];var AZy=[0,250,240,280];var AZz=[129,0,156,40];
var AZA=[72,0,100,40];var AZB=[100,0,129,40];var AZC=[78,8,103,33];var AIw=[0,0,
300,120];var AZD=[1,-1];var AZE=[20,40,240,120];var AZF=[20,0,240,40];var AZG=[0
,118,240,120];var Bqq=[0,20,130,40];var Bqr=[130,20,240,40];var Bqs=[0,0,10,20];
var A$W="\u2191";var Bqt=[230,0,240,20];var AIx=[0,40,232,80];var Bqu=[0,80,232,
160];var Bqv=[0,160,230,240];var AIy=" p. p.";var AZH="Unknown animal type";var AZI=[
80,0,140,40];var Bqw=[50,0,172,40];var Bqx=[172,0,240,40];var Bqy=[0,90,240,92];
var A$X="Unhandled menu item";var A$Y=[0,0,50,30];var Ate=[0,0,30,30];var Bqz="No AnimalActionTemperatureScreen found!";
var BqA="840003123456789";var BqB=[40,0,230,40];var BqC=[50,10,230,30];var AZJ="No AnimalMultiInfoScreen found!";
var AIz=[0,0,25,40];var A$Z="/^";var A$0="?/?";var BqD=[100,4,180,40];var BqE=[65
,0,99,40];var BqF=[165,0,200,40];var A$1=[0,0,60,40];var A$2="9999/^9999";var BqG=
"Invalid index: ";var BqH="Unknown AnimalIdGenerationMethod: ";var BqI="Invalid gender: ";
var Atf="Invalid input state: ";var BqJ="Unhandled AnimalIdGenerationMethod";var
BqK=[42,35,67,75];var BqL=[5,35,39,75];var BqM=[70,40,228,70];var BqN="Invalid direction for setting focus";
var AhZ="Invalid index";var BqO="Unvalid direction";var BqP=[0,0,42,30];var A$3=[
22,0,42,30];var BqQ=[20,0,40,30];var BqR=[0,0,158,30];var A$4=[32,0,62,30];var A$5=[
64,0,94,30];var A$6=[96,0,126,30];var BqS=[128,0,158,30];var BqT=" %% ";var BqU=[
0,70,240,220];var BqV=[0,237,240,307];var A$7="\n44 %% done";var BqW=[0,0,166,30
];var AIA=[0,0,12,30];var Ayz=[14,0,26,30];var AZK=[28,0,40,30];var AZL=[42,0,54
,30];var AZM=[56,0,68,30];var AZN=[70,0,82,30];var AZO=[84,0,96,30];var AZP=[98,
0,110,30];var A$8=[112,0,124,30];var AZQ=[126,0,138,30];var BqX=[140,0,152,30];var
BqY=[154,0,166,30];var A$9=[20,0,46,30];var BqZ="\u2642";var Bq0="{fnt3}\u2642{fnt1}";
var Bq1="\u2640";var Bq2="{fnt3}\u2640{fnt1}";var Bq3="{parc}";var Bq4=[30,30,210
,80];var Bq5="Implement in derieved class!";var Bq6=[60,4,226,34];var A$_=[30,4,
58,34];var A$$=[4,0,27,40];var Bq7=[116,4,228,34];var Bq8=[60,4,86,34];var Bq9=[
88,4,114,34];var Aoz="Implement in derived class!";var Baa="Implement in derived class.";
var Bq_="Invalid nais id view: ";var Bq$=[0,35,240,75];var Bra=[0,0,110,30];var Brb=[
0,0,26,30];var Brc="100";var AZR="\n\n";var Brd=[240,240];var Bre=[0,240];var Brf=
"Unknown rated attribute: ";var Brg=[120,80,240,280];var Brh=[0,80,120,280];var AIB=
" %% (";var AyA=" \xB1 ";var AyB=" (n = ";var AZS=[0,80,232,120];var Bri=[0,242,
232,282];var AZT=[0,280,232,320];var Brj=[35,0,200,40];var Brk=[1,0,31,40];var Brl=[
32,40];var Brm=[32,0];var Brn=[3,0,83,40];var Bab=[180,0,240,40];var Bro=[120,0,
180,40];var Brp=[65,0,125,40];var Brq=[0,0,120,200];var Brr=[0,40,120,150];var Bac=[
15,160,60,190];var Bad=[60,160,105,190];var Brs=[0,65,240,135];var Brt=[10,112,170
,192];var Bru=[178,129,248,173];var Brv=[0,40,240,110];var Brw=[10,98,170,178];var
Brx=[178,112,248,156];var Bry=[85,190,160,265];var Brz=[89,194,155,260];var BrA=[
26,190,111,250];var BrB=[125,181,225,211];var BrC=[100,220,183,250];var BrD="38.7";
var BrE=[180,220,225,250];var BrF="\xB0C";var BrG=[0,99,240,178];var BrH=[100,280
,140,320];var BrI=[0,26,240,105];var Bae=[30,40];var Baf=[30,0];var BrJ=[149,0,200
,40];var BrK=[145,40];var BrL=[145,0];var BrM=[38,0,88,40];var AZU=[0,0,35,40];var
BrN=[0,0,50,40];var BrO=[40,0,200,40];var BrP=[95,0,145,40];var BrQ=[65,5,223,35
];var AZV=[0,0,15,40];var BrR=[72,0,140,40];var Bag="\n(";var BrS="%y/%m/%d";var
BrT="%y ";var BrU=" %m ";var BrV=" %d ";var BrW="20";var BrX=[225,0,240,40];var BrY=[
0,400,232,440];var BrZ=[0,440,232,480];var Br0=[0,480,232,520];var Br1=[0,520,232
,560];var Br2=[0,560,232,600];var Br3=[0,598,232,638];var Br4=[5,0,215,40];var Br5=[
215,8,240,33];var Br6="Implement in dervied class.";var Br7="ERROR: Unhandled temperature unit: ";
var AIC="ERROR: Unhandled mass unit: ";var Br8=[-1,160,115,280];var Br9=[114,160
,230,280];var AZW=[116,40,232,160];var AyC="Unknown weight class index: ";var Br_=
"< 35";var Br$="35 - 40";var Bsa="40 - 45";var Bsb="45 - 50";var Bsc="\u2265 50";
var Bsd="< 80";var Bse="80 - 90";var Bsf="90 - 100";var Bsg="100 - 110";var Bsh=
"\u2265 110";var Bah="Unknown mass unit";var Bsi=[143,0,193,40];var Bai=[192,0,240
,40];var Bsj=[44,28,44,28];var Bsk="0 %%";var Bsl=[-1,40,115,160];var Bsm=[117,40
,233,160];var Bsn=[1,160,117,280];var Bso=[114,158,230,278];var Bsp=[1,280,117,400
];var Bsq=[30,0,155,40];var Baj="\u2620";var AZX=[380,150,380,190];var Bak=[105,
0,155,50];var AZY=[190,1,240,41];var Bsr=[72,0,108,40];var Bss=[108,0,180,40];var
Bst=[60,0,94,40];var Bsu=[94,0,200,40];var Bsv="Scroll direction not supported.";
var Bsw=[44,0,207,40];var Bsx=[207,0,240,40];var Bsy="99";var Bsz="Unknown birth type";
var BsA=[44,0,189,40];var BsB=[5,0,44,40];var BsC=[44,0,240,40];var BsD=[240,0,240
,40];var BsE="\u25C9";var Bal="\u25CB";var BsF=[75,4,215,34];var BsG=[47,4,73,34
];var Bam=[17,4,45,34];var BsH=[0,0,138,30];var BsI=[47,4,215,34];var AZZ="Unhandled MotherSelectionFilterMode: ";
var BsJ="Read only!";var BsK="actions array too small to hold all actions";var BsL=[
120,40];var BsM=[120,0];var BsN=[5,0,115,40];var BsO=[0,0,205,40];var BsP=[59,4,
170,34];var BsQ=[59,1,173,37];var BsR=[175,1,205,37];var BsS=[0,0,37,40];var BsT=[
115,98,205,188];var BsU=[0,40,235,100];var BsV=[2,200,240,280];var BsW=" 01234";
var BsX=[0,0];var BsY=[33,63];var BsZ=[25,56];var Bs0="Unknown transponder image type: ";
var AID=[0,0,82,82];var Bs1=[0,0,81,26];var Bs2=[105,120,195,210];var Bs3=[10,140
,100,230];var Ban="Unhandled EartagNrAssignmentMode: ";var Bs4="Unhandled Gender";
var Bs5=[10,35,35,75];var Bs6=[44,40,202,70];var Bs7=[204,35,232,75];var Bs8="Unvalid FatoryResetScope";
var Bao=[0,120,240,200];var Bs9=[144,0,192,40];var Bs_=[144,0,240,40];var Bs$=[195
,0,245,50];var Bta=[120,0,120,40];var Btb=[140,0,240,30];var Btc=[30,0,232,40];var
Btd=[60,0,160,40];var Bte=[160,0,200,40];var Btf=[150,17,200,40];var Btg=[155,40
];var Bth=[155,0];var Bti=[146,80,240,160];var Btj=[56,80,146,160];var Btk=[0,80
,56,160];var Btl=[13,107,47,141];var Btm=[74,109,104,139];var Btn=[50,100,130,150
];var Bto=[55,112,145,140];var Btp=[146,112,236,140];var Btq=[150,86,223,110];var
AIE=[0,40,240,120];var Btr="Menu item for animal table field not found";var Bap=[
0,360,240,440];var Bts=[0,440,240,520];var Btt=[5,40,235,104];var Btu=[120,108,226
,218];var Btv=[20,120,110,210];var Btw=[5,223,235,280];var Btx=[0,0,64,30];var Bty=[
44,0,64,30];var Btz=[185,5,225,35];var BtA=[170,5,234,35];var BtB="Unhandled number of digits";
var BtC=[0,0,126,30];var BtD=[22,5,149,35];var BtE=[149,0,232,40];var Baq=[5,20];
var BtF=[5,0];var BtG="Unhandled AnimalIdAutoGenerationMethod: ";var BtH=[4,440,
236,520];var BtI="Unhandled TransponderAssignmentIdChangeMethod: ";var BtJ="\n";
var BtK="%";var BtL=[0,0,160,120];var BtM=[2,2,157,117];var BtN=[50,70];var BtO=[
50,50];var BtP="Unhandled data export destination ";var BtQ=[0,0,168,40];var BtR=[
168,0,240,40];var BtS=[0,47,232,77];var BtT=[65,0,101,40];var BtU=[135,0,175,40];
var BtV=[85,17,135,40];var BtW=[125,17,175,40];var BtX=[40,0];var Bar=[0,40,230,
280];var BtY="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BtZ="ERROR: Received more animal table fields than expected!";
var Bt0=[0,80,240,130];var Bt1=[0,80,240,200];var Bas="Unhandled BackupError: ";
var Bt2="Unhandled PopupId: ";var Bt3=[203,0,240,40];var Bt4=[168,0,203,40];var Bt5=[
35,0,152,40];var Bt6=[0,0,84,40];var Bt7=[84,0,167,40];var Bt8="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMG={Device:null,A5O:null,GG:null,Init:function(aArg){},DriveCursorHitting:function(
S8,BG,Fb){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GG._Init.call(this.
GG={I:this},0);this.__proto__=C.AMG;this.H(Cc);this.J(this.GG,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5O=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lw=
this._variants();if(Lw){this.K={};Lw._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GG._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GG.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5O)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GG)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A4W._variants();
},K:null,_className:"Application::Application"};C.Ast=[240,320];C.AB={Background:
null,Ej:null,AC6:null,An9:0,Init:function(aArg){A.pe([this,this.A0w],this);A.pe([
this,this.BeA],this);},LO:function(G){},A0w:function(s){this.LO(s);},CF:function(
G){},AIG:function(s){this.CF(s);},E3:function(G){},AyD:function(s){this.E3(s);},
Dq:function(E){if(this.AC6===E)return;this.AC6=E;A.pe([this,this.BeA],this);},BeA:
function(G){var B;if(!!this.AC6)this.Ej.Ab5((C.BS.isPrototypeOf(B=A._NewObject(this.
AC6,0))?B:null));else this.Ej.Ab5(null);},_Init:function(aArg){C.Abj._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ej._Init.call(this.
Ej={I:this},0);this.__proto__=C.AB;this.Background.AZ(0x3F);this.Background.H(Cc
);this.Background.L(A.jb.CS);this.Ej.H(BF);this.Ej.Ar(false);this.J(this.Background
,-1);this.J(this.Ej,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abj;this.
Background._Done();this.Ej._Done();C.Abj._Done.call(this);},_ReInit:function(){C.
Abj._ReInit.call(this);this.Background._ReInit();this.Ej._ReInit();},_Mark:function(
D){var B;C.Abj._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WH={KH:null,Zq:function(E){var B;if(this.KH===E)return;if(!!this.KH)this.AqE(
this.KH,null,null,null,[B=this.KH,B.AyD],null,false);this.KH=E;if(!!this.KH)this.
AkL(this.KH,null,null,null,null,null,null,[B=this.KH,B.AIG],null,false);},AEq:function(
){return this.KH;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WH;this.H([0,0,C.Ast[0],C.Ast[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.KH)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ox={U3:null,Q:null,AnM:null,ZA:null,NO:null,Ov:null,TB:null,TC:null,AF$:255,
Kd:function(G){var F;if(!!this.Q){this.A12();var Ada=(F=this.Q,F[1].call(F[0]));
if(Ada>20)this.Ov.L(A.jb.E1);else this.Ov.L(A.jb.Gf);this.Ov.L((this.Ov.AQ&0x00FFFFFF
)|(this.AlI(Ada,0,30)<<24));this.TB.L((this.TB.AQ&0x00FFFFFF)|(this.AlI(Ada,31,60
)<<24));this.TC.L((this.TC.AQ&0x00FFFFFF)|(this.AlI(Ada,61,100)<<24));}},A0u:function(
s){this.Kd(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0u],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0u],E,0);if(!!E)A.pe([this,
this.A0u],this);},A3d:function(G){var F;if(!!this.AnM)this.ZA.Ar((F=this.AnM,F[1
].call(F[0])));else this.ZA.Ar(false);this.A_c(255);},A97:function(E){if(A.aaZ(this.
AnM,E))return;if(!!this.AnM)A.z$([this,this.A3d],this.AnM,0);this.AnM=E;if(!!E)A.
zX([this,this.A3d],E,0);if(!!E)A.pe([this,this.A3d],this);},A_c:function(E){if(this.
AF$===E)return;this.AF$=E;if(!!this.U3)this.U3.L((this.U3.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlI:function(A0A,BbQ,Bxd){if(A0A<BbQ)return 0;else if((A0A>=BbQ)&&(A0A<
Bxd))return this.AF$&0xFF;else return 255;},A12:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U3=this.TC;else if((F=this.Q,F[1].call(F[0]))>
30)this.U3=this.TB;else this.U3=this.Ov;}else this.U3=null;},BkU:function(){return this.
AF$;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZA._Init.call(this.ZA={
I:this},0);A.acg.Ap._Init.call(this.NO={I:this},0);A.acg.AL._Init.call(this.Ov={
I:this},0);A.acg.AL._Init.call(this.TB={I:this},0);A.acg.AL._Init.call(this.TC={
I:this},0);this.__proto__=C.Ox;this.H(E4);this.ZA.Fl(2000);this.NO.H(E4);this.NO.
L(A.jb.Text);this.Ov.H(Hm);this.Ov.L(A.jb.E1);this.TB.H(IQ);this.TB.L(A.jb.E1);this.
TC.H(Ip);this.TC.L(A.jb.E1);this.J(this.NO,0);this.J(this.Ov,0);this.J(this.TB,0
);this.J(this.TC,0);this.ZA.Q=[this,this.BkU,this.A_c];this.NO.Aw(A.aaL(A.ach.AMR
));},_Done:function(){this.__proto__=A.Core.P;this.ZA._Done();this.NO._Done();this.
Ov._Done();this.TB._Done();this.TC._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZA._ReInit();this.NO._ReInit();this.Ov._ReInit(
);this.TB._ReInit();this.TC._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnM)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZA={_Init:function(aArg){A.acl.Gh._Init.call(
this,aArg);this.__proto__=C.ZA;this.AkW=true;this.B2=0;this.Cw=255;},_className:
"Application::PulseAnimation"};C.Ej={GG:null,AR:null,Background:null,Ox:null,Bo:
null,Dm:null,K7:0,Avh:0,Avi:0,Ao2:0,LI:false,KE:false,Qn:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20);
var GA=this.Bo.Bw;if(!G$){this.Ao2=A.jb.CS;this.K7=A.jb.Text;}else if(GA){this.Ao2=
this.Avh;this.K7=this.Avi;}else if(Fq){this.Ao2=this.Avh;this.K7=this.Avi;}else{
this.Ao2=A.jb.CS;this.K7=A.jb.Text;}this.Background.L(this.Ao2);if(!!this.GG){this.
GG.Ww(this.Ao2);this.GG.De(this.K7);}this.LI=G$;this.KE=Fq;this.Qn=GA;},Qm:function(
G){this.An();A.pe(this.AR,this);},AiO:function(G){if(this.Dm.Acj)return;this.An(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab5:function(
E){if(this.GG===E)return;if(!!this.GG)this.HN(this.GG);this.GG=E;if(!!this.GG)this.
J(this.GG,0);this.Bb(E);this.An();},A9Q:function(E){if(this.Avh===E)return;this.
Avh=E;this.An();},A9R:function(E){if(this.Avi===E)return;this.Avi=E;this.An();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.Ox._Init.call(this.Ox={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BN._Init.call(this.Dm={I:this},0);this.__proto__=C.Ej;var B;this.
H(BF);this.Background.AZ(0x3F);this.Background.H(BF);this.Background.L(A.jb.CS);
this.Ox.H(O2);this.K7=A.jb.Text;this.Bo.PO(0);this.Bo.Wx(50);this.Dm.Filter=1;this.
Avh=A.jb.AV;this.Avi=A.jb.Bm;this.Ao2=A.jb.Text;this.J(this.Background,0);this.J(
this.Ox,0);this.Ox.As([B=A._GetAutoObject(A.Device.Device),B.Av6,B.AyE]);this.Ox.
A97([B=A._GetAutoObject(A.Device.Device),B.Av9,B.AyF]);this.Bo.Mx=[this,this.Qm];
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
X1._variants();},K:null,_className:"Application::BootScreen"};C.AUN={AAA:function(
G){A._GetAutoObject(C.A$).Ahp(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUN;this.Background.L(0xFF000000);this.Ej.Z(false);},_className:
"Application::SleepScreen"};C.Avu={DZ:null,Y:null,Yb:null,Yc:null,VD:null,X4:null
,VE:null,X2:null,X7:null,TG:null,X6:null,Yd:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Art,B.Atg],0);A._GetAutoObject(A.Device.Helper).AkO();this.Bb(this.VD);this.
N.Cs(A.aaL(A.ach.ADB));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A2N=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A2N)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJW=A._NewObject(A.acl.AF8,0);AJW.Fl(250);AJW.HM(1);AJW.WC(6);this.
Y.HD(this.AV,true,AJW,null);}},CF:function(G){this.A4g(this);A._GetAutoObject(A.
Device.Device).Am.Bl(null);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(
A.Device.Helper).AkO();A._GetAutoObject(A.Device.Helper).Asn();},Fe:function(G){
var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.
Ay.Mv(-this.Y.Br[1]);},Ie:function(G){var Cx=(C.Fi.isPrototypeOf(G)?G:null);if(!
Cx)return;if(Cx===this.VD)A._GetAutoObject(C.A$).Cg(35);else if(Cx===this.X4)A._GetAutoObject(
C.A$).Cg(34);else if(Cx===this.X7)A._GetAutoObject(C.A$).Cg(69);else if(Cx===this.
VE)A._GetAutoObject(C.A$).Cg(8);else if(Cx===this.X2)A._GetAutoObject(C.A$).Cg(50
);else if(Cx===this.TG)A._GetAutoObject(C.A$).Cg(25);else if(Cx===this.Yb)A._GetAutoObject(
C.A$).Cg(77);else if(Cx===this.Yc)A._GetAutoObject(C.A$).Cg(70);else if(Cx===this.
Yd)A._GetAutoObject(C.A$).Cg(6);else if(Cx===this.X6)A._GetAutoObject(C.A$).Cg(63
);},BAm:function(G){A._GetAutoObject(A.Device.Device).AeZ(!A._GetAutoObject(A.Device.
Device).AmQ);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmQ)this.N.Hu((
A.aaR(A.acf.A7k)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hu((A.aaR(A.acf.
A7k)+CQ)+A.aaR(A.acf.A71).toLowerCase());},XB:function(G){A._GetAutoObject(A.Device.
Device).Ds(1);},A4g:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(
A.Device.Helper).Mo());this.VE.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DZ={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fi._Init.call(this.Yb={I:this
},0);C.Fi._Init.call(this.Yc={I:this},0);C.Fi._Init.call(this.VD={I:this},0);C.Fi.
_Init.call(this.X4={I:this},0);C.QR._Init.call(this.VE={I:this},0);C.Fi._Init.call(
this.X2={I:this},0);C.Fi._Init.call(this.X7={I:this},0);C.Fi._Init.call(this.TG={
I:this},0);C.Fi._Init.call(this.X6={I:this},0);C.Fi._Init.call(this.Yd={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avu;this.Background.L(A.
jb.CS);this.N.Ar(false);this.N.Z(true);this.Dq(C.AqZ);this.DZ.AZ(0x3F);this.DZ.H(
E$);this.DZ.L(A.jb.CK);this.Y.H(Lu);this.Y.JP(9);this.Yb.H(P3);this.Yb.Aj(true);
this.Yb.T(A.aaR(A.acf.Gm));this.Yc.H(JZ);this.Yc.Aj(true);this.Yc.T(A.aaR(A.acf.
A7H));this.VD.H(N_);this.VD.Aj(true);this.VD.T(A.aaR(A.acf.Vq));this.X4.H(P4);this.
X4.Aj(true);this.X4.T(A.aaR(A.acf.Tt));this.VE.H(MF);this.VE.Aj(true);this.VE.T(
A.aaR(A.acf.APH));this.X2.H(S4);this.X2.Aj(true);this.X2.T(A.aaR(A.acf.Animal));
this.X7.H(JZ);this.X7.Aj(true);this.X7.T(A.aaR(A.acf.A7n));this.TG.H(UO);this.TG.
Ar(true);this.TG.Aj(true);this.TG.Z(true);this.TG.T(A.aaR(A.acf.A5_));this.X6.H(
Z5);this.X6.Aj(true);this.X6.T(A.aaR(A.acf.Device));this.Yd.H(W1);this.Yd.Aj(true
);this.Yd.T(A.aaR(A.acf.Settings));this.Ay.H(Iq);this.J(this.DZ,0);this.J(this.Y
,0);this.J(this.Yb,0);this.J(this.Yc,0);this.J(this.VD,0);this.J(this.X4,0);this.
J(this.VE,0);this.J(this.X2,0);this.J(this.X7,0);this.J(this.TG,0);this.J(this.X6
,0);this.J(this.Yd,0);this.J(this.Ay,0);this.N.CB=[this,this.BAm];this.N.Ck=[this
,this.XB];this.Y.El=[this,this.Fe];this.Yb.AR=[this,this.Ie];this.Yb.DB(A.aaL(A.
ach.ADF));this.Yc.AR=[this,this.Ie];this.Yc.DB(A.aaL(A.ach.ADI));this.VD.AR=[this
,this.Ie];this.VD.DB(A.aaL(A.ach.APL));this.X4.AR=[this,this.Ie];this.X4.DB(A.aaL(
A.ach.APW));this.VE.AR=[this,this.Ie];this.VE.DB(A.aaL(A.ach.AQi));this.X2.AR=[this
,this.Ie];this.X2.DB(A.aaL(A.ach.APO));this.X7.AR=[this,this.Ie];this.X7.DB(A.aaL(
A.ach.AQp));this.TG.AR=[this,this.Ie];this.TG.DB(A.aaL(A.ach.AP9));this.X6.AR=[this
,this.Ie];this.X6.DB(A.aaL(A.ach.AP6));this.Yd.AR=[this,this.Ie];this.Yd.DB(A.aaL(
A.ach.AQH));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done(
);this.Y._Done();this.Yb._Done();this.Yc._Done();this.VD._Done();this.X4._Done();
this.VE._Done();this.X2._Done();this.X7._Done();this.TG._Done();this.X6._Done();
this.Yd._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Yb._ReInit();this.Yc.
_ReInit();this.VD._ReInit();this.X4._ReInit();this.VE._ReInit();this.X2._ReInit(
);this.X7._ReInit();this.TG._ReInit();this.X6._ReInit();this.Yd._ReInit();this.Ay.
_ReInit();this.Yb.T(A.aaR(A.acf.Gm));this.Yc.T(A.aaR(A.acf.A7H));this.VD.T(A.aaR(
A.acf.Vq));this.X4.T(A.aaR(A.acf.Tt));this.VE.T(A.aaR(A.acf.APH));this.X2.T(A.aaR(
A.acf.Animal));this.X7.T(A.aaR(A.acf.A7n));this.TG.T(A.aaR(A.acf.A5_));this.X6.T(
A.aaR(A.acf.Device));this.Yd.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q8={Number:null,Jc:null,IP:null,Tz:null,AsJ:0,Init:function(aArg){var B;A.zX([
this,this.Bbt],[B=A._GetAutoObject(A.Device.Device),B.ASC,B.A0b],0);A.pe([this,this.
Bbt],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An_();},CF:function(G){A.
_GetAutoObject(A.Device.Device).AhE();},E3:function(G){A._GetAutoObject(A.Device.
Device).An1();},Al3:function(G){var F;this.An();this.Tz.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Ael.Ar(true);if(!this.Tz.Bw)(F=this.Tz.Q,F[2].call(F[0],this.Tz.
B2));},Bbt:function(s){this.Al3(s);},An_:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gf);break;case 3:this.Background.
L(A.jb.H6);break;default:this.Background.L(A.jb.CK);}},AkF:function(E){if(this.AsJ===
E)return;this.AsJ=E;this.Jc.AkF(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jc._Init.call(this.Jc={I:this}
,0);A.acg.Ap._Init.call(this.IP={I:this},0);A.acl.Gh._Init.call(this.Tz={I:this}
,0);this.__proto__=C.Q8;var B;this.Background.L(A.jb.CK);this.N.Z(false);this.Number.
H(UP);this.Number.KS(true);this.Number.L(A.jb.Text);this.Jc.H(Z6);this.Jc.AkF(0);
this.IP.H(W2);this.IP.L(A.jb.AV);this.IP.Zr(true);this.Tz.Fl(1750);this.Tz.Uk(750
);this.Tz.AkA(0);this.Tz.Ar(true);this.Tz.B2=3;this.J(this.Number,0);this.J(this.
Jc,0);this.J(this.IP,0);this.Number.S(A.aaL(A.fl.Af));this.IP.Aw(A.aaL(A.ach.ADH
));this.Tz.Q=[B=this.IP,B.ASp,B.Cv];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jc._Done();this.IP._Done();this.Tz._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jc._ReInit();this.IP._ReInit();this.Tz._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fi={C8:null,ADr:null,AR:null,Bo:null,Dm:null,Background:
null,Mn:null,OC:null,QX:null,G4:null,A5l:true,LI:false,KE:false,Qn:false,Init:function(
aArg){},Bk:function(aSize){var B;C.Hc.Bk.call(this,aSize);this.Mn.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.QX.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OC.H(this.QX.M);this.G4.H([].concat(0,this.G4.M.slice(1,4)));this.G4.H(A.abN(
this.G4.M,aSize[0]));this.G4.H(A.abP(this.G4.M,0));this.G4.H([].concat(this.G4.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hc.Ai.call(this,Ae);var G$=((Ae&0x10)===
0x10);var Fq=((Ae&0x20)===0x20);var GA=this.Bo.Bw;if(!G$){this.QX.L(A.jb.Am4);this.
G4.L(A.jb.CK);this.OC.Z(true);this.OC.L(A.jb.AQU);this.Mn.Z(false);}else if(GA){
this.QX.L(A.jb.Bm);this.G4.L(A.jb.Bm);this.OC.Z(false);this.Mn.Z(true);}else if(
Fq){this.QX.L(A.jb.Bm);this.G4.L(A.jb.Bm);this.OC.Z(false);this.Mn.Z(true);}else{
this.QX.L(A.jb.Text);this.G4.L(A.jb.Text);this.OC.Z(true);this.OC.L(A.jb.CS);this.
Mn.Z(false);}this.LI=G$;this.KE=Fq;this.Qn=GA;},Qm:function(G){this.An();A.pe(this.
AR,this);},AiO:function(G){if(this.Dm.Acj)return;this.An();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G4.R(E);},DB:function(E){if(this.C8===E)return;this.C8=E;this.QX.
Aw(E);this.OC.Aw(E);},Ab4:function(E){if(this.A5l===E)return;this.A5l=E;this.G4.
Z(E);},Ab7:function(E){if(this.ADr===E)return;this.ADr=E;this.Mn.Aw(E);this.Mn.H(
A.abK(this.Mn.M,E.FrameSize));},_Init:function(aArg){C.Hc._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BN._Init.call(this.Dm={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mn={
I:this},0);A.acg.Ap._Init.call(this.OC={I:this},0);A.acg.Ap._Init.call(this.QX={
I:this},0);C.CH._Init.call(this.G4={I:this},0);this.__proto__=C.Fi;this.H(Z7);this.
Bo.PO(0);this.Bo.Wx(50);this.Dm.Filter=1;this.Background.H(W3);this.Background.Z(
false);this.Mn.AZ(0x14);this.Mn.L(A.jb.AV);this.Mn.Cv(0);this.OC.L(A.jb.CS);this.
OC.Cv(1);this.G4.H(Z8);this.J(this.Background,0);this.J(this.Mn,0);this.J(this.OC
,0);this.J(this.QX,0);this.J(this.G4,0);this.Bo.Mx=[this,this.Qm];this.Dm.BO=[this
,this.AiO];this.Mn.Aw(A.aaL(A.ach.NS));this.OC.Aw(A.aaL(A.ach.AvH));this.QX.Aw(A.
aaL(A.ach.AvH));this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(
A.aaL(A.fl.Bh));this.ADr=A.aaL(A.ach.NS);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hc;this.Bo._Done();this.Dm._Done();this.Background._Done();this.Mn._Done(
);this.OC._Done();this.QX._Done();this.G4._Done();C.Hc._Done.call(this);},_ReInit:
function(){C.Hc._ReInit.call(this);this.Bo._ReInit();this.Dm._ReInit();this.Background.
_ReInit();this.Mn._ReInit();this.OC._ReInit();this.QX._ReInit();this.G4._ReInit(
);this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axe:null,Background:null,OY:null,Asf:0,Ak7:10,AjC:100,AQ:0,AoV:true,Bk:function(
aSize){A.Core.P.Bk.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OY.H([].concat(2,this.OY.M.slice(1,4)));this.OY.H(A.abN(this.OY.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af0=this.Ak7<this.AjC;var AJt=(
B=this.M)[3]-B[1];var A2A=10;var Aum=AJt;var A4d=0;if(10>AJt)A2A=AJt;if(this.Ak7<
this.AjC)Aum=((Aum*this.Ak7)/this.AjC)|0;if(Aum<A2A)Aum=A2A;if(this.Ak7<this.AjC
)A4d=((this.BkT()*(AJt-Aum))/(this.AjC-this.Ak7))|0;this.OY.H(A.abP(this.OY.M,A4d
));this.OY.H([].concat(this.OY.M.slice(0,3),A4d+Aum));this.OY.Z(Af0);this.Background.
Z(Af0);if(!!this.Axe&&(this.AoV!==Af0))A.pe(this.Axe,this);this.AoV=Af0;},BkT:function(
){var E=this.Asf;var Hz=this.AjC-this.Ak7;if((Hz>0)&&(E>Hz))E=Hz;if(Hz<=0)E=0;return E;
},Mv:function(E){if(E<0)E=0;if(this.Asf===E)return;this.Asf=E;this.An();},Mw:function(
E){if(E<0)E=0;if(this.Ak7===E)return;this.Ak7=E;this.An();},Mu:function(E){if(E<
0)E=0;if(this.AjC===E)return;this.AjC=E;this.An();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OY.L(E);},Bm0:function(E){if(A.aa0(this.Axe,E))return;this.
Axe=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.OY={I:this},0);this.__proto__=
C.Ay;this.H(Z9);this.Ar(false);this.AQ=A.jb.AV;this.Background.AZ(0x0);this.Background.
H(UQ);this.Background.L(A.jb.CS);this.OY.AZ(0x0);this.OY.H(UQ);this.OY.L(A.jb.AV
);this.J(this.Background,0);this.J(this.OY,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.OY._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.OY._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axe)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cd={Hd:null,Y:null,Ay:null,Ap:null,A6P:A.jV,Init:function(aArg){A.pe([this,this.
AA7],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.An();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);this.AA7(this);},AlZ:
function(G){if(!!this.N.CB)A.pe(this.N.CB,this);},ApL:function(G){if(!!this.N.Cl
)A.pe(this.N.Cl,this);},AAA:function(G){if(!!this.N.Ck)A.pe(this.N.Ck,this);},Fe:
function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[
3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);A.pe([this,this.BAI],this);},AA7:function(G){
var B;var GS=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hu(A.jV);this.N.CY(A.
aaL(A.ach.VZ));this.N.CB=[this,this.Ev];if(!!GS&&!!GS.Amn){this.N.FJ(A.jV);this.
N.Kw.Dr(255);this.N.ArN(GS.AqP);this.N.Cs(GS.AvE);this.N.Ck=GS.Amn;}else{this.N.
FJ(A.jV);this.N.Cs(null);this.N.Ck=null;}if(!!GS&&!!GS.Agn){this.N.CV(GS.AxI);this.
N.HQ.Dr(GS.Axf);this.N.AnA(GS.AmS);this.N.C6(GS.Aq5);this.N.Cl=GS.Agn;}else{this.
N.CV(A.jV);this.N.C6(null);this.N.Cl=null;}},I8:function(E){if(this.A6P===E)return;
this.A6P=E;this.Hd.R(E);},Ev:function(G){A._GetAutoObject(C.A$).Fv();},BAI:function(
G){var B;var BzH=this.Ay.Background.Fk();var BdD=(BzH?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajd=X;
X=X.Ah;if(((Ajd.U&0x400)===0x400)){if(!!(A.Core.Akg.isPrototypeOf(Ajd)?Ajd:null)
){var BdJ=(A.Core.Akg.isPrototypeOf(Ajd)?Ajd:null);BdJ.DC([BdD,BdJ.EC[1]]);}else
if(!!(A.Core.Es.isPrototypeOf(Ajd)?Ajd:null)){var BfD=(A.Core.Es.isPrototypeOf(Ajd
)?Ajd:null);BfD.H(A.abN(BfD.M,BdD));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CH._Init.call(this.Hd={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cd;this.N.Z(true);this.Hd.H(W4);this.Hd.Ar(false);this.Hd.R(A.aaR(A.
acf.Settings));this.Hd.L(A.jb.Text);this.Y.H(E$);this.Y.JP(1);this.Ay.H(Iq);this.
Ap.H(P5);this.Ap.L(A.jb.Text);this.J(this.Hd,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii));this.Y.
El=[this,this.Fe];this.Ap.Aw(A.aaL(A.ach.AC_));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hd._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hd._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hd.R(A.aaR(A.acf.Settings
));this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.AqZ={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bgy],[B=
A._GetAutoObject(A.Device.Helper),B.UX,B.U0],0);},De:function(E){C.BS.De.call(this
,E);this.Text.L(E);},Bgy:function(G){this.Text.R(A._GetAutoObject(A.acj.KK).Bip(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BS._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AqZ;this.Timer.Wx(1);this.Timer.Ar(true);
this.Text.H(Z_);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.Mx=[this,this.Bgy
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
0,Aq7:0,Aq8:0,Ahc:0,ZD:false,ZC:false,Asl:false,Asz:false,Asy:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VQ)this.Ja.S(this.VQ);if(!!this.VS)this.Kw.S(this.
VS);if(!!this.VT)this.HQ.S(this.VT);switch(this.Ahc){case 0:{this.NG.Z(false);this.
Ja.L(A.jb.Bm);this.Kw.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Pv.L(A.jb.Bm);this.I4.L(
A.jb.Bm);this.Le.L(A.jb.Bm);}break;case 1:{if(!this.AgV)this.NG.H(A.aaT(this.Ja.
ASg(),Ri));else this.NG.H(this.Pv.Db());this.NG.Z(true);this.Ja.L(A.jb.Text);this.
Kw.L(A.jb.Bm);this.HQ.L(A.jb.Bm);this.Pv.L(A.jb.Text);this.I4.L(A.jb.Bm);this.Le.
L(A.jb.Bm);}break;case 3:{if(!this.AgX)this.NG.H(A.aaT(this.HQ.ASg(),Ri));else this.
NG.H(this.Le.Db());this.NG.Z(true);this.Ja.L(A.jb.Bm);this.Kw.L(A.jb.Bm);this.HQ.
L(A.jb.Text);this.Pv.L(A.jb.Bm);this.I4.L(A.jb.Bm);this.Le.L(A.jb.Text);}break;case
2:{if(!this.AgW)this.NG.H(A.aaT(this.Kw.ASg(),Ri));else this.NG.H(this.I4.Db());
this.NG.Z(true);this.Ja.L(A.jb.Bm);this.Kw.L(A.jb.Text);this.HQ.L(A.jb.Bm);this.
Pv.L(A.jb.Bm);this.I4.L(A.jb.Text);this.Le.L(A.jb.Bm);}break;default:{this.NG.Z(
false);A.ab5("%s",W5);}}if(!!this.Pv.Al){this.Pv.Z(true);this.Ja.Z(false);}else{
this.Pv.Z(false);this.Ja.Z(true);}if(this.An5.length<=0){this.I4.Z(true);this.Kw.
Z(false);}else{this.I4.Z(false);this.Kw.Z(true);}if(!!this.Le.Al){this.Le.Z(true
);this.HQ.Z(false);}else{this.Le.Z(false);this.HQ.Z(true);}},Hu:function(E){if(this.
An4===E)return;this.An4=E;this.Ja.R(E);this.An();},FJ:function(E){if(this.An5===
E)return;this.An5=E;this.Kw.R(E);this.An();},CV:function(E){if(this.An6===E)return;
this.An6=E;this.HQ.R(E);this.An();},AFe:function(E){if(this.Ahc===E)return;this.
Ahc=E;this.An();},AE7:function(E){if(this.VQ===E)return;this.VQ=E;this.Ja.S(E);this.
An();},ArN:function(E){if(this.VS===E)return;this.VS=E;this.Kw.S(E);this.An();},
AnA:function(E){if(this.VT===E)return;this.VT=E;this.HQ.S(E);this.An();},A3s:function(
G){this.An();},CY:function(E){if(this.AgV===E)return;this.AgV=E;this.Pv.Aw(E);this.
An();},Cs:function(E){if(this.AgW===E)return;this.AgW=E;this.I4.Aw(E);this.An();
},C6:function(E){if(this.AgX===E)return;this.AgX=E;this.Le.Aw(E);this.An();},OO:
function(E){if(this.Asy===E)return;this.Asy=E;this.TW.Z(E);if(E)this.Ja.H([].concat(
this.TW.M[2],this.Ja.M.slice(1,4)));else this.Ja.H([].concat(0,this.Ja.M.slice(1
,4)));this.An();},OP:function(E){if(this.Asz===E)return;this.Asz=E;this.TX.Z(E);
if(E)this.HQ.H(A.abN(this.HQ.M,this.TX.M[0]));else this.HQ.H(A.abN(this.HQ.M,this.
M[2]));this.An();},Bmm:function(E){if(this.Aq6===E)return;this.Aq6=E;this.Pv.Cv(
E);this.An();},AS4:function(E){if(this.Aq7===E)return;this.Aq7=E;this.I4.Cv(E);this.
An();},A9V:function(E){if(this.Aq8===E)return;this.Aq8=E;this.Le.Cv(E);this.An();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NG={I:this},0);C.CH._Init.call(this.Ja={I:this
},0);C.CH._Init.call(this.Kw={I:this},0);C.CH._Init.call(this.HQ={I:this},0);A.acg.
Ap._Init.call(this.Pv={I:this},0);A.acg.Ap._Init.call(this.I4={I:this},0);A.acg.
Ap._Init.call(this.Le={I:this},0);A.acg.Ap._Init.call(this.TW={I:this},0);A.acg.
Ap._Init.call(this.TX={I:this},0);this.__proto__=C.N;this.H(BF);this.Background.
AZ(0x3F);this.Background.H(BF);this.Background.L(A.jb.Ad_);this.NG.H(W6);this.NG.
L(A.jb.CS);this.NG.Z(false);this.Ja.AZ(0x14);this.Ja.H(W7);this.Ja.A6(0x12);this.
Kw.AZ(0x14);this.Kw.H(W8);this.Kw.A6(0x12);this.HQ.H(Z$);this.Pv.H(W9);this.I4.H(
W_);this.Le.H(S5);this.Le.Z(false);this.TW.H(UR);this.TW.Z(false);this.TX.H(US);
this.TX.Z(false);this.J(this.Background,0);this.J(this.NG,0);this.J(this.Ja,0);this.
J(this.Kw,0);this.J(this.HQ,0);this.J(this.Pv,0);this.J(this.I4,0);this.J(this.Le
,0);this.J(this.TW,0);this.J(this.TX,0);this.Ja.S(A.aaL(A.fl.Ak));this.Ja.A2(A.aaL(
A.fl.Bh));this.Ja.Q1([this,this.A3s]);this.Kw.S(A.aaL(A.fl.Ak));this.Kw.A2(A.aaL(
A.fl.Bh));this.Kw.Q1([this,this.A3s]);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(
A.fl.Bh));this.HQ.Q1([this,this.A3s]);this.VQ=A.aaL(A.fl.Ak);this.VS=A.aaL(A.fl.
Ak);this.VT=A.aaL(A.fl.Ak);this.Pv.Aw(null);this.I4.Aw(null);this.Le.Aw(null);this.
TW.Aw(A.aaL(A.ach.AMJ));this.TX.Aw(A.aaL(A.ach.Ajq));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.P;this.Background._Done();this.NG._Done();this.Ja._Done(
);this.Kw._Done();this.HQ._Done();this.Pv._Done();this.I4._Done();this.Le._Done(
);this.TW._Done();this.TX._Done();A.Core.P._Done.call(this);},_ReInit:function(){
A.Core.P._ReInit.call(this);this.Background._ReInit();this.NG._ReInit();this.Ja.
_ReInit();this.Kw._ReInit();this.HQ._ReInit();this.Pv._ReInit();this.I4._ReInit(
);this.Le._ReInit();this.TW._ReInit();this.TX._ReInit();this.Ja.S(A.aaL(A.fl.Ak)
);this.Ja.A2(A.aaL(A.fl.Bh));this.Kw.S(A.aaL(A.fl.Ak));this.Kw.A2(A.aaL(A.fl.Bh)
);this.HQ.S(A.aaL(A.fl.Ak));this.HQ.A2(A.aaL(A.fl.Bh));this.AE7(A.aaL(A.fl.Ak));
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
};C.ADc={Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper),B.Arv,B.AkE],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper)
,B.A8U,B.AFC],0);A.pe([this,this.Nm],this);},DY:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhA)this.Ab6(A._GetAutoObject(A.Device.Helper).AhA.AOR());else this.
Ab6(-1);if(!!A._GetAutoObject(A.Device.Helper).Uw)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak5(A._GetAutoObject(A.Device.Helper).Uw.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmY._Init.call(this,aArg);this.__proto__=C.ADc;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGR={Ex:null,Eh:null,
FT:null,X0:null,TA:null,ID:null,IE:null,Init:function(aArg){},WF:function(G){var
B;C.DR.WF.call(this,G);var AKL=this.Azm(A._GetAutoObject(A.Device.Helper).UB.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALA=this.Azm(A._GetAutoObject(
A.Device.Helper).UC.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var Bzx=
this.Azm(A._GetAutoObject(A.Device.Device).Z1);this.Ex.H(A.abP(this.Ex.M,0));this.
Ex.H([].concat(this.Ex.M.slice(0,3),((B=this.M)[3]-B[1])-AKL));this.IE.H(A.abO(this.
IE.M,this.Ex.M[3]-((((B=this.IE.M)[3]-B[1])/2)|0)));this.Eh.H(A.abP(this.Eh.M,this.
Ex.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-B[1])-ALA));this.
ID.H(A.abO(this.ID.M,(this.Eh.M[3]-((((B=this.ID.M)[3]-B[1])/2)|0))+2));this.FT.
H(A.abP(this.FT.M,this.Eh.M[3]));this.FT.H([].concat(this.FT.M.slice(0,3),((B=this.
M)[3]-B[1])-Bzx));this.TA.H(A.abO(this.TA.M,this.FT.M[3]-((((B=this.TA.M)[3]-B[1
])/2)|0)));this.X0.H(A.abP(this.X0.M,this.FT.M[3]));this.X0.H([].concat(this.X0.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJG:function(AoR){return A._GetAutoObject(A.
Device.Converter).Ak0(AoR);},AKe:function(){return A._GetAutoObject(A.acj.Temperature
).AlJ();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AL._Init.call(this.
Ex={I:this},0);A.acg.AL._Init.call(this.Eh={I:this},0);A.acg.AL._Init.call(this.
FT={I:this},0);A.acg.AL._Init.call(this.X0={I:this},0);A.acg.AL._Init.call(this.
TA={I:this},0);A.acg.AL._Init.call(this.ID={I:this},0);A.acg.AL._Init.call(this.
IE={I:this},0);this.__proto__=C.AGR;this.Ex.AZ(0xD);this.Ex.H(AcN);this.Ex.L(A.jb.
Gf);this.Eh.AZ(0xD);this.Eh.H(S6);this.Eh.L(A.jb.H6);this.FT.AZ(0xD);this.FT.H(Aaa
);this.FT.L(A.jb.E1);this.X0.AZ(0xD);this.X0.H(Afx);this.X0.L(A.jb.Afq);this.TA.
AZ(0xD);this.TA.H(Aab);this.TA.Aws(A.jb.Afq);this.TA.Awt(A.jb.Afq);this.TA.Awv(A.
jb.E1);this.TA.Awu(A.jb.E1);this.ID.AZ(0xD);this.ID.H(W$);this.ID.Aws(A.jb.E1);this.
ID.Awt(A.jb.E1);this.ID.Awv(A.jb.H6);this.ID.Awu(A.jb.H6);this.IE.AZ(0xD);this.IE.
H(Aac);this.IE.Aws(A.jb.H6);this.IE.Awt(A.jb.H6);this.IE.Awv(A.jb.Gf);this.IE.Awu(
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
};C.Co={Avj:null,AmS:null,AQe:null,Aq5:null,AqP:null,AvE:null,AR:null,Agn:null,Amn:
null,N:null,Bo:null,QN:null,AxI:A.jV,AUJ:false,AGF:false,Aph:false,Axf:255,LI:false
,KE:false,Qn:false,Ai:function(Ae){var B;C.OV.Ai.call(this,Ae);var G$=((Ae&0x10)===
0x10);var Fq=((Ae&0x20)===0x20);var Iy=((Ae&0x40)===0x40);var GA=this.Bo.Bw;var FN=
A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FN=A.jb.Bm;GQ=A.jb.Text;}if(!G$){this.Background.
L(A.jb.CS);this.V.L(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(Iy){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.
Background.L(A.jb.Am4);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ
);}this.LI=G$;this.KE=Fq;this.Qn=GA;this.Aph=Iy;},Qm:function(G){this.An();A.pe(
this.AR,this);},Bwr:function(s){this.Qm(s);},IW:function(G){if(this.QN.Acj)return;
this.An();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Ati:function(s){this.IW(s);},AeT:function(E){if(A.aa0(this.Agn,E))return;this.
Agn=E;},A_n:function(E){if(this.AxI===E)return;this.AxI=E;},Wy:function(E){if(this.
Avj===E)return;this.Avj=E;},Wz:function(E){if(this.AmS===E)return;this.AmS=E;},A95:
function(E){if(this.Axf===E)return;this.Axf=E;},Gn:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALi();},A21:
function(G){},BGd:function(s){this.A21(s);},Akz:function(E){if(this.Aq5===E)return;
this.Aq5=E;},LX:function(E){if(A.aa0(this.Amn,E))return;this.Amn=E;},Bmf:function(
E){if(this.AqP===E)return;this.AqP=E;},L0:function(E){if(this.AvE===E)return;this.
AvE=E;},Zx:function(E){if(this.AGF===E)return;this.AGF=E;this.ALi();},ALi:function(
){var B;var Qt=this.DK;if(this.AGF)Qt=Qt+A.aaR(A.acf.Colon);if(this.AUJ)Qt=Qt+Aad;
this.V.R(Qt);},ATq:function(E){if(this.AUJ===E)return;this.AUJ=E;this.ALi();},_Init:
function(aArg){C.OV._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BN._Init.call(this.QN={I:this},0);this.__proto__=C.Co;this.Bo.PO(0);
this.Bo.Wx(50);this.Bo.Ar(false);this.QN.Filter=1;this.Bo.Mx=[this,this.Bwr];this.
QN.BO=[this,this.Ati];this.Avj=A.aaL(A.fl.Ak);this.AmS=A.aaL(A.fl.Ak);this.AQe=A.
aaL(A.ach.E2);this.AqP=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OV;this.
Bo._Done();this.QN._Done();C.OV._Done.call(this);},_ReInit:function(){C.OV._ReInit.
call(this);this.Bo._ReInit();this.QN._ReInit();this.Wy(A.aaL(A.fl.Ak));this.Wz(A.
aaL(A.fl.Ak));this.Bmf(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OV._Mark.call(
this,D);if((B=this.Avj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
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
6;this.An();if(this.Bo.Bw){A.pe([this,this.AyO],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qm:function(G){if(this.FC===6)A.pe([this,this.AyO],this);if(this.FC===
7)A.pe([this,this.AyP],this);if(this.FC===1)A.pe(this.AR,this);this.FC=0;this.An(
);},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},AcU:function(
s){this.C2(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcU],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcU],E,0);if(!!E)A.pe([this,
this.AcU],this);},BeN:function(G){this.FC=7;this.An();if(this.Bo.Bw){A.pe([this,
this.AyP],this);this.Bo.Ar(false);}this.Bo.Ar(true);},J$:function(G){this.FC=0;}
,AyP:function(s){this.J$(s);},J6:function(G){this.FC=0;},AyO:function(s){this.J6(
s);},By:function(E){if(E<this.Gl)E=this.Gl;if(E>this.FZ)E=this.FZ;if(this.AM===E
)return;this.AM=E;this.An();},BaV:function(Aq){this.By(Aq);},F0:function(E){if(this.
Gl===E)return;this.Gl=E;this.An();},EV:function(E){if(this.FZ===E)return;this.FZ=
E;this.An();},Ue:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BN._Init.call(this.And={I:this},0);A.Core.BN._Init.call(this.Anf={
I:this},0);A.acg.Ap._Init.call(this.Ht={I:this},0);A.acg.Ap._Init.call(this.H2={
I:this},0);this.__proto__=C.Dt;this.H(J0);this.And.Filter=6;this.Anf.Filter=7;this.
Background.H(J0);this.V.H(Aae);this.V.R(Lv);this.Ht.H(AhR);this.H2.H(Aog);this.H2.
Cv(1);this.J(this.Ht,0);this.J(this.H2,0);this.And.BO=[this,this.BeM];this.And.D1=[
this,this.BeM];this.Anf.BO=[this,this.BeN];this.Anf.D1=[this,this.BeN];this.V.S(
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
E){this.Q=E;},B8:function(Aq){this.As(Aq);},ACR:function(aIndex){return null;},ACT:
function(aIndex){return 0;},B7:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Io={AxA:null
,BT:null,AG4:A.jV,AVm:A.jV,Aj4:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dt.Ai.call(this,Ae);if(!this.AxA){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVm);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AG4);}}else(B=
this.AxA)?B[1].call(B[0],this):null;},J$:function(G){var F;var BR=this.AM;C.Dt.J$.
call(this,G);this.By(this.AM+this.Aj4);if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J6:function(G){var F;var BR=this.AM;C.
Dt.J6.call(this,G);this.By(this.AM-this.Aj4);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IM:function(E){if(this.AG4===E)return;
this.AG4=E;this.An();},I9:function(E){if(this.AVm===E)return;this.AVm=E;this.An(
);},AS5:function(E){if(this.Aj4===E)return;this.Aj4=E;},A_k:function(E){if(A.aa0(
this.AxA,E))return;this.AxA=E;},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.CH._Init.call(this.BT={I:this},0);this.__proto__=C.Io;this.H(J0);this.BT.H(N$);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dt;this.BT._Done();C.Dt._Done.call(this
);},_ReInit:function(){C.Dt._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dt._Mark.call(this
,D);if((B=this.AxA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Dy:null,HK:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bk:function(
aSize){var B;C.Dt.Bk.call(this,aSize);this.Dy.H([this.Ht.M[2]-10,this.Ht.M[1],this.
H2.M[0]+10,this.Ht.M[3]]);this.Dy.AFf((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.Dy.
Go,true,null,null);},Ai:function(Ae){var B;C.Dt.Ai.call(this,Ae);var Fq=((Ae&0x20
)===0x20);var GA=this.Bo.Bw;this.Dy.AbH(0,this.Dy.AY-1);this.Ht.Z(Fq||GA);this.H2.
Z(Fq||GA);},C2:function(G){var F;if(!!this.Q&&!!this.AC)this.By(this.AC.DU((F=this.
Q,F[1].call(F[0]))));},J$:function(G){var F;var BR=this.AM;C.Dt.J$.call(this,G);
this.By(this.AM+1);if(this.AM!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},J6:function(G){var F;var BR=this.AM;
C.Dt.J6.call(this,G);this.By(this.AM-1);if(this.AM!==BR){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(E){
var Qs=0;if(E<this.Gl){E=this.FZ;Qs=-this.Dy.V_*this.Dy.AY;}if(E>this.FZ){E=this.
Gl;Qs=this.Dy.V_;}C.Dt.By.call(this,E);if(!!Qs)this.Dy.F_(Qs);this.Dy.G2(this.AM
);if(this.Dy.Bjl())this.Dy.BoN(false,false);this.Dy.HD(this.Dy.Go,true,this.HK,null
);},Hg:function(G){var B;var Gc=this.Dy.G0;var Cz=(C.CH.isPrototypeOf(B=this.Dy.
Ch)?B:null);if(!Cz)return;Cz.S(this.V.B6);Cz.Aw1(19);Cz.A2(this.V.AmR);Cz.Bm_(19
);Cz.Cu(this.V.AqO);Cz.Bm$(19);Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FX(Gc));
else Cz.R(Xa);Cz.H(A.abK(Cz.M,[this.Dy.V_,(B=this.Dy.M)[3]-B[1]]));},Bv5:function(
s){this.Hg(s);},CI:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
F0(0);this.EV(this.AC.Do()-1);this.Dy.Ju(this.AC.Do());this.Dy.AbH(0,this.Dy.AY-
1);}},_Init:function(aArg){C.Dt._Init.call(this,aArg);A.Core.Dy._Init.call(this.
Dy={I:this},0);A.acl.Gh._Init.call(this.HK={I:this},0);this.__proto__=C.BW;this.
H(J0);this.Dy.NZ(C.CH);this.HK.WC(23);this.HK.HM(1);this.HK.Fl(200);this.J(this.
Dy,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dy.Hg=[this,this.Bv5
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dt;this.Dy._Done();this.HK.
_Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.
Dy._ReInit();this.HK._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SL={FF:null,OF:null,Dj:null,Au:null,Js:null,HJ:null,Pp:null,VO:null,QW:null,
Yl:null,P0:null,Gt:null,Gs:null,FU:0,A8:0,Asi:false,Bjh:false,Init:function(aArg
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
AQ);this.P0.L(this.V.AQ);}if(AtR.length>0){if(this.AGF)this.V.R((((this.DK+AcO)+
AtR)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcO)+
AtR)+String.fromCharCode(0x29));}else this.ALi();},Qm:function(G){if(this.FC===1
)A.pe([this,this.U8],this);else if(this.FC===4)A.pe([this,this.AiD],this);else if(
this.FC===5)A.pe([this,this.Aio],this);C.Dt.Qm.call(this,G);},J$:function(G){switch(
this.A8){case 0:C.Dt.J$.call(this,G);break;case 3:break;default:this.Adw(this);}
},J6:function(G){switch(this.A8){case 0:C.Dt.J6.call(this,G);break;default:this.
Ain(this);}},Ady:function(G){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0
])));},Ab9:function(E){if(A.aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Ady
],this.Dj,0);this.Dj=E;if(!!E)A.zX([this,this.Ady],E,0);if(!!E)A.pe([this,this.Ady
],this);},Ui:function(E){if(this.FU===E)return;this.FU=E;this.Au.Initialize(this.
FU);this.An();},Adw:function(G){this.FC=1;this.An();if(this.Bo.Bw){A.pe([this,this.
U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Bbr:function(s){this.Adw(s);},U8:
function(G){this.Ew(this.A8+1);},Al2:function(G){this.FC=4;this.An();if(this.Bo.
Bw){A.pe([this,this.AiD],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Al1:function(
G){this.FC=5;this.An();if(this.Bo.Bw){A.pe([this,this.Aio],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiD:function(G){var B;var F;var BR=this.FU;switch(this.A8){
case 1:{if(this.Asi){var ABe=A._NewObject(A.Core.An7,0);ABe.Ki=1;if(this.Au.J(ABe
).JO()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Au.GH<this.Au.Zp()
)this.Au.Lp(this.Au.GH+1);}break;case 2:{if(this.Asi){var ABe=A._NewObject(A.Core.
An7,0);ABe.Ki=this.Au.Zp();if(this.Au.J(ABe).JO()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Au.Um(this.Au.He+1);if(this.Au.Zp()<this.Au.GH)this.Au.Lp(this.
Au.Zp());}break;case 3:{if(this.Asi){var A1o=A._NewObject(A.Core.Bs,0);A1o.Initialize(
this.Au.JO());A1o.Year+=1;if(A1o.JO()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
Ui(((B=(this.Au.JO()|0))<0)?B+0x100000000:B);if(this.FU!==BR){if(!!this.Dj)(F=this.
Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}},Aio:function(G){var B;var F;var BR=
this.FU;if(this.A8===1)this.Au.Lp(this.Au.GH-1);if(this.A8===2){this.Au.Um(this.
Au.He-1);if(this.Au.Zp()<this.Au.GH)this.Au.Lp(this.Au.Zp());}if(this.A8===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.Ui(((B=(this.Au.JO()|
0))<0)?B+0x100000000:B);if(this.FU!==BR){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],
this.FU));A.abo(this.Dj,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[
0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=
null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aey));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U8];}break;case 2:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N
,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.Am1
));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Ain];(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aey));(F=this.N,F[1].call(F[0])).
CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U8];}break;case 3:{(F=this.N,F[
1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N
,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.Am1
));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Ain];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FF.AkP((F=this.N,F[1].call(F[
0])));}},AFz:function(E){if(this.Asi===E)return;this.Asi=E;},FQ:function(G){this.
Ew(1);},G_:function(G){this.Ew(0);},Ew:function(EO){var F;var AAo=this.A8;if(!this.
A8){this.FF.Ajy((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FU){var BR=this.FU;
this.Ui(A._GetAutoObject(A.Device.Helper).Dv());if(this.FU!==BR){if(!!this.Dj)(F=
this.Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}}}this.A8=EO;this.Bjh=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DJ(this);this.Gt.Bw=!!this.A8;this.Gs.Bw=
!!this.A8;if((!!AAo&&!this.A8)&&!!this.OF)A.pe(this.OF,this);this.An();},Ain:function(
G){if(this.A8>1)this.Ew(this.A8-1);},_Init:function(aArg){C.Dt._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Au={I:this},0);A.Core.BN._Init.call(this.Js={I:this}
,0);A.acg.AL._Init.call(this.HJ={I:this},0);A.acg.Text._Init.call(this.Pp={I:this
},0);A.acg.Text._Init.call(this.VO={I:this},0);A.acg.Text._Init.call(this.QW={I:
this},0);A.acg.Text._Init.call(this.Yl={I:this},0);A.acg.Text._Init.call(this.P0={
I:this},0);A.Core.BN._Init.call(this.Gt={I:this},0);A.Core.BN._Init.call(this.Gs={
I:this},0);this.__proto__=C.SL;this.H(UT);this.V.R(Aoi);this.Ht.Z(false);this.H2.
Z(false);this.Js.Filter=1;this.HJ.H(Aoj);this.HJ.L(0x55FFFFFF);this.Pp.H(Aok);this.
Pp.I7(true);this.Pp.A6(0x14);this.VO.H(Aol);this.VO.I7(true);this.VO.A6(0x14);this.
VO.R(Afy);this.QW.H(Ala);this.QW.I7(true);this.Yl.H(Ax0);this.Yl.I7(true);this.Yl.
R(Afy);this.P0.H(Ax1);this.P0.I7(true);this.P0.A6(0x11);this.Gt.Filter=4;this.Gt.
Bw=false;this.Gs.Filter=5;this.Gs.Bw=false;this.J(this.HJ,0);this.J(this.Pp,0);this.
J(this.VO,0);this.J(this.QW,0);this.J(this.Yl,0);this.J(this.P0,0);this.Js.BO=[this
,this.Bbr];this.Pp.S(A.aaL(A.fl.EK));this.VO.S(A.aaL(A.fl.EK));this.QW.S(A.aaL(A.
fl.EK));this.Yl.S(A.aaL(A.fl.EK));this.P0.S(A.aaL(A.fl.EK));this.Gt.BO=[this,this.
Al2];this.Gt.D1=[this,this.AiD];this.Gs.BO=[this,this.Al1];this.Gs.D1=[this,this.
Aio];this.FF=A._NewObject(C.Aer,0);this.Init(aArg);},_Done:function(){this.__proto__=
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
AU2={Ajw:null,AcD:null,Kx:null,AP:null,A_:null,Bk:function(aSize){C.Ba.Bk.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kx.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajw.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.AcD.H(this.Ajw.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Kx.L(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.AX
)return;this.Hn=Ad;if(!!this.AX){var AlA=this.AX.HF(Ad,6);var ApW=this.AX.CE(Ad,
7);var At7=this.AX.I2(Ad,9);this.T(A._GetAutoObject(A.acj.KK).ACO(AlA));this.Kx.
R(A._GetAutoObject(A.acj.KK).A6p(AlA));this.AcD.R(A._GetAutoObject(A.Device.Converter
).Ak0(ApW));this.AcD.L(A._GetAutoObject(A.acj.Assessment).Xv(At7));this.Ajw.L(A.
_GetAutoObject(A.acj.Assessment).Qj(At7));this.An();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Ajw={I:this},0);A.acg.Text._Init.
call(this.AcD={I:this},0);A.acg.Text._Init.call(this.Kx={I:this},0);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0);this.__proto__=
C.AU2;this.V.H(O4);this.AcD.L(A.jb.Text);this.Kx.R(Rj);this.Kx.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A_.H(Ax2);this.A_.L(A.jb.Bc);this.J(this.Ajw,0);this.J(this.AcD
,0);this.J(this.Kx,0);this.J(this.AP,0);this.J(this.A_,0);this.AcD.S(A.aaL(A.fl.
Af));this.Kx.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajw._Done();this.AcD._Done();this.Kx._Done();this.AP._Done();this.A_._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajw._ReInit(
);this.AcD._ReInit();this.Kx._ReInit();this.AP._ReInit();this.A_._ReInit();this.
AcD.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.F$={AX:null,AR:null,Cr:null,AD:
null,Afh:null,QC:null,KM:A.jV,Lj:null,AVo:true,Hg:function(G){var B;var Gc=this.
AD.G0;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Aa)return;Aa.Zs(this.
AX);Aa.Ce(Gc);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GK]));
},NZ:function(E){if(E===this.Lj)return;this.Lj=E;this.AD.NZ(E);},Zs:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Ce],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Ce],E,0);A.pe([this,this.Ce],this);},Ce:function(G){if(this.AVo===
false)return;if(!!this.AX){this.AD.Ju(this.AX.Ca());this.AD.AbH(0,this.AD.AY-1);
}else this.AD.Ju(0);if((this.AD.AY>0)&&(this.FH()<0))this.G2(0);if(this.FH()>=this.
AD.AY){this.G2(0);this.AD.F_(0);}if(this.AD.AY<=0){this.QC.Z(true);this.G2(-1);}
else{this.QC.Z(false);this.ABC(null,null);}},Fe:function(G){var B;this.Afh.Mu(this.
AD.GK*this.AD.AY);this.Afh.Mw((B=this.AD.M)[3]-B[1]);this.Afh.Mv(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cr.CO){case 4:if(this.FH()>0)this.G2(
this.FH()-1);break;case 5:if(this.FH()<(this.AD.AY-1))this.G2(this.FH()+1);break;
default:this.Cr.NH=true;}this.AD.HD(this.FH(),true,null,null);}else if((this.Cr.
CO!==4)&&(this.Cr.CO!==5))this.Cr.NH=true;},Zu:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbH(0,this.AD.AY);},G2:function(E){this.AD.G2(E);this.AD.HD(E,
true,null,null);},FH:function(){return this.AD.Go;},Dz:function(E){if(this.KM===
E)return;this.KM=E;this.QC.R(E);},ABC:function(AcX,E5){this.AD.ABC(AcX,E5);},ATF:
function(E){if(this.AVo===E)return;this.AVo=E;if(E)A.pe([this,this.Ce],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BN._Init.call(this.Cr={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afh={I:this},
0);A.acg.Text._Init.call(this.QC={I:this},0);this.__proto__=C.F$;this.H(UU);this.
Lj=C.Ba;this.Cr.Filter=147;this.AD.AZ(0x3F);this.AD.H(UU);this.AD.Ae4(40);this.Afh.
AZ(0x3A);this.Afh.H(AsS);this.QC.AZ(0x3F);this.QC.H(Ax3);this.QC.Hh(10);this.QC.
KS(true);this.QC.A6(0xA);this.QC.L(A.jb.Text);this.J(this.AD,0);this.J(this.Afh,
0);this.J(this.QC,0);this.Cr.BO=[this,this.DE];this.Cr.D1=[this,this.DE];this.AD.
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
jb.CK);else this.Background.L(A.jb.CS);}},Zs:function(E){if(this.AX===E)return;this.
AX=E;},Ce:function(Ad){A.ab5("%s",Ax4);},_Init:function(aArg){C.Co._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GU={Bj:null,Fy:null
,DO:null,FG:null,VX:null,JH:null,KM:A.jV,AT3:0,AT4:0,AT5:0,Afi:false,CP:function(
){if(A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.
Device).Ds(0);A.pe([this,this.BaG],this);}},Init:function(aArg){var B;A.zX([this
,this.A2Q],[B=A._GetAutoObject(A.Device.Device),B.AEs,B.AII],0);A.zX([this,this.
A2Q],[B=A._GetAutoObject(A.Device.Device),B.A8f,B.BaP],0);A.zV([this,this.Af6],A.
_GetAutoObject(A.Device.Device).Am,0);A.zV([this,this.AcH],A._GetAutoObject(A.Device.
Device).Am,0);A.zX([this,this.BAN],[B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0
],0);A.pe([this,this.AcH],this);A.pe([this,this.Bbl],this);A.pe([this,this.Axv],
this);},Wv:function(G){this.Agp();if(!A._GetAutoObject(A.Device.Device).JH){this.
A4E(A.aaR(A.acf.Bjy),[this,this.Bj$],1);this.A4E(A.aaR(A.acf.Boz),[this,this.Bj_
],0);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Bi9));A._GetAutoObject(
C.BH).Ft();}var O;for(O=this.JH.Do()-1;O>=0;O=O-1)switch(this.JH.C4(O)){case 0:this.
Ago(A.aaR(A.acf.XP),[this,this.ATG],0);break;case 1:this.Ago(A.aaR(A.acf.Temperature
),[this,this.ATI],1);break;case 2:this.Ago(A.aaR(A.acf.Rating),[this,this.ATH],2
);break;case 3:this.Ago(A.aaR(A.acf.Afr),[this,this.ATJ],3);break;default:A.ab5(
"%s",Ax5);}A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.A5S
));A._GetAutoObject(A.Device.Device).Ds(6);},BaG:function(s){this.Wv(s);},DE:function(
G){var D5=(A.Core.BN.isPrototypeOf(G)?G:null);var AfT=this.JH.DU(A._GetAutoObject(
A.Device.Device).JH);if(this.Afi)return;switch(D5.CO){case 6:{AfT=AfT-1;if(AfT<0
)AfT=this.JH.Do()-1;A._GetAutoObject(A.Device.Device).Ab3(this.JH.C4(AfT));}break;
case 7:{AfT=AfT+1;if(AfT>=this.JH.Do())AfT=0;A._GetAutoObject(A.Device.Device).Ab3(
this.JH.C4(AfT));}break;default:D5.NH=true;}},CF:function(G){if(this.DO.AzZ()){this.
DO.Ac8();if(this.DO.AzZ()===false)this.Bj.ATF(true);return;}else if(this.Afi)this.
A3J(this);if(!!this.Bj)this.Bj.ATF(true);},E3:function(G){if(!!this.Bj)this.Bj.ATF(
false);},Axv:function(G){var B;if(!!this.Bj)this.HN(this.Bj);this.Bj=A._NewObject(
C.AMv,0);this.Bj.H(Aom);this.Bj.Zs(A._GetAutoObject(A.Device.Device).Am);this.Bj.
Zu([this,this.AIU]);if(!!this.Fy)this.Bj.A9p([B=this.Fy,B.A8W,B.A_g]);this.A32(this
);this.J(this.Bj,0);if(this.Afi===false)this.Bb(this.Bj);this.A2Q(this);this.Box(
this);},A9m:function(G){A._GetAutoObject(A.Device.Device).Ds(0);this.Dq(this.A6C(
));this.Ej.AR=[this,this.AIU];this.ALn(this);this.Ej.Ar(true);this.Bb(this.Ej);this.
Afi=true;},Bkf:function(G){var B;A._GetAutoObject(A.Device.Device).Ds(0);if(!this.
Bj)return;var Aa=(C.AB1.isPrototypeOf(B=this.Bj.AD.BiV(this.Bj.AD.Go))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).HL(Aa.Hn);else A._GetAutoObject(A.Device.
Helper).W.Hi();this.Agb();},Al0:function(G){var F;if(!this.FG)this.A5T(this);else
switch((F=this.FG,F[1].call(F[0]))){case 0:this.A5T(this);break;case 1:this.BhQ(
this);break;case 9:this.A5U(this);break;case 4:this.A5W(this);break;case 6:this.
A5Z(this);break;case 8:this.ANW(this);break;case 2:this.A53(this);break;case 3:this.
BhR(this);break;case 7:this.BhS(this);break;case 5:this.BhT(this);break;case 10:
this.BhV(this);break;case 11:this.A5V(this);break;case 12:this.A52(this);break;case
13:this.A54(this);break;case 14:this.A5X(this);break;case 18:this.A5Y(this);break;
case 15:this.A50(this);break;case 16:this.A55(this);break;case 17:this.A51(this);
break;default:A.ab5("%s%e",Afz,(F=this.FG,F[1].call(F[0])));}},AIU:function(s){this.
Al0(s);},Blp:function(G){this.Dq(C.Km);this.Ej.AR=null;this.Afi=false;this.AcH(this
);this.BfG();this.N.TW.Dr(255);this.N.TX.Dr(255);this.Bb(this.Bj);this.Ej.Ar(false
);},Anp:function(G){A._GetAutoObject(C.A$).Fv();},Dz:function(E){if(this.KM===E)
return;this.KM=E;this.A32(this);},Abt:function(){switch(A._GetAutoObject(A.Device.
Device).JH){case 0:return this.BgY(A._GetAutoObject(A.Device.Device).Amt);case 2:
return C.AM8;case 1:return C.AM9;case 3:return C.AM$;case 8:case 9:case 10:case 4:
case 5:case 6:return C.Amz;case 7:return C.AB0;case 12:return C.AB3;case 11:return C.
ABZ;case 13:return C.AB2;default:throw new Error(Aon);}},Abu:function(){switch(A.
_GetAutoObject(A.Device.Device).JH){case 0:return this.BgZ(A._GetAutoObject(A.Device.
Device).Amt);case 2:return C.ADj;case 1:return C.APA;case 3:return C.APC;case 4:
return C.ADf;case 8:case 9:case 10:case 5:case 6:return C.Am0;case 7:return C.ADh;
case 12:return C.ADi;case 11:return C.ADg;case 13:return C.ADk;default:throw new
Error(Aon);}},A2Q:function(G){this.ATi(A._GetAutoObject(A.Device.Device).JH);this.
ATj(A._GetAutoObject(A.Device.Device).Amt);if(!!this.Bj){this.Bj.NZ(this.Abt());
this.BoD(this);}},BoD:function(G){var B;if(!!this.Fy)this.HN(this.Fy);this.Fy=(C.
Dc.isPrototypeOf(B=A._NewObject(this.Abu(),0))?B:null);this.Fy.H(IR);if(!!this.Bj
)this.Bj.A9p([B=this.Fy,B.A8W,B.A_g]);this.J(this.Fy,0);},Bkd:function(G){this.Q6(
this);A._GetAutoObject(A.Device.Device).Ds(0);},ATG:function(G){A._GetAutoObject(
A.Device.Device).Ab3(0);},ATI:function(G){A._GetAutoObject(A.Device.Device).Ab3(
1);},ATH:function(G){A._GetAutoObject(A.Device.Device).Ab3(2);},ATJ:function(G){
A._GetAutoObject(A.Device.Device).Ab3(3);},Q6:function(G){A._GetAutoObject(A.Device.
Device).Am.Bl(A._GetAutoObject(A.Device.Helper).Mo());},Bbl:function(s){this.Q6(
s);},HO:function(G){if(this.Afi){this.ALn(this);return;}this.N.CY(A.aaL(A.ach.E2
));this.N.Cs(A.aaL(A.ach.ADD));this.N.C6(A.aaL(A.ach.Options));this.N.CB=[this,this.
Anp];this.N.Ck=[this,this.A9m];this.N.Cl=[this,this.BaG];this.N.Hu(A.jV);this.N.
FJ(A.jV);this.N.CV(A.jV);if(!A._GetAutoObject(A.Device.Device).Am.Ca()){this.N.I4.
Dr(100);this.N.Ck=null;}else this.N.I4.Dr(255);},AyN:function(s){this.HO(s);},Ago:
function(Ac6,Ac7,AJh){A._GetAutoObject(C.BH).AuA(Ac6,Ac7,[this,this.A8P,this.ATi
],AJh);},Af6:function(G){this.A32(this);if(this.Afi)A.pe([this,this.ALn],this);}
,Agb:function(){A._GetAutoObject(C.A$).Cg(9);},A32:function(G){if(!this.Bj)return;
if(!A._GetAutoObject(A.Device.Device).Am.QE()||!A._GetAutoObject(A.Device.Device
).Am.Filter)this.Bj.Dz(A.aaR(A.acf.AEi));else if(A._GetAutoObject(A.Device.Helper
).Arb(A._GetAutoObject(A.Device.Device).Am.Filter))this.Bj.Dz(this.KM);else if(!
A._GetAutoObject(A.Device.Device).Am.Filter.DQ(1,4)){if(A._GetAutoObject(A.Device.
Helper).ACW(A._GetAutoObject(A.Device.Device).Am.Filter)===1)this.Bj.Dz(A.aaR(A.
acf.AN6));else this.Bj.Dz(A.aaR(A.acf.AN5));}else this.Bj.Dz(A.aaR(A.acf.AR2));}
,AEI:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],0));},AwM:function(
E){if(A.aaZ(this.FG,E))return;if(!!this.FG)A.z$([this,this.A0s],this.FG,0);this.
FG=E;if(!!E)A.zX([this,this.A0s],this.FG,0);if(!!E)A.pe([this,this.A0s],this);},
AEO:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],1));},AwR:function(
G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],2));},ATn:function(G){var F;if(!
!this.FG)(F=this.FG,F[2].call(F[0],3));},ATB:function(G){var F;if(!!this.FG)(F=this.
FG,F[2].call(F[0],7));},ATC:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(
F[0],5));},A53:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.
Helper).HL(this.Bj.FH());this.DO.Qh(1);}},IY:function(Ac6,Ac7,AoY){A._GetAutoObject(
C.BH).AuA(Ac6,Ac7,[this,this.A8R,this.ATk],AoY);},Blz:function(G){var F;if(!!this.
FG)(F=this.FG,F[2].call(F[0],4));},A5W:function(G){if(!this.Bj)return;if(this.M_(
)){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.DO.BBe();}},BlA:function(
G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],6));},A5Z:function(G){if(!this.Bj
)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.DO.
BBf();}},ANW:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.
Helper).HL(this.Bj.FH());this.DO.Qh(1024);}},BmN:function(G){var F;if(!!this.FG)(
F=this.FG,F[2].call(F[0],8));},Aku:function(G){var F;if(!!this.FG)(F=this.FG,F[2
].call(F[0],9));},BhR:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FH());this.DO.Qh(2);}},A5T:function(G){if(!this.Bj)return;
if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());if(A._GetAutoObject(
A.Device.Helper).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(
A.Device.Device).A9(66,true,A.jV,0,null);else this.BA1();}},BhQ:function(G){if(!
this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());
this.DO.Qh(16);}},BA1:function(){A._GetAutoObject(C.A$).Cg(94);},BhS:function(G){
if(!this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH(
));this.DO.Qh(4);}},BhT:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FH());this.DO.Qh(8);}},A5U:function(G){var B;if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());if(this.
Afi){A.zX([this,this.AAq],[B=this.DO,B.Anw,B.Jv],0);this.A3J(this);}this.DO.Ac8(
);}},AL8:function(Ac6,Ac7,Bx3){A._GetAutoObject(C.BH).BgO(Ac6,Ac7,Bx3);},ALn:function(
G){this.N.Hu(A.jV);this.N.CV(A.jV);this.N.CY(A.aaL(A.ach.Aex));this.N.CB=[this,this.
Blp];this.N.TW.Dr(100);this.N.TX.Dr(100);var Gd=A._GetAutoObject(A.Device.Device
).Am.Ca();if(Gd<=0){this.N.Cs(null);this.N.C6(null);this.N.Ck=null;this.N.Cl=null;
this.N.ZC=false;this.N.ZD=false;}else if(Gd===1){this.N.Cs(null);this.N.C6(A.aaL(
A.ach.Aey));this.N.Ck=null;this.N.Cl=[this,this.AIU];this.N.ZC=false;this.N.ZD=false;
}else{this.N.Cs(A.aaL(A.ach.Aq4));this.N.C6(A.aaL(A.ach.Aq$));this.N.Ck=[this,this.
A3l];this.N.Cl=[this,this.A3m];this.N.ZC=true;this.N.ZD=true;}},A3l:function(G){
if(!this.Bj)return;if(this.Bj.FH()<(A._GetAutoObject(A.Device.Device).Am.Ca()-1)
)this.Bj.G2(this.Bj.FH()+1);},A3m:function(G){if(!this.Bj)return;if(this.Bj.FH()>
0)this.Bj.G2(this.Bj.FH()-1);},Box:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).Am.Lc(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bj.G2(Bf);A.ab5("%s",Aoo);}}},M_:function(){return this.
Bj.FH()>=0;},Akh:function(){return A._GetAutoObject(A.Device.Device).Am.Ca()>5;}
,Agp:function(){this.BgP();A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.AUr),[this,this.
A9m]);A._GetAutoObject(C.BH).Ft();},AcH:function(G){if(this.Afi)this.ALn(this);else
this.HO(this);},A3J:function(G){var aFilter=A._GetAutoObject(A.Device.Device).Am.
Filter.Fg();var Ay1=aFilter.DQ(1,4);if(!!Ay1){aFilter.N3(Ay1);A._GetAutoObject(A.
Device.Device).Am.Bl(aFilter);if(!!this.Bj)this.Bj.G2(0);}},AAq:function(G){var B;
if(!this.DO.Gu&&this.Afi){A.z$([this,this.AAq],[B=this.DO,B.Anw,B.Jv],0);this.A3J(
this);}},Bno:function(G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],10));},BhV:
function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(
this.Bj.FH());this.DO.Qh(256);}},A3b:function(G){var F;this.ATk((F=this.FG,F[1].
call(F[0])));A.pe([this,this.AyN],this);},A0s:function(s){this.A3b(s);},Blw:function(
G){var F;if(!!this.FG)(F=this.FG,F[2].call(F[0],11));},A5V:function(G){if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.
DO.Qh(4096);}},A52:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FH());this.DO.Qh(16384);}},A54:function(G){if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.
BA2();}},BA2:function(){A._GetAutoObject(C.A$).Ahp(75);},A5X:function(G){if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.
DO.Qh(32768);}},A50:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FH());this.DO.Qh(65536);}},A55:function(G){if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.
DO.Qh(131072);}},BgP:function(){if(!A._GetAutoObject(A.Device.Device).Am.Filter||
A._GetAutoObject(A.Device.Helper).Arb(A._GetAutoObject(A.Device.Device).Am.Filter
))A._GetAutoObject(C.BH).XN(A.aaR(A.acf.AB6));else A._GetAutoObject(C.BH).Qw(A.aaR(
A.acf.AB6),[this,this.Bkd]);A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.AkS),[this,this.
Bkf]);A._GetAutoObject(C.BH).Ft();},BgZ:function(AoC){switch(AoC){case 0:return C.
Am0;case 1:return C.APy;default:throw new Error(Xb+AoC.toFixed());}},BgY:function(
AoC){switch(AoC){case 0:return C.Amz;case 1:return C.AM6;default:throw new Error(
Xb+AoC.toFixed());}},Bj_:function(G){A._GetAutoObject(A.Device.Device).ArG(0);},
Bj$:function(G){A._GetAutoObject(A.Device.Device).ArG(1);},A4E:function(Ac6,Ac7,
AoC){A._GetAutoObject(C.BH).AuA(Ac6,Ac7,[this,this.A8Q,this.ATj],AoC);},A51:function(
G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.
FH());this.DO.Qh(128);}},BAN:function(G){var B;if(!this.Bj)return;A.pe([B=this.Bj
,B.Ce],this);},A5Y:function(G){if(!this.Bj)return;if(this.M_()){A._GetAutoObject(
A.Device.Helper).HL(this.Bj.FH());this.DO.Qh(524288);}},BhU:function(G){if(!this.
Bj)return;if(this.M_()){A._GetAutoObject(A.Device.Helper).HL(this.Bj.FH());this.
DO.Qh(262144);}},ATi:function(E){if(this.AT3===E)return;this.AT3=E;A.abo([this,this.
A8P,this.ATi],0);},ATj:function(E){if(this.AT4===E)return;this.AT4=E;A.abo([this
,this.A8Q,this.ATj],0);},ATk:function(E){if(this.AT5===E)return;this.AT5=E;A.abo([
this,this.A8R,this.ATk],0);},A6C:function(){return C.Yu;},BfG:function(){var B;var
Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).Am.Filter){Filter=
A._GetAutoObject(A.Device.Device).Am.Filter.Fg();FilterCriterion=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=Filter.DQ(1,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion
);A._GetAutoObject(A.Device.Device).Am.Bl(Filter);}},A8P:function(){return this.
AT3;},A8Q:function(){return this.AT4;},A8R:function(){return this.AT5;},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.ADj._Init.call(this.VX={I:this},0);C.JH._Init.
call(this.JH={I:this},0);this.__proto__=C.GU;this.Background.H(Cc);this.N.Z(true
);this.N.OO(true);this.N.OP(true);this.Ej.A9Q(A.jb.CS);this.Ej.A9R(A.jb.Text);this.
Dq(C.Km);this.VX.H(IR);this.KM=A.aaR(A.acf.AEi);this.J(this.VX,0);this.DO=A._GetAutoObject(
C.DO);this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.VX._Done();this.
JH._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
VX._ReInit();this.JH._ReInit();this.Dz(A.aaR(A.acf.AEi));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Bj)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Fy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DO)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.FG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.VX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::AnimalListScreen"};C.AB1={AP:null,A_:null,UE:
null,AcB:null,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);
this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.UE.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.
A_.H([this.UE.M[2]-1,0,this.UE.M[2]+1,aSize[1]]);this.AcB.H([this.UE.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UE.L(this.V.AQ);this.
AcB.L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){this.
T(this.AX.CE(Ad,1).toFixed());this.UE.R(this.AX.CE(Ad,2).toFixed());this.AcB.R(this.
AX.CE(Ad,3).toFixed());this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg
);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0
);A.acg.Text._Init.call(this.UE={I:this},0);A.acg.Text._Init.call(this.AcB={I:this
},0);this.__proto__=C.AB1;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.UE.L(A.jb.Text
);this.AcB.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,0);this.J(this.UE,0);this.
J(this.AcB,0);this.UE.S(A.aaL(A.fl.Af));this.AcB.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A_._Done();this.UE.
_Done();this.AcB._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A_._ReInit();this.UE._ReInit();this.AcB._ReInit(
);this.UE.S(A.aaL(A.fl.Af));this.AcB.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad8={Oz:null,SM:null,Mi:null,Init:function(aArg){var B;A.zX([this,this.A2T],[
B=A._GetAutoObject(A.Device.Device),B.Av9,B.AyF],0);A.zX([this,this.Adx],[B=A._GetAutoObject(
A.Device.Device),B.Av6,B.AyE],0);A.pe([this,this.Adx],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SM.R(A._GetAutoObject(A.Device.Device).Aa5.toFixed()+Alb
);this.Oz.Z(A._GetAutoObject(A.Device.Device).AmC);},Adx:function(G){this.An();}
,MU:function(G){A._GetAutoObject(C.A$).Fv();},A2T:function(G){if(A._GetAutoObject(
A.Device.Device).AmC===false){this.Oz.Z(false);A._GetAutoObject(C.A$).Fv();}else
this.Oz.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oz={I:this},0);A.acg.Text._Init.call(this.SM={I:this},0);C.Mi._Init.call(
this.Mi={I:this},0);this.__proto__=C.Ad8;var B;this.Background.L(A.jb.CS);this.N.
Z(true);this.N.CV(A.aaR(A.acf.Ok));this.Oz.H(AsT);this.Oz.R(A.aaR(A.acf.Oz));this.
Oz.L(A.jb.Text);this.Oz.Z(false);this.SM.H(AsU);this.SM.R(AsV);this.SM.L(A.jb.Text
);this.Mi.H(AsW);this.J(this.Oz,0);this.J(this.SM,0);this.J(this.Mi,0);this.N.Cl=[
this,this.MU];this.Oz.S(A.aaL(A.fl.Af));this.SM.S(A.aaL(A.fl.Af));this.Mi.As([B=
A._GetAutoObject(A.Device.Device),B.Av6,B.AyE]);this.Mi.A97([B=A._GetAutoObject(
A.Device.Device),B.Av9,B.AyF]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oz._Done();this.SM._Done();this.Mi._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oz._ReInit();this.SM._ReInit();this.Mi._ReInit(
);this.N.CV(A.aaR(A.acf.Ok));this.Oz.R(A.aaR(A.acf.Oz));this.Oz.S(A.aaL(A.fl.Af)
);this.SM.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mi={Ad3:null,Ad4:null,Kd:function(G){var F;if(!!this.Q){this.A12();var Ada=(
F=this.Q,F[1].call(F[0]));if(Ada>20)this.Ov.L(A.jb.E1);else this.Ov.L(A.jb.Gf);this.
Ov.L((this.Ov.AQ&0x00FFFFFF)|(this.AlI(Ada,0,20)<<24));this.TB.L((this.TB.AQ&0x00FFFFFF
)|(this.AlI(Ada,21,40)<<24));this.TC.L((this.TC.AQ&0x00FFFFFF)|(this.AlI(Ada,41,
60)<<24));this.Ad3.L((this.Ad3.AQ&0x00FFFFFF)|(this.AlI(Ada,61,80)<<24));this.Ad4.
L((this.Ad4.AQ&0x00FFFFFF)|(this.AlI(Ada,81,100)<<24));}},A12:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U3=this.Ad4;else if((F=this.Q,F[
1].call(F[0]))>60)this.U3=this.Ad3;else if((F=this.Q,F[1].call(F[0]))>40)this.U3=
this.TC;else if((F=this.Q,F[1].call(F[0]))>20)this.U3=this.TB;else this.U3=this.
Ov;}else this.U3=null;},_Init:function(aArg){C.Ox._Init.call(this,aArg);A.acg.AL.
_Init.call(this.Ad3={I:this},0);A.acg.AL._Init.call(this.Ad4={I:this},0);this.__proto__=
C.Mi;this.H(Alc);this.NO.H(Alc);this.Ov.H(AsX);this.TB.H(Ax6);this.TC.H(Ax7);this.
Ad3.H(Ax8);this.Ad3.L(A.jb.E1);this.Ad4.H(AVS);this.Ad4.L(A.jb.E1);this.J(this.Ad3
,0);this.J(this.Ad4,0);this.NO.Aw(A.aaL(A.ach.AMQ));},_Done:function(){this.__proto__=
C.Ox;this.Ad3._Done();this.Ad4._Done();C.Ox._Done.call(this);},_ReInit:function(
){C.Ox._ReInit.call(this);this.Ad3._ReInit();this.Ad4._ReInit();},_Mark:function(
D){var B;C.Ox._Mark.call(this,D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUX={N6:null,Lr:null,Ak6:null,ZY:null,ZX:null,CP:function(){this.An();},Init:
function(aArg){var B;A.zX([this,this.ApM],[B=A._GetAutoObject(A.Device.Device),B.
ASE,B.A0d],0);A.zX([this,this.ApM],[B=A._GetAutoObject(A.Device.Device),B.ASH,B.
A0f],0);A.zX([this,this.ApM],[B=A._GetAutoObject(A.Device.Device),B.A86,B.Bba],0
);A.pe([this,this.ApM],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GE(this
);this.ABq(this);this.BB_(this);this.DJ(this);},BAr:function(G){A._GetAutoObject(
A.Device.Device).AsC();},ApM:function(G){this.An();},GE:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZY.Z(false);break;case 4:{var A3E;if(!A._GetAutoObject(A.Device.Device).Afn)A3E=
0;else A3E=((A._GetAutoObject(A.Device.Device).AxL*100)/A._GetAutoObject(A.Device.
Device).Afn)|0;this.ZY.By(A3E);this.ZY.Z(true);}break;default:A.ab5("%s%e",AsY,A.
_GetAutoObject(A.Device.Device).SyncState);}},BB_:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CK);this.Lr.L(A.jb.Text);this.N6.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gf);this.Lr.L(A.jb.Bm);this.N6.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",AsY,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CY(null);this.N.CB=null;this.N.CV(A.jV);this.N.Cl=null;}break;
case 7:{this.N.CY(null);this.N.CB=null;this.N.CV(A.aaR(A.acf.Ok));this.N.Cl=[this
,this.BAr];}break;default:A.ab5("%s%e",AsY,A._GetAutoObject(A.Device.Device).SyncState
);}},ABq:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lr.R(A.aaR(A.acf.Bpo));break;case 1:this.Lr.R(A.aaR(A.acf.Bpl));break;
case 2:this.Lr.R(A.aaR(A.acf.Bpi));break;case 3:this.Lr.R(A.aaR(A.acf.Bpm));break;
case 4:this.Lr.R((A.aaR(A.acf.Bpk)+Ax9)+A._GetAutoObject(A.Device.Helper).Nk(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.Bn0),P6,A._GetAutoObject(A.Device.Device).AxL.toFixed(
)),Ax_,A._GetAutoObject(A.Device.Device).Afn.toFixed()));break;case 5:this.Lr.R(
A.aaR(A.acf.Bpn));break;case 7:this.Lr.R(A.aaR(A.acf.Bpj));break;default:A.ab5("%s%e"
,AsY,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CH._Init.call(this.N6={I:this},0);C.CH._Init.call(this.Lr={I:this
},0);A.acg.Ap._Init.call(this.Ak6={I:this},0);A.acr.ADm._Init.call(this.ZY={I:this
},0);A.acr.ADn._Init.call(this.ZX={I:this},0);this.__proto__=C.AUX;this.N.Z(true
);this.N6.H(AVT);this.N6.R(A.aaR(A.acf.N6));this.Lr.AZ(0x3F);this.Lr.H(AVU);this.
Lr.A6(0x12);this.Ak6.H(AVV);this.Ak6.L(A.jb.AV);this.ZY.H(AVW);this.ZY.Ar(false);
this.ZY.By(0);this.ZX.Bni(0);this.ZX.A_t(0);this.ZX.A_r(A.jb.AV);this.ZX.A_q(0);
this.ZX.AFZ(AHi);this.J(this.N6,0);this.J(this.Lr,0);this.J(this.Ak6,0);this.J(this.
ZY,0);this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(A.fl.Af));this.N6.Cu(A.aaL(A.fl.
Ak));this.Lr.S(A.aaL(A.fl.Af));this.Lr.A2(A.aaL(A.fl.Ak));this.Lr.Cu(A.aaL(A.fl.
Bh));this.Ak6.Aw(A.aaL(A.ach.AQK));this.ZY.OnSetAppearance(this.ZX);this.ZX.A_s(
A.aaL(A.ach.NS));this.ZX.A_p(A.aaL(A.ach.NS));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N6._Done();this.Lr._Done();this.Ak6._Done();this.ZY._Done(
);this.ZX._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N6._ReInit();this.Lr._ReInit();this.Ak6._ReInit();this.ZY._ReInit();this.
ZX._ReInit();this.N6.R(A.aaR(A.acf.N6));this.N6.S(A.aaL(A.fl.EK));this.N6.A2(A.aaL(
A.fl.Af));this.N6.Cu(A.aaL(A.fl.Ak));this.Lr.S(A.aaL(A.fl.Af));this.Lr.A2(A.aaL(
A.fl.Ak));this.Lr.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqY={_Init:function(aArg){C.ADc._Init.call(this,aArg
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
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akv(E);},A1g:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B7,this.
B8],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1g],[B=this.Animal,B.ASi,B.Akv],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1g],[B=this.Animal,B.ASi,B.Akv],0);A.pe([this,this.A1g],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cf=[]).__proto__=C.BirthType.Cf;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acs:null,Do:
function(){return A._GetAutoObject(A.Device.Helper).AdY.MC;},C4:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdY.MC)return-1;return A._GetAutoObject(
A.Device.Helper).AdY.Get(aIndex);},FX:function(aIndex){return this.Acs.BI(this.C4(
aIndex));},DU:function(A7){var O=0;while(O<A._GetAutoObject(A.Device.Helper).AdY.
MC){if(A._GetAutoObject(A.Device.Helper).AdY.Get(O)===A7)return O;O=O+1;}return-
1;},HH:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UB.
MC){if(A._GetAutoObject(A.Device.Helper).UB.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UB.Get(O);O=O+1;}return max;},As:function(E){C.AC.As.call(this,E);if(!!this.
Animal)this.Animal.EB(E);},A0$:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B7,this.B8],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A0$],[B=this.Animal,B.PM,B.EB],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A0$],[B=this.Animal,B.PM,B.EB],0);A.pe([
this,this.A0$],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acs={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acs._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acs._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUD={Init:function(aArg){var B;A.pe([this,this.AfC],this);A.zX([this,this.AfC
],[B=A._GetAutoObject(A.Device.Device),B.Arw,B.Ath],0);},A3K:function(G){A._GetAutoObject(
A.Device.Device).A9(38,true,A.jV,0,[this,this.Bbs]);},A3j:function(G){var B;var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(
A.Device.Device).Aso(this);},A1A:function(G){var F;if(this.A8===1){var BR=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlQ)this.D7=this.AlQ;if(this.D7<A._GetAutoObject(
A.Device.Device).Z1)this.D7=A._GetAutoObject(A.Device.Device).Z1;if(this.DX!==BR
){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A8===
2){var BR=this.DX;this.DX=this.DX-10;if(this.DX<this.D7)this.DX=this.D7;if(this.
DX!==BR){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.
DJ(this);this.An();},A1$:function(G){var F;if(this.A8===1){var BR=this.D7;this.D7=
this.D7+10;if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BR){if(!!this.JT)(F=this.
JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A8===2){var BR=this.DX;this.
DX=this.DX+10;if(this.DX>this.AlL)this.DX=this.AlL;if(this.DX!==BR){if(!!this.JS
)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.DJ(this);this.An();
},GE:function(G){this.PF.R(AHj+A._GetAutoObject(A.Device.Converter).Ak0(this.D7)
);this.PG.R(AHj+A._GetAutoObject(A.Device.Converter).Ak0(this.DX));this.Ss.R(A._GetAutoObject(
A.acj.Temperature).AlJ());},A14:function(Ato){if(Ato===1)return this.PF;else if(
Ato===2)return this.PG;else return null;},_Init:function(aArg){C.Acq._Init.call(
this,aArg);this.__proto__=C.AUD;this.AlL=5000;this.AlQ=3000;this.T(A.aaR(A.acf.Arm
));this.Background.H(AfA);this.V.H(BF);this.V.R(A.aaR(A.acf.AGV));this.V.A6(0x12
);this.Init(aArg);},_ReInit:function(){C.Acq._ReInit.call(this);this.T(A.aaR(A.acf.
Arm));this.V.R(A.aaR(A.acf.AGV));},_className:"Application::SettingsItemThresholdsTemp"
};C.EA={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.EA;this.H(BF);this.Background.
H(BF);this.Background.L(A.jb.CK);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa8:null,Aba:null,Aa_:
null,Background:null,Aa7:null,Aa$:null,Aa9:null,AjD:null,Arr:null,VI:null,A4:0,Bz_:
function(G){if(this.AjD.CO===6){if(this.A4===1)this.AnJ(2);else if(this.A4===2)this.
AnJ(3);else this.AnJ(1);}else if(this.AjD.CO===7){if(this.A4===3)this.AnJ(2);else
if(this.A4===2)this.AnJ(1);else this.AnJ(3);}},AnJ:function(E){if(this.A4===E)return;
this.A4=E;switch(this.A4){case 3:this.Background.H(this.Aa7.M);break;case 2:this.
Background.H(this.Aa$.M);break;case 1:this.Background.H(this.Aa9.M);break;default:
this.Background.H(Aop);}},IW:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hk._Init.
call(this.Aa8={I:this},0);A.acg.Hk._Init.call(this.Aba={I:this},0);A.acg.Hk._Init.
call(this.Aa_={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aen._Init.call(this.Aa7={I:this},0);A.acg.Aen._Init.call(this.Aa$={I:this},0);A.
acg.Aen._Init.call(this.Aa9={I:this},0);A.Core.BN._Init.call(this.AjD={I:this},0
);A.Core.BN._Init.call(this.Arr={I:this},0);A.Graphics.AMH._Init.call(this.VI={I:
this},0);this.__proto__=C.Rating;this.H(AVX);this.Aa8.H(AHk);this.Aa8.L(A.jb.Text
);this.Aa8.AnH(Ald);this.Aa8.Nh(3);this.Aa8.Z(true);this.Aba.H(AHl);this.Aba.L(A.
jb.Text);this.Aba.AnH(Ald);this.Aba.Nh(3);this.Aba.Z(true);this.Aa_.H(AHm);this.
Aa_.L(A.jb.Text);this.Aa_.AnH(Ald);this.Aa_.Nh(3);this.Aa_.Z(true);this.Background.
H(Aop);this.Background.L(A.jb.AV);this.Aa7.H(AHk);this.Aa7.L(A.jb.E1);this.Aa7.AnH(
Ald);this.Aa7.Z(true);this.Aa$.H(AHl);this.Aa$.L(A.jb.H6);this.Aa$.AnH(Ald);this.
Aa$.Z(true);this.Aa9.H(AHm);this.Aa9.L(A.jb.Gf);this.Aa9.AnH(Ald);this.Aa9.Z(true
);this.AjD.Filter=147;this.Arr.Filter=1;this.VI.BlS(360);this.VI.Bm8(22);this.VI.
Bng(2);this.J(this.Aa8,0);this.J(this.Aba,0);this.J(this.Aa_,0);this.J(this.Background
,0);this.J(this.Aa7,0);this.J(this.Aa$,0);this.J(this.Aa9,0);this.Aa8.Zv(this.VI
);this.Aba.Zv(this.VI);this.Aa_.Zv(this.VI);this.Background.Aw(A.aaL(A.ach.NR));
this.Aa7.Zv(this.VI);this.Aa$.Zv(this.VI);this.Aa9.Zv(this.VI);this.AjD.BO=[this
,this.Bz_];this.Arr.BO=[this,this.IW];},_Done:function(){this.__proto__=A.Core.P;
this.Aa8._Done();this.Aba._Done();this.Aa_._Done();this.Background._Done();this.
Aa7._Done();this.Aa$._Done();this.Aa9._Done();this.AjD._Done();this.Arr._Done();
this.VI._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa8._ReInit();this.Aba._ReInit();this.Aa_._ReInit();this.Background.
_ReInit();this.Aa7._ReInit();this.Aa$._ReInit();this.Aa9._ReInit();this.AjD._ReInit(
);this.Arr._ReInit();this.VI._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa$).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asq={Akj:null,Asb:null,Background:null,TN:null,TI:null,AbZ:null,AbY:null,AbX:
null,Acw:null,Acv:null,Acu:null,Acl:null,Ack:null,AbS:null,AbR:null,Acb:null,Aca:
null,Aqz:null,Init:function(aArg){},BjP:function(G){this.AbZ.R(AHn);this.AbY.R(A.
jV);this.AbX.R(A.jV);this.Acw.R(AVY);this.Acv.R(A.jV);this.Acu.R(A.jV);this.Acl.
R(A.jV);this.Ack.R(A.jV);this.AbS.R(A.jV);this.AbR.R(A.jV);this.Acb.R(A.jV);this.
Aca.R(A.jV);},BnH:function(G){this.TI.Z(true);this.TN.Z(true);var IA=this.Ij();if(
!IA)return;this.TN.R(IA.GetFPS().toFixed()+AVZ);this.TI.R(AV0);this.TI.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akj={I:this},0);A.Core.Timer._Init.call(this.Asb={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TN={I:this},0);A.acg.
Text._Init.call(this.TI={I:this},0);A.acg.Text._Init.call(this.AbZ={I:this},0);A.
acg.Text._Init.call(this.AbY={I:this},0);A.acg.Text._Init.call(this.AbX={I:this}
,0);A.acg.Text._Init.call(this.Acw={I:this},0);A.acg.Text._Init.call(this.Acv={I:
this},0);A.acg.Text._Init.call(this.Acu={I:this},0);A.acg.Text._Init.call(this.Acl={
I:this},0);A.acg.Text._Init.call(this.Ack={I:this},0);A.acg.Text._Init.call(this.
AbS={I:this},0);A.acg.Text._Init.call(this.AbR={I:this},0);A.acg.Text._Init.call(
this.Acb={I:this},0);A.acg.Text._Init.call(this.Aca={I:this},0);A.acg.AL._Init.call(
this.Aqz={I:this},0);this.__proto__=C.Asq;this.H(AcP);this.Ar(false);this.Akj.PO(
2000);this.Akj.Wx(1);this.Akj.Ar(true);this.Asb.Ar(true);this.Background.AZ(0x3F
);this.Background.H(AcP);this.Background.L(0x78000000);this.TN.H(AV1);this.TN.A6(
0x14);this.TN.R(A.jV);this.TN.L(0xFFFFFC00);this.TN.Z(false);this.TI.H(AHo);this.
TI.A6(0x11);this.TI.R(A.jV);this.TI.Z(false);this.AbZ.H(AsZ);this.AbZ.A6(0x11);this.
AbZ.R(A.jV);this.AbY.H(AHp);this.AbY.A6(0x11);this.AbY.R(A.jV);this.AbX.H(AHq);this.
AbX.A6(0x14);this.AbX.R(A.jV);this.Acw.H(Ax$);this.Acw.A6(0x11);this.Acw.R(A.jV);
this.Acv.H(AHr);this.Acv.A6(0x11);this.Acv.R(A.jV);this.Acu.H(Aya);this.Acu.A6(0x14
);this.Acu.R(A.jV);this.Acl.H(AV2);this.Acl.A6(0x11);this.Acl.R(A.jV);this.Ack.H(
AV3);this.Ack.A6(0x14);this.Ack.R(A.jV);this.AbS.H(AV4);this.AbS.A6(0x11);this.AbS.
R(A.jV);this.AbR.H(AV5);this.AbR.A6(0x14);this.AbR.R(A.jV);this.Acb.H(AHs);this.
Acb.A6(0x11);this.Acb.R(A.jV);this.Aca.H(AV6);this.Aca.A6(0x14);this.Aca.R(A.jV);
this.Aqz.H(O5);this.J(this.Background,0);this.J(this.TN,0);this.J(this.TI,0);this.
J(this.AbZ,0);this.J(this.AbY,0);this.J(this.AbX,0);this.J(this.Acw,0);this.J(this.
Acv,0);this.J(this.Acu,0);this.J(this.Acl,0);this.J(this.Ack,0);this.J(this.AbS,
0);this.J(this.AbR,0);this.J(this.Acb,0);this.J(this.Aca,0);this.J(this.Aqz,0);this.
Akj.Mx=[this,this.BjP];this.Asb.Mx=[this,this.BnH];this.TN.S(A.aaL(A.fl.Ak));this.
TI.S(A.aaL(A.fl.Ak));this.AbZ.S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.
AbX.S(A.aaL(A.fl.Ak));this.Acw.S(A.aaL(A.fl.Ak));this.Acv.S(A.aaL(A.fl.Ak));this.
Acu.S(A.aaL(A.fl.Ak));this.Acl.S(A.aaL(A.fl.Ak));this.Ack.S(A.aaL(A.fl.Ak));this.
AbS.S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.Acb.S(A.aaL(A.fl.Ak));this.
Aca.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akj._Done();this.Asb._Done();this.Background._Done();this.TN._Done();this.TI.
_Done();this.AbZ._Done();this.AbY._Done();this.AbX._Done();this.Acw._Done();this.
Acv._Done();this.Acu._Done();this.Acl._Done();this.Ack._Done();this.AbS._Done();
this.AbR._Done();this.Acb._Done();this.Aca._Done();this.Aqz._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akj._ReInit();this.
Asb._ReInit();this.Background._ReInit();this.TN._ReInit();this.TI._ReInit();this.
AbZ._ReInit();this.AbY._ReInit();this.AbX._ReInit();this.Acw._ReInit();this.Acv.
_ReInit();this.Acu._ReInit();this.Acl._ReInit();this.Ack._ReInit();this.AbS._ReInit(
);this.AbR._ReInit();this.Acb._ReInit();this.Aca._ReInit();this.Aqz._ReInit();this.
TN.S(A.aaL(A.fl.Ak));this.TI.S(A.aaL(A.fl.Ak));this.AbZ.S(A.aaL(A.fl.Ak));this.AbY.
S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.Acw.S(A.aaL(A.fl.Ak));this.Acv.
S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Acl.S(A.aaL(A.fl.Ak));this.Ack.
S(A.aaL(A.fl.Ak));this.AbS.S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.Acb.
S(A.aaL(A.fl.Ak));this.Aca.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGD={FF:null,Dj:null,Au:null,Js:null,HJ:null,Uc:null,Bc:null,Sh:null,Gt:null
,Gs:null,FU:0,A8:0,Bjm:false,Init:function(aArg){},Ai:function(Ae){C.Dt.Ai.call(
this,Ae);this.Ht.Z(false);this.H2.Z(false);if(!!this.Dj){this.Sh.R(this.Au.Format(
Ayb));this.Uc.R(this.Au.Format(AV7));}if(this.A8===1){this.HJ.Z(true);this.HJ.H(
this.Sh.M);this.HJ.L(A.jb.Bm);this.Sh.L(this.Background.AQ);this.Uc.L(A.jb.Bm);}
else if(this.A8===2){this.HJ.Z(true);this.HJ.H(this.Uc.M);this.HJ.L(A.jb.Bm);this.
Sh.L(A.jb.Bm);this.Uc.L(this.Background.AQ);}else{this.HJ.Z(false);this.Sh.L(this.
V.AQ);this.Bc.L(this.V.AQ);this.Uc.L(this.V.AQ);}},Qm:function(G){if(this.FC===1
)A.pe([this,this.U8],this);else if(this.FC===4)A.pe([this,this.AiD],this);else if(
this.FC===5)A.pe([this,this.Aio],this);C.Dt.Qm.call(this,G);},J$:function(G){switch(
this.A8){case 0:C.Dt.J$.call(this,G);break;case 2:break;default:this.Adw(this);}
},J6:function(G){switch(this.A8){case 0:C.Dt.J6.call(this,G);break;default:this.
Ain(this);}},Ady:function(G){var F;if(!!this.Dj)this.Ui((F=this.Dj,F[1].call(F[0
])));},Ab9:function(E){if(A.aaZ(this.Dj,E))return;if(!!this.Dj)A.z$([this,this.Ady
],this.Dj,0);this.Dj=E;if(!!E)A.zX([this,this.Ady],E,0);if(!!E)A.pe([this,this.Ady
],this);},Ui:function(E){if(this.FU===E)return;this.FU=E;this.Au.Initialize(this.
FU);this.An();},Adw:function(G){this.FC=1;this.An();if(this.Bo.Bw){A.pe([this,this.
U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);},U8:function(G){this.Ew(this.A8+1
);},Al2:function(G){this.FC=4;this.An();if(this.Bo.Bw){A.pe([this,this.AiD],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},Al1:function(G){this.FC=5;this.An();if(this.
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
);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aey
));(F=this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.
U8];}break;case 2:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].
call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].
call(F[0])).Cs(A.aaL(A.ach.Am1));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[
1].call(F[0])).Ck=[this,this.Ain];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,
F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:this.
FF.AkP((F=this.N,F[1].call(F[0])));}},FQ:function(G){this.Ew(1);},G_:function(G){
this.Ew(0);},Ew:function(EO){var F;if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(F[
0])));this.A8=EO;this.Bjm=true;if((this.A8<0)||(this.A8>2))this.A8=0;this.DJ(this
);this.Gt.Bw=!!this.A8;this.Gs.Bw=!!this.A8;this.An();},Ain:function(G){if(this.
A8>1)this.Ew(this.A8-1);},_Init:function(aArg){C.Dt._Init.call(this,aArg);A.Core.
Bs._Init.call(this.Au={I:this},0);A.Core.BN._Init.call(this.Js={I:this},0);A.acg.
AL._Init.call(this.HJ={I:this},0);A.acg.Text._Init.call(this.Uc={I:this},0);A.acg.
Text._Init.call(this.Bc={I:this},0);A.acg.Text._Init.call(this.Sh={I:this},0);A.
Core.BN._Init.call(this.Gt={I:this},0);A.Core.BN._Init.call(this.Gs={I:this},0);
this.__proto__=C.AGD;this.H(UT);this.V.R(AV8);this.V.L(A.jb.Bm);this.Ht.Z(false);
this.H2.Z(false);this.Js.Filter=1;this.HJ.H(AV9);this.HJ.L(0x55FFFFFF);this.Uc.H(
AV_);this.Uc.I7(true);this.Bc.H(AV$);this.Bc.A6(0x14);this.Bc.R(AWa);this.Sh.H(AWb
);this.Sh.I7(true);this.Sh.A6(0x14);this.Gt.Filter=4;this.Gt.Bw=false;this.Gs.Filter=
5;this.Gs.Bw=false;this.J(this.HJ,0);this.J(this.Uc,0);this.J(this.Bc,0);this.J(
this.Sh,0);this.Js.BO=[this,this.Adw];this.Uc.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(
A.fl.EK));this.Sh.S(A.aaL(A.fl.EK));this.Gt.BO=[this,this.Al2];this.Gt.D1=[this,
this.AiD];this.Gs.BO=[this,this.Al1];this.Gs.D1=[this,this.Aio];this.FF=A._NewObject(
C.Aer,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Dt;this.Au._Done();
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
CH={B6:null,AmR:null,AqO:null,El:null,Text:null,String:A.jV,Bdp:A.jV,Kg:0x12,AK8:
0,AQ:0xFFFFFFFF,N4:0,AUl:0,A_Y:0,Bdq:true,GY:function(CN){var LJ=(A.Core.ARj.isPrototypeOf(
CN)?CN:null);if(!!LJ)this.BCj(this);return A.Core.P.GY.call(this,CN);},Bk:function(
aSize){A.Core.P.Bk.call(this,aSize);A.pe([this,this.Ajj],this);},Db:function(aFilter
){return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(E){if(this.String===
E)return;this.String=E;if(this.Bdq){this.Bdp=E;this.Bdq=false;}this.AK8=E.length;
A.pe([this,this.Ajj],this);},S:function(E){if(this.B6===E)return;this.B6=E;A.pe([
this,this.Ajj],this);},A2:function(E){if(this.AmR===E)return;this.AmR=E;A.pe([this
,this.Ajj],this);},Cu:function(E){if(this.AqO===E)return;this.AqO=E;A.pe([this,this.
Ajj],this);},A6:function(E){if(E===this.Kg)return;this.Kg=E;this.Text.A6(E);},Ajj:
function(G){var B;var ALc=0;if(!this.AK8){this.Text.Z(false);return;}this.Text.Z(
true);this.Text.R(this.String);this.Text.KS(false);if(!!this.B6){ALc=this.B6.Ys(
this.String,0,this.AK8);if(ALc<(((B=this.M)[2]-B[0])-(2*this.Text.I_))){this.Text.
S(this.B6);this.Text.Aw1(this.N4);return;}}this.Text.KS(true);if(!!this.AmR){ALc=
this.AmR.Ys(this.String,0,this.AK8);this.Text.S(this.AmR);this.Text.Aw1(this.AUl
);if((ALc<(((B=this.M)[2]-B[0])-(2*this.Text.I_)))&&(((B=this.Text.Db())[3]-B[1]
)<=((B=this.M)[3]-B[1])))return;}if(!!this.AqO){this.Text.S(this.AqO);if(((B=this.
Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw1((((this.Text.B6.Ascent+this.
Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;this.AQ=E;this.
Text.L(E);},BCj:function(G){this.R(this.Bdp);},Q1:function(E){if(A.aa0(this.El,E
))return;this.El=E;this.Text.Q1(E);},ASg:function(){return A.abh(this.Text.Db(),
this.M.slice(0,2));},Afd:function(AoM){return A.abf(this.M.slice(0,2),this.Text.
Afd(AoM));},Aw1:function(E){if(this.N4===E)return;this.N4=E;A.pe([this,this.Ajj]
,this);},Bm_:function(E){if(this.AUl===E)return;this.AUl=E;A.pe([this,this.Ajj],
this);},Bm$:function(E){if(this.A_Y===E)return;this.A_Y=E;A.pe([this,this.Ajj],this
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.CH;this.H(Ayc);this.Ar(false);this.Text.AZ(0x3F
);this.Text.H(Ayc);this.Text.R(Rj);this.J(this.Text,0);},_Done:function(){this.__proto__=
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
DY:function(G){C.Yt.DY.call(this,G);this.XK(8,1,this.M7);this.XK(12,1,this.Mp);this.
XK(11,1,this.AeC);this.XK(7,1,this.M9);this.XK(14,1,this.NT);this.XK(1,4,this.II
);this.XK(1,1,this.AeI);this.XK(4,1,this.I3);this.XK(22,1,this.AeH);this.XK(26,1
,this.AeG);this.XK(30,1,this.AeD);this.XK(19,1,this.AeF);this.XK(31,1,this.AeE);
this.Text.Z(!this.Y.TL(null,0x1));},XK:function(AJi,Eb,AfP){var AA9=false;if(!!A.
_GetAutoObject(A.Device.Device).Am.Filter){var Adj=A._GetAutoObject(A.Device.Device
).Am.Filter.DQ(AJi,Eb);if(!!Adj){AA9=true;switch(AJi){case 14:{var Azo=(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(Adj)?Adj:null);if(!!Azo)AfP.Aw(A._GetAutoObject(
A.Device.Converter).A4T(Azo.A4));}break;case 7:{var Azo=(A.Device.GenderFilterCriterion.
isPrototypeOf(Adj)?Adj:null);if(!!Azo)AfP.Aw(A._GetAutoObject(A.Device.Converter
).AmT(Azo.A4));}break;case 1:if(Eb===4)AfP.Aw(A.aaL(A.ach.ADD));else if(Adj.Operator===
4)AA9=false;break;case 22:switch(Adj.Operator){case 0:case 3:AfP.Aw(A.aaL(A.ach.
AQx));break;default:AfP.Aw(A.aaL(A.ach.AjX));}break;case 26:switch(Adj.Operator){
case 0:case 3:AfP.Aw(A.aaL(A.ach.AQv));break;default:AfP.Aw(A.aaL(A.ach.Avw));}break;
default:;}}else if((AJi===1)&&(Eb===4)){AA9=true;AfP.Aw(A.aaL(A.ach.Aez));}}else
if((AJi===1)&&(Eb===4)){AA9=true;AfP.Aw(A.aaL(A.ach.Aez));}AfP.Z(AA9);},_Init:function(
aArg){C.Yt._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Ap.
_Init.call(this.II={I:this},0);A.acg.Ap._Init.call(this.AeI={I:this},0);A.acg.Ap.
_Init.call(this.I3={I:this},0);A.acg.Ap._Init.call(this.M7={I:this},0);A.acg.Ap.
_Init.call(this.AeC={I:this},0);A.acg.Ap._Init.call(this.AeH={I:this},0);A.acg.Ap.
_Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(this.AeD={I:this},0);A.acg.Ap.
_Init.call(this.AeF={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap.
_Init.call(this.M9={I:this},0);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.Ap.
_Init.call(this.Mp={I:this},0);this.__proto__=C.AjR;this.Y.AZ(0x3F);this.Y.H(As0
);this.Y.JP(3);this.II.H(As1);this.AeI.H(AWc);this.AeI.Aj(true);this.I3.H(AWd);this.
I3.Aj(true);this.M7.H(AWe);this.M7.Aj(true);this.AeC.H(AWf);this.AeC.Aj(true);this.
AeH.H(AHt);this.AeH.Aj(true);this.AeG.H(AHt);this.AeG.Aj(true);this.AeD.H(AWg);this.
AeD.Aj(true);this.AeF.H(AHu);this.AeF.Aj(true);this.AeE.H(AHu);this.AeE.Aj(true);
this.M9.H(AHv);this.M9.Aj(true);this.NT.H(AHw);this.NT.Aj(true);this.Text.R(A.aaR(
A.acf.None));this.Mp.H(AHv);this.Mp.Aj(true);this.JV(this.Gr,-3);this.JV(this.D2
,-3);this.JV(this.A_,-3);this.JV(this.AP,-2);this.J(this.Y,-2);this.J(this.II,-2
);this.J(this.AeI,-2);this.J(this.I3,-2);this.J(this.M7,-2);this.J(this.AeC,-2);
this.J(this.AeH,-2);this.J(this.AeG,-2);this.J(this.AeD,-2);this.J(this.AeF,-2);
this.J(this.AeE,-2);this.J(this.M9,-2);this.J(this.NT,-2);this.J(this.Mp,0);this.
II.Aw(A.aaL(A.ach.Aez));this.AeI.Aw(A.aaL(A.ach.AQm));this.I3.Aw(A.aaL(A.ach.APN
));this.M7.Aw(A.aaL(A.ach.ADx));this.AeC.Aw(A.aaL(A.ach.AbE));this.AeH.Aw(A.aaL(
A.ach.AjX));this.AeG.Aw(A.aaL(A.ach.Avw));this.AeD.Aw(A.aaL(A.ach.AQk));this.AeF.
Aw(A.aaL(A.ach.AQl));this.AeE.Aw(A.aaL(A.ach.AQj));this.M9.Aw(A.aaL(A.ach.ADz));
this.NT.Aw(A.aaL(A.ach.AvB));this.Mp.Aw(A.aaL(A.ach.ADG));},_Done:function(){this.
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
Temperature).Bzl(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Kv));this.C8.L(A._GetAutoObject(A.acj.Temperature).Bzo(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv));this.JK.L(A.
_GetAutoObject(A.acj.Temperature).Bzm(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Kv));this.HB.L(A._GetAutoObject(A.acj.Temperature
).Bzn(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device
).Kv));this.MD.L(this.JK.AQ);this.TemperatureUnit.L(this.JK.AQ);}break;default:;
}},AcH:function(){C.Ra.AcH.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:{this.N.Cs(A.aaL(A.ach.AQF));this.N.C6(A.aaL(A.ach.Am3));}break;case 4:{
this.N.Cs(null);this.N.C6(A.aaL(A.ach.AvJ));}break;default:;}},WM:function(G){switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(
A.Device.Device).Kv>3240)&&(A._GetAutoObject(A.Device.Device).Kv<5460)){A._GetAutoObject(
A.Device.Device).AhH();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}
break;case 3:{this.H5.OnSetTemperature(A._GetAutoObject(A.Device.Device).Kv);var
B1=A._GetAutoObject(A.Device.Converter).AsE(A._GetAutoObject(A.Device.Helper).W.
AnimalType,A._GetAutoObject(A.Device.Device).Kv);this.H5.OnSetRatingTemperature(
B1);this.H5.Cq(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fv();
}break;case 4:this.AKB(this);break;default:;}},AkV:function(G){C.Ra.AkV.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Ds(9);break;case 4:this.AKB(this);break;default:;}},AxR:function(
){C.Ra.AxR.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JK.R(A._GetAutoObject(A.acj.Temperature).Bzt(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv));break;default:;}},AxS:function(
){C.Ra.AxS.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WA(A._GetAutoObject(A.acj.Temperature).Bzp(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Kv));this.Jb.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WA(16711680
);this.Jb.Ar(true);}break;default:this.Jb.Ar(false);}},AUx:function(){this.C8.Aw(
A.aaL(A.ach.AvI));this.C8.Cv(A._GetAutoObject(A.acj.Temperature).Bzu(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Kv));this.NR.Cv(
0);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.Amr;this.Dq(
C.IG);this.H5=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Ra._Mark.
call(this,D);if((B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Aht={N2:null,DK:null,Ih:null,Bc:null,Aut:null,String:A.jV,AxF:A.jV,Mt:7,Aka:
2,KT:0,AUK:false,Init:function(aArg){},Bk:function(aSize){A.Core.P.Bk.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Aka,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bh));else this.DK.S(A.aaL(A.fl.Ak));this.Ih.S(this.DK.B6);this.Ih.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WF],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahn:function(
E){if(this.AxF===E)return;this.AxF=E;this.Ih.R(E);},Ab8:function(E){this.Mt=E;if(
E<10)this.AS6(2);else if(E<40)this.AS6(1);else this.AS6(0);A.pe([this,this.WF],this
);},WF:function(G){var B;while(!!this.Bc.Ah)this.HN(this.Bc.Ah);if(this.Mt>1){var
Ade=this.AOM();var A1Y=this.AOK();var Apq=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var Az4;var AK1;var At4;var Al9=null;if(!!this.N2&&(this.N2.AY>0))Al9=this.N2.K0;
while((Ade>=A1Y)&&(Ade>0)){var AtF=A._NewObject(C.Ajs,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aka)*(((Ade-A1Y)/86400)|0))/this.Mt)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aka)*((((Ade-A1Y)/86400)|0)+1))/this.Mt)|0;while(!!Al9&&(Al9.Timestamp>=
Ade)){if(Al9.Timestamp<(Ade+86400))AtF.Os(Al9.A4,Al9.Timestamp);Al9=Al9.Ah;}var Aue=
0;if(AtF.AY>0)Aue=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtF.AY
)|0;else if(this.Mt<10){Aue=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
At4=A._NewObject(A.acg.Text,0);At4.H([x1,Apq,x2,Apq+Aue]);At4.S(A.aaL(A.fl.Bh));
At4.L(A.jb.Text);At4.R(A.aaR(A.acf.Ae$));this.J(At4,0);}var AJN=AtF.K0;var O=0;while(
!!AJN){if(O>=AtF.AY)throw new Error(AWh);Az4=A._NewObject(A.acg.AL,0);Az4.L(A._GetAutoObject(
A.acj.Assessment).Qj(AJN.A4));if(O===(AtF.AY-1))Az4.H([x1,Apq+(O*Aue),x2,this.Bc.
M[1]]);else Az4.H([x1,Apq+(O*Aue),x2,Apq+((O+1)*Aue)]);this.J(Az4,0);AJN=AJN.Ah;
O=O+1;}if(this.AUK){var Bx_=A._GetAutoObject(A.Device.Helper).Aqp(A._GetAutoObject(
A.Device.Helper).Dv());var Bx9=A._GetAutoObject(A.Device.Helper).Aqp(Ade);if(Bx_===
Bx9){var ALt=A._NewObject(A.acg.Aen,0);ALt.L(A.jb.Text);var BdN=(x1+this.Aka)+(((
x2-x1)/2)|0);ALt.H([BdN-4,this.Bc.M[1]-4,BdN+4,this.Bc.M[1]]);ALt.Zv(this.Aut);this.
J(ALt,0);}}Ade=Ade-86400;if(this.Aka>0){AK1=A._NewObject(A.acg.AL,0);AK1.H([x1,Apq
,x1+this.Aka,Apq+((((B=this.M)[3]-B[1])/2)|0)]);AK1.L(A.jb.Bc);this.J(AK1,0);}}}
},Ab_:function(E){this.N2=E;A.pe([this,this.WF],this);},AS6:function(E){if(this.
Aka===E)return;this.Aka=E;A.pe([this,this.WF],this);},De:function(E){if(this.KT===
E)return;this.KT=E;this.DK.L(E);this.Ih.L(E);},AOK:function(){var B;return this.
AOM()-(((((B=this.Mt)<0)?B+0x100000000:B)-1)*86400);},AOM:function(){return A._GetAutoObject(
A.Device.Converter).AhL();},Bnc:function(E){if(this.AUK===E)return;this.AUK=E;A.
pe([this,this.WF],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Ih={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.AxP._Init.call(this.Aut={I:this},0);
this.__proto__=C.Aht;this.H(BF);this.Ar(false);this.DK.H(AHx);this.DK.Hh(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Ih.H(AHx);this.Ih.Hh(5);this.Ih.A6(0x14);this.
Ih.L(A.jb.Text);this.Bc.H(AHy);this.Bc.L(A.jb.Bc);this.KT=A.jb.Text;this.Aut.H(AWi
);this.J(this.DK,0);this.J(this.Ih,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Ih.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Ih._Done();this.Bc._Done();this.Aut._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Ih._ReInit();this.Bc._ReInit();this.Aut._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Ih.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
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
N.AE7(GS.Avj);this.N.AnA(GS.AmS);this.N.CY(GS.AQe);this.N.C6(GS.Aq5);GS.A21(this
);}},MG:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ei;this.Background.H(Rk);this.Background.L(A.jb.CS);this.N.H(Xc);this.
N.Ar(false);this.N.Z(true);this.Y.H(E$);this.Y.JP(1);this.Ay.H(Iq);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.El=[this,this.Fe];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATP={NA:null,ASN:null,Ad2:null,VC:null,GO:null,PopupTimeout:null,Acc:null,Agz:
null,PopupIdToString:null,AtB:null,Text:A.jV,AkI:A.jV,AJ7:A.jV,Ak2:0,ALe:-1,Azn:-
1,AKI:0,ATR:0,A17:false,CP:function(){this.A_m(this.PopupIdToString.BI(this.ATR)
);},Init:function(aArg){this.BoB(this);},Bgz:function(G){var B;if(this.Ak2>0){this.
A_A((this.Ak2/1000)|0);this.PopupTimeout.Wx(0);this.PopupTimeout.PO(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxE(this);},Bgv:function(G){var Qt=this.
Text;var AfS=this.AkI;var AKG=A.abi(16,A.jV,null);var index=0;var Azi=0;while(AfS
!==A.jV){Azi=AfS.indexOf(A.Device.PopupParamSeparator,0);if(Azi!==-1){AKG.Set(index
,A.ab1(AfS,Azi,(AfS.length-Azi)+1));AfS=A.ab1(AfS,0,Azi+1);index=index+1;if(index>=
16){A.ab5("%s",(AWj+AfS)+AWk);AfS=A.jV;}}else{AKG.Set(index,AfS);AfS=A.jV;}}index=
0;while(index<Qt.length){if((Qt.charCodeAt(index)||0)===0x7B){var Bdo=Qt.indexOf(
String.fromCharCode(0x7D),index);if(Bdo===-1){A.ab5("%s",(((AWl+Qt)+AWm)+index.toFixed(
))+Afy);index=Qt.length;}else{var Bfg=(Bdo-index)-1;var A3A=A.abW(Qt,index+1,Bfg
);var AKF=A.wz(A3A,-1,10);Qt=A.ab1(Qt,index,Bfg+2);if(A3A===AWn)this.Bnt(index);
else if(((AKF>0)&&(AKF<=16))&&(this.AkI!==A.jV)){Qt=A.abU(Qt,AKG.Get(AKF-1),index
);if(this.A17===true)this.Bns(A.wz(AKG.Get(AKF-1),0,10));}else A.ab5("%s",(AWo+A3A
)+AWp);}}index=index+1;}this.Bnr(Qt);},CF:function(G){A.pe([this,this.Bgz],this);
},Ai:function(Ae){var B;this.Ad2.H(A.aaT(this.GO.Db(),AhU));this.VC.H(A.aaT(this.
GO.Db(),AhU));if(!!this.NA){this.NA.H(A.abM(this.NA.M,this.GO.M[0]));this.NA.H(A.
abO(this.NA.M,this.GO.M[3]+10));this.NA.H(A.abL(this.NA.M,(B=this.GO.M)[2]-B[0])
);this.NA.H(A.abI(this.NA.M,8));this.Ad2.H(A.abh(A.aaT(this.GO.Db(),AhU),AHz));this.
VC.H(A.abh(A.aaT(this.GO.Db(),AhU),AHz));}else{this.Ad2.H(A.aaT(this.GO.Db(),AhU
));this.VC.H(A.aaT(this.GO.Db(),AhU));}},DE:function(G){var Jy=(A.Core.BN.isPrototypeOf(
G)?G:null);if((Jy.CO===4)&&((this.VC.M[1]+this.M[1])<this.M[1])){this.GO.H(A.abO(
this.GO.M,this.GO.M[1]+28));this.An();}else if((Jy.CO===5)&&((this.VC.M[3]+this.
M[1])>this.N.M[1])){this.GO.H(A.abO(this.GO.M,this.GO.M[1]-28));this.An();}if((Jy.
CO===6)&&!!this.D_().CB)this.D_().AFe(1);else if((Jy.CO===7)&&!!this.D_().Cl)this.
D_().AFe(3);},IW:function(G){switch(this.D_().Ahc){case 1:this.AlZ(this);break;case
3:this.ApL(this);break;case 2:this.AAA(this);break;case 0:break;default:A.ab5("%s%e"
,AWq,this.D_().Ahc);}},AlZ:function(G){var B;(B=this.D_().CB)?B[1].call(B[0],this
):null;},ApL:function(G){var B;(B=this.D_().Cl)?B[1].call(B[0],this):null;},AAA:
function(G){var B;(B=this.D_().Ck)?B[1].call(B[0],this):null;},LO:function(G){this.
N.I4.L((this.N.I4.AQ&0x00FFFFFF)|(100<<24));},E3:function(G){var B;this.PopupTimeout.
AxE(this);},A_m:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bgv],this);},BAw:function(G){var B;this.A_A(this.Azn-1);if(this.Azn<=0){this.PopupTimeout.
AxE(this);(B=this.ASN)?B[1].call(B[0],this):null;}},A_o:function(E){if(this.Ak2===
E)return;this.Ak2=E;A.pe([this,this.Bgz],this);},A9$:function(E){if(this.AkI===E
)return;this.AkI=E;A.pe([this,this.Bgv],this);},Bnr:function(E){if(this.AJ7===E)
return;this.AJ7=E;this.ABq(this);this.Byf(this);},ABq:function(G){if((this.Azn!==-
1)&&(this.ALe!==-1)){var By7=this.AtB.Format(AWr);this.GO.R(A.abU(this.AJ7,By7,this.
ALe));}else this.GO.R(this.AJ7);this.GO.H(AHA);},Bnt:function(E){if(this.ALe===E
)return;this.ALe=E;this.ABq(this);},A_A:function(E){if(this.Azn===E)return;this.
Azn=E;this.AtB.AFJ(E);A.pe([this,this.ABq],this);},Byf:function(G){this.GO.Db();
if(this.GO.M[1]<=this.M[1])this.GO.H(A.abO(this.GO.M,28));this.An();},A_C:function(
E){if(this.A17===E)return;this.A17=E;if(E===true)A.pe([this,this.BA7],this);},BA7:
function(G){if(!this.NA){this.NA=A._NewObject(A.acr.ADm,0);this.NA.F0(0);this.NA.
EV(100);this.NA.OnSetAppearance(this.Acc);this.J(this.NA,0);this.Ahw(this.NA,this.
GO);}this.NA.By(this.AKI);},Bns:function(E){if(this.AKI===E)return;this.AKI=E;if(
!!this.NA)this.NA.By(this.AKI);},BoB:function(G){var B;this.N.Dr(0);this.Agz.AnY(
this);},Bm4:function(E){if(this.ATR===E)return;this.ATR=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.Ad2={I:this},0);A.acg.BU._Init.
call(this.VC={I:this},0);A.acg.Text._Init.call(this.GO={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADn._Init.call(this.Acc={I:this},
0);A.acl.Gh._Init.call(this.Agz={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtB={I:this},0);this.
__proto__=C.ATP;var B;this.H(Cc);this.Background.H(E$);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ej.Ar(false);this.Ej.Z(false);this.Ad2.H(AHB);this.
Ad2.L(A.jb.CK);this.VC.H(AHB);this.VC.Nh(2);this.VC.L(A.jb.Text);this.GO.H(AHA);
this.GO.Hh(10);this.GO.I7(true);this.GO.Bnq(0);this.GO.KS(true);this.GO.L(A.jb.Text
);this.PopupTimeout.PO(0);this.Acc.A_t(0);this.Acc.A_r(A.jb.AV);this.Acc.A_q(0);
this.Acc.AFZ(AHi);this.Agz.HM(1);this.Agz.B2=255;this.Agz.Cw=0;this.JV(this.Ej,-
1);this.J(this.Ad2,0);this.J(this.VC,0);this.J(this.GO,0);this.GO.S(A.aaL(A.fl.Af
));this.PopupTimeout.Mx=[this,this.BAw];this.Acc.A_s(A.aaL(A.ach.NS));this.Acc.A_p(
A.aaL(A.ach.NS));this.Agz.Q=[B=this.N,B.Awi,B.AZ9];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad2._Done();this.VC._Done();this.GO._Done();this.PopupTimeout.
_Done();this.Acc._Done();this.Agz._Done();this.PopupIdToString._Done();this.AtB.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad2._ReInit();this.VC._ReInit();this.GO._ReInit();this.PopupTimeout._ReInit();this.
Acc._ReInit();this.Agz._ReInit();this.PopupIdToString._ReInit();this.AtB._ReInit(
);this.GO.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASN)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Agz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtB)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Ml={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FN=A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FN=A.jb.Text;
GQ=A.jb.Bm;}if(!this.LI){this.Background.L(FN);this.V.L(A.jb.Am4);}else if(this.
Qn){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Ml;},_className:"Application::DarkThemeMenuItem"
};C.Anj={AdC:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Anj;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={XA:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);
this.Bx.Cl=[this,this.A22];this.Bx.Ck=null;this.Bx.CB=[this,this.XA];this.Bx.CV(
A.aaR(A.acf.Ok));this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.Aex));}return this.Bx;}
,A22:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).IW(this);},CF:function(G){},AIG:function(s){this.CF(s);},E3:function(
G){},AyD:function(s){this.E3(s);},_Init:function(aArg){C.Abj._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APJ={V7:
null,YQ:null,YJ:null,Init:function(aArg){this.Bb(this.V7);},Adu:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YQ)A._GetAutoObject(A.Device.
Device).A9(6,true,A.jV,0,[this,this.BBj]);else if(Aa===this.V7)A._GetAutoObject(
A.Device.Device).A9(9,true,A.jV,0,[this,this.BBG]);else if(Aa===this.YJ)A._GetAutoObject(
C.A$).Cg(4);else throw new Error(Ayd);A._GetAutoObject(A.Device.Device).Ds(0);},
BBj:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(
At.PopupState===7))A._GetAutoObject(A.Device.Device).AGl();},BBG:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))
A._GetAutoObject(A.Device.Device).Axw();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ml._Init.call(this.V7={I:this},0);C.Ml._Init.call(this.YQ={I:this
},0);C.Ml._Init.call(this.YJ={I:this},0);this.__proto__=C.APJ;this.H(AcP);this.V7.
H(BF);this.V7.Ar(true);this.V7.T(A.aaR(A.acf.A$e));this.V7.Bg(true);this.YQ.H(IR
);this.YQ.Ar(true);this.YQ.T(A.aaR(A.acf.A_X));this.YQ.Bg(true);this.YJ.H(P7);this.
YJ.Ar(true);this.YJ.T(A.aaR(A.acf.SM));this.YJ.Bg(true);this.J(this.V7,0);this.J(
this.YQ,0);this.J(this.YJ,0);this.V7.AR=[this,this.Adu];this.YQ.AR=[this,this.Adu
];this.YJ.AR=[this,this.Adu];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.V7._Done();this.YQ._Done();this.YJ._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.V7._ReInit(
);this.YQ._ReInit();this.YJ._ReInit();this.V7.T(A.aaR(A.acf.A$e));this.YQ.T(A.aaR(
A.acf.A_X));this.YJ.T(A.aaR(A.acf.SM));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GG={AaG:null,OverlayMenu:null,WH:null,A3V:null
,La:null,A3z:null,AkJ:null,N0:null,Az_:100,Init:function(aArg){var B;A.zX([this,
this.BeJ],[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyM],0);A.zX([this,this.BeD
],[B=A._GetAutoObject(A.Device.Device),B.ASt,B.AZ7],0);A.zX([this,this.A2T],[B=A.
_GetAutoObject(A.Device.Device),B.Av9,B.AyF],0);A.zX([this,this.Bz5],[B=A._GetAutoObject(
A.Device.Device),B.Av6,B.AyE],0);A.zX([this,this.Bz6],[B=A._GetAutoObject(A.Device.
Device),B.A8m,B.BaT],0);A.zX([this,this.ApM],[B=A._GetAutoObject(A.Device.Device
),B.ASE,B.A0d],0);A.zX([this,this.Be0],[B=A._GetAutoObject(A.Device.Device),B.Wu
,B.Xd],0);A.pe([this,this.BeJ],this);A.pe([this,this.BeD],this);A.pe([this,this.
ApM],this);A.pe([this,this.Be0],this);this.A3V.As([B=this.WH,B.AEq,B.Zq]);this.J(
this.WH,0);this.Bb(this.WH);this.BxU(this);},Ai:function(Ae){},BeD:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AEd){if(!this.AaG){this.AaG=A._NewObject(
C.Asq,0);this.AaG.H(A.abJ(this.AaG.M,this.WH.M.slice(0,2)));this.AaG.H(A.abO(this.
AaG.M,this.WH.M[3]-((B=this.AaG.M)[3]-B[1])));this.J(this.AaG,1);}}else{if(!!this.
AaG)this.HN(this.AaG);this.AaG=null;}},BeJ:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Ds(null);break;case 1:this.Ds(A._NewObject(
C.APJ,0));break;case 8:this.Ds(A._NewObject(C.AL1,0));break;case 2:this.Ds(A._NewObject(
C.ALY,0));break;case 3:this.Ds(A._NewObject(C.AL4,0));break;case 4:this.Ds(A._NewObject(
C.AT_,0));break;case 5:this.Ds(A._NewObject(C.AVE,0));break;case 6:this.Ds(A._NewObject(
C.ATK,0));break;case 7:this.Ds(A._NewObject(C.Amu,0));break;case 11:this.Ds(A._NewObject(
C.AMx,0));break;case 12:this.Ds(A._NewObject(C.AMw,0));break;case 9:this.Ds(A._NewObject(
C.ARD,0));break;case 10:this.Ds(A._NewObject(C.AMs,0));break;case 14:this.Ds(A._NewObject(
C.ARz,0));break;case 15:this.Ds(A._NewObject(C.ARA,0));break;case 13:this.Ds(A._NewObject(
C.ARB,0));break;case 16:this.Ds(A._NewObject(C.ATZ,0));break;case 17:this.Ds(A._NewObject(
C.AMT,0));break;default:throw new Error(AWs+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Ds:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.WD).ArC(null);this.N0.AqE(this.OverlayMenu,A._GetAutoObject(
C.Axz),null,null,[B=this.OverlayMenu,B.AyD],null,true);this.Bb(this.WH);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.N0.AkL(this.OverlayMenu,A._GetAutoObject(C.Axy),null
,null,null,null,null,[B=this.OverlayMenu,B.AIG],null,false);this.Bb(this.N0);A._GetAutoObject(
C.WD).ArC(this.OverlayMenu.KR());}else if(!!this.La){this.Bb(this.N0);A._GetAutoObject(
C.WD).ArC(this.La.Akq().KR());}},Ahh:function(E){var B;if(this.La===E)return;if(
!!this.La){A._GetAutoObject(C.WD).ArC(null);this.N0.AqE(this.La.Akq(),A._GetAutoObject(
C.Aff),null,null,[B=this.La.Akq(),B.AyD],null,false);this.Bb(this.WH);}this.La=E;
if(!!this.La){this.N0.AkL(this.La.Akq(),A._GetAutoObject(C.Aff),null,null,null,null
,null,[this,this.Bln],null,false);this.Bb(this.N0);A._GetAutoObject(C.WD).ArC(this.
La.Akq().KR());}else if(!!this.OverlayMenu){this.Bb(this.N0);A._GetAutoObject(C.
WD).ArC(this.OverlayMenu.KR());}},BxU:function(G){var B;var F;this.J(this.A3z,0);(
F=A._GetAutoObject(C.WD),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WD).M)[3]-B[1]))));this.ZE(this.N0);},A2T:function(G){if(A._GetAutoObject(A.Device.
Device).AmC)switch(A._GetAutoObject(A.Device.Device).KH){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A$).Ahp(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa5<98)A._GetAutoObject(C.A$).Cg(4);}else{this.Az_=100;this.Bcv();}},Bz5:
function(G){this.Bcv();},Bcv:function(){if(!A._GetAutoObject(A.Device.Device).AmC
){if(A._GetAutoObject(A.Device.Device).Aa5<=2){if(this.Az_>2)switch(A._GetAutoObject(
A.Device.Device).KH){case 38:break;case 4:case 39:A._GetAutoObject(C.A$).Ahp(38);
break;default:A._GetAutoObject(C.A$).Cg(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa5<=10){if(this.Az_>10)switch(A._GetAutoObject(A.Device.Device).KH){case
39:break;case 4:case 38:A._GetAutoObject(C.A$).Ahp(39);break;default:A._GetAutoObject(
C.A$).Cg(39);}}else if(A._GetAutoObject(A.Device.Device).Aa5<=20){if(this.Az_>20
)switch(A._GetAutoObject(A.Device.Device).KH){case 39:break;case 4:case 38:A._GetAutoObject(
C.A$).Ahp(39);break;default:A._GetAutoObject(C.A$).Cg(39);}}else switch(A._GetAutoObject(
A.Device.Device).KH){case 38:case 4:case 39:A._GetAutoObject(C.A$).Fv();break;default:;
}this.Az_=A._GetAutoObject(A.Device.Device).Aa5;}},Bz6:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqs){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A9(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Any(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A9(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Any(0
);}break;default:A.ab5("%s",AWt+A._GetAutoObject(A.Device.Device).Aqs.toFixed());
}},ApM:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Ds(0);A._GetAutoObject(C.A$).Cg(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KH===5)A._GetAutoObject(C.A$).Ahp(3);break;
default:;}},Be0:function(G){switch(A._GetAutoObject(A.Device.Device).AhN){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Un(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WA(65535);A._GetAutoObject(A.Device.Device).Un(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WA(255);A._GetAutoObject(A.Device.Device).Un(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WA(16776960);A._GetAutoObject(
A.Device.Device).Un(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WA(16711935
);A._GetAutoObject(A.Device.Device).Un(true);}break;default:A.ab5("%s",AWu+A._GetAutoObject(
A.Device.Device).AhN.toFixed());}},Bln:function(G){var B;this.La.Akq().CF(this);
this.La.BAu(this);},Bkr:function(){return this.La;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);C.AkJ._Init.call(this.AkJ={I:this},0);C.N0._Init.call(this.
N0={I:this},0);this.__proto__=C.GG;this.H(Cc);this.N0.H(Rk);this.J(this.N0,0);this.
WH=A._NewObject(C.WH,0);this.A3V=A._GetAutoObject(C.A$);this.AkJ.ANy=[this,this.
Bkr,this.Ahh];this.A3z=A._GetAutoObject(C.WD);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.P;this.AkJ._Done();this.N0._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AkJ._ReInit();this.N0._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaG)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3V)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.La)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A3z)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.Abj={A_M:null,Bx:null,N:null,Cr:null,Ana:null,Anc:null,QN:null,Anb:null,Am_:
null,Ane:null,Am$:null,DE:function(G){var Fc=0;var X=this.AV;switch(this.Cr.CO){
case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;default:;
}X=this.QD(X,Fc,0x14);if(!!X)this.Bb(X);},Bbq:function(s){this.DE(s);},AlZ:function(
G){var D5=(A.Core.BN.isPrototypeOf(G)?G:null);if(D5.Acj&&(this.D_().Asl===false)
)return;A.pe(this.D_().CB,this);},AIT:function(s){this.AlZ(s);},ApL:function(G){
var D5=(A.Core.BN.isPrototypeOf(G)?G:null);if(D5.Acj&&(this.D_().ZD===false))return;
A.pe(this.D_().Cl,this);},AIW:function(s){this.ApL(s);},IW:function(G){if(this.QN.
Acj)return;},Ati:function(s){this.IW(s);},AAA:function(G){var D5=(A.Core.BN.isPrototypeOf(
G)?G:null);if(D5.Acj&&(this.D_().ZC===false))return;A.pe(this.D_().Ck,this);},AIV:
function(s){this.AAA(s);},D_:function(){if(!!this.KR())return this.Bx;else return this.
N;},KR:function(){return this.Bx;},GN:function(E){this.A_M=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BN._Init.
call(this.Cr={I:this},0);A.Core.BN._Init.call(this.Ana={I:this},0);A.Core.BN._Init.
call(this.Anc={I:this},0);A.Core.BN._Init.call(this.QN={I:this},0);A.Core.BN._Init.
call(this.Anb={I:this},0);A.Core.BN._Init.call(this.Am_={I:this},0);A.Core.BN._Init.
call(this.Ane={I:this},0);A.Core.BN._Init.call(this.Am$={I:this},0);this.__proto__=
C.Abj;this.H([0,0,C.Ast[0],C.Ast[1]]);this.N.H(Xc);this.N.Ar(false);this.N.Z(false
);this.Cr.Filter=147;this.Ana.Filter=26;this.Anc.Filter=28;this.QN.Filter=1;this.
Anb.Filter=27;this.Am_.Filter=44;this.Ane.Filter=9;this.Am$.Filter=42;this.J(this.
N,0);this.Cr.BO=[this,this.Bbq];this.Cr.D1=[this,this.Bbq];this.Ana.BO=[this,this.
AIT];this.Ana.D1=[this,this.AIT];this.Anc.BO=[this,this.AIW];this.Anc.D1=[this,this.
AIW];this.QN.BO=[this,this.Ati];this.QN.D1=[this,this.Ati];this.Anb.BO=[this,this.
AIV];this.Anb.D1=[this,this.AIV];this.Am_.BO=[this,this.AIT];this.Am_.D1=[this,this.
AIT];this.Ane.BO=[this,this.AIW];this.Ane.D1=[this,this.AIW];this.Am$.BO=[this,this.
AIV];this.Am$.D1=[this,this.AIV];},_Done:function(){this.__proto__=A.Core.P;this.
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
};C.Axy={_Init:function(){A.acl.AGJ._Init.call(this,0);this.Kg=0x22;this.Ad6=true;
this.AuY=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.Axz={_Init:function(){A.acl.AGJ._Init.call(this,0);this.Kg=0x22;this.Ad6=true;
this.AuY=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUI={R8:function(){var B;var Ao=(A.acl.Ae9.isPrototypeOf(B=A.acl.Aek.R8.call(this
))?B:null);if(!Ao)throw new Error(As2);Ao.Cp.Cw=100;return Ao;},R7:function(){var
B;var Ao=(A.acl.Axg.isPrototypeOf(B=A.acl.Aek.R7.call(this))?B:null);if(!Ao)throw new
Error(As2);Ao.E0.B2=100;return Ao;},_Init:function(aArg){A.acl.Aek._Init.call(this
,aArg);this.__proto__=C.AUI;},_className:"Application::ShadeTransition"};C.AmY={
Ag0:null,SR:null,HP:null,DS:null,AnimalId:-1,GroupId:-1,AC5:true,De:function(E){
C.BS.De.call(this,E);this.SR.L(E);this.HP.L(E);this.Ag0.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.acf.Ae$)
);else this.HP.R(E.toFixed());},Ab6:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SR.R(A.aaR(A.acf.Ae$));else this.SR.R(E.toFixed());},DY:function(
G){},Nm:function(s){this.DY(s);},A9T:function(E){if(this.AC5===E)return;this.AC5=
E;this.SR.Z(this.AC5);this.Ag0.Z(this.AC5);},_Init:function(aArg){C.BS._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag0={I:this},0);A.acg.Text._Init.call(this.SR={
I:this},0);A.acg.Text._Init.call(this.HP={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.AmY;this.Ag0.H(AWv);this.SR.H(AWw);this.SR.A6(0x11);this.
SR.R(A.aaR(A.acf.Ae$));this.HP.H(AWx);this.HP.A6(0x11);this.HP.R(A.aaR(A.acf.Ae$
));this.DS.H(AWy);this.J(this.Ag0,0);this.J(this.SR,0);this.J(this.HP,0);this.J(
this.DS,0);this.Ag0.Aw(A.aaL(A.ach.AQq));this.SR.S(A.aaL(A.fl.Af));this.HP.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BS;this.Ag0._Done();this.SR._Done(
);this.HP._Done();this.DS._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS.
_ReInit.call(this);this.Ag0._ReInit();this.SR._ReInit();this.HP._ReInit();this.DS.
_ReInit();this.SR.R(A.aaR(A.acf.Ae$));this.HP.R(A.aaR(A.acf.Ae$));this.SR.S(A.aaL(
A.fl.Af));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.call(this
,D);if((B=this.Ag0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADd={Init:function(
aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.Ary,B.SA
],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8F,B.AnE],0);
A.zV([this,this.Nm],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nm],[
B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.EB],0);A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9h,B.Axc],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8w,B.Ae0],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8x,B.Ul],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8A,B.Ae3],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Helper).W,B.A8E,B.
Ae5],0);A.pe([this,this.Nm],this);},De:function(E){C.AmY.De.call(this,E);this.DS.
De(E);},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqX()){this.Ab6(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab6(-1);this.OnSetAnimalId(-1);}this.DS.
EB(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AE0(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae0(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Ul(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae3(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae5(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmY._Init.call(this,aArg);this.
__proto__=C.ADd;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Ki={AhI:A.abi(3,A.jV,null),Cf:A.abi(3,0,{0:7,1:30,2:90}),Ann:3,Do:function(){
if(this.Ann<3)return this.Ann;else return 3;},C4:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ann))return-1;return this.Cf.Get(aIndex);},FX:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ann))return AWz;return this.AhI.Get(aIndex);},DU:function(
A7){var O=0;while((O<3)&&(O<=this.Ann)){if(this.Cf.Get(O)===A7)return O;O=O+1;}return-
1;},HH:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ann)){if(this.Cf.Get(
O)>max)max=this.Cf.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhI=[]).__proto__=C.Ki.AhI;(this.Cf=[]).__proto__=C.Ki.Cf;this.
__proto__=C.Ki;this.AhI.Set(0,A.aaR(A.acf.A7i));this.AhI.Set(1,A.aaR(A.acf.A7g));
this.AhI.Set(2,A.aaR(A.acf.A7h));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhI.Set(0,A.aaR(A.acf.A7i));this.AhI.Set(1,A.aaR(A.acf.A7g));this.AhI.Set(2,A.aaR(
A.acf.A7h));},_className:"Application::Days"};C.AUF={Amw:null,BT:null,Q3:null,QA:
null,A$A:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BAO],[B=A._GetAutoObject(A.Device.Device),B.Arw,B.Ath],0);},Bk:function(
aSize){},Ai:function(Ae){var B;var F;C.Dt.Ai.call(this,Ae);var Fq=((Ae&0x20)===0x20
);var GA=this.Bo.Bw;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWA+A._GetAutoObject(
A.Device.Converter).Ak0((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlJ());this.H2.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6E())&&(
Fq||GA));},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));
},J$:function(G){var F;var BR=this.AM;C.Dt.J$.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6E()){this.By(this.AM+10);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J6:function(G){var F;var BR=this.
AM;C.Dt.J6.call(this,G);this.By(this.AM-10);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_v:function(E){if(this.A$A===E)return;
this.A$A=E;this.An();},BAO:function(G){this.An();},_Init:function(aArg){C.Dt._Init.
call(this,aArg);A.acg.AL._Init.call(this.Amw={I:this},0);C.CH._Init.call(this.BT={
I:this},0);A.acg.AL._Init.call(this.Q3={I:this},0);A.acg.Ap._Init.call(this.QA={
I:this},0);this.__proto__=C.AUF;this.H(UT);this.Background.H(UT);this.V.H(As3);this.
V.L(A.jb.Bm);this.Amw.H(AWB);this.Amw.L(A.jb.Afq);this.Ht.H(AWC);this.BT.H(AWD);
this.BT.A6(0x12);this.BT.L(A.jb.Text);this.H2.H(AWE);this.Q3.H(AWF);this.Q3.L(A.
jb.E1);this.QA.H(AWG);this.J(this.Amw,-2);this.J(this.BT,-1);this.J(this.Q3,0);this.
J(this.QA,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EK));this.BT.A2(A.aaL(A.fl.Af));this.QA.Aw(A.aaL(A.ach.ADu));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dt;this.Amw._Done();this.BT._Done();this.Q3.
_Done();this.QA._Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.
call(this);this.Amw._ReInit();this.BT._ReInit();this.Q3._ReInit();this.QA._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EK));this.
BT.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.
Amw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QA)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A_4={Q:null
,Ai2:null,Init:function(aArg){var B;A.zX([this,this.Beh],[B=A._GetAutoObject(A.Device.
Device),B.AEq,B.BaM],0);A.pe([this,this.Beh],this);},As:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ahp:function(Alm){A._GetAutoObject(A.Device.Device).Zq(Alm
);},Beh:function(G){var F;if(!this.Q){A.ab5("%s",AWH);return;}var Bz=null;if(this.
Ai2.Contains(A._GetAutoObject(A.Device.Device).KH)){Bz=this.Ai2.A_K();while(!!Bz&&(
Bz.An9!==A._GetAutoObject(A.Device.Device).KH))Bz=this.Ai2.A_K();}if(!Bz)Bz=this.
Bzs(A._GetAutoObject(A.Device.Device).KH);(F=this.Q,F[2].call(F[0],Bz));},Bzs:function(
Alm){var Bz=null;switch(Alm){case 0:case 1:Bz=A._NewObject(C.AUN,0);break;case 2:
Bz=A._NewObject(C.X1,0);break;case 3:Bz=A._NewObject(C.Avu,0);break;case 53:Bz=A.
_NewObject(C.AVs,0);break;case 77:Bz=A._NewObject(C.NewMenu,0);break;case 27:Bz=
A._NewObject(C.ART,0);break;case 6:Bz=A._NewObject(C.ARs,0);break;case 16:Bz=A._NewObject(
C.ANG,0);break;case 22:Bz=A._NewObject(C.AVn,0);break;case 17:Bz=A._NewObject(C.
AU4,0);break;case 42:Bz=A._NewObject(C.AND,0);break;case 87:Bz=A._NewObject(C.AUg
,0);break;case 88:Bz=A._NewObject(C.AUf,0);break;case 89:Bz=A._NewObject(C.AVj,0
);break;case 95:Bz=A._NewObject(C.AVl,0);break;case 23:Bz=A._NewObject(C.AVL,0);
break;case 18:Bz=A._NewObject(C.ANT,0);break;case 19:Bz=A._NewObject(C.AUh,0);break;
case 37:Bz=A._NewObject(C.AQV,0);break;case 76:Bz=A._NewObject(C.ATX,0);break;case
63:Bz=A._NewObject(C.ANR,0);break;case 64:Bz=A._NewObject(C.ANS,0);break;case 82:
Bz=A._NewObject(C.ANQ,0);break;case 83:Bz=A._NewObject(C.ANO,0);break;case 92:Bz=
A._NewObject(C.ANM,0);break;case 93:Bz=A._NewObject(C.ANP,0);break;case 65:Bz=A.
_NewObject(C.ANN,0);break;case 5:Bz=A._NewObject(C.AUX,0);break;case 4:Bz=A._NewObject(
C.Ad8,0);break;case 39:Bz=A._NewObject(C.ANd,0);break;case 38:Bz=A._NewObject(C.
ANw,0);break;case 28:Bz=A._NewObject(C.Wp,0);break;case 7:Bz=A._NewObject(C.AqH,
0);break;case 81:Bz=A._NewObject(C.AN1,0);break;case 31:Bz=A._NewObject(C.Arp,0);
break;case 78:Bz=A._NewObject(C.ARR,0);break;case 34:Bz=A._NewObject(C.ALW,0);break;
case 35:Bz=A._NewObject(C.ManualActionScanScreen,0);break;case 32:Bz=A._NewObject(
C.SetTransponderScreen,0);break;case 45:Bz=A._NewObject(C.SetSaveTransponderScreen
,0);break;case 49:Bz=A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:
Bz=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case 79:Bz=A._NewObject(
C.MotherScanScreen,0);break;case 80:Bz=A._NewObject(C.SetSaveNaisIdScreen,0);break;
case 8:Bz=A._NewObject(C.GU,0);break;case 9:Bz=A._NewObject(C.I0,0);break;case 24:
Bz=A._NewObject(C.AMb,0);break;case 10:Bz=A._NewObject(C.Amr,0);break;case 21:Bz=
A._NewObject(C.AMf,0);break;case 11:Bz=A._NewObject(C.AMe,0);break;case 29:Bz=A.
_NewObject(C.AuF,0);break;case 48:Bz=A._NewObject(C.AMd,0);break;case 30:Bz=A._NewObject(
C.AMc,0);break;case 12:Bz=A._NewObject(C.AMa,0);break;case 40:Bz=A._NewObject(C.
AL$,0);break;case 14:Bz=A._NewObject(C.ANu,0);break;case 13:Bz=A._NewObject(C.ANv
,0);break;case 20:Bz=A._NewObject(C.AVC,0);break;case 41:Bz=A._NewObject(C.AVB,0
);break;case 43:Bz=A._NewObject(C.AOD,0);break;case 44:Bz=A._NewObject(C.AOC,0);
break;case 61:Bz=A._NewObject(C.AN0,0);break;case 62:Bz=A._NewObject(C.ANZ,0);break;
case 46:Bz=A._NewObject(C.AR6,0);break;case 47:Bz=A._NewObject(C.AR5,0);break;case
85:Bz=A._NewObject(C.AVR,0);break;case 86:Bz=A._NewObject(C.AVQ,0);break;case 71:
Bz=A._NewObject(C.AR1,0);break;case 72:Bz=A._NewObject(C.AR0,0);break;case 74:Bz=
A._NewObject(C.AMU,0);break;case 90:Bz=A._NewObject(C.AT0,0);break;case 73:Bz=A.
_NewObject(C.AUi,0);break;case 51:Bz=A._NewObject(C.AL0,0);break;case 52:Bz=A._NewObject(
C.ALZ,0);break;case 15:Bz=A._NewObject(C.AT7,0);break;case 60:Bz=A._NewObject(C.
AU3,0);break;case 69:Bz=A._NewObject(C.ARq,0);break;case 70:Bz=A._NewObject(C.ARp
,0);break;case 26:Bz=A._NewObject(C.ARU,0);break;case 54:Bz=A._NewObject(C.ARQ,0
);break;case 25:Bz=A._NewObject(C.AOc,0);break;case 66:Bz=A._NewObject(C.AOd,0);
break;case 59:Bz=A._NewObject(C.AOb,0);break;case 58:Bz=A._NewObject(C.AOe,0);break;
case 56:Bz=A._NewObject(C.AOf,0);break;case 57:Bz=A._NewObject(C.AqK,0);break;case
68:Bz=A._NewObject(C.AOg,0);break;case 67:Bz=A._NewObject(C.AN$,0);break;case 84:
Bz=A._NewObject(C.AMh,0);break;case 33:Bz=A._NewObject(C.WeightListScreen,0);break;
case 36:Bz=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 50:Bz=A._NewObject(
C.AnimalMultiInfoScreen,0);break;case 75:Bz=A._NewObject(C.AMu,0);break;case 91:
Bz=A._NewObject(C.AU9,0);break;case 94:Bz=A._NewObject(C.Aqf,0);break;default:throw new
Error(AWI);}if(!!Bz)Bz.An9=Alm;return Bz;},Cg:function(Alm){var F;if(!(F=this.Q,
F[1].call(F[0])))A.ab5("%s",AWJ);else this.Ai2.BnR((F=this.Q,F[1].call(F[0])));A.
_GetAutoObject(A.Device.Device).Zq(Alm);},Fv:function(){var Bfw=3;var Bfv=this.Ai2.
BnG();if(!!Bfv)Bfw=Bfv.An9;else A.ab5("%s",AWK);A._GetAutoObject(A.Device.Device
).Zq(Bfw);},_Init:function(aArg){C.A_6._Init.call(this.Ai2={I:this},0);this.__proto__=
C.A_4;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=null;this.Ai2._Done(
);A.h7--;},_ReInit:function(){this.Ai2._ReInit();},_Mark:function(D){var B;if((B=
this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenLoaderClass"};C.A$={_Init:function(){C.A_4._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.AGc={H5:null,Yv:null,Afb:null,AaL:null,My:null,Azt:1,RatingMode:0,RatedAttribute:
0,CP:function(){this.Yv.R(this.Bc3(this.RatedAttribute));this.AKA(this);},Ai:function(
Ae){this.My.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.ARH),P6,this.Azt.
toFixed()));if(this.RatingMode===1)this.My.Z(true);else this.My.Z(false);},CF:function(
G){var B;C.AB.CF.call(this,G);if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);this.H5.Gm();this.H5.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);A._GetAutoObject(A.Device.Helper).Axr(this.H5,5);A.zX([this,this.AKA],[B=A._GetAutoObject(
A.Device.Device),B.ASB,B.A0a],0);A.zX([this,this.AKA],[B=A._GetAutoObject(A.Device.
Helper).W,B.PM,B.EB],0);A.pe([this,this.AKA],this);},AsB:function(G){var a=this.
AKd(this.RatedAttribute);this.BfN();this.Azt=this.Azt-1;this.An();if(!a)this.ARO(
);else this.Sz(a);},WM:function(G){var a=this.Bc_(this.RatedAttribute);this.BfN(
);this.Azt=this.Azt+1;this.An();if(!a)this.A7F();else this.Sz(a);},AKd:function(
Np){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Np){case 1:return 2;
case 4:return 1;case 3:return 4;default:return 0;}else throw new Error(AHC);},Bc_:
function(Np){if(!this.RatingMode)return 0;else if(this.RatingMode===1)switch(Np){
case 2:return 1;case 1:return 4;case 4:return 3;default:return 0;}else throw new
Error(AHC);},Sz:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=
E;this.Yv.R(this.Bc3(E));this.DJ(E);this.Afb.AnJ(this.H5.Biz(E));if(!this.AKd(E)
){if(this.AQ4())this.N.Cs(A.aaL(A.ach.AbD));else this.N.Cs(null);}else this.N.Cs(
A.aaL(A.ach.Aex));},Bc3:function(Np){return this.AaL.BI(Np);},Bzr:function(Np){if(
!!Np){var a=this.AKd(Np);if(!a)return A.jV;else return this.Bc4(a);}else return A.
jV;},Bzq:function(Np){if(!!Np){var a=this.Bc_(Np);if(!a)return A.jV;else return this.
Bc4(a);}else return A.jV;},ARO:function(){},A7F:function(){},A6F:function(){return null;
},Bc4:function(Np){return this.AaL.Lt(Np);},BfN:function(){if(!!this.RatedAttribute
)this.H5.Bon(this.RatedAttribute,this.Afb.A4);},AKA:function(G){if(this.AQ4())this.
RatingMode=A._GetAutoObject(A.Device.Device).RatingMode;else this.RatingMode=0;this.
Sz(2);this.DJ(this.RatedAttribute);this.An();},XB:function(G){A._GetAutoObject(A.
Device.Device).UpdateOverlayMenu(4);},AkV:function(G){var a=this.AKd(this.RatedAttribute
);if(!a){if(this.AQ4())this.XB(this);}else this.ARO();},DJ:function(Np){this.N.Hu(
this.Bzr(Np));if(!!this.N.An4){this.N.CY(null);this.N.OO(true);}else{this.N.CY(A.
aaL(A.ach.Aex));this.N.OO(false);}this.N.CV(this.Bzq(Np));if(!!this.N.An6){this.
N.C6(null);this.N.OP(true);}else{this.N.C6(this.A6F());this.N.OP(false);}},AQ4:function(
){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){case 0:case 2:return true;
case 1:return false;default:A.ab5("%s%e",Ale,A._GetAutoObject(A.Device.Helper).W.
AnimalType);}return false;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Yv={I:this},0);C.Rating._Init.call(this.Afb={I:this},0);A.Device.
RatedAttributeToString._Init.call(this.AaL={I:this},0);A.acg.Text._Init.call(this.
My={I:this},0);this.__proto__=C.AGc;this.Background.L(A.jb.CK);this.N.Z(true);this.
Dq(C.IG);this.Yv.H(AWL);this.Yv.KS(true);this.Yv.L(A.jb.Text);this.Afb.H(AWM);this.
My.H(AWN);this.My.A6(0x14);this.My.R(A.aaR(A.acf.ARH));this.My.L(A.jb.Text);this.
J(this.Yv,0);this.J(this.Afb,0);this.J(this.My,0);this.Bb(this.Afb);this.N.CB=[this
,this.AsB];this.N.Ck=[this,this.AkV];this.N.Cl=[this,this.WM];this.Yv.S(A.aaL(A.
fl.Af));this.Afb.AR=[this,this.WM];this.My.S(A.aaL(A.fl.Af));this.H5=A._NewObject(
A.Device.Rating,0);},_Done:function(){this.__proto__=C.AB;this.Yv._Done();this.Afb.
_Done();this.AaL._Done();this.My._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Yv._ReInit();this.Afb._ReInit();this.AaL._ReInit(
);this.My._ReInit();this.My.R(A.aaR(A.acf.ARH));this.Yv.S(A.aaL(A.fl.Af));this.My.
S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.H5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Afb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.My)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RateScreen"};C.HY={Y:null,Gender:null,AnimalType:null,Breed:null,Jd:
null,Pj:null,AsQ:null,BZ:null,C$:null,C9:null,CG:null,Gi:null,Ay:null,KI:0,Init:
function(aArg){A.zX([this,this.Bbo],this.BZ.Q,0);A.pe([this,this.Bbo],this);A.pe([
this,this.AA7],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.
Device.Helper).ANr(this.Y);},DE:function(G){var B;var Fc=0;var X=this.AV;switch(
this.Cr.CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;
default:;}X=this.QD(X,Fc,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HD(X,true,null,null);this.AA7(this);},Fe:function(G){var B;this.Ay.Mu((B=
this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[
1]);},AeV:function(E){if(this.KI===E)return;this.KI=E;A.abo([this,this.Av7,this.
AeV],0);},AA7:function(G){var B;var GS=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.
N.Hu(A.jV);this.N.CY(A.aaL(A.ach.E2));this.N.CB=[this,this.AIS];if(!!GS&&!!GS.Amn
){this.N.FJ(A.jV);this.N.Kw.Dr(255);this.N.ArN(GS.AqP);this.N.Cs(GS.AvE);this.N.
Ck=GS.Amn;}else{this.N.FJ(A.jV);this.N.Cs(null);this.N.Ck=null;}if(!!GS&&!!GS.Agn
){this.N.CV(GS.AxI);this.N.HQ.Dr(GS.Axf);this.N.AnA(GS.AmS);this.N.C6(GS.Aq5);this.
N.Cl=GS.Agn;}else this.Aug();},Af$:function(G){A.ab5("%s",Aye);},AyQ:function(s){
this.Af$(s);},Ev:function(G){A.ab5("%s",Aye);},AIS:function(s){this.Ev(s);},Aug:
function(){A.ab5("%s",Alf);},AAt:function(G){A.ab5("%s",Aye);},AcS:function(s){this.
AAt(s);},JD:function(Ag){this.Bb(Ag);this.Y.HD(Ag,true,null,null);this.Y.Vt(null
,null);},ApH:function(G){var F;this.C9.Ahm(A._GetAutoObject(A.Device.Helper).Abr((
F=this.BZ.Q,F[1].call(F[0]))));},Bbo:function(s){this.ApH(s);},Av7:function(){return this.
KI;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UM._Init.call(
this.Jd={I:this},0);A.Device.M1._Init.call(this.Pj={I:this},0);A.Device.KY._Init.
call(this.AsQ={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.BW._Init.call(this.
C$={I:this},0);C.AkT._Init.call(this.C9={I:this},0);C.Axu._Init.call(this.CG={I:
this},0);C.Asw._Init.call(this.Gi={I:this},0);C.Ay._Init.call(this.Ay={I:this},0
);this.__proto__=C.HY;var B;this.N.Z(true);this.Dq(C.IG);this.Y.H(E$);this.Y.JP(
1);this.KI=A._GetAutoObject(A.Device.Helper).Abr(this.AnimalType.Q);this.BZ.H(AhV
);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afp));this.C$.H(Ayf);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afk));this.C9.H(Aoq);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI)
);this.C9.F0(1000);this.C9.EV(99000);this.C9.Ahm(A._GetAutoObject(A.Device.Helper
).Abr(this.AnimalType.Q));this.CG.H(AhW);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.Gi.H(AWO);this.Gi.Aj(true);this.Gi.T(A.aaR(A.acf.Jd));this.Ay.H(Ayg
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
Wp={Ay5:false,LO:function(G){if(A._GetAutoObject(A.Device.Device).Am.Lh())A._GetAutoObject(
A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gm();A._GetAutoObject(A.Device.Helper
).Aqi(A._GetAutoObject(A.Device.Helper).W);},Aug:function(){this.N.CV(A.jV);this.
N.C6(A.aaL(A.ach.ADy));this.N.Cl=[this,this.AyQ];},CF:function(G){if(!this.Ay5){
this.Ay5=true;A.pe([this,this.AcS],this);}else C.Arp.CF.call(this,G);},AAt:function(
G){A._GetAutoObject(C.A$).Cg(49);},_Init:function(aArg){C.Arp._Init.call(this,aArg
);this.__proto__=C.Wp;this.JV(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IG={_Init:function(aArg){C.ADd._Init.call(this,aArg);this.__proto__=C.IG;this.
A9T(false);},_className:"Application::HeaderSelectedAnimalId"};C.I0={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Ek:null,Y:null,PX:null,SZ:null,N9:
null,S0:null,Nl:null,Ot:null,RK:null,Ou:null,RL:null,ND:null,Ld:null,Jn:null,KW:
null,Mr:null,Yp:null,S1:null,RM:null,Ay:null,AxV:0,AxU:0,AuD:0,AuC:0,Aro:0,AsI:0
,Avf:0,Avg:0,Am5:true,Amq:false,Aod:false,Init:function(aArg){A.zX([this,this.Avl
],this.Ld.Q,0);A.zX([this,this.AuI],this.Jn.Q,0);A.zX([this,this.BpA],this.KW.Q,
0);A.zX([this,this.BjV],this.Mr.Q,0);A.zX([this,this.Bp6],this.Nl.Q,0);A.zX([this
,this.Bp5],this.N9.Q,0);A.zX([this,this.BgR],this.ND.Q,0);A.zX([this,this.BgQ],this.
Ou.Q,0);this.Bb(this.PX);},DE:function(G){var Fc=0;var X=this.AV;switch(this.Cr.
CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;default:;
}X=this.QD(X,Fc,0x414);if(!!X)this.Bb(X);this.MO(this);},CF:function(G){if(!!A._GetAutoObject(
A.Device.Device).Am.Filter)this.Bl(A._GetAutoObject(A.Device.Device).Am.Filter.Fg(
));else this.Bl(A._NewObject(A.Device.Filter,0));},Ev:function(G){A._GetAutoObject(
C.A$).Fv();},A2O:function(G){var EE=(C.Aeo.isPrototypeOf(G)?G:null);if(!EE)return;
var Av=this.Filter.DQ(EE.Ep,EE.Operator);if(!!Av){this.Filter.N3(Av);A.abo([this
,this.Fj,this.Fn],0);}else{if(EE.Ep===11){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Ep===12){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else if(EE.Ep===8){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A4=true;}else A.ab5("%s",AHD+EE.Ep.toFixed());if(!!Av){this.Filter.
CW(Av);A.abo([this,this.Fj,this.Fn],0);}}},Bz3:function(G){A._GetAutoObject(A.Device.
Device).Am.Bl(this.Filter);A._GetAutoObject(C.A$).Fv();},AAr:function(G){var EE=(
C.AmX.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.DQ(EE.Ep,EE.Operator
);if(!!Av){this.Filter.N3(Av);A.abo([this,this.Fj,this.Fn],0);}else{if(EE.Ep===7
){Av=A._NewObject(A.Device.GenderFilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;
}else if(EE.Ep===14){Av=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Av.EJ=
EE.Ep;Av.Operator=EE.Operator;}else if((EE.Ep===22)||(EE.Ep===26)){var A0R=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0R.EJ=EE.Ep;A0R.Operator=0;Av=A0R;}else A.ab5(
"%s",AHD+EE.Ep.toFixed());if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fj,this.Fn
],0);}}},A9O:function(E){if(this.Avf===E)return;this.Avf=E;A.abo([this,this.BkB,
this.A9O],0);},A9P:function(E){if(this.Avg===E)return;this.Avg=E;A.abo([this,this.
BkC,this.A9P],0);},Avl:function(G){var F;this.A9P((F=this.Ld.Q,F[1].call(F[0])));
var Av=this.Filter.DQ(7,0);if(!!Av){var AzN=(A.Device.GenderFilterCriterion.isPrototypeOf(
Av)?Av:null);if(!!AzN)AzN.A4=this.Avg;else A.ab5("%s",AfB);}},AuI:function(G){var
F;this.A9O((F=this.Jn.Q,F[1].call(F[0])));var Av=this.Filter.DQ(14,0);if(!!Av){var
U2=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Av)?Av:null);if(!!U2)U2.A4=
this.Avf;else A.ab5("%s",AfB);}},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1
))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},A_u:function(
E){if(this.AsI===E)return;this.AsI=E;A.abo([this,this.Blc,this.A_u],0);},BpA:function(
G){var F;this.A_u((F=this.KW.Q,F[1].call(F[0])));var Av=this.Filter.DQ(22,1);if(
!!Av){var Aja=(A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!Aja
)switch(this.AsI){case 1:Aja.Operator=5;break;case 0:Aja.Operator=0;break;default:
A.ab5("%s%e",AHE,this.AsI);}else A.ab5("%s",AfB);}},A91:function(E){if(this.Aro===
E)return;this.Aro=E;A.abo([this,this.BkR,this.A91],0);},BjV:function(G){var F;this.
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
this.Filter.DQ(1,2))?B:null);if(!!BdL){this.Ar7(true);this.AFV(BdL.A4);}var Bde=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DQ(1,3))?B:null);if(!!
Bde){this.Ar7(true);this.AFW(Bde.A4);}this.ArF(false);A.pe([this,this.ALg],this);
var BdK=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DQ(4,3))?B:null
);if(!!BdK){this.ArF(true);this.AEJ(A._GetAutoObject(A.Device.Helper).MN(BdK.A4,
A._GetAutoObject(A.Device.Helper).Dv()));}var Bdd=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DQ(4,2))?B:null);if(!!Bdd){this.ArF(true);this.AEL(A.
_GetAutoObject(A.Device.Helper).MN(Bdd.A4,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var AzN=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DQ(7,0
))?B:null);if(!!AzN)this.Ld.By(this.Gender.DU(AzN.A4));var U2=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DQ(14,0))?B:null);if(!!U2)this.Jn.By(this.AnimalType.
DU(U2.A4));var Aja=this.Filter.DQ(22,1);if(!!Aja){if(!Aja.Operator)this.KW.By(0);
else this.KW.By(1);}var AtW=this.Filter.DQ(26,1);if(!!AtW){if(!AtW.Operator)this.
Mr.By(0);else this.Mr.By(1);}},Fn:function(Aq){this.Bl(Aq);},AFW:function(E){if(
this.AxV===E)return;this.AxV=E;A.abo([this,this.A8$,this.AFW],0);},AFV:function(
E){if(this.AxU===E)return;this.AxU=E;A.abo([this,this.A8_,this.AFV],0);},Bp6:function(
G){var F;this.AFW((F=this.Nl.Q,F[1].call(F[0])));var Av=this.Filter.DQ(1,3);if(!
!Av){var ABs=(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!ABs)
ABs.A4=this.AxV;else A.ab5("%s",AfB);}},Bp5:function(G){var F;this.AFV((F=this.N9.
Q,F[1].call(F[0])));var Av=this.Filter.DQ(1,2);if(!!Av){var ABs=(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!ABs)ABs.A4=this.AxU;else A.ab5("%s",AfB);}},Bee:
function(G){var EE=(C.AjI.isPrototypeOf(G)?G:null);if(!EE)return;var Av=this.Filter.
DQ(EE.Ep,EE.Operator);if(!!Av){this.Filter.N3(Av);A.abo([this,this.Fj,this.Fn],0
);}else{if(EE===this.SZ){Av=A._NewObject(A.Device.Int32FilterCriterion,0);Av.EJ=
EE.Ep;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:
null).A4=this.AxU;this.Bb(this.N9);}else if(EE===this.S0){Av=A._NewObject(A.Device.
Int32FilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=this.AxV;this.Bb(this.Nl);}if(!!Av){this.Filter.CW(
Av);A.abo([this,this.Fj,this.Fn],0);}}A.pe([this,this.A4m],this);},A4m:function(
G){var A2x=!!this.Filter.DQ(this.N9.Ep,this.N9.Operator);var A4n=!!this.Filter.DQ(
this.Nl.Ep,this.Nl.Operator);A._GetAutoObject(A.Device.Helper).JW(this.SZ,this.Aod
);A._GetAutoObject(A.Device.Helper).JW(this.S0,this.Aod);A._GetAutoObject(A.Device.
Helper).JW(this.N9,A2x);A._GetAutoObject(A.Device.Helper).JW(this.Nl,A4n);},MO:function(
G){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},BAV:function(G){A.pe([this,this.Fe],this);A.pe([this,this.
MO],this);},Bz0:function(G){this.Ar7(!this.Aod);if(this.Aod===false){var Av=this.
Filter.DQ(this.PX.Ep,this.PX.Operator);while(!!Av){this.Filter.N3(Av);Av=this.Filter.
DQ(this.PX.Ep,this.PX.Operator);}A.abo([this,this.Fj,this.Fn],0);}},Ar7:function(
E){if(this.Aod===E)return;this.Aod=E;A.abo([this,this.A89,this.Ar7],0);A.pe([this
,this.A4m],this);},AEL:function(E){if(this.AuD===E)return;this.AuD=E;A.abo([this
,this.A8d,this.AEL],0);},AEJ:function(E){if(this.AuC===E)return;this.AuC=E;A.abo([
this,this.A8b,this.AEJ],0);},BgR:function(G){var F;this.AEL((F=this.ND.Q,F[1].call(
F[0])));var Av=this.Filter.DQ(4,2);if(!!Av){var AfN=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!AfN){var AaQ=A._GetAutoObject(A.Device.Helper).ZQ(
this.AuD-1);AfN.A4=AaQ;}else A.ab5("%s",AfB);}},BgQ:function(G){var F;this.AEJ((
F=this.Ou.Q,F[1].call(F[0])));var Av=this.Filter.DQ(4,3);if(!!Av){var AfN=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AfN){var AaQ=A._GetAutoObject(
A.Device.Helper).ZQ(this.AuC);AfN.A4=AaQ;}else A.ab5("%s",AfB);}},ALg:function(G
){var A2x=this.Am5&&!!this.Filter.DQ(this.Ou.Ep,this.Ou.Operator);var A4n=this.Am5&&
!!this.Filter.DQ(this.ND.Ep,this.ND.Operator);A._GetAutoObject(A.Device.Helper).
JW(this.Ot,this.Am5);A._GetAutoObject(A.Device.Helper).JW(this.RK,this.Am5&&this.
Amq);A._GetAutoObject(A.Device.Helper).JW(this.RL,this.Am5&&this.Amq);A._GetAutoObject(
A.Device.Helper).JW(this.Ou,A2x);A._GetAutoObject(A.Device.Helper).JW(this.ND,A4n
);},ArF:function(E){if(this.Amq===E)return;this.Amq=E;A.abo([this,this.A8a,this.
ArF],0);A.pe([this,this.ALg],this);},Bed:function(G){var EE=(C.AjI.isPrototypeOf(
G)?G:null);if(!EE)return;var Av=this.Filter.DQ(EE.Ep,EE.Operator);if(!!Av){this.
Filter.N3(Av);A.abo([this,this.Fj,this.Fn],0);}else{if(EE===this.RK){Av=A._NewObject(
A.Device.UInt32FilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper
).ZQ(this.AuC);this.Bb(this.Ou);}else if(EE===this.RL){Av=A._NewObject(A.Device.
UInt32FilterCriterion,0);Av.EJ=EE.Ep;Av.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null).A4=A._GetAutoObject(A.Device.Helper).ZQ(this.AuD-1);this.
Bb(this.ND);}if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fj,this.Fn],0);}}A.pe([
this,this.ALg],this);},BzZ:function(G){this.ArF(!this.Amq);if(this.Amq===false){
var Av=this.Filter.DQ(this.Ot.Ep,this.Ot.Operator);while(!!Av){this.Filter.N3(Av
);Av=this.Filter.DQ(this.Ot.Ep,this.Ot.Operator);}A.abo([this,this.Fj,this.Fn],0
);}},BmA:function(E){if(this.Am5===E)return;this.Am5=E;A.pe([this,this.ALg],this
);},Fj:function(){return this.Filter;},BkC:function(){return this.Avg;},BkB:function(
){return this.Avf;},Blc:function(){return this.AsI;},BkR:function(){return this.
Aro;},A8$:function(){return this.AxV;},A8_:function(){return this.AxU;},A89:function(
){return this.Aod;},A8d:function(){return this.AuD;},A8b:function(){return this.
AuC;},A8a:function(){return this.Amq;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABJ._Init.call(this.Transponder={I:this},0);C.ABJ._Init.
call(this.Ek={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ABU._Init.call(
this.PX={I:this},0);C.AjI._Init.call(this.SZ={I:this},0);C.Abq._Init.call(this.N9={
I:this},0);C.AjI._Init.call(this.S0={I:this},0);C.Abq._Init.call(this.Nl={I:this
},0);C.ABU._Init.call(this.Ot={I:this},0);C.AjI._Init.call(this.RK={I:this},0);C.
ACI._Init.call(this.Ou={I:this},0);C.AjI._Init.call(this.RL={I:this},0);C.ACI._Init.
call(this.ND={I:this},0);C.AmX._Init.call(this.Ld={I:this},0);C.AmX._Init.call(this.
Jn={I:this},0);C.AmX._Init.call(this.KW={I:this},0);C.AmX._Init.call(this.Mr={I:
this},0);C.Qy._Init.call(this.Yp={I:this},0);C.Qy._Init.call(this.S1={I:this},0);
C.Qy._Init.call(this.RM={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I0;var B;this.N.Z(true);this.N.CV(A.aaR(A.acf.A4X));this.Dq(C.APw);this.Gender.
As(this.Avg);this.AnimalType.As(this.Avf);this.Transponder.As(this.AsI);this.Ek.
As(this.Aro);this.Y.H(E$);this.Y.JP(1);this.PX.H(IR);this.PX.Aj(true);this.PX.T(
A._GetAutoObject(A.Device.Helper).AmV(0,1));this.PX.Nd(1);this.SZ.H(P7);this.SZ.
Aj(true);this.SZ.T(A.aaR(A.acf.AD6));this.SZ.Nd(1);this.SZ.ON(2);this.N9.H(Aaf);
this.N9.Nd(1);this.N9.ON(2);this.N9.AFN(A.aaR(A.acf.GJ));this.S0.H(Alg);this.S0.
Aj(true);this.S0.T(A.aaR(A.acf.AG8));this.S0.Nd(1);this.S0.ON(3);this.Nl.H(Aor);
this.Nl.Aj(true);this.Nl.Nd(1);this.Nl.ON(3);this.Nl.AFN(A.aaR(A.acf.GJ));this.Ot.
H(AWP);this.Ot.Aj(true);this.Ot.T(A.aaR(A.acf.RJ));this.Ot.Nd(4);this.RK.H(AWQ);
this.RK.Aj(true);this.RK.T(A.aaR(A.acf.AD6));this.RK.Nd(4);this.RK.ON(3);this.Ou.
H(AWR);this.Ou.Nd(4);this.Ou.ON(3);this.Ou.A96(2);this.RL.H(AWS);this.RL.Aj(true
);this.RL.T(A.aaR(A.acf.AG8));this.RL.Nd(4);this.RL.ON(2);this.ND.H(AWT);this.ND.
Aj(true);this.ND.Nd(4);this.ND.ON(2);this.ND.A96(3);this.Ld.H(As4);this.Ld.Aj(true
);this.Ld.Nd(7);this.Ld.Aho(0);this.Ld.ON(0);this.Jn.H(Xc);this.Jn.Aj(true);this.
Jn.Nd(14);this.Jn.Aho(0);this.Jn.ON(0);this.KW.H(Xc);this.KW.Aj(true);this.KW.Nd(
22);this.KW.Aho(0);this.KW.ON(1);this.Mr.H(Xc);this.Mr.Aj(true);this.Mr.Nd(26);this.
Mr.Aho(0);this.Mr.ON(1);this.Yp.H(Xc);this.Yp.Aj(true);this.Yp.Nd(11);this.Yp.Aho(
0);this.Yp.ON(0);this.S1.H(Xc);this.S1.Aj(true);this.S1.Nd(12);this.S1.Aho(0);this.
S1.ON(0);this.RM.H(Xc);this.RM.Aj(true);this.RM.Nd(8);this.RM.Aho(0);this.RM.ON(
0);this.Ay.H(Iq);this.J(this.Y,0);this.J(this.PX,0);this.J(this.SZ,0);this.J(this.
N9,0);this.J(this.S0,0);this.J(this.Nl,0);this.J(this.Ot,0);this.J(this.RK,0);this.
J(this.Ou,0);this.J(this.RL,0);this.J(this.ND,0);this.J(this.Ld,0);this.J(this.Jn
,0);this.J(this.KW,0);this.J(this.Mr,0);this.J(this.Yp,0);this.J(this.S1,0);this.
J(this.RM,0);this.J(this.Ay,0);this.N.CB=[this,this.Ev];this.N.Cl=[this,this.Bz3
];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.BAV];this.PX.AR=[this,this.Bz0
];this.PX.As([this,this.A89,this.Ar7]);this.SZ.AR=[this,this.Bee];this.N9.Gn([this
,this.D_,this.GN]);this.N9.As([this,this.A8_,this.AFV]);this.S0.AR=[this,this.Bee
];this.Nl.Gn([this,this.D_,this.GN]);this.Nl.As([this,this.A8$,this.AFW]);this.Ot.
AR=[this,this.BzZ];this.Ot.As([this,this.A8a,this.ArF]);this.RK.AR=[this,this.Bed
];this.Ou.Gn([this,this.D_,this.GN]);this.Ou.As([this,this.A8b,this.AEJ]);this.RL.
AR=[this,this.Bed];this.ND.Gn([this,this.D_,this.GN]);this.ND.As([this,this.A8d,
this.AEL]);this.Ld.AR=[this,this.AAr];this.Ld.As([B=this.Gender,B.B7,B.B8]);this.
Ld.CI(this.Gender);this.Jn.AR=[this,this.AAr];this.Jn.As([B=this.AnimalType,B.B7
,B.B8]);this.Jn.CI(this.AnimalType);this.KW.AR=[this,this.AAr];this.KW.As([B=this.
Transponder,B.B7,B.B8]);this.KW.CI(this.Transponder);this.Mr.AR=[this,this.AAr];
this.Mr.As([B=this.Ek,B.B7,B.B8]);this.Mr.CI(this.Ek);this.Yp.AR=[this,this.A2O];
this.S1.AR=[this,this.A2O];this.RM.AR=[this,this.A2O];this.Init(aArg);},_Done:function(
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
_ReInit();this.N.CV(A.aaR(A.acf.A4X));this.SZ.T(A.aaR(A.acf.AD6));this.N9.AFN(A.
aaR(A.acf.GJ));this.S0.T(A.aaR(A.acf.AG8));this.Nl.AFN(A.aaR(A.acf.GJ));this.Ot.
T(A.aaR(A.acf.RJ));this.RK.T(A.aaR(A.acf.AD6));this.RL.T(A.aaR(A.acf.AG8));},_Mark:
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
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A_6={ZR:null,BnR:
function(Bxw){var EF=A._NewObject(C.A_5,0);EF.AB=Bxw;EF.Ms=this.ZR;this.ZR=EF;},
A_K:function(){var Vh=null;if(!!this.ZR){Vh=this.ZR.AB;this.ZR=this.ZR.Ms;}return Vh;
},Contains:function(Alm){var EF=this.ZR;while(!!EF){if(EF.AB.An9===Alm)return true;
EF=EF.Ms;}return false;},BnG:function(){if(!!this.ZR)return this.ZR.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A_6;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A_5={AB:null,
Ms:null,_Init:function(aArg){this.__proto__=C.A_5;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMe={ARO:function(){A._GetAutoObject(
A.Device.Helper).Axr(this.H5,0);A._GetAutoObject(C.A$).Fv();},A7F:function(){this.
H5.Cq(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A$).Fv();},A6F:function(
){return A.aaL(A.ach.Am3);},_Init:function(aArg){C.AGc._Init.call(this,aArg);this.
__proto__=C.AMe;this.Dq(C.IG);},_className:"Application::AnimalActionRateScreen"
};C.AMa={Wv:function(G){this.Agp();this.IY(A.aaR(A.acf.AVc),[this,this.ATC],5);this.
IY(A.aaR(A.acf.A5o),[this,this.Blz],4);this.IY(A.aaR(A.acf.AGb),[this,this.ATn],
3);this.IY(A.aaR(A.acf.An3),[this,this.AwR],2);this.IY(A.aaR(A.acf.XP),[this,this.
AEO],1);this.IY(A.aaR(A.acf.Auy),[this,this.AEI],0);A._GetAutoObject(C.BH).Ft();
A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},DE:function(G){},Abt:function(){return C.AM5;},Abu:function(
){return C.ADf;},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Ay3=A._NewObject(A.Device.BoolFilterCriterion,0);Ay3.Initialize(8,0,true,true);Be.
CW(Ay3);A._GetAutoObject(A.Device.Device).Am.Bl(Be);},HO:function(G){C.GU.HO.call(
this,G);if(this.Akh()===false){this.N.Cs(A.aaL(A.ach.AGk));this.N.Ck=[this,this.
A5W];this.N.FJ(A.jV);}this.N.OO(false);this.N.OP(false);},Agb:function(){A._GetAutoObject(
C.A$).Cg(40);},_Init:function(aArg){C.GU._Init.call(this,aArg);this.__proto__=C.
AMa;var B;this.Dq(C.AOX);this.Dz(A.aaR(A.acf.A7L));this.AwM([B=A._GetAutoObject(
A.Device.Device),B.A8e,B.BaO]);},_ReInit:function(){C.GU._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7L));},_className:"Application::AlarmListScreen"};C.ANu={DE:function(
G){},Al0:function(G){if(!!this.Bj)A.ab5("%i",this.Bj.AD.Go);var Aa=(C.AB1.isPrototypeOf(
G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper).HL(Aa.Hn);A._GetAutoObject(
C.A$).Cg(13);}},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Azl=A._NewObject(A.Device.BoolFilterCriterion,0);Azl.Initialize(9,0,true,true);Be.
CW(Azl);A._GetAutoObject(A.Device.Device).Am.Bl(Be);},HO:function(G){C.GU.HO.call(
this,G);this.N.OO(false);this.N.OP(false);},_Init:function(aArg){C.GU._Init.call(
this,aArg);this.__proto__=C.ANu;this.Dq(C.AOZ);this.Dz(A.aaR(A.acf.A7M));},_ReInit:
function(){C.GU._ReInit.call(this);this.Dz(A.aaR(A.acf.A7M));},_className:"Application::ControlListScreen"
};C.Aeo={Filter:null,Ep:0,I_:10,TableId:0,Operator:1,CP:function(){var F;this.To((
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
C.Aeo;this.V.H(AHF);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
Qy={H4:null,Bk:function(aSize){var B;C.Aeo.Bk.call(this,aSize);this.H4.H([(aSize[
0]-((B=this.H4.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.I_,0,this.
H4.M[0]-this.I_,aSize[1]]);},To:function(AH){this.T(A._GetAutoObject(A.Device.Helper
).AmV(this.TableId,this.Ep));var Av=(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Av&&Av.A4)this.H4.Cv(1);else this.H4.Cv(0);},_Init:function(aArg
){C.Aeo._Init.call(this,aArg);A.acg.Ap._Init.call(this.H4={I:this},0);this.__proto__=
C.Qy;this.H4.H(AHG);this.H4.Cv(0);this.J(this.H4,0);this.H4.Aw(A.aaL(A.ach.AqN));
},_Done:function(){this.__proto__=C.Aeo;this.H4._Done();C.Aeo._Done.call(this);}
,_ReInit:function(){C.Aeo._ReInit.call(this);this.H4._ReInit();},_Mark:function(
D){var B;C.Aeo._Mark.call(this,D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APw={Ap:null,Text:null,De:function(
E){C.BS.De.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BS.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APw;this.Ap.H(AWU);this.Text.H(AWV);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Aw(A.aaL(A.ach.Aez));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BS;this.Ap._Done();this.Text._Done();C.BS._Done.call(this);},_ReInit:
function(){C.BS._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjS={
AW:null,T1:null,Gr:null,D2:null,A_:null,Init:function(aArg){var B;A.zV([this,this.
DY],A._GetAutoObject(A.Device.Device).Am,0);A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fj,B.Fn],0);A.pe([this,this.DY],this);},Bk:function(aSize){
var B;C.BS.Bk.call(this,aSize);this.T1.H(A.abJ(this.T1.M,A.abe(this.AW.M.slice(0
,2),AWW)));this.T1.H(A.abK(this.T1.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AWX
)));},Ai:function(Ae){var B;C.BS.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(Iy)this.T1.L(A.jb.AV);else this.T1.L(A.jb.Am4);},De:function(E){
C.BS.De.call(this,E);this.Gr.L(E);this.D2.Zt(E);},Ww:function(E){C.BS.Ww.call(this
,E);this.D2.CT(E);},Akp:function(){return this.AW.Akp();},Awd:function(){return this.
AW.Awd();},DY:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed(
));},_Init:function(aArg){C.BS._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BU._Init.call(this.T1={I:this},0);A.acg.Ap._Init.call(this.Gr={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C5._Init.call(this.A_={I:this
},0);this.__proto__=C.AjS;this.AW.H(AWY);this.T1.H(AWZ);this.T1.Nh(2);this.Gr.H(
AW0);this.Gr.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(AW1);this.D2.Zt(A.jb.Bm);this.
D2.CT(A.jb.Re);this.D2.Hh(2);this.A_.DC(AW2);this.A_.DL(AW3);this.A_.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.T1,0);this.J(this.Gr,0);this.J(this.D2,0);this.J(this.
A_,0);this.Bb(this.AW);this.Gr.Aw(A.aaL(A.ach.Gr));this.D2.S(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.BS;this.AW._Done();this.T1._Done(
);this.Gr._Done();this.D2._Done();this.A_._Done();C.BS._Done.call(this);},_ReInit:
function(){C.BS._ReInit.call(this);this.AW._ReInit();this.T1._ReInit();this.Gr._ReInit(
);this.D2._ReInit();this.A_._ReInit();this.D2.S(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.BS._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DF={Di:null,Im:null,Il:null
,Af_:function(G){if(this.Ey<0)this.LZ(1);else if(this.Ey===9)this.LZ(0);else this.
LZ(this.Ey+1);A.pe(this.Di,this);},Ai:function(Ae){var B;C.Ey.Ai.call(this,Ae);var
G$=((Ae&0x10)===0x10);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.Dr(256);}else if(G$){this.Background.L(this.M0);this.
Text.L(A.jb.Text);this.Dr(256);}else{this.Background.L(this.M0);this.Text.L(A.jb.
Text);this.Dr(128);}},Af9:function(G){if(this.Ey<=0)this.LZ(9);else this.LZ(this.
Ey-1);A.pe(this.Di,this);},_Init:function(aArg){C.Ey._Init.call(this,aArg);A.Core.
BN._Init.call(this.Im={I:this},0);A.Core.BN._Init.call(this.Il={I:this},0);this.
__proto__=C.DF;this.Im.Filter=4;this.Il.Filter=5;this.Im.BO=[this,this.Af_];this.
Im.D1=[this,this.Af_];this.Il.BO=[this,this.Af9];this.Il.D1=[this,this.Af9];},_Done:
function(){this.__proto__=C.Ey;this.Im._Done();this.Il._Done();C.Ey._Done.call(this
);},_ReInit:function(){C.Ey._ReInit.call(this);this.Im._ReInit();this.Il._ReInit(
);},_Mark:function(D){var B;C.Ey._Mark.call(this,D);if((B=this.Di)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Il)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Di:null,Ct:null,CU:null,Dx:null,Eo:null,FV:null,ET:null,Fh:null,E8:null,M5:0,AQ5:
false,Aqr:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqr)this.ET.AeW(true);else this.ET.AeW(false);},AwI:function(E){var B;
if(E===this.Akp())return;var Af4=E;var DW=this.ET;while(!!DW){if(Af4>0){DW.LZ(Af4
%10);Af4=(Af4/10)|0;}else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=this.QD(DW,2,0x11))?
B:null);}},Akp:function(){return A.wz(this.Awd(),-1,10);},Om:function(G){if(this.
FV.Ey>=0)this.BfY(7);},MU:function(G){if(((this.Akp()>0)||this.AQ5)&&(this.Ct.Ey<
0))this.BfY(2);else if(this.Akp()<=0)this.E8.NH=true;},Adt:function(G){A.pe(this.
Di,this);},BfY:function(Gw){var B;var ALu=0;var DW=null;switch(Gw){case 2:{DW=this.
Ct;ALu=7;}break;case 7:{DW=this.ET;ALu=2;}break;default:throw new Error(AW4);}while(
!!DW){var A2H=(C.DF.isPrototypeOf(B=this.QD(DW,ALu,0x11))?B:null);if(!!A2H)DW.LZ(
A2H.Ey);else if(ALu===7)DW.LZ(0);else DW.LZ(-1);DW=A2H;}A.pe([this,this.Adt],this
);},AeW:function(E){if(this.Aqr===E)return;this.Aqr=E;this.An();},BmB:function(E
){if(this.AQ5===E)return;this.AQ5=E;},AS3:function(E){var B;if(E===this.Awd())return;
var Af4=E;var DW=this.ET;while(!!DW){if(Af4.length>0){DW.LZ(A.wz(A.ab2(Af4,1),-1
,10));Af4=A.abV(Af4,Af4.length-1);}else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=this.
QD(DW,2,0x11))?B:null);}},Awd:function(){var B;var Iw=A.jV;var O=0;var B5=this.Ct;
for(;O<6;O=O+1){if(!!B5&&(B5.Ey>=0))Iw=Iw+B5.Ey.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TL(B5,0x11))?B:null);}return Iw;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Ct={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.Eo={I:this},0);C.DF.
_Init.call(this.FV={I:this},0);C.DF._Init.call(this.ET={I:this},0);A.Core.BN._Init.
call(this.Fh={I:this},0);A.Core.BN._Init.call(this.E8={I:this},0);this.__proto__=
C.AW;this.H(Ayh);this.Ct.AZ(0x3);this.Ct.H(AHH);this.CU.AZ(0x3);this.CU.H(AHI);this.
Dx.AZ(0x3);this.Dx.H(AHJ);this.Eo.AZ(0x3);this.Eo.H(AHK);this.FV.AZ(0x3);this.FV.
H(AHL);this.ET.AZ(0x3);this.ET.H(AHM);this.ET.LZ(0);this.Fh.Filter=6;this.E8.Filter=
7;this.M5=A.jb.CK;this.J(this.Ct,0);this.J(this.CU,0);this.J(this.Dx,0);this.J(this.
Eo,0);this.J(this.FV,0);this.J(this.ET,0);this.Bb(this.ET);this.Ct.Di=[this,this.
Adt];this.CU.Di=[this,this.Adt];this.Dx.Di=[this,this.Adt];this.Eo.Di=[this,this.
Adt];this.FV.Di=[this,this.Adt];this.ET.Di=[this,this.Adt];this.Fh.BO=[this,this.
Om];this.E8.BO=[this,this.MU];},_Done:function(){this.__proto__=A.Core.P;this.Ct.
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
"Application::InputID"};C.Bhs="15ed31e9";C.BCx={Undefined:0,BDz:1,BCO:2};C.AkJ={
Tm:null,AiU:null,La:null,ANy:null,Aoa:null,push:function(MI){if(!this.Tm){MI.Ahr=
null;MI.Ms=null;this.Tm=MI;this.AiU=this.Tm;}else{MI.Ahr=this.AiU;MI.Ms=null;this.
AiU.Ms=MI;this.AiU=MI;}},BBv:function(MI){var Qd=this.Tm;while(!!Qd){if(Qd.JJ.Id===
MI.Id)return Qd;Qd=Qd.Ms;}return Qd;},BBd:function(MI){if(MI===this.Tm)this.pop(
);else if(MI===this.AiU){MI=MI.Ahr;if(!!MI)MI.Ms=null;this.AiU=MI;}else{MI.Ahr.Ms=
MI.Ms;MI.Ms.Ahr=MI.Ahr;}},Ahh:function(E){var F;if(this.La===E)return;this.La=E;
if(!!this.La)this.La.AgE(2);(F=this.ANy,F[2].call(F[0],this.La));},Ve:function(G
){var Qd=(C.ATQ.isPrototypeOf(G)?G:null);if(!!Qd){if(!Qd.JJ.PopupState){if(!this.
La)this.Ahh(this.top());}else if(Qd.JJ.PopupState===4){this.pop();this.Ahh(this.
top());}else if(Qd.JJ.PopupState===5){this.pop();this.Ahh(this.top());}else if(Qd.
JJ.PopupState===7){this.pop();this.Ahh(this.top());}else if(Qd.JJ.PopupState===8
){this.pop();this.Ahh(this.top());}else if(Qd.JJ.PopupState===6){if(Qd===this.La
){this.pop();this.Ahh(this.top());}else this.BBd(Qd);}else if(Qd.JJ.PopupState===
3){this.pop();this.Ahh(this.top());}}},pop:function(){var AKQ=null;if(!!this.Tm){
AKQ=this.Tm;if(this.Tm===this.AiU){this.Tm=null;this.AiU=null;}else{this.Tm=this.
Tm.Ms;if(!this.Tm)throw new Error(AW5);this.Tm.Ahr=null;}AKQ.Ahr=null;AKQ.Ms=null;
}return AKQ;},top:function(){return this.Tm;},BAW:function(G){var B;var AtX=(A.Device.
PopupContext.isPrototypeOf(B=this.Aoa.JJ)?B:null);if(!!AtX){var A3W=this.BBv(AtX
);if(!!A3W){A3W.A9E(AtX);if(!AtX.Show)A3W.AgE(6);}else if(AtX.Show){var AKu=A._NewObject(
C.ATQ,0);AKu.A9E(AtX);AKu.ASM=[this,this.Ve];this.push(AKu);AKu.AgE(0);}}},_Init:
function(aArg){A.Core.A$q._Init.call(this.Aoa={I:this},0);this.__proto__=C.AkJ;this.
Aoa.ASc=[this,this.BAW];this.Aoa.BlV(A._GetAutoObject(A.Device.Device).AnP);A.h7++;
},_Done:function(){this.__proto__=null;this.Aoa._Done();A.h7--;},_ReInit:function(
){this.Aoa._ReInit();},_Mark:function(D){var B;if((B=this.Tm)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.La)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANy)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aoa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATQ={S3:null,Ms:null,Ahr:null,JJ:null,ASM:null,PopupIdToString:null,Aii:function(
BwC,Bxa,Bxv,Bxl,Bxn,Bxk,BwV){var Vg=A._NewObject(C.ATP,0);Vg.Bm4(this.JJ.Id);Vg.
A_m(BwC);Vg.ASN=Bxk;Vg.A_o(this.JJ.Ak2);Vg.A9$(this.JJ.AkI);Vg.Bx=A._NewObject(C.
N,0);Vg.KR().Cl=Bxn;Vg.KR().Ck=null;Vg.KR().CB=Bxl;Vg.KR().CV(Bxv);Vg.KR().Cs(null
);Vg.KR().Hu(Bxa);Vg.KR().AFe(BwV);return Vg;},Akq:function(){if(!this.S3){var AiS=
this.PopupIdToString.BI(this.JJ.Id);switch(this.JJ.Id){case 46:this.S3=this.Aii(
AiS,A.jV,A.aaR(A.acf.Ok),null,[this,this.AKy],[this,this.AiM],1);break;case 91:case
92:this.S3=this.Aii(AiS,A.jV,A.jV,null,null,[this,this.AiM],0);break;case 39:this.
S3=this.Aii(AiS,A.aaR(A.acf.AmA),A.aaR(A.acf.Ok),[this,this.A2V],[this,this.A2W]
,[this,this.AiM],3);break;case 13:this.S3=this.Aii(AiS,A.aaR(A.acf.AmA),A.aaR(A.
acf.Bn2),[this,this.A2U],[this,this.AKy],[this,this.AiM],3);break;case 25:this.S3=
this.Aii(AiS,A.aaR(A.acf.AmA),A.aaR(A.acf.Ok),[this,this.A2U],[this,this.AKy],[this
,this.AiM],3);break;case 16:case 24:case 49:case 74:this.S3=this.Aii(AiS,A.aaR(A.
acf.AmA),A.jV,[this,this.A2U],null,[this,this.AiM],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.S3=this.Aii(AiS,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A2V],[this,this.A2W],[this,this.AiM],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.S3=this.Aii(AiS,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKy],[this,this.AiM],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.S3=
this.Aii(AiS,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2V],[this,this.A2W],[this
,this.AiM],3);break;default:A.ab5("%s",(AW6+this.JJ.Id.toFixed())+AW7);}}switch(
this.JJ.Id){case 16:case 49:this.S3.A_C(true);break;case 91:case 92:this.S3.A_C(
false);break;default:;}return this.S3;},AKy:function(G){this.AgE(4);},A2U:function(
G){this.AgE(5);},A2W:function(G){this.AgE(7);},A2V:function(G){this.AgE(8);},AiM:
function(G){this.AgE(3);},A9E:function(E){if(this.JJ===E)return;this.JJ=E;if(!!this.
S3){this.Akq().A_o(this.JJ.Ak2);this.Akq().A9$(this.JJ.AkI);}},AgE:function(Bxq){
var B;this.JJ.Bm5(Bxq);(B=this.ASM)?B[1].call(B[0],this):null;},BAu:function(G){
this.AgE(9);},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ATQ;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.S3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahr)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASM)&&((
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
this,this.A3y],this.Uo,0);this.Uo=E;if(!!E)A.zX([this,this.A3y],E,0);if(!!E)A.pe([
this,this.A3y],this);},A3y:function(G){var F;if(!!this.Uo){if((F=this.Uo,F[1].call(
F[0])))this.By(1);else this.By(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.Afj;this.JV(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Uo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AT7={Jc:null,OU:null,IP:null,Gh:null,AL:null,Abi:null,AgJ:null,TH:null,R6:null
,AcE:null,WX:null,Hd:null,ABr:true,Init:function(aArg){var B;A.zX([this,this.Al3
],[B=A._GetAutoObject(A.Device.Device),B.ASC,B.A0b],0);A.pe([this,this.Al3],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABr)this.N.C6(A.aaL(A.ach.
AQL));else this.N.C6(A.aaL(A.ach.AQM));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OU.L(A.jb.Bm);this.R6.Z(false);this.TH.Z(false);this.IP.Z(true);this.Gh.
Ar(false);(F=this.Gh.Q,F[2].call(F[0],this.Gh.B2));this.Background.L(A.jb.Gf);}else
if(this.Abi.Bw){this.OU.L(A.jb.Text);this.R6.Z(true);this.TH.Z(true);this.IP.Z(false
);this.Gh.Ar(false);(F=this.Gh.Q,F[2].call(F[0],this.Gh.B2));this.Background.L(A.
jb.E1);}else{this.OU.L(A.jb.Text);this.R6.Z(false);this.TH.Z(false);this.IP.Z(true
);this.Gh.Ar(true);this.Background.L(A.jb.CK);}if(this.AgJ.Bw)this.WX.Z(true);else
this.WX.Z(false);},CF:function(G){A._GetAutoObject(A.Device.Device).AhE();},E3:function(
G){A._GetAutoObject(A.Device.Device).An1();A._GetAutoObject(A.Device.Device).Ae8(
false);A._GetAutoObject(A.Device.Device).Un(false);},Al3:function(G){var B;this.
An();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BAa],this);break;case 3:{A.pe([this,this.BeP],this);A.pe([B=this.Abi,B.AxE],this
);A.pe(this.Abi.Mx,this);}break;case 4:A.ab5("%s",AW8);break;default:;}},Ev:function(
G){A._GetAutoObject(C.A$).Fv();},BAX:function(G){this.Bnu(!this.ABr);},Bnu:function(
E){if(this.ABr===E)return;this.ABr=E;if(!E)A._GetAutoObject(A.Device.Device).Ae8(
false);this.An();},BAa:function(G){var B;this.BeP(this);if(this.ABr)A._GetAutoObject(
A.Device.Device).Ae8(true);A._GetAutoObject(A.Device.Device).WA(65280);A._GetAutoObject(
A.Device.Device).Un(true);A.pe([B=this.Abi,B.StartTimer],this);A.pe([B=this.AgJ,
B.StartTimer],this);this.An();},BAb:function(G){A._GetAutoObject(A.Device.Device
).Ae8(false);A._GetAutoObject(A.Device.Device).Un(false);this.An();},BAd:function(
G){this.An();},BeP:function(G){A._GetAutoObject(A.Device.Device).AhE();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jc._Init.call(this.Jc={I:this},0);C.CH._Init.
call(this.OU={I:this},0);A.acg.Ap._Init.call(this.IP={I:this},0);A.acl.Gh._Init.
call(this.Gh={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Abi={I:this},0);A.Core.Timer._Init.call(this.AgJ={I:this},0);A.acg.Ap.
_Init.call(this.TH={I:this},0);A.acg.Ap._Init.call(this.R6={I:this},0);A.acg.Text.
_Init.call(this.AcE={I:this},0);C.WX._Init.call(this.WX={I:this},0);C.CH._Init.call(
this.Hd={I:this},0);this.__proto__=C.AT7;var B;this.Background.L(A.jb.CK);this.N.
Z(true);this.Jc.H(AW9);this.Jc.AkF(0);this.OU.H(AW_);this.OU.R(A.aaR(A.acf.A$v));
this.OU.L(A.jb.Text);this.IP.H(AW$);this.IP.L(A.jb.AV);this.IP.Zr(true);this.Gh.
Fl(1750);this.Gh.Uk(750);this.Gh.AkA(0);this.Gh.Ar(true);this.Gh.B2=3;this.AL.H(
Ayi);this.Abi.PO(-1);this.Abi.Wx(1000);this.AgJ.PO(-1);this.AgJ.Wx(5000);this.TH.
H(AHN);this.R6.H(AHN);this.R6.L(A.jb.E1);this.AcE.H(Ayi);this.AcE.R(A.aaR(A.acf.
A_7));this.AcE.L(A.jb.Text);this.WX.H(Ayi);this.Hd.H(AXa);this.Hd.Ar(false);this.
Hd.R(A.aaR(A.acf.RangeTest));this.Hd.L(A.jb.Text);this.J(this.Jc,0);this.J(this.
OU,0);this.J(this.IP,0);this.J(this.AL,0);this.J(this.TH,0);this.J(this.R6,0);this.
J(this.AcE,0);this.J(this.WX,0);this.J(this.Hd,0);this.N.CB=[this,this.Ev];this.
N.Cl=[this,this.BAX];this.N.CY(A.aaL(A.ach.E2));this.OU.S(A.aaL(A.fl.Af));this.OU.
A2(A.aaL(A.fl.Ak));this.OU.Cu(A.aaL(A.fl.Bh));this.IP.Aw(A.aaL(A.ach.ADH));this.
Gh.Q=[B=this.IP,B.ASp,B.Cv];this.Abi.Mx=[this,this.BAb];this.AgJ.Mx=[this,this.BAd
];this.TH.Aw(A.aaL(A.ach.TH));this.R6.Aw(A.aaL(A.ach.R6));this.AcE.S(A.aaL(A.fl.
Af));this.WX.As([B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0c]);this.Hd.S(A.aaL(
A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jc._Done();this.OU._Done();this.IP._Done();this.Gh._Done();this.AL._Done(
);this.Abi._Done();this.AgJ._Done();this.TH._Done();this.R6._Done();this.AcE._Done(
);this.WX._Done();this.Hd._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jc._ReInit();this.OU._ReInit();this.IP._ReInit();this.Gh.
_ReInit();this.AL._ReInit();this.Abi._ReInit();this.AgJ._ReInit();this.TH._ReInit(
);this.R6._ReInit();this.AcE._ReInit();this.WX._ReInit();this.Hd._ReInit();this.
OU.R(A.aaR(A.acf.A$v));this.AcE.R(A.aaR(A.acf.A_7));this.Hd.R(A.aaR(A.acf.RangeTest
));this.OU.S(A.aaL(A.fl.Af));this.OU.A2(A.aaL(A.fl.Ak));this.OU.Cu(A.aaL(A.fl.Bh
));this.AcE.S(A.aaL(A.fl.Af));this.Hd.S(A.aaL(A.fl.Kl));this.Hd.A2(A.aaL(A.fl.Ii
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jc)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcE)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hd).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbV={
ScreenType:0,Nf:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Ni:
function(G){A._GetAutoObject(C.A$).Cg(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.AbV;},_className:"Application::MenuItemScreen"
};C.T9={Ad7:null,Mj:null,AmB:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.AmB){this.Mj.Cv(1);this.Mj.L(A.jb.H6);}else{this.Mj.Cv(0);
if(this.KE)this.Mj.L(A.jb.Bm);else if(this.Hf)this.Mj.L(A.jb.Text);else this.Mj.
L(A.jb.Bm);}},IW:function(G){var F,CA;if(!!this.Ad7){(CA=this.Ad7,CA[2].call(CA[
0],!(F=this.Ad7,F[1].call(F[0]))));this.AEW((F=this.Ad7,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A21:function(G){this.KE=true;this.DJ(this);},AEW:function(
E){if(this.AmB===E)return;this.AmB=E;this.DJ(this);this.An();},A3r:function(G){var
F;this.AEW((F=this.Ad7,F[1].call(F[0])));},A0v:function(s){this.A3r(s);},DJ:function(
G){var F;if(!this.N||!this.KE)return;if(this.AmB){(F=this.N,F[1].call(F[0])).CV(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CV(A.aaR(A.acf.A71));(F=this.N,F[1].call(F[0])).HQ.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).An();},ASS:function(E){if(A.aaZ(this.Ad7,E))
return;if(!!this.Ad7)A.z$([this,this.A0v],this.Ad7,0);this.Ad7=E;if(!!E)A.zX([this
,this.A0v],E,0);if(!!E)A.pe([this,this.A0v],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mj={I:this},0);this.__proto__=C.T9;this.
V.L(A.jb.H6);this.Mj.H(AHO);this.Mj.Cv(0);this.J(this.Mj,0);this.Mj.Aw(A.aaL(A.ach.
AqN));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mj._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mj._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad7)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANG={H3:null,IJ:null,_Init:function(aArg){C.Cd.
_Init.call(this,aArg);C.SL._Init.call(this.H3={I:this},0);C.AGD._Init.call(this.
IJ={I:this},0);this.__proto__=C.ANG;var B;this.I8(A.aaR(A.acf.ACq));this.H3.H(AhX
);this.H3.Aj(true);this.H3.T(A.aaR(A.acf.Date));this.H3.Bg(true);this.IJ.H(UV);this.
IJ.Aj(true);this.IJ.T(A.aaR(A.acf.Bs));this.J(this.H3,-1);this.J(this.IJ,-1);this.
H3.AeT([B=this.H3,B.FQ]);this.H3.Gn([this,this.D_,this.GN]);this.H3.Akz(A.aaL(A.
ach.Edit));this.H3.Ab9([B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);this.IJ.
AeT([B=this.IJ,B.FQ]);this.IJ.Gn([this,this.D_,this.GN]);this.IJ.Akz(A.aaL(A.ach.
Edit));this.IJ.Ab9([B=A._GetAutoObject(A.Device.Helper),B.UX,B.U0]);},_Done:function(
){this.__proto__=C.Cd;this.H3._Done();this.IJ._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.H3._ReInit();this.IJ._ReInit();this.I8(A.
aaR(A.acf.ACq));this.H3.T(A.aaR(A.acf.Date));this.IJ.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cd._Mark.call(this,D);if((B=this.H3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AU4={Rb:null,FE:null,BZ:null,OH:null,YL:null,Aa3:null,_Init:function(aArg){C.
Cd._Init.call(this,aArg);C.Rb._Init.call(this.Rb={I:this},0);C.AMA._Init.call(this.
FE={I:this},0);C.AUD._Init.call(this.BZ={I:this},0);C.AUF._Init.call(this.OH={I:
this},0);C.Afj._Init.call(this.YL={I:this},0);C.Aa3._Init.call(this.Aa3={I:this}
,0);this.__proto__=C.AU4;var B;this.I8(A.aaR(A.acf.Temperature));this.FE.As(A._GetAutoObject(
A.Device.Device).AnimalType);this.BZ.H(AXb);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.
Arm));this.BZ.Bg(false);this.OH.H(Aag);this.OH.Aj(true);this.OH.T(A.aaR(A.acf.Undertemperature
));this.OH.Bg(true);this.OH.By(3800);this.OH.F0(3000);this.OH.EV(5000);this.OH.A_v(
A.aaR(A.acf.AGQ));this.YL.H(AXc);this.YL.Aj(true);this.YL.Z(true);this.YL.T(A.aaR(
A.acf.A4V));this.J(this.BZ,0);this.J(this.OH,0);this.J(this.YL,0);this.BZ.AeT([B=
this.BZ,B.FQ]);this.BZ.Gn([this,this.D_,this.GN]);this.BZ.Akz(A.aaL(A.ach.Edit));
this.BZ.LX([B=this.BZ,B.AyR]);this.BZ.L0(A.aaL(A.ach.AnS));this.BZ.As([B=this.FE
,B.B7,B.B8]);this.BZ.CI(this.FE);this.BZ.A99([B=this.FE,B.ASL,B.A0j]);this.BZ.A98([
B=this.FE,B.ASK,B.A0i]);this.OH.LX([B=this.BZ,B.AyR]);this.OH.L0(A.aaL(A.ach.AnS
));this.OH.As([B=A._GetAutoObject(A.Device.Device),B.A87,B.Bbb]);this.YL.CI(this.
Aa3);this.YL.AkC([B=A._GetAutoObject(A.Device.Device),B.A8q,B.BaX]);},_Done:function(
){this.__proto__=C.Cd;this.Rb._Done();this.FE._Done();this.BZ._Done();this.OH._Done(
);this.YL._Done();this.Aa3._Done();C.Cd._Done.call(this);},_ReInit:function(){C.
Cd._ReInit.call(this);this.Rb._ReInit();this.FE._ReInit();this.BZ._ReInit();this.
OH._ReInit();this.YL._ReInit();this.Aa3._ReInit();this.I8(A.aaR(A.acf.Temperature
));this.BZ.T(A.aaR(A.acf.Arm));this.OH.T(A.aaR(A.acf.Undertemperature));this.OH.
A_v(A.aaR(A.acf.AGQ));this.YL.T(A.aaR(A.acf.A4V));},_Mark:function(D){var B;C.Cd.
_Mark.call(this,D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANT={PD:null,PE:null,So:null,V1:null,Sq:null,Sp:null,Ga:null,Act:null,Init:function(
aArg){A.zX([this,this.BoM],this.PE.Q,0);},BoM:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw3((F=this.PE.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd.
_Init.call(this,aArg);C.Io._Init.call(this.PD={I:this},0);C.BW._Init.call(this.PE={
I:this},0);C.Afj._Init.call(this.So={I:this},0);C.Io._Init.call(this.V1={I:this}
,0);C.Afj._Init.call(this.Sq={I:this},0);C.Afj._Init.call(this.Sp={I:this},0);C.
Ga._Init.call(this.Ga={I:this},0);C.Act._Init.call(this.Act={I:this},0);this.__proto__=
C.ANT;var B;this.N.H(Xc);this.I8(A.aaR(A.acf.Device));this.PD.H(AhX);this.PD.Aj(
true);this.PD.T(A.aaR(A.acf.A$f));this.PD.Bg(false);this.PD.F0(2);this.PD.EV(60);
this.PD.IM(A.aaR(A.acf.AG5));this.PD.I9(A.aaR(A.acf.AG5));this.PE.H(AXd);this.PE.
Aj(true);this.PE.T(A.aaR(A.acf.A$m));this.PE.Bg(true);this.PE.By(0);this.PE.F0(-
1);this.PE.EV(1);this.So.H(Aag);this.So.Aj(true);this.So.T(A.aaR(A.acf.HB));this.
So.Bg(false);this.So.By(0);this.So.F0(-1);this.So.EV(1);this.V1.H(Alh);this.V1.Aj(
true);this.V1.T(A.aaR(A.acf.A5h));this.V1.Bg(true);this.V1.IM(Aah);this.V1.I9(Aah
);this.Sq.H(AcQ);this.Sq.Aj(true);this.Sq.T(A.aaR(A.acf.AsM));this.Sq.Bg(false);
this.Sq.By(1);this.Sq.F0(-1);this.Sq.EV(1);this.Sp.H(Ayj);this.Sp.Aj(true);this.
Sp.T(A.aaR(A.acf.Asq));this.Sp.Bg(true);this.Sp.By(0);this.Sp.F0(-1);this.Sp.EV(
1);this.Act.As(A._GetAutoObject(A.Device.Device).AxD);this.J(this.PD,0);this.J(this.
PE,0);this.J(this.So,0);this.J(this.V1,0);this.J(this.Sq,0);this.J(this.Sp,0);this.
PD.As([B=A._GetAutoObject(A.Device.Device),B.A8Z,B.Ba9]);this.PE.As([B=this.Act,
B.B7,B.B8]);this.PE.CI(this.Act);this.So.CI(this.Ga);this.So.AkC([B=A._GetAutoObject(
A.Device.Device),B.AEv,B.AIK]);this.V1.As([B=A._GetAutoObject(A.Device.Device),B.
A8n,B.BaU]);this.Sq.CI(this.Ga);this.Sq.AkC([B=A._GetAutoObject(A.Device.Device)
,B.A88,B.Bbc]);this.Sp.CI(this.Ga);this.Sp.AkC([B=A._GetAutoObject(A.Device.Device
),B.ASt,B.AZ7]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.PD._Done(
);this.PE._Done();this.So._Done();this.V1._Done();this.Sq._Done();this.Sp._Done(
);this.Ga._Done();this.Act._Done();C.Cd._Done.call(this);},_ReInit:function(){C.
Cd._ReInit.call(this);this.PD._ReInit();this.PE._ReInit();this.So._ReInit();this.
V1._ReInit();this.Sq._ReInit();this.Sp._ReInit();this.Ga._ReInit();this.Act._ReInit(
);this.I8(A.aaR(A.acf.Device));this.PD.T(A.aaR(A.acf.A$f));this.PD.IM(A.aaR(A.acf.
AG5));this.PD.I9(A.aaR(A.acf.AG5));this.PE.T(A.aaR(A.acf.A$m));this.So.T(A.aaR(A.
acf.HB));this.V1.T(A.aaR(A.acf.A5h));this.Sq.T(A.aaR(A.acf.AsM));this.Sp.T(A.aaR(
A.acf.Asq));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.PD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Act)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUh={V4:null,V3:
null,QJ:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bh7
],this.QJ.Q,0);},Bh7:function(G){var F;A._GetAutoObject(A.Device.Device).Akw((F=
this.QJ.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd._Init.call(this,aArg);C.
Nc._Init.call(this.V4={I:this},0);C.Nc._Init.call(this.V3={I:this},0);C.AUz._Init.
call(this.QJ={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUh;var B;this.I8(A.aaR(A.acf.Asj));this.V4.H(IR);this.
V4.Aj(true);this.V4.T(A.aaR(A.acf.AjF));this.V4.Bg(false);this.V4.Nf(87);this.V3.
H(AXe);this.V3.Aj(true);this.V3.T(A.aaR(A.acf.Aqm));this.V3.Bg(true);this.V3.Nf(
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
Id.toFixed());var BP=(F=this.Q,F[1].call(F[0])).BiD();if(BP<900){var J4=A._GetAutoObject(
A.Device.Converter).ANx(BP);if(!!J4)this.C7.R(((this.CountryToString.Lt(J4)+AcO)+
BP.toFixed())+Oa);else this.C7.R(BP.toFixed());if(J4===10){var AKa=this.A6U((F=this.
Q,F[1].call(F[0])).Id);this.C7.R(this.C7.String+((((AHP+this.App.Bpw(AKa))+AcO)+
A.abl(this.App.Bpv(AKa),2,10))+Oa));}this.C7.Z(true);this.Pn.Z(true);this.OJ.Z(false
);this.PJ.Z(false);}else{this.OJ.R(((A._GetAutoObject(A.Device.Converter).Bhv(BP
)+AcO)+BP.toFixed())+Oa);this.OJ.Z(true);this.PJ.Z(true);this.C7.Z(false);this.Pn.
Z(false);}if(BP===276){this.Gu.R(this.App.BI(this.A6U((F=this.Q,F[1].call(F[0])).
Id)));this.Gu.Z(true);}else this.Gu.Z(false);this.N1.R(this.TransponderProtocolToString.
BI((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GJ.R(A.jV);this.OJ.
R(A.jV);this.Gu.R(A.jV);this.C7.R(A.jV);this.N1.R(A.jV);}},A6U:function(J2){var Qr=
0;var J4=A._GetAutoObject(A.Device.Converter).ZZ(J2);switch(J4){case 10:{var Ge=
A._GetAutoObject(A.Device.Helper).Sd(J2,8,2)|0;Qr=A._GetAutoObject(A.Device.Converter
).ACQ(Ge);}break;default:;}return Qr;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.App={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CH._Init.call(this.Si={I:this},0);C.CH._Init.call(this.GJ={I:this},0);C.CH._Init.
call(this.PJ={I:this},0);C.CH._Init.call(this.OJ={I:this},0);C.CH._Init.call(this.
Pn={I:this},0);C.CH._Init.call(this.C7={I:this},0);C.CH._Init.call(this.Gu={I:this
},0);C.CH._Init.call(this.SE={I:this},0);C.CH._Init.call(this.N1={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WX;
this.H(AcP);this.Background.AZ(0x3F);this.Background.H(AcP);this.Background.L(A.
jb.CS);this.Y.AZ(0x3F);this.Y.H(AcP);this.Y.JP(9);this.Si.H(AXf);this.Si.Aj(true
);this.Si.R(A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon));this.Si.A6(0x11);this.Si.L(A.jb.
Text);this.GJ.H(AHQ);this.GJ.Aj(true);this.GJ.R(AXg);this.GJ.A6(0x14);this.GJ.L(
A.jb.Text);this.PJ.H(AHR);this.PJ.Aj(true);this.PJ.R(A.aaR(A.acf.A_L)+A.aaR(A.acf.
Colon));this.PJ.A6(0x11);this.PJ.L(A.jb.Text);this.OJ.H(AHS);this.OJ.Aj(true);this.
OJ.R(AXh);this.OJ.A6(0x14);this.OJ.L(A.jb.Text);this.Pn.H(AHR);this.Pn.Aj(true);
this.Pn.R(A.aaR(A.acf.C7)+A.aaR(A.acf.Colon));this.Pn.A6(0x11);this.Pn.L(A.jb.Text
);this.C7.H(AHS);this.C7.Aj(true);this.C7.R(AXi);this.C7.A6(0x14);this.C7.L(A.jb.
Text);this.Gu.H(AXj);this.Gu.Aj(true);this.Gu.R(AXk);this.Gu.A6(0x14);this.Gu.L(
A.jb.Text);this.SE.H(AXl);this.SE.Aj(true);this.SE.R(A.aaR(A.acf.N1)+A.aaR(A.acf.
Colon));this.SE.A6(0x11);this.SE.L(A.jb.Text);this.N1.H(AXm);this.N1.Aj(true);this.
N1.R(AXn);this.N1.A6(0x14);this.N1.L(A.jb.Text);this.J(this.Background,0);this.J(
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
"Application::TransponderInfo"};C.QR={D2:null,A_Z:A.jV,Ai:function(Ae){C.Fi.Ai.call(
this,Ae);if(this.Mn.Fk())this.D2.CT(A.jb.AV);else this.D2.CT(this.Background.AQ);
this.D2.Zt(this.G4.AQ);},Zw:function(E){if(this.A_Z===E)return;this.A_Z=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fi._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QR;this.Background.H(AXo);this.
Mn.H(W3);this.OC.H(AHT);this.QX.H(AHT);this.D2.H(AXp);this.D2.Z(false);this.J(this.
D2,0);this.G4.S(A.aaL(A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fi;this.D2._Done();C.Fi._Done.call(this
);},_ReInit:function(){C.Fi._ReInit.call(this);this.D2._ReInit();this.G4.S(A.aaL(
A.fl.Af));this.G4.A2(A.aaL(A.fl.Ak));this.G4.Cu(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fi._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B6:null,AeB:null,Ap:null,Text:null
,DK:A.jV,AmO:0,M0:0,I_:0,A5k:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BCb:function(G){this.Ap.H(this.Text.M);this.
AeB.H(this.Text.M);},Zt:function(E){if(this.AmO===E)return;this.AmO=E;this.AeB.L(
E);this.Text.L(E);},CT:function(E){if(this.M0===E)return;this.M0=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hh:function(E){
if(this.I_===E)return;this.I_=E;this.Text.Hh(E);},Blx:function(E){if(this.A5k===
E)return;this.A5k=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NO._Init.call(this.AeB={I:this},0);A.acg.NO._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AHU);
this.AeB.AZ(0x8);this.AeB.L(A.jb.Text);this.Ap.AZ(0x8);this.Ap.L(A.jb.CS);this.Text.
AZ(0xD);this.Text.H(AHU);this.Text.Hh(5);this.Text.I7(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeB,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeB.Aw(A.aaL(A.ach.APT));this.Ap.Aw(A.aaL(A.ach.APS));this.Text.Q1([this,this.BCb
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeB._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeB._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T5={DZ:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},CF:function(
G){C.AB.CF.call(this,G);this.ALj(this);A._GetAutoObject(A.Device.Device).Am.Bl(null
);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(A.Device.Helper
).AkO();A._GetAutoObject(A.Device.Helper).Asn();},Ie:function(G){},AcT:function(
s){this.Ie(s);},A3g:function(G){A._GetAutoObject(C.A$).Fv();},Fe:function(G){var
B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},ALj:function(G){},BGi:function(s){this.ALj(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DZ={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T5;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Dq(C.AqZ);this.
DZ.AZ(0x3F);this.DZ.H(E$);this.DZ.L(A.jb.CK);this.Y.H(E$);this.Y.JP(9);this.Ay.H(
Iq);this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CB=[this,this.A3g
];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fe];},_Done:function(){this.__proto__=
C.AB;this.DZ._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVC={Wv:function(
G){this.Agp();this.IY(A.aaR(A.acf.AVa),[this,this.ATB],7);this.IY(A.aaR(A.acf.Ask
),[this,this.BlA],6);this.IY(A.aaR(A.acf.AGb),[this,this.ATn],3);this.IY(A.aaR(A.
acf.An3),[this,this.AwR],2);this.IY(A.aaR(A.acf.XP),[this,this.AEO],1);this.IY(A.
aaR(A.acf.Auy),[this,this.AEI],0);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.
BH).MZ(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},DE:function(G){},Abt:function(){return C.AM_;},Abu:function(){return C.APB;
},Q6:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var ABt=A._NewObject(
A.Device.BoolFilterCriterion,0);ABt.Initialize(12,0,true,true);Be.CW(ABt);A._GetAutoObject(
A.Device.Device).Am.Bl(Be);},HO:function(G){C.GU.HO.call(this,G);if(this.Akh()===
false){this.N.Cs(A.aaL(A.ach.Ask));this.N.Ck=[this,this.A5Z];this.N.FJ(A.jV);}this.
N.OO(false);this.N.OP(false);},Agb:function(){A._GetAutoObject(C.A$).Cg(41);},_Init:
function(aArg){C.GU._Init.call(this,aArg);this.__proto__=C.AVC;var B;this.Dq(C.APx
);this.Dz(A.aaR(A.acf.A7N));this.AwM([B=A._GetAutoObject(A.Device.Device),B.A9a,
B.Bbd]);},_ReInit:function(){C.GU._ReInit.call(this);this.Dz(A.aaR(A.acf.A7N));}
,_className:"Application::WatchListScreen"};C.AMf={DE:function(G){var B;var Jy=(
A.Core.BN.isPrototypeOf(G)?G:null);if(((Jy.CO===4)||(Jy.CO===5))===false){C.AxX.
DE.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState!==1)return;
var BcD=A._GetAutoObject(A.Device.Device).KX;var Te;if(Jy.CO===5)Te=5;else Te=4;
var AA_=A._GetAutoObject(A.acj.DV).Bdb(BcD,Te);var GB=(((BcD+((AA_/2)|0))/AA_)|0
)*AA_;if(Jy.CO===4)GB+=AA_;else if(Jy.CO===5)GB-=AA_;if(GB>999900)GB=999900;if(GB<
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
ALx=A._GetAutoObject(A.Device.Helper).W.AhP(1);if(ALx>=100000)ALx=(Math.round(ALx
/1000)|0)*1000;return ALx;},_Init:function(aArg){C.AxX._Init.call(this,aArg);this.
__proto__=C.AMf;},_className:"Application::AnimalActionWeighingScreen"};C.AVn={V8:
null,YN:null,Rb:null,AeM:null,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.
BW._Init.call(this.V8={I:this},0);C.BW._Init.call(this.YN={I:this},0);C.Rb._Init.
call(this.Rb={I:this},0);C.AeM._Init.call(this.AeM={I:this},0);this.__proto__=C.
AVn;var B;this.I8(A.aaR(A.acf.AG6));this.V8.H(AhX);this.V8.Aj(true);this.V8.T(A.
aaR(A.acf.A$C));this.V8.Bg(true);this.V8.By(0);this.YN.H(UV);this.YN.Aj(true);this.
YN.T(A.aaR(A.acf.A$B));this.YN.Bg(false);this.J(this.V8,0);this.J(this.YN,0);this.
V8.As([B=this.Rb,B.B7,B.B8]);this.V8.CI(this.Rb);this.YN.As([B=this.AeM,B.B7,B.B8
]);this.YN.CI(this.AeM);},_Done:function(){this.__proto__=C.Cd;this.V8._Done();this.
YN._Done();this.Rb._Done();this.AeM._Done();C.Cd._Done.call(this);},_ReInit:function(
){C.Cd._ReInit.call(this);this.V8._ReInit();this.YN._ReInit();this.Rb._ReInit();
this.AeM._ReInit();this.I8(A.aaR(A.acf.AG6));this.V8.T(A.aaR(A.acf.A$C));this.YN.
T(A.aaR(A.acf.A$B));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.
V8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeM={MassUnitToString:null
,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).AwN(E);}
,Init:function(aArg){var B;A.zX([this,this.BdP],[B=A._GetAutoObject(A.Device.Device
),B.ASs,B.AZ6],0);A.pe([this,this.BdP],this);},BdP:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeM;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.AxX={H5:null,Aju:null,MassUnit:null,
KX:null,Vv:null,AnO:null,AcG:null,Z0:null,O1:null,YC:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DV).AfZ());A.zX([this,this.AKz],[B=A._GetAutoObject(
A.Device.Device),B.AEy,B.AIN],0);A.zX([this,this.BAY],[B=A._GetAutoObject(A.Device.
Device),B.AEE,B.AIR],0);A.zX([this,this.BA0],[B=this.O1,B.Aru,B.Ju],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxQ();this.AcH();},IW:function(G){this.WM(this);}
,CF:function(G){C.AB.CF.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsD();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);this.H5.Gm();this.H5.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGM();else{var BCq=this.Bda();this.Z0.Z(true);this.AcG.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BCq);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E3:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsD();else A._GetAutoObject(A.Device.Device).AhH(
);},AxQ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.BgA();break;case 3:{this.BgA();this.Z0.Z(false);this.AcG.Z(false
);if(this.A$d()){this.Vv.Z(false);this.KX.H(A.abO(this.KX.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O1.Ar(true);this.O1.Z(true);this.Bb(this.O1);}}break;
case 4:this.KX.R(A.aaR(A.acu.Akk));break;default:A.ab5("%s%e",AHV,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcH:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.CY(A.aaL(A.ach.Aex));this.N.Cs(null);
this.YC.Z(false);this.N.C6(A.aaL(A.ach.Am3));this.N.CV(A.jV);}break;case 3:{if(this.
O1.AY<=1){this.N.CY(null);this.N.Cs(null);this.YC.Z(false);this.N.C6(null);}else{
this.N.CY(A.aaL(A.ach.Am1));this.N.Cs(A.aaL(A.ach.Aey));this.YC.Z(true);this.N.C6(
null);}this.N.CV(A.aaR(A.acf.Ok));}break;case 4:{this.N.C6(A.aaL(A.ach.AvJ));this.
N.Cl=[this,this.Blo];this.N.Cs(null);this.YC.Z(false);this.N.CV(A.jV);}break;default:;
}},AsB:function(G){},Bwj:function(s){this.AsB(s);},WM:function(G){},A0l:function(
s){this.WM(s);},Blo:function(G){this.CF(this);},BAY:function(G){this.An();},AKz:
function(G){this.An();},A$d:function(){var Aup=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Aup>0)&&!A._GetAutoObject(A.Device.Helper).Bpt(Aup
,this.H5.Timestamp);},AkV:function(G){},A0k:function(s){this.AkV(s);},BA0:function(
G){this.An();},BgA:function(){this.KX.R(A._GetAutoObject(A.Device.Converter).Ak9(
A._GetAutoObject(A.Device.Device).KX));},Bda:function(){return A._GetAutoObject(
A.Device.Helper).W.AhP(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Aju={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KX={I:this},0);A.acg.Text._Init.call(this.Vv={I:this
},0);C.AxP._Init.call(this.AnO={I:this},0);A.acg.Aen._Init.call(this.AcG={I:this
},0);A.acg.Aen._Init.call(this.Z0={I:this},0);C.AVH._Init.call(this.O1={I:this},
0);A.acg.Ap._Init.call(this.YC={I:this},0);this.__proto__=C.AxX;this.Background.
L(A.jb.CK);this.N.Z(true);this.Dq(C.IG);this.Aju.AZ(0x3F);this.Aju.H(Ayk);this.Aju.
L(A.jb.CK);this.MassUnit.H(AXq);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
Az7));this.MassUnit.L(A.jb.Text);this.KX.H(AXr);this.KX.A6(0x14);this.KX.R(A.aaR(
A.acu.Akk));this.KX.L(A.jb.Text);this.Vv.H(AXs);this.Vv.R(A.aaR(A.acf.A$N));this.
Vv.L(A.jb.Text);this.Vv.Z(true);this.AnO.H(AXt);this.AcG.H(AHW);this.AcG.L(A.jb.
Ad_);this.AcG.Z(false);this.Z0.H(AXu);this.Z0.L(A.jb.Ad_);this.Z0.Bmd(true);this.
Z0.Z(false);this.O1.AZ(0x3F);this.O1.H(Ayk);this.O1.Ar(false);this.O1.Z(false);this.
YC.H(AXv);this.YC.L(A.jb.Bm);this.J(this.Aju,0);this.J(this.MassUnit,0);this.J(this.
KX,0);this.J(this.Vv,0);this.J(this.AcG,0);this.J(this.Z0,0);this.J(this.O1,0);this.
J(this.YC,0);this.N.CB=[this,this.Bwj];this.N.Ck=[this,this.A0k];this.N.Cl=[this
,this.A0l];this.MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aeq));this.Vv.S(
A.aaL(A.fl.EK));this.AcG.Zv(this.AnO);this.Z0.Zv(this.AnO);this.H5=A._NewObject(
A.Device.Rating,0);this.O1.LY(A._GetAutoObject(A.Device.Helper).W);this.O1.AkD(this.
H5);this.YC.Aw(A.aaL(A.ach.AQI));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Aju._Done();this.MassUnit._Done();this.KX._Done();this.Vv._Done();this.
AnO._Done();this.AcG._Done();this.Z0._Done();this.O1._Done();this.YC._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Aju._ReInit();
this.MassUnit._ReInit();this.KX._ReInit();this.Vv._ReInit();this.AnO._ReInit();this.
AcG._ReInit();this.Z0._ReInit();this.O1._ReInit();this.YC._ReInit();this.MassUnit.
R(A.aaR(A.acf.Az7));this.KX.R(A.aaR(A.acu.Akk));this.Vv.R(A.aaR(A.acf.A$N));this.
MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aeq));this.Vv.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H5)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YC)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVL={FE:null
,OK:null,M$:null,C9:null,LV:null,T2:null,Init:function(aArg){var B;A.zX([this,this.
GE],[B=this.FE,B.B7,B.B8],0);A.pe([this,this.GE],this);},CF:function(G){C.Cd.CF.
call(this,G);A.pe([this,this.GE],this);},Bkb:function(G){var F;this.LV.BT.L(this.
LV.V.AQ);if(!!this.LV.Q)this.LV.BT.R((A._GetAutoObject(A.Device.Converter).S2((F=
this.LV.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DV).Aay());},GE:function(
G){var AJs=true;if(this.FE.Q===1)AJs=false;this.C9.Aj(AJs);this.C9.Ar(AJs);this.
C9.Z(AJs);A._GetAutoObject(A.Device.Helper).ANr(this.Y);},_Init:function(aArg){C.
Cd._Init.call(this,aArg);C.AMB._Init.call(this.FE={I:this},0);C.AHf._Init.call(this.
OK={I:this},0);C.AUE._Init.call(this.M$={I:this},0);C.AkT._Init.call(this.C9={I:
this},0);C.Io._Init.call(this.LV={I:this},0);C.BW._Init.call(this.T2={I:this},0);
this.__proto__=C.AVL;var B;this.I8(A.aaR(A.acf.Settings));this.Hd.R(A.aaR(A.acf.
AsP));this.FE.As(A._GetAutoObject(A.Device.Device).AnimalType);this.OK.As(A._GetAutoObject(
A.Device.Device).OK);this.M$.H(AXw);this.M$.Aj(true);this.C9.H(As5);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KI));this.C9.Bg(true);this.C9.F0(1000);this.C9.EV(99000);
this.LV.H(As6);this.LV.Aj(true);this.LV.T(A.aaR(A.acf.A44));this.LV.F0(50);this.
LV.EV(2000);this.LV.AS5(A._GetAutoObject(A.acj.DV).AzP());this.T2.H(AcQ);this.T2.
Aj(true);this.T2.T(A.aaR(A.acf.A7v));this.T2.F0(-1);this.T2.EV(1);this.JV(this.Y
,-1);this.JV(this.Ay,-1);this.J(this.M$,0);this.J(this.C9,0);this.J(this.LV,0);this.
J(this.T2,0);this.M$.AeT([B=this.M$,B.FQ]);this.M$.Gn([this,this.D_,this.GN]);this.
M$.Akz(A.aaL(A.ach.Edit));this.M$.LX([B=this.M$,B.AyR]);this.M$.L0(A.aaL(A.ach.AnS
));this.M$.As([B=this.FE,B.B7,B.B8]);this.M$.CI(this.FE);this.M$.A99([B=this.FE,
B.ASL,B.A0j]);this.M$.A98([B=this.FE,B.ASK,B.A0i]);this.C9.Gn([this,this.D_,this.
GN]);this.C9.LX([B=this.M$,B.AyR]);this.C9.L0(A.aaL(A.ach.AnS));this.C9.As([B=this.
FE,B.A8l,B.ASR]);this.LV.Gn([this,this.D_,this.GN]);this.LV.LX([B=this.M$,B.AyR]
);this.LV.L0(A.aaL(A.ach.AnS));this.LV.As([B=this.FE,B.A8k,B.ASP]);this.LV.A_k([
this,this.Bkb]);this.T2.Gn([this,this.D_,this.GN]);this.T2.As([B=this.OK,B.B7,B.
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
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUE={YZ:null,Init:
function(aArg){var B;A.zX([this,this.AfC],[B=A._GetAutoObject(A.Device.Device),B.
ASs,B.AZ6],0);A.pe([this,this.AfC],this);},A3K:function(G){A._GetAutoObject(A.Device.
Device).A9(37,true,A.jV,0,[this,this.Bbs]);},A1A:function(G){var F;if(this.A8===
1){var BR=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DV).AzP();if(this.D7<this.
AlQ)this.D7=this.AlQ;if(this.DX!==BR){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.
D7));A.abo(this.JT,0);}}if(this.A8===2){var BR=this.DX;this.DX=this.DX-A._GetAutoObject(
A.acj.DV).AzP();if(this.DX<this.D7)this.DX=this.D7;if(this.DX!==BR){if(!!this.JS
)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.DJ(this);this.An();
},A1$:function(G){var F;if(this.A8===1){var BR=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DV).AzP();if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BR){if(!!this.JT
)(F=this.JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A8===2){var BR=this.
DX;this.DX=this.DX+A._GetAutoObject(A.acj.DV).AzP();if(this.DX>this.AlL)this.DX=
this.AlL;if(this.DX!==BR){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.DX));A.abo(
this.JS,0);}}this.DJ(this);this.An();},GE:function(G){this.PG.R(AHX+A._GetAutoObject(
A.Device.Converter).S2(this.D7,2,true));this.PF.R(AHX+A._GetAutoObject(A.Device.
Converter).S2(this.DX,2,true));this.Ss.R(A._GetAutoObject(A.acj.DV).Aay());this.
YZ.R(this.Ss.String);},A3j:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(A.Device.Device).Asp(this
);},A14:function(Ato){if(Ato===1)return this.PG;else if(Ato===2)return this.PF;else
return null;},_Init:function(aArg){C.Acq._Init.call(this,aArg);A.acg.Text._Init.
call(this.YZ={I:this},0);this.__proto__=C.AUE;this.T(A.aaR(A.acf.ACk));this.AlL=
2000;this.AlQ=20;this.Background.H(J0);this.V.H(BF);this.V.R(A.aaR(A.acf.ACk)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkM.H(AXx);this.AkN.H(AXy);this.Q3.H(AXz);
this.QA.H(AXA);this.PF.H(AXB);this.PG.H(AXC);this.Ss.H(AXD);this.YZ.H(AXE);this.
YZ.I7(false);this.YZ.A6(0x12);this.YZ.L(0xFF000000);this.JV(this.H2,-8);this.J(this.
YZ,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YZ.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acq;this.YZ._Done();C.Acq.
_Done.call(this);},_ReInit:function(){C.Acq._ReInit.call(this);this.YZ._ReInit();
this.T(A.aaR(A.acf.ACk));this.V.R(A.aaR(A.acf.ACk)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YZ.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acq._Mark.call(this,D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABy={M:P5,A67:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A67();},_Init:function(
aArg){A.Graphics.Hv._Init.call(this,aArg);this.__proto__=C.ABy;},_className:"Application::AbstractPath"
};C.Aqf={DO:null,DZ:null,Rg:null,AdQ:null,PW:null,AdP:null,Aux:1,A4A:0,Bcl:false
,AzL:true,CP:function(){this.Bgw(this);},Init:function(aArg){var B;this.Bb(this.
AdQ);A.zX([this,this.Bgw],[B=this.AdQ,B.A8r,B.BaY],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdP.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BhP(this.Aux+this.A4A)));if(this.Aux===1)this.PW.R(A.aaR(A.acf.ANf));else this.
PW.R(A.aaR(A.acf.Bho));},CF:function(G){if(this.AzL)this.AzL=false;else if(this.
DO.Bcu()===false)A.pe([this,this.A2S],this);else if(this.DO.AzZ())this.DO.Ac8();
A.zV([this,this.Af6],A._GetAutoObject(A.Device.Device).Am,0);},E3:function(G){A.
z9([this,this.Af6],A._GetAutoObject(A.Device.Device).Am,0);},A2S:function(G){this.
Bcl=true;A._GetAutoObject(C.A$).Fv();},Bgw:function(G){var B;var BcW=(C.Wh.isPrototypeOf(
B=this.AdQ.AV)?B:null);if(!!BcW){var Ay6=A._NewObject(A.Device.ActionToString,0);
this.Rg.R(Ay6.Lt(BcW.Action));}},Ie:function(G){var Cx=(C.Wh.isPrototypeOf(G)?G:
null);if(!Cx)return;this.DO.Qh(Cx.Action);this.Blr(this.Aux+1);},BAt:function(G){
if(A._GetAutoObject(C.Ph).NU(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Blr:function(E){
if(this.Aux===E)return;this.Aux=E;this.An();},Af6:function(G){if((this.Bcl===false
)&&(this.DO.Bcu()===false))A.pe([this,this.A2S],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AL._Init.call(this.DZ={I:this},0);C.CH._Init.call(this.
Rg={I:this},0);C.ARw._Init.call(this.AdQ={I:this},0);C.CH._Init.call(this.PW={I:
this},0);A.acg.Text._Init.call(this.AdP={I:this},0);this.__proto__=C.Aqf;this.Background.
L(A.jb.CS);this.N.H(Xc);this.N.Z(true);this.Dq(C.IG);this.DZ.AZ(0x3F);this.DZ.H(
E$);this.DZ.L(A.jb.CK);this.Rg.H(AHY);this.Rg.L(A.jb.Text);this.AdQ.H(AXF);this.
PW.H(Ayl);this.PW.R(A.aaR(A.acf.ANf));this.PW.L(A.jb.Text);this.AdP.H(AHZ);this.
AdP.R(AXG);this.AdP.L(A.jb.Text);this.J(this.DZ,0);this.J(this.Rg,0);this.J(this.
AdQ,0);this.J(this.PW,0);this.J(this.AdP,0);this.N.CB=[this,this.A2S];this.N.Ck=[
this,this.BAt];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbD));this.Rg.S(
A.aaL(A.fl.EK));this.Rg.A2(A.aaL(A.fl.Af));this.Rg.Cu(A.aaL(A.fl.Ak));this.AdQ.A3h=[
this,this.Ie];this.PW.S(A.aaL(A.fl.EK));this.PW.A2(A.aaL(A.fl.Af));this.PW.Cu(A.
aaL(A.fl.Ak));this.AdP.S(A.aaL(A.fl.Hr));this.DO=A._GetAutoObject(C.DO);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.Rg._Done();this.
AdQ._Done();this.PW._Done();this.AdP._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DZ._ReInit();this.Rg._ReInit();this.AdQ._ReInit();
this.PW._ReInit();this.AdP._ReInit();this.PW.R(A.aaR(A.acf.ANf));this.Rg.S(A.aaL(
A.fl.EK));this.Rg.A2(A.aaL(A.fl.Af));this.Rg.Cu(A.aaL(A.fl.Ak));this.PW.S(A.aaL(
A.fl.EK));this.PW.A2(A.aaL(A.fl.Af));this.PW.Cu(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DO)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdP)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARw={H_:null,A3h:null,Cr:null,Y:null,Ay:
null,A3Y:0,Init:function(aArg){A.zV([this,this.ABo],this.H_,0);A.zV([this,this.Bgt
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Auu],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABo],this);},Bb:function(E){var A2N=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A2N)A.abo([this,this.A8r,this.BaY],0);},DE:
function(G){var B;var Fc=0;var X=this.AV;switch(this.Cr.CO){case 6:Fc=2;break;case
7:Fc=7;break;case 4:Fc=4;break;case 5:Fc=5;break;default:;}X=this.QD(X,Fc,0x415);
if((Fc===5)&&!X){var ALa=this.AV;while(!X){ALa=this.QD(ALa,2,0x415);if(!!ALa)X=this.
QD(ALa,Fc,0x415);else break;}}if(!!X)this.Bb(X);var GS=(C.Wh.isPrototypeOf(B=this.
AV)?B:null);if(!!GS)this.A3Y=(C.Wh.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A3Y=0;A.pe([this,this.MO],this);},A1s:function(ED){var EQ=A._GetAutoObject(C.DO).
BcC(ED,this.A3h);this.J(EQ,0);},Ao3:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdL=X;X=X.Ah;if(((AdL.U&0x400)===0x400))this.HN(AdL);
}},ABo:function(G){this.Ao3();var O;var CD=A._GetAutoObject(C.Ph).NP();for(O=0;O<
CD;O=O+1){var Aap=A._GetAutoObject(C.Ph).OD(O);this.A1s(Aap);}A.pe([this,this.Bgt
],this);A.pe([this,this.BpR],this);A.pe([this,this.Auu],this);},BpR:function(G){
var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400
)){var Aa=(C.Wh.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},Auu:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATw(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATw(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATw(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
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
C.ARw;this.H(AXH);this.Cr.Filter=147;this.Y.AZ(0xB);this.Y.H(AXI);this.Y.JP(9);this.
Ay.AZ(0xA);this.Ay.H(AXJ);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BO=[this,this.
DE];this.Cr.D1=[this,this.DE];this.Y.El=[this,this.Fe];this.H_=A._GetAutoObject(
C.Ph);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.H_)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3h)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fm={Ej:null,AL:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fm;this.N.Ar(false);this.Ej.H(BF);this.Ej.Ar(false
);this.AL.H(E$);this.AL.L(A.jb.Ad_);this.Text.H(BF);this.Text.R(AXK);this.Text.L(
0xFF000000);this.Ap.H(P5);this.Ap.L(A.jb.Text);this.J(this.Ej,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cs(A.aaL(A.ach.AbD));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Aw(A.aaL(A.ach.AC_));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ej._Done();this.AL._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ej._ReInit();this.AL._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.XM={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},IW:function(G){},Ai:function(Ae){C.BW.
Ai.call(this,Ae);var FN=A.jb.Ad_;var GQ=A.jb.CS;if(this.Hf){FN=A.jb.Text;GQ=A.jb.
Bm;}if(!this.LI){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else if(this.Qn){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);}this.Ht.L(A.
jb.CS);this.H2.L(A.jb.CS);},Hg:function(G){var B;var Gc=this.Dy.G0;var Cz=(C.CH.
isPrototypeOf(B=this.Dy.Ch)?B:null);if(!Cz)return;Cz.S(A.aaL(A.fl.Ak));Cz.A2(A.aaL(
A.fl.Bh));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.FX(Gc));else Cz.R(Xa);Cz.H(A.
abK(Cz.M,[this.Dy.V_,(B=this.Dy.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.XM;this.Dy.AFf(170);this.Dy.NZ(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Aji={C8:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hh(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FN=A.jb.Ad_;var GQ=A.jb.CS;if(this.Hf){FN=A.jb.Text;
GQ=A.jb.Bm;}if(!this.LI){this.Background.L(A.jb.CS);this.V.L(A.jb.CK);}else if(this.
Qn){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aji;this.C8.H(AXL);this.C8.Cv(1);this.J(this.C8,0);this.C8.Aw(A.aaL(A.ach.Ajr)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C8._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALY={Y:null,RH:null,Tq:null
,Tr:null,Ts:null,AdO:null,XL:null,Vn:null,Vo:null,AaU:null,Ay:null,Init:function(
aArg){this.Bb(this.RH);},DE:function(G){C.Fm.DE.call(this,G);this.MO(this);},IW:
function(G){this.BfM(this);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N
,0);this.Bx.CB=[this,this.BfM];this.Bx.Ck=null;this.Bx.Cl=null;this.Bx.CV(A.jV);
this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},AA3:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XL.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XL.Q))A._GetAutoObject(C.AutoActions).J(this.XL.Q);if(!!this.Vn.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vn.Q))A._GetAutoObject(C.AutoActions
).J(this.Vn.Q);if(!!this.Vo.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vo.
Q))A._GetAutoObject(C.AutoActions).J(this.Vo.Q);if(!!this.AaU.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaU.Q))A._GetAutoObject(C.AutoActions).J(this.AaU.Q
);A._GetAutoObject(C.AutoActions).Cq();},BfM:function(G){if(this.BzD()===true){this.
AA3();this.XA(this);}else A._GetAutoObject(A.Device.Device).A9(27,true,A.jV,0,null
);},BzD:function(){return(!!this.XL.C4(this.XL.Q)||!!this.Vn.C4(this.Vn.Q))||!!this.
Vo.C4(this.Vo.Q);},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.
Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MO:function(G){var B;this.
Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true
,null,null);},BAF:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XL.Atv(this);this.Vn.Atv(this);this.Vo.Atv(this);this.AaU.Atv(this);}
,_Init:function(aArg){C.Fm._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.XM._Init.call(this.RH={I:this},0);C.XM._Init.call(this.Tq={I:this},0);C.XM.
_Init.call(this.Tr={I:this},0);C.XM._Init.call(this.Ts={I:this},0);C.Au3._Init.call(
this.AdO={I:this},0);C.AutoAction._Init.call(this.XL={I:this},0);C.AutoAction._Init.
call(this.Vn={I:this},0);C.AutoAction._Init.call(this.Vo={I:this},0);C.AutoAction.
_Init.call(this.AaU={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALY;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.Tt));this.Y.H(Lu);this.Y.JP(1);this.
RH.H(AhX);this.RH.Ar(true);this.RH.Aj(true);this.RH.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajh),P6,AH0));this.Tq.H(UV);this.Tq.Ar(true);this.Tq.Aj(true
);this.Tq.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajh),P6,AH1));this.
Tr.H(Aag);this.Tr.Ar(true);this.Tr.Aj(true);this.Tr.T(A._GetAutoObject(A.Device.
Helper).Nk(A.aaR(A.acf.Ajh),P6,AH2));this.Ts.H(Alh);this.Ts.Ar(true);this.Ts.Aj(
true);this.Ts.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajh),P6,AH3));this.
AdO.H(Aym);this.AdO.Aj(true);this.AdO.T(A.aaR(A.acf.A_W));this.Vn.Index=1;this.Vo.
Index=2;this.AaU.Index=3;this.Ay.H(Iq);this.J(this.Y,0);this.J(this.RH,0);this.J(
this.Tq,0);this.J(this.Tr,0);this.J(this.Ts,0);this.J(this.AdO,0);this.J(this.Ay
,0);this.Y.El=[this,this.Fe];this.RH.Wy(A.aaL(A.fl.Hr));this.RH.Wz(A.aaL(A.fl.Hr
));this.RH.As([B=this.XL,B.B7,B.B8]);this.RH.CI(this.XL);this.Tq.Wy(A.aaL(A.fl.Hr
));this.Tq.Wz(A.aaL(A.fl.Hr));this.Tq.As([B=this.Vn,B.B7,B.B8]);this.Tq.CI(this.
Vn);this.Tr.Wy(A.aaL(A.fl.Hr));this.Tr.Wz(A.aaL(A.fl.Hr));this.Tr.As([B=this.Vo,
B.B7,B.B8]);this.Tr.CI(this.Vo);this.Ts.Wy(A.aaL(A.fl.Hr));this.Ts.Wz(A.aaL(A.fl.
Hr));this.Ts.As([B=this.AaU,B.B7,B.B8]);this.Ts.CI(this.AaU);this.AdO.AR=[this,this.
BAF];this.Init(aArg);},_Done:function(){this.__proto__=C.Fm;this.Y._Done();this.
RH._Done();this.Tq._Done();this.Tr._Done();this.Ts._Done();this.AdO._Done();this.
XL._Done();this.Vn._Done();this.Vo._Done();this.AaU._Done();this.Ay._Done();C.Fm.
_Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.Y._ReInit();this.
RH._ReInit();this.Tq._ReInit();this.Tr._ReInit();this.Ts._ReInit();this.AdO._ReInit(
);this.XL._ReInit();this.Vn._ReInit();this.Vo._ReInit();this.AaU._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.Tt));this.RH.T(A._GetAutoObject(A.Device.Helper
).Nk(A.aaR(A.acf.Ajh),P6,AH0));this.Tq.T(A._GetAutoObject(A.Device.Helper).Nk(A.
aaR(A.acf.Ajh),P6,AH1));this.Tr.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.
Ajh),P6,AH2));this.Ts.T(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Ajh),P6
,AH3));this.AdO.T(A.aaR(A.acf.A_W));},_Mark:function(D){var B;C.Fm._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ts)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={Cf:
A.abi(16,0,null),Do:function(){return 16;},C4:function(aIndex){if(aIndex>=16)return-
1;return this.Cf.Get(aIndex);},DU:function(A7){var O=0;while(O<16){if(this.Cf.Get(
O)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(O<16){
if(this.Cf.Get(O)>max)max=this.Cf.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.Cf=[]).__proto__=C.Cm.Cf;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={H_:null,Ac8:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.Atv],this.Ac8,0);A.pe([this,this.
Atv],this);},Do:function(){return this.H_.NP();},C4:function(aIndex){if(aIndex>=
this.Do())return-1;return this.H_.OD(aIndex);},FX:function(aIndex){return this.ActionToString.
BI(this.C4(aIndex));},DU:function(A7){var O=0;while(O<this.Do()){if(this.H_.OD(O
)===A7)return O;O=O+1;}return-1;},HH:function(){var O=0;var max=-1;while(O<this.
Do()){if(this.H_.OD(O)>max)max=this.H_.OD(O);O=O+1;}return max;},Atv:function(G){
this.Q=this.Ac8.OD(this.Index);A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.H_=A._GetAutoObject(C.AuN);this.Ac8=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.H_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AL3={Ats:0,Init:function(aArg
){var B;A.zX([this,this.Bef],[B=A._GetAutoObject(A.Device.Device),B.A79,B.BaJ],0
);A.zX([this,this.Bec],[B=A._GetAutoObject(A.Device.Device),B.ASe,B.AZ0],0);A.pe([
this,this.Bef],this);A.pe([this,this.Bec],this);},Clear:function(){C.Vs.Clear.call(
this);this.Ats=0;},Cq:function(){A._GetAutoObject(A.Device.Device).ArA(this.Ats);
A._GetAutoObject(A.Device.Device).ArB(this.toString());},Bef:function(G){this.Ats=
A._GetAutoObject(A.Device.Device).Ph;A.we(this,0);},Bec:function(G){this.EM(A._GetAutoObject(
A.Device.Device).Auz);A.we(this,0);},NU:function(ED){if((this.Ats&(((B=ED)<0)?B+
0x100000000:B))===(((B=ED)<0)?B+0x100000000:B))return true;return false;},AUu:function(
ED){this.Ats=this.Ats|(((B=ED)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vs._Init.
call(this,aArg);this.__proto__=C.AL3;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Ph={_Init:function(){C.AL3._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AL4={Vq:null,Ay:null,Y:null,JM:null,CP:function(
){this.AiH(this);},Init:function(aArg){A.zV([this,this.AiH],this.Vq,0);A.pe([this
,this.AiH],this);},DE:function(G){C.Fm.DE.call(this,G);this.MO(this);},KR:function(
){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.Ev];this.Bx.Ck=[
this,this.A20];this.Bx.Cl=[this,this.A3t];this.Bx.C6(A.aaL(A.ach.Aq$));this.Bx.Cs(
A.aaL(A.ach.Aq4));this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},Ev:function(G){if(
this.Byt()>0){this.AA3();this.XA(this);}else A._GetAutoObject(A.Device.Device).A9(
28,true,A.jV,0,null);},AiH:function(G){this.Ao3();var O;for(O=0;O<this.Vq.NP();O=
O+1){var Aap=A._GetAutoObject(C.Ph).OD(O);this.A07(Aap);}this.J(this.JM,0);A.aaS([
this,this.MO],this);},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]
);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MO:function(G){var
B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.
AV,true,null,null);},A07:function(G6){var Ay6=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sa,0);Aa.T(Ay6.BI(G6));Aa.Aj(true);Aa.G0=G6;Aa.A9W(this.
Vq.NU(G6));this.J(Aa,0);this.ZE(Aa);},Ao3:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdL=X;X=X.Ah;if(((AdL.U&0x400)===0x400))this.HN(
AdL);}},AA3:function(){var B;this.Vq.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JM)){var Aa=(C.Sa.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vq.J(Aa.G0);if(Aa.ASq())this.Vq.AUu(Aa.G0);}else A.ab5(
"%s",Ayn);}X=X.Ah;}this.Vq.Cq();},Byt:function(){var B;var A3Z=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JM)){var
Aa=(C.Sa.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASq())A3Z=A3Z+1;}else A.ab5("%s"
,Ayn);}X=X.Ah;}return A3Z;},A20:function(G){var B;var Aa=(C.Sa.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAk=(C.Sa.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAk){this.
Ahw(AAk,Aa);A.pe([this,this.MO],this);}}},A3t:function(G){var B;var Aa=(C.Sa.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAQ=(C.Sa.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAQ
){this.Ahw(Aa,AAQ);A.pe([this,this.MO],this);}}},AqI:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiH],this);},_Init:function(
aArg){C.Fm._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Au3._Init.call(this.JM={I:this},0);this.__proto__=C.AL4;
this.H(Rk);this.Text.R(A.aaR(A.acf.AEa));this.Ay.H(Iq);this.Y.H(Lu);this.Y.JP(1);
this.JM.H(AH4);this.JM.Aj(true);this.JM.T(A.aaR(A.acf.AqI));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JM,0);this.Y.El=[this,this.Fe];this.JM.AR=[this,this.AqI
];this.Vq=A._GetAutoObject(C.Ph);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fm;this.Ay._Done();this.Y._Done();this.JM._Done();C.Fm._Done.call(this);},_ReInit:
function(){C.Fm._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JM._ReInit(
);this.Text.R(A.aaR(A.acf.AEa));this.JM.T(A.aaR(A.acf.AqI));this.CP();},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.Vq)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sa={G0:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hh(10);},Bk:function(aSize){C.T9.Bk.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.T9.Ai.call(this,Ae);var G$=((Ae&0x10
)===0x10);var Fq=((Ae&0x20)===0x20);var GA=this.Bo.Bw;var FN=A.jb.Ad_;var GQ=A.jb.
Bm;if(this.Hf){FN=A.jb.Bm;GQ=A.jb.Text;}if(!G$){this.Background.L(FN);this.V.L(A.
jb.CK);}else if(GA){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);
}this.LI=G$;this.KE=Fq;this.Qn=GA;},IW:function(G){this.A3r(this);},A3r:function(
G){this.AEW(!this.AmB);},A9W:function(E){this.AEW(E);},ASq:function(){return this.
AmB;},_Init:function(aArg){C.T9._Init.call(this,aArg);this.__proto__=C.Sa;this.Mj.
H(AXM);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vs={CD:0,
H_:A.abi(17,0,null),OD:function(Hw){return this.H_.Get(Hw);},NP:function(){return this.
CD;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.H_.Set(O,0);this.CD=0;},J:function(
ED){if(this.CD>=17)A.ab5("%s",AH5);else{this.H_.Set(this.CD,ED);this.CD=this.CD+
1;}},Cq:function(){},EM:function(AcV){var AJe=AcV.indexOf(String.fromCharCode(0x2C
),0);var A1t=A.jV;var O=0;this.CD=0;while(O<17)if(AcV===A.jV){this.H_.Set(O,0);O++;
}else{if(AJe===-1){A1t=AcV;AcV=A.jV;}else{A1t=A.abV(AcV,AJe);AcV=A.ab1(AcV,0,AJe+
1);}var Aap=A.abZ(A1t,0,10)|0;if(this.ADO(Aap)){this.H_.Set(this.CD,Aap);this.CD=
this.CD+1;O++;}AJe=AcV.indexOf(String.fromCharCode(0x2C),0);}if(AcV!==A.jV)A.ab5(
"%s",AXN);},toString:function(){var A2E=(((B=this.H_.Get(0))<0)?B+0x100000000:B).
toFixed();var O;for(O=1;O<this.CD;O=O+1)A2E=(A2E+AH6)+(((B=this.H_.Get(O))<0)?B+
0x100000000:B).toFixed();return A2E;},Axs:function(Hw,ED){if(Hw>=this.CD){A.ab5(
"%s",((((AXO+Hw.toFixed())+AXP)+this.CD.toFixed())+AXQ)+AXR);return;}this.H_.Set(
Hw,ED);},Contains:function(ED){var O;for(O=0;O<this.CD;O=O+1)if(this.H_.Get(O)===
ED)return true;return false;},ADO:function(ED){return true;},DU:function(ED){var
O;for(O=0;O<this.CD;O=O+1)if(this.H_.Get(O)===ED)return O;return-1;},_Init:function(
aArg){(this.H_=[]).__proto__=C.Vs.H_;this.__proto__=C.Vs;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ActionsList"};C.AML={Init:function(aArg){var B;A.zX([this,this.Bep
],[B=A._GetAutoObject(A.Device.Device),B.A8j,B.BaS],0);A.pe([this,this.Bep],this
);},Cq:function(){A._GetAutoObject(A.Device.Device).Aku(this.toString());},ADO:function(
ED){switch(ED){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Bep:function(G){this.EM(A._GetAutoObject(A.Device.Device).
AutoActions);A.we(this,0);},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.
__proto__=C.AML;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AML._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Wh={Vp:null,Kt:null,A66:A.jV,Action:0,A4B:
false,A_I:false,A$o:false,Bk:function(aSize){C.Fi.Bk.call(this,aSize);this.QX.H(
this.Mn.M);this.OC.H(this.QX.M);},Ai:function(Ae){C.Fi.Ai.call(this,Ae);if(!this.
LI){this.Kt.TU.L(A.jb.Am4);this.Kt.QF.Z(true);this.Kt.QF.L(A.jb.AQU);}else if(this.
Qn){this.Kt.TU.L(A.jb.Bm);this.Kt.QF.Z(false);}else if(this.KE){this.Kt.TU.L(A.jb.
Bm);this.Kt.QF.Z(false);}else{this.Kt.TU.L(A.jb.Text);this.Kt.QF.Z(true);this.Kt.
QF.L(A.jb.CS);}},Blq:function(E){if(this.Action===E)return;this.Action=E;},Bmy:function(
E){if(this.A66===E)return;this.A66=E;this.Vp.Text.R(E);},ATw:function(E){if(this.
A$o===E)return;this.A$o=E;this.Kt.Bnj(!this.Kt.AUT);},AFw:function(E){if(this.A_I===
E)return;this.A_I=E;this.Kt.Z(!this.Kt.Fk());},A9n:function(E){if(this.A4B===E)return;
this.A4B=E;this.Vp.Z(E);},_Init:function(aArg){C.Fi._Init.call(this,aArg);C.Vp._Init.
call(this.Vp={I:this},0);C.Kt._Init.call(this.Kt={I:this},0);this.__proto__=C.Wh;
this.H(AXS);this.Background.H(AXT);this.G4.Ar(false);this.G4.Z(false);this.Vp.H(
AXU);this.Vp.Z(false);this.Kt.H(AXV);this.Kt.Z(false);this.J(this.Vp,0);this.J(this.
Kt,0);this.Mn.Aw(A.aaL(A.ach.ANg));},_Done:function(){this.__proto__=C.Fi;this.Vp.
_Done();this.Kt._Done();C.Fi._Done.call(this);},_ReInit:function(){C.Fi._ReInit.
call(this);this.Vp._ReInit();this.Kt._ReInit();},_Mark:function(D){var B;C.Fi._Mark.
call(this,D);if((B=this.Vp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kt)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.Vp={AL:
null,Text:null,BU:null,Init:function(aArg){this.Text.H(this.M);this.BU.H(this.M);
this.AL.H(this.M);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL.
_Init.call(this.AL={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);this.__proto__=C.Vp;this.AL.H(AXW);this.AL.L(A.
jb.Bi_);this.H(AXX);this.Text.H(AXY);this.Text.L(A.jb.Text);this.BU.H(AXZ);this.
BU.Nh(1);this.BU.L(A.jb.Text);this.J(this.AL,0);this.J(this.Text,0);this.J(this.
BU,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AL._Done();this.Text._Done();this.BU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AL._ReInit();this.Text._ReInit(
);this.BU._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Kt={QF:null,TU:null,AUT:false,Bnj:function(E){if(this.
AUT===E)return;this.AUT=E;if(E){this.TU.Aw(A.aaL(A.ach.ACs));this.QF.Aw(A.aaL(A.
ach.ACs));}else{this.TU.Aw(A.aaL(A.ach.AqC));this.QF.Aw(A.aaL(A.ach.AqC));}},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.QF={I:this
},0);A.acg.Ap._Init.call(this.TU={I:this},0);this.__proto__=C.Kt;this.H(Ayo);this.
QF.H(Ayo);this.QF.Cv(1);this.TU.H(Ayo);this.TU.Cv(0);this.J(this.QF,0);this.J(this.
TU,0);this.QF.Aw(A.aaL(A.ach.AqC));this.TU.Aw(A.aaL(A.ach.AqC));},_Done:function(
){this.__proto__=A.Core.P;this.QF._Done();this.TU._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.QF._ReInit();this.TU._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.QF)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.ARU={Gb:null,Cb:null,Dk:null,Dh:null,Ko:null,Zm:10,Aq1:0,AEk:0,AR8:0,Ay5:false
,LU:false,Bct:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).Am.Lh())A._GetAutoObject(A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.
Device).Am.HG().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gm();A._GetAutoObject(
A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAy],this.
C$.Q,0);A.zX([this,this.BAq],this.Dk.Q,0);A.zX([this,this.ABm],this.Dh.Q,0);A.zX([
this,this.ABm],this.Dh.HC.Q,0);A.zX([this,this.ABm],[this,this.ASx,this.AFu],0);
A.zX([this,this.GE],[B=A._GetAutoObject(A.Device.Device),B.A9f,B.Bbi],0);A.zX([this
,this.BeZ],this.Cb.Q,0);A.pe([this,this.AAy],this);A.pe([this,this.GE],this);A.pe([
this,this.ABm],this);A.pe([this,this.BeZ],this);},CF:function(G){if(!this.Ay5){this.
Ay5=true;A.pe([this,this.AcS],this);}else C.HY.CF.call(this,G);},Af$:function(G){
this.AR8=this.Zm;this.BcB(this);},Ev:function(G){A._GetAutoObject(A.Device.Helper
).W.Hi();A._GetAutoObject(C.A$).Fv();},Aug:function(){this.N.CV(A.jV);this.N.C6(
A.aaL(A.ach.ADy));this.N.Cl=[this,this.AyQ];},AAt:function(G){A._GetAutoObject(C.
A$).Cg(55);},AFu:function(E){if(this.Zm===E)return;this.Zm=E;A.abo([this,this.ASx
,this.AFu],0);},BcB:function(G){var F;if(!this.Zm||(this.Bct===true)){A._GetAutoObject(
A.Device.Device).A9(24,false,CQ,0,null);if(this.AEk===1)A._GetAutoObject(A.Device.
Device).A9(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A9(23,
true,this.AEk.toFixed(),2000,null);this.Ev(this);return;}this.Gb.Gm();this.Gb.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gb.NY(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gb.Q0(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gb.JQ(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gb.Ne(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gb.Q2(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gb.SA(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alq=A._GetAutoObject(
A.Device.Helper).A1n(this.Gb,(F=this.Dh.HZ.Hp,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Am);if(!Alq)this.AiZ();else{A._GetAutoObject(A.Device.Helper).AKg(
this.Gb,Alq,(F=this.Dh.HZ.Hp,F[1].call(F[0])),this.Zm-1,[this,this.ApG]);A._GetAutoObject(
A.Device.Device).A9(24,false,CQ,0,null);}},GE:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am6())this.C9.Z(true);else this.C9.Z(false);if(this.LU){this.Dk.
Z(false);this.Cb.T(A.aaR(A.acf.ACz));this.Cb.AEY(A.aaL(A.ach.Afa));}else{this.Dk.
Z(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.AEY(null);}if((this.Y.BiI(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JD(this.Y.TL(this.AV,0x1));this.An();
},AS2:function(E){if(this.Aq1===E)return;this.Aq1=E;A.abo([this,this.A8v,this.AS2
],0);},ABm:function(G){var F;var AJ3=(F=this.Dh.Q,F[1].call(F[0]));var AAb=-1;switch((
F=this.Dh.HZ.Hp,F[1].call(F[0]))){case 0:AAb=AJ3+((F=A._GetAutoObject(A.Device.Helper
).Bc9(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zm-1));break;case 1:AAb=(AJ3+this.
Zm)-1;break;case 3:case 2:case 5:case 4:switch(this.Dh.HC.AC.Q){case 0:AAb=(AJ3+
this.Zm)-1;break;case 1:AAb=(AJ3-this.Zm)+1;break;default:throw new Error(AX0+this.
Dh.HC.AC.Q.toFixed());}break;default:throw new Error(AX1+this.Dh.HC.AC.Q.toFixed(
));}this.AS2(AAb);},BAq:function(G){A.pe([this,this.GE],this);A.pe([this,this.At1
],this);},AAy:function(G){A._GetAutoObject(A.Device.Helper).AVp(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LU);A.pe([this,this.ABm],this);},ApG:function(G){var F;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case 22:case 21:case 48:if((
At.Id===48)&&(At.PopupState===7))this.ApA();else switch((F=this.Dh.HZ.Hp,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JD(this.Dh);break;case 0:this.JD(this.Dk
);break;case 1:this.JD(this.Cb);break;default:throw new Error(Ayp+(F=this.Dh.HZ.
Hp,F[1].call(F[0])).toFixed());}break;case 25:this.JD(this.Cb);break;case 47:if(
At.PopupState===7)this.ApA();else{this.JD(this.Dh);this.JD(this.Cb);}break;case 43:{
this.JD(this.Dh);this.JD(this.Dk);}break;case 42:{this.JD(this.Dh);this.JD(this.
Cb);}break;case 41:break;default:A.ab5("%s%e",As7,At.Id);}},AiZ:function(){this.
Gb.Cq(A._GetAutoObject(A.Device.Device).Am);this.AEk=this.AEk+1;if(A._GetAutoObject(
A.Device.Helper).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lh()){A._GetAutoObject(
A.Device.Device).A9(24,false,UW,0,null);A._GetAutoObject(A.Device.Device).A9(50,
true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),0,null);}else{var L6=A.
_GetAutoObject(A.Device.Device).Am.Lc(0,this.Gb.Id);A._GetAutoObject(A.Device.Device
).SJ(L6);var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(this.Gb.
Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(this.Gb.DateOfBirth);B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApA();},ApA:function(){var B;var F,CA;if(!!(F=this.Cb.
Q,F[1].call(F[0]))){(F=this.Cb.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LU)(
CA=this.Dk.Q,CA[2].call(CA[0],(F=this.Cb.Q,F[1].call(F[0]))));}if(!this.LU)(CA=this.
Dk.Q,CA[2].call(CA[0],A._GetAutoObject(A.Device.Helper).A$E(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dk.Q,F[1].call(
F[0])),this.Dk.AjN(),this.Dk.AjP())));var IT=null;switch((F=this.Dh.HZ.Hp,F[1].call(
F[0]))){case 3:IT=[B=A._GetAutoObject(A.Device.Device),B.Awb,B.AyH];break;case 2:
IT=[B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyI];break;case 4:case 5:IT=[B=A.
_GetAutoObject(A.Device.Device),B.Ant,B.AoB];break;default:;}if(!!IT){switch((F=
this.Dh.Kj.VN,F[1].call(F[0]))){case 1:IT[2].call(IT[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dh.Q,F[2].call(F[0],IT[1].call(IT[0])));
}var XH=100-((this.Zm/this.AR8)*100);A._GetAutoObject(A.Device.Device).A9(24,true
,(((this.AR8.toFixed()+As8)+(XH|0).toFixed())+As8)+(F=this.Dh.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BAA]);this.AFu(this.Zm-1);A.aaS([this,this.BcB],null);},BAA:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===5))this.Bct=true;},ApH:function(G){var F;C.HY.ApH.call(this,G);var AoW=
0;switch((F=this.BZ.Q,F[1].call(F[0]))){case 0:case 2:AoW=A._GetAutoObject(A.Device.
Device).AdR;break;case 1:AoW=730;break;default:A.ab5("%s%e",Ale,(F=this.BZ.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q0(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmH(AoW));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnZ));switch(this.BZ.AC.Q){case 0:{this.Ko.I9(A.aaR(A.acf.ANb));this.
Ko.IM(A.aaR(A.acf.ANc));}break;case 1:{this.Ko.I9(A.aaR(A.acf.Bhy));this.Ko.IM(A.
aaR(A.acf.Bhz));}break;case 2:{this.Ko.I9(A.aaR(A.acf.Bjw));this.Ko.IM(A.aaR(A.acf.
Bjx));}break;default:throw new Error(Ale);}},Ae1:function(E){if(this.LU===E)return;
this.LU=E;A.abo([this,this.Awe,this.Ae1],0);},At1:function(G){var F,CA,S7;this.Ae1(((
F=this.Cb.Q,F[1].call(F[0]))===(CA=this.Dk.Q,CA[1].call(CA[0])))&&!!(S7=this.Cb.
Q,S7[1].call(S7[0])));A.pe([this,this.GE],this);},BeZ:function(G){A.pe([this,this.
At1],this);},ASx:function(){return this.Zm;},A8v:function(){return this.Aq1;},Awe:
function(){return this.LU;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.AvY.
_Init.call(this.Cb={I:this},0);C.Q9._Init.call(this.Dk={I:this},0);C.AGC._Init.call(
this.Dh={I:this},0);C.AUG._Init.call(this.Ko={I:this},0);this.__proto__=C.ARU;var
B;this.Dq(C.ADa);this.Cb.H(Aoq);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak4));this.
Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.
aaR(A.acf.Akm));this.Dk.H(AX2);this.Dk.Aj(true);this.Dk.T(A.aaR(A.acf.Ud));this.
Dk.Ar0(false);this.Dh.H(AX3);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.A6T));this.Dh.
By(0);this.Ko.H(AX4);this.Ko.Aj(true);this.Ko.T(A.aaR(A.acf.A70));this.Ko.F0(1);
this.Ko.EV(500);this.Ko.IM(A.aaR(A.acf.ANc));this.Ko.I9(A.aaR(A.acf.ANb));this.Ko.
A9N(A.aaR(A.acf.Aq1)+A.aaR(A.acf.Colon));this.J(this.Cb,0);this.J(this.Dk,0);this.
J(this.Dh,0);this.J(this.Ko,0);this.Gb=A._NewObject(A.Device.Animal,0);this.Cb.AR=[
this,this.AcS];this.Cb.LX([this,this.AcS]);this.Cb.L0(A.aaL(A.ach.Afa));this.Cb.
As([B=A._GetAutoObject(A.Device.Helper).W,B.Arx,B.Q2]);this.Cb.OM([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UY]);this.Cb.PN([B=A._GetAutoObject(A.Device.Device),B.Ug
,B.UZ]);this.Cb.Uh([B=A._GetAutoObject(A.Device.Device),B.Anq,B.AoA]);this.Cb.Ae1([
this,this.Awe,this.Ae1]);this.Dk.Gn([this,this.D_,this.GN]);this.Dk.LX([this,this.
AcS]);this.Dk.L0(A.aaL(A.ach.Afa));this.Dk.Uj([B=this.Gender.Animal,B.Wt,B.JQ]);
this.Dk.OM([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Dk.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.UZ]);this.Dk.Uh([B=A._GetAutoObject(A.Device.Device),B.Anq
,B.AoA]);this.Dk.As([B=A._GetAutoObject(A.Device.Helper).W,B.Anu,B.Ne]);this.Dk.
Anx([B=this.AnimalType.Animal,B.PM,B.EB]);this.Dh.Gn([this,this.D_,this.GN]);this.
Dh.LX([B=this.Dh,B.FQ]);this.Dh.L0(A.aaL(A.ach.Edit));this.Dh.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Ary,B.SA]);this.Dh.A9o(A._GetAutoObject(A.Device.Helper).W);
this.Ko.As([this,this.ASx,this.AFu]);this.Ko.BlW([this,this.A8v,this.AS2]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HY;this.Cb._Done();this.Dk._Done(
);this.Dh._Done();this.Ko._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY.
_ReInit.call(this);this.Cb._ReInit();this.Dk._ReInit();this.Dh._ReInit();this.Ko.
_ReInit();this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akm));this.Dk.T(A.aaR(A.acf.
Ud));this.Dh.T(A.aaR(A.acf.A6T));this.Ko.T(A.aaR(A.acf.A70));this.Ko.IM(A.aaR(A.
acf.ANc));this.Ko.I9(A.aaR(A.acf.ANb));this.Ko.A9N(A.aaR(A.acf.Aq1)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.Gb)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AT_={BW:null,RatingMode:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.Cl=null;this.Bx.Ck=null;this.Bx.CB=[this,this.XA];this.Bx.CV(A.jV
);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AT_;var B;this.
H(Rk);this.BW.H(As5);this.BW.T(A.aaR(A.acf.A$w));this.J(this.BW,0);this.BW.As([B=
this.RatingMode,B.B7,B.B8]);this.BW.CI(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.A$w));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bfz],[B=A._GetAutoObject(A.Device.Device),B.ASB,B.A0a],0);A.pe([this,this.Bfz],this
);},Do:function(){return 2;},FX:function(aIndex){return this.RatingModeToString.
BI(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw0(E);},Bfz:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cf.Set(0,0);this.Cf.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANv={WM:
function(G){C.Amr.WM.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqX()){
A._GetAutoObject(A.Device.Helper).W.AkB(false);A._GetAutoObject(A.Device.Helper).
W.Cq(A._GetAutoObject(A.Device.Device).Am);}},_Init:function(aArg){C.Amr._Init.call(
this,aArg);this.__proto__=C.ANv;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hc={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hc;},_className:"Application::BaseItem"
};C.AVE={BW:null,WeightRecordingMode:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.Cl=null;this.Bx.Ck=null;this.Bx.CB=[this,this.XA];this.Bx.CV(A.jV
);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVE;var B;this.H(Rk);this.BW.H(As5);this.BW.T(A.aaR(A.acf.AsP));this.BW.EV(1);
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
_className:"Application::WeightRecordingMode"};C.Aa3={BooleanToAutoOnOff:null,FX:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BI(aIndex);},_Init:function(aArg){C.Ga._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa3;},_Done:function(
){this.__proto__=C.Ga;this.BooleanToAutoOnOff._Done();C.Ga._Done.call(this);},_ReInit:
function(){C.Ga._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Ga._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxP={A67:function(){var B;this.
Axt(1);this.Jq(0,3);this.VB(0,0,(B=this.M)[3]-B[1]);this.A4F(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4F(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VJ(0);},_Init:
function(aArg){C.ABy._Init.call(this,aArg);this.__proto__=C.AxP;},_className:"Application::Triangle"
};C.ATK={Y:null,Init:function(aArg){this.BxQ(this);},BxP:function(P8){var Aa=A._NewObject(
C.ANC,0);Aa.H(BF);Aa.T(P8);Aa.Aj(true);Aa.Ar(false);Aa.Bg(true);this.J(Aa,0);this.
Atu(this);},Atu:function(G){var B;var Aly=1;var A2w=0;var X=this.Y.Ah;var Cx=null;
var K5=null;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OV.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cx){var ALd=(B=Cx.V.B6.A6K(Cx.V.String,0,-1))[2]-B[0
];if(!!(C.Ml.isPrototypeOf(X)?X:null))ALd=ALd+20;if(A2w<ALd)A2w=ALd;Cx.H(A.abL(Cx.
M,120));Cx.H(A.abI(Cx.M,28));Cx.H(A.abM(Cx.M,this.M[0]));Cx.H(A.abO(Cx.M,((B=this.
M)[3]-B[1])-(Aly*28)));Aly=Aly+1;}else{K5=(A.acg.C5.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K5){var Dg=((B=this.M)[3]-B[1])-((Aly-1)*28);K5.DL([this.
M[0],K5.Er[1]]);K5.DL([K5.Er[0],Dg]);K5.DC([this.M[0]+120,K5.EC[1]]);K5.DC([K5.EC[
0],Dg]);}}X=X.Ah;}this.BBh(A2w,28);},BBh:function(aWidth,BwY){var B;var X=this.Y.
Ah;var Cx=null;var K5=null;aWidth=aWidth+20;if(aWidth>(C.Ast[0]-10))aWidth=C.Ast[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OV.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cx){Cx.V.Text.A6(0x14);Cx.V.Text.Hh(10);Cx.H(A.abL(Cx.M,aWidth
));Cx.H(A.abI(Cx.M,BwY));Cx.H(A.abM(Cx.M,this.M[2]-((B=Cx.M)[2]-B[0])));}else{K5=(
A.acg.C5.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K5){K5.DL([this.M[
2]-aWidth,K5.Er[1]]);K5.DC([this.M[2],K5.EC[1]]);}}X=X.Ah;}},BxQ:function(G){var
Aa=A._GetAutoObject(C.BH).AqM;while(!!Aa){if(!!(C.Axh.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axh.isPrototypeOf(Aa)?Aa:null);this.BxO(EF.DK,EF.AR,EF.Bw,EF.AQ2);}else
if(!!(C.Axj.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axj.isPrototypeOf(Aa)?Aa:null);
this.BxV(EF.DK,EF.AR,EF.Bw,EF.Ws,EF.WO);}else if(!!(C.Zz.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.Zz.isPrototypeOf(Aa)?Aa:null);this.BxN(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkH.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkH.isPrototypeOf(Aa)?Aa:null);this.
BxP(EF.DK);}else if(!!(C.AF4.isPrototypeOf(Aa)?Aa:null))this.BxW();Aa=Aa.Ms;}A._GetAutoObject(
C.BH).Clear();A.pe([this,this.Atu],this);},BxN:function(P8,Ac1,Ah3){var Aa=A._NewObject(
C.Ml,0);Aa.H(BF);Aa.T(P8);Aa.AR=Ac1;Aa.Aj(true);Aa.Ar(Ah3);Aa.Bg(true);this.J(Aa
,0);this.Atu(this);},BxW:function(){var K5=A._NewObject(A.acg.C5,0);K5.L(A.jb.Bm
);K5.Aj(true);K5.Nh(3);this.J(K5,0);this.Atu(this);},BxO:function(P8,Ac1,Ah3,A0J
){var Aa=A._NewObject(C.AmF,0);Aa.H(BF);Aa.T(P8);Aa.AR=Ac1;Aa.Aj(true);Aa.Ar(Ah3
);Aa.Bg(true);Aa.As(A0J);this.J(Aa,0);this.Atu(this);},BxV:function(P8,Ac1,Ah3,A2M
,Agi){var Aa=A._NewObject(C.ANB,0);Aa.H(BF);Aa.T(P8);Aa.AR=Ac1;Aa.Aj(true);Aa.Ar(
Ah3);Aa.Bg(true);Aa.BmW(A2M);Aa.AFI(Agi);this.J(Aa,0);this.Atu(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.ATK;this.H(Rk);this.Y.H(Rk);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Aff={_Init:
function(){A.acl.Aff._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_E={AqM:null,Ahd:null,MZ:function(P8){var EF=A._NewObject(
C.AkH,0);EF.DK=P8;this.J(EF);},Clear:function(){this.AqM=null;this.Ahd=null;},Ft:
function(){var K5=A._NewObject(C.AF4,0);this.J(K5);},J:function(BbV){if(!this.AqM
){this.AqM=BbV;this.Ahd=this.AqM;}else{this.Ahd.Ms=BbV;this.Ahd=this.Ahd.Ms;}},Qw:
function(P8,Ac1){var EF=A._NewObject(C.Zz,0);EF.DK=P8;EF.AR=Ac1;this.J(EF);},BgO:
function(P8,Ac1,A0J){var EF=A._NewObject(C.Axh,0);EF.DK=P8;EF.AR=Ac1;EF.AQ2=A0J;
this.J(EF);},XN:function(P8){var EF=A._NewObject(C.Zz,0);EF.DK=P8;EF.Bw=false;this.
J(EF);},AuA:function(P8,Ac1,A2M,Agi){var EF=A._NewObject(C.Axj,0);EF.DK=P8;EF.AR=
Ac1;EF.Ws=A2M;EF.WO=Agi;this.J(EF);},_Init:function(aArg){this.__proto__=C.A_E;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BH={_Init:function(){C.A_E._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axi={Ms:null,_Init:function(aArg){this.__proto__=
C.Axi;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOA={Amp:null,ArC:function(E){if(this.Amp===
E)return;if(!!this.Ab)this.Ab.ZE(this);if(!!this.Amp)this.AqE(this.Amp,A._GetAutoObject(
C.Asx),null,null,null,null,false);this.Amp=E;if(!!this.Amp)this.AkL(this.Amp,A._GetAutoObject(
C.Asx),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOA;this.H(BF);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amp)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WD={_Init:function(){C.AOA._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N0={Init:function(aArg){var C1=A._NewObject(C.ATL,0);C1.H(this.M);this.AkL(C1,A.
_GetAutoObject(C.AnW),null,A._GetAutoObject(C.AnW),A._GetAutoObject(C.AnW),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N0;this.H(Rk);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Asx={_Init:function(){C.AUI._Init.call(this,0);this.ACx=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATL={AL:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.ATL;this.H(AH7);this.Dr(0);this.AL.AZ(0x3F);this.AL.H(AH7);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.P;this.AL.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUH={R8:function(){var B;var Ao=(A.acl.Ae9.isPrototypeOf(B=A.acl.Aek.R8.call(this
))?B:null);if(!Ao)throw new Error(As2);Ao.Cp.Cw=255;Ao.Cp.B2=0;return Ao;},R7:function(
){var B;var Ao=(A.acl.Axg.isPrototypeOf(B=A.acl.Aek.R7.call(this))?B:null);if(!Ao
)throw new Error(As2);Ao.E0.Cw=0;Ao.E0.B2=255;Ao.Du=true;return Ao;},_Init:function(
aArg){A.acl.Aek._Init.call(this,aArg);this.__proto__=C.AUH;},_className:"Application::ShadeOverlayTransition"
};C.AnW={_Init:function(){C.AUH._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkT={AnZ:0,A1U:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Io.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BCr=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).Ak9(BCr)+CQ)+A._GetAutoObject(A.acj.DV).AfZ()
);else this.BT.R(A.aaR(A.acf.Akm));}},J$:function(G){var B;var BgC=(this.A1U===false
)&&(this.AM<=this.Gl);if(BgC)this.By(this.AnZ);this.A4j(this.AM,4);if(BgC){this.
By(this.AM-this.Aj4);this.A1U=true;}C.Io.J$.call(this,G);},J6:function(G){this.A4j(
this.AM,5);C.Io.J6.call(this,G);},By:function(E){this.A4j(E,4);E=(((E+((this.Aj4
/2)|0))/this.Aj4)|0)*this.Aj4;if(!E)this.A1U=false;C.Io.By.call(this,E);},Ahm:function(
E){if(this.AnZ===E)return;this.AnZ=E;},A4j:function(BwG,Gw){this.AS5(A._GetAutoObject(
A.acj.DV).Bdb(BwG,Gw));},_Init:function(aArg){C.Io._Init.call(this,aArg);this.__proto__=
C.AkT;this.H(J0);this.AnZ=this.Gl;this.JV(this.H2,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BDP={None:0,Left:1,BEr:2,Right:3};C.Amu={Ac9:
null,Fy:null,Ej:null,Background:null,Ani:null,F$:null,KM:A.jV,AD4:null,Init:function(
aArg){var B;A.zV([this,this.Af6],A._GetAutoObject(A.Device.Device).Am,0);A.zX([this
,this.A3u],[B=A._GetAutoObject(A.Device.Device).Am,B.Fj,B.Fn],0);A.pe([this,this.
LO],this);A.pe([this,this.A3u],this);this.Bb(this.Ej);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},KR:function(){if(!this.Bx)this.Bx=A._NewObject(
C.N,0);return this.Bx;},E3:function(G){C.OverlayMenu.E3.call(this,G);A._GetAutoObject(
A.Device.Device).Am.Bl(this.Ac9);},CF:function(G){C.OverlayMenu.CF.call(this,G);
this.AKO();},Al0:function(G){var Aa=(C.AB4.isPrototypeOf(G)?G:null);var Hn;if(!!
Aa)Hn=Aa.Hn;else Hn=this.F$.FH();if(Hn>=A._GetAutoObject(A.Device.Device).Am.Ca(
))return;A._GetAutoObject(A.Device.Helper).HL(Hn);A.pe([this,this.XA],this);},AKO:
function(){},Af6:function(G){this.An();},A3l:function(G){if(this.F$.FH()<(A._GetAutoObject(
A.Device.Device).Am.Ca()-1))this.F$.G2(this.F$.FH()+1);},A3m:function(G){if(this.
F$.FH()>0)this.F$.G2(this.F$.FH()-1);},DJ:function(G){var Gd=A._GetAutoObject(A.
Device.Device).Am.Ca();var MR=this.Bx;if(!MR)return;MR.CY(A.aaL(A.ach.Aex));MR.CB=[
this,this.XA];if(Gd<=0){MR.Cs(null);MR.C6(null);MR.Ck=null;MR.Cl=null;MR.ZC=false;
MR.ZD=false;}else if(Gd===1){MR.Cs(null);MR.C6(A.aaL(A.ach.Aey));MR.Ck=null;MR.Cl=[
this,this.Al0];MR.ZC=false;MR.ZD=false;}else{MR.Cs(A.aaL(A.ach.Aq4));MR.C6(A.aaL(
A.ach.Aq$));MR.Ck=[this,this.A3l];MR.Cl=[this,this.A3m];MR.ZC=true;MR.ZD=true;}}
,LO:function(G){this.BfZ(this);this.Ac9=A._GetAutoObject(A.Device.Device).Am.Filter;
this.AKO();},BmO:function(E){if(this.AD4===E)return;this.AD4=E;A.pe([this,this.BAn
],this);},BAn:function(G){this.BfZ(this);},BfZ:function(G){var B;if(!!this.Fy)this.
HN(this.Fy);this.Fy=(C.EA.isPrototypeOf(B=A._NewObject(this.AD4,0))?B:null);if(!
!this.Fy){this.Fy.H(AX5);this.J(this.Fy,0);}},A3u:function(G){if(!!A._GetAutoObject(
A.Device.Device).Am.Filter&&!!A._GetAutoObject(A.Device.Device).Am.Filter.DQ(1,4
))this.F$.Dz(A.aaR(A.acf.AR2));else this.F$.Dz(this.KM);},Dz:function(E){if(this.
KM===E)return;this.KM=E;A.pe([this,this.A3u],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ej._Init.call(this.Ej={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Ani={I:this},0);C.F$._Init.call(
this.F$={I:this},0);this.__proto__=C.Amu;this.H(Rk);this.Ej.H(BF);this.Ej.A9Q(A.
jb.CS);this.Ej.A9R(A.jb.Text);this.Background.H(E$);this.Background.L(A.jb.Bok);
this.Ani.H(AH8);this.Ani.L(A.jb.CS);this.F$.H(AH8);this.F$.NZ(C.AB4);this.AD4=C.
APF;this.KM=A.aaR(A.acf.Av2);this.J(this.Ej,0);this.J(this.Background,0);this.J(
this.Ani,0);this.J(this.F$,0);this.Ej.AR=[this,this.Al0];this.Ej.Ab5(A._NewObject(
C.Yu,0));this.F$.Zs(A._GetAutoObject(A.Device.Device).Am);this.F$.Zu([this,this.
Al0]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ej._Done(
);this.Background._Done();this.Ani._Done();this.F$._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ej._ReInit();this.
Background._ReInit();this.Ani._ReInit();this.F$._ReInit();this.Dz(A.aaR(A.acf.Av2
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ac9)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Ani)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F$
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};
C.AB4={AP:null,DS:null,Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(A.abN(
this.V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.DS.De(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){this.T(this.AX.CE(Ad,1).toFixed());this.DS.EB(
this.AX.AmU(Ad,14));this.DS.AE0(this.AX.I2(Ad,13));this.DS.Ae0(this.AX.H1(Ad,8));
this.DS.Ul(this.AX.H1(Ad,11));this.DS.Ae3(this.AX.H1(Ad,12));this.DS.Ae5(this.AX.
CE(Ad,5));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL.
_Init.call(this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=
C.AB4;this.H(O3);this.AP.L(A.jb.Bc);this.DS.H(AX6);this.J(this.AP,0);this.J(this.
DS,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.
DS._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.
AP._ReInit();this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::CalfListSmallItem"};C.Yu={Q:null,Init:function(
aArg){var B;this.AAY(this);this.As([B=A._GetAutoObject(A.Device.Device).Am,B.Fj,
B.Fn]);},AEG:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&
!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DQ(1,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
N3(FilterCriterion);var Ai3=this.Akp();if(Ai3>0){FilterCriterion=A._NewObject(A.
Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,Ai3,false);Filter.
CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeW(false
);},Bv6:function(s){this.AEG(s);},AAY:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DQ(1,4))?
B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);(F=this.Q,F[2].call(F[0]
,Filter));}},BGg:function(s){this.AAY(s);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.AcU],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcU],
E,0);if(!!E)A.pe([this,this.AcU],this);},C2:function(G){var B;var F;if(!(F=this.
Q,F[1].call(F[0]))){this.AW.AwI(-1);return;}var Ay1=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DQ(1,4))?B:null);if(!Ay1){this.AW.AwI(
0);this.AW.AeW(true);}else this.AW.AwI(Ay1.A4);},AcU:function(s){this.C2(s);},_Init:
function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.Yu;this.AW.AwI(0);this.
AW.Di=[this,this.Bv6];this.Init(aArg);},_Mark:function(D){var B;C.AjS._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqH={BirthType:null,EaseOfDelivery:null,Cb:null,Ef:null,AbK:null,G1:null,Cn:
null,AbI:null,AMV:false,Init:function(aArg){this.AMV=A._GetAutoObject(A.Device.Helper
).W.Arc();if(this.AMV)this.AeV(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeV(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cb.
LX([this,this.AcS]);this.Cb.L0(A.aaL(A.ach.Afa));this.Cb.AR=[this,this.AcS];}this.
Ef.Ar0(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GE],this.Ef.
Q,0);A.zX([this,this.GE],this.Cb.Q,0);A.pe([this,this.GE],this);},Af$:function(G
){if(((this.Ef.Ash===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQ6(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cq(
A._GetAutoObject(A.Device.Device).Am);if(this.KI>0){if(this.AMV){var Ad=A._GetAutoObject(
A.Device.Device).Bt.Lc(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.EM(Ad,A._GetAutoObject(A.Device.
Device).Bt);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AX7,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KI);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cq(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A$).Fv();},Ev:function(
G){A._GetAutoObject(A.Device.Helper).W.EM(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).Am);A._GetAutoObject(C.A$).Fv();},Aug:function(
){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.Am3));this.N.Cl=[this,this.AyQ];},AAt:function(
G){A._GetAutoObject(C.A$).Cg(32);},GE:function(G){var F;var Ka=(F=this.Ef.Q,F[1].
call(F[0]));var ABj=(F=this.Cb.Q,F[1].call(F[0]));var A4e=true;if(!!Ka&&(ABj===Ka
))A4e=false;A._GetAutoObject(A.Device.Helper).JW(this.Cb,A4e);this.Ef.BlO(!A4e);
},_Init:function(aArg){C.HY._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvY._Init.
call(this.Cb={I:this},0);C.Q9._Init.call(this.Ef={I:this},0);C.Acp._Init.call(this.
AbK={I:this},0);C.BW._Init.call(this.G1={I:this},0);C.SL._Init.call(this.Cn={I:this
},0);C.BW._Init.call(this.AbI={I:this},0);this.__proto__=C.AqH;var B;this.Cb.H(AhW
);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akm));this.Ef.H(AhW);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Ud));this.AbK.H(AX8);this.AbK.Aj(true);this.
AbK.T(A.aaR(A.acf.GJ));this.G1.H(AhW);this.G1.Aj(true);this.G1.T(A.aaR(A.acf.Arn
));this.Cn.H(AhW);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.AFz(true);
this.AbI.H(AhW);this.AbI.Aj(true);this.AbI.T(A.aaR(A.acf.AgC));this.J(this.Cb,-1
);this.J(this.Ef,-1);this.J(this.AbK,-1);this.J(this.G1,-1);this.J(this.Cn,-1);this.
J(this.AbI,-1);this.BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LY(A._GetAutoObject(A.Device.Helper).W);this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Arx,B.Q2]);this.Ef.Gn([this,this.D_,this.GN]);this.Ef.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anu,B.Ne]);this.AbK.Gn([this,this.D_,this.GN]);this.AbK.As([
B=A._GetAutoObject(A.Device.Helper).W,B.Ary,B.SA]);this.G1.As([B=this.BirthType,
B.B7,B.B8]);this.G1.CI(this.BirthType);this.Cn.Gn([this,this.D_,this.GN]);this.Cn.
LX([B=this.Cn,B.FQ]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab9([B=A._GetAutoObject(
A.Device.Helper).W,B.Av_,B.Q0]);this.AbI.As([B=this.EaseOfDelivery,B.B7,B.B8]);this.
AbI.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HY;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cb._Done();this.Ef._Done(
);this.AbK._Done();this.G1._Done();this.Cn._Done();this.AbI._Done();C.HY._Done.call(
this);},_ReInit:function(){C.HY._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cb._ReInit();this.Ef._ReInit();this.AbK._ReInit();
this.G1._ReInit();this.Cn._ReInit();this.AbI._ReInit();this.Cb.T(A.aaR(A.acf.Ak4
));this.Cb.ArK(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.
Cb.ArL(A.aaR(A.acf.Akm));this.Ef.T(A.aaR(A.acf.Ud));this.AbK.T(A.aaR(A.acf.GJ));
this.G1.T(A.aaR(A.acf.Arn));this.Cn.T(A.aaR(A.acf.Aed));this.AbI.T(A.aaR(A.acf.AgC
));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acp={FF:null,AW:null,A8:0,IW:function(G){C.Dt.IW.call(this,G);if(!this.A8)this.
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
SI(7);this.DJ(this);this.An();},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.AQ0._Init.call(this.AW={I:this},0);this.__proto__=C.Acp;this.H(UT);this.EV(999999
);this.V.R(As9);this.V.L(A.jb.Bm);this.Ht.Z(false);this.H2.Z(false);this.AW.H(AX9
);this.AW.ATb(6);this.J(this.AW,0);this.AW.As([this,this.Ue,this.BaV]);this.FF=A.
_NewObject(C.Aer,0);},_Done:function(){this.__proto__=C.Dt;this.AW._Done();C.Dt.
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
ReasonOfLeaving:null,Ahu:null,M3:0,AmJ:false,AB8:true,AOt:false,Asd:false,Init:function(
aArg){A.zX([this,this.A9l],[this,this.A8N,this.ATe],0);this.Ahi(A._GetAutoObject(
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
Helper).W.AFy(this.ReasonOfLeaving.C4((F=this.NV.Q,F[1].call(F[0]))));if(this.AB8
)A._GetAutoObject(A.Device.Helper).W.Q2(0);if(this.Asd)A._GetAutoObject(A.Device.
Helper).W.AwK(true);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).Am);this.A$c();},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[
1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},Ahi:function(E){
if(this.M3===E)return;this.M3=E;},Anr:function(){return this.M3;},Be1:function(G
){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;if((At.PopupState===
4)||(At.PopupState===3)){A._GetAutoObject(C.A$).Fv();A._GetAutoObject(A.Device.Helper
).Asn();}},A9l:function(G){switch(this.Asd){case false:this.Ee.T(A.aaR(A.acf.AVG
));break;case true:this.Ee.T(A.aaR(A.acf.Bqo));break;default:;}},ATe:function(E){
if(this.Asd===E)return;this.Asd=E;},A8N:function(){return this.Asd;},A$c:function(
){A._GetAutoObject(A.Device.Device).A9(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Be1]);},Bmc:function(E){if(this.AOt===E)return;
this.AOt=E;},Bkz:function(){return this.AOt;},BlB:function(E){if(this.AB8===E)return;
this.AB8=E;},Bkn:function(){return this.AB8;},BlM:function(E){if(this.AmJ===E)return;
this.AmJ=E;},Bkv:function(){return this.AmJ;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afj._Init.call(this.QL={I:this
},0);C.Asw._Init.call(this.NV={I:this},0);C.AkT._Init.call(this.Ee={I:this},0);C.
Afj._Init.call(this.PC={I:this},0);C.Afj._Init.call(this.Pz={I:this},0);C.Afj._Init.
call(this.PA={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Ga._Init.call(this.
Ga={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahu._Init.call(this.Ahu={I:this},0);this.__proto__=C.AuF;var B;this.N.Z(true);this.
N.CV(A.aaR(A.acf.Unregister));this.Dq(C.IG);this.Y.H(E$);this.Y.JP(1);this.QL.H(
Aag);this.QL.Aj(true);this.QL.T(A.aaR(A.acf.AmJ));this.QL.Bg(true);this.QL.Zx(false
);this.QL.F0(-1);this.QL.EV(1);this.NV.H(UV);this.NV.Aj(true);this.NV.T(A.aaR(A.
acf.ReasonOfLeaving));this.NV.Bg(true);this.NV.Zx(false);this.Ee.H(AhV);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVG));this.Ee.Bg(false);this.Ee.F0(1000);this.Ee.
EV(999000);this.PC.H(UV);this.PC.Aj(true);this.PC.T(A.aaR(A.acf.A4R));this.PC.Bg(
true);this.PC.Zx(false);this.PC.By(1);this.PC.F0(-1);this.PC.EV(1);this.Pz.H(Aag
);this.Pz.Aj(true);this.Pz.T(A.aaR(A.acf.A4S));this.Pz.Bg(true);this.Pz.Zx(false
);this.Pz.By(1);this.Pz.F0(-1);this.Pz.EV(1);this.PA.H(UV);this.PA.Aj(true);this.
PA.T(A.aaR(A.acf.A5s));this.PA.Bg(true);this.PA.Zx(false);this.PA.By(1);this.PA.
F0(-1);this.PA.EV(1);this.Ay.H(Ayg);this.Ga.As(0);this.J(this.Y,0);this.J(this.QL
,0);this.J(this.NV,0);this.J(this.Ee,0);this.J(this.PC,0);this.J(this.Pz,0);this.
J(this.PA,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fe
];this.QL.As([B=this.Ga,B.B7,B.B8]);this.QL.CI(this.Ga);this.QL.AkC([this,this.Bkv
,this.BlM]);this.NV.Gn([this,this.D_,this.GN]);this.NV.LX([B=this.NV,B.FQ]);this.
NV.L0(A.aaL(A.ach.Edit));this.NV.As([B=this.ReasonOfLeaving,B.B7,B.B8]);this.NV.
CI(this.ReasonOfLeaving);this.NV.Anz(this.Ahu);this.Ee.As([this,this.Anr,this.Ahi
]);this.PC.As([B=this.Ga,B.B7,B.B8]);this.PC.CI(this.Ga);this.PC.AkC([this,this.
Bkz,this.Bmc]);this.Pz.As([B=this.Ga,B.B7,B.B8]);this.Pz.CI(this.Ga);this.Pz.AkC([
this,this.A8N,this.ATe]);this.PA.As([B=this.Ga,B.B7,B.B8]);this.PA.CI(this.Ga);this.
PA.AkC([this,this.Bkn,this.BlB]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QL._Done();this.NV._Done();this.Ee._Done();this.PC._Done(
);this.Pz._Done();this.PA._Done();this.Ay._Done();this.Ga._Done();this.ReasonOfLeaving.
_Done();this.Ahu._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QL._ReInit();this.NV._ReInit();this.Ee._ReInit(
);this.PC._ReInit();this.Pz._ReInit();this.PA._ReInit();this.Ay._ReInit();this.Ga.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahu._ReInit();this.N.CV(A.aaR(A.acf.
Unregister));this.QL.T(A.aaR(A.acf.AmJ));this.NV.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVG));this.PC.T(A.aaR(A.acf.A4R));this.Pz.T(A.aaR(A.acf.A4S
));this.PA.T(A.aaR(A.acf.A5s));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahu)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUG={AjL:null,Ps:null,Au5:AX_,Bk:function(aSize){C.Io.Bk.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Ht.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H2.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.Io.Ai.call(this,Ae);this.Ps.L(this.V.AQ);if(!!this.AjL){if((
F=this.AjL,F[1].call(F[0]))===-1)this.Ps.R(this.Au5+AH9);else this.Ps.R((this.Au5+
CQ)+(F=this.AjL,F[1].call(F[0])).toFixed());}else this.Ps.R(this.Au5);},A25:function(
G){this.An();},BlW:function(E){if(A.aaZ(this.AjL,E))return;if(!!this.AjL)A.z$([this
,this.A25],this.AjL,0);this.AjL=E;if(!!E)A.zX([this,this.A25],E,0);if(!!E)A.pe([
this,this.A25],this);},A9N:function(E){if(this.Au5===E)return;this.Au5=E;this.An(
);},_Init:function(aArg){C.Io._Init.call(this,aArg);C.CH._Init.call(this.Ps={I:this
},0);this.__proto__=C.AUG;this.H(AX$);this.V.H(AYa);this.V.A6(0x12);this.Ps.H(AYb
);this.Ps.A6(0x12);this.Ps.L(A.jb.Bm);this.J(this.Ps,0);this.Ps.S(A.aaL(A.fl.Af)
);this.Ps.A2(A.aaL(A.fl.Ak));this.Ps.Cu(null);},_Done:function(){this.__proto__=
C.Io;this.Ps._Done();C.Io._Done.call(this);},_ReInit:function(){C.Io._ReInit.call(
this);this.Ps._ReInit();this.Ps.S(A.aaL(A.fl.Af));this.Ps.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Io._Mark.call(this,D);if((B=this.AjL)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMc={Y:null,JL:null,Sn:null,Ay:null,Aqv:2500,ANs:24,DE:function(G){var B;var
Fc=0;var X=this.AV;switch(this.Cr.CO){case 6:Fc=2;break;case 7:Fc=7;break;case 4:
Fc=4;break;case 5:Fc=5;break;default:;}X=this.QD(X,Fc,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HD(X,true,null,null);},AlZ:function(G){A._GetAutoObject(
C.A$).Fv();},ApL:function(G){},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1)
)[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},BlF:function(
E){if(this.Aqv===E)return;this.Aqv=E;},Bkp:function(){return this.Aqv;},BlG:function(
E){if(this.ANs===E)return;this.ANs=E;},Bkq:function(){return this.ANs;},Bke:function(
G){var F,CA;this.JL.BT.L(this.JL.V.AQ);if(!!this.JL.Q)this.JL.BT.R((((String.fromCharCode(((
F=this.JL.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Afy)+String.fromCharCode(((
CA=this.JL.Q,CA[1].call(CA[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JL.
AG4);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Io._Init.call(this.JL={I:this},0);C.Io._Init.call(this.Sn={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMc;this.N.Z(true);this.
Dq(C.IG);this.Y.H(E$);this.Y.JP(1);this.JL.H(AhV);this.JL.Aj(true);this.JL.T(A.aaR(
A.acf.Aqv));this.JL.Bg(false);this.JL.F0(0);this.JL.EV(5000);this.JL.IM(A.aaR(A.
acf.Af2));this.JL.I9(A.aaR(A.acf.Af2));this.JL.AS5(100);this.Sn.H(UV);this.Sn.Aj(
true);this.Sn.T(A.aaR(A.acf.A_N));this.Sn.Bg(true);this.Sn.By(24);this.Sn.F0(10);
this.Sn.EV(33);this.Sn.IM(AYc);this.Ay.H(Ayg);this.J(this.Y,0);this.J(this.JL,0);
this.J(this.Sn,0);this.J(this.Ay,0);this.N.CY(A.aaL(A.ach.VZ));this.Y.El=[this,this.
Fe];this.JL.As([this,this.Bkp,this.BlF]);this.JL.A_k([this,this.Bke]);this.Sn.As([
this,this.Bkq,this.BlG]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JL._Done();this.Sn._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JL._ReInit();this.Sn._ReInit();this.
Ay._ReInit();this.JL.T(A.aaR(A.acf.Aqv));this.JL.IM(A.aaR(A.acf.Af2));this.JL.I9(
A.aaR(A.acf.Af2));this.Sn.T(A.aaR(A.acf.A_N));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Arp={EaseOfDelivery:null,BirthType:null,Cb:null,Dk:null,Dh:null,Cn:null,Ee:null
,G1:null,Li:null,M3:0,LU:false,Init:function(aArg){A.zX([this,this.GE],this.Cb.Q
,0);A.zX([this,this.GE],this.Dk.Q,0);A.zX([this,this.AAy],this.C$.Q,0);A.zX([this
,this.Bex],this.Cn.Dj,0);A.zX([this,this.Ber],this.C9.Q,0);A.zX([this,this.At1],
this.Cb.Q,0);A.zX([this,this.At1],this.Dk.Q,0);A.pe([this,this.AAy],this);A.pe([
this,this.GE],this);A.pe([this,this.Bex],this);A.pe([this,this.Ber],this);A.pe([
this,this.At1],this);},Ev:function(G){A._GetAutoObject(A.Device.Helper).W.Hi();A.
_GetAutoObject(C.A$).Fv();},Af$:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EB((F=this.BZ.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhA
){var AlK=A._GetAutoObject(A.Device.Helper).AhA.AOR();A._GetAutoObject(A.Device.
Helper).W.Ab6(AlK);A._GetAutoObject(A.Device.Helper).W.AnE(AlK);}var Alq=A._GetAutoObject(
A.Device.Helper).A1n(A._GetAutoObject(A.Device.Helper).W,(F=this.Dh.HZ.Hp,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).Am);if(!Alq){this.AiZ();A.pe([this,this.
Bws],this);}else A._GetAutoObject(A.Device.Helper).AKg(A._GetAutoObject(A.Device.
Helper).W,Alq,(F=this.Dh.HZ.Hp,F[1].call(F[0])),0,[this,this.ApG]);},Aug:function(
){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.ADJ));this.N.Cl=[this,this.AyQ];},AiZ:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).Am);var L6=A._GetAutoObject(A.Device.Device).Am.Lc(0,A._GetAutoObject(A.Device.
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
B.AyH];break;case 2:IT=[B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyI];break;case
4:case 5:IT=[B=A._GetAutoObject(A.Device.Device),B.Ant,B.AoB];break;default:;}if(
!!IT)switch((F=this.Dh.Kj.VN,F[1].call(F[0]))){case 1:IT[2].call(IT[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IT[2].call(IT[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}if(!!(F=this.Dk.Q,F[1].call(F[0])))
A._GetAutoObject(A.Device.Helper).A$E(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.Gender.Animal.Gender,(F=this.Dk.Q,F[1].call(F[0])),this.Dk.AjN(),this.Dk.AjP(
));},Ap5:function(G){A._GetAutoObject(C.A$).Fv();},Bws:function(s){this.Ap5(s);}
,AAt:function(G){A._GetAutoObject(C.A$).Cg(49);},Ahi:function(E){if(this.M3===E)
return;this.M3=E;A.abo([this,this.Anr,this.Ahi],0);},GE:function(G){if(A._GetAutoObject(
A.Device.Helper).Am6())this.C9.Z(true);else this.C9.Z(false);if(A._GetAutoObject(
A.Device.Helper).A7b())this.Ee.Z(true);else this.Ee.Z(false);if(this.LU){this.Dk.
Z(false);this.Cb.T(A.aaR(A.acf.ACz));this.Cb.AEY(A.aaL(A.ach.Afa));}else{this.Dk.
Z(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.AEY(null);}},AAy:function(G){A._GetAutoObject(
A.Device.Helper).AVp(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.LU);},Bex:function(G){A.pe([this,this.Bgq],this
);},Ber:function(G){A.pe([this,this.Bgq],this);},Bgq:function(G){var F,CA,S7;switch(
A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.Ee.Ahm(A._GetAutoObject(
A.Device.Helper).AhP(A._GetAutoObject(A.Device.Helper).Abr((F=this.BZ.Q,F[1].call(
F[0]))),(CA=this.Cn.Dj,CA[1].call(CA[0])),2,(S7=this.BZ.Q,S7[1].call(S7[0]))));break;
case 2:this.Ee.Ahm(A._GetAutoObject(A.Device.Helper).AhP(this.KI,(F=this.Cn.Dj,F[
1].call(F[0])),2,(CA=this.BZ.Q,CA[1].call(CA[0]))));break;default:;}},ApG:function(
G){var F;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(
At.Id){case 22:case 21:switch((F=this.Dh.HZ.Hp,F[1].call(F[0]))){case 3:case 2:case
5:case 4:this.JD(this.Dh);break;case 0:this.JD(this.Dk);break;case 1:this.JD(this.
Cb);break;default:throw new Error(Ayp+(F=this.Dh.HZ.Hp,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JD(this.Dh);this.JD(this.Dk);}break;case 25:case 42:{this.
JD(this.Dh);this.JD(this.Cb);}break;case 41:break;default:A.ab5("%s%e",As7,At.Id
);}},ApH:function(G){var F;C.HY.ApH.call(this,G);var AoW=0;switch((F=this.BZ.Q,F[
1].call(F[0]))){case 0:case 2:AoW=A._GetAutoObject(A.Device.Device).AdR;break;case
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
,0);C.AGC._Init.call(this.Dh={I:this},0);C.SL._Init.call(this.Cn={I:this},0);C.AkT.
_Init.call(this.Ee={I:this},0);C.BW._Init.call(this.G1={I:this},0);C.BW._Init.call(
this.Li={I:this},0);this.__proto__=C.Arp;var B;this.Dq(C.AC$);this.CG.H(AcR);this.
Cb.H(Aoq);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.Ak4));this.Cb.ArK(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Ass));this.Cb.ArL(A.aaR(A.acf.Akm));this.
Dk.H(Aoq);this.Dk.Aj(true);this.Dk.T(A.aaR(A.acf.Ud));this.Dk.Ar0(false);this.Dh.
H(AYd);this.Dh.Aj(true);this.Dh.T(A.aaR(A.acf.GJ));this.Dh.By(0);this.Cn.H(AcR);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.AFz(true);this.Ee.H(AcR);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M3));this.Ee.F0(1000);this.Ee.EV(999000);this.
G1.H(AcR);this.G1.Aj(true);this.G1.T(A.aaR(A.acf.Arn));this.Li.H(AcR);this.Li.Aj(
true);this.Li.T(A.aaR(A.acf.AgC));this.J(this.Cb,-3);this.J(this.Dk,-3);this.J(this.
Dh,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G1,-1);this.J(this.Li,-
1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LY(
A._GetAutoObject(A.Device.Helper).W);this.Cb.AR=[this,this.AcS];this.Cb.LX([this
,this.AcS]);this.Cb.L0(A.aaL(A.ach.Afa));this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Arx,B.Q2]);this.Cb.OM([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY
]);this.Cb.PN([B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ]);this.Cb.Uh([B=A._GetAutoObject(
A.Device.Device),B.Anq,B.AoA]);this.Cb.Ae1([this,this.Awe,this.Ae1]);this.Dk.Gn([
this,this.D_,this.GN]);this.Dk.LX([this,this.AcS]);this.Dk.L0(A.aaL(A.ach.Afa));
this.Dk.Uj([B=this.Gender.Animal,B.Wt,B.JQ]);this.Dk.OM([B=A._GetAutoObject(A.Device.
Device),B.Uf,B.UY]);this.Dk.PN([B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ]);
this.Dk.Uh([B=A._GetAutoObject(A.Device.Device),B.Anq,B.AoA]);this.Dk.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Anu,B.Ne]);this.Dk.Anx([B=this.AnimalType.Animal,B.PM,B.EB]
);this.Dh.Gn([this,this.D_,this.GN]);this.Dh.LX([B=this.Dh,B.FQ]);this.Dh.L0(A.aaL(
A.ach.Edit));this.Dh.As([B=A._GetAutoObject(A.Device.Helper).W,B.Ary,B.SA]);this.
Dh.A9o(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gn([this,this.D_,this.GN]);this.
Cn.LX([B=this.Cn,B.FQ]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab9([B=A._GetAutoObject(
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
A.aaR(A.acf.Ud));this.Dh.T(A.aaR(A.acf.GJ));this.Cn.T(A.aaR(A.acf.Aed));this.Ee.
T(A.aaR(A.acf.M3));this.G1.T(A.aaR(A.acf.Arn));this.Li.T(A.aaR(A.acf.AgC));},_Mark:
function(D){var B;C.HY._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHa={H5:null,AhF:null,AgM:null,AhG:null,AgN:null,AnimalType:null,Background:
null,NX:null,Rh:null,V:null,TP:null,YB:null,AbF:null,PL:null,DK:A.jV,AGE:true,CP:
function(){this.An();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An_();this.
AxQ();},An_:function(){var F,CA;var LD=0;var Amd=0;var AlD=0;var H$=0;if((((!!this.
AhF&&!!this.AhG)&&!!this.AgM)&&!!this.AgN)&&!!this.AnimalType){Amd=(F=this.AhF,F[
1].call(F[0]));AlD=(F=this.AgM,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper
).MN((F=this.AhG,F[1].call(F[0])),(CA=this.AgN,CA[1].call(CA[0])));H$=(F=this.AnimalType
,F[1].call(F[0]));}var K7=A.jb.Text;var Ay9=A.jb.CS;if(!!LD){var ALw=A._GetAutoObject(
A.acj.DV).Alx(LD,Amd,AlD);Ay9=A._GetAutoObject(A.acj.DV).AzO(ALw,H$);K7=A._GetAutoObject(
A.acj.DV).AzQ(ALw,H$);}this.Background.L(Ay9);this.TP.L(K7);this.Rh.L(K7);this.NX.
L(K7);this.AbF.L(K7);if(K7===A.jb.Bm)this.YB.L(K7);else this.YB.L(A.jb.CK);this.
V.L(K7);this.PL.L(K7);},AxQ:function(){var F,CA;var LD=0;var Amd=0;var AlD=0;if(((
!!this.AhF&&!!this.AhG)&&!!this.AgM)&&!!this.AgN){Amd=(F=this.AhF,F[1].call(F[0]
));AlD=(F=this.AgM,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper).MN((F=this.
AhG,F[1].call(F[0])),(CA=this.AgN,CA[1].call(CA[0])));}if(!!LD){var ALw=A._GetAutoObject(
A.acj.DV).Alx(LD,Amd,AlD);this.Rh.R(A._GetAutoObject(A.Device.Converter).S2(ALw,
2,true));this.NX.Z(true);this.Rh.Z(true);this.PL.Z(false);}else{this.NX.Z(false);
this.Rh.Z(false);this.PL.Z(true);}this.TP.R(this.By6(AlD-Amd,LD));this.AbF.Z(this.
AGE);this.YB.Z(this.AGE);this.NX.R(A._GetAutoObject(A.acj.DV).Aay());},By6:function(
A04,Ah4){var B;if(Ah4<0){A.ab5("%s",AYe);return A.jV;}var Is=(AYf+A._GetAutoObject(
A.acj.DV).AfZ())+CQ;var FS=A._GetAutoObject(A.Device.Converter).Ak9(A04);if(!A04
)FS=A.abU(FS,AYg,0);else if(A04>0)FS=A.abU(FS,AH_,0);Is=this.BfH(Is,AYh,FS);if(Ah4===
1)Is=Is+A.aaR(A.acf.Bi5);else{Is=Is+A.aaR(A.acf.Bi6);Is=this.BfH(Is,AYi,Ah4.toFixed(
));}return Is;},BfH:function(aString,BbZ,Bxt){if(aString===A.jV){A.ab5("%s",AYj);
return A.jV;}var A2K=aString.indexOf(BbZ,0);if(A2K>=0){aString=A.ab1(aString,A2K
,BbZ.length);aString=A.abU(aString,Bxt,A2K);}return aString;},ATu:function(E){if(
A.aaZ(this.AhF,E))return;if(!!this.AhF)A.z$([this,this.C2],this.AhF,0);this.AhF=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},BlT:function(
E){if(A.aaZ(this.AgM,E))return;if(!!this.AgM)A.z$([this,this.C2],this.AgM,0);this.
AgM=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},ATv:function(
E){if(A.aaZ(this.AhG,E))return;if(!!this.AhG)A.z$([this,this.C2],this.AhG,0);this.
AhG=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},BlU:function(
E){if(A.aaZ(this.AgN,E))return;if(!!this.AgN)A.z$([this,this.C2],this.AgN,0);this.
AgN=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(
G){this.An();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_j:function(
E){if(this.AGE===E)return;this.AGE=E;this.An();},EB:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C2],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.NX={I:this},0);A.acg.Text._Init.call(this.Rh={I:this},
0);C.CH._Init.call(this.V={I:this},0);C.CH._Init.call(this.TP={I:this},0);A.acg.
Ap._Init.call(this.YB={I:this},0);A.acg.Ap._Init.call(this.AbF={I:this},0);C.CH.
_Init.call(this.PL={I:this},0);this.__proto__=C.AHa;this.H(AfA);this.Background.
AZ(0x3F);this.Background.H(AfA);this.NX.H(AYk);this.NX.R(A._GetAutoObject(A.acj.
DV).Aay());this.NX.A6(0x9);this.NX.L(A.jb.Text);this.Rh.H(AYl);this.Rh.A6(0x14);
this.Rh.R(A.aaR(A.acu.Akk));this.Rh.L(A.jb.Text);this.V.AZ(0x1D);this.V.H(AYm);this.
V.R(A.aaR(A.acf.Auv));this.V.A6(0x12);this.V.L(A.jb.Text);this.TP.H(Aaf);this.YB.
AZ(0x14);this.YB.H(AH$);this.YB.Cv(1);this.AbF.AZ(0x14);this.AbF.H(AH$);this.AbF.
Cv(0);this.PL.H(AYn);this.PL.R(A.aaR(A.acf.A4y));this.J(this.Background,0);this.
J(this.NX,0);this.J(this.Rh,0);this.J(this.V,0);this.J(this.TP,0);this.J(this.YB
,0);this.J(this.AbF,0);this.J(this.PL,0);this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.
aaL(A.fl.Af));this.NX.Cu(A.aaL(A.fl.Ii));this.Rh.S(A.aaL(A.fl.Aeq));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bh));this.TP.S(A.aaL(A.
fl.Af));this.TP.A2(A.aaL(A.fl.Ak));this.TP.Cu(A.aaL(A.fl.Bh));this.YB.Aw(A.aaL(A.
ach.ABI));this.AbF.Aw(A.aaL(A.ach.ABI));this.H5=A._NewObject(A.Device.Rating,0);
this.PL.S(A.aaL(A.fl.Af));this.PL.A2(A.aaL(A.fl.Ak));this.PL.Cu(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.NX._Done(
);this.Rh._Done();this.V._Done();this.TP._Done();this.YB._Done();this.AbF._Done(
);this.PL._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.NX._ReInit();this.Rh._ReInit();this.V.
_ReInit();this.TP._ReInit();this.YB._ReInit();this.AbF._ReInit();this.PL._ReInit(
);this.Rh.R(A.aaR(A.acu.Akk));this.V.R(A.aaR(A.acf.Auv));this.PL.R(A.aaR(A.acf.A4y
));this.NX.S(A.aaL(A.fl.EK));this.NX.A2(A.aaL(A.fl.Af));this.NX.Cu(A.aaL(A.fl.Ii
));this.Rh.S(A.aaL(A.fl.Aeq));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
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
B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVH={Animal:null,Rating:null,Cr:null,AD:null,AY:
0,Hg:function(G){var B;if(!this.Animal||!this.Rating)return;var Gc=this.AD.G0;var
Cz=(C.AHa.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Cz)return;Cz.EB([B=this.Animal
,B.PM,B.EB]);Cz.BlT([B=A._GetAutoObject(A.Device.Device),B.AEE,B.AIR]);Cz.BlU([B=
this.Rating,B.A84,B.OnSetTimestamp]);switch(Gc%this.AY){case 1:{Cz.ATu([B=this.Animal
,B.A8D,B.AFg]);Cz.ATv([B=this.Animal,B.A85,B.AFK]);Cz.T(A.aaR(A.acf.Auv));}break;
default:if(this.Animal.Arc()){Cz.ATu([B=this.Animal,B.ASo,B.AwF]);Cz.ATv([B=this.
Animal,B.ASF,B.Aw7]);Cz.T(A.aaR(A.acf.ALU));}else{Cz.ATu([B=this.Animal,B.ASo,B.
AwF]);Cz.ATv([B=this.Animal,B.ASF,B.Aw7]);Cz.T(A.aaR(A.acf.BgJ));}}if(this.AY>1)
Cz.A_j(true);else Cz.A_j(false);Cz.H(A.abK(Cz.M,[(B=this.AD.M)[2]-B[0],this.AD.GK
]));},DE:function(G){if(this.AY>0)switch(this.Cr.CO){case 6:this.CB(this);break;
case 7:this.Cl(this);break;default:this.Cr.NH=true;}},LY:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Ju(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Ju(1);else{this.Ju(2);this.AD.G2(1);this.
AD.HD(this.AD.Go,true,null,null);}if(this.AY>0)this.AD.AbH(0,this.AY-1);},AkD:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbH(0,this.AY-1);
},CB:function(G){if(this.AD.Go>0)this.AD.G2(this.AD.Go-1);else this.AD.G2(this.AY-
1);this.AD.HD(this.AD.Go,true,null,null);},Cl:function(G){if(this.AD.Go<(this.AY-
1))this.AD.G2(this.AD.Go+1);else this.AD.G2(0);this.AD.HD(this.AD.Go,true,null,null
);},Ju:function(E){if(this.AY===E)return;this.AY=E;this.AD.Ju(this.AY);A.abo([this
,this.Aru,this.Ju],0);},Aru:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BN._Init.call(this.Cr={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVH;this.H(AfA);this.Cr.Filter=147;this.
AD.AZ(0x3F);this.AD.H(AfA);this.AD.NZ(C.AHa);this.AD.Ae4(160);this.AD.G2(0);this.
AD.Ju(2);this.J(this.AD,0);this.Cr.BO=[this,this.DE];this.Cr.D1=[this,this.DE];this.
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
C.Eg;this.H(J0);this.V.H(BF);this.Zx(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeO={KJ:null,GG:A.jV,Bk:function(aSize){C.Eg.Bk.call(this,aSize);this.KJ.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KJ.
L(this.V.AQ);},Init:function(aArg){},Ab5:function(E){if(this.GG===E)return;this.
GG=E;this.KJ.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CH._Init.call(
this.KJ={I:this},0);this.__proto__=C.AeO;this.H(J0);this.Background.H(J0);this.V.
H(Aae);this.V.R(Lv);this.KJ.H(IR);this.KJ.R(AYo);this.J(this.KJ,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.KJ.S(A.aaL(A.fl.Af));this.
KJ.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KJ._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KJ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KJ.S(A.aaL(
A.fl.Af));this.KJ.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvY={ACa:null,Q:null,A1:null,AF:null,Ig:null,LU:null,Ap:null,EN:null,AN7:A.jV
,AN8:A.jV,Bk:function(aSize){C.AeO.Bk.call(this,aSize);if(!this.ACa)this.KJ.H([].
concat(0,this.KJ.M.slice(1,4)));else this.KJ.H([].concat(this.Ap.M[2],this.KJ.M.
slice(1,4)));},Ai:function(Ae){var F,CA,S7;C.AeO.Ai.call(this,Ae);var Bcp=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Aph)this.Ab5(this.AN7);else
this.Ab5(this.AN8);}else{this.Ab5(A._GetAutoObject(A.Device.Converter).Rf((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ig&&!!this.A1)&&!!this.AF)&&!!this.LU)&&(((F=this.
Ig,F[1].call(F[0]))===1)||(!(CA=this.Ig,CA[1].call(CA[0]))&&(S7=this.LU,S7[1].call(
S7[0])))))Bcp=true;}}this.EN.Z(Bcp);this.Ap.L(this.V.AQ);A.pe([this,this.Af7],this
);},C2:function(G){this.An();},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},AEY:function(E){if(this.ACa===E)return;this.ACa=E;this.
Ap.Aw(E);this.Bjb();},OM:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1)A.z$([
this,this.AaI],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.AaI],E,0);if(!!E)A.pe([
this,this.AaI],this);},PN:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaJ],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaJ],E,0);if(!!E)
A.pe([this,this.AaJ],this);},AaJ:function(G){this.An();},AaI:function(G){this.An(
);},Uh:function(E){if(A.aaZ(this.Ig,E))return;if(!!this.Ig)A.z$([this,this.AlY],
this.Ig,0);this.Ig=E;if(!!E)A.zX([this,this.AlY],E,0);if(!!E)A.pe([this,this.AlY
],this);},AlY:function(G){this.An();},Af7:function(G){var F,CA;if((!this.Ig||!this.
A1)||!this.AF)return;var A2s=this.KJ.Afd([(this.KJ.String.length-(F=this.AF,F[1].
call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3N=this.KJ.Afd([this.KJ.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABc=this.KJ.Db(0x0);this.EN.H([A2s[0]-
1,ABc[1],A3N[0]+1,ABc[3]]);},ArK:function(E){if(this.AN7===E)return;this.AN7=E;this.
An();},ArL:function(E){if(this.AN8===E)return;this.AN8=E;this.An();},Ae1:function(
E){if(A.aaZ(this.LU,E))return;if(!!this.LU)A.z$([this,this.A3a],this.LU,0);this.
LU=E;if(!!E)A.zX([this,this.A3a],E,0);if(!!E)A.pe([this,this.A3a],this);},A3a:function(
G){this.An();},_Init:function(aArg){C.AeO._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BU._Init.call(this.EN={I:this},0);this.__proto__=C.AvY;
this.Ap.H(AhR);this.EN.H(AYp);this.EN.Nh(2);this.EN.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EN,0);this.KJ.Q1([this,this.Af7]);},_Done:function(){this.__proto__=
C.AeO;this.Ap._Done();this.EN._Done();C.AeO._Done.call(this);},_ReInit:function(
){C.AeO._ReInit.call(this);this.Ap._ReInit();this.EN._ReInit();},_Mark:function(
D){var B;C.AeO._Mark.call(this,D);if((B=this.ACa)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ig)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={If:0,AaH:4,BdC:true,BdB:false,Bcw:true,Bdu:false,Al3:function(
G){C.Q8.Al3.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bdt()){this.If=A._GetAutoObject(
A.Device.Helper).Uw.Id;var Aiv=A._GetAutoObject(A.Device.Helper).AQ8(this.If);if(
Aiv)A._GetAutoObject(A.Device.Device).A9(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A3e]);else{this.AaH=A._GetAutoObject(A.Device.
Helper).AQ9(this.If);var BdZ=false;if((this.AaH===3)||(this.AaH===2))BdZ=A._GetAutoObject(
A.Device.Helper).A7c(this.If,A._GetAutoObject(A.Device.Helper).W);if(BdZ)A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(this.If),0,null
);else switch(this.AaH){case 2:{var BP=A._GetAutoObject(A.Device.Converter).AxO(
this.If);A._GetAutoObject(A.Device.Device).A9(46,true,BP.toFixed(),0,[this,this.
A3e]);}break;case 3:case 1:case 0:case 4:this.A33();break;default:throw new Error(
AIa+this.AaH.toFixed());}}}},Ev:function(G){A._GetAutoObject(C.A$).Fv();},AIS:function(
s){this.Ev(s);},A33:function(){if((this.AaH===3)||(this.AaH===2)){if((this.Bcw&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.If)){A._GetAutoObject(A.Device.Device).A9(69,true,A.jV,0,[this
,this.A3e]);return;}else this.BBz();}A._GetAutoObject(A.Device.Helper).W.Q2(this.
If);this.Bdu=true;this.BBB();this.Ev(this);},A3e:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At)switch(At.Id){case 46:if(At.PopupState===4)this.
A33();break;case 107:switch(At.PopupState){case 7:{this.A33();A._GetAutoObject(A.
Device.Helper).Bn7(this.If);}break;case 8:this.Ev(this);break;default:;}break;case
69:if(At.PopupState===4)this.Ev(this);break;default:A.ab5("%s%e",AIb,At.Id);}},BBz:
function(){A._GetAutoObject(A.Device.Helper).W.Ne(this.If);if(this.BdB&&(A._GetAutoObject(
A.Device.Converter).ZZ(this.If)===10)){var Bcb=Math.trunc((this.If%1000000000000
)/10000000000);if(!Bcb&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.EB(0);else if((Bcb===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.EB(2);}},BBB:function(){if(this.
BdC){A._GetAutoObject(A.Device.Helper).W.SA(A._GetAutoObject(A.Device.Helper).A4Q(
A._GetAutoObject(A.Device.Device).Ak3,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).Ak3===1)A._GetAutoObject(A.Device.Helper).A$F();
}},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dq(C.IG);this.Number.R(A.aaR(A.acf.OR));this.Jc.H(AYq);this.
IP.H(W2);this.AkF(1);this.N.CB=[this,this.AIS];this.N.CY(A.aaL(A.ach.E2));},_ReInit:
function(){C.Q8._ReInit.call(this);this.Number.R(A.aaR(A.acf.OR));},_className:"Application::SetTransponderScreen"
};C.ADl={Gj:null,Lm:null,Kp:null,CP:function(){this.An();},Init:function(aArg){this.
An();},Ai:function(Ae){C.EA.Ai.call(this,Ae);this.Lm.R(A._GetAutoObject(A.acj.DV
).AfZ());this.Kp.R(A._GetAutoObject(A.acj.DV).Aay());},_Init:function(aArg){C.EA.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gj={I:this},0);A.acg.Text._Init.
call(this.Lm={I:this},0);A.acg.Text._Init.call(this.Kp={I:this},0);this.__proto__=
C.ADl;this.Background.L(A.jb.Text);this.Gj.H(AYr);this.Gj.A6(0x11);this.Gj.R(A.aaR(
A.acf.Date));this.Gj.L(A.jb.Bm);this.Lm.H(AYs);this.Lm.A6(0x11);this.Lm.L(A.jb.Bm
);this.Kp.H(AYt);this.Kp.L(A.jb.Bm);this.J(this.Gj,0);this.J(this.Lm,0);this.J(this.
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
).S2(this.FS,2,true));this.H9.L(A._GetAutoObject(A.acj.DV).AzQ(this.FS,this.H$));
this.Mh.L(A._GetAutoObject(A.acj.DV).AzO(this.FS,this.H$));}this.Hl.L(this.V.AQ);
},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var AlA=this.AX.HF(
Ad,6);var Al8=this.AX.CE(Ad,8);if(this.Hn>0){var ByE=this.AX.HF(this.Hn-1,6);var
BBc=this.AX.CE(this.Hn-1,8);var LD=A._GetAutoObject(A.Device.Helper).MN(ByE,AlA);
if(!!LD){this.AiK=false;this.FS=A._GetAutoObject(A.acj.DV).Alx(LD,BBc,Al8);}else{
this.AiK=true;this.FS=0;}}else{this.AiK=true;this.FS=0;}this.T(A._GetAutoObject(
A.acj.KK).ACO(AlA));this.Hl.R(A._GetAutoObject(A.Device.Converter).Ak9(Al8));this.
H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.An();}},_Init:function(aArg
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
,KM:A.jV,CP:function(){this.An();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LD=
A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LD){var FS=A._GetAutoObject(
A.acj.DV).Alx(LD,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdN=A.aaR(A.acf.Bg7);AdN=A._GetAutoObject(
A.Device.Helper).Nk(AdN,P6,A._GetAutoObject(A.Device.Converter).S2(FS,2,true));AdN=
A._GetAutoObject(A.Device.Helper).Nk(AdN,Ax_,A._GetAutoObject(A.acj.DV).Aay());this.
SU.R(AdN);this.AhM.L(A._GetAutoObject(A.acj.DV).AzO(FS,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SU.L(A._GetAutoObject(A.acj.DV).AzQ(FS,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SU.R(A.aaR(A.acf.AVF));this.AhM.L(A.jb.
AQU);this.SU.L(A.jb.Text);}},CF:function(G){var Fs=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fs.CW(HV);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fs.CW(Ac_);A._GetAutoObject(A.Device.Device).Bt.Bl(
Fs);this.Axv(this);},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bl(null
);},Axv:function(G){this.Bj=A._NewObject(C.F$,0);this.Bj.NZ(C.AHe);this.Bj.H(Ayk
);this.Bj.Zs(A._GetAutoObject(A.Device.Device).Bt);this.Bj.Dz(this.KM);this.J(this.
Bj,0);this.Bb(this.Bj);},Anp:function(G){A._GetAutoObject(C.A$).Fv();},Dz:function(
E){if(this.KM===E)return;this.KM=E;if(!!this.Bj)this.Bj.Dz(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADl._Init.call(this.VX={I:this},0);A.acg.AL._Init.
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
Me={DO:null,AcA:null,ARx:11,Gu:0,A4P:true,ABP:false,IW:function(G){if(A._GetAutoObject(
A.Device.Device).Am.Ca()>0)this.Jv(4);else A._GetAutoObject(A.Device.Device).A9(
30,true,A.jV,0,null);},CF:function(G){if(this.DO.AzZ())this.DO.Ac8();else if((this.
Gu===2)&&A._GetAutoObject(A.Device.Helper).W.AqX())this.Jv(5);else this.Jv(1);},
E3:function(G){this.AK7();},Ev:function(G){this.Jv(0);A._GetAutoObject(C.A$).Fv(
);},BBQ:function(){A._GetAutoObject(A.Device.Device).AhE();},AK7:function(){A._GetAutoObject(
A.Device.Device).An1();},A9r:function(E){if(this.ABP===E)return;this.ABP=E;A.abo([
this,this.Bki,this.A9r],0);},Jv:function(E){var B;if(this.Gu===E)return;this.Gu=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkO();A.zX([this,this.AKw]
,[B=A._GetAutoObject(A.Device.Helper),B.Arv,B.AkE],0);A.z$([this,this.AAq],[B=this.
DO,B.Anw,B.Jv],0);this.BBQ();}break;case 3:{A.z$([this,this.AKw],[B=A._GetAutoObject(
A.Device.Helper),B.Arv,B.AkE],0);this.AK7();this.BzO();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Asn();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4P)this.BBC();else this.BBF();}break;case 4:{A.z$([this,this.AKw],[B=A._GetAutoObject(
A.Device.Helper),B.Arv,B.AkE],0);this.AK7();A._GetAutoObject(A.Device.Helper).Asn(
);A.zX([this,this.BeI],[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyM],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARx);}break;case 5:this.Bf3();break;case
6:{A.zX([this,this.AAq],[B=this.DO,B.Anw,B.Jv],0);this.DO.Ac8();}break;case 0:{A.
z$([this,this.AKw],[B=A._GetAutoObject(A.Device.Helper),B.Arv,B.AkE],0);this.AK7(
);}break;default:throw new Error(Ayq);}A.abo([this,this.Anw,this.Bwg],0);},Bwg:function(
Aq){this.Jv(Aq);},AKw:function(G){if(!!A._GetAutoObject(A.Device.Helper).Uw){if(
this.Gu===1)this.Jv(3);else A.ab5("%s%e",AYu,this.Gu);}else A.ab5("%s",AIe);},BBC:
function(){A._GetAutoObject(A.Device.Device).A9(13,true,A._GetAutoObject(A.Device.
Helper).Ak5(A._GetAutoObject(A.Device.Helper).Uw.Id).toFixed(),0,[this,this.Bz2]
);},Bz2:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
At&&((At.PopupState===4)||(At.PopupState===3))){if(this.BcA(false))A._GetAutoObject(
C.A$).Cg(31);else{A._GetAutoObject(A.Device.Helper).AkO();this.Jv(1);}}else if(!
!At&&(At.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkO();this.Jv(1);}},
BcA:function(AiZ){if(A._GetAutoObject(A.Device.Device).Am.Lh()){A._GetAutoObject(
A.Device.Device).A9(41,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gm();A._GetAutoObject(
A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.Q2(A._GetAutoObject(A.Device.Helper).Uw.Id);if(!!A._GetAutoObject(A.Device.
Helper).AhA){var AlK=A._GetAutoObject(A.Device.Helper).AhA.AOR();A._GetAutoObject(
A.Device.Helper).W.Ab6(AlK);A._GetAutoObject(A.Device.Helper).W.AnE(AlK);}if(A._GetAutoObject(
A.Device.Helper).AQ9(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Ne(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SA(A._GetAutoObject(A.Device.Helper).BgT(A._GetAutoObject(A.Device.
Device).Ags,A._GetAutoObject(A.Device.Helper).W));if(AiZ){A._GetAutoObject(A.Device.
Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);var L6=A._GetAutoObject(A.Device.
Device).Am.Lc(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SJ(L6);if(A._GetAutoObject(A.Device.Helper).Am6()){if(A._GetAutoObject(A.
Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abr(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Ags)A._GetAutoObject(
A.Device.Helper).A$F();}return true;},BzO:function(){if(!!A._GetAutoObject(A.Device.
Helper).Uw){var AJj=true;if(A._GetAutoObject(A.Device.Helper).Uw.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJj=A._GetAutoObject(A.Device.Helper).A7o(A._GetAutoObject(
A.Device.Helper).Uw.Id);if(!AJj&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.BcA(true);AJj=A._GetAutoObject(A.Device.Helper).A7o(A._GetAutoObject(A.
Device.Helper).Uw.Id);}}if(AJj)this.Jv(5);else this.Jv(2);}else{A.ab5("%s",AIe);
return;}},BeI:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARx){A.z$([this,this.BeI],[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyM
],0);if(A._GetAutoObject(A.Device.Helper).W.AqX())this.Jv(5);else this.Jv(1);}},
Bf3:function(){if(this.ABP===true)this.Jv(6);else A._GetAutoObject(C.A$).Cg(24);
},BBF:function(){A._GetAutoObject(A.Device.Device).A9(36,true,A.jV,0,[this,this.
BAS]);},BAS:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&((At.PopupState===4)||(At.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkO();this.Jv(1);}},AAq:function(G){if(!this.DO.Gu)this.Jv(1);},A24:function(G
){},Bwq:function(s){this.A24(s);},Bki:function(){return this.ABP;},Anw:function(
){return this.Gu;},_Init:function(aArg){C.Q8._Init.call(this,aArg);A.acg.Text._Init.
call(this.AcA={I:this},0);this.__proto__=C.Me;this.N.Z(true);this.Dq(C.AqY);this.
Number.H(AYv);this.Number.R(A.aaR(A.acf.A_8));this.Jc.H(AYw);this.IP.H(AYx);this.
AcA.H(AYy);this.AcA.R(AYz);this.AcA.L(A.jb.Text);this.J(this.AcA,0);this.N.CB=[this
,this.Ev];this.N.Ck=[this,this.Bwq];this.N.CY(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.AcA.S(A.aaL(A.fl.Hr));this.DO=A._GetAutoObject(C.DO);},_Done:function(
){this.__proto__=C.Q8;this.AcA._Done();C.Q8._Done.call(this);},_ReInit:function(
){C.Q8._ReInit.call(this);this.AcA._ReInit();this.Number.R(A.aaR(A.acf.A_8));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q8._Mark.call(this,D);if((B=
this.DO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4C={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Apc:-1,Gu:0,BxR:function(){var BfI=false;
var Oi=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.
Device.Device).Bt.HG().toFixed(),0,null);else if(Oi){BfI=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axr(B1,5);B1.OnSetAppearance(3);B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axr(B1
,5);B1.OnSetAppearance(1);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.EM(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).Am);if(BfI)A._GetAutoObject(A.Device.Helper).W.Ul(false);if(Oi)A.
_GetAutoObject(A.Device.Helper).W.AnV(false);else A._GetAutoObject(A.Device.Helper
).W.AnV(true);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).Am);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A9(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A9(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BxT:function(){A._GetAutoObject(
A.Device.Helper).W.AGA(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A9(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);else A._GetAutoObject(
A.Device.Device).A9(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);},Qh:function(ED){switch(ED){case 4:this.BxR();break;case
128:A._GetAutoObject(C.A$).Cg(7);break;case 16:A._GetAutoObject(C.A$).Cg(36);break;
case 1:A._GetAutoObject(C.A$).Cg(10);break;case 2:A._GetAutoObject(C.A$).Cg(11);
break;case 8:this.BxT();break;case 64:A._GetAutoObject(C.A$).Cg(29);break;case 32:
A._GetAutoObject(C.A$).Cg(48);break;case 256:A._GetAutoObject(C.A$).Cg(21);break;
case 512:A._GetAutoObject(C.A$).Cg(30);break;case 1024:this.BzL();break;case 262144:
this.BB6();break;case 2048:this.Ac8();break;case 4096:this.Bcs(false);break;case
8192:this.BxS();break;case 16384:this.BzK();break;case 32768:this.Byg();break;case
524288:this.Byh();break;case 65536:this.ByH();break;case 131072:this.BBt();break;
case 0:break;default:throw new Error(AYA);}},BcC:function(ED,Bxm){var EQ=A._NewObject(
C.Wh,0);EQ.Ab4(false);EQ.Aj(true);EQ.AR=Bxm;EQ.Blq(ED);switch(ED){case 1:{EQ.T(A.
aaR(A.acf.An3));EQ.DB(A.aaL(A.ach.ALK));}break;case 2:{EQ.T(A.aaR(A.acf.A_R));EQ.
DB(A.aaL(A.ach.ALL));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DB(A.aaL(A.ach.ALM
));EQ.AFw(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asa));EQ.DB(A.aaL(A.ach.ALN));EQ.
AFw(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMj));EQ.DB(A.aaL(A.ach.ALO));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DB(A.aaL(A.ach.ALP));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DB(A.aaL(A.ach.ALQ));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DB(A.aaL(A.ach.ALR));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DB(A._GetAutoObject(A.acj.DV).Bzk());}break;case 512:{EQ.T(A.aaR(A.acf.ARW));
EQ.DB(A.aaL(A.ach.ALC));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DB(A.aaL(A.ach.ALD));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DB(A.aaL(A.ach.ALJ));}break;case 2048:{EQ.T(A.aaR(A.acf.Tt));EQ.DB(A.aaL(A.ach.ALE
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DB(A.aaL(A.ach.ALF));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DB(A.aaL(A.ach.ALG));EQ.AFw(true);}break;case
16384:{EQ.T(A.aaR(A.acf.Bh9));EQ.DB(A.aaL(A.ach.ALH));}break;case 131072:{EQ.T(A.
aaR(A.acf.Boh));EQ.DB(A.aaL(A.ach.ALI));}break;default:A.ab5("%s",(AYB+ED.toFixed(
))+AYC);}return EQ;},ByU:function(){this.Apc=this.Apc+1;if(this.Apc>=this.AutoActions.
NP())this.Jv(0);else this.Jv(2);},BBg:function(){this.Apc=-1;},AzZ:function(){return(
this.Apc>-1)&&!this.BzE();},BzE:function(){return this.Apc>=this.AutoActions.NP(
);},Jv:function(E){if(this.Gu===E)return;this.Gu=E;switch(E){case 1:this.ByU();break;
case 2:{var Aap=this.AutoActions.OD(this.Apc);if(this.A4z(A._GetAutoObject(A.Device.
Helper).W,Aap))this.Qh(Aap);else A._GetAutoObject(A.Device.Device).A9(64,true,(this.
ActionToString.Lt(Aap)+As8)+this.AnimalTypeToString.Lt(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MT]);}break;case 0:this.BBg();break;default:throw new
Error(Ayq);}A.abo([this,this.Anw,this.Jv],0);},MT:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;if((At.Id===63)&&(At.PopupState===7))this.
Bcs(true);if((At.Id===32)&&(At.PopupState===7))A._GetAutoObject(C.A$).Cg(45);if((((
At.PopupState===4)||(At.PopupState===3))||(At.PopupState===8))&&this.AzZ())this.
Jv(1);},Bcu:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).Am.Lc(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BzL:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A$).Cg(
45);else A._GetAutoObject(A.Device.Device).A9(32,true,A.jV,0,[this,this.MT]);},Ac8:
function(){this.Jv(1);},BBe:function(){var Oi=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oi&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device
).Bt.HG().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gm();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axr(B1,5);B1.Cq(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.EM(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).Am);A._GetAutoObject(A.Device.Helper).W.Ul(false);if(Oi)A._GetAutoObject(
A.Device.Helper).W.AnV(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(
A.Device.Device).Am);A._GetAutoObject(A.Device.Device).A9(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BBf:function(){A._GetAutoObject(
A.Device.Helper).W.AGA(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(
A.Device.Device).Am);A._GetAutoObject(A.Device.Device).A9(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bcs:function(ByY){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(ByY===false))A._GetAutoObject(A.Device.
Device).A9(63,true,A.jV,0,[this,this.MT]);else A._GetAutoObject(C.A$).Cg(54);},BxS:
function(){A._GetAutoObject(A.Device.Helper).W.ArT(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).Am);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A9(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A9(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BzK:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A$).Cg(81);else A._GetAutoObject(A.
Device.Device).A9(69,true,A.jV,0,[this,this.MT]);},Byg:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ahl(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).Am);A._GetAutoObject(A.Device.Device).A9(65,true,A.jV,2000,[this,this.MT
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae2(false);A._GetAutoObject(A.Device.
Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);A._GetAutoObject(A.Device.Device
).A9(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);}}},ByH:function(){A._GetAutoObject(A.Device.Helper).W.Ahl(false);A._GetAutoObject(
A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ahl(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).Am);A._GetAutoObject(A.Device.Device).A9(65,true,A.jV,2000,[this,this.MT
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A9(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);else A._GetAutoObject(A.Device.Device).A9(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},A4z:function(Et,ED
){var Qr=false;switch(ED){case 32768:Qr=Et.IsRegistrationNoticePending&&!!Et.NaisIdMother;
break;case 524288:Qr=Et.IsRegistrationNoticePending&&!Et.NaisIdMother;break;case
4096:case 8192:switch(Et.AnimalType){case 1:Qr=true;break;default:;}break;case 512:
switch(Et.AnimalType){case 0:Qr=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qr=true;break;default:A.ab5("%s",AYD+
ED.toFixed());}return Qr;},BBt:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A$).Cg(80);else A._GetAutoObject(A.Device.Device).A9(
69,true,A.jV,0,[this,this.MT]);},BB6:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A9(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MT]);else{A._GetAutoObject(A.
Device.Helper).W.Q2(0);A._GetAutoObject(A.Device.Helper).W.SA(A._GetAutoObject(A.
Device.Helper).A4Q(A._GetAutoObject(A.Device.Device).An8,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device
).Am);A._GetAutoObject(A.Device.Device).A9(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MT]);}},Byh:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae2(false);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.
Device).Am);A._GetAutoObject(A.Device.Device).A9(98,true,A._GetAutoObject(A.Device.
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
};C.ALW={Aa2:null,Aqk:null,Jv:function(E){if(this.Gu===E)return;C.Me.Jv.call(this
,E);switch(E){case 1:this.Dq(C.AqY);break;case 5:case 6:this.Dq(C.IG);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayq);}},A24:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Me._Init.call(this
,aArg);A.acg.Text._Init.call(this.Aa2={I:this},0);C.ALX._Init.call(this.Aqk={I:this
},0);this.__proto__=C.ALW;this.A9r(true);this.Aa2.H(AYE);this.Aa2.R(A.aaR(A.acf.
Tt));this.Aa2.L(A.jb.Text);this.Aqk.H(AYF);this.J(this.Aa2,0);this.J(this.Aqk,0);
this.N.Cs(A.aaL(A.ach.AbD));this.Aa2.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Me;this.Aa2._Done();this.Aqk._Done();C.Me._Done.call(this);},_ReInit:function(
){C.Me._ReInit.call(this);this.Aa2._ReInit();this.Aqk._ReInit();this.Aa2.R(A.aaR(
A.acf.Tt));this.Aa2.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Me._Mark.call(
this,D);if((B=this.Aa2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqk)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
H_:null,JY:null,A24:function(G){if(this.H_.NU(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Me._Init.call(this,aArg);A.acg.Text._Init.call(this.
JY={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JY.H(AYG);this.JY.KS(
true);this.JY.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABD));this.
JY.L(A.jb.Text);this.J(this.JY,0);this.N.Cs(A.aaL(A.ach.AbD));this.JY.S(A.aaL(A.
fl.Af));this.H_=A._GetAutoObject(C.Ph);},_Done:function(){this.__proto__=C.Me;this.
JY._Done();C.Me._Done.call(this);},_ReInit:function(){C.Me._ReInit.call(this);this.
JY._ReInit();this.JY.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABD
));this.JY.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Me._Mark.call(this,D);if((
B=this.H_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JY)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALX={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABo],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Auu],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABo],this);
A.pe([this,this.Auu],this);this.H(A.abK(this.M,AYH));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYI)));},Bci:function(G){var B;var Aly=0;var Azq=0;
var Bcy;var X=this.Y.Ah;var Cx=null;Bcy=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NP()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.Wh.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cx){Cx.H(A.abK(Cx.M,AYJ));Cx.H(A.abM(Cx.M
,(Azq*58)+Bcy));Cx.H(A.abO(Cx.M,Aly*58));if(Azq>=3){Aly=Aly+1;Azq=0;}else Azq=Azq+
1;}X=X.Ah;}this.Bb(null);},A1s:function(ED){var EQ=A._GetAutoObject(C.DO).BcC(ED
,null);this.J(EQ,0);this.Bci(this);},Ao3:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdL=X;X=X.Ah;if(((AdL.U&0x400)===0x400))this.HN(
AdL);}},ABo:function(G){this.Ao3();var O;var CD=A._GetAutoObject(C.AutoActions).
NP();for(O=0;O<CD;O=O+1){var Aap=A._GetAutoObject(C.AutoActions).OD(O);this.A1s(
Aap);}A.pe([this,this.Bci],this);A.pe([this,this.Auu],this);A.pe([this,this.BCe]
,this);},Auu:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)
){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(X)?X:null);Aa.AFw(false);
}X=X.Ah;}},BCe:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){var Aa=(C.Wh.isPrototypeOf(X)?X:null);var Bx8=A._GetAutoObject(
C.AutoActions).NP();if(!!Aa){var O;Aa.A9n(false);for(O=0;O<Bx8;O=O+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OD(O)){Aa.A9n(true);Aa.Bmy(AYK+(O+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.ALX;this.Y.JP(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Y._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DO={_Init:function(
){C.A4C._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APA={Ll:null,T3:null,Init:function(aArg){this.Ll.R(A._GetAutoObject(
A.acj.Temperature).AlJ());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.
Text._Init.call(this.Ll={I:this},0);C.CH._Init.call(this.T3={I:this},0);this.__proto__=
C.APA;this.Ll.H(AYL);this.Ll.A6(0x12);this.Ll.L(A.jb.Text);this.T3.H(Aou);this.T3.
R((A.aaR(A.acf.Ahd)+AIf)+A.aaR(A.acf.Ki));this.T3.A6(0x12);this.T3.L(A.jb.Text);
this.J(this.Ll,0);this.J(this.T3,0);this.Ll.S(A.aaL(A.fl.Af));this.T3.S(A.aaL(A.
fl.Ak));this.T3.A2(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dc;this.Ll._Done();this.T3._Done();C.Dc._Done.call(this);},_ReInit:function(){
C.Dc._ReInit.call(this);this.Ll._ReInit();this.T3._ReInit();this.T3.R((A.aaR(A.acf.
Ahd)+AIf)+A.aaR(A.acf.Ki));this.Ll.S(A.aaL(A.fl.Af));this.T3.S(A.aaL(A.fl.Ak));this.
T3.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.
Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ADj={Jt:null,D0:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.call(this.Jt={I:this}
,0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=C.ADj;this.Jt.H(AYM
);this.Jt.KS(true);this.Jt.A6(0x14);this.Jt.R(A.aaR(A.acf.AhL)+AIg);this.Jt.L(A.
jb.Text);this.D0.H(Aou);this.D0.KS(true);this.D0.R(A.aaR(A.acf.AF5));this.D0.L(A.
jb.Text);this.J(this.Jt,0);this.J(this.D0,0);this.Jt.S(A.aaL(A.fl.Ak));this.D0.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dc;this.Jt._Done();this.D0._Done(
);C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Jt._ReInit(
);this.D0._ReInit();this.Jt.R(A.aaR(A.acf.AhL)+AIg);this.D0.R(A.aaR(A.acf.AF5));
this.Jt.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D0
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TS={I6:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.
I6={I:this},0);this.__proto__=C.TS;this.I6.H(AIh);this.I6.R((((A.aaR(A.acf.RJ)+Aai
)+AIi)+A.aaR(A.acf.A$T))+Oa);this.I6.A6(0x12);this.I6.L(A.jb.Text);this.J(this.I6
,0);this.I6.S(A.aaL(A.fl.Af));this.I6.A2(A.aaL(A.fl.Ak));this.I6.Cu(A.aaL(A.fl.Bh
));},_Done:function(){this.__proto__=C.Dc;this.I6._Done();C.Dc._Done.call(this);
},_ReInit:function(){C.Dc._ReInit.call(this);this.I6._ReInit();this.I6.R((((A.aaR(
A.acf.RJ)+Aai)+AIi)+A.aaR(A.acf.A$T))+Oa);this.I6.S(A.aaL(A.fl.Af));this.I6.A2(A.
aaL(A.fl.Ak));this.I6.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(
this,D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APC={Lm:null,Kp:null,CP:function(){this.A__();},Init:function(aArg){this.A__(
);},A__:function(){this.Lm.R(A._GetAutoObject(A.acj.DV).AfZ());this.Kp.R(A._GetAutoObject(
A.acj.DV).Aay());},_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lm={I:this},0);C.CH._Init.call(this.Kp={I:this},0);this.__proto__=C.APC;
this.Lm.H(AYN);this.Lm.A6(0x12);this.Lm.L(A.jb.Text);this.Kp.H(Aou);this.Kp.L(A.
jb.Text);this.J(this.Lm,0);this.J(this.Kp,0);this.Lm.S(A.aaL(A.fl.Af));this.Kp.S(
A.aaL(A.fl.Af));this.Kp.A2(A.aaL(A.fl.Ak));this.Kp.Cu(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dc;this.Lm._Done();this.Kp._Done();C.Dc.
_Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.Lm._ReInit();
this.Kp._ReInit();this.Lm.S(A.aaL(A.fl.Af));this.Kp.S(A.aaL(A.fl.Af));this.Kp.A2(
A.aaL(A.fl.Ak));this.Kp.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.
Dc._Mark.call(this,D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kp
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AM$={Mh:null,Hl:null,H9:null,AP:null,A_:null,FS:0,AaE:0,H$:0,AiK:false,Init:function(
aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hl.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hl.M[2]-1,0,this.Hl.M[2]+1,aSize[
1]]);this.Mh.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H9.H(this.Mh.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiK){this.H9.R(Rl);this.H9.L(A.jb.
Text);this.Mh.L(this.Background.AQ);}else{this.H9.R(A._GetAutoObject(A.Device.Converter
).S2(this.FS,2,true));this.H9.L(A._GetAutoObject(A.acj.DV).AzQ(this.FS,this.H$));
this.Mh.L(A._GetAutoObject(A.acj.DV).AzO(this.FS,this.H$));}if(this.AaE>0)this.Hl.
R(A._GetAutoObject(A.Device.Converter).Ak9(this.AaE));else this.Hl.R(Rl);this.Hl.
L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Md=
this.AX.CE(Ad,1);var Aup=this.AX.HF(Ad,24);var AJ5=this.AX.CE(Ad,23);var Auq=this.
AX.HF(Ad,19);this.AaE=this.AX.CE(Ad,18);if((Aup>0)&&(Aup!==Auq)){var LD=A._GetAutoObject(
A.Device.Helper).MN(Aup,Auq);if(!!LD){this.AiK=false;this.FS=A._GetAutoObject(A.
acj.DV).Alx(LD,AJ5,this.AaE);}else{this.AiK=true;this.FS=0;}}else{this.AiK=true;
this.FS=0;}this.T(Md.toFixed());this.H$=this.AX.AmU(Ad,14);this.An();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mh={I:this},0);A.acg.Text.
_Init.call(this.Hl={I:this},0);A.acg.Text._Init.call(this.H9={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0);this.__proto__=
C.AM$;this.V.H(O4);this.Mh.H(As_);this.Hl.H(AIc);this.Hl.A6(0x12);this.Hl.R(Rj);
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
AX.H1(Ad,11);var Ay_=this.AX.HF(Ad,4);var AfM=A._GetAutoObject(A.Device.Helper).
MN(Ay_,A._GetAutoObject(A.Device.Helper).Dv());this.Xm=A._GetAutoObject(A.Device.
Helper).AMg(LQ,AlN,AlE);this.T(Md.toFixed());if(AfM<100)this.Gv.R((AfM.toFixed()+
CQ)+A.aaR(A.acf.ALV));else this.Gv.R(A._GetAutoObject(A.acj.KK).ACP(Ay_,A._GetAutoObject(
A.Device.Helper).Dv(),AIj));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Mg={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.Gv={I:this
},0);this.__proto__=C.M2;this.Mg.H(As_);this.Background.H(AYO);this.V.H(O4);this.
AP.H(Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.A_.L(A.jb.Bc);this.Gv.H(Ayr);this.
J(this.Mg,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Gv,0);this.Gv.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mg._Done(
);this.AP._Done();this.A_._Done();this.Gv._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mg._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.Gv._ReInit();this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AM9={Ajx:null,N8:null,AP:null,A_:null,Jo:null,AKo:0,A2r:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N8.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajx.H(this.N8.M);this.A_.H([this.N8.M[2]-1,0,this.N8.M[2]+1,aSize[1]]);
this.Jo.H([this.N8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jo.De(this.V.AQ);if(this.AKo>0){this.Ajx.L(A._GetAutoObject(A.acj.Assessment
).Qj(this.A2r));this.N8.L(A._GetAutoObject(A.acj.Assessment).Xv(this.A2r));}else{
this.Ajx.L(this.Background.AQ);this.N8.L(this.V.AQ);}},Ce:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){var Iw=this.AX.CE(Ad,0);var Md=this.AX.CE(Ad,
1);this.AKo=this.AX.CE(Ad,5);this.A2r=this.AX.I2(Ad,17);this.T(Md.toFixed());if(
this.AKo>0)this.N8.R(A._GetAutoObject(A.Device.Converter).Ak0(this.AKo));else this.
N8.R(Rl);var Xl=A._GetAutoObject(A.Device.Helper).ZQ(6);A._GetAutoObject(A.Device.
Device).SJ(Ad);var A0D=A._GetAutoObject(A.Device.Helper).Bix(A._GetAutoObject(A.
Device.Device).Bt,9,Iw,Xl,0);this.Jo.A9F(A0D.Get(3));this.Jo.A9H(A0D.Get(2));this.
Jo.A9G(A0D.Get(1));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.Ajx={I:this},0);A.acg.Text._Init.call(this.N8={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},
0);C.Jo._Init.call(this.Jo={I:this},0);this.__proto__=C.AM9;this.N8.A6(0x12);this.
N8.R(Rj);this.N8.L(A.jb.Text);this.AP.H(Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.
A_.L(A.jb.Bc);this.Jo.H(AYP);this.J(this.Ajx,0);this.J(this.N8,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jo,0);this.N8.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ajx._Done();this.N8._Done();this.AP.
_Done();this.A_._Done();this.Jo._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ajx._ReInit();this.N8._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jo._ReInit();this.N8.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jo)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jo={Afm:null,
ColoredCounterAttrSet:null,ACf:0,ACg:0,ACe:0,KT:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKf;var ALB;var AKM;var AlV=0;if(this.ACe>0){AKf=this.ACe.toFixed(
);AlV+=AKf.length;}else{AKf=AYQ;AlV++;}if(this.ACg>0){ALB=this.ACg.toFixed();AlV+=
ALB.length;}else{ALB=Ays;AlV++;}if(this.ACf>0){AKM=this.ACf.toFixed();AlV+=AKM.length;
}else{AKM=AH9;AlV++;}if(AlV<=4)this.ColoredCounterAttrSet.Ahj(A.aaL(A.fl.Af));else
if(AlV<=5)this.ColoredCounterAttrSet.Ahj(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahj(A.aaL(A.fl.Bh));this.Afm.R(((((AYR+AKf)+AYS)+ALB)+AYT)+AKM);},A9G:function(E
){if(this.ACf===E)return;this.ACf=E;this.An();},A9H:function(E){if(this.ACg===E)
return;this.ACg=E;this.An();},A9F:function(E){if(this.ACe===E)return;this.ACe=E;
this.An();},De:function(E){if(this.KT===E)return;this.KT=E;this.ColoredCounterAttrSet.
Ahg(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuM._Init.call(
this.Afm={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jo;this.H(AIk);this.Afm.AZ(0x3F);this.Afm.H(AIk);this.
Afm.R(Rj);this.ColoredCounterAttrSet.BlC(A.jb.E1);this.ColoredCounterAttrSet.A9w(
A.jb.H6);this.ColoredCounterAttrSet.A9v(A.jb.Gf);this.ColoredCounterAttrSet.Ahg(
A.jb.Text);this.KT=A.jb.Text;this.J(this.Afm,0);this.Afm.A9q(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahj(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9s(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afm._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afm._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahj(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AM8={AtC:null
,Acd:null,Ace:null,Acf:null,Jo:null,AP:null,A_:null,Ea:null,Ls:null,AcC:null,KU:
null,KV:null,AJq:0,AJp:0,AJo:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acd.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcC.H(this.
Acd.M);this.A_.H([this.Acd.M[2]-1,0,this.Acd.M[2]+1,aSize[1]]);this.Ace.H([this.
Acd.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KU.H(this.Ace.M);this.Ea.H([this.
Ace.M[2]-1,0,this.Ace.M[2]+1,aSize[1]]);this.Acf.H([this.Ace.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KV.H(this.Acf.M);this.Ls.H([this.Acf.M[2]-1,0,this.Acf.
M[2]+1,aSize[1]]);this.Jo.H([this.Acf.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jo.De(this.V.AQ);this.Acd.L(A._GetAutoObject(A.acj.
Assessment).Qj(this.AJo));this.Ace.L(A._GetAutoObject(A.acj.Assessment).Qj(this.
AJp));this.Acf.L(A._GetAutoObject(A.acj.Assessment).Qj(this.AJq));this.AcC.L(A._GetAutoObject(
A.acj.Assessment).Xv(this.AJo));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xv(
this.AJp));this.KV.L(A._GetAutoObject(A.acj.Assessment).Xv(this.AJq));this.AcC.Z(
!this.AJo);this.KU.Z(!this.AJp);this.KV.Z(!this.AJq);this.Jo.A9F(this.AtC.Get(3)
);this.Jo.A9H(this.AtC.Get(2));this.Jo.A9G(this.AtC.Get(1));},Ce:function(Ad){if(
!this.AX)return;this.Hn=Ad;if(!!this.AX){var Iw=this.AX.CE(Ad,0);var Md=this.AX.
CE(Ad,1);this.T(Md.toFixed());A._GetAutoObject(A.Device.Device).SJ(Ad);this.AJo=
A._GetAutoObject(A.Device.Helper).A15(A._GetAutoObject(A.Device.Device).Bt,Iw,0);
this.AJp=A._GetAutoObject(A.Device.Helper).A15(A._GetAutoObject(A.Device.Device).
Bt,Iw,-1);this.AJq=A._GetAutoObject(A.Device.Helper).A15(A._GetAutoObject(A.Device.
Device).Bt,Iw,-2);this.AtC=A._GetAutoObject(A.Device.Helper).A6v(A._GetAutoObject(
A.Device.Device).Bt,Iw,0,0);this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Acd={I:this},0);A.acg.AL._Init.call(this.Ace={I:
this},0);A.acg.AL._Init.call(this.Acf={I:this},0);C.Jo._Init.call(this.Jo={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this
},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.Ls={I:this
},0);A.acg.Text._Init.call(this.AcC={I:this},0);A.acg.Text._Init.call(this.KU={I:
this},0);A.acg.Text._Init.call(this.KV={I:this},0);this.__proto__=C.AM8;this.AP.
L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Ls.L(A.jb.Bc);this.AcC.R(Aov
);this.KU.R(Aov);this.KV.R(Aov);this.J(this.Acd,0);this.J(this.Ace,0);this.J(this.
Acf,0);this.J(this.Jo,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.
J(this.Ls,0);this.J(this.AcC,0);this.J(this.KU,0);this.J(this.KV,0);this.AcC.S(A.
aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.AtC=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acd._Done();this.Ace._Done();this.Acf._Done();this.Jo._Done();this.AP.
_Done();this.A_._Done();this.Ea._Done();this.Ls._Done();this.AcC._Done();this.KU.
_Done();this.KV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acd._ReInit();this.Ace._ReInit();this.Acf._ReInit();this.Jo._ReInit(
);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Ls._ReInit();this.AcC.
_ReInit();this.KU._ReInit();this.KV._ReInit();this.AcC.S(A.aaL(A.fl.Af));this.KU.
S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acd).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmX={H4:null,Af0:false,Bk:function(aSize){var
B;this.H4.H([(aSize[0]-((B=this.H4.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H4.M[0]-10,40]);C.TD.Bk.call(this,aSize);},Ai:function(Ae){C.TD.Ai.call(
this,Ae);if(this.Af0)this.H4.Cv(1);else this.H4.Cv(0);},J$:function(G){if(this.Af0
)C.TD.J$.call(this,G);},J6:function(G){if(this.Af0)C.TD.J6.call(this,G);},To:function(
AH){C.TD.To.call(this,AH);if(!!AH){this.H(A.abI(this.M,80));this.Af0=true;this.Zx(
true);}else{this.H(A.abI(this.M,40));this.Af0=false;this.Zx(false);}},_Init:function(
aArg){C.TD._Init.call(this,aArg);A.acg.Ap._Init.call(this.H4={I:this},0);this.__proto__=
C.AmX;this.V.A6(0x11);this.H4.H(AHG);this.H4.Cv(0);this.J(this.H4,0);this.V.Cu(A.
aaL(A.fl.Bh));this.H4.Aw(A.aaL(A.ach.AqN));},_Done:function(){this.__proto__=C.TD;
this.H4._Done();C.TD._Done.call(this);},_ReInit:function(){C.TD._ReInit.call(this
);this.H4._ReInit();this.V.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TD._Mark.
call(this,D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AF4={_Init:function(aArg){C.Axi._Init.call(this,aArg);this.__proto__=C.AF4;}
,_className:"Application::OptionsOverlaySeparator"};C.AkH={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axi._Init.call(this,aArg);this.__proto__=C.AkH;},_className:"Application::OptionsOverlayNode"
};C.Zz={AR:null,_Init:function(aArg){C.AkH._Init.call(this,aArg);this.__proto__=
C.Zz;},_Mark:function(D){var B;C.AkH._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANC={Ai:function(Ae){C.OV.Ai.call(this,Ae);var FN=A.jb.CK;var GQ=A.jb.Text;if(
this.Hf){FN=A.jb.Text;GQ=A.jb.Bm;}this.Background.L(FN);this.V.L(GQ);},_Init:function(
aArg){C.OV._Init.call(this,aArg);this.__proto__=C.ANC;},_className:"Application::DarkThemeTextItem"
};C.OV={Background:null,BU:null,V:null,Aqu:0,Hf:false,Init:function(aArg){},Bk:function(
aSize){C.Hc.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BU.H(A.abK(this.BU.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hc.Ai.call(this,Ae);this.BU.L(this.Aqu);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bg:function(E){if(this.Hf===E)return;this.Hf=E;this.An();
},ArJ:function(E){if(this.Aqu===E)return;this.Aqu=E;this.An();},_Init:function(aArg
){C.Hc._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);C.CH._Init.call(this.V={I:this},0);this.__proto__=
C.OV;this.H(BF);this.Background.H(AIl);this.BU.H(BF);this.BU.Nh(2);this.BU.L(A.jb.
Re);this.V.H(AYU);this.Aqu=A.jb.Re;this.J(this.Background,0);this.J(this.BU,0);this.
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
O3);this.Background.H(O3);this.Eq.H(Ayt);this.Eq.R(A.aaR(A.acf.GJ));this.Eq.A6(0x11
);this.Eq.L(A.jb.Text);this.IK.AZ(0x3F);this.IK.H(AIm);this.IK.Hh(5);this.IK.A6(
0x14);this.IK.R(A.aaR(A.acf.AGN));this.IK.L(A.jb.Text);this.J(this.Eq,0);this.J(
this.IK,0);this.Eq.S(A.aaL(A.fl.Af));this.IK.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EA;this.Eq._Done();this.IK._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Eq._ReInit();this.IK._ReInit();this.Eq.R(
A.aaR(A.acf.GJ));this.IK.R(A.aaR(A.acf.AGN));this.Eq.S(A.aaL(A.fl.Af));this.IK.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Eq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sj:null,Sk:null,AeA:null,AgY:null,QG:null
,KT:0,LastTemperature:0,AqA:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sj.Aw(A.aaL(A.ach.AvC));this.Sk.Aw(A.aaL(A.ach.AvC));}break;case 2:{this.Sj.Aw(A.
aaL(A.ach.AvF));this.Sk.Aw(A.aaL(A.ach.AvF));}break;default:{this.Sj.Aw(A.aaL(A.
ach.Aew));this.Sk.Aw(A.aaL(A.ach.Aew));}}this.Sj.L(A._GetAutoObject(A.acj.Assessment
).Qj(this.AqA));var ApO;if(this.IsWatch)ApO=A.aaL(A.ach.AQC);else if(this.IsFever
){ApO=A.aaL(A.ach.AQB);switch(A._GetAutoObject(A.Device.Converter).Ajl(this.LastTemperature
,this.AnimalType)){case 3:this.QG.L(A.jb.Gf);break;case 2:this.QG.L(A.jb.H6);break;
case 1:this.QG.L(A.jb.E1);break;case 0:this.QG.L(A.jb.Afq);break;default:;}}else
if(this.IsAlarm){ApO=A.aaL(A.ach.AQA);if(!this.AqA||(this.AqA===5))this.QG.L(A.jb.
Gf);else this.QG.L(0xFF000000);}else ApO=null;this.AeA.Aw(ApO);this.AgY.Aw(ApO);
this.QG.Aw(ApO);if(A._GetAutoObject(A.acj.Assessment).Qj(this.AqA)===A.jb.E1)this.
Sk.L(this.KT);},EB:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
An();},AE0:function(E){if(this.AqA===E)return;this.AqA=E;this.An();},De:function(
E){if(this.KT===E)return;this.KT=E;this.An();},Ae3:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.An();},Ul:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.An();},Ae0:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.An();},Ae5:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.An();},Hi:function(){this.EB(0);this.AE0(0);this.Ae0(false);this.Ul(false
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
A.aaL(A.ach.Aew));this.Sk.Aw(A.aaL(A.ach.Aew));},_Done:function(){this.__proto__=
A.Core.P;this.Sj._Done();this.Sk._Done();this.AeA._Done();this.AgY._Done();this.
QG._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sj._ReInit();this.Sk._ReInit();this.AeA._ReInit();this.AgY._ReInit();
this.QG._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AM5={Ce:function(Ad){C.AjA.Ce.call(this,Ad);if(!!this.AX){var BzI=this.AX.H1(
Ad,12);var Bx0=this.AX.Sf(Ad,15);this.Abg.R(A._GetAutoObject(A.Device.Helper).MN(
Bx0,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Sl.Z(BzI);this.An();
}},_Init:function(aArg){C.AjA._Init.call(this,aArg);this.__proto__=C.AM5;},_className:
"Application::CalfListAlarmItem"};C.ADf={D0:null,Mp:null,_Init:function(aArg){C.
TT._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mp={I:this},0);this.__proto__=C.ADf;this.D0.H(Aou);this.D0.KS(true);this.
D0.R(A.aaR(A.acf.A5G));this.D0.L(A.jb.Text);this.Mp.H(AYV);this.Mp.I7(false);this.
Mp.L(A.jb.Text);this.Mp.A6(0x12);this.J(this.D0,-2);this.J(this.Mp,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mp.Aw(A.aaL(A.ach.ADG));},_Done:function(){this.__proto__=C.
TT;this.D0._Done();this.Mp._Done();C.TT._Done.call(this);},_ReInit:function(){C.
TT._ReInit.call(this);this.D0._ReInit();this.Mp._ReInit();this.D0.R(A.aaR(A.acf.
A5G));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TT._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kh={Background:null,BU:
null,ACH:0,ABV:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACH);this.BU.L(this.ABV);},AwE:function(E){if(this.ACH===E)return;this.ACH=E;this.
An();},AES:function(E){if(this.ABV===E)return;this.ABV=E;this.An();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BU={I:this},0);this.__proto__=C.Kh;this.H(Aow);this.
Background.AZ(0x3C);this.Background.H(Aow);this.Background.Cv(1);this.BU.AZ(0x3C
);this.BU.H(Aow);this.ACH=A.jb.E1;this.ABV=A.jb.Text;this.J(this.Background,0);this.
J(this.BU,0);this.Background.Aw(A.aaL(A.ach.Kh));this.BU.Aw(A.aaL(A.ach.Kh));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BU._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmF={Q:null,Pm:
null,A6$:false,Bk:function(aSize){C.Ml.Bk.call(this,aSize);this.V.H([].concat(this.
Pm.M[2]-this.V.Text.I_,this.V.M.slice(1,4)));},Ai:function(Ae){C.Ml.Ai.call(this
,Ae);this.Pm.L(this.V.AQ);},AwJ:function(E){if(this.A6$===E)return;this.A6$=E;if(
E)this.Pm.R(AYW);else this.Pm.R(AIn);},Kd:function(G){var F;if(!!this.Q)this.AwJ((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,0);if(!!E)
A.pe([this,this.Kd],this);},_Init:function(aArg){C.Ml._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pm={I:this},0);this.__proto__=C.AmF;this.Pm.AZ(0x34);this.Pm.
H(UR);this.Pm.R(AIn);this.J(this.Pm,0);this.Pm.S(A.aaL(A.fl.AOy));},_Done:function(
){this.__proto__=C.Ml;this.Pm._Done();C.Ml._Done.call(this);},_ReInit:function(){
C.Ml._ReInit.call(this);this.Pm._ReInit();},_Mark:function(D){var B;C.Ml._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pm)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AOX={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter
).AdX(4));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.AOX;
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
};C.APG={Gj:null,Ll:null,YS:null,Init:function(aArg){this.Ll.R(A._GetAutoObject(
A.acj.Temperature).AlJ());},_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gj={I:this},0);A.acg.Text._Init.call(this.Ll={I:this},0);A.
acg.Text._Init.call(this.YS={I:this},0);this.__proto__=C.APG;this.Background.L(A.
jb.Text);this.Gj.H(AIo);this.Gj.A6(0x11);this.Gj.R(A.aaR(A.acf.Date));this.Gj.L(
A.jb.Bm);this.Ll.H(AYX);this.Ll.A6(0x12);this.Ll.L(A.jb.Bm);this.YS.H(AYY);this.
YS.A6(0x12);this.YS.R(A.aaR(A.acf.Bs));this.YS.L(A.jb.Bm);this.J(this.Gj,0);this.
J(this.Ll,0);this.J(this.YS,0);this.Gj.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af
));this.YS.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EA;this.Gj._Done();this.Ll._Done();this.YS._Done();C.EA._Done.call(this);},_ReInit:
function(){C.EA._ReInit.call(this);this.Gj._ReInit();this.Ll._ReInit();this.YS._ReInit(
);this.Gj.R(A.aaR(A.acf.Date));this.YS.R(A.aaR(A.acf.Bs));this.Gj.S(A.aaL(A.fl.Af
));this.Ll.S(A.aaL(A.fl.Af));this.YS.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EA._Mark.call(this,D);if((B=this.Gj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Tx={Lf:null,AjQ:false,Init:function(
aArg){var B;A.zX([this,this.Bbm],[B=A._GetAutoObject(A.Device.Device),B.AEr,B.AIH
],0);this.AGG(this);A.pe([this,this.AyN],this);},DE:function(G){var D5=(A.Core.BN.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Om(this);break;case 7:this.MU(
this);break;default:D5.NH=true;}},CF:function(G){var B;if(!!this.Lf)this.Lf.CF(this
);C.AB.CF.call(this,G);},E3:function(G){var B;if(!!this.Lf)this.Lf.E3(this);C.AB.
E3.call(this,G);},Anp:function(G){A._GetAutoObject(C.A$).Fv();},AGG:function(G){
var B;if(!!this.Lf){this.Lf.E3(this);this.HN(this.Lf);}if(this.AjQ)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lf=A._NewObject(C.AMn,0);break;case 1:this.Lf=A.
_NewObject(C.AMo,0);break;case 3:this.Lf=A._NewObject(C.AMm,0);break;case 2:this.
Lf=A._NewObject(C.AMp,0);break;default:throw new Error(AIp);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lf=A._NewObject(C.AMq,0);break;case 1:this.Lf=A.
_NewObject(C.AMz,0);break;case 3:this.Lf=A._NewObject(C.AMt,0);break;case 2:this.
Lf=A._NewObject(C.AME,0);break;default:throw new Error(AIp);}this.HO(this);this.
J(this.Lf,0);this.Lf.H(E$);this.Lf.Zu([this,this.A0p]);this.Lf.CF(this);this.Bb(
this.Lf);},Bbm:function(s){this.AGG(s);},ATG:function(G){A._GetAutoObject(A.Device.
Device).AeU(0);},ATI:function(G){A._GetAutoObject(A.Device.Device).AeU(1);},ATH:
function(G){A._GetAutoObject(A.Device.Device).AeU(3);},ATJ:function(G){A._GetAutoObject(
A.Device.Device).AeU(2);},HO:function(G){this.N.CY(A.aaL(A.ach.E2));this.N.Hu(A.
jV);this.N.CB=[this,this.Anp];this.N.AE7(A.aaL(A.fl.Ak));},AyN:function(s){this.
HO(s);},Bmh:function(E){if(this.AjQ===E)return;this.AjQ=E;A.pe([this,this.Bbm],this
);},A_D:function(G){this.Bmh(!this.AjQ);},Bnv:function(G){A._GetAutoObject(A.Device.
Device).A9(31,true,A.jV,0,null);},MU:function(G){},BGf:function(s){this.MU(s);},
Om:function(G){},BGe:function(s){this.Om(s);},BeF:function(G){var FM=A._GetAutoObject(
A.Device.Device).D9;FM=FM+1;if(FM>=4)FM=0;A._GetAutoObject(A.Device.Device).AeU(
FM);},BAz:function(G){var FM=A._GetAutoObject(A.Device.Device).D9;FM=FM-1;if(FM<
0)FM=3;A._GetAutoObject(A.Device.Device).AeU(FM);},Af5:function(G){},A0p:function(
s){this.Af5(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Tx;this.Background.H(Cc);this.N.Z(true);this.N.OO(true);this.N.OP(true);this.Dq(
C.APv);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lf)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dm:null,CF:function(G){},AIG:function(s){this.CF(s);
},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bl(null);},AyD:function(s){
this.E3(s);},Zu:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dm.BO=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BN._Init.call(this.Dm={I:this},0);this.__proto__=
C.D9;this.H(UU);this.AttrSet.A9w(A.jb.Gf);this.AttrSet.A9v(A.jb.H6);this.AttrSet.
Ahg(A.jb.Text);this.Dm.Filter=1;this.AttrSet.Ahj(A.aaL(A.fl.Ak));this.AttrSet.A9s(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dm._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dm._ReInit();this.AttrSet.Ahj(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMq={RN:
null,AaX:null,Tw:null,Tv:null,RR:null,Qx:null,RS:null,RP:null,RQ:null,RO:null,CP:
function(){var B;this.RN.Ce(this);this.AaX.Ce(this);this.Tw.Ce(this);this.Tv.Ce(
this);this.RR.Ce(this);this.Qx.Ce(this);this.RS.Ce(this);this.RP.Ce(this);this.RQ.
Ce(this);this.RO.Ce(this);},GE:function(G){C.RT.GE.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RN.Z(true);this.AaX.Z(false);
this.RP.Z(false);this.RQ.Z(false);this.RO.Z(false);this.RR.Z(true);this.Qx.Z(true
);this.RS.Z(true);}break;case 1:{this.RN.Z(false);this.AaX.Z(true);this.RP.Z(true
);this.RQ.Z(true);this.RO.Z(true);this.RR.Z(false);this.Qx.Z(false);this.RS.Z(false
);}break;default:A.ab5("%s%e",Ale,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MO],this);},_Init:function(aArg){C.RT._Init.call(this,aArg);C.
RN._Init.call(this.RN={I:this},0);C.AMl._Init.call(this.AaX={I:this},0);C.Tw._Init.
call(this.Tw={I:this},0);C.Tv._Init.call(this.Tv={I:this},0);C.RR._Init.call(this.
RR={I:this},0);C.Qx._Init.call(this.Qx={I:this},0);C.RS._Init.call(this.RS={I:this
},0);C.RP._Init.call(this.RP={I:this},0);C.RQ._Init.call(this.RQ={I:this},0);C.RO.
_Init.call(this.RO={I:this},0);this.__proto__=C.AMq;this.RN.H(BF);this.RN.Aj(true
);this.RN.Bg(false);this.AaX.H(IR);this.AaX.Aj(true);this.AaX.Bg(false);this.Tw.
H(P7);this.Tw.Aj(true);this.Tw.Bg(true);this.Tv.H(Aaf);this.Tv.Aj(true);this.Tv.
Bg(false);this.RR.H(Alg);this.RR.Aj(true);this.RR.Bg(true);this.Qx.H(Aor);this.Qx.
Aj(true);this.Qx.Bg(false);this.RS.H(As4);this.RS.Aj(true);this.RS.Bg(true);this.
RP.H(Xc);this.RP.Aj(true);this.RP.Bg(true);this.RQ.H(AYZ);this.RQ.Aj(true);this.
RQ.Bg(false);this.RO.H(AY0);this.RO.Aj(true);this.RO.Bg(true);this.J(this.RN,0);
this.J(this.AaX,0);this.J(this.Tw,0);this.J(this.Tv,0);this.J(this.RR,0);this.J(
this.Qx,0);this.J(this.RS,0);this.J(this.RP,0);this.J(this.RQ,0);this.J(this.RO,
0);},_Done:function(){this.__proto__=C.RT;this.RN._Done();this.AaX._Done();this.
Tw._Done();this.Tv._Done();this.RR._Done();this.Qx._Done();this.RS._Done();this.
RP._Done();this.RQ._Done();this.RO._Done();C.RT._Done.call(this);},_ReInit:function(
){C.RT._ReInit.call(this);this.RN._ReInit();this.AaX._ReInit();this.Tw._ReInit();
this.Tv._ReInit();this.RR._ReInit();this.Qx._ReInit();this.RS._ReInit();this.RP.
_ReInit();this.RQ._ReInit();this.RO._ReInit();this.CP();},_Mark:function(D){var B;
C.RT._Mark.call(this,D);if((B=this.RN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tw)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Tv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Qx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RQ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AME={AkS:function(L1){if(!L1)return;var Fs=A._NewObject(
A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fs.CW(HV);var Ac_=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fs.CW(Ac_);L1.Bl(Fs);
},ADT:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Pe=A.
_GetAutoObject(A.Device.Device).Bt.Ca();if(Pe<2)return false;var BB0=A._GetAutoObject(
A.Device.Device).Bt.HF(0,6);var BB1=A._GetAutoObject(A.Device.Device).Bt.HF(Pe-1
,6);var A1V=A._NewObject(A.Core.Bs,0);A1V.Initialize(BB0);var A3X=A._NewObject(A.
Core.Bs,0);A3X.Initialize(BB1);if((A1V.Ab1()!==A3X.Ab1())||(A1V.Year!==A3X.Year)
)return true;else return false;},_Init:function(aArg){C.AaZ._Init.call(this,aArg
);this.__proto__=C.AME;this.AS$(C.AHe);this.ATa(C.ADl);this.AS1(C.Qx);this.ArP(A.
aaR(A.acf.AVF));this.Dz(A.aaR(A.acf.Akl));},_ReInit:function(){C.AaZ._ReInit.call(
this);this.ArP(A.aaR(A.acf.AVF));this.Dz(A.aaR(A.acf.Akl));},_className:"Application::AnimalWeights"
};C.AMz={AkS:function(L1){if(!L1)return;var Fs=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fs.CW(HV);var ABb=A._NewObject(A.Device.Int32FilterCriterion
,0);ABb.Initialize(7,2,0,true);Fs.CW(ABb);L1.Bl(Fs);},ADT:function(){return A._GetAutoObject(
A.Device.Device).Bt.Ca()>0;},_Init:function(aArg){C.AaZ._Init.call(this,aArg);this.
__proto__=C.AMz;this.AS$(C.AU2);this.ATa(C.APG);this.AS1(C.Tw);this.ArP(A.aaR(A.
acf.A7w));this.Dz(A.aaR(A.acf.Arq));},_ReInit:function(){C.AaZ._ReInit.call(this
);this.ArP(A.aaR(A.acf.A7w));this.Dz(A.aaR(A.acf.Arq));},_className:"Application::AnimalTemperatures"
};C.AT9={Vy:null,Vz:null,XZ:null,AgA:null,Kx:null,AP:null,A_:null,Ea:null,Ls:null
,AnU:null,KU:null,KV:null,ZN:null,ZO:null,Init:function(aArg){},Bk:function(aSize
){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Kx.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A_.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
Vy.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
Vy.M[2]-1,0,this.Vy.M[2]+1,aSize[1]]);this.Vz.H([this.Vy.M[2],0,this.Vy.M[2]+22,
aSize[1]]);this.Ls.H([this.Vz.M[2]-1,0,this.Vz.M[2]+1,aSize[1]]);this.XZ.H([this.
Vz.M[2],0,this.Vz.M[2]+22,aSize[1]]);this.AnU.H([this.XZ.M[2]-1,0,this.XZ.M[2]+1
,aSize[1]]);this.AgA.H([this.XZ.M[2],0,aSize[0],aSize[1]]);this.KU.H(this.Vy.M);
this.KV.H(this.Vz.M);this.ZN.H(this.XZ.M);this.ZO.H(this.AgA.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Kx.L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;
this.Hn=Ad;if(!!this.AX){var AlA=this.AX.HF(Ad,6);var A1a=this.AX.I2(Ad,3);var A1R=
this.AX.I2(Ad,2);var A1Q=this.AX.I2(Ad,5);var A3L=this.AX.I2(Ad,4);this.T(A._GetAutoObject(
A.acj.KK).ACO(AlA));this.Kx.R(A._GetAutoObject(A.acj.KK).A6p(AlA));this.Vy.L(A._GetAutoObject(
A.acj.Assessment).Qj(A1a));this.Vz.L(A._GetAutoObject(A.acj.Assessment).Qj(A1R));
this.XZ.L(A._GetAutoObject(A.acj.Assessment).Qj(A1Q));this.AgA.L(A._GetAutoObject(
A.acj.Assessment).Qj(A3L));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xv(A1a));
this.KV.L(A._GetAutoObject(A.acj.Assessment).Xv(A1R));this.ZN.L(A._GetAutoObject(
A.acj.Assessment).Xv(A1Q));this.ZO.L(A._GetAutoObject(A.acj.Assessment).Xv(A3L));
this.KU.Z(A1a===5);this.KV.Z(A1R===5);this.ZN.Z(A1Q===5);this.ZO.Z(A3L===5);this.
An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
Vy={I:this},0);A.acg.AL._Init.call(this.Vz={I:this},0);A.acg.AL._Init.call(this.
XZ={I:this},0);A.acg.AL._Init.call(this.AgA={I:this},0);A.acg.Text._Init.call(this.
Kx={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A_={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.
Ls={I:this},0);A.acg.AL._Init.call(this.AnU={I:this},0);A.acg.Text._Init.call(this.
KU={I:this},0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(this.
ZN={I:this},0);A.acg.Text._Init.call(this.ZO={I:this},0);this.__proto__=C.AT9;this.
V.H(O4);this.Vy.H(AY1);this.Vz.H(AY2);this.XZ.H(AY3);this.AgA.H(AY4);this.Kx.R(Rj
);this.Kx.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ls.L(A.jb.Bc);this.AnU.L(A.jb.Bc);this.KU.H(AY5);this.KU.R(Rl);this.KV.H(AY6
);this.KV.R(Rl);this.ZN.H(AY7);this.ZN.R(Rl);this.ZO.H(AY8);this.ZO.R(Rl);this.J(
this.Vy,0);this.J(this.Vz,0);this.J(this.XZ,0);this.J(this.AgA,0);this.J(this.Kx
,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Ls,0);this.
J(this.AnU,0);this.J(this.KU,0);this.J(this.KV,0);this.J(this.ZN,0);this.J(this.
ZO,0);this.Kx.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af
));this.ZN.S(A.aaL(A.fl.Af));this.ZO.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.Vy._Done();this.Vz._Done();this.XZ._Done();this.AgA._Done(
);this.Kx._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Ls._Done(
);this.AnU._Done();this.KU._Done();this.KV._Done();this.ZN._Done();this.ZO._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Vy._ReInit(
);this.Vz._ReInit();this.XZ._ReInit();this.AgA._ReInit();this.Kx._ReInit();this.
AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Ls._ReInit();this.AnU._ReInit(
);this.KU._ReInit();this.KV._ReInit();this.ZN._ReInit();this.ZO._ReInit();this.Kx.
S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.ZN.S(
A.aaL(A.fl.Af));this.ZO.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vz)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APE={Gj:null,YY:null,YU:null,YV:null,YW:null,YX:
null,_Init:function(aArg){C.EA._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gj={I:this},0);A.acg.Text._Init.call(this.YY={I:this},0);A.acg.Text._Init.call(this.
YU={I:this},0);A.acg.Text._Init.call(this.YV={I:this},0);A.acg.Text._Init.call(this.
YW={I:this},0);A.acg.Text._Init.call(this.YX={I:this},0);this.__proto__=C.APE;this.
Background.L(A.jb.Text);this.Gj.H(AIo);this.Gj.A6(0x11);this.Gj.R(A.aaR(A.acf.Date
));this.Gj.L(A.jb.Bm);this.YY.H(AIh);this.YY.A6(0x12);this.YY.R(A.aaR(A.acf.Bs));
this.YY.L(A.jb.Bm);this.YU.H(AY9);this.YU.A6(0x12);this.YU.R(A.aaR(A.acf.AT$));this.
YU.L(A.jb.Bm);this.YV.H(Aox);this.YV.A6(0x12);this.YV.R(A.aaR(A.acf.AUa));this.YV.
L(A.jb.Bm);this.YW.H(AY_);this.YW.A6(0x12);this.YW.R(A.aaR(A.acf.AOu));this.YW.L(
A.jb.Bm);this.YX.H(AY$);this.YX.A6(0x12);this.YX.R(A.aaR(A.acf.ANt));this.YX.L(A.
jb.Bm);this.J(this.Gj,0);this.J(this.YY,0);this.J(this.YU,0);this.J(this.YV,0);this.
J(this.YW,0);this.J(this.YX,0);this.Gj.S(A.aaL(A.fl.Af));this.YY.S(A.aaL(A.fl.Af
));this.YU.S(A.aaL(A.fl.Af));this.YV.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(A.fl.Af));
this.YX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EA;this.Gj._Done();
this.YY._Done();this.YU._Done();this.YV._Done();this.YW._Done();this.YX._Done();
C.EA._Done.call(this);},_ReInit:function(){C.EA._ReInit.call(this);this.Gj._ReInit(
);this.YY._ReInit();this.YU._ReInit();this.YV._ReInit();this.YW._ReInit();this.YX.
_ReInit();this.Gj.R(A.aaR(A.acf.Date));this.YY.R(A.aaR(A.acf.Bs));this.YU.R(A.aaR(
A.acf.AT$));this.YV.R(A.aaR(A.acf.AUa));this.YW.R(A.aaR(A.acf.AOu));this.YX.R(A.
aaR(A.acf.ANt));this.Gj.S(A.aaL(A.fl.Af));this.YY.S(A.aaL(A.fl.Af));this.YU.S(A.
aaL(A.fl.Af));this.YV.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Gj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMt={AkS:function(L1){if(!L1)return;
var Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fs.CW(HV);var
AAV=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAV.Initialize(3,5,0,true
);Fs.CW(AAV);L1.Bl(Fs);},ADT:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.Ca()>0;},_Init:function(
aArg){C.AaZ._Init.call(this,aArg);this.__proto__=C.AMt;this.AS$(C.AT9);this.ATa(
C.APE);this.AS1(C.Tv);this.ArP(A.aaR(A.acf.Axn));this.Dz(A.aaR(A.acf.Ano));},_ReInit:
function(){C.AaZ._ReInit.call(this);this.ArP(A.aaR(A.acf.Axn));this.Dz(A.aaR(A.acf.
Ano));},_className:"Application::AnimalRatings"};C.IC={B6:null,Y:null,V:null,Uq:
5,T:function(E){C.IZ.T.call(this,E);this.V.R(E);},De:function(E){C.IZ.De.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},AuQ:function(G){var B;var Nz=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nz)return;
if(((B=Nz.Db(0x1))[2]-B[0])>((B=Nz.M)[2]-B[0]))this.S(A.aaL(A.fl.Ii));},Kq:function(
E){if(this.Uq===E)return;this.Uq=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAP:function(G){A.pe([this,this.AuQ],this);},_Init:function(aArg){C.IZ._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IC;this.Y.AZ(0x3F);this.Y.H(AIq);this.Y.A_l(5);this.
Y.JP(3);this.V.AZ(0x34);this.V.H(Aaj);this.V.I7(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.El=[this,this.
AAP];this.V.S(A.aaL(A.fl.Kl));},_Done:function(){this.__proto__=C.IZ;this.Y._Done(
);this.V._Done();C.IZ._Done.call(this);},_ReInit:function(){C.IZ._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kl));},_Mark:function(D){
var B;C.IZ._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RN={AfM:0,Ai:function(Ae){C.Fu.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RJ));if(this.AfM>=0)this.Ks((this.AfM.toFixed(
)+CQ)+A.aaR(A.acf.Ki));else this.Ks(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fu.
Ce.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfM=-1;
else this.AfM=A._GetAutoObject(A.Device.Helper).W.RJ();this.An();},_Init:function(
aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RN;},_className:"Application::AnimalInfoItemAge"
};C.RR={A4p:0,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afr));if(
this.A4p>0)this.Ks((A._GetAutoObject(A.Device.Converter).Ak9(this.A4p)+CQ)+A._GetAutoObject(
A.acj.DV).AfZ());else this.Ks(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fu.Ce.call(
this,G);this.A4p=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.An();},
_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RR;},_className:
"Application::AnimalInfoItemWeight"};C.Tw={Y:null,Eh:null,Ex:null,E_:null,PR:null
,E9:null,PT:null,Ajg:0,Pd:0,CP:function(){this.An();},Ai:function(Ae){C.JG.Ai.call(
this,Ae);this.T(A.aaR(A.acf.BhI));this.E_.R(this.Ajg.toFixed());this.E9.R(this.Pd.
toFixed());if(!!this.Ajg||!!this.Pd)this.PT.R(AZa+(this.Ajg+this.Pd).toFixed());
else this.PT.R(A.aaR(A.acf.AR7));},Ce:function(G){C.JG.Ce.call(this,G);var AkZ;AkZ=
A._GetAutoObject(A.Device.Helper).Biy(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajg=AkZ.Get(2);this.Pd=AkZ.Get(1);this.An();},De:
function(E){C.JG.De.call(this,E);this.PR.L(E);this.PT.L(E);},AsL:function(G){if(
!!this.Ajg||!!this.Pd){this.E_.Z(true);this.PR.Z(true);this.E9.Z(true);}else{this.
E_.Z(false);this.PR.Z(false);this.E9.Z(false);}this.Eh.H(this.E_.M);this.Eh.Z(this.
E_.Fk());this.Ex.H(this.E9.M);this.Ex.Z(this.E9.Fk());},AuQ:function(G){var B;var
Nz=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nz)return;if(((B=Nz.Db(0x1))[2]-B[0])>((
B=Nz.M)[2]-B[0])){this.E9.S(A.aaL(A.fl.Ak));this.PR.S(A.aaL(A.fl.Ak));this.E_.S(
A.aaL(A.fl.Ak));this.PT.S(A.aaL(A.fl.Ak));}},AAP:function(G){A.pe([this,this.AuQ
],this);},_Init:function(aArg){C.JG._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.Eh={I:this},0);A.acg.AL._Init.call(this.Ex={
I:this},0);A.acg.Text._Init.call(this.E_={I:this},0);A.acg.Text._Init.call(this.
PR={I:this},0);A.acg.Text._Init.call(this.E9={I:this},0);A.acg.Text._Init.call(this.
PT={I:this},0);this.__proto__=C.Tw;this.Y.H(Ayu);this.Y.Bne(0);this.Y.JP(3);this.
Eh.H(AZb);this.Eh.L(A.jb.H6);this.Ex.H(Ayr);this.Ex.L(A.jb.Gf);this.E_.AZ(0x34);
this.E_.H(Aaj);this.E_.Hh(2);this.E_.I7(true);this.E_.R(UW);this.E_.L(A.jb.Text);
this.E_.Aj(true);this.PR.AZ(0x34);this.PR.H(Aaj);this.PR.I7(true);this.PR.R(AH_);
this.PR.L(A.jb.Text);this.PR.Aj(true);this.E9.AZ(0x34);this.E9.H(Aaj);this.E9.Hh(
2);this.E9.I7(true);this.E9.R(UW);this.E9.L(A.jb.Bm);this.E9.Aj(true);this.PT.AZ(
0x34);this.PT.H(Aaj);this.PT.I7(true);this.PT.R(Rj);this.PT.L(A.jb.Text);this.PT.
Aj(true);this.J(this.Y,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.E_,0);
this.J(this.PR,0);this.J(this.E9,0);this.J(this.PT,0);this.Y.El=[this,this.AAP];
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
,A2h:false,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(AZc+A.aaR(A.acf.AG$));if(
this.A2h){this.Ks((A._GetAutoObject(A.Device.Converter).S2(this.FS,2,true)+CQ)+A.
_GetAutoObject(A.acj.DV).Aay());this.Background.L(A._GetAutoObject(A.acj.DV).AzO(
this.FS,this.H$));this.De(A._GetAutoObject(A.acj.DV).AzQ(this.FS,this.H$));}else{
this.Ks(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CK);this.De(A.jb.Text);}},Ce:
function(G){C.Fu.Ce.call(this,G);var LD=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LD){this.A2h=true;this.FS=A._GetAutoObject(A.acj.DV).Alx(LD,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2h=false;this.FS=0;}this.H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.An();},_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.Qx;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tv={Y:null,FT:null,Eh:
null,Ex:null,ME:null,E_:null,E9:null,OX:null,AaA:0,Ajg:0,Pd:0,CP:function(){this.
An();},Ai:function(Ae){C.JG.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axn));this.ME.R(
this.AaA.toFixed());this.E_.R(this.Ajg.toFixed());this.E9.R(this.Pd.toFixed());}
,Ce:function(G){C.JG.Ce.call(this,G);var AkZ;AkZ=A._GetAutoObject(A.Device.Helper
).A6v(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.AaA=AkZ.Get(3);this.Ajg=AkZ.Get(2);this.Pd=AkZ.Get(1);this.An();},AsL:
function(G){if((!!this.AaA||!!this.Ajg)||!!this.Pd){this.ME.Z(true);this.E_.Z(true
);this.E9.Z(true);this.OX.Z(false);}else{this.ME.Z(false);this.E_.Z(false);this.
E9.Z(false);this.OX.Z(true);}this.FT.H(this.ME.M);this.FT.Z(this.ME.Fk());this.Eh.
H(this.E_.M);this.Eh.Z(this.E_.Fk());this.Ex.H(this.E9.M);this.Ex.Z(this.E9.Fk()
);},AuQ:function(G){var B;var Nz=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nz)return;
if(((B=Nz.Db(0x1))[2]-B[0])>((B=Nz.M)[2]-B[0])){this.E9.S(A.aaL(A.fl.Ak));this.E_.
S(A.aaL(A.fl.Ak));this.ME.S(A.aaL(A.fl.Ak));}},AAP:function(G){A.pe([this,this.AuQ
],this);},_Init:function(aArg){C.JG._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FT={I:this},0);A.acg.AL._Init.call(this.Eh={
I:this},0);A.acg.AL._Init.call(this.Ex={I:this},0);A.acg.Text._Init.call(this.ME={
I:this},0);A.acg.Text._Init.call(this.E_={I:this},0);A.acg.Text._Init.call(this.
E9={I:this},0);A.acg.Text._Init.call(this.OX={I:this},0);this.__proto__=C.Tv;this.
Y.AZ(0x3F);this.Y.H(Ayu);this.Y.A_l(5);this.Y.JP(3);this.FT.H(AIr);this.FT.L(A.jb.
E1);this.Eh.H(As$);this.Eh.L(A.jb.H6);this.Ex.H(AZd);this.Ex.L(A.jb.Gf);this.ME.
AZ(0x3C);this.ME.H(Aaj);this.ME.Hh(2);this.ME.I7(true);this.ME.R(UW);this.ME.L(A.
jb.Text);this.ME.Aj(true);this.E_.AZ(0x3C);this.E_.H(Aaj);this.E_.Hh(2);this.E_.
I7(true);this.E_.R(UW);this.E_.L(A.jb.Text);this.E_.Aj(true);this.E9.AZ(0x3C);this.
E9.H(Aaj);this.E9.Hh(2);this.E9.I7(true);this.E9.R(UW);this.E9.L(A.jb.Bm);this.E9.
Aj(true);this.OX.AZ(0x34);this.OX.H(Aaj);this.OX.I7(true);this.OX.A6(0x11);this.
OX.R(A.aaR(A.acf.AR7));this.OX.L(A.jb.Text);this.OX.Aj(true);this.OX.Z(false);this.
J(this.Y,0);this.J(this.FT,0);this.J(this.Eh,0);this.J(this.Ex,0);this.J(this.ME
,0);this.J(this.E_,0);this.J(this.E9,0);this.J(this.OX,0);this.Y.El=[this,this.AAP
];this.ME.Q1([this,this.AsL]);this.ME.S(A.aaL(A.fl.Af));this.E_.Q1([this,this.AsL
]);this.E_.S(A.aaL(A.fl.Af));this.E9.Q1([this,this.AsL]);this.E9.S(A.aaL(A.fl.Af
));this.OX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JG;this.Y._Done(
);this.FT._Done();this.Eh._Done();this.Ex._Done();this.ME._Done();this.E_._Done(
);this.E9._Done();this.OX._Done();C.JG._Done.call(this);},_ReInit:function(){C.JG.
_ReInit.call(this);this.Y._ReInit();this.FT._ReInit();this.Eh._ReInit();this.Ex.
_ReInit();this.ME._ReInit();this.E_._ReInit();this.E9._ReInit();this.OX._ReInit(
);this.OX.R(A.aaR(A.acf.AR7));this.ME.S(A.aaL(A.fl.Af));this.E_.S(A.aaL(A.fl.Af)
);this.E9.S(A.aaL(A.fl.Af));this.OX.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JG._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMb={_Init:function(aArg){C.Aqf._Init.call(
this,aArg);this.__proto__=C.AMb;this.A4A=1;this.Rg.Cu(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqf._ReInit.call(this);this.Rg.Cu(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.AQV={OI:null,IL:null,H3:null,IJ:null,GL:null,AlZ:function(G){A.pe([this,this.
Bz7],this);},Bz7:function(G){A._GetAutoObject(C.A$).Cg(3);},_Init:function(aArg){
C.Cd._Init.call(this,aArg);C.OI._Init.call(this.OI={I:this},0);C.BW._Init.call(this.
IL={I:this},0);C.SL._Init.call(this.H3={I:this},0);C.AGD._Init.call(this.IJ={I:this
},0);C.Q9._Init.call(this.GL={I:this},0);this.__proto__=C.AQV;var B;this.I8(A.aaR(
A.acf.A$l));this.IL.H(AhX);this.IL.Aj(true);this.IL.T(A.aaR(A.acf.Language));this.
IL.A95(100);this.H3.H(UV);this.H3.Aj(true);this.H3.T(A.aaR(A.acf.Date));this.H3.
Bg(true);this.IJ.H(Aag);this.IJ.Aj(true);this.IJ.T(A.aaR(A.acf.Bs));this.GL.H(AhW
);this.GL.Aj(true);this.GL.Z(true);this.GL.T(A.aaR(A.acf.AF_));this.GL.Bg(true);
this.GL.Ar0(false);this.GL.A_b(true);this.JV(this.Y,-1);this.JV(this.Ay,-1);this.
J(this.IL,0);this.J(this.H3,0);this.J(this.IJ,0);this.J(this.GL,0);this.IL.Wy(A.
aaL(A.fl.Hr));this.IL.Wz(A.aaL(A.fl.Hr));this.IL.As([B=this.OI,B.B7,B.B8]);this.
IL.CI(this.OI);this.H3.AeT([B=this.H3,B.FQ]);this.H3.Gn([this,this.D_,this.GN]);
this.H3.Akz(A.aaL(A.ach.Edit));this.H3.Ab9([B=A._GetAutoObject(A.Device.Helper),
B.UX,B.U0]);this.IJ.AeT([B=this.IJ,B.FQ]);this.IJ.Gn([this,this.D_,this.GN]);this.
IJ.Akz(A.aaL(A.ach.Edit));this.IJ.Ab9([B=A._GetAutoObject(A.Device.Helper),B.UX,
B.U0]);this.GL.AeT([B=this.GL,B.FQ]);this.GL.Gn([this,this.D_,this.GN]);this.GL.
Akz(A.aaL(A.ach.Edit));this.GL.As([B=A._GetAutoObject(A.Device.Device),B.ASz,B.AZ$
]);},_Done:function(){this.__proto__=C.Cd;this.OI._Done();this.IL._Done();this.H3.
_Done();this.IJ._Done();this.GL._Done();C.Cd._Done.call(this);},_ReInit:function(
){C.Cd._ReInit.call(this);this.OI._ReInit();this.IL._ReInit();this.H3._ReInit();
this.IJ._ReInit();this.GL._ReInit();this.I8(A.aaR(A.acf.A$l));this.IL.T(A.aaR(A.
acf.Language));this.H3.T(A.aaR(A.acf.Date));this.IJ.T(A.aaR(A.acf.Bs));this.GL.T(
A.aaR(A.acf.AF_));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.OI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaZ={Bj:null,Fy:null,AmZ:null,AmI:null,R_:null,A6Q:A.jV,KM:A.jV,ARn:null,ARo:
null,ADe:null,CF:function(G){var B;C.D9.CF.call(this,G);A.zX([this,this.A2P],[B=
A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0);this.A2P(this);},E3:function(
G){var B;A.z$([this,this.A2P],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId
],0);C.D9.E3.call(this,G);},Zu:function(E){C.D9.Zu.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bj)this.Bj.Zu(E);},AS$:function(E){if(this.ARn===E)return;this.
ARn=E;if(!!this.Bj)this.Bj.NZ(E);},ATa:function(E){if(this.ARo===E)return;this.ARo=
E;this.BoF(this);},AS1:function(E){if(this.ADe===E)return;this.ADe=E;A.pe([this,
this.BoE],this);},ArP:function(E){if(this.A6Q===E)return;this.A6Q=E;this.R_.R(E);
},Dz:function(E){if(this.KM===E)return;this.KM=E;if(!!this.Bj)this.Bj.Dz(E);},AkS:
function(L1){A.ab5("%s",AZe);},ADT:function(){A.ab5("%s",Alf);return false;},Axv:
function(G){if(!!this.Bj)this.HN(this.Bj);this.Bj=A._NewObject(C.F$,0);this.Bj.H(
Ata);this.Bj.Zs(A._GetAutoObject(A.Device.Device).Bt);this.Bj.Dz(this.KM);this.Bj.
NZ(this.ARn);this.Bj.Zu(this.AR);this.J(this.Bj,0);this.Bb(this.Bj);},BoF:function(
G){var B;if(!!this.Fy)this.HN(this.Fy);this.Fy=(C.EA.isPrototypeOf(B=A._NewObject(
this.ARo,0))?B:null);this.Fy.H(IR);this.J(this.Fy,0);},BoE:function(G){var B;if(
!!this.AmZ)this.HN(this.AmZ);if(!!this.ADe&&this.ADT()){this.AmZ=(C.IZ.isPrototypeOf(
B=A._NewObject(this.ADe,0))?B:null);this.AmZ.H(BF);this.AmZ.Bg(false);this.J(this.
AmZ,0);this.R_.Z(false);}else this.R_.Z(true);},A2P:function(G){this.AkS(A._GetAutoObject(
A.Device.Device).Bt);this.Axv(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AL._Init.call(this.AmI={I:this},0);C.CH._Init.call(this.R_={I:this},
0);this.__proto__=C.AaZ;this.AmI.H(BF);this.AmI.L(A.jb.CK);this.R_.H(AHF);this.R_.
A6(0x11);this.R_.L(A.jb.Text);this.J(this.AmI,0);this.J(this.R_,0);this.R_.S(A.aaL(
A.fl.Kl));this.R_.A2(A.aaL(A.fl.Ii));},_Done:function(){this.__proto__=C.D9;this.
AmI._Done();this.R_._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmI._ReInit();this.R_._ReInit();this.R_.S(A.aaL(A.fl.Kl));this.R_.
A2(A.aaL(A.fl.Ii));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmI)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.JH={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bcf],[B=A._GetAutoObject(A.Device.Device),B.AEs,B.AII],0);A.pe([this,this.Bcf],this
);},Do:function(){return 4;},FX:function(aIndex){return this.AnimalListContentToString.
BI(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).Ab3(E);},Bcf:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.JH;this.Cf.Set(0,0);this.Cf.Set(1,1);this.Cf.Set(2,2
);this.Cf.Set(3,3);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.AnimalListContentToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
AnimalListContentToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this
,D);if((B=this.AnimalListContentToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListContent"};C.ARs={IL:null,Y_:null,Zi:null,Zf:null,Zj:null
,Y$:null,Zd:null,Zg:null,Zh:null,Zc:null,OI:null,_Init:function(aArg){C.Cd._Init.
call(this,aArg);C.BW._Init.call(this.IL={I:this},0);C.Nc._Init.call(this.Y_={I:this
},0);C.Nc._Init.call(this.Zi={I:this},0);C.Nc._Init.call(this.Zf={I:this},0);C.Nc.
_Init.call(this.Zj={I:this},0);C.Nc._Init.call(this.Y$={I:this},0);C.Nc._Init.call(
this.Zd={I:this},0);C.Nc._Init.call(this.Zg={I:this},0);C.Nc._Init.call(this.Zh={
I:this},0);C.Nc._Init.call(this.Zc={I:this},0);C.OI._Init.call(this.OI={I:this},
0);this.__proto__=C.ARs;var B;this.I8(A.aaR(A.acf.Settings));this.IL.H(AhX);this.
IL.Aj(true);this.IL.T(A.aaR(A.acf.Language));this.IL.A95(100);this.Y_.H(Atb);this.
Y_.Aj(true);this.Y_.T(A.aaR(A.acf.ACq));this.Y_.Nf(16);this.Zi.H(Atc);this.Zi.Aj(
true);this.Zi.T(A.aaR(A.acf.AG6));this.Zi.Nf(22);this.Zf.H(Atd);this.Zf.Aj(true);
this.Zf.T(A.aaR(A.acf.Temperature));this.Zf.Nf(17);this.Zj.H(Ayv);this.Zj.Aj(true
);this.Zj.T(A.aaR(A.acf.ACm));this.Zj.Nf(42);this.Y$.H(Aoy);this.Y$.Aj(true);this.
Y$.T(A.aaR(A.acf.Device));this.Y$.Nf(18);this.Zd.H(Aoy);this.Zd.Aj(true);this.Zd.
T(A.aaR(A.acf.Asj));this.Zd.Nf(19);this.Zg.H(AZf);this.Zg.Aj(true);this.Zg.T(A.aaR(
A.acf.LinkTransponder));this.Zg.Nf(89);this.Zh.H(AZg);this.Zh.Aj(true);this.Zh.T(
A.aaR(A.acf.UnlinkTransponder));this.Zh.Nf(95);this.Zc.H(Aym);this.Zc.Aj(true);this.
Zc.T(A.aaR(A.acf.ACF));this.Zc.Nf(76);this.J(this.IL,0);this.J(this.Y_,0);this.J(
this.Zi,0);this.J(this.Zf,0);this.J(this.Zj,0);this.J(this.Y$,0);this.J(this.Zd,
0);this.J(this.Zg,0);this.J(this.Zh,0);this.J(this.Zc,0);this.IL.Wy(A.aaL(A.fl.Hr
));this.IL.Wz(A.aaL(A.fl.Hr));this.IL.As([B=this.OI,B.B7,B.B8]);this.IL.CI(this.
OI);this.Y_.AR=[B=this.Y_,B.Ni];this.Zi.AR=[B=this.Zi,B.Ni];this.Zf.AR=[B=this.Zf
,B.Ni];this.Zj.AR=[B=this.Zj,B.Ni];this.Y$.AR=[B=this.Y$,B.Ni];this.Zd.AR=[B=this.
Zd,B.Ni];this.Zg.AR=[B=this.Zg,B.Ni];this.Zh.AR=[B=this.Zh,B.Ni];this.Zc.AR=[B=this.
Zc,B.Ni];},_Done:function(){this.__proto__=C.Cd;this.IL._Done();this.Y_._Done();
this.Zi._Done();this.Zf._Done();this.Zj._Done();this.Y$._Done();this.Zd._Done();
this.Zg._Done();this.Zh._Done();this.Zc._Done();this.OI._Done();C.Cd._Done.call(
this);},_ReInit:function(){C.Cd._ReInit.call(this);this.IL._ReInit();this.Y_._ReInit(
);this.Zi._ReInit();this.Zf._ReInit();this.Zj._ReInit();this.Y$._ReInit();this.Zd.
_ReInit();this.Zg._ReInit();this.Zh._ReInit();this.Zc._ReInit();this.OI._ReInit(
);this.I8(A.aaR(A.acf.Settings));this.IL.T(A.aaR(A.acf.Language));this.Y_.T(A.aaR(
A.acf.ACq));this.Zi.T(A.aaR(A.acf.AG6));this.Zf.T(A.aaR(A.acf.Temperature));this.
Zj.T(A.aaR(A.acf.ACm));this.Y$.T(A.aaR(A.acf.Device));this.Zd.T(A.aaR(A.acf.Asj)
);this.Zg.T(A.aaR(A.acf.LinkTransponder));this.Zh.T(A.aaR(A.acf.UnlinkTransponder
));this.Zc.T(A.aaR(A.acf.ACF));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);
if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y_)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Zj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y$).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Zg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OI)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MainSettingsScreen"};C.AMo={EU:null,Init:
function(aArg){this.EU.Ahn(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)));},AUe:function(){this.EU.AeX(this.
AOS());this.AaC=!this.EU.EZ.AY;},AiV:function(G){this.EU.Ahn(A._NewObject(A.Core.
Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)
));this.AUe();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>0)
this.Dz(A.aaR(A.acf.A7W));else this.Dz(A.aaR(A.acf.Arq));this.An();},AOS:function(
){var BC=A._NewObject(C.Aqt,0);var Qg=A._GetAutoObject(A.Device.Helper).AN_(A._GetAutoObject(
A.Device.Helper).Dv());var Dw=A._GetAutoObject(A.Device.Helper).Aqp(Qg-(86400*this.
Mt));BC.AnB(AZh);BC.QZ([].concat(0,BC.Gg.slice(1,4)));BC.QZ(A.abN(BC.Gg,(Qg-Dw)|
0));BC.QZ(A.abP(BC.Gg,3400));BC.QZ([].concat(BC.Gg.slice(0,3),4200));var Gd=A._GetAutoObject(
A.Device.Device).Bt.Ca();BC.AwO(Gd);BC.Yh();if(Gd>0){var O=0;while(O<Gd){var ApW=
A._GetAutoObject(A.Device.Device).Bt.CE(O,7);var ApX=A._GetAutoObject(A.Device.Device
).Bt.HF(O,6)-Dw;if(ApW>0)BC.Aqg(ApX,ApW);O=O+1;}}return BC;},_Init:function(aArg
){C.K_._Init.call(this,aArg);C.AqW._Init.call(this.EU={I:this},0);this.__proto__=
C.AMo;this.EU.H(AZi);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AE_(C.AGR);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.EU._Done(
);C.K_._Done.call(this);},_ReInit:function(){C.K_._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMp={Z4:null,O0:null,AgL:null,AaC:false,Init:function(aArg){this.Z4.Ahn(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgR)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgL.Z(this.AaC);},CF:function(
G){var B;C.D9.CF.call(this,G);A.zX([this,this.AiV],[B=A._GetAutoObject(A.Device.
Helper),B.UX,B.U0],0);A.zV([this,this.AiV],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Amb],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0
);A.pe([this,this.Amb],this);},E3:function(G){var B;A.z$([this,this.AiV],[B=A._GetAutoObject(
A.Device.Helper),B.UX,B.U0],0);A.z9([this,this.AiV],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amb],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId
],0);C.D9.E3.call(this,G);},Amb:function(G){var Fs=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fs.CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bl(Fs
);},AiV:function(G){this.Z4.Ahn(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)));this.Bn1();this.An();},Bn1:function(
){var B;var Gd=A._GetAutoObject(A.Device.Device).Bt.Ca();var K8=A._NewObject(C.Aqt
,0);var Vl=A._NewObject(C.Aqt,0);var Qg=A._GetAutoObject(A.Device.Helper).AN_(A.
_GetAutoObject(A.Device.Helper).Dv());var Dw=A._GetAutoObject(A.Device.Helper).Aqp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K8.QZ([].concat(0,K8.Gg.slice(1
,4)));K8.QZ(A.abN(K8.Gg,(Qg-Dw)|0));K8.QZ(A.abP(K8.Gg,0));K8.QZ([].concat(K8.Gg.
slice(0,3),150000));K8.AnB(AZj);Vl.QZ([].concat(0,Vl.Gg.slice(1,4)));Vl.QZ(A.abN(
Vl.Gg,(Qg-Dw)|0));Vl.QZ(A.abP(Vl.Gg,0));Vl.QZ([].concat(Vl.Gg.slice(0,3),1500));
Vl.AnB(AZk);K8.AwO(Gd);K8.Yh();Vl.AwO(Gd);Vl.Yh();if(Gd>0){var O=0;var AaE=0;var
AAd=0;var AJ5=0;var A1W=0;var BcU=true;while(O<Gd){var Al8=A._GetAutoObject(A.Device.
Device).Bt.CE(O,8);var AaQ=A._GetAutoObject(A.Device.Device).Bt.HF(O,6)-Dw;if(Al8>
0){K8.Aqg(AaQ,Al8);if(!A1W){A1W=AaQ;AJ5=Al8;}if(AAd>0){var LD=A._GetAutoObject(A.
Device.Helper).MN(AAd,AaQ);if(!!LD){var FS=A._GetAutoObject(A.acj.DV).Alx(LD,AaE
,Al8);if(BcU){Vl.Aqg(AAd,FS);BcU=false;}Vl.Aqg(AaQ,FS);}}AaE=Al8;AAd=AaQ;}O=O+1;
}var AdN=A.aaR(A.acf.BgI);var FS=A._GetAutoObject(A.Device.Helper).BiA(A1W,AAd,AJ5
,AaE);AdN=A._GetAutoObject(A.Device.Helper).Nk(AdN,P6,FS.toFixed());AdN=A._GetAutoObject(
A.Device.Helper).Nk(AdN,Ax_,A._GetAutoObject(A.acj.DV).Aay());this.O0.Ih.R(AdN);
}this.AaC=!K8.AY;if(this.AaC)this.O0.Ih.R(A.jV);(C.O0.isPrototypeOf(B=this.O0.EU
)?B:null).Anx([B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.EB]);this.Z4.AeX(K8);
this.O0.AeX(Vl);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqW._Init.call(
this.Z4={I:this},0);C.AqW._Init.call(this.O0={I:this},0);C.AkQ._Init.call(this.AgL={
I:this},0);this.__proto__=C.AMp;this.Z4.H(AZl);this.Z4.T(A.aaR(A.acf.Afr));this.
Z4.AE_(C.AMW);this.O0.H(AZm);this.O0.T(A.aaR(A.acf.AG$));this.O0.AE_(C.O0);this.
AgL.H(UU);this.AgL.R(A.aaR(A.acf.Akl));this.J(this.Z4,0);this.J(this.O0,0);this.
J(this.AgL,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z4._Done(
);this.O0._Done();this.AgL._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z4._ReInit();this.O0._ReInit();this.AgL._ReInit();this.
Z4.T(A.aaR(A.acf.Afr));this.O0.T(A.aaR(A.acf.AG$));this.AgL.R(A.aaR(A.acf.Akl));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgL)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMm={
Avd:null,Avc:null,Axp:null,AuK:null,Vx:null,Abo:null,Abn:null,Acm:null,Afe:null,
Init:function(aArg){this.Vx.Ahn(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.AgR)));},A4h:function(G){this.Vx.Ab_(this.
AuK);this.Abo.Ab_(this.Avd);this.Abn.Ab_(this.Avc);this.Acm.Ab_(this.Axp);},Axo:
function(){var Gd=A._GetAutoObject(A.Device.Device).Bt.Ca();this.AuK=A._NewObject(
C.Ajs,0);this.Avd=A._NewObject(C.Ajs,0);this.Avc=A._NewObject(C.Ajs,0);this.Axp=
A._NewObject(C.Ajs,0);if(Gd>0){var O=Gd-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.HF(O,6);this.Att(this.AuK,O,3,D8);this.Att(this.Avd,O,2,D8);this.
Att(this.Avc,O,5,D8);this.Att(this.Axp,O,4,D8);O=O-1;}}this.AaC=!(((this.AuK.AY+
this.Avc.AY)+this.Avd.AY)+this.Axp.AY);A.pe([this,this.A4h],this);},Att:function(
A0V,Ad,A0U,Qa){var Alt=A._GetAutoObject(A.Device.Device).Bt.I2(Ad,A0U);if(!!Alt)
A0V.Os(Alt,Qa);},Ab8:function(E){if(this.Mt===E)return;C.K_.Ab8.call(this,E);if(
!!this.Vx)this.Vx.Ab8(E);if(!!this.Abo)this.Abo.Ab8(E);if(!!this.Abn)this.Abn.Ab8(
E);if(!!this.Acm)this.Acm.Ab8(E);this.Afe.Ab8(E);},AiV:function(G){this.Vx.Ahn(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.AgR)));this.Axo();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dz(A.aaR(A.acf.Bj0));else this.Dz(A.aaR(A.acf.Ano));this.An();},_Init:function(
aArg){C.K_._Init.call(this,aArg);C.Aht._Init.call(this.Vx={I:this},0);C.Aht._Init.
call(this.Abo={I:this},0);C.Aht._Init.call(this.Abn={I:this},0);C.Aht._Init.call(
this.Acm={I:this},0);C.AUb._Init.call(this.Afe={I:this},0);this.__proto__=C.AMm;
this.Dz(A.aaR(A.acf.Ano));this.Vx.H(AZn);this.Vx.R(A.aaR(A.acf.AGd));this.Abo.H(
AIs);this.Abo.R(A.aaR(A.acf.Feed));this.Abn.H(AZo);this.Abn.R(A.aaR(A.acf.AGf));
this.Acm.H(AIt);this.Acm.R(A.aaR(A.acf.AGg));this.Afe.H(AZp);this.J(this.Vx,-1);
this.J(this.Abo,-1);this.J(this.Abn,-1);this.J(this.Acm,-1);this.J(this.Afe,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.Vx._Done();this.Abo.
_Done();this.Abn._Done();this.Acm._Done();this.Afe._Done();C.K_._Done.call(this);
},_ReInit:function(){C.K_._ReInit.call(this);this.Vx._ReInit();this.Abo._ReInit(
);this.Abn._ReInit();this.Acm._ReInit();this.Afe._ReInit();this.Dz(A.aaR(A.acf.Ano
));this.Vx.R(A.aaR(A.acf.AGd));this.Abo.R(A.aaR(A.acf.Feed));this.Abn.R(A.aaR(A.
acf.AGf));this.Acm.R(A.aaR(A.acf.AGg));},_Mark:function(D){var B;C.K_._Mark.call(
this,D);if((B=this.Avd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avc)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afe)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMn={EU:null,WE:null,Aeh:null,A2f:false,Init:function(aArg){this.WE.Ahn(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
AgR)));},Bk:function(aSize){C.K_.Bk.call(this,aSize);this.Aeh.H(this.EU.M);},Ai:
function(Ae){C.K_.Ai.call(this,Ae);var BBD=!this.AaC&&this.A2f;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aeh.R(A.aaR(A.acf.A7W));else this.
Aeh.R(A.aaR(A.acf.Arq));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dz(A.aaR(
A.acf.Bj1));else this.Dz(A.aaR(A.acf.Bj2));this.Aeh.Z(BBD);},AiV:function(G){this.
WE.Ahn(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.AgR)));this.AaC=true;this.A2f=true;this.Axo();this.AUe();this.
An();},AUe:function(){this.EU.AeX(this.AOS());if(!!this.EU.EZ&&(this.EU.EZ.AY>0)
){this.AaC=false;this.A2f=false;}},AOS:function(){var BC=A._NewObject(C.Aqt,0);var
Qg=A._GetAutoObject(A.Device.Helper).AN_(A._GetAutoObject(A.Device.Helper).Dv());
var Dw=A._GetAutoObject(A.Device.Helper).Aqp(Qg-(86400*this.Mt));BC.AnB(AZq);BC.
QZ([].concat(0,BC.Gg.slice(1,4)));BC.QZ(A.abN(BC.Gg,(Qg-Dw)|0));BC.QZ(A.abP(BC.Gg
,3400));BC.QZ([].concat(BC.Gg.slice(0,3),4200));var Gd=A._GetAutoObject(A.Device.
Device).Bt.Ca();BC.AwO(Gd);BC.Yh();if(Gd>0){var O=0;while(O<Gd){var ApW=A._GetAutoObject(
A.Device.Device).Bt.CE(O,7);var ApX=A._GetAutoObject(A.Device.Device).Bt.HF(O,6)-
Dw;if(ApW>0)BC.Aqg(ApX,ApW);O=O+1;}}return BC;},BiP:function(){var Gd=A._GetAutoObject(
A.Device.Device).Bt.Ca();if(Gd>0){var BfA=A._NewObject(C.Ajs,0);var O=Gd-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.EM(O,A._GetAutoObject(A.Device.Device
).Bt);var LQ=A._GetAutoObject(A.Device.Helper).AC4(D3);if(!!LQ)BfA.Os(LQ,D3.Timestamp
);O=O-1;}return BfA;}else return null;},Axo:function(){this.WE.Ab_(this.BiP());if(
!!this.WE.N2&&(this.WE.N2.AY>0))this.AaC=false;},_Init:function(aArg){C.K_._Init.
call(this,aArg);C.AqW._Init.call(this.EU={I:this},0);C.Aht._Init.call(this.WE={I:
this},0);C.AkQ._Init.call(this.Aeh={I:this},0);this.__proto__=C.AMn;this.EU.H(Ata
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AE_(C.AGR);this.WE.H(AIu);this.WE.
R(A.aaR(A.acf.Rating));this.Aeh.H(Ata);this.J(this.EU,-2);this.J(this.WE,-2);this.
J(this.Aeh,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K_;this.EU._Done(
);this.WE._Done();this.Aeh._Done();C.K_._Done.call(this);},_ReInit:function(){C.
K_._ReInit.call(this);this.EU._ReInit();this.WE._ReInit();this.Aeh._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WE.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K_._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeh)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WJ={Q:null,Gs:null,Gt:null
,QH:null,AM:0,Gl:0,FZ:100,FC:0,Init:function(aArg){},IW:function(G){this.FC=1;C.
Eg.IW.call(this,G);},Bk:function(aSize){C.Eg.Bk.call(this,aSize);this.QH.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QH.Z(this.Gl!==
this.FZ);this.QH.L(this.V.AQ);if((this.FC===4)||(this.FC===5))this.QH.L(A.jb.E1);
},Al1:function(G){this.FC=5;this.An();if(this.Bo.Bw){A.pe([this,this.AyO],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qm:function(G){if(this.FC===5)A.pe([this,this.
AyO],this);if(this.FC===4)A.pe([this,this.AyP],this);if(this.FC===1)A.pe(this.AR
,this);this.FC=0;this.An();},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,
F[1].call(F[0])));},AcU:function(s){this.C2(s);},As:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcU],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcU],E,0);if(!!E)A.pe([this,this.AcU],this);},Al2:function(G){this.FC=4;this.
An();if(this.Bo.Bw){A.pe([this,this.AyP],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},J$:function(G){this.FC=0;},AyP:function(s){this.J$(s);},J6:function(G){this.
FC=0;},AyO:function(s){this.J6(s);},By:function(E){if(E<this.Gl)E=this.Gl;if(E>this.
FZ)E=this.FZ;if(this.AM===E)return;this.AM=E;this.An();},F0:function(E){if(this.
Gl===E)return;this.Gl=E;this.An();},EV:function(E){if(this.FZ===E)return;this.FZ=
E;this.An();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BN._Init.call(
this.Gs={I:this},0);A.Core.BN._Init.call(this.Gt={I:this},0);A.acg.Ap._Init.call(
this.QH={I:this},0);this.__proto__=C.WJ;this.H(J0);this.Gs.Filter=5;this.Gt.Filter=
4;this.Background.H(J0);this.V.H(Aae);this.V.R(Lv);this.QH.H(Ayw);this.J(this.QH
,0);this.Gs.BO=[this,this.Al1];this.Gs.D1=[this,this.Al1];this.Gt.BO=[this,this.
Al2];this.Gt.D1=[this,this.Al2];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Cu(null);this.QH.Aw(A.aaL(A.ach.AMK));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gs._Done();this.Gt._Done();this.QH._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gs._ReInit();this.Gt.
_ReInit();this.QH._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUB={AC:null,CM:null,HK:
null,Bk:function(aSize){C.WJ.Bk.call(this,aSize);this.CM.H([this.QH.M[2],this.QH.
M[1],this.M[2],this.QH.M[3]]);},Ai:function(Ae){C.WJ.Ai.call(this,Ae);this.CM.AbH(
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
Ju(this.AC.Do());this.CM.AbH(0,this.CM.AY-1);}},_Init:function(aArg){C.WJ._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gh._Init.call(this.
HK={I:this},0);this.__proto__=C.AUB;this.H(J0);this.QH.H(AZr);this.CM.Ae4(40);this.
CM.NZ(C.CH);this.HK.WC(23);this.HK.HM(1);this.HK.Fl(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CM.Hg=[this,this.Hg];this.Init(
aArg);},_Done:function(){this.__proto__=C.WJ;this.CM._Done();this.HK._Done();C.WJ.
_Done.call(this);},_ReInit:function(){C.WJ._ReInit.call(this);this.CM._ReInit();
this.HK._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WJ._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RS={ALv:0
,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.AG$));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Ks((A._GetAutoObject(A.Device.Converter).Ak9(this.ALv
)+CQ)+A._GetAutoObject(A.acj.DV).AfZ());else this.Ks(A.aaR(A.acf.Unknown));},Ce:
function(G){C.Fu.Ce.call(this,G);this.ALv=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.An();},_Init:function(aArg
){C.Fu._Init.call(this,aArg);this.__proto__=C.RS;},_className:"Application::AnimalInfoItemWeightGain"
};C.APv={Bc:null,Dd:null,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(
A.Device.Device),B.AEr,B.AIH],0);},DY:function(G){C.IG.DY.call(this,G);this.Dd.Aw(
A._GetAutoObject(A.Device.Converter).BgW(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.C5._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);this.__proto__=C.APv;this.Bc.DC(
Ayx);this.Bc.DL(Ayy);this.Bc.L(A.jb.Bc);this.Dd.H(AZs);this.Dd.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Dd,0);this.Dd.Aw(A.aaL(A.ach.AjV));this.Init(aArg);},_Done:
function(){this.__proto__=C.IG;this.Bc._Done();this.Dd._Done();C.IG._Done.call(this
);},_ReInit:function(){C.IG._ReInit.call(this);this.Bc._ReInit();this.Dd._ReInit(
);},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANw={ZL:null,Ky:null,Mi:null,Timer:null,ACd:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZL.R(A._GetAutoObject(A.Device.Helper).Nk(A.aaR(A.acf.Bqk),P6,this.ACd.
toFixed()));},CF:function(G){this.Timer.Ar(true);},E3:function(G){this.Timer.Ar(
false);},BAP:function(G){if(this.ACd>1){this.ACd=this.ACd-1;this.An();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Axw();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZL={I:this},0);A.acg.Text.
_Init.call(this.Ky={I:this},0);A.acg.Ap._Init.call(this.Mi={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANw;this.Background.L(A.jb.CS
);this.N.Z(true);this.ZL.H(AZt);this.ZL.KS(true);this.ZL.R(A.jV);this.ZL.L(A.jb.
Text);this.Ky.H(AZu);this.Ky.KS(true);this.Ky.R(A.aaR(A.acf.A4_));this.Ky.L(A.jb.
Text);this.Mi.H(AIv);this.J(this.ZL,0);this.J(this.Ky,0);this.J(this.Mi,0);this.
ZL.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af));this.Mi.Aw(A.aaL(A.ach.ABK));this.
Timer.Mx=[this,this.BAP];},_Done:function(){this.__proto__=C.AB;this.ZL._Done();
this.Ky._Done();this.Mi._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZL._ReInit();this.Ky._ReInit();this.Mi._ReInit(
);this.Timer._ReInit();this.Ky.R(A.aaR(A.acf.A4_));this.ZL.S(A.aaL(A.fl.Af));this.
Ky.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANd={Ky:null,Amy:null
,Qz:null,CP:function(){this.An();},Ai:function(Ae){C.Ad8.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa5<=10)this.Ky.R(A.aaR(A.acf.Bg$));else this.Ky.R(A.aaR(A.acf.
A4$));},_Init:function(aArg){C.Ad8._Init.call(this,aArg);A.acg.Text._Init.call(this.
Ky={I:this},0);A.acg.Ap._Init.call(this.Amy={I:this},0);C.CH._Init.call(this.Qz={
I:this},0);this.__proto__=C.ANd;this.SM.H(AZv);this.Mi.H(AZw);this.Ky.H(AZx);this.
Ky.KS(true);this.Ky.L(A.jb.Text);this.Amy.H(AIv);this.Qz.H(AZy);this.Qz.Z(true);
this.Qz.R(A.aaR(A.acf.AUc));this.Qz.L(A.jb.Text);this.J(this.Ky,0);this.J(this.Amy
,0);this.J(this.Qz,0);this.Ky.S(A.aaL(A.fl.Af));this.Amy.Aw(A.aaL(A.ach.ABK));this.
Qz.S(A.aaL(A.fl.Af));this.Qz.A2(A.aaL(A.fl.Ak));this.Qz.Cu(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Ad8;this.Ky._Done();this.Amy._Done();this.Qz._Done();
C.Ad8._Done.call(this);},_ReInit:function(){C.Ad8._ReInit.call(this);this.Ky._ReInit(
);this.Amy._ReInit();this.Qz._ReInit();this.Qz.R(A.aaR(A.acf.AUc));this.Ky.S(A.aaL(
A.fl.Af));this.Qz.S(A.aaL(A.fl.Af));this.Qz.A2(A.aaL(A.fl.Ak));this.Qz.Cu(A.aaL(
A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ad8._Mark.call(this,D);if((B=this.
Ky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amy)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Qz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AL$={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AL$;this.
RM.Ar(false);this.RM.Aj(false);this.RM.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVB={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AVB;this.
S1.Ar(false);this.S1.Aj(false);this.S1.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AOZ={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdX(5));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.AOZ;},_className:"Application::HeaderControlListFilter"};C.APx={DY:function(G){
C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdX(6));},_Init:
function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.APx;},_className:"Application::HeaderWatchListFilter"
};C.APB={D0:null,M7:null,_Init:function(aArg){C.TT._Init.call(this,aArg);C.CH._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.M7={I:this},0);this.__proto__=
C.APB;this.D0.H(Aou);this.D0.R(A.aaR(A.acf.A5H));this.D0.L(A.jb.Text);this.M7.H(
AZz);this.M7.L(A.jb.Text);this.M7.A6(0x12);this.J(this.D0,-2);this.J(this.M7,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));this.M7.Aw(A.aaL(A.ach.ADx)
);},_Done:function(){this.__proto__=C.TT;this.D0._Done();this.M7._Done();C.TT._Done.
call(this);},_ReInit:function(){C.TT._ReInit.call(this);this.D0._ReInit();this.M7.
_ReInit();this.D0.R(A.aaR(A.acf.A5H));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.TT._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.AM_={Ce:function(Ad){C.AjA.Ce.call(this,Ad);if(
!!this.AX){var Oi=this.AX.H1(Ad,8);var BCo=this.AX.Sf(Ad,21);this.Abg.R(A._GetAutoObject(
A.Device.Helper).MN(BCo,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Sl.Z(Oi);this.An();}},_Init:function(aArg){C.AjA._Init.call(this,aArg);this.__proto__=
C.AM_;},_className:"Application::CalfListWatchItem"};C.TT={Ag1:null,Ag3:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag1={I:this},
0);A.acg.Ap._Init.call(this.Ag3={I:this},0);this.__proto__=C.TT;this.Ag1.H(AZA);
this.Ag1.L(A.jb.Text);this.Ag1.A6(0x12);this.Ag3.H(AZB);this.Ag3.L(A.jb.Text);this.
Ag3.A6(0x12);this.JV(this.DS,-1);this.J(this.Ag1,0);this.J(this.Ag3,0);this.Ag1.
Aw(A.aaL(A.ach.Am2));this.Ag3.Aw(A.aaL(A.ach.AbE));},_Done:function(){this.__proto__=
C.Dc;this.Ag1._Done();this.Ag3._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Ag1._ReInit();this.Ag3._ReInit();},_Mark:function(
D){var B;C.Dc._Mark.call(this,D);if((B=this.Ag1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqt={Gg:A.wg,OE:A.wf,QZ:function(E){if(A.aaY(this.Gg,E))return;this.Gg=E;},AnB:
function(E){if(A.aaX(this.OE,E))return;this.OE=E;},_Init:function(aArg){A.acv.ACc.
_Init.call(this,aArg);this.__proto__=C.Aqt;},_className:"Application::BoundCoordList"
};C.AjA={TZ:null,Wq:null,T0:null,Wr:null,Sl:null,Zk:null,Abg:null,AP:null,A_:null
,Ea:null,Ls:null,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TZ.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wq.H(this.TZ.M);this.A_.H([this.TZ.
M[2]-1,0,this.TZ.M[2]+1,aSize[1]]);this.T0.H([this.TZ.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wr.H(this.T0.M);this.Ea.H([this.T0.M[2]-1,0,this.T0.M[2]+1,aSize[
1]]);this.Sl.H([this.T0.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zk.H(this.Sl.
M);this.Ls.H([this.Sl.M[2]-1,0,this.Sl.M[2]+1,aSize[1]]);this.Abg.H([this.Sl.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K7=this.V.AQ;
this.TZ.AES(K7);this.Wq.L(K7);this.T0.AES(K7);this.Wr.L(K7);this.Sl.AES(K7);this.
Zk.L(K7);this.Abg.L(K7);this.Zk.Z(!this.Sl.Fk());},Ce:function(Ad){if(!this.AX)return;
this.Hn=Ad;var Md=this.AX.CE(Ad,1);var H$=this.AX.AmU(Ad,14);var Aul=this.AX.CE(
Ad,5);var LQ=this.AX.I2(Ad,13);this.T(Md.toFixed());if(!!LQ){this.TZ.Z(true);this.
TZ.AwE(A._GetAutoObject(A.acj.Assessment).Bc2(LQ));this.Wq.Z(false);}else{this.TZ.
Z(false);this.Wq.Z(true);}if(Aul>0){this.T0.Z(true);this.T0.AwE(A._GetAutoObject(
A.acj.Assessment).Bc2(A._GetAutoObject(A.Device.Converter).AsE(H$,Aul)));this.Wr.
Z(false);}else{this.T0.Z(false);this.Wr.Z(true);}this.An();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kh._Init.call(this.TZ={I:this},0);A.acg.Text._Init.
call(this.Wq={I:this},0);C.Kh._Init.call(this.T0={I:this},0);A.acg.Text._Init.call(
this.Wr={I:this},0);C.Kh._Init.call(this.Sl={I:this},0);A.acg.Text._Init.call(this.
Zk={I:this},0);A.acg.Text._Init.call(this.Abg={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0);A.acg.AL._Init.call(this.
Ea={I:this},0);A.acg.AL._Init.call(this.Ls={I:this},0);this.__proto__=C.AjA;this.
Wq.H(AZC);this.Wq.R(Aov);this.Wr.H(Aow);this.Wr.R(Aov);this.Sl.AwE(A.jb.Re);this.
Zk.H(Aow);this.Zk.R(Rl);this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ls.L(A.jb.Bc);this.J(this.TZ,0);this.J(this.Wq,0);this.J(this.T0,0);this.J(
this.Wr,0);this.J(this.Sl,0);this.J(this.Zk,0);this.J(this.Abg,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Ls,0);this.Wq.S(A.aaL(A.fl.Af
));this.Wr.S(A.aaL(A.fl.Af));this.Zk.S(A.aaL(A.fl.Af));this.Abg.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.TZ._Done();this.Wq.
_Done();this.T0._Done();this.Wr._Done();this.Sl._Done();this.Zk._Done();this.Abg.
_Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Ls._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.TZ._ReInit();this.Wq.
_ReInit();this.T0._ReInit();this.Wr._ReInit();this.Sl._ReInit();this.Zk._ReInit(
);this.Abg._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.
Ls._ReInit();this.Wq.S(A.aaL(A.fl.Af));this.Wr.S(A.aaL(A.fl.Af));this.Zk.S(A.aaL(
A.fl.Af));this.Abg.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pq:null,Ang:null
,EZ:null,DR:null,Arj:0,Ark:0,A7d:0,AmL:0,AqF:0,Init:function(aArg){this.ASW(6);this.
ASX(8);this.AS8(A.jb.AV);this.AS9(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.BlH([this.DR.Abb[0],(B=this.DR.M)[3]-B[1]]);this.WF(this);},ASV:function(
E){if(this.Pq===E)return;this.Pq=E;this.DR.ASV(E);},AS9:function(E){if(this.Ark===
E)return;this.Ark=E;this.DR.AS9(E);},AS8:function(E){if(this.Arj===E)return;this.
Arj=E;this.DR.AS8(E);this.DR.BlN(E);},WF:function(G){var B;while(!!this.DR.Ah)this.
HN(this.DR.Ah);if(!this.EZ)return;this.DR.AnB([((this.EZ.OE[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gg[2]-this.EZ.Gg[0]))|0,this.DR.OE[1]]);this.DR.AnB([this.DR.OE[0]
,((this.EZ.OE[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gg[3]-this.EZ.Gg[1]))|0]);var O;
var Dg=this.DR.OE[1];var D8;var A4s=this.EZ.Gg[1];var BjZ=(((B=this.DR.M)[3]-B[1
])/this.DR.OE[1])|0;for(O=0;O<BjZ;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dg))-(this.Ang.Ascent+this.Ang.Descent))+2,((B=this.M)[2]-
B[0])-this.Ark,(((B=this.M)[3]-B[1])-(O*Dg))+2]);D8.L(this.A7d);D8.S(this.Ang);D8.
A6(0x24);if(O>0)D8.R(this.AJG(A4s));else D8.R(this.AKe());A4s=A4s+this.EZ.OE[1];
this.J(D8,0);}},BF5:function(s){this.WF(s);},BmD:function(E){if(this.Ang===E)return;
this.Ang=E;this.An();},Azm:function(A0B){var B;if(!this.EZ||(this.EZ.Gg[3]===this.
EZ.Gg[1]))return 0;return(((A0B-this.EZ.Gg[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gg[
3]-this.EZ.Gg[1]))|0;},AeX:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.AeX(null);else{var BC=A._NewObject(A.acv.ACc,0);BC.AwO(this.EZ.AD9);BC.Yh();var
Jw=E.AlH;while(!!Jw){BC.Aqg(this.Byr(Jw.PY),this.Bys(Jw.PZ));Jw=Jw.Ah;}this.DR.AeX(
BC);this.An();}},Byr:function(BwE){var B;if(!this.EZ||(this.EZ.Gg[2]===this.EZ.Gg[
0]))return 0;return((BwE-this.EZ.Gg[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gg[2]-this.
EZ.Gg[0]);},Bys:function(A0B){var B;if(!this.EZ||(this.EZ.Gg[3]===this.EZ.Gg[1])
)return 0;return((A0B-this.EZ.Gg[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gg[3]-this.EZ.
Gg[1]);},AJG:function(AoR){return AoR.toFixed();},AKe:function(){return A.jV;},ASX:
function(E){if(this.AmL===E)return;this.AmL=E;this.DR.ASX(E);},ASW:function(E){if(
this.AqF===E)return;this.AqF=E;this.DR.ASW(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIw);this.A7d=A.jb.Text;this.DR.AZ(0x3F);this.DR.H(AIw);this.DR.Bm3(AZD);this.
DR.Blv(A.jb.Re);this.DR.Bmk(A.jb.Bc);this.DR.Bnn(A.jb.Re);this.J(this.DR,0);this.
Pq=A.aaL(A.acv.ACw);this.Ang=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.BmD(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pq)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ang)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMW={AJG:function(AoR){return A._GetAutoObject(
A.Device.Converter).AxY(AoR,0);},AKe:function(){return A._GetAutoObject(A.acj.DV
).AfZ();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AMW;}
,_className:"Application::BodyWeightGraph"};C.O0={JI:null,Ex:null,Eh:null,FT:null
,ID:null,IE:null,Init:function(aArg){this.ASV(null);},WF:function(G){var B;var F;
C.DR.WF.call(this,G);var AKL=0;var ALA=0;if(!!this.JI){AKL=this.Azm(A._GetAutoObject(
A.Device.Helper).AC3((F=this.JI,F[1].call(F[0]))));ALA=this.Azm(A._GetAutoObject(
A.Device.Helper).AC2((F=this.JI,F[1].call(F[0]))));}this.FT.H(A.abP(this.FT.M,0)
);this.FT.H([].concat(this.FT.M.slice(0,3),((B=this.M)[3]-B[1])-ALA));this.ID.H(
A.abO(this.ID.M,(this.FT.M[3]-((((B=this.ID.M)[3]-B[1])/2)|0))-2));this.Eh.H(A.abP(
this.Eh.M,this.FT.M[3]));this.Eh.H([].concat(this.Eh.M.slice(0,3),((B=this.M)[3]-
B[1])-AKL));this.IE.H(A.abO(this.IE.M,(this.Eh.M[3]-((((B=this.IE.M)[3]-B[1])/2)|
0))+2));this.Ex.H(A.abP(this.Ex.M,this.Eh.M[3]));this.Ex.H([].concat(this.Ex.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJG:function(AoR){return A._GetAutoObject(A.Device.Converter
).S2(AoR,0,true);},AKe:function(){return A._GetAutoObject(A.acj.DV).Aay();},Anx:
function(E){if(A.aaZ(this.JI,E))return;if(!!this.JI)A.z$([this,this.AiL],this.JI
,0);this.JI=E;if(!!E)A.zX([this,this.AiL],E,0);if(!!E)A.pe([this,this.AiL],this);
},AiL:function(G){this.An();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ex={I:this},0);A.acg.AL._Init.call(this.Eh={I:this},0);A.
acg.AL._Init.call(this.FT={I:this},0);A.acg.AL._Init.call(this.ID={I:this},0);A.
acg.AL._Init.call(this.IE={I:this},0);this.__proto__=C.O0;this.Ex.AZ(0xD);this.Ex.
H(Aaa);this.Ex.L(A.jb.Gf);this.Eh.AZ(0xD);this.Eh.H(S6);this.Eh.L(A.jb.H6);this.
FT.AZ(0xD);this.FT.H(AcN);this.FT.L(A.jb.E1);this.ID.AZ(0xD);this.ID.H(Aac);this.
ID.Aws(A.jb.H6);this.ID.Awt(A.jb.H6);this.ID.Awv(A.jb.E1);this.ID.Awu(A.jb.E1);this.
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
D);},_className:"Application::WeightGainGraph"};C.AqW={EU:null,EZ:null,R5:null,Ih:
null,Bc:null,AxF:A.jV,DK:A.jV,AOU:null,Init:function(aArg){},Bk:function(aSize){
A.Core.P.Bk.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R5.
H([30,0,aSize[0]-2,30]);this.Ih.H(this.R5.M);if(!!this.EU)this.EU.H([30,this.R5.
M[3],aSize[0],this.Bc.M[1]]);},Ahn:function(E){if(this.AxF===E)return;this.AxF=E;
this.Ih.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.R5.R(E);},AE_:
function(E){if(this.AOU===E)return;this.AOU=E;this.BoC(this);},BoC:function(G){var
B;if(!!this.EU)this.HN(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOU,0))?B:null);if(!!this.EU){this.EU.H(AZE);this.EU.AeX(this.EZ);this.J(this.EU
,0);}},AeX:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.AeX(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
R5={I:this},0);A.acg.Text._Init.call(this.Ih={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqW;this.H(AcP);this.Ar(false);this.R5.H(AZF);this.
R5.A6(0x11);this.R5.R(Lv);this.R5.L(A.jb.Text);this.Ih.A6(0x14);this.Ih.R(A.jV);
this.Ih.L(A.jb.Text);this.Bc.H(AZG);this.Bc.L(A.jb.Bc);this.J(this.R5,0);this.J(
this.Ih,0);this.J(this.Bc,0);this.R5.S(A.aaL(A.fl.Ak));this.Ih.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.R5._Done();this.
Ih._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.R5._ReInit();this.Ih._ReInit();this.Bc._ReInit();this.
R5.S(A.aaL(A.fl.Ak));this.Ih.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMv={Agv:null,G2:function(E
){var F;C.F$.G2.call(this,E);if(!!this.Agv)(F=this.Agv,F[2].call(F[0],E));},A9p:
function(E){if(A.aaZ(this.Agv,E))return;if(!!this.Agv)A.z$([this,this.A2R],this.
Agv,0);this.Agv=E;if(!!E)A.zX([this,this.A2R],E,0);if(!!E)A.pe([this,this.A2R],this
);},A2R:function(G){var F;if(!this.Agv)return;(F=this.Agv,F[2].call(F[0],this.FH(
)));},_Init:function(aArg){C.F$._Init.call(this,aArg);this.__proto__=C.AMv;},_Mark:
function(D){var B;C.F$._Mark.call(this,D);if((B=this.Agv)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUb={Rc:null
,PU:null,XX:null,XY:null,Mt:0,CP:function(){this.An();},Bk:function(aSize){var B;
A.Core.P.Bk.call(this,aSize);this.Rc.H(A.abI(this.Rc.M,(((B=this.M)[3]-B[1])/2)|
0));this.PU.H(A.abI(this.PU.M,(((B=this.M)[3]-B[1])/2)|0));this.Rc.H(A.abO(this.
Rc.M,(((B=this.M)[3]-B[1])/2)|0));this.PU.H(A.abO(this.PU.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rc.R(A._GetAutoObject(
A.Device.Helper).Nk(A.aaR(A.acf.BjT),P6,this.Mt.toFixed()));},Ab8:function(E){if(
this.Mt===E)return;this.Mt=E;this.BBq(this);},BBq:function(G){var B;var AJO=(((B=
this.M)[2]-B[0])/this.Mt)|0;this.XX.H(A.abM(this.XX.M,(((B=this.M)[2]-B[0])-(this.
Mt*AJO))+(((AJO/2)-(((B=this.XX.M)[2]-B[0])/2))|0)));this.XY.H(A.abM(this.XY.M,(((
B=this.M)[2]-B[0])-AJO)+(((AJO/2)-(((B=this.XY.M)[2]-B[0])/2))|0)));this.An();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rc={
I:this},0);A.acg.Text._Init.call(this.PU={I:this},0);A.acg.Text._Init.call(this.
XX={I:this},0);A.acg.Text._Init.call(this.XY={I:this},0);this.__proto__=C.AUb;this.
H(BF);this.Rc.H(Bqq);this.Rc.Hh(5);this.Rc.A6(0x11);this.Rc.L(A.jb.Text);this.PU.
H(Bqr);this.PU.Hh(5);this.PU.A6(0x14);this.PU.R(A.aaR(A.acf.AhL));this.PU.L(A.jb.
Text);this.XX.H(Bqs);this.XX.R(A$W);this.XX.L(A.jb.Text);this.XY.H(Bqt);this.XY.
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
};C.K_={V2:null,AjH:null,KM:A.jV,Mt:0,AaC:false,Init:function(aArg){var A1z=A._NewObject(
C.Ki,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RJ()<A1z.
C4(O))A1z.Ann=O+1;this.V2.CI(A1z);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjH.
Z(this.AaC);if(this.AaC)this.Bb(null);else this.Bb(this.V2);},CF:function(G){var
B;var F;C.D9.CF.call(this,G);if(!(F=this.V2.Q,F[1].call(F[0])))(F=this.V2.Q,F[2].
call(F[0],this.V2.AC.C4(0)));A.zX([this,this.AIX],[B=A._GetAutoObject(A.Device.Helper
),B.UX,B.U0],0);A.zV([this,this.AIX],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amb],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId],0);A.pe([this
,this.Amb],this);},E3:function(G){var B;A.z$([this,this.AIX],[B=A._GetAutoObject(
A.Device.Helper),B.UX,B.U0],0);A.z9([this,this.AIX],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amb],[B=A._GetAutoObject(A.Device.Helper).W,B.QY,B.OnSetId
],0);C.D9.E3.call(this,G);},Zu:function(E){if(A.aa0(this.AR,E))return;C.D9.Zu.call(
this,E);this.V2.AR=E;},Ab8:function(E){if(this.Mt===E)return;this.Mt=E;A.pe([this
,this.Amb],this);},Bwc:function(Aq){this.Ab8(Aq);},AiV:function(G){},AIX:function(
s){this.AiV(s);},Dz:function(E){if(this.KM===E)return;this.KM=E;this.AjH.R(E);},
Amb:function(G){var Fs=A._NewObject(A.Device.Filter,0);var Azw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Azw.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhL()-((this.Mt-1)*86400))-1,true);Fs.CW(Azw);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fs.CW(HV);A._GetAutoObject(
A.Device.Device).Bt.Bl(Fs);},BkS:function(){return this.Mt;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUB._Init.call(this.V2={I:this},0);C.AkQ._Init.call(
this.AjH={I:this},0);this.__proto__=C.K_;this.V2.H(BF);this.AjH.H(UU);this.J(this.
V2,0);this.J(this.AjH,0);this.V2.As([this,this.BkS,this.Bwc]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V2._Done();this.AjH._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V2._ReInit();this.AjH.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V2)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjH)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.AND={V9:null,YO:null,RatingMode:null,PB:null,_Init:
function(aArg){C.Cd._Init.call(this,aArg);C.Nc._Init.call(this.V9={I:this},0);C.
BW._Init.call(this.YO={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Io._Init.call(this.PB={I:this},0);this.__proto__=C.AND;var B;this.Hd.R(A.
aaR(A.acf.ACm));this.I8(A.aaR(A.acf.A5A));this.V9.H(AIx);this.V9.Aj(true);this.V9.
T(A.aaR(A.acf.AsP));this.V9.Bg(true);this.V9.Nf(23);this.YO.H(Bqu);this.YO.Aj(true
);this.YO.T(A.aaR(A.acf.A_S));this.YO.Bg(false);this.PB.H(Bqv);this.PB.Aj(true);
this.PB.T(A.aaR(A.acf.A5x));this.PB.Bg(true);this.PB.F0(3);this.PB.EV(14);this.PB.
IM(A.aaR(A.acf.Ki)+AIy);this.PB.I9(A.aaR(A.acf.GH)+AIy);this.J(this.V9,0);this.J(
this.YO,0);this.J(this.PB,0);this.V9.AR=[B=this.V9,B.Ni];this.YO.As([B=this.RatingMode
,B.B7,B.B8]);this.YO.CI(this.RatingMode);this.PB.As([B=A._GetAutoObject(A.Device.
Device),B.A8t,B.Ba0]);},_Done:function(){this.__proto__=C.Cd;this.V9._Done();this.
YO._Done();this.RatingMode._Done();this.PB._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.V9._ReInit();this.YO._ReInit();this.RatingMode.
_ReInit();this.PB._ReInit();this.Hd.R(A.aaR(A.acf.ACm));this.I8(A.aaR(A.acf.A5A)
);this.V9.T(A.aaR(A.acf.AsP));this.YO.T(A.aaR(A.acf.A_S));this.PB.T(A.aaR(A.acf.
A5x));this.PB.IM(A.aaR(A.acf.Ki)+AIy);this.PB.I9(A.aaR(A.acf.GH)+AIy);},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Au3={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hh(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20
);var GA=this.Bo.Bw;var FN=A.jb.Ad_;var GQ=A.jb.Bm;if(this.Hf){FN=A.jb.Bm;GQ=A.jb.
Text;}if(!G$){this.Background.L(FN);this.V.L(A.jb.CK);}else if(GA){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fq){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FN);this.V.L(GQ);}this.LI=G$;this.KE=Fq;this.Qn=GA;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Au3;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.AC$={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,
B.PM,B.EB],0);A.pe([this,this.DY],this);},De:function(E){C.BS.De.call(this,E);this.
Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Aw(A.aaL(A.ach.AC8));break;case 1:this.Ap.Aw(A.aaL(A.ach.APf));break;
case 2:this.Ap.Aw(A.aaL(A.ach.APh));break;default:A.ab5("%s%e",AZH,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BS._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.AC$;this.Ap.H(AZI);this.
J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC8));this.Init(aArg);},_Done:function(){this.
__proto__=C.BS;this.Ap._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADa={Ap:null,Init:function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Helper).W,B.PM,B.EB],0);A.pe([this,this.DY],this);},De:function(E){C.BS.
De.call(this,E);this.Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Aw(A.aaL(A.ach.AC9));break;case 1:this.Ap.Aw(A.aaL(
A.ach.APg));break;case 2:this.Ap.Aw(A.aaL(A.ach.APi));break;default:A.ab5("%s%e"
,AZH,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BS.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADa;
this.Ap.H(AZI);this.J(this.Ap,0);this.Ap.Aw(A.aaL(A.ach.AC9));this.Init(aArg);},
_Done:function(){this.__proto__=C.BS;this.Ap._Done();C.BS._Done.call(this);},_ReInit:
function(){C.BS._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BS._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fu={BT:null,AxT:A.jV,De:function(E){C.JG.De.call(
this,E);this.BT.L(E);},Ks:function(E){if(this.AxT===E)return;this.AxT=E;this.BT.
R(E);},_Init:function(aArg){C.JG._Init.call(this,aArg);C.CH._Init.call(this.BT={
I:this},0);this.__proto__=C.Fu;this.BT.AZ(0x34);this.BT.H(Ayu);this.BT.A6(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(
A.fl.Ak));this.BT.Cu(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JG;this.
BT._Done();C.JG._Done.call(this);},_ReInit:function(){C.JG._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.BT.Cu(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JG._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOD={Wv:function(G){var B;this.Agp();this.AL8(A.aaR(A.acf.Bi2),[this,this.Bnz],[
B=A._GetAutoObject(A.Device.Device),B.A8u,B.Ba1]);A._GetAutoObject(C.BH).Ft();this.
IY(A.aaR(A.acf.AVc),[this,this.ATC],5);this.IY(A.aaR(A.acf.AVa),[this,this.ATB],
7);this.IY(A.aaR(A.acf.An3),[this,this.AwR],2);this.IY(A.aaR(A.acf.XP),[this,this.
AEO],1);this.IY(A.aaR(A.acf.Auy),[this,this.AEI],0);A._GetAutoObject(C.BH).Ft();
A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},DE:function(G){},Abt:function(){return C.AB0;},Abu:function(
){return C.ADh;},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(
A.Device.Helper).A6B());},HO:function(G){C.GU.HO.call(this,G);if(this.Akh()===false
){this.N.Cs(A.aaL(A.ach.AbE));this.N.Ck=[this,this.A53];this.N.FJ(A.jV);}this.N.
OO(false);this.N.OP(false);},Agb:function(){A._GetAutoObject(C.A$).Cg(44);},Bnz:
function(G){A._GetAutoObject(A.Device.Device).AwH(!A._GetAutoObject(A.Device.Device
).AqR);this.An$(this);},An$:function(G){var Be=A._GetAutoObject(A.Device.Device).
Am.Filter.Fg();var Av=Be.DQ(30,3);if(!!Av)Be.N3(Av);if(A._GetAutoObject(A.Device.
Device).AqR){var AAc=A._NewObject(A.Device.UInt32FilterCriterion,0);var A2p=A._GetAutoObject(
A.Device.Helper).Dv()-21600;AAc.Initialize(30,3,A2p,true);Be.CW(AAc);}A._GetAutoObject(
A.Device.Device).Am.Bl(Be);},_Init:function(aArg){C.GU._Init.call(this,aArg);this.
__proto__=C.AOD;var B;this.Dq(C.APb);this.Dz(A.aaR(A.acf.A7T));this.AwM([B=A._GetAutoObject(
A.Device.Device),B.A8s,B.BaZ]);},_ReInit:function(){C.GU._ReInit.call(this);this.
Dz(A.aaR(A.acf.A7T));},_className:"Application::FreshCowListScreen"};C.AOC={_Init:
function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AOC;this.Ld.Ar(false);
this.Ld.Aj(false);this.Ld.Z(false);this.Jn.Ar(false);this.Jn.Aj(false);this.Jn.Z(
false);},_className:"Application::FreshCowListFilterScreen"};C.APb={DY:function(
G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdX(7));
},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.APb;},_className:
"Application::HeaderFreshCowListFilter"};C.ADh={Jt:null,D0:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.Jt={I:this},0);C.CH._Init.call(
this.D0={I:this},0);this.__proto__=C.ADh;this.A9K(1);this.Jt.H(Bqw);this.Jt.R((A.
aaR(A.acf.Calving)+Aai)+A.aaR(A.acf.A$s));this.Jt.L(A.jb.Text);this.D0.H(Bqx);this.
D0.R(A.aaR(A.acf.AD1));this.D0.L(A.jb.Text);this.J(this.Jt,0);this.J(this.D0,0);
this.Jt.S(A.aaL(A.fl.Ak));this.Jt.A2(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.
D0.A2(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.Jt._Done();this.
D0._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
Jt._ReInit();this.D0._ReInit();this.Jt.R((A.aaR(A.acf.Calving)+Aai)+A.aaR(A.acf.
A$s));this.D0.R(A.aaR(A.acf.AD1));this.Jt.S(A.aaL(A.fl.Ak));this.Jt.A2(A.aaL(A.fl.
Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.AB0={AGS:null,KP:null,UA:null,AP:null,A_:null,Init:function(aArg){},Bk:function(
aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.UA.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A_.H([this.UA.M[2]-1,0,this.UA.M[2]+1,aSize[1]]);this.KP.H([this.UA.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.
UA.De(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var
Iw=this.AX.CE(Ad,0);var Md=this.AX.CE(Ad,1);var A2o=this.AX.CE(Ad,29);var Alz=this.
AX.HF(Ad,28);this.T(Md.toFixed());this.KP.R(A2o.toFixed());this.UA.Ab8(A._GetAutoObject(
A.Device.Device).AqQ+1);this.UA.Bnf(Alz);this.UA.R(A._GetAutoObject(A.acj.KK).AjM(
Alz));A._GetAutoObject(A.Device.Device).SJ(Ad);this.Ap6(Iw);this.Axo();A._GetAutoObject(
A.Device.Device).Bt.Bl(null);this.An();}},A4h:function(G){this.UA.Ab_(this.AGS);
},Axo:function(){var Gd=A._GetAutoObject(A.Device.Device).Bt.Ca();this.AGS=A._NewObject(
C.Ajs,0);if(Gd>0){var O=Gd-1;while(O>=0){var D8=A._GetAutoObject(A.Device.Device
).Bt.HF(O,6);this.Att(this.AGS,O,9,D8);O=O-1;}}A.pe([this,this.A4h],this);},Att:
function(A0V,Ad,A0U,Qa){var Alt=A._GetAutoObject(A.Device.Device).Bt.I2(Ad,A0U);
if(!!Alt)A0V.Os(Alt,Qa);},Ap6:function(Ac5){var Fs=A._NewObject(A.Device.Filter,
0);var Azw=A._NewObject(A.Device.UInt32FilterCriterion,0);Azw.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).ZQ(A._GetAutoObject(A.Device.Device).AqQ)-1,true);Fs.CW(Azw);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,Ac5,true);Fs.
CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bl(Fs);},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.Text._Init.call(this.KP={I:this},0);C.AT8._Init.call(this.
UA={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A_={I:this},0);this.__proto__=C.AB0;this.AP.L(A.jb.Bc);this.A_.L(A.jb.Bc);this.J(
this.KP,0);this.J(this.UA,0);this.J(this.AP,0);this.J(this.A_,0);this.KP.S(A.aaL(
A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.KP._Done();
this.UA._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.KP._ReInit();this.UA._ReInit();this.AP._ReInit(
);this.A_._ReInit();this.KP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AGS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.AT8={AUP:0,Init:function(aArg
){},AOK:function(){return A._GetAutoObject(A.Device.Helper).Aqp(this.AUP);},AOM:
function(){return this.AOK()+(this.Mt*86400);},Bnf:function(E){if(this.AUP===E)return;
this.AUP=E;A.pe([this,this.WF],this);},_Init:function(aArg){C.Aht._Init.call(this
,aArg);this.__proto__=C.AT8;this.Bc.H(Bqy);this.Bnc(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Do:function(){if(this.K&&this.K.Do)return this.K.Do.apply(this,arguments);else
return C.FactoryResetScope.Buc.apply(this,arguments);},Buc:function(){return 2;}
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
Device).Am);if(this.Bgm)A._GetAutoObject(A.Device.Device).A9(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A9(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Ev.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.AR6={Wv:function(G){this.Agp();A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.Settings
),[this,this.A3p]);A._GetAutoObject(C.BH).Ft();this.AL6();A._GetAutoObject(C.BH).
MZ(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.
BH).MZ(A.aaR(A.acf.ARk)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},DE:function(G){},Abt:function(){return C.Amz;},Abu:function(){return C.Am0;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).ACV());},HO:function(G){C.Tu.HO.call(this,G);if(this.Akh()===false){this.
N.Cs(A.aaL(A.ach.Avv));this.N.Ck=[this,this.ANW];this.N.FJ(A.jV);}this.N.OO(false
);this.N.OP(false);},Agb:function(){A._GetAutoObject(C.A$).Cg(47);},A3p:function(
G){A._GetAutoObject(A.Device.Device).Ds(0);A._GetAutoObject(C.A$).Cg(89);},_Init:
function(aArg){C.Tu._Init.call(this,aArg);this.__proto__=C.AR6;this.Dq(C.ADb);this.
Dz(A.aaR(A.acf.A7P));this.AS_(A._GetAutoObject(C.Av4));},_ReInit:function(){C.Tu.
_ReInit.call(this);this.Dz(A.aaR(A.acf.A7P));},_className:"Application::NoTransponderListScreen"
};C.AR5={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AR5;this.
KW.Ar(false);this.KW.Aj(false);this.KW.Z(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ADb={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdX(8));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.ADb;},_className:"Application::HeaderNoTransponderListFilter"};C.ABJ={AuP:null
,FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuP.BI(aIndex
);},_Init:function(aArg){C.Ga._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuP={I:this},0);this.__proto__=C.ABJ;},_Done:function(){this.__proto__=
C.Ga;this.AuP._Done();C.Ga._Done.call(this);},_ReInit:function(){C.Ga._ReInit.call(
this);this.AuP._ReInit();},_Mark:function(D){var B;C.Ga._Mark.call(this,D);if((B=
this.AuP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AL1={Co:null,Ad0:null,Init:function(aArg){this.Bb(this.Co);},KR:function(){if(
!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.XA];this.Bx.Ck=null;
this.Bx.Cl=[this,this.A22];this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.
ach.Aex));}return this.Bx;},AAs:function(G){var Aa=(C.Aji.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad0)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$X);},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Aji._Init.call(this.
Co={I:this},0);C.Aji._Init.call(this.Ad0={I:this},0);this.__proto__=C.AL1;this.H(
Rk);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(IR);this.Co.T(A.aaR(A.acf.
AEa));this.Ad0.H(P7);this.Ad0.T(A.aaR(A.acf.Tt));this.J(this.Co,0);this.J(this.Ad0
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAs];this.Ad0.AR=[this,this.
AAs];this.Init(aArg);},_Done:function(){this.__proto__=C.Fm;this.Co._Done();this.
Ad0._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.
Co._ReInit();this.Ad0._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AEa));this.Ad0.T(A.aaR(A.acf.Tt));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fm._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BFp={Undefined:0,BFn:1,BFo:2,IdScanned:3,BEm:4,BDn:5,BD8:6};C.AMd={A$c:function(
){A._GetAutoObject(A.Device.Device).A9(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Be1]);},_Init:function(aArg){C.AuF._Init.call(
this,aArg);this.__proto__=C.AMd;this.Ga.As(1);this.ATe(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aer={VQ:null,VS:null,VT:null,AgV:null,AgW:null,AgX:null,CB:null,Ck:null,Cl:null
,An4:A.jV,An5:A.jV,An6:A.jV,Aq6:0,Aq7:0,Aq8:0,Ahc:0,ZD:false,ZC:false,Asl:false,
Asz:false,Asy:false,Ajy:function(Fa){this.CB=Fa.CB;this.Ck=Fa.Ck;this.Cl=Fa.Cl;this.
An4=Fa.An4;this.An5=Fa.An5;this.An6=Fa.An6;this.Ahc=Fa.Ahc;this.VQ=Fa.VQ;this.VS=
Fa.VS;this.VT=Fa.VT;this.AgV=Fa.AgV;this.AgW=Fa.AgW;this.AgX=Fa.AgX;this.Asy=Fa.
Asy;this.Asz=Fa.Asz;this.Asl=Fa.Asl;this.ZC=Fa.ZC;this.ZD=Fa.ZD;this.Aq6=Fa.Aq6;
this.Aq7=Fa.Aq7;this.Aq8=Fa.Aq8;},AkP:function(Fa){Fa.CB=this.CB;Fa.Ck=this.Ck;Fa.
Cl=this.Cl;Fa.Hu(this.An4);Fa.FJ(this.An5);Fa.CV(this.An6);Fa.AFe(this.Ahc);Fa.AE7(
this.VQ);Fa.ArN(this.VS);Fa.AnA(this.VT);Fa.CY(this.AgV);Fa.Cs(this.AgW);Fa.C6(this.
AgX);Fa.OO(this.Asy);Fa.OP(this.Asz);Fa.Asl=this.Asl;Fa.ZC=this.ZC;Fa.ZD=this.ZD;
Fa.Bmm(this.Aq6);Fa.AS4(this.Aq7);Fa.A9V(this.Aq8);},_Init:function(aArg){this.__proto__=
C.Aer;this.VQ=A.aaL(A.fl.Ak);this.VS=A.aaL(A.fl.Ak);this.VT=A.aaL(A.fl.Ak);A.h7++;
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
Dq(C.AC$);},_className:"Application::NewAnimalSetTransponderScreen"};C.C7={Abc:null
,CountryToString:null,Do:function(){return 40;},C4:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lt(aIndex);},DU:function(A7){return A7;
},HH:function(){return 39;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.
Abc)(F=this.Abc,F[2].call(F[0],E));},A1r:function(G){var F;if(!!this.Abc)this.Q=(
F=this.Abc,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},AEZ:
function(E){if(A.aaZ(this.Abc,E))return;if(!!this.Abc)A.z$([this,this.A1r],this.
Abc,0);this.Abc=E;if(!!this.Abc)A.zX([this,this.A1r],this.Abc,0);A.pe([this,this.
A1r],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C7;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abc)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OZ={AC:null,Q:null,Background:null,Im:null,Il:null,M0:
0,AM:0,Gl:0,FZ:0,Af_:function(G){this.J$(this);},Bk:function(aSize){A.Core.P.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.
L(A.jb.AV);this.Dr(256);}else{this.Background.L(this.M0);this.Dr(256);}},Af9:function(
G){this.J6(this);},CI:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3n],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3n],E,0);if(!!E)A.pe([this
,this.A3n],this);},CT:function(E){if(this.M0===E)return;this.M0=E;this.An();},J$:
function(G){var F;var BR=this.AM;this.By(this.AM+1);if(this.AM!==BR){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},J6:function(
G){var F;var BR=this.AM;this.By(this.AM-1);if(this.AM!==BR){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C4(this.AM)));A.abo(this.Q,0);}},By:function(
E){if(E<this.Gl)E=this.FZ;if(E>this.FZ)E=this.Gl;if(this.AM===E)return;this.AM=E;
this.An();},F0:function(E){if(this.Gl===E)return;this.Gl=E;this.An();},EV:function(
E){if(this.FZ===E)return;this.FZ=E;this.An();},C2:function(G){var F;if(!!this.Q)
this.By(this.AC.DU((F=this.Q,F[1].call(F[0]))));},As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},A3n:function(G){var F;if(!!this.
AC){this.F0(0);this.EV(this.AC.HH());if(!!this.Q)this.By(this.AC.DU((F=this.Q,F[
1].call(F[0]))));this.An();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BN._Init.call(this.Im={
I:this},0);A.Core.BN._Init.call(this.Il={I:this},0);this.__proto__=C.OZ;this.H(A$Y
);this.Background.H(Ate);this.Im.Filter=4;this.Il.Filter=5;this.M0=A.jb.CK;this.
J(this.Background,0);this.Im.BO=[this,this.Af_];this.Im.D1=[this,this.Af_];this.
Il.BO=[this,this.Af9];this.Il.D1=[this,this.Af9];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Im._Done();this.Il._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Im._ReInit();this.Il._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RO={A1j:A.jV,Ai:function(
Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5j));this.Ks(this.A1j);},Ce:function(
G){C.Fu.Ce.call(this,G);var Alz=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Alz)this.A1j=Xa;else this.A1j=A._GetAutoObject(A.acj.KK).AjM(Alz);this.An();
},_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RO;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RP={A2n:0,Ai:function(Ae){C.Fu.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARi));if(this.A2n>0)this.Ks(this.A2n.toFixed());else
this.Ks(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fu.Ce.call(this,G);this.A2n=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.An();},_Init:function(aArg){C.Fu._Init.call(
this,aArg);this.__proto__=C.RP;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Do:function(){return 5;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},FX:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 4;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akx(E);},A1L:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B7,
this.B8],0);},LY:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1L],[B=this.Animal,B.ASn,B.Akx],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1L],[B=this.Animal,B.ASn,B.Akx],0);A.pe([this,this.A1L],this);
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
)this.Animal.NY(E);},A1h:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B7,this.B8],0);},LY:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1h],[B=this.Animal,B.Av8,B.NY],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1h],[B=this.Animal,B.Av8,B.NY],0);A.pe([
this,this.A1h],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARD={V5:null,YM:null,AeJ:null,Init:function(
aArg){this.Bb(this.V5);},Adu:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YM)this.BxX();else if(Aa===this.V5)this.BAE(this);else throw new
Error(Ayd);A._GetAutoObject(A.Device.Device).Ds(0);},BAE:function(G){var B;var F;
var Vh=(C.Amr.isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null
);if(!Vh){A.ab5("%s",Bqz);return;}Vh.AKB(this);},BxX:function(){A._GetAutoObject(
A.Device.Helper).W.AGA(true);A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(
A.Device.Device).Am);A._GetAutoObject(A.Device.Device).A9(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ml._Init.call(this.V5={I:this},0);C.Ml._Init.call(this.YM={
I:this},0);C.VL._Init.call(this.AeJ={I:this},0);this.__proto__=C.ARD;var B;this.
H(AcP);this.V5.H(P7);this.V5.Ar(true);this.V5.T(A.aaR(A.acf.A_U));this.V5.Bg(true
);this.YM.H(IR);this.YM.Ar(true);this.YM.T(A.aaR(A.acf.A4I));this.YM.Bg(true);this.
AeJ.H(BF);this.AeJ.T(A.aaR(A.acf.ACK));this.AeJ.Bg(true);this.J(this.V5,0);this.
J(this.YM,0);this.J(this.AeJ,0);this.V5.AR=[this,this.Adu];this.YM.AR=[this,this.
Adu];this.AeJ.ASS([B=A._GetAutoObject(A.Device.Device),B.Art,B.Atg]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V5._Done();this.YM._Done(
);this.AeJ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V5._ReInit();this.YM._ReInit();this.AeJ._ReInit();this.V5.
T(A.aaR(A.acf.A_U));this.YM.T(A.aaR(A.acf.A4I));this.AeJ.T(A.aaR(A.acf.ACK));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeJ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VL={
Ai:function(Ae){C.T9.Ai.call(this,Ae);var FN=A.jb.CK;var GQ=A.jb.Text;if(this.Hf
){FN=A.jb.Text;GQ=A.jb.Bm;}if(!this.LI){this.Background.L(FN);this.V.L(A.jb.Am4);
}else if(this.Qn){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KE){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FN);this.V.
L(GQ);}if(this.AmB){this.Mj.Cv(1);this.Mj.L(A.jb.H6);}else{this.Mj.Cv(0);this.Mj.
L(A.jb.Bm);}},_Init:function(aArg){C.T9._Init.call(this,aArg);this.__proto__=C.VL;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AvX={C8:null,A1:null,AF:
null,Aki:null,QS:null,EN:null,ARV:Lv,Bk:function(aSize){C.Co.Bk.call(this,aSize);
var FN=A.jb.CK;var GQ=A.jb.Text;if(this.Hf){FN=A.jb.Bm;GQ=A.jb.Text;}this.Background.
L(FN);this.V.L(GQ);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CA;C.Co.Ai.call(this
,Ae);this.Aki.L(this.V.AQ);this.QS.L(this.V.AQ);this.QS.R(BqA);this.T(((this.ARV+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak5(840003123456789).toFixed(
));if(!!this.A1&&!!this.AF){var A2s=this.QS.Afd([(this.QS.String.length-(F=this.
AF,F[1].call(F[0])))-(CA=this.A1,CA[1].call(CA[0])),0]);var A3N=this.QS.Afd([this.
QS.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABc=this.QS.Db();this.EN.H([
A2s[0]-1,ABc[1],A3N[0]+1,ABc[3]]);}else this.EN.H(this.QS.Db());},DB:function(E){
if(this.C8===E)return;this.C8=E;this.Aki.Aw(E);},OM:function(E){if(A.aaZ(this.A1
,E))return;if(!!this.A1)A.z$([this,this.AaI],this.A1,0);this.A1=E;if(!!E)A.zX([this
,this.AaI],E,0);if(!!E)A.pe([this,this.AaI],this);},PN:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaJ],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaJ],E,0);if(!!E)A.pe([this,this.AaJ],this);},AaJ:function(G){this.An(
);},AaI:function(G){this.An();},ArZ:function(E){if(this.ARV===E)return;this.ARV=
E;this.An();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Aki={I:this},0);A.acg.Text._Init.call(this.QS={I:this},0);A.acg.BU._Init.call(
this.EN={I:this},0);this.__proto__=C.AvX;this.H(J0);this.V.A6(0x11);this.Aki.H(P5
);this.QS.H(BqB);this.EN.H(BqC);this.EN.Nh(2);this.EN.L(A.jb.E1);this.J(this.Aki
,0);this.J(this.QS,0);this.J(this.EN,0);this.QS.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Aki._Done();this.QS._Done();this.EN._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Aki._ReInit();this.
QS._ReInit();this.EN._ReInit();this.QS.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aki)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AT2:0,Init:
function(aArg){var B;A.zX([this,this.Bek],[B=A._GetAutoObject(A.Device.Device),B.
AEr,B.AIH],0);A.pe([this,this.Bek],this);},HO:function(G){C.Tx.HO.call(this,G);if(
this.AjQ)this.N.Cs(A.aaL(A.ach.AD));else this.N.Cs(A.aaL(A.ach.ANe));this.N.C6(A.
aaL(A.ach.Options));this.N.FJ(A.jV);this.N.CV(A.jV);this.N.Ck=[this,this.A_D];this.
N.Cl=[this,this.Wv];this.N.ArN(A.aaL(A.fl.Ak));this.N.AnA(A.aaL(A.fl.Ak));},MU:function(
G){this.BeF(this);},Om:function(G){this.BAz(this);},Ago:function(Ac6,Ac7,Bw1){A.
_GetAutoObject(C.BH).AuA(Ac6,Ac7,[this,this.A8O,this.ATh],Bw1);},Wv:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjQ){A._GetAutoObject(C.BH).
Qw(A.aaR(A.acf.BhM),[this,this.Bnv]);A._GetAutoObject(C.BH).Ft();}this.Ago(A.aaR(
A.acf.Rating),[this,this.ATH],3);this.Ago(A.aaR(A.acf.Afr),[this,this.ATJ],2);this.
Ago(A.aaR(A.acf.Temperature),[this,this.ATI],1);this.Ago(A.aaR(A.acf.XP),[this,this.
ATG],0);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.A5S));
A._GetAutoObject(A.Device.Device).Ds(6);},ATh:function(E){if(this.AT2===E)return;
this.AT2=E;A.abo([this,this.A8O,this.ATh],0);},Bek:function(G){this.ATh(A._GetAutoObject(
A.Device.Device).D9);},A8O:function(){return this.AT2;},_Init:function(aArg){C.Tx.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vu:null
,Init:function(aArg){var B;A.zX([this,this.Af6],[B=A._GetAutoObject(A.Device.Device
).Am,B.Fj,B.Fn],0);A.pe([this,this.Bgr],this);A.pe([this,this.Q6],this);},CF:function(
G){C.Tx.CF.call(this,G);A.pe([this,this.Bgx],this);},AGG:function(G){C.Tx.AGG.call(
this,G);if(!!this.Lf)this.Ahw(this.Lf,this.Vu);},HO:function(G){C.Tx.HO.call(this
,G);this.N.Cs(A.aaL(A.ach.AQS));this.N.C6(A.aaL(A.ach.AQT));if(this.AjQ)this.N.AS4(
0);else this.N.AS4(1);this.N.A9V(A._GetAutoObject(A.Device.Converter).BgV(A._GetAutoObject(
A.Device.Device).D9));this.N.FJ(A.jV);this.N.CV(A.jV);this.N.Ck=[this,this.Bll];
this.N.Cl=[this,this.Bnx];this.N.ArN(A.aaL(A.fl.Ak));this.N.AnA(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).Am.QE()){this.N.I4.Dr(100);this.N.Ck=null;
}else this.N.I4.Dr(255);if(!A._GetAutoObject(A.Device.Device).Am.Ca()){this.N.Le.
Dr(100);this.N.Cl=null;}else this.N.Le.Dr(255);if(A._GetAutoObject(A.Device.Device
).Am.Ca()<=1){this.N.TW.Dr(100);this.N.TX.Dr(100);}else{this.N.TW.Dr(255);this.N.
TX.Dr(255);}},MU:function(G){if(A._GetAutoObject(A.Device.Device).Am.Ca()<=1)return;
var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;if(LC>=A._GetAutoObject(A.
Device.Device).Am.Ca())LC=0;A._GetAutoObject(A.Device.Helper).HL(LC);},Om:function(
G){if(A._GetAutoObject(A.Device.Device).Am.Ca()<=1)return;var LC=A._GetAutoObject(
A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(A.Device.Device).Am.Ca(
)-1;A._GetAutoObject(A.Device.Helper).HL(LC);},Af5:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A$).Cg(94);},Bll:function(G){A._GetAutoObject(
A.Device.Device).Ds(10);},Bnx:function(G){this.BeF(this);},Q6:function(G){A._GetAutoObject(
A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.Helper).Mo());A.pe([this,this.Bgx
],this);},Bgr:function(G){if(!A._GetAutoObject(A.Device.Device).Am.Ca()){this.Vu.
Z(true);if(!A._GetAutoObject(A.Device.Device).Am.QE()||!A._GetAutoObject(A.Device.
Device).Am.Filter)this.Vu.R(A.aaR(A.acf.AEi));else if(!A._GetAutoObject(A.Device.
Device).Am.Filter.DQ(1,4)){if(A._GetAutoObject(A.Device.Helper).ACW(A._GetAutoObject(
A.Device.Device).Am.Filter)===1)this.Vu.R(A.aaR(A.acf.AN6));else this.Vu.R(A.aaR(
A.acf.AN5));}else this.Vu.R(A.aaR(A.acf.AR2));}else this.Vu.Z(false);},Bgx:function(
G){var BBx=A._GetAutoObject(A.Device.Helper).W.Id;var A3Q=A._GetAutoObject(A.Device.
Device).Am.Lc(0,BBx);if(!A._GetAutoObject(A.Device.Device).Am.Ca())A._GetAutoObject(
A.Device.Helper).HL(-1);else if(A3Q<0)A._GetAutoObject(A.Device.Helper).HL(0);},
Af6:function(G){this.Bgr(this);this.HO(this);},_Init:function(aArg){C.Tx._Init.call(
this,aArg);C.AkQ._Init.call(this.Vu={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dq(C.APu);this.Vu.H(E$);this.J(this.Vu,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tx;this.Vu._Done();C.Tx._Done.call(this);},_ReInit:function(){
C.Tx._ReInit.call(this);this.Vu._ReInit();},_Mark:function(D){var B;C.Tx._Mark.call(
this,D);if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMs={QM:null,V6:null,AbJ:null,YP:null,Init:function(aArg){var B;var F;this.Bb(
this.QM);if(!!A._GetAutoObject(C.A$).Q){var Vh=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.ab5("%s",AZJ);
return;}else{if(Vh.AjQ)this.QM.T(A.aaR(A.acf.Bj));else this.QM.T(A.aaR(A.acf.EU)
);var Azr=A._GetAutoObject(A.Device.Device).Am.Filter;if(!Azr||A._GetAutoObject(
A.Device.Helper).Arb(Azr))this.YP.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).Am.Ca()){this.V6.Ar(false);this.QM.Ar(false);}}}},Adu:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Ds(0);if(
Aa===this.AbJ)A._GetAutoObject(C.A$).Cg(9);else if(Aa===this.V6)A._GetAutoObject(
A.Device.Device).Ds(7);else if(Aa===this.QM)this.BB2();else if(Aa===this.YP)this.
A1p();else throw new Error(Ayd);},BB2:function(){var B;var F;var Vh=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.
ab5("%s",AZJ);return;}Vh.A_D(this);},A1p:function(){var B;var F;var Vh=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A$).Q,F[1].call(F[0])))?B:null);if(!Vh){A.
ab5("%s",AZJ);return;}Vh.Q6(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Ml._Init.call(this.QM={I:this},0);C.Ml._Init.call(this.V6={I:this},
0);C.Ml._Init.call(this.AbJ={I:this},0);C.Ml._Init.call(this.YP={I:this},0);this.
__proto__=C.AMs;this.H(AfA);this.QM.H(Aaf);this.QM.Ar(true);this.QM.T(A.aaR(A.acf.
EU));this.QM.Bg(true);this.V6.H(P7);this.V6.Ar(true);this.V6.T(A.aaR(A.acf.AUr));
this.V6.Bg(true);this.AbJ.H(IR);this.AbJ.T(A.aaR(A.acf.AkS));this.AbJ.Bg(true);this.
YP.H(BF);this.YP.T(A.aaR(A.acf.AB6));this.YP.Bg(true);this.J(this.QM,0);this.J(this.
V6,0);this.J(this.AbJ,0);this.J(this.YP,0);this.QM.AR=[this,this.Adu];this.V6.AR=[
this,this.Adu];this.AbJ.AR=[this,this.Adu];this.YP.AR=[this,this.Adu];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QM._Done();this.V6._Done(
);this.AbJ._Done();this.YP._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QM._ReInit();this.V6._ReInit();this.AbJ.
_ReInit();this.YP._ReInit();this.QM.T(A.aaR(A.acf.EU));this.V6.T(A.aaR(A.acf.AUr
));this.AbJ.T(A.aaR(A.acf.AkS));this.YP.T(A.aaR(A.acf.AB6));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I5={TY:null,Ez:null,Ym:null,Background:null,Ap:null,Im:null,Il:null,M0:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var G$=((Ae&0x10)===0x10
);var Iy=((Ae&0x40)===0x40);if(Iy){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.Dr(256);}else if(G$){this.Background.L(this.M0);this.Ap.L(A.jb.Text);this.Dr(
256);}else{this.Background.L(this.M0);this.Ap.L(A.jb.Text);this.Dr(128);}if(!this.
AM)this.Ap.Cv(0);else if(this.AM>0){if(A.aaZ(this.TY,[B=A._GetAutoObject(A.Device.
Device),B.Awg,B.AyK]))this.Ap.Cv(2);else if(A.aaZ(this.TY,[B=A._GetAutoObject(A.
Device.Device),B.Awf,B.AyJ]))this.Ap.Cv(3);else if(!!this.Ym&&((F=this.Ym,F[1].call(
F[0]))===1))this.Ap.Cv(1);else this.Ap.Cv(0);}else if(A.aaZ(this.TY,[B=A._GetAutoObject(
A.Device.Device),B.Awg,B.AyK]))this.Ap.Cv(6);else if(A.aaZ(this.TY,[B=A._GetAutoObject(
A.Device.Device),B.Awf,B.AyJ]))this.Ap.Cv(7);else if(!!this.Ym&&((F=this.Ym,F[1].
call(F[0]))===1))this.Ap.Cv(5);else this.Ap.Cv(4);},Af_:function(G){this.J$(this
);},Af9:function(G){this.J6(this);},J$:function(G){this.By(1);},J6:function(G){this.
By(-1);},Bmw:function(E){if(A.aaZ(this.TY,E))return;if(!!this.TY)A.z$([this,this.
A28],this.TY,0);this.TY=E;if(!!E)A.zX([this,this.A28],this.TY,0);A.pe([this,this.
A28],this);},Uj:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.
Af8],this.Ez,0);this.Ez=E;if(!!E)A.zX([this,this.Af8],this.Ez,0);if(!!E)A.pe([this
,this.Af8],this);},A28:function(G){var F;if(!!this.TY)this.By((F=this.TY,F[1].call(
F[0])));},Af8:function(G){A.pe([this,this.BCd],this);},CT:function(E){if(this.M0===
E)return;this.M0=E;this.An();},By:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.TY)(F=this.TY,F[2].call(F[0],E));this.An();A.abo([this,this.Ue,this.
By],0);},A9L:function(E){if(A.aaZ(this.Ym,E))return;if(!!this.Ym)A.z$([this,this.
Af8],this.Ym,0);this.Ym=E;if(!!E)A.zX([this,this.Af8],this.Ym,0);if(!!E)A.pe([this
,this.Af8],this);},BCd:function(G){var F,CA;if(!this.Ym||!this.Ez)return;this.Bmw(
A._GetAutoObject(A.Device.Helper).Bc9((F=this.Ym,F[1].call(F[0])),(CA=this.Ez,CA[
1].call(CA[0]))));this.An();},Ue:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BN._Init.call(this.Im={I:this},0);
A.Core.BN._Init.call(this.Il={I:this},0);this.__proto__=C.I5;this.H(AIz);this.Background.
AZ(0x3F);this.Background.H(AIz);this.Ap.AZ(0x3C);this.Ap.H(AIz);this.Im.Filter=4;
this.Il.Filter=5;this.M0=A.jb.CK;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.AUR));this.Im.BO=[this,this.Af_];this.Il.BO=[this,this.Af9];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Im._Done();this.Il._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Im._ReInit(
);this.Il._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.TY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ym)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AL0={Wv:function(G){var B;var F;this.Agp();if(!!A._GetAutoObject(A.Device.Helper
).AOI((F=this.FG,F[1].call(F[0])),0,true))this.AL8(A.aaR(A.acf.A6R),[this,this.Bny
],[B=A._GetAutoObject(A.Device.Device),B.A78,B.BaI]);else A._GetAutoObject(C.BH).
XN(A.aaR(A.acf.A6R));A._GetAutoObject(C.BH).Ft();this.IY(A.aaR(A.acf.LinkTransponder
),[this,this.BmN],8);this.IY(A.aaR(A.acf.Tt),[this,this.Aku],9);this.IY(A.aaR(A.
acf.A$L),[this,this.Bno],10);this.IY(A.aaR(A.acf.AGb),[this,this.ATn],3);this.IY(
A.aaR(A.acf.An3),[this,this.AwR],2);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(
C.BH).MZ(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},DE:function(G){},Abt:function(){return C.Amz;},Abu:function(){return C.Am0;
},Q6:function(G){var F;A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(
A.Device.Helper).A6s((F=this.FG,F[1].call(F[0]))));},HO:function(G){var F;C.GU.HO.
call(this,G);if(this.Akh()===false){this.N.Cs(A._GetAutoObject(A.Device.Converter
).BgX((F=this.FG,F[1].call(F[0]))));this.N.Ck=[this,this.AIU];this.N.FJ(A.jV);}this.
N.OO(false);this.N.OP(false);},Agb:function(){A._GetAutoObject(C.A$).Cg(52);},A3b:
function(G){C.GU.A3b.call(this,G);A.pe([this,this.Bbl],this);},Bny:function(G){A.
_GetAutoObject(A.Device.Device).Awm(!A._GetAutoObject(A.Device.Device).Aqe);this.
An$(this);},An$:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).Am.Filter.
Fg();A._GetAutoObject(A.Device.Helper).Bn6(Be);if(A._GetAutoObject(A.Device.Device
).Aqe){var A18=A._GetAutoObject(A.Device.Helper).AOI((F=this.FG,F[1].call(F[0]))
,21600,true);Be.CW(A18);}A._GetAutoObject(A.Device.Device).Am.Bl(Be);},_Init:function(
aArg){C.GU._Init.call(this,aArg);this.__proto__=C.AL0;var B;this.Dz(A.aaR(A.acf.
Av2));this.AwM([B=A._GetAutoObject(A.Device.Device),B.A77,B.BaH]);},_ReInit:function(
){C.GU._ReInit.call(this);this.Dz(A.aaR(A.acf.Av2));},_className:"Application::ActionListScreen"
};C.ALZ={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.ALZ;},
_className:"Application::ActionListFilterScreen"};C.APu={II:null,IO:null,Bc:null
,My:A.jV,Init:function(aArg){var B;A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8T,B.A_e],0);A.zX([this,this.Nm],[B=A._GetAutoObject(A.Device.Device
).Am,B.Fj,B.Fn],0);},De:function(E){C.IG.De.call(this,E);this.IO.L(E);},DY:function(
G){C.IG.DY.call(this,G);var Azr=A._GetAutoObject(A.Device.Device).Am.Filter;if(!
Azr||A._GetAutoObject(A.Device.Helper).Arb(Azr))this.II.Z(false);else this.II.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqX())this.AwY(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+A$Z)+A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());else this.AwY(A$0);},AwY:function(E){if(this.My===E)return;this.My=E;
this.IO.R(E);},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.Ap._Init.call(
this.II={I:this},0);A.acg.Text._Init.call(this.IO={I:this},0);A.acg.C5._Init.call(
this.Bc={I:this},0);this.__proto__=C.APu;this.HP.H(BqD);this.DS.H(BqE);this.II.H(
BqF);this.II.L(A.jb.Text);this.IO.H(A$1);this.IO.Hh(2);this.IO.KS(true);this.IO.
A6(0x12);this.IO.R(A$2);this.Bc.DC(Ayx);this.Bc.DL(Ayy);this.Bc.L(A.jb.Bc);this.
J(this.II,0);this.J(this.IO,0);this.J(this.Bc,0);this.II.Aw(A.aaL(A.ach.Aez));this.
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
Q)this.C8.Aw(null);else{this.C8.Aw(this.AC.ACR(this.AC.DU((F=this.Q,F[1].call(F[
0])))));this.C8.Cv(this.AC.ACT(this.AC.DU((F=this.Q,F[1].call(F[0])))));}var Iy=((
Ae&0x40)===0x40);if(Iy)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OZ._Init.call(this,aArg);A.acg.Ap._Init.call(this.C8={I:this},0);this.__proto__=
C.Aq_;this.H(AIz);this.C8.H(A$Y);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OZ;this.C8._Done();C.OZ._Done.call(this);},_ReInit:function(){C.OZ._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OZ._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuZ={VN:null,DirectionOfCountingToString:null,Aef:null,Do:function(){return 2;
},C4:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return-1;return aIndex;
},FX:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return A.jV;return this.
DirectionOfCountingToString.BI(aIndex);},DU:function(A7){return A7;},HH:function(
){return this.Do()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.VN)(F=
this.VN,F[2].call(F[0],E));},ACR:function(aIndex){if((aIndex<0)||(aIndex>=this.Do(
)))return null;return this.Aef.AsG(aIndex);},ACT:function(aIndex){if((aIndex<0)||(
aIndex>=this.Do()))return-1;return this.Aef.AsH(aIndex);},A1E:function(G){var F;
if(!!this.VN)this.Q=(F=this.VN,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7
,this.B8],0);},AeY:function(E){if(A.aaZ(this.VN,E))return;if(!!this.VN)A.z$([this
,this.A1E],this.VN,0);this.VN=E;if(!!this.VN)A.zX([this,this.A1E],this.VN,0);A.pe([
this,this.A1E],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aef._Init.call(this.Aef={I:this},0);this.__proto__=C.AuZ;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aef._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aef._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aef)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMk={Hp:null,Ez:null,AnimalIdGenerationMethodToString:
null,AdW:null,Do:function(){return 4;},C4:function(aIndex){var F;var A7=-1;if((aIndex<
0)||(aIndex>=this.Do()))return-1;switch(aIndex){case 0:A7=0;break;case 1:A7=1;break;
case 2:A7=this.By9((F=this.Ez,F[1].call(F[0])));break;case 3:A7=5;break;default:
throw new Error(BqG+aIndex.toFixed());}return A7;},FX:function(aIndex){if((aIndex<
0)||(aIndex>=this.Do()))return A.jV;return this.AnimalIdGenerationMethodToString.
BI(this.C4(aIndex));},DU:function(A7){var aIndex=-1;switch(A7){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(BqH+A7.toFixed());}return aIndex;},HH:function(){return this.
Do()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Hp)(F=this.Hp,F[2].
call(F[0],E));},ACR:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return null;
return this.AdW.AsG(this.C4(aIndex));},ACT:function(aIndex){if((aIndex<0)||(aIndex>=
this.Do()))return-1;return this.AdW.AsH(this.C4(aIndex));},A09:function(G){var F;
if(!!this.Hp)this.Q=(F=this.Hp,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7
,this.B8],0);},Blt:function(E){if(A.aaZ(this.Hp,E))return;if(!!this.Hp)A.z$([this
,this.A09],this.Hp,0);this.Hp=E;if(!!this.Hp)A.zX([this,this.A09],this.Hp,0);A.pe([
this,this.A09],this);},Uj:function(E){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.
z$([this,this.Af8],this.Ez,0);this.Ez=E;if(!!this.Ez)A.zX([this,this.Af8],this.Ez
,0);A.pe([this,this.Af8],this);},Af8:function(G){A.pe([this,this.BxZ],this);},By9:
function(L3){var Rn=0;switch(L3){case 0:Rn=2;break;case 1:Rn=3;break;case 2:Rn=4;
break;default:throw new Error(BqI+L3.toFixed());}return Rn;},BxZ:function(G){var
Bd7=this.C4(this.DU(this.Q));if(this.Q!==Bd7)this.As(Bd7);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdW._Init.call(this.
AdW={I:this},0);this.__proto__=C.AMk;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdW._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdW._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGC={FF:null,Aa0:null,Q:null,Fh:null,E8:null,HC:null,Wn:null,AW:null,HZ:null
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
default:throw new Error(Atf+this.A8.toFixed());}this.DJ(this);this.An();},As:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},C2:function(G
){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ue,this.
By],0);}},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Om:function(G){this.AA6(2);},MU:function(G){this.AA6(
7);},AA6:function(Gw){var B;var Azs=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azs){var AAj=(A.Core.P.isPrototypeOf(B=this.QD(Azs,Gw,0x15))?B:null);if(!!AAj){
this.Bb(AAj);return true;}}return false;},Ao1:function(G){A.pe([this,this.Bej],this
);},A31:function(G){var B;var F;if(!this.HZ.Hp){this.Kj.AeY(null);return;}switch((
F=this.HZ.Hp,F[1].call(F[0]))){case 0:case 1:this.Kj.AeY(null);break;case 3:this.
Kj.AeY([B=A._GetAutoObject(A.Device.Device),B.ASl,B.AZ3]);break;case 2:this.Kj.AeY([
B=A._GetAutoObject(A.Device.Device),B.ASm,B.AZ4]);break;case 4:case 5:this.Kj.AeY([
B=A._GetAutoObject(A.Device.Device),B.AEw,B.AIL]);break;default:throw new Error(
BqJ+(F=this.HZ.Hp,F[1].call(F[0])).toFixed());}},Bej:function(G){var F;if(!this.
HZ.Hp)return;A.pe([this,this.A31],this);var AtU=false;switch((F=this.HZ.Hp,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtU=true;this.AW.A_w(-1);}break;case 0:
case 1:{AtU=false;this.AW.A_w(A._GetAutoObject(A.Device.Device).A1);}break;default:
throw new Error(Ayp+(F=this.HZ.Hp,F[1].call(F[0])).toFixed());}this.AW.Ar(AtU);this.
HC.Ar(AtU);this.HC.Z(AtU);if(((F=this.HZ.Hp,F[1].call(F[0]))!==this.Alr)||(AtU===
false)){var BR=this.AM;this.By(A._GetAutoObject(A.Device.Helper).AMi((F=this.HZ.
Hp,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BR){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bje((F=this.HZ.Hp,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kq(A._GetAutoObject(A.Device.Device).A1);else this.AW.Kq(0);this.Alr=(
F=this.HZ.Hp,F[1].call(F[0]));},A9o:function(E){var B;if(this.Aa0===E)return;if(
!!this.Aa0){A.z$([this,this.Ao1],[B=this.Aa0,B.Wt,B.JQ],0);A.z$([this,this.Ao1],[
B=this.Aa0,B.Anu,B.Ne],0);A.z$([this,this.Ao1],[B=this.Aa0,B.Arx,B.Q2],0);this.HZ.
Uj(null);}this.Aa0=E;if(!!E){A.zX([this,this.Ao1],[B=this.Aa0,B.Wt,B.JQ],0);A.zX([
this,this.Ao1],[B=this.Aa0,B.Anu,B.Ne],0);A.zX([this,this.Ao1],[B=this.Aa0,B.Arx
,B.Q2],0);this.HZ.Uj([B=this.Aa0,B.Wt,B.JQ]);}if(!!E)A.pe([this,this.Ao1],this);
},Ue:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BN._Init.call(this.Fh={I:this},0);A.Core.BN._Init.call(this.E8={I:this},0
);C.Aq_._Init.call(this.HC={I:this},0);C.Aq_._Init.call(this.Wn={I:this},0);C.AvO.
_Init.call(this.AW={I:this},0);C.AMk._Init.call(this.HZ={I:this},0);C.AuZ._Init.
call(this.Kj={I:this},0);this.__proto__=C.AGC;var B;this.H(UT);this.V.Ar(false);
this.V.R(As9);this.V.L(A.jb.Bm);this.Fh.Filter=6;this.E8.Filter=7;this.HC.H(BqK);
this.HC.Ar(false);this.Wn.H(BqL);this.AW.H(BqM);this.AW.Ar(false);this.J(this.HC
,0);this.J(this.Wn,0);this.J(this.AW,0);this.FF=A._NewObject(C.Aer,0);this.Fh.BO=[
this,this.Om];this.E8.BO=[this,this.MU];this.HC.CI(this.Kj);this.HC.As([B=this.Kj
,B.B7,B.B8]);this.Wn.CI(this.HZ);this.Wn.As([B=this.HZ,B.B7,B.B8]);this.AW.As([this
,this.Ue,this.By]);this.HZ.Blt([B=A._GetAutoObject(A.Device.Device),B.Anq,B.AoA]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fh._Done();this.E8.
_Done();this.HC._Done();this.Wn._Done();this.AW._Done();this.HZ._Done();this.Kj.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fh._ReInit();this.E8._ReInit();this.HC._ReInit();this.Wn._ReInit();this.AW._ReInit(
);this.HZ._ReInit();this.Kj._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wn)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.GZ={AzM:null,Fh:null,E8:null,GW:null,
FW:null,EN:null,M5:0,AMY:0,ABW:0,Uq:0,A$I:-1,AMX:false,Init:function(aArg){A.pe([
this,this.A0w],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EN.Z(this.
AMX);this.EN.H(A.wC(this.Yr(this.ABW).M,this.Yr((this.ABW+this.AMY)-1).M));},Om:
function(G){var D5=(A.Core.BN.isPrototypeOf(G)?G:null);var A1m=this.BfS(2);if(A1m===
false)D5.NH=true;},MU:function(G){var D5=(A.Core.BN.isPrototypeOf(G)?G:null);var
A1m=this.BfS(7);if(A1m===false)D5.NH=true;},BfS:function(Gw){var B;var DW=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DW=this.Bc$(DW,Gw,true);if(!!DW){this.Bb(DW);this.
AzM=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adt:function(
G){A.ab5("%s",Alf);},GP:function(s){this.Adt(s);},FI:function(E){if(this.M5===E)
return;this.M5=E;this.FW.CT(E);this.GW.CT(E);},SI:function(Gw){var B;switch(Gw){
case 2:this.Bb(this.GW);break;case 7:this.Bb(this.FW);break;default:A.ab5("%s%e"
,BqN,Gw);}this.AzM=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LO:function(G){},A0w:
function(s){this.LO(s);},AET:function(E){if(this.AMX===E)return;this.AMX=E;this.
An();},A9u:function(E){if(this.AMY===E)return;this.AMY=E;this.An();},A9t:function(
E){if(this.ABW===E)return;this.ABW=E;this.An();},Yr:function(Hw){var B5=null;switch(
Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.GW;break;default:A.ab5("%s",AhZ
);}return B5;},Kq:function(E){if(this.Uq===E)return;this.Uq=E;this.Amk();},Amk:function(
){A.ab5("%s",Alf);},Bc$:function(AcZ,Gw,LI){var B;if(!!AcZ){var Be;if(LI)Be=0x11;
else Be=0x0;switch(Gw){case 2:AcZ=(C.DF.isPrototypeOf(B=this.AqL(AcZ,Be))?B:null
);break;case 7:AcZ=(C.DF.isPrototypeOf(B=this.TL(AcZ,Be))?B:null);break;default:
throw new Error(BqO);}}return AcZ;},A_w:function(E){if(this.A$I===E)return;this.
A$I=E;var DW=this.FW;var A1M;while(!!DW){A1M=!!E;DW.Ar(A1M);DW.Z(A1M);if(DW===this.
AzM)this.Bb(DW);DW=this.Bc$(DW,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BN._Init.call(this.Fh={I:this},0);A.Core.BN._Init.
call(this.E8={I:this},0);C.DF._Init.call(this.GW={I:this},0);C.DF._Init.call(this.
FW={I:this},0);A.acg.BU._Init.call(this.EN={I:this},0);this.__proto__=C.GZ;this.
H(BqP);this.Fh.Filter=6;this.E8.Filter=7;this.M5=A.jb.CK;this.GW.H(E4);this.FW.H(
A$3);this.EN.H(BqQ);this.EN.Nh(2);this.EN.L(A.jb.E1);this.J(this.GW,0);this.J(this.
FW,0);this.J(this.EN,0);this.Fh.BO=[this,this.Om];this.Fh.D1=[this,this.Om];this.
E8.BO=[this,this.MU];this.E8.D1=[this,this.MU];this.AzM=this.FW;this.GW.Di=[this
,this.GP];this.FW.Di=[this,this.GP];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fh._Done();this.E8._Done();this.GW._Done();this.FW._Done();this.EN.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fh._ReInit();this.E8._ReInit();this.GW._ReInit();this.FW._ReInit();this.EN.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzM)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQY={Dx:null,CU:null,Ct:null
,FI:function(E){if(this.M5===E)return;C.HI.FI.call(this,E);this.Ct.CT(E);this.CU.
CT(E);this.Dx.CT(E);},Yr:function(Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.
FW;break;case 1:B5=this.Ct;break;case 2:B5=this.CU;break;case 3:B5=this.Dx;break;
case 4:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;},_Init:function(aArg
){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(
this.CU={I:this},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQY;this.
H(BqR);this.GW.H(Ate);this.Dx.H(A$4);this.CU.H(A$5);this.Ct.H(A$6);this.FW.H(BqS
);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Ct,-2);this.Dx.Di=[this,this.
GP];this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP];},_Done:function(){this.
__proto__=C.HI;this.Dx._Done();this.CU._Done();this.Ct._Done();C.HI._Done.call(this
);},_ReInit:function(){C.HI._ReInit.call(this);this.Dx._ReInit();this.CU._ReInit(
);this.Ct._ReInit();},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.
Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVs={Q_:null,AcI:null,AVr:0,CF:function(G){this.AcI.Ar(true);},E3:function(G
){this.AcI.Ar(false);},Bnm:function(E){if(this.AVr===E)return;this.AVr=E;this.Q_.
R((((A.aaR(A.acf.AVq)+Aai)+E.toFixed())+BqT)+A.aaR(A.acf.Lb));},Blf:function(){return this.
AVr;},BAU:function(G){A._GetAutoObject(C.A$).Cg(3);A._GetAutoObject(A.Device.Device
).Any(1);},_Init:function(aArg){C.X1._Init.call(this,aArg);C.CH._Init.call(this.
Q_={I:this},0);A.acl.Gh._Init.call(this.AcI={I:this},0);this.__proto__=C.AVs;this.
AeK.H(BqU);this.Uy.R(A.jV);this.Q_.H(BqV);this.Q_.R(A.aaR(A.acf.AVq)+A$7);this.Q_.
L(A.jb.Text);this.AcI.HM(1);this.AcI.Fl(5000);this.AcI.B2=100;this.J(this.Q_,0);
this.Q_.S(A.aaL(A.fl.Af));this.Q_.A2(A.aaL(A.fl.Ak));this.Q_.Cu(A.aaL(A.fl.Bh));
this.AcI.Sv=[this,this.BAU];this.AcI.Q=[this,this.Blf,this.Bnm];},_Done:function(
){this.__proto__=C.X1;this.Q_._Done();this.AcI._Done();C.X1._Done.call(this);},_ReInit:
function(){C.X1._ReInit.call(this);this.Q_._ReInit();this.AcI._ReInit();this.Q_.
R(A.aaR(A.acf.AVq)+A$7);this.Q_.S(A.aaL(A.fl.Af));this.Q_.A2(A.aaL(A.fl.Ak));this.
Q_.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.X1._Mark.call(this,D);if((B=this.
Q_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcI)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARQ={K4:null,Lk:null,BdW:false,Init:
function(aArg){this.Bb(this.C$);},Ev:function(G){var B;if(!!this.K4)this.K4.Ev(this
);C.Wp.Ev.call(this,G);},Af$:function(G){var B;if(!!this.K4)this.K4.Af$(this);C.
Wp.Af$.call(this,G);},CF:function(G){var B;if(!this.BdW){this.BdW=true;A.pe([this
,this.A3v],this);}else if(!this.K4){this.K4=A._NewObject(C.ARS,0);this.K4.A9I([this
,this.AAW]);this.LO(this);this.K4.LO(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ev(this);else C.Wp.CF.call(this,G);}else C.Wp.CF.call(this,G
);},Ap5:function(G){var B;if(!!this.K4)this.K4.Ap5(this);},AAW:function(G){var B;
var F;this.LO(this);this.K4.LO(this);A.pe([this,this.AcS],this);var Bdx=this.LU;
this.AeV(A._GetAutoObject(A.Device.Helper).Abr(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVp(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bdx);if(Bdx)A._GetAutoObject(
A.Device.Helper).W.Q2(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SA(A._GetAutoObject(A.Device.Helper).AMi((F=this.Dh.HZ.Hp,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JD(this.C$);},A3v:function(
G){A._GetAutoObject(C.A$).Cg(79);},_Init:function(aArg){C.Wp._Init.call(this,aArg
);C.Q9._Init.call(this.Lk={I:this},0);this.__proto__=C.ARQ;var B;this.Lk.H(AhV);
this.Lk.Aj(true);this.Lk.T(A.aaR(A.acf.ACl));this.J(this.Lk,-9);this.JV(this.Gi,-
1);this.Lk.Gn([this,this.D_,this.GN]);this.Lk.As([B=A._GetAutoObject(A.Device.Helper
).W,B.ASv,B.AnG]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wp;this.Lk.
_Done();C.Wp._Done.call(this);},_ReInit:function(){C.Wp._ReInit.call(this);this.
Lk._ReInit();this.Lk.T(A.aaR(A.acf.ACl));},_Mark:function(D){var B;C.Wp._Mark.call(
this,D);if((B=this.K4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADK={AgH:null,AgI:null,NK:null,NJ:null,ET:null,FV:null,Eo:null,Dx:null,CU:null,Ct:
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
},0);this.__proto__=C.ADK;this.H(BqW);this.GW.H(AIA);this.AgH.H(Ayz);this.AgI.H(
AZK);this.NK.H(AZL);this.NJ.H(AZM);this.ET.H(AZN);this.FV.H(AZO);this.Eo.H(AZP);
this.Dx.H(A$8);this.CU.H(AZQ);this.Ct.H(BqX);this.FW.H(BqY);this.J(this.AgH,-2);
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
,Ae);this.Amk();},Adt:function(G){var B;var F;var Iw=A.jV;var B5=this.GW;while(!
!B5){if(B5.Ey>0)Iw=Iw+B5.Ey.toFixed();else Iw=Iw+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TL(B5,0x11))?B:null);}var BR=this.AM;this.By(A.wz(Iw,-1,
10));if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LO:function(G){},Amk:function(){var B;var F;if(!!this.Q){var DW=this.FW;
var AdB=this.Uq;var A7=(F=this.Q,F[1].call(F[0]));while(!!DW){if(A7>0){DW.LZ(A7%
10);A7=(A7/10)|0;}else if(AdB>0)DW.LZ(0);else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=
this.AqL(DW,0x11))?B:null);AdB=AdB-1;}}},C2:function(G){var F;if(!!this.Q)this.By((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)
A.pe([this,this.C2],this);},By:function(E){if(this.AM===E)return;this.AM=E;this.
An();},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=C.HI;},_Mark:
function(D){var B;C.GZ._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lg={AM:0,Q:null
,Ai:function(Ae){C.GZ.Ai.call(this,Ae);this.Amk();},Adt:function(G){var B;var F;
var Iw=A.jV;var B5=this.GW;while(!!B5){if(B5.Ey>0)Iw=Iw+B5.Ey.toFixed();else Iw=
Iw+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TL(B5,0x11))?B:null);
}var BR=this.AM;this.By(A.ab0(Iw,0,10));if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LO:function(G){},Amk:function(){var B;
var F;if(!!this.Q){var DW=this.FW;var AdB=this.Uq;var A7=(F=this.Q,F[1].call(F[0
]));while(!!DW){if(A7>0){DW.LZ((A7%10)|0);A7=Math.trunc(A7/10);}else if(AdB>0)DW.
LZ(0);else DW.LZ(-1);DW=(C.DF.isPrototypeOf(B=this.AqL(DW,0x11))?B:null);AdB=AdB-
1;}}},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},As:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);},By:function(
E){if(this.AM===E)return;this.AM=E;this.An();},_Init:function(aArg){C.GZ._Init.call(
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
I:this},0);this.__proto__=C.AvO;this.H(Ayh);this.GW.H(AHH);this.Eo.H(AHI);this.Dx.
H(AHJ);this.CU.H(AHK);this.Ct.H(AHL);this.FW.H(AHM);this.EN.H(A$9);this.J(this.Eo
,-2);this.J(this.Dx,-2);this.J(this.CU,-2);this.J(this.Ct,-2);this.Eo.Di=[this,this.
GP];this.Dx.Di=[this,this.GP];this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP
];},_Done:function(){this.__proto__=C.HI;this.Eo._Done();this.Dx._Done();this.CU.
_Done();this.Ct._Done();C.HI._Done.call(this);},_ReInit:function(){C.HI._ReInit.
call(this);this.Eo._ReInit();this.Dx._ReInit();this.CU._ReInit();this.Ct._ReInit(
);},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.Eo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUz={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bot(0);this.AttributeSet.Bou(1);this.AttributeSet.Bov(4);},Ai:function(Ae){var B;
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
AC)Cz.R(this.By2(this.AC.FX(Gc)));else Cz.R(Xa);Cz.H(A.abK(Cz.M,[this.Dy.V_,(B=this.
Dy.M)[3]-B[1]]));},By2:function(Bxo){var AAG=Bxo;AAG=A._GetAutoObject(A.Device.Helper
).Nk(AAG,BqZ,Bq0);AAG=A._GetAutoObject(A.Device.Helper).Nk(AAG,Bq1,Bq2);return Bq3+
AAG;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUz;this.Dy.H(Bq4);this.Dy.Ju(2);
this.Dy.NZ(A.acg.AuM);this.AttributeSet.Ahg(this.V.AQ);this.AttributeSet.Bme(A.aaL(
A.fl.AOz));this.AttributeSet.A9S(A.aaL(A.fl.Ak));this.AttributeSet.Ahj(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9S(A.aaL(A.fl.Ak));this.AttributeSet.Ahj(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asv._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dq(C.ADa);},_className:"Application::NewAnimalsSetTransponderScreen"
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
L(A.jb.CK);this.V.L(A.jb.Text);}}},By:function(E){C.BW.By.call(this,E);var BzV=this.
EnumToCodeset.AmE(this.Number);var Bd6=this.AC.C4(this.AM);if(BzV!==Bd6){this.AFt(
this.EnumToCodeset.Aei(Bd6));A.abo([this,this.ASw,this.AFt],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[
this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(
A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=
this.N,F[1].call(F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}break;default:
this.FF.AkP((F=this.N,F[1].call(F[0])));}},FQ:function(G){this.Ew(1);},G_:function(
G){this.Ew(0);},Ew:function(EO){var F;if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(
F[0])));this.A8=EO;if((this.A8<0)||(this.A8>1))this.A8=0;this.DJ(this);if(!this.
A8)this.Bb(null);else this.A1Z();this.An();},AFt:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqT()>E)E=this.EnumToCodeset.
AqT();if(this.EnumToCodeset.HH()<E)E=this.EnumToCodeset.HH();}this.Number=E;var BR=
this.AM;if(!!this.EnumToCodeset){var ByS=this.EnumToCodeset.AmE(E);this.By(this.
AC.DU(ByS));if(this.AM!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C4(this.AM)));A.abo(this.Q,0);}}},Anz:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},U8:function(G){this.Ew(this.A8+1);},A1Z:function(){A.ab5(
"%s",Bq5);},ASw:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BN._Init.call(this.Js={I:this},0);this.__proto__=C.OS;this.
Js.Filter=1;this.FF=A._NewObject(C.Aer,0);this.Js.BO=[this,this.U8];},_Done:function(
){this.__proto__=C.BW;this.Js._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Js._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeR={Text:null,Ai:function(
Ae){C.Ek.Ai.call(this,Ae);this.Text.L(this.ACN);},By:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rf(this.AM));this.
An();},AaJ:function(G){A.pe([this,this.Af7],this);},AaI:function(G){A.pe([this,this.
Af7],this);},AlY:function(G){A.pe([this,this.Af7],this);},Af7:function(G){if((!this.
Ig||!this.A1)||!this.AF)return;},_Init:function(aArg){C.Ek._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeR;this.Text.AZ(0x3F
);this.Text.H(As3);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ek;this.Text._Done();C.Ek.
_Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARJ={GF:0,C7:null,AW:null,E7:null,
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
function(G){this.I5.Uj(this.Ez);},AaJ:function(G){var F;this.AW.A9t((F=this.AF,F[
1].call(F[0])));},AaI:function(G){var F;this.AW.A9u((F=this.A1,F[1].call(F[0])));
},By:function(E){if(this.AM===E)return;this.AM=E;this.L9=true;this.Sx(A._GetAutoObject(
A.Device.Helper).Sd(E,0,12));this.Lo(A._GetAutoObject(A.Device.Converter).ZZ(E));
this.L9=false;if(!!E)this.AW.Kq(12);else this.AW.Kq(0);this.An();},AlY:function(
G){A.pe([this,this.Af7],this);},FQ:function(G){var F;if(!this.AM){var BR=this.AM;
this.By(A._GetAutoObject(A.Device.Helper).AC1());if(this.AM!==BR){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(3);},AjN:function(){return this.
GF;},AjP:function(){return 999999999999;},Lo:function(E){if(this.K$===E)return;this.
K$=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Sw,this.Lo],0
);},Sx:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this
,this.Vj],this);A.abo([this,this.Ab0,this.Sx],0);},Vj:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abm(this.GF,12,10
);var BR=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af7:function(G){var F;if((!this.Ig||
!this.A1)||!this.AF)return;if(!(F=this.Ig,F[1].call(F[0])))this.AW.AET(true);else
this.AW.AET(false);},Sw:function(){return this.K$;},Ab0:function(){return this.GF;
},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.C7._Init.call(this.C7={I:this
},0);C.ADK._Init.call(this.AW={I:this},0);C.AsF._Init.call(this.E7={I:this},0);C.
I5._Init.call(this.I5={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARJ;var B;this.RD=3;this.AW.H(Bq6);this.E7.H(A$_);this.
I5.H(A$$);this.J(this.AW,0);this.J(this.E7,0);this.J(this.I5,0);this.C7.AEZ([this
,this.Sw,this.Lo]);this.AW.As([this,this.Ab0,this.Sx]);this.E7.CI(this.C7);this.
E7.As([B=this.C7,B.B7,B.B8]);this.I5.A9L([B=A._GetAutoObject(A.Device.Device),B.
Awa,B.AyG]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.C7._Done(
);this.AW._Done();this.E7._Done();this.I5._Done();this.CountryToString._Done();C.
Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit(
);this.AW._ReInit();this.E7._ReInit();this.I5._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARI={GF:0,C7:null,AW:null,YE:null,Kn:null,E7:null,I5:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pt:0,K$:0,L9:false,Init:function(aArg){A.
zX([this,this.MG],[this,this.PM,this.EB],0);A.zX([this,this.MG],[this,this.Sw,this.
Lo],0);A.zX([this,this.MG],[this,this.Ans,this.Ahk],0);},Ai:function(Ae){C.Ek.Ai.
call(this,Ae);this.I5.Z(this.Afl);this.AW.FI(this.LS);this.YE.FI(this.LS);this.Kn.
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
F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGL)+A.aaR(A.acf.Colon))+Aai)+A.aaR(A.
acf.Bhh));break;case 1:(F=this.N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGL)+A.aaR(A.
acf.Colon))+Aai)+A.aaR(A.acf.BoA));break;case 2:(F=this.N,F[1].call(F[0])).CV(((
A.aaR(A.acf.AGL)+A.aaR(A.acf.Colon))+Aai)+A.aaR(A.acf.Bh$));break;default:(F=this.
N,F[1].call(F[0])).CV(((A.aaR(A.acf.AGL)+A.aaR(A.acf.Colon))+Aai)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cl=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0]
)).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0
])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null
);(F=this.N,F[1].call(F[0])).CV((A.aaR(A.acf.Gu)+Ax9)+this.GermanStateToString.Lt(
A._GetAutoObject(A.Device.Converter).ACQ(this.Pt)));(F=this.N,F[1].call(F[0])).Cl=
null;}break;default:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[
1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(
A.jV);(F=this.N,F[1].call(F[0])).Cl=null;}}},Ew:function(EO){var Tk=this.A8;if(EO<
0)EO=0;else if(EO>this.RD)EO=this.RD;if((EO===1)&&!this.Afl)EO=2;switch(EO){case
0:{this.Bb(null);if((!this.GF&&!this.AnimalType)&&!this.Pt)this.Lo(0);}break;case
1:this.Bb(this.I5);break;case 2:this.Bb(this.E7);break;case 3:if(!Tk)A.pe([this,
this.BA9],this);else this.Bb(this.YE);break;case 4:this.Bb(this.Kn);break;case 5:
if(((Tk===4)&&!this.Pt)&&!this.GF)return;else{this.Bb(this.AW);if(!this.GF||(Tk>
0))this.AW.SI(2);else this.AW.SI(7);}break;default:throw new Error(Atf+EO.toFixed(
));}this.A8=EO;C.Ek.Ew.call(this,this.A8);},By:function(E){if(this.AM===E)return;
this.AM=E;this.L9=true;this.Sx(A._GetAutoObject(A.Device.Helper).Sd(E,0,8));this.
Ahk(A._GetAutoObject(A.Device.Helper).Sd(E,8,2)|0);this.EB(A._GetAutoObject(A.Device.
Helper).Sd(E,10,2)|0);this.Lo(A._GetAutoObject(A.Device.Converter).ZZ(E));this.L9=
false;if(!!this.AM){this.YE.Kq(2);this.Kn.Kq(2);this.AW.Kq(8);}else{this.YE.Kq(0
);this.Kn.Kq(0);this.AW.Kq(0);}this.An();},Apo:function(G){this.I5.Uj(this.Ez);}
,AaJ:function(G){var F;this.AW.A9t((F=this.AF,F[1].call(F[0])));},AaI:function(G
){var F;this.AW.A9u((F=this.A1,F[1].call(F[0])));},AlY:function(G){A.pe([this,this.
Af7],this);},FQ:function(G){var F;if(!this.AM){var BR=this.AM;this.By(A._GetAutoObject(
A.Device.Helper).AC1());if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ew(3);}else this.Ew(this.RD);},AjN:function(){return this.
GF;},AjP:function(){return 99999999;},Lo:function(E){if(this.K$===E)return;this.
K$=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Sw,this.Lo],0
);},Sx:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this
,this.Vj],this);A.abo([this,this.Ab0,this.Sx],0);},Vj:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pt,2,10))+A.abm(this.GF,8,10);var BR=this.AM;this.By(A.ab0(aString
,0,10));if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Af7:function(G){var F;if((!this.Ig||!this.A1)||!this.AF)return;if(!(F=this.
Ig,F[1].call(F[0])))this.AW.AET(true);else this.AW.AET(false);},EB:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L9===false)A.pe([this,this.
Vj],this);A.abo([this,this.PM,this.EB],0);},Ahk:function(E){if(this.Pt===E)return;
this.Pt=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Ans,this.
Ahk],0);},BA9:function(G){var F;if(!!this.JI){var H$=(F=this.JI,F[1].call(F[0]));
var A0_=0;switch(H$){case 0:case 1:A0_=0;break;case 2:A0_=1;break;default:A.ab5(
"%s%e",Ale,H$);}this.EB(A0_);}if(!this.Pt)this.Ew(4);else this.Ew(5);},Sw:function(
){return this.K$;},Ab0:function(){return this.GF;},PM:function(){return this.AnimalType;
},Ans:function(){return this.Pt;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C7._Init.call(this.C7={I:this},0);C.AQZ._Init.call(this.AW={I:this},0);C.AvN.
_Init.call(this.YE={I:this},0);C.AvN._Init.call(this.Kn={I:this},0);C.AsF._Init.
call(this.E7={I:this},0);C.I5._Init.call(this.I5={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARI;var B;this.RD=5;this.AW.H(
Bq7);this.YE.H(Bq8);this.YE.EV(2);this.Kn.H(Bq9);this.Kn.EV(16);this.E7.H(A$_);this.
I5.H(A$$);this.J(this.AW,0);this.J(this.YE,0);this.J(this.Kn,0);this.J(this.E7,0
);this.J(this.I5,0);this.C7.AEZ([this,this.Sw,this.Lo]);this.AW.As([this,this.Ab0
,this.Sx]);this.YE.As([this,this.PM,this.EB]);this.Kn.As([this,this.Ans,this.Ahk
]);this.E7.CI(this.C7);this.E7.As([B=this.C7,B.B7,B.B8]);this.I5.A9L([B=A._GetAutoObject(
A.Device.Device),B.Awa,B.AyG]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ek;this.C7._Done();this.AW._Done();this.YE._Done();this.Kn._Done();this.E7._Done(
);this.I5._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.C7._ReInit(
);this.AW._ReInit();this.YE._ReInit();this.Kn._ReInit();this.E7._ReInit();this.I5.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Ek._Mark.call(this,D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ek={AM:0,Awl:null,OF:null,
Q:null,Ez:null,A1:null,AF:null,Ig:null,N:null,JI:null,Fh:null,E8:null,ACN:0,LS:0
,A8:0,RD:0,Afl:true,Init:function(aArg){A.pe([this,this.LO],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A8)this.Bb(null);},Bmg:function(E){if(this.
ACN===E)return;this.ACN=E;this.An();},Ww:function(E){if(this.LS===E)return;this.
LS=E;this.An();},DJ:function(G){A.ab5("%s",Alf);},MG:function(s){this.DJ(s);},Ew:
function(EO){A.pe([this,this.MG],this);A.pe(this.Awl,this);if(!EO)A.pe(this.OF,this
);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],this);}
,C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},By:function(
E){A.ab5("%s",Aoz);},Om:function(G){if(this.A8>1)this.Ew(this.A8-1);},MU:function(
G){if((this.A8>0)&&(this.A8<this.RD))this.Ew(this.A8+1);},Uj:function(E){if(A.aaZ(
this.Ez,E))return;if(!!this.Ez)A.z$([this,this.A0n],this.Ez,0);this.Ez=E;if(!!E)
A.zX([this,this.A0n],this.Ez,0);A.pe([this,this.A0n],this);},Apo:function(G){},A0n:
function(s){this.Apo(s);},OM:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1
)A.z$([this,this.A0r],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.A0r],E,0);if(!
!E)A.pe([this,this.A0r],this);},PN:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0t],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0t],E,0);if(
!!E)A.pe([this,this.A0t],this);},AaJ:function(G){},A0t:function(s){this.AaJ(s);}
,AaI:function(G){},A0r:function(s){this.AaI(s);},Uh:function(E){if(A.aaZ(this.Ig
,E))return;if(!!this.Ig)A.z$([this,this.A0q],this.Ig,0);this.Ig=E;if(!!E)A.zX([this
,this.A0q],E,0);if(!!E)A.pe([this,this.A0q],this);},AlY:function(G){},A0q:function(
s){this.AlY(s);},FQ:function(G){A.ab5("%s",Baa);},BGh:function(s){this.FQ(s);},G_:
function(G){this.Ew(0);},AjN:function(){A.ab5("%s",Aoz);return 0;},AjP:function(
){A.ab5("%s",Aoz);return 0;},LO:function(G){},Anx:function(E){if(A.aaZ(this.JI,E
))return;if(!!this.JI)A.z$([this,this.Ao0],this.JI,0);this.JI=E;if(!!E)A.zX([this
,this.Ao0],this.JI,0);A.pe([this,this.Ao0],this);},Ao0:function(G){},AFa:function(
E){if(A.aa0(this.OF,E))return;this.OF=E;},AFF:function(E){if(this.Afl===E)return;
this.Afl=E;this.An();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BN._Init.call(this.Fh={I:this},0);A.Core.BN._Init.call(this.E8={I:this},0);this.
__proto__=C.Ek;this.H(As3);this.ACN=A.jb.Text;this.LS=A.jb.CS;this.Fh.Filter=6;this.
E8.Filter=7;this.Fh.BO=[this,this.Om];this.E8.BO=[this,this.MU];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fh._Done();this.E8._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fh._ReInit(
);this.E8._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ez)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ig)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JI)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q9={AM:0,Dp:null,FF:
null,OF:null,Ez:null,A1:null,AF:null,Ig:null,Q:null,JI:null,AEg:-1,Afl:true,AN4:
false,ATU:false,Ash:true,Init:function(aArg){A.pe([this,this.ABp],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dp)return;if(this.Dp.A8>0){if(this.Hf){this.Dp.
Ww(A.jb.CK);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Dp.Ww(A.jb.
CS);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hf)this.Dp.Ww(
A.jb.CK);else this.Dp.Ww(A.jb.CS);this.Dp.Bmg(this.V.AQ);}},IW:function(G){C.Eg.
IW.call(this,G);if(!this.Dp)return;if(!this.Dp.A8)this.FQ(this);else this.G_(this
);},Gn:function(E){C.Eg.Gn.call(this,E);if(!!this.Dp)this.Dp.N=E;},Uj:function(E
){if(A.aaZ(this.Ez,E))return;if(!!this.Ez)A.z$([this,this.Apo],this.Ez,0);this.Ez=
E;if(!!E)A.zX([this,this.Apo],this.Ez,0);A.pe([this,this.Apo],this);},Apo:function(
G){if(!!this.Dp)this.Dp.Uj(this.Ez);},OM:function(E){if(A.aaZ(this.A1,E))return;
this.A1=E;if(!!this.Dp)this.Dp.OM(E);},PN:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dp)this.Dp.PN(E);},Uh:function(E){if(A.aaZ(this.Ig,E))return;
this.Ig=E;if(!!this.Dp)this.Dp.Uh(E);},BBE:function(G){var AAo=0;if(!!this.Dp){AAo=
this.Dp.A8;this.Dp.N=null;this.HN(this.Dp);}switch(this.AEg){case 0:this.Dp=A._NewObject(
C.AeR,0);break;case 1:this.Dp=A._NewObject(C.ARJ,0);break;case 2:this.Dp=A._NewObject(
C.ARI,0);break;case 3:this.Dp=A._NewObject(C.ATW,0);break;case 4:this.Dp=A._NewObject(
C.ATV,0);break;case 5:this.Dp=A._NewObject(C.ARK,0);break;default:throw new Error(
Bq_+this.AEg.toFixed());}this.J(this.Dp,0);this.Dp.Anx(this.JI);this.Dp.H(Bq$);this.
Dp.N=this.N;this.Dp.Uj(this.Ez);this.Dp.Awl=[this,this.Awl];this.Dp.As([this,this.
Ue,this.By]);this.Dp.Uh(this.Ig);this.Dp.OM(this.A1);this.Dp.PN(this.AF);this.Dp.
AFa(this.OF);this.Dp.AFF(this.Afl);if(AAo>0)this.Dp.Ew(AAo);this.Bb(this.Dp);this.
An();},FQ:function(G){var B;var F;if(!!this.Dp){if(!!this.N)this.FF.Ajy((F=this.
N,F[1].call(F[0])));else this.FF=A._NewObject(C.Aer,0);this.Dp.FQ(this);}},G_:function(
G){var B;if(!!this.Dp)this.Dp.G_(this);},AjN:function(){if(!this.Dp)return 0;return this.
Dp.AjN();},AjP:function(){if(!this.Dp)return 0;return this.Dp.AjP();},C2:function(
G){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ue,this.
By],0);}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C2
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2],
this);},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABp],this);},BmV:function(
E){if(this.AEg===E)return;this.AEg=E;A.pe([this,this.BBE],this);},Ar0:function(E
){if(this.Ash===E)return;this.Ash=E;A.pe([this,this.ABp],this);},ABp:function(G){
var Apz;if(this.Ash){if(this.AN4)Apz=5;else Apz=0;}else if(this.ATU){if(A._GetAutoObject(
A.Device.Converter).ZZ(this.AM)===10)Apz=4;else Apz=3;}else if(A._GetAutoObject(
A.Device.Converter).ZZ(this.AM)===10)Apz=2;else Apz=1;this.BmV(Apz);},Awl:function(
G){var F;if((!!this.N&&!!this.Dp)&&!this.Dp.A8)this.FF.AkP((F=this.N,F[1].call(F[
0])));this.An();},Anx:function(E){if(A.aaZ(this.JI,E))return;if(!!this.JI)A.z$([
this,this.Ao0],this.JI,0);this.JI=E;if(!!E)A.zX([this,this.Ao0],this.JI,0);A.pe([
this,this.Ao0],this);},Ao0:function(G){if(!!this.Dp)this.Dp.Anx(this.JI);},A_b:function(
E){if(this.ATU===E)return;this.ATU=E;A.pe([this,this.ABp],this);},BlO:function(E
){if(this.AN4===E)return;this.AN4=E;A.pe([this,this.ABp],this);},AFa:function(E){
if(A.aa0(this.OF,E))return;this.OF=E;if(!!this.Dp)this.Dp.AFa(E);},AFF:function(
E){if(this.Afl===E)return;this.Afl=E;if(!!this.Dp)this.Dp.AFF(E);},Ue:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Q9;this.H(UT);this.V.R(As9);this.V.L(A.jb.Bm);this.FF=A._NewObject(C.Aer,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dp)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ez)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ig
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQZ={ET:null,FV:null,Eo:null,Dx:null,CU:null
,Ct:null,FI:function(E){if(this.M5===E)return;C.Lg.FI.call(this,E);this.Ct.CT(E);
this.CU.CT(E);this.Dx.CT(E);this.Eo.CT(E);this.FV.CT(E);this.ET.CT(E);},Yr:function(
Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.Ct;break;
case 2:B5=this.CU;break;case 3:B5=this.Dx;break;case 4:B5=this.Eo;break;case 5:B5=
this.FV;break;case 6:B5=this.ET;break;case 7:B5=this.GW;break;default:A.ab5("%s"
,AhZ);}return B5;},_Init:function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(
this.ET={I:this},0);C.DF._Init.call(this.FV={I:this},0);C.DF._Init.call(this.Eo={
I:this},0);C.DF._Init.call(this.Dx={I:this},0);C.DF._Init.call(this.CU={I:this},
0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQZ;this.H(Bra);this.GW.
H(AIA);this.ET.H(Ayz);this.FV.H(AZK);this.Eo.H(AZL);this.Dx.H(AZM);this.CU.H(AZN
);this.Ct.H(AZO);this.FW.H(AZP);this.EN.H(A$9);this.J(this.ET,-2);this.J(this.FV
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
};C.AvN={Q:null,GW:null,FW:null,EN:null,Im:null,Il:null,M5:0,Uq:0,AM:0,FZ:99,Init:
function(aArg){A.pe([this,this.LO],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EN.Z(false);this.EN.H(A.wC(this.Yr(0).M,this.Yr(-1).M));var Iy=((Ae&
0x40)===0x40);if(Iy){this.BfT(A.jb.AV);this.BfU(A.jb.Bm);}else{this.BfT(this.M5);
this.BfU(A.jb.Text);}this.Amk();},FI:function(E){if(this.M5===E)return;this.M5=E;
this.An();},LO:function(G){},Yr:function(Hw){var B5=null;switch(Hw){case-1:case 0:
B5=this.FW;break;case 1:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;},Kq:
function(E){if(this.Uq===E)return;this.Uq=E;this.Amk();},Amk:function(){var B;var
F;if(!!this.Q){var DW=this.FW;var AdB=this.Uq;var A7=(F=this.Q,F[1].call(F[0]));
while(!!DW){if(A7>0){DW.LZ(A7%10);A7=(A7/10)|0;}else if(AdB>0)DW.LZ(0);else DW.LZ(-
1);DW=(C.Ey.isPrototypeOf(B=this.AqL(DW,0x11))?B:null);AdB=AdB-1;}}},Af_:function(
G){var F;var BR=this.AM;this.By(this.AM+1);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af9:function(G){var F;var BR=this.
AM;this.By(this.AM-1);if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C2:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].
call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this,this.C2
],this);},By:function(E){if(E<0)E=0;if(E>this.FZ)E=this.FZ;if(this.AM===E)return;
this.AM=E;this.An();},EV:function(E){if(this.FZ===E)return;this.FZ=E;this.An();}
,BfT:function(aColor){this.FW.CT(aColor);this.GW.CT(aColor);},BfU:function(aColor
){this.FW.Zt(aColor);this.GW.Zt(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ey._Init.call(this.GW={I:this},0);C.Ey._Init.call(this.FW={I:this},
0);A.acg.BU._Init.call(this.EN={I:this},0);A.Core.BN._Init.call(this.Im={I:this}
,0);A.Core.BN._Init.call(this.Il={I:this},0);this.__proto__=C.AvN;this.H(Brb);this.
M5=A.jb.CK;this.GW.H(AIA);this.FW.H(Ayz);this.EN.H(Ayz);this.EN.Nh(2);this.EN.L(
A.jb.E1);this.Im.Filter=4;this.Il.Filter=5;this.J(this.GW,0);this.J(this.FW,0);this.
J(this.EN,0);this.Im.BO=[this,this.Af_];this.Im.D1=[this,this.Af_];this.Il.BO=[this
,this.Af9];this.Il.D1=[this,this.Af9];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.GW._Done();this.FW._Done();this.EN._Done();this.Im._Done();this.Il.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.GW._ReInit();this.FW._ReInit();this.EN._ReInit();this.Im._ReInit();this.Il.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ey={AgB:
null,Background:null,Text:null,Ey:-1,M0:0,AmO:0,Aqr:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ey<0)this.Text.R(Rl);else this.Text.R(this.Ey.toFixed(
));this.Background.L(this.M0);this.Text.L(this.AmO);},LZ:function(E){if(this.Ey===
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ey=B5;this.An();},CT:function(E){
if(this.M0===E)return;this.M0=E;this.An();},AeW:function(E){if(this.Aqr===E)return;
this.Aqr=E;this.AgB.Ar(E);if(E===false)this.Text.Z(true);},Zt:function(E){if(this.
AmO===E)return;this.AmO=E;this.An();},_Init:function(aArg){A.Core.P._Init.call(this
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
Fw={Y:null,I1:null,AOa:A.jV,ARY:A.jV,Ta:0,AJH:0,A1P:false,A1k:false,Init:function(
aArg){},CF:function(G){var B;C.AB.CF.call(this,G);A.zX([this,this.ABk],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fj,B.Fn],0);A.zX([this,this.MG],[B=A._GetAutoObject(A.Device.
Device).Am,B.Fj,B.Fn],0);A.pe([this,this.ABk],this);A.pe([this,this.MG],this);},
E3:function(G){var B;C.AB.E3.call(this,G);A.z$([this,this.ABk],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fj,B.Fn],0);},BxM:function(L6){A._GetAutoObject(A.Device.Helper
).HL(L6);this.Ap6(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap6:function(L1,AcW){A.ab5("%s",Alf);},Ve:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===9))A.aaS([
this,this.ByK],this);else if(!!At&&(At.PopupState===5)){this.A1k=true;this.Ev(this
);}},ByK:function(G){if(this.Ta>0){this.A1k=false;this.Ado(this);this.A_B(0);}},
Ait:function(G){if((this.AJH+1)<this.Ta)this.A_B(this.AJH+1);else A.aaS([this,this.
Bwk],this);},Bwl:function(s){this.Ait(s);},A_B:function(E){this.AJH=E;if(this.A1k===
false){this.BxM(E);A.aaS([this,this.Bwl],this);var XH=(this.AJH/this.Ta)*100;A._GetAutoObject(
A.Device.Device).A9(49,true,A.abk(XH,0,0),0,[this,this.Ve]);}},Aat:function(G){A.
_GetAutoObject(A.Device.Device).A9(49,false,Brc,0,[this,this.Ve]);this.A1P=true;
A.pe([this,this.ALk],this);},Bwk:function(s){this.Aat(s);},Ado:function(G){this.
I1.Z(true);this.A1P=false;this.ALk(this);},BGc:function(s){this.Ado(s);},AAD:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6y();A._GetAutoObject(A.Device.Device
).Am.Bl(Be);},Ev:function(G){A._GetAutoObject(C.A$).Fv();},A3o:function(G){A._GetAutoObject(
C.A$).Cg(84);},DJ:function(G){this.N.Z(true);this.N.CY(A.aaL(A.ach.E2));this.N.CB=[
this,this.Ev];this.N.Cs(A.aaL(A.ach.ADA));if(!A._GetAutoObject(A.Device.Device).
Am.Filter||A._GetAutoObject(A.Device.Helper).Arb(A._GetAutoObject(A.Device.Device
).Am.Filter)){this.N.Ck=null;this.N.I4.Dr(100);}else{this.N.Ck=[this,this.AAD];this.
N.I4.Dr(255);}this.N.C6(A.aaL(A.ach.Aez));this.N.Cl=[this,this.A3o];},MG:function(
s){this.DJ(s);},ABk:function(G){this.Ta=A._GetAutoObject(A.Device.Device).Am.Ca(
);if(this.Ta>0)A._GetAutoObject(A.Device.Device).A9(49,true,UW,0,[this,this.Ve]);
else{this.Ado(this);this.Aat(this);}},Aky:function(E){if(this.AOa===E)return;this.
AOa=E;A.pe([this,this.ALk],this);},ALk:function(G){var B;if(this.A1P===false){this.
I1.R(A.jV);return;}var Apb;if(!A._GetAutoObject(A.Device.Device).Am.Ca()){var Adi=
A._GetAutoObject(A.Device.Device).Am.Filter;A.z$([this,this.ABk],[B=A._GetAutoObject(
A.Device.Device).Am,B.Fj,B.Fn],0);this.AAD(this);if(!A._GetAutoObject(A.Device.Device
).Am.QE()||!Adi)Apb=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACW(A._GetAutoObject(A.Device.Device).Am.Filter)===1)Apb=A.aaR(
A.acf.AN6);else Apb=A.aaR(A.acf.AN5);A._GetAutoObject(A.Device.Device).Am.Bl(Adi
);A.zX([this,this.ABk],[B=A._GetAutoObject(A.Device.Device).Am,B.Fj,B.Fn],0);}else
Apb=this.ARY;Apb=Apb+(AZR+this.AOa);this.I1.R(Apb);},Ae6:function(E){if(this.ARY===
E)return;this.ARY=E;A.pe([this,this.ALk],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkQ._Init.call(this.I1={
I:this},0);this.__proto__=C.Fw;this.Dq(C.Abv);this.Y.H(E$);this.Y.JP(1);this.I1.
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
var B;if(!this.AY)return 0;var A1e=this.AjO();var Adf=0;var Of=this.K0;while(!!Of
){Adf+=Math.pow(Of.A4-A1e,2);Of=Of.Ah;}Adf/=this.AY;Adf=Math.sqrt(Adf);return Adf;
},_Init:function(aArg){this.__proto__=C.AvP;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOb={F$:null,Aev:null,Yo:null,C5:null,I1:null,
CP:function(){this.A4l(this);},Init:function(aArg){A.zV([this,this.A4l],A._GetAutoObject(
A.Device.Device).Pl,0);A.pe([this,this.A4l],this);},Ev:function(G){A._GetAutoObject(
C.A$).Fv();},A4l:function(G){this.Yo.Ce(-1);this.I1.Z(!this.F$.AX.Ca());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.F$._Init.call(this.F$={I:this},0);C.
Aev._Init.call(this.Aev={I:this},0);C.Yo._Init.call(this.Yo={I:this},0);A.acg.C5.
_Init.call(this.C5={I:this},0);C.AkQ._Init.call(this.I1={I:this},0);this.__proto__=
C.AOb;this.N.Z(true);this.Dq(C.AO9);this.F$.H(Ata);this.F$.NZ(C.AmN);this.Aev.H(
IR);this.Yo.H(As4);this.C5.DC(Brd);this.C5.DL(Bre);this.C5.Nh(3);this.C5.L(A.jb.
Text);this.I1.H(Aom);this.I1.R((A.aaR(A.acf.A7R)+AZR)+A.aaR(A.acf.A6a));this.J(this.
F$,0);this.J(this.Aev,0);this.J(this.Yo,0);this.J(this.C5,0);this.J(this.I1,0);this.
N.CB=[this,this.Ev];this.N.CY(A.aaL(A.ach.E2));this.F$.Zs(A._GetAutoObject(A.Device.
Device).Pl);this.Yo.Zs(A._GetAutoObject(A.Device.Device).Pl);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.F$._Done();this.Aev._Done();this.Yo._Done();
this.C5._Done();this.I1._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.F$._ReInit();this.Aev._ReInit();this.Yo._ReInit();this.C5.
_ReInit();this.I1._ReInit();this.I1.R((A.aaR(A.acf.A7R)+AZR)+A.aaR(A.acf.A6a));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.F$)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aev)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yo).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOe={At9:null,At8:null,At$:null,At_:null,Aub:null,Aua:null,Aud:null,Auc:null
,AaL:null,Yw:null,Abm:null,Abl:null,RatedAttribute:0,Init:function(aArg){this.Sz(
2);},DE:function(G){var D5=(A.Core.BN.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.Sz(3);break;case 1:this.Sz(2);break;case
4:this.Sz(1);break;case 3:this.Sz(4);break;default:this.Sz(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.Sz(1);break;case 1:this.Sz(4);break;case 4:this.
Sz(3);break;case 3:this.Sz(2);break;default:this.Sz(0);}break;default:D5.NH=true;
}},Ap6:function(L1,AcW){if(!L1)return;var Fs=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcW,true);Fs.
CW(HV);var AAV=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAV.Initialize(
3,5,0,true);Fs.CW(AAV);L1.Bl(Fs);},Ait:function(G){var Ap4=0;var A3H=A._GetAutoObject(
A.Device.Device).Bt.Ca();var B1=A._NewObject(A.Device.Rating,0);while(Ap4<A3H){B1.
EM(Ap4,A._GetAutoObject(A.Device.Device).Bt);this.Bdc(B1,0);var BBZ=A._GetAutoObject(
A.Device.Helper).ZQ(2);this.Bdc(B1,BBZ);Ap4++;}C.Fw.Ait.call(this,G);},Aat:function(
G){A.pe([this,this.BcR],this);C.Fw.Aat.call(this,G);},Ado:function(G){this.At9=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.At8=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At_=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At$=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aua=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aub=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auc=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aud=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fw.Ado.
call(this,G);},DJ:function(G){C.Fw.DJ.call(this,G);this.N.OO(true);this.N.OP(true
);},Bdc:function(D3,BbP){if(!D3||(D3.Timestamp<BbP))return;if(!BbP){this.At9.Set(
D3.Appearance,this.At9.Get(D3.Appearance)+1);this.At$.Set(D3.Faeces,this.At$.Get(
D3.Faeces)+1);this.Aub.Set(D3.Feed,this.Aub.Get(D3.Feed)+1);this.Aud.Set(D3.Respiratory
,this.Aud.Get(D3.Respiratory)+1);}else{this.At8.Set(D3.Appearance,this.At8.Get(D3.
Appearance)+1);this.At_.Set(D3.Faeces,this.At_.Get(D3.Faeces)+1);this.Aua.Set(D3.
Feed,this.Aua.Get(D3.Feed)+1);this.Auc.Set(D3.Respiratory,this.Auc.Get(D3.Respiratory
)+1);}},Sz:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yw.Ks(this.AaL.Lt(E));A.pe([this,this.BcR],this);},BcR:function(G){var AaM=null;
var AaN=null;switch(this.RatedAttribute){case 2:{AaM=this.At8;AaN=this.At9;}break;
case 4:{AaM=this.At_;AaN=this.At$;}break;case 1:{AaM=this.Aua;AaN=this.Aub;}break;
case 0:{AaM=A._NewObject(A.Device.Int32ArrayWrapper,0);AaN=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaM=this.Auc;AaN=this.Aud;}break;default:throw new
Error(Brf+this.RatedAttribute.toFixed());}var AGi=A._NewObject(A.acv.AUd,0);AGi.
Os(AaM.Get(3),A.jb.E1);AGi.Os(AaM.Get(2),A.jb.H6);AGi.Os(AaM.Get(1),A.jb.Gf);var
AGj=A._NewObject(A.acv.AUd,0);AGj.Os(AaN.Get(3),A.jb.E1);AGj.Os(AaN.Get(2),A.jb.
H6);AGj.Os(AaN.Get(1),A.jb.Gf);this.Abl.Ab_(AGi);this.Abm.Ab_(AGj);var A39=AaM.AmW(
)-AaM.Get(5);var Bfp=0;var Bfn=0;if(A39>0){Bfp=(AaM.Get(2)/A39)*100;Bfn=(AaM.Get(
1)/A39)*100;}var AK_=AaN.AmW()-AaN.Get(5);this.I1.Z(!AK_);var Bfq=0;var Bfo=0;if(
AK_>0){Bfq=(AaN.Get(2)/AK_)*100;Bfo=(AaN.Get(1)/AK_)*100;}this.Abl.A_z(A.abk(Bfp
,0,0)+Aah);this.Abl.A_d(A.abk(Bfn,0,0)+Aah);this.Abm.A_z(A.abk(Bfq,0,0)+Aah);this.
Abm.A_d(A.abk(Bfo,0,0)+Aah);},_Init:function(aArg){C.Fw._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaL={I:this},0);C.NE._Init.call(this.
Yw={I:this},0);C.ACD._Init.call(this.Abm={I:this},0);C.ACD._Init.call(this.Abl={
I:this},0);this.__proto__=C.AOe;this.Dq(C.AO_);this.Aky(A.aaR(A.acf.A6b));this.Ae6(
A.aaR(A.acf.Ano));this.Yw.H(IR);this.Yw.Aj(true);this.Yw.T(A.aaR(A.acf.Axn)+A.aaR(
A.acf.Colon));this.Yw.Bg(false);this.Yw.BmT(false);this.Abm.H(Brg);this.Abm.T(A.
aaR(A.acf.AF5));this.Abl.H(Brh);this.Abl.T(A.aaR(A.acf.A7f));this.I1.H(Aom);this.
J(this.Yw,-1);this.J(this.Abm,-1);this.J(this.Abl,-1);this.At9=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At8=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At$=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.At_=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aub=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aua=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aud=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auc=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fw;this.AaL._Done();this.Yw._Done();this.Abm._Done();this.Abl.
_Done();C.Fw._Done.call(this);},_ReInit:function(){C.Fw._ReInit.call(this);this.
AaL._ReInit();this.Yw._ReInit();this.Abm._ReInit();this.Abl._ReInit();this.Aky(A.
aaR(A.acf.A6b));this.Ae6(A.aaR(A.acf.Ano));this.Yw.T(A.aaR(A.acf.Axn)+A.aaR(A.acf.
Colon));this.Abm.T(A.aaR(A.acf.AF5));this.Abl.T(A.aaR(A.acf.A7f));},_Mark:function(
D){var B;C.Fw._Mark.call(this,D);if((B=this.At9)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.At8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At$)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aub)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aua)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aud)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Auc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOf={Aeu:null,UJ:null,UK:null,Aet:null,UG:null,UH:null,AJJ:0,AJI:0,AJn:0,AJm:
0,Adh:false,CP:function(){this.Aat(this);},Ap6:function(L1,AcW){if(!L1)return;var
Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcW,true);Fs.CW(HV);var ABb=A._NewObject(A.Device.Int32FilterCriterion
,0);ABb.Initialize(7,2,0,true);Fs.CW(ABb);L1.Bl(Fs);},Ait:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJJ++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJI++;var Ap4=0;var A3H=A._GetAutoObject(
A.Device.Device).Bt.Ca();var At7;var ABv=0;while(Ap4<A3H){this.Adh=true;At7=A._GetAutoObject(
A.Device.Device).Bt.I2(Ap4,9);if(At7===1)ABv=1;else if((At7===2)&&(ABv!==1))ABv=
2;Ap4++;}if(ABv===1)this.AJm++;else if(ABv===2)this.AJn++;C.Fw.Ait.call(this,G);
},Aat:function(G){var Bfl=0;var Bfm=0;if(this.Ta>0){Bfl=(this.AJJ/this.Ta)*100;Bfm=(
this.AJI/this.Ta)*100;}this.UJ.Ks(((((((A.abk(Bfl,0,0)+AIB)+this.AJJ.toFixed())+
CQ)+A.aaR(A.acf.AEm))+CQ)+this.Ta.toFixed())+Oa);this.UK.Ks(((((((A.abk(Bfm,0,0)+
AIB)+this.AJI.toFixed())+CQ)+A.aaR(A.acf.AEm))+CQ)+this.Ta.toFixed())+Oa);var Bfj=
0;var Bfk=0;if(this.Ta>0){Bfj=(this.AJn/this.Ta)*100;Bfk=(this.AJm/this.Ta)*100;
}this.UG.Ks(((((((A.abk(Bfj,0,0)+AIB)+this.AJn.toFixed())+CQ)+A.aaR(A.acf.AEm))+
CQ)+this.Ta.toFixed())+Oa);this.UH.Ks(((((((A.abk(Bfk,0,0)+AIB)+this.AJm.toFixed(
))+CQ)+A.aaR(A.acf.AEm))+CQ)+this.Ta.toFixed())+Oa);this.I1.Z(!this.Adh);C.Fw.Aat.
call(this,G);},Ado:function(G){this.AJm=0;this.AJn=0;this.AJI=0;this.AJJ=0;this.
Adh=false;C.Fw.Ado.call(this,G);},_Init:function(aArg){C.Fw._Init.call(this,aArg
);C.Agr._Init.call(this.Aeu={I:this},0);C.Ajp._Init.call(this.UJ={I:this},0);C.Ajp.
_Init.call(this.UK={I:this},0);C.Agr._Init.call(this.Aet={I:this},0);C.Ajp._Init.
call(this.UG={I:this},0);C.Ajp._Init.call(this.UH={I:this},0);this.__proto__=C.AOf;
this.Dq(C.AO$);this.Aky(A.aaR(A.acf.A6c));this.Ae6(A.aaR(A.acf.Arq));this.Aeu.H(
IR);this.Aeu.Aj(true);this.Aeu.T(A.aaR(A.acf.A6g));this.Aeu.Bg(false);this.UJ.H(
P7);this.UJ.Aj(true);this.UJ.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UJ.
Bg(true);this.UJ.AkD(2);this.UK.H(Aaf);this.UK.Aj(true);this.UK.T(A.aaR(A.acf.Avt
)+A.aaR(A.acf.Colon));this.UK.Bg(true);this.UK.AkD(1);this.Aet.H(Alg);this.Aet.Aj(
true);this.Aet.T(A.aaR(A.acf.A6h));this.Aet.Bg(false);this.UG.H(Aor);this.UG.Aj(
true);this.UG.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UG.Bg(true);this.
UG.AkD(2);this.UH.H(As4);this.UH.Aj(true);this.UH.T(A.aaR(A.acf.Avt)+A.aaR(A.acf.
Colon));this.UH.Bg(true);this.UH.AkD(1);this.J(this.Aeu,0);this.J(this.UJ,0);this.
J(this.UK,0);this.J(this.Aet,0);this.J(this.UG,0);this.J(this.UH,0);this.UJ.S(A.
aaL(A.fl.Ak));this.UK.S(A.aaL(A.fl.Ak));this.UG.S(A.aaL(A.fl.Ak));this.UH.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fw;this.Aeu._Done();this.UJ._Done(
);this.UK._Done();this.Aet._Done();this.UG._Done();this.UH._Done();C.Fw._Done.call(
this);},_ReInit:function(){C.Fw._ReInit.call(this);this.Aeu._ReInit();this.UJ._ReInit(
);this.UK._ReInit();this.Aet._ReInit();this.UG._ReInit();this.UH._ReInit();this.
Aky(A.aaR(A.acf.A6c));this.Ae6(A.aaR(A.acf.Arq));this.Aeu.T(A.aaR(A.acf.A6g));this.
UJ.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UK.T(A.aaR(A.acf.Avt)+A.aaR(
A.acf.Colon));this.Aet.T(A.aaR(A.acf.A6h));this.UG.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UH.T(A.aaR(A.acf.Avt)+A.aaR(A.acf.Colon));this.UJ.S(A.aaL(A.fl.
Ak));this.UK.S(A.aaL(A.fl.Ak));this.UG.S(A.aaL(A.fl.Ak));this.UH.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.Fw._Mark.call(this,D);if((B=this.Aeu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqK={K8:null
,Aje:null,Ajf:null,Aml:null,Abz:null,WY:null,Abw:null,SX:null,Abx:null,SY:null,AbA:
null,WZ:null,Ay:null,Adc:0,AAp:0,Apu:0,A2q:0,BdI:0,CP:function(){this.Aat(this);
},DE:function(G){switch(this.Cr.CO){case 4:{if(this.I1.Fk())return;var Qs=this.Y.
Br[1]+80;this.Y.F_([this.Y.Br[0],Qs]);this.Y.Vt(null,null);}break;case 5:{if(this.
I1.Fk())return;var Qs=this.Y.Br[1]-80;this.Y.F_([this.Y.Br[0],Qs]);this.Y.Vt(null
,null);}break;default:C.Fw.DE.call(this,G);}},Ap6:function(L1,AcW){if(!L1)return;
var Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcW,true);Fs.CW(HV);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fs.CW(Ac_);L1.Bl(Fs);},Ait:function(G){if(this.Bdy(
)){this.K8.Os(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arc()){var Qe=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qe>0){var A11=A._GetAutoObject(A.acj.DV).Alx(Qe,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Aje.
Os(A11);}}var A2J=A._GetAutoObject(A.Device.Device).Bt.Ca()-2;if(A2J>=0){var BzR=
A._GetAutoObject(A.Device.Device).Bt.ACY(A2J,8);var BzQ=A._GetAutoObject(A.Device.
Device).Bt.HF(A2J,6);var Qe=A._GetAutoObject(A.Device.Helper).MN(BzQ,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qe>0){var A11=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BzR)/Qe)|0;this.Ajf.Os(A11);}}if((A._GetAutoObject(
A.Device.Helper).W.Arc()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RJ()<=180)){var ALv=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tl=A._GetAutoObject(A.Device.
Helper).MN(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BA5=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALv/Tl);this.Aml.Os(BA5);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Adc++;this.Apu=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZQ(7)){this.AAp++;this.A2q=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BdI=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.Fw.Ait.call(
this,G);},Aat:function(G){var A4u=this.Aje.AjO()|0;var A4w=this.Ajf.AjO()|0;if(this.
Adc>1)A._GetAutoObject(A.Device.Device).A9(56,true,this.Adc.toFixed(),0,null);if(
this.Adc===1)A._GetAutoObject(A.Device.Device).A9(53,true,this.Apu.toFixed(),0,null
);if(this.AAp>1)A._GetAutoObject(A.Device.Device).A9(52,true,this.AAp.toFixed(),
0,null);if(this.AAp===1)A._GetAutoObject(A.Device.Device).A9(57,true,(this.A2q.toFixed(
)+As8)+this.BdI.toFixed(),0,null);if(this.K8.AY>0)this.WY.T(((((((A._GetAutoObject(
A.Device.Converter).AxY(this.K8.AjO()|0,1)+AyA)+A._GetAutoObject(A.Device.Converter
).AxY(this.K8.AqV()|0,1))+CQ)+A._GetAutoObject(A.acj.DV).AfZ())+AyB)+this.K8.AY.
toFixed())+Oa);else this.WY.T(A.aaR(A.acf.Unknown));if(this.Aje.AY>0)this.SX.T(((((((
A._GetAutoObject(A.Device.Converter).S2(A4u,2,true)+AyA)+A._GetAutoObject(A.Device.
Converter).S2(this.Aje.AqV()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DV).Aay())+AyB
)+this.Aje.AY.toFixed())+Oa);else this.SX.T(A.aaR(A.acf.Unknown));if(this.Ajf.AY>
0)this.SY.T(((((((A._GetAutoObject(A.Device.Converter).S2(A4w,2,true)+AyA)+A._GetAutoObject(
A.Device.Converter).S2(this.Ajf.AqV()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DV).
Aay())+AyB)+this.Ajf.AY.toFixed())+Oa);else this.SY.T(A.aaR(A.acf.Unknown));if(this.
Aml.AY>0)this.WZ.T(((((((A.abk(this.Aml.AjO(),0,1)+AyA)+A.abk(this.Aml.AqV(),0,1
))+CQ)+A.aaR(A.acf.BhH))+AyB)+this.Aml.AY.toFixed())+Oa);else this.WZ.T(A.aaR(A.
acf.Unknown));var A4v=0;var A4x=0;var Adh=false;if(this.K8.AY>0)Adh=true;var H$=
0;if(!!A._GetAutoObject(A.Device.Device).Am.Filter){var AJ2=A._GetAutoObject(A.Device.
Device).Am.Filter.DQ(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJ2)?AJ2:null))H$=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJ2)?AJ2:null
).A4;}if(this.Aje.AY>0){Adh=true;A4v=A._GetAutoObject(A.Device.Converter).A$Q(A4u
,H$);}if(this.Ajf.AY>0){Adh=true;A4x=A._GetAutoObject(A.Device.Converter).A$Q(A4w
,H$);}this.SX.AkD(A4v);this.SY.AkD(A4x);this.I1.Z(!Adh);C.Fw.Aat.call(this,G);},
Ado:function(G){this.K8.Yh();this.Aje.Yh();this.Ajf.Yh();this.Aml.Yh();this.Adc=
0;this.AAp=0;this.Apu=0;this.A2q=0;C.Fw.Ado.call(this,G);},Fe:function(G){var B;
this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Br[1]);},Bdy:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.Fw._Init.call(this,aArg);C.Agr._Init.call(this.Abz={I:
this},0);C.IC._Init.call(this.WY={I:this},0);C.Agr._Init.call(this.Abw={I:this},
0);C.Ajp._Init.call(this.SX={I:this},0);C.Agr._Init.call(this.Abx={I:this},0);C.
Ajp._Init.call(this.SY={I:this},0);C.Agr._Init.call(this.AbA={I:this},0);C.IC._Init.
call(this.WZ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqK;
this.Dq(C.Avs);this.Aky(A.aaR(A.acf.A6d));this.Ae6(A.aaR(A.acf.Akl));this.Abz.H(
AIx);this.Abz.Aj(true);this.Abz.T(A.aaR(A.acf.A45));this.Abz.Bg(false);this.Abz.
Kq(5);this.WY.H(AZS);this.WY.Aj(true);this.WY.T(A.jV);this.WY.Bg(true);this.Abw.
H(Atb);this.Abw.Aj(true);this.Abw.T(A.aaR(A.acf.ALU));this.Abw.Bg(false);this.Abw.
Kq(5);this.SX.H(Atc);this.SX.Aj(true);this.SX.T(A.jV);this.SX.Bg(true);this.SX.Ks(
A.jV);this.Abx.H(Atd);this.Abx.Aj(true);this.Abx.T(A.aaR(A.acf.Auv));this.Abx.Bg(
false);this.Abx.Kq(5);this.SY.H(Bri);this.SY.Aj(true);this.SY.T(A.jV);this.SY.Bg(
true);this.SY.Ks(A.jV);this.AbA.H(AZT);this.AbA.Aj(true);this.AbA.T(A.aaR(A.acf.
A5b));this.AbA.Bg(false);this.AbA.Kq(5);this.WZ.H(Aoy);this.WZ.Aj(true);this.WZ.
T(A.jV);this.WZ.Bg(true);this.Ay.H(Iq);this.J(this.Abz,-1);this.J(this.WY,-1);this.
J(this.Abw,-1);this.J(this.SX,-1);this.J(this.Abx,-1);this.J(this.SY,-1);this.J(
this.AbA,-1);this.J(this.WZ,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fe];this.
K8=A._NewObject(C.AvP,0);this.Aje=A._NewObject(C.AvP,0);this.Ajf=A._NewObject(C.
AvP,0);this.WY.S(A.aaL(A.fl.Af));this.SX.S(A.aaL(A.fl.Ak));this.SY.S(A.aaL(A.fl.
Ak));this.WZ.S(A.aaL(A.fl.Ak));this.Aml=A._NewObject(C.A6n,0);},_Done:function(){
this.__proto__=C.Fw;this.Abz._Done();this.WY._Done();this.Abw._Done();this.SX._Done(
);this.Abx._Done();this.SY._Done();this.AbA._Done();this.WZ._Done();this.Ay._Done(
);C.Fw._Done.call(this);},_ReInit:function(){C.Fw._ReInit.call(this);this.Abz._ReInit(
);this.WY._ReInit();this.Abw._ReInit();this.SX._ReInit();this.Abx._ReInit();this.
SY._ReInit();this.AbA._ReInit();this.WZ._ReInit();this.Ay._ReInit();this.Aky(A.aaR(
A.acf.A6d));this.Ae6(A.aaR(A.acf.Akl));this.Abz.T(A.aaR(A.acf.A45));this.Abw.T(A.
aaR(A.acf.ALU));this.Abx.T(A.aaR(A.acf.Auv));this.AbA.T(A.aaR(A.acf.A5b));this.WY.
S(A.aaL(A.fl.Af));this.SX.S(A.aaL(A.fl.Ak));this.SY.S(A.aaL(A.fl.Ak));this.WZ.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.Fw._Mark.call(this,D);if((
B=this.K8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aje)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aml)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abv={_Init:function(aArg){C.AjR._Init.call(this,aArg);this.__proto__=C.Abv;this.
Dd.Aw(A.aaL(A.ach.ADw));},_className:"Application::HeaderEvaluationFilter"};C.Km={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DY:function(G){C.AjR.DY.call(this
,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).AdX(A._GetAutoObject(A.Device.
Device).JH));},_Init:function(aArg){C.AjR._Init.call(this,aArg);this.__proto__=C.
Km;},_ReInit:function(){C.AjR._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avs={Init:function(aArg){this.Dd.Aw(A._GetAutoObject(A.acj.DV).Bc7());},_Init:
function(aArg){C.Abv._Init.call(this,aArg);this.__proto__=C.Avs;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AO$={Init:function(
aArg){this.Dd.Aw(A.aaL(A.ach.AbE));},_Init:function(aArg){C.Abv._Init.call(this,
aArg);this.__proto__=C.AO$;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AO_={Init:function(aArg){this.Dd.Aw(A.aaL(A.ach.Am2));},_Init:function(aArg){
C.Abv._Init.call(this,aArg);this.__proto__=C.AO_;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AO9={Sg:null,Dd:null,AP:null,CP:function(){this.Sg.R(A.aaR(A.acf.ANa));},De:
function(E){C.BS.De.call(this,E);this.Sg.L(E);this.Dd.L(E);},_Init:function(aArg
){C.BS._Init.call(this,aArg);C.CH._Init.call(this.Sg={I:this},0);A.acg.Ap._Init.
call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0);this.__proto__=
C.AO9;this.Sg.H(Brj);this.Sg.R(A.aaR(A.acf.ANa));this.Sg.A6(0x11);this.Dd.H(Brk);
this.AP.DC(Brl);this.AP.DL(Brm);this.AP.L(A.jb.Bc);this.J(this.Sg,0);this.J(this.
Dd,0);this.J(this.AP,0);this.Sg.S(A.aaL(A.fl.Af));this.Sg.A2(A.aaL(A.fl.Ak));this.
Dd.Aw(A.aaL(A.ach.AQh));},_Done:function(){this.__proto__=C.BS;this.Sg._Done();this.
Dd._Done();this.AP._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.
call(this);this.Sg._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Sg.R(A.aaR(
A.acf.ANa));this.Sg.S(A.aaL(A.fl.Af));this.Sg.A2(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BS._Mark.call(this,D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aev={TR:null,Aj1:
null,AjY:null,AjZ:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.TR={I:this},0);A.acg.Ap._Init.call(this.Aj1={I:this},0);A.acg.Ap._Init.
call(this.AjY={I:this},0);A.acg.Ap._Init.call(this.AjZ={I:this},0);this.__proto__=
C.Aev;this.TR.H(Brn);this.TR.R(A.aaR(A.acf.Year));this.TR.A6(0x11);this.TR.L(A.jb.
Text);this.Aj1.H(Bab);this.Aj1.L(A.jb.Text);this.AjY.H(Bro);this.AjY.L(A.jb.Text
);this.AjZ.H(Brp);this.AjZ.L(A.jb.Text);this.J(this.TR,0);this.J(this.Aj1,0);this.
J(this.AjY,0);this.J(this.AjZ,0);this.TR.S(A.aaL(A.fl.Kl));this.TR.A2(A.aaL(A.fl.
Ii));this.Aj1.Aw(A.aaL(A.ach.AQs));this.AjY.Aw(A.aaL(A.ach.AQr));this.AjZ.Aw(A.aaL(
A.ach.AQz));},_Done:function(){this.__proto__=C.EA;this.TR._Done();this.Aj1._Done(
);this.AjY._Done();this.AjZ._Done();C.EA._Done.call(this);},_ReInit:function(){C.
EA._ReInit.call(this);this.TR._ReInit();this.Aj1._ReInit();this.AjY._ReInit();this.
AjZ._ReInit();this.TR.R(A.aaR(A.acf.Year));this.TR.S(A.aaL(A.fl.Kl));this.TR.A2(
A.aaL(A.fl.Ii));},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.TR).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmN={Ajv:null,AP:null
,A_:null,Ea:null,UD:null,SP:null,Gp:null,XH:0,AtG:0,AlB:0,ABw:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SP.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.SP.M[2]-1,0,this.SP.M[
2]+1,aSize[1]]);this.UD.H([this.SP.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UD.M[2]-1,0,this.UD.M[2]+1,aSize[1]]);this.Gp.H([this.UD.M[2],0,aSize[
0],aSize[1]]);this.Ajv.H(this.Gp.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABw.toFixed());this.SP.L(this.V.AQ);this.SP.R(this.AlB.toFixed());this.UD.
L(this.V.AQ);this.UD.R(this.AtG.toFixed());var B1=this.BA4(this.XH);this.Gp.L(A.
_GetAutoObject(A.acj.Assessment).Xv(B1));this.Ajv.L(A._GetAutoObject(A.acj.Assessment
).Qj(B1));this.Gp.R(A.abk(this.XH,0,0)+Aah);},Ce:function(Ad){if(!this.AX)return;
this.Hn=Ad;Ad=(this.AX.Ca()-Ad)-1;if(!!this.AX){this.AlB=this.AX.CE(Ad,1);this.AtG=
this.AX.CE(Ad,2);this.ABw=this.AX.CE(Ad,0);if(this.AlB>0)this.XH=(this.AtG/this.
AlB)*100;else this.XH=0;this.An();}},BA4:function(XH){if(XH>=8)return 1;else if(
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
BT:null,AxT:A.jV,Rating:0,Ai:function(Ae){C.IC.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qj(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xv(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IC.S.call(this,E);if((E===A.aaL(A.fl.Kl))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Ii))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Ks:function(E){if(this.AxT===E)return;this.AxT=E;this.
BT.R(E);},AkD:function(E){if(this.Rating===E)return;this.Rating=E;this.An();},_Init:
function(aArg){C.IC._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Ajp;this.BT.AZ(0x34);this.BT.H(Aaj);this.BT.I7(true);this.BT.
A6(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IC;this.BT._Done();C.IC._Done.call(
this);},_ReInit:function(){C.IC._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IC._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACD={
N2:null,SC:null,V:null,AnR:null,AnQ:null,Ach:null,Acg:null,DK:Lv,A$V:A.jV,A_T:A.
jV,Ab_:function(E){if(this.N2===E)return;this.N2=E;this.SC.Ab_(this.N2);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_z:function(E){if(this.A$V===E
)return;this.A$V=E;this.Ach.R(E);},A_d:function(E){if(this.A_T===E)return;this.A_T=
E;this.Acg.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SC._Init.
call(this.SC={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnR={I:this},0);A.acg.AL._Init.call(this.AnQ={I:this},0);A.acg.Text._Init.
call(this.Ach={I:this},0);A.acg.Text._Init.call(this.Acg={I:this},0);this.__proto__=
C.ACD;this.H(Brq);this.SC.H(Brr);this.SC.Ar(false);this.SC.Bm2(360);this.SC.Bna(
0.5);this.V.AZ(0x1D);this.V.H(W7);this.V.KS(true);this.V.R(Lv);this.V.L(A.jb.Text
);this.AnR.H(Bac);this.AnR.L(A.jb.H6);this.AnQ.H(Bad);this.AnQ.L(A.jb.Gf);this.Ach.
AZ(0x1D);this.Ach.H(Bac);this.Ach.L(A.jb.Text);this.Acg.AZ(0x1D);this.Acg.H(Bad);
this.Acg.L(A.jb.CS);this.J(this.SC,0);this.J(this.V,0);this.J(this.AnR,0);this.J(
this.AnQ,0);this.J(this.Ach,0);this.J(this.Acg,0);this.SC.Bnb(A.aaL(A.acv.ATN));
this.V.S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SC._Done();this.V._Done();this.AnR.
_Done();this.AnQ._Done();this.Ach._Done();this.Acg._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SC._ReInit();this.V._ReInit(
);this.AnR._ReInit();this.AnQ._ReInit();this.Ach._ReInit();this.Acg._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N2)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ach)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkQ={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.AkQ;this.H(UU);this.Background.AZ(0x3F);this.Background.
H(UU);this.Background.L(A.jb.BjA);this.Text.AZ(0x3F);this.Text.H(UU);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Ra={Ak1:null,NR:null,C8:null,AcF:null,JK:null,TemperatureUnit:null,MD:null,PP:
null,Sc:null,Us:null,Lq:null,Jb:null,Z3:null,Z2:null,Se:null,HB:null,AjG:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlJ());
this.Us.R(A._GetAutoObject(A.acj.Temperature).AlJ());this.Se.Z(!A._GetAutoObject(
A.Device.Device).AmP);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An_();this.AxQ(
);this.AcH();this.AxR();},IW:function(G){this.WM(this);},CF:function(G){var B;C.
AB.CF.call(this,G);A.zX([this,this.AKz],[B=A._GetAutoObject(A.Device.Device),B.AEy
,B.AIN],0);A.zX([this,this.AAE],[B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIP
],0);A.zX([this,this.AAE],[B=A._GetAutoObject(A.Device.Device),B.ASy,B.AZ_],0);A.
zX([this,this.A26],[B=A._GetAutoObject(A.Device.Device),B.Art,B.Atg],0);A.zX([this
,this.A2Y],[B=A._GetAutoObject(A.Device.Device),B.AEv,B.AIK],0);A._GetAutoObject(
A.Device.Device).AhH();if(A._GetAutoObject(A.Device.Device).AmP)A._GetAutoObject(
A.Device.Device).AeZ(true);A._GetAutoObject(A.Device.Device).AxC();A.pe([this,this.
A2Y],this);A.pe([this,this.AAE],this);A.pe([this,this.A26],this);},E3:function(G
){var B;A._GetAutoObject(A.Device.Device).AhH();A._GetAutoObject(A.Device.Device
).Un(false);A._GetAutoObject(A.Device.Device).Ae8(false);A._GetAutoObject(A.Device.
Device).AeZ(false);A.z$([this,this.AKz],[B=A._GetAutoObject(A.Device.Device),B.AEy
,B.AIN],0);A.z$([this,this.AAE],[B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIP
],0);A.z$([this,this.AAE],[B=A._GetAutoObject(A.Device.Device),B.ASy,B.AZ_],0);A.
z$([this,this.A26],[B=A._GetAutoObject(A.Device.Device),B.Art,B.Atg],0);A.z$([this
,this.A2Y],[B=A._GetAutoObject(A.Device.Device),B.AEv,B.AIK],0);},AAE:function(G
){this.An();},An_:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CK);this.C8.L(A.jb.Gf);this.JK.L(this.C8.AQ);this.
MD.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CK);this.C8.L(A.jb.AV);this.JK.L(A.jb.Text);this.MD.L(this.JK.AQ);this.TemperatureUnit.
L(this.JK.AQ);this.HB.L(A.jb.Gf);}}},AxQ:function(){this.Ak1.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JK.R(A.aaR(A.acf.ADM));this.C8.Aw(A.aaL(A.ach.AvG));this.C8.Cv(0);
this.NR.Cv(0);}break;case 1:{this.AVt(A._GetAutoObject(A.Device.Device).Kv,false
);this.C8.Aw(A.aaL(A.ach.AvG));this.NR.Cv(0);}break;case 2:{this.Sc.R(A._GetAutoObject(
A.Device.Converter).Ak0(A._GetAutoObject(A.Device.Device).AF9));this.AVt(A._GetAutoObject(
A.Device.Device).Kv,false);this.C8.Aw(null);this.NR.Cv(1);this.AcF.Z(true);this.
PP.Z(true);this.Sc.Z(true);this.Us.Z(true);}break;case 3:{this.AUx();this.AVt(A.
_GetAutoObject(A.Device.Device).Kv,true);this.AcF.Z(false);this.PP.Z(false);this.
Sc.Z(false);this.Us.Z(false);}break;case 4:{this.JK.R(A.aaR(A.acf.BjN));this.MD.
R(A.aaR(A.acu.Akk));this.C8.Aw(A.aaL(A.ach.AvI));this.C8.Cv(2);this.NR.Cv(0);}break;
default:A.ab5("%s%e",AHV,A._GetAutoObject(A.Device.Device).MeasureState);}},AcH:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Kv<=3240)||(A._GetAutoObject(A.Device.Device
).Kv>=5460))this.N.C6(null);else this.N.C6(A.aaL(A.ach.Aey));this.N.Cs(null);}break;
default:;}},AsB:function(G){A._GetAutoObject(C.A$).Fv();},WM:function(G){},A0l:function(
s){this.WM(s);},AkV:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BAQ(this);break;default:;}},A0k:function(s){this.AkV(s);},AVt:
function(AoO,BzG){if(BzG)this.Lq.L(A.jb.Bm);else this.Lq.L(A.jb.Gf);if(AoO<=3240
){this.MD.Z(false);this.TemperatureUnit.Z(false);this.Lq.Z(true);this.Lq.R(A.aaR(
A.acu.AVd));}else if(AoO>=5460){this.MD.Z(false);this.TemperatureUnit.Z(false);this.
Lq.Z(true);this.Lq.R(A.aaR(A.acu.Bpx));}else{this.MD.Z(true);this.TemperatureUnit.
Z(true);this.Lq.Z(false);this.MD.R(A._GetAutoObject(A.Device.Converter).Ak0(AoO)
);}},AxR:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Kv<=3240)||(A._GetAutoObject(A.Device.
Device).Kv>=5460))this.JK.R(A.aaR(A.acf.ADM));else this.JK.R(A.aaR(A.acf.Bp9));break;
default:;}},AxS:function(){},BpS:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Z3.Ar(true);break;case 4:this.Z2.Ar(true);break;default:{
this.Z3.Ar(false);this.Z2.Ar(false);A._GetAutoObject(A.Device.Device).Ae8(false);
}}},AKz:function(G){this.An();this.AxS();this.BpS();this.BpQ();},A26:function(G){
if(A._GetAutoObject(A.Device.Device).AmQ){this.Se.L(A.jb.H6);this.Se.Cv(1);}else{
this.Se.L(A.jb.Bm);this.Se.Cv(0);}},BAQ:function(G){if(!A._GetAutoObject(A.Device.
Device).AmP)A._GetAutoObject(A.Device.Device).AeZ(!A._GetAutoObject(A.Device.Device
).AmQ);},BpQ:function(){if(A._GetAutoObject(A.Device.Device).AmP){this.Se.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).AeZ(true);else A._GetAutoObject(A.Device.Device).AeZ(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Se.Z(true);else this.Se.Z(false);},AKB:function(
G){this.CF(this);},AUx:function(){A.ab5("%s",Baa);},A2Y:function(G){if(A._GetAutoObject(
A.Device.Device).HB){this.JK.H(Brs);this.MD.H(Brt);this.TemperatureUnit.H(Bru);}
else{this.JK.H(Brv);this.MD.H(Brw);this.TemperatureUnit.H(Brx);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gh._Init.call(this.Ak1={I:this},0);A.acg.
Ap._Init.call(this.NR={I:this},0);A.acg.Ap._Init.call(this.C8={I:this},0);A.acg.
Ap._Init.call(this.AcF={I:this},0);A.acg.Text._Init.call(this.JK={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MD={
I:this},0);A.acg.Text._Init.call(this.PP={I:this},0);A.acg.Text._Init.call(this.
Sc={I:this},0);A.acg.Text._Init.call(this.Us={I:this},0);C.CH._Init.call(this.Lq={
I:this},0);A.Device.TE._Init.call(this.Jb={I:this},0);A.Device.TE._Init.call(this.
Z3={I:this},0);A.Device.TE._Init.call(this.Z2={I:this},0);A.acg.Ap._Init.call(this.
Se={I:this},0);C.CH._Init.call(this.HB={I:this},0);A.acl.TE._Init.call(this.AjG={
I:this},0);this.__proto__=C.Ra;var B;this.N.Z(true);this.Ak1.Fl(1000);this.Ak1.B2=
2;this.NR.H(Bry);this.NR.L(A.jb.CS);this.C8.H(Brz);this.C8.L(A.jb.AV);this.C8.Cv(
0);this.C8.Z(true);this.AcF.H(BrA);this.AcF.L(A.jb.Text);this.AcF.Z(false);this.
JK.KS(true);this.JK.R(A.aaR(A.acf.ADM));this.JK.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.MD.A6(0x14);this.MD.R(A.aaR(A.acu.
Akk));this.MD.L(A.jb.Text);this.PP.H(BrB);this.PP.R(A.aaR(A.acf.PP));this.PP.L(A.
jb.Text);this.PP.Z(false);this.Sc.H(BrC);this.Sc.A6(0x14);this.Sc.R(BrD);this.Sc.
L(A.jb.Text);this.Sc.Z(false);this.Us.H(BrE);this.Us.R(BrF);this.Us.L(A.jb.Text);
this.Us.Z(false);this.Lq.H(BrG);this.Lq.R(A.aaR(A.acu.AVd));this.Lq.A6(0x12);this.
Lq.L(A.jb.Gf);this.Jb.B2=false;this.Jb.Cw=true;this.Jb.HM(1);this.Jb.Fl(4000);this.
Jb.Uk(0);this.Z3.B2=false;this.Z3.Cw=true;this.Z3.HM(2);this.Z3.Fl(400);this.Z3.
Uk(200);this.Z2.B2=false;this.Z2.Cw=true;this.Z2.HM(3);this.Z2.Fl(500);this.Z2.Uk(
250);this.Se.H(BrH);this.HB.H(BrI);this.HB.Z(A._GetAutoObject(A.Device.Device).HB
);this.HB.R(A.aaR(A.acf.HB));this.HB.A6(0x12);this.HB.L(A.jb.Gf);this.AjG.Ar(A._GetAutoObject(
A.Device.Device).HB);this.AjG.Fl(500);this.AjG.Uk(1000);this.J(this.NR,0);this.J(
this.C8,0);this.J(this.AcF,0);this.J(this.JK,0);this.J(this.TemperatureUnit,0);this.
J(this.MD,0);this.J(this.PP,0);this.J(this.Sc,0);this.J(this.Us,0);this.J(this.Lq
,0);this.J(this.Se,0);this.J(this.HB,0);this.N.CB=[this,this.AsB];this.N.Ck=[this
,this.A0k];this.N.Cl=[this,this.A0l];this.N.CY(A.aaL(A.ach.Aex));this.Ak1.Q=[B=this.
C8,B.ASp,B.Cv];this.NR.Aw(A.aaL(A.ach.NR));this.C8.Aw(A.aaL(A.ach.AvG));this.AcF.
Aw(A.aaL(A.ach.AQJ));this.JK.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MD.S(A.aaL(A.fl.Aeq));this.PP.S(A.aaL(A.fl.Af));this.Sc.S(A.aaL(A.fl.EK
));this.Us.S(A.aaL(A.fl.EK));this.Lq.S(A.aaL(A.fl.Aeq));this.Lq.A2(A.aaL(A.fl.EK
));this.Lq.Cu(A.aaL(A.fl.Af));this.Jb.Q=[B=A._GetAutoObject(A.Device.Device),B.ASG
,B.A0e];this.Z3.Q=[B=A._GetAutoObject(A.Device.Device),B.AED,B.AIQ];this.Z2.Q=[B=
A._GetAutoObject(A.Device.Device),B.AED,B.AIQ];this.Se.Aw(A.aaL(A.ach.AqN));this.
HB.S(A.aaL(A.fl.EK));this.HB.A2(A.aaL(A.fl.Kl));this.HB.Cu(A.aaL(A.fl.Ii));this.
AjG.Q=[B=this.HB,B.Fk,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Ak1._Done();this.NR._Done();this.C8._Done();this.AcF._Done();this.JK._Done(
);this.TemperatureUnit._Done();this.MD._Done();this.PP._Done();this.Sc._Done();this.
Us._Done();this.Lq._Done();this.Jb._Done();this.Z3._Done();this.Z2._Done();this.
Se._Done();this.HB._Done();this.AjG._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Ak1._ReInit();this.NR._ReInit();this.C8._ReInit();
this.AcF._ReInit();this.JK._ReInit();this.TemperatureUnit._ReInit();this.MD._ReInit(
);this.PP._ReInit();this.Sc._ReInit();this.Us._ReInit();this.Lq._ReInit();this.Jb.
_ReInit();this.Z3._ReInit();this.Z2._ReInit();this.Se._ReInit();this.HB._ReInit(
);this.AjG._ReInit();this.JK.R(A.aaR(A.acf.ADM));this.MD.R(A.aaR(A.acu.Akk));this.
PP.R(A.aaR(A.acf.PP));this.Lq.R(A.aaR(A.acu.AVd));this.HB.R(A.aaR(A.acf.HB));this.
JK.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MD.S(A.aaL(A.fl.
Aeq));this.PP.S(A.aaL(A.fl.Af));this.Sc.S(A.aaL(A.fl.EK));this.Us.S(A.aaL(A.fl.EK
));this.Lq.S(A.aaL(A.fl.Aeq));this.Lq.A2(A.aaL(A.fl.EK));this.Lq.Cu(A.aaL(A.fl.Af
));this.HB.S(A.aaL(A.fl.EK));this.HB.A2(A.aaL(A.fl.Kl));this.HB.Cu(A.aaL(A.fl.Ii
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ak1)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Us
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjG)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AU3={AcH:
function(){C.Ra.AcH.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cs(null);this.N.C6(A.aaL(A.ach.AvJ));}break;default:;}},
WM:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Kv>3240)&&(A._GetAutoObject(A.Device.Device
).Kv<5460)){A._GetAutoObject(A.Device.Device).AhH();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKB(this);break;default:;}},AxR:
function(){C.Ra.AxR.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JK.R(A.aaR(A.acf.BjO));break;default:;}},AxS:function(){C.Ra.AxS.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WA(16711680);this.Jb.Ar(true);}break;default:this.Jb.Ar(false);
}},AUx:function(){this.C8.Aw(A.aaL(A.ach.AvI));this.C8.Cv(0);this.NR.Cv(0);},_Init:
function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.AU3;this.Dq(C.AO7);},
_className:"Application::TemperatureMeasurementScreen"};C.APa={Dd:null,II:null,NT:
null,AP:null,AgZ:null,A_:null,De:function(E){C.BS.De.call(this,E);this.Dd.L(E);this.
II.L(E);this.NT.L(E);this.AgZ.L(E);},_Init:function(aArg){C.BS._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.Ap._Init.call(this.II={I:this},0
);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.C5._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.AgZ={I:this},0);A.acg.C5._Init.call(this.A_={I:this},
0);this.__proto__=C.APa;this.Dd.H(Ayw);this.II.H(As1);this.NT.H(AHw);this.AP.DC(
Bae);this.AP.DL(Baf);this.AP.L(A.jb.Bc);this.AgZ.H(BrJ);this.AgZ.L(A.jb.CS);this.
A_.DC(BrK);this.A_.DL(BrL);this.A_.L(A.jb.Bc);this.J(this.Dd,0);this.J(this.II,0
);this.J(this.NT,0);this.J(this.AP,0);this.J(this.AgZ,0);this.J(this.A_,0);this.
Dd.Aw(A.aaL(A.ach.ADw));this.II.Aw(A.aaL(A.ach.Aez));this.NT.Aw(A.aaL(A.ach.AvB)
);this.AgZ.Aw(A.aaL(A.ach.AQg));},_Done:function(){this.__proto__=C.BS;this.Dd._Done(
);this.II._Done();this.NT._Done();this.AP._Done();this.AgZ._Done();this.A_._Done(
);C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.Dd._ReInit(
);this.II._ReInit();this.NT._ReInit();this.AP._ReInit();this.AgZ._ReInit();this.
A_._ReInit();},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Dd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dc={Eq:null,DS:null,AGu:
0,ANI:0,Init:function(aArg){A.zV([this,this.ALh],A._GetAutoObject(A.Device.Device
).Am,0);A.pe([this,this.ALh],this);},ALh:function(G){var Ad=this.AGu;if(Ad<0){this.
DS.Hi();this.DS.EB(this.ANI);return;}this.DS.EB(A._GetAutoObject(A.Device.Device
).Am.AmU(Ad,14));this.DS.AE0(A._GetAutoObject(A.Device.Device).Am.I2(Ad,13));this.
DS.Ae0(A._GetAutoObject(A.Device.Device).Am.H1(Ad,8));this.DS.Ul(A._GetAutoObject(
A.Device.Device).Am.H1(Ad,11));this.DS.Ae3(A._GetAutoObject(A.Device.Device).Am.
H1(Ad,12));this.DS.Ae5(A._GetAutoObject(A.Device.Device).Am.CE(Ad,5));},A_g:function(
E){if(this.AGu===E)return;this.AGu=E;A.pe([this,this.ALh],this);},A9K:function(E
){if(this.ANI===E)return;this.ANI=E;A.pe([this,this.ALh],this);},A8W:function(){
return this.AGu;},_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.call(
this.Eq={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dc;this.
Eq.H(BrM);this.Eq.R(A.aaR(A.acf.GJ));this.Eq.A6(0x11);this.Eq.L(A.jb.Text);this.
DS.H(AZU);this.J(this.Eq,0);this.J(this.DS,0);this.Eq.S(A.aaL(A.fl.Af));this.Eq.
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
C.KO;this.AgG.H(BrN);this.AgG.L(A.jb.Text);this.Text.H(BrO);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afg.H(BrP);this.Afg.L(A.jb.Text);this.
J(this.AgG,0);this.J(this.Text,0);this.J(this.Afg,0);this.AgG.Aw(A.aaL(A.ach.APc
));this.Text.S(A.aaL(A.fl.Kl));this.Text.A2(A.aaL(A.fl.Ii));},_Done:function(){this.
__proto__=C.BS;this.AgG._Done();this.Text._Done();this.Afg._Done();C.BS._Done.call(
this);},_ReInit:function(){C.BS._ReInit.call(this);this.AgG._ReInit();this.Text.
_ReInit();this.Afg._ReInit();this.Text.S(A.aaL(A.fl.Kl));this.Text.A2(A.aaL(A.fl.
Ii));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.AgG)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afg
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AO5={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO5;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AO7={_Init:function(
aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO7;this.JV(this.Afg,-2);this.
Afg.Aw(A.aaL(A.ach.AbE));},_className:"Application::HeaderDeviceTemperature"};C.
Yo={Ai:function(Ae){C.AmN.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bpy)+A.aaR(A.acf.Colon
));},Ce:function(Ad){var B;if(!this.AX)return;this.AlB=0;this.AtG=0;this.XH=0;if(
!!this.AX){var O;for(O=0;O<this.AX.Ca();O++){this.AlB+=this.AX.CE(O,1);this.AtG+=
this.AX.CE(O,2);}if(this.AlB>0)this.XH=(this.AtG/this.AlB)*100;this.An();}},_Init:
function(aArg){C.AmN._Init.call(this,aArg);this.__proto__=C.Yo;this.AP.Z(false);
this.A_.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.
Ii));},_ReInit:function(){C.AmN._ReInit.call(this);this.V.S(A.aaL(A.fl.Kl));this.
V.A2(A.aaL(A.fl.Ii));},_className:"Application::EvaluationLossesSumItem"};C.A6m={
Ah:null,A4:0,_Init:function(aArg){this.__proto__=C.A6m;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6n={K0:null,MS:null,AY:0,Yh:function(){this.K0=null;this.MS=null;this.AY=0;
},Os:function(A7){var Hb;Hb=A._NewObject(C.A6m,0);Hb.A4=A7;if(!this.K0){this.K0=
Hb;this.MS=Hb;this.AY=1;}else{this.MS.Ah=Hb;this.MS=Hb;this.AY=this.AY+1;}},AmW:
function(){var B;var RG=0;var Of=this.K0;while(!!Of){RG+=Of.A4;Of=Of.Ah;}return RG;
},AjO:function(){if(!this.AY)return 0;return this.AmW()/this.AY;},AqV:function(){
var B;if(!this.AY)return 0;var A1e=this.AjO();var Adf=0;var Of=this.K0;while(!!Of
){Adf+=Math.pow(Of.A4-A1e,2);Of=Of.Ah;}Adf/=this.AY;Adf=Math.sqrt(Adf);return Adf;
},_Init:function(aArg){this.__proto__=C.A6n;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agr={Background:null,V:null,KT:0,Uq:5,Hf:false
,Ai:function(Ae){C.Hc.Ai.call(this,Ae);if(this.Hf)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CK);},T:function(E){C.Hc.T.call(this,E);this.V.R(E);},Bg:
function(E){if(this.Hf===E)return;this.Hf=E;this.An();},Kq:function(E){if(this.Uq===
E)return;this.Uq=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hc._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CH.
_Init.call(this.V={I:this},0);this.__proto__=C.Agr;this.H(BF);this.Background.AZ(
0x3F);this.Background.H(BF);this.V.AZ(0x3F);this.V.H(AIq);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KT=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hc;this.Background._Done();this.V._Done();C.Hc._Done.call(this
);},_ReInit:function(){C.Hc._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AN0={Wv:function(G){this.Agp();this.IY(A.aaR(
A.acf.AVc),[this,this.ATC],5);this.IY(A.aaR(A.acf.AVa),[this,this.ATB],7);this.IY(
A.aaR(A.acf.Calving),[this,this.Blw],11);this.IY(A.aaR(A.acf.An3),[this,this.AwR
],2);this.IY(A.aaR(A.acf.XP),[this,this.AEO],1);this.IY(A.aaR(A.acf.Auy),[this,this.
AEI],0);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Anh)+A.
aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(6);},DE:function(G){},Abt:
function(){return C.AM7;},Abu:function(){return C.APz;},Q6:function(G){A._GetAutoObject(
A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.Helper).ACS());},HO:function(G){
C.GU.HO.call(this,G);if(this.Akh()===false){this.N.Cs(A.aaL(A.ach.ADt));this.N.Ck=[
this,this.A5V];this.N.FJ(A.jV);}this.N.OO(false);this.N.OP(false);},Agb:function(
){A._GetAutoObject(C.A$).Cg(62);},_Init:function(aArg){C.GU._Init.call(this,aArg
);this.__proto__=C.AN0;var B;this.Dq(C.AO8);this.Dz(A.aaR(A.acf.ARX));this.AwM([
B=A._GetAutoObject(A.Device.Device),B.A8o,B.BaW]);},_ReInit:function(){C.GU._ReInit.
call(this);this.Dz(A.aaR(A.acf.ARX));},_className:"Application::DryCowListScreen"
};C.ANZ={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.ANZ;this.
Ld.Ar(false);this.Ld.Aj(false);this.Ld.Z(false);this.Jn.Ar(false);this.Jn.Aj(false
);this.Jn.Z(false);},_className:"Application::DryCowListFilterScreen"};C.AO8={DY:
function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.Converter).
AdX(9));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=C.AO8;}
,_className:"Application::HeaderDryCowListFilter"};C.Abq={Filter:null,LW:null,AGX:
A.jV,Ep:0,AF3:1,Operator:1,Bk:function(aSize){C.Acp.Bk.call(this,aSize);this.V.H([
15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Acp.Ai.call(this,Ae);this.LW.
L(this.V.AQ);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.
z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$],E,0);A.
pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.Filter
,F[1].call(F[0])))this.To((F=this.Filter,F[1].call(F[0])).DQ(this.Ep,this.Operator
));else this.To(null);},Nd:function(E){if(this.Ep===E)return;this.Ep=E;A.pe([this
,this.L$],this);},To:function(AH){if(!!AH){var A1T;if(this.AF3!==1)A1T=this.AF3;
else A1T=AH.Operator;this.T((this.AGX+CQ)+A._GetAutoObject(A.Device.Converter).A6i(
A1T));this.Zx(false);}else{this.T(this.AGX);this.Zx(true);}},ON:function(E){if(this.
Operator===E)return;this.Operator=E;A.pe([this,this.L$],this);},AFN:function(E){
if(this.AGX===E)return;this.AGX=E;A.pe([this,this.L$],this);},A96:function(E){if(
this.AF3===E)return;this.AF3=E;A.pe([this,this.L$],this);},_Init:function(aArg){
C.Acp._Init.call(this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.
Abq;this.H(As3);this.AW.H(BrQ);this.LW.H(AZV);this.JV(this.V,-1);this.J(this.LW,
0);},_Done:function(){this.__proto__=C.Acp;this.LW._Done();C.Acp._Done.call(this
);},_ReInit:function(){C.Acp._ReInit.call(this);this.LW._ReInit();},_Mark:function(
D){var B;C.Acp._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.AjI={LW:null,Ai:function(Ae){C.Qy.Ai.call(this,Ae);this.LW.L(this.V.AQ);},To:
function(AH){if(!!AH){this.H4.Cv(1);this.Zx(true);this.LW.A9X(false);}else{this.
H4.Cv(0);this.Zx(false);this.LW.A9X(true);}},_Init:function(aArg){C.Qy._Init.call(
this,aArg);C.LW._Init.call(this.LW={I:this},0);this.__proto__=C.AjI;this.I_=20;this.
LW.H(AZV);this.J(this.LW,0);},_Done:function(){this.__proto__=C.Qy;this.LW._Done(
);C.Qy._Done.call(this);},_ReInit:function(){C.Qy._ReInit.call(this);this.LW._ReInit(
);},_Mark:function(D){var B;C.Qy._Mark.call(this,D);if((B=this.LW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABU={Q:null,CP:function(
){this.T(A._GetAutoObject(A.Device.Helper).AmV(this.TableId,this.Ep));},To:function(
AH){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.H4.Cv(1);else this.H4.Cv(
0);},Kd:function(G){A.pe([this,this.L$],this);},As:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
Kd],E,0);if(!!E)A.pe([this,this.Kd],this);},_Init:function(aArg){C.Qy._Init.call(
this,aArg);this.__proto__=C.ABU;},_ReInit:function(){C.Qy._ReInit.call(this);this.
CP();},_Mark:function(D){var B;C.Qy._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.APz={YT:null,I6:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YT={I:this},0);A.acg.Text._Init.call(this.I6={I:this},0);this.__proto__=
C.APz;this.A9K(1);this.YT.H(BrR);this.YT.KS(true);this.YT.R(A.aaR(A.acf.AD1));this.
YT.L(A.jb.Text);this.I6.H(S5);this.I6.R(((A.aaR(A.acf.RJ)+Bag)+A.aaR(A.acf.A$U))+
Oa);this.I6.L(A.jb.Text);this.J(this.YT,0);this.J(this.I6,0);this.YT.S(A.aaL(A.fl.
Ak));this.I6.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dc;this.YT._Done(
);this.I6._Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this
);this.YT._ReInit();this.I6._ReInit();this.YT.R(A.aaR(A.acf.AD1));this.I6.R(((A.
aaR(A.acf.RJ)+Bag)+A.aaR(A.acf.A$U))+Oa);this.YT.S(A.aaL(A.fl.Ak));this.I6.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.YT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AM7={Mg:null,KP:null,AdS:null,AP:null,A_:null
,Xm:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mg.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KP.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KP.M[2]-1,0,this.
KP.M[2]+1,aSize[1]]);this.AdS.H([this.KP.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KP.L(this.V.AQ);this.AdS.L(this.V.AQ);if(!!this.Xm&&(
this.Xm!==5)){this.Mg.L(A._GetAutoObject(A.acj.Assessment).Qj(this.Xm));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xv(this.Xm));}else this.Mg.L(this.Background.
AQ);},Ce:function(Ad){if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Md=this.AX.
CE(Ad,1);var A2o=this.AX.CE(Ad,29);var Td=this.AX.HF(Ad,4);var LQ=this.AX.I2(Ad,
13);var AlE=this.AX.I2(Ad,17);var AlN=this.AX.H1(Ad,11);this.Xm=A._GetAutoObject(
A.Device.Helper).AMg(LQ,AlN,AlE);this.T(Md.toFixed());this.KP.R(A2o.toFixed());this.
AdS.R(A._GetAutoObject(A.acj.KK).ACP(Td,A._GetAutoObject(A.Device.Helper).Dv(),BrS
));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Mg={I:this},0);A.acg.Text._Init.call(this.KP={I:this},0);A.acg.Text._Init.call(
this.AdS={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A_={I:this},0);this.__proto__=C.AM7;this.Mg.H(As_);this.AP.L(A.jb.Bc);this.
A_.L(A.jb.Bc);this.J(this.Mg,0);this.J(this.KP,0);this.J(this.AdS,0);this.J(this.
AP,0);this.J(this.A_,0);this.KP.S(A.aaL(A.fl.Af));this.AdS.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mg._Done();this.KP._Done(
);this.AdS._Done();this.AP._Done();this.A_._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mg._ReInit();this.KP._ReInit();this.AdS.
_ReInit();this.AP._ReInit();this.A_._ReInit();this.KP.S(A.aaL(A.fl.Af));this.AdS.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mg
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RQ={AJM:0,Bdv:false,Ai:function(Ae){C.Fu.Ai.call(this,Ae);if(this.Bdv){this.
T(A.aaR(A.acf.ANX));this.Ks(A.jV);}else{this.T(A.aaR(A.acf.Bju));if(this.AJM>0)this.
Ks(this.AJM.toFixed());else this.Ks(Xa);}},Ce:function(G){C.Fu.Ce.call(this,G);this.
Bdv=A._GetAutoObject(A.Device.Helper).W.IsDry;var Alz=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Alz>0)this.AJM=A._GetAutoObject(A.Device.Helper).
MN(Alz,A._GetAutoObject(A.Device.Helper).Dv());else this.AJM=0;this.An();},_Init:
function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.RQ;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMl={ALr:A.jV,Ai:function(Ae){C.Fu.Ai.call(this,Ae);this.T(A.aaR(A.acf.RJ));
this.Ks(this.ALr);},Ce:function(G){C.Fu.Ce.call(this,G);var Td=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALr=A._GetAutoObject(A.acj.KK).ACP(Td,A._GetAutoObject(
A.Device.Helper).Dv(),((((BrT+A.aaR(A.acf.BgM))+BrU)+A.aaR(A.acf.BgL))+BrV)+A.aaR(
A.acf.ALV));this.An();},_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=
C.AMl;this.ALr=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fu._ReInit.call(this);
this.ALr=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANR={Ua:null,Zb:null,Wl:null,Wm:null,St:null,Init:function(aArg){this.Bb(this.
Ua);A.pe([this,this.MG],this);},XB:function(G){A._GetAutoObject(A.Device.Device).
Ds(1);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Nc._Init.call(this.Ua={
I:this},0);C.Nc._Init.call(this.Zb={I:this},0);C.Nc._Init.call(this.Wl={I:this},
0);C.AbV._Init.call(this.Wm={I:this},0);C.T9._Init.call(this.St={I:this},0);this.
__proto__=C.ANR;var B;this.Dq(C.AO5);this.Ua.H(IR);this.Ua.Aj(true);this.Ua.T(A.
aaR(A.acf.ACp));this.Ua.Bg(false);this.Ua.Nf(83);this.Zb.H(P7);this.Zb.Aj(true);
this.Zb.T(A.acf.Info);this.Zb.Bg(true);this.Zb.Nf(82);this.Wl.H(Aaf);this.Wl.Aj(
true);this.Wl.T(A.aaR(A.acf.AGx));this.Wl.Bg(false);this.Wl.Nf(64);this.Wm.H(Alg
);this.Wm.Aj(true);this.Wm.T(A.aaR(A.acf.TempMeasurement));this.Wm.Bg(true);this.
Wm.Nf(60);this.St.H(Aor);this.St.Aj(true);this.St.T(A.aaR(A.acf.ACK));this.St.Bg(
false);this.J(this.Ua,-1);this.J(this.Zb,-1);this.J(this.Wl,-1);this.J(this.Wm,-
1);this.J(this.St,-1);this.N.Ck=[this,this.XB];this.N.Cs(A.aaL(A.ach.ADB));this.
Ua.AR=[B=this.Ua,B.Ni];this.Zb.AR=[B=this.Zb,B.Ni];this.Wl.AR=[B=this.Wl,B.Ni];this.
Wm.AR=[B=this.Wm,B.Ni];this.St.AR=null;this.St.AeT([B=this.St,B.Ati]);this.St.Gn([
this,this.D_,this.GN]);this.St.ASS([B=A._GetAutoObject(A.Device.Device),B.Art,B.
Atg]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Ua._Done();this.
Zb._Done();this.Wl._Done();this.Wm._Done();this.St._Done();C.Ei._Done.call(this);
},_ReInit:function(){C.Ei._ReInit.call(this);this.Ua._ReInit();this.Zb._ReInit();
this.Wl._ReInit();this.Wm._ReInit();this.St._ReInit();this.Ua.T(A.aaR(A.acf.ACp)
);this.Wl.T(A.aaR(A.acf.AGx));this.Wm.T(A.aaR(A.acf.TempMeasurement));this.St.T(
A.aaR(A.acf.ACK));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Ua
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"
};C.ANS={T_:null,AbT:null,Wj:null,Init:function(aArg){this.Bb(this.T_);},ByW:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},Bj9:function(G){if(A._GetAutoObject(
A.Device.Device).Aa5<=20)A._GetAutoObject(A.Device.Device).A9(76,true,BrW,0,null
);else A._GetAutoObject(A.Device.Device).A9(39,true,A.jV,0,[this,this.ByW]);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Nc._Init.call(this.T_={I:this},0);C.
Co._Init.call(this.AbT={I:this},0);C.AbV._Init.call(this.Wj={I:this},0);this.__proto__=
C.ANS;var B;this.Dq(C.AO6);this.T_.H(IR);this.T_.Aj(true);this.T_.T(A.aaR(A.acf.
A5m));this.T_.Bg(false);this.T_.Nf(65);this.AbT.H(P7);this.AbT.Aj(true);this.AbT.
T(A.aaR(A.acf.A6k));this.AbT.Bg(true);this.Wj.H(Aaf);this.Wj.Aj(true);this.Wj.T(
A.aaR(A.acf.RangeTest));this.Wj.Bg(false);this.Wj.Nf(15);this.J(this.T_,-1);this.
J(this.AbT,-1);this.J(this.Wj,-1);this.T_.AR=[B=this.T_,B.Ni];this.AbT.AR=[this,
this.Bj9];this.Wj.AR=[B=this.Wj,B.Ni];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.T_._Done();this.AbT._Done();this.Wj._Done();C.Ei._Done.call(this);},_ReInit:
function(){C.Ei._ReInit.call(this);this.T_._ReInit();this.AbT._ReInit();this.Wj.
_ReInit();this.T_.T(A.aaR(A.acf.A5m));this.AbT.T(A.aaR(A.acf.A6k));this.Wj.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.T_
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AO6={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO6;this.
Text.R(A.aaR(A.acf.AGx));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGx));},_className:"Application::HeaderDeviceServiceMenu"};C.Nc={M8:
null,Ai:function(Ae){C.AbV.Ai.call(this,Ae);this.M8.L(this.V.AQ);},_Init:function(
aArg){C.AbV._Init.call(this,aArg);A.acg.Ap._Init.call(this.M8={I:this},0);this.__proto__=
C.Nc;this.M8.AZ(0x38);this.M8.H(BrX);this.J(this.M8,0);this.V.Cu(A.aaL(A.fl.Bh));
this.M8.Aw(A.aaL(A.ach.Ajq));},_Done:function(){this.__proto__=C.AbV;this.M8._Done(
);C.AbV._Done.call(this);},_ReInit:function(){C.AbV._ReInit.call(this);this.M8._ReInit(
);this.V.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.AbV._Mark.call(this,D);if((
B=this.M8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANN={Ag5:null,Ag$:null,Ahb:null,Ag9:null,Aj9:null,Ag8:null,Ag7:null,Ag6:null
,Aj7:null,Ag4:null,Aj8:null,Aha:null,Aj_:null,Ag_:null,Aj$:null,Init:function(aArg
){this.Bb(this.Ag5);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.PK._Init.
call(this.Ag5={I:this},0);C.PK._Init.call(this.Ag$={I:this},0);C.PK._Init.call(this.
Ahb={I:this},0);C.PK._Init.call(this.Ag9={I:this},0);C.PK._Init.call(this.Aj9={I:
this},0);C.PK._Init.call(this.Ag8={I:this},0);C.PK._Init.call(this.Ag7={I:this},
0);C.PK._Init.call(this.Ag6={I:this},0);C.PK._Init.call(this.Aj7={I:this},0);C.PK.
_Init.call(this.Ag4={I:this},0);C.PK._Init.call(this.Aj8={I:this},0);C.PK._Init.
call(this.Aha={I:this},0);C.PK._Init.call(this.Aj_={I:this},0);C.PK._Init.call(this.
Ag_={I:this},0);C.PK._Init.call(this.Aj$={I:this},0);this.__proto__=C.ANN;this.Dq(
C.AO1);this.Ag5.H(AIx);this.Ag5.Aj(true);this.Ag5.Sy(1);this.Ag$.H(AZS);this.Ag$.
Aj(true);this.Ag$.Bg(true);this.Ag$.Sy(2);this.Ahb.H(Atb);this.Ahb.Aj(true);this.
Ahb.Bg(false);this.Ahb.Sy(3);this.Ag9.H(Atc);this.Ag9.Aj(true);this.Ag9.Bg(true);
this.Ag9.Sy(4);this.Aj9.H(Aym);this.Aj9.Aj(true);this.Aj9.Sy(5);this.Ag8.H(BrY);
this.Ag8.Aj(true);this.Ag8.Bg(true);this.Ag8.Sy(6);this.Ag7.H(Atd);this.Ag7.Aj(true
);this.Ag7.Bg(false);this.Ag7.Sy(7);this.Ag6.H(Ayv);this.Ag6.Aj(true);this.Ag6.Bg(
true);this.Ag6.Sy(8);this.Aj7.H(AZT);this.Aj7.Aj(true);this.Aj7.Sy(9);this.Ag4.H(
Aoy);this.Ag4.Aj(true);this.Ag4.Bg(true);this.Ag4.Sy(10);this.Aj8.H(BrZ);this.Aj8.
Aj(true);this.Aj8.Sy(11);this.Aha.H(Br0);this.Aha.Aj(true);this.Aha.Bg(true);this.
Aha.Sy(12);this.Aj_.H(Br1);this.Aj_.Aj(true);this.Aj_.Sy(13);this.Ag_.H(Br2);this.
Ag_.Aj(true);this.Ag_.Bg(true);this.Ag_.Sy(14);this.Aj$.H(Br3);this.Aj$.Aj(true);
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
"Application::DeviceCheckScreen"};C.AO1={_Init:function(aArg){C.KO._Init.call(this
,aArg);this.__proto__=C.AO1;this.Text.R(A.aaR(A.acf.A5N));},_ReInit:function(){C.
KO._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5N));},_className:"Application::HeaderDeviceCheck"
};C.PK={DeviceComponentToString:null,Kh:null,AuX:0,Bb9:false,CP:function(){this.
V.R(this.DeviceComponentToString.BI(this.AuX));},Bk:function(aSize){var B;C.Co.Bk.
call(this,aSize);this.Kh.H(A.abM(this.Kh.M,aSize[0]-((B=this.Kh.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kh.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kh.
AES(this.V.AQ);if(this.Bb9)this.Kh.AwE(A.jb.E1);else this.Kh.AwE(A.jb.Gf);},Sy:function(
E){if(this.AuX===E)return;this.AuX=E;this.T(this.DeviceComponentToString.BI(E));
this.DY(this);},DY:function(G){this.Bb9=A._GetAutoObject(A.Device.Device).AJC(this.
AuX);this.An();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kh._Init.call(this.Kh={I:this
},0);this.__proto__=C.PK;this.V.H(Br4);this.V.A6(0x11);this.Kh.H(Br5);this.J(this.
Kh,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kh._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kh._ReInit();this.CP();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sb={Ay:null,DZ:null,Y:null,Init:function(aArg){A.pe([this,this.AAD],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALl(this);this.DJ(this);},CF:function(G
){A.pe([this,this.MG],this);},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[
3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},AAD:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6y();A._GetAutoObject(A.Device.Device
).Am.Bl(Be);A.pe([this,this.MG],this);},Ev:function(G){A._GetAutoObject(C.A$).Fv(
);},A3o:function(G){A._GetAutoObject(C.A$).Cg(84);},DJ:function(G){this.N.CY(A.aaL(
A.ach.E2));this.N.CB=[this,this.Ev];this.N.Cs(A.aaL(A.ach.ADA));if(!A._GetAutoObject(
A.Device.Device).Am.Filter||A._GetAutoObject(A.Device.Helper).Arb(A._GetAutoObject(
A.Device.Device).Am.Filter)){this.N.Ck=null;this.N.I4.Dr(100);}else{this.N.Ck=[this
,this.AAD];this.N.I4.Dr(255);}this.N.C6(A.aaL(A.ach.Aez));this.N.Cl=[this,this.A3o
];},MG:function(s){this.DJ(s);},ALl:function(G){A.ab5("%s",Br6);},BGj:function(s
){this.ALl(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sb;this.N.Ar(false);this.N.Z(true);this.Dq(C.
Abv);this.Ay.H(Iq);this.DZ.AZ(0x3F);this.DZ.H(E$);this.DZ.L(A.jb.CK);this.Y.H(Lu
);this.Y.JP(9);this.J(this.Ay,0);this.J(this.DZ,0);this.J(this.Y,0);this.Y.El=[this
,this.Fe];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DZ._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DZ._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOc={Yf:null,Ye:null,X3:null
,TF:null,DJ:function(G){C.Sb.DJ.call(this,G);if(this.AV===this.TF){this.N.Cs(null
);this.N.Ck=null;this.N.C6(null);this.N.Cl=null;}},ALl:function(G){if(this.AV===
this.TF)this.Dq(C.APa);else this.Dq(C.Abv);},Bzd:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQa);case 1:return A.
aaL(A.ach.AQb);default:A.ab5("%s%s",Br7,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},Bze:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQc);case 1:return A.aaL(A.ach.AQd);default:
A.ab5("%s%s",AIC,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ie:function(G){var Cx=(C.Fi.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.
Yf)A._GetAutoObject(C.A$).Cg(66);else if(Cx===this.Ye)A._GetAutoObject(C.A$).Cg(
56);else if(Cx===this.X3)A._GetAutoObject(C.A$).Cg(58);else if(Cx===this.TF)A._GetAutoObject(
C.A$).Cg(59);},_Init:function(aArg){C.Sb._Init.call(this,aArg);C.Fi._Init.call(this.
Yf={I:this},0);C.Fi._Init.call(this.Ye={I:this},0);C.Fi._Init.call(this.X3={I:this
},0);C.Fi._Init.call(this.TF={I:this},0);this.__proto__=C.AOc;this.Yf.H(P3);this.
Yf.Aj(true);this.Yf.T(A.aaR(A.acf.Afr));this.Ye.H(JZ);this.Ye.Aj(true);this.Ye.T(
A.aaR(A.acf.Temperature));this.X3.H(Br8);this.X3.Aj(true);this.X3.T(A.aaR(A.acf.
Rating));this.TF.H(Br9);this.TF.Aj(true);this.TF.T(A.aaR(A.acf.A7C));this.J(this.
Yf,0);this.J(this.Ye,0);this.J(this.X3,0);this.J(this.TF,0);this.Yf.AR=[this,this.
Ie];this.Yf.DB(this.Bze());this.Ye.AR=[this,this.Ie];this.Ye.DB(this.Bzd());this.
X3.AR=[this,this.Ie];this.X3.DB(A.aaL(A.ach.AP_));this.TF.AR=[this,this.Ie];this.
TF.DB(A.aaL(A.ach.AP$));},_Done:function(){this.__proto__=C.Sb;this.Yf._Done();this.
Ye._Done();this.X3._Done();this.TF._Done();C.Sb._Done.call(this);},_ReInit:function(
){C.Sb._ReInit.call(this);this.Yf._ReInit();this.Ye._ReInit();this.X3._ReInit();
this.TF._ReInit();this.Yf.T(A.aaR(A.acf.Afr));this.Ye.T(A.aaR(A.acf.Temperature)
);this.X3.T(A.aaR(A.acf.Rating));this.TF.T(A.aaR(A.acf.A7C));},_Mark:function(D){
var B;C.Sb._Mark.call(this,D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOd={VG:null,X5:null,Yg:null,ALl:function(G){this.Dq(C.Avs);},Bzh:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQO
);case 1:return A.aaL(A.ach.AQP);default:A.ab5("%s%s",AIC,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ie:function(G){var Cx=(C.Fi.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VG)A._GetAutoObject(C.A$).Cg(68);else if(Cx===
this.Yg)A._GetAutoObject(C.A$).Cg(57);else if(Cx===this.X5)A._GetAutoObject(C.A$
).Cg(67);},Bzg:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.APZ);case 1:return A.aaL(A.ach.AP0);default:A.ab5("%s%s",AIC
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},Bzi:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQQ
);case 1:return A.aaL(A.ach.AQR);default:A.ab5("%s%s",AIC,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sb._Init.call(
this,aArg);C.Fi._Init.call(this.VG={I:this},0);C.Fi._Init.call(this.X5={I:this},
0);C.Fi._Init.call(this.Yg={I:this},0);this.__proto__=C.AOd;this.VG.H(P3);this.VG.
Aj(true);this.VG.T(A.aaR(A.acf.A$M));this.X5.H(AZW);this.X5.Aj(true);this.X5.T(A.
aaR(A.acf.A5c));this.Yg.H(N_);this.Yg.Aj(true);this.Yg.T(A.aaR(A.acf.A$P));this.
J(this.VG,0);this.J(this.X5,0);this.J(this.Yg,0);this.VG.AR=[this,this.Ie];this.
VG.DB(this.Bzh());this.VG.Ab7(A.aaL(A.ach.NS));this.X5.AR=[this,this.Ie];this.X5.
DB(this.Bzg());this.Yg.AR=[this,this.Ie];this.Yg.DB(this.Bzi());},_Done:function(
){this.__proto__=C.Sb;this.VG._Done();this.X5._Done();this.Yg._Done();C.Sb._Done.
call(this);},_ReInit:function(){C.Sb._ReInit.call(this);this.VG._ReInit();this.X5.
_ReInit();this.Yg._ReInit();this.VG.T(A.aaR(A.acf.A$M));this.X5.T(A.aaR(A.acf.A5c
));this.Yg.T(A.aaR(A.acf.A$P));},_Mark:function(D){var B;C.Sb._Mark.call(this,D);
if((B=this.VG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOg={Bdy:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZQ(0));},_Init:function(aArg){C.AqK._Init.call(this,aArg);this.
__proto__=C.AOg;this.Ae6(A.aaR(A.acf.A7X));},_ReInit:function(){C.AqK._ReInit.call(
this);this.Ae6(A.aaR(A.acf.A7X));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AN$={Aie:null,Aby:null,UI:null,AaY:null,Pi:null,Ajn:null,Agt:null,Ajo:null,Agu:
null,Ay:null,AaS:null,Adc:0,Apu:0,DE:function(G){switch(this.Cr.CO){case 4:{if(this.
I1.Fk())return;var Qs=this.Y.Br[1]+80;this.Y.F_([this.Y.Br[0],Qs]);this.Y.Vt(null
,null);}break;case 5:{if(this.I1.Fk())return;var Qs=this.Y.Br[1]-80;this.Y.F_([this.
Y.Br[0],Qs]);this.Y.Vt(null,null);}break;default:C.Fw.DE.call(this,G);}},Ap6:function(
L1,AcW){if(!L1)return;var Fs=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(
A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcW,true);Fs.CW(HV);var Ac_=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fs.CW(Ac_
);L1.Bl(Fs);},Ait:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arc()){this.
Aie.Os(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Aze=this.Bzb(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaS.Set(Aze,this.AaS.Get(Aze)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Adc++;this.Apu=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fw.Ait.call(
this,G);},Aat:function(G){if(this.Adc>1)A._GetAutoObject(A.Device.Device).A9(56,
true,this.Adc.toFixed(),0,null);if(this.Adc===1)A._GetAutoObject(A.Device.Device
).A9(53,true,this.Apu.toFixed(),0,null);if(this.Aie.AY>0)this.UI.T(((((((A._GetAutoObject(
A.Device.Converter).AxY(this.Aie.AjO()|0,1)+AyA)+A._GetAutoObject(A.Device.Converter
).AxY(this.Aie.AqV()|0,1))+CQ)+A._GetAutoObject(A.acj.DV).AfZ())+AyB)+this.Aie.AY.
toFixed())+Oa);else this.UI.T(A.aaR(A.acf.Unknown));var RG=this.AaS.AmW();var O;
for(O=0;O<this.AaS.MC;O++){var Bf=this.Bzw(O);if(!!Bf){var CD=this.AaS.Get(O);Bf.
BlI(CD);if(!RG)Bf.A_a(0);else Bf.A_a(Math.round((CD*100)/RG)|0);Bf.Bnp(this.Bzv(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adh=false;if(this.Aie.AY>0)
Adh=true;this.I1.Z(!Adh);C.Fw.Aat.call(this,G);},Ado:function(G){this.Aie.Yh();this.
AaS.Hi();this.Adc=0;this.Apu=0;C.Fw.Ado.call(this,G);},Bzw:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Pi;break;case 1:Bf=this.Ajn;break;case 2:Bf=this.
Agt;break;case 3:Bf=this.Ajo;break;case 4:Bf=this.Agu;break;default:throw new Error(
AyC+aIndex.toFixed());}return Bf;},Bzv:function(aIndex,AoJ){var B;var Tp=A.jV;switch(
AoJ){case 0:{switch(aIndex){case 0:Tp=Br_;break;case 1:Tp=Br$;break;case 2:Tp=Bsa;
break;case 3:Tp=Bsb;break;case 4:Tp=Bsc;break;default:throw new Error(AyC+aIndex.
toFixed());}Tp=Tp+(CQ+A.aaR(A.acf.Az7));}break;case 1:{switch(aIndex){case 0:Tp=
Bsd;break;case 1:Tp=Bse;break;case 2:Tp=Bsf;break;case 3:Tp=Bsg;break;case 4:Tp=
Bsh;break;default:throw new Error(AyC+aIndex.toFixed());}Tp=Tp+(CQ+A.aaR(A.acf.A7j
));}break;default:A.ab5("%s%e",Bah,AoJ);}return Tp;},Bzc:function(AIY,AoJ){var Ac$=
0;switch(AoJ){case 0:switch(AIY){case 0:Ac$=35000;break;case 1:Ac$=40000;break;case
2:Ac$=45000;break;case 3:Ac$=50000;break;case 4:Ac$=2147483647;break;default:throw new
Error(AyC+AIY.toFixed());}break;case 1:switch(AIY){case 0:Ac$=36287;break;case 1:
Ac$=40823;break;case 2:Ac$=45359;break;case 3:Ac$=49895;break;case 4:Ac$=2147483647;
break;default:throw new Error(AyC+AIY.toFixed());}break;default:A.ab5("%s%e",Bah
,AoJ);}return Ac$;},Bzb:function(A7,AoJ){var Aze=0;var O;for(O=0;O<this.AaS.MC;O++
)if(A7<this.Bzc(O,AoJ)){Aze=O;break;}return Aze;},Fe:function(G){var B;this.Ay.Mu((
B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[
1]);},_Init:function(aArg){C.Fw._Init.call(this,aArg);C.Agr._Init.call(this.Aby={
I:this},0);C.IC._Init.call(this.UI={I:this},0);C.AaY._Init.call(this.AaY={I:this
},0);C.Pi._Init.call(this.Pi={I:this},0);C.Pi._Init.call(this.Ajn={I:this},0);C.
Pi._Init.call(this.Agt={I:this},0);C.Pi._Init.call(this.Ajo={I:this},0);C.Pi._Init.
call(this.Agu={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaS={I:this},0);this.__proto__=C.AN$;this.Dq(C.Avs);this.Aky(A.aaR(
A.acf.A5$));this.Ae6(A.aaR(A.acf.A7Q));this.Aby.H(AIx);this.Aby.Aj(true);this.Aby.
T(A.aaR(A.acf.A43));this.Aby.Bg(false);this.Aby.Kq(5);this.UI.H(AZS);this.UI.Aj(
true);this.UI.T(A.jV);this.UI.Bg(true);this.UI.Kq(5);this.AaY.H(Atb);this.AaY.Aj(
true);this.Pi.H(Atc);this.Pi.Aj(true);this.Pi.Bg(true);this.Ajn.H(Atd);this.Ajn.
Aj(true);this.Agt.H(Ayv);this.Agt.Aj(true);this.Agt.Bg(true);this.Ajo.H(AZT);this.
Ajo.Aj(true);this.Agu.H(Aoy);this.Agu.Aj(true);this.Agu.Bg(true);this.Ay.H(Iq);this.
AaS.Zy(5);this.J(this.Aby,-1);this.J(this.UI,-1);this.J(this.AaY,-1);this.J(this.
Pi,-1);this.J(this.Ajn,-1);this.J(this.Agt,-1);this.J(this.Ajo,-1);this.J(this.Agu
,-1);this.J(this.Ay,-1);this.Y.El=[this,this.Fe];this.Aie=A._NewObject(C.AvP,0);
this.UI.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Fw;this.Aby._Done(
);this.UI._Done();this.AaY._Done();this.Pi._Done();this.Ajn._Done();this.Agt._Done(
);this.Ajo._Done();this.Agu._Done();this.Ay._Done();this.AaS._Done();C.Fw._Done.
call(this);},_ReInit:function(){C.Fw._ReInit.call(this);this.Aby._ReInit();this.
UI._ReInit();this.AaY._ReInit();this.Pi._ReInit();this.Ajn._ReInit();this.Agt._ReInit(
);this.Ajo._ReInit();this.Agu._ReInit();this.Ay._ReInit();this.AaS._ReInit();this.
Aky(A.aaR(A.acf.A5$));this.Ae6(A.aaR(A.acf.A7Q));this.Aby.T(A.aaR(A.acf.A43));this.
UI.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fw._Mark.call(this,D);if((B=this.
Aie)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajo
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaS)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaY={H8:null,Gp:null
,Bk:function(aSize){C.IC.Bk.call(this,aSize);this.H8.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gp.H([this.H8.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IC.Ai.call(this,Ae);this.H8.L(this.V.AQ);this.Gp.L(this.V.AQ);},_Init:
function(aArg){C.IC._Init.call(this,aArg);A.acg.Text._Init.call(this.H8={I:this}
,0);A.acg.Text._Init.call(this.Gp={I:this},0);this.__proto__=C.AaY;this.T(A.aaR(
A.acf.AG_));this.H8.H(Bsi);this.H8.KS(true);this.H8.R(A.aaR(A.acf.Aqx));this.H8.
L(A.jb.Text);this.Gp.H(Bai);this.Gp.R(Aah);this.Gp.L(A.jb.Text);this.J(this.H8,0
);this.J(this.Gp,0);this.V.S(A.aaL(A.fl.Ii));this.H8.S(A.aaL(A.fl.Ii));this.Gp.S(
A.aaL(A.fl.Kl));},_Done:function(){this.__proto__=C.IC;this.H8._Done();this.Gp._Done(
);C.IC._Done.call(this);},_ReInit:function(){C.IC._ReInit.call(this);this.H8._ReInit(
);this.Gp._ReInit();this.T(A.aaR(A.acf.AG_));this.H8.R(A.aaR(A.acf.Aqx));this.V.
S(A.aaL(A.fl.Ii));this.H8.S(A.aaL(A.fl.Ii));this.Gp.S(A.aaL(A.fl.Kl));},_Mark:function(
D){var B;C.IC._Mark.call(this,D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pi={AP:null,A_:null,PV:null,H8:null,Gp:null,A$O:A.jV,Aqx:0,A_H:0,Bk:function(
aSize){C.IC.Bk.call(this,aSize);this.PV.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.PV.M[2]-1,0,this.PV.M[2]+1,aSize[1]]);this.H8.H([this.PV.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A_.H([this.H8.M[2]-1,0,this.H8.M[2]+1,aSize[
1]]);this.Gp.H([this.H8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IC.Ai.call(
this,Ae);this.PV.L(this.V.AQ);this.H8.L(this.V.AQ);this.Gp.L(this.V.AQ);},Bnp:function(
E){if(this.A$O===E)return;this.A$O=E;this.PV.R(E);},BlI:function(E){if(this.Aqx===
E)return;this.Aqx=E;this.H8.R(E.toFixed());},A_a:function(E){if(this.A_H===E)return;
this.A_H=E;this.Gp.R(E.toFixed()+Alb);},_Init:function(aArg){C.IC._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this
},0);A.acg.Text._Init.call(this.PV={I:this},0);A.acg.Text._Init.call(this.H8={I:
this},0);A.acg.Text._Init.call(this.Gp={I:this},0);this.__proto__=C.Pi;this.AP.L(
A.jb.Bc);this.A_.L(A.jb.Bc);this.PV.H(Bsj);this.PV.R(A.aaR(A.acf.AG_));this.PV.L(
A.jb.Text);this.H8.R(UW);this.H8.L(A.jb.Text);this.Gp.R(Bsk);this.Gp.L(A.jb.Text
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
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMx={AKO:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mo();A._GetAutoObject(A.Device.
Device).Am.Bl(Be);},_Init:function(aArg){C.Amu._Init.call(this,aArg);this.__proto__=
C.AMx;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARq={RX:null,
R3:null,RW:null,R0:null,Pk:null,RZ:null,ALj:function(G){A.pe([this,this.BCl],this
);A.pe([this,this.BB$],this);A.pe([this,this.BB7],this);A.pe([this,this.A4g],this
);A.pe([this,this.BCc],this);A.pe([this,this.BCa],this);},Ie:function(G){var Cx=(
C.QR.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.R3)A._GetAutoObject(C.A$
).Cg(20);else if(Cx===this.Pk)A._GetAutoObject(C.A$).Cg(14);else if(Cx===this.RX
)A._GetAutoObject(C.A$).Cg(12);else if(Cx===this.R0)A._GetAutoObject(C.A$).Cg(43
);else if(Cx===this.RW)A._GetAutoObject(C.A$).Cg(51);else if(Cx===this.RZ)A._GetAutoObject(
C.A$).Cg(61);},BB$:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Azl=A._NewObject(A.Device.BoolFilterCriterion,0);Azl.Initialize(9,0,true,true);Be.
CW(Azl);A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.Pk.Zw(A._GetAutoObject(
A.Device.Device).Am.Ca().toFixed());},BCl:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mo();var ABt=A._NewObject(A.Device.BoolFilterCriterion,0);ABt.Initialize(
12,0,true,true);Be.CW(ABt);A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.R3.Zw(
A._GetAutoObject(A.Device.Device).Am.Ca().toFixed());},BB7:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mo();var Ay3=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay3.Initialize(8,0,true,true);Be.CW(Ay3);A._GetAutoObject(A.Device.Device).Am.
Bl(Be);this.RX.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed());},A4g:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6s(A._GetAutoObject(A.Device.Device
).ABz);A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.RW.Zw(A._GetAutoObject(A.
Device.Device).Am.Ca().toFixed());},BCc:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6B();A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.R0.Zw(A._GetAutoObject(
A.Device.Device).Am.Ca().toFixed());},BCa:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACS();A._GetAutoObject(A.Device.Device).Am.Bl(Be);this.RZ.Zw(A._GetAutoObject(
A.Device.Device).Am.Ca().toFixed());},_Init:function(aArg){C.T5._Init.call(this,
aArg);C.QR._Init.call(this.RX={I:this},0);C.QR._Init.call(this.R3={I:this},0);C.
QR._Init.call(this.RW={I:this},0);C.QR._Init.call(this.R0={I:this},0);C.QR._Init.
call(this.Pk={I:this},0);C.QR._Init.call(this.RZ={I:this},0);this.__proto__=C.ARq;
this.RX.H(P3);this.RX.Aj(true);this.RX.T(A.aaR(A.acf.Alarm));this.RX.Ab4(true);this.
R3.H(AZW);this.R3.Aj(true);this.R3.T(A.aaR(A.acf.Asa));this.R3.Ab4(true);this.RW.
H(N_);this.RW.Aj(true);this.RW.T(A.aaR(A.acf.ActionList));this.RW.Ab4(true);this.
R0.H(P4);this.R0.Aj(true);this.R0.T(A.aaR(A.acf.AOE));this.R0.Ab4(true);this.Pk.
H(S4);this.Pk.Ar(false);this.Pk.Aj(false);this.Pk.Z(false);this.Pk.T(A.aaR(A.acf.
ACb));this.Pk.Ab4(true);this.RZ.H(UO);this.RZ.Aj(true);this.RZ.T(A.aaR(A.acf.A57
));this.RZ.Ab4(true);this.J(this.RX,-1);this.J(this.R3,-1);this.J(this.RW,-1);this.
J(this.R0,-1);this.J(this.Pk,-1);this.J(this.RZ,-1);this.RX.AR=[this,this.AcT];this.
RX.DB(A.aaL(A.ach.ADq));this.RX.Ab7(A.aaL(A.ach.NS));this.R3.AR=[this,this.AcT];
this.R3.DB(A.aaL(A.ach.AQN));this.R3.Ab7(A.aaL(A.ach.NS));this.RW.AR=[this,this.
AcT];this.RW.DB(A.aaL(A.ach.APK));this.RW.Ab7(A.aaL(A.ach.NS));this.R0.AR=[this,
this.AcT];this.R0.DB(A.aaL(A.ach.AQf));this.R0.Ab7(A.aaL(A.ach.NS));this.Pk.AR=[
this,this.AcT];this.Pk.DB(A.aaL(A.ach.ADq));this.Pk.Ab7(A.aaL(A.ach.NS));this.RZ.
AR=[this,this.AcT];this.RZ.DB(A.aaL(A.ach.AP7));this.RZ.Ab7(A.aaL(A.ach.NS));},_Done:
function(){this.__proto__=C.T5;this.RX._Done();this.R3._Done();this.RW._Done();this.
R0._Done();this.Pk._Done();this.RZ._Done();C.T5._Done.call(this);},_ReInit:function(
){C.T5._ReInit.call(this);this.RX._ReInit();this.R3._ReInit();this.RW._ReInit();
this.R0._ReInit();this.Pk._ReInit();this.RZ._ReInit();this.RX.T(A.aaR(A.acf.Alarm
));this.R3.T(A.aaR(A.acf.Asa));this.RW.T(A.aaR(A.acf.ActionList));this.R0.T(A.aaR(
A.acf.AOE));this.Pk.T(A.aaR(A.acf.ACb));this.RZ.T(A.aaR(A.acf.A57));},_Mark:function(
D){var B;C.T5._Mark.call(this,D);if((B=this.RX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARp={R4:null,VF:null,R1:null,RY:null,R2:null,ALj:function(G){A.pe([this,this.
BB8],this);A.pe([this,this.BCg],this);A.pe([this,this.BCh],this);A.pe([this,this.
BCm],this);A.pe([this,this.BCi],this);},Ie:function(G){var Cx=(C.QR.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.VF)A._GetAutoObject(C.A$).Cg(90);if(Cx===this.
RY)A._GetAutoObject(C.A$).Cg(74);if(Cx===this.R1)A._GetAutoObject(C.A$).Cg(71);if(
Cx===this.R2)A._GetAutoObject(C.A$).Cg(46);if(Cx===this.R4)A._GetAutoObject(C.A$
).Cg(85);},BCh:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACV();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.R2.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BCm:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6L();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.R4.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BCg:function(G){var Be=A._GetAutoObject(A.Device.Helper).A6G();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.R1.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BB8:function(G){var Be=A._GetAutoObject(A.Device.Helper).AOF();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.RY.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},BCi:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACX();A._GetAutoObject(
A.Device.Device).Am.Bl(Be);this.VF.Zw(A._GetAutoObject(A.Device.Device).Am.Ca().
toFixed());},_Init:function(aArg){C.T5._Init.call(this,aArg);C.QR._Init.call(this.
R4={I:this},0);C.QR._Init.call(this.VF={I:this},0);C.QR._Init.call(this.R1={I:this
},0);C.QR._Init.call(this.RY={I:this},0);C.QR._Init.call(this.R2={I:this},0);this.
__proto__=C.ARp;this.R4.H(Bsl);this.R4.Aj(true);this.R4.T(A.aaR(A.acf.A7I));this.
R4.Ab4(true);this.VF.H(Bsm);this.VF.Aj(true);this.VF.T(A.aaR(A.acf.AGa));this.R1.
H(Bsn);this.R1.Aj(true);this.R1.T(A.aaR(A.acf.A7K));this.R1.Ab4(true);this.RY.H(
Bso);this.RY.Aj(true);this.RY.T(A.aaR(A.acf.ABS));this.RY.Ab4(true);this.R2.H(Bsp
);this.R2.Aj(true);this.R2.T(A.aaR(A.acf.AR3));this.R2.Ab4(true);this.J(this.R4,-
1);this.J(this.VF,-1);this.J(this.R1,-1);this.J(this.RY,-1);this.J(this.R2,-1);this.
R4.AR=[this,this.AcT];this.R4.DB(A.aaL(A.ach.AQu));this.R4.Ab7(A.aaL(A.ach.NS));
this.VF.AR=[this,this.AcT];this.VF.DB(A.aaL(A.ach.ADI));this.R1.AR=[this,this.AcT
];this.R1.DB(A.aaL(A.ach.AQw));this.R1.Ab7(A.aaL(A.ach.NS));this.RY.AR=[this,this.
AcT];this.RY.DB(A.aaL(A.ach.AP2));this.RY.Ab7(A.aaL(A.ach.NS));this.R2.AR=[this,
this.AcT];this.R2.DB(A.aaL(A.ach.AQy));this.R2.Ab7(A.aaL(A.ach.NS));},_Done:function(
){this.__proto__=C.T5;this.R4._Done();this.VF._Done();this.R1._Done();this.RY._Done(
);this.R2._Done();C.T5._Done.call(this);},_ReInit:function(){C.T5._ReInit.call(this
);this.R4._ReInit();this.VF._ReInit();this.R1._ReInit();this.RY._ReInit();this.R2.
_ReInit();this.R4.T(A.aaR(A.acf.A7I));this.VF.T(A.aaR(A.acf.AGa));this.R1.T(A.aaR(
A.acf.A7K));this.RY.T(A.aaR(A.acf.ABS));this.R2.T(A.aaR(A.acf.AR3));},_Mark:function(
D){var B;C.T5._Mark.call(this,D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ListsIdManagementScreen"};C.AR1={Wv:function(
G){this.Agp();this.AL6();this.A4G(A.aaR(A.acf.A7m),[this,this.Bm7],131072);this.
A4G(A.aaR(A.acf.A7l),[this,this.Bm6],16384);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(
C.BH).MZ(A.aaR(A.acf.ARk)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Ds(6);},DE:function(G){},Abt:function(){return C.Amz;},Abu:function(){return C.Am0;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).A6G());},HO:function(G){var F;C.Tu.HO.call(this,G);if(this.Akh()===false
){if(!!this.FG&&((F=this.FG,F[1].call(F[0]))===16)){this.N.Cs(A.aaL(A.ach.AQG));
this.N.Ck=[this,this.A55];}else{this.N.Cs(A.aaL(A.ach.AQo));this.N.Ck=[this,this.
A52];}this.N.FJ(A.jV);}this.N.OO(false);this.N.OP(false);},Agb:function(){A._GetAutoObject(
C.A$).Cg(72);},Bm6:function(G){this.AGz(16384);},Bm7:function(G){this.AGz(131072
);},_Init:function(aArg){C.Tu._Init.call(this,aArg);this.__proto__=C.AR1;this.Dq(
C.APo);this.Dz(A.aaR(A.acf.A7O));this.AS_(A._GetAutoObject(C.Av3));},_ReInit:function(
){C.Tu._ReInit.call(this);this.Dz(A.aaR(A.acf.A7O));},_className:"Application::NoNaisIdListScreen"
};C.AR0={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AR0;this.
Mr.Ar(false);this.Mr.Aj(false);this.Mr.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APo={DY:function(G){C.Km.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdX(10));},_Init:function(aArg){C.Km._Init.call(this,aArg);this.__proto__=
C.APo;},_className:"Application::HeaderNoNaisIdListFilter"};C.Q4={Bfu:false,CP:function(
){A.pe([this,this.AyN],this);},DE:function(G){},CF:function(G){C.GU.CF.call(this
,G);if(this.Bfu&&(A._GetAutoObject(A.Device.Device).Ut>0))A.pe([this,this.AIF],this
);},Al0:function(G){this.A51(this);},Agb:function(){A._GetAutoObject(C.A$).Cg(73
);},AR9:function(G){throw new Error(Aoz);},BaC:function(s){this.AR9(s);},AR_:function(
G){throw new Error(Aoz);},BaD:function(s){this.AR_(s);},ASd:function(G){throw new
Error(Aoz);},AIF:function(s){this.ASd(s);},BeG:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7)){this.Bfu=true;A._GetAutoObject(
C.A$).Cg(76);}},Aga:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===5))A.z$([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);},XC:function(G){var B;if(A._GetAutoObject(A.Device.
Device).AhN===3){A._GetAutoObject(A.Device.Device).A9(74,false,A.jV,0,[this,this.
Aga]);A.z$([this,this.XC],[B=A._GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);A.pe([
this,this.AIF],this);}},AJB:function(){throw new Error(Aoz);},A75:function(G){A.
_GetAutoObject(A.Device.Device).Ds(0);this.A50(this);},BnA:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);this.BhU(this);},_Init:function(aArg){C.GU._Init.call(this
,aArg);this.__proto__=C.Q4;this.Dz(A.aaR(A.acf.A7V));},_ReInit:function(){C.GU._ReInit.
call(this);this.Dz(A.aaR(A.acf.A7V));this.CP();},_className:"Application::RegistrationsListScreen"
};C.AUi={_Init:function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AUi;},
_className:"Application::RegistrationsListFilterScreen"};C.Aes={_Init:function(aArg
){C.Yt._Init.call(this,aArg);this.__proto__=C.Aes;this.Text.H(Bsq);this.Text.R(A.
jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"};C.ABZ={
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
this.AX.CE(Ad,1);this.K9=this.AX.AOT(Ad,34);var AtO=this.AX.AOL(Ad,7);this.Ka=this.
AX.KN(Ad,26);var Ay_=this.AX.HF(Ad,4);var AfM=A._GetAutoObject(A.Device.Helper).
MN(Ay_,A._GetAutoObject(A.Device.Helper).Dv());this.IH.Aw(A._GetAutoObject(A.Device.
Converter).AmT(AtO));if(AfM<100)this.Gv.R((AfM.toFixed()+CQ)+A.aaR(A.acf.ALV));else
this.Gv.R(A._GetAutoObject(A.acj.KK).ACP(Ay_,A._GetAutoObject(A.Device.Helper).Dv(
),AIj));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A_={I:this},0);A.acg.AL._Init.
call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IH={I:this},0);A.acg.Text._Init.
call(this.SS={I:this},0);C.CH._Init.call(this.Gv={I:this},0);this.__proto__=C.ABZ;
this.AP.H(Aos);this.AP.L(A.jb.Bc);this.A_.H(Aot);this.A_.L(A.jb.Bc);this.Ea.H(AZX
);this.Ea.L(A.jb.Bc);this.IH.H(Bak);this.IH.L(A.jb.Text);this.SS.H(Ayr);this.Gv.
H(AZY);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.IH,0);this.
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
"Application::CalfListBirthRegistrationItem"};C.ADg={Aj3:null,Pw:null,I3:null,_Init:
function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj3={I:this},
0);A.acg.Ap._Init.call(this.Pw={I:this},0);A.acg.Ap._Init.call(this.I3={I:this},
0);this.__proto__=C.ADg;this.Aj3.H(Bsr);this.Aj3.L(A.jb.Text);this.Pw.H(Bss);this.
Pw.L(A.jb.Text);this.I3.H(Bab);this.I3.L(A.jb.Text);this.J(this.Aj3,0);this.J(this.
Pw,0);this.J(this.I3,0);this.Aj3.Aw(A.aaL(A.ach.ADE));this.Pw.Aw(A.aaL(A.ach.AvD
));this.I3.Aw(A.aaL(A.ach.Avy));},_Done:function(){this.__proto__=C.Dc;this.Aj3.
_Done();this.Pw._Done();this.I3._Done();C.Dc._Done.call(this);},_ReInit:function(
){C.Dc._ReInit.call(this);this.Aj3._ReInit();this.Pw._ReInit();this.I3._ReInit();
},_Mark:function(D){var B;C.Dc._Mark.call(this,D);if((B=this.Aj3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I3)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.APq={IO:null
,AgT:null,HP:null,Bc:null,My:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2,Init:function(
aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.A8T,B.A_e
],0);A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.Wt,B.JQ],0);A.
zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.Ary,B.SA],0);A.zV([this
,this.DY],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.DY],this);},De:
function(E){C.BS.De.call(this,E);this.IO.L(E);this.AgT.L(E);this.HP.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HP.R(A.aaR(A.
acf.Ae$));else this.HP.R(((A.aaR(A.acf.GJ)+A.aaR(A.acf.Colon))+CQ)+E.toFixed());
},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqX()){this.AwY(((A._GetAutoObject(
A.Device.Helper).W.CL+1).toFixed()+A$Z)+A._GetAutoObject(A.Device.Device).Am.Ca(
).toFixed());this.JQ(A._GetAutoObject(A.Device.Helper).W.Gender);this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.VisualId);this.Ng(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts);}else{this.AwY(A$0);this.JQ(2);this.OnSetAnimalId(-1);this.
Ng(0);}},JQ:function(E){if(this.Gender===E)return;this.Gender=E;this.AgT.Aw(A._GetAutoObject(
A.Device.Converter).AmT(E));},AwY:function(E){if(this.My===E)return;this.My=E;this.
IO.R(E);},Ng:function(E){if(this.WhereAbouts===E)return;this.WhereAbouts=E;if(A.
_GetAutoObject(A.Device.Helper).Aj6(E))this.HP.Z(false);else this.HP.Z(true);},_Init:
function(aArg){C.BS._Init.call(this,aArg);A.acg.Text._Init.call(this.IO={I:this}
,0);A.acg.Ap._Init.call(this.AgT={I:this},0);A.acg.Text._Init.call(this.HP={I:this
},0);A.acg.C5._Init.call(this.Bc={I:this},0);this.__proto__=C.APq;this.IO.H(A$1);
this.IO.Hh(2);this.IO.KS(true);this.IO.A6(0x12);this.IO.R(A$2);this.AgT.H(Bst);this.
HP.H(Bsu);this.HP.A6(0x11);this.HP.R(A.aaR(A.acf.Ae$));this.Bc.DC(Ayx);this.Bc.DL(
Ayy);this.Bc.L(A.jb.Bc);this.J(this.IO,0);this.J(this.AgT,0);this.J(this.HP,0);this.
J(this.Bc,0);this.IO.S(A.aaL(A.fl.Ak));this.AgT.Aw(A._GetAutoObject(A.Device.Converter
).AmT(2));this.HP.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BS;this.IO._Done();this.AgT._Done();this.HP._Done();this.Bc._Done();C.BS._Done.
call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.IO._ReInit();this.AgT.
_ReInit();this.HP._ReInit();this.Bc._ReInit();this.HP.R(A.aaR(A.acf.Ae$));this.IO.
S(A.aaL(A.fl.Ak));this.HP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.
call(this,D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderRegistrationInfo"
};C.Aa1={EaseOfDeliveryToString:null,AgK:null,Ce:function(G){C.NE.Ce.call(this,G
);var AJV=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;this.Ks(this.EaseOfDeliveryToString.
Lt(AJV));this.GX.R(this.AgK.Aei(AJV).toFixed());},De:function(E){C.NE.De.call(this
,E);this.GX.L(E);},_Init:function(aArg){C.NE._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgK._Init.call(this.
AgK={I:this},0);this.__proto__=C.Aa1;this.T(A.aaR(A.acf.AgC));},_Done:function(){
this.__proto__=C.NE;this.EaseOfDeliveryToString._Done();this.AgK._Done();C.NE._Done.
call(this);},_ReInit:function(){C.NE._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgK._ReInit();this.T(A.aaR(A.acf.AgC));},_Mark:function(D){var B;
C.NE._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XU={WhereAboutsToString:null,KY:null,Ce:function(G){C.NE.Ce.call(this,G);var
K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Ks(this.WhereAboutsToString.
Lt(K9));this.GX.R(this.KY.Aei(K9).toFixed());},De:function(E){C.NE.De.call(this,
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
Bsv);}},GE:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.IZ.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ce(this
);}X=X.Ah;}},AfC:function(s){this.GE(s);},MO:function(G){var B;this.Y.Vt(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BN._Init.call(this.Cr={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.RT;this.Cr.Filter=147;this.Y.H(UU);this.Y.JP(1);this.Ay.H(AsS
);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BO=[this,this.DE];this.Cr.D1=[this,
this.DE];this.Y.El=[this,this.Fe];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cr._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XV={AaV:null,
XR:null,AaW:null,XS:null,Aa1:null,XU:null,_Init:function(aArg){C.RT._Init.call(this
,aArg);C.AaV._Init.call(this.AaV={I:this},0);C.XR._Init.call(this.XR={I:this},0);
C.AaW._Init.call(this.AaW={I:this},0);C.XS._Init.call(this.XS={I:this},0);C.Aa1.
_Init.call(this.Aa1={I:this},0);C.XU._Init.call(this.XU={I:this},0);this.__proto__=
C.XV;this.AaV.H(BF);this.AaV.Aj(true);this.XR.H(IR);this.XR.Aj(true);this.XR.Bg(
true);this.AaW.H(P7);this.AaW.Aj(true);this.XS.H(Aaf);this.XS.Aj(true);this.XS.Bg(
true);this.Aa1.H(Alg);this.Aa1.Aj(true);this.XU.H(Aor);this.XU.Aj(true);this.XU.
Bg(true);this.J(this.AaV,0);this.J(this.XR,0);this.J(this.AaW,0);this.J(this.XS,
0);this.J(this.Aa1,0);this.J(this.XU,0);},_Done:function(){this.__proto__=C.RT;this.
AaV._Done();this.XR._Done();this.AaW._Done();this.XS._Done();this.Aa1._Done();this.
XU._Done();C.RT._Done.call(this);},_ReInit:function(){C.RT._ReInit.call(this);this.
AaV._ReInit();this.XR._ReInit();this.AaW._ReInit();this.XS._ReInit();this.Aa1._ReInit(
);this.XU._ReInit();},_Mark:function(D){var B;C.RT._Mark.call(this,D);if((B=this.
AaV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XS={
BreedToString:null,GX:null,M1:null,Ce:function(G){C.IB.Ce.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BI(Bv));this.GX.
R(this.M1.Aei(Bv).toFixed());},De:function(E){C.IB.De.call(this,E);this.GX.L(E);
},_Init:function(aArg){C.IB._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.GX={I:this},0);A.Device.
M1._Init.call(this.M1={I:this},0);this.__proto__=C.XS;this.BT.H(Bsw);this.GX.H(Bsx
);this.GX.Hh(5);this.GX.A6(0x14);this.GX.R(Bsy);this.GX.L(A.jb.Text);this.J(this.
GX,0);this.Hs.Aw(A.aaL(A.ach.ADv));this.GX.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IB;this.BreedToString._Done();this.GX._Done();this.M1._Done();C.
IB._Done.call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.BreedToString.
_ReInit();this.GX._ReInit();this.M1._ReInit();this.GX.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IB._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M1)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaW={
Ce:function(G){C.IB.Ce.call(this,G);var AAh=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAh>0)this.T(A._GetAutoObject(A.Device.Converter).Rf(AAh));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IB._Init.call(this,aArg);this.__proto__=
C.AaW;this.Hs.Aw(A.aaL(A.ach.AP8));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XR={Yy:null,Ce:function(G){C.IB.Ce.call(this,G);var Td=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfR=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Td>
0)this.T(A._GetAutoObject(A.acj.KK).AjM(Td));else this.T(A.aaR(A.acf.Unknown));var
Aza=A.aaL(A.aci.TJ);switch(AfR){case 0:Aza=A.aaL(A.ach.ADs);break;case 1:{Aza=A.
aaL(A.ach.Avz);this.Yy.Cv(0);}break;case 2:{Aza=A.aaL(A.ach.Avz);this.Yy.Cv(1);}
break;case 3:{Aza=A.aaL(A.ach.Avz);this.Yy.Cv(2);}break;default:A.ab5("%s%e",Bsz
,AfR);}this.Yy.Aw(Aza);},_Init:function(aArg){C.IB._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Yy={I:this},0);this.__proto__=C.XR;this.BT.H(BsA);this.Yy.H(AHO);
this.Yy.L(A.jb.Text);this.J(this.Yy,0);this.Hs.Aw(A.aaL(A.ach.Avy));this.Yy.Aw(A.
aaL(A.ach.ADs));},_Done:function(){this.__proto__=C.IB;this.Yy._Done();C.IB._Done.
call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.Yy._ReInit();},_Mark:
function(D){var B;C.IB._Mark.call(this,D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaV={Ka:0,XT:null,K9:0
,Bk:function(aSize){C.IB.Bk.call(this,aSize);this.XT.H(this.Hs.M);},Ai:function(
Ae){C.IB.Ai.call(this,Ae);this.XT.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj6(this.K9)){this.T(A.aaR(A.acf.AnimalLoss));this.Hs.Z(false);this.XT.Z(true);
}else if(this.Ka>0){this.T(A._GetAutoObject(A.Device.Converter).Rf(this.Ka));this.
Hs.Z(true);this.XT.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hs.Z(true);this.
XT.Z(false);}},Ce:function(G){C.IB.Ce.call(this,G);this.Ka=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K9=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.An(
);},_Init:function(aArg){C.IB._Init.call(this,aArg);A.acg.Text._Init.call(this.XT={
I:this},0);this.__proto__=C.AaV;this.XT.R(Baj);this.J(this.XT,0);this.Hs.Aw(A.aaL(
A.ach.AvD));this.XT.S(A.aaL(A.fl.Hr));},_Done:function(){this.__proto__=C.IB;this.
XT._Done();C.IB._Done.call(this);},_ReInit:function(){C.IB._ReInit.call(this);this.
XT._ReInit();},_Mark:function(D){var B;C.IB._Mark.call(this,D);if((B=this.XT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMu={XV:null,Init:function(aArg){var B;A.zX([this,this.AAz],[B=A._GetAutoObject(
A.Device.Device),B.AEt,B.AIJ],0);A.pe([this,this.AAz],this);},DE:function(G){var
D5=(A.Core.BN.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Om(this);break;
case 7:this.MU(this);break;default:D5.NH=true;}},CF:function(G){var B;this.XV.CF(
this);C.AB.CF.call(this,G);},E3:function(G){var B;this.XV.E3(this);C.AB.E3.call(
this,G);},Anp:function(G){A._GetAutoObject(C.A$).Fv();},XB:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MU:function(G){if(A._GetAutoObject(A.Device.
Device).Am.Ca()<=1)return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;
if(LC>=A._GetAutoObject(A.Device.Device).Am.Ca())LC=0;A._GetAutoObject(A.Device.
Helper).HL(LC);},Om:function(G){if(A._GetAutoObject(A.Device.Device).Am.Ca()<=1)
return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(
A.Device.Device).Am.Ca()-1;A._GetAutoObject(A.Device.Helper).HL(LC);},AAz:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqq)A._GetAutoObject(C.A$).Ahp(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XV._Init.call(this.XV={I:this},0);this.
__proto__=C.AMu;this.Background.H(Cc);this.N.Z(true);this.N.OO(true);this.N.OP(true
);this.Dq(C.APq);this.XV.H(E$);this.J(this.XV,0);this.N.CB=[this,this.Anp];this.
N.Ck=[this,this.XB];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbD));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XV._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XV._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IB={Hs:null,BT:null
,T:function(E){C.IZ.T.call(this,E);this.BT.R(this.DK);},De:function(E){C.IZ.De.call(
this,E);this.Hs.L(E);this.BT.L(E);},_Init:function(aArg){C.IZ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hs={I:this},0);C.CH._Init.call(this.BT={I:this},0);this.
__proto__=C.IB;this.Hs.H(BsB);this.Hs.L(A.jb.Text);this.BT.H(BsC);this.BT.A6(0x11
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
An();},De:function(E){if(this.KT===E)return;this.KT=E;},_Init:function(aArg){C.Hc.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.IZ;this.H(BF);this.Background.H(AIl);this.KT=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hc;this.Background._Done(
);C.Hc._Done.call(this);},_ReInit:function(){C.Hc._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hc._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NE={GX:null,BAT:function(G){this.BT.H(A.abN(this.BT.M,this.GX.M[0]));},_Init:
function(aArg){C.Fu._Init.call(this,aArg);A.acg.Text._Init.call(this.GX={I:this}
,0);this.__proto__=C.NE;this.GX.AZ(0xA);this.GX.H(BsD);this.GX.Hh(5);this.GX.I7(
true);this.GX.A6(0x14);this.GX.R(A.jV);this.GX.L(A.jb.Text);this.J(this.GX,0);this.
GX.Q1([this,this.BAT]);this.GX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fu;this.GX._Done();C.Fu._Done.call(this);},_ReInit:function(){C.Fu._ReInit.call(
this);this.GX._ReInit();this.GX.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fu.
_Mark.call(this,D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axh={AQ2:null,_Init:function(aArg){C.Zz._Init.call(this,aArg);this.__proto__=
C.Axh;},_Mark:function(D){var B;C.Zz._Mark.call(this,D);if((B=this.AQ2)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANB={Ws:null,WO:0,AwJ:function(E){C.AmF.AwJ.call(this,E);if(E)this.Pm.R(BsE);
else this.Pm.R(Bal);},BmW:function(E){if(A.aaZ(this.Ws,E))return;if(!!this.Ws)A.
z$([this,this.A3c],this.Ws,0);this.Ws=E;if(!!E)A.zX([this,this.A3c],E,0);if(!!E)
A.pe([this,this.A3c],this);},AFI:function(E){var F;if(this.WO===E)return;this.WO=
E;this.AwJ(!!this.Ws&&((F=this.Ws,F[1].call(F[0]))===E));},A3c:function(G){var F;
this.AwJ(!!this.Ws&&((F=this.Ws,F[1].call(F[0]))===this.WO));},_Init:function(aArg
){C.AmF._Init.call(this,aArg);this.__proto__=C.ANB;this.Pm.R(Bal);this.Pm.S(A.aaL(
A.fl.Hr));},_Mark:function(D){var B;C.AmF._Mark.call(this,D);if((B=this.Ws)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axj={Ws:null,WO:0,_Init:function(aArg){C.Zz._Init.call(this,aArg);this.__proto__=
C.Axj;},_Mark:function(D){var B;C.Zz._Mark.call(this,D);if((B=this.Ws)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATX={GL:null,_Init:function(aArg){C.Cd._Init.call(this,aArg);C.Q9._Init.call(
this.GL={I:this},0);this.__proto__=C.ATX;var B;this.I8(A.aaR(A.acf.ACF));this.GL.
H(AhV);this.GL.Aj(true);this.GL.Z(true);this.GL.T(A.aaR(A.acf.AF_));this.GL.Ar0(
false);this.GL.A_b(true);this.J(this.GL,0);this.GL.AeT([B=this.GL,B.FQ]);this.GL.
Gn([this,this.D_,this.GN]);this.GL.Akz(A.aaL(A.ach.Edit));this.GL.As([B=A._GetAutoObject(
A.Device.Device),B.ASz,B.AZ$]);},_Done:function(){this.__proto__=C.Cd;this.GL._Done(
);C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.GL._ReInit(
);this.I8(A.aaR(A.acf.ACF));this.GL.T(A.aaR(A.acf.AF_));},_Mark:function(D){var B;
C.Cd._Mark.call(this,D);if((B=this.GL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATV={GF:0,C7:null,AW:null,Kn:null,E7:null
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
)+Ax9)+this.GermanStateToString.Lt(A._GetAutoObject(A.Device.Converter).ACQ(this.
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
2)|0);this.Lo(A._GetAutoObject(A.Device.Converter).ZZ(E));this.L9=false;if(!!this.
AM){this.Kn.Kq(2);this.AW.Kq(10);}else{this.Kn.Kq(0);this.AW.Kq(0);}this.An();},
FQ:function(G){var F;if(!this.AM){var BR=this.AM;this.By(A._GetAutoObject(A.Device.
Helper).AC1());if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ew(2);}else this.Ew(this.RD);},AjN:function(){return this.GF;
},AjP:function(){return 9999999999;},Lo:function(E){if(this.K$===E)return;this.K$=
E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.Sw,this.Lo],0);}
,Sx:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false)A.pe([this,this.
Vj],this);A.abo([this,this.Ab0,this.Sx],0);},Vj:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abl(this.Pt,2,10))+
A.abm(this.GF,10,10);var BR=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BR
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahk:function(
E){if(this.Pt===E)return;this.Pt=E;if(this.L9===false)A.pe([this,this.Vj],this);
A.abo([this,this.Ans,this.Ahk],0);},Sw:function(){return this.K$;},Ab0:function(
){return this.GF;},Ans:function(){return this.Pt;},_Init:function(aArg){C.Ek._Init.
call(this,aArg);C.C7._Init.call(this.C7={I:this},0);C.AQW._Init.call(this.AW={I:
this},0);C.AvN._Init.call(this.Kn={I:this},0);C.AsF._Init.call(this.E7={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATV;var B;this.RD=3;this.AW.H(BsF);this.Kn.H(BsG);this.Kn.EV(16);this.E7.H(Bam
);this.J(this.AW,0);this.J(this.Kn,0);this.J(this.E7,0);this.C7.AEZ([this,this.Sw
,this.Lo]);this.AW.As([this,this.Ab0,this.Sx]);this.Kn.As([this,this.Ans,this.Ahk
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
};C.AQW={NK:null,NJ:null,ET:null,FV:null,Eo:null,Dx:null,CU:null,Ct:null,FI:function(
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
},0);this.__proto__=C.AQW;this.H(BsH);this.GW.H(AIA);this.NK.H(Ayz);this.NJ.H(AZK
);this.ET.H(AZL);this.FV.H(AZM);this.Eo.H(AZN);this.Dx.H(AZO);this.CU.H(AZP);this.
Ct.H(A$8);this.FW.H(AZQ);this.EN.H(AZQ);this.J(this.NK,-2);this.J(this.NJ,-2);this.
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
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATW={
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
A._GetAutoObject(A.Device.Converter).ZZ(E));this.L9=false;if(!!this.AM)this.AW.Kq(
12);else this.AW.Kq(0);this.An();},FQ:function(G){var F;if(!this.AM){var BR=this.
AM;this.By(A._GetAutoObject(A.Device.Helper).AC1());if(this.AM!==BR){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ew(this.RD);},AjN:function(
){return this.GF;},AjP:function(){return 999999999999;},Lo:function(E){if(this.K$===
E)return;this.K$=E;if(this.L9===false)A.pe([this,this.Vj],this);A.abo([this,this.
Sw,this.Lo],0);},Sx:function(E){if(this.GF===E)return;this.GF=E;if(this.L9===false
)A.pe([this,this.Vj],this);A.abo([this,this.Ab0,this.Sx],0);},Vj:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.K$),3,10)+A.abm(
this.GF,12,10);var BR=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BR){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Sw:function(){return this.
K$;},Ab0:function(){return this.GF;},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.C7._Init.call(this.C7={I:this},0);C.ADK._Init.call(this.AW={I:this},0);C.AsF.
_Init.call(this.E7={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATW;var B;this.RD=2;this.AW.H(BsI);this.E7.H(Bam);this.
J(this.AW,0);this.J(this.E7,0);this.C7.AEZ([this,this.Sw,this.Lo]);this.AW.As([this
,this.Ab0,this.Sx]);this.E7.CI(this.C7);this.E7.As([B=this.C7,B.B7,B.B8]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ek;this.C7._Done();this.AW._Done();this.
E7._Done();this.CountryToString._Done();C.Ek._Done.call(this);},_ReInit:function(
){C.Ek._ReInit.call(this);this.C7._ReInit();this.AW._ReInit();this.E7._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ek._Mark.call(this,D);
if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DZ:null,Y:null,Ay:null,X$:null,Ya:null,X_:null,X8:null,X9:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},CF:function(G){C.AB.CF.call(this,G);A._GetAutoObject(A.
Device.Device).Am.Bl(null);A._GetAutoObject(A.Device.Device).Bt.Bl(null);A._GetAutoObject(
A.Device.Helper).AkO();A._GetAutoObject(A.Device.Helper).Asn();},Ie:function(G){
var Cx=(C.Fi.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.X$)A._GetAutoObject(
C.A$).Cg(28);else if(Cx===this.Ya)A._GetAutoObject(C.A$).Cg(26);else if(Cx===this.
X_)A._GetAutoObject(C.A$).Cg(54);else if(Cx===this.X8)A._GetAutoObject(C.A$).Cg(
27);else if(Cx===this.X9)A._GetAutoObject(C.A$).Cg(78);},A3g:function(G){A._GetAutoObject(
C.A$).Fv();},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.
Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fi._Init.call(this.X$={I:this
},0);C.Fi._Init.call(this.Ya={I:this},0);C.Fi._Init.call(this.X_={I:this},0);C.Fi.
_Init.call(this.X8={I:this},0);C.Fi._Init.call(this.X9={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CV(A.jV);this.Ej.Ar(false
);this.Dq(C.AqZ);this.DZ.AZ(0x3F);this.DZ.H(E$);this.DZ.L(A.jb.CK);this.Y.H(E$);
this.Y.JP(9);this.Ay.H(Iq);this.X$.H(P3);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.
A7G));this.Ya.H(AZW);this.Ya.Aj(true);this.Ya.T(A.aaR(A.acf.NewAnimals));this.X_.
H(N_);this.X_.Aj(true);this.X_.T(A.aaR(A.acf.Calving));this.X8.H(P4);this.X8.Aj(
true);this.X8.T(A.aaR(A.acf.ABX));this.X9.H(MF);this.X9.Aj(true);this.X9.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
X$,0);this.J(this.Ya,0);this.J(this.X_,0);this.J(this.X8,0);this.J(this.X9,0);this.
N.CB=[this,this.A3g];this.N.CY(A.aaL(A.ach.E2));this.Y.El=[this,this.Fe];this.X$.
AR=[this,this.Ie];this.X$.DB(A.aaL(A.ach.ADF));this.Ya.AR=[this,this.Ie];this.Ya.
DB(A.aaL(A.ach.AvH));this.X_.AR=[this,this.Ie];this.X_.DB(A.aaL(A.ach.AP1));this.
X8.AR=[this,this.Ie];this.X8.DB(A.aaL(A.ach.APY));this.X9.AR=[this,this.Ie];this.
X9.DB(A.aaL(A.ach.APR));},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.
Y._Done();this.Ay._Done();this.X$._Done();this.Ya._Done();this.X_._Done();this.X8.
_Done();this.X9._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit();this.X$._ReInit(
);this.Ya._ReInit();this.X_._ReInit();this.X8._ReInit();this.X9._ReInit();this.X$.
T(A.aaR(A.acf.A7G));this.Ya.T(A.aaR(A.acf.NewAnimals));this.X_.T(A.aaR(A.acf.Calving
));this.X8.T(A.aaR(A.acf.ABX));this.X9.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARR={K4:null,EaseOfDelivery:null,BirthType:null,AcL:null
,Lk:null,Cn:null,G1:null,Li:null,AzL:true,Init:function(aArg){this.Bb(this.C$);A.
pe([this,this.GE],this);},Ev:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.Hi();A._GetAutoObject(C.A$).Fv();if(!!this.K4)this.K4.Ev(this);},Af$:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EB((F=this.BZ.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwK(true);if(!!this.K4)this.K4.Af$(this
);if(A._GetAutoObject(A.Device.Device).Am.Lh())A._GetAutoObject(A.Device.Helper).
AKg(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApG]);else{this.AiZ();A.
pe([this,this.Ap5],this);}},Aug:function(){this.N.CV(A.jV);this.N.C6(A.aaL(A.ach.
ADJ));this.N.Cl=[this,this.AyQ];},CF:function(G){var B;C.HY.CF.call(this,G);if(A.
_GetAutoObject(A.Device.Device).Am.Lh()){A._GetAutoObject(A.Device.Device).A9(41
,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),0,null);this.Ev(this);
}else if(this.AzL){this.AzL=false;A.pe([this,this.A3v],this);}else if(!this.K4){
this.K4=A._NewObject(C.ARS,0);this.K4.A9I([this,this.AAW]);A._GetAutoObject(A.Device.
Helper).W.Gm();A._GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Ng(this.AsQ.Aei(6));this.K4.LO(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ev(this);}},AiZ:function(
){A._GetAutoObject(A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);var
L6=A._GetAutoObject(A.Device.Device).Am.Lc(0,A._GetAutoObject(A.Device.Helper).W.
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
switch(At.Id){case 41:break;default:A.ab5("%s%e",As7,At.Id);}},AAW:function(G){this.
LO(this);this.AeV(A._GetAutoObject(A.Device.Helper).Abr(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JD(this.C$);},ApH:function(G){var F;C.HY.ApH.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnZ));},A3v:function(G){A._GetAutoObject(
C.A$).Cg(79);},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcL._Init.call(this.AcL={I:this},0);C.Q9._Init.call(this.Lk={I:this
},0);C.SL._Init.call(this.Cn={I:this},0);C.BW._Init.call(this.G1={I:this},0);C.BW.
_Init.call(this.Li={I:this},0);this.__proto__=C.ARR;var B;this.Dq(C.APn);this.Lk.
H(AhV);this.Lk.Aj(true);this.Lk.T(A.aaR(A.acf.ACl));this.CG.H(AcR);this.Cn.H(AcR
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.AFz(true);this.G1.H(AcR);
this.G1.Aj(true);this.G1.T(A.aaR(A.acf.Arn));this.Li.H(AcR);this.Li.Aj(true);this.
Li.T(A.aaR(A.acf.AgC));this.J(this.Lk,-5);this.J(this.Cn,-3);this.J(this.G1,-1);
this.J(this.Li,-1);this.EaseOfDelivery.LY(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LY(A._GetAutoObject(A.Device.Helper).W);this.AcL.LY(A._GetAutoObject(A.
Device.Helper).W);this.Lk.Gn([this,this.D_,this.GN]);this.Lk.As([B=A._GetAutoObject(
A.Device.Helper).W,B.ASv,B.AnG]);this.Cn.Gn([this,this.D_,this.GN]);this.Cn.LX([
B=this.Cn,B.FQ]);this.Cn.L0(A.aaL(A.ach.Edit));this.Cn.Ab9([B=A._GetAutoObject(A.
Device.Helper).W,B.Av_,B.Q0]);this.Gi.As([B=this.AcL,B.B7,B.B8]);this.Gi.CI(this.
AcL);this.G1.As([B=this.BirthType,B.B7,B.B8]);this.G1.CI(this.BirthType);this.Li.
As([B=this.EaseOfDelivery,B.B7,B.B8]);this.Li.CI(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcL._Done();this.Lk._Done();this.Cn._Done();this.G1._Done();this.Li.
_Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcL._ReInit();this.Lk._ReInit(
);this.Cn._ReInit();this.G1._ReInit();this.Li._ReInit();this.Lk.T(A.aaR(A.acf.ACl
));this.Cn.T(A.aaR(A.acf.Aed));this.G1.T(A.aaR(A.acf.Arn));this.Li.T(A.aaR(A.acf.
AgC));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.K4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcL)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMw={Init:function(aArg){var B;A.zX([this,this.Bgs],[B=A._GetAutoObject(A.Device.
Device),B.AEA,B.AIO],0);A.pe([this,this.Bgs],this);},AKO:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbW){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACS();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOH();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mo();break;default:throw new Error(AZZ+A.
_GetAutoObject(A.Device.Device).AbW.toFixed());}A._GetAutoObject(A.Device.Device
).Am.Bl(Be);},Bgs:function(G){switch(A._GetAutoObject(A.Device.Device).AbW){case
0:this.Dz(A.aaR(A.acf.ARX));break;case 1:this.Dz(A.aaR(A.acf.BjY));break;case 2:
this.Dz(A.aaR(A.acf.Av2));break;default:A.ab5("%s",AZZ+A._GetAutoObject(A.Device.
Device).AbW.toFixed());}},_Init:function(aArg){C.Amu._Init.call(this,aArg);this.
__proto__=C.AMw;this.BmO(C.APD);this.Ej.Ab5(A._NewObject(C.APs,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ARS={AAh:0,Adi:null
,AuV:null,BdV:0,A3I:0,A2B:0,Init:function(aArg){this.BdV=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adi=A._GetAutoObject(A.Device.Device).Am.Filter;this.AAh=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2B=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LO:function(G){A._GetAutoObject(A.Device.Helper).W.AnG(this.AAh);A._GetAutoObject(
A.Device.Helper).W.Ae2(true);switch(this.A2B){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EB(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EB(2);break;default:
A.ab5("%s%e",AZH,this.A2B);}},Ev:function(G){A._GetAutoObject(A.Device.Device).Am.
Bl(this.Adi);if(!!this.A3I)this.Bgu();},Af$:function(G){A._GetAutoObject(A.Device.
Device).Am.Bl(null);},Bgu:function(){var AtV=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).Am.Lc(0,this.BdV);AtV.EM(Ad,A._GetAutoObject(
A.Device.Device).Am);AtV.Aww(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);AtV.
ArT(false);AtV.AwL(AtV.LactationNumber+1);AtV.Cq(A._GetAutoObject(A.Device.Device
).Am);},Ap5:function(G){this.A3I++;var Bx5=A._GetAutoObject(A.Device.Converter).
Bhe(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3I<Bx5)&&(A._GetAutoObject(
A.Device.Helper).Aj6(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A9(59,true,A.jV,0,[this,this.Ve]);else this.BcT(
this);},Ve:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&(At.PopupState===8))this.BcT(this);else if(!!At&&(At.PopupState===7))this.
AAW(this);},AAW:function(G){var B;var H$=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfR=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Td=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJV=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuV)(B=this.AuV
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EB(H$);A._GetAutoObject(
A.Device.Helper).W.Akv(AfR);A._GetAutoObject(A.Device.Helper).W.NY(Bv);A._GetAutoObject(
A.Device.Helper).W.Q0(Td);A._GetAutoObject(A.Device.Helper).W.Akx(AJV);},BcT:function(
G){this.Bgu();A._GetAutoObject(C.A$).Fv();A._GetAutoObject(A.Device.Device).Am.Bl(
this.Adi);},A9I:function(E){if(A.aa0(this.AuV,E))return;this.AuV=E;},_Init:function(
aArg){this.__proto__=C.ARS;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adi)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMM={Init:function(aArg){
var B;A.zX([this,this.Beg],[B=A._GetAutoObject(A.Device.Device),B.ASe,B.AZ0],0);
this.Beg(this);},Cq:function(){A.ab5("%s",BsJ);},EM:function(AcV){C.Vs.EM.call(this
,AcV);var O;for(O=16;O>0;O--)this.H_.Set(O,this.H_.Get(O-1));this.H_.Set(0,0);if(
this.CD<17)this.CD++;else A.ab5("%s",BsK);},ADO:function(ED){switch(ED){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Beg:
function(G){this.EM(A._GetAutoObject(A.Device.Device).Auz);A.we(this,0);},_Init:
function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.AMM;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuN={_Init:function(){C.
AMM._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JG={C5:null,V:null,A7z:true,T:function(E){C.IZ.T.call(this,E);this.
V.R(E);},De:function(E){C.IZ.De.call(this,E);this.V.L(E);},BmT:function(E){if(this.
A7z===E)return;this.A7z=E;this.C5.Z(E);},_Init:function(aArg){C.IZ._Init.call(this
,aArg);A.acg.C5._Init.call(this.C5={I:this},0);C.CH._Init.call(this.V={I:this},0
);this.__proto__=C.JG;this.C5.DC(BsL);this.C5.DL(BsM);this.C5.L(A.jb.Bc);this.V.
AZ(0x3F);this.V.H(BsN);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C5,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.IZ;this.C5._Done();this.V._Done();C.
IZ._Done.call(this);},_ReInit:function(){C.IZ._ReInit.call(this);this.C5._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kl));this.V.A2(A.aaL(A.fl.Ii));this.V.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.IZ._Mark.call(this,D);if((B=this.C5).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APs={AgP:null,Dd:null,Abp:null,Fh:null,E8:
null,Init:function(aArg){var B;A.zX([this,this.A4i],[B=A._GetAutoObject(A.Device.
Device),B.AEA,B.AIO],0);A.pe([this,this.A4i],this);},De:function(E){C.Yu.De.call(
this,E);this.Dd.L(E);},AEG:function(G){A.pe([this,this.A4i],this);},AAY:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).Fg();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DQ(1,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);A._GetAutoObject(
A.Device.Device).Am.Bl(Filter);}},C2:function(G){var B;var F;C.Yu.C2.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Dd.Aw(A.aaL(A.ach.AjV));return;}var ByM=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DQ(38,0)
)?B:null);var Bbw=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DQ(14,0))?B:null);if(!!ByM)this.Dd.Aw(A.aaL(A.ach.AC7));else if(
!!Bbw&&(Bbw.A4===1))this.Dd.Aw(A.aaL(A.ach.AP3));else this.Dd.Aw(A.aaL(A.ach.AjV
));},A4i:function(G){var F;var Filter=null;var AOv;switch(A._GetAutoObject(A.Device.
Device).AbW){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACS();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOH();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mo();break;default:throw new Error(AZZ+A._GetAutoObject(A.Device.
Device).AbW.toFixed());}var Ai3=this.Akp();if(Ai3>0){AOv=A._NewObject(A.Device.Int32FilterCriterion
,0);AOv.Initialize(1,4,Ai3,false);Filter.CW(AOv);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeW(false);},Om:function(G){if(!this.Akp())this.AW.AeW(true
);this.Bb(this.AW);this.An();},MU:function(G){this.AW.AeW(false);this.Bb(this.AgP
);this.An();},_Init:function(aArg){C.Yu._Init.call(this,aArg);C.Aq_._Init.call(this.
AgP={I:this},0);A.acg.Ap._Init.call(this.Dd={I:this},0);C.Abp._Init.call(this.Abp={
I:this},0);A.Core.BN._Init.call(this.Fh={I:this},0);A.Core.BN._Init.call(this.E8={
I:this},0);this.__proto__=C.APs;var B;this.H(BsO);this.AW.H(BsP);this.T1.H(BsQ);
this.Gr.Z(false);this.AgP.H(BsR);this.Dd.H(BsS);this.Abp.As(A._GetAutoObject(A.Device.
Device).AbW);this.Fh.Filter=6;this.E8.Filter=7;this.JV(this.A_,-1);this.J(this.AgP
,-1);this.J(this.Dd,-1);this.AgP.CI(this.Abp);this.AgP.As([B=this.Abp,B.B7,B.B8]
);this.Dd.Aw(A.aaL(A.ach.AjV));this.Fh.BO=[this,this.Om];this.E8.BO=[this,this.MU
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yu;this.AgP._Done();this.Dd.
_Done();this.Abp._Done();this.Fh._Done();this.E8._Done();C.Yu._Done.call(this);}
,_ReInit:function(){C.Yu._ReInit.call(this);this.AgP._ReInit();this.Dd._ReInit();
this.Abp._ReInit();this.Fh._ReInit();this.E8._ReInit();},_Mark:function(D){var B;
C.Yu._Mark.call(this,D);if((B=this.AgP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abp)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E8)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abp={AeQ:null
,Init:function(aArg){var B;A.zX([this,this.BdX],[B=A._GetAutoObject(A.Device.Device
),B.AEA,B.AIO],0);A.pe([this,this.BdX],this);},Do:function(){return 3;},As:function(
E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.Device).AwS(E);},ACR:function(
aIndex){if((aIndex<0)||(aIndex>=this.Do()))return null;return this.AeQ.AsG(aIndex
);},ACT:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return-1;return this.
AeQ.AsH(aIndex);},BdX:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbW;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeQ._Init.call(this.AeQ={I:this},0);this.__proto__=C.Abp;this.Cf.Set(0,
0);this.Cf.Set(1,1);this.Cf.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeQ._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeQ._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APD={Eq:null,IK:null,_Init:function(aArg){C.EA._Init.call(this,aArg);C.CH._Init.
call(this.Eq={I:this},0);A.acg.Text._Init.call(this.IK={I:this},0);this.__proto__=
C.APD;this.H(O3);this.Background.H(O3);this.Eq.H(Ayt);this.Eq.R(A.aaR(A.acf.A6S)
);this.Eq.A6(0x12);this.Eq.L(A.jb.Text);this.IK.AZ(0x3F);this.IK.H(AIm);this.IK.
Hh(5);this.IK.A6(0x14);this.IK.R(A.aaR(A.acf.AGN));this.IK.L(A.jb.Text);this.J(this.
Eq,0);this.J(this.IK,0);this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.Ii));this.
Eq.Cu(A.aaL(A.fl.Bh));this.IK.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EA;this.Eq._Done();this.IK._Done();C.EA._Done.call(this);},_ReInit:function(){
C.EA._ReInit.call(this);this.Eq._ReInit();this.IK._ReInit();this.Eq.R(A.aaR(A.acf.
A6S));this.IK.R(A.aaR(A.acf.AGN));this.Eq.S(A.aaL(A.fl.Af));this.Eq.A2(A.aaL(A.fl.
Ii));this.Eq.Cu(A.aaL(A.fl.Bh));this.IK.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EA._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={JY:null,Bf3:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.BeH(this);else A._GetAutoObject(A.Device.Device).A9(63,true,A.
jV,0,[this,this.Ve]);},BeH:function(G){A._GetAutoObject(C.A$).Fv();},Ve:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!At&&(At.Id===63)
)&&(At.PopupState===7))this.BeH(this);},_Init:function(aArg){C.Me._Init.call(this
,aArg);A.acg.Text._Init.call(this.JY={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dq(C.APr);this.Jc.H(BsT);this.Jc.AkF(2);this.AcA.Z(false);this.ARx=12;this.
Number.H(BsU);this.Number.R(A.aaR(A.acf.A_9));this.A4P=false;this.JY.H(BsV);this.
JY.Hh(5);this.JY.KS(true);this.JY.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABD));this.JY.L(A.jb.Text);this.JV(this.Jc,-1);this.JV(this.IP,-1);this.
JV(this.AcA,-1);this.J(this.JY,0);this.JY.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Me;this.JY._Done();C.Me._Done.call(this);},_ReInit:function(){C.Me._ReInit.
call(this);this.JY._ReInit();this.Number.R(A.aaR(A.acf.A_9));this.JY.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABD));this.JY.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Me._Mark.call(this,D);if((B=this.JY)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APr={_Init:function(aArg){C.AqY.
_Init.call(this,aArg);this.__proto__=C.APr;this.DS.EB(1);},_className:"Application::HeaderScannedCowId"
};C.Jc={AbN:null,AbM:null,AbL:null,QB:null,CountryToString:null,AsJ:0,CP:function(
){this.An();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QB.R(this.CountryToString.
Lt(A._GetAutoObject(A.Device.Converter).A7e(A._GetAutoObject(A.Device.Device).Language
))+BsW);},AkF:function(E){if(this.AsJ===E)return;this.AsJ=E;var bitmap=null;var A1J=
BsX;var A1I=null;var A1K=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aq9);break;case
1:{bitmap=A.aaL(A.ach.AQD);A1J=BsY;A1I=A.aaL(A.fl.Ak);A1K=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQE);A1J=BsZ;A1I=A.aaL(A.fl.Bh);A1K=true;}break;default:throw new Error(
Bs0+E.toFixed());}this.AbL.Aw(bitmap);this.AbM.Aw(bitmap);this.AbN.Aw(bitmap);this.
QB.H(A.abJ(this.QB.M,A1J));this.QB.S(A1I);this.QB.Z(A1K);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbN={I:this},0);A.acg.Ap._Init.call(this.AbM={I:this},0);A.acg.Ap._Init.
call(this.AbL={I:this},0);A.acg.Text._Init.call(this.QB={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jc;this.H(AID);this.
AbN.AZ(0x3);this.AbN.H(AID);this.AbN.L(A.jb.H6);this.AbN.Cv(2);this.AbM.AZ(0x3);
this.AbM.H(AID);this.AbM.L(A.jb.Ad_);this.AbM.Cv(1);this.AbL.AZ(0x3);this.AbL.H(
AID);this.AbL.L(A.jb.Text);this.AbL.Cv(0);this.QB.AZ(0x14);this.QB.H(Bs1);this.QB.
L(0xFF020202);this.QB.Z(false);this.J(this.AbN,0);this.J(this.AbM,0);this.J(this.
AbL,0);this.J(this.QB,0);this.AbN.Aw(A.aaL(A.ach.Aq9));this.AbM.Aw(A.aaL(A.ach.Aq9
));this.AbL.Aw(A.aaL(A.ach.Aq9));this.QB.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbN._Done();this.AbM._Done();this.AbL._Done();this.QB._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbN._ReInit();this.AbM._ReInit();this.AbL._ReInit(
);this.QB._ReInit();this.CountryToString._ReInit();this.QB.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsJ={Transponder:0,BFO:1,BFP:2};C.APn={Ap:null,De:function(E){C.BS.De.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BS._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APn;this.Ap.H(AZI);this.J(this.Ap,0);this.
Ap.Aw(A.aaL(A.ach.APe));},_Done:function(){this.__proto__=C.BS;this.Ap._Done();C.
BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
If:0,AaH:4,Al3:function(G){C.Q8.Al3.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bdt()){this.If=A._GetAutoObject(A.Device.Helper).Uw.Id;var Aiv=A._GetAutoObject(
A.Device.Helper).A7c(this.If,A._GetAutoObject(A.Device.Helper).W);if(Aiv){A._GetAutoObject(
A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter).Rf(this.If),0,[
this,this.Ve]);return;}Aiv=A._GetAutoObject(A.Device.Helper).Bjn(this.If,A._GetAutoObject(
A.Device.Helper).W);if(Aiv&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.If)){A._GetAutoObject(A.Device.Device).A9(25,true,A._GetAutoObject(A.Device.
Converter).Rf(this.If),0,[this,this.Ve]);return;}this.AaH=A._GetAutoObject(A.Device.
Helper).AQ9(this.If);switch(this.AaH){case 0:A._GetAutoObject(A.Device.Device).A9(
45,true,this.If.toFixed().length.toFixed(),0,[this,this.Ve]);break;case 1:case 2:{
var BP=A._GetAutoObject(A.Device.Converter).AxO(this.If);A._GetAutoObject(A.Device.
Device).A9(46,true,BP.toFixed(),0,[this,this.Ve]);}break;case 3:this.BfV();break;
default:throw new Error(AIa+this.AaH.toFixed());}}},Ev:function(G){A._GetAutoObject(
C.A$).Fv();},Ve:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!At)switch(At.PopupState){case 4:if(this.AaH===2)this.BfV();else A._GetAutoObject(
A.Device.Device).AhE();break;case 5:this.Ev(this);break;default:;}},BfV:function(
){A._GetAutoObject(A.Device.Helper).W.Ne(this.If);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.Q2(this.If);A._GetAutoObject(
A.Device.Helper).W.Cq(A._GetAutoObject(A.Device.Device).Am);A._GetAutoObject(A.Device.
Device).A9(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ev(this);},_Init:function(aArg){C.Q8._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dq(C.IG);this.Number.R(A.aaR(A.acf.A_2
));this.Jc.H(Bs2);this.IP.H(Bs3);this.AkF(1);this.N.CB=[this,this.Ev];this.N.CY(
A.aaL(A.ach.E2));},_ReInit:function(){C.Q8._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_2));},_className:"Application::SetSaveNaisIdScreen"};C.AN1={LO:function(
G){C.AqH.LO.call(this,G);A.pe([this,this.BBw],this);},BBw:function(G){this.JD(this.
Ef);},_Init:function(aArg){C.AqH._Init.call(this,aArg);this.__proto__=C.AN1;},_className:
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
};C.AcL={Do:function(){return 5;},_Init:function(aArg){C.UL._Init.call(this,aArg
);this.__proto__=C.AcL;this.Cf.Set(0,6);this.Cf.Set(1,7);this.Cf.Set(2,8);this.Cf.
Set(3,9);this.Cf.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdT={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bcd],[B=A._GetAutoObject(A.Device.
Device),B.ASf,B.AZ1],0);A.pe([this,this.Bcd],this);},Do:function(){return 2;},C4:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},FX:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;},As:function(E){
C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Awn(E);},Bcd:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Ags;A.abo([this,this.B7,this.B8],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdT;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGB={FF:null
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
Atf+this.A8.toFixed());}this.DJ(this);this.An();},By:function(E){if(this.AM===E)
return;this.AM=E;},Om:function(G){this.AA6(2);},MU:function(G){this.AA6(7);},AA6:
function(Gw){var B;var Azs=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azs){
var AAj=(A.Core.P.isPrototypeOf(B=this.QD(Azs,Gw,0x15))?B:null);if(!!AAj){this.Bb(
AAj);return true;}}return false;},AfY:function(G){var F;if(!this.Ez||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M9.Aw(
A._GetAutoObject(A.Device.Converter).AmT(2));break;case 1:this.M9.Aw(A._GetAutoObject(
A.Device.Converter).AmT((F=this.Ez,F[1].call(F[0]))));break;default:throw new Error(
Ban+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A31],this);},A31:function(G){var B;var F;if(!this.Ez||!this.EartagNrAssignmentMode
){this.Kj.AeY(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Ant,B.AoB]);this.Kj.
AeY([B=A._GetAutoObject(A.Device.Device),B.AEw,B.AIL]);}break;case 1:switch((F=this.
Ez,F[1].call(F[0]))){case 1:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Awb
,B.AyH]);this.Kj.AeY([B=A._GetAutoObject(A.Device.Device),B.ASl,B.AZ3]);}break;case
0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyI]);this.Kj.AeY([B=
A._GetAutoObject(A.Device.Device),B.ASm,B.AZ4]);}break;case 2:{this.AW.As([B=A._GetAutoObject(
A.Device.Device),B.Ant,B.AoB]);this.Kj.AeY([B=A._GetAutoObject(A.Device.Device),
B.AEw,B.AIL]);}break;default:throw new Error(Bs4+(F=this.Ez,F[1].call(F[0])).toFixed(
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
this.M9={I:this},0);this.__proto__=C.AGB;var B;this.H(UT);this.V.Ar(false);this.
V.R(As9);this.V.L(A.jb.Bm);this.Fh.Filter=6;this.E8.Filter=7;this.HC.H(Bs5);this.
AW.H(Bs6);this.M9.H(Bs7);this.J(this.HC,0);this.J(this.AW,0);this.J(this.M9,0);this.
FF=A._NewObject(C.Aer,0);this.Fh.BO=[this,this.Om];this.E8.BO=[this,this.MU];this.
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
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANQ={Wk:
null,Ze:null,Za:null,T8:null,Init:function(aArg){this.Bb(this.Wk);},AEo:function(
G){var BdT=(C.Anj.isPrototypeOf(G)?G:null);if(!!BdT)A._GetAutoObject(A.Device.Device
).A9(BdT.AdC,true,A.jV,0,null);},DE:function(G){if((this.Cr.CO===7)&&(this.AV===
this.T8))A._GetAutoObject(A.Device.Device).A9(10,true,A.jV,0,null);else if((this.
Cr.CO===6)&&(this.AV===this.T8))A._GetAutoObject(C.A$).Cg(91);C.Ei.DE.call(this,
G);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.Anj._Init.call(this.Wk={I:
this},0);C.Anj._Init.call(this.Ze={I:this},0);C.Anj._Init.call(this.Za={I:this},
0);C.Anj._Init.call(this.T8={I:this},0);this.__proto__=C.ANQ;this.Dq(C.AO4);this.
Wk.H(IR);this.Wk.Aj(true);this.Wk.T(A.aaR(A.acf.AhD));this.Wk.Bg(false);this.Wk.
AdC=79;this.Ze.H(P7);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.A$j));this.Ze.Bg(true
);this.Ze.AdC=77;this.Za.H(Aaf);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.A6N));this.
Za.Bg(false);this.Za.AdC=78;this.T8.H(Alg);this.T8.Aj(true);this.T8.T(A.aaR(A.acf.
About));this.T8.Bg(true);this.T8.AdC=3;this.J(this.Wk,-1);this.J(this.Ze,-1);this.
J(this.Za,-1);this.J(this.T8,-1);this.Wk.AR=[this,this.AEo];this.Ze.AR=[this,this.
AEo];this.Za.AR=[this,this.AEo];this.T8.AR=[this,this.AEo];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Wk._Done();this.Ze._Done();this.Za._Done();this.
T8._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.
Wk._ReInit();this.Ze._ReInit();this.Za._ReInit();this.T8._ReInit();this.Wk.T(A.aaR(
A.acf.AhD));this.Ze.T(A.aaR(A.acf.A$j));this.Za.T(A.aaR(A.acf.A6N));this.T8.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Wk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AO4={_Init:function(aArg){C.KO.
_Init.call(this,aArg);this.__proto__=C.AO4;this.Text.R(A.acf.Info);},_className:
"Application::HeaderDeviceInfoMenu"};C.ANO={FactoryResetScope:null,T$:null,Wi:null
,Ub:null,Init:function(aArg){this.Bb(this.T$);A.pe([this,this.MG],this);},Bj8:function(
G){switch(this.FactoryResetScope.C4(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(
A.Device.Device).A9(33,true,A.jV,0,[this,this.BfJ]);break;case 0:A._GetAutoObject(
A.Device.Device).A9(7,true,A.jV,0,[this,this.BfJ]);break;default:A.ab5("%s%i",Bs8
,this.FactoryResetScope.Q);}},BfJ:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))switch(At.Id){case 7:{A._GetAutoObject(A.
Device.Device).Bn9();A._GetAutoObject(A.Device.Device).A9(8,true,A.jV,0,null);A.
_GetAutoObject(C.A$).Cg(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bn8(
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
0);C.BW._Init.call(this.Ub={I:this},0);this.__proto__=C.ANO;var B;this.Dq(C.AO2);
this.T$.H(IR);this.T$.Aj(true);this.T$.T(A.aaR(A.acf.ACn));this.T$.Bg(false);this.
T$.Nf(93);this.Wi.H(P7);this.Wi.Aj(true);this.Wi.T(A.aaR(A.acf.XP));this.Wi.Bg(true
);this.Wi.Nf(92);this.Ub.H(Bao);this.Ub.Aj(true);this.Ub.Bls(true);this.Ub.T(A.aaR(
A.acf.A6f));this.Ub.Bg(false);this.J(this.T$,-1);this.J(this.Wi,-1);this.J(this.
Ub,-1);this.T$.AR=[B=this.T$,B.Ni];this.Wi.AR=[B=this.Wi,B.Ni];this.Ub.AR=[this,
this.Bj8];this.Ub.As([B=this.FactoryResetScope,B.B7,B.B8]);this.Ub.CI(this.FactoryResetScope
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.FactoryResetScope.
_Done();this.T$._Done();this.Wi._Done();this.Ub._Done();C.Ei._Done.call(this);},
_ReInit:function(){C.Ei._ReInit.call(this);this.FactoryResetScope._ReInit();this.
T$._ReInit();this.Wi._ReInit();this.Ub._ReInit();this.T$.T(A.aaR(A.acf.ACn));this.
Wi.T(A.aaR(A.acf.XP));this.Ub.T(A.aaR(A.acf.A6f));},_Mark:function(D){var B;C.Ei.
_Mark.call(this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ub)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AO2={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO2;this.
Text.R(A.aaR(A.acf.ACp));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ACp));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.Am0={QP:null,V$:null,_Init:function(aArg){C.TS._Init.call(this,aArg);C.CH._Init.
call(this.QP={I:this},0);C.CH._Init.call(this.V$={I:this},0);this.__proto__=C.Am0;
this.QP.H(Bs9);this.QP.R(A.aaR(A.acf.A$b));this.QP.A6(0x12);this.QP.L(A.jb.Text);
this.V$.H(Bai);this.V$.R(A.aaR(A.acf.An9));this.V$.L(A.jb.Text);this.J(this.QP,0
);this.J(this.V$,0);this.QP.S(A.aaL(A.fl.Af));this.QP.A2(A.aaL(A.fl.Ak));this.QP.
Cu(A.aaL(A.fl.Bh));this.V$.S(A.aaL(A.fl.Af));this.V$.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TS;this.QP._Done();this.V$._Done();C.TS._Done.call(this
);},_ReInit:function(){C.TS._ReInit.call(this);this.QP._ReInit();this.V$._ReInit(
);this.QP.R(A.aaR(A.acf.A$b));this.V$.R(A.aaR(A.acf.An9));this.QP.S(A.aaL(A.fl.Af
));this.QP.A2(A.aaL(A.fl.Ak));this.QP.Cu(A.aaL(A.fl.Bh));this.V$.S(A.aaL(A.fl.Af
));this.V$.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TS._Mark.call(this,D);
if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V$)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.APy={QQ:
null,_Init:function(aArg){C.TS._Init.call(this,aArg);C.CH._Init.call(this.QQ={I:
this},0);this.__proto__=C.APy;this.QQ.H(Bs_);this.QQ.R(A.aaR(A.acf.Ud));this.QQ.
A6(0x12);this.QQ.L(A.jb.Text);this.J(this.QQ,0);this.QQ.S(A.aaL(A.fl.Af));this.QQ.
A2(A.aaL(A.fl.Ak));this.QQ.Cu(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=
C.TS;this.QQ._Done();C.TS._Done.call(this);},_ReInit:function(){C.TS._ReInit.call(
this);this.QQ._ReInit();this.QQ.R(A.aaR(A.acf.Ud));this.QQ.S(A.aaL(A.fl.Af));this.
QQ.A2(A.aaL(A.fl.Ak));this.QQ.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TS.
_Mark.call(this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Amz={IH:null,AbC:null,Ea:null,Bk:function(aSize){C.M2.Bk.call(this,aSize);this.
IH.H([this.Gv.M[2],0,this.Gv.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([
this.IH.M[2]-1,0,this.IH.M[2]+1,aSize[1]]);this.AbC.H([this.IH.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M2.Ai.call(this,Ae);this.AbC.L(this.Gv.AQ);this.IH.L(this.
Gv.AQ);},Ce:function(Ad){C.M2.Ce.call(this,Ad);if(!this.AX)return;this.Hn=Ad;if(
!!this.AX){var H$=this.AX.AmU(Ad,14);var AtO=this.AX.AOL(Ad,7);this.IH.Aw(A._GetAutoObject(
A.Device.Converter).AmT(AtO));this.AbC.Aw(A._GetAutoObject(A.Device.Converter).A4T(
H$));this.An();}},_Init:function(aArg){C.M2._Init.call(this,aArg);A.acg.Ap._Init.
call(this.IH={I:this},0);A.acg.Ap._Init.call(this.AbC={I:this},0);A.acg.AL._Init.
call(this.Ea={I:this},0);this.__proto__=C.Amz;this.IH.H(Bak);this.IH.L(A.jb.Text
);this.AbC.H(Bs$);this.AbC.L(A.jb.Text);this.Ea.H(Bta);this.Ea.L(A.jb.Bc);this.J(
this.IH,0);this.J(this.AbC,0);this.J(this.Ea,0);this.IH.Aw(A.aaL(A.aci.TJ));this.
AbC.Aw(A.aaL(A.aci.TJ));},_Done:function(){this.__proto__=C.M2;this.IH._Done();this.
AbC._Done();this.Ea._Done();C.M2._Done.call(this);},_ReInit:function(){C.M2._ReInit.
call(this);this.IH._ReInit();this.AbC._ReInit();this.Ea._ReInit();},_Mark:function(
D){var B;C.M2._Mark.call(this,D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AM6={ZP:null
,Bk:function(aSize){C.M2.Bk.call(this,aSize);this.ZP.H([this.Gv.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M2.Ai.call(this,Ae);this.ZP.L(this.Gv.AQ);},Ce:function(
Ad){C.M2.Ce.call(this,Ad);if(!this.AX)return;this.Hn=Ad;if(!!this.AX){var Ka=this.
AX.KN(Ad,26);if(Ka>0)this.ZP.R(A.ab2(Ka.toFixed(),5));else this.ZP.R(Rl);this.An(
);}},_Init:function(aArg){C.M2._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZP={I:this},0);this.__proto__=C.AM6;this.ZP.H(Btb);this.J(this.ZP,0);this.ZP.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M2;this.ZP._Done();C.M2._Done.
call(this);},_ReInit:function(){C.M2._ReInit.call(this);this.ZP._ReInit();this.ZP.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M2._Mark.call(this,D);if((B=this.ZP
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARK={Ap:null,Ai:function(Ae){C.AeR.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeR._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ARK;this.Text.H(Btc);this.Ap.H(AZU);this.J(this.Ap,0
);this.Ap.Aw(A.aaL(A.ach.Afa));},_Done:function(){this.__proto__=C.AeR;this.Ap._Done(
);C.AeR._Done.call(this);},_ReInit:function(){C.AeR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yt={Text:
null,Dd:null,AP:null,Gr:null,D2:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.Nm],[B=A._GetAutoObject(A.Device.Device),B.AEs,B.AII],0);A.zV([this,this.Nm
],A._GetAutoObject(A.Device.Device).Am,0);A.pe([this,this.Nm],this);},De:function(
E){C.BS.De.call(this,E);this.Dd.L(E);this.Text.L(E);this.Gr.L(E);this.D2.Zt(E);}
,Ww:function(E){C.BS.Ww.call(this,E);this.D2.CT(E);},DY:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).Am.Ca().toFixed());},Nm:function(s){this.DY(s);}
,_Init:function(aArg){C.BS._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Dd={I:this},0);A.acg.C5._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gr={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C5._Init.call(this.A_={I:this},0);this.__proto__=C.Yt;this.Text.H(Btd);this.
Text.A6(0x11);this.Dd.H(Ayw);this.AP.DC(Bae);this.AP.DL(Baf);this.AP.L(A.jb.Bc);
this.Gr.H(Bte);this.Gr.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(Btf);this.D2.Zt(A.jb.
Bm);this.D2.CT(A.jb.Re);this.D2.Hh(2);this.A_.DC(Btg);this.A_.DL(Bth);this.A_.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Dd,0);this.J(this.AP,0);this.J(this.Gr,
0);this.J(this.D2,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Dd.Aw(A.aaL(A.ach.AjV));this.Gr.Aw(A.aaL(A.ach.Gr));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BS;this.Text.
_Done();this.Dd._Done();this.AP._Done();this.Gr._Done();this.D2._Done();this.A_.
_Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.
Text._ReInit();this.Dd._ReInit();this.AP._ReInit();this.Gr._ReInit();this.D2._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acq={FF:null
,JT:null,JS:null,AkM:null,AkN:null,Q3:null,QA:null,AbB:null,VY:null,PF:null,PG:null
,Ss:null,Gs:null,Gt:null,Js:null,AlL:0,AlQ:0,D7:0,DX:0,A8:0,Bk:function(aSize){var
B;this.Dy.H([this.Ht.M[2]-10,this.Ht.M[1],this.H2.M[0]+10,this.Ht.M[3]]);this.Dy.
AFf((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.Dy.Go,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fq=((Ae&0x20)===0x20);var GA=this.Bo.Bw;if(!!this.
Q)this.GE(this);if((this.A8===1)||(this.A8===2)){var A06=this.A14(this.A8);if(!!
A06){this.AbB.Z(true);this.AbB.H(A06.M);this.AbB.L(this.V.AQ);this.VY.Z(true);this.
VY.H(A06.M);}else{this.AbB.Z(false);this.VY.Z(false);}this.Ht.Z(false);this.H2.Z(
false);}else{this.AbB.Z(false);this.VY.Z(false);this.Ht.Z(Fq||GA);this.H2.Z(Fq||
GA);}},Qm:function(G){if(!!this.Q){if(this.FC===1)A.pe([this,this.U8],this);else
if(this.FC===4)A.pe([this,this.A0o],this);else if(this.FC===5)A.pe([this,this.A0m
],this);}C.BW.Qm.call(this,G);},J$:function(G){switch(this.A8){case 0:C.BW.J$.call(
this,G);break;case 2:break;default:this.Adw(this);}},J6:function(G){switch(this.
A8){case 0:C.BW.J6.call(this,G);break;default:this.Ain(this);}},A1A:function(G){
var F;if(this.A8===1){var BR=this.D7;this.D7=this.D7-10;if(this.D7<this.AlQ)this.
D7=this.AlQ;if(this.D7<A._GetAutoObject(A.Device.Device).Z1)this.D7=A._GetAutoObject(
A.Device.Device).Z1;if(this.DX!==BR){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.
D7));A.abo(this.JT,0);}}if(this.A8===2){var BR=this.DX;this.DX=this.DX-10;if(this.
DX<this.D7)this.DX=this.D7;if(this.DX!==BR){if(!!this.JS)(F=this.JS,F[2].call(F[
0],this.DX));A.abo(this.JS,0);}}this.DJ(this);this.An();},A0m:function(s){this.A1A(
s);},Al1:function(G){this.FC=5;this.An();if(this.Bo.Bw){A.pe([this,this.A0m],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A1$:function(G){var F;if(this.A8===1){var
BR=this.D7;this.D7=this.D7+10;if(this.D7>this.DX)this.D7=this.DX;if(this.D7!==BR
){if(!!this.JT)(F=this.JT,F[2].call(F[0],this.D7));A.abo(this.JT,0);}}if(this.A8===
2){var BR=this.DX;this.DX=this.DX+10;if(this.DX>this.AlL)this.DX=this.AlL;if(this.
DX!==BR){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.DX));A.abo(this.JS,0);}}this.
DJ(this);this.An();},A0o:function(s){this.A1$(s);},Al2:function(G){this.FC=4;this.
An();if(this.Bo.Bw){A.pe([this,this.A0o],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},U8:function(G){this.Ew(this.A8+1);},Adw:function(G){this.FC=1;this.An(
);if(this.Bo.Bw){A.pe([this,this.U8],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GE:function(G){},AfC:function(s){this.GE(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hu(A.jV);(F=this.N,F[1].call(F[0])).CB=[this,this.G_];(F=this.
N,F[1].call(F[0])).Cs(null);(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C6(A.aaL(A.ach.Aey));(F=this.N,F[1].call(
F[0])).CV(A.jV);(F=this.N,F[1].call(F[0])).Cl=[this,this.U8];}break;case 2:{(F=this.
N,F[1].call(F[0])).CY(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hu(A.jV);(F=this.
N,F[1].call(F[0])).CB=[this,this.G_];(F=this.N,F[1].call(F[0])).Cs(A.aaL(A.ach.Am1
));(F=this.N,F[1].call(F[0])).FJ(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Ain];(F=this.N,F[1].call(F[0])).C6(null);(F=this.N,F[1].call(F[0])).CV(A.jV);(F=
this.N,F[1].call(F[0])).Cl=null;}break;default:this.FF.AkP((F=this.N,F[1].call(F[
0])));}},A99:function(E){if(A.aaZ(this.JT,E))return;if(!!this.JT)A.z$([this,this.
A3x],this.JT,0);this.JT=E;if(!!this.JT)A.zX([this,this.A3x],this.JT,0);A.pe([this
,this.A3x],this);},A3x:function(G){var F;this.D7=(F=this.JT,F[1].call(F[0]));this.
An();},A98:function(E){if(A.aaZ(this.JS,E))return;if(!!this.JS)A.z$([this,this.A3w
],this.JS,0);this.JS=E;if(!!this.JS)A.zX([this,this.A3w],this.JS,0);A.pe([this,this.
A3w],this);},A3w:function(G){var F;this.DX=(F=this.JS,F[1].call(F[0]));this.An();
},FQ:function(G){this.Ew(1);},G_:function(G){this.Ew(0);},Ew:function(EO){var F;
if(!this.A8)this.FF.Ajy((F=this.N,F[1].call(F[0])));this.A8=EO;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DJ(this);this.Gt.Bw=!!this.A8;this.Gs.Bw=!!this.A8;this.
An();},Ain:function(G){if(this.A8>1)this.Ew(this.A8-1);},A3K:function(G){},AyR:function(
s){this.A3K(s);},A3j:function(G){},Bbs:function(s){this.A3j(s);},A14:function(Ato
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AL._Init.call(
this.AkM={I:this},0);A.acg.AL._Init.call(this.AkN={I:this},0);A.acg.AL._Init.call(
this.Q3={I:this},0);A.acg.Ap._Init.call(this.QA={I:this},0);A.acg.AL._Init.call(
this.AbB={I:this},0);A.acg.BU._Init.call(this.VY={I:this},0);A.acg.Text._Init.call(
this.PF={I:this},0);A.acg.Text._Init.call(this.PG={I:this},0);A.acg.Text._Init.call(
this.Ss={I:this},0);A.Core.BN._Init.call(this.Gs={I:this},0);A.Core.BN._Init.call(
this.Gt={I:this},0);A.Core.BN._Init.call(this.Js={I:this},0);this.__proto__=C.Acq;
this.H(AfA);this.T(A.aaR(A.acf.Arm));this.Background.H(AfA);this.V.H(BF);this.V.
R(A.aaR(A.acf.AGV));this.V.A6(0x12);this.AkM.H(Bti);this.AkM.L(A.jb.Gf);this.AkN.
H(Btj);this.AkN.L(A.jb.H6);this.Q3.H(Btk);this.Q3.L(A.jb.E1);this.QA.H(Btl);this.
AbB.H(Btm);this.VY.H(Btn);this.VY.Nh(3);this.VY.L(A.jb.AV);this.VY.Z(false);this.
PF.H(Bto);this.PF.Hh(8);this.PF.I7(true);this.PF.A6(0x11);this.PF.L(0xFF000000);
this.PG.H(Btp);this.PG.Hh(8);this.PG.I7(true);this.PG.A6(0x11);this.PG.L(0xFF000000
);this.Ss.H(Btq);this.Ss.I7(false);this.Ss.A6(0x12);this.Ss.L(0xFF000000);this.Gs.
Filter=5;this.Gs.Bw=false;this.Gt.Filter=4;this.Gt.Bw=false;this.Js.Filter=1;this.
JV(this.V,-1);this.JV(this.Dy,-2);this.J(this.AkM,-1);this.J(this.AkN,-1);this.J(
this.Q3,-1);this.J(this.QA,-1);this.J(this.AbB,-1);this.J(this.VY,-1);this.J(this.
PF,-1);this.J(this.PG,0);this.J(this.Ss,0);this.QA.Aw(A.aaL(A.ach.ADu));this.PF.
S(A.aaL(A.fl.Af));this.PG.S(A.aaL(A.fl.Af));this.Ss.S(A.aaL(A.fl.Ak));this.Gs.BO=[
this,this.Al1];this.Gs.D1=[this,this.A0m];this.Gt.BO=[this,this.Al2];this.Gt.D1=[
this,this.A0o];this.Js.BO=[this,this.Adw];this.FF=A._NewObject(C.Aer,0);},_Done:
function(){this.__proto__=C.BW;this.AkM._Done();this.AkN._Done();this.Q3._Done();
this.QA._Done();this.AbB._Done();this.VY._Done();this.PF._Done();this.PG._Done();
this.Ss._Done();this.Gs._Done();this.Gt._Done();this.Js._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkM._ReInit();this.AkN._ReInit(
);this.Q3._ReInit();this.QA._ReInit();this.AbB._ReInit();this.VY._ReInit();this.
PF._ReInit();this.PG._ReInit();this.Ss._ReInit();this.Gs._ReInit();this.Gt._ReInit(
);this.Js._ReInit();this.T(A.aaR(A.acf.Arm));this.V.R(A.aaR(A.acf.AGV));this.PF.
S(A.aaL(A.fl.Af));this.PG.S(A.aaL(A.fl.Af));this.Ss.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JS)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FE={XW:null,Acs:
null,Aob:0,Aoc:0,Do:function(){if(!this.XW)return 0;return this.XW.MC;},C4:function(
aIndex){if(!this.XW||(aIndex>=this.XW.MC))return-1;return this.XW.Get(aIndex);},
FX:function(aIndex){return this.A6x().BI(this.C4(aIndex));},DU:function(A7){if(!
this.XW)return-1;return this.XW.Avo(A7);},HH:function(){if(!this.XW)return-1;return this.
XW.HH();},AnK:function(E){if(this.Aob===E)return;this.Aob=E;A.pe([this,this.AVv]
,this);},A0i:function(Aq){this.AnK(Aq);},AnL:function(E){if(this.Aoc===E)return;
this.Aoc=E;A.pe([this,this.AVw],this);},A0j:function(Aq){this.AnL(Aq);},AVw:function(
G){A.abo([this,this.ASL,this.A0j],0);},AVv:function(G){A.abo([this,this.ASK,this.
A0i],0);},A6x:function(){return this.Acs;},ASK:function(){return this.Aob;},ASL:
function(){return this.Aoc;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acs={I:this},0);this.__proto__=C.FE;},_Done:function(
){this.__proto__=C.AC;this.Acs._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acs._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acs)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMA={Init:
function(aArg){A.zV([this,this.BeV],A._GetAutoObject(A.Device.Helper).UC,0);A.zV([
this,this.BeT],A._GetAutoObject(A.Device.Helper).UB,0);this.BeV(this);this.BeT(this
);},As:function(E){C.FE.As.call(this,E);this.AnL(A._GetAutoObject(A.Device.Helper
).UC.Get(this.DU(E)));this.AnK(A._GetAutoObject(A.Device.Helper).UB.Get(this.DU(
E)));},AnK:function(E){if(this.Aob===E)return;C.FE.AnK.call(this,E);A._GetAutoObject(
A.Device.Helper).UB.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).UB.
Cq();},AnL:function(E){if(this.Aoc===E)return;C.FE.AnL.call(this,E);A._GetAutoObject(
A.Device.Helper).UC.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).UC.
Cq();},BeV:function(G){this.Aoc=A._GetAutoObject(A.Device.Helper).UC.Get(this.DU(
this.Q));A.pe([this,this.AVw],this);},BeT:function(G){this.Aob=A._GetAutoObject(
A.Device.Helper).UB.Get(this.DU(this.Q));A.pe([this,this.AVv],this);},_Init:function(
aArg){C.FE._Init.call(this,aArg);this.__proto__=C.AMA;this.XW=A._GetAutoObject(A.
Device.Helper).AdY;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMB={Agx:null,ABR:0,ABQ:0,Init:function(aArg){A.zV([this,this.Be8],A._GetAutoObject(
A.Device.Helper).Afu,0);A.zV([this,this.Be6],A._GetAutoObject(A.Device.Helper).Aft
,0);A.zV([this,this.Be4],A._GetAutoObject(A.Device.Helper).Afs,0);A.zV([this,this.
Be_],A._GetAutoObject(A.Device.Helper).Afv,0);this.Be8(this);this.Be6(this);this.
Be4(this);this.Be_(this);},As:function(E){C.FE.As.call(this,E);this.AnL(A._GetAutoObject(
A.Device.Helper).Afu.Get(this.DU(E)));this.AnK(A._GetAutoObject(A.Device.Helper).
Aft.Get(this.DU(E)));this.ASP(A._GetAutoObject(A.Device.Helper).Afs.Get(this.DU(
E)));this.ASR(A._GetAutoObject(A.Device.Helper).Afv.Get(this.DU(E)));},AnK:function(
E){if(this.Aob===E)return;C.FE.AnK.call(this,E);A._GetAutoObject(A.Device.Helper
).Aft.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Aft.Cq();},AnL:function(
E){if(this.Aoc===E)return;C.FE.AnL.call(this,E);A._GetAutoObject(A.Device.Helper
).Afu.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afu.Cq();},A6x:function(
){return this.Agx;},Be8:function(G){this.Aoc=A._GetAutoObject(A.Device.Helper).Afu.
Get(this.DU(this.Q));A.pe([this,this.AVw],this);},Be6:function(G){this.Aob=A._GetAutoObject(
A.Device.Helper).Aft.Get(this.DU(this.Q));A.pe([this,this.AVv],this);},ASR:function(
E){if(this.ABR===E)return;this.ABR=E;A._GetAutoObject(A.Device.Helper).Afv.Set(this.
DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afv.Cq();A.pe([this,this.A$H],this
);},ASP:function(E){if(this.ABQ===E)return;this.ABQ=E;A._GetAutoObject(A.Device.
Helper).Afs.Set(this.DU(this.Q),E);A._GetAutoObject(A.Device.Helper).Afs.Cq();A.
pe([this,this.A$G],this);},A$G:function(G){A.abo([this,this.A8k,this.ASP],0);},A$H:
function(G){A.abo([this,this.A8l,this.ASR],0);},Be4:function(G){this.ABQ=A._GetAutoObject(
A.Device.Helper).Afs.Get(this.DU(this.Q));A.pe([this,this.A$G],this);},Be_:function(
G){this.ABR=A._GetAutoObject(A.Device.Helper).Afv.Get(this.DU(this.Q));A.pe([this
,this.A$H],this);},A8l:function(){return this.ABR;},A8k:function(){return this.ABQ;
},_Init:function(aArg){C.FE._Init.call(this,aArg);A.Device.Agx._Init.call(this.Agx={
I:this},0);this.__proto__=C.AMB;this.XW=A._GetAutoObject(A.Device.Helper).Agy;this.
Init(aArg);},_Done:function(){this.__proto__=C.FE;this.Agx._Done();C.FE._Done.call(
this);},_ReInit:function(){C.FE._ReInit.call(this);this.Agx._ReInit();},_Mark:function(
D){var B;C.FE._Mark.call(this,D);if((B=this.Agx)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMh={RI:null,Init:function(
aArg){var B;A.zX([this,this.AiL],[B=this.AnimalType,B.B7,B.B8],0);A.pe([this,this.
AiL],this);this.Bb(this.RI);},Bl:function(E){C.I0.Bl.call(this,E);this.RI.By(this.
Jn.AM);},AiL:function(G){A._GetAutoObject(A.Device.Device).AwC(this.AnimalType.Q
);},_Init:function(aArg){C.I0._Init.call(this,aArg);C.TD._Init.call(this.RI={I:this
},0);this.__proto__=C.AMh;var B;this.Jn.Ar(false);this.Jn.Aj(false);this.Jn.Z(false
);this.RI.H(AIE);this.RI.Aj(true);this.RI.Nd(14);this.RI.Aho(0);this.RI.ON(0);this.
J(this.RI,-4);this.RI.AR=[this,this.AAr];this.RI.As([B=this.AnimalType,B.B7,B.B8
]);this.RI.CI(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I0;this.RI._Done();C.I0._Done.call(this);},_ReInit:function(){C.I0._ReInit.call(
this);this.RI._ReInit();},_Mark:function(D){var B;C.I0._Mark.call(this,D);if((B=
this.RI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TD={Filter:null,Ep:0,TableId:0,Operator:1,CP:function(){var F;this.To((F=this.
Filter,F[1].call(F[0])).DQ(this.Ep,this.Operator));},Bk:function(aSize){var B;C.
BW.Bk.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Ht.H(AhR
);this.H2.H([aSize[0]-40,40,aSize[0],80]);this.Dy.H([this.Ht.M[2]-5,this.Ht.M[1]
,this.H2.M[0]+5,this.Ht.M[3]]);this.Dy.AFf((B=this.Dy.M)[2]-B[0]);this.Dy.HD(this.
Dy.Go,true,null,null);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$
],E,0);A.pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.To((F=this.Filter,F[1].call(F[0])).DQ(this.Ep,this.
Operator));else this.To(null);},Aho:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.L$],this);},Nd:function(E){if(this.Ep===E)return;this.
Ep=E;A.pe([this,this.L$],this);},To:function(AH){this.T(A._GetAutoObject(A.Device.
Helper).AmV(this.TableId,this.Ep));this.An();},ON:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.L$],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TD;this.H(J0);this.V.A6(0x11);this.V.Cu(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Cu(A.aaL(A.fl.Bh));this.
CP();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ART={Gb:null,MP:null,DZ:null,Y:null,Ef:null,Cn:null,CG:null,C$:null,Gi:null,
Ee:null,C9:null,BZ:null,Ay:null,Breed:null,Jd:null,AnimalType:null,Gender:null,Pj:
null,KY:null,Jb:null,YH:null,Amg:null,KI:0,M3:0,A3S:false,Init:function(aArg){var
B;A.zX([this,this.BAo],[B=A._GetAutoObject(A.Device.Device),B.AEx,B.AIM],0);A.zV([
this,this.At0],this.MP,0);A.zX([this,this.At0],[B=A._GetAutoObject(A.Device.Device
),B.Awj,B.AyM],0);A.zX([this,this.GE],[B=A._GetAutoObject(A.Device.Device),B.AEx
,B.AIM],0);A.zV([this,this.GE],this.MP,0);A.zX([this,this.AiL],this.BZ.Q,0);A.pe([
this,this.AiL],this);A.pe([this,this.Bew],this);A.pe([this,this.At0],this);A.pe([
this,this.GE],this);A.pe([this,this.A3k],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALm],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArJ(A.jb.E1);else
this.Ef.ArJ(A.jb.Gf);if(A._GetAutoObject(A.Device.Device).AeL){if(!!(F=this.Cn.Dj
,F[1].call(F[0])))this.Cn.ArJ(A.jb.E1);else this.Cn.ArJ(A.jb.Gf);}else this.Cn.ArJ(
A.jb.Re);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},LO:function(
G){if(A._GetAutoObject(A.Device.Device).Am.Lh())A._GetAutoObject(A.Device.Device
).A9(41,true,A._GetAutoObject(A.Device.Device).Am.HG().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gm();A._GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(A.
Device.Helper).W);this.ApA();},CF:function(G){C.AB.CF.call(this,G);A._GetAutoObject(
A.Device.Device).AFm(0);},E3:function(G){C.AB.E3.call(this,G);this.Jb.Ar(false);
A._GetAutoObject(A.Device.Device).Un(false);},Ev:function(G){A._GetAutoObject(A.
Device.Helper).W.Hi();A._GetAutoObject(C.A$).Fv();},Fe:function(G){var B;this.Ay.
Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.
Y.Br[1]);},At0:function(G){var F,CA;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALm(this);this.An();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).Am.Aej(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A9(21,true,A._GetAutoObject(A.Device.Converter
).Rf((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A2$]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A2_],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeL)this.JD(this.Cn);}var BdM=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeL||!!(CA=this.Cn.Dj,CA[1].call(CA[0])));if(this.MP.AOG()>0){if((
this.AV===this.Cn)&&BdM)this.Bb(this.Y.TL(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeL&&(this.AV===this.Cn))&&!!(F=this.Cn.Dj,F[1].call(F[0])))this.
JD(this.Ef);if(BdM)this.Bcz(this);},XB:function(G){A._GetAutoObject(A.Device.Device
).Ds(13);},AiZ:function(){var F;this.Gb.Cq(A._GetAutoObject(A.Device.Device).Am);
if(this.MP.NU(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A9(50,true,A._GetAutoObject(A.Device.Device).Bt.HG().toFixed(),
0,null);else{var L6=A._GetAutoObject(A.Device.Device).Am.Lc(0,this.Gb.Id);A._GetAutoObject(
A.Device.Device).SJ(L6);var B1=A._NewObject(A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(
this.Gb.Id);B1.OnSetBodyWeight(this.KI);B1.OnSetTimestamp(this.Gb.DateOfBirth);B1.
Cq(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MP.NU(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A9(50,true,A._GetAutoObject(
A.Device.Device).Bt.HG().toFixed(),0,null);else{var L6=A._GetAutoObject(A.Device.
Device).Am.Lc(0,this.Gb.Id);A._GetAutoObject(A.Device.Device).SJ(L6);var B1=A._NewObject(
A.Device.Rating,0);B1.Gm();B1.OnSetAnimalId(this.Gb.Id);B1.OnSetBodyWeight(this.
M3);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Cq(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WA(65280);this.Jb.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFm(F.AvV+1));this.A3S=true;A.pe([this,
this.ALm],this);this.ApA();},GE:function(G){this.Cn.ATq(A._GetAutoObject(A.Device.
Device).AeL);A._GetAutoObject(A.Device.Helper).JW(this.BZ,this.MP.NU(14));A._GetAutoObject(
A.Device.Helper).JW(this.C9,this.MP.NU(23));A._GetAutoObject(A.Device.Helper).JW(
this.CG,this.MP.NU(32));A._GetAutoObject(A.Device.Helper).JW(this.Ee,this.MP.NU(
18));A._GetAutoObject(A.Device.Helper).JW(this.C$,this.MP.NU(7));A._GetAutoObject(
A.Device.Helper).JW(this.Gi,this.MP.NU(34));this.YH.Z(!this.MP.AOG());var O;var Aa=
null;var Aph=this.AV;for(O=0;O<this.MP.AfL.NP();O++){Aa=this.Bzj(this.MP.AfL.OD(
O));if(!!Aa)this.ZE(Aa);}this.JD(Aph);A._GetAutoObject(A.Device.Helper).ANr(this.
Y);A.pe([this,this.A3k],this);this.An();},AeV:function(E){if(this.KI===E)return;
this.KI=E;A.abo([this,this.Av7,this.AeV],0);},Ahi:function(E){if(this.M3===E)return;
this.M3=E;A.abo([this,this.Anr,this.Ahi],0);},Bcz:function(G){this.Gb.Gm();A._GetAutoObject(
A.Device.Helper).Aqi(this.Gb);this.Gb.Q0(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gb.Ne(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gb.SA(A._GetAutoObject(
A.Device.Helper).AMi(0,this.Gb));this.Gb.Ae2(true);if(this.MP.NU(14))this.Gb.EB(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MP.NU(32))this.Gb.NY(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MP.NU(7))this.Gb.JQ(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MP.NU(34))this.Gb.Ng(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alq=A._GetAutoObject(A.Device.Helper).A1n(this.Gb,0,A._GetAutoObject(
A.Device.Device).Am);if(!Alq)this.AiZ();else A._GetAutoObject(A.Device.Helper).AKg(
this.Gb,Alq,0,0,[this,this.ApG]);},ApA:function(){A._GetAutoObject(A.Device.Helper
).W.Ne(0);if(A._GetAutoObject(A.Device.Device).AeL)A._GetAutoObject(A.Device.Helper
).W.Q0(0);this.AeV(0);this.Ahi(0);this.JD(this.Ef);this.An();},ApG:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case
22:case 21:case 48:this.ApA();break;case 43:this.JD(this.Ef);break;case 41:break;
default:A.ab5("%s%e",As7,At.Id);}},JD:function(Ag){this.Bb(Ag);this.Y.HD(Ag,true
,null,null);this.Y.Vt(null,null);},Bew:function(G){this.Ee.Ahm(A._GetAutoObject(
A.Device.Helper).W.AhP(1));this.At0(this);},AiL:function(G){this.C9.Ahm(A._GetAutoObject(
A.Device.Helper).Abr(this.AnimalType.Q));},A3k:function(G){var B;var BBu=this.Ay.
Background.Fk();var width=(BBu?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xq=this.Y.TL(null,0x401);while(!!Xq&&(((B=Xq)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OV.isPrototypeOf(Xq)?Xq:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xq=this.Y.TL(Xq,0x1);}},Bzj:function(Aak){var Aa=null;switch(Aak){case 14:Aa=
this.BZ;break;case 32:Aa=this.CG;break;case 23:Aa=this.C9;break;case 7:Aa=this.C$;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gi;break;default:A.ab5("%s%e",Btr
,Aak);}return Aa;},BAo:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeL
)A._GetAutoObject(A.Device.Helper).W.Q0(0);else if(!(F=this.Cn.Dj,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q0(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmH(A._GetAutoObject(A.Device.Device).AdR));this.
At0(this);},ALm:function(G){var B;var AKl=A.jV;var Ay9=A.jb.CK;var BcQ=A.jb.AV;this.
Amg.AxE(this);if(this.A3S){this.A3S=false;AKl=A._GetAutoObject(A.Device.Helper).
Nk(A.aaR(A.acf.Bo5),P6,A._GetAutoObject(A.Device.Converter).Rf(this.Gb.NaisId));
A.pe([B=this.Amg,B.StartTimer],this);Ay9=A.jb.E1;BcQ=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKl=A.aaR(A.acf.Boj);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKl=A.aaR(A.
acf.Boi);this.YH.T(AKl);this.YH.BlD(Ay9);this.YH.BlE(BcQ);},A2$:function(G){var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At){if(At.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajz();else if(At.Id===105){if(At.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajz();else if(At.PopupState===7){A._GetAutoObject(C.A$).Cg(76);
A._GetAutoObject(A.Device.Device).Ajz();}}}else A._GetAutoObject(A.Device.Device
).Ajz();},A2_:function(G){A._GetAutoObject(A.Device.Device).AuO();},DJ:function(
G){var B;if(!this.MP.AOG()){this.N.Le.Dr(255);if(this.AV===this.Ef){this.N.C6(A.
aaL(A.ach.Edit));this.N.Cl=[B=this.Ef,B.FQ];}else if(this.AV===this.Cn){this.N.C6(
A.aaL(A.ach.Edit));this.N.Cl=[B=this.Cn,B.FQ];}else{this.N.C6(null);this.N.Cl=null;
}}else{this.N.C6(A.aaL(A.ach.Am3));if((this.Ef.Aqu===A.jb.Gf)||(this.Cn.Aqu===A.
jb.Gf)){this.N.Le.Dr(100);this.N.Cl=null;}else{this.N.Le.Dr(255);this.N.Cl=[this
,this.Bcz];}}},Av7:function(){return this.KI;},Anr:function(){return this.M3;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DZ={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUC._Init.call(this.Ef={I:this},0);C.
AUy._Init.call(this.Cn={I:this},0);C.Axu._Init.call(this.CG={I:this},0);C.BW._Init.
call(this.C$={I:this},0);C.Asw._Init.call(this.Gi={I:this},0);C.AkT._Init.call(this.
Ee={I:this},0);C.AkT._Init.call(this.C9={I:this},0);C.BW._Init.call(this.BZ={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UM._Init.call(this.Jd={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M1._Init.call(this.
Pj={I:this},0);A.Device.KY._Init.call(this.KY={I:this},0);A.Device.TE._Init.call(
this.Jb={I:this},0);C.AU8._Init.call(this.YH={I:this},0);A.Core.Timer._Init.call(
this.Amg={I:this},0);this.__proto__=C.ART;var B;this.Background.L(A.jb.CS);this.
N.Z(true);this.Ej.Ar(false);this.Dq(C.APm);this.DZ.AZ(0x3F);this.DZ.H(E$);this.DZ.
L(A.jb.CK);this.Y.H(E$);this.Y.JP(9);this.Ef.H(AIE);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACz));this.Ef.ATq(true);this.Ef.AFF(false);this.Cn.H(Bao);this.Cn.Aj(true
);this.Cn.T(A.aaR(A.acf.Aed));this.Cn.ATq(true);this.Cn.AFz(true);this.CG.H(As6);
this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.C$.H(As6);this.C$.Aj(true);this.
C$.T(A.aaR(A.acf.Afk));this.Gi.H(Bap);this.Gi.Aj(true);this.Gi.T(A.aaR(A.acf.Jd)
);this.Ee.H(Bts);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M3));this.Ee.F0(1000);this.
Ee.EV(999000);this.Ee.Ahm(A._GetAutoObject(A.Device.Helper).Abr(this.AnimalType.
Q));this.C9.H(Bap);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KI));this.C9.F0(1000);
this.C9.EV(99000);this.C9.Ahm(A._GetAutoObject(A.Device.Helper).Abr(this.AnimalType.
Q));this.BZ.H(As5);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afp));this.Ay.H(Iq);this.
Jb.B2=false;this.Jb.Cw=true;this.Jb.HM(1);this.Jb.Fl(1000);this.Jb.Uk(0);this.YH.
H(Aag);this.YH.Aj(true);this.YH.ArJ(A.jb.Text);this.Amg.PO(3000);this.J(this.DZ,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CG,0);this.J(
this.C$,0);this.J(this.Gi,0);this.J(this.Ee,0);this.J(this.C9,0);this.J(this.BZ,
0);this.J(this.Ay,0);this.J(this.YH,0);this.N.CB=[this,this.Ev];this.N.Ck=[this,
this.XB];this.N.CY(A.aaL(A.ach.E2));this.N.Cs(A.aaL(A.ach.AbD));this.Y.El=[this,
this.Fe];this.Ef.Gn([this,this.D_,this.GN]);this.Ef.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Anu,B.Ne]);this.Ef.AFa([this,this.At0]);this.Ef.ATc([this,this.A2_]);
this.Ef.ATd([this,this.A2$]);this.Cn.Gn([this,this.D_,this.GN]);this.Cn.Ab9([B=A.
_GetAutoObject(A.Device.Helper).W,B.Av_,B.Q0]);this.Cn.OF=[this,this.Bew];this.Cn.
ATc([this,this.A2_]);this.Cn.ATd([this,this.A2$]);this.CG.Gn([this,this.D_,this.
GN]);this.CG.LX([B=this.CG,B.FQ]);this.CG.L0(A.aaL(A.ach.Edit));this.CG.As([B=this.
Breed,B.B7,B.B8]);this.CG.CI(this.Breed);this.CG.Anz(this.Pj);this.C$.As([B=this.
Gender,B.B7,B.B8]);this.C$.CI(this.Gender);this.Gi.Gn([this,this.D_,this.GN]);this.
Gi.LX([B=this.Gi,B.FQ]);this.Gi.L0(A.aaL(A.ach.Edit));this.Gi.As([B=this.Jd,B.B7
,B.B8]);this.Gi.CI(this.Jd);this.Gi.Anz(this.KY);this.Ee.As([this,this.Anr,this.
Ahi]);this.C9.As([this,this.Av7,this.AeV]);this.BZ.As([B=this.AnimalType,B.B7,B.
B8]);this.BZ.CI(this.AnimalType);this.Ay.Bm0([this,this.A3k]);this.Breed.LY(A._GetAutoObject(
A.Device.Helper).W);this.Jd.LY(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LY(A._GetAutoObject(A.Device.Helper).W);this.Gender.LY(A._GetAutoObject(A.Device.
Helper).W);this.Gb=A._NewObject(A.Device.Animal,0);this.MP=A._GetAutoObject(C.Amo
);this.Jb.Q=[B=A._GetAutoObject(A.Device.Device),B.ASG,B.A0e];this.Amg.Mx=[this,
this.ALm];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();
this.Y._Done();this.Ef._Done();this.Cn._Done();this.CG._Done();this.C$._Done();this.
Gi._Done();this.Ee._Done();this.C9._Done();this.BZ._Done();this.Ay._Done();this.
Breed._Done();this.Jd._Done();this.AnimalType._Done();this.Gender._Done();this.Pj.
_Done();this.KY._Done();this.Jb._Done();this.YH._Done();this.Amg._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cn._ReInit();this.CG._ReInit();this.C$._ReInit(
);this.Gi._ReInit();this.Ee._ReInit();this.C9._ReInit();this.BZ._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jd._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pj._ReInit();this.KY._ReInit();this.Jb._ReInit();this.YH._ReInit(
);this.Amg._ReInit();this.Ef.T(A.aaR(A.acf.ACz));this.Cn.T(A.aaR(A.acf.Aed));this.
CG.T(A.aaR(A.acf.Breed));this.C$.T(A.aaR(A.acf.Afk));this.Gi.T(A.aaR(A.acf.Jd));
this.Ee.T(A.aaR(A.acf.M3));this.C9.T(A.aaR(A.acf.KI));this.BZ.T(A.aaR(A.acf.Afp)
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
B=this.YH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amg)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Asv={Zl:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zl={
I:this},0);this.__proto__=C.Asv;this.N.CV(A.acf.Bh6);this.Number.H(Btt);this.Jc.
H(Btu);this.IP.H(Btv);this.AkF(2);this.Bcw=false;this.BdB=true;this.BdC=false;this.
Zl.H(Btw);this.Zl.KS(true);this.Zl.R(A.aaR(A.acf.A$i));this.Zl.L(A.jb.Text);this.
J(this.Zl,0);this.N.CB=null;this.N.Cl=[this,this.AIS];this.N.CY(null);this.Zl.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Zl.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zl._ReInit();this.Zl.R(A.aaR(A.acf.A$i));this.Zl.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Zl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADL={Ct:null,FI:function(E){if(this.M5===E)return;C.HI.FI.call(this,E);this.
Ct.CT(E);},Yr:function(Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;
case 1:B5=this.Ct;break;case 2:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;
},_Init:function(aArg){C.HI._Init.call(this,aArg);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADL;this.H(Btx);this.Ct.H(A$3);this.FW.H(Bty);this.J(this.
Ct,-2);this.Ct.Di=[this,this.GP];},_Done:function(){this.__proto__=C.HI;this.Ct.
_Done();C.HI._Done.call(this);},_ReInit:function(){C.HI._ReInit.call(this);this.
Ct._ReInit();},_Mark:function(D){var B;C.HI._Mark.call(this,D);if((B=this.Ct)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Asw={GZ:null
,Bk:function(aSize){C.OS.Bk.call(this,aSize);this.V.H(A.abN(this.V.M,this.GZ.M[0
]));},Ai:function(Ae){C.OS.Ai.call(this,Ae);if(this.Hf)this.GZ.FI(A.jb.CK);else this.
GZ.FI(A.jb.CS);},A1Z:function(){this.Bb(this.GZ);},_Init:function(aArg){C.OS._Init.
call(this,aArg);C.HI._Init.call(this.GZ={I:this},0);this.__proto__=C.Asw;this.GZ.
H(Btz);this.J(this.GZ,0);this.GZ.As([this,this.ASw,this.AFt]);},_Done:function(){
this.__proto__=C.OS;this.GZ._Done();C.OS._Done.call(this);},_ReInit:function(){C.
OS._ReInit.call(this);this.GZ._ReInit();},_Mark:function(D){var B;C.OS._Mark.call(
this,D);if((B=this.GZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axu={GZ:null,Bk:function(aSize){C.OS.Bk.call(this,aSize);this.V.H(A.abN(this.
V.M,this.GZ.M[0]));},Ai:function(Ae){C.OS.Ai.call(this,Ae);if(this.Hf)this.GZ.FI(
A.jb.CK);else this.GZ.FI(A.jb.CS);},A1Z:function(){this.Bb(this.GZ);},_Init:function(
aArg){C.OS._Init.call(this,aArg);C.ADL._Init.call(this.GZ={I:this},0);this.__proto__=
C.Axu;this.GZ.AZ(0x18);this.GZ.H(BtA);this.J(this.GZ,0);this.GZ.As([this,this.ASw
,this.AFt]);},_Done:function(){this.__proto__=C.OS;this.GZ._Done();C.OS._Done.call(
this);},_ReInit:function(){C.OS._ReInit.call(this);this.GZ._ReInit();},_Mark:function(
D){var B;C.OS._Mark.call(this,D);if((B=this.GZ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Act={ScreenTypeToString:
null,Do:function(){return 4;},FX:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BI(this.C4(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Act;this.Cf.Set(0,3);this.Cf.Set(1,35);this.Cf.Set(2
,34);this.Cf.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVR={Wv:function(G){this.Agp();A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.Settings
),[this,this.A3p]);A._GetAutoObject(C.BH).Ft();this.AL6();A._GetAutoObject(C.BH).
MZ(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.
BH).MZ(A.aaR(A.acf.ARk)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(
6);},DE:function(G){},Abt:function(){return C.AB2;},Abu:function(){return C.ADk;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).A6L());},HO:function(G){C.Tu.HO.call(this,G);if(this.Akh()===false){this.
N.Cs(A.aaL(A.ach.Avv));this.N.Ck=[this,this.ANW];this.N.FJ(A.jV);}this.N.OO(false
);this.N.OP(false);},Agb:function(){A._GetAutoObject(C.A$).Cg(86);},A6C:function(
){return C.APt;},BfG:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).Am.Filter){Filter=A._GetAutoObject(A.Device.Device).Am.Filter.Fg(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DQ(26,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);A._GetAutoObject(
A.Device.Device).Am.Bl(Filter);}},A3p:function(G){A._GetAutoObject(A.Device.Device
).Ds(0);A._GetAutoObject(C.A$).Cg(89);},_Init:function(aArg){C.Tu._Init.call(this
,aArg);this.__proto__=C.AVR;this.Dq(C.ADb);this.Dz(A.aaR(A.acf.A7Y));this.AS_(A.
_GetAutoObject(C.AxZ));},_ReInit:function(){C.Tu._ReInit.call(this);this.Dz(A.aaR(
A.acf.A7Y));},_className:"Application::YoungNoTransponderListScreen"};C.AVQ={_Init:
function(aArg){C.I0._Init.call(this,aArg);this.__proto__=C.AVQ;this.KW.Ar(false);
this.KW.Aj(false);this.KW.Z(false);this.BmA(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQ0={Sm:null,Q:null,A7U:0,M5:0,Init:function(aArg){this.ATb(6);},As:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sm)this.Sm.As(E);},ATb:function(
E){if(this.A7U===E)return;this.A7U=E;var X;switch(E){case 2:X=A._NewObject(C.HI,
0);break;case 3:X=A._NewObject(C.ADL,0);break;case 4:X=A._NewObject(C.AQX,0);break;
case 5:X=A._NewObject(C.AQY,0);break;case 6:X=A._NewObject(C.AvO,0);break;default:{
X=null;A.ab5("%s%i",BtB,E);}}this.Bmz(X);},Bmz:function(E){if(this.Sm===E)return;
if(!!this.Sm){this.Sm.As(null);this.HN(this.Sm);}this.Sm=E;if(!!this.Sm){this.Sm.
As(this.Q);this.J(this.Sm,0);}},FI:function(E){if(this.M5===E)return;this.M5=E;if(
!!this.Sm)this.Sm.FI(E);},SI:function(Gw){if(!!this.Sm)this.Sm.SI(Gw);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.AQ0;this.H(Ayh);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sm)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQX={CU:null,Ct:null,FI:function(
E){if(this.M5===E)return;C.HI.FI.call(this,E);this.Ct.CT(E);this.CU.CT(E);},Yr:function(
Hw){var B5=null;switch(Hw){case-1:case 0:B5=this.FW;break;case 1:B5=this.Ct;break;
case 2:B5=this.CU;break;case 3:B5=this.GW;break;default:A.ab5("%s",AhZ);}return B5;
},_Init:function(aArg){C.HI._Init.call(this,aArg);C.DF._Init.call(this.CU={I:this
},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.AQX;this.H(BtC);this.GW.
H(Ate);this.CU.H(A$4);this.Ct.H(A$5);this.FW.H(A$6);this.J(this.CU,-2);this.J(this.
Ct,-2);this.CU.Di=[this,this.GP];this.Ct.Di=[this,this.GP];},_Done:function(){this.
__proto__=C.HI;this.CU._Done();this.Ct._Done();C.HI._Done.call(this);},_ReInit:function(
){C.HI._ReInit.call(this);this.CU._ReInit();this.Ct._ReInit();},_Mark:function(D
){var B;C.HI._Mark.call(this,D);if((B=this.CU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACI={SW:null,Ai:function(Ae){C.Abq.Ai.call(this,Ae);this.SW.L(this.V.AQ);},_Init:
function(aArg){C.Abq._Init.call(this,aArg);C.CH._Init.call(this.SW={I:this},0);this.
__proto__=C.ACI;this.V.Z(false);this.AW.H(BtD);this.AW.ATb(4);this.SW.H(BtE);this.
SW.R(A.aaR(A.acf.Ki));this.SW.L(A.jb.Bm);this.J(this.SW,0);this.SW.S(A.aaL(A.fl.
Af));this.SW.A2(A.aaL(A.fl.Ak));this.SW.Cu(null);},_Done:function(){this.__proto__=
C.Abq;this.SW._Done();C.Abq._Done.call(this);},_ReInit:function(){C.Abq._ReInit.
call(this);this.SW._ReInit();this.SW.R(A.aaR(A.acf.Ki));this.SW.S(A.aaL(A.fl.Af)
);this.SW.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abq._Mark.call(this,D);
if((B=this.SW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LW={Y0:null,T4:null,AQ:0,A7a:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y0.L(this.AQ);this.T4.L(this.AQ);},A9X:function(E){var B;if(this.A7a===
E)return;this.A7a=E;if(E){this.Y0.Z(true);this.T4.DC([this.T4.EC[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y0.Z(false);this.T4.DC([this.T4.EC[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C5._Init.call(
this.Y0={I:this},0);A.acg.C5._Init.call(this.T4={I:this},0);this.__proto__=C.LW;
this.H(AZV);this.Y0.AZ(0x2D);this.Y0.DC(AhU);this.Y0.DL(Baq);this.Y0.L(A.jb.Text
);this.T4.AZ(0x36);this.T4.DC(Baq);this.T4.DL(BtF);this.T4.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y0,0);this.J(this.T4,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y0._Done();this.T4._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y0._ReInit();this.T4._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y0)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUg={Sr:null,Py:null,C$:null,BZ:null,CG:null,GM:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pj:null,UM:null,KY:null,Init:function(aArg){A.zX([this
,this.AuI],this.BZ.Q,0);A.zX([this,this.AMZ],this.CG.Q,0);A.zX([this,this.Bqp],this.
Sr.Q,0);A.zX([this,this.Avl],this.C$.Q,0);A.zX([this,this.AVN],this.GM.Q,0);},AuI:
function(G){var F;A._GetAutoObject(A.Device.Device).EB((F=this.BZ.Q,F[1].call(F[
0])));},Bqp:function(G){var F;A._GetAutoObject(A.Device.Device).Axb((F=this.Sr.Q
,F[1].call(F[0])));},Avl:function(G){var F;A._GetAutoObject(A.Device.Device).JQ((
F=this.C$.Q,F[1].call(F[0])));},AVN:function(G){var F;A._GetAutoObject(A.Device.
Device).Ng((F=this.GM.Q,F[1].call(F[0])));},AMZ:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cd._Init.
call(this,aArg);C.BW._Init.call(this.Sr={I:this},0);C.Io._Init.call(this.Py={I:this
},0);C.BW._Init.call(this.C$={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.Axu.
_Init.call(this.CG={I:this},0);C.Asw._Init.call(this.GM={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M1._Init.call(this.Pj={I:this},0);C.UM._Init.call(this.UM={I:
this},0);A.Device.KY._Init.call(this.KY={I:this},0);this.__proto__=C.AUg;var B;this.
I8((A.aaR(A.acf.Asj)+Ays)+A.aaR(A.acf.AjF));this.Sr.H(AhX);this.Sr.Aj(true);this.
Sr.T(A.aaR(A.acf.A$R));this.Sr.Bg(true);this.Sr.By(0);this.Py.H(Ayf);this.Py.Aj(
true);this.Py.Z(true);this.Py.T(A.aaR(A.acf.AdR));this.Py.F0(0);this.Py.EV(99);this.
Py.IM(A.aaR(A.acf.Ki));this.Py.I9(A.aaR(A.acf.GH));this.C$.H(Aag);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.Afk));this.C$.Bg(true);this.C$.By(0);this.BZ.H(Alh);this.
BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Afp));this.BZ.Bg(true);this.BZ.By(0);this.CG.H(
AcQ);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.CG.Bg(false);this.GM.H(
AcQ);this.GM.Aj(true);this.GM.T(A.aaR(A.acf.Jd));this.GM.Bg(true);this.AnimalType.
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
this.KY._ReInit();this.I8((A.aaR(A.acf.Asj)+Ays)+A.aaR(A.acf.AjF));this.Sr.T(A.aaR(
A.acf.A$R));this.Py.T(A.aaR(A.acf.AdR));this.Py.IM(A.aaR(A.acf.Ki));this.Py.I9(A.
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
};C.AUf={QK:null,Fx:null,Ik:null,C_:null,Dl:null,EL:null,AutoRegistrationMode:null
,AdT:null,Init:function(aArg){var B;A.zX([this,this.Bg6],this.QK.Q,0);A.zX([this
,this.Bei],[B=A._GetAutoObject(A.Device.Device),B.ASf,B.AZ1],0);A.zX([this,this.
Adv],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY],0);A.zX([this,this.Adv],[B=
A._GetAutoObject(A.Device.Device),B.Ug,B.UZ],0);A.pe([this,this.Bei],this);A.pe([
this,this.Adv],this);},Bg6:function(G){var F;A._GetAutoObject(A.Device.Device).Awq((
F=this.QK.Q,F[1].call(F[0])));},Bei:function(G){switch(A._GetAutoObject(A.Device.
Device).Ags){case 0:A._GetAutoObject(A.Device.Helper).JW(this.Ik,true);break;case
1:A._GetAutoObject(A.Device.Helper).JW(this.Ik,false);break;default:throw new Error(
BtG+A._GetAutoObject(A.Device.Device).Ags.toFixed());}},Adv:function(G){var F,CA;
if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dl.Q,CA[1].call(CA[0])))>12)(CA=this.
Dl.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cd._Init.call(this,aArg);C.BW._Init.call(this.QK={I:this},0);C.BW._Init.call(this.
Fx={I:this},0);C.AGB._Init.call(this.Ik={I:this},0);C.Io._Init.call(this.C_={I:this
},0);C.Io._Init.call(this.Dl={I:this},0);C.AvX._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdT._Init.
call(this.AdT={I:this},0);this.__proto__=C.AUf;var B;this.I8(A.aaR(A.acf.Aqm));this.
QK.H(AIE);this.QK.Aj(true);this.QK.T(A.aaR(A.acf.Aqm));this.QK.Bg(false);this.QK.
F0(-1);this.QK.EV(1);this.Fx.H(UV);this.Fx.Aj(true);this.Fx.Z(true);this.Fx.T(A.
aaR(A.acf.Aqj));this.Fx.Bg(true);this.Ik.H(Aag);this.Ik.Aj(true);this.Ik.Z(true);
this.Ik.T(A.aaR(A.acf.AEh));this.Ik.Bg(true);this.C_.H(Alh);this.C_.Aj(true);this.
C_.Z(true);this.C_.T(A.aaR(A.acf.AqD));this.C_.Bg(false);this.C_.F0(2);this.C_.EV(
6);this.C_.IM(A.aaR(A.acf.OB));this.C_.I9(A.aaR(A.acf.Ey));this.Dl.H(AcQ);this.Dl.
Aj(true);this.Dl.T(A.aaR(A.acf.Zn));this.Dl.Bg(true);this.Dl.F0(0);this.Dl.EV(12
);this.Dl.IM(A.aaR(A.acf.OB));this.Dl.I9(A.aaR(A.acf.Ey));this.EL.H(BtH);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bg(false);this.EL.ArZ(A.aaR(A.acf.Aql));this.AutoRegistrationMode.
As(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QK,0);this.
J(this.Fx,0);this.J(this.Ik,0);this.J(this.C_,0);this.J(this.Dl,0);this.J(this.EL
,0);this.QK.As([B=this.AutoRegistrationMode,B.B7,B.B8]);this.QK.CI(this.AutoRegistrationMode
);this.Fx.As([B=this.AdT,B.B7,B.B8]);this.Fx.CI(this.AdT);this.Ik.Uj([B=A._GetAutoObject(
A.Device.Device),B.Wt,B.AZ5]);this.Ik.Akw([B=A._GetAutoObject(A.Device.Device),B.
Awa,B.AyG]);this.C_.As([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Dl.
As([B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ]);this.EL.DB(A.aaL(A.ach.AjX));
this.EL.OM([B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.EL.PN([B=A._GetAutoObject(
A.Device.Device),B.Ug,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cd;this.QK._Done();this.Fx._Done();this.Ik._Done();this.C_._Done();this.Dl._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdT._Done();C.Cd._Done.
call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.QK._ReInit();this.Fx.
_ReInit();this.Ik._ReInit();this.C_._ReInit();this.Dl._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdT._ReInit();this.I8(A.aaR(A.acf.Aqm
));this.QK.T(A.aaR(A.acf.Aqm));this.Fx.T(A.aaR(A.acf.Aqj));this.Ik.T(A.aaR(A.acf.
AEh));this.C_.T(A.aaR(A.acf.AqD));this.C_.IM(A.aaR(A.acf.OB));this.C_.I9(A.aaR(A.
acf.Ey));this.Dl.T(A.aaR(A.acf.Zn));this.Dl.IM(A.aaR(A.acf.OB));this.Dl.I9(A.aaR(
A.acf.Ey));this.EL.ArZ(A.aaR(A.acf.Aql));},_Mark:function(D){var B;C.Cd._Mark.call(
this,D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fx)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVj={OG:null,Fx:null,Ik:null,C_:null,Dl:null,EL:null,Afo:null,Init:function(
aArg){var B;A.zX([this,this.BeX],[B=A._GetAutoObject(A.Device.Device),B.ASI,B.A0g
],0);A.zX([this,this.Adv],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY],0);A.zX([
this,this.Adv],[B=A._GetAutoObject(A.Device.Device),B.Ug,B.UZ],0);A.pe([this,this.
BeX],this);A.pe([this,this.Adv],this);},BeX:function(G){var AK2=false;var AaP=false;
switch(A._GetAutoObject(A.Device.Device).Ak3){case 0:{AK2=false;AaP=false;}break;
case 1:{AK2=true;AaP=false;}break;case 2:{AK2=false;AaP=true;}break;default:throw new
Error(BtI+A._GetAutoObject(A.Device.Device).Ak3.toFixed());}A._GetAutoObject(A.Device.
Helper).JW(this.Ik,AK2);A._GetAutoObject(A.Device.Helper).JW(this.C_,AaP);A._GetAutoObject(
A.Device.Helper).JW(this.Dl,AaP);A._GetAutoObject(A.Device.Helper).JW(this.EL,AaP
);},Adv:function(G){var F,CA;if(((F=this.C_.Q,F[1].call(F[0]))+(CA=this.Dl.Q,CA[
1].call(CA[0])))>12)(CA=this.Dl.Q,CA[2].call(CA[0],12-(F=this.C_.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cd._Init.call(this,aArg);C.Io._Init.call(this.OG={
I:this},0);C.BW._Init.call(this.Fx={I:this},0);C.AGB._Init.call(this.Ik={I:this}
,0);C.Io._Init.call(this.C_={I:this},0);C.Io._Init.call(this.Dl={I:this},0);C.AvX.
_Init.call(this.EL={I:this},0);C.Afo._Init.call(this.Afo={I:this},0);this.__proto__=
C.AVj;var B;this.I8(A.aaR(A.acf.LinkTransponder));this.OG.H(AIE);this.OG.Aj(true
);this.OG.Z(true);this.OG.T(A.aaR(A.acf.A7t));this.OG.Bg(false);this.OG.F0(1);this.
OG.EV(365);this.OG.IM(A.aaR(A.acf.Ki));this.OG.I9(A.aaR(A.acf.GH));this.Fx.H(UV);
this.Fx.Aj(true);this.Fx.Z(true);this.Fx.T(A.aaR(A.acf.Aqj));this.Fx.Bg(true);this.
Ik.H(Aag);this.Ik.Aj(true);this.Ik.Z(true);this.Ik.T(A.aaR(A.acf.AEh));this.Ik.Bg(
false);this.C_.H(Alh);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.AqD
));this.C_.Bg(false);this.C_.F0(2);this.C_.EV(6);this.C_.IM(A.aaR(A.acf.OB));this.
C_.I9(A.aaR(A.acf.Ey));this.Dl.H(AcQ);this.Dl.Aj(true);this.Dl.T(A.aaR(A.acf.Zn)
);this.Dl.Bg(true);this.Dl.F0(0);this.Dl.EV(12);this.Dl.IM(A.aaR(A.acf.OB));this.
Dl.I9(A.aaR(A.acf.Ey));this.EL.H(Ayj);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bg(false);this.EL.ArZ(A.aaR(A.acf.Aql));this.J(this.OG,0);this.J(this.Fx,0);this.
J(this.Ik,0);this.J(this.C_,0);this.J(this.Dl,0);this.J(this.EL,0);this.OG.As([B=
A._GetAutoObject(A.Device.Device),B.A8I,B.Ba4]);this.Fx.As([B=this.Afo,B.B7,B.B8
]);this.Fx.CI(this.Afo);this.Ik.Uj([B=A._GetAutoObject(A.Device.Device),B.Wt,B.AZ5
]);this.Ik.Akw([B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyG]);this.C_.As([B=
A._GetAutoObject(A.Device.Device),B.Uf,B.UY]);this.Dl.As([B=A._GetAutoObject(A.Device.
Device),B.Ug,B.UZ]);this.EL.DB(A.aaL(A.ach.AjX));this.EL.OM([B=A._GetAutoObject(
A.Device.Device),B.Uf,B.UY]);this.EL.PN([B=A._GetAutoObject(A.Device.Device),B.Ug
,B.UZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.OG._Done();this.
Fx._Done();this.Ik._Done();this.C_._Done();this.Dl._Done();this.EL._Done();this.
Afo._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.
OG._ReInit();this.Fx._ReInit();this.Ik._ReInit();this.C_._ReInit();this.Dl._ReInit(
);this.EL._ReInit();this.Afo._ReInit();this.I8(A.aaR(A.acf.LinkTransponder));this.
OG.T(A.aaR(A.acf.A7t));this.OG.IM(A.aaR(A.acf.Ki));this.OG.I9(A.aaR(A.acf.GH));this.
Fx.T(A.aaR(A.acf.Aqj));this.Ik.T(A.aaR(A.acf.AEh));this.C_.T(A.aaR(A.acf.AqD));this.
C_.IM(A.aaR(A.acf.OB));this.C_.I9(A.aaR(A.acf.Ey));this.Dl.T(A.aaR(A.acf.Zn));this.
Dl.IM(A.aaR(A.acf.OB));this.Dl.I9(A.aaR(A.acf.Ey));this.EL.ArZ(A.aaR(A.acf.Aql));
},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.OG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ik)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afo={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bgj],[B=A._GetAutoObject(A.Device.Device),B.ASI,B.A0g],0);A.pe([
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
G){if(!this.B6)return;var A3O=this.Text.AGO(this.D6);var pos=this.Text.Afd(A3O);
this.CX.DL(A.abe(pos,[0,this.B6.Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IS.Bw){this.IS.Ar(false);this.IS.Ar(true);}if(this.LA){A.pe([this,this.
A4k],this);this.LA=false;}},AAv:function(G){if(!this.B6)return;var EH=this.Text.
AGO(this.D6);if(this.Cr.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnT(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ACZ(EH[1]).length,EH[1]];}}if(this.Cr.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnT(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cr.CO===4){var pos=this.Text.Afd(EH);var AaO=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.ATS(A.abe(pos,[0,AaO]));}if(this.Cr.CO===5
){var pos=this.Text.Afd(EH);var AaO=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.ATS(A.abf(pos,[0,AaO]));}var Vc=this.Text.AnT(EH);var Iu=this.Text.
String.charCodeAt(Vc)||0;if(((Iu===0x5E)||(Iu===0x7E))||(Iu===0x25))Vc=Vc-1;if(Vc
!==this.D6){this.D6=Vc;A.pe([this,this.Amj],this);this.LA=true;}},Beq:function(G
){if(!this.D6)return;var Iu=this.Text.String.charCodeAt(this.D6-1)||0;var CD=1;if(((
Iu===0x5E)||(Iu===0x7E))||(Iu===0x25))CD=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CD,CD));this.D6=this.D6-CD;this.LA=true;},AAw:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Iu=this.Text.String.charCodeAt(this.D6)||0;var CD=1;
if(Iu===0x25)CD=2;this.Text.R(A.ab1(this.Text.String,this.D6,CD));this.LA=true;}
,BeE:function(G){this.Text.R(A.abU(this.Text.String,BtJ,this.D6));this.D6=this.D6+
1;this.LA=true;},Bes:function(G){var Iu=this.AjB.DP;var Auj=String.fromCharCode(
Iu);A.ab5("%c",Iu);if((((Iu===0x5E)||(Iu===0x7E))||(Iu===0xAD))||(Iu===0x25))Auj=
BtK+String.fromCharCode(Iu);this.Text.R(A.abU(this.Text.String,Auj,this.D6));this.
D6=this.D6+Auj.length;this.LA=true;},_Init:function(aArg){A.acn.I$._Init.call(this
,aArg);A.acl.TE._Init.call(this.IS={I:this},0);A.Core.BN._Init.call(this.Cr={I:this
},0);A.Core.BN._Init.call(this.Amx={I:this},0);A.Core.BN._Init.call(this.R$={I:this
},0);A.Core.BN._Init.call(this.Anl={I:this},0);A.Core.BN._Init.call(this.AjB={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C5._Init.call(this.CX={
I:this},0);this.__proto__=C.I$;var B;this.H(BtL);this.IS.B2=false;this.IS.Cw=true;
this.IS.Fl(500);this.IS.Uk(500);this.Cr.Filter=147;this.Cr.Bw=false;this.Amx.Filter=
151;this.R$.Filter=44;this.Anl.Filter=149;this.AjB.Filter=145;this.Text.AZ(0x3F);
this.Text.H(BtM);this.Text.KS(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CX.DC(BtN);this.CX.DL(BtO);this.CX.A_y(2);this.CX.A_x(2);this.
CX.L(0xFF000000);this.CX.Z(false);this.J(this.Text,0);this.J(this.CX,0);this.IS.
Q=[B=this.CX,B.Fk,B.Z];this.Cr.BO=[this,this.AAv];this.Cr.D1=[this,this.AAv];this.
Amx.BO=[this,this.Beq];this.Amx.D1=[this,this.Beq];this.R$.BO=[this,this.AAw];this.
R$.D1=[this,this.AAw];this.Anl.BO=[this,this.BeE];this.Anl.D1=[this,this.BeE];this.
AjB.BO=[this,this.Bes];this.AjB.D1=[this,this.Bes];this.Text.Q1([this,this.Amj]);
this.Text.S(A.aaL(A.aci.ACM));this.B6=A.aaL(A.aci.ACM);},_Done:function(){this.__proto__=
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
B._cycle=D);},_className:"Application::TextEditor"};C.AU9={I$:null,DE:function(G
){switch(this.Cr.CO){case 6:A._GetAutoObject(A.Device.Device).AuO();break;case 7:
A._GetAutoObject(A.Device.Device).Aqn();break;case 4:A._GetAutoObject(A.Device.Device
).Ajz();break;case 5:A._GetAutoObject(A.Device.Device).Aqo();break;default:;}},Ev:
function(G){A._GetAutoObject(C.A$).Fv();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.I$._Init.call(this.I$={I:this},0);this.__proto__=C.AU9;this.H(Cc);this.
N.Z(true);this.Dq(C.AqZ);this.I$.H(E$);this.J(this.I$,0);this.Bb(this.I$);this.N.
CB=[this,this.Ev];this.N.CY(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.I$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.I$._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AT0={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AyN],[B=A._GetAutoObject(A.Device.Device),B.ASk,B.AZ2],0);},Wv:function(G){
if((!!this.Bj&&!!this.Bj.AX)&&(this.Bj.AX.Ca()>0)){if(this.AJB())A._GetAutoObject(
C.BH).Qw(A.aaR(A.acf.AOj),[this,this.AIF]);else A._GetAutoObject(C.BH).Qw(A.aaR(
A.acf.AOj),null);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.
AB7),[this,this.BaD]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).Qw(A.aaR(
A.acf.AG7),[this,this.A75]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).Qw(
A.aaR(A.acf.A5q),[this,this.BaC]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.
BH).Qw(A.aaR(A.acf.UnlinkTransponder),[this,this.BnA]);}else{A._GetAutoObject(C.
BH).XN(A.aaR(A.acf.AOj));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.
aaR(A.acf.AB7));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.
AG7));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.A5q));A.
_GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.A5P)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.
A58));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Anh)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Ds(6);},Abt:function(){return C.
AB3;},Abu:function(){return C.ADi;},Q6:function(G){A._GetAutoObject(A.Device.Device
).Am.Bl(A._GetAutoObject(A.Device.Helper).ACX());},HO:function(G){C.Q4.HO.call(this
,G);this.N.Cs(A.aaL(A.ach.AbD));this.N.Ck=[this,this.XB];this.N.FJ(A.jV);this.N.
C6(null);this.N.CV((A.aaR(A.acf.A5i)+Aai)+this.DataExportDestinationToString.BI(
A._GetAutoObject(A.Device.Device).VM));this.N.OO(false);this.N.OP(false);this.N.
I4.Dr(255);},AR9:function(G){A._GetAutoObject(A.Device.Device).Ds(0);var AiW=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A9(96,true,AiW.toFixed(),0,null);},AR_:function(G){A._GetAutoObject(A.Device.Device
).Ds(0);this.A5Y(this);},ASd:function(G){var B;A._GetAutoObject(A.Device.Device).
Ds(0);if(!A._GetAutoObject(A.Device.Device).VM&&!A._GetAutoObject(A.Device.Device
).Ut){A._GetAutoObject(A.Device.Device).A9(73,true,A.jV,0,[this,this.BeG]);return;
}if(A._GetAutoObject(A.Device.Device).Ard()===false){A.zX([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Aga]);return;}var AfX=null;switch(A._GetAutoObject(A.Device.Device
).VM){case 0:AfX=A._GetAutoObject(A.Device.Device).AnX(2);break;case 1:AfX=A._GetAutoObject(
A.Device.Device).AnX(3);break;default:throw new Error(BtP+A._GetAutoObject(A.Device.
Device).VM.toFixed());}if(AfX.An2){A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);this.Dz(A.aaR(A.acf.BnQ));A._GetAutoObject(A.Device.Device).AqB(AfX);}else A._GetAutoObject(
A.Device.Device).A9(97,true,A.jV,0,null);},AJB:function(){var Azv=this.Bj.AX;if(
!Azv)return false;return true;},XB:function(G){A._GetAutoObject(A.Device.Device).
UpdateOverlayMenu(16);},_Init:function(aArg){C.Q4._Init.call(this,aArg);A.Device.
DataExportDestinationToString._Init.call(this.DataExportDestinationToString={I:this
},0);this.__proto__=C.AT0;this.Dq(C.APp);this.Init(aArg);},_Done:function(){this.
__proto__=C.Q4;this.DataExportDestinationToString._Done();C.Q4._Done.call(this);
},_ReInit:function(){C.Q4._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q4._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADi={Pw:null,I3:null,_Init:function(aArg){C.Dc._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Pw={I:this},0);A.acg.Ap._Init.call(this.I3={I:this},0);this.__proto__=
C.ADi;this.Eq.Z(false);this.DS.Z(false);this.Pw.H(BtQ);this.Pw.L(A.jb.Text);this.
I3.H(BtR);this.I3.L(A.jb.Text);this.J(this.Pw,0);this.J(this.I3,0);this.Pw.Aw(A.
aaL(A.ach.AvD));this.I3.Aw(A.aaL(A.ach.Avy));},_Done:function(){this.__proto__=C.
Dc;this.Pw._Done();this.I3._Done();C.Dc._Done.call(this);},_ReInit:function(){C.
Dc._ReInit.call(this);this.Pw._ReInit();this.I3._ReInit();},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMU={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AAz],[B=A._GetAutoObject(A.Device.Device),B.AEt,B.AIJ],0);A.pe([this,this.
AAz],this);},Wv:function(G){if((!!this.Bj&&!!this.Bj.AX)&&(this.Bj.AX.Ca()>0)){if(
this.AJB())A._GetAutoObject(C.BH).Qw(A.aaR(A.acf.AOi),[this,this.AIF]);else A._GetAutoObject(
C.BH).XN(A.aaR(A.acf.AOi));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).Qw(
A.aaR(A.acf.AB5),[this,this.BaD]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.
BH).Qw(A.aaR(A.acf.AG7),[this,this.A75]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(
C.BH).Qw(A.aaR(A.acf.A5p),[this,this.BaC]);}else{A._GetAutoObject(C.BH).XN(A.aaR(
A.acf.AOi));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.AB5
));A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.AG7));A._GetAutoObject(
C.BH).Ft();A._GetAutoObject(C.BH).XN(A.aaR(A.acf.A5p));}A._GetAutoObject(C.BH).Ft(
);A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.A5P)+A.aaR(A.acf.Colon));A._GetAutoObject(
C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.A58));A._GetAutoObject(C.BH).Ft(
);A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Ds(6);},Abt:function(){return C.ABZ;},Abu:function(){return C.ADg;
},Q6:function(G){A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).AOF());},HO:function(G){C.Q4.HO.call(this,G);this.N.Cs(A.aaL(A.ach.AbD));
this.N.Ck=[this,this.XB];this.N.FJ(A.jV);this.N.C6(null);this.N.CV((A.aaR(A.acf.
A5i)+String.fromCharCode(0x0A))+A.aaR(A.acf.Bhc));this.N.OO(false);this.N.OP(false
);this.N.I4.Dr(255);},AR9:function(G){A._GetAutoObject(A.Device.Device).Ds(0);var
AiW=A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(
A.Device.Device).A9(96,true,AiW.toFixed(),0,null);},AR_:function(G){A._GetAutoObject(
A.Device.Device).Ds(0);this.A5X(this);},ASd:function(G){var B;A._GetAutoObject(A.
Device.Device).Ds(0);if(!A._GetAutoObject(A.Device.Device).Ut){A._GetAutoObject(
A.Device.Device).A9(73,true,A.jV,0,[this,this.BeG]);return;}if(A._GetAutoObject(
A.Device.Device).Ard()===false){A.zX([this,this.XC],[B=A._GetAutoObject(A.Device.
Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV,0,[this,
this.Aga]);return;}var AfX=A._GetAutoObject(A.Device.Device).AnX(0);if(AfX.An2){
A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();this.Dz(A.aaR(A.
acf.Bhd));A._GetAutoObject(A.Device.Device).AqB(AfX);}else A._GetAutoObject(A.Device.
Device).A9(70,true,A.jV,0,null);},AJB:function(){var Azv=this.Bj.AX;if(!Azv)return false;
var O;for(O=0;O<Azv.Ca();O++)if(A._GetAutoObject(A.Device.Helper).Aj6(Azv.AOT(O,
34))===false)return true;return false;},XB:function(G){A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(17);},AAz:function(G){if(A._GetAutoObject(A.Device.Device
).Aqq===1)A.pe([this,this.A54],this);},_Init:function(aArg){C.Q4._Init.call(this
,aArg);A.Device.DataExportDestinationToString._Init.call(this.DataExportDestinationToString={
I:this},0);this.__proto__=C.AMU;this.Dq(C.AOY);this.Init(aArg);},_Done:function(
){this.__proto__=C.Q4;this.DataExportDestinationToString._Done();C.Q4._Done.call(
this);},_ReInit:function(){C.Q4._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q4._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListScreen"
};C.AOY={DY:function(G){C.Aes.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdX(11));},_Init:function(aArg){C.Aes._Init.call(this,aArg);this.__proto__=
C.AOY;this.Text.R(A.aaR(A.acf.ABS));},_ReInit:function(){C.Aes._ReInit.call(this
);this.Text.R(A.aaR(A.acf.ABS));},_className:"Application::HeaderBirthRegistrationsList"
};C.APp={DY:function(G){C.Aes.DY.call(this,G);this.Dd.Aw(A._GetAutoObject(A.Device.
Converter).AdX(12));},_Init:function(aArg){C.Aes._Init.call(this,aArg);this.__proto__=
C.APp;this.Text.R(A.aaR(A.acf.AGa));},_ReInit:function(){C.Aes._ReInit.call(this
);this.Text.R(A.aaR(A.acf.AGa));},_className:"Application::HeaderPurchasedAnimalsList"
};C.AB3={Ka:0,AP:null,SO:null,Td:0,Init:function(aArg){},Bk:function(aSize){C.Ba.
Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.
abN(this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SO.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SO.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rf(this.
Ka));this.SO.R(A._GetAutoObject(A.acj.KK).ACO(this.Td));},Ce:function(Ad){if(!this.
AX)return;this.Hn=Ad;if(!!this.AX){this.Ka=this.AX.KN(Ad,26);this.Td=this.AX.HF(
Ad,4);this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CH._Init.call(this.SO={I:this},0);this.__proto__=C.AB3;
this.AP.H(AZX);this.AP.L(A.jb.Bc);this.SO.H(AZY);this.J(this.AP,0);this.J(this.SO
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SO.S(A.aaL(A.fl.Ak));
this.SO.A2(A.aaL(A.fl.Bh));this.SO.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SO._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SO._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SO.S(A.aaL(A.fl.Ak));this.SO.A2(A.
aaL(A.fl.Bh));this.SO.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SO)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUy={
AeS:null,Ab2:null,TM:null,KL:null,TK:null,NI:null,Tf:A.jV,Ai:function(Ae){var F;
C.SL.Ai.call(this,Ae);this.TM.L(this.V.AQ);var Apt=false;if((!this.Dj||!(F=this.
Dj,F[1].call(F[0])))&&!this.A8)Apt=true;this.TM.Z(Apt);this.Pp.Z(!Apt);this.VO.Z(
!Apt);this.QW.Z(!Apt);this.Yl.Z(!Apt);this.P0.Z(!Apt);},Adw:function(G){var B;var
F;if(!this.Tf.length){C.SL.Adw.call(this,G);return;}var BR=this.FU;var GB=A._GetAutoObject(
A.Device.AnN).Bfh(this.Tf);this.Tf=A.jV;if(!GB){A._GetAutoObject(A.Device.Device
).A9(101,true,A.jV,0,this.Ab2);A.pe(this.AeS,this);return;}if(this.Asi&&(GB>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).A9(102,true,A.jV,0,this.
Ab2);A.pe(this.AeS,this);return;}this.Ui(((B=(GB|0))<0)?B+0x100000000:B);if(this.
FU!==BR){if(!!this.Dj)(F=this.Dj,F[2].call(F[0],this.FU));A.abo(this.Dj,0);}if(!
!this.OF)A.pe(this.OF,this);},A2Z:function(G){if(this.Tf.length<10)this.Tf=this.
Tf+String.fromCharCode(this.KL.DP);},ASa:function(G){if((this.NI.DP===0x0D)||(this.
NI.DP===0x0A))this.Adw(this);else this.NI.NH=true;},ATc:function(E){if(A.aa0(this.
AeS,E))return;this.AeS=E;},ATd:function(E){if(A.aa0(this.Ab2,E))return;this.Ab2=
E;},_Init:function(aArg){C.SL._Init.call(this,aArg);A.acg.Text._Init.call(this.TM={
I:this},0);A.Core.BN._Init.call(this.KL={I:this},0);A.Core.BN._Init.call(this.TK={
I:this},0);A.Core.BN._Init.call(this.NI={I:this},0);this.__proto__=C.AUy;this.TM.
H(BtS);this.TM.I7(true);this.TM.A6(0x12);this.TM.R(A.aaR(A.acf.A5D));this.KL.Filter=
143;this.TK.Filter=149;this.NI.Filter=145;this.J(this.TM,0);this.TM.S(A.aaL(A.fl.
EK));this.KL.BO=[this,this.A2Z];this.TK.BO=[this,this.Bbr];this.NI.BO=[this,this.
ASa];},_Done:function(){this.__proto__=C.SL;this.TM._Done();this.KL._Done();this.
TK._Done();this.NI._Done();C.SL._Done.call(this);},_ReInit:function(){C.SL._ReInit.
call(this);this.TM._ReInit();this.KL._ReInit();this.TK._ReInit();this.NI._ReInit(
);this.TM.R(A.aaR(A.acf.A5D));this.TM.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SL._Mark.call(this,D);if((B=this.AeS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ab2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUC={AeS:null,Ab2:null,KL:null
,TK:null,NI:null,Tf:A.jV,IW:function(G){var F;if(!this.Tf.length){C.Q9.IW.call(this
,G);return;}if(this.Ash)return;if(!this.Tf.length)this.TK.NH=true;var BR=this.AM;
var GB=A._GetAutoObject(A.Device.AnN).BA3(this.Tf);this.Tf=A.jV;if(!GB){if((this.
Tf.length<13)&&!A._GetAutoObject(A.Device.Device).Ut)A._GetAutoObject(A.Device.Device
).A9(105,true,A.jV,0,this.Ab2);else A._GetAutoObject(A.Device.Device).A9(103,true
,A.jV,0,this.Ab2);A.pe(this.AeS,this);return;}this.By(GB);if(this.AM!==BR){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OF)A.pe(this.
OF,this);},A2Z:function(G){if(this.Ash)return;if(this.Tf.length<17)this.Tf=this.
Tf+String.fromCharCode(this.KL.DP);},ASa:function(G){if((this.NI.DP===0x0D)||(this.
NI.DP===0x0A))this.IW(this);else this.NI.NH=true;},ATc:function(E){if(A.aa0(this.
AeS,E))return;this.AeS=E;},ATd:function(E){if(A.aa0(this.Ab2,E))return;this.Ab2=
E;},_Init:function(aArg){C.Q9._Init.call(this,aArg);A.Core.BN._Init.call(this.KL={
I:this},0);A.Core.BN._Init.call(this.TK={I:this},0);A.Core.BN._Init.call(this.NI={
I:this},0);this.__proto__=C.AUC;this.Ar0(false);this.KL.Filter=143;this.TK.Filter=
149;this.NI.Filter=145;this.KL.BO=[this,this.A2Z];this.TK.BO=[this,this.Ati];this.
NI.BO=[this,this.ASa];},_Done:function(){this.__proto__=C.Q9;this.KL._Done();this.
TK._Done();this.NI._Done();C.Q9._Done.call(this);},_ReInit:function(){C.Q9._ReInit.
call(this);this.KL._ReInit();this.TK._ReInit();this.NI._ReInit();},_Mark:function(
D){var B;C.Q9._Mark.call(this,D);if((B=this.AeS)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ab2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APm={Aj2:null,Aj0:null,Gr:null,Q7:null,SG:null,C5:null,Init:function(aArg){var
B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Device),B.A8G,B.AFm],0);A.pe([
this,this.DY],this);},De:function(E){C.BS.De.call(this,E);this.Aj2.L(E);this.Aj0.
L(E);this.Q7.Zt(E);this.Gr.L(E);this.SG.Zt(E);},Ww:function(E){this.Q7.CT(E);this.
SG.CT(E);},DY:function(G){this.Q7.T(A._GetAutoObject(A.Device.Device).AvV.toFixed(
));A.pe([this,this.BCk],this);},BCk:function(G){var Ac9=A._GetAutoObject(A.Device.
Device).Am.Filter;A._GetAutoObject(A.Device.Device).Am.Bl(A._GetAutoObject(A.Device.
Helper).ACX());this.SG.T(A._GetAutoObject(A.Device.Device).Am.Ca().toFixed());A.
_GetAutoObject(A.Device.Device).Am.Bl(Ac9);},_Init:function(aArg){C.BS._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.call(this.Aj0={
I:this},0);A.acg.Ap._Init.call(this.Gr={I:this},0);C.D2._Init.call(this.Q7={I:this
},0);C.D2._Init.call(this.SG={I:this},0);A.acg.C5._Init.call(this.C5={I:this},0);
this.__proto__=C.APm;this.Aj2.H(P5);this.Aj0.H(BtT);this.Gr.H(BtU);this.Gr.L(A.jb.
CS);this.Q7.AZ(0x14);this.Q7.H(BtV);this.Q7.Zt(A.jb.Bm);this.Q7.CT(A.jb.Re);this.
Q7.Hh(2);this.Q7.Blx(0x11);this.SG.AZ(0x14);this.SG.H(BtW);this.SG.Zt(A.jb.Bm);this.
SG.CT(A.jb.Re);this.SG.Hh(2);this.C5.DC(AhQ);this.C5.DL(BtX);this.C5.L(A.jb.Bc);
this.J(this.Aj2,0);this.J(this.Aj0,0);this.J(this.Gr,0);this.J(this.Q7,0);this.J(
this.SG,0);this.J(this.C5,0);this.Aj2.Aw(A.aaL(A.ach.Avx));this.Aj0.Aw(A.aaL(A.ach.
APU));this.Gr.Aw(A.aaL(A.ach.Gr));this.Q7.S(A.aaL(A.fl.Bh));this.SG.S(A.aaL(A.fl.
Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BS;this.Aj2._Done();this.
Aj0._Done();this.Gr._Done();this.Q7._Done();this.SG._Done();this.C5._Done();C.BS.
_Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.Aj2._ReInit();
this.Aj0._ReInit();this.Gr._ReInit();this.Q7._ReInit();this.SG._ReInit();this.C5.
_ReInit();this.Q7.S(A.aaL(A.fl.Bh));this.SG.S(A.aaL(A.fl.Bh));},_Mark:function(D
){var B;C.BS._Mark.call(this,D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aj0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARB={Abh:null,Aem:null,VL:null,Init:function(aArg){this.Bb(this.Abh);},KR:function(
){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.XA];this.Bx.Ck=
null;this.Bx.Cl=[this,this.A22];this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(
A.ach.VZ));}return this.Bx;},AAs:function(G){var Aa=(C.Aji.isPrototypeOf(G)?G:null
);if(Aa===this.Abh)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aem)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$X);},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Aji._Init.call(this.
Abh={I:this},0);C.Aji._Init.call(this.Aem={I:this},0);C.ARF._Init.call(this.VL={
I:this},0);this.__proto__=C.ARB;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.ABX));this.
Abh.H(IR);this.Abh.T(A.aaR(A.acf.AjF));this.Aem.H(P7);this.Aem.T(A.aaR(A.acf.AGh
));this.VL.H(Aaf);this.VL.T(A.aaR(A.acf.A5a));this.J(this.Abh,0);this.J(this.Aem
,0);this.J(this.VL,0);this.Text.S(A.aaL(A.fl.Ak));this.Abh.AR=[this,this.AAs];this.
Aem.AR=[this,this.AAs];this.VL.ASS([B=A._GetAutoObject(A.Device.Device),B.AEx,B.
AIM]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fm;this.Abh._Done();this.
Aem._Done();this.VL._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.
call(this);this.Abh._ReInit();this.Aem._ReInit();this.VL._ReInit();this.Text.R(A.
aaR(A.acf.ABX));this.Abh.T(A.aaR(A.acf.AjF));this.Aem.T(A.aaR(A.acf.AGh));this.VL.
T(A.aaR(A.acf.A5a));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fm._Mark.
call(this,D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aem)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARA={AnimalTableFields:null,Ay:null,Y:
null,JM:null,CP:function(){this.AiH(this);},Init:function(aArg){A.zV([this,this.
AiH],this.AnimalTableFields,0);A.pe([this,this.AiH],this);},DE:function(G){C.Fm.
DE.call(this,G);this.MO(this);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(
C.N,0);this.Bx.CB=[this,this.Ev];this.Bx.Ck=[this,this.A20];this.Bx.Cl=[this,this.
A3t];this.Bx.C6(A.aaL(A.ach.Aq$));this.Bx.Cs(A.aaL(A.ach.Aq4));this.Bx.CY(A.aaL(
A.ach.VZ));}return this.Bx;},Ev:function(G){this.AA3();this.XA(this);},AiH:function(
G){this.Ao3();var O;for(O=0;O<this.AnimalTableFields.NP();O=O+1){var Aaq=A._GetAutoObject(
C.Amo).OD(O);this.A07(Aaq);}this.J(this.JM,0);A.aaS([this,this.MO],this);},Fe:function(
G){var B;this.Ay.Mu((B=this.Y.Db(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);
this.Ay.Mv(-this.Y.Br[1]);},MO:function(G){var B;this.Y.Vt(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HD(this.AV,true,null,null);},A07:function(
G6){var Ay6=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Sa,0);Aa.T(Ay6.BI(G6));Aa.Aj(true);Aa.G0=G6;Aa.A9W(this.AnimalTableFields.NU(G6
));this.J(Aa,0);this.ZE(Aa);},Ao3:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdL=X;X=X.Ah;if(((AdL.U&0x400)===0x400))this.HN(AdL);}}
,AA3:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JM)){var Aa=(C.Sa.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G0);if(Aa.ASq())this.AnimalTableFields.
AUu(Aa.G0);}else A.ab5("%s",Ayn);}X=X.Ah;}this.AnimalTableFields.Cq();},A20:function(
G){var B;var Aa=(C.Sa.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAk=(C.Sa.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAk){this.Ahw(AAk,Aa);A.pe([this,this.MO],this);}}},A3t:function(
G){var B;var Aa=(C.Sa.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAQ=(C.Sa.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAQ){this.Ahw(Aa,AAQ);A.pe([this,this.MO],this);}}},AqI:function(
G){var B;A._GetAutoObject(A.Device.Device).Asm(this);A.pe([this,this.AiH],this);
},_Init:function(aArg){C.Fm._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Au3._Init.call(this.JM={I:this},0);
this.__proto__=C.ARA;this.H(Rk);this.Text.R(A.aaR(A.acf.AGh));this.Ay.H(Iq);this.
Y.H(Bar);this.Y.JP(1);this.JM.H(AH4);this.JM.Aj(true);this.JM.T(A.aaR(A.acf.A5Q)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JM,0);this.Y.El=[this,this.Fe];
this.JM.AR=[this,this.AqI];this.AnimalTableFields=A._GetAutoObject(C.Amo);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fm;this.Ay._Done();this.Y._Done();this.
JM._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JM._ReInit();this.Text.R(A.aaR(A.acf.AGh));this.
JM.T(A.aaR(A.acf.A5Q));this.CP();},_Mark:function(D){var B;C.Fm._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARz={Y:null,BZ:null,C$:null,CG:null,GM:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UL:null,Init:function(aArg){A.zX([this,this.AuI],this.BZ.Q,0);A.zX([
this,this.AMZ],this.CG.Q,0);A.zX([this,this.AVN],this.GM.Q,0);A.zX([this,this.Avl
],this.C$.Q,0);this.Bb(this.BZ);},DE:function(G){C.Fm.DE.call(this,G);this.MO(this
);},KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.
XA];this.Bx.Ck=null;this.Bx.Cl=null;this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(
A.aaL(A.ach.VZ));}return this.Bx;},Fe:function(G){var B;this.Ay.Mu((B=this.Y.Db(
0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Br[1]);},MO:function(
G){var B;this.Y.Vt(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HD(
this.AV,true,null,null);},AuI:function(G){var F;A._GetAutoObject(A.Device.Device
).EB((F=this.BZ.Q,F[1].call(F[0])));},AVN:function(G){var F;A._GetAutoObject(A.Device.
Device).Ng((F=this.GM.Q,F[1].call(F[0])));},Avl:function(G){var F;A._GetAutoObject(
A.Device.Device).JQ((F=this.C$.Q,F[1].call(F[0])));},AMZ:function(G){var F;A._GetAutoObject(
A.Device.Device).NY((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fm._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.XM._Init.call(this.BZ={
I:this},0);C.XM._Init.call(this.C$={I:this},0);C.XM._Init.call(this.CG={I:this},
0);C.XM._Init.call(this.GM={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},
0);C.Breed._Init.call(this.Breed={I:this},0);C.UM._Init.call(this.UL={I:this},0);
this.__proto__=C.ARz;var B;this.H(Rk);this.Text.R(A.aaR(A.acf.AjF));this.Y.H(Bar
);this.Y.JP(1);this.BZ.H(AhV);this.BZ.Ar(true);this.BZ.Aj(true);this.BZ.T(A.aaR(
A.acf.Afp));this.C$.H(Ayf);this.C$.Ar(true);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.
Afk));this.CG.H(Aoq);this.CG.Ar(true);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed
));this.GM.H(As6);this.GM.Ar(true);this.GM.Aj(true);this.GM.T(A.aaR(A.acf.Jd));this.
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
O,0);this.CD=0;},J:function(Aak){if(this.CD>=17)A.ab5("%s",BtY);else{this.Als.Set(
this.CD,Aak);this.CD=this.CD+1;}},Cq:function(){},EM:function(Ah0){var AJX=Ah0.indexOf(
String.fromCharCode(0x2C),0);var A1u=A.jV;var O=0;this.CD=0;while(O<17)if(Ah0===
A.jV)O++;else{if(AJX===-1){A1u=Ah0;Ah0=A.jV;}else{A1u=A.abV(Ah0,AJX);Ah0=A.ab1(Ah0
,0,AJX+1);}var Aaq=A.abZ(A1u,0,10)|0;if(this.Bji(Aaq)){this.Als.Set(this.CD,Aaq);
this.CD=this.CD+1;O++;}AJX=Ah0.indexOf(String.fromCharCode(0x2C),0);}if(Ah0!==A.
jV)A.ab5("%s",BtZ);},toString:function(){var B;var AAi=A.jV;var O;for(O=0;O<this.
CD;O=O+1){if(O>0)AAi=AAi+AH6;AAi=AAi+(((B=this.Als.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAi;},Contains:function(Aak){var O;for(O=0;O<this.CD;O=O+1)if(this.Als.
Get(O)===Aak)return true;return false;},Bji:function(Aak){return true;},_Init:function(
aArg){(this.Als=[]).__proto__=C.Ams.Als;this.__proto__=C.Ams;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AL5={AfL:null,Init:function(aArg){var B;A.
zX([this,this.Bel],[B=A._GetAutoObject(A.Device.Device),B.A7_,B.BaK],0);A.zX([this
,this.Bem],[B=A._GetAutoObject(A.Device.Device),B.A7$,B.BaL],0);A.pe([this,this.
Bel],this);A.pe([this,this.Bem],this);},Clear:function(){C.Ams.Clear.call(this);
this.AfL.Clear();},Cq:function(){A._GetAutoObject(A.Device.Device).ArD(this.AfL.
toString());A._GetAutoObject(A.Device.Device).ArE(this.toString());},Bel:function(
G){this.AfL.EM(A._GetAutoObject(A.Device.Device).ABA);A.we(this,0);},Bem:function(
G){this.EM(A._GetAutoObject(A.Device.Device).ABB);A.we(this,0);},NU:function(Aak
){return this.AfL.Contains(Aak);},AUu:function(Aak){if(!this.NU(Aak))this.AfL.J(
Aak);},AOG:function(){return this.AfL.NP();},_Init:function(aArg){C.Ams._Init.call(
this,aArg);this.__proto__=C.AL5;this.AfL=A._NewObject(C.Ams,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Ams._Mark.call(this,D);if((B=this.AfL)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amo={_Init:function(){C.AL5._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARF={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hh(10);},Bk:function(aSize){C.T9.Bk.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.T9.
Ai.call(this,Ae);var G$=((Ae&0x10)===0x10);var Fq=((Ae&0x20)===0x20);var GA=this.
Bo.Bw;var FN=A.jb.Ad_;var GQ=A.jb.Bm;if(this.Hf){FN=A.jb.Bm;GQ=A.jb.Text;}if(!G$
){this.Background.L(FN);this.V.L(A.jb.CK);}else if(GA){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fq){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FN);this.V.L(GQ);}this.LI=G$;this.KE=Fq;this.Qn=GA;},_Init:function(
aArg){C.T9._Init.call(this,aArg);this.__proto__=C.ARF;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.ATZ={YK:null,AjK:null,KR:function(){if(
!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.CB=[this,this.XA];this.Bx.Ck=null;
this.Bx.Cl=null;this.Bx.CV(A.jV);this.Bx.Cs(null);this.Bx.CY(A.aaL(A.ach.VZ));}return this.
Bx;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.XM._Init.call(this.
YK={I:this},0);C.VM._Init.call(this.AjK={I:this},0);this.__proto__=C.ATZ;var B;this.
H(J0);this.YK.H(J0);this.YK.T(A.aaR(A.acf.A5B));this.AjK.As(A._GetAutoObject(A.Device.
Device).VM);this.J(this.YK,0);this.YK.Wy(A.aaL(A.fl.Hr));this.YK.Wz(A.aaL(A.fl.Hr
));this.YK.As([B=this.AjK,B.B7,B.B8]);this.YK.CI(this.AjK);this.AjK.BlK([B=A._GetAutoObject(
A.Device.Device),B.ASk,B.AZ2]);},_Done:function(){this.__proto__=C.OverlayMenu;this.
YK._Done();this.AjK._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){
C.OverlayMenu._ReInit.call(this);this.YK._ReInit();this.AjK._ReInit();this.YK.T(
A.aaR(A.acf.A5B));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((
B=this.YK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjK)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::PurchasedAnimalsListOverlayMenu"};C.VM={Abd:null,DataExportDestinationToString:
null,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.BI(aIndex);},DU:function(A7){return A7;},HH:function(
){return 1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Abd)(F=this.Abd
,F[2].call(F[0],E));},BlK:function(E){if(A.aaZ(this.Abd,E))return;if(!!this.Abd)
A.z$([this,this.ApN],this.Abd,0);this.Abd=E;if(!!this.Abd)A.zX([this,this.ApN],this.
Abd,0);A.pe([this,this.ApN],this);},ApN:function(G){var F;if(!!this.Abd)this.Q=(
F=this.Abd,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.VM;},
_Done:function(){this.__proto__=C.AC;this.DataExportDestinationToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Abd)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.AMT={
YR:null,Ak8:null,KR:function(){if(!this.Bx){this.Bx=A._NewObject(C.N,0);this.Bx.
CB=[this,this.XA];this.Bx.Ck=null;this.Bx.Cl=null;this.Bx.CV(A.jV);this.Bx.Cs(null
);this.Bx.CY(A.aaL(A.ach.VZ));}return this.Bx;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.XM._Init.call(this.YR={I:this},0);C.AD5._Init.call(this.
Ak8={I:this},0);this.__proto__=C.AMT;var B;this.H(J0);this.YR.H(J0);this.YR.T(A.
aaR(A.acf.Display));this.Ak8.As(A._GetAutoObject(A.Device.Device).Aqq);this.J(this.
YR,0);this.YR.Wy(A.aaL(A.fl.Hr));this.YR.Wz(A.aaL(A.fl.Hr));this.YR.As([B=this.Ak8
,B.B7,B.B8]);this.YR.CI(this.Ak8);this.Ak8.BmP([B=A._GetAutoObject(A.Device.Device
),B.AEt,B.AIJ]);},_Done:function(){this.__proto__=C.OverlayMenu;this.YR._Done();
this.Ak8._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.YR._ReInit();this.Ak8._ReInit();this.YR.T(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.YR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ak8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.AD5={AbQ:null,ListViewScopeToString:
null,Do:function(){return 2;},C4:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.BI(aIndex);},DU:function(A7){return A7;},HH:function(){return 1;
},As:function(E){var F;C.AC.As.call(this,E);if(!!this.AbQ)(F=this.AbQ,F[2].call(
F[0],E));},BmP:function(E){if(A.aaZ(this.AbQ,E))return;if(!!this.AbQ)A.z$([this,
this.ApN],this.AbQ,0);this.AbQ=E;if(!!this.AbQ)A.zX([this,this.ApN],this.AbQ,0);
A.pe([this,this.ApN],this);},ApN:function(G){var F;if(!!this.AbQ)this.Q=(F=this.
AbQ,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B7,this.B8],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.AD5;},_Done:function(){this.__proto__=
C.AC;this.ListViewScopeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AbQ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};C.AU8={AB_:0,AB9:0,Ai:function(Ae){C.OV.Ai.call(this
,Ae);this.Background.L(this.AB9);this.V.L(this.AB_);},BlE:function(E){if(this.AB_===
E)return;this.AB_=E;this.An();},BlD:function(E){if(this.AB9===E)return;this.AB9=
E;this.An();},_Init:function(aArg){C.OV._Init.call(this,aArg);this.__proto__=C.AU8;
this.Ar(false);this.AB_=A.jb.Text;this.AB9=A.jb.CK;},_className:"Application::TextCaptionItem"
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
,_className:"Application::WeightValuePrecision"};C.AUA={Uz:null,A$n:A.jV,Init:function(
aArg){},Bk:function(aSize){C.BW.Bk.call(this,[aSize[0],80]);this.Background.H(A.
abK(this.Background.M,aSize));this.Uz.H([0,80,aSize[0],aSize[1]]);},Ai:function(
Ae){C.BW.Ai.call(this,Ae);this.Uz.L(this.V.AQ);},Bnh:function(E){if(this.A$n===E
)return;this.A$n=E;this.Uz.R(E);},_Init:function(aArg){C.BW._Init.call(this,aArg
);C.CH._Init.call(this.Uz={I:this},0);this.__proto__=C.AUA;this.H(AcP);this.Uz.H(
Bt0);this.J(this.Uz,0);this.Uz.S(A.aaL(A.fl.Af));this.Uz.A2(A.aaL(A.fl.Ak));this.
Uz.Cu(null);this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.Uz._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.Uz._ReInit(
);this.Uz.S(A.aaL(A.fl.Af));this.Uz.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;
C.BW._Mark.call(this,D);if((B=this.Uz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupSubCaption"};C.Y7={MassDeregistrationCriterionToString:
null,Do:function(){return 2;},FX:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BI(this.C4(aIndex));},_Init:function(
aArg){C.Cm._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Y7;this.
Cf.Set(0,0);this.Cf.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANM={Vf:null
,Y7:null,Y9:null,Mq:null,At5:0,Init:function(aArg){this.Bb(this.Y9);},Ai:function(
Ae){C.Ei.Ai.call(this,Ae);var BBT=((A.aaR(A.acf.Aqx)+A.aaR(A.acf.Colon))+CQ)+this.
At5.toFixed();this.Mq.Bnh(BBT);},CF:function(G){C.Ei.CF.call(this,G);A.zX([this,
this.ALo],this.Mq.Q,0);A.pe([this,this.ALo],this);},E3:function(G){C.Ei.E3.call(
this,G);A.z$([this,this.ALo],this.Mq.Q,0);},DJ:function(G){C.Ei.DJ.call(this,G);
if((this.AV===this.Mq)&&!this.At5)this.N.HQ.Dr(100);else this.N.HQ.Dr(255);},BeB:
function(G){if(this.At5>0)A._GetAutoObject(A.Device.Device).A9(108,true,this.At5.
toFixed(),0,[this,this.Bz8]);},ALo:function(G){var F;this.At5=A._GetAutoObject(A.
Device.Helper).BiG((F=this.Mq.Q,F[1].call(F[0])));this.An();A.pe([this,this.MG],
this);},Bev:function(G){var B;if(!A._GetAutoObject(A.Device.Device).Am.Ca()){A._GetAutoObject(
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
Device.Device),B.Wu,B.Xd],0);if(!!this.Vf)A.pe(this.Vf,this);this.Vf=null;}},Bz8:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===7))A.pe([this,this.BBO],this);},BBO:function(G){A._GetAutoObject(A.
Device.Helper).Bx6(this.Y7.Q);A._GetAutoObject(A.Device.Device).A9(109,true,this.
At5.toFixed(),0,null);A.pe([this,this.MG],this);A.pe([this,this.ALo],this);},_Init:
function(aArg){C.Ei._Init.call(this,aArg);C.Y7._Init.call(this.Y7={I:this},0);C.
Co._Init.call(this.Y9={I:this},0);C.AUA._Init.call(this.Mq={I:this},0);this.__proto__=
C.ANM;var B;this.Dq(C.AO0);this.Y9.H(IR);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.
A6e));this.Y9.Bg(false);this.Mq.H(Bt1);this.Mq.Aj(true);this.Mq.T(A.aaR(A.acf.A$D
));this.Mq.Bg(true);this.Mq.A_n(A.aaR(A.acf.Ok));this.J(this.Y9,0);this.J(this.Mq
,0);this.Y9.AR=[this,this.Bev];this.Mq.AR=[this,this.BeB];this.Mq.AeT([this,this.
BeB]);this.Mq.As([B=this.Y7,B.B7,B.B8]);this.Mq.CI(this.Y7);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.Y7._Done();this.Y9._Done();this.Mq._Done();C.
Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y7._ReInit(
);this.Y9._ReInit();this.Mq._ReInit();this.Y9.T(A.aaR(A.acf.A6e));this.Mq.T(A.aaR(
A.acf.A$D));this.Mq.A_n(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Y7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Mq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AO0={_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO0;this.
Text.R(A.aaR(A.acf.XP));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(
A.aaR(A.acf.XP));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANP={
Vf:null,Y8:null,AbU:null,Init:function(aArg){this.Bb(this.Y8);A.pe([this,this.MG
],this);},Beu:function(G){var B;var Az3=A._GetAutoObject(A.Device.Device).ADR();
switch(Az3){case 1:A._GetAutoObject(A.Device.Device).A9(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A9(91,true,UW,0,[this,this.BeO]);break;
case 2:{this.Vf=[this,this.Beu];A.zX([this,this.XC],[B=A._GetAutoObject(A.Device.
Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV,0,[this,
this.Aga]);}break;default:throw new Error(Bas+Az3.toFixed());}},Aga:function(G){
var B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5)){A.z$([this,this.XC],[B=A._GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);this.
Vf=null;}},XC:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhN===3){A.
_GetAutoObject(A.Device.Device).A9(74,false,A.jV,0,[this,this.Aga]);A.z$([this,this.
XC],[B=A._GetAutoObject(A.Device.Device),B.Wu,B.Xd],0);if(!!this.Vf)A.pe(this.Vf
,this);this.Vf=null;}},BeQ:function(G){var B;var Az3=A._GetAutoObject(A.Device.Device
).ADS();switch(Az3){case 1:A._GetAutoObject(A.Device.Device).A9(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A9(95,true,A.jV,0,[this,this.Bz9
]);break;case 2:{this.Vf=[this,this.BeQ];A.zX([this,this.XC],[B=A._GetAutoObject(
A.Device.Device),B.Wu,B.Xd],0);A._GetAutoObject(A.Device.Device).A9(74,true,A.jV
,0,[this,this.Aga]);}break;case 3:A._GetAutoObject(A.Device.Device).A9(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A9(93,true,A.jV,0,null
);break;default:throw new Error(Bas+Az3.toFixed());}},BeO:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(At.Id){case 91:if(At.PopupState===
9)A.aaS([this,this.ByJ],this);break;case 92:if(At.PopupState===9)A.aaS([this,this.
ByL],this);break;default:throw new Error(Bt2+At.Id.toFixed());}},ByJ:function(G){
if(A._GetAutoObject(A.Device.Device).ACh()){var A2L=A._GetAutoObject(A.Device.Device
).Am.QE();A._GetAutoObject(A.Device.Device).A9(80,true,A2L.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A9(82,true,A.jV,0,null);A.aaS([this,this.Bz4],
this);},ByL:function(G){if(A._GetAutoObject(A.Device.Device).AGm()){var A2L=A._GetAutoObject(
A.Device.Device).Am.QE();A._GetAutoObject(A.Device.Device).A9(81,true,A2L.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A9(83,true,A.jV,0,null);A.aaS([
this,this.BAG],this);},Bz9:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A.pe([this,this.BBP],this);},BBP:function(
G){A._GetAutoObject(A.Device.Device).A9(92,true,UW,0,[this,this.BeO]);},BAG:function(
G){A._GetAutoObject(A.Device.Device).A9(92,false,A.jV,0,null);},Bz4:function(G){
A._GetAutoObject(A.Device.Device).A9(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ei._Init.call(this,aArg);C.Co._Init.call(this.Y8={I:this},0);C.Co._Init.call(
this.AbU={I:this},0);this.__proto__=C.ANP;this.Dq(C.AO3);this.Y8.H(IR);this.Y8.Aj(
true);this.Y8.T(A.aaR(A.acf.ACh));this.Y8.Bg(false);this.AbU.H(P7);this.AbU.Aj(true
);this.AbU.T(A.aaR(A.acf.AGm));this.AbU.Bg(true);this.J(this.Y8,-1);this.J(this.
AbU,-1);this.Y8.AR=[this,this.Beu];this.AbU.AR=[this,this.BeQ];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ei;this.Y8._Done();this.AbU._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Y8._ReInit();this.AbU.
_ReInit();this.Y8.T(A.aaR(A.acf.ACh));this.AbU.T(A.aaR(A.acf.AGm));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbU)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO3={
_Init:function(aArg){C.KO._Init.call(this,aArg);this.__proto__=C.AO3;this.Text.R(
A.aaR(A.acf.ACn));},_ReInit:function(){C.KO._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACn));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.Tu={NW:null
,AT6:0,ADU:false,ADQ:false,ADV:false,Al0:function(G){this.A5U(this);},AS_:function(
E){if(this.NW===E)return;this.NW=E;if(!this.NW)return;this.DO.AutoActions=E;A.zV([
this,this.BBy],this.NW,0);},AL6:function(){this.AL9(A.aaR(A.acf.A$L),[this,this.
BB5],[this,this.A8B,this.AFd]);this.AL9(A.aaR(A.acf.AGb),[this,this.BB3],[this,this.
A8y,this.AFb]);this.AL9(A.aaR(A.acf.An3),[this,this.BB4],[this,this.A8z,this.AFc
]);A._GetAutoObject(C.BH).Ft();A._GetAutoObject(C.BH).MZ(A.aaR(A.acf.BnL)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BH).Ft();},AL9:function(Bwy,BxJ,Bw3){if(!this.NW
)return;this.AL8(Bwy,BxJ,Bw3);},BB5:function(G){this.AFd(!this.ADV);},BB3:function(
G){this.AFb(!this.ADQ);},BB4:function(G){this.AFc(!this.ADU);},A30:function(ED,Bw2
){if(!this.NW)return;if(Bw2)this.NW.BgN(ED);else this.NW.Bn4(ED);this.NW.Cq();},
A4G:function(Ac6,Ac7,Bx1){A._GetAutoObject(C.BH).AuA(Ac6,Ac7,[this,this.A8S,this.
ATl],Bx1);},AGz:function(ED){if(!this.NW)return;this.NW.AGz(ED);this.NW.Cq();},AFd:
function(E){if(this.ADV===E)return;this.ADV=E;this.A30(256,E);A.abo([this,this.A8B
,this.AFd],0);},AFb:function(E){if(this.ADQ===E)return;this.ADQ=E;this.A30(2,E);
A.abo([this,this.A8y,this.AFb],0);},AFc:function(E){if(this.ADU===E)return;this.
ADU=E;this.A30(1,E);A.abo([this,this.A8z,this.AFc],0);},BBy:function(G){this.AFd(
this.NW.Contains(256));this.AFb(this.NW.Contains(2));this.AFc(this.NW.Contains(1
));if(this.NW.NP()>0)this.ATl(this.NW.OD(this.NW.NP()-1));},ATl:function(E){if(this.
AT6===E)return;this.AT6=E;A.abo([this,this.A8S,this.ATl],0);},A8B:function(){return this.
ADV;},A8y:function(){return this.ADQ;},A8z:function(){return this.ADU;},A8S:function(
){return this.AT6;},_Init:function(aArg){C.GU._Init.call(this,aArg);this.__proto__=
C.Tu;},_Mark:function(D){var B;C.GU._Mark.call(this,D);if((B=this.NW)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvU={Q:null,Cq:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADO:
function(ED){switch(ED){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Kd:function(G){var F;if(!!this.Q)this.EM((F=
this.Q,F[1].call(F[0])));A.we(this,0);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Kd],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Kd],E,
0);if(!!E)A.pe([this,this.Kd],this);},AGz:function(ED){if(this.NP()>0)this.Axs(this.
NP()-1,ED);},BgN:function(ED){if(this.Contains(ED))return;if(this.CD>=17){A.ab5(
"%s",AH5);return;}var AzW=0;for(;(AzW<=this.NP())&&(this.OD(AzW)<ED);AzW++);var AA8=
this.NP()-1;this.J(this.OD(AA8));for(;AA8>AzW;AA8--)this.Axs(AA8,this.OD(AA8-1));
this.Axs(AzW,ED);},Bn4:function(ED){var index=this.DU(ED);if(index<0)return;for(;
index<(this.NP()-1);index++)this.Axs(index,this.OD(index+1));this.Axs(index,0);this.
CD--;},_Init:function(aArg){C.Vs._Init.call(this,aArg);this.__proto__=C.AvU;},_Mark:
function(D){var B;C.Vs._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.Av3={_Init:
function(){C.AvU._Init.call(this,0);var B;this.As([B=A._GetAutoObject(A.Device.Device
),B.A8L,B.Ba7]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.Av4={_Init:function(){C.AvU._Init.call(this,0);var B;this.As([B=A._GetAutoObject(
A.Device.Device),B.A8M,B.Ba8]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AxZ={_Init:function(){C.AvU._Init.call(this,0);var B;this.As([B=
A._GetAutoObject(A.Device.Device),B.A9i,B.Bbk]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ADk={QO:null,AjW:null,_Init:function(aArg
){C.Dc._Init.call(this,aArg);C.CH._Init.call(this.QO={I:this},0);A.acg.Ap._Init.
call(this.AjW={I:this},0);this.__proto__=C.ADk;this.Eq.H(Bt3);this.DS.H(Bt4);this.
QO.H(Bt5);this.QO.R(A.aaR(A.acf.Ud));this.QO.A6(0x11);this.QO.L(A.jb.Text);this.
AjW.H(AZU);this.AjW.L(A.jb.Text);this.J(this.QO,0);this.J(this.AjW,0);this.QO.S(
A.aaL(A.fl.Af));this.QO.A2(A.aaL(A.fl.Ak));this.QO.Cu(A.aaL(A.fl.Bh));this.AjW.Aw(
A.aaL(A.ach.Avw));},_Done:function(){this.__proto__=C.Dc;this.QO._Done();this.AjW.
_Done();C.Dc._Done.call(this);},_ReInit:function(){C.Dc._ReInit.call(this);this.
QO._ReInit();this.AjW._ReInit();this.QO.R(A.aaR(A.acf.Ud));this.QO.S(A.aaL(A.fl.
Af));this.QO.A2(A.aaL(A.fl.Ak));this.QO.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dc._Mark.call(this,D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.AB2={AP:null,SQ:null,OW:null,AKs:A.jV,Bd0:A.jV,Md:0,Init:function(aArg){},Bk:
function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OW.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OW.M[2]-1,0,this.OW.M[2]+1,
aSize[1]]);this.SQ.H([this.OW.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OW.L(this.V.AQ);this.SQ.L(this.V.AQ);this.T(this.AKs);this.
OW.R(this.Bd0);this.SQ.R(this.Md.toFixed());},Ce:function(Ad){if(!this.AX)return;
this.Hn=Ad;if(!!this.AX){var Ka=this.AX.KN(Ad,26);var A2D=A._GetAutoObject(A.Device.
Converter).Rf(Ka);this.AKs=A.abV(A2D,A2D.length-5);this.Bd0=A.ab2(A2D,5);if((A._GetAutoObject(
A.Device.Converter).ZZ(Ka)===10)&&!(Math.trunc(Ka/10000000000)%100))this.AKs=A.ab1(
this.AKs,3,2);this.Md=this.AX.CE(Ad,1);this.An();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CH._Init.call(this.SQ={
I:this},0);C.CH._Init.call(this.OW={I:this},0);this.__proto__=C.AB2;this.V.H(Bt6
);this.AP.H(AZX);this.AP.L(A.jb.Bc);this.SQ.H(AZY);this.OW.H(Bt7);this.J(this.AP
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
"Application::CalfListNaisIdAnimalIdItem"};C.APt={Q:null,Init:function(aArg){var
B;this.AAY(this);this.As([B=A._GetAutoObject(A.Device.Device).Am,B.Fj,B.Fn]);},AEG:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DQ(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
N3(FilterCriterion);var Ai3=this.Awd();if((Ai3.length>0)&&(Ai3!==UW)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,Ai3,0,6,false);Filter.CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeW(false);},AAY:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fg(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DQ(26,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C2],E,0);if(!!E)A.pe([this
,this.C2],this);},C2:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AW.AS3(A.jV);return;}var BbR=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DQ(26,4))?B:null);if(!BbR){this.AW.AS3(UW);this.AW.
AeW(true);}else this.AW.AS3(BbR.A4);},_Init:function(aArg){C.AjS._Init.call(this
,aArg);this.__proto__=C.APt;this.AW.AwI(0);this.AW.BmB(true);this.AW.Di=[this,this.
AEG];this.Init(aArg);},_Mark:function(D){var B;C.AjS._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVl={Fx:null,C_:null,Dl:null,EL:null,AsK:null,Init:function(aArg){var B;A.zX([
this,this.BeY],[B=A._GetAutoObject(A.Device.Device),B.ASJ,B.A0h],0);A.zX([this,this.
Adv],[B=A._GetAutoObject(A.Device.Device),B.Uf,B.UY],0);A.zX([this,this.Adv],[B=
A._GetAutoObject(A.Device.Device),B.Ug,B.UZ],0);A.pe([this,this.BeY],this);A.pe([
this,this.Adv],this);},BeY:function(G){var AaP=false;switch(A._GetAutoObject(A.Device.
Device).An8){case 0:AaP=false;break;case 3:AaP=true;break;default:throw new Error(
Bt8+A._GetAutoObject(A.Device.Device).An8.toFixed());}A._GetAutoObject(A.Device.
Helper).JW(this.C_,AaP);A._GetAutoObject(A.Device.Helper).JW(this.Dl,AaP);A._GetAutoObject(
A.Device.Helper).JW(this.EL,AaP);},Adv:function(G){var F,CA;if(((F=this.C_.Q,F[1
].call(F[0]))+(CA=this.Dl.Q,CA[1].call(CA[0])))>12)(CA=this.Dl.Q,CA[2].call(CA[0
],12-(F=this.C_.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cd._Init.call(this
,aArg);C.BW._Init.call(this.Fx={I:this},0);C.Io._Init.call(this.C_={I:this},0);C.
Io._Init.call(this.Dl={I:this},0);C.AvX._Init.call(this.EL={I:this},0);C.AVk._Init.
call(this.AsK={I:this},0);this.__proto__=C.AVl;var B;this.I8(A.aaR(A.acf.UnlinkTransponder
));this.Fx.H(UV);this.Fx.Aj(true);this.Fx.Z(true);this.Fx.T(A.aaR(A.acf.Aqj));this.
Fx.Bg(true);this.C_.H(Alh);this.C_.Aj(true);this.C_.Z(true);this.C_.T(A.aaR(A.acf.
AqD));this.C_.Bg(false);this.C_.F0(2);this.C_.EV(6);this.C_.IM(A.aaR(A.acf.OB));
this.C_.I9(A.aaR(A.acf.Ey));this.Dl.H(AcQ);this.Dl.Aj(true);this.Dl.T(A.aaR(A.acf.
Zn));this.Dl.Bg(true);this.Dl.F0(0);this.Dl.EV(12);this.Dl.IM(A.aaR(A.acf.OB));this.
Dl.I9(A.aaR(A.acf.Ey));this.EL.H(Ayj);this.EL.Ar(true);this.EL.Aj(true);this.EL.
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
A.acf.Zn));this.Dl.IM(A.aaR(A.acf.OB));this.Dl.I9(A.aaR(A.acf.Ey));this.EL.ArZ(A.
aaR(A.acf.Aql));},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.Fx).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVk={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bgo],[B=A._GetAutoObject(A.Device.Device),B.ASJ,B.A0h],0);A.pe([
this,this.Bgo],this);},Do:function(){return 2;},FX:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BI(this.C4(aIndex));},As:function(E){C.Cm.As.call(this,E);A._GetAutoObject(A.Device.
Device).Aw_(E);},Bgo:function(G){this.Q=A._GetAutoObject(A.Device.Device).An8;A.
abo([this,this.B7,this.B8],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVk;this.Cf.Set(0,0);this.Cf.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMG.__proto__=A.Core.Root;C.AB.__proto__=C.Abj;C.WH.__proto__=
A.Core.P;C.Ox.__proto__=A.Core.P;C.ZA.__proto__=A.acl.Gh;C.Ej.__proto__=A.Core.P;
C.X1.__proto__=C.AB;C.AUN.__proto__=C.AB;C.Avu.__proto__=C.AB;C.Q8.__proto__=C.AB;
C.Fi.__proto__=C.Hc;C.Ay.__proto__=A.Core.P;C.Cd.__proto__=C.AB;C.AqZ.__proto__=
C.BS;C.BS.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADc.__proto__=C.AmY;C.AGR.
__proto__=C.DR;C.Co.__proto__=C.OV;C.Dt.__proto__=C.Eg;C.Io.__proto__=C.Dt;C.BW.
__proto__=C.Dt;C.SL.__proto__=C.Dt;C.OI.__proto__=C.Cm;C.Rb.__proto__=C.AC;C.AU2.
__proto__=C.Ba;C.F$.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GU.__proto__=C.AB;C.
AB1.__proto__=C.Ba;C.Ad8.__proto__=C.AB;C.Mi.__proto__=C.Ox;C.AUX.__proto__=C.AB;
C.AqY.__proto__=C.ADc;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUD.__proto__=C.Acq;C.EA.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asq.__proto__=A.Core.P;C.AGD.__proto__=C.Dt;C.CH.__proto__=A.Core.P;C.
AjR.__proto__=C.Yt;C.Amr.__proto__=C.Ra;C.Aht.__proto__=A.Core.P;C.Ei.__proto__=
C.AB;C.ATP.__proto__=C.AB;C.Ml.__proto__=C.Co;C.Anj.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abj;C.APJ.__proto__=C.OverlayMenu;C.GG.__proto__=A.Core.P;C.Abj.__proto__=
A.Core.P;C.AUI.__proto__=A.acl.Aek;C.AmY.__proto__=C.BS;C.ADd.__proto__=C.AmY;C.
Ki.__proto__=C.AC;C.AUF.__proto__=C.Dt;C.AGc.__proto__=C.AB;C.HY.__proto__=C.AB;
C.Wp.__proto__=C.Arp;C.IG.__proto__=C.ADd;C.I0.__proto__=C.AB;C.AMe.__proto__=C.
AGc;C.AMa.__proto__=C.GU;C.ANu.__proto__=C.GU;C.Aeo.__proto__=C.Co;C.Qy.__proto__=
C.Aeo;C.APw.__proto__=C.BS;C.AjS.__proto__=C.BS;C.DF.__proto__=C.Ey;C.AW.__proto__=
A.Core.P;C.Ga.__proto__=C.AC;C.Afj.__proto__=C.BW;C.AT7.__proto__=C.AB;C.AbV.__proto__=
C.Co;C.T9.__proto__=C.Co;C.ANG.__proto__=C.Cd;C.AU4.__proto__=C.Cd;C.ANT.__proto__=
C.Cd;C.AUh.__proto__=C.Cd;C.WX.__proto__=A.Core.P;C.QR.__proto__=C.Fi;C.D2.__proto__=
A.Core.P;C.T5.__proto__=C.AB;C.AVC.__proto__=C.GU;C.AMf.__proto__=C.AxX;C.AVn.__proto__=
C.Cd;C.AeM.__proto__=C.AC;C.AxX.__proto__=C.AB;C.AVL.__proto__=C.Cd;C.AUE.__proto__=
C.Acq;C.ABy.__proto__=A.Graphics.Hv;C.Aqf.__proto__=C.AB;C.ARw.__proto__=A.Core.
P;C.Fm.__proto__=C.OverlayMenu;C.XM.__proto__=C.BW;C.Aji.__proto__=C.Co;C.ALY.__proto__=
C.Fm;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AL3.__proto__=C.Vs;C.AL4.
__proto__=C.Fm;C.Sa.__proto__=C.T9;C.AML.__proto__=C.Vs;C.Wh.__proto__=C.Fi;C.Vp.
__proto__=A.Core.P;C.Kt.__proto__=A.Core.P;C.ARU.__proto__=C.HY;C.AT_.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANv.__proto__=C.Amr;C.Hc.__proto__=A.
Core.P;C.AVE.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aa3.
__proto__=C.Ga;C.AxP.__proto__=C.ABy;C.ATK.__proto__=C.OverlayMenu;C.AOA.__proto__=
A.Core.P;C.N0.__proto__=A.Core.P;C.ATL.__proto__=A.Core.P;C.AUH.__proto__=A.acl.
Aek;C.AkT.__proto__=C.Io;C.Amu.__proto__=C.OverlayMenu;C.AB4.__proto__=C.Ba;C.Yu.
__proto__=C.AjS;C.AqH.__proto__=C.HY;C.Acp.__proto__=C.Dt;C.WeightRecordingScope.
__proto__=C.AC;C.AuF.__proto__=C.AB;C.AUG.__proto__=C.Io;C.AMc.__proto__=C.AB;C.
Arp.__proto__=C.HY;C.AHa.__proto__=A.Core.P;C.AVH.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeO.__proto__=C.Eg;C.AvY.__proto__=C.AeO;C.SetTransponderScreen.__proto__=
C.Q8;C.ADl.__proto__=C.EA;C.AHe.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Me.__proto__=C.Q8;C.ALW.__proto__=C.Me;C.ManualActionScanScreen.__proto__=C.Me;
C.ALX.__proto__=A.Core.P;C.APA.__proto__=C.Dc;C.ADj.__proto__=C.Dc;C.TS.__proto__=
C.Dc;C.APC.__proto__=C.Dc;C.AM$.__proto__=C.Ba;C.M2.__proto__=C.Ba;C.AM9.__proto__=
C.Ba;C.Jo.__proto__=A.Core.P;C.AM8.__proto__=C.Ba;C.AmX.__proto__=C.TD;C.AF4.__proto__=
C.Axi;C.AkH.__proto__=C.Axi;C.Zz.__proto__=C.AkH;C.ANC.__proto__=C.OV;C.OV.__proto__=
C.Hc;C.APF.__proto__=C.EA;C.DS.__proto__=A.Core.P;C.AM5.__proto__=C.AjA;C.ADf.__proto__=
C.TT;C.Kh.__proto__=A.Core.P;C.AmF.__proto__=C.Ml;C.AOX.__proto__=C.Km;C.AutoRegistrationMode.
__proto__=C.AC;C.APG.__proto__=C.EA;C.Tx.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMq.__proto__=C.RT;C.AME.__proto__=C.AaZ;C.AMz.__proto__=C.AaZ;C.AT9.__proto__=
C.Ba;C.APE.__proto__=C.EA;C.AMt.__proto__=C.AaZ;C.IC.__proto__=C.IZ;C.RN.__proto__=
C.Fu;C.RR.__proto__=C.Fu;C.Tw.__proto__=C.JG;C.Qx.__proto__=C.Fu;C.Tv.__proto__=
C.JG;C.AMb.__proto__=C.Aqf;C.AQV.__proto__=C.Cd;C.AaZ.__proto__=C.D9;C.JH.__proto__=
C.Cm;C.ARs.__proto__=C.Cd;C.AMo.__proto__=C.K_;C.AMp.__proto__=C.D9;C.AMm.__proto__=
C.K_;C.AMn.__proto__=C.K_;C.WJ.__proto__=C.Eg;C.AUB.__proto__=C.WJ;C.RS.__proto__=
C.Fu;C.APv.__proto__=C.IG;C.ANw.__proto__=C.AB;C.ANd.__proto__=C.Ad8;C.AL$.__proto__=
C.I0;C.AVB.__proto__=C.I0;C.AOZ.__proto__=C.Km;C.APx.__proto__=C.Km;C.APB.__proto__=
C.TT;C.AM_.__proto__=C.AjA;C.TT.__proto__=C.Dc;C.Aqt.__proto__=A.acv.ACc;C.AjA.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AMW.__proto__=C.DR;C.O0.__proto__=C.DR;C.AqW.__proto__=
A.Core.P;C.AMv.__proto__=C.F$;C.AUb.__proto__=A.Core.P;C.K_.__proto__=C.D9;C.AND.
__proto__=C.Cd;C.Au3.__proto__=C.Co;C.AC$.__proto__=C.BS;C.ADa.__proto__=C.BS;C.
Fu.__proto__=C.JG;C.AOD.__proto__=C.GU;C.AOC.__proto__=C.I0;C.APb.__proto__=C.Km;
C.ADh.__proto__=C.Dc;C.AB0.__proto__=C.Ba;C.AT8.__proto__=C.Aht;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.AR6.
__proto__=C.Tu;C.AR5.__proto__=C.I0;C.ADb.__proto__=C.Km;C.ABJ.__proto__=C.Ga;C.
AL1.__proto__=C.Fm;C.AMd.__proto__=C.AuF;C.NewAnimalSetTransponderScreen.__proto__=
C.Asv;C.C7.__proto__=C.AC;C.OZ.__proto__=A.Core.P;C.RO.__proto__=C.Fu;C.RP.__proto__=
C.Fu;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARD.__proto__=C.OverlayMenu;
C.VL.__proto__=C.T9;C.AvX.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.Tx;
C.AnimalMultiInfoScreen.__proto__=C.Tx;C.AMs.__proto__=C.OverlayMenu;C.I5.__proto__=
A.Core.P;C.AL0.__proto__=C.GU;C.ALZ.__proto__=C.I0;C.APu.__proto__=C.IG;C.AsF.__proto__=
C.OZ;C.Aq_.__proto__=C.OZ;C.AuZ.__proto__=C.AC;C.AMk.__proto__=C.AC;C.AGC.__proto__=
C.Eg;C.GZ.__proto__=A.Core.P;C.AQY.__proto__=C.HI;C.AVs.__proto__=C.X1;C.ARQ.__proto__=
C.Wp;C.ADK.__proto__=C.Lg;C.HI.__proto__=C.GZ;C.Lg.__proto__=C.GZ;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvO.__proto__=C.HI;C.AUz.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asv;C.ReasonOfLeaving.__proto__=C.AC;C.OS.__proto__=C.BW;C.AeR.__proto__=
C.Ek;C.ARJ.__proto__=C.Ek;C.ARI.__proto__=C.Ek;C.Ek.__proto__=A.Core.P;C.Q9.__proto__=
C.Eg;C.AQZ.__proto__=C.Lg;C.AvN.__proto__=A.Core.P;C.Ey.__proto__=A.Core.P;C.Fw.
__proto__=C.AB;C.AOb.__proto__=C.AB;C.AOe.__proto__=C.Fw;C.AOf.__proto__=C.Fw;C.
AqK.__proto__=C.Fw;C.Abv.__proto__=C.AjR;C.Km.__proto__=C.AjR;C.Avs.__proto__=C.
Abv;C.AO$.__proto__=C.Abv;C.AO_.__proto__=C.Abv;C.AO9.__proto__=C.BS;C.Aev.__proto__=
C.EA;C.AmN.__proto__=C.Ba;C.Ajp.__proto__=C.IC;C.ACD.__proto__=A.Core.P;C.AkQ.__proto__=
A.Core.P;C.Ra.__proto__=C.AB;C.AU3.__proto__=C.Ra;C.APa.__proto__=C.BS;C.Dc.__proto__=
C.EA;C.KO.__proto__=C.BS;C.AO5.__proto__=C.KO;C.AO7.__proto__=C.KO;C.Yo.__proto__=
C.AmN;C.Agr.__proto__=C.Hc;C.AN0.__proto__=C.GU;C.ANZ.__proto__=C.I0;C.AO8.__proto__=
C.Km;C.Abq.__proto__=C.Acp;C.AjI.__proto__=C.Qy;C.ABU.__proto__=C.Qy;C.APz.__proto__=
C.Dc;C.AM7.__proto__=C.Ba;C.RQ.__proto__=C.Fu;C.AMl.__proto__=C.Fu;C.ANR.__proto__=
C.Ei;C.ANS.__proto__=C.Ei;C.AO6.__proto__=C.KO;C.Nc.__proto__=C.AbV;C.ANN.__proto__=
C.Ei;C.AO1.__proto__=C.KO;C.PK.__proto__=C.Co;C.Sb.__proto__=C.AB;C.AOc.__proto__=
C.Sb;C.AOd.__proto__=C.Sb;C.AOg.__proto__=C.AqK;C.AN$.__proto__=C.Fw;C.AaY.__proto__=
C.IC;C.Pi.__proto__=C.IC;C.AMx.__proto__=C.Amu;C.ARq.__proto__=C.T5;C.ARp.__proto__=
C.T5;C.AR1.__proto__=C.Tu;C.AR0.__proto__=C.I0;C.APo.__proto__=C.Km;C.Q4.__proto__=
C.GU;C.AUi.__proto__=C.I0;C.Aes.__proto__=C.Yt;C.ABZ.__proto__=C.Ba;C.ADg.__proto__=
C.Dc;C.APq.__proto__=C.BS;C.Aa1.__proto__=C.NE;C.XU.__proto__=C.NE;C.RT.__proto__=
C.D9;C.XV.__proto__=C.RT;C.XS.__proto__=C.IB;C.AaW.__proto__=C.IB;C.XR.__proto__=
C.IB;C.AaV.__proto__=C.IB;C.AMu.__proto__=C.AB;C.IB.__proto__=C.IZ;C.IZ.__proto__=
C.Hc;C.NE.__proto__=C.Fu;C.Axh.__proto__=C.Zz;C.ANB.__proto__=C.AmF;C.Axj.__proto__=
C.Zz;C.ATX.__proto__=C.Cd;C.ATV.__proto__=C.Ek;C.AQW.__proto__=C.Lg;C.ATW.__proto__=
C.Ek;C.NewMenu.__proto__=C.AB;C.ARR.__proto__=C.HY;C.AMw.__proto__=C.Amu;C.AMM.__proto__=
C.Vs;C.JG.__proto__=C.IZ;C.APs.__proto__=C.Yu;C.Abp.__proto__=C.Cm;C.APD.__proto__=
C.EA;C.MotherScanScreen.__proto__=C.Me;C.APr.__proto__=C.AqY;C.Jc.__proto__=A.Core.
P;C.APn.__proto__=C.BS;C.SetSaveNaisIdScreen.__proto__=C.Q8;C.AN1.__proto__=C.AqH;
C.UL.__proto__=C.Cm;C.UM.__proto__=C.UL;C.AcL.__proto__=C.UL;C.AdT.__proto__=C.AC;
C.AGB.__proto__=C.Eg;C.ANQ.__proto__=C.Ei;C.AO4.__proto__=C.KO;C.ANO.__proto__=C.
Ei;C.AO2.__proto__=C.KO;C.Am0.__proto__=C.TS;C.APy.__proto__=C.TS;C.Amz.__proto__=
C.M2;C.AM6.__proto__=C.M2;C.ARK.__proto__=C.AeR;C.Yt.__proto__=C.BS;C.Acq.__proto__=
C.BW;C.FE.__proto__=C.AC;C.AMA.__proto__=C.FE;C.AMB.__proto__=C.FE;C.AMh.__proto__=
C.I0;C.TD.__proto__=C.BW;C.ART.__proto__=C.AB;C.Asv.__proto__=C.SetTransponderScreen;
C.ADL.__proto__=C.HI;C.Asw.__proto__=C.OS;C.Axu.__proto__=C.OS;C.Act.__proto__=C.
Cm;C.AVR.__proto__=C.Tu;C.AVQ.__proto__=C.I0;C.AQ0.__proto__=A.Core.P;C.AQX.__proto__=
C.HI;C.ACI.__proto__=C.Abq;C.LW.__proto__=A.Core.P;C.AUg.__proto__=C.Cd;C.AUf.__proto__=
C.Cd;C.AVj.__proto__=C.Cd;C.Afo.__proto__=C.Cm;C.I$.__proto__=A.acn.I$;C.AU9.__proto__=
C.AB;C.AT0.__proto__=C.Q4;C.ADi.__proto__=C.Dc;C.AMU.__proto__=C.Q4;C.AOY.__proto__=
C.Aes;C.APp.__proto__=C.Aes;C.AB3.__proto__=C.Ba;C.AUy.__proto__=C.SL;C.AUC.__proto__=
C.Q9;C.APm.__proto__=C.BS;C.ARB.__proto__=C.Fm;C.ARA.__proto__=C.Fm;C.ARz.__proto__=
C.Fm;C.AL5.__proto__=C.Ams;C.ARF.__proto__=C.T9;C.ATZ.__proto__=C.OverlayMenu;C.
VM.__proto__=C.AC;C.AMT.__proto__=C.OverlayMenu;C.AD5.__proto__=C.AC;C.AU8.__proto__=
C.OV;C.AHf.__proto__=C.Cm;C.AUA.__proto__=C.BW;C.Y7.__proto__=C.Cm;C.ANM.__proto__=
C.Ei;C.AO0.__proto__=C.KO;C.ANP.__proto__=C.Ei;C.AO3.__proto__=C.KO;C.Tu.__proto__=
C.GU;C.AvU.__proto__=C.Vs;C.ADk.__proto__=C.Dc;C.AB2.__proto__=C.Ba;C.APt.__proto__=
C.AjS;C.AVl.__proto__=C.Cd;C.AVk.__proto__=C.Cm;};C._ReInit=function(){var B;if((
B=C.Axy._this))B._ReInit(),C.Axy._ReInit.call(B);if((B=C.Axz._this))B._ReInit(),
C.Axz._ReInit.call(B);if((B=C.A$._this))B._ReInit(),C.A$._ReInit.call(B);if((B=C.
Ph._this))B._ReInit(),C.Ph._ReInit.call(B);if((B=C.AutoActions._this))B._ReInit(
),C.AutoActions._ReInit.call(B);if((B=C.Aff._this))B._ReInit(),C.Aff._ReInit.call(
B);if((B=C.BH._this))B._ReInit(),C.BH._ReInit.call(B);if((B=C.WD._this))B._ReInit(
),C.WD._ReInit.call(B);if((B=C.Asx._this))B._ReInit(),C.Asx._ReInit.call(B);if((
B=C.AnW._this))B._ReInit(),C.AnW._ReInit.call(B);if((B=C.DO._this))B._ReInit(),C.
DO._ReInit.call(B);if((B=C.AuN._this))B._ReInit(),C.AuN._ReInit.call(B);if((B=C.
Amo._this))B._ReInit(),C.Amo._ReInit.call(B);if((B=C.Av3._this))B._ReInit(),C.Av3.
_ReInit.call(B);if((B=C.Av4._this))B._ReInit(),C.Av4._ReInit.call(B);if((B=C.AxZ.
_this))B._ReInit(),C.AxZ._ReInit.call(B);};C.DH=function(D){var B;if((B=C.Axy._this
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
null);if((B=C.Av4._this)&&(B._cycle!=D))B._Done(C.Av4._this=null);if((B=C.AxZ._this
)&&(B._cycle!=D))B._Done(C.AxZ._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */