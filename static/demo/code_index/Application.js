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
var Cc=[0,0,240,320];var BF=[0,0,240,40];var EZ=[0,0,20,30];var Hj=[6,21,14,25];var
I$=[6,15,14,19];var Io=[6,9,14,13];var OZ=[209,7,229,37];var P0=[0,40,240,320];var
P1=[0,228,240,298];var CO=" ";var E8=[0,40,240,280];var Lt=[0,40,232,280];var P2=[
0,40,116,160];var JX=[114,40,230,160];var N$=[0,160,116,280];var P3=[116,160,232
,280];var MF=[0,280,116,400];var S2=[116,280,232,400];var UM=[0,400,116,520];var
ZU=[116,400,232,520];var WT=[-1,520,115,640];var Ip=[232,40,240,280];var UN=[5,40
,235,120];var ZV=[120,140,210,230];var WU=[20,140,110,230];var ZW=[0,0,116,120];
var WV=[0,0,120,120];var ZX=[0,0,116,45];var ZY=[0,0,8,200];var UO=[0,0,8,20];var
WW=[30,0,210,40];var Rf=[0,0,40,40];var ZZ=[7,8,200,40];var O0=[0,0,200,40];var Rg=[
6,1];var WX="ERROR: Invalid value for ItemHighlighting";var WY=[10,10,40,30];var
WZ=[0,0,120,40];var W0=[60,0,180,40];var Z0=[120,0,240,40];var W1=[0,0,100,40];var
W2=[83,0,157,40];var S3=[140,0,240,40];var UP=[0,0,20,40];var Z1=[220,0,240,40];
var AcD=[0,0,300,30];var S4=[0,30,300,60];var Z2=[0,60,300,90];var Afp=[0,90,300
,120];var Z3=[0,100,300,110];var W3=[0,50,300,60];var Z4=[0,30,300,40];var Z5="*";
var Ak0=[40,40];var JY=[0,0,240,80];var Z6=[0,0,240,50];var Lu="Cap";var AhK=[0,
40,40,80];var An8=[200,40,240,80];var Oa=[30,40,210,80];var W4="--";var An9="%d";
var AhL="%m";var AhM="%Y";var AcE=" (";var UQ=[0,0,232,80];var An_="Date";var An$=[
48,40,88,78];var Aoa=[39,40,79,80];var Aob=[80,44,87,77];var Afq=".";var Ak1=[88
,44,120,77];var AxP=[120,44,127,77];var AxQ=[127,44,191,77];var O1=[0,0,80,40];var
Rh="Text";var AxR=[430,102,430,102];var UR=[0,0,240,240];var AsD=[232,0,240,240];
var AxS=[0,10,240,240];var AxT="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var AxU="Unhandled option";
var Aoc=[0,80,240,280];var Afr="Unhandled animal list action";var Aod="Animal list content not handled.";
var IN=[0,40,240,80];var Aoe="Set Selected";var W5="Unhandled AnimalListInfoItemMode ";
var Ak2=" %%";var AsE=[0,180,240,220];var AsF=[82,127,167,150];var AsG="Group";var
AsH=[77,91,167,124];var Ak3=[0,0,90,33];var AsI=[4,4,18,29];var AxV=[20,4,34,29];
var AxW=[36,4,50,29];var AVE=[52,4,66,29];var AVF=[68,4,82,29];var AsJ="ERROR: Unhandled Device::SyncState";
var AxX=":\n";var P4="{1}";var AxY="{2}";var AVG=[0,49,240,109];var AVH=[0,170,240
,243];var AVI=[0,110,240,170];var AVJ=[20,243,220,268];var AHb=[30,8];var AHc="\u2265 ";
var Afs=[0,0,240,160];var Aof=[0,0,0,0];var AVK=[0,0,240,66];var AHd=[10,0,76,66
];var Ak4=[33,33];var AHe=[87,0,153,66];var AHf=[164,0,230,66];var AHg="No statistics available";
var AVL="in this environment.";var AVM=" fps";var AVN="CPU: - %%";var AcF=[0,0,240
,120];var AVO=[130,0,237,20];var AHh=[20,0,120,20];var AsK=[0,20,240,40];var AHi=[
40,20,100,40];var AHj=[100,20,240,40];var AxZ=[0,40,240,60];var AHk=[40,40,100,60
];var Ax0=[100,40,240,60];var AVP=[0,60,50,80];var AVQ=[100,60,240,80];var AVR=[
0,80,50,100];var AVS=[100,80,240,100];var AHl=[0,100,50,120];var AVT=[100,100,240
,120];var O2=[5,5,15,15];var Ax1="%H";var AVU="%M";var AVV="Time";var AVW=[79,40
,119,78];var AVX=[125,40,164,80];var AVY=[86,40,126,80];var AVZ=":";var AV0=[75,
40,115,80];var Ax2=[0,0,240,150];var AsL=[60,0,155,40];var AsM=[30,0,65,40];var AV1=[
60,0,100,40];var AV2=[88,0,128,40];var AV3=[60,0,71,40];var AV4=[60,0,74,40];var
AHm=[90,0,123,40];var AV5=[120,0,161,40];var AHn=[120,0,165,40];var AHo=[60,0,88
,40];var AHp=[60,0,95,40];var AV6="Did not expect iterator bigger than number of records";
var AHq=[20,0,240,20];var AHr=[0,38,240,40];var AV7=[0,0,8,4];var Ri=[0,0,240,280
];var W6=[0,280,240,320];var AV8="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AV9="]";var AV_="ERROR: Cannot find closing bracket \'}\' in text [";var AV$=
"] opened at index ";var AWa="#";var AWb="ERROR: Invalid parameter: {";var AWc="}";
var AhN=[20,20];var AHs=[0,12];var AWd="ERROR: Not expected Application::FooterFocus, ";
var AWe="%M:%S";var AHt=[30,150,207,170];var AHu=[20,70,217,194];var Ax3="Unhandled item.";
var P5=[0,80,240,120];var AWf="Unhandled Overlay Menu ";var AWg="Invalid bootloader message: ";
var AWh="Unknown USBState: ";var AsN="Invalid fader";var AWi=[2,4,32,40];var AWj=[
29,4,80,40];var AWk=[120,4,200,40];var AWl=[80,0,114,40];var AWm="-1";var AWn="< ";
var AsO=[0,0,232,40];var AWo=[22,40,180,80];var AWp=[2,40,22,80];var AWq=[23,40,
163,80];var AWr=[210,40,230,80];var AWs=[164,40,210,80];var AWt=[169,43,205,77];
var AWu="ERROR: No outlet assigned";var AWv="Unhandled screen";var AWw="ERROR: Cannot cache null screen.";
var AWx="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHv="Untreated Rating Method type!";var Ak5="Unhandled animal type";var AWy=[
5,60,235,140];var AWz=[0,130,240,196];var AWA=[49,240,229,280];var Ax4="Implement in derived classes!";
var Ak6="Implement in derived class";var AhO=[0,40,230,120];var Ax5=[0,120,230,200
];var Aog=[0,200,230,280];var AhP=[0,280,230,360];var AWB=[0,360,230,440];var Ax6=[
230,40,238,280];var AHw="WARNING: Unhandled filter field: ";var Aft="Should not happen.";
var AHx="Invalid Boolean item";var Z7=[0,120,240,160];var Ak7=[0,160,240,200];var
Aoh=[0,200,240,240];var AWC=[1152,11,1392,51];var AWD=[1152,51,1392,91];var AWE=[
1152,91,1392,131];var AWF=[1152,131,1392,171];var AWG=[1152,171,1392,211];var AsP=[
0,240,240,280];var AHy=[10,0,240,40];var AHz=[190,0,230,40];var AWH=[60,3,95,39];
var AWI=[95,4,200,40];var AWJ=[3,3];var AWK=[6,6];var AWL=[59,5,197,35];var AWM=[
59,2,200,38];var AWN=[3,2,43,42];var AWO=[0,17,43,40];var AWP=[50,40];var AWQ=[50
,0];var AWR="Illegal shifting direction";var Ax7=[0,0,160,30];var AHA=[0,0,25,30
];var AHB=[27,0,52,30];var AHC=[54,0,79,30];var AHD=[81,0,106,30];var AHE=[108,0
,133,30];var AHF=[135,0,160,30];var AWS="Internal queue error";var AWT="ERROR: No corresponding Id ";
var AWU=" found.";var AWV="ERROR: Error in range test";var AWW=[120,67,210,157];
var AWX=[0,40,240,70];var AWY=[20,67,110,157];var Ax8=[0,160,240,280];var AHG=[20
,77,90,147];var AWZ=[0,0,210,40];var AHH=[195,0,235,40];var AhQ=[0,40,232,120];var
W7=[0,120,232,200];var AW0=[0,40,232,200];var Z8=[0,200,232,280];var AW1=[0,320,
240,400];var AW2=[0,120,53,200];var Aoi=[0,280,232,360];var Afu="%%";var Ak8=[0,
360,232,440];var AHI=[0,440,232,520];var AW3=[0,80,207,120];var O3=")";var AW4="/";
var AW5=[5,0,88,30];var AW6=[88,0,240,30];var AW7="276000312345678";var AHJ=[5,30
,100,60];var AsQ=[100,30,240,60];var Ax9="Manufacturer";var AW8="Country";var AW9=[
5,60,240,90];var AHK="Niedersachsen";var AHL=[5,90,145,120];var AW_=[140,90,240,
120];var AHM="Protocol";var AW$=[0,0,120,100];var AHN=[0,40,116,120];var AXa=[40
,80,92,107];var AHO=[0,0,50,23];var AHP="ERROR: Unhandled Device::MeasureState";
var Ax_=[0,120,240,280];var AXb=[178,159,248,203];var AXc=[10,145,170,225];var AXd=[
0,61,240,101];var AXe=[0,0,40,23];var AXf=[101,113,141,136];var AXg=[101,235,141
,258];var AXh=[69,288,101,313];var AXi=[0,40,240,200];var AsR=[0,200,240,280];var
AsS=[0,280,240,360];var AHQ="\u2264 ";var AXj=[0,80,94,160];var AXk=[94,80,184,160
];var AXl=[184,80,240,160];var AHR=[197,105,231,139];var AXm=[105,101,173,127];var
AXn=[7,101,75,127];var AXo=[94,125,184,151];var AXp=[2,125,92,151];var AXq=[0,70
,240,101];var AXr=[0,106,240,280];var AXs=[30,40,240,70];var AXt=[0,40,30,70];var
AXu="\u278B";var AXv=[0,0,240,175];var AXw=[0,0,232,175];var AXx=[232,0,240,175];
var AXy="Text Here !";var AXz=[200,0,240,40];var Ax$="1";var AHS="2";var AsT="3";
var Aya="4";var Ayb=[0,360,232,400];var Ayc="ERROR: invalid item class.";var AHT=[
10,220,250,260];var AXA=[185,0,225,40];var AHU="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AXB="ERROR: Received more actions than expected!";var AHV=", ";var AXC=
"ERROR: Cannot set action at position=";var AXD=". Current elements:";var AXE=", max elements:";
var AXF="17";var AXG=[0,0,58,58];var AXH=[0,0,60,60];var AXI=[30,0,58,20];var AXJ=[
7,6,25,24];var AXK=[30,60,130,160];var AXL=[0,0,28,20];var AXM=[4,3,40,24];var AXN=[
0,0,42,27];var Ayd=[0,0,17,17];var AXO="Unknown direction of counting enum value: ";
var AXP="Unknown id generation method enum value: ";var Aye="Invalid animal id generation method: ";
var AsU="Unhandled popup id";var US="0";var AsV=";";var AXQ=[0,400,230,480];var AXR=[
5,120,235,200];var AXS=[0,640,230,760];var AHW=[0,0,300,200];var AXT=[20,40,220,
80];var AHX=[20,80,220,280];var AXU=[140,0,188,40];var AXV="ERROR: Row containing birth weight could not be loaded";
var AXW=[0,440,230,520];var AsW="ID";var AXX=[40,40,198,70];var AXY="Extra info: ";
var AHY=" -";var AXZ=[0,0,230,120];var AX0=[0,0,230,40];var AX1=[0,80,230,120];var
AX2="\xB0Brix";var AcG=[0,320,230,400];var AX3=[0,410,230,490];var AX4="ERROR: aNumberOfDays can not be < 0 ";
var AX5="{WEIGHTGAIN} ";var AX6="\xB1";var AHZ="+";var AX7="{WEIGHTGAIN}";var AX8=
"{DAYS}";var AX9="ERROR: aString can not be null";var AX_=[166,70,240,114];var AX$=[
0,60,160,120];var AYa=[30,0,240,60];var AH0=[1,6,29,54];var AYb=[30,60,240,120];
var AYc="Con";var AYd=[70,50,170,70];var AH1="Unhandled Device::NaisIdValidationResult: ";
var AH2="Unhandled PopupId";var AYe=[110,123,230,248];var AYf=[5,0,250,40];var AYg=[
102,0,186,40];var AYh=[153,0,240,40];var Rj="-";var AsX=[170,0,240,40];var AH3=[
220,0,320,30];var AH4=[200,20,300,50];var Aoj=[180,0,180,40];var Aok=[170,0,170,
40];var Ayf="Untreated state";var AYi="ERROR: Animal id scanned in an unexpected state : ";
var AH5="ERROR: Null animal id scanned.";var AYj=[40,40,235,100];var AYk=[120,100
,210,190];var AYl=[20,100,110,190];var AYm=[0,40,40,100];var AYn="\u278A";var AYo=
"Action untreated";var AYp="ERROR: No corresponding ";var AYq=" action found!";var
AYr="Unhandled action: ";var AYs=[0,190,240,220];var AYt=[0,220,232,280];var AYu=[
5,190,235,270];var AYv=[232,60];var AYw=[0,2];var AYx=[58,58];var AYy="A";var AYz=[
56,0,156,40];var Aol=[156,0,240,40];var AH6=" 7 ";var AYA=[40,0,156,40];var AH7=
"/-1/-2";var AH8=[72,0,144,40];var Z9="\n";var AH9="(";var AYB=[72,0,156,40];var
AH_="%y/%m";var AYC=[70,0,240,40];var Ayg=[70,0,120,40];var AYD=[160,0,245,40];var
AYE="- ";var Ayh=" - ";var AYF="{parc}{clr3}";var AYG="{clr0}/^{clr2}";var AYH="{clr0}/^{clr1}";
var AH$=[0,0,85,40];var Aom="?";var AIa=[0,0,120,140];var AYI=[0,0,116,40];var AIb=[
15,0,100,40];var AIc=[110,0,200,40];var Ak9=[0,0,34,34];var AYJ=[129,0,157,40];var
Aon=[0,0,25,25];var AYK="\u2611";var AId="\u2610";var AIe=[5,0,72,40];var AYL=[150
,0,240,40];var AYM=[72,0,139,40];var Ayi="Unvalid content class: ";var AYN=[0,320
,240,360];var AIf=[0,360,240,400];var AYO=[144,0,170,40];var AYP=[187,0,213,40];
var AYQ=[207,10,233,50];var AYR=[247,20,273,60];var AYS=[140,0,150,100];var AYT=[
165,0,175,100];var AYU=[185,0,195,100];var AYV=[205,0,215,100];var AYW=[211,0,233
,40];var AYX=[189,0,211,40];var AYY=[167,0,189,40];var AYZ=[145,0,167,40];var AIg=[
5,0,240,40];var Z_=[10,0,10,40];var AY0="= \u2211 ";var Ayj=[125,0,240,40];var AY1=[
130,0,170,40];var AY2="\xD8 ";var AY3=[100,10,116,36];var Aoo=[117,10,133,36];var
AY4=[135,10,151,36];var AY5="Implement in derieved class";var AsY=[0,80,240,240];
var AsZ=[0,120,232,160];var As0=[0,160,232,200];var As1=[0,200,232,240];var Ayk=[
0,240,232,280];var Aop=[0,320,232,360];var AIh=[-61,360,232,400];var As2=[0,100];
var AY6=[0,40,240,240];var AY7=[0,50000];var AY8=[0,500];var AY9=[0,0,240,105];var
AY_=[0,105,240,210];var AY$=[0,40,240,81];var AZa=[0,81,240,122];var AZb=[0,122,
240,163];var AZc=[0,163,240,205];var AZd=[0,205,240,240];var AZe=[0,200];var AZf=[
0,40,240,73];var Ayl=[0,0,30,40];var AZg=[0,40,30,80];var Aym=[60,40];var Ayn=[60
,0];var AZh=[10,0,40,40];var AIi=[0,190,240,260];var AZi=[0,130,240,190];var Ayo=[
40,40,200,130];var AZj=[90,230,170,253];var AZk=[80,190,170,223];var AIj=[0,130,
240,180];var AZl=[0,250,240,280];var AZm=[129,0,156,40];var AZn=[72,0,100,40];var
AZo=[100,0,129,40];var AZp=[78,8,103,33];var AIk=[0,0,300,120];var AZq=[1,-1];var
AZr=[20,40,240,120];var AZs=[20,0,240,40];var AZt=[0,118,240,120];var AZu=[0,20,
130,40];var AZv=[130,20,240,40];var AZw=[0,0,10,20];var AIl="\u2191";var AZx=[230
,0,240,20];var As3=[0,40,232,80];var AZy=[0,80,232,160];var AZz=[0,160,230,240];
var As4=" p. p.";var Ayp="Unknown animal type";var As5=[80,0,140,40];var Bqn=[50
,0,172,40];var Bqo=[172,0,240,40];var Bqp=[0,90,240,92];var A$2="Unhandled menu item";
var A$3=[0,0,50,30];var As6=[0,0,30,30];var Bqq="No AnimalActionTemperatureScreen found!";
var Bqr="840003123456789";var Bqs=[40,0,230,40];var Bqt=[50,10,230,30];var AZA="No AnimalMultiInfoScreen found!";
var AIm=[0,0,25,40];var A$4="/^";var A$5="?/?";var Bqu=[100,4,180,40];var Bqv=[65
,0,99,40];var Bqw=[165,0,200,40];var A$6=[0,0,60,40];var A$7="9999/^9999";var Bqx=
"Invalid index: ";var Bqy="Unknown AnimalIdGenerationMethod: ";var Bqz="Invalid gender: ";
var As7="Invalid input state: ";var BqA="Unhandled AnimalIdGenerationMethod";var
BqB=[42,35,67,75];var BqC=[5,35,39,75];var BqD=[70,40,228,70];var BqE="Invalid direction for setting focus";
var AhR="Invalid index";var BqF="Unvalid direction";var BqG=[0,0,42,30];var A$8=[
22,0,42,30];var BqH=[20,0,40,30];var BqI=[0,0,158,30];var A$9=[32,0,62,30];var A$_=[
64,0,94,30];var A$$=[96,0,126,30];var BqJ=[128,0,158,30];var BqK=" %% ";var BqL=[
0,70,240,220];var BqM=[0,237,240,307];var Baa="\n44 %% done";var BqN=[0,0,166,30
];var AIn=[0,0,12,30];var Ayq=[14,0,26,30];var AZB=[28,0,40,30];var AZC=[42,0,54
,30];var AZD=[56,0,68,30];var AZE=[70,0,82,30];var AZF=[84,0,96,30];var AZG=[98,
0,110,30];var Bab=[112,0,124,30];var AZH=[126,0,138,30];var BqO=[140,0,152,30];var
BqP=[154,0,166,30];var Bac=[20,0,46,30];var BqQ="\u2642";var BqR="{fnt3}\u2642{fnt1}";
var BqS="\u2640";var BqT="{fnt3}\u2640{fnt1}";var BqU="{parc}";var BqV=[30,30,210
,80];var BqW="Implement in derieved class!";var BqX=[60,4,226,34];var Bad=[30,4,
58,34];var Bae=[4,0,27,40];var BqY=[116,4,228,34];var BqZ=[60,4,86,34];var Bq0=[
88,4,114,34];var Aoq="Implement in derived class!";var Baf="Implement in derived class.";
var Bq1="Invalid nais id view: ";var Bq2=[0,35,240,75];var Bq3=[0,0,110,30];var Bq4=[
0,0,26,30];var Bq5="100";var AZI="\n\n";var Bq6=[240,240];var Bq7=[0,240];var Bq8=
"Unknown rated attribute: ";var Bq9=[120,80,240,280];var Bq_=[0,80,120,280];var AIo=
" %% (";var Ayr=" \xB1 ";var Ays=" (n = ";var AZJ=[0,80,232,120];var Bq$=[0,242,
232,282];var AZK=[0,280,232,320];var Bra=[35,0,200,40];var Brb=[1,0,31,40];var Brc=[
32,40];var Brd=[32,0];var Bre=[3,0,83,40];var Bag=[180,0,240,40];var Brf=[120,0,
180,40];var Brg=[65,0,125,40];var Brh=[0,0,120,200];var Bri=[0,40,120,150];var Bah=[
15,160,60,190];var Bai=[60,160,105,190];var Brj=[0,65,240,135];var Brk=[10,112,170
,192];var Brl=[178,129,248,173];var Brm=[0,40,240,110];var Brn=[10,98,170,178];var
Bro=[178,112,248,156];var Brp=[85,190,160,265];var Brq=[89,194,155,260];var Brr=[
26,190,111,250];var Brs=[125,181,225,211];var Brt=[100,220,183,250];var Bru="38.7";
var Brv=[180,220,225,250];var Brw="\xB0C";var Brx=[0,99,240,178];var Bry=[100,280
,140,320];var Brz=[0,26,240,105];var Baj=[30,40];var Bak=[30,0];var BrA=[149,0,200
,40];var BrB=[145,40];var BrC=[145,0];var BrD=[38,0,88,40];var AZL=[0,0,35,40];var
BrE=[0,0,50,40];var BrF=[40,0,200,40];var BrG=[95,0,145,40];var BrH=[65,5,223,35
];var AZM=[0,0,15,40];var BrI=[72,0,140,40];var Bal="\n(";var BrJ="%y/%m/%d";var
BrK="%y ";var BrL=" %m ";var BrM=" %d ";var BrN="20";var BrO=[225,0,240,40];var BrP=[
0,400,232,440];var BrQ=[0,440,232,480];var BrR=[0,480,232,520];var BrS=[0,520,232
,560];var BrT=[0,560,232,600];var BrU=[0,598,232,638];var BrV=[5,0,215,40];var BrW=[
215,8,240,33];var BrX="Implement in dervied class.";var BrY="ERROR: Unhandled temperature unit: ";
var AIp="ERROR: Unhandled mass unit: ";var BrZ=[-1,160,115,280];var Br0=[114,160
,230,280];var AZN=[116,40,232,160];var Ayt="Unknown weight class index: ";var Br1=
"< 35";var Br2="35 - 40";var Br3="40 - 45";var Br4="45 - 50";var Br5="\u2265 50";
var Br6="< 80";var Br7="80 - 90";var Br8="90 - 100";var Br9="100 - 110";var Br_=
"\u2265 110";var Bam="Unknown mass unit";var Br$=[143,0,193,40];var Ban=[192,0,240
,40];var Bsa=[44,28,44,28];var Bsb="0 %%";var Bsc=[-1,40,115,160];var Bsd=[117,40
,233,160];var Bse=[1,160,117,280];var Bsf=[114,158,230,278];var Bsg=[1,280,117,400
];var Bsh=[30,0,155,40];var Bao="\u2620";var AZO=[380,150,380,190];var Bap=[105,
0,155,50];var AZP=[190,1,240,41];var Bsi=[72,0,108,40];var Bsj=[108,0,180,40];var
Bsk=[60,0,94,40];var Bsl=[94,0,200,40];var Bsm="Scroll direction not supported.";
var Bsn=[44,0,207,40];var Bso=[207,0,240,40];var Bsp="99";var Bsq="Unknown birth type";
var Bsr=[44,0,189,40];var Bss=[5,0,44,40];var Bst=[44,0,240,40];var Bsu=[240,0,240
,40];var Bsv="\u25C9";var Baq="\u25CB";var Bsw=[75,4,215,34];var Bsx=[47,4,73,34
];var Bar=[17,4,45,34];var Bsy=[0,0,138,30];var Bsz=[47,4,215,34];var AZQ="Unhandled MotherSelectionFilterMode: ";
var BsA="Read only!";var BsB="actions array too small to hold all actions";var BsC=[
120,40];var BsD=[120,0];var BsE=[5,0,115,40];var BsF=[0,0,205,40];var BsG=[59,4,
170,34];var BsH=[59,1,173,37];var BsI=[175,1,205,37];var BsJ=[0,0,37,40];var BsK=[
115,98,205,188];var BsL=[0,40,235,100];var BsM=[2,200,240,280];var BsN=" 01234";
var BsO=[0,0];var BsP=[33,63];var BsQ=[25,56];var BsR="Unknown transponder image type: ";
var AIq=[0,0,82,82];var BsS=[0,0,81,26];var BsT=[105,120,195,210];var BsU=[10,140
,100,230];var Bas="Unhandled EartagNrAssignmentMode: ";var BsV="Unhandled Gender";
var BsW=[10,35,35,75];var BsX=[44,40,202,70];var BsY=[204,35,232,75];var BsZ="Unvalid FatoryResetScope";
var Bat=[0,120,240,200];var Bs0=[144,0,192,40];var Bs1=[144,0,240,40];var Bs2=[195
,0,245,50];var Bs3=[120,0,120,40];var Bs4=[140,0,240,30];var Bs5=[30,0,232,40];var
Bs6=[60,0,160,40];var Bs7=[160,0,200,40];var Bs8=[150,17,200,40];var Bs9=[155,40
];var Bs_=[155,0];var Bs$=[146,80,240,160];var Bta=[56,80,146,160];var Btb=[0,80
,56,160];var Btc=[13,107,47,141];var Btd=[74,109,104,139];var Bte=[50,100,130,150
];var Btf=[55,112,145,140];var Btg=[146,112,236,140];var Bth=[150,86,223,110];var
AIr=[0,40,240,120];var Bti="Menu item for animal table field not found";var Bau=[
0,360,240,440];var Btj=[0,440,240,520];var Btk=[5,40,235,104];var Btl=[120,108,226
,218];var Btm=[20,120,110,210];var Btn=[5,223,235,280];var Bto=[0,0,64,30];var Btp=[
44,0,64,30];var Btq=[185,5,225,35];var Btr=[170,5,234,35];var Bts="Unhandled number of digits";
var Btt=[0,0,126,30];var Btu=[22,5,149,35];var Btv=[149,0,232,40];var Bav=[5,20];
var Btw=[5,0];var Btx="Unhandled AnimalIdAutoGenerationMethod: ";var Bty=[4,440,
236,520];var Btz="Unhandled TransponderAssignmentIdChangeMethod: ";var BtA="\n";
var BtB="%";var BtC=[0,0,160,120];var BtD=[2,2,157,117];var BtE=[50,70];var BtF=[
50,50];var BtG="Unhandled data export destination ";var BtH=[0,0,168,40];var BtI=[
168,0,240,40];var BtJ=[0,47,232,77];var BtK=[121,17,171,40];var Baw=[0,40,230,280
];var BtL="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BtM="ERROR: Received more animal table fields than expected!";
var BtN=[0,80,240,130];var BtO=[0,80,240,200];var Bax="Unhandled BackupError: ";
var BtP="Unhandled PopupId: ";var BtQ=[203,0,240,40];var BtR=[168,0,203,40];var BtS=[
35,0,152,40];var BtT=[0,0,84,40];var BtU=[84,0,167,40];
C.AMs={Device:null,A5U:null,GD:null,Init:function(aArg){},DriveCursorHitting:function(
S6,BG,E_){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GD._Init.call(this.
GD={I:this},0);this.__proto__=C.AMs;this.H(Cc);this.J(this.GD,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A5U=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lv=
this._variants();if(Lv){this.K={};Lv._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GD._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GD.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A5U)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GD)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A4Q._variants();
},K:null,_className:"Application::Application"};C.Asf=[240,320];C.AB={Background:
null,Eh:null,ACW:null,AnZ:0,Init:function(aArg){A.pe([this,this.A0n],this);A.pe([
this,this.BeE],this);},LN:function(G){},A0n:function(s){this.LN(s);},CB:function(
G){},AIt:function(s){this.CB(s);},EY:function(G){},Ayu:function(s){this.EY(s);},
Dn:function(E){if(this.ACW===E)return;this.ACW=E;A.pe([this,this.BeE],this);},BeE:
function(G){var B;if(!!this.ACW)this.Eh.AbV((C.BS.isPrototypeOf(B=A._NewObject(this.
ACW,0))?B:null));else this.Eh.AbV(null);},_Init:function(aArg){C.Aa9._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Eh._Init.call(this.
Eh={I:this},0);this.__proto__=C.AB;this.Background.A3(0x3F);this.Background.H(Cc
);this.Background.L(A.jb.CU);this.Eh.H(BF);this.Eh.Ar(false);this.J(this.Background
,-1);this.J(this.Eh,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Aa9;this.
Background._Done();this.Eh._Done();C.Aa9._Done.call(this);},_ReInit:function(){C.
Aa9._ReInit.call(this);this.Background._ReInit();this.Eh._ReInit();},_Mark:function(
D){var B;C.Aa9._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.Wy={KF:null,Zg:function(E){var B;if(this.KF===E)return;if(!!this.KF)this.Aqr(
this.KF,null,null,null,[B=this.KF,B.Ayu],null,false);this.KF=E;if(!!this.KF)this.
AkB(this.KF,null,null,null,null,null,null,[B=this.KF,B.AIt],null,false);},AEh:function(
){return this.KF;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Wy;this.H([0,0,C.Asf[0],C.Asf[1]]);},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.KF)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Ow={UX:null,Q:null,AnC:null,Zp:null,NL:null,Ou:null,Tz:null,TA:null,AF3:255,
J$:function(G){var F;if(!!this.Q){this.A1V();var Ac2=(F=this.Q,F[1].call(F[0]));
if(Ac2>20)this.Ou.L(A.jb.EW);else this.Ou.L(A.jb.Gb);this.Ou.L((this.Ou.AQ&0x00FFFFFF
)|(this.Aly(Ac2,0,30)<<24));this.Tz.L((this.Tz.AQ&0x00FFFFFF)|(this.Aly(Ac2,31,60
)<<24));this.TA.L((this.TA.AQ&0x00FFFFFF)|(this.Aly(Ac2,61,100)<<24));}},A0l:function(
s){this.J$(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0l],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0l],E,0);if(!!E)A.pe([this,
this.A0l],this);},A28:function(G){var F;if(!!this.AnC)this.Zp.Ar((F=this.AnC,F[1
].call(F[0])));else this.Zp.Ar(false);this.A_i(255);},A_b:function(E){if(A.aaZ(this.
AnC,E))return;if(!!this.AnC)A.z$([this,this.A28],this.AnC,0);this.AnC=E;if(!!E)A.
zX([this,this.A28],E,0);if(!!E)A.pe([this,this.A28],this);},A_i:function(E){if(this.
AF3===E)return;this.AF3=E;if(!!this.UX)this.UX.L((this.UX.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},Aly:function(A0r,BbT,Bw1){if(A0r<BbT)return 0;else if((A0r>=BbT)&&(A0r<
Bw1))return this.AF3&0xFF;else return 255;},A1V:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.UX=this.TA;else if((F=this.Q,F[1].call(F[0]))>
30)this.UX=this.Tz;else this.UX=this.Ou;}else this.UX=null;},BkT:function(){return this.
AF3;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);C.Zp._Init.call(this.Zp={
I:this},0);A.acg.Am._Init.call(this.NL={I:this},0);A.acg.AL._Init.call(this.Ou={
I:this},0);A.acg.AL._Init.call(this.Tz={I:this},0);A.acg.AL._Init.call(this.TA={
I:this},0);this.__proto__=C.Ow;this.H(EZ);this.Zp.Fj(2000);this.NL.H(EZ);this.NL.
L(A.jb.Text);this.Ou.H(Hj);this.Ou.L(A.jb.EW);this.Tz.H(I$);this.Tz.L(A.jb.EW);this.
TA.H(Io);this.TA.L(A.jb.EW);this.J(this.NL,0);this.J(this.Ou,0);this.J(this.Tz,0
);this.J(this.TA,0);this.Zp.Q=[this,this.BkT,this.A_i];this.NL.Aw(A.aaL(A.ach.AMD
));},_Done:function(){this.__proto__=A.Core.O;this.Zp._Done();this.NL._Done();this.
Ou._Done();this.Tz._Done();this.TA._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Zp._ReInit();this.NL._ReInit();this.Ou._ReInit(
);this.Tz._ReInit();this.TA._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.UX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnC)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Zp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tz
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.Zp={_Init:function(aArg){A.acl.Ge._Init.call(
this,aArg);this.__proto__=C.Zp;this.AkM=true;this.B3=0;this.Cw=255;},_className:
"Application::PulseAnimation"};C.Eh={GD:null,AR:null,Background:null,Ow:null,Bo:
null,Dk:null,K6:0,Au$:0,Ava:0,AoS:0,LF:false,KC:false,Ql:false,Ai:function(Ae){var
B;A.Core.O.Ai.call(this,Ae);var G9=((Ae&0x10)===0x10);var Fo=((Ae&0x20)===0x20);
var Gx=this.Bo.By;if(!G9){this.AoS=A.jb.CU;this.K6=A.jb.Text;}else if(Gx){this.AoS=
this.Au$;this.K6=this.Ava;}else if(Fo){this.AoS=this.Au$;this.K6=this.Ava;}else{
this.AoS=A.jb.CU;this.K6=A.jb.Text;}this.Background.L(this.AoS);if(!!this.GD){this.
GD.Wo(this.AoS);this.GD.Dd(this.K6);}this.LF=G9;this.KC=Fo;this.Ql=Gx;},Qk:function(
G){this.An();A.pe(this.AR,this);},AiG:function(G){if(this.Dk.Ab$)return;this.An(
);if(this.Bo.By){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},AbV:function(
E){if(this.GD===E)return;if(!!this.GD)this.HL(this.GD);this.GD=E;if(!!this.GD)this.
J(this.GD,0);this.Bb(E);this.An();},A9W:function(E){if(this.Au$===E)return;this.
Au$=E;this.An();},A9X:function(E){if(this.Ava===E)return;this.Ava=E;this.An();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.Ow._Init.call(this.Ow={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BL._Init.call(this.Dk={I:this},0);this.__proto__=C.Eh;var B;this.
H(BF);this.Background.A3(0x3F);this.Background.H(BF);this.Background.L(A.jb.CU);
this.Ow.H(OZ);this.K6=A.jb.Text;this.Bo.PO(0);this.Bo.Wp(50);this.Dk.Filter=1;this.
Au$=A.jb.AV;this.Ava=A.jb.Bm;this.AoS=A.jb.Text;this.J(this.Background,0);this.J(
this.Ow,0);this.Ow.As([B=A._GetAutoObject(A.Device.Device),B.AvX,B.Ayv]);this.Ow.
A_b([B=A._GetAutoObject(A.Device.Device),B.Av0,B.Ayw]);this.Bo.Mx=[this,this.Qk];
this.Dk.BM=[this,this.AiG];},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Ow._Done();this.Bo._Done();this.Dk._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.
Ow._ReInit();this.Bo._ReInit();this.Dk._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.GD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.XU={AeA:null,Uw:null,CB:function(G){if(this.K&&this.K.CB
)return this.K.CB.apply(this,arguments);else return C.AB.CB.apply(this,arguments
);},EY:function(G){if(this.K&&this.K.EY)return this.K.EY.apply(this,arguments);else
return C.AB.EY.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Am._Init.call(this.AeA={I:this},0);A.acg.Text._Init.call(this.Uw={I:
this},0);this.__proto__=C.XU;this.AeA.H(P0);this.Uw.H(P1);this.Uw.R(A.jV);this.Uw.
L(A.jb.Text);this.Uw.Z(false);this.J(this.AeA,0);this.J(this.Uw,0);this.AeA.Aw(null
);this.Uw.S(A.aaL(A.fl.EG));var Lv=this._variants();if(Lv){this.K={};Lv._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeA._Done();this.Uw._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeA._ReInit();this.Uw._ReInit();this.Uw.S(A.aaL(A.fl.
EG));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uw)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
XU._variants();},K:null,_className:"Application::BootScreen"};C.AUB={AAq:function(
G){A._GetAutoObject(C.A1).Ahi(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AUB;this.Background.L(0xFF000000);this.Eh.Z(false);},_className:
"Application::SleepScreen"};C.Avm={DX:null,Y:null,X6:null,X7:null,Vv:null,XX:null
,Vw:null,XV:null,X0:null,TE:null,XZ:null,X8:null,Ay:null,CS:function(){this.DH(this
);},Init:function(aArg){var B;A.zX([this,this.DH],[B=A._GetAutoObject(A.Device.Device
),B.Arg,B.As8],0);A._GetAutoObject(A.Device.Helper).AkE();this.Bb(this.Vv);this.
N.Cq(A.aaL(A.ach.ADr));A.pe([this,this.DH],this);},Bb:function(E){var B;var A2G=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A2G)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJI=A._NewObject(A.acl.AF0,0);AJI.Fj(250);AJI.HK(1);AJI.Wt(6);this.
Y.HC(this.AV,true,AJI,null);}},CB:function(G){this.A4b(this);A._GetAutoObject(A.
Device.Device).Ao.Bl(null);A._GetAutoObject(A.Device.Device).Bv.Bl(null);A._GetAutoObject(
A.Device.Helper).AkE();A._GetAutoObject(A.Device.Helper).Ar$();},Fb:function(G){
var B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.
Ay.Mv(-this.Y.Bt[1]);},Ic:function(G){var Cx=(C.Fg.isPrototypeOf(G)?G:null);if(!
Cx)return;if(Cx===this.Vv)A._GetAutoObject(C.A1).BU(35);else if(Cx===this.XX)A._GetAutoObject(
C.A1).BU(34);else if(Cx===this.X0)A._GetAutoObject(C.A1).BU(78);else if(Cx===this.
Vw)A._GetAutoObject(C.A1).BU(8);else if(Cx===this.XV)A._GetAutoObject(C.A1).BU(56
);else if(Cx===this.TE)A._GetAutoObject(C.A1).BU(25);else if(Cx===this.X6)A._GetAutoObject(
C.A1).BU(88);else if(Cx===this.X7)A._GetAutoObject(C.A1).BU(79);else if(Cx===this.
X8)A._GetAutoObject(C.A1).BU(6);else if(Cx===this.XZ)A._GetAutoObject(C.A1).BU(72
);},Bz$:function(G){A._GetAutoObject(A.Device.Device).AeR(!A._GetAutoObject(A.Device.
Device).AmH);},DH:function(G){if(A._GetAutoObject(A.Device.Device).AmH)this.N.Ht((
A.aaR(A.acf.A7p)+CO)+A.aaR(A.acf.Off).toLowerCase());else this.N.Ht((A.aaR(A.acf.
A7p)+CO)+A.aaR(A.acf.A77).toLowerCase());},Xu:function(G){A._GetAutoObject(A.Device.
Device).Dt(1);},A4b:function(G){A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(
A.Device.Helper).Mo());this.Vw.Zl(A._GetAutoObject(A.Device.Device).Ao.Cd().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DX={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fg._Init.call(this.X6={I:this
},0);C.Fg._Init.call(this.X7={I:this},0);C.Fg._Init.call(this.Vv={I:this},0);C.Fg.
_Init.call(this.XX={I:this},0);C.QP._Init.call(this.Vw={I:this},0);C.Fg._Init.call(
this.XV={I:this},0);C.Fg._Init.call(this.X0={I:this},0);C.Fg._Init.call(this.TE={
I:this},0);C.Fg._Init.call(this.XZ={I:this},0);C.Fg._Init.call(this.X8={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avm;this.Background.L(A.
jb.CU);this.N.Ar(false);this.N.Z(true);this.Dn(C.AqM);this.DX.A3(0x3F);this.DX.H(
E8);this.DX.L(A.jb.CI);this.Y.H(Lt);this.Y.JN(9);this.X6.H(P2);this.X6.Aj(true);
this.X6.T(A.aaR(A.acf.Gj));this.X7.H(JX);this.X7.Aj(true);this.X7.T(A.aaR(A.acf.
A7M));this.Vv.H(N$);this.Vv.Aj(true);this.Vv.T(A.aaR(A.acf.Ts));this.XX.H(P3);this.
XX.Aj(true);this.XX.T(A.aaR(A.acf.Tr));this.Vw.H(MF);this.Vw.Aj(true);this.Vw.T(
A.aaR(A.acf.APx));this.XV.H(S2);this.XV.Aj(true);this.XV.T(A.aaR(A.acf.Animal));
this.X0.H(JX);this.X0.Aj(true);this.X0.T(A.aaR(A.acf.A7s));this.TE.H(UM);this.TE.
Ar(true);this.TE.Aj(true);this.TE.Z(true);this.TE.T(A.aaR(A.acf.A6d));this.XZ.H(
ZU);this.XZ.Aj(true);this.XZ.T(A.aaR(A.acf.Device));this.X8.H(WT);this.X8.Aj(true
);this.X8.T(A.aaR(A.acf.Settings));this.Ay.H(Ip);this.J(this.DX,0);this.J(this.Y
,0);this.J(this.X6,0);this.J(this.X7,0);this.J(this.Vv,0);this.J(this.XX,0);this.
J(this.Vw,0);this.J(this.XV,0);this.J(this.X0,0);this.J(this.TE,0);this.J(this.XZ
,0);this.J(this.X8,0);this.J(this.Ay,0);this.N.CA=[this,this.Bz$];this.N.Ck=[this
,this.Xu];this.Y.Ej=[this,this.Fb];this.X6.AR=[this,this.Ic];this.X6.DD(A.aaL(A.
ach.ADv));this.X7.AR=[this,this.Ic];this.X7.DD(A.aaL(A.ach.ADy));this.Vv.AR=[this
,this.Ic];this.Vv.DD(A.aaL(A.ach.APB));this.XX.AR=[this,this.Ic];this.XX.DD(A.aaL(
A.ach.APL));this.Vw.AR=[this,this.Ic];this.Vw.DD(A.aaL(A.ach.AP9));this.XV.AR=[this
,this.Ic];this.XV.DD(A.aaL(A.ach.APE));this.X0.AR=[this,this.Ic];this.X0.DD(A.aaL(
A.ach.AQe));this.TE.AR=[this,this.Ic];this.TE.DD(A.aaL(A.ach.APY));this.XZ.AR=[this
,this.Ic];this.XZ.DD(A.aaL(A.ach.APV));this.X8.AR=[this,this.Ic];this.X8.DD(A.aaL(
A.ach.AQw));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DX._Done(
);this.Y._Done();this.X6._Done();this.X7._Done();this.Vv._Done();this.XX._Done();
this.Vw._Done();this.XV._Done();this.X0._Done();this.TE._Done();this.XZ._Done();
this.X8._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DX._ReInit();this.Y._ReInit();this.X6._ReInit();this.X7.
_ReInit();this.Vv._ReInit();this.XX._ReInit();this.Vw._ReInit();this.XV._ReInit(
);this.X0._ReInit();this.TE._ReInit();this.XZ._ReInit();this.X8._ReInit();this.Ay.
_ReInit();this.X6.T(A.aaR(A.acf.Gj));this.X7.T(A.aaR(A.acf.A7M));this.Vv.T(A.aaR(
A.acf.Ts));this.XX.T(A.aaR(A.acf.Tr));this.Vw.T(A.aaR(A.acf.APx));this.XV.T(A.aaR(
A.acf.Animal));this.X0.T(A.aaR(A.acf.A7s));this.TE.T(A.aaR(A.acf.A6d));this.XZ.T(
A.aaR(A.acf.Device));this.X8.T(A.aaR(A.acf.Settings));this.CS();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Q6={Number:null,I9:null,IM:null,Tx:null,Asv:0,Init:function(aArg){var B;A.zX([
this,this.Bbw],[B=A._GetAutoObject(A.Device.Device),B.ASq,B.AZ4],0);A.pe([this,this.
Bbw],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An0();},CB:function(G){A.
_GetAutoObject(A.Device.Device).Ahx();},EY:function(G){A._GetAutoObject(A.Device.
Device).AnR();},AlT:function(G){var F;this.An();this.Tx.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aea.Ar(true);if(!this.Tx.By)(F=this.Tx.Q,F[2].call(F[0],this.Tx.
B3));},Bbw:function(s){this.AlT(s);},An0:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gb);break;case 3:this.Background.
L(A.jb.H4);break;default:this.Background.L(A.jb.CI);}},Akv:function(E){if(this.Asv===
E)return;this.Asv=E;this.I9.Akv(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.I9._Init.call(this.I9={I:this}
,0);A.acg.Am._Init.call(this.IM={I:this},0);A.acl.Ge._Init.call(this.Tx={I:this}
,0);this.__proto__=C.Q6;var B;this.Background.L(A.jb.CI);this.N.Z(false);this.Number.
H(UN);this.Number.KR(true);this.Number.L(A.jb.Text);this.I9.H(ZV);this.I9.Akv(0);
this.IM.H(WU);this.IM.L(A.jb.AV);this.IM.Zh(true);this.Tx.Fj(1750);this.Tx.Uh(750
);this.Tx.Akq(0);this.Tx.Ar(true);this.Tx.B3=3;this.J(this.Number,0);this.J(this.
I9,0);this.J(this.IM,0);this.Number.S(A.aaL(A.fl.Af));this.IM.Aw(A.aaL(A.ach.ADx
));this.Tx.Q=[B=this.IM,B.ASd,B.Cu];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.I9._Done();this.IM._Done();this.Tx._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
I9._ReInit();this.IM._ReInit();this.Tx._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.I9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fg={C8:null,ADh:null,AR:null,Bo:null,Dk:null,Background:
null,Mn:null,OA:null,QV:null,G2:null,A5r:true,LF:false,KC:false,Ql:false,Init:function(
aArg){},Bk:function(aSize){var B;C.Ha.Bk.call(this,aSize);this.Mn.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.QV.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OA.H(this.QV.M);this.G2.H([].concat(0,this.G2.M.slice(1,4)));this.G2.H(A.abN(
this.G2.M,aSize[0]));this.G2.H(A.abP(this.G2.M,0));this.G2.H([].concat(this.G2.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Ha.Ai.call(this,Ae);var G9=((Ae&0x10)===
0x10);var Fo=((Ae&0x20)===0x20);var Gx=this.Bo.By;if(!G9){this.QV.L(A.jb.AmW);this.
G2.L(A.jb.CI);this.OA.Z(true);this.OA.L(A.jb.AQJ);this.Mn.Z(false);}else if(Gx){
this.QV.L(A.jb.Bm);this.G2.L(A.jb.Bm);this.OA.Z(false);this.Mn.Z(true);}else if(
Fo){this.QV.L(A.jb.Bm);this.G2.L(A.jb.Bm);this.OA.Z(false);this.Mn.Z(true);}else{
this.QV.L(A.jb.Text);this.G2.L(A.jb.Text);this.OA.Z(true);this.OA.L(A.jb.CU);this.
Mn.Z(false);}this.LF=G9;this.KC=Fo;this.Ql=Gx;},Qk:function(G){this.An();A.pe(this.
AR,this);},AiG:function(G){if(this.Dk.Ab$)return;this.An();if(this.Bo.By){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DI===E)return;
this.DI=E;this.G2.R(E);},DD:function(E){if(this.C8===E)return;this.C8=E;this.QV.
Aw(E);this.OA.Aw(E);},AbU:function(E){if(this.A5r===E)return;this.A5r=E;this.G2.
Z(E);},AbX:function(E){if(this.ADh===E)return;this.ADh=E;this.Mn.Aw(E);this.Mn.H(
A.abK(this.Mn.M,E.FrameSize));},_Init:function(aArg){C.Ha._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BL._Init.call(this.Dk={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Am._Init.call(this.Mn={
I:this},0);A.acg.Am._Init.call(this.OA={I:this},0);A.acg.Am._Init.call(this.QV={
I:this},0);C.CG._Init.call(this.G2={I:this},0);this.__proto__=C.Fg;this.H(ZW);this.
Bo.PO(0);this.Bo.Wp(50);this.Dk.Filter=1;this.Background.H(WV);this.Background.Z(
false);this.Mn.A3(0x14);this.Mn.L(A.jb.AV);this.Mn.Cu(0);this.OA.L(A.jb.CU);this.
OA.Cu(1);this.G2.H(ZX);this.J(this.Background,0);this.J(this.Mn,0);this.J(this.OA
,0);this.J(this.QV,0);this.J(this.G2,0);this.Bo.Mx=[this,this.Qk];this.Dk.BM=[this
,this.AiG];this.Mn.Aw(A.aaL(A.ach.NP));this.OA.Aw(A.aaL(A.ach.Avz));this.QV.Aw(A.
aaL(A.ach.Avz));this.G2.S(A.aaL(A.fl.Af));this.G2.A2(A.aaL(A.fl.Ak));this.G2.Ct(
A.aaL(A.fl.Bi));this.ADh=A.aaL(A.ach.NP);this.Init(aArg);},_Done:function(){this.
__proto__=C.Ha;this.Bo._Done();this.Dk._Done();this.Background._Done();this.Mn._Done(
);this.OA._Done();this.QV._Done();this.G2._Done();C.Ha._Done.call(this);},_ReInit:
function(){C.Ha._ReInit.call(this);this.Bo._ReInit();this.Dk._ReInit();this.Background.
_ReInit();this.Mn._ReInit();this.OA._ReInit();this.QV._ReInit();this.G2._ReInit(
);this.G2.S(A.aaL(A.fl.Af));this.G2.A2(A.aaL(A.fl.Ak));this.G2.Ct(A.aaL(A.fl.Bi)
);},_Mark:function(D){var B;C.Ha._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Aw6:null,Background:null,OV:null,Ar3:0,AkV:10,Ajv:100,AQ:0,AoL:true,Bk:function(
aSize){A.Core.O.Bk.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OV.H([].concat(2,this.OV.M.slice(1,4)));this.OV.H(A.abN(this.OV.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.O.Ai.call(this,Ae);var AfS=this.AkV<this.Ajv;var AJf=(
B=this.M)[3]-B[1];var A2t=10;var Aud=AJf;var A39=0;if(10>AJf)A2t=AJf;if(this.AkV<
this.Ajv)Aud=((Aud*this.AkV)/this.Ajv)|0;if(Aud<A2t)Aud=A2t;if(this.AkV<this.Ajv
)A39=((this.BkS()*(AJf-Aud))/(this.Ajv-this.AkV))|0;this.OV.H(A.abP(this.OV.M,A39
));this.OV.H([].concat(this.OV.M.slice(0,3),A39+Aud));this.OV.Z(AfS);this.Background.
Z(AfS);if(!!this.Aw6&&(this.AoL!==AfS))A.pe(this.Aw6,this);this.AoL=AfS;},BkS:function(
){var E=this.Ar3;var Hy=this.Ajv-this.AkV;if((Hy>0)&&(E>Hy))E=Hy;if(Hy<=0)E=0;return E;
},Mv:function(E){if(E<0)E=0;if(this.Ar3===E)return;this.Ar3=E;this.An();},Mw:function(
E){if(E<0)E=0;if(this.AkV===E)return;this.AkV=E;this.An();},Mu:function(E){if(E<
0)E=0;if(this.Ajv===E)return;this.Ajv=E;this.An();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OV.L(E);},BmY:function(E){if(A.aa0(this.Aw6,E))return;this.
Aw6=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.OV={I:this},0);this.__proto__=
C.Ay;this.H(ZY);this.Ar(false);this.AQ=A.jb.AV;this.Background.A3(0x0);this.Background.
H(UO);this.Background.L(A.jb.CU);this.OV.A3(0x0);this.OV.H(UO);this.OV.L(A.jb.AV
);this.J(this.Background,0);this.J(this.OV,0);},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.OV._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.OV._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Aw6)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cv={Hb:null,Y:null,Ay:null,Am:null,A6U:A.jV,Init:function(aArg){A.pe([this,this.
AAX],this);},Dz:function(G){var B;C.AB.Dz.call(this,G);this.An();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HC(this.AV,true,null,null);this.AAX(this);},AlP:
function(G){if(!!this.N.CA)A.pe(this.N.CA,this);},ApC:function(G){if(!!this.N.Cg
)A.pe(this.N.Cg,this);},AAq:function(G){if(!!this.N.Ck)A.pe(this.N.Ck,this);},Fb:
function(G){var B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[
3]-B[1]);this.Ay.Mv(-this.Y.Bt[1]);A.pe([this,this.BAv],this);},AAX:function(G){
var B;var GP=(C.Cm.isPrototypeOf(B=this.AV)?B:null);this.N.Ht(A.jV);this.N.CZ(A.
aaL(A.ach.VP));this.N.CA=[this,this.Es];if(!!GP&&!!GP.Amd){this.N.FH(A.jV);this.
N.Kt.Do(255);this.N.ArA(GP.AqC);this.N.Cq(GP.Avw);this.N.Ck=GP.Amd;}else{this.N.
FH(A.jV);this.N.Cq(null);this.N.Ck=null;}if(!!GP&&!!GP.Agg){this.N.B2(GP.Axy);this.
N.HO.Do(GP.Aw7);this.N.Anq(GP.AmJ);this.N.C5(GP.AqS);this.N.Cg=GP.Agg;}else{this.
N.B2(A.jV);this.N.C5(null);this.N.Cg=null;}},JP:function(E){if(this.A6U===E)return;
this.A6U=E;this.Hb.R(E);},Es:function(G){A._GetAutoObject(C.A1).Fs();},BAv:function(
G){var B;var Bzt=this.Ay.Background.Fi();var BdH=(Bzt?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ai7=X;
X=X.Ah;if(((Ai7.U&0x400)===0x400)){if(!!(A.Core.Aj8.isPrototypeOf(Ai7)?Ai7:null)
){var BdN=(A.Core.Aj8.isPrototypeOf(Ai7)?Ai7:null);BdN.DE([BdH,BdN.Ey[1]]);}else
if(!!(A.Core.Eq.isPrototypeOf(Ai7)?Ai7:null)){var BfG=(A.Core.Eq.isPrototypeOf(Ai7
)?Ai7:null);BfG.H(A.abN(BfG.M,BdH));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Hb={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Am._Init.call(this.Am={I:this},0);this.
__proto__=C.Cv;this.N.Z(true);this.Hb.H(WW);this.Hb.Ar(false);this.Hb.R(A.aaR(A.
acf.Settings));this.Hb.L(A.jb.Text);this.Y.H(E8);this.Y.JN(1);this.Ay.H(Ip);this.
Am.H(Rf);this.Am.L(A.jb.Text);this.J(this.Hb,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Am,0);this.Hb.S(A.aaL(A.fl.Kh));this.Hb.A2(A.aaL(A.fl.Ih));this.Y.
Ej=[this,this.Fb];this.Am.Aw(A.aaL(A.ach.AC0));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hb._Done();this.Y._Done();this.Ay._Done();this.Am._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hb._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Am._ReInit();this.Hb.R(A.aaR(A.acf.Settings
));this.Hb.S(A.aaL(A.fl.Kh));this.Hb.A2(A.aaL(A.fl.Ih));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.AqM={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bgy],[B=
A._GetAutoObject(A.Device.Helper),B.UT,B.UU],0);},Dd:function(E){C.BS.Dd.call(this
,E);this.Text.L(E);},Bgy:function(G){this.Text.R(A._GetAutoObject(A.acj.KI).Bio(
A._GetAutoObject(A.Device.Helper).Ds()));},_Init:function(aArg){C.BS._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AqM;this.Timer.Wp(1);this.Timer.Ar(true);
this.Text.H(ZZ);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.Mx=[this,this.Bgy
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BS;this.Timer._Done();this.Text._Done();C.BS._Done.call(this);},_ReInit:function(
){C.BS._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BS={KS:0xFFFFFFFF,LQ:0,Dd:function(E){if(
this.KS===E)return;this.KS=E;},Wo:function(E){if(this.LQ===E)return;this.LQ=E;},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.BS;this.H(O0
);},_className:"Application::HeaderContent"};C.N={VI:null,VJ:null,VK:null,AgO:null
,AgP:null,AgQ:null,CA:null,Ck:null,Cg:null,Background:null,ND:null,I7:null,Kt:null
,HO:null,Pv:null,I0:null,Ld:null,TU:null,TW:null,AnU:A.jV,AnV:A.jV,AnW:A.jV,AqT:
0,AqU:0,AqV:0,Ag7:0,Zs:false,Zr:false,Ar9:false,Asl:false,Ask:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VI)this.I7.S(this.VI);if(!!this.VJ)this.Kt.S(this.
VJ);if(!!this.VK)this.HO.S(this.VK);switch(this.Ag7){case 0:{this.ND.Z(false);this.
I7.L(A.jb.Bm);this.Kt.L(A.jb.Bm);this.HO.L(A.jb.Bm);this.Pv.L(A.jb.Bm);this.I0.L(
A.jb.Bm);this.Ld.L(A.jb.Bm);}break;case 1:{if(!this.AgO)this.ND.H(A.aaT(this.I7.
AR6(),Rg));else this.ND.H(this.Pv.Da());this.ND.Z(true);this.I7.L(A.jb.Text);this.
Kt.L(A.jb.Bm);this.HO.L(A.jb.Bm);this.Pv.L(A.jb.Text);this.I0.L(A.jb.Bm);this.Ld.
L(A.jb.Bm);}break;case 3:{if(!this.AgQ)this.ND.H(A.aaT(this.HO.AR6(),Rg));else this.
ND.H(this.Ld.Da());this.ND.Z(true);this.I7.L(A.jb.Bm);this.Kt.L(A.jb.Bm);this.HO.
L(A.jb.Text);this.Pv.L(A.jb.Bm);this.I0.L(A.jb.Bm);this.Ld.L(A.jb.Text);}break;case
2:{if(!this.AgP)this.ND.H(A.aaT(this.Kt.AR6(),Rg));else this.ND.H(this.I0.Da());
this.ND.Z(true);this.I7.L(A.jb.Bm);this.Kt.L(A.jb.Text);this.HO.L(A.jb.Bm);this.
Pv.L(A.jb.Bm);this.I0.L(A.jb.Text);this.Ld.L(A.jb.Bm);}break;default:{this.ND.Z(
false);A.ab5("%s",WX);}}if(!!this.Pv.Al){this.Pv.Z(true);this.I7.Z(false);}else{
this.Pv.Z(false);this.I7.Z(true);}if(this.AnV.length<=0){this.I0.Z(true);this.Kt.
Z(false);}else{this.I0.Z(false);this.Kt.Z(true);}if(!!this.Ld.Al){this.Ld.Z(true
);this.HO.Z(false);}else{this.Ld.Z(false);this.HO.Z(true);}},Ht:function(E){if(this.
AnU===E)return;this.AnU=E;this.I7.R(E);this.An();},FH:function(E){if(this.AnV===
E)return;this.AnV=E;this.Kt.R(E);this.An();},B2:function(E){if(this.AnW===E)return;
this.AnW=E;this.HO.R(E);this.An();},AE7:function(E){if(this.Ag7===E)return;this.
Ag7=E;this.An();},AEY:function(E){if(this.VI===E)return;this.VI=E;this.I7.S(E);this.
An();},ArA:function(E){if(this.VJ===E)return;this.VJ=E;this.Kt.S(E);this.An();},
Anq:function(E){if(this.VK===E)return;this.VK=E;this.HO.S(E);this.An();},A3l:function(
G){this.An();},CZ:function(E){if(this.AgO===E)return;this.AgO=E;this.Pv.Aw(E);this.
An();},Cq:function(E){if(this.AgP===E)return;this.AgP=E;this.I0.Aw(E);this.An();
},C5:function(E){if(this.AgQ===E)return;this.AgQ=E;this.Ld.Aw(E);this.An();},OL:
function(E){if(this.Ask===E)return;this.Ask=E;this.TU.Z(E);if(E)this.I7.H([].concat(
this.TU.M[2],this.I7.M.slice(1,4)));else this.I7.H([].concat(0,this.I7.M.slice(1
,4)));this.An();},OM:function(E){if(this.Asl===E)return;this.Asl=E;this.TW.Z(E);
if(E)this.HO.H(A.abN(this.HO.M,this.TW.M[0]));else this.HO.H(A.abN(this.HO.M,this.
M[2]));this.An();},Bml:function(E){if(this.AqT===E)return;this.AqT=E;this.Pv.Cu(
E);this.An();},ASR:function(E){if(this.AqU===E)return;this.AqU=E;this.I0.Cu(E);this.
An();},A91:function(E){if(this.AqV===E)return;this.AqV=E;this.Ld.Cu(E);this.An();
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.ND={I:this},0);C.CG._Init.call(this.I7={I:this
},0);C.CG._Init.call(this.Kt={I:this},0);C.CG._Init.call(this.HO={I:this},0);A.acg.
Am._Init.call(this.Pv={I:this},0);A.acg.Am._Init.call(this.I0={I:this},0);A.acg.
Am._Init.call(this.Ld={I:this},0);A.acg.Am._Init.call(this.TU={I:this},0);A.acg.
Am._Init.call(this.TW={I:this},0);this.__proto__=C.N;this.H(BF);this.Background.
A3(0x3F);this.Background.H(BF);this.Background.L(A.jb.AdZ);this.ND.H(WY);this.ND.
L(A.jb.CU);this.ND.Z(false);this.I7.A3(0x14);this.I7.H(WZ);this.I7.A8(0x12);this.
Kt.A3(0x14);this.Kt.H(W0);this.Kt.A8(0x12);this.HO.H(Z0);this.Pv.H(W1);this.I0.H(
W2);this.Ld.H(S3);this.Ld.Z(false);this.TU.H(UP);this.TU.Z(false);this.TW.H(Z1);
this.TW.Z(false);this.J(this.Background,0);this.J(this.ND,0);this.J(this.I7,0);this.
J(this.Kt,0);this.J(this.HO,0);this.J(this.Pv,0);this.J(this.I0,0);this.J(this.Ld
,0);this.J(this.TU,0);this.J(this.TW,0);this.I7.S(A.aaL(A.fl.Ak));this.I7.A2(A.aaL(
A.fl.Bi));this.I7.Q0([this,this.A3l]);this.Kt.S(A.aaL(A.fl.Ak));this.Kt.A2(A.aaL(
A.fl.Bi));this.Kt.Q0([this,this.A3l]);this.HO.S(A.aaL(A.fl.Ak));this.HO.A2(A.aaL(
A.fl.Bi));this.HO.Q0([this,this.A3l]);this.VI=A.aaL(A.fl.Ak);this.VJ=A.aaL(A.fl.
Ak);this.VK=A.aaL(A.fl.Ak);this.Pv.Aw(null);this.I0.Aw(null);this.Ld.Aw(null);this.
TU.Aw(A.aaL(A.ach.AMv));this.TW.Aw(A.aaL(A.ach.Ajj));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.O;this.Background._Done();this.ND._Done();this.I7._Done(
);this.Kt._Done();this.HO._Done();this.Pv._Done();this.I0._Done();this.Ld._Done(
);this.TU._Done();this.TW._Done();A.Core.O._Done.call(this);},_ReInit:function(){
A.Core.O._ReInit.call(this);this.Background._ReInit();this.ND._ReInit();this.I7.
_ReInit();this.Kt._ReInit();this.HO._ReInit();this.Pv._ReInit();this.I0._ReInit(
);this.Ld._ReInit();this.TU._ReInit();this.TW._ReInit();this.I7.S(A.aaL(A.fl.Ak)
);this.I7.A2(A.aaL(A.fl.Bi));this.Kt.S(A.aaL(A.fl.Ak));this.Kt.A2(A.aaL(A.fl.Bi)
);this.HO.S(A.aaL(A.fl.Ak));this.HO.A2(A.aaL(A.fl.Bi));this.AEY(A.aaL(A.fl.Ak));
this.ArA(A.aaL(A.fl.Ak));this.Anq(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.VI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AgO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgP)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AgQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ND)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.I7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kt).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.HO)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ld)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.AC4={Init:function(aArg){var B;A.zX([this,this.Ni],[B=A._GetAutoObject(A.Device.
Helper),B.Ari,B.Aku],0);A.zX([this,this.Ni],[B=A._GetAutoObject(A.Device.Helper)
,B.A80,B.AFu],0);A.pe([this,this.Ni],this);},D3:function(G){if(!!A._GetAutoObject(
A.Device.Helper).Aht)this.AbW(A._GetAutoObject(A.Device.Helper).Aht.AOH());else this.
AbW(-1);if(!!A._GetAutoObject(A.Device.Helper).Uu)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).AnY(A._GetAutoObject(A.Device.Helper).Uu.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmP._Init.call(this,aArg);this.__proto__=C.AC4;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGJ={Eu:null,Ef:null,
FQ:null,XT:null,Ty:null,IB:null,IC:null,Init:function(aArg){},Ww:function(G){var
B;C.DP.Ww.call(this,G);var AKw=this.Azc(A._GetAutoObject(A.Device.Helper).Uz.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALk=this.Azc(A._GetAutoObject(
A.Device.Helper).UA.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var Bzj=
this.Azc(A._GetAutoObject(A.Device.Device).ZQ);this.Eu.H(A.abP(this.Eu.M,0));this.
Eu.H([].concat(this.Eu.M.slice(0,3),((B=this.M)[3]-B[1])-AKw));this.IC.H(A.abO(this.
IC.M,this.Eu.M[3]-((((B=this.IC.M)[3]-B[1])/2)|0)));this.Ef.H(A.abP(this.Ef.M,this.
Eu.M[3]));this.Ef.H([].concat(this.Ef.M.slice(0,3),((B=this.M)[3]-B[1])-ALk));this.
IB.H(A.abO(this.IB.M,(this.Ef.M[3]-((((B=this.IB.M)[3]-B[1])/2)|0))+2));this.FQ.
H(A.abP(this.FQ.M,this.Ef.M[3]));this.FQ.H([].concat(this.FQ.M.slice(0,3),((B=this.
M)[3]-B[1])-Bzj));this.Ty.H(A.abO(this.Ty.M,this.FQ.M[3]-((((B=this.Ty.M)[3]-B[1
])/2)|0)));this.XT.H(A.abP(this.XT.M,this.FQ.M[3]));this.XT.H([].concat(this.XT.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJs:function(AoH){return A._GetAutoObject(A.
Device.Converter).AkQ(AoH);},AJ2:function(){return A._GetAutoObject(A.acj.Temperature
).Alz();},_Init:function(aArg){C.DP._Init.call(this,aArg);A.acg.AL._Init.call(this.
Eu={I:this},0);A.acg.AL._Init.call(this.Ef={I:this},0);A.acg.AL._Init.call(this.
FQ={I:this},0);A.acg.AL._Init.call(this.XT={I:this},0);A.acg.AL._Init.call(this.
Ty={I:this},0);A.acg.AL._Init.call(this.IB={I:this},0);A.acg.AL._Init.call(this.
IC={I:this},0);this.__proto__=C.AGJ;this.Eu.A3(0xD);this.Eu.H(AcD);this.Eu.L(A.jb.
Gb);this.Ef.A3(0xD);this.Ef.H(S4);this.Ef.L(A.jb.H4);this.FQ.A3(0xD);this.FQ.H(Z2
);this.FQ.L(A.jb.EW);this.XT.A3(0xD);this.XT.H(Afp);this.XT.L(A.jb.Afi);this.Ty.
A3(0xD);this.Ty.H(Z3);this.Ty.Awj(A.jb.Afi);this.Ty.Awk(A.jb.Afi);this.Ty.Awm(A.
jb.EW);this.Ty.Awl(A.jb.EW);this.IB.A3(0xD);this.IB.H(W3);this.IB.Awj(A.jb.EW);this.
IB.Awk(A.jb.EW);this.IB.Awm(A.jb.H4);this.IB.Awl(A.jb.H4);this.IC.A3(0xD);this.IC.
H(Z4);this.IC.Awj(A.jb.H4);this.IC.Awk(A.jb.H4);this.IC.Awm(A.jb.Gb);this.IC.Awl(
A.jb.Gb);this.J(this.Eu,-1);this.J(this.Ef,-1);this.J(this.FQ,-1);this.J(this.XT
,-1);this.J(this.Ty,-1);this.J(this.IB,-1);this.J(this.IC,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DP;this.Eu._Done();this.Ef._Done();this.FQ._Done(
);this.XT._Done();this.Ty._Done();this.IB._Done();this.IC._Done();C.DP._Done.call(
this);},_ReInit:function(){C.DP._ReInit.call(this);this.Eu._ReInit();this.Ef._ReInit(
);this.FQ._ReInit();this.XT._ReInit();this.Ty._ReInit();this.IB._ReInit();this.IC.
_ReInit();},_Mark:function(D){var B;C.DP._Mark.call(this,D);if((B=this.Eu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ty)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Cm={Avb:null,AmJ:null,AP5:null,AqS:null,AqC:null,Avw:null,AR:null,Agg:null,Amd:
null,N:null,Bo:null,QL:null,Axy:A.jV,AUx:false,AGx:false,Ao9:false,Aw7:255,LF:false
,KC:false,Ql:false,Ai:function(Ae){var B;C.OS.Ai.call(this,Ae);var G9=((Ae&0x10)===
0x10);var Fo=((Ae&0x20)===0x20);var Iw=((Ae&0x40)===0x40);var Gx=this.Bo.By;var FK=
A.jb.CI;var GN=A.jb.Text;if(this.Hd){FK=A.jb.Bm;GN=A.jb.Text;}if(!G9){this.Background.
L(A.jb.CU);this.V.L(A.jb.CI);}else if(Gx){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(Iw){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fo){this.
Background.L(A.jb.AmW);this.V.L(A.jb.Bm);}else{this.Background.L(FK);this.V.L(GN
);}this.LF=G9;this.KC=Fo;this.Ql=Gx;this.Ao9=Iw;},Qk:function(G){this.An();A.pe(
this.AR,this);},Bwd:function(s){this.Qk(s);},IS:function(G){if(this.QL.Ab$)return;
this.An();if(this.Bo.By){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},As_:function(s){this.IS(s);},AeK:function(E){if(A.aa0(this.Agg,E))return;this.
Agg=E;},A_t:function(E){if(this.Axy===E)return;this.Axy=E;},Wq:function(E){if(this.
Avb===E)return;this.Avb=E;},Wr:function(E){if(this.AmJ===E)return;this.AmJ=E;},A9$:
function(E){if(this.Aw7===E)return;this.Aw7=E;},Gk:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DI===E)return;this.DI=E;this.AK4();},A2U:
function(G){},BFX:function(s){this.A2U(s);},Akp:function(E){if(this.AqS===E)return;
this.AqS=E;},LW:function(E){if(A.aa0(this.Amd,E))return;this.Amd=E;},Bme:function(
E){if(this.AqC===E)return;this.AqC=E;},LZ:function(E){if(this.Avw===E)return;this.
Avw=E;},Zm:function(E){if(this.AGx===E)return;this.AGx=E;this.AK4();},AK4:function(
){var B;var Qr=this.DI;if(this.AGx)Qr=Qr+A.aaR(A.acf.Colon);if(this.AUx)Qr=Qr+Z5;
this.V.R(Qr);},ATd:function(E){if(this.AUx===E)return;this.AUx=E;this.AK4();},_Init:
function(aArg){C.OS._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BL._Init.call(this.QL={I:this},0);this.__proto__=C.Cm;this.Bo.PO(0);
this.Bo.Wp(50);this.Bo.Ar(false);this.QL.Filter=1;this.Bo.Mx=[this,this.Bwd];this.
QL.BM=[this,this.As_];this.Avb=A.aaL(A.fl.Ak);this.AmJ=A.aaL(A.fl.Ak);this.AP5=A.
aaL(A.ach.EX);this.AqC=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OS;this.
Bo._Done();this.QL._Done();C.OS._Done.call(this);},_ReInit:function(){C.OS._ReInit.
call(this);this.Bo._ReInit();this.QL._ReInit();this.Wq(A.aaL(A.fl.Ak));this.Wr(A.
aaL(A.fl.Ak));this.Bme(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OS._Mark.call(
this,D);if((B=this.Avb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmJ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AP5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AqS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqC)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Avw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agg)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amd)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dp={Q:null,Am6:null,Am8:null,Hr:null,H0:null,AM:0,Gi:0,FW:100,Fy:0,Init:function(
aArg){},IS:function(G){this.Fy=1;C.Ee.IS.call(this,G);},Bk:function(aSize){C.Ee.
Bk.call(this,aSize);this.Hr.H([0,aSize[1]-40,40,aSize[1]]);this.H0.H([].concat(A.
abe(aSize,Ak0),aSize));},Ai:function(Ae){var B;C.Ee.Ai.call(this,Ae);var Fo=((Ae&
0x20)===0x20);var Gx=this.Bo.By;this.Hr.L(this.V.AQ);this.H0.L(this.V.AQ);this.Hr.
Z((Fo||Gx)&&(this.AM>this.Gi));this.H0.Z((Fo||Gx)&&(this.AM<this.FW));if(this.Fy===
6)this.Hr.L(A.jb.EW);if(this.Fy===7)this.H0.L(A.jb.EW);},BeQ:function(G){this.Fy=
6;this.An();if(this.Bo.By){A.pe([this,this.AyF],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qk:function(G){if(this.Fy===6)A.pe([this,this.AyF],this);if(this.Fy===
7)A.pe([this,this.AyG],this);if(this.Fy===1)A.pe(this.AR,this);this.Fy=0;this.An(
);},C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,F[1].call(F[0])));},AcL:function(
s){this.C3(s);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcL],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcL],E,0);if(!!E)A.pe([this,
this.AcL],this);},BeR:function(G){this.Fy=7;this.An();if(this.Bo.By){A.pe([this,
this.AyG],this);this.Bo.Ar(false);}this.Bo.Ar(true);},J8:function(G){this.Fy=0;}
,AyG:function(s){this.J8(s);},J3:function(G){this.Fy=0;},AyF:function(s){this.J3(
s);},BC:function(E){if(E<this.Gi)E=this.Gi;if(E>this.FW)E=this.FW;if(this.AM===E
)return;this.AM=E;this.An();},BaZ:function(Aq){this.BC(Aq);},Gq:function(E){if(this.
Gi===E)return;this.Gi=E;this.An();},E5:function(E){if(this.FW===E)return;this.FW=
E;this.An();},Ud:function(){return this.AM;},_Init:function(aArg){C.Ee._Init.call(
this,aArg);A.Core.BL._Init.call(this.Am6={I:this},0);A.Core.BL._Init.call(this.Am8={
I:this},0);A.acg.Am._Init.call(this.Hr={I:this},0);A.acg.Am._Init.call(this.H0={
I:this},0);this.__proto__=C.Dp;this.H(JY);this.Am6.Filter=6;this.Am8.Filter=7;this.
Background.H(JY);this.V.H(Z6);this.V.R(Lu);this.Hr.H(AhK);this.H0.H(An8);this.H0.
Cu(1);this.J(this.Hr,0);this.J(this.H0,0);this.Am6.BM=[this,this.BeQ];this.Am6.DZ=[
this,this.BeQ];this.Am8.BM=[this,this.BeR];this.Am8.DZ=[this,this.BeR];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(null);this.Hr.Aw(A.aaL(A.ach.
Ajk));this.H0.Aw(A.aaL(A.ach.Ajk));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ee;this.Am6._Done();this.Am8._Done();this.Hr._Done();this.H0._Done();C.Ee._Done.
call(this);},_ReInit:function(){C.Ee._ReInit.call(this);this.Am6._ReInit();this.
Am8._ReInit();this.Hr._ReInit();this.H0._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ee._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Am6)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Am8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hr)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dr:function(){return-1;},C7:function(aIndex){return-1;},Gd:function(
aIndex){return A.jV;},DO:function(A7){return-1;},Hp:function(){return-1;},As:function(
E){this.Q=E;},Ca:function(Aq){this.As(Aq);},ACJ:function(aIndex){return null;},ACL:
function(aIndex){return 0;},B$:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.I5={Axq:null
,BT:null,AGX:A.jV,AU_:A.jV,AjU:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dp.Ai.call(this,Ae);if(!this.Axq){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CO)+this.
AU_);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CO)+this.AGX);}}else(B=
this.Axq)?B[1].call(B[0],this):null;},J8:function(G){var F;var BR=this.AM;C.Dp.J8.
call(this,G);this.BC(this.AM+this.AjU);if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J3:function(G){var F;var BR=this.AM;C.
Dp.J3.call(this,G);this.BC(this.AM-this.AjU);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ko:function(E){if(this.AGX===E)return;
this.AGX=E;this.An();},KQ:function(E){if(this.AU_===E)return;this.AU_=E;this.An(
);},ASS:function(E){if(this.AjU===E)return;this.AjU=E;},A_q:function(E){if(A.aa0(
this.Axq,E))return;this.Axq=E;},_Init:function(aArg){C.Dp._Init.call(this,aArg);
C.CG._Init.call(this.BT={I:this},0);this.__proto__=C.I5;this.H(JY);this.BT.H(Oa);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dp;this.BT._Done();C.Dp._Done.call(this
);},_ReInit:function(){C.Dp._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dp._Mark.call(this
,D);if((B=this.Axq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BZ={AC:
null,Dw:null,HI:null,CS:function(){this.Ai(this.U);},Init:function(aArg){},Bk:function(
aSize){var B;C.Dp.Bk.call(this,aSize);this.Dw.H([this.Hr.M[2]-10,this.Hr.M[1],this.
H0.M[0]+10,this.Hr.M[3]]);this.Dw.AE8((B=this.Dw.M)[2]-B[0]);this.Dw.HC(this.Dw.
Gl,true,null,null);},Ai:function(Ae){var B;C.Dp.Ai.call(this,Ae);var Fo=((Ae&0x20
)===0x20);var Gx=this.Bo.By;this.Dw.Abv(0,this.Dw.AY-1);this.Hr.Z(Fo||Gx);this.H0.
Z(Fo||Gx);},C3:function(G){var F;if(!!this.Q&&!!this.AC)this.BC(this.AC.DO((F=this.
Q,F[1].call(F[0]))));},J8:function(G){var F;var BR=this.AM;C.Dp.J8.call(this,G);
this.BC(this.AM+1);if(this.AM!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J3:function(G){var F;var BR=this.AM;
C.Dp.J3.call(this,G);this.BC(this.AM-1);if(this.AM!==BR){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},BC:function(E){
var Qq=0;if(E<this.Gi){E=this.FW;Qq=-this.Dw.V2*this.Dw.AY;}if(E>this.FW){E=this.
Gi;Qq=this.Dw.V2;}C.Dp.BC.call(this,E);if(!!Qq)this.Dw.FX(Qq);this.Dw.G0(this.AM
);if(this.Dw.Bjk())this.Dw.BoK(false,false);this.Dw.HC(this.Dw.Gl,true,this.HI,null
);},He:function(G){var B;var F_=this.Dw.GY;var Cz=(C.CG.isPrototypeOf(B=this.Dw.
Ch)?B:null);if(!Cz)return;Cz.S(this.V.B7);Cz.AwS(19);Cz.A2(this.V.AmI);Cz.Bm8(19
);Cz.Ct(this.V.AqB);Cz.Bm9(19);Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gd(F_));
else Cz.R(W4);Cz.H(A.abK(Cz.M,[this.Dw.V2,(B=this.Dw.M)[3]-B[1]]));},BvQ:function(
s){this.He(s);},CJ:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Gq(0);this.E5(this.AC.Dr()-1);this.Dw.Jr(this.AC.Dr());this.Dw.Abv(0,this.Dw.AY-
1);}},_Init:function(aArg){C.Dp._Init.call(this,aArg);A.Core.Dw._Init.call(this.
Dw={I:this},0);A.acl.Ge._Init.call(this.HI={I:this},0);this.__proto__=C.BZ;this.
H(JY);this.Dw.NX(C.CG);this.HI.Wt(23);this.HI.HK(1);this.HI.Fj(200);this.J(this.
Dw,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dw.He=[this,this.BvQ
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dp;this.Dw._Done();this.HI.
_Done();C.Dp._Done.call(this);},_ReInit:function(){C.Dp._ReInit.call(this);this.
Dw._ReInit();this.HI._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CS();},_Mark:function(D){var B;C.Dp._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SI={FC:null,OD:null,Di:null,Au:null,Jp:null,HH:null,Pp:null,VG:null,QU:null,
Ye:null,PZ:null,Gp:null,Go:null,FS:0,A9:0,Ar6:false,Bjg:false,Init:function(aArg
){},Ai:function(Ae){C.Dp.Ai.call(this,Ae);this.Hr.Z(false);this.H0.Z(false);var AtH=
A.jV;if(!!this.Di){this.Pp.R(this.Au.Format(An9));this.QU.R(this.Au.Format(AhL));
this.PZ.R(this.Au.Format(AhM));}if(this.A9===1){this.HH.Z(true);this.HH.H(this.Pp.
M);this.HH.L(this.V.AQ);this.Pp.L(this.Background.AQ);this.QU.L(this.V.AQ);this.
PZ.L(this.V.AQ);AtH=A.aaR(A.acf.A5L);}else if(this.A9===2){this.HH.Z(true);this.
HH.H(this.QU.M);this.HH.L(this.V.AQ);this.Pp.L(this.V.AQ);this.QU.L(this.Background.
AQ);this.PZ.L(this.V.AQ);AtH=A.aaR(A.acf.Hc);}else if(this.A9===3){this.HH.Z(true
);this.HH.H(this.PZ.M);this.HH.L(this.V.AQ);this.Pp.L(this.V.AQ);this.QU.L(this.
V.AQ);this.PZ.L(this.Background.AQ);AtH=A.aaR(A.acf.Year);}else{this.HH.Z(false);
this.Pp.L(this.V.AQ);this.Ye.L(this.V.AQ);this.QU.L(this.V.AQ);this.VG.L(this.V.
AQ);this.PZ.L(this.V.AQ);}if(AtH.length>0){if(this.AGx)this.V.R((((this.DI+AcE)+
AtH)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DI+AcE)+
AtH)+String.fromCharCode(0x29));}else this.AK4();},Qk:function(G){if(this.Fy===1
)A.pe([this,this.U2],this);else if(this.Fy===4)A.pe([this,this.Aiv],this);else if(
this.Fy===5)A.pe([this,this.Aig],this);C.Dp.Qk.call(this,G);},J8:function(G){switch(
this.A9){case 0:C.Dp.J8.call(this,G);break;case 3:break;default:this.Adl(this);}
},J3:function(G){switch(this.A9){case 0:C.Dp.J3.call(this,G);break;default:this.
Aif(this);}},Adn:function(G){var F;if(!!this.Di)this.Uf((F=this.Di,F[1].call(F[0
])));},AbZ:function(E){if(A.aaZ(this.Di,E))return;if(!!this.Di)A.z$([this,this.Adn
],this.Di,0);this.Di=E;if(!!E)A.zX([this,this.Adn],E,0);if(!!E)A.pe([this,this.Adn
],this);},Uf:function(E){if(this.FS===E)return;this.FS=E;this.Au.Initialize(this.
FS);this.An();},Adl:function(G){this.Fy=1;this.An();if(this.Bo.By){A.pe([this,this.
U2],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Bbu:function(s){this.Adl(s);},U2:
function(G){this.Et(this.A9+1);},AlS:function(G){this.Fy=4;this.An();if(this.Bo.
By){A.pe([this,this.Aiv],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AlR:function(
G){this.Fy=5;this.An();if(this.Bo.By){A.pe([this,this.Aig],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},Aiv:function(G){var B;var F;var BR=this.FS;switch(this.A9){
case 1:{if(this.Ar6){var AA6=A._NewObject(A.Core.AnX,0);AA6.Ke=1;if(this.Au.J(AA6
).JM()>A._GetAutoObject(A.Device.Helper).Ds())return;}if(this.Au.GE<this.Au.Zf()
)this.Au.Lo(this.Au.GE+1);}break;case 2:{if(this.Ar6){var AA6=A._NewObject(A.Core.
AnX,0);AA6.Ke=this.Au.Zf();if(this.Au.J(AA6).JM()>A._GetAutoObject(A.Device.Helper
).Ds())return;}this.Au.Uj(this.Au.Hc+1);if(this.Au.Zf()<this.Au.GE)this.Au.Lo(this.
Au.Zf());}break;case 3:{if(this.Ar6){var A1h=A._NewObject(A.Core.Bu,0);A1h.Initialize(
this.Au.JM());A1h.Year+=1;if(A1h.JM()>A._GetAutoObject(A.Device.Helper).Ds())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
Uf(((B=(this.Au.JM()|0))<0)?B+0x100000000:B);if(this.FS!==BR){if(!!this.Di)(F=this.
Di,F[2].call(F[0],this.FS));A.abo(this.Di,0);}},Aig:function(G){var B;var F;var BR=
this.FS;if(this.A9===1)this.Au.Lo(this.Au.GE-1);if(this.A9===2){this.Au.Uj(this.
Au.Hc-1);if(this.Au.Zf()<this.Au.GE)this.Au.Lo(this.Au.Zf());}if(this.A9===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.Uf(((B=(this.Au.JM()|
0))<0)?B+0x100000000:B);if(this.FS!==BR){if(!!this.Di)(F=this.Di,F[2].call(F[0],
this.FS));A.abo(this.Di,0);}},DH:function(G){var F;if(!this.N)return;switch(this.
A9){case 1:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(F[
0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.G8];(F=this.N,F[1].call(F[
0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=
null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aen));(F=this.N,F[1].call(F[0])).
B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.U2];}break;case 2:{(F=this.N,F[
1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N
,F[1].call(F[0])).CA=[this,this.G8];(F=this.N,F[1].call(F[0])).Cq(A.aaL(A.ach.AmS
));(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aif];(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aen));(F=this.N,F[1].call(F[0])).
B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.U2];}break;case 3:{(F=this.N,F[
1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N
,F[1].call(F[0])).CA=[this,this.G8];(F=this.N,F[1].call(F[0])).Cq(A.aaL(A.ach.AmS
));(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aif];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=
this.N,F[1].call(F[0])).Cg=null;}break;default:this.FC.AkF((F=this.N,F[1].call(F[
0])));}},AFr:function(E){if(this.Ar6===E)return;this.Ar6=E;},FO:function(G){this.
Et(1);},G8:function(G){this.Et(0);},Et:function(EK){var F;var AAe=this.A9;if(!this.
A9){this.FC.Ajr((F=this.N,F[1].call(F[0])));if((EK===1)&&!this.FS){var BR=this.FS;
this.Uf(A._GetAutoObject(A.Device.Helper).Ds());if(this.FS!==BR){if(!!this.Di)(F=
this.Di,F[2].call(F[0],this.FS));A.abo(this.Di,0);}}}this.A9=EK;this.Bjg=true;if((
this.A9<0)||(this.A9>3))this.A9=0;this.DH(this);this.Gp.By=!!this.A9;this.Go.By=
!!this.A9;if((!!AAe&&!this.A9)&&!!this.OD)A.pe(this.OD,this);this.An();},Aif:function(
G){if(this.A9>1)this.Et(this.A9-1);},_Init:function(aArg){C.Dp._Init.call(this,aArg
);A.Core.Bu._Init.call(this.Au={I:this},0);A.Core.BL._Init.call(this.Jp={I:this}
,0);A.acg.AL._Init.call(this.HH={I:this},0);A.acg.Text._Init.call(this.Pp={I:this
},0);A.acg.Text._Init.call(this.VG={I:this},0);A.acg.Text._Init.call(this.QU={I:
this},0);A.acg.Text._Init.call(this.Ye={I:this},0);A.acg.Text._Init.call(this.PZ={
I:this},0);A.Core.BL._Init.call(this.Gp={I:this},0);A.Core.BL._Init.call(this.Go={
I:this},0);this.__proto__=C.SI;this.H(UQ);this.V.R(An_);this.Hr.Z(false);this.H0.
Z(false);this.Jp.Filter=1;this.HH.H(An$);this.HH.L(0x55FFFFFF);this.Pp.H(Aoa);this.
Pp.I3(true);this.Pp.A8(0x14);this.VG.H(Aob);this.VG.I3(true);this.VG.A8(0x14);this.
VG.R(Afq);this.QU.H(Ak1);this.QU.I3(true);this.Ye.H(AxP);this.Ye.I3(true);this.Ye.
R(Afq);this.PZ.H(AxQ);this.PZ.I3(true);this.PZ.A8(0x11);this.Gp.Filter=4;this.Gp.
By=false;this.Go.Filter=5;this.Go.By=false;this.J(this.HH,0);this.J(this.Pp,0);this.
J(this.VG,0);this.J(this.QU,0);this.J(this.Ye,0);this.J(this.PZ,0);this.Jp.BM=[this
,this.Bbu];this.Pp.S(A.aaL(A.fl.EG));this.VG.S(A.aaL(A.fl.EG));this.QU.S(A.aaL(A.
fl.EG));this.Ye.S(A.aaL(A.fl.EG));this.PZ.S(A.aaL(A.fl.EG));this.Gp.BM=[this,this.
AlS];this.Gp.DZ=[this,this.Aiv];this.Go.BM=[this,this.AlR];this.Go.DZ=[this,this.
Aig];this.FC=A._NewObject(C.Aeg,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dp;this.Au._Done();this.Jp._Done();this.HH._Done();this.Pp._Done();this.VG._Done(
);this.QU._Done();this.Ye._Done();this.PZ._Done();this.Gp._Done();this.Go._Done(
);C.Dp._Done.call(this);},_ReInit:function(){C.Dp._ReInit.call(this);this.Au._ReInit(
);this.Jp._ReInit();this.HH._ReInit();this.Pp._ReInit();this.VG._ReInit();this.QU.
_ReInit();this.Ye._ReInit();this.PZ._ReInit();this.Gp._ReInit();this.Go._ReInit(
);this.Pp.S(A.aaL(A.fl.EG));this.VG.S(A.aaL(A.fl.EG));this.QU.S(A.aaL(A.fl.EG));
this.Ye.S(A.aaL(A.fl.EG));this.PZ.S(A.aaL(A.fl.EG));},_Mark:function(D){var B;C.
Dp._Mark.call(this,D);if((B=this.FC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Di)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jp
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ye)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OG={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.BdK],[B=A._GetAutoObject(A.Device.Device),B.A8I,B.Ba6],0);
A.pe([this,this.BdK],this);},Dr:function(){return 16;},Gd:function(aIndex){return this.
LanguageToString.BO(this.C7(aIndex));},As:function(E){C.CQ.As.call(this,E);A._GetAutoObject(
A.Device.Device).Ant(E);},BdK:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OG;this.Cr.Set(0,0);this.Cr.Set(1,1);this.Cr.Set(2,5);this.Cr.
Set(3,3);this.Cr.Set(4,8);this.Cr.Set(5,9);this.Cr.Set(6,7);this.Cr.Set(7,6);this.
Cr.Set(8,10);this.Cr.Set(9,2);this.Cr.Set(10,11);this.Cr.Set(11,12);this.Cr.Set(
12,13);this.Cr.Set(13,14);this.Cr.Set(14,15);this.Cr.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.CQ;this.LanguageToString._Done();C.CQ._Done.
call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.CQ._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Q$={TemperatureUnitToString:
null,Dr:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gd:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BO(aIndex);},DO:function(A7){return A7;},Hp:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).AwW(E);}
,Init:function(aArg){var B;A.zX([this,this.Bgd],[B=A._GetAutoObject(A.Device.Device
),B.Arj,B.As9],0);A.pe([this,this.Bgd],this);},Bgd:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B$,this.Ca],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Q$;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AUQ={Ajp:null,Act:null,Ku:null,AP:null,A$:null,Bk:function(aSize){C.Ba.Bk.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Ku.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajp.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.Act.H(this.Ajp.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Ku.L(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.AX
)return;this.Hk=Ad;if(!!this.AX){var Alq=this.AX.HD(Ad,6);var ApN=this.AX.CE(Ad,
7);var AtX=this.AX.IY(Ad,9);this.T(A._GetAutoObject(A.acj.KI).ACG(Alq));this.Ku.
R(A._GetAutoObject(A.acj.KI).A6u(Alq));this.Act.R(A._GetAutoObject(A.Device.Converter
).AkQ(ApN));this.Act.L(A._GetAutoObject(A.acj.Assessment).Xo(AtX));this.Ajp.L(A.
_GetAutoObject(A.acj.Assessment).Qh(AtX));this.An();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Ajp={I:this},0);A.acg.Text._Init.
call(this.Act={I:this},0);A.acg.Text._Init.call(this.Ku={I:this},0);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AUQ;this.V.H(O1);this.Act.L(A.jb.Text);this.Ku.R(Rh);this.Ku.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A$.H(AxR);this.A$.L(A.jb.Bc);this.J(this.Ajp,0);this.J(this.Act
,0);this.J(this.Ku,0);this.J(this.AP,0);this.J(this.A$,0);this.Act.S(A.aaL(A.fl.
Af));this.Ku.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajp._Done();this.Act._Done();this.Ku._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajp._ReInit(
);this.Act._ReInit();this.Ku._ReInit();this.AP._ReInit();this.A$._ReInit();this.
Act.S(A.aaL(A.fl.Af));this.Ku.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Act)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ku)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.FY={AX:null,AR:null,Cp:null,AD:
null,Ae$:null,QA:null,KK:A.jV,Li:null,AVa:true,He:function(G){var B;var F_=this.
AD.GY;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Aa)return;Aa.Zi(this.
AX);Aa.Ce(F_);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GH]));
},NX:function(E){if(E===this.Li)return;this.Li=E;this.AD.NX(E);},Zi:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Ce],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Ce],E,0);A.pe([this,this.Ce],this);},Ce:function(G){if(this.AVa===
false)return;if(!!this.AX){this.AD.Jr(this.AX.Cd());this.AD.Abv(0,this.AD.AY-1);
}else this.AD.Jr(0);if((this.AD.AY>0)&&(this.FF()<0))this.G0(0);if(this.FF()>=this.
AD.AY){this.G0(0);this.AD.FX(0);}if(this.AD.AY<=0){this.QA.Z(true);this.G0(-1);}
else{this.QA.Z(false);this.ABr(null,null);}},Fb:function(G){var B;this.Ae$.Mu(this.
AD.GH*this.AD.AY);this.Ae$.Mw((B=this.AD.M)[3]-B[1]);this.Ae$.Mv(-this.AD.Bt);},
Dz:function(G){if(this.AD.AY>0){switch(this.Cp.CN){case 4:if(this.FF()>0)this.G0(
this.FF()-1);break;case 5:if(this.FF()<(this.AD.AY-1))this.G0(this.FF()+1);break;
default:this.Cp.NE=true;}this.AD.HC(this.FF(),true,null,null);}else if((this.Cp.
CN!==4)&&(this.Cp.CN!==5))this.Cp.NE=true;},Zj:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.Abv(0,this.AD.AY);},G0:function(E){this.AD.G0(E);this.AD.HC(E,
true,null,null);},FF:function(){return this.AD.Gl;},Dx:function(E){if(this.KK===
E)return;this.KK=E;this.QA.R(E);},ABr:function(AcO,E0){this.AD.ABr(AcO,E0);},ATs:
function(E){if(this.AVa===E)return;this.AVa=E;if(E)A.pe([this,this.Ce],this);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.Core.BL._Init.call(this.Cp={I:this
},0);A.Core.CL._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Ae$={I:this},
0);A.acg.Text._Init.call(this.QA={I:this},0);this.__proto__=C.FY;this.H(UR);this.
Li=C.Ba;this.Cp.Filter=147;this.AD.A3(0x3F);this.AD.H(UR);this.AD.AeW(40);this.Ae$.
A3(0x3A);this.Ae$.H(AsD);this.QA.A3(0x3F);this.QA.H(AxS);this.QA.Hs(10);this.QA.
KR(true);this.QA.A8(0xA);this.QA.L(A.jb.Text);this.J(this.AD,0);this.J(this.Ae$,
0);this.J(this.QA,0);this.Cp.BM=[this,this.Dz];this.Cp.DZ=[this,this.Dz];this.AD.
Ej=[this,this.Fb];this.AD.He=[this,this.He];this.QA.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.O;this.Cp._Done();this.AD._Done();this.Ae$._Done();this.
QA._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Cp._ReInit();this.AD._ReInit();this.Ae$._ReInit();this.QA._ReInit();this.
QA.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hk:-1,CS:function(){this.Ce(this.Hk);},Ai:function(Ae){var B;C.Cm.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hk%2)===1)this.Background.L(A.
jb.CI);else this.Background.L(A.jb.CU);}},Zi:function(E){if(this.AX===E)return;this.
AX=E;},Ce:function(Ad){A.ab5("%s",AxT);},_Init:function(aArg){C.Cm._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Cm._ReInit.call(this);this.CS(
);},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GS={Bh:null,Fu:null
,DL:null,FE:null,VN:null,JE:null,KK:A.jV,ATQ:0,ATR:0,ATS:0,Afa:false,Init:function(
aArg){var B;A.zX([this,this.A2J],[B=A._GetAutoObject(A.Device.Device),B.AEj,B.AIv
],0);A.zX([this,this.A2J],[B=A._GetAutoObject(A.Device.Device),B.A8l,B.BaT],0);A.
zV([this,this.AfY],A._GetAutoObject(A.Device.Device).Ao,0);A.zV([this,this.Acx],
A._GetAutoObject(A.Device.Device).Ao,0);A.zX([this,this.BAA],[B=A._GetAutoObject(
A.Device.Helper),B.UT,B.UU],0);A.pe([this,this.Acx],this);A.pe([this,this.A0a],this
);A.pe([this,this.Axl],this);},Wn:function(G){this.Agi();if(!A._GetAutoObject(A.
Device.Device).JE){this.A4z(A.aaR(A.acf.Bjx),[this,this.Bj_],1);this.A4z(A.aaR(A.
acf.Bow),[this,this.Bj9],0);A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Nz(
A.aaR(A.acf.Bi8));A._GetAutoObject(C.BN).FA();}var P;for(P=this.JE.Dr()-1;P>=0;P=
P-1)switch(this.JE.C7(P)){case 0:this.Agh(A.aaR(A.acf.XI),[this,this.ATt],0);break;
case 1:this.Agh(A.aaR(A.acf.Temperature),[this,this.ATv],1);break;case 2:this.Agh(
A.aaR(A.acf.Rating),[this,this.ATu],2);break;case 3:this.Agh(A.aaR(A.acf.Afj),[this
,this.ATw],3);break;default:A.ab5("%s",AxU);}A._GetAutoObject(C.BN).FA();A._GetAutoObject(
C.BN).Nz(A.aaR(A.acf.A5X));A._GetAutoObject(A.Device.Device).Dt(6);},BvR:function(
s){this.Wn(s);},Dz:function(G){var D2=(A.Core.BL.isPrototypeOf(G)?G:null);var AfL=
this.JE.DO(A._GetAutoObject(A.Device.Device).JE);if(this.Afa)return;switch(D2.CN
){case 6:{AfL=AfL-1;if(AfL<0)AfL=this.JE.Dr()-1;A._GetAutoObject(A.Device.Device
).AbT(this.JE.C7(AfL));}break;case 7:{AfL=AfL+1;if(AfL>=this.JE.Dr())AfL=0;A._GetAutoObject(
A.Device.Device).AbT(this.JE.C7(AfL));}break;default:D2.NE=true;}},CB:function(G
){if(this.DL.AzP()){this.DL.AcZ();if(this.DL.AzP()===false)this.Bh.ATs(true);return;
}else if(this.Afa)this.A3C(this);if(!!this.Bh)this.Bh.ATs(true);},EY:function(G){
if(!!this.Bh)this.Bh.ATs(false);},Axl:function(G){var B;if(!!this.Bh)this.HL(this.
Bh);this.Bh=A._NewObject(C.AMh,0);this.Bh.H(Aoc);this.Bh.Zi(A._GetAutoObject(A.Device.
Device).Ao);this.Bh.Zj([this,this.AIH]);if(!!this.Fu)this.Bh.A9v([B=this.Fu,B.A82
,B.A_m]);this.A3W(this);this.J(this.Bh,0);if(this.Afa===false)this.Bb(this.Bh);this.
A2J(this);this.Bou(this);},A9s:function(G){A._GetAutoObject(A.Device.Device).Dt(
0);this.Dn(this.A6H());this.Eh.AR=[this,this.AIH];this.AK9(this);this.Eh.Ar(true
);this.Bb(this.Eh);this.Afa=true;},Bke:function(G){var B;A._GetAutoObject(A.Device.
Device).Dt(0);if(!this.Bh)return;var Aa=(C.ABS.isPrototypeOf(B=this.Bh.AD.BiU(this.
Bh.AD.Gl))?B:null);if(!!Aa)A._GetAutoObject(A.Device.Helper).HJ(Aa.Hk);else A._GetAutoObject(
A.Device.Helper).W.Hf();this.Af6();},AlQ:function(G){var F;if(!this.FE)this.A5Y(
this);else switch((F=this.FE,F[1].call(F[0]))){case 0:this.A5Y(this);break;case 1:
this.BhQ(this);break;case 9:this.A5Z(this);break;case 4:this.A51(this);break;case
6:this.A54(this);break;case 8:this.ANJ(this);break;case 2:this.A58(this);break;case
3:this.BhR(this);break;case 7:this.BhS(this);break;case 5:this.BhT(this);break;case
10:this.BhV(this);break;case 11:this.A50(this);break;case 12:this.A57(this);break;
case 13:this.A59(this);break;case 14:this.A52(this);break;case 18:this.A53(this);
break;case 15:this.A55(this);break;case 16:this.A5_(this);break;case 17:this.A56(
this);break;default:A.ab5("%s%e",Afr,(F=this.FE,F[1].call(F[0])));}},AIH:function(
s){this.AlQ(s);},Blo:function(G){this.Dn(C.Ki);this.Eh.AR=null;this.Afa=false;this.
Acx(this);this.BfJ();this.N.TU.Do(255);this.N.TW.Do(255);this.Bb(this.Bh);this.Eh.
Ar(false);},Anf:function(G){A._GetAutoObject(C.A1).Fs();},Dx:function(E){if(this.
KK===E)return;this.KK=E;this.A3W(this);},Abh:function(){switch(A._GetAutoObject(
A.Device.Device).JE){case 0:return this.Bg0(A._GetAutoObject(A.Device.Device).Amk
);case 2:return C.AMU;case 1:return C.AMV;case 3:return C.AMX;case 8:case 9:case
10:case 4:case 5:case 6:return C.Amq;case 7:return C.ABR;case 12:return C.ABU;case
11:return C.ABQ;case 13:return C.ABT;default:throw new Error(Aod);}},Abi:function(
){switch(A._GetAutoObject(A.Device.Device).JE){case 0:return this.Bg1(A._GetAutoObject(
A.Device.Device).Amk);case 2:return C.AC$;case 1:return C.APq;case 3:return C.APs;
case 4:return C.AC7;case 8:case 9:case 10:case 5:case 6:return C.AmR;case 7:return C.
AC9;case 12:return C.AC_;case 11:return C.AC8;case 13:return C.ADa;default:throw new
Error(Aod);}},A2J:function(G){this.AS7(A._GetAutoObject(A.Device.Device).JE);this.
AS8(A._GetAutoObject(A.Device.Device).Amk);if(!!this.Bh){this.Bh.NX(this.Abh());
this.BoA(this);}},BoA:function(G){var B;if(!!this.Fu)this.HL(this.Fu);this.Fu=(C.
Db.isPrototypeOf(B=A._NewObject(this.Abi(),0))?B:null);this.Fu.H(IN);if(!!this.Bh
)this.Bh.A9v([B=this.Fu,B.A82,B.A_m]);this.J(this.Fu,0);},Bkc:function(G){this.Q5(
this);A._GetAutoObject(A.Device.Device).Dt(0);},ATt:function(G){A._GetAutoObject(
A.Device.Device).AbT(0);},ATv:function(G){A._GetAutoObject(A.Device.Device).AbT(
1);},ATu:function(G){A._GetAutoObject(A.Device.Device).AbT(2);},ATw:function(G){
A._GetAutoObject(A.Device.Device).AbT(3);},Q5:function(G){A._GetAutoObject(A.Device.
Device).Ao.Bl(A._GetAutoObject(A.Device.Helper).Mo());},A0a:function(s){this.Q5(
s);},HM:function(G){if(this.Afa){this.AK9(this);return;}this.N.CZ(A.aaL(A.ach.EX
));this.N.Cq(A.aaL(A.ach.ADt));this.N.C5(A.aaL(A.ach.Options));this.N.CA=[this,this.
Anf];this.N.Ck=[this,this.A9s];this.N.Cg=[this,this.BvR];this.N.Ht(A.jV);this.N.
FH(A.jV);this.N.B2(A.jV);if(!A._GetAutoObject(A.Device.Device).Ao.Cd()){this.N.I0.
Do(100);this.N.Ck=null;}else this.N.I0.Do(255);},AyE:function(s){this.HM(s);},Agh:
function(AcX,AcY,AI5){A._GetAutoObject(C.BN).Aur(AcX,AcY,[this,this.A8V,this.AS7
],AI5);},AfY:function(G){this.A3W(this);if(this.Afa)A.pe([this,this.AK9],this);}
,Af6:function(){A._GetAutoObject(C.A1).BU(9);},A3W:function(G){if(!this.Bh)return;
if(!A._GetAutoObject(A.Device.Device).Ao.QC()||!A._GetAutoObject(A.Device.Device
).Ao.Filter)this.Bh.Dx(A.aaR(A.acf.AD$));else if(A._GetAutoObject(A.Device.Helper
).Aq0(A._GetAutoObject(A.Device.Device).Ao.Filter))this.Bh.Dx(this.KK);else if(!
A._GetAutoObject(A.Device.Device).Ao.Filter.DN(1,4)){if(A._GetAutoObject(A.Device.
Helper).ACN(A._GetAutoObject(A.Device.Device).Ao.Filter)===1)this.Bh.Dx(A.aaR(A.
acf.ANU));else this.Bh.Dx(A.aaR(A.acf.ANT));}else this.Bh.Dx(A.aaR(A.acf.ARQ));}
,AEz:function(G){var F;if(!!this.FE)(F=this.FE,F[2].call(F[0],0));},AwD:function(
E){if(A.aaZ(this.FE,E))return;if(!!this.FE)A.z$([this,this.A0j],this.FE,0);this.
FE=E;if(!!E)A.zX([this,this.A0j],this.FE,0);if(!!E)A.pe([this,this.A0j],this);},
AEF:function(G){var F;if(!!this.FE)(F=this.FE,F[2].call(F[0],1));},AwI:function(
G){var F;if(!!this.FE)(F=this.FE,F[2].call(F[0],2));},ATa:function(G){var F;if(!
!this.FE)(F=this.FE,F[2].call(F[0],3));},ATo:function(G){var F;if(!!this.FE)(F=this.
FE,F[2].call(F[0],7));},ATp:function(G){var F;if(!!this.FE)(F=this.FE,F[2].call(
F[0],5));},A58:function(G){if(!this.Bh)return;if(this.M9()){A._GetAutoObject(A.Device.
Helper).HJ(this.Bh.FF());this.DL.Qf(1);}},IU:function(AcX,AcY,AoO){A._GetAutoObject(
C.BN).Aur(AcX,AcY,[this,this.A8X,this.AS9],AoO);},Bly:function(G){var F;if(!!this.
FE)(F=this.FE,F[2].call(F[0],4));},A51:function(G){if(!this.Bh)return;if(this.M9(
)){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF());this.DL.BA2();}},Blz:function(
G){var F;if(!!this.FE)(F=this.FE,F[2].call(F[0],6));},A54:function(G){if(!this.Bh
)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF());this.DL.
BA3();}},ANJ:function(G){if(!this.Bh)return;if(this.M9()){A._GetAutoObject(A.Device.
Helper).HJ(this.Bh.FF());this.DL.Qf(1024);}},BmL:function(G){var F;if(!!this.FE)(
F=this.FE,F[2].call(F[0],8));},Akk:function(G){var F;if(!!this.FE)(F=this.FE,F[2
].call(F[0],9));},BhR:function(G){if(!this.Bh)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).HJ(this.Bh.FF());this.DL.Qf(2);}},A5Y:function(G){if(!this.Bh)return;
if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF());if(A._GetAutoObject(
A.Device.Helper).AjW(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(
A.Device.Device).A_(66,true,A.jV,0,null);else this.Af5();}},BhQ:function(G){if(!
this.Bh)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF());
this.DL.Qf(16);}},Af5:function(){A._GetAutoObject(C.A1).BU(37);},BhS:function(G){
if(!this.Bh)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF(
));this.DL.Qf(4);}},BhT:function(G){if(!this.Bh)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).HJ(this.Bh.FF());this.DL.Qf(8);}},A5Z:function(G){var B;if(!this.
Bh)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF());if(this.
Afa){A.zX([this,this.AAg],[B=this.DL,B.Anm,B.Js],0);this.A3C(this);}this.DL.AcZ(
);}},ALT:function(AcX,AcY,BxP){A._GetAutoObject(C.BN).BgO(AcX,AcY,BxP);},AK9:function(
G){this.N.Ht(A.jV);this.N.B2(A.jV);this.N.CZ(A.aaL(A.ach.Aem));this.N.CA=[this,this.
Blo];this.N.TU.Do(100);this.N.TW.Do(100);var F$=A._GetAutoObject(A.Device.Device
).Ao.Cd();if(F$<=0){this.N.Cq(null);this.N.C5(null);this.N.Ck=null;this.N.Cg=null;
this.N.Zr=false;this.N.Zs=false;}else if(F$===1){this.N.Cq(null);this.N.C5(A.aaL(
A.ach.Aen));this.N.Ck=null;this.N.Cg=[this,this.AIH];this.N.Zr=false;this.N.Zs=false;
}else{this.N.Cq(A.aaL(A.ach.AqR));this.N.C5(A.aaL(A.ach.AqY));this.N.Ck=[this,this.
A3e];this.N.Cg=[this,this.A3f];this.N.Zr=true;this.N.Zs=true;}},A3e:function(G){
if(!this.Bh)return;if(this.Bh.FF()<(A._GetAutoObject(A.Device.Device).Ao.Cd()-1)
)this.Bh.G0(this.Bh.FF()+1);},A3f:function(G){if(!this.Bh)return;if(this.Bh.FF()>
0)this.Bh.G0(this.Bh.FF()-1);},Bou:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).Ao.Lb(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bh.G0(Bf);A.ab5("%s",Aoe);}}},M9:function(){return this.
Bh.FF()>=0;},Aj9:function(){return A._GetAutoObject(A.Device.Device).Ao.Cd()>5;}
,Agi:function(){this.BgP();A._GetAutoObject(C.BN).Qu(A.aaR(A.acf.AUf),[this,this.
A9s]);A._GetAutoObject(C.BN).FA();},Acx:function(G){if(this.Afa)this.AK9(this);else
this.HM(this);},A3C:function(G){var aFilter=A._GetAutoObject(A.Device.Device).Ao.
Filter.Fd();var AyR=aFilter.DN(1,4);if(!!AyR){aFilter.N3(AyR);A._GetAutoObject(A.
Device.Device).Ao.Bl(aFilter);if(!!this.Bh)this.Bh.G0(0);}},AAg:function(G){var B;
if(!this.DL.Gr&&this.Afa){A.z$([this,this.AAg],[B=this.DL,B.Anm,B.Js],0);this.A3C(
this);}},Bnm:function(G){var F;if(!!this.FE)(F=this.FE,F[2].call(F[0],10));},BhV:
function(G){if(!this.Bh)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(
this.Bh.FF());this.DL.Qf(256);}},A26:function(G){var F;this.AS9((F=this.FE,F[1].
call(F[0])));A.pe([this,this.AyE],this);},A0j:function(s){this.A26(s);},Blv:function(
G){var F;if(!!this.FE)(F=this.FE,F[2].call(F[0],11));},A50:function(G){if(!this.
Bh)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF());this.
DL.Qf(4096);}},A57:function(G){if(!this.Bh)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).HJ(this.Bh.FF());this.DL.Qf(16384);}},A59:function(G){if(!this.
Bh)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF());this.
BAN();}},BAN:function(){A._GetAutoObject(C.A1).Ahi(86);},A52:function(G){if(!this.
Bh)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF());this.
DL.Qf(32768);}},A55:function(G){if(!this.Bh)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).HJ(this.Bh.FF());this.DL.Qf(65536);}},A5_:function(G){if(!this.
Bh)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF());this.
DL.Qf(131072);}},BgP:function(){if(!A._GetAutoObject(A.Device.Device).Ao.Filter||
A._GetAutoObject(A.Device.Helper).Aq0(A._GetAutoObject(A.Device.Device).Ao.Filter
))A._GetAutoObject(C.BN).XG(A.aaR(A.acf.ABX));else A._GetAutoObject(C.BN).Qu(A.aaR(
A.acf.ABX),[this,this.Bkc]);A._GetAutoObject(C.BN).Qu(A.aaR(A.acf.AkI),[this,this.
Bke]);A._GetAutoObject(C.BN).FA();},Bg1:function(Aot){switch(Aot){case 0:return C.
AmR;case 1:return C.APo;default:throw new Error(W5+Aot.toFixed());}},Bg0:function(
Aot){switch(Aot){case 0:return C.Amq;case 1:return C.AMS;default:throw new Error(
W5+Aot.toFixed());}},Bj9:function(G){A._GetAutoObject(A.Device.Device).Art(0);},
Bj_:function(G){A._GetAutoObject(A.Device.Device).Art(1);},A4z:function(AcX,AcY,
Aot){A._GetAutoObject(C.BN).Aur(AcX,AcY,[this,this.A8W,this.AS8],Aot);},A56:function(
G){if(!this.Bh)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.
FF());this.DL.Qf(128);}},BAA:function(G){var B;if(!this.Bh)return;A.pe([B=this.Bh
,B.Ce],this);},A53:function(G){if(!this.Bh)return;if(this.M9()){A._GetAutoObject(
A.Device.Helper).HJ(this.Bh.FF());this.DL.Qf(524288);}},BhU:function(G){if(!this.
Bh)return;if(this.M9()){A._GetAutoObject(A.Device.Helper).HJ(this.Bh.FF());this.
DL.Qf(262144);}},AS7:function(E){if(this.ATQ===E)return;this.ATQ=E;A.abo([this,this.
A8V,this.AS7],0);},AS8:function(E){if(this.ATR===E)return;this.ATR=E;A.abo([this
,this.A8W,this.AS8],0);},AS9:function(E){if(this.ATS===E)return;this.ATS=E;A.abo([
this,this.A8X,this.AS9],0);},A6H:function(){return C.Yn;},BfJ:function(){var B;var
Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).Ao.Filter){Filter=
A._GetAutoObject(A.Device.Device).Ao.Filter.Fd();FilterCriterion=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=Filter.DN(1,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion
);A._GetAutoObject(A.Device.Device).Ao.Bl(Filter);}},A8V:function(){return this.
ATQ;},A8W:function(){return this.ATR;},A8X:function(){return this.ATS;},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.AC$._Init.call(this.VN={I:this},0);C.JE._Init.
call(this.JE={I:this},0);this.__proto__=C.GS;this.Background.H(Cc);this.N.Z(true
);this.N.OL(true);this.N.OM(true);this.Eh.A9W(A.jb.CU);this.Eh.A9X(A.jb.Text);this.
Dn(C.Ki);this.VN.H(IN);this.KK=A.aaR(A.acf.AD$);this.J(this.VN,0);this.DL=A._GetAutoObject(
C.DL);this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.VN._Done();this.
JE._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
VN._ReInit();this.JE._ReInit();this.Dx(A.aaR(A.acf.AD$));},_Mark:function(D){var
B;C.AB._Mark.call(this,D);if((B=this.Bh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DL)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.FE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JE)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ABS={AP:null,A$:null,UC:null,Acr:
null,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UC.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A$.H([
this.UC.M[2]-1,0,this.UC.M[2]+1,aSize[1]]);this.Acr.H([this.UC.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UC.L(this.V.AQ);this.Acr.L(this.
V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hk=Ad;if(!!this.AX){this.T(this.
AX.CE(Ad,1).toFixed());this.UC.R(this.AX.CE(Ad,2).toFixed());this.Acr.R(this.AX.
CE(Ad,3).toFixed());this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.Text._Init.call(this.UC={I:this},0);A.acg.Text._Init.call(this.Acr={I:this
},0);this.__proto__=C.ABS;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.UC.L(A.jb.Text
);this.Acr.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.UC,0);this.
J(this.Acr,0);this.UC.S(A.aaL(A.fl.Af));this.Acr.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.UC.
_Done();this.Acr._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.UC._ReInit();this.Acr._ReInit(
);this.UC.S(A.aaL(A.fl.Af));this.Acr.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.AdX={Oy:null,SJ:null,Mi:null,Init:function(aArg){var B;A.zX([this,this.A2M],[
B=A._GetAutoObject(A.Device.Device),B.Av0,B.Ayw],0);A.zX([this,this.Adm],[B=A._GetAutoObject(
A.Device.Device),B.AvX,B.Ayv],0);A.pe([this,this.Adm],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SJ.R(A._GetAutoObject(A.Device.Device).AaT.toFixed()+Ak2
);this.Oy.Z(A._GetAutoObject(A.Device.Device).Amt);},Adm:function(G){this.An();}
,MU:function(G){A._GetAutoObject(C.A1).Fs();},A2M:function(G){if(A._GetAutoObject(
A.Device.Device).Amt===false){this.Oy.Z(false);A._GetAutoObject(C.A1).Fs();}else
this.Oy.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oy={I:this},0);A.acg.Text._Init.call(this.SJ={I:this},0);C.Mi._Init.call(
this.Mi={I:this},0);this.__proto__=C.AdX;var B;this.Background.L(A.jb.CU);this.N.
Z(true);this.N.B2(A.aaR(A.acf.Ok));this.Oy.H(AsE);this.Oy.R(A.aaR(A.acf.Oy));this.
Oy.L(A.jb.Text);this.Oy.Z(false);this.SJ.H(AsF);this.SJ.R(AsG);this.SJ.L(A.jb.Text
);this.Mi.H(AsH);this.J(this.Oy,0);this.J(this.SJ,0);this.J(this.Mi,0);this.N.Cg=[
this,this.MU];this.Oy.S(A.aaL(A.fl.Af));this.SJ.S(A.aaL(A.fl.Af));this.Mi.As([B=
A._GetAutoObject(A.Device.Device),B.AvX,B.Ayv]);this.Mi.A_b([B=A._GetAutoObject(
A.Device.Device),B.Av0,B.Ayw]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Oy._Done();this.SJ._Done();this.Mi._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Oy._ReInit();this.SJ._ReInit();this.Mi._ReInit(
);this.N.B2(A.aaR(A.acf.Ok));this.Oy.R(A.aaR(A.acf.Oy));this.Oy.S(A.aaL(A.fl.Af)
);this.SJ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Oy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mi={AdS:null,AdT:null,J$:function(G){var F;if(!!this.Q){this.A1V();var Ac2=(
F=this.Q,F[1].call(F[0]));if(Ac2>20)this.Ou.L(A.jb.EW);else this.Ou.L(A.jb.Gb);this.
Ou.L((this.Ou.AQ&0x00FFFFFF)|(this.Aly(Ac2,0,20)<<24));this.Tz.L((this.Tz.AQ&0x00FFFFFF
)|(this.Aly(Ac2,21,40)<<24));this.TA.L((this.TA.AQ&0x00FFFFFF)|(this.Aly(Ac2,41,
60)<<24));this.AdS.L((this.AdS.AQ&0x00FFFFFF)|(this.Aly(Ac2,61,80)<<24));this.AdT.
L((this.AdT.AQ&0x00FFFFFF)|(this.Aly(Ac2,81,100)<<24));}},A1V:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.UX=this.AdT;else if((F=this.Q,F[
1].call(F[0]))>60)this.UX=this.AdS;else if((F=this.Q,F[1].call(F[0]))>40)this.UX=
this.TA;else if((F=this.Q,F[1].call(F[0]))>20)this.UX=this.Tz;else this.UX=this.
Ou;}else this.UX=null;},_Init:function(aArg){C.Ow._Init.call(this,aArg);A.acg.AL.
_Init.call(this.AdS={I:this},0);A.acg.AL._Init.call(this.AdT={I:this},0);this.__proto__=
C.Mi;this.H(Ak3);this.NL.H(Ak3);this.Ou.H(AsI);this.Tz.H(AxV);this.TA.H(AxW);this.
AdS.H(AVE);this.AdS.L(A.jb.EW);this.AdT.H(AVF);this.AdT.L(A.jb.EW);this.J(this.AdS
,0);this.J(this.AdT,0);this.NL.Aw(A.aaL(A.ach.AMC));},_Done:function(){this.__proto__=
C.Ow;this.AdS._Done();this.AdT._Done();C.Ow._Done.call(this);},_ReInit:function(
){C.Ow._ReInit.call(this);this.AdS._ReInit();this.AdT._ReInit();},_Mark:function(
D){var B;C.Ow._Mark.call(this,D);if((B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AUL={N6:null,Lq:null,AkU:null,ZN:null,ZM:null,CS:function(){this.An();},Init:
function(aArg){var B;A.zX([this,this.ApD],[B=A._GetAutoObject(A.Device.Device),B.
ASs,B.AZ6],0);A.zX([this,this.ApD],[B=A._GetAutoObject(A.Device.Device),B.ASv,B.
AZ8],0);A.zX([this,this.ApD],[B=A._GetAutoObject(A.Device.Device),B.A9a,B.Bbe],0
);A.pe([this,this.ApD],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GA(this
);this.ABf(this);this.BBW(this);this.DH(this);},BAe:function(G){A._GetAutoObject(
A.Device.Device).Aso();},ApD:function(G){this.An();},GA:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZN.Z(false);break;case 4:{var A3x;if(!A._GetAutoObject(A.Device.Device).Aff)A3x=
0;else A3x=((A._GetAutoObject(A.Device.Device).AxB*100)/A._GetAutoObject(A.Device.
Device).Aff)|0;this.ZN.BC(A3x);this.ZN.Z(true);}break;default:A.ab5("%s%e",AsJ,A.
_GetAutoObject(A.Device.Device).SyncState);}},BBW:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CI);this.Lq.L(A.jb.Text);this.N6.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gb);this.Lq.L(A.jb.Bm);this.N6.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",AsJ,A._GetAutoObject(A.Device.Device).SyncState);}},DH:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CZ(null);this.N.CA=null;this.N.B2(A.jV);this.N.Cg=null;}break;
case 7:{this.N.CZ(null);this.N.CA=null;this.N.B2(A.aaR(A.acf.Ok));this.N.Cg=[this
,this.BAe];}break;default:A.ab5("%s%e",AsJ,A._GetAutoObject(A.Device.Device).SyncState
);}},ABf:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lq.R(A.aaR(A.acf.Bpl));break;case 1:this.Lq.R(A.aaR(A.acf.Bpi));break;
case 2:this.Lq.R(A.aaR(A.acf.Bpf));break;case 3:this.Lq.R(A.aaR(A.acf.Bpj));break;
case 4:this.Lq.R((A.aaR(A.acf.Bph)+AxX)+A._GetAutoObject(A.Device.Helper).Ng(A._GetAutoObject(
A.Device.Helper).Ng(A.aaR(A.acf.BnX),P4,A._GetAutoObject(A.Device.Device).AxB.toFixed(
)),AxY,A._GetAutoObject(A.Device.Device).Aff.toFixed()));break;case 5:this.Lq.R(
A.aaR(A.acf.Bpk));break;case 7:this.Lq.R(A.aaR(A.acf.Bpg));break;default:A.ab5("%s%e"
,AsJ,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.N6={I:this},0);C.CG._Init.call(this.Lq={I:this
},0);A.acg.Am._Init.call(this.AkU={I:this},0);A.acr.ADc._Init.call(this.ZN={I:this
},0);A.acr.ADd._Init.call(this.ZM={I:this},0);this.__proto__=C.AUL;this.N.Z(true
);this.N6.H(AVG);this.N6.R(A.aaR(A.acf.N6));this.Lq.A3(0x3F);this.Lq.H(AVH);this.
Lq.A8(0x12);this.AkU.H(AVI);this.AkU.L(A.jb.AV);this.ZN.H(AVJ);this.ZN.Ar(false);
this.ZN.BC(0);this.ZM.Bng(0);this.ZM.A_z(0);this.ZM.A_x(A.jb.AV);this.ZM.A_w(0);
this.ZM.AFR(AHb);this.J(this.N6,0);this.J(this.Lq,0);this.J(this.AkU,0);this.J(this.
ZN,0);this.N6.S(A.aaL(A.fl.EG));this.N6.A2(A.aaL(A.fl.Af));this.N6.Ct(A.aaL(A.fl.
Ak));this.Lq.S(A.aaL(A.fl.Af));this.Lq.A2(A.aaL(A.fl.Ak));this.Lq.Ct(A.aaL(A.fl.
Bi));this.AkU.Aw(A.aaL(A.ach.AQz));this.ZN.OnSetAppearance(this.ZM);this.ZM.A_y(
A.aaL(A.ach.NP));this.ZM.A_v(A.aaL(A.ach.NP));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N6._Done();this.Lq._Done();this.AkU._Done();this.ZN._Done(
);this.ZM._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N6._ReInit();this.Lq._ReInit();this.AkU._ReInit();this.ZN._ReInit();this.
ZM._ReInit();this.N6.R(A.aaR(A.acf.N6));this.N6.S(A.aaL(A.fl.EG));this.N6.A2(A.aaL(
A.fl.Af));this.N6.Ct(A.aaL(A.fl.Ak));this.Lq.S(A.aaL(A.fl.Af));this.Lq.A2(A.aaL(
A.fl.Ak));this.Lq.Ct(A.aaL(A.fl.Bi));this.CS();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqL={_Init:function(aArg){C.AC4._Init.call(this,aArg
);this.__proto__=C.AqL;this.A9Z(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cr:A.abi(3,0,{0:2,2:1}),Dr:function(
){return 3;},C7:function(aIndex){if(aIndex>=3)return-1;return this.Cr.Get(aIndex
);},Gd:function(aIndex){return this.GenderToString.BO(this.C7(aIndex));},DO:function(
A7){var P=0;while(P<3){if(this.Cr.Get(P)===A7)return P;P=P+1;}return-1;},Hp:function(
){var P=0;var max=-1;while(P<3){if(this.Cr.Get(P)>max)max=this.Cr.Get(P);P=P+1;}
return max;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal)this.Animal.JO(
E);},LX:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.AfQ],[B=this.Animal,B.Wl,B.JO],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AfQ],[B=this.Animal,B.Wl,B.JO],0);A.pe([this,this.AfQ],this);},AfQ:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B$,
this.Ca],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cr=[]).__proto__=C.Gender.Cr;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cr:A.abi(4,0,{1:1,2:2,3:3}),Dr:function(){return 4;},C7:function(aIndex){if(
aIndex>=4)return-1;return this.Cr.Get(aIndex);},Gd:function(aIndex){return this.
BirthTypeToString.BO(this.C7(aIndex));},DO:function(A7){var P=0;while(P<4){if(this.
Cr.Get(P)===A7)return P;P=P+1;}return-1;},Hp:function(){var P=0;var max=-1;while(
P<4){if(this.Cr.Get(P)>max)max=this.Cr.Get(P);P=P+1;}return max;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akl(E);},A0$:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B$,this.
Ca],0);},LX:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A0$],[B=this.Animal,B.AR8,B.Akl],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A0$],[B=this.Animal,B.AR8,B.Akl],0);A.pe([this,this.A0$],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cr=[]).__proto__=C.BirthType.Cr;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Aci:null,Dr:
function(){return A._GetAutoObject(A.Device.Helper).AdN.MC;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdN.MC)return-1;return A._GetAutoObject(
A.Device.Helper).AdN.Get(aIndex);},Gd:function(aIndex){return this.Aci.BO(this.C7(
aIndex));},DO:function(A7){var P=0;while(P<A._GetAutoObject(A.Device.Helper).AdN.
MC){if(A._GetAutoObject(A.Device.Helper).AdN.Get(P)===A7)return P;P=P+1;}return-
1;},Hp:function(){var P=0;var max=-1;while(P<A._GetAutoObject(A.Device.Helper).Uz.
MC){if(A._GetAutoObject(A.Device.Helper).Uz.Get(P)>max)max=A._GetAutoObject(A.Device.
Helper).Uz.Get(P);P=P+1;}return max;},As:function(E){C.AC.As.call(this,E);if(!!this.
Animal)this.Animal.Ex(E);},A03:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B$,this.Ca],0);},LX:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A03],[B=this.Animal,B.PM,B.Ex],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A03],[B=this.Animal,B.PM,B.Ex],0);A.pe([
this,this.A03],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Aci={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Aci._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Aci._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUr={Init:function(aArg){var B;A.pe([this,this.Afv],this);A.zX([this,this.Afv
],[B=A._GetAutoObject(A.Device.Device),B.Arj,B.As9],0);},A3D:function(G){A._GetAutoObject(
A.Device.Device).A_(38,true,A.jV,0,[this,this.Bbv]);},A3c:function(G){var B;var At=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(
A.Device.Device).Asa(this);},A1t:function(G){var F;if(this.A9===1){var BR=this.D5;
this.D5=this.D5-10;if(this.D5<this.AlG)this.D5=this.AlG;if(this.D5<A._GetAutoObject(
A.Device.Device).ZQ)this.D5=A._GetAutoObject(A.Device.Device).ZQ;if(this.DW!==BR
){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.D5));A.abo(this.JS,0);}}if(this.A9===
2){var BR=this.DW;this.DW=this.DW-10;if(this.DW<this.D5)this.DW=this.D5;if(this.
DW!==BR){if(!!this.JR)(F=this.JR,F[2].call(F[0],this.DW));A.abo(this.JR,0);}}this.
DH(this);this.An();},A14:function(G){var F;if(this.A9===1){var BR=this.D5;this.D5=
this.D5+10;if(this.D5>this.DW)this.D5=this.DW;if(this.D5!==BR){if(!!this.JS)(F=this.
JS,F[2].call(F[0],this.D5));A.abo(this.JS,0);}}if(this.A9===2){var BR=this.DW;this.
DW=this.DW+10;if(this.DW>this.AlB)this.DW=this.AlB;if(this.DW!==BR){if(!!this.JR
)(F=this.JR,F[2].call(F[0],this.DW));A.abo(this.JR,0);}}this.DH(this);this.An();
},GA:function(G){this.PF.R(AHc+A._GetAutoObject(A.Device.Converter).AkQ(this.D5)
);this.PG.R(AHc+A._GetAutoObject(A.Device.Converter).AkQ(this.DW));this.Sr.R(A._GetAutoObject(
A.acj.Temperature).Alz());},A1X:function(Ate){if(Ate===1)return this.PF;else if(
Ate===2)return this.PG;else return null;},_Init:function(aArg){C.Acg._Init.call(
this,aArg);this.__proto__=C.AUr;this.AlB=5000;this.AlG=3000;this.T(A.aaR(A.acf.Aq$
));this.Background.H(Afs);this.V.H(BF);this.V.R(A.aaR(A.acf.AGN));this.V.A8(0x12
);this.Init(aArg);},_ReInit:function(){C.Acg._ReInit.call(this);this.T(A.aaR(A.acf.
Aq$));this.V.R(A.aaR(A.acf.AGN));},_className:"Application::SettingsItemThresholdsTemp"
};C.Ew={Background:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.Ew;this.H(BF);this.Background.
H(BF);this.Background.L(A.jb.CI);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,AaW:null,Aa0:null,AaY:
null,Background:null,AaV:null,AaZ:null,AaX:null,Ajw:null,Are:null,VA:null,A5:0,BzW:
function(G){if(this.Ajw.CN===6){if(this.A5===1)this.Anz(2);else if(this.A5===2)this.
Anz(3);else this.Anz(1);}else if(this.Ajw.CN===7){if(this.A5===3)this.Anz(2);else
if(this.A5===2)this.Anz(1);else this.Anz(3);}},Anz:function(E){if(this.A5===E)return;
this.A5=E;switch(this.A5){case 3:this.Background.H(this.AaV.M);break;case 2:this.
Background.H(this.AaZ.M);break;case 1:this.Background.H(this.AaX.M);break;default:
this.Background.H(Aof);}},IS:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Hh._Init.
call(this.AaW={I:this},0);A.acg.Hh._Init.call(this.Aa0={I:this},0);A.acg.Hh._Init.
call(this.AaY={I:this},0);A.acg.Am._Init.call(this.Background={I:this},0);A.acg.
Aec._Init.call(this.AaV={I:this},0);A.acg.Aec._Init.call(this.AaZ={I:this},0);A.
acg.Aec._Init.call(this.AaX={I:this},0);A.Core.BL._Init.call(this.Ajw={I:this},0
);A.Core.BL._Init.call(this.Are={I:this},0);A.Graphics.AMt._Init.call(this.VA={I:
this},0);this.__proto__=C.Rating;this.H(AVK);this.AaW.H(AHd);this.AaW.L(A.jb.Text
);this.AaW.Anx(Ak4);this.AaW.Ne(3);this.AaW.Z(true);this.Aa0.H(AHe);this.Aa0.L(A.
jb.Text);this.Aa0.Anx(Ak4);this.Aa0.Ne(3);this.Aa0.Z(true);this.AaY.H(AHf);this.
AaY.L(A.jb.Text);this.AaY.Anx(Ak4);this.AaY.Ne(3);this.AaY.Z(true);this.Background.
H(Aof);this.Background.L(A.jb.AV);this.AaV.H(AHd);this.AaV.L(A.jb.EW);this.AaV.Anx(
Ak4);this.AaV.Z(true);this.AaZ.H(AHe);this.AaZ.L(A.jb.H4);this.AaZ.Anx(Ak4);this.
AaZ.Z(true);this.AaX.H(AHf);this.AaX.L(A.jb.Gb);this.AaX.Anx(Ak4);this.AaX.Z(true
);this.Ajw.Filter=147;this.Are.Filter=1;this.VA.BlR(360);this.VA.Bm6(22);this.VA.
Bne(2);this.J(this.AaW,0);this.J(this.Aa0,0);this.J(this.AaY,0);this.J(this.Background
,0);this.J(this.AaV,0);this.J(this.AaZ,0);this.J(this.AaX,0);this.AaW.Zk(this.VA
);this.Aa0.Zk(this.VA);this.AaY.Zk(this.VA);this.Background.Aw(A.aaL(A.ach.NO));
this.AaV.Zk(this.VA);this.AaZ.Zk(this.VA);this.AaX.Zk(this.VA);this.Ajw.BM=[this
,this.BzW];this.Are.BM=[this,this.IS];},_Done:function(){this.__proto__=A.Core.O;
this.AaW._Done();this.Aa0._Done();this.AaY._Done();this.Background._Done();this.
AaV._Done();this.AaZ._Done();this.AaX._Done();this.Ajw._Done();this.Are._Done();
this.VA._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.AaW._ReInit();this.Aa0._ReInit();this.AaY._ReInit();this.Background.
_ReInit();this.AaV._ReInit();this.AaZ._ReInit();this.AaX._ReInit();this.Ajw._ReInit(
);this.Are._ReInit();this.VA._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AaW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AaV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AaX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ajw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Are)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asc={Aj$:null,ArZ:null,Background:null,TM:null,TG:null,AbN:null,AbM:null,AbL:
null,Acm:null,Acl:null,Ack:null,Acb:null,Aca:null,AbG:null,AbF:null,Ab3:null,Ab2:
null,Aqn:null,Init:function(aArg){},BjO:function(G){this.AbN.R(AHg);this.AbM.R(A.
jV);this.AbL.R(A.jV);this.Acm.R(AVL);this.Acl.R(A.jV);this.Ack.R(A.jV);this.Acb.
R(A.jV);this.Aca.R(A.jV);this.AbG.R(A.jV);this.AbF.R(A.jV);this.Ab3.R(A.jV);this.
Ab2.R(A.jV);},BnF:function(G){this.TG.Z(true);this.TM.Z(true);var Iy=this.Ii();if(
!Iy)return;this.TM.R(Iy.GetFPS().toFixed()+AVM);this.TG.R(AVN);this.TG.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Aj$={I:this},0);A.Core.Timer._Init.call(this.ArZ={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TM={I:this},0);A.acg.
Text._Init.call(this.TG={I:this},0);A.acg.Text._Init.call(this.AbN={I:this},0);A.
acg.Text._Init.call(this.AbM={I:this},0);A.acg.Text._Init.call(this.AbL={I:this}
,0);A.acg.Text._Init.call(this.Acm={I:this},0);A.acg.Text._Init.call(this.Acl={I:
this},0);A.acg.Text._Init.call(this.Ack={I:this},0);A.acg.Text._Init.call(this.Acb={
I:this},0);A.acg.Text._Init.call(this.Aca={I:this},0);A.acg.Text._Init.call(this.
AbG={I:this},0);A.acg.Text._Init.call(this.AbF={I:this},0);A.acg.Text._Init.call(
this.Ab3={I:this},0);A.acg.Text._Init.call(this.Ab2={I:this},0);A.acg.AL._Init.call(
this.Aqn={I:this},0);this.__proto__=C.Asc;this.H(AcF);this.Ar(false);this.Aj$.PO(
2000);this.Aj$.Wp(1);this.Aj$.Ar(true);this.ArZ.Ar(true);this.Background.A3(0x3F
);this.Background.H(AcF);this.Background.L(0x78000000);this.TM.H(AVO);this.TM.A8(
0x14);this.TM.R(A.jV);this.TM.L(0xFFFFFC00);this.TM.Z(false);this.TG.H(AHh);this.
TG.A8(0x11);this.TG.R(A.jV);this.TG.Z(false);this.AbN.H(AsK);this.AbN.A8(0x11);this.
AbN.R(A.jV);this.AbM.H(AHi);this.AbM.A8(0x11);this.AbM.R(A.jV);this.AbL.H(AHj);this.
AbL.A8(0x14);this.AbL.R(A.jV);this.Acm.H(AxZ);this.Acm.A8(0x11);this.Acm.R(A.jV);
this.Acl.H(AHk);this.Acl.A8(0x11);this.Acl.R(A.jV);this.Ack.H(Ax0);this.Ack.A8(0x14
);this.Ack.R(A.jV);this.Acb.H(AVP);this.Acb.A8(0x11);this.Acb.R(A.jV);this.Aca.H(
AVQ);this.Aca.A8(0x14);this.Aca.R(A.jV);this.AbG.H(AVR);this.AbG.A8(0x11);this.AbG.
R(A.jV);this.AbF.H(AVS);this.AbF.A8(0x14);this.AbF.R(A.jV);this.Ab3.H(AHl);this.
Ab3.A8(0x11);this.Ab3.R(A.jV);this.Ab2.H(AVT);this.Ab2.A8(0x14);this.Ab2.R(A.jV);
this.Aqn.H(O2);this.J(this.Background,0);this.J(this.TM,0);this.J(this.TG,0);this.
J(this.AbN,0);this.J(this.AbM,0);this.J(this.AbL,0);this.J(this.Acm,0);this.J(this.
Acl,0);this.J(this.Ack,0);this.J(this.Acb,0);this.J(this.Aca,0);this.J(this.AbG,
0);this.J(this.AbF,0);this.J(this.Ab3,0);this.J(this.Ab2,0);this.J(this.Aqn,0);this.
Aj$.Mx=[this,this.BjO];this.ArZ.Mx=[this,this.BnF];this.TM.S(A.aaL(A.fl.Ak));this.
TG.S(A.aaL(A.fl.Ak));this.AbN.S(A.aaL(A.fl.Ak));this.AbM.S(A.aaL(A.fl.Ak));this.
AbL.S(A.aaL(A.fl.Ak));this.Acm.S(A.aaL(A.fl.Ak));this.Acl.S(A.aaL(A.fl.Ak));this.
Ack.S(A.aaL(A.fl.Ak));this.Acb.S(A.aaL(A.fl.Ak));this.Aca.S(A.aaL(A.fl.Ak));this.
AbG.S(A.aaL(A.fl.Ak));this.AbF.S(A.aaL(A.fl.Ak));this.Ab3.S(A.aaL(A.fl.Ak));this.
Ab2.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;
this.Aj$._Done();this.ArZ._Done();this.Background._Done();this.TM._Done();this.TG.
_Done();this.AbN._Done();this.AbM._Done();this.AbL._Done();this.Acm._Done();this.
Acl._Done();this.Ack._Done();this.Acb._Done();this.Aca._Done();this.AbG._Done();
this.AbF._Done();this.Ab3._Done();this.Ab2._Done();this.Aqn._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Aj$._ReInit();this.
ArZ._ReInit();this.Background._ReInit();this.TM._ReInit();this.TG._ReInit();this.
AbN._ReInit();this.AbM._ReInit();this.AbL._ReInit();this.Acm._ReInit();this.Acl.
_ReInit();this.Ack._ReInit();this.Acb._ReInit();this.Aca._ReInit();this.AbG._ReInit(
);this.AbF._ReInit();this.Ab3._ReInit();this.Ab2._ReInit();this.Aqn._ReInit();this.
TM.S(A.aaL(A.fl.Ak));this.TG.S(A.aaL(A.fl.Ak));this.AbN.S(A.aaL(A.fl.Ak));this.AbM.
S(A.aaL(A.fl.Ak));this.AbL.S(A.aaL(A.fl.Ak));this.Acm.S(A.aaL(A.fl.Ak));this.Acl.
S(A.aaL(A.fl.Ak));this.Ack.S(A.aaL(A.fl.Ak));this.Acb.S(A.aaL(A.fl.Ak));this.Aca.
S(A.aaL(A.fl.Ak));this.AbG.S(A.aaL(A.fl.Ak));this.AbF.S(A.aaL(A.fl.Ak));this.Ab3.
S(A.aaL(A.fl.Ak));this.Ab2.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.Aj$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab2)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGv={FC:null,Di:null,Au:null,Jp:null,HH:null,Ub:null,Bc:null,Sg:null,Gp:null
,Go:null,FS:0,A9:0,Bjl:false,Init:function(aArg){},Ai:function(Ae){C.Dp.Ai.call(
this,Ae);this.Hr.Z(false);this.H0.Z(false);if(!!this.Di){this.Sg.R(this.Au.Format(
Ax1));this.Ub.R(this.Au.Format(AVU));}if(this.A9===1){this.HH.Z(true);this.HH.H(
this.Sg.M);this.HH.L(A.jb.Bm);this.Sg.L(this.Background.AQ);this.Ub.L(A.jb.Bm);}
else if(this.A9===2){this.HH.Z(true);this.HH.H(this.Ub.M);this.HH.L(A.jb.Bm);this.
Sg.L(A.jb.Bm);this.Ub.L(this.Background.AQ);}else{this.HH.Z(false);this.Sg.L(this.
V.AQ);this.Bc.L(this.V.AQ);this.Ub.L(this.V.AQ);}},Qk:function(G){if(this.Fy===1
)A.pe([this,this.U2],this);else if(this.Fy===4)A.pe([this,this.Aiv],this);else if(
this.Fy===5)A.pe([this,this.Aig],this);C.Dp.Qk.call(this,G);},J8:function(G){switch(
this.A9){case 0:C.Dp.J8.call(this,G);break;case 2:break;default:this.Adl(this);}
},J3:function(G){switch(this.A9){case 0:C.Dp.J3.call(this,G);break;default:this.
Aif(this);}},Adn:function(G){var F;if(!!this.Di)this.Uf((F=this.Di,F[1].call(F[0
])));},AbZ:function(E){if(A.aaZ(this.Di,E))return;if(!!this.Di)A.z$([this,this.Adn
],this.Di,0);this.Di=E;if(!!E)A.zX([this,this.Adn],E,0);if(!!E)A.pe([this,this.Adn
],this);},Uf:function(E){if(this.FS===E)return;this.FS=E;this.Au.Initialize(this.
FS);this.An();},Adl:function(G){this.Fy=1;this.An();if(this.Bo.By){A.pe([this,this.
U2],this);this.Bo.Ar(false);}this.Bo.Ar(true);},U2:function(G){this.Et(this.A9+1
);},AlS:function(G){this.Fy=4;this.An();if(this.Bo.By){A.pe([this,this.Aiv],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},AlR:function(G){this.Fy=5;this.An();if(this.
Bo.By){A.pe([this,this.Aig],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Aiv:function(
G){var B;var F;var BR=this.FS;if(this.A9===1)this.Au.Ans(this.Au.AjM+1);if(this.
A9===2)this.Au.Anv(this.Au.AvQ+1);this.Au.Any(0);this.Uf(((B=(this.Au.JM()|0))<0
)?B+0x100000000:B);if(this.FS!==BR){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.
FS));A.abo(this.Di,0);}},Aig:function(G){var B;var F;var BR=this.FS;if(this.A9===
1)this.Au.Ans(this.Au.AjM-1);if(this.A9===2)this.Au.Anv(this.Au.AvQ-1);this.Au.Any(
0);this.Uf(((B=(this.Au.JM()|0))<0)?B+0x100000000:B);if(this.FS!==BR){if(!!this.
Di)(F=this.Di,F[2].call(F[0],this.FS));A.abo(this.Di,0);}},DH:function(G){var F;
if(!this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.
ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this
,this.G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV
);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aen
));(F=this.N,F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
U2];}break;case 2:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].
call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.G8];(F=this.N,F[1].
call(F[0])).Cq(A.aaL(A.ach.AmS));(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[
1].call(F[0])).Ck=[this,this.Aif];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,
F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;}break;default:this.
FC.AkF((F=this.N,F[1].call(F[0])));}},FO:function(G){this.Et(1);},G8:function(G){
this.Et(0);},Et:function(EK){var F;if(!this.A9)this.FC.Ajr((F=this.N,F[1].call(F[
0])));this.A9=EK;this.Bjl=true;if((this.A9<0)||(this.A9>2))this.A9=0;this.DH(this
);this.Gp.By=!!this.A9;this.Go.By=!!this.A9;this.An();},Aif:function(G){if(this.
A9>1)this.Et(this.A9-1);},_Init:function(aArg){C.Dp._Init.call(this,aArg);A.Core.
Bu._Init.call(this.Au={I:this},0);A.Core.BL._Init.call(this.Jp={I:this},0);A.acg.
AL._Init.call(this.HH={I:this},0);A.acg.Text._Init.call(this.Ub={I:this},0);A.acg.
Text._Init.call(this.Bc={I:this},0);A.acg.Text._Init.call(this.Sg={I:this},0);A.
Core.BL._Init.call(this.Gp={I:this},0);A.Core.BL._Init.call(this.Go={I:this},0);
this.__proto__=C.AGv;this.H(UQ);this.V.R(AVV);this.V.L(A.jb.Bm);this.Hr.Z(false);
this.H0.Z(false);this.Jp.Filter=1;this.HH.H(AVW);this.HH.L(0x55FFFFFF);this.Ub.H(
AVX);this.Ub.I3(true);this.Bc.H(AVY);this.Bc.A8(0x14);this.Bc.R(AVZ);this.Sg.H(AV0
);this.Sg.I3(true);this.Sg.A8(0x14);this.Gp.Filter=4;this.Gp.By=false;this.Go.Filter=
5;this.Go.By=false;this.J(this.HH,0);this.J(this.Ub,0);this.J(this.Bc,0);this.J(
this.Sg,0);this.Jp.BM=[this,this.Adl];this.Ub.S(A.aaL(A.fl.EG));this.Bc.S(A.aaL(
A.fl.EG));this.Sg.S(A.aaL(A.fl.EG));this.Gp.BM=[this,this.AlS];this.Gp.DZ=[this,
this.Aiv];this.Go.BM=[this,this.AlR];this.Go.DZ=[this,this.Aig];this.FC=A._NewObject(
C.Aeg,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Dp;this.Au._Done();
this.Jp._Done();this.HH._Done();this.Ub._Done();this.Bc._Done();this.Sg._Done();
this.Gp._Done();this.Go._Done();C.Dp._Done.call(this);},_ReInit:function(){C.Dp.
_ReInit.call(this);this.Au._ReInit();this.Jp._ReInit();this.HH._ReInit();this.Ub.
_ReInit();this.Bc._ReInit();this.Sg._ReInit();this.Gp._ReInit();this.Go._ReInit(
);this.Ub.S(A.aaL(A.fl.EG));this.Bc.S(A.aaL(A.fl.EG));this.Sg.S(A.aaL(A.fl.EG));
},_Mark:function(D){var B;C.Dp._Mark.call(this,D);if((B=this.FC)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ub)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Go
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"};C.
CG={B7:null,AmI:null,AqB:null,Ej:null,Text:null,String:A.jV,Bdt:A.jV,Kc:0x12,AKS:
0,AQ:0xFFFFFFFF,N4:0,AT$:0,A_4:0,Bdu:true,GW:function(CM){var LI=(A.Core.AQ_.isPrototypeOf(
CM)?CM:null);if(!!LI)this.BB7(this);return A.Core.O.GW.call(this,CM);},Bk:function(
aSize){A.Core.O.Bk.call(this,aSize);A.pe([this,this.Ajc],this);},Da:function(aFilter
){return A.abh(this.Text.Da(),this.M.slice(0,2));},R:function(E){if(this.String===
E)return;this.String=E;if(this.Bdu){this.Bdt=E;this.Bdu=false;}this.AKS=E.length;
A.pe([this,this.Ajc],this);},S:function(E){if(this.B7===E)return;this.B7=E;A.pe([
this,this.Ajc],this);},A2:function(E){if(this.AmI===E)return;this.AmI=E;A.pe([this
,this.Ajc],this);},Ct:function(E){if(this.AqB===E)return;this.AqB=E;A.pe([this,this.
Ajc],this);},A8:function(E){if(E===this.Kc)return;this.Kc=E;this.Text.A8(E);},Ajc:
function(G){var B;var AKY=0;if(!this.AKS){this.Text.Z(false);return;}this.Text.Z(
true);this.Text.R(this.String);this.Text.KR(false);if(!!this.B7){AKY=this.B7.Yl(
this.String,0,this.AKS);if(AKY<(((B=this.M)[2]-B[0])-(2*this.Text.I4))){this.Text.
S(this.B7);this.Text.AwS(this.N4);return;}}this.Text.KR(true);if(!!this.AmI){AKY=
this.AmI.Yl(this.String,0,this.AKS);this.Text.S(this.AmI);this.Text.AwS(this.AT$
);if((AKY<(((B=this.M)[2]-B[0])-(2*this.Text.I4)))&&(((B=this.Text.Da())[3]-B[1]
)<=((B=this.M)[3]-B[1])))return;}if(!!this.AqB){this.Text.S(this.AqB);if(((B=this.
Text.Da())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.AwS((((this.Text.B7.Ascent+this.
Text.B7.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;this.AQ=E;this.
Text.L(E);},BB7:function(G){this.R(this.Bdt);},Q0:function(E){if(A.aa0(this.Ej,E
))return;this.Ej=E;this.Text.Q0(E);},AR6:function(){return A.abh(this.Text.Da(),
this.M.slice(0,2));},Ae7:function(AoC){return A.abf(this.M.slice(0,2),this.Text.
Ae7(AoC));},AwS:function(E){if(this.N4===E)return;this.N4=E;A.pe([this,this.Ajc]
,this);},Bm8:function(E){if(this.AT$===E)return;this.AT$=E;A.pe([this,this.Ajc],
this);},Bm9:function(E){if(this.A_4===E)return;this.A_4=E;A.pe([this,this.Ajc],this
);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.CG;this.H(Ax2);this.Ar(false);this.Text.A3(0x3F
);this.Text.H(Ax2);this.Text.R(Rh);this.J(this.Text,0);},_Done:function(){this.__proto__=
A.Core.O;this.Text._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Text._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmI)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqB)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ej)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Text)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"};C.AjK={Y:null,
IG:null,Aey:null,IZ:null,M6:null,Aes:null,Aex:null,Aew:null,Aet:null,Aev:null,Aeu:
null,M8:null,NQ:null,Mp:null,Dd:function(E){C.Ym.Dd.call(this,E);this.IG.L(E);this.
Aey.L(E);this.IZ.L(E);this.M6.L(E);this.Mp.L(E);this.Aes.L(E);this.M8.L(E);this.
NQ.L(E);this.Aex.L(E);this.Aew.L(E);this.Aet.L(E);this.Aev.L(E);this.Aeu.L(E);},
D3:function(G){C.Ym.D3.call(this,G);this.XD(8,1,this.M6);this.XD(12,1,this.Mp);this.
XD(11,1,this.Aes);this.XD(7,1,this.M8);this.XD(14,1,this.NQ);this.XD(1,4,this.IG
);this.XD(1,1,this.Aey);this.XD(4,1,this.IZ);this.XD(22,1,this.Aex);this.XD(26,1
,this.Aew);this.XD(30,1,this.Aet);this.XD(19,1,this.Aev);this.XD(31,1,this.Aeu);
this.Text.Z(!this.Y.TK(null,0x1));},XD:function(AI6,D$,AfH){var AAZ=false;if(!!A.
_GetAutoObject(A.Device.Device).Ao.Filter){var Ac$=A._GetAutoObject(A.Device.Device
).Ao.Filter.DN(AI6,D$);if(!!Ac$){AAZ=true;switch(AI6){case 14:{var Aze=(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(Ac$)?Ac$:null);if(!!Aze)AfH.Aw(A._GetAutoObject(
A.Device.Converter).A4N(Aze.A5));}break;case 7:{var Aze=(A.Device.GenderFilterCriterion.
isPrototypeOf(Ac$)?Ac$:null);if(!!Aze)AfH.Aw(A._GetAutoObject(A.Device.Converter
).AmK(Aze.A5));}break;case 1:if(D$===4)AfH.Aw(A.aaL(A.ach.ADt));else if(Ac$.Operator===
4)AAZ=false;break;case 22:switch(Ac$.Operator){case 0:case 3:AfH.Aw(A.aaL(A.ach.
AQm));break;default:AfH.Aw(A.aaL(A.ach.AmV));}break;case 26:switch(Ac$.Operator){
case 0:case 3:AfH.Aw(A.aaL(A.ach.AQk));break;default:AfH.Aw(A.aaL(A.ach.Avo));}break;
default:;}}else if((AI6===1)&&(D$===4)){AAZ=true;AfH.Aw(A.aaL(A.ach.Aeo));}}else
if((AI6===1)&&(D$===4)){AAZ=true;AfH.Aw(A.aaL(A.ach.Aeo));}AfH.Z(AAZ);},_Init:function(
aArg){C.Ym._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Am.
_Init.call(this.IG={I:this},0);A.acg.Am._Init.call(this.Aey={I:this},0);A.acg.Am.
_Init.call(this.IZ={I:this},0);A.acg.Am._Init.call(this.M6={I:this},0);A.acg.Am.
_Init.call(this.Aes={I:this},0);A.acg.Am._Init.call(this.Aex={I:this},0);A.acg.Am.
_Init.call(this.Aew={I:this},0);A.acg.Am._Init.call(this.Aet={I:this},0);A.acg.Am.
_Init.call(this.Aev={I:this},0);A.acg.Am._Init.call(this.Aeu={I:this},0);A.acg.Am.
_Init.call(this.M8={I:this},0);A.acg.Am._Init.call(this.NQ={I:this},0);A.acg.Am.
_Init.call(this.Mp={I:this},0);this.__proto__=C.AjK;this.Y.A3(0x3F);this.Y.H(AsL
);this.Y.JN(3);this.IG.H(AsM);this.Aey.H(AV1);this.Aey.Aj(true);this.IZ.H(AV2);this.
IZ.Aj(true);this.M6.H(AV3);this.M6.Aj(true);this.Aes.H(AV4);this.Aes.Aj(true);this.
Aex.H(AHm);this.Aex.Aj(true);this.Aew.H(AHm);this.Aew.Aj(true);this.Aet.H(AV5);this.
Aet.Aj(true);this.Aev.H(AHn);this.Aev.Aj(true);this.Aeu.H(AHn);this.Aeu.Aj(true);
this.M8.H(AHo);this.M8.Aj(true);this.NQ.H(AHp);this.NQ.Aj(true);this.Text.R(A.aaR(
A.acf.None));this.Mp.H(AHo);this.Mp.Aj(true);this.JU(this.JI,-3);this.JU(this.CT
,-3);this.JU(this.A$,-3);this.JU(this.AP,-2);this.J(this.Y,-2);this.J(this.IG,-2
);this.J(this.Aey,-2);this.J(this.IZ,-2);this.J(this.M6,-2);this.J(this.Aes,-2);
this.J(this.Aex,-2);this.J(this.Aew,-2);this.J(this.Aet,-2);this.J(this.Aev,-2);
this.J(this.Aeu,-2);this.J(this.M8,-2);this.J(this.NQ,-2);this.J(this.Mp,0);this.
IG.Aw(A.aaL(A.ach.Aeo));this.Aey.Aw(A.aaL(A.ach.AQb));this.IZ.Aw(A.aaL(A.ach.APD
));this.M6.Aw(A.aaL(A.ach.ADn));this.Aes.Aw(A.aaL(A.ach.Abs));this.Aex.Aw(A.aaL(
A.ach.AmV));this.Aew.Aw(A.aaL(A.ach.Avo));this.Aet.Aw(A.aaL(A.ach.AP$));this.Aev.
Aw(A.aaL(A.ach.AQa));this.Aeu.Aw(A.aaL(A.ach.AP_));this.M8.Aw(A.aaL(A.ach.ADp));
this.NQ.Aw(A.aaL(A.ach.Avt));this.Mp.Aw(A.aaL(A.ach.ADw));},_Done:function(){this.
__proto__=C.Ym;this.Y._Done();this.IG._Done();this.Aey._Done();this.IZ._Done();this.
M6._Done();this.Aes._Done();this.Aex._Done();this.Aew._Done();this.Aet._Done();this.
Aev._Done();this.Aeu._Done();this.M8._Done();this.NQ._Done();this.Mp._Done();C.Ym.
_Done.call(this);},_ReInit:function(){C.Ym._ReInit.call(this);this.Y._ReInit();this.
IG._ReInit();this.Aey._ReInit();this.IZ._ReInit();this.M6._ReInit();this.Aes._ReInit(
);this.Aex._ReInit();this.Aew._ReInit();this.Aet._ReInit();this.Aev._ReInit();this.
Aeu._ReInit();this.M8._ReInit();this.NQ._ReInit();this.Mp._ReInit();this.Text.R(
A.aaR(A.acf.None));},_Mark:function(D){var B;C.Ym._Mark.call(this,D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aes)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aev)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeu)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.M8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NQ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilter"
};C.Ami={H3:null,CB:function(G){if(A._GetAutoObject(A.Device.Device).Bv.Lg())A._GetAutoObject(
A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bv.HF().toFixed(),
0,null);this.H3.Gj();this.H3.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);C.Q_.CB.call(this,G);},An0:function(){C.Q_.An0.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.Background.L(A._GetAutoObject(A.acj.
Temperature).By9(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Ks));this.C8.L(A._GetAutoObject(A.acj.Temperature).Bza(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ks));this.JH.L(A.
_GetAutoObject(A.acj.Temperature).By_(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Ks));this.HA.L(A._GetAutoObject(A.acj.Temperature
).By$(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device
).Ks));this.MD.L(this.JH.AQ);this.TemperatureUnit.L(this.JH.AQ);}break;default:;
}},Acx:function(){C.Q_.Acx.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:{this.N.Cq(A.aaL(A.ach.AQu));this.N.C5(A.aaL(A.ach.AmU));}break;case 4:{
this.N.Cq(null);this.N.C5(A.aaL(A.ach.AvB));}break;default:;}},WD:function(G){switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(
A.Device.Device).Ks>3240)&&(A._GetAutoObject(A.Device.Device).Ks<5460)){A._GetAutoObject(
A.Device.Device).AhA();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}
break;case 3:{this.H3.OnSetTemperature(A._GetAutoObject(A.Device.Device).Ks);var
B1=A._GetAutoObject(A.Device.Converter).Asq(A._GetAutoObject(A.Device.Helper).W.
AnimalType,A._GetAutoObject(A.Device.Device).Ks);this.H3.OnSetRatingTemperature(
B1);this.H3.Co(A._GetAutoObject(A.Device.Device).Bv);A._GetAutoObject(C.A1).Fs();
}break;case 4:this.AKm(this);break;default:;}},AkL:function(G){C.Q_.AkL.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dt(9);break;case 4:this.AKm(this);break;default:;}},AxG:function(
){C.Q_.AxG.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JH.R(A._GetAutoObject(A.acj.Temperature).Bzf(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Ks));break;default:;}},AxH:function(
){C.Q_.AxH.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).Ws(A._GetAutoObject(A.acj.Temperature).Bzb(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Ks));this.I8.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).Ws(16711680
);this.I8.Ar(true);}break;default:this.I8.Ar(false);}},AUl:function(){this.C8.Aw(
A.aaL(A.ach.AvA));this.C8.Cu(A._GetAutoObject(A.acj.Temperature).Bzg(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ks));this.NO.Cu(
0);},_Init:function(aArg){C.Q_._Init.call(this,aArg);this.__proto__=C.Ami;this.Dn(
C.IE);this.H3=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Q_._Mark.
call(this,D);if((B=this.H3)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahm={N2:null,DI:null,Ig:null,Bc:null,Auk:null,String:A.jV,Axv:A.jV,Mt:7,Aj2:
2,KS:0,AUy:false,Init:function(aArg){},Bk:function(aSize){A.Core.O.Bk.call(this,
aSize);this.DI.H([0,0,aSize[0]-this.Aj2,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DI.
S(A.aaL(A.fl.Bi));else this.DI.S(A.aaL(A.fl.Ak));this.Ig.S(this.DI.B7);this.Ig.H(
this.DI.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.Ww],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DI.R(E);},Ahg:function(
E){if(this.Axv===E)return;this.Axv=E;this.Ig.R(E);},AbY:function(E){this.Mt=E;if(
E<10)this.AST(2);else if(E<40)this.AST(1);else this.AST(0);A.pe([this,this.Ww],this
);},Ww:function(G){var B;while(!!this.Bc.Ah)this.HL(this.Bc.Ah);if(this.Mt>1){var
Ac6=this.AOB();var A1R=this.AOz();var Apg=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AzU;var AKL;var AtU;var AlZ=null;if(!!this.N2&&(this.N2.AY>0))AlZ=this.N2.KZ;
while((Ac6>=A1R)&&(Ac6>0)){var Atv=A._NewObject(C.Ajl,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aj2)*(((Ac6-A1R)/86400)|0))/this.Mt)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aj2)*((((Ac6-A1R)/86400)|0)+1))/this.Mt)|0;while(!!AlZ&&(AlZ.Timestamp>=
Ac6)){if(AlZ.Timestamp<(Ac6+86400))Atv.Os(AlZ.A5,AlZ.Timestamp);AlZ=AlZ.Ah;}var At6=
0;if(Atv.AY>0)At6=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/Atv.AY
)|0;else if(this.Mt<10){At6=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
AtU=A._NewObject(A.acg.Text,0);AtU.H([x1,Apg,x2,Apg+At6]);AtU.S(A.aaL(A.fl.Bi));
AtU.L(A.jb.Text);AtU.R(A.aaR(A.acf.Ae3));this.J(AtU,0);}var AJz=Atv.KZ;var P=0;while(
!!AJz){if(P>=Atv.AY)throw new Error(AV6);AzU=A._NewObject(A.acg.AL,0);AzU.L(A._GetAutoObject(
A.acj.Assessment).Qh(AJz.A5));if(P===(Atv.AY-1))AzU.H([x1,Apg+(P*At6),x2,this.Bc.
M[1]]);else AzU.H([x1,Apg+(P*At6),x2,Apg+((P+1)*At6)]);this.J(AzU,0);AJz=AJz.Ah;
P=P+1;}if(this.AUy){var BxW=A._GetAutoObject(A.Device.Helper).Aqd(A._GetAutoObject(
A.Device.Helper).Ds());var BxV=A._GetAutoObject(A.Device.Helper).Aqd(Ac6);if(BxW===
BxV){var ALd=A._NewObject(A.acg.Aec,0);ALd.L(A.jb.Text);var BdR=(x1+this.Aj2)+(((
x2-x1)/2)|0);ALd.H([BdR-4,this.Bc.M[1]-4,BdR+4,this.Bc.M[1]]);ALd.Zk(this.Auk);this.
J(ALd,0);}}Ac6=Ac6-86400;if(this.Aj2>0){AKL=A._NewObject(A.acg.AL,0);AKL.H([x1,Apg
,x1+this.Aj2,Apg+((((B=this.M)[3]-B[1])/2)|0)]);AKL.L(A.jb.Bc);this.J(AKL,0);}}}
},Ab0:function(E){this.N2=E;A.pe([this,this.Ww],this);},AST:function(E){if(this.
Aj2===E)return;this.Aj2=E;A.pe([this,this.Ww],this);},Dd:function(E){if(this.KS===
E)return;this.KS=E;this.DI.L(E);this.Ig.L(E);},AOz:function(){var B;return this.
AOB()-(((((B=this.Mt)<0)?B+0x100000000:B)-1)*86400);},AOB:function(){return A._GetAutoObject(
A.Device.Converter).AhE();},Bna:function(E){if(this.AUy===E)return;this.AUy=E;A.
pe([this,this.Ww],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.
acg.Text._Init.call(this.DI={I:this},0);A.acg.Text._Init.call(this.Ig={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.AxE._Init.call(this.Auk={I:this},0);
this.__proto__=C.Ahm;this.H(BF);this.Ar(false);this.DI.H(AHq);this.DI.Hs(5);this.
DI.A8(0x11);this.DI.L(A.jb.Text);this.Ig.H(AHq);this.Ig.Hs(5);this.Ig.A8(0x14);this.
Ig.L(A.jb.Text);this.Bc.H(AHr);this.Bc.L(A.jb.Bc);this.KS=A.jb.Text;this.Auk.H(AV7
);this.J(this.DI,0);this.J(this.Ig,0);this.J(this.Bc,0);this.DI.S(A.aaL(A.fl.Ak)
);this.Ig.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.O;this.DI._Done();this.Ig._Done();this.Bc._Done();this.Auk._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.DI._ReInit(
);this.Ig._ReInit();this.Bc._ReInit();this.Auk._ReInit();this.DI.S(A.aaL(A.fl.Ak
));this.Ig.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.N2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DI)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ig)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Auk)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A4T={Ah:null,Timestamp:0,A5:0,_Init:function(
aArg){this.__proto__=C.A4T;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajl={KZ:null,MS:null,AY:0,Os:
function(A7,P_){var G$;G$=A._NewObject(C.A4T,0);G$.A5=A7;G$.Timestamp=P_;if(!this.
KZ){this.KZ=G$;this.MS=G$;this.AY=1;}else{this.MS.Ah=G$;this.MS=G$;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajl;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
KZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Eg={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MG],this);},Dz:function(G){var B;var E$=0;var X=this.AV;switch(
this.Cp.CN){case 6:E$=2;break;case 7:E$=7;break;case 4:E$=4;break;case 5:E$=5;break;
default:;}X=this.QB(X,E$,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HC(X,true,null,null);this.DH(this);},AlP:function(G){A._GetAutoObject(C.A1
).Fs();},ApC:function(G){var B;if(!!(C.Cm.isPrototypeOf(B=this.AV)?B:null).Agg)A.
pe((C.Cm.isPrototypeOf(B=this.AV)?B:null).Agg,this);},Fb:function(G){var B;this.
Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.
Y.Bt[1]);},DH:function(G){var B;var GP=(C.Cm.isPrototypeOf(B=this.AV)?B:null);if(
!!GP){this.N.Ht(A.jV);this.N.B2(GP.Axy);this.N.I7.Do(255);this.N.HO.Do(GP.Aw7);this.
N.AEY(GP.Avb);this.N.Anq(GP.AmJ);this.N.CZ(GP.AP5);this.N.C5(GP.AqS);GP.A2U(this
);}},MG:function(s){this.DH(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Eg;this.Background.H(Ri);this.Background.L(A.jb.CU);this.N.H(W6);this.
N.Ar(false);this.N.Z(true);this.Y.H(E8);this.Y.JN(1);this.Ay.H(Ip);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.Ej=[this,this.Fb];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.ATC={Nw:null,ASA:null,AdR:null,Vu:null,GL:null,PopupTimeout:null,Ab4:null,Ags:
null,PopupIdToString:null,Atr:null,Text:A.jV,Aky:A.jV,AJT:A.jV,AkS:0,AK0:-1,Azd:-
1,AKt:0,ATE:0,A10:false,CS:function(){this.A_s(this.PopupIdToString.BO(this.ATE)
);},Init:function(aArg){this.Boy(this);},Bgz:function(G){var B;if(this.AkS>0){this.
A_G((this.AkS/1000)|0);this.PopupTimeout.Wp(0);this.PopupTimeout.PO(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.Axu(this);},Bgv:function(G){var Qr=this.
Text;var AfK=this.Aky;var AKr=A.abi(16,A.jV,null);var index=0;var Ay_=0;while(AfK
!==A.jV){Ay_=AfK.indexOf(A.Device.PopupParamSeparator,0);if(Ay_!==-1){AKr.Set(index
,A.ab1(AfK,Ay_,(AfK.length-Ay_)+1));AfK=A.ab1(AfK,0,Ay_+1);index=index+1;if(index>=
16){A.ab5("%s",(AV8+AfK)+AV9);AfK=A.jV;}}else{AKr.Set(index,AfK);AfK=A.jV;}}index=
0;while(index<Qr.length){if((Qr.charCodeAt(index)||0)===0x7B){var Bds=Qr.indexOf(
String.fromCharCode(0x7D),index);if(Bds===-1){A.ab5("%s",(((AV_+Qr)+AV$)+index.toFixed(
))+Afq);index=Qr.length;}else{var Bfj=(Bds-index)-1;var A3t=A.abW(Qr,index+1,Bfj
);var AKq=A.wz(A3t,-1,10);Qr=A.ab1(Qr,index,Bfj+2);if(A3t===AWa)this.Bnr(index);
else if(((AKq>0)&&(AKq<=16))&&(this.Aky!==A.jV)){Qr=A.abU(Qr,AKr.Get(AKq-1),index
);if(this.A10===true)this.Bnq(A.wz(AKr.Get(AKq-1),0,10));}else A.ab5("%s",(AWb+A3t
)+AWc);}}index=index+1;}this.Bnp(Qr);},CB:function(G){A.pe([this,this.Bgz],this);
},Ai:function(Ae){var B;this.AdR.H(A.aaT(this.GL.Da(),AhN));this.Vu.H(A.aaT(this.
GL.Da(),AhN));if(!!this.Nw){this.Nw.H(A.abM(this.Nw.M,this.GL.M[0]));this.Nw.H(A.
abO(this.Nw.M,this.GL.M[3]+10));this.Nw.H(A.abL(this.Nw.M,(B=this.GL.M)[2]-B[0])
);this.Nw.H(A.abI(this.Nw.M,8));this.AdR.H(A.abh(A.aaT(this.GL.Da(),AhN),AHs));this.
Vu.H(A.abh(A.aaT(this.GL.Da(),AhN),AHs));}else{this.AdR.H(A.aaT(this.GL.Da(),AhN
));this.Vu.H(A.aaT(this.GL.Da(),AhN));}},Dz:function(G){var Jv=(A.Core.BL.isPrototypeOf(
G)?G:null);if((Jv.CN===4)&&((this.Vu.M[1]+this.M[1])<this.M[1])){this.GL.H(A.abO(
this.GL.M,this.GL.M[1]+28));this.An();}else if((Jv.CN===5)&&((this.Vu.M[3]+this.
M[1])>this.N.M[1])){this.GL.H(A.abO(this.GL.M,this.GL.M[1]-28));this.An();}if((Jv.
CN===6)&&!!this.D8().CA)this.D8().AE7(1);else if((Jv.CN===7)&&!!this.D8().Cg)this.
D8().AE7(3);},IS:function(G){switch(this.D8().Ag7){case 1:this.AlP(this);break;case
3:this.ApC(this);break;case 2:this.AAq(this);break;case 0:break;default:A.ab5("%s%e"
,AWd,this.D8().Ag7);}},AlP:function(G){var B;(B=this.D8().CA)?B[1].call(B[0],this
):null;},ApC:function(G){var B;(B=this.D8().Cg)?B[1].call(B[0],this):null;},AAq:
function(G){var B;(B=this.D8().Ck)?B[1].call(B[0],this):null;},LN:function(G){this.
N.I0.L((this.N.I0.AQ&0x00FFFFFF)|(100<<24));},EY:function(G){var B;this.PopupTimeout.
Axu(this);},A_s:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bgv],this);},BAj:function(G){var B;this.A_G(this.Azd-1);if(this.Azd<=0){this.PopupTimeout.
Axu(this);(B=this.ASA)?B[1].call(B[0],this):null;}},A_u:function(E){if(this.AkS===
E)return;this.AkS=E;A.pe([this,this.Bgz],this);},A_f:function(E){if(this.Aky===E
)return;this.Aky=E;A.pe([this,this.Bgv],this);},Bnp:function(E){if(this.AJT===E)
return;this.AJT=E;this.ABf(this);this.Bx3(this);},ABf:function(G){if((this.Azd!==-
1)&&(this.AK0!==-1)){var ByT=this.Atr.Format(AWe);this.GL.R(A.abU(this.AJT,ByT,this.
AK0));}else this.GL.R(this.AJT);this.GL.H(AHt);},Bnr:function(E){if(this.AK0===E
)return;this.AK0=E;this.ABf(this);},A_G:function(E){if(this.Azd===E)return;this.
Azd=E;this.Atr.AFB(E);A.pe([this,this.ABf],this);},Bx3:function(G){this.GL.Da();
if(this.GL.M[1]<=this.M[1])this.GL.H(A.abO(this.GL.M,28));this.An();},A_I:function(
E){if(this.A10===E)return;this.A10=E;if(E===true)A.pe([this,this.BAS],this);},BAS:
function(G){if(!this.Nw){this.Nw=A._NewObject(A.acr.ADc,0);this.Nw.Gq(0);this.Nw.
E5(100);this.Nw.OnSetAppearance(this.Ab4);this.J(this.Nw,0);this.Ahp(this.Nw,this.
GL);}this.Nw.BC(this.AKt);},Bnq:function(E){if(this.AKt===E)return;this.AKt=E;if(
!!this.Nw)this.Nw.BC(this.AKt);},Boy:function(G){var B;this.N.Do(0);this.Ags.AnO(
this);},Bm2:function(E){if(this.ATE===E)return;this.ATE=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.AdR={I:this},0);A.acg.Cf._Init.
call(this.Vu={I:this},0);A.acg.Text._Init.call(this.GL={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADd._Init.call(this.Ab4={I:this},
0);A.acl.Ge._Init.call(this.Ags={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bu._Init.call(this.Atr={I:this},0);this.
__proto__=C.ATC;var B;this.H(Cc);this.Background.H(E8);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Eh.Ar(false);this.Eh.Z(false);this.AdR.H(AHu);this.
AdR.L(A.jb.CI);this.Vu.H(AHu);this.Vu.Ne(2);this.Vu.L(A.jb.Text);this.GL.H(AHt);
this.GL.Hs(10);this.GL.I3(true);this.GL.Bno(0);this.GL.KR(true);this.GL.L(A.jb.Text
);this.PopupTimeout.PO(0);this.Ab4.A_z(0);this.Ab4.A_x(A.jb.AV);this.Ab4.A_w(0);
this.Ab4.AFR(AHb);this.Ags.HK(1);this.Ags.B3=255;this.Ags.Cw=0;this.JU(this.Eh,-
1);this.J(this.AdR,0);this.J(this.Vu,0);this.J(this.GL,0);this.GL.S(A.aaL(A.fl.Af
));this.PopupTimeout.Mx=[this,this.BAj];this.Ab4.A_y(A.aaL(A.ach.NP));this.Ab4.A_v(
A.aaL(A.ach.NP));this.Ags.Q=[B=this.N,B.Av$,B.AZ0];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.AdR._Done();this.Vu._Done();this.GL._Done();this.PopupTimeout.
_Done();this.Ab4._Done();this.Ags._Done();this.PopupIdToString._Done();this.Atr.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
AdR._ReInit();this.Vu._ReInit();this.GL._ReInit();this.PopupTimeout._ReInit();this.
Ab4._ReInit();this.Ags._ReInit();this.PopupIdToString._ReInit();this.Atr._ReInit(
);this.GL.S(A.aaL(A.fl.Af));this.CS();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Nw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASA)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GL)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ags)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Atr)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Ml={Ai:function(Ae
){C.Cm.Ai.call(this,Ae);var FK=A.jb.CI;var GN=A.jb.Text;if(this.Hd){FK=A.jb.Text;
GN=A.jb.Bm;}if(!this.LF){this.Background.L(FK);this.V.L(A.jb.AmW);}else if(this.
Ql){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KC){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FK);this.V.L(GN);}},_Init:function(
aArg){C.Cm._Init.call(this,aArg);this.__proto__=C.Ml;},_className:"Application::DarkThemeMenuItem"
};C.Am$={Adr:0,_Init:function(aArg){C.Cm._Init.call(this,aArg);this.__proto__=C.
Am$;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={Xt:function(G){A._GetAutoObject(
A.Device.Device).Dt(0);},KP:function(){if(!this.Bz){this.Bz=A._NewObject(C.N,0);
this.Bz.Cg=[this,this.A2V];this.Bz.Ck=null;this.Bz.CA=[this,this.Xt];this.Bz.B2(
A.aaR(A.acf.Ok));this.Bz.Cq(null);this.Bz.CZ(A.aaL(A.ach.Aem));}return this.Bz;}
,A2V:function(G){var B;if(!!(C.Cm.isPrototypeOf(B=this.AV)?B:null))(C.Cm.isPrototypeOf(
B=this.AV)?B:null).IS(this);},CB:function(G){},AIt:function(s){this.CB(s);},EY:function(
G){},Ayu:function(s){this.EY(s);},_Init:function(aArg){C.Aa9._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APz={VZ:
null,YI:null,YB:null,Init:function(aArg){this.Bb(this.VZ);},Adk:function(G){var Aa=(
C.Cm.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YI)A._GetAutoObject(A.Device.
Device).A_(6,true,A.jV,0,[this,this.BA7]);else if(Aa===this.VZ)A._GetAutoObject(
A.Device.Device).A_(9,true,A.jV,0,[this,this.BBs]);else if(Aa===this.YB)A._GetAutoObject(
C.A1).BU(4);else throw new Error(Ax3);A._GetAutoObject(A.Device.Device).Dt(0);},
BA7:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(
At.PopupState===7))A._GetAutoObject(A.Device.Device).AGd();},BBs:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===7))
A._GetAutoObject(A.Device.Device).Axm();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ml._Init.call(this.VZ={I:this},0);C.Ml._Init.call(this.YI={I:this
},0);C.Ml._Init.call(this.YB={I:this},0);this.__proto__=C.APz;this.H(AcF);this.VZ.
H(BF);this.VZ.Ar(true);this.VZ.T(A.aaR(A.acf.A$k));this.VZ.Bj(true);this.YI.H(IN
);this.YI.Ar(true);this.YI.T(A.aaR(A.acf.A_3));this.YI.Bj(true);this.YB.H(P5);this.
YB.Ar(true);this.YB.T(A.aaR(A.acf.SJ));this.YB.Bj(true);this.J(this.VZ,0);this.J(
this.YI,0);this.J(this.YB,0);this.VZ.AR=[this,this.Adk];this.YI.AR=[this,this.Adk
];this.YB.AR=[this,this.Adk];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.VZ._Done();this.YI._Done();this.YB._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.VZ._ReInit(
);this.YI._ReInit();this.YB._ReInit();this.VZ.T(A.aaR(A.acf.A$k));this.YI.T(A.aaR(
A.acf.A_3));this.YB.T(A.aaR(A.acf.SJ));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.VZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GD={Aav:null,OverlayMenu:null,Wy:null,A3P:null
,K$:null,A3s:null,Akz:null,N0:null,Az0:100,Init:function(aArg){var B;A.zX([this,
this.BeN],[B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyD],0);A.zX([this,this.BeH
],[B=A._GetAutoObject(A.Device.Device),B.ASh,B.AZY],0);A.zX([this,this.A2M],[B=A.
_GetAutoObject(A.Device.Device),B.Av0,B.Ayw],0);A.zX([this,this.BzR],[B=A._GetAutoObject(
A.Device.Device),B.AvX,B.Ayv],0);A.zX([this,this.BzS],[B=A._GetAutoObject(A.Device.
Device),B.A8s,B.BaX],0);A.zX([this,this.ApD],[B=A._GetAutoObject(A.Device.Device
),B.ASs,B.AZ6],0);A.zX([this,this.Be3],[B=A._GetAutoObject(A.Device.Device),B.Wm
,B.W8],0);A.pe([this,this.BeN],this);A.pe([this,this.BeH],this);A.pe([this,this.
ApD],this);A.pe([this,this.Be3],this);this.A3P.As([B=this.Wy,B.AEh,B.Zg]);this.J(
this.Wy,0);this.Bb(this.Wy);this.BxG(this);},Ai:function(Ae){},BeH:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AD6){if(!this.Aav){this.Aav=A._NewObject(
C.Asc,0);this.Aav.H(A.abJ(this.Aav.M,this.Wy.M.slice(0,2)));this.Aav.H(A.abO(this.
Aav.M,this.Wy.M[3]-((B=this.Aav.M)[3]-B[1])));this.J(this.Aav,1);}}else{if(!!this.
Aav)this.HL(this.Aav);this.Aav=null;}},BeN:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dt(null);break;case 1:this.Dt(A._NewObject(
C.APz,0));break;case 8:this.Dt(A._NewObject(C.ALM,0));break;case 2:this.Dt(A._NewObject(
C.ALI,0));break;case 3:this.Dt(A._NewObject(C.ALP,0));break;case 4:this.Dt(A._NewObject(
C.ATX,0));break;case 5:this.Dt(A._NewObject(C.AVq,0));break;case 6:this.Dt(A._NewObject(
C.ATx,0));break;case 7:this.Dt(A._NewObject(C.Aml,0));break;case 11:this.Dt(A._NewObject(
C.AMj,0));break;case 12:this.Dt(A._NewObject(C.AMi,0));break;case 9:this.Dt(A._NewObject(
C.ARr,0));break;case 10:this.Dt(A._NewObject(C.AMe,0));break;case 14:this.Dt(A._NewObject(
C.ARn,0));break;case 15:this.Dt(A._NewObject(C.ARo,0));break;case 13:this.Dt(A._NewObject(
C.ARp,0));break;case 16:this.Dt(A._NewObject(C.ATM,0));break;case 17:this.Dt(A._NewObject(
C.AMF,0));break;default:throw new Error(AWf+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Dt:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.Wu).Arp(null);this.N0.Aqr(this.OverlayMenu,A._GetAutoObject(
C.Axp),null,null,[B=this.OverlayMenu,B.Ayu],null,true);this.Bb(this.Wy);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.N0.AkB(this.OverlayMenu,A._GetAutoObject(C.Axo),null
,null,null,null,null,[B=this.OverlayMenu,B.AIt],null,false);this.Bb(this.N0);A._GetAutoObject(
C.Wu).Arp(this.OverlayMenu.KP());}else if(!!this.K$){this.Bb(this.N0);A._GetAutoObject(
C.Wu).Arp(this.K$.Akg().KP());}},Aha:function(E){var B;if(this.K$===E)return;if(
!!this.K$){A._GetAutoObject(C.Wu).Arp(null);this.N0.Aqr(this.K$.Akg(),A._GetAutoObject(
C.Ae9),null,null,[B=this.K$.Akg(),B.Ayu],null,false);this.Bb(this.Wy);}this.K$=E;
if(!!this.K$){this.N0.AkB(this.K$.Akg(),A._GetAutoObject(C.Ae9),null,null,null,null
,null,[this,this.Blm],null,false);this.Bb(this.N0);A._GetAutoObject(C.Wu).Arp(this.
K$.Akg().KP());}else if(!!this.OverlayMenu){this.Bb(this.N0);A._GetAutoObject(C.
Wu).Arp(this.OverlayMenu.KP());}},BxG:function(G){var B;var F;this.J(this.A3s,0);(
F=A._GetAutoObject(C.Wu),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.Wu).M)[3]-B[1]))));this.Zt(this.N0);},A2M:function(G){if(A._GetAutoObject(A.Device.
Device).Amt)switch(A._GetAutoObject(A.Device.Device).KF){case 4:case 39:case 5:break;
case 40:A._GetAutoObject(C.A1).Ahi(4);break;default:if(A._GetAutoObject(A.Device.
Device).AaT<98)A._GetAutoObject(C.A1).BU(4);}else{this.Az0=100;this.Bcz();}},BzR:
function(G){this.Bcz();},Bcz:function(){if(!A._GetAutoObject(A.Device.Device).Amt
){if(A._GetAutoObject(A.Device.Device).AaT<=2){if(this.Az0>2)switch(A._GetAutoObject(
A.Device.Device).KF){case 39:break;case 4:case 40:A._GetAutoObject(C.A1).Ahi(39);
break;default:A._GetAutoObject(C.A1).BU(39);}}else if(A._GetAutoObject(A.Device.
Device).AaT<=10){if(this.Az0>10)switch(A._GetAutoObject(A.Device.Device).KF){case
40:break;case 4:case 39:A._GetAutoObject(C.A1).Ahi(40);break;default:A._GetAutoObject(
C.A1).BU(40);}}else if(A._GetAutoObject(A.Device.Device).AaT<=20){if(this.Az0>20
)switch(A._GetAutoObject(A.Device.Device).KF){case 40:break;case 4:case 39:A._GetAutoObject(
C.A1).Ahi(40);break;default:A._GetAutoObject(C.A1).BU(40);}}else switch(A._GetAutoObject(
A.Device.Device).KF){case 39:case 4:case 40:A._GetAutoObject(C.A1).Fs();break;default:;
}this.Az0=A._GetAutoObject(A.Device.Device).AaT;}},BzS:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqg){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A_(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Ano(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A_(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Ano(0
);}break;default:A.ab5("%s",AWg+A._GetAutoObject(A.Device.Device).Aqg.toFixed());
}},ApD:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dt(0);A._GetAutoObject(C.A1).BU(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KF===5)A._GetAutoObject(C.A1).Ahi(3);break;
default:;}},Be3:function(G){switch(A._GetAutoObject(A.Device.Device).AhH){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Uk(false);break;case 5:{A._GetAutoObject(
A.Device.Device).Ws(65535);A._GetAutoObject(A.Device.Device).Uk(true);}break;case
3:{A._GetAutoObject(A.Device.Device).Ws(255);A._GetAutoObject(A.Device.Device).Uk(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).Ws(16776960);A._GetAutoObject(
A.Device.Device).Uk(true);}break;case 6:{A._GetAutoObject(A.Device.Device).Ws(16711935
);A._GetAutoObject(A.Device.Device).Uk(true);}break;default:A.ab5("%s",AWh+A._GetAutoObject(
A.Device.Device).AhH.toFixed());}},Blm:function(G){var B;this.K$.Akg().CB(this);
this.K$.BAh(this);},Bkq:function(){return this.K$;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);C.Akz._Init.call(this.Akz={I:this},0);C.N0._Init.call(this.
N0={I:this},0);this.__proto__=C.GD;this.H(Cc);this.N0.H(Ri);this.J(this.N0,0);this.
Wy=A._NewObject(C.Wy,0);this.A3P=A._GetAutoObject(C.A1);this.Akz.ANk=[this,this.
Bkq,this.Aha];this.A3s=A._GetAutoObject(C.Wu);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.O;this.Akz._Done();this.N0._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Akz._ReInit();this.N0._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Aav)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Wy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3P)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.K$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A3s)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.Aa9={A_S:null,Bz:null,N:null,Cp:null,Am3:null,Am5:null,QL:null,Am4:null,Am1:
null,Am7:null,Am2:null,Dz:function(G){var E$=0;var X=this.AV;switch(this.Cp.CN){
case 6:E$=2;break;case 7:E$=7;break;case 4:E$=4;break;case 5:E$=5;break;default:;
}X=this.QB(X,E$,0x14);if(!!X)this.Bb(X);},Bbt:function(s){this.Dz(s);},AlP:function(
G){var D2=(A.Core.BL.isPrototypeOf(G)?G:null);if(D2.Ab$&&(this.D8().Ar9===false)
)return;A.pe(this.D8().CA,this);},AIG:function(s){this.AlP(s);},ApC:function(G){
var D2=(A.Core.BL.isPrototypeOf(G)?G:null);if(D2.Ab$&&(this.D8().Zs===false))return;
A.pe(this.D8().Cg,this);},AIJ:function(s){this.ApC(s);},IS:function(G){if(this.QL.
Ab$)return;},As_:function(s){this.IS(s);},AAq:function(G){var D2=(A.Core.BL.isPrototypeOf(
G)?G:null);if(D2.Ab$&&(this.D8().Zr===false))return;A.pe(this.D8().Ck,this);},AII:
function(s){this.AAq(s);},D8:function(){if(!!this.KP())return this.Bz;else return this.
N;},KP:function(){return this.Bz;},GK:function(E){this.A_S=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BL._Init.
call(this.Cp={I:this},0);A.Core.BL._Init.call(this.Am3={I:this},0);A.Core.BL._Init.
call(this.Am5={I:this},0);A.Core.BL._Init.call(this.QL={I:this},0);A.Core.BL._Init.
call(this.Am4={I:this},0);A.Core.BL._Init.call(this.Am1={I:this},0);A.Core.BL._Init.
call(this.Am7={I:this},0);A.Core.BL._Init.call(this.Am2={I:this},0);this.__proto__=
C.Aa9;this.H([0,0,C.Asf[0],C.Asf[1]]);this.N.H(W6);this.N.Ar(false);this.N.Z(false
);this.Cp.Filter=147;this.Am3.Filter=26;this.Am5.Filter=28;this.QL.Filter=1;this.
Am4.Filter=27;this.Am1.Filter=44;this.Am7.Filter=9;this.Am2.Filter=42;this.J(this.
N,0);this.Cp.BM=[this,this.Bbt];this.Cp.DZ=[this,this.Bbt];this.Am3.BM=[this,this.
AIG];this.Am3.DZ=[this,this.AIG];this.Am5.BM=[this,this.AIJ];this.Am5.DZ=[this,this.
AIJ];this.QL.BM=[this,this.As_];this.QL.DZ=[this,this.As_];this.Am4.BM=[this,this.
AII];this.Am4.DZ=[this,this.AII];this.Am1.BM=[this,this.AIG];this.Am1.DZ=[this,this.
AIG];this.Am7.BM=[this,this.AIJ];this.Am7.DZ=[this,this.AIJ];this.Am2.BM=[this,this.
AII];this.Am2.DZ=[this,this.AII];},_Done:function(){this.__proto__=A.Core.O;this.
N._Done();this.Cp._Done();this.Am3._Done();this.Am5._Done();this.QL._Done();this.
Am4._Done();this.Am1._Done();this.Am7._Done();this.Am2._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.N._ReInit();this.Cp.
_ReInit();this.Am3._ReInit();this.Am5._ReInit();this.QL._ReInit();this.Am4._ReInit(
);this.Am1._ReInit();this.Am7._ReInit();this.Am2._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.A_S)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Bz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am3)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Am5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Axo={_Init:function(){A.acl.AGB._Init.call(this,0);this.Kc=0x22;this.AdV=true;
this.AuQ=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.Axp={_Init:function(){A.acl.AGB._Init.call(this,0);this.Kc=0x22;this.AdV=true;
this.AuQ=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUw={R7:function(){var B;var Ap=(A.acl.Ae1.isPrototypeOf(B=A.acl.Ad$.R7.call(this
))?B:null);if(!Ap)throw new Error(AsN);Ap.Cn.Cw=100;return Ap;},R6:function(){var
B;var Ap=(A.acl.Aw8.isPrototypeOf(B=A.acl.Ad$.R6.call(this))?B:null);if(!Ap)throw new
Error(AsN);Ap.EV.B3=100;return Ap;},_Init:function(aArg){A.acl.Ad$._Init.call(this
,aArg);this.__proto__=C.AUw;},_className:"Application::ShadeTransition"};C.AmP={
AgT:null,SO:null,HN:null,DS:null,AnimalId:-1,GroupId:-1,ACV:true,Dd:function(E){
C.BS.Dd.call(this,E);this.SO.L(E);this.HN.L(E);this.AgT.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HN.R(A.aaR(A.acf.Ae3)
);else this.HN.R(E.toFixed());},AbW:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SO.R(A.aaR(A.acf.Ae3));else this.SO.R(E.toFixed());},D3:function(
G){},Ni:function(s){this.D3(s);},A9Z:function(E){if(this.ACV===E)return;this.ACV=
E;this.SO.Z(this.ACV);this.AgT.Z(this.ACV);},_Init:function(aArg){C.BS._Init.call(
this,aArg);A.acg.Am._Init.call(this.AgT={I:this},0);A.acg.Text._Init.call(this.SO={
I:this},0);A.acg.Text._Init.call(this.HN={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.AmP;this.AgT.H(AWi);this.SO.H(AWj);this.SO.A8(0x11);this.
SO.R(A.aaR(A.acf.Ae3));this.HN.H(AWk);this.HN.A8(0x11);this.HN.R(A.aaR(A.acf.Ae3
));this.DS.H(AWl);this.J(this.AgT,0);this.J(this.SO,0);this.J(this.HN,0);this.J(
this.DS,0);this.AgT.Aw(A.aaL(A.ach.AQf));this.SO.S(A.aaL(A.fl.Af));this.HN.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BS;this.AgT._Done();this.SO._Done(
);this.HN._Done();this.DS._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS.
_ReInit.call(this);this.AgT._ReInit();this.SO._ReInit();this.HN._ReInit();this.DS.
_ReInit();this.SO.R(A.aaR(A.acf.Ae3));this.HN.R(A.aaR(A.acf.Ae3));this.SO.S(A.aaL(
A.fl.Af));this.HN.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.call(this
,D);if((B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.AC5={Init:function(
aArg){var B;A.zX([this,this.Ni],[B=A._GetAutoObject(A.Device.Helper).W,B.Arl,B.Ul
],0);A.zX([this,this.Ni],[B=A._GetAutoObject(A.Device.Helper).W,B.A8L,B.Anu],0);
A.zV([this,this.Ni],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Ni],[
B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.Ex],0);A.zX([this,this.Ni],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9n,B.Aw4],0);A.zX([this,this.Ni],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8C,B.AeS],0);A.zX([this,this.Ni],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8D,B.Ui],0);A.zX([this,this.Ni],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8G,B.AeV],0);A.zX([this,this.Ni],[B=A._GetAutoObject(A.Device.Helper).W,B.A8K,B.
AeX],0);A.pe([this,this.Ni],this);},Dd:function(E){C.AmP.Dd.call(this,E);this.DS.
Dd(E);},D3:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqK()){this.AbW(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.AbW(-1);this.OnSetAnimalId(-1);}this.DS.
Ex(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AER(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.AeS(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Ui(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.AeV(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.AeX(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmP._Init.call(this,aArg);this.
__proto__=C.AC5;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Ke={AhB:A.abi(3,A.jV,null),Cr:A.abi(3,0,{0:7,1:30,2:90}),And:3,Dr:function(){
if(this.And<3)return this.And;else return 3;},C7:function(aIndex){if((aIndex>=3)||(
aIndex>=this.And))return-1;return this.Cr.Get(aIndex);},Gd:function(aIndex){if((
aIndex>=3)||(aIndex>=this.And))return AWm;return this.AhB.Get(aIndex);},DO:function(
A7){var P=0;while((P<3)&&(P<=this.And)){if(this.Cr.Get(P)===A7)return P;P=P+1;}return-
1;},Hp:function(){var P=0;var max=-1;while((P<3)&&(P<=this.And)){if(this.Cr.Get(
P)>max)max=this.Cr.Get(P);P=P+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhB=[]).__proto__=C.Ke.AhB;(this.Cr=[]).__proto__=C.Ke.Cr;this.
__proto__=C.Ke;this.AhB.Set(0,A.aaR(A.acf.A7n));this.AhB.Set(1,A.aaR(A.acf.A7l));
this.AhB.Set(2,A.aaR(A.acf.A7m));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhB.Set(0,A.aaR(A.acf.A7n));this.AhB.Set(1,A.aaR(A.acf.A7l));this.AhB.Set(2,A.aaR(
A.acf.A7m));},_className:"Application::Days"};C.AUt={Amn:null,BT:null,Q2:null,Qy:
null,A$G:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BAB],[B=A._GetAutoObject(A.Device.Device),B.Arj,B.As9],0);},Bk:function(
aSize){},Ai:function(Ae){var B;var F;C.Dp.Ai.call(this,Ae);var Fo=((Ae&0x20)===0x20
);var Gx=this.Bo.By;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWn+A._GetAutoObject(
A.Device.Converter).AkQ((F=this.Q,F[1].call(F[0]))))+CO)+A._GetAutoObject(A.acj.
Temperature).Alz());this.H0.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6J())&&(
Fo||Gx));},C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,F[1].call(F[0])));
},J8:function(G){var F;var BR=this.AM;C.Dp.J8.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6J()){this.BC(this.AM+10);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J3:function(G){var F;var BR=this.
AM;C.Dp.J3.call(this,G);this.BC(this.AM-10);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_B:function(E){if(this.A$G===E)return;
this.A$G=E;this.An();},BAB:function(G){this.An();},_Init:function(aArg){C.Dp._Init.
call(this,aArg);A.acg.AL._Init.call(this.Amn={I:this},0);C.CG._Init.call(this.BT={
I:this},0);A.acg.AL._Init.call(this.Q2={I:this},0);A.acg.Am._Init.call(this.Qy={
I:this},0);this.__proto__=C.AUt;this.H(UQ);this.Background.H(UQ);this.V.H(AsO);this.
V.L(A.jb.Bm);this.Amn.H(AWo);this.Amn.L(A.jb.Afi);this.Hr.H(AWp);this.BT.H(AWq);
this.BT.A8(0x12);this.BT.L(A.jb.Text);this.H0.H(AWr);this.Q2.H(AWs);this.Q2.L(A.
jb.EW);this.Qy.H(AWt);this.J(this.Amn,-2);this.J(this.BT,-1);this.J(this.Q2,0);this.
J(this.Qy,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EG));this.BT.A2(A.aaL(A.fl.Af));this.Qy.Aw(A.aaL(A.ach.ADk));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dp;this.Amn._Done();this.BT._Done();this.Q2.
_Done();this.Qy._Done();C.Dp._Done.call(this);},_ReInit:function(){C.Dp._ReInit.
call(this);this.Amn._ReInit();this.BT._ReInit();this.Q2._ReInit();this.Qy._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EG));this.
BT.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dp._Mark.call(this,D);if((B=this.
Amn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qy)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A__={Q:null
,AiU:null,Init:function(aArg){var B;A.zX([this,this.Bel],[B=A._GetAutoObject(A.Device.
Device),B.AEh,B.BaQ],0);A.pe([this,this.Bel],this);},As:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ahi:function(Alc){A._GetAutoObject(A.Device.Device).Zg(Alc
);},Bel:function(G){var F;if(!this.Q){A.ab5("%s",AWu);return;}var Bp=null;if(this.
AiU.Contains(A._GetAutoObject(A.Device.Device).KF)){Bp=this.AiU.A_Q();while(!!Bp&&(
Bp.AnZ!==A._GetAutoObject(A.Device.Device).KF))Bp=this.AiU.A_Q();}if(!Bp)Bp=this.
Bze(A._GetAutoObject(A.Device.Device).KF);(F=this.Q,F[2].call(F[0],Bp));},Bze:function(
Alc){var Bp=null;switch(Alc){case 0:case 1:Bp=A._NewObject(C.AUB,0);break;case 2:
Bp=A._NewObject(C.XU,0);break;case 3:Bp=A._NewObject(C.Avm,0);break;case 61:Bp=A.
_NewObject(C.AVe,0);break;case 88:Bp=A._NewObject(C.NewMenu,0);break;case 27:Bp=
A._NewObject(C.ARH,0);break;case 6:Bp=A._NewObject(C.ARg,0);break;case 16:Bp=A._NewObject(
C.ANs,0);break;case 22:Bp=A._NewObject(C.AU$,0);break;case 17:Bp=A._NewObject(C.
AUS,0);break;case 46:Bp=A._NewObject(C.ANp,0);break;case 99:Bp=A._NewObject(C.AT5
,0);break;case 100:Bp=A._NewObject(C.AT4,0);break;case 101:Bp=A._NewObject(C.AU9
,0);break;case 23:Bp=A._NewObject(C.AVx,0);break;case 18:Bp=A._NewObject(C.ANG,0
);break;case 19:Bp=A._NewObject(C.AT6,0);break;case 38:Bp=A._NewObject(C.AQK,0);
break;case 87:Bp=A._NewObject(C.ATK,0);break;case 72:Bp=A._NewObject(C.ANE,0);break;
case 73:Bp=A._NewObject(C.ANF,0);break;case 93:Bp=A._NewObject(C.AND,0);break;case
94:Bp=A._NewObject(C.ANB,0);break;case 104:Bp=A._NewObject(C.ANz,0);break;case 105:
Bp=A._NewObject(C.ANC,0);break;case 74:Bp=A._NewObject(C.ANA,0);break;case 5:Bp=
A._NewObject(C.AUL,0);break;case 4:Bp=A._NewObject(C.AdX,0);break;case 40:Bp=A._NewObject(
C.AM1,0);break;case 39:Bp=A._NewObject(C.ANi,0);break;case 28:Bp=A._NewObject(C.
Wh,0);break;case 7:Bp=A._NewObject(C.Aqu,0);break;case 92:Bp=A._NewObject(C.ANP,
0);break;case 31:Bp=A._NewObject(C.Arc,0);break;case 89:Bp=A._NewObject(C.ARF,0);
break;case 34:Bp=A._NewObject(C.ALG,0);break;case 35:Bp=A._NewObject(C.ManualActionScanScreen
,0);break;case 32:Bp=A._NewObject(C.SetTransponderScreen,0);break;case 50:Bp=A._NewObject(
C.SetSaveTransponderScreen,0);break;case 55:Bp=A._NewObject(C.NewAnimalSetTransponderScreen
,0);break;case 63:Bp=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case
90:Bp=A._NewObject(C.MotherScanScreen,0);break;case 91:Bp=A._NewObject(C.SetSaveNaisIdScreen
,0);break;case 8:Bp=A._NewObject(C.GS,0);break;case 9:Bp=A._NewObject(C.IW,0);break;
case 24:Bp=A._NewObject(C.ALZ,0);break;case 10:Bp=A._NewObject(C.Ami,0);break;case
21:Bp=A._NewObject(C.AL3,0);break;case 11:Bp=A._NewObject(C.AL2,0);break;case 29:
Bp=A._NewObject(C.Auw,0);break;case 54:Bp=A._NewObject(C.AL1,0);break;case 30:Bp=
A._NewObject(C.AL0,0);break;case 37:Bp=A._NewObject(C.GC,0);break;case 12:Bp=A._NewObject(
C.ALY,0);break;case 41:Bp=A._NewObject(C.ALX,0);break;case 43:Bp=A._NewObject(C.
ALW,0);break;case 14:Bp=A._NewObject(C.ANg,0);break;case 13:Bp=A._NewObject(C.ANh
,0);break;case 44:Bp=A._NewObject(C.ANf,0);break;case 20:Bp=A._NewObject(C.AVo,0
);break;case 42:Bp=A._NewObject(C.AVn,0);break;case 45:Bp=A._NewObject(C.AVm,0);
break;case 47:Bp=A._NewObject(C.AOs,0);break;case 48:Bp=A._NewObject(C.AOr,0);break;
case 49:Bp=A._NewObject(C.AOq,0);break;case 69:Bp=A._NewObject(C.ANO,0);break;case
70:Bp=A._NewObject(C.ANN,0);break;case 71:Bp=A._NewObject(C.ANM,0);break;case 51:
Bp=A._NewObject(C.ARU,0);break;case 52:Bp=A._NewObject(C.ART,0);break;case 53:Bp=
A._NewObject(C.ARS,0);break;case 96:Bp=A._NewObject(C.AVD,0);break;case 97:Bp=A.
_NewObject(C.AVC,0);break;case 98:Bp=A._NewObject(C.AVB,0);break;case 80:Bp=A._NewObject(
C.ARP,0);break;case 81:Bp=A._NewObject(C.ARO,0);break;case 82:Bp=A._NewObject(C.
ARN,0);break;case 85:Bp=A._NewObject(C.AMG,0);break;case 102:Bp=A._NewObject(C.ATN
,0);break;case 83:Bp=A._NewObject(C.AT8,0);break;case 84:Bp=A._NewObject(C.AT7,0
);break;case 58:Bp=A._NewObject(C.ALL,0);break;case 59:Bp=A._NewObject(C.ALK,0);
break;case 60:Bp=A._NewObject(C.ALJ,0);break;case 15:Bp=A._NewObject(C.ATU,0);break;
case 68:Bp=A._NewObject(C.AUR,0);break;case 78:Bp=A._NewObject(C.ARe,0);break;case
79:Bp=A._NewObject(C.ARd,0);break;case 26:Bp=A._NewObject(C.ARI,0);break;case 62:
Bp=A._NewObject(C.ARE,0);break;case 25:Bp=A._NewObject(C.AN2,0);break;case 75:Bp=
A._NewObject(C.AN3,0);break;case 67:Bp=A._NewObject(C.AN1,0);break;case 66:Bp=A.
_NewObject(C.AN4,0);break;case 64:Bp=A._NewObject(C.AN5,0);break;case 65:Bp=A._NewObject(
C.Aqx,0);break;case 77:Bp=A._NewObject(C.AN6,0);break;case 76:Bp=A._NewObject(C.
ANZ,0);break;case 95:Bp=A._NewObject(C.AL5,0);break;case 33:Bp=A._NewObject(C.WeightListScreen
,0);break;case 36:Bp=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 56:Bp=A.
_NewObject(C.AnimalMultiInfoScreen,0);break;case 57:Bp=A._NewObject(C.MultiInfoActionsScreen
,0);break;case 86:Bp=A._NewObject(C.AMg,0);break;case 103:Bp=A._NewObject(C.AUX,
0);break;default:throw new Error(AWv);}if(!!Bp)Bp.AnZ=Alc;return Bp;},BU:function(
Alc){var F;if(!(F=this.Q,F[1].call(F[0])))A.ab5("%s",AWw);else this.AiU.BnO((F=this.
Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Device).Zg(Alc);},Fs:function(){var
Bfz=3;var Bfy=this.AiU.BnE();if(!!Bfy)Bfz=Bfy.AnZ;else A.ab5("%s",AWx);A._GetAutoObject(
A.Device.Device).Zg(Bfz);},_Init:function(aArg){C.A$a._Init.call(this.AiU={I:this
},0);this.__proto__=C.A__;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;this.AiU._Done();A.h7--;},_ReInit:function(){this.AiU._ReInit();},_Mark:function(
D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiU).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"};C.
A1={_Init:function(){C.A__._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.AF6={H3:null,Yo:null,Ae5:null,AaA:null,My:null,Azj:
1,RatingMode:0,RatedAttribute:0,CS:function(){this.Yo.R(this.Bc7(this.RatedAttribute
));this.AKl(this);},Ai:function(Ae){this.My.R(A._GetAutoObject(A.Device.Helper).
Ng(A.aaR(A.acf.ARv),P4,this.Azj.toFixed()));if(this.RatingMode===1)this.My.Z(true
);else this.My.Z(false);},CB:function(G){var B;C.AB.CB.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bv.Lg())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bv.HF().toFixed(),0,null);this.H3.Gj();this.H3.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axh(this.
H3,5);A.zX([this,this.AKl],[B=A._GetAutoObject(A.Device.Device),B.ASp,B.AZ3],0);
A.zX([this,this.AKl],[B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.Ex],0);A.pe([
this,this.AKl],this);},Asn:function(G){var a=this.AJ1(this.RatedAttribute);this.
BfQ();this.Azj=this.Azj-1;this.An();if(!a)this.ARC();else this.Sy(a);},WD:function(
G){var a=this.Bdc(this.RatedAttribute);this.BfQ();this.Azj=this.Azj+1;this.An();
if(!a)this.A7K();else this.Sy(a);},AJ1:function(Nk){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Nk){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHv);},Bdc:function(Nk){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Nk){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHv);},Sy:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.Yo.R(this.Bc7(E));this.
DH(E);this.Ae5.Anz(this.H3.Biy(E));if(!this.AJ1(E)){if(this.AQT())this.N.Cq(A.aaL(
A.ach.Abr));else this.N.Cq(null);}else this.N.Cq(A.aaL(A.ach.Aem));},Bc7:function(
Nk){return this.AaA.BO(Nk);},Bzd:function(Nk){if(!!Nk){var a=this.AJ1(Nk);if(!a)
return A.jV;else return this.Bc8(a);}else return A.jV;},Bzc:function(Nk){if(!!Nk
){var a=this.Bdc(Nk);if(!a)return A.jV;else return this.Bc8(a);}else return A.jV;
},ARC:function(){},A7K:function(){},A6K:function(){return null;},Bc8:function(Nk
){return this.AaA.Ls(Nk);},BfQ:function(){if(!!this.RatedAttribute)this.H3.Bok(this.
RatedAttribute,this.Ae5.A5);},AKl:function(G){if(this.AQT())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.Sy(2);this.DH(this.RatedAttribute
);this.An();},Xu:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkL:function(G){var a=this.AJ1(this.RatedAttribute);if(!a){if(this.AQT())this.
Xu(this);}else this.ARC();},DH:function(Nk){this.N.Ht(this.Bzd(Nk));if(!!this.N.
AnU){this.N.CZ(null);this.N.OL(true);}else{this.N.CZ(A.aaL(A.ach.Aem));this.N.OL(
false);}this.N.B2(this.Bzc(Nk));if(!!this.N.AnW){this.N.C5(null);this.N.OM(true);
}else{this.N.C5(this.A6K());this.N.OM(false);}},AQT:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Ak5,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Yo={
I:this},0);C.Rating._Init.call(this.Ae5={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaA={I:this},0);A.acg.Text._Init.call(this.My={I:this},0);this.__proto__=
C.AF6;this.Background.L(A.jb.CI);this.N.Z(true);this.Dn(C.IE);this.Yo.H(AWy);this.
Yo.KR(true);this.Yo.L(A.jb.Text);this.Ae5.H(AWz);this.My.H(AWA);this.My.A8(0x14);
this.My.R(A.aaR(A.acf.ARv));this.My.L(A.jb.Text);this.J(this.Yo,0);this.J(this.Ae5
,0);this.J(this.My,0);this.Bb(this.Ae5);this.N.CA=[this,this.Asn];this.N.Ck=[this
,this.AkL];this.N.Cg=[this,this.WD];this.Yo.S(A.aaL(A.fl.Af));this.Ae5.AR=[this,
this.WD];this.My.S(A.aaL(A.fl.Af));this.H3=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.Yo._Done();this.Ae5._Done();this.AaA._Done();
this.My._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Yo._ReInit();this.Ae5._ReInit();this.AaA._ReInit();this.My._ReInit();this.
My.R(A.aaR(A.acf.ARv));this.Yo.S(A.aaL(A.fl.Af));this.My.S(A.aaL(A.fl.Af));this.
CS();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ae5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaA)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.My)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HW={Y:null,Gender:null,AnimalType:null,Breed:null,I_:null,Pj:null,AsB:null,BY:
null,C_:null,C9:null,CF:null,Gf:null,Ay:null,KG:0,Init:function(aArg){A.zX([this
,this.Bbr],this.BY.Q,0);A.pe([this,this.Bbr],this);A.pe([this,this.AAX],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANc(this.
Y);},Dz:function(G){var B;var E$=0;var X=this.AV;switch(this.Cp.CN){case 6:E$=2;
break;case 7:E$=7;break;case 4:E$=4;break;case 5:E$=5;break;default:;}X=this.QB(
X,E$,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HC(X,true,null
,null);this.AAX(this);},Fb:function(G){var B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[
1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Bt[1]);},AeM:function(E){
if(this.KG===E)return;this.KG=E;A.abo([this,this.AvY,this.AeM],0);},AAX:function(
G){var B;var GP=(C.Cm.isPrototypeOf(B=this.AV)?B:null);this.N.Ht(A.jV);this.N.CZ(
A.aaL(A.ach.EX));this.N.CA=[this,this.AIF];if(!!GP&&!!GP.Amd){this.N.FH(A.jV);this.
N.Kt.Do(255);this.N.ArA(GP.AqC);this.N.Cq(GP.Avw);this.N.Ck=GP.Amd;}else{this.N.
FH(A.jV);this.N.Cq(null);this.N.Ck=null;}if(!!GP&&!!GP.Agg){this.N.B2(GP.Axy);this.
N.HO.Do(GP.Aw7);this.N.Anq(GP.AmJ);this.N.C5(GP.AqS);this.N.Cg=GP.Agg;}else this.
At8();},Af3:function(G){A.ab5("%s",Ax4);},AyH:function(s){this.Af3(s);},Es:function(
G){A.ab5("%s",Ax4);},AIF:function(s){this.Es(s);},At8:function(){A.ab5("%s",Ak6);
},AAj:function(G){A.ab5("%s",Ax4);},AcJ:function(s){this.AAj(s);},JA:function(Ag
){this.Bb(Ag);this.Y.HC(Ag,true,null,null);this.Y.Vm(null,null);},Apx:function(G
){var F;this.C9.Ahf(A._GetAutoObject(A.Device.Helper).Abf((F=this.BY.Q,F[1].call(
F[0]))));},Bbr:function(s){this.Apx(s);},AvY:function(){return this.KG;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UK._Init.call(this.I_={I:this},
0);A.Device.M0._Init.call(this.Pj={I:this},0);A.Device.KX._Init.call(this.AsB={I:
this},0);C.BZ._Init.call(this.BY={I:this},0);C.BZ._Init.call(this.C_={I:this},0);
C.AkJ._Init.call(this.C9={I:this},0);C.Axk._Init.call(this.CF={I:this},0);C.Asi.
_Init.call(this.Gf={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.HW;var B;this.N.Z(true);this.Dn(C.IE);this.Y.H(E8);this.Y.JN(1);this.KG=A._GetAutoObject(
A.Device.Helper).Abf(this.AnimalType.Q);this.BY.H(AhO);this.BY.Aj(true);this.BY.
T(A.aaR(A.acf.Afh));this.C_.H(Ax5);this.C_.Aj(true);this.C_.T(A.aaR(A.acf.Afc));
this.C9.H(Aog);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KG));this.C9.Gq(1000);this.
C9.E5(99000);this.C9.Ahf(A._GetAutoObject(A.Device.Helper).Abf(this.AnimalType.Q
));this.CF.H(AhP);this.CF.Aj(true);this.CF.T(A.aaR(A.acf.Breed));this.Gf.H(AWB);
this.Gf.Aj(true);this.Gf.T(A.aaR(A.acf.I_));this.Ay.H(Ax6);this.J(this.Y,0);this.
J(this.BY,0);this.J(this.C_,0);this.J(this.C9,0);this.J(this.CF,0);this.J(this.Gf
,0);this.J(this.Ay,0);this.Y.Ej=[this,this.Fb];this.Gender.LX(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.LX(A._GetAutoObject(A.Device.Helper).W);this.Breed.
LX(A._GetAutoObject(A.Device.Helper).W);this.I_.LX(A._GetAutoObject(A.Device.Helper
).W);this.BY.As([B=this.AnimalType,B.B$,B.Ca]);this.BY.CJ(this.AnimalType);this.
C_.As([B=this.Gender,B.B$,B.Ca]);this.C_.CJ(this.Gender);this.C9.As([this,this.AvY
,this.AeM]);this.CF.Gk([this,this.D8,this.GK]);this.CF.LW([B=this.CF,B.FO]);this.
CF.LZ(A.aaL(A.ach.Edit));this.CF.As([B=this.Breed,B.B$,B.Ca]);this.CF.CJ(this.Breed
);this.CF.Anp(this.Pj);this.Gf.Gk([this,this.D8,this.GK]);this.Gf.LW([B=this.Gf,
B.FO]);this.Gf.LZ(A.aaL(A.ach.Edit));this.Gf.As([B=this.I_,B.B$,B.Ca]);this.Gf.CJ(
this.I_);this.Gf.Anp(this.AsB);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.I_._Done();this.Pj._Done();this.AsB._Done();this.BY._Done();this.C_._Done(
);this.C9._Done();this.CF._Done();this.Gf._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.I_._ReInit();this.
Pj._ReInit();this.AsB._ReInit();this.BY._ReInit();this.C_._ReInit();this.C9._ReInit(
);this.CF._ReInit();this.Gf._ReInit();this.Ay._ReInit();this.BY.T(A.aaR(A.acf.Afh
));this.C_.T(A.aaR(A.acf.Afc));this.C9.T(A.aaR(A.acf.KG));this.CF.T(A.aaR(A.acf.
Breed));this.Gf.T(A.aaR(A.acf.I_));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wh={AyV:false,LN:function(G){if(A._GetAutoObject(A.Device.Device).Ao.Lg())A._GetAutoObject(
A.Device.Device).A_(41,true,A._GetAutoObject(A.Device.Device).Ao.HF().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gj();A._GetAutoObject(A.Device.Helper
).Ap_(A._GetAutoObject(A.Device.Helper).W);},At8:function(){this.N.B2(A.jV);this.
N.C5(A.aaL(A.ach.ADo));this.N.Cg=[this,this.AyH];},CB:function(G){if(!this.AyV){
this.AyV=true;A.pe([this,this.AcJ],this);}else C.Arc.CB.call(this,G);},AAj:function(
G){A._GetAutoObject(C.A1).BU(55);},_Init:function(aArg){C.Arc._Init.call(this,aArg
);this.__proto__=C.Wh;this.JU(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IE={_Init:function(aArg){C.AC5._Init.call(this,aArg);this.__proto__=C.IE;this.
A9Z(false);},_className:"Application::HeaderSelectedAnimalId"};C.IW={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Ei:null,Y:null,PW:null,SX:null,N_:
null,SY:null,Nh:null,Ph:null,RJ:null,Ot:null,RK:null,NA:null,Lc:null,Jj:null,KV:
null,Mr:null,Yi:null,SZ:null,RL:null,Ay:null,AxK:0,AxJ:0,Auu:0,Aut:0,Arb:0,Asu:0
,Au9:0,Au_:0,Amh:false,An5:false,Init:function(aArg){A.zX([this,this.Avd],this.Lc.
Q,0);A.zX([this,this.Auz],this.Jj.Q,0);A.zX([this,this.Bpx],this.KV.Q,0);A.zX([this
,this.BjU],this.Mr.Q,0);A.zX([this,this.Bp3],this.Nh.Q,0);A.zX([this,this.Bp2],this.
N_.Q,0);A.zX([this,this.BgS],this.NA.Q,0);A.zX([this,this.BgR],this.Ot.Q,0);this.
Bb(this.PW);},Dz:function(G){var E$=0;var X=this.AV;switch(this.Cp.CN){case 6:E$=
2;break;case 7:E$=7;break;case 4:E$=4;break;case 5:E$=5;break;default:;}X=this.QB(
X,E$,0x414);if(!!X)this.Bb(X);this.MO(this);},CB:function(G){if(!!A._GetAutoObject(
A.Device.Device).Ao.Filter)this.Bl(A._GetAutoObject(A.Device.Device).Ao.Filter.Fd(
));else this.Bl(A._NewObject(A.Device.Filter,0));},Es:function(G){A._GetAutoObject(
C.A1).Fs();},A2H:function(G){var EA=(C.Aed.isPrototypeOf(G)?G:null);if(!EA)return;
var Av=this.Filter.DN(EA.En,EA.Operator);if(!!Av){this.Filter.N3(Av);A.abo([this
,this.Fh,this.Fl],0);}else{if(EA.En===11){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EF=EA.En;Av.Operator=EA.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A5=true;}else if(EA.En===12){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EF=EA.En;Av.Operator=EA.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A5=true;}else if(EA.En===8){Av=A._NewObject(A.Device.BoolFilterCriterion
,0);Av.EF=EA.En;Av.Operator=EA.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Av)?Av:null).A5=true;}else A.ab5("%s",AHw+EA.En.toFixed());if(!!Av){this.Filter.
CW(Av);A.abo([this,this.Fh,this.Fl],0);}}},BzP:function(G){A._GetAutoObject(A.Device.
Device).Ao.Bl(this.Filter);A._GetAutoObject(C.A1).Fs();},AAh:function(G){var EA=(
C.AmO.isPrototypeOf(G)?G:null);if(!EA)return;var Av=this.Filter.DN(EA.En,EA.Operator
);if(!!Av){this.Filter.N3(Av);A.abo([this,this.Fh,this.Fl],0);}else{if(EA.En===7
){Av=A._NewObject(A.Device.GenderFilterCriterion,0);Av.EF=EA.En;Av.Operator=EA.Operator;
}else if(EA.En===14){Av=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Av.EF=
EA.En;Av.Operator=EA.Operator;}else if((EA.En===22)||(EA.En===26)){var A0I=A._NewObject(
A.Device.UInt64FilterCriterion,0);A0I.EF=EA.En;A0I.Operator=0;Av=A0I;}else A.ab5(
"%s",AHw+EA.En.toFixed());if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fh,this.Fl
],0);}}},A9U:function(E){if(this.Au9===E)return;this.Au9=E;A.abo([this,this.BkA,
this.A9U],0);},A9V:function(E){if(this.Au_===E)return;this.Au_=E;A.abo([this,this.
BkB,this.A9V],0);},Avd:function(G){var F;this.A9V((F=this.Lc.Q,F[1].call(F[0])));
var Av=this.Filter.DN(7,0);if(!!Av){var AzD=(A.Device.GenderFilterCriterion.isPrototypeOf(
Av)?Av:null);if(!!AzD)AzD.A5=this.Au_;else A.ab5("%s",Aft);}},Auz:function(G){var
F;this.A9U((F=this.Jj.Q,F[1].call(F[0])));var Av=this.Filter.DN(14,0);if(!!Av){var
UW=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Av)?Av:null);if(!!UW)UW.A5=
this.Au9;else A.ab5("%s",Aft);}},Fb:function(G){var B;this.Ay.Mu((B=this.Y.Da(0x1
))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Bt[1]);},A_A:function(
E){if(this.Asu===E)return;this.Asu=E;A.abo([this,this.Blb,this.A_A],0);},Bpx:function(
G){var F;this.A_A((F=this.KV.Q,F[1].call(F[0])));var Av=this.Filter.DN(22,1);if(
!!Av){var Ai4=(A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!Ai4
)switch(this.Asu){case 1:Ai4.Operator=5;break;case 0:Ai4.Operator=0;break;default:
A.ab5("%s%e",AHx,this.Asu);}else A.ab5("%s",Aft);}},A97:function(E){if(this.Arb===
E)return;this.Arb=E;A.abo([this,this.BkQ,this.A97],0);},BjU:function(G){var F;this.
A97((F=this.Mr.Q,F[1].call(F[0])));var Av=this.Filter.DN(26,1);if(!!Av){var AtM=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AtM)switch(this.Arb
){case 1:AtM.Operator=5;break;case 0:AtM.Operator=0;break;default:A.ab5("%s%e",AHx
,this.Arb);}else A.ab5("%s",Aft);}},Bl:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PW.Bl([this,this.Fh,this.Fl]);this.SX.
Bl([this,this.Fh,this.Fl]);this.N_.Bl([this,this.Fh,this.Fl]);this.SY.Bl([this,this.
Fh,this.Fl]);this.Nh.Bl([this,this.Fh,this.Fl]);this.Ph.Bl([this,this.Fh,this.Fl
]);this.RJ.Bl([this,this.Fh,this.Fl]);this.Ot.Bl([this,this.Fh,this.Fl]);this.RK.
Bl([this,this.Fh,this.Fl]);this.NA.Bl([this,this.Fh,this.Fl]);this.Lc.Bl([this,this.
Fh,this.Fl]);this.Jj.Bl([this,this.Fh,this.Fl]);this.KV.Bl([this,this.Fh,this.Fl
]);this.Mr.Bl([this,this.Fh,this.Fl]);this.Yi.Bl([this,this.Fh,this.Fl]);this.SZ.
Bl([this,this.Fh,this.Fl]);this.RL.Bl([this,this.Fh,this.Fl]);this.ArT(false);A.
pe([this,this.A4h],this);var BdP=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DN(1,2))?B:null);if(!!BdP){this.ArT(true);this.AFN(BdP.A5);}var Bdi=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DN(1,3))?B:null);if(!!
Bdi){this.ArT(true);this.AFO(Bdi.A5);}this.Ars(false);A.pe([this,this.A4a],this);
var BdO=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DN(4,3))?B:null
);if(!!BdO){this.Ars(true);this.AEA(A._GetAutoObject(A.Device.Helper).MN(BdO.A5,
A._GetAutoObject(A.Device.Helper).Ds()));}var Bdh=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DN(4,2))?B:null);if(!!Bdh){this.Ars(true);this.AEC(A.
_GetAutoObject(A.Device.Helper).MN(Bdh.A5,A._GetAutoObject(A.Device.Helper).Ds()
)+1);}var AzD=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DN(7,0
))?B:null);if(!!AzD)this.Lc.BC(this.Gender.DO(AzD.A5));var UW=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DN(14,0))?B:null);if(!!UW)this.Jj.BC(this.AnimalType.
DO(UW.A5));var Ai4=this.Filter.DN(22,1);if(!!Ai4){if(!Ai4.Operator)this.KV.BC(0);
else this.KV.BC(1);}var AtM=this.Filter.DN(26,1);if(!!AtM){if(!AtM.Operator)this.
Mr.BC(0);else this.Mr.BC(1);}},Fl:function(Aq){this.Bl(Aq);},AFO:function(E){if(
this.AxK===E)return;this.AxK=E;A.abo([this,this.A9f,this.AFO],0);},AFN:function(
E){if(this.AxJ===E)return;this.AxJ=E;A.abo([this,this.A9e,this.AFN],0);},Bp3:function(
G){var F;this.AFO((F=this.Nh.Q,F[1].call(F[0])));var Av=this.Filter.DN(1,3);if(!
!Av){var ABh=(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!ABh)
ABh.A5=this.AxK;else A.ab5("%s",Aft);}},Bp2:function(G){var F;this.AFN((F=this.N_.
Q,F[1].call(F[0])));var Av=this.Filter.DN(1,2);if(!!Av){var ABh=(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!ABh)ABh.A5=this.AxJ;else A.ab5("%s",Aft);}},Bei:
function(G){var EA=(C.AjB.isPrototypeOf(G)?G:null);if(!EA)return;var Av=this.Filter.
DN(EA.En,EA.Operator);if(!!Av){this.Filter.N3(Av);A.abo([this,this.Fh,this.Fl],0
);}else{if(EA===this.SX){Av=A._NewObject(A.Device.Int32FilterCriterion,0);Av.EF=
EA.En;Av.Operator=EA.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Av)?Av:
null).A5=this.AxJ;this.Bb(this.N_);}else if(EA===this.SY){Av=A._NewObject(A.Device.
Int32FilterCriterion,0);Av.EF=EA.En;Av.Operator=EA.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Av)?Av:null).A5=this.AxK;this.Bb(this.Nh);}if(!!Av){this.Filter.CW(
Av);A.abo([this,this.Fh,this.Fl],0);}}A.pe([this,this.A4h],this);},A4h:function(
G){var A2q=!!this.Filter.DN(this.N_.En,this.N_.Operator);var A4i=!!this.Filter.DN(
this.Nh.En,this.Nh.Operator);A._GetAutoObject(A.Device.Helper).L0(this.SX,this.An5
);A._GetAutoObject(A.Device.Helper).L0(this.SY,this.An5);A._GetAutoObject(A.Device.
Helper).L0(this.N_,A2q);A._GetAutoObject(A.Device.Helper).L0(this.Nh,A4i);},MO:function(
G){var B;this.Y.Vm(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HC(
this.AV,true,null,null);},BAI:function(G){A.pe([this,this.Fb],this);A.pe([this,this.
MO],this);},BzM:function(G){this.ArT(!this.An5);if(this.An5===false){var Av=this.
Filter.DN(this.PW.En,this.PW.Operator);while(!!Av){this.Filter.N3(Av);Av=this.Filter.
DN(this.PW.En,this.PW.Operator);}A.abo([this,this.Fh,this.Fl],0);}},ArT:function(
E){if(this.An5===E)return;this.An5=E;A.abo([this,this.A9d,this.ArT],0);A.pe([this
,this.A4h],this);},AEC:function(E){if(this.Auu===E)return;this.Auu=E;A.abo([this
,this.A8j,this.AEC],0);},AEA:function(E){if(this.Aut===E)return;this.Aut=E;A.abo([
this,this.A8h,this.AEA],0);},BgS:function(G){var F;this.AEC((F=this.NA.Q,F[1].call(
F[0])));var Av=this.Filter.DN(4,2);if(!!Av){var AfF=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null);if(!!AfF){var AaE=A._GetAutoObject(A.Device.Helper).ZF(
this.Auu-1);AfF.A5=AaE;}else A.ab5("%s",Aft);}},BgR:function(G){var F;this.AEA((
F=this.Ot.Q,F[1].call(F[0])));var Av=this.Filter.DN(4,3);if(!!Av){var AfF=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Av)?Av:null);if(!!AfF){var AaE=A._GetAutoObject(
A.Device.Helper).ZF(this.Aut);AfF.A5=AaE;}else A.ab5("%s",Aft);}},A4a:function(G
){var A2q=!!this.Filter.DN(this.Ot.En,this.Ot.Operator);var A4i=!!this.Filter.DN(
this.NA.En,this.NA.Operator);A._GetAutoObject(A.Device.Helper).L0(this.RJ,this.Amh
);A._GetAutoObject(A.Device.Helper).L0(this.RK,this.Amh);A._GetAutoObject(A.Device.
Helper).L0(this.Ot,A2q);A._GetAutoObject(A.Device.Helper).L0(this.NA,A4i);},Ars:
function(E){if(this.Amh===E)return;this.Amh=E;A.abo([this,this.A8g,this.Ars],0);
A.pe([this,this.A4a],this);},Beh:function(G){var EA=(C.AjB.isPrototypeOf(G)?G:null
);if(!EA)return;var Av=this.Filter.DN(EA.En,EA.Operator);if(!!Av){this.Filter.N3(
Av);A.abo([this,this.Fh,this.Fl],0);}else{if(EA===this.RJ){Av=A._NewObject(A.Device.
UInt32FilterCriterion,0);Av.EF=EA.En;Av.Operator=EA.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Av)?Av:null).A5=A._GetAutoObject(A.Device.Helper).ZF(this.Aut);this.
Bb(this.Ot);}else if(EA===this.RK){Av=A._NewObject(A.Device.UInt32FilterCriterion
,0);Av.EF=EA.En;Av.Operator=EA.Operator;(A.Device.UInt32FilterCriterion.isPrototypeOf(
Av)?Av:null).A5=A._GetAutoObject(A.Device.Helper).ZF(this.Auu-1);this.Bb(this.NA
);}if(!!Av){this.Filter.CW(Av);A.abo([this,this.Fh,this.Fl],0);}}A.pe([this,this.
A4a],this);},BzL:function(G){this.Ars(!this.Amh);if(this.Amh===false){var Av=this.
Filter.DN(this.Ph.En,this.Ph.Operator);while(!!Av){this.Filter.N3(Av);Av=this.Filter.
DN(this.Ph.En,this.Ph.Operator);}A.abo([this,this.Fh,this.Fl],0);}},Fh:function(
){return this.Filter;},BkB:function(){return this.Au_;},BkA:function(){return this.
Au9;},Blb:function(){return this.Asu;},BkQ:function(){return this.Arb;},A9f:function(
){return this.AxK;},A9e:function(){return this.AxJ;},A9d:function(){return this.
An5;},A8j:function(){return this.Auu;},A8h:function(){return this.Aut;},A8g:function(
){return this.Amh;},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Gender._Init.
call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);
C.ABy._Init.call(this.Transponder={I:this},0);C.ABy._Init.call(this.Ei={I:this},
0);A.Core.Y._Init.call(this.Y={I:this},0);C.ABL._Init.call(this.PW={I:this},0);C.
AjB._Init.call(this.SX={I:this},0);C.Abe._Init.call(this.N_={I:this},0);C.AjB._Init.
call(this.SY={I:this},0);C.Abe._Init.call(this.Nh={I:this},0);C.ABL._Init.call(this.
Ph={I:this},0);C.AjB._Init.call(this.RJ={I:this},0);C.ACA._Init.call(this.Ot={I:
this},0);C.AjB._Init.call(this.RK={I:this},0);C.ACA._Init.call(this.NA={I:this},
0);C.AmO._Init.call(this.Lc={I:this},0);C.AmO._Init.call(this.Jj={I:this},0);C.AmO.
_Init.call(this.KV={I:this},0);C.AmO._Init.call(this.Mr={I:this},0);C.Qw._Init.call(
this.Yi={I:this},0);C.Qw._Init.call(this.SZ={I:this},0);C.Qw._Init.call(this.RL={
I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.IW;var B;this.N.
Z(true);this.N.B2(A.aaR(A.acf.A4R));this.Dn(C.APm);this.Gender.As(this.Au_);this.
AnimalType.As(this.Au9);this.Transponder.As(this.Asu);this.Ei.As(this.Arb);this.
Y.H(E8);this.Y.JN(1);this.PW.H(IN);this.PW.Aj(true);this.PW.T(A._GetAutoObject(A.
Device.Helper).AmM(0,1));this.PW.Nb(1);this.SX.H(P5);this.SX.Aj(true);this.SX.T(
A.aaR(A.acf.ADW));this.SX.Nb(1);this.SX.OK(2);this.N_.H(Z7);this.N_.Nb(1);this.N_.
OK(2);this.N_.AFF(A.aaR(A.acf.GG));this.SY.H(Ak7);this.SY.Aj(true);this.SY.T(A.aaR(
A.acf.AG1));this.SY.Nb(1);this.SY.OK(3);this.Nh.H(Aoh);this.Nh.Aj(true);this.Nh.
Nb(1);this.Nh.OK(3);this.Nh.AFF(A.aaR(A.acf.GG));this.Ph.H(AWC);this.Ph.Aj(true);
this.Ph.T(A.aaR(A.acf.RI));this.Ph.Nb(4);this.RJ.H(AWD);this.RJ.Aj(true);this.RJ.
T(A.aaR(A.acf.ADW));this.RJ.Nb(4);this.RJ.OK(3);this.Ot.H(AWE);this.Ot.Nb(4);this.
Ot.OK(3);this.Ot.A_a(2);this.RK.H(AWF);this.RK.Aj(true);this.RK.T(A.aaR(A.acf.AG1
));this.RK.Nb(4);this.RK.OK(2);this.NA.H(AWG);this.NA.Aj(true);this.NA.Nb(4);this.
NA.OK(2);this.NA.A_a(3);this.Lc.H(AsP);this.Lc.Aj(true);this.Lc.Nb(7);this.Lc.Ahh(
0);this.Lc.OK(0);this.Jj.H(W6);this.Jj.Aj(true);this.Jj.Nb(14);this.Jj.Ahh(0);this.
Jj.OK(0);this.KV.H(W6);this.KV.Aj(true);this.KV.Nb(22);this.KV.Ahh(0);this.KV.OK(
1);this.Mr.H(W6);this.Mr.Aj(true);this.Mr.Nb(26);this.Mr.Ahh(0);this.Mr.OK(1);this.
Yi.H(W6);this.Yi.Aj(true);this.Yi.Nb(11);this.Yi.Ahh(0);this.Yi.OK(0);this.SZ.H(
W6);this.SZ.Aj(true);this.SZ.Nb(12);this.SZ.Ahh(0);this.SZ.OK(0);this.RL.H(W6);this.
RL.Aj(true);this.RL.Nb(8);this.RL.Ahh(0);this.RL.OK(0);this.Ay.H(Ip);this.J(this.
Y,0);this.J(this.PW,0);this.J(this.SX,0);this.J(this.N_,0);this.J(this.SY,0);this.
J(this.Nh,0);this.J(this.Ph,0);this.J(this.RJ,0);this.J(this.Ot,0);this.J(this.RK
,0);this.J(this.NA,0);this.J(this.Lc,0);this.J(this.Jj,0);this.J(this.KV,0);this.
J(this.Mr,0);this.J(this.Yi,0);this.J(this.SZ,0);this.J(this.RL,0);this.J(this.Ay
,0);this.N.CA=[this,this.Es];this.N.Cg=[this,this.BzP];this.N.CZ(A.aaL(A.ach.EX)
);this.Y.Ej=[this,this.BAI];this.PW.AR=[this,this.BzM];this.PW.As([this,this.A9d
,this.ArT]);this.SX.AR=[this,this.Bei];this.N_.Gk([this,this.D8,this.GK]);this.N_.
As([this,this.A9e,this.AFN]);this.SY.AR=[this,this.Bei];this.Nh.Gk([this,this.D8
,this.GK]);this.Nh.As([this,this.A9f,this.AFO]);this.Ph.AR=[this,this.BzL];this.
Ph.As([this,this.A8g,this.Ars]);this.RJ.AR=[this,this.Beh];this.Ot.Gk([this,this.
D8,this.GK]);this.Ot.As([this,this.A8h,this.AEA]);this.RK.AR=[this,this.Beh];this.
NA.Gk([this,this.D8,this.GK]);this.NA.As([this,this.A8j,this.AEC]);this.Lc.AR=[this
,this.AAh];this.Lc.As([B=this.Gender,B.B$,B.Ca]);this.Lc.CJ(this.Gender);this.Jj.
AR=[this,this.AAh];this.Jj.As([B=this.AnimalType,B.B$,B.Ca]);this.Jj.CJ(this.AnimalType
);this.KV.AR=[this,this.AAh];this.KV.As([B=this.Transponder,B.B$,B.Ca]);this.KV.
CJ(this.Transponder);this.Mr.AR=[this,this.AAh];this.Mr.As([B=this.Ei,B.B$,B.Ca]
);this.Mr.CJ(this.Ei);this.Yi.AR=[this,this.A2H];this.SZ.AR=[this,this.A2H];this.
RL.AR=[this,this.A2H];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.
Gender._Done();this.AnimalType._Done();this.Transponder._Done();this.Ei._Done();
this.Y._Done();this.PW._Done();this.SX._Done();this.N_._Done();this.SY._Done();this.
Nh._Done();this.Ph._Done();this.RJ._Done();this.Ot._Done();this.RK._Done();this.
NA._Done();this.Lc._Done();this.Jj._Done();this.KV._Done();this.Mr._Done();this.
Yi._Done();this.SZ._Done();this.RL._Done();this.Ay._Done();C.AB._Done.call(this);
},_ReInit:function(){C.AB._ReInit.call(this);this.Gender._ReInit();this.AnimalType.
_ReInit();this.Transponder._ReInit();this.Ei._ReInit();this.Y._ReInit();this.PW.
_ReInit();this.SX._ReInit();this.N_._ReInit();this.SY._ReInit();this.Nh._ReInit(
);this.Ph._ReInit();this.RJ._ReInit();this.Ot._ReInit();this.RK._ReInit();this.NA.
_ReInit();this.Lc._ReInit();this.Jj._ReInit();this.KV._ReInit();this.Mr._ReInit(
);this.Yi._ReInit();this.SZ._ReInit();this.RL._ReInit();this.Ay._ReInit();this.N.
B2(A.aaR(A.acf.A4R));this.SX.T(A.aaR(A.acf.ADW));this.N_.AFF(A.aaR(A.acf.GG));this.
SY.T(A.aaR(A.acf.AG1));this.Nh.AFF(A.aaR(A.acf.GG));this.Ph.T(A.aaR(A.acf.RI));this.
RJ.T(A.aaR(A.acf.ADW));this.RK.T(A.aaR(A.acf.AG1));},_Mark:function(D){var B;C.AB.
_Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ph)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ot)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.RK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListFilterScreen"};C.A$a={ZG:null,BnO:function(Bxi){var EB=A.
_NewObject(C.A_$,0);EB.AB=Bxi;EB.Ms=this.ZG;this.ZG=EB;},A_Q:function(){var Vb=null;
if(!!this.ZG){Vb=this.ZG.AB;this.ZG=this.ZG.Ms;}return Vb;},Contains:function(Alc
){var EB=this.ZG;while(!!EB){if(EB.AB.AnZ===Alc)return true;EB=EB.Ms;}return false;
},BnE:function(){if(!!this.ZG)return this.ZG.AB;else return null;},_Init:function(
aArg){this.__proto__=C.A$a;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZG)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenStack"};C.A_$={AB:null,Ms:null,_Init:function(
aArg){this.__proto__=C.A_$;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.AB)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ScreenNode"
};C.AL2={ARC:function(){A._GetAutoObject(A.Device.Helper).Axh(this.H3,0);A._GetAutoObject(
C.A1).Fs();},A7K:function(){this.H3.Co(A._GetAutoObject(A.Device.Device).Bv);A._GetAutoObject(
C.A1).Fs();},A6K:function(){return A.aaL(A.ach.AmU);},_Init:function(aArg){C.AF6.
_Init.call(this,aArg);this.__proto__=C.AL2;this.Dn(C.IE);},_className:"Application::AnimalActionRateScreen"
};C.ALY={Wn:function(G){this.Agi();this.IU(A.aaR(A.acf.AU2),[this,this.ATp],5);this.
IU(A.aaR(A.acf.A5u),[this,this.Bly],4);this.IU(A.aaR(A.acf.AF5),[this,this.ATa],
3);this.IU(A.aaR(A.acf.AnT),[this,this.AwI],2);this.IU(A.aaR(A.acf.XI),[this,this.
AEF],1);this.IU(A.aaR(A.acf.Aup),[this,this.AEz],0);A._GetAutoObject(C.BN).FA();
A._GetAutoObject(C.BN).Nz(A.aaR(A.acf.Ame)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dt(6);},Dz:function(G){},Abh:function(){return C.AMR;},Abi:function(
){return C.AC7;},Q5:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
AyT=A._NewObject(A.Device.BoolFilterCriterion,0);AyT.Initialize(8,0,true,true);Be.
CW(AyT);A._GetAutoObject(A.Device.Device).Ao.Bl(Be);},HM:function(G){C.GS.HM.call(
this,G);if(this.Aj9()===false){this.N.Cq(A.aaL(A.ach.AGc));this.N.Ck=[this,this.
A51];this.N.FH(A.jV);}this.N.OL(false);this.N.OM(false);},Af6:function(){A._GetAutoObject(
C.A1).BU(41);},Af5:function(){A._GetAutoObject(C.A1).BU(43);},_Init:function(aArg
){C.GS._Init.call(this,aArg);this.__proto__=C.ALY;var B;this.Dn(C.AON);this.Dx(A.
aaR(A.acf.A7R));this.AwD([B=A._GetAutoObject(A.Device.Device),B.A8k,B.BaS]);},_ReInit:
function(){C.GS._ReInit.call(this);this.Dx(A.aaR(A.acf.A7R));},_className:"Application::AlarmListScreen"
};C.ANg={Dz:function(G){},AlQ:function(G){if(!!this.Bh)A.ab5("%i",this.Bh.AD.Gl);
var Aa=(C.ABS.isPrototypeOf(G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper
).HJ(Aa.Hk);A._GetAutoObject(C.A1).BU(13);}},Q5:function(G){var Be=A._GetAutoObject(
A.Device.Helper).Mo();var Azb=A._NewObject(A.Device.BoolFilterCriterion,0);Azb.Initialize(
9,0,true,true);Be.CW(Azb);A._GetAutoObject(A.Device.Device).Ao.Bl(Be);},HM:function(
G){C.GS.HM.call(this,G);this.N.OL(false);this.N.OM(false);},_Init:function(aArg){
C.GS._Init.call(this,aArg);this.__proto__=C.ANg;this.Dn(C.AOP);this.Dx(A.aaR(A.acf.
A7S));},_ReInit:function(){C.GS._ReInit.call(this);this.Dx(A.aaR(A.acf.A7S));},_className:
"Application::ControlListScreen"};C.Aed={Filter:null,En:0,I4:10,TableId:0,Operator:
1,CS:function(){var F;this.Tm((F=this.Filter,F[1].call(F[0])).DN(this.En,this.Operator
));},Bk:function(aSize){C.Cm.Bk.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[
0]-(2*this.I4),aSize[1]]));},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!
this.Filter)A.z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.
L$],E,0);A.pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=
this.Filter,F[1].call(F[0])))this.Tm((F=this.Filter,F[1].call(F[0])).DN(this.En,
this.Operator));else this.Tm(null);},Ahh:function(E){if(this.TableId===E)return;
this.TableId=E;A.pe([this,this.L$],this);},Nb:function(E){if(this.En===E)return;
this.En=E;A.pe([this,this.L$],this);},Tm:function(AH){if(!!AH)this.T(A._GetAutoObject(
A.Device.Helper).A6E(this.TableId,AH));else this.T(A._GetAutoObject(A.Device.Helper
).AmM(this.TableId,this.En));},OK:function(E){if(this.Operator===E)return;this.Operator=
E;A.pe([this,this.L$],this);},_Init:function(aArg){C.Cm._Init.call(this,aArg);this.
__proto__=C.Aed;this.V.H(AHy);this.V.A8(0x11);},_ReInit:function(){C.Cm._ReInit.
call(this);this.CS();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.
Filter)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"
};C.Qw={H2:null,Bk:function(aSize){var B;C.Aed.Bk.call(this,aSize);this.H2.H([(aSize[
0]-((B=this.H2.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.I4,0,this.
H2.M[0]-this.I4,aSize[1]]);},Tm:function(AH){this.T(A._GetAutoObject(A.Device.Helper
).AmM(this.TableId,this.En));var Av=(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Av&&Av.A5)this.H2.Cu(1);else this.H2.Cu(0);},_Init:function(aArg
){C.Aed._Init.call(this,aArg);A.acg.Am._Init.call(this.H2={I:this},0);this.__proto__=
C.Qw;this.H2.H(AHz);this.H2.Cu(0);this.J(this.H2,0);this.H2.Aw(A.aaL(A.ach.AqA));
},_Done:function(){this.__proto__=C.Aed;this.H2._Done();C.Aed._Done.call(this);}
,_ReInit:function(){C.Aed._ReInit.call(this);this.H2._ReInit();},_Mark:function(
D){var B;C.Aed._Mark.call(this,D);if((B=this.H2)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APm={Am:null,Text:null,Dd:function(
E){C.BS.Dd.call(this,E);this.Text.L(E);this.Am.L(E);},_Init:function(aArg){C.BS.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APm;this.Am.H(AWH);this.Text.H(AWI);this.
Text.A8(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Am,0);this.J(this.Text
,0);this.Am.Aw(A.aaL(A.ach.Aeo));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BS;this.Am._Done();this.Text._Done();C.BS._Done.call(this);},_ReInit:
function(){C.BS._ReInit.call(this);this.Am._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS.
_Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjL={
AW:null,T0:null,JI:null,CT:null,A$:null,Init:function(aArg){var B;A.zX([this,this.
D3],[B=A._GetAutoObject(A.Device.Device).Ao,B.Fh,B.Fl],0);A.pe([this,this.D3],this
);},Bk:function(aSize){var B;C.BS.Bk.call(this,aSize);this.T0.H(A.abJ(this.T0.M,
A.abe(this.AW.M.slice(0,2),AWJ)));this.T0.H(A.abK(this.T0.M,A.abf([(B=this.AW.M)[
2]-B[0],B[3]-B[1]],AWK)));},Ai:function(Ae){var B;C.BS.Ai.call(this,Ae);var Iw=((
Ae&0x40)===0x40)&&(this.AV===this.AW);if(Iw)this.T0.L(A.jb.AV);else this.T0.L(A.
jb.AmW);},Dd:function(E){C.BS.Dd.call(this,E);this.JI.L(E);this.CT.AeQ(E);},Wo:function(
E){C.BS.Wo.call(this,E);this.CT.CY(E);},Akf:function(){return this.AW.Akf();},Av6:
function(){return this.AW.Av6();},D3:function(G){this.CT.T(A._GetAutoObject(A.Device.
Device).Ao.Cd().toFixed());},_Init:function(aArg){C.BS._Init.call(this,aArg);C.AW.
_Init.call(this.AW={I:this},0);A.acg.Cf._Init.call(this.T0={I:this},0);A.acg.Am.
_Init.call(this.JI={I:this},0);C.CT._Init.call(this.CT={I:this},0);A.acg.DQ._Init.
call(this.A$={I:this},0);this.__proto__=C.AjL;this.AW.H(AWL);this.T0.H(AWM);this.
T0.Ne(2);this.JI.H(AWN);this.JI.L(A.jb.CU);this.CT.A3(0x14);this.CT.H(AWO);this.
CT.AeQ(A.jb.Bm);this.CT.CY(A.jb.ST);this.CT.Hs(2);this.A$.DE(AWP);this.A$.DR(AWQ
);this.A$.L(A.jb.Bc);this.J(this.AW,0);this.J(this.T0,0);this.J(this.JI,0);this.
J(this.CT,0);this.J(this.A$,0);this.Bb(this.AW);this.JI.Aw(A.aaL(A.ach.JI));this.
CT.S(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.BS;this.
AW._Done();this.T0._Done();this.JI._Done();this.CT._Done();this.A$._Done();C.BS.
_Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.AW._ReInit();
this.T0._ReInit();this.JI._ReInit();this.CT._ReInit();this.A$._ReInit();this.CT.
S(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.AW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearch"
};C.DB={Dh:null,Im:null,Il:null,Af2:function(G){if(this.E2<0)this.LY(1);else if(
this.E2===9)this.LY(0);else this.LY(this.E2+1);A.pe(this.Dh,this);},Ai:function(
Ae){var B;C.E2.Ai.call(this,Ae);var G9=((Ae&0x10)===0x10);var Iw=((Ae&0x40)===0x40
);if(Iw){this.Background.L(A.jb.AV);this.Text.L(A.jb.Bm);this.Do(256);}else if(G9
){this.Background.L(this.MZ);this.Text.L(A.jb.Text);this.Do(256);}else{this.Background.
L(this.MZ);this.Text.L(A.jb.Text);this.Do(128);}},Af1:function(G){if(this.E2<=0)
this.LY(9);else this.LY(this.E2-1);A.pe(this.Dh,this);},_Init:function(aArg){C.E2.
_Init.call(this,aArg);A.Core.BL._Init.call(this.Im={I:this},0);A.Core.BL._Init.call(
this.Il={I:this},0);this.__proto__=C.DB;this.Im.Filter=4;this.Il.Filter=5;this.Im.
BM=[this,this.Af2];this.Im.DZ=[this,this.Af2];this.Il.BM=[this,this.Af1];this.Il.
DZ=[this,this.Af1];},_Done:function(){this.__proto__=C.E2;this.Im._Done();this.Il.
_Done();C.E2._Done.call(this);},_ReInit:function(){C.E2._ReInit.call(this);this.
Im._ReInit();this.Il._ReInit();},_Mark:function(D){var B;C.E2._Mark.call(this,D);
if((B=this.Dh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Im)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Il)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputDigit"};C.AW={Dh:null,Cs:null,CV:null,Dv:null,Em:null,FT:null
,EP:null,Ff:null,E4:null,M4:0,AQU:false,Aqf:false,Ai:function(Ae){var B;A.Core.O.
Ai.call(this,Ae);if(((Ae&0x40)===0x40)&&this.Aqf)this.EP.AeN(true);else this.EP.
AeN(false);},Awz:function(E){var B;if(E===this.Akf())return;var AfW=E;var DV=this.
EP;while(!!DV){if(AfW>0){DV.LY(AfW%10);AfW=(AfW/10)|0;}else DV.LY(-1);DV=(C.DB.isPrototypeOf(
B=this.QB(DV,2,0x11))?B:null);}},Akf:function(){return A.wz(this.Av6(),-1,10);},
Om:function(G){if(this.FT.E2>=0)this.Bf1(7);},MU:function(G){if(((this.Akf()>0)||
this.AQU)&&(this.Cs.E2<0))this.Bf1(2);else if(this.Akf()<=0)this.E4.NE=true;},Adj:
function(G){A.pe(this.Dh,this);},Bf1:function(Gt){var B;var ALe=0;var DV=null;switch(
Gt){case 2:{DV=this.Cs;ALe=7;}break;case 7:{DV=this.EP;ALe=2;}break;default:throw new
Error(AWR);}while(!!DV){var A2A=(C.DB.isPrototypeOf(B=this.QB(DV,ALe,0x11))?B:null
);if(!!A2A)DV.LY(A2A.E2);else if(ALe===7)DV.LY(0);else DV.LY(-1);DV=A2A;}A.pe([this
,this.Adj],this);},AeN:function(E){if(this.Aqf===E)return;this.Aqf=E;this.An();}
,Bmz:function(E){if(this.AQU===E)return;this.AQU=E;},ASQ:function(E){var B;if(E===
this.Av6())return;var AfW=E;var DV=this.EP;while(!!DV){if(AfW.length>0){DV.LY(A.
wz(A.ab2(AfW,1),-1,10));AfW=A.abV(AfW,AfW.length-1);}else DV.LY(-1);DV=(C.DB.isPrototypeOf(
B=this.QB(DV,2,0x11))?B:null);}},Av6:function(){var B;var Ia=A.jV;var P=0;var B6=
this.Cs;for(;P<6;P=P+1){if(!!B6&&(B6.E2>=0))Ia=Ia+B6.E2.toFixed();B6=(C.DB.isPrototypeOf(
B=this.TK(B6,0x11))?B:null);}A.ab5("%s",Ia);return Ia;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);C.DB._Init.call(this.Cs={I:this},0);C.DB._Init.call(this.
CV={I:this},0);C.DB._Init.call(this.Dv={I:this},0);C.DB._Init.call(this.Em={I:this
},0);C.DB._Init.call(this.FT={I:this},0);C.DB._Init.call(this.EP={I:this},0);A.Core.
BL._Init.call(this.Ff={I:this},0);A.Core.BL._Init.call(this.E4={I:this},0);this.
__proto__=C.AW;this.H(Ax7);this.Cs.A3(0x3);this.Cs.H(AHA);this.CV.A3(0x3);this.CV.
H(AHB);this.Dv.A3(0x3);this.Dv.H(AHC);this.Em.A3(0x3);this.Em.H(AHD);this.FT.A3(
0x3);this.FT.H(AHE);this.EP.A3(0x3);this.EP.H(AHF);this.EP.LY(0);this.Ff.Filter=
6;this.E4.Filter=7;this.M4=A.jb.CI;this.J(this.Cs,0);this.J(this.CV,0);this.J(this.
Dv,0);this.J(this.Em,0);this.J(this.FT,0);this.J(this.EP,0);this.Bb(this.EP);this.
Cs.Dh=[this,this.Adj];this.CV.Dh=[this,this.Adj];this.Dv.Dh=[this,this.Adj];this.
Em.Dh=[this,this.Adj];this.FT.Dh=[this,this.Adj];this.EP.Dh=[this,this.Adj];this.
Ff.BM=[this,this.Om];this.E4.BM=[this,this.MU];},_Done:function(){this.__proto__=
A.Core.O;this.Cs._Done();this.CV._Done();this.Dv._Done();this.Em._Done();this.FT.
_Done();this.EP._Done();this.Ff._Done();this.E4._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Cs._ReInit();this.CV._ReInit(
);this.Dv._ReInit();this.Em._ReInit();this.FT._ReInit();this.EP._ReInit();this.Ff.
_ReInit();this.E4._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Dh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cs)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Em)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ff)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E4)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputID"};C.Bht="4b39a10d";C.BCi={Undefined:
0,BDk:1,BCz:2};C.Akz={Tk:null,AiM:null,K$:null,ANk:null,An2:null,push:function(MI
){if(!this.Tk){MI.Ahk=null;MI.Ms=null;this.Tk=MI;this.AiM=this.Tk;}else{MI.Ahk=this.
AiM;MI.Ms=null;this.AiM.Ms=MI;this.AiM=MI;}},BBh:function(MI){var Qb=this.Tk;while(
!!Qb){if(Qb.JG.Id===MI.Id)return Qb;Qb=Qb.Ms;}return Qb;},BA1:function(MI){if(MI===
this.Tk)this.pop();else if(MI===this.AiM){MI=MI.Ahk;if(!!MI)MI.Ms=null;this.AiM=
MI;}else{MI.Ahk.Ms=MI.Ms;MI.Ms.Ahk=MI.Ahk;}},Aha:function(E){var F;if(this.K$===
E)return;this.K$=E;if(!!this.K$)this.K$.Agx(2);(F=this.ANk,F[2].call(F[0],this.K$
));},U_:function(G){var Qb=(C.ATD.isPrototypeOf(G)?G:null);if(!!Qb){if(!Qb.JG.PopupState
){if(!this.K$)this.Aha(this.top());}else if(Qb.JG.PopupState===4){this.pop();this.
Aha(this.top());}else if(Qb.JG.PopupState===5){this.pop();this.Aha(this.top());}
else if(Qb.JG.PopupState===7){this.pop();this.Aha(this.top());}else if(Qb.JG.PopupState===
8){this.pop();this.Aha(this.top());}else if(Qb.JG.PopupState===6){if(Qb===this.K$
){this.pop();this.Aha(this.top());}else this.BA1(Qb);}else if(Qb.JG.PopupState===
3){this.pop();this.Aha(this.top());}}},pop:function(){var AKB=null;if(!!this.Tk){
AKB=this.Tk;if(this.Tk===this.AiM){this.Tk=null;this.AiM=null;}else{this.Tk=this.
Tk.Ms;if(!this.Tk)throw new Error(AWS);this.Tk.Ahk=null;}AKB.Ahk=null;AKB.Ms=null;
}return AKB;},top:function(){return this.Tk;},BAJ:function(G){var B;var AtN=(A.Device.
PopupContext.isPrototypeOf(B=this.An2.JG)?B:null);if(!!AtN){var A3Q=this.BBh(AtN
);if(!!A3Q){A3Q.A9K(AtN);if(!AtN.Show)A3Q.Agx(6);}else if(AtN.Show){var AKf=A._NewObject(
C.ATD,0);AKf.A9K(AtN);AKf.ASz=[this,this.U_];this.push(AKf);AKf.Agx(0);}}},_Init:
function(aArg){A.Core.A$w._Init.call(this.An2={I:this},0);this.__proto__=C.Akz;this.
An2.AR2=[this,this.BAJ];this.An2.BlU(A._GetAutoObject(A.Device.Device).AnF);A.h7++;
},_Done:function(){this.__proto__=null;this.An2._Done();A.h7--;},_ReInit:function(
){this.An2._ReInit();},_Mark:function(D){var B;if((B=this.Tk)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K$)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANk)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ATD={S1:null,Ms:null,Ahk:null,JG:null,ASz:null,PopupIdToString:null,Aib:function(
Bwo,BwY,Bxh,Bw9,Bw$,Bw8,BwH){var Va=A._NewObject(C.ATC,0);Va.Bm2(this.JG.Id);Va.
A_s(Bwo);Va.ASA=Bw8;Va.A_u(this.JG.AkS);Va.A_f(this.JG.Aky);Va.Bz=A._NewObject(C.
N,0);Va.KP().Cg=Bw$;Va.KP().Ck=null;Va.KP().CA=Bw9;Va.KP().B2(Bxh);Va.KP().Cq(null
);Va.KP().Ht(BwY);Va.KP().AE7(BwH);return Va;},Akg:function(){if(!this.S1){var AiK=
this.PopupIdToString.BO(this.JG.Id);switch(this.JG.Id){case 46:this.S1=this.Aib(
AiK,A.jV,A.aaR(A.acf.Ok),null,[this,this.AKj],[this,this.AiE],1);break;case 91:case
92:this.S1=this.Aib(AiK,A.jV,A.jV,null,null,[this,this.AiE],0);break;case 39:this.
S1=this.Aib(AiK,A.aaR(A.acf.Amr),A.aaR(A.acf.Ok),[this,this.A2O],[this,this.A2P]
,[this,this.AiE],3);break;case 13:this.S1=this.Aib(AiK,A.aaR(A.acf.Amr),A.aaR(A.
acf.BnZ),[this,this.A2N],[this,this.AKj],[this,this.AiE],3);break;case 25:this.S1=
this.Aib(AiK,A.aaR(A.acf.Amr),A.aaR(A.acf.Ok),[this,this.A2N],[this,this.AKj],[this
,this.AiE],3);break;case 16:case 24:case 49:case 74:this.S1=this.Aib(AiK,A.aaR(A.
acf.Amr),A.jV,[this,this.A2N],null,[this,this.AiE],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.S1=this.Aib(AiK,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A2O],[this,this.A2P],[this,this.AiE],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.S1=this.Aib(AiK,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKj],[this,this.AiE],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.S1=
this.Aib(AiK,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A2O],[this,this.A2P],[this
,this.AiE],3);break;default:A.ab5("%s",(AWT+this.JG.Id.toFixed())+AWU);}}switch(
this.JG.Id){case 16:case 49:this.S1.A_I(true);break;case 91:case 92:this.S1.A_I(
false);break;default:;}return this.S1;},AKj:function(G){this.Agx(4);},A2N:function(
G){this.Agx(5);},A2P:function(G){this.Agx(7);},A2O:function(G){this.Agx(8);},AiE:
function(G){this.Agx(3);},A9K:function(E){if(this.JG===E)return;this.JG=E;if(!!this.
S1){this.Akg().A_u(this.JG.AkS);this.Akg().A_f(this.JG.Aky);}},Agx:function(Bxc){
var B;this.JG.Bm3(Bxc);(B=this.ASz)?B[1].call(B[0],this):null;},BAh:function(G){
this.Agx(9);},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ATD;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.S1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahk)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ASz)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.FZ={BooleanToYesNo:null,Dr:function(
){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},Gd:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BO(aIndex);},DO:function(A7){return A7;},Hp:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.FZ;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afb={Um:null,J8:function(G){var F;var BR=this.AM;this.BC(this.AM+1);if(this.
AM!==BR){if(!!this.Um&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Um,F[
2].call(F[0],false));break;case 1:(F=this.Um,F[2].call(F[0],true));break;default:;
}A.abo(this.Um,0);}},J3:function(G){var F;var BR=this.AM;this.BC(this.AM-1);if(this.
AM!==BR){if(!!this.Um&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Um,F[
2].call(F[0],false));break;case 1:(F=this.Um,F[2].call(F[0],true));break;default:;
}A.abo(this.Um,0);}},Aks:function(E){if(A.aaZ(this.Um,E))return;if(!!this.Q)A.z$([
this,this.A3r],this.Um,0);this.Um=E;if(!!E)A.zX([this,this.A3r],E,0);if(!!E)A.pe([
this,this.A3r],this);},A3r:function(G){var F;if(!!this.Um){if((F=this.Um,F[1].call(
F[0])))this.BC(1);else this.BC(0);}},_Init:function(aArg){C.BZ._Init.call(this,aArg
);this.__proto__=C.Afb;this.JU(this.V,-1);},_Mark:function(D){var B;C.BZ._Mark.call(
this,D);if((B=this.Um)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.ATU={I9:null,OR:null,IM:null,Ge:null,AL:null,Aa8:null,AgC:null,TF:null,R5:null
,Acu:null,WO:null,Hb:null,ABg:true,Init:function(aArg){var B;A.zX([this,this.AlT
],[B=A._GetAutoObject(A.Device.Device),B.ASq,B.AZ4],0);A.pe([this,this.AlT],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABg)this.N.C5(A.aaL(A.ach.
AQA));else this.N.C5(A.aaL(A.ach.AQB));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OR.L(A.jb.Bm);this.R5.Z(false);this.TF.Z(false);this.IM.Z(true);this.Ge.
Ar(false);(F=this.Ge.Q,F[2].call(F[0],this.Ge.B3));this.Background.L(A.jb.Gb);}else
if(this.Aa8.By){this.OR.L(A.jb.Text);this.R5.Z(true);this.TF.Z(true);this.IM.Z(false
);this.Ge.Ar(false);(F=this.Ge.Q,F[2].call(F[0],this.Ge.B3));this.Background.L(A.
jb.EW);}else{this.OR.L(A.jb.Text);this.R5.Z(false);this.TF.Z(false);this.IM.Z(true
);this.Ge.Ar(true);this.Background.L(A.jb.CI);}if(this.AgC.By)this.WO.Z(true);else
this.WO.Z(false);},CB:function(G){A._GetAutoObject(A.Device.Device).Ahx();},EY:function(
G){A._GetAutoObject(A.Device.Device).AnR();A._GetAutoObject(A.Device.Device).Ae0(
false);A._GetAutoObject(A.Device.Device).Uk(false);},AlT:function(G){var B;this.
An();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BzY],this);break;case 3:{A.pe([this,this.BeT],this);A.pe([B=this.Aa8,B.Axu],this
);A.pe(this.Aa8.Mx,this);}break;case 4:A.ab5("%s",AWV);break;default:;}},Es:function(
G){A._GetAutoObject(C.A1).Fs();},BAK:function(G){this.Bns(!this.ABg);},Bns:function(
E){if(this.ABg===E)return;this.ABg=E;if(!E)A._GetAutoObject(A.Device.Device).Ae0(
false);this.An();},BzY:function(G){var B;this.BeT(this);if(this.ABg)A._GetAutoObject(
A.Device.Device).Ae0(true);A._GetAutoObject(A.Device.Device).Ws(65280);A._GetAutoObject(
A.Device.Device).Uk(true);A.pe([B=this.Aa8,B.StartTimer],this);A.pe([B=this.AgC,
B.StartTimer],this);this.An();},BzZ:function(G){A._GetAutoObject(A.Device.Device
).Ae0(false);A._GetAutoObject(A.Device.Device).Uk(false);this.An();},Bz1:function(
G){this.An();},BeT:function(G){A._GetAutoObject(A.Device.Device).Ahx();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.I9._Init.call(this.I9={I:this},0);C.CG._Init.
call(this.OR={I:this},0);A.acg.Am._Init.call(this.IM={I:this},0);A.acl.Ge._Init.
call(this.Ge={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Aa8={I:this},0);A.Core.Timer._Init.call(this.AgC={I:this},0);A.acg.Am.
_Init.call(this.TF={I:this},0);A.acg.Am._Init.call(this.R5={I:this},0);A.acg.Text.
_Init.call(this.Acu={I:this},0);C.WO._Init.call(this.WO={I:this},0);C.CG._Init.call(
this.Hb={I:this},0);this.__proto__=C.ATU;var B;this.Background.L(A.jb.CI);this.N.
Z(true);this.I9.H(AWW);this.I9.Akv(0);this.OR.H(AWX);this.OR.R(A.aaR(A.acf.A$B));
this.OR.L(A.jb.Text);this.IM.H(AWY);this.IM.L(A.jb.AV);this.IM.Zh(true);this.Ge.
Fj(1750);this.Ge.Uh(750);this.Ge.Akq(0);this.Ge.Ar(true);this.Ge.B3=3;this.AL.H(
Ax8);this.Aa8.PO(-1);this.Aa8.Wp(1000);this.AgC.PO(-1);this.AgC.Wp(5000);this.TF.
H(AHG);this.R5.H(AHG);this.R5.L(A.jb.EW);this.Acu.H(Ax8);this.Acu.R(A.aaR(A.acf.
A$b));this.Acu.L(A.jb.Text);this.WO.H(Ax8);this.Hb.H(AWZ);this.Hb.Ar(false);this.
Hb.R(A.aaR(A.acf.RangeTest));this.Hb.L(A.jb.Text);this.J(this.I9,0);this.J(this.
OR,0);this.J(this.IM,0);this.J(this.AL,0);this.J(this.TF,0);this.J(this.R5,0);this.
J(this.Acu,0);this.J(this.WO,0);this.J(this.Hb,0);this.N.CA=[this,this.Es];this.
N.Cg=[this,this.BAK];this.N.CZ(A.aaL(A.ach.EX));this.OR.S(A.aaL(A.fl.Af));this.OR.
A2(A.aaL(A.fl.Ak));this.OR.Ct(A.aaL(A.fl.Bi));this.IM.Aw(A.aaL(A.ach.ADx));this.
Ge.Q=[B=this.IM,B.ASd,B.Cu];this.Aa8.Mx=[this,this.BzZ];this.AgC.Mx=[this,this.Bz1
];this.TF.Aw(A.aaL(A.ach.TF));this.R5.Aw(A.aaL(A.ach.R5));this.Acu.S(A.aaL(A.fl.
Af));this.WO.As([B=A._GetAutoObject(A.Device.Device),B.ASr,B.AZ5]);this.Hb.S(A.aaL(
A.fl.Kh));this.Hb.A2(A.aaL(A.fl.Ih));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.I9._Done();this.OR._Done();this.IM._Done();this.Ge._Done();this.AL._Done(
);this.Aa8._Done();this.AgC._Done();this.TF._Done();this.R5._Done();this.Acu._Done(
);this.WO._Done();this.Hb._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.I9._ReInit();this.OR._ReInit();this.IM._ReInit();this.Ge.
_ReInit();this.AL._ReInit();this.Aa8._ReInit();this.AgC._ReInit();this.TF._ReInit(
);this.R5._ReInit();this.Acu._ReInit();this.WO._ReInit();this.Hb._ReInit();this.
OR.R(A.aaR(A.acf.A$B));this.Acu.R(A.aaR(A.acf.A$b));this.Hb.R(A.aaR(A.acf.RangeTest
));this.OR.S(A.aaL(A.fl.Af));this.OR.A2(A.aaL(A.fl.Ak));this.OR.Ct(A.aaL(A.fl.Bi
));this.Acu.S(A.aaL(A.fl.Af));this.Hb.S(A.aaL(A.fl.Kh));this.Hb.A2(A.aaL(A.fl.Ih
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.I9)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TF)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acu)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hb).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbJ={
ScreenType:0,NY:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},NZ:
function(G){A._GetAutoObject(C.A1).BU(this.ScreenType);},_Init:function(aArg){C.
Cm._Init.call(this,aArg);this.__proto__=C.AbJ;},_className:"Application::MenuItemScreen"
};C.T8={AdW:null,Mj:null,Ams:false,Init:function(aArg){},Ai:function(Ae){C.Cm.Ai.
call(this,Ae);if(this.Ams){this.Mj.Cu(1);this.Mj.L(A.jb.H4);}else{this.Mj.Cu(0);
if(this.KC)this.Mj.L(A.jb.Bm);else if(this.Hd)this.Mj.L(A.jb.Text);else this.Mj.
L(A.jb.Bm);}},IS:function(G){var F,CP;if(!!this.AdW){(CP=this.AdW,CP[2].call(CP[
0],!(F=this.AdW,F[1].call(F[0]))));this.AEN((F=this.AdW,F[1].call(F[0])));A.pe([
this,this.DH],this);}},A2U:function(G){this.KC=true;this.DH(this);},AEN:function(
E){if(this.Ams===E)return;this.Ams=E;this.DH(this);this.An();},A3k:function(G){var
F;this.AEN((F=this.AdW,F[1].call(F[0])));},A0m:function(s){this.A3k(s);},DH:function(
G){var F;if(!this.N||!this.KC)return;if(this.Ams){(F=this.N,F[1].call(F[0])).B2(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HO.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).B2(A.aaR(A.acf.A77));(F=this.N,F[1].call(F[0])).HO.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).An();},ASF:function(E){if(A.aaZ(this.AdW,E))
return;if(!!this.AdW)A.z$([this,this.A0m],this.AdW,0);this.AdW=E;if(!!E)A.zX([this
,this.A0m],E,0);if(!!E)A.pe([this,this.A0m],this);},_Init:function(aArg){C.Cm._Init.
call(this,aArg);A.acg.Am._Init.call(this.Mj={I:this},0);this.__proto__=C.T8;this.
V.L(A.jb.H4);this.Mj.H(AHH);this.Mj.Cu(0);this.J(this.Mj,0);this.Mj.Aw(A.aaL(A.ach.
AqA));this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.Mj._Done();C.Cm.
_Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.Mj._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.AdW)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANs={H1:null,IH:null,_Init:function(aArg){C.Cv.
_Init.call(this,aArg);C.SI._Init.call(this.H1={I:this},0);C.AGv._Init.call(this.
IH={I:this},0);this.__proto__=C.ANs;var B;this.JP(A.aaR(A.acf.ACh));this.H1.H(AhQ
);this.H1.Aj(true);this.H1.T(A.aaR(A.acf.Date));this.H1.Bj(true);this.IH.H(W7);this.
IH.Aj(true);this.IH.T(A.aaR(A.acf.Bu));this.J(this.H1,-1);this.J(this.IH,-1);this.
H1.AeK([B=this.H1,B.FO]);this.H1.Gk([this,this.D8,this.GK]);this.H1.Akp(A.aaL(A.
ach.Edit));this.H1.AbZ([B=A._GetAutoObject(A.Device.Helper),B.UT,B.UU]);this.IH.
AeK([B=this.IH,B.FO]);this.IH.Gk([this,this.D8,this.GK]);this.IH.Akp(A.aaL(A.ach.
Edit));this.IH.AbZ([B=A._GetAutoObject(A.Device.Helper),B.UT,B.UU]);},_Done:function(
){this.__proto__=C.Cv;this.H1._Done();this.IH._Done();C.Cv._Done.call(this);},_ReInit:
function(){C.Cv._ReInit.call(this);this.H1._ReInit();this.IH._ReInit();this.JP(A.
aaR(A.acf.ACh));this.H1.T(A.aaR(A.acf.Date));this.IH.T(A.aaR(A.acf.Bu));},_Mark:
function(D){var B;C.Cv._Mark.call(this,D);if((B=this.H1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AUS={Q$:null,FB:null,BY:null,OF:null,YD:null,AaR:null,_Init:function(aArg){C.
Cv._Init.call(this,aArg);C.Q$._Init.call(this.Q$={I:this},0);C.AMm._Init.call(this.
FB={I:this},0);C.AUr._Init.call(this.BY={I:this},0);C.AUt._Init.call(this.OF={I:
this},0);C.Afb._Init.call(this.YD={I:this},0);C.AaR._Init.call(this.AaR={I:this}
,0);this.__proto__=C.AUS;var B;this.JP(A.aaR(A.acf.Temperature));this.FB.As(A._GetAutoObject(
A.Device.Device).AnimalType);this.BY.H(AW0);this.BY.Aj(true);this.BY.T(A.aaR(A.acf.
Aq$));this.BY.Bj(false);this.OF.H(Z8);this.OF.Aj(true);this.OF.T(A.aaR(A.acf.Undertemperature
));this.OF.Bj(true);this.OF.BC(3800);this.OF.Gq(3000);this.OF.E5(5000);this.OF.A_B(
A.aaR(A.acf.AGI));this.YD.H(AW1);this.YD.Aj(true);this.YD.Z(true);this.YD.T(A.aaR(
A.acf.A4P));this.J(this.BY,0);this.J(this.OF,0);this.J(this.YD,0);this.BY.AeK([B=
this.BY,B.FO]);this.BY.Gk([this,this.D8,this.GK]);this.BY.Akp(A.aaL(A.ach.Edit));
this.BY.LW([B=this.BY,B.AyI]);this.BY.LZ(A.aaL(A.ach.AnI));this.BY.As([B=this.FB
,B.B$,B.Ca]);this.BY.CJ(this.FB);this.BY.A_d([B=this.FB,B.ASy,B.AZ$]);this.BY.A_c([
B=this.FB,B.ASx,B.AZ_]);this.OF.LW([B=this.BY,B.AyI]);this.OF.LZ(A.aaL(A.ach.AnI
));this.OF.As([B=A._GetAutoObject(A.Device.Device),B.A9b,B.Bbf]);this.YD.CJ(this.
AaR);this.YD.Aks([B=A._GetAutoObject(A.Device.Device),B.A8w,B.Ba1]);},_Done:function(
){this.__proto__=C.Cv;this.Q$._Done();this.FB._Done();this.BY._Done();this.OF._Done(
);this.YD._Done();this.AaR._Done();C.Cv._Done.call(this);},_ReInit:function(){C.
Cv._ReInit.call(this);this.Q$._ReInit();this.FB._ReInit();this.BY._ReInit();this.
OF._ReInit();this.YD._ReInit();this.AaR._ReInit();this.JP(A.aaR(A.acf.Temperature
));this.BY.T(A.aaR(A.acf.Aq$));this.OF.T(A.aaR(A.acf.Undertemperature));this.OF.
A_B(A.aaR(A.acf.AGI));this.YD.T(A.aaR(A.acf.A4P));},_Mark:function(D){var B;C.Cv.
_Mark.call(this,D);if((B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANG={PD:null,PE:null,Sn:null,VS:null,Sp:null,So:null,FZ:null,Acj:null,Init:function(
aArg){A.zX([this,this.BoJ],this.PE.Q,0);},BoJ:function(G){var F;A._GetAutoObject(
A.Device.Device).AwU((F=this.PE.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cv.
_Init.call(this,aArg);C.I5._Init.call(this.PD={I:this},0);C.BZ._Init.call(this.PE={
I:this},0);C.Afb._Init.call(this.Sn={I:this},0);C.I5._Init.call(this.VS={I:this}
,0);C.Afb._Init.call(this.Sp={I:this},0);C.Afb._Init.call(this.So={I:this},0);C.
FZ._Init.call(this.FZ={I:this},0);C.Acj._Init.call(this.Acj={I:this},0);this.__proto__=
C.ANG;var B;this.N.H(W6);this.JP(A.aaR(A.acf.Device));this.PD.H(AhQ);this.PD.Aj(
true);this.PD.T(A.aaR(A.acf.A$l));this.PD.Bj(false);this.PD.Gq(2);this.PD.E5(60);
this.PD.Ko(A.aaR(A.acf.AGY));this.PD.KQ(A.aaR(A.acf.AGY));this.PE.H(AW2);this.PE.
Aj(true);this.PE.T(A.aaR(A.acf.A$s));this.PE.Bj(true);this.PE.BC(0);this.PE.Gq(-
1);this.PE.E5(1);this.Sn.H(Z8);this.Sn.Aj(true);this.Sn.T(A.aaR(A.acf.HA));this.
Sn.Bj(false);this.Sn.BC(0);this.Sn.Gq(-1);this.Sn.E5(1);this.VS.H(Aoi);this.VS.Aj(
true);this.VS.T(A.aaR(A.acf.A5n));this.VS.Bj(true);this.VS.Ko(Afu);this.VS.KQ(Afu
);this.Sp.H(Ak8);this.Sp.Aj(true);this.Sp.T(A.aaR(A.acf.Asx));this.Sp.Bj(false);
this.Sp.BC(1);this.Sp.Gq(-1);this.Sp.E5(1);this.So.H(AHI);this.So.Aj(true);this.
So.T(A.aaR(A.acf.Asc));this.So.Bj(true);this.So.BC(0);this.So.Gq(-1);this.So.E5(
1);this.Acj.As(A._GetAutoObject(A.Device.Device).Axt);this.J(this.PD,0);this.J(this.
PE,0);this.J(this.Sn,0);this.J(this.VS,0);this.J(this.Sp,0);this.J(this.So,0);this.
PD.As([B=A._GetAutoObject(A.Device.Device),B.A85,B.Bbb]);this.PE.As([B=this.Acj,
B.B$,B.Ca]);this.PE.CJ(this.Acj);this.Sn.CJ(this.FZ);this.Sn.Aks([B=A._GetAutoObject(
A.Device.Device),B.AEm,B.AIx]);this.VS.As([B=A._GetAutoObject(A.Device.Device),B.
A8t,B.BaY]);this.Sp.CJ(this.FZ);this.Sp.Aks([B=A._GetAutoObject(A.Device.Device)
,B.A9c,B.Bbg]);this.So.CJ(this.FZ);this.So.Aks([B=A._GetAutoObject(A.Device.Device
),B.ASh,B.AZY]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cv;this.PD._Done(
);this.PE._Done();this.Sn._Done();this.VS._Done();this.Sp._Done();this.So._Done(
);this.FZ._Done();this.Acj._Done();C.Cv._Done.call(this);},_ReInit:function(){C.
Cv._ReInit.call(this);this.PD._ReInit();this.PE._ReInit();this.Sn._ReInit();this.
VS._ReInit();this.Sp._ReInit();this.So._ReInit();this.FZ._ReInit();this.Acj._ReInit(
);this.JP(A.aaR(A.acf.Device));this.PD.T(A.aaR(A.acf.A$l));this.PD.Ko(A.aaR(A.acf.
AGY));this.PD.KQ(A.aaR(A.acf.AGY));this.PE.T(A.aaR(A.acf.A$s));this.Sn.T(A.aaR(A.
acf.HA));this.VS.T(A.aaR(A.acf.A5n));this.Sp.T(A.aaR(A.acf.Asx));this.So.T(A.aaR(
A.acf.Asc));},_Mark:function(D){var B;C.Cv._Mark.call(this,D);if((B=this.PD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acj)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AT6={VV:null,VU:
null,QH:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bh7
],this.QH.Q,0);},Bh7:function(G){var F;A._GetAutoObject(A.Device.Device).Akm((F=
this.QH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cv._Init.call(this,aArg);C.
NV._Init.call(this.VV={I:this},0);C.NV._Init.call(this.VU={I:this},0);C.AUn._Init.
call(this.QH={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AT6;var B;this.JP(A.aaR(A.acf.Ar7));this.VV.H(IN);this.
VV.Aj(true);this.VV.T(A.aaR(A.acf.Ajy));this.VV.Bj(false);this.VV.NY(99);this.VU.
H(AW3);this.VU.Aj(true);this.VU.T(A.aaR(A.acf.Aqa));this.VU.Bj(true);this.VU.NY(
100);this.QH.H(W7);this.QH.Aj(true);this.QH.T(A.aaR(A.acf.A4U));this.QH.Bj(false
);this.QH.Gq(-1);this.QH.E5(1);this.EartagNrAssignmentMode.As(A._GetAutoObject(A.
Device.Device).EartagNrAssignmentMode);this.J(this.VV,0);this.J(this.VU,0);this.
J(this.QH,0);this.VV.AR=[B=this.VV,B.NZ];this.VU.AR=[B=this.VU,B.NZ];this.QH.As([
B=this.EartagNrAssignmentMode,B.B$,B.Ca]);this.QH.CJ(this.EartagNrAssignmentMode
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cv;this.VV._Done();this.VU.
_Done();this.QH._Done();this.EartagNrAssignmentMode._Done();C.Cv._Done.call(this
);},_ReInit:function(){C.Cv._ReInit.call(this);this.VV._ReInit();this.VU._ReInit(
);this.QH._ReInit();this.EartagNrAssignmentMode._ReInit();this.JP(A.aaR(A.acf.Ar7
));this.VV.T(A.aaR(A.acf.Ajy));this.VU.T(A.aaR(A.acf.Aqa));this.QH.T(A.aaR(A.acf.
A4U));},_Mark:function(D){var B;C.Cv._Mark.call(this,D);if((B=this.VV)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.VU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QH).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::RegistrationSettingsScreen"};C.WO={Q:null
,TransponderProtocolToString:null,Apf:null,Background:null,Y:null,Sh:null,GG:null
,PJ:null,OH:null,Pn:null,C6:null,Gr:null,SB:null,N1:null,CountryToString:null,As:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.J$],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.J$],E,0);if(!!E)A.pe([this,this.J$],this);},J$:function(
G){var B;var F;if(!!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GG.R((F=this.
Q,F[1].call(F[0])).Id.toFixed());var BP=(F=this.Q,F[1].call(F[0])).BiC();if(BP<900
){var J2=A._GetAutoObject(A.Device.Converter).ANj(BP);if(!!J2)this.C6.R(((this.CountryToString.
Ls(J2)+AcE)+BP.toFixed())+O3);else this.C6.R(BP.toFixed());if(J2===10){var AJY=this.
A6Z((F=this.Q,F[1].call(F[0])).Id);this.C6.R(this.C6.String+((((AW4+this.Apf.Bpt(
AJY))+AcE)+A.abl(this.Apf.Bps(AJY),2,10))+O3));}this.C6.Z(true);this.Pn.Z(true);
this.OH.Z(false);this.PJ.Z(false);}else{this.OH.R(((A._GetAutoObject(A.Device.Converter
).Bhw(BP)+AcE)+BP.toFixed())+O3);this.OH.Z(true);this.PJ.Z(true);this.C6.Z(false
);this.Pn.Z(false);}if(BP===276){this.Gr.R(this.Apf.BO(this.A6Z((F=this.Q,F[1].call(
F[0])).Id)));this.Gr.Z(true);}else this.Gr.Z(false);this.N1.R(this.TransponderProtocolToString.
BO((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GG.R(A.jV);this.OH.
R(A.jV);this.Gr.R(A.jV);this.C6.R(A.jV);this.N1.R(A.jV);}},A6Z:function(J0){var Qp=
0;var J2=A._GetAutoObject(A.Device.Converter).ZO(J0);switch(J2){case 10:{var Ga=
A._GetAutoObject(A.Device.Helper).Sc(J0,8,2)|0;Qp=A._GetAutoObject(A.Device.Converter
).ACI(Ga);}break;default:;}return Qp;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apf={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CG._Init.call(this.Sh={I:this},0);C.CG._Init.call(this.GG={I:this},0);C.CG._Init.
call(this.PJ={I:this},0);C.CG._Init.call(this.OH={I:this},0);C.CG._Init.call(this.
Pn={I:this},0);C.CG._Init.call(this.C6={I:this},0);C.CG._Init.call(this.Gr={I:this
},0);C.CG._Init.call(this.SB={I:this},0);C.CG._Init.call(this.N1={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WO;
this.H(AcF);this.Background.A3(0x3F);this.Background.H(AcF);this.Background.L(A.
jb.CU);this.Y.A3(0x3F);this.Y.H(AcF);this.Y.JN(9);this.Sh.H(AW5);this.Sh.Aj(true
);this.Sh.R(A.aaR(A.acf.GG)+A.aaR(A.acf.Colon));this.Sh.A8(0x11);this.Sh.L(A.jb.
Text);this.GG.H(AW6);this.GG.Aj(true);this.GG.R(AW7);this.GG.A8(0x14);this.GG.L(
A.jb.Text);this.PJ.H(AHJ);this.PJ.Aj(true);this.PJ.R(A.aaR(A.acf.A_R)+A.aaR(A.acf.
Colon));this.PJ.A8(0x11);this.PJ.L(A.jb.Text);this.OH.H(AsQ);this.OH.Aj(true);this.
OH.R(Ax9);this.OH.A8(0x14);this.OH.L(A.jb.Text);this.Pn.H(AHJ);this.Pn.Aj(true);
this.Pn.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.Pn.A8(0x11);this.Pn.L(A.jb.Text
);this.C6.H(AsQ);this.C6.Aj(true);this.C6.R(AW8);this.C6.A8(0x14);this.C6.L(A.jb.
Text);this.Gr.H(AW9);this.Gr.Aj(true);this.Gr.R(AHK);this.Gr.A8(0x14);this.Gr.L(
A.jb.Text);this.SB.H(AHL);this.SB.Aj(true);this.SB.R(A.aaR(A.acf.N1)+A.aaR(A.acf.
Colon));this.SB.A8(0x11);this.SB.L(A.jb.Text);this.N1.H(AW_);this.N1.Aj(true);this.
N1.R(AHM);this.N1.A8(0x14);this.N1.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sh,0);this.J(this.GG,0);this.J(this.PJ,0);this.J(this.OH,0
);this.J(this.Pn,0);this.J(this.C6,0);this.J(this.Gr,0);this.J(this.SB,0);this.J(
this.N1,0);this.Sh.S(A.aaL(A.fl.Ak));this.Sh.A2(A.aaL(A.fl.Bi));this.GG.S(A.aaL(
A.fl.Ak));this.GG.A2(A.aaL(A.fl.Bi));this.PJ.S(A.aaL(A.fl.Ak));this.PJ.A2(A.aaL(
A.fl.Bi));this.OH.S(A.aaL(A.fl.Ak));this.OH.A2(A.aaL(A.fl.Bi));this.Pn.S(A.aaL(A.
fl.Ak));this.Pn.A2(A.aaL(A.fl.Bi));this.C6.S(A.aaL(A.fl.Ak));this.C6.A2(A.aaL(A.
fl.Bi));this.Gr.S(A.aaL(A.fl.Ak));this.Gr.A2(A.aaL(A.fl.Bi));this.SB.S(A.aaL(A.fl.
Ak));this.SB.A2(A.aaL(A.fl.Bi));this.N1.S(A.aaL(A.fl.Ak));this.N1.A2(A.aaL(A.fl.
Bi));},_Done:function(){this.__proto__=A.Core.O;this.TransponderProtocolToString.
_Done();this.Apf._Done();this.Background._Done();this.Y._Done();this.Sh._Done();
this.GG._Done();this.PJ._Done();this.OH._Done();this.Pn._Done();this.C6._Done();
this.Gr._Done();this.SB._Done();this.N1._Done();this.CountryToString._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apf._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sh.
_ReInit();this.GG._ReInit();this.PJ._ReInit();this.OH._ReInit();this.Pn._ReInit(
);this.C6._ReInit();this.Gr._ReInit();this.SB._ReInit();this.N1._ReInit();this.CountryToString.
_ReInit();this.Sh.R(A.aaR(A.acf.GG)+A.aaR(A.acf.Colon));this.PJ.R(A.aaR(A.acf.A_R
)+A.aaR(A.acf.Colon));this.Pn.R(A.aaR(A.acf.C6)+A.aaR(A.acf.Colon));this.SB.R(A.
aaR(A.acf.N1)+A.aaR(A.acf.Colon));this.Sh.S(A.aaL(A.fl.Ak));this.Sh.A2(A.aaL(A.fl.
Bi));this.GG.S(A.aaL(A.fl.Ak));this.GG.A2(A.aaL(A.fl.Bi));this.PJ.S(A.aaL(A.fl.Ak
));this.PJ.A2(A.aaL(A.fl.Bi));this.OH.S(A.aaL(A.fl.Ak));this.OH.A2(A.aaL(A.fl.Bi
));this.Pn.S(A.aaL(A.fl.Ak));this.Pn.A2(A.aaL(A.fl.Bi));this.C6.S(A.aaL(A.fl.Ak)
);this.C6.A2(A.aaL(A.fl.Bi));this.Gr.S(A.aaL(A.fl.Ak));this.Gr.A2(A.aaL(A.fl.Bi)
);this.SB.S(A.aaL(A.fl.Ak));this.SB.A2(A.aaL(A.fl.Bi));this.N1.S(A.aaL(A.fl.Ak));
this.N1.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QP={CT:null,A_5:A.jV,Ai:function(Ae){C.Fg.Ai.call(
this,Ae);if(this.Mn.Fi())this.CT.CY(A.jb.AV);else this.CT.CY(this.Background.AQ);
this.CT.AeQ(this.G2.AQ);},Zl:function(E){if(this.A_5===E)return;this.A_5=E;this.
CT.Text.R(E);this.CT.Z(E!==A.jV);},_Init:function(aArg){C.Fg._Init.call(this,aArg
);C.CT._Init.call(this.CT={I:this},0);this.__proto__=C.QP;this.Background.H(AW$);
this.Mn.H(WV);this.OA.H(AHN);this.QV.H(AHN);this.CT.H(AXa);this.CT.Z(false);this.
J(this.CT,0);this.G2.S(A.aaL(A.fl.Af));this.G2.A2(A.aaL(A.fl.Ak));this.G2.Ct(A.aaL(
A.fl.Bi));},_Done:function(){this.__proto__=C.Fg;this.CT._Done();C.Fg._Done.call(
this);},_ReInit:function(){C.Fg._ReInit.call(this);this.CT._ReInit();this.G2.S(A.
aaL(A.fl.Af));this.G2.A2(A.aaL(A.fl.Ak));this.G2.Ct(A.aaL(A.fl.Bi));},_Mark:function(
D){var B;C.Fg._Mark.call(this,D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.CT={B7:null,Aer:null,Am:null,Text:null
,DI:A.jV,AmF:0,MZ:0,I4:0,A5q:0x14,Init:function(aArg){},T:function(E){if(this.DI===
E)return;this.DI=E;this.Text.R(E);},BBZ:function(G){this.Am.H(this.Text.M);this.
Aer.H(this.Text.M);},AeQ:function(E){if(this.AmF===E)return;this.AmF=E;this.Aer.
L(E);this.Text.L(E);},CY:function(E){if(this.MZ===E)return;this.MZ=E;this.Am.L(E
);},S:function(E){if(this.B7===E)return;this.B7=E;this.Text.S(E);},Hs:function(E
){if(this.I4===E)return;this.I4=E;this.Text.Hs(E);},Blw:function(E){if(this.A5q===
E)return;this.A5q=E;this.Text.A8(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.NL._Init.call(this.Aer={I:this},0);A.acg.NL._Init.call(this.Am={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.CT;this.H(AHO);
this.Aer.A3(0x8);this.Aer.L(A.jb.Text);this.Am.A3(0x8);this.Am.L(A.jb.CU);this.Text.
A3(0xD);this.Text.H(AHO);this.Text.Hs(5);this.Text.I3(true);this.Text.A8(0x14);this.
Text.L(A.jb.Text);this.J(this.Aer,0);this.J(this.Am,0);this.J(this.Text,0);this.
Aer.Aw(A.aaL(A.ach.APJ));this.Am.Aw(A.aaL(A.ach.API));this.Text.Q0([this,this.BBZ
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Aer._Done();this.Am._Done();this.Text._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Aer._ReInit();this.Am.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aer)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T4={DX:null,Y:null,Ay:null,Dz:function(G){var B;C.AB.Dz.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HC(this.AV,true,null,null);},CB:function(
G){C.AB.CB.call(this,G);this.AK5(this);A._GetAutoObject(A.Device.Device).Ao.Bl(null
);A._GetAutoObject(A.Device.Device).Bv.Bl(null);A._GetAutoObject(A.Device.Helper
).AkE();A._GetAutoObject(A.Device.Helper).Ar$();},Ic:function(G){},AcK:function(
s){this.Ic(s);},A2$:function(G){A._GetAutoObject(C.A1).Fs();},Fb:function(G){var
B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Bt[1]);},AK5:function(G){},BF2:function(s){this.AK5(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DX={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T4;this.Background.L(A.jb.CU);this.N.Z(true);this.N.B2(A.jV);this.Dn(C.AqM);this.
DX.A3(0x3F);this.DX.H(E8);this.DX.L(A.jb.CI);this.Y.H(E8);this.Y.JN(9);this.Ay.H(
Ip);this.J(this.DX,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CA=[this,this.A2$
];this.N.CZ(A.aaL(A.ach.EX));this.Y.Ej=[this,this.Fb];},_Done:function(){this.__proto__=
C.AB;this.DX._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DX._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVo={Wn:function(
G){this.Agi();this.IU(A.aaR(A.acf.AU0),[this,this.ATo],7);this.IU(A.aaR(A.acf.Ar8
),[this,this.Blz],6);this.IU(A.aaR(A.acf.AF5),[this,this.ATa],3);this.IU(A.aaR(A.
acf.AnT),[this,this.AwI],2);this.IU(A.aaR(A.acf.XI),[this,this.AEF],1);this.IU(A.
aaR(A.acf.Aup),[this,this.AEz],0);A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.
BN).Nz(A.aaR(A.acf.Ame)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dt(
6);},Dz:function(G){},Abh:function(){return C.AMW;},Abi:function(){return C.APr;
},Q5:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var ABi=A._NewObject(
A.Device.BoolFilterCriterion,0);ABi.Initialize(12,0,true,true);Be.CW(ABi);A._GetAutoObject(
A.Device.Device).Ao.Bl(Be);},HM:function(G){C.GS.HM.call(this,G);if(this.Aj9()===
false){this.N.Cq(A.aaL(A.ach.Ar8));this.N.Ck=[this,this.A54];this.N.FH(A.jV);}this.
N.OL(false);this.N.OM(false);},Af6:function(){A._GetAutoObject(C.A1).BU(42);},Af5:
function(){A._GetAutoObject(C.A1).BU(45);},_Init:function(aArg){C.GS._Init.call(
this,aArg);this.__proto__=C.AVo;var B;this.Dn(C.APn);this.Dx(A.aaR(A.acf.A7T));this.
AwD([B=A._GetAutoObject(A.Device.Device),B.A9g,B.Bbh]);},_ReInit:function(){C.GS.
_ReInit.call(this);this.Dx(A.aaR(A.acf.A7T));},_className:"Application::WatchListScreen"
};C.AL3={Dz:function(G){var B;var Jv=(A.Core.BL.isPrototypeOf(G)?G:null);if(((Jv.
CN===4)||(Jv.CN===5))===false){C.AxM.Dz.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var BcH=A._GetAutoObject(A.Device.Device
).KW;var Tc;if(Jv.CN===5)Tc=5;else Tc=4;var AA0=A._GetAutoObject(A.acj.DU).Bdf(BcH
,Tc);var GO=(((BcH+((AA0/2)|0))/AA0)|0)*AA0;if(Jv.CN===4)GO+=AA0;else if(Jv.CN===
5)GO-=AA0;if(GO>999900)GO=999900;if(GO<100)GO=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(GO);},Asn:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.OY,B.CA],this);else A._GetAutoObject(C.A1).Fs();
},WD:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).Asp();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$j()===false){this.H3.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KW
);this.H3.Co(A._GetAutoObject(A.Device.Device).Bv);A._GetAutoObject(C.A1).Fs();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.H3.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KW);this.H3.Co(A._GetAutoObject(A.Device.Device
).Bv);A._GetAutoObject(C.A1).Fs();}},AkL:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.OY,B.Cg],this);},Bde:function(){var
ALh=A._GetAutoObject(A.Device.Helper).W.AhJ(1);if(ALh>=100000)ALh=(Math.round(ALh
/1000)|0)*1000;return ALh;},_Init:function(aArg){C.AxM._Init.call(this,aArg);this.
__proto__=C.AL3;},_className:"Application::AnimalActionWeighingScreen"};C.AU$={V0:
null,YF:null,Q$:null,AeC:null,_Init:function(aArg){C.Cv._Init.call(this,aArg);C.
BZ._Init.call(this.V0={I:this},0);C.BZ._Init.call(this.YF={I:this},0);C.Q$._Init.
call(this.Q$={I:this},0);C.AeC._Init.call(this.AeC={I:this},0);this.__proto__=C.
AU$;var B;this.JP(A.aaR(A.acf.AGZ));this.V0.H(AhQ);this.V0.Aj(true);this.V0.T(A.
aaR(A.acf.A$I));this.V0.Bj(true);this.V0.BC(0);this.YF.H(W7);this.YF.Aj(true);this.
YF.T(A.aaR(A.acf.A$H));this.YF.Bj(false);this.J(this.V0,0);this.J(this.YF,0);this.
V0.As([B=this.Q$,B.B$,B.Ca]);this.V0.CJ(this.Q$);this.YF.As([B=this.AeC,B.B$,B.Ca
]);this.YF.CJ(this.AeC);},_Done:function(){this.__proto__=C.Cv;this.V0._Done();this.
YF._Done();this.Q$._Done();this.AeC._Done();C.Cv._Done.call(this);},_ReInit:function(
){C.Cv._ReInit.call(this);this.V0._ReInit();this.YF._ReInit();this.Q$._ReInit();
this.AeC._ReInit();this.JP(A.aaR(A.acf.AGZ));this.V0.T(A.aaR(A.acf.A$I));this.YF.
T(A.aaR(A.acf.A$H));},_Mark:function(D){var B;C.Cv._Mark.call(this,D);if((B=this.
V0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeC)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeC={MassUnitToString:null
,Dr:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gd:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BO(aIndex);},DO:function(A7){return A7;},Hp:function(){return 1;
},As:function(E){C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).AwE(E);}
,Init:function(aArg){var B;A.zX([this,this.BdT],[B=A._GetAutoObject(A.Device.Device
),B.ASg,B.AZX],0);A.pe([this,this.BdT],this);},BdT:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B$,this.Ca],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeC;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.AxM={H3:null,Ajn:null,MassUnit:null,
KW:null,Vo:null,AnE:null,Acw:null,ZP:null,OY:null,Yu:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).AfR());A.zX([this,this.AKk],[B=A._GetAutoObject(
A.Device.Device),B.AEp,B.AIA],0);A.zX([this,this.BAL],[B=A._GetAutoObject(A.Device.
Device),B.AEv,B.AIE],0);A.zX([this,this.BAM],[B=this.OY,B.Arh,B.Jr],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxF();this.Acx();},IS:function(G){this.WD(this);}
,CB:function(G){C.AB.CB.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).Asp();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bv.Lg())A._GetAutoObject(
A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bv.HF().toFixed(),
0,null);this.H3.Gj();this.H3.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGE();else{var BCb=this.Bde();this.ZP.Z(true);this.Acw.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BCb);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},EY:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).Asp();else A._GetAutoObject(A.Device.Device).AhA(
);},AxF:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.BgA();break;case 3:{this.BgA();this.ZP.Z(false);this.Acw.Z(false
);if(this.A$j()){this.Vo.Z(false);this.KW.H(A.abO(this.KW.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.OY.Ar(true);this.OY.Z(true);this.Bb(this.OY);}}break;
case 4:this.KW.R(A.aaR(A.acu.Aka));break;default:A.ab5("%s%e",AHP,A._GetAutoObject(
A.Device.Device).MeasureState);}},Acx:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.CZ(A.aaL(A.ach.Aem));this.N.Cq(null);
this.Yu.Z(false);this.N.C5(A.aaL(A.ach.AmU));this.N.B2(A.jV);}break;case 3:{if(this.
OY.AY<=1){this.N.CZ(null);this.N.Cq(null);this.Yu.Z(false);this.N.C5(null);}else{
this.N.CZ(A.aaL(A.ach.AmS));this.N.Cq(A.aaL(A.ach.Aen));this.Yu.Z(true);this.N.C5(
null);}this.N.B2(A.aaR(A.acf.Ok));}break;case 4:{this.N.C5(A.aaL(A.ach.AvB));this.
N.Cg=[this,this.Bln];this.N.Cq(null);this.Yu.Z(false);this.N.B2(A.jV);}break;default:;
}},Asn:function(G){},Bv7:function(s){this.Asn(s);},WD:function(G){},A0c:function(
s){this.WD(s);},Bln:function(G){this.CB(this);},BAL:function(G){this.An();},AKk:
function(G){this.An();},A$j:function(){var Aug=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Aug>0)&&!A._GetAutoObject(A.Device.Helper).Bpq(Aug
,this.H3.Timestamp);},AkL:function(G){},A0b:function(s){this.AkL(s);},BAM:function(
G){this.An();},BgA:function(){this.KW.R(A._GetAutoObject(A.Device.Converter).AkX(
A._GetAutoObject(A.Device.Device).KW));},Bde:function(){return A._GetAutoObject(
A.Device.Helper).W.AhJ(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Ajn={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KW={I:this},0);A.acg.Text._Init.call(this.Vo={I:this
},0);C.AxE._Init.call(this.AnE={I:this},0);A.acg.Aec._Init.call(this.Acw={I:this
},0);A.acg.Aec._Init.call(this.ZP={I:this},0);C.AVt._Init.call(this.OY={I:this},
0);A.acg.Am._Init.call(this.Yu={I:this},0);this.__proto__=C.AxM;this.Background.
L(A.jb.CI);this.N.Z(true);this.Dn(C.IE);this.Ajn.A3(0x3F);this.Ajn.H(Ax_);this.Ajn.
L(A.jb.CI);this.MassUnit.H(AXb);this.MassUnit.A8(0x9);this.MassUnit.R(A.aaR(A.acf.
AzX));this.MassUnit.L(A.jb.Text);this.KW.H(AXc);this.KW.A8(0x14);this.KW.R(A.aaR(
A.acu.Aka));this.KW.L(A.jb.Text);this.Vo.H(AXd);this.Vo.R(A.aaR(A.acf.A$T));this.
Vo.L(A.jb.Text);this.Vo.Z(true);this.AnE.H(AXe);this.Acw.H(AXf);this.Acw.L(A.jb.
AdZ);this.Acw.Z(false);this.ZP.H(AXg);this.ZP.L(A.jb.AdZ);this.ZP.Bmc(true);this.
ZP.Z(false);this.OY.A3(0x3F);this.OY.H(Ax_);this.OY.Ar(false);this.OY.Z(false);this.
Yu.H(AXh);this.Yu.L(A.jb.Bm);this.J(this.Ajn,0);this.J(this.MassUnit,0);this.J(this.
KW,0);this.J(this.Vo,0);this.J(this.Acw,0);this.J(this.ZP,0);this.J(this.OY,0);this.
J(this.Yu,0);this.N.CA=[this,this.Bv7];this.N.Ck=[this,this.A0b];this.N.Cg=[this
,this.A0c];this.MassUnit.S(A.aaL(A.fl.EG));this.KW.S(A.aaL(A.fl.Aef));this.Vo.S(
A.aaL(A.fl.EG));this.Acw.Zk(this.AnE);this.ZP.Zk(this.AnE);this.H3=A._NewObject(
A.Device.Rating,0);this.OY.LX(A._GetAutoObject(A.Device.Helper).W);this.OY.Akt(this.
H3);this.Yu.Aw(A.aaL(A.ach.AQx));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajn._Done();this.MassUnit._Done();this.KW._Done();this.Vo._Done();this.
AnE._Done();this.Acw._Done();this.ZP._Done();this.OY._Done();this.Yu._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajn._ReInit();
this.MassUnit._ReInit();this.KW._ReInit();this.Vo._ReInit();this.AnE._ReInit();this.
Acw._ReInit();this.ZP._ReInit();this.OY._ReInit();this.Yu._ReInit();this.MassUnit.
R(A.aaR(A.acf.AzX));this.KW.R(A.aaR(A.acu.Aka));this.Vo.R(A.aaR(A.acf.A$T));this.
MassUnit.S(A.aaL(A.fl.EG));this.KW.S(A.aaL(A.fl.Aef));this.Vo.S(A.aaL(A.fl.EG));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H3)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yu)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AVx={FB:null
,OI:null,M_:null,C9:null,LU:null,T1:null,Init:function(aArg){var B;A.zX([this,this.
GA],[B=this.FB,B.B$,B.Ca],0);A.pe([this,this.GA],this);},CB:function(G){C.Cv.CB.
call(this,G);A.pe([this,this.GA],this);},Bka:function(G){var F;this.LU.BT.L(this.
LU.V.AQ);if(!!this.LU.Q)this.LU.BT.R((A._GetAutoObject(A.Device.Converter).S0((F=
this.LU.Q,F[1].call(F[0])),2,true)+CO)+A._GetAutoObject(A.acj.DU).Aan());},GA:function(
G){var AJe=true;if(this.FB.Q===1)AJe=false;this.C9.Aj(AJe);this.C9.Ar(AJe);this.
C9.Z(AJe);A._GetAutoObject(A.Device.Helper).ANc(this.Y);},_Init:function(aArg){C.
Cv._Init.call(this,aArg);C.AMn._Init.call(this.FB={I:this},0);C.AG_._Init.call(this.
OI={I:this},0);C.AUs._Init.call(this.M_={I:this},0);C.AkJ._Init.call(this.C9={I:
this},0);C.I5._Init.call(this.LU={I:this},0);C.BZ._Init.call(this.T1={I:this},0);
this.__proto__=C.AVx;var B;this.JP(A.aaR(A.acf.Settings));this.Hb.R(A.aaR(A.acf.
AsA));this.FB.As(A._GetAutoObject(A.Device.Device).AnimalType);this.OI.As(A._GetAutoObject(
A.Device.Device).OI);this.M_.H(AXi);this.M_.Aj(true);this.C9.H(AsR);this.C9.Aj(true
);this.C9.T(A.aaR(A.acf.KG));this.C9.Bj(true);this.C9.Gq(1000);this.C9.E5(99000);
this.LU.H(AsS);this.LU.Aj(true);this.LU.T(A.aaR(A.acf.A4Y));this.LU.Gq(50);this.
LU.E5(2000);this.LU.ASS(A._GetAutoObject(A.acj.DU).AzF());this.T1.H(Ak8);this.T1.
Aj(true);this.T1.T(A.aaR(A.acf.A7A));this.T1.Gq(-1);this.T1.E5(1);this.JU(this.Y
,-1);this.JU(this.Ay,-1);this.J(this.M_,0);this.J(this.C9,0);this.J(this.LU,0);this.
J(this.T1,0);this.M_.AeK([B=this.M_,B.FO]);this.M_.Gk([this,this.D8,this.GK]);this.
M_.Akp(A.aaL(A.ach.Edit));this.M_.LW([B=this.M_,B.AyI]);this.M_.LZ(A.aaL(A.ach.AnI
));this.M_.As([B=this.FB,B.B$,B.Ca]);this.M_.CJ(this.FB);this.M_.A_d([B=this.FB,
B.ASy,B.AZ$]);this.M_.A_c([B=this.FB,B.ASx,B.AZ_]);this.C9.Gk([this,this.D8,this.
GK]);this.C9.LW([B=this.M_,B.AyI]);this.C9.LZ(A.aaL(A.ach.AnI));this.C9.As([B=this.
FB,B.A8r,B.ASE]);this.LU.Gk([this,this.D8,this.GK]);this.LU.LW([B=this.M_,B.AyI]
);this.LU.LZ(A.aaL(A.ach.AnI));this.LU.As([B=this.FB,B.A8q,B.ASC]);this.LU.A_q([
this,this.Bka]);this.T1.Gk([this,this.D8,this.GK]);this.T1.As([B=this.OI,B.B$,B.
Ca]);this.T1.CJ(this.OI);this.Init(aArg);},_Done:function(){this.__proto__=C.Cv;
this.FB._Done();this.OI._Done();this.M_._Done();this.C9._Done();this.LU._Done();
this.T1._Done();C.Cv._Done.call(this);},_ReInit:function(){C.Cv._ReInit.call(this
);this.FB._ReInit();this.OI._ReInit();this.M_._ReInit();this.C9._ReInit();this.LU.
_ReInit();this.T1._ReInit();this.JP(A.aaR(A.acf.Settings));this.Hb.R(A.aaR(A.acf.
AsA));this.C9.T(A.aaR(A.acf.KG));this.LU.T(A.aaR(A.acf.A4Y));this.T1.T(A.aaR(A.acf.
A7A));},_Mark:function(D){var B;C.Cv._Mark.call(this,D);if((B=this.FB)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUs={YR:null,Init:
function(aArg){var B;A.zX([this,this.Afv],[B=A._GetAutoObject(A.Device.Device),B.
ASg,B.AZX],0);A.pe([this,this.Afv],this);},A3D:function(G){A._GetAutoObject(A.Device.
Device).A_(37,true,A.jV,0,[this,this.Bbv]);},A1t:function(G){var F;if(this.A9===
1){var BR=this.D5;this.D5=this.D5-A._GetAutoObject(A.acj.DU).AzF();if(this.D5<this.
AlG)this.D5=this.AlG;if(this.DW!==BR){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.
D5));A.abo(this.JS,0);}}if(this.A9===2){var BR=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).AzF();if(this.DW<this.D5)this.DW=this.D5;if(this.DW!==BR){if(!!this.JR
)(F=this.JR,F[2].call(F[0],this.DW));A.abo(this.JR,0);}}this.DH(this);this.An();
},A14:function(G){var F;if(this.A9===1){var BR=this.D5;this.D5=this.D5+A._GetAutoObject(
A.acj.DU).AzF();if(this.D5>this.DW)this.D5=this.DW;if(this.D5!==BR){if(!!this.JS
)(F=this.JS,F[2].call(F[0],this.D5));A.abo(this.JS,0);}}if(this.A9===2){var BR=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).AzF();if(this.DW>this.AlB)this.DW=
this.AlB;if(this.DW!==BR){if(!!this.JR)(F=this.JR,F[2].call(F[0],this.DW));A.abo(
this.JR,0);}}this.DH(this);this.An();},GA:function(G){this.PG.R(AHQ+A._GetAutoObject(
A.Device.Converter).S0(this.D5,2,true));this.PF.R(AHQ+A._GetAutoObject(A.Device.
Converter).S0(this.DW,2,true));this.Sr.R(A._GetAutoObject(A.acj.DU).Aan());this.
YR.R(this.Sr.String);},A3c:function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(A.Device.Device).Asb(this
);},A1X:function(Ate){if(Ate===1)return this.PG;else if(Ate===2)return this.PF;else
return null;},_Init:function(aArg){C.Acg._Init.call(this,aArg);A.acg.Text._Init.
call(this.YR={I:this},0);this.__proto__=C.AUs;this.T(A.aaR(A.acf.ACb));this.AlB=
2000;this.AlG=20;this.Background.H(JY);this.V.H(BF);this.V.R(A.aaR(A.acf.ACb)+A.
aaR(A.acf.Colon));this.V.A8(0x12);this.AkC.H(AXj);this.AkD.H(AXk);this.Q2.H(AXl);
this.Qy.H(AHR);this.PF.H(AXm);this.PG.H(AXn);this.Sr.H(AXo);this.YR.H(AXp);this.
YR.I3(false);this.YR.A8(0x12);this.YR.L(0xFF000000);this.JU(this.H0,-8);this.J(this.
YR,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YR.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acg;this.YR._Done();C.Acg.
_Done.call(this);},_ReInit:function(){C.Acg._ReInit.call(this);this.YR._ReInit();
this.T(A.aaR(A.acf.ACb));this.V.R(A.aaR(A.acf.ACb)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YR.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acg._Mark.call(this,D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABn={M:Rf,A7a:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7a();},_Init:function(
aArg){A.Graphics.Hu._Init.call(this,aArg);this.__proto__=C.ABn;},_className:"Application::AbstractPath"
};C.Aja={DL:null,DX:null,Rd:null,AdF:null,N9:null,AdE:null,Auo:1,A4v:0,Bcp:false
,AzB:true,CS:function(){this.Bgw(this);},Init:function(aArg){var B;this.Bb(this.
AdF);A.zX([this,this.Bgw],[B=this.AdF,B.A8x,B.Ba2],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdE.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BhP(this.Auo+this.A4v)));if(this.Auo===1)this.N9.R(A.aaR(A.acf.AuK));else this.
N9.R(A.aaR(A.acf.Bhq));},CB:function(G){if(this.AzB)this.AzB=false;else if(this.
DL.Bcy()===false)A.pe([this,this.A2L],this);else if(this.DL.AzP())this.DL.AcZ();
A.zV([this,this.AfY],A._GetAutoObject(A.Device.Device).Ao,0);},EY:function(G){A.
z9([this,this.AfY],A._GetAutoObject(A.Device.Device).Ao,0);},A2L:function(G){this.
Bcp=true;A._GetAutoObject(C.A1).Fs();},Bgw:function(G){var B;var Bc0=(C.V$.isPrototypeOf(
B=this.AdF.AV)?B:null);if(!!Bc0){var AyW=A._NewObject(A.Device.ActionToString,0);
this.Rd.R(AyW.Ls(Bc0.Action));}},Ic:function(G){var Cx=(C.V$.isPrototypeOf(G)?G:
null);if(!Cx)return;this.DL.Qf(Cx.Action);this.Blq(this.Auo+1);},BAg:function(G){
if(A._GetAutoObject(C.Pg).NR(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bz7:function(G){
A._GetAutoObject(C.A1).BU(3);},Blq:function(E){if(this.Auo===E)return;this.Auo=E;
this.An();},AfY:function(G){if((this.Bcp===false)&&(this.DL.Bcy()===false))A.pe([
this,this.A2L],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL.
_Init.call(this.DX={I:this},0);C.CG._Init.call(this.Rd={I:this},0);C.ARk._Init.call(
this.AdF={I:this},0);C.CG._Init.call(this.N9={I:this},0);A.acg.Text._Init.call(this.
AdE={I:this},0);this.__proto__=C.Aja;this.Background.L(A.jb.CU);this.N.H(W6);this.
N.Z(true);this.Dn(C.IE);this.DX.A3(0x3F);this.DX.H(E8);this.DX.L(A.jb.CI);this.Rd.
H(AXq);this.Rd.L(A.jb.Text);this.AdF.H(AXr);this.N9.H(AXs);this.N9.R(A.aaR(A.acf.
AuK));this.N9.L(A.jb.Text);this.AdE.H(AXt);this.AdE.R(AXu);this.AdE.L(A.jb.Text);
this.J(this.DX,0);this.J(this.Rd,0);this.J(this.AdF,0);this.J(this.N9,0);this.J(
this.AdE,0);this.N.CA=[this,this.Bz7];this.N.Ck=[this,this.BAg];this.N.Cg=[this,
this.A2L];this.N.CZ(A.aaL(A.ach.EX));this.N.Cq(A.aaL(A.ach.Abr));this.Rd.S(A.aaL(
A.fl.EG));this.Rd.A2(A.aaL(A.fl.Af));this.Rd.Ct(A.aaL(A.fl.Ak));this.AdF.A3a=[this
,this.Ic];this.N9.S(A.aaL(A.fl.EG));this.N9.A2(A.aaL(A.fl.Af));this.N9.Ct(A.aaL(
A.fl.Ak));this.AdE.S(A.aaL(A.fl.Ho));this.DL=A._GetAutoObject(C.DL);this.Init(aArg
);},_Done:function(){this.__proto__=C.AB;this.DX._Done();this.Rd._Done();this.AdF.
_Done();this.N9._Done();this.AdE._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DX._ReInit();this.Rd._ReInit();this.AdF._ReInit();
this.N9._ReInit();this.AdE._ReInit();this.N9.R(A.aaR(A.acf.AuK));this.Rd.S(A.aaL(
A.fl.EG));this.Rd.A2(A.aaL(A.fl.Af));this.Rd.Ct(A.aaL(A.fl.Ak));this.N9.S(A.aaL(
A.fl.EG));this.N9.A2(A.aaL(A.fl.Af));this.N9.Ct(A.aaL(A.fl.Ak));this.CS();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DL)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdE)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARk={H8:null,A3a:null,Cp:null,Y:null,Ay:
null,A3S:0,Init:function(aArg){A.zV([this,this.ABd],this.H8,0);A.zV([this,this.Bgt
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Aul],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABd],this);},Bb:function(E){var A2G=this.AV;
A.Core.O.Bb.call(this,E);if(this.AV!==A2G)A.abo([this,this.A8x,this.Ba2],0);},Dz:
function(G){var B;var E$=0;var X=this.AV;switch(this.Cp.CN){case 6:E$=2;break;case
7:E$=7;break;case 4:E$=4;break;case 5:E$=5;break;default:;}X=this.QB(X,E$,0x415);
if((E$===5)&&!X){var AKW=this.AV;while(!X){AKW=this.QB(AKW,2,0x415);if(!!AKW)X=this.
QB(AKW,E$,0x415);else break;}}if(!!X)this.Bb(X);var GP=(C.V$.isPrototypeOf(B=this.
AV)?B:null);if(!!GP)this.A3S=(C.V$.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A3S=0;A.pe([this,this.MO],this);},A1l:function(Ez){var EM=A._GetAutoObject(C.DL).
BcG(Ez,this.A3a);this.J(EM,0);},AoT:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdA=X;X=X.Ah;if(((AdA.U&0x400)===0x400))this.HL(AdA);
}},ABd:function(G){this.AoT();var P;var CD=A._GetAutoObject(C.Pg).NM();for(P=0;P<
CD;P=P+1){var Aae=A._GetAutoObject(C.Pg).OB(P);this.A1l(Aae);}A.pe([this,this.Bgt
],this);A.pe([this,this.BpO],this);A.pe([this,this.Aul],this);},BpO:function(G){
var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400
)){var Aa=(C.V$.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},Aul:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.V$.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATj(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATj(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATj(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fb:function(G){var B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((
B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Bt[1]);},Bgt:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.V$.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pg).NR(Aa.Action)&&A._GetAutoObject(C.
DL).A4u(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A3S===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MO],this);},MO:function(G){var B;this.Y.Vm(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HC(this.AV,true,null,null);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.Core.BL._Init.call(this.Cp={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARk;this.H(AXv);this.Cp.Filter=147;this.Y.A3(0xB);this.Y.H(AXw);this.Y.JN(9);this.
Ay.A3(0xA);this.Ay.H(AXx);this.J(this.Y,0);this.J(this.Ay,0);this.Cp.BM=[this,this.
Dz];this.Cp.DZ=[this,this.Dz];this.Y.Ej=[this,this.Fb];this.H8=A._GetAutoObject(
C.Pg);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Cp._Done();
this.Y._Done();this.Ay._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Cp._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.H8)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3a)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fk={Eh:null,AL:null,Text:null,Am:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Eh._Init.call(this.Eh={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Am._Init.call(this.
Am={I:this},0);this.__proto__=C.Fk;this.N.Ar(false);this.Eh.H(BF);this.Eh.Ar(false
);this.AL.H(E8);this.AL.L(A.jb.AdZ);this.Text.H(BF);this.Text.R(AXy);this.Text.L(
0xFF000000);this.Am.H(Rf);this.Am.L(A.jb.Text);this.J(this.Eh,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Am,0);this.N.Cq(A.aaL(A.ach.Abr));this.Text.S(
A.aaL(A.fl.Ak));this.Am.Aw(A.aaL(A.ach.AC0));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Eh._Done();this.AL._Done();this.Text._Done();this.Am._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Eh._ReInit();this.AL._ReInit();this.Text._ReInit();this.Am._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.XF={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},IS:function(G){},Ai:function(Ae){C.BZ.
Ai.call(this,Ae);var FK=A.jb.AdZ;var GN=A.jb.CU;if(this.Hd){FK=A.jb.Text;GN=A.jb.
Bm;}if(!this.LF){this.Background.L(A.jb.CU);this.V.L(A.jb.CI);}else if(this.Ql){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KC){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FK);this.V.L(GN);}this.Hr.L(A.
jb.CU);this.H0.L(A.jb.CU);},He:function(G){var B;var F_=this.Dw.GY;var Cz=(C.CG.
isPrototypeOf(B=this.Dw.Ch)?B:null);if(!Cz)return;Cz.S(A.aaL(A.fl.Ak));Cz.A2(A.aaL(
A.fl.Bi));Cz.L(this.V.AQ);if(!!this.AC)Cz.R(this.AC.Gd(F_));else Cz.R(W4);Cz.H(A.
abK(Cz.M,[this.Dw.V2,(B=this.Dw.M)[3]-B[1]]));},_Init:function(aArg){C.BZ._Init.
call(this,aArg);this.__proto__=C.XF;this.Dw.AE8(170);this.Dw.NX(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajb={C8:null,Init:function(
aArg){this.V.Text.A8(0x11);this.V.Text.Hs(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Cm.Ai.call(this,Ae);var FK=A.jb.AdZ;var GN=A.jb.CU;if(this.Hd){FK=A.jb.Text;
GN=A.jb.Bm;}if(!this.LF){this.Background.L(A.jb.CU);this.V.L(A.jb.CI);}else if(this.
Ql){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KC){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FK);this.V.L(GN);}},_Init:function(
aArg){C.Cm._Init.call(this,aArg);A.acg.Am._Init.call(this.C8={I:this},0);this.__proto__=
C.Ajb;this.C8.H(AXz);this.C8.Cu(1);this.J(this.C8,0);this.C8.Aw(A.aaL(A.ach.Ajk)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.C8._Done();C.Cm._Done.
call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.C8._ReInit();},_Mark:
function(D){var B;C.Cm._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.ALI={Y:null,RF:null,To:null
,Tp:null,Tq:null,AdD:null,XE:null,Vh:null,Vi:null,AaI:null,Ay:null,Init:function(
aArg){this.Bb(this.RF);},Dz:function(G){C.Fk.Dz.call(this,G);this.MO(this);},IS:
function(G){this.BfP(this);},KP:function(){if(!this.Bz){this.Bz=A._NewObject(C.N
,0);this.Bz.CA=[this,this.BfP];this.Bz.Ck=null;this.Bz.Cg=null;this.Bz.B2(A.jV);
this.Bz.Cq(null);this.Bz.CZ(A.aaL(A.ach.VP));}return this.Bz;},AAT:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XE.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XE.Q))A._GetAutoObject(C.AutoActions).J(this.XE.Q);if(!!this.Vh.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vh.Q))A._GetAutoObject(C.AutoActions
).J(this.Vh.Q);if(!!this.Vi.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vi.
Q))A._GetAutoObject(C.AutoActions).J(this.Vi.Q);if(!!this.AaI.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaI.Q))A._GetAutoObject(C.AutoActions).J(this.AaI.Q
);A._GetAutoObject(C.AutoActions).Co();},BfP:function(G){if(this.Bzp()===true){this.
AAT();this.Xt(this);}else A._GetAutoObject(A.Device.Device).A_(27,true,A.jV,0,null
);},Bzp:function(){return(!!this.XE.C7(this.XE.Q)||!!this.Vh.C7(this.Vh.Q))||!!this.
Vi.C7(this.Vi.Q);},Fb:function(G){var B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.
Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Bt[1]);},MO:function(G){var B;this.
Y.Vm(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HC(this.AV,true
,null,null);},BAs:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XE.Atm(this);this.Vh.Atm(this);this.Vi.Atm(this);this.AaI.Atm(this);}
,_Init:function(aArg){C.Fk._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.XF._Init.call(this.RF={I:this},0);C.XF._Init.call(this.To={I:this},0);C.XF.
_Init.call(this.Tp={I:this},0);C.XF._Init.call(this.Tq={I:this},0);C.AuV._Init.call(
this.AdD={I:this},0);C.AutoAction._Init.call(this.XE={I:this},0);C.AutoAction._Init.
call(this.Vh={I:this},0);C.AutoAction._Init.call(this.Vi={I:this},0);C.AutoAction.
_Init.call(this.AaI={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ALI;var B;this.H(Ri);this.Text.R(A.aaR(A.acf.Tr));this.Y.H(Lt);this.Y.JN(1);this.
RF.H(AhQ);this.RF.Ar(true);this.RF.Aj(true);this.RF.T(A._GetAutoObject(A.Device.
Helper).Ng(A.aaR(A.acf.Ai$),P4,Ax$));this.To.H(W7);this.To.Ar(true);this.To.Aj(true
);this.To.T(A._GetAutoObject(A.Device.Helper).Ng(A.aaR(A.acf.Ai$),P4,AHS));this.
Tp.H(Z8);this.Tp.Ar(true);this.Tp.Aj(true);this.Tp.T(A._GetAutoObject(A.Device.Helper
).Ng(A.aaR(A.acf.Ai$),P4,AsT));this.Tq.H(Aoi);this.Tq.Ar(true);this.Tq.Aj(true);
this.Tq.T(A._GetAutoObject(A.Device.Helper).Ng(A.aaR(A.acf.Ai$),P4,Aya));this.AdD.
H(Ayb);this.AdD.Aj(true);this.AdD.T(A.aaR(A.acf.A_2));this.Vh.Index=1;this.Vi.Index=
2;this.AaI.Index=3;this.Ay.H(Ip);this.J(this.Y,0);this.J(this.RF,0);this.J(this.
To,0);this.J(this.Tp,0);this.J(this.Tq,0);this.J(this.AdD,0);this.J(this.Ay,0);this.
Y.Ej=[this,this.Fb];this.RF.Wq(A.aaL(A.fl.Ho));this.RF.Wr(A.aaL(A.fl.Ho));this.RF.
As([B=this.XE,B.B$,B.Ca]);this.RF.CJ(this.XE);this.To.Wq(A.aaL(A.fl.Ho));this.To.
Wr(A.aaL(A.fl.Ho));this.To.As([B=this.Vh,B.B$,B.Ca]);this.To.CJ(this.Vh);this.Tp.
Wq(A.aaL(A.fl.Ho));this.Tp.Wr(A.aaL(A.fl.Ho));this.Tp.As([B=this.Vi,B.B$,B.Ca]);
this.Tp.CJ(this.Vi);this.Tq.Wq(A.aaL(A.fl.Ho));this.Tq.Wr(A.aaL(A.fl.Ho));this.Tq.
As([B=this.AaI,B.B$,B.Ca]);this.Tq.CJ(this.AaI);this.AdD.AR=[this,this.BAs];this.
Init(aArg);},_Done:function(){this.__proto__=C.Fk;this.Y._Done();this.RF._Done();
this.To._Done();this.Tp._Done();this.Tq._Done();this.AdD._Done();this.XE._Done();
this.Vh._Done();this.Vi._Done();this.AaI._Done();this.Ay._Done();C.Fk._Done.call(
this);},_ReInit:function(){C.Fk._ReInit.call(this);this.Y._ReInit();this.RF._ReInit(
);this.To._ReInit();this.Tp._ReInit();this.Tq._ReInit();this.AdD._ReInit();this.
XE._ReInit();this.Vh._ReInit();this.Vi._ReInit();this.AaI._ReInit();this.Ay._ReInit(
);this.Text.R(A.aaR(A.acf.Tr));this.RF.T(A._GetAutoObject(A.Device.Helper).Ng(A.
aaR(A.acf.Ai$),P4,Ax$));this.To.T(A._GetAutoObject(A.Device.Helper).Ng(A.aaR(A.acf.
Ai$),P4,AHS));this.Tp.T(A._GetAutoObject(A.Device.Helper).Ng(A.aaR(A.acf.Ai$),P4
,AsT));this.Tq.T(A._GetAutoObject(A.Device.Helper).Ng(A.aaR(A.acf.Ai$),P4,Aya));
this.AdD.T(A.aaR(A.acf.A_2));},_Mark:function(D){var B;C.Fk._Mark.call(this,D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.To)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.CQ={Cr:A.abi(16
,0,null),Dr:function(){return 16;},C7:function(aIndex){if(aIndex>=16)return-1;return this.
Cr.Get(aIndex);},DO:function(A7){var P=0;while(P<16){if(this.Cr.Get(P)===A7)return P;
P=P+1;}return-1;},Hp:function(){var P=0;var max=-1;while(P<16){if(this.Cr.Get(P)>
max)max=this.Cr.Get(P);P=P+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.Cr=[]).__proto__=C.CQ.Cr;this.__proto__=C.CQ;},_className:"Application::ArraySelection"
};C.AutoAction={H8:null,AcZ:null,ActionToString:null,Index:0,Init:function(aArg){
A.zV([this,this.Atm],this.AcZ,0);A.pe([this,this.Atm],this);},Dr:function(){return this.
H8.NM();},C7:function(aIndex){if(aIndex>=this.Dr())return-1;return this.H8.OB(aIndex
);},Gd:function(aIndex){return this.ActionToString.BO(this.C7(aIndex));},DO:function(
A7){var P=0;while(P<this.Dr()){if(this.H8.OB(P)===A7)return P;P=P+1;}return-1;},
Hp:function(){var P=0;var max=-1;while(P<this.Dr()){if(this.H8.OB(P)>max)max=this.
H8.OB(P);P=P+1;}return max;},Atm:function(G){this.Q=this.AcZ.OB(this.Index);A.abo([
this,this.B$,this.Ca],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
ActionToString._Init.call(this.ActionToString={I:this},0);this.__proto__=C.AutoAction;
this.H8=A._GetAutoObject(C.AuE);this.AcZ=A._GetAutoObject(C.AutoActions);this.Init(
aArg);},_Done:function(){this.__proto__=C.AC;this.ActionToString._Done();C.AC._Done.
call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.ActionToString._ReInit(
);},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.H8)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AcZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
ActionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoAction"
};C.ALO={Atj:0,Init:function(aArg){var B;A.zX([this,this.Bej],[B=A._GetAutoObject(
A.Device.Device),B.A8d,B.BaN],0);A.zX([this,this.Beg],[B=A._GetAutoObject(A.Device.
Device),B.AR4,B.AZR],0);A.pe([this,this.Bej],this);A.pe([this,this.Beg],this);},
Clear:function(){C.Vl.Clear.call(this);this.Atj=0;},Co:function(){A._GetAutoObject(
A.Device.Device).Arn(this.Atj);A._GetAutoObject(A.Device.Device).Aro(this.toString(
));},Bej:function(G){this.Atj=A._GetAutoObject(A.Device.Device).Pg;A.we(this,0);
},Beg:function(G){this.EH(A._GetAutoObject(A.Device.Device).Auq);A.we(this,0);},
NR:function(Ez){if((this.Atj&(((B=Ez)<0)?B+0x100000000:B))===(((B=Ez)<0)?B+0x100000000:
B))return true;return false;},AUi:function(Ez){this.Atj=this.Atj|(((B=Ez)<0)?B+0x100000000:
B);},_Init:function(aArg){C.Vl._Init.call(this,aArg);this.__proto__=C.ALO;this.Init(
aArg);},_className:"Application::ActiveActionsClass"};C.Pg={_Init:function(){C.ALO.
_Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.ALP={Ts:null,Ay:null,Y:null,JK:null,CS:function(){this.Aiz(this);},Init:
function(aArg){A.zV([this,this.Aiz],this.Ts,0);A.pe([this,this.Aiz],this);},Dz:function(
G){C.Fk.Dz.call(this,G);this.MO(this);},KP:function(){if(!this.Bz){this.Bz=A._NewObject(
C.N,0);this.Bz.CA=[this,this.Es];this.Bz.Ck=[this,this.A2T];this.Bz.Cg=[this,this.
A3m];this.Bz.C5(A.aaL(A.ach.AqY));this.Bz.Cq(A.aaL(A.ach.AqR));this.Bz.CZ(A.aaL(
A.ach.VP));}return this.Bz;},Es:function(G){if(this.Byf()>0){this.AAT();this.Xt(
this);}else A._GetAutoObject(A.Device.Device).A_(28,true,A.jV,0,null);},Aiz:function(
G){this.AoT();var P;for(P=0;P<this.Ts.NM();P=P+1){var Aae=A._GetAutoObject(C.Pg).
OB(P);this.A0Z(Aae);}this.J(this.JK,0);A.aaS([this,this.MO],this);},Fb:function(
G){var B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);
this.Ay.Mv(-this.Y.Bt[1]);},MO:function(G){var B;this.Y.Vm(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HC(this.AV,true,null,null);},A0Z:function(
G4){var AyW=A._NewObject(A.Device.ActionToString,0);var Aa=A._NewObject(C.R$,0);
Aa.T(AyW.BO(G4));Aa.Aj(true);Aa.GY=G4;Aa.A92(this.Ts.NR(G4));this.J(Aa,0);this.Zt(
Aa);},AoT:function(){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var
AdA=X;X=X.Ah;if(((AdA.U&0x400)===0x400))this.HL(AdA);}},AAT:function(){var B;this.
Ts.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===
0x400)&&!(X===this.JK)){var Aa=(C.R$.isPrototypeOf(X)?X:null);if(!!Aa){this.Ts.J(
Aa.GY);if(Aa.ASe())this.Ts.AUi(Aa.GY);}else A.ab5("%s",Ayc);}X=X.Ah;}this.Ts.Co(
);},Byf:function(){var B;var A3T=0;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)&&!(X===this.JK)){var Aa=(C.R$.isPrototypeOf(X)?X:null
);if(!!Aa){if(Aa.ASe())A3T=A3T+1;}else A.ab5("%s",Ayc);}X=X.Ah;}return A3T;},A2T:
function(G){var B;var Aa=(C.R$.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAa=(
C.R$.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAa){this.Ahp(AAa,Aa);A.pe([this,this.MO
],this);}}},A3m:function(G){var B;var Aa=(C.R$.isPrototypeOf(B=this.AV)?B:null);
if(!!Aa){var AAG=(C.R$.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAG){this.Ahp(Aa,AAG);
A.pe([this,this.MO],this);}}},Aqv:function(G){var B;A._GetAutoObject(A.Device.Device
).ResetActiveActions(this);A.pe([this,this.Aiz],this);},_Init:function(aArg){C.Fk.
_Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.AuV._Init.call(this.JK={I:this},0);this.__proto__=C.ALP;this.H(Ri
);this.Text.R(A.aaR(A.acf.AD3));this.Ay.H(Ip);this.Y.H(Lt);this.Y.JN(1);this.JK.
H(AHT);this.JK.Aj(true);this.JK.T(A.aaR(A.acf.Aqv));this.J(this.Ay,0);this.J(this.
Y,0);this.J(this.JK,0);this.Y.Ej=[this,this.Fb];this.JK.AR=[this,this.Aqv];this.
Ts=A._GetAutoObject(C.Pg);this.Init(aArg);},_Done:function(){this.__proto__=C.Fk;
this.Ay._Done();this.Y._Done();this.JK._Done();C.Fk._Done.call(this);},_ReInit:function(
){C.Fk._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JK._ReInit();this.
Text.R(A.aaR(A.acf.AD3));this.JK.T(A.aaR(A.acf.Aqv));this.CS();},_Mark:function(
D){var B;C.Fk._Mark.call(this,D);if((B=this.Ts)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.R$={GY:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A8(0x11);this.
V.Text.Hs(10);},Bk:function(aSize){C.T8.Bk.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.T8.Ai.call(this,Ae);var G9=((Ae&0x10
)===0x10);var Fo=((Ae&0x20)===0x20);var Gx=this.Bo.By;var FK=A.jb.AdZ;var GN=A.jb.
Bm;if(this.Hd){FK=A.jb.Bm;GN=A.jb.Text;}if(!G9){this.Background.L(FK);this.V.L(A.
jb.CI);}else if(Gx){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fo){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FK);this.V.L(GN);
}this.LF=G9;this.KC=Fo;this.Ql=Gx;},IS:function(G){this.A3k(this);},A3k:function(
G){this.AEN(!this.Ams);},A92:function(E){this.AEN(E);},ASe:function(){return this.
Ams;},_Init:function(aArg){C.T8._Init.call(this,aArg);this.__proto__=C.R$;this.Mj.
H(AXA);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vl={CD:0,
H8:A.abi(17,0,null),OB:function(Hv){return this.H8.Get(Hv);},NM:function(){return this.
CD;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.H8.Set(P,0);this.CD=0;},J:function(
Ez){if(this.CD>=17)A.ab5("%s",AHU);else{this.H8.Set(this.CD,Ez);this.CD=this.CD+
1;}},Co:function(){},EH:function(AcM){var AI2=AcM.indexOf(String.fromCharCode(0x2C
),0);var A1m=A.jV;var P=0;this.CD=0;while(P<17)if(AcM===A.jV){this.H8.Set(P,0);P++;
}else{if(AI2===-1){A1m=AcM;AcM=A.jV;}else{A1m=A.abV(AcM,AI2);AcM=A.ab1(AcM,0,AI2+
1);}var Aae=A.abZ(A1m,0,10)|0;if(this.ADE(Aae)){this.H8.Set(this.CD,Aae);this.CD=
this.CD+1;P++;}AI2=AcM.indexOf(String.fromCharCode(0x2C),0);}if(AcM!==A.jV)A.ab5(
"%s",AXB);},toString:function(){var A2x=(((B=this.H8.Get(0))<0)?B+0x100000000:B).
toFixed();var P;for(P=1;P<this.CD;P=P+1)A2x=(A2x+AHV)+(((B=this.H8.Get(P))<0)?B+
0x100000000:B).toFixed();return A2x;},Axi:function(Hv,Ez){if(Hv>=this.CD){A.ab5(
"%s",((((AXC+Hv.toFixed())+AXD)+this.CD.toFixed())+AXE)+AXF);return;}this.H8.Set(
Hv,Ez);},Contains:function(Ez){var P;for(P=0;P<this.CD;P=P+1)if(this.H8.Get(P)===
Ez)return true;return false;},ADE:function(Ez){return true;},DO:function(Ez){var
P;for(P=0;P<this.CD;P=P+1)if(this.H8.Get(P)===Ez)return P;return-1;},_Init:function(
aArg){(this.H8=[]).__proto__=C.Vl.H8;this.__proto__=C.Vl;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ActionsList"};C.AMx={Init:function(aArg){var B;A.zX([this,this.Bet
],[B=A._GetAutoObject(A.Device.Device),B.A8p,B.BaW],0);A.pe([this,this.Bet],this
);},Co:function(){A._GetAutoObject(A.Device.Device).Akk(this.toString());},ADE:function(
Ez){switch(Ez){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Bet:function(G){this.EH(A._GetAutoObject(A.Device.Device).
AutoActions);A.we(this,0);},_Init:function(aArg){C.Vl._Init.call(this,aArg);this.
__proto__=C.AMx;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AMx._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.V$={Vj:null,Kq:null,A6$:A.jV,Action:0,A4w:
false,A_O:false,A$u:false,Bk:function(aSize){C.Fg.Bk.call(this,aSize);this.QV.H(
this.Mn.M);this.OA.H(this.QV.M);},Ai:function(Ae){C.Fg.Ai.call(this,Ae);if(!this.
LF){this.Kq.TT.L(A.jb.AmW);this.Kq.QD.Z(true);this.Kq.QD.L(A.jb.AQJ);}else if(this.
Ql){this.Kq.TT.L(A.jb.Bm);this.Kq.QD.Z(false);}else if(this.KC){this.Kq.TT.L(A.jb.
Bm);this.Kq.QD.Z(false);}else{this.Kq.TT.L(A.jb.Text);this.Kq.QD.Z(true);this.Kq.
QD.L(A.jb.CU);}},Blp:function(E){if(this.Action===E)return;this.Action=E;},Bmx:function(
E){if(this.A6$===E)return;this.A6$=E;this.Vj.Text.R(E);},ATj:function(E){if(this.
A$u===E)return;this.A$u=E;this.Kq.Bnh(!this.Kq.AUH);},AFo:function(E){if(this.A_O===
E)return;this.A_O=E;this.Kq.Z(!this.Kq.Fi());},A9t:function(E){if(this.A4w===E)return;
this.A4w=E;this.Vj.Z(E);},_Init:function(aArg){C.Fg._Init.call(this,aArg);C.Vj._Init.
call(this.Vj={I:this},0);C.Kq._Init.call(this.Kq={I:this},0);this.__proto__=C.V$;
this.H(AXG);this.Background.H(AXH);this.G2.Ar(false);this.G2.Z(false);this.Vj.H(
AXI);this.Vj.Z(false);this.Kq.H(AXJ);this.Kq.Z(false);this.J(this.Vj,0);this.J(this.
Kq,0);this.Mn.Aw(A.aaL(A.ach.AM3));},_Done:function(){this.__proto__=C.Fg;this.Vj.
_Done();this.Kq._Done();C.Fg._Done.call(this);},_ReInit:function(){C.Fg._ReInit.
call(this);this.Vj._ReInit();this.Kq._ReInit();},_Mark:function(D){var B;C.Fg._Mark.
call(this,D);if((B=this.Vj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kq)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.Vj={AL:
null,Text:null,Cf:null,Init:function(aArg){this.Text.H(this.M);this.Cf.H(this.M);
this.AL.H(this.M);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AL.
_Init.call(this.AL={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
Cf._Init.call(this.Cf={I:this},0);this.__proto__=C.Vj;this.AL.H(AXK);this.AL.L(A.
jb.Bi9);this.H(AXL);this.Text.H(AXM);this.Text.L(A.jb.Text);this.Cf.H(AXN);this.
Cf.Ne(1);this.Cf.L(A.jb.Text);this.J(this.AL,0);this.J(this.Text,0);this.J(this.
Cf,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.AL._Done();this.Text._Done();this.Cf._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AL._ReInit();this.Text._ReInit(
);this.Cf._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cf)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Kq={QD:null,TT:null,AUH:false,Bnh:function(E){if(this.
AUH===E)return;this.AUH=E;if(E){this.TT.Aw(A.aaL(A.ach.ACj));this.QD.Aw(A.aaL(A.
ach.ACj));}else{this.TT.Aw(A.aaL(A.ach.Aqq));this.QD.Aw(A.aaL(A.ach.Aqq));}},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(this.QD={I:this
},0);A.acg.Am._Init.call(this.TT={I:this},0);this.__proto__=C.Kq;this.H(Ayd);this.
QD.H(Ayd);this.QD.Cu(1);this.TT.H(Ayd);this.TT.Cu(0);this.J(this.QD,0);this.J(this.
TT,0);this.QD.Aw(A.aaL(A.ach.Aqq));this.TT.Aw(A.aaL(A.ach.Aqq));},_Done:function(
){this.__proto__=A.Core.O;this.QD._Done();this.TT._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.QD._ReInit();this.TT._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.QD)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.ARI={F0:null,Cb:null,Dj:null,Dg:null,Kk:null,Zd:10,AqO:0,AEb:0,ARW:0,AyV:false
,LT:false,Bcx:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).Ao.Lg())A._GetAutoObject(A.Device.Device).A_(41,true,A._GetAutoObject(A.Device.
Device).Ao.HF().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gj();A._GetAutoObject(
A.Device.Helper).Ap_(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAo],this.
C_.Q,0);A.zX([this,this.BAd],this.Dj.Q,0);A.zX([this,this.ABb],this.Dg.Q,0);A.zX([
this,this.ABb],this.Dg.HB.Q,0);A.zX([this,this.ABb],[this,this.ASl,this.AFm],0);
A.zX([this,this.GA],[B=A._GetAutoObject(A.Device.Device),B.A9l,B.Bbm],0);A.zX([this
,this.Be2],this.Cb.Q,0);A.pe([this,this.AAo],this);A.pe([this,this.GA],this);A.pe([
this,this.ABb],this);A.pe([this,this.Be2],this);},CB:function(G){if(!this.AyV){this.
AyV=true;A.pe([this,this.AcJ],this);}else C.HW.CB.call(this,G);},Af3:function(G){
this.ARW=this.Zd;this.BcF(this);},Es:function(G){A._GetAutoObject(A.Device.Helper
).W.Hf();A._GetAutoObject(C.A1).Fs();},At8:function(){this.N.B2(A.jV);this.N.C5(
A.aaL(A.ach.ADo));this.N.Cg=[this,this.AyH];},AAj:function(G){A._GetAutoObject(C.
A1).BU(63);},AFm:function(E){if(this.Zd===E)return;this.Zd=E;A.abo([this,this.ASl
,this.AFm],0);},BcF:function(G){var F;if(!this.Zd||(this.Bcx===true)){A._GetAutoObject(
A.Device.Device).A_(24,false,CO,0,null);if(this.AEb===1)A._GetAutoObject(A.Device.
Device).A_(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A_(23,
true,this.AEb.toFixed(),2000,null);this.Es(this);return;}this.F0.Gj();this.F0.Ex(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.F0.NW(A._GetAutoObject(A.Device.
Helper).W.Breed);this.F0.QY(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
F0.JO(A._GetAutoObject(A.Device.Helper).W.Gender);this.F0.Nc(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.F0.Q1(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.F0.Ul(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alg=A._GetAutoObject(
A.Device.Helper).A1g(this.F0,(F=this.Dg.HX.Hm,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Ao);if(!Alg)this.AiR();else{A._GetAutoObject(A.Device.Helper).AJ4(
this.F0,Alg,(F=this.Dg.HX.Hm,F[1].call(F[0])),this.Zd-1,[this,this.Apw]);A._GetAutoObject(
A.Device.Device).A_(24,false,CO,0,null);}},GA:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).AmX())this.C9.Z(true);else this.C9.Z(false);if(this.LT){this.Dj.
Z(false);this.Cb.T(A.aaR(A.acf.ACr));this.Cb.AEP(A.aaL(A.ach.Ae4));}else{this.Dj.
Z(true);this.Cb.T(A.aaR(A.acf.AkT));this.Cb.AEP(null);}if((this.Y.BiH(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JA(this.Y.TK(this.AV,0x1));this.An();
},ASP:function(E){if(this.AqO===E)return;this.AqO=E;A.abo([this,this.A8B,this.ASP
],0);},ABb:function(G){var F;var AJP=(F=this.Dg.Q,F[1].call(F[0]));var Az3=-1;switch((
F=this.Dg.HX.Hm,F[1].call(F[0]))){case 0:Az3=AJP+((F=A._GetAutoObject(A.Device.Helper
).Bdb(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zd-1));break;case 1:Az3=(AJP+this.
Zd)-1;break;case 3:case 2:case 5:case 4:switch(this.Dg.HB.AC.Q){case 0:Az3=(AJP+
this.Zd)-1;break;case 1:Az3=(AJP-this.Zd)+1;break;default:throw new Error(AXO+this.
Dg.HB.AC.Q.toFixed());}break;default:throw new Error(AXP+this.Dg.HB.AC.Q.toFixed(
));}this.ASP(Az3);},BAd:function(G){A.pe([this,this.GA],this);A.pe([this,this.AtR
],this);},AAo:function(G){A._GetAutoObject(A.Device.Helper).AVb(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LT);A.pe([this,this.ABb],this);},Apw:function(G){var F;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case 22:case 21:case 48:if((
At.Id===48)&&(At.PopupState===7))this.Apq();else switch((F=this.Dg.HX.Hm,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JA(this.Dg);break;case 0:this.JA(this.Dj
);break;case 1:this.JA(this.Cb);break;default:throw new Error(Aye+(F=this.Dg.HX.
Hm,F[1].call(F[0])).toFixed());}break;case 25:this.JA(this.Cb);break;case 47:if(
At.PopupState===7)this.Apq();else{this.JA(this.Dg);this.JA(this.Cb);}break;case 43:{
this.JA(this.Dg);this.JA(this.Dj);}break;case 42:{this.JA(this.Dg);this.JA(this.
Cb);}break;case 41:break;default:A.ab5("%s%e",AsU,At.Id);}},AiR:function(){this.
F0.Co(A._GetAutoObject(A.Device.Device).Ao);this.AEb=this.AEb+1;if(A._GetAutoObject(
A.Device.Helper).AmX()){if(A._GetAutoObject(A.Device.Device).Bv.Lg()){A._GetAutoObject(
A.Device.Device).A_(24,false,US,0,null);A._GetAutoObject(A.Device.Device).A_(50,
true,A._GetAutoObject(A.Device.Device).Bv.HF().toFixed(),0,null);}else{var L6=A.
_GetAutoObject(A.Device.Device).Ao.Lb(0,this.F0.Id);A._GetAutoObject(A.Device.Device
).SF(L6);var B1=A._NewObject(A.Device.Rating,0);B1.Gj();B1.OnSetAnimalId(this.F0.
Id);B1.OnSetBodyWeight(this.KG);B1.OnSetTimestamp(this.F0.DateOfBirth);B1.Co(A._GetAutoObject(
A.Device.Device).Bv);}}this.Apq();},Apq:function(){var B;var F,CP;if(!!(F=this.Cb.
Q,F[1].call(F[0]))){(F=this.Cb.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LT)(
CP=this.Dj.Q,CP[2].call(CP[0],(F=this.Cb.Q,F[1].call(F[0]))));}if(!this.LT)(CP=this.
Dj.Q,CP[2].call(CP[0],A._GetAutoObject(A.Device.Helper).A$K(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dj.Q,F[1].call(
F[0])),this.Dj.AjG(),this.Dj.AjI())));var IP=null;switch((F=this.Dg.HX.Hm,F[1].call(
F[0]))){case 3:IP=[B=A._GetAutoObject(A.Device.Device),B.Av4,B.Ayy];break;case 2:
IP=[B=A._GetAutoObject(A.Device.Device),B.Av5,B.Ayz];break;case 4:case 5:IP=[B=A.
_GetAutoObject(A.Device.Device),B.Anj,B.Aos];break;default:;}if(!!IP){switch((F=
this.Dg.Kf.VF,F[1].call(F[0]))){case 1:IP[2].call(IP[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IP[2].call(IP[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dg.Q,F[2].call(F[0],IP[1].call(IP[0])));
}var XA=100-((this.Zd/this.ARW)*100);A._GetAutoObject(A.Device.Device).A_(24,true
,(((this.ARW.toFixed()+AsV)+(XA|0).toFixed())+AsV)+(F=this.Dg.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BAn]);this.AFm(this.Zd-1);A.aaS([this,this.BcF],null);},BAn:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===5))this.Bcx=true;},Apx:function(G){var F;C.HW.Apx.call(this,G);var AoM=
0;switch((F=this.BY.Q,F[1].call(F[0]))){case 0:case 2:AoM=A._GetAutoObject(A.Device.
Device).AdG;break;case 1:AoM=730;break;default:A.ab5("%s%e",Ak5,(F=this.BY.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.QY(A._GetAutoObject(A.Device.
Helper).Ds()-A._GetAutoObject(A.Device.Helper).Amy(AoM));(F=this.C9.Q,F[2].call(
F[0],this.C9.AnP));switch(this.BY.AC.Q){case 0:{this.Kk.KQ(A.aaR(A.acf.AMZ));this.
Kk.Ko(A.aaR(A.acf.AM0));}break;case 1:{this.Kk.KQ(A.aaR(A.acf.Bhz));this.Kk.Ko(A.
aaR(A.acf.BhA));}break;case 2:{this.Kk.KQ(A.aaR(A.acf.Bjv));this.Kk.Ko(A.aaR(A.acf.
Bjw));}break;default:throw new Error(Ak5);}},AeT:function(E){if(this.LT===E)return;
this.LT=E;A.abo([this,this.Av7,this.AeT],0);},AtR:function(G){var F,CP,S5;this.AeT(((
F=this.Cb.Q,F[1].call(F[0]))===(CP=this.Dj.Q,CP[1].call(CP[0])))&&!!(S5=this.Cb.
Q,S5[1].call(S5[0])));A.pe([this,this.GA],this);},Be2:function(G){A.pe([this,this.
AtR],this);},ASl:function(){return this.Zd;},A8B:function(){return this.AqO;},Av7:
function(){return this.LT;},_Init:function(aArg){C.HW._Init.call(this,aArg);C.AvP.
_Init.call(this.Cb={I:this},0);C.Q7._Init.call(this.Dj={I:this},0);C.AGu._Init.call(
this.Dg={I:this},0);C.AUu._Init.call(this.Kk={I:this},0);this.__proto__=C.ARI;var
B;this.Dn(C.AC2);this.Cb.H(Aog);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.AkT));this.
Cb.Arx(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.Ase));this.Cb.Ary(A.
aaR(A.acf.Akc));this.Dj.H(AXQ);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.Uc));this.
Dj.ArM(false);this.Dg.H(AXR);this.Dg.Aj(true);this.Dg.T(A.aaR(A.acf.A6Y));this.Dg.
BC(0);this.Kk.H(AXS);this.Kk.Aj(true);this.Kk.T(A.aaR(A.acf.A76));this.Kk.Gq(1);
this.Kk.E5(500);this.Kk.Ko(A.aaR(A.acf.AM0));this.Kk.KQ(A.aaR(A.acf.AMZ));this.Kk.
A9T(A.aaR(A.acf.AqO)+A.aaR(A.acf.Colon));this.J(this.Cb,0);this.J(this.Dj,0);this.
J(this.Dg,0);this.J(this.Kk,0);this.F0=A._NewObject(A.Device.Animal,0);this.Cb.AR=[
this,this.AcJ];this.Cb.LW([this,this.AcJ]);this.Cb.LZ(A.aaL(A.ach.Ae4));this.Cb.
As([B=A._GetAutoObject(A.Device.Helper).W,B.Ark,B.Q1]);this.Cb.PN([B=A._GetAutoObject(
A.Device.Device),B.AbQ,B.AcH]);this.Cb.QZ([B=A._GetAutoObject(A.Device.Device),B.
AbR,B.AcI]);this.Cb.Ue([B=A._GetAutoObject(A.Device.Device),B.Ang,B.Aor]);this.Cb.
AeT([this,this.Av7,this.AeT]);this.Dj.Gk([this,this.D8,this.GK]);this.Dj.LW([this
,this.AcJ]);this.Dj.LZ(A.aaL(A.ach.Ae4));this.Dj.Ug([B=this.Gender.Animal,B.Wl,B.
JO]);this.Dj.PN([B=A._GetAutoObject(A.Device.Device),B.AbQ,B.AcH]);this.Dj.QZ([B=
A._GetAutoObject(A.Device.Device),B.AbR,B.AcI]);this.Dj.Ue([B=A._GetAutoObject(A.
Device.Device),B.Ang,B.Aor]);this.Dj.As([B=A._GetAutoObject(A.Device.Helper).W,B.
Ank,B.Nc]);this.Dj.Ann([B=this.AnimalType.Animal,B.PM,B.Ex]);this.Dg.Gk([this,this.
D8,this.GK]);this.Dg.LW([B=this.Dg,B.FO]);this.Dg.LZ(A.aaL(A.ach.Edit));this.Dg.
As([B=A._GetAutoObject(A.Device.Helper).W,B.Arl,B.Ul]);this.Dg.A9u(A._GetAutoObject(
A.Device.Helper).W);this.Kk.As([this,this.ASl,this.AFm]);this.Kk.BlV([this,this.
A8B,this.ASP]);this.Init(aArg);},_Done:function(){this.__proto__=C.HW;this.Cb._Done(
);this.Dj._Done();this.Dg._Done();this.Kk._Done();C.HW._Done.call(this);},_ReInit:
function(){C.HW._ReInit.call(this);this.Cb._ReInit();this.Dj._ReInit();this.Dg._ReInit(
);this.Kk._ReInit();this.Cb.T(A.aaR(A.acf.AkT));this.Cb.Arx(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CO)+A.aaR(A.acf.Ase));this.Cb.Ary(A.aaR(A.acf.Akc));this.Dj.T(
A.aaR(A.acf.Uc));this.Dg.T(A.aaR(A.acf.A6Y));this.Kk.T(A.aaR(A.acf.A76));this.Kk.
Ko(A.aaR(A.acf.AM0));this.Kk.KQ(A.aaR(A.acf.AMZ));this.Kk.A9T(A.aaR(A.acf.AqO)+A.
aaR(A.acf.Colon));},_Mark:function(D){var B;C.HW._Mark.call(this,D);if((B=this.F0
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.ATX={BZ:null,RatingMode:null,KP:function(){if(!this.Bz){this.Bz=A._NewObject(
C.N,0);this.Bz.Cg=null;this.Bz.Ck=null;this.Bz.CA=[this,this.Xt];this.Bz.B2(A.jV
);this.Bz.Cq(null);this.Bz.CZ(A.aaL(A.ach.VP));}return this.Bz;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BZ._Init.call(this.BZ={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.ATX;var B;this.
H(Ri);this.BZ.H(AsR);this.BZ.T(A.aaR(A.acf.A$C));this.J(this.BZ,0);this.BZ.As([B=
this.RatingMode,B.B$,B.Ca]);this.BZ.CJ(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BZ._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BZ._ReInit(
);this.RatingMode._ReInit();this.BZ.T(A.aaR(A.acf.A$C));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
BfC],[B=A._GetAutoObject(A.Device.Device),B.ASp,B.AZ3],0);A.pe([this,this.BfC],this
);},Dr:function(){return 2;},Gd:function(aIndex){return this.RatingModeToString.
BO(this.C7(aIndex));},As:function(E){C.CQ.As.call(this,E);A._GetAutoObject(A.Device.
Device).AwR(E);},BfC:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cr.Set(0,0);this.Cr.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.CQ;this.RatingModeToString._Done();C.CQ._Done.call(this
);},_ReInit:function(){C.CQ._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.CQ._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANh={WD:
function(G){C.Ami.WD.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqK()){
A._GetAutoObject(A.Device.Helper).W.Akr(false);A._GetAutoObject(A.Device.Helper).
W.Co(A._GetAutoObject(A.Device.Device).Ao);}},_Init:function(aArg){C.Ami._Init.call(
this,aArg);this.__proto__=C.ANh;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Ha={DI:A.jV,T:function(E){if(this.DI===E)return;this.DI=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.Ha;},_className:"Application::BaseItem"
};C.AVq={BZ:null,WeightRecordingMode:null,KP:function(){if(!this.Bz){this.Bz=A._NewObject(
C.N,0);this.Bz.Cg=null;this.Bz.Ck=null;this.Bz.CA=[this,this.Xt];this.Bz.B2(A.jV
);this.Bz.Cq(null);this.Bz.CZ(A.aaL(A.ach.VP));}return this.Bz;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BZ._Init.call(this.BZ={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVq;var B;this.H(Ri);this.BZ.H(AsR);this.BZ.T(A.aaR(A.acf.AsA));this.BZ.E5(1);
this.J(this.BZ,0);this.BZ.As([B=this.WeightRecordingMode,B.B$,B.Ca]);this.BZ.CJ(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BZ.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BZ._ReInit();this.WeightRecordingMode.
_ReInit();this.BZ.T(A.aaR(A.acf.AsA));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dr:function(){return 2;},Gd:function(aIndex){return this.
WeightRecordingModeToString.BO(this.C7(aIndex));},As:function(E){C.CQ.As.call(this
,E);A._GetAutoObject(A.Device.Device).Aw2(E);},Init:function(aArg){var B;A.zX([this
,this.BgF],[B=A._GetAutoObject(A.Device.Device),B.A9k,B.Bbl],0);A.pe([this,this.
BgF],this);},BgF:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cr.Set(0,0);this.Cr.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.CQ;this.WeightRecordingModeToString.
_Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.CQ._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.AaR={BooleanToAutoOnOff:null,Gd:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BO(aIndex);},_Init:function(aArg){C.FZ._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.AaR;},_Done:function(
){this.__proto__=C.FZ;this.BooleanToAutoOnOff._Done();C.FZ._Done.call(this);},_ReInit:
function(){C.FZ._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.FZ._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxE={A7a:function(){var B;this.
Axj(1);this.Jm(0,3);this.Vt(0,0,(B=this.M)[3]-B[1]);this.A4A(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A4A(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VB(0);},_Init:
function(aArg){C.ABn._Init.call(this,aArg);this.__proto__=C.AxE;},_className:"Application::Triangle"
};C.ATx={Y:null,Init:function(aArg){this.BxC(this);},BxB:function(P6){var Aa=A._NewObject(
C.ANo,0);Aa.H(BF);Aa.T(P6);Aa.Aj(true);Aa.Ar(false);Aa.Bj(true);this.J(Aa,0);this.
Atl(this);},Atl:function(G){var B;var Alo=1;var A2p=0;var X=this.Y.Ah;var Cx=null;
var K4=null;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OS.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cx){var AKZ=(B=Cx.V.B7.A6P(Cx.V.String,0,-1))[2]-B[0
];if(!!(C.Ml.isPrototypeOf(X)?X:null))AKZ=AKZ+20;if(A2p<AKZ)A2p=AKZ;Cx.H(A.abL(Cx.
M,120));Cx.H(A.abI(Cx.M,28));Cx.H(A.abM(Cx.M,this.M[0]));Cx.H(A.abO(Cx.M,((B=this.
M)[3]-B[1])-(Alo*28)));Alo=Alo+1;}else{K4=(A.acg.DQ.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K4){var Df=((B=this.M)[3]-B[1])-((Alo-1)*28);K4.DR([this.
M[0],K4.Ep[1]]);K4.DR([K4.Ep[0],Df]);K4.DE([this.M[0]+120,K4.Ey[1]]);K4.DE([K4.Ey[
0],Df]);}}X=X.Ah;}this.BA5(A2p,28);},BA5:function(aWidth,BwK){var B;var X=this.Y.
Ah;var Cx=null;var K4=null;aWidth=aWidth+20;if(aWidth>(C.Asf[0]-10))aWidth=C.Asf[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.OS.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cx){Cx.V.Text.A8(0x14);Cx.V.Text.Hs(10);Cx.H(A.abL(Cx.M,aWidth
));Cx.H(A.abI(Cx.M,BwK));Cx.H(A.abM(Cx.M,this.M[2]-((B=Cx.M)[2]-B[0])));}else{K4=(
A.acg.DQ.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K4){K4.DR([this.M[
2]-aWidth,K4.Ep[1]]);K4.DE([this.M[2],K4.Ey[1]]);}}X=X.Ah;}},BxC:function(G){var
Aa=A._GetAutoObject(C.BN).Aqz;while(!!Aa){if(!!(C.Aw9.isPrototypeOf(Aa)?Aa:null)
){var EB=(C.Aw9.isPrototypeOf(Aa)?Aa:null);this.BxA(EB.DI,EB.AR,EB.By,EB.AQR);}else
if(!!(C.Aw$.isPrototypeOf(Aa)?Aa:null)){var EB=(C.Aw$.isPrototypeOf(Aa)?Aa:null);
this.BxH(EB.DI,EB.AR,EB.By,EB.Wk,EB.WF);}else if(!!(C.Zo.isPrototypeOf(Aa)?Aa:null
)){var EB=(C.Zo.isPrototypeOf(Aa)?Aa:null);this.Bxz(EB.DI,EB.AR,EB.By);}else if(
!!(C.Akx.isPrototypeOf(Aa)?Aa:null)){var EB=(C.Akx.isPrototypeOf(Aa)?Aa:null);this.
BxB(EB.DI);}else if(!!(C.AFW.isPrototypeOf(Aa)?Aa:null))this.BxI();Aa=Aa.Ms;}A._GetAutoObject(
C.BN).Clear();A.pe([this,this.Atl],this);},Bxz:function(P6,AcS,AhV){var Aa=A._NewObject(
C.Ml,0);Aa.H(BF);Aa.T(P6);Aa.AR=AcS;Aa.Aj(true);Aa.Ar(AhV);Aa.Bj(true);this.J(Aa
,0);this.Atl(this);},BxI:function(){var K4=A._NewObject(A.acg.DQ,0);K4.L(A.jb.Bm
);K4.Aj(true);K4.Ne(3);this.J(K4,0);this.Atl(this);},BxA:function(P6,AcS,AhV,A0A
){var Aa=A._NewObject(C.Amw,0);Aa.H(BF);Aa.T(P6);Aa.AR=AcS;Aa.Aj(true);Aa.Ar(AhV
);Aa.Bj(true);Aa.As(A0A);this.J(Aa,0);this.Atl(this);},BxH:function(P6,AcS,AhV,A2F
,Agb){var Aa=A._NewObject(C.ANn,0);Aa.H(BF);Aa.T(P6);Aa.AR=AcS;Aa.Aj(true);Aa.Ar(
AhV);Aa.Bj(true);Aa.BmU(A2F);Aa.AFA(Agb);this.J(Aa,0);this.Atl(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.ATx;this.H(Ri);this.Y.H(Ri);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Ae9={_Init:
function(){A.acl.Ae9._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_K={Aqz:null,Ag8:null,Nz:function(P6){var EB=A._NewObject(
C.Akx,0);EB.DI=P6;this.J(EB);},Clear:function(){this.Aqz=null;this.Ag8=null;},FA:
function(){var K4=A._NewObject(C.AFW,0);this.J(K4);},J:function(BbY){if(!this.Aqz
){this.Aqz=BbY;this.Ag8=this.Aqz;}else{this.Ag8.Ms=BbY;this.Ag8=this.Ag8.Ms;}},Qu:
function(P6,AcS){var EB=A._NewObject(C.Zo,0);EB.DI=P6;EB.AR=AcS;this.J(EB);},BgO:
function(P6,AcS,A0A){var EB=A._NewObject(C.Aw9,0);EB.DI=P6;EB.AR=AcS;EB.AQR=A0A;
this.J(EB);},XG:function(P6){var EB=A._NewObject(C.Zo,0);EB.DI=P6;EB.By=false;this.
J(EB);},Aur:function(P6,AcS,A2F,Agb){var EB=A._NewObject(C.Aw$,0);EB.DI=P6;EB.AR=
AcS;EB.Wk=A2F;EB.WF=Agb;this.J(EB);},_Init:function(aArg){this.__proto__=C.A_K;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Aqz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BN={_Init:function(){C.A_K._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Aw_={Ms:null,_Init:function(aArg){this.__proto__=
C.Aw_;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Ms)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOo={Amg:null,Arp:function(E){if(this.Amg===
E)return;if(!!this.Ab)this.Ab.Zt(this);if(!!this.Amg)this.Aqr(this.Amg,A._GetAutoObject(
C.Asj),null,null,null,null,false);this.Amg=E;if(!!this.Amg)this.AkB(this.Amg,A._GetAutoObject(
C.Asj),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);this.__proto__=C.AOo;this.H(BF);},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Amg)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.Wu={_Init:function(){C.AOo._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N0={Init:function(aArg){var C2=A._NewObject(C.ATy,0);C2.H(this.M);this.AkB(C2,A.
_GetAutoObject(C.AnM),null,A._GetAutoObject(C.AnM),A._GetAutoObject(C.AnM),null,
null,null,null,false);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.
__proto__=C.N0;this.H(Ri);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Asj={_Init:function(){C.AUw._Init.call(this,0);this.ACp=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ATy={AL:null,_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.ATy;this.H(AHW);this.Do(0);this.AL.A3(0x3F);this.AL.H(AHW);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.O;this.AL.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUv={R7:function(){var B;var Ap=(A.acl.Ae1.isPrototypeOf(B=A.acl.Ad$.R7.call(this
))?B:null);if(!Ap)throw new Error(AsN);Ap.Cn.Cw=255;Ap.Cn.B3=0;return Ap;},R6:function(
){var B;var Ap=(A.acl.Aw8.isPrototypeOf(B=A.acl.Ad$.R6.call(this))?B:null);if(!Ap
)throw new Error(AsN);Ap.EV.Cw=0;Ap.EV.B3=255;Ap.Dq=true;return Ap;},_Init:function(
aArg){A.acl.Ad$._Init.call(this,aArg);this.__proto__=C.AUv;},_className:"Application::ShadeOverlayTransition"
};C.AnM={_Init:function(){C.AUv._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkJ={AnP:0,A1N:false,Init:function(aArg){
},Ai:function(Ae){var F;C.I5.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BCc=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).AkX(BCc)+CO)+A._GetAutoObject(A.acj.DU).AfR()
);else this.BT.R(A.aaR(A.acf.Akc));}},J8:function(G){var B;var BgC=(this.A1N===false
)&&(this.AM<=this.Gi);if(BgC)this.BC(this.AnP);this.A4e(this.AM,4);if(BgC){this.
BC(this.AM-this.AjU);this.A1N=true;}C.I5.J8.call(this,G);},J3:function(G){this.A4e(
this.AM,5);C.I5.J3.call(this,G);},BC:function(E){this.A4e(E,4);E=(((E+((this.AjU
/2)|0))/this.AjU)|0)*this.AjU;if(!E)this.A1N=false;C.I5.BC.call(this,E);},Ahf:function(
E){if(this.AnP===E)return;this.AnP=E;},A4e:function(Bws,Gt){this.ASS(A._GetAutoObject(
A.acj.DU).Bdf(Bws,Gt));},_Init:function(aArg){C.I5._Init.call(this,aArg);this.__proto__=
C.AkJ;this.H(JY);this.AnP=this.Gi;this.JU(this.H0,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BDA={None:0,Left:1,BEc:2,Right:3};C.Aml={Ah8:
null,Fu:null,Eh:null,Background:null,Am_:null,FY:null,KK:A.jV,ADU:null,Init:function(
aArg){var B;A.zV([this,this.AfY],A._GetAutoObject(A.Device.Device).Ao,0);A.zX([this
,this.A3n],[B=A._GetAutoObject(A.Device.Device).Ao,B.Fh,B.Fl],0);A.pe([this,this.
LN],this);A.pe([this,this.A3n],this);this.Bb(this.Eh);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DH(this);},KP:function(){if(!this.Bz)this.Bz=A._NewObject(
C.N,0);return this.Bz;},EY:function(G){C.OverlayMenu.EY.call(this,G);A._GetAutoObject(
A.Device.Device).Ao.Bl(this.Ah8);},CB:function(G){C.OverlayMenu.CB.call(this,G);
this.AKz();},AlQ:function(G){var Aa=(C.ABV.isPrototypeOf(G)?G:null);var Hk;if(!!
Aa)Hk=Aa.Hk;else Hk=this.FY.FF();if(Hk>=A._GetAutoObject(A.Device.Device).Ao.Cd(
))return;A._GetAutoObject(A.Device.Helper).HJ(Hk);A.pe([this,this.Xt],this);},AKz:
function(){},AfY:function(G){this.An();},A3e:function(G){if(this.FY.FF()<(A._GetAutoObject(
A.Device.Device).Ao.Cd()-1))this.FY.G0(this.FY.FF()+1);},A3f:function(G){if(this.
FY.FF()>0)this.FY.G0(this.FY.FF()-1);},DH:function(G){var F$=A._GetAutoObject(A.
Device.Device).Ao.Cd();var MR=this.Bz;if(!MR)return;MR.CZ(A.aaL(A.ach.Aem));MR.CA=[
this,this.Xt];if(F$<=0){MR.Cq(null);MR.C5(null);MR.Ck=null;MR.Cg=null;MR.Zr=false;
MR.Zs=false;}else if(F$===1){MR.Cq(null);MR.C5(A.aaL(A.ach.Aen));MR.Ck=null;MR.Cg=[
this,this.AlQ];MR.Zr=false;MR.Zs=false;}else{MR.Cq(A.aaL(A.ach.AqR));MR.C5(A.aaL(
A.ach.AqY));MR.Ck=[this,this.A3e];MR.Cg=[this,this.A3f];MR.Zr=true;MR.Zs=true;}}
,LN:function(G){this.Bf2(this);this.Ah8=A._GetAutoObject(A.Device.Device).Ao.Filter;
this.AKz();},BmM:function(E){if(this.ADU===E)return;this.ADU=E;A.pe([this,this.BAa
],this);},BAa:function(G){this.Bf2(this);},Bf2:function(G){var B;if(!!this.Fu)this.
HL(this.Fu);this.Fu=(C.Ew.isPrototypeOf(B=A._NewObject(this.ADU,0))?B:null);if(!
!this.Fu){this.Fu.H(AXT);this.J(this.Fu,0);}},A3n:function(G){if(!!A._GetAutoObject(
A.Device.Device).Ao.Filter&&!!A._GetAutoObject(A.Device.Device).Ao.Filter.DN(1,4
))this.FY.Dx(A.aaR(A.acf.ARQ));else this.FY.Dx(this.KK);},Dx:function(E){if(this.
KK===E)return;this.KK=E;A.pe([this,this.A3n],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Eh._Init.call(this.Eh={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Am_={I:this},0);C.FY._Init.call(
this.FY={I:this},0);this.__proto__=C.Aml;this.H(Ri);this.Eh.H(BF);this.Eh.A9W(A.
jb.CU);this.Eh.A9X(A.jb.Text);this.Background.H(E8);this.Background.L(A.jb.Boh);
this.Am_.H(AHX);this.Am_.L(A.jb.CU);this.FY.H(AHX);this.FY.NX(C.ABV);this.ADU=C.
APv;this.KK=A.aaR(A.acf.AvT);this.J(this.Eh,0);this.J(this.Background,0);this.J(
this.Am_,0);this.J(this.FY,0);this.Eh.AR=[this,this.AlQ];this.Eh.AbV(A._NewObject(
C.Yn,0));this.FY.Zi(A._GetAutoObject(A.Device.Device).Ao);this.FY.Zj([this,this.
AlQ]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Eh._Done(
);this.Background._Done();this.Am_._Done();this.FY._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Eh._ReInit();this.
Background._ReInit();this.Am_._ReInit();this.FY._ReInit();this.Dx(A.aaR(A.acf.AvT
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ah8)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Am_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};
C.ABV={AP:null,DS:null,Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(A.abN(
this.V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.DS.Dd(this.V.AQ);},Init:function(aArg){},Ce:function(Ad){if(!this.
AX)return;this.Hk=Ad;if(!!this.AX){this.T(this.AX.CE(Ad,1).toFixed());this.DS.Ex(
this.AX.AmL(Ad,14));this.DS.AER(this.AX.IY(Ad,13));this.DS.AeS(this.AX.HZ(Ad,8));
this.DS.Ui(this.AX.HZ(Ad,11));this.DS.AeV(this.AX.HZ(Ad,12));this.DS.AeX(this.AX.
CE(Ad,5));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL.
_Init.call(this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=
C.ABV;this.H(O0);this.AP.L(A.jb.Bc);this.DS.H(AXU);this.J(this.AP,0);this.J(this.
DS,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.
DS._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.
AP._ReInit();this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::CalfListSmallItem"};C.Yn={Q:null,Init:function(
aArg){var B;this.AAO(this);this.As([B=A._GetAutoObject(A.Device.Device).Ao,B.Fh,
B.Fl]);},AEx:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&
!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fd();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DN(1,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
N3(FilterCriterion);var AiV=this.Akf();if(AiV>0){FilterCriterion=A._NewObject(A.
Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,AiV,false);Filter.
CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeN(false
);},BvS:function(s){this.AEx(s);},AAO:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fd(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DN(1,4))?
B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);(F=this.Q,F[2].call(F[0]
,Filter));}},BF0:function(s){this.AAO(s);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.AcL],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcL],
E,0);if(!!E)A.pe([this,this.AcL],this);},C3:function(G){var B;var F;if(!(F=this.
Q,F[1].call(F[0]))){this.AW.Awz(-1);return;}var AyR=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DN(1,4))?B:null);if(!AyR){this.AW.Awz(
0);this.AW.AeN(true);}else this.AW.Awz(AyR.A5);},AcL:function(s){this.C3(s);},_Init:
function(aArg){C.AjL._Init.call(this,aArg);this.__proto__=C.Yn;this.AW.Awz(0);this.
AW.Dh=[this,this.BvS];this.Init(aArg);},_Mark:function(D){var B;C.AjL._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.Aqu={BirthType:null,EaseOfDelivery:null,Cb:null,Ed:null,Aby:null,GZ:null,Cl:
null,Abw:null,AMH:false,Init:function(aArg){this.AMH=A._GetAutoObject(A.Device.Helper
).W.Aq1();if(this.AMH)this.AeM(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeM(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cb.
LW([this,this.AcJ]);this.Cb.LZ(A.aaL(A.ach.Ae4));this.Cb.AR=[this,this.AcJ];}this.
Ed.ArM(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GA],this.Ed.
Q,0);A.zX([this,this.GA],this.Cb.Q,0);A.pe([this,this.GA],this);},Af3:function(G
){if(((this.Ed.Ar5===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQV(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A_(21,true,A._GetAutoObject(A.Device.Converter).Rc(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Co(
A._GetAutoObject(A.Device.Device).Ao);if(this.KG>0){if(this.AMH){var Ad=A._GetAutoObject(
A.Device.Device).Bv.Lb(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.EH(Ad,A._GetAutoObject(A.Device.
Device).Bv);B1.OnSetBodyWeight(this.KG);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Co(A._GetAutoObject(A.Device.Device).Bv);}else A.ab5("%s%i"
,AXV,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bv.Lg())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bv.HF().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gj();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KG);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Co(
A._GetAutoObject(A.Device.Device).Bv);}}A._GetAutoObject(C.A1).Fs();},Es:function(
G){A._GetAutoObject(A.Device.Helper).W.EH(A._GetAutoObject(A.Device.Helper).W.CK
,A._GetAutoObject(A.Device.Device).Ao);A._GetAutoObject(C.A1).Fs();},At8:function(
){this.N.B2(A.jV);this.N.C5(A.aaL(A.ach.AmU));this.N.Cg=[this,this.AyH];},AAj:function(
G){A._GetAutoObject(C.A1).BU(32);},GA:function(G){var F;var KB=(F=this.Ed.Q,F[1].
call(F[0]));var AA_=(F=this.Cb.Q,F[1].call(F[0]));var A3_=true;if(!!KB&&(AA_===KB
))A3_=false;A._GetAutoObject(A.Device.Helper).L0(this.Cb,A3_);this.Ed.BlN(!A3_);
},_Init:function(aArg){C.HW._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvP._Init.
call(this.Cb={I:this},0);C.Q7._Init.call(this.Ed={I:this},0);C.Acf._Init.call(this.
Aby={I:this},0);C.BZ._Init.call(this.GZ={I:this},0);C.SI._Init.call(this.Cl={I:this
},0);C.BZ._Init.call(this.Abw={I:this},0);this.__proto__=C.Aqu;var B;this.Cb.H(AhP
);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.AkT));this.Cb.Arx(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CO)+A.aaR(A.acf.Ase));this.Cb.Ary(A.aaR(A.acf.Akc));this.Ed.H(AhP);
this.Ed.Aj(true);this.Ed.T(A.aaR(A.acf.Uc));this.Aby.H(AXW);this.Aby.Aj(true);this.
Aby.T(A.aaR(A.acf.GG));this.GZ.H(AhP);this.GZ.Aj(true);this.GZ.T(A.aaR(A.acf.Ara
));this.Cl.H(AhP);this.Cl.Aj(true);this.Cl.T(A.aaR(A.acf.Ad4));this.Cl.AFr(true);
this.Abw.H(AhP);this.Abw.Aj(true);this.Abw.T(A.aaR(A.acf.Agv));this.J(this.Cb,-1
);this.J(this.Ed,-1);this.J(this.Aby,-1);this.J(this.GZ,-1);this.J(this.Cl,-1);this.
J(this.Abw,-1);this.BirthType.LX(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LX(A._GetAutoObject(A.Device.Helper).W);this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Ark,B.Q1]);this.Ed.Gk([this,this.D8,this.GK]);this.Ed.As([B=A._GetAutoObject(
A.Device.Helper).W,B.Ank,B.Nc]);this.Aby.Gk([this,this.D8,this.GK]);this.Aby.As([
B=A._GetAutoObject(A.Device.Helper).W,B.Arl,B.Ul]);this.GZ.As([B=this.BirthType,
B.B$,B.Ca]);this.GZ.CJ(this.BirthType);this.Cl.Gk([this,this.D8,this.GK]);this.Cl.
LW([B=this.Cl,B.FO]);this.Cl.LZ(A.aaL(A.ach.Edit));this.Cl.AbZ([B=A._GetAutoObject(
A.Device.Helper).W,B.Av1,B.QY]);this.Abw.As([B=this.EaseOfDelivery,B.B$,B.Ca]);this.
Abw.CJ(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HW;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cb._Done();this.Ed._Done(
);this.Aby._Done();this.GZ._Done();this.Cl._Done();this.Abw._Done();C.HW._Done.call(
this);},_ReInit:function(){C.HW._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cb._ReInit();this.Ed._ReInit();this.Aby._ReInit();
this.GZ._ReInit();this.Cl._ReInit();this.Abw._ReInit();this.Cb.T(A.aaR(A.acf.AkT
));this.Cb.Arx(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.Ase));this.
Cb.Ary(A.aaR(A.acf.Akc));this.Ed.T(A.aaR(A.acf.Uc));this.Aby.T(A.aaR(A.acf.GG));
this.GZ.T(A.aaR(A.acf.Ara));this.Cl.T(A.aaR(A.acf.Ad4));this.Abw.T(A.aaR(A.acf.Agv
));},_Mark:function(D){var B;C.HW._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GZ)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abw
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acf={FC:null,AW:null,A9:0,IS:function(G){C.Dp.IS.call(this,G);if(!this.A9)this.
FO(this);else this.G8(this);},Ai:function(Ae){C.Dp.Ai.call(this,Ae);this.Hr.Z(false
);this.H0.Z(false);if(this.A9===1){this.Bb(this.AW);if(this.Hd){this.AW.FG(A.jb.
CI);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FG(A.jb.CU);this.
Background.L(A.jb.CI);this.V.L(A.jb.Text);}}else{if(this.Hd)this.AW.FG(A.jb.CI);
else this.AW.FG(A.jb.CU);this.Bb(null);}},BC:function(E){var F;var BR=this.AM;C.
Dp.BC.call(this,E);if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Ud,this.BaZ],0);},DH:function(G){var F;if(!
this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.
EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.
G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;}break;default:this.FC.AkF((F=
this.N,F[1].call(F[0])));}},FO:function(G){this.Et(1);},G8:function(G){this.Et(0
);},Et:function(EK){var F;if(!this.A9)this.FC.Ajr((F=this.N,F[1].call(F[0])));this.
A9=EK;if(this.A9<0)this.A9=0;else if(this.A9>1)this.A9=1;if(this.A9===1)this.AW.
SE(7);this.DH(this);this.An();},_Init:function(aArg){C.Dp._Init.call(this,aArg);
C.AQP._Init.call(this.AW={I:this},0);this.__proto__=C.Acf;this.H(UQ);this.E5(999999
);this.V.R(AsW);this.V.L(A.jb.Bm);this.Hr.Z(false);this.H0.Z(false);this.AW.H(AXX
);this.AW.AS0(6);this.J(this.AW,0);this.AW.As([this,this.Ud,this.BaZ]);this.FC=A.
_NewObject(C.Aeg,0);},_Done:function(){this.__proto__=C.Dp;this.AW._Done();C.Dp.
_Done.call(this);},_ReInit:function(){C.Dp._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Dp._Mark.call(this,D);if((B=this.FC)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dr:function(){return 4;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gd:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BO(aIndex);},DO:function(A7){return A7;},Hp:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.Auw={Y:null,QJ:null,NS:null,Ec:null,PC:null,Pz:null,PA:null,Ay:null,FZ:null,
ReasonOfLeaving:null,Ahn:null,M2:0,AmA:false,ABZ:true,AOh:false,Ar1:false,Init:function(
aArg){A.zX([this,this.A9r],[this,this.A8T,this.AS3],0);this.Ahb(A._GetAutoObject(
A.Device.Helper).W.AhJ(2));this.ReasonOfLeaving.As(this.ReasonOfLeaving.DO(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9r],this);},Dz:function(G){
var B;var E$=0;var X=this.AV;switch(this.Cp.CN){case 6:E$=2;break;case 7:E$=7;break;
case 4:E$=4;break;case 5:E$=5;break;default:;}X=this.QB(X,E$,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HC(X,true,null,null);},AlP:function(G
){A._GetAutoObject(C.A1).Fs();},ApC:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bv.Lg())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.
Device.Device).Bv.HF().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gj();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M2);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Ds());B1.Co(A._GetAutoObject(
A.Device.Device).Bv);}if(this.AmA){A._GetAutoObject(A.Device.Helper).W.Ahe(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A6R(A._GetAutoObject(A.Device.Helper).Ds(),this.Ar1);}A._GetAutoObject(A.Device.
Helper).W.AFq(this.ReasonOfLeaving.C7((F=this.NS.Q,F[1].call(F[0]))));if(this.ABZ
)A._GetAutoObject(A.Device.Helper).W.Q1(0);if(this.Ar1)A._GetAutoObject(A.Device.
Helper).W.AwB(true);A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(A.Device.
Device).Ao);this.A$i();},Fb:function(G){var B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[
1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Bt[1]);},Ahb:function(E){
if(this.M2===E)return;this.M2=E;},Anh:function(){return this.M2;},Be4:function(G
){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;if((At.PopupState===
4)||(At.PopupState===3)){A._GetAutoObject(C.A1).Fs();A._GetAutoObject(A.Device.Helper
).Ar$();}},A9r:function(G){switch(this.Ar1){case false:this.Ec.T(A.aaR(A.acf.AVs
));break;case true:this.Ec.T(A.aaR(A.acf.Bql));break;default:;}},AS3:function(E){
if(this.Ar1===E)return;this.Ar1=E;},A8T:function(){return this.Ar1;},A$i:function(
){A._GetAutoObject(A.Device.Device).A_(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Be4]);},Bmb:function(E){if(this.AOh===E)return;
this.AOh=E;},Bky:function(){return this.AOh;},BlA:function(E){if(this.ABZ===E)return;
this.ABZ=E;},Bkm:function(){return this.ABZ;},BlL:function(E){if(this.AmA===E)return;
this.AmA=E;},Bku:function(){return this.AmA;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afb._Init.call(this.QJ={I:this
},0);C.Asi._Init.call(this.NS={I:this},0);C.AkJ._Init.call(this.Ec={I:this},0);C.
Afb._Init.call(this.PC={I:this},0);C.Afb._Init.call(this.Pz={I:this},0);C.Afb._Init.
call(this.PA={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.FZ._Init.call(this.
FZ={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahn._Init.call(this.Ahn={I:this},0);this.__proto__=C.Auw;var B;this.N.Z(true);this.
N.B2(A.aaR(A.acf.Unregister));this.Dn(C.IE);this.Y.H(E8);this.Y.JN(1);this.QJ.H(
Z8);this.QJ.Aj(true);this.QJ.T(A.aaR(A.acf.AmA));this.QJ.Bj(true);this.QJ.Zm(false
);this.QJ.Gq(-1);this.QJ.E5(1);this.NS.H(W7);this.NS.Aj(true);this.NS.T(A.aaR(A.
acf.ReasonOfLeaving));this.NS.Bj(true);this.NS.Zm(false);this.Ec.H(AhO);this.Ec.
Aj(true);this.Ec.T(A.aaR(A.acf.AVs));this.Ec.Bj(false);this.Ec.Gq(1000);this.Ec.
E5(999000);this.PC.H(W7);this.PC.Aj(true);this.PC.T(A.aaR(A.acf.A4L));this.PC.Bj(
true);this.PC.Zm(false);this.PC.BC(1);this.PC.Gq(-1);this.PC.E5(1);this.Pz.H(Z8);
this.Pz.Aj(true);this.Pz.T(A.aaR(A.acf.A4M));this.Pz.Bj(true);this.Pz.Zm(false);
this.Pz.BC(1);this.Pz.Gq(-1);this.Pz.E5(1);this.PA.H(W7);this.PA.Aj(true);this.PA.
T(A.aaR(A.acf.A5y));this.PA.Bj(true);this.PA.Zm(false);this.PA.BC(1);this.PA.Gq(-
1);this.PA.E5(1);this.Ay.H(Ax6);this.FZ.As(0);this.J(this.Y,0);this.J(this.QJ,0);
this.J(this.NS,0);this.J(this.Ec,0);this.J(this.PC,0);this.J(this.Pz,0);this.J(this.
PA,0);this.J(this.Ay,0);this.N.CZ(A.aaL(A.ach.EX));this.Y.Ej=[this,this.Fb];this.
QJ.As([B=this.FZ,B.B$,B.Ca]);this.QJ.CJ(this.FZ);this.QJ.Aks([this,this.Bku,this.
BlL]);this.NS.Gk([this,this.D8,this.GK]);this.NS.LW([B=this.NS,B.FO]);this.NS.LZ(
A.aaL(A.ach.Edit));this.NS.As([B=this.ReasonOfLeaving,B.B$,B.Ca]);this.NS.CJ(this.
ReasonOfLeaving);this.NS.Anp(this.Ahn);this.Ec.As([this,this.Anh,this.Ahb]);this.
PC.As([B=this.FZ,B.B$,B.Ca]);this.PC.CJ(this.FZ);this.PC.Aks([this,this.Bky,this.
Bmb]);this.Pz.As([B=this.FZ,B.B$,B.Ca]);this.Pz.CJ(this.FZ);this.Pz.Aks([this,this.
A8T,this.AS3]);this.PA.As([B=this.FZ,B.B$,B.Ca]);this.PA.CJ(this.FZ);this.PA.Aks([
this,this.Bkm,this.BlA]);this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Y._Done();this.QJ._Done();this.NS._Done();this.Ec._Done();this.PC._Done();this.
Pz._Done();this.PA._Done();this.Ay._Done();this.FZ._Done();this.ReasonOfLeaving.
_Done();this.Ahn._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QJ._ReInit();this.NS._ReInit();this.Ec._ReInit(
);this.PC._ReInit();this.Pz._ReInit();this.PA._ReInit();this.Ay._ReInit();this.FZ.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahn._ReInit();this.N.B2(A.aaR(A.acf.
Unregister));this.QJ.T(A.aaR(A.acf.AmA));this.NS.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ec.T(A.aaR(A.acf.AVs));this.PC.T(A.aaR(A.acf.A4L));this.Pz.T(A.aaR(A.acf.A4M
));this.PA.T(A.aaR(A.acf.A5y));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ec)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahn)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUu={AjE:null,Ps:null,AuX:AXY,Bk:function(aSize){C.I5.Bk.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Hr.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H0.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.I5.Ai.call(this,Ae);this.Ps.L(this.V.AQ);if(!!this.AjE){if((
F=this.AjE,F[1].call(F[0]))===-1)this.Ps.R(this.AuX+AHY);else this.Ps.R((this.AuX+
CO)+(F=this.AjE,F[1].call(F[0])).toFixed());}else this.Ps.R(this.AuX);},A2Y:function(
G){this.An();},BlV:function(E){if(A.aaZ(this.AjE,E))return;if(!!this.AjE)A.z$([this
,this.A2Y],this.AjE,0);this.AjE=E;if(!!E)A.zX([this,this.A2Y],E,0);if(!!E)A.pe([
this,this.A2Y],this);},A9T:function(E){if(this.AuX===E)return;this.AuX=E;this.An(
);},_Init:function(aArg){C.I5._Init.call(this,aArg);C.CG._Init.call(this.Ps={I:this
},0);this.__proto__=C.AUu;this.H(AXZ);this.V.H(AX0);this.V.A8(0x12);this.Ps.H(AX1
);this.Ps.A8(0x12);this.Ps.L(A.jb.Bm);this.J(this.Ps,0);this.Ps.S(A.aaL(A.fl.Af)
);this.Ps.A2(A.aaL(A.fl.Ak));this.Ps.Ct(null);},_Done:function(){this.__proto__=
C.I5;this.Ps._Done();C.I5._Done.call(this);},_ReInit:function(){C.I5._ReInit.call(
this);this.Ps._ReInit();this.Ps.S(A.aaL(A.fl.Af));this.Ps.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.I5._Mark.call(this,D);if((B=this.AjE)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AL0={Y:null,JJ:null,Sm:null,Ay:null,Aqj:2500,ANd:24,Dz:function(G){var B;var
E$=0;var X=this.AV;switch(this.Cp.CN){case 6:E$=2;break;case 7:E$=7;break;case 4:
E$=4;break;case 5:E$=5;break;default:;}X=this.QB(X,E$,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HC(X,true,null,null);},AlP:function(G){A._GetAutoObject(
C.A1).Fs();},ApC:function(G){},Fb:function(G){var B;this.Ay.Mu((B=this.Y.Da(0x1)
)[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Bt[1]);},BlE:function(
E){if(this.Aqj===E)return;this.Aqj=E;},Bko:function(){return this.Aqj;},BlF:function(
E){if(this.ANd===E)return;this.ANd=E;},Bkp:function(){return this.ANd;},Bkd:function(
G){var F,CP;this.JJ.BT.L(this.JJ.V.AQ);if(!!this.JJ.Q)this.JJ.BT.R((((String.fromCharCode(((
F=this.JJ.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Afq)+String.fromCharCode(((
CP=this.JJ.Q,CP[1].call(CP[0]))+10000).toFixed().charCodeAt(2)||0))+CO)+this.JJ.
AGX);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.I5._Init.call(this.JJ={I:this},0);C.I5._Init.call(this.Sm={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AL0;this.N.Z(true);this.
Dn(C.IE);this.Y.H(E8);this.Y.JN(1);this.JJ.H(AhO);this.JJ.Aj(true);this.JJ.T(A.aaR(
A.acf.Aqj));this.JJ.Bj(false);this.JJ.Gq(0);this.JJ.E5(5000);this.JJ.Ko(A.aaR(A.
acf.AfU));this.JJ.KQ(A.aaR(A.acf.AfU));this.JJ.ASS(100);this.Sm.H(W7);this.Sm.Aj(
true);this.Sm.T(A.aaR(A.acf.A_T));this.Sm.Bj(true);this.Sm.BC(24);this.Sm.Gq(10);
this.Sm.E5(33);this.Sm.Ko(AX2);this.Ay.H(Ax6);this.J(this.Y,0);this.J(this.JJ,0);
this.J(this.Sm,0);this.J(this.Ay,0);this.N.CZ(A.aaL(A.ach.VP));this.Y.Ej=[this,this.
Fb];this.JJ.As([this,this.Bko,this.BlE]);this.JJ.A_q([this,this.Bkd]);this.Sm.As([
this,this.Bkp,this.BlF]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JJ._Done();this.Sm._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JJ._ReInit();this.Sm._ReInit();this.
Ay._ReInit();this.JJ.T(A.aaR(A.acf.Aqj));this.JJ.Ko(A.aaR(A.acf.AfU));this.JJ.KQ(
A.aaR(A.acf.AfU));this.Sm.T(A.aaR(A.acf.A_T));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Arc={EaseOfDelivery:null,BirthType:null,Cb:null,Dj:null,Dg:null,Cl:null,Ec:null
,GZ:null,Lh:null,M2:0,LT:false,Init:function(aArg){A.zX([this,this.GA],this.Cb.Q
,0);A.zX([this,this.GA],this.Dj.Q,0);A.zX([this,this.AAo],this.C_.Q,0);A.zX([this
,this.BeB],this.Cl.Di,0);A.zX([this,this.Bev],this.C9.Q,0);A.zX([this,this.AtR],
this.Cb.Q,0);A.zX([this,this.AtR],this.Dj.Q,0);A.pe([this,this.AAo],this);A.pe([
this,this.GA],this);A.pe([this,this.BeB],this);A.pe([this,this.Bev],this);A.pe([
this,this.AtR],this);},Es:function(G){A._GetAutoObject(A.Device.Helper).W.Hf();A.
_GetAutoObject(C.A1).Fs();},Af3:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.Ex((F=this.BY.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).Aht
){var AlA=A._GetAutoObject(A.Device.Helper).Aht.AOH();A._GetAutoObject(A.Device.
Helper).W.AbW(AlA);A._GetAutoObject(A.Device.Helper).W.Anu(AlA);}var Alg=A._GetAutoObject(
A.Device.Helper).A1g(A._GetAutoObject(A.Device.Helper).W,(F=this.Dg.HX.Hm,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).Ao);if(!Alg){this.AiR();A.pe([this,this.
Bwe],this);}else A._GetAutoObject(A.Device.Helper).AJ4(A._GetAutoObject(A.Device.
Helper).W,Alg,(F=this.Dg.HX.Hm,F[1].call(F[0])),0,[this,this.Apw]);},At8:function(
){this.N.B2(A.jV);this.N.C5(A.aaL(A.ach.ADz));this.N.Cg=[this,this.AyH];},AiR:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(A.Device.Device
).Ao);var L6=A._GetAutoObject(A.Device.Device).Ao.Lb(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SF(L6);var Bdv=false;if(A._GetAutoObject(
A.Device.Helper).AmX()){if(A._GetAutoObject(A.Device.Device).Bv.Lg()){Bdv=true;A.
_GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bv.
HF().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gj();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KG);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Co(A._GetAutoObject(A.Device.
Device).Bv);}}if(A._GetAutoObject(A.Device.Helper).A7g()&&(Bdv===false)){if(A._GetAutoObject(
A.Device.Device).Bv.Lg())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bv.HF().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gj();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M2);B1.Co(A._GetAutoObject(A.Device.Device).Bv);}}var IP=null;switch((F=this.
Dg.HX.Hm,F[1].call(F[0]))){case 3:IP=[B=A._GetAutoObject(A.Device.Device),B.Av4,
B.Ayy];break;case 2:IP=[B=A._GetAutoObject(A.Device.Device),B.Av5,B.Ayz];break;case
4:case 5:IP=[B=A._GetAutoObject(A.Device.Device),B.Anj,B.Aos];break;default:;}if(
!!IP)switch((F=this.Dg.Kf.VF,F[1].call(F[0]))){case 1:IP[2].call(IP[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IP[2].call(IP[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}if(!!(F=this.Dj.Q,F[1].call(F[0])))
A._GetAutoObject(A.Device.Helper).A$K(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.Gender.Animal.Gender,(F=this.Dj.Q,F[1].call(F[0])),this.Dj.AjG(),this.Dj.AjI(
));},ApW:function(G){A._GetAutoObject(C.A1).Fs();},Bwe:function(s){this.ApW(s);}
,AAj:function(G){A._GetAutoObject(C.A1).BU(55);},Ahb:function(E){if(this.M2===E)
return;this.M2=E;A.abo([this,this.Anh,this.Ahb],0);},GA:function(G){if(A._GetAutoObject(
A.Device.Helper).AmX())this.C9.Z(true);else this.C9.Z(false);if(A._GetAutoObject(
A.Device.Helper).A7g())this.Ec.Z(true);else this.Ec.Z(false);if(this.LT){this.Dj.
Z(false);this.Cb.T(A.aaR(A.acf.ACr));this.Cb.AEP(A.aaL(A.ach.Ae4));}else{this.Dj.
Z(true);this.Cb.T(A.aaR(A.acf.AkT));this.Cb.AEP(null);}},AAo:function(G){A._GetAutoObject(
A.Device.Helper).AVb(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.LT);},BeB:function(G){A.pe([this,this.Bgq],this
);},Bev:function(G){A.pe([this,this.Bgq],this);},Bgq:function(G){var F,CP,S5;switch(
A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.Ec.Ahf(A._GetAutoObject(
A.Device.Helper).AhJ(A._GetAutoObject(A.Device.Helper).Abf((F=this.BY.Q,F[1].call(
F[0]))),(CP=this.Cl.Di,CP[1].call(CP[0])),2,(S5=this.BY.Q,S5[1].call(S5[0]))));break;
case 2:this.Ec.Ahf(A._GetAutoObject(A.Device.Helper).AhJ(this.KG,(F=this.Cl.Di,F[
1].call(F[0])),2,(CP=this.BY.Q,CP[1].call(CP[0]))));break;default:;}},Apw:function(
G){var F;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(
At.Id){case 22:case 21:switch((F=this.Dg.HX.Hm,F[1].call(F[0]))){case 3:case 2:case
5:case 4:this.JA(this.Dg);break;case 0:this.JA(this.Dj);break;case 1:this.JA(this.
Cb);break;default:throw new Error(Aye+(F=this.Dg.HX.Hm,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JA(this.Dg);this.JA(this.Dj);}break;case 25:case 42:{this.
JA(this.Dg);this.JA(this.Cb);}break;case 41:break;default:A.ab5("%s%e",AsU,At.Id
);}},Apx:function(G){var F;C.HW.Apx.call(this,G);var AoM=0;switch((F=this.BY.Q,F[
1].call(F[0]))){case 0:case 2:AoM=A._GetAutoObject(A.Device.Device).AdG;break;case
1:AoM=730;break;default:A.ab5("%s%e",Ak5,(F=this.BY.Q,F[1].call(F[0])));}(F=this.
Cl.Di,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Ds()-A._GetAutoObject(A.Device.
Helper).Amy(AoM)));(F=this.C9.Q,F[2].call(F[0],this.C9.AnP));this.Ec.Ahf(A._GetAutoObject(
A.Device.Helper).W.AhJ(1));},AeT:function(E){if(this.LT===E)return;this.LT=E;A.abo([
this,this.Av7,this.AeT],0);},AtR:function(G){var F,CP,S5;this.AeT(((F=this.Cb.Q,
F[1].call(F[0]))===(CP=this.Dj.Q,CP[1].call(CP[0])))&&!!(S5=this.Cb.Q,S5[1].call(
S5[0])));A.pe([this,this.GA],this);},Anh:function(){return this.M2;},Av7:function(
){return this.LT;},_Init:function(aArg){C.HW._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AvP._Init.call(this.Cb={I:this},0);C.Q7._Init.call(this.Dj={I:this}
,0);C.AGu._Init.call(this.Dg={I:this},0);C.SI._Init.call(this.Cl={I:this},0);C.AkJ.
_Init.call(this.Ec={I:this},0);C.BZ._Init.call(this.GZ={I:this},0);C.BZ._Init.call(
this.Lh={I:this},0);this.__proto__=C.Arc;var B;this.Dn(C.AC1);this.CF.H(AcG);this.
Cb.H(Aog);this.Cb.Aj(true);this.Cb.T(A.aaR(A.acf.AkT));this.Cb.Arx(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.Ase));this.Cb.Ary(A.aaR(A.acf.Akc));this.
Dj.H(Aog);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.Uc));this.Dj.ArM(false);this.Dg.
H(AX3);this.Dg.Aj(true);this.Dg.T(A.aaR(A.acf.GG));this.Dg.BC(0);this.Cl.H(AcG);
this.Cl.Aj(true);this.Cl.T(A.aaR(A.acf.Ad4));this.Cl.AFr(true);this.Ec.H(AcG);this.
Ec.Aj(true);this.Ec.T(A.aaR(A.acf.M2));this.Ec.Gq(1000);this.Ec.E5(999000);this.
GZ.H(AcG);this.GZ.Aj(true);this.GZ.T(A.aaR(A.acf.Ara));this.Lh.H(AcG);this.Lh.Aj(
true);this.Lh.T(A.aaR(A.acf.Agv));this.J(this.Cb,-3);this.J(this.Dj,-3);this.J(this.
Dg,-3);this.J(this.Cl,-3);this.J(this.Ec,-2);this.J(this.GZ,-1);this.J(this.Lh,-
1);this.EaseOfDelivery.LX(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LX(
A._GetAutoObject(A.Device.Helper).W);this.Cb.AR=[this,this.AcJ];this.Cb.LW([this
,this.AcJ]);this.Cb.LZ(A.aaL(A.ach.Ae4));this.Cb.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Ark,B.Q1]);this.Cb.PN([B=A._GetAutoObject(A.Device.Device),B.AbQ,B.AcH
]);this.Cb.QZ([B=A._GetAutoObject(A.Device.Device),B.AbR,B.AcI]);this.Cb.Ue([B=A.
_GetAutoObject(A.Device.Device),B.Ang,B.Aor]);this.Cb.AeT([this,this.Av7,this.AeT
]);this.Dj.Gk([this,this.D8,this.GK]);this.Dj.LW([this,this.AcJ]);this.Dj.LZ(A.aaL(
A.ach.Ae4));this.Dj.Ug([B=this.Gender.Animal,B.Wl,B.JO]);this.Dj.PN([B=A._GetAutoObject(
A.Device.Device),B.AbQ,B.AcH]);this.Dj.QZ([B=A._GetAutoObject(A.Device.Device),B.
AbR,B.AcI]);this.Dj.Ue([B=A._GetAutoObject(A.Device.Device),B.Ang,B.Aor]);this.Dj.
As([B=A._GetAutoObject(A.Device.Helper).W,B.Ank,B.Nc]);this.Dj.Ann([B=this.AnimalType.
Animal,B.PM,B.Ex]);this.Dg.Gk([this,this.D8,this.GK]);this.Dg.LW([B=this.Dg,B.FO
]);this.Dg.LZ(A.aaL(A.ach.Edit));this.Dg.As([B=A._GetAutoObject(A.Device.Helper).
W,B.Arl,B.Ul]);this.Dg.A9u(A._GetAutoObject(A.Device.Helper).W);this.Cl.Gk([this
,this.D8,this.GK]);this.Cl.LW([B=this.Cl,B.FO]);this.Cl.LZ(A.aaL(A.ach.Edit));this.
Cl.AbZ([B=A._GetAutoObject(A.Device.Helper).W,B.Av1,B.QY]);this.Ec.As([this,this.
Anh,this.Ahb]);this.GZ.As([B=this.BirthType,B.B$,B.Ca]);this.GZ.CJ(this.BirthType
);this.Lh.As([B=this.EaseOfDelivery,B.B$,B.Ca]);this.Lh.CJ(this.EaseOfDelivery);
this.Init(aArg);},_Done:function(){this.__proto__=C.HW;this.EaseOfDelivery._Done(
);this.BirthType._Done();this.Cb._Done();this.Dj._Done();this.Dg._Done();this.Cl.
_Done();this.Ec._Done();this.GZ._Done();this.Lh._Done();C.HW._Done.call(this);},
_ReInit:function(){C.HW._ReInit.call(this);this.EaseOfDelivery._ReInit();this.BirthType.
_ReInit();this.Cb._ReInit();this.Dj._ReInit();this.Dg._ReInit();this.Cl._ReInit(
);this.Ec._ReInit();this.GZ._ReInit();this.Lh._ReInit();this.Cb.T(A.aaR(A.acf.AkT
));this.Cb.Arx(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.Ase));this.
Cb.Ary(A.aaR(A.acf.Akc));this.Dj.T(A.aaR(A.acf.Uc));this.Dg.T(A.aaR(A.acf.GG));this.
Cl.T(A.aaR(A.acf.Ad4));this.Ec.T(A.aaR(A.acf.M2));this.GZ.T(A.aaR(A.acf.Ara));this.
Lh.T(A.aaR(A.acf.Agv));},_Mark:function(D){var B;C.HW._Mark.call(this,D);if((B=this.
EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lh)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalTransponderDataScreen"};C.AG5={H3:null,Ahy:
null,AgF:null,Ahz:null,AgG:null,AnimalType:null,Background:null,NU:null,Re:null,
V:null,TO:null,Yt:null,Abt:null,PL:null,DI:A.jV,AGw:true,CS:function(){this.An();
},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.An0();this.AxF();},An0:function(
){var F,CP;var LC=0;var Al5=0;var Alt=0;var H9=0;if((((!!this.Ahy&&!!this.Ahz)&&
!!this.AgF)&&!!this.AgG)&&!!this.AnimalType){Al5=(F=this.Ahy,F[1].call(F[0]));Alt=(
F=this.AgF,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper).MN((F=this.Ahz,
F[1].call(F[0])),(CP=this.AgG,CP[1].call(CP[0])));H9=(F=this.AnimalType,F[1].call(
F[0]));}var K6=A.jb.Text;var AyZ=A.jb.CU;if(!!LC){var ALg=A._GetAutoObject(A.acj.
DU).Aln(LC,Al5,Alt);AyZ=A._GetAutoObject(A.acj.DU).AzE(ALg,H9);K6=A._GetAutoObject(
A.acj.DU).AzG(ALg,H9);}this.Background.L(AyZ);this.TO.L(K6);this.Re.L(K6);this.NU.
L(K6);this.Abt.L(K6);if(K6===A.jb.Bm)this.Yt.L(K6);else this.Yt.L(A.jb.CI);this.
V.L(K6);this.PL.L(K6);},AxF:function(){var F,CP;var LC=0;var Al5=0;var Alt=0;if(((
!!this.Ahy&&!!this.Ahz)&&!!this.AgF)&&!!this.AgG){Al5=(F=this.Ahy,F[1].call(F[0]
));Alt=(F=this.AgF,F[1].call(F[0]));LC=A._GetAutoObject(A.Device.Helper).MN((F=this.
Ahz,F[1].call(F[0])),(CP=this.AgG,CP[1].call(CP[0])));}if(!!LC){var ALg=A._GetAutoObject(
A.acj.DU).Aln(LC,Al5,Alt);this.Re.R(A._GetAutoObject(A.Device.Converter).S0(ALg,
2,true));this.NU.Z(true);this.Re.Z(true);this.PL.Z(false);}else{this.NU.Z(false);
this.Re.Z(false);this.PL.Z(true);}this.TO.R(this.ByS(Alt-Al5,LC));this.Abt.Z(this.
AGw);this.Yt.Z(this.AGw);this.NU.R(A._GetAutoObject(A.acj.DU).Aan());},ByS:function(
A0V,AhW){var B;if(AhW<0){A.ab5("%s",AX4);return A.jV;}var Ir=(AX5+A._GetAutoObject(
A.acj.DU).AfR())+CO;var FP=A._GetAutoObject(A.Device.Converter).AkX(A0V);if(!A0V
)FP=A.abU(FP,AX6,0);else if(A0V>0)FP=A.abU(FP,AHZ,0);Ir=this.BfK(Ir,AX7,FP);if(AhW===
1)Ir=Ir+A.aaR(A.acf.Bi4);else{Ir=Ir+A.aaR(A.acf.Bi5);Ir=this.BfK(Ir,AX8,AhW.toFixed(
));}return Ir;},BfK:function(aString,Bb2,Bxf){if(aString===A.jV){A.ab5("%s",AX9);
return A.jV;}var A2D=aString.indexOf(Bb2,0);if(A2D>=0){aString=A.ab1(aString,A2D
,Bb2.length);aString=A.abU(aString,Bxf,A2D);}return aString;},ATh:function(E){if(
A.aaZ(this.Ahy,E))return;if(!!this.Ahy)A.z$([this,this.C3],this.Ahy,0);this.Ahy=
E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},BlS:function(
E){if(A.aaZ(this.AgF,E))return;if(!!this.AgF)A.z$([this,this.C3],this.AgF,0);this.
AgF=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},ATi:function(
E){if(A.aaZ(this.Ahz,E))return;if(!!this.Ahz)A.z$([this,this.C3],this.Ahz,0);this.
Ahz=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},BlT:function(
E){if(A.aaZ(this.AgG,E))return;if(!!this.AgG)A.z$([this,this.C3],this.AgG,0);this.
AgG=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},C3:function(
G){this.An();},T:function(E){if(this.DI===E)return;this.DI=E;this.V.R(E);},A_p:function(
E){if(this.AGw===E)return;this.AGw=E;this.An();},Ex:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C3],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.NU={I:this},0);A.acg.Text._Init.call(this.Re={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.TO={I:this},0);A.acg.
Am._Init.call(this.Yt={I:this},0);A.acg.Am._Init.call(this.Abt={I:this},0);C.CG.
_Init.call(this.PL={I:this},0);this.__proto__=C.AG5;this.H(Afs);this.Background.
A3(0x3F);this.Background.H(Afs);this.NU.H(AX_);this.NU.R(A._GetAutoObject(A.acj.
DU).Aan());this.NU.A8(0x9);this.NU.L(A.jb.Text);this.Re.H(AX$);this.Re.A8(0x14);
this.Re.R(A.aaR(A.acu.Aka));this.Re.L(A.jb.Text);this.V.A3(0x1D);this.V.H(AYa);this.
V.R(A.aaR(A.acf.Aum));this.V.A8(0x12);this.V.L(A.jb.Text);this.TO.H(Z7);this.Yt.
A3(0x14);this.Yt.H(AH0);this.Yt.Cu(1);this.Abt.A3(0x14);this.Abt.H(AH0);this.Abt.
Cu(0);this.PL.H(AYb);this.PL.R(A.aaR(A.acf.A4t));this.J(this.Background,0);this.
J(this.NU,0);this.J(this.Re,0);this.J(this.V,0);this.J(this.TO,0);this.J(this.Yt
,0);this.J(this.Abt,0);this.J(this.PL,0);this.NU.S(A.aaL(A.fl.EG));this.NU.A2(A.
aaL(A.fl.Af));this.NU.Ct(A.aaL(A.fl.Ih));this.Re.S(A.aaL(A.fl.Aef));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.aaL(A.fl.Bi));this.TO.S(A.aaL(A.
fl.Af));this.TO.A2(A.aaL(A.fl.Ak));this.TO.Ct(A.aaL(A.fl.Bi));this.Yt.Aw(A.aaL(A.
ach.ABx));this.Abt.Aw(A.aaL(A.ach.ABx));this.H3=A._NewObject(A.Device.Rating,0);
this.PL.S(A.aaL(A.fl.Af));this.PL.A2(A.aaL(A.fl.Ak));this.PL.Ct(A.aaL(A.fl.Bi));
},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.NU._Done(
);this.Re._Done();this.V._Done();this.TO._Done();this.Yt._Done();this.Abt._Done(
);this.PL._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Background._ReInit();this.NU._ReInit();this.Re._ReInit();this.V.
_ReInit();this.TO._ReInit();this.Yt._ReInit();this.Abt._ReInit();this.PL._ReInit(
);this.Re.R(A.aaR(A.acu.Aka));this.V.R(A.aaR(A.acf.Aum));this.PL.R(A.aaR(A.acf.A4t
));this.NU.S(A.aaL(A.fl.EG));this.NU.A2(A.aaL(A.fl.Af));this.NU.Ct(A.aaL(A.fl.Ih
));this.Re.S(A.aaL(A.fl.Aef));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Ct(A.aaL(A.fl.Bi));this.TO.S(A.aaL(A.fl.Af));this.TO.A2(A.aaL(A.fl.Ak));this.
TO.Ct(A.aaL(A.fl.Bi));this.PL.S(A.aaL(A.fl.Af));this.PL.A2(A.aaL(A.fl.Ak));this.
PL.Ct(A.aaL(A.fl.Bi));this.CS();},_Mark:function(D){var B;A.Core.O._Mark.call(this
,D);if((B=this.H3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahy)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ahz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgG)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Re)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVt={Animal:null,Rating:null,Cp:null,AD:null,AY:
0,He:function(G){var B;if(!this.Animal||!this.Rating)return;var F_=this.AD.GY;var
Cz=(C.AG5.isPrototypeOf(B=this.AD.Ch)?B:null);if(!Cz)return;Cz.Ex([B=this.Animal
,B.PM,B.Ex]);Cz.BlS([B=A._GetAutoObject(A.Device.Device),B.AEv,B.AIE]);Cz.BlT([B=
this.Rating,B.A8_,B.OnSetTimestamp]);switch(F_%this.AY){case 1:{Cz.ATh([B=this.Animal
,B.A8J,B.AE9]);Cz.ATi([B=this.Animal,B.A8$,B.AFC]);Cz.T(A.aaR(A.acf.Aum));}break;
default:if(this.Animal.Aq1()){Cz.ATh([B=this.Animal,B.ASc,B.Aww]);Cz.ATi([B=this.
Animal,B.ASt,B.AwY]);Cz.T(A.aaR(A.acf.ALE));}else{Cz.ATh([B=this.Animal,B.ASc,B.
Aww]);Cz.ATi([B=this.Animal,B.ASt,B.AwY]);Cz.T(A.aaR(A.acf.BgJ));}}if(this.AY>1)
Cz.A_p(true);else Cz.A_p(false);Cz.H(A.abK(Cz.M,[(B=this.AD.M)[2]-B[0],this.AD.GH
]));},Dz:function(G){if(this.AY>0)switch(this.Cp.CN){case 6:this.CA(this);break;
case 7:this.Cg(this);break;default:this.Cp.NE=true;}},LX:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jr(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jr(1);else{this.Jr(2);this.AD.G0(1);this.
AD.HC(this.AD.Gl,true,null,null);}if(this.AY>0)this.AD.Abv(0,this.AY-1);},Akt:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.Abv(0,this.AY-1);
},CA:function(G){if(this.AD.Gl>0)this.AD.G0(this.AD.Gl-1);else this.AD.G0(this.AY-
1);this.AD.HC(this.AD.Gl,true,null,null);},Cg:function(G){if(this.AD.Gl<(this.AY-
1))this.AD.G0(this.AD.Gl+1);else this.AD.G0(0);this.AD.HC(this.AD.Gl,true,null,null
);},Jr:function(E){if(this.AY===E)return;this.AY=E;this.AD.Jr(this.AY);A.abo([this
,this.Arh,this.Jr],0);},Arh:function(){return this.AY;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BL._Init.call(this.Cp={I:this},0);A.Core.CL._Init.
call(this.AD={I:this},0);this.__proto__=C.AVt;this.H(Afs);this.Cp.Filter=147;this.
AD.A3(0x3F);this.AD.H(Afs);this.AD.NX(C.AG5);this.AD.AeW(160);this.AD.G0(0);this.
AD.Jr(2);this.J(this.AD,0);this.Cp.BM=[this,this.Dz];this.Cp.DZ=[this,this.Dz];this.
AD.He=[this,this.He];},_Done:function(){this.__proto__=A.Core.O;this.Cp._Done();
this.AD._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Cp._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Ee={Init:function(aArg){},Bk:function(aSize){C.Cm.Bk.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Cm.Ai.call(this,Ae);var G9=((Ae&0x10)===0x10);var Fo=((
Ae&0x20)===0x20);var Gx=this.Bo.By;var FK=A.jb.CI;var GN=A.jb.Text;if(this.Hd){FK=
A.jb.CU;GN=A.jb.Text;}if(!G9){this.Background.L(A.jb.CU);this.V.L(A.jb.CI);}else
if(Gx){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fo){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FK);this.V.L(GN);}this.LF=G9;
this.KC=Fo;this.Ql=Gx;},_Init:function(aArg){C.Cm._Init.call(this,aArg);this.__proto__=
C.Ee;this.H(JY);this.V.H(BF);this.Zm(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeE={KH:null,GD:A.jV,Bk:function(aSize){C.Ee.Bk.call(this,aSize);this.KH.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ee.Ai.call(this,Ae);this.KH.
L(this.V.AQ);},Init:function(aArg){},AbV:function(E){if(this.GD===E)return;this.
GD=E;this.KH.R(E);},_Init:function(aArg){C.Ee._Init.call(this,aArg);C.CG._Init.call(
this.KH={I:this},0);this.__proto__=C.AeE;this.H(JY);this.Background.H(JY);this.V.
H(Z6);this.V.R(Lu);this.KH.H(IN);this.KH.R(AYc);this.J(this.KH,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(null);this.KH.S(A.aaL(A.fl.Af));this.
KH.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Ee;this.
KH._Done();C.Ee._Done.call(this);},_ReInit:function(){C.Ee._ReInit.call(this);this.
KH._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KH.S(A.aaL(
A.fl.Af));this.KH.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ee._Mark.call(this
,D);if((B=this.KH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvP={AB3:null,Q:null,A0:null,AF:null,If:null,LT:null,Am:null,EI:null,ANV:A.jV
,ANW:A.jV,Bk:function(aSize){C.AeE.Bk.call(this,aSize);if(!this.AB3)this.KH.H([].
concat(0,this.KH.M.slice(1,4)));else this.KH.H([].concat(this.Am.M[2],this.KH.M.
slice(1,4)));},Ai:function(Ae){var F,CP,S5;C.AeE.Ai.call(this,Ae);var Bct=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Ao9)this.AbV(this.ANV);else
this.AbV(this.ANW);}else{this.AbV(A._GetAutoObject(A.Device.Converter).Rc((F=this.
Q,F[1].call(F[0]))));if((((!!this.If&&!!this.A0)&&!!this.AF)&&!!this.LT)&&(((F=this.
If,F[1].call(F[0]))===1)||(!(CP=this.If,CP[1].call(CP[0]))&&(S5=this.LT,S5[1].call(
S5[0])))))Bct=true;}}this.EI.Z(Bct);this.Am.L(this.V.AQ);A.pe([this,this.AfZ],this
);},C3:function(G){this.An();},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)
A.pe([this,this.C3],this);},AEP:function(E){if(this.AB3===E)return;this.AB3=E;this.
Am.Aw(E);this.Bja();},PN:function(E){if(A.aaZ(this.A0,E))return;if(!!this.A0)A.z$([
this,this.Aax],this.A0,0);this.A0=E;if(!!E)A.zX([this,this.Aax],E,0);if(!!E)A.pe([
this,this.Aax],this);},QZ:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.Aay],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.Aay],E,0);if(!!E)
A.pe([this,this.Aay],this);},Aay:function(G){this.An();},Aax:function(G){this.An(
);},Ue:function(E){if(A.aaZ(this.If,E))return;if(!!this.If)A.z$([this,this.AlO],
this.If,0);this.If=E;if(!!E)A.zX([this,this.AlO],E,0);if(!!E)A.pe([this,this.AlO
],this);},AlO:function(G){this.An();},AfZ:function(G){var F,CP;if((!this.If||!this.
A0)||!this.AF)return;var A2l=this.KH.Ae7([(this.KH.String.length-(F=this.AF,F[1].
call(F[0])))-(CP=this.A0,CP[1].call(CP[0])),0]);var A3G=this.KH.Ae7([this.KH.String.
length-(F=this.AF,F[1].call(F[0])),0]);var AA4=this.KH.Da(0x0);this.EI.H([A2l[0]-
1,AA4[1],A3G[0]+1,AA4[3]]);},Arx:function(E){if(this.ANV===E)return;this.ANV=E;this.
An();},Ary:function(E){if(this.ANW===E)return;this.ANW=E;this.An();},AeT:function(
E){if(A.aaZ(this.LT,E))return;if(!!this.LT)A.z$([this,this.A25],this.LT,0);this.
LT=E;if(!!E)A.zX([this,this.A25],E,0);if(!!E)A.pe([this,this.A25],this);},A25:function(
G){this.An();},_Init:function(aArg){C.AeE._Init.call(this,aArg);A.acg.Am._Init.call(
this.Am={I:this},0);A.acg.Cf._Init.call(this.EI={I:this},0);this.__proto__=C.AvP;
this.Am.H(AhK);this.EI.H(AYd);this.EI.Ne(2);this.EI.L(A.jb.EW);this.J(this.Am,0);
this.J(this.EI,0);this.KH.Q0([this,this.AfZ]);},_Done:function(){this.__proto__=
C.AeE;this.Am._Done();this.EI._Done();C.AeE._Done.call(this);},_ReInit:function(
){C.AeE._ReInit.call(this);this.Am._ReInit();this.EI._ReInit();},_Mark:function(
D){var B;C.AeE._Mark.call(this,D);if((B=this.AB3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A0)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.If)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ie:0,Aaw:4,BdG:true,BdF:false,BcA:true,Bdy:false,AlT:function(
G){C.Q6.AlT.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bdx()){this.Ie=A._GetAutoObject(
A.Device.Helper).Uu.Id;var Ain=A._GetAutoObject(A.Device.Helper).AQX(this.Ie);if(
Ain)A._GetAutoObject(A.Device.Device).A_(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A29]);else{this.Aaw=A._GetAutoObject(A.Device.
Helper).AQY(this.Ie);var Bd3=false;if((this.Aaw===3)||(this.Aaw===2))Bd3=A._GetAutoObject(
A.Device.Helper).A7h(this.Ie,A._GetAutoObject(A.Device.Helper).W);if(Bd3)A._GetAutoObject(
A.Device.Device).A_(21,true,A._GetAutoObject(A.Device.Converter).Rc(this.Ie),0,null
);else switch(this.Aaw){case 2:{var BP=A._GetAutoObject(A.Device.Converter).AxD(
this.Ie);A._GetAutoObject(A.Device.Device).A_(46,true,BP.toFixed(),0,[this,this.
A29]);}break;case 3:case 1:case 0:case 4:this.A3X();break;default:throw new Error(
AH1+this.Aaw.toFixed());}}}},Es:function(G){A._GetAutoObject(C.A1).Fs();},AIF:function(
s){this.Es(s);},A3X:function(){if((this.Aaw===3)||(this.Aaw===2)){if((this.BcA&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Ie)){A._GetAutoObject(A.Device.Device).A_(69,true,A.jV,0,[this
,this.A29]);return;}else this.BBl();}A._GetAutoObject(A.Device.Helper).W.Q1(this.
Ie);this.Bdy=true;this.BBn();this.Es(this);},A29:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At)switch(At.Id){case 46:if(At.PopupState===4)this.
A3X();break;case 107:switch(At.PopupState){case 7:{this.A3X();A._GetAutoObject(A.
Device.Helper).Bn4(this.Ie);}break;case 8:this.Es(this);break;default:;}break;case
69:if(At.PopupState===4)this.Es(this);break;default:A.ab5("%s%e",AH2,At.Id);}},BBl:
function(){A._GetAutoObject(A.Device.Helper).W.Nc(this.Ie);if(this.BdF&&(A._GetAutoObject(
A.Device.Converter).ZO(this.Ie)===10)){var Bcf=Math.trunc((this.Ie%1000000000000
)/10000000000);if(!Bcf&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.Ex(0);else if((Bcf===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.Ex(2);}},BBn:function(){if(this.
BdG){A._GetAutoObject(A.Device.Helper).W.Ul(A._GetAutoObject(A.Device.Helper).BgV(
A._GetAutoObject(A.Device.Device).AhG,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).AhG===1)A._GetAutoObject(A.Device.Helper).A$L();
}},_Init:function(aArg){C.Q6._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dn(C.IE);this.Number.R(A.aaR(A.acf.OO));this.I9.H(AYe);this.
IM.H(WU);this.Akv(1);this.N.CA=[this,this.AIF];this.N.CZ(A.aaL(A.ach.EX));},_ReInit:
function(){C.Q6._ReInit.call(this);this.Number.R(A.aaR(A.acf.OO));},_className:"Application::SetTransponderScreen"
};C.ADb={Gg:null,Ll:null,Kl:null,CS:function(){this.An();},Init:function(aArg){this.
An();},Ai:function(Ae){C.Ew.Ai.call(this,Ae);this.Ll.R(A._GetAutoObject(A.acj.DU
).AfR());this.Kl.R(A._GetAutoObject(A.acj.DU).Aan());},_Init:function(aArg){C.Ew.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gg={I:this},0);A.acg.Text._Init.
call(this.Ll={I:this},0);A.acg.Text._Init.call(this.Kl={I:this},0);this.__proto__=
C.ADb;this.Background.L(A.jb.Text);this.Gg.H(AYf);this.Gg.A8(0x11);this.Gg.R(A.aaR(
A.acf.Date));this.Gg.L(A.jb.Bm);this.Ll.H(AYg);this.Ll.A8(0x11);this.Ll.L(A.jb.Bm
);this.Kl.H(AYh);this.Kl.L(A.jb.Bm);this.J(this.Gg,0);this.J(this.Ll,0);this.J(this.
Kl,0);this.Gg.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af));this.Kl.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.Ew;this.Gg._Done();this.Ll.
_Done();this.Kl._Done();C.Ew._Done.call(this);},_ReInit:function(){C.Ew._ReInit.
call(this);this.Gg._ReInit();this.Ll._ReInit();this.Kl._ReInit();this.Gg.R(A.aaR(
A.acf.Date));this.Gg.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af));this.Kl.S(A.aaL(
A.fl.Af));this.CS();},_Mark:function(D){var B;C.Ew._Mark.call(this,D);if((B=this.
Gg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AG9={Mh:null,Hi:null,H7:null,AP:null,A$:null,FP:0,H9:0,AiC:false,Init:function(
aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hi.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hi.M[2]-1,0,this.Hi.M[2]+1,aSize[
1]]);this.Mh.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H7.H(this.Mh.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiC){this.H7.R(Rj);this.H7.L(A.jb.
Text);this.Mh.L(this.Background.AQ);}else{this.H7.R(A._GetAutoObject(A.Device.Converter
).S0(this.FP,2,true));this.H7.L(A._GetAutoObject(A.acj.DU).AzG(this.FP,this.H9));
this.Mh.L(A._GetAutoObject(A.acj.DU).AzE(this.FP,this.H9));}this.Hi.L(this.V.AQ);
},Ce:function(Ad){if(!this.AX)return;this.Hk=Ad;if(!!this.AX){var Alq=this.AX.HD(
Ad,6);var AlY=this.AX.CE(Ad,8);if(this.Hk>0){var Byq=this.AX.HD(this.Hk-1,6);var
BA0=this.AX.CE(this.Hk-1,8);var LC=A._GetAutoObject(A.Device.Helper).MN(Byq,Alq);
if(!!LC){this.AiC=false;this.FP=A._GetAutoObject(A.acj.DU).Aln(LC,BA0,AlY);}else{
this.AiC=true;this.FP=0;}}else{this.AiC=true;this.FP=0;}this.T(A._GetAutoObject(
A.acj.KI).ACG(Alq));this.Hi.R(A._GetAutoObject(A.Device.Converter).AkX(AlY));this.
H9=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.An();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mh={I:this},0);A.acg.Text.
_Init.call(this.Hi={I:this},0);A.acg.Text._Init.call(this.H7={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AG9;this.V.H(O1);this.Mh.H(AsX);this.Hi.H(AH3);this.Hi.A8(0x12);this.Hi.R(Rh);
this.Hi.L(A.jb.Text);this.H7.H(AH4);this.H7.R(Rh);this.H7.L(A.jb.Text);this.AP.H(
Aoj);this.AP.L(A.jb.Bc);this.A$.H(Aok);this.A$.L(A.jb.Bc);this.J(this.Mh,0);this.
J(this.Hi,0);this.J(this.H7,0);this.J(this.AP,0);this.J(this.A$,0);this.Hi.S(A.aaL(
A.fl.Af));this.H7.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mh._Done();this.Hi._Done();this.H7._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mh._ReInit(
);this.Hi._ReInit();this.H7._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hi.
S(A.aaL(A.fl.Af));this.H7.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hi)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bh:null,VN:null,AhF:null,SR:null
,KK:A.jV,CS:function(){this.An();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LC=
A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LC){var FP=A._GetAutoObject(
A.acj.DU).Aln(LC,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdC=A.aaR(A.acf.Bg9);AdC=A._GetAutoObject(
A.Device.Helper).Ng(AdC,P4,A._GetAutoObject(A.Device.Converter).S0(FP,2,true));AdC=
A._GetAutoObject(A.Device.Helper).Ng(AdC,AxY,A._GetAutoObject(A.acj.DU).Aan());this.
SR.R(AdC);this.AhF.L(A._GetAutoObject(A.acj.DU).AzE(FP,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SR.L(A._GetAutoObject(A.acj.DU).AzG(FP,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SR.R(A.aaR(A.acf.AVr));this.AhF.L(A.jb.
AQJ);this.SR.L(A.jb.Text);}},CB:function(G){var Fq=A._NewObject(A.Device.Filter,
0);var HT=A._NewObject(A.Device.Int32FilterCriterion,0);HT.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fq.CW(HT);var Ac0=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac0.Initialize(8,2,0,true);Fq.CW(Ac0);A._GetAutoObject(A.Device.Device).Bv.Bl(
Fq);this.Axl(this);},EY:function(G){A._GetAutoObject(A.Device.Device).Bv.Bl(null
);},Axl:function(G){this.Bh=A._NewObject(C.FY,0);this.Bh.NX(C.AG9);this.Bh.H(Ax_
);this.Bh.Zi(A._GetAutoObject(A.Device.Device).Bv);this.Bh.Dx(this.KK);this.J(this.
Bh,0);this.Bb(this.Bh);},Anf:function(G){A._GetAutoObject(C.A1).Fs();},Dx:function(
E){if(this.KK===E)return;this.KK=E;if(!!this.Bh)this.Bh.Dx(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADb._Init.call(this.VN={I:this},0);A.acg.AL._Init.
call(this.AhF={I:this},0);A.acg.Text._Init.call(this.SR={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cc);this.N.Z(true);this.Dn(C.IE);this.VN.H(
P5);this.KK=A.aaR(A.acf.Akb);this.AhF.A3(0x1D);this.AhF.H(IN);this.SR.A3(0x1D);this.
SR.H(IN);this.SR.A8(0x12);this.SR.R(Rh);this.J(this.VN,0);this.J(this.AhF,0);this.
J(this.SR,0);this.N.CA=[this,this.Anf];this.N.CZ(A.aaL(A.ach.EX));this.SR.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.VN._Done();this.AhF._Done(
);this.SR._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.VN._ReInit();this.AhF._ReInit();this.SR._ReInit();this.Dx(A.aaR(A.acf.Akb
));this.SR.S(A.aaL(A.fl.Af));this.CS();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SR
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Me={DL:null,Acq:null,ARl:11,Gr:0,A4K:true,ABF:false,IS:function(G){if(A._GetAutoObject(
A.Device.Device).Ao.Cd()>0)this.Js(4);else A._GetAutoObject(A.Device.Device).A_(
30,true,A.jV,0,null);},CB:function(G){if(this.DL.AzP())this.DL.AcZ();else if((this.
Gr===2)&&A._GetAutoObject(A.Device.Helper).W.AqK())this.Js(5);else this.Js(1);},
EY:function(G){this.AKR();},Es:function(G){this.Js(0);A._GetAutoObject(C.A1).Fs(
);},BBC:function(){A._GetAutoObject(A.Device.Device).Ahx();},AKR:function(){A._GetAutoObject(
A.Device.Device).AnR();},A9x:function(E){if(this.ABF===E)return;this.ABF=E;A.abo([
this,this.Bkh,this.A9x],0);},Js:function(E){var B;if(this.Gr===E)return;this.Gr=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkE();A.zX([this,this.AKh]
,[B=A._GetAutoObject(A.Device.Helper),B.Ari,B.Aku],0);A.z$([this,this.AAg],[B=this.
DL,B.Anm,B.Js],0);this.BBC();}break;case 3:{A.z$([this,this.AKh],[B=A._GetAutoObject(
A.Device.Helper),B.Ari,B.Aku],0);this.AKR();this.BzA();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Ar$();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A4K)this.BBo();else this.BBr();}break;case 4:{A.z$([this,this.AKh],[B=A._GetAutoObject(
A.Device.Helper),B.Ari,B.Aku],0);this.AKR();A._GetAutoObject(A.Device.Helper).Ar$(
);A.zX([this,this.BeM],[B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyD],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARl);}break;case 5:this.Bf6();break;case
6:{A.zX([this,this.AAg],[B=this.DL,B.Anm,B.Js],0);this.DL.AcZ();}break;case 0:{A.
z$([this,this.AKh],[B=A._GetAutoObject(A.Device.Helper),B.Ari,B.Aku],0);this.AKR(
);}break;default:throw new Error(Ayf);}A.abo([this,this.Anm,this.Bv4],0);},Bv4:function(
Aq){this.Js(Aq);},AKh:function(G){if(!!A._GetAutoObject(A.Device.Helper).Uu){if(
this.Gr===1)this.Js(3);else A.ab5("%s%e",AYi,this.Gr);}else A.ab5("%s",AH5);},BBo:
function(){A._GetAutoObject(A.Device.Device).A_(13,true,A._GetAutoObject(A.Device.
Helper).AnY(A._GetAutoObject(A.Device.Helper).Uu.Id).toFixed(),0,[this,this.BzO]
);},BzO:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
At&&((At.PopupState===4)||(At.PopupState===3))){if(this.BcE(false))A._GetAutoObject(
C.A1).BU(31);else{A._GetAutoObject(A.Device.Helper).AkE();this.Js(1);}}else if(!
!At&&(At.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkE();this.Js(1);}},
BcE:function(AiR){if(A._GetAutoObject(A.Device.Device).Ao.Lg()){A._GetAutoObject(
A.Device.Device).A_(41,true,A._GetAutoObject(A.Device.Device).Ao.HF().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gj();A._GetAutoObject(
A.Device.Helper).Ap_(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.Q1(A._GetAutoObject(A.Device.Helper).Uu.Id);if(!!A._GetAutoObject(A.Device.
Helper).Aht){var AlA=A._GetAutoObject(A.Device.Helper).Aht.AOH();A._GetAutoObject(
A.Device.Helper).W.AbW(AlA);A._GetAutoObject(A.Device.Helper).W.Anu(AlA);}if(A._GetAutoObject(
A.Device.Helper).AQY(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nc(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.Ul(A._GetAutoObject(A.Device.Helper).BgU(A._GetAutoObject(A.Device.
Device).Agl,A._GetAutoObject(A.Device.Helper).W));if(AiR){A._GetAutoObject(A.Device.
Helper).W.Co(A._GetAutoObject(A.Device.Device).Ao);var L6=A._GetAutoObject(A.Device.
Device).Ao.Lb(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SF(L6);if(A._GetAutoObject(A.Device.Helper).AmX()){if(A._GetAutoObject(A.
Device.Device).Bv.Lg())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bv.HF().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gj();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abf(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Co(A._GetAutoObject(
A.Device.Device).Bv);}}if(!A._GetAutoObject(A.Device.Device).Agl)A._GetAutoObject(
A.Device.Helper).A$L();}return true;},BzA:function(){if(!!A._GetAutoObject(A.Device.
Helper).Uu){var AI7=true;if(A._GetAutoObject(A.Device.Helper).Uu.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AI7=A._GetAutoObject(A.Device.Helper).A7t(A._GetAutoObject(
A.Device.Helper).Uu.Id);if(!AI7&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.BcE(true);AI7=A._GetAutoObject(A.Device.Helper).A7t(A._GetAutoObject(A.
Device.Helper).Uu.Id);}}if(AI7)this.Js(5);else this.Js(2);}else{A.ab5("%s",AH5);
return;}},BeM:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARl){A.z$([this,this.BeM],[B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyD
],0);if(A._GetAutoObject(A.Device.Helper).W.AqK())this.Js(5);else this.Js(1);}},
Bf6:function(){if(this.ABF===true)this.Js(6);else A._GetAutoObject(C.A1).BU(24);
},BBr:function(){A._GetAutoObject(A.Device.Device).A_(36,true,A.jV,0,[this,this.
BAF]);},BAF:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&((At.PopupState===4)||(At.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkE();this.Js(1);}},AAg:function(G){if(!this.DL.Gr)this.Js(1);},A2X:function(G
){},Bwc:function(s){this.A2X(s);},Bkh:function(){return this.ABF;},Anm:function(
){return this.Gr;},_Init:function(aArg){C.Q6._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acq={I:this},0);this.__proto__=C.Me;this.N.Z(true);this.Dn(C.AqL);this.
Number.H(AYj);this.Number.R(A.aaR(A.acf.A$c));this.I9.H(AYk);this.IM.H(AYl);this.
Acq.H(AYm);this.Acq.R(AYn);this.Acq.L(A.jb.Text);this.J(this.Acq,0);this.N.CA=[this
,this.Es];this.N.Ck=[this,this.Bwc];this.N.CZ(A.aaL(A.ach.EX));this.Number.S(A.aaL(
A.fl.Af));this.Acq.S(A.aaL(A.fl.Ho));this.DL=A._GetAutoObject(C.DL);},_Done:function(
){this.__proto__=C.Q6;this.Acq._Done();C.Q6._Done.call(this);},_ReInit:function(
){C.Q6._ReInit.call(this);this.Acq._ReInit();this.Number.R(A.aaR(A.acf.A$c));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Q6._Mark.call(this,D);if((B=
this.DL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acq)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4x={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Ao4:-1,Gr:0,BxD:function(){var BfL=false;
var Oi=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bv.Lg())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.
Device.Device).Bv.HF().toFixed(),0,null);else if(Oi){BfL=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gj();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axh(B1,5);B1.OnSetAppearance(3);B1.Co(A._GetAutoObject(
A.Device.Device).Bv);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gj();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axh(B1
,5);B1.OnSetAppearance(1);B1.Co(A._GetAutoObject(A.Device.Device).Bv);}A._GetAutoObject(
A.Device.Helper).W.EH(A._GetAutoObject(A.Device.Helper).W.CK,A._GetAutoObject(A.
Device.Device).Ao);if(BfL)A._GetAutoObject(A.Device.Helper).W.Ui(false);if(Oi)A.
_GetAutoObject(A.Device.Helper).W.AnL(false);else A._GetAutoObject(A.Device.Helper
).W.AnL(true);A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(A.Device.Device
).Ao);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A_(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A_(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BxF:function(){A._GetAutoObject(
A.Device.Helper).W.AGs(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Co(A._GetAutoObject(A.Device.Device).Ao);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A_(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);else A._GetAutoObject(
A.Device.Device).A_(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);},Qf:function(Ez){switch(Ez){case 4:this.BxD();break;case
128:A._GetAutoObject(C.A1).BU(7);break;case 16:A._GetAutoObject(C.A1).BU(36);break;
case 1:A._GetAutoObject(C.A1).BU(10);break;case 2:A._GetAutoObject(C.A1).BU(11);
break;case 8:this.BxF();break;case 64:A._GetAutoObject(C.A1).BU(29);break;case 32:
A._GetAutoObject(C.A1).BU(54);break;case 256:A._GetAutoObject(C.A1).BU(21);break;
case 512:A._GetAutoObject(C.A1).BU(30);break;case 1024:this.Bzx();break;case 262144:
this.BBS();break;case 2048:this.AcZ();break;case 4096:this.Bcw(false);break;case
8192:this.BxE();break;case 16384:this.Bzw();break;case 32768:this.Bx4();break;case
524288:this.Bx5();break;case 65536:this.Byt();break;case 131072:this.BBf();break;
case 0:break;default:throw new Error(AYo);}},BcG:function(Ez,Bw_){var EM=A._NewObject(
C.V$,0);EM.AbU(false);EM.Aj(true);EM.AR=Bw_;EM.Blp(Ez);switch(Ez){case 1:{EM.T(A.
aaR(A.acf.AnT));EM.DD(A.aaL(A.ach.ALu));}break;case 2:{EM.T(A.aaR(A.acf.A_X));EM.
DD(A.aaL(A.ach.ALv));}break;case 4:{EM.T(A.aaR(A.acf.Alarm));EM.DD(A.aaL(A.ach.ALw
));EM.AFo(true);}break;case 8:{EM.T(A.aaR(A.acf.ArY));EM.DD(A.aaL(A.ach.ALx));EM.
AFo(true);}break;case 16:{EM.T(A.aaR(A.acf.AL7));EM.DD(A.aaL(A.ach.ALy));}break;
case 32:{EM.T(A.aaR(A.acf.AnimalLoss));EM.DD(A.aaL(A.ach.ALz));}break;case 64:{EM.
T(A.aaR(A.acf.Unregister));EM.DD(A.aaL(A.ach.ALA));}break;case 128:{EM.T(A.aaR(A.
acf.Edit));EM.DD(A.aaL(A.ach.ALB));}break;case 256:{EM.T(A.aaR(A.acf.Weighing));
EM.DD(A._GetAutoObject(A.acj.DU).By8());}break;case 512:{EM.T(A.aaR(A.acf.ARK));
EM.DD(A.aaL(A.ach.ALm));}break;case 1024:{EM.T(A.aaR(A.acf.LinkTransponder));EM.
DD(A.aaL(A.ach.ALn));}break;case 262144:{EM.T(A.aaR(A.acf.UnlinkTransponder));EM.
DD(A.aaL(A.ach.ALt));}break;case 2048:{EM.T(A.aaR(A.acf.Tr));EM.DD(A.aaL(A.ach.ALo
));}break;case 4096:{EM.T(A.aaR(A.acf.Calving));EM.DD(A.aaL(A.ach.ALp));}break;case
8192:{EM.T(A.aaR(A.acf.DryOff));EM.DD(A.aaL(A.ach.ALq));EM.AFo(true);}break;case
16384:{EM.T(A.aaR(A.acf.Bh8));EM.DD(A.aaL(A.ach.ALr));}break;case 131072:{EM.T(A.
aaR(A.acf.Boe));EM.DD(A.aaL(A.ach.ALs));}break;default:A.ab5("%s",(AYp+Ez.toFixed(
))+AYq);}return EM;},ByG:function(){this.Ao4=this.Ao4+1;if(this.Ao4>=this.AutoActions.
NM())this.Js(0);else this.Js(2);},BA4:function(){this.Ao4=-1;},AzP:function(){return(
this.Ao4>-1)&&!this.Bzq();},Bzq:function(){return this.Ao4>=this.AutoActions.NM(
);},Js:function(E){if(this.Gr===E)return;this.Gr=E;switch(E){case 1:this.ByG();break;
case 2:{var Aae=this.AutoActions.OB(this.Ao4);if(this.A4u(A._GetAutoObject(A.Device.
Helper).W,Aae))this.Qf(Aae);else A._GetAutoObject(A.Device.Device).A_(64,true,(this.
ActionToString.Ls(Aae)+AsV)+this.AnimalTypeToString.Ls(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MT]);}break;case 0:this.BA4();break;default:throw new
Error(Ayf);}A.abo([this,this.Anm,this.Js],0);},MT:function(G){var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!At)return;if((At.Id===63)&&(At.PopupState===7))this.
Bcw(true);if((At.Id===32)&&(At.PopupState===7))A._GetAutoObject(C.A1).BU(50);if((((
At.PopupState===4)||(At.PopupState===3))||(At.PopupState===8))&&this.AzP())this.
Js(1);},Bcy:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).Ao.Lb(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},Bzx:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A1).BU(
50);else A._GetAutoObject(A.Device.Device).A_(32,true,A.jV,0,[this,this.MT]);},AcZ:
function(){this.Js(1);},BA2:function(){var Oi=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oi&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bv.
Lg())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device
).Bv.HF().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gj();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axh(B1,5);B1.Co(A._GetAutoObject(A.Device.Device).Bv);}}A._GetAutoObject(
A.Device.Helper).W.EH(A._GetAutoObject(A.Device.Helper).W.CK,A._GetAutoObject(A.
Device.Device).Ao);A._GetAutoObject(A.Device.Helper).W.Ui(false);if(Oi)A._GetAutoObject(
A.Device.Helper).W.AnL(false);A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(
A.Device.Device).Ao);A._GetAutoObject(A.Device.Device).A_(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},BA3:function(){A._GetAutoObject(
A.Device.Helper).W.AGs(false);A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(
A.Device.Device).Ao);A._GetAutoObject(A.Device.Device).A_(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bcw:function(ByK){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(ByK===false))A._GetAutoObject(A.Device.
Device).A_(63,true,A.jV,0,[this,this.MT]);else A._GetAutoObject(C.A1).BU(62);},BxE:
function(){A._GetAutoObject(A.Device.Helper).W.ArG(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(A.Device.Device
).Ao);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A_(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);else A._GetAutoObject(A.Device.Device).A_(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MT]);},Bzw:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A1).BU(92);else A._GetAutoObject(A.
Device.Device).A_(69,true,A.jV,0,[this,this.MT]);},Bx4:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).AjW(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ahe(false);A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(A.Device.
Device).Ao);A._GetAutoObject(A.Device.Device).A_(65,true,A.jV,2000,[this,this.MT
]);}else{A._GetAutoObject(A.Device.Helper).W.AeU(false);A._GetAutoObject(A.Device.
Helper).W.Co(A._GetAutoObject(A.Device.Device).Ao);A._GetAutoObject(A.Device.Device
).A_(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MT]);}}},Byt:function(){A._GetAutoObject(A.Device.Helper).W.Ahe(false);A._GetAutoObject(
A.Device.Helper).W.Co(A._GetAutoObject(A.Device.Device).Ao);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).AjW(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ahe(false);A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(A.Device.
Device).Ao);A._GetAutoObject(A.Device.Device).A_(65,true,A.jV,2000,[this,this.MT
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A_(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MT]);else A._GetAutoObject(A.Device.Device).A_(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},A4u:function(EJ,Ez
){var Qp=false;switch(Ez){case 32768:Qp=EJ.IsRegistrationNoticePending&&!!EJ.NaisIdMother;
break;case 524288:Qp=EJ.IsRegistrationNoticePending&&!EJ.NaisIdMother;break;case
4096:case 8192:switch(EJ.AnimalType){case 1:Qp=true;break;default:;}break;case 512:
switch(EJ.AnimalType){case 0:Qp=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qp=true;break;default:A.ab5("%s",AYr+
Ez.toFixed());}return Qp;},BBf:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A1).BU(91);else A._GetAutoObject(A.Device.Device).A_(
69,true,A.jV,0,[this,this.MT]);},BBS:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A_(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MT]);else{A._GetAutoObject(A.
Device.Helper).W.Q1(0);A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(A.
Device.Device).Ao);A._GetAutoObject(A.Device.Device).A_(86,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},Bx5:function(){if(
A._GetAutoObject(A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(
A.Device.Helper).W.AeU(false);A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(
A.Device.Device).Ao);A._GetAutoObject(A.Device.Device).A_(98,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MT]);}},Anm:function(){return this.
Gr;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.A4x;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.ALG={AaQ:null,Ap$:null,Js:function(E){if(this.Gr===E)return;C.Me.Js.call(this
,E);switch(E){case 1:this.Dn(C.AqL);break;case 5:case 6:this.Dn(C.IE);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayf);}},A2X:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Me._Init.call(this
,aArg);A.acg.Text._Init.call(this.AaQ={I:this},0);C.ALH._Init.call(this.Ap$={I:this
},0);this.__proto__=C.ALG;this.A9x(true);this.AaQ.H(AYs);this.AaQ.R(A.aaR(A.acf.
Tr));this.AaQ.L(A.jb.Text);this.Ap$.H(AYt);this.J(this.AaQ,0);this.J(this.Ap$,0);
this.N.Cq(A.aaL(A.ach.Abr));this.AaQ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Me;this.AaQ._Done();this.Ap$._Done();C.Me._Done.call(this);},_ReInit:function(
){C.Me._ReInit.call(this);this.AaQ._ReInit();this.Ap$._ReInit();this.AaQ.R(A.aaR(
A.acf.Tr));this.AaQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Me._Mark.call(
this,D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
H8:null,JW:null,A2X:function(G){if(this.H8.NR(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Me._Init.call(this,aArg);A.acg.Text._Init.call(this.
JW={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JW.H(AYu);this.JW.KR(
true);this.JW.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.ABs));this.
JW.L(A.jb.Text);this.J(this.JW,0);this.N.Cq(A.aaL(A.ach.Abr));this.JW.S(A.aaL(A.
fl.Af));this.H8=A._GetAutoObject(C.Pg);},_Done:function(){this.__proto__=C.Me;this.
JW._Done();C.Me._Done.call(this);},_ReInit:function(){C.Me._ReInit.call(this);this.
JW._ReInit();this.JW.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.ABs
));this.JW.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Me._Mark.call(this,D);if((
B=this.H8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JW)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.ALH={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABd],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Aul],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABd],this);
A.pe([this,this.Aul],this);this.H(A.abK(this.M,AYv));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYw)));},Bcm:function(G){var B;var Alo=0;var Azg=0;
var BcC;var X=this.Y.Ah;var Cx=null;BcC=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).NM()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cx=(C.V$.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cx){Cx.H(A.abK(Cx.M,AYx));Cx.H(A.abM(Cx.M
,(Azg*58)+BcC));Cx.H(A.abO(Cx.M,Alo*58));if(Azg>=3){Alo=Alo+1;Azg=0;}else Azg=Azg+
1;}X=X.Ah;}this.Bb(null);},A1l:function(Ez){var EM=A._GetAutoObject(C.DL).BcG(Ez
,null);this.J(EM,0);this.Bcm(this);},AoT:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdA=X;X=X.Ah;if(((AdA.U&0x400)===0x400))this.HL(
AdA);}},ABd:function(G){this.AoT();var P;var CD=A._GetAutoObject(C.AutoActions).
NM();for(P=0;P<CD;P=P+1){var Aae=A._GetAutoObject(C.AutoActions).OB(P);this.A1l(
Aae);}A.pe([this,this.Bcm],this);A.pe([this,this.Aul],this);A.pe([this,this.BB2]
,this);},Aul:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)
){if(((X.U&0x400)===0x400)){var Aa=(C.V$.isPrototypeOf(X)?X:null);Aa.AFo(false);
}X=X.Ah;}},BB2:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){var Aa=(C.V$.isPrototypeOf(X)?X:null);var BxU=A._GetAutoObject(
C.AutoActions).NM();if(!!Aa){var P;Aa.A9t(false);for(P=0;P<BxU;P=P+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OB(P)){Aa.A9t(true);Aa.Bmx(AYy+(P+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.ALH;this.Y.JN(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Y._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DL={_Init:function(
){C.A4x._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APq={Lk:null,T2:null,Init:function(aArg){this.Lk.R(A._GetAutoObject(
A.acj.Temperature).Alz());},_Init:function(aArg){C.Db._Init.call(this,aArg);A.acg.
Text._Init.call(this.Lk={I:this},0);C.CG._Init.call(this.T2={I:this},0);this.__proto__=
C.APq;this.Lk.H(AYz);this.Lk.A8(0x12);this.Lk.L(A.jb.Text);this.T2.H(Aol);this.T2.
R((A.aaR(A.acf.Ag8)+AH6)+A.aaR(A.acf.Ke));this.T2.A8(0x12);this.T2.L(A.jb.Text);
this.J(this.Lk,0);this.J(this.T2,0);this.Lk.S(A.aaL(A.fl.Af));this.T2.S(A.aaL(A.
fl.Ak));this.T2.A2(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=
C.Db;this.Lk._Done();this.T2._Done();C.Db._Done.call(this);},_ReInit:function(){
C.Db._ReInit.call(this);this.Lk._ReInit();this.T2._ReInit();this.T2.R((A.aaR(A.acf.
Ag8)+AH6)+A.aaR(A.acf.Ke));this.Lk.S(A.aaL(A.fl.Af));this.T2.S(A.aaL(A.fl.Ak));this.
T2.A2(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Db._Mark.call(this,D);if((B=this.
Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.AC$={Jq:null,DY:null,_Init:
function(aArg){C.Db._Init.call(this,aArg);A.acg.Text._Init.call(this.Jq={I:this}
,0);A.acg.Text._Init.call(this.DY={I:this},0);this.__proto__=C.AC$;this.Jq.H(AYA
);this.Jq.KR(true);this.Jq.A8(0x14);this.Jq.R(A.aaR(A.acf.AhE)+AH7);this.Jq.L(A.
jb.Text);this.DY.H(Aol);this.DY.KR(true);this.DY.R(A.aaR(A.acf.AFX));this.DY.L(A.
jb.Text);this.J(this.Jq,0);this.J(this.DY,0);this.Jq.S(A.aaL(A.fl.Ak));this.DY.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Db;this.Jq._Done();this.DY._Done(
);C.Db._Done.call(this);},_ReInit:function(){C.Db._ReInit.call(this);this.Jq._ReInit(
);this.DY._ReInit();this.Jq.R(A.aaR(A.acf.AhE)+AH7);this.DY.R(A.aaR(A.acf.AFX));
this.Jq.S(A.aaL(A.fl.Ak));this.DY.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Db._Mark.call(this,D);if((B=this.Jq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DY
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TR={I2:null,_Init:function(aArg){C.Db._Init.call(this,aArg);C.CG._Init.call(this.
I2={I:this},0);this.__proto__=C.TR;this.I2.H(AH8);this.I2.R((((A.aaR(A.acf.RI)+Z9
)+AH9)+A.aaR(A.acf.A$Z))+O3);this.I2.A8(0x12);this.I2.L(A.jb.Text);this.J(this.I2
,0);this.I2.S(A.aaL(A.fl.Af));this.I2.A2(A.aaL(A.fl.Ak));this.I2.Ct(A.aaL(A.fl.Bi
));},_Done:function(){this.__proto__=C.Db;this.I2._Done();C.Db._Done.call(this);
},_ReInit:function(){C.Db._ReInit.call(this);this.I2._ReInit();this.I2.R((((A.aaR(
A.acf.RI)+Z9)+AH9)+A.aaR(A.acf.A$Z))+O3);this.I2.S(A.aaL(A.fl.Af));this.I2.A2(A.
aaL(A.fl.Ak));this.I2.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Db._Mark.call(
this,D);if((B=this.I2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APs={Ll:null,Kl:null,CS:function(){this.A$e();},Init:function(aArg){this.A$e(
);},A$e:function(){this.Ll.R(A._GetAutoObject(A.acj.DU).AfR());this.Kl.R(A._GetAutoObject(
A.acj.DU).Aan());},_Init:function(aArg){C.Db._Init.call(this,aArg);A.acg.Text._Init.
call(this.Ll={I:this},0);C.CG._Init.call(this.Kl={I:this},0);this.__proto__=C.APs;
this.Ll.H(AYB);this.Ll.A8(0x12);this.Ll.L(A.jb.Text);this.Kl.H(Aol);this.Kl.L(A.
jb.Text);this.J(this.Ll,0);this.J(this.Kl,0);this.Ll.S(A.aaL(A.fl.Af));this.Kl.S(
A.aaL(A.fl.Af));this.Kl.A2(A.aaL(A.fl.Ak));this.Kl.Ct(A.aaL(A.fl.Bi));this.Init(
aArg);},_Done:function(){this.__proto__=C.Db;this.Ll._Done();this.Kl._Done();C.Db.
_Done.call(this);},_ReInit:function(){C.Db._ReInit.call(this);this.Ll._ReInit();
this.Kl._ReInit();this.Ll.S(A.aaL(A.fl.Af));this.Kl.S(A.aaL(A.fl.Af));this.Kl.A2(
A.aaL(A.fl.Ak));this.Kl.Ct(A.aaL(A.fl.Bi));this.CS();},_Mark:function(D){var B;C.
Db._Mark.call(this,D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kl
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AMX={Mh:null,Hi:null,H7:null,AP:null,A$:null,FP:0,Aat:0,H9:0,AiC:false,Init:function(
aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hi.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hi.M[2]-1,0,this.Hi.M[2]+1,aSize[
1]]);this.Mh.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H7.H(this.Mh.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiC){this.H7.R(Rj);this.H7.L(A.jb.
Text);this.Mh.L(this.Background.AQ);}else{this.H7.R(A._GetAutoObject(A.Device.Converter
).S0(this.FP,2,true));this.H7.L(A._GetAutoObject(A.acj.DU).AzG(this.FP,this.H9));
this.Mh.L(A._GetAutoObject(A.acj.DU).AzE(this.FP,this.H9));}if(this.Aat>0)this.Hi.
R(A._GetAutoObject(A.Device.Converter).AkX(this.Aat));else this.Hi.R(Rj);this.Hi.
L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hk=Ad;if(!!this.AX){var Md=
this.AX.CE(Ad,1);var Aug=this.AX.HD(Ad,24);var AJR=this.AX.CE(Ad,23);var Auh=this.
AX.HD(Ad,19);this.Aat=this.AX.CE(Ad,18);if((Aug>0)&&(Aug!==Auh)){var LC=A._GetAutoObject(
A.Device.Helper).MN(Aug,Auh);if(!!LC){this.AiC=false;this.FP=A._GetAutoObject(A.
acj.DU).Aln(LC,AJR,this.Aat);}else{this.AiC=true;this.FP=0;}}else{this.AiC=true;
this.FP=0;}this.T(Md.toFixed());this.H9=this.AX.AmL(Ad,14);this.An();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mh={I:this},0);A.acg.Text.
_Init.call(this.Hi={I:this},0);A.acg.Text._Init.call(this.H7={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AMX;this.V.H(O1);this.Mh.H(AsX);this.Hi.H(AH3);this.Hi.A8(0x12);this.Hi.R(Rh);
this.Hi.L(A.jb.Text);this.H7.H(AH4);this.H7.R(Rh);this.H7.L(A.jb.Text);this.AP.H(
Aoj);this.AP.L(A.jb.Bc);this.A$.H(Aok);this.A$.L(A.jb.Bc);this.J(this.Mh,0);this.
J(this.Hi,0);this.J(this.H7,0);this.J(this.AP,0);this.J(this.A$,0);this.Hi.S(A.aaL(
A.fl.Af));this.H7.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mh._Done();this.Hi._Done();this.H7._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mh._ReInit(
);this.Hi._ReInit();this.H7._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hi.
S(A.aaL(A.fl.Af));this.H7.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hi)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M1={Mg:null,AP:null,A$:null,Gs:null,Xf:0,Init:
function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Mg.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mg.M);this.Background.H([].concat(this.Mg.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gs.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A$.H([this.Gs.M[2]-1,0,this.
Gs.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gs.L(this.V.AQ
);if(!!this.Xf&&(this.Xf!==5)){this.Mg.L(A._GetAutoObject(A.acj.Assessment).Qh(this.
Xf));this.V.L(A._GetAutoObject(A.acj.Assessment).Xo(this.Xf));}else this.Mg.L(this.
Background.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hk=Ad;if(!!this.AX){var
Md=this.AX.CE(Ad,1);var LP=this.AX.IY(Ad,13);var Alu=this.AX.IY(Ad,17);var AlD=this.
AX.HZ(Ad,11);var Ay0=this.AX.HD(Ad,4);var AfE=A._GetAutoObject(A.Device.Helper).
MN(Ay0,A._GetAutoObject(A.Device.Helper).Ds());this.Xf=A._GetAutoObject(A.Device.
Helper).AL4(LP,AlD,Alu);this.T(Md.toFixed());if(AfE<100)this.Gs.R((AfE.toFixed()+
CO)+A.aaR(A.acf.ALF));else this.Gs.R(A._GetAutoObject(A.acj.KI).ACH(Ay0,A._GetAutoObject(
A.Device.Helper).Ds(),AH_));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Mg={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.Text._Init.call(this.Gs={I:this
},0);this.__proto__=C.M1;this.Mg.H(AsX);this.Background.H(AYC);this.V.H(O1);this.
AP.H(Aoj);this.AP.L(A.jb.Bc);this.A$.H(Aok);this.A$.L(A.jb.Bc);this.Gs.H(Ayg);this.
J(this.Mg,-3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Gs,0);this.Gs.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mg._Done(
);this.AP._Done();this.A$._Done();this.Gs._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mg._ReInit();this.AP._ReInit();this.A$._ReInit(
);this.Gs._ReInit();this.Gs.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AMV={Ajq:null,N8:null,AP:null,A$:null,Jk:null,AKa:0,A2k:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N8.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajq.H(this.N8.M);this.A$.H([this.N8.M[2]-1,0,this.N8.M[2]+1,aSize[1]]);
this.Jk.H([this.N8.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jk.Dd(this.V.AQ);if(this.AKa>0){this.Ajq.L(A._GetAutoObject(A.acj.Assessment
).Qh(this.A2k));this.N8.L(A._GetAutoObject(A.acj.Assessment).Xo(this.A2k));}else{
this.Ajq.L(this.Background.AQ);this.N8.L(this.V.AQ);}},Ce:function(Ad){if(!this.
AX)return;this.Hk=Ad;if(!!this.AX){var Ia=this.AX.CE(Ad,0);var Md=this.AX.CE(Ad,
1);this.AKa=this.AX.CE(Ad,5);this.A2k=this.AX.IY(Ad,17);this.T(Md.toFixed());if(
this.AKa>0)this.N8.R(A._GetAutoObject(A.Device.Converter).AkQ(this.AKa));else this.
N8.R(Rj);var Xe=A._GetAutoObject(A.Device.Helper).ZF(6);A._GetAutoObject(A.Device.
Device).SF(Ad);var A0u=A._GetAutoObject(A.Device.Helper).Biw(A._GetAutoObject(A.
Device.Device).Bv,9,Ia,Xe,0);this.Jk.A9L(A0u.Get(3));this.Jk.A9N(A0u.Get(2));this.
Jk.A9M(A0u.Get(1));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.Ajq={I:this},0);A.acg.Text._Init.call(this.N8={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},
0);C.Jk._Init.call(this.Jk={I:this},0);this.__proto__=C.AMV;this.N8.A8(0x12);this.
N8.R(Rh);this.N8.L(A.jb.Text);this.AP.H(Aoj);this.AP.L(A.jb.Bc);this.A$.H(Aok);this.
A$.L(A.jb.Bc);this.Jk.H(AYD);this.J(this.Ajq,0);this.J(this.N8,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Jk,0);this.N8.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ajq._Done();this.N8._Done();this.AP.
_Done();this.A$._Done();this.Jk._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ajq._ReInit();this.N8._ReInit();this.AP._ReInit();
this.A$._ReInit();this.Jk._ReInit();this.N8.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jk={Afe:null,
ColoredCounterAttrSet:null,AB8:0,AB9:0,AB7:0,KS:0,Ai:function(Ae){var B;A.Core.O.
Ai.call(this,Ae);var AJ3;var ALl;var AKx;var AlL=0;if(this.AB7>0){AJ3=this.AB7.toFixed(
);AlL+=AJ3.length;}else{AJ3=AYE;AlL++;}if(this.AB9>0){ALl=this.AB9.toFixed();AlL+=
ALl.length;}else{ALl=Ayh;AlL++;}if(this.AB8>0){AKx=this.AB8.toFixed();AlL+=AKx.length;
}else{AKx=AHY;AlL++;}if(AlL<=4)this.ColoredCounterAttrSet.Ahc(A.aaL(A.fl.Af));else
if(AlL<=5)this.ColoredCounterAttrSet.Ahc(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahc(A.aaL(A.fl.Bi));this.Afe.R(((((AYF+AJ3)+AYG)+ALl)+AYH)+AKx);},A9M:function(E
){if(this.AB8===E)return;this.AB8=E;this.An();},A9N:function(E){if(this.AB9===E)
return;this.AB9=E;this.An();},A9L:function(E){if(this.AB7===E)return;this.AB7=E;
this.An();},Dd:function(E){if(this.KS===E)return;this.KS=E;this.ColoredCounterAttrSet.
Ag$(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AuD._Init.call(
this.Afe={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jk;this.H(AH$);this.Afe.A3(0x3F);this.Afe.H(AH$);this.
Afe.R(Rh);this.ColoredCounterAttrSet.BlB(A.jb.EW);this.ColoredCounterAttrSet.A9C(
A.jb.H4);this.ColoredCounterAttrSet.A9B(A.jb.Gb);this.ColoredCounterAttrSet.Ag$(
A.jb.Text);this.KS=A.jb.Text;this.J(this.Afe,0);this.Afe.A9w(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahc(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9y(
null);},_Done:function(){this.__proto__=A.Core.O;this.Afe._Done();this.ColoredCounterAttrSet.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Afe._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahc(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Afe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AMU={Ats:null
,Ab5:null,Ab6:null,Ab7:null,Jk:null,AP:null,A$:null,D_:null,Lr:null,Acs:null,KT:
null,KU:null,AJc:0,AJb:0,AJa:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Ab5.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Acs.H(this.
Ab5.M);this.A$.H([this.Ab5.M[2]-1,0,this.Ab5.M[2]+1,aSize[1]]);this.Ab6.H([this.
Ab5.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KT.H(this.Ab6.M);this.D_.H([this.
Ab6.M[2]-1,0,this.Ab6.M[2]+1,aSize[1]]);this.Ab7.H([this.Ab6.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KU.H(this.Ab7.M);this.Lr.H([this.Ab7.M[2]-1,0,this.Ab7.
M[2]+1,aSize[1]]);this.Jk.H([this.Ab7.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jk.Dd(this.V.AQ);this.Ab5.L(A._GetAutoObject(A.acj.
Assessment).Qh(this.AJa));this.Ab6.L(A._GetAutoObject(A.acj.Assessment).Qh(this.
AJb));this.Ab7.L(A._GetAutoObject(A.acj.Assessment).Qh(this.AJc));this.Acs.L(A._GetAutoObject(
A.acj.Assessment).Xo(this.AJa));this.KT.L(A._GetAutoObject(A.acj.Assessment).Xo(
this.AJb));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xo(this.AJc));this.Acs.Z(
!this.AJa);this.KT.Z(!this.AJb);this.KU.Z(!this.AJc);this.Jk.A9L(this.Ats.Get(3)
);this.Jk.A9N(this.Ats.Get(2));this.Jk.A9M(this.Ats.Get(1));},Ce:function(Ad){if(
!this.AX)return;this.Hk=Ad;if(!!this.AX){var Ia=this.AX.CE(Ad,0);var Md=this.AX.
CE(Ad,1);this.T(Md.toFixed());A._GetAutoObject(A.Device.Device).SF(Ad);this.AJa=
A._GetAutoObject(A.Device.Helper).A1Y(A._GetAutoObject(A.Device.Device).Bv,Ia,0);
this.AJb=A._GetAutoObject(A.Device.Helper).A1Y(A._GetAutoObject(A.Device.Device).
Bv,Ia,-1);this.AJc=A._GetAutoObject(A.Device.Helper).A1Y(A._GetAutoObject(A.Device.
Device).Bv,Ia,-2);this.Ats=A._GetAutoObject(A.Device.Helper).A6A(A._GetAutoObject(
A.Device.Device).Bv,Ia,0,0);this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Ab5={I:this},0);A.acg.AL._Init.call(this.Ab6={I:
this},0);A.acg.AL._Init.call(this.Ab7={I:this},0);C.Jk._Init.call(this.Jk={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.AL._Init.call(this.D_={I:this},0);A.acg.AL._Init.call(this.Lr={I:this
},0);A.acg.Text._Init.call(this.Acs={I:this},0);A.acg.Text._Init.call(this.KT={I:
this},0);A.acg.Text._Init.call(this.KU={I:this},0);this.__proto__=C.AMU;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.D_.L(A.jb.Bc);this.Lr.L(A.jb.Bc);this.Acs.R(Aom
);this.KT.R(Aom);this.KU.R(Aom);this.J(this.Ab5,0);this.J(this.Ab6,0);this.J(this.
Ab7,0);this.J(this.Jk,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.D_,0);this.
J(this.Lr,0);this.J(this.Acs,0);this.J(this.KT,0);this.J(this.KU,0);this.Acs.S(A.
aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.Ats=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ab5._Done();this.Ab6._Done();this.Ab7._Done();this.Jk._Done();this.AP.
_Done();this.A$._Done();this.D_._Done();this.Lr._Done();this.Acs._Done();this.KT.
_Done();this.KU._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Ab5._ReInit();this.Ab6._ReInit();this.Ab7._ReInit();this.Jk._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.D_._ReInit();this.Lr._ReInit();this.Acs.
_ReInit();this.KT._ReInit();this.KU._ReInit();this.Acs.S(A.aaL(A.fl.Af));this.KT.
S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ats)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab5).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ab7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmO={H2:null,AfS:false,Bk:function(aSize){var
B;this.H2.H([(aSize[0]-((B=this.H2.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H2.M[0]-10,40]);C.TB.Bk.call(this,aSize);},Ai:function(Ae){C.TB.Ai.call(
this,Ae);if(this.AfS)this.H2.Cu(1);else this.H2.Cu(0);},J8:function(G){if(this.AfS
)C.TB.J8.call(this,G);},J3:function(G){if(this.AfS)C.TB.J3.call(this,G);},Tm:function(
AH){C.TB.Tm.call(this,AH);if(!!AH){this.H(A.abI(this.M,80));this.AfS=true;this.Zm(
true);}else{this.H(A.abI(this.M,40));this.AfS=false;this.Zm(false);}},_Init:function(
aArg){C.TB._Init.call(this,aArg);A.acg.Am._Init.call(this.H2={I:this},0);this.__proto__=
C.AmO;this.V.A8(0x11);this.H2.H(AHz);this.H2.Cu(0);this.J(this.H2,0);this.V.Ct(A.
aaL(A.fl.Bi));this.H2.Aw(A.aaL(A.ach.AqA));},_Done:function(){this.__proto__=C.TB;
this.H2._Done();C.TB._Done.call(this);},_ReInit:function(){C.TB._ReInit.call(this
);this.H2._ReInit();this.V.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.TB._Mark.
call(this,D);if((B=this.H2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AFW={_Init:function(aArg){C.Aw_._Init.call(this,aArg);this.__proto__=C.AFW;}
,_className:"Application::OptionsOverlaySeparator"};C.Akx={DI:A.jV,By:true,_Init:
function(aArg){C.Aw_._Init.call(this,aArg);this.__proto__=C.Akx;},_className:"Application::OptionsOverlayNode"
};C.Zo={AR:null,_Init:function(aArg){C.Akx._Init.call(this,aArg);this.__proto__=
C.Zo;},_Mark:function(D){var B;C.Akx._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANo={Ai:function(Ae){C.OS.Ai.call(this,Ae);var FK=A.jb.CI;var GN=A.jb.Text;if(
this.Hd){FK=A.jb.Text;GN=A.jb.Bm;}this.Background.L(FK);this.V.L(GN);},_Init:function(
aArg){C.OS._Init.call(this,aArg);this.__proto__=C.ANo;},_className:"Application::DarkThemeTextItem"
};C.OS={Background:null,Cf:null,V:null,Aqi:0,Hd:false,Init:function(aArg){},Bk:function(
aSize){C.Ha.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.Cf.H(A.abK(this.Cf.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Ha.Ai.call(this,Ae);this.Cf.L(this.Aqi);},T:function(E){if(this.DI===E)return;
this.DI=E;this.V.R(E);},Bj:function(E){if(this.Hd===E)return;this.Hd=E;this.An();
},Arw:function(E){if(this.Aqi===E)return;this.Aqi=E;this.An();},_Init:function(aArg
){C.Ha._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
Cf._Init.call(this.Cf={I:this},0);C.CG._Init.call(this.V={I:this},0);this.__proto__=
C.OS;this.H(BF);this.Background.H(AIa);this.Cf.H(BF);this.Cf.Ne(2);this.Cf.L(A.jb.
ST);this.V.H(AYI);this.Aqi=A.jb.ST;this.J(this.Background,0);this.J(this.Cf,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.aaL(A.
fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.Ha;this.Background._Done(
);this.Cf._Done();this.V._Done();C.Ha._Done.call(this);},_ReInit:function(){C.Ha.
_ReInit.call(this);this.Background._ReInit();this.Cf._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Ct(A.aaL(A.fl.Bi));},_Mark:
function(D){var B;C.Ha._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APv={Eo:null,II:null
,_Init:function(aArg){C.Ew._Init.call(this,aArg);A.acg.Text._Init.call(this.Eo={
I:this},0);A.acg.Text._Init.call(this.II={I:this},0);this.__proto__=C.APv;this.H(
O0);this.Background.H(O0);this.Eo.H(AIb);this.Eo.R(A.aaR(A.acf.GG));this.Eo.A8(0x11
);this.Eo.L(A.jb.Text);this.II.A3(0x3F);this.II.H(AIc);this.II.Hs(5);this.II.A8(
0x14);this.II.R(A.aaR(A.acf.AGF));this.II.L(A.jb.Text);this.J(this.Eo,0);this.J(
this.II,0);this.Eo.S(A.aaL(A.fl.Af));this.II.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Ew;this.Eo._Done();this.II._Done();C.Ew._Done.call(this);},_ReInit:
function(){C.Ew._ReInit.call(this);this.Eo._ReInit();this.II._ReInit();this.Eo.R(
A.aaR(A.acf.GG));this.II.R(A.aaR(A.acf.AGF));this.Eo.S(A.aaL(A.fl.Af));this.II.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ew._Mark.call(this,D);if((B=this.Eo).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Si:null,Sj:null,Aeq:null,AgR:null,QE:null
,KS:0,LastTemperature:0,Aqo:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Si.Aw(A.aaL(A.ach.Avu));this.Sj.Aw(A.aaL(A.ach.Avu));}break;case 2:{this.Si.Aw(A.
aaL(A.ach.Avx));this.Sj.Aw(A.aaL(A.ach.Avx));}break;default:{this.Si.Aw(A.aaL(A.
ach.Ael));this.Sj.Aw(A.aaL(A.ach.Ael));}}this.Si.L(A._GetAutoObject(A.acj.Assessment
).Qh(this.Aqo));var ApF;if(this.IsWatch)ApF=A.aaL(A.ach.AQr);else if(this.IsFever
){ApF=A.aaL(A.ach.AQq);switch(A._GetAutoObject(A.Device.Converter).Aje(this.LastTemperature
,this.AnimalType)){case 3:this.QE.L(A.jb.Gb);break;case 2:this.QE.L(A.jb.H4);break;
case 1:this.QE.L(A.jb.EW);break;case 0:this.QE.L(A.jb.Afi);break;default:;}}else
if(this.IsAlarm){ApF=A.aaL(A.ach.AQp);if(!this.Aqo||(this.Aqo===5))this.QE.L(A.jb.
Gb);else this.QE.L(0xFF000000);}else ApF=null;this.Aeq.Aw(ApF);this.AgR.Aw(ApF);
this.QE.Aw(ApF);if(A._GetAutoObject(A.acj.Assessment).Qh(this.Aqo)===A.jb.EW)this.
Sj.L(this.KS);},Ex:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
An();},AER:function(E){if(this.Aqo===E)return;this.Aqo=E;this.An();},Dd:function(
E){if(this.KS===E)return;this.KS=E;this.An();},AeV:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.An();},Ui:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.An();},AeS:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.An();},AeX:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.An();},Hf:function(){this.Ex(0);this.AER(0);this.AeS(false);this.Ui(false
);this.AeV(false);this.AeX(0);this.Dd(A.jb.Text);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Si={I:this},0);A.acg.Am._Init.call(
this.Sj={I:this},0);A.acg.Am._Init.call(this.Aeq={I:this},0);A.acg.Am._Init.call(
this.AgR={I:this},0);A.acg.Am._Init.call(this.QE={I:this},0);this.__proto__=C.DS;
this.H(Ak9);this.Si.A3(0x3F);this.Si.H(Ak9);this.Si.L(A.jb.CI);this.Si.A8(0x12);
this.Si.Cu(0);this.Sj.A3(0x3F);this.Sj.H(Ak9);this.Sj.L(0xFF000000);this.Sj.A8(0x12
);this.Sj.Cu(1);this.Aeq.A3(0x3F);this.Aeq.H(Ak9);this.Aeq.L(0xFF000000);this.Aeq.
Cu(0);this.AgR.A3(0x3F);this.AgR.H(Ak9);this.AgR.Cu(1);this.QE.A3(0x3F);this.QE.
H(Ak9);this.QE.L(A.jb.CU);this.QE.Cu(2);this.KS=A.jb.Text;this.J(this.Si,0);this.
J(this.Sj,0);this.J(this.Aeq,0);this.J(this.AgR,0);this.J(this.QE,0);this.Si.Aw(
A.aaL(A.ach.Ael));this.Sj.Aw(A.aaL(A.ach.Ael));},_Done:function(){this.__proto__=
A.Core.O;this.Si._Done();this.Sj._Done();this.Aeq._Done();this.AgR._Done();this.
QE._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Si._ReInit();this.Sj._ReInit();this.Aeq._ReInit();this.AgR._ReInit();
this.QE._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
Si)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aeq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AMR={Ce:function(Ad){C.Ajt.Ce.call(this,Ad);if(!!this.AX){var Bzu=this.AX.HZ(
Ad,12);var BxM=this.AX.Se(Ad,15);this.Aa6.R(A._GetAutoObject(A.Device.Helper).MN(
BxM,A._GetAutoObject(A.Device.Helper).Ds()).toFixed());this.Sk.Z(Bzu);this.An();
}},_Init:function(aArg){C.Ajt._Init.call(this,aArg);this.__proto__=C.AMR;},_className:
"Application::CalfListAlarmItem"};C.AC7={DY:null,Mp:null,_Init:function(aArg){C.
TS._Init.call(this,aArg);A.acg.Text._Init.call(this.DY={I:this},0);A.acg.Am._Init.
call(this.Mp={I:this},0);this.__proto__=C.AC7;this.DY.H(Aol);this.DY.KR(true);this.
DY.R(A.aaR(A.acf.A5M));this.DY.L(A.jb.Text);this.Mp.H(AYJ);this.Mp.I3(false);this.
Mp.L(A.jb.Text);this.Mp.A8(0x12);this.J(this.DY,-2);this.J(this.Mp,0);this.DY.S(
A.aaL(A.fl.Ak));this.Mp.Aw(A.aaL(A.ach.ADw));},_Done:function(){this.__proto__=C.
TS;this.DY._Done();this.Mp._Done();C.TS._Done.call(this);},_ReInit:function(){C.
TS._ReInit.call(this);this.DY._ReInit();this.Mp._ReInit();this.DY.R(A.aaR(A.acf.
A5M));this.DY.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TS._Mark.call(this,D
);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kd={Background:null,Cf:
null,ACz:0,ABM:0,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Background.L(this.
ACz);this.Cf.L(this.ABM);},Awv:function(E){if(this.ACz===E)return;this.ACz=E;this.
An();},AEJ:function(E){if(this.ABM===E)return;this.ABM=E;this.An();},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(this.Background={I:this
},0);A.acg.Am._Init.call(this.Cf={I:this},0);this.__proto__=C.Kd;this.H(Aon);this.
Background.A3(0x3C);this.Background.H(Aon);this.Background.Cu(1);this.Cf.A3(0x3C
);this.Cf.H(Aon);this.ACz=A.jb.EW;this.ABM=A.jb.Text;this.J(this.Background,0);this.
J(this.Cf,0);this.Background.Aw(A.aaL(A.ach.Kd));this.Cf.Aw(A.aaL(A.ach.Kd));},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.Cf._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background.
_ReInit();this.Cf._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cf)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.Amw={Q:null,Pm:
null,A7e:false,Bk:function(aSize){C.Ml.Bk.call(this,aSize);this.V.H([].concat(this.
Pm.M[2]-this.V.Text.I4,this.V.M.slice(1,4)));},Ai:function(Ae){C.Ml.Ai.call(this
,Ae);this.Pm.L(this.V.AQ);},AwA:function(E){if(this.A7e===E)return;this.A7e=E;if(
E)this.Pm.R(AYK);else this.Pm.R(AId);},J$:function(G){var F;if(!!this.Q)this.AwA((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.J$],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.J$],E,0);if(!!E)
A.pe([this,this.J$],this);},_Init:function(aArg){C.Ml._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pm={I:this},0);this.__proto__=C.Amw;this.Pm.A3(0x34);this.Pm.
H(UP);this.Pm.R(AId);this.J(this.Pm,0);this.Pm.S(A.aaL(A.fl.AOm));},_Done:function(
){this.__proto__=C.Ml;this.Pm._Done();C.Ml._Done.call(this);},_ReInit:function(){
C.Ml._ReInit.call(this);this.Pm._ReInit();},_Mark:function(D){var B;C.Ml._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pm)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AON={D3:function(G){C.Ki.D3.call(this,G);this.Dc.Aw(A._GetAutoObject(A.Device.Converter
).AdM(4));},_Init:function(aArg){C.Ki._Init.call(this,aArg);this.__proto__=C.AON;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Dr:function(){return 3;},C7:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gd:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BO(aIndex);},DO:function(A7){return A7;},Hp:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APw={Gg:null,Lk:null,YK:null,Init:function(aArg){this.Lk.R(A._GetAutoObject(
A.acj.Temperature).Alz());},_Init:function(aArg){C.Ew._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gg={I:this},0);A.acg.Text._Init.call(this.Lk={I:this},0);A.
acg.Text._Init.call(this.YK={I:this},0);this.__proto__=C.APw;this.Background.L(A.
jb.Text);this.Gg.H(AIe);this.Gg.A8(0x11);this.Gg.R(A.aaR(A.acf.Date));this.Gg.L(
A.jb.Bm);this.Lk.H(AYL);this.Lk.A8(0x12);this.Lk.L(A.jb.Bm);this.YK.H(AYM);this.
YK.A8(0x12);this.YK.R(A.aaR(A.acf.Bu));this.YK.L(A.jb.Bm);this.J(this.Gg,0);this.
J(this.Lk,0);this.J(this.YK,0);this.Gg.S(A.aaL(A.fl.Af));this.Lk.S(A.aaL(A.fl.Af
));this.YK.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ew;this.Gg._Done();this.Lk._Done();this.YK._Done();C.Ew._Done.call(this);},_ReInit:
function(){C.Ew._ReInit.call(this);this.Gg._ReInit();this.Lk._ReInit();this.YK._ReInit(
);this.Gg.R(A.aaR(A.acf.Date));this.YK.R(A.aaR(A.acf.Bu));this.Gg.S(A.aaL(A.fl.Af
));this.Lk.S(A.aaL(A.fl.Af));this.YK.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ew._Mark.call(this,D);if((B=this.Gg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YK)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.Tv={Le:null,AjJ:false,Init:function(
aArg){var B;A.zX([this,this.Bbp],[B=A._GetAutoObject(A.Device.Device),B.AEi,B.AIu
],0);this.AGy(this);A.pe([this,this.AyE],this);},Dz:function(G){var D2=(A.Core.BL.
isPrototypeOf(G)?G:null);switch(D2.CN){case 6:this.Om(this);break;case 7:this.MU(
this);break;default:D2.NE=true;}},CB:function(G){var B;if(!!this.Le)this.Le.CB(this
);C.AB.CB.call(this,G);},EY:function(G){var B;if(!!this.Le)this.Le.EY(this);C.AB.
EY.call(this,G);},Anf:function(G){A._GetAutoObject(C.A1).Fs();},AGy:function(G){
var B;if(!!this.Le){this.Le.EY(this);this.HL(this.Le);}if(this.AjJ)switch(A._GetAutoObject(
A.Device.Device).D7){case 0:this.Le=A._NewObject(C.AL$,0);break;case 1:this.Le=A.
_NewObject(C.AMa,0);break;case 3:this.Le=A._NewObject(C.AL_,0);break;case 2:this.
Le=A._NewObject(C.AMb,0);break;default:throw new Error(Ayi);}else switch(A._GetAutoObject(
A.Device.Device).D7){case 0:this.Le=A._NewObject(C.AMc,0);break;case 1:this.Le=A.
_NewObject(C.AMl,0);break;case 3:this.Le=A._NewObject(C.AMf,0);break;case 2:this.
Le=A._NewObject(C.AMq,0);break;default:throw new Error(Ayi);}this.HM(this);this.
J(this.Le,0);this.Le.H(E8);this.Le.Zj([this,this.A0g]);this.Le.CB(this);this.Bb(
this.Le);},Bbp:function(s){this.AGy(s);},ATt:function(G){A._GetAutoObject(A.Device.
Device).AeL(0);},ATv:function(G){A._GetAutoObject(A.Device.Device).AeL(1);},ATu:
function(G){A._GetAutoObject(A.Device.Device).AeL(3);},ATw:function(G){A._GetAutoObject(
A.Device.Device).AeL(2);},HM:function(G){this.N.CZ(A.aaL(A.ach.EX));this.N.Ht(A.
jV);this.N.CA=[this,this.Anf];this.N.AEY(A.aaL(A.fl.Ak));},AyE:function(s){this.
HM(s);},Bmg:function(E){if(this.AjJ===E)return;this.AjJ=E;A.pe([this,this.Bbp],this
);},A_J:function(G){this.Bmg(!this.AjJ);},Bnt:function(G){A._GetAutoObject(A.Device.
Device).A_(31,true,A.jV,0,null);},MU:function(G){},BFZ:function(s){this.MU(s);},
Om:function(G){},BFY:function(s){this.Om(s);},BeJ:function(G){var FJ=A._GetAutoObject(
A.Device.Device).D7;FJ=FJ+1;if(FJ>=4)FJ=0;A._GetAutoObject(A.Device.Device).AeL(
FJ);},BAm:function(G){var FJ=A._GetAutoObject(A.Device.Device).D7;FJ=FJ-1;if(FJ<
0)FJ=3;A._GetAutoObject(A.Device.Device).AeL(FJ);},AfX:function(G){},A0g:function(
s){this.AfX(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.Tv;this.Background.H(Cc);this.N.Z(true);this.N.OL(true);this.N.OM(true);this.Dn(
C.APl);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Le)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D7={AR:null,AttrSet:null,Dk:null,CB:function(G){},AIt:function(s){this.CB(s);
},EY:function(G){A._GetAutoObject(A.Device.Device).Bv.Bl(null);},Ayu:function(s){
this.EY(s);},Zj:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dk.BM=E;},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BL._Init.call(this.Dk={I:this},0);this.__proto__=
C.D7;this.H(UR);this.AttrSet.A9C(A.jb.Gb);this.AttrSet.A9B(A.jb.H4);this.AttrSet.
Ag$(A.jb.Text);this.Dk.Filter=1;this.AttrSet.Ahc(A.aaL(A.fl.Ak));this.AttrSet.A9y(
null);},_Done:function(){this.__proto__=A.Core.O;this.AttrSet._Done();this.Dk._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AttrSet._ReInit();this.Dk._ReInit();this.AttrSet.Ahc(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dk)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMc={RM:
null,AaL:null,Tu:null,Tt:null,RQ:null,Qv:null,RR:null,RO:null,RP:null,RN:null,CS:
function(){var B;this.RM.Ce(this);this.AaL.Ce(this);this.Tu.Ce(this);this.Tt.Ce(
this);this.RQ.Ce(this);this.Qv.Ce(this);this.RR.Ce(this);this.RO.Ce(this);this.RP.
Ce(this);this.RN.Ce(this);},GA:function(G){C.RS.GA.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RM.Z(true);this.AaL.Z(false);
this.RO.Z(false);this.RP.Z(false);this.RN.Z(false);this.RQ.Z(true);this.Qv.Z(true
);this.RR.Z(true);}break;case 1:{this.RM.Z(false);this.AaL.Z(true);this.RO.Z(true
);this.RP.Z(true);this.RN.Z(true);this.RQ.Z(false);this.Qv.Z(false);this.RR.Z(false
);}break;default:A.ab5("%s%e",Ak5,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MO],this);},_Init:function(aArg){C.RS._Init.call(this,aArg);C.
RM._Init.call(this.RM={I:this},0);C.AL9._Init.call(this.AaL={I:this},0);C.Tu._Init.
call(this.Tu={I:this},0);C.Tt._Init.call(this.Tt={I:this},0);C.RQ._Init.call(this.
RQ={I:this},0);C.Qv._Init.call(this.Qv={I:this},0);C.RR._Init.call(this.RR={I:this
},0);C.RO._Init.call(this.RO={I:this},0);C.RP._Init.call(this.RP={I:this},0);C.RN.
_Init.call(this.RN={I:this},0);this.__proto__=C.AMc;this.RM.H(BF);this.RM.Aj(true
);this.RM.Bj(false);this.AaL.H(IN);this.AaL.Aj(true);this.AaL.Bj(false);this.Tu.
H(P5);this.Tu.Aj(true);this.Tu.Bj(true);this.Tt.H(Z7);this.Tt.Aj(true);this.Tt.Bj(
false);this.RQ.H(Ak7);this.RQ.Aj(true);this.RQ.Bj(true);this.Qv.H(Aoh);this.Qv.Aj(
true);this.Qv.Bj(false);this.RR.H(AsP);this.RR.Aj(true);this.RR.Bj(true);this.RO.
H(W6);this.RO.Aj(true);this.RO.Bj(true);this.RP.H(AYN);this.RP.Aj(true);this.RP.
Bj(false);this.RN.H(AIf);this.RN.Aj(true);this.RN.Bj(true);this.J(this.RM,0);this.
J(this.AaL,0);this.J(this.Tu,0);this.J(this.Tt,0);this.J(this.RQ,0);this.J(this.
Qv,0);this.J(this.RR,0);this.J(this.RO,0);this.J(this.RP,0);this.J(this.RN,0);},
_Done:function(){this.__proto__=C.RS;this.RM._Done();this.AaL._Done();this.Tu._Done(
);this.Tt._Done();this.RQ._Done();this.Qv._Done();this.RR._Done();this.RO._Done(
);this.RP._Done();this.RN._Done();C.RS._Done.call(this);},_ReInit:function(){C.RS.
_ReInit.call(this);this.RM._ReInit();this.AaL._ReInit();this.Tu._ReInit();this.Tt.
_ReInit();this.RQ._ReInit();this.Qv._ReInit();this.RR._ReInit();this.RO._ReInit(
);this.RP._ReInit();this.RN._ReInit();this.CS();},_Mark:function(D){var B;C.RS._Mark.
call(this,D);if((B=this.RM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Tu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Tt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Qv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfos"
};C.AMq={AkI:function(L1){if(!L1)return;var Fq=A._NewObject(A.Device.Filter,0);var
HT=A._NewObject(A.Device.Int32FilterCriterion,0);HT.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fq.CW(HT);var Ac0=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac0.Initialize(8,2,0,true);Fq.CW(Ac0);L1.Bl(Fq);},ADJ:function(){if(!A._GetAutoObject(
A.Device.Device).Bv)return false;var Pd=A._GetAutoObject(A.Device.Device).Bv.Cd(
);if(Pd<2)return false;var BBM=A._GetAutoObject(A.Device.Device).Bv.HD(0,6);var BBN=
A._GetAutoObject(A.Device.Device).Bv.HD(Pd-1,6);var A1O=A._NewObject(A.Core.Bu,0
);A1O.Initialize(BBM);var A3R=A._NewObject(A.Core.Bu,0);A3R.Initialize(BBN);if((
A1O.AbP()!==A3R.AbP())||(A1O.Year!==A3R.Year))return true;else return false;},_Init:
function(aArg){C.AaN._Init.call(this,aArg);this.__proto__=C.AMq;this.ASY(C.AG9);
this.ASZ(C.ADb);this.ASO(C.Qv);this.ArC(A.aaR(A.acf.AVr));this.Dx(A.aaR(A.acf.Akb
));},_ReInit:function(){C.AaN._ReInit.call(this);this.ArC(A.aaR(A.acf.AVr));this.
Dx(A.aaR(A.acf.Akb));},_className:"Application::AnimalWeights"};C.AMl={AkI:function(
L1){if(!L1)return;var Fq=A._NewObject(A.Device.Filter,0);var HT=A._NewObject(A.Device.
Int32FilterCriterion,0);HT.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id
,true);Fq.CW(HT);var AA3=A._NewObject(A.Device.Int32FilterCriterion,0);AA3.Initialize(
7,2,0,true);Fq.CW(AA3);L1.Bl(Fq);},ADJ:function(){return A._GetAutoObject(A.Device.
Device).Bv.Cd()>0;},_Init:function(aArg){C.AaN._Init.call(this,aArg);this.__proto__=
C.AMl;this.ASY(C.AUQ);this.ASZ(C.APw);this.ASO(C.Tu);this.ArC(A.aaR(A.acf.A7B));
this.Dx(A.aaR(A.acf.Ard));},_ReInit:function(){C.AaN._ReInit.call(this);this.ArC(
A.aaR(A.acf.A7B));this.Dx(A.aaR(A.acf.Ard));},_className:"Application::AnimalTemperatures"
};C.ATW={Vr:null,Vs:null,XS:null,Agt:null,Ku:null,AP:null,A$:null,D_:null,Lr:null
,AnK:null,KT:null,KU:null,ZC:null,ZD:null,Init:function(aArg){},Bk:function(aSize
){C.Ba.Bk.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Ku.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
Vr.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.D_.H([this.
Vr.M[2]-1,0,this.Vr.M[2]+1,aSize[1]]);this.Vs.H([this.Vr.M[2],0,this.Vr.M[2]+22,
aSize[1]]);this.Lr.H([this.Vs.M[2]-1,0,this.Vs.M[2]+1,aSize[1]]);this.XS.H([this.
Vs.M[2],0,this.Vs.M[2]+22,aSize[1]]);this.AnK.H([this.XS.M[2]-1,0,this.XS.M[2]+1
,aSize[1]]);this.Agt.H([this.XS.M[2],0,aSize[0],aSize[1]]);this.KT.H(this.Vr.M);
this.KU.H(this.Vs.M);this.ZC.H(this.XS.M);this.ZD.H(this.Agt.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Ku.L(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;
this.Hk=Ad;if(!!this.AX){var Alq=this.AX.HD(Ad,6);var A04=this.AX.IY(Ad,3);var A1K=
this.AX.IY(Ad,2);var A1J=this.AX.IY(Ad,5);var A3E=this.AX.IY(Ad,4);this.T(A._GetAutoObject(
A.acj.KI).ACG(Alq));this.Ku.R(A._GetAutoObject(A.acj.KI).A6u(Alq));this.Vr.L(A._GetAutoObject(
A.acj.Assessment).Qh(A04));this.Vs.L(A._GetAutoObject(A.acj.Assessment).Qh(A1K));
this.XS.L(A._GetAutoObject(A.acj.Assessment).Qh(A1J));this.Agt.L(A._GetAutoObject(
A.acj.Assessment).Qh(A3E));this.KT.L(A._GetAutoObject(A.acj.Assessment).Xo(A04));
this.KU.L(A._GetAutoObject(A.acj.Assessment).Xo(A1K));this.ZC.L(A._GetAutoObject(
A.acj.Assessment).Xo(A1J));this.ZD.L(A._GetAutoObject(A.acj.Assessment).Xo(A3E));
this.KT.Z(A04===5);this.KU.Z(A1K===5);this.ZC.Z(A1J===5);this.ZD.Z(A3E===5);this.
An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
Vr={I:this},0);A.acg.AL._Init.call(this.Vs={I:this},0);A.acg.AL._Init.call(this.
XS={I:this},0);A.acg.AL._Init.call(this.Agt={I:this},0);A.acg.Text._Init.call(this.
Ku={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);A.acg.AL._Init.call(this.D_={I:this},0);A.acg.AL._Init.call(this.
Lr={I:this},0);A.acg.AL._Init.call(this.AnK={I:this},0);A.acg.Text._Init.call(this.
KT={I:this},0);A.acg.Text._Init.call(this.KU={I:this},0);A.acg.Text._Init.call(this.
ZC={I:this},0);A.acg.Text._Init.call(this.ZD={I:this},0);this.__proto__=C.ATW;this.
V.H(O1);this.Vr.H(AYO);this.Vs.H(AYP);this.XS.H(AYQ);this.Agt.H(AYR);this.Ku.R(Rh
);this.Ku.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.D_.L(A.jb.Bc);
this.Lr.L(A.jb.Bc);this.AnK.L(A.jb.Bc);this.KT.H(AYS);this.KT.R(Rj);this.KU.H(AYT
);this.KU.R(Rj);this.ZC.H(AYU);this.ZC.R(Rj);this.ZD.H(AYV);this.ZD.R(Rj);this.J(
this.Vr,0);this.J(this.Vs,0);this.J(this.XS,0);this.J(this.Agt,0);this.J(this.Ku
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.D_,0);this.J(this.Lr,0);this.
J(this.AnK,0);this.J(this.KT,0);this.J(this.KU,0);this.J(this.ZC,0);this.J(this.
ZD,0);this.Ku.S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af
));this.ZC.S(A.aaL(A.fl.Af));this.ZD.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.Vr._Done();this.Vs._Done();this.XS._Done();this.Agt._Done(
);this.Ku._Done();this.AP._Done();this.A$._Done();this.D_._Done();this.Lr._Done(
);this.AnK._Done();this.KT._Done();this.KU._Done();this.ZC._Done();this.ZD._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Vr._ReInit(
);this.Vs._ReInit();this.XS._ReInit();this.Agt._ReInit();this.Ku._ReInit();this.
AP._ReInit();this.A$._ReInit();this.D_._ReInit();this.Lr._ReInit();this.AnK._ReInit(
);this.KT._ReInit();this.KU._ReInit();this.ZC._ReInit();this.ZD._ReInit();this.Ku.
S(A.aaL(A.fl.Af));this.KT.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.ZC.S(
A.aaL(A.fl.Af));this.ZD.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.Vr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vs)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agt)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ku)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APu={Gg:null,YQ:null,YM:null,YN:null,YO:null,YP:
null,_Init:function(aArg){C.Ew._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gg={I:this},0);A.acg.Text._Init.call(this.YQ={I:this},0);A.acg.Text._Init.call(this.
YM={I:this},0);A.acg.Text._Init.call(this.YN={I:this},0);A.acg.Text._Init.call(this.
YO={I:this},0);A.acg.Text._Init.call(this.YP={I:this},0);this.__proto__=C.APu;this.
Background.L(A.jb.Text);this.Gg.H(AIe);this.Gg.A8(0x11);this.Gg.R(A.aaR(A.acf.Date
));this.Gg.L(A.jb.Bm);this.YQ.H(AH8);this.YQ.A8(0x12);this.YQ.R(A.aaR(A.acf.Bu));
this.YQ.L(A.jb.Bm);this.YM.H(AYW);this.YM.A8(0x12);this.YM.R(A.aaR(A.acf.ATY));this.
YM.L(A.jb.Bm);this.YN.H(AYX);this.YN.A8(0x12);this.YN.R(A.aaR(A.acf.ATZ));this.YN.
L(A.jb.Bm);this.YO.H(AYY);this.YO.A8(0x12);this.YO.R(A.aaR(A.acf.AOi));this.YO.L(
A.jb.Bm);this.YP.H(AYZ);this.YP.A8(0x12);this.YP.R(A.aaR(A.acf.ANe));this.YP.L(A.
jb.Bm);this.J(this.Gg,0);this.J(this.YQ,0);this.J(this.YM,0);this.J(this.YN,0);this.
J(this.YO,0);this.J(this.YP,0);this.Gg.S(A.aaL(A.fl.Af));this.YQ.S(A.aaL(A.fl.Af
));this.YM.S(A.aaL(A.fl.Af));this.YN.S(A.aaL(A.fl.Af));this.YO.S(A.aaL(A.fl.Af));
this.YP.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ew;this.Gg._Done();
this.YQ._Done();this.YM._Done();this.YN._Done();this.YO._Done();this.YP._Done();
C.Ew._Done.call(this);},_ReInit:function(){C.Ew._ReInit.call(this);this.Gg._ReInit(
);this.YQ._ReInit();this.YM._ReInit();this.YN._ReInit();this.YO._ReInit();this.YP.
_ReInit();this.Gg.R(A.aaR(A.acf.Date));this.YQ.R(A.aaR(A.acf.Bu));this.YM.R(A.aaR(
A.acf.ATY));this.YN.R(A.aaR(A.acf.ATZ));this.YO.R(A.aaR(A.acf.AOi));this.YP.R(A.
aaR(A.acf.ANe));this.Gg.S(A.aaL(A.fl.Af));this.YQ.S(A.aaL(A.fl.Af));this.YM.S(A.
aaL(A.fl.Af));this.YN.S(A.aaL(A.fl.Af));this.YO.S(A.aaL(A.fl.Af));this.YP.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.Ew._Mark.call(this,D);if((B=this.Gg)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YP)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMf={AkI:function(L1){if(!L1)return;
var Fq=A._NewObject(A.Device.Filter,0);var HT=A._NewObject(A.Device.Int32FilterCriterion
,0);HT.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fq.CW(HT);var
AAL=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAL.Initialize(3,5,0,true
);Fq.CW(AAL);L1.Bl(Fq);},ADJ:function(){if(!A._GetAutoObject(A.Device.Device).Bv
)return false;return A._GetAutoObject(A.Device.Device).Bv.Cd()>0;},_Init:function(
aArg){C.AaN._Init.call(this,aArg);this.__proto__=C.AMf;this.ASY(C.ATW);this.ASZ(
C.APu);this.ASO(C.Tt);this.ArC(A.aaR(A.acf.Axd));this.Dx(A.aaR(A.acf.Ane));},_ReInit:
function(){C.AaN._ReInit.call(this);this.ArC(A.aaR(A.acf.Axd));this.Dx(A.aaR(A.acf.
Ane));},_className:"Application::AnimalRatings"};C.IA={B7:null,Y:null,V:null,Un:
5,T:function(E){C.IV.T.call(this,E);this.V.R(E);},Dd:function(E){C.IV.Dd.call(this
,E);this.V.L(E);},S:function(E){if(this.B7===E)return;this.B7=E;this.V.S(this.B7
);},AuH:function(G){var B;var Nv=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nv)return;
if(((B=Nv.Da(0x1))[2]-B[0])>((B=Nv.M)[2]-B[0]))this.S(A.aaL(A.fl.Ih));},Km:function(
E){if(this.Un===E)return;this.Un=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAF:function(G){A.pe([this,this.AuH],this);},_Init:function(aArg){C.IV._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IA;this.Y.A3(0x3F);this.Y.H(AIg);this.Y.A_r(5);this.
Y.JN(3);this.V.A3(0x34);this.V.H(Z_);this.V.I3(true);this.V.A8(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.Ej=[this,this.
AAF];this.V.S(A.aaL(A.fl.Kh));},_Done:function(){this.__proto__=C.IV;this.Y._Done(
);this.V._Done();C.IV._Done.call(this);},_ReInit:function(){C.IV._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kh));},_Mark:function(D){
var B;C.IV._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RM={AfE:0,Ai:function(Ae){C.Fr.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RI));if(this.AfE>=0)this.Kp((this.AfE.toFixed(
)+CO)+A.aaR(A.acf.Ke));else this.Kp(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fr.
Ce.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfE=-1;
else this.AfE=A._GetAutoObject(A.Device.Helper).W.RI();this.An();},_Init:function(
aArg){C.Fr._Init.call(this,aArg);this.__proto__=C.RM;},_className:"Application::AnimalInfoItemAge"
};C.RQ={A4k:0,Ai:function(Ae){C.Fr.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afj));if(
this.A4k>0)this.Kp((A._GetAutoObject(A.Device.Converter).AkX(this.A4k)+CO)+A._GetAutoObject(
A.acj.DU).AfR());else this.Kp(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fr.Ce.call(
this,G);this.A4k=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.An();},
_Init:function(aArg){C.Fr._Init.call(this,aArg);this.__proto__=C.RQ;},_className:
"Application::AnimalInfoItemWeight"};C.Tu={Y:null,Ef:null,Eu:null,E7:null,PR:null
,E6:null,PT:null,Ai_:0,Pc:0,CS:function(){this.An();},Ai:function(Ae){C.JD.Ai.call(
this,Ae);this.T(A.aaR(A.acf.BhJ));this.E7.R(this.Ai_.toFixed());this.E6.R(this.Pc.
toFixed());if(!!this.Ai_||!!this.Pc)this.PT.R(AY0+(this.Ai_+this.Pc).toFixed());
else this.PT.R(A.aaR(A.acf.ARV));},Ce:function(G){C.JD.Ce.call(this,G);var AkP;AkP=
A._GetAutoObject(A.Device.Helper).Bix(A._GetAutoObject(A.Device.Device).Bv,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ai_=AkP.Get(2);this.Pc=AkP.Get(1);this.An();},Dd:
function(E){C.JD.Dd.call(this,E);this.PR.L(E);this.PT.L(E);},Asw:function(G){if(
!!this.Ai_||!!this.Pc){this.E7.Z(true);this.PR.Z(true);this.E6.Z(true);}else{this.
E7.Z(false);this.PR.Z(false);this.E6.Z(false);}this.Ef.H(this.E7.M);this.Ef.Z(this.
E7.Fi());this.Eu.H(this.E6.M);this.Eu.Z(this.E6.Fi());},AuH:function(G){var B;var
Nv=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nv)return;if(((B=Nv.Da(0x1))[2]-B[0])>((
B=Nv.M)[2]-B[0])){this.E6.S(A.aaL(A.fl.Ak));this.PR.S(A.aaL(A.fl.Ak));this.E7.S(
A.aaL(A.fl.Ak));this.PT.S(A.aaL(A.fl.Ak));}},AAF:function(G){A.pe([this,this.AuH
],this);},_Init:function(aArg){C.JD._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.Ef={I:this},0);A.acg.AL._Init.call(this.Eu={
I:this},0);A.acg.Text._Init.call(this.E7={I:this},0);A.acg.Text._Init.call(this.
PR={I:this},0);A.acg.Text._Init.call(this.E6={I:this},0);A.acg.Text._Init.call(this.
PT={I:this},0);this.__proto__=C.Tu;this.Y.H(Ayj);this.Y.Bnc(0);this.Y.JN(3);this.
Ef.H(AY1);this.Ef.L(A.jb.H4);this.Eu.H(Ayg);this.Eu.L(A.jb.Gb);this.E7.A3(0x34);
this.E7.H(Z_);this.E7.Hs(2);this.E7.I3(true);this.E7.R(US);this.E7.L(A.jb.Text);
this.E7.Aj(true);this.PR.A3(0x34);this.PR.H(Z_);this.PR.I3(true);this.PR.R(AHZ);
this.PR.L(A.jb.Text);this.PR.Aj(true);this.E6.A3(0x34);this.E6.H(Z_);this.E6.Hs(
2);this.E6.I3(true);this.E6.R(US);this.E6.L(A.jb.Bm);this.E6.Aj(true);this.PT.A3(
0x34);this.PT.H(Z_);this.PT.I3(true);this.PT.R(Rh);this.PT.L(A.jb.Text);this.PT.
Aj(true);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Eu,0);this.J(this.E7,0);
this.J(this.PR,0);this.J(this.E6,0);this.J(this.PT,0);this.Y.Ej=[this,this.AAF];
this.E7.Q0([this,this.Asw]);this.E7.S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));
this.E6.Q0([this,this.Asw]);this.E6.S(A.aaL(A.fl.Af));this.PT.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JD;this.Y._Done();this.Ef._Done();this.Eu._Done(
);this.E7._Done();this.PR._Done();this.E6._Done();this.PT._Done();C.JD._Done.call(
this);},_ReInit:function(){C.JD._ReInit.call(this);this.Y._ReInit();this.Ef._ReInit(
);this.Eu._ReInit();this.E7._ReInit();this.PR._ReInit();this.E6._ReInit();this.PT.
_ReInit();this.E7.S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));this.E6.S(A.aaL(A.
fl.Af));this.PT.S(A.aaL(A.fl.Af));this.CS();},_Mark:function(D){var B;C.JD._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Eu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E7
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PT)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qv={FP:0,H9:0
,A2a:false,Ai:function(Ae){C.Fr.Ai.call(this,Ae);this.T(AY2+A.aaR(A.acf.AG4));if(
this.A2a){this.Kp((A._GetAutoObject(A.Device.Converter).S0(this.FP,2,true)+CO)+A.
_GetAutoObject(A.acj.DU).Aan());this.Background.L(A._GetAutoObject(A.acj.DU).AzE(
this.FP,this.H9));this.Dd(A._GetAutoObject(A.acj.DU).AzG(this.FP,this.H9));}else{
this.Kp(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CI);this.Dd(A.jb.Text);}},Ce:
function(G){C.Fr.Ce.call(this,G);var LC=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LC){this.A2a=true;this.FP=A._GetAutoObject(A.acj.DU).Aln(LC,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2a=false;this.FP=0;}this.H9=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.An();},_Init:function(aArg){C.Fr._Init.call(this,aArg);this.__proto__=C.Qv;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tt={Y:null,FQ:null,Ef:
null,Eu:null,ME:null,E7:null,E6:null,OU:null,Aap:0,Ai_:0,Pc:0,CS:function(){this.
An();},Ai:function(Ae){C.JD.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axd));this.ME.R(
this.Aap.toFixed());this.E7.R(this.Ai_.toFixed());this.E6.R(this.Pc.toFixed());}
,Ce:function(G){C.JD.Ce.call(this,G);var AkP;AkP=A._GetAutoObject(A.Device.Helper
).A6A(A._GetAutoObject(A.Device.Device).Bv,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aap=AkP.Get(3);this.Ai_=AkP.Get(2);this.Pc=AkP.Get(1);this.An();},Asw:
function(G){if((!!this.Aap||!!this.Ai_)||!!this.Pc){this.ME.Z(true);this.E7.Z(true
);this.E6.Z(true);this.OU.Z(false);}else{this.ME.Z(false);this.E7.Z(false);this.
E6.Z(false);this.OU.Z(true);}this.FQ.H(this.ME.M);this.FQ.Z(this.ME.Fi());this.Ef.
H(this.E7.M);this.Ef.Z(this.E7.Fi());this.Eu.H(this.E6.M);this.Eu.Z(this.E6.Fi()
);},AuH:function(G){var B;var Nv=(A.Core.Y.isPrototypeOf(G)?G:null);if(!Nv)return;
if(((B=Nv.Da(0x1))[2]-B[0])>((B=Nv.M)[2]-B[0])){this.E6.S(A.aaL(A.fl.Ak));this.E7.
S(A.aaL(A.fl.Ak));this.ME.S(A.aaL(A.fl.Ak));}},AAF:function(G){A.pe([this,this.AuH
],this);},_Init:function(aArg){C.JD._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FQ={I:this},0);A.acg.AL._Init.call(this.Ef={
I:this},0);A.acg.AL._Init.call(this.Eu={I:this},0);A.acg.Text._Init.call(this.ME={
I:this},0);A.acg.Text._Init.call(this.E7={I:this},0);A.acg.Text._Init.call(this.
E6={I:this},0);A.acg.Text._Init.call(this.OU={I:this},0);this.__proto__=C.Tt;this.
Y.A3(0x3F);this.Y.H(Ayj);this.Y.A_r(5);this.Y.JN(3);this.FQ.H(AY3);this.FQ.L(A.jb.
EW);this.Ef.H(Aoo);this.Ef.L(A.jb.H4);this.Eu.H(AY4);this.Eu.L(A.jb.Gb);this.ME.
A3(0x3C);this.ME.H(Z_);this.ME.Hs(2);this.ME.I3(true);this.ME.R(US);this.ME.L(A.
jb.Text);this.ME.Aj(true);this.E7.A3(0x3C);this.E7.H(Z_);this.E7.Hs(2);this.E7.I3(
true);this.E7.R(US);this.E7.L(A.jb.Text);this.E7.Aj(true);this.E6.A3(0x3C);this.
E6.H(Z_);this.E6.Hs(2);this.E6.I3(true);this.E6.R(US);this.E6.L(A.jb.Bm);this.E6.
Aj(true);this.OU.A3(0x34);this.OU.H(Z_);this.OU.I3(true);this.OU.A8(0x11);this.OU.
R(A.aaR(A.acf.ARV));this.OU.L(A.jb.Text);this.OU.Aj(true);this.OU.Z(false);this.
J(this.Y,0);this.J(this.FQ,0);this.J(this.Ef,0);this.J(this.Eu,0);this.J(this.ME
,0);this.J(this.E7,0);this.J(this.E6,0);this.J(this.OU,0);this.Y.Ej=[this,this.AAF
];this.ME.Q0([this,this.Asw]);this.ME.S(A.aaL(A.fl.Af));this.E7.Q0([this,this.Asw
]);this.E7.S(A.aaL(A.fl.Af));this.E6.Q0([this,this.Asw]);this.E6.S(A.aaL(A.fl.Af
));this.OU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JD;this.Y._Done(
);this.FQ._Done();this.Ef._Done();this.Eu._Done();this.ME._Done();this.E7._Done(
);this.E6._Done();this.OU._Done();C.JD._Done.call(this);},_ReInit:function(){C.JD.
_ReInit.call(this);this.Y._ReInit();this.FQ._ReInit();this.Ef._ReInit();this.Eu.
_ReInit();this.ME._ReInit();this.E7._ReInit();this.E6._ReInit();this.OU._ReInit(
);this.OU.R(A.aaR(A.acf.ARV));this.ME.S(A.aaL(A.fl.Af));this.E7.S(A.aaL(A.fl.Af)
);this.E6.S(A.aaL(A.fl.Af));this.OU.S(A.aaL(A.fl.Af));this.CS();},_Mark:function(
D){var B;C.JD._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Eu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E6)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.ALZ={_Init:function(aArg){C.Aja._Init.call(
this,aArg);this.__proto__=C.ALZ;this.N.B2(A.aaR(A.acf.A7O));this.A4v=1;this.Rd.Ct(
A.aaL(A.fl.Ak));},_ReInit:function(){C.Aja._ReInit.call(this);this.N.B2(A.aaR(A.
acf.A7O));this.Rd.Ct(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.GC={_Init:function(aArg){C.Aja._Init.call(this,aArg);this.__proto__=C.GC;this.
N.B2(A.aaR(A.acf.A47));this.N9.R(A.aaR(A.acf.AuK));},_ReInit:function(){C.Aja._ReInit.
call(this);this.N.B2(A.aaR(A.acf.A47));this.N9.R(A.aaR(A.acf.AuK));},_className:
"Application::AnimalListActionsScreen"};C.AQK={OG:null,IJ:null,H1:null,IH:null,GI:
null,AlP:function(G){A.pe([this,this.BzT],this);},BzT:function(G){A._GetAutoObject(
C.A1).BU(3);},_Init:function(aArg){C.Cv._Init.call(this,aArg);C.OG._Init.call(this.
OG={I:this},0);C.BZ._Init.call(this.IJ={I:this},0);C.SI._Init.call(this.H1={I:this
},0);C.AGv._Init.call(this.IH={I:this},0);C.Q7._Init.call(this.GI={I:this},0);this.
__proto__=C.AQK;var B;this.JP(A.aaR(A.acf.A$r));this.IJ.H(AhQ);this.IJ.Aj(true);
this.IJ.T(A.aaR(A.acf.Language));this.IJ.A9$(100);this.H1.H(W7);this.H1.Aj(true);
this.H1.T(A.aaR(A.acf.Date));this.H1.Bj(true);this.IH.H(Z8);this.IH.Aj(true);this.
IH.T(A.aaR(A.acf.Bu));this.GI.H(AhP);this.GI.Aj(true);this.GI.Z(true);this.GI.T(
A.aaR(A.acf.AF2));this.GI.Bj(true);this.GI.ArM(false);this.GI.A_h(true);this.JU(
this.Y,-1);this.JU(this.Ay,-1);this.J(this.IJ,0);this.J(this.H1,0);this.J(this.IH
,0);this.J(this.GI,0);this.IJ.Wq(A.aaL(A.fl.Ho));this.IJ.Wr(A.aaL(A.fl.Ho));this.
IJ.As([B=this.OG,B.B$,B.Ca]);this.IJ.CJ(this.OG);this.H1.AeK([B=this.H1,B.FO]);this.
H1.Gk([this,this.D8,this.GK]);this.H1.Akp(A.aaL(A.ach.Edit));this.H1.AbZ([B=A._GetAutoObject(
A.Device.Helper),B.UT,B.UU]);this.IH.AeK([B=this.IH,B.FO]);this.IH.Gk([this,this.
D8,this.GK]);this.IH.Akp(A.aaL(A.ach.Edit));this.IH.AbZ([B=A._GetAutoObject(A.Device.
Helper),B.UT,B.UU]);this.GI.AeK([B=this.GI,B.FO]);this.GI.Gk([this,this.D8,this.
GK]);this.GI.Akp(A.aaL(A.ach.Edit));this.GI.As([B=A._GetAutoObject(A.Device.Device
),B.ASn,B.AZ2]);},_Done:function(){this.__proto__=C.Cv;this.OG._Done();this.IJ._Done(
);this.H1._Done();this.IH._Done();this.GI._Done();C.Cv._Done.call(this);},_ReInit:
function(){C.Cv._ReInit.call(this);this.OG._ReInit();this.IJ._ReInit();this.H1._ReInit(
);this.IH._ReInit();this.GI._ReInit();this.JP(A.aaR(A.acf.A$r));this.IJ.T(A.aaR(
A.acf.Language));this.H1.T(A.aaR(A.acf.Date));this.IH.T(A.aaR(A.acf.Bu));this.GI.
T(A.aaR(A.acf.AF2));},_Mark:function(D){var B;C.Cv._Mark.call(this,D);if((B=this.
OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaN={Bh:null,Fu:null,AmQ:null,Amz:null,R9:null,A6V:A.jV,KK:A.jV,ARb:null,ARc:
null,AC6:null,CB:function(G){var B;C.D7.CB.call(this,G);A.zX([this,this.A2I],[B=
A._GetAutoObject(A.Device.Helper).W,B.QW,B.OnSetId],0);this.A2I(this);},EY:function(
G){var B;A.z$([this,this.A2I],[B=A._GetAutoObject(A.Device.Helper).W,B.QW,B.OnSetId
],0);C.D7.EY.call(this,G);},Zj:function(E){C.D7.Zj.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bh)this.Bh.Zj(E);},ASY:function(E){if(this.ARb===E)return;this.
ARb=E;if(!!this.Bh)this.Bh.NX(E);},ASZ:function(E){if(this.ARc===E)return;this.ARc=
E;this.BoC(this);},ASO:function(E){if(this.AC6===E)return;this.AC6=E;A.pe([this,
this.BoB],this);},ArC:function(E){if(this.A6V===E)return;this.A6V=E;this.R9.R(E);
},Dx:function(E){if(this.KK===E)return;this.KK=E;if(!!this.Bh)this.Bh.Dx(E);},AkI:
function(L1){A.ab5("%s",AY5);},ADJ:function(){A.ab5("%s",Ak6);return false;},Axl:
function(G){if(!!this.Bh)this.HL(this.Bh);this.Bh=A._NewObject(C.FY,0);this.Bh.H(
AsY);this.Bh.Zi(A._GetAutoObject(A.Device.Device).Bv);this.Bh.Dx(this.KK);this.Bh.
NX(this.ARb);this.Bh.Zj(this.AR);this.J(this.Bh,0);this.Bb(this.Bh);},BoC:function(
G){var B;if(!!this.Fu)this.HL(this.Fu);this.Fu=(C.Ew.isPrototypeOf(B=A._NewObject(
this.ARc,0))?B:null);this.Fu.H(IN);this.J(this.Fu,0);},BoB:function(G){var B;if(
!!this.AmQ)this.HL(this.AmQ);if(!!this.AC6&&this.ADJ()){this.AmQ=(C.IV.isPrototypeOf(
B=A._NewObject(this.AC6,0))?B:null);this.AmQ.H(BF);this.AmQ.Bj(false);this.J(this.
AmQ,0);this.R9.Z(false);}else this.R9.Z(true);},A2I:function(G){this.AkI(A._GetAutoObject(
A.Device.Device).Bv);this.Axl(this);},_Init:function(aArg){C.D7._Init.call(this,
aArg);A.acg.AL._Init.call(this.Amz={I:this},0);C.CG._Init.call(this.R9={I:this},
0);this.__proto__=C.AaN;this.Amz.H(BF);this.Amz.L(A.jb.CI);this.R9.H(AHy);this.R9.
A8(0x11);this.R9.L(A.jb.Text);this.J(this.Amz,0);this.J(this.R9,0);this.R9.S(A.aaL(
A.fl.Kh));this.R9.A2(A.aaL(A.fl.Ih));},_Done:function(){this.__proto__=C.D7;this.
Amz._Done();this.R9._Done();C.D7._Done.call(this);},_ReInit:function(){C.D7._ReInit.
call(this);this.Amz._ReInit();this.R9._ReInit();this.R9.S(A.aaL(A.fl.Kh));this.R9.
A2(A.aaL(A.fl.Ih));},_Mark:function(D){var B;C.D7._Mark.call(this,D);if((B=this.
Bh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amz)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.JE={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bcj],[B=A._GetAutoObject(A.Device.Device),B.AEj,B.AIv],0);A.pe([this,this.Bcj],this
);},Dr:function(){return 4;},Gd:function(aIndex){return this.AnimalListContentToString.
BO(this.C7(aIndex));},As:function(E){C.CQ.As.call(this,E);A._GetAutoObject(A.Device.
Device).AbT(E);},Bcj:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.JE;this.Cr.Set(0,0);this.Cr.Set(1,1);this.Cr.Set(2,2
);this.Cr.Set(3,3);this.Init(aArg);},_Done:function(){this.__proto__=C.CQ;this.AnimalListContentToString.
_Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.
AnimalListContentToString._ReInit();},_Mark:function(D){var B;C.CQ._Mark.call(this
,D);if((B=this.AnimalListContentToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListContent"};C.ARg={IJ:null,Y2:null,Y$:null,Y9:null,Za:null
,Y3:null,Y7:null,Y_:null,Y6:null,OG:null,_Init:function(aArg){C.Cv._Init.call(this
,aArg);C.BZ._Init.call(this.IJ={I:this},0);C.NV._Init.call(this.Y2={I:this},0);C.
NV._Init.call(this.Y$={I:this},0);C.NV._Init.call(this.Y9={I:this},0);C.NV._Init.
call(this.Za={I:this},0);C.NV._Init.call(this.Y3={I:this},0);C.NV._Init.call(this.
Y7={I:this},0);C.NV._Init.call(this.Y_={I:this},0);C.NV._Init.call(this.Y6={I:this
},0);C.OG._Init.call(this.OG={I:this},0);this.__proto__=C.ARg;var B;this.JP(A.aaR(
A.acf.Settings));this.IJ.H(AhQ);this.IJ.Aj(true);this.IJ.T(A.aaR(A.acf.Language)
);this.IJ.A9$(100);this.Y2.H(AsZ);this.Y2.Aj(true);this.Y2.T(A.aaR(A.acf.ACh));this.
Y2.NY(16);this.Y$.H(As0);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.AGZ));this.Y$.NY(
22);this.Y9.H(As1);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.Temperature));this.Y9.
NY(17);this.Za.H(Ayk);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.ACd));this.Za.NY(46
);this.Y3.H(Aop);this.Y3.Aj(true);this.Y3.T(A.aaR(A.acf.Device));this.Y3.NY(18);
this.Y7.H(Aop);this.Y7.Aj(true);this.Y7.T(A.aaR(A.acf.Ar7));this.Y7.NY(19);this.
Y_.H(AIh);this.Y_.Aj(true);this.Y_.T(A.aaR(A.acf.LinkTransponder));this.Y_.NY(101
);this.Y6.H(Ayb);this.Y6.Aj(true);this.Y6.T(A.aaR(A.acf.ACx));this.Y6.NY(87);this.
J(this.IJ,0);this.J(this.Y2,0);this.J(this.Y$,0);this.J(this.Y9,0);this.J(this.Za
,0);this.J(this.Y3,0);this.J(this.Y7,0);this.J(this.Y_,0);this.J(this.Y6,0);this.
IJ.Wq(A.aaL(A.fl.Ho));this.IJ.Wr(A.aaL(A.fl.Ho));this.IJ.As([B=this.OG,B.B$,B.Ca
]);this.IJ.CJ(this.OG);this.Y2.AR=[B=this.Y2,B.NZ];this.Y$.AR=[B=this.Y$,B.NZ];this.
Y9.AR=[B=this.Y9,B.NZ];this.Za.AR=[B=this.Za,B.NZ];this.Y3.AR=[B=this.Y3,B.NZ];this.
Y7.AR=[B=this.Y7,B.NZ];this.Y_.AR=[B=this.Y_,B.NZ];this.Y6.AR=[B=this.Y6,B.NZ];}
,_Done:function(){this.__proto__=C.Cv;this.IJ._Done();this.Y2._Done();this.Y$._Done(
);this.Y9._Done();this.Za._Done();this.Y3._Done();this.Y7._Done();this.Y_._Done(
);this.Y6._Done();this.OG._Done();C.Cv._Done.call(this);},_ReInit:function(){C.Cv.
_ReInit.call(this);this.IJ._ReInit();this.Y2._ReInit();this.Y$._ReInit();this.Y9.
_ReInit();this.Za._ReInit();this.Y3._ReInit();this.Y7._ReInit();this.Y_._ReInit(
);this.Y6._ReInit();this.OG._ReInit();this.JP(A.aaR(A.acf.Settings));this.IJ.T(A.
aaR(A.acf.Language));this.Y2.T(A.aaR(A.acf.ACh));this.Y$.T(A.aaR(A.acf.AGZ));this.
Y9.T(A.aaR(A.acf.Temperature));this.Za.T(A.aaR(A.acf.ACd));this.Y3.T(A.aaR(A.acf.
Device));this.Y7.T(A.aaR(A.acf.Ar7));this.Y_.T(A.aaR(A.acf.LinkTransponder));this.
Y6.T(A.aaR(A.acf.ACx));},_Mark:function(D){var B;C.Cv._Mark.call(this,D);if((B=this.
IJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OG
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"};
C.AMa={EQ:null,Init:function(aArg){this.EQ.Ahg(A._NewObject(A.Core.Bu,0).Initialize(
A._GetAutoObject(A.Device.Helper).Ds()).Format(A.aaR(A.acf.AgK)));},AT3:function(
){this.EQ.AeO(this.AOI());this.Aar=!this.EQ.EU.AY;},AiN:function(G){this.EQ.Ahg(
A._NewObject(A.Core.Bu,0).Initialize(A._GetAutoObject(A.Device.Helper).Ds()).Format(
A.aaR(A.acf.AgK)));this.AT3();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dx(A.aaR(A.acf.A72));else this.Dx(A.aaR(A.acf.Ard));this.An();},AOI:function(
){var BD=A._NewObject(C.Aqh,0);var Qe=A._GetAutoObject(A.Device.Helper).ANY(A._GetAutoObject(
A.Device.Helper).Ds());var Du=A._GetAutoObject(A.Device.Helper).Aqd(Qe-(86400*this.
Mt));BD.Anr(As2);BD.QX([].concat(0,BD.Gc.slice(1,4)));BD.QX(A.abN(BD.Gc,(Qe-Du)|
0));BD.QX(A.abP(BD.Gc,3400));BD.QX([].concat(BD.Gc.slice(0,3),4200));var F$=A._GetAutoObject(
A.Device.Device).Bv.Cd();BD.AwF(F$);BD.Ya();if(F$>0){var P=0;while(P<F$){var ApN=
A._GetAutoObject(A.Device.Device).Bv.CE(P,7);var ApO=A._GetAutoObject(A.Device.Device
).Bv.HD(P,6)-Du;if(ApN>0)BD.Ap8(ApO,ApN);P=P+1;}}return BD;},_Init:function(aArg
){C.K9._Init.call(this,aArg);C.AqJ._Init.call(this.EQ={I:this},0);this.__proto__=
C.AMa;this.EQ.H(AY6);this.EQ.T(A.aaR(A.acf.Temperature));this.EQ.AE1(C.AGJ);this.
J(this.EQ,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.EQ._Done(
);C.K9._Done.call(this);},_ReInit:function(){C.K9._ReInit.call(this);this.EQ._ReInit(
);this.EQ.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K9._Mark.call(
this,D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMb={ZT:null,OX:null,AgE:null,Aar:false,Init:function(aArg){this.ZT.Ahg(A._NewObject(
A.Core.Bu,0).Initialize(A._GetAutoObject(A.Device.Helper).Ds()).Format(A.aaR(A.acf.
AgK)));},Ai:function(Ae){C.D7.Ai.call(this,Ae);this.AgE.Z(this.Aar);},CB:function(
G){var B;C.D7.CB.call(this,G);A.zX([this,this.AiN],[B=A._GetAutoObject(A.Device.
Helper),B.UT,B.UU],0);A.zV([this,this.AiN],A._GetAutoObject(A.Device.Device).Bv,
0);A.zX([this,this.Al3],[B=A._GetAutoObject(A.Device.Helper).W,B.QW,B.OnSetId],0
);A.pe([this,this.Al3],this);},EY:function(G){var B;A.z$([this,this.AiN],[B=A._GetAutoObject(
A.Device.Helper),B.UT,B.UU],0);A.z9([this,this.AiN],A._GetAutoObject(A.Device.Device
).Bv,0);A.z$([this,this.Al3],[B=A._GetAutoObject(A.Device.Helper).W,B.QW,B.OnSetId
],0);C.D7.EY.call(this,G);},Al3:function(G){var Fq=A._NewObject(A.Device.Filter,
0);var HT=A._NewObject(A.Device.Int32FilterCriterion,0);HT.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fq.CW(HT);A._GetAutoObject(A.Device.Device).Bv.Bl(Fq
);},AiN:function(G){this.ZT.Ahg(A._NewObject(A.Core.Bu,0).Initialize(A._GetAutoObject(
A.Device.Helper).Ds()).Format(A.aaR(A.acf.AgK)));this.BnY();this.An();},BnY:function(
){var B;var F$=A._GetAutoObject(A.Device.Device).Bv.Cd();var K7=A._NewObject(C.Aqh
,0);var Vf=A._NewObject(C.Aqh,0);var Qe=A._GetAutoObject(A.Device.Helper).ANY(A.
_GetAutoObject(A.Device.Helper).Ds());var Du=A._GetAutoObject(A.Device.Helper).Aqd(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K7.QX([].concat(0,K7.Gc.slice(1
,4)));K7.QX(A.abN(K7.Gc,(Qe-Du)|0));K7.QX(A.abP(K7.Gc,0));K7.QX([].concat(K7.Gc.
slice(0,3),150000));K7.Anr(AY7);Vf.QX([].concat(0,Vf.Gc.slice(1,4)));Vf.QX(A.abN(
Vf.Gc,(Qe-Du)|0));Vf.QX(A.abP(Vf.Gc,0));Vf.QX([].concat(Vf.Gc.slice(0,3),1500));
Vf.Anr(AY8);K7.AwF(F$);K7.Ya();Vf.AwF(F$);Vf.Ya();if(F$>0){var P=0;var Aat=0;var
Az5=0;var AJR=0;var A1P=0;var BcY=true;while(P<F$){var AlY=A._GetAutoObject(A.Device.
Device).Bv.CE(P,8);var AaE=A._GetAutoObject(A.Device.Device).Bv.HD(P,6)-Du;if(AlY>
0){K7.Ap8(AaE,AlY);if(!A1P){A1P=AaE;AJR=AlY;}if(Az5>0){var LC=A._GetAutoObject(A.
Device.Helper).MN(Az5,AaE);if(!!LC){var FP=A._GetAutoObject(A.acj.DU).Aln(LC,Aat
,AlY);if(BcY){Vf.Ap8(Az5,FP);BcY=false;}Vf.Ap8(AaE,FP);}}Aat=AlY;Az5=AaE;}P=P+1;
}var AdC=A.aaR(A.acf.BgI);var FP=A._GetAutoObject(A.Device.Helper).Biz(A1P,Az5,AJR
,Aat);AdC=A._GetAutoObject(A.Device.Helper).Ng(AdC,P4,FP.toFixed());AdC=A._GetAutoObject(
A.Device.Helper).Ng(AdC,AxY,A._GetAutoObject(A.acj.DU).Aan());this.OX.Ig.R(AdC);
}this.Aar=!K7.AY;if(this.Aar)this.OX.Ig.R(A.jV);(C.OX.isPrototypeOf(B=this.OX.EQ
)?B:null).Ann([B=A._GetAutoObject(A.Device.Helper).W,B.PM,B.Ex]);this.ZT.AeO(K7);
this.OX.AeO(Vf);},_Init:function(aArg){C.D7._Init.call(this,aArg);C.AqJ._Init.call(
this.ZT={I:this},0);C.AqJ._Init.call(this.OX={I:this},0);C.AkG._Init.call(this.AgE={
I:this},0);this.__proto__=C.AMb;this.ZT.H(AY9);this.ZT.T(A.aaR(A.acf.Afj));this.
ZT.AE1(C.AMI);this.OX.H(AY_);this.OX.T(A.aaR(A.acf.AG4));this.OX.AE1(C.OX);this.
AgE.H(UR);this.AgE.R(A.aaR(A.acf.Akb));this.J(this.ZT,0);this.J(this.OX,0);this.
J(this.AgE,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D7;this.ZT._Done(
);this.OX._Done();this.AgE._Done();C.D7._Done.call(this);},_ReInit:function(){C.
D7._ReInit.call(this);this.ZT._ReInit();this.OX._ReInit();this.AgE._ReInit();this.
ZT.T(A.aaR(A.acf.Afj));this.OX.T(A.aaR(A.acf.AG4));this.AgE.R(A.aaR(A.acf.Akb));
},_Mark:function(D){var B;C.D7._Mark.call(this,D);if((B=this.ZT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AL_={
Au7:null,Au6:null,Axf:null,AuB:null,Vq:null,Abc:null,Abb:null,Acc:null,Ae8:null,
Init:function(aArg){this.Vq.Ahg(A._NewObject(A.Core.Bu,0).Initialize(A._GetAutoObject(
A.Device.Helper).Ds()).Format(A.aaR(A.acf.AgK)));},A4c:function(G){this.Vq.Ab0(this.
AuB);this.Abc.Ab0(this.Au7);this.Abb.Ab0(this.Au6);this.Acc.Ab0(this.Axf);},Axe:
function(){var F$=A._GetAutoObject(A.Device.Device).Bv.Cd();this.AuB=A._NewObject(
C.Ajl,0);this.Au7=A._NewObject(C.Ajl,0);this.Au6=A._NewObject(C.Ajl,0);this.Axf=
A._NewObject(C.Ajl,0);if(F$>0){var P=F$-1;while(P>=0){var D6=A._GetAutoObject(A.
Device.Device).Bv.HD(P,6);this.Atk(this.AuB,P,3,D6);this.Atk(this.Au7,P,2,D6);this.
Atk(this.Au6,P,5,D6);this.Atk(this.Axf,P,4,D6);P=P-1;}}this.Aar=!(((this.AuB.AY+
this.Au6.AY)+this.Au7.AY)+this.Axf.AY);A.pe([this,this.A4c],this);},Atk:function(
A0M,Ad,A0L,P_){var Alj=A._GetAutoObject(A.Device.Device).Bv.IY(Ad,A0L);if(!!Alj)
A0M.Os(Alj,P_);},AbY:function(E){if(this.Mt===E)return;C.K9.AbY.call(this,E);if(
!!this.Vq)this.Vq.AbY(E);if(!!this.Abc)this.Abc.AbY(E);if(!!this.Abb)this.Abb.AbY(
E);if(!!this.Acc)this.Acc.AbY(E);this.Ae8.AbY(E);},AiN:function(G){this.Vq.Ahg(A.
_NewObject(A.Core.Bu,0).Initialize(A._GetAutoObject(A.Device.Helper).Ds()).Format(
A.aaR(A.acf.AgK)));this.Axe();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dx(A.aaR(A.acf.BjZ));else this.Dx(A.aaR(A.acf.Ane));this.An();},_Init:function(
aArg){C.K9._Init.call(this,aArg);C.Ahm._Init.call(this.Vq={I:this},0);C.Ahm._Init.
call(this.Abc={I:this},0);C.Ahm._Init.call(this.Abb={I:this},0);C.Ahm._Init.call(
this.Acc={I:this},0);C.AT0._Init.call(this.Ae8={I:this},0);this.__proto__=C.AL_;
this.Dx(A.aaR(A.acf.Ane));this.Vq.H(AY$);this.Vq.R(A.aaR(A.acf.AF7));this.Abc.H(
AZa);this.Abc.R(A.aaR(A.acf.Feed));this.Abb.H(AZb);this.Abb.R(A.aaR(A.acf.AF9));
this.Acc.H(AZc);this.Acc.R(A.aaR(A.acf.AF_));this.Ae8.H(AZd);this.J(this.Vq,-1);
this.J(this.Abc,-1);this.J(this.Abb,-1);this.J(this.Acc,-1);this.J(this.Ae8,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.Vq._Done();this.Abc.
_Done();this.Abb._Done();this.Acc._Done();this.Ae8._Done();C.K9._Done.call(this);
},_ReInit:function(){C.K9._ReInit.call(this);this.Vq._ReInit();this.Abc._ReInit(
);this.Abb._ReInit();this.Acc._ReInit();this.Ae8._ReInit();this.Dx(A.aaR(A.acf.Ane
));this.Vq.R(A.aaR(A.acf.AF7));this.Abc.R(A.aaR(A.acf.Feed));this.Abb.R(A.aaR(A.
acf.AF9));this.Acc.R(A.aaR(A.acf.AF_));},_Mark:function(D){var B;C.K9._Mark.call(
this,D);if((B=this.Au7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ae8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AL$={EQ:null,Wv:null,Ad8:null,A1_:false,Init:function(aArg){this.Wv.Ahg(A._NewObject(
A.Core.Bu,0).Initialize(A._GetAutoObject(A.Device.Helper).Ds()).Format(A.aaR(A.acf.
AgK)));},Bk:function(aSize){C.K9.Bk.call(this,aSize);this.Ad8.H(this.EQ.M);},Ai:
function(Ae){C.K9.Ai.call(this,Ae);var BBp=!this.Aar&&this.A1_;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Ad8.R(A.aaR(A.acf.A72));else this.
Ad8.R(A.aaR(A.acf.Ard));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dx(A.aaR(
A.acf.Bj0));else this.Dx(A.aaR(A.acf.Bj1));this.Ad8.Z(BBp);},AiN:function(G){this.
Wv.Ahg(A._NewObject(A.Core.Bu,0).Initialize(A._GetAutoObject(A.Device.Helper).Ds(
)).Format(A.aaR(A.acf.AgK)));this.Aar=true;this.A1_=true;this.Axe();this.AT3();this.
An();},AT3:function(){this.EQ.AeO(this.AOI());if(!!this.EQ.EU&&(this.EQ.EU.AY>0)
){this.Aar=false;this.A1_=false;}},AOI:function(){var BD=A._NewObject(C.Aqh,0);var
Qe=A._GetAutoObject(A.Device.Helper).ANY(A._GetAutoObject(A.Device.Helper).Ds());
var Du=A._GetAutoObject(A.Device.Helper).Aqd(Qe-(86400*this.Mt));BD.Anr(AZe);BD.
QX([].concat(0,BD.Gc.slice(1,4)));BD.QX(A.abN(BD.Gc,(Qe-Du)|0));BD.QX(A.abP(BD.Gc
,3400));BD.QX([].concat(BD.Gc.slice(0,3),4200));var F$=A._GetAutoObject(A.Device.
Device).Bv.Cd();BD.AwF(F$);BD.Ya();if(F$>0){var P=0;while(P<F$){var ApN=A._GetAutoObject(
A.Device.Device).Bv.CE(P,7);var ApO=A._GetAutoObject(A.Device.Device).Bv.HD(P,6)-
Du;if(ApN>0)BD.Ap8(ApO,ApN);P=P+1;}}return BD;},BiO:function(){var F$=A._GetAutoObject(
A.Device.Device).Bv.Cd();if(F$>0){var BfD=A._NewObject(C.Ajl,0);var P=F$-1;while(
P>=0){var D0=A._NewObject(A.Device.Rating,0);D0.EH(P,A._GetAutoObject(A.Device.Device
).Bv);var LP=A._GetAutoObject(A.Device.Helper).ACU(D0);if(!!LP)BfD.Os(LP,D0.Timestamp
);P=P-1;}return BfD;}else return null;},Axe:function(){this.Wv.Ab0(this.BiO());if(
!!this.Wv.N2&&(this.Wv.N2.AY>0))this.Aar=false;},_Init:function(aArg){C.K9._Init.
call(this,aArg);C.AqJ._Init.call(this.EQ={I:this},0);C.Ahm._Init.call(this.Wv={I:
this},0);C.AkG._Init.call(this.Ad8={I:this},0);this.__proto__=C.AL$;this.EQ.H(AsY
);this.EQ.T(A.aaR(A.acf.Temperature));this.EQ.AE1(C.AGJ);this.Wv.H(AZf);this.Wv.
R(A.aaR(A.acf.Rating));this.Ad8.H(AsY);this.J(this.EQ,-2);this.J(this.Wv,-2);this.
J(this.Ad8,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K9;this.EQ._Done(
);this.Wv._Done();this.Ad8._Done();C.K9._Done.call(this);},_ReInit:function(){C.
K9._ReInit.call(this);this.EQ._ReInit();this.Wv._ReInit();this.Ad8._ReInit();this.
EQ.T(A.aaR(A.acf.Temperature));this.Wv.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K9._Mark.call(this,D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WA={Q:null,Go:null,Gp:null
,QF:null,AM:0,Gi:0,FW:100,Fy:0,Init:function(aArg){},IS:function(G){this.Fy=1;C.
Ee.IS.call(this,G);},Bk:function(aSize){C.Ee.Bk.call(this,aSize);this.QF.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Ee.Ai.call(this,Ae);this.QF.Z(this.Gi!==
this.FW);this.QF.L(this.V.AQ);if((this.Fy===4)||(this.Fy===5))this.QF.L(A.jb.EW);
},AlR:function(G){this.Fy=5;this.An();if(this.Bo.By){A.pe([this,this.AyF],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qk:function(G){if(this.Fy===5)A.pe([this,this.
AyF],this);if(this.Fy===4)A.pe([this,this.AyG],this);if(this.Fy===1)A.pe(this.AR
,this);this.Fy=0;this.An();},C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,
F[1].call(F[0])));},AcL:function(s){this.C3(s);},As:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcL],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcL],E,0);if(!!E)A.pe([this,this.AcL],this);},AlS:function(G){this.Fy=4;this.
An();if(this.Bo.By){A.pe([this,this.AyG],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},J8:function(G){this.Fy=0;},AyG:function(s){this.J8(s);},J3:function(G){this.
Fy=0;},AyF:function(s){this.J3(s);},BC:function(E){if(E<this.Gi)E=this.Gi;if(E>this.
FW)E=this.FW;if(this.AM===E)return;this.AM=E;this.An();},Gq:function(E){if(this.
Gi===E)return;this.Gi=E;this.An();},E5:function(E){if(this.FW===E)return;this.FW=
E;this.An();},_Init:function(aArg){C.Ee._Init.call(this,aArg);A.Core.BL._Init.call(
this.Go={I:this},0);A.Core.BL._Init.call(this.Gp={I:this},0);A.acg.Am._Init.call(
this.QF={I:this},0);this.__proto__=C.WA;this.H(JY);this.Go.Filter=5;this.Gp.Filter=
4;this.Background.H(JY);this.V.H(Z6);this.V.R(Lu);this.QF.H(Ayl);this.J(this.QF,
0);this.Go.BM=[this,this.AlR];this.Go.DZ=[this,this.AlR];this.Gp.BM=[this,this.AlS
];this.Gp.DZ=[this,this.AlS];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Ct(null);this.QF.Aw(A.aaL(A.ach.AMw));this.Init(aArg);},_Done:function(){
this.__proto__=C.Ee;this.Go._Done();this.Gp._Done();this.QF._Done();C.Ee._Done.call(
this);},_ReInit:function(){C.Ee._ReInit.call(this);this.Go._ReInit();this.Gp._ReInit(
);this.QF._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Ee._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBaseVertically"
};C.AUp={AC:null,CL:null,HI:null,Bk:function(aSize){C.WA.Bk.call(this,aSize);this.
CL.H([this.QF.M[2],this.QF.M[1],this.M[2],this.QF.M[3]]);},Ai:function(Ae){C.WA.
Ai.call(this,Ae);this.CL.Abv(0,this.CL.AY-1);if(this.Gi!==this.FW)this.QF.Z(true
);},Init:function(aArg){},C3:function(G){var F;if(!!this.Q&&!!this.AC)this.BC(this.
AC.DO((F=this.Q,F[1].call(F[0]))));},J8:function(G){var F;var BR=this.AM;C.WA.J8.
call(this,G);this.BC(this.AM+1);if(this.AM!==BR){if(!!this.Q&&!!this.AC)(F=this.
Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J3:function(G){var F;var
BR=this.AM;C.WA.J3.call(this,G);this.BC(this.AM-1);if(this.AM!==BR){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},BC:function(
E){var Qq=0;if(this.Gi!==this.FW){if(E<this.Gi){E=this.FW;Qq=-this.CL.GH*this.CL.
AY;}if(E>this.FW){E=this.Gi;Qq=this.CL.GH;}}C.WA.BC.call(this,E);if(!!Qq)this.CL.
FX(Qq);this.CL.G0(this.AM);this.CL.HC(this.CL.Gl,true,this.HI,null);},He:function(
G){var B;var F_=this.CL.GY;var Cz=(C.CG.isPrototypeOf(B=this.CL.Ch)?B:null);if(!
Cz)return;Cz.S(this.V.B7);Cz.A2(A.aaL(A.fl.Af));Cz.L(this.V.AQ);if(!!this.AC)Cz.
R(this.AC.Gd(F_));else Cz.R(W4);Cz.H(A.abK(Cz.M,[(B=this.CL.M)[2]-B[0],this.CL.GH
]));},CJ:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.Gq(0);this.
E5(this.AC.Dr()-1);this.CL.Jr(this.AC.Dr());this.CL.Abv(0,this.CL.AY-1);}},_Init:
function(aArg){C.WA._Init.call(this,aArg);A.Core.CL._Init.call(this.CL={I:this},
0);A.acl.Ge._Init.call(this.HI={I:this},0);this.__proto__=C.AUp;this.H(JY);this.
QF.H(AZg);this.CL.AeW(40);this.CL.NX(C.CG);this.HI.Wt(23);this.HI.HK(1);this.HI.
Fj(200);this.J(this.CL,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.
CL.He=[this,this.He];this.Init(aArg);},_Done:function(){this.__proto__=C.WA;this.
CL._Done();this.HI._Done();C.WA._Done.call(this);},_ReInit:function(){C.WA._ReInit.
call(this);this.CL._ReInit();this.HI._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(
A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.WA._Mark.call(this,D);if((B=this.AC)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupVertically"
};C.RR={ALf:0,Ai:function(Ae){C.Fr.Ai.call(this,Ae);this.T(A.aaR(A.acf.AG4));if(
A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.
Device.Helper).W.TimestampLastWeighing)this.Kp((A._GetAutoObject(A.Device.Converter
).AkX(this.ALf)+CO)+A._GetAutoObject(A.acj.DU).AfR());else this.Kp(A.aaR(A.acf.Unknown
));},Ce:function(G){C.Fr.Ce.call(this,G);this.ALf=A._GetAutoObject(A.Device.Helper
).W.LastBodyWeight-A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.An();
},_Init:function(aArg){C.Fr._Init.call(this,aArg);this.__proto__=C.RR;},_className:
"Application::AnimalInfoItemWeightGain"};C.APl={Bc:null,Dc:null,Init:function(aArg
){var B;A.zX([this,this.Ni],[B=A._GetAutoObject(A.Device.Device),B.AEi,B.AIu],0);
},D3:function(G){C.IE.D3.call(this,G);this.Dc.Aw(A._GetAutoObject(A.Device.Converter
).BgY(A._GetAutoObject(A.Device.Device).D7));},_Init:function(aArg){C.IE._Init.call(
this,aArg);A.acg.DQ._Init.call(this.Bc={I:this},0);A.acg.Am._Init.call(this.Dc={
I:this},0);this.__proto__=C.APl;this.Bc.DE(Aym);this.Bc.DR(Ayn);this.Bc.L(A.jb.Bc
);this.Dc.H(AZh);this.Dc.L(A.jb.Text);this.J(this.Bc,0);this.J(this.Dc,0);this.Dc.
Aw(A.aaL(A.ach.AjO));this.Init(aArg);},_Done:function(){this.__proto__=C.IE;this.
Bc._Done();this.Dc._Done();C.IE._Done.call(this);},_ReInit:function(){C.IE._ReInit.
call(this);this.Bc._ReInit();this.Dc._ReInit();},_Mark:function(D){var B;C.IE._Mark.
call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dc)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"};C.
ANi={ZA:null,Kv:null,Mi:null,Timer:null,AB6:3,Ai:function(Ae){C.AB.Ai.call(this,
Ae);this.ZA.R(A._GetAutoObject(A.Device.Helper).Ng(A.aaR(A.acf.Bqh),P4,this.AB6.
toFixed()));},CB:function(G){this.Timer.Ar(true);},EY:function(G){this.Timer.Ar(
false);},BAC:function(G){if(this.AB6>1){this.AB6=this.AB6-1;this.An();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Axm();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZA={I:this},0);A.acg.Text.
_Init.call(this.Kv={I:this},0);A.acg.Am._Init.call(this.Mi={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANi;this.Background.L(A.jb.CU
);this.N.Z(true);this.ZA.H(AIi);this.ZA.KR(true);this.ZA.R(A.jV);this.ZA.L(A.jb.
Text);this.Kv.H(AZi);this.Kv.KR(true);this.Kv.R(A.aaR(A.acf.A5e));this.Kv.L(A.jb.
Text);this.Mi.H(Ayo);this.J(this.ZA,0);this.J(this.Kv,0);this.J(this.Mi,0);this.
ZA.S(A.aaL(A.fl.Af));this.Kv.S(A.aaL(A.fl.Af));this.Mi.Aw(A.aaL(A.ach.ABA));this.
Timer.Mx=[this,this.BAC];},_Done:function(){this.__proto__=C.AB;this.ZA._Done();
this.Kv._Done();this.Mi._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZA._ReInit();this.Kv._ReInit();this.Mi._ReInit(
);this.Timer._ReInit();this.Kv.R(A.aaR(A.acf.A5e));this.ZA.S(A.aaL(A.fl.Af));this.
Kv.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.AM1={Kv:null,Amp:null
,Qx:null,CS:function(){this.An();},Ai:function(Ae){C.AdX.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).AaT<=10)this.Kv.R(A.aaR(A.acf.Bhb));else this.Kv.R(A.aaR(A.acf.
A5f));},_Init:function(aArg){C.AdX._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kv={I:this},0);A.acg.Am._Init.call(this.Amp={I:this},0);C.CG._Init.call(this.Qx={
I:this},0);this.__proto__=C.AM1;this.SJ.H(AZj);this.Mi.H(AZk);this.Kv.H(AIj);this.
Kv.KR(true);this.Kv.L(A.jb.Text);this.Amp.H(Ayo);this.Qx.H(AZl);this.Qx.Z(true);
this.Qx.R(A.aaR(A.acf.AT1));this.Qx.L(A.jb.Text);this.J(this.Kv,0);this.J(this.Amp
,0);this.J(this.Qx,0);this.Kv.S(A.aaL(A.fl.Af));this.Amp.Aw(A.aaL(A.ach.ABA));this.
Qx.S(A.aaL(A.fl.Af));this.Qx.A2(A.aaL(A.fl.Ak));this.Qx.Ct(A.aaL(A.fl.Bi));},_Done:
function(){this.__proto__=C.AdX;this.Kv._Done();this.Amp._Done();this.Qx._Done();
C.AdX._Done.call(this);},_ReInit:function(){C.AdX._ReInit.call(this);this.Kv._ReInit(
);this.Amp._ReInit();this.Qx._ReInit();this.Qx.R(A.aaR(A.acf.AT1));this.Kv.S(A.aaL(
A.fl.Af));this.Qx.S(A.aaL(A.fl.Af));this.Qx.A2(A.aaL(A.fl.Ak));this.Qx.Ct(A.aaL(
A.fl.Bi));this.CS();},_Mark:function(D){var B;C.AdX._Mark.call(this,D);if((B=this.
Kv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amp)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Qx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.ALX={_Init:function(aArg){C.IW._Init.call(this,aArg);this.__proto__=C.ALX;this.
RL.Ar(false);this.RL.Aj(false);this.RL.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVn={_Init:function(aArg){C.IW._Init.call(this,aArg);this.__proto__=C.AVn;this.
SZ.Ar(false);this.SZ.Aj(false);this.SZ.Z(false);},_className:"Application::WatchListFilterScreen"
};C.ANf={_Init:function(aArg){C.GC._Init.call(this,aArg);this.__proto__=C.ANf;this.
N.B2(A.aaR(A.acf.A44));},_ReInit:function(){C.GC._ReInit.call(this);this.N.B2(A.
aaR(A.acf.A44));},_className:"Application::ControlListActionsScreen"};C.AVm={_Init:
function(aArg){C.GC._Init.call(this,aArg);this.__proto__=C.AVm;this.N.B2(A.aaR(A.
acf.A5b));},_ReInit:function(){C.GC._ReInit.call(this);this.N.B2(A.aaR(A.acf.A5b
));},_className:"Application::WatchListActionsScreen"};C.ALW={_Init:function(aArg
){C.GC._Init.call(this,aArg);this.__proto__=C.ALW;this.N.B2(A.aaR(A.acf.A43));},
_ReInit:function(){C.GC._ReInit.call(this);this.N.B2(A.aaR(A.acf.A43));},_className:
"Application::AlarmListActionsScreen"};C.AOP={D3:function(G){C.Ki.D3.call(this,G
);this.Dc.Aw(A._GetAutoObject(A.Device.Converter).AdM(5));},_Init:function(aArg){
C.Ki._Init.call(this,aArg);this.__proto__=C.AOP;},_className:"Application::HeaderControlListFilter"
};C.APn={D3:function(G){C.Ki.D3.call(this,G);this.Dc.Aw(A._GetAutoObject(A.Device.
Converter).AdM(6));},_Init:function(aArg){C.Ki._Init.call(this,aArg);this.__proto__=
C.APn;},_className:"Application::HeaderWatchListFilter"};C.APr={DY:null,M6:null,
_Init:function(aArg){C.TS._Init.call(this,aArg);C.CG._Init.call(this.DY={I:this}
,0);A.acg.Am._Init.call(this.M6={I:this},0);this.__proto__=C.APr;this.DY.H(Aol);
this.DY.R(A.aaR(A.acf.A5N));this.DY.L(A.jb.Text);this.M6.H(AZm);this.M6.L(A.jb.Text
);this.M6.A8(0x12);this.J(this.DY,-2);this.J(this.M6,0);this.DY.S(A.aaL(A.fl.Ak)
);this.DY.A2(A.aaL(A.fl.Bi));this.M6.Aw(A.aaL(A.ach.ADn));},_Done:function(){this.
__proto__=C.TS;this.DY._Done();this.M6._Done();C.TS._Done.call(this);},_ReInit:function(
){C.TS._ReInit.call(this);this.DY._ReInit();this.M6._ReInit();this.DY.R(A.aaR(A.
acf.A5N));this.DY.S(A.aaL(A.fl.Ak));this.DY.A2(A.aaL(A.fl.Bi));},_Mark:function(
D){var B;C.TS._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.M6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWatch"
};C.AMW={Ce:function(Ad){C.Ajt.Ce.call(this,Ad);if(!!this.AX){var Oi=this.AX.HZ(
Ad,8);var BB$=this.AX.Se(Ad,21);this.Aa6.R(A._GetAutoObject(A.Device.Helper).MN(
BB$,A._GetAutoObject(A.Device.Helper).Ds()).toFixed());this.Sk.Z(Oi);this.An();}
},_Init:function(aArg){C.Ajt._Init.call(this,aArg);this.__proto__=C.AMW;},_className:
"Application::CalfListWatchItem"};C.TS={AgU:null,AgW:null,_Init:function(aArg){C.
Db._Init.call(this,aArg);A.acg.Am._Init.call(this.AgU={I:this},0);A.acg.Am._Init.
call(this.AgW={I:this},0);this.__proto__=C.TS;this.AgU.H(AZn);this.AgU.L(A.jb.Text
);this.AgU.A8(0x12);this.AgW.H(AZo);this.AgW.L(A.jb.Text);this.AgW.A8(0x12);this.
JU(this.DS,-1);this.J(this.AgU,0);this.J(this.AgW,0);this.AgU.Aw(A.aaL(A.ach.AmT
));this.AgW.Aw(A.aaL(A.ach.Abs));},_Done:function(){this.__proto__=C.Db;this.AgU.
_Done();this.AgW._Done();C.Db._Done.call(this);},_ReInit:function(){C.Db._ReInit.
call(this);this.AgU._ReInit();this.AgW._ReInit();},_Mark:function(D){var B;C.Db.
_Mark.call(this,D);if((B=this.AgU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgW).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"};C.Aqh={
Gc:A.wg,OC:A.wf,QX:function(E){if(A.aaY(this.Gc,E))return;this.Gc=E;},Anr:function(
E){if(A.aaX(this.OC,E))return;this.OC=E;},_Init:function(aArg){A.acv.AB5._Init.call(
this,aArg);this.__proto__=C.Aqh;},_className:"Application::BoundCoordList"};C.Ajt={
TY:null,Wi:null,TZ:null,Wj:null,Sk:null,Zb:null,Aa6:null,AP:null,A$:null,D_:null
,Lr:null,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.
Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*
30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TY.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wi.H(this.TY.M);this.A$.H([this.TY.
M[2]-1,0,this.TY.M[2]+1,aSize[1]]);this.TZ.H([this.TY.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wj.H(this.TZ.M);this.D_.H([this.TZ.M[2]-1,0,this.TZ.M[2]+1,aSize[
1]]);this.Sk.H([this.TZ.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zb.H(this.Sk.
M);this.Lr.H([this.Sk.M[2]-1,0,this.Sk.M[2]+1,aSize[1]]);this.Aa6.H([this.Sk.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K6=this.V.AQ;
this.TY.AEJ(K6);this.Wi.L(K6);this.TZ.AEJ(K6);this.Wj.L(K6);this.Sk.AEJ(K6);this.
Zb.L(K6);this.Aa6.L(K6);this.Zb.Z(!this.Sk.Fi());},Ce:function(Ad){if(!this.AX)return;
this.Hk=Ad;var Md=this.AX.CE(Ad,1);var H9=this.AX.AmL(Ad,14);var Auc=this.AX.CE(
Ad,5);var LP=this.AX.IY(Ad,13);this.T(Md.toFixed());if(!!LP){this.TY.Z(true);this.
TY.Awv(A._GetAutoObject(A.acj.Assessment).Bc6(LP));this.Wi.Z(false);}else{this.TY.
Z(false);this.Wi.Z(true);}if(Auc>0){this.TZ.Z(true);this.TZ.Awv(A._GetAutoObject(
A.acj.Assessment).Bc6(A._GetAutoObject(A.Device.Converter).Asq(H9,Auc)));this.Wj.
Z(false);}else{this.TZ.Z(false);this.Wj.Z(true);}this.An();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kd._Init.call(this.TY={I:this},0);A.acg.Text._Init.
call(this.Wi={I:this},0);C.Kd._Init.call(this.TZ={I:this},0);A.acg.Text._Init.call(
this.Wj={I:this},0);C.Kd._Init.call(this.Sk={I:this},0);A.acg.Text._Init.call(this.
Zb={I:this},0);A.acg.Text._Init.call(this.Aa6={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.
D_={I:this},0);A.acg.AL._Init.call(this.Lr={I:this},0);this.__proto__=C.Ajt;this.
Wi.H(AZp);this.Wi.R(Aom);this.Wj.H(Aon);this.Wj.R(Aom);this.Sk.Awv(A.jb.ST);this.
Zb.H(Aon);this.Zb.R(Rj);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.D_.L(A.jb.Bc);
this.Lr.L(A.jb.Bc);this.J(this.TY,0);this.J(this.Wi,0);this.J(this.TZ,0);this.J(
this.Wj,0);this.J(this.Sk,0);this.J(this.Zb,0);this.J(this.Aa6,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.D_,0);this.J(this.Lr,0);this.Wi.S(A.aaL(A.fl.Af
));this.Wj.S(A.aaL(A.fl.Af));this.Zb.S(A.aaL(A.fl.Af));this.Aa6.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.TY._Done();this.Wi.
_Done();this.TZ._Done();this.Wj._Done();this.Sk._Done();this.Zb._Done();this.Aa6.
_Done();this.AP._Done();this.A$._Done();this.D_._Done();this.Lr._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.TY._ReInit();this.Wi.
_ReInit();this.TZ._ReInit();this.Wj._ReInit();this.Sk._ReInit();this.Zb._ReInit(
);this.Aa6._ReInit();this.AP._ReInit();this.A$._ReInit();this.D_._ReInit();this.
Lr._ReInit();this.Wi.S(A.aaL(A.fl.Af));this.Wj.S(A.aaL(A.fl.Af));this.Zb.S(A.aaL(
A.fl.Af));this.Aa6.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.TY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wj)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DP={Pq:null,Am9:null
,EU:null,DP:null,Aq8:0,Aq9:0,A7i:0,AmC:0,Aqs:0,Init:function(aArg){this.ASJ(6);this.
ASK(8);this.ASV(A.jb.AV);this.ASW(3);},Ai:function(Ae){var B;A.Core.O.Ai.call(this
,Ae);this.DP.BlG([this.DP.Aa1[0],(B=this.DP.M)[3]-B[1]]);this.Ww(this);},ASI:function(
E){if(this.Pq===E)return;this.Pq=E;this.DP.ASI(E);},ASW:function(E){if(this.Aq9===
E)return;this.Aq9=E;this.DP.ASW(E);},ASV:function(E){if(this.Aq8===E)return;this.
Aq8=E;this.DP.ASV(E);this.DP.BlM(E);},Ww:function(G){var B;while(!!this.DP.Ah)this.
HL(this.DP.Ah);if(!this.EU)return;this.DP.Anr([((this.EU.OC[0]*((B=this.M)[2]-B[
0]))/(this.EU.Gc[2]-this.EU.Gc[0]))|0,this.DP.OC[1]]);this.DP.Anr([this.DP.OC[0]
,((this.EU.OC[1]*((B=this.M)[3]-B[1]))/(this.EU.Gc[3]-this.EU.Gc[1]))|0]);var P;
var Df=this.DP.OC[1];var D6;var A4n=this.EU.Gc[1];var BjY=(((B=this.DP.M)[3]-B[1
])/this.DP.OC[1])|0;for(P=0;P<BjY;P=P+1){D6=A._NewObject(A.acg.Text,0);D6.H([0,((((
B=this.M)[3]-B[1])-(P*Df))-(this.Am9.Ascent+this.Am9.Descent))+2,((B=this.M)[2]-
B[0])-this.Aq9,(((B=this.M)[3]-B[1])-(P*Df))+2]);D6.L(this.A7i);D6.S(this.Am9);D6.
A8(0x24);if(P>0)D6.R(this.AJs(A4n));else D6.R(this.AJ2());A4n=A4n+this.EU.OC[1];
this.J(D6,0);}},BFN:function(s){this.Ww(s);},BmB:function(E){if(this.Am9===E)return;
this.Am9=E;this.An();},Azc:function(A0s){var B;if(!this.EU||(this.EU.Gc[3]===this.
EU.Gc[1]))return 0;return(((A0s-this.EU.Gc[1])*((B=this.M)[3]-B[1]))/(this.EU.Gc[
3]-this.EU.Gc[1]))|0;},AeO:function(E){if(this.EU===E)return;this.EU=E;if(!E)this.
DP.AeO(null);else{var BD=A._NewObject(A.acv.AB5,0);BD.AwF(this.EU.ADZ);BD.Ya();var
Jt=E.Alx;while(!!Jt){BD.Ap8(this.Byd(Jt.PX),this.Bye(Jt.PY));Jt=Jt.Ah;}this.DP.AeO(
BD);this.An();}},Byd:function(Bwq){var B;if(!this.EU||(this.EU.Gc[2]===this.EU.Gc[
0]))return 0;return((Bwq-this.EU.Gc[0])*((B=this.M)[2]-B[0]))/(this.EU.Gc[2]-this.
EU.Gc[0]);},Bye:function(A0s){var B;if(!this.EU||(this.EU.Gc[3]===this.EU.Gc[1])
)return 0;return((A0s-this.EU.Gc[1])*((B=this.M)[3]-B[1]))/(this.EU.Gc[3]-this.EU.
Gc[1]);},AJs:function(AoH){return AoH.toFixed();},AJ2:function(){return A.jV;},ASK:
function(E){if(this.AmC===E)return;this.AmC=E;this.DP.ASK(E);},ASJ:function(E){if(
this.Aqs===E)return;this.Aqs=E;this.DP.ASJ(E);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acv.DP._Init.call(this.DP={I:this},0);this.__proto__=C.DP;this.
H(AIk);this.A7i=A.jb.Text;this.DP.A3(0x3F);this.DP.H(AIk);this.DP.Bm1(AZq);this.
DP.Blu(A.jb.ST);this.DP.Bmj(A.jb.Bc);this.DP.Bnl(A.jb.ST);this.J(this.DP,0);this.
Pq=A.aaL(A.acv.ACo);this.Am9=A.aaL(A.fl.Bi);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.O;this.DP._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.DP._ReInit();this.BmB(A.aaL(A.fl.Bi));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Pq)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Am9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EU)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AMI={AJs:function(AoH){return A._GetAutoObject(
A.Device.Converter).AxN(AoH,0);},AJ2:function(){return A._GetAutoObject(A.acj.DU
).AfR();},_Init:function(aArg){C.DP._Init.call(this,aArg);this.__proto__=C.AMI;}
,_className:"Application::BodyWeightGraph"};C.OX={JF:null,Eu:null,Ef:null,FQ:null
,IB:null,IC:null,Init:function(aArg){this.ASI(null);},Ww:function(G){var B;var F;
C.DP.Ww.call(this,G);var AKw=0;var ALk=0;if(!!this.JF){AKw=this.Azc(A._GetAutoObject(
A.Device.Helper).ACT((F=this.JF,F[1].call(F[0]))));ALk=this.Azc(A._GetAutoObject(
A.Device.Helper).ACS((F=this.JF,F[1].call(F[0]))));}this.FQ.H(A.abP(this.FQ.M,0)
);this.FQ.H([].concat(this.FQ.M.slice(0,3),((B=this.M)[3]-B[1])-ALk));this.IB.H(
A.abO(this.IB.M,(this.FQ.M[3]-((((B=this.IB.M)[3]-B[1])/2)|0))-2));this.Ef.H(A.abP(
this.Ef.M,this.FQ.M[3]));this.Ef.H([].concat(this.Ef.M.slice(0,3),((B=this.M)[3]-
B[1])-AKw));this.IC.H(A.abO(this.IC.M,(this.Ef.M[3]-((((B=this.IC.M)[3]-B[1])/2)|
0))+2));this.Eu.H(A.abP(this.Eu.M,this.Ef.M[3]));this.Eu.H([].concat(this.Eu.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJs:function(AoH){return A._GetAutoObject(A.Device.Converter
).S0(AoH,0,true);},AJ2:function(){return A._GetAutoObject(A.acj.DU).Aan();},Ann:
function(E){if(A.aaZ(this.JF,E))return;if(!!this.JF)A.z$([this,this.AiD],this.JF
,0);this.JF=E;if(!!E)A.zX([this,this.AiD],E,0);if(!!E)A.pe([this,this.AiD],this);
},AiD:function(G){this.An();},_Init:function(aArg){C.DP._Init.call(this,aArg);A.
acg.AL._Init.call(this.Eu={I:this},0);A.acg.AL._Init.call(this.Ef={I:this},0);A.
acg.AL._Init.call(this.FQ={I:this},0);A.acg.AL._Init.call(this.IB={I:this},0);A.
acg.AL._Init.call(this.IC={I:this},0);this.__proto__=C.OX;this.Eu.A3(0xD);this.Eu.
H(Z2);this.Eu.L(A.jb.Gb);this.Ef.A3(0xD);this.Ef.H(S4);this.Ef.L(A.jb.H4);this.FQ.
A3(0xD);this.FQ.H(AcD);this.FQ.L(A.jb.EW);this.IB.A3(0xD);this.IB.H(Z4);this.IB.
Awj(A.jb.H4);this.IB.Awk(A.jb.H4);this.IB.Awm(A.jb.EW);this.IB.Awl(A.jb.EW);this.
IC.A3(0xD);this.IC.H(W3);this.IC.Awj(A.jb.Gb);this.IC.Awk(A.jb.Gb);this.IC.Awm(A.
jb.H4);this.IC.Awl(A.jb.H4);this.J(this.Eu,-1);this.J(this.Ef,-1);this.J(this.FQ
,-1);this.J(this.IB,-1);this.J(this.IC,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DP;this.Eu._Done();this.Ef._Done();this.FQ._Done();this.IB._Done();this.
IC._Done();C.DP._Done.call(this);},_ReInit:function(){C.DP._ReInit.call(this);this.
Eu._ReInit();this.Ef._ReInit();this.FQ._ReInit();this.IB._ReInit();this.IC._ReInit(
);},_Mark:function(D){var B;C.DP._Mark.call(this,D);if((B=this.JF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Eu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IC)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqJ={EQ:null,EU:null,R4:null,Ig:
null,Bc:null,Axv:A.jV,DI:A.jV,AOK:null,Init:function(aArg){},Bk:function(aSize){
A.Core.O.Bk.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R4.
H([30,0,aSize[0]-2,30]);this.Ig.H(this.R4.M);if(!!this.EQ)this.EQ.H([30,this.R4.
M[3],aSize[0],this.Bc.M[1]]);},Ahg:function(E){if(this.Axv===E)return;this.Axv=E;
this.Ig.R(E);},T:function(E){if(this.DI===E)return;this.DI=E;this.R4.R(E);},AE1:
function(E){if(this.AOK===E)return;this.AOK=E;this.Boz(this);},Boz:function(G){var
B;if(!!this.EQ)this.HL(this.EQ);this.EQ=(C.DP.isPrototypeOf(B=A._NewObject(this.
AOK,0))?B:null);if(!!this.EQ){this.EQ.H(AZr);this.EQ.AeO(this.EU);this.J(this.EQ
,0);}},AeO:function(E){if(this.EU===E)return;this.EU=E;if(!!this.EQ)this.EQ.AeO(
E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.
R4={I:this},0);A.acg.Text._Init.call(this.Ig={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqJ;this.H(AcF);this.Ar(false);this.R4.H(AZs);this.
R4.A8(0x11);this.R4.R(Lu);this.R4.L(A.jb.Text);this.Ig.A8(0x14);this.Ig.R(A.jV);
this.Ig.L(A.jb.Text);this.Bc.H(AZt);this.Bc.L(A.jb.Bc);this.J(this.R4,0);this.J(
this.Ig,0);this.J(this.Bc,0);this.R4.S(A.aaL(A.fl.Ak));this.Ig.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.R4._Done();this.
Ig._Done();this.Bc._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.R4._ReInit();this.Ig._ReInit();this.Bc._ReInit();this.
R4.S(A.aaL(A.fl.Ak));this.Ig.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.EQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ig)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMh={Ago:null,G0:function(E
){var F;C.FY.G0.call(this,E);if(!!this.Ago)(F=this.Ago,F[2].call(F[0],E));},A9v:
function(E){if(A.aaZ(this.Ago,E))return;if(!!this.Ago)A.z$([this,this.A2K],this.
Ago,0);this.Ago=E;if(!!E)A.zX([this,this.A2K],E,0);if(!!E)A.pe([this,this.A2K],this
);},A2K:function(G){var F;if(!this.Ago)return;(F=this.Ago,F[2].call(F[0],this.FF(
)));},_Init:function(aArg){C.FY._Init.call(this,aArg);this.__proto__=C.AMh;},_Mark:
function(D){var B;C.FY._Mark.call(this,D);if((B=this.Ago)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AT0={Ra:null
,PU:null,XQ:null,XR:null,Mt:0,CS:function(){this.An();},Bk:function(aSize){var B;
A.Core.O.Bk.call(this,aSize);this.Ra.H(A.abI(this.Ra.M,(((B=this.M)[3]-B[1])/2)|
0));this.PU.H(A.abI(this.PU.M,(((B=this.M)[3]-B[1])/2)|0));this.Ra.H(A.abO(this.
Ra.M,(((B=this.M)[3]-B[1])/2)|0));this.PU.H(A.abO(this.PU.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Ra.R(A._GetAutoObject(
A.Device.Helper).Ng(A.aaR(A.acf.BjS),P4,this.Mt.toFixed()));},AbY:function(E){if(
this.Mt===E)return;this.Mt=E;this.BBc(this);},BBc:function(G){var B;var AJA=(((B=
this.M)[2]-B[0])/this.Mt)|0;this.XQ.H(A.abM(this.XQ.M,(((B=this.M)[2]-B[0])-(this.
Mt*AJA))+(((AJA/2)-(((B=this.XQ.M)[2]-B[0])/2))|0)));this.XR.H(A.abM(this.XR.M,(((
B=this.M)[2]-B[0])-AJA)+(((AJA/2)-(((B=this.XR.M)[2]-B[0])/2))|0)));this.An();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.Ra={
I:this},0);A.acg.Text._Init.call(this.PU={I:this},0);A.acg.Text._Init.call(this.
XQ={I:this},0);A.acg.Text._Init.call(this.XR={I:this},0);this.__proto__=C.AT0;this.
H(BF);this.Ra.H(AZu);this.Ra.Hs(5);this.Ra.A8(0x11);this.Ra.L(A.jb.Text);this.PU.
H(AZv);this.PU.Hs(5);this.PU.A8(0x14);this.PU.R(A.aaR(A.acf.AhE));this.PU.L(A.jb.
Text);this.XQ.H(AZw);this.XQ.R(AIl);this.XQ.L(A.jb.Text);this.XR.H(AZx);this.XR.
R(AIl);this.XR.L(A.jb.Text);this.J(this.Ra,0);this.J(this.PU,0);this.J(this.XQ,0
);this.J(this.XR,0);this.Ra.S(A.aaL(A.fl.Ak));this.PU.S(A.aaL(A.fl.Ak));this.XQ.
S(A.aaL(A.fl.Ho));this.XR.S(A.aaL(A.fl.Ho));},_Done:function(){this.__proto__=A.
Core.O;this.Ra._Done();this.PU._Done();this.XQ._Done();this.XR._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Ra._ReInit(
);this.PU._ReInit();this.XQ._ReInit();this.XR._ReInit();this.PU.R(A.aaR(A.acf.AhE
));this.Ra.S(A.aaL(A.fl.Ak));this.PU.S(A.aaL(A.fl.Ak));this.CS();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ra)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K9={VT:null,AjA:null,KK:A.jV,Mt:0,Aar:false,Init:function(aArg){var A1s=A._NewObject(
C.Ke,0);var P;for(P=0;P<3;P=P+1)if(A._GetAutoObject(A.Device.Helper).W.RI()<A1s.
C7(P))A1s.And=P+1;this.VT.CJ(A1s);},Ai:function(Ae){C.D7.Ai.call(this,Ae);this.AjA.
Z(this.Aar);if(this.Aar)this.Bb(null);else this.Bb(this.VT);},CB:function(G){var
B;var F;C.D7.CB.call(this,G);if(!(F=this.VT.Q,F[1].call(F[0])))(F=this.VT.Q,F[2].
call(F[0],this.VT.AC.C7(0)));A.zX([this,this.AIK],[B=A._GetAutoObject(A.Device.Helper
),B.UT,B.UU],0);A.zV([this,this.AIK],A._GetAutoObject(A.Device.Device).Bv,0);A.zX([
this,this.Al3],[B=A._GetAutoObject(A.Device.Helper).W,B.QW,B.OnSetId],0);A.pe([this
,this.Al3],this);},EY:function(G){var B;A.z$([this,this.AIK],[B=A._GetAutoObject(
A.Device.Helper),B.UT,B.UU],0);A.z9([this,this.AIK],A._GetAutoObject(A.Device.Device
).Bv,0);A.z$([this,this.Al3],[B=A._GetAutoObject(A.Device.Helper).W,B.QW,B.OnSetId
],0);C.D7.EY.call(this,G);},Zj:function(E){if(A.aa0(this.AR,E))return;C.D7.Zj.call(
this,E);this.VT.AR=E;},AbY:function(E){if(this.Mt===E)return;this.Mt=E;A.pe([this
,this.Al3],this);},Bv0:function(Aq){this.AbY(Aq);},AiN:function(G){},AIK:function(
s){this.AiN(s);},Dx:function(E){if(this.KK===E)return;this.KK=E;this.AjA.R(E);},
Al3:function(G){var Fq=A._NewObject(A.Device.Filter,0);var Azm=A._NewObject(A.Device.
UInt32FilterCriterion,0);Azm.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhE()-((this.Mt-1)*86400))-1,true);Fq.CW(Azm);var HT=A._NewObject(A.Device.Int32FilterCriterion
,0);HT.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fq.CW(HT);A._GetAutoObject(
A.Device.Device).Bv.Bl(Fq);},BkR:function(){return this.Mt;},_Init:function(aArg
){C.D7._Init.call(this,aArg);C.AUp._Init.call(this.VT={I:this},0);C.AkG._Init.call(
this.AjA={I:this},0);this.__proto__=C.K9;this.VT.H(BF);this.AjA.H(UR);this.J(this.
VT,0);this.J(this.AjA,0);this.VT.As([this,this.BkR,this.Bv0]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D7;this.VT._Done();this.AjA._Done();C.D7._Done.
call(this);},_ReInit:function(){C.D7._ReInit.call(this);this.VT._ReInit();this.AjA.
_ReInit();},_Mark:function(D){var B;C.D7._Mark.call(this,D);if((B=this.VT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANp={V1:null,YG:null,RatingMode:null,PB:null,_Init:
function(aArg){C.Cv._Init.call(this,aArg);C.NV._Init.call(this.V1={I:this},0);C.
BZ._Init.call(this.YG={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.I5._Init.call(this.PB={I:this},0);this.__proto__=C.ANp;var B;this.Hb.R(A.
aaR(A.acf.ACd));this.JP(A.aaR(A.acf.A5G));this.V1.H(As3);this.V1.Aj(true);this.V1.
T(A.aaR(A.acf.AsA));this.V1.Bj(true);this.V1.NY(23);this.YG.H(AZy);this.YG.Aj(true
);this.YG.T(A.aaR(A.acf.A_Y));this.YG.Bj(false);this.PB.H(AZz);this.PB.Aj(true);
this.PB.T(A.aaR(A.acf.A5D));this.PB.Bj(true);this.PB.Gq(3);this.PB.E5(14);this.PB.
Ko(A.aaR(A.acf.Ke)+As4);this.PB.KQ(A.aaR(A.acf.GE)+As4);this.J(this.V1,0);this.J(
this.YG,0);this.J(this.PB,0);this.V1.AR=[B=this.V1,B.NZ];this.YG.As([B=this.RatingMode
,B.B$,B.Ca]);this.YG.CJ(this.RatingMode);this.PB.As([B=A._GetAutoObject(A.Device.
Device),B.A8z,B.Ba4]);},_Done:function(){this.__proto__=C.Cv;this.V1._Done();this.
YG._Done();this.RatingMode._Done();this.PB._Done();C.Cv._Done.call(this);},_ReInit:
function(){C.Cv._ReInit.call(this);this.V1._ReInit();this.YG._ReInit();this.RatingMode.
_ReInit();this.PB._ReInit();this.Hb.R(A.aaR(A.acf.ACd));this.JP(A.aaR(A.acf.A5G)
);this.V1.T(A.aaR(A.acf.AsA));this.YG.T(A.aaR(A.acf.A_Y));this.PB.T(A.aaR(A.acf.
A5D));this.PB.Ko(A.aaR(A.acf.Ke)+As4);this.PB.KQ(A.aaR(A.acf.GE)+As4);},_Mark:function(
D){var B;C.Cv._Mark.call(this,D);if((B=this.V1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.AuV={Init:function(aArg){this.V.Text.A8(0x11);this.V.Text.Hs(10);},Ai:function(
Ae){var B;C.Cm.Ai.call(this,Ae);var G9=((Ae&0x10)===0x10);var Fo=((Ae&0x20)===0x20
);var Gx=this.Bo.By;var FK=A.jb.AdZ;var GN=A.jb.Bm;if(this.Hd){FK=A.jb.Bm;GN=A.jb.
Text;}if(!G9){this.Background.L(FK);this.V.L(A.jb.CI);}else if(Gx){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fo){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FK);this.V.L(GN);}this.LF=G9;this.KC=Fo;this.Ql=Gx;
},_Init:function(aArg){C.Cm._Init.call(this,aArg);this.__proto__=C.AuV;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cm._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.AC1={Am:null,Init:
function(aArg){var B;A.zX([this,this.D3],[B=A._GetAutoObject(A.Device.Helper).W,
B.PM,B.Ex],0);A.pe([this,this.D3],this);},Dd:function(E){C.BS.Dd.call(this,E);this.
Am.L(E);},D3:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Am.Aw(A.aaL(A.ach.ACY));break;case 1:this.Am.Aw(A.aaL(A.ach.AO7));break;
case 2:this.Am.Aw(A.aaL(A.ach.AO9));break;default:A.ab5("%s%e",Ayp,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BS._Init.call(this,aArg
);A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=C.AC1;this.Am.H(As5);this.
J(this.Am,0);this.Am.Aw(A.aaL(A.ach.ACY));this.Init(aArg);},_Done:function(){this.
__proto__=C.BS;this.Am._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.
call(this);this.Am._ReInit();},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((
B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.AC2={Am:null,Init:function(aArg){var B;A.zX([this,this.D3],[B=A._GetAutoObject(
A.Device.Helper).W,B.PM,B.Ex],0);A.pe([this,this.D3],this);},Dd:function(E){C.BS.
Dd.call(this,E);this.Am.L(E);},D3:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Am.Aw(A.aaL(A.ach.ACZ));break;case 1:this.Am.Aw(A.aaL(
A.ach.AO8));break;case 2:this.Am.Aw(A.aaL(A.ach.AO_));break;default:A.ab5("%s%e"
,Ayp,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BS.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=C.AC2;
this.Am.H(As5);this.J(this.Am,0);this.Am.Aw(A.aaL(A.ach.ACZ));this.Init(aArg);},
_Done:function(){this.__proto__=C.BS;this.Am._Done();C.BS._Done.call(this);},_ReInit:
function(){C.BS._ReInit.call(this);this.Am._ReInit();},_Mark:function(D){var B;C.
BS._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fr={BT:null,AxI:A.jV,Dd:function(E){C.JD.Dd.call(
this,E);this.BT.L(E);},Kp:function(E){if(this.AxI===E)return;this.AxI=E;this.BT.
R(E);},_Init:function(aArg){C.JD._Init.call(this,aArg);C.CG._Init.call(this.BT={
I:this},0);this.__proto__=C.Fr;this.BT.A3(0x34);this.BT.H(Ayj);this.BT.A8(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(
A.fl.Ak));this.BT.Ct(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.JD;this.
BT._Done();C.JD._Done.call(this);},_ReInit:function(){C.JD._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.BT.Ct(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.JD._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOs={Wn:function(G){var B;this.Agi();this.ALT(A.aaR(A.acf.Bi1),[this,this.Bnx],[
B=A._GetAutoObject(A.Device.Device),B.A8A,B.Ba5]);A._GetAutoObject(C.BN).FA();this.
IU(A.aaR(A.acf.AU2),[this,this.ATp],5);this.IU(A.aaR(A.acf.AU0),[this,this.ATo],
7);this.IU(A.aaR(A.acf.AnT),[this,this.AwI],2);this.IU(A.aaR(A.acf.XI),[this,this.
AEF],1);this.IU(A.aaR(A.acf.Aup),[this,this.AEz],0);A._GetAutoObject(C.BN).FA();
A._GetAutoObject(C.BN).Nz(A.aaR(A.acf.Ame)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dt(6);},Dz:function(G){},Abh:function(){return C.ABR;},Abi:function(
){return C.AC9;},Q5:function(G){A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(
A.Device.Helper).A6G());},HM:function(G){C.GS.HM.call(this,G);if(this.Aj9()===false
){this.N.Cq(A.aaL(A.ach.Abs));this.N.Ck=[this,this.A58];this.N.FH(A.jV);}this.N.
OL(false);this.N.OM(false);},Af6:function(){A._GetAutoObject(C.A1).BU(48);},Af5:
function(){A._GetAutoObject(C.A1).BU(49);},Bnx:function(G){A._GetAutoObject(A.Device.
Device).Awy(!A._GetAutoObject(A.Device.Device).AqE);this.An1(this);},An1:function(
G){var Be=A._GetAutoObject(A.Device.Device).Ao.Filter.Fd();var Av=Be.DN(30,3);if(
!!Av)Be.N3(Av);if(A._GetAutoObject(A.Device.Device).AqE){var Az4=A._NewObject(A.
Device.UInt32FilterCriterion,0);var A2i=A._GetAutoObject(A.Device.Helper).Ds()-21600;
Az4.Initialize(30,3,A2i,true);Be.CW(Az4);}A._GetAutoObject(A.Device.Device).Ao.Bl(
Be);},_Init:function(aArg){C.GS._Init.call(this,aArg);this.__proto__=C.AOs;var B;
this.Dn(C.AO3);this.Dx(A.aaR(A.acf.A7Z));this.AwD([B=A._GetAutoObject(A.Device.Device
),B.A8y,B.Ba3]);},_ReInit:function(){C.GS._ReInit.call(this);this.Dx(A.aaR(A.acf.
A7Z));},_className:"Application::FreshCowListScreen"};C.AOr={_Init:function(aArg
){C.IW._Init.call(this,aArg);this.__proto__=C.AOr;this.Lc.Ar(false);this.Lc.Aj(false
);this.Lc.Z(false);this.Jj.Ar(false);this.Jj.Aj(false);this.Jj.Z(false);},_className:
"Application::FreshCowListFilterScreen"};C.AOq={_Init:function(aArg){C.GC._Init.
call(this,aArg);this.__proto__=C.AOq;this.N.B2(A.aaR(A.acf.A46));},_ReInit:function(
){C.GC._ReInit.call(this);this.N.B2(A.aaR(A.acf.A46));},_className:"Application::FreshCowListActionsScreen"
};C.AO3={D3:function(G){C.Ki.D3.call(this,G);this.Dc.Aw(A._GetAutoObject(A.Device.
Converter).AdM(7));},_Init:function(aArg){C.Ki._Init.call(this,aArg);this.__proto__=
C.AO3;},_className:"Application::HeaderFreshCowListFilter"};C.AC9={Jq:null,DY:null
,_Init:function(aArg){C.Db._Init.call(this,aArg);C.CG._Init.call(this.Jq={I:this
},0);C.CG._Init.call(this.DY={I:this},0);this.__proto__=C.AC9;this.A9Q(1);this.Jq.
H(Bqn);this.Jq.R((A.aaR(A.acf.Calving)+Z9)+A.aaR(A.acf.A$y));this.Jq.L(A.jb.Text
);this.DY.H(Bqo);this.DY.R(A.aaR(A.acf.ADR));this.DY.L(A.jb.Text);this.J(this.Jq
,0);this.J(this.DY,0);this.Jq.S(A.aaL(A.fl.Ak));this.Jq.A2(A.aaL(A.fl.Bi));this.
DY.S(A.aaL(A.fl.Ak));this.DY.A2(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=
C.Db;this.Jq._Done();this.DY._Done();C.Db._Done.call(this);},_ReInit:function(){
C.Db._ReInit.call(this);this.Jq._ReInit();this.DY._ReInit();this.Jq.R((A.aaR(A.acf.
Calving)+Z9)+A.aaR(A.acf.A$y));this.DY.R(A.aaR(A.acf.ADR));this.Jq.S(A.aaL(A.fl.
Ak));this.Jq.A2(A.aaL(A.fl.Bi));this.DY.S(A.aaL(A.fl.Ak));this.DY.A2(A.aaL(A.fl.
Bi));},_Mark:function(D){var B;C.Db._Mark.call(this,D);if((B=this.Jq)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.ABR={AGK:null,KN:null,Uy:null,AP:null,A$:null,Init:function(aArg){},Bk:function(
aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.
V.M[2]+1,aSize[1]]);this.Uy.H([this.V.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A$.H([this.Uy.M[2]-1,0,this.Uy.M[2]+1,aSize[1]]);this.KN.H([this.Uy.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.KN.L(this.V.AQ);this.
Uy.Dd(this.V.AQ);},Ce:function(Ad){if(!this.AX)return;this.Hk=Ad;if(!!this.AX){var
Ia=this.AX.CE(Ad,0);var Md=this.AX.CE(Ad,1);var A2h=this.AX.CE(Ad,29);var Alp=this.
AX.HD(Ad,28);this.T(Md.toFixed());this.KN.R(A2h.toFixed());this.Uy.AbY(A._GetAutoObject(
A.Device.Device).AqD+1);this.Uy.Bnd(Alp);this.Uy.R(A._GetAutoObject(A.acj.KI).AjF(
Alp));A._GetAutoObject(A.Device.Device).SF(Ad);this.ApX(Ia);this.Axe();A._GetAutoObject(
A.Device.Device).Bv.Bl(null);this.An();}},A4c:function(G){this.Uy.Ab0(this.AGK);
},Axe:function(){var F$=A._GetAutoObject(A.Device.Device).Bv.Cd();this.AGK=A._NewObject(
C.Ajl,0);if(F$>0){var P=F$-1;while(P>=0){var D6=A._GetAutoObject(A.Device.Device
).Bv.HD(P,6);this.Atk(this.AGK,P,9,D6);P=P-1;}}A.pe([this,this.A4c],this);},Atk:
function(A0M,Ad,A0L,P_){var Alj=A._GetAutoObject(A.Device.Device).Bv.IY(Ad,A0L);
if(!!Alj)A0M.Os(Alj,P_);},ApX:function(AcW){var Fq=A._NewObject(A.Device.Filter,
0);var Azm=A._NewObject(A.Device.UInt32FilterCriterion,0);Azm.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).ZF(A._GetAutoObject(A.Device.Device).AqD)-1,true);Fq.CW(Azm);var
HT=A._NewObject(A.Device.Int32FilterCriterion,0);HT.Initialize(1,0,AcW,true);Fq.
CW(HT);A._GetAutoObject(A.Device.Device).Bv.Bl(Fq);},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.Text._Init.call(this.KN={I:this},0);C.ATV._Init.call(this.
Uy={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);this.__proto__=C.ABR;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(
this.KN,0);this.J(this.Uy,0);this.J(this.AP,0);this.J(this.A$,0);this.KN.S(A.aaL(
A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.KN._Done();
this.Uy._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.KN._ReInit();this.Uy._ReInit();this.AP._ReInit(
);this.A$._ReInit();this.KN.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AGK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.KN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Uy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListFreshCowItem"};C.ATV={AUD:0,Init:function(aArg
){},AOz:function(){return A._GetAutoObject(A.Device.Helper).Aqd(this.AUD);},AOB:
function(){return this.AOz()+(this.Mt*86400);},Bnd:function(E){if(this.AUD===E)return;
this.AUD=E;A.pe([this,this.Ww],this);},_Init:function(aArg){C.Ahm._Init.call(this
,aArg);this.__proto__=C.ATV;this.Bc.H(Bqp);this.Bna(true);this.Init(aArg);},_className:
"Application::RatingHistoryFixedItem"};C.FactoryResetScope={FactoryResetScopeToString:
null,Dr:function(){if(this.K&&this.K.Dr)return this.K.Dr.apply(this,arguments);else
return C.FactoryResetScope.Bt0.apply(this,arguments);},Bt0:function(){return 2;}
,Gd:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.FactoryResetScopeToString.
BO(this.C7(aIndex));},_Init:function(aArg){C.CQ._Init.call(this,aArg);A.Device.FactoryResetScopeToString.
_Init.call(this.FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;
this.Cr.Set(0,0);this.Cr.Set(1,1);var Lv=this._variants();if(Lv){this.K={};Lv._Init.
call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.CQ;this.FactoryResetScopeToString._Done();C.CQ._Done.call(this);},_ReInit:function(
){C.CQ._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.CQ._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acs.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Bgn:false,Init:function(
aArg){this.Bgn=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Es:function(
G){if(this.Bdy){A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(A.Device.
Device).Ao);if(this.Bgn)A._GetAutoObject(A.Device.Device).A_(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A_(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Es.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.ARU={Wn:function(G){this.Agi();A._GetAutoObject(C.BN).Qu(A.aaR(A.acf.Settings
),[this,this.A3i]);A._GetAutoObject(C.BN).FA();this.ALR();A._GetAutoObject(C.BN).
Nz(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.
BN).Nz(A.aaR(A.acf.ANu)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dt(
6);},Dz:function(G){},Abh:function(){return C.Amq;},Abi:function(){return C.AmR;
},Q5:function(G){A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(A.Device.
Helper).ACM());},HM:function(G){C.RG.HM.call(this,G);if(this.Aj9()===false){this.
N.Cq(A.aaL(A.ach.Avn));this.N.Ck=[this,this.ANJ];this.N.FH(A.jV);}this.N.OL(false
);this.N.OM(false);},Af6:function(){A._GetAutoObject(C.A1).BU(52);},Af5:function(
){A._GetAutoObject(C.A1).BU(53);},A3i:function(G){A._GetAutoObject(A.Device.Device
).Dt(0);A._GetAutoObject(C.A1).BU(101);},_Init:function(aArg){C.RG._Init.call(this
,aArg);this.__proto__=C.ARU;this.Dn(C.AC3);this.Dx(A.aaR(A.acf.A7V));this.ASX(A.
_GetAutoObject(C.AvV));},_ReInit:function(){C.RG._ReInit.call(this);this.Dx(A.aaR(
A.acf.A7V));},_className:"Application::NoTransponderListScreen"};C.ART={_Init:function(
aArg){C.IW._Init.call(this,aArg);this.__proto__=C.ART;this.KV.Ar(false);this.KV.
Aj(false);this.KV.Z(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ARS={_Init:function(aArg){C.GC._Init.call(this,aArg);this.__proto__=C.ARS;this.
N.B2(A.aaR(A.acf.A5a));},_ReInit:function(){C.GC._ReInit.call(this);this.N.B2(A.
aaR(A.acf.A5a));},_className:"Application::NoTransponderListActionsScreen"};C.AC3={
D3:function(G){C.Ki.D3.call(this,G);this.Dc.Aw(A._GetAutoObject(A.Device.Converter
).AdM(8));},_Init:function(aArg){C.Ki._Init.call(this,aArg);this.__proto__=C.AC3;
},_className:"Application::HeaderNoTransponderListFilter"};C.ABy={AuG:null,Gd:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuG.BO(aIndex);},_Init:
function(aArg){C.FZ._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuG={I:this},0);this.__proto__=C.ABy;},_Done:function(){this.__proto__=
C.FZ;this.AuG._Done();C.FZ._Done.call(this);},_ReInit:function(){C.FZ._ReInit.call(
this);this.AuG._ReInit();},_Mark:function(D){var B;C.FZ._Mark.call(this,D);if((B=
this.AuG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.ALM={Cm:null,AdP:null,Init:function(aArg){this.Bb(this.Cm);},KP:function(){if(
!this.Bz){this.Bz=A._NewObject(C.N,0);this.Bz.CA=[this,this.Xt];this.Bz.Ck=null;
this.Bz.Cg=[this,this.A2V];this.Bz.B2(A.jV);this.Bz.Cq(null);this.Bz.CZ(A.aaL(A.
ach.Aem));}return this.Bz;},AAi:function(G){var Aa=(C.Ajb.isPrototypeOf(G)?G:null
);if(Aa===this.Cm)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.AdP)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A$2);},_Init:function(aArg){C.Fk._Init.call(this,aArg);C.Ajb._Init.call(this.
Cm={I:this},0);C.Ajb._Init.call(this.AdP={I:this},0);this.__proto__=C.ALM;this.H(
Ri);this.Text.R(A.aaR(A.acf.ActionSettings));this.Cm.H(IN);this.Cm.T(A.aaR(A.acf.
AD3));this.AdP.H(P5);this.AdP.T(A.aaR(A.acf.Tr));this.J(this.Cm,0);this.J(this.AdP
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cm.AR=[this,this.AAi];this.AdP.AR=[this,this.
AAi];this.Init(aArg);},_Done:function(){this.__proto__=C.Fk;this.Cm._Done();this.
AdP._Done();C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.call(this);this.
Cm._ReInit();this.AdP._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Cm.
T(A.aaR(A.acf.AD3));this.AdP.T(A.aaR(A.acf.Tr));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fk._Mark.call(this,D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AdP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BFa={Undefined:0,BE_:1,BE$:2,IdScanned:3,BD9:4,BC_:5,BDT:6};C.AL1={A$i:function(
){A._GetAutoObject(A.Device.Device).A_(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Be4]);},_Init:function(aArg){C.Auw._Init.call(
this,aArg);this.__proto__=C.AL1;this.FZ.As(1);this.AS3(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aeg={VI:null,VJ:null,VK:null,AgO:null,AgP:null,AgQ:null,CA:null,Ck:null,Cg:null
,AnU:A.jV,AnV:A.jV,AnW:A.jV,AqT:0,AqU:0,AqV:0,Ag7:0,Zs:false,Zr:false,Ar9:false,
Asl:false,Ask:false,Ajr:function(E9){this.CA=E9.CA;this.Ck=E9.Ck;this.Cg=E9.Cg;this.
AnU=E9.AnU;this.AnV=E9.AnV;this.AnW=E9.AnW;this.Ag7=E9.Ag7;this.VI=E9.VI;this.VJ=
E9.VJ;this.VK=E9.VK;this.AgO=E9.AgO;this.AgP=E9.AgP;this.AgQ=E9.AgQ;this.Ask=E9.
Ask;this.Asl=E9.Asl;this.Ar9=E9.Ar9;this.Zr=E9.Zr;this.Zs=E9.Zs;this.AqT=E9.AqT;
this.AqU=E9.AqU;this.AqV=E9.AqV;},AkF:function(E9){E9.CA=this.CA;E9.Ck=this.Ck;E9.
Cg=this.Cg;E9.Ht(this.AnU);E9.FH(this.AnV);E9.B2(this.AnW);E9.AE7(this.Ag7);E9.AEY(
this.VI);E9.ArA(this.VJ);E9.Anq(this.VK);E9.CZ(this.AgO);E9.Cq(this.AgP);E9.C5(this.
AgQ);E9.OL(this.Ask);E9.OM(this.Asl);E9.Ar9=this.Ar9;E9.Zr=this.Zr;E9.Zs=this.Zs;
E9.Bml(this.AqT);E9.ASR(this.AqU);E9.A91(this.AqV);},_Init:function(aArg){this.__proto__=
C.Aeg;this.VI=A.aaL(A.fl.Ak);this.VJ=A.aaL(A.fl.Ak);this.VK=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VI=A.aaL(
A.fl.Ak);this.VJ=A.aaL(A.fl.Ak);this.VK=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VJ)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.VK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgP)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AgQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CA)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ck)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Ash._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dn(C.AC1);},_className:"Application::NewAnimalSetTransponderScreen"};C.C6={Aa2:null
,CountryToString:null,Dr:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gd:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Ls(aIndex);},DO:function(A7){return A7;
},Hp:function(){return 39;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.
Aa2)(F=this.Aa2,F[2].call(F[0],E));},A1k:function(G){var F;if(!!this.Aa2)this.Q=(
F=this.Aa2,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Ca],0);},AEQ:
function(E){if(A.aaZ(this.Aa2,E))return;if(!!this.Aa2)A.z$([this,this.A1k],this.
Aa2,0);this.Aa2=E;if(!!this.Aa2)A.zX([this,this.A1k],this.Aa2,0);A.pe([this,this.
A1k],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C6;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Aa2)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OW={AC:null,Q:null,Background:null,Im:null,Il:null,MZ:
0,AM:0,Gi:0,FW:0,Af2:function(G){this.J8(this);},Bk:function(aSize){A.Core.O.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Iw=((Ae&0x40)===0x40);if(Iw){this.Background.
L(A.jb.AV);this.Do(256);}else{this.Background.L(this.MZ);this.Do(256);}},Af1:function(
G){this.J3(this);},CJ:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3g],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3g],E,0);if(!!E)A.pe([this
,this.A3g],this);},CY:function(E){if(this.MZ===E)return;this.MZ=E;this.An();},J8:
function(G){var F;var BR=this.AM;this.BC(this.AM+1);if(this.AM!==BR){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},J3:function(
G){var F;var BR=this.AM;this.BC(this.AM-1);if(this.AM!==BR){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},BC:function(
E){if(E<this.Gi)E=this.FW;if(E>this.FW)E=this.Gi;if(this.AM===E)return;this.AM=E;
this.An();},Gq:function(E){if(this.Gi===E)return;this.Gi=E;this.An();},E5:function(
E){if(this.FW===E)return;this.FW=E;this.An();},C3:function(G){var F;if(!!this.Q)
this.BC(this.AC.DO((F=this.Q,F[1].call(F[0]))));},As:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},A3g:function(G){var F;if(!!this.
AC){this.Gq(0);this.E5(this.AC.Hp());if(!!this.Q)this.BC(this.AC.DO((F=this.Q,F[
1].call(F[0]))));this.An();}},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BL._Init.call(this.Im={
I:this},0);A.Core.BL._Init.call(this.Il={I:this},0);this.__proto__=C.OW;this.H(A$3
);this.Background.H(As6);this.Im.Filter=4;this.Il.Filter=5;this.MZ=A.jb.CI;this.
J(this.Background,0);this.Im.BM=[this,this.Af2];this.Im.DZ=[this,this.Af2];this.
Il.BM=[this,this.Af1];this.Il.DZ=[this,this.Af1];},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Im._Done();this.Il._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit(
);this.Im._ReInit();this.Il._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RN={A1c:A.jV,Ai:function(
Ae){C.Fr.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5p));this.Kp(this.A1c);},Ce:function(
G){C.Fr.Ce.call(this,G);var Alp=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Alp)this.A1c=W4;else this.A1c=A._GetAutoObject(A.acj.KI).AjF(Alp);this.An();
},_Init:function(aArg){C.Fr._Init.call(this,aArg);this.__proto__=C.RN;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RO={A2g:0,Ai:function(Ae){C.Fr.Ai.call(
this,Ae);this.T(A.aaR(A.acf.AQ9));if(this.A2g>0)this.Kp(this.A2g.toFixed());else
this.Kp(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fr.Ce.call(this,G);this.A2g=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.An();},_Init:function(aArg){C.Fr._Init.call(
this,aArg);this.__proto__=C.RO;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dr:function(){return 5;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gd:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BO(aIndex);},DO:function(A7){return A7;},Hp:function(){return 4;},As:function(E){
C.AC.As.call(this,E);if(!!this.Animal)this.Animal.Akn(E);},A1E:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B$,
this.Ca],0);},LX:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A1E],[B=this.Animal,B.ASb,B.Akn],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A1E],[B=this.Animal,B.ASb,B.Akn],0);A.pe([this,this.A1E],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dr:function(){return 99;},C7:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gd:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BO(aIndex);},DO:function(A7){return A7;
},Hp:function(){return 98;},As:function(E){C.AC.As.call(this,E);if(!!this.Animal
)this.Animal.NW(E);},A1a:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B$,this.Ca],0);},LX:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1a],[B=this.Animal,B.AvZ,B.NW],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1a],[B=this.Animal,B.AvZ,B.NW],0);A.pe([
this,this.A1a],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARr={VX:null,YE:null,Aez:null,Init:function(
aArg){this.Bb(this.VX);},Adk:function(G){var Aa=(C.Cm.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YE)this.BxJ();else if(Aa===this.VX)this.BAr(this);else throw new
Error(Ax3);A._GetAutoObject(A.Device.Device).Dt(0);},BAr:function(G){var B;var F;
var Vb=(C.Ami.isPrototypeOf(B=(F=A._GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null
);if(!Vb){A.ab5("%s",Bqq);return;}Vb.AKm(this);},BxJ:function(){A._GetAutoObject(
A.Device.Helper).W.AGs(true);A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(
A.Device.Device).Ao);A._GetAutoObject(A.Device.Device).A_(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ml._Init.call(this.VX={I:this},0);C.Ml._Init.call(this.YE={
I:this},0);C.VD._Init.call(this.Aez={I:this},0);this.__proto__=C.ARr;var B;this.
H(AcF);this.VX.H(P5);this.VX.Ar(true);this.VX.T(A.aaR(A.acf.A_0));this.VX.Bj(true
);this.YE.H(IN);this.YE.Ar(true);this.YE.T(A.aaR(A.acf.A4D));this.YE.Bj(true);this.
Aez.H(BF);this.Aez.T(A.aaR(A.acf.ACC));this.Aez.Bj(true);this.J(this.VX,0);this.
J(this.YE,0);this.J(this.Aez,0);this.VX.AR=[this,this.Adk];this.YE.AR=[this,this.
Adk];this.Aez.ASF([B=A._GetAutoObject(A.Device.Device),B.Arg,B.As8]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.VX._Done();this.YE._Done(
);this.Aez._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.VX._ReInit();this.YE._ReInit();this.Aez._ReInit();this.VX.
T(A.aaR(A.acf.A_0));this.YE.T(A.aaR(A.acf.A4D));this.Aez.T(A.aaR(A.acf.ACC));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.VX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aez)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VD={
Ai:function(Ae){C.T8.Ai.call(this,Ae);var FK=A.jb.CI;var GN=A.jb.Text;if(this.Hd
){FK=A.jb.Text;GN=A.jb.Bm;}if(!this.LF){this.Background.L(FK);this.V.L(A.jb.AmW);
}else if(this.Ql){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KC){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FK);this.V.
L(GN);}if(this.Ams){this.Mj.Cu(1);this.Mj.L(A.jb.H4);}else{this.Mj.Cu(0);this.Mj.
L(A.jb.Bm);}},_Init:function(aArg){C.T8._Init.call(this,aArg);this.__proto__=C.VD;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AD2={C8:null,A0:null,AF:
null,Aj_:null,QQ:null,EI:null,ARJ:Lu,Bk:function(aSize){C.Cm.Bk.call(this,aSize);
var FK=A.jb.CI;var GN=A.jb.Text;if(this.Hd){FK=A.jb.Bm;GN=A.jb.Text;}this.Background.
L(FK);this.V.L(GN);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CP;C.Cm.Ai.call(this
,Ae);this.Aj_.L(this.V.AQ);this.QQ.L(this.V.AQ);this.QQ.R(Bqr);this.T(((this.ARJ+
A.aaR(A.acf.Colon))+CO)+A._GetAutoObject(A.Device.Helper).AnY(840003123456789).toFixed(
));if(!!this.A0&&!!this.AF){var A2l=this.QQ.Ae7([(this.QQ.String.length-(F=this.
AF,F[1].call(F[0])))-(CP=this.A0,CP[1].call(CP[0])),0]);var A3G=this.QQ.Ae7([this.
QQ.String.length-(F=this.AF,F[1].call(F[0])),0]);var AA4=this.QQ.Da();this.EI.H([
A2l[0]-1,AA4[1],A3G[0]+1,AA4[3]]);}else this.EI.H(this.QQ.Da());},DD:function(E){
if(this.C8===E)return;this.C8=E;this.Aj_.Aw(E);},PN:function(E){if(A.aaZ(this.A0
,E))return;if(!!this.A0)A.z$([this,this.Aax],this.A0,0);this.A0=E;if(!!E)A.zX([this
,this.Aax],E,0);if(!!E)A.pe([this,this.Aax],this);},QZ:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.Aay],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.Aay],E,0);if(!!E)A.pe([this,this.Aay],this);},Aay:function(G){this.An(
);},Aax:function(G){this.An();},AFk:function(E){if(this.ARJ===E)return;this.ARJ=
E;this.An();},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.acg.Am._Init.call(
this.Aj_={I:this},0);A.acg.Text._Init.call(this.QQ={I:this},0);A.acg.Cf._Init.call(
this.EI={I:this},0);this.__proto__=C.AD2;this.H(JY);this.V.A8(0x11);this.Aj_.H(Rf
);this.QQ.H(Bqs);this.EI.H(Bqt);this.EI.Ne(2);this.EI.L(A.jb.EW);this.J(this.Aj_
,0);this.J(this.QQ,0);this.J(this.EI,0);this.QQ.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Cm;this.Aj_._Done();this.QQ._Done();this.EI._Done();C.Cm._Done.
call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.Aj_._ReInit();this.
QQ._ReInit();this.EI._ReInit();this.QQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Cm._Mark.call(this,D);if((B=this.C8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aj_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={ATP:0,Init:
function(aArg){var B;A.zX([this,this.Beo],[B=A._GetAutoObject(A.Device.Device),B.
AEi,B.AIu],0);A.pe([this,this.Beo],this);},HM:function(G){C.Tv.HM.call(this,G);if(
this.AjJ)this.N.Cq(A.aaL(A.ach.AD));else this.N.Cq(A.aaL(A.ach.AM2));this.N.C5(A.
aaL(A.ach.Options));this.N.FH(A.jV);this.N.B2(A.jV);this.N.Ck=[this,this.A_J];this.
N.Cg=[this,this.Wn];this.N.ArA(A.aaL(A.fl.Ak));this.N.Anq(A.aaL(A.fl.Ak));},MU:function(
G){this.BeJ(this);},Om:function(G){this.BAm(this);},Agh:function(AcX,AcY,BwN){A.
_GetAutoObject(C.BN).Aur(AcX,AcY,[this,this.A8U,this.AS6],BwN);},Wn:function(G){
if((A._GetAutoObject(A.Device.Device).D7===3)&&!this.AjJ){A._GetAutoObject(C.BN).
Qu(A.aaR(A.acf.BhM),[this,this.Bnt]);A._GetAutoObject(C.BN).FA();}this.Agh(A.aaR(
A.acf.Rating),[this,this.ATu],3);this.Agh(A.aaR(A.acf.Afj),[this,this.ATw],2);this.
Agh(A.aaR(A.acf.Temperature),[this,this.ATv],1);this.Agh(A.aaR(A.acf.XI),[this,this.
ATt],0);A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Nz(A.aaR(A.acf.A5X));
A._GetAutoObject(A.Device.Device).Dt(6);},AS6:function(E){if(this.ATP===E)return;
this.ATP=E;A.abo([this,this.A8U,this.AS6],0);},Beo:function(G){this.AS6(A._GetAutoObject(
A.Device.Device).D7);},A8U:function(){return this.ATP;},_Init:function(aArg){C.Tv.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vn:null
,Init:function(aArg){var B;A.zX([this,this.AfY],[B=A._GetAutoObject(A.Device.Device
).Ao,B.Fh,B.Fl],0);A.pe([this,this.Bgr],this);A.pe([this,this.Q5],this);},CB:function(
G){C.Tv.CB.call(this,G);A.pe([this,this.Bgx],this);},AGy:function(G){C.Tv.AGy.call(
this,G);if(!!this.Le)this.Ahp(this.Le,this.Vn);},HM:function(G){C.Tv.HM.call(this
,G);this.N.Cq(A.aaL(A.ach.AQH));this.N.C5(A.aaL(A.ach.AQI));if(this.AjJ)this.N.ASR(
0);else this.N.ASR(1);this.N.A91(A._GetAutoObject(A.Device.Converter).BgX(A._GetAutoObject(
A.Device.Device).D7));this.N.FH(A.jV);this.N.B2(A.jV);this.N.Ck=[this,this.Blk];
this.N.Cg=[this,this.Bnv];this.N.ArA(A.aaL(A.fl.Ak));this.N.Anq(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).Ao.QC()){this.N.I0.Do(100);this.N.Ck=null;
}else this.N.I0.Do(255);if(!A._GetAutoObject(A.Device.Device).Ao.Cd()){this.N.Ld.
Do(100);this.N.Cg=null;}else this.N.Ld.Do(255);if(A._GetAutoObject(A.Device.Device
).Ao.Cd()<=1){this.N.TU.Do(100);this.N.TW.Do(100);}else{this.N.TU.Do(255);this.N.
TW.Do(255);}},MU:function(G){if(A._GetAutoObject(A.Device.Device).Ao.Cd()<=1)return;
var LB=A._GetAutoObject(A.Device.Helper).W.CK;LB=LB+1;if(LB>=A._GetAutoObject(A.
Device.Device).Ao.Cd())LB=0;A._GetAutoObject(A.Device.Helper).HJ(LB);},Om:function(
G){if(A._GetAutoObject(A.Device.Device).Ao.Cd()<=1)return;var LB=A._GetAutoObject(
A.Device.Helper).W.CK;LB=LB-1;if(LB<0)LB=A._GetAutoObject(A.Device.Device).Ao.Cd(
)-1;A._GetAutoObject(A.Device.Helper).HJ(LB);},AfX:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A1).BU(57);},Blk:function(G){A._GetAutoObject(
A.Device.Device).Dt(10);},Bnv:function(G){this.BeJ(this);},Q5:function(G){A._GetAutoObject(
A.Device.Device).Ao.Bl(A._GetAutoObject(A.Device.Helper).Mo());A.pe([this,this.Bgx
],this);},Bgr:function(G){if(!A._GetAutoObject(A.Device.Device).Ao.Cd()){this.Vn.
Z(true);if(!A._GetAutoObject(A.Device.Device).Ao.QC()||!A._GetAutoObject(A.Device.
Device).Ao.Filter)this.Vn.R(A.aaR(A.acf.AD$));else if(!A._GetAutoObject(A.Device.
Device).Ao.Filter.DN(1,4)){if(A._GetAutoObject(A.Device.Helper).ACN(A._GetAutoObject(
A.Device.Device).Ao.Filter)===1)this.Vn.R(A.aaR(A.acf.ANU));else this.Vn.R(A.aaR(
A.acf.ANT));}else this.Vn.R(A.aaR(A.acf.ARQ));}else this.Vn.Z(false);},Bgx:function(
G){var BBj=A._GetAutoObject(A.Device.Helper).W.Id;var A3J=A._GetAutoObject(A.Device.
Device).Ao.Lb(0,BBj);if(!A._GetAutoObject(A.Device.Device).Ao.Cd())A._GetAutoObject(
A.Device.Helper).HJ(-1);else if(A3J<0)A._GetAutoObject(A.Device.Helper).HJ(0);},
AfY:function(G){this.Bgr(this);this.HM(this);},_Init:function(aArg){C.Tv._Init.call(
this,aArg);C.AkG._Init.call(this.Vn={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dn(C.APk);this.Vn.H(E8);this.J(this.Vn,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tv;this.Vn._Done();C.Tv._Done.call(this);},_ReInit:function(){
C.Tv._ReInit.call(this);this.Vn._ReInit();},_Mark:function(D){var B;C.Tv._Mark.call(
this,D);if((B=this.Vn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMe={QK:null,VY:null,Abx:null,YH:null,Init:function(aArg){var B;var F;this.Bb(
this.QK);if(!!A._GetAutoObject(C.A1).Q){var Vb=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null);if(!Vb){A.ab5("%s",AZA);
return;}else{if(Vb.AjJ)this.QK.T(A.aaR(A.acf.Bh));else this.QK.T(A.aaR(A.acf.EQ)
);var Azh=A._GetAutoObject(A.Device.Device).Ao.Filter;if(!Azh||A._GetAutoObject(
A.Device.Helper).Aq0(Azh))this.YH.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).Ao.Cd()){this.VY.Ar(false);this.QK.Ar(false);}}}},Adk:function(G){var Aa=(C.Cm.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dt(0);if(
Aa===this.Abx)A._GetAutoObject(C.A1).BU(9);else if(Aa===this.VY)A._GetAutoObject(
A.Device.Device).Dt(7);else if(Aa===this.QK)this.BBO();else if(Aa===this.YH)this.
A1i();else throw new Error(Ax3);},BBO:function(){var B;var F;var Vb=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null);if(!Vb){A.
ab5("%s",AZA);return;}Vb.A_J(this);},A1i:function(){var B;var F;var Vb=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null);if(!Vb){A.
ab5("%s",AZA);return;}Vb.Q5(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Ml._Init.call(this.QK={I:this},0);C.Ml._Init.call(this.VY={I:this},
0);C.Ml._Init.call(this.Abx={I:this},0);C.Ml._Init.call(this.YH={I:this},0);this.
__proto__=C.AMe;this.H(Afs);this.QK.H(Z7);this.QK.Ar(true);this.QK.T(A.aaR(A.acf.
EQ));this.QK.Bj(true);this.VY.H(P5);this.VY.Ar(true);this.VY.T(A.aaR(A.acf.AUf));
this.VY.Bj(true);this.Abx.H(IN);this.Abx.T(A.aaR(A.acf.AkI));this.Abx.Bj(true);this.
YH.H(BF);this.YH.T(A.aaR(A.acf.ABX));this.YH.Bj(true);this.J(this.QK,0);this.J(this.
VY,0);this.J(this.Abx,0);this.J(this.YH,0);this.QK.AR=[this,this.Adk];this.VY.AR=[
this,this.Adk];this.Abx.AR=[this,this.Adk];this.YH.AR=[this,this.Adk];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QK._Done();this.VY._Done(
);this.Abx._Done();this.YH._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QK._ReInit();this.VY._ReInit();this.Abx.
_ReInit();this.YH._ReInit();this.QK.T(A.aaR(A.acf.EQ));this.VY.T(A.aaR(A.acf.AUf
));this.Abx.T(A.aaR(A.acf.AkI));this.YH.T(A.aaR(A.acf.ABX));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.MultiInfoActionsScreen={_Init:function(aArg){C.GC._Init.call(this,aArg);this.
__proto__=C.MultiInfoActionsScreen;this.N.B2(A.aaR(A.acf.A4$));},_ReInit:function(
){C.GC._ReInit.call(this);this.N.B2(A.aaR(A.acf.A4$));},_className:"Application::MultiInfoActionsScreen"
};C.I1={TX:null,Ev:null,Yf:null,Background:null,Am:null,Im:null,Il:null,MZ:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var G9=((Ae&0x10)===0x10
);var Iw=((Ae&0x40)===0x40);if(Iw){this.Background.L(A.jb.AV);this.Am.L(A.jb.Bm);
this.Do(256);}else if(G9){this.Background.L(this.MZ);this.Am.L(A.jb.Text);this.Do(
256);}else{this.Background.L(this.MZ);this.Am.L(A.jb.Text);this.Do(128);}if(!this.
AM)this.Am.Cu(0);else if(this.AM>0){if(A.aaZ(this.TX,[B=A._GetAutoObject(A.Device.
Device),B.Av9,B.AyB]))this.Am.Cu(2);else if(A.aaZ(this.TX,[B=A._GetAutoObject(A.
Device.Device),B.Av8,B.AyA]))this.Am.Cu(3);else if(!!this.Yf&&((F=this.Yf,F[1].call(
F[0]))===1))this.Am.Cu(1);else this.Am.Cu(0);}else if(A.aaZ(this.TX,[B=A._GetAutoObject(
A.Device.Device),B.Av9,B.AyB]))this.Am.Cu(6);else if(A.aaZ(this.TX,[B=A._GetAutoObject(
A.Device.Device),B.Av8,B.AyA]))this.Am.Cu(7);else if(!!this.Yf&&((F=this.Yf,F[1].
call(F[0]))===1))this.Am.Cu(5);else this.Am.Cu(4);},Af2:function(G){this.J8(this
);},Af1:function(G){this.J3(this);},J8:function(G){this.BC(1);},J3:function(G){this.
BC(-1);},Bmv:function(E){if(A.aaZ(this.TX,E))return;if(!!this.TX)A.z$([this,this.
A21],this.TX,0);this.TX=E;if(!!E)A.zX([this,this.A21],this.TX,0);A.pe([this,this.
A21],this);},Ug:function(E){if(A.aaZ(this.Ev,E))return;if(!!this.Ev)A.z$([this,this.
Af0],this.Ev,0);this.Ev=E;if(!!E)A.zX([this,this.Af0],this.Ev,0);if(!!E)A.pe([this
,this.Af0],this);},A21:function(G){var F;if(!!this.TX)this.BC((F=this.TX,F[1].call(
F[0])));},Af0:function(G){A.pe([this,this.BB1],this);},CY:function(E){if(this.MZ===
E)return;this.MZ=E;this.An();},BC:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.TX)(F=this.TX,F[2].call(F[0],E));this.An();A.abo([this,this.Ud,this.
BC],0);},A9R:function(E){if(A.aaZ(this.Yf,E))return;if(!!this.Yf)A.z$([this,this.
Af0],this.Yf,0);this.Yf=E;if(!!E)A.zX([this,this.Af0],this.Yf,0);if(!!E)A.pe([this
,this.Af0],this);},BB1:function(G){var F,CP;if(!this.Yf||!this.Ev)return;this.Bmv(
A._GetAutoObject(A.Device.Helper).Bdb((F=this.Yf,F[1].call(F[0])),(CP=this.Ev,CP[
1].call(CP[0]))));this.An();},Ud:function(){return this.AM;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Am._Init.call(this.Am={I:this},0);A.Core.BL._Init.call(this.Im={I:this},0);
A.Core.BL._Init.call(this.Il={I:this},0);this.__proto__=C.I1;this.H(AIm);this.Background.
A3(0x3F);this.Background.H(AIm);this.Am.A3(0x3C);this.Am.H(AIm);this.Im.Filter=4;
this.Il.Filter=5;this.MZ=A.jb.CI;this.J(this.Background,0);this.J(this.Am,0);this.
Am.Aw(A.aaL(A.ach.AUF));this.Im.BM=[this,this.Af2];this.Il.BM=[this,this.Af1];},
_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.Am._Done();
this.Im._Done();this.Il._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Background._ReInit();this.Am._ReInit();this.Im._ReInit(
);this.Il._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.TX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.ALL={Wn:function(G){var B;var F;this.Agi();if(!!A._GetAutoObject(A.Device.Helper
).AOx((F=this.FE,F[1].call(F[0])),0,true))this.ALT(A.aaR(A.acf.A6W),[this,this.Bnw
],[B=A._GetAutoObject(A.Device.Device),B.A8c,B.BaM]);else A._GetAutoObject(C.BN).
XG(A.aaR(A.acf.A6W));A._GetAutoObject(C.BN).FA();this.IU(A.aaR(A.acf.LinkTransponder
),[this,this.BmL],8);this.IU(A.aaR(A.acf.Tr),[this,this.Akk],9);this.IU(A.aaR(A.
acf.A$R),[this,this.Bnm],10);this.IU(A.aaR(A.acf.AF5),[this,this.ATa],3);this.IU(
A.aaR(A.acf.AnT),[this,this.AwI],2);A._GetAutoObject(C.BN).FA();A._GetAutoObject(
C.BN).Nz(A.aaR(A.acf.Ame)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dt(6);},Dz:function(G){},Abh:function(){return C.Amq;},Abi:function(){return C.AmR;
},Q5:function(G){var F;A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(
A.Device.Helper).A6x((F=this.FE,F[1].call(F[0]))));},HM:function(G){var F;C.GS.HM.
call(this,G);if(this.Aj9()===false){this.N.Cq(A._GetAutoObject(A.Device.Converter
).BgZ((F=this.FE,F[1].call(F[0]))));this.N.Ck=[this,this.AIH];this.N.FH(A.jV);}this.
N.OL(false);this.N.OM(false);},Af6:function(){A._GetAutoObject(C.A1).BU(59);},Af5:
function(){A._GetAutoObject(C.A1).BU(60);},A26:function(G){C.GS.A26.call(this,G);
A.pe([this,this.A0a],this);},Bnw:function(G){A._GetAutoObject(A.Device.Device).Awd(
!A._GetAutoObject(A.Device.Device).Ap7);this.An1(this);},An1:function(G){var F;var
Be=A._GetAutoObject(A.Device.Device).Ao.Filter.Fd();A._GetAutoObject(A.Device.Helper
).Bn3(Be);if(A._GetAutoObject(A.Device.Device).Ap7){var A11=A._GetAutoObject(A.Device.
Helper).AOx((F=this.FE,F[1].call(F[0])),21600,true);Be.CW(A11);}A._GetAutoObject(
A.Device.Device).Ao.Bl(Be);},_Init:function(aArg){C.GS._Init.call(this,aArg);this.
__proto__=C.ALL;var B;this.Dx(A.aaR(A.acf.AvT));this.AwD([B=A._GetAutoObject(A.Device.
Device),B.A8b,B.BaL]);},_ReInit:function(){C.GS._ReInit.call(this);this.Dx(A.aaR(
A.acf.AvT));},_className:"Application::ActionListScreen"};C.ALK={_Init:function(
aArg){C.IW._Init.call(this,aArg);this.__proto__=C.ALK;},_className:"Application::ActionListFilterScreen"
};C.ALJ={_Init:function(aArg){C.GC._Init.call(this,aArg);this.__proto__=C.ALJ;this.
N.B2(A.aaR(A.acf.A42));},_ReInit:function(){C.GC._ReInit.call(this);this.N.B2(A.
aaR(A.acf.A42));},_className:"Application::ActionListActionsScreen"};C.APk={IG:null
,IL:null,Bc:null,My:A.jV,Init:function(aArg){var B;A.zX([this,this.Ni],[B=A._GetAutoObject(
A.Device.Helper).W,B.A8Z,B.A_k],0);A.zX([this,this.Ni],[B=A._GetAutoObject(A.Device.
Device).Ao,B.Fh,B.Fl],0);},Dd:function(E){C.IE.Dd.call(this,E);this.IL.L(E);},D3:
function(G){C.IE.D3.call(this,G);var Azh=A._GetAutoObject(A.Device.Device).Ao.Filter;
if(!Azh||A._GetAutoObject(A.Device.Helper).Aq0(Azh))this.IG.Z(false);else this.IG.
Z(true);if(A._GetAutoObject(A.Device.Helper).W.AqK())this.AwP(((A._GetAutoObject(
A.Device.Helper).W.CK+1).toFixed()+A$4)+A._GetAutoObject(A.Device.Device).Ao.Cd(
).toFixed());else this.AwP(A$5);},AwP:function(E){if(this.My===E)return;this.My=
E;this.IL.R(E);},_Init:function(aArg){C.IE._Init.call(this,aArg);A.acg.Am._Init.
call(this.IG={I:this},0);A.acg.Text._Init.call(this.IL={I:this},0);A.acg.DQ._Init.
call(this.Bc={I:this},0);this.__proto__=C.APk;this.HN.H(Bqu);this.DS.H(Bqv);this.
IG.H(Bqw);this.IG.L(A.jb.Text);this.IL.H(A$6);this.IL.Hs(2);this.IL.KR(true);this.
IL.A8(0x12);this.IL.R(A$7);this.Bc.DE(Aym);this.Bc.DR(Ayn);this.Bc.L(A.jb.Bc);this.
J(this.IG,0);this.J(this.IL,0);this.J(this.Bc,0);this.IG.Aw(A.aaL(A.ach.Aeo));this.
IL.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IE;this.
IG._Done();this.IL._Done();this.Bc._Done();C.IE._Done.call(this);},_ReInit:function(
){C.IE._ReInit.call(this);this.IG._ReInit();this.IL._ReInit();this.Bc._ReInit();
this.IL.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IE._Mark.call(this,D);if((
B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.Asr={Text:null,Bk:function(aSize){C.OW.Bk.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OW.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(W4);else this.Text.R(this.AC.Gd((F=this.Q,F[1].call(F[0]
))));var Iw=((Ae&0x40)===0x40);if(Iw)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OW._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.Asr;this.Text.R(Rj);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.OW;this.Text._Done();C.OW.
_Done.call(this);},_ReInit:function(){C.OW._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.OW._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.AqX={C8:null,Bk:function(aSize){C.OW.Bk.call(this,aSize);this.C8.H(A.abK(this.
C8.M,aSize));},Ai:function(Ae){var B;var F;C.OW.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C8.Aw(null);else{this.C8.Aw(this.AC.ACJ(this.AC.DO((F=this.Q,F[1].call(F[
0])))));this.C8.Cu(this.AC.ACL(this.AC.DO((F=this.Q,F[1].call(F[0])))));}var Iw=((
Ae&0x40)===0x40);if(Iw)this.C8.L(A.jb.Bm);else this.C8.L(A.jb.Text);},_Init:function(
aArg){C.OW._Init.call(this,aArg);A.acg.Am._Init.call(this.C8={I:this},0);this.__proto__=
C.AqX;this.H(AIm);this.C8.H(A$3);this.J(this.C8,0);},_Done:function(){this.__proto__=
C.OW;this.C8._Done();C.OW._Done.call(this);},_ReInit:function(){C.OW._ReInit.call(
this);this.C8._ReInit();},_Mark:function(D){var B;C.OW._Mark.call(this,D);if((B=
this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AuR={VF:null,DirectionOfCountingToString:null,Ad6:null,Dr:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Dr()))return-1;return aIndex;
},Gd:function(aIndex){if((aIndex<0)||(aIndex>=this.Dr()))return A.jV;return this.
DirectionOfCountingToString.BO(aIndex);},DO:function(A7){return A7;},Hp:function(
){return this.Dr()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.VF)(F=
this.VF,F[2].call(F[0],E));},ACJ:function(aIndex){if((aIndex<0)||(aIndex>=this.Dr(
)))return null;return this.Ad6.Ass(aIndex);},ACL:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dr()))return-1;return this.Ad6.Ast(aIndex);},A1x:function(G){var F;
if(!!this.VF)this.Q=(F=this.VF,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Ca],0);},AeP:function(E){if(A.aaZ(this.VF,E))return;if(!!this.VF)A.z$([this
,this.A1x],this.VF,0);this.VF=E;if(!!this.VF)A.zX([this,this.A1x],this.VF,0);A.pe([
this,this.A1x],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Ad6._Init.call(this.Ad6={I:this},0);this.__proto__=C.AuR;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Ad6._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Ad6._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad6)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AL8={Hm:null,Ev:null,AnimalIdGenerationMethodToString:
null,AdL:null,Dr:function(){return 4;},C7:function(aIndex){var F;var A7=-1;if((aIndex<
0)||(aIndex>=this.Dr()))return-1;switch(aIndex){case 0:A7=0;break;case 1:A7=1;break;
case 2:A7=this.ByV((F=this.Ev,F[1].call(F[0])));break;case 3:A7=5;break;default:
throw new Error(Bqx+aIndex.toFixed());}return A7;},Gd:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dr()))return A.jV;return this.AnimalIdGenerationMethodToString.
BO(this.C7(aIndex));},DO:function(A7){var aIndex=-1;switch(A7){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bqy+A7.toFixed());}return aIndex;},Hp:function(){return this.
Dr()-1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Hm)(F=this.Hm,F[2].
call(F[0],E));},ACJ:function(aIndex){if((aIndex<0)||(aIndex>=this.Dr()))return null;
return this.AdL.Ass(this.C7(aIndex));},ACL:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dr()))return-1;return this.AdL.Ast(this.C7(aIndex));},A01:function(G){var F;
if(!!this.Hm)this.Q=(F=this.Hm,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Ca],0);},Bls:function(E){if(A.aaZ(this.Hm,E))return;if(!!this.Hm)A.z$([this
,this.A01],this.Hm,0);this.Hm=E;if(!!this.Hm)A.zX([this,this.A01],this.Hm,0);A.pe([
this,this.A01],this);},Ug:function(E){if(A.aaZ(this.Ev,E))return;if(!!this.Ev)A.
z$([this,this.Af0],this.Ev,0);this.Ev=E;if(!!this.Ev)A.zX([this,this.Af0],this.Ev
,0);A.pe([this,this.Af0],this);},Af0:function(G){A.pe([this,this.BxL],this);},ByV:
function(L3){var Rl=0;switch(L3){case 0:Rl=2;break;case 1:Rl=3;break;case 2:Rl=4;
break;default:throw new Error(Bqz+L3.toFixed());}return Rl;},BxL:function(G){var
Bd$=this.C7(this.DO(this.Q));if(this.Q!==Bd$)this.As(Bd$);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdL._Init.call(this.
AdL={I:this},0);this.__proto__=C.AL8;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdL._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdL._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGu={FC:null,AaO:null,Q:null,Ff:null,E4:null,HB:null,Wf:null,AW:null,HX:null
,Kf:null,A9:0,AM:0,Alh:0,Init:function(aArg){var B;A.zX([this,this.Ben],[B=A._GetAutoObject(
A.Device.Device),B.Ang,B.Aor],0);},Ai:function(Ae){C.Ee.Ai.call(this,Ae);if(this.
A9===1){if(this.Hd){this.AW.FG(A.jb.CI);this.HB.CY(A.jb.CI);this.Wf.CY(A.jb.CI);
this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FG(A.jb.CU);this.HB.
CY(A.jb.CU);this.Wf.CY(A.jb.CU);this.Background.L(A.jb.CI);this.V.L(A.jb.Text);}
}else{if(this.Hd){this.AW.FG(A.jb.CI);this.HB.CY(A.jb.CI);this.Wf.CY(A.jb.CI);}else{
this.AW.FG(A.jb.CU);this.HB.CY(A.jb.CU);this.Wf.CY(A.jb.CU);}this.Bb(null);}},IS:
function(G){C.Ee.IS.call(this,G);if(!this.A9)this.FO(this);else this.G8(this);},
DH:function(G){var F;if(!this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(
F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(
F[0])).CA=[this,this.G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(
F[0])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;}break;
default:this.FC.AkF((F=this.N,F[1].call(F[0])));}},FO:function(G){this.Et(1);},G8:
function(G){this.Et(0);},Et:function(EK){var F;if(!this.A9&&!!this.N)this.FC.Ajr((
F=this.N,F[1].call(F[0])));this.A9=EK;if(this.A9<0)this.A9=0;else if(this.A9>1)this.
A9=1;switch(this.A9){case 0:this.Bb(null);break;case 1:{if(this.AW.A8v())this.Bb(
this.AW);else this.Bb(this.Wf);if(!this.AM)this.AW.SE(2);else this.AW.SE(7);}break;
default:throw new Error(As7+this.A9.toFixed());}this.DH(this);this.An();},As:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},C3:function(G
){var F;if(!!this.Q){this.BC((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ud,this.
BC],0);}},BC:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Om:function(G){this.AAW(2);},MU:function(G){this.AAW(
7);},AAW:function(Gt){var B;var Azi=(A.Core.O.isPrototypeOf(B=this.AV)?B:null);if(
!!Azi){var Az$=(A.Core.O.isPrototypeOf(B=this.QB(Azi,Gt,0x15))?B:null);if(!!Az$){
this.Bb(Az$);return true;}}return false;},AoR:function(G){A.pe([this,this.Ben],this
);},A3V:function(G){var B;var F;if(!this.HX.Hm){this.Kf.AeP(null);return;}switch((
F=this.HX.Hm,F[1].call(F[0]))){case 0:case 1:this.Kf.AeP(null);break;case 3:this.
Kf.AeP([B=A._GetAutoObject(A.Device.Device),B.AR$,B.AZU]);break;case 2:this.Kf.AeP([
B=A._GetAutoObject(A.Device.Device),B.ASa,B.AZV]);break;case 4:case 5:this.Kf.AeP([
B=A._GetAutoObject(A.Device.Device),B.AEn,B.AIy]);break;default:throw new Error(
BqA+(F=this.HX.Hm,F[1].call(F[0])).toFixed());}},Ben:function(G){var F;if(!this.
HX.Hm)return;A.pe([this,this.A3V],this);var AtK=false;switch((F=this.HX.Hm,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtK=true;this.AW.A_C(-1);}break;case 0:
case 1:{AtK=false;this.AW.A_C(A._GetAutoObject(A.Device.Device).A0);}break;default:
throw new Error(Aye+(F=this.HX.Hm,F[1].call(F[0])).toFixed());}this.AW.Ar(AtK);this.
HB.Ar(AtK);this.HB.Z(AtK);if(((F=this.HX.Hm,F[1].call(F[0]))!==this.Alh)||(AtK===
false)){var BR=this.AM;this.BC(A._GetAutoObject(A.Device.Helper).AL6((F=this.HX.
Hm,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BR){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bjd((F=this.HX.Hm,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Km(A._GetAutoObject(A.Device.Device).A0);else this.AW.Km(0);this.Alh=(
F=this.HX.Hm,F[1].call(F[0]));},A9u:function(E){var B;if(this.AaO===E)return;if(
!!this.AaO){A.z$([this,this.AoR],[B=this.AaO,B.Wl,B.JO],0);A.z$([this,this.AoR],[
B=this.AaO,B.Ank,B.Nc],0);A.z$([this,this.AoR],[B=this.AaO,B.Ark,B.Q1],0);this.HX.
Ug(null);}this.AaO=E;if(!!E){A.zX([this,this.AoR],[B=this.AaO,B.Wl,B.JO],0);A.zX([
this,this.AoR],[B=this.AaO,B.Ank,B.Nc],0);A.zX([this,this.AoR],[B=this.AaO,B.Ark
,B.Q1],0);this.HX.Ug([B=this.AaO,B.Wl,B.JO]);}if(!!E)A.pe([this,this.AoR],this);
},Ud:function(){return this.AM;},_Init:function(aArg){C.Ee._Init.call(this,aArg);
A.Core.BL._Init.call(this.Ff={I:this},0);A.Core.BL._Init.call(this.E4={I:this},0
);C.AqX._Init.call(this.HB={I:this},0);C.AqX._Init.call(this.Wf={I:this},0);C.AvG.
_Init.call(this.AW={I:this},0);C.AL8._Init.call(this.HX={I:this},0);C.AuR._Init.
call(this.Kf={I:this},0);this.__proto__=C.AGu;var B;this.H(UQ);this.V.Ar(false);
this.V.R(AsW);this.V.L(A.jb.Bm);this.Ff.Filter=6;this.E4.Filter=7;this.HB.H(BqB);
this.HB.Ar(false);this.Wf.H(BqC);this.AW.H(BqD);this.AW.Ar(false);this.J(this.HB
,0);this.J(this.Wf,0);this.J(this.AW,0);this.FC=A._NewObject(C.Aeg,0);this.Ff.BM=[
this,this.Om];this.E4.BM=[this,this.MU];this.HB.CJ(this.Kf);this.HB.As([B=this.Kf
,B.B$,B.Ca]);this.Wf.CJ(this.HX);this.Wf.As([B=this.HX,B.B$,B.Ca]);this.AW.As([this
,this.Ud,this.BC]);this.HX.Bls([B=A._GetAutoObject(A.Device.Device),B.Ang,B.Aor]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ee;this.Ff._Done();this.E4.
_Done();this.HB._Done();this.Wf._Done();this.AW._Done();this.HX._Done();this.Kf.
_Done();C.Ee._Done.call(this);},_ReInit:function(){C.Ee._ReInit.call(this);this.
Ff._ReInit();this.E4._ReInit();this.HB._ReInit();this.Wf._ReInit();this.AW._ReInit(
);this.HX._ReInit();this.Kf._ReInit();},_Mark:function(D){var B;C.Ee._Mark.call(
this,D);if((B=this.FC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaO)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ff)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E4)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wf)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HX).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kf)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.GX={AzC:null,Ff:null,E4:null,GT:null,
FU:null,EI:null,M4:0,AMK:0,ABN:0,Un:0,A$O:-1,AMJ:false,Init:function(aArg){A.pe([
this,this.A0n],this);},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.EI.Z(this.
AMJ);this.EI.H(A.wC(this.Yk(this.ABN).M,this.Yk((this.ABN+this.AMK)-1).M));},Om:
function(G){var D2=(A.Core.BL.isPrototypeOf(G)?G:null);var A1f=this.BfV(2);if(A1f===
false)D2.NE=true;},MU:function(G){var D2=(A.Core.BL.isPrototypeOf(G)?G:null);var
A1f=this.BfV(7);if(A1f===false)D2.NE=true;},BfV:function(Gt){var B;var DV=(C.DB.
isPrototypeOf(B=this.AV)?B:null);DV=this.Bdd(DV,Gt,true);if(!!DV){this.Bb(DV);this.
AzC=(C.DB.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adj:function(
G){A.ab5("%s",Ak6);},GM:function(s){this.Adj(s);},FG:function(E){if(this.M4===E)
return;this.M4=E;this.FU.CY(E);this.GT.CY(E);},SE:function(Gt){var B;switch(Gt){
case 2:this.Bb(this.GT);break;case 7:this.Bb(this.FU);break;default:A.ab5("%s%e"
,BqE,Gt);}this.AzC=(C.DB.isPrototypeOf(B=this.AV)?B:null);},LN:function(G){},A0n:
function(s){this.LN(s);},AEK:function(E){if(this.AMJ===E)return;this.AMJ=E;this.
An();},A9A:function(E){if(this.AMK===E)return;this.AMK=E;this.An();},A9z:function(
E){if(this.ABN===E)return;this.ABN=E;this.An();},Yk:function(Hv){var B6=null;switch(
Hv){case-1:case 0:B6=this.FU;break;case 1:B6=this.GT;break;default:A.ab5("%s",AhR
);}return B6;},Km:function(E){if(this.Un===E)return;this.Un=E;this.Ama();},Ama:function(
){A.ab5("%s",Ak6);},Bdd:function(AcQ,Gt,LF){var B;if(!!AcQ){var Be;if(LF)Be=0x11;
else Be=0x0;switch(Gt){case 2:AcQ=(C.DB.isPrototypeOf(B=this.Aqy(AcQ,Be))?B:null
);break;case 7:AcQ=(C.DB.isPrototypeOf(B=this.TK(AcQ,Be))?B:null);break;default:
throw new Error(BqF);}}return AcQ;},A_C:function(E){if(this.A$O===E)return;this.
A$O=E;var DV=this.FU;var A1F;while(!!DV){A1F=!!E;DV.Ar(A1F);DV.Z(A1F);if(DV===this.
AzC)this.Bb(DV);DV=this.Bdd(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BL._Init.call(this.Ff={I:this},0);A.Core.BL._Init.
call(this.E4={I:this},0);C.DB._Init.call(this.GT={I:this},0);C.DB._Init.call(this.
FU={I:this},0);A.acg.Cf._Init.call(this.EI={I:this},0);this.__proto__=C.GX;this.
H(BqG);this.Ff.Filter=6;this.E4.Filter=7;this.M4=A.jb.CI;this.GT.H(EZ);this.FU.H(
A$8);this.EI.H(BqH);this.EI.Ne(2);this.EI.L(A.jb.EW);this.J(this.GT,0);this.J(this.
FU,0);this.J(this.EI,0);this.Ff.BM=[this,this.Om];this.Ff.DZ=[this,this.Om];this.
E4.BM=[this,this.MU];this.E4.DZ=[this,this.MU];this.AzC=this.FU;this.GT.Dh=[this
,this.GM];this.FU.Dh=[this,this.GM];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Ff._Done();this.E4._Done();this.GT._Done();this.FU._Done();this.EI.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Ff._ReInit();this.E4._ReInit();this.GT._ReInit();this.FU._ReInit();this.EI.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AzC)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ff)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EI)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQN={Dv:null,CV:null,Cs:null
,FG:function(E){if(this.M4===E)return;C.HG.FG.call(this,E);this.Cs.CY(E);this.CV.
CY(E);this.Dv.CY(E);},Yk:function(Hv){var B6=null;switch(Hv){case-1:case 0:B6=this.
FU;break;case 1:B6=this.Cs;break;case 2:B6=this.CV;break;case 3:B6=this.Dv;break;
case 4:B6=this.GT;break;default:A.ab5("%s",AhR);}return B6;},_Init:function(aArg
){C.HG._Init.call(this,aArg);C.DB._Init.call(this.Dv={I:this},0);C.DB._Init.call(
this.CV={I:this},0);C.DB._Init.call(this.Cs={I:this},0);this.__proto__=C.AQN;this.
H(BqI);this.GT.H(As6);this.Dv.H(A$9);this.CV.H(A$_);this.Cs.H(A$$);this.FU.H(BqJ
);this.J(this.Dv,-2);this.J(this.CV,-2);this.J(this.Cs,-2);this.Dv.Dh=[this,this.
GM];this.CV.Dh=[this,this.GM];this.Cs.Dh=[this,this.GM];},_Done:function(){this.
__proto__=C.HG;this.Dv._Done();this.CV._Done();this.Cs._Done();C.HG._Done.call(this
);},_ReInit:function(){C.HG._ReInit.call(this);this.Dv._ReInit();this.CV._ReInit(
);this.Cs._ReInit();},_Mark:function(D){var B;C.HG._Mark.call(this,D);if((B=this.
Dv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVe={Q8:null,Acy:null,AVd:0,CB:function(G){this.Acy.Ar(true);},EY:function(G
){this.Acy.Ar(false);},Bnk:function(E){if(this.AVd===E)return;this.AVd=E;this.Q8.
R((((A.aaR(A.acf.AVc)+Z9)+E.toFixed())+BqK)+A.aaR(A.acf.La));},Ble:function(){return this.
AVd;},BAH:function(G){A._GetAutoObject(C.A1).BU(3);A._GetAutoObject(A.Device.Device
).Ano(1);},_Init:function(aArg){C.XU._Init.call(this,aArg);C.CG._Init.call(this.
Q8={I:this},0);A.acl.Ge._Init.call(this.Acy={I:this},0);this.__proto__=C.AVe;this.
AeA.H(BqL);this.Uw.R(A.jV);this.Q8.H(BqM);this.Q8.R(A.aaR(A.acf.AVc)+Baa);this.Q8.
L(A.jb.Text);this.Acy.HK(1);this.Acy.Fj(5000);this.Acy.B3=100;this.J(this.Q8,0);
this.Q8.S(A.aaL(A.fl.Af));this.Q8.A2(A.aaL(A.fl.Ak));this.Q8.Ct(A.aaL(A.fl.Bi));
this.Acy.Su=[this,this.BAH];this.Acy.Q=[this,this.Ble,this.Bnk];},_Done:function(
){this.__proto__=C.XU;this.Q8._Done();this.Acy._Done();C.XU._Done.call(this);},_ReInit:
function(){C.XU._ReInit.call(this);this.Q8._ReInit();this.Acy._ReInit();this.Q8.
R(A.aaR(A.acf.AVc)+Baa);this.Q8.S(A.aaL(A.fl.Af));this.Q8.A2(A.aaL(A.fl.Ak));this.
Q8.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.XU._Mark.call(this,D);if((B=this.
Q8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ARE={K3:null,Lj:null,Bd0:false,Init:
function(aArg){this.Bb(this.C_);},Es:function(G){var B;if(!!this.K3)this.K3.Es(this
);C.Wh.Es.call(this,G);},Af3:function(G){var B;if(!!this.K3)this.K3.Af3(this);C.
Wh.Af3.call(this,G);},CB:function(G){var B;if(!this.Bd0){this.Bd0=true;A.pe([this
,this.A3o],this);}else if(!this.K3){this.K3=A._NewObject(C.ARG,0);this.K3.A9O([this
,this.AAM]);this.LN(this);this.K3.LN(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Es(this);else C.Wh.CB.call(this,G);}else C.Wh.CB.call(this,G
);},ApW:function(G){var B;if(!!this.K3)this.K3.ApW(this);},AAM:function(G){var B;
var F;this.LN(this);this.K3.LN(this);A.pe([this,this.AcJ],this);var BdB=this.LT;
this.AeM(A._GetAutoObject(A.Device.Helper).Abf(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVb(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,BdB);if(BdB)A._GetAutoObject(
A.Device.Helper).W.Q1(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.Ul(A._GetAutoObject(A.Device.Helper).AL6((F=this.Dg.HX.Hm,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JA(this.C_);},A3o:function(
G){A._GetAutoObject(C.A1).BU(90);},_Init:function(aArg){C.Wh._Init.call(this,aArg
);C.Q7._Init.call(this.Lj={I:this},0);this.__proto__=C.ARE;var B;this.Lj.H(AhO);
this.Lj.Aj(true);this.Lj.T(A.aaR(A.acf.ACc));this.J(this.Lj,-9);this.JU(this.Gf,-
1);this.Lj.Gk([this,this.D8,this.GK]);this.Lj.As([B=A._GetAutoObject(A.Device.Helper
).W,B.ASj,B.Anw]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wh;this.Lj.
_Done();C.Wh._Done.call(this);},_ReInit:function(){C.Wh._ReInit.call(this);this.
Lj._ReInit();this.Lj.T(A.aaR(A.acf.ACc));},_Mark:function(D){var B;C.Wh._Mark.call(
this,D);if((B=this.K3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADA={AgA:null,AgB:null,NH:null,NG:null,EP:null,FT:null,Em:null,Dv:null,CV:null,Cs:
null,FG:function(E){if(this.M4===E)return;C.Lf.FG.call(this,E);this.Cs.CY(E);this.
CV.CY(E);this.Dv.CY(E);this.Em.CY(E);this.FT.CY(E);this.EP.CY(E);this.NG.CY(E);this.
NH.CY(E);this.AgB.CY(E);this.AgA.CY(E);},Yk:function(Hv){var B6=null;switch(Hv){
case-1:case 0:B6=this.FU;break;case 1:B6=this.Cs;break;case 2:B6=this.CV;break;case
3:B6=this.Dv;break;case 4:B6=this.Em;break;case 5:B6=this.FT;break;case 6:B6=this.
EP;break;case 7:B6=this.NG;break;case 8:B6=this.NH;break;case 9:B6=this.AgB;break;
case 10:B6=this.AgA;break;case 11:B6=this.GT;break;default:A.ab5("%s",AhR);}return B6;
},_Init:function(aArg){C.Lf._Init.call(this,aArg);C.DB._Init.call(this.AgA={I:this
},0);C.DB._Init.call(this.AgB={I:this},0);C.DB._Init.call(this.NH={I:this},0);C.
DB._Init.call(this.NG={I:this},0);C.DB._Init.call(this.EP={I:this},0);C.DB._Init.
call(this.FT={I:this},0);C.DB._Init.call(this.Em={I:this},0);C.DB._Init.call(this.
Dv={I:this},0);C.DB._Init.call(this.CV={I:this},0);C.DB._Init.call(this.Cs={I:this
},0);this.__proto__=C.ADA;this.H(BqN);this.GT.H(AIn);this.AgA.H(Ayq);this.AgB.H(
AZB);this.NH.H(AZC);this.NG.H(AZD);this.EP.H(AZE);this.FT.H(AZF);this.Em.H(AZG);
this.Dv.H(Bab);this.CV.H(AZH);this.Cs.H(BqO);this.FU.H(BqP);this.J(this.AgA,-2);
this.J(this.AgB,-2);this.J(this.NH,-2);this.J(this.NG,-2);this.J(this.EP,-2);this.
J(this.FT,-2);this.J(this.Em,-2);this.J(this.Dv,-2);this.J(this.CV,-2);this.J(this.
Cs,-2);this.AgA.Dh=[this,this.GM];this.AgB.Dh=[this,this.GM];this.NH.Dh=[this,this.
GM];this.NG.Dh=[this,this.GM];this.EP.Dh=[this,this.GM];this.FT.Dh=[this,this.GM
];this.Em.Dh=[this,this.GM];this.Dv.Dh=[this,this.GM];this.CV.Dh=[this,this.GM];
this.Cs.Dh=[this,this.GM];},_Done:function(){this.__proto__=C.Lf;this.AgA._Done(
);this.AgB._Done();this.NH._Done();this.NG._Done();this.EP._Done();this.FT._Done(
);this.Em._Done();this.Dv._Done();this.CV._Done();this.Cs._Done();C.Lf._Done.call(
this);},_ReInit:function(){C.Lf._ReInit.call(this);this.AgA._ReInit();this.AgB._ReInit(
);this.NH._ReInit();this.NG._ReInit();this.EP._ReInit();this.FT._ReInit();this.Em.
_ReInit();this.Dv._ReInit();this.CV._ReInit();this.Cs._ReInit();},_Mark:function(
D){var B;C.Lf._Mark.call(this,D);if((B=this.AgA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Em)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HG={Q:null,AM:0,Ai:function(Ae){C.GX.Ai.call(this
,Ae);this.Ama();},Adj:function(G){var B;var F;var Ia=A.jV;var B6=this.GT;while(!
!B6){if(B6.E2>0)Ia=Ia+B6.E2.toFixed();else Ia=Ia+String.fromCharCode(0x30);B6=(C.
DB.isPrototypeOf(B=this.TK(B6,0x11))?B:null);}var BR=this.AM;this.BC(A.wz(Ia,-1,
10));if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LN:function(G){},Ama:function(){var B;var F;if(!!this.Q){var DV=this.FU;
var Adq=this.Un;var A7=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A7>0){DV.LY(A7%
10);A7=(A7/10)|0;}else if(Adq>0)DV.LY(0);else DV.LY(-1);DV=(C.DB.isPrototypeOf(B=
this.Aqy(DV,0x11))?B:null);Adq=Adq-1;}}},C3:function(G){var F;if(!!this.Q)this.BC((
F=this.Q,F[1].call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)
A.pe([this,this.C3],this);},BC:function(E){if(this.AM===E)return;this.AM=E;this.
An();},_Init:function(aArg){C.GX._Init.call(this,aArg);this.__proto__=C.HG;},_Mark:
function(D){var B;C.GX._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lf={AM:0,Q:null
,Ai:function(Ae){C.GX.Ai.call(this,Ae);this.Ama();},Adj:function(G){var B;var F;
var Ia=A.jV;var B6=this.GT;while(!!B6){if(B6.E2>0)Ia=Ia+B6.E2.toFixed();else Ia=
Ia+String.fromCharCode(0x30);B6=(C.DB.isPrototypeOf(B=this.TK(B6,0x11))?B:null);
}var BR=this.AM;this.BC(A.ab0(Ia,0,10));if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LN:function(G){},Ama:function(){var B;
var F;if(!!this.Q){var DV=this.FU;var Adq=this.Un;var A7=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A7>0){DV.LY((A7%10)|0);A7=Math.trunc(A7/10);}else if(Adq>0)DV.
LY(0);else DV.LY(-1);DV=(C.DB.isPrototypeOf(B=this.Aqy(DV,0x11))?B:null);Adq=Adq-
1;}}},C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,F[1].call(F[0])));},As:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);},BC:function(
E){if(this.AM===E)return;this.AM=E;this.An();},_Init:function(aArg){C.GX._Init.call(
this,aArg);this.__proto__=C.Lf;},_Mark:function(D){var B;C.GX._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dr:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gd:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BO(aIndex);},DO:function(A7){return A7;},Hp:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvG={Em:null,Dv:null,CV:null,Cs:null,FG:function(E){if(this.M4===E)return;C.
HG.FG.call(this,E);this.Cs.CY(E);this.CV.CY(E);this.Dv.CY(E);this.Em.CY(E);},Yk:
function(Hv){var B6=null;switch(Hv){case-1:case 0:B6=this.FU;break;case 1:B6=this.
Cs;break;case 2:B6=this.CV;break;case 3:B6=this.Dv;break;case 4:B6=this.Em;break;
case 5:B6=this.GT;break;default:A.ab5("%s",AhR);}return B6;},_Init:function(aArg
){C.HG._Init.call(this,aArg);C.DB._Init.call(this.Em={I:this},0);C.DB._Init.call(
this.Dv={I:this},0);C.DB._Init.call(this.CV={I:this},0);C.DB._Init.call(this.Cs={
I:this},0);this.__proto__=C.AvG;this.H(Ax7);this.GT.H(AHA);this.Em.H(AHB);this.Dv.
H(AHC);this.CV.H(AHD);this.Cs.H(AHE);this.FU.H(AHF);this.EI.H(Bac);this.J(this.Em
,-2);this.J(this.Dv,-2);this.J(this.CV,-2);this.J(this.Cs,-2);this.Em.Dh=[this,this.
GM];this.Dv.Dh=[this,this.GM];this.CV.Dh=[this,this.GM];this.Cs.Dh=[this,this.GM
];},_Done:function(){this.__proto__=C.HG;this.Em._Done();this.Dv._Done();this.CV.
_Done();this.Cs._Done();C.HG._Done.call(this);},_ReInit:function(){C.HG._ReInit.
call(this);this.Em._ReInit();this.Dv._ReInit();this.CV._ReInit();this.Cs._ReInit(
);},_Mark:function(D){var B;C.HG._Mark.call(this,D);if((B=this.Em)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUn={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Boq(0);this.AttributeSet.Bor(1);this.AttributeSet.Bos(4);},Ai:function(Ae){var B;
C.BZ.Ai.call(this,Ae);var G9=((Ae&0x10)===0x10);var Fo=((Ae&0x20)===0x20);var Iw=((
Ae&0x40)===0x40);var Gx=this.Bo.By;var FK=A.jb.CI;var GN=A.jb.Text;if(this.Hd){FK=
A.jb.Bm;GN=A.jb.Text;}if(!G9){this.Background.L(A.jb.CU);this.V.L(A.jb.CI);this.
AttributeSet.Ag$(A.jb.CI);}else if(Gx){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ag$(A.jb.Bm);}else if(Iw){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ag$(A.jb.Bm);}else if(Fo){this.Background.L(A.jb.
AmW);this.V.L(A.jb.Bm);this.AttributeSet.Ag$(A.jb.Bm);}else{this.Background.L(FK
);this.V.L(GN);this.AttributeSet.Ag$(GN);}this.LF=G9;this.KC=Fo;this.Ql=Gx;this.
Ao9=Iw;},He:function(G){var B;var F_=this.Dw.GY;var Cz=(A.acg.AuD.isPrototypeOf(
B=this.Dw.Ch)?B:null);Cz.A9w(this.AttributeSet);Cz.A8(0x12);if(!Cz)return;if(!!this.
AC)Cz.R(this.ByO(this.AC.Gd(F_)));else Cz.R(W4);Cz.H(A.abK(Cz.M,[this.Dw.V2,(B=this.
Dw.M)[3]-B[1]]));},ByO:function(Bxa){var AAw=Bxa;AAw=A._GetAutoObject(A.Device.Helper
).Ng(AAw,BqQ,BqR);AAw=A._GetAutoObject(A.Device.Helper).Ng(AAw,BqS,BqT);return BqU+
AAw;},_Init:function(aArg){C.BZ._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUn;this.Dw.H(BqV);this.Dw.Jr(2);
this.Dw.NX(A.acg.AuD);this.AttributeSet.Ag$(this.V.AQ);this.AttributeSet.Bmd(A.aaL(
A.fl.AOn));this.AttributeSet.A9Y(A.aaL(A.fl.Ak));this.AttributeSet.Ahc(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BZ;this.AttributeSet._Done(
);C.BZ._Done.call(this);},_ReInit:function(){C.BZ._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A9Y(A.aaL(A.fl.Ak));this.AttributeSet.Ahc(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BZ._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Ash._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dn(C.AC2);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dr:function(){return 14;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gd:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BO(aIndex
);},DO:function(A7){return A7;},Hp:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OP={FC:null,EnumToCodeset:
null,Jp:null,A9:0,Number:0,Ai:function(Ae){C.BZ.Ai.call(this,Ae);if(this.A9===1){
if(this.Hd){this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CI);this.V.L(A.jb.Text);}}},BC:function(E){C.BZ.BC.call(this,E);var BzH=this.
EnumToCodeset.Amv(this.Number);var Bd_=this.AC.C7(this.AM);if(BzH!==Bd_){this.AFl(
this.EnumToCodeset.Ad9(Bd_));A.abo([this,this.ASk,this.AFl],0);}},DH:function(G){
var F;if(!this.N)return;switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CZ(A.
aaL(A.ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[
this,this.G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(
A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=
this.N,F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;}break;default:
this.FC.AkF((F=this.N,F[1].call(F[0])));}},FO:function(G){this.Et(1);},G8:function(
G){this.Et(0);},Et:function(EK){var F;if(!this.A9)this.FC.Ajr((F=this.N,F[1].call(
F[0])));this.A9=EK;if((this.A9<0)||(this.A9>1))this.A9=0;this.DH(this);if(!this.
A9)this.Bb(null);else this.A1S();this.An();},AFl:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqG()>E)E=this.EnumToCodeset.
AqG();if(this.EnumToCodeset.Hp()<E)E=this.EnumToCodeset.Hp();}this.Number=E;var BR=
this.AM;if(!!this.EnumToCodeset){var ByE=this.EnumToCodeset.Amv(E);this.BC(this.
AC.DO(ByE));if(this.AM!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},Anp:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},U2:function(G){this.Et(this.A9+1);},A1S:function(){A.ab5(
"%s",BqW);},ASk:function(){return this.Number;},_Init:function(aArg){C.BZ._Init.
call(this,aArg);A.Core.BL._Init.call(this.Jp={I:this},0);this.__proto__=C.OP;this.
Jp.Filter=1;this.FC=A._NewObject(C.Aeg,0);this.Jp.BM=[this,this.U2];},_Done:function(
){this.__proto__=C.BZ;this.Jp._Done();C.BZ._Done.call(this);},_ReInit:function(){
C.BZ._ReInit.call(this);this.Jp._ReInit();},_Mark:function(D){var B;C.BZ._Mark.call(
this,D);if((B=this.FC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jp)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeH={Text:null,Ai:function(
Ae){C.Ei.Ai.call(this,Ae);this.Text.L(this.ACF);},BC:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rc(this.AM));this.
An();},Aay:function(G){A.pe([this,this.AfZ],this);},Aax:function(G){A.pe([this,this.
AfZ],this);},AlO:function(G){A.pe([this,this.AfZ],this);},AfZ:function(G){if((!this.
If||!this.A0)||!this.AF)return;},_Init:function(aArg){C.Ei._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeH;this.Text.A3(0x3F
);this.Text.H(AsO);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ei;this.Text._Done();C.Ei.
_Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Ei._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ARx={GB:0,C6:null,AW:null,E3:null,
I1:null,CountryToString:null,K_:0,L9:false,Init:function(aArg){A.zX([this,this.MG
],[this,this.Sv,this.Ln],0);},Ai:function(Ae){C.Ei.Ai.call(this,Ae);this.I1.Z(this.
Afd);this.AW.FG(this.LQ);this.E3.CY(this.LQ);this.I1.CY(this.LQ);},DH:function(G
){var F;if(!this.N)return;switch(this.A9){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(
F[0])).CA=[this,this.G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(
F[0])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).B2(this.CountryToString.BO(this.K_));(F=this.N,
F[1].call(F[0])).Cg=null;}break;default:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.
EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.
G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;}}},Et:function(EK){var Ti=this.
A9;this.A9=EK;if(this.A9<0)this.A9=0;else if(this.A9>this.RB)this.A9=this.RB;if((
this.A9===1)&&!this.Afd)this.A9=2;switch(this.A9){case 0:{this.Bb(null);if(!this.
GB)this.Ln(0);}break;case 1:this.Bb(this.I1);break;case 2:this.Bb(this.E3);break;
case 3:{this.Bb(this.AW);if(!this.GB||(Ti>0))this.AW.SE(2);else this.AW.SE(7);}break;
default:throw new Error(As7+this.A9.toFixed());}C.Ei.Et.call(this,this.A9);},Ape:
function(G){this.I1.Ug(this.Ev);},Aay:function(G){var F;this.AW.A9z((F=this.AF,F[
1].call(F[0])));},Aax:function(G){var F;this.AW.A9A((F=this.A0,F[1].call(F[0])));
},BC:function(E){if(this.AM===E)return;this.AM=E;this.L9=true;this.Sw(A._GetAutoObject(
A.Device.Helper).Sc(E,0,12));this.Ln(A._GetAutoObject(A.Device.Converter).ZO(E));
this.L9=false;if(!!E)this.AW.Km(12);else this.AW.Km(0);this.An();},AlO:function(
G){A.pe([this,this.AfZ],this);},FO:function(G){var F;if(!this.AM){var BR=this.AM;
this.BC(A._GetAutoObject(A.Device.Helper).ACR());if(this.AM!==BR){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Et(3);},AjG:function(){return this.
GB;},AjI:function(){return 999999999999;},Ln:function(E){if(this.K_===E)return;this.
K_=E;if(this.L9===false)A.pe([this,this.Vd],this);A.abo([this,this.Sv,this.Ln],0
);},Sw:function(E){if(this.GB===E)return;this.GB=E;if(this.L9===false)A.pe([this
,this.Vd],this);A.abo([this,this.AbO,this.Sw],0);},Vd:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqm(this.K_),3,10)+A.abm(this.GB,12,10
);var BR=this.AM;this.BC(A.ab0(aString,0,10));if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},AfZ:function(G){var F;if((!this.If||
!this.A0)||!this.AF)return;if(!(F=this.If,F[1].call(F[0])))this.AW.AEK(true);else
this.AW.AEK(false);},Sv:function(){return this.K_;},AbO:function(){return this.GB;
},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.C6._Init.call(this.C6={I:this
},0);C.ADA._Init.call(this.AW={I:this},0);C.Asr._Init.call(this.E3={I:this},0);C.
I1._Init.call(this.I1={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARx;var B;this.RB=3;this.AW.H(BqX);this.E3.H(Bad);this.
I1.H(Bae);this.J(this.AW,0);this.J(this.E3,0);this.J(this.I1,0);this.C6.AEQ([this
,this.Sv,this.Ln]);this.AW.As([this,this.AbO,this.Sw]);this.E3.CJ(this.C6);this.
E3.As([B=this.C6,B.B$,B.Ca]);this.I1.A9R([B=A._GetAutoObject(A.Device.Device),B.
Av3,B.Ayx]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.C6._Done(
);this.AW._Done();this.E3._Done();this.I1._Done();this.CountryToString._Done();C.
Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.C6._ReInit(
);this.AW._ReInit();this.E3._ReInit();this.I1._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ARw={GB:0,C6:null,AW:null,Yw:null,Kj:null,E3:null,I1:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pt:0,K_:0,L9:false,Init:function(aArg){A.
zX([this,this.MG],[this,this.PM,this.Ex],0);A.zX([this,this.MG],[this,this.Sv,this.
Ln],0);A.zX([this,this.MG],[this,this.Ani,this.Ahd],0);},Ai:function(Ae){C.Ei.Ai.
call(this,Ae);this.I1.Z(this.Afd);this.AW.FG(this.LQ);this.Yw.FG(this.LQ);this.Kj.
FG(this.LQ);this.E3.CY(this.LQ);this.I1.CY(this.LQ);},DH:function(G){var F;if(!this.
N)return;switch(this.A9){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(
A.ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this
,this.G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV
);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.
N,F[1].call(F[0])).B2(this.CountryToString.BO(this.K_));(F=this.N,F[1].call(F[0]
)).Cg=null;}break;case 3:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.
N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.G8];(F=this.
N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).B2(((A.aaR(A.acf.AGD)+A.aaR(A.acf.Colon))+Z9)+A.aaR(A.
acf.Bhj));break;case 1:(F=this.N,F[1].call(F[0])).B2(((A.aaR(A.acf.AGD)+A.aaR(A.
acf.Colon))+Z9)+A.aaR(A.acf.Box));break;case 2:(F=this.N,F[1].call(F[0])).B2(((A.
aaR(A.acf.AGD)+A.aaR(A.acf.Colon))+Z9)+A.aaR(A.acf.Bh_));break;default:(F=this.N
,F[1].call(F[0])).B2(((A.aaR(A.acf.AGD)+A.aaR(A.acf.Colon))+Z9)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cg=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0]
)).CA=[this,this.G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0
])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null
);(F=this.N,F[1].call(F[0])).B2((A.aaR(A.acf.Gr)+AxX)+this.GermanStateToString.Ls(
A._GetAutoObject(A.Device.Converter).ACI(this.Pt)));(F=this.N,F[1].call(F[0])).Cg=
null;}break;default:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[
1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.G8];(F=this.N,F[
1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2(
A.jV);(F=this.N,F[1].call(F[0])).Cg=null;}}},Et:function(EK){var Ti=this.A9;if(EK<
0)EK=0;else if(EK>this.RB)EK=this.RB;if((EK===1)&&!this.Afd)EK=2;switch(EK){case
0:{this.Bb(null);if((!this.GB&&!this.AnimalType)&&!this.Pt)this.Ln(0);}break;case
1:this.Bb(this.I1);break;case 2:this.Bb(this.E3);break;case 3:if(!Ti)A.pe([this,
this.BAU],this);else this.Bb(this.Yw);break;case 4:this.Bb(this.Kj);break;case 5:
if(((Ti===4)&&!this.Pt)&&!this.GB)return;else{this.Bb(this.AW);if(!this.GB||(Ti>
0))this.AW.SE(2);else this.AW.SE(7);}break;default:throw new Error(As7+EK.toFixed(
));}this.A9=EK;C.Ei.Et.call(this,this.A9);},BC:function(E){if(this.AM===E)return;
this.AM=E;this.L9=true;this.Sw(A._GetAutoObject(A.Device.Helper).Sc(E,0,8));this.
Ahd(A._GetAutoObject(A.Device.Helper).Sc(E,8,2)|0);this.Ex(A._GetAutoObject(A.Device.
Helper).Sc(E,10,2)|0);this.Ln(A._GetAutoObject(A.Device.Converter).ZO(E));this.L9=
false;if(!!this.AM){this.Yw.Km(2);this.Kj.Km(2);this.AW.Km(8);}else{this.Yw.Km(0
);this.Kj.Km(0);this.AW.Km(0);}this.An();},Ape:function(G){this.I1.Ug(this.Ev);}
,Aay:function(G){var F;this.AW.A9z((F=this.AF,F[1].call(F[0])));},Aax:function(G
){var F;this.AW.A9A((F=this.A0,F[1].call(F[0])));},AlO:function(G){A.pe([this,this.
AfZ],this);},FO:function(G){var F;if(!this.AM){var BR=this.AM;this.BC(A._GetAutoObject(
A.Device.Helper).ACR());if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Et(3);}else this.Et(this.RB);},AjG:function(){return this.
GB;},AjI:function(){return 99999999;},Ln:function(E){if(this.K_===E)return;this.
K_=E;if(this.L9===false)A.pe([this,this.Vd],this);A.abo([this,this.Sv,this.Ln],0
);},Sw:function(E){if(this.GB===E)return;this.GB=E;if(this.L9===false)A.pe([this
,this.Vd],this);A.abo([this,this.AbO,this.Sw],0);},Vd:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqm(this.K_),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pt,2,10))+A.abm(this.GB,8,10);var BR=this.AM;this.BC(A.ab0(aString
,0,10));if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},AfZ:function(G){var F;if((!this.If||!this.A0)||!this.AF)return;if(!(F=this.
If,F[1].call(F[0])))this.AW.AEK(true);else this.AW.AEK(false);},Ex:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L9===false)A.pe([this,this.
Vd],this);A.abo([this,this.PM,this.Ex],0);},Ahd:function(E){if(this.Pt===E)return;
this.Pt=E;if(this.L9===false)A.pe([this,this.Vd],this);A.abo([this,this.Ani,this.
Ahd],0);},BAU:function(G){var F;if(!!this.JF){var H9=(F=this.JF,F[1].call(F[0]));
var A02=0;switch(H9){case 0:case 1:A02=0;break;case 2:A02=1;break;default:A.ab5(
"%s%e",Ak5,H9);}this.Ex(A02);}if(!this.Pt)this.Et(4);else this.Et(5);},Sv:function(
){return this.K_;},AbO:function(){return this.GB;},PM:function(){return this.AnimalType;
},Ani:function(){return this.Pt;},_Init:function(aArg){C.Ei._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.AQO._Init.call(this.AW={I:this},0);C.AvF.
_Init.call(this.Yw={I:this},0);C.AvF._Init.call(this.Kj={I:this},0);C.Asr._Init.
call(this.E3={I:this},0);C.I1._Init.call(this.I1={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ARw;var B;this.RB=5;this.AW.H(
BqY);this.Yw.H(BqZ);this.Yw.E5(2);this.Kj.H(Bq0);this.Kj.E5(16);this.E3.H(Bad);this.
I1.H(Bae);this.J(this.AW,0);this.J(this.Yw,0);this.J(this.Kj,0);this.J(this.E3,0
);this.J(this.I1,0);this.C6.AEQ([this,this.Sv,this.Ln]);this.AW.As([this,this.AbO
,this.Sw]);this.Yw.As([this,this.PM,this.Ex]);this.Kj.As([this,this.Ani,this.Ahd
]);this.E3.CJ(this.C6);this.E3.As([B=this.C6,B.B$,B.Ca]);this.I1.A9R([B=A._GetAutoObject(
A.Device.Device),B.Av3,B.Ayx]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.C6._Done();this.AW._Done();this.Yw._Done();this.Kj._Done();this.E3._Done(
);this.I1._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.C6._ReInit(
);this.AW._ReInit();this.Yw._ReInit();this.Kj._ReInit();this.E3._ReInit();this.I1.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Ei._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ei={AM:0,Awc:null,OD:null,
Q:null,Ev:null,A0:null,AF:null,If:null,N:null,JF:null,Ff:null,E4:null,ACF:0,LQ:0
,A9:0,RB:0,Afd:true,Init:function(aArg){A.pe([this,this.LN],this);},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);if(!this.A9)this.Bb(null);},Bmf:function(E){if(this.
ACF===E)return;this.ACF=E;this.An();},Wo:function(E){if(this.LQ===E)return;this.
LQ=E;this.An();},DH:function(G){A.ab5("%s",Ak6);},MG:function(s){this.DH(s);},Et:
function(EK){A.pe([this,this.MG],this);A.pe(this.Awc,this);if(!EK)A.pe(this.OD,this
);},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],this);}
,C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,F[1].call(F[0])));},BC:function(
E){A.ab5("%s",Aoq);},Om:function(G){if(this.A9>1)this.Et(this.A9-1);},MU:function(
G){if((this.A9>0)&&(this.A9<this.RB))this.Et(this.A9+1);},Ug:function(E){if(A.aaZ(
this.Ev,E))return;if(!!this.Ev)A.z$([this,this.A0e],this.Ev,0);this.Ev=E;if(!!E)
A.zX([this,this.A0e],this.Ev,0);A.pe([this,this.A0e],this);},Ape:function(G){},A0e:
function(s){this.Ape(s);},PN:function(E){if(A.aaZ(this.A0,E))return;if(!!this.A0
)A.z$([this,this.A0i],this.A0,0);this.A0=E;if(!!E)A.zX([this,this.A0i],E,0);if(!
!E)A.pe([this,this.A0i],this);},QZ:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0k],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0k],E,0);if(
!!E)A.pe([this,this.A0k],this);},Aay:function(G){},A0k:function(s){this.Aay(s);}
,Aax:function(G){},A0i:function(s){this.Aax(s);},Ue:function(E){if(A.aaZ(this.If
,E))return;if(!!this.If)A.z$([this,this.A0h],this.If,0);this.If=E;if(!!E)A.zX([this
,this.A0h],E,0);if(!!E)A.pe([this,this.A0h],this);},AlO:function(G){},A0h:function(
s){this.AlO(s);},FO:function(G){A.ab5("%s",Baf);},BF1:function(s){this.FO(s);},G8:
function(G){this.Et(0);},AjG:function(){A.ab5("%s",Aoq);return 0;},AjI:function(
){A.ab5("%s",Aoq);return 0;},LN:function(G){},Ann:function(E){if(A.aaZ(this.JF,E
))return;if(!!this.JF)A.z$([this,this.AoQ],this.JF,0);this.JF=E;if(!!E)A.zX([this
,this.AoQ],this.JF,0);A.pe([this,this.AoQ],this);},AoQ:function(G){},AE3:function(
E){if(A.aa0(this.OD,E))return;this.OD=E;},AFx:function(E){if(this.Afd===E)return;
this.Afd=E;this.An();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.
BL._Init.call(this.Ff={I:this},0);A.Core.BL._Init.call(this.E4={I:this},0);this.
__proto__=C.Ei;this.H(AsO);this.ACF=A.jb.Text;this.LQ=A.jb.CU;this.Ff.Filter=6;this.
E4.Filter=7;this.Ff.BM=[this,this.Om];this.E4.BM=[this,this.MU];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.Ff._Done();this.E4._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Ff._ReInit(
);this.E4._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Awc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OD)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ev)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A0)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.If)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ff)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E4)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q7={AM:0,Dm:null,FC:
null,OD:null,Ev:null,A0:null,AF:null,If:null,Q:null,JF:null,AD9:-1,Afd:true,ANS:
false,ATH:false,Ar5:true,Init:function(aArg){A.pe([this,this.ABe],this);},Ai:function(
Ae){C.Ee.Ai.call(this,Ae);if(!this.Dm)return;if(this.Dm.A9>0){if(this.Hd){this.Dm.
Wo(A.jb.CI);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Dm.Wo(A.jb.
CU);this.Background.L(A.jb.CI);this.V.L(A.jb.Text);}}else{if(this.Hd)this.Dm.Wo(
A.jb.CI);else this.Dm.Wo(A.jb.CU);this.Dm.Bmf(this.V.AQ);}},IS:function(G){C.Ee.
IS.call(this,G);if(!this.Dm)return;if(!this.Dm.A9)this.FO(this);else this.G8(this
);},Gk:function(E){C.Ee.Gk.call(this,E);if(!!this.Dm)this.Dm.N=E;},Ug:function(E
){if(A.aaZ(this.Ev,E))return;if(!!this.Ev)A.z$([this,this.Ape],this.Ev,0);this.Ev=
E;if(!!E)A.zX([this,this.Ape],this.Ev,0);A.pe([this,this.Ape],this);},Ape:function(
G){if(!!this.Dm)this.Dm.Ug(this.Ev);},PN:function(E){if(A.aaZ(this.A0,E))return;
this.A0=E;if(!!this.Dm)this.Dm.PN(E);},QZ:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dm)this.Dm.QZ(E);},Ue:function(E){if(A.aaZ(this.If,E))return;
this.If=E;if(!!this.Dm)this.Dm.Ue(E);},BBq:function(G){var AAe=0;if(!!this.Dm){AAe=
this.Dm.A9;this.Dm.N=null;this.HL(this.Dm);}switch(this.AD9){case 0:this.Dm=A._NewObject(
C.AeH,0);break;case 1:this.Dm=A._NewObject(C.ARx,0);break;case 2:this.Dm=A._NewObject(
C.ARw,0);break;case 3:this.Dm=A._NewObject(C.ATJ,0);break;case 4:this.Dm=A._NewObject(
C.ATI,0);break;case 5:this.Dm=A._NewObject(C.ARy,0);break;default:throw new Error(
Bq1+this.AD9.toFixed());}this.J(this.Dm,0);this.Dm.Ann(this.JF);this.Dm.H(Bq2);this.
Dm.N=this.N;this.Dm.Ug(this.Ev);this.Dm.Awc=[this,this.Awc];this.Dm.As([this,this.
Ud,this.BC]);this.Dm.Ue(this.If);this.Dm.PN(this.A0);this.Dm.QZ(this.AF);this.Dm.
AE3(this.OD);this.Dm.AFx(this.Afd);if(AAe>0)this.Dm.Et(AAe);this.Bb(this.Dm);this.
An();},FO:function(G){var B;var F;if(!!this.Dm){if(!!this.N)this.FC.Ajr((F=this.
N,F[1].call(F[0])));else this.FC=A._NewObject(C.Aeg,0);this.Dm.FO(this);}},G8:function(
G){var B;if(!!this.Dm)this.Dm.G8(this);},AjG:function(){if(!this.Dm)return 0;return this.
Dm.AjG();},AjI:function(){if(!this.Dm)return 0;return this.Dm.AjI();},C3:function(
G){var F;if(!!this.Q){this.BC((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ud,this.
BC],0);}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C3
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3],
this);},BC:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABe],this);},BmT:function(
E){if(this.AD9===E)return;this.AD9=E;A.pe([this,this.BBq],this);},ArM:function(E
){if(this.Ar5===E)return;this.Ar5=E;A.pe([this,this.ABe],this);},ABe:function(G){
var App;if(this.Ar5){if(this.ANS)App=5;else App=0;}else if(this.ATH){if(A._GetAutoObject(
A.Device.Converter).ZO(this.AM)===10)App=4;else App=3;}else if(A._GetAutoObject(
A.Device.Converter).ZO(this.AM)===10)App=2;else App=1;this.BmT(App);},Awc:function(
G){var F;if((!!this.N&&!!this.Dm)&&!this.Dm.A9)this.FC.AkF((F=this.N,F[1].call(F[
0])));this.An();},Ann:function(E){if(A.aaZ(this.JF,E))return;if(!!this.JF)A.z$([
this,this.AoQ],this.JF,0);this.JF=E;if(!!E)A.zX([this,this.AoQ],this.JF,0);A.pe([
this,this.AoQ],this);},AoQ:function(G){if(!!this.Dm)this.Dm.Ann(this.JF);},A_h:function(
E){if(this.ATH===E)return;this.ATH=E;A.pe([this,this.ABe],this);},BlN:function(E
){if(this.ANS===E)return;this.ANS=E;A.pe([this,this.ABe],this);},AE3:function(E){
if(A.aa0(this.OD,E))return;this.OD=E;if(!!this.Dm)this.Dm.AE3(E);},AFx:function(
E){if(this.Afd===E)return;this.Afd=E;if(!!this.Dm)this.Dm.AFx(E);},Ud:function(){
return this.AM;},_Init:function(aArg){C.Ee._Init.call(this,aArg);this.__proto__=
C.Q7;this.H(UQ);this.V.R(AsW);this.V.L(A.jb.Bm);this.FC=A._NewObject(C.Aeg,0);this.
Init(aArg);},_Mark:function(D){var B;C.Ee._Mark.call(this,D);if((B=this.Dm)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FC)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ev)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A0)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.If
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQO={EP:null,FT:null,Em:null,Dv:null,CV:null
,Cs:null,FG:function(E){if(this.M4===E)return;C.Lf.FG.call(this,E);this.Cs.CY(E);
this.CV.CY(E);this.Dv.CY(E);this.Em.CY(E);this.FT.CY(E);this.EP.CY(E);},Yk:function(
Hv){var B6=null;switch(Hv){case-1:case 0:B6=this.FU;break;case 1:B6=this.Cs;break;
case 2:B6=this.CV;break;case 3:B6=this.Dv;break;case 4:B6=this.Em;break;case 5:B6=
this.FT;break;case 6:B6=this.EP;break;case 7:B6=this.GT;break;default:A.ab5("%s"
,AhR);}return B6;},_Init:function(aArg){C.Lf._Init.call(this,aArg);C.DB._Init.call(
this.EP={I:this},0);C.DB._Init.call(this.FT={I:this},0);C.DB._Init.call(this.Em={
I:this},0);C.DB._Init.call(this.Dv={I:this},0);C.DB._Init.call(this.CV={I:this},
0);C.DB._Init.call(this.Cs={I:this},0);this.__proto__=C.AQO;this.H(Bq3);this.GT.
H(AIn);this.EP.H(Ayq);this.FT.H(AZB);this.Em.H(AZC);this.Dv.H(AZD);this.CV.H(AZE
);this.Cs.H(AZF);this.FU.H(AZG);this.EI.H(Bac);this.J(this.EP,-2);this.J(this.FT
,-2);this.J(this.Em,-2);this.J(this.Dv,-2);this.J(this.CV,-2);this.J(this.Cs,-2);
this.EP.Dh=[this,this.GM];this.FT.Dh=[this,this.GM];this.Em.Dh=[this,this.GM];this.
Dv.Dh=[this,this.GM];this.CV.Dh=[this,this.GM];this.Cs.Dh=[this,this.GM];},_Done:
function(){this.__proto__=C.Lf;this.EP._Done();this.FT._Done();this.Em._Done();this.
Dv._Done();this.CV._Done();this.Cs._Done();C.Lf._Done.call(this);},_ReInit:function(
){C.Lf._ReInit.call(this);this.EP._ReInit();this.FT._ReInit();this.Em._ReInit();
this.Dv._ReInit();this.CV._ReInit();this.Cs._ReInit();},_Mark:function(D){var B;
C.Lf._Mark.call(this,D);if((B=this.EP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Em)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvF={Q:null,GT:null,FU:null,EI:null,Im:null,Il:null,M4:0,Un:0,AM:0,FW:99,Init:
function(aArg){A.pe([this,this.LN],this);},Ai:function(Ae){var B;A.Core.O.Ai.call(
this,Ae);this.EI.Z(false);this.EI.H(A.wC(this.Yk(0).M,this.Yk(-1).M));var Iw=((Ae&
0x40)===0x40);if(Iw){this.BfW(A.jb.AV);this.BfX(A.jb.Bm);}else{this.BfW(this.M4);
this.BfX(A.jb.Text);}this.Ama();},FG:function(E){if(this.M4===E)return;this.M4=E;
this.An();},LN:function(G){},Yk:function(Hv){var B6=null;switch(Hv){case-1:case 0:
B6=this.FU;break;case 1:B6=this.GT;break;default:A.ab5("%s",AhR);}return B6;},Km:
function(E){if(this.Un===E)return;this.Un=E;this.Ama();},Ama:function(){var B;var
F;if(!!this.Q){var DV=this.FU;var Adq=this.Un;var A7=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A7>0){DV.LY(A7%10);A7=(A7/10)|0;}else if(Adq>0)DV.LY(0);else DV.LY(-
1);DV=(C.E2.isPrototypeOf(B=this.Aqy(DV,0x11))?B:null);Adq=Adq-1;}}},Af2:function(
G){var F;var BR=this.AM;this.BC(this.AM+1);if(this.AM!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Af1:function(G){var F;var BR=this.
AM;this.BC(this.AM-1);if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C3:function(G){var F;if(!!this.Q)this.BC((F=this.Q,F[1].
call(F[0])));},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this,this.C3
],this);},BC:function(E){if(E<0)E=0;if(E>this.FW)E=this.FW;if(this.AM===E)return;
this.AM=E;this.An();},E5:function(E){if(this.FW===E)return;this.FW=E;this.An();}
,BfW:function(aColor){this.FU.CY(aColor);this.GT.CY(aColor);},BfX:function(aColor
){this.FU.AeQ(aColor);this.GT.AeQ(aColor);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.E2._Init.call(this.GT={I:this},0);C.E2._Init.call(this.FU={I:this
},0);A.acg.Cf._Init.call(this.EI={I:this},0);A.Core.BL._Init.call(this.Im={I:this
},0);A.Core.BL._Init.call(this.Il={I:this},0);this.__proto__=C.AvF;this.H(Bq4);this.
M4=A.jb.CI;this.GT.H(AIn);this.FU.H(Ayq);this.EI.H(Ayq);this.EI.Ne(2);this.EI.L(
A.jb.EW);this.Im.Filter=4;this.Il.Filter=5;this.J(this.GT,0);this.J(this.FU,0);this.
J(this.EI,0);this.Im.BM=[this,this.Af2];this.Im.DZ=[this,this.Af2];this.Il.BM=[this
,this.Af1];this.Il.DZ=[this,this.Af1];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.GT._Done();this.FU._Done();this.EI._Done();this.Im._Done();this.Il.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.GT._ReInit();this.FU._ReInit();this.EI._ReInit();this.Im._ReInit();this.Il.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.GT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Il)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.E2={Agu:
null,Background:null,Text:null,E2:-1,MZ:0,AmF:0,Aqf:false,Ai:function(Ae){A.Core.
O.Ai.call(this,Ae);if(this.E2<0)this.Text.R(Rj);else this.Text.R(this.E2.toFixed(
));this.Background.L(this.MZ);this.Text.L(this.AmF);},LY:function(E){if(this.E2===
E)return;var B6=E;if((B6<0)||(B6>9))B6=-1;this.E2=B6;this.An();},CY:function(E){
if(this.MZ===E)return;this.MZ=E;this.An();},AeN:function(E){if(this.Aqf===E)return;
this.Aqf=E;this.Agu.Ar(E);if(E===false)this.Text.Z(true);},AeQ:function(E){if(this.
AmF===E)return;this.AmF=E;this.An();},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acl.TC._Init.call(this.Agu={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.E2;var B;
this.H(As6);this.MZ=A.jb.CI;this.Agu.Fj(750);this.Agu.Uh(750);this.Agu.Akq(750);
this.AmF=A.jb.Text;this.Background.A3(0x3);this.Background.H(As6);this.Text.A3(0x3
);this.Text.H(As6);this.Text.R(Rj);this.J(this.Background,0);this.J(this.Text,0);
this.Agu.Q=[B=this.Text,B.Fi,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.O;this.Agu._Done();this.Background._Done();this.Text._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Agu._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Agu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Ft={Y:null,IX:null,AN0:A.jV,ARM:A.jV,S_:0,AJt:0,A1I:false,A1d:false,Init:function(
aArg){},CB:function(G){var B;C.AB.CB.call(this,G);A.zX([this,this.AA$],[B=A._GetAutoObject(
A.Device.Device).Ao,B.Fh,B.Fl],0);A.zX([this,this.MG],[B=A._GetAutoObject(A.Device.
Device).Ao,B.Fh,B.Fl],0);A.pe([this,this.AA$],this);A.pe([this,this.MG],this);},
EY:function(G){var B;C.AB.EY.call(this,G);A.z$([this,this.AA$],[B=A._GetAutoObject(
A.Device.Device).Ao,B.Fh,B.Fl],0);},Bxy:function(L6){A._GetAutoObject(A.Device.Helper
).HJ(L6);this.ApX(A._GetAutoObject(A.Device.Device).Bv,A._GetAutoObject(A.Device.
Helper).W.Id);},ApX:function(L1,AcN){A.ab5("%s",Ak6);},U_:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===9))A.aaS([
this,this.Byw],this);else if(!!At&&(At.PopupState===5)){this.A1d=true;this.Es(this
);}},Byw:function(G){if(this.S_>0){this.A1d=false;this.Ade(this);this.A_H(0);}},
Ail:function(G){if((this.AJt+1)<this.S_)this.A_H(this.AJt+1);else A.aaS([this,this.
Bv8],this);},Bv9:function(s){this.Ail(s);},A_H:function(E){this.AJt=E;if(this.A1d===
false){this.Bxy(E);A.aaS([this,this.Bv9],this);var XA=(this.AJt/this.S_)*100;A._GetAutoObject(
A.Device.Device).A_(49,true,A.abk(XA,0,0),0,[this,this.U_]);}},Aai:function(G){A.
_GetAutoObject(A.Device.Device).A_(49,false,Bq5,0,[this,this.U_]);this.A1I=true;
A.pe([this,this.AK6],this);},Bv8:function(s){this.Aai(s);},Ade:function(G){this.
IX.Z(true);this.A1I=false;this.AK6(this);},BFW:function(s){this.Ade(s);},AAt:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6D();A._GetAutoObject(A.Device.Device
).Ao.Bl(Be);},Es:function(G){A._GetAutoObject(C.A1).Fs();},A3h:function(G){A._GetAutoObject(
C.A1).BU(95);},DH:function(G){this.N.Z(true);this.N.CZ(A.aaL(A.ach.EX));this.N.CA=[
this,this.Es];this.N.Cq(A.aaL(A.ach.ADq));if(!A._GetAutoObject(A.Device.Device).
Ao.Filter||A._GetAutoObject(A.Device.Helper).Aq0(A._GetAutoObject(A.Device.Device
).Ao.Filter)){this.N.Ck=null;this.N.I0.Do(100);}else{this.N.Ck=[this,this.AAt];this.
N.I0.Do(255);}this.N.C5(A.aaL(A.ach.Aeo));this.N.Cg=[this,this.A3h];},MG:function(
s){this.DH(s);},AA$:function(G){this.S_=A._GetAutoObject(A.Device.Device).Ao.Cd(
);if(this.S_>0)A._GetAutoObject(A.Device.Device).A_(49,true,US,0,[this,this.U_]);
else{this.Ade(this);this.Aai(this);}},Ako:function(E){if(this.AN0===E)return;this.
AN0=E;A.pe([this,this.AK6],this);},AK6:function(G){var B;if(this.A1I===false){this.
IX.R(A.jV);return;}var Ao3;if(!A._GetAutoObject(A.Device.Device).Ao.Cd()){var Ac_=
A._GetAutoObject(A.Device.Device).Ao.Filter;A.z$([this,this.AA$],[B=A._GetAutoObject(
A.Device.Device).Ao,B.Fh,B.Fl],0);this.AAt(this);if(!A._GetAutoObject(A.Device.Device
).Ao.QC()||!Ac_)Ao3=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACN(A._GetAutoObject(A.Device.Device).Ao.Filter)===1)Ao3=A.aaR(
A.acf.ANU);else Ao3=A.aaR(A.acf.ANT);A._GetAutoObject(A.Device.Device).Ao.Bl(Ac_
);A.zX([this,this.AA$],[B=A._GetAutoObject(A.Device.Device).Ao,B.Fh,B.Fl],0);}else
Ao3=this.ARM;Ao3=Ao3+(AZI+this.AN0);this.IX.R(Ao3);},AeY:function(E){if(this.ARM===
E)return;this.ARM=E;A.pe([this,this.AK6],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkG._Init.call(this.IX={
I:this},0);this.__proto__=C.Ft;this.Dn(C.Abj);this.Y.H(E8);this.Y.JN(1);this.IX.
H(E8);this.J(this.Y,0);this.J(this.IX,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.IX._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.IX._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7b={Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A7b;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvH={KZ:null,MS:null,AY:0,Ya:function(){this.KZ=null;this.MS=null;this.AY=0;
},Os:function(A7){var G$;G$=A._NewObject(C.A7b,0);G$.A5=A7;if(!this.KZ){this.KZ=
G$;this.MS=G$;this.AY=1;}else{this.MS.Ah=G$;this.MS=G$;this.AY=this.AY+1;}},AmN:
function(){var B;var RE=0;var Of=this.KZ;while(!!Of){RE+=Of.A5;Of=Of.Ah;}return RE;
},AjH:function(){if(!this.AY)return 0;return this.AmN()/this.AY;},AqI:function(){
var B;if(!this.AY)return 0;var A08=this.AjH();var Ac7=0;var Of=this.KZ;while(!!Of
){Ac7+=Math.pow(Of.A5-A08,2);Of=Of.Ah;}Ac7/=this.AY;Ac7=Math.sqrt(Ac7);return Ac7;
},_Init:function(aArg){this.__proto__=C.AvH;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AN1={FY:null,Aek:null,Yh:null,DQ:null,IX:null,
CS:function(){this.A4g(this);},Init:function(aArg){A.zV([this,this.A4g],A._GetAutoObject(
A.Device.Device).Pl,0);A.pe([this,this.A4g],this);},Es:function(G){A._GetAutoObject(
C.A1).Fs();},A4g:function(G){this.Yh.Ce(-1);this.IX.Z(!this.FY.AX.Cd());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.FY._Init.call(this.FY={I:this},0);C.
Aek._Init.call(this.Aek={I:this},0);C.Yh._Init.call(this.Yh={I:this},0);A.acg.DQ.
_Init.call(this.DQ={I:this},0);C.AkG._Init.call(this.IX={I:this},0);this.__proto__=
C.AN1;this.N.Z(true);this.Dn(C.AOZ);this.FY.H(AsY);this.FY.NX(C.AmE);this.Aek.H(
IN);this.Yh.H(AsP);this.DQ.DE(Bq6);this.DQ.DR(Bq7);this.DQ.Ne(3);this.DQ.L(A.jb.
Text);this.IX.H(Aoc);this.IX.R((A.aaR(A.acf.A7X)+AZI)+A.aaR(A.acf.A6f));this.J(this.
FY,0);this.J(this.Aek,0);this.J(this.Yh,0);this.J(this.DQ,0);this.J(this.IX,0);this.
N.CA=[this,this.Es];this.N.CZ(A.aaL(A.ach.EX));this.FY.Zi(A._GetAutoObject(A.Device.
Device).Pl);this.Yh.Zi(A._GetAutoObject(A.Device.Device).Pl);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.FY._Done();this.Aek._Done();this.Yh._Done();
this.DQ._Done();this.IX._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.FY._ReInit();this.Aek._ReInit();this.Yh._ReInit();this.DQ.
_ReInit();this.IX._ReInit();this.IX.R((A.aaR(A.acf.A7X)+AZI)+A.aaR(A.acf.A6f));this.
CS();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.FY)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yh).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AN4={AtZ:null,AtY:null,At1:null,At0:null,At3:null,At2:null,At5:null,At4:null
,AaA:null,Yp:null,Aba:null,Aa$:null,RatedAttribute:0,Init:function(aArg){this.Sy(
2);},Dz:function(G){var D2=(A.Core.BL.isPrototypeOf(G)?G:null);switch(D2.CN){case
6:switch(this.RatedAttribute){case 2:this.Sy(3);break;case 1:this.Sy(2);break;case
4:this.Sy(1);break;case 3:this.Sy(4);break;default:this.Sy(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.Sy(1);break;case 1:this.Sy(4);break;case 4:this.
Sy(3);break;case 3:this.Sy(2);break;default:this.Sy(0);}break;default:D2.NE=true;
}},ApX:function(L1,AcN){if(!L1)return;var Fq=A._NewObject(A.Device.Filter,0);var
HT=A._NewObject(A.Device.Int32FilterCriterion,0);HT.Initialize(1,0,AcN,true);Fq.
CW(HT);var AAL=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAL.Initialize(
3,5,0,true);Fq.CW(AAL);L1.Bl(Fq);},Ail:function(G){var ApV=0;var A3A=A._GetAutoObject(
A.Device.Device).Bv.Cd();var B1=A._NewObject(A.Device.Rating,0);while(ApV<A3A){B1.
EH(ApV,A._GetAutoObject(A.Device.Device).Bv);this.Bdg(B1,0);var BBL=A._GetAutoObject(
A.Device.Helper).ZF(2);this.Bdg(B1,BBL);ApV++;}C.Ft.Ail.call(this,G);},Aai:function(
G){A.pe([this,this.BcV],this);C.Ft.Aai.call(this,G);},Ade:function(G){this.AtZ=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.AtY=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At0=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At1=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.At2=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.At3=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At4=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.At5=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Ft.Ade.
call(this,G);},DH:function(G){C.Ft.DH.call(this,G);this.N.OL(true);this.N.OM(true
);},Bdg:function(D0,BbS){if(!D0||(D0.Timestamp<BbS))return;if(!BbS){this.AtZ.Set(
D0.Appearance,this.AtZ.Get(D0.Appearance)+1);this.At1.Set(D0.Faeces,this.At1.Get(
D0.Faeces)+1);this.At3.Set(D0.Feed,this.At3.Get(D0.Feed)+1);this.At5.Set(D0.Respiratory
,this.At5.Get(D0.Respiratory)+1);}else{this.AtY.Set(D0.Appearance,this.AtY.Get(D0.
Appearance)+1);this.At0.Set(D0.Faeces,this.At0.Get(D0.Faeces)+1);this.At2.Set(D0.
Feed,this.At2.Get(D0.Feed)+1);this.At4.Set(D0.Respiratory,this.At4.Get(D0.Respiratory
)+1);}},Sy:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yp.Kp(this.AaA.Ls(E));A.pe([this,this.BcV],this);},BcV:function(G){var AaB=null;
var AaC=null;switch(this.RatedAttribute){case 2:{AaB=this.AtY;AaC=this.AtZ;}break;
case 4:{AaB=this.At0;AaC=this.At1;}break;case 1:{AaB=this.At2;AaC=this.At3;}break;
case 0:{AaB=A._NewObject(A.Device.Int32ArrayWrapper,0);AaC=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaB=this.At4;AaC=this.At5;}break;default:throw new
Error(Bq8+this.RatedAttribute.toFixed());}var AGa=A._NewObject(A.acv.AT2,0);AGa.
Os(AaB.Get(3),A.jb.EW);AGa.Os(AaB.Get(2),A.jb.H4);AGa.Os(AaB.Get(1),A.jb.Gb);var
AGb=A._NewObject(A.acv.AT2,0);AGb.Os(AaC.Get(3),A.jb.EW);AGb.Os(AaC.Get(2),A.jb.
H4);AGb.Os(AaC.Get(1),A.jb.Gb);this.Aa$.Ab0(AGa);this.Aba.Ab0(AGb);var A33=AaB.AmN(
)-AaB.Get(5);var Bfs=0;var Bfq=0;if(A33>0){Bfs=(AaB.Get(2)/A33)*100;Bfq=(AaB.Get(
1)/A33)*100;}var AKU=AaC.AmN()-AaC.Get(5);this.IX.Z(!AKU);var Bft=0;var Bfr=0;if(
AKU>0){Bft=(AaC.Get(2)/AKU)*100;Bfr=(AaC.Get(1)/AKU)*100;}this.Aa$.A_F(A.abk(Bfs
,0,0)+Afu);this.Aa$.A_j(A.abk(Bfq,0,0)+Afu);this.Aba.A_F(A.abk(Bft,0,0)+Afu);this.
Aba.A_j(A.abk(Bfr,0,0)+Afu);},_Init:function(aArg){C.Ft._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaA={I:this},0);C.NB._Init.call(this.
Yp={I:this},0);C.ACv._Init.call(this.Aba={I:this},0);C.ACv._Init.call(this.Aa$={
I:this},0);this.__proto__=C.AN4;this.Dn(C.AO0);this.Ako(A.aaR(A.acf.A6g));this.AeY(
A.aaR(A.acf.Ane));this.Yp.H(IN);this.Yp.Aj(true);this.Yp.T(A.aaR(A.acf.Axd)+A.aaR(
A.acf.Colon));this.Yp.Bj(false);this.Yp.BmR(false);this.Aba.H(Bq9);this.Aba.T(A.
aaR(A.acf.AFX));this.Aa$.H(Bq_);this.Aa$.T(A.aaR(A.acf.A7k));this.IX.H(Aoc);this.
J(this.Yp,-1);this.J(this.Aba,-1);this.J(this.Aa$,-1);this.AtZ=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.AtY=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At1=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.At0=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.At3=A._NewObject(A.Device.Int32ArrayWrapper,0);this.At2=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.At5=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.At4=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ft;this.AaA._Done();this.Yp._Done();this.Aba._Done();this.Aa$.
_Done();C.Ft._Done.call(this);},_ReInit:function(){C.Ft._ReInit.call(this);this.
AaA._ReInit();this.Yp._ReInit();this.Aba._ReInit();this.Aa$._ReInit();this.Ako(A.
aaR(A.acf.A6g));this.AeY(A.aaR(A.acf.Ane));this.Yp.T(A.aaR(A.acf.Axd)+A.aaR(A.acf.
Colon));this.Aba.T(A.aaR(A.acf.AFX));this.Aa$.T(A.aaR(A.acf.A7k));},_Mark:function(
D){var B;C.Ft._Mark.call(this,D);if((B=this.AtZ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AtY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.At0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.At3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.At2)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.At5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
At4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aba)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AN5={Aej:null,UH:null,UI:null,Aei:null,UE:null,UF:null,AJv:0,AJu:0,AI$:0,AI_:
0,Ac9:false,CS:function(){this.Aai(this);},ApX:function(L1,AcN){if(!L1)return;var
Fq=A._NewObject(A.Device.Filter,0);var HT=A._NewObject(A.Device.Int32FilterCriterion
,0);HT.Initialize(1,0,AcN,true);Fq.CW(HT);var AA3=A._NewObject(A.Device.Int32FilterCriterion
,0);AA3.Initialize(7,2,0,true);Fq.CW(AA3);L1.Bl(Fq);},Ail:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJv++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJu++;var ApV=0;var A3A=A._GetAutoObject(
A.Device.Device).Bv.Cd();var AtX;var ABk=0;while(ApV<A3A){this.Ac9=true;AtX=A._GetAutoObject(
A.Device.Device).Bv.IY(ApV,9);if(AtX===1)ABk=1;else if((AtX===2)&&(ABk!==1))ABk=
2;ApV++;}if(ABk===1)this.AI_++;else if(ABk===2)this.AI$++;C.Ft.Ail.call(this,G);
},Aai:function(G){var Bfo=0;var Bfp=0;if(this.S_>0){Bfo=(this.AJv/this.S_)*100;Bfp=(
this.AJu/this.S_)*100;}this.UH.Kp(((((((A.abk(Bfo,0,0)+AIo)+this.AJv.toFixed())+
CO)+A.aaR(A.acf.AEd))+CO)+this.S_.toFixed())+O3);this.UI.Kp(((((((A.abk(Bfp,0,0)+
AIo)+this.AJu.toFixed())+CO)+A.aaR(A.acf.AEd))+CO)+this.S_.toFixed())+O3);var Bfm=
0;var Bfn=0;if(this.S_>0){Bfm=(this.AI$/this.S_)*100;Bfn=(this.AI_/this.S_)*100;
}this.UE.Kp(((((((A.abk(Bfm,0,0)+AIo)+this.AI$.toFixed())+CO)+A.aaR(A.acf.AEd))+
CO)+this.S_.toFixed())+O3);this.UF.Kp(((((((A.abk(Bfn,0,0)+AIo)+this.AI_.toFixed(
))+CO)+A.aaR(A.acf.AEd))+CO)+this.S_.toFixed())+O3);this.IX.Z(!this.Ac9);C.Ft.Aai.
call(this,G);},Ade:function(G){this.AI_=0;this.AI$=0;this.AJu=0;this.AJv=0;this.
Ac9=false;C.Ft.Ade.call(this,G);},_Init:function(aArg){C.Ft._Init.call(this,aArg
);C.Agk._Init.call(this.Aej={I:this},0);C.Aji._Init.call(this.UH={I:this},0);C.Aji.
_Init.call(this.UI={I:this},0);C.Agk._Init.call(this.Aei={I:this},0);C.Aji._Init.
call(this.UE={I:this},0);C.Aji._Init.call(this.UF={I:this},0);this.__proto__=C.AN5;
this.Dn(C.AO1);this.Ako(A.aaR(A.acf.A6h));this.AeY(A.aaR(A.acf.Ard));this.Aej.H(
IN);this.Aej.Aj(true);this.Aej.T(A.aaR(A.acf.A6l));this.Aej.Bj(false);this.UH.H(
P5);this.UH.Aj(true);this.UH.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UH.
Bj(true);this.UH.Akt(2);this.UI.H(Z7);this.UI.Aj(true);this.UI.T(A.aaR(A.acf.Avl
)+A.aaR(A.acf.Colon));this.UI.Bj(true);this.UI.Akt(1);this.Aei.H(Ak7);this.Aei.Aj(
true);this.Aei.T(A.aaR(A.acf.A6m));this.Aei.Bj(false);this.UE.H(Aoh);this.UE.Aj(
true);this.UE.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UE.Bj(true);this.
UE.Akt(2);this.UF.H(AsP);this.UF.Aj(true);this.UF.T(A.aaR(A.acf.Avl)+A.aaR(A.acf.
Colon));this.UF.Bj(true);this.UF.Akt(1);this.J(this.Aej,0);this.J(this.UH,0);this.
J(this.UI,0);this.J(this.Aei,0);this.J(this.UE,0);this.J(this.UF,0);this.UH.S(A.
aaL(A.fl.Ak));this.UI.S(A.aaL(A.fl.Ak));this.UE.S(A.aaL(A.fl.Ak));this.UF.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Ft;this.Aej._Done();this.UH._Done(
);this.UI._Done();this.Aei._Done();this.UE._Done();this.UF._Done();C.Ft._Done.call(
this);},_ReInit:function(){C.Ft._ReInit.call(this);this.Aej._ReInit();this.UH._ReInit(
);this.UI._ReInit();this.Aei._ReInit();this.UE._ReInit();this.UF._ReInit();this.
Ako(A.aaR(A.acf.A6h));this.AeY(A.aaR(A.acf.Ard));this.Aej.T(A.aaR(A.acf.A6l));this.
UH.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UI.T(A.aaR(A.acf.Avl)+A.aaR(
A.acf.Colon));this.Aei.T(A.aaR(A.acf.A6m));this.UE.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UF.T(A.aaR(A.acf.Avl)+A.aaR(A.acf.Colon));this.UH.S(A.aaL(A.fl.
Ak));this.UI.S(A.aaL(A.fl.Ak));this.UE.S(A.aaL(A.fl.Ak));this.UF.S(A.aaL(A.fl.Ak
));this.CS();},_Mark:function(D){var B;C.Ft._Mark.call(this,D);if((B=this.Aej)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UF)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.Aqx={K7:null
,Ai8:null,Ai9:null,Amb:null,Abn:null,WQ:null,Abk:null,SV:null,Abl:null,SW:null,Abo:
null,WR:null,Ay:null,Ac4:0,AAf:0,Apk:0,A2j:0,BdM:0,CS:function(){this.Aai(this);
},Dz:function(G){switch(this.Cp.CN){case 4:{if(this.IX.Fi())return;var Qq=this.Y.
Bt[1]+80;this.Y.FX([this.Y.Bt[0],Qq]);this.Y.Vm(null,null);}break;case 5:{if(this.
IX.Fi())return;var Qq=this.Y.Bt[1]-80;this.Y.FX([this.Y.Bt[0],Qq]);this.Y.Vm(null
,null);}break;default:C.Ft.Dz.call(this,G);}},ApX:function(L1,AcN){if(!L1)return;
var Fq=A._NewObject(A.Device.Filter,0);var HT=A._NewObject(A.Device.Int32FilterCriterion
,0);HT.Initialize(1,0,AcN,true);Fq.CW(HT);var Ac0=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac0.Initialize(8,2,0,true);Fq.CW(Ac0);L1.Bl(Fq);},Ail:function(G){if(this.BdC(
)){this.K7.Os(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Aq1()){var Qc=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qc>0){var A1U=A._GetAutoObject(A.acj.DU).Aln(Qc,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ai8.
Os(A1U);}}var A2C=A._GetAutoObject(A.Device.Device).Bv.Cd()-2;if(A2C>=0){var BzD=
A._GetAutoObject(A.Device.Device).Bv.ACO(A2C,8);var BzC=A._GetAutoObject(A.Device.
Device).Bv.HD(A2C,6);var Qc=A._GetAutoObject(A.Device.Helper).MN(BzC,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qc>0){var A1U=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BzD)/Qc)|0;this.Ai9.Os(A1U);}}if((A._GetAutoObject(
A.Device.Helper).W.Aq1()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RI()<=180)){var ALf=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tj=A._GetAutoObject(A.Device.
Helper).MN(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BAQ=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALf/Tj);this.Amb.Os(BAQ);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Ac4++;this.Apk=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZF(7)){this.AAf++;this.A2j=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BdM=A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Ds());}}C.Ft.Ail.call(
this,G);},Aai:function(G){var A4p=this.Ai8.AjH()|0;var A4r=this.Ai9.AjH()|0;if(this.
Ac4>1)A._GetAutoObject(A.Device.Device).A_(56,true,this.Ac4.toFixed(),0,null);if(
this.Ac4===1)A._GetAutoObject(A.Device.Device).A_(53,true,this.Apk.toFixed(),0,null
);if(this.AAf>1)A._GetAutoObject(A.Device.Device).A_(52,true,this.AAf.toFixed(),
0,null);if(this.AAf===1)A._GetAutoObject(A.Device.Device).A_(57,true,(this.A2j.toFixed(
)+AsV)+this.BdM.toFixed(),0,null);if(this.K7.AY>0)this.WQ.T(((((((A._GetAutoObject(
A.Device.Converter).AxN(this.K7.AjH()|0,1)+Ayr)+A._GetAutoObject(A.Device.Converter
).AxN(this.K7.AqI()|0,1))+CO)+A._GetAutoObject(A.acj.DU).AfR())+Ays)+this.K7.AY.
toFixed())+O3);else this.WQ.T(A.aaR(A.acf.Unknown));if(this.Ai8.AY>0)this.SV.T(((((((
A._GetAutoObject(A.Device.Converter).S0(A4p,2,true)+Ayr)+A._GetAutoObject(A.Device.
Converter).S0(this.Ai8.AqI()|0,2,true))+CO)+A._GetAutoObject(A.acj.DU).Aan())+Ays
)+this.Ai8.AY.toFixed())+O3);else this.SV.T(A.aaR(A.acf.Unknown));if(this.Ai9.AY>
0)this.SW.T(((((((A._GetAutoObject(A.Device.Converter).S0(A4r,2,true)+Ayr)+A._GetAutoObject(
A.Device.Converter).S0(this.Ai9.AqI()|0,2,true))+CO)+A._GetAutoObject(A.acj.DU).
Aan())+Ays)+this.Ai9.AY.toFixed())+O3);else this.SW.T(A.aaR(A.acf.Unknown));if(this.
Amb.AY>0)this.WR.T(((((((A.abk(this.Amb.AjH(),0,1)+Ayr)+A.abk(this.Amb.AqI(),0,1
))+CO)+A.aaR(A.acf.BhI))+Ays)+this.Amb.AY.toFixed())+O3);else this.WR.T(A.aaR(A.
acf.Unknown));var A4q=0;var A4s=0;var Ac9=false;if(this.K7.AY>0)Ac9=true;var H9=
0;if(!!A._GetAutoObject(A.Device.Device).Ao.Filter){var AJO=A._GetAutoObject(A.Device.
Device).Ao.Filter.DN(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJO)?AJO:null))H9=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJO)?AJO:null
).A5;}if(this.Ai8.AY>0){Ac9=true;A4q=A._GetAutoObject(A.Device.Converter).A$W(A4p
,H9);}if(this.Ai9.AY>0){Ac9=true;A4s=A._GetAutoObject(A.Device.Converter).A$W(A4r
,H9);}this.SV.Akt(A4q);this.SW.Akt(A4s);this.IX.Z(!Ac9);C.Ft.Aai.call(this,G);},
Ade:function(G){this.K7.Ya();this.Ai8.Ya();this.Ai9.Ya();this.Amb.Ya();this.Ac4=
0;this.AAf=0;this.Apk=0;this.A2j=0;C.Ft.Ade.call(this,G);},Fb:function(G){var B;
this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Bt[1]);},BdC:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.Ft._Init.call(this,aArg);C.Agk._Init.call(this.Abn={I:
this},0);C.IA._Init.call(this.WQ={I:this},0);C.Agk._Init.call(this.Abk={I:this},
0);C.Aji._Init.call(this.SV={I:this},0);C.Agk._Init.call(this.Abl={I:this},0);C.
Aji._Init.call(this.SW={I:this},0);C.Agk._Init.call(this.Abo={I:this},0);C.IA._Init.
call(this.WR={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Aqx;
this.Dn(C.Avk);this.Ako(A.aaR(A.acf.A6i));this.AeY(A.aaR(A.acf.Akb));this.Abn.H(
As3);this.Abn.Aj(true);this.Abn.T(A.aaR(A.acf.A4Z));this.Abn.Bj(false);this.Abn.
Km(5);this.WQ.H(AZJ);this.WQ.Aj(true);this.WQ.T(A.jV);this.WQ.Bj(true);this.Abk.
H(AsZ);this.Abk.Aj(true);this.Abk.T(A.aaR(A.acf.ALE));this.Abk.Bj(false);this.Abk.
Km(5);this.SV.H(As0);this.SV.Aj(true);this.SV.T(A.jV);this.SV.Bj(true);this.SV.Kp(
A.jV);this.Abl.H(As1);this.Abl.Aj(true);this.Abl.T(A.aaR(A.acf.Aum));this.Abl.Bj(
false);this.Abl.Km(5);this.SW.H(Bq$);this.SW.Aj(true);this.SW.T(A.jV);this.SW.Bj(
true);this.SW.Kp(A.jV);this.Abo.H(AZK);this.Abo.Aj(true);this.Abo.T(A.aaR(A.acf.
A5h));this.Abo.Bj(false);this.Abo.Km(5);this.WR.H(Aop);this.WR.Aj(true);this.WR.
T(A.jV);this.WR.Bj(true);this.Ay.H(Ip);this.J(this.Abn,-1);this.J(this.WQ,-1);this.
J(this.Abk,-1);this.J(this.SV,-1);this.J(this.Abl,-1);this.J(this.SW,-1);this.J(
this.Abo,-1);this.J(this.WR,-1);this.J(this.Ay,-1);this.Y.Ej=[this,this.Fb];this.
K7=A._NewObject(C.AvH,0);this.Ai8=A._NewObject(C.AvH,0);this.Ai9=A._NewObject(C.
AvH,0);this.WQ.S(A.aaL(A.fl.Af));this.SV.S(A.aaL(A.fl.Ak));this.SW.S(A.aaL(A.fl.
Ak));this.WR.S(A.aaL(A.fl.Ak));this.Amb=A._NewObject(C.A6s,0);},_Done:function(){
this.__proto__=C.Ft;this.Abn._Done();this.WQ._Done();this.Abk._Done();this.SV._Done(
);this.Abl._Done();this.SW._Done();this.Abo._Done();this.WR._Done();this.Ay._Done(
);C.Ft._Done.call(this);},_ReInit:function(){C.Ft._ReInit.call(this);this.Abn._ReInit(
);this.WQ._ReInit();this.Abk._ReInit();this.SV._ReInit();this.Abl._ReInit();this.
SW._ReInit();this.Abo._ReInit();this.WR._ReInit();this.Ay._ReInit();this.Ako(A.aaR(
A.acf.A6i));this.AeY(A.aaR(A.acf.Akb));this.Abn.T(A.aaR(A.acf.A4Z));this.Abk.T(A.
aaR(A.acf.ALE));this.Abl.T(A.aaR(A.acf.Aum));this.Abo.T(A.aaR(A.acf.A5h));this.WQ.
S(A.aaL(A.fl.Af));this.SV.S(A.aaL(A.fl.Ak));this.SW.S(A.aaL(A.fl.Ak));this.WR.S(
A.aaL(A.fl.Ak));this.CS();},_Mark:function(D){var B;C.Ft._Mark.call(this,D);if((
B=this.K7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ai8)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amb)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abo)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abj={_Init:function(aArg){C.AjK._Init.call(this,aArg);this.__proto__=C.Abj;this.
Dc.Aw(A.aaL(A.ach.ADm));},_className:"Application::HeaderEvaluationFilter"};C.Ki={
CS:function(){this.Text.R(A.aaR(A.acf.None));},D3:function(G){C.AjK.D3.call(this
,G);this.Dc.Aw(A._GetAutoObject(A.Device.Converter).AdM(A._GetAutoObject(A.Device.
Device).JE));},_Init:function(aArg){C.AjK._Init.call(this,aArg);this.__proto__=C.
Ki;},_ReInit:function(){C.AjK._ReInit.call(this);this.CS();},_className:"Application::HeaderListFilter"
};C.Avk={Init:function(aArg){this.Dc.Aw(A._GetAutoObject(A.acj.DU).Bc$());},_Init:
function(aArg){C.Abj._Init.call(this,aArg);this.__proto__=C.Avk;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AO1={Init:function(
aArg){this.Dc.Aw(A.aaL(A.ach.Abs));},_Init:function(aArg){C.Abj._Init.call(this,
aArg);this.__proto__=C.AO1;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AO0={Init:function(aArg){this.Dc.Aw(A.aaL(A.ach.AmT));},_Init:function(aArg){
C.Abj._Init.call(this,aArg);this.__proto__=C.AO0;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AOZ={Sf:null,Dc:null,AP:null,CS:function(){this.Sf.R(A.aaR(A.acf.AMY));},Dd:
function(E){C.BS.Dd.call(this,E);this.Sf.L(E);this.Dc.L(E);},_Init:function(aArg
){C.BS._Init.call(this,aArg);C.CG._Init.call(this.Sf={I:this},0);A.acg.Am._Init.
call(this.Dc={I:this},0);A.acg.DQ._Init.call(this.AP={I:this},0);this.__proto__=
C.AOZ;this.Sf.H(Bra);this.Sf.R(A.aaR(A.acf.AMY));this.Sf.A8(0x11);this.Dc.H(Brb);
this.AP.DE(Brc);this.AP.DR(Brd);this.AP.L(A.jb.Bc);this.J(this.Sf,0);this.J(this.
Dc,0);this.J(this.AP,0);this.Sf.S(A.aaL(A.fl.Af));this.Sf.A2(A.aaL(A.fl.Ak));this.
Dc.Aw(A.aaL(A.ach.AP8));},_Done:function(){this.__proto__=C.BS;this.Sf._Done();this.
Dc._Done();this.AP._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.
call(this);this.Sf._ReInit();this.Dc._ReInit();this.AP._ReInit();this.Sf.R(A.aaR(
A.acf.AMY));this.Sf.S(A.aaL(A.fl.Af));this.Sf.A2(A.aaL(A.fl.Ak));this.CS();},_Mark:
function(D){var B;C.BS._Mark.call(this,D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aek={TQ:null,AjS:
null,AjQ:null,AjR:null,_Init:function(aArg){C.Ew._Init.call(this,aArg);C.CG._Init.
call(this.TQ={I:this},0);A.acg.Am._Init.call(this.AjS={I:this},0);A.acg.Am._Init.
call(this.AjQ={I:this},0);A.acg.Am._Init.call(this.AjR={I:this},0);this.__proto__=
C.Aek;this.TQ.H(Bre);this.TQ.R(A.aaR(A.acf.Year));this.TQ.A8(0x11);this.TQ.L(A.jb.
Text);this.AjS.H(Bag);this.AjS.L(A.jb.Text);this.AjQ.H(Brf);this.AjQ.L(A.jb.Text
);this.AjR.H(Brg);this.AjR.L(A.jb.Text);this.J(this.TQ,0);this.J(this.AjS,0);this.
J(this.AjQ,0);this.J(this.AjR,0);this.TQ.S(A.aaL(A.fl.Kh));this.TQ.A2(A.aaL(A.fl.
Ih));this.AjS.Aw(A.aaL(A.ach.AQh));this.AjQ.Aw(A.aaL(A.ach.AQg));this.AjR.Aw(A.aaL(
A.ach.AQo));},_Done:function(){this.__proto__=C.Ew;this.TQ._Done();this.AjS._Done(
);this.AjQ._Done();this.AjR._Done();C.Ew._Done.call(this);},_ReInit:function(){C.
Ew._ReInit.call(this);this.TQ._ReInit();this.AjS._ReInit();this.AjQ._ReInit();this.
AjR._ReInit();this.TQ.R(A.aaR(A.acf.Year));this.TQ.S(A.aaL(A.fl.Kh));this.TQ.A2(
A.aaL(A.fl.Ih));},_Mark:function(D){var B;C.Ew._Mark.call(this,D);if((B=this.TQ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AjS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjR)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmE={Ajo:null,AP:null
,A$:null,D_:null,UB:null,SM:null,Gm:null,XA:0,Atw:0,Alr:0,ABl:0,Init:function(aArg
){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SM.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.SM.M[2]-1,0,this.SM.M[
2]+1,aSize[1]]);this.UB.H([this.SM.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
D_.H([this.UB.M[2]-1,0,this.UB.M[2]+1,aSize[1]]);this.Gm.H([this.UB.M[2],0,aSize[
0],aSize[1]]);this.Ajo.H(this.Gm.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABl.toFixed());this.SM.L(this.V.AQ);this.SM.R(this.Alr.toFixed());this.UB.
L(this.V.AQ);this.UB.R(this.Atw.toFixed());var B1=this.BAP(this.XA);this.Gm.L(A.
_GetAutoObject(A.acj.Assessment).Xo(B1));this.Ajo.L(A._GetAutoObject(A.acj.Assessment
).Qh(B1));this.Gm.R(A.abk(this.XA,0,0)+Afu);},Ce:function(Ad){if(!this.AX)return;
this.Hk=Ad;Ad=(this.AX.Cd()-Ad)-1;if(!!this.AX){this.Alr=this.AX.CE(Ad,1);this.Atw=
this.AX.CE(Ad,2);this.ABl=this.AX.CE(Ad,0);if(this.Alr>0)this.XA=(this.Atw/this.
Alr)*100;else this.XA=0;this.An();}},BAP:function(XA){if(XA>=8)return 1;else if(
XA>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ajo={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.D_={I:this},0);A.
acg.Text._Init.call(this.UB={I:this},0);A.acg.Text._Init.call(this.SM={I:this},0
);A.acg.Text._Init.call(this.Gm={I:this},0);this.__proto__=C.AmE;this.Ajo.H(Aof);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.D_.H(Aof);this.D_.L(A.jb.Bc);this.UB.
L(A.jb.Text);this.SM.H(Aof);this.SM.L(A.jb.Text);this.Gm.L(A.jb.Text);this.J(this.
Ajo,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.D_,0);this.J(this.UB,0);this.
J(this.SM,0);this.J(this.Gm,0);this.UB.S(A.aaL(A.fl.Af));this.SM.S(A.aaL(A.fl.Af
));this.Gm.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajo._Done();this.AP._Done();this.A$._Done();this.D_._Done();this.UB._Done(
);this.SM._Done();this.Gm._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajo._ReInit();this.AP._ReInit();this.A$._ReInit();this.D_.
_ReInit();this.UB._ReInit();this.SM._ReInit();this.Gm._ReInit();this.UB.S(A.aaL(
A.fl.Af));this.SM.S(A.aaL(A.fl.Af));this.Gm.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Aji={
BT:null,AxI:A.jV,Rating:0,Ai:function(Ae){C.IA.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qh(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xo(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IA.S.call(this,E);if((E===A.aaL(A.fl.Kh))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Ih))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Kp:function(E){if(this.AxI===E)return;this.AxI=E;this.
BT.R(E);},Akt:function(E){if(this.Rating===E)return;this.Rating=E;this.An();},_Init:
function(aArg){C.IA._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Aji;this.BT.A3(0x34);this.BT.H(Z_);this.BT.I3(true);this.BT.
A8(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IA;this.BT._Done();C.IA._Done.call(
this);},_ReInit:function(){C.IA._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IA._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACv={
N2:null,SA:null,V:null,AnH:null,AnG:null,Ab9:null,Ab8:null,DI:Lu,A$1:A.jV,A_Z:A.
jV,Ab0:function(E){if(this.N2===E)return;this.N2=E;this.SA.Ab0(this.N2);},T:function(
E){if(this.DI===E)return;this.DI=E;this.V.R(E);},A_F:function(E){if(this.A$1===E
)return;this.A$1=E;this.Ab9.R(E);},A_j:function(E){if(this.A_Z===E)return;this.A_Z=
E;this.Ab8.R(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acv.SA._Init.
call(this.SA={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnH={I:this},0);A.acg.AL._Init.call(this.AnG={I:this},0);A.acg.Text._Init.
call(this.Ab9={I:this},0);A.acg.Text._Init.call(this.Ab8={I:this},0);this.__proto__=
C.ACv;this.H(Brh);this.SA.H(Bri);this.SA.Ar(false);this.SA.Bm0(360);this.SA.Bm_(
0.5);this.V.A3(0x1D);this.V.H(WZ);this.V.KR(true);this.V.R(Lu);this.V.L(A.jb.Text
);this.AnH.H(Bah);this.AnH.L(A.jb.H4);this.AnG.H(Bai);this.AnG.L(A.jb.Gb);this.Ab9.
A3(0x1D);this.Ab9.H(Bah);this.Ab9.L(A.jb.Text);this.Ab8.A3(0x1D);this.Ab8.H(Bai);
this.Ab8.L(A.jb.CU);this.J(this.SA,0);this.J(this.V,0);this.J(this.AnH,0);this.J(
this.AnG,0);this.J(this.Ab9,0);this.J(this.Ab8,0);this.SA.Bm$(A.aaL(A.acv.ATA));
this.V.S(A.aaL(A.fl.Ak));this.Ab9.S(A.aaL(A.fl.Ak));this.Ab8.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.O;this.SA._Done();this.V._Done();this.AnH.
_Done();this.AnG._Done();this.Ab9._Done();this.Ab8._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.SA._ReInit();this.V._ReInit(
);this.AnH._ReInit();this.AnG._ReInit();this.Ab9._ReInit();this.Ab8._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Ab9.S(A.aaL(A.fl.Ak));this.Ab8.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.N2)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnG
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ab8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkG={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AkG;this.H(UR);this.Background.A3(0x3F);this.Background.
H(UR);this.Background.L(A.jb.Bjz);this.Text.A3(0x3F);this.Text.H(UR);this.Text.A8(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Text._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Q_={AkR:null,NO:null,C8:null,Acv:null,JH:null,TemperatureUnit:null,MD:null,PP:
null,Sb:null,Uq:null,Lp:null,I8:null,ZS:null,ZR:null,Sd:null,HA:null,Ajz:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).Alz());
this.Uq.R(A._GetAutoObject(A.acj.Temperature).Alz());this.Sd.Z(!A._GetAutoObject(
A.Device.Device).AmG);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An0();this.AxF(
);this.Acx();this.AxG();},IS:function(G){this.WD(this);},CB:function(G){var B;C.
AB.CB.call(this,G);A.zX([this,this.AKk],[B=A._GetAutoObject(A.Device.Device),B.AEp
,B.AIA],0);A.zX([this,this.AAu],[B=A._GetAutoObject(A.Device.Device),B.AEt,B.AIC
],0);A.zX([this,this.AAu],[B=A._GetAutoObject(A.Device.Device),B.ASm,B.AZ1],0);A.
zX([this,this.A2Z],[B=A._GetAutoObject(A.Device.Device),B.Arg,B.As8],0);A.zX([this
,this.A2R],[B=A._GetAutoObject(A.Device.Device),B.AEm,B.AIx],0);A._GetAutoObject(
A.Device.Device).AhA();if(A._GetAutoObject(A.Device.Device).AmG)A._GetAutoObject(
A.Device.Device).AeR(true);A._GetAutoObject(A.Device.Device).Axs();A.pe([this,this.
A2R],this);A.pe([this,this.AAu],this);A.pe([this,this.A2Z],this);},EY:function(G
){var B;A._GetAutoObject(A.Device.Device).AhA();A._GetAutoObject(A.Device.Device
).Uk(false);A._GetAutoObject(A.Device.Device).Ae0(false);A._GetAutoObject(A.Device.
Device).AeR(false);A.z$([this,this.AKk],[B=A._GetAutoObject(A.Device.Device),B.AEp
,B.AIA],0);A.z$([this,this.AAu],[B=A._GetAutoObject(A.Device.Device),B.AEt,B.AIC
],0);A.z$([this,this.AAu],[B=A._GetAutoObject(A.Device.Device),B.ASm,B.AZ1],0);A.
z$([this,this.A2Z],[B=A._GetAutoObject(A.Device.Device),B.Arg,B.As8],0);A.z$([this
,this.A2R],[B=A._GetAutoObject(A.Device.Device),B.AEm,B.AIx],0);},AAu:function(G
){this.An();},An0:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CI);this.C8.L(A.jb.Gb);this.JH.L(this.C8.AQ);this.
MD.L(this.C8.AQ);this.TemperatureUnit.L(this.C8.AQ);}break;default:{this.Background.
L(A.jb.CI);this.C8.L(A.jb.AV);this.JH.L(A.jb.Text);this.MD.L(this.JH.AQ);this.TemperatureUnit.
L(this.JH.AQ);this.HA.L(A.jb.Gb);}}},AxF:function(){this.AkR.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JH.R(A.aaR(A.acf.ADC));this.C8.Aw(A.aaL(A.ach.Avy));this.C8.Cu(0);
this.NO.Cu(0);}break;case 1:{this.AVf(A._GetAutoObject(A.Device.Device).Ks,false
);this.C8.Aw(A.aaL(A.ach.Avy));this.NO.Cu(0);}break;case 2:{this.Sb.R(A._GetAutoObject(
A.Device.Converter).AkQ(A._GetAutoObject(A.Device.Device).AF1));this.AVf(A._GetAutoObject(
A.Device.Device).Ks,false);this.C8.Aw(null);this.NO.Cu(1);this.Acv.Z(true);this.
PP.Z(true);this.Sb.Z(true);this.Uq.Z(true);}break;case 3:{this.AUl();this.AVf(A.
_GetAutoObject(A.Device.Device).Ks,true);this.Acv.Z(false);this.PP.Z(false);this.
Sb.Z(false);this.Uq.Z(false);}break;case 4:{this.JH.R(A.aaR(A.acf.BjM));this.MD.
R(A.aaR(A.acu.Aka));this.C8.Aw(A.aaL(A.ach.AvA));this.C8.Cu(2);this.NO.Cu(0);}break;
default:A.ab5("%s%e",AHP,A._GetAutoObject(A.Device.Device).MeasureState);}},Acx:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Ks<=3240)||(A._GetAutoObject(A.Device.Device
).Ks>=5460))this.N.C5(null);else this.N.C5(A.aaL(A.ach.Aen));this.N.Cq(null);}break;
default:;}},Asn:function(G){A._GetAutoObject(C.A1).Fs();},WD:function(G){},A0c:function(
s){this.WD(s);},AkL:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BAD(this);break;default:;}},A0b:function(s){this.AkL(s);},AVf:
function(AoE,Bzs){if(Bzs)this.Lp.L(A.jb.Bm);else this.Lp.L(A.jb.Gb);if(AoE<=3240
){this.MD.Z(false);this.TemperatureUnit.Z(false);this.Lp.Z(true);this.Lp.R(A.aaR(
A.acu.AU3));}else if(AoE>=5460){this.MD.Z(false);this.TemperatureUnit.Z(false);this.
Lp.Z(true);this.Lp.R(A.aaR(A.acu.Bpu));}else{this.MD.Z(true);this.TemperatureUnit.
Z(true);this.Lp.Z(false);this.MD.R(A._GetAutoObject(A.Device.Converter).AkQ(AoE)
);}},AxG:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ks<=3240)||(A._GetAutoObject(A.Device.
Device).Ks>=5460))this.JH.R(A.aaR(A.acf.ADC));else this.JH.R(A.aaR(A.acf.Bp6));break;
default:;}},AxH:function(){},BpP:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.ZS.Ar(true);break;case 4:this.ZR.Ar(true);break;default:{
this.ZS.Ar(false);this.ZR.Ar(false);A._GetAutoObject(A.Device.Device).Ae0(false);
}}},AKk:function(G){this.An();this.AxH();this.BpP();this.BpN();},A2Z:function(G){
if(A._GetAutoObject(A.Device.Device).AmH){this.Sd.L(A.jb.H4);this.Sd.Cu(1);}else{
this.Sd.L(A.jb.Bm);this.Sd.Cu(0);}},BAD:function(G){if(!A._GetAutoObject(A.Device.
Device).AmG)A._GetAutoObject(A.Device.Device).AeR(!A._GetAutoObject(A.Device.Device
).AmH);},BpN:function(){if(A._GetAutoObject(A.Device.Device).AmG){this.Sd.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).AeR(true);else A._GetAutoObject(A.Device.Device).AeR(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sd.Z(true);else this.Sd.Z(false);},AKm:function(
G){this.CB(this);},AUl:function(){A.ab5("%s",Baf);},A2R:function(G){if(A._GetAutoObject(
A.Device.Device).HA){this.JH.H(Brj);this.MD.H(Brk);this.TemperatureUnit.H(Brl);}
else{this.JH.H(Brm);this.MD.H(Brn);this.TemperatureUnit.H(Bro);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Ge._Init.call(this.AkR={I:this},0);A.acg.
Am._Init.call(this.NO={I:this},0);A.acg.Am._Init.call(this.C8={I:this},0);A.acg.
Am._Init.call(this.Acv={I:this},0);A.acg.Text._Init.call(this.JH={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MD={
I:this},0);A.acg.Text._Init.call(this.PP={I:this},0);A.acg.Text._Init.call(this.
Sb={I:this},0);A.acg.Text._Init.call(this.Uq={I:this},0);C.CG._Init.call(this.Lp={
I:this},0);A.Device.TC._Init.call(this.I8={I:this},0);A.Device.TC._Init.call(this.
ZS={I:this},0);A.Device.TC._Init.call(this.ZR={I:this},0);A.acg.Am._Init.call(this.
Sd={I:this},0);C.CG._Init.call(this.HA={I:this},0);A.acl.TC._Init.call(this.Ajz={
I:this},0);this.__proto__=C.Q_;var B;this.N.Z(true);this.AkR.Fj(1000);this.AkR.B3=
2;this.NO.H(Brp);this.NO.L(A.jb.CU);this.C8.H(Brq);this.C8.L(A.jb.AV);this.C8.Cu(
0);this.C8.Z(true);this.Acv.H(Brr);this.Acv.L(A.jb.Text);this.Acv.Z(false);this.
JH.KR(true);this.JH.R(A.aaR(A.acf.ADC));this.JH.L(A.jb.Text);this.TemperatureUnit.
A8(0x9);this.TemperatureUnit.L(A.jb.Text);this.MD.A8(0x14);this.MD.R(A.aaR(A.acu.
Aka));this.MD.L(A.jb.Text);this.PP.H(Brs);this.PP.R(A.aaR(A.acf.PP));this.PP.L(A.
jb.Text);this.PP.Z(false);this.Sb.H(Brt);this.Sb.A8(0x14);this.Sb.R(Bru);this.Sb.
L(A.jb.Text);this.Sb.Z(false);this.Uq.H(Brv);this.Uq.R(Brw);this.Uq.L(A.jb.Text);
this.Uq.Z(false);this.Lp.H(Brx);this.Lp.R(A.aaR(A.acu.AU3));this.Lp.A8(0x12);this.
Lp.L(A.jb.Gb);this.I8.B3=false;this.I8.Cw=true;this.I8.HK(1);this.I8.Fj(4000);this.
I8.Uh(0);this.ZS.B3=false;this.ZS.Cw=true;this.ZS.HK(2);this.ZS.Fj(400);this.ZS.
Uh(200);this.ZR.B3=false;this.ZR.Cw=true;this.ZR.HK(3);this.ZR.Fj(500);this.ZR.Uh(
250);this.Sd.H(Bry);this.HA.H(Brz);this.HA.Z(A._GetAutoObject(A.Device.Device).HA
);this.HA.R(A.aaR(A.acf.HA));this.HA.A8(0x12);this.HA.L(A.jb.Gb);this.Ajz.Ar(A._GetAutoObject(
A.Device.Device).HA);this.Ajz.Fj(500);this.Ajz.Uh(1000);this.J(this.NO,0);this.J(
this.C8,0);this.J(this.Acv,0);this.J(this.JH,0);this.J(this.TemperatureUnit,0);this.
J(this.MD,0);this.J(this.PP,0);this.J(this.Sb,0);this.J(this.Uq,0);this.J(this.Lp
,0);this.J(this.Sd,0);this.J(this.HA,0);this.N.CA=[this,this.Asn];this.N.Ck=[this
,this.A0b];this.N.Cg=[this,this.A0c];this.N.CZ(A.aaL(A.ach.Aem));this.AkR.Q=[B=this.
C8,B.ASd,B.Cu];this.NO.Aw(A.aaL(A.ach.NO));this.C8.Aw(A.aaL(A.ach.Avy));this.Acv.
Aw(A.aaL(A.ach.AQy));this.JH.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MD.S(A.aaL(A.fl.Aef));this.PP.S(A.aaL(A.fl.Af));this.Sb.S(A.aaL(A.fl.EG
));this.Uq.S(A.aaL(A.fl.EG));this.Lp.S(A.aaL(A.fl.Aef));this.Lp.A2(A.aaL(A.fl.EG
));this.Lp.Ct(A.aaL(A.fl.Af));this.I8.Q=[B=A._GetAutoObject(A.Device.Device),B.ASu
,B.AZ7];this.ZS.Q=[B=A._GetAutoObject(A.Device.Device),B.AEu,B.AID];this.ZR.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEu,B.AID];this.Sd.Aw(A.aaL(A.ach.AqA));this.
HA.S(A.aaL(A.fl.EG));this.HA.A2(A.aaL(A.fl.Kh));this.HA.Ct(A.aaL(A.fl.Ih));this.
Ajz.Q=[B=this.HA,B.Fi,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.AkR._Done();this.NO._Done();this.C8._Done();this.Acv._Done();this.JH._Done(
);this.TemperatureUnit._Done();this.MD._Done();this.PP._Done();this.Sb._Done();this.
Uq._Done();this.Lp._Done();this.I8._Done();this.ZS._Done();this.ZR._Done();this.
Sd._Done();this.HA._Done();this.Ajz._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.AkR._ReInit();this.NO._ReInit();this.C8._ReInit();
this.Acv._ReInit();this.JH._ReInit();this.TemperatureUnit._ReInit();this.MD._ReInit(
);this.PP._ReInit();this.Sb._ReInit();this.Uq._ReInit();this.Lp._ReInit();this.I8.
_ReInit();this.ZS._ReInit();this.ZR._ReInit();this.Sd._ReInit();this.HA._ReInit(
);this.Ajz._ReInit();this.JH.R(A.aaR(A.acf.ADC));this.MD.R(A.aaR(A.acu.Aka));this.
PP.R(A.aaR(A.acf.PP));this.Lp.R(A.aaR(A.acu.AU3));this.HA.R(A.aaR(A.acf.HA));this.
JH.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MD.S(A.aaL(A.fl.
Aef));this.PP.S(A.aaL(A.fl.Af));this.Sb.S(A.aaL(A.fl.EG));this.Uq.S(A.aaL(A.fl.EG
));this.Lp.S(A.aaL(A.fl.Aef));this.Lp.A2(A.aaL(A.fl.EG));this.Lp.Ct(A.aaL(A.fl.Af
));this.HA.S(A.aaL(A.fl.EG));this.HA.A2(A.aaL(A.fl.Kh));this.HA.Ct(A.aaL(A.fl.Ih
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.AkR)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.I8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajz)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AUR={Acx:
function(){C.Q_.Acx.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cq(null);this.N.C5(A.aaL(A.ach.AvB));}break;default:;}},
WD:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Ks>3240)&&(A._GetAutoObject(A.Device.Device
).Ks<5460)){A._GetAutoObject(A.Device.Device).AhA();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKm(this);break;default:;}},AxG:
function(){C.Q_.AxG.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JH.R(A.aaR(A.acf.BjN));break;default:;}},AxH:function(){C.Q_.AxH.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).Ws(16711680);this.I8.Ar(true);}break;default:this.I8.Ar(false);
}},AUl:function(){this.C8.Aw(A.aaL(A.ach.AvA));this.C8.Cu(0);this.NO.Cu(0);},_Init:
function(aArg){C.Q_._Init.call(this,aArg);this.__proto__=C.AUR;this.Dn(C.AOX);},
_className:"Application::TemperatureMeasurementScreen"};C.AO2={Dc:null,IG:null,NQ:
null,AP:null,AgS:null,A$:null,Dd:function(E){C.BS.Dd.call(this,E);this.Dc.L(E);this.
IG.L(E);this.NQ.L(E);this.AgS.L(E);},_Init:function(aArg){C.BS._Init.call(this,aArg
);A.acg.Am._Init.call(this.Dc={I:this},0);A.acg.Am._Init.call(this.IG={I:this},0
);A.acg.Am._Init.call(this.NQ={I:this},0);A.acg.DQ._Init.call(this.AP={I:this},0
);A.acg.Am._Init.call(this.AgS={I:this},0);A.acg.DQ._Init.call(this.A$={I:this},
0);this.__proto__=C.AO2;this.Dc.H(Ayl);this.IG.H(AsM);this.NQ.H(AHp);this.AP.DE(
Baj);this.AP.DR(Bak);this.AP.L(A.jb.Bc);this.AgS.H(BrA);this.AgS.L(A.jb.CU);this.
A$.DE(BrB);this.A$.DR(BrC);this.A$.L(A.jb.Bc);this.J(this.Dc,0);this.J(this.IG,0
);this.J(this.NQ,0);this.J(this.AP,0);this.J(this.AgS,0);this.J(this.A$,0);this.
Dc.Aw(A.aaL(A.ach.ADm));this.IG.Aw(A.aaL(A.ach.Aeo));this.NQ.Aw(A.aaL(A.ach.Avt)
);this.AgS.Aw(A.aaL(A.ach.AP7));},_Done:function(){this.__proto__=C.BS;this.Dc._Done(
);this.IG._Done();this.NQ._Done();this.AP._Done();this.AgS._Done();this.A$._Done(
);C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.Dc._ReInit(
);this.IG._ReInit();this.NQ._ReInit();this.AP._ReInit();this.AgS._ReInit();this.
A$._ReInit();},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Dc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Db={Eo:null,DS:null,AGm:
0,ANv:0,Init:function(aArg){A.zV([this,this.AK3],A._GetAutoObject(A.Device.Device
).Ao,0);A.pe([this,this.AK3],this);},AK3:function(G){var Ad=this.AGm;if(Ad<0){this.
DS.Hf();this.DS.Ex(this.ANv);return;}this.DS.Ex(A._GetAutoObject(A.Device.Device
).Ao.AmL(Ad,14));this.DS.AER(A._GetAutoObject(A.Device.Device).Ao.IY(Ad,13));this.
DS.AeS(A._GetAutoObject(A.Device.Device).Ao.HZ(Ad,8));this.DS.Ui(A._GetAutoObject(
A.Device.Device).Ao.HZ(Ad,11));this.DS.AeV(A._GetAutoObject(A.Device.Device).Ao.
HZ(Ad,12));this.DS.AeX(A._GetAutoObject(A.Device.Device).Ao.CE(Ad,5));},A_m:function(
E){if(this.AGm===E)return;this.AGm=E;A.pe([this,this.AK3],this);},A9Q:function(E
){if(this.ANv===E)return;this.ANv=E;A.pe([this,this.AK3],this);},A82:function(){
return this.AGm;},_Init:function(aArg){C.Ew._Init.call(this,aArg);C.CG._Init.call(
this.Eo={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Db;this.
Eo.H(BrD);this.Eo.R(A.aaR(A.acf.GG));this.Eo.A8(0x11);this.Eo.L(A.jb.Text);this.
DS.H(AZL);this.J(this.Eo,0);this.J(this.DS,0);this.Eo.S(A.aaL(A.fl.Af));this.Eo.
A2(A.aaL(A.fl.Ak));this.Eo.Ct(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){
this.__proto__=C.Ew;this.Eo._Done();this.DS._Done();C.Ew._Done.call(this);},_ReInit:
function(){C.Ew._ReInit.call(this);this.Eo._ReInit();this.DS._ReInit();this.Eo.R(
A.aaR(A.acf.GG));this.Eo.S(A.aaL(A.fl.Af));this.Eo.A2(A.aaL(A.fl.Ak));this.Eo.Ct(
A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ew._Mark.call(this,D);if((B=this.Eo).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KM={Agz:null,Text:null,Ae_:null,Dd:function(E
){C.BS.Dd.call(this,E);this.Agz.L(E);this.Text.L(E);this.Ae_.L(E);},_Init:function(
aArg){C.BS._Init.call(this,aArg);A.acg.Am._Init.call(this.Agz={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Am._Init.call(this.Ae_={I:this},0);this.__proto__=
C.KM;this.Agz.H(BrE);this.Agz.L(A.jb.Text);this.Text.H(BrF);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Ae_.H(BrG);this.Ae_.L(A.jb.Text);this.
J(this.Agz,0);this.J(this.Text,0);this.J(this.Ae_,0);this.Agz.Aw(A.aaL(A.ach.AO4
));this.Text.S(A.aaL(A.fl.Kh));this.Text.A2(A.aaL(A.fl.Ih));},_Done:function(){this.
__proto__=C.BS;this.Agz._Done();this.Text._Done();this.Ae_._Done();C.BS._Done.call(
this);},_ReInit:function(){C.BS._ReInit.call(this);this.Agz._ReInit();this.Text.
_ReInit();this.Ae_._ReInit();this.Text.S(A.aaL(A.fl.Kh));this.Text.A2(A.aaL(A.fl.
Ih));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Agz)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae_
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AOV={
_Init:function(aArg){C.KM._Init.call(this,aArg);this.__proto__=C.AOV;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KM._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AOX={_Init:function(
aArg){C.KM._Init.call(this,aArg);this.__proto__=C.AOX;this.JU(this.Ae_,-2);this.
Ae_.Aw(A.aaL(A.ach.Abs));},_className:"Application::HeaderDeviceTemperature"};C.
Yh={Ai:function(Ae){C.AmE.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bpv)+A.aaR(A.acf.Colon
));},Ce:function(Ad){var B;if(!this.AX)return;this.Alr=0;this.Atw=0;this.XA=0;if(
!!this.AX){var P;for(P=0;P<this.AX.Cd();P++){this.Alr+=this.AX.CE(P,1);this.Atw+=
this.AX.CE(P,2);}if(this.Alr>0)this.XA=(this.Atw/this.Alr)*100;this.An();}},_Init:
function(aArg){C.AmE._Init.call(this,aArg);this.__proto__=C.Yh;this.AP.Z(false);
this.A$.Z(false);this.D_.Z(false);this.V.S(A.aaL(A.fl.Kh));this.V.A2(A.aaL(A.fl.
Ih));},_ReInit:function(){C.AmE._ReInit.call(this);this.V.S(A.aaL(A.fl.Kh));this.
V.A2(A.aaL(A.fl.Ih));},_className:"Application::EvaluationLossesSumItem"};C.A6r={
Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A6r;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6s={KZ:null,MS:null,AY:0,Ya:function(){this.KZ=null;this.MS=null;this.AY=0;
},Os:function(A7){var G$;G$=A._NewObject(C.A6r,0);G$.A5=A7;if(!this.KZ){this.KZ=
G$;this.MS=G$;this.AY=1;}else{this.MS.Ah=G$;this.MS=G$;this.AY=this.AY+1;}},AmN:
function(){var B;var RE=0;var Of=this.KZ;while(!!Of){RE+=Of.A5;Of=Of.Ah;}return RE;
},AjH:function(){if(!this.AY)return 0;return this.AmN()/this.AY;},AqI:function(){
var B;if(!this.AY)return 0;var A08=this.AjH();var Ac7=0;var Of=this.KZ;while(!!Of
){Ac7+=Math.pow(Of.A5-A08,2);Of=Of.Ah;}Ac7/=this.AY;Ac7=Math.sqrt(Ac7);return Ac7;
},_Init:function(aArg){this.__proto__=C.A6s;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agk={Background:null,V:null,KS:0,Un:5,Hd:false
,Ai:function(Ae){C.Ha.Ai.call(this,Ae);if(this.Hd)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CI);},T:function(E){C.Ha.T.call(this,E);this.V.R(E);},Bj:
function(E){if(this.Hd===E)return;this.Hd=E;this.An();},Km:function(E){if(this.Un===
E)return;this.Un=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Ha._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG.
_Init.call(this.V={I:this},0);this.__proto__=C.Agk;this.H(BF);this.Background.A3(
0x3F);this.Background.H(BF);this.V.A3(0x3F);this.V.H(AIg);this.V.A8(0x11);this.V.
L(A.jb.Text);this.KS=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kh));this.V.A2(A.aaL(A.fl.Ih));this.V.Ct(A.aaL(A.fl.Bi));},_Done:function(
){this.__proto__=C.Ha;this.Background._Done();this.V._Done();C.Ha._Done.call(this
);},_ReInit:function(){C.Ha._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kh));this.V.A2(A.aaL(A.fl.Ih));this.V.Ct(A.aaL(A.fl.
Bi));},_Mark:function(D){var B;C.Ha._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.ANO={Wn:function(G){this.Agi();this.IU(A.aaR(
A.acf.AU2),[this,this.ATp],5);this.IU(A.aaR(A.acf.AU0),[this,this.ATo],7);this.IU(
A.aaR(A.acf.Calving),[this,this.Blv],11);this.IU(A.aaR(A.acf.AnT),[this,this.AwI
],2);this.IU(A.aaR(A.acf.XI),[this,this.AEF],1);this.IU(A.aaR(A.acf.Aup),[this,this.
AEz],0);A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Nz(A.aaR(A.acf.Ame)+A.
aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dt(6);},Dz:function(G){},Abh:
function(){return C.AMT;},Abi:function(){return C.APp;},Q5:function(G){A._GetAutoObject(
A.Device.Device).Ao.Bl(A._GetAutoObject(A.Device.Helper).ACK());},HM:function(G){
C.GS.HM.call(this,G);if(this.Aj9()===false){this.N.Cq(A.aaL(A.ach.ADj));this.N.Ck=[
this,this.A50];this.N.FH(A.jV);}this.N.OL(false);this.N.OM(false);},Af6:function(
){A._GetAutoObject(C.A1).BU(70);},Af5:function(){A._GetAutoObject(C.A1).BU(71);}
,_Init:function(aArg){C.GS._Init.call(this,aArg);this.__proto__=C.ANO;var B;this.
Dn(C.AOY);this.Dx(A.aaR(A.acf.ARL));this.AwD([B=A._GetAutoObject(A.Device.Device
),B.A8u,B.Ba0]);},_ReInit:function(){C.GS._ReInit.call(this);this.Dx(A.aaR(A.acf.
ARL));},_className:"Application::DryCowListScreen"};C.ANN={_Init:function(aArg){
C.IW._Init.call(this,aArg);this.__proto__=C.ANN;this.Lc.Ar(false);this.Lc.Aj(false
);this.Lc.Z(false);this.Jj.Ar(false);this.Jj.Aj(false);this.Jj.Z(false);},_className:
"Application::DryCowListFilterScreen"};C.ANM={_Init:function(aArg){C.GC._Init.call(
this,aArg);this.__proto__=C.ANM;this.N.B2(A.aaR(A.acf.A45));},_ReInit:function(){
C.GC._ReInit.call(this);this.N.B2(A.aaR(A.acf.A45));},_className:"Application::DryCowListActionsScreen"
};C.AOY={D3:function(G){C.Ki.D3.call(this,G);this.Dc.Aw(A._GetAutoObject(A.Device.
Converter).AdM(9));},_Init:function(aArg){C.Ki._Init.call(this,aArg);this.__proto__=
C.AOY;},_className:"Application::HeaderDryCowListFilter"};C.Abe={Filter:null,LV:
null,AGP:A.jV,En:0,AFV:1,Operator:1,Bk:function(aSize){C.Acf.Bk.call(this,aSize);
this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Acf.Ai.call(this,Ae
);this.LV.L(this.V.AQ);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$
],E,0);A.pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tm((F=this.Filter,F[1].call(F[0])).DN(this.En,this.
Operator));else this.Tm(null);},Nb:function(E){if(this.En===E)return;this.En=E;A.
pe([this,this.L$],this);},Tm:function(AH){if(!!AH){var A1M;if(this.AFV!==1)A1M=this.
AFV;else A1M=AH.Operator;this.T((this.AGP+CO)+A._GetAutoObject(A.Device.Converter
).A6n(A1M));this.Zm(false);}else{this.T(this.AGP);this.Zm(true);}},OK:function(E
){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.L$],this);},AFF:function(
E){if(this.AGP===E)return;this.AGP=E;A.pe([this,this.L$],this);},A_a:function(E){
if(this.AFV===E)return;this.AFV=E;A.pe([this,this.L$],this);},_Init:function(aArg
){C.Acf._Init.call(this,aArg);C.LV._Init.call(this.LV={I:this},0);this.__proto__=
C.Abe;this.H(AsO);this.AW.H(BrH);this.LV.H(AZM);this.JU(this.V,-1);this.J(this.LV
,0);},_Done:function(){this.__proto__=C.Acf;this.LV._Done();C.Acf._Done.call(this
);},_ReInit:function(){C.Acf._ReInit.call(this);this.LV._ReInit();},_Mark:function(
D){var B;C.Acf._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.AjB={LV:null,Ai:function(Ae){C.Qw.Ai.call(this,Ae);this.LV.L(this.V.AQ);},Tm:
function(AH){if(!!AH){this.H2.Cu(1);this.Zm(true);this.LV.A93(false);}else{this.
H2.Cu(0);this.Zm(false);this.LV.A93(true);}},_Init:function(aArg){C.Qw._Init.call(
this,aArg);C.LV._Init.call(this.LV={I:this},0);this.__proto__=C.AjB;this.I4=20;this.
LV.H(AZM);this.J(this.LV,0);},_Done:function(){this.__proto__=C.Qw;this.LV._Done(
);C.Qw._Done.call(this);},_ReInit:function(){C.Qw._ReInit.call(this);this.LV._ReInit(
);},_Mark:function(D){var B;C.Qw._Mark.call(this,D);if((B=this.LV)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABL={Q:null,CS:function(
){this.T(A._GetAutoObject(A.Device.Helper).AmM(this.TableId,this.En));},Tm:function(
AH){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.H2.Cu(1);else this.H2.Cu(
0);},J$:function(G){A.pe([this,this.L$],this);},As:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.J$],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
J$],E,0);if(!!E)A.pe([this,this.J$],this);},_Init:function(aArg){C.Qw._Init.call(
this,aArg);this.__proto__=C.ABL;},_ReInit:function(){C.Qw._ReInit.call(this);this.
CS();},_Mark:function(D){var B;C.Qw._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.APp={YL:null,I2:null,_Init:function(aArg){C.Db._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YL={I:this},0);A.acg.Text._Init.call(this.I2={I:this},0);this.__proto__=
C.APp;this.A9Q(1);this.YL.H(BrI);this.YL.KR(true);this.YL.R(A.aaR(A.acf.ADR));this.
YL.L(A.jb.Text);this.I2.H(S3);this.I2.R(((A.aaR(A.acf.RI)+Bal)+A.aaR(A.acf.A$0))+
O3);this.I2.L(A.jb.Text);this.J(this.YL,0);this.J(this.I2,0);this.YL.S(A.aaL(A.fl.
Ak));this.I2.S(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=C.Db;this.YL._Done(
);this.I2._Done();C.Db._Done.call(this);},_ReInit:function(){C.Db._ReInit.call(this
);this.YL._ReInit();this.I2._ReInit();this.YL.R(A.aaR(A.acf.ADR));this.I2.R(((A.
aaR(A.acf.RI)+Bal)+A.aaR(A.acf.A$0))+O3);this.YL.S(A.aaL(A.fl.Ak));this.I2.S(A.aaL(
A.fl.Bi));},_Mark:function(D){var B;C.Db._Mark.call(this,D);if((B=this.YL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I2)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AMT={Mg:null,KN:null,AdH:null,AP:null,A$:null
,Xf:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mg.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KN.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KN.M[2]-1,0,this.
KN.M[2]+1,aSize[1]]);this.AdH.H([this.KN.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KN.L(this.V.AQ);this.AdH.L(this.V.AQ);if(!!this.Xf&&(
this.Xf!==5)){this.Mg.L(A._GetAutoObject(A.acj.Assessment).Qh(this.Xf));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xo(this.Xf));}else this.Mg.L(this.Background.
AQ);},Ce:function(Ad){if(!this.AX)return;this.Hk=Ad;if(!!this.AX){var Md=this.AX.
CE(Ad,1);var A2h=this.AX.CE(Ad,29);var Tb=this.AX.HD(Ad,4);var LP=this.AX.IY(Ad,
13);var Alu=this.AX.IY(Ad,17);var AlD=this.AX.HZ(Ad,11);this.Xf=A._GetAutoObject(
A.Device.Helper).AL4(LP,AlD,Alu);this.T(Md.toFixed());this.KN.R(A2h.toFixed());this.
AdH.R(A._GetAutoObject(A.acj.KI).ACH(Tb,A._GetAutoObject(A.Device.Helper).Ds(),BrJ
));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Mg={I:this},0);A.acg.Text._Init.call(this.KN={I:this},0);A.acg.Text._Init.call(
this.AdH={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A$={I:this},0);this.__proto__=C.AMT;this.Mg.H(AsX);this.AP.L(A.jb.Bc);this.
A$.L(A.jb.Bc);this.J(this.Mg,0);this.J(this.KN,0);this.J(this.AdH,0);this.J(this.
AP,0);this.J(this.A$,0);this.KN.S(A.aaL(A.fl.Af));this.AdH.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mg._Done();this.KN._Done(
);this.AdH._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mg._ReInit();this.KN._ReInit();this.AdH.
_ReInit();this.AP._ReInit();this.A$._ReInit();this.KN.S(A.aaL(A.fl.Af));this.AdH.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mg
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RP={AJy:0,Bdz:false,Ai:function(Ae){C.Fr.Ai.call(this,Ae);if(this.Bdz){this.
T(A.aaR(A.acf.ANK));this.Kp(A.jV);}else{this.T(A.aaR(A.acf.Bjt));if(this.AJy>0)this.
Kp(this.AJy.toFixed());else this.Kp(W4);}},Ce:function(G){C.Fr.Ce.call(this,G);this.
Bdz=A._GetAutoObject(A.Device.Helper).W.IsDry;var Alp=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Alp>0)this.AJy=A._GetAutoObject(A.Device.Helper).
MN(Alp,A._GetAutoObject(A.Device.Helper).Ds());else this.AJy=0;this.An();},_Init:
function(aArg){C.Fr._Init.call(this,aArg);this.__proto__=C.RP;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AL9={ALb:A.jV,Ai:function(Ae){C.Fr.Ai.call(this,Ae);this.T(A.aaR(A.acf.RI));
this.Kp(this.ALb);},Ce:function(G){C.Fr.Ce.call(this,G);var Tb=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALb=A._GetAutoObject(A.acj.KI).ACH(Tb,A._GetAutoObject(
A.Device.Helper).Ds(),((((BrK+A.aaR(A.acf.BgM))+BrL)+A.aaR(A.acf.BgL))+BrM)+A.aaR(
A.acf.ALF));this.An();},_Init:function(aArg){C.Fr._Init.call(this,aArg);this.__proto__=
C.AL9;this.ALb=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fr._ReInit.call(this);
this.ALb=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANE={T$:null,Y5:null,Wd:null,We:null,Ss:null,Init:function(aArg){this.Bb(this.
T$);A.pe([this,this.MG],this);},Xu:function(G){A._GetAutoObject(A.Device.Device).
Dt(1);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.NV._Init.call(this.T$={
I:this},0);C.NV._Init.call(this.Y5={I:this},0);C.NV._Init.call(this.Wd={I:this},
0);C.AbJ._Init.call(this.We={I:this},0);C.T8._Init.call(this.Ss={I:this},0);this.
__proto__=C.ANE;var B;this.Dn(C.AOV);this.T$.H(IN);this.T$.Aj(true);this.T$.T(A.
aaR(A.acf.ACg));this.T$.Bj(false);this.T$.NY(94);this.Y5.H(P5);this.Y5.Aj(true);
this.Y5.T(A.acf.Info);this.Y5.Bj(true);this.Y5.NY(93);this.Wd.H(Z7);this.Wd.Aj(true
);this.Wd.T(A.aaR(A.acf.AGp));this.Wd.Bj(false);this.Wd.NY(73);this.We.H(Ak7);this.
We.Aj(true);this.We.T(A.aaR(A.acf.TempMeasurement));this.We.Bj(true);this.We.NY(
68);this.Ss.H(Aoh);this.Ss.Aj(true);this.Ss.T(A.aaR(A.acf.ACC));this.Ss.Bj(false
);this.J(this.T$,-1);this.J(this.Y5,-1);this.J(this.Wd,-1);this.J(this.We,-1);this.
J(this.Ss,-1);this.N.Ck=[this,this.Xu];this.N.Cq(A.aaL(A.ach.ADr));this.T$.AR=[B=
this.T$,B.NZ];this.Y5.AR=[B=this.Y5,B.NZ];this.Wd.AR=[B=this.Wd,B.NZ];this.We.AR=[
B=this.We,B.NZ];this.Ss.AR=null;this.Ss.AeK([B=this.Ss,B.As_]);this.Ss.Gk([this,
this.D8,this.GK]);this.Ss.ASF([B=A._GetAutoObject(A.Device.Device),B.Arg,B.As8]);
this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.T$._Done();this.Y5._Done(
);this.Wd._Done();this.We._Done();this.Ss._Done();C.Eg._Done.call(this);},_ReInit:
function(){C.Eg._ReInit.call(this);this.T$._ReInit();this.Y5._ReInit();this.Wd._ReInit(
);this.We._ReInit();this.Ss._ReInit();this.T$.T(A.aaR(A.acf.ACg));this.Wd.T(A.aaR(
A.acf.AGp));this.We.T(A.aaR(A.acf.TempMeasurement));this.Ss.T(A.aaR(A.acf.ACC));
},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.T$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.We)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ss
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"};C.
ANF={T9:null,AbH:null,Wb:null,Init:function(aArg){this.Bb(this.T9);},ByI:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},Bj8:function(G){if(A._GetAutoObject(
A.Device.Device).AaT<=20)A._GetAutoObject(A.Device.Device).A_(76,true,BrN,0,null
);else A._GetAutoObject(A.Device.Device).A_(39,true,A.jV,0,[this,this.ByI]);},_Init:
function(aArg){C.Eg._Init.call(this,aArg);C.NV._Init.call(this.T9={I:this},0);C.
Cm._Init.call(this.AbH={I:this},0);C.AbJ._Init.call(this.Wb={I:this},0);this.__proto__=
C.ANF;var B;this.Dn(C.AOW);this.T9.H(IN);this.T9.Aj(true);this.T9.T(A.aaR(A.acf.
A5s));this.T9.Bj(false);this.T9.NY(74);this.AbH.H(P5);this.AbH.Aj(true);this.AbH.
T(A.aaR(A.acf.A6p));this.AbH.Bj(true);this.Wb.H(Z7);this.Wb.Aj(true);this.Wb.T(A.
aaR(A.acf.RangeTest));this.Wb.Bj(false);this.Wb.NY(15);this.J(this.T9,-1);this.J(
this.AbH,-1);this.J(this.Wb,-1);this.T9.AR=[B=this.T9,B.NZ];this.AbH.AR=[this,this.
Bj8];this.Wb.AR=[B=this.Wb,B.NZ];this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.T9._Done();this.AbH._Done();this.Wb._Done();C.Eg._Done.call(this);},_ReInit:
function(){C.Eg._ReInit.call(this);this.T9._ReInit();this.AbH._ReInit();this.Wb.
_ReInit();this.T9.T(A.aaR(A.acf.A5s));this.AbH.T(A.aaR(A.acf.A6p));this.Wb.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.T9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AOW={_Init:function(aArg){C.KM._Init.call(this,aArg);this.__proto__=C.AOW;this.
Text.R(A.aaR(A.acf.AGp));},_ReInit:function(){C.KM._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGp));},_className:"Application::HeaderDeviceServiceMenu"};C.NV={M7:
null,Ai:function(Ae){C.AbJ.Ai.call(this,Ae);this.M7.L(this.V.AQ);},_Init:function(
aArg){C.AbJ._Init.call(this,aArg);A.acg.Am._Init.call(this.M7={I:this},0);this.__proto__=
C.NV;this.M7.A3(0x38);this.M7.H(BrO);this.J(this.M7,0);this.V.Ct(A.aaL(A.fl.Bi));
this.M7.Aw(A.aaL(A.ach.Ajj));},_Done:function(){this.__proto__=C.AbJ;this.M7._Done(
);C.AbJ._Done.call(this);},_ReInit:function(){C.AbJ._ReInit.call(this);this.M7._ReInit(
);this.V.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.AbJ._Mark.call(this,D);if((
B=this.M7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANA={AgY:null,Ag4:null,Ag6:null,Ag2:null,AjZ:null,Ag1:null,Ag0:null,AgZ:null
,AjX:null,AgX:null,AjY:null,Ag5:null,Aj0:null,Ag3:null,Aj1:null,Init:function(aArg
){this.Bb(this.AgY);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.PK._Init.
call(this.AgY={I:this},0);C.PK._Init.call(this.Ag4={I:this},0);C.PK._Init.call(this.
Ag6={I:this},0);C.PK._Init.call(this.Ag2={I:this},0);C.PK._Init.call(this.AjZ={I:
this},0);C.PK._Init.call(this.Ag1={I:this},0);C.PK._Init.call(this.Ag0={I:this},
0);C.PK._Init.call(this.AgZ={I:this},0);C.PK._Init.call(this.AjX={I:this},0);C.PK.
_Init.call(this.AgX={I:this},0);C.PK._Init.call(this.AjY={I:this},0);C.PK._Init.
call(this.Ag5={I:this},0);C.PK._Init.call(this.Aj0={I:this},0);C.PK._Init.call(this.
Ag3={I:this},0);C.PK._Init.call(this.Aj1={I:this},0);this.__proto__=C.ANA;this.Dn(
C.AOR);this.AgY.H(As3);this.AgY.Aj(true);this.AgY.Sx(1);this.Ag4.H(AZJ);this.Ag4.
Aj(true);this.Ag4.Bj(true);this.Ag4.Sx(2);this.Ag6.H(AsZ);this.Ag6.Aj(true);this.
Ag6.Bj(false);this.Ag6.Sx(3);this.Ag2.H(As0);this.Ag2.Aj(true);this.Ag2.Bj(true);
this.Ag2.Sx(4);this.AjZ.H(Ayb);this.AjZ.Aj(true);this.AjZ.Sx(5);this.Ag1.H(BrP);
this.Ag1.Aj(true);this.Ag1.Bj(true);this.Ag1.Sx(6);this.Ag0.H(As1);this.Ag0.Aj(true
);this.Ag0.Bj(false);this.Ag0.Sx(7);this.AgZ.H(Ayk);this.AgZ.Aj(true);this.AgZ.Bj(
true);this.AgZ.Sx(8);this.AjX.H(AZK);this.AjX.Aj(true);this.AjX.Sx(9);this.AgX.H(
Aop);this.AgX.Aj(true);this.AgX.Bj(true);this.AgX.Sx(10);this.AjY.H(BrQ);this.AjY.
Aj(true);this.AjY.Sx(11);this.Ag5.H(BrR);this.Ag5.Aj(true);this.Ag5.Bj(true);this.
Ag5.Sx(12);this.Aj0.H(BrS);this.Aj0.Aj(true);this.Aj0.Sx(13);this.Ag3.H(BrT);this.
Ag3.Aj(true);this.Ag3.Bj(true);this.Ag3.Sx(14);this.Aj1.H(BrU);this.Aj1.Aj(true);
this.Aj1.Sx(15);this.J(this.AgY,-1);this.J(this.Ag4,-1);this.J(this.Ag6,-1);this.
J(this.Ag2,-1);this.J(this.AjZ,-1);this.J(this.Ag1,-1);this.J(this.Ag0,-1);this.
J(this.AgZ,-1);this.J(this.AjX,-1);this.J(this.AgX,-1);this.J(this.AjY,-1);this.
J(this.Ag5,-1);this.J(this.Aj0,-1);this.J(this.Ag3,-1);this.J(this.Aj1,-1);this.
Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.AgY._Done();this.Ag4._Done(
);this.Ag6._Done();this.Ag2._Done();this.AjZ._Done();this.Ag1._Done();this.Ag0._Done(
);this.AgZ._Done();this.AjX._Done();this.AgX._Done();this.AjY._Done();this.Ag5._Done(
);this.Aj0._Done();this.Ag3._Done();this.Aj1._Done();C.Eg._Done.call(this);},_ReInit:
function(){C.Eg._ReInit.call(this);this.AgY._ReInit();this.Ag4._ReInit();this.Ag6.
_ReInit();this.Ag2._ReInit();this.AjZ._ReInit();this.Ag1._ReInit();this.Ag0._ReInit(
);this.AgZ._ReInit();this.AjX._ReInit();this.AgX._ReInit();this.AjY._ReInit();this.
Ag5._ReInit();this.Aj0._ReInit();this.Ag3._ReInit();this.Aj1._ReInit();},_Mark:function(
D){var B;C.Eg._Mark.call(this,D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ag2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ag1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AgZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgX)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AjY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag3)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AOR={_Init:function(aArg){C.KM._Init.call(this
,aArg);this.__proto__=C.AOR;this.Text.R(A.aaR(A.acf.A5T));},_ReInit:function(){C.
KM._ReInit.call(this);this.Text.R(A.aaR(A.acf.A5T));},_className:"Application::HeaderDeviceCheck"
};C.PK={DeviceComponentToString:null,Kd:null,AuP:0,Bcb:false,CS:function(){this.
V.R(this.DeviceComponentToString.BO(this.AuP));},Bk:function(aSize){var B;C.Cm.Bk.
call(this,aSize);this.Kd.H(A.abM(this.Kd.M,aSize[0]-((B=this.Kd.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kd.M[0]));},Ai:function(Ae){C.Cm.Ai.call(this,Ae);this.Kd.
AEJ(this.V.AQ);if(this.Bcb)this.Kd.Awv(A.jb.EW);else this.Kd.Awv(A.jb.Gb);},Sx:function(
E){if(this.AuP===E)return;this.AuP=E;this.T(this.DeviceComponentToString.BO(E));
this.D3(this);},D3:function(G){this.Bcb=A._GetAutoObject(A.Device.Device).AJo(this.
AuP);this.An();},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kd._Init.call(this.Kd={I:this
},0);this.__proto__=C.PK;this.V.H(BrV);this.V.A8(0x11);this.Kd.H(BrW);this.J(this.
Kd,0);},_Done:function(){this.__proto__=C.Cm;this.DeviceComponentToString._Done(
);this.Kd._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kd._ReInit();this.CS();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sa={Ay:null,DX:null,Y:null,Init:function(aArg){A.pe([this,this.AAt],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.AK7(this);this.DH(this);},CB:function(G
){A.pe([this,this.MG],this);},Fb:function(G){var B;this.Ay.Mu((B=this.Y.Da(0x1))[
3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Bt[1]);},AAt:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6D();A._GetAutoObject(A.Device.Device
).Ao.Bl(Be);A.pe([this,this.MG],this);},Es:function(G){A._GetAutoObject(C.A1).Fs(
);},A3h:function(G){A._GetAutoObject(C.A1).BU(95);},DH:function(G){this.N.CZ(A.aaL(
A.ach.EX));this.N.CA=[this,this.Es];this.N.Cq(A.aaL(A.ach.ADq));if(!A._GetAutoObject(
A.Device.Device).Ao.Filter||A._GetAutoObject(A.Device.Helper).Aq0(A._GetAutoObject(
A.Device.Device).Ao.Filter)){this.N.Ck=null;this.N.I0.Do(100);}else{this.N.Ck=[this
,this.AAt];this.N.I0.Do(255);}this.N.C5(A.aaL(A.ach.Aeo));this.N.Cg=[this,this.A3h
];},MG:function(s){this.DH(s);},AK7:function(G){A.ab5("%s",BrX);},BF3:function(s
){this.AK7(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DX={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sa;this.N.Ar(false);this.N.Z(true);this.Dn(C.
Abj);this.Ay.H(Ip);this.DX.A3(0x3F);this.DX.H(E8);this.DX.L(A.jb.CI);this.Y.H(Lt
);this.Y.JN(9);this.J(this.Ay,0);this.J(this.DX,0);this.J(this.Y,0);this.Y.Ej=[this
,this.Fb];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DX._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DX._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AN2={X_:null,X9:null,XW:null
,TD:null,DH:function(G){C.Sa.DH.call(this,G);if(this.AV===this.TD){this.N.Cq(null
);this.N.Ck=null;this.N.C5(null);this.N.Cg=null;}},AK7:function(G){if(this.AV===
this.TD)this.Dn(C.AO2);else this.Dn(C.Abj);},By1:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AP1);case 1:return A.
aaL(A.ach.AP2);default:A.ab5("%s%s",BrY,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},By2:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AP3);case 1:return A.aaL(A.ach.AP4);default:
A.ab5("%s%s",AIp,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ic:function(G){var Cx=(C.Fg.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.
X_)A._GetAutoObject(C.A1).BU(75);else if(Cx===this.X9)A._GetAutoObject(C.A1).BU(
64);else if(Cx===this.XW)A._GetAutoObject(C.A1).BU(66);else if(Cx===this.TD)A._GetAutoObject(
C.A1).BU(67);},_Init:function(aArg){C.Sa._Init.call(this,aArg);C.Fg._Init.call(this.
X_={I:this},0);C.Fg._Init.call(this.X9={I:this},0);C.Fg._Init.call(this.XW={I:this
},0);C.Fg._Init.call(this.TD={I:this},0);this.__proto__=C.AN2;this.X_.H(P2);this.
X_.Aj(true);this.X_.T(A.aaR(A.acf.Afj));this.X9.H(JX);this.X9.Aj(true);this.X9.T(
A.aaR(A.acf.Temperature));this.XW.H(BrZ);this.XW.Aj(true);this.XW.T(A.aaR(A.acf.
Rating));this.TD.H(Br0);this.TD.Aj(true);this.TD.T(A.aaR(A.acf.A7H));this.J(this.
X_,0);this.J(this.X9,0);this.J(this.XW,0);this.J(this.TD,0);this.X_.AR=[this,this.
Ic];this.X_.DD(this.By2());this.X9.AR=[this,this.Ic];this.X9.DD(this.By1());this.
XW.AR=[this,this.Ic];this.XW.DD(A.aaL(A.ach.APZ));this.TD.AR=[this,this.Ic];this.
TD.DD(A.aaL(A.ach.AP0));},_Done:function(){this.__proto__=C.Sa;this.X_._Done();this.
X9._Done();this.XW._Done();this.TD._Done();C.Sa._Done.call(this);},_ReInit:function(
){C.Sa._ReInit.call(this);this.X_._ReInit();this.X9._ReInit();this.XW._ReInit();
this.TD._ReInit();this.X_.T(A.aaR(A.acf.Afj));this.X9.T(A.aaR(A.acf.Temperature)
);this.XW.T(A.aaR(A.acf.Rating));this.TD.T(A.aaR(A.acf.A7H));},_Mark:function(D){
var B;C.Sa._Mark.call(this,D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.X9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AN3={Vy:null,XY:null,X$:null,AK7:function(G){this.Dn(C.Avk);},By5:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQD
);case 1:return A.aaL(A.ach.AQE);default:A.ab5("%s%s",AIp,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ic:function(G){var Cx=(C.Fg.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.Vy)A._GetAutoObject(C.A1).BU(77);else if(Cx===
this.X$)A._GetAutoObject(C.A1).BU(65);else if(Cx===this.XY)A._GetAutoObject(C.A1
).BU(76);},By4:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.APO);case 1:return A.aaL(A.ach.APP);default:A.ab5("%s%s",AIp
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},By6:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQF
);case 1:return A.aaL(A.ach.AQG);default:A.ab5("%s%s",AIp,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sa._Init.call(
this,aArg);C.Fg._Init.call(this.Vy={I:this},0);C.Fg._Init.call(this.XY={I:this},
0);C.Fg._Init.call(this.X$={I:this},0);this.__proto__=C.AN3;this.Vy.H(P2);this.Vy.
Aj(true);this.Vy.T(A.aaR(A.acf.A$S));this.XY.H(AZN);this.XY.Aj(true);this.XY.T(A.
aaR(A.acf.A5i));this.X$.H(N$);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.A$V));this.
J(this.Vy,0);this.J(this.XY,0);this.J(this.X$,0);this.Vy.AR=[this,this.Ic];this.
Vy.DD(this.By5());this.Vy.AbX(A.aaL(A.ach.NP));this.XY.AR=[this,this.Ic];this.XY.
DD(this.By4());this.X$.AR=[this,this.Ic];this.X$.DD(this.By6());},_Done:function(
){this.__proto__=C.Sa;this.Vy._Done();this.XY._Done();this.X$._Done();C.Sa._Done.
call(this);},_ReInit:function(){C.Sa._ReInit.call(this);this.Vy._ReInit();this.XY.
_ReInit();this.X$._ReInit();this.Vy.T(A.aaR(A.acf.A$S));this.XY.T(A.aaR(A.acf.A5i
));this.X$.T(A.aaR(A.acf.A$V));},_Mark:function(D){var B;C.Sa._Mark.call(this,D);
if((B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AN6={BdC:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZF(0));},_Init:function(aArg){C.Aqx._Init.call(this,aArg);this.
__proto__=C.AN6;this.AeY(A.aaR(A.acf.A73));},_ReInit:function(){C.Aqx._ReInit.call(
this);this.AeY(A.aaR(A.acf.A73));},_className:"Application::EvaluationWeightsRecentScreen"
};C.ANZ={Ah9:null,Abm:null,UG:null,AaM:null,Pi:null,Ajg:null,Agm:null,Ajh:null,Agn:
null,Ay:null,AaG:null,Ac4:0,Apk:0,Dz:function(G){switch(this.Cp.CN){case 4:{if(this.
IX.Fi())return;var Qq=this.Y.Bt[1]+80;this.Y.FX([this.Y.Bt[0],Qq]);this.Y.Vm(null
,null);}break;case 5:{if(this.IX.Fi())return;var Qq=this.Y.Bt[1]-80;this.Y.FX([this.
Y.Bt[0],Qq]);this.Y.Vm(null,null);}break;default:C.Ft.Dz.call(this,G);}},ApX:function(
L1,AcN){if(!L1)return;var Fq=A._NewObject(A.Device.Filter,0);var HT=A._NewObject(
A.Device.Int32FilterCriterion,0);HT.Initialize(1,0,AcN,true);Fq.CW(HT);var Ac0=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac0.Initialize(8,2,0,true);Fq.CW(Ac0
);L1.Bl(Fq);},Ail:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq1()){this.
Ah9.Os(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Ay6=this.ByZ(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaG.Set(Ay6,this.AaG.Get(Ay6)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Ac4++;this.Apk=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Ft.Ail.call(
this,G);},Aai:function(G){if(this.Ac4>1)A._GetAutoObject(A.Device.Device).A_(56,
true,this.Ac4.toFixed(),0,null);if(this.Ac4===1)A._GetAutoObject(A.Device.Device
).A_(53,true,this.Apk.toFixed(),0,null);if(this.Ah9.AY>0)this.UG.T(((((((A._GetAutoObject(
A.Device.Converter).AxN(this.Ah9.AjH()|0,1)+Ayr)+A._GetAutoObject(A.Device.Converter
).AxN(this.Ah9.AqI()|0,1))+CO)+A._GetAutoObject(A.acj.DU).AfR())+Ays)+this.Ah9.AY.
toFixed())+O3);else this.UG.T(A.aaR(A.acf.Unknown));var RE=this.AaG.AmN();var P;
for(P=0;P<this.AaG.MC;P++){var Bf=this.Bzi(P);if(!!Bf){var CD=this.AaG.Get(P);Bf.
BlH(CD);if(!RE)Bf.A_g(0);else Bf.A_g(Math.round((CD*100)/RE)|0);Bf.Bnn(this.Bzh(
P,A._GetAutoObject(A.Device.Device).MassUnit));}}var Ac9=false;if(this.Ah9.AY>0)
Ac9=true;this.IX.Z(!Ac9);C.Ft.Aai.call(this,G);},Ade:function(G){this.Ah9.Ya();this.
AaG.Hf();this.Ac4=0;this.Apk=0;C.Ft.Ade.call(this,G);},Bzi:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Pi;break;case 1:Bf=this.Ajg;break;case 2:Bf=this.
Agm;break;case 3:Bf=this.Ajh;break;case 4:Bf=this.Agn;break;default:throw new Error(
Ayt+aIndex.toFixed());}return Bf;},Bzh:function(aIndex,AoA){var B;var Tn=A.jV;switch(
AoA){case 0:{switch(aIndex){case 0:Tn=Br1;break;case 1:Tn=Br2;break;case 2:Tn=Br3;
break;case 3:Tn=Br4;break;case 4:Tn=Br5;break;default:throw new Error(Ayt+aIndex.
toFixed());}Tn=Tn+(CO+A.aaR(A.acf.AzX));}break;case 1:{switch(aIndex){case 0:Tn=
Br6;break;case 1:Tn=Br7;break;case 2:Tn=Br8;break;case 3:Tn=Br9;break;case 4:Tn=
Br_;break;default:throw new Error(Ayt+aIndex.toFixed());}Tn=Tn+(CO+A.aaR(A.acf.A7o
));}break;default:A.ab5("%s%e",Bam,AoA);}return Tn;},By0:function(AIL,AoA){var Ac1=
0;switch(AoA){case 0:switch(AIL){case 0:Ac1=35000;break;case 1:Ac1=40000;break;case
2:Ac1=45000;break;case 3:Ac1=50000;break;case 4:Ac1=2147483647;break;default:throw new
Error(Ayt+AIL.toFixed());}break;case 1:switch(AIL){case 0:Ac1=36287;break;case 1:
Ac1=40823;break;case 2:Ac1=45359;break;case 3:Ac1=49895;break;case 4:Ac1=2147483647;
break;default:throw new Error(Ayt+AIL.toFixed());}break;default:A.ab5("%s%e",Bam
,AoA);}return Ac1;},ByZ:function(A7,AoA){var Ay6=0;var P;for(P=0;P<this.AaG.MC;P++
)if(A7<this.By0(P,AoA)){Ay6=P;break;}return Ay6;},Fb:function(G){var B;this.Ay.Mu((
B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Bt[
1]);},_Init:function(aArg){C.Ft._Init.call(this,aArg);C.Agk._Init.call(this.Abm={
I:this},0);C.IA._Init.call(this.UG={I:this},0);C.AaM._Init.call(this.AaM={I:this
},0);C.Pi._Init.call(this.Pi={I:this},0);C.Pi._Init.call(this.Ajg={I:this},0);C.
Pi._Init.call(this.Agm={I:this},0);C.Pi._Init.call(this.Ajh={I:this},0);C.Pi._Init.
call(this.Agn={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaG={I:this},0);this.__proto__=C.ANZ;this.Dn(C.Avk);this.Ako(A.aaR(
A.acf.A6e));this.AeY(A.aaR(A.acf.A7W));this.Abm.H(As3);this.Abm.Aj(true);this.Abm.
T(A.aaR(A.acf.A4X));this.Abm.Bj(false);this.Abm.Km(5);this.UG.H(AZJ);this.UG.Aj(
true);this.UG.T(A.jV);this.UG.Bj(true);this.UG.Km(5);this.AaM.H(AsZ);this.AaM.Aj(
true);this.Pi.H(As0);this.Pi.Aj(true);this.Pi.Bj(true);this.Ajg.H(As1);this.Ajg.
Aj(true);this.Agm.H(Ayk);this.Agm.Aj(true);this.Agm.Bj(true);this.Ajh.H(AZK);this.
Ajh.Aj(true);this.Agn.H(Aop);this.Agn.Aj(true);this.Agn.Bj(true);this.Ay.H(Ip);this.
AaG.Zn(5);this.J(this.Abm,-1);this.J(this.UG,-1);this.J(this.AaM,-1);this.J(this.
Pi,-1);this.J(this.Ajg,-1);this.J(this.Agm,-1);this.J(this.Ajh,-1);this.J(this.Agn
,-1);this.J(this.Ay,-1);this.Y.Ej=[this,this.Fb];this.Ah9=A._NewObject(C.AvH,0);
this.UG.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Ft;this.Abm._Done(
);this.UG._Done();this.AaM._Done();this.Pi._Done();this.Ajg._Done();this.Agm._Done(
);this.Ajh._Done();this.Agn._Done();this.Ay._Done();this.AaG._Done();C.Ft._Done.
call(this);},_ReInit:function(){C.Ft._ReInit.call(this);this.Abm._ReInit();this.
UG._ReInit();this.AaM._ReInit();this.Pi._ReInit();this.Ajg._ReInit();this.Agm._ReInit(
);this.Ajh._ReInit();this.Agn._ReInit();this.Ay._ReInit();this.AaG._ReInit();this.
Ako(A.aaR(A.acf.A6e));this.AeY(A.aaR(A.acf.A7W));this.Abm.T(A.aaR(A.acf.A4X));this.
UG.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ft._Mark.call(this,D);if((B=this.
Ah9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaG)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaM={H6:null,Gm:null
,Bk:function(aSize){C.IA.Bk.call(this,aSize);this.H6.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gm.H([this.H6.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IA.Ai.call(this,Ae);this.H6.L(this.V.AQ);this.Gm.L(this.V.AQ);},_Init:
function(aArg){C.IA._Init.call(this,aArg);A.acg.Text._Init.call(this.H6={I:this}
,0);A.acg.Text._Init.call(this.Gm={I:this},0);this.__proto__=C.AaM;this.T(A.aaR(
A.acf.AG3));this.H6.H(Br$);this.H6.KR(true);this.H6.R(A.aaR(A.acf.Aql));this.H6.
L(A.jb.Text);this.Gm.H(Ban);this.Gm.R(Afu);this.Gm.L(A.jb.Text);this.J(this.H6,0
);this.J(this.Gm,0);this.V.S(A.aaL(A.fl.Ih));this.H6.S(A.aaL(A.fl.Ih));this.Gm.S(
A.aaL(A.fl.Kh));},_Done:function(){this.__proto__=C.IA;this.H6._Done();this.Gm._Done(
);C.IA._Done.call(this);},_ReInit:function(){C.IA._ReInit.call(this);this.H6._ReInit(
);this.Gm._ReInit();this.T(A.aaR(A.acf.AG3));this.H6.R(A.aaR(A.acf.Aql));this.V.
S(A.aaL(A.fl.Ih));this.H6.S(A.aaL(A.fl.Ih));this.Gm.S(A.aaL(A.fl.Kh));},_Mark:function(
D){var B;C.IA._Mark.call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pi={AP:null,A$:null,PV:null,H6:null,Gm:null,A$U:A.jV,Aql:0,A_N:0,Bk:function(
aSize){C.IA.Bk.call(this,aSize);this.PV.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.PV.M[2]-1,0,this.PV.M[2]+1,aSize[1]]);this.H6.H([this.PV.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A$.H([this.H6.M[2]-1,0,this.H6.M[2]+1,aSize[
1]]);this.Gm.H([this.H6.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IA.Ai.call(
this,Ae);this.PV.L(this.V.AQ);this.H6.L(this.V.AQ);this.Gm.L(this.V.AQ);},Bnn:function(
E){if(this.A$U===E)return;this.A$U=E;this.PV.R(E);},BlH:function(E){if(this.Aql===
E)return;this.Aql=E;this.H6.R(E.toFixed());},A_g:function(E){if(this.A_N===E)return;
this.A_N=E;this.Gm.R(E.toFixed()+Ak2);},_Init:function(aArg){C.IA._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.PV={I:this},0);A.acg.Text._Init.call(this.H6={I:
this},0);A.acg.Text._Init.call(this.Gm={I:this},0);this.__proto__=C.Pi;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.PV.H(Bsa);this.PV.R(A.aaR(A.acf.AG3));this.PV.L(
A.jb.Text);this.H6.R(US);this.H6.L(A.jb.Text);this.Gm.R(Bsb);this.Gm.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A$,0);this.J(this.PV,0);this.J(this.H6,0);this.J(
this.Gm,0);this.PV.S(A.aaL(A.fl.Af));this.H6.S(A.aaL(A.fl.Af));this.Gm.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IA;this.AP._Done();this.A$._Done();this.
PV._Done();this.H6._Done();this.Gm._Done();C.IA._Done.call(this);},_ReInit:function(
){C.IA._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.PV._ReInit();
this.H6._ReInit();this.Gm._ReInit();this.PV.R(A.aaR(A.acf.AG3));this.PV.S(A.aaL(
A.fl.Af));this.H6.S(A.aaL(A.fl.Af));this.Gm.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IA._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMj={AKz:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mo();A._GetAutoObject(A.Device.
Device).Ao.Bl(Be);},_Init:function(aArg){C.Aml._Init.call(this,aArg);this.__proto__=
C.AMj;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARe={RW:null,
R2:null,RU:null,RZ:null,Pk:null,RY:null,AK5:function(G){A.pe([this,this.BB8],this
);A.pe([this,this.BBX],this);A.pe([this,this.BBT],this);A.pe([this,this.A4b],this
);A.pe([this,this.BB0],this);A.pe([this,this.BBY],this);},Ic:function(G){var Cx=(
C.QP.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.R2)A._GetAutoObject(C.A1
).BU(20);else if(Cx===this.Pk)A._GetAutoObject(C.A1).BU(14);else if(Cx===this.RW
)A._GetAutoObject(C.A1).BU(12);else if(Cx===this.RZ)A._GetAutoObject(C.A1).BU(47
);else if(Cx===this.RU)A._GetAutoObject(C.A1).BU(58);else if(Cx===this.RY)A._GetAutoObject(
C.A1).BU(69);},BBX:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mo();var
Azb=A._NewObject(A.Device.BoolFilterCriterion,0);Azb.Initialize(9,0,true,true);Be.
CW(Azb);A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.Pk.Zl(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},BB8:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mo();var ABi=A._NewObject(A.Device.BoolFilterCriterion,0);ABi.Initialize(
12,0,true,true);Be.CW(ABi);A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.R2.Zl(
A._GetAutoObject(A.Device.Device).Ao.Cd().toFixed());},BBT:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mo();var AyT=A._NewObject(A.Device.BoolFilterCriterion
,0);AyT.Initialize(8,0,true,true);Be.CW(AyT);A._GetAutoObject(A.Device.Device).Ao.
Bl(Be);this.RW.Zl(A._GetAutoObject(A.Device.Device).Ao.Cd().toFixed());},A4b:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6x(A._GetAutoObject(A.Device.Device
).ABo);A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RU.Zl(A._GetAutoObject(A.
Device.Device).Ao.Cd().toFixed());},BB0:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6G();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RZ.Zl(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},BBY:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ACK();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RY.Zl(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},_Init:function(aArg){C.T4._Init.call(this,
aArg);C.QP._Init.call(this.RW={I:this},0);C.QP._Init.call(this.R2={I:this},0);C.
QP._Init.call(this.RU={I:this},0);C.QP._Init.call(this.RZ={I:this},0);C.QP._Init.
call(this.Pk={I:this},0);C.QP._Init.call(this.RY={I:this},0);this.__proto__=C.ARe;
this.RW.H(P2);this.RW.Aj(true);this.RW.T(A.aaR(A.acf.Alarm));this.RW.AbU(true);this.
R2.H(AZN);this.R2.Aj(true);this.R2.T(A.aaR(A.acf.ArY));this.R2.AbU(true);this.RU.
H(N$);this.RU.Aj(true);this.RU.T(A.aaR(A.acf.ActionList));this.RU.AbU(true);this.
RZ.H(P3);this.RZ.Aj(true);this.RZ.T(A.aaR(A.acf.AOt));this.RZ.AbU(true);this.Pk.
H(S2);this.Pk.Ar(false);this.Pk.Aj(false);this.Pk.Z(false);this.Pk.T(A.aaR(A.acf.
AB4));this.Pk.AbU(true);this.RY.H(UM);this.RY.Aj(true);this.RY.T(A.aaR(A.acf.A6a
));this.RY.AbU(true);this.J(this.RW,-1);this.J(this.R2,-1);this.J(this.RU,-1);this.
J(this.RZ,-1);this.J(this.Pk,-1);this.J(this.RY,-1);this.RW.AR=[this,this.AcK];this.
RW.DD(A.aaL(A.ach.ADg));this.RW.AbX(A.aaL(A.ach.NP));this.R2.AR=[this,this.AcK];
this.R2.DD(A.aaL(A.ach.AQC));this.R2.AbX(A.aaL(A.ach.NP));this.RU.AR=[this,this.
AcK];this.RU.DD(A.aaL(A.ach.APA));this.RU.AbX(A.aaL(A.ach.NP));this.RZ.AR=[this,
this.AcK];this.RZ.DD(A.aaL(A.ach.AP6));this.RZ.AbX(A.aaL(A.ach.NP));this.Pk.AR=[
this,this.AcK];this.Pk.DD(A.aaL(A.ach.ADg));this.Pk.AbX(A.aaL(A.ach.NP));this.RY.
AR=[this,this.AcK];this.RY.DD(A.aaL(A.ach.APW));this.RY.AbX(A.aaL(A.ach.NP));},_Done:
function(){this.__proto__=C.T4;this.RW._Done();this.R2._Done();this.RU._Done();this.
RZ._Done();this.Pk._Done();this.RY._Done();C.T4._Done.call(this);},_ReInit:function(
){C.T4._ReInit.call(this);this.RW._ReInit();this.R2._ReInit();this.RU._ReInit();
this.RZ._ReInit();this.Pk._ReInit();this.RY._ReInit();this.RW.T(A.aaR(A.acf.Alarm
));this.R2.T(A.aaR(A.acf.ArY));this.RU.T(A.aaR(A.acf.ActionList));this.RZ.T(A.aaR(
A.acf.AOt));this.Pk.T(A.aaR(A.acf.AB4));this.RY.T(A.aaR(A.acf.A6a));},_Mark:function(
D){var B;C.T4._Mark.call(this,D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARd={R3:null,Vx:null,R0:null,RX:null,R1:null,AK5:function(G){A.pe([this,this.
BBU],this);A.pe([this,this.BB4],this);A.pe([this,this.BB5],this);A.pe([this,this.
BB9],this);A.pe([this,this.BB6],this);},Ic:function(G){var Cx=(C.QP.isPrototypeOf(
G)?G:null);if(!Cx)return;if(Cx===this.Vx)A._GetAutoObject(C.A1).BU(102);if(Cx===
this.RX)A._GetAutoObject(C.A1).BU(85);if(Cx===this.R0)A._GetAutoObject(C.A1).BU(
80);if(Cx===this.R1)A._GetAutoObject(C.A1).BU(51);if(Cx===this.R3)A._GetAutoObject(
C.A1).BU(96);},BB5:function(G){var Be=A._GetAutoObject(A.Device.Helper).ACM();A.
_GetAutoObject(A.Device.Device).Ao.Bl(Be);this.R1.Zl(A._GetAutoObject(A.Device.Device
).Ao.Cd().toFixed());},BB9:function(G){var Be=A._GetAutoObject(A.Device.Helper).
A6Q();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.R3.Zl(A._GetAutoObject(A.
Device.Device).Ao.Cd().toFixed());},BB4:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6L();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.R0.Zl(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},BBU:function(G){var Be=A._GetAutoObject(A.
Device.Helper).AOu();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.RX.Zl(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},BB6:function(G){var Be=A._GetAutoObject(A.
Device.Helper).AOF();A._GetAutoObject(A.Device.Device).Ao.Bl(Be);this.Vx.Zl(A._GetAutoObject(
A.Device.Device).Ao.Cd().toFixed());},_Init:function(aArg){C.T4._Init.call(this,
aArg);C.QP._Init.call(this.R3={I:this},0);C.QP._Init.call(this.Vx={I:this},0);C.
QP._Init.call(this.R0={I:this},0);C.QP._Init.call(this.RX={I:this},0);C.QP._Init.
call(this.R1={I:this},0);this.__proto__=C.ARd;this.R3.H(Bsc);this.R3.Aj(true);this.
R3.T(A.aaR(A.acf.A7N));this.R3.AbU(true);this.Vx.H(Bsd);this.Vx.Aj(true);this.Vx.
T(A.aaR(A.acf.AF4));this.R0.H(Bse);this.R0.Aj(true);this.R0.T(A.aaR(A.acf.A7Q));
this.R0.AbU(true);this.RX.H(Bsf);this.RX.Aj(true);this.RX.T(A.aaR(A.acf.ABJ));this.
RX.AbU(true);this.R1.H(Bsg);this.R1.Aj(true);this.R1.T(A.aaR(A.acf.ARR));this.R1.
AbU(true);this.J(this.R3,-1);this.J(this.Vx,-1);this.J(this.R0,-1);this.J(this.RX
,-1);this.J(this.R1,-1);this.R3.AR=[this,this.AcK];this.R3.DD(A.aaL(A.ach.AQj));
this.R3.AbX(A.aaL(A.ach.NP));this.Vx.AR=[this,this.AcK];this.Vx.DD(A.aaL(A.ach.ADy
));this.R0.AR=[this,this.AcK];this.R0.DD(A.aaL(A.ach.AQl));this.R0.AbX(A.aaL(A.ach.
NP));this.RX.AR=[this,this.AcK];this.RX.DD(A.aaL(A.ach.APR));this.RX.AbX(A.aaL(A.
ach.NP));this.R1.AR=[this,this.AcK];this.R1.DD(A.aaL(A.ach.AQn));this.R1.AbX(A.aaL(
A.ach.NP));},_Done:function(){this.__proto__=C.T4;this.R3._Done();this.Vx._Done(
);this.R0._Done();this.RX._Done();this.R1._Done();C.T4._Done.call(this);},_ReInit:
function(){C.T4._ReInit.call(this);this.R3._ReInit();this.Vx._ReInit();this.R0._ReInit(
);this.RX._ReInit();this.R1._ReInit();this.R3.T(A.aaR(A.acf.A7N));this.Vx.T(A.aaR(
A.acf.AF4));this.R0.T(A.aaR(A.acf.A7Q));this.RX.T(A.aaR(A.acf.ABJ));this.R1.T(A.
aaR(A.acf.ARR));},_Mark:function(D){var B;C.T4._Mark.call(this,D);if((B=this.R3).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Vx)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.R0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsIdManagementScreen"
};C.ARP={Wn:function(G){this.Agi();this.ALR();this.A4B(A.aaR(A.acf.A7r),[this,this.
Bm5],131072);this.A4B(A.aaR(A.acf.A7q),[this,this.Bm4],16384);A._GetAutoObject(C.
BN).FA();A._GetAutoObject(C.BN).Nz(A.aaR(A.acf.ANu)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dt(6);},Dz:function(G){},Abh:function(){return C.Amq;},Abi:function(
){return C.AmR;},Q5:function(G){A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(
A.Device.Helper).A6L());},HM:function(G){var F;C.RG.HM.call(this,G);if(this.Aj9(
)===false){if(!!this.FE&&((F=this.FE,F[1].call(F[0]))===16)){this.N.Cq(A.aaL(A.ach.
AQv));this.N.Ck=[this,this.A5_];}else{this.N.Cq(A.aaL(A.ach.AQd));this.N.Ck=[this
,this.A57];}this.N.FH(A.jV);}this.N.OL(false);this.N.OM(false);},Af6:function(){
A._GetAutoObject(C.A1).BU(81);},Af5:function(){A._GetAutoObject(C.A1).BU(82);},Bm4:
function(G){this.AGr(16384);},Bm5:function(G){this.AGr(131072);},_Init:function(
aArg){C.RG._Init.call(this,aArg);this.__proto__=C.ARP;this.Dn(C.APe);this.Dx(A.aaR(
A.acf.A7U));this.ASX(A._GetAutoObject(C.AvU));},_ReInit:function(){C.RG._ReInit.
call(this);this.Dx(A.aaR(A.acf.A7U));},_className:"Application::NoNaisIdListScreen"
};C.ARO={_Init:function(aArg){C.IW._Init.call(this,aArg);this.__proto__=C.ARO;this.
Mr.Ar(false);this.Mr.Aj(false);this.Mr.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.ARN={_Init:function(aArg){C.GC._Init.call(this,aArg);this.__proto__=C.ARN;this.
N.B2(A.aaR(A.acf.A48));},_ReInit:function(){C.GC._ReInit.call(this);this.N.B2(A.
aaR(A.acf.A48));},_className:"Application::NoNaisIdListActionsScreen"};C.APe={D3:
function(G){C.Ki.D3.call(this,G);this.Dc.Aw(A._GetAutoObject(A.Device.Converter).
AdM(10));},_Init:function(aArg){C.Ki._Init.call(this,aArg);this.__proto__=C.APe;
},_className:"Application::HeaderNoNaisIdListFilter"};C.Q3={Bfx:false,CS:function(
){A.pe([this,this.AyE],this);},Dz:function(G){},CB:function(G){C.GS.CB.call(this
,G);if(this.Bfx&&(A._GetAutoObject(A.Device.Device).Ur>0))A.pe([this,this.AIs],this
);},AlQ:function(G){this.A56(this);},Af6:function(){A._GetAutoObject(C.A1).BU(83
);},Af5:function(){A._GetAutoObject(C.A1).BU(84);},ARX:function(G){throw new Error(
Aoq);},BaH:function(s){this.ARX(s);},ARY:function(G){throw new Error(Aoq);},BaI:
function(s){this.ARY(s);},AR3:function(G){throw new Error(Aoq);},AIs:function(s){
this.AR3(s);},BeK:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!At&&(At.PopupState===7)){this.Bfx=true;A._GetAutoObject(C.A1).BU(87);}},Af4:
function(G){var B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(
At.PopupState===5))A.z$([this,this.Xv],[B=A._GetAutoObject(A.Device.Device),B.Wm
,B.W8],0);},Xv:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhH===3){A.
_GetAutoObject(A.Device.Device).A_(74,false,A.jV,0,[this,this.Af4]);A.z$([this,this.
Xv],[B=A._GetAutoObject(A.Device.Device),B.Wm,B.W8],0);A.pe([this,this.AIs],this
);}},AJn:function(){throw new Error(Aoq);},A7$:function(G){A._GetAutoObject(A.Device.
Device).Dt(0);this.A55(this);},Bny:function(G){A._GetAutoObject(A.Device.Device).
Dt(0);this.BhU(this);},_Init:function(aArg){C.GS._Init.call(this,aArg);this.__proto__=
C.Q3;this.Dx(A.aaR(A.acf.A71));},_ReInit:function(){C.GS._ReInit.call(this);this.
Dx(A.aaR(A.acf.A71));this.CS();},_className:"Application::RegistrationsListScreen"
};C.AT8={_Init:function(aArg){C.IW._Init.call(this,aArg);this.__proto__=C.AT8;},
_className:"Application::RegistrationsListFilterScreen"};C.AT7={_Init:function(aArg
){C.GC._Init.call(this,aArg);this.__proto__=C.AT7;this.N.B2(A.aaR(A.acf.A4_));},
_ReInit:function(){C.GC._ReInit.call(this);this.N.B2(A.aaR(A.acf.A4_));},_className:
"Application::RegistrationsListActionsScreen"};C.Aeh={_Init:function(aArg){C.Ym.
_Init.call(this,aArg);this.__proto__=C.Aeh;this.Text.H(Bsh);this.Text.R(A.jV);this.
Text.A8(0x12);},_className:"Application::HeaderRegistrationsList"};C.ABQ={KB:0,AP:
null,A$:null,D_:null,IF:null,SP:null,Gs:null,Md:0,K8:0,Init:function(aArg){},Bk:
function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.IF.H([this.V.M[2],0,this.V.M[2]+(((aSize[0]*15
)/100)|0),aSize[1]]);this.A$.H([this.IF.M[2]-1,0,this.IF.M[2]+1,aSize[1]]);this.
SP.H([this.IF.M[2],0,this.IF.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.D_.H([
this.SP.M[2]-1,0,this.SP.M[2]+1,aSize[1]]);this.Gs.H([this.SP.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IF.L(this.V.AQ);this.Gs.L(this.
V.AQ);this.SP.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).AjW(this.K8)){this.
V.S(A.aaL(A.fl.Ho));this.T(Bao);this.SP.R(Rj);}else{this.V.S(A.aaL(A.fl.Af));this.
T(this.Md.toFixed());this.SP.R(A._GetAutoObject(A.Device.Helper).Sc(this.KB,0,5).
toFixed());}},Ce:function(Ad){if(!this.AX)return;this.Hk=Ad;if(!!this.AX){this.Md=
this.AX.CE(Ad,1);this.K8=this.AX.AOJ(Ad,34);var AtE=this.AX.AOA(Ad,7);this.KB=this.
AX.KL(Ad,26);var Ay0=this.AX.HD(Ad,4);var AfE=A._GetAutoObject(A.Device.Helper).
MN(Ay0,A._GetAutoObject(A.Device.Helper).Ds());this.IF.Aw(A._GetAutoObject(A.Device.
Converter).AmK(AtE));if(AfE<100)this.Gs.R((AfE.toFixed()+CO)+A.aaR(A.acf.ALF));else
this.Gs.R(A._GetAutoObject(A.acj.KI).ACH(Ay0,A._GetAutoObject(A.Device.Helper).Ds(
),AH_));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.
call(this.D_={I:this},0);A.acg.Am._Init.call(this.IF={I:this},0);A.acg.Text._Init.
call(this.SP={I:this},0);C.CG._Init.call(this.Gs={I:this},0);this.__proto__=C.ABQ;
this.AP.H(Aoj);this.AP.L(A.jb.Bc);this.A$.H(Aok);this.A$.L(A.jb.Bc);this.D_.H(AZO
);this.D_.L(A.jb.Bc);this.IF.H(Bap);this.IF.L(A.jb.Text);this.SP.H(Ayg);this.Gs.
H(AZP);this.J(this.AP,0);this.J(this.A$,0);this.J(this.D_,0);this.J(this.IF,0);this.
J(this.SP,0);this.J(this.Gs,0);this.SP.S(A.aaL(A.fl.Af));this.Gs.S(A.aaL(A.fl.Af
));this.Gs.A2(A.aaL(A.fl.Ak));this.Gs.Ct(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:
function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.D_._Done();this.
IF._Done();this.SP._Done();this.Gs._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.D_._ReInit();
this.IF._ReInit();this.SP._ReInit();this.Gs._ReInit();this.SP.S(A.aaL(A.fl.Af));
this.Gs.S(A.aaL(A.fl.Af));this.Gs.A2(A.aaL(A.fl.Ak));this.Gs.Ct(A.aaL(A.fl.Bi));
},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListBirthRegistrationItem"};C.AC8={AjT:null,Pw:null,IZ:null,_Init:
function(aArg){C.Db._Init.call(this,aArg);A.acg.Am._Init.call(this.AjT={I:this},
0);A.acg.Am._Init.call(this.Pw={I:this},0);A.acg.Am._Init.call(this.IZ={I:this},
0);this.__proto__=C.AC8;this.AjT.H(Bsi);this.AjT.L(A.jb.Text);this.Pw.H(Bsj);this.
Pw.L(A.jb.Text);this.IZ.H(Bag);this.IZ.L(A.jb.Text);this.J(this.AjT,0);this.J(this.
Pw,0);this.J(this.IZ,0);this.AjT.Aw(A.aaL(A.ach.ADu));this.Pw.Aw(A.aaL(A.ach.Avv
));this.IZ.Aw(A.aaL(A.ach.Avq));},_Done:function(){this.__proto__=C.Db;this.AjT.
_Done();this.Pw._Done();this.IZ._Done();C.Db._Done.call(this);},_ReInit:function(
){C.Db._ReInit.call(this);this.AjT._ReInit();this.Pw._ReInit();this.IZ._ReInit();
},_Mark:function(D){var B;C.Db._Mark.call(this,D);if((B=this.AjT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.APg={IL:null
,AgM:null,HN:null,Bc:null,My:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2,Init:function(
aArg){var B;A.zX([this,this.D3],[B=A._GetAutoObject(A.Device.Helper).W,B.A8Z,B.A_k
],0);A.zX([this,this.D3],[B=A._GetAutoObject(A.Device.Helper).W,B.Wl,B.JO],0);A.
zX([this,this.D3],[B=A._GetAutoObject(A.Device.Helper).W,B.Arl,B.Ul],0);A.zV([this
,this.D3],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.D3],this);},Dd:
function(E){C.BS.Dd.call(this,E);this.IL.L(E);this.AgM.L(E);this.HN.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HN.R(A.aaR(A.
acf.Ae3));else this.HN.R(((A.aaR(A.acf.GG)+A.aaR(A.acf.Colon))+CO)+E.toFixed());
},D3:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqK()){this.AwP(((A._GetAutoObject(
A.Device.Helper).W.CK+1).toFixed()+A$4)+A._GetAutoObject(A.Device.Device).Ao.Cd(
).toFixed());this.JO(A._GetAutoObject(A.Device.Helper).W.Gender);this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nd(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts);}else{this.AwP(A$5);this.JO(2);this.OnSetAnimalId(-1);this.
Nd(0);}},JO:function(E){if(this.Gender===E)return;this.Gender=E;this.AgM.Aw(A._GetAutoObject(
A.Device.Converter).AmK(E));},AwP:function(E){if(this.My===E)return;this.My=E;this.
IL.R(E);},Nd:function(E){if(this.WhereAbouts===E)return;this.WhereAbouts=E;if(A.
_GetAutoObject(A.Device.Helper).AjW(E))this.HN.Z(false);else this.HN.Z(true);},_Init:
function(aArg){C.BS._Init.call(this,aArg);A.acg.Text._Init.call(this.IL={I:this}
,0);A.acg.Am._Init.call(this.AgM={I:this},0);A.acg.Text._Init.call(this.HN={I:this
},0);A.acg.DQ._Init.call(this.Bc={I:this},0);this.__proto__=C.APg;this.IL.H(A$6);
this.IL.Hs(2);this.IL.KR(true);this.IL.A8(0x12);this.IL.R(A$7);this.AgM.H(Bsk);this.
HN.H(Bsl);this.HN.A8(0x11);this.HN.R(A.aaR(A.acf.Ae3));this.Bc.DE(Aym);this.Bc.DR(
Ayn);this.Bc.L(A.jb.Bc);this.J(this.IL,0);this.J(this.AgM,0);this.J(this.HN,0);this.
J(this.Bc,0);this.IL.S(A.aaL(A.fl.Ak));this.AgM.Aw(A._GetAutoObject(A.Device.Converter
).AmK(2));this.HN.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BS;this.IL._Done();this.AgM._Done();this.HN._Done();this.Bc._Done();C.BS._Done.
call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.IL._ReInit();this.AgM.
_ReInit();this.HN._ReInit();this.Bc._ReInit();this.HN.R(A.aaR(A.acf.Ae3));this.IL.
S(A.aaL(A.fl.Ak));this.HN.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.
call(this,D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderRegistrationInfo"
};C.AaP={EaseOfDeliveryToString:null,AgD:null,Ce:function(G){C.NB.Ce.call(this,G
);var AJH=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;this.Kp(this.EaseOfDeliveryToString.
Ls(AJH));this.GU.R(this.AgD.Ad9(AJH).toFixed());},Dd:function(E){C.NB.Dd.call(this
,E);this.GU.L(E);},_Init:function(aArg){C.NB._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgD._Init.call(this.
AgD={I:this},0);this.__proto__=C.AaP;this.T(A.aaR(A.acf.Agv));},_Done:function(){
this.__proto__=C.NB;this.EaseOfDeliveryToString._Done();this.AgD._Done();C.NB._Done.
call(this);},_ReInit:function(){C.NB._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgD._ReInit();this.T(A.aaR(A.acf.Agv));},_Mark:function(D){var B;
C.NB._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XN={WhereAboutsToString:null,KX:null,Ce:function(G){C.NB.Ce.call(this,G);var
K8=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kp(this.WhereAboutsToString.
Ls(K8));this.GU.R(this.KX.Ad9(K8).toFixed());},Dd:function(E){C.NB.Dd.call(this,
E);this.GU.L(E);},_Init:function(aArg){C.NB._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KX._Init.call(this.KX={
I:this},0);this.__proto__=C.XN;this.T(A.aaR(A.acf.I_));},_Done:function(){this.__proto__=
C.NB;this.WhereAboutsToString._Done();this.KX._Done();C.NB._Done.call(this);},_ReInit:
function(){C.NB._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KX._ReInit(
);this.T(A.aaR(A.acf.I_));},_Mark:function(D){var B;C.NB._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RS={Cp:null,Y:null,Ay:null,Init:function(aArg){},CB:function(G){var B;C.D7.CB.
call(this,G);A.zX([this,this.Afv],[B=A._GetAutoObject(A.Device.Helper).W,B.QW,B.
OnSetId],0);A.zX([this,this.Afv],[B=A._GetAutoObject(A.Device.Helper),B.UT,B.UU]
,0);A.pe([this,this.Afv],this);},EY:function(G){var B;C.D7.EY.call(this,G);A.z$([
this,this.Afv],[B=A._GetAutoObject(A.Device.Helper).W,B.QW,B.OnSetId],0);A.z$([this
,this.Afv],[B=A._GetAutoObject(A.Device.Helper),B.UT,B.UU],0);},Fb:function(G){var
B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.
Mv(-this.Y.Bt[1]);},Dz:function(G){switch(this.Cp.CN){case 6:case 7:this.Cp.NE=true;
break;case 4:this.BfT(4);break;case 5:this.BfT(5);break;default:;}},BfT:function(
Gt){var B;switch(Gt){case 5:{var CC=this.Y.Bt[1]-40;if(CC<-(((B=this.Y.Da(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CC=-(((B=this.Y.Da(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CC>0)CC=0;this.Y.FX([this.Y.Bt[0],CC]);}break;case 4:{var CC=this.Y.
Bt[1]+40;if(CC>0)CC=0;this.Y.FX([this.Y.Bt[0],CC]);}break;default:throw new Error(
Bsm);}},GA:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.IV.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ce(this
);}X=X.Ah;}},Afv:function(s){this.GA(s);},MO:function(G){var B;this.Y.Vm(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HC(this.AV,true,null,null);},
_Init:function(aArg){C.D7._Init.call(this,aArg);A.Core.BL._Init.call(this.Cp={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.RS;this.Cp.Filter=147;this.Y.H(UR);this.Y.JN(1);this.Ay.H(AsD
);this.J(this.Y,0);this.J(this.Ay,0);this.Cp.BM=[this,this.Dz];this.Cp.DZ=[this,
this.Dz];this.Y.Ej=[this,this.Fb];this.Init(aArg);},_Done:function(){this.__proto__=
C.D7;this.Cp._Done();this.Y._Done();this.Ay._Done();C.D7._Done.call(this);},_ReInit:
function(){C.D7._ReInit.call(this);this.Cp._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D7._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XO={AaJ:null,
XK:null,AaK:null,XL:null,AaP:null,XN:null,_Init:function(aArg){C.RS._Init.call(this
,aArg);C.AaJ._Init.call(this.AaJ={I:this},0);C.XK._Init.call(this.XK={I:this},0);
C.AaK._Init.call(this.AaK={I:this},0);C.XL._Init.call(this.XL={I:this},0);C.AaP.
_Init.call(this.AaP={I:this},0);C.XN._Init.call(this.XN={I:this},0);this.__proto__=
C.XO;this.AaJ.H(BF);this.AaJ.Aj(true);this.XK.H(IN);this.XK.Aj(true);this.XK.Bj(
true);this.AaK.H(P5);this.AaK.Aj(true);this.XL.H(Z7);this.XL.Aj(true);this.XL.Bj(
true);this.AaP.H(Ak7);this.AaP.Aj(true);this.XN.H(Aoh);this.XN.Aj(true);this.XN.
Bj(true);this.J(this.AaJ,0);this.J(this.XK,0);this.J(this.AaK,0);this.J(this.XL,
0);this.J(this.AaP,0);this.J(this.XN,0);},_Done:function(){this.__proto__=C.RS;this.
AaJ._Done();this.XK._Done();this.AaK._Done();this.XL._Done();this.AaP._Done();this.
XN._Done();C.RS._Done.call(this);},_ReInit:function(){C.RS._ReInit.call(this);this.
AaJ._ReInit();this.XK._ReInit();this.AaK._ReInit();this.XL._ReInit();this.AaP._ReInit(
);this.XN._ReInit();},_Mark:function(D){var B;C.RS._Mark.call(this,D);if((B=this.
AaJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XK)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AaP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XN)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XL={
BreedToString:null,GU:null,M0:null,Ce:function(G){C.Iz.Ce.call(this,G);var Bx=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BO(Bx));this.GU.
R(this.M0.Ad9(Bx).toFixed());},Dd:function(E){C.Iz.Dd.call(this,E);this.GU.L(E);
},_Init:function(aArg){C.Iz._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.GU={I:this},0);A.Device.
M0._Init.call(this.M0={I:this},0);this.__proto__=C.XL;this.BT.H(Bsn);this.GU.H(Bso
);this.GU.Hs(5);this.GU.A8(0x14);this.GU.R(Bsp);this.GU.L(A.jb.Text);this.J(this.
GU,0);this.Hq.Aw(A.aaL(A.ach.ADl));this.GU.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.Iz;this.BreedToString._Done();this.GU._Done();this.M0._Done();C.
Iz._Done.call(this);},_ReInit:function(){C.Iz._ReInit.call(this);this.BreedToString.
_ReInit();this.GU._ReInit();this.M0._ReInit();this.GU.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Iz._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.GU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaK={
Ce:function(G){C.Iz.Ce.call(this,G);var Az9=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(Az9>0)this.T(A._GetAutoObject(A.Device.Converter).Rc(Az9));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.Iz._Init.call(this,aArg);this.__proto__=
C.AaK;this.Hq.Aw(A.aaL(A.ach.APX));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XK={Yr:null,Ce:function(G){C.Iz.Ce.call(this,G);var Tb=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfJ=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Tb>
0)this.T(A._GetAutoObject(A.acj.KI).AjF(Tb));else this.T(A.aaR(A.acf.Unknown));var
Ay2=A.aaL(A.aci.TH);switch(AfJ){case 0:Ay2=A.aaL(A.ach.ADi);break;case 1:{Ay2=A.
aaL(A.ach.Avr);this.Yr.Cu(0);}break;case 2:{Ay2=A.aaL(A.ach.Avr);this.Yr.Cu(1);}
break;case 3:{Ay2=A.aaL(A.ach.Avr);this.Yr.Cu(2);}break;default:A.ab5("%s%e",Bsq
,AfJ);}this.Yr.Aw(Ay2);},_Init:function(aArg){C.Iz._Init.call(this,aArg);A.acg.Am.
_Init.call(this.Yr={I:this},0);this.__proto__=C.XK;this.BT.H(Bsr);this.Yr.H(AHH);
this.Yr.L(A.jb.Text);this.J(this.Yr,0);this.Hq.Aw(A.aaL(A.ach.Avq));this.Yr.Aw(A.
aaL(A.ach.ADi));},_Done:function(){this.__proto__=C.Iz;this.Yr._Done();C.Iz._Done.
call(this);},_ReInit:function(){C.Iz._ReInit.call(this);this.Yr._ReInit();},_Mark:
function(D){var B;C.Iz._Mark.call(this,D);if((B=this.Yr)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaJ={KB:0,XM:null,K8:0
,Bk:function(aSize){C.Iz.Bk.call(this,aSize);this.XM.H(this.Hq.M);},Ai:function(
Ae){C.Iz.Ai.call(this,Ae);this.XM.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).AjW(this.K8)){this.T(A.aaR(A.acf.AnimalLoss));this.Hq.Z(false);this.XM.Z(true);
}else if(this.KB>0){this.T(A._GetAutoObject(A.Device.Converter).Rc(this.KB));this.
Hq.Z(true);this.XM.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hq.Z(true);this.
XM.Z(false);}},Ce:function(G){C.Iz.Ce.call(this,G);this.KB=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K8=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.An(
);},_Init:function(aArg){C.Iz._Init.call(this,aArg);A.acg.Text._Init.call(this.XM={
I:this},0);this.__proto__=C.AaJ;this.XM.R(Bao);this.J(this.XM,0);this.Hq.Aw(A.aaL(
A.ach.Avv));this.XM.S(A.aaL(A.fl.Ho));},_Done:function(){this.__proto__=C.Iz;this.
XM._Done();C.Iz._Done.call(this);},_ReInit:function(){C.Iz._ReInit.call(this);this.
XM._ReInit();},_Mark:function(D){var B;C.Iz._Mark.call(this,D);if((B=this.XM)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMg={XO:null,Init:function(aArg){var B;A.zX([this,this.AAp],[B=A._GetAutoObject(
A.Device.Device),B.AEk,B.AIw],0);A.pe([this,this.AAp],this);},Dz:function(G){var
D2=(A.Core.BL.isPrototypeOf(G)?G:null);switch(D2.CN){case 6:this.Om(this);break;
case 7:this.MU(this);break;default:D2.NE=true;}},CB:function(G){var B;this.XO.CB(
this);C.AB.CB.call(this,G);},EY:function(G){var B;this.XO.EY(this);C.AB.EY.call(
this,G);},Anf:function(G){A._GetAutoObject(C.A1).Fs();},Xu:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MU:function(G){if(A._GetAutoObject(A.Device.
Device).Ao.Cd()<=1)return;var LB=A._GetAutoObject(A.Device.Helper).W.CK;LB=LB+1;
if(LB>=A._GetAutoObject(A.Device.Device).Ao.Cd())LB=0;A._GetAutoObject(A.Device.
Helper).HJ(LB);},Om:function(G){if(A._GetAutoObject(A.Device.Device).Ao.Cd()<=1)
return;var LB=A._GetAutoObject(A.Device.Helper).W.CK;LB=LB-1;if(LB<0)LB=A._GetAutoObject(
A.Device.Device).Ao.Cd()-1;A._GetAutoObject(A.Device.Helper).HJ(LB);},AAp:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqe)A._GetAutoObject(C.A1).Ahi(85);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XO._Init.call(this.XO={I:this},0);this.
__proto__=C.AMg;this.Background.H(Cc);this.N.Z(true);this.N.OL(true);this.N.OM(true
);this.Dn(C.APg);this.XO.H(E8);this.J(this.XO,0);this.N.CA=[this,this.Anf];this.
N.Ck=[this,this.Xu];this.N.CZ(A.aaL(A.ach.EX));this.N.Cq(A.aaL(A.ach.Abr));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XO._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XO._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XO)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.Iz={Hq:null,BT:null
,T:function(E){C.IV.T.call(this,E);this.BT.R(this.DI);},Dd:function(E){C.IV.Dd.call(
this,E);this.Hq.L(E);this.BT.L(E);},_Init:function(aArg){C.IV._Init.call(this,aArg
);A.acg.Am._Init.call(this.Hq={I:this},0);C.CG._Init.call(this.BT={I:this},0);this.
__proto__=C.Iz;this.Hq.H(Bss);this.Hq.L(A.jb.Text);this.BT.H(Bst);this.BT.A8(0x11
);this.BT.L(A.jb.Text);this.J(this.Hq,0);this.J(this.BT,0);this.Hq.Aw(A.aaL(A.aci.
TH));this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.IV;this.Hq._Done();this.BT._Done();C.IV._Done.call(this);},_ReInit:function(
){C.IV._ReInit.call(this);this.Hq._ReInit();this.BT._ReInit();this.BT.S(A.aaL(A.
fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IV._Mark.call(this
,D);if((B=this.Hq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.IV={Background:null
,KS:0,Hd:false,CS:function(){this.Ce(this);},Init:function(aArg){var B;A.zX([this
,this.Bbq],[B=A._GetAutoObject(A.Device.Helper).W,B.QW,B.OnSetId],0);A.pe([this,
this.Bbq],this);},Bk:function(aSize){C.Ha.Bk.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Ha.Ai.call(this,Ae);if(this.
Hd)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CI);},Ce:function(G){}
,Bbq:function(s){this.Ce(s);},Bj:function(E){if(this.Hd===E)return;this.Hd=E;this.
An();},Dd:function(E){if(this.KS===E)return;this.KS=E;},_Init:function(aArg){C.Ha.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.IV;this.H(BF);this.Background.H(AIa);this.KS=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Ha;this.Background._Done(
);C.Ha._Done.call(this);},_ReInit:function(){C.Ha._ReInit.call(this);this.Background.
_ReInit();this.CS();},_Mark:function(D){var B;C.Ha._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NB={GU:null,BAG:function(G){this.BT.H(A.abN(this.BT.M,this.GU.M[0]));},_Init:
function(aArg){C.Fr._Init.call(this,aArg);A.acg.Text._Init.call(this.GU={I:this}
,0);this.__proto__=C.NB;this.GU.A3(0xA);this.GU.H(Bsu);this.GU.Hs(5);this.GU.I3(
true);this.GU.A8(0x14);this.GU.R(A.jV);this.GU.L(A.jb.Text);this.J(this.GU,0);this.
GU.Q0([this,this.BAG]);this.GU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fr;this.GU._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(
this);this.GU._ReInit();this.GU.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fr.
_Mark.call(this,D);if((B=this.GU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Aw9={AQR:null,_Init:function(aArg){C.Zo._Init.call(this,aArg);this.__proto__=
C.Aw9;},_Mark:function(D){var B;C.Zo._Mark.call(this,D);if((B=this.AQR)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANn={Wk:null,WF:0,AwA:function(E){C.Amw.AwA.call(this,E);if(E)this.Pm.R(Bsv);
else this.Pm.R(Baq);},BmU:function(E){if(A.aaZ(this.Wk,E))return;if(!!this.Wk)A.
z$([this,this.A27],this.Wk,0);this.Wk=E;if(!!E)A.zX([this,this.A27],E,0);if(!!E)
A.pe([this,this.A27],this);},AFA:function(E){var F;if(this.WF===E)return;this.WF=
E;this.AwA(!!this.Wk&&((F=this.Wk,F[1].call(F[0]))===E));},A27:function(G){var F;
this.AwA(!!this.Wk&&((F=this.Wk,F[1].call(F[0]))===this.WF));},_Init:function(aArg
){C.Amw._Init.call(this,aArg);this.__proto__=C.ANn;this.Pm.R(Baq);this.Pm.S(A.aaL(
A.fl.Ho));},_Mark:function(D){var B;C.Amw._Mark.call(this,D);if((B=this.Wk)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Aw$={Wk:null,WF:0,_Init:function(aArg){C.Zo._Init.call(this,aArg);this.__proto__=
C.Aw$;},_Mark:function(D){var B;C.Zo._Mark.call(this,D);if((B=this.Wk)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.ATK={GI:null,_Init:function(aArg){C.Cv._Init.call(this,aArg);C.Q7._Init.call(
this.GI={I:this},0);this.__proto__=C.ATK;var B;this.JP(A.aaR(A.acf.ACx));this.GI.
H(AhO);this.GI.Aj(true);this.GI.Z(true);this.GI.T(A.aaR(A.acf.AF2));this.GI.ArM(
false);this.GI.A_h(true);this.J(this.GI,0);this.GI.AeK([B=this.GI,B.FO]);this.GI.
Gk([this,this.D8,this.GK]);this.GI.Akp(A.aaL(A.ach.Edit));this.GI.As([B=A._GetAutoObject(
A.Device.Device),B.ASn,B.AZ2]);},_Done:function(){this.__proto__=C.Cv;this.GI._Done(
);C.Cv._Done.call(this);},_ReInit:function(){C.Cv._ReInit.call(this);this.GI._ReInit(
);this.JP(A.aaR(A.acf.ACx));this.GI.T(A.aaR(A.acf.AF2));},_Mark:function(D){var B;
C.Cv._Mark.call(this,D);if((B=this.GI)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.ATI={GB:0,C6:null,AW:null,Kj:null,E3:null
,GermanStateToString:null,CountryToString:null,Pt:0,K_:0,L9:false,Init:function(
aArg){A.zX([this,this.MG],[this,this.Sv,this.Ln],0);A.zX([this,this.MG],[this,this.
Ani,this.Ahd],0);},Ai:function(Ae){C.Ei.Ai.call(this,Ae);this.AW.FG(this.LQ);this.
Kj.FG(this.LQ);this.E3.CY(this.LQ);},DH:function(G){var F;if(!this.N)return;switch(
this.A9){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=
this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.G8];(F=
this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[
1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[
0])).B2(this.CountryToString.BO(this.K_));(F=this.N,F[1].call(F[0])).Cg=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(F[0])
).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.G8];(F=this.N,F[1].call(F[0]
)).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(
F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2((A.aaR(A.acf.Gr
)+AxX)+this.GermanStateToString.Ls(A._GetAutoObject(A.Device.Converter).ACI(this.
Pt)));(F=this.N,F[1].call(F[0])).Cg=null;}break;default:{(F=this.N,F[1].call(F[0
])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(
F[0])).CA=[this,this.G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(
F[0])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;}}}
,Et:function(EK){var Ti=this.A9;if(EK<0)EK=0;else if(EK>this.RB)EK=this.RB;switch(
EK){case 0:{this.Bb(null);if(!this.GB&&!this.Pt)this.Ln(0);}break;case 1:this.Bb(
this.E3);break;case 2:this.Bb(this.Kj);break;case 3:if(((Ti===2)&&!this.Pt)&&!this.
GB)return;else{this.Bb(this.AW);if(!this.GB||(Ti>0))this.AW.SE(2);else this.AW.SE(
7);}break;default:throw new Error(As7+EK.toFixed());}this.A9=EK;C.Ei.Et.call(this
,EK);},BC:function(E){if(this.AM===E)return;this.AM=E;this.L9=true;this.Sw(A._GetAutoObject(
A.Device.Helper).Sc(E,0,10));this.Ahd(A._GetAutoObject(A.Device.Helper).Sc(E,10,
2)|0);this.Ln(A._GetAutoObject(A.Device.Converter).ZO(E));this.L9=false;if(!!this.
AM){this.Kj.Km(2);this.AW.Km(10);}else{this.Kj.Km(0);this.AW.Km(0);}this.An();},
FO:function(G){var F;if(!this.AM){var BR=this.AM;this.BC(A._GetAutoObject(A.Device.
Helper).ACR());if(this.AM!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Et(2);}else this.Et(this.RB);},AjG:function(){return this.GB;
},AjI:function(){return 9999999999;},Ln:function(E){if(this.K_===E)return;this.K_=
E;if(this.L9===false)A.pe([this,this.Vd],this);A.abo([this,this.Sv,this.Ln],0);}
,Sw:function(E){if(this.GB===E)return;this.GB=E;if(this.L9===false)A.pe([this,this.
Vd],this);A.abo([this,this.AbO,this.Sw],0);},Vd:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqm(this.K_),3,10)+A.abl(this.Pt,2,10))+
A.abm(this.GB,10,10);var BR=this.AM;this.BC(A.ab0(aString,0,10));if(this.AM!==BR
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahd:function(
E){if(this.Pt===E)return;this.Pt=E;if(this.L9===false)A.pe([this,this.Vd],this);
A.abo([this,this.Ani,this.Ahd],0);},Sv:function(){return this.K_;},AbO:function(
){return this.GB;},Ani:function(){return this.Pt;},_Init:function(aArg){C.Ei._Init.
call(this,aArg);C.C6._Init.call(this.C6={I:this},0);C.AQL._Init.call(this.AW={I:
this},0);C.AvF._Init.call(this.Kj={I:this},0);C.Asr._Init.call(this.E3={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.ATI;var B;this.RB=3;this.AW.H(Bsw);this.Kj.H(Bsx);this.Kj.E5(16);this.E3.H(Bar
);this.J(this.AW,0);this.J(this.Kj,0);this.J(this.E3,0);this.C6.AEQ([this,this.Sv
,this.Ln]);this.AW.As([this,this.AbO,this.Sw]);this.Kj.As([this,this.Ani,this.Ahd
]);this.E3.CJ(this.C6);this.E3.As([B=this.C6,B.B$,B.Ca]);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ei;this.C6._Done();this.AW._Done();this.Kj._Done();this.
E3._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.C6._ReInit();this.AW.
_ReInit();this.Kj._ReInit();this.E3._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ei._Mark.call(this,D);
if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AQL={NH:null,NG:null,EP:null,FT:null,Em:null,Dv:null,CV:null,Cs:null,FG:function(
E){if(this.M4===E)return;C.Lf.FG.call(this,E);this.Cs.CY(E);this.CV.CY(E);this.Dv.
CY(E);this.Em.CY(E);this.FT.CY(E);this.EP.CY(E);this.NG.CY(E);this.NH.CY(E);},Yk:
function(Hv){var B6=null;switch(Hv){case-1:case 0:B6=this.FU;break;case 1:B6=this.
Cs;break;case 2:B6=this.CV;break;case 3:B6=this.Dv;break;case 4:B6=this.Em;break;
case 5:B6=this.FT;break;case 6:B6=this.EP;break;case 7:B6=this.NG;break;case 8:B6=
this.NH;break;case 9:B6=this.GT;break;default:A.ab5("%s",AhR);}return B6;},_Init:
function(aArg){C.Lf._Init.call(this,aArg);C.DB._Init.call(this.NH={I:this},0);C.
DB._Init.call(this.NG={I:this},0);C.DB._Init.call(this.EP={I:this},0);C.DB._Init.
call(this.FT={I:this},0);C.DB._Init.call(this.Em={I:this},0);C.DB._Init.call(this.
Dv={I:this},0);C.DB._Init.call(this.CV={I:this},0);C.DB._Init.call(this.Cs={I:this
},0);this.__proto__=C.AQL;this.H(Bsy);this.GT.H(AIn);this.NH.H(Ayq);this.NG.H(AZB
);this.EP.H(AZC);this.FT.H(AZD);this.Em.H(AZE);this.Dv.H(AZF);this.CV.H(AZG);this.
Cs.H(Bab);this.FU.H(AZH);this.EI.H(AZH);this.J(this.NH,-2);this.J(this.NG,-2);this.
J(this.EP,-2);this.J(this.FT,-2);this.J(this.Em,-2);this.J(this.Dv,-2);this.J(this.
CV,-2);this.J(this.Cs,-2);this.NH.Dh=[this,this.GM];this.NG.Dh=[this,this.GM];this.
EP.Dh=[this,this.GM];this.FT.Dh=[this,this.GM];this.Em.Dh=[this,this.GM];this.Dv.
Dh=[this,this.GM];this.CV.Dh=[this,this.GM];this.Cs.Dh=[this,this.GM];},_Done:function(
){this.__proto__=C.Lf;this.NH._Done();this.NG._Done();this.EP._Done();this.FT._Done(
);this.Em._Done();this.Dv._Done();this.CV._Done();this.Cs._Done();C.Lf._Done.call(
this);},_ReInit:function(){C.Lf._ReInit.call(this);this.NH._ReInit();this.NG._ReInit(
);this.EP._ReInit();this.FT._ReInit();this.Em._ReInit();this.Dv._ReInit();this.CV.
_ReInit();this.Cs._ReInit();},_Mark:function(D){var B;C.Lf._Mark.call(this,D);if((
B=this.NH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Em)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cs
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ATJ={
GB:0,C6:null,AW:null,E3:null,CountryToString:null,K_:0,L9:false,Init:function(aArg
){A.zX([this,this.MG],[this,this.Sv,this.Ln],0);},Ai:function(Ae){C.Ei.Ai.call(this
,Ae);this.AW.FG(this.LQ);this.E3.CY(this.LQ);},DH:function(G){var F;if(!this.N)return;
switch(this.A9){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX
));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.
G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.
N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).B2(this.CountryToString.BO(this.K_));(F=this.N,F[1].call(F[0])).Cg=null;}
break;default:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(
F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.G8];(F=this.N,F[1].call(
F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=
null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=
this.N,F[1].call(F[0])).Cg=null;}}},Et:function(EK){var Ti=this.A9;if(EK<0)EK=0;
else if(EK>this.RB)EK=this.RB;switch(EK){case 0:{this.Bb(null);if(!this.GB)this.
Ln(0);}break;case 1:this.Bb(this.E3);break;case 2:{this.Bb(this.AW);if(!this.GB||(
Ti>0))this.AW.SE(2);else this.AW.SE(7);}break;default:throw new Error(As7+EK.toFixed(
));}this.A9=EK;C.Ei.Et.call(this,EK);},BC:function(E){if(this.AM===E)return;this.
AM=E;this.L9=true;this.Sw(A._GetAutoObject(A.Device.Helper).Sc(E,0,12));this.Ln(
A._GetAutoObject(A.Device.Converter).ZO(E));this.L9=false;if(!!this.AM)this.AW.Km(
12);else this.AW.Km(0);this.An();},FO:function(G){var F;if(!this.AM){var BR=this.
AM;this.BC(A._GetAutoObject(A.Device.Helper).ACR());if(this.AM!==BR){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Et(this.RB);},AjG:function(
){return this.GB;},AjI:function(){return 999999999999;},Ln:function(E){if(this.K_===
E)return;this.K_=E;if(this.L9===false)A.pe([this,this.Vd],this);A.abo([this,this.
Sv,this.Ln],0);},Sw:function(E){if(this.GB===E)return;this.GB=E;if(this.L9===false
)A.pe([this,this.Vd],this);A.abo([this,this.AbO,this.Sw],0);},Vd:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqm(this.K_),3,10)+A.abm(
this.GB,12,10);var BR=this.AM;this.BC(A.ab0(aString,0,10));if(this.AM!==BR){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Sv:function(){return this.
K_;},AbO:function(){return this.GB;},_Init:function(aArg){C.Ei._Init.call(this,aArg
);C.C6._Init.call(this.C6={I:this},0);C.ADA._Init.call(this.AW={I:this},0);C.Asr.
_Init.call(this.E3={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ATJ;var B;this.RB=2;this.AW.H(Bsz);this.E3.H(Bar);this.
J(this.AW,0);this.J(this.E3,0);this.C6.AEQ([this,this.Sv,this.Ln]);this.AW.As([this
,this.AbO,this.Sw]);this.E3.CJ(this.C6);this.E3.As([B=this.C6,B.B$,B.Ca]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ei;this.C6._Done();this.AW._Done();this.
E3._Done();this.CountryToString._Done();C.Ei._Done.call(this);},_ReInit:function(
){C.Ei._ReInit.call(this);this.C6._ReInit();this.AW._ReInit();this.E3._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ei._Mark.call(this,D);
if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DX:null,Y:null,Ay:null,X4:null,X5:null,X3:null,X1:null,X2:null,Dz:function(
G){var B;C.AB.Dz.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HC(
this.AV,true,null,null);},CB:function(G){C.AB.CB.call(this,G);A._GetAutoObject(A.
Device.Device).Ao.Bl(null);A._GetAutoObject(A.Device.Device).Bv.Bl(null);A._GetAutoObject(
A.Device.Helper).AkE();A._GetAutoObject(A.Device.Helper).Ar$();},Ic:function(G){
var Cx=(C.Fg.isPrototypeOf(G)?G:null);if(!Cx)return;if(Cx===this.X4)A._GetAutoObject(
C.A1).BU(28);else if(Cx===this.X5)A._GetAutoObject(C.A1).BU(26);else if(Cx===this.
X3)A._GetAutoObject(C.A1).BU(62);else if(Cx===this.X1)A._GetAutoObject(C.A1).BU(
27);else if(Cx===this.X2)A._GetAutoObject(C.A1).BU(89);},A2$:function(G){A._GetAutoObject(
C.A1).Fs();},Fb:function(G){var B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.
Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Bt[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DX={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fg._Init.call(this.X4={I:this
},0);C.Fg._Init.call(this.X5={I:this},0);C.Fg._Init.call(this.X3={I:this},0);C.Fg.
_Init.call(this.X1={I:this},0);C.Fg._Init.call(this.X2={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CU);this.N.Z(true);this.N.B2(A.jV);this.Eh.Ar(false
);this.Dn(C.AqM);this.DX.A3(0x3F);this.DX.H(E8);this.DX.L(A.jb.CI);this.Y.H(E8);
this.Y.JN(9);this.Ay.H(Ip);this.X4.H(P2);this.X4.Aj(true);this.X4.T(A.aaR(A.acf.
A7L));this.X5.H(AZN);this.X5.Aj(true);this.X5.T(A.aaR(A.acf.NewAnimals));this.X3.
H(N$);this.X3.Aj(true);this.X3.T(A.aaR(A.acf.Calving));this.X1.H(P3);this.X1.Aj(
true);this.X1.T(A.aaR(A.acf.ABO));this.X2.H(MF);this.X2.Aj(true);this.X2.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DX,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
X4,0);this.J(this.X5,0);this.J(this.X3,0);this.J(this.X1,0);this.J(this.X2,0);this.
N.CA=[this,this.A2$];this.N.CZ(A.aaL(A.ach.EX));this.Y.Ej=[this,this.Fb];this.X4.
AR=[this,this.Ic];this.X4.DD(A.aaL(A.ach.ADv));this.X5.AR=[this,this.Ic];this.X5.
DD(A.aaL(A.ach.Avz));this.X3.AR=[this,this.Ic];this.X3.DD(A.aaL(A.ach.APQ));this.
X1.AR=[this,this.Ic];this.X1.DD(A.aaL(A.ach.APN));this.X2.AR=[this,this.Ic];this.
X2.DD(A.aaL(A.ach.APH));},_Done:function(){this.__proto__=C.AB;this.DX._Done();this.
Y._Done();this.Ay._Done();this.X4._Done();this.X5._Done();this.X3._Done();this.X1.
_Done();this.X2._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DX._ReInit();this.Y._ReInit();this.Ay._ReInit();this.X4._ReInit(
);this.X5._ReInit();this.X3._ReInit();this.X1._ReInit();this.X2._ReInit();this.X4.
T(A.aaR(A.acf.A7L));this.X5.T(A.aaR(A.acf.NewAnimals));this.X3.T(A.aaR(A.acf.Calving
));this.X1.T(A.aaR(A.acf.ABO));this.X2.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ARF={K3:null,EaseOfDelivery:null,BirthType:null,AcB:null
,Lj:null,Cl:null,GZ:null,Lh:null,AzB:true,Init:function(aArg){this.Bb(this.C_);A.
pe([this,this.GA],this);},Es:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.Hf();A._GetAutoObject(C.A1).Fs();if(!!this.K3)this.K3.Es(this);},Af3:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ex((F=this.BY.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwB(true);if(!!this.K3)this.K3.Af3(this
);if(A._GetAutoObject(A.Device.Device).Ao.Lg())A._GetAutoObject(A.Device.Helper).
AJ4(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.Apw]);else{this.AiR();A.
pe([this,this.ApW],this);}},At8:function(){this.N.B2(A.jV);this.N.C5(A.aaL(A.ach.
ADz));this.N.Cg=[this,this.AyH];},CB:function(G){var B;C.HW.CB.call(this,G);if(A.
_GetAutoObject(A.Device.Device).Ao.Lg()){A._GetAutoObject(A.Device.Device).A_(41
,true,A._GetAutoObject(A.Device.Device).Ao.HF().toFixed(),0,null);this.Es(this);
}else if(this.AzB){this.AzB=false;A.pe([this,this.A3o],this);}else if(!this.K3){
this.K3=A._NewObject(C.ARG,0);this.K3.A9O([this,this.AAM]);A._GetAutoObject(A.Device.
Helper).W.Gj();A._GetAutoObject(A.Device.Helper).Ap_(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nd(this.AsB.Ad9(6));this.K3.LN(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Es(this);}},AiR:function(
){A._GetAutoObject(A.Device.Helper).W.Co(A._GetAutoObject(A.Device.Device).Ao);var
L6=A._GetAutoObject(A.Device.Device).Ao.Lb(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SF(L6);if(A._GetAutoObject(A.Device.Helper
).AmX()){if(A._GetAutoObject(A.Device.Device).Bv.Lg())A._GetAutoObject(A.Device.
Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bv.HF().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gj();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KG);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Co(A._GetAutoObject(A.Device.Device).Bv);}}A.
_GetAutoObject(A.Device.Helper).A6R(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},ApW:function(G){var B;if(!!this.K3)this.K3.ApW(this);},GA:function(G){if(
A._GetAutoObject(A.Device.Helper).AmX())this.C9.Z(true);else this.C9.Z(false);},
Apw:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;
switch(At.Id){case 41:break;default:A.ab5("%s%e",AsU,At.Id);}},AAM:function(G){this.
LN(this);this.AeM(A._GetAutoObject(A.Device.Helper).Abf(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JA(this.C_);},Apx:function(G){var F;C.HW.Apx.call(this
,G);(F=this.C9.Q,F[2].call(F[0],this.C9.AnP));},A3o:function(G){A._GetAutoObject(
C.A1).BU(90);},_Init:function(aArg){C.HW._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcB._Init.call(this.AcB={I:this},0);C.Q7._Init.call(this.Lj={I:this
},0);C.SI._Init.call(this.Cl={I:this},0);C.BZ._Init.call(this.GZ={I:this},0);C.BZ.
_Init.call(this.Lh={I:this},0);this.__proto__=C.ARF;var B;this.Dn(C.APd);this.Lj.
H(AhO);this.Lj.Aj(true);this.Lj.T(A.aaR(A.acf.ACc));this.CF.H(AcG);this.Cl.H(AcG
);this.Cl.Aj(true);this.Cl.T(A.aaR(A.acf.Ad4));this.Cl.AFr(true);this.GZ.H(AcG);
this.GZ.Aj(true);this.GZ.T(A.aaR(A.acf.Ara));this.Lh.H(AcG);this.Lh.Aj(true);this.
Lh.T(A.aaR(A.acf.Agv));this.J(this.Lj,-5);this.J(this.Cl,-3);this.J(this.GZ,-1);
this.J(this.Lh,-1);this.EaseOfDelivery.LX(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.LX(A._GetAutoObject(A.Device.Helper).W);this.AcB.LX(A._GetAutoObject(A.
Device.Helper).W);this.Lj.Gk([this,this.D8,this.GK]);this.Lj.As([B=A._GetAutoObject(
A.Device.Helper).W,B.ASj,B.Anw]);this.Cl.Gk([this,this.D8,this.GK]);this.Cl.LW([
B=this.Cl,B.FO]);this.Cl.LZ(A.aaL(A.ach.Edit));this.Cl.AbZ([B=A._GetAutoObject(A.
Device.Helper).W,B.Av1,B.QY]);this.Gf.As([B=this.AcB,B.B$,B.Ca]);this.Gf.CJ(this.
AcB);this.GZ.As([B=this.BirthType,B.B$,B.Ca]);this.GZ.CJ(this.BirthType);this.Lh.
As([B=this.EaseOfDelivery,B.B$,B.Ca]);this.Lh.CJ(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HW;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcB._Done();this.Lj._Done();this.Cl._Done();this.GZ._Done();this.Lh.
_Done();C.HW._Done.call(this);},_ReInit:function(){C.HW._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcB._ReInit();this.Lj._ReInit(
);this.Cl._ReInit();this.GZ._ReInit();this.Lh._ReInit();this.Lj.T(A.aaR(A.acf.ACc
));this.Cl.T(A.aaR(A.acf.Ad4));this.GZ.T(A.aaR(A.acf.Ara));this.Lh.T(A.aaR(A.acf.
Agv));},_Mark:function(D){var B;C.HW._Mark.call(this,D);if((B=this.K3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cl).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GZ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMi={Init:function(aArg){var B;A.zX([this,this.Bgs],[B=A._GetAutoObject(A.Device.
Device),B.AEr,B.AIB],0);A.pe([this,this.Bgs],this);},AKz:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbK){case 0:Be=A._GetAutoObject(A.Device.
Helper).ACK();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOw();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mo();break;default:throw new Error(AZQ+A.
_GetAutoObject(A.Device.Device).AbK.toFixed());}A._GetAutoObject(A.Device.Device
).Ao.Bl(Be);},Bgs:function(G){switch(A._GetAutoObject(A.Device.Device).AbK){case
0:this.Dx(A.aaR(A.acf.ARL));break;case 1:this.Dx(A.aaR(A.acf.BjX));break;case 2:
this.Dx(A.aaR(A.acf.AvT));break;default:A.ab5("%s",AZQ+A._GetAutoObject(A.Device.
Device).AbK.toFixed());}},_Init:function(aArg){C.Aml._Init.call(this,aArg);this.
__proto__=C.AMi;this.BmM(C.APt);this.Eh.AbV(A._NewObject(C.APi,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ARG={Az9:0,Ac_:null
,AuN:null,BdZ:0,A3B:0,A2u:0,Init:function(aArg){this.BdZ=A._GetAutoObject(A.Device.
Helper).W.Id;this.Ac_=A._GetAutoObject(A.Device.Device).Ao.Filter;this.Az9=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2u=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LN:function(G){A._GetAutoObject(A.Device.Helper).W.Anw(this.Az9);A._GetAutoObject(
A.Device.Helper).W.AeU(true);switch(this.A2u){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.Ex(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.Ex(2);break;default:
A.ab5("%s%e",Ayp,this.A2u);}},Es:function(G){A._GetAutoObject(A.Device.Device).Ao.
Bl(this.Ac_);if(!!this.A3B)this.Bgu();},Af3:function(G){A._GetAutoObject(A.Device.
Device).Ao.Bl(null);},Bgu:function(){var AtL=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).Ao.Lb(0,this.BdZ);AtL.EH(Ad,A._GetAutoObject(
A.Device.Device).Ao);AtL.Awn(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);AtL.
ArG(false);AtL.AwC(AtL.LactationNumber+1);AtL.Co(A._GetAutoObject(A.Device.Device
).Ao);},ApW:function(G){this.A3B++;var BxR=A._GetAutoObject(A.Device.Converter).
Bhg(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A3B<BxR)&&(A._GetAutoObject(
A.Device.Helper).AjW(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A_(59,true,A.jV,0,[this,this.U_]);else this.BcX(
this);},U_:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!At&&(At.PopupState===8))this.BcX(this);else if(!!At&&(At.PopupState===7))this.
AAM(this);},AAM:function(G){var B;var H9=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfJ=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bx=A._GetAutoObject(A.
Device.Helper).W.Breed;var Tb=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJH=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuN)(B=this.AuN
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.Ex(H9);A._GetAutoObject(
A.Device.Helper).W.Akl(AfJ);A._GetAutoObject(A.Device.Helper).W.NW(Bx);A._GetAutoObject(
A.Device.Helper).W.QY(Tb);A._GetAutoObject(A.Device.Helper).W.Akn(AJH);},BcX:function(
G){this.Bgu();A._GetAutoObject(C.A1).Fs();A._GetAutoObject(A.Device.Device).Ao.Bl(
this.Ac_);},A9O:function(E){if(A.aa0(this.AuN,E))return;this.AuN=E;},_Init:function(
aArg){this.__proto__=C.ARG;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ac_)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMy={Init:function(aArg){
var B;A.zX([this,this.Bek],[B=A._GetAutoObject(A.Device.Device),B.AR4,B.AZR],0);
this.Bek(this);},Co:function(){A.ab5("%s",BsA);},EH:function(AcM){C.Vl.EH.call(this
,AcM);var P;for(P=16;P>0;P--)this.H8.Set(P,this.H8.Get(P-1));this.H8.Set(0,0);if(
this.CD<17)this.CD++;else A.ab5("%s",BsB);},ADE:function(Ez){switch(Ez){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bek:
function(G){this.EH(A._GetAutoObject(A.Device.Device).Auq);A.we(this,0);},_Init:
function(aArg){C.Vl._Init.call(this,aArg);this.__proto__=C.AMy;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuE={_Init:function(){C.
AMy._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JD={DQ:null,V:null,A7E:true,T:function(E){C.IV.T.call(this,E);this.
V.R(E);},Dd:function(E){C.IV.Dd.call(this,E);this.V.L(E);},BmR:function(E){if(this.
A7E===E)return;this.A7E=E;this.DQ.Z(E);},_Init:function(aArg){C.IV._Init.call(this
,aArg);A.acg.DQ._Init.call(this.DQ={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.JD;this.DQ.DE(BsC);this.DQ.DR(BsD);this.DQ.L(A.jb.Bc);this.V.
A3(0x3F);this.V.H(BsE);this.V.A8(0x11);this.V.L(A.jb.Text);this.J(this.DQ,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kh));this.V.A2(A.aaL(A.fl.Ih));this.V.Ct(A.aaL(A.
fl.Bi));},_Done:function(){this.__proto__=C.IV;this.DQ._Done();this.V._Done();C.
IV._Done.call(this);},_ReInit:function(){C.IV._ReInit.call(this);this.DQ._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kh));this.V.A2(A.aaL(A.fl.Ih));this.V.Ct(
A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.IV._Mark.call(this,D);if((B=this.DQ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APi={AgI:null,Dc:null,Abd:null,Ff:null,E4:
null,Init:function(aArg){var B;A.zX([this,this.A4d],[B=A._GetAutoObject(A.Device.
Device),B.AEr,B.AIB],0);A.pe([this,this.A4d],this);},Dd:function(E){C.Yn.Dd.call(
this,E);this.Dc.L(E);},AEx:function(G){A.pe([this,this.A4d],this);},AAO:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).Fd();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DN(1,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);A._GetAutoObject(
A.Device.Device).Ao.Bl(Filter);}},C3:function(G){var B;var F;C.Yn.C3.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Dc.Aw(A.aaL(A.ach.AjO));return;}var Byy=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DN(38,0)
)?B:null);var Bbz=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DN(14,0))?B:null);if(!!Byy)this.Dc.Aw(A.aaL(A.ach.ACX));else if(
!!Bbz&&(Bbz.A5===1))this.Dc.Aw(A.aaL(A.ach.APS));else this.Dc.Aw(A.aaL(A.ach.AjO
));},A4d:function(G){var F;var Filter=null;var AOj;switch(A._GetAutoObject(A.Device.
Device).AbK){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACK();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOw();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mo();break;default:throw new Error(AZQ+A._GetAutoObject(A.Device.
Device).AbK.toFixed());}var AiV=this.Akf();if(AiV>0){AOj=A._NewObject(A.Device.Int32FilterCriterion
,0);AOj.Initialize(1,4,AiV,false);Filter.CW(AOj);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeN(false);},Om:function(G){if(!this.Akf())this.AW.AeN(true
);this.Bb(this.AW);this.An();},MU:function(G){this.AW.AeN(false);this.Bb(this.AgI
);this.An();},_Init:function(aArg){C.Yn._Init.call(this,aArg);C.AqX._Init.call(this.
AgI={I:this},0);A.acg.Am._Init.call(this.Dc={I:this},0);C.Abd._Init.call(this.Abd={
I:this},0);A.Core.BL._Init.call(this.Ff={I:this},0);A.Core.BL._Init.call(this.E4={
I:this},0);this.__proto__=C.APi;var B;this.H(BsF);this.AW.H(BsG);this.T0.H(BsH);
this.JI.Z(false);this.AgI.H(BsI);this.Dc.H(BsJ);this.Abd.As(A._GetAutoObject(A.Device.
Device).AbK);this.Ff.Filter=6;this.E4.Filter=7;this.JU(this.A$,-1);this.J(this.AgI
,-1);this.J(this.Dc,-1);this.AgI.CJ(this.Abd);this.AgI.As([B=this.Abd,B.B$,B.Ca]
);this.Dc.Aw(A.aaL(A.ach.AjO));this.Ff.BM=[this,this.Om];this.E4.BM=[this,this.MU
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yn;this.AgI._Done();this.Dc.
_Done();this.Abd._Done();this.Ff._Done();this.E4._Done();C.Yn._Done.call(this);}
,_ReInit:function(){C.Yn._ReInit.call(this);this.AgI._ReInit();this.Dc._ReInit();
this.Abd._ReInit();this.Ff._ReInit();this.E4._ReInit();},_Mark:function(D){var B;
C.Yn._Mark.call(this,D);if((B=this.AgI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ff)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E4)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abd={AeG:null
,Init:function(aArg){var B;A.zX([this,this.Bd1],[B=A._GetAutoObject(A.Device.Device
),B.AEr,B.AIB],0);A.pe([this,this.Bd1],this);},Dr:function(){return 3;},As:function(
E){C.CQ.As.call(this,E);A._GetAutoObject(A.Device.Device).AwJ(E);},ACJ:function(
aIndex){if((aIndex<0)||(aIndex>=this.Dr()))return null;return this.AeG.Ass(aIndex
);},ACL:function(aIndex){if((aIndex<0)||(aIndex>=this.Dr()))return-1;return this.
AeG.Ast(aIndex);},Bd1:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbK;A.
abo([this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(this,aArg);
A.Device.AeG._Init.call(this.AeG={I:this},0);this.__proto__=C.Abd;this.Cr.Set(0,
0);this.Cr.Set(1,1);this.Cr.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.CQ;this.AeG._Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(
this);this.AeG._ReInit();},_Mark:function(D){var B;C.CQ._Mark.call(this,D);if((B=
this.AeG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APt={Eo:null,II:null,_Init:function(aArg){C.Ew._Init.call(this,aArg);C.CG._Init.
call(this.Eo={I:this},0);A.acg.Text._Init.call(this.II={I:this},0);this.__proto__=
C.APt;this.H(O0);this.Background.H(O0);this.Eo.H(AIb);this.Eo.R(A.aaR(A.acf.A6X)
);this.Eo.A8(0x12);this.Eo.L(A.jb.Text);this.II.A3(0x3F);this.II.H(AIc);this.II.
Hs(5);this.II.A8(0x14);this.II.R(A.aaR(A.acf.AGF));this.II.L(A.jb.Text);this.J(this.
Eo,0);this.J(this.II,0);this.Eo.S(A.aaL(A.fl.Af));this.Eo.A2(A.aaL(A.fl.Ih));this.
Eo.Ct(A.aaL(A.fl.Bi));this.II.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Ew;this.Eo._Done();this.II._Done();C.Ew._Done.call(this);},_ReInit:function(){
C.Ew._ReInit.call(this);this.Eo._ReInit();this.II._ReInit();this.Eo.R(A.aaR(A.acf.
A6X));this.II.R(A.aaR(A.acf.AGF));this.Eo.S(A.aaL(A.fl.Af));this.Eo.A2(A.aaL(A.fl.
Ih));this.Eo.Ct(A.aaL(A.fl.Bi));this.II.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Ew._Mark.call(this,D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
II)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={JW:null,Bf6:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.BeL(this);else A._GetAutoObject(A.Device.Device).A_(63,true,A.
jV,0,[this,this.U_]);},BeL:function(G){A._GetAutoObject(C.A1).Fs();},U_:function(
G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!At&&(At.Id===63)
)&&(At.PopupState===7))this.BeL(this);},_Init:function(aArg){C.Me._Init.call(this
,aArg);A.acg.Text._Init.call(this.JW={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dn(C.APh);this.I9.H(BsK);this.I9.Akv(2);this.Acq.Z(false);this.ARl=12;this.
Number.H(BsL);this.Number.R(A.aaR(A.acf.A$d));this.A4K=false;this.JW.H(BsM);this.
JW.Hs(5);this.JW.KR(true);this.JW.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.
aaR(A.acf.ABs));this.JW.L(A.jb.Text);this.JU(this.I9,-1);this.JU(this.IM,-1);this.
JU(this.Acq,-1);this.J(this.JW,0);this.JW.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Me;this.JW._Done();C.Me._Done.call(this);},_ReInit:function(){C.Me._ReInit.
call(this);this.JW._ReInit();this.Number.R(A.aaR(A.acf.A$d));this.JW.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.ABs));this.JW.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Me._Mark.call(this,D);if((B=this.JW)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APh={_Init:function(aArg){C.AqL.
_Init.call(this,aArg);this.__proto__=C.APh;this.DS.Ex(1);},_className:"Application::HeaderScannedCowId"
};C.I9={AbB:null,AbA:null,Abz:null,Qz:null,CountryToString:null,Asv:0,CS:function(
){this.An();},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Qz.R(this.CountryToString.
Ls(A._GetAutoObject(A.Device.Converter).A7j(A._GetAutoObject(A.Device.Device).Language
))+BsN);},Akv:function(E){if(this.Asv===E)return;this.Asv=E;var bitmap=null;var A1C=
BsO;var A1B=null;var A1D=false;switch(E){case 0:bitmap=A.aaL(A.ach.AqW);break;case
1:{bitmap=A.aaL(A.ach.AQs);A1C=BsP;A1B=A.aaL(A.fl.Ak);A1D=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQt);A1C=BsQ;A1B=A.aaL(A.fl.Bi);A1D=true;}break;default:throw new Error(
BsR+E.toFixed());}this.Abz.Aw(bitmap);this.AbA.Aw(bitmap);this.AbB.Aw(bitmap);this.
Qz.H(A.abJ(this.Qz.M,A1C));this.Qz.S(A1B);this.Qz.Z(A1D);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.
call(this.AbB={I:this},0);A.acg.Am._Init.call(this.AbA={I:this},0);A.acg.Am._Init.
call(this.Abz={I:this},0);A.acg.Text._Init.call(this.Qz={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.I9;this.H(AIq);this.
AbB.A3(0x3);this.AbB.H(AIq);this.AbB.L(A.jb.H4);this.AbB.Cu(2);this.AbA.A3(0x3);
this.AbA.H(AIq);this.AbA.L(A.jb.AdZ);this.AbA.Cu(1);this.Abz.A3(0x3);this.Abz.H(
AIq);this.Abz.L(A.jb.Text);this.Abz.Cu(0);this.Qz.A3(0x14);this.Qz.H(BsS);this.Qz.
L(0xFF020202);this.Qz.Z(false);this.J(this.AbB,0);this.J(this.AbA,0);this.J(this.
Abz,0);this.J(this.Qz,0);this.AbB.Aw(A.aaL(A.ach.AqW));this.AbA.Aw(A.aaL(A.ach.AqW
));this.Abz.Aw(A.aaL(A.ach.AqW));this.Qz.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.O;this.AbB._Done();this.AbA._Done();this.Abz._Done();this.Qz._Done(
);this.CountryToString._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.AbB._ReInit();this.AbA._ReInit();this.Abz._ReInit(
);this.Qz._ReInit();this.CountryToString._ReInit();this.Qz.S(A.aaL(A.fl.Ak));this.
CS();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AbB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Abz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qz)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.Asv={Transponder:0,BFy:1,BFz:2};C.APd={Am:null,Dd:function(E){C.BS.Dd.call(this
,E);this.Am.L(E);},_Init:function(aArg){C.BS._Init.call(this,aArg);A.acg.Am._Init.
call(this.Am={I:this},0);this.__proto__=C.APd;this.Am.H(As5);this.J(this.Am,0);this.
Am.Aw(A.aaL(A.ach.AO6));},_Done:function(){this.__proto__=C.BS;this.Am._Done();C.
BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.Am._ReInit(
);},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ie:0,Aaw:4,AlT:function(G){C.Q6.AlT.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bdx()){this.Ie=A._GetAutoObject(A.Device.Helper).Uu.Id;var Ain=A._GetAutoObject(
A.Device.Helper).A7h(this.Ie,A._GetAutoObject(A.Device.Helper).W);if(Ain){A._GetAutoObject(
A.Device.Device).A_(21,true,A._GetAutoObject(A.Device.Converter).Rc(this.Ie),0,[
this,this.U_]);return;}Ain=A._GetAutoObject(A.Device.Helper).Bjm(this.Ie,A._GetAutoObject(
A.Device.Helper).W);if(Ain&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ie)){A._GetAutoObject(A.Device.Device).A_(25,true,A._GetAutoObject(A.Device.
Converter).Rc(this.Ie),0,[this,this.U_]);return;}this.Aaw=A._GetAutoObject(A.Device.
Helper).AQY(this.Ie);switch(this.Aaw){case 0:A._GetAutoObject(A.Device.Device).A_(
45,true,this.Ie.toFixed().length.toFixed(),0,[this,this.U_]);break;case 1:case 2:{
var BP=A._GetAutoObject(A.Device.Converter).AxD(this.Ie);A._GetAutoObject(A.Device.
Device).A_(46,true,BP.toFixed(),0,[this,this.U_]);}break;case 3:this.BfY();break;
default:throw new Error(AH1+this.Aaw.toFixed());}}},Es:function(G){A._GetAutoObject(
C.A1).Fs();},U_:function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!At)switch(At.PopupState){case 4:if(this.Aaw===2)this.BfY();else A._GetAutoObject(
A.Device.Device).Ahx();break;case 5:this.Es(this);break;default:;}},BfY:function(
){A._GetAutoObject(A.Device.Helper).W.Nc(this.Ie);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.Q1(this.Ie);A._GetAutoObject(
A.Device.Helper).W.Co(A._GetAutoObject(A.Device.Device).Ao);A._GetAutoObject(A.Device.
Device).A_(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Es(this);},_Init:function(aArg){C.Q6._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dn(C.IE);this.Number.R(A.aaR(A.acf.A_8
));this.I9.H(BsT);this.IM.H(BsU);this.Akv(1);this.N.CA=[this,this.Es];this.N.CZ(
A.aaL(A.ach.EX));},_ReInit:function(){C.Q6._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A_8));},_className:"Application::SetSaveNaisIdScreen"};C.ANP={LN:function(
G){C.Aqu.LN.call(this,G);A.pe([this,this.BBi],this);},BBi:function(G){this.JA(this.
Ed);},_Init:function(aArg){C.Aqu._Init.call(this,aArg);this.__proto__=C.ANP;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UJ={Animal:null,WhereAboutsToString:
null,Gd:function(aIndex){return this.WhereAboutsToString.BO(this.C7(aIndex));},As:
function(E){C.CQ.As.call(this,E);if(!!this.Animal)this.Animal.Nd(E);},A4l:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B$,this.Ca],0);},LX:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4l],[B=this.Animal,B.Awb,B.Nd],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4l],[B=this.Animal,B.Awb,B.Nd],0);A.pe([this,this.A4l],this);}
,_Init:function(aArg){C.CQ._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UJ;this.Cr.Set(0,1);this.
Cr.Set(1,2);this.Cr.Set(2,3);this.Cr.Set(3,4);this.Cr.Set(4,5);},_Done:function(
){this.__proto__=C.CQ;this.WhereAboutsToString._Done();C.CQ._Done.call(this);},_ReInit:
function(){C.CQ._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.CQ._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UK={Dr:function(){return 6;},_Init:function(aArg){C.UJ._Init.call(this,aArg);
this.__proto__=C.UK;this.Cr.Set(0,0);this.Cr.Set(1,1);this.Cr.Set(2,2);this.Cr.Set(
3,3);this.Cr.Set(4,4);this.Cr.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcB={Dr:function(){return 5;},_Init:function(aArg){C.UJ._Init.call(this,aArg
);this.__proto__=C.AcB;this.Cr.Set(0,6);this.Cr.Set(1,7);this.Cr.Set(2,8);this.Cr.
Set(3,9);this.Cr.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdI={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bch],[B=A._GetAutoObject(A.Device.
Device),B.AR5,B.AZS],0);A.pe([this,this.Bch],this);},Dr:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gd:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BO(aIndex);},DO:function(A7){return A7;},Hp:function(){return 1;},As:function(E){
C.AC.As.call(this,E);A._GetAutoObject(A.Device.Device).Awe(E);},Bch:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Agl;A.abo([this,this.B$,this.Ca],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdI;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGt={FC:null
,Ev:null,EartagNrAssignmentMode:null,Ff:null,E4:null,HB:null,AW:null,Kf:null,M8:
null,A9:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Ee.Ai.call(this,Ae);if(this.
A9===1){if(this.Hd){this.AW.FG(A.jb.CI);this.HB.CY(A.jb.CI);this.Background.L(A.
jb.CU);this.V.L(A.jb.Text);}else{this.AW.FG(A.jb.CU);this.HB.CY(A.jb.CU);this.Background.
L(A.jb.CI);this.V.L(A.jb.Text);}}else{if(this.Hd){this.AW.FG(A.jb.CI);this.HB.CY(
A.jb.CI);}else{this.AW.FG(A.jb.CU);this.HB.CY(A.jb.CU);}this.Bb(null);}this.M8.L(
this.V.AQ);},IS:function(G){C.Ee.IS.call(this,G);if(!this.A9)this.FO(this);else this.
G8(this);},DH:function(G){var F;if(!this.N)return;switch(this.A9){case 1:{(F=this.
N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.
N,F[1].call(F[0])).CA=[this,this.G8];(F=this.N,F[1].call(F[0])).Cq(null);(F=this.
N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=null;(F=this.N,F[1].call(
F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=
null;}break;default:this.FC.AkF((F=this.N,F[1].call(F[0])));}},FO:function(G){this.
Et(1);},G8:function(G){this.Et(0);},Et:function(EK){var F;if(!this.A9&&!!this.N)
this.FC.Ajr((F=this.N,F[1].call(F[0])));this.A9=EK;if(this.A9<0)this.A9=0;else if(
this.A9>1)this.A9=1;switch(this.A9){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SE(2);else this.AW.SE(7);}break;default:throw new Error(
As7+this.A9.toFixed());}this.DH(this);this.An();},BC:function(E){if(this.AM===E)
return;this.AM=E;},Om:function(G){this.AAW(2);},MU:function(G){this.AAW(7);},AAW:
function(Gt){var B;var Azi=(A.Core.O.isPrototypeOf(B=this.AV)?B:null);if(!!Azi){
var Az$=(A.Core.O.isPrototypeOf(B=this.QB(Azi,Gt,0x15))?B:null);if(!!Az$){this.Bb(
Az$);return true;}}return false;},AfQ:function(G){var F;if(!this.Ev||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M8.Aw(
A._GetAutoObject(A.Device.Converter).AmK(2));break;case 1:this.M8.Aw(A._GetAutoObject(
A.Device.Converter).AmK((F=this.Ev,F[1].call(F[0]))));break;default:throw new Error(
Bas+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A3V],this);},A3V:function(G){var B;var F;if(!this.Ev||!this.EartagNrAssignmentMode
){this.Kf.AeP(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Anj,B.Aos]);this.Kf.
AeP([B=A._GetAutoObject(A.Device.Device),B.AEn,B.AIy]);}break;case 1:switch((F=this.
Ev,F[1].call(F[0]))){case 1:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Av4
,B.Ayy]);this.Kf.AeP([B=A._GetAutoObject(A.Device.Device),B.AR$,B.AZU]);}break;case
0:{this.AW.As([B=A._GetAutoObject(A.Device.Device),B.Av5,B.Ayz]);this.Kf.AeP([B=
A._GetAutoObject(A.Device.Device),B.ASa,B.AZV]);}break;case 2:{this.AW.As([B=A._GetAutoObject(
A.Device.Device),B.Anj,B.Aos]);this.Kf.AeP([B=A._GetAutoObject(A.Device.Device),
B.AEn,B.AIy]);}break;default:throw new Error(BsV+(F=this.Ev,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Bas+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Ug:function(E){if(A.aaZ(this.Ev,E))return;if(!!this.Ev)A.z$([
this,this.AfQ],this.Ev,0);this.Ev=E;if(!!E)A.zX([this,this.AfQ],this.Ev,0);if(!!
E)A.pe([this,this.AfQ],this);},Akm:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfQ],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfQ],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfQ],this);},Ud:function(){return this.AM;},_Init:function(
aArg){C.Ee._Init.call(this,aArg);A.Core.BL._Init.call(this.Ff={I:this},0);A.Core.
BL._Init.call(this.E4={I:this},0);C.AqX._Init.call(this.HB={I:this},0);C.AvG._Init.
call(this.AW={I:this},0);C.AuR._Init.call(this.Kf={I:this},0);A.acg.Am._Init.call(
this.M8={I:this},0);this.__proto__=C.AGt;var B;this.H(UQ);this.V.Ar(false);this.
V.R(AsW);this.V.L(A.jb.Bm);this.Ff.Filter=6;this.E4.Filter=7;this.HB.H(BsW);this.
AW.H(BsX);this.M8.H(BsY);this.J(this.HB,0);this.J(this.AW,0);this.J(this.M8,0);this.
FC=A._NewObject(C.Aeg,0);this.Ff.BM=[this,this.Om];this.E4.BM=[this,this.MU];this.
HB.CJ(this.Kf);this.HB.As([B=this.Kf,B.B$,B.Ca]);this.AW.As([this,this.Ud,this.BC
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ee;this.Ff._Done();this.E4.
_Done();this.HB._Done();this.AW._Done();this.Kf._Done();this.M8._Done();C.Ee._Done.
call(this);},_ReInit:function(){C.Ee._ReInit.call(this);this.Ff._ReInit();this.E4.
_ReInit();this.HB._ReInit();this.AW._ReInit();this.Kf._ReInit();this.M8._ReInit(
);},_Mark:function(D){var B;C.Ee._Mark.call(this,D);if((B=this.FC)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ev)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ff)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AND={Wc:
null,Y8:null,Y4:null,T7:null,Init:function(aArg){this.Bb(this.Wc);},AEf:function(
G){var BdX=(C.Am$.isPrototypeOf(G)?G:null);if(!!BdX)A._GetAutoObject(A.Device.Device
).A_(BdX.Adr,true,A.jV,0,null);},Dz:function(G){if((this.Cp.CN===7)&&(this.AV===
this.T7))A._GetAutoObject(A.Device.Device).A_(10,true,A.jV,0,null);else if((this.
Cp.CN===6)&&(this.AV===this.T7))A._GetAutoObject(C.A1).BU(103);C.Eg.Dz.call(this
,G);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.Am$._Init.call(this.Wc={
I:this},0);C.Am$._Init.call(this.Y8={I:this},0);C.Am$._Init.call(this.Y4={I:this
},0);C.Am$._Init.call(this.T7={I:this},0);this.__proto__=C.AND;this.Dn(C.AOU);this.
Wc.H(IN);this.Wc.Aj(true);this.Wc.T(A.aaR(A.acf.Ahw));this.Wc.Bj(false);this.Wc.
Adr=79;this.Y8.H(P5);this.Y8.Aj(true);this.Y8.T(A.aaR(A.acf.A$p));this.Y8.Bj(true
);this.Y8.Adr=77;this.Y4.H(Z7);this.Y4.Aj(true);this.Y4.T(A.aaR(A.acf.A6S));this.
Y4.Bj(false);this.Y4.Adr=78;this.T7.H(Ak7);this.T7.Aj(true);this.T7.T(A.aaR(A.acf.
About));this.T7.Bj(true);this.T7.Adr=3;this.J(this.Wc,-1);this.J(this.Y8,-1);this.
J(this.Y4,-1);this.J(this.T7,-1);this.Wc.AR=[this,this.AEf];this.Y8.AR=[this,this.
AEf];this.Y4.AR=[this,this.AEf];this.T7.AR=[this,this.AEf];this.Init(aArg);},_Done:
function(){this.__proto__=C.Eg;this.Wc._Done();this.Y8._Done();this.Y4._Done();this.
T7._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Wc._ReInit();this.Y8._ReInit();this.Y4._ReInit();this.T7._ReInit();this.Wc.T(A.aaR(
A.acf.Ahw));this.Y8.T(A.aaR(A.acf.A$p));this.Y4.T(A.aaR(A.acf.A6S));this.T7.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Wc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T7)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AOU={_Init:function(aArg){C.KM.
_Init.call(this,aArg);this.__proto__=C.AOU;this.Text.R(A.acf.Info);},_className:
"Application::HeaderDeviceInfoMenu"};C.ANB={FactoryResetScope:null,T_:null,Wa:null
,Ua:null,Init:function(aArg){this.Bb(this.T_);A.pe([this,this.MG],this);},Bj7:function(
G){switch(this.FactoryResetScope.C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(
A.Device.Device).A_(33,true,A.jV,0,[this,this.BfM]);break;case 0:A._GetAutoObject(
A.Device.Device).A_(7,true,A.jV,0,[this,this.BfM]);break;default:A.ab5("%s%i",BsZ
,this.FactoryResetScope.Q);}},BfM:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))switch(At.Id){case 7:{A._GetAutoObject(A.
Device.Device).Bn6();A._GetAutoObject(A.Device.Device).A_(8,true,A.jV,0,null);A.
_GetAutoObject(C.A1).BU(38);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bn5(
);A._GetAutoObject(A.Device.Device).ArD(0);A._GetAutoObject(A.Device.Device).ArE(
0);A._GetAutoObject(A.Device.Device).ArF(0);A._GetAutoObject(A.Device.Device).ArJ(
0);A._GetAutoObject(A.Device.Device).ArK(0);A._GetAutoObject(A.Device.Device).ArL(
0);A._GetAutoObject(A.Device.Device).Ue(5);A._GetAutoObject(A.Device.Device).Awq(
0);A._GetAutoObject(A.Device.Device).Awr(0);A._GetAutoObject(A.Device.Device).Aws(
0);A._GetAutoObject(A.Device.Device).AwK(1);A._GetAutoObject(A.Device.Device).AwL(
1);A._GetAutoObject(A.Device.Device).AwM(1);A._GetAutoObject(A.Device.Device).A_(
34,true,A.jV,0,null);}break;default:A.ab5("%s%e",AH2,At.Id);}},_Init:function(aArg
){C.Eg._Init.call(this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={
I:this},0);C.NV._Init.call(this.T_={I:this},0);C.NV._Init.call(this.Wa={I:this},
0);C.BZ._Init.call(this.Ua={I:this},0);this.__proto__=C.ANB;var B;this.Dn(C.AOS);
this.T_.H(IN);this.T_.Aj(true);this.T_.T(A.aaR(A.acf.ACe));this.T_.Bj(false);this.
T_.NY(105);this.Wa.H(P5);this.Wa.Aj(true);this.Wa.T(A.aaR(A.acf.XI));this.Wa.Bj(
true);this.Wa.NY(104);this.Ua.H(Bat);this.Ua.Aj(true);this.Ua.Blr(true);this.Ua.
T(A.aaR(A.acf.A6k));this.Ua.Bj(false);this.J(this.T_,-1);this.J(this.Wa,-1);this.
J(this.Ua,-1);this.T_.AR=[B=this.T_,B.NZ];this.Wa.AR=[B=this.Wa,B.NZ];this.Ua.AR=[
this,this.Bj7];this.Ua.As([B=this.FactoryResetScope,B.B$,B.Ca]);this.Ua.CJ(this.
FactoryResetScope);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.FactoryResetScope.
_Done();this.T_._Done();this.Wa._Done();this.Ua._Done();C.Eg._Done.call(this);},
_ReInit:function(){C.Eg._ReInit.call(this);this.FactoryResetScope._ReInit();this.
T_._ReInit();this.Wa._ReInit();this.Ua._ReInit();this.T_.T(A.aaR(A.acf.ACe));this.
Wa.T(A.aaR(A.acf.XI));this.Ua.T(A.aaR(A.acf.A6k));},_Mark:function(D){var B;C.Eg.
_Mark.call(this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wa)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AOS={_Init:function(aArg){C.KM._Init.call(this,aArg);this.__proto__=C.AOS;this.
Text.R(A.aaR(A.acf.ACg));},_ReInit:function(){C.KM._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ACg));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.AmR={QN:null,V3:null,_Init:function(aArg){C.TR._Init.call(this,aArg);C.CG._Init.
call(this.QN={I:this},0);C.CG._Init.call(this.V3={I:this},0);this.__proto__=C.AmR;
this.QN.H(Bs0);this.QN.R(A.aaR(A.acf.A$h));this.QN.A8(0x12);this.QN.L(A.jb.Text);
this.V3.H(Ban);this.V3.R(A.aaR(A.acf.AnZ));this.V3.L(A.jb.Text);this.J(this.QN,0
);this.J(this.V3,0);this.QN.S(A.aaL(A.fl.Af));this.QN.A2(A.aaL(A.fl.Ak));this.QN.
Ct(A.aaL(A.fl.Bi));this.V3.S(A.aaL(A.fl.Af));this.V3.A2(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TR;this.QN._Done();this.V3._Done();C.TR._Done.call(this
);},_ReInit:function(){C.TR._ReInit.call(this);this.QN._ReInit();this.V3._ReInit(
);this.QN.R(A.aaR(A.acf.A$h));this.V3.R(A.aaR(A.acf.AnZ));this.QN.S(A.aaL(A.fl.Af
));this.QN.A2(A.aaL(A.fl.Ak));this.QN.Ct(A.aaL(A.fl.Bi));this.V3.S(A.aaL(A.fl.Af
));this.V3.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TR._Mark.call(this,D);
if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V3)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.APo={QO:
null,_Init:function(aArg){C.TR._Init.call(this,aArg);C.CG._Init.call(this.QO={I:
this},0);this.__proto__=C.APo;this.QO.H(Bs1);this.QO.R(A.aaR(A.acf.Uc));this.QO.
A8(0x12);this.QO.L(A.jb.Text);this.J(this.QO,0);this.QO.S(A.aaL(A.fl.Af));this.QO.
A2(A.aaL(A.fl.Ak));this.QO.Ct(A.aaL(A.fl.Bi));},_Done:function(){this.__proto__=
C.TR;this.QO._Done();C.TR._Done.call(this);},_ReInit:function(){C.TR._ReInit.call(
this);this.QO._ReInit();this.QO.R(A.aaR(A.acf.Uc));this.QO.S(A.aaL(A.fl.Af));this.
QO.A2(A.aaL(A.fl.Ak));this.QO.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.TR.
_Mark.call(this,D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Amq={IF:null,Abq:null,D_:null,Bk:function(aSize){C.M1.Bk.call(this,aSize);this.
IF.H([this.Gs.M[2],0,this.Gs.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.D_.H([
this.IF.M[2]-1,0,this.IF.M[2]+1,aSize[1]]);this.Abq.H([this.IF.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.Abq.L(this.Gs.AQ);this.IF.L(this.
Gs.AQ);},Ce:function(Ad){C.M1.Ce.call(this,Ad);if(!this.AX)return;this.Hk=Ad;if(
!!this.AX){var H9=this.AX.AmL(Ad,14);var AtE=this.AX.AOA(Ad,7);this.IF.Aw(A._GetAutoObject(
A.Device.Converter).AmK(AtE));this.Abq.Aw(A._GetAutoObject(A.Device.Converter).A4N(
H9));this.An();}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Am._Init.
call(this.IF={I:this},0);A.acg.Am._Init.call(this.Abq={I:this},0);A.acg.AL._Init.
call(this.D_={I:this},0);this.__proto__=C.Amq;this.IF.H(Bap);this.IF.L(A.jb.Text
);this.Abq.H(Bs2);this.Abq.L(A.jb.Text);this.D_.H(Bs3);this.D_.L(A.jb.Bc);this.J(
this.IF,0);this.J(this.Abq,0);this.J(this.D_,0);this.IF.Aw(A.aaL(A.aci.TH));this.
Abq.Aw(A.aaL(A.aci.TH));},_Done:function(){this.__proto__=C.M1;this.IF._Done();this.
Abq._Done();this.D_._Done();C.M1._Done.call(this);},_ReInit:function(){C.M1._ReInit.
call(this);this.IF._ReInit();this.Abq._ReInit();this.D_._ReInit();},_Mark:function(
D){var B;C.M1._Mark.call(this,D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AMS={ZE:null
,Bk:function(aSize){C.M1.Bk.call(this,aSize);this.ZE.H([this.Gs.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M1.Ai.call(this,Ae);this.ZE.L(this.Gs.AQ);},Ce:function(
Ad){C.M1.Ce.call(this,Ad);if(!this.AX)return;this.Hk=Ad;if(!!this.AX){var KB=this.
AX.KL(Ad,26);if(KB>0)this.ZE.R(A.ab2(KB.toFixed(),5));else this.ZE.R(Rj);this.An(
);}},_Init:function(aArg){C.M1._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZE={I:this},0);this.__proto__=C.AMS;this.ZE.H(Bs4);this.J(this.ZE,0);this.ZE.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M1;this.ZE._Done();C.M1._Done.
call(this);},_ReInit:function(){C.M1._ReInit.call(this);this.ZE._ReInit();this.ZE.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M1._Mark.call(this,D);if((B=this.ZE
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ARy={Am:null,Ai:function(Ae){C.AeH.Ai.call(this,Ae);this.Am.L(this.Text.AQ);
},_Init:function(aArg){C.AeH._Init.call(this,aArg);A.acg.Am._Init.call(this.Am={
I:this},0);this.__proto__=C.ARy;this.Text.H(Bs5);this.Am.H(AZL);this.J(this.Am,0
);this.Am.Aw(A.aaL(A.ach.Ae4));},_Done:function(){this.__proto__=C.AeH;this.Am._Done(
);C.AeH._Done.call(this);},_ReInit:function(){C.AeH._ReInit.call(this);this.Am._ReInit(
);},_Mark:function(D){var B;C.AeH._Mark.call(this,D);if((B=this.Am)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Ym={Text:
null,Dc:null,AP:null,JI:null,CT:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Ni],[B=A._GetAutoObject(A.Device.Device),B.AEj,B.AIv],0);A.zV([this,this.Ni
],A._GetAutoObject(A.Device.Device).Ao,0);A.pe([this,this.Ni],this);},Dd:function(
E){C.BS.Dd.call(this,E);this.Dc.L(E);this.Text.L(E);this.JI.L(E);this.CT.AeQ(E);
},Wo:function(E){C.BS.Wo.call(this,E);this.CT.CY(E);},D3:function(G){this.CT.T(A.
_GetAutoObject(A.Device.Device).Ao.Cd().toFixed());},Ni:function(s){this.D3(s);}
,_Init:function(aArg){C.BS._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Am._Init.call(this.Dc={I:this},0);A.acg.DQ._Init.call(this.AP={I:this
},0);A.acg.Am._Init.call(this.JI={I:this},0);C.CT._Init.call(this.CT={I:this},0);
A.acg.DQ._Init.call(this.A$={I:this},0);this.__proto__=C.Ym;this.Text.H(Bs6);this.
Text.A8(0x11);this.Dc.H(Ayl);this.AP.DE(Baj);this.AP.DR(Bak);this.AP.L(A.jb.Bc);
this.JI.H(Bs7);this.JI.L(A.jb.CU);this.CT.A3(0x14);this.CT.H(Bs8);this.CT.AeQ(A.
jb.Bm);this.CT.CY(A.jb.ST);this.CT.Hs(2);this.A$.DE(Bs9);this.A$.DR(Bs_);this.A$.
L(A.jb.Bc);this.J(this.Text,0);this.J(this.Dc,0);this.J(this.AP,0);this.J(this.JI
,0);this.J(this.CT,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.Dc.Aw(A.aaL(A.ach.AjO));this.JI.Aw(A.aaL(A.ach.JI));this.CT.
S(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.BS;this.Text.
_Done();this.Dc._Done();this.AP._Done();this.JI._Done();this.CT._Done();this.A$.
_Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.
Text._ReInit();this.Dc._ReInit();this.AP._ReInit();this.JI._ReInit();this.CT._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
CT.S(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JI)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acg={FC:null
,JS:null,JR:null,AkC:null,AkD:null,Q2:null,Qy:null,Abp:null,VO:null,PF:null,PG:null
,Sr:null,Go:null,Gp:null,Jp:null,AlB:0,AlG:0,D5:0,DW:0,A9:0,Bk:function(aSize){var
B;this.Dw.H([this.Hr.M[2]-10,this.Hr.M[1],this.H0.M[0]+10,this.Hr.M[3]]);this.Dw.
AE8((B=this.Dw.M)[2]-B[0]);this.Dw.HC(this.Dw.Gl,true,null,null);},Ai:function(Ae
){var B;C.BZ.Ai.call(this,Ae);var Fo=((Ae&0x20)===0x20);var Gx=this.Bo.By;if(!!this.
Q)this.GA(this);if((this.A9===1)||(this.A9===2)){var A0Y=this.A1X(this.A9);if(!!
A0Y){this.Abp.Z(true);this.Abp.H(A0Y.M);this.Abp.L(this.V.AQ);this.VO.Z(true);this.
VO.H(A0Y.M);}else{this.Abp.Z(false);this.VO.Z(false);}this.Hr.Z(false);this.H0.Z(
false);}else{this.Abp.Z(false);this.VO.Z(false);this.Hr.Z(Fo||Gx);this.H0.Z(Fo||
Gx);}},Qk:function(G){if(!!this.Q){if(this.Fy===1)A.pe([this,this.U2],this);else
if(this.Fy===4)A.pe([this,this.A0f],this);else if(this.Fy===5)A.pe([this,this.A0d
],this);}C.BZ.Qk.call(this,G);},J8:function(G){switch(this.A9){case 0:C.BZ.J8.call(
this,G);break;case 2:break;default:this.Adl(this);}},J3:function(G){switch(this.
A9){case 0:C.BZ.J3.call(this,G);break;default:this.Aif(this);}},A1t:function(G){
var F;if(this.A9===1){var BR=this.D5;this.D5=this.D5-10;if(this.D5<this.AlG)this.
D5=this.AlG;if(this.D5<A._GetAutoObject(A.Device.Device).ZQ)this.D5=A._GetAutoObject(
A.Device.Device).ZQ;if(this.DW!==BR){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.
D5));A.abo(this.JS,0);}}if(this.A9===2){var BR=this.DW;this.DW=this.DW-10;if(this.
DW<this.D5)this.DW=this.D5;if(this.DW!==BR){if(!!this.JR)(F=this.JR,F[2].call(F[
0],this.DW));A.abo(this.JR,0);}}this.DH(this);this.An();},A0d:function(s){this.A1t(
s);},AlR:function(G){this.Fy=5;this.An();if(this.Bo.By){A.pe([this,this.A0d],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A14:function(G){var F;if(this.A9===1){var
BR=this.D5;this.D5=this.D5+10;if(this.D5>this.DW)this.D5=this.DW;if(this.D5!==BR
){if(!!this.JS)(F=this.JS,F[2].call(F[0],this.D5));A.abo(this.JS,0);}}if(this.A9===
2){var BR=this.DW;this.DW=this.DW+10;if(this.DW>this.AlB)this.DW=this.AlB;if(this.
DW!==BR){if(!!this.JR)(F=this.JR,F[2].call(F[0],this.DW));A.abo(this.JR,0);}}this.
DH(this);this.An();},A0f:function(s){this.A14(s);},AlS:function(G){this.Fy=4;this.
An();if(this.Bo.By){A.pe([this,this.A0f],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},U2:function(G){this.Et(this.A9+1);},Adl:function(G){this.Fy=1;this.An(
);if(this.Bo.By){A.pe([this,this.U2],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GA:function(G){},Afv:function(s){this.GA(s);},DH:function(G){var F;if(!this.N)return;
switch(this.A9){case 1:{(F=this.N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.N
,F[1].call(F[0])).Ht(A.jV);(F=this.N,F[1].call(F[0])).CA=[this,this.G8];(F=this.
N,F[1].call(F[0])).Cq(null);(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[1].call(
F[0])).Ck=null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.Aen));(F=this.N,F[1].call(
F[0])).B2(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.U2];}break;case 2:{(F=this.
N,F[1].call(F[0])).CZ(A.aaL(A.ach.EX));(F=this.N,F[1].call(F[0])).Ht(A.jV);(F=this.
N,F[1].call(F[0])).CA=[this,this.G8];(F=this.N,F[1].call(F[0])).Cq(A.aaL(A.ach.AmS
));(F=this.N,F[1].call(F[0])).FH(A.jV);(F=this.N,F[1].call(F[0])).Ck=[this,this.
Aif];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).B2(A.jV);(F=
this.N,F[1].call(F[0])).Cg=null;}break;default:this.FC.AkF((F=this.N,F[1].call(F[
0])));}},A_d:function(E){if(A.aaZ(this.JS,E))return;if(!!this.JS)A.z$([this,this.
A3q],this.JS,0);this.JS=E;if(!!this.JS)A.zX([this,this.A3q],this.JS,0);A.pe([this
,this.A3q],this);},A3q:function(G){var F;this.D5=(F=this.JS,F[1].call(F[0]));this.
An();},A_c:function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([this,this.A3p
],this.JR,0);this.JR=E;if(!!this.JR)A.zX([this,this.A3p],this.JR,0);A.pe([this,this.
A3p],this);},A3p:function(G){var F;this.DW=(F=this.JR,F[1].call(F[0]));this.An();
},FO:function(G){this.Et(1);},G8:function(G){this.Et(0);},Et:function(EK){var F;
if(!this.A9)this.FC.Ajr((F=this.N,F[1].call(F[0])));this.A9=EK;if((this.A9<0)||(
this.A9>2))this.A9=0;this.DH(this);this.Gp.By=!!this.A9;this.Go.By=!!this.A9;this.
An();},Aif:function(G){if(this.A9>1)this.Et(this.A9-1);},A3D:function(G){},AyI:function(
s){this.A3D(s);},A3c:function(G){},Bbv:function(s){this.A3c(s);},A1X:function(Ate
){return null;},_Init:function(aArg){C.BZ._Init.call(this,aArg);A.acg.AL._Init.call(
this.AkC={I:this},0);A.acg.AL._Init.call(this.AkD={I:this},0);A.acg.AL._Init.call(
this.Q2={I:this},0);A.acg.Am._Init.call(this.Qy={I:this},0);A.acg.AL._Init.call(
this.Abp={I:this},0);A.acg.Cf._Init.call(this.VO={I:this},0);A.acg.Text._Init.call(
this.PF={I:this},0);A.acg.Text._Init.call(this.PG={I:this},0);A.acg.Text._Init.call(
this.Sr={I:this},0);A.Core.BL._Init.call(this.Go={I:this},0);A.Core.BL._Init.call(
this.Gp={I:this},0);A.Core.BL._Init.call(this.Jp={I:this},0);this.__proto__=C.Acg;
this.H(Afs);this.T(A.aaR(A.acf.Aq$));this.Background.H(Afs);this.V.H(BF);this.V.
R(A.aaR(A.acf.AGN));this.V.A8(0x12);this.AkC.H(Bs$);this.AkC.L(A.jb.Gb);this.AkD.
H(Bta);this.AkD.L(A.jb.H4);this.Q2.H(Btb);this.Q2.L(A.jb.EW);this.Qy.H(Btc);this.
Abp.H(Btd);this.VO.H(Bte);this.VO.Ne(3);this.VO.L(A.jb.AV);this.VO.Z(false);this.
PF.H(Btf);this.PF.Hs(8);this.PF.I3(true);this.PF.A8(0x11);this.PF.L(0xFF000000);
this.PG.H(Btg);this.PG.Hs(8);this.PG.I3(true);this.PG.A8(0x11);this.PG.L(0xFF000000
);this.Sr.H(Bth);this.Sr.I3(false);this.Sr.A8(0x12);this.Sr.L(0xFF000000);this.Go.
Filter=5;this.Go.By=false;this.Gp.Filter=4;this.Gp.By=false;this.Jp.Filter=1;this.
JU(this.V,-1);this.JU(this.Dw,-2);this.J(this.AkC,-1);this.J(this.AkD,-1);this.J(
this.Q2,-1);this.J(this.Qy,-1);this.J(this.Abp,-1);this.J(this.VO,-1);this.J(this.
PF,-1);this.J(this.PG,0);this.J(this.Sr,0);this.Qy.Aw(A.aaL(A.ach.ADk));this.PF.
S(A.aaL(A.fl.Af));this.PG.S(A.aaL(A.fl.Af));this.Sr.S(A.aaL(A.fl.Ak));this.Go.BM=[
this,this.AlR];this.Go.DZ=[this,this.A0d];this.Gp.BM=[this,this.AlS];this.Gp.DZ=[
this,this.A0f];this.Jp.BM=[this,this.Adl];this.FC=A._NewObject(C.Aeg,0);},_Done:
function(){this.__proto__=C.BZ;this.AkC._Done();this.AkD._Done();this.Q2._Done();
this.Qy._Done();this.Abp._Done();this.VO._Done();this.PF._Done();this.PG._Done();
this.Sr._Done();this.Go._Done();this.Gp._Done();this.Jp._Done();C.BZ._Done.call(
this);},_ReInit:function(){C.BZ._ReInit.call(this);this.AkC._ReInit();this.AkD._ReInit(
);this.Q2._ReInit();this.Qy._ReInit();this.Abp._ReInit();this.VO._ReInit();this.
PF._ReInit();this.PG._ReInit();this.Sr._ReInit();this.Go._ReInit();this.Gp._ReInit(
);this.Jp._ReInit();this.T(A.aaR(A.acf.Aq$));this.V.R(A.aaR(A.acf.AGN));this.PF.
S(A.aaL(A.fl.Af));this.PG.S(A.aaL(A.fl.Af));this.Sr.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BZ._Mark.call(this,D);if((B=this.FC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JR)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FB={XP:null,Aci:
null,An3:0,An4:0,Dr:function(){if(!this.XP)return 0;return this.XP.MC;},C7:function(
aIndex){if(!this.XP||(aIndex>=this.XP.MC))return-1;return this.XP.Get(aIndex);},
Gd:function(aIndex){return this.A6C().BO(this.C7(aIndex));},DO:function(A7){if(!
this.XP)return-1;return this.XP.Avg(A7);},Hp:function(){if(!this.XP)return-1;return this.
XP.Hp();},AnA:function(E){if(this.An3===E)return;this.An3=E;A.pe([this,this.AVg]
,this);},AZ_:function(Aq){this.AnA(Aq);},AnB:function(E){if(this.An4===E)return;
this.An4=E;A.pe([this,this.AVh],this);},AZ$:function(Aq){this.AnB(Aq);},AVh:function(
G){A.abo([this,this.ASy,this.AZ$],0);},AVg:function(G){A.abo([this,this.ASx,this.
AZ_],0);},A6C:function(){return this.Aci;},ASx:function(){return this.An3;},ASy:
function(){return this.An4;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Aci={I:this},0);this.__proto__=C.FB;},_Done:function(
){this.__proto__=C.AC;this.Aci._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Aci._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aci)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMm={Init:
function(aArg){A.zV([this,this.BeZ],A._GetAutoObject(A.Device.Helper).UA,0);A.zV([
this,this.BeX],A._GetAutoObject(A.Device.Helper).Uz,0);this.BeZ(this);this.BeX(this
);},As:function(E){C.FB.As.call(this,E);this.AnB(A._GetAutoObject(A.Device.Helper
).UA.Get(this.DO(E)));this.AnA(A._GetAutoObject(A.Device.Helper).Uz.Get(this.DO(
E)));},AnA:function(E){if(this.An3===E)return;C.FB.AnA.call(this,E);A._GetAutoObject(
A.Device.Helper).Uz.Set(this.DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Uz.
Co();},AnB:function(E){if(this.An4===E)return;C.FB.AnB.call(this,E);A._GetAutoObject(
A.Device.Helper).UA.Set(this.DO(this.Q),E);A._GetAutoObject(A.Device.Helper).UA.
Co();},BeZ:function(G){this.An4=A._GetAutoObject(A.Device.Helper).UA.Get(this.DO(
this.Q));A.pe([this,this.AVh],this);},BeX:function(G){this.An3=A._GetAutoObject(
A.Device.Helper).Uz.Get(this.DO(this.Q));A.pe([this,this.AVg],this);},_Init:function(
aArg){C.FB._Init.call(this,aArg);this.__proto__=C.AMm;this.XP=A._GetAutoObject(A.
Device.Helper).AdN;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMn={Agq:null,ABI:0,ABH:0,Init:function(aArg){A.zV([this,this.Be$],A._GetAutoObject(
A.Device.Helper).Afm,0);A.zV([this,this.Be9],A._GetAutoObject(A.Device.Helper).Afl
,0);A.zV([this,this.Be7],A._GetAutoObject(A.Device.Helper).Afk,0);A.zV([this,this.
Bfb],A._GetAutoObject(A.Device.Helper).Afn,0);this.Be$(this);this.Be9(this);this.
Be7(this);this.Bfb(this);},As:function(E){C.FB.As.call(this,E);this.AnB(A._GetAutoObject(
A.Device.Helper).Afm.Get(this.DO(E)));this.AnA(A._GetAutoObject(A.Device.Helper).
Afl.Get(this.DO(E)));this.ASC(A._GetAutoObject(A.Device.Helper).Afk.Get(this.DO(
E)));this.ASE(A._GetAutoObject(A.Device.Helper).Afn.Get(this.DO(E)));},AnA:function(
E){if(this.An3===E)return;C.FB.AnA.call(this,E);A._GetAutoObject(A.Device.Helper
).Afl.Set(this.DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Afl.Co();},AnB:function(
E){if(this.An4===E)return;C.FB.AnB.call(this,E);A._GetAutoObject(A.Device.Helper
).Afm.Set(this.DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Afm.Co();},A6C:function(
){return this.Agq;},Be$:function(G){this.An4=A._GetAutoObject(A.Device.Helper).Afm.
Get(this.DO(this.Q));A.pe([this,this.AVh],this);},Be9:function(G){this.An3=A._GetAutoObject(
A.Device.Helper).Afl.Get(this.DO(this.Q));A.pe([this,this.AVg],this);},ASE:function(
E){if(this.ABI===E)return;this.ABI=E;A._GetAutoObject(A.Device.Helper).Afn.Set(this.
DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Afn.Co();A.pe([this,this.A$N],this
);},ASC:function(E){if(this.ABH===E)return;this.ABH=E;A._GetAutoObject(A.Device.
Helper).Afk.Set(this.DO(this.Q),E);A._GetAutoObject(A.Device.Helper).Afk.Co();A.
pe([this,this.A$M],this);},A$M:function(G){A.abo([this,this.A8q,this.ASC],0);},A$N:
function(G){A.abo([this,this.A8r,this.ASE],0);},Be7:function(G){this.ABH=A._GetAutoObject(
A.Device.Helper).Afk.Get(this.DO(this.Q));A.pe([this,this.A$M],this);},Bfb:function(
G){this.ABI=A._GetAutoObject(A.Device.Helper).Afn.Get(this.DO(this.Q));A.pe([this
,this.A$N],this);},A8r:function(){return this.ABI;},A8q:function(){return this.ABH;
},_Init:function(aArg){C.FB._Init.call(this,aArg);A.Device.Agq._Init.call(this.Agq={
I:this},0);this.__proto__=C.AMn;this.XP=A._GetAutoObject(A.Device.Helper).Agr;this.
Init(aArg);},_Done:function(){this.__proto__=C.FB;this.Agq._Done();C.FB._Done.call(
this);},_ReInit:function(){C.FB._ReInit.call(this);this.Agq._ReInit();},_Mark:function(
D){var B;C.FB._Mark.call(this,D);if((B=this.Agq)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AL5={RH:null,Init:function(
aArg){var B;A.zX([this,this.AiD],[B=this.AnimalType,B.B$,B.Ca],0);A.pe([this,this.
AiD],this);this.Bb(this.RH);},Bl:function(E){C.IW.Bl.call(this,E);this.RH.BC(this.
Jj.AM);},AiD:function(G){A._GetAutoObject(A.Device.Device).Awt(this.AnimalType.Q
);},_Init:function(aArg){C.IW._Init.call(this,aArg);C.TB._Init.call(this.RH={I:this
},0);this.__proto__=C.AL5;var B;this.Jj.Ar(false);this.Jj.Aj(false);this.Jj.Z(false
);this.RH.H(AIr);this.RH.Aj(true);this.RH.Nb(14);this.RH.Ahh(0);this.RH.OK(0);this.
J(this.RH,-6);this.RH.AR=[this,this.AAh];this.RH.As([B=this.AnimalType,B.B$,B.Ca
]);this.RH.CJ(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.IW;this.RH._Done();C.IW._Done.call(this);},_ReInit:function(){C.IW._ReInit.call(
this);this.RH._ReInit();},_Mark:function(D){var B;C.IW._Mark.call(this,D);if((B=
this.RH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TB={Filter:null,En:0,TableId:0,Operator:1,CS:function(){var F;this.Tm((F=this.
Filter,F[1].call(F[0])).DN(this.En,this.Operator));},Bk:function(aSize){var B;C.
BZ.Bk.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hr.H(AhK
);this.H0.H([aSize[0]-40,40,aSize[0],80]);this.Dw.H([this.Hr.M[2]-5,this.Hr.M[1]
,this.H0.M[0]+5,this.Hr.M[3]]);this.Dw.AE8((B=this.Dw.M)[2]-B[0]);this.Dw.HC(this.
Dw.Gl,true,null,null);},Bl:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L$],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L$
],E,0);A.pe([this,this.L$],this);},L$:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tm((F=this.Filter,F[1].call(F[0])).DN(this.En,this.
Operator));else this.Tm(null);},Ahh:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.L$],this);},Nb:function(E){if(this.En===E)return;this.
En=E;A.pe([this,this.L$],this);},Tm:function(AH){this.T(A._GetAutoObject(A.Device.
Helper).AmM(this.TableId,this.En));this.An();},OK:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.L$],this);},_Init:function(aArg){C.BZ._Init.
call(this,aArg);this.__proto__=C.TB;this.H(JY);this.V.A8(0x11);this.V.Ct(A.aaL(A.
fl.Bi));},_ReInit:function(){C.BZ._ReInit.call(this);this.V.Ct(A.aaL(A.fl.Bi));this.
CS();},_Mark:function(D){var B;C.BZ._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ARH={F0:null,MP:null,DX:null,Y:null,Ed:null,Cl:null,CF:null,C_:null,Gf:null,
Ec:null,C9:null,BY:null,Ay:null,Breed:null,I_:null,AnimalType:null,Gender:null,Pj:
null,KX:null,I8:null,Yz:null,Al8:null,KG:0,M2:0,A3L:false,Init:function(aArg){var
B;A.zX([this,this.BAb],[B=A._GetAutoObject(A.Device.Device),B.AEo,B.AIz],0);A.zV([
this,this.AtQ],this.MP,0);A.zX([this,this.AtQ],[B=A._GetAutoObject(A.Device.Device
),B.Awa,B.AyD],0);A.zX([this,this.GA],[B=A._GetAutoObject(A.Device.Device),B.AEo
,B.AIz],0);A.zV([this,this.GA],this.MP,0);A.zX([this,this.AiD],this.BY.Q,0);A.pe([
this,this.AiD],this);A.pe([this,this.BeA],this);A.pe([this,this.AtQ],this);A.pe([
this,this.GA],this);A.pe([this,this.A3d],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.AK8],this);A.pe([this,this.DH],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ed.Q,F[1].call(F[0])))this.Ed.Arw(A.jb.EW);else
this.Ed.Arw(A.jb.Gb);if(A._GetAutoObject(A.Device.Device).AeB){if(!!(F=this.Cl.Di
,F[1].call(F[0])))this.Cl.Arw(A.jb.EW);else this.Cl.Arw(A.jb.Gb);}else this.Cl.Arw(
A.jb.ST);A.pe([this,this.DH],this);},Dz:function(G){var B;C.AB.Dz.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HC(this.AV,true,null,null);},LN:function(
G){if(A._GetAutoObject(A.Device.Device).Ao.Lg())A._GetAutoObject(A.Device.Device
).A_(41,true,A._GetAutoObject(A.Device.Device).Ao.HF().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gj();A._GetAutoObject(A.Device.Helper).Ap_(A._GetAutoObject(A.
Device.Helper).W);this.Apq();},CB:function(G){C.AB.CB.call(this,G);A._GetAutoObject(
A.Device.Device).AFd(0);},EY:function(G){C.AB.EY.call(this,G);this.I8.Ar(false);
A._GetAutoObject(A.Device.Device).Uk(false);},Es:function(G){A._GetAutoObject(A.
Device.Helper).W.Hf();A._GetAutoObject(C.A1).Fs();},Fb:function(G){var B;this.Ay.
Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.
Y.Bt[1]);},AtQ:function(G){var F,CP;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.AK8(this);this.An();if((this.AV===this.Ed)&&!!(F=this.Ed.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).Ao.Ad_(26,(F=this.Ed.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A_(21,true,A._GetAutoObject(A.Device.Converter
).Rc((F=this.Ed.Q,F[1].call(F[0]))),0,[this,this.A24]);(F=this.Ed.Q,F[2].call(F[
0],0));A.pe([this,this.A23],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeB)this.JA(this.Cl);}var BdQ=!!(F=this.Ed.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeB||!!(CP=this.Cl.Di,CP[1].call(CP[0])));if(this.MP.AOv()>0){if((
this.AV===this.Cl)&&BdQ)this.Bb(this.Y.TK(this.Cl,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeB&&(this.AV===this.Cl))&&!!(F=this.Cl.Di,F[1].call(F[0])))this.
JA(this.Ed);if(BdQ)this.BcD(this);},Xu:function(G){A._GetAutoObject(A.Device.Device
).Dt(13);},AiR:function(){var F;this.F0.Co(A._GetAutoObject(A.Device.Device).Ao);
if(this.MP.NR(23)){if(A._GetAutoObject(A.Device.Device).Bv.Lg())A._GetAutoObject(
A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bv.HF().toFixed(),
0,null);else{var L6=A._GetAutoObject(A.Device.Device).Ao.Lb(0,this.F0.Id);A._GetAutoObject(
A.Device.Device).SF(L6);var B1=A._NewObject(A.Device.Rating,0);B1.Gj();B1.OnSetAnimalId(
this.F0.Id);B1.OnSetBodyWeight(this.KG);B1.OnSetTimestamp(this.F0.DateOfBirth);B1.
Co(A._GetAutoObject(A.Device.Device).Bv);}}if(this.MP.NR(18)){if(A._GetAutoObject(
A.Device.Device).Bv.Lg())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bv.HF().toFixed(),0,null);else{var L6=A._GetAutoObject(A.Device.
Device).Ao.Lb(0,this.F0.Id);A._GetAutoObject(A.Device.Device).SF(L6);var B1=A._NewObject(
A.Device.Rating,0);B1.Gj();B1.OnSetAnimalId(this.F0.Id);B1.OnSetBodyWeight(this.
M2);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Ds());B1.Co(A._GetAutoObject(
A.Device.Device).Bv);}}A._GetAutoObject(A.Device.Device).Ws(65280);this.I8.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFd(F.AvN+1));this.A3L=true;A.pe([this,
this.AK8],this);this.Apq();},GA:function(G){this.Cl.ATd(A._GetAutoObject(A.Device.
Device).AeB);A._GetAutoObject(A.Device.Helper).L0(this.BY,this.MP.NR(14));A._GetAutoObject(
A.Device.Helper).L0(this.C9,this.MP.NR(23));A._GetAutoObject(A.Device.Helper).L0(
this.CF,this.MP.NR(32));A._GetAutoObject(A.Device.Helper).L0(this.Ec,this.MP.NR(
18));A._GetAutoObject(A.Device.Helper).L0(this.C_,this.MP.NR(7));A._GetAutoObject(
A.Device.Helper).L0(this.Gf,this.MP.NR(34));this.Yz.Z(!this.MP.AOv());var P;var Aa=
null;var Ao9=this.AV;for(P=0;P<this.MP.AfD.NM();P++){Aa=this.By7(this.MP.AfD.OB(
P));if(!!Aa)this.Zt(Aa);}this.JA(Ao9);A._GetAutoObject(A.Device.Helper).ANc(this.
Y);A.pe([this,this.A3d],this);this.An();},AeM:function(E){if(this.KG===E)return;
this.KG=E;A.abo([this,this.AvY,this.AeM],0);},Ahb:function(E){if(this.M2===E)return;
this.M2=E;A.abo([this,this.Anh,this.Ahb],0);},BcD:function(G){this.F0.Gj();A._GetAutoObject(
A.Device.Helper).Ap_(this.F0);this.F0.QY(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.F0.Nc(A._GetAutoObject(A.Device.Helper).W.NaisId);this.F0.Ul(A._GetAutoObject(
A.Device.Helper).AL6(0,this.F0));this.F0.AeU(true);if(this.MP.NR(14))this.F0.Ex(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MP.NR(32))this.F0.NW(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MP.NR(7))this.F0.JO(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MP.NR(34))this.F0.Nd(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alg=A._GetAutoObject(A.Device.Helper).A1g(this.F0,0,A._GetAutoObject(
A.Device.Device).Ao);if(!Alg)this.AiR();else A._GetAutoObject(A.Device.Helper).AJ4(
this.F0,Alg,0,0,[this,this.Apw]);},Apq:function(){A._GetAutoObject(A.Device.Helper
).W.Nc(0);if(A._GetAutoObject(A.Device.Device).AeB)A._GetAutoObject(A.Device.Helper
).W.QY(0);this.AeM(0);this.Ahb(0);this.JA(this.Ed);this.An();},Apw:function(G){var
At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!At)return;switch(At.Id){case
22:case 21:case 48:this.Apq();break;case 43:this.JA(this.Ed);break;case 41:break;
default:A.ab5("%s%e",AsU,At.Id);}},JA:function(Ag){this.Bb(Ag);this.Y.HC(Ag,true
,null,null);this.Y.Vm(null,null);},BeA:function(G){this.Ec.Ahf(A._GetAutoObject(
A.Device.Helper).W.AhJ(1));this.AtQ(this);},AiD:function(G){this.C9.Ahf(A._GetAutoObject(
A.Device.Helper).Abf(this.AnimalType.Q));},A3d:function(G){var B;var BBg=this.Ay.
Background.Fi();var width=(BBg?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xj=this.Y.TK(null,0x401);while(!!Xj&&(((B=Xj)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OS.isPrototypeOf(Xj)?Xj:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xj=this.Y.TK(Xj,0x1);}},By7:function(Z$){var Aa=null;switch(Z$){case 14:Aa=this.
BY;break;case 32:Aa=this.CF;break;case 23:Aa=this.C9;break;case 7:Aa=this.C_;break;
case 18:Aa=this.Ec;break;case 34:Aa=this.Gf;break;default:A.ab5("%s%e",Bti,Z$);}
return Aa;},BAb:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeB)A._GetAutoObject(
A.Device.Helper).W.QY(0);else if(!(F=this.Cl.Di,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).W.QY(A._GetAutoObject(A.Device.Helper).Ds()-A._GetAutoObject(A.
Device.Helper).Amy(A._GetAutoObject(A.Device.Device).AdG));this.AtQ(this);},AK8:
function(G){var B;var AJ9=A.jV;var AyZ=A.jb.CI;var BcU=A.jb.AV;this.Al8.Axu(this
);if(this.A3L){this.A3L=false;AJ9=A._GetAutoObject(A.Device.Helper).Ng(A.aaR(A.acf.
Bo2),P4,A._GetAutoObject(A.Device.Converter).Rc(this.F0.NaisId));A.pe([B=this.Al8
,B.StartTimer],this);AyZ=A.jb.EW;BcU=A.jb.Text;}else if((this.AV===this.Ed)&&!A.
_GetAutoObject(A.Device.Helper).W.NaisId)AJ9=A.aaR(A.acf.Bog);else if((this.AV===
this.Cl)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AJ9=A.aaR(A.acf.Bof);
this.Yz.T(AJ9);this.Yz.BlC(AyZ);this.Yz.BlD(BcU);},A24:function(G){var At=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!At){if(At.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajs();else if(At.Id===105){if(At.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajs();else if(At.PopupState===7){A._GetAutoObject(C.A1).BU(87);
A._GetAutoObject(A.Device.Device).Ajs();}}}else A._GetAutoObject(A.Device.Device
).Ajs();},A23:function(G){A._GetAutoObject(A.Device.Device).AuF();},DH:function(
G){var B;if(!this.MP.AOv()){this.N.Ld.Do(255);if(this.AV===this.Ed){this.N.C5(A.
aaL(A.ach.Edit));this.N.Cg=[B=this.Ed,B.FO];}else if(this.AV===this.Cl){this.N.C5(
A.aaL(A.ach.Edit));this.N.Cg=[B=this.Cl,B.FO];}else{this.N.C5(null);this.N.Cg=null;
}}else{this.N.C5(A.aaL(A.ach.AmU));if((this.Ed.Aqi===A.jb.Gb)||(this.Cl.Aqi===A.
jb.Gb)){this.N.Ld.Do(100);this.N.Cg=null;}else{this.N.Ld.Do(255);this.N.Cg=[this
,this.BcD];}}},AvY:function(){return this.KG;},Anh:function(){return this.M2;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DX={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUq._Init.call(this.Ed={I:this},0);C.
AUm._Init.call(this.Cl={I:this},0);C.Axk._Init.call(this.CF={I:this},0);C.BZ._Init.
call(this.C_={I:this},0);C.Asi._Init.call(this.Gf={I:this},0);C.AkJ._Init.call(this.
Ec={I:this},0);C.AkJ._Init.call(this.C9={I:this},0);C.BZ._Init.call(this.BY={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UK._Init.call(this.I_={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M0._Init.call(this.
Pj={I:this},0);A.Device.KX._Init.call(this.KX={I:this},0);A.Device.TC._Init.call(
this.I8={I:this},0);C.AUW._Init.call(this.Yz={I:this},0);A.Core.Timer._Init.call(
this.Al8={I:this},0);this.__proto__=C.ARH;var B;this.Background.L(A.jb.CU);this.
N.Z(true);this.Eh.Ar(false);this.Dn(C.APc);this.DX.A3(0x3F);this.DX.H(E8);this.DX.
L(A.jb.CI);this.Y.H(E8);this.Y.JN(9);this.Ed.H(AIr);this.Ed.Aj(true);this.Ed.T(A.
aaR(A.acf.ACr));this.Ed.ATd(true);this.Ed.AFx(false);this.Cl.H(Bat);this.Cl.Aj(true
);this.Cl.T(A.aaR(A.acf.Ad4));this.Cl.ATd(true);this.Cl.AFr(true);this.CF.H(AsS);
this.CF.Aj(true);this.CF.T(A.aaR(A.acf.Breed));this.C_.H(AsS);this.C_.Aj(true);this.
C_.T(A.aaR(A.acf.Afc));this.Gf.H(Bau);this.Gf.Aj(true);this.Gf.T(A.aaR(A.acf.I_)
);this.Ec.H(Btj);this.Ec.Aj(true);this.Ec.T(A.aaR(A.acf.M2));this.Ec.Gq(1000);this.
Ec.E5(999000);this.Ec.Ahf(A._GetAutoObject(A.Device.Helper).Abf(this.AnimalType.
Q));this.C9.H(Bau);this.C9.Aj(true);this.C9.T(A.aaR(A.acf.KG));this.C9.Gq(1000);
this.C9.E5(99000);this.C9.Ahf(A._GetAutoObject(A.Device.Helper).Abf(this.AnimalType.
Q));this.BY.H(AsR);this.BY.Aj(true);this.BY.T(A.aaR(A.acf.Afh));this.Ay.H(Ip);this.
I8.B3=false;this.I8.Cw=true;this.I8.HK(1);this.I8.Fj(1000);this.I8.Uh(0);this.Yz.
H(Z8);this.Yz.Aj(true);this.Yz.Arw(A.jb.Text);this.Al8.PO(3000);this.J(this.DX,0
);this.J(this.Y,0);this.J(this.Ed,0);this.J(this.Cl,0);this.J(this.CF,0);this.J(
this.C_,0);this.J(this.Gf,0);this.J(this.Ec,0);this.J(this.C9,0);this.J(this.BY,
0);this.J(this.Ay,0);this.J(this.Yz,0);this.N.CA=[this,this.Es];this.N.Ck=[this,
this.Xu];this.N.CZ(A.aaL(A.ach.EX));this.N.Cq(A.aaL(A.ach.Abr));this.Y.Ej=[this,
this.Fb];this.Ed.Gk([this,this.D8,this.GK]);this.Ed.As([B=A._GetAutoObject(A.Device.
Helper).W,B.Ank,B.Nc]);this.Ed.AE3([this,this.AtQ]);this.Ed.AS1([this,this.A23]);
this.Ed.AS2([this,this.A24]);this.Cl.Gk([this,this.D8,this.GK]);this.Cl.AbZ([B=A.
_GetAutoObject(A.Device.Helper).W,B.Av1,B.QY]);this.Cl.OD=[this,this.BeA];this.Cl.
AS1([this,this.A23]);this.Cl.AS2([this,this.A24]);this.CF.Gk([this,this.D8,this.
GK]);this.CF.LW([B=this.CF,B.FO]);this.CF.LZ(A.aaL(A.ach.Edit));this.CF.As([B=this.
Breed,B.B$,B.Ca]);this.CF.CJ(this.Breed);this.CF.Anp(this.Pj);this.C_.As([B=this.
Gender,B.B$,B.Ca]);this.C_.CJ(this.Gender);this.Gf.Gk([this,this.D8,this.GK]);this.
Gf.LW([B=this.Gf,B.FO]);this.Gf.LZ(A.aaL(A.ach.Edit));this.Gf.As([B=this.I_,B.B$
,B.Ca]);this.Gf.CJ(this.I_);this.Gf.Anp(this.KX);this.Ec.As([this,this.Anh,this.
Ahb]);this.C9.As([this,this.AvY,this.AeM]);this.BY.As([B=this.AnimalType,B.B$,B.
Ca]);this.BY.CJ(this.AnimalType);this.Ay.BmY([this,this.A3d]);this.Breed.LX(A._GetAutoObject(
A.Device.Helper).W);this.I_.LX(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LX(A._GetAutoObject(A.Device.Helper).W);this.Gender.LX(A._GetAutoObject(A.Device.
Helper).W);this.F0=A._NewObject(A.Device.Animal,0);this.MP=A._GetAutoObject(C.Amf
);this.I8.Q=[B=A._GetAutoObject(A.Device.Device),B.ASu,B.AZ7];this.Al8.Mx=[this,
this.AK8];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DX._Done();
this.Y._Done();this.Ed._Done();this.Cl._Done();this.CF._Done();this.C_._Done();this.
Gf._Done();this.Ec._Done();this.C9._Done();this.BY._Done();this.Ay._Done();this.
Breed._Done();this.I_._Done();this.AnimalType._Done();this.Gender._Done();this.Pj.
_Done();this.KX._Done();this.I8._Done();this.Yz._Done();this.Al8._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DX._ReInit();this.Y.
_ReInit();this.Ed._ReInit();this.Cl._ReInit();this.CF._ReInit();this.C_._ReInit(
);this.Gf._ReInit();this.Ec._ReInit();this.C9._ReInit();this.BY._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.I_._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pj._ReInit();this.KX._ReInit();this.I8._ReInit();this.Yz._ReInit(
);this.Al8._ReInit();this.Ed.T(A.aaR(A.acf.ACr));this.Cl.T(A.aaR(A.acf.Ad4));this.
CF.T(A.aaR(A.acf.Breed));this.C_.T(A.aaR(A.acf.Afc));this.Gf.T(A.aaR(A.acf.I_));
this.Ec.T(A.aaR(A.acf.M2));this.C9.T(A.aaR(A.acf.KG));this.BY.T(A.aaR(A.acf.Afh)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.F0)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ec)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Al8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Ash={Zc:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zc={
I:this},0);this.__proto__=C.Ash;this.N.B2(A.acf.Bh6);this.Number.H(Btk);this.I9.
H(Btl);this.IM.H(Btm);this.Akv(2);this.BcA=false;this.BdF=true;this.BdG=false;this.
Zc.H(Btn);this.Zc.KR(true);this.Zc.R(A.aaR(A.acf.A$o));this.Zc.L(A.jb.Text);this.
J(this.Zc,0);this.N.CA=null;this.N.Cg=[this,this.AIF];this.N.CZ(null);this.Zc.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Zc.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zc._ReInit();this.Zc.R(A.aaR(A.acf.A$o));this.Zc.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADB={Cs:null,FG:function(E){if(this.M4===E)return;C.HG.FG.call(this,E);this.
Cs.CY(E);},Yk:function(Hv){var B6=null;switch(Hv){case-1:case 0:B6=this.FU;break;
case 1:B6=this.Cs;break;case 2:B6=this.GT;break;default:A.ab5("%s",AhR);}return B6;
},_Init:function(aArg){C.HG._Init.call(this,aArg);C.DB._Init.call(this.Cs={I:this
},0);this.__proto__=C.ADB;this.H(Bto);this.Cs.H(A$8);this.FU.H(Btp);this.J(this.
Cs,-2);this.Cs.Dh=[this,this.GM];},_Done:function(){this.__proto__=C.HG;this.Cs.
_Done();C.HG._Done.call(this);},_ReInit:function(){C.HG._ReInit.call(this);this.
Cs._ReInit();},_Mark:function(D){var B;C.HG._Mark.call(this,D);if((B=this.Cs)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.Asi={GX:null
,Bk:function(aSize){C.OP.Bk.call(this,aSize);this.V.H(A.abN(this.V.M,this.GX.M[0
]));},Ai:function(Ae){C.OP.Ai.call(this,Ae);if(this.Hd)this.GX.FG(A.jb.CI);else this.
GX.FG(A.jb.CU);},A1S:function(){this.Bb(this.GX);},_Init:function(aArg){C.OP._Init.
call(this,aArg);C.HG._Init.call(this.GX={I:this},0);this.__proto__=C.Asi;this.GX.
H(Btq);this.J(this.GX,0);this.GX.As([this,this.ASk,this.AFl]);},_Done:function(){
this.__proto__=C.OP;this.GX._Done();C.OP._Done.call(this);},_ReInit:function(){C.
OP._ReInit.call(this);this.GX._ReInit();},_Mark:function(D){var B;C.OP._Mark.call(
this,D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axk={GX:null,Bk:function(aSize){C.OP.Bk.call(this,aSize);this.V.H(A.abN(this.
V.M,this.GX.M[0]));},Ai:function(Ae){C.OP.Ai.call(this,Ae);if(this.Hd)this.GX.FG(
A.jb.CI);else this.GX.FG(A.jb.CU);},A1S:function(){this.Bb(this.GX);},_Init:function(
aArg){C.OP._Init.call(this,aArg);C.ADB._Init.call(this.GX={I:this},0);this.__proto__=
C.Axk;this.GX.A3(0x18);this.GX.H(Btr);this.J(this.GX,0);this.GX.As([this,this.ASk
,this.AFl]);},_Done:function(){this.__proto__=C.OP;this.GX._Done();C.OP._Done.call(
this);},_ReInit:function(){C.OP._ReInit.call(this);this.GX._ReInit();},_Mark:function(
D){var B;C.OP._Mark.call(this,D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acj={ScreenTypeToString:
null,Dr:function(){return 4;},Gd:function(aIndex){if((aIndex<0)||(aIndex>=106))return A.
jV;return this.ScreenTypeToString.BO(this.C7(aIndex));},_Init:function(aArg){C.CQ.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acj;this.Cr.Set(0,3);this.Cr.Set(1,35);this.Cr.Set(2
,34);this.Cr.Set(3,47);},_Done:function(){this.__proto__=C.CQ;this.ScreenTypeToString.
_Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.CQ._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AVD={Wn:function(G){this.Agi();A._GetAutoObject(C.BN).Qu(A.aaR(A.acf.Settings
),[this,this.A3i]);A._GetAutoObject(C.BN).FA();this.ALR();A._GetAutoObject(C.BN).
Nz(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.
BN).Nz(A.aaR(A.acf.ANu)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dt(
6);},Dz:function(G){},CB:function(G){C.RG.CB.call(this,G);A.pe([this,this.A0a],this
);},Abh:function(){return C.ABT;},Abi:function(){return C.ADa;},Q5:function(G){A.
_GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(A.Device.Helper).A6Q());}
,HM:function(G){C.RG.HM.call(this,G);if(this.Aj9()===false){this.N.Cq(A.aaL(A.ach.
Avn));this.N.Ck=[this,this.ANJ];this.N.FH(A.jV);}this.N.OL(false);this.N.OM(false
);},Af6:function(){A._GetAutoObject(C.A1).BU(97);},Af5:function(){A._GetAutoObject(
C.A1).BU(98);},A6H:function(){return C.APj;},BfJ:function(){var B;var Filter;var
FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).Ao.Filter){Filter=A._GetAutoObject(
A.Device.Device).Ao.Filter.Fd();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DN(26,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion
);A._GetAutoObject(A.Device.Device).Ao.Bl(Filter);}},A3i:function(G){A._GetAutoObject(
A.Device.Device).Dt(0);A._GetAutoObject(C.A1).BU(101);},_Init:function(aArg){C.RG.
_Init.call(this,aArg);this.__proto__=C.AVD;this.Dn(C.AC3);this.Dx(A.aaR(A.acf.A74
));this.ASX(A._GetAutoObject(C.AxO));},_ReInit:function(){C.RG._ReInit.call(this
);this.Dx(A.aaR(A.acf.A74));},_className:"Application::YoungNoTransponderListScreen"
};C.AVC={_Init:function(aArg){C.IW._Init.call(this,aArg);this.__proto__=C.AVC;this.
KV.Ar(false);this.KV.Aj(false);this.KV.Z(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AVB={_Init:function(aArg){C.GC._Init.call(this,aArg);this.__proto__=C.AVB;this.
N.B2(A.aaR(A.acf.A49));},_ReInit:function(){C.GC._ReInit.call(this);this.N.B2(A.
aaR(A.acf.A49));},_className:"Application::YoungNoTransponderListActionsScreen"};
C.AQP={Sl:null,Q:null,A70:0,M4:0,Init:function(aArg){this.AS0(6);},As:function(E
){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sl)this.Sl.As(E);},AS0:function(E
){if(this.A70===E)return;this.A70=E;var X;switch(E){case 2:X=A._NewObject(C.HG,0
);break;case 3:X=A._NewObject(C.ADB,0);break;case 4:X=A._NewObject(C.AQM,0);break;
case 5:X=A._NewObject(C.AQN,0);break;case 6:X=A._NewObject(C.AvG,0);break;default:{
X=null;A.ab5("%s%i",Bts,E);}}this.Bmy(X);},Bmy:function(E){if(this.Sl===E)return;
if(!!this.Sl){this.Sl.As(null);this.HL(this.Sl);}this.Sl=E;if(!!this.Sl){this.Sl.
As(this.Q);this.J(this.Sl,0);}},FG:function(E){if(this.M4===E)return;this.M4=E;if(
!!this.Sl)this.Sl.FG(E);},SE:function(Gt){if(!!this.Sl)this.Sl.SE(Gt);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.AQP;this.H(Ax7);this.Init(
aArg);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Sl)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AQM={CV:null,Cs:null,FG:function(
E){if(this.M4===E)return;C.HG.FG.call(this,E);this.Cs.CY(E);this.CV.CY(E);},Yk:function(
Hv){var B6=null;switch(Hv){case-1:case 0:B6=this.FU;break;case 1:B6=this.Cs;break;
case 2:B6=this.CV;break;case 3:B6=this.GT;break;default:A.ab5("%s",AhR);}return B6;
},_Init:function(aArg){C.HG._Init.call(this,aArg);C.DB._Init.call(this.CV={I:this
},0);C.DB._Init.call(this.Cs={I:this},0);this.__proto__=C.AQM;this.H(Btt);this.GT.
H(As6);this.CV.H(A$9);this.Cs.H(A$_);this.FU.H(A$$);this.J(this.CV,-2);this.J(this.
Cs,-2);this.CV.Dh=[this,this.GM];this.Cs.Dh=[this,this.GM];},_Done:function(){this.
__proto__=C.HG;this.CV._Done();this.Cs._Done();C.HG._Done.call(this);},_ReInit:function(
){C.HG._ReInit.call(this);this.CV._ReInit();this.Cs._ReInit();},_Mark:function(D
){var B;C.HG._Mark.call(this,D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACA={SU:null,Ai:function(Ae){C.Abe.Ai.call(this,Ae);this.SU.L(this.V.AQ);},_Init:
function(aArg){C.Abe._Init.call(this,aArg);C.CG._Init.call(this.SU={I:this},0);this.
__proto__=C.ACA;this.V.Z(false);this.AW.H(Btu);this.AW.AS0(4);this.SU.H(Btv);this.
SU.R(A.aaR(A.acf.Ke));this.SU.L(A.jb.Bm);this.J(this.SU,0);this.SU.S(A.aaL(A.fl.
Af));this.SU.A2(A.aaL(A.fl.Ak));this.SU.Ct(null);},_Done:function(){this.__proto__=
C.Abe;this.SU._Done();C.Abe._Done.call(this);},_ReInit:function(){C.Abe._ReInit.
call(this);this.SU._ReInit();this.SU.R(A.aaR(A.acf.Ke));this.SU.S(A.aaL(A.fl.Af)
);this.SU.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abe._Mark.call(this,D);
if((B=this.SU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LV={YS:null,T3:null,AQ:0,A7f:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YS.L(this.AQ);this.T3.L(this.AQ);},A93:function(E){var B;if(this.A7f===
E)return;this.A7f=E;if(E){this.YS.Z(true);this.T3.DE([this.T3.Ey[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YS.Z(false);this.T3.DE([this.T3.Ey[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.DQ._Init.call(
this.YS={I:this},0);A.acg.DQ._Init.call(this.T3={I:this},0);this.__proto__=C.LV;
this.H(AZM);this.YS.A3(0x2D);this.YS.DE(AhN);this.YS.DR(Bav);this.YS.L(A.jb.Text
);this.T3.A3(0x36);this.T3.DE(Bav);this.T3.DR(Btw);this.T3.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YS,0);this.J(this.T3,0);},_Done:function(){this.__proto__=
A.Core.O;this.YS._Done();this.T3._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.YS._ReInit();this.T3._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AT5={Sq:null,Py:null,C_:null,BY:null,CF:null,GJ:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pj:null,UK:null,KX:null,Init:function(aArg){A.zX([this
,this.Auz],this.BY.Q,0);A.zX([this,this.AML],this.CF.Q,0);A.zX([this,this.Bqm],this.
Sq.Q,0);A.zX([this,this.Avd],this.C_.Q,0);A.zX([this,this.AVz],this.GJ.Q,0);},Auz:
function(G){var F;A._GetAutoObject(A.Device.Device).Ex((F=this.BY.Q,F[1].call(F[
0])));},Bqm:function(G){var F;A._GetAutoObject(A.Device.Device).Aw3((F=this.Sq.Q
,F[1].call(F[0])));},Avd:function(G){var F;A._GetAutoObject(A.Device.Device).JO((
F=this.C_.Q,F[1].call(F[0])));},AVz:function(G){var F;A._GetAutoObject(A.Device.
Device).Nd((F=this.GJ.Q,F[1].call(F[0])));},AML:function(G){var F;A._GetAutoObject(
A.Device.Device).NW((F=this.CF.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cv._Init.
call(this,aArg);C.BZ._Init.call(this.Sq={I:this},0);C.I5._Init.call(this.Py={I:this
},0);C.BZ._Init.call(this.C_={I:this},0);C.BZ._Init.call(this.BY={I:this},0);C.Axk.
_Init.call(this.CF={I:this},0);C.Asi._Init.call(this.GJ={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M0._Init.call(this.Pj={I:this},0);C.UK._Init.call(this.UK={I:
this},0);A.Device.KX._Init.call(this.KX={I:this},0);this.__proto__=C.AT5;var B;this.
JP((A.aaR(A.acf.Ar7)+Ayh)+A.aaR(A.acf.Ajy));this.Sq.H(AhQ);this.Sq.Aj(true);this.
Sq.T(A.aaR(A.acf.A$X));this.Sq.Bj(true);this.Sq.BC(0);this.Py.H(Ax5);this.Py.Aj(
true);this.Py.Z(true);this.Py.T(A.aaR(A.acf.AdG));this.Py.Gq(0);this.Py.E5(99);this.
Py.Ko(A.aaR(A.acf.Ke));this.Py.KQ(A.aaR(A.acf.GE));this.C_.H(Z8);this.C_.Aj(true
);this.C_.T(A.aaR(A.acf.Afc));this.C_.Bj(true);this.C_.BC(0);this.BY.H(Aoi);this.
BY.Aj(true);this.BY.T(A.aaR(A.acf.Afh));this.BY.Bj(true);this.BY.BC(0);this.CF.H(
Ak8);this.CF.Aj(true);this.CF.T(A.aaR(A.acf.Breed));this.CF.Bj(false);this.GJ.H(
Ak8);this.GJ.Aj(true);this.GJ.T(A.aaR(A.acf.I_));this.GJ.Bj(true);this.AnimalType.
As(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.As(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.As(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.Device).Breed);
this.UK.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sq,0);this.
J(this.Py,0);this.J(this.C_,0);this.J(this.BY,0);this.J(this.CF,0);this.J(this.GJ
,0);this.Sq.As([B=this.WeightRecordingScope,B.B$,B.Ca]);this.Sq.CJ(this.WeightRecordingScope
);this.Py.As([B=A._GetAutoObject(A.Device.Device),B.A8i,B.BaR]);this.C_.As([B=this.
Gender,B.B$,B.Ca]);this.C_.CJ(this.Gender);this.BY.As([B=this.AnimalType,B.B$,B.
Ca]);this.BY.CJ(this.AnimalType);this.CF.Gk([this,this.D8,this.GK]);this.CF.LW([
B=this.CF,B.FO]);this.CF.LZ(A.aaL(A.ach.Edit));this.CF.As([B=this.Breed,B.B$,B.Ca
]);this.CF.CJ(this.Breed);this.CF.Anp(this.Pj);this.GJ.Gk([this,this.D8,this.GK]
);this.GJ.LW([B=this.GJ,B.FO]);this.GJ.LZ(A.aaL(A.ach.Edit));this.GJ.As([B=this.
UK,B.B$,B.Ca]);this.GJ.CJ(this.UK);this.GJ.Anp(this.KX);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cv;this.Sq._Done();this.Py._Done();this.C_._Done();this.
BY._Done();this.CF._Done();this.GJ._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pj._Done();this.UK._Done();this.
KX._Done();C.Cv._Done.call(this);},_ReInit:function(){C.Cv._ReInit.call(this);this.
Sq._ReInit();this.Py._ReInit();this.C_._ReInit();this.BY._ReInit();this.CF._ReInit(
);this.GJ._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pj._ReInit();this.UK._ReInit();
this.KX._ReInit();this.JP((A.aaR(A.acf.Ar7)+Ayh)+A.aaR(A.acf.Ajy));this.Sq.T(A.aaR(
A.acf.A$X));this.Py.T(A.aaR(A.acf.AdG));this.Py.Ko(A.aaR(A.acf.Ke));this.Py.KQ(A.
aaR(A.acf.GE));this.C_.T(A.aaR(A.acf.Afc));this.BY.T(A.aaR(A.acf.Afh));this.CF.T(
A.aaR(A.acf.Breed));this.GJ.T(A.aaR(A.acf.I_));},_Mark:function(D){var B;C.Cv._Mark.
call(this,D);if((B=this.Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Py)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AT4={QI:null,Jn:null,Ik:null,Fe:null,FD:null,Ij:null,AutoRegistrationMode:null
,AdI:null,Init:function(aArg){var B;A.zX([this,this.Bg8],this.QI.Q,0);A.zX([this
,this.Bem],[B=A._GetAutoObject(A.Device.Device),B.AR5,B.AZS],0);A.zX([this,this.
ApB],[B=A._GetAutoObject(A.Device.Device),B.AbQ,B.AcH],0);A.zX([this,this.ApB],[
B=A._GetAutoObject(A.Device.Device),B.AbR,B.AcI],0);A.pe([this,this.Bem],this);A.
pe([this,this.ApB],this);},Bg8:function(G){var F;A._GetAutoObject(A.Device.Device
).Awh((F=this.QI.Q,F[1].call(F[0])));},Bem:function(G){switch(A._GetAutoObject(A.
Device.Device).Agl){case 0:A._GetAutoObject(A.Device.Helper).L0(this.Ik,true);break;
case 1:A._GetAutoObject(A.Device.Helper).L0(this.Ik,false);break;default:throw new
Error(Btx+A._GetAutoObject(A.Device.Device).Agl.toFixed());}},ApB:function(G){var
F,CP;if(((F=this.Fe.Q,F[1].call(F[0]))+(CP=this.FD.Q,CP[1].call(CP[0])))>12)(CP=
this.FD.Q,CP[2].call(CP[0],12-(F=this.Fe.Q,F[1].call(F[0]))));},_Init:function(aArg
){C.Cv._Init.call(this,aArg);C.BZ._Init.call(this.QI={I:this},0);C.BZ._Init.call(
this.Jn={I:this},0);C.AGt._Init.call(this.Ik={I:this},0);C.I5._Init.call(this.Fe={
I:this},0);C.I5._Init.call(this.FD={I:this},0);C.AD2._Init.call(this.Ij={I:this}
,0);C.AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdI.
_Init.call(this.AdI={I:this},0);this.__proto__=C.AT4;var B;this.JP(A.aaR(A.acf.Aqa
));this.QI.H(AIr);this.QI.Aj(true);this.QI.T(A.aaR(A.acf.Aqa));this.QI.Bj(false);
this.QI.Gq(-1);this.QI.E5(1);this.Jn.H(W7);this.Jn.Aj(true);this.Jn.Z(true);this.
Jn.T(A.aaR(A.acf.ABz));this.Jn.Bj(true);this.Ik.H(Z8);this.Ik.Aj(true);this.Ik.Z(
true);this.Ik.T(A.aaR(A.acf.AD_));this.Ik.Bj(true);this.Fe.H(Aoi);this.Fe.Aj(true
);this.Fe.Z(true);this.Fe.T(A.aaR(A.acf.ACl));this.Fe.Bj(false);this.Fe.Gq(2);this.
Fe.E5(6);this.Fe.Ko(A.aaR(A.acf.TI));this.Fe.KQ(A.aaR(A.acf.E2));this.FD.H(Ak8);
this.FD.Aj(true);this.FD.T(A.aaR(A.acf.AeI));this.FD.Bj(true);this.FD.Gq(0);this.
FD.E5(12);this.FD.Ko(A.aaR(A.acf.TI));this.FD.KQ(A.aaR(A.acf.E2));this.Ij.H(Bty);
this.Ij.Ar(true);this.Ij.Aj(true);this.Ij.Bj(false);this.Ij.AFk(A.aaR(A.acf.ABG)
);this.AutoRegistrationMode.As(A._GetAutoObject(A.Device.Device).AutoRegistrationMode
);this.J(this.QI,0);this.J(this.Jn,0);this.J(this.Ik,0);this.J(this.Fe,0);this.J(
this.FD,0);this.J(this.Ij,0);this.QI.As([B=this.AutoRegistrationMode,B.B$,B.Ca]);
this.QI.CJ(this.AutoRegistrationMode);this.Jn.As([B=this.AdI,B.B$,B.Ca]);this.Jn.
CJ(this.AdI);this.Ik.Ug([B=A._GetAutoObject(A.Device.Device),B.Wl,B.AZW]);this.Ik.
Akm([B=A._GetAutoObject(A.Device.Device),B.Av3,B.Ayx]);this.Fe.As([B=A._GetAutoObject(
A.Device.Device),B.AbQ,B.AcH]);this.FD.As([B=A._GetAutoObject(A.Device.Device),B.
AbR,B.AcI]);this.Ij.DD(A.aaL(A.ach.AmV));this.Ij.PN([B=A._GetAutoObject(A.Device.
Device),B.AbQ,B.AcH]);this.Ij.QZ([B=A._GetAutoObject(A.Device.Device),B.AbR,B.AcI
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cv;this.QI._Done();this.Jn.
_Done();this.Ik._Done();this.Fe._Done();this.FD._Done();this.Ij._Done();this.AutoRegistrationMode.
_Done();this.AdI._Done();C.Cv._Done.call(this);},_ReInit:function(){C.Cv._ReInit.
call(this);this.QI._ReInit();this.Jn._ReInit();this.Ik._ReInit();this.Fe._ReInit(
);this.FD._ReInit();this.Ij._ReInit();this.AutoRegistrationMode._ReInit();this.AdI.
_ReInit();this.JP(A.aaR(A.acf.Aqa));this.QI.T(A.aaR(A.acf.Aqa));this.Jn.T(A.aaR(
A.acf.ABz));this.Ik.T(A.aaR(A.acf.AD_));this.Fe.T(A.aaR(A.acf.ACl));this.Fe.Ko(A.
aaR(A.acf.TI));this.Fe.KQ(A.aaR(A.acf.E2));this.FD.T(A.aaR(A.acf.AeI));this.FD.Ko(
A.aaR(A.acf.TI));this.FD.KQ(A.aaR(A.acf.E2));this.Ij.AFk(A.aaR(A.acf.ABG));},_Mark:
function(D){var B;C.Cv._Mark.call(this,D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Jn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ik)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdI)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::RegistrationAutomaticSettingsScreen"};C.AU9={OE:null,Jn:
null,Ik:null,Fe:null,FD:null,Ij:null,Afg:null,Init:function(aArg){var B;A.zX([this
,this.Be1],[B=A._GetAutoObject(A.Device.Device),B.ASw,B.AZ9],0);A.zX([this,this.
ApB],[B=A._GetAutoObject(A.Device.Device),B.AbQ,B.AcH],0);A.zX([this,this.ApB],[
B=A._GetAutoObject(A.Device.Device),B.AbR,B.AcI],0);A.pe([this,this.Be1],this);A.
pe([this,this.ApB],this);},Be1:function(G){var AKM=false;var At9=false;switch(A.
_GetAutoObject(A.Device.Device).AhG){case 0:{AKM=false;At9=false;}break;case 1:{
AKM=true;At9=false;}break;case 2:{AKM=false;At9=true;}break;default:throw new Error(
Btz+A._GetAutoObject(A.Device.Device).AhG.toFixed());}A._GetAutoObject(A.Device.
Helper).L0(this.Ik,AKM);A._GetAutoObject(A.Device.Helper).L0(this.Fe,At9);A._GetAutoObject(
A.Device.Helper).L0(this.FD,At9);A._GetAutoObject(A.Device.Helper).L0(this.Ij,At9
);},ApB:function(G){var F,CP;if(((F=this.Fe.Q,F[1].call(F[0]))+(CP=this.FD.Q,CP[
1].call(CP[0])))>12)(CP=this.FD.Q,CP[2].call(CP[0],12-(F=this.Fe.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cv._Init.call(this,aArg);C.I5._Init.call(this.OE={
I:this},0);C.BZ._Init.call(this.Jn={I:this},0);C.AGt._Init.call(this.Ik={I:this}
,0);C.I5._Init.call(this.Fe={I:this},0);C.I5._Init.call(this.FD={I:this},0);C.AD2.
_Init.call(this.Ij={I:this},0);C.Afg._Init.call(this.Afg={I:this},0);this.__proto__=
C.AU9;var B;this.JP(A.aaR(A.acf.LinkTransponder));this.OE.H(AIr);this.OE.Aj(true
);this.OE.Z(true);this.OE.T(A.aaR(A.acf.A7y));this.OE.Bj(false);this.OE.Gq(1);this.
OE.E5(365);this.OE.Ko(A.aaR(A.acf.Ke));this.OE.KQ(A.aaR(A.acf.GE));this.Jn.H(W7);
this.Jn.Aj(true);this.Jn.Z(true);this.Jn.T(A.aaR(A.acf.ABz));this.Jn.Bj(true);this.
Ik.H(Z8);this.Ik.Aj(true);this.Ik.Z(true);this.Ik.T(A.aaR(A.acf.AD_));this.Ik.Bj(
false);this.Fe.H(Aoi);this.Fe.Aj(true);this.Fe.Z(true);this.Fe.T(A.aaR(A.acf.ACl
));this.Fe.Bj(false);this.Fe.Gq(2);this.Fe.E5(6);this.Fe.Ko(A.aaR(A.acf.TI));this.
Fe.KQ(A.aaR(A.acf.E2));this.FD.H(Ak8);this.FD.Aj(true);this.FD.T(A.aaR(A.acf.AeI
));this.FD.Bj(true);this.FD.Gq(0);this.FD.E5(12);this.FD.Ko(A.aaR(A.acf.TI));this.
FD.KQ(A.aaR(A.acf.E2));this.Ij.H(AHI);this.Ij.Ar(true);this.Ij.Aj(true);this.Ij.
Bj(false);this.Ij.AFk(A.aaR(A.acf.ABG));this.J(this.OE,0);this.J(this.Jn,0);this.
J(this.Ik,0);this.J(this.Fe,0);this.J(this.FD,0);this.J(this.Ij,0);this.OE.As([B=
A._GetAutoObject(A.Device.Device),B.A8O,B.Ba8]);this.Jn.As([B=this.Afg,B.B$,B.Ca
]);this.Jn.CJ(this.Afg);this.Ik.Ug([B=A._GetAutoObject(A.Device.Device),B.Wl,B.AZW
]);this.Ik.Akm([B=A._GetAutoObject(A.Device.Device),B.Av3,B.Ayx]);this.Fe.As([B=
A._GetAutoObject(A.Device.Device),B.AbQ,B.AcH]);this.FD.As([B=A._GetAutoObject(A.
Device.Device),B.AbR,B.AcI]);this.Ij.DD(A.aaL(A.ach.AmV));this.Ij.PN([B=A._GetAutoObject(
A.Device.Device),B.AbQ,B.AcH]);this.Ij.QZ([B=A._GetAutoObject(A.Device.Device),B.
AbR,B.AcI]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cv;this.OE._Done(
);this.Jn._Done();this.Ik._Done();this.Fe._Done();this.FD._Done();this.Ij._Done(
);this.Afg._Done();C.Cv._Done.call(this);},_ReInit:function(){C.Cv._ReInit.call(
this);this.OE._ReInit();this.Jn._ReInit();this.Ik._ReInit();this.Fe._ReInit();this.
FD._ReInit();this.Ij._ReInit();this.Afg._ReInit();this.JP(A.aaR(A.acf.LinkTransponder
));this.OE.T(A.aaR(A.acf.A7y));this.OE.Ko(A.aaR(A.acf.Ke));this.OE.KQ(A.aaR(A.acf.
GE));this.Jn.T(A.aaR(A.acf.ABz));this.Ik.T(A.aaR(A.acf.AD_));this.Fe.T(A.aaR(A.acf.
ACl));this.Fe.Ko(A.aaR(A.acf.TI));this.Fe.KQ(A.aaR(A.acf.E2));this.FD.T(A.aaR(A.
acf.AeI));this.FD.Ko(A.aaR(A.acf.TI));this.FD.KQ(A.aaR(A.acf.E2));this.Ij.AFk(A.
aaR(A.acf.ABG));},_Mark:function(D){var B;C.Cv._Mark.call(this,D);if((B=this.OE).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Jn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ij)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afg={TransponderAssignmentIdChangeMethodToString:null,Init:function(aArg){var
B;A.zX([this,this.Bgk],[B=A._GetAutoObject(A.Device.Device),B.ASw,B.AZ9],0);A.pe([
this,this.Bgk],this);},Dr:function(){return 3;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=3))return-1;return aIndex;},Gd:function(aIndex){if((aIndex<0)||(aIndex>=
3))return A.jV;return this.TransponderAssignmentIdChangeMethodToString.BO(aIndex
);},DO:function(A7){return A7;},Hp:function(){return 2;},As:function(E){C.AC.As.
call(this,E);A._GetAutoObject(A.Device.Device).Aw0(E);},Bgk:function(G){this.Q=A.
_GetAutoObject(A.Device.Device).AhG;A.abo([this,this.B$,this.Ca],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TransponderAssignmentIdChangeMethodToString.
_Init.call(this.TransponderAssignmentIdChangeMethodToString={I:this},0);this.__proto__=
C.Afg;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.TransponderAssignmentIdChangeMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
TransponderAssignmentIdChangeMethodToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.TransponderAssignmentIdChangeMethodToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.I6={B7:null,IO:null,Cp:null,Amo:null,R_:null,Anb:null,Aju:null,Text:null,CX:
null,D4:0,Lz:false,Ai:function(Ae){var B;A.acn.I6.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IO.Ar(true);else{this.IO.Ar(false);this.CX.Z(false);}},A4f:function(G
){var B;var Bd=this.Text.M;var Nr=0;var Ns=0;if(this.CX.Ep[0]<Bd[0])Nr=Bd[0]-this.
CX.Ep[0];if(this.CX.Ep[0]>Bd[2])Nr=Bd[2]-this.CX.Ep[0];if(this.CX.Ep[1]<Bd[1])Ns=
Bd[1]-this.CX.Ep[1];if(this.CX.Ey[1]>Bd[3])Ns=Bd[3]-this.CX.Ey[1];if(!!Nr||!!Ns)
this.Text.FX(A.abf(this.Text.Bt,[Nr,Ns]));Nr=this.Text.Bt[0];Ns=this.Text.Bt[1];
var C4=[(B=this.Text.Da())[2]-B[0],B[3]-B[1]];if(C4[0]<=((B=this.Text.M)[2]-B[0]
))Nr=0;if(C4[1]<=((B=this.Text.M)[3]-B[1]))Ns=0;this.Text.FX([Nr,Ns]);},Al$:function(
G){if(!this.B7)return;var A3H=this.Text.AGG(this.D4);var pos=this.Text.Ae7(A3H);
this.CX.DR(A.abe(pos,[0,this.B7.Ascent]));this.CX.DE(A.abf(pos,[0,this.B7.Descent
]));if(this.IO.By){this.IO.Ar(false);this.IO.Ar(true);}if(this.Lz){A.pe([this,this.
A4f],this);this.Lz=false;}},AAl:function(G){if(!this.B7)return;var ED=this.Text.
AGG(this.D4);if(this.Cp.CN===6){ED=[ED[0]-1,ED[1]];if(this.Text.AnJ(ED)===this.D4
){ED=[ED[0],ED[1]-1];ED=[this.Text.ACP(ED[1]).length,ED[1]];}}if(this.Cp.CN===7){
ED=[ED[0]+1,ED[1]];if(this.Text.AnJ(ED)===this.D4){ED=[ED[0],ED[1]+1];ED=[0,ED[1
]];}}if(this.Cp.CN===4){var pos=this.Text.Ae7(ED);var AaD=(this.B7.Ascent+this.B7.
Descent)+this.B7.Leading;ED=this.Text.ATF(A.abe(pos,[0,AaD]));}if(this.Cp.CN===5
){var pos=this.Text.Ae7(ED);var AaD=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;
ED=this.Text.ATF(A.abf(pos,[0,AaD]));}var U8=this.Text.AnJ(ED);var It=this.Text.
String.charCodeAt(U8)||0;if(((It===0x5E)||(It===0x7E))||(It===0x25))U8=U8-1;if(U8
!==this.D4){this.D4=U8;A.pe([this,this.Al$],this);this.Lz=true;}},Beu:function(G
){if(!this.D4)return;var It=this.Text.String.charCodeAt(this.D4-1)||0;var CD=1;if(((
It===0x5E)||(It===0x7E))||(It===0x25))CD=2;this.Text.R(A.ab1(this.Text.String,this.
D4-CD,CD));this.D4=this.D4-CD;this.Lz=true;},AAm:function(G){if(this.D4>=(this.Text.
String.length-1))return;var It=this.Text.String.charCodeAt(this.D4)||0;var CD=1;
if(It===0x25)CD=2;this.Text.R(A.ab1(this.Text.String,this.D4,CD));this.Lz=true;}
,BeI:function(G){this.Text.R(A.abU(this.Text.String,BtA,this.D4));this.D4=this.D4+
1;this.Lz=true;},Bew:function(G){var It=this.Aju.DM;var Aua=String.fromCharCode(
It);A.ab5("%c",It);if((((It===0x5E)||(It===0x7E))||(It===0xAD))||(It===0x25))Aua=
BtB+String.fromCharCode(It);this.Text.R(A.abU(this.Text.String,Aua,this.D4));this.
D4=this.D4+Aua.length;this.Lz=true;},_Init:function(aArg){A.acn.I6._Init.call(this
,aArg);A.acl.TC._Init.call(this.IO={I:this},0);A.Core.BL._Init.call(this.Cp={I:this
},0);A.Core.BL._Init.call(this.Amo={I:this},0);A.Core.BL._Init.call(this.R_={I:this
},0);A.Core.BL._Init.call(this.Anb={I:this},0);A.Core.BL._Init.call(this.Aju={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.DQ._Init.call(this.CX={
I:this},0);this.__proto__=C.I6;var B;this.H(BtC);this.IO.B3=false;this.IO.Cw=true;
this.IO.Fj(500);this.IO.Uh(500);this.Cp.Filter=147;this.Cp.By=false;this.Amo.Filter=
151;this.R_.Filter=44;this.Anb.Filter=149;this.Aju.Filter=145;this.Text.A3(0x3F);
this.Text.H(BtD);this.Text.KR(true);this.Text.A8(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CX.DE(BtE);this.CX.DR(BtF);this.CX.A_E(2);this.CX.A_D(2);this.
CX.L(0xFF000000);this.CX.Z(false);this.J(this.Text,0);this.J(this.CX,0);this.IO.
Q=[B=this.CX,B.Fi,B.Z];this.Cp.BM=[this,this.AAl];this.Cp.DZ=[this,this.AAl];this.
Amo.BM=[this,this.Beu];this.Amo.DZ=[this,this.Beu];this.R_.BM=[this,this.AAm];this.
R_.DZ=[this,this.AAm];this.Anb.BM=[this,this.BeI];this.Anb.DZ=[this,this.BeI];this.
Aju.BM=[this,this.Bew];this.Aju.DZ=[this,this.Bew];this.Text.Q0([this,this.Al$]);
this.Text.S(A.aaL(A.aci.ACE));this.B7=A.aaL(A.aci.ACE);},_Done:function(){this.__proto__=
A.acn.I6;this.IO._Done();this.Cp._Done();this.Amo._Done();this.R_._Done();this.Anb.
_Done();this.Aju._Done();this.Text._Done();this.CX._Done();A.acn.I6._Done.call(this
);},_ReInit:function(){A.acn.I6._ReInit.call(this);this.IO._ReInit();this.Cp._ReInit(
);this.Amo._ReInit();this.R_._ReInit();this.Anb._ReInit();this.Aju._ReInit();this.
Text._ReInit();this.CX._ReInit();},_Mark:function(D){var B;A.acn.I6._Mark.call(this
,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AUX={I6:null,Dz:function(G
){switch(this.Cp.CN){case 6:A._GetAutoObject(A.Device.Device).AuF();break;case 7:
A._GetAutoObject(A.Device.Device).Aqb();break;case 4:A._GetAutoObject(A.Device.Device
).Ajs();break;case 5:A._GetAutoObject(A.Device.Device).Aqc();break;default:;}},Es:
function(G){A._GetAutoObject(C.A1).Fs();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.I6._Init.call(this.I6={I:this},0);this.__proto__=C.AUX;this.H(Cc);this.
N.Z(true);this.Dn(C.AqM);this.I6.H(E8);this.J(this.I6,0);this.Bb(this.I6);this.N.
CA=[this,this.Es];this.N.CZ(A.aaL(A.ach.EX));},_Done:function(){this.__proto__=C.
AB;this.I6._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.I6._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ATN={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AyE],[B=A._GetAutoObject(A.Device.Device),B.AR_,B.AZT],0);},Wn:function(G){
if((!!this.Bh&&!!this.Bh.AX)&&(this.Bh.AX.Cd()>0)){if(this.AJn())A._GetAutoObject(
C.BN).Qu(A.aaR(A.acf.AN9),[this,this.AIs]);else A._GetAutoObject(C.BN).Qu(A.aaR(
A.acf.AN9),null);A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Qu(A.aaR(A.acf.
ABY),[this,this.BaI]);A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Qu(A.aaR(
A.acf.AG0),[this,this.A7$]);A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Qu(
A.aaR(A.acf.A5w),[this,this.BaH]);A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.
BN).Qu(A.aaR(A.acf.UnlinkTransponder),[this,this.Bny]);}else{A._GetAutoObject(C.
BN).XG(A.aaR(A.acf.AN9));A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).XG(A.
aaR(A.acf.ABY));A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).XG(A.aaR(A.acf.
AG0));A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).XG(A.aaR(A.acf.A5w));A.
_GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).XG(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Nz(A.aaR(A.acf.Ts)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Nz(A.aaR(A.acf.
A6b));A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Nz(A.aaR(A.acf.Ame)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dt(6);},Abh:function(){return C.
ABU;},Abi:function(){return C.AC_;},Q5:function(G){A._GetAutoObject(A.Device.Device
).Ao.Bl(A._GetAutoObject(A.Device.Helper).AOF());},HM:function(G){C.Q3.HM.call(this
,G);this.N.Cq(A.aaL(A.ach.Abr));this.N.Ck=[this,this.Xu];this.N.FH(A.jV);this.N.
C5(null);this.N.B2((A.aaR(A.acf.A5o)+Z9)+this.DataExportDestinationToString.BO(A.
_GetAutoObject(A.Device.Device).VE));this.N.OL(false);this.N.OM(false);this.N.I0.
Do(255);},ARX:function(G){A._GetAutoObject(A.Device.Device).Dt(0);var AiO=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A_(96,true,AiO.toFixed(),0,null);},ARY:function(G){A._GetAutoObject(A.Device.Device
).Dt(0);this.A53(this);},AR3:function(G){var B;A._GetAutoObject(A.Device.Device).
Dt(0);if(!A._GetAutoObject(A.Device.Device).VE&&!A._GetAutoObject(A.Device.Device
).Ur){A._GetAutoObject(A.Device.Device).A_(73,true,A.jV,0,[this,this.BeK]);return;
}if(A._GetAutoObject(A.Device.Device).Aq2()===false){A.zX([this,this.Xv],[B=A._GetAutoObject(
A.Device.Device),B.Wm,B.W8],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jV
,0,[this,this.Af4]);return;}var AfP=null;switch(A._GetAutoObject(A.Device.Device
).VE){case 0:AfP=A._GetAutoObject(A.Device.Device).AnN(2);break;case 1:AfP=A._GetAutoObject(
A.Device.Device).AnN(3);break;default:throw new Error(BtG+A._GetAutoObject(A.Device.
Device).VE.toFixed());}if(AfP.AnS){A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);this.Dx(A.aaR(A.acf.BnN));A._GetAutoObject(A.Device.Device).Aqp(AfP);}else A._GetAutoObject(
A.Device.Device).A_(97,true,A.jV,0,null);},AJn:function(){var Azl=this.Bh.AX;if(
!Azl)return false;return true;},Xu:function(G){A._GetAutoObject(A.Device.Device).
UpdateOverlayMenu(16);},_Init:function(aArg){C.Q3._Init.call(this,aArg);A.Device.
DataExportDestinationToString._Init.call(this.DataExportDestinationToString={I:this
},0);this.__proto__=C.ATN;this.Dn(C.APf);this.Init(aArg);},_Done:function(){this.
__proto__=C.Q3;this.DataExportDestinationToString._Done();C.Q3._Done.call(this);
},_ReInit:function(){C.Q3._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.Q3._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PurchasedAnimalsListScreen"
};C.AC_={Pw:null,IZ:null,_Init:function(aArg){C.Db._Init.call(this,aArg);A.acg.Am.
_Init.call(this.Pw={I:this},0);A.acg.Am._Init.call(this.IZ={I:this},0);this.__proto__=
C.AC_;this.Eo.Z(false);this.DS.Z(false);this.Pw.H(BtH);this.Pw.L(A.jb.Text);this.
IZ.H(BtI);this.IZ.L(A.jb.Text);this.J(this.Pw,0);this.J(this.IZ,0);this.Pw.Aw(A.
aaL(A.ach.Avv));this.IZ.Aw(A.aaL(A.ach.Avq));},_Done:function(){this.__proto__=C.
Db;this.Pw._Done();this.IZ._Done();C.Db._Done.call(this);},_ReInit:function(){C.
Db._ReInit.call(this);this.Pw._ReInit();this.IZ._ReInit();},_Mark:function(D){var
B;C.Db._Mark.call(this,D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AMG={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AAp],[B=A._GetAutoObject(A.Device.Device),B.AEk,B.AIw],0);A.pe([this,this.
AAp],this);},Wn:function(G){if((!!this.Bh&&!!this.Bh.AX)&&(this.Bh.AX.Cd()>0)){if(
this.AJn())A._GetAutoObject(C.BN).Qu(A.aaR(A.acf.AN8),[this,this.AIs]);else A._GetAutoObject(
C.BN).XG(A.aaR(A.acf.AN8));A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Qu(
A.aaR(A.acf.ABW),[this,this.BaI]);A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.
BN).Qu(A.aaR(A.acf.AG0),[this,this.A7$]);A._GetAutoObject(C.BN).FA();A._GetAutoObject(
C.BN).Qu(A.aaR(A.acf.A5v),[this,this.BaH]);}else{A._GetAutoObject(C.BN).XG(A.aaR(
A.acf.AN8));A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).XG(A.aaR(A.acf.ABW
));A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).XG(A.aaR(A.acf.AG0));A._GetAutoObject(
C.BN).FA();A._GetAutoObject(C.BN).XG(A.aaR(A.acf.A5v));}A._GetAutoObject(C.BN).FA(
);A._GetAutoObject(C.BN).Nz(A.aaR(A.acf.A6b));A._GetAutoObject(C.BN).FA();A._GetAutoObject(
C.BN).Nz(A.aaR(A.acf.Ame)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dt(6);},Abh:function(){return C.ABQ;},Abi:function(){return C.AC8;},Q5:function(
G){A._GetAutoObject(A.Device.Device).Ao.Bl(A._GetAutoObject(A.Device.Helper).AOu(
));},HM:function(G){C.Q3.HM.call(this,G);this.N.Cq(A.aaL(A.ach.Abr));this.N.Ck=[
this,this.Xu];this.N.FH(A.jV);this.N.C5(null);this.N.B2((A.aaR(A.acf.A5o)+String.
fromCharCode(0x0A))+A.aaR(A.acf.Bhe));this.N.OL(false);this.N.OM(false);this.N.I0.
Do(255);},ARX:function(G){A._GetAutoObject(A.Device.Device).Dt(0);var AiO=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).A_(96,true,AiO.toFixed(),0,null);},ARY:function(G){A._GetAutoObject(A.Device.Device
).Dt(0);this.A52(this);},AR3:function(G){var B;A._GetAutoObject(A.Device.Device).
Dt(0);if(!A._GetAutoObject(A.Device.Device).Ur){A._GetAutoObject(A.Device.Device
).A_(73,true,A.jV,0,[this,this.BeK]);return;}if(A._GetAutoObject(A.Device.Device
).Aq2()===false){A.zX([this,this.Xv],[B=A._GetAutoObject(A.Device.Device),B.Wm,B.
W8],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jV,0,[this,this.Af4]);return;
}var AfP=A._GetAutoObject(A.Device.Device).AnN(0);if(AfP.AnS){A._GetAutoObject(A.
Device.Device).BatchResetBirthNoticePending();this.Dx(A.aaR(A.acf.Bhf));A._GetAutoObject(
A.Device.Device).Aqp(AfP);}else A._GetAutoObject(A.Device.Device).A_(70,true,A.jV
,0,null);},AJn:function(){var Azl=this.Bh.AX;if(!Azl)return false;var P;for(P=0;
P<Azl.Cd();P++)if(A._GetAutoObject(A.Device.Helper).AjW(Azl.AOJ(P,34))===false)return true;
return false;},Xu:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
17);},AAp:function(G){if(A._GetAutoObject(A.Device.Device).Aqe===1)A.pe([this,this.
A59],this);},_Init:function(aArg){C.Q3._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.AMG;this.
Dn(C.AOO);this.Init(aArg);},_Done:function(){this.__proto__=C.Q3;this.DataExportDestinationToString.
_Done();C.Q3._Done.call(this);},_ReInit:function(){C.Q3._ReInit.call(this);this.
DataExportDestinationToString._ReInit();},_Mark:function(D){var B;C.Q3._Mark.call(
this,D);if((B=this.DataExportDestinationToString)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::BirthRegistrationsListScreen"};C.AOO={D3:function(G){
C.Aeh.D3.call(this,G);this.Dc.Aw(A._GetAutoObject(A.Device.Converter).AdM(11));}
,_Init:function(aArg){C.Aeh._Init.call(this,aArg);this.__proto__=C.AOO;this.Text.
R(A.aaR(A.acf.ABJ));},_ReInit:function(){C.Aeh._ReInit.call(this);this.Text.R(A.
aaR(A.acf.ABJ));},_className:"Application::HeaderBirthRegistrationsList"};C.APf={
D3:function(G){C.Aeh.D3.call(this,G);this.Dc.Aw(A._GetAutoObject(A.Device.Converter
).AdM(12));},_Init:function(aArg){C.Aeh._Init.call(this,aArg);this.__proto__=C.APf;
this.Text.R(A.aaR(A.acf.AF4));},_ReInit:function(){C.Aeh._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AF4));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ABU={KB:0,AP:null,SL:null,Tb:0,Init:function(aArg){},Bk:function(aSize){C.Ba.Bk.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SL.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SL.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rc(this.
KB));this.SL.R(A._GetAutoObject(A.acj.KI).ACG(this.Tb));},Ce:function(Ad){if(!this.
AX)return;this.Hk=Ad;if(!!this.AX){this.KB=this.AX.KL(Ad,26);this.Tb=this.AX.HD(
Ad,4);this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.SL={I:this},0);this.__proto__=C.ABU;
this.AP.H(AZO);this.AP.L(A.jb.Bc);this.SL.H(AZP);this.J(this.AP,0);this.J(this.SL
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bi));this.SL.S(A.aaL(A.fl.Ak));
this.SL.A2(A.aaL(A.fl.Bi));this.SL.Ct(A.aaL(A.fl.Bi));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SL._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SL._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bi));this.SL.S(A.aaL(A.fl.Ak));this.SL.A2(A.
aaL(A.fl.Bi));this.SL.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SL)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUm={
AeJ:null,AbS:null,TL:null,KJ:null,TJ:null,NF:null,Td:A.jV,Ai:function(Ae){var F;
C.SI.Ai.call(this,Ae);this.TL.L(this.V.AQ);var Apj=false;if((!this.Di||!(F=this.
Di,F[1].call(F[0])))&&!this.A9)Apj=true;this.TL.Z(Apj);this.Pp.Z(!Apj);this.VG.Z(
!Apj);this.QU.Z(!Apj);this.Ye.Z(!Apj);this.PZ.Z(!Apj);},Adl:function(G){var B;var
F;if(!this.Td.length){C.SI.Adl.call(this,G);return;}var BR=this.FS;var GO=A._GetAutoObject(
A.Device.AnD).Bfk(this.Td);this.Td=A.jV;if(!GO){A._GetAutoObject(A.Device.Device
).A_(101,true,A.jV,0,this.AbS);A.pe(this.AeJ,this);return;}if(this.Ar6&&(GO>A._GetAutoObject(
A.Device.Helper).Ds())){A._GetAutoObject(A.Device.Device).A_(102,true,A.jV,0,this.
AbS);A.pe(this.AeJ,this);return;}this.Uf(((B=(GO|0))<0)?B+0x100000000:B);if(this.
FS!==BR){if(!!this.Di)(F=this.Di,F[2].call(F[0],this.FS));A.abo(this.Di,0);}if(!
!this.OD)A.pe(this.OD,this);},A2S:function(G){if(this.Td.length<8)this.Td=this.Td+
String.fromCharCode(this.KJ.DM);},AR0:function(G){if((this.NF.DM===0x0D)||(this.
NF.DM===0x0A))this.Adl(this);else this.NF.NE=true;},AS1:function(E){if(A.aa0(this.
AeJ,E))return;this.AeJ=E;},AS2:function(E){if(A.aa0(this.AbS,E))return;this.AbS=
E;},_Init:function(aArg){C.SI._Init.call(this,aArg);A.acg.Text._Init.call(this.TL={
I:this},0);A.Core.BL._Init.call(this.KJ={I:this},0);A.Core.BL._Init.call(this.TJ={
I:this},0);A.Core.BL._Init.call(this.NF={I:this},0);this.__proto__=C.AUm;this.TL.
H(BtJ);this.TL.I3(true);this.TL.A8(0x12);this.TL.R(A.aaR(A.acf.A5J));this.KJ.Filter=
143;this.TJ.Filter=149;this.NF.Filter=145;this.J(this.TL,0);this.TL.S(A.aaL(A.fl.
EG));this.KJ.BM=[this,this.A2S];this.TJ.BM=[this,this.Bbu];this.NF.BM=[this,this.
AR0];},_Done:function(){this.__proto__=C.SI;this.TL._Done();this.KJ._Done();this.
TJ._Done();this.NF._Done();C.SI._Done.call(this);},_ReInit:function(){C.SI._ReInit.
call(this);this.TL._ReInit();this.KJ._ReInit();this.TJ._ReInit();this.NF._ReInit(
);this.TL.R(A.aaR(A.acf.A5J));this.TL.S(A.aaL(A.fl.EG));},_Mark:function(D){var B;
C.SI._Mark.call(this,D);if((B=this.AeJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AbS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NF)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUq={AeJ:null,AbS:null,KJ:null
,TJ:null,NF:null,Td:A.jV,IS:function(G){var F;if(!this.Td.length){C.Q7.IS.call(this
,G);return;}if(this.Ar5)return;if(!this.Td.length)this.TJ.NE=true;var BR=this.AM;
var GO=A._GetAutoObject(A.Device.AnD).BAO(this.Td);this.Td=A.jV;if(!GO){if((this.
Td.length<13)&&!A._GetAutoObject(A.Device.Device).Ur)A._GetAutoObject(A.Device.Device
).A_(105,true,A.jV,0,this.AbS);else A._GetAutoObject(A.Device.Device).A_(103,true
,A.jV,0,this.AbS);A.pe(this.AeJ,this);return;}this.BC(GO);if(this.AM!==BR){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OD)A.pe(this.
OD,this);},A2S:function(G){if(this.Ar5)return;if(this.Td.length<17)this.Td=this.
Td+String.fromCharCode(this.KJ.DM);},AR0:function(G){if((this.NF.DM===0x0D)||(this.
NF.DM===0x0A))this.IS(this);else this.NF.NE=true;},AS1:function(E){if(A.aa0(this.
AeJ,E))return;this.AeJ=E;},AS2:function(E){if(A.aa0(this.AbS,E))return;this.AbS=
E;},_Init:function(aArg){C.Q7._Init.call(this,aArg);A.Core.BL._Init.call(this.KJ={
I:this},0);A.Core.BL._Init.call(this.TJ={I:this},0);A.Core.BL._Init.call(this.NF={
I:this},0);this.__proto__=C.AUq;this.ArM(false);this.KJ.Filter=143;this.TJ.Filter=
149;this.NF.Filter=145;this.KJ.BM=[this,this.A2S];this.TJ.BM=[this,this.As_];this.
NF.BM=[this,this.AR0];},_Done:function(){this.__proto__=C.Q7;this.KJ._Done();this.
TJ._Done();this.NF._Done();C.Q7._Done.call(this);},_ReInit:function(){C.Q7._ReInit.
call(this);this.KJ._ReInit();this.TJ._ReInit();this.NF._ReInit();},_Mark:function(
D){var B;C.Q7._Mark.call(this,D);if((B=this.AeJ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AbS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APc={Am:null,CT:null,Init:function(aArg){var B;A.zX([this,this.D3],[B=A._GetAutoObject(
A.Device.Device),B.A8M,B.AFd],0);A.pe([this,this.D3],this);},Dd:function(E){C.BS.
Dd.call(this,E);this.Am.L(E);this.CT.AeQ(E);},Wo:function(E){this.CT.CY(E);},D3:
function(G){this.CT.T(A._GetAutoObject(A.Device.Device).AvN.toFixed());},_Init:function(
aArg){C.BS._Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);C.CT._Init.
call(this.CT={I:this},0);this.__proto__=C.APc;this.Am.H(As5);this.CT.A3(0x14);this.
CT.H(BtK);this.CT.AeQ(A.jb.Bm);this.CT.CY(A.jb.ST);this.CT.Hs(2);this.CT.Blw(0x11
);this.J(this.Am,0);this.J(this.CT,0);this.Am.Aw(A.aaL(A.ach.Avp));this.CT.S(A.aaL(
A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.BS;this.Am._Done();
this.CT._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this
);this.Am._ReInit();this.CT._ReInit();this.CT.S(A.aaL(A.fl.Bi));},_Mark:function(
D){var B;C.BS._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARp={Aa7:null,Aeb:null,VD:null,Init:function(aArg){this.Bb(this.Aa7);},KP:function(
){if(!this.Bz){this.Bz=A._NewObject(C.N,0);this.Bz.CA=[this,this.Xt];this.Bz.Ck=
null;this.Bz.Cg=[this,this.A2V];this.Bz.B2(A.jV);this.Bz.Cq(null);this.Bz.CZ(A.aaL(
A.ach.VP));}return this.Bz;},AAi:function(G){var Aa=(C.Ajb.isPrototypeOf(G)?G:null
);if(Aa===this.Aa7)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aeb)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A$2);},_Init:function(aArg){C.Fk._Init.call(this,aArg);C.Ajb._Init.call(this.
Aa7={I:this},0);C.Ajb._Init.call(this.Aeb={I:this},0);C.ARt._Init.call(this.VD={
I:this},0);this.__proto__=C.ARp;var B;this.H(Ri);this.Text.R(A.aaR(A.acf.ABO));this.
Aa7.H(IN);this.Aa7.T(A.aaR(A.acf.Ajy));this.Aeb.H(P5);this.Aeb.T(A.aaR(A.acf.AF$
));this.VD.H(Z7);this.VD.T(A.aaR(A.acf.A5g));this.J(this.Aa7,0);this.J(this.Aeb,
0);this.J(this.VD,0);this.Text.S(A.aaL(A.fl.Ak));this.Aa7.AR=[this,this.AAi];this.
Aeb.AR=[this,this.AAi];this.VD.ASF([B=A._GetAutoObject(A.Device.Device),B.AEo,B.
AIz]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fk;this.Aa7._Done();this.
Aeb._Done();this.VD._Done();C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.
call(this);this.Aa7._ReInit();this.Aeb._ReInit();this.VD._ReInit();this.Text.R(A.
aaR(A.acf.ABO));this.Aa7.T(A.aaR(A.acf.Ajy));this.Aeb.T(A.aaR(A.acf.AF$));this.VD.
T(A.aaR(A.acf.A5g));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fk._Mark.
call(this,D);if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARo={AnimalTableFields:null,Ay:null,Y:
null,JK:null,CS:function(){this.Aiz(this);},Init:function(aArg){A.zV([this,this.
Aiz],this.AnimalTableFields,0);A.pe([this,this.Aiz],this);},Dz:function(G){C.Fk.
Dz.call(this,G);this.MO(this);},KP:function(){if(!this.Bz){this.Bz=A._NewObject(
C.N,0);this.Bz.CA=[this,this.Es];this.Bz.Ck=[this,this.A2T];this.Bz.Cg=[this,this.
A3m];this.Bz.C5(A.aaL(A.ach.AqY));this.Bz.Cq(A.aaL(A.ach.AqR));this.Bz.CZ(A.aaL(
A.ach.VP));}return this.Bz;},Es:function(G){this.AAT();this.Xt(this);},Aiz:function(
G){this.AoT();var P;for(P=0;P<this.AnimalTableFields.NM();P=P+1){var Aaf=A._GetAutoObject(
C.Amf).OB(P);this.A0Z(Aaf);}this.J(this.JK,0);A.aaS([this,this.MO],this);},Fb:function(
G){var B;this.Ay.Mu((B=this.Y.Da(0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);
this.Ay.Mv(-this.Y.Bt[1]);},MO:function(G){var B;this.Y.Vm(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HC(this.AV,true,null,null);},A0Z:function(
G4){var AyW=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.R$,0);Aa.T(AyW.BO(G4));Aa.Aj(true);Aa.GY=G4;Aa.A92(this.AnimalTableFields.NR(G4
));this.J(Aa,0);this.Zt(Aa);},AoT:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdA=X;X=X.Ah;if(((AdA.U&0x400)===0x400))this.HL(AdA);}}
,AAT:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JK)){var Aa=(C.R$.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.GY);if(Aa.ASe())this.AnimalTableFields.
AUi(Aa.GY);}else A.ab5("%s",Ayc);}X=X.Ah;}this.AnimalTableFields.Co();},A2T:function(
G){var B;var Aa=(C.R$.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAa=(C.R$.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAa){this.Ahp(AAa,Aa);A.pe([this,this.MO],this);}}},A3m:function(
G){var B;var Aa=(C.R$.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAG=(C.R$.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAG){this.Ahp(Aa,AAG);A.pe([this,this.MO],this);}}},Aqv:function(
G){var B;A._GetAutoObject(A.Device.Device).Ar_(this);A.pe([this,this.Aiz],this);
},_Init:function(aArg){C.Fk._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.AuV._Init.call(this.JK={I:this},0);
this.__proto__=C.ARo;this.H(Ri);this.Text.R(A.aaR(A.acf.AF$));this.Ay.H(Ip);this.
Y.H(Baw);this.Y.JN(1);this.JK.H(AHT);this.JK.Aj(true);this.JK.T(A.aaR(A.acf.A5V)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JK,0);this.Y.Ej=[this,this.Fb];
this.JK.AR=[this,this.Aqv];this.AnimalTableFields=A._GetAutoObject(C.Amf);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fk;this.Ay._Done();this.Y._Done();this.
JK._Done();C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JK._ReInit();this.Text.R(A.aaR(A.acf.AF$));this.
JK.T(A.aaR(A.acf.A5V));this.CS();},_Mark:function(D){var B;C.Fk._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARn={Y:null,BY:null,C_:null,CF:null,GJ:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UJ:null,Init:function(aArg){A.zX([this,this.Auz],this.BY.Q,0);A.zX([
this,this.AML],this.CF.Q,0);A.zX([this,this.AVz],this.GJ.Q,0);A.zX([this,this.Avd
],this.C_.Q,0);this.Bb(this.BY);},Dz:function(G){C.Fk.Dz.call(this,G);this.MO(this
);},KP:function(){if(!this.Bz){this.Bz=A._NewObject(C.N,0);this.Bz.CA=[this,this.
Xt];this.Bz.Ck=null;this.Bz.Cg=null;this.Bz.B2(A.jV);this.Bz.Cq(null);this.Bz.CZ(
A.aaL(A.ach.VP));}return this.Bz;},Fb:function(G){var B;this.Ay.Mu((B=this.Y.Da(
0x1))[3]-B[1]);this.Ay.Mw((B=this.Y.M)[3]-B[1]);this.Ay.Mv(-this.Y.Bt[1]);},MO:function(
G){var B;this.Y.Vm(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HC(
this.AV,true,null,null);},Auz:function(G){var F;A._GetAutoObject(A.Device.Device
).Ex((F=this.BY.Q,F[1].call(F[0])));},AVz:function(G){var F;A._GetAutoObject(A.Device.
Device).Nd((F=this.GJ.Q,F[1].call(F[0])));},Avd:function(G){var F;A._GetAutoObject(
A.Device.Device).JO((F=this.C_.Q,F[1].call(F[0])));},AML:function(G){var F;A._GetAutoObject(
A.Device.Device).NW((F=this.CF.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fk._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.XF._Init.call(this.BY={
I:this},0);C.XF._Init.call(this.C_={I:this},0);C.XF._Init.call(this.CF={I:this},
0);C.XF._Init.call(this.GJ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},
0);C.Breed._Init.call(this.Breed={I:this},0);C.UK._Init.call(this.UJ={I:this},0);
this.__proto__=C.ARn;var B;this.H(Ri);this.Text.R(A.aaR(A.acf.Ajy));this.Y.H(Baw
);this.Y.JN(1);this.BY.H(AhO);this.BY.Ar(true);this.BY.Aj(true);this.BY.T(A.aaR(
A.acf.Afh));this.C_.H(Ax5);this.C_.Ar(true);this.C_.Aj(true);this.C_.T(A.aaR(A.acf.
Afc));this.CF.H(Aog);this.CF.Ar(true);this.CF.Aj(true);this.CF.T(A.aaR(A.acf.Breed
));this.GJ.H(AsS);this.GJ.Ar(true);this.GJ.Aj(true);this.GJ.T(A.aaR(A.acf.I_));this.
Ay.H(Ip);this.AnimalType.As(A._GetAutoObject(A.Device.Device).AnimalType);this.Gender.
As(A._GetAutoObject(A.Device.Device).Gender);this.Breed.As(A._GetAutoObject(A.Device.
Device).Breed);this.UJ.As(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(
this.Y,0);this.J(this.BY,0);this.J(this.C_,0);this.J(this.CF,0);this.J(this.GJ,0
);this.J(this.Ay,0);this.Y.Ej=[this,this.Fb];this.BY.Wq(A.aaL(A.fl.Ho));this.BY.
Wr(A.aaL(A.fl.Ho));this.BY.As([B=this.AnimalType,B.B$,B.Ca]);this.BY.CJ(this.AnimalType
);this.C_.Wq(A.aaL(A.fl.Ho));this.C_.Wr(A.aaL(A.fl.Ho));this.C_.As([B=this.Gender
,B.B$,B.Ca]);this.C_.CJ(this.Gender);this.CF.Wq(A.aaL(A.fl.Ho));this.CF.Wr(A.aaL(
A.fl.Ho));this.CF.As([B=this.Breed,B.B$,B.Ca]);this.CF.CJ(this.Breed);this.GJ.Wq(
A.aaL(A.fl.Ho));this.GJ.Wr(A.aaL(A.fl.Ho));this.GJ.As([B=this.UJ,B.B$,B.Ca]);this.
GJ.CJ(this.UJ);this.Init(aArg);},_Done:function(){this.__proto__=C.Fk;this.Y._Done(
);this.BY._Done();this.C_._Done();this.CF._Done();this.GJ._Done();this.Ay._Done(
);this.AnimalType._Done();this.Gender._Done();this.Breed._Done();this.UJ._Done();
C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.call(this);this.Y._ReInit(
);this.BY._ReInit();this.C_._ReInit();this.CF._ReInit();this.GJ._ReInit();this.Ay.
_ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.Breed._ReInit();this.
UJ._ReInit();this.Text.R(A.aaR(A.acf.Ajy));this.BY.T(A.aaR(A.acf.Afh));this.C_.T(
A.aaR(A.acf.Afc));this.CF.T(A.aaR(A.acf.Breed));this.GJ.T(A.aaR(A.acf.I_));},_Mark:
function(D){var B;C.Fk._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amj={CD:0,Ali:A.abi(17,0,null),OB:function(Hv){return this.Ali.Get(Hv);},NM:
function(){return this.CD;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.Ali.Set(
P,0);this.CD=0;},J:function(Z$){if(this.CD>=17)A.ab5("%s",BtL);else{this.Ali.Set(
this.CD,Z$);this.CD=this.CD+1;}},Co:function(){},EH:function(AhS){var AJJ=AhS.indexOf(
String.fromCharCode(0x2C),0);var A1n=A.jV;var P=0;this.CD=0;while(P<17)if(AhS===
A.jV)P++;else{if(AJJ===-1){A1n=AhS;AhS=A.jV;}else{A1n=A.abV(AhS,AJJ);AhS=A.ab1(AhS
,0,AJJ+1);}var Aaf=A.abZ(A1n,0,10)|0;if(this.Bjh(Aaf)){this.Ali.Set(this.CD,Aaf);
this.CD=this.CD+1;P++;}AJJ=AhS.indexOf(String.fromCharCode(0x2C),0);}if(AhS!==A.
jV)A.ab5("%s",BtM);},toString:function(){var B;var Az_=A.jV;var P;for(P=0;P<this.
CD;P=P+1){if(P>0)Az_=Az_+AHV;Az_=Az_+(((B=this.Ali.Get(P))<0)?B+0x100000000:B).toFixed(
);}return Az_;},Contains:function(Z$){var P;for(P=0;P<this.CD;P=P+1)if(this.Ali.
Get(P)===Z$)return true;return false;},Bjh:function(Z$){return true;},_Init:function(
aArg){(this.Ali=[]).__proto__=C.Amj.Ali;this.__proto__=C.Amj;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.ALQ={AfD:null,Init:function(aArg){var B;A.
zX([this,this.Bep],[B=A._GetAutoObject(A.Device.Device),B.A8e,B.BaO],0);A.zX([this
,this.Beq],[B=A._GetAutoObject(A.Device.Device),B.A8f,B.BaP],0);A.pe([this,this.
Bep],this);A.pe([this,this.Beq],this);},Clear:function(){C.Amj.Clear.call(this);
this.AfD.Clear();},Co:function(){A._GetAutoObject(A.Device.Device).Arq(this.AfD.
toString());A._GetAutoObject(A.Device.Device).Arr(this.toString());},Bep:function(
G){this.AfD.EH(A._GetAutoObject(A.Device.Device).ABp);A.we(this,0);},Beq:function(
G){this.EH(A._GetAutoObject(A.Device.Device).ABq);A.we(this,0);},NR:function(Z$){
return this.AfD.Contains(Z$);},AUi:function(Z$){if(!this.NR(Z$))this.AfD.J(Z$);}
,AOv:function(){return this.AfD.NM();},_Init:function(aArg){C.Amj._Init.call(this
,aArg);this.__proto__=C.ALQ;this.AfD=A._NewObject(C.Amj,0);this.Init(aArg);},_Mark:
function(D){var B;C.Amj._Mark.call(this,D);if((B=this.AfD)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.Amf={_Init:
function(){C.ALQ._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.ARt={Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.
V.Text.A8(0x11);this.V.Text.Hs(10);},Bk:function(aSize){C.T8.Bk.call(this,aSize);
this.V.H(A.abN(this.V.M,this.Mj.M[0]));},Ai:function(Ae){var B;C.T8.Ai.call(this
,Ae);var G9=((Ae&0x10)===0x10);var Fo=((Ae&0x20)===0x20);var Gx=this.Bo.By;var FK=
A.jb.AdZ;var GN=A.jb.Bm;if(this.Hd){FK=A.jb.Bm;GN=A.jb.Text;}if(!G9){this.Background.
L(FK);this.V.L(A.jb.CI);}else if(Gx){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm
);}else if(Fo){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.
L(FK);this.V.L(GN);}this.LF=G9;this.KC=Fo;this.Ql=Gx;},_Init:function(aArg){C.T8.
_Init.call(this,aArg);this.__proto__=C.ARt;this.Init(aArg);},_className:"Application::MenuItemCheckBoxOverlay"
};C.ATM={YC:null,AjD:null,KP:function(){if(!this.Bz){this.Bz=A._NewObject(C.N,0);
this.Bz.CA=[this,this.Xt];this.Bz.Ck=null;this.Bz.Cg=null;this.Bz.B2(A.jV);this.
Bz.Cq(null);this.Bz.CZ(A.aaL(A.ach.VP));}return this.Bz;},_Init:function(aArg){C.
OverlayMenu._Init.call(this,aArg);C.XF._Init.call(this.YC={I:this},0);C.VE._Init.
call(this.AjD={I:this},0);this.__proto__=C.ATM;var B;this.H(JY);this.YC.H(JY);this.
YC.T(A.aaR(A.acf.A5H));this.AjD.As(A._GetAutoObject(A.Device.Device).VE);this.J(
this.YC,0);this.YC.Wq(A.aaL(A.fl.Ho));this.YC.Wr(A.aaL(A.fl.Ho));this.YC.As([B=this.
AjD,B.B$,B.Ca]);this.YC.CJ(this.AjD);this.AjD.BlJ([B=A._GetAutoObject(A.Device.Device
),B.AR_,B.AZT]);},_Done:function(){this.__proto__=C.OverlayMenu;this.YC._Done();
this.AjD._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.YC._ReInit();this.AjD._ReInit();this.YC.T(A.aaR(A.acf.A5H
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.YC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PurchasedAnimalsListOverlayMenu"};C.VE={Aa3:null,DataExportDestinationToString:
null,Dr:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gd:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.BO(aIndex);},DO:function(A7){return A7;},Hp:function(
){return 1;},As:function(E){var F;C.AC.As.call(this,E);if(!!this.Aa3)(F=this.Aa3
,F[2].call(F[0],E));},BlJ:function(E){if(A.aaZ(this.Aa3,E))return;if(!!this.Aa3)
A.z$([this,this.ApE],this.Aa3,0);this.Aa3=E;if(!!this.Aa3)A.zX([this,this.ApE],this.
Aa3,0);A.pe([this,this.ApE],this);},ApE:function(G){var F;if(!!this.Aa3)this.Q=(
F=this.Aa3,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Ca],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.VE;},
_Done:function(){this.__proto__=C.AC;this.DataExportDestinationToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Aa3)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.AMF={
YJ:null,AkW:null,KP:function(){if(!this.Bz){this.Bz=A._NewObject(C.N,0);this.Bz.
CA=[this,this.Xt];this.Bz.Ck=null;this.Bz.Cg=null;this.Bz.B2(A.jV);this.Bz.Cq(null
);this.Bz.CZ(A.aaL(A.ach.VP));}return this.Bz;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.XF._Init.call(this.YJ={I:this},0);C.ADV._Init.call(this.
AkW={I:this},0);this.__proto__=C.AMF;var B;this.H(JY);this.YJ.H(JY);this.YJ.T(A.
aaR(A.acf.Display));this.AkW.As(A._GetAutoObject(A.Device.Device).Aqe);this.J(this.
YJ,0);this.YJ.Wq(A.aaL(A.fl.Ho));this.YJ.Wr(A.aaL(A.fl.Ho));this.YJ.As([B=this.AkW
,B.B$,B.Ca]);this.YJ.CJ(this.AkW);this.AkW.BmN([B=A._GetAutoObject(A.Device.Device
),B.AEk,B.AIw]);},_Done:function(){this.__proto__=C.OverlayMenu;this.YJ._Done();
this.AkW._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.YJ._ReInit();this.AkW._ReInit();this.YJ.T(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.YJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AkW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.ADV={AbE:null,ListViewScopeToString:
null,Dr:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gd:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.BO(aIndex);},DO:function(A7){return A7;},Hp:function(){return 1;
},As:function(E){var F;C.AC.As.call(this,E);if(!!this.AbE)(F=this.AbE,F[2].call(
F[0],E));},BmN:function(E){if(A.aaZ(this.AbE,E))return;if(!!this.AbE)A.z$([this,
this.ApE],this.AbE,0);this.AbE=E;if(!!this.AbE)A.zX([this,this.ApE],this.AbE,0);
A.pe([this,this.ApE],this);},ApE:function(G){var F;if(!!this.AbE)this.Q=(F=this.
AbE,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Ca],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.ADV;},_Done:function(){this.__proto__=
C.AC;this.ListViewScopeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AbE)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};C.AUW={AB1:0,AB0:0,Ai:function(Ae){C.OS.Ai.call(this
,Ae);this.Background.L(this.AB0);this.V.L(this.AB1);},BlD:function(E){if(this.AB1===
E)return;this.AB1=E;this.An();},BlC:function(E){if(this.AB0===E)return;this.AB0=
E;this.An();},_Init:function(aArg){C.OS._Init.call(this,aArg);this.__proto__=C.AUW;
this.Ar(false);this.AB1=A.jb.Text;this.AB0=A.jb.CI;},_className:"Application::TextCaptionItem"
};C.AG_={WeightValuePrecisionToString:null,Init:function(aArg){var B;A.zX([this,
this.BdV],[B=A._GetAutoObject(A.Device.Device),B.A8N,B.Ba7],0);A.pe([this,this.BdV
],this);},Dr:function(){return 3;},Gd:function(aIndex){return this.WeightValuePrecisionToString.
BO(this.C7(aIndex));},As:function(E){C.CQ.As.call(this,E);A._GetAutoObject(A.Device.
Device).AwG(E);},BdV:function(G){this.Q=A._GetAutoObject(A.Device.Device).OI;A.abo([
this,this.B$,this.Ca],0);},_Init:function(aArg){C.CQ._Init.call(this,aArg);A.Device.
WeightValuePrecisionToString._Init.call(this.WeightValuePrecisionToString={I:this
},0);this.__proto__=C.AG_;this.Cr.Set(0,0);this.Cr.Set(1,1);this.Cr.Set(2,2);this.
Init(aArg);},_Done:function(){this.__proto__=C.CQ;this.WeightValuePrecisionToString.
_Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.
WeightValuePrecisionToString._ReInit();},_Mark:function(D){var B;C.CQ._Mark.call(
this,D);if((B=this.WeightValuePrecisionToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightValuePrecision"};C.AUo={Ux:null,A$t:A.jV,Init:function(
aArg){},Bk:function(aSize){C.BZ.Bk.call(this,[aSize[0],80]);this.Background.H(A.
abK(this.Background.M,aSize));this.Ux.H([0,80,aSize[0],aSize[1]]);},Ai:function(
Ae){C.BZ.Ai.call(this,Ae);this.Ux.L(this.V.AQ);},Bnf:function(E){if(this.A$t===E
)return;this.A$t=E;this.Ux.R(E);},_Init:function(aArg){C.BZ._Init.call(this,aArg
);C.CG._Init.call(this.Ux={I:this},0);this.__proto__=C.AUo;this.H(AcF);this.Ux.H(
BtN);this.J(this.Ux,0);this.Ux.S(A.aaL(A.fl.Af));this.Ux.A2(A.aaL(A.fl.Ak));this.
Ux.Ct(null);this.Init(aArg);},_Done:function(){this.__proto__=C.BZ;this.Ux._Done(
);C.BZ._Done.call(this);},_ReInit:function(){C.BZ._ReInit.call(this);this.Ux._ReInit(
);this.Ux.S(A.aaL(A.fl.Af));this.Ux.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;
C.BZ._Mark.call(this,D);if((B=this.Ux)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupSubCaption"};C.YZ={MassDeregistrationCriterionToString:
null,Dr:function(){return 2;},Gd:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BO(this.C7(aIndex));},_Init:function(
aArg){C.CQ._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.YZ;this.
Cr.Set(0,0);this.Cr.Set(1,1);},_Done:function(){this.__proto__=C.CQ;this.MassDeregistrationCriterionToString.
_Done();C.CQ._Done.call(this);},_ReInit:function(){C.CQ._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.CQ._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.ANz={U$:null
,YZ:null,Y1:null,Mq:null,AtV:0,Init:function(aArg){this.Bb(this.Y1);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);var BBF=((A.aaR(A.acf.Aql)+A.aaR(A.acf.Colon))+CO)+this.
AtV.toFixed();this.Mq.Bnf(BBF);},CB:function(G){C.Eg.CB.call(this,G);A.zX([this,
this.AK_],this.Mq.Q,0);A.pe([this,this.AK_],this);},EY:function(G){C.Eg.EY.call(
this,G);A.z$([this,this.AK_],this.Mq.Q,0);},DH:function(G){C.Eg.DH.call(this,G);
if((this.AV===this.Mq)&&!this.AtV)this.N.HO.Do(100);else this.N.HO.Do(255);},BeF:
function(G){if(this.AtV>0)A._GetAutoObject(A.Device.Device).A_(108,true,this.AtV.
toFixed(),0,[this,this.BzU]);},AK_:function(G){var F;this.AtV=A._GetAutoObject(A.
Device.Helper).BiF((F=this.Mq.Q,F[1].call(F[0])));this.An();A.pe([this,this.MG],
this);},Bez:function(G){var B;if(!A._GetAutoObject(A.Device.Device).Ao.Cd()){A._GetAutoObject(
A.Device.Device).A_(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).Aq2()===false){this.U$=[this,this.Bez];A.zX([this,this.Xv],[B=A._GetAutoObject(
A.Device.Device),B.Wm,B.W8],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jV
,0,[this,this.Af4]);return;}var AfP=A._GetAutoObject(A.Device.Device).AnN(1);if(
AfP.AnS)A._GetAutoObject(A.Device.Device).Aqp(AfP);else A._GetAutoObject(A.Device.
Device).A_(88,true,A.jV,0,null);},Af4:function(G){var B;var At=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===5)){A.z$([this,this.Xv],[B=A.
_GetAutoObject(A.Device.Device),B.Wm,B.W8],0);this.U$=null;}},Xv:function(G){var
B;if(A._GetAutoObject(A.Device.Device).AhH===3){A._GetAutoObject(A.Device.Device
).A_(74,false,A.jV,0,[this,this.Af4]);A.z$([this,this.Xv],[B=A._GetAutoObject(A.
Device.Device),B.Wm,B.W8],0);if(!!this.U$)A.pe(this.U$,this);this.U$=null;}},BzU:
function(G){var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.
PopupState===7))A.pe([this,this.BBA],this);},BBA:function(G){A._GetAutoObject(A.
Device.Helper).BxS(this.YZ.Q);A._GetAutoObject(A.Device.Device).A_(109,true,this.
AtV.toFixed(),0,null);A.pe([this,this.MG],this);A.pe([this,this.AK_],this);},_Init:
function(aArg){C.Eg._Init.call(this,aArg);C.YZ._Init.call(this.YZ={I:this},0);C.
Cm._Init.call(this.Y1={I:this},0);C.AUo._Init.call(this.Mq={I:this},0);this.__proto__=
C.ANz;var B;this.Dn(C.AOQ);this.Y1.H(IN);this.Y1.Aj(true);this.Y1.T(A.aaR(A.acf.
A6j));this.Y1.Bj(false);this.Mq.H(BtO);this.Mq.Aj(true);this.Mq.T(A.aaR(A.acf.A$J
));this.Mq.Bj(true);this.Mq.A_t(A.aaR(A.acf.Ok));this.J(this.Y1,0);this.J(this.Mq
,0);this.Y1.AR=[this,this.Bez];this.Mq.AR=[this,this.BeF];this.Mq.AeK([this,this.
BeF]);this.Mq.As([B=this.YZ,B.B$,B.Ca]);this.Mq.CJ(this.YZ);this.Init(aArg);},_Done:
function(){this.__proto__=C.Eg;this.YZ._Done();this.Y1._Done();this.Mq._Done();C.
Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.YZ._ReInit(
);this.Y1._ReInit();this.Mq._ReInit();this.Y1.T(A.aaR(A.acf.A6j));this.Mq.T(A.aaR(
A.acf.A$J));this.Mq.A_t(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.U$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.YZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Mq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AOQ={_Init:function(aArg){C.KM._Init.call(this,aArg);this.__proto__=C.AOQ;this.
Text.R(A.aaR(A.acf.XI));},_ReInit:function(){C.KM._ReInit.call(this);this.Text.R(
A.aaR(A.acf.XI));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANC={
U$:null,Y0:null,AbI:null,Init:function(aArg){this.Bb(this.Y0);A.pe([this,this.MG
],this);},Bey:function(G){var B;var AzT=A._GetAutoObject(A.Device.Device).ADH();
switch(AzT){case 1:A._GetAutoObject(A.Device.Device).A_(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A_(91,true,US,0,[this,this.BeS]);break;
case 2:{this.U$=[this,this.Bey];A.zX([this,this.Xv],[B=A._GetAutoObject(A.Device.
Device),B.Wm,B.W8],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jV,0,[this,
this.Af4]);}break;default:throw new Error(Bax+AzT.toFixed());}},Af4:function(G){
var B;var At=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!At&&(At.PopupState===
5)){A.z$([this,this.Xv],[B=A._GetAutoObject(A.Device.Device),B.Wm,B.W8],0);this.
U$=null;}},Xv:function(G){var B;if(A._GetAutoObject(A.Device.Device).AhH===3){A.
_GetAutoObject(A.Device.Device).A_(74,false,A.jV,0,[this,this.Af4]);A.z$([this,this.
Xv],[B=A._GetAutoObject(A.Device.Device),B.Wm,B.W8],0);if(!!this.U$)A.pe(this.U$
,this);this.U$=null;}},BeU:function(G){var B;var AzT=A._GetAutoObject(A.Device.Device
).ADI();switch(AzT){case 1:A._GetAutoObject(A.Device.Device).A_(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A_(95,true,A.jV,0,[this,this.BzV
]);break;case 2:{this.U$=[this,this.BeU];A.zX([this,this.Xv],[B=A._GetAutoObject(
A.Device.Device),B.Wm,B.W8],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jV
,0,[this,this.Af4]);}break;case 3:A._GetAutoObject(A.Device.Device).A_(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A_(93,true,A.jV,0,null
);break;default:throw new Error(Bax+AzT.toFixed());}},BeS:function(G){var At=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(At.Id){case 91:if(At.PopupState===
9)A.aaS([this,this.Byv],this);break;case 92:if(At.PopupState===9)A.aaS([this,this.
Byx],this);break;default:throw new Error(BtP+At.Id.toFixed());}},Byv:function(G){
if(A._GetAutoObject(A.Device.Device).AB_()){var A2E=A._GetAutoObject(A.Device.Device
).Ao.QC();A._GetAutoObject(A.Device.Device).A_(80,true,A2E.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A_(82,true,A.jV,0,null);A.aaS([this,this.BzQ],
this);},Byx:function(G){if(A._GetAutoObject(A.Device.Device).AGe()){var A2E=A._GetAutoObject(
A.Device.Device).Ao.QC();A._GetAutoObject(A.Device.Device).A_(81,true,A2E.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A_(83,true,A.jV,0,null);A.aaS([
this,this.BAt],this);},BzV:function(G){var At=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!At&&(At.PopupState===7))A.pe([this,this.BBB],this);},BBB:function(
G){A._GetAutoObject(A.Device.Device).A_(92,true,US,0,[this,this.BeS]);},BAt:function(
G){A._GetAutoObject(A.Device.Device).A_(92,false,A.jV,0,null);},BzQ:function(G){
A._GetAutoObject(A.Device.Device).A_(91,false,A.jV,0,null);},_Init:function(aArg
){C.Eg._Init.call(this,aArg);C.Cm._Init.call(this.Y0={I:this},0);C.Cm._Init.call(
this.AbI={I:this},0);this.__proto__=C.ANC;this.Dn(C.AOT);this.Y0.H(IN);this.Y0.Aj(
true);this.Y0.T(A.aaR(A.acf.AB_));this.Y0.Bj(false);this.AbI.H(P5);this.AbI.Aj(true
);this.AbI.T(A.aaR(A.acf.AGe));this.AbI.Bj(true);this.J(this.Y0,-1);this.J(this.
AbI,-1);this.Y0.AR=[this,this.Bey];this.AbI.AR=[this,this.BeU];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Eg;this.Y0._Done();this.AbI._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Y0._ReInit();this.AbI.
_ReInit();this.Y0.T(A.aaR(A.acf.AB_));this.AbI.T(A.aaR(A.acf.AGe));},_Mark:function(
D){var B;C.Eg._Mark.call(this,D);if((B=this.U$)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AOT={
_Init:function(aArg){C.KM._Init.call(this,aArg);this.__proto__=C.AOT;this.Text.R(
A.aaR(A.acf.ACe));},_ReInit:function(){C.KM._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACe));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.RG={NT:null
,ATT:0,ADK:false,ADG:false,ADL:false,AlQ:function(G){this.A5Z(this);},ASX:function(
E){if(this.NT===E)return;this.NT=E;if(!this.NT)return;this.DL.AutoActions=E;A.zV([
this,this.BBk],this.NT,0);},ALR:function(){this.ALU(A.aaR(A.acf.A$R),[this,this.
BBR],[this,this.A8H,this.AE6]);this.ALU(A.aaR(A.acf.AF5),[this,this.BBP],[this,this.
A8E,this.AE4]);this.ALU(A.aaR(A.acf.AnT),[this,this.BBQ],[this,this.A8F,this.AE5
]);A._GetAutoObject(C.BN).FA();A._GetAutoObject(C.BN).Nz(A.aaR(A.acf.BgQ)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BN).FA();},ALU:function(Bwk,Bxv,BwP){if(!this.NT
)return;this.ALT(Bwk,Bxv,BwP);},BBR:function(G){this.AE6(!this.ADL);},BBP:function(
G){this.AE4(!this.ADG);},BBQ:function(G){this.AE5(!this.ADK);},A3U:function(Ez,BwO
){if(!this.NT)return;if(BwO)this.NT.BgN(Ez);else this.NT.Bn1(Ez);this.NT.Co();},
A4B:function(AcX,AcY,BxN){A._GetAutoObject(C.BN).Aur(AcX,AcY,[this,this.A8Y,this.
AS_],BxN);},AGr:function(Ez){if(!this.NT)return;this.NT.AGr(Ez);this.NT.Co();},AE6:
function(E){if(this.ADL===E)return;this.ADL=E;this.A3U(256,E);A.abo([this,this.A8H
,this.AE6],0);},AE4:function(E){if(this.ADG===E)return;this.ADG=E;this.A3U(2,E);
A.abo([this,this.A8E,this.AE4],0);},AE5:function(E){if(this.ADK===E)return;this.
ADK=E;this.A3U(1,E);A.abo([this,this.A8F,this.AE5],0);},BBk:function(G){this.AE6(
this.NT.Contains(256));this.AE4(this.NT.Contains(2));this.AE5(this.NT.Contains(1
));if(this.NT.NM()>0)this.AS_(this.NT.OB(this.NT.NM()-1));},AS_:function(E){if(this.
ATT===E)return;this.ATT=E;A.abo([this,this.A8Y,this.AS_],0);},A8H:function(){return this.
ADL;},A8E:function(){return this.ADG;},A8F:function(){return this.ADK;},A8Y:function(
){return this.ATT;},_Init:function(aArg){C.GS._Init.call(this,aArg);this.__proto__=
C.RG;},_Mark:function(D){var B;C.GS._Mark.call(this,D);if((B=this.NT)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvM={Q:null,Co:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADE:
function(Ez){switch(Ez){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},J$:function(G){var F;if(!!this.Q)this.EH((F=
this.Q,F[1].call(F[0])));A.we(this,0);},As:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.J$],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.J$],E,
0);if(!!E)A.pe([this,this.J$],this);},AGr:function(Ez){if(this.NM()>0)this.Axi(this.
NM()-1,Ez);},BgN:function(Ez){if(this.Contains(Ez))return;if(this.CD>=17){A.ab5(
"%s",AHU);return;}var AzM=0;for(;(AzM<=this.NM())&&(this.OB(AzM)<Ez);AzM++);var AAY=
this.NM()-1;this.J(this.OB(AAY));for(;AAY>AzM;AAY--)this.Axi(AAY,this.OB(AAY-1));
this.Axi(AzM,Ez);},Bn1:function(Ez){var index=this.DO(Ez);if(index<0)return;for(;
index<(this.NM()-1);index++)this.Axi(index,this.OB(index+1));this.Axi(index,0);this.
CD--;},_Init:function(aArg){C.Vl._Init.call(this,aArg);this.__proto__=C.AvM;},_Mark:
function(D){var B;C.Vl._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::ListActionsListClass"};C.AvU={_Init:
function(){C.AvM._Init.call(this,0);var B;this.As([B=A._GetAutoObject(A.Device.Device
),B.A8R,B.Ba$]);},_ReInit:function(){},_variants:function(){return this;},_this:
null};C.AvV={_Init:function(){C.AvM._Init.call(this,0);var B;this.As([B=A._GetAutoObject(
A.Device.Device),B.A8S,B.Bba]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AxO={_Init:function(){C.AvM._Init.call(this,0);var B;this.As([B=
A._GetAutoObject(A.Device.Device),B.A9o,B.Bbo]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ADa={QM:null,AjP:null,_Init:function(aArg
){C.Db._Init.call(this,aArg);C.CG._Init.call(this.QM={I:this},0);A.acg.Am._Init.
call(this.AjP={I:this},0);this.__proto__=C.ADa;this.Eo.H(BtQ);this.DS.H(BtR);this.
QM.H(BtS);this.QM.R(A.aaR(A.acf.Uc));this.QM.A8(0x11);this.QM.L(A.jb.Text);this.
AjP.H(AZL);this.AjP.L(A.jb.Text);this.J(this.QM,0);this.J(this.AjP,0);this.QM.S(
A.aaL(A.fl.Af));this.QM.A2(A.aaL(A.fl.Ak));this.QM.Ct(A.aaL(A.fl.Bi));this.AjP.Aw(
A.aaL(A.ach.Avo));},_Done:function(){this.__proto__=C.Db;this.QM._Done();this.AjP.
_Done();C.Db._Done.call(this);},_ReInit:function(){C.Db._ReInit.call(this);this.
QM._ReInit();this.AjP._ReInit();this.QM.R(A.aaR(A.acf.Uc));this.QM.S(A.aaL(A.fl.
Af));this.QM.A2(A.aaL(A.fl.Ak));this.QM.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var
B;C.Db._Mark.call(this,D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"
};C.ABT={AP:null,SN:null,OT:null,AKe:A.jV,Bd4:A.jV,Md:0,Init:function(aArg){},Bk:
function(aSize){C.Ba.Bk.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OT.H([this.V.M[2]-
1,0,((aSize[0]*70)/100)|0,aSize[1]]);this.AP.H([this.OT.M[2]-1,0,this.OT.M[2]+1,
aSize[1]]);this.SN.H([this.OT.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.
Ai.call(this,Ae);this.OT.L(this.V.AQ);this.SN.L(this.V.AQ);this.T(this.AKe);this.
OT.R(this.Bd4);this.SN.R(this.Md.toFixed());},Ce:function(Ad){if(!this.AX)return;
this.Hk=Ad;if(!!this.AX){var KB=this.AX.KL(Ad,26);var A2w=A._GetAutoObject(A.Device.
Converter).Rc(KB);this.AKe=A.abV(A2w,A2w.length-5);this.Bd4=A.ab2(A2w,5);if((A._GetAutoObject(
A.Device.Converter).ZO(KB)===10)&&!(Math.trunc(KB/10000000000)%100))this.AKe=A.ab1(
this.AKe,3,2);this.Md=this.AX.CE(Ad,1);this.An();}},_Init:function(aArg){C.Ba._Init.
call(this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CG._Init.call(this.SN={
I:this},0);C.CG._Init.call(this.OT={I:this},0);this.__proto__=C.ABT;this.V.H(BtT
);this.AP.H(AZO);this.AP.L(A.jb.Bc);this.SN.H(AZP);this.OT.H(BtU);this.J(this.AP
,0);this.J(this.SN,0);this.J(this.OT,0);this.V.S(A.aaL(A.fl.Bi));this.V.A2(A.aaL(
A.fl.Bi));this.SN.S(A.aaL(A.fl.Ak));this.SN.A2(A.aaL(A.fl.Bi));this.SN.Ct(A.aaL(
A.fl.Bi));this.OT.S(A.aaL(A.fl.Af));this.OT.A2(A.aaL(A.fl.Bi));this.OT.Ct(A.aaL(
A.fl.Bi));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();
this.SN._Done();this.OT._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AP._ReInit();this.SN._ReInit();this.OT._ReInit();this.V.
S(A.aaL(A.fl.Bi));this.V.A2(A.aaL(A.fl.Bi));this.SN.S(A.aaL(A.fl.Ak));this.SN.A2(
A.aaL(A.fl.Bi));this.SN.Ct(A.aaL(A.fl.Bi));this.OT.S(A.aaL(A.fl.Af));this.OT.A2(
A.aaL(A.fl.Bi));this.OT.Ct(A.aaL(A.fl.Bi));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListNaisIdAnimalIdItem"};C.APj={Q:null,Init:function(aArg){var
B;this.AAO(this);this.As([B=A._GetAutoObject(A.Device.Device).Ao,B.Fh,B.Fl]);},AEx:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fd();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DN(26,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
N3(FilterCriterion);var AiV=this.Av6();if((AiV.length>0)&&(AiV!==US)){FilterCriterion=
A._NewObject(A.Device.UInt64PartialFilterCriterion,0);FilterCriterion.Initialize(
26,4,AiV,0,6,false);Filter.CW(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeN(false);},AAO:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fd(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DN(26,4))?B:null);if(!!FilterCriterion)Filter.N3(FilterCriterion);(F=this.Q,F[2].
call(F[0],Filter));}},As:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([
this,this.C3],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C3],E,0);if(!!E)A.pe([this
,this.C3],this);},C3:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.
AW.ASQ(A.jV);return;}var BbU=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DN(26,4))?B:null);if(!BbU){this.AW.ASQ(US);this.AW.
AeN(true);}else this.AW.ASQ(BbU.A5);},_Init:function(aArg){C.AjL._Init.call(this
,aArg);this.__proto__=C.APj;this.AW.Awz(0);this.AW.Bmz(true);this.AW.Dh=[this,this.
AEx];this.Init(aArg);},_Mark:function(D){var B;C.AjL._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};
C._Init=function(){C.AMs.__proto__=A.Core.Root;C.AB.__proto__=C.Aa9;C.Wy.__proto__=
A.Core.O;C.Ow.__proto__=A.Core.O;C.Zp.__proto__=A.acl.Ge;C.Eh.__proto__=A.Core.O;
C.XU.__proto__=C.AB;C.AUB.__proto__=C.AB;C.Avm.__proto__=C.AB;C.Q6.__proto__=C.AB;
C.Fg.__proto__=C.Ha;C.Ay.__proto__=A.Core.O;C.Cv.__proto__=C.AB;C.AqM.__proto__=
C.BS;C.BS.__proto__=A.Core.O;C.N.__proto__=A.Core.O;C.AC4.__proto__=C.AmP;C.AGJ.
__proto__=C.DP;C.Cm.__proto__=C.OS;C.Dp.__proto__=C.Ee;C.I5.__proto__=C.Dp;C.BZ.
__proto__=C.Dp;C.SI.__proto__=C.Dp;C.OG.__proto__=C.CQ;C.Q$.__proto__=C.AC;C.AUQ.
__proto__=C.Ba;C.FY.__proto__=A.Core.O;C.Ba.__proto__=C.Cm;C.GS.__proto__=C.AB;C.
ABS.__proto__=C.Ba;C.AdX.__proto__=C.AB;C.Mi.__proto__=C.Ow;C.AUL.__proto__=C.AB;
C.AqL.__proto__=C.AC4;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUr.__proto__=C.Acg;C.Ew.__proto__=A.Core.O;C.Rating.__proto__=
A.Core.O;C.Asc.__proto__=A.Core.O;C.AGv.__proto__=C.Dp;C.CG.__proto__=A.Core.O;C.
AjK.__proto__=C.Ym;C.Ami.__proto__=C.Q_;C.Ahm.__proto__=A.Core.O;C.Eg.__proto__=
C.AB;C.ATC.__proto__=C.AB;C.Ml.__proto__=C.Cm;C.Am$.__proto__=C.Cm;C.OverlayMenu.
__proto__=C.Aa9;C.APz.__proto__=C.OverlayMenu;C.GD.__proto__=A.Core.O;C.Aa9.__proto__=
A.Core.O;C.AUw.__proto__=A.acl.Ad$;C.AmP.__proto__=C.BS;C.AC5.__proto__=C.AmP;C.
Ke.__proto__=C.AC;C.AUt.__proto__=C.Dp;C.AF6.__proto__=C.AB;C.HW.__proto__=C.AB;
C.Wh.__proto__=C.Arc;C.IE.__proto__=C.AC5;C.IW.__proto__=C.AB;C.AL2.__proto__=C.
AF6;C.ALY.__proto__=C.GS;C.ANg.__proto__=C.GS;C.Aed.__proto__=C.Cm;C.Qw.__proto__=
C.Aed;C.APm.__proto__=C.BS;C.AjL.__proto__=C.BS;C.DB.__proto__=C.E2;C.AW.__proto__=
A.Core.O;C.FZ.__proto__=C.AC;C.Afb.__proto__=C.BZ;C.ATU.__proto__=C.AB;C.AbJ.__proto__=
C.Cm;C.T8.__proto__=C.Cm;C.ANs.__proto__=C.Cv;C.AUS.__proto__=C.Cv;C.ANG.__proto__=
C.Cv;C.AT6.__proto__=C.Cv;C.WO.__proto__=A.Core.O;C.QP.__proto__=C.Fg;C.CT.__proto__=
A.Core.O;C.T4.__proto__=C.AB;C.AVo.__proto__=C.GS;C.AL3.__proto__=C.AxM;C.AU$.__proto__=
C.Cv;C.AeC.__proto__=C.AC;C.AxM.__proto__=C.AB;C.AVx.__proto__=C.Cv;C.AUs.__proto__=
C.Acg;C.ABn.__proto__=A.Graphics.Hu;C.Aja.__proto__=C.AB;C.ARk.__proto__=A.Core.
O;C.Fk.__proto__=C.OverlayMenu;C.XF.__proto__=C.BZ;C.Ajb.__proto__=C.Cm;C.ALI.__proto__=
C.Fk;C.CQ.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.ALO.__proto__=C.Vl;C.ALP.
__proto__=C.Fk;C.R$.__proto__=C.T8;C.AMx.__proto__=C.Vl;C.V$.__proto__=C.Fg;C.Vj.
__proto__=A.Core.O;C.Kq.__proto__=A.Core.O;C.ARI.__proto__=C.HW;C.ATX.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.CQ;C.ANh.__proto__=C.Ami;C.Ha.__proto__=A.
Core.O;C.AVq.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.CQ;C.AaR.
__proto__=C.FZ;C.AxE.__proto__=C.ABn;C.ATx.__proto__=C.OverlayMenu;C.AOo.__proto__=
A.Core.O;C.N0.__proto__=A.Core.O;C.ATy.__proto__=A.Core.O;C.AUv.__proto__=A.acl.
Ad$;C.AkJ.__proto__=C.I5;C.Aml.__proto__=C.OverlayMenu;C.ABV.__proto__=C.Ba;C.Yn.
__proto__=C.AjL;C.Aqu.__proto__=C.HW;C.Acf.__proto__=C.Dp;C.WeightRecordingScope.
__proto__=C.AC;C.Auw.__proto__=C.AB;C.AUu.__proto__=C.I5;C.AL0.__proto__=C.AB;C.
Arc.__proto__=C.HW;C.AG5.__proto__=A.Core.O;C.AVt.__proto__=A.Core.O;C.Ee.__proto__=
C.Cm;C.AeE.__proto__=C.Ee;C.AvP.__proto__=C.AeE;C.SetTransponderScreen.__proto__=
C.Q6;C.ADb.__proto__=C.Ew;C.AG9.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Me.__proto__=C.Q6;C.ALG.__proto__=C.Me;C.ManualActionScanScreen.__proto__=C.Me;
C.ALH.__proto__=A.Core.O;C.APq.__proto__=C.Db;C.AC$.__proto__=C.Db;C.TR.__proto__=
C.Db;C.APs.__proto__=C.Db;C.AMX.__proto__=C.Ba;C.M1.__proto__=C.Ba;C.AMV.__proto__=
C.Ba;C.Jk.__proto__=A.Core.O;C.AMU.__proto__=C.Ba;C.AmO.__proto__=C.TB;C.AFW.__proto__=
C.Aw_;C.Akx.__proto__=C.Aw_;C.Zo.__proto__=C.Akx;C.ANo.__proto__=C.OS;C.OS.__proto__=
C.Ha;C.APv.__proto__=C.Ew;C.DS.__proto__=A.Core.O;C.AMR.__proto__=C.Ajt;C.AC7.__proto__=
C.TS;C.Kd.__proto__=A.Core.O;C.Amw.__proto__=C.Ml;C.AON.__proto__=C.Ki;C.AutoRegistrationMode.
__proto__=C.AC;C.APw.__proto__=C.Ew;C.Tv.__proto__=C.AB;C.D7.__proto__=A.Core.O;
C.AMc.__proto__=C.RS;C.AMq.__proto__=C.AaN;C.AMl.__proto__=C.AaN;C.ATW.__proto__=
C.Ba;C.APu.__proto__=C.Ew;C.AMf.__proto__=C.AaN;C.IA.__proto__=C.IV;C.RM.__proto__=
C.Fr;C.RQ.__proto__=C.Fr;C.Tu.__proto__=C.JD;C.Qv.__proto__=C.Fr;C.Tt.__proto__=
C.JD;C.ALZ.__proto__=C.Aja;C.GC.__proto__=C.Aja;C.AQK.__proto__=C.Cv;C.AaN.__proto__=
C.D7;C.JE.__proto__=C.CQ;C.ARg.__proto__=C.Cv;C.AMa.__proto__=C.K9;C.AMb.__proto__=
C.D7;C.AL_.__proto__=C.K9;C.AL$.__proto__=C.K9;C.WA.__proto__=C.Ee;C.AUp.__proto__=
C.WA;C.RR.__proto__=C.Fr;C.APl.__proto__=C.IE;C.ANi.__proto__=C.AB;C.AM1.__proto__=
C.AdX;C.ALX.__proto__=C.IW;C.AVn.__proto__=C.IW;C.ANf.__proto__=C.GC;C.AVm.__proto__=
C.GC;C.ALW.__proto__=C.GC;C.AOP.__proto__=C.Ki;C.APn.__proto__=C.Ki;C.APr.__proto__=
C.TS;C.AMW.__proto__=C.Ajt;C.TS.__proto__=C.Db;C.Aqh.__proto__=A.acv.AB5;C.Ajt.__proto__=
C.Ba;C.DP.__proto__=A.Core.O;C.AMI.__proto__=C.DP;C.OX.__proto__=C.DP;C.AqJ.__proto__=
A.Core.O;C.AMh.__proto__=C.FY;C.AT0.__proto__=A.Core.O;C.K9.__proto__=C.D7;C.ANp.
__proto__=C.Cv;C.AuV.__proto__=C.Cm;C.AC1.__proto__=C.BS;C.AC2.__proto__=C.BS;C.
Fr.__proto__=C.JD;C.AOs.__proto__=C.GS;C.AOr.__proto__=C.IW;C.AOq.__proto__=C.GC;
C.AO3.__proto__=C.Ki;C.AC9.__proto__=C.Db;C.ABR.__proto__=C.Ba;C.ATV.__proto__=C.
Ahm;C.FactoryResetScope.__proto__=C.CQ;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;
C.ARU.__proto__=C.RG;C.ART.__proto__=C.IW;C.ARS.__proto__=C.GC;C.AC3.__proto__=C.
Ki;C.ABy.__proto__=C.FZ;C.ALM.__proto__=C.Fk;C.AL1.__proto__=C.Auw;C.NewAnimalSetTransponderScreen.
__proto__=C.Ash;C.C6.__proto__=C.AC;C.OW.__proto__=A.Core.O;C.RN.__proto__=C.Fr;
C.RO.__proto__=C.Fr;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARr.
__proto__=C.OverlayMenu;C.VD.__proto__=C.T8;C.AD2.__proto__=C.Cm;C.AnimalSingleInfoScreen.
__proto__=C.Tv;C.AnimalMultiInfoScreen.__proto__=C.Tv;C.AMe.__proto__=C.OverlayMenu;
C.MultiInfoActionsScreen.__proto__=C.GC;C.I1.__proto__=A.Core.O;C.ALL.__proto__=
C.GS;C.ALK.__proto__=C.IW;C.ALJ.__proto__=C.GC;C.APk.__proto__=C.IE;C.Asr.__proto__=
C.OW;C.AqX.__proto__=C.OW;C.AuR.__proto__=C.AC;C.AL8.__proto__=C.AC;C.AGu.__proto__=
C.Ee;C.GX.__proto__=A.Core.O;C.AQN.__proto__=C.HG;C.AVe.__proto__=C.XU;C.ARE.__proto__=
C.Wh;C.ADA.__proto__=C.Lf;C.HG.__proto__=C.GX;C.Lf.__proto__=C.GX;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvG.__proto__=C.HG;C.AUn.__proto__=C.BZ;C.NewAnimalsSetTransponderScreen.
__proto__=C.Ash;C.ReasonOfLeaving.__proto__=C.AC;C.OP.__proto__=C.BZ;C.AeH.__proto__=
C.Ei;C.ARx.__proto__=C.Ei;C.ARw.__proto__=C.Ei;C.Ei.__proto__=A.Core.O;C.Q7.__proto__=
C.Ee;C.AQO.__proto__=C.Lf;C.AvF.__proto__=A.Core.O;C.E2.__proto__=A.Core.O;C.Ft.
__proto__=C.AB;C.AN1.__proto__=C.AB;C.AN4.__proto__=C.Ft;C.AN5.__proto__=C.Ft;C.
Aqx.__proto__=C.Ft;C.Abj.__proto__=C.AjK;C.Ki.__proto__=C.AjK;C.Avk.__proto__=C.
Abj;C.AO1.__proto__=C.Abj;C.AO0.__proto__=C.Abj;C.AOZ.__proto__=C.BS;C.Aek.__proto__=
C.Ew;C.AmE.__proto__=C.Ba;C.Aji.__proto__=C.IA;C.ACv.__proto__=A.Core.O;C.AkG.__proto__=
A.Core.O;C.Q_.__proto__=C.AB;C.AUR.__proto__=C.Q_;C.AO2.__proto__=C.BS;C.Db.__proto__=
C.Ew;C.KM.__proto__=C.BS;C.AOV.__proto__=C.KM;C.AOX.__proto__=C.KM;C.Yh.__proto__=
C.AmE;C.Agk.__proto__=C.Ha;C.ANO.__proto__=C.GS;C.ANN.__proto__=C.IW;C.ANM.__proto__=
C.GC;C.AOY.__proto__=C.Ki;C.Abe.__proto__=C.Acf;C.AjB.__proto__=C.Qw;C.ABL.__proto__=
C.Qw;C.APp.__proto__=C.Db;C.AMT.__proto__=C.Ba;C.RP.__proto__=C.Fr;C.AL9.__proto__=
C.Fr;C.ANE.__proto__=C.Eg;C.ANF.__proto__=C.Eg;C.AOW.__proto__=C.KM;C.NV.__proto__=
C.AbJ;C.ANA.__proto__=C.Eg;C.AOR.__proto__=C.KM;C.PK.__proto__=C.Cm;C.Sa.__proto__=
C.AB;C.AN2.__proto__=C.Sa;C.AN3.__proto__=C.Sa;C.AN6.__proto__=C.Aqx;C.ANZ.__proto__=
C.Ft;C.AaM.__proto__=C.IA;C.Pi.__proto__=C.IA;C.AMj.__proto__=C.Aml;C.ARe.__proto__=
C.T4;C.ARd.__proto__=C.T4;C.ARP.__proto__=C.RG;C.ARO.__proto__=C.IW;C.ARN.__proto__=
C.GC;C.APe.__proto__=C.Ki;C.Q3.__proto__=C.GS;C.AT8.__proto__=C.IW;C.AT7.__proto__=
C.GC;C.Aeh.__proto__=C.Ym;C.ABQ.__proto__=C.Ba;C.AC8.__proto__=C.Db;C.APg.__proto__=
C.BS;C.AaP.__proto__=C.NB;C.XN.__proto__=C.NB;C.RS.__proto__=C.D7;C.XO.__proto__=
C.RS;C.XL.__proto__=C.Iz;C.AaK.__proto__=C.Iz;C.XK.__proto__=C.Iz;C.AaJ.__proto__=
C.Iz;C.AMg.__proto__=C.AB;C.Iz.__proto__=C.IV;C.IV.__proto__=C.Ha;C.NB.__proto__=
C.Fr;C.Aw9.__proto__=C.Zo;C.ANn.__proto__=C.Amw;C.Aw$.__proto__=C.Zo;C.ATK.__proto__=
C.Cv;C.ATI.__proto__=C.Ei;C.AQL.__proto__=C.Lf;C.ATJ.__proto__=C.Ei;C.NewMenu.__proto__=
C.AB;C.ARF.__proto__=C.HW;C.AMi.__proto__=C.Aml;C.AMy.__proto__=C.Vl;C.JD.__proto__=
C.IV;C.APi.__proto__=C.Yn;C.Abd.__proto__=C.CQ;C.APt.__proto__=C.Ew;C.MotherScanScreen.
__proto__=C.Me;C.APh.__proto__=C.AqL;C.I9.__proto__=A.Core.O;C.APd.__proto__=C.BS;
C.SetSaveNaisIdScreen.__proto__=C.Q6;C.ANP.__proto__=C.Aqu;C.UJ.__proto__=C.CQ;C.
UK.__proto__=C.UJ;C.AcB.__proto__=C.UJ;C.AdI.__proto__=C.AC;C.AGt.__proto__=C.Ee;
C.AND.__proto__=C.Eg;C.AOU.__proto__=C.KM;C.ANB.__proto__=C.Eg;C.AOS.__proto__=C.
KM;C.AmR.__proto__=C.TR;C.APo.__proto__=C.TR;C.Amq.__proto__=C.M1;C.AMS.__proto__=
C.M1;C.ARy.__proto__=C.AeH;C.Ym.__proto__=C.BS;C.Acg.__proto__=C.BZ;C.FB.__proto__=
C.AC;C.AMm.__proto__=C.FB;C.AMn.__proto__=C.FB;C.AL5.__proto__=C.IW;C.TB.__proto__=
C.BZ;C.ARH.__proto__=C.AB;C.Ash.__proto__=C.SetTransponderScreen;C.ADB.__proto__=
C.HG;C.Asi.__proto__=C.OP;C.Axk.__proto__=C.OP;C.Acj.__proto__=C.CQ;C.AVD.__proto__=
C.RG;C.AVC.__proto__=C.IW;C.AVB.__proto__=C.GC;C.AQP.__proto__=A.Core.O;C.AQM.__proto__=
C.HG;C.ACA.__proto__=C.Abe;C.LV.__proto__=A.Core.O;C.AT5.__proto__=C.Cv;C.AT4.__proto__=
C.Cv;C.AU9.__proto__=C.Cv;C.Afg.__proto__=C.AC;C.I6.__proto__=A.acn.I6;C.AUX.__proto__=
C.AB;C.ATN.__proto__=C.Q3;C.AC_.__proto__=C.Db;C.AMG.__proto__=C.Q3;C.AOO.__proto__=
C.Aeh;C.APf.__proto__=C.Aeh;C.ABU.__proto__=C.Ba;C.AUm.__proto__=C.SI;C.AUq.__proto__=
C.Q7;C.APc.__proto__=C.BS;C.ARp.__proto__=C.Fk;C.ARo.__proto__=C.Fk;C.ARn.__proto__=
C.Fk;C.ALQ.__proto__=C.Amj;C.ARt.__proto__=C.T8;C.ATM.__proto__=C.OverlayMenu;C.
VE.__proto__=C.AC;C.AMF.__proto__=C.OverlayMenu;C.ADV.__proto__=C.AC;C.AUW.__proto__=
C.OS;C.AG_.__proto__=C.CQ;C.AUo.__proto__=C.BZ;C.YZ.__proto__=C.CQ;C.ANz.__proto__=
C.Eg;C.AOQ.__proto__=C.KM;C.ANC.__proto__=C.Eg;C.AOT.__proto__=C.KM;C.RG.__proto__=
C.GS;C.AvM.__proto__=C.Vl;C.ADa.__proto__=C.Db;C.ABT.__proto__=C.Ba;C.APj.__proto__=
C.AjL;};C._ReInit=function(){var B;if((B=C.Axo._this))B._ReInit(),C.Axo._ReInit.
call(B);if((B=C.Axp._this))B._ReInit(),C.Axp._ReInit.call(B);if((B=C.A1._this))B.
_ReInit(),C.A1._ReInit.call(B);if((B=C.Pg._this))B._ReInit(),C.Pg._ReInit.call(B
);if((B=C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Ae9.
_this))B._ReInit(),C.Ae9._ReInit.call(B);if((B=C.BN._this))B._ReInit(),C.BN._ReInit.
call(B);if((B=C.Wu._this))B._ReInit(),C.Wu._ReInit.call(B);if((B=C.Asj._this))B.
_ReInit(),C.Asj._ReInit.call(B);if((B=C.AnM._this))B._ReInit(),C.AnM._ReInit.call(
B);if((B=C.DL._this))B._ReInit(),C.DL._ReInit.call(B);if((B=C.AuE._this))B._ReInit(
),C.AuE._ReInit.call(B);if((B=C.Amf._this))B._ReInit(),C.Amf._ReInit.call(B);if((
B=C.AvU._this))B._ReInit(),C.AvU._ReInit.call(B);if((B=C.AvV._this))B._ReInit(),
C.AvV._ReInit.call(B);if((B=C.AxO._this))B._ReInit(),C.AxO._ReInit.call(B);};C.DF=
function(D){var B;if((B=C.Axo._this)&&(B._cycle!=D))B._Done(C.Axo._this=null);if((
B=C.Axp._this)&&(B._cycle!=D))B._Done(C.Axp._this=null);if((B=C.A1._this)&&(B._cycle
!=D))B._Done(C.A1._this=null);if((B=C.Pg._this)&&(B._cycle!=D))B._Done(C.Pg._this=
null);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null
);if((B=C.Ae9._this)&&(B._cycle!=D))B._Done(C.Ae9._this=null);if((B=C.BN._this)&&(
B._cycle!=D))B._Done(C.BN._this=null);if((B=C.Wu._this)&&(B._cycle!=D))B._Done(C.
Wu._this=null);if((B=C.Asj._this)&&(B._cycle!=D))B._Done(C.Asj._this=null);if((B=
C.AnM._this)&&(B._cycle!=D))B._Done(C.AnM._this=null);if((B=C.DL._this)&&(B._cycle
!=D))B._Done(C.DL._this=null);if((B=C.AuE._this)&&(B._cycle!=D))B._Done(C.AuE._this=
null);if((B=C.Amf._this)&&(B._cycle!=D))B._Done(C.Amf._this=null);if((B=C.AvU._this
)&&(B._cycle!=D))B._Done(C.AvU._this=null);if((B=C.AvV._this)&&(B._cycle!=D))B._Done(
C.AvV._this=null);if((B=C.AxO._this)&&(B._cycle!=D))B._Done(C.AxO._this=null);};
return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */