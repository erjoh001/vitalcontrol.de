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
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.kR)throw new Error("The unit file 'Application.js' included twice!");
index.kR=(function(){var A=index;var C={};
var Ce=[0,0,240,320];var BD=[0,0,240,40];var E7=[0,0,20,30];var Hr=[6,21,14,25];var
IW=[6,15,14,19];var It=[6,9,14,13];var O6=[209,7,229,37];var P_=[0,40,240,320];var
P$=[0,228,240,298];var CR=" ";var Ff=[0,40,240,280];var L5=[0,40,232,280];var Qa=[
0,40,116,160];var J7=[114,40,230,160];var Od=[0,160,116,280];var Qb=[116,160,232
,280];var ML=[0,280,116,400];var S$=[116,280,232,400];var UW=[0,400,116,520];var
Z6=[116,400,232,520];var W9=[-1,520,115,640];var Iu=[232,40,240,280];var UX=[5,40
,235,120];var Z7=[120,140,210,230];var UY=[20,140,110,230];var Z8=[0,0,116,120];
var W_=[0,0,120,120];var Z9=[0,0,116,45];var Z_=[0,0,8,200];var UZ=[0,0,8,20];var
W$=[30,0,210,40];var O7=[0,0,40,40];var Z$=[7,8,200,40];var Oe=[0,0,200,40];var Rn=[
6,1];var Xa="ERROR: Invalid value for ItemHighlighting";var Xb=[10,10,40,30];var
Ta=[0,0,120,40];var Xc=[60,0,180,40];var Aaa=[120,0,240,40];var Xd=[0,0,100,40];
var Xe=[83,0,157,40];var Tb=[140,0,240,40];var Tc=[0,0,20,40];var Td=[220,0,240,
40];var Aab=[0,0,300,30];var Te=[0,30,300,60];var Aac=[0,60,300,90];var AfB=[0,90
,300,120];var Aad=[0,100,300,110];var Xf=[0,50,300,60];var Aae=[0,30,300,40];var
Xg="*";var AhX=[40,40];var K1=[0,0,240,80];var AcN=[0,0,240,50];var Ly="Cap";var
AhY=[0,40,40,80];var Aof=[200,40,240,80];var Of=[30,40,210,80];var Xh="--";var Aaf=
"%d";var AfC="%m";var AhZ="%Y";var AcO=" (";var U0=[0,0,232,80];var Aog="Date";var
Aoh=[48,40,88,78];var Aoi=[39,40,79,80];var Aoj=[80,44,87,77];var Alc=".";var AsZ=[
88,44,120,77];var Ax8=[120,44,127,77];var Ax9=[127,44,191,77];var O8=[0,0,80,40];
var Ro="Text";var Ax_=[430,102,430,102];var U1=[0,0,240,240];var As0=[232,0,240,
240];var Ax$=[0,10,240,240];var Aya="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ayb="Unhandled option";
var Aok=[0,80,240,280];var AfD="Unhandled animal list action";var Aol="Animal list content not handled.";
var IX=[0,40,240,80];var Aom="Set Selected";var As1=" %%";var Xi=[0,180,240,220];
var As2=[82,127,167,150];var As3="Group";var As4=[77,91,167,124];var Aon=[0,0,90
,33];var As5=[4,4,18,29];var Ald=[20,4,34,29];var Ayc=[36,4,50,29];var Ayd=[52,4
,66,29];var Aye=[68,4,82,29];var As6="ERROR: Unhandled Device::SyncState";var Ayf=
":\n";var O9="{1}";var Ayg="{2}";var AWc=[0,49,240,109];var AWd=[0,170,240,243];
var AWe=[0,110,240,170];var AWf=[20,243,220,268];var AHv=[30,8];var AHw="\u2265 ";
var AfE=[0,0,240,160];var Aoo=[0,0,0,0];var AWg=[0,0,240,66];var AHx=[10,0,76,66
];var Ale=[33,33];var AHy=[87,0,153,66];var AHz=[164,0,230,66];var AWh="No statistics available";
var AWi="in this environment.";var AHA=" fps";var AWj="CPU: - %%";var AcP=[0,0,240
,120];var AWk=[130,0,237,20];var AWl=[20,0,120,20];var AWm=[0,20,240,40];var AHB=[
40,20,100,40];var As7=[100,20,240,40];var AHC=[0,40,240,60];var AHD=[40,40,100,60
];var Ayh=[100,40,240,60];var AHE=[0,60,50,80];var Ayi=[100,60,240,80];var AWn=[
0,80,50,100];var AWo=[100,80,240,100];var AWp=[0,100,50,120];var AWq=[100,100,240
,120];var AHF=[5,5,15,15];var AWr="%H";var MM="%M";var Ayj="Time";var AWs=[79,40
,119,78];var AWt=[125,40,164,80];var AWu=[86,40,126,80];var AWv=":";var AWw=[75,
40,115,80];var AHG=[0,0,240,150];var AWx=[60,0,155,40];var Ayk=[30,0,65,40];var As8=[
60,0,100,40];var Ayl=[88,0,128,40];var AWy=[60,0,71,40];var AWz=[60,0,74,40];var
AHH=[90,0,123,40];var AWA=[120,0,161,40];var AHI=[120,0,165,40];var AHJ=[60,0,88
,40];var AHK=[60,0,95,40];var AWB="Did not expect iterator bigger than number of records";
var AHL=[20,0,240,20];var AWC=[0,38,240,40];var AWD=[0,0,8,4];var Qc=[0,0,240,280
];var Xj=[0,280,240,320];var AWE="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWF="]";var AWG="ERROR: Cannot find closing bracket \'}\' in text [";var AWH=
"] opened at index ";var AWI="#";var AWJ="ERROR: Invalid parameter: {";var AWK="}";
var Ah0=[20,20];var AHM=[0,12];var AWL="ERROR: Not expected Application::FooterFocus, ";
var AWM="%M:%S";var AHN=[30,150,207,170];var AHO=[20,70,217,194];var Aym="Unhandled item.";
var Qd=[0,80,240,120];var AWN="Unhandled Overlay Menu ";var AWO="Invalid bootloader message: ";
var AWP="Unknown USBState: ";var As9="Invalid fader";var AWQ=[2,4,32,40];var AWR=[
29,4,80,40];var AWS=[120,4,200,40];var AWT=[80,0,114,40];var AWU="-1";var AWV="< ";
var As_=[0,0,232,40];var AWW=[22,40,180,80];var AWX=[2,40,22,80];var AWY=[23,40,
163,80];var AWZ=[210,40,230,80];var AW0=[164,40,210,80];var AW1=[169,43,205,77];
var AW2="ERROR: No outlet assigned";var AW3="Unhandled screen";var AW4="ERROR: Cannot cache null screen.";
var AW5="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHP="Untreated Rating Method type!";var Alf="Unhandled animal type";var AW6=[
5,60,235,140];var AW7=[0,130,240,196];var AW8=[49,240,229,280];var Ayn="Implement in derived classes!";
var Alg="Implement in derived class";var Ah1=[0,40,230,120];var Ayo=[0,120,230,200
];var Aop=[0,200,230,280];var Ah2=[0,280,230,360];var AW9=[0,360,230,440];var Ayp=[
230,40,238,280];var AHQ="WARNING: Unhandled filter field: ";var AfF="Should not happen.";
var AHR="Invalid Boolean item";var Aag=[0,120,240,160];var Alh=[0,160,240,200];var
Aoq=[0,200,240,240];var AW_=[1152,11,1392,51];var AW$=[1152,51,1392,91];var AXa=[
1152,91,1392,131];var AXb=[1152,131,1392,171];var AXc=[1152,171,1392,211];var As$=[
0,240,240,280];var AHS=[10,0,240,40];var AHT=[190,0,230,40];var AXd=[60,3,95,39];
var AXe=[95,4,200,40];var AXf=[3,3];var AXg=[6,6];var AXh=[59,5,197,35];var AXi=[
59,2,200,38];var AXj=[3,2,43,42];var AXk=[0,17,43,40];var AXl=[50,40];var AXm=[50
,0];var AXn="Illegal shifting direction";var Ayq=[0,0,160,30];var AHU=[0,0,25,30
];var AHV=[27,0,52,30];var AHW=[54,0,79,30];var AHX=[81,0,106,30];var AHY=[108,0
,133,30];var AHZ=[135,0,160,30];var AXo="Internal queue error";var AXp="ERROR: No corresponding Id ";
var AXq=" found.";var AXr="ERROR: Error in range test";var AXs=[120,67,210,157];
var AXt=[0,40,240,70];var AXu=[20,67,110,157];var Ayr=[0,160,240,280];var AH0=[20
,77,90,147];var AXv=[0,0,210,40];var AH1=[195,0,235,40];var Ah3=[0,40,232,120];var
U2=[0,120,232,200];var AXw=[0,40,232,200];var Aah=[0,200,232,280];var AXx=[0,320
,240,400];var AXy=[0,120,53,200];var Ali=[0,280,232,360];var AfG="%%";var AcQ=[0
,360,232,440];var Aor=[0,440,232,520];var AXz=[0,80,207,120];var O_=")";var AH2=
"/";var AH3=[5,0,88,30];var AXA=[88,0,240,30];var AH4="276000312345678";var AH5=[
5,30,100,60];var AH6=[100,30,240,60];var AXB="Manufacturer";var AXC="Country";var
AXD=[5,60,240,90];var AXE="Niedersachsen";var AXF=[5,90,145,120];var AXG=[140,90
,240,120];var AXH="Protocol";var AXI=[0,0,120,100];var AH7=[0,40,116,120];var AXJ=[
40,80,92,107];var AH8=[0,0,50,23];var AH9="ERROR: Unhandled Device::MeasureState";
var Ays=[0,120,240,280];var AXK=[178,159,248,203];var AXL=[10,145,170,225];var AXM=[
0,61,240,101];var AXN=[0,0,40,23];var AXO=[101,113,141,136];var AXP=[101,235,141
,258];var AXQ=[69,288,101,313];var AXR=[0,40,240,200];var Ata=[0,200,240,280];var
Atb=[0,280,240,360];var AH_="\u2264 ";var AXS=[0,80,94,160];var AXT=[94,80,184,160
];var AXU=[184,80,240,160];var AXV=[197,105,231,139];var AXW=[105,101,173,127];var
AH$=[7,101,75,127];var AXX=[94,125,184,151];var AXY=[2,125,92,151];var AXZ=[0,70
,240,101];var AX0=[0,106,240,280];var AX1=[30,40,240,70];var AX2=[0,40,30,70];var
AX3="\u278B";var AX4=[0,0,240,175];var AIa=[0,0,232,175];var AX5=[232,0,240,175];
var AX6="Text Here !";var AX7=[200,0,240,40];var AIb="1";var AIc="2";var AId="3";
var AIe="4";var Ayt=[0,360,232,400];var Ayu="ERROR: invalid item class.";var Ayv=[
10,220,250,260];var AX8=[185,0,225,40];var Atc="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AIf="ERROR: Received more actions than expected!";var AIg=", ";var AX9=
"ERROR: Cannot set action at position=";var AX_=". Current elements:";var AX$=", max elements:";
var AYa="17";var AYb=[0,0,58,58];var AYc=[0,0,60,60];var AYd=[30,0,58,20];var AYe=[
7,6,25,24];var AYf=[30,60,130,160];var AYg=[0,0,28,20];var AYh=[4,3,40,24];var AYi=[
0,0,42,27];var Ayw=[0,0,17,17];var AYj="Unknown direction of counting enum value: ";
var AYk="Unknown id generation method enum value: ";var Ayx="Invalid animal id generation method: ";
var Atd="Unhandled popup id";var U3="0";var Ate=";";var AYl=[0,400,230,480];var AYm=[
5,120,235,200];var AYn=[0,640,230,760];var AIh=[0,0,300,200];var AYo=[20,40,220,
80];var AIi=[20,80,220,280];var AYp=[140,0,188,40];var AYq="ERROR: Row containing birth weight could not be loaded";
var AYr=[0,440,230,520];var Atf="ID";var AYs=[40,40,198,70];var AYt="Extra info: ";
var AIj=" -";var AYu=[0,0,230,120];var AYv=[0,0,230,40];var AYw=[0,80,230,120];var
AYx="\xB0Brix";var AcR=[0,320,230,400];var AYy=[0,410,230,490];var AYz="ERROR: aNumberOfDays can not be < 0 ";
var AYA="{WEIGHTGAIN} ";var AYB="\xB1";var AIk="+";var AYC="{WEIGHTGAIN}";var AYD=
"{DAYS}";var AYE="ERROR: aString can not be null";var AYF=[166,70,240,114];var AYG=[
0,60,160,120];var AYH=[30,0,240,60];var AIl=[1,6,29,54];var AYI=[30,60,240,120];
var AYJ="Con";var AYK=[70,50,170,70];var AIm="Unhandled Device::NaisIdValidationResult: ";
var AIn="Unhandled PopupId";var AYL=[110,123,230,248];var AYM=[5,0,250,40];var AYN=[
102,0,186,40];var AYO=[153,0,240,40];var Rp="-";var Atg=[170,0,240,40];var AIo=[
220,0,320,30];var AIp=[200,20,300,50];var Aos=[180,0,180,40];var Aot=[170,0,170,
40];var Ayy="Untreated state";var AYP="ERROR: Animal id scanned in an unexpected state : ";
var AIq="ERROR: Null animal id scanned.";var AYQ=[40,40,235,100];var AYR=[120,100
,210,190];var AYS=[20,100,110,190];var AYT=[0,40,40,100];var AYU="\u278A";var AYV=
"Action untreated";var AYW="ERROR: No corresponding ";var AYX=" action found!";var
AYY="Unhandled action: ";var AYZ=[0,186,240,216];var AY0=[0,220,232,280];var AY1=[
5,190,235,270];var AY2=[232,60];var AY3=[0,2];var AY4=[58,58];var AY5="A";var AY6=[
56,0,156,40];var Aou=[156,0,240,40];var AIr=" 7 ";var AY7=[40,0,156,40];var AIs=
"/-1/-2";var AIt=[72,0,144,40];var AcS="\n";var AIu="(";var AY8=[72,0,156,40];var
AIv="%y/%m";var AY9=[70,0,240,40];var Ayz=[70,0,120,40];var AY_=[160,0,245,40];var
AY$="- ";var AyA=" - ";var AZa="{parc}{clr3}";var AZb="{clr0}/^{clr2}";var AZc="{clr0}/^{clr1}";
var AIw=[0,0,85,40];var Aov="?";var AIx=[0,0,120,140];var AZd=[0,0,116,40];var AIy=[
15,0,100,40];var AIz=[110,0,200,40];var Alj=[0,0,34,34];var AZe=[129,0,157,40];var
Aow=[0,0,25,25];var AZf="\u2611";var AIA="\u2610";var AIB=[5,0,72,40];var AZg=[150
,0,240,40];var AZh=[72,0,139,40];var AIC="Unvalid content class: ";var AZi=[0,320
,240,360];var AZj=[0,360,240,400];var AZk=[144,0,170,40];var AZl=[187,0,213,40];
var AZm=[207,10,233,50];var AZn=[247,20,273,60];var AZo=[140,0,150,100];var AZp=[
165,0,175,100];var AZq=[185,0,195,100];var AZr=[205,0,215,100];var AZs=[211,0,233
,40];var AZt=[189,0,211,40];var AID=[167,0,189,40];var AZu=[145,0,167,40];var AyB=[
5,0,240,40];var Aai=[10,0,10,40];var AZv="= \u2211 ";var AyC=[125,0,240,40];var AZw=[
130,0,170,40];var AZx="\xD8 ";var AZy=[100,10,116,36];var AZz=[117,10,133,36];var
AZA=[135,10,151,36];var AZB="Implement in derieved class";var Ath=[0,80,240,240];
var Ati=[0,120,232,160];var Atj=[0,160,232,200];var Atk=[0,200,232,240];var AyD=[
0,240,232,280];var Aox=[0,320,232,360];var AZC=[-61,360,232,400];var AZD=[0,400,
32,440];var AZE=[0,100];var AZF=[0,40,240,240];var AZG=[0,50000];var Aoy=[0,500];
var AZH=[0,0,240,105];var AZI=[0,105,240,210];var AZJ=[0,40,240,81];var AZK=[0,81
,240,122];var AZL=[0,122,240,163];var AZM=[0,163,240,205];var AZN=[0,205,240,240
];var AZO=[0,200];var AIE=[0,40,240,73];var Alk=[0,0,30,40];var AZP=[0,40,30,80];
var AyE=[60,40];var AyF=[60,0];var AZQ=[10,0,40,40];var AZR=[0,190,240,260];var AZS=[
0,130,240,190];var AIF=[40,40,200,130];var AZT=[90,230,170,253];var AZU=[80,190,
170,223];var AZV=[0,130,240,180];var AZW=[0,250,240,280];var AZX=[129,0,156,40];
var AZY=[72,0,100,40];var AZZ=[100,0,129,40];var AZ0=[78,8,103,33];var AIG=[0,0,
300,120];var AIH=[1,-1];var AZ1=[20,40,240,120];var AII=[20,0,240,40];var AZ2=[0
,118,240,120];var AZ3=[0,20,130,40];var AIJ=[130,20,240,40];var AZ4=[0,0,10,20];
var AIK="\u2191";var AZ5=[230,0,240,20];var Atl=[0,40,232,80];var AZ6=[0,80,232,
160];var AZ7=[0,160,230,240];var Atm=" p. p.";var AyG="Unknown animal type";var AyH=[
80,0,140,40];var AZ8=[50,0,172,40];var AZ9=[172,0,240,40];var AZ_=[0,90,240,92];
var AIL="Unhandled menu item";var AIM=[0,0,50,30];var All=[0,0,30,30];var AZ$="No AnimalActionTemperatureScreen found!";
var A0a="840003123456789";var A0b=[40,0,230,40];var A0c=[50,10,230,30];var AyI="No AnimalMultiInfoScreen found!";
var AIN=[0,0,25,40];var BaA="/^";var BaB="?/?";var Brj=[100,4,180,40];var Brk=[65
,0,99,40];var Brl=[165,0,200,40];var BaC=[0,0,60,40];var BaD="9999/^9999";var Brm=
"Invalid index: ";var Brn="Unknown AnimalIdGenerationMethod: ";var Bro="Invalid gender: ";
var Atn="Invalid input state: ";var Brp="Unhandled AnimalIdGenerationMethod";var
Brq=[42,35,67,75];var Brr=[5,35,39,75];var Brs=[70,40,228,70];var Brt="Invalid direction for setting focus";
var Ah4="Invalid index";var Bru="Unvalid direction";var Brv=[0,0,42,30];var BaE=[
22,0,42,30];var Brw=[20,0,40,30];var Brx=[0,0,158,30];var BaF=[32,0,62,30];var BaG=[
64,0,94,30];var BaH=[96,0,126,30];var Bry=[128,0,158,30];var Brz=" %% ";var BrA=[
0,70,240,220];var BrB=[0,237,240,307];var BaI="\n44 %% done";var BrC=[0,0,166,30
];var AIO=[0,0,12,30];var AyJ=[14,0,26,30];var A0d=[28,0,40,30];var A0e=[42,0,54
,30];var A0f=[56,0,68,30];var A0g=[70,0,82,30];var A0h=[84,0,96,30];var A0i=[98,
0,110,30];var BaJ=[112,0,124,30];var A0j=[126,0,138,30];var BrD=[140,0,152,30];var
BrE=[154,0,166,30];var BaK=[20,0,46,30];var BrF="\u2642";var BrG="{fnt3}\u2642{fnt1}";
var BrH="\u2640";var BrI="{fnt3}\u2640{fnt1}";var BrJ="{parc}";var BrK=[30,30,210
,80];var BrL="Implement in derieved class!";var BrM=[60,4,226,34];var BaL=[30,4,
58,34];var BaM=[4,0,27,40];var BrN=[116,4,228,34];var BrO=[60,4,86,34];var BrP=[
88,4,114,34];var Aoz="Implement in derived class!";var BaN="Implement in derived class.";
var BrQ="Invalid nais id view: ";var BrR=[0,35,240,75];var BrS=[0,0,110,30];var BrT=[
0,0,26,30];var BrU="100";var A0k="\n\n";var BrV=[240,240];var BrW=[0,240];var BrX=
"Unknown rated attribute: ";var BrY=[120,80,240,280];var BrZ=[0,80,120,280];var AIP=
" %% (";var AyK=" \xB1 ";var AyL=" (n = ";var A0l=[0,80,232,120];var Br0=[0,242,
232,282];var A0m=[0,280,232,320];var Br1=[35,0,200,40];var Br2=[1,0,31,40];var Br3=[
32,40];var Br4=[32,0];var Br5=[3,0,83,40];var BaO=[180,0,240,40];var Br6=[120,0,
180,40];var Br7=[65,0,125,40];var Br8=[0,0,120,200];var Br9=[0,40,120,150];var BaP=[
15,160,60,190];var BaQ=[60,160,105,190];var Br_=[0,65,240,135];var Br$=[10,112,170
,192];var Bsa=[178,129,248,173];var Bsb=[0,40,240,110];var Bsc=[10,98,170,178];var
Bsd=[178,112,248,156];var Bse=[85,190,160,265];var Bsf=[89,194,155,260];var Bsg=[
26,190,111,250];var Bsh=[125,181,225,211];var Bsi=[100,220,183,250];var Bsj="38.7";
var Bsk=[180,220,225,250];var Bsl="\xB0C";var Bsm=[0,99,240,178];var Bsn=[100,280
,140,320];var Bso=[0,26,240,105];var BaR=[30,40];var BaS=[30,0];var Bsp=[149,0,200
,40];var Bsq=[145,40];var Bsr=[145,0];var Bss=[38,0,88,40];var A0n=[0,0,35,40];var
Bst=[0,0,50,40];var Bsu=[40,0,200,40];var Bsv=[95,0,145,40];var Bsw=[65,5,223,35
];var A0o=[0,0,15,40];var Bsx=[72,0,140,40];var BaT="\n(";var Bsy="%y/%m/%d";var
Bsz="%y ";var BsA=" %m ";var BsB=" %d ";var BsC="20";var BsD=[225,0,240,40];var BsE=[
0,400,232,440];var BsF=[0,440,232,480];var BsG=[0,480,232,520];var BsH=[0,520,232
,560];var BsI=[0,560,232,600];var BsJ=[0,598,232,638];var BsK=[5,0,215,40];var BsL=[
215,8,240,33];var BsM="Implement in dervied class.";var BsN="ERROR: Unhandled temperature unit: ";
var AIQ="ERROR: Unhandled mass unit: ";var BsO=[-1,160,115,280];var BsP=[114,160
,230,280];var A0p=[116,40,232,160];var AyM="Unknown weight class index: ";var BsQ=
"< 35";var BsR="35 - 40";var BsS="40 - 45";var BsT="45 - 50";var BsU="\u2265 50";
var BsV="< 80";var BsW="80 - 90";var BsX="90 - 100";var BsY="100 - 110";var BsZ=
"\u2265 110";var BaU="Unknown mass unit";var Bs0=[143,0,193,40];var BaV=[192,0,240
,40];var Bs1=[44,28,44,28];var Bs2="0 %%";var Bs3=[-1,40,115,160];var Bs4=[117,40
,233,160];var Bs5=[1,160,117,280];var Bs6=[114,158,230,278];var Bs7=[1,280,117,400
];var Bs8=[30,0,155,40];var BaW="\u2620";var A0q=[380,150,380,190];var BaX=[105,
0,155,50];var A0r=[190,1,240,41];var Bs9=[72,0,108,40];var Bs_=[108,0,180,40];var
Bs$=[60,0,94,40];var Bta=[94,0,200,40];var Btb="Scroll direction not supported.";
var Btc=[44,0,207,40];var Btd=[207,0,240,40];var Bte="99";var Btf="Unknown birth type";
var Btg=[44,0,189,40];var Bth=[5,0,44,40];var Bti=[44,0,240,40];var Btj=[240,0,240
,40];var Btk="\u25C9";var BaY="\u25CB";var Btl=[75,4,215,34];var Btm=[47,4,73,34
];var BaZ=[17,4,45,34];var Btn=[0,0,138,30];var Bto=[47,4,215,34];var A0s="Unhandled MotherSelectionFilterMode: ";
var Btp="Read only!";var Btq="actions array too small to hold all actions";var Btr=[
120,40];var Bts=[120,0];var Btt=[5,0,115,40];var Btu=[0,0,205,40];var Btv=[59,4,
170,34];var Btw=[59,1,173,37];var Btx=[175,1,205,37];var Bty=[0,0,37,40];var Btz=[
115,98,205,188];var BtA=[0,40,235,100];var BtB=[2,200,240,280];var BtC=" 01234";
var BtD=[0,0];var BtE=[33,63];var BtF=[25,56];var BtG="Unknown transponder image type: ";
var AIR=[0,0,82,82];var BtH=[0,0,81,26];var BtI=[105,120,195,210];var BtJ=[10,140
,100,230];var Ba0="Unhandled EartagNrAssignmentMode: ";var BtK="Unhandled Gender";
var BtL=[10,35,35,75];var BtM=[44,40,202,70];var BtN=[204,35,232,75];var BtO="Unvalid FatoryResetScope";
var Ba1=[0,120,240,200];var BtP=[144,0,192,40];var BtQ=[144,0,240,40];var BtR=[195
,0,245,50];var BtS=[120,0,120,40];var BtT=[140,0,240,30];var BtU=[30,0,232,40];var
BtV=[60,0,160,40];var BtW=[160,0,200,40];var BtX=[150,17,200,40];var BtY=[155,40
];var BtZ=[155,0];var Bt0=[146,80,240,160];var Bt1=[56,80,146,160];var Bt2=[0,80
,56,160];var Bt3=[13,107,47,141];var Bt4=[74,109,104,139];var Bt5=[50,100,130,150
];var Bt6=[55,112,145,140];var Bt7=[146,112,236,140];var Bt8=[150,86,223,110];var
AIS=[0,40,240,120];var Bt9="Menu item for animal table field not found";var Ba2=[
0,360,240,440];var Bt_=[0,440,240,520];var Bt$=[5,40,235,104];var Bua=[120,108,226
,218];var Bub=[20,120,110,210];var Buc=[5,223,235,280];var Bud=[0,0,64,30];var Bue=[
44,0,64,30];var Buf=[185,5,225,35];var Bug=[170,5,234,35];var Buh="Unhandled number of digits";
var Bui=[0,0,126,30];var Buj=[22,5,149,35];var Buk=[149,0,232,40];var Ba3=[5,20];
var Bul=[5,0];var Bum="Unhandled AnimalIdAutoGenerationMethod: ";var Bun=[4,440,
236,520];var Buo="Unhandled TransponderAssignmentIdChangeMethod: ";var Bup="\n";
var Buq="%";var Bur=[0,0,160,120];var Bus=[2,2,157,117];var But=[50,70];var Buu=[
50,50];var Buv=[0,0,168,40];var Buw=[168,0,240,40];var Bux=[0,47,232,77];var Buy=[
65,0,101,40];var Buz=[135,0,175,40];var BuA=[85,17,135,40];var BuB=[125,17,175,40
];var BuC=[40,0];var Ba4=[0,40,230,280];var BuD="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BuE="ERROR: Received more animal table fields than expected!";
var BuF=[0,80,240,130];var BuG="Unhandled Device::MassDeregistrationCriterion: ";
var BuH=[0,80,240,200];var Ba5="Unhandled BackupError: ";var BuI="Unhandled PopupId: ";
var BuJ=[203,0,240,40];var BuK=[168,0,203,40];var BuL=[35,0,152,40];var BuM=[0,0
,84,40];var BuN=[84,0,167,40];var BuO="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMQ={Device:null,A6n:null,GK:null,Init:function(aArg){},DriveCursorHitting:function(
Tg,BF,Fh){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GK._Init.call(this.
GK={I:this},0);this.__proto__=C.AMQ;this.H(Ce);this.J(this.GK,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A6n=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var J8=
this._variants();if(J8){this.K={};J8._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GK._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GK.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A6n)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GK)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A5v._variants();
},K:null,_className:"Application::Application"};C.Asz=[240,320];C.AB={Background:
null,Ek:null,ADi:null,An8:0,Init:function(aArg){A.pe([this,this.A01],this);A.pe([
this,this.Bfh],this);},LQ:function(G){},A01:function(s){this.LQ(s);},CC:function(
G){},AIU:function(s){this.CC(s);},E4:function(G){},AyN:function(s){this.E4(s);},
Dr:function(E){if(this.ADi===E)return;this.ADi=E;A.pe([this,this.Bfh],this);},Bfh:
function(G){var B;if(!!this.ADi)this.Ek.Ab3((C.BR.isPrototypeOf(B=A._NewObject(this.
ADi,0))?B:null));else this.Ek.Ab3(null);},_Init:function(aArg){C.Abj._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ek._Init.call(this.
Ek={I:this},0);this.__proto__=C.AB;this.Background.A0(0x3F);this.Background.H(Ce
);this.Background.L(A.jb.CU);this.Ek.H(BD);this.Ek.Ar(false);this.J(this.Background
,-1);this.J(this.Ek,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abj;this.
Background._Done();this.Ek._Done();C.Abj._Done.call(this);},_ReInit:function(){C.
Abj._ReInit.call(this);this.Background._ReInit();this.Ek._ReInit();},_Mark:function(
D){var B;C.Abj._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WR={Ik:null,Zq:function(E){var B;if(this.Ik===E)return;if(!!this.Ik)this.AqH(
this.Ik,null,null,null,[B=this.Ik,B.AyN],null,false);this.Ik=E;if(!!this.Ik)this.
AkM(this.Ik,null,null,null,null,null,null,[B=this.Ik,B.AIU],null,false);},AEE:function(
){return this.Ik;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WR;this.H([0,0,C.Asz[0],C.Asz[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Ik)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.OB={U_:null,Q:null,AnM:null,ZD:null,NU:null,Oz:null,TJ:null,TK:null,AGn:255,
IE:function(G){var F;if(!!this.Q){this.A2w();var Ada=(F=this.Q,F[1].call(F[0]));
if(Ada>20)this.Oz.L(A.jb.E1);else this.Oz.L(A.jb.Gj);this.Oz.L((this.Oz.AQ&0x00FFFFFF
)|(this.AlM(Ada,0,30)<<24));this.TJ.L((this.TJ.AQ&0x00FFFFFF)|(this.AlM(Ada,31,60
)<<24));this.TK.L((this.TK.AQ&0x00FFFFFF)|(this.AlM(Ada,61,100)<<24));}},A0Z:function(
s){this.IE(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0Z],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0Z],E,0);if(!!E)A.pe([this,
this.A0Z],this);},A3L:function(G){var F;if(!!this.AnM)this.ZD.Ar((F=this.AnM,F[1
].call(F[0])));else this.ZD.Ar(false);this.A_K(255);},A_C:function(E){if(A.aaZ(this.
AnM,E))return;if(!!this.AnM)A.z$([this,this.A3L],this.AnM,0);this.AnM=E;if(!!E)A.
zX([this,this.A3L],E,0);if(!!E)A.pe([this,this.A3L],this);},A_K:function(E){if(this.
AGn===E)return;this.AGn=E;if(!!this.U_)this.U_.L((this.U_.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlM:function(A05,Bct,BxW){if(A05<Bct)return 0;else if((A05>=Bct)&&(A05<
BxW))return this.AGn&0xFF;else return 255;},A2w:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U_=this.TK;else if((F=this.Q,F[1].call(F[0]))>
30)this.U_=this.TJ;else this.U_=this.Oz;}else this.U_=null;},BlI:function(){return this.
AGn;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZD._Init.call(this.ZD={
I:this},0);A.acg.Ap._Init.call(this.NU={I:this},0);A.acg.AL._Init.call(this.Oz={
I:this},0);A.acg.AL._Init.call(this.TJ={I:this},0);A.acg.AL._Init.call(this.TK={
I:this},0);this.__proto__=C.OB;this.H(E7);this.ZD.Fr(2000);this.NU.H(E7);this.NU.
L(A.jb.Text);this.Oz.H(Hr);this.Oz.L(A.jb.E1);this.TJ.H(IW);this.TJ.L(A.jb.E1);this.
TK.H(It);this.TK.L(A.jb.E1);this.J(this.NU,0);this.J(this.Oz,0);this.J(this.TJ,0
);this.J(this.TK,0);this.ZD.Q=[this,this.BlI,this.A_K];this.NU.Ax(A.aaL(A.ach.AM1
));},_Done:function(){this.__proto__=A.Core.P;this.ZD._Done();this.NU._Done();this.
Oz._Done();this.TJ._Done();this.TK._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZD._ReInit();this.NU._ReInit();this.Oz._ReInit(
);this.TJ._ReInit();this.TK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnM)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Oz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZD={_Init:function(aArg){A.acl.Gm._Init.call(
this,aArg);this.__proto__=C.ZD;this.AkY=true;this.B3=0;this.Cx=255;},_className:
"Application::PulseAnimation"};C.Ek={GK:null,AR:null,Background:null,OB:null,Bo:
null,Do:null,K_:0,Avq:0,Avr:0,Ao4:0,LK:false,KJ:false,Qv:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!Hf){this.Ao4=A.jb.CU;this.K_=A.jb.Text;}else if(GE){this.Ao4=
this.Avq;this.K_=this.Avr;}else if(Fw){this.Ao4=this.Avq;this.K_=this.Avr;}else{
this.Ao4=A.jb.CU;this.K_=A.jb.Text;}this.Background.L(this.Ao4);if(!!this.GK){this.
GK.WG(this.Ao4);this.GK.Dg(this.K_);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;},Qu:function(
G){this.Am();A.pe(this.AR,this);},AiR:function(G){if(this.Do.Aci)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab3:function(
E){if(this.GK===E)return;if(!!this.GK)this.HP(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.Am();},A_l:function(E){if(this.Avq===E)return;this.
Avq=E;this.Am();},A_m:function(E){if(this.Avr===E)return;this.Avr=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.OB._Init.call(this.OB={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BL._Init.call(this.Do={I:this},0);this.__proto__=C.Ek;var B;this.
H(BD);this.Background.A0(0x3F);this.Background.H(BD);this.Background.L(A.jb.CU);
this.OB.H(O6);this.K_=A.jb.Text;this.Bo.PV(0);this.Bo.WH(50);this.Do.Filter=1;this.
Avq=A.jb.AV;this.Avr=A.jb.Bm;this.Ao4=A.jb.Text;this.J(this.Background,0);this.J(
this.OB,0);this.OB.Au([B=A._GetAutoObject(A.Device.Device),B.Awb,B.AyO]);this.OB.
A_C([B=A._GetAutoObject(A.Device.Device),B.Awe,B.AyP]);this.Bo.ME=[this,this.Qu];
this.Do.BM=[this,this.AiR];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.OB._Done();this.Bo._Done();this.Do._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
OB._ReInit();this.Bo._ReInit();this.Do._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X3={AeO:null,UG:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E4:function(G){if(this.K&&this.K.E4)return this.K.E4.apply(this,arguments);else
return C.AB.E4.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeO={I:this},0);A.acg.Text._Init.call(this.UG={I:
this},0);this.__proto__=C.X3;this.AeO.H(P_);this.UG.H(P$);this.UG.R(A.jV);this.UG.
L(A.jb.Text);this.UG.Z(false);this.J(this.AeO,0);this.J(this.UG,0);this.AeO.Ax(null
);this.UG.S(A.aaL(A.fl.EK));var J8=this._variants();if(J8){this.K={};J8._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeO._Done();this.UG._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeO._ReInit();this.UG._ReInit();this.UG.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
X3._variants();},K:null,_className:"Application::BootScreen"};C.AU8={AAJ:function(
G){A._GetAutoObject(C.A8).Ab_(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AU8;this.Background.L(0xFF000000);this.Ek.Z(false);},_className:
"Application::SleepScreen"};C.AvD={DY:null,Y:null,Yd:null,Ye:null,VK:null,X6:null
,VL:null,X4:null,X9:null,TO:null,X8:null,Yf:null,Ay:null,CQ:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Ary,B.Ato],0);A._GetAutoObject(A.Device.Helper).AkQ();this.Bb(this.VK);this.
N.Cw(A.aaL(A.ach.ADO));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A3k=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A3k)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJ8=A._NewObject(A.acl.AGk,0);AJ8.Fr(250);AJ8.HO(1);AJ8.WJ(6);this.
Y.HI(this.AV,true,AJ8,null);}},CC:function(G){this.A4R(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkQ();A._GetAutoObject(A.Device.Helper).Ast();},Fk:function(G){
var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.
Ay.MC(-this.Y.Br[1]);},Ii:function(G){var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!
Cy)return;if(Cy===this.VK)A._GetAutoObject(C.A8).Cd(35);else if(Cy===this.X6)A._GetAutoObject(
C.A8).Cd(34);else if(Cy===this.X9)A._GetAutoObject(C.A8).Cd(69);else if(Cy===this.
VL)A._GetAutoObject(C.A8).Cd(8);else if(Cy===this.X4)A._GetAutoObject(C.A8).Cd(50
);else if(Cy===this.TO)A._GetAutoObject(C.A8).Cd(25);else if(Cy===this.Yd)A._GetAutoObject(
C.A8).Cd(77);else if(Cy===this.Ye)A._GetAutoObject(C.A8).Cd(70);else if(Cy===this.
Yf)A._GetAutoObject(C.A8).Cd(6);else if(Cy===this.X8)A._GetAutoObject(C.A8).Cd(63
);},BA7:function(G){A._GetAutoObject(A.Device.Device).Ae2(!A._GetAutoObject(A.Device.
Device).AmT);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmT)this.N.Hy((
A.aaR(A.acf.A7Q)+CR)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hy((A.aaR(A.acf.
A7Q)+CR)+A.aaR(A.acf.A8v).toLowerCase());},Adw:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A4R:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).Mv());this.VL.Zz(A._GetAutoObject(A.Device.Device).An.B_().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fo._Init.call(this.Yd={I:this
},0);C.Fo._Init.call(this.Ye={I:this},0);C.Fo._Init.call(this.VK={I:this},0);C.Fo.
_Init.call(this.X6={I:this},0);C.QX._Init.call(this.VL={I:this},0);C.Fo._Init.call(
this.X4={I:this},0);C.Fo._Init.call(this.X9={I:this},0);C.Fo._Init.call(this.TO={
I:this},0);C.Fo._Init.call(this.X8={I:this},0);C.Fo._Init.call(this.Yf={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AvD;this.Background.L(A.
jb.CU);this.N.Ar(false);this.N.Z(true);this.Dr(C.Aq2);this.DY.A0(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Y.H(L5);this.Y.JX(9);this.Yd.H(Qa);this.Yd.Aj(true);
this.Yd.T(A.aaR(A.acf.Gr));this.Ye.H(J7);this.Ye.Aj(true);this.Ye.T(A.aaR(A.acf.
A8c));this.VK.H(Od);this.VK.Aj(true);this.VK.T(A.aaR(A.acf.Vx));this.X6.H(Qb);this.
X6.Aj(true);this.X6.T(A.aaR(A.acf.TB));this.VL.H(ML);this.VL.Aj(true);this.VL.T(
A.aaR(A.acf.APQ));this.X4.H(S$);this.X4.Aj(true);this.X4.T(A.aaR(A.acf.Animal));
this.X9.H(J7);this.X9.Aj(true);this.X9.T(A.aaR(A.acf.A7T));this.TO.H(UW);this.TO.
Ar(true);this.TO.Aj(true);this.TO.Z(true);this.TO.T(A.aaR(A.acf.A6D));this.X8.H(
Z6);this.X8.Aj(true);this.X8.T(A.aaR(A.acf.Device));this.Yf.H(W9);this.Yf.Aj(true
);this.Yf.T(A.aaR(A.acf.Settings));this.Ay.H(Iu);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.Yd,0);this.J(this.Ye,0);this.J(this.VK,0);this.J(this.X6,0);this.
J(this.VL,0);this.J(this.X4,0);this.J(this.X9,0);this.J(this.TO,0);this.J(this.X8
,0);this.J(this.Yf,0);this.J(this.Ay,0);this.N.CE=[this,this.BA7];this.N.Cf=[this
,this.Adw];this.Y.Em=[this,this.Fk];this.Yd.AR=[this,this.Ii];this.Yd.DB(A.aaL(A.
ach.ADR));this.Ye.AR=[this,this.Ii];this.Ye.DB(A.aaL(A.ach.ADU));this.VK.AR=[this
,this.Ii];this.VK.DB(A.aaL(A.ach.APV));this.X6.AR=[this,this.Ii];this.X6.DB(A.aaL(
A.ach.AP8));this.VL.AR=[this,this.Ii];this.VL.DB(A.aaL(A.ach.AQv));this.X4.AR=[this
,this.Ii];this.X4.DB(A.aaL(A.ach.APZ));this.X9.AR=[this,this.Ii];this.X9.DB(A.aaL(
A.ach.AQF));this.TO.AR=[this,this.Ii];this.TO.DB(A.aaL(A.ach.AQk));this.X8.AR=[this
,this.Ii];this.X8.DB(A.aaL(A.ach.AQh));this.Yf.AR=[this,this.Ii];this.Yf.DB(A.aaL(
A.ach.AQZ));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.Yd._Done();this.Ye._Done();this.VK._Done();this.X6._Done();
this.VL._Done();this.X4._Done();this.X9._Done();this.TO._Done();this.X8._Done();
this.Yf._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Yd._ReInit();this.Ye.
_ReInit();this.VK._ReInit();this.X6._ReInit();this.VL._ReInit();this.X4._ReInit(
);this.X9._ReInit();this.TO._ReInit();this.X8._ReInit();this.Yf._ReInit();this.Ay.
_ReInit();this.Yd.T(A.aaR(A.acf.Gr));this.Ye.T(A.aaR(A.acf.A8c));this.VK.T(A.aaR(
A.acf.Vx));this.X6.T(A.aaR(A.acf.TB));this.VL.T(A.aaR(A.acf.APQ));this.X4.T(A.aaR(
A.acf.Animal));this.X9.T(A.aaR(A.acf.A7T));this.TO.T(A.aaR(A.acf.A6D));this.X8.T(
A.aaR(A.acf.Device));this.Yf.T(A.aaR(A.acf.Settings));this.CQ();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Ra={Number:null,Jj:null,IV:null,TH:null,AsP:0,Init:function(aArg){var B;A.zX([
this,this.Bb7],[B=A._GetAutoObject(A.Device.Device),B.ASY,B.A0F],0);A.pe([this,this.
Bb7],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An9();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhM();},E4:function(G){A._GetAutoObject(A.Device.
Device).An1();},Al7:function(G){var F;this.Am();this.TH.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aeo.Ar(true);if(!this.TH.Bw)(F=this.TH.Q,F[2].call(F[0],this.TH.
B3));},Bb7:function(s){this.Al7(s);},An9:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gj);break;case 3:this.Background.
L(A.jb.H_);break;default:this.Background.L(A.jb.CJ);}},AkG:function(E){if(this.AsP===
E)return;this.AsP=E;this.Jj.AkG(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jj._Init.call(this.Jj={I:this}
,0);A.acg.Ap._Init.call(this.IV={I:this},0);A.acl.Gm._Init.call(this.TH={I:this}
,0);this.__proto__=C.Ra;var B;this.Background.L(A.jb.CJ);this.N.Z(false);this.Number.
H(UX);this.Number.KU(true);this.Number.L(A.jb.Text);this.Jj.H(Z7);this.Jj.AkG(0);
this.IV.H(UY);this.IV.L(A.jb.AV);this.IV.Zs(true);this.TH.Fr(1750);this.TH.Ut(750
);this.TH.AkB(0);this.TH.Ar(true);this.TH.B3=3;this.J(this.Number,0);this.J(this.
Jj,0);this.J(this.IV,0);this.Number.S(A.aaL(A.fl.Af));this.IV.Ax(A.aaL(A.ach.ADT
));this.TH.Q=[B=this.IV,B.ASL,B.Cv];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jj._Done();this.IV._Done();this.TH._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jj._ReInit();this.IV._ReInit();this.TH._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fo={C_:null,ADF:null,AR:null,Bo:null,Do:null,Background:
null,Mu:null,OH:null,Q3:null,G_:null,A5W:true,LK:false,KJ:false,Qv:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hi.Bl.call(this,aSize);this.Mu.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q3.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OH.H(this.Q3.M);this.G_.H([].concat(0,this.G_.M.slice(1,4)));this.G_.H(A.abN(
this.G_.M,aSize[0]));this.G_.H(A.abP(this.G_.M,0));this.G_.H([].concat(this.G_.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hi.Ai.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!Hf){this.Q3.L(A.jb.Am5);this.
G_.L(A.jb.CJ);this.OH.Z(true);this.OH.L(A.jb.ARf);this.Mu.Z(false);}else if(GE){
this.Q3.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OH.Z(false);this.Mu.Z(true);}else if(
Fw){this.Q3.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OH.Z(false);this.Mu.Z(true);}else{
this.Q3.L(A.jb.Text);this.G_.L(A.jb.Text);this.OH.Z(true);this.OH.L(A.jb.CU);this.
Mu.Z(false);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;},Qu:function(G){this.Am();A.pe(this.
AR,this);},AiR:function(G){if(this.Do.Aci)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G_.R(E);},DB:function(E){if(this.C_===E)return;this.C_=E;this.Q3.
Ax(E);this.OH.Ax(E);},Ab2:function(E){if(this.A5W===E)return;this.A5W=E;this.G_.
Z(E);},Ab5:function(E){if(this.ADF===E)return;this.ADF=E;this.Mu.Ax(E);this.Mu.H(
A.abK(this.Mu.M,E.FrameSize));},_Init:function(aArg){C.Hi._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BL._Init.call(this.Do={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mu={
I:this},0);A.acg.Ap._Init.call(this.OH={I:this},0);A.acg.Ap._Init.call(this.Q3={
I:this},0);C.CG._Init.call(this.G_={I:this},0);this.__proto__=C.Fo;this.H(Z8);this.
Bo.PV(0);this.Bo.WH(50);this.Do.Filter=1;this.Background.H(W_);this.Background.Z(
false);this.Mu.A0(0x14);this.Mu.L(A.jb.AV);this.Mu.Cv(0);this.OH.L(A.jb.CU);this.
OH.Cv(1);this.G_.H(Z9);this.J(this.Background,0);this.J(this.Mu,0);this.J(this.OH
,0);this.J(this.Q3,0);this.J(this.G_,0);this.Bo.ME=[this,this.Qu];this.Do.BM=[this
,this.AiR];this.Mu.Ax(A.aaL(A.ach.NX));this.OH.Ax(A.aaL(A.ach.AvP));this.Q3.Ax(A.
aaL(A.ach.AvP));this.G_.S(A.aaL(A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(
A.aaL(A.fl.Bh));this.ADF=A.aaL(A.ach.NX);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hi;this.Bo._Done();this.Do._Done();this.Background._Done();this.Mu._Done(
);this.OH._Done();this.Q3._Done();this.G_._Done();C.Hi._Done.call(this);},_ReInit:
function(){C.Hi._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit();this.Background.
_ReInit();this.Mu._ReInit();this.OH._ReInit();this.Q3._ReInit();this.G_._ReInit(
);this.G_.S(A.aaL(A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axl:null,Background:null,O2:null,Ask:0,Ak9:10,AjF:100,AQ:0,AoX:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
O2.H([].concat(2,this.O2.M.slice(1,4)));this.O2.H(A.abN(this.O2.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af6=this.Ak9<this.AjF;var AJG=(
B=this.M)[3]-B[1];var A29=10;var Auv=AJG;var A4O=0;if(10>AJG)A29=AJG;if(this.Ak9<
this.AjF)Auv=((Auv*this.Ak9)/this.AjF)|0;if(Auv<A29)Auv=A29;if(this.Ak9<this.AjF
)A4O=((this.BlG()*(AJG-Auv))/(this.AjF-this.Ak9))|0;this.O2.H(A.abP(this.O2.M,A4O
));this.O2.H([].concat(this.O2.M.slice(0,3),A4O+Auv));this.O2.Z(Af6);this.Background.
Z(Af6);if(!!this.Axl&&(this.AoX!==Af6))A.pe(this.Axl,this);this.AoX=Af6;},BlG:function(
){var E=this.Ask;var HD=this.AjF-this.Ak9;if((HD>0)&&(E>HD))E=HD;if(HD<=0)E=0;return E;
},MC:function(E){if(E<0)E=0;if(this.Ask===E)return;this.Ask=E;this.Am();},MD:function(
E){if(E<0)E=0;if(this.Ak9===E)return;this.Ak9=E;this.Am();},MB:function(E){if(E<
0)E=0;if(this.AjF===E)return;this.AjF=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.O2.L(E);},BnP:function(E){if(A.aa0(this.Axl,E))return;this.
Axl=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.O2={I:this},0);this.__proto__=
C.Ay;this.H(Z_);this.Ar(false);this.AQ=A.jb.AV;this.Background.A0(0x0);this.Background.
H(UZ);this.Background.L(A.jb.CU);this.O2.A0(0x0);this.O2.H(UZ);this.O2.L(A.jb.AV
);this.J(this.Background,0);this.J(this.O2,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.O2._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.O2._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axl)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cg={Hj:null,Y:null,Ay:null,Ap:null,A7j:A.jV,Init:function(aArg){A.pe([this,this.
ABg],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);this.ABg(this);},Al4:
function(G){if(!!this.N.CE)A.pe(this.N.CE,this);},ApO:function(G){if(!!this.N.Ca
)A.pe(this.N.Ca,this);},AAJ:function(G){if(!!this.N.Cf)A.pe(this.N.Cf,this);},Fk:
function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[
3]-B[1]);this.Ay.MC(-this.Y.Br[1]);A.pe([this,this.BBt],this);},ABg:function(G){
var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.C2(A.
aaL(A.ach.YB));this.N.CE=[this,this.Ew];if(!!GZ&&!!GZ.Ams){this.N.Fc(A.jV);this.
N.JC.C4(255);this.N.ArR(GZ.AqS);this.N.Cw(GZ.AvM);this.N.Cf=GZ.Ams;}else{this.N.
Fc(A.jV);this.N.Cw(null);this.N.Cf=null;}if(!!GZ&&!!GZ.Agw){this.N.CS(GZ.AxQ);this.
N.GW.C4(GZ.Axm);this.N.AnA(GZ.AmV);this.N.C3(GZ.Aq9);this.N.Ca=GZ.Agw;}else{this.
N.CS(A.jV);this.N.C3(null);this.N.Ca=null;}},Jd:function(E){if(this.A7j===E)return;
this.A7j=E;this.Hj.R(E);},Ew:function(G){A._GetAutoObject(C.A8).FB();},BBt:function(
G){var B;var BAn=this.Ay.Background.Fq();var Bek=(BAn?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajf=X;
X=X.Ah;if(((Ajf.U&0x400)===0x400)){if(!!(A.Core.Akh.isPrototypeOf(Ajf)?Ajf:null)
){var Beq=(A.Core.Akh.isPrototypeOf(Ajf)?Ajf:null);Beq.DC([Bek,Beq.ED[1]]);}else
if(!!(A.Core.Eu.isPrototypeOf(Ajf)?Ajf:null)){var Bgk=(A.Core.Eu.isPrototypeOf(Ajf
)?Ajf:null);Bgk.H(A.abN(Bgk.M,Bek));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Hj={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cg;this.N.Z(true);this.Hj.H(W$);this.Hj.Ar(false);this.Hj.R(A.aaR(A.
acf.Settings));this.Hj.L(A.jb.Text);this.Y.H(Ff);this.Y.JX(1);this.Ay.H(Iu);this.
Ap.H(O7);this.Ap.L(A.jb.Text);this.J(this.Hj,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hj.S(A.aaL(A.fl.Kr));this.Hj.AZ(A.aaL(A.fl.HJ));this.Y.
Em=[this,this.Fk];this.Ap.Ax(A.aaL(A.ach.ADm));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hj._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hj._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hj.R(A.aaR(A.acf.Settings
));this.Hj.S(A.aaL(A.fl.Kr));this.Hj.AZ(A.aaL(A.fl.HJ));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq2={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bhf],[B=
A._GetAutoObject(A.Device.Helper),B.U4,B.U7],0);},Dg:function(E){C.BR.Dg.call(this
,E);this.Text.L(E);},Bhf:function(G){this.Text.R(A._GetAutoObject(A.acj.KO).Bje(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq2;this.Timer.WH(1);this.Timer.Ar(true);
this.Text.H(Z$);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.ME=[this,this.Bhf
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Timer._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BR={KV:0xFFFFFFFF,LU:0,Dg:function(E){if(
this.KV===E)return;this.KV=E;},WG:function(E){if(this.LU===E)return;this.LU=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BR;this.H(Oe
);},_className:"Application::HeaderContent"};C.N={V0:null,V1:null,V2:null,Ag4:null
,Ag5:null,Ag6:null,CE:null,Cf:null,Ca:null,Background:null,NL:null,Jh:null,JC:null
,GW:null,PB:null,I$:null,Lg:null,T4:null,T5:null,An3:A.jV,An4:A.jV,An5:A.jV,Aq_:
0,Aq$:0,Ara:0,Ahm:0,ZF:false,WO:false,Asq:false,AsF:false,AsE:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.V0)this.Jh.S(this.V0);if(!!this.V1)this.JC.S(this.
V1);if(!!this.V2)this.GW.S(this.V2);switch(this.Ahm){case 0:{this.NL.Z(false);this.
Jh.L(A.jb.Bm);this.JC.L(A.jb.Bm);this.GW.L(A.jb.Bm);this.PB.L(A.jb.Bm);this.I$.L(
A.jb.Bm);this.Lg.L(A.jb.Bm);}break;case 1:{if(!this.Ag4)this.NL.H(A.aaT(this.Jh.
ASD(),Rn));else this.NL.H(this.PB.Dd());this.NL.Z(true);this.Jh.L(A.jb.Text);this.
JC.L(A.jb.Bm);this.GW.L(A.jb.Bm);this.PB.L(A.jb.Text);this.I$.L(A.jb.Bm);this.Lg.
L(A.jb.Bm);}break;case 3:{if(!this.Ag6)this.NL.H(A.aaT(this.GW.ASD(),Rn));else this.
NL.H(this.Lg.Dd());this.NL.Z(true);this.Jh.L(A.jb.Bm);this.JC.L(A.jb.Bm);this.GW.
L(A.jb.Text);this.PB.L(A.jb.Bm);this.I$.L(A.jb.Bm);this.Lg.L(A.jb.Text);}break;case
2:{if(!this.Ag5)this.NL.H(A.aaT(this.JC.ASD(),Rn));else this.NL.H(this.I$.Dd());
this.NL.Z(true);this.Jh.L(A.jb.Bm);this.JC.L(A.jb.Text);this.GW.L(A.jb.Bm);this.
PB.L(A.jb.Bm);this.I$.L(A.jb.Text);this.Lg.L(A.jb.Bm);}break;default:{this.NL.Z(
false);A.ab5("%s",Xa);}}if(!!this.PB.Al){this.PB.Z(true);this.Jh.Z(false);}else{
this.PB.Z(false);this.Jh.Z(true);}if(this.An4.length<=0){this.I$.Z(true);this.JC.
Z(false);}else{this.I$.Z(false);this.JC.Z(true);}if(!!this.Lg.Al){this.Lg.Z(true
);this.GW.Z(false);}else{this.Lg.Z(false);this.GW.Z(true);}},Hy:function(E){if(this.
An3===E)return;this.An3=E;this.Jh.R(E);this.Am();},Fc:function(E){if(this.An4===
E)return;this.An4=E;this.JC.R(E);this.Am();},CS:function(E){if(this.An5===E)return;
this.An5=E;this.GW.R(E);this.Am();},AFs:function(E){if(this.Ahm===E)return;this.
Ahm=E;this.Am();},AFj:function(E){if(this.V0===E)return;this.V0=E;this.Jh.S(E);this.
Am();},ArR:function(E){if(this.V1===E)return;this.V1=E;this.JC.S(E);this.Am();},
AnA:function(E){if(this.V2===E)return;this.V2=E;this.GW.S(E);this.Am();},A30:function(
G){this.Am();},C2:function(E){if(this.Ag4===E)return;this.Ag4=E;this.PB.Ax(E);this.
Am();},Cw:function(E){if(this.Ag5===E)return;this.Ag5=E;this.I$.Ax(E);this.Am();
},C3:function(E){if(this.Ag6===E)return;this.Ag6=E;this.Lg.Ax(E);this.Am();},OS:
function(E){if(this.AsE===E)return;this.AsE=E;this.T4.Z(E);if(E)this.Jh.H([].concat(
this.T4.M[2],this.Jh.M.slice(1,4)));else this.Jh.H([].concat(0,this.Jh.M.slice(1
,4)));this.Am();},OT:function(E){if(this.AsF===E)return;this.AsF=E;this.T5.Z(E);
if(E)this.GW.H(A.abN(this.GW.M,this.T5.M[0]));else this.GW.H(A.abN(this.GW.M,this.
M[2]));this.Am();},Bnb:function(E){if(this.Aq_===E)return;this.Aq_=E;this.PB.Cv(
E);this.Am();},ATp:function(E){if(this.Aq$===E)return;this.Aq$=E;this.I$.Cv(E);this.
Am();},A_q:function(E){if(this.Ara===E)return;this.Ara=E;this.Lg.Cv(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NL={I:this},0);C.CG._Init.call(this.Jh={I:this
},0);C.CG._Init.call(this.JC={I:this},0);C.CG._Init.call(this.GW={I:this},0);A.acg.
Ap._Init.call(this.PB={I:this},0);A.acg.Ap._Init.call(this.I$={I:this},0);A.acg.
Ap._Init.call(this.Lg={I:this},0);A.acg.Ap._Init.call(this.T4={I:this},0);A.acg.
Ap._Init.call(this.T5={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
A0(0x3F);this.Background.H(BD);this.Background.L(A.jb.Aeb);this.NL.H(Xb);this.NL.
L(A.jb.CU);this.NL.Z(false);this.Jh.A0(0x14);this.Jh.H(Ta);this.Jh.A6(0x12);this.
JC.A0(0x14);this.JC.H(Xc);this.JC.A6(0x12);this.GW.H(Aaa);this.PB.H(Xd);this.I$.
H(Xe);this.Lg.H(Tb);this.Lg.Z(false);this.T4.H(Tc);this.T4.Z(false);this.T5.H(Td
);this.T5.Z(false);this.J(this.Background,0);this.J(this.NL,0);this.J(this.Jh,0);
this.J(this.JC,0);this.J(this.GW,0);this.J(this.PB,0);this.J(this.I$,0);this.J(this.
Lg,0);this.J(this.T4,0);this.J(this.T5,0);this.Jh.S(A.aaL(A.fl.Ak));this.Jh.AZ(A.
aaL(A.fl.Bh));this.Jh.Q7([this,this.A30]);this.JC.S(A.aaL(A.fl.Ak));this.JC.AZ(A.
aaL(A.fl.Bh));this.JC.Q7([this,this.A30]);this.GW.S(A.aaL(A.fl.Ak));this.GW.AZ(A.
aaL(A.fl.Bh));this.GW.Q7([this,this.A30]);this.V0=A.aaL(A.fl.Ak);this.V1=A.aaL(A.
fl.Ak);this.V2=A.aaL(A.fl.Ak);this.PB.Ax(null);this.I$.Ax(null);this.Lg.Ax(null);
this.T4.Ax(A.aaL(A.ach.AMT));this.T5.Ax(A.aaL(A.ach.Ajt));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.NL._Done();this.
Jh._Done();this.JC._Done();this.GW._Done();this.PB._Done();this.I$._Done();this.
Lg._Done();this.T4._Done();this.T5._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.NL._ReInit();this.Jh.
_ReInit();this.JC._ReInit();this.GW._ReInit();this.PB._ReInit();this.I$._ReInit(
);this.Lg._ReInit();this.T4._ReInit();this.T5._ReInit();this.Jh.S(A.aaL(A.fl.Ak)
);this.Jh.AZ(A.aaL(A.fl.Bh));this.JC.S(A.aaL(A.fl.Ak));this.JC.AZ(A.aaL(A.fl.Bh)
);this.GW.S(A.aaL(A.fl.Ak));this.GW.AZ(A.aaL(A.fl.Bh));this.AFj(A.aaL(A.fl.Ak));
this.ArR(A.aaL(A.fl.Ak));this.AnA(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.V0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V2)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NL)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JC).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.PB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADq={Init:function(aArg){var B;A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.
Helper),B.ArA,B.AkF],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper)
,B.A9o,B.AFQ],0);A.pe([this,this.Nt],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhI)this.Ab4(A._GetAutoObject(A.Device.Helper).AhI.AO0());else this.
Ab4(-1);if(!!A._GetAutoObject(A.Device.Helper).UD)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak7(A._GetAutoObject(A.Device.Helper).UD.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.Am1._Init.call(this,aArg);this.__proto__=C.ADq;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AG4={Ey:null,Ei:null,
FX:null,X2:null,TI:null,IJ:null,IK:null,Init:function(aArg){},WN:function(G){var
B;C.DR.WN.call(this,G);var AKV=this.Azw(A._GetAutoObject(A.Device.Helper).UJ.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALK=this.Azw(A._GetAutoObject(
A.Device.Helper).UK.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BAc=
this.Azw(A._GetAutoObject(A.Device.Device).AcG);this.Ey.H(A.abP(this.Ey.M,0));this.
Ey.H([].concat(this.Ey.M.slice(0,3),((B=this.M)[3]-B[1])-AKV));this.IK.H(A.abO(this.
IK.M,this.Ey.M[3]-((((B=this.IK.M)[3]-B[1])/2)|0)));this.Ei.H(A.abP(this.Ei.M,this.
Ey.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-B[1])-ALK));this.
IJ.H(A.abO(this.IJ.M,(this.Ei.M[3]-((((B=this.IJ.M)[3]-B[1])/2)|0))+2));this.FX.
H(A.abP(this.FX.M,this.Ei.M[3]));this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.
M)[3]-B[1])-BAc));this.TI.H(A.abO(this.TI.M,this.FX.M[3]-((((B=this.TI.M)[3]-B[1
])/2)|0)));this.X2.H(A.abP(this.X2.M,this.FX.M[3]));this.X2.H([].concat(this.X2.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJT:function(AoT){return A._GetAutoObject(A.
Device.Converter).Ak2(AoT);},AKq:function(){return A._GetAutoObject(A.acj.Temperature
).AlN();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AL._Init.call(this.
Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.
FX={I:this},0);A.acg.AL._Init.call(this.X2={I:this},0);A.acg.AL._Init.call(this.
TI={I:this},0);A.acg.AL._Init.call(this.IJ={I:this},0);A.acg.AL._Init.call(this.
IK={I:this},0);this.__proto__=C.AG4;this.Ey.A0(0xD);this.Ey.H(Aab);this.Ey.L(A.jb.
Gj);this.Ei.A0(0xD);this.Ei.H(Te);this.Ei.L(A.jb.H_);this.FX.A0(0xD);this.FX.H(Aac
);this.FX.L(A.jb.E1);this.X2.A0(0xD);this.X2.H(AfB);this.X2.L(A.jb.Afu);this.TI.
A0(0xD);this.TI.H(Aad);this.TI.Awz(A.jb.Afu);this.TI.AwA(A.jb.Afu);this.TI.AwC(A.
jb.E1);this.TI.AwB(A.jb.E1);this.IJ.A0(0xD);this.IJ.H(Xf);this.IJ.Awz(A.jb.E1);this.
IJ.AwA(A.jb.E1);this.IJ.AwC(A.jb.H_);this.IJ.AwB(A.jb.H_);this.IK.A0(0xD);this.IK.
H(Aae);this.IK.Awz(A.jb.H_);this.IK.AwA(A.jb.H_);this.IK.AwC(A.jb.Gj);this.IK.AwB(
A.jb.Gj);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FX,-1);this.J(this.X2
,-1);this.J(this.TI,-1);this.J(this.IJ,-1);this.J(this.IK,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FX._Done(
);this.X2._Done();this.TI._Done();this.IJ._Done();this.IK._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ey._ReInit();this.Ei._ReInit(
);this.FX._ReInit();this.X2._ReInit();this.TI._ReInit();this.IJ._ReInit();this.IK.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ey)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Co={Avs:null,AmV:null,AQr:null,Aq9:null,AqS:null,AvM:null,AR:null,Agw:null,Ams:
null,N:null,Bo:null,QT:null,AxQ:A.jV,AU3:false,AGS:false,Apj:false,Axm:255,LK:false
,KJ:false,Qv:false,Ai:function(Ae){var B;C.OZ.Ai.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fw=((Ae&0x20)===0x20);var ID=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=
A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.
L(A.jb.CU);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(ID){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.
Background.L(A.jb.Am5);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY
);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;this.Apj=ID;},Qu:function(G){this.Am();A.pe(
this.AR,this);},Bw_:function(s){this.Qu(s);},I3:function(G){if(this.QT.Aci)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Atq:function(s){this.I3(s);},Ab1:function(E){if(A.aa0(this.Agw,E))return;this.
Agw=E;},A_V:function(E){if(this.AxQ===E)return;this.AxQ=E;},Zv:function(E){if(this.
Avs===E)return;this.Avs=E;},Zw:function(E){if(this.AmV===E)return;this.AmV=E;},A_A:
function(E){if(this.Axm===E)return;this.Axm=E;},Gs:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALs();},A3x:
function(G){},BGZ:function(s){this.A3x(s);},AkA:function(E){if(this.Aq9===E)return;
this.Aq9=E;},L1:function(E){if(A.aa0(this.Ams,E))return;this.Ams=E;},Bm6:function(
E){if(this.AqS===E)return;this.AqS=E;},L4:function(E){if(this.AvM===E)return;this.
AvM=E;},ZA:function(E){if(this.AGS===E)return;this.AGS=E;this.ALs();},ALs:function(
){var B;var M2=this.DK;if(this.AGS)M2=M2+A.aaR(A.acf.Colon);if(this.AU3)M2=M2+Xg;
this.V.R(M2);},ATM:function(E){if(this.AU3===E)return;this.AU3=E;this.ALs();},_Init:
function(aArg){C.OZ._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BL._Init.call(this.QT={I:this},0);this.__proto__=C.Co;this.Bo.PV(0);
this.Bo.WH(50);this.Bo.Ar(false);this.QT.Filter=1;this.Bo.ME=[this,this.Bw_];this.
QT.BM=[this,this.Atq];this.Avs=A.aaL(A.fl.Ak);this.AmV=A.aaL(A.fl.Ak);this.AQr=A.
aaL(A.ach.E2);this.AqS=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OZ;this.
Bo._Done();this.QT._Done();C.OZ._Done.call(this);},_ReInit:function(){C.OZ._ReInit.
call(this);this.Bo._ReInit();this.QT._ReInit();this.Zv(A.aaL(A.fl.Ak));this.Zw(A.
aaL(A.fl.Ak));this.Bm6(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OZ._Mark.call(
this,D);if((B=this.Avs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmV)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqS)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agw)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ams)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Ds={Q:null,Ane:null,Ang:null,Hx:null,H6:null,AM:0,Gq:0,F$:100,FI:0,Init:function(
aArg){},I3:function(G){this.FI=1;C.Eg.I3.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hx.H([0,aSize[1]-40,40,aSize[1]]);this.H6.H([].concat(A.
abe(aSize,AhX),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fw=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hx.L(this.V.AQ);this.H6.L(this.V.AQ);this.Hx.
Z((Fw||GE)&&(this.AM>this.Gq));this.H6.Z((Fw||GE)&&(this.AM<this.F$));if(this.FI===
6)this.Hx.L(A.jb.E1);if(this.FI===7)this.H6.L(A.jb.E1);},Bft:function(G){this.FI=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.AyX],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qu:function(G){if(this.FI===6)A.pe([this,this.AyX],this);if(this.FI===
7)A.pe([this,this.AyY],this);if(this.FI===1)A.pe(this.AR,this);this.FI=0;this.Am(
);},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcW:function(
s){this.C5(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,
this.AcW],this);},Bfu:function(G){this.FI=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.AyY],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Kg:function(G){this.FI=0;}
,AyY:function(s){this.Kg(s);},Kb:function(G){this.FI=0;},AyX:function(s){this.Kb(
s);},Bx:function(E){if(E<this.Gq)E=this.Gq;if(E>this.F$)E=this.F$;if(this.AM===E
)return;this.AM=E;this.Am();},Bbw:function(Aq){this.Bx(Aq);},Ga:function(E){if(this.
Gq===E)return;this.Gq=E;this.Am();},EV:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},Um:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BL._Init.call(this.Ane={I:this},0);A.Core.BL._Init.call(this.Ang={
I:this},0);A.acg.Ap._Init.call(this.Hx={I:this},0);A.acg.Ap._Init.call(this.H6={
I:this},0);this.__proto__=C.Ds;this.H(K1);this.Ane.Filter=6;this.Ang.Filter=7;this.
Background.H(K1);this.V.H(AcN);this.V.R(Ly);this.Hx.H(AhY);this.H6.H(Aof);this.H6.
Cv(1);this.J(this.Hx,0);this.J(this.H6,0);this.Ane.BM=[this,this.Bft];this.Ane.D1=[
this,this.Bft];this.Ang.BM=[this,this.Bfu];this.Ang.D1=[this,this.Bfu];this.V.S(
A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(null);this.Hx.Ax(A.aaL(A.ach.
Aju));this.H6.Ax(A.aaL(A.ach.Aju));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Ane._Done();this.Ang._Done();this.Hx._Done();this.H6._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Ane._ReInit();this.
Ang._ReInit();this.Hx._ReInit();this.H6._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ane)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ang)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hx)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Du:function(){return-1;},C7:function(aIndex){return-1;},Gl:function(
aIndex){return A.jV;},DZ:function(A7){return-1;},H5:function(){return-1;},Au:function(
E){this.Q=E;},Cb:function(Aq){this.Au(Aq);},AC5:function(aIndex){return null;},AC7:
function(aIndex){return 0;},B$:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Is={AxH:null
,BU:null,AHf:A.jV,AVI:A.jV,Aj5:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Ds.Ai.call(this,Ae);if(!this.AxH){this.BU.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BU.R(((F=this.Q,F[1].call(F[0])).toFixed()+CR)+this.
AVI);else this.BU.R(((F=this.Q,F[1].call(F[0])).toFixed()+CR)+this.AHf);}}else(B=
this.AxH)?B[1].call(B[0],this):null;},Kg:function(G){var F;var BP=this.AM;C.Ds.Kg.
call(this,G);this.Bx(this.AM+this.Aj5);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},Kb:function(G){var F;var BP=this.AM;C.
Ds.Kb.call(this,G);this.Bx(this.AM-this.Aj5);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IS:function(E){if(this.AHf===E)return;
this.AHf=E;this.Am();},Je:function(E){if(this.AVI===E)return;this.AVI=E;this.Am(
);},ATq:function(E){if(this.Aj5===E)return;this.Aj5=E;},A_S:function(E){if(A.aa0(
this.AxH,E))return;this.AxH=E;},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.CG._Init.call(this.BU={I:this},0);this.__proto__=C.Is;this.H(K1);this.BU.H(Of);
this.J(this.BU,-1);this.BU.S(A.aaL(A.fl.Af));this.BU.AZ(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Ds;this.BU._Done();C.Ds._Done.call(this
);},_ReInit:function(){C.Ds._ReInit.call(this);this.BU._ReInit();this.BU.S(A.aaL(
A.fl.Af));this.BU.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ds._Mark.call(this
,D);if((B=this.AxH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BX={AC:
null,Dz:null,HN:null,CQ:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Ds.Bl.call(this,aSize);this.Dz.H([this.Hx.M[2]-10,this.Hx.M[1],this.
H6.M[0]+10,this.Hx.M[3]]);this.Dz.AFt((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.Dz.
Gt,true,null,null);},Ai:function(Ae){var B;C.Ds.Ai.call(this,Ae);var Fw=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.Dz.AbF(0,this.Dz.AY-1);this.Hx.Z(Fw||GE);this.H6.
Z(Fw||GE);},C5:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},Kg:function(G){var F;var BP=this.AM;C.Ds.Kg.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Kb:function(G){var F;var BP=this.AM;
C.Ds.Kb.call(this,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var QA=0;if(E<this.Gq){E=this.F$;QA=-this.Dz.Wf*this.Dz.AY;}if(E>this.F$){E=this.
Gq;QA=this.Dz.Wf;}C.Ds.Bx.call(this,E);if(!!QA)this.Dz.Gb(QA);this.Dz.GT(this.AM
);if(this.Dz.Bka())this.Dz.BpJ(false,false);this.Dz.HI(this.Dz.Gt,true,this.HN,null
);},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(C.CG.isPrototypeOf(B=this.Dz.
Cj)?B:null);if(!CA)return;CA.S(this.V.B7);CA.Aw8(19);CA.AZ(this.V.AmU);CA.BnZ(19
);CA.Cr(this.V.AqR);CA.Bn0(19);CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));
else CA.R(Xh);CA.H(A.abK(CA.M,[this.Dz.Wf,(B=this.Dz.M)[3]-B[1]]));},BwM:function(
s){this.Hm(s);},CK:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Ga(0);this.EV(this.AC.Du()-1);this.Dz.JB(this.AC.Du());this.Dz.AbF(0,this.Dz.AY-
1);}},_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Core.Dz._Init.call(this.
Dz={I:this},0);A.acl.Gm._Init.call(this.HN={I:this},0);this.__proto__=C.BX;this.
H(K1);this.Dz.N4(C.CG);this.HN.WJ(23);this.HN.HO(1);this.HN.Fr(200);this.J(this.
Dz,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.Dz.Hm=[this,this.BwM
];this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.Dz._Done();this.HN.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
Dz._ReInit();this.HN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak)
);this.CQ();},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SS={FM:null,OK:null,Dm:null,Av:null,Jz:null,HM:null,Pv:null,VX:null,Q2:null,
Yn:null,P9:null,Gy:null,Gx:null,FY:0,A_:0,Aso:false,Bj7:false,Init:function(aArg
){},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hx.Z(false);this.H6.Z(false);var At0=
A.jV;if(!!this.Dm){this.Pv.R(this.Av.Format(Aaf));this.Q2.R(this.Av.Format(AfC));
this.P9.R(this.Av.Format(AhZ));}if(this.A_===1){this.HM.Z(true);this.HM.H(this.Pv.
M);this.HM.L(this.V.AQ);this.Pv.L(this.Background.AQ);this.Q2.L(this.V.AQ);this.
P9.L(this.V.AQ);At0=A.aaR(A.acf.A6d);}else if(this.A_===2){this.HM.Z(true);this.
HM.H(this.Q2.M);this.HM.L(this.V.AQ);this.Pv.L(this.V.AQ);this.Q2.L(this.Background.
AQ);this.P9.L(this.V.AQ);At0=A.aaR(A.acf.Hk);}else if(this.A_===3){this.HM.Z(true
);this.HM.H(this.P9.M);this.HM.L(this.V.AQ);this.Pv.L(this.V.AQ);this.Q2.L(this.
V.AQ);this.P9.L(this.Background.AQ);At0=A.aaR(A.acf.Year);}else{this.HM.Z(false);
this.Pv.L(this.V.AQ);this.Yn.L(this.V.AQ);this.Q2.L(this.V.AQ);this.VX.L(this.V.
AQ);this.P9.L(this.V.AQ);}if(At0.length>0){if(this.AGS)this.V.R((((this.DK+AcO)+
At0)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcO)+
At0)+String.fromCharCode(0x29));}else this.ALs();},Qu:function(G){if(this.FI===1
)A.pe([this,this.Vd],this);else if(this.FI===4)A.pe([this,this.AiH],this);else if(
this.FI===5)A.pe([this,this.Ait],this);C.Ds.Qu.call(this,G);},Kg:function(G){switch(
this.A_){case 0:C.Ds.Kg.call(this,G);break;case 3:break;default:this.Ady(this);}
},Kb:function(G){switch(this.A_){case 0:C.Ds.Kb.call(this,G);break;default:this.
Ais(this);}},AdA:function(G){var F;if(!!this.Dm)this.Ur((F=this.Dm,F[1].call(F[0
])));},Ab7:function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdA
],this.Dm,0);this.Dm=E;if(!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA
],this);},Ur:function(E){if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.
FY);this.Am();},Ady:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
Vd],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Bb5:function(s){this.Ady(s);},Vd:
function(G){this.Ex(this.A_+1);},Al6:function(G){this.FI=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiH],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Al5:function(
G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ait],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiH:function(G){var B;var F;var BP=this.FY;switch(this.A_){
case 1:{if(this.Aso){var ABp=A._NewObject(A.Core.An6,0);ABp.Ko=1;if(this.Av.J(ABp
).JW()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Av.GL<this.Av.Zp()
)this.Av.Ls(this.Av.GL+1);}break;case 2:{if(this.Aso){var ABp=A._NewObject(A.Core.
An6,0);ABp.Ko=this.Av.Zp();if(this.Av.J(ABp).JW()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Av.Uv(this.Av.Hk+1);if(this.Av.Zp()<this.Av.GL)this.Av.Ls(this.
Av.Zp());}break;case 3:{if(this.Aso){var A1U=A._NewObject(A.Core.Bs,0);A1U.Initialize(
this.Av.JW());A1U.Year+=1;if(A1U.JW()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Ur(((B=(this.Av.JW()|0))<0)?B+0x100000000:B);if(this.FY!==BP){if(!!this.Dm)(F=this.
Dm,F[2].call(F[0],this.FY));A.abo(this.Dm,0);}},Ait:function(G){var B;var F;var BP=
this.FY;if(this.A_===1)this.Av.Ls(this.Av.GL-1);if(this.A_===2){this.Av.Uv(this.
Av.Hk-1);if(this.Av.Zp()<this.Av.GL)this.Av.Ls(this.Av.Zp());}if(this.A_===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Ur(((B=(this.Av.JW()|
0))<0)?B+0x100000000:B);if(this.FY!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],
this.FY));A.abo(this.Dm,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A_){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[
0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeB));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vd];}break;case 2:{(F=this.N,F[
1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am3
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeB));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vd];}break;case 3:{(F=this.N,F[
1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am3
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},AFO:function(E){if(this.Aso===E)return;this.Aso=E;},FV:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;var AAx=this.A_;if(!this.
A_){this.FM.AjB((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FY){var BP=this.FY;
this.Ur(A._GetAutoObject(A.Device.Helper).Dv());if(this.FY!==BP){if(!!this.Dm)(F=
this.Dm,F[2].call(F[0],this.FY));A.abo(this.Dm,0);}}}this.A_=EO;this.Bj7=true;if((
this.A_<0)||(this.A_>3))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=
!!this.A_;if((!!AAx&&!this.A_)&&!!this.OK)A.pe(this.OK,this);this.Am();},Ais:function(
G){if(this.A_>1)this.Ex(this.A_-1);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Av={I:this},0);A.Core.BL._Init.call(this.Jz={I:this}
,0);A.acg.AL._Init.call(this.HM={I:this},0);A.acg.Text._Init.call(this.Pv={I:this
},0);A.acg.Text._Init.call(this.VX={I:this},0);A.acg.Text._Init.call(this.Q2={I:
this},0);A.acg.Text._Init.call(this.Yn={I:this},0);A.acg.Text._Init.call(this.P9={
I:this},0);A.Core.BL._Init.call(this.Gy={I:this},0);A.Core.BL._Init.call(this.Gx={
I:this},0);this.__proto__=C.SS;this.H(U0);this.V.R(Aog);this.Hx.Z(false);this.H6.
Z(false);this.Jz.Filter=1;this.HM.H(Aoh);this.HM.L(0x55FFFFFF);this.Pv.H(Aoi);this.
Pv.Jc(true);this.Pv.A6(0x14);this.VX.H(Aoj);this.VX.Jc(true);this.VX.A6(0x14);this.
VX.R(Alc);this.Q2.H(AsZ);this.Q2.Jc(true);this.Yn.H(Ax8);this.Yn.Jc(true);this.Yn.
R(Alc);this.P9.H(Ax9);this.P9.Jc(true);this.P9.A6(0x11);this.Gy.Filter=4;this.Gy.
Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HM,0);this.J(this.Pv,0);this.
J(this.VX,0);this.J(this.Q2,0);this.J(this.Yn,0);this.J(this.P9,0);this.Jz.BM=[this
,this.Bb5];this.Pv.S(A.aaL(A.fl.EK));this.VX.S(A.aaL(A.fl.EK));this.Q2.S(A.aaL(A.
fl.EK));this.Yn.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));this.Gy.BM=[this,this.
Al6];this.Gy.D1=[this,this.AiH];this.Gx.BM=[this,this.Al5];this.Gx.D1=[this,this.
Ait];this.FM=A._NewObject(C.Aeu,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ds;this.Av._Done();this.Jz._Done();this.HM._Done();this.Pv._Done();this.VX._Done(
);this.Q2._Done();this.Yn._Done();this.P9._Done();this.Gy._Done();this.Gx._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit(
);this.Jz._ReInit();this.HM._ReInit();this.Pv._ReInit();this.VX._ReInit();this.Q2.
_ReInit();this.Yn._ReInit();this.P9._ReInit();this.Gy._ReInit();this.Gx._ReInit(
);this.Pv.S(A.aaL(A.fl.EK));this.VX.S(A.aaL(A.fl.EK));this.Q2.S(A.aaL(A.fl.EK));
this.Yn.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Ds._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jz
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.ON={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Ben],[B=A._GetAutoObject(A.Device.Device),B.A88,B.BbD],0);
A.pe([this,this.Ben],this);},Du:function(){return 27;},Gl:function(aIndex){return this.
LanguageToString.BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(
A.Device.Device).AnD(E);},Ben:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.ON;this.BG.Set(0,0);this.BG.Set(1,1);this.BG.Set(2,5);this.BG.
Set(3,3);this.BG.Set(4,8);this.BG.Set(5,9);this.BG.Set(6,7);this.BG.Set(7,6);this.
BG.Set(8,10);this.BG.Set(9,2);this.BG.Set(10,11);this.BG.Set(11,12);this.BG.Set(
12,13);this.BG.Set(13,14);this.BG.Set(14,15);this.BG.Set(15,16);this.BG.Set(16,18
);this.BG.Set(17,17);this.BG.Set(18,4);this.BG.Set(19,20);this.BG.Set(20,21);this.
BG.Set(21,23);this.BG.Set(22,24);this.BG.Set(23,22);this.BG.Set(24,25);this.BG.Set(
25,26);this.BG.Set(26,27);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;
this.LanguageToString._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.
call(this);this.LanguageToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.LanguageToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Languages"};C.Rf={TemperatureUnitToString:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.TemperatureUnitToString.
BT(aIndex);},DZ:function(A7){return A7;},H5:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Axa(E);},Init:function(aArg
){var B;A.zX([this,this.BgV],[B=A._GetAutoObject(A.Device.Device),B.ArB,B.Atp],0
);A.pe([this,this.BgV],this);},BgV:function(G){this.Q=A._GetAutoObject(A.Device.
Device).TemperatureUnit;A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.TemperatureUnitToString={
I:this},0);this.__proto__=C.Rf;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.TemperatureUnitToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.AVl={Ajz:null,
AcC:null,KC:null,AP:null,A$:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.
Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.H(A.abN(this.
V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.KC.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([this.Background.
M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajz.H([this.Background.M[2],0,aSize[
0],aSize[1]]);this.AcC.H(this.Ajz.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
KC.L(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;this.
Hs=Ad;if(!!this.AX){var AlE=this.AX.Hv(Ad,6);var ApY=this.AX.CF(Ad,7);var Aue=this.
AX.I9(Ad,9);this.T(A._GetAutoObject(A.acj.KO).AC1(AlE));this.KC.R(A._GetAutoObject(
A.acj.KO).A6U(AlE));this.AcC.R(A._GetAutoObject(A.Device.Converter).Ak2(ApY));this.
AcC.L(A._GetAutoObject(A.acj.Assessment).XC(Aue));this.Ajz.L(A._GetAutoObject(A.
acj.Assessment).Qr(Aue));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,
aArg);A.acg.AL._Init.call(this.Ajz={I:this},0);A.acg.Text._Init.call(this.AcC={I:
this},0);A.acg.Text._Init.call(this.KC={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.AVl;this.V.H(
O8);this.AcC.L(A.jb.Text);this.KC.R(Ro);this.KC.L(A.jb.Text);this.AP.L(A.jb.Bc);
this.A$.H(Ax_);this.A$.L(A.jb.Bc);this.J(this.Ajz,0);this.J(this.AcC,0);this.J(this.
KC,0);this.J(this.AP,0);this.J(this.A$,0);this.AcC.S(A.aaL(A.fl.Af));this.KC.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Ajz._Done(
);this.AcC._Done();this.KC._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajz._ReInit();this.AcC._ReInit(
);this.KC._ReInit();this.AP._ReInit();this.A$._ReInit();this.AcC.S(A.aaL(A.fl.Af
));this.KC.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureListItem"
};C.Gc={AX:null,AR:null,Cq:null,AD:null,Afl:null,NQ:null,KQ:A.jV,Ll:null,AVK:true
,Hm:function(G){var B;var Gg=this.AD.G6;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zt(this.AX);Aa.Ch(Gg);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=
this.AD.M)[2]-B[0],this.AD.GO]));},N4:function(E){if(E===this.Ll)return;this.Ll=
E;this.AD.N4(E);},Zt:function(E){if(this.AX===E)return;if(!!this.AX)A.z9([this,this.
Ch],this.AX,0);this.AX=E;if(!!E)A.zV([this,this.Ch],E,0);A.pe([this,this.Ch],this
);},Ch:function(G){if(this.AVK===false)return;if(!!this.AX){this.AD.JB(this.AX.B_(
));this.AD.AbF(0,this.AD.AY-1);}else this.AD.JB(0);if((this.AD.AY>0)&&(this.FN()<
0))this.GT(0);if(this.FN()>=this.AD.AY){this.GT(0);this.AD.Gb(0);}if(this.AD.AY<=
0){this.NQ.Z(true);this.GT(-1);}else{this.NQ.Z(false);this.ABP(null,null);}},Fk:
function(G){var B;this.Afl.MB(this.AD.GO*this.AD.AY);this.Afl.MD((B=this.AD.M)[3
]-B[1]);this.Afl.MC(-this.AD.Br);},DE:function(G){if(this.AD.AY>0){switch(this.Cq.
CP){case 4:if(this.FN()>0)this.GT(this.FN()-1);break;case 5:if(this.FN()<(this.AD.
AY-1))this.GT(this.FN()+1);break;default:this.Cq.NM=true;}this.AD.HI(this.FN(),true
,null,null);}else if((this.Cq.CP!==4)&&(this.Cq.CP!==5))this.Cq.NM=true;},Zx:function(
E){if(A.aa0(this.AR,E))return;this.AR=E;this.AD.AbF(0,this.AD.AY);},GT:function(
E){this.AD.GT(E);this.AD.HI(E,true,null,null);},FN:function(){return this.AD.Gt;
},Dl:function(E){if(this.KQ===E)return;this.KQ=E;this.NQ.R(E);},ABP:function(AcZ
,E8){this.AD.ABP(AcZ,E8);},AT1:function(E){if(this.AVK===E)return;this.AVK=E;if(
E)A.pe([this,this.Ch],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.Core.BL._Init.call(this.Cq={I:this},0);A.Core.CM._Init.call(this.AD={I:this}
,0);C.Ay._Init.call(this.Afl={I:this},0);A.acg.Text._Init.call(this.NQ={I:this},
0);this.__proto__=C.Gc;this.H(U1);this.Ll=C.Ba;this.Cq.Filter=147;this.AD.A0(0x3F
);this.AD.H(U1);this.AD.Ae8(40);this.Afl.A0(0x3A);this.Afl.H(As0);this.NQ.A0(0x3F
);this.NQ.H(Ax$);this.NQ.Hn(10);this.NQ.KU(true);this.NQ.A6(0xA);this.NQ.L(A.jb.
Text);this.J(this.AD,0);this.J(this.Afl,0);this.J(this.NQ,0);this.Cq.BM=[this,this.
DE];this.Cq.D1=[this,this.DE];this.AD.Em=[this,this.Fk];this.AD.Hm=[this,this.Hm
];this.NQ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done(
);this.AD._Done();this.Afl._Done();this.NQ._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Cq._ReInit();this.AD._ReInit();this.
Afl._ReInit();this.NQ._ReInit();this.NQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NQ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::VertScrollList"};C.Ba={AX:null,Hs:-1,CQ:function(){this.Ch(this.Hs
);},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.
Hs%2)===1)this.Background.L(A.jb.CJ);else this.Background.L(A.jb.CU);}},Zt:function(
E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.ab5("%s",Aya);},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.
call(this);this.CQ();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.
AX)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GJ={
Bg:null,FE:null,DP:null,Fn:null,V5:null,Km:null,KQ:A.jV,AUm:0,AUn:0,Afm:false,CQ:
function(){if(A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(
A.Device.Device).Dw(0);A.pe([this,this.Bbh],this);}},Init:function(aArg){var B;A.
zX([this,this.Be3],[B=A._GetAutoObject(A.Device.Device),B.AEG,B.AIW],0);A.zV([this
,this.Aga],A._GetAutoObject(A.Device.Device).An,0);A.zV([this,this.AcH],A._GetAutoObject(
A.Device.Device).An,0);A.zX([this,this.BBy],[B=A._GetAutoObject(A.Device.Helper)
,B.U4,B.U7],0);A.pe([this,this.AcH],this);A.pe([this,this.A0O],this);A.pe([this,
this.AxC],this);},WF:function(G){this.Agx();var O;for(O=this.Km.Du()-1;O>=0;O=O-
1)switch(this.Km.C7(O)){case 0:this.AdS(A.aaR(A.acf.A5o),[this,this.Bom],0);break;
case 14:this.AdS(A.aaR(A.acf.BhA),[this,this.Bon],14);break;case 1:this.AdS(A.aaR(
A.acf.Temperature),[this,this.AT3],1);break;case 2:this.AdS(A.aaR(A.acf.Rating),[
this,this.AT2],2);break;case 3:this.AdS(A.aaR(A.acf.Afv),[this,this.AT4],3);break;
default:A.ab5("%s",Ayb);}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Ml(A.
aaR(A.acf.Biy));A._GetAutoObject(A.Device.Device).Dw(6);},Bbh:function(s){this.WF(
s);},DE:function(G){var D5=(A.Core.BL.isPrototypeOf(G)?G:null);var AfZ=this.Km.DZ(
A._GetAutoObject(A.Device.Device).Km);if(this.Afm)return;switch(D5.CP){case 6:{AfZ=
AfZ-1;if(AfZ<0)AfZ=this.Km.Du()-1;A._GetAutoObject(A.Device.Device).Zr(this.Km.C7(
AfZ));}break;case 7:{AfZ=AfZ+1;if(AfZ>=this.Km.Du())AfZ=0;A._GetAutoObject(A.Device.
Device).Zr(this.Km.C7(AfZ));}break;default:D5.NM=true;}},CC:function(G){if(this.
DP.Az8()){this.DP.Ac9();if(this.DP.Az8()===false)this.Bg.AT1(true);return;}else if(
this.Afm)this.AA9(this);if(!!this.Bg)this.Bg.AT1(true);},E4:function(G){if(!!this.
Bg)this.Bg.AT1(false);},AxC:function(G){var B;if(!!this.Bg)this.HP(this.Bg);this.
Bg=A._NewObject(C.AMF,0);this.Bg.H(Aok);this.Bg.Zt(A._GetAutoObject(A.Device.Device
).An);this.Bg.Zx([this,this.AcU]);if(!!this.FE)this.Bg.A9V([B=this.FE,B.A9q,B.A_O
]);this.A4z(this);this.J(this.Bg,0);if(this.Afm===false)this.Bb(this.Bg);this.Be3(
this);this.Bpu(this);},A9S:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.
Dr(this.A67());this.Ek.AR=[this,this.AcU];this.ALy(this);this.Ek.Ar(true);this.Bb(
this.Ek);this.Afm=true;},Bk3:function(G){var B;A._GetAutoObject(A.Device.Device).
Dw(0);if(!this.Bg)return;var Aa=(C.ACd.isPrototypeOf(B=this.Bg.AD.BjK(this.Bg.AD.
Gt))?B:null);if(!!Aa)A._GetAutoObject(A.Device.Helper).G8(Aa.Hs);else A._GetAutoObject(
A.Device.Helper).W.E6();this.Agj();},Agg:function(G){var F;if(!this.Fn)this.A6r(
this);else switch((F=this.Fn,F[1].call(F[0]))){case 19:break;case 0:this.A6r(this
);break;case 1:this.Biz(this);break;case 9:this.A6s(this);break;case 4:this.BiB(
this);break;case 6:this.BiC(this);break;case 8:this.BiE(this);break;case 2:this.
BiF(this);break;case 3:this.BiG(this);break;case 7:this.BiI(this);break;case 5:this.
BiJ(this);break;case 10:this.BiL(this);break;case 11:this.BiA(this);break;case 12:
this.BiD(this);break;case 13:this.A6x(this);break;case 14:this.A6t(this);break;case
18:this.A6u(this);break;case 15:this.A6v(this);break;case 16:this.BiH(this);break;
case 17:this.A6w(this);break;default:A.ab5("%s%e",AfD,(F=this.Fn,F[1].call(F[0])
));}},AcU:function(s){this.Agg(s);},Bmf:function(G){this.Dr(C.Kt);this.Ek.AR=null;
this.Afm=false;this.AcH(this);this.Bgn();this.N.T4.C4(255);this.N.T5.C4(255);this.
Bb(this.Bg);this.Ek.Ar(false);},Anq:function(G){A._GetAutoObject(C.A8).FB();},Dl:
function(E){if(this.KQ===E)return;this.KQ=E;this.A4z(this);},Abt:function(){switch(
A._GetAutoObject(A.Device.Device).Km){case 14:return C.ANf;case 2:return C.ANh;case
1:return C.ANi;case 3:return C.ANk;case 0:case 8:case 9:case 10:case 4:case 5:case
6:return C.Aqw;case 7:return C.ACc;case 12:return C.ACf;case 11:return C.ACb;case
13:return C.ACe;default:throw new Error(Aol);}},Abu:function(){switch(A._GetAutoObject(
A.Device.Device).Km){case 14:return C.APH;case 2:return C.ADx;case 1:return C.APJ;
case 3:return C.APL;case 4:return C.ADt;case 0:case 8:case 9:case 10:case 5:case
6:return C.Aq3;case 7:return C.ADv;case 12:return C.ADw;case 11:return C.ADu;case
13:return C.ADy;default:throw new Error(Aol);}},Be3:function(G){this.ATF(A._GetAutoObject(
A.Device.Device).Km);if(!!this.Bg){this.Bg.N4(this.Abt());this.Bpz(this);}},Bpz:
function(G){var B;if(!!this.FE)this.HP(this.FE);this.FE=(C.De.isPrototypeOf(B=A.
_NewObject(this.Abu(),0))?B:null);this.FE.H(IX);if(!!this.Bg)this.Bg.A9V([B=this.
FE,B.A9q,B.A_O]);this.J(this.FE,0);},Bk1:function(G){this.Q_(this);A._GetAutoObject(
A.Device.Device).Dw(0);},AT3:function(G){A._GetAutoObject(A.Device.Device).Zr(1);
},AT2:function(G){A._GetAutoObject(A.Device.Device).Zr(2);},AT4:function(G){A._GetAutoObject(
A.Device.Device).Zr(3);},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(
A._GetAutoObject(A.Device.Helper).Mv());},A0O:function(s){this.Q_(s);},HQ:function(
G){if(this.Afm){this.ALy(this);return;}this.N.C2(A.aaL(A.ach.E2));this.N.Cw(A.aaL(
A.ach.ADP));this.N.C3(A.aaL(A.ach.Options));this.N.CE=[this,this.Anq];this.N.Cf=[
this,this.A9S];this.N.Ca=[this,this.Bbh];this.N.Hy(A.jV);this.N.Fc(A.jV);this.N.
CS(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B_()){this.N.I$.C4(100);this.N.
Cf=null;}else this.N.I$.C4(255);},AoC:function(s){this.HQ(s);},AdS:function(Aig,
Aih,AJv){A._GetAutoObject(C.BS).ABO(Aig,Aih,[this,this.A9k,this.ATF],AJv);},Aga:
function(G){this.A4z(this);if(this.Afm)A.pe([this,this.ALy],this);},Agj:function(
){A._GetAutoObject(C.A8).Cd(9);},A4z:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QK()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dl(
A.aaR(A.acf.AEv));else if(A._GetAutoObject(A.Device.Helper).Arg(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dl(this.KQ);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).AC_(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dl(A.aaR(A.acf.AOe));else this.Bg.Dl(A.aaR(
A.acf.AOd));}else this.Bg.Dl(A.aaR(A.acf.ASn));},AEW:function(G){var F;if(!!this.
Fn)(F=this.Fn,F[2].call(F[0],0));},AwT:function(E){if(A.aaZ(this.Fn,E))return;if(
!!this.Fn)A.z$([this,this.A0X],this.Fn,0);this.Fn=E;if(!!E)A.zX([this,this.A0X],
this.Fn,0);if(!!E)A.pe([this,this.A0X],this);},AE2:function(G){var F;if(!!this.Fn
)(F=this.Fn,F[2].call(F[0],1));},AwY:function(G){var F;if(!!this.Fn)(F=this.Fn,F[
2].call(F[0],2));},ATJ:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],
3));},ATX:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],7));},ATY:function(
G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],5));},BiF:function(G){if(!this.Bg
)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.
Qp(1);}},I5:function(Aig,Aih,Ao0){A._GetAutoObject(C.BS).ABO(Aig,Aih,[this,this.
A9l,this.ATG],Ao0);},Bmp:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0
],4));},BiB:function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.
Helper).G8(this.Bg.FN());this.DP.BB0();}},Bmq:function(G){var F;if(!!this.Fn)(F=
this.Fn,F[2].call(F[0],6));},BiC:function(G){if(!this.Bg)return;if(this.Ne()){A.
_GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.BB1();}},BiE:function(G
){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(1024);}},BnC:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(
F[0],8));},Akv:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],9));},BiG:
function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(
this.Bg.FN());this.DP.Qp(2);}},A6r:function(G){if(!this.Bg)return;if(this.Ne()){
A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());if(A._GetAutoObject(A.Device.
Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A3(66,true,A.jV,0,null);else this.BBL();}},Biz:function(G){if(!this.
Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.
DP.Qp(16);}},BBL:function(){A._GetAutoObject(C.A8).Cd(94);},BiI:function(G){if(!
this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());
this.DP.Qp(4);}},BiJ:function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(8);}},A6s:function(G){var B;if(!this.
Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());if(this.
Afm){A.zX([this,this.AAz],[B=this.DP,B.SF,B.E5],0);this.AA9(this);}this.DP.Ac9();
}},AuJ:function(Aig,Aih,ByJ){A._GetAutoObject(C.BS).Bhv(Aig,Aih,ByJ);},ALy:function(
G){this.N.Hy(A.jV);this.N.CS(A.jV);this.N.C2(A.aaL(A.ach.AeA));this.N.CE=[this,this.
Bmf];this.N.T4.C4(100);this.N.T5.C4(100);var Gh=A._GetAutoObject(A.Device.Device
).An.B_();if(Gh<=0){this.N.Cw(null);this.N.C3(null);this.N.Cf=null;this.N.Ca=null;
this.N.WO=false;this.N.ZF=false;}else if(Gh===1){this.N.Cw(null);this.N.C3(A.aaL(
A.ach.AeB));this.N.Cf=null;this.N.Ca=[this,this.AcU];this.N.WO=false;this.N.ZF=false;
}else{this.N.Cw(A.aaL(A.ach.Aq8));this.N.C3(A.aaL(A.ach.Are));this.N.Cf=[this,this.
A3T];this.N.Ca=[this,this.A3U];this.N.WO=true;this.N.ZF=true;}},A3T:function(G){
if(!this.Bg)return;if(this.Bg.FN()<(A._GetAutoObject(A.Device.Device).An.B_()-1)
)this.Bg.GT(this.Bg.FN()+1);},A3U:function(G){if(!this.Bg)return;if(this.Bg.FN()>
0)this.Bg.GT(this.Bg.FN()-1);},Bpu:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).An.LV(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bg.GT(Bf);A.ab5("%s",Aom);}}},Ne:function(){return this.
Bg.FN()>=0;},Aki:function(){return A._GetAutoObject(A.Device.Device).An.B_()>5;}
,Agx:function(){this.Bhw();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.AUL),[this,this.
A9S]);A._GetAutoObject(C.BS).Fz();},AcH:function(G){if(this.Afm)this.ALy(this);else
this.HQ(this);},AA9:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E$();var Ay$=aFilter.DL(1,4);if(!!Ay$){aFilter.Nq(Ay$);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GT(0);}},BG3:function(s){this.
AA9(s);},AAz:function(G){var B;if(!this.DP.EN&&this.Afm){A.z$([this,this.AAz],[B=
this.DP,B.SF,B.E5],0);this.AA9(this);}},Bod:function(G){var F;if(!!this.Fn)(F=this.
Fn,F[2].call(F[0],10));},BiL:function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(256);}},A3J:function(G){var F;this.
ATG((F=this.Fn,F[1].call(F[0])));A.pe([this,this.AoC],this);},A0X:function(s){this.
A3J(s);},Bmm:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],11));},BiA:
function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(
this.Bg.FN());this.DP.Qp(4096);}},BiD:function(G){if(!this.Bg)return;if(this.Ne(
)){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(16384);}},A6x:function(
G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.BBM();}},BBM:function(){A._GetAutoObject(C.A8).Ab_(75);},A6t:function(
G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(32768);}},A6v:function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(65536);}},BiH:function(G){if(!this.
Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.
DP.Qp(131072);}},Bhw:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Arg(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BS).AaV(A.aaR(A.acf.ACi));else A._GetAutoObject(C.BS).TC(A.
aaR(A.acf.ACi),[this,this.Bk1]);A._GetAutoObject(C.BS).TC(A.aaR(A.acf.AkU),[this
,this.Bk3]);A._GetAutoObject(C.BS).Fz();},A6w:function(G){if(!this.Bg)return;if(
this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(128);}}
,BBy:function(G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Ch],this);},A6u:function(
G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(524288);}},BiK:function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(262144);}},ATF:function(E){if(this.
AUm===E)return;this.AUm=E;A.abo([this,this.A9k,this.ATF],0);},ATG:function(E){if(
this.AUn===E)return;this.AUn=E;A.abo([this,this.A9l,this.ATG],0);},A67:function(
){return C.Yw;},Bgn:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Nq(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Bom:function(G){A._GetAutoObject(A.Device.Device).Zr(0);
},Bon:function(G){A._GetAutoObject(A.Device.Device).Zr(14);},A9k:function(){return this.
AUm;},A9l:function(){return this.AUn;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADx._Init.call(this.V5={I:this},0);C.Km._Init.call(this.Km={I:this},0);
this.__proto__=C.GJ;this.Background.H(Ce);this.N.Z(true);this.N.OS(true);this.N.
OT(true);this.Ek.A_l(A.jb.CU);this.Ek.A_m(A.jb.Text);this.Dr(C.Kt);this.V5.H(IX);
this.KQ=A.aaR(A.acf.AEv);this.J(this.V5,0);this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V5._Done();this.Km._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V5._ReInit();
this.Km._ReInit();this.Dl(A.aaR(A.acf.AEv));this.CQ();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Km)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ACd={AP:null,A$:null,UM:null,AcA:
null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UM.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A$.H([
this.UM.M[2]-1,0,this.UM.M[2]+1,aSize[1]]);this.AcA.H([this.UM.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UM.L(this.V.AQ);this.AcA.L(this.
V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){this.T(this.
AX.CF(Ad,1).toFixed());this.UM.R(this.AX.CF(Ad,2).toFixed());this.AcA.R(this.AX.
CF(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.Text._Init.call(this.UM={I:this},0);A.acg.Text._Init.call(this.AcA={I:this
},0);this.__proto__=C.ACd;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.UM.L(A.jb.Text
);this.AcA.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.UM,0);this.
J(this.AcA,0);this.UM.S(A.aaL(A.fl.Af));this.AcA.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.UM.
_Done();this.AcA._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.UM._ReInit();this.AcA._ReInit(
);this.UM.S(A.aaL(A.fl.Af));this.AcA.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad$={OD:null,ST:null,Mp:null,Init:function(aArg){var B;A.zX([this,this.A3p],[
B=A._GetAutoObject(A.Device.Device),B.Awe,B.AyP],0);A.zX([this,this.Adz],[B=A._GetAutoObject(
A.Device.Device),B.Awb,B.AyO],0);A.pe([this,this.Adz],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.ST.R(A._GetAutoObject(A.Device.Device).Aa6.toFixed()+As1
);this.OD.Z(A._GetAutoObject(A.Device.Device).AmF);},Adz:function(G){this.Am();}
,M0:function(G){A._GetAutoObject(C.A8).FB();},A3p:function(G){if(A._GetAutoObject(
A.Device.Device).AmF===false){this.OD.Z(false);A._GetAutoObject(C.A8).FB();}else
this.OD.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.OD={I:this},0);A.acg.Text._Init.call(this.ST={I:this},0);C.Mp._Init.call(
this.Mp={I:this},0);this.__proto__=C.Ad$;var B;this.Background.L(A.jb.CU);this.N.
Z(true);this.N.CS(A.aaR(A.acf.Ok));this.OD.H(Xi);this.OD.R(A.aaR(A.acf.OD));this.
OD.L(A.jb.Text);this.OD.Z(false);this.ST.H(As2);this.ST.R(As3);this.ST.L(A.jb.Text
);this.Mp.H(As4);this.J(this.OD,0);this.J(this.ST,0);this.J(this.Mp,0);this.N.Ca=[
this,this.M0];this.OD.S(A.aaL(A.fl.Af));this.ST.S(A.aaL(A.fl.Af));this.Mp.Au([B=
A._GetAutoObject(A.Device.Device),B.Awb,B.AyO]);this.Mp.A_C([B=A._GetAutoObject(
A.Device.Device),B.Awe,B.AyP]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.OD._Done();this.ST._Done();this.Mp._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.OD._ReInit();this.ST._ReInit();this.Mp._ReInit(
);this.N.CS(A.aaR(A.acf.Ok));this.OD.R(A.aaR(A.acf.OD));this.OD.S(A.aaL(A.fl.Af)
);this.ST.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.OD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mp={Ad6:null,Ad7:null,IE:function(G){var F;if(!!this.Q){this.A2w();var Ada=(
F=this.Q,F[1].call(F[0]));if(Ada>20)this.Oz.L(A.jb.E1);else this.Oz.L(A.jb.Gj);this.
Oz.L((this.Oz.AQ&0x00FFFFFF)|(this.AlM(Ada,0,20)<<24));this.TJ.L((this.TJ.AQ&0x00FFFFFF
)|(this.AlM(Ada,21,40)<<24));this.TK.L((this.TK.AQ&0x00FFFFFF)|(this.AlM(Ada,41,
60)<<24));this.Ad6.L((this.Ad6.AQ&0x00FFFFFF)|(this.AlM(Ada,61,80)<<24));this.Ad7.
L((this.Ad7.AQ&0x00FFFFFF)|(this.AlM(Ada,81,100)<<24));}},A2w:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U_=this.Ad7;else if((F=this.Q,F[
1].call(F[0]))>60)this.U_=this.Ad6;else if((F=this.Q,F[1].call(F[0]))>40)this.U_=
this.TK;else if((F=this.Q,F[1].call(F[0]))>20)this.U_=this.TJ;else this.U_=this.
Oz;}else this.U_=null;},_Init:function(aArg){C.OB._Init.call(this,aArg);A.acg.AL.
_Init.call(this.Ad6={I:this},0);A.acg.AL._Init.call(this.Ad7={I:this},0);this.__proto__=
C.Mp;this.H(Aon);this.NU.H(Aon);this.Oz.H(As5);this.TJ.H(Ald);this.TK.H(Ayc);this.
Ad6.H(Ayd);this.Ad6.L(A.jb.E1);this.Ad7.H(Aye);this.Ad7.L(A.jb.E1);this.J(this.Ad6
,0);this.J(this.Ad7,0);this.NU.Ax(A.aaL(A.ach.AM0));},_Done:function(){this.__proto__=
C.OB;this.Ad6._Done();this.Ad7._Done();C.OB._Done.call(this);},_ReInit:function(
){C.OB._ReInit.call(this);this.Ad6._ReInit();this.Ad7._ReInit();},_Mark:function(
D){var B;C.OB._Mark.call(this,D);if((B=this.Ad6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AVg={N$:null,Lu:null,Ak8:null,Z0:null,ZZ:null,CQ:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.Device),B.
AS0,B.A0H],0);A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.Device),B.AS3,B.
A0J],0);A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.Device),B.A9A,B.BbO],0
);A.pe([this,this.ApP],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABB(this);this.BCT(this);this.DJ(this);},BBa:function(G){A._GetAutoObject(
A.Device.Device).AsI();},ApP:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Z0.Z(false);break;case 4:{var A4b;if(!A._GetAutoObject(A.Device.Device).Afr)A4b=
0;else A4b=((A._GetAutoObject(A.Device.Device).AxT*100)/A._GetAutoObject(A.Device.
Device).Afr)|0;this.Z0.Bx(A4b);this.Z0.Z(true);}break;default:A.ab5("%s%e",As6,A.
_GetAutoObject(A.Device.Device).SyncState);}},BCT:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CJ);this.Lu.L(A.jb.Text);this.N$.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gj);this.Lu.L(A.jb.Bm);this.N$.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",As6,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C2(null);this.N.CE=null;this.N.CS(A.jV);this.N.Ca=null;}break;
case 7:{this.N.C2(null);this.N.CE=null;this.N.CS(A.aaR(A.acf.Ok));this.N.Ca=[this
,this.BBa];}break;default:A.ab5("%s%e",As6,A._GetAutoObject(A.Device.Device).SyncState
);}},ABB:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lu.R(A.aaR(A.acf.Bqj));break;case 1:this.Lu.R(A.aaR(A.acf.Bqg));break;
case 2:this.Lu.R(A.aaR(A.acf.Bqd));break;case 3:this.Lu.R(A.aaR(A.acf.Bqh));break;
case 4:this.Lu.R((A.aaR(A.acf.Bqf)+Ayf)+A._GetAutoObject(A.Device.Helper).MI(A._GetAutoObject(
A.Device.Helper).MI(A.aaR(A.acf.BoS),O9,A._GetAutoObject(A.Device.Device).AxT.toFixed(
)),Ayg,A._GetAutoObject(A.Device.Device).Afr.toFixed()));break;case 5:this.Lu.R(
A.aaR(A.acf.Bqi));break;case 7:this.Lu.R(A.aaR(A.acf.Bqe));break;default:A.ab5("%s%e"
,As6,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.N$={I:this},0);C.CG._Init.call(this.Lu={I:this
},0);A.acg.Ap._Init.call(this.Ak8={I:this},0);A.acr.ADA._Init.call(this.Z0={I:this
},0);A.acr.ADB._Init.call(this.ZZ={I:this},0);this.__proto__=C.AVg;this.N.Z(true
);this.N$.H(AWc);this.N$.R(A.aaR(A.acf.N$));this.Lu.A0(0x3F);this.Lu.H(AWd);this.
Lu.A6(0x12);this.Ak8.H(AWe);this.Ak8.L(A.jb.AV);this.Z0.H(AWf);this.Z0.Ar(false);
this.Z0.Bx(0);this.ZZ.Bn9(0);this.ZZ.A_1(0);this.ZZ.A_Z(A.jb.AV);this.ZZ.A_Y(0);
this.ZZ.AGb(AHv);this.J(this.N$,0);this.J(this.Lu,0);this.J(this.Ak8,0);this.J(this.
Z0,0);this.N$.S(A.aaL(A.fl.EK));this.N$.AZ(A.aaL(A.fl.Af));this.N$.Cr(A.aaL(A.fl.
Ak));this.Lu.S(A.aaL(A.fl.Af));this.Lu.AZ(A.aaL(A.fl.Ak));this.Lu.Cr(A.aaL(A.fl.
Bh));this.Ak8.Ax(A.aaL(A.ach.AQ5));this.Z0.OnSetAppearance(this.ZZ);this.ZZ.A_0(
A.aaL(A.ach.NX));this.ZZ.A_X(A.aaL(A.ach.NX));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N$._Done();this.Lu._Done();this.Ak8._Done();this.Z0._Done(
);this.ZZ._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N$._ReInit();this.Lu._ReInit();this.Ak8._ReInit();this.Z0._ReInit();this.
ZZ._ReInit();this.N$.R(A.aaR(A.acf.N$));this.N$.S(A.aaL(A.fl.EK));this.N$.AZ(A.aaL(
A.fl.Af));this.N$.Cr(A.aaL(A.fl.Ak));this.Lu.S(A.aaL(A.fl.Af));this.Lu.AZ(A.aaL(
A.fl.Ak));this.Lu.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lu)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Aq1={_Init:function(aArg){C.ADq._Init.call(this,aArg
);this.__proto__=C.Aq1;this.A_o(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,BG:A.abi(3,0,{0:2,2:1}),Du:function(
){return 3;},C7:function(aIndex){if(aIndex>=3)return-1;return this.BG.Get(aIndex
);},Gl:function(aIndex){return this.GenderToString.BT(this.C7(aIndex));},DZ:function(
A7){var O=0;while(O<3){if(this.BG.Get(O)===A7)return O;O=O+1;}return-1;},H5:function(
){var O=0;var max=-1;while(O<3){if(this.BG.Get(O)>max)max=this.BG.Get(O);O=O+1;}
return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.JY(
E);},L2:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Af3],[B=this.Animal,B.WD,B.JY],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af3],[B=this.Animal,B.WD,B.JY],0);A.pe([this,this.Af3],this);},Af3:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B$,
this.Cb],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.BG=[]).__proto__=C.Gender.BG;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,BG:A.abi(4,0,{1:1,2:2,3:3}),Du:function(){return 4;},C7:function(aIndex){if(
aIndex>=4)return-1;return this.BG.Get(aIndex);},Gl:function(aIndex){return this.
BirthTypeToString.BT(this.C7(aIndex));},DZ:function(A7){var O=0;while(O<4){if(this.
BG.Get(O)===A7)return O;O=O+1;}return-1;},H5:function(){var O=0;var max=-1;while(
O<4){if(this.BG.Get(O)>max)max=this.BG.Get(O);O=O+1;}return max;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akw(E);},A1M:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B$,this.
Cb],0);},L2:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1M],[B=this.Animal,B.ASF,B.Akw],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1M],[B=this.Animal,B.ASF,B.Akw],0);A.pe([this,this.A1M],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.BG=[]).__proto__=C.BirthType.BG;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acr:null,Du:
function(){return A._GetAutoObject(A.Device.Helper).Ad1.MH;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Ad1.MH)return-1;return A._GetAutoObject(
A.Device.Helper).Ad1.Get(aIndex);},Gl:function(aIndex){return this.Acr.BT(this.C7(
aIndex));},DZ:function(A7){var O=0;while(O<A._GetAutoObject(A.Device.Helper).Ad1.
MH){if(A._GetAutoObject(A.Device.Helper).Ad1.Get(O)===A7)return O;O=O+1;}return-
1;},H5:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UJ.
MH){if(A._GetAutoObject(A.Device.Helper).UJ.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UJ.Get(O);O=O+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
Animal)this.Animal.EC(E);},A1F:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B$,this.Cb],0);},L2:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1F],[B=this.Animal,B.PT,B.EC],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1F],[B=this.Animal,B.PT,B.EC],0);A.pe([
this,this.A1F],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acr={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acr._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acr._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUX={Init:function(aArg){var B;A.pe([this,this.AfH],this);A.zX([this,this.AfH
],[B=A._GetAutoObject(A.Device.Device),B.ArB,B.Atp],0);},A4g:function(G){A._GetAutoObject(
A.Device.Device).A3(38,true,A.jV,0,[this,this.Bb6]);},A3R:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).Asu(this);},A15:function(G){var F;if(this.A_===1){var BP=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlU)this.D7=this.AlU;if(this.D7<A._GetAutoObject(
A.Device.Device).AcG)this.D7=A._GetAutoObject(A.Device.Device).AcG;if(this.DW!==
BP){if(!!this.J1)(F=this.J1,F[2].call(F[0],this.D7));A.abo(this.J1,0);}}if(this.
A_===2){var BP=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BP){if(!!this.J0)(F=this.J0,F[2].call(F[0],this.DW));A.abo(this.J0,0);
}}this.DJ(this);this.Am();},A2F:function(G){var F;if(this.A_===1){var BP=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP){if(!!this.
J1)(F=this.J1,F[2].call(F[0],this.D7));A.abo(this.J1,0);}}if(this.A_===2){var BP=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlP)this.DW=this.AlP;if(this.DW!==BP){
if(!!this.J0)(F=this.J0,F[2].call(F[0],this.DW));A.abo(this.J0,0);}}this.DJ(this
);this.Am();},GH:function(G){this.PM.R(AHw+A._GetAutoObject(A.Device.Converter).
Ak2(this.D7));this.PN.R(AHw+A._GetAutoObject(A.Device.Converter).Ak2(this.DW));this.
Sz.R(A._GetAutoObject(A.acj.Temperature).AlN());},A2y:function(Atw){if(Atw===1)return this.
PM;else if(Atw===2)return this.PN;else return null;},_Init:function(aArg){C.Acp.
_Init.call(this,aArg);this.__proto__=C.AUX;this.AlP=5000;this.AlU=3000;this.T(A.
aaR(A.acf.Arr));this.Background.H(AfE);this.V.H(BD);this.V.R(A.aaR(A.acf.AG8));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Acp._ReInit.call(this);this.T(
A.aaR(A.acf.Arr));this.V.R(A.aaR(A.acf.AG8));},_className:"Application::SettingsItemThresholdsTemp"
};C.EB={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.EB;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CJ);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa9:null,Abb:null,Aa$:
null,Background:null,Aa8:null,Aba:null,Aa_:null,AjG:null,Arw:null,VP:null,A5:0,BAR:
function(G){if(this.AjG.CP===6){if(this.A5===1)this.AnJ(2);else if(this.A5===2)this.
AnJ(3);else this.AnJ(1);}else if(this.AjG.CP===7){if(this.A5===3)this.AnJ(2);else
if(this.A5===2)this.AnJ(1);else this.AnJ(3);}},AnJ:function(E){if(this.A5===E)return;
this.A5=E;switch(this.A5){case 3:this.Background.H(this.Aa8.M);break;case 2:this.
Background.H(this.Aba.M);break;case 1:this.Background.H(this.Aa_.M);break;default:
this.Background.H(Aoo);}},I3:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hp._Init.
call(this.Aa9={I:this},0);A.acg.Hp._Init.call(this.Abb={I:this},0);A.acg.Hp._Init.
call(this.Aa$={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aeq._Init.call(this.Aa8={I:this},0);A.acg.Aeq._Init.call(this.Aba={I:this},0);A.
acg.Aeq._Init.call(this.Aa_={I:this},0);A.Core.BL._Init.call(this.AjG={I:this},0
);A.Core.BL._Init.call(this.Arw={I:this},0);A.Graphics.AMR._Init.call(this.VP={I:
this},0);this.__proto__=C.Rating;this.H(AWg);this.Aa9.H(AHx);this.Aa9.L(A.jb.Text
);this.Aa9.AnH(Ale);this.Aa9.Nn(3);this.Aa9.Z(true);this.Abb.H(AHy);this.Abb.L(A.
jb.Text);this.Abb.AnH(Ale);this.Abb.Nn(3);this.Abb.Z(true);this.Aa$.H(AHz);this.
Aa$.L(A.jb.Text);this.Aa$.AnH(Ale);this.Aa$.Nn(3);this.Aa$.Z(true);this.Background.
H(Aoo);this.Background.L(A.jb.AV);this.Aa8.H(AHx);this.Aa8.L(A.jb.E1);this.Aa8.AnH(
Ale);this.Aa8.Z(true);this.Aba.H(AHy);this.Aba.L(A.jb.H_);this.Aba.AnH(Ale);this.
Aba.Z(true);this.Aa_.H(AHz);this.Aa_.L(A.jb.Gj);this.Aa_.AnH(Ale);this.Aa_.Z(true
);this.AjG.Filter=147;this.Arw.Filter=1;this.VP.BmH(360);this.VP.BnX(22);this.VP.
Bn7(2);this.J(this.Aa9,0);this.J(this.Abb,0);this.J(this.Aa$,0);this.J(this.Background
,0);this.J(this.Aa8,0);this.J(this.Aba,0);this.J(this.Aa_,0);this.Aa9.Zy(this.VP
);this.Abb.Zy(this.VP);this.Aa$.Zy(this.VP);this.Background.Ax(A.aaL(A.ach.NW));
this.Aa8.Zy(this.VP);this.Aba.Zy(this.VP);this.Aa_.Zy(this.VP);this.AjG.BM=[this
,this.BAR];this.Arw.BM=[this,this.I3];},_Done:function(){this.__proto__=A.Core.P;
this.Aa9._Done();this.Abb._Done();this.Aa$._Done();this.Background._Done();this.
Aa8._Done();this.Aba._Done();this.Aa_._Done();this.AjG._Done();this.Arw._Done();
this.VP._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa9._ReInit();this.Abb._ReInit();this.Aa$._ReInit();this.Background.
_ReInit();this.Aa8._ReInit();this.Aba._ReInit();this.Aa_._ReInit();this.AjG._ReInit(
);this.Arw._ReInit();this.VP._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abb)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aba).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asw={Akk:null,Asg:null,Background:null,TW:null,TQ:null,AbX:null,AbW:null,AbV:
null,Acv:null,Acu:null,Act:null,Ack:null,Acj:null,AbQ:null,AbP:null,Aca:null,Ab$:
null,AqC:null,Init:function(aArg){},BkD:function(G){this.AbX.R(AWh);this.AbW.R(A.
jV);this.AbV.R(A.jV);this.Acv.R(AWi);this.Acu.R(A.jV);this.Act.R(A.jV);this.Ack.
R(A.jV);this.Acj.R(A.jV);this.AbQ.R(A.jV);this.AbP.R(A.jV);this.Aca.R(A.jV);this.
Ab$.R(A.jV);},BoA:function(G){this.TQ.Z(true);this.TW.Z(true);var IG=this.In();if(
!IG)return;this.TW.R(IG.GetFPS().toFixed()+AHA);this.TQ.R(AWj);this.TQ.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akk={I:this},0);A.Core.Timer._Init.call(this.Asg={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TW={I:this},0);A.acg.
Text._Init.call(this.TQ={I:this},0);A.acg.Text._Init.call(this.AbX={I:this},0);A.
acg.Text._Init.call(this.AbW={I:this},0);A.acg.Text._Init.call(this.AbV={I:this}
,0);A.acg.Text._Init.call(this.Acv={I:this},0);A.acg.Text._Init.call(this.Acu={I:
this},0);A.acg.Text._Init.call(this.Act={I:this},0);A.acg.Text._Init.call(this.Ack={
I:this},0);A.acg.Text._Init.call(this.Acj={I:this},0);A.acg.Text._Init.call(this.
AbQ={I:this},0);A.acg.Text._Init.call(this.AbP={I:this},0);A.acg.Text._Init.call(
this.Aca={I:this},0);A.acg.Text._Init.call(this.Ab$={I:this},0);A.acg.AL._Init.call(
this.AqC={I:this},0);this.__proto__=C.Asw;this.H(AcP);this.Ar(false);this.Akk.PV(
2000);this.Akk.WH(1);this.Akk.Ar(true);this.Asg.Ar(true);this.Background.A0(0x3F
);this.Background.H(AcP);this.Background.L(0x78000000);this.TW.H(AWk);this.TW.A6(
0x14);this.TW.R(A.jV);this.TW.L(0xFFFFFC00);this.TW.Z(false);this.TQ.H(AWl);this.
TQ.A6(0x11);this.TQ.R(A.jV);this.TQ.Z(false);this.AbX.H(AWm);this.AbX.A6(0x11);this.
AbX.R(A.jV);this.AbW.H(AHB);this.AbW.A6(0x11);this.AbW.R(A.jV);this.AbV.H(As7);this.
AbV.A6(0x14);this.AbV.R(A.jV);this.Acv.H(AHC);this.Acv.A6(0x11);this.Acv.R(A.jV);
this.Acu.H(AHD);this.Acu.A6(0x11);this.Acu.R(A.jV);this.Act.H(Ayh);this.Act.A6(0x14
);this.Act.R(A.jV);this.Ack.H(AHE);this.Ack.A6(0x11);this.Ack.R(A.jV);this.Acj.H(
Ayi);this.Acj.A6(0x14);this.Acj.R(A.jV);this.AbQ.H(AWn);this.AbQ.A6(0x11);this.AbQ.
R(A.jV);this.AbP.H(AWo);this.AbP.A6(0x14);this.AbP.R(A.jV);this.Aca.H(AWp);this.
Aca.A6(0x11);this.Aca.R(A.jV);this.Ab$.H(AWq);this.Ab$.A6(0x14);this.Ab$.R(A.jV);
this.AqC.H(AHF);this.J(this.Background,0);this.J(this.TW,0);this.J(this.TQ,0);this.
J(this.AbX,0);this.J(this.AbW,0);this.J(this.AbV,0);this.J(this.Acv,0);this.J(this.
Acu,0);this.J(this.Act,0);this.J(this.Ack,0);this.J(this.Acj,0);this.J(this.AbQ,
0);this.J(this.AbP,0);this.J(this.Aca,0);this.J(this.Ab$,0);this.J(this.AqC,0);this.
Akk.ME=[this,this.BkD];this.Asg.ME=[this,this.BoA];this.TW.S(A.aaL(A.fl.Ak));this.
TQ.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.
AbV.S(A.aaL(A.fl.Ak));this.Acv.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.
Act.S(A.aaL(A.fl.Ak));this.Ack.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.
AbQ.S(A.aaL(A.fl.Ak));this.AbP.S(A.aaL(A.fl.Ak));this.Aca.S(A.aaL(A.fl.Ak));this.
Ab$.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akk._Done();this.Asg._Done();this.Background._Done();this.TW._Done();this.TQ.
_Done();this.AbX._Done();this.AbW._Done();this.AbV._Done();this.Acv._Done();this.
Acu._Done();this.Act._Done();this.Ack._Done();this.Acj._Done();this.AbQ._Done();
this.AbP._Done();this.Aca._Done();this.Ab$._Done();this.AqC._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akk._ReInit();this.
Asg._ReInit();this.Background._ReInit();this.TW._ReInit();this.TQ._ReInit();this.
AbX._ReInit();this.AbW._ReInit();this.AbV._ReInit();this.Acv._ReInit();this.Acu.
_ReInit();this.Act._ReInit();this.Ack._ReInit();this.Acj._ReInit();this.AbQ._ReInit(
);this.AbP._ReInit();this.Aca._ReInit();this.Ab$._ReInit();this.AqC._ReInit();this.
TW.S(A.aaL(A.fl.Ak));this.TQ.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.AbW.
S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));this.Acv.S(A.aaL(A.fl.Ak));this.Acu.
S(A.aaL(A.fl.Ak));this.Act.S(A.aaL(A.fl.Ak));this.Ack.S(A.aaL(A.fl.Ak));this.Acj.
S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));this.AbP.S(A.aaL(A.fl.Ak));this.Aca.
S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asg).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Act)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aca)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab$)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGQ={FM:null,Dm:null,Av:null,Jz:null,HM:null,Uk:null,Bc:null,So:null,Gy:null
,Gx:null,FY:0,A_:0,Bkb:false,Init:function(aArg){},Ai:function(Ae){C.Ds.Ai.call(
this,Ae);this.Hx.Z(false);this.H6.Z(false);if(!!this.Dm){this.So.R(this.Av.Format(
AWr));this.Uk.R(this.Av.Format(MM));}if(this.A_===1){this.HM.Z(true);this.HM.H(this.
So.M);this.HM.L(A.jb.Bm);this.So.L(this.Background.AQ);this.Uk.L(A.jb.Bm);}else if(
this.A_===2){this.HM.Z(true);this.HM.H(this.Uk.M);this.HM.L(A.jb.Bm);this.So.L(A.
jb.Bm);this.Uk.L(this.Background.AQ);}else{this.HM.Z(false);this.So.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Uk.L(this.V.AQ);}},Qu:function(G){if(this.FI===1)A.pe([
this,this.Vd],this);else if(this.FI===4)A.pe([this,this.AiH],this);else if(this.
FI===5)A.pe([this,this.Ait],this);C.Ds.Qu.call(this,G);},Kg:function(G){switch(this.
A_){case 0:C.Ds.Kg.call(this,G);break;case 2:break;default:this.Ady(this);}},Kb:
function(G){switch(this.A_){case 0:C.Ds.Kb.call(this,G);break;default:this.Ais(this
);}},AdA:function(G){var F;if(!!this.Dm)this.Ur((F=this.Dm,F[1].call(F[0])));},Ab7:
function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdA],this.Dm
,0);this.Dm=E;if(!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA],this);
},Ur:function(E){if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.FY);this.
Am();},Ady:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Vd],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},Vd:function(G){this.Ex(this.A_+1);},Al6:
function(G){this.FI=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiH],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},Al5:function(G){this.FI=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Ait],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiH:function(G){
var B;var F;var BP=this.FY;if(this.A_===1)this.Av.AnC(this.Av.AjU+1);if(this.A_===
2)this.Av.AnF(this.Av.Av6+1);this.Av.AnI(0);this.Ur(((B=(this.Av.JW()|0))<0)?B+0x100000000:
B);if(this.FY!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FY));A.abo(this.
Dm,0);}},Ait:function(G){var B;var F;var BP=this.FY;if(this.A_===1)this.Av.AnC(this.
Av.AjU-1);if(this.A_===2)this.Av.AnF(this.Av.Av6-1);this.Av.AnI(0);this.Ur(((B=(
this.Av.JW()|0))<0)?B+0x100000000:B);if(this.FY!==BP){if(!!this.Dm)(F=this.Dm,F[
2].call(F[0],this.FY));A.abo(this.Dm,0);}},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeB));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vd];}break;case 2:{(F=this.
N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am3
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){
var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EO;this.Bkb=true;
if((this.A_<0)||(this.A_>2))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.
Bw=!!this.A_;this.Am();},Ais:function(G){if(this.A_>1)this.Ex(this.A_-1);},_Init:
function(aArg){C.Ds._Init.call(this,aArg);A.Core.Bs._Init.call(this.Av={I:this},
0);A.Core.BL._Init.call(this.Jz={I:this},0);A.acg.AL._Init.call(this.HM={I:this}
,0);A.acg.Text._Init.call(this.Uk={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.So={I:this},0);A.Core.BL._Init.call(this.Gy={I:this
},0);A.Core.BL._Init.call(this.Gx={I:this},0);this.__proto__=C.AGQ;this.H(U0);this.
V.R(Ayj);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H6.Z(false);this.Jz.Filter=1;this.
HM.H(AWs);this.HM.L(0x55FFFFFF);this.Uk.H(AWt);this.Uk.Jc(true);this.Bc.H(AWu);this.
Bc.A6(0x14);this.Bc.R(AWv);this.So.H(AWw);this.So.Jc(true);this.So.A6(0x14);this.
Gy.Filter=4;this.Gy.Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HM,0);
this.J(this.Uk,0);this.J(this.Bc,0);this.J(this.So,0);this.Jz.BM=[this,this.Ady];
this.Uk.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.So.S(A.aaL(A.fl.EK));this.
Gy.BM=[this,this.Al6];this.Gy.D1=[this,this.AiH];this.Gx.BM=[this,this.Al5];this.
Gx.D1=[this,this.Ait];this.FM=A._NewObject(C.Aeu,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ds;this.Av._Done();this.Jz._Done();this.HM._Done();this.Uk._Done(
);this.Bc._Done();this.So._Done();this.Gy._Done();this.Gx._Done();C.Ds._Done.call(
this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit();this.Jz._ReInit(
);this.HM._ReInit();this.Uk._ReInit();this.Bc._ReInit();this.So._ReInit();this.Gy.
_ReInit();this.Gx._ReInit();this.Uk.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.So.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((
B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jz
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Uk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CG={B7:null,AmU:null,AqR:null,Em:null,Text:null,String:A.jV,Bd7:A.jV,Kl:0x12
,ALf:0,AQ:0xFFFFFFFF,N8:0,AUF:0,A$y:0,Bd8:true,G4:function(CN){var LL=(A.Core.ARG.
isPrototypeOf(CN)?CN:null);if(!!LL)this.BC4(this);return A.Core.P.G4.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajl],this);}
,Dd:function(aFilter){return A.abh(this.Text.Dd(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bd8){this.Bd7=E;this.Bd8=false;
}this.ALf=E.length;A.pe([this,this.Ajl],this);},S:function(E){if(this.B7===E)return;
this.B7=E;A.pe([this,this.Ajl],this);},AZ:function(E){if(this.AmU===E)return;this.
AmU=E;A.pe([this,this.Ajl],this);},Cr:function(E){if(this.AqR===E)return;this.AqR=
E;A.pe([this,this.Ajl],this);},A6:function(E){if(E===this.Kl)return;this.Kl=E;this.
Text.A6(E);},Ajl:function(G){var B;var ALl=0;if(!this.ALf){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KU(false);if(!!this.B7){ALl=
this.B7.Yu(this.String,0,this.ALf);if(ALl<(((B=this.M)[2]-B[0])-(2*this.Text.Jf)
)){this.Text.S(this.B7);this.Text.Aw8(this.N8);return;}}this.Text.KU(true);if(!!
this.AmU){ALl=this.AmU.Yu(this.String,0,this.ALf);this.Text.S(this.AmU);this.Text.
Aw8(this.AUF);if((ALl<(((B=this.M)[2]-B[0])-(2*this.Text.Jf)))&&(((B=this.Text.Dd(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqR){this.Text.S(this.AqR);
if(((B=this.Text.Dd())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw8((((this.Text.
B7.Ascent+this.Text.B7.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BC4:function(G){this.R(this.Bd7);},Q7:function(E){if(
A.aa0(this.Em,E))return;this.Em=E;this.Text.Q7(E);},ASD:function(){return A.abh(
this.Text.Dd(),this.M.slice(0,2));},Afh:function(AoO){return A.abf(this.M.slice(
0,2),this.Text.Afh(AoO));},Aw8:function(E){if(this.N8===E)return;this.N8=E;A.pe([
this,this.Ajl],this);},BnZ:function(E){if(this.AUF===E)return;this.AUF=E;A.pe([this
,this.Ajl],this);},Bn0:function(E){if(this.A$y===E)return;this.A$y=E;A.pe([this,
this.Ajl],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CG;this.H(AHG);this.Ar(false);
this.Text.A0(0x3F);this.Text.H(AHG);this.Text.R(Ro);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjS={Y:null,IO:null,AeM:null,I_:null,Nb:null,AeG:null,AeL:null,AeK:null,AeH:
null,AeJ:null,AeI:null,Nd:null,NY:null,Mw:null,Dg:function(E){C.Yv.Dg.call(this,
E);this.IO.L(E);this.AeM.L(E);this.I_.L(E);this.Nb.L(E);this.Mw.L(E);this.AeG.L(
E);this.Nd.L(E);this.NY.L(E);this.AeL.L(E);this.AeK.L(E);this.AeH.L(E);this.AeJ.
L(E);this.AeI.L(E);},DX:function(G){C.Yv.DX.call(this,G);this.XP(8,1,this.Nb);this.
XP(12,1,this.Mw);this.XP(11,1,this.AeG);this.XP(7,1,this.Nd);this.XP(14,1,this.NY
);this.XP(1,4,this.IO);this.XP(1,1,this.AeM);this.XP(4,1,this.I_);this.XP(22,1,this.
AeL);this.XP(26,1,this.AeK);this.XP(30,1,this.AeH);this.XP(19,1,this.AeJ);this.XP(
31,1,this.AeI);this.Text.Z(!this.Y.TT(null,0x1));},XP:function(AJw,Eb,AfU){var ABi=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adk=A._GetAutoObject(
A.Device.Device).An.Filter.DL(AJw,Eb);if(!!Adk){ABi=true;switch(AJw){case 14:{var
Azy=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adk)?Adk:null);if(!!Azy)AfU.
Ax(A._GetAutoObject(A.Device.Converter).A5s(Azy.A5));}break;case 7:{var Azy=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adk)?Adk:null);if(!!Azy)AfU.Ax(A._GetAutoObject(
A.Device.Converter).AmW(Azy.A5));}break;case 1:if(Eb===4)AfU.Ax(A.aaL(A.ach.ADP)
);else if(Adk.Operator===4)ABi=false;break;case 22:switch(Adk.Operator){case 0:case
3:AfU.Ax(A.aaL(A.ach.AQN));break;default:AfU.Ax(A.aaL(A.ach.AjY));}break;case 26:
switch(Adk.Operator){case 0:case 3:AfU.Ax(A.aaL(A.ach.AQL));break;default:AfU.Ax(
A.aaL(A.ach.AvE));}break;default:;}}else if((AJw===1)&&(Eb===4)){ABi=true;AfU.Ax(
A.aaL(A.ach.AeC));}}else if((AJw===1)&&(Eb===4)){ABi=true;AfU.Ax(A.aaL(A.ach.AeC
));}AfU.Z(ABi);},_Init:function(aArg){C.Yv._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IO={I:this},0);A.acg.Ap._Init.call(
this.AeM={I:this},0);A.acg.Ap._Init.call(this.I_={I:this},0);A.acg.Ap._Init.call(
this.Nb={I:this},0);A.acg.Ap._Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(
this.AeL={I:this},0);A.acg.Ap._Init.call(this.AeK={I:this},0);A.acg.Ap._Init.call(
this.AeH={I:this},0);A.acg.Ap._Init.call(this.AeJ={I:this},0);A.acg.Ap._Init.call(
this.AeI={I:this},0);A.acg.Ap._Init.call(this.Nd={I:this},0);A.acg.Ap._Init.call(
this.NY={I:this},0);A.acg.Ap._Init.call(this.Mw={I:this},0);this.__proto__=C.AjS;
this.Y.A0(0x3F);this.Y.H(AWx);this.Y.JX(3);this.IO.H(Ayk);this.AeM.H(As8);this.AeM.
Aj(true);this.I_.H(Ayl);this.I_.Aj(true);this.Nb.H(AWy);this.Nb.Aj(true);this.AeG.
H(AWz);this.AeG.Aj(true);this.AeL.H(AHH);this.AeL.Aj(true);this.AeK.H(AHH);this.
AeK.Aj(true);this.AeH.H(AWA);this.AeH.Aj(true);this.AeJ.H(AHI);this.AeJ.Aj(true);
this.AeI.H(AHI);this.AeI.Aj(true);this.Nd.H(AHJ);this.Nd.Aj(true);this.NY.H(AHK);
this.NY.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mw.H(AHJ);this.Mw.Aj(true);
this.J3(this.Gw,-3);this.J3(this.D2,-3);this.J3(this.A$,-3);this.J3(this.AP,-2);
this.J(this.Y,-2);this.J(this.IO,-2);this.J(this.AeM,-2);this.J(this.I_,-2);this.
J(this.Nb,-2);this.J(this.AeG,-2);this.J(this.AeL,-2);this.J(this.AeK,-2);this.J(
this.AeH,-2);this.J(this.AeJ,-2);this.J(this.AeI,-2);this.J(this.Nd,-2);this.J(this.
NY,-2);this.J(this.Mw,0);this.IO.Ax(A.aaL(A.ach.AeC));this.AeM.Ax(A.aaL(A.ach.AQA
));this.I_.Ax(A.aaL(A.ach.APY));this.Nb.Ax(A.aaL(A.ach.ADK));this.AeG.Ax(A.aaL(A.
ach.Ag7));this.AeL.Ax(A.aaL(A.ach.AjY));this.AeK.Ax(A.aaL(A.ach.AvE));this.AeH.Ax(
A.aaL(A.ach.AQx));this.AeJ.Ax(A.aaL(A.ach.AQy));this.AeI.Ax(A.aaL(A.ach.AQw));this.
Nd.Ax(A.aaL(A.ach.ADM));this.NY.Ax(A.aaL(A.ach.AvJ));this.Mw.Ax(A.aaL(A.ach.ADS)
);},_Done:function(){this.__proto__=C.Yv;this.Y._Done();this.IO._Done();this.AeM.
_Done();this.I_._Done();this.Nb._Done();this.AeG._Done();this.AeL._Done();this.AeK.
_Done();this.AeH._Done();this.AeJ._Done();this.AeI._Done();this.Nd._Done();this.
NY._Done();this.Mw._Done();C.Yv._Done.call(this);},_ReInit:function(){C.Yv._ReInit.
call(this);this.Y._ReInit();this.IO._ReInit();this.AeM._ReInit();this.I_._ReInit(
);this.Nb._ReInit();this.AeG._ReInit();this.AeL._ReInit();this.AeK._ReInit();this.
AeH._ReInit();this.AeJ._ReInit();this.AeI._ReInit();this.Nd._ReInit();this.NY._ReInit(
);this.Mw._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yv.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mw)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amw={H9:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);this.H9.Gr();this.H9.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Re.CC.call(this,G);},An9:function(){C.Re.
An9.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).Bz2(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lw));this.C_.L(A._GetAutoObject(
A.acj.Temperature).Bz5(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lw));this.JR.L(A._GetAutoObject(A.acj.Temperature).Bz3(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lw));this.HG.L(A.
_GetAutoObject(A.acj.Temperature).Bz4(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lw));this.MJ.L(this.JR.AQ);this.TemperatureUnit.
L(this.JR.AQ);}break;default:;}},AcH:function(){C.Re.AcH.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cw(A.aaL(A.ach.AQY));this.N.C3(A.aaL(
A.ach.Am4));}break;case 4:{this.N.Cw(null);this.N.C3(A.aaL(A.ach.AvR));}break;default:;
}},WV:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lw>3240)&&(A._GetAutoObject(A.Device.
Device).Lw<5460)){A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H9.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Lw);var B2=A._GetAutoObject(A.Device.Converter).AsK(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lw);this.H9.OnSetRatingTemperature(
B2);this.H9.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();
}break;case 4:this.AKM(this);break;default:;}},AkX:function(G){C.Re.AkX.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKM(this);break;default:;}},AxZ:function(
){C.Re.AxZ.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JR.R(A._GetAutoObject(A.acj.Temperature).Bz_(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lw));break;default:;}},Ax0:function(
){C.Re.Ax0.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WI(A._GetAutoObject(A.acj.Temperature).Bz6(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lw));this.Ji.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WI(16711680
);this.Ji.Ar(true);}break;default:this.Ji.Ar(false);}},AUR:function(){this.C_.Ax(
A.aaL(A.ach.AvQ));this.C_.Cv(A._GetAutoObject(A.acj.Temperature).Bz$(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lw));this.NW.Cv(
0);},_Init:function(aArg){C.Re._Init.call(this,aArg);this.__proto__=C.Amw;this.Dr(
C.IM);this.H9=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Re._Mark.
call(this,D);if((B=this.H9)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.AhB={N7:null,DK:null,Im:null,Bc:null,AuC:null,String:A.jV,AxN:A.jV,Mz:7,Akb:
2,KV:0,AU4:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Akb,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bh));else this.DK.S(A.aaL(A.fl.Ak));this.Im.S(this.DK.B7);this.Im.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WN],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahw:function(
E){if(this.AxN===E)return;this.AxN=E;this.Im.R(E);},Ab6:function(E){this.Mz=E;if(
E<10)this.ATr(2);else if(E<40)this.ATr(1);else this.ATr(0);A.pe([this,this.WN],this
);},WN:function(G){var B;while(!!this.Bc.Ah)this.HP(this.Bc.Ah);if(this.Mz>1){var
Adf=this.AOV();var A2r=this.AOT();var Apt=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AAb;var AK$;var Aub;var Amb=null;if(!!this.N7&&(this.N7.AY>0))Amb=this.N7.K3;
while((Adf>=A2r)&&(Adf>0)){var AtO=A._NewObject(C.Ajv,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*(((Adf-A2r)/86400)|0))/this.Mz)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*((((Adf-A2r)/86400)|0)+1))/this.Mz)|0;while(!!Amb&&(Amb.Timestamp>=
Adf)){if(Amb.Timestamp<(Adf+86400))AtO.Ow(Amb.A5,Amb.Timestamp);Amb=Amb.Ah;}var Aun=
0;if(AtO.AY>0)Aun=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtO.AY
)|0;else if(this.Mz<10){Aun=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
Aub=A._NewObject(A.acg.Text,0);Aub.H([x1,Apt,x2,Apt+Aun]);Aub.S(A.aaL(A.fl.Bh));
Aub.L(A.jb.Text);Aub.R(A.aaR(A.acf.Afd));this.J(Aub,0);}var AJZ=AtO.K3;var O=0;while(
!!AJZ){if(O>=AtO.AY)throw new Error(AWB);AAb=A._NewObject(A.acg.AL,0);AAb.L(A._GetAutoObject(
A.acj.Assessment).Qr(AJZ.A5));if(O===(AtO.AY-1))AAb.H([x1,Apt+(O*Aun),x2,this.Bc.
M[1]]);else AAb.H([x1,Apt+(O*Aun),x2,Apt+((O+1)*Aun)]);this.J(AAb,0);AJZ=AJZ.Ah;
O=O+1;}if(this.AU4){var ByQ=A._GetAutoObject(A.Device.Helper).Aqr(A._GetAutoObject(
A.Device.Helper).Dv());var ByP=A._GetAutoObject(A.Device.Helper).Aqr(Adf);if(ByQ===
ByP){var ALD=A._NewObject(A.acg.Aeq,0);ALD.L(A.jb.Text);var Beu=(x1+this.Akb)+(((
x2-x1)/2)|0);ALD.H([Beu-4,this.Bc.M[1]-4,Beu+4,this.Bc.M[1]]);ALD.Zy(this.AuC);this.
J(ALD,0);}}Adf=Adf-86400;if(this.Akb>0){AK$=A._NewObject(A.acg.AL,0);AK$.H([x1,Apt
,x1+this.Akb,Apt+((((B=this.M)[3]-B[1])/2)|0)]);AK$.L(A.jb.Bc);this.J(AK$,0);}}}
},Ab8:function(E){this.N7=E;A.pe([this,this.WN],this);},ATr:function(E){if(this.
Akb===E)return;this.Akb=E;A.pe([this,this.WN],this);},Dg:function(E){if(this.KV===
E)return;this.KV=E;this.DK.L(E);this.Im.L(E);},AOT:function(){var B;return this.
AOV()-(((((B=this.Mz)<0)?B+0x100000000:B)-1)*86400);},AOV:function(){return A._GetAutoObject(
A.Device.Converter).AhT();},Bn3:function(E){if(this.AU4===E)return;this.AU4=E;A.
pe([this,this.WN],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Im={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.AxX._Init.call(this.AuC={I:this},0);
this.__proto__=C.AhB;this.H(BD);this.Ar(false);this.DK.H(AHL);this.DK.Hn(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Im.H(AHL);this.Im.Hn(5);this.Im.A6(0x14);this.
Im.L(A.jb.Text);this.Bc.H(AWC);this.Bc.L(A.jb.Bc);this.KV=A.jb.Text;this.AuC.H(AWD
);this.J(this.DK,0);this.J(this.Im,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Im.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Im._Done();this.Bc._Done();this.AuC._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Im._ReInit();this.Bc._ReInit();this.AuC._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Im.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AuC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A5y={Ah:null,Timestamp:0,A5:0,_Init:function(
aArg){this.__proto__=C.A5y;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajv={K3:null,MY:null,AY:0,Ow:
function(A7,Qi){var Hh;Hh=A._NewObject(C.A5y,0);Hh.A5=A7;Hh.Timestamp=Qi;if(!this.
K3){this.K3=Hh;this.MY=Hh;this.AY=1;}else{this.MY.Ah=Hh;this.MY=Hh;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajv;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ej={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MN],this);},DE:function(G){var B;var Fi=0;var X=this.AV;switch(
this.Cq.CP){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;
default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HI(X,true,null,null);this.DJ(this);},Al4:function(G){A._GetAutoObject(C.A8
).FB();},ApO:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null).Agw)A.
pe((C.Co.isPrototypeOf(B=this.AV)?B:null).Agw,this);},Fk:function(G){var B;this.
Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.
Y.Br[1]);},DJ:function(G){var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);if(
!!GZ){this.N.Hy(A.jV);this.N.CS(GZ.AxQ);this.N.Jh.C4(255);this.N.GW.C4(GZ.Axm);this.
N.AFj(GZ.Avs);this.N.AnA(GZ.AmV);this.N.C2(GZ.AQr);this.N.C3(GZ.Aq9);GZ.A3x(this
);}},MN:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ej;this.Background.H(Qc);this.Background.L(A.jb.CU);this.N.H(Xj);this.
N.Ar(false);this.N.Z(true);this.Y.H(Ff);this.Y.JX(1);this.Ay.H(Iu);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.AT_={NF:null,AS9:null,Ad5:null,VJ:null,GU:null,PopupTimeout:null,Acb:null,AgH:
null,PopupIdToString:null,AtJ:null,Text:A.jV,AkJ:A.jV,AKh:A.jV,Ak4:0,ALn:-1,Azx:-
1,AKS:0,AUa:0,A2B:false,CQ:function(){this.A_U(this.PopupIdToString.BT(this.AUa)
);},Init:function(aArg){this.Bpx(this);},Bhg:function(G){var B;if(this.Ak4>0){this.
A__((this.Ak4/1000)|0);this.PopupTimeout.WH(0);this.PopupTimeout.PV(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxM(this);},Bhc:function(G){var M2=this.
Text;var AfX=this.AkJ;var AKQ=A.abi(16,A.jV,null);var index=0;var Azs=0;while(AfX
!==A.jV){Azs=AfX.indexOf(A.Device.PopupParamSeparator,0);if(Azs!==-1){AKQ.Set(index
,A.ab1(AfX,Azs,(AfX.length-Azs)+1));AfX=A.ab1(AfX,0,Azs+1);index=index+1;if(index>=
16){A.ab5("%s",(AWE+AfX)+AWF);AfX=A.jV;}}else{AKQ.Set(index,AfX);AfX=A.jV;}}index=
0;while(index<M2.length){if((M2.charCodeAt(index)||0)===0x7B){var Bd6=M2.indexOf(
String.fromCharCode(0x7D),index);if(Bd6===-1){A.ab5("%s",(((AWG+M2)+AWH)+index.toFixed(
))+Alc);index=M2.length;}else{var BfZ=(Bd6-index)-1;var A39=A.abW(M2,index+1,BfZ
);var AKP=A.wz(A39,-1,10);M2=A.ab1(M2,index,BfZ+2);if(A39===AWI)this.Boj(index);
else if(((AKP>0)&&(AKP<=16))&&(this.AkJ!==A.jV)){M2=A.abU(M2,AKQ.Get(AKP-1),index
);if(this.A2B===true)this.Boi(A.wz(AKQ.Get(AKP-1),0,10));}else A.ab5("%s",(AWJ+A39
)+AWK);}}index=index+1;}this.Boh(M2);},CC:function(G){A.pe([this,this.Bhg],this);
},Ai:function(Ae){var B;this.Ad5.H(A.aaT(this.GU.Dd(),Ah0));this.VJ.H(A.aaT(this.
GU.Dd(),Ah0));if(!!this.NF){this.NF.H(A.abM(this.NF.M,this.GU.M[0]));this.NF.H(A.
abO(this.NF.M,this.GU.M[3]+10));this.NF.H(A.abL(this.NF.M,(B=this.GU.M)[2]-B[0])
);this.NF.H(A.abI(this.NF.M,8));this.Ad5.H(A.abh(A.aaT(this.GU.Dd(),Ah0),AHM));this.
VJ.H(A.abh(A.aaT(this.GU.Dd(),Ah0),AHM));}else{this.Ad5.H(A.aaT(this.GU.Dd(),Ah0
));this.VJ.H(A.aaT(this.GU.Dd(),Ah0));}},DE:function(G){var JF=(A.Core.BL.isPrototypeOf(
G)?G:null);if((JF.CP===4)&&((this.VJ.M[1]+this.M[1])<this.M[1])){this.GU.H(A.abO(
this.GU.M,this.GU.M[1]+28));this.Am();}else if((JF.CP===5)&&((this.VJ.M[3]+this.
M[1])>this.N.M[1])){this.GU.H(A.abO(this.GU.M,this.GU.M[1]-28));this.Am();}if((JF.
CP===6)&&!!this.D_().CE)this.D_().AFs(1);else if((JF.CP===7)&&!!this.D_().Ca)this.
D_().AFs(3);},I3:function(G){switch(this.D_().Ahm){case 1:this.Al4(this);break;case
3:this.ApO(this);break;case 2:this.AAJ(this);break;case 0:break;default:A.ab5("%s%e"
,AWL,this.D_().Ahm);}},Al4:function(G){var B;(B=this.D_().CE)?B[1].call(B[0],this
):null;},ApO:function(G){var B;(B=this.D_().Ca)?B[1].call(B[0],this):null;},AAJ:
function(G){var B;(B=this.D_().Cf)?B[1].call(B[0],this):null;},LQ:function(G){this.
N.I$.L((this.N.I$.AQ&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
AxM(this);},A_U:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bhc],this);},BBf:function(G){var B;this.A__(this.Azx-1);if(this.Azx<=0){this.PopupTimeout.
AxM(this);(B=this.AS9)?B[1].call(B[0],this):null;}},A_W:function(E){if(this.Ak4===
E)return;this.Ak4=E;A.pe([this,this.Bhg],this);},A_G:function(E){if(this.AkJ===E
)return;this.AkJ=E;A.pe([this,this.Bhc],this);},Boh:function(E){if(this.AKh===E)
return;this.AKh=E;this.ABB(this);this.ByX(this);},ABB:function(G){if((this.Azx!==-
1)&&(this.ALn!==-1)){var BzM=this.AtJ.Format(AWM);this.GU.R(A.abU(this.AKh,BzM,this.
ALn));}else this.GU.R(this.AKh);this.GU.H(AHN);},Boj:function(E){if(this.ALn===E
)return;this.ALn=E;this.ABB(this);},A__:function(E){if(this.Azx===E)return;this.
Azx=E;this.AtJ.AFX(E);A.pe([this,this.ABB],this);},ByX:function(G){this.GU.Dd();
if(this.GU.M[1]<=this.M[1])this.GU.H(A.abO(this.GU.M,28));this.Am();},A$a:function(
E){if(this.A2B===E)return;this.A2B=E;if(E===true)A.pe([this,this.BBR],this);},BBR:
function(G){if(!this.NF){this.NF=A._NewObject(A.acr.ADA,0);this.NF.Ga(0);this.NF.
EV(100);this.NF.OnSetAppearance(this.Acb);this.J(this.NF,0);this.AhE(this.NF,this.
GU);}this.NF.Bx(this.AKS);},Boi:function(E){if(this.AKS===E)return;this.AKS=E;if(
!!this.NF)this.NF.Bx(this.AKS);},Bpx:function(G){var B;this.N.C4(0);this.AgH.AnY(
this);},BnT:function(E){if(this.AUa===E)return;this.AUa=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.Ad5={I:this},0);A.acg.BW._Init.
call(this.VJ={I:this},0);A.acg.Text._Init.call(this.GU={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADB._Init.call(this.Acb={I:this},
0);A.acl.Gm._Init.call(this.AgH={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtJ={I:this},0);this.
__proto__=C.AT_;var B;this.H(Ce);this.Background.H(Ff);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ek.Ar(false);this.Ek.Z(false);this.Ad5.H(AHO);this.
Ad5.L(A.jb.CJ);this.VJ.H(AHO);this.VJ.Nn(2);this.VJ.L(A.jb.Text);this.GU.H(AHN);
this.GU.Hn(10);this.GU.Jc(true);this.GU.Bof(0);this.GU.KU(true);this.GU.L(A.jb.Text
);this.PopupTimeout.PV(0);this.Acb.A_1(0);this.Acb.A_Z(A.jb.AV);this.Acb.A_Y(0);
this.Acb.AGb(AHv);this.AgH.HO(1);this.AgH.B3=255;this.AgH.Cx=0;this.J3(this.Ek,-
1);this.J(this.Ad5,0);this.J(this.VJ,0);this.J(this.GU,0);this.GU.S(A.aaL(A.fl.Af
));this.PopupTimeout.ME=[this,this.BBf];this.Acb.A_0(A.aaL(A.ach.NX));this.Acb.A_X(
A.aaL(A.ach.NX));this.AgH.Q=[B=this.N,B.Awp,B.A0B];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad5._Done();this.VJ._Done();this.GU._Done();this.PopupTimeout.
_Done();this.Acb._Done();this.AgH._Done();this.PopupIdToString._Done();this.AtJ.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad5._ReInit();this.VJ._ReInit();this.GU._ReInit();this.PopupTimeout._ReInit();this.
Acb._ReInit();this.AgH._ReInit();this.PopupIdToString._ReInit();this.AtJ._ReInit(
);this.GU.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS9)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtJ)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Ms={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Text;
GY=A.jb.Bm;}if(!this.LK){this.Background.L(FS);this.V.L(A.jb.Am5);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KJ){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Ms;},_className:"Application::DarkThemeMenuItem"
};C.Ank={AdE:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Ank;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaH:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Lp:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=[this,this.A3y];this.BQ.Cf=null;this.BQ.CE=[this,this.AaH];this.
BQ.CS(A.aaR(A.acf.Ok));this.BQ.Cw(null);this.BQ.C2(A.aaL(A.ach.AeA));}return this.
BQ;},A3y:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).I3(this);},CC:function(G){},AIU:function(s){this.CC(s);},E4:function(
G){},AyN:function(s){this.E4(s);},_Init:function(aArg){C.Abj._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APS={Wc:
null,YS:null,YM:null,Init:function(aArg){this.Bb(this.Wc);},Adv:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YS)A._GetAutoObject(A.Device.
Device).A3(6,true,A.jV,0,[this,this.BB5]);else if(Aa===this.Wc)A._GetAutoObject(
A.Device.Device).A3(9,true,A.jV,0,[this,this.BCo]);else if(Aa===this.YM)A._GetAutoObject(
C.A8).Cd(4);else throw new Error(Aym);A._GetAutoObject(A.Device.Device).Dw(0);},
BB5:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(
As.PopupState===7))A._GetAutoObject(A.Device.Device).AGy();},BCo:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))
A._GetAutoObject(A.Device.Device).AxD();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ms._Init.call(this.Wc={I:this},0);C.Ms._Init.call(this.YS={I:this
},0);C.Ms._Init.call(this.YM={I:this},0);this.__proto__=C.APS;this.H(AcP);this.Wc.
H(BD);this.Wc.Ar(true);this.Wc.T(A.aaR(A.acf.A$P));this.Wc.Bi(true);this.YS.H(IX
);this.YS.Ar(true);this.YS.T(A.aaR(A.acf.A$x));this.YS.Bi(true);this.YM.H(Qd);this.
YM.Ar(true);this.YM.T(A.aaR(A.acf.ST));this.YM.Bi(true);this.J(this.Wc,0);this.J(
this.YS,0);this.J(this.YM,0);this.Wc.AR=[this,this.Adv];this.YS.AR=[this,this.Adv
];this.YM.AR=[this,this.Adv];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.Wc._Done();this.YS._Done();this.YM._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Wc._ReInit(
);this.YS._ReInit();this.YM._ReInit();this.Wc.T(A.aaR(A.acf.A$P));this.YS.T(A.aaR(
A.acf.A$x));this.YM.T(A.aaR(A.acf.ST));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.Wc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GK={AaE:null,OverlayMenu:null,WR:null,A4s:null
,Ld:null,A38:null,AkK:null,N5:null,AAh:100,Bc3:false,Init:function(aArg){var B;A.
zX([this,this.Bfq],[B=A._GetAutoObject(A.Device.Device),B.Awq,B.AyW],0);A.zX([this
,this.Bfk],[B=A._GetAutoObject(A.Device.Device),B.ASP,B.A0z],0);A.zX([this,this.
A3p],[B=A._GetAutoObject(A.Device.Device),B.Awe,B.AyP],0);A.zX([this,this.BAM],[
B=A._GetAutoObject(A.Device.Device),B.Awb,B.AyO],0);A.zX([this,this.BAN],[B=A._GetAutoObject(
A.Device.Device),B.A8S,B.Bbu],0);A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.
Device),B.AS0,B.A0H],0);A.zX([this,this.BfH],[B=A._GetAutoObject(A.Device.Device
),B.WE,B.Xk],0);A.pe([this,this.Bfq],this);A.pe([this,this.Bfk],this);A.pe([this
,this.ApP],this);A.pe([this,this.BfH],this);this.A4s.Au([B=this.WR,B.AEE,B.Zq]);
this.J(this.WR,0);this.Bb(this.WR);this.ByA(this);},Ai:function(Ae){},Bfk:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEq){if(!this.AaE){this.AaE=A._NewObject(
C.Asw,0);this.AaE.H(A.abJ(this.AaE.M,this.WR.M.slice(0,2)));this.AaE.H(A.abO(this.
AaE.M,this.WR.M[3]-((B=this.AaE.M)[3]-B[1])));this.J(this.AaE,1);}}else{if(!!this.
AaE)this.HP(this.AaE);this.AaE=null;}},Bfq:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.APS,0));break;case 8:this.Dw(A._NewObject(C.AL$,0));break;case 2:this.Dw(A._NewObject(
C.AL8,0));break;case 3:this.Dw(A._NewObject(C.AMd,0));break;case 4:this.Dw(A._NewObject(
C.AUs,0));break;case 5:this.Dw(A._NewObject(C.AV0,0));break;case 6:this.Dw(A._NewObject(
C.AT5,0));break;case 7:this.Dw(A._NewObject(C.Amy,0));break;case 11:this.Dw(A._NewObject(
C.AMH,0));break;case 12:this.Dw(A._NewObject(C.AMG,0));break;case 9:this.Dw(A._NewObject(
C.AR0,0));break;case 10:this.Dw(A._NewObject(C.AMC,0));break;case 14:this.Dw(A._NewObject(
C.ARW,0));break;case 15:this.Dw(A._NewObject(C.ARX,0));break;case 13:this.Dw(A._NewObject(
C.ARY,0));break;case 16:this.Dw(A._NewObject(C.AM3,0));break;default:throw new Error(
AWN+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WK).ArH(
null);this.N5.AqH(this.OverlayMenu,A._GetAutoObject(C.AxG),null,null,[B=this.OverlayMenu
,B.AyN],null,true);this.Bb(this.WR);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N5.AkM(this.OverlayMenu,A._GetAutoObject(C.AxF),null,null,null,null,null,[B=this.
OverlayMenu,B.AIU],null,false);this.Bb(this.N5);A._GetAutoObject(C.WK).ArH(this.
OverlayMenu.Lp());}else if(!!this.Ld){this.Bb(this.N5);A._GetAutoObject(C.WK).ArH(
this.Ld.Akr().Lp());}},Ahr:function(E){var B;if(this.Ld===E)return;if(!!this.Ld){
A._GetAutoObject(C.WK).ArH(null);this.N5.AqH(this.Ld.Akr(),A._GetAutoObject(C.Afj
),null,null,[B=this.Ld.Akr(),B.AyN],null,false);this.Bb(this.WR);}this.Ld=E;if(!
!this.Ld){this.N5.AkM(this.Ld.Akr(),A._GetAutoObject(C.Afj),null,null,null,null,
null,[this,this.Bmd],null,false);this.Bb(this.N5);A._GetAutoObject(C.WK).ArH(this.
Ld.Akr().Lp());}else if(!!this.OverlayMenu){this.Bb(this.N5);A._GetAutoObject(C.
WK).ArH(this.OverlayMenu.Lp());}},ByA:function(G){var B;var F;this.J(this.A38,0);(
F=A._GetAutoObject(C.WK),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WK).M)[3]-B[1]))));this.ZG(this.N5);},A3p:function(G){if(A._GetAutoObject(A.Device.
Device).AmF)switch(A._GetAutoObject(A.Device.Device).Ik){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A8).Ab_(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa6<98)A._GetAutoObject(C.A8).Cd(4);}else{this.AAh=100;this.Bdb();}},BAM:
function(G){this.Bdb();},Bdb:function(){if(!A._GetAutoObject(A.Device.Device).AmF
){if(A._GetAutoObject(A.Device.Device).Aa6<=2){if(this.AAh>2)switch(A._GetAutoObject(
A.Device.Device).Ik){case 38:break;case 4:case 39:A._GetAutoObject(C.A8).Ab_(38);
break;default:A._GetAutoObject(C.A8).Cd(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa6<=10){if(this.AAh>10)switch(A._GetAutoObject(A.Device.Device).Ik){case
39:break;case 4:case 38:A._GetAutoObject(C.A8).Ab_(39);break;default:A._GetAutoObject(
C.A8).Cd(39);}}else if(A._GetAutoObject(A.Device.Device).Aa6<=20){if(this.AAh>20
)switch(A._GetAutoObject(A.Device.Device).Ik){case 39:break;case 4:case 38:A._GetAutoObject(
C.A8).Ab_(39);break;default:A._GetAutoObject(C.A8).Cd(39);}}else switch(A._GetAutoObject(
A.Device.Device).Ik){case 38:case 4:case 39:A._GetAutoObject(C.A8).FB();break;default:;
}this.AAh=A._GetAutoObject(A.Device.Device).Aa6;}},BAN:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqu){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A3(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Any(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A3(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Any(0
);}break;default:A.ab5("%s",AWO+A._GetAutoObject(A.Device.Device).Aqu.toFixed());
}},ApP:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A8).Cd(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Ik===5)A._GetAutoObject(C.A8).Ab_(3);break;
default:;}},BfH:function(G){switch(A._GetAutoObject(A.Device.Device).P4.Z2){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).Uw(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WI(65535);A._GetAutoObject(A.Device.Device).Uw(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WI(255);A._GetAutoObject(A.Device.Device).Uw(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WI(16776960);A._GetAutoObject(
A.Device.Device).Uw(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WI(16711935
);A._GetAutoObject(A.Device.Device).Uw(true);}break;default:A.ab5("%s",AWP+A._GetAutoObject(
A.Device.Device).P4.Z2.toFixed());}this.Bog(A._GetAutoObject(A.Device.Helper).Bj$(
));},Bmd:function(G){var B;this.Ld.Akr().CC(this);this.Ld.BBd(this);},Bog:function(
E){if(this.Bc3===E)return;this.Bc3=E;if(E){if(A._GetAutoObject(A.Device.Device).
Ik===3)A._GetAutoObject(C.A8).Cd(27);else if(A._GetAutoObject(A.Device.Device).Ik
!==27)A._GetAutoObject(A.Device.Device).A3(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).Ik===27)A._GetAutoObject(A.Device.Device).A3(112,true,A.jV,0,[this
,this.A1n]);},A1n:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!As&&(As.Id===112))&&(As.PopupState===7))A._GetAutoObject(C.A8).Ab_(85);}
,Ble:function(){return this.Ld;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkK._Init.call(this.AkK={I:this},0);C.N5._Init.call(this.N5={I:this},0);this.
__proto__=C.GK;this.H(Ce);this.N5.H(Qc);this.J(this.N5,0);this.WR=A._NewObject(C.
WR,0);this.A4s=A._GetAutoObject(C.A8);this.AkK.ANJ=[this,this.Ble,this.Ahr];this.
A38=A._GetAutoObject(C.WK);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkK._Done();this.N5._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkK._ReInit();this.N5._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WR)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A4s)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ld)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A38)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abj={A$l:
null,BQ:null,N:null,Cq:null,Anb:null,And:null,QT:null,Anc:null,Am$:null,Anf:null
,Ana:null,DE:function(G){var Fi=0;var X=this.AV;switch(this.Cq.CP){case 6:Fi=2;break;
case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x14
);if(!!X)this.Bb(X);},Bb4:function(s){this.DE(s);},Al4:function(G){var D5=(A.Core.
BL.isPrototypeOf(G)?G:null);if(D5.Aci&&(this.D_().Asq===false))return;A.pe(this.
D_().CE,this);},AI7:function(s){this.Al4(s);},ApO:function(G){var D5=(A.Core.BL.
isPrototypeOf(G)?G:null);if(D5.Aci&&(this.D_().ZF===false))return;A.pe(this.D_().
Ca,this);},AI9:function(s){this.ApO(s);},I3:function(G){if(this.QT.Aci)return;},
Atq:function(s){this.I3(s);},AAJ:function(G){var D5=(A.Core.BL.isPrototypeOf(G)?
G:null);if(D5.Aci&&(this.D_().WO===false))return;A.pe(this.D_().Cf,this);},AI8:function(
s){this.AAJ(s);},D_:function(){if(!!this.Lp())return this.BQ;else return this.N;
},Lp:function(){return this.BQ;},GS:function(E){this.A$l=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BL._Init.
call(this.Cq={I:this},0);A.Core.BL._Init.call(this.Anb={I:this},0);A.Core.BL._Init.
call(this.And={I:this},0);A.Core.BL._Init.call(this.QT={I:this},0);A.Core.BL._Init.
call(this.Anc={I:this},0);A.Core.BL._Init.call(this.Am$={I:this},0);A.Core.BL._Init.
call(this.Anf={I:this},0);A.Core.BL._Init.call(this.Ana={I:this},0);this.__proto__=
C.Abj;this.H([0,0,C.Asz[0],C.Asz[1]]);this.N.H(Xj);this.N.Ar(false);this.N.Z(false
);this.Cq.Filter=147;this.Anb.Filter=26;this.And.Filter=28;this.QT.Filter=1;this.
Anc.Filter=27;this.Am$.Filter=44;this.Anf.Filter=9;this.Ana.Filter=42;this.J(this.
N,0);this.Cq.BM=[this,this.Bb4];this.Cq.D1=[this,this.Bb4];this.Anb.BM=[this,this.
AI7];this.Anb.D1=[this,this.AI7];this.And.BM=[this,this.AI9];this.And.D1=[this,this.
AI9];this.QT.BM=[this,this.Atq];this.QT.D1=[this,this.Atq];this.Anc.BM=[this,this.
AI8];this.Anc.D1=[this,this.AI8];this.Am$.BM=[this,this.AI7];this.Am$.D1=[this,this.
AI7];this.Anf.BM=[this,this.AI9];this.Anf.D1=[this,this.AI9];this.Ana.BM=[this,this.
AI8];this.Ana.D1=[this,this.AI8];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Anb._Done();this.And._Done();this.QT._Done();this.
Anc._Done();this.Am$._Done();this.Anf._Done();this.Ana._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Anb._ReInit();this.And._ReInit();this.QT._ReInit();this.Anc._ReInit(
);this.Am$._ReInit();this.Anf._ReInit();this.Ana._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A$l)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.And)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AxF={_Init:function(){A.acl.AGW._Init.call(this,0);this.Kl=0x22;this.Ad9=true;
this.Au7=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxG={_Init:function(){A.acl.AGW._Init.call(this,0);this.Kl=0x22;this.Ad9=true;
this.Au7=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AU2={Se:function(){var B;var Ao=(A.acl.Afb.isPrototypeOf(B=A.acl.Aen.Se.call(this
))?B:null);if(!Ao)throw new Error(As9);Ao.Cp.Cx=100;return Ao;},Sd:function(){var
B;var Ao=(A.acl.Axn.isPrototypeOf(B=A.acl.Aen.Sd.call(this))?B:null);if(!Ao)throw new
Error(As9);Ao.E0.B3=100;return Ao;},_Init:function(aArg){A.acl.Aen._Init.call(this
,aArg);this.__proto__=C.AU2;},_className:"Application::ShadeTransition"};C.Am1={
Ag_:null,SY:null,HR:null,DS:null,AnimalId:-1,GroupId:-1,ADh:true,Dg:function(E){
C.BR.Dg.call(this,E);this.SY.L(E);this.HR.L(E);this.Ag_.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HR.R(A.aaR(A.acf.Afd)
);else this.HR.R(E.toFixed());},Ab4:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SY.R(A.aaR(A.acf.Afd));else this.SY.R(E.toFixed());},DX:function(
G){},Nt:function(s){this.DX(s);},A_o:function(E){if(this.ADh===E)return;this.ADh=
E;this.SY.Z(this.ADh);this.Ag_.Z(this.ADh);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag_={I:this},0);A.acg.Text._Init.call(this.SY={
I:this},0);A.acg.Text._Init.call(this.HR={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.Am1;this.Ag_.H(AWQ);this.SY.H(AWR);this.SY.A6(0x11);this.
SY.R(A.aaR(A.acf.Afd));this.HR.H(AWS);this.HR.A6(0x11);this.HR.R(A.aaR(A.acf.Afd
));this.DS.H(AWT);this.J(this.Ag_,0);this.J(this.SY,0);this.J(this.HR,0);this.J(
this.DS,0);this.Ag_.Ax(A.aaL(A.ach.AQG));this.SY.S(A.aaL(A.fl.Af));this.HR.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BR;this.Ag_._Done();this.SY._Done(
);this.HR._Done();this.DS._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR.
_ReInit.call(this);this.Ag_._ReInit();this.SY._ReInit();this.HR._ReInit();this.DS.
_ReInit();this.SY.R(A.aaR(A.acf.Afd));this.HR.R(A.aaR(A.acf.Afd));this.SY.S(A.aaL(
A.fl.Af));this.HR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this
,D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADr={Init:function(
aArg){var B;A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SK
],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper).W,B.A8$,B.AnE],0);
A.zV([this,this.Nt],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nt],[
B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC],0);A.zX([this,this.Nt],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9N,B.Axj],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.
Helper).W,B.A82,B.Ae3],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper
).W,B.A83,B.Uu],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper).W,B.
A86,B.Ae7],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper).W,B.A8_,B.
Ae9],0);A.pe([this,this.Nt],this);},Dg:function(E){C.Am1.Dg.call(this,E);this.DS.
Dg(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq0()){this.Ab4(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab4(-1);this.OnSetAnimalId(-1);}this.DS.
EC(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AFd(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae3(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Uu(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae7(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae9(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.Am1._Init.call(this,aArg);this.
__proto__=C.ADr;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Ko={AhQ:A.abi(3,A.jV,null),BG:A.abi(3,0,{0:7,1:30,2:90}),Ano:3,Du:function(){
if(this.Ano<3)return this.Ano;else return 3;},C7:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ano))return-1;return this.BG.Get(aIndex);},Gl:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ano))return AWU;return this.AhQ.Get(aIndex);},DZ:function(
A7){var O=0;while((O<3)&&(O<=this.Ano)){if(this.BG.Get(O)===A7)return O;O=O+1;}return-
1;},H5:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ano)){if(this.BG.Get(
O)>max)max=this.BG.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhQ=[]).__proto__=C.Ko.AhQ;(this.BG=[]).__proto__=C.Ko.BG;this.
__proto__=C.Ko;this.AhQ.Set(0,A.aaR(A.acf.A7O));this.AhQ.Set(1,A.aaR(A.acf.A7M));
this.AhQ.Set(2,A.aaR(A.acf.A7N));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhQ.Set(0,A.aaR(A.acf.A7O));this.AhQ.Set(1,A.aaR(A.acf.A7M));this.AhQ.Set(2,A.aaR(
A.acf.A7N));},_className:"Application::Days"};C.AUZ={AmA:null,BU:null,Q8:null,QH:
null,Bad:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BBz],[B=A._GetAutoObject(A.Device.Device),B.ArB,B.Atp],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Ds.Ai.call(this,Ae);var Fw=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BU.L(A.jb.Bm);if(!!this.Q)this.BU.R(((AWV+A._GetAutoObject(
A.Device.Converter).Ak2((F=this.Q,F[1].call(F[0]))))+CR)+A._GetAutoObject(A.acj.
Temperature).AlN());this.H6.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6_())&&(
Fw||GE));},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},Kg:function(G){var F;var BP=this.AM;C.Ds.Kg.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6_()){this.Bx(this.AM+10);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},Kb:function(G){var F;var BP=this.
AM;C.Ds.Kb.call(this,G);this.Bx(this.AM-10);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_4:function(E){if(this.Bad===E)return;
this.Bad=E;this.Am();},BBz:function(G){this.Am();},_Init:function(aArg){C.Ds._Init.
call(this,aArg);A.acg.AL._Init.call(this.AmA={I:this},0);C.CG._Init.call(this.BU={
I:this},0);A.acg.AL._Init.call(this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={
I:this},0);this.__proto__=C.AUZ;this.H(U0);this.Background.H(U0);this.V.H(As_);this.
V.L(A.jb.Bm);this.AmA.H(AWW);this.AmA.L(A.jb.Afu);this.Hx.H(AWX);this.BU.H(AWY);
this.BU.A6(0x12);this.BU.L(A.jb.Text);this.H6.H(AWZ);this.Q8.H(AW0);this.Q8.L(A.
jb.E1);this.QH.H(AW1);this.J(this.AmA,-2);this.J(this.BU,-1);this.J(this.Q8,0);this.
J(this.QH,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.BU.S(A.aaL(
A.fl.EK));this.BU.AZ(A.aaL(A.fl.Af));this.QH.Ax(A.aaL(A.ach.ADH));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ds;this.AmA._Done();this.BU._Done();this.Q8.
_Done();this.QH._Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.
call(this);this.AmA._ReInit();this.BU._ReInit();this.Q8._ReInit();this.QH._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.BU.S(A.aaL(A.fl.EK));this.
BU.AZ(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.
AmA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnU={Q:null
,Ai4:null,Init:function(aArg){var B;A.zX([this,this.Bb1],[B=A._GetAutoObject(A.Device.
Device),B.AEE,B.Bbn],0);A.pe([this,this.Bb1],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ab_:function(Alq){A._GetAutoObject(A.Device.Device).Zq(Alq
);},AKG:function(G){if(this.K&&this.K.AKG)return this.K.AKG.apply(this,arguments
);else return C.AnU.Bb8.apply(this,arguments);},Bb8:function(G){var F;if(!this.Q
){A.ab5("%s",AW2);return;}var By=null;if(this.Ai4.Contains(A._GetAutoObject(A.Device.
Device).Ik)){By=this.Ai4.A$j();while(!!By&&(By.An8!==A._GetAutoObject(A.Device.Device
).Ik))By=this.Ai4.A$j();}if(!By)By=this.Bz9(A._GetAutoObject(A.Device.Device).Ik
);(F=this.Q,F[2].call(F[0],By));},Bb1:function(s){this.AKG(s);},Bz9:function(Alq
){var By=null;switch(Alq){case 0:case 1:By=A._NewObject(C.AU8,0);break;case 2:By=
A._NewObject(C.X3,0);break;case 3:By=A._NewObject(C.AvD,0);break;case 53:By=A._NewObject(
C.AVO,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=A._NewObject(
C.ASe,0);break;case 6:By=A._NewObject(C.ARP,0);break;case 16:By=A._NewObject(C.ANR
,0);break;case 22:By=A._NewObject(C.AVJ,0);break;case 17:By=A._NewObject(C.AVn,0
);break;case 42:By=A._NewObject(C.ANO,0);break;case 87:By=A._NewObject(C.AUA,0);
break;case 88:By=A._NewObject(C.AUz,0);break;case 89:By=A._NewObject(C.AVE,0);break;
case 95:By=A._NewObject(C.AVH,0);break;case 23:By=A._NewObject(C.AV7,0);break;case
18:By=A._NewObject(C.AN4,0);break;case 19:By=A._NewObject(C.AUB,0);break;case 37:
By=A._NewObject(C.ARg,0);break;case 76:By=A._NewObject(C.AUg,0);break;case 63:By=
A._NewObject(C.AN2,0);break;case 64:By=A._NewObject(C.AN3,0);break;case 82:By=A.
_NewObject(C.AN1,0);break;case 83:By=A._NewObject(C.ANZ,0);break;case 92:By=A._NewObject(
C.ANX,0);break;case 93:By=A._NewObject(C.AN0,0);break;case 65:By=A._NewObject(C.
ANY,0);break;case 5:By=A._NewObject(C.AVg,0);break;case 4:By=A._NewObject(C.Ad$,
0);break;case 39:By=A._NewObject(C.ANo,0);break;case 38:By=A._NewObject(C.ANH,0);
break;case 28:By=A._NewObject(C.Wy,0);break;case 7:By=A._NewObject(C.AqK,0);break;
case 81:By=A._NewObject(C.AN$,0);break;case 31:By=A._NewObject(C.Aru,0);break;case
78:By=A._NewObject(C.ASc,0);break;case 34:By=A._NewObject(C.AL6,0);break;case 35:
By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(C.SetTransponderScreen
,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:By=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:By=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(C.MotherScanScreen
,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:By=A._NewObject(
C.GJ,0);break;case 9:By=A._NewObject(C.I7,0);break;case 24:By=A._NewObject(C.AMl
,0);break;case 10:By=A._NewObject(C.Amw,0);break;case 21:By=A._NewObject(C.AMp,0
);break;case 11:By=A._NewObject(C.AMo,0);break;case 29:By=A._NewObject(C.AuO,0);
break;case 48:By=A._NewObject(C.AMn,0);break;case 30:By=A._NewObject(C.AMm,0);break;
case 12:By=A._NewObject(C.AMk,0);break;case 40:By=A._NewObject(C.AMj,0);break;case
14:By=A._NewObject(C.ANF,0);break;case 13:By=A._NewObject(C.ANG,0);break;case 20:
By=A._NewObject(C.AVY,0);break;case 41:By=A._NewObject(C.AVX,0);break;case 43:By=
A._NewObject(C.AOM,0);break;case 44:By=A._NewObject(C.AOL,0);break;case 61:By=A.
_NewObject(C.AN_,0);break;case 62:By=A._NewObject(C.AN9,0);break;case 46:By=A._NewObject(
C.ASr,0);break;case 47:By=A._NewObject(C.ASq,0);break;case 85:By=A._NewObject(C.
AWb,0);break;case 86:By=A._NewObject(C.AWa,0);break;case 71:By=A._NewObject(C.ASm
,0);break;case 72:By=A._NewObject(C.ASl,0);break;case 74:By=A._NewObject(C.AM5,0
);break;case 90:By=A._NewObject(C.AUi,0);break;case 73:By=A._NewObject(C.AUC,0);
break;case 51:By=A._NewObject(C.AL_,0);break;case 52:By=A._NewObject(C.AL9,0);break;
case 15:By=A._NewObject(C.AUp,0);break;case 60:By=A._NewObject(C.AVm,0);break;case
69:By=A._NewObject(C.ARN,0);break;case 70:By=A._NewObject(C.ARM,0);break;case 26:
By=A._NewObject(C.ASf,0);break;case 54:By=A._NewObject(C.ASb,0);break;case 25:By=
A._NewObject(C.AOm,0);break;case 66:By=A._NewObject(C.AOn,0);break;case 59:By=A.
_NewObject(C.AOl,0);break;case 58:By=A._NewObject(C.AOo,0);break;case 56:By=A._NewObject(
C.AOp,0);break;case 57:By=A._NewObject(C.AqN,0);break;case 68:By=A._NewObject(C.
AOq,0);break;case 67:By=A._NewObject(C.AOj,0);break;case 84:By=A._NewObject(C.AMr
,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;case 36:By=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:By=A._NewObject(C.AME,0);break;case 91:By=A._NewObject(C.AVs,0
);break;case 94:By=A._NewObject(C.Aqh,0);break;default:throw new Error(AW3);}if(
!!By)By.An8=Alq;return By;},Cd:function(Alq){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AW4);else this.Ai4.BoJ((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zq(Alq);},FB:function(){var Bgd=3;var Bgc=this.Ai4.Boz();if(!!Bgc
)Bgd=Bgc.An8;else A.ab5("%s",AW5);A._GetAutoObject(A.Device.Device).Zq(Bgd);},_Init:
function(aArg){C.A$F._Init.call(this.Ai4={I:this},0);this.__proto__=C.AnU;this.Init(
aArg);var J8=this._variants();if(J8){this.K={};J8._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai4.
_Done();A.h7--;},_ReInit:function(){this.Ai4._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnU._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A8={_Init:function(){C.AnU._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGq={H9:null,Yx:null,Aff:null,AaK:null,MF:
null,AzD:1,RatingMode:0,RatedAttribute:0,CQ:function(){this.Yx.R(this.BdJ(this.RatedAttribute
));this.AKL(this);},Ai:function(Ae){this.MF.R(A._GetAutoObject(A.Device.Helper).
MI(A.aaR(A.acf.AR4),O9,this.AzD.toFixed()));if(this.RatingMode===1)this.MF.Z(true
);else this.MF.Z(false);},CC:function(G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);this.H9.Gr();this.H9.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axy(this.
H9,5);A.zX([this,this.AKL],[B=A._GetAutoObject(A.Device.Device),B.ASX,B.A0E],0);
A.zX([this,this.AKL],[B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC],0);A.pe([
this,this.AKL],this);},AsH:function(G){var a=this.AKp(this.RatedAttribute);this.
Bgt();this.AzD=this.AzD-1;this.Am();if(!a)this.AR$();else this.SJ(a);},WV:function(
G){var a=this.BdQ(this.RatedAttribute);this.Bgt();this.AzD=this.AzD+1;this.Am();
if(!a)this.A8a();else this.SJ(a);},AKp:function(Nv){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Nv){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHP);},BdQ:function(Nv){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Nv){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHP);},SJ:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.Yx.R(this.BdJ(E));this.
DJ(E);this.Aff.AnJ(this.H9.Bjo(E));if(!this.AKp(E)){if(this.ARp())this.N.Cw(A.aaL(
A.ach.AeD));else this.N.Cw(null);}else this.N.Cw(A.aaL(A.ach.AeA));},BdJ:function(
Nv){return this.AaK.BT(Nv);},Bz8:function(Nv){if(!!Nv){var a=this.AKp(Nv);if(!a)
return A.jV;else return this.BdK(a);}else return A.jV;},Bz7:function(Nv){if(!!Nv
){var a=this.BdQ(Nv);if(!a)return A.jV;else return this.BdK(a);}else return A.jV;
},AR$:function(){},A8a:function(){},A6$:function(){return null;},BdK:function(Nv
){return this.AaK.Lx(Nv);},Bgt:function(){if(!!this.RatedAttribute)this.H9.Bpk(this.
RatedAttribute,this.Aff.A5);},AKL:function(G){if(this.ARp())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SJ(2);this.DJ(this.RatedAttribute
);this.Am();},Adw:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkX:function(G){var a=this.AKp(this.RatedAttribute);if(!a){if(this.ARp())this.
Adw(this);}else this.AR$();},DJ:function(Nv){this.N.Hy(this.Bz8(Nv));if(!!this.N.
An3){this.N.C2(null);this.N.OS(true);}else{this.N.C2(A.aaL(A.ach.AeA));this.N.OS(
false);}this.N.CS(this.Bz7(Nv));if(!!this.N.An5){this.N.C3(null);this.N.OT(true);
}else{this.N.C3(this.A6$());this.N.OT(false);}},ARp:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Alf,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Yx={
I:this},0);C.Rating._Init.call(this.Aff={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaK={I:this},0);A.acg.Text._Init.call(this.MF={I:this},0);this.__proto__=
C.AGq;this.Background.L(A.jb.CJ);this.N.Z(true);this.Dr(C.IM);this.Yx.H(AW6);this.
Yx.KU(true);this.Yx.L(A.jb.Text);this.Aff.H(AW7);this.MF.H(AW8);this.MF.A6(0x14);
this.MF.R(A.aaR(A.acf.AR4));this.MF.L(A.jb.Text);this.J(this.Yx,0);this.J(this.Aff
,0);this.J(this.MF,0);this.Bb(this.Aff);this.N.CE=[this,this.AsH];this.N.Cf=[this
,this.AkX];this.N.Ca=[this,this.WV];this.Yx.S(A.aaL(A.fl.Af));this.Aff.AR=[this,
this.WV];this.MF.S(A.aaL(A.fl.Af));this.H9=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.Yx._Done();this.Aff._Done();this.AaK._Done();
this.MF._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Yx._ReInit();this.Aff._ReInit();this.AaK._ReInit();this.MF._ReInit();this.
MF.R(A.aaR(A.acf.AR4));this.Yx.S(A.aaL(A.fl.Af));this.MF.S(A.aaL(A.fl.Af));this.
CQ();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H9)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aff)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaK)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.MF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.H0={Y:null,Gender:null,AnimalType:null,Breed:null,Jk:null,Pp:null,AsX:null,B0:
null,Db:null,C$:null,CH:null,Gn:null,Ay:null,KM:0,Init:function(aArg){A.zX([this
,this.Bb2],this.B0.Q,0);A.pe([this,this.Bb2],this);A.pe([this,this.ABg],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANC(this.
Y);},DE:function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CP){case 6:Fi=2;
break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(
X,Fi,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null
,null);this.ABg(this);},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},AeY:function(E){
if(this.KM===E)return;this.KM=E;A.abo([this,this.Awc,this.AeY],0);},ABg:function(
G){var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.C2(
A.aaL(A.ach.E2));this.N.CE=[this,this.AI6];if(!!GZ&&!!GZ.Ams){this.N.Fc(A.jV);this.
N.JC.C4(255);this.N.ArR(GZ.AqS);this.N.Cw(GZ.AvM);this.N.Cf=GZ.Ams;}else{this.N.
Fc(A.jV);this.N.Cw(null);this.N.Cf=null;}if(!!GZ&&!!GZ.Agw){this.N.CS(GZ.AxQ);this.
N.GW.C4(GZ.Axm);this.N.AnA(GZ.AmV);this.N.C3(GZ.Aq9);this.N.Ca=GZ.Agw;}else this.
Aup();},Agh:function(G){A.ab5("%s",Ayn);},AyZ:function(s){this.Agh(s);},Ew:function(
G){A.ab5("%s",Ayn);},AI6:function(s){this.Ew(s);},Aup:function(){A.ab5("%s",Alg);
},AAC:function(G){A.ab5("%s",Ayn);},AcT:function(s){this.AAC(s);},JL:function(Ag
){this.Bb(Ag);this.Y.HI(Ag,true,null,null);this.Y.VA(null,null);},ApK:function(G
){var F;this.C$.Ahv(A._GetAutoObject(A.Device.Helper).Abr((F=this.B0.Q,F[1].call(
F[0]))));},Bb2:function(s){this.ApK(s);},Awc:function(){return this.KM;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UU._Init.call(this.Jk={I:this},
0);A.Device.M6._Init.call(this.Pp={I:this},0);A.Device.K0._Init.call(this.AsX={I:
this},0);C.BX._Init.call(this.B0={I:this},0);C.BX._Init.call(this.Db={I:this},0);
C.AkV._Init.call(this.C$={I:this},0);C.AxB._Init.call(this.CH={I:this},0);C.AsC.
_Init.call(this.Gn={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.H0;var B;this.N.Z(true);this.Dr(C.IM);this.Y.H(Ff);this.Y.JX(1);this.KM=A._GetAutoObject(
A.Device.Helper).Abr(this.AnimalType.Q);this.B0.H(Ah1);this.B0.Aj(true);this.B0.
T(A.aaR(A.acf.Aft));this.Db.H(Ayo);this.Db.Aj(true);this.Db.T(A.aaR(A.acf.Afo));
this.C$.H(Aop);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.KM));this.C$.Ga(1000);this.
C$.EV(99000);this.C$.Ahv(A._GetAutoObject(A.Device.Helper).Abr(this.AnimalType.Q
));this.CH.H(Ah2);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Gn.H(AW9);
this.Gn.Aj(true);this.Gn.T(A.aaR(A.acf.Jk));this.Ay.H(Ayp);this.J(this.Y,0);this.
J(this.B0,0);this.J(this.Db,0);this.J(this.C$,0);this.J(this.CH,0);this.J(this.Gn
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.Gender.L2(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.L2(A._GetAutoObject(A.Device.Helper).W);this.Breed.
L2(A._GetAutoObject(A.Device.Helper).W);this.Jk.L2(A._GetAutoObject(A.Device.Helper
).W);this.B0.Au([B=this.AnimalType,B.B$,B.Cb]);this.B0.CK(this.AnimalType);this.
Db.Au([B=this.Gender,B.B$,B.Cb]);this.Db.CK(this.Gender);this.C$.Au([this,this.Awc
,this.AeY]);this.CH.Gs([this,this.D_,this.GS]);this.CH.L1([B=this.CH,B.FV]);this.
CH.L4(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cb]);this.CH.CK(this.Breed
);this.CH.Anz(this.Pp);this.Gn.Gs([this,this.D_,this.GS]);this.Gn.L1([B=this.Gn,
B.FV]);this.Gn.L4(A.aaL(A.ach.Edit));this.Gn.Au([B=this.Jk,B.B$,B.Cb]);this.Gn.CK(
this.Jk);this.Gn.Anz(this.AsX);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.Jk._Done();this.Pp._Done();this.AsX._Done();this.B0._Done();this.Db._Done(
);this.C$._Done();this.CH._Done();this.Gn._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jk._ReInit();this.
Pp._ReInit();this.AsX._ReInit();this.B0._ReInit();this.Db._ReInit();this.C$._ReInit(
);this.CH._ReInit();this.Gn._ReInit();this.Ay._ReInit();this.B0.T(A.aaR(A.acf.Aft
));this.Db.T(A.aaR(A.acf.Afo));this.C$.T(A.aaR(A.acf.KM));this.CH.T(A.aaR(A.acf.
Breed));this.Gn.T(A.aaR(A.acf.Jk));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wy={Azd:false,LQ:function(G){if(A._GetAutoObject(A.Device.Device).An.Lj())A._GetAutoObject(
A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(A.Device.Helper
).Aqk(A._GetAutoObject(A.Device.Helper).W);},Aup:function(){this.N.CS(A.jV);this.
N.C3(A.aaL(A.ach.ADL));this.N.Ca=[this,this.AyZ];},CC:function(G){if(!this.Azd){
this.Azd=true;A.pe([this,this.AcT],this);}else C.Aru.CC.call(this,G);},AAC:function(
G){A._GetAutoObject(C.A8).Cd(49);},_Init:function(aArg){C.Aru._Init.call(this,aArg
);this.__proto__=C.Wy;this.J3(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IM={_Init:function(aArg){C.ADr._Init.call(this,aArg);this.__proto__=C.IM;this.
A_o(false);},_className:"Application::HeaderSelectedAnimalId"};C.I7={Filter:null
,Gender:null,AnimalType:null,Transponder:null,El:null,Y:null,P6:null,S7:null,Oc:
null,S8:null,Ns:null,Ox:null,RR:null,Oy:null,RS:null,NI:null,Lf:null,Ju:null,KY:
null,Mx:null,Yr:null,S9:null,RT:null,Ay:null,Ax3:0,Ax2:0,AuM:0,AuL:0,Art:0,AsO:0
,Avo:0,Avp:0,Am6:true,Amv:false,Aoc:false,Init:function(aArg){A.zX([this,this.Avu
],this.Lf.Q,0);A.zX([this,this.AuR],this.Ju.Q,0);A.zX([this,this.Bqv],this.KY.Q,
0);A.zX([this,this.BkJ],this.Mx.Q,0);A.zX([this,this.BqZ],this.Ns.Q,0);A.zX([this
,this.BqY],this.Oc.Q,0);A.zX([this,this.Bhy],this.NI.Q,0);A.zX([this,this.Bhx],this.
Oy.Q,0);this.Bb(this.P6);},DE:function(G){var Fi=0;var X=this.AV;switch(this.Cq.
CP){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;
}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);this.MT(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E$(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ew:function(G){A._GetAutoObject(
C.A8).FB();},A3l:function(G){var EE=(C.Aer.isPrototypeOf(G)?G:null);if(!EE)return;
var Aw=this.Filter.DL(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nq(Aw);A.abo([this
,this.Fp,this.Ft],0);}else{if(EE.Er===11){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===12){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===8){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else A.ab5("%s",AHQ+EE.Er.toFixed());if(!!Aw){this.Filter.
CX(Aw);A.abo([this,this.Fp,this.Ft],0);}}},BAK:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A8).FB();},AAA:function(G){var EE=(
C.Am0.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.DL(EE.Er,EE.Operator
);if(!!Aw){this.Filter.Nq(Aw);A.abo([this,this.Fp,this.Ft],0);}else{if(EE.Er===7
){Aw=A._NewObject(A.Device.GenderFilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;
}else if(EE.Er===14){Aw=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;}else if((EE.Er===22)||(EE.Er===26)){var A1k=A._NewObject(
A.Device.UInt64FilterCriterion,0);A1k.EJ=EE.Er;A1k.Operator=0;Aw=A1k;}else A.ab5(
"%s",AHQ+EE.Er.toFixed());if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fp,this.Ft
],0);}}},A_j:function(E){if(this.Avo===E)return;this.Avo=E;A.abo([this,this.Blo,
this.A_j],0);},A_k:function(E){if(this.Avp===E)return;this.Avp=E;A.abo([this,this.
Blp,this.A_k],0);},Avu:function(G){var F;this.A_k((F=this.Lf.Q,F[1].call(F[0])));
var Aw=this.Filter.DL(7,0);if(!!Aw){var AzV=(A.Device.GenderFilterCriterion.isPrototypeOf(
Aw)?Aw:null);if(!!AzV)AzV.A5=this.Avp;else A.ab5("%s",AfF);}},AuR:function(G){var
F;this.A_j((F=this.Ju.Q,F[1].call(F[0])));var Aw=this.Filter.DL(14,0);if(!!Aw){var
U9=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!U9)U9.A5=
this.Avo;else A.ab5("%s",AfF);}},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},A_2:function(
E){if(this.AsO===E)return;this.AsO=E;A.abo([this,this.Bl2,this.A_2],0);},Bqv:function(
G){var F;this.A_2((F=this.KY.Q,F[1].call(F[0])));var Aw=this.Filter.DL(22,1);if(
!!Aw){var Ajc=(A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Ajc
)switch(this.AsO){case 1:Ajc.Operator=5;break;case 0:Ajc.Operator=0;break;default:
A.ab5("%s%e",AHR,this.AsO);}else A.ab5("%s",AfF);}},A_w:function(E){if(this.Art===
E)return;this.Art=E;A.abo([this,this.BlE,this.A_w],0);},BkJ:function(G){var F;this.
A_w((F=this.Mx.Q,F[1].call(F[0])));var Aw=this.Filter.DL(26,1);if(!!Aw){var At5=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!At5)switch(this.Art
){case 1:At5.Operator=5;break;case 0:At5.Operator=0;break;default:A.ab5("%s%e",AHR
,this.Art);}else A.ab5("%s",AfF);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P6.Bk([this,this.Fp,this.Ft]);this.S7.
Bk([this,this.Fp,this.Ft]);this.Oc.Bk([this,this.Fp,this.Ft]);this.S8.Bk([this,this.
Fp,this.Ft]);this.Ns.Bk([this,this.Fp,this.Ft]);this.Ox.Bk([this,this.Fp,this.Ft
]);this.RR.Bk([this,this.Fp,this.Ft]);this.Oy.Bk([this,this.Fp,this.Ft]);this.RS.
Bk([this,this.Fp,this.Ft]);this.NI.Bk([this,this.Fp,this.Ft]);this.Lf.Bk([this,this.
Fp,this.Ft]);this.Ju.Bk([this,this.Fp,this.Ft]);this.KY.Bk([this,this.Fp,this.Ft
]);this.Mx.Bk([this,this.Fp,this.Ft]);this.Yr.Bk([this,this.Fp,this.Ft]);this.S9.
Bk([this,this.Fp,this.Ft]);this.RT.Bk([this,this.Fp,this.Ft]);this.Asa(false);A.
pe([this,this.A4X],this);var Bes=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DL(1,2))?B:null);if(!!Bes){this.Asa(true);this.AF9(Bes.A5);}var BdW=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DL(1,3))?B:null);if(!!
BdW){this.Asa(true);this.AF_(BdW.A5);}this.ArK(false);A.pe([this,this.ALq],this);
var Ber=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DL(4,3))?B:null
);if(!!Ber){this.ArK(true);this.AEX(A._GetAutoObject(A.Device.Helper).Mb(Ber.A5,
A._GetAutoObject(A.Device.Helper).Dv()));}var BdV=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DL(4,2))?B:null);if(!!BdV){this.ArK(true);this.AEZ(A.
_GetAutoObject(A.Device.Helper).Mb(BdV.A5,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var AzV=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DL(7,0
))?B:null);if(!!AzV)this.Lf.Bx(this.Gender.DZ(AzV.A5));var U9=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DL(14,0))?B:null);if(!!U9)this.Ju.Bx(this.AnimalType.
DZ(U9.A5));var Ajc=this.Filter.DL(22,1);if(!!Ajc){if(!Ajc.Operator)this.KY.Bx(0);
else this.KY.Bx(1);}var At5=this.Filter.DL(26,1);if(!!At5){if(!At5.Operator)this.
Mx.Bx(0);else this.Mx.Bx(1);}},Ft:function(Aq){this.Bk(Aq);},AF_:function(E){if(
this.Ax3===E)return;this.Ax3=E;A.abo([this,this.A9F,this.AF_],0);},AF9:function(
E){if(this.Ax2===E)return;this.Ax2=E;A.abo([this,this.A9E,this.AF9],0);},BqZ:function(
G){var F;this.AF_((F=this.Ns.Q,F[1].call(F[0])));var Aw=this.Filter.DL(1,3);if(!
!Aw){var ABE=(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!ABE)
ABE.A5=this.Ax3;else A.ab5("%s",AfF);}},BqY:function(G){var F;this.AF9((F=this.Oc.
Q,F[1].call(F[0])));var Aw=this.Filter.DL(1,2);if(!!Aw){var ABE=(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!ABE)ABE.A5=this.Ax2;else A.ab5("%s",AfF);}},BeX:
function(G){var EE=(C.AjK.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.
DL(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nq(Aw);A.abo([this,this.Fp,this.Ft],0
);}else{if(EE===this.S7){Aw=A._NewObject(A.Device.Int32FilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:
null).A5=this.Ax2;this.Bb(this.Oc);}else if(EE===this.S8){Aw=A._NewObject(A.Device.
Int32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=this.Ax3;this.Bb(this.Ns);}if(!!Aw){this.Filter.CX(
Aw);A.abo([this,this.Fp,this.Ft],0);}}A.pe([this,this.A4X],this);},A4X:function(
G){var A25=!!this.Filter.DL(this.Oc.Er,this.Oc.Operator);var A4Y=!!this.Filter.DL(
this.Ns.Er,this.Ns.Operator);A._GetAutoObject(A.Device.Helper).J4(this.S7,this.Aoc
);A._GetAutoObject(A.Device.Helper).J4(this.S8,this.Aoc);A._GetAutoObject(A.Device.
Helper).J4(this.Oc,A25);A._GetAutoObject(A.Device.Helper).J4(this.Ns,A4Y);},MT:function(
G){var B;this.Y.VA(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},BBG:function(G){A.pe([this,this.Fk],this);A.pe([this,this.
MT],this);},BAH:function(G){this.Asa(!this.Aoc);if(this.Aoc===false){var Aw=this.
Filter.DL(this.P6.Er,this.P6.Operator);while(!!Aw){this.Filter.Nq(Aw);Aw=this.Filter.
DL(this.P6.Er,this.P6.Operator);}A.abo([this,this.Fp,this.Ft],0);}},Asa:function(
E){if(this.Aoc===E)return;this.Aoc=E;A.abo([this,this.A9D,this.Asa],0);A.pe([this
,this.A4X],this);},AEZ:function(E){if(this.AuM===E)return;this.AuM=E;A.abo([this
,this.A8J,this.AEZ],0);},AEX:function(E){if(this.AuL===E)return;this.AuL=E;A.abo([
this,this.A8H,this.AEX],0);},Bhy:function(G){var F;this.AEZ((F=this.NI.Q,F[1].call(
F[0])));var Aw=this.Filter.DL(4,2);if(!!Aw){var AfS=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!AfS){var AaP=A._GetAutoObject(A.Device.Helper).ZS(
this.AuM-1);AfS.A5=AaP;}else A.ab5("%s",AfF);}},Bhx:function(G){var F;this.AEX((
F=this.Oy.Q,F[1].call(F[0])));var Aw=this.Filter.DL(4,3);if(!!Aw){var AfS=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!AfS){var AaP=A._GetAutoObject(
A.Device.Helper).ZS(this.AuL);AfS.A5=AaP;}else A.ab5("%s",AfF);}},ALq:function(G
){var A25=this.Am6&&!!this.Filter.DL(this.Oy.Er,this.Oy.Operator);var A4Y=this.Am6&&
!!this.Filter.DL(this.NI.Er,this.NI.Operator);A._GetAutoObject(A.Device.Helper).
J4(this.Ox,this.Am6);A._GetAutoObject(A.Device.Helper).J4(this.RR,this.Am6&&this.
Amv);A._GetAutoObject(A.Device.Helper).J4(this.RS,this.Am6&&this.Amv);A._GetAutoObject(
A.Device.Helper).J4(this.Oy,A25);A._GetAutoObject(A.Device.Helper).J4(this.NI,A4Y
);},ArK:function(E){if(this.Amv===E)return;this.Amv=E;A.abo([this,this.A8G,this.
ArK],0);A.pe([this,this.ALq],this);},BeW:function(G){var EE=(C.AjK.isPrototypeOf(
G)?G:null);if(!EE)return;var Aw=this.Filter.DL(EE.Er,EE.Operator);if(!!Aw){this.
Filter.Nq(Aw);A.abo([this,this.Fp,this.Ft],0);}else{if(EE===this.RR){Aw=A._NewObject(
A.Device.UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper
).ZS(this.AuL);this.Bb(this.Oy);}else if(EE===this.RS){Aw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper).ZS(this.AuM-1);this.
Bb(this.NI);}if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fp,this.Ft],0);}}A.pe([
this,this.ALq],this);},BAG:function(G){this.ArK(!this.Amv);if(this.Amv===false){
var Aw=this.Filter.DL(this.Ox.Er,this.Ox.Operator);while(!!Aw){this.Filter.Nq(Aw
);Aw=this.Filter.DL(this.Ox.Er,this.Ox.Operator);}A.abo([this,this.Fp,this.Ft],0
);}},Bnp:function(E){if(this.Am6===E)return;this.Am6=E;A.pe([this,this.ALq],this
);},Fp:function(){return this.Filter;},Blp:function(){return this.Avp;},Blo:function(
){return this.Avo;},Bl2:function(){return this.AsO;},BlE:function(){return this.
Art;},A9F:function(){return this.Ax3;},A9E:function(){return this.Ax2;},A9D:function(
){return this.Aoc;},A8J:function(){return this.AuM;},A8H:function(){return this.
AuL;},A8G:function(){return this.Amv;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABX._Init.call(this.Transponder={I:this},0);C.ABX._Init.
call(this.El={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.AB8._Init.call(
this.P6={I:this},0);C.AjK._Init.call(this.S7={I:this},0);C.Abq._Init.call(this.Oc={
I:this},0);C.AjK._Init.call(this.S8={I:this},0);C.Abq._Init.call(this.Ns={I:this
},0);C.AB8._Init.call(this.Ox={I:this},0);C.AjK._Init.call(this.RR={I:this},0);C.
ACV._Init.call(this.Oy={I:this},0);C.AjK._Init.call(this.RS={I:this},0);C.ACV._Init.
call(this.NI={I:this},0);C.Am0._Init.call(this.Lf={I:this},0);C.Am0._Init.call(this.
Ju={I:this},0);C.Am0._Init.call(this.KY={I:this},0);C.Am0._Init.call(this.Mx={I:
this},0);C.QF._Init.call(this.Yr={I:this},0);C.QF._Init.call(this.S9={I:this},0);
C.QF._Init.call(this.RT={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I7;var B;this.N.Z(true);this.N.CS(A.aaR(A.acf.A5w));this.Dr(C.APF);this.Gender.
Au(this.Avp);this.AnimalType.Au(this.Avo);this.Transponder.Au(this.AsO);this.El.
Au(this.Art);this.Y.H(Ff);this.Y.JX(1);this.P6.H(IX);this.P6.Aj(true);this.P6.T(
A._GetAutoObject(A.Device.Helper).AmY(0,1));this.P6.Nj(1);this.S7.H(Qd);this.S7.
Aj(true);this.S7.T(A.aaR(A.acf.AEi));this.S7.Nj(1);this.S7.OR(2);this.Oc.H(Aag);
this.Oc.Nj(1);this.Oc.OR(2);this.Oc.AF1(A.aaR(A.acf.GN));this.S8.H(Alh);this.S8.
Aj(true);this.S8.T(A.aaR(A.acf.AHj));this.S8.Nj(1);this.S8.OR(3);this.Ns.H(Aoq);
this.Ns.Aj(true);this.Ns.Nj(1);this.Ns.OR(3);this.Ns.AF1(A.aaR(A.acf.GN));this.Ox.
H(AW_);this.Ox.Aj(true);this.Ox.T(A.aaR(A.acf.RQ));this.Ox.Nj(4);this.RR.H(AW$);
this.RR.Aj(true);this.RR.T(A.aaR(A.acf.AEi));this.RR.Nj(4);this.RR.OR(3);this.Oy.
H(AXa);this.Oy.Nj(4);this.Oy.OR(3);this.Oy.A_B(2);this.RS.H(AXb);this.RS.Aj(true
);this.RS.T(A.aaR(A.acf.AHj));this.RS.Nj(4);this.RS.OR(2);this.NI.H(AXc);this.NI.
Aj(true);this.NI.Nj(4);this.NI.OR(2);this.NI.A_B(3);this.Lf.H(As$);this.Lf.Aj(true
);this.Lf.Nj(7);this.Lf.Ahx(0);this.Lf.OR(0);this.Ju.H(Xj);this.Ju.Aj(true);this.
Ju.Nj(14);this.Ju.Ahx(0);this.Ju.OR(0);this.KY.H(Xj);this.KY.Aj(true);this.KY.Nj(
22);this.KY.Ahx(0);this.KY.OR(1);this.Mx.H(Xj);this.Mx.Aj(true);this.Mx.Nj(26);this.
Mx.Ahx(0);this.Mx.OR(1);this.Yr.H(Xj);this.Yr.Aj(true);this.Yr.Nj(11);this.Yr.Ahx(
0);this.Yr.OR(0);this.S9.H(Xj);this.S9.Aj(true);this.S9.Nj(12);this.S9.Ahx(0);this.
S9.OR(0);this.RT.H(Xj);this.RT.Aj(true);this.RT.Nj(8);this.RT.Ahx(0);this.RT.OR(
0);this.Ay.H(Iu);this.J(this.Y,0);this.J(this.P6,0);this.J(this.S7,0);this.J(this.
Oc,0);this.J(this.S8,0);this.J(this.Ns,0);this.J(this.Ox,0);this.J(this.RR,0);this.
J(this.Oy,0);this.J(this.RS,0);this.J(this.NI,0);this.J(this.Lf,0);this.J(this.Ju
,0);this.J(this.KY,0);this.J(this.Mx,0);this.J(this.Yr,0);this.J(this.S9,0);this.
J(this.RT,0);this.J(this.Ay,0);this.N.CE=[this,this.Ew];this.N.Ca=[this,this.BAK
];this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.BBG];this.P6.AR=[this,this.BAH
];this.P6.Au([this,this.A9D,this.Asa]);this.S7.AR=[this,this.BeX];this.Oc.Gs([this
,this.D_,this.GS]);this.Oc.Au([this,this.A9E,this.AF9]);this.S8.AR=[this,this.BeX
];this.Ns.Gs([this,this.D_,this.GS]);this.Ns.Au([this,this.A9F,this.AF_]);this.Ox.
AR=[this,this.BAG];this.Ox.Au([this,this.A8G,this.ArK]);this.RR.AR=[this,this.BeW
];this.Oy.Gs([this,this.D_,this.GS]);this.Oy.Au([this,this.A8H,this.AEX]);this.RS.
AR=[this,this.BeW];this.NI.Gs([this,this.D_,this.GS]);this.NI.Au([this,this.A8J,
this.AEZ]);this.Lf.AR=[this,this.AAA];this.Lf.Au([B=this.Gender,B.B$,B.Cb]);this.
Lf.CK(this.Gender);this.Ju.AR=[this,this.AAA];this.Ju.Au([B=this.AnimalType,B.B$
,B.Cb]);this.Ju.CK(this.AnimalType);this.KY.AR=[this,this.AAA];this.KY.Au([B=this.
Transponder,B.B$,B.Cb]);this.KY.CK(this.Transponder);this.Mx.AR=[this,this.AAA];
this.Mx.Au([B=this.El,B.B$,B.Cb]);this.Mx.CK(this.El);this.Yr.AR=[this,this.A3l];
this.S9.AR=[this,this.A3l];this.RT.AR=[this,this.A3l];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.El._Done();this.Y._Done();this.P6._Done();this.S7._Done();this.Oc._Done(
);this.S8._Done();this.Ns._Done();this.Ox._Done();this.RR._Done();this.Oy._Done(
);this.RS._Done();this.NI._Done();this.Lf._Done();this.Ju._Done();this.KY._Done(
);this.Mx._Done();this.Yr._Done();this.S9._Done();this.RT._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.El._ReInit();
this.Y._ReInit();this.P6._ReInit();this.S7._ReInit();this.Oc._ReInit();this.S8._ReInit(
);this.Ns._ReInit();this.Ox._ReInit();this.RR._ReInit();this.Oy._ReInit();this.RS.
_ReInit();this.NI._ReInit();this.Lf._ReInit();this.Ju._ReInit();this.KY._ReInit(
);this.Mx._ReInit();this.Yr._ReInit();this.S9._ReInit();this.RT._ReInit();this.Ay.
_ReInit();this.N.CS(A.aaR(A.acf.A5w));this.S7.T(A.aaR(A.acf.AEi));this.Oc.AF1(A.
aaR(A.acf.GN));this.S8.T(A.aaR(A.acf.AHj));this.Ns.AF1(A.aaR(A.acf.GN));this.Ox.
T(A.aaR(A.acf.RQ));this.RR.T(A.aaR(A.acf.AEi));this.RS.T(A.aaR(A.acf.AHj));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Oc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ns)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ox)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Oy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.NI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lf)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ju)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$F={ZT:null,BoJ:
function(Byc){var EF=A._NewObject(C.A$E,0);EF.AB=Byc;EF.My=this.ZT;this.ZT=EF;},
A$j:function(){var Vo=null;if(!!this.ZT){Vo=this.ZT.AB;this.ZT=this.ZT.My;}return Vo;
},Contains:function(Alq){var EF=this.ZT;while(!!EF){if(EF.AB.An8===Alq)return true;
EF=EF.My;}return false;},Boz:function(){if(!!this.ZT)return this.ZT.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$F;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZT)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A$E={AB:null,
My:null,_Init:function(aArg){this.__proto__=C.A$E;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.My)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMo={AR$:function(){A._GetAutoObject(
A.Device.Helper).Axy(this.H9,0);A._GetAutoObject(C.A8).FB();},A8a:function(){this.
H9.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();},A6$:function(
){return A.aaL(A.ach.Am4);},_Init:function(aArg){C.AGq._Init.call(this,aArg);this.
__proto__=C.AMo;this.Dr(C.IM);},_className:"Application::AnimalActionRateScreen"
};C.AMk={WF:function(G){this.Agx();this.I5(A.aaR(A.acf.AVx),[this,this.ATY],5);this.
I5(A.aaR(A.acf.A5Z),[this,this.Bmp],4);this.I5(A.aaR(A.acf.AGp),[this,this.ATJ],
3);this.I5(A.aaR(A.acf.An2),[this,this.AwY],2);this.I5(A.aaR(A.acf.AdV),[this,this.
AE2],1);this.I5(A.aaR(A.acf.AuH),[this,this.AEW],0);A._GetAutoObject(C.BS).Fz();
A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.Ani)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abt:function(){return C.ANe;},Abu:function(
){return C.ADt;},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mv();var
Azb=A._NewObject(A.Device.BoolFilterCriterion,0);Azb.Initialize(8,0,true,true);Be.
CX(Azb);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HQ:function(G){var F;C.GJ.
HQ.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.
N.OS(false);this.N.OT(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(40);},_Init:
function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AMk;var B;this.Dr(C.AO6
);this.Dl(A.aaR(A.acf.A8g));this.AwT([B=A._GetAutoObject(A.Device.Device),B.A8K,
B.Bbp]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.A8g));}
,_className:"Application::AlarmListScreen"};C.ANF={DE:function(G){},Agg:function(
G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gt);var Aa=(C.ACd.isPrototypeOf(G)?G:null);
if(!!Aa){A._GetAutoObject(A.Device.Helper).G8(Aa.Hs);A._GetAutoObject(C.A8).Cd(13
);}},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mv();var Azv=A._NewObject(
A.Device.BoolFilterCriterion,0);Azv.Initialize(9,0,true,true);Be.CX(Azv);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HQ:function(G){C.GJ.HQ.call(this,G);this.N.OS(false
);this.N.OT(false);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.ANF;this.Dr(C.AO8);this.Dl(A.aaR(A.acf.A8h));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8h));},_className:"Application::ControlListScreen"
};C.Aer={Filter:null,Er:0,Jf:10,TableId:0,Operator:1,CQ:function(){var F;this.Tw((
F=this.Filter,F[1].call(F[0])).DL(this.Er,this.Operator));},Bl:function(aSize){C.
Co.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jf),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mf],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mf],E,0);A.pe([this,this.
Mf],this);},Mf:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tw((F=this.Filter,F[1].call(F[0])).DL(this.Er,this.Operator));else this.
Tw(null);},Ahx:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mf],this);},Nj:function(E){if(this.Er===E)return;this.Er=E;A.pe([this,this.
Mf],this);},Tw:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A64(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).AmY(this.TableId
,this.Er));},OR:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mf],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aer;this.V.H(AHS);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CQ();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QF={H8:null,Bl:function(aSize){var B;C.Aer.Bl.call(this,aSize);this.H8.H([(aSize[
0]-((B=this.H8.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jf,0,this.
H8.M[0]-this.Jf,aSize[1]]);},Tw:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).AmY(this.TableId,this.Er));var Aw=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Aw&&Aw.A5)this.H8.Cv(1);else this.H8.Cv(0);},_Init:function(aArg
){C.Aer._Init.call(this,aArg);A.acg.Ap._Init.call(this.H8={I:this},0);this.__proto__=
C.QF;this.H8.H(AHT);this.H8.Cv(0);this.J(this.H8,0);this.H8.Ax(A.aaL(A.ach.AqQ));
},_Done:function(){this.__proto__=C.Aer;this.H8._Done();C.Aer._Done.call(this);}
,_ReInit:function(){C.Aer._ReInit.call(this);this.H8._ReInit();},_Mark:function(
D){var B;C.Aer._Mark.call(this,D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APF={Ap:null,Text:null,Dg:function(
E){C.BR.Dg.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APF;this.Ap.H(AXd);this.Text.H(AXe);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.AeC));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BR;this.Ap._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjT={
AW:null,T9:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BR.Bl.call(this,aSize);this.T9.H(A.abJ(this.T9.M,A.abe(this.AW.M.slice(0
,2),AXf)));this.T9.H(A.abK(this.T9.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AXg
)));},Ai:function(Ae){var B;C.BR.Ai.call(this,Ae);var ID=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(ID)this.T9.L(A.jb.AV);else this.T9.L(A.jb.Am5);},Dg:function(E){
C.BR.Dg.call(this,E);this.Gw.L(E);this.D2.Zu(E);},WG:function(E){C.BR.WG.call(this
,E);this.D2.CV(E);},Akq:function(){return this.AW.Akq();},Awk:function(){return this.
AW.Awk();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B_().toFixed(
));},_Init:function(aArg){C.BR._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BW._Init.call(this.T9={I:this},0);A.acg.Ap._Init.call(this.Gw={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C8._Init.call(this.A$={I:this
},0);this.__proto__=C.AjT;this.AW.H(AXh);this.T9.H(AXi);this.T9.Nn(2);this.Gw.H(
AXj);this.Gw.L(A.jb.CU);this.D2.A0(0x14);this.D2.H(AXk);this.D2.Zu(A.jb.Bm);this.
D2.CV(A.jb.Ri);this.D2.Hn(2);this.A$.DC(AXl);this.A$.DM(AXm);this.A$.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.T9,0);this.J(this.Gw,0);this.J(this.D2,0);this.J(this.
A$,0);this.Bb(this.AW);this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.S(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.BR;this.AW._Done();this.T9._Done(
);this.Gw._Done();this.D2._Done();this.A$._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.AW._ReInit();this.T9._ReInit();this.Gw._ReInit(
);this.D2._ReInit();this.A$._ReInit();this.D2.S(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.BR._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DF={Dk:null,Iq:null,Ip:null
,Agf:function(G){if(this.Ez<0)this.L3(1);else if(this.Ez===9)this.L3(0);else this.
L3(this.Ez+1);A.pe(this.Dk,this);},Ai:function(Ae){var B;C.Ez.Ai.call(this,Ae);var
Hf=((Ae&0x10)===0x10);var ID=((Ae&0x40)===0x40);if(ID){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.C4(256);}else if(Hf){this.Background.L(this.M5);this.
Text.L(A.jb.Text);this.C4(256);}else{this.Background.L(this.M5);this.Text.L(A.jb.
Text);this.C4(128);}},Age:function(G){if(this.Ez<=0)this.L3(9);else this.L3(this.
Ez-1);A.pe(this.Dk,this);},_Init:function(aArg){C.Ez._Init.call(this,aArg);A.Core.
BL._Init.call(this.Iq={I:this},0);A.Core.BL._Init.call(this.Ip={I:this},0);this.
__proto__=C.DF;this.Iq.Filter=4;this.Ip.Filter=5;this.Iq.BM=[this,this.Agf];this.
Iq.D1=[this,this.Agf];this.Ip.BM=[this,this.Age];this.Ip.D1=[this,this.Age];},_Done:
function(){this.__proto__=C.Ez;this.Iq._Done();this.Ip._Done();C.Ez._Done.call(this
);},_ReInit:function(){C.Ez._ReInit.call(this);this.Iq._ReInit();this.Ip._ReInit(
);},_Mark:function(D){var B;C.Ez._Mark.call(this,D);if((B=this.Dk)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Iq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ip)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Dk:null,Cu:null,CW:null,Dy:null,Eq:null,FZ:null,ET:null,Fm:null,Fb:null,M_:0,ARq:
false,Aqt:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqt)this.ET.AeZ(true);else this.ET.AeZ(false);},AwP:function(E){var B;
if(E===this.Akq())return;var Af_=E;var DV=this.ET;while(!!DV){if(Af_>0){DV.L3(Af_
%10);Af_=(Af_/10)|0;}else DV.L3(-1);DV=(C.DF.isPrototypeOf(B=this.QJ(DV,2,0x11))?
B:null);}},Akq:function(){return A.wz(this.Awk(),-1,10);},Or:function(G){if(this.
FZ.Ez>=0)this.BgF(7);},M0:function(G){if(((this.Akq()>0)||this.ARq)&&(this.Cu.Ez<
0))this.BgF(2);else if(this.Akq()<=0)this.Fb.NM=true;},Adu:function(G){A.pe(this.
Dk,this);},BgF:function(GA){var B;var ALE=0;var DV=null;switch(GA){case 2:{DV=this.
Cu;ALE=7;}break;case 7:{DV=this.ET;ALE=2;}break;default:throw new Error(AXn);}while(
!!DV){var A3e=(C.DF.isPrototypeOf(B=this.QJ(DV,ALE,0x11))?B:null);if(!!A3e)DV.L3(
A3e.Ez);else if(ALE===7)DV.L3(0);else DV.L3(-1);DV=A3e;}A.pe([this,this.Adu],this
);},AeZ:function(E){if(this.Aqt===E)return;this.Aqt=E;this.Am();},Bnq:function(E
){if(this.ARq===E)return;this.ARq=E;},ATo:function(E){var B;if(E===this.Awk())return;
var Af_=E;var DV=this.ET;while(!!DV){if(Af_.length>0){DV.L3(A.wz(A.ab2(Af_,1),-1
,10));Af_=A.abV(Af_,Af_.length-1);}else DV.L3(-1);DV=(C.DF.isPrototypeOf(B=this.
QJ(DV,2,0x11))?B:null);}},Awk:function(){var B;var IB=A.jV;var O=0;var B6=this.Cu;
for(;O<6;O=O+1){if(!!B6&&(B6.Ez>=0))IB=IB+B6.Ez.toFixed();B6=(C.DF.isPrototypeOf(
B=this.TT(B6,0x11))?B:null);}return IB;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Cu={I:this},0);C.DF._Init.call(this.CW={I:this},
0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF.
_Init.call(this.FZ={I:this},0);C.DF._Init.call(this.ET={I:this},0);A.Core.BL._Init.
call(this.Fm={I:this},0);A.Core.BL._Init.call(this.Fb={I:this},0);this.__proto__=
C.AW;this.H(Ayq);this.Cu.A0(0x3);this.Cu.H(AHU);this.CW.A0(0x3);this.CW.H(AHV);this.
Dy.A0(0x3);this.Dy.H(AHW);this.Eq.A0(0x3);this.Eq.H(AHX);this.FZ.A0(0x3);this.FZ.
H(AHY);this.ET.A0(0x3);this.ET.H(AHZ);this.ET.L3(0);this.Fm.Filter=6;this.Fb.Filter=
7;this.M_=A.jb.CJ;this.J(this.Cu,0);this.J(this.CW,0);this.J(this.Dy,0);this.J(this.
Eq,0);this.J(this.FZ,0);this.J(this.ET,0);this.Bb(this.ET);this.Cu.Dk=[this,this.
Adu];this.CW.Dk=[this,this.Adu];this.Dy.Dk=[this,this.Adu];this.Eq.Dk=[this,this.
Adu];this.FZ.Dk=[this,this.Adu];this.ET.Dk=[this,this.Adu];this.Fm.BM=[this,this.
Or];this.Fb.BM=[this,this.M0];},_Done:function(){this.__proto__=A.Core.P;this.Cu.
_Done();this.CW._Done();this.Dy._Done();this.Eq._Done();this.FZ._Done();this.ET.
_Done();this.Fm._Done();this.Fb._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cu._ReInit();this.CW._ReInit();this.Dy._ReInit(
);this.Eq._ReInit();this.FZ._ReInit();this.ET._ReInit();this.Fm._ReInit();this.Fb.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Dk)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bh_="bc004fbc";C.BDg={Undefined:0,BEk:1,BDy:2};C.AkK={
Tu:null,AiW:null,Ld:null,ANJ:null,An$:null,push:function(MO){if(!this.Tu){MO.Ahz=
null;MO.My=null;this.Tu=MO;this.AiW=this.Tu;}else{MO.Ahz=this.AiW;MO.My=null;this.
AiW.My=MO;this.AiW=MO;}},BCe:function(MO){var Ql=this.Tu;while(!!Ql){if(Ql.JQ.Id===
MO.Id)return Ql;Ql=Ql.My;}return Ql;},BBZ:function(MO){if(MO===this.Tu)this.pop(
);else if(MO===this.AiW){MO=MO.Ahz;if(!!MO)MO.My=null;this.AiW=MO;}else{MO.Ahz.My=
MO.My;MO.My.Ahz=MO.Ahz;}},Ahr:function(E){var F;if(this.Ld===E)return;this.Ld=E;
if(!!this.Ld)this.Ld.AgM(2);(F=this.ANJ,F[2].call(F[0],this.Ld));},Vl:function(G
){var Ql=(C.AT$.isPrototypeOf(G)?G:null);if(!!Ql){if(!Ql.JQ.PopupState){if(!this.
Ld)this.Ahr(this.top());}else if(Ql.JQ.PopupState===4){this.pop();this.Ahr(this.
top());}else if(Ql.JQ.PopupState===5){this.pop();this.Ahr(this.top());}else if(Ql.
JQ.PopupState===7){this.pop();this.Ahr(this.top());}else if(Ql.JQ.PopupState===8
){this.pop();this.Ahr(this.top());}else if(Ql.JQ.PopupState===6){if(Ql===this.Ld
){this.pop();this.Ahr(this.top());}else this.BBZ(Ql);}else if(Ql.JQ.PopupState===
3){this.pop();this.Ahr(this.top());}}},pop:function(){var AK0=null;if(!!this.Tu){
AK0=this.Tu;if(this.Tu===this.AiW){this.Tu=null;this.AiW=null;}else{this.Tu=this.
Tu.My;if(!this.Tu)throw new Error(AXo);this.Tu.Ahz=null;}AK0.Ahz=null;AK0.My=null;
}return AK0;},top:function(){return this.Tu;},BBH:function(G){var B;var At6=(A.Device.
PopupContext.isPrototypeOf(B=this.An$.JQ)?B:null);if(!!At6){var A4t=this.BCe(At6
);if(!!A4t){A4t.A9_(At6);if(!At6.Show)A4t.AgM(6);}else if(At6.Show){var AKE=A._NewObject(
C.AT$,0);AKE.A9_(At6);AKE.AS8=[this,this.Vl];this.push(AKE);AKE.AgM(0);}}},_Init:
function(aArg){A.Core.A$3._Init.call(this.An$={I:this},0);this.__proto__=C.AkK;this.
An$.ASz=[this,this.BBH];this.An$.BmK(A._GetAutoObject(A.Device.Device).AnP);A.h7++;
},_Done:function(){this.__proto__=null;this.An$._Done();A.h7--;},_ReInit:function(
){this.An$._ReInit();},_Mark:function(D){var B;if((B=this.Tu)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ld)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANJ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AT$={Rm:null,My:null,Ahz:null,JQ:null,AS8:null,PopupIdToString:null,AfY:function(
Bxk,BxT,Byb,Bx4,Bx6,Bx3,BxC){var Vn=A._NewObject(C.AT_,0);Vn.BnT(this.JQ.Id);Vn.
A_U(Bxk);Vn.AS9=Bx3;Vn.A_W(this.JQ.Ak4);Vn.A_G(this.JQ.AkJ);Vn.BQ=A._NewObject(C.
N,0);Vn.Lp().Ca=Bx6;Vn.Lp().Cf=null;Vn.Lp().CE=Bx4;Vn.Lp().CS(Byb);Vn.Lp().Cw(null
);Vn.Lp().Hy(BxT);Vn.Lp().AFs(BxC);return Vn;},Akr:function(){if(!this.Rm){var Agq=
this.PopupIdToString.BT(this.JQ.Id);switch(this.JQ.Id){case 91:case 92:this.Rm=this.
AfY(Agq,A.jV,A.jV,null,null,[this,this.Agb],0);break;case 39:this.Rm=this.AfY(Agq
,A.aaR(A.acf.AmD),A.aaR(A.acf.Ok),[this,this.A3r],[this,this.A3s],[this,this.Agb
],3);break;case 13:this.Rm=this.AfY(Agq,A.aaR(A.acf.AmD),A.aaR(A.acf.BoV),[this,
this.A3q],[this,this.AKJ],[this,this.Agb],3);break;case 25:this.Rm=this.AfY(Agq,
A.aaR(A.acf.AmD),A.aaR(A.acf.Ok),[this,this.A3q],[this,this.AKJ],[this,this.Agb]
,3);break;case 16:case 24:case 49:case 74:this.Rm=this.AfY(Agq,A.aaR(A.acf.AmD),
A.jV,[this,this.A3q],null,[this,this.Agb],1);break;case 0:case 1:case 2:case 5:case
27:case 64:case 28:case 30:case 42:case 41:case 50:case 51:case 57:case 52:case 53:
case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:case 116:case 34:case
82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:case 36:case 14:
case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:case 69:case 17:
case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:case 98:case 65:
case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:case 70:case 71:
case 113:case 100:case 114:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.Rm=this.AfY(Agq,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKJ],[this,this.Agb],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.Rm=
this.AfY(Agq,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3r],[this,this.A3s],[this
,this.Agb],3);break;case 110:this.Rm=this.AfY(Agq,A.jV,A.jV,null,null,[this,this.
Agb],1);break;case 46:case 111:this.Rm=this.AfY(Agq,A.jV,A.aaR(A.acf.Ok),null,[this
,this.AKJ],[this,this.Agb],1);break;case 4:case 7:case 33:case 115:case 44:case 37:
case 38:case 63:case 95:case 108:case 112:this.Rm=this.AfY(Agq,A.aaR(A.acf.No),A.
aaR(A.acf.Yes),[this,this.A3r],[this,this.A3s],[this,this.Agb],1);break;default:
A.ab5("%s",(AXp+this.JQ.Id.toFixed())+AXq);}}switch(this.JQ.Id){case 16:case 49:
this.Rm.A$a(true);break;case 91:case 92:this.Rm.A$a(false);break;default:;}return this.
Rm;},AKJ:function(G){this.AgM(4);},A3q:function(G){this.AgM(5);},A3s:function(G){
this.AgM(7);},A3r:function(G){this.AgM(8);},Agb:function(G){this.AgM(3);},A9_:function(
E){if(this.JQ===E)return;this.JQ=E;if(!!this.Rm){this.Akr().A_W(this.JQ.Ak4);this.
Akr().A_G(this.JQ.AkJ);}},AgM:function(Bx9){var B;this.JQ.BnU(Bx9);(B=this.AS8)?
B[1].call(B[0],this):null;},BBd:function(G){this.AgM(9);},_Init:function(aArg){A.
Device.PopupIdToString._Init.call(this.PopupIdToString={I:this},0);this.__proto__=
C.AT$;A.h7++;},_Done:function(){this.__proto__=null;this.PopupIdToString._Done();
A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(D){var
B;if((B=this.Rm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.My)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ahz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
JQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS8)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::PopupEntry"};C.Gd={BooleanToYesNo:null,Du:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.BT(aIndex
);},DZ:function(A7){return A7;},H5:function(){return 1;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Gd;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afn={Ux:null,Kg:function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.
AM!==BP){if(!!this.Ux&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Ux,F[
2].call(F[0],false));break;case 1:(F=this.Ux,F[2].call(F[0],true));break;default:;
}A.abo(this.Ux,0);}},Kb:function(G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.
AM!==BP){if(!!this.Ux&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Ux,F[
2].call(F[0],false));break;case 1:(F=this.Ux,F[2].call(F[0],true));break;default:;
}A.abo(this.Ux,0);}},AkD:function(E){if(A.aaZ(this.Ux,E))return;if(!!this.Q)A.z$([
this,this.A36],this.Ux,0);this.Ux=E;if(!!E)A.zX([this,this.A36],E,0);if(!!E)A.pe([
this,this.A36],this);},A36:function(G){var F;if(!!this.Ux){if((F=this.Ux,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BX._Init.call(this,aArg
);this.__proto__=C.Afn;this.J3(this.V,-1);},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.Ux)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AUp={Jj:null,OY:null,IV:null,Gm:null,AL:null,Abi:null,AgS:null,TP:null,Sc:null
,AcD:null,W5:null,Hj:null,ABD:true,Init:function(aArg){var B;A.zX([this,this.Al7
],[B=A._GetAutoObject(A.Device.Device),B.ASY,B.A0F],0);A.pe([this,this.Al7],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABD)this.N.C3(A.aaL(A.ach.
AQ6));else this.N.C3(A.aaL(A.ach.AQ7));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OY.L(A.jb.Bm);this.Sc.Z(false);this.TP.Z(false);this.IV.Z(true);this.Gm.
Ar(false);(F=this.Gm.Q,F[2].call(F[0],this.Gm.B3));this.Background.L(A.jb.Gj);}else
if(this.Abi.Bw){this.OY.L(A.jb.Text);this.Sc.Z(true);this.TP.Z(true);this.IV.Z(false
);this.Gm.Ar(false);(F=this.Gm.Q,F[2].call(F[0],this.Gm.B3));this.Background.L(A.
jb.E1);}else{this.OY.L(A.jb.Text);this.Sc.Z(false);this.TP.Z(false);this.IV.Z(true
);this.Gm.Ar(true);this.Background.L(A.jb.CJ);}if(this.AgS.Bw)this.W5.Z(true);else
this.W5.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhM();},E4:function(
G){A._GetAutoObject(A.Device.Device).An1();A._GetAutoObject(A.Device.Device).Afa(
false);A._GetAutoObject(A.Device.Device).Uw(false);},Al7:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BAU],this);break;case 3:{A.pe([this,this.Bfw],this);A.pe([B=this.Abi,B.AxM],this
);A.pe(this.Abi.ME,this);}break;case 4:A.ab5("%s",AXr);break;default:;}},Ew:function(
G){A._GetAutoObject(C.A8).FB();},BBI:function(G){this.Bok(!this.ABD);},Bok:function(
E){if(this.ABD===E)return;this.ABD=E;if(!E)A._GetAutoObject(A.Device.Device).Afa(
false);this.Am();},BAU:function(G){var B;this.Bfw(this);if(this.ABD)A._GetAutoObject(
A.Device.Device).Afa(true);A._GetAutoObject(A.Device.Device).WI(65280);A._GetAutoObject(
A.Device.Device).Uw(true);A.pe([B=this.Abi,B.StartTimer],this);A.pe([B=this.AgS,
B.StartTimer],this);this.Am();},BAV:function(G){A._GetAutoObject(A.Device.Device
).Afa(false);A._GetAutoObject(A.Device.Device).Uw(false);this.Am();},BAX:function(
G){this.Am();},Bfw:function(G){A._GetAutoObject(A.Device.Device).AhM();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jj._Init.call(this.Jj={I:this},0);C.CG._Init.
call(this.OY={I:this},0);A.acg.Ap._Init.call(this.IV={I:this},0);A.acl.Gm._Init.
call(this.Gm={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Abi={I:this},0);A.Core.Timer._Init.call(this.AgS={I:this},0);A.acg.Ap.
_Init.call(this.TP={I:this},0);A.acg.Ap._Init.call(this.Sc={I:this},0);A.acg.Text.
_Init.call(this.AcD={I:this},0);C.W5._Init.call(this.W5={I:this},0);C.CG._Init.call(
this.Hj={I:this},0);this.__proto__=C.AUp;var B;this.Background.L(A.jb.CJ);this.N.
Z(true);this.Jj.H(AXs);this.Jj.AkG(0);this.OY.H(AXt);this.OY.R(A.aaR(A.acf.A$8));
this.OY.L(A.jb.Text);this.IV.H(AXu);this.IV.L(A.jb.AV);this.IV.Zs(true);this.Gm.
Fr(1750);this.Gm.Ut(750);this.Gm.AkB(0);this.Gm.Ar(true);this.Gm.B3=3;this.AL.H(
Ayr);this.Abi.PV(-1);this.Abi.WH(1000);this.AgS.PV(-1);this.AgS.WH(5000);this.TP.
H(AH0);this.Sc.H(AH0);this.Sc.L(A.jb.E1);this.AcD.H(Ayr);this.AcD.R(A.aaR(A.acf.
A$G));this.AcD.L(A.jb.Text);this.W5.H(Ayr);this.Hj.H(AXv);this.Hj.Ar(false);this.
Hj.R(A.aaR(A.acf.RangeTest));this.Hj.L(A.jb.Text);this.J(this.Jj,0);this.J(this.
OY,0);this.J(this.IV,0);this.J(this.AL,0);this.J(this.TP,0);this.J(this.Sc,0);this.
J(this.AcD,0);this.J(this.W5,0);this.J(this.Hj,0);this.N.CE=[this,this.Ew];this.
N.Ca=[this,this.BBI];this.N.C2(A.aaL(A.ach.E2));this.OY.S(A.aaL(A.fl.Af));this.OY.
AZ(A.aaL(A.fl.Ak));this.OY.Cr(A.aaL(A.fl.Bh));this.IV.Ax(A.aaL(A.ach.ADT));this.
Gm.Q=[B=this.IV,B.ASL,B.Cv];this.Abi.ME=[this,this.BAV];this.AgS.ME=[this,this.BAX
];this.TP.Ax(A.aaL(A.ach.TP));this.Sc.Ax(A.aaL(A.ach.Sc));this.AcD.S(A.aaL(A.fl.
Af));this.W5.Au([B=A._GetAutoObject(A.Device.Device),B.ASZ,B.A0G]);this.Hj.S(A.aaL(
A.fl.Kr));this.Hj.AZ(A.aaL(A.fl.HJ));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jj._Done();this.OY._Done();this.IV._Done();this.Gm._Done();this.AL._Done(
);this.Abi._Done();this.AgS._Done();this.TP._Done();this.Sc._Done();this.AcD._Done(
);this.W5._Done();this.Hj._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jj._ReInit();this.OY._ReInit();this.IV._ReInit();this.Gm.
_ReInit();this.AL._ReInit();this.Abi._ReInit();this.AgS._ReInit();this.TP._ReInit(
);this.Sc._ReInit();this.AcD._ReInit();this.W5._ReInit();this.Hj._ReInit();this.
OY.R(A.aaR(A.acf.A$8));this.AcD.R(A.aaR(A.acf.A$G));this.Hj.R(A.aaR(A.acf.RangeTest
));this.OY.S(A.aaL(A.fl.Af));this.OY.AZ(A.aaL(A.fl.Ak));this.OY.Cr(A.aaL(A.fl.Bh
));this.AcD.S(A.aaL(A.fl.Af));this.Hj.S(A.aaL(A.fl.Kr));this.Hj.AZ(A.aaL(A.fl.HJ
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jj)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TP)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcD)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.W5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hj).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbT={
ScreenType:0,Nl:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Np:
function(G){A._GetAutoObject(C.A8).Cd(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.AbT;},_className:"Application::MenuItemScreen"
};C.Uf={Ad_:null,Mq:null,AmE:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.AmE){this.Mq.Cv(1);this.Mq.L(A.jb.H_);}else{this.Mq.Cv(0);
if(this.KJ)this.Mq.L(A.jb.Bm);else if(this.Hl)this.Mq.L(A.jb.Text);else this.Mq.
L(A.jb.Bm);}},I3:function(G){var F,Ct;if(!!this.Ad_){(Ct=this.Ad_,Ct[2].call(Ct[
0],!(F=this.Ad_,F[1].call(F[0]))));this.AE$((F=this.Ad_,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A3x:function(G){this.KJ=true;this.DJ(this);},AE$:function(
E){if(this.AmE===E)return;this.AmE=E;this.DJ(this);this.Am();},A3Z:function(G){var
F;this.AE$((F=this.Ad_,F[1].call(F[0])));},A00:function(s){this.A3Z(s);},DJ:function(
G){var F;if(!this.N||!this.KJ)return;if(this.AmE){(F=this.N,F[1].call(F[0])).CS(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).GW.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CS(A.aaR(A.acf.A8v));(F=this.N,F[1].call(F[0])).GW.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ATd:function(E){if(A.aaZ(this.Ad_,E))
return;if(!!this.Ad_)A.z$([this,this.A00],this.Ad_,0);this.Ad_=E;if(!!E)A.zX([this
,this.A00],E,0);if(!!E)A.pe([this,this.A00],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mq={I:this},0);this.__proto__=C.Uf;this.
V.L(A.jb.H_);this.Mq.H(AH1);this.Mq.Cv(0);this.J(this.Mq,0);this.Mq.Ax(A.aaL(A.ach.
AqQ));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mq._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mq._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad_)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mq)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANR={H7:null,IP:null,_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.SS._Init.call(this.H7={I:this},0);C.AGQ._Init.call(this.
IP={I:this},0);this.__proto__=C.ANR;var B;this.Jd(A.aaR(A.acf.ACD));this.H7.H(Ah3
);this.H7.Aj(true);this.H7.T(A.aaR(A.acf.Date));this.H7.Bi(true);this.IP.H(U2);this.
IP.Aj(true);this.IP.T(A.aaR(A.acf.Bs));this.J(this.H7,-1);this.J(this.IP,-1);this.
H7.Ab1([B=this.H7,B.FV]);this.H7.Gs([this,this.D_,this.GS]);this.H7.AkA(A.aaL(A.
ach.Edit));this.H7.Ab7([B=A._GetAutoObject(A.Device.Helper),B.U4,B.U7]);this.IP.
Ab1([B=this.IP,B.FV]);this.IP.Gs([this,this.D_,this.GS]);this.IP.AkA(A.aaL(A.ach.
Edit));this.IP.Ab7([B=A._GetAutoObject(A.Device.Helper),B.U4,B.U7]);},_Done:function(
){this.__proto__=C.Cg;this.H7._Done();this.IP._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.H7._ReInit();this.IP._ReInit();this.Jd(A.
aaR(A.acf.ACD));this.H7.T(A.aaR(A.acf.Date));this.IP.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cg._Mark.call(this,D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AVn={Rf:null,FK:null,B0:null,OM:null,YN:null,Aa4:null,_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.Rf._Init.call(this.Rf={I:this},0);C.AMK._Init.call(this.
FK={I:this},0);C.AUX._Init.call(this.B0={I:this},0);C.AUZ._Init.call(this.OM={I:
this},0);C.Afn._Init.call(this.YN={I:this},0);C.Aa4._Init.call(this.Aa4={I:this}
,0);this.__proto__=C.AVn;var B;this.Jd(A.aaR(A.acf.Temperature));this.FK.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.B0.H(AXw);this.B0.Aj(true);this.B0.T(A.aaR(A.acf.
Arr));this.B0.Bi(false);this.OM.H(Aah);this.OM.Aj(true);this.OM.T(A.aaR(A.acf.Undertemperature
));this.OM.Bi(true);this.OM.Bx(3800);this.OM.Ga(3000);this.OM.EV(5000);this.OM.A_4(
A.aaR(A.acf.AG3));this.YN.H(AXx);this.YN.Aj(true);this.YN.Z(true);this.YN.T(A.aaR(
A.acf.A5u));this.J(this.B0,0);this.J(this.OM,0);this.J(this.YN,0);this.B0.Ab1([B=
this.B0,B.FV]);this.B0.Gs([this,this.D_,this.GS]);this.B0.AkA(A.aaL(A.ach.Edit));
this.B0.L1([B=this.B0,B.Ay0]);this.B0.L4(A.aaL(A.ach.AnS));this.B0.Au([B=this.FK
,B.B$,B.Cb]);this.B0.CK(this.FK);this.B0.A_E([B=this.FK,B.AS7,B.A0N]);this.B0.A_D([
B=this.FK,B.AS6,B.A0M]);this.OM.L1([B=this.B0,B.Ay0]);this.OM.L4(A.aaL(A.ach.AnS
));this.OM.Au([B=A._GetAutoObject(A.Device.Device),B.A9B,B.BbP]);this.YN.CK(this.
Aa4);this.YN.AkD([B=A._GetAutoObject(A.Device.Device),B.A8W,B.Bby]);},_Done:function(
){this.__proto__=C.Cg;this.Rf._Done();this.FK._Done();this.B0._Done();this.OM._Done(
);this.YN._Done();this.Aa4._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.Rf._ReInit();this.FK._ReInit();this.B0._ReInit();this.
OM._ReInit();this.YN._ReInit();this.Aa4._ReInit();this.Jd(A.aaR(A.acf.Temperature
));this.B0.T(A.aaR(A.acf.Arr));this.OM.T(A.aaR(A.acf.Undertemperature));this.OM.
A_4(A.aaR(A.acf.AG3));this.YN.T(A.aaR(A.acf.A5u));},_Mark:function(D){var B;C.Cg.
_Mark.call(this,D);if((B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AN4={PK:null,PL:null,Sv:null,V8:null,Sx:null,Sw:null,Gd:null,Acs:null,Init:function(
aArg){A.zX([this,this.BpI],this.PL.Q,0);},BpI:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw_((F=this.PL.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.Is._Init.call(this.PK={I:this},0);C.BX._Init.call(this.PL={
I:this},0);C.Afn._Init.call(this.Sv={I:this},0);C.Is._Init.call(this.V8={I:this}
,0);C.Afn._Init.call(this.Sx={I:this},0);C.Afn._Init.call(this.Sw={I:this},0);C.
Gd._Init.call(this.Gd={I:this},0);C.Acs._Init.call(this.Acs={I:this},0);this.__proto__=
C.AN4;var B;this.N.H(Xj);this.Jd(A.aaR(A.acf.Device));this.PK.H(Ah3);this.PK.Aj(
true);this.PK.T(A.aaR(A.acf.A$Q));this.PK.Bi(false);this.PK.Ga(2);this.PK.EV(60);
this.PK.IS(A.aaR(A.acf.AHg));this.PK.Je(A.aaR(A.acf.AHg));this.PL.H(AXy);this.PL.
Aj(true);this.PL.T(A.aaR(A.acf.A$X));this.PL.Bi(true);this.PL.Bx(0);this.PL.Ga(-
1);this.PL.EV(1);this.Sv.H(Aah);this.Sv.Aj(true);this.Sv.T(A.aaR(A.acf.HG));this.
Sv.Bi(false);this.Sv.Bx(0);this.Sv.Ga(-1);this.Sv.EV(1);this.V8.H(Ali);this.V8.Aj(
true);this.V8.T(A.aaR(A.acf.A5S));this.V8.Bi(true);this.V8.IS(AfG);this.V8.Je(AfG
);this.Sx.H(AcQ);this.Sx.Aj(true);this.Sx.T(A.aaR(A.acf.AsT));this.Sx.Bi(false);
this.Sx.Bx(1);this.Sx.Ga(-1);this.Sx.EV(1);this.Sw.H(Aor);this.Sw.Aj(true);this.
Sw.T(A.aaR(A.acf.Asw));this.Sw.Bi(true);this.Sw.Bx(0);this.Sw.Ga(-1);this.Sw.EV(
1);this.Acs.Au(A._GetAutoObject(A.Device.Device).AxL);this.J(this.PK,0);this.J(this.
PL,0);this.J(this.Sv,0);this.J(this.V8,0);this.J(this.Sx,0);this.J(this.Sw,0);this.
PK.Au([B=A._GetAutoObject(A.Device.Device),B.A9t,B.BbL]);this.PL.Au([B=this.Acs,
B.B$,B.Cb]);this.PL.CK(this.Acs);this.Sv.CK(this.Gd);this.Sv.AkD([B=A._GetAutoObject(
A.Device.Device),B.AEJ,B.AIY]);this.V8.Au([B=A._GetAutoObject(A.Device.Device),B.
A8T,B.Bbv]);this.Sx.CK(this.Gd);this.Sx.AkD([B=A._GetAutoObject(A.Device.Device)
,B.A9C,B.BbQ]);this.Sw.CK(this.Gd);this.Sw.AkD([B=A._GetAutoObject(A.Device.Device
),B.ASP,B.A0z]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.PK._Done(
);this.PL._Done();this.Sv._Done();this.V8._Done();this.Sx._Done();this.Sw._Done(
);this.Gd._Done();this.Acs._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.PK._ReInit();this.PL._ReInit();this.Sv._ReInit();this.
V8._ReInit();this.Sx._ReInit();this.Sw._ReInit();this.Gd._ReInit();this.Acs._ReInit(
);this.Jd(A.aaR(A.acf.Device));this.PK.T(A.aaR(A.acf.A$Q));this.PK.IS(A.aaR(A.acf.
AHg));this.PK.Je(A.aaR(A.acf.AHg));this.PL.T(A.aaR(A.acf.A$X));this.Sv.T(A.aaR(A.
acf.HG));this.V8.T(A.aaR(A.acf.A5S));this.Sx.T(A.aaR(A.acf.AsT));this.Sw.T(A.aaR(
A.acf.Asw));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.PK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acs)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUB={V$:null,V_:
null,QP:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BiW
],this.QP.Q,0);},BiW:function(G){var F;A._GetAutoObject(A.Device.Device).Akx((F=
this.QP.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
Ni._Init.call(this.V$={I:this},0);C.Ni._Init.call(this.V_={I:this},0);C.AUT._Init.
call(this.QP={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUB;var B;this.Jd(A.aaR(A.acf.Asp));this.V$.H(IX);this.
V$.Aj(true);this.V$.T(A.aaR(A.acf.AjH));this.V$.Bi(false);this.V$.Nl(87);this.V_.
H(AXz);this.V_.Aj(true);this.V_.T(A.aaR(A.acf.Aqo));this.V_.Bi(true);this.V_.Nl(
88);this.QP.H(U2);this.QP.Aj(true);this.QP.T(A.aaR(A.acf.A5z));this.QP.Bi(false);
this.QP.Ga(-1);this.QP.EV(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V$,0);this.J(this.V_,0);this.J(this.
QP,0);this.V$.AR=[B=this.V$,B.Np];this.V_.AR=[B=this.V_,B.Np];this.QP.Au([B=this.
EartagNrAssignmentMode,B.B$,B.Cb]);this.QP.CK(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.V$._Done();this.V_._Done(
);this.QP._Done();this.EartagNrAssignmentMode._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.V$._ReInit();this.V_._ReInit();this.QP._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Jd(A.aaR(A.acf.Asp));this.V$.T(A.aaR(
A.acf.AjH));this.V_.T(A.aaR(A.acf.Aqo));this.QP.T(A.aaR(A.acf.A5z));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.V$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.W5={Q:null,TransponderProtocolToString:
null,Aps:null,Background:null,Y:null,Sp:null,GN:null,PP:null,OO:null,Pt:null,C9:
null,EN:null,SN:null,N6:null,CountryToString:null,Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.IE],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.IE],E,0);if(!!E)A.pe([this,this.IE],this);},IE:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GN.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BN=(F=this.Q,F[1].call(F[0])).Bjs();if(BN<900){var Ka=A._GetAutoObject(
A.Device.Converter).ANI(BN);if(!!Ka)this.C9.R(((this.CountryToString.Lx(Ka)+AcO)+
BN.toFixed())+O_);else this.C9.R(BN.toFixed());if(Ka===10){var AKm=this.A7o((F=this.
Q,F[1].call(F[0])).Id);this.C9.R(this.C9.String+((((AH2+this.Aps.Bqr(AKm))+AcO)+
A.abl(this.Aps.Bqq(AKm),2,10))+O_));}this.C9.Z(true);this.Pt.Z(true);this.OO.Z(false
);this.PP.Z(false);}else{this.OO.R(((A._GetAutoObject(A.Device.Converter).Bib(BN
)+AcO)+BN.toFixed())+O_);this.OO.Z(true);this.PP.Z(true);this.C9.Z(false);this.Pt.
Z(false);}if(BN===276){this.EN.R(this.Aps.BT(this.A7o((F=this.Q,F[1].call(F[0])).
Id)));this.EN.Z(true);}else this.EN.Z(false);this.N6.R(this.TransponderProtocolToString.
BT((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GN.R(A.jV);this.OO.
R(A.jV);this.EN.R(A.jV);this.C9.R(A.jV);this.N6.R(A.jV);}},A7o:function(J_){var Qz=
0;var Ka=A._GetAutoObject(A.Device.Converter).S3(J_);switch(Ka){case 10:{var Gi=
A._GetAutoObject(A.Device.Converter).AVF(J_);Qz=A._GetAutoObject(A.Device.Converter
).AC3(Gi);}break;default:;}return Qz;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Aps={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CG._Init.call(this.Sp={I:this},0);C.CG._Init.call(this.GN={I:this},0);C.CG._Init.
call(this.PP={I:this},0);C.CG._Init.call(this.OO={I:this},0);C.CG._Init.call(this.
Pt={I:this},0);C.CG._Init.call(this.C9={I:this},0);C.CG._Init.call(this.EN={I:this
},0);C.CG._Init.call(this.SN={I:this},0);C.CG._Init.call(this.N6={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.W5;
this.H(AcP);this.Background.A0(0x3F);this.Background.H(AcP);this.Background.L(A.
jb.CU);this.Y.A0(0x3F);this.Y.H(AcP);this.Y.JX(9);this.Sp.H(AH3);this.Sp.Aj(true
);this.Sp.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.Sp.A6(0x11);this.Sp.L(A.jb.
Text);this.GN.H(AXA);this.GN.Aj(true);this.GN.R(AH4);this.GN.A6(0x14);this.GN.L(
A.jb.Text);this.PP.H(AH5);this.PP.Aj(true);this.PP.R(A.aaR(A.acf.A$k)+A.aaR(A.acf.
Colon));this.PP.A6(0x11);this.PP.L(A.jb.Text);this.OO.H(AH6);this.OO.Aj(true);this.
OO.R(AXB);this.OO.A6(0x14);this.OO.L(A.jb.Text);this.Pt.H(AH5);this.Pt.Aj(true);
this.Pt.R(A.aaR(A.acf.C9)+A.aaR(A.acf.Colon));this.Pt.A6(0x11);this.Pt.L(A.jb.Text
);this.C9.H(AH6);this.C9.Aj(true);this.C9.R(AXC);this.C9.A6(0x14);this.C9.L(A.jb.
Text);this.EN.H(AXD);this.EN.Aj(true);this.EN.R(AXE);this.EN.A6(0x14);this.EN.L(
A.jb.Text);this.SN.H(AXF);this.SN.Aj(true);this.SN.R(A.aaR(A.acf.N6)+A.aaR(A.acf.
Colon));this.SN.A6(0x11);this.SN.L(A.jb.Text);this.N6.H(AXG);this.N6.Aj(true);this.
N6.R(AXH);this.N6.A6(0x14);this.N6.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sp,0);this.J(this.GN,0);this.J(this.PP,0);this.J(this.OO,0
);this.J(this.Pt,0);this.J(this.C9,0);this.J(this.EN,0);this.J(this.SN,0);this.J(
this.N6,0);this.Sp.S(A.aaL(A.fl.Ak));this.Sp.AZ(A.aaL(A.fl.Bh));this.GN.S(A.aaL(
A.fl.Ak));this.GN.AZ(A.aaL(A.fl.Bh));this.PP.S(A.aaL(A.fl.Ak));this.PP.AZ(A.aaL(
A.fl.Bh));this.OO.S(A.aaL(A.fl.Ak));this.OO.AZ(A.aaL(A.fl.Bh));this.Pt.S(A.aaL(A.
fl.Ak));this.Pt.AZ(A.aaL(A.fl.Bh));this.C9.S(A.aaL(A.fl.Ak));this.C9.AZ(A.aaL(A.
fl.Bh));this.EN.S(A.aaL(A.fl.Ak));this.EN.AZ(A.aaL(A.fl.Bh));this.SN.S(A.aaL(A.fl.
Ak));this.SN.AZ(A.aaL(A.fl.Bh));this.N6.S(A.aaL(A.fl.Ak));this.N6.AZ(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Aps._Done();this.Background._Done();this.Y._Done();this.Sp._Done();
this.GN._Done();this.PP._Done();this.OO._Done();this.Pt._Done();this.C9._Done();
this.EN._Done();this.SN._Done();this.N6._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Aps._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sp.
_ReInit();this.GN._ReInit();this.PP._ReInit();this.OO._ReInit();this.Pt._ReInit(
);this.C9._ReInit();this.EN._ReInit();this.SN._ReInit();this.N6._ReInit();this.CountryToString.
_ReInit();this.Sp.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.PP.R(A.aaR(A.acf.A$k
)+A.aaR(A.acf.Colon));this.Pt.R(A.aaR(A.acf.C9)+A.aaR(A.acf.Colon));this.SN.R(A.
aaR(A.acf.N6)+A.aaR(A.acf.Colon));this.Sp.S(A.aaL(A.fl.Ak));this.Sp.AZ(A.aaL(A.fl.
Bh));this.GN.S(A.aaL(A.fl.Ak));this.GN.AZ(A.aaL(A.fl.Bh));this.PP.S(A.aaL(A.fl.Ak
));this.PP.AZ(A.aaL(A.fl.Bh));this.OO.S(A.aaL(A.fl.Ak));this.OO.AZ(A.aaL(A.fl.Bh
));this.Pt.S(A.aaL(A.fl.Ak));this.Pt.AZ(A.aaL(A.fl.Bh));this.C9.S(A.aaL(A.fl.Ak)
);this.C9.AZ(A.aaL(A.fl.Bh));this.EN.S(A.aaL(A.fl.Ak));this.EN.AZ(A.aaL(A.fl.Bh)
);this.SN.S(A.aaL(A.fl.Ak));this.SN.AZ(A.aaL(A.fl.Bh));this.N6.S(A.aaL(A.fl.Ak));
this.N6.AZ(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aps)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QX={D2:null,A$z:A.jV,Ai:function(Ae){C.Fo.Ai.call(
this,Ae);if(this.Mu.Fq())this.D2.CV(A.jb.AV);else this.D2.CV(this.Background.AQ);
this.D2.Zu(this.G_.AQ);},Zz:function(E){if(this.A$z===E)return;this.A$z=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fo._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QX;this.Background.H(AXI);this.
Mu.H(W_);this.OH.H(AH7);this.Q3.H(AH7);this.D2.H(AXJ);this.D2.Z(false);this.J(this.
D2,0);this.G_.S(A.aaL(A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fo;this.D2._Done();C.Fo._Done.call(this
);},_ReInit:function(){C.Fo._ReInit.call(this);this.D2._ReInit();this.G_.S(A.aaL(
A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fo._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B7:null,AeF:null,Ap:null,Text:null
,DK:A.jV,AmR:0,M5:0,Jf:0,A5V:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BCW:function(G){this.Ap.H(this.Text.M);this.
AeF.H(this.Text.M);},Zu:function(E){if(this.AmR===E)return;this.AmR=E;this.AeF.L(
E);this.Text.L(E);},CV:function(E){if(this.M5===E)return;this.M5=E;this.Ap.L(E);
},S:function(E){if(this.B7===E)return;this.B7=E;this.Text.S(E);},Hn:function(E){
if(this.Jf===E)return;this.Jf=E;this.Text.Hn(E);},Bmn:function(E){if(this.A5V===
E)return;this.A5V=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NU._Init.call(this.AeF={I:this},0);A.acg.NU._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AH8);
this.AeF.A0(0x8);this.AeF.L(A.jb.Text);this.Ap.A0(0x8);this.Ap.L(A.jb.CU);this.Text.
A0(0xD);this.Text.H(AH8);this.Text.Hn(5);this.Text.Jc(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeF,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeF.Ax(A.aaL(A.ach.AP4));this.Ap.Ax(A.aaL(A.ach.AP3));this.Text.Q7([this,this.BCW
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeF._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeF._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.Ub={DY:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALt(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkQ();A._GetAutoObject(A.Device.Helper).Ast();},Ii:function(G){},AcV:function(
s){this.Ii(s);},A3O:function(G){A._GetAutoObject(C.A8).FB();},Fk:function(G){var
B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.
MC(-this.Y.Br[1]);},ALt:function(G){},BG5:function(s){this.ALt(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.Ub;this.Background.L(A.jb.CU);this.N.Z(true);this.N.CS(A.jV);this.Dr(C.Aq2);this.
DY.A0(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);this.Y.JX(9);this.Ay.H(
Iu);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CE=[this,this.A3O
];this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVY={WF:function(
G){this.Agx();this.I5(A.aaR(A.acf.AVv),[this,this.ATX],7);this.I5(A.aaR(A.acf.Bo0
),[this,this.Bmq],6);this.I5(A.aaR(A.acf.AGp),[this,this.ATJ],3);this.I5(A.aaR(A.
acf.An2),[this,this.AwY],2);this.I5(A.aaR(A.acf.AdV),[this,this.AE2],1);this.I5(
A.aaR(A.acf.AuH),[this,this.AEW],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Ml(A.aaR(A.acf.Ani)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abt:function(){return C.ANj;},Abu:function(){return C.APK;
},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mv();var ABF=A._NewObject(
A.Device.BoolFilterCriterion,0);ABF.Initialize(12,0,true,true);Be.CX(ABF);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HQ:function(G){var F;C.GJ.HQ.call(this,G);if(this.Aki(
)===false){this.N.Cw(A._GetAutoObject(A.Device.Converter).Ajr((F=this.Fn,F[1].call(
F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OS(false);this.N.OT(false
);},Agj:function(){A._GetAutoObject(C.A8).Cd(41);},_Init:function(aArg){C.GJ._Init.
call(this,aArg);this.__proto__=C.AVY;var B;this.Dr(C.APG);this.Dl(A.aaR(A.acf.A8i
));this.AwT([B=A._GetAutoObject(A.Device.Device),B.A9G,B.BbR]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.A8i));},_className:"Application::WatchListScreen"
};C.AMp={DE:function(G){var B;var JF=(A.Core.BL.isPrototypeOf(G)?G:null);if(((JF.
CP===4)||(JF.CP===5))===false){C.Ax5.DE.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var Bdj=A._GetAutoObject(A.Device.Device
).KZ;var Tm;if(JF.CP===5)Tm=5;else Tm=4;var ABj=A._GetAutoObject(A.acj.DU).BdT(Bdj
,Tm);var Gv=(((Bdj+((ABj/2)|0))/ABj)|0)*ABj;if(JF.CP===4)Gv+=ABj;else if(JF.CP===
5)Gv-=ABj;if(Gv>999900)Gv=999900;if(Gv<100)Gv=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(Gv);},AsH:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O5,B.CE],this);else A._GetAutoObject(C.A8).FB();
},WV:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsJ();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$O()===false){this.H9.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KZ
);this.H9.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.H9.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KZ);this.H9.Ci(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A8).FB();}},AkX:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O5,B.Ca],this);},BdS:function(){var
ALH=A._GetAutoObject(A.Device.Helper).W.AhW(1);if(ALH>=100000)ALH=(Math.round(ALH
/1000)|0)*1000;return ALH;},_Init:function(aArg){C.Ax5._Init.call(this,aArg);this.
__proto__=C.AMp;},_className:"Application::AnimalActionWeighingScreen"};C.AVJ={Wd:
null,YP:null,Rf:null,AeQ:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
BX._Init.call(this.Wd={I:this},0);C.BX._Init.call(this.YP={I:this},0);C.Rf._Init.
call(this.Rf={I:this},0);C.AeQ._Init.call(this.AeQ={I:this},0);this.__proto__=C.
AVJ;var B;this.Jd(A.aaR(A.acf.AHh));this.Wd.H(Ah3);this.Wd.Aj(true);this.Wd.T(A.
aaR(A.acf.Baf));this.Wd.Bi(true);this.Wd.Bx(0);this.YP.H(U2);this.YP.Aj(true);this.
YP.T(A.aaR(A.acf.Bae));this.YP.Bi(false);this.J(this.Wd,0);this.J(this.YP,0);this.
Wd.Au([B=this.Rf,B.B$,B.Cb]);this.Wd.CK(this.Rf);this.YP.Au([B=this.AeQ,B.B$,B.Cb
]);this.YP.CK(this.AeQ);},_Done:function(){this.__proto__=C.Cg;this.Wd._Done();this.
YP._Done();this.Rf._Done();this.AeQ._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.Wd._ReInit();this.YP._ReInit();this.Rf._ReInit();
this.AeQ._ReInit();this.Jd(A.aaR(A.acf.AHh));this.Wd.T(A.aaR(A.acf.Baf));this.YP.
T(A.aaR(A.acf.Bae));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.
Wd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeQ={MassUnitToString:null
,Du:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BT(aIndex);},DZ:function(A7){return A7;},H5:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwU(E);}
,Init:function(aArg){var B;A.zX([this,this.Bew],[B=A._GetAutoObject(A.Device.Device
),B.ASO,B.A0y],0);A.pe([this,this.Bew],this);},Bew:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeQ;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Ax5={H9:null,Ajx:null,MassUnit:null,
KZ:null,VC:null,AnO:null,AcF:null,Z1:null,O5:null,YF:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).Af4());A.zX([this,this.AKK],[B=A._GetAutoObject(
A.Device.Device),B.AEM,B.AI1],0);A.zX([this,this.BBJ],[B=A._GetAutoObject(A.Device.
Device),B.AES,B.AI5],0);A.zX([this,this.BBK],[B=this.O5,B.Arz,B.JB],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxY();this.AcH();},I3:function(G){this.WV(this);}
,CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsJ();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lj())A._GetAutoObject(
A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),
0,null);this.H9.Gr();this.H9.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGZ();else{var BC$=this.BdS();this.Z1.Z(true);this.AcF.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BC$);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsJ();else A._GetAutoObject(A.Device.Device).AhP(
);},AxY:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bhh();break;case 3:{this.Bhh();this.Z1.Z(false);this.AcF.Z(false
);if(this.A$O()){this.VC.Z(false);this.KZ.H(A.abO(this.KZ.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O5.Ar(true);this.O5.Z(true);this.Bb(this.O5);}}break;
case 4:this.KZ.R(A.aaR(A.acu.Akl));break;default:A.ab5("%s%e",AH9,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcH:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C2(A.aaL(A.ach.AeA));this.N.Cw(null);
this.YF.Z(false);this.N.C3(A.aaL(A.ach.Am4));this.N.CS(A.jV);}break;case 3:{if(this.
O5.AY<=1){this.N.C2(null);this.N.Cw(null);this.YF.Z(false);this.N.C3(null);}else{
this.N.C2(A.aaL(A.ach.Am3));this.N.Cw(A.aaL(A.ach.AeB));this.YF.Z(true);this.N.C3(
null);}this.N.CS(A.aaR(A.acf.Ok));}break;case 4:{this.N.C3(A.aaL(A.ach.AvR));this.
N.Ca=[this,this.Bme];this.N.Cw(null);this.YF.Z(false);this.N.CS(A.jV);}break;default:;
}},AsH:function(G){},Bw2:function(s){this.AsH(s);},WV:function(G){},A0Q:function(
s){this.WV(s);},Bme:function(G){this.CC(this);},BBJ:function(G){this.Am();},AKK:
function(G){this.Am();},A$O:function(){var Auy=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Auy>0)&&!A._GetAutoObject(A.Device.Helper).Bqo(Auy
,this.H9.Timestamp);},AkX:function(G){},A0P:function(s){this.AkX(s);},BBK:function(
G){this.Am();},Bhh:function(){this.KZ.R(A._GetAutoObject(A.Device.Converter).Ak$(
A._GetAutoObject(A.Device.Device).KZ));},BdS:function(){return A._GetAutoObject(
A.Device.Helper).W.AhW(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Ajx={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KZ={I:this},0);A.acg.Text._Init.call(this.VC={I:this
},0);C.AxX._Init.call(this.AnO={I:this},0);A.acg.Aeq._Init.call(this.AcF={I:this
},0);A.acg.Aeq._Init.call(this.Z1={I:this},0);C.AV3._Init.call(this.O5={I:this},
0);A.acg.Ap._Init.call(this.YF={I:this},0);this.__proto__=C.Ax5;this.Background.
L(A.jb.CJ);this.N.Z(true);this.Dr(C.IM);this.Ajx.A0(0x3F);this.Ajx.H(Ays);this.Ajx.
L(A.jb.CJ);this.MassUnit.H(AXK);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
AAe));this.MassUnit.L(A.jb.Text);this.KZ.H(AXL);this.KZ.A6(0x14);this.KZ.R(A.aaR(
A.acu.Akl));this.KZ.L(A.jb.Text);this.VC.H(AXM);this.VC.R(A.aaR(A.acf.Bar));this.
VC.L(A.jb.Text);this.VC.Z(true);this.AnO.H(AXN);this.AcF.H(AXO);this.AcF.L(A.jb.
Aeb);this.AcF.Z(false);this.Z1.H(AXP);this.Z1.L(A.jb.Aeb);this.Z1.Bm4(true);this.
Z1.Z(false);this.O5.A0(0x3F);this.O5.H(Ays);this.O5.Ar(false);this.O5.Z(false);this.
YF.H(AXQ);this.YF.L(A.jb.Bm);this.J(this.Ajx,0);this.J(this.MassUnit,0);this.J(this.
KZ,0);this.J(this.VC,0);this.J(this.AcF,0);this.J(this.Z1,0);this.J(this.O5,0);this.
J(this.YF,0);this.N.CE=[this,this.Bw2];this.N.Cf=[this,this.A0P];this.N.Ca=[this
,this.A0Q];this.MassUnit.S(A.aaL(A.fl.EK));this.KZ.S(A.aaL(A.fl.Aet));this.VC.S(
A.aaL(A.fl.EK));this.AcF.Zy(this.AnO);this.Z1.Zy(this.AnO);this.H9=A._NewObject(
A.Device.Rating,0);this.O5.L2(A._GetAutoObject(A.Device.Helper).W);this.O5.AkE(this.
H9);this.YF.Ax(A.aaL(A.ach.AQ0));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajx._Done();this.MassUnit._Done();this.KZ._Done();this.VC._Done();this.
AnO._Done();this.AcF._Done();this.Z1._Done();this.O5._Done();this.YF._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajx._ReInit();
this.MassUnit._ReInit();this.KZ._ReInit();this.VC._ReInit();this.AnO._ReInit();this.
AcF._ReInit();this.Z1._ReInit();this.O5._ReInit();this.YF._ReInit();this.MassUnit.
R(A.aaR(A.acf.AAe));this.KZ.R(A.aaR(A.acu.Akl));this.VC.R(A.aaR(A.acf.Bar));this.
MassUnit.S(A.aaL(A.fl.EK));this.KZ.S(A.aaL(A.fl.Aet));this.VC.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H9)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YF)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AV7={FK:null
,OP:null,Nf:null,C$:null,LY:null,T_:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FK,B.B$,B.Cb],0);A.pe([this,this.GH],this);},CC:function(G){C.Cg.CC.
call(this,G);A.pe([this,this.GH],this);},BkZ:function(G){var F;this.LY.BU.L(this.
LY.V.AQ);if(!!this.LY.Q)this.LY.BU.R((A._GetAutoObject(A.Device.Converter).S_((F=
this.LY.Q,F[1].call(F[0])),2,true)+CR)+A._GetAutoObject(A.acj.DU).Aaw());},GH:function(
G){var AJF=true;if(this.FK.Q===1)AJF=false;this.C$.Aj(AJF);this.C$.Ar(AJF);this.
C$.Z(AJF);A._GetAutoObject(A.Device.Helper).ANC(this.Y);},_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.AML._Init.call(this.FK={I:this},0);C.AHs._Init.call(this.
OP={I:this},0);C.AUY._Init.call(this.Nf={I:this},0);C.AkV._Init.call(this.C$={I:
this},0);C.Is._Init.call(this.LY={I:this},0);C.BX._Init.call(this.T_={I:this},0);
this.__proto__=C.AV7;var B;this.Jd(A.aaR(A.acf.Settings));this.Hj.R(A.aaR(A.acf.
AsW));this.FK.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.OP.Au(A._GetAutoObject(
A.Device.Device).OP);this.Nf.H(AXR);this.Nf.Aj(true);this.C$.H(Ata);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.KM));this.C$.Bi(true);this.C$.Ga(1000);this.C$.EV(99000);
this.LY.H(Atb);this.LY.Aj(true);this.LY.T(A.aaR(A.acf.A5D));this.LY.Ga(50);this.
LY.EV(2000);this.LY.ATq(A._GetAutoObject(A.acj.DU).AzX());this.T_.H(AcQ);this.T_.
Aj(true);this.T_.T(A.aaR(A.acf.A72));this.T_.Ga(-1);this.T_.EV(1);this.J3(this.Y
,-1);this.J3(this.Ay,-1);this.J(this.Nf,0);this.J(this.C$,0);this.J(this.LY,0);this.
J(this.T_,0);this.Nf.Ab1([B=this.Nf,B.FV]);this.Nf.Gs([this,this.D_,this.GS]);this.
Nf.AkA(A.aaL(A.ach.Edit));this.Nf.L1([B=this.Nf,B.Ay0]);this.Nf.L4(A.aaL(A.ach.AnS
));this.Nf.Au([B=this.FK,B.B$,B.Cb]);this.Nf.CK(this.FK);this.Nf.A_E([B=this.FK,
B.AS7,B.A0N]);this.Nf.A_D([B=this.FK,B.AS6,B.A0M]);this.C$.Gs([this,this.D_,this.
GS]);this.C$.L1([B=this.Nf,B.Ay0]);this.C$.L4(A.aaL(A.ach.AnS));this.C$.Au([B=this.
FK,B.A8R,B.ATc]);this.LY.Gs([this,this.D_,this.GS]);this.LY.L1([B=this.Nf,B.Ay0]
);this.LY.L4(A.aaL(A.ach.AnS));this.LY.Au([B=this.FK,B.A8P,B.ATa]);this.LY.A_S([
this,this.BkZ]);this.T_.Gs([this,this.D_,this.GS]);this.T_.Au([B=this.OP,B.B$,B.
Cb]);this.T_.CK(this.OP);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;
this.FK._Done();this.OP._Done();this.Nf._Done();this.C$._Done();this.LY._Done();
this.T_._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.FK._ReInit();this.OP._ReInit();this.Nf._ReInit();this.C$._ReInit();this.LY.
_ReInit();this.T_._ReInit();this.Jd(A.aaR(A.acf.Settings));this.Hj.R(A.aaR(A.acf.
AsW));this.C$.T(A.aaR(A.acf.KM));this.LY.T(A.aaR(A.acf.A5D));this.T_.T(A.aaR(A.acf.
A72));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FK)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nf).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUY={Y1:null,Init:
function(aArg){var B;A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Device),B.
ASO,B.A0y],0);A.pe([this,this.AfH],this);},A4g:function(G){A._GetAutoObject(A.Device.
Device).A3(37,true,A.jV,0,[this,this.Bb6]);},A15:function(G){var F;if(this.A_===
1){var BP=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).AzX();if(this.D7<this.
AlU)this.D7=this.AlU;if(this.DW!==BP){if(!!this.J1)(F=this.J1,F[2].call(F[0],this.
D7));A.abo(this.J1,0);}}if(this.A_===2){var BP=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).AzX();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BP){if(!!this.J0
)(F=this.J0,F[2].call(F[0],this.DW));A.abo(this.J0,0);}}this.DJ(this);this.Am();
},A2F:function(G){var F;if(this.A_===1){var BP=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).AzX();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP){if(!!this.J1
)(F=this.J1,F[2].call(F[0],this.D7));A.abo(this.J1,0);}}if(this.A_===2){var BP=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).AzX();if(this.DW>this.AlP)this.DW=
this.AlP;if(this.DW!==BP){if(!!this.J0)(F=this.J0,F[2].call(F[0],this.DW));A.abo(
this.J0,0);}}this.DJ(this);this.Am();},GH:function(G){this.PN.R(AH_+A._GetAutoObject(
A.Device.Converter).S_(this.D7,2,true));this.PM.R(AH_+A._GetAutoObject(A.Device.
Converter).S_(this.DW,2,true));this.Sz.R(A._GetAutoObject(A.acj.DU).Aaw());this.
Y1.R(this.Sz.String);},A3R:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).Asv(this
);},A2y:function(Atw){if(Atw===1)return this.PN;else if(Atw===2)return this.PM;else
return null;},_Init:function(aArg){C.Acp._Init.call(this,aArg);A.acg.Text._Init.
call(this.Y1={I:this},0);this.__proto__=C.AUY;this.T(A.aaR(A.acf.ACy));this.AlP=
2000;this.AlU=20;this.Background.H(K1);this.V.H(BD);this.V.R(A.aaR(A.acf.ACy)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkN.H(AXS);this.AkO.H(AXT);this.Q8.H(AXU);
this.QH.H(AXV);this.PM.H(AXW);this.PN.H(AH$);this.Sz.H(AXX);this.Y1.H(AXY);this.
Y1.Jc(false);this.Y1.A6(0x12);this.Y1.L(0xFF000000);this.J3(this.H6,-8);this.J(this.
Y1,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.Y1.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acp;this.Y1._Done();C.Acp.
_Done.call(this);},_ReInit:function(){C.Acp._ReInit.call(this);this.Y1._ReInit();
this.T(A.aaR(A.acf.ACy));this.V.R(A.aaR(A.acf.ACy)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.Y1.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acp._Mark.call(this,D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABK={M:O7,A7B:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7B();},_Init:function(
aArg){A.Graphics.Hz._Init.call(this,aArg);this.__proto__=C.ABK;},_className:"Application::AbstractPath"
};C.Aqh={DP:null,DY:null,Rk:null,AdR:null,P5:null,AdQ:null,AuG:1,A4$:0,Bc2:false
,AzT:true,CQ:function(){this.Bhd(this);},Init:function(aArg){var B;this.Bb(this.
AdR);A.zX([this,this.Bhd],[B=this.AdR,B.A8X,B.Bbz],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdQ.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).Biw(this.AuG+this.A4$)));if(this.AuG===1)this.P5.R(A.aaR(A.acf.ANq));else this.
P5.R(A.aaR(A.acf.Bh6));},CC:function(G){if(this.AzT)this.AzT=false;else if(this.
DP.Bda()===false)A.pe([this,this.A3o],this);else if(this.DP.Az8())this.DP.Ac9();
A.zV([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);},A3o:function(G){this.
Bc2=true;A._GetAutoObject(C.A8).FB();},Bhd:function(G){var B;var BdC=(C.Wp.isPrototypeOf(
B=this.AdR.AV)?B:null);if(!!BdC){var Aze=A._NewObject(A.Device.ActionToString,0);
this.Rk.R(Aze.Lx(BdC.Action));}},Ii:function(G){var Cy=(C.Wp.isPrototypeOf(G)?G:
null);if(!Cy)return;this.DP.Qp(Cy.Action);this.Bmh(this.AuG+1);},BBc:function(G){
if(A._GetAutoObject(C.Pn).NZ(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bmh:function(E){
if(this.AuG===E)return;this.AuG=E;this.Am();},Aga:function(G){if((this.Bc2===false
)&&(this.DP.Bda()===false))A.pe([this,this.A3o],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);C.CG._Init.call(this.
Rk={I:this},0);C.ART._Init.call(this.AdR={I:this},0);C.CG._Init.call(this.P5={I:
this},0);A.acg.Text._Init.call(this.AdQ={I:this},0);this.__proto__=C.Aqh;this.Background.
L(A.jb.CU);this.N.H(Xj);this.N.Z(true);this.Dr(C.IM);this.DY.A0(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Rk.H(AXZ);this.Rk.L(A.jb.Text);this.AdR.H(AX0);this.
P5.H(AX1);this.P5.R(A.aaR(A.acf.ANq));this.P5.L(A.jb.Text);this.AdQ.H(AX2);this.
AdQ.R(AX3);this.AdQ.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rk,0);this.J(this.
AdR,0);this.J(this.P5,0);this.J(this.AdQ,0);this.N.CE=[this,this.A3o];this.N.Cf=[
this,this.BBc];this.N.C2(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.Rk.S(
A.aaL(A.fl.EK));this.Rk.AZ(A.aaL(A.fl.Af));this.Rk.Cr(A.aaL(A.fl.Ak));this.AdR.A3P=[
this,this.Ii];this.P5.S(A.aaL(A.fl.EK));this.P5.AZ(A.aaL(A.fl.Af));this.P5.Cr(A.
aaL(A.fl.Ak));this.AdQ.S(A.aaL(A.fl.H3));this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rk._Done();this.
AdR._Done();this.P5._Done();this.AdQ._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rk._ReInit();this.AdR._ReInit();
this.P5._ReInit();this.AdQ._ReInit();this.P5.R(A.aaR(A.acf.ANq));this.Rk.S(A.aaL(
A.fl.EK));this.Rk.AZ(A.aaL(A.fl.Af));this.Rk.Cr(A.aaL(A.fl.Ak));this.P5.S(A.aaL(
A.fl.EK));this.P5.AZ(A.aaL(A.fl.Af));this.P5.Cr(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdQ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ART={Ic:null,A3P:null,Cq:null,Y:null,Ay:
null,A4v:0,Init:function(aArg){A.zV([this,this.ABz],this.Ic,0);A.zV([this,this.Bha
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AuD],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABz],this);},Bb:function(E){var A3k=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A3k)A.abo([this,this.A8X,this.Bbz],0);},DE:
function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CP){case 6:Fi=2;break;case
7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x415);
if((Fi===5)&&!X){var ALj=this.AV;while(!X){ALj=this.QJ(ALj,2,0x415);if(!!ALj)X=this.
QJ(ALj,Fi,0x415);else break;}}if(!!X)this.Bb(X);var GZ=(C.Wp.isPrototypeOf(B=this.
AV)?B:null);if(!!GZ)this.A4v=(C.Wp.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A4v=0;A.pe([this,this.MT],this);},A1Y:function(Eh){var EQ=A._GetAutoObject(C.DP).
Bdi(Eh,this.A3P);this.J(EQ,0);},Ao5:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HP(AdM);
}},ABz:function(G){this.Ao5();var O;var CB=A._GetAutoObject(C.Pn).Na();for(O=0;O<
CB;O=O+1){var Tj=A._GetAutoObject(C.Pn).OI(O);this.A1Y(Tj);}A.pe([this,this.Bha]
,this);A.pe([this,this.BqK],this);A.pe([this,this.AuD],this);},BqK:function(G){var
B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.Wp.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},AuD:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wp.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATS(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATS(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATS(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((
B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},Bha:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wp.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pn).NZ(Aa.Action)&&A._GetAutoObject(C.
DP).A4_(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A4v===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MT],this);},MT:function(G){var B;this.Y.VA(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BL._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ART;this.H(AX4);this.Cq.Filter=147;this.Y.A0(0xB);this.Y.H(AIa);this.Y.JX(9);this.
Ay.A0(0xA);this.Ay.H(AX5);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BM=[this,this.
DE];this.Cq.D1=[this,this.DE];this.Y.Em=[this,this.Fk];this.Ic=A._GetAutoObject(
C.Pn);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ic)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3P)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fs={Ek:null,AL:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fs;this.N.Ar(false);this.Ek.H(BD);this.Ek.Ar(false
);this.AL.H(Ff);this.AL.L(A.jb.Aeb);this.Text.H(BD);this.Text.R(AX6);this.Text.L(
0xFF000000);this.Ap.H(O7);this.Ap.L(A.jb.Text);this.J(this.Ek,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cw(A.aaL(A.ach.AeD));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADm));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ek._Done();this.AL._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ek._ReInit();this.AL._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.AaU={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},I3:function(G){},Ai:function(Ae){C.BX.
Ai.call(this,Ae);var FS=A.jb.Aeb;var GY=A.jb.CU;if(this.Hl){FS=A.jb.Text;GY=A.jb.
Bm;}if(!this.LK){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);}else if(this.Qv){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KJ){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.Hx.L(A.
jb.CU);this.H6.L(A.jb.CU);},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(C.CG.
isPrototypeOf(B=this.Dz.Cj)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.AZ(A.aaL(
A.fl.Bh));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));else CA.R(Xh);CA.H(A.
abK(CA.M,[this.Dz.Wf,(B=this.Dz.M)[3]-B[1]]));},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.AaU;this.Dz.AFt(170);this.Dz.N4(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajk={C_:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hn(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FS=A.jb.Aeb;var GY=A.jb.CU;if(this.Hl){FS=A.jb.Text;
GY=A.jb.Bm;}if(!this.LK){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KJ){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ajk;this.C_.H(AX7);this.C_.Cv(1);this.J(this.C_,0);this.C_.Ax(A.aaL(A.ach.Aju)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C_._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C_._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AL8={Y:null,RO:null,Ty:null
,Tz:null,TA:null,AdP:null,XQ:null,Vu:null,Vv:null,AaT:null,Ay:null,Init:function(
aArg){this.Bb(this.RO);},DE:function(G){C.Fs.DE.call(this,G);this.MT(this);},I3:
function(G){this.Bgs(this);},Lp:function(){if(!this.BQ){this.BQ=A._NewObject(C.N
,0);this.BQ.CE=[this,this.Bgs];this.BQ.Cf=null;this.BQ.Ca=null;this.BQ.CS(A.jV);
this.BQ.Cw(null);this.BQ.C2(A.aaL(A.ach.YB));}return this.BQ;},ABc:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XQ.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XQ.Q))A._GetAutoObject(C.AutoActions).J(this.XQ.Q);if(!!this.Vu.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vu.Q))A._GetAutoObject(C.AutoActions
).J(this.Vu.Q);if(!!this.Vv.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vv.
Q))A._GetAutoObject(C.AutoActions).J(this.Vv.Q);if(!!this.AaT.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaT.Q))A._GetAutoObject(C.AutoActions).J(this.AaT.Q
);A._GetAutoObject(C.AutoActions).Ci();},Bgs:function(G){if(this.BAj()===true){this.
ABc();this.AaH(this);}else A._GetAutoObject(A.Device.Device).A3(27,true,A.jV,0,null
);},BAj:function(){return(!!this.XQ.C7(this.XQ.Q)||!!this.Vu.C7(this.Vu.Q))||!!this.
Vv.C7(this.Vv.Q);},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.
Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},MT:function(G){var B;this.
Y.VA(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true
,null,null);},BBq:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XQ.AtD(this);this.Vu.AtD(this);this.Vv.AtD(this);this.AaT.AtD(this);}
,_Init:function(aArg){C.Fs._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.AaU._Init.call(this.RO={I:this},0);C.AaU._Init.call(this.Ty={I:this},0);C.
AaU._Init.call(this.Tz={I:this},0);C.AaU._Init.call(this.TA={I:this},0);C.Ava._Init.
call(this.AdP={I:this},0);C.AutoAction._Init.call(this.XQ={I:this},0);C.AutoAction.
_Init.call(this.Vu={I:this},0);C.AutoAction._Init.call(this.Vv={I:this},0);C.AutoAction.
_Init.call(this.AaT={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AL8;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.TB));this.Y.H(L5);this.Y.JX(1);this.
RO.H(Ah3);this.RO.Ar(true);this.RO.Aj(true);this.RO.T(A._GetAutoObject(A.Device.
Helper).MI(A.aaR(A.acf.Ajj),O9,AIb));this.Ty.H(U2);this.Ty.Ar(true);this.Ty.Aj(true
);this.Ty.T(A._GetAutoObject(A.Device.Helper).MI(A.aaR(A.acf.Ajj),O9,AIc));this.
Tz.H(Aah);this.Tz.Ar(true);this.Tz.Aj(true);this.Tz.T(A._GetAutoObject(A.Device.
Helper).MI(A.aaR(A.acf.Ajj),O9,AId));this.TA.H(Ali);this.TA.Ar(true);this.TA.Aj(
true);this.TA.T(A._GetAutoObject(A.Device.Helper).MI(A.aaR(A.acf.Ajj),O9,AIe));this.
AdP.H(Ayt);this.AdP.Aj(true);this.AdP.T(A.aaR(A.acf.A$w));this.Vu.Index=1;this.Vv.
Index=2;this.AaT.Index=3;this.Ay.H(Iu);this.J(this.Y,0);this.J(this.RO,0);this.J(
this.Ty,0);this.J(this.Tz,0);this.J(this.TA,0);this.J(this.AdP,0);this.J(this.Ay
,0);this.Y.Em=[this,this.Fk];this.RO.Zv(A.aaL(A.fl.H3));this.RO.Zw(A.aaL(A.fl.H3
));this.RO.Au([B=this.XQ,B.B$,B.Cb]);this.RO.CK(this.XQ);this.Ty.Zv(A.aaL(A.fl.H3
));this.Ty.Zw(A.aaL(A.fl.H3));this.Ty.Au([B=this.Vu,B.B$,B.Cb]);this.Ty.CK(this.
Vu);this.Tz.Zv(A.aaL(A.fl.H3));this.Tz.Zw(A.aaL(A.fl.H3));this.Tz.Au([B=this.Vv,
B.B$,B.Cb]);this.Tz.CK(this.Vv);this.TA.Zv(A.aaL(A.fl.H3));this.TA.Zw(A.aaL(A.fl.
H3));this.TA.Au([B=this.AaT,B.B$,B.Cb]);this.TA.CK(this.AaT);this.AdP.AR=[this,this.
BBq];this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Y._Done();this.
RO._Done();this.Ty._Done();this.Tz._Done();this.TA._Done();this.AdP._Done();this.
XQ._Done();this.Vu._Done();this.Vv._Done();this.AaT._Done();this.Ay._Done();C.Fs.
_Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.Y._ReInit();this.
RO._ReInit();this.Ty._ReInit();this.Tz._ReInit();this.TA._ReInit();this.AdP._ReInit(
);this.XQ._ReInit();this.Vu._ReInit();this.Vv._ReInit();this.AaT._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.TB));this.RO.T(A._GetAutoObject(A.Device.Helper
).MI(A.aaR(A.acf.Ajj),O9,AIb));this.Ty.T(A._GetAutoObject(A.Device.Helper).MI(A.
aaR(A.acf.Ajj),O9,AIc));this.Tz.T(A._GetAutoObject(A.Device.Helper).MI(A.aaR(A.acf.
Ajj),O9,AId));this.TA.T(A._GetAutoObject(A.Device.Helper).MI(A.aaR(A.acf.Ajj),O9
,AIe));this.AdP.T(A.aaR(A.acf.A$w));},_Mark:function(D){var B;C.Fs._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ty)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={BG:
A.abi(27,0,null),Du:function(){return 16;},C7:function(aIndex){if(aIndex>=27)return-
1;return this.BG.Get(aIndex);},DZ:function(A7){var O=0;while(O<27){if(this.BG.Get(
O)===A7)return O;O=O+1;}return-1;},H5:function(){var O=0;var max=-1;while(O<27){
if(this.BG.Get(O)>max)max=this.BG.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.BG=[]).__proto__=C.Cm.BG;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={Ic:null,Ac9:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AtD],this.Ac9,0);A.pe([this,this.
AtD],this);},Du:function(){return this.Ic.Na();},C7:function(aIndex){if(aIndex>=
this.Du())return-1;return this.Ic.OI(aIndex);},Gl:function(aIndex){return this.ActionToString.
BT(this.C7(aIndex));},DZ:function(A7){var O=0;while(O<this.Du()){if(this.Ic.OI(O
)===A7)return O;O=O+1;}return-1;},H5:function(){var O=0;var max=-1;while(O<this.
Du()){if(this.Ic.OI(O)>max)max=this.Ic.OI(O);O=O+1;}return max;},AtD:function(G){
this.Q=this.Ac9.OI(this.Index);A.abo([this,this.B$,this.Cb],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ic=A._GetAutoObject(C.AuW);this.Ac9=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ic)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AMc={AtA:0,Init:function(aArg
){var B;A.zX([this,this.BeY],[B=A._GetAutoObject(A.Device.Device),B.A8D,B.Bbk],0
);A.zX([this,this.BeV],[B=A._GetAutoObject(A.Device.Device),B.ASB,B.A0t],0);A.pe([
this,this.BeY],this);A.pe([this,this.BeV],this);},Clear:function(){C.Vz.Clear.call(
this);this.AtA=0;},Ci:function(){A._GetAutoObject(A.Device.Device).ArF(this.AtA);
A._GetAutoObject(A.Device.Device).ArG(this.toString());},BeY:function(G){this.AtA=
A._GetAutoObject(A.Device.Device).Pn;A.we(this,0);},BeV:function(G){this.E3(A._GetAutoObject(
A.Device.Device).AuI);A.we(this,0);},NZ:function(Eh){if((this.AtA&(((B=Eh)<0)?B+
0x100000000:B))===(((B=Eh)<0)?B+0x100000000:B))return true;return false;},AUO:function(
Eh){this.AtA=this.AtA|(((B=Eh)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vz._Init.
call(this,aArg);this.__proto__=C.AMc;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pn={_Init:function(){C.AMc._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AMd={Vx:null,Ay:null,Y:null,JT:null,CQ:function(
){this.AiL(this);},Init:function(aArg){A.zV([this,this.AiL],this.Vx,0);A.pe([this
,this.AiL],this);},DE:function(G){C.Fs.DE.call(this,G);this.MT(this);},Lp:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CE=[this,this.Ew];this.BQ.Cf=[
this,this.A3w];this.BQ.Ca=[this,this.A31];this.BQ.C3(A.aaL(A.ach.Are));this.BQ.Cw(
A.aaL(A.ach.Aq8));this.BQ.C2(A.aaL(A.ach.YB));}return this.BQ;},Ew:function(G){if(
this.By$()>0){this.ABc();this.AaH(this);}else A._GetAutoObject(A.Device.Device).
A3(28,true,A.jV,0,null);},AiL:function(G){this.Ao5();var O;for(O=0;O<this.Vx.Na(
);O=O+1){var Tj=A._GetAutoObject(C.Pn).OI(O);this.A1B(Tj);}this.J(this.JT,0);A.aaS([
this,this.MT],this);},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]
);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},MT:function(G){var
B;this.Y.VA(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.
AV,true,null,null);},A1B:function(Ha){var Aze=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Si,0);Aa.T(Aze.BT(Ha));Aa.Aj(true);Aa.G6=Ha;Aa.A_r(this.
Vx.NZ(Ha));this.J(Aa,0);this.ZG(Aa);},Ao5:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HP(
AdM);}},ABc:function(){var B;this.Vx.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JT)){var Aa=(C.Si.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vx.J(Aa.G6);if(Aa.ASM())this.Vx.AUO(Aa.G6);}else A.ab5(
"%s",Ayu);}X=X.Ah;}this.Vx.Ci();},By$:function(){var B;var A4w=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JT)){var
Aa=(C.Si.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASM())A4w=A4w+1;}else A.ab5("%s"
,Ayu);}X=X.Ah;}return A4w;},A3w:function(G){var B;var Aa=(C.Si.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAt=(C.Si.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAt){this.
AhE(AAt,Aa);A.pe([this,this.MT],this);}}},A31:function(G){var B;var Aa=(C.Si.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AA0=(C.Si.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AA0
){this.AhE(Aa,AA0);A.pe([this,this.MT],this);}}},AqL:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiL],this);},_Init:function(
aArg){C.Fs._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Ava._Init.call(this.JT={I:this},0);this.__proto__=C.AMd;
this.H(Qc);this.Text.R(A.aaR(A.acf.AEn));this.Ay.H(Iu);this.Y.H(L5);this.Y.JX(1);
this.JT.H(Ayv);this.JT.Aj(true);this.JT.T(A.aaR(A.acf.AqL));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JT,0);this.Y.Em=[this,this.Fk];this.JT.AR=[this,this.AqL
];this.Vx=A._GetAutoObject(C.Pn);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fs;this.Ay._Done();this.Y._Done();this.JT._Done();C.Fs._Done.call(this);},_ReInit:
function(){C.Fs._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JT._ReInit(
);this.Text.R(A.aaR(A.acf.AEn));this.JT.T(A.aaR(A.acf.AqL));this.CQ();},_Mark:function(
D){var B;C.Fs._Mark.call(this,D);if((B=this.Vx)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Si={G6:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hn(10);},Bl:function(aSize){C.Uf.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mq.M[0]));},Ai:function(Ae){var B;C.Uf.Ai.call(this,Ae);var Hf=((Ae&0x10
)===0x10);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.
Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.L(FS);this.V.L(A.
jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);
}this.LK=Hf;this.KJ=Fw;this.Qv=GE;},I3:function(G){this.A3Z(this);},A3Z:function(
G){this.AE$(!this.AmE);},A_r:function(E){this.AE$(E);},ASM:function(){return this.
AmE;},_Init:function(aArg){C.Uf._Init.call(this,aArg);this.__proto__=C.Si;this.Mq.
H(AX8);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vz={CB:0,
Ic:A.abi(17,0,null),OI:function(HA){return this.Ic.Get(HA);},Na:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ic.Set(O,0);this.CB=0;},J:function(
Eh){if(this.CB>=17)A.ab5("%s",Atc);else{this.Ic.Set(this.CB,Eh);this.CB=this.CB+
1;}},Ci:function(){},E3:function(AcX){var AJs=AcX.indexOf(String.fromCharCode(0x2C
),0);var A1Z=A.jV;var O=0;this.CB=0;while(O<17)if(AcX===A.jV){this.Ic.Set(O,0);O++;
}else{if(AJs===-1){A1Z=AcX;AcX=A.jV;}else{A1Z=A.abV(AcX,AJs);AcX=A.ab1(AcX,0,AJs+
1);}var Tj=A.abZ(A1Z,0,10)|0;if(this.AD2(Tj)){this.Ic.Set(this.CB,Tj);this.CB=this.
CB+1;O++;}AJs=AcX.indexOf(String.fromCharCode(0x2C),0);}if(AcX!==A.jV)A.ab5("%s"
,AIf);},toString:function(){var A3b=(((B=this.Ic.Get(0))<0)?B+0x100000000:B).toFixed(
);var O;for(O=1;O<this.CB;O=O+1)A3b=(A3b+AIg)+(((B=this.Ic.Get(O))<0)?B+0x100000000:
B).toFixed();return A3b;},Axz:function(HA,Eh){if(HA>=this.CB){A.ab5("%s",((((AX9+
HA.toFixed())+AX_)+this.CB.toFixed())+AX$)+AYa);return;}this.Ic.Set(HA,Eh);},Contains:
function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(this.Ic.Get(O)===Eh)return true;return false;
},AD2:function(Eh){return true;},DZ:function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(
this.Ic.Get(O)===Eh)return O;return-1;},_Init:function(aArg){(this.Ic=[]).__proto__=
C.Vz.Ic;this.__proto__=C.Vz;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AMV={Init:function(aArg){var B;A.zX([this,this.Be8],[B=A._GetAutoObject(A.Device.
Device),B.A8O,B.Bbs],0);A.pe([this,this.Be8],this);},Ci:function(){A._GetAutoObject(
A.Device.Device).Akv(this.toString());},AD2:function(Eh){switch(Eh){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Be8:function(
G){this.E3(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.Vz._Init.call(this,aArg);this.__proto__=C.AMV;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AMV._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
Wp={Vw:null,KA:null,A7A:A.jV,Action:0,A5a:false,A$h:false,A$1:false,Bl:function(
aSize){C.Fo.Bl.call(this,aSize);this.Q3.H(this.Mu.M);this.OH.H(this.Q3.M);},Ai:function(
Ae){C.Fo.Ai.call(this,Ae);if(!this.LK){this.KA.T3.L(A.jb.Am5);this.KA.QL.Z(true);
this.KA.QL.L(A.jb.ARf);}else if(this.Qv){this.KA.T3.L(A.jb.Bm);this.KA.QL.Z(false
);}else if(this.KJ){this.KA.T3.L(A.jb.Bm);this.KA.QL.Z(false);}else{this.KA.T3.L(
A.jb.Text);this.KA.QL.Z(true);this.KA.QL.L(A.jb.CU);}},Bmg:function(E){if(this.Action===
E)return;this.Action=E;},Bnn:function(E){if(this.A7A===E)return;this.A7A=E;this.
Vw.Text.R(E);},ATS:function(E){if(this.A$1===E)return;this.A$1=E;this.KA.Bn_(!this.
KA.AVc);},AFK:function(E){if(this.A$h===E)return;this.A$h=E;this.KA.Z(!this.KA.Fq(
));},A9T:function(E){if(this.A5a===E)return;this.A5a=E;this.Vw.Z(E);},_Init:function(
aArg){C.Fo._Init.call(this,aArg);C.Vw._Init.call(this.Vw={I:this},0);C.KA._Init.
call(this.KA={I:this},0);this.__proto__=C.Wp;this.H(AYb);this.Background.H(AYc);
this.G_.Ar(false);this.G_.Z(false);this.Vw.H(AYd);this.Vw.Z(false);this.KA.H(AYe
);this.KA.Z(false);this.J(this.Vw,0);this.J(this.KA,0);this.Mu.Ax(A.aaL(A.ach.ANr
));},_Done:function(){this.__proto__=C.Fo;this.Vw._Done();this.KA._Done();C.Fo._Done.
call(this);},_ReInit:function(){C.Fo._ReInit.call(this);this.Vw._ReInit();this.KA.
_ReInit();},_Mark:function(D){var B;C.Fo._Mark.call(this,D);if((B=this.Vw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.Vw={AL:null,Text:null,BW:null,Init:function(
aArg){this.Text.H(this.M);this.BW.H(this.M);this.AL.H(this.M);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.BW._Init.call(this.BW={I:this},0);this.__proto__=
C.Vw;this.AL.H(AYf);this.AL.L(A.jb.BjY);this.H(AYg);this.Text.H(AYh);this.Text.L(
A.jb.Text);this.BW.H(AYi);this.BW.Nn(1);this.BW.L(A.jb.Text);this.J(this.AL,0);this.
J(this.Text,0);this.J(this.BW,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.AL._Done();this.Text._Done();this.BW._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AL._ReInit();this.Text._ReInit();this.BW._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.KA={QL:null
,T3:null,AVc:false,Bn_:function(E){if(this.AVc===E)return;this.AVc=E;if(E){this.
T3.Ax(A.aaL(A.ach.ACF));this.QL.Ax(A.aaL(A.ach.ACF));}else{this.T3.Ax(A.aaL(A.ach.
AqF));this.QL.Ax(A.aaL(A.ach.AqF));}},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.QL={I:this},0);A.acg.Ap._Init.call(this.T3={I:this
},0);this.__proto__=C.KA;this.H(Ayw);this.QL.H(Ayw);this.QL.Cv(1);this.T3.H(Ayw);
this.T3.Cv(0);this.J(this.QL,0);this.J(this.T3,0);this.QL.Ax(A.aaL(A.ach.AqF));this.
T3.Ax(A.aaL(A.ach.AqF));},_Done:function(){this.__proto__=A.Core.P;this.QL._Done(
);this.T3._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.QL._ReInit();this.T3._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T3).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ASf={
Ge:null,Cc:null,Dp:null,Dj:null,Kv:null,Zm:10,Aq5:0,AEy:0,ASt:0,Azd:false,LX:false
,Bc$:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).An.Lj(
))A._GetAutoObject(A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).
An.HK().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(
A.Device.Helper).Aqk(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAH],this.
Db.Q,0);A.zX([this,this.BA$],this.Dp.Q,0);A.zX([this,this.ABx],this.Dj.Q,0);A.zX([
this,this.ABx],this.Dj.HH.Q,0);A.zX([this,this.ABx],[this,this.AST,this.AFI],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A9L,B.BbW],0);A.zX([this
,this.BfG],this.Cc.Q,0);A.pe([this,this.AAH],this);A.pe([this,this.GH],this);A.pe([
this,this.ABx],this);A.pe([this,this.BfG],this);},CC:function(G){if(!this.Azd){this.
Azd=true;A.pe([this,this.AcT],this);}else C.H0.CC.call(this,G);},Agh:function(G){
this.ASt=this.Zm;this.Bdh(this);},Ew:function(G){A._GetAutoObject(A.Device.Helper
).W.E6();A._GetAutoObject(C.A8).FB();},Aup:function(){this.N.CS(A.jV);this.N.C3(
A.aaL(A.ach.ADL));this.N.Ca=[this,this.AyZ];},AAC:function(G){A._GetAutoObject(C.
A8).Cd(55);},AFI:function(E){if(this.Zm===E)return;this.Zm=E;A.abo([this,this.AST
,this.AFI],0);},Bdh:function(G){var F;if(!this.Zm||(this.Bc$===true)){A._GetAutoObject(
A.Device.Device).A3(24,false,CR,0,null);if(this.AEy===1)A._GetAutoObject(A.Device.
Device).A3(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A3(23,
true,this.AEy.toFixed(),2000,null);this.Ew(this);return;}this.Ge.Gr();this.Ge.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Ge.N3(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Ge.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Ge.JY(A._GetAutoObject(A.Device.Helper).W.Gender);this.Ge.Nk(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Ge.PW(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Ge.SK(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alu=A._GetAutoObject(
A.Device.Helper).A1T(this.Ge,(F=this.Dj.H1.Hu,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alu)this.Ai1();else{A._GetAutoObject(A.Device.Helper).AKs(
this.Ge,Alu,(F=this.Dj.H1.Hu,F[1].call(F[0])),this.Zm-1,[this,this.ApJ]);A._GetAutoObject(
A.Device.Device).A3(24,false,CR,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am7())this.C$.Z(true);else this.C$.Z(false);if(this.LX){this.Dp.
Z(false);this.Cc.T(A.aaR(A.acf.ACM));this.Cc.AFb(A.aaL(A.ach.Afe));}else{this.Dp.
Z(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.AFb(null);}if((this.Y.Bjx(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JL(this.Y.TT(this.AV,0x1));this.Am();
},ATn:function(E){if(this.Aq5===E)return;this.Aq5=E;A.abo([this,this.A81,this.ATn
],0);},ABx:function(G){var F;var AKe=(F=this.Dj.Q,F[1].call(F[0]));var AAk=-1;switch((
F=this.Dj.H1.Hu,F[1].call(F[0]))){case 0:AAk=AKe+((F=A._GetAutoObject(A.Device.Helper
).BdP(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zm-1));break;case 1:AAk=(AKe+this.
Zm)-1;break;case 3:case 2:case 5:case 4:switch(this.Dj.HH.AC.Q){case 0:AAk=(AKe+
this.Zm)-1;break;case 1:AAk=(AKe-this.Zm)+1;break;default:throw new Error(AYj+this.
Dj.HH.AC.Q.toFixed());}break;default:throw new Error(AYk+this.Dj.HH.AC.Q.toFixed(
));}this.ATn(AAk);},BA$:function(G){A.pe([this,this.GH],this);A.pe([this,this.At_
],this);},AAH:function(G){A._GetAutoObject(A.Device.Helper).AVL(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LX);A.pe([this,this.ABx],this);},ApJ:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.ApD();else switch((F=this.Dj.H1.Hu,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JL(this.Dj);break;case 0:this.JL(this.Dp
);break;case 1:this.JL(this.Cc);break;default:throw new Error(Ayx+(F=this.Dj.H1.
Hu,F[1].call(F[0])).toFixed());}break;case 25:this.JL(this.Cc);break;case 47:if(
As.PopupState===7)this.ApD();else{this.JL(this.Dj);this.JL(this.Cc);}break;case 43:{
this.JL(this.Dj);this.JL(this.Dp);}break;case 42:{this.JL(this.Dj);this.JL(this.
Cc);}break;case 41:break;default:A.ab5("%s%e",Atd,As.Id);}},Ai1:function(){this.
Ge.Ci(A._GetAutoObject(A.Device.Device).An);this.AEy=this.AEy+1;if(A._GetAutoObject(
A.Device.Helper).Am7()){if(A._GetAutoObject(A.Device.Device).Bt.Lj()){A._GetAutoObject(
A.Device.Device).A3(24,false,U3,0,null);A._GetAutoObject(A.Device.Device).A3(50,
true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),0,null);}else{var L$=A.
_GetAutoObject(A.Device.Device).An.LV(0,this.Ge.Id);A._GetAutoObject(A.Device.Device
).SR(L$);var B2=A._NewObject(A.Device.Rating,0);B2.Gr();B2.OnSetAnimalId(this.Ge.
Id);B2.OnSetBodyWeight(this.KM);B2.OnSetTimestamp(this.Ge.DateOfBirth);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApD();},ApD:function(){var B;var F,Ct;if(!!(F=this.Cc.
Q,F[1].call(F[0]))){(F=this.Cc.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LX)(
Ct=this.Dp.Q,Ct[2].call(Ct[0],(F=this.Cc.Q,F[1].call(F[0]))));}if(!this.LX)(Ct=this.
Dp.Q,Ct[2].call(Ct[0],A._GetAutoObject(A.Device.Helper).Bah(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dp.Q,F[1].call(
F[0])),this.Dp.AjO(),this.Dp.AjQ())));var IZ=null;switch((F=this.Dj.H1.Hu,F[1].call(
F[0]))){case 3:IZ=[B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyR];break;case 2:
IZ=[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyS];break;case 4:case 5:IZ=[B=A.
_GetAutoObject(A.Device.Device),B.Anu,B.AoB];break;default:;}if(!!IZ){switch((F=
this.Dj.Kp.VV,F[1].call(F[0]))){case 1:IZ[2].call(IZ[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IZ[2].call(IZ[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dj.Q,F[2].call(F[0],IZ[1].call(IZ[0])));
}var XM=100-((this.Zm/this.ASt)*100);A._GetAutoObject(A.Device.Device).A3(24,true
,(((this.ASt.toFixed()+Ate)+(XM|0).toFixed())+Ate)+(F=this.Dj.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BBj]);this.AFI(this.Zm-1);A.aaS([this,this.Bdh],null);},BBj:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.Bc$=true;},ApK:function(G){var F;C.H0.ApK.call(this,G);var AoY=
0;switch((F=this.B0.Q,F[1].call(F[0]))){case 0:case 2:AoY=A._GetAutoObject(A.Device.
Device).AdT;break;case 1:AoY=730;break;default:A.ab5("%s%e",Alf,(F=this.B0.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmK(AoY));(F=this.C$.Q,F[2].call(
F[0],this.C$.AnZ));switch(this.B0.AC.Q){case 0:{this.Kv.Je(A.aaR(A.acf.ANm));this.
Kv.IS(A.aaR(A.acf.ANn));}break;case 1:{this.Kv.Je(A.aaR(A.acf.Bie));this.Kv.IS(A.
aaR(A.acf.Bif));}break;case 2:{this.Kv.Je(A.aaR(A.acf.Bkl));this.Kv.IS(A.aaR(A.acf.
Bkm));}break;default:throw new Error(Alf);}},Ae4:function(E){if(this.LX===E)return;
this.LX=E;A.abo([this,this.Awl,this.Ae4],0);},At_:function(G){var F,Ct,Tf;this.Ae4(((
F=this.Cc.Q,F[1].call(F[0]))===(Ct=this.Dp.Q,Ct[1].call(Ct[0])))&&!!(Tf=this.Cc.
Q,Tf[1].call(Tf[0])));A.pe([this,this.GH],this);},BfG:function(G){A.pe([this,this.
At_],this);},AST:function(){return this.Zm;},A81:function(){return this.Aq5;},Awl:
function(){return this.LX;},_Init:function(aArg){C.H0._Init.call(this,aArg);C.Av5.
_Init.call(this.Cc={I:this},0);C.Rb._Init.call(this.Dp={I:this},0);C.AGP._Init.call(
this.Dj={I:this},0);C.AU0._Init.call(this.Kv={I:this},0);this.__proto__=C.ASf;var
B;this.Dr(C.ADo);this.Cc.H(Aop);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.
Cc.ArO(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asy));this.Cc.ArP(A.
aaR(A.acf.Akn));this.Dp.H(AYl);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Ul));this.
Dp.Ar4(false);this.Dj.H(AYm);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.A7n));this.Dj.
Bx(0);this.Kv.H(AYn);this.Kv.Aj(true);this.Kv.T(A.aaR(A.acf.A8u));this.Kv.Ga(1);
this.Kv.EV(500);this.Kv.IS(A.aaR(A.acf.ANn));this.Kv.Je(A.aaR(A.acf.ANm));this.Kv.
A_i(A.aaR(A.acf.Aq5)+A.aaR(A.acf.Colon));this.J(this.Cc,0);this.J(this.Dp,0);this.
J(this.Dj,0);this.J(this.Kv,0);this.Ge=A._NewObject(A.Device.Animal,0);this.Cc.AR=[
this,this.AcT];this.Cc.L1([this,this.AcT]);this.Cc.L4(A.aaL(A.ach.Afe));this.Cc.
Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArC,B.PW]);this.Cc.OQ([B=A._GetAutoObject(
A.Device.Device),B.Un,B.U5]);this.Cc.PU([B=A._GetAutoObject(A.Device.Device),B.Uo
,B.U6]);this.Cc.Uq([B=A._GetAutoObject(A.Device.Device),B.Anr,B.AoA]);this.Cc.Ae4([
this,this.Awl,this.Ae4]);this.Dp.Gs([this,this.D_,this.GS]);this.Dp.L1([this,this.
AcT]);this.Dp.L4(A.aaL(A.ach.Afe));this.Dp.Us([B=this.Gender.Animal,B.WD,B.JY]);
this.Dp.OQ([B=A._GetAutoObject(A.Device.Device),B.Un,B.U5]);this.Dp.PU([B=A._GetAutoObject(
A.Device.Device),B.Uo,B.U6]);this.Dp.Uq([B=A._GetAutoObject(A.Device.Device),B.Anr
,B.AoA]);this.Dp.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Anv,B.Nk]);this.Dp.
Anx([B=this.AnimalType.Animal,B.PT,B.EC]);this.Dj.Gs([this,this.D_,this.GS]);this.
Dj.L1([B=this.Dj,B.FV]);this.Dj.L4(A.aaL(A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ArD,B.SK]);this.Dj.A9U(A._GetAutoObject(A.Device.Helper).W);
this.Kv.Au([this,this.AST,this.AFI]);this.Kv.BmL([this,this.A81,this.ATn]);this.
Init(aArg);},_Done:function(){this.__proto__=C.H0;this.Cc._Done();this.Dp._Done(
);this.Dj._Done();this.Kv._Done();C.H0._Done.call(this);},_ReInit:function(){C.H0.
_ReInit.call(this);this.Cc._ReInit();this.Dp._ReInit();this.Dj._ReInit();this.Kv.
_ReInit();this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArO(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.Asy));this.Cc.ArP(A.aaR(A.acf.Akn));this.Dp.T(A.aaR(A.acf.
Ul));this.Dj.T(A.aaR(A.acf.A7n));this.Kv.T(A.aaR(A.acf.A8u));this.Kv.IS(A.aaR(A.
acf.ANn));this.Kv.Je(A.aaR(A.acf.ANm));this.Kv.A_i(A.aaR(A.acf.Aq5)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.H0._Mark.call(this,D);if((B=this.Ge)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUs={BX:null,RatingMode:null,Lp:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=null;this.BQ.Cf=null;this.BQ.CE=[this,this.AaH];this.BQ.CS(A.jV
);this.BQ.Cw(null);this.BQ.C2(A.aaL(A.ach.YB));}return this.BQ;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BX._Init.call(this.BX={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AUs;var B;this.
H(Qc);this.BX.H(Ata);this.BX.T(A.aaR(A.acf.A$$));this.J(this.BX,0);this.BX.Au([B=
this.RatingMode,B.B$,B.Cb]);this.BX.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BX._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BX._ReInit(
);this.RatingMode._ReInit();this.BX.T(A.aaR(A.acf.A$$));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bgg],[B=A._GetAutoObject(A.Device.Device),B.ASX,B.A0E],0);A.pe([this,this.Bgg],this
);},Du:function(){return 2;},Gl:function(aIndex){return this.RatingModeToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Aw7(E);},Bgg:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.BG.Set(0,0);this.BG.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANG={WV:
function(G){C.Amw.WV.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aq0()){
A._GetAutoObject(A.Device.Helper).W.AkC(false);A._GetAutoObject(A.Device.Helper).
W.Ci(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amw._Init.call(
this,aArg);this.__proto__=C.ANG;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hi={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hi;},_className:"Application::BaseItem"
};C.AV0={BX:null,WeightRecordingMode:null,Lp:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=null;this.BQ.Cf=null;this.BQ.CE=[this,this.AaH];this.BQ.CS(A.jV
);this.BQ.Cw(null);this.BQ.C2(A.aaL(A.ach.YB));}return this.BQ;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BX._Init.call(this.BX={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AV0;var B;this.H(Qc);this.BX.H(Ata);this.BX.T(A.aaR(A.acf.AsW));this.BX.EV(1);
this.J(this.BX,0);this.BX.Au([B=this.WeightRecordingMode,B.B$,B.Cb]);this.BX.CK(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BX.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BX._ReInit();this.WeightRecordingMode.
_ReInit();this.BX.T(A.aaR(A.acf.AsW));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Du:function(){return 2;},Gl:function(aIndex){return this.
WeightRecordingModeToString.BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Axh(E);},Init:function(aArg){var B;A.zX([this
,this.Bhm],[B=A._GetAutoObject(A.Device.Device),B.A9K,B.BbV],0);A.pe([this,this.
Bhm],this);},Bhm:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.BG.Set(0,0);this.BG.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightRecordingModeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa4={BooleanToAutoOnOff:null,Gl:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BT(aIndex);},_Init:function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa4;},_Done:function(
){this.__proto__=C.Gd;this.BooleanToAutoOnOff._Done();C.Gd._Done.call(this);},_ReInit:
function(){C.Gd._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gd._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxX={A7B:function(){var B;this.
AxA(1);this.Jx(0,3);this.VI(0,0,(B=this.M)[3]-B[1]);this.A5d(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A5d(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VQ(0);},_Init:
function(aArg){C.ABK._Init.call(this,aArg);this.__proto__=C.AxX;},_className:"Application::Triangle"
};C.AT5={Y:null,Init:function(aArg){this.Byw(this);},Byv:function(Qe){var Aa=A._NewObject(
C.ANN,0);Aa.H(BD);Aa.T(Qe);Aa.Aj(true);Aa.Ar(false);Aa.Bi(true);this.J(Aa,0);this.
AtC(this);},AtC:function(G){var B;var AlC=1;var A24=0;var X=this.Y.Ah;var Cy=null;
var K8=null;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OZ.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cy){var ALm=(B=Cy.V.B7.A7e(Cy.V.String,0,-1))[2]-B[0
];if(!!(C.Ms.isPrototypeOf(X)?X:null))ALm=ALm+20;if(A24<ALm)A24=ALm;Cy.H(A.abL(Cy.
M,120));Cy.H(A.abI(Cy.M,28));Cy.H(A.abM(Cy.M,this.M[0]));Cy.H(A.abO(Cy.M,((B=this.
M)[3]-B[1])-(AlC*28)));AlC=AlC+1;}else{K8=(A.acg.C8.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K8){var Di=((B=this.M)[3]-B[1])-((AlC-1)*28);K8.DM([this.
M[0],K8.Et[1]]);K8.DM([K8.Et[0],Di]);K8.DC([this.M[0]+120,K8.ED[1]]);K8.DC([K8.ED[
0],Di]);}}X=X.Ah;}this.BB3(A24,28);},BB3:function(aWidth,BxF){var B;var X=this.Y.
Ah;var Cy=null;var K8=null;aWidth=aWidth+20;if(aWidth>(C.Asz[0]-10))aWidth=C.Asz[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OZ.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cy){Cy.V.Text.A6(0x14);Cy.V.Text.Hn(10);Cy.H(A.abL(Cy.M,aWidth
));Cy.H(A.abI(Cy.M,BxF));Cy.H(A.abM(Cy.M,this.M[2]-((B=Cy.M)[2]-B[0])));}else{K8=(
A.acg.C8.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K8){K8.DM([this.M[
2]-aWidth,K8.Et[1]]);K8.DC([this.M[2],K8.ED[1]]);}}X=X.Ah;}},Byw:function(G){var
Aa=A._GetAutoObject(C.BS).AqP;while(!!Aa){if(!!(C.Axo.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axo.isPrototypeOf(Aa)?Aa:null);this.Byu(EF.DK,EF.AR,EF.Bw,EF.ARn);}else
if(!!(C.Axq.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axq.isPrototypeOf(Aa)?Aa:null);
this.ByB(EF.DK,EF.AR,EF.Bw,EF.WC,EF.WX);}else if(!!(C.ZC.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.ZC.isPrototypeOf(Aa)?Aa:null);this.Byt(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkI.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkI.isPrototypeOf(Aa)?Aa:null);this.
Byv(EF.DK);}else if(!!(C.AGg.isPrototypeOf(Aa)?Aa:null))this.ByC();Aa=Aa.My;}A._GetAutoObject(
C.BS).Clear();A.pe([this,this.AtC],this);},Byt:function(Qe,Ac4,Ah7){var Aa=A._NewObject(
C.Ms,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(Ah7);Aa.Bi(true);this.J(Aa
,0);this.AtC(this);},ByC:function(){var K8=A._NewObject(A.acg.C8,0);K8.L(A.jb.Bm
);K8.Aj(true);K8.Nn(3);this.J(K8,0);this.AtC(this);},Byu:function(Qe,Ac4,Ah7,A1c
){var Aa=A._NewObject(C.AmI,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(Ah7
);Aa.Bi(true);Aa.Au(A1c);this.J(Aa,0);this.AtC(this);},ByB:function(Qe,Ac4,Ah7,A3j
,Agr){var Aa=A._NewObject(C.ANM,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(
Ah7);Aa.Bi(true);Aa.BnL(A3j);Aa.AFW(Agr);this.J(Aa,0);this.AtC(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.AT5;this.H(Qc);this.Y.H(Qc);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afj={_Init:
function(){A.acl.Afj._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A$d={AqP:null,Ahn:null,Ml:function(Qe){var EF=A._NewObject(
C.AkI,0);EF.DK=Qe;this.J(EF);},Clear:function(){this.AqP=null;this.Ahn=null;},Fz:
function(){var K8=A._NewObject(C.AGg,0);this.J(K8);},J:function(Bcx){if(!this.AqP
){this.AqP=Bcx;this.Ahn=this.AqP;}else{this.Ahn.My=Bcx;this.Ahn=this.Ahn.My;}},TC:
function(Qe,Ac4){var EF=A._NewObject(C.ZC,0);EF.DK=Qe;EF.AR=Ac4;this.J(EF);},Bhv:
function(Qe,Ac4,A1c){var EF=A._NewObject(C.Axo,0);EF.DK=Qe;EF.AR=Ac4;EF.ARn=A1c;
this.J(EF);},AaV:function(Qe){var EF=A._NewObject(C.ZC,0);EF.DK=Qe;EF.Bw=false;this.
J(EF);},ABO:function(Qe,Ac4,A3j,Agr){var EF=A._NewObject(C.Axq,0);EF.DK=Qe;EF.AR=
Ac4;EF.WC=A3j;EF.WX=Agr;this.J(EF);},_Init:function(aArg){this.__proto__=C.A$d;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BS={_Init:function(){C.A$d._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axp={My:null,_Init:function(aArg){this.__proto__=
C.Axp;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.My)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOJ={Amu:null,ArH:function(E){if(this.Amu===
E)return;if(!!this.Ab)this.Ab.ZG(this);if(!!this.Amu)this.AqH(this.Amu,A._GetAutoObject(
C.AsD),null,null,null,null,false);this.Amu=E;if(!!this.Amu)this.AkM(this.Amu,A._GetAutoObject(
C.AsD),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOJ;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amu)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WK={_Init:function(){C.AOJ._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N5={Init:function(aArg){var C1=A._NewObject(C.AT6,0);C1.H(this.M);this.AkM(C1,A.
_GetAutoObject(C.AnX),null,A._GetAutoObject(C.AnX),A._GetAutoObject(C.AnX),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N5;this.H(Qc);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.AsD={_Init:function(){C.AU2._Init.call(this,0);this.ACK=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AT6={AL:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.AT6;this.H(AIh);this.C4(0);this.AL.A0(0x3F);this.AL.H(AIh);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.P;this.AL.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AU1={Se:function(){var B;var Ao=(A.acl.Afb.isPrototypeOf(B=A.acl.Aen.Se.call(this
))?B:null);if(!Ao)throw new Error(As9);Ao.Cp.Cx=255;Ao.Cp.B3=0;return Ao;},Sd:function(
){var B;var Ao=(A.acl.Axn.isPrototypeOf(B=A.acl.Aen.Sd.call(this))?B:null);if(!Ao
)throw new Error(As9);Ao.E0.Cx=0;Ao.E0.B3=255;Ao.Dt=true;return Ao;},_Init:function(
aArg){A.acl.Aen._Init.call(this,aArg);this.__proto__=C.AU1;},_className:"Application::ShadeOverlayTransition"
};C.AnX={_Init:function(){C.AU1._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkV={AnZ:0,A2n:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Is.Ai.call(this,Ae);this.BU.L(this.V.AQ);if(!!this.Q){
var BDa=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BU.R((A.
_GetAutoObject(A.Device.Converter).Ak$(BDa)+CR)+A._GetAutoObject(A.acj.DU).Af4()
);else this.BU.R(A.aaR(A.acf.Akn));}},Kg:function(G){var B;var Bhj=(this.A2n===false
)&&(this.AM<=this.Gq);if(Bhj)this.Bx(this.AnZ);this.A4U(this.AM,4);if(Bhj){this.
Bx(this.AM-this.Aj5);this.A2n=true;}C.Is.Kg.call(this,G);},Kb:function(G){this.A4U(
this.AM,5);C.Is.Kb.call(this,G);},Bx:function(E){this.A4U(E,4);E=(((E+((this.Aj5
/2)|0))/this.Aj5)|0)*this.Aj5;if(!E)this.A2n=false;C.Is.Bx.call(this,E);},Ahv:function(
E){if(this.AnZ===E)return;this.AnZ=E;},A4U:function(Bxn,GA){this.ATq(A._GetAutoObject(
A.acj.DU).BdT(Bxn,GA));},_Init:function(aArg){C.Is._Init.call(this,aArg);this.__proto__=
C.AkV;this.H(K1);this.AnZ=this.Gq;this.J3(this.H6,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BEA={None:0,Left:1,BE9:2,Right:3};C.Amy={Xu:
null,FE:null,Ek:null,Background:null,Anj:null,Gc:null,KQ:A.jV,AEg:null,Init:function(
aArg){var B;A.zV([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A32],[B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft],0);A.pe([this,this.
LQ],this);A.pe([this,this.A32],this);this.Bb(this.Ek);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},Lp:function(){if(!this.BQ)this.BQ=A._NewObject(
C.N,0);return this.BQ;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xu);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AKY();},Agg:function(G){var Aa=(C.ACg.isPrototypeOf(G)?G:null);var Hs;if(!!Aa)Hs=
Aa.Hs;else Hs=this.Gc.FN();if(Hs>=A._GetAutoObject(A.Device.Device).An.B_())return;
A._GetAutoObject(A.Device.Helper).G8(Hs);A.pe([this,this.AaH],this);},AKY:function(
){},Aga:function(G){this.Am();},A3T:function(G){if(this.Gc.FN()<(A._GetAutoObject(
A.Device.Device).An.B_()-1))this.Gc.GT(this.Gc.FN()+1);},A3U:function(G){if(this.
Gc.FN()>0)this.Gc.GT(this.Gc.FN()-1);},DJ:function(G){var Gh=A._GetAutoObject(A.
Device.Device).An.B_();var MX=this.BQ;if(!MX)return;MX.C2(A.aaL(A.ach.AeA));MX.CE=[
this,this.AaH];if(Gh<=0){MX.Cw(null);MX.C3(null);MX.Cf=null;MX.Ca=null;MX.WO=false;
MX.ZF=false;}else if(Gh===1){MX.Cw(null);MX.C3(A.aaL(A.ach.AeB));MX.Cf=null;MX.Ca=[
this,this.Agg];MX.WO=false;MX.ZF=false;}else{MX.Cw(A.aaL(A.ach.Aq8));MX.C3(A.aaL(
A.ach.Are));MX.Cf=[this,this.A3T];MX.Ca=[this,this.A3U];MX.WO=true;MX.ZF=true;}}
,LQ:function(G){this.BgG(this);this.Xu=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKY();},BnD:function(E){if(this.AEg===E)return;this.AEg=E;A.pe([this,this.BA8
],this);},BA8:function(G){this.BgG(this);},BgG:function(G){var B;if(!!this.FE)this.
HP(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(this.AEg,0))?B:null);if(!
!this.FE){this.FE.H(AYo);this.J(this.FE,0);}},A32:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DL(1,4
))this.Gc.Dl(A.aaR(A.acf.ASn));else this.Gc.Dl(this.KQ);},Dl:function(E){if(this.
KQ===E)return;this.KQ=E;A.pe([this,this.A32],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Anj={I:this},0);C.Gc._Init.call(
this.Gc={I:this},0);this.__proto__=C.Amy;this.H(Qc);this.Ek.H(BD);this.Ek.A_l(A.
jb.CU);this.Ek.A_m(A.jb.Text);this.Background.H(Ff);this.Background.L(A.jb.Bph);
this.Anj.H(AIi);this.Anj.L(A.jb.CU);this.Gc.H(AIi);this.Gc.N4(C.ACg);this.AEg=C.
APO;this.KQ=A.aaR(A.acf.Av9);this.J(this.Ek,0);this.J(this.Background,0);this.J(
this.Anj,0);this.J(this.Gc,0);this.Ek.AR=[this,this.Agg];this.Ek.Ab3(A._NewObject(
C.Yw,0));this.Gc.Zt(A._GetAutoObject(A.Device.Device).An);this.Gc.Zx([this,this.
Agg]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ek._Done(
);this.Background._Done();this.Anj._Done();this.Gc._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ek._ReInit();this.
Background._ReInit();this.Anj._ReInit();this.Gc._ReInit();this.Dl(A.aaR(A.acf.Av9
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xu)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Anj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.ACg={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.Dg(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){this.T(this.AX.CF(Ad,1).toFixed());this.DS.EC(this.AX.AmX(
Ad,14));this.DS.AFd(this.AX.I9(Ad,13));this.DS.Ae3(this.AX.H4(Ad,8));this.DS.Uu(
this.AX.H4(Ad,11));this.DS.Ae7(this.AX.H4(Ad,12));this.DS.Ae9(this.AX.CF(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.ACg;this.
H(Oe);this.AP.L(A.jb.Bc);this.DS.H(AYp);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.Yw={Q:null,Init:function(aArg){var
B;this.AA8(this);this.Au([B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft]);},AEU:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Nq(FilterCriterion
);var Ai5=this.Akq();if(Ai5>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai5,false);Filter.CX(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeZ(false);},BwN:function(s){this.AEU(
s);},AA8:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);if(!!FilterCriterion
)Filter.Nq(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BG2:function(s){
this.AA8(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,this.
AcW],this);},C5:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwP(-1);return;}var Ay$=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DL(1,4))?B:null);if(!Ay$){this.AW.AwP(0);this.AW.AeZ(true);}else
this.AW.AwP(Ay$.A5);},AcW:function(s){this.C5(s);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.Yw;this.AW.AwP(0);this.AW.Dk=[this,this.BwN];this.
Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqK={BirthType:null,EaseOfDelivery:null,Cc:null,Ef:null,AbI:null,G7:null,Cn:
null,AbG:null,AM6:false,Init:function(aArg){this.AM6=A._GetAutoObject(A.Device.Helper
).W.Arh();if(this.AM6)this.AeY(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeY(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cc.
L1([this,this.AcT]);this.Cc.L4(A.aaL(A.ach.Afe));this.Cc.AR=[this,this.AcT];}this.
Ef.Ar4(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Cc.Q,0);A.pe([this,this.GH],this);},Agh:function(G
){if(((this.Ef.Asn===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARr(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rj(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ci(
A._GetAutoObject(A.Device.Device).An);if(this.KM>0){if(this.AM6){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LV(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B2=A._NewObject(A.Device.Rating,0);B2.E3(Ad,A._GetAutoObject(A.Device.
Device).Bt);B2.OnSetBodyWeight(this.KM);B2.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AYq,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gr();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.KM);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A8).FB();},Ew:function(
G){A._GetAutoObject(A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A8).FB();},Aup:function(
){this.N.CS(A.jV);this.N.C3(A.aaL(A.ach.Am4));this.N.Ca=[this,this.AyZ];},AAC:function(
G){A._GetAutoObject(C.A8).Cd(32);},GH:function(G){var F;var Jq=(F=this.Ef.Q,F[1].
call(F[0]));var ABu=(F=this.Cc.Q,F[1].call(F[0]));var A4P=true;if(!!Jq&&(ABu===Jq
))A4P=false;A._GetAutoObject(A.Device.Helper).J4(this.Cc,A4P);this.Ef.BmD(!A4P);
},_Init:function(aArg){C.H0._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Av5._Init.
call(this.Cc={I:this},0);C.Rb._Init.call(this.Ef={I:this},0);C.Aco._Init.call(this.
AbI={I:this},0);C.BX._Init.call(this.G7={I:this},0);C.SS._Init.call(this.Cn={I:this
},0);C.BX._Init.call(this.AbG={I:this},0);this.__proto__=C.AqK;var B;this.Cc.H(Ah2
);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArO(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CR)+A.aaR(A.acf.Asy));this.Cc.ArP(A.aaR(A.acf.Akn));this.Ef.H(Ah2);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Ul));this.AbI.H(AYr);this.AbI.Aj(true);this.
AbI.T(A.aaR(A.acf.GN));this.G7.H(Ah2);this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Ars
));this.Cn.H(Ah2);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFO(true);
this.AbG.H(Ah2);this.AbG.Aj(true);this.AbG.T(A.aaR(A.acf.AgK));this.J(this.Cc,-1
);this.J(this.Ef,-1);this.J(this.AbI,-1);this.J(this.G7,-1);this.J(this.Cn,-1);this.
J(this.AbG,-1);this.BirthType.L2(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
L2(A._GetAutoObject(A.Device.Helper).W);this.Cc.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArC,B.PW]);this.Ef.Gs([this,this.D_,this.GS]);this.Ef.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Anv,B.Nk]);this.AbI.Gs([this,this.D_,this.GS]);this.AbI.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SK]);this.G7.Au([B=this.BirthType,
B.B$,B.Cb]);this.G7.CK(this.BirthType);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.
L1([B=this.Cn,B.FV]);this.Cn.L4(A.aaL(A.ach.Edit));this.Cn.Ab7([B=A._GetAutoObject(
A.Device.Helper).W,B.Awf,B.Q6]);this.AbG.Au([B=this.EaseOfDelivery,B.B$,B.Cb]);this.
AbG.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
H0;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cc._Done();this.Ef._Done(
);this.AbI._Done();this.G7._Done();this.Cn._Done();this.AbG._Done();C.H0._Done.call(
this);},_ReInit:function(){C.H0._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cc._ReInit();this.Ef._ReInit();this.AbI._ReInit();
this.G7._ReInit();this.Cn._ReInit();this.AbG._ReInit();this.Cc.T(A.aaR(A.acf.Ak6
));this.Cc.ArO(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asy));this.
Cc.ArP(A.aaR(A.acf.Akn));this.Ef.T(A.aaR(A.acf.Ul));this.AbI.T(A.aaR(A.acf.GN));
this.G7.T(A.aaR(A.acf.Ars));this.Cn.T(A.aaR(A.acf.Aeg));this.AbG.T(A.aaR(A.acf.AgK
));},_Mark:function(D){var B;C.H0._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbG
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Aco={FM:null,AW:null,A_:0,I3:function(G){C.Ds.I3.call(this,G);if(!this.A_)this.
FV(this);else this.He(this);},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hx.Z(false
);this.H6.Z(false);if(this.A_===1){this.Bb(this.AW);if(this.Hl){this.AW.FO(A.jb.
CJ);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CU);this.
Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl)this.AW.FO(A.jb.CJ);
else this.AW.FO(A.jb.CU);this.Bb(null);}},Bx:function(E){var F;var BP=this.AM;C.
Ds.Bx.call(this,E);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Um,this.Bbw],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:this.FM.AkR((F=
this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0
);},Ex:function(EO){var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.
A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.A_=1;if(this.A_===1)this.AW.
SQ(7);this.DJ(this);this.Am();},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.ARl._Init.call(this.AW={I:this},0);this.__proto__=C.Aco;this.H(U0);this.EV(999999
);this.V.R(Atf);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H6.Z(false);this.AW.H(AYs
);this.AW.ATy(6);this.J(this.AW,0);this.AW.Au([this,this.Um,this.Bbw]);this.FM=A.
_NewObject(C.Aeu,0);},_Done:function(){this.__proto__=C.Ds;this.AW._Done();C.Ds.
_Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Du:function(){return 4;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BT(aIndex);},DZ:function(A7){return A7;},H5:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuO={Y:null,QR:null,N0:null,Ee:null,PJ:null,PF:null,PG:null,Ay:null,Gd:null,
ReasonOfLeaving:null,AhC:null,M8:0,AmM:false,ACk:true,AOC:false,Asi:false,Init:function(
aArg){A.zX([this,this.A9R],[this,this.A9h,this.ATB],0);this.Ahs(A._GetAutoObject(
A.Device.Helper).W.AhW(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9R],this);},DE:function(G){
var B;var Fi=0;var X=this.AV;switch(this.Cq.CP){case 6:Fi=2;break;case 7:Fi=7;break;
case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al4:function(G
){A._GetAutoObject(C.A8).FB();},ApO:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.
Device.Device).Bt.HK().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gr();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.M8);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmM){A._GetAutoObject(A.Device.Helper).W.Ae5(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A7g(A._GetAutoObject(A.Device.Helper).Dv(),this.Asi);}A._GetAutoObject(A.Device.
Helper).W.AFN(this.ReasonOfLeaving.C7((F=this.N0.Q,F[1].call(F[0]))));if(this.ACk
)A._GetAutoObject(A.Device.Helper).W.PW(0);if(this.Asi)A._GetAutoObject(A.Device.
Helper).W.AwR(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);this.A$N();},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},Ahs:function(E){
if(this.M8===E)return;this.M8=E;},Ans:function(){return this.M8;},BfI:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.A8).FB();A._GetAutoObject(A.Device.Helper
).Ast();}},A9R:function(G){switch(this.Asi){case false:this.Ee.T(A.aaR(A.acf.AV2
));break;case true:this.Ee.T(A.aaR(A.acf.Brh));break;default:;}},ATB:function(E){
if(this.Asi===E)return;this.Asi=E;},A9h:function(){return this.Asi;},A$N:function(
){A._GetAutoObject(A.Device.Device).A3(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfI]);},Bm3:function(E){if(this.AOC===E)return;
this.AOC=E;},Blm:function(){return this.AOC;},Bmr:function(E){if(this.ACk===E)return;
this.ACk=E;},Bla:function(){return this.ACk;},BmB:function(E){if(this.AmM===E)return;
this.AmM=E;},Bli:function(){return this.AmM;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afn._Init.call(this.QR={I:this
},0);C.AsC._Init.call(this.N0={I:this},0);C.AkV._Init.call(this.Ee={I:this},0);C.
Afn._Init.call(this.PJ={I:this},0);C.Afn._Init.call(this.PF={I:this},0);C.Afn._Init.
call(this.PG={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gd._Init.call(this.
Gd={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
AhC._Init.call(this.AhC={I:this},0);this.__proto__=C.AuO;var B;this.N.Z(true);this.
N.CS(A.aaR(A.acf.Unregister));this.Dr(C.IM);this.Y.H(Ff);this.Y.JX(1);this.QR.H(
Aah);this.QR.Aj(true);this.QR.T(A.aaR(A.acf.AmM));this.QR.Bi(true);this.QR.ZA(false
);this.QR.Ga(-1);this.QR.EV(1);this.N0.H(U2);this.N0.Aj(true);this.N0.T(A.aaR(A.
acf.ReasonOfLeaving));this.N0.Bi(true);this.N0.ZA(false);this.Ee.H(Ah1);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AV2));this.Ee.Bi(false);this.Ee.Ga(1000);this.Ee.
EV(999000);this.PJ.H(U2);this.PJ.Aj(true);this.PJ.T(A.aaR(A.acf.A5q));this.PJ.Bi(
true);this.PJ.ZA(false);this.PJ.Bx(1);this.PJ.Ga(-1);this.PJ.EV(1);this.PF.H(Aah
);this.PF.Aj(true);this.PF.T(A.aaR(A.acf.A5r));this.PF.Bi(true);this.PF.ZA(false
);this.PF.Bx(1);this.PF.Ga(-1);this.PF.EV(1);this.PG.H(U2);this.PG.Aj(true);this.
PG.T(A.aaR(A.acf.A53));this.PG.Bi(true);this.PG.ZA(false);this.PG.Bx(1);this.PG.
Ga(-1);this.PG.EV(1);this.Ay.H(Ayp);this.Gd.Au(0);this.J(this.Y,0);this.J(this.QR
,0);this.J(this.N0,0);this.J(this.Ee,0);this.J(this.PJ,0);this.J(this.PF,0);this.
J(this.PG,0);this.J(this.Ay,0);this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk
];this.QR.Au([B=this.Gd,B.B$,B.Cb]);this.QR.CK(this.Gd);this.QR.AkD([this,this.Bli
,this.BmB]);this.N0.Gs([this,this.D_,this.GS]);this.N0.L1([B=this.N0,B.FV]);this.
N0.L4(A.aaL(A.ach.Edit));this.N0.Au([B=this.ReasonOfLeaving,B.B$,B.Cb]);this.N0.
CK(this.ReasonOfLeaving);this.N0.Anz(this.AhC);this.Ee.Au([this,this.Ans,this.Ahs
]);this.PJ.Au([B=this.Gd,B.B$,B.Cb]);this.PJ.CK(this.Gd);this.PJ.AkD([this,this.
Blm,this.Bm3]);this.PF.Au([B=this.Gd,B.B$,B.Cb]);this.PF.CK(this.Gd);this.PF.AkD([
this,this.A9h,this.ATB]);this.PG.Au([B=this.Gd,B.B$,B.Cb]);this.PG.CK(this.Gd);this.
PG.AkD([this,this.Bla,this.Bmr]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QR._Done();this.N0._Done();this.Ee._Done();this.PJ._Done(
);this.PF._Done();this.PG._Done();this.Ay._Done();this.Gd._Done();this.ReasonOfLeaving.
_Done();this.AhC._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QR._ReInit();this.N0._ReInit();this.Ee._ReInit(
);this.PJ._ReInit();this.PF._ReInit();this.PG._ReInit();this.Ay._ReInit();this.Gd.
_ReInit();this.ReasonOfLeaving._ReInit();this.AhC._ReInit();this.N.CS(A.aaR(A.acf.
Unregister));this.QR.T(A.aaR(A.acf.AmM));this.N0.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AV2));this.PJ.T(A.aaR(A.acf.A5q));this.PF.T(A.aaR(A.acf.A5r
));this.PG.T(A.aaR(A.acf.A53));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhC)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AU0={AjM:null,Py:null,Avc:AYt,Bl:function(aSize){C.Is.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BU.H([0,40,aSize[0],80]);this.Hx.H([0,this.BU.M[1],40,
this.BU.M[3]]);this.H6.H([aSize[0]-40,this.BU.M[1],aSize[0],this.BU.M[3]]);},Ai:
function(Ae){var F;C.Is.Ai.call(this,Ae);this.Py.L(this.V.AQ);if(!!this.AjM){if((
F=this.AjM,F[1].call(F[0]))===-1)this.Py.R(this.Avc+AIj);else this.Py.R((this.Avc+
CR)+(F=this.AjM,F[1].call(F[0])).toFixed());}else this.Py.R(this.Avc);},A3B:function(
G){this.Am();},BmL:function(E){if(A.aaZ(this.AjM,E))return;if(!!this.AjM)A.z$([this
,this.A3B],this.AjM,0);this.AjM=E;if(!!E)A.zX([this,this.A3B],E,0);if(!!E)A.pe([
this,this.A3B],this);},A_i:function(E){if(this.Avc===E)return;this.Avc=E;this.Am(
);},_Init:function(aArg){C.Is._Init.call(this,aArg);C.CG._Init.call(this.Py={I:this
},0);this.__proto__=C.AU0;this.H(AYu);this.V.H(AYv);this.V.A6(0x12);this.Py.H(AYw
);this.Py.A6(0x12);this.Py.L(A.jb.Bm);this.J(this.Py,0);this.Py.S(A.aaL(A.fl.Af)
);this.Py.AZ(A.aaL(A.fl.Ak));this.Py.Cr(null);},_Done:function(){this.__proto__=
C.Is;this.Py._Done();C.Is._Done.call(this);},_ReInit:function(){C.Is._ReInit.call(
this);this.Py._ReInit();this.Py.S(A.aaL(A.fl.Af));this.Py.AZ(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Is._Mark.call(this,D);if((B=this.AjM)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Py)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMm={Y:null,JS:null,Su:null,Ay:null,Aqy:2500,AND:24,DE:function(G){var B;var
Fi=0;var X=this.AV;switch(this.Cq.CP){case 6:Fi=2;break;case 7:Fi=7;break;case 4:
Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al4:function(G){A._GetAutoObject(
C.A8).FB();},ApO:function(G){},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1)
)[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},Bmv:function(
E){if(this.Aqy===E)return;this.Aqy=E;},Blc:function(){return this.Aqy;},Bmw:function(
E){if(this.AND===E)return;this.AND=E;},Bld:function(){return this.AND;},Bk2:function(
G){var F,Ct;this.JS.BU.L(this.JS.V.AQ);if(!!this.JS.Q)this.JS.BU.R((((String.fromCharCode(((
F=this.JS.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Alc)+String.fromCharCode(((
Ct=this.JS.Q,Ct[1].call(Ct[0]))+10000).toFixed().charCodeAt(2)||0))+CR)+this.JS.
AHf);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Is._Init.call(this.JS={I:this},0);C.Is._Init.call(this.Su={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMm;this.N.Z(true);this.
Dr(C.IM);this.Y.H(Ff);this.Y.JX(1);this.JS.H(Ah1);this.JS.Aj(true);this.JS.T(A.aaR(
A.acf.Aqy));this.JS.Bi(false);this.JS.Ga(0);this.JS.EV(5000);this.JS.IS(A.aaR(A.
acf.Af8));this.JS.Je(A.aaR(A.acf.Af8));this.JS.ATq(100);this.Su.H(U2);this.Su.Aj(
true);this.Su.T(A.aaR(A.acf.A$n));this.Su.Bi(true);this.Su.Bx(24);this.Su.Ga(10);
this.Su.EV(33);this.Su.IS(AYx);this.Ay.H(Ayp);this.J(this.Y,0);this.J(this.JS,0);
this.J(this.Su,0);this.J(this.Ay,0);this.N.C2(A.aaL(A.ach.YB));this.Y.Em=[this,this.
Fk];this.JS.Au([this,this.Blc,this.Bmv]);this.JS.A_S([this,this.Bk2]);this.Su.Au([
this,this.Bld,this.Bmw]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JS._Done();this.Su._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JS._ReInit();this.Su._ReInit();this.
Ay._ReInit();this.JS.T(A.aaR(A.acf.Aqy));this.JS.IS(A.aaR(A.acf.Af8));this.JS.Je(
A.aaR(A.acf.Af8));this.Su.T(A.aaR(A.acf.A$n));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Aru={EaseOfDelivery:null,BirthType:null,Cc:null,Dp:null,Dj:null,Cn:null,Ee:null
,G7:null,Lk:null,M8:0,LX:false,Init:function(aArg){A.zX([this,this.GH],this.Cc.Q
,0);A.zX([this,this.GH],this.Dp.Q,0);A.zX([this,this.AAH],this.Db.Q,0);A.zX([this
,this.Bfe],this.Cn.Dm,0);A.zX([this,this.Be_],this.C$.Q,0);A.zX([this,this.At_],
this.Cc.Q,0);A.zX([this,this.At_],this.Dp.Q,0);A.pe([this,this.AAH],this);A.pe([
this,this.GH],this);A.pe([this,this.Bfe],this);A.pe([this,this.Be_],this);A.pe([
this,this.At_],this);},Ew:function(G){A._GetAutoObject(A.Device.Helper).W.E6();A.
_GetAutoObject(C.A8).FB();},Agh:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EC((F=this.B0.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhI
){var AlO=A._GetAutoObject(A.Device.Helper).AhI.AO0();A._GetAutoObject(A.Device.
Helper).W.Ab4(AlO);A._GetAutoObject(A.Device.Helper).W.AnE(AlO);}var Alu=A._GetAutoObject(
A.Device.Helper).A1T(A._GetAutoObject(A.Device.Helper).W,(F=this.Dj.H1.Hu,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alu){this.Ai1();A.pe([this,this.
Bw$],this);}else A._GetAutoObject(A.Device.Helper).AKs(A._GetAutoObject(A.Device.
Helper).W,Alu,(F=this.Dj.H1.Hu,F[1].call(F[0])),0,[this,this.ApJ]);},Aup:function(
){this.N.CS(A.jV);this.N.C3(A.aaL(A.ach.ADV));this.N.Ca=[this,this.AyZ];},Ai1:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);var L$=A._GetAutoObject(A.Device.Device).An.LV(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SR(L$);var Bd9=false;if(A._GetAutoObject(
A.Device.Helper).Am7()){if(A._GetAutoObject(A.Device.Device).Bt.Lj()){Bd9=true;A.
_GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.
HK().toFixed(),0,null);}else{var B2=A._NewObject(A.Device.Rating,0);B2.Gr();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KM);B2.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7H()&&(Bd9===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gr();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.M8);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}var IZ=null;switch((F=this.
Dj.H1.Hu,F[1].call(F[0]))){case 3:IZ=[B=A._GetAutoObject(A.Device.Device),B.Awi,
B.AyR];break;case 2:IZ=[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyS];break;case
4:case 5:IZ=[B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoB];break;default:;}if(
!!IZ)switch((F=this.Dj.Kp.VV,F[1].call(F[0]))){case 1:IZ[2].call(IZ[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IZ[2].call(IZ[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).Bah(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjO(),this.Dp.AjQ());},Ap7:function(G){A.
_GetAutoObject(C.A8).FB();},Bw$:function(s){this.Ap7(s);},AAC:function(G){A._GetAutoObject(
C.A8).Cd(49);},Ahs:function(E){if(this.M8===E)return;this.M8=E;A.abo([this,this.
Ans,this.Ahs],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).Am7())this.
C$.Z(true);else this.C$.Z(false);if(A._GetAutoObject(A.Device.Helper).A7H())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LX){this.Dp.Z(false);this.Cc.T(A.aaR(A.
acf.ACM));this.Cc.AFb(A.aaL(A.ach.Afe));}else{this.Dp.Z(true);this.Cc.T(A.aaR(A.
acf.Ak6));this.Cc.AFb(null);}},AAH:function(G){A._GetAutoObject(A.Device.Helper).
AVL(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LX);},Bfe:function(G){A.pe([this,this.Bg_],this);},Be_:function(G){A.pe([this
,this.Bg_],this);},Bg_:function(G){var F,Ct,Tf;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahv(A._GetAutoObject(A.Device.Helper
).AhW(A._GetAutoObject(A.Device.Helper).Abr((F=this.B0.Q,F[1].call(F[0]))),(Ct=this.
Cn.Dm,Ct[1].call(Ct[0])),2,(Tf=this.B0.Q,Tf[1].call(Tf[0]))));break;case 2:this.
Ee.Ahv(A._GetAutoObject(A.Device.Helper).AhW(this.KM,(F=this.Cn.Dm,F[1].call(F[0
])),2,(Ct=this.B0.Q,Ct[1].call(Ct[0]))));break;default:;}},ApJ:function(G){var F;
var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id
){case 22:case 21:switch((F=this.Dj.H1.Hu,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JL(this.Dj);break;case 0:this.JL(this.Dp);break;case 1:this.JL(this.
Cc);break;default:throw new Error(Ayx+(F=this.Dj.H1.Hu,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JL(this.Dj);this.JL(this.Dp);}break;case 25:case 42:{this.
JL(this.Dj);this.JL(this.Cc);}break;case 41:break;default:A.ab5("%s%e",Atd,As.Id
);}},ApK:function(G){var F;C.H0.ApK.call(this,G);var AoY=0;switch((F=this.B0.Q,F[
1].call(F[0]))){case 0:case 2:AoY=A._GetAutoObject(A.Device.Device).AdT;break;case
1:AoY=730;break;default:A.ab5("%s%e",Alf,(F=this.B0.Q,F[1].call(F[0])));}(F=this.
Cn.Dm,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmK(AoY)));(F=this.C$.Q,F[2].call(F[0],this.C$.AnZ));this.Ee.Ahv(A._GetAutoObject(
A.Device.Helper).W.AhW(1));},Ae4:function(E){if(this.LX===E)return;this.LX=E;A.abo([
this,this.Awl,this.Ae4],0);},At_:function(G){var F,Ct,Tf;this.Ae4(((F=this.Cc.Q,
F[1].call(F[0]))===(Ct=this.Dp.Q,Ct[1].call(Ct[0])))&&!!(Tf=this.Cc.Q,Tf[1].call(
Tf[0])));A.pe([this,this.GH],this);},Ans:function(){return this.M8;},Awl:function(
){return this.LX;},_Init:function(aArg){C.H0._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Av5._Init.call(this.Cc={I:this},0);C.Rb._Init.call(this.Dp={I:this}
,0);C.AGP._Init.call(this.Dj={I:this},0);C.SS._Init.call(this.Cn={I:this},0);C.AkV.
_Init.call(this.Ee={I:this},0);C.BX._Init.call(this.G7={I:this},0);C.BX._Init.call(
this.Lk={I:this},0);this.__proto__=C.Aru;var B;this.Dr(C.ADn);this.CH.H(AcR);this.
Cc.H(Aop);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArO(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asy));this.Cc.ArP(A.aaR(A.acf.Akn));this.
Dp.H(Aop);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Ul));this.Dp.Ar4(false);this.Dj.
H(AYy);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.GN));this.Dj.Bx(0);this.Cn.H(AcR);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFO(true);this.Ee.H(AcR);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M8));this.Ee.Ga(1000);this.Ee.EV(999000);this.
G7.H(AcR);this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Ars));this.Lk.H(AcR);this.Lk.Aj(
true);this.Lk.T(A.aaR(A.acf.AgK));this.J(this.Cc,-3);this.J(this.Dp,-3);this.J(this.
Dj,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G7,-1);this.J(this.Lk,-
1);this.EaseOfDelivery.L2(A._GetAutoObject(A.Device.Helper).W);this.BirthType.L2(
A._GetAutoObject(A.Device.Helper).W);this.Cc.AR=[this,this.AcT];this.Cc.L1([this
,this.AcT]);this.Cc.L4(A.aaL(A.ach.Afe));this.Cc.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArC,B.PW]);this.Cc.OQ([B=A._GetAutoObject(A.Device.Device),B.Un,B.U5
]);this.Cc.PU([B=A._GetAutoObject(A.Device.Device),B.Uo,B.U6]);this.Cc.Uq([B=A._GetAutoObject(
A.Device.Device),B.Anr,B.AoA]);this.Cc.Ae4([this,this.Awl,this.Ae4]);this.Dp.Gs([
this,this.D_,this.GS]);this.Dp.L1([this,this.AcT]);this.Dp.L4(A.aaL(A.ach.Afe));
this.Dp.Us([B=this.Gender.Animal,B.WD,B.JY]);this.Dp.OQ([B=A._GetAutoObject(A.Device.
Device),B.Un,B.U5]);this.Dp.PU([B=A._GetAutoObject(A.Device.Device),B.Uo,B.U6]);
this.Dp.Uq([B=A._GetAutoObject(A.Device.Device),B.Anr,B.AoA]);this.Dp.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Anv,B.Nk]);this.Dp.Anx([B=this.AnimalType.Animal,B.PT,B.EC]
);this.Dj.Gs([this,this.D_,this.GS]);this.Dj.L1([B=this.Dj,B.FV]);this.Dj.L4(A.aaL(
A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SK]);this.
Dj.A9U(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gs([this,this.D_,this.GS]);this.
Cn.L1([B=this.Cn,B.FV]);this.Cn.L4(A.aaL(A.ach.Edit));this.Cn.Ab7([B=A._GetAutoObject(
A.Device.Helper).W,B.Awf,B.Q6]);this.Ee.Au([this,this.Ans,this.Ahs]);this.G7.Au([
B=this.BirthType,B.B$,B.Cb]);this.G7.CK(this.BirthType);this.Lk.Au([B=this.EaseOfDelivery
,B.B$,B.Cb]);this.Lk.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.H0;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cc._Done(
);this.Dp._Done();this.Dj._Done();this.Cn._Done();this.Ee._Done();this.G7._Done(
);this.Lk._Done();C.H0._Done.call(this);},_ReInit:function(){C.H0._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cc._ReInit();this.
Dp._ReInit();this.Dj._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G7._ReInit(
);this.Lk._ReInit();this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArO(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asy));this.Cc.ArP(A.aaR(A.acf.Akn));this.Dp.T(
A.aaR(A.acf.Ul));this.Dj.T(A.aaR(A.acf.GN));this.Cn.T(A.aaR(A.acf.Aeg));this.Ee.
T(A.aaR(A.acf.M8));this.G7.T(A.aaR(A.acf.Ars));this.Lk.T(A.aaR(A.acf.AgK));},_Mark:
function(D){var B;C.H0._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHn={H9:null,AhN:null,AgV:null,AhO:null,AgW:null,AnimalType:null,Background:
null,N1:null,Rl:null,V:null,TY:null,YE:null,AbD:null,PR:null,DK:A.jV,AGR:true,CQ:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An9();this.
AxY();},An9:function(){var F,Ct;var LF=0;var Ami=0;var AlH=0;var Ie=0;if((((!!this.
AhN&&!!this.AhO)&&!!this.AgV)&&!!this.AgW)&&!!this.AnimalType){Ami=(F=this.AhN,F[
1].call(F[0]));AlH=(F=this.AgV,F[1].call(F[0]));LF=A._GetAutoObject(A.Device.Helper
).Mb((F=this.AhO,F[1].call(F[0])),(Ct=this.AgW,Ct[1].call(Ct[0])));Ie=(F=this.AnimalType
,F[1].call(F[0]));}var K_=A.jb.Text;var Azh=A.jb.CU;if(!!LF){var ALG=A._GetAutoObject(
A.acj.DU).AlB(LF,Ami,AlH);Azh=A._GetAutoObject(A.acj.DU).AzW(ALG,Ie);K_=A._GetAutoObject(
A.acj.DU).AzY(ALG,Ie);}this.Background.L(Azh);this.TY.L(K_);this.Rl.L(K_);this.N1.
L(K_);this.AbD.L(K_);if(K_===A.jb.Bm)this.YE.L(K_);else this.YE.L(A.jb.CJ);this.
V.L(K_);this.PR.L(K_);},AxY:function(){var F,Ct;var LF=0;var Ami=0;var AlH=0;if(((
!!this.AhN&&!!this.AhO)&&!!this.AgV)&&!!this.AgW){Ami=(F=this.AhN,F[1].call(F[0]
));AlH=(F=this.AgV,F[1].call(F[0]));LF=A._GetAutoObject(A.Device.Helper).Mb((F=this.
AhO,F[1].call(F[0])),(Ct=this.AgW,Ct[1].call(Ct[0])));}if(!!LF){var ALG=A._GetAutoObject(
A.acj.DU).AlB(LF,Ami,AlH);this.Rl.R(A._GetAutoObject(A.Device.Converter).S_(ALG,
2,true));this.N1.Z(true);this.Rl.Z(true);this.PR.Z(false);}else{this.N1.Z(false);
this.Rl.Z(false);this.PR.Z(true);}this.TY.R(this.BzL(AlH-Ami,LF));this.AbD.Z(this.
AGR);this.YE.Z(this.AGR);this.N1.R(A._GetAutoObject(A.acj.DU).Aaw());},BzL:function(
A1y,Ah8){var B;if(Ah8<0){A.ab5("%s",AYz);return A.jV;}var Iw=(AYA+A._GetAutoObject(
A.acj.DU).Af4())+CR;var FW=A._GetAutoObject(A.Device.Converter).Ak$(A1y);if(!A1y
)FW=A.abU(FW,AYB,0);else if(A1y>0)FW=A.abU(FW,AIk,0);Iw=this.Bgo(Iw,AYC,FW);if(Ah8===
1)Iw=Iw+A.aaR(A.acf.BjU);else{Iw=Iw+A.aaR(A.acf.BjV);Iw=this.Bgo(Iw,AYD,Ah8.toFixed(
));}return Iw;},Bgo:function(aString,BcC,Bx$){if(aString===A.jV){A.ab5("%s",AYE);
return A.jV;}var A3h=aString.indexOf(BcC,0);if(A3h>=0){aString=A.ab1(aString,A3h
,BcC.length);aString=A.abU(aString,Bx$,A3h);}return aString;},ATQ:function(E){if(
A.aaZ(this.AhN,E))return;if(!!this.AhN)A.z$([this,this.C5],this.AhN,0);this.AhN=
E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},BmI:function(
E){if(A.aaZ(this.AgV,E))return;if(!!this.AgV)A.z$([this,this.C5],this.AgV,0);this.
AgV=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},ATR:function(
E){if(A.aaZ(this.AhO,E))return;if(!!this.AhO)A.z$([this,this.C5],this.AhO,0);this.
AhO=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},BmJ:function(
E){if(A.aaZ(this.AgW,E))return;if(!!this.AgW)A.z$([this,this.C5],this.AgW,0);this.
AgW=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},C5:function(
G){this.Am();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_R:function(
E){if(this.AGR===E)return;this.AGR=E;this.Am();},EC:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C5],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.N1={I:this},0);A.acg.Text._Init.call(this.Rl={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.TY={I:this},0);A.acg.
Ap._Init.call(this.YE={I:this},0);A.acg.Ap._Init.call(this.AbD={I:this},0);C.CG.
_Init.call(this.PR={I:this},0);this.__proto__=C.AHn;this.H(AfE);this.Background.
A0(0x3F);this.Background.H(AfE);this.N1.H(AYF);this.N1.R(A._GetAutoObject(A.acj.
DU).Aaw());this.N1.A6(0x9);this.N1.L(A.jb.Text);this.Rl.H(AYG);this.Rl.A6(0x14);
this.Rl.R(A.aaR(A.acu.Akl));this.Rl.L(A.jb.Text);this.V.A0(0x1D);this.V.H(AYH);this.
V.R(A.aaR(A.acf.AuE));this.V.A6(0x12);this.V.L(A.jb.Text);this.TY.H(Aag);this.YE.
A0(0x14);this.YE.H(AIl);this.YE.Cv(1);this.AbD.A0(0x14);this.AbD.H(AIl);this.AbD.
Cv(0);this.PR.H(AYI);this.PR.R(A.aaR(A.acf.A49));this.J(this.Background,0);this.
J(this.N1,0);this.J(this.Rl,0);this.J(this.V,0);this.J(this.TY,0);this.J(this.YE
,0);this.J(this.AbD,0);this.J(this.PR,0);this.N1.S(A.aaL(A.fl.EK));this.N1.AZ(A.
aaL(A.fl.Af));this.N1.Cr(A.aaL(A.fl.HJ));this.Rl.S(A.aaL(A.fl.Aet));this.V.S(A.aaL(
A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.fl.Bh));this.TY.S(A.aaL(A.
fl.Af));this.TY.AZ(A.aaL(A.fl.Ak));this.TY.Cr(A.aaL(A.fl.Bh));this.YE.Ax(A.aaL(A.
ach.ABW));this.AbD.Ax(A.aaL(A.ach.ABW));this.H9=A._NewObject(A.Device.Rating,0);
this.PR.S(A.aaL(A.fl.Af));this.PR.AZ(A.aaL(A.fl.Ak));this.PR.Cr(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.N1._Done(
);this.Rl._Done();this.V._Done();this.TY._Done();this.YE._Done();this.AbD._Done(
);this.PR._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.N1._ReInit();this.Rl._ReInit();this.V.
_ReInit();this.TY._ReInit();this.YE._ReInit();this.AbD._ReInit();this.PR._ReInit(
);this.Rl.R(A.aaR(A.acu.Akl));this.V.R(A.aaR(A.acf.AuE));this.PR.R(A.aaR(A.acf.A49
));this.N1.S(A.aaL(A.fl.EK));this.N1.AZ(A.aaL(A.fl.Af));this.N1.Cr(A.aaL(A.fl.HJ
));this.Rl.S(A.aaL(A.fl.Aet));this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));
this.V.Cr(A.aaL(A.fl.Bh));this.TY.S(A.aaL(A.fl.Af));this.TY.AZ(A.aaL(A.fl.Ak));this.
TY.Cr(A.aaL(A.fl.Bh));this.PR.S(A.aaL(A.fl.Af));this.PR.AZ(A.aaL(A.fl.Ak));this.
PR.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhN)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgW)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AV3={Animal:null,Rating:null,Cq:null,AD:null,AY:
0,Hm:function(G){var B;if(!this.Animal||!this.Rating)return;var Gg=this.AD.G6;var
CA=(C.AHn.isPrototypeOf(B=this.AD.Cj)?B:null);if(!CA)return;CA.EC([B=this.Animal
,B.PT,B.EC]);CA.BmI([B=A._GetAutoObject(A.Device.Device),B.AES,B.AI5]);CA.BmJ([B=
this.Rating,B.A9y,B.OnSetTimestamp]);switch(Gg%this.AY){case 1:{CA.ATQ([B=this.Animal
,B.A89,B.AFu]);CA.ATR([B=this.Animal,B.A9z,B.AFY]);CA.T(A.aaR(A.acf.AuE));}break;
default:if(this.Animal.Arh()){CA.ATQ([B=this.Animal,B.ASK,B.AwM]);CA.ATR([B=this.
Animal,B.AS1,B.Axc]);CA.T(A.aaR(A.acf.AL4));}else{CA.ATQ([B=this.Animal,B.ASK,B.
AwM]);CA.ATR([B=this.Animal,B.AS1,B.Axc]);CA.T(A.aaR(A.acf.Bhq));}}if(this.AY>1)
CA.A_R(true);else CA.A_R(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GO
]));},DE:function(G){if(this.AY>0)switch(this.Cq.CP){case 6:this.CE(this);break;
case 7:this.Ca(this);break;default:this.Cq.NM=true;}},L2:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.JB(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.JB(1);else{this.JB(2);this.AD.GT(1);this.
AD.HI(this.AD.Gt,true,null,null);}if(this.AY>0)this.AD.AbF(0,this.AY-1);},AkE:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbF(0,this.AY-1);
},CE:function(G){if(this.AD.Gt>0)this.AD.GT(this.AD.Gt-1);else this.AD.GT(this.AY-
1);this.AD.HI(this.AD.Gt,true,null,null);},Ca:function(G){if(this.AD.Gt<(this.AY-
1))this.AD.GT(this.AD.Gt+1);else this.AD.GT(0);this.AD.HI(this.AD.Gt,true,null,null
);},JB:function(E){if(this.AY===E)return;this.AY=E;this.AD.JB(this.AY);A.abo([this
,this.Arz,this.JB],0);},Arz:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BL._Init.call(this.Cq={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AV3;this.H(AfE);this.Cq.Filter=147;this.
AD.A0(0x3F);this.AD.H(AfE);this.AD.N4(C.AHn);this.AD.Ae8(160);this.AD.GT(0);this.
AD.JB(2);this.J(this.AD,0);this.Cq.BM=[this,this.DE];this.Cq.D1=[this,this.DE];this.
AD.Hm=[this,this.Hm];},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cq._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bl:function(aSize){C.Co.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((
Ae&0x20)===0x20);var GE=this.Bo.Bw;var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=
A.jb.CU;GY=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);}else
if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.LK=Hf;
this.KJ=Fw;this.Qv=GE;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(K1);this.V.H(BD);this.ZA(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeS={KN:null,GK:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KN.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KN.
L(this.V.AQ);},Init:function(aArg){},Ab3:function(E){if(this.GK===E)return;this.
GK=E;this.KN.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CG._Init.call(
this.KN={I:this},0);this.__proto__=C.AeS;this.H(K1);this.Background.H(K1);this.V.
H(AcN);this.V.R(Ly);this.KN.H(IX);this.KN.R(AYJ);this.J(this.KN,0);this.V.S(A.aaL(
A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(null);this.KN.S(A.aaL(A.fl.Af));this.
KN.AZ(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KN._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.KN.S(A.aaL(
A.fl.Af));this.KN.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Av5={ACo:null,Q:null,A2:null,AF:null,Il:null,LX:null,Ap:null,EM:null,AOf:A.jV
,AOg:A.jV,Bl:function(aSize){C.AeS.Bl.call(this,aSize);if(!this.ACo)this.KN.H([].
concat(0,this.KN.M.slice(1,4)));else this.KN.H([].concat(this.Ap.M[2],this.KN.M.
slice(1,4)));},Ai:function(Ae){var F,Ct,Tf;C.AeS.Ai.call(this,Ae);var Bc7=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apj)this.Ab3(this.AOf);else
this.Ab3(this.AOg);}else{this.Ab3(A._GetAutoObject(A.Device.Converter).Rj((F=this.
Q,F[1].call(F[0]))));if((((!!this.Il&&!!this.A2)&&!!this.AF)&&!!this.LX)&&(((F=this.
Il,F[1].call(F[0]))===1)||(!(Ct=this.Il,Ct[1].call(Ct[0]))&&(Tf=this.LX,Tf[1].call(
Tf[0])))))Bc7=true;}}this.EM.Z(Bc7);this.Ap.L(this.V.AQ);A.pe([this,this.Agc],this
);},C5:function(G){this.Am();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)
A.pe([this,this.C5],this);},AFb:function(E){if(this.ACo===E)return;this.ACo=E;this.
Ap.Ax(E);this.Bj1();},OQ:function(E){if(A.aaZ(this.A2,E))return;if(!!this.A2)A.z$([
this,this.AaG],this.A2,0);this.A2=E;if(!!E)A.zX([this,this.AaG],E,0);if(!!E)A.pe([
this,this.AaG],this);},PU:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaI],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaI],E,0);if(!!E)
A.pe([this,this.AaI],this);},AaI:function(G){this.Am();},AaG:function(G){this.Am(
);},Uq:function(E){if(A.aaZ(this.Il,E))return;if(!!this.Il)A.z$([this,this.Al2],
this.Il,0);this.Il=E;if(!!E)A.zX([this,this.Al2],E,0);if(!!E)A.pe([this,this.Al2
],this);},Al2:function(G){this.Am();},Agc:function(G){var F,Ct;if((!this.Il||!this.
A2)||!this.AF)return;var A20=this.KN.Afh([(this.KN.String.length-(F=this.AF,F[1].
call(F[0])))-(Ct=this.A2,Ct[1].call(Ct[0])),0]);var A4k=this.KN.Afh([this.KN.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABn=this.KN.Dd(0x0);this.EM.H([A20[0]-
1,ABn[1],A4k[0]+1,ABn[3]]);},ArO:function(E){if(this.AOf===E)return;this.AOf=E;this.
Am();},ArP:function(E){if(this.AOg===E)return;this.AOg=E;this.Am();},Ae4:function(
E){if(A.aaZ(this.LX,E))return;if(!!this.LX)A.z$([this,this.A3I],this.LX,0);this.
LX=E;if(!!E)A.zX([this,this.A3I],E,0);if(!!E)A.pe([this,this.A3I],this);},A3I:function(
G){this.Am();},_Init:function(aArg){C.AeS._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BW._Init.call(this.EM={I:this},0);this.__proto__=C.Av5;
this.Ap.H(AhY);this.EM.H(AYK);this.EM.Nn(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KN.Q7([this,this.Agc]);},_Done:function(){this.__proto__=
C.AeS;this.Ap._Done();this.EM._Done();C.AeS._Done.call(this);},_ReInit:function(
){C.AeS._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeS._Mark.call(this,D);if((B=this.ACo)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Il)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ij:0,AaF:4,Beb:false,Bej:true,Bei:false,Bdc:true,Bea:false
,Al7:function(G){C.Ra.Al7.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bd$(
)){this.Ij=A._GetAutoObject(A.Device.Helper).UD.Id;var AiA=A._GetAutoObject(A.Device.
Helper).ARt(this.Ij);if(AiA)A._GetAutoObject(A.Device.Device).A3(107,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.A3M]);else{this.AaF=A._GetAutoObject(
A.Device.Helper).ARu(this.Ij);var BeG=false;if((this.AaF===3)||(this.AaF===2))BeG=
A._GetAutoObject(A.Device.Helper).A7I(this.Ij,A._GetAutoObject(A.Device.Helper).
W);if(BeG)A._GetAutoObject(A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Ij),0,null);else switch(this.AaF){case 2:{var BN=A._GetAutoObject(
A.Device.Converter).AxW(this.Ij);A._GetAutoObject(A.Device.Device).A3(46,true,BN.
toFixed(),0,[this,this.A3M]);}break;case 3:case 1:case 0:case 4:this.A4A();break;
default:throw new Error(AIm+this.AaF.toFixed());}}}},Ew:function(G){A._GetAutoObject(
C.A8).FB();},AI6:function(s){this.Ew(s);},A4A:function(){if((this.AaF===3)||(this.
AaF===2)){if((this.Bdc&&(A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(
A.Device.Helper).W.NaisId!==this.Ij)){A._GetAutoObject(A.Device.Device).A3(69,true
,A.jV,0,[this,this.A3M]);return;}else this.BCh();}if(this.Beb)A._GetAutoObject(A.
Device.Helper).Bo1(this.Ij);A._GetAutoObject(A.Device.Helper).W.PW(this.Ij);this.
Bea=true;this.BCj();this.Ew(this);},A3M:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A4A();break;case 107:switch(As.PopupState){case 7:{this.Beb=true;this.A4A();}break;
case 8:this.Ew(this);break;default:;}break;case 69:if(As.PopupState===4)this.Ew(
this);break;default:A.ab5("%s%e",AIn,As.Id);}},BCh:function(){A._GetAutoObject(A.
Device.Helper).W.Nk(this.Ij);if(this.Bei&&(A._GetAutoObject(A.Device.Converter).
S3(this.Ij)===10)){var BcR=Math.trunc((this.Ij%1000000000000)/10000000000);if(!BcR&&(
A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(A.Device.Helper
).W.EC(0);else if((BcR===1)&&(A._GetAutoObject(A.Device.Helper).W.AnimalType!==2
))A._GetAutoObject(A.Device.Helper).W.EC(2);}},BCj:function(){if(this.Bej){A._GetAutoObject(
A.Device.Helper).W.SK(A._GetAutoObject(A.Device.Helper).A5p(A._GetAutoObject(A.Device.
Device).Ak5,A._GetAutoObject(A.Device.Helper).W));if(A._GetAutoObject(A.Device.Device
).Ak5===1)A._GetAutoObject(A.Device.Helper).Bai();}},_Init:function(aArg){C.Ra._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Z(true);this.Dr(C.IM
);this.Number.R(A.aaR(A.acf.OV));this.Jj.H(AYL);this.IV.H(UY);this.AkG(1);this.N.
CE=[this,this.AI6];this.N.C2(A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.
call(this);this.Number.R(A.aaR(A.acf.OV));},_className:"Application::SetTransponderScreen"
};C.ADz={Go:null,Lo:null,Kw:null,CQ:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EB.Ai.call(this,Ae);this.Lo.R(A._GetAutoObject(A.acj.DU
).Af4());this.Kw.R(A._GetAutoObject(A.acj.DU).Aaw());},_Init:function(aArg){C.EB.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Go={I:this},0);A.acg.Text._Init.
call(this.Lo={I:this},0);A.acg.Text._Init.call(this.Kw={I:this},0);this.__proto__=
C.ADz;this.Background.L(A.jb.Text);this.Go.H(AYM);this.Go.A6(0x11);this.Go.R(A.aaR(
A.acf.Date));this.Go.L(A.jb.Bm);this.Lo.H(AYN);this.Lo.A6(0x11);this.Lo.L(A.jb.Bm
);this.Kw.H(AYO);this.Kw.L(A.jb.Bm);this.J(this.Go,0);this.J(this.Lo,0);this.J(this.
Kw,0);this.Go.S(A.aaL(A.fl.Af));this.Lo.S(A.aaL(A.fl.Af));this.Kw.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EB;this.Go._Done();this.Lo.
_Done();this.Kw._Done();C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.
call(this);this.Go._ReInit();this.Lo._ReInit();this.Kw._ReInit();this.Go.R(A.aaR(
A.acf.Date));this.Go.S(A.aaL(A.fl.Af));this.Lo.S(A.aaL(A.fl.Af));this.Kw.S(A.aaL(
A.fl.Af));this.CQ();},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.
Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHr={Mo:null,Hq:null,Ib:null,AP:null,A$:null,FW:0,Ie:0,AiO:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mo.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ib.H(this.Mo.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiO){this.Ib.R(Rp);this.Ib.L(A.jb.
Text);this.Mo.L(this.Background.AQ);}else{this.Ib.R(A._GetAutoObject(A.Device.Converter
).S_(this.FW,2,true));this.Ib.L(A._GetAutoObject(A.acj.DU).AzY(this.FW,this.Ie));
this.Mo.L(A._GetAutoObject(A.acj.DU).AzW(this.FW,this.Ie));}this.Hq.L(this.V.AQ);
},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var AlE=this.AX.Hv(
Ad,6);var Ama=this.AX.CF(Ad,8);if(this.Hs>0){var Bzi=this.AX.Hv(this.Hs-1,6);var
BBY=this.AX.CF(this.Hs-1,8);var LF=A._GetAutoObject(A.Device.Helper).Mb(Bzi,AlE);
if(!!LF){this.AiO=false;this.FW=A._GetAutoObject(A.acj.DU).AlB(LF,BBY,Ama);}else{
this.AiO=true;this.FW=0;}}else{this.AiO=true;this.FW=0;}this.T(A._GetAutoObject(
A.acj.KO).AC1(AlE));this.Hq.R(A._GetAutoObject(A.Device.Converter).Ak$(Ama));this.
Ie=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mo={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.Ib={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AHr;this.V.H(O8);this.Mo.H(Atg);this.Hq.H(AIo);this.Hq.A6(0x12);this.Hq.R(Ro);
this.Hq.L(A.jb.Text);this.Ib.H(AIp);this.Ib.R(Ro);this.Ib.L(A.jb.Text);this.AP.H(
Aos);this.AP.L(A.jb.Bc);this.A$.H(Aot);this.A$.L(A.jb.Bc);this.J(this.Mo,0);this.
J(this.Hq,0);this.J(this.Ib,0);this.J(this.AP,0);this.J(this.A$,0);this.Hq.S(A.aaL(
A.fl.Af));this.Ib.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mo._Done();this.Hq._Done();this.Ib._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mo._ReInit(
);this.Hq._ReInit();this.Ib._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.Ib.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,V5:null,AhU:null,S1:null
,KQ:A.jV,CQ:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LF=
A._GetAutoObject(A.Device.Helper).Mb(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LF){var FW=A._GetAutoObject(
A.acj.DU).AlB(LF,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdO=A.aaR(A.acf.BhM);AdO=A._GetAutoObject(
A.Device.Helper).MI(AdO,O9,A._GetAutoObject(A.Device.Converter).S_(FW,2,true));AdO=
A._GetAutoObject(A.Device.Helper).MI(AdO,Ayg,A._GetAutoObject(A.acj.DU).Aaw());this.
S1.R(AdO);this.AhU.L(A._GetAutoObject(A.acj.DU).AzW(FW,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.S1.L(A._GetAutoObject(A.acj.DU).AzY(FW,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.S1.R(A.aaR(A.acf.AV1));this.AhU.L(A.jb.
ARf);this.S1.L(A.jb.Text);}},CC:function(G){var Fy=A._NewObject(A.Device.Filter,
0);var HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CX(HX);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fy.CX(Ac_);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fy);this.AxC(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},AxC:function(G){this.Bg=A._NewObject(C.Gc,0);this.Bg.N4(C.AHr);this.Bg.H(Ays
);this.Bg.Zt(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dl(this.KQ);this.J(this.
Bg,0);this.Bb(this.Bg);},Anq:function(G){A._GetAutoObject(C.A8).FB();},Dl:function(
E){if(this.KQ===E)return;this.KQ=E;if(!!this.Bg)this.Bg.Dl(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADz._Init.call(this.V5={I:this},0);A.acg.AL._Init.
call(this.AhU={I:this},0);A.acg.Text._Init.call(this.S1={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Ce);this.N.Z(true);this.Dr(C.IM);this.V5.H(
Qd);this.KQ=A.aaR(A.acf.Akm);this.AhU.A0(0x1D);this.AhU.H(IX);this.S1.A0(0x1D);this.
S1.H(IX);this.S1.A6(0x12);this.S1.R(Ro);this.J(this.V5,0);this.J(this.AhU,0);this.
J(this.S1,0);this.N.CE=[this,this.Anq];this.N.C2(A.aaL(A.ach.E2));this.S1.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V5._Done();this.AhU._Done(
);this.S1._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V5._ReInit();this.AhU._ReInit();this.S1._ReInit();this.Dl(A.aaR(A.acf.Akm
));this.S1.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S1
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mk={DP:null,Acz:null,ARU:11,EN:0,A5n:true,AB3:false,I3:function(G){if(A._GetAutoObject(
A.Device.Device).An.B_()>0)this.E5(4);else A._GetAutoObject(A.Device.Device).A3(
30,true,A.jV,0,null);},CC:function(G){if(this.DP.Az8())this.DP.Ac9();else if((this.
EN===2)&&A._GetAutoObject(A.Device.Helper).W.Aq0())this.E5(5);else this.E5(1);},
E4:function(G){if(this.EN===1)this.E5(0);},Ew:function(G){this.E5(0);A._GetAutoObject(
C.A8).FB();},BCz:function(){A._GetAutoObject(A.Device.Device).AhM();},A4G:function(
){A._GetAutoObject(A.Device.Device).An1();},A9X:function(E){if(this.AB3===E)return;
this.AB3=E;A.abo([this,this.Bk7,this.A9X],0);},E5:function(E){var B;if(this.EN===
E)return;this.EN=E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkQ();A.zX([
this,this.AKH],[B=A._GetAutoObject(A.Device.Helper),B.ArA,B.AkF],0);A.z$([this,this.
AAz],[B=this.DP,B.SF,B.E5],0);this.BCz();}break;case 3:{A.z$([this,this.AKH],[B=
A._GetAutoObject(A.Device.Helper),B.ArA,B.AkF],0);this.A4G();this.BAu();}break;case
2:{A._GetAutoObject(A.Device.Helper).Ast();if(!A._GetAutoObject(A.Device.Device).
AutoRegistrationMode&&this.A5n)this.BCk();else this.BCn();}break;case 4:{A.z$([this
,this.AKH],[B=A._GetAutoObject(A.Device.Helper),B.ArA,B.AkF],0);this.A4G();A._GetAutoObject(
A.Device.Helper).Ast();A.zX([this,this.Bfp],[B=A._GetAutoObject(A.Device.Device)
,B.Awq,B.AyW],0);A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(this.ARU);}
break;case 5:this.BgK();break;case 6:{A.zX([this,this.AAz],[B=this.DP,B.SF,B.E5]
,0);this.DP.Ac9();}break;case 0:{A.z$([this,this.AKH],[B=A._GetAutoObject(A.Device.
Helper),B.ArA,B.AkF],0);this.A4G();}break;default:throw new Error(Ayy);}A.abo([this
,this.SF,this.BwZ],0);},BwZ:function(Aq){this.E5(Aq);},AKH:function(G){if(!!A._GetAutoObject(
A.Device.Helper).UD){if(this.EN===1)this.E5(3);else A.ab5("%s%e",AYP,this.EN);}else
A.ab5("%s",AIq);},BCk:function(){A._GetAutoObject(A.Device.Device).A3(13,true,A.
_GetAutoObject(A.Device.Helper).Ak7(A._GetAutoObject(A.Device.Helper).UD.Id).toFixed(
),0,[this,this.BAJ]);},BAJ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&((As.PopupState===4)||(As.PopupState===3))){if(this.Bdg(false
))A._GetAutoObject(C.A8).Cd(31);else{A._GetAutoObject(A.Device.Helper).AkQ();this.
E5(1);}}else if(!!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkQ(
);this.E5(1);}},Bdg:function(Ai1){if(A._GetAutoObject(A.Device.Device).An.Lj()){
A._GetAutoObject(A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).An.
HK().toFixed(),0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gr();A.
_GetAutoObject(A.Device.Helper).Aqk(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(
A.Device.Helper).W.PW(A._GetAutoObject(A.Device.Helper).UD.Id);if(!!A._GetAutoObject(
A.Device.Helper).AhI){var AlO=A._GetAutoObject(A.Device.Helper).AhI.AO0();A._GetAutoObject(
A.Device.Helper).W.Ab4(AlO);A._GetAutoObject(A.Device.Helper).W.AnE(AlO);}if(A._GetAutoObject(
A.Device.Helper).ARu(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nk(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SK(A._GetAutoObject(A.Device.Helper).BhB(A._GetAutoObject(A.Device.
Device).AgA,A._GetAutoObject(A.Device.Helper).W));if(Ai1){A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var L$=A._GetAutoObject(A.Device.
Device).An.LV(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SR(L$);if(A._GetAutoObject(A.Device.Helper).Am7()){if(A._GetAutoObject(A.
Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gr();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abr(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).AgA)A._GetAutoObject(
A.Device.Helper).Bai();}return true;},BAu:function(){if(!!A._GetAutoObject(A.Device.
Helper).UD){var AJx=true;if(A._GetAutoObject(A.Device.Helper).UD.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJx=A._GetAutoObject(A.Device.Helper).A7U(A._GetAutoObject(
A.Device.Helper).UD.Id);if(!AJx&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bdg(true);AJx=A._GetAutoObject(A.Device.Helper).A7U(A._GetAutoObject(A.
Device.Helper).UD.Id);}}if(AJx)this.E5(5);else this.E5(2);}else{A.ab5("%s",AIq);
return;}},Bfp:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARU){A.z$([this,this.Bfp],[B=A._GetAutoObject(A.Device.Device),B.Awq,B.AyW
],0);if(A._GetAutoObject(A.Device.Helper).W.Aq0())this.E5(5);else this.E5(1);}},
BgK:function(){if(this.AB3===true)this.E5(6);else A._GetAutoObject(C.A8).Cd(24);
},BCn:function(){A._GetAutoObject(A.Device.Device).A3(36,true,A.jV,0,[this,this.
BBD]);},BBD:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkQ();this.E5(1);}},AAz:function(G){if(!this.DP.EN)this.E5(1);},A3A:function(G
){},Bw9:function(s){this.A3A(s);},Bk7:function(){return this.AB3;},SF:function(){
return this.EN;},_Init:function(aArg){C.Ra._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acz={I:this},0);this.__proto__=C.Mk;this.N.Z(true);this.Dr(C.Aq1);this.
Number.H(AYQ);this.Number.R(A.aaR(A.acf.A$H));this.Jj.H(AYR);this.IV.H(AYS);this.
Acz.H(AYT);this.Acz.R(AYU);this.Acz.L(A.jb.Text);this.J(this.Acz,0);this.N.CE=[this
,this.Ew];this.N.Cf=[this,this.Bw9];this.N.C2(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Acz.S(A.aaL(A.fl.H3));this.DP=A._GetAutoObject(C.DP);},_Done:function(
){this.__proto__=C.Ra;this.Acz._Done();C.Ra._Done.call(this);},_ReInit:function(
){C.Ra._ReInit.call(this);this.Acz._ReInit();this.Number.R(A.aaR(A.acf.A$H));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ra._Mark.call(this,D);if((B=
this.DP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acz)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A5b={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Ape:-1,EN:0,Byx:function(){var Bgp=false;
var Oo=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.
Device.Device).Bt.HK().toFixed(),0,null);else if(Oo){Bgp=true;var B2=A._NewObject(
A.Device.Rating,0);B2.Gr();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axy(B2,5);B2.OnSetAppearance(3);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}else{var B2=A._NewObject(A.Device.Rating,0);B2.Gr();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axy(B2
,5);B2.OnSetAppearance(1);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(Bgp)A._GetAutoObject(A.Device.Helper).W.Uu(false);if(Oo)A.
_GetAutoObject(A.Device.Helper).W.AnW(false);else A._GetAutoObject(A.Device.Helper
).W.AnW(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A3(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MZ]);else A._GetAutoObject(A.Device.Device).A3(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);},Byz:function(){A._GetAutoObject(
A.Device.Helper).W.AGN(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A3(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);else A._GetAutoObject(
A.Device.Device).A3(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MZ]);},Qp:function(Eh){switch(Eh){case 4:this.Byx();break;case
128:A._GetAutoObject(C.A8).Cd(7);break;case 16:A._GetAutoObject(C.A8).Cd(36);break;
case 1:A._GetAutoObject(C.A8).Cd(10);break;case 2:A._GetAutoObject(C.A8).Cd(11);
break;case 8:this.Byz();break;case 64:A._GetAutoObject(C.A8).Cd(29);break;case 32:
A._GetAutoObject(C.A8).Cd(48);break;case 256:A._GetAutoObject(C.A8).Cd(21);break;
case 512:A._GetAutoObject(C.A8).Cd(30);break;case 1024:this.BAr();break;case 262144:
this.BCP();break;case 2048:this.Ac9();break;case 4096:this.Bc_(false);break;case
8192:this.Byy();break;case 16384:this.BAq();break;case 32768:this.ByY();break;case
524288:this.ByZ();break;case 65536:this.Bzm();break;case 131072:this.BCc();break;
case 0:break;default:throw new Error(AYV);}},Bdi:function(Eh,Bx5){var EQ=A._NewObject(
C.Wp,0);EQ.Ab2(false);EQ.Aj(true);EQ.AR=Bx5;EQ.Bmg(Eh);switch(Eh){case 1:{EQ.T(A.
aaR(A.acf.An2));EQ.DB(A.aaL(A.ach.ALU));}break;case 2:{EQ.T(A.aaR(A.acf.A$r));EQ.
DB(A.aaL(A.ach.ALV));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DB(A.aaL(A.ach.ALW
));EQ.AFK(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asf));EQ.DB(A.aaL(A.ach.ALX));EQ.
AFK(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMt));EQ.DB(A.aaL(A.ach.ALY));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DB(A.aaL(A.ach.ALZ));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DB(A.aaL(A.ach.AL0));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DB(A.aaL(A.ach.AL1));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DB(A._GetAutoObject(A.acj.DU).Bz1());}break;case 512:{EQ.T(A.aaR(A.acf.ASh));
EQ.DB(A.aaL(A.ach.ALM));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DB(A.aaL(A.ach.ALN));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DB(A.aaL(A.ach.ALT));}break;case 2048:{EQ.T(A.aaR(A.acf.TB));EQ.DB(A.aaL(A.ach.ALO
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DB(A.aaL(A.ach.ALP));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DB(A.aaL(A.ach.ALQ));EQ.AFK(true);}break;case
16384:{EQ.T(A.aaR(A.acf.BiY));EQ.DB(A.aaL(A.ach.ALR));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bpc));EQ.DB(A.aaL(A.ach.ALS));}break;default:A.ab5("%s",(AYW+Eh.toFixed(
))+AYX);}return EQ;},Bzz:function(){this.Ape=this.Ape+1;if(this.Ape>=this.AutoActions.
Na())this.E5(0);else this.E5(2);},BB2:function(){this.Ape=-1;},Az8:function(){return(
this.Ape>-1)&&!this.BAk();},BAk:function(){return this.Ape>=this.AutoActions.Na(
);},E5:function(E){if(this.EN===E)return;this.EN=E;switch(E){case 1:this.Bzz();break;
case 2:{var Tj=this.AutoActions.OI(this.Ape);if(this.A4_(A._GetAutoObject(A.Device.
Helper).W,Tj))this.Qp(Tj);else A._GetAutoObject(A.Device.Device).A3(64,true,(this.
ActionToString.Lx(Tj)+Ate)+this.AnimalTypeToString.Lx(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MZ]);}break;case 0:this.BB2();break;default:throw new
Error(Ayy);}A.abo([this,this.SF,this.E5],0);},MZ:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;if((As.Id===63)&&(As.PopupState===7))this.
Bc_(true);if((As.Id===32)&&(As.PopupState===7))A._GetAutoObject(C.A8).Cd(45);if((((
As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8))&&this.Az8())this.
E5(1);},Bda:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LV(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BAr:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A8).Cd(
45);else A._GetAutoObject(A.Device.Device).A3(32,true,A.jV,0,[this,this.MZ]);},Ac9:
function(){this.E5(1);},BB0:function(){var Oo=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oo&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device
).Bt.HK().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating,0);B2.Gr();
B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axy(B2,5);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uu(false);if(Oo)A._GetAutoObject(
A.Device.Helper).W.AnW(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);},BB1:function(){A._GetAutoObject(
A.Device.Helper).W.AGN(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);},Bc_:function(BzD){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(BzD===false))A._GetAutoObject(A.Device.
Device).A3(63,true,A.jV,0,[this,this.MZ]);else A._GetAutoObject(C.A8).Cd(54);},Byy:
function(){A._GetAutoObject(A.Device.Helper).W.ArX(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A3(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MZ]);else A._GetAutoObject(A.Device.Device).A3(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);},BAq:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A8).Cd(81);else A._GetAutoObject(A.
Device.Device).A3(69,true,A.jV,0,[this,this.MZ]);},ByY:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae5(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(65,true,A.jV,2000,[this,this.MZ
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae6(false);A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).A3(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MZ]);}}},Bzm:function(){A._GetAutoObject(A.Device.Helper).W.Ae5(false);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae5(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(65,true,A.jV,2000,[this,this.MZ
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A3(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MZ]);else A._GetAutoObject(A.Device.Device).A3(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);}},A4_:function(En,Eh
){var Qz=false;switch(Eh){case 32768:Qz=En.IsRegistrationNoticePending&&!!En.NaisIdMother;
break;case 524288:Qz=En.IsRegistrationNoticePending&&!En.NaisIdMother;break;case
4096:case 8192:switch(En.AnimalType){case 1:Qz=true;break;default:;}break;case 512:
switch(En.AnimalType){case 0:Qz=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qz=true;break;default:A.ab5("%s",AYY+
Eh.toFixed());}return Qz;},BCc:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A8).Cd(80);else A._GetAutoObject(A.Device.Device).A3(
69,true,A.jV,0,[this,this.MZ]);},BCP:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A3(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MZ]);else{A._GetAutoObject(A.
Device.Helper).W.PW(0);A._GetAutoObject(A.Device.Helper).W.SK(A._GetAutoObject(A.
Device.Helper).A5p(A._GetAutoObject(A.Device.Device).An7,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).A3(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MZ]);}},ByZ:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae6(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);}},SF:function(){return this.EN;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A5b;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AL6={R2:null,Aqm:null,E5:function(E){if(this.EN===E)return;C.Mk.E5.call(this
,E);switch(E){case 1:this.Dr(C.Aq1);break;case 5:case 6:this.Dr(C.IM);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayy);}},A3A:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mk._Init.call(this
,aArg);C.CG._Init.call(this.R2={I:this},0);C.AL7._Init.call(this.Aqm={I:this},0);
this.__proto__=C.AL6;this.A9X(true);this.R2.H(AYZ);this.R2.R(A.aaR(A.acf.TB));this.
R2.L(A.jb.Text);this.Aqm.H(AY0);this.J(this.R2,0);this.J(this.Aqm,0);this.N.Cw(A.
aaL(A.ach.AeD));this.R2.S(A.aaL(A.fl.Af));this.R2.AZ(A.aaL(A.fl.HJ));this.R2.Cr(
A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Mk;this.R2._Done();this.Aqm.
_Done();C.Mk._Done.call(this);},_ReInit:function(){C.Mk._ReInit.call(this);this.
R2._ReInit();this.Aqm._ReInit();this.R2.R(A.aaR(A.acf.TB));this.R2.S(A.aaL(A.fl.
Af));this.R2.AZ(A.aaL(A.fl.HJ));this.R2.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Mk._Mark.call(this,D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aqm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"
};C.ManualActionScanScreen={Ic:null,J6:null,A3A:function(G){if(this.Ic.NZ(2048))
A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(3);},_Init:function(aArg){C.Mk._Init.call(this,aArg);A.
acg.Text._Init.call(this.J6={I:this},0);this.__proto__=C.ManualActionScanScreen;
this.J6.H(AY1);this.J6.KU(true);this.J6.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+
CR)+A.aaR(A.acf.ABR));this.J6.L(A.jb.Text);this.J(this.J6,0);this.N.Cw(A.aaL(A.ach.
AeD));this.J6.S(A.aaL(A.fl.Af));this.Ic=A._GetAutoObject(C.Pn);},_Done:function(
){this.__proto__=C.Mk;this.J6._Done();C.Mk._Done.call(this);},_ReInit:function(){
C.Mk._ReInit.call(this);this.J6._ReInit();this.J6.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.ABR));this.J6.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Mk._Mark.call(this,D);if((B=this.Ic)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.J6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScanScreen"
};C.AL7={Y:null,Init:function(aArg){var B;A.zV([this,this.ABz],A._GetAutoObject(
C.AutoActions),0);A.zV([this,this.AuD],A._GetAutoObject(A.Device.Helper).W,0);A.
pe([this,this.ABz],this);A.pe([this,this.AuD],this);this.H(A.abK(this.M,AY2));this.
Y.H(A.abK(this.Y.M,A.abe([(B=this.M)[2]-B[0],B[3]-B[1]],AY3)));},BcZ:function(G){
var B;var AlC=0;var AzA=0;var Bde;var X=this.Y.Ah;var Cy=null;Bde=((((B=this.M)[
2]-B[0])-(A._GetAutoObject(C.AutoActions).Na()*58))/2)|0;while(!!X&&!((X.U&0x200
)===0x200)){Cy=(C.Wp.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!Cy){Cy.
H(A.abK(Cy.M,AY4));Cy.H(A.abM(Cy.M,(AzA*58)+Bde));Cy.H(A.abO(Cy.M,AlC*58));if(AzA>=
3){AlC=AlC+1;AzA=0;}else AzA=AzA+1;}X=X.Ah;}this.Bb(null);},A1Y:function(Eh){var
EQ=A._GetAutoObject(C.DP).Bdi(Eh,null);this.J(EQ,0);this.BcZ(this);},Ao5:function(
){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((
AdM.U&0x400)===0x400))this.HP(AdM);}},ABz:function(G){this.Ao5();var O;var CB=A.
_GetAutoObject(C.AutoActions).Na();for(O=0;O<CB;O=O+1){var Tj=A._GetAutoObject(C.
AutoActions).OI(O);this.A1Y(Tj);}A.pe([this,this.BcZ],this);A.pe([this,this.AuD]
,this);A.pe([this,this.BCZ],this);},AuD:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wp.isPrototypeOf(
X)?X:null);Aa.AFK(false);}X=X.Ah;}},BCZ:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wp.isPrototypeOf(
X)?X:null);var ByO=A._GetAutoObject(C.AutoActions).Na();if(!!Aa){var O;Aa.A9T(false
);for(O=0;O<ByO;O=O+1)if(Aa.Action===A._GetAutoObject(C.AutoActions).OI(O)){Aa.A9T(
true);Aa.Bnn(AY5+(O+1).toFixed());}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);this.__proto__=C.AL7;this.
Y.JX(0);this.J(this.Y,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.Y._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Y._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScreenGrid"
};C.DP={_Init:function(){C.A5b._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.APJ={Ln:null,T$:null,Init:function(aArg){
this.Ln.R(A._GetAutoObject(A.acj.Temperature).AlN());},_Init:function(aArg){C.De.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Ln={I:this},0);C.CG._Init.call(
this.T$={I:this},0);this.__proto__=C.APJ;this.Ln.H(AY6);this.Ln.A6(0x12);this.Ln.
L(A.jb.Text);this.T$.H(Aou);this.T$.R((A.aaR(A.acf.Ahn)+AIr)+A.aaR(A.acf.Ko));this.
T$.A6(0x12);this.T$.L(A.jb.Text);this.J(this.Ln,0);this.J(this.T$,0);this.Ln.S(A.
aaL(A.fl.Af));this.T$.S(A.aaL(A.fl.Ak));this.T$.AZ(A.aaL(A.fl.Bh));this.Init(aArg
);},_Done:function(){this.__proto__=C.De;this.Ln._Done();this.T$._Done();C.De._Done.
call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Ln._ReInit();this.T$.
_ReInit();this.T$.R((A.aaR(A.acf.Ahn)+AIr)+A.aaR(A.acf.Ko));this.Ln.S(A.aaL(A.fl.
Af));this.T$.S(A.aaL(A.fl.Ak));this.T$.AZ(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.Ln)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
T$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdTemperatures"
};C.ADx={JA:null,D0:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.JA={I:this},0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=
C.ADx;this.JA.H(AY7);this.JA.KU(true);this.JA.A6(0x14);this.JA.R(A.aaR(A.acf.AhT
)+AIs);this.JA.L(A.jb.Text);this.D0.H(Aou);this.D0.KU(true);this.D0.R(A.aaR(A.acf.
AGh));this.D0.L(A.jb.Text);this.J(this.JA,0);this.J(this.D0,0);this.JA.S(A.aaL(A.
fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.De;this.JA.
_Done();this.D0._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.
call(this);this.JA._ReInit();this.D0._ReInit();this.JA.R(A.aaR(A.acf.AhT)+AIs);this.
D0.R(A.aaR(A.acf.AGh));this.JA.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.De._Mark.call(this,D);if((B=this.JA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"
};C.T1={Jb:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.call(
this.Jb={I:this},0);this.__proto__=C.T1;this.Jb.H(AIt);this.Jb.R((((A.aaR(A.acf.
RQ)+AcS)+AIu)+A.aaR(A.acf.Bax))+O_);this.Jb.A6(0x12);this.Jb.L(A.jb.Text);this.J(
this.Jb,0);this.Jb.S(A.aaL(A.fl.Af));this.Jb.AZ(A.aaL(A.fl.Ak));this.Jb.Cr(A.aaL(
A.fl.Bh));},_Done:function(){this.__proto__=C.De;this.Jb._Done();C.De._Done.call(
this);},_ReInit:function(){C.De._ReInit.call(this);this.Jb._ReInit();this.Jb.R((((
A.aaR(A.acf.RQ)+AcS)+AIu)+A.aaR(A.acf.Bax))+O_);this.Jb.S(A.aaL(A.fl.Af));this.Jb.
AZ(A.aaL(A.fl.Ak));this.Jb.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APL={Lo:null,Kw:null,CQ:function(){this.A$J();},Init:function(aArg){this.A$J(
);},A$J:function(){this.Lo.R(A._GetAutoObject(A.acj.DU).Af4());this.Kw.R(A._GetAutoObject(
A.acj.DU).Aaw());},_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lo={I:this},0);C.CG._Init.call(this.Kw={I:this},0);this.__proto__=C.APL;
this.Lo.H(AY8);this.Lo.A6(0x12);this.Lo.L(A.jb.Text);this.Kw.H(Aou);this.Kw.L(A.
jb.Text);this.J(this.Lo,0);this.J(this.Kw,0);this.Lo.S(A.aaL(A.fl.Af));this.Kw.S(
A.aaL(A.fl.Af));this.Kw.AZ(A.aaL(A.fl.Ak));this.Kw.Cr(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.De;this.Lo._Done();this.Kw._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lo._ReInit();
this.Kw._ReInit();this.Lo.S(A.aaL(A.fl.Af));this.Kw.S(A.aaL(A.fl.Af));this.Kw.AZ(
A.aaL(A.fl.Ak));this.Kw.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.
De._Mark.call(this,D);if((B=this.Lo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kw
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANk={Mo:null,Hq:null,Ib:null,AP:null,A$:null,FW:0,AaC:0,Ie:0,AiO:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mo.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ib.H(this.Mo.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiO){this.Ib.R(Rp);this.Ib.L(A.jb.
Text);this.Mo.L(this.Background.AQ);}else{this.Ib.R(A._GetAutoObject(A.Device.Converter
).S_(this.FW,2,true));this.Ib.L(A._GetAutoObject(A.acj.DU).AzY(this.FW,this.Ie));
this.Mo.L(A._GetAutoObject(A.acj.DU).AzW(this.FW,this.Ie));}if(this.AaC>0)this.Hq.
R(A._GetAutoObject(A.Device.Converter).Ak$(this.AaC));else this.Hq.R(Rp);this.Hq.
L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mj=
this.AX.CF(Ad,1);var Auy=this.AX.Hv(Ad,24);var AKg=this.AX.CF(Ad,23);var Auz=this.
AX.Hv(Ad,19);this.AaC=this.AX.CF(Ad,18);if((Auy>0)&&(Auy!==Auz)){var LF=A._GetAutoObject(
A.Device.Helper).Mb(Auy,Auz);if(!!LF){this.AiO=false;this.FW=A._GetAutoObject(A.
acj.DU).AlB(LF,AKg,this.AaC);}else{this.AiO=true;this.FW=0;}}else{this.AiO=true;
this.FW=0;}this.T(Mj.toFixed());this.Ie=this.AX.AmX(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mo={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.Ib={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.ANk;this.V.H(O8);this.Mo.H(Atg);this.Hq.H(AIo);this.Hq.A6(0x12);this.Hq.R(Ro);
this.Hq.L(A.jb.Text);this.Ib.H(AIp);this.Ib.R(Ro);this.Ib.L(A.jb.Text);this.AP.H(
Aos);this.AP.L(A.jb.Bc);this.A$.H(Aot);this.A$.L(A.jb.Bc);this.J(this.Mo,0);this.
J(this.Hq,0);this.J(this.Ib,0);this.J(this.AP,0);this.J(this.A$,0);this.Hq.S(A.aaL(
A.fl.Af));this.Ib.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mo._Done();this.Hq._Done();this.Ib._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mo._ReInit(
);this.Hq._ReInit();this.Ib._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.Ib.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M7={Mn:null,AP:null,A$:null,Gz:null,Xt:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Mn.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mn.M);this.Background.H([].concat(this.Mn.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gz.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A$.H([this.Gz.M[2]-1,0,this.
Gz.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gz.L(this.V.AQ
);if(!!this.Xt&&(this.Xt!==5)){this.Mn.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
Xt));this.V.L(A._GetAutoObject(A.acj.Assessment).XC(this.Xt));}else this.Mn.L(this.
Background.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var
Mj=this.AX.CF(Ad,1);var LT=this.AX.I9(Ad,13);var AlI=this.AX.I9(Ad,17);var AlR=this.
AX.H4(Ad,11);var Azi=this.AX.Hv(Ad,4);var AfR=A._GetAutoObject(A.Device.Helper).
Mb(Azi,A._GetAutoObject(A.Device.Helper).Dv());this.Xt=A._GetAutoObject(A.Device.
Helper).AMq(LT,AlR,AlI);this.T(Mj.toFixed());if(AfR<100)this.Gz.R((AfR.toFixed()+
CR)+A.aaR(A.acf.AL5));else this.Gz.R(A._GetAutoObject(A.acj.KO).AC2(Azi,A._GetAutoObject(
A.Device.Helper).Dv(),AIv));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Mn={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.Text._Init.call(this.Gz={I:this
},0);this.__proto__=C.M7;this.Mn.H(Atg);this.Background.H(AY9);this.V.H(O8);this.
AP.H(Aos);this.AP.L(A.jb.Bc);this.A$.H(Aot);this.A$.L(A.jb.Bc);this.Gz.H(Ayz);this.
J(this.Mn,-3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Gz,0);this.Gz.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mn._Done(
);this.AP._Done();this.A$._Done();this.Gz._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mn._ReInit();this.AP._ReInit();this.A$._ReInit(
);this.Gz._ReInit();this.Gz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ANi={AjA:null,Ob:null,AP:null,A$:null,Jv:null,AKy:0,A2Z:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.Ob.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.AjA.H(this.Ob.M);this.A$.H([this.Ob.M[2]-1,0,this.Ob.M[2]+1,aSize[1]]);
this.Jv.H([this.Ob.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jv.Dg(this.V.AQ);if(this.AKy>0){this.AjA.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.A2Z));this.Ob.L(A._GetAutoObject(A.acj.Assessment).XC(this.A2Z));}else{
this.AjA.L(this.Background.AQ);this.Ob.L(this.V.AQ);}},Ch:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){var IB=this.AX.CF(Ad,0);var Mj=this.AX.CF(Ad,
1);this.AKy=this.AX.CF(Ad,5);this.A2Z=this.AX.I9(Ad,17);this.T(Mj.toFixed());if(
this.AKy>0)this.Ob.R(A._GetAutoObject(A.Device.Converter).Ak2(this.AKy));else this.
Ob.R(Rp);var Xs=A._GetAutoObject(A.Device.Helper).ZS(6);A._GetAutoObject(A.Device.
Device).SR(Ad);var A08=A._GetAutoObject(A.Device.Helper).Bjm(A._GetAutoObject(A.
Device.Device).Bt,9,IB,Xs,0);this.Jv.A9$(A08.Get(3));this.Jv.A_b(A08.Get(2));this.
Jv.A_a(A08.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AjA={I:this},0);A.acg.Text._Init.call(this.Ob={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},
0);C.Jv._Init.call(this.Jv={I:this},0);this.__proto__=C.ANi;this.Ob.A6(0x12);this.
Ob.R(Ro);this.Ob.L(A.jb.Text);this.AP.H(Aos);this.AP.L(A.jb.Bc);this.A$.H(Aot);this.
A$.L(A.jb.Bc);this.Jv.H(AY_);this.J(this.AjA,0);this.J(this.Ob,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Jv,0);this.Ob.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AjA._Done();this.Ob._Done();this.AP.
_Done();this.A$._Done();this.Jv._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AjA._ReInit();this.Ob._ReInit();this.AP._ReInit();
this.A$._ReInit();this.Jv._ReInit();this.Ob.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ob)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jv)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jv={Afq:null,
ColoredCounterAttrSet:null,ACt:0,ACu:0,ACs:0,KV:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKr;var ALL;var AKW;var AlZ=0;if(this.ACs>0){AKr=this.ACs.toFixed(
);AlZ+=AKr.length;}else{AKr=AY$;AlZ++;}if(this.ACu>0){ALL=this.ACu.toFixed();AlZ+=
ALL.length;}else{ALL=AyA;AlZ++;}if(this.ACt>0){AKW=this.ACt.toFixed();AlZ+=AKW.length;
}else{AKW=AIj;AlZ++;}if(AlZ<=4)this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Af));else
if(AlZ<=5)this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Aht(A.aaL(A.fl.Bh));this.Afq.R(((((AZa+AKr)+AZb)+ALL)+AZc)+AKW);},A_a:function(E
){if(this.ACt===E)return;this.ACt=E;this.Am();},A_b:function(E){if(this.ACu===E)
return;this.ACu=E;this.Am();},A9$:function(E){if(this.ACs===E)return;this.ACs=E;
this.Am();},Dg:function(E){if(this.KV===E)return;this.KV=E;this.ColoredCounterAttrSet.
Ahq(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuV._Init.call(
this.Afq={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jv;this.H(AIw);this.Afq.A0(0x3F);this.Afq.H(AIw);this.
Afq.R(Ro);this.ColoredCounterAttrSet.Bms(A.jb.E1);this.ColoredCounterAttrSet.A92(
A.jb.H_);this.ColoredCounterAttrSet.A91(A.jb.Gj);this.ColoredCounterAttrSet.Ahq(
A.jb.Text);this.KV=A.jb.Text;this.J(this.Afq,0);this.Afq.A9W(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9Y(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afq._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afq._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Aht(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ANh={AtK:null
,Acc:null,Acd:null,Ace:null,Jv:null,AP:null,A$:null,Ea:null,Lv:null,AcB:null,KW:
null,KX:null,AJD:0,AJC:0,AJB:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acc.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcB.H(this.
Acc.M);this.A$.H([this.Acc.M[2]-1,0,this.Acc.M[2]+1,aSize[1]]);this.Acd.H([this.
Acc.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KW.H(this.Acd.M);this.Ea.H([this.
Acd.M[2]-1,0,this.Acd.M[2]+1,aSize[1]]);this.Ace.H([this.Acd.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KX.H(this.Ace.M);this.Lv.H([this.Ace.M[2]-1,0,this.Ace.
M[2]+1,aSize[1]]);this.Jv.H([this.Ace.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jv.Dg(this.V.AQ);this.Acc.L(A._GetAutoObject(A.acj.
Assessment).Qr(this.AJB));this.Acd.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
AJC));this.Ace.L(A._GetAutoObject(A.acj.Assessment).Qr(this.AJD));this.AcB.L(A._GetAutoObject(
A.acj.Assessment).XC(this.AJB));this.KW.L(A._GetAutoObject(A.acj.Assessment).XC(
this.AJC));this.KX.L(A._GetAutoObject(A.acj.Assessment).XC(this.AJD));this.AcB.Z(
!this.AJB);this.KW.Z(!this.AJC);this.KX.Z(!this.AJD);this.Jv.A9$(this.AtK.Get(3)
);this.Jv.A_b(this.AtK.Get(2));this.Jv.A_a(this.AtK.Get(1));},Ch:function(Ad){if(
!this.AX)return;this.Hs=Ad;if(!!this.AX){var IB=this.AX.CF(Ad,0);var Mj=this.AX.
CF(Ad,1);this.T(Mj.toFixed());A._GetAutoObject(A.Device.Device).SR(Ad);this.AJB=
A._GetAutoObject(A.Device.Helper).A2z(A._GetAutoObject(A.Device.Device).Bt,IB,0);
this.AJC=A._GetAutoObject(A.Device.Helper).A2z(A._GetAutoObject(A.Device.Device).
Bt,IB,-1);this.AJD=A._GetAutoObject(A.Device.Helper).A2z(A._GetAutoObject(A.Device.
Device).Bt,IB,-2);this.AtK=A._GetAutoObject(A.Device.Helper).A60(A._GetAutoObject(
A.Device.Device).Bt,IB,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Acc={I:this},0);A.acg.AL._Init.call(this.Acd={I:
this},0);A.acg.AL._Init.call(this.Ace={I:this},0);C.Jv._Init.call(this.Jv={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.Lv={I:this
},0);A.acg.Text._Init.call(this.AcB={I:this},0);A.acg.Text._Init.call(this.KW={I:
this},0);A.acg.Text._Init.call(this.KX={I:this},0);this.__proto__=C.ANh;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Lv.L(A.jb.Bc);this.AcB.R(Aov
);this.KW.R(Aov);this.KX.R(Aov);this.J(this.Acc,0);this.J(this.Acd,0);this.J(this.
Ace,0);this.J(this.Jv,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.Lv,0);this.J(this.AcB,0);this.J(this.KW,0);this.J(this.KX,0);this.AcB.S(A.
aaL(A.fl.Af));this.KW.S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));this.AtK=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acc._Done();this.Acd._Done();this.Ace._Done();this.Jv._Done();this.AP.
_Done();this.A$._Done();this.Ea._Done();this.Lv._Done();this.AcB._Done();this.KW.
_Done();this.KX._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acc._ReInit();this.Acd._ReInit();this.Ace._ReInit();this.Jv._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Lv._ReInit();this.AcB.
_ReInit();this.KW._ReInit();this.KX._ReInit();this.AcB.S(A.aaL(A.fl.Af));this.KW.
S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.Am0={H8:null,Af6:false,Bl:function(aSize){var
B;this.H8.H([(aSize[0]-((B=this.H8.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H8.M[0]-10,40]);C.TL.Bl.call(this,aSize);},Ai:function(Ae){C.TL.Ai.call(
this,Ae);if(this.Af6)this.H8.Cv(1);else this.H8.Cv(0);},Kg:function(G){if(this.Af6
)C.TL.Kg.call(this,G);},Kb:function(G){if(this.Af6)C.TL.Kb.call(this,G);},Tw:function(
AI){C.TL.Tw.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.Af6=true;this.ZA(
true);}else{this.H(A.abI(this.M,40));this.Af6=false;this.ZA(false);}},_Init:function(
aArg){C.TL._Init.call(this,aArg);A.acg.Ap._Init.call(this.H8={I:this},0);this.__proto__=
C.Am0;this.V.A6(0x11);this.H8.H(AHT);this.H8.Cv(0);this.J(this.H8,0);this.V.Cr(A.
aaL(A.fl.Bh));this.H8.Ax(A.aaL(A.ach.AqQ));},_Done:function(){this.__proto__=C.TL;
this.H8._Done();C.TL._Done.call(this);},_ReInit:function(){C.TL._ReInit.call(this
);this.H8._ReInit();this.V.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TL._Mark.
call(this,D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AGg={_Init:function(aArg){C.Axp._Init.call(this,aArg);this.__proto__=C.AGg;}
,_className:"Application::OptionsOverlaySeparator"};C.AkI={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axp._Init.call(this,aArg);this.__proto__=C.AkI;},_className:"Application::OptionsOverlayNode"
};C.ZC={AR:null,_Init:function(aArg){C.AkI._Init.call(this,aArg);this.__proto__=
C.ZC;},_Mark:function(D){var B;C.AkI._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANN={Ai:function(Ae){C.OZ.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(
this.Hl){FS=A.jb.Text;GY=A.jb.Bm;}this.Background.L(FS);this.V.L(GY);},_Init:function(
aArg){C.OZ._Init.call(this,aArg);this.__proto__=C.ANN;},_className:"Application::DarkThemeTextItem"
};C.OZ={Background:null,BW:null,V:null,Aqx:0,Hl:false,Init:function(aArg){},Bl:function(
aSize){C.Hi.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BW.H(A.abK(this.BW.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hi.Ai.call(this,Ae);this.BW.L(this.Aqx);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bi:function(E){if(this.Hl===E)return;this.Hl=E;this.Am();
},ArN:function(E){if(this.Aqx===E)return;this.Aqx=E;this.Am();},_Init:function(aArg
){C.Hi._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
BW._Init.call(this.BW={I:this},0);C.CG._Init.call(this.V={I:this},0);this.__proto__=
C.OZ;this.H(BD);this.Background.H(AIx);this.BW.H(BD);this.BW.Nn(2);this.BW.L(A.jb.
Ri);this.V.H(AZd);this.Aqx=A.jb.Ri;this.J(this.Background,0);this.J(this.BW,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hi;this.Background._Done(
);this.BW._Done();this.V._Done();C.Hi._Done.call(this);},_ReInit:function(){C.Hi.
_ReInit.call(this);this.Background._ReInit();this.BW._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hi._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APO={Es:null,IQ:null
,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.Es={
I:this},0);A.acg.Text._Init.call(this.IQ={I:this},0);this.__proto__=C.APO;this.H(
Oe);this.Background.H(Oe);this.Es.H(AIy);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11
);this.Es.L(A.jb.Text);this.IQ.A0(0x3F);this.IQ.H(AIz);this.IQ.Hn(5);this.IQ.A6(
0x14);this.IQ.R(A.aaR(A.acf.AG0));this.IQ.L(A.jb.Text);this.J(this.Es,0);this.J(
this.IQ,0);this.Es.S(A.aaL(A.fl.Af));this.IQ.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.IQ._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.IQ._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.IQ.R(A.aaR(A.acf.AG0));this.Es.S(A.aaL(A.fl.Af));this.IQ.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sq:null,Sr:null,AeE:null,Ag8:null,QM:null
,KV:0,LastTemperature:0,AqD:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sq.Ax(A.aaL(A.ach.AvK));this.Sr.Ax(A.aaL(A.ach.AvK));}break;case 2:{this.Sq.Ax(A.
aaL(A.ach.AvN));this.Sr.Ax(A.aaL(A.ach.AvN));}break;default:{this.Sq.Ax(A.aaL(A.
ach.Aez));this.Sr.Ax(A.aaL(A.ach.Aez));}}this.Sq.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.AqD));var ApQ;if(this.IsWatch)ApQ=A.aaL(A.ach.AQS);else if(this.IsFever
){ApQ=A.aaL(A.ach.AQR);switch(A._GetAutoObject(A.Device.Converter).Ajn(this.LastTemperature
,this.AnimalType)){case 3:this.QM.L(A.jb.Gj);break;case 2:this.QM.L(A.jb.H_);break;
case 1:this.QM.L(A.jb.E1);break;case 0:this.QM.L(A.jb.Afu);break;default:;}}else
if(this.IsAlarm){ApQ=A.aaL(A.ach.AQQ);if(!this.AqD||(this.AqD===5))this.QM.L(A.jb.
Gj);else this.QM.L(0xFF000000);}else ApQ=null;this.AeE.Ax(ApQ);this.Ag8.Ax(ApQ);
this.QM.Ax(ApQ);if(A._GetAutoObject(A.acj.Assessment).Qr(this.AqD)===A.jb.E1)this.
Sr.L(this.KV);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AFd:function(E){if(this.AqD===E)return;this.AqD=E;this.Am();},Dg:function(
E){if(this.KV===E)return;this.KV=E;this.Am();},Ae7:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uu:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae3:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae9:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E6:function(){this.EC(0);this.AFd(0);this.Ae3(false);this.Uu(false
);this.Ae7(false);this.Ae9(0);this.Dg(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sq={I:this},0);A.acg.Ap._Init.call(
this.Sr={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap._Init.call(
this.Ag8={I:this},0);A.acg.Ap._Init.call(this.QM={I:this},0);this.__proto__=C.DS;
this.H(Alj);this.Sq.A0(0x3F);this.Sq.H(Alj);this.Sq.L(A.jb.CJ);this.Sq.A6(0x12);
this.Sq.Cv(0);this.Sr.A0(0x3F);this.Sr.H(Alj);this.Sr.L(0xFF000000);this.Sr.A6(0x12
);this.Sr.Cv(1);this.AeE.A0(0x3F);this.AeE.H(Alj);this.AeE.L(0xFF000000);this.AeE.
Cv(0);this.Ag8.A0(0x3F);this.Ag8.H(Alj);this.Ag8.Cv(1);this.QM.A0(0x3F);this.QM.
H(Alj);this.QM.L(A.jb.CU);this.QM.Cv(2);this.KV=A.jb.Text;this.J(this.Sq,0);this.
J(this.Sr,0);this.J(this.AeE,0);this.J(this.Ag8,0);this.J(this.QM,0);this.Sq.Ax(
A.aaL(A.ach.Aez));this.Sr.Ax(A.aaL(A.ach.Aez));},_Done:function(){this.__proto__=
A.Core.P;this.Sq._Done();this.Sr._Done();this.AeE._Done();this.Ag8._Done();this.
QM._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sq._ReInit();this.Sr._ReInit();this.AeE._ReInit();this.Ag8._ReInit();
this.QM._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.ANe={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(!!this.AX){var BAo=this.AX.H4(
Ad,12);var ByG=this.AX.Sm(Ad,15);this.Abg.R(A._GetAutoObject(A.Device.Helper).Mb(
ByG,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Ss.Z(BAo);this.Am();
}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=C.ANe;},_className:
"Application::CalfListAlarmItem"};C.ADt={D0:null,Mw:null,_Init:function(aArg){C.
T2._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mw={I:this},0);this.__proto__=C.ADt;this.D0.H(Aou);this.D0.KU(true);this.
D0.R(A.aaR(A.acf.A6e));this.D0.L(A.jb.Text);this.Mw.H(AZe);this.Mw.Jc(false);this.
Mw.L(A.jb.Text);this.Mw.A6(0x12);this.J(this.D0,-2);this.J(this.Mw,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mw.Ax(A.aaL(A.ach.ADS));},_Done:function(){this.__proto__=C.
T2;this.D0._Done();this.Mw._Done();C.T2._Done.call(this);},_ReInit:function(){C.
T2._ReInit.call(this);this.D0._ReInit();this.Mw._ReInit();this.D0.R(A.aaR(A.acf.
A6e));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.T2._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mw)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kn={Background:null,BW:
null,ACU:0,AB9:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACU);this.BW.L(this.AB9);},AwL:function(E){if(this.ACU===E)return;this.ACU=E;this.
Am();},AE7:function(E){if(this.AB9===E)return;this.AB9=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BW={I:this},0);this.__proto__=C.Kn;this.H(Aow);this.
Background.A0(0x3C);this.Background.H(Aow);this.Background.Cv(1);this.BW.A0(0x3C
);this.BW.H(Aow);this.ACU=A.jb.E1;this.AB9=A.jb.Text;this.J(this.Background,0);this.
J(this.BW,0);this.Background.Ax(A.aaL(A.ach.Kn));this.BW.Ax(A.aaL(A.ach.Kn));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BW._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BW._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmI={Q:null,Ps:
null,A7F:false,Bl:function(aSize){C.Ms.Bl.call(this,aSize);this.V.H([].concat(this.
Ps.M[2]-this.V.Text.Jf,this.V.M.slice(1,4)));},Ai:function(Ae){C.Ms.Ai.call(this
,Ae);this.Ps.L(this.V.AQ);},AwQ:function(E){if(this.A7F===E)return;this.A7F=E;if(
E)this.Ps.R(AZf);else this.Ps.R(AIA);},IE:function(G){var F;if(!!this.Q)this.AwQ((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.IE],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.IE],E,0);if(!!E)
A.pe([this,this.IE],this);},_Init:function(aArg){C.Ms._Init.call(this,aArg);A.acg.
Text._Init.call(this.Ps={I:this},0);this.__proto__=C.AmI;this.Ps.A0(0x34);this.Ps.
H(Tc);this.Ps.R(AIA);this.J(this.Ps,0);this.Ps.S(A.aaL(A.fl.AOH));},_Done:function(
){this.__proto__=C.Ms;this.Ps._Done();C.Ms._Done.call(this);},_ReInit:function(){
C.Ms._ReInit.call(this);this.Ps._ReInit();},_Mark:function(D){var B;C.Ms._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ps)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AO6={DX:function(G){C.Kt.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(4));},_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.AO6;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Du:function(){return 3;},C7:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BT(aIndex);},DZ:function(A7){return A7;},H5:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APP={Go:null,Ln:null,YU:null,Init:function(aArg){this.Ln.R(A._GetAutoObject(
A.acj.Temperature).AlN());},_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Go={I:this},0);A.acg.Text._Init.call(this.Ln={I:this},0);A.
acg.Text._Init.call(this.YU={I:this},0);this.__proto__=C.APP;this.Background.L(A.
jb.Text);this.Go.H(AIB);this.Go.A6(0x11);this.Go.R(A.aaR(A.acf.Date));this.Go.L(
A.jb.Bm);this.Ln.H(AZg);this.Ln.A6(0x12);this.Ln.L(A.jb.Bm);this.YU.H(AZh);this.
YU.A6(0x12);this.YU.R(A.aaR(A.acf.Bs));this.YU.L(A.jb.Bm);this.J(this.Go,0);this.
J(this.Ln,0);this.J(this.YU,0);this.Go.S(A.aaL(A.fl.Af));this.Ln.S(A.aaL(A.fl.Af
));this.YU.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EB;this.Go._Done();this.Ln._Done();this.YU._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Go._ReInit();this.Ln._ReInit();this.YU._ReInit(
);this.Go.R(A.aaR(A.acf.Date));this.YU.R(A.aaR(A.acf.Bs));this.Go.S(A.aaL(A.fl.Af
));this.Ln.S(A.aaL(A.fl.Af));this.YU.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EB._Mark.call(this,D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ln)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.TF={Lh:null,AjR:false,Init:function(
aArg){var B;A.zX([this,this.BbZ],[B=A._GetAutoObject(A.Device.Device),B.AEF,B.AIV
],0);this.AGT(this);A.pe([this,this.AoC],this);},DE:function(G){var D5=(A.Core.BL.
isPrototypeOf(G)?G:null);switch(D5.CP){case 6:this.Or(this);break;case 7:this.M0(
this);break;default:D5.NM=true;}},CC:function(G){var B;if(!!this.Lh)this.Lh.CC(this
);C.AB.CC.call(this,G);},E4:function(G){var B;if(!!this.Lh)this.Lh.E4(this);C.AB.
E4.call(this,G);},Anq:function(G){A._GetAutoObject(C.A8).FB();},AGT:function(G){
var B;if(!!this.Lh){this.Lh.E4(this);this.HP(this.Lh);}if(this.AjR)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lh=A._NewObject(C.AMx,0);break;case 1:this.Lh=A.
_NewObject(C.AMy,0);break;case 3:this.Lh=A._NewObject(C.AMw,0);break;case 2:this.
Lh=A._NewObject(C.AMz,0);break;default:throw new Error(AIC);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lh=A._NewObject(C.AMA,0);break;case 1:this.Lh=A.
_NewObject(C.AMJ,0);break;case 3:this.Lh=A._NewObject(C.AMD,0);break;case 2:this.
Lh=A._NewObject(C.AMO,0);break;default:throw new Error(AIC);}this.HQ(this);this.
J(this.Lh,0);this.Lh.H(Ff);this.Lh.Zx([this,this.A0U]);this.Lh.CC(this);this.Bb(
this.Lh);},BbZ:function(s){this.AGT(s);},Bol:function(G){A._GetAutoObject(A.Device.
Device).AeX(0);},AT3:function(G){A._GetAutoObject(A.Device.Device).AeX(1);},AT2:
function(G){A._GetAutoObject(A.Device.Device).AeX(3);},AT4:function(G){A._GetAutoObject(
A.Device.Device).AeX(2);},HQ:function(G){this.N.C2(A.aaL(A.ach.E2));this.N.Hy(A.
jV);this.N.CE=[this,this.Anq];this.N.AFj(A.aaL(A.fl.Ak));},AoC:function(s){this.
HQ(s);},Bm8:function(E){if(this.AjR===E)return;this.AjR=E;A.pe([this,this.BbZ],this
);},A$c:function(G){this.Bm8(!this.AjR);},Boo:function(G){A._GetAutoObject(A.Device.
Device).A3(31,true,A.jV,0,null);},M0:function(G){},BG1:function(s){this.M0(s);},
Or:function(G){},BG0:function(s){this.Or(s);},Bfm:function(G){var FQ=A._GetAutoObject(
A.Device.Device).D9;FQ=FQ+1;if(FQ>=4)FQ=0;A._GetAutoObject(A.Device.Device).AeX(
FQ);},BBi:function(G){var FQ=A._GetAutoObject(A.Device.Device).D9;FQ=FQ-1;if(FQ<
0)FQ=3;A._GetAutoObject(A.Device.Device).AeX(FQ);},Af$:function(G){},A0U:function(
s){this.Af$(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.TF;this.Background.H(Ce);this.N.Z(true);this.N.OS(true);this.N.OT(true);this.Dr(
C.APE);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lh)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Do:null,CC:function(G){},AIU:function(s){this.CC(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyN:function(s){
this.E4(s);},Zx:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Do.BM=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BL._Init.call(this.Do={I:this},0);this.__proto__=
C.D9;this.H(U1);this.AttrSet.A92(A.jb.Gj);this.AttrSet.A91(A.jb.H_);this.AttrSet.
Ahq(A.jb.Text);this.Do.Filter=1;this.AttrSet.Aht(A.aaL(A.fl.Ak));this.AttrSet.A9Y(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Do._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Do._ReInit();this.AttrSet.Aht(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMA={RU:
null,AaZ:null,TE:null,TD:null,RZ:null,QE:null,R0:null,RX:null,RY:null,RW:null,CQ:
function(){var B;this.RU.Ch(this);this.AaZ.Ch(this);this.TE.Ch(this);this.TD.Ch(
this);this.RZ.Ch(this);this.QE.Ch(this);this.R0.Ch(this);this.RX.Ch(this);this.RY.
Ch(this);this.RW.Ch(this);},GH:function(G){C.R1.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RU.Z(true);this.AaZ.Z(false);
this.RX.Z(false);this.RY.Z(false);this.RW.Z(false);this.RZ.Z(true);this.QE.Z(true
);this.R0.Z(true);}break;case 1:{this.RU.Z(false);this.AaZ.Z(true);this.RX.Z(true
);this.RY.Z(true);this.RW.Z(true);this.RZ.Z(false);this.QE.Z(false);this.R0.Z(false
);}break;default:A.ab5("%s%e",Alf,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MT],this);},_Init:function(aArg){C.R1._Init.call(this,aArg);C.
RU._Init.call(this.RU={I:this},0);C.AMv._Init.call(this.AaZ={I:this},0);C.TE._Init.
call(this.TE={I:this},0);C.TD._Init.call(this.TD={I:this},0);C.RZ._Init.call(this.
RZ={I:this},0);C.QE._Init.call(this.QE={I:this},0);C.R0._Init.call(this.R0={I:this
},0);C.RX._Init.call(this.RX={I:this},0);C.RY._Init.call(this.RY={I:this},0);C.RW.
_Init.call(this.RW={I:this},0);this.__proto__=C.AMA;this.RU.H(BD);this.RU.Aj(true
);this.RU.Bi(false);this.AaZ.H(IX);this.AaZ.Aj(true);this.AaZ.Bi(false);this.TE.
H(Qd);this.TE.Aj(true);this.TE.Bi(true);this.TD.H(Aag);this.TD.Aj(true);this.TD.
Bi(false);this.RZ.H(Alh);this.RZ.Aj(true);this.RZ.Bi(true);this.QE.H(Aoq);this.QE.
Aj(true);this.QE.Bi(false);this.R0.H(As$);this.R0.Aj(true);this.R0.Bi(true);this.
RX.H(Xj);this.RX.Aj(true);this.RX.Bi(true);this.RY.H(AZi);this.RY.Aj(true);this.
RY.Bi(false);this.RW.H(AZj);this.RW.Aj(true);this.RW.Bi(true);this.J(this.RU,0);
this.J(this.AaZ,0);this.J(this.TE,0);this.J(this.TD,0);this.J(this.RZ,0);this.J(
this.QE,0);this.J(this.R0,0);this.J(this.RX,0);this.J(this.RY,0);this.J(this.RW,
0);},_Done:function(){this.__proto__=C.R1;this.RU._Done();this.AaZ._Done();this.
TE._Done();this.TD._Done();this.RZ._Done();this.QE._Done();this.R0._Done();this.
RX._Done();this.RY._Done();this.RW._Done();C.R1._Done.call(this);},_ReInit:function(
){C.R1._ReInit.call(this);this.RU._ReInit();this.AaZ._ReInit();this.TE._ReInit();
this.TD._ReInit();this.RZ._ReInit();this.QE._ReInit();this.R0._ReInit();this.RX.
_ReInit();this.RY._ReInit();this.RW._ReInit();this.CQ();},_Mark:function(D){var B;
C.R1._Mark.call(this,D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R0)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RY).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMO={AkU:function(L6){if(!L6)return;var Fy=A._NewObject(
A.Device.Filter,0);var HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CX(HX);var Ac_=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fy.CX(Ac_);L6.Bk(Fy);
},AD7:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Pk=A.
_GetAutoObject(A.Device.Device).Bt.B_();if(Pk<2)return false;var BCJ=A._GetAutoObject(
A.Device.Device).Bt.Hv(0,6);var BCK=A._GetAutoObject(A.Device.Device).Bt.Hv(Pk-1
,6);var A2o=A._NewObject(A.Core.Bs,0);A2o.Initialize(BCJ);var A4u=A._NewObject(A.
Core.Bs,0);A4u.Initialize(BCK);if((A2o.AbZ()!==A4u.AbZ())||(A2o.Year!==A4u.Year)
)return true;else return false;},_Init:function(aArg){C.Aa1._Init.call(this,aArg
);this.__proto__=C.AMO;this.ATw(C.AHr);this.ATx(C.ADz);this.ATm(C.QE);this.ArT(A.
aaR(A.acf.AV1));this.Dl(A.aaR(A.acf.Akm));},_ReInit:function(){C.Aa1._ReInit.call(
this);this.ArT(A.aaR(A.acf.AV1));this.Dl(A.aaR(A.acf.Akm));},_className:"Application::AnimalWeights"
};C.AMJ={AkU:function(L6){if(!L6)return;var Fy=A._NewObject(A.Device.Filter,0);var
HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CX(HX);var ABm=A._NewObject(A.Device.Int32FilterCriterion
,0);ABm.Initialize(7,2,0,true);Fy.CX(ABm);L6.Bk(Fy);},AD7:function(){return A._GetAutoObject(
A.Device.Device).Bt.B_()>0;},_Init:function(aArg){C.Aa1._Init.call(this,aArg);this.
__proto__=C.AMJ;this.ATw(C.AVl);this.ATx(C.APP);this.ATm(C.TE);this.ArT(A.aaR(A.
acf.A73));this.Dl(A.aaR(A.acf.Arv));},_ReInit:function(){C.Aa1._ReInit.call(this
);this.ArT(A.aaR(A.acf.A73));this.Dl(A.aaR(A.acf.Arv));},_className:"Application::AnimalTemperatures"
};C.AUr={VF:null,VG:null,X1:null,AgI:null,KC:null,AP:null,A$:null,Ea:null,Lv:null
,AnV:null,KW:null,KX:null,ZP:null,ZQ:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.KC.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VF.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VF.M[2]-1,0,this.VF.M[2]+1,aSize[1]]);this.VG.H([this.VF.M[2],0,this.VF.M[2]+22,
aSize[1]]);this.Lv.H([this.VG.M[2]-1,0,this.VG.M[2]+1,aSize[1]]);this.X1.H([this.
VG.M[2],0,this.VG.M[2]+22,aSize[1]]);this.AnV.H([this.X1.M[2]-1,0,this.X1.M[2]+1
,aSize[1]]);this.AgI.H([this.X1.M[2],0,aSize[0],aSize[1]]);this.KW.H(this.VF.M);
this.KX.H(this.VG.M);this.ZP.H(this.X1.M);this.ZQ.H(this.AgI.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.KC.L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){var AlE=this.AX.Hv(Ad,6);var A1G=this.AX.I9(Ad,3);var A2k=
this.AX.I9(Ad,2);var A2j=this.AX.I9(Ad,5);var A4i=this.AX.I9(Ad,4);this.T(A._GetAutoObject(
A.acj.KO).AC1(AlE));this.KC.R(A._GetAutoObject(A.acj.KO).A6U(AlE));this.VF.L(A._GetAutoObject(
A.acj.Assessment).Qr(A1G));this.VG.L(A._GetAutoObject(A.acj.Assessment).Qr(A2k));
this.X1.L(A._GetAutoObject(A.acj.Assessment).Qr(A2j));this.AgI.L(A._GetAutoObject(
A.acj.Assessment).Qr(A4i));this.KW.L(A._GetAutoObject(A.acj.Assessment).XC(A1G));
this.KX.L(A._GetAutoObject(A.acj.Assessment).XC(A2k));this.ZP.L(A._GetAutoObject(
A.acj.Assessment).XC(A2j));this.ZQ.L(A._GetAutoObject(A.acj.Assessment).XC(A4i));
this.KW.Z(A1G===5);this.KX.Z(A2k===5);this.ZP.Z(A2j===5);this.ZQ.Z(A4i===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
VF={I:this},0);A.acg.AL._Init.call(this.VG={I:this},0);A.acg.AL._Init.call(this.
X1={I:this},0);A.acg.AL._Init.call(this.AgI={I:this},0);A.acg.Text._Init.call(this.
KC={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.
Lv={I:this},0);A.acg.AL._Init.call(this.AnV={I:this},0);A.acg.Text._Init.call(this.
KW={I:this},0);A.acg.Text._Init.call(this.KX={I:this},0);A.acg.Text._Init.call(this.
ZP={I:this},0);A.acg.Text._Init.call(this.ZQ={I:this},0);this.__proto__=C.AUr;this.
V.H(O8);this.VF.H(AZk);this.VG.H(AZl);this.X1.H(AZm);this.AgI.H(AZn);this.KC.R(Ro
);this.KC.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lv.L(A.jb.Bc);this.AnV.L(A.jb.Bc);this.KW.H(AZo);this.KW.R(Rp);this.KX.H(AZp
);this.KX.R(Rp);this.ZP.H(AZq);this.ZP.R(Rp);this.ZQ.H(AZr);this.ZQ.R(Rp);this.J(
this.VF,0);this.J(this.VG,0);this.J(this.X1,0);this.J(this.AgI,0);this.J(this.KC
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Lv,0);this.
J(this.AnV,0);this.J(this.KW,0);this.J(this.KX,0);this.J(this.ZP,0);this.J(this.
ZQ,0);this.KC.S(A.aaL(A.fl.Af));this.KW.S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af
));this.ZP.S(A.aaL(A.fl.Af));this.ZQ.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.VF._Done();this.VG._Done();this.X1._Done();this.AgI._Done(
);this.KC._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Lv._Done(
);this.AnV._Done();this.KW._Done();this.KX._Done();this.ZP._Done();this.ZQ._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.VF._ReInit(
);this.VG._ReInit();this.X1._ReInit();this.AgI._ReInit();this.KC._ReInit();this.
AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Lv._ReInit();this.AnV._ReInit(
);this.KW._ReInit();this.KX._ReInit();this.ZP._ReInit();this.ZQ._ReInit();this.KC.
S(A.aaL(A.fl.Af));this.KW.S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));this.ZP.S(
A.aaL(A.fl.Af));this.ZQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.VF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VG)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZQ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APN={Go:null,Y0:null,YW:null,YX:null,YY:null,YZ:
null,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.
Go={I:this},0);A.acg.Text._Init.call(this.Y0={I:this},0);A.acg.Text._Init.call(this.
YW={I:this},0);A.acg.Text._Init.call(this.YX={I:this},0);A.acg.Text._Init.call(this.
YY={I:this},0);A.acg.Text._Init.call(this.YZ={I:this},0);this.__proto__=C.APN;this.
Background.L(A.jb.Text);this.Go.H(AIB);this.Go.A6(0x11);this.Go.R(A.aaR(A.acf.Date
));this.Go.L(A.jb.Bm);this.Y0.H(AIt);this.Y0.A6(0x12);this.Y0.R(A.aaR(A.acf.Bs));
this.Y0.L(A.jb.Bm);this.YW.H(AZs);this.YW.A6(0x12);this.YW.R(A.aaR(A.acf.AUt));this.
YW.L(A.jb.Bm);this.YX.H(AZt);this.YX.A6(0x12);this.YX.R(A.aaR(A.acf.AUu));this.YX.
L(A.jb.Bm);this.YY.H(AID);this.YY.A6(0x12);this.YY.R(A.aaR(A.acf.AOD));this.YY.L(
A.jb.Bm);this.YZ.H(AZu);this.YZ.A6(0x12);this.YZ.R(A.aaR(A.acf.ANE));this.YZ.L(A.
jb.Bm);this.J(this.Go,0);this.J(this.Y0,0);this.J(this.YW,0);this.J(this.YX,0);this.
J(this.YY,0);this.J(this.YZ,0);this.Go.S(A.aaL(A.fl.Af));this.Y0.S(A.aaL(A.fl.Af
));this.YW.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af));this.YY.S(A.aaL(A.fl.Af));
this.YZ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EB;this.Go._Done();
this.Y0._Done();this.YW._Done();this.YX._Done();this.YY._Done();this.YZ._Done();
C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.call(this);this.Go._ReInit(
);this.Y0._ReInit();this.YW._ReInit();this.YX._ReInit();this.YY._ReInit();this.YZ.
_ReInit();this.Go.R(A.aaR(A.acf.Date));this.Y0.R(A.aaR(A.acf.Bs));this.YW.R(A.aaR(
A.acf.AUt));this.YX.R(A.aaR(A.acf.AUu));this.YY.R(A.aaR(A.acf.AOD));this.YZ.R(A.
aaR(A.acf.ANE));this.Go.S(A.aaL(A.fl.Af));this.Y0.S(A.aaL(A.fl.Af));this.YW.S(A.
aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af));this.YY.S(A.aaL(A.fl.Af));this.YZ.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Go)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMD={AkU:function(L6){if(!L6)return;
var Fy=A._NewObject(A.Device.Filter,0);var HX=A._NewObject(A.Device.Int32FilterCriterion
,0);HX.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CX(HX);var
AA5=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA5.Initialize(3,5,0,true
);Fy.CX(AA5);L6.Bk(Fy);},AD7:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B_()>0;},_Init:function(
aArg){C.Aa1._Init.call(this,aArg);this.__proto__=C.AMD;this.ATw(C.AUr);this.ATx(
C.APN);this.ATm(C.TD);this.ArT(A.aaR(A.acf.Axu));this.Dl(A.aaR(A.acf.Anp));},_ReInit:
function(){C.Aa1._ReInit.call(this);this.ArT(A.aaR(A.acf.Axu));this.Dl(A.aaR(A.acf.
Anp));},_className:"Application::AnimalRatings"};C.II={B7:null,Y:null,V:null,Uy:
5,T:function(E){C.I6.T.call(this,E);this.V.R(E);},Dg:function(E){C.I6.Dg.call(this
,E);this.V.L(E);},S:function(E){if(this.B7===E)return;this.B7=E;this.V.S(this.B7
);},AuZ:function(G){var B;var NE=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NE)return;
if(((B=NE.Dd(0x1))[2]-B[0])>((B=NE.M)[2]-B[0]))this.S(A.aaL(A.fl.HJ));},Kx:function(
E){if(this.Uy===E)return;this.Uy=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAZ:function(G){A.pe([this,this.AuZ],this);},_Init:function(aArg){C.I6._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.II;this.Y.A0(0x3F);this.Y.H(AyB);this.Y.A_T(5);this.
Y.JX(3);this.V.A0(0x34);this.V.H(Aai);this.V.Jc(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.Em=[this,this.
AAZ];this.V.S(A.aaL(A.fl.Kr));},_Done:function(){this.__proto__=C.I6;this.Y._Done(
);this.V._Done();C.I6._Done.call(this);},_ReInit:function(){C.I6._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kr));},_Mark:function(D){
var B;C.I6._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RU={AfR:0,Ai:function(Ae){C.FA.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RQ));if(this.AfR>=0)this.Kz((this.AfR.toFixed(
)+CR)+A.aaR(A.acf.Ko));else this.Kz(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.
Ch.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfR=-1;
else this.AfR=A._GetAutoObject(A.Device.Helper).W.RQ();this.Am();},_Init:function(
aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RU;},_className:"Application::AnimalInfoItemAge"
};C.RZ={A40:0,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afv));if(
this.A40>0)this.Kz((A._GetAutoObject(A.Device.Converter).Ak$(this.A40)+CR)+A._GetAutoObject(
A.acj.DU).Af4());else this.Kz(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(
this,G);this.A40=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RZ;},_className:
"Application::AnimalInfoItemWeight"};C.TE={Y:null,Ei:null,Ey:null,Fe:null,P0:null
,Fd:null,P1:null,Aji:0,Pj:0,CQ:function(){this.Am();},Ai:function(Ae){C.JO.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Bin));this.Fe.R(this.Aji.toFixed());this.Fd.R(this.Pj.
toFixed());if(!!this.Aji||!!this.Pj)this.P1.R(AZv+(this.Aji+this.Pj).toFixed());
else this.P1.R(A.aaR(A.acf.ASs));},Ch:function(G){C.JO.Ch.call(this,G);var Ak1;Ak1=
A._GetAutoObject(A.Device.Helper).Bjn(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Aji=Ak1.Get(2);this.Pj=Ak1.Get(1);this.Am();},Dg:
function(E){C.JO.Dg.call(this,E);this.P0.L(E);this.P1.L(E);},AsR:function(G){if(
!!this.Aji||!!this.Pj){this.Fe.Z(true);this.P0.Z(true);this.Fd.Z(true);}else{this.
Fe.Z(false);this.P0.Z(false);this.Fd.Z(false);}this.Ei.H(this.Fe.M);this.Ei.Z(this.
Fe.Fq());this.Ey.H(this.Fd.M);this.Ey.Z(this.Fd.Fq());},AuZ:function(G){var B;var
NE=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NE)return;if(((B=NE.Dd(0x1))[2]-B[0])>((
B=NE.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.P0.S(A.aaL(A.fl.Ak));this.Fe.S(
A.aaL(A.fl.Ak));this.P1.S(A.aaL(A.fl.Ak));}},AAZ:function(G){A.pe([this,this.AuZ
],this);},_Init:function(aArg){C.JO._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.Ey={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
P0={I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
P1={I:this},0);this.__proto__=C.TE;this.Y.H(AyC);this.Y.Bn5(0);this.Y.JX(3);this.
Ei.H(AZw);this.Ei.L(A.jb.H_);this.Ey.H(Ayz);this.Ey.L(A.jb.Gj);this.Fe.A0(0x34);
this.Fe.H(Aai);this.Fe.Hn(2);this.Fe.Jc(true);this.Fe.R(U3);this.Fe.L(A.jb.Text);
this.Fe.Aj(true);this.P0.A0(0x34);this.P0.H(Aai);this.P0.Jc(true);this.P0.R(AIk);
this.P0.L(A.jb.Text);this.P0.Aj(true);this.Fd.A0(0x34);this.Fd.H(Aai);this.Fd.Hn(
2);this.Fd.Jc(true);this.Fd.R(U3);this.Fd.L(A.jb.Bm);this.Fd.Aj(true);this.P1.A0(
0x34);this.P1.H(Aai);this.P1.Jc(true);this.P1.R(Ro);this.P1.L(A.jb.Text);this.P1.
Aj(true);this.J(this.Y,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.Fe,0);
this.J(this.P0,0);this.J(this.Fd,0);this.J(this.P1,0);this.Y.Em=[this,this.AAZ];
this.Fe.Q7([this,this.AsR]);this.Fe.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));
this.Fd.Q7([this,this.AsR]);this.Fd.S(A.aaL(A.fl.Af));this.P1.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JO;this.Y._Done();this.Ei._Done();this.Ey._Done(
);this.Fe._Done();this.P0._Done();this.Fd._Done();this.P1._Done();C.JO._Done.call(
this);},_ReInit:function(){C.JO._ReInit.call(this);this.Y._ReInit();this.Ei._ReInit(
);this.Ey._ReInit();this.Fe._ReInit();this.P0._ReInit();this.Fd._ReInit();this.P1.
_ReInit();this.Fe.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.
fl.Af));this.P1.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.JO._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fe
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QE={FW:0,Ie:0
,A2O:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(AZx+A.aaR(A.acf.AHm));if(
this.A2O){this.Kz((A._GetAutoObject(A.Device.Converter).S_(this.FW,2,true)+CR)+A.
_GetAutoObject(A.acj.DU).Aaw());this.Background.L(A._GetAutoObject(A.acj.DU).AzW(
this.FW,this.Ie));this.Dg(A._GetAutoObject(A.acj.DU).AzY(this.FW,this.Ie));}else{
this.Kz(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CJ);this.Dg(A.jb.Text);}},Ch:
function(G){C.FA.Ch.call(this,G);var LF=A._GetAutoObject(A.Device.Helper).Mb(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LF){this.A2O=true;this.FW=A._GetAutoObject(A.acj.DU).AlB(LF,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2O=false;this.FW=0;}this.Ie=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.QE;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.TD={Y:null,FX:null,Ei:
null,Ey:null,MK:null,Fe:null,Fd:null,O1:null,Aay:0,Aji:0,Pj:0,CQ:function(){this.
Am();},Ai:function(Ae){C.JO.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axu));this.MK.R(
this.Aay.toFixed());this.Fe.R(this.Aji.toFixed());this.Fd.R(this.Pj.toFixed());}
,Ch:function(G){C.JO.Ch.call(this,G);var Ak1;Ak1=A._GetAutoObject(A.Device.Helper
).A60(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aay=Ak1.Get(3);this.Aji=Ak1.Get(2);this.Pj=Ak1.Get(1);this.Am();},AsR:
function(G){if((!!this.Aay||!!this.Aji)||!!this.Pj){this.MK.Z(true);this.Fe.Z(true
);this.Fd.Z(true);this.O1.Z(false);}else{this.MK.Z(false);this.Fe.Z(false);this.
Fd.Z(false);this.O1.Z(true);}this.FX.H(this.MK.M);this.FX.Z(this.MK.Fq());this.Ei.
H(this.Fe.M);this.Ei.Z(this.Fe.Fq());this.Ey.H(this.Fd.M);this.Ey.Z(this.Fd.Fq()
);},AuZ:function(G){var B;var NE=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NE)return;
if(((B=NE.Dd(0x1))[2]-B[0])>((B=NE.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.Fe.
S(A.aaL(A.fl.Ak));this.MK.S(A.aaL(A.fl.Ak));}},AAZ:function(G){A.pe([this,this.AuZ
],this);},_Init:function(aArg){C.JO._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FX={I:this},0);A.acg.AL._Init.call(this.Ei={
I:this},0);A.acg.AL._Init.call(this.Ey={I:this},0);A.acg.Text._Init.call(this.MK={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
Fd={I:this},0);A.acg.Text._Init.call(this.O1={I:this},0);this.__proto__=C.TD;this.
Y.A0(0x3F);this.Y.H(AyC);this.Y.A_T(5);this.Y.JX(3);this.FX.H(AZy);this.FX.L(A.jb.
E1);this.Ei.H(AZz);this.Ei.L(A.jb.H_);this.Ey.H(AZA);this.Ey.L(A.jb.Gj);this.MK.
A0(0x3C);this.MK.H(Aai);this.MK.Hn(2);this.MK.Jc(true);this.MK.R(U3);this.MK.L(A.
jb.Text);this.MK.Aj(true);this.Fe.A0(0x3C);this.Fe.H(Aai);this.Fe.Hn(2);this.Fe.
Jc(true);this.Fe.R(U3);this.Fe.L(A.jb.Text);this.Fe.Aj(true);this.Fd.A0(0x3C);this.
Fd.H(Aai);this.Fd.Hn(2);this.Fd.Jc(true);this.Fd.R(U3);this.Fd.L(A.jb.Bm);this.Fd.
Aj(true);this.O1.A0(0x34);this.O1.H(Aai);this.O1.Jc(true);this.O1.A6(0x11);this.
O1.R(A.aaR(A.acf.ASs));this.O1.L(A.jb.Text);this.O1.Aj(true);this.O1.Z(false);this.
J(this.Y,0);this.J(this.FX,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.MK
,0);this.J(this.Fe,0);this.J(this.Fd,0);this.J(this.O1,0);this.Y.Em=[this,this.AAZ
];this.MK.Q7([this,this.AsR]);this.MK.S(A.aaL(A.fl.Af));this.Fe.Q7([this,this.AsR
]);this.Fe.S(A.aaL(A.fl.Af));this.Fd.Q7([this,this.AsR]);this.Fd.S(A.aaL(A.fl.Af
));this.O1.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JO;this.Y._Done(
);this.FX._Done();this.Ei._Done();this.Ey._Done();this.MK._Done();this.Fe._Done(
);this.Fd._Done();this.O1._Done();C.JO._Done.call(this);},_ReInit:function(){C.JO.
_ReInit.call(this);this.Y._ReInit();this.FX._ReInit();this.Ei._ReInit();this.Ey.
_ReInit();this.MK._ReInit();this.Fe._ReInit();this.Fd._ReInit();this.O1._ReInit(
);this.O1.R(A.aaR(A.acf.ASs));this.MK.S(A.aaL(A.fl.Af));this.Fe.S(A.aaL(A.fl.Af)
);this.Fd.S(A.aaL(A.fl.Af));this.O1.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(
D){var B;C.JO._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.O1)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMl={_Init:function(aArg){C.Aqh._Init.call(
this,aArg);this.__proto__=C.AMl;this.A4$=1;this.Rk.Cr(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqh._ReInit.call(this);this.Rk.Cr(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.ARg={ON:null,IR:null,H7:null,IP:null,GP:null,Al4:function(G){A.pe([this,this.
BAO],this);},BAO:function(G){A._GetAutoObject(C.A8).Cd(3);},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.ON._Init.call(this.ON={I:this},0);C.BX._Init.call(this.
IR={I:this},0);C.SS._Init.call(this.H7={I:this},0);C.AGQ._Init.call(this.IP={I:this
},0);C.Rb._Init.call(this.GP={I:this},0);this.__proto__=C.ARg;var B;this.Jd(A.aaR(
A.acf.A$W));this.IR.H(Ah3);this.IR.Aj(true);this.IR.T(A.aaR(A.acf.Language));this.
IR.A_A(100);this.H7.H(U2);this.H7.Aj(true);this.H7.T(A.aaR(A.acf.Date));this.H7.
Bi(true);this.IP.H(Aah);this.IP.Aj(true);this.IP.T(A.aaR(A.acf.Bs));this.GP.H(Ah2
);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGm));this.GP.Bi(true);
this.GP.Ar4(false);this.GP.A_I(true);this.J3(this.Y,-1);this.J3(this.Ay,-1);this.
J(this.IR,0);this.J(this.H7,0);this.J(this.IP,0);this.J(this.GP,0);this.IR.Zv(A.
aaL(A.fl.H3));this.IR.Zw(A.aaL(A.fl.H3));this.IR.Au([B=this.ON,B.B$,B.Cb]);this.
IR.CK(this.ON);this.H7.Ab1([B=this.H7,B.FV]);this.H7.Gs([this,this.D_,this.GS]);
this.H7.AkA(A.aaL(A.ach.Edit));this.H7.Ab7([B=A._GetAutoObject(A.Device.Helper),
B.U4,B.U7]);this.IP.Ab1([B=this.IP,B.FV]);this.IP.Gs([this,this.D_,this.GS]);this.
IP.AkA(A.aaL(A.ach.Edit));this.IP.Ab7([B=A._GetAutoObject(A.Device.Helper),B.U4,
B.U7]);this.GP.Ab1([B=this.GP,B.FV]);this.GP.Gs([this,this.D_,this.GS]);this.GP.
AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(A.Device.Device),B.ASV,B.A0D
]);},_Done:function(){this.__proto__=C.Cg;this.ON._Done();this.IR._Done();this.H7.
_Done();this.IP._Done();this.GP._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.ON._ReInit();this.IR._ReInit();this.H7._ReInit();
this.IP._ReInit();this.GP._ReInit();this.Jd(A.aaR(A.acf.A$W));this.IR.T(A.aaR(A.
acf.Language));this.H7.T(A.aaR(A.acf.Date));this.IP.T(A.aaR(A.acf.Bs));this.GP.T(
A.aaR(A.acf.AGm));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.ON
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aa1={Bg:null,FE:null,Am2:null,AmL:null,Sg:null,A7k:A.jV,KQ:A.jV,ARK:null,ARL:
null,ADs:null,CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.A3m],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);this.A3m(this);},E4:function(
G){var B;A.z$([this,this.A3m],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Zx:function(E){C.D9.Zx.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.Zx(E);},ATw:function(E){if(this.ARK===E)return;this.
ARK=E;if(!!this.Bg)this.Bg.N4(E);},ATx:function(E){if(this.ARL===E)return;this.ARL=
E;this.BpB(this);},ATm:function(E){if(this.ADs===E)return;this.ADs=E;A.pe([this,
this.BpA],this);},ArT:function(E){if(this.A7k===E)return;this.A7k=E;this.Sg.R(E);
},Dl:function(E){if(this.KQ===E)return;this.KQ=E;if(!!this.Bg)this.Bg.Dl(E);},AkU:
function(L6){A.ab5("%s",AZB);},AD7:function(){A.ab5("%s",Alg);return false;},AxC:
function(G){if(!!this.Bg)this.HP(this.Bg);this.Bg=A._NewObject(C.Gc,0);this.Bg.H(
Ath);this.Bg.Zt(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dl(this.KQ);this.Bg.
N4(this.ARK);this.Bg.Zx(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},BpB:function(
G){var B;if(!!this.FE)this.HP(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(
this.ARL,0))?B:null);this.FE.H(IX);this.J(this.FE,0);},BpA:function(G){var B;if(
!!this.Am2)this.HP(this.Am2);if(!!this.ADs&&this.AD7()){this.Am2=(C.I6.isPrototypeOf(
B=A._NewObject(this.ADs,0))?B:null);this.Am2.H(BD);this.Am2.Bi(false);this.J(this.
Am2,0);this.Sg.Z(false);}else this.Sg.Z(true);},A3m:function(G){this.AkU(A._GetAutoObject(
A.Device.Device).Bt);this.AxC(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AL._Init.call(this.AmL={I:this},0);C.CG._Init.call(this.Sg={I:this},
0);this.__proto__=C.Aa1;this.AmL.H(BD);this.AmL.L(A.jb.CJ);this.Sg.H(AHS);this.Sg.
A6(0x11);this.Sg.L(A.jb.Text);this.J(this.AmL,0);this.J(this.Sg,0);this.Sg.S(A.aaL(
A.fl.Kr));this.Sg.AZ(A.aaL(A.fl.HJ));},_Done:function(){this.__proto__=C.D9;this.
AmL._Done();this.Sg._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmL._ReInit();this.Sg._ReInit();this.Sg.S(A.aaL(A.fl.Kr));this.Sg.
AZ(A.aaL(A.fl.HJ));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmL)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Km={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
BcW],[B=A._GetAutoObject(A.Device.Device),B.AEG,B.AIW],0);A.pe([this,this.BcW],this
);},Du:function(){return 5;},Gl:function(aIndex){return this.AnimalListContentToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Zr(E);},BcW:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Km;this.BG.Set(0,0);this.BG.Set(1,14);this.BG.Set(2,
1);this.BG.Set(3,2);this.BG.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AnimalListContentToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARP={IR:null
,Y$:null,Zi:null,Zf:null,Zj:null,Za:null,Zd:null,Zg:null,Zh:null,Zc:null,ON:null
,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.BX._Init.call(this.IR={I:this
},0);C.Ni._Init.call(this.Y$={I:this},0);C.Ni._Init.call(this.Zi={I:this},0);C.Ni.
_Init.call(this.Zf={I:this},0);C.Ni._Init.call(this.Zj={I:this},0);C.Ni._Init.call(
this.Za={I:this},0);C.Ni._Init.call(this.Zd={I:this},0);C.Ni._Init.call(this.Zg={
I:this},0);C.Ni._Init.call(this.Zh={I:this},0);C.Ni._Init.call(this.Zc={I:this},
0);C.ON._Init.call(this.ON={I:this},0);this.__proto__=C.ARP;var B;this.Jd(A.aaR(
A.acf.Settings));this.IR.H(Ah3);this.IR.Aj(true);this.IR.T(A.aaR(A.acf.Language)
);this.IR.A_A(100);this.Y$.H(Ati);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.ACD));this.
Y$.Nl(16);this.Zi.H(Atj);this.Zi.Aj(true);this.Zi.T(A.aaR(A.acf.AHh));this.Zi.Nl(
22);this.Zf.H(Atk);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.Temperature));this.Zf.
Nl(17);this.Zj.H(AyD);this.Zj.Aj(true);this.Zj.T(A.aaR(A.acf.ACA));this.Zj.Nl(42
);this.Za.H(Aox);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.Device));this.Za.Nl(18);
this.Zd.H(Aox);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.Asp));this.Zd.Nl(19);this.
Zg.H(AZC);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.LinkTransponder));this.Zg.Nl(89
);this.Zh.H(AZD);this.Zh.Aj(true);this.Zh.T(A.aaR(A.acf.UnlinkTransponder));this.
Zh.Nl(95);this.Zc.H(Ayt);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.ACS));this.Zc.Nl(
76);this.J(this.IR,0);this.J(this.Y$,0);this.J(this.Zi,0);this.J(this.Zf,0);this.
J(this.Zj,0);this.J(this.Za,0);this.J(this.Zd,0);this.J(this.Zg,0);this.J(this.Zh
,0);this.J(this.Zc,0);this.IR.Zv(A.aaL(A.fl.H3));this.IR.Zw(A.aaL(A.fl.H3));this.
IR.Au([B=this.ON,B.B$,B.Cb]);this.IR.CK(this.ON);this.Y$.AR=[B=this.Y$,B.Np];this.
Zi.AR=[B=this.Zi,B.Np];this.Zf.AR=[B=this.Zf,B.Np];this.Zj.AR=[B=this.Zj,B.Np];this.
Za.AR=[B=this.Za,B.Np];this.Zd.AR=[B=this.Zd,B.Np];this.Zg.AR=[B=this.Zg,B.Np];this.
Zh.AR=[B=this.Zh,B.Np];this.Zc.AR=[B=this.Zc,B.Np];},_Done:function(){this.__proto__=
C.Cg;this.IR._Done();this.Y$._Done();this.Zi._Done();this.Zf._Done();this.Zj._Done(
);this.Za._Done();this.Zd._Done();this.Zg._Done();this.Zh._Done();this.Zc._Done(
);this.ON._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.IR._ReInit();this.Y$._ReInit();this.Zi._ReInit();this.Zf._ReInit();this.Zj.
_ReInit();this.Za._ReInit();this.Zd._ReInit();this.Zg._ReInit();this.Zh._ReInit(
);this.Zc._ReInit();this.ON._ReInit();this.Jd(A.aaR(A.acf.Settings));this.IR.T(A.
aaR(A.acf.Language));this.Y$.T(A.aaR(A.acf.ACD));this.Zi.T(A.aaR(A.acf.AHh));this.
Zf.T(A.aaR(A.acf.Temperature));this.Zj.T(A.aaR(A.acf.ACA));this.Za.T(A.aaR(A.acf.
Device));this.Zd.T(A.aaR(A.acf.Asp));this.Zg.T(A.aaR(A.acf.LinkTransponder));this.
Zh.T(A.aaR(A.acf.UnlinkTransponder));this.Zc.T(A.aaR(A.acf.ACS));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.IR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ON)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMy={EU:null,Init:function(aArg){this.EU.Ahw(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));},AUy:function(
){this.EU.Ae0(this.AO1());this.AaA=!this.EU.EZ.AY;},AiX:function(G){this.EU.Ahw(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag0)));this.AUy();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dl(A.aaR(A.acf.A8r));else this.Dl(A.aaR(A.acf.Arv));this.Am();},AO1:function(
){var Bz=A._NewObject(C.Aqv,0);var Qo=A._GetAutoObject(A.Device.Helper).AOi(A._GetAutoObject(
A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqr(Qo-(86400*this.
Mz));Bz.AnB(AZE);Bz.Q5([].concat(0,Bz.Gk.slice(1,4)));Bz.Q5(A.abN(Bz.Gk,(Qo-Dx)|
0));Bz.Q5(A.abP(Bz.Gk,3400));Bz.Q5([].concat(Bz.Gk.slice(0,3),4200));var Gh=A._GetAutoObject(
A.Device.Device).Bt.B_();Bz.AwV(Gh);Bz.Yj();if(Gh>0){var O=0;while(O<Gh){var ApY=
A._GetAutoObject(A.Device.Device).Bt.CF(O,7);var ApZ=A._GetAutoObject(A.Device.Device
).Bt.Hv(O,6)-Dx;if(ApY>0)Bz.Aqi(ApZ,ApY);O=O+1;}}return Bz;},_Init:function(aArg
){C.Lb._Init.call(this,aArg);C.AqZ._Init.call(this.EU={I:this},0);this.__proto__=
C.AMy;this.EU.H(AZF);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFm(C.AG4);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.Lb;this.EU._Done(
);C.Lb._Done.call(this);},_ReInit:function(){C.Lb._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.Lb._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMz={Z5:null,O4:null,AgU:null,AaA:false,Init:function(aArg){this.Z5.Ahw(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag0)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgU.Z(this.AaA);},CC:function(
G){var B;C.D9.CC.call(this,G);A.zX([this,this.AiX],[B=A._GetAutoObject(A.Device.
Helper),B.U4,B.U7],0);A.zV([this,this.AiX],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Amg],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0
);A.pe([this,this.Amg],this);},E4:function(G){var B;A.z$([this,this.AiX],[B=A._GetAutoObject(
A.Device.Helper),B.U4,B.U7],0);A.z9([this,this.AiX],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amg],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Amg:function(G){var Fy=A._NewObject(A.Device.Filter,
0);var HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CX(HX);A._GetAutoObject(A.Device.Device).Bt.Bk(Fy
);},AiX:function(G){this.Z5.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));this.BoU();this.Am();},BoU:function(
){var B;var Gh=A._GetAutoObject(A.Device.Device).Bt.B_();var K$=A._NewObject(C.Aqv
,0);var Vs=A._NewObject(C.Aqv,0);var Qo=A._GetAutoObject(A.Device.Helper).AOi(A.
_GetAutoObject(A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqr(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K$.Q5([].concat(0,K$.Gk.slice(1
,4)));K$.Q5(A.abN(K$.Gk,(Qo-Dx)|0));K$.Q5(A.abP(K$.Gk,0));K$.Q5([].concat(K$.Gk.
slice(0,3),150000));K$.AnB(AZG);Vs.Q5([].concat(0,Vs.Gk.slice(1,4)));Vs.Q5(A.abN(
Vs.Gk,(Qo-Dx)|0));Vs.Q5(A.abP(Vs.Gk,0));Vs.Q5([].concat(Vs.Gk.slice(0,3),1500));
Vs.AnB(Aoy);K$.AwV(Gh);K$.Yj();Vs.AwV(Gh);Vs.Yj();if(Gh>0){var O=0;var AaC=0;var
AAm=0;var AKg=0;var A2p=0;var BdA=true;while(O<Gh){var Ama=A._GetAutoObject(A.Device.
Device).Bt.CF(O,8);var AaP=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-Dx;if(Ama>
0){K$.Aqi(AaP,Ama);if(!A2p){A2p=AaP;AKg=Ama;}if(AAm>0){var LF=A._GetAutoObject(A.
Device.Helper).Mb(AAm,AaP);if(!!LF){var FW=A._GetAutoObject(A.acj.DU).AlB(LF,AaC
,Ama);if(BdA){Vs.Aqi(AAm,FW);BdA=false;}Vs.Aqi(AaP,FW);}}AaC=Ama;AAm=AaP;}O=O+1;
}var AdO=A.acf.Bhp;var FW=A._GetAutoObject(A.Device.Helper).Bjp(A2p,AAm,AKg,AaC);
AdO=A._GetAutoObject(A.Device.Helper).MI(AdO,O9,FW.toFixed());AdO=A._GetAutoObject(
A.Device.Helper).MI(AdO,Ayg,A._GetAutoObject(A.acj.DU).Aaw());this.O4.Im.R(AdO);
}this.AaA=!K$.AY;if(this.AaA)this.O4.Im.R(A.jV);(C.O4.isPrototypeOf(B=this.O4.EU
)?B:null).Anx([B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC]);this.Z5.Ae0(K$);
this.O4.Ae0(Vs);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqZ._Init.call(
this.Z5={I:this},0);C.AqZ._Init.call(this.O4={I:this},0);C.AkS._Init.call(this.AgU={
I:this},0);this.__proto__=C.AMz;this.Z5.H(AZH);this.Z5.T(A.aaR(A.acf.Afv));this.
Z5.AFm(C.AM7);this.O4.H(AZI);this.O4.T(A.aaR(A.acf.AHm));this.O4.AFm(C.O4);this.
AgU.H(U1);this.AgU.R(A.aaR(A.acf.Akm));this.J(this.Z5,0);this.J(this.O4,0);this.
J(this.AgU,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z5._Done(
);this.O4._Done();this.AgU._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z5._ReInit();this.O4._ReInit();this.AgU._ReInit();this.
Z5.T(A.aaR(A.acf.Afv));this.O4.T(A.aaR(A.acf.AHm));this.AgU.R(A.aaR(A.acf.Akm));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgU)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMw={
Avm:null,Avl:null,Axw:null,AuT:null,VE:null,Abo:null,Abn:null,Acl:null,Afi:null,
Init:function(aArg){this.VE.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));},A4S:function(G){this.VE.Ab8(this.
AuT);this.Abo.Ab8(this.Avm);this.Abn.Ab8(this.Avl);this.Acl.Ab8(this.Axw);},Axv:
function(){var Gh=A._GetAutoObject(A.Device.Device).Bt.B_();this.AuT=A._NewObject(
C.Ajv,0);this.Avm=A._NewObject(C.Ajv,0);this.Avl=A._NewObject(C.Ajv,0);this.Axw=
A._NewObject(C.Ajv,0);if(Gh>0){var O=Gh-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.Hv(O,6);this.AtB(this.AuT,O,3,D8);this.AtB(this.Avm,O,2,D8);this.
AtB(this.Avl,O,5,D8);this.AtB(this.Axw,O,4,D8);O=O-1;}}this.AaA=!(((this.AuT.AY+
this.Avl.AY)+this.Avm.AY)+this.Axw.AY);A.pe([this,this.A4S],this);},AtB:function(
A1p,Ad,A1o,Qi){var Alx=A._GetAutoObject(A.Device.Device).Bt.I9(Ad,A1o);if(!!Alx)
A1p.Ow(Alx,Qi);},Ab6:function(E){if(this.Mz===E)return;C.Lb.Ab6.call(this,E);if(
!!this.VE)this.VE.Ab6(E);if(!!this.Abo)this.Abo.Ab6(E);if(!!this.Abn)this.Abn.Ab6(
E);if(!!this.Acl)this.Acl.Ab6(E);this.Afi.Ab6(E);},AiX:function(G){this.VE.Ahw(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag0)));this.Axv();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dl(A.aaR(A.acf.BkO));else this.Dl(A.aaR(A.acf.Anp));this.Am();},_Init:function(
aArg){C.Lb._Init.call(this,aArg);C.AhB._Init.call(this.VE={I:this},0);C.AhB._Init.
call(this.Abo={I:this},0);C.AhB._Init.call(this.Abn={I:this},0);C.AhB._Init.call(
this.Acl={I:this},0);C.AUv._Init.call(this.Afi={I:this},0);this.__proto__=C.AMw;
this.Dl(A.aaR(A.acf.Anp));this.VE.H(AZJ);this.VE.R(A.aaR(A.acf.AGr));this.Abo.H(
AZK);this.Abo.R(A.aaR(A.acf.Feed));this.Abn.H(AZL);this.Abn.R(A.aaR(A.acf.AGt));
this.Acl.H(AZM);this.Acl.R(A.aaR(A.acf.AGu));this.Afi.H(AZN);this.J(this.VE,-1);
this.J(this.Abo,-1);this.J(this.Abn,-1);this.J(this.Acl,-1);this.J(this.Afi,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.Lb;this.VE._Done();this.Abo.
_Done();this.Abn._Done();this.Acl._Done();this.Afi._Done();C.Lb._Done.call(this);
},_ReInit:function(){C.Lb._ReInit.call(this);this.VE._ReInit();this.Abo._ReInit(
);this.Abn._ReInit();this.Acl._ReInit();this.Afi._ReInit();this.Dl(A.aaR(A.acf.Anp
));this.VE.R(A.aaR(A.acf.AGr));this.Abo.R(A.aaR(A.acf.Feed));this.Abn.R(A.aaR(A.
acf.AGt));this.Acl.R(A.aaR(A.acf.AGu));},_Mark:function(D){var B;C.Lb._Mark.call(
this,D);if((B=this.Avm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avl)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMx={EU:null,WM:null,Aek:null,A2M:false,Init:function(aArg){this.WM.Ahw(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag0)));},Bl:function(aSize){C.Lb.Bl.call(this,aSize);this.Aek.H(this.EU.M);},Ai:
function(Ae){C.Lb.Ai.call(this,Ae);var BCl=!this.AaA&&this.A2M;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aek.R(A.aaR(A.acf.A8r));else this.
Aek.R(A.aaR(A.acf.Arv));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dl(A.aaR(
A.acf.BkP));else this.Dl(A.aaR(A.acf.BkQ));this.Aek.Z(BCl);},AiX:function(G){this.
WM.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.Ag0)));this.AaA=true;this.A2M=true;this.Axv();this.AUy();this.
Am();},AUy:function(){this.EU.Ae0(this.AO1());if(!!this.EU.EZ&&(this.EU.EZ.AY>0)
){this.AaA=false;this.A2M=false;}},AO1:function(){var Bz=A._NewObject(C.Aqv,0);var
Qo=A._GetAutoObject(A.Device.Helper).AOi(A._GetAutoObject(A.Device.Helper).Dv());
var Dx=A._GetAutoObject(A.Device.Helper).Aqr(Qo-(86400*this.Mz));Bz.AnB(AZO);Bz.
Q5([].concat(0,Bz.Gk.slice(1,4)));Bz.Q5(A.abN(Bz.Gk,(Qo-Dx)|0));Bz.Q5(A.abP(Bz.Gk
,3400));Bz.Q5([].concat(Bz.Gk.slice(0,3),4200));var Gh=A._GetAutoObject(A.Device.
Device).Bt.B_();Bz.AwV(Gh);Bz.Yj();if(Gh>0){var O=0;while(O<Gh){var ApY=A._GetAutoObject(
A.Device.Device).Bt.CF(O,7);var ApZ=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-
Dx;if(ApY>0)Bz.Aqi(ApZ,ApY);O=O+1;}}return Bz;},BjE:function(){var Gh=A._GetAutoObject(
A.Device.Device).Bt.B_();if(Gh>0){var Bgh=A._NewObject(C.Ajv,0);var O=Gh-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E3(O,A._GetAutoObject(A.Device.Device
).Bt);var LT=A._GetAutoObject(A.Device.Helper).ADg(D3);if(!!LT)Bgh.Ow(LT,D3.Timestamp
);O=O-1;}return Bgh;}else return null;},Axv:function(){this.WM.Ab8(this.BjE());if(
!!this.WM.N7&&(this.WM.N7.AY>0))this.AaA=false;},_Init:function(aArg){C.Lb._Init.
call(this,aArg);C.AqZ._Init.call(this.EU={I:this},0);C.AhB._Init.call(this.WM={I:
this},0);C.AkS._Init.call(this.Aek={I:this},0);this.__proto__=C.AMx;this.EU.H(Ath
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFm(C.AG4);this.WM.H(AIE);this.WM.
R(A.aaR(A.acf.Rating));this.Aek.H(Ath);this.J(this.EU,-2);this.J(this.WM,-2);this.
J(this.Aek,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Lb;this.EU._Done(
);this.WM._Done();this.Aek._Done();C.Lb._Done.call(this);},_ReInit:function(){C.
Lb._ReInit.call(this);this.EU._ReInit();this.WM._ReInit();this.Aek._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WM.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.Lb._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WT={Q:null,Gx:null,Gy:null
,QN:null,AM:0,Gq:0,F$:100,FI:0,Init:function(aArg){},I3:function(G){this.FI=1;C.
Eg.I3.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QN.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QN.Z(this.Gq!==
this.F$);this.QN.L(this.V.AQ);if((this.FI===4)||(this.FI===5))this.QN.L(A.jb.E1);
},Al5:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AyX],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qu:function(G){if(this.FI===5)A.pe([this,this.
AyX],this);if(this.FI===4)A.pe([this,this.AyY],this);if(this.FI===1)A.pe(this.AR
,this);this.FI=0;this.Am();},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcW:function(s){this.C5(s);},Au:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcW],E,0);if(!!E)A.pe([this,this.AcW],this);},Al6:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.AyY],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},Kg:function(G){this.FI=0;},AyY:function(s){this.Kg(s);},Kb:function(G){this.
FI=0;},AyX:function(s){this.Kb(s);},Bx:function(E){if(E<this.Gq)E=this.Gq;if(E>this.
F$)E=this.F$;if(this.AM===E)return;this.AM=E;this.Am();},Ga:function(E){if(this.
Gq===E)return;this.Gq=E;this.Am();},EV:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BL._Init.call(
this.Gx={I:this},0);A.Core.BL._Init.call(this.Gy={I:this},0);A.acg.Ap._Init.call(
this.QN={I:this},0);this.__proto__=C.WT;this.H(K1);this.Gx.Filter=5;this.Gy.Filter=
4;this.Background.H(K1);this.V.H(AcN);this.V.R(Ly);this.QN.H(Alk);this.J(this.QN
,0);this.Gx.BM=[this,this.Al5];this.Gx.D1=[this,this.Al5];this.Gy.BM=[this,this.
Al6];this.Gy.D1=[this,this.Al6];this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak
));this.V.Cr(null);this.QN.Ax(A.aaL(A.ach.AMU));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gx._Done();this.Gy._Done();this.QN._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gx._ReInit();this.Gy.
_ReInit();this.QN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUV={AC:null,CM:null,HN:
null,Bl:function(aSize){C.WT.Bl.call(this,aSize);this.CM.H([this.QN.M[2],this.QN.
M[1],this.M[2],this.QN.M[3]]);},Ai:function(Ae){C.WT.Ai.call(this,Ae);this.CM.AbF(
0,this.CM.AY-1);if(this.Gq!==this.F$)this.QN.Z(true);},Init:function(aArg){},C5:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},Kg:function(G){var F;var BP=this.AM;C.WT.Kg.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(
this.AM)));A.abo(this.Q,0);}},Kb:function(G){var F;var BP=this.AM;C.WT.Kb.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var QA=0;if(this.Gq
!==this.F$){if(E<this.Gq){E=this.F$;QA=-this.CM.GO*this.CM.AY;}if(E>this.F$){E=this.
Gq;QA=this.CM.GO;}}C.WT.Bx.call(this,E);if(!!QA)this.CM.Gb(QA);this.CM.GT(this.AM
);this.CM.HI(this.CM.Gt,true,this.HN,null);},Hm:function(G){var B;var Gg=this.CM.
G6;var CA=(C.CG.isPrototypeOf(B=this.CM.Cj)?B:null);if(!CA)return;CA.S(this.V.B7
);CA.AZ(A.aaL(A.fl.Af));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));else CA.
R(Xh);CA.H(A.abK(CA.M,[(B=this.CM.M)[2]-B[0],this.CM.GO]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Ga(0);this.EV(this.AC.Du()-1);this.CM.
JB(this.AC.Du());this.CM.AbF(0,this.CM.AY-1);}},_Init:function(aArg){C.WT._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gm._Init.call(this.
HN={I:this},0);this.__proto__=C.AUV;this.H(K1);this.QN.H(AZP);this.CM.Ae8(40);this.
CM.N4(C.CG);this.HN.WJ(23);this.HN.HO(1);this.HN.Fr(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.CM.Hm=[this,this.Hm];this.Init(
aArg);},_Done:function(){this.__proto__=C.WT;this.CM._Done();this.HN._Done();C.WT.
_Done.call(this);},_ReInit:function(){C.WT._ReInit.call(this);this.CM._ReInit();
this.HN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WT._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.R0={ALF:0
,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.AHm));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kz((A._GetAutoObject(A.Device.Converter).Ak$(this.ALF
)+CR)+A._GetAutoObject(A.acj.DU).Af4());else this.Kz(A.aaR(A.acf.Unknown));},Ch:
function(G){C.FA.Ch.call(this,G);this.ALF=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.FA._Init.call(this,aArg);this.__proto__=C.R0;},_className:"Application::AnimalInfoItemWeightGain"
};C.APE={Bc:null,Df:null,Init:function(aArg){var B;A.zX([this,this.Nt],[B=A._GetAutoObject(
A.Device.Device),B.AEF,B.AIV],0);},DX:function(G){C.IM.DX.call(this,G);this.Df.Ax(
A._GetAutoObject(A.Device.Converter).BhE(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IM._Init.call(this,aArg);A.acg.C8._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Df={I:this},0);this.__proto__=C.APE;this.Bc.DC(
AyE);this.Bc.DM(AyF);this.Bc.L(A.jb.Bc);this.Df.H(AZQ);this.Df.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Df,0);this.Df.Ax(A.aaL(A.ach.AjW));this.Init(aArg);},_Done:
function(){this.__proto__=C.IM;this.Bc._Done();this.Df._Done();C.IM._Done.call(this
);},_ReInit:function(){C.IM._ReInit.call(this);this.Bc._ReInit();this.Df._ReInit(
);},_Mark:function(D){var B;C.IM._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANH={ZN:null,KD:null,Mp:null,Timer:null,ACr:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZN.R(A._GetAutoObject(A.Device.Helper).MI(A.aaR(A.acf.Brd),O9,this.ACr.
toFixed()));},CC:function(G){this.Timer.Ar(true);},E4:function(G){this.Timer.Ar(
false);},BBA:function(G){if(this.ACr>1){this.ACr=this.ACr-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).AxD();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZN={I:this},0);A.acg.Text.
_Init.call(this.KD={I:this},0);A.acg.Ap._Init.call(this.Mp={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANH;this.Background.L(A.jb.CU
);this.N.Z(true);this.ZN.H(AZR);this.ZN.KU(true);this.ZN.R(A.jV);this.ZN.L(A.jb.
Text);this.KD.H(AZS);this.KD.KU(true);this.KD.R(A.aaR(A.acf.A5J));this.KD.L(A.jb.
Text);this.Mp.H(AIF);this.J(this.ZN,0);this.J(this.KD,0);this.J(this.Mp,0);this.
ZN.S(A.aaL(A.fl.Af));this.KD.S(A.aaL(A.fl.Af));this.Mp.Ax(A.aaL(A.ach.ABY));this.
Timer.ME=[this,this.BBA];},_Done:function(){this.__proto__=C.AB;this.ZN._Done();
this.KD._Done();this.Mp._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZN._ReInit();this.KD._ReInit();this.Mp._ReInit(
);this.Timer._ReInit();this.KD.R(A.aaR(A.acf.A5J));this.ZN.S(A.aaL(A.fl.Af));this.
KD.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANo={KD:null,AmC:null
,QG:null,CQ:function(){this.Am();},Ai:function(Ae){C.Ad$.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa6<=10)this.KD.R(A.aaR(A.acf.BhQ));else this.KD.R(A.aaR(A.acf.
A5K));},_Init:function(aArg){C.Ad$._Init.call(this,aArg);A.acg.Text._Init.call(this.
KD={I:this},0);A.acg.Ap._Init.call(this.AmC={I:this},0);C.CG._Init.call(this.QG={
I:this},0);this.__proto__=C.ANo;this.ST.H(AZT);this.Mp.H(AZU);this.KD.H(AZV);this.
KD.KU(true);this.KD.L(A.jb.Text);this.AmC.H(AIF);this.QG.H(AZW);this.QG.Z(true);
this.QG.R(A.aaR(A.acf.AUw));this.QG.L(A.jb.Text);this.J(this.KD,0);this.J(this.AmC
,0);this.J(this.QG,0);this.KD.S(A.aaL(A.fl.Af));this.AmC.Ax(A.aaL(A.ach.ABY));this.
QG.S(A.aaL(A.fl.Af));this.QG.AZ(A.aaL(A.fl.Ak));this.QG.Cr(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Ad$;this.KD._Done();this.AmC._Done();this.QG._Done();
C.Ad$._Done.call(this);},_ReInit:function(){C.Ad$._ReInit.call(this);this.KD._ReInit(
);this.AmC._ReInit();this.QG._ReInit();this.QG.R(A.aaR(A.acf.AUw));this.KD.S(A.aaL(
A.fl.Af));this.QG.S(A.aaL(A.fl.Af));this.QG.AZ(A.aaL(A.fl.Ak));this.QG.Cr(A.aaL(
A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.Ad$._Mark.call(this,D);if((B=this.
KD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmC)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMj={_Init:function(aArg){C.I7._Init.call(this,aArg);this.__proto__=C.AMj;this.
RT.Ar(false);this.RT.Aj(false);this.RT.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVX={_Init:function(aArg){C.I7._Init.call(this,aArg);this.__proto__=C.AVX;this.
S9.Ar(false);this.S9.Aj(false);this.S9.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AO8={DX:function(G){C.Kt.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad0(5));},_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=
C.AO8;},_className:"Application::HeaderControlListFilter"};C.APG={DX:function(G){
C.Kt.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad0(6));},_Init:
function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.APG;},_className:"Application::HeaderWatchListFilter"
};C.APK={D0:null,Nb:null,_Init:function(aArg){C.T2._Init.call(this,aArg);C.CG._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.Nb={I:this},0);this.__proto__=
C.APK;this.D0.H(Aou);this.D0.R(A.aaR(A.acf.A6f));this.D0.L(A.jb.Text);this.Nb.H(
AZX);this.Nb.L(A.jb.Text);this.Nb.A6(0x12);this.J(this.D0,-2);this.J(this.Nb,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(A.aaL(A.fl.Bh));this.Nb.Ax(A.aaL(A.ach.ADK)
);},_Done:function(){this.__proto__=C.T2;this.D0._Done();this.Nb._Done();C.T2._Done.
call(this);},_ReInit:function(){C.T2._ReInit.call(this);this.D0._ReInit();this.Nb.
_ReInit();this.D0.R(A.aaR(A.acf.A6f));this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.T2._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.ANj={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(
!!this.AX){var Oo=this.AX.H4(Ad,8);var BC9=this.AX.Sm(Ad,21);this.Abg.R(A._GetAutoObject(
A.Device.Helper).Mb(BC9,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Ss.Z(Oo);this.Am();}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=
C.ANj;},_className:"Application::CalfListWatchItem"};C.T2={Ag$:null,Ahb:null,_Init:
function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag$={I:this},
0);A.acg.Ap._Init.call(this.Ahb={I:this},0);this.__proto__=C.T2;this.Ag$.H(AZY);
this.Ag$.L(A.jb.Text);this.Ag$.A6(0x12);this.Ahb.H(AZZ);this.Ahb.L(A.jb.Text);this.
Ahb.A6(0x12);this.J3(this.DS,-1);this.J(this.Ag$,0);this.J(this.Ahb,0);this.Ag$.
Ax(A.aaL(A.ach.Arc));this.Ahb.Ax(A.aaL(A.ach.Ag7));},_Done:function(){this.__proto__=
C.De;this.Ag$._Done();this.Ahb._Done();C.De._Done.call(this);},_ReInit:function(
){C.De._ReInit.call(this);this.Ag$._ReInit();this.Ahb._ReInit();},_Mark:function(
D){var B;C.De._Mark.call(this,D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqv={Gk:A.wg,OJ:A.wf,Q5:function(E){if(A.aaY(this.Gk,E))return;this.Gk=E;},AnB:
function(E){if(A.aaX(this.OJ,E))return;this.OJ=E;},_Init:function(aArg){A.acv.ACq.
_Init.call(this,aArg);this.__proto__=C.Aqv;},_className:"Application::BoundCoordList"
};C.AjD={T7:null,Wz:null,T8:null,WA:null,Ss:null,Zk:null,Abg:null,AP:null,A$:null
,Ea:null,Lv:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T7.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wz.H(this.T7.M);this.A$.H([this.T7.
M[2]-1,0,this.T7.M[2]+1,aSize[1]]);this.T8.H([this.T7.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.WA.H(this.T8.M);this.Ea.H([this.T8.M[2]-1,0,this.T8.M[2]+1,aSize[
1]]);this.Ss.H([this.T8.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zk.H(this.Ss.
M);this.Lv.H([this.Ss.M[2]-1,0,this.Ss.M[2]+1,aSize[1]]);this.Abg.H([this.Ss.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K_=this.V.AQ;
this.T7.AE7(K_);this.Wz.L(K_);this.T8.AE7(K_);this.WA.L(K_);this.Ss.AE7(K_);this.
Zk.L(K_);this.Abg.L(K_);this.Zk.Z(!this.Ss.Fq());},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;var Mj=this.AX.CF(Ad,1);var Ie=this.AX.AmX(Ad,14);var Auu=this.AX.CF(
Ad,5);var LT=this.AX.I9(Ad,13);this.T(Mj.toFixed());if(!!LT){this.T7.Z(true);this.
T7.AwL(A._GetAutoObject(A.acj.Assessment).BdI(LT));this.Wz.Z(false);}else{this.T7.
Z(false);this.Wz.Z(true);}if(Auu>0){this.T8.Z(true);this.T8.AwL(A._GetAutoObject(
A.acj.Assessment).BdI(A._GetAutoObject(A.Device.Converter).AsK(Ie,Auu)));this.WA.
Z(false);}else{this.T8.Z(false);this.WA.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kn._Init.call(this.T7={I:this},0);A.acg.Text._Init.
call(this.Wz={I:this},0);C.Kn._Init.call(this.T8={I:this},0);A.acg.Text._Init.call(
this.WA={I:this},0);C.Kn._Init.call(this.Ss={I:this},0);A.acg.Text._Init.call(this.
Zk={I:this},0);A.acg.Text._Init.call(this.Abg={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.
Ea={I:this},0);A.acg.AL._Init.call(this.Lv={I:this},0);this.__proto__=C.AjD;this.
Wz.H(AZ0);this.Wz.R(Aov);this.WA.H(Aow);this.WA.R(Aov);this.Ss.AwL(A.jb.Ri);this.
Zk.H(Aow);this.Zk.R(Rp);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lv.L(A.jb.Bc);this.J(this.T7,0);this.J(this.Wz,0);this.J(this.T8,0);this.J(
this.WA,0);this.J(this.Ss,0);this.J(this.Zk,0);this.J(this.Abg,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Lv,0);this.Wz.S(A.aaL(A.fl.Af
));this.WA.S(A.aaL(A.fl.Af));this.Zk.S(A.aaL(A.fl.Af));this.Abg.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.T7._Done();this.Wz.
_Done();this.T8._Done();this.WA._Done();this.Ss._Done();this.Zk._Done();this.Abg.
_Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Lv._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.T7._ReInit();this.Wz.
_ReInit();this.T8._ReInit();this.WA._ReInit();this.Ss._ReInit();this.Zk._ReInit(
);this.Abg._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.
Lv._ReInit();this.Wz.S(A.aaL(A.fl.Af));this.WA.S(A.aaL(A.fl.Af));this.Zk.S(A.aaL(
A.fl.Af));this.Abg.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.T7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lv)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pw:null,Anh:null
,EZ:null,DR:null,Aro:0,Arp:0,A7J:0,AmO:0,AqI:0,Init:function(aArg){this.ATh(6);this.
ATi(8);this.ATt(A.jb.AV);this.ATu(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.Bmx([this.DR.Abc[0],(B=this.DR.M)[3]-B[1]]);this.WN(this);},ATg:function(
E){if(this.Pw===E)return;this.Pw=E;this.DR.ATg(E);},ATu:function(E){if(this.Arp===
E)return;this.Arp=E;this.DR.ATu(E);},ATt:function(E){if(this.Aro===E)return;this.
Aro=E;this.DR.ATt(E);this.DR.BmC(E);},WN:function(G){var B;while(!!this.DR.Ah)this.
HP(this.DR.Ah);if(!this.EZ)return;this.DR.AnB([((this.EZ.OJ[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gk[2]-this.EZ.Gk[0]))|0,this.DR.OJ[1]]);this.DR.AnB([this.DR.OJ[0]
,((this.EZ.OJ[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gk[3]-this.EZ.Gk[1]))|0]);var O;
var Di=this.DR.OJ[1];var D8;var A43=this.EZ.Gk[1];var BkN=(((B=this.DR.M)[3]-B[1
])/this.DR.OJ[1])|0;for(O=0;O<BkN;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Di))-(this.Anh.Ascent+this.Anh.Descent))+2,((B=this.M)[2]-
B[0])-this.Arp,(((B=this.M)[3]-B[1])-(O*Di))+2]);D8.L(this.A7J);D8.S(this.Anh);D8.
A6(0x24);if(O>0)D8.R(this.AJT(A43));else D8.R(this.AKq());A43=A43+this.EZ.OJ[1];
this.J(D8,0);}},BGP:function(s){this.WN(s);},Bns:function(E){if(this.Anh===E)return;
this.Anh=E;this.Am();},Azw:function(A06){var B;if(!this.EZ||(this.EZ.Gk[3]===this.
EZ.Gk[1]))return 0;return(((A06-this.EZ.Gk[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gk[
3]-this.EZ.Gk[1]))|0;},Ae0:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.Ae0(null);else{var Bz=A._NewObject(A.acv.ACq,0);Bz.AwV(this.EZ.AEl);Bz.Yj();var
JD=E.AlL;while(!!JD){Bz.Aqi(this.By9(JD.P7),this.By_(JD.P8));JD=JD.Ah;}this.DR.Ae0(
Bz);this.Am();}},By9:function(Bxl){var B;if(!this.EZ||(this.EZ.Gk[2]===this.EZ.Gk[
0]))return 0;return((Bxl-this.EZ.Gk[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gk[2]-this.
EZ.Gk[0]);},By_:function(A06){var B;if(!this.EZ||(this.EZ.Gk[3]===this.EZ.Gk[1])
)return 0;return((A06-this.EZ.Gk[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gk[3]-this.EZ.
Gk[1]);},AJT:function(AoT){return AoT.toFixed();},AKq:function(){return A.jV;},ATi:
function(E){if(this.AmO===E)return;this.AmO=E;this.DR.ATi(E);},ATh:function(E){if(
this.AqI===E)return;this.AqI=E;this.DR.ATh(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIG);this.A7J=A.jb.Text;this.DR.A0(0x3F);this.DR.H(AIG);this.DR.BnS(AIH);this.
DR.Bml(A.jb.Ri);this.DR.Bm$(A.jb.Bc);this.DR.Boc(A.jb.Ri);this.J(this.DR,0);this.
Pw=A.aaL(A.acv.ACJ);this.Anh=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.Bns(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pw)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Anh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AM7={AJT:function(AoT){return A._GetAutoObject(
A.Device.Converter).Ax6(AoT,0);},AKq:function(){return A._GetAutoObject(A.acj.DU
).Af4();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AM7;}
,_className:"Application::BodyWeightGraph"};C.O4={JP:null,Ey:null,Ei:null,FX:null
,IJ:null,IK:null,Init:function(aArg){this.ATg(null);},WN:function(G){var B;var F;
C.DR.WN.call(this,G);var AKV=0;var ALK=0;if(!!this.JP){AKV=this.Azw(A._GetAutoObject(
A.Device.Helper).ADf((F=this.JP,F[1].call(F[0]))));ALK=this.Azw(A._GetAutoObject(
A.Device.Helper).ADe((F=this.JP,F[1].call(F[0]))));}this.FX.H(A.abP(this.FX.M,0)
);this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.M)[3]-B[1])-ALK));this.IJ.H(
A.abO(this.IJ.M,(this.FX.M[3]-((((B=this.IJ.M)[3]-B[1])/2)|0))-2));this.Ei.H(A.abP(
this.Ei.M,this.FX.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-
B[1])-AKV));this.IK.H(A.abO(this.IK.M,(this.Ei.M[3]-((((B=this.IK.M)[3]-B[1])/2)|
0))+2));this.Ey.H(A.abP(this.Ey.M,this.Ei.M[3]));this.Ey.H([].concat(this.Ey.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJT:function(AoT){return A._GetAutoObject(A.Device.Converter
).S_(AoT,0,true);},AKq:function(){return A._GetAutoObject(A.acj.DU).Aaw();},Anx:
function(E){if(A.aaZ(this.JP,E))return;if(!!this.JP)A.z$([this,this.AiP],this.JP
,0);this.JP=E;if(!!E)A.zX([this,this.AiP],E,0);if(!!E)A.pe([this,this.AiP],this);
},AiP:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.
acg.AL._Init.call(this.FX={I:this},0);A.acg.AL._Init.call(this.IJ={I:this},0);A.
acg.AL._Init.call(this.IK={I:this},0);this.__proto__=C.O4;this.Ey.A0(0xD);this.Ey.
H(Aac);this.Ey.L(A.jb.Gj);this.Ei.A0(0xD);this.Ei.H(Te);this.Ei.L(A.jb.H_);this.
FX.A0(0xD);this.FX.H(Aab);this.FX.L(A.jb.E1);this.IJ.A0(0xD);this.IJ.H(Aae);this.
IJ.Awz(A.jb.H_);this.IJ.AwA(A.jb.H_);this.IJ.AwC(A.jb.E1);this.IJ.AwB(A.jb.E1);this.
IK.A0(0xD);this.IK.H(Xf);this.IK.Awz(A.jb.Gj);this.IK.AwA(A.jb.Gj);this.IK.AwC(A.
jb.H_);this.IK.AwB(A.jb.H_);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FX
,-1);this.J(this.IJ,-1);this.J(this.IK,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FX._Done();this.IJ._Done();this.
IK._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ey._ReInit();this.Ei._ReInit();this.FX._ReInit();this.IJ._ReInit();this.IK._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JP)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqZ={EU:null,EZ:null,Sb:null,Im:
null,Bc:null,AxN:A.jV,DK:A.jV,AO3:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.Sb.
H([30,0,aSize[0]-2,30]);this.Im.H(this.Sb.M);if(!!this.EU)this.EU.H([30,this.Sb.
M[3],aSize[0],this.Bc.M[1]]);},Ahw:function(E){if(this.AxN===E)return;this.AxN=E;
this.Im.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.Sb.R(E);},AFm:
function(E){if(this.AO3===E)return;this.AO3=E;this.Bpy(this);},Bpy:function(G){var
B;if(!!this.EU)this.HP(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AO3,0))?B:null);if(!!this.EU){this.EU.H(AZ1);this.EU.Ae0(this.EZ);this.J(this.EU
,0);}},Ae0:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.Ae0(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Sb={I:this},0);A.acg.Text._Init.call(this.Im={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqZ;this.H(AcP);this.Ar(false);this.Sb.H(AII);this.
Sb.A6(0x11);this.Sb.R(Ly);this.Sb.L(A.jb.Text);this.Im.A6(0x14);this.Im.R(A.jV);
this.Im.L(A.jb.Text);this.Bc.H(AZ2);this.Bc.L(A.jb.Bc);this.J(this.Sb,0);this.J(
this.Im,0);this.J(this.Bc,0);this.Sb.S(A.aaL(A.fl.Ak));this.Im.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Sb._Done();this.
Im._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.Sb._ReInit();this.Im._ReInit();this.Bc._ReInit();this.
Sb.S(A.aaL(A.fl.Ak));this.Im.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Im)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMF={AgD:null,GT:function(E
){var F;C.Gc.GT.call(this,E);if(!!this.AgD)(F=this.AgD,F[2].call(F[0],E));},A9V:
function(E){if(A.aaZ(this.AgD,E))return;if(!!this.AgD)A.z$([this,this.A3n],this.
AgD,0);this.AgD=E;if(!!E)A.zX([this,this.A3n],E,0);if(!!E)A.pe([this,this.A3n],this
);},A3n:function(G){var F;if(!this.AgD)return;(F=this.AgD,F[2].call(F[0],this.FN(
)));},_Init:function(aArg){C.Gc._Init.call(this,aArg);this.__proto__=C.AMF;},_Mark:
function(D){var B;C.Gc._Mark.call(this,D);if((B=this.AgD)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUv={Rg:null
,P2:null,XZ:null,X0:null,Mz:0,CQ:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Rg.H(A.abI(this.Rg.M,(((B=this.M)[3]-B[1])/2)|
0));this.P2.H(A.abI(this.P2.M,(((B=this.M)[3]-B[1])/2)|0));this.Rg.H(A.abO(this.
Rg.M,(((B=this.M)[3]-B[1])/2)|0));this.P2.H(A.abO(this.P2.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rg.R(A._GetAutoObject(
A.Device.Helper).MI(A.aaR(A.acf.BkH),O9,this.Mz.toFixed()));},Ab6:function(E){if(
this.Mz===E)return;this.Mz=E;this.BB$(this);},BB$:function(G){var B;var AJ0=(((B=
this.M)[2]-B[0])/this.Mz)|0;this.XZ.H(A.abM(this.XZ.M,(((B=this.M)[2]-B[0])-(this.
Mz*AJ0))+(((AJ0/2)-(((B=this.XZ.M)[2]-B[0])/2))|0)));this.X0.H(A.abM(this.X0.M,(((
B=this.M)[2]-B[0])-AJ0)+(((AJ0/2)-(((B=this.X0.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rg={
I:this},0);A.acg.Text._Init.call(this.P2={I:this},0);A.acg.Text._Init.call(this.
XZ={I:this},0);A.acg.Text._Init.call(this.X0={I:this},0);this.__proto__=C.AUv;this.
H(BD);this.Rg.H(AZ3);this.Rg.Hn(5);this.Rg.A6(0x11);this.Rg.L(A.jb.Text);this.P2.
H(AIJ);this.P2.Hn(5);this.P2.A6(0x14);this.P2.R(A.aaR(A.acf.AhT));this.P2.L(A.jb.
Text);this.XZ.H(AZ4);this.XZ.R(AIK);this.XZ.L(A.jb.Text);this.X0.H(AZ5);this.X0.
R(AIK);this.X0.L(A.jb.Text);this.J(this.Rg,0);this.J(this.P2,0);this.J(this.XZ,0
);this.J(this.X0,0);this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.XZ.
S(A.aaL(A.fl.H3));this.X0.S(A.aaL(A.fl.H3));},_Done:function(){this.__proto__=A.
Core.P;this.Rg._Done();this.P2._Done();this.XZ._Done();this.X0._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rg._ReInit(
);this.P2._ReInit();this.XZ._ReInit();this.X0._ReInit();this.P2.R(A.aaR(A.acf.AhT
));this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.CQ();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rg)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.P2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.Lb={V9:null,AjJ:null,KQ:A.jV,Mz:0,AaA:false,Init:function(aArg){var A14=A._NewObject(
C.Ko,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RQ()<A14.
C7(O))A14.Ano=O+1;this.V9.CK(A14);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjJ.
Z(this.AaA);if(this.AaA)this.Bb(null);else this.Bb(this.V9);},CC:function(G){var
B;var F;C.D9.CC.call(this,G);if(!(F=this.V9.Q,F[1].call(F[0])))(F=this.V9.Q,F[2].
call(F[0],this.V9.AC.C7(0)));A.zX([this,this.AI_],[B=A._GetAutoObject(A.Device.Helper
),B.U4,B.U7],0);A.zV([this,this.AI_],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amg],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.pe([this
,this.Amg],this);},E4:function(G){var B;A.z$([this,this.AI_],[B=A._GetAutoObject(
A.Device.Helper),B.U4,B.U7],0);A.z9([this,this.AI_],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amg],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Zx:function(E){if(A.aa0(this.AR,E))return;C.D9.Zx.call(
this,E);this.V9.AR=E;},Ab6:function(E){if(this.Mz===E)return;this.Mz=E;A.pe([this
,this.Amg],this);},BwV:function(Aq){this.Ab6(Aq);},AiX:function(G){},AI_:function(
s){this.AiX(s);},Dl:function(E){if(this.KQ===E)return;this.KQ=E;this.AjJ.R(E);},
Amg:function(G){var Fy=A._NewObject(A.Device.Filter,0);var AzF=A._NewObject(A.Device.
UInt32FilterCriterion,0);AzF.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhT()-((this.Mz-1)*86400))-1,true);Fy.CX(AzF);var HX=A._NewObject(A.Device.Int32FilterCriterion
,0);HX.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CX(HX);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fy);},BlF:function(){return this.Mz;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUV._Init.call(this.V9={I:this},0);C.AkS._Init.call(
this.AjJ={I:this},0);this.__proto__=C.Lb;this.V9.H(BD);this.AjJ.H(U1);this.J(this.
V9,0);this.J(this.AjJ,0);this.V9.Au([this,this.BlF,this.BwV]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V9._Done();this.AjJ._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V9._ReInit();this.AjJ.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V9)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANO={We:null,YQ:null,RatingMode:null,PH:null,_Init:
function(aArg){C.Cg._Init.call(this,aArg);C.Ni._Init.call(this.We={I:this},0);C.
BX._Init.call(this.YQ={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Is._Init.call(this.PH={I:this},0);this.__proto__=C.ANO;var B;this.Hj.R(A.
aaR(A.acf.ACA));this.Jd(A.aaR(A.acf.A5$));this.We.H(Atl);this.We.Aj(true);this.We.
T(A.aaR(A.acf.AsW));this.We.Bi(true);this.We.Nl(23);this.YQ.H(AZ6);this.YQ.Aj(true
);this.YQ.T(A.aaR(A.acf.A$s));this.YQ.Bi(false);this.PH.H(AZ7);this.PH.Aj(true);
this.PH.T(A.aaR(A.acf.A58));this.PH.Bi(true);this.PH.Ga(3);this.PH.EV(14);this.PH.
IS(A.aaR(A.acf.Ko)+Atm);this.PH.Je(A.aaR(A.acf.GL)+Atm);this.J(this.We,0);this.J(
this.YQ,0);this.J(this.PH,0);this.We.AR=[B=this.We,B.Np];this.YQ.Au([B=this.RatingMode
,B.B$,B.Cb]);this.YQ.CK(this.RatingMode);this.PH.Au([B=A._GetAutoObject(A.Device.
Device),B.A8Z,B.BbB]);},_Done:function(){this.__proto__=C.Cg;this.We._Done();this.
YQ._Done();this.RatingMode._Done();this.PH._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.We._ReInit();this.YQ._ReInit();this.RatingMode.
_ReInit();this.PH._ReInit();this.Hj.R(A.aaR(A.acf.ACA));this.Jd(A.aaR(A.acf.A5$)
);this.We.T(A.aaR(A.acf.AsW));this.YQ.T(A.aaR(A.acf.A$s));this.PH.T(A.aaR(A.acf.
A58));this.PH.IS(A.aaR(A.acf.Ko)+Atm);this.PH.Je(A.aaR(A.acf.GL)+Atm);},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.We)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Ava={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hn(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.
Text;}if(!Hf){this.Background.L(FS);this.V.L(A.jb.CJ);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Ava;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADn={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PT,B.EC],0);A.pe([this,this.DX],this);},Dg:function(E){C.BR.Dg.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.ADk));break;case 1:this.Ap.Ax(A.aaL(A.ach.APo));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APq));break;default:A.ab5("%s%e",AyG,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADn;this.Ap.H(AyH);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADk));this.Init(aArg);},_Done:function(){this.
__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADo={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PT,B.EC],0);A.pe([this,this.DX],this);},Dg:function(E){C.BR.
Dg.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.ADl));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APp));break;case 2:this.Ap.Ax(A.aaL(A.ach.APr));break;default:A.ab5("%s%e"
,AyG,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADo;
this.Ap.H(AyH);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADl));this.Init(aArg);},
_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.FA={BU:null,Ax1:A.jV,Dg:function(E){C.JO.Dg.call(
this,E);this.BU.L(E);},Kz:function(E){if(this.Ax1===E)return;this.Ax1=E;this.BU.
R(E);},_Init:function(aArg){C.JO._Init.call(this,aArg);C.CG._Init.call(this.BU={
I:this},0);this.__proto__=C.FA;this.BU.A0(0x34);this.BU.H(AyC);this.BU.A6(0x11);
this.BU.L(A.jb.Text);this.J(this.BU,0);this.BU.S(A.aaL(A.fl.Af));this.BU.AZ(A.aaL(
A.fl.Ak));this.BU.Cr(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JO;this.
BU._Done();C.JO._Done.call(this);},_ReInit:function(){C.JO._ReInit.call(this);this.
BU._ReInit();this.BU.S(A.aaL(A.fl.Af));this.BU.AZ(A.aaL(A.fl.Ak));this.BU.Cr(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JO._Mark.call(this,D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOM={WF:function(G){var B;this.Agx();this.AuJ(A.aaR(A.acf.BjQ),[this,this.Bos],[
B=A._GetAutoObject(A.Device.Device),B.A80,B.BbC]);A._GetAutoObject(C.BS).Fz();this.
I5(A.aaR(A.acf.AVx),[this,this.ATY],5);this.I5(A.aaR(A.acf.AVv),[this,this.ATX],
7);this.I5(A.aaR(A.acf.An2),[this,this.AwY],2);this.I5(A.aaR(A.acf.AdV),[this,this.
AE2],1);this.I5(A.aaR(A.acf.AuH),[this,this.AEW],0);A._GetAutoObject(C.BS).Fz();
A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.Ani)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abt:function(){return C.ACc;},Abu:function(
){return C.ADv;},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A66());},HQ:function(G){var F;C.GJ.HQ.call(this,G);if(this.Aki(
)===false){this.N.Cw(A._GetAutoObject(A.Device.Converter).Ajr((F=this.Fn,F[1].call(
F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OS(false);this.N.OT(false
);},Agj:function(){A._GetAutoObject(C.A8).Cd(44);},Bos:function(G){A._GetAutoObject(
A.Device.Device).AwO(!A._GetAutoObject(A.Device.Device).AqU);this.An_(this);},An_:
function(G){var Be=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Aw=Be.DL(
30,3);if(!!Aw)Be.Nq(Aw);if(A._GetAutoObject(A.Device.Device).AqU){var AAl=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A2W=A._GetAutoObject(A.Device.Helper).Dv()-
21600;AAl.Initialize(30,3,A2W,true);Be.CX(AAl);}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOM;
var B;this.Dr(C.APk);this.Dl(A.aaR(A.acf.A8o));this.AwT([B=A._GetAutoObject(A.Device.
Device),B.A8Y,B.BbA]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(
A.acf.A8o));},_className:"Application::FreshCowListScreen"};C.AOL={_Init:function(
aArg){C.I7._Init.call(this,aArg);this.__proto__=C.AOL;this.Lf.Ar(false);this.Lf.
Aj(false);this.Lf.Z(false);this.Ju.Ar(false);this.Ju.Aj(false);this.Ju.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APk={DX:function(G){C.Kt.
DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad0(7));},_Init:
function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.APk;},_className:"Application::HeaderFreshCowListFilter"
};C.ADv={JA:null,D0:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.
call(this.JA={I:this},0);C.CG._Init.call(this.D0={I:this},0);this.__proto__=C.ADv;
this.A_e(1);this.JA.H(AZ8);this.JA.R((A.aaR(A.acf.Calving)+AcS)+A.aaR(A.acf.A$5)
);this.JA.L(A.jb.Text);this.D0.H(AZ9);this.D0.R(A.aaR(A.acf.AEd));this.D0.L(A.jb.
Text);this.J(this.JA,0);this.J(this.D0,0);this.JA.S(A.aaL(A.fl.Ak));this.JA.AZ(A.
aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.De;this.JA._Done();this.D0._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.JA._ReInit();this.D0._ReInit();this.JA.R((
A.aaR(A.acf.Calving)+AcS)+A.aaR(A.acf.A$5));this.D0.R(A.aaR(A.acf.AEd));this.JA.
S(A.aaL(A.fl.Ak));this.JA.AZ(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.JA).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.ACc={AG5:null,KS:null,UI:null,AP:null,A$:null
,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UI.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A$.H([this.UI.M[2]-1,0,this.UI.M[2]+1,aSize[
1]]);this.KS.H([this.UI.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KS.L(this.V.AQ);this.UI.Dg(this.V.AQ);},Ch:function(Ad){if(!this.AX
)return;this.Hs=Ad;if(!!this.AX){var IB=this.AX.CF(Ad,0);var Mj=this.AX.CF(Ad,1);
var A2V=this.AX.CF(Ad,29);var AlD=this.AX.Hv(Ad,28);this.T(Mj.toFixed());this.KS.
R(A2V.toFixed());this.UI.Ab6(A._GetAutoObject(A.Device.Device).AqT+1);this.UI.Bn6(
AlD);this.UI.R(A._GetAutoObject(A.acj.KO).AjN(AlD));A._GetAutoObject(A.Device.Device
).SR(Ad);this.Ap8(IB);this.Axv();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A4S:function(G){this.UI.Ab8(this.AG5);},Axv:function(){var Gh=A._GetAutoObject(
A.Device.Device).Bt.B_();this.AG5=A._NewObject(C.Ajv,0);if(Gh>0){var O=Gh-1;while(
O>=0){var D8=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6);this.AtB(this.AG5,O,9,
D8);O=O-1;}}A.pe([this,this.A4S],this);},AtB:function(A1p,Ad,A1o,Qi){var Alx=A._GetAutoObject(
A.Device.Device).Bt.I9(Ad,A1o);if(!!Alx)A1p.Ow(Alx,Qi);},Ap8:function(Ac8){var Fy=
A._NewObject(A.Device.Filter,0);var AzF=A._NewObject(A.Device.UInt32FilterCriterion
,0);AzF.Initialize(6,2,A._GetAutoObject(A.Device.Helper).ZS(A._GetAutoObject(A.Device.
Device).AqT)-1,true);Fy.CX(AzF);var HX=A._NewObject(A.Device.Int32FilterCriterion
,0);HX.Initialize(1,0,Ac8,true);Fy.CX(HX);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fy);},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.Text._Init.call(this.
KS={I:this},0);C.AUq._Init.call(this.UI={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.ACc;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(this.KS,0);this.J(this.UI,0);this.J(this.AP
,0);this.J(this.A$,0);this.KS.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.KS._Done();this.UI._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.KS._ReInit(
);this.UI._ReInit();this.AP._ReInit();this.A$._ReInit();this.KS.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AG5)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AUq={AU_:0,Init:function(aArg){},AOT:function(){return A._GetAutoObject(A.Device.
Helper).Aqr(this.AU_);},AOV:function(){return this.AOT()+(this.Mz*86400);},Bn6:function(
E){if(this.AU_===E)return;this.AU_=E;A.pe([this,this.WN],this);},_Init:function(
aArg){C.AhB._Init.call(this,aArg);this.__proto__=C.AUq;this.Bc.H(AZ_);this.Bn3(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Du:function(){if(this.K&&this.K.Du)return this.K.
Du.apply(this,arguments);else return C.FactoryResetScope.BuU.apply(this,arguments
);},BuU:function(){return 3;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.
jV;return this.FactoryResetScopeToString.BT(this.C7(aIndex));},_Init:function(aArg
){C.Cm._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.BG.
Set(0,0);this.BG.Set(1,1);this.BG.Set(2,2);var J8=this._variants();if(J8){this.K={
};J8._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);
this.__proto__=C.Cm;this.FactoryResetScopeToString._Done();C.Cm._Done.call(this);
},_ReInit:function(){C.Cm._ReInit.call(this);this.FactoryResetScopeToString._ReInit(
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acs.FactoryResetScope._variants(
);},K:null,_className:"Application::FactoryResetScope"};C.SetSaveTransponderScreen={
Bg6:false,Init:function(aArg){this.Bg6=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;
},Ew:function(G){if(this.Bea){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);if(this.Bg6)A._GetAutoObject(A.Device.Device).A3(106,true,A.
_GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(
A.Device.Device).A3(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),0,null);}C.SetTransponderScreen.Ew.call(this,G);},_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);
},_className:"Application::SetSaveTransponderScreen"};C.ASr={WF:function(G){this.
Agx();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.Settings),[this,this.A3X]);A._GetAutoObject(
C.BS).Fz();this.AMf();A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.LinkTransponder));A.
_GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.ARH)+A.aaR(A.acf.
Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){},Abt:function(
){return C.Aqw;},Abu:function(){return C.Aq3;},Q_:function(G){A._GetAutoObject(A.
Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AC9());},HQ:function(G){C.
QD.HQ.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr(A._GetAutoObject(A.Device.Converter).AMa(this.LZ.AC$())));this.N.Cf=[this,
this.AcU];this.N.Fc(A.jV);}this.N.OS(false);this.N.OT(false);},Agj:function(){A.
_GetAutoObject(C.A8).Cd(47);},A3X:function(G){A._GetAutoObject(A.Device.Device).
Dw(0);A._GetAutoObject(C.A8).Cd(89);},_Init:function(aArg){C.QD._Init.call(this,
aArg);this.__proto__=C.ASr;this.Dr(C.ADp);this.Dl(A.aaR(A.acf.A8k));this.ATv(A._GetAutoObject(
C.Av$));},_ReInit:function(){C.QD._ReInit.call(this);this.Dl(A.aaR(A.acf.A8k));}
,_className:"Application::NoTransponderListScreen"};C.ASq={_Init:function(aArg){
C.I7._Init.call(this,aArg);this.__proto__=C.ASq;this.KY.Ar(false);this.KY.Aj(false
);this.KY.Z(false);},_className:"Application::NoTransponderListFilterScreen"};C.
ADp={DX:function(G){C.Kt.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(8));},_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.ADp;
},_className:"Application::HeaderNoTransponderListFilter"};C.ABX={AuY:null,Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuY.BT(aIndex);},_Init:
function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuY={I:this},0);this.__proto__=C.ABX;},_Done:function(){this.__proto__=
C.Gd;this.AuY._Done();C.Gd._Done.call(this);},_ReInit:function(){C.Gd._ReInit.call(
this);this.AuY._ReInit();},_Mark:function(D){var B;C.Gd._Mark.call(this,D);if((B=
this.AuY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AL$={Co:null,Ad3:null,Init:function(aArg){this.Bb(this.Co);},Lp:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CE=[this,this.AaH];this.BQ.Cf=null;
this.BQ.Ca=[this,this.A3y];this.BQ.CS(A.jV);this.BQ.Cw(null);this.BQ.C2(A.aaL(A.
ach.AeA));}return this.BQ;},AAB:function(G){var Aa=(C.Ajk.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad3)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(AIL);},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ajk._Init.call(this.
Co={I:this},0);C.Ajk._Init.call(this.Ad3={I:this},0);this.__proto__=C.AL$;this.H(
Qc);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(IX);this.Co.T(A.aaR(A.acf.
AEn));this.Ad3.H(Qd);this.Ad3.T(A.aaR(A.acf.TB));this.J(this.Co,0);this.J(this.Ad3
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAB];this.Ad3.AR=[this,this.
AAB];this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Co._Done();this.
Ad3._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Co._ReInit();this.Ad3._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AEn));this.Ad3.T(A.aaR(A.acf.TB));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BF_={Undefined:0,BF8:1,BF9:2,IdScanned:3,BE4:4,BD_:5,BEO:6};C.AMn={A$N:function(
){A._GetAutoObject(A.Device.Device).A3(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfI]);},_Init:function(aArg){C.AuO._Init.call(
this,aArg);this.__proto__=C.AMn;this.Gd.Au(1);this.ATB(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aeu={V0:null,V1:null,V2:null,Ag4:null,Ag5:null,Ag6:null,CE:null,Cf:null,Ca:null
,An3:A.jV,An4:A.jV,An5:A.jV,Aq_:0,Aq$:0,Ara:0,Ahm:0,ZF:false,WO:false,Asq:false,
AsF:false,AsE:false,AjB:function(Fg){this.CE=Fg.CE;this.Cf=Fg.Cf;this.Ca=Fg.Ca;this.
An3=Fg.An3;this.An4=Fg.An4;this.An5=Fg.An5;this.Ahm=Fg.Ahm;this.V0=Fg.V0;this.V1=
Fg.V1;this.V2=Fg.V2;this.Ag4=Fg.Ag4;this.Ag5=Fg.Ag5;this.Ag6=Fg.Ag6;this.AsE=Fg.
AsE;this.AsF=Fg.AsF;this.Asq=Fg.Asq;this.WO=Fg.WO;this.ZF=Fg.ZF;this.Aq_=Fg.Aq_;
this.Aq$=Fg.Aq$;this.Ara=Fg.Ara;},AkR:function(Fg){Fg.CE=this.CE;Fg.Cf=this.Cf;Fg.
Ca=this.Ca;Fg.Hy(this.An3);Fg.Fc(this.An4);Fg.CS(this.An5);Fg.AFs(this.Ahm);Fg.AFj(
this.V0);Fg.ArR(this.V1);Fg.AnA(this.V2);Fg.C2(this.Ag4);Fg.Cw(this.Ag5);Fg.C3(this.
Ag6);Fg.OS(this.AsE);Fg.OT(this.AsF);Fg.Asq=this.Asq;Fg.WO=this.WO;Fg.ZF=this.ZF;
Fg.Bnb(this.Aq_);Fg.ATp(this.Aq$);Fg.A_q(this.Ara);},_Init:function(aArg){this.__proto__=
C.Aeu;this.V0=A.aaL(A.fl.Ak);this.V1=A.aaL(A.fl.Ak);this.V2=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.V0=A.aaL(
A.fl.Ak);this.V1=A.aaL(A.fl.Ak);this.V2=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.V0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V1)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.V2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag5)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CE)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.AsB._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.ADn);},_className:"Application::NewAnimalSetTransponderScreen"};C.C9={Abd:null
,CountryToString:null,Du:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lx(aIndex);},DZ:function(A7){return A7;
},H5:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
Abd)(F=this.Abd,F[2].call(F[0],E));},A1X:function(G){var F;if(!!this.Abd)this.Q=(
F=this.Abd,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Cb],0);},AFc:
function(E){if(A.aaZ(this.Abd,E))return;if(!!this.Abd)A.z$([this,this.A1X],this.
Abd,0);this.Abd=E;if(!!this.Abd)A.zX([this,this.A1X],this.Abd,0);A.pe([this,this.
A1X],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C9;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abd)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.O3={AC:null,Q:null,Background:null,Iq:null,Ip:null,M5:
0,AM:0,Gq:0,F$:0,Agf:function(G){this.Kg(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var ID=((Ae&0x40)===0x40);if(ID){this.Background.
L(A.jb.AV);this.C4(256);}else{this.Background.L(this.M5);this.C4(256);}},Age:function(
G){this.Kb(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3V],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3V],E,0);if(!!E)A.pe([this
,this.A3V],this);},CV:function(E){if(this.M5===E)return;this.M5=E;this.Am();},Kg:
function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Kb:function(
G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Gq)E=this.F$;if(E>this.F$)E=this.Gq;if(this.AM===E)return;this.AM=E;
this.Am();},Ga:function(E){if(this.Gq===E)return;this.Gq=E;this.Am();},EV:function(
E){if(this.F$===E)return;this.F$=E;this.Am();},C5:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},A3V:function(G){var F;if(!!this.
AC){this.Ga(0);this.EV(this.AC.H5());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BL._Init.call(this.Iq={
I:this},0);A.Core.BL._Init.call(this.Ip={I:this},0);this.__proto__=C.O3;this.H(AIM
);this.Background.H(All);this.Iq.Filter=4;this.Ip.Filter=5;this.M5=A.jb.CJ;this.
J(this.Background,0);this.Iq.BM=[this,this.Agf];this.Iq.D1=[this,this.Agf];this.
Ip.BM=[this,this.Age];this.Ip.D1=[this,this.Age];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Iq._Done();this.Ip._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Iq._ReInit();this.Ip._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Iq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RW={A1P:A.jV,Ai:function(
Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5U));this.Kz(this.A1P);},Ch:function(
G){C.FA.Ch.call(this,G);var AlD=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!AlD)this.A1P=Xh;else this.A1P=A._GetAutoObject(A.acj.KO).AjN(AlD);this.Am();
},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RW;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RX={A2U:0,Ai:function(Ae){C.FA.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARF));if(this.A2U>0)this.Kz(this.A2U.toFixed());else
this.Kz(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(this,G);this.A2U=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.FA._Init.call(
this,aArg);this.__proto__=C.RX;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Du:function(){return 5;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BT(aIndex);},DZ:function(A7){return A7;},H5:function(){return 4;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Aky(E);},A2e:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B$,
this.Cb],0);},L2:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A2e],[B=this.Animal,B.ASJ,B.Aky],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A2e],[B=this.Animal,B.ASJ,B.Aky],0);A.pe([this,this.A2e],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Du:function(){return 99;},C7:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BT(aIndex);},DZ:function(A7){return A7;
},H5:function(){return 98;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal
)this.Animal.N3(E);},A1N:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B$,this.Cb],0);},L2:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1N],[B=this.Animal,B.Awd,B.N3],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1N],[B=this.Animal,B.Awd,B.N3],0);A.pe([
this,this.A1N],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.AR0={Wa:null,YO:null,AeN:null,Init:function(
aArg){this.Bb(this.Wa);},Adv:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YO)this.ByD();else if(Aa===this.Wa)this.BBp(this);else throw new
Error(Aym);A._GetAutoObject(A.Device.Device).Dw(0);},BBp:function(G){var B;var F;
var Vo=(C.Amw.isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null
);if(!Vo){A.ab5("%s",AZ$);return;}Vo.AKM(this);},ByD:function(){A._GetAutoObject(
A.Device.Helper).W.AGN(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ms._Init.call(this.Wa={I:this},0);C.Ms._Init.call(this.YO={
I:this},0);C.VT._Init.call(this.AeN={I:this},0);this.__proto__=C.AR0;var B;this.
H(AcP);this.Wa.H(Qd);this.Wa.Ar(true);this.Wa.T(A.aaR(A.acf.A$u));this.Wa.Bi(true
);this.YO.H(IX);this.YO.Ar(true);this.YO.T(A.aaR(A.acf.A5g));this.YO.Bi(true);this.
AeN.H(BD);this.AeN.T(A.aaR(A.acf.ACX));this.AeN.Bi(true);this.J(this.Wa,0);this.
J(this.YO,0);this.J(this.AeN,0);this.Wa.AR=[this,this.Adv];this.YO.AR=[this,this.
Adv];this.AeN.ATd([B=A._GetAutoObject(A.Device.Device),B.Ary,B.Ato]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.Wa._Done();this.YO._Done(
);this.AeN._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Wa._ReInit();this.YO._ReInit();this.AeN._ReInit();this.Wa.
T(A.aaR(A.acf.A$u));this.YO.T(A.aaR(A.acf.A5g));this.AeN.T(A.aaR(A.acf.ACX));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Wa)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VT={
Ai:function(Ae){C.Uf.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl
){FS=A.jb.Text;GY=A.jb.Bm;}if(!this.LK){this.Background.L(FS);this.V.L(A.jb.Am5);
}else if(this.Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KJ){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.
L(GY);}if(this.AmE){this.Mq.Cv(1);this.Mq.L(A.jb.H_);}else{this.Mq.Cv(0);this.Mq.
L(A.jb.Bm);}},_Init:function(aArg){C.Uf._Init.call(this,aArg);this.__proto__=C.VT;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.Av4={C_:null,A2:null,AF:
null,Akj:null,QY:null,EM:null,ASg:Ly,Bl:function(aSize){C.Co.Bl.call(this,aSize);
var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}this.Background.
L(FS);this.V.L(GY);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,Ct;C.Co.Ai.call(this
,Ae);this.Akj.L(this.V.AQ);this.QY.L(this.V.AQ);this.QY.R(A0a);this.T(((this.ASg+
A.aaR(A.acf.Colon))+CR)+A._GetAutoObject(A.Device.Helper).Ak7(840003123456789).toFixed(
));if(!!this.A2&&!!this.AF){var A20=this.QY.Afh([(this.QY.String.length-(F=this.
AF,F[1].call(F[0])))-(Ct=this.A2,Ct[1].call(Ct[0])),0]);var A4k=this.QY.Afh([this.
QY.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABn=this.QY.Dd();this.EM.H([
A20[0]-1,ABn[1],A4k[0]+1,ABn[3]]);}else this.EM.H(this.QY.Dd());},DB:function(E){
if(this.C_===E)return;this.C_=E;this.Akj.Ax(E);},OQ:function(E){if(A.aaZ(this.A2
,E))return;if(!!this.A2)A.z$([this,this.AaG],this.A2,0);this.A2=E;if(!!E)A.zX([this
,this.AaG],E,0);if(!!E)A.pe([this,this.AaG],this);},PU:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaI],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaI],E,0);if(!!E)A.pe([this,this.AaI],this);},AaI:function(G){this.Am(
);},AaG:function(G){this.Am();},Ar3:function(E){if(this.ASg===E)return;this.ASg=
E;this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akj={I:this},0);A.acg.Text._Init.call(this.QY={I:this},0);A.acg.BW._Init.call(
this.EM={I:this},0);this.__proto__=C.Av4;this.H(K1);this.V.A6(0x11);this.Akj.H(O7
);this.QY.H(A0b);this.EM.H(A0c);this.EM.Nn(2);this.EM.L(A.jb.E1);this.J(this.Akj
,0);this.J(this.QY,0);this.J(this.EM,0);this.QY.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Akj._Done();this.QY._Done();this.EM._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Akj._ReInit();this.
QY._ReInit();this.EM._ReInit();this.QY.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AUl:0,Init:
function(aArg){var B;A.zX([this,this.Be2],[B=A._GetAutoObject(A.Device.Device),B.
AEF,B.AIV],0);A.pe([this,this.Be2],this);},HQ:function(G){C.TF.HQ.call(this,G);if(
this.AjR)this.N.Cw(A.aaL(A.ach.AD));else this.N.Cw(A.aaL(A.ach.ANp));this.N.C3(A.
aaL(A.ach.Options));this.N.Fc(A.jV);this.N.CS(A.jV);this.N.Cf=[this,this.A$c];this.
N.Ca=[this,this.WF];this.N.ArR(A.aaL(A.fl.Ak));this.N.AnA(A.aaL(A.fl.Ak));},M0:function(
G){this.Bfm(this);},Or:function(G){this.BBi(this);},AdS:function(Aig,Aih,BxI){A.
_GetAutoObject(C.BS).ABO(Aig,Aih,[this,this.A9j,this.ATE],BxI);},WF:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjR){A._GetAutoObject(C.BS).
TC(A.aaR(A.acf.Bit),[this,this.Boo]);A._GetAutoObject(C.BS).Fz();}this.AdS(A.aaR(
A.acf.Rating),[this,this.AT2],3);this.AdS(A.aaR(A.acf.Afv),[this,this.AT4],2);this.
AdS(A.aaR(A.acf.Temperature),[this,this.AT3],1);this.AdS(A.aaR(A.acf.AdV),[this,
this.Bol],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.Bix
));A._GetAutoObject(A.Device.Device).Dw(6);},ATE:function(E){if(this.AUl===E)return;
this.AUl=E;A.abo([this,this.A9j,this.ATE],0);},Be2:function(G){this.ATE(A._GetAutoObject(
A.Device.Device).D9);},A9j:function(){return this.AUl;},_Init:function(aArg){C.TF.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={VB:null
,Init:function(aArg){var B;A.zX([this,this.Aga],[B=A._GetAutoObject(A.Device.Device
).An,B.Fp,B.Ft],0);A.pe([this,this.Bg$],this);A.pe([this,this.Q_],this);},CC:function(
G){C.TF.CC.call(this,G);A.pe([this,this.Bhe],this);},AGT:function(G){C.TF.AGT.call(
this,G);if(!!this.Lh)this.AhE(this.Lh,this.VB);},HQ:function(G){C.TF.HQ.call(this
,G);this.N.Cw(A.aaL(A.ach.ARd));this.N.C3(A.aaL(A.ach.ARe));if(this.AjR)this.N.ATp(
0);else this.N.ATp(1);this.N.A_q(A._GetAutoObject(A.Device.Converter).BhD(A._GetAutoObject(
A.Device.Device).D9));this.N.Fc(A.jV);this.N.CS(A.jV);this.N.Cf=[this,this.Bmb];
this.N.Ca=[this,this.Boq];this.N.ArR(A.aaL(A.fl.Ak));this.N.AnA(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QK()){this.N.I$.C4(100);this.N.Cf=null;
}else this.N.I$.C4(255);if(!A._GetAutoObject(A.Device.Device).An.B_()){this.N.Lg.
C4(100);this.N.Ca=null;}else this.N.Lg.C4(255);if(A._GetAutoObject(A.Device.Device
).An.B_()<=1){this.N.T4.C4(100);this.N.T5.C4(100);}else{this.N.T4.C4(255);this.N.
T5.C4(255);}},M0:function(G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)return;
var LE=A._GetAutoObject(A.Device.Helper).W.CL;LE=LE+1;if(LE>=A._GetAutoObject(A.
Device.Device).An.B_())LE=0;A._GetAutoObject(A.Device.Helper).G8(LE);},Or:function(
G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)return;var LE=A._GetAutoObject(
A.Device.Helper).W.CL;LE=LE-1;if(LE<0)LE=A._GetAutoObject(A.Device.Device).An.B_(
)-1;A._GetAutoObject(A.Device.Helper).G8(LE);},Af$:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A8).Cd(94);},Bmb:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},Boq:function(G){this.Bfm(this);},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).Mv());A.pe([this,this.Bhe
],this);},Bg$:function(G){if(!A._GetAutoObject(A.Device.Device).An.B_()){this.VB.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QK()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.VB.R(A.aaR(A.acf.AEv));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).AC_(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.VB.R(A.aaR(A.acf.AOe));else this.VB.R(A.aaR(
A.acf.AOd));}else this.VB.R(A.aaR(A.acf.ASn));}else this.VB.Z(false);},Bhe:function(
G){var BCg=A._GetAutoObject(A.Device.Helper).W.Id;var A4n=A._GetAutoObject(A.Device.
Device).An.LV(0,BCg);if(!A._GetAutoObject(A.Device.Device).An.B_())A._GetAutoObject(
A.Device.Helper).G8(-1);else if(A4n<0)A._GetAutoObject(A.Device.Helper).G8(0);},
Aga:function(G){this.Bg$(this);this.HQ(this);},_Init:function(aArg){C.TF._Init.call(
this,aArg);C.AkS._Init.call(this.VB={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.APD);this.VB.H(Ff);this.J(this.VB,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.TF;this.VB._Done();C.TF._Done.call(this);},_ReInit:function(){
C.TF._ReInit.call(this);this.VB._ReInit();},_Mark:function(D){var B;C.TF._Mark.call(
this,D);if((B=this.VB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMC={QS:null,Wb:null,AbH:null,YR:null,Init:function(aArg){var B;var F;this.Bb(
this.QS);if(!!A._GetAutoObject(C.A8).Q){var Vo=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vo){A.ab5("%s",AyI);
return;}else{if(Vo.AjR)this.QS.T(A.aaR(A.acf.Bg));else this.QS.T(A.aaR(A.acf.EU)
);var AzB=A._GetAutoObject(A.Device.Device).An.Filter;if(!AzB||A._GetAutoObject(
A.Device.Helper).Arg(AzB))this.YR.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).An.B_()){this.Wb.Ar(false);this.QS.Ar(false);}}}},Adv:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbH)A._GetAutoObject(C.A8).Cd(9);else if(Aa===this.Wb)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QS)this.BCL();else if(Aa===this.YR)this.
A1V();else throw new Error(Aym);},BCL:function(){var B;var F;var Vo=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vo){A.
ab5("%s",AyI);return;}Vo.A$c(this);},A1V:function(){var B;var F;var Vo=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vo){A.
ab5("%s",AyI);return;}Vo.Q_(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Ms._Init.call(this.QS={I:this},0);C.Ms._Init.call(this.Wb={I:this},
0);C.Ms._Init.call(this.AbH={I:this},0);C.Ms._Init.call(this.YR={I:this},0);this.
__proto__=C.AMC;this.H(AfE);this.QS.H(Aag);this.QS.Ar(true);this.QS.T(A.aaR(A.acf.
EU));this.QS.Bi(true);this.Wb.H(Qd);this.Wb.Ar(true);this.Wb.T(A.aaR(A.acf.AUL));
this.Wb.Bi(true);this.AbH.H(IX);this.AbH.T(A.aaR(A.acf.AkU));this.AbH.Bi(true);this.
YR.H(BD);this.YR.T(A.aaR(A.acf.ACi));this.YR.Bi(true);this.J(this.QS,0);this.J(this.
Wb,0);this.J(this.AbH,0);this.J(this.YR,0);this.QS.AR=[this,this.Adv];this.Wb.AR=[
this,this.Adv];this.AbH.AR=[this,this.Adv];this.YR.AR=[this,this.Adv];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QS._Done();this.Wb._Done(
);this.AbH._Done();this.YR._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QS._ReInit();this.Wb._ReInit();this.AbH.
_ReInit();this.YR._ReInit();this.QS.T(A.aaR(A.acf.EU));this.Wb.T(A.aaR(A.acf.AUL
));this.AbH.T(A.aaR(A.acf.AkU));this.YR.T(A.aaR(A.acf.ACi));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.Ja={T6:null,EA:null,Yo:null,Background:null,Ap:null,Iq:null,Ip:null,M5:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var ID=((Ae&0x40)===0x40);if(ID){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.C4(256);}else if(Hf){this.Background.L(this.M5);this.Ap.L(A.jb.Text);this.C4(
256);}else{this.Background.L(this.M5);this.Ap.L(A.jb.Text);this.C4(128);}if(!this.
AM)this.Ap.Cv(0);else if(this.AM>0){if(A.aaZ(this.T6,[B=A._GetAutoObject(A.Device.
Device),B.Awn,B.AyU]))this.Ap.Cv(2);else if(A.aaZ(this.T6,[B=A._GetAutoObject(A.
Device.Device),B.Awm,B.AyT]))this.Ap.Cv(3);else if(!!this.Yo&&((F=this.Yo,F[1].call(
F[0]))===1))this.Ap.Cv(1);else this.Ap.Cv(0);}else if(A.aaZ(this.T6,[B=A._GetAutoObject(
A.Device.Device),B.Awn,B.AyU]))this.Ap.Cv(6);else if(A.aaZ(this.T6,[B=A._GetAutoObject(
A.Device.Device),B.Awm,B.AyT]))this.Ap.Cv(7);else if(!!this.Yo&&((F=this.Yo,F[1].
call(F[0]))===1))this.Ap.Cv(5);else this.Ap.Cv(4);},Agf:function(G){this.Kg(this
);},Age:function(G){this.Kb(this);},Kg:function(G){this.Bx(1);},Kb:function(G){this.
Bx(-1);},Bnl:function(E){if(A.aaZ(this.T6,E))return;if(!!this.T6)A.z$([this,this.
A3E],this.T6,0);this.T6=E;if(!!E)A.zX([this,this.A3E],this.T6,0);A.pe([this,this.
A3E],this);},Us:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.
Agd],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Agd],this.EA,0);if(!!E)A.pe([this
,this.Agd],this);},A3E:function(G){var F;if(!!this.T6)this.Bx((F=this.T6,F[1].call(
F[0])));},Agd:function(G){A.pe([this,this.BCY],this);},CV:function(E){if(this.M5===
E)return;this.M5=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T6)(F=this.T6,F[2].call(F[0],E));this.Am();A.abo([this,this.Um,this.
Bx],0);},A_g:function(E){if(A.aaZ(this.Yo,E))return;if(!!this.Yo)A.z$([this,this.
Agd],this.Yo,0);this.Yo=E;if(!!E)A.zX([this,this.Agd],this.Yo,0);if(!!E)A.pe([this
,this.Agd],this);},BCY:function(G){var F,Ct;if(!this.Yo||!this.EA)return;this.Bnl(
A._GetAutoObject(A.Device.Helper).BdP((F=this.Yo,F[1].call(F[0])),(Ct=this.EA,Ct[
1].call(Ct[0]))));this.Am();},Um:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BL._Init.call(this.Iq={I:this},0);
A.Core.BL._Init.call(this.Ip={I:this},0);this.__proto__=C.Ja;this.H(AIN);this.Background.
A0(0x3F);this.Background.H(AIN);this.Ap.A0(0x3C);this.Ap.H(AIN);this.Iq.Filter=4;
this.Ip.Filter=5;this.M5=A.jb.CJ;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AVa));this.Iq.BM=[this,this.Agf];this.Ip.BM=[this,this.Age];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Iq._Done();this.Ip._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Iq._ReInit(
);this.Ip._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Iq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ip).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AL_={WF:function(G){var B;var F;this.Agx();if(!!A._GetAutoObject(A.Device.Helper
).AOR((F=this.Fn,F[1].call(F[0])),0,true))this.AuJ(A.aaR(A.acf.A7l),[this,this.Bor
],[B=A._GetAutoObject(A.Device.Device),B.A8C,B.Bbj]);else A._GetAutoObject(C.BS).
AaV(A.aaR(A.acf.A7l));A._GetAutoObject(C.BS).Fz();this.I5(A.aaR(A.acf.LinkTransponder
),[this,this.BnC],8);this.I5(A.aaR(A.acf.TB),[this,this.Akv],9);this.I5(A.aaR(A.
acf.Bap),[this,this.Bod],10);this.I5(A.aaR(A.acf.AGp),[this,this.ATJ],3);this.I5(
A.aaR(A.acf.An2),[this,this.AwY],2);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Ml(A.aaR(A.acf.Ani)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abt:function(){return C.Aqw;},Abu:function(){return C.Aq3;
},Q_:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6X((F=this.Fn,F[1].call(F[0]))));},HQ:function(G){var F;C.GJ.HQ.
call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.
N.OS(false);this.N.OT(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(52);},A3J:
function(G){C.GJ.A3J.call(this,G);A.pe([this,this.A0O],this);},Bor:function(G){A.
_GetAutoObject(A.Device.Device).Awt(!A._GetAutoObject(A.Device.Device).Aqg);this.
An_(this);},An_:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E$();A._GetAutoObject(A.Device.Helper).BoZ(Be);if(A._GetAutoObject(A.Device.Device
).Aqg){var A2C=A._GetAutoObject(A.Device.Helper).AOR((F=this.Fn,F[1].call(F[0]))
,21600,true);Be.CX(A2C);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AL_;var B;this.Dl(A.aaR(A.acf.
Av9));this.AwT([B=A._GetAutoObject(A.Device.Device),B.A8B,B.Bbi]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.Av9));},_className:"Application::ActionListScreen"
};C.AL9={_Init:function(aArg){C.I7._Init.call(this,aArg);this.__proto__=C.AL9;},
_className:"Application::ActionListFilterScreen"};C.APD={IO:null,IU:null,Bc:null
,MF:A.jV,Init:function(aArg){var B;A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9n,B.A_M],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Device
).An,B.Fp,B.Ft],0);},Dg:function(E){C.IM.Dg.call(this,E);this.IU.L(E);},DX:function(
G){C.IM.DX.call(this,G);var AzB=A._GetAutoObject(A.Device.Device).An.Filter;if(!
AzB||A._GetAutoObject(A.Device.Helper).Arg(AzB))this.IO.Z(false);else this.IO.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.Aq0())this.Aw5(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+BaA)+A._GetAutoObject(A.Device.Device).An.B_().
toFixed());else this.Aw5(BaB);},Aw5:function(E){if(this.MF===E)return;this.MF=E;
this.IU.R(E);},_Init:function(aArg){C.IM._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IO={I:this},0);A.acg.Text._Init.call(this.IU={I:this},0);A.acg.C8._Init.call(
this.Bc={I:this},0);this.__proto__=C.APD;this.HR.H(Brj);this.DS.H(Brk);this.IO.H(
Brl);this.IO.L(A.jb.Text);this.IU.H(BaC);this.IU.Hn(2);this.IU.KU(true);this.IU.
A6(0x12);this.IU.R(BaD);this.Bc.DC(AyE);this.Bc.DM(AyF);this.Bc.L(A.jb.Bc);this.
J(this.IO,0);this.J(this.IU,0);this.J(this.Bc,0);this.IO.Ax(A.aaL(A.ach.AeC));this.
IU.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IM;this.
IO._Done();this.IU._Done();this.Bc._Done();C.IM._Done.call(this);},_ReInit:function(
){C.IM._ReInit.call(this);this.IO._ReInit();this.IU._ReInit();this.Bc._ReInit();
this.IU.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IM._Mark.call(this,D);if((
B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsL={Text:null,Bl:function(aSize){C.O3.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.O3.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xh);else this.Text.R(this.AC.Gl((F=this.Q,F[1].call(F[0]
))));var ID=((Ae&0x40)===0x40);if(ID)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.O3._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsL;this.Text.R(Rp);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.O3;this.Text._Done();C.O3.
_Done.call(this);},_ReInit:function(){C.O3._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.O3._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Ard={C_:null,Bl:function(aSize){C.O3.Bl.call(this,aSize);this.C_.H(A.abK(this.
C_.M,aSize));},Ai:function(Ae){var B;var F;C.O3.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C_.Ax(null);else{this.C_.Ax(this.AC.AC5(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C_.Cv(this.AC.AC7(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var ID=((
Ae&0x40)===0x40);if(ID)this.C_.L(A.jb.Bm);else this.C_.L(A.jb.Text);},_Init:function(
aArg){C.O3._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ard;this.H(AIN);this.C_.H(AIM);this.J(this.C_,0);},_Done:function(){this.__proto__=
C.O3;this.C_._Done();C.O3._Done.call(this);},_ReInit:function(){C.O3._ReInit.call(
this);this.C_._ReInit();},_Mark:function(D){var B;C.O3._Mark.call(this,D);if((B=
this.C_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Au8={VV:null,DirectionOfCountingToString:null,Aei:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return aIndex;
},Gl:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return A.jV;return this.
DirectionOfCountingToString.BT(aIndex);},DZ:function(A7){return A7;},H5:function(
){return this.Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.VV)(F=
this.VV,F[2].call(F[0],E));},AC5:function(aIndex){if((aIndex<0)||(aIndex>=this.Du(
)))return null;return this.Aei.AsM(aIndex);},AC7:function(aIndex){if((aIndex<0)||(
aIndex>=this.Du()))return-1;return this.Aei.AsN(aIndex);},A19:function(G){var F;
if(!!this.VV)this.Q=(F=this.VV,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cb],0);},Ae1:function(E){if(A.aaZ(this.VV,E))return;if(!!this.VV)A.z$([this
,this.A19],this.VV,0);this.VV=E;if(!!this.VV)A.zX([this,this.A19],this.VV,0);A.pe([
this,this.A19],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aei._Init.call(this.Aei={I:this},0);this.__proto__=C.Au8;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aei._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aei._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMu={Hu:null,EA:null,AnimalIdGenerationMethodToString:
null,AdZ:null,Du:function(){return 4;},C7:function(aIndex){var F;var A7=-1;if((aIndex<
0)||(aIndex>=this.Du()))return-1;switch(aIndex){case 0:A7=0;break;case 1:A7=1;break;
case 2:A7=this.BzO((F=this.EA,F[1].call(F[0])));break;case 3:A7=5;break;default:
throw new Error(Brm+aIndex.toFixed());}return A7;},Gl:function(aIndex){if((aIndex<
0)||(aIndex>=this.Du()))return A.jV;return this.AnimalIdGenerationMethodToString.
BT(this.C7(aIndex));},DZ:function(A7){var aIndex=-1;switch(A7){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Brn+A7.toFixed());}return aIndex;},H5:function(){return this.
Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Hu)(F=this.Hu,F[2].
call(F[0],E));},AC5:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;
return this.AdZ.AsM(this.C7(aIndex));},AC7:function(aIndex){if((aIndex<0)||(aIndex>=
this.Du()))return-1;return this.AdZ.AsN(this.C7(aIndex));},A1D:function(G){var F;
if(!!this.Hu)this.Q=(F=this.Hu,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cb],0);},Bmj:function(E){if(A.aaZ(this.Hu,E))return;if(!!this.Hu)A.z$([this
,this.A1D],this.Hu,0);this.Hu=E;if(!!this.Hu)A.zX([this,this.A1D],this.Hu,0);A.pe([
this,this.A1D],this);},Us:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.
z$([this,this.Agd],this.EA,0);this.EA=E;if(!!this.EA)A.zX([this,this.Agd],this.EA
,0);A.pe([this,this.Agd],this);},Agd:function(G){A.pe([this,this.ByF],this);},BzO:
function(L8){var Rr=0;switch(L8){case 0:Rr=2;break;case 1:Rr=3;break;case 2:Rr=4;
break;default:throw new Error(Bro+L8.toFixed());}return Rr;},ByF:function(G){var
BeO=this.C7(this.DZ(this.Q));if(this.Q!==BeO)this.Au(BeO);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdZ._Init.call(this.
AdZ={I:this},0);this.__proto__=C.AMu;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdZ._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdZ._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGP={FM:null,Aa2:null,Q:null,Fm:null,Fb:null,HH:null,Ww:null,AW:null,H1:null
,Kp:null,A_:0,AM:0,Alv:0,Init:function(aArg){var B;A.zX([this,this.Be1],[B=A._GetAutoObject(
A.Device.Device),B.Anr,B.AoA],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CV(A.jb.CJ);this.Ww.CV(A.jb.CJ);
this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CU);this.HH.
CV(A.jb.CU);this.Ww.CV(A.jb.CU);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}
}else{if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CV(A.jb.CJ);this.Ww.CV(A.jb.CJ);}else{
this.AW.FO(A.jb.CU);this.HH.CV(A.jb.CU);this.Ww.CV(A.jb.CU);}this.Bb(null);}},I3:
function(G){C.Eg.I3.call(this,G);if(!this.A_)this.FV(this);else this.He(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(
F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;
default:this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:
function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_&&!!this.N)this.FM.AjB((
F=this.N,F[1].call(F[0])));this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.
A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{if(this.AW.A8V())this.Bb(
this.AW);else this.Bb(this.Ww);if(!this.AM)this.AW.SQ(2);else this.AW.SQ(7);}break;
default:throw new Error(Atn+this.A_.toFixed());}this.DJ(this);this.Am();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},C5:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Um,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Or:function(G){this.ABf(2);},M0:function(G){this.ABf(
7);},ABf:function(GA){var B;var AzC=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!AzC){var AAs=(A.Core.P.isPrototypeOf(B=this.QJ(AzC,GA,0x15))?B:null);if(!!AAs){
this.Bb(AAs);return true;}}return false;},Ao3:function(G){A.pe([this,this.Be1],this
);},A4y:function(G){var B;var F;if(!this.H1.Hu){this.Kp.Ae1(null);return;}switch((
F=this.H1.Hu,F[1].call(F[0]))){case 0:case 1:this.Kp.Ae1(null);break;case 3:this.
Kp.Ae1([B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0v]);break;case 2:this.Kp.Ae1([
B=A._GetAutoObject(A.Device.Device),B.ASI,B.A0w]);break;case 4:case 5:this.Kp.Ae1([
B=A._GetAutoObject(A.Device.Device),B.AEK,B.AIZ]);break;default:throw new Error(
Brp+(F=this.H1.Hu,F[1].call(F[0])).toFixed());}},Be1:function(G){var F;if(!this.
H1.Hu)return;A.pe([this,this.A4y],this);var At3=false;switch((F=this.H1.Hu,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{At3=true;this.AW.A_6(-1);}break;case 0:
case 1:{At3=false;this.AW.A_6(A._GetAutoObject(A.Device.Device).A2);}break;default:
throw new Error(Ayx+(F=this.H1.Hu,F[1].call(F[0])).toFixed());}this.AW.Ar(At3);this.
HH.Ar(At3);this.HH.Z(At3);if(((F=this.H1.Hu,F[1].call(F[0]))!==this.Alv)||(At3===
false)){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMs((F=this.H1.
Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BP){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bj4((F=this.H1.Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kx(A._GetAutoObject(A.Device.Device).A2);else this.AW.Kx(0);this.Alv=(
F=this.H1.Hu,F[1].call(F[0]));},A9U:function(E){var B;if(this.Aa2===E)return;if(
!!this.Aa2){A.z$([this,this.Ao3],[B=this.Aa2,B.WD,B.JY],0);A.z$([this,this.Ao3],[
B=this.Aa2,B.Anv,B.Nk],0);A.z$([this,this.Ao3],[B=this.Aa2,B.ArC,B.PW],0);this.H1.
Us(null);}this.Aa2=E;if(!!E){A.zX([this,this.Ao3],[B=this.Aa2,B.WD,B.JY],0);A.zX([
this,this.Ao3],[B=this.Aa2,B.Anv,B.Nk],0);A.zX([this,this.Ao3],[B=this.Aa2,B.ArC
,B.PW],0);this.H1.Us([B=this.Aa2,B.WD,B.JY]);}if(!!E)A.pe([this,this.Ao3],this);
},Um:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BL._Init.call(this.Fm={I:this},0);A.Core.BL._Init.call(this.Fb={I:this},0
);C.Ard._Init.call(this.HH={I:this},0);C.Ard._Init.call(this.Ww={I:this},0);C.AvU.
_Init.call(this.AW={I:this},0);C.AMu._Init.call(this.H1={I:this},0);C.Au8._Init.
call(this.Kp={I:this},0);this.__proto__=C.AGP;var B;this.H(U0);this.V.Ar(false);
this.V.R(Atf);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fb.Filter=7;this.HH.H(Brq);
this.HH.Ar(false);this.Ww.H(Brr);this.AW.H(Brs);this.AW.Ar(false);this.J(this.HH
,0);this.J(this.Ww,0);this.J(this.AW,0);this.FM=A._NewObject(C.Aeu,0);this.Fm.BM=[
this,this.Or];this.Fb.BM=[this,this.M0];this.HH.CK(this.Kp);this.HH.Au([B=this.Kp
,B.B$,B.Cb]);this.Ww.CK(this.H1);this.Ww.Au([B=this.H1,B.B$,B.Cb]);this.AW.Au([this
,this.Um,this.Bx]);this.H1.Bmj([B=A._GetAutoObject(A.Device.Device),B.Anr,B.AoA]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fb.
_Done();this.HH._Done();this.Ww._Done();this.AW._Done();this.H1._Done();this.Kp.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fm._ReInit();this.Fb._ReInit();this.HH._ReInit();this.Ww._ReInit();this.AW._ReInit(
);this.H1._ReInit();this.Kp._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa2)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ww)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H1).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G5={AzU:null,Fm:null,Fb:null,G2:null,
F0:null,EM:null,M_:0,AM9:0,AB_:0,Uy:0,Bam:-1,AM8:false,Init:function(aArg){A.pe([
this,this.A01],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
AM8);this.EM.H(A.wC(this.Yt(this.AB_).M,this.Yt((this.AB_+this.AM9)-1).M));},Or:
function(G){var D5=(A.Core.BL.isPrototypeOf(G)?G:null);var A1S=this.Bgy(2);if(A1S===
false)D5.NM=true;},M0:function(G){var D5=(A.Core.BL.isPrototypeOf(G)?G:null);var
A1S=this.Bgy(7);if(A1S===false)D5.NM=true;},Bgy:function(GA){var B;var DV=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DV=this.BdR(DV,GA,true);if(!!DV){this.Bb(DV);this.
AzU=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adu:function(
G){A.ab5("%s",Alg);},GX:function(s){this.Adu(s);},FO:function(E){if(this.M_===E)
return;this.M_=E;this.F0.CV(E);this.G2.CV(E);},SQ:function(GA){var B;switch(GA){
case 2:this.Bb(this.G2);break;case 7:this.Bb(this.F0);break;default:A.ab5("%s%e"
,Brt,GA);}this.AzU=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LQ:function(G){},A01:
function(s){this.LQ(s);},AE8:function(E){if(this.AM8===E)return;this.AM8=E;this.
Am();},A90:function(E){if(this.AM9===E)return;this.AM9=E;this.Am();},A9Z:function(
E){if(this.AB_===E)return;this.AB_=E;this.Am();},Yt:function(HA){var B6=null;switch(
HA){case-1:case 0:B6=this.F0;break;case 1:B6=this.G2;break;default:A.ab5("%s",Ah4
);}return B6;},Kx:function(E){if(this.Uy===E)return;this.Uy=E;this.Amp();},Amp:function(
){A.ab5("%s",Alg);},BdR:function(Ac2,GA,LK){var B;if(!!Ac2){var Be;if(LK)Be=0x11;
else Be=0x0;switch(GA){case 2:Ac2=(C.DF.isPrototypeOf(B=this.AqO(Ac2,Be))?B:null
);break;case 7:Ac2=(C.DF.isPrototypeOf(B=this.TT(Ac2,Be))?B:null);break;default:
throw new Error(Bru);}}return Ac2;},A_6:function(E){if(this.Bam===E)return;this.
Bam=E;var DV=this.F0;var A2f;while(!!DV){A2f=!!E;DV.Ar(A2f);DV.Z(A2f);if(DV===this.
AzU)this.Bb(DV);DV=this.BdR(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BL._Init.call(this.Fm={I:this},0);A.Core.BL._Init.
call(this.Fb={I:this},0);C.DF._Init.call(this.G2={I:this},0);C.DF._Init.call(this.
F0={I:this},0);A.acg.BW._Init.call(this.EM={I:this},0);this.__proto__=C.G5;this.
H(Brv);this.Fm.Filter=6;this.Fb.Filter=7;this.M_=A.jb.CJ;this.G2.H(E7);this.F0.H(
BaE);this.EM.H(Brw);this.EM.Nn(2);this.EM.L(A.jb.E1);this.J(this.G2,0);this.J(this.
F0,0);this.J(this.EM,0);this.Fm.BM=[this,this.Or];this.Fm.D1=[this,this.Or];this.
Fb.BM=[this,this.M0];this.Fb.D1=[this,this.M0];this.AzU=this.F0;this.G2.Dk=[this
,this.GX];this.F0.Dk=[this,this.GX];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fm._Done();this.Fb._Done();this.G2._Done();this.F0._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fm._ReInit();this.Fb._ReInit();this.G2._ReInit();this.F0._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzU)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.ARj={Dy:null,CW:null,Cu:null
,FO:function(E){if(this.M_===E)return;C.HL.FO.call(this,E);this.Cu.CV(E);this.CW.
CV(E);this.Dy.CV(E);},Yt:function(HA){var B6=null;switch(HA){case-1:case 0:B6=this.
F0;break;case 1:B6=this.Cu;break;case 2:B6=this.CW;break;case 3:B6=this.Dy;break;
case 4:B6=this.G2;break;default:A.ab5("%s",Ah4);}return B6;},_Init:function(aArg
){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(
this.CW={I:this},0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.ARj;this.
H(Brx);this.G2.H(All);this.Dy.H(BaF);this.CW.H(BaG);this.Cu.H(BaH);this.F0.H(Bry
);this.J(this.Dy,-2);this.J(this.CW,-2);this.J(this.Cu,-2);this.Dy.Dk=[this,this.
GX];this.CW.Dk=[this,this.GX];this.Cu.Dk=[this,this.GX];},_Done:function(){this.
__proto__=C.HL;this.Dy._Done();this.CW._Done();this.Cu._Done();C.HL._Done.call(this
);},_ReInit:function(){C.HL._ReInit.call(this);this.Dy._ReInit();this.CW._ReInit(
);this.Cu._ReInit();},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.
Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVO={Rc:null,AcI:null,AVN:0,CC:function(G){this.AcI.Ar(true);},E4:function(G
){this.AcI.Ar(false);},Bob:function(E){if(this.AVN===E)return;this.AVN=E;this.Rc.
R((((A.aaR(A.acf.AVM)+AcS)+E.toFixed())+Brz)+A.aaR(A.acf.Le));},Bl6:function(){return this.
AVN;},BBF:function(G){A._GetAutoObject(C.A8).Cd(3);A._GetAutoObject(A.Device.Device
).Any(1);},_Init:function(aArg){C.X3._Init.call(this,aArg);C.CG._Init.call(this.
Rc={I:this},0);A.acl.Gm._Init.call(this.AcI={I:this},0);this.__proto__=C.AVO;this.
AeO.H(BrA);this.UG.R(A.jV);this.Rc.H(BrB);this.Rc.R(A.aaR(A.acf.AVM)+BaI);this.Rc.
L(A.jb.Text);this.AcI.HO(1);this.AcI.Fr(5000);this.AcI.B3=100;this.J(this.Rc,0);
this.Rc.S(A.aaL(A.fl.Af));this.Rc.AZ(A.aaL(A.fl.Ak));this.Rc.Cr(A.aaL(A.fl.Bh));
this.AcI.SC=[this,this.BBF];this.AcI.Q=[this,this.Bl6,this.Bob];},_Done:function(
){this.__proto__=C.X3;this.Rc._Done();this.AcI._Done();C.X3._Done.call(this);},_ReInit:
function(){C.X3._ReInit.call(this);this.Rc._ReInit();this.AcI._ReInit();this.Rc.
R(A.aaR(A.acf.AVM)+BaI);this.Rc.S(A.aaL(A.fl.Af));this.Rc.AZ(A.aaL(A.fl.Ak));this.
Rc.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.X3._Mark.call(this,D);if((B=this.
Rc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcI)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ASb={K7:null,Lm:null,BeD:false,Init:
function(aArg){this.Bb(this.Db);},Ew:function(G){var B;if(!!this.K7)this.K7.Ew(this
);C.Wy.Ew.call(this,G);},Agh:function(G){var B;if(!!this.K7)this.K7.Agh(this);C.
Wy.Agh.call(this,G);},CC:function(G){var B;if(!this.BeD){this.BeD=true;A.pe([this
,this.A33],this);}else if(!this.K7){this.K7=A._NewObject(C.ASd,0);this.K7.A_c([this
,this.AA6]);this.LQ(this);this.K7.LQ(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ew(this);else C.Wy.CC.call(this,G);}else C.Wy.CC.call(this,G
);},Ap7:function(G){var B;if(!!this.K7)this.K7.Ap7(this);},AA6:function(G){var B;
var F;this.LQ(this);this.K7.LQ(this);A.pe([this,this.AcT],this);var Bee=this.LX;
this.AeY(A._GetAutoObject(A.Device.Helper).Abr(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVL(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bee);if(Bee)A._GetAutoObject(
A.Device.Helper).W.PW(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SK(A._GetAutoObject(A.Device.Helper).AMs((F=this.Dj.H1.Hu,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JL(this.Db);},A33:function(
G){A._GetAutoObject(C.A8).Cd(79);},_Init:function(aArg){C.Wy._Init.call(this,aArg
);C.Rb._Init.call(this.Lm={I:this},0);this.__proto__=C.ASb;var B;this.Lm.H(Ah1);
this.Lm.Aj(true);this.Lm.T(A.aaR(A.acf.ACz));this.J(this.Lm,-9);this.J3(this.Gn,-
1);this.Lm.Gs([this,this.D_,this.GS]);this.Lm.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.ASR,B.AnG]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wy;this.Lm.
_Done();C.Wy._Done.call(this);},_ReInit:function(){C.Wy._ReInit.call(this);this.
Lm._ReInit();this.Lm.T(A.aaR(A.acf.ACz));},_Mark:function(D){var B;C.Wy._Mark.call(
this,D);if((B=this.K7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lm)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADY={AgQ:null,AgR:null,NP:null,NO:null,ET:null,FZ:null,Eq:null,Dy:null,CW:null,Cu:
null,FO:function(E){if(this.M_===E)return;C.Li.FO.call(this,E);this.Cu.CV(E);this.
CW.CV(E);this.Dy.CV(E);this.Eq.CV(E);this.FZ.CV(E);this.ET.CV(E);this.NO.CV(E);this.
NP.CV(E);this.AgR.CV(E);this.AgQ.CV(E);},Yt:function(HA){var B6=null;switch(HA){
case-1:case 0:B6=this.F0;break;case 1:B6=this.Cu;break;case 2:B6=this.CW;break;case
3:B6=this.Dy;break;case 4:B6=this.Eq;break;case 5:B6=this.FZ;break;case 6:B6=this.
ET;break;case 7:B6=this.NO;break;case 8:B6=this.NP;break;case 9:B6=this.AgR;break;
case 10:B6=this.AgQ;break;case 11:B6=this.G2;break;default:A.ab5("%s",Ah4);}return B6;
},_Init:function(aArg){C.Li._Init.call(this,aArg);C.DF._Init.call(this.AgQ={I:this
},0);C.DF._Init.call(this.AgR={I:this},0);C.DF._Init.call(this.NP={I:this},0);C.
DF._Init.call(this.NO={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CW={I:this},0);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ADY;this.H(BrC);this.G2.H(AIO);this.AgQ.H(AyJ);this.AgR.H(
A0d);this.NP.H(A0e);this.NO.H(A0f);this.ET.H(A0g);this.FZ.H(A0h);this.Eq.H(A0i);
this.Dy.H(BaJ);this.CW.H(A0j);this.Cu.H(BrD);this.F0.H(BrE);this.J(this.AgQ,-2);
this.J(this.AgR,-2);this.J(this.NP,-2);this.J(this.NO,-2);this.J(this.ET,-2);this.
J(this.FZ,-2);this.J(this.Eq,-2);this.J(this.Dy,-2);this.J(this.CW,-2);this.J(this.
Cu,-2);this.AgQ.Dk=[this,this.GX];this.AgR.Dk=[this,this.GX];this.NP.Dk=[this,this.
GX];this.NO.Dk=[this,this.GX];this.ET.Dk=[this,this.GX];this.FZ.Dk=[this,this.GX
];this.Eq.Dk=[this,this.GX];this.Dy.Dk=[this,this.GX];this.CW.Dk=[this,this.GX];
this.Cu.Dk=[this,this.GX];},_Done:function(){this.__proto__=C.Li;this.AgQ._Done(
);this.AgR._Done();this.NP._Done();this.NO._Done();this.ET._Done();this.FZ._Done(
);this.Eq._Done();this.Dy._Done();this.CW._Done();this.Cu._Done();C.Li._Done.call(
this);},_ReInit:function(){C.Li._ReInit.call(this);this.AgQ._ReInit();this.AgR._ReInit(
);this.NP._ReInit();this.NO._ReInit();this.ET._ReInit();this.FZ._ReInit();this.Eq.
_ReInit();this.Dy._ReInit();this.CW._ReInit();this.Cu._ReInit();},_Mark:function(
D){var B;C.Li._Mark.call(this,D);if((B=this.AgQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HL={Q:null,AM:0,Ai:function(Ae){C.G5.Ai.call(this
,Ae);this.Amp();},Adu:function(G){var B;var F;var IB=A.jV;var B6=this.G2;while(!
!B6){if(B6.Ez>0)IB=IB+B6.Ez.toFixed();else IB=IB+String.fromCharCode(0x30);B6=(C.
DF.isPrototypeOf(B=this.TT(B6,0x11))?B:null);}var BP=this.AM;this.Bx(A.wz(IB,-1,
10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LQ:function(G){},Amp:function(){var B;var F;if(!!this.Q){var DV=this.F0;
var AdD=this.Uy;var A7=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A7>0){DV.L3(A7%
10);A7=(A7/10)|0;}else if(AdD>0)DV.L3(0);else DV.L3(-1);DV=(C.DF.isPrototypeOf(B=
this.AqO(DV,0x11))?B:null);AdD=AdD-1;}}},C5:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)
A.pe([this,this.C5],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G5._Init.call(this,aArg);this.__proto__=C.HL;},_Mark:
function(D){var B;C.G5._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Li={AM:0,Q:null
,Ai:function(Ae){C.G5.Ai.call(this,Ae);this.Amp();},Adu:function(G){var B;var F;
var IB=A.jV;var B6=this.G2;while(!!B6){if(B6.Ez>0)IB=IB+B6.Ez.toFixed();else IB=
IB+String.fromCharCode(0x30);B6=(C.DF.isPrototypeOf(B=this.TT(B6,0x11))?B:null);
}var BP=this.AM;this.Bx(A.ab0(IB,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LQ:function(G){},Amp:function(){var B;
var F;if(!!this.Q){var DV=this.F0;var AdD=this.Uy;var A7=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A7>0){DV.L3((A7%10)|0);A7=Math.trunc(A7/10);}else if(AdD>0)DV.
L3(0);else DV.L3(-1);DV=(C.DF.isPrototypeOf(B=this.AqO(DV,0x11))?B:null);AdD=AdD-
1;}}},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Au:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G5._Init.call(
this,aArg);this.__proto__=C.Li;},_Mark:function(D){var B;C.G5._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BT(aIndex);},DZ:function(A7){return A7;},H5:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvU={Eq:null,Dy:null,CW:null,Cu:null,FO:function(E){if(this.M_===E)return;C.
HL.FO.call(this,E);this.Cu.CV(E);this.CW.CV(E);this.Dy.CV(E);this.Eq.CV(E);},Yt:
function(HA){var B6=null;switch(HA){case-1:case 0:B6=this.F0;break;case 1:B6=this.
Cu;break;case 2:B6=this.CW;break;case 3:B6=this.Dy;break;case 4:B6=this.Eq;break;
case 5:B6=this.G2;break;default:A.ab5("%s",Ah4);}return B6;},_Init:function(aArg
){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(
this.Dy={I:this},0);C.DF._Init.call(this.CW={I:this},0);C.DF._Init.call(this.Cu={
I:this},0);this.__proto__=C.AvU;this.H(Ayq);this.G2.H(AHU);this.Eq.H(AHV);this.Dy.
H(AHW);this.CW.H(AHX);this.Cu.H(AHY);this.F0.H(AHZ);this.EM.H(BaK);this.J(this.Eq
,-2);this.J(this.Dy,-2);this.J(this.CW,-2);this.J(this.Cu,-2);this.Eq.Dk=[this,this.
GX];this.Dy.Dk=[this,this.GX];this.CW.Dk=[this,this.GX];this.Cu.Dk=[this,this.GX
];},_Done:function(){this.__proto__=C.HL;this.Eq._Done();this.Dy._Done();this.CW.
_Done();this.Cu._Done();C.HL._Done.call(this);},_ReInit:function(){C.HL._ReInit.
call(this);this.Eq._ReInit();this.Dy._ReInit();this.CW._ReInit();this.Cu._ReInit(
);},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUT={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bpq(0);this.AttributeSet.Bpr(1);this.AttributeSet.Bps(4);},Ai:function(Ae){var B;
C.BX.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);var ID=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=
A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);this.
AttributeSet.Ahq(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahq(A.jb.Bm);}else if(ID){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahq(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.
Am5);this.V.L(A.jb.Bm);this.AttributeSet.Ahq(A.jb.Bm);}else{this.Background.L(FS
);this.V.L(GY);this.AttributeSet.Ahq(GY);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;this.
Apj=ID;},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(A.acg.AuV.isPrototypeOf(
B=this.Dz.Cj)?B:null);CA.A9W(this.AttributeSet);CA.A6(0x12);if(!CA)return;if(!!this.
AC)CA.R(this.BzH(this.AC.Gl(Gg)));else CA.R(Xh);CA.H(A.abK(CA.M,[this.Dz.Wf,(B=this.
Dz.M)[3]-B[1]]));},BzH:function(Bx7){var AAQ=Bx7;AAQ=A._GetAutoObject(A.Device.Helper
).MI(AAQ,BrF,BrG);AAQ=A._GetAutoObject(A.Device.Helper).MI(AAQ,BrH,BrI);return BrJ+
AAQ;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUT;this.Dz.H(BrK);this.Dz.JB(2);
this.Dz.N4(A.acg.AuV);this.AttributeSet.Ahq(this.V.AQ);this.AttributeSet.Bm5(A.aaL(
A.fl.AOI));this.AttributeSet.A_n(A.aaL(A.fl.Ak));this.AttributeSet.Aht(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BX;this.AttributeSet._Done(
);C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A_n(A.aaL(A.fl.Ak));this.AttributeSet.Aht(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.AsB._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dr(C.ADo);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Du:function(){return 14;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gl:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BT(aIndex
);},DZ:function(A7){return A7;},H5:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OW={FM:null,EnumToCodeset:
null,Jz:null,A_:0,Number:0,Ai:function(Ae){C.BX.Ai.call(this,Ae);if(this.A_===1){
if(this.Hl){this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}},Bx:function(E){C.BX.Bx.call(this,E);var BAC=this.
EnumToCodeset.AmH(this.Number);var BeN=this.AC.C7(this.AM);if(BAC!==BeN){this.AFH(
this.EnumToCodeset.Ael(BeN));A.abo([this,this.ASS,this.AFH],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C2(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[
this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(
A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=
this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:
this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:function(
G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(
F[0])));this.A_=EO;if((this.A_<0)||(this.A_>1))this.A_=0;this.DJ(this);if(!this.
A_)this.Bb(null);else this.A2s();this.Am();},AFH:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqW()>E)E=this.EnumToCodeset.
AqW();if(this.EnumToCodeset.H5()<E)E=this.EnumToCodeset.H5();}this.Number=E;var BP=
this.AM;if(!!this.EnumToCodeset){var Bzx=this.EnumToCodeset.AmH(E);this.Bx(this.
AC.DZ(Bzx));if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},Anz:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Vd:function(G){this.Ex(this.A_+1);},A2s:function(){A.ab5(
"%s",BrL);},ASS:function(){return this.Number;},_Init:function(aArg){C.BX._Init.
call(this,aArg);A.Core.BL._Init.call(this.Jz={I:this},0);this.__proto__=C.OW;this.
Jz.Filter=1;this.FM=A._NewObject(C.Aeu,0);this.Jz.BM=[this,this.Vd];},_Done:function(
){this.__proto__=C.BX;this.Jz._Done();C.BX._Done.call(this);},_ReInit:function(){
C.BX._ReInit.call(this);this.Jz._ReInit();},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jz)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeV={Text:null,Ai:function(
Ae){C.El.Ai.call(this,Ae);this.Text.L(this.AC0);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rj(this.AM));this.
Am();},AaI:function(G){A.pe([this,this.Agc],this);},AaG:function(G){A.pe([this,this.
Agc],this);},Al2:function(G){A.pe([this,this.Agc],this);},Agc:function(G){if((!this.
Il||!this.A2)||!this.AF)return;},_Init:function(aArg){C.El._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeV;this.Text.A0(0x3F
);this.Text.H(As_);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.El;this.Text._Done();C.El.
_Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.El._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.AR6={GI:0,C9:null,AW:null,Fa:null,
Ja:null,CountryToString:null,Lc:0,Md:false,Init:function(aArg){A.zX([this,this.MN
],[this,this.SE,this.Lr],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.Ja.Z(this.
Afp);this.AW.FO(this.LU);this.Fa.CV(this.LU);this.Ja.CV(this.LU);},DJ:function(G
){var F;if(!this.N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Lc));(F=this.N,
F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Ts=this.
A_;this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>this.RK)this.A_=this.RK;if((
this.A_===1)&&!this.Afp)this.A_=2;switch(this.A_){case 0:{this.Bb(null);if(!this.
GI)this.Lr(0);}break;case 1:this.Bb(this.Ja);break;case 2:this.Bb(this.Fa);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Ts>0))this.AW.SQ(2);else this.AW.SQ(7);}break;
default:throw new Error(Atn+this.A_.toFixed());}C.El.Ex.call(this,this.A_);},Apr:
function(G){this.Ja.Us(this.EA);},AaI:function(G){var F;this.AW.A9Z((F=this.AF,F[
1].call(F[0])));},AaG:function(G){var F;this.AW.A90((F=this.A2,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Md=true;this.SG(A._GetAutoObject(
A.Device.Helper).VZ(E,0,12));this.Lr(A._GetAutoObject(A.Device.Converter).S3(E));
this.Md=false;if(!!E)this.AW.Kx(12);else this.AW.Kx(0);this.Am();},Al2:function(
G){A.pe([this,this.Agc],this);},FV:function(G){var F;if(!this.AM){var BP=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).ADd());if(this.AM!==BP){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(3);},AjO:function(){return this.
GI;},AjQ:function(){return 999999999999;},Lr:function(E){if(this.Lc===E)return;this.
Lc=E;if(this.Md===false)A.pe([this,this.Vq],this);A.abo([this,this.SE,this.Lr],0
);},SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Md===false)A.pe([this
,this.Vq],this);A.abo([this,this.AbY,this.SG],0);},Vq:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).AqB(this.Lc),3,10)+A.abm(this.GI,12,10
);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agc:function(G){var F;if((!this.Il||
!this.A2)||!this.AF)return;if(!(F=this.Il,F[1].call(F[0])))this.AW.AE8(true);else
this.AW.AE8(false);},SE:function(){return this.Lc;},AbY:function(){return this.GI;
},_Init:function(aArg){C.El._Init.call(this,aArg);C.C9._Init.call(this.C9={I:this
},0);C.ADY._Init.call(this.AW={I:this},0);C.AsL._Init.call(this.Fa={I:this},0);C.
Ja._Init.call(this.Ja={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AR6;var B;this.RK=3;this.AW.H(BrM);this.Fa.H(BaL);this.
Ja.H(BaM);this.J(this.AW,0);this.J(this.Fa,0);this.J(this.Ja,0);this.C9.AFc([this
,this.SE,this.Lr]);this.AW.Au([this,this.AbY,this.SG]);this.Fa.CK(this.C9);this.
Fa.Au([B=this.C9,B.B$,B.Cb]);this.Ja.A_g([B=A._GetAutoObject(A.Device.Device),B.
Awh,B.AyQ]);this.Init(aArg);},_Done:function(){this.__proto__=C.El;this.C9._Done(
);this.AW._Done();this.Fa._Done();this.Ja._Done();this.CountryToString._Done();C.
El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit(
);this.AW._ReInit();this.Fa._ReInit();this.Ja._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ja)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.AR5={GI:0,C9:null,AW:null,YH:null,Ku:null,Fa:null,Ja:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pz:0,Lc:0,Md:false,Init:function(aArg){A.
zX([this,this.MN],[this,this.PT,this.EC],0);A.zX([this,this.MN],[this,this.SE,this.
Lr],0);A.zX([this,this.MN],[this,this.Ant,this.Ahu],0);},Ai:function(Ae){C.El.Ai.
call(this,Ae);this.Ja.Z(this.Afp);this.AW.FO(this.LU);this.YH.FO(this.LU);this.Ku.
FO(this.LU);this.Fa.CV(this.LU);this.Ja.CV(this.LU);},DJ:function(G){var F;if(!this.
N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C2(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this
,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV
);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.
N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Lc));(F=this.N,F[1].call(F[0]
)).Ca=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AGY)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.
acf.BhY));break;case 1:(F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AGY)+A.aaR(A.
acf.Colon))+AcS)+A.aaR(A.acf.Bpw));break;case 2:(F=this.N,F[1].call(F[0])).CS(((
A.aaR(A.acf.AGY)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.acf.Bi0));break;default:(F=this.
N,F[1].call(F[0])).CS(((A.aaR(A.acf.AGY)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Ca=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0]
)).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0
])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null
);(F=this.N,F[1].call(F[0])).CS((A.aaR(A.acf.EN)+Ayf)+this.GermanStateToString.Lx(
A._GetAutoObject(A.Device.Converter).AC3(this.Pz)));(F=this.N,F[1].call(F[0])).Ca=
null;}break;default:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[
1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(
A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Ts=this.A_;if(EO<
0)EO=0;else if(EO>this.RK)EO=this.RK;if((EO===1)&&!this.Afp)EO=2;switch(EO){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.Pz)this.Lr(0);}break;case
1:this.Bb(this.Ja);break;case 2:this.Bb(this.Fa);break;case 3:if(!Ts)A.pe([this,
this.BBT],this);else this.Bb(this.YH);break;case 4:this.Bb(this.Ku);break;case 5:
if(((Ts===4)&&!this.Pz)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Ts>
0))this.AW.SQ(2);else this.AW.SQ(7);}break;default:throw new Error(Atn+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,this.A_);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.Md=true;this.SG(A._GetAutoObject(A.Device.Helper).VZ(E,0,8));this.
Ahu(A._GetAutoObject(A.Device.Converter).A$_(E));this.EC(A._GetAutoObject(A.Device.
Converter).A$9(E));this.Lr(A._GetAutoObject(A.Device.Converter).S3(E));this.Md=false;
if(!!this.AM){this.YH.Kx(2);this.Ku.Kx(2);this.AW.Kx(8);}else{this.YH.Kx(0);this.
Ku.Kx(0);this.AW.Kx(0);}this.Am();},Apr:function(G){this.Ja.Us(this.EA);},AaI:function(
G){var F;this.AW.A9Z((F=this.AF,F[1].call(F[0])));},AaG:function(G){var F;this.AW.
A90((F=this.A2,F[1].call(F[0])));},Al2:function(G){A.pe([this,this.Agc],this);},
FV:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADd());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(3);}else this.Ex(this.RK);},AjO:function(){return this.GI;
},AjQ:function(){return 99999999;},Lr:function(E){if(this.Lc===E)return;this.Lc=
E;if(this.Md===false)A.pe([this,this.Vq],this);A.abo([this,this.SE,this.Lr],0);}
,SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Md===false)A.pe([this,this.
Vq],this);A.abo([this,this.AbY,this.SG],0);},Vq:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).AqB(this.Lc),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pz,2,10))+A.abm(this.GI,8,10);var BP=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Agc:function(G){var F;if((!this.Il||!this.A2)||!this.AF)return;if(!(F=this.
Il,F[1].call(F[0])))this.AW.AE8(true);else this.AW.AE8(false);},EC:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Md===false)A.pe([this,this.
Vq],this);A.abo([this,this.PT,this.EC],0);},Ahu:function(E){if(this.Pz===E)return;
this.Pz=E;if(this.Md===false)A.pe([this,this.Vq],this);A.abo([this,this.Ant,this.
Ahu],0);},BBT:function(G){var F;if(!!this.JP){var Ie=(F=this.JP,F[1].call(F[0]));
var A1E=0;switch(Ie){case 0:case 1:A1E=0;break;case 2:A1E=1;break;default:A.ab5(
"%s%e",Alf,Ie);}this.EC(A1E);}if(!this.Pz)this.Ex(4);else this.Ex(5);},SE:function(
){return this.Lc;},AbY:function(){return this.GI;},PT:function(){return this.AnimalType;
},Ant:function(){return this.Pz;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C9._Init.call(this.C9={I:this},0);C.ARk._Init.call(this.AW={I:this},0);C.AvT.
_Init.call(this.YH={I:this},0);C.AvT._Init.call(this.Ku={I:this},0);C.AsL._Init.
call(this.Fa={I:this},0);C.Ja._Init.call(this.Ja={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.AR5;var B;this.RK=5;this.AW.H(
BrN);this.YH.H(BrO);this.YH.EV(2);this.Ku.H(BrP);this.Ku.EV(16);this.Fa.H(BaL);this.
Ja.H(BaM);this.J(this.AW,0);this.J(this.YH,0);this.J(this.Ku,0);this.J(this.Fa,0
);this.J(this.Ja,0);this.C9.AFc([this,this.SE,this.Lr]);this.AW.Au([this,this.AbY
,this.SG]);this.YH.Au([this,this.PT,this.EC]);this.Ku.Au([this,this.Ant,this.Ahu
]);this.Fa.CK(this.C9);this.Fa.Au([B=this.C9,B.B$,B.Cb]);this.Ja.A_g([B=A._GetAutoObject(
A.Device.Device),B.Awh,B.AyQ]);this.Init(aArg);},_Done:function(){this.__proto__=
C.El;this.C9._Done();this.AW._Done();this.YH._Done();this.Ku._Done();this.Fa._Done(
);this.Ja._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit(
);this.AW._ReInit();this.YH._ReInit();this.Ku._ReInit();this.Fa._ReInit();this.Ja.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.El._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ku)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ja)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.El={AM:0,Aws:null,OK:null,
Q:null,EA:null,A2:null,AF:null,Il:null,N:null,JP:null,Fm:null,Fb:null,AC0:0,LU:0
,A_:0,RK:0,Afp:true,Init:function(aArg){A.pe([this,this.LQ],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A_)this.Bb(null);},Bm7:function(E){if(this.
AC0===E)return;this.AC0=E;this.Am();},WG:function(E){if(this.LU===E)return;this.
LU=E;this.Am();},DJ:function(G){A.ab5("%s",Alg);},MN:function(s){this.DJ(s);},Ex:
function(EO){A.pe([this,this.MN],this);A.pe(this.Aws,this);if(!EO)A.pe(this.OK,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);}
,C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",Aoz);},Or:function(G){if(this.A_>1)this.Ex(this.A_-1);},M0:function(
G){if((this.A_>0)&&(this.A_<this.RK))this.Ex(this.A_+1);},Us:function(E){if(A.aaZ(
this.EA,E))return;if(!!this.EA)A.z$([this,this.A0S],this.EA,0);this.EA=E;if(!!E)
A.zX([this,this.A0S],this.EA,0);A.pe([this,this.A0S],this);},Apr:function(G){},A0S:
function(s){this.Apr(s);},OQ:function(E){if(A.aaZ(this.A2,E))return;if(!!this.A2
)A.z$([this,this.A0W],this.A2,0);this.A2=E;if(!!E)A.zX([this,this.A0W],E,0);if(!
!E)A.pe([this,this.A0W],this);},PU:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0Y],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0Y],E,0);if(
!!E)A.pe([this,this.A0Y],this);},AaI:function(G){},A0Y:function(s){this.AaI(s);}
,AaG:function(G){},A0W:function(s){this.AaG(s);},Uq:function(E){if(A.aaZ(this.Il
,E))return;if(!!this.Il)A.z$([this,this.A0V],this.Il,0);this.Il=E;if(!!E)A.zX([this
,this.A0V],E,0);if(!!E)A.pe([this,this.A0V],this);},Al2:function(G){},A0V:function(
s){this.Al2(s);},FV:function(G){A.ab5("%s",BaN);},BG4:function(s){this.FV(s);},He:
function(G){this.Ex(0);},AjO:function(){A.ab5("%s",Aoz);return 0;},AjQ:function(
){A.ab5("%s",Aoz);return 0;},LQ:function(G){},Anx:function(E){if(A.aaZ(this.JP,E
))return;if(!!this.JP)A.z$([this,this.Ao2],this.JP,0);this.JP=E;if(!!E)A.zX([this
,this.Ao2],this.JP,0);A.pe([this,this.Ao2],this);},Ao2:function(G){},AFo:function(
E){if(A.aa0(this.OK,E))return;this.OK=E;},AFT:function(E){if(this.Afp===E)return;
this.Afp=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BL._Init.call(this.Fm={I:this},0);A.Core.BL._Init.call(this.Fb={I:this},0);this.
__proto__=C.El;this.H(As_);this.AC0=A.jb.Text;this.LU=A.jb.CU;this.Fm.Filter=6;this.
Fb.Filter=7;this.Fm.BM=[this,this.Or];this.Fb.BM=[this,this.M0];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fm._Done();this.Fb._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fm._ReInit(
);this.Fb._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Aws)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OK)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Il)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JP)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Rb={AM:0,Dq:null,FM:
null,OK:null,EA:null,A2:null,AF:null,Il:null,Q:null,JP:null,AEt:-1,Afp:true,AOc:
false,AUd:false,Asn:true,Init:function(aArg){A.pe([this,this.ABA],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dq)return;if(this.Dq.A_>0){if(this.Hl){this.Dq.
WG(A.jb.CJ);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Dq.WG(A.jb.
CU);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl)this.Dq.WG(
A.jb.CJ);else this.Dq.WG(A.jb.CU);this.Dq.Bm7(this.V.AQ);}},I3:function(G){C.Eg.
I3.call(this,G);if(!this.Dq)return;if(!this.Dq.A_)this.FV(this);else this.He(this
);},Gs:function(E){C.Eg.Gs.call(this,E);if(!!this.Dq)this.Dq.N=E;},Us:function(E
){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.Apr],this.EA,0);this.EA=
E;if(!!E)A.zX([this,this.Apr],this.EA,0);A.pe([this,this.Apr],this);},Apr:function(
G){if(!!this.Dq)this.Dq.Us(this.EA);},OQ:function(E){if(A.aaZ(this.A2,E))return;
this.A2=E;if(!!this.Dq)this.Dq.OQ(E);},PU:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PU(E);},Uq:function(E){if(A.aaZ(this.Il,E))return;
this.Il=E;if(!!this.Dq)this.Dq.Uq(E);},BCm:function(G){var AAx=0;if(!!this.Dq){AAx=
this.Dq.A_;this.Dq.N=null;this.HP(this.Dq);}switch(this.AEt){case 0:this.Dq=A._NewObject(
C.AeV,0);break;case 1:this.Dq=A._NewObject(C.AR6,0);break;case 2:this.Dq=A._NewObject(
C.AR5,0);break;case 3:this.Dq=A._NewObject(C.AUf,0);break;case 4:this.Dq=A._NewObject(
C.AUe,0);break;case 5:this.Dq=A._NewObject(C.AR7,0);break;default:throw new Error(
BrQ+this.AEt.toFixed());}this.J(this.Dq,0);this.Dq.Anx(this.JP);this.Dq.H(BrR);this.
Dq.N=this.N;this.Dq.Us(this.EA);this.Dq.Aws=[this,this.Aws];this.Dq.Au([this,this.
Um,this.Bx]);this.Dq.Uq(this.Il);this.Dq.OQ(this.A2);this.Dq.PU(this.AF);this.Dq.
AFo(this.OK);this.Dq.AFT(this.Afp);if(AAx>0)this.Dq.Ex(AAx);this.Bb(this.Dq);this.
Am();},FV:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FM.AjB((F=this.
N,F[1].call(F[0])));else this.FM=A._NewObject(C.Aeu,0);this.Dq.FV(this);}},He:function(
G){var B;if(!!this.Dq)this.Dq.He(this);},AjO:function(){if(!this.Dq)return 0;return this.
Dq.AjO();},AjQ:function(){if(!this.Dq)return 0;return this.Dq.AjQ();},C5:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Um,this.
Bx],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABA],this);},BnK:function(
E){if(this.AEt===E)return;this.AEt=E;A.pe([this,this.BCm],this);},Ar4:function(E
){if(this.Asn===E)return;this.Asn=E;A.pe([this,this.ABA],this);},ABA:function(G){
var ApC;if(this.Asn){if(this.AOc)ApC=5;else ApC=0;}else if(this.AUd){if(A._GetAutoObject(
A.Device.Converter).S3(this.AM)===10)ApC=4;else ApC=3;}else if(A._GetAutoObject(
A.Device.Converter).S3(this.AM)===10)ApC=2;else ApC=1;this.BnK(ApC);},Aws:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A_)this.FM.AkR((F=this.N,F[1].call(F[
0])));this.Am();},Anx:function(E){if(A.aaZ(this.JP,E))return;if(!!this.JP)A.z$([
this,this.Ao2],this.JP,0);this.JP=E;if(!!E)A.zX([this,this.Ao2],this.JP,0);A.pe([
this,this.Ao2],this);},Ao2:function(G){if(!!this.Dq)this.Dq.Anx(this.JP);},A_I:function(
E){if(this.AUd===E)return;this.AUd=E;A.pe([this,this.ABA],this);},BmD:function(E
){if(this.AOc===E)return;this.AOc=E;A.pe([this,this.ABA],this);},AFo:function(E){
if(A.aa0(this.OK,E))return;this.OK=E;if(!!this.Dq)this.Dq.AFo(E);},AFT:function(
E){if(this.Afp===E)return;this.Afp=E;if(!!this.Dq)this.Dq.AFT(E);},Um:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Rb;this.H(U0);this.V.R(Atf);this.V.L(A.jb.Bm);this.FM=A._NewObject(C.Aeu,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Il
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.ARk={ET:null,FZ:null,Eq:null,Dy:null,CW:null
,Cu:null,FO:function(E){if(this.M_===E)return;C.Li.FO.call(this,E);this.Cu.CV(E);
this.CW.CV(E);this.Dy.CV(E);this.Eq.CV(E);this.FZ.CV(E);this.ET.CV(E);},Yt:function(
HA){var B6=null;switch(HA){case-1:case 0:B6=this.F0;break;case 1:B6=this.Cu;break;
case 2:B6=this.CW;break;case 3:B6=this.Dy;break;case 4:B6=this.Eq;break;case 5:B6=
this.FZ;break;case 6:B6=this.ET;break;case 7:B6=this.G2;break;default:A.ab5("%s"
,Ah4);}return B6;},_Init:function(aArg){C.Li._Init.call(this,aArg);C.DF._Init.call(
this.ET={I:this},0);C.DF._Init.call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={
I:this},0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.CW={I:this},
0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.ARk;this.H(BrS);this.G2.
H(AIO);this.ET.H(AyJ);this.FZ.H(A0d);this.Eq.H(A0e);this.Dy.H(A0f);this.CW.H(A0g
);this.Cu.H(A0h);this.F0.H(A0i);this.EM.H(BaK);this.J(this.ET,-2);this.J(this.FZ
,-2);this.J(this.Eq,-2);this.J(this.Dy,-2);this.J(this.CW,-2);this.J(this.Cu,-2);
this.ET.Dk=[this,this.GX];this.FZ.Dk=[this,this.GX];this.Eq.Dk=[this,this.GX];this.
Dy.Dk=[this,this.GX];this.CW.Dk=[this,this.GX];this.Cu.Dk=[this,this.GX];},_Done:
function(){this.__proto__=C.Li;this.ET._Done();this.FZ._Done();this.Eq._Done();this.
Dy._Done();this.CW._Done();this.Cu._Done();C.Li._Done.call(this);},_ReInit:function(
){C.Li._ReInit.call(this);this.ET._ReInit();this.FZ._ReInit();this.Eq._ReInit();
this.Dy._ReInit();this.CW._ReInit();this.Cu._ReInit();},_Mark:function(D){var B;
C.Li._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvT={Q:null,G2:null,F0:null,EM:null,Iq:null,Ip:null,M_:0,Uy:0,AM:0,F$:99,Init:
function(aArg){A.pe([this,this.LQ],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Yt(0).M,this.Yt(-1).M));var ID=((Ae&
0x40)===0x40);if(ID){this.BgA(A.jb.AV);this.BgB(A.jb.Bm);}else{this.BgA(this.M_);
this.BgB(A.jb.Text);}this.Amp();},FO:function(E){if(this.M_===E)return;this.M_=E;
this.Am();},LQ:function(G){},Yt:function(HA){var B6=null;switch(HA){case-1:case 0:
B6=this.F0;break;case 1:B6=this.G2;break;default:A.ab5("%s",Ah4);}return B6;},Kx:
function(E){if(this.Uy===E)return;this.Uy=E;this.Amp();},Amp:function(){var B;var
F;if(!!this.Q){var DV=this.F0;var AdD=this.Uy;var A7=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A7>0){DV.L3(A7%10);A7=(A7/10)|0;}else if(AdD>0)DV.L3(0);else DV.L3(-
1);DV=(C.Ez.isPrototypeOf(B=this.AqO(DV,0x11))?B:null);AdD=AdD-1;}}},Agf:function(
G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Age:function(G){var F;var BP=this.
AM;this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5
],this);},Bx:function(E){if(E<0)E=0;if(E>this.F$)E=this.F$;if(this.AM===E)return;
this.AM=E;this.Am();},EV:function(E){if(this.F$===E)return;this.F$=E;this.Am();}
,BgA:function(aColor){this.F0.CV(aColor);this.G2.CV(aColor);},BgB:function(aColor
){this.F0.Zu(aColor);this.G2.Zu(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ez._Init.call(this.G2={I:this},0);C.Ez._Init.call(this.F0={I:this},
0);A.acg.BW._Init.call(this.EM={I:this},0);A.Core.BL._Init.call(this.Iq={I:this}
,0);A.Core.BL._Init.call(this.Ip={I:this},0);this.__proto__=C.AvT;this.H(BrT);this.
M_=A.jb.CJ;this.G2.H(AIO);this.F0.H(AyJ);this.EM.H(AyJ);this.EM.Nn(2);this.EM.L(
A.jb.E1);this.Iq.Filter=4;this.Ip.Filter=5;this.J(this.G2,0);this.J(this.F0,0);this.
J(this.EM,0);this.Iq.BM=[this,this.Agf];this.Iq.D1=[this,this.Agf];this.Ip.BM=[this
,this.Age];this.Ip.D1=[this,this.Age];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G2._Done();this.F0._Done();this.EM._Done();this.Iq._Done();this.Ip.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G2._ReInit();this.F0._ReInit();this.EM._ReInit();this.Iq._ReInit();this.Ip.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Iq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ez={AgJ:
null,Background:null,Text:null,Ez:-1,M5:0,AmR:0,Aqt:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ez<0)this.Text.R(Rp);else this.Text.R(this.Ez.toFixed(
));this.Background.L(this.M5);this.Text.L(this.AmR);},L3:function(E){if(this.Ez===
E)return;var B6=E;if((B6<0)||(B6>9))B6=-1;this.Ez=B6;this.Am();},CV:function(E){
if(this.M5===E)return;this.M5=E;this.Am();},AeZ:function(E){if(this.Aqt===E)return;
this.Aqt=E;this.AgJ.Ar(E);if(E===false)this.Text.Z(true);},Zu:function(E){if(this.
AmR===E)return;this.AmR=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TM._Init.call(this.AgJ={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ez;var B;
this.H(All);this.M5=A.jb.CJ;this.AgJ.Fr(750);this.AgJ.Ut(750);this.AgJ.AkB(750);
this.AmR=A.jb.Text;this.Background.A0(0x3);this.Background.H(All);this.Text.A0(0x3
);this.Text.H(All);this.Text.R(Rp);this.J(this.Background,0);this.J(this.Text,0);
this.AgJ.Q=[B=this.Text,B.Fq,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgJ._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgJ._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FC={Y:null,I8:null,AOk:A.jV,ASj:A.jV,Tk:0,AJU:0,A2i:false,A1Q:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABv],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);A.zX([this,this.MN],[B=A._GetAutoObject(A.Device.
Device).An,B.Fp,B.Ft],0);A.pe([this,this.ABv],this);A.pe([this,this.MN],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABv],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);},Bys:function(L$){A._GetAutoObject(A.Device.Helper
).G8(L$);this.Ap8(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap8:function(L6,AcY){A.ab5("%s",Alg);},Vl:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.Bzp],this);else if(!!As&&(As.PopupState===5)){this.A1Q=true;this.Ew(this
);}},Bzp:function(G){if(this.Tk>0){this.A1Q=false;this.Adp(this);this.A_$(0);}},
Aiy:function(G){if((this.AJU+1)<this.Tk)this.A_$(this.AJU+1);else A.aaS([this,this.
Bw3],this);},Bw4:function(s){this.Aiy(s);},A_$:function(E){this.AJU=E;if(this.A1Q===
false){this.Bys(E);A.aaS([this,this.Bw4],this);var XM=(this.AJU/this.Tk)*100;A._GetAutoObject(
A.Device.Device).A3(49,true,A.abk(XM,0,0),0,[this,this.Vl]);}},Aar:function(G){A.
_GetAutoObject(A.Device.Device).A3(49,false,BrU,0,[this,this.Vl]);this.A2i=true;
A.pe([this,this.ALu],this);},Bw3:function(s){this.Aar(s);},Adp:function(G){this.
I8.Z(true);this.A2i=false;this.ALu(this);},BGY:function(s){this.Adp(s);},AAM:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A63();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ew:function(G){A._GetAutoObject(C.A8).FB();},A3W:function(G){A._GetAutoObject(
C.A8).Cd(84);},DJ:function(G){this.N.Z(true);this.N.C2(A.aaL(A.ach.E2));this.N.CE=[
this,this.Ew];this.N.Cw(A.aaL(A.ach.ADN));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Arg(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Cf=null;this.N.I$.C4(100);}else{this.N.Cf=[this,this.AAM];this.
N.I$.C4(255);}this.N.C3(A.aaL(A.ach.AeC));this.N.Ca=[this,this.A3W];},MN:function(
s){this.DJ(s);},ABv:function(G){this.Tk=A._GetAutoObject(A.Device.Device).An.B_(
);if(this.Tk>0)A._GetAutoObject(A.Device.Device).A3(49,true,U3,0,[this,this.Vl]);
else{this.Adp(this);this.Aar(this);}},Akz:function(E){if(this.AOk===E)return;this.
AOk=E;A.pe([this,this.ALu],this);},ALu:function(G){var B;if(this.A2i===false){this.
I8.R(A.jV);return;}var Apd;if(!A._GetAutoObject(A.Device.Device).An.B_()){var Adj=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABv],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);this.AAM(this);if(!A._GetAutoObject(A.Device.Device
).An.QK()||!Adj)Apd=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).AC_(A._GetAutoObject(A.Device.Device).An.Filter)===1)Apd=A.aaR(
A.acf.AOe);else Apd=A.aaR(A.acf.AOd);A._GetAutoObject(A.Device.Device).An.Bk(Adj
);A.zX([this,this.ABv],[B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft],0);}else
Apd=this.ASj;Apd=Apd+(A0k+this.AOk);this.I8.R(Apd);},Ae_:function(E){if(this.ASj===
E)return;this.ASj=E;A.pe([this,this.ALu],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkS._Init.call(this.I8={
I:this},0);this.__proto__=C.FC;this.Dr(C.Abv);this.Y.H(Ff);this.Y.JX(1);this.I8.
H(Ff);this.J(this.Y,0);this.J(this.I8,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I8._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I8._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7C={Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A7C;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvV={K3:null,MY:null,AY:0,Yj:function(){this.K3=null;this.MY=null;this.AY=0;
},Ow:function(A7){var Hh;Hh=A._NewObject(C.A7C,0);Hh.A5=A7;if(!this.K3){this.K3=
Hh;this.MY=Hh;this.AY=1;}else{this.MY.Ah=Hh;this.MY=Hh;this.AY=this.AY+1;}},AmZ:
function(){var B;var RN=0;var Ol=this.K3;while(!!Ol){RN+=Ol.A5;Ol=Ol.Ah;}return RN;
},AjP:function(){if(!this.AY)return 0;return this.AmZ()/this.AY;},AqY:function(){
var B;if(!this.AY)return 0;var A1K=this.AjP();var Adg=0;var Ol=this.K3;while(!!Ol
){Adg+=Math.pow(Ol.A5-A1K,2);Ol=Ol.Ah;}Adg/=this.AY;Adg=Math.sqrt(Adg);return Adg;
},_Init:function(aArg){this.__proto__=C.AvV;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOl={Gc:null,Aey:null,Yq:null,C8:null,I8:null,
CQ:function(){this.A4W(this);},Init:function(aArg){A.zV([this,this.A4W],A._GetAutoObject(
A.Device.Device).Pr,0);A.pe([this,this.A4W],this);},Ew:function(G){A._GetAutoObject(
C.A8).FB();},A4W:function(G){this.Yq.Ch(-1);this.I8.Z(!this.Gc.AX.B_());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gc._Init.call(this.Gc={I:this},0);C.
Aey._Init.call(this.Aey={I:this},0);C.Yq._Init.call(this.Yq={I:this},0);A.acg.C8.
_Init.call(this.C8={I:this},0);C.AkS._Init.call(this.I8={I:this},0);this.__proto__=
C.AOl;this.N.Z(true);this.Dr(C.APg);this.Gc.H(Ath);this.Gc.N4(C.AmQ);this.Aey.H(
IX);this.Yq.H(As$);this.C8.DC(BrV);this.C8.DM(BrW);this.C8.Nn(3);this.C8.L(A.jb.
Text);this.I8.H(Aok);this.I8.R((A.aaR(A.acf.A8m)+A0k)+A.aaR(A.acf.A6F));this.J(this.
Gc,0);this.J(this.Aey,0);this.J(this.Yq,0);this.J(this.C8,0);this.J(this.I8,0);this.
N.CE=[this,this.Ew];this.N.C2(A.aaL(A.ach.E2));this.Gc.Zt(A._GetAutoObject(A.Device.
Device).Pr);this.Yq.Zt(A._GetAutoObject(A.Device.Device).Pr);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gc._Done();this.Aey._Done();this.Yq._Done();
this.C8._Done();this.I8._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gc._ReInit();this.Aey._ReInit();this.Yq._ReInit();this.C8.
_ReInit();this.I8._ReInit();this.I8.R((A.aaR(A.acf.A8m)+A0k)+A.aaR(A.acf.A6F));this.
CQ();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gc)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOo={Aug:null,Auf:null,Aui:null,Auh:null,Auk:null,Auj:null,Aum:null,Aul:null
,AaK:null,Yy:null,Abm:null,Abl:null,RatedAttribute:0,Init:function(aArg){this.SJ(
2);},DE:function(G){var D5=(A.Core.BL.isPrototypeOf(G)?G:null);switch(D5.CP){case
6:switch(this.RatedAttribute){case 2:this.SJ(3);break;case 1:this.SJ(2);break;case
4:this.SJ(1);break;case 3:this.SJ(4);break;default:this.SJ(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SJ(1);break;case 1:this.SJ(4);break;case 4:this.
SJ(3);break;case 3:this.SJ(2);break;default:this.SJ(0);}break;default:D5.NM=true;
}},Ap8:function(L6,AcY){if(!L6)return;var Fy=A._NewObject(A.Device.Filter,0);var
HX=A._NewObject(A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,AcY,true);Fy.
CX(HX);var AA5=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA5.Initialize(
3,5,0,true);Fy.CX(AA5);L6.Bk(Fy);},Aiy:function(G){var Ap6=0;var A4e=A._GetAutoObject(
A.Device.Device).Bt.B_();var B2=A._NewObject(A.Device.Rating,0);while(Ap6<A4e){B2.
E3(Ap6,A._GetAutoObject(A.Device.Device).Bt);this.BdU(B2,0);var BCI=A._GetAutoObject(
A.Device.Helper).ZS(2);this.BdU(B2,BCI);Ap6++;}C.FC.Aiy.call(this,G);},Aar:function(
G){A.pe([this,this.Bdx],this);C.FC.Aar.call(this,G);},Adp:function(G){this.Aug=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Auf=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Auh=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aui=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auj=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auk=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aul=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aum=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FC.Adp.
call(this,G);},DJ:function(G){C.FC.DJ.call(this,G);this.N.OS(true);this.N.OT(true
);},BdU:function(D3,Bcs){if(!D3||(D3.Timestamp<Bcs))return;if(!Bcs){this.Aug.Set(
D3.Appearance,this.Aug.Get(D3.Appearance)+1);this.Aui.Set(D3.Faeces,this.Aui.Get(
D3.Faeces)+1);this.Auk.Set(D3.Feed,this.Auk.Get(D3.Feed)+1);this.Aum.Set(D3.Respiratory
,this.Aum.Get(D3.Respiratory)+1);}else{this.Auf.Set(D3.Appearance,this.Auf.Get(D3.
Appearance)+1);this.Auh.Set(D3.Faeces,this.Auh.Get(D3.Faeces)+1);this.Auj.Set(D3.
Feed,this.Auj.Get(D3.Feed)+1);this.Aul.Set(D3.Respiratory,this.Aul.Get(D3.Respiratory
)+1);}},SJ:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yy.Kz(this.AaK.Lx(E));A.pe([this,this.Bdx],this);},Bdx:function(G){var AaL=null;
var AaM=null;switch(this.RatedAttribute){case 2:{AaL=this.Auf;AaM=this.Aug;}break;
case 4:{AaL=this.Auh;AaM=this.Aui;}break;case 1:{AaL=this.Auj;AaM=this.Auk;}break;
case 0:{AaL=A._NewObject(A.Device.Int32ArrayWrapper,0);AaM=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaL=this.Aul;AaM=this.Aum;}break;default:throw new
Error(BrX+this.RatedAttribute.toFixed());}var AGw=A._NewObject(A.acv.AUx,0);AGw.
Ow(AaL.Get(3),A.jb.E1);AGw.Ow(AaL.Get(2),A.jb.H_);AGw.Ow(AaL.Get(1),A.jb.Gj);var
AGx=A._NewObject(A.acv.AUx,0);AGx.Ow(AaM.Get(3),A.jb.E1);AGx.Ow(AaM.Get(2),A.jb.
H_);AGx.Ow(AaM.Get(1),A.jb.Gj);this.Abl.Ab8(AGw);this.Abm.Ab8(AGx);var A4I=AaL.AmZ(
)-AaL.Get(5);var Bf8=0;var Bf6=0;if(A4I>0){Bf8=(AaL.Get(2)/A4I)*100;Bf6=(AaL.Get(
1)/A4I)*100;}var ALh=AaM.AmZ()-AaM.Get(5);this.I8.Z(!ALh);var Bf9=0;var Bf7=0;if(
ALh>0){Bf9=(AaM.Get(2)/ALh)*100;Bf7=(AaM.Get(1)/ALh)*100;}this.Abl.A_9(A.abk(Bf8
,0,0)+AfG);this.Abl.A_L(A.abk(Bf6,0,0)+AfG);this.Abm.A_9(A.abk(Bf9,0,0)+AfG);this.
Abm.A_L(A.abk(Bf7,0,0)+AfG);},_Init:function(aArg){C.FC._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaK={I:this},0);C.NJ._Init.call(this.
Yy={I:this},0);C.ACQ._Init.call(this.Abm={I:this},0);C.ACQ._Init.call(this.Abl={
I:this},0);this.__proto__=C.AOo;this.Dr(C.APh);this.Akz(A.aaR(A.acf.A6G));this.Ae_(
A.aaR(A.acf.Anp));this.Yy.H(IX);this.Yy.Aj(true);this.Yy.T(A.aaR(A.acf.Axu)+A.aaR(
A.acf.Colon));this.Yy.Bi(false);this.Yy.BnI(false);this.Abm.H(BrY);this.Abm.T(A.
aaR(A.acf.AGh));this.Abl.H(BrZ);this.Abl.T(A.aaR(A.acf.A7L));this.I8.H(Aok);this.
J(this.Yy,-1);this.J(this.Abm,-1);this.J(this.Abl,-1);this.Aug=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auf=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aui=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auh=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Auk=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auj=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aum=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FC;this.AaK._Done();this.Yy._Done();this.Abm._Done();this.Abl.
_Done();C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.
AaK._ReInit();this.Yy._ReInit();this.Abm._ReInit();this.Abl._ReInit();this.Akz(A.
aaR(A.acf.A6G));this.Ae_(A.aaR(A.acf.Anp));this.Yy.T(A.aaR(A.acf.Axu)+A.aaR(A.acf.
Colon));this.Abm.T(A.aaR(A.acf.AGh));this.Abl.T(A.aaR(A.acf.A7L));},_Mark:function(
D){var B;C.FC._Mark.call(this,D);if((B=this.Aug)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aui)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Auh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Auk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auj)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aum)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aul)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOp={Aex:null,UR:null,US:null,Aew:null,UO:null,UP:null,AJW:0,AJV:0,AJA:0,AJz:
0,Adi:false,CQ:function(){this.Aar(this);},Ap8:function(L6,AcY){if(!L6)return;var
Fy=A._NewObject(A.Device.Filter,0);var HX=A._NewObject(A.Device.Int32FilterCriterion
,0);HX.Initialize(1,0,AcY,true);Fy.CX(HX);var ABm=A._NewObject(A.Device.Int32FilterCriterion
,0);ABm.Initialize(7,2,0,true);Fy.CX(ABm);L6.Bk(Fy);},Aiy:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJW++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJV++;var Ap6=0;var A4e=A._GetAutoObject(
A.Device.Device).Bt.B_();var Aue;var ABH=0;while(Ap6<A4e){this.Adi=true;Aue=A._GetAutoObject(
A.Device.Device).Bt.I9(Ap6,9);if(Aue===1)ABH=1;else if((Aue===2)&&(ABH!==1))ABH=
2;Ap6++;}if(ABH===1)this.AJz++;else if(ABH===2)this.AJA++;C.FC.Aiy.call(this,G);
},Aar:function(G){var Bf4=0;var Bf5=0;if(this.Tk>0){Bf4=(this.AJW/this.Tk)*100;Bf5=(
this.AJV/this.Tk)*100;}this.UR.Kz(((((((A.abk(Bf4,0,0)+AIP)+this.AJW.toFixed())+
CR)+A.aaR(A.acf.AEA))+CR)+this.Tk.toFixed())+O_);this.US.Kz(((((((A.abk(Bf5,0,0)+
AIP)+this.AJV.toFixed())+CR)+A.aaR(A.acf.AEA))+CR)+this.Tk.toFixed())+O_);var Bf2=
0;var Bf3=0;if(this.Tk>0){Bf2=(this.AJA/this.Tk)*100;Bf3=(this.AJz/this.Tk)*100;
}this.UO.Kz(((((((A.abk(Bf2,0,0)+AIP)+this.AJA.toFixed())+CR)+A.aaR(A.acf.AEA))+
CR)+this.Tk.toFixed())+O_);this.UP.Kz(((((((A.abk(Bf3,0,0)+AIP)+this.AJz.toFixed(
))+CR)+A.aaR(A.acf.AEA))+CR)+this.Tk.toFixed())+O_);this.I8.Z(!this.Adi);C.FC.Aar.
call(this,G);},Adp:function(G){this.AJz=0;this.AJA=0;this.AJV=0;this.AJW=0;this.
Adi=false;C.FC.Adp.call(this,G);},_Init:function(aArg){C.FC._Init.call(this,aArg
);C.Agz._Init.call(this.Aex={I:this},0);C.Ajs._Init.call(this.UR={I:this},0);C.Ajs.
_Init.call(this.US={I:this},0);C.Agz._Init.call(this.Aew={I:this},0);C.Ajs._Init.
call(this.UO={I:this},0);C.Ajs._Init.call(this.UP={I:this},0);this.__proto__=C.AOp;
this.Dr(C.APi);this.Akz(A.aaR(A.acf.A6H));this.Ae_(A.aaR(A.acf.Arv));this.Aex.H(
IX);this.Aex.Aj(true);this.Aex.T(A.aaR(A.acf.A6L));this.Aex.Bi(false);this.UR.H(
Qd);this.UR.Aj(true);this.UR.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UR.
Bi(true);this.UR.AkE(2);this.US.H(Aag);this.US.Aj(true);this.US.T(A.aaR(A.acf.AvC
)+A.aaR(A.acf.Colon));this.US.Bi(true);this.US.AkE(1);this.Aew.H(Alh);this.Aew.Aj(
true);this.Aew.T(A.aaR(A.acf.A6M));this.Aew.Bi(false);this.UO.H(Aoq);this.UO.Aj(
true);this.UO.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UO.Bi(true);this.
UO.AkE(2);this.UP.H(As$);this.UP.Aj(true);this.UP.T(A.aaR(A.acf.AvC)+A.aaR(A.acf.
Colon));this.UP.Bi(true);this.UP.AkE(1);this.J(this.Aex,0);this.J(this.UR,0);this.
J(this.US,0);this.J(this.Aew,0);this.J(this.UO,0);this.J(this.UP,0);this.UR.S(A.
aaL(A.fl.Ak));this.US.S(A.aaL(A.fl.Ak));this.UO.S(A.aaL(A.fl.Ak));this.UP.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FC;this.Aex._Done();this.UR._Done(
);this.US._Done();this.Aew._Done();this.UO._Done();this.UP._Done();C.FC._Done.call(
this);},_ReInit:function(){C.FC._ReInit.call(this);this.Aex._ReInit();this.UR._ReInit(
);this.US._ReInit();this.Aew._ReInit();this.UO._ReInit();this.UP._ReInit();this.
Akz(A.aaR(A.acf.A6H));this.Ae_(A.aaR(A.acf.Arv));this.Aex.T(A.aaR(A.acf.A6L));this.
UR.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.US.T(A.aaR(A.acf.AvC)+A.aaR(
A.acf.Colon));this.Aew.T(A.aaR(A.acf.A6M));this.UO.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UP.T(A.aaR(A.acf.AvC)+A.aaR(A.acf.Colon));this.UR.S(A.aaL(A.fl.
Ak));this.US.S(A.aaL(A.fl.Ak));this.UO.S(A.aaL(A.fl.Ak));this.UP.S(A.aaL(A.fl.Ak
));this.CQ();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.Aex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
US)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UP)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqN={K$:null
,Ajg:null,Ajh:null,Amq:null,Abz:null,W6:null,Abw:null,S5:null,Abx:null,S6:null,AbA:
null,W7:null,Ay:null,Add:0,AAy:0,Apx:0,A2X:0,Bep:0,CQ:function(){this.Aar(this);
},DE:function(G){switch(this.Cq.CP){case 4:{if(this.I8.Fq())return;var QA=this.Y.
Br[1]+80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.VA(null,null);}break;case 5:{if(this.
I8.Fq())return;var QA=this.Y.Br[1]-80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.VA(null
,null);}break;default:C.FC.DE.call(this,G);}},Ap8:function(L6,AcY){if(!L6)return;
var Fy=A._NewObject(A.Device.Filter,0);var HX=A._NewObject(A.Device.Int32FilterCriterion
,0);HX.Initialize(1,0,AcY,true);Fy.CX(HX);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fy.CX(Ac_);L6.Bk(Fy);},Aiy:function(G){if(this.Bef(
)){this.K$.Ow(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arh()){var Qm=A._GetAutoObject(A.Device.Helper).Mb(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qm>0){var A2v=A._GetAutoObject(A.acj.DU).AlB(Qm,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajg.
Ow(A2v);}}var A3g=A._GetAutoObject(A.Device.Device).Bt.B_()-2;if(A3g>=0){var BAy=
A._GetAutoObject(A.Device.Device).Bt.ADa(A3g,8);var BAx=A._GetAutoObject(A.Device.
Device).Bt.Hv(A3g,6);var Qm=A._GetAutoObject(A.Device.Helper).Mb(BAx,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qm>0){var A2v=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BAy)/Qm)|0;this.Ajh.Ow(A2v);}}if((A._GetAutoObject(
A.Device.Helper).W.Arh()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RQ()<=180)){var ALF=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tt=A._GetAutoObject(A.Device.
Helper).Mb(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BBP=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALF/Tt);this.Amq.Ow(BBP);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Add++;this.Apx=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZS(7)){this.AAy++;this.A2X=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bep=A._GetAutoObject(A.Device.Helper).Mb(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.FC.Aiy.call(
this,G);},Aar:function(G){var A45=this.Ajg.AjP()|0;var A47=this.Ajh.AjP()|0;if(this.
Add>1)A._GetAutoObject(A.Device.Device).A3(56,true,this.Add.toFixed(),0,null);if(
this.Add===1)A._GetAutoObject(A.Device.Device).A3(53,true,this.Apx.toFixed(),0,null
);if(this.AAy>1)A._GetAutoObject(A.Device.Device).A3(52,true,this.AAy.toFixed(),
0,null);if(this.AAy===1)A._GetAutoObject(A.Device.Device).A3(57,true,(this.A2X.toFixed(
)+Ate)+this.Bep.toFixed(),0,null);if(this.K$.AY>0)this.W6.T(((((((A._GetAutoObject(
A.Device.Converter).Ax6(this.K$.AjP()|0,1)+AyK)+A._GetAutoObject(A.Device.Converter
).Ax6(this.K$.AqY()|0,1))+CR)+A._GetAutoObject(A.acj.DU).Af4())+AyL)+this.K$.AY.
toFixed())+O_);else this.W6.T(A.aaR(A.acf.Unknown));if(this.Ajg.AY>0)this.S5.T(((((((
A._GetAutoObject(A.Device.Converter).S_(A45,2,true)+AyK)+A._GetAutoObject(A.Device.
Converter).S_(this.Ajg.AqY()|0,2,true))+CR)+A._GetAutoObject(A.acj.DU).Aaw())+AyL
)+this.Ajg.AY.toFixed())+O_);else this.S5.T(A.aaR(A.acf.Unknown));if(this.Ajh.AY>
0)this.S6.T(((((((A._GetAutoObject(A.Device.Converter).S_(A47,2,true)+AyK)+A._GetAutoObject(
A.Device.Converter).S_(this.Ajh.AqY()|0,2,true))+CR)+A._GetAutoObject(A.acj.DU).
Aaw())+AyL)+this.Ajh.AY.toFixed())+O_);else this.S6.T(A.aaR(A.acf.Unknown));if(this.
Amq.AY>0)this.W7.T(((((((A.abk(this.Amq.AjP(),0,1)+AyK)+A.abk(this.Amq.AqY(),0,1
))+CR)+A.aaR(A.acf.Bim))+AyL)+this.Amq.AY.toFixed())+O_);else this.W7.T(A.aaR(A.
acf.Unknown));var A46=0;var A48=0;var Adi=false;if(this.K$.AY>0)Adi=true;var Ie=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AKd=A._GetAutoObject(A.Device.
Device).An.Filter.DL(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AKd)?AKd:null))Ie=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AKd)?AKd:null
).A5;}if(this.Ajg.AY>0){Adi=true;A46=A._GetAutoObject(A.Device.Converter).Bau(A45
,Ie);}if(this.Ajh.AY>0){Adi=true;A48=A._GetAutoObject(A.Device.Converter).Bau(A47
,Ie);}this.S5.AkE(A46);this.S6.AkE(A48);this.I8.Z(!Adi);C.FC.Aar.call(this,G);},
Adp:function(G){this.K$.Yj();this.Ajg.Yj();this.Ajh.Yj();this.Amq.Yj();this.Add=
0;this.AAy=0;this.Apx=0;this.A2X=0;C.FC.Adp.call(this,G);},Fk:function(G){var B;
this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.
MC(-this.Y.Br[1]);},Bef:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FC._Init.call(this,aArg);C.Agz._Init.call(this.Abz={I:
this},0);C.II._Init.call(this.W6={I:this},0);C.Agz._Init.call(this.Abw={I:this},
0);C.Ajs._Init.call(this.S5={I:this},0);C.Agz._Init.call(this.Abx={I:this},0);C.
Ajs._Init.call(this.S6={I:this},0);C.Agz._Init.call(this.AbA={I:this},0);C.II._Init.
call(this.W7={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqN;
this.Dr(C.AvB);this.Akz(A.aaR(A.acf.A6I));this.Ae_(A.aaR(A.acf.Akm));this.Abz.H(
Atl);this.Abz.Aj(true);this.Abz.T(A.aaR(A.acf.A5E));this.Abz.Bi(false);this.Abz.
Kx(5);this.W6.H(A0l);this.W6.Aj(true);this.W6.T(A.jV);this.W6.Bi(true);this.Abw.
H(Ati);this.Abw.Aj(true);this.Abw.T(A.aaR(A.acf.AL4));this.Abw.Bi(false);this.Abw.
Kx(5);this.S5.H(Atj);this.S5.Aj(true);this.S5.T(A.jV);this.S5.Bi(true);this.S5.Kz(
A.jV);this.Abx.H(Atk);this.Abx.Aj(true);this.Abx.T(A.aaR(A.acf.AuE));this.Abx.Bi(
false);this.Abx.Kx(5);this.S6.H(Br0);this.S6.Aj(true);this.S6.T(A.jV);this.S6.Bi(
true);this.S6.Kz(A.jV);this.AbA.H(A0m);this.AbA.Aj(true);this.AbA.T(A.aaR(A.acf.
A5M));this.AbA.Bi(false);this.AbA.Kx(5);this.W7.H(Aox);this.W7.Aj(true);this.W7.
T(A.jV);this.W7.Bi(true);this.Ay.H(Iu);this.J(this.Abz,-1);this.J(this.W6,-1);this.
J(this.Abw,-1);this.J(this.S5,-1);this.J(this.Abx,-1);this.J(this.S6,-1);this.J(
this.AbA,-1);this.J(this.W7,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fk];this.
K$=A._NewObject(C.AvV,0);this.Ajg=A._NewObject(C.AvV,0);this.Ajh=A._NewObject(C.
AvV,0);this.W6.S(A.aaL(A.fl.Af));this.S5.S(A.aaL(A.fl.Ak));this.S6.S(A.aaL(A.fl.
Ak));this.W7.S(A.aaL(A.fl.Ak));this.Amq=A._NewObject(C.A6S,0);},_Done:function(){
this.__proto__=C.FC;this.Abz._Done();this.W6._Done();this.Abw._Done();this.S5._Done(
);this.Abx._Done();this.S6._Done();this.AbA._Done();this.W7._Done();this.Ay._Done(
);C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.Abz._ReInit(
);this.W6._ReInit();this.Abw._ReInit();this.S5._ReInit();this.Abx._ReInit();this.
S6._ReInit();this.AbA._ReInit();this.W7._ReInit();this.Ay._ReInit();this.Akz(A.aaR(
A.acf.A6I));this.Ae_(A.aaR(A.acf.Akm));this.Abz.T(A.aaR(A.acf.A5E));this.Abw.T(A.
aaR(A.acf.AL4));this.Abx.T(A.aaR(A.acf.AuE));this.AbA.T(A.aaR(A.acf.A5M));this.W6.
S(A.aaL(A.fl.Af));this.S5.S(A.aaL(A.fl.Ak));this.S6.S(A.aaL(A.fl.Ak));this.W7.S(
A.aaL(A.fl.Ak));this.CQ();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((
B=this.K$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajg)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amq)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abv={_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.Abv;this.
Df.Ax(A.aaL(A.ach.ADJ));},_className:"Application::HeaderEvaluationFilter"};C.Kt={
CQ:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjS.DX.call(this
,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad0(A._GetAutoObject(A.Device.
Device).Km));},_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.
Kt;},_ReInit:function(){C.AjS._ReInit.call(this);this.CQ();},_className:"Application::HeaderListFilter"
};C.AvB={Init:function(aArg){this.Df.Ax(A._GetAutoObject(A.acj.DU).BdN());},_Init:
function(aArg){C.Abv._Init.call(this,aArg);this.__proto__=C.AvB;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APi={Init:function(
aArg){this.Df.Ax(A.aaL(A.ach.Ag7));},_Init:function(aArg){C.Abv._Init.call(this,
aArg);this.__proto__=C.APi;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.APh={Init:function(aArg){this.Df.Ax(A.aaL(A.ach.Arc));},_Init:function(aArg){
C.Abv._Init.call(this,aArg);this.__proto__=C.APh;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.APg={Sn:null,Df:null,AP:null,CQ:function(){this.Sn.R(A.aaR(A.acf.ANl));},Dg:
function(E){C.BR.Dg.call(this,E);this.Sn.L(E);this.Df.L(E);},_Init:function(aArg
){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Sn={I:this},0);A.acg.Ap._Init.
call(this.Df={I:this},0);A.acg.C8._Init.call(this.AP={I:this},0);this.__proto__=
C.APg;this.Sn.H(Br1);this.Sn.R(A.aaR(A.acf.ANl));this.Sn.A6(0x11);this.Df.H(Br2);
this.AP.DC(Br3);this.AP.DM(Br4);this.AP.L(A.jb.Bc);this.J(this.Sn,0);this.J(this.
Df,0);this.J(this.AP,0);this.Sn.S(A.aaL(A.fl.Af));this.Sn.AZ(A.aaL(A.fl.Ak));this.
Df.Ax(A.aaL(A.ach.AQu));},_Done:function(){this.__proto__=C.BR;this.Sn._Done();this.
Df._Done();this.AP._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Sn._ReInit();this.Df._ReInit();this.AP._ReInit();this.Sn.R(A.aaR(
A.acf.ANl));this.Sn.S(A.aaL(A.fl.Af));this.Sn.AZ(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;C.BR._Mark.call(this,D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aey={T0:null,Aj2:
null,AjZ:null,Aj0:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.T0={I:this},0);A.acg.Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.
call(this.AjZ={I:this},0);A.acg.Ap._Init.call(this.Aj0={I:this},0);this.__proto__=
C.Aey;this.T0.H(Br5);this.T0.R(A.aaR(A.acf.Year));this.T0.A6(0x11);this.T0.L(A.jb.
Text);this.Aj2.H(BaO);this.Aj2.L(A.jb.Text);this.AjZ.H(Br6);this.AjZ.L(A.jb.Text
);this.Aj0.H(Br7);this.Aj0.L(A.jb.Text);this.J(this.T0,0);this.J(this.Aj2,0);this.
J(this.AjZ,0);this.J(this.Aj0,0);this.T0.S(A.aaL(A.fl.Kr));this.T0.AZ(A.aaL(A.fl.
HJ));this.Aj2.Ax(A.aaL(A.ach.AQI));this.AjZ.Ax(A.aaL(A.ach.AQH));this.Aj0.Ax(A.aaL(
A.ach.AQP));},_Done:function(){this.__proto__=C.EB;this.T0._Done();this.Aj2._Done(
);this.AjZ._Done();this.Aj0._Done();C.EB._Done.call(this);},_ReInit:function(){C.
EB._ReInit.call(this);this.T0._ReInit();this.Aj2._ReInit();this.AjZ._ReInit();this.
Aj0._ReInit();this.T0.R(A.aaR(A.acf.Year));this.T0.S(A.aaL(A.fl.Kr));this.T0.AZ(
A.aaL(A.fl.HJ));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.T0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmQ={Ajy:null,AP:null
,A$:null,Ea:null,UL:null,SW:null,Gu:null,XM:0,AtP:0,AlF:0,ABI:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SW.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.SW.M[2]-1,0,this.SW.M[
2]+1,aSize[1]]);this.UL.H([this.SW.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UL.M[2]-1,0,this.UL.M[2]+1,aSize[1]]);this.Gu.H([this.UL.M[2],0,aSize[
0],aSize[1]]);this.Ajy.H(this.Gu.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABI.toFixed());this.SW.L(this.V.AQ);this.SW.R(this.AlF.toFixed());this.UL.
L(this.V.AQ);this.UL.R(this.AtP.toFixed());var B2=this.BBO(this.XM);this.Gu.L(A.
_GetAutoObject(A.acj.Assessment).XC(B2));this.Ajy.L(A._GetAutoObject(A.acj.Assessment
).Qr(B2));this.Gu.R(A.abk(this.XM,0,0)+AfG);},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;Ad=(this.AX.B_()-Ad)-1;if(!!this.AX){this.AlF=this.AX.CF(Ad,1);this.AtP=
this.AX.CF(Ad,2);this.ABI=this.AX.CF(Ad,0);if(this.AlF>0)this.XM=(this.AtP/this.
AlF)*100;else this.XM=0;this.Am();}},BBO:function(XM){if(XM>=8)return 1;else if(
XM>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ajy={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UL={I:this},0);A.acg.Text._Init.call(this.SW={I:this},0
);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.AmQ;this.Ajy.H(Aoo);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.H(Aoo);this.Ea.L(A.jb.Bc);this.UL.
L(A.jb.Text);this.SW.H(Aoo);this.SW.L(A.jb.Text);this.Gu.L(A.jb.Text);this.J(this.
Ajy,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.UL,0);this.
J(this.SW,0);this.J(this.Gu,0);this.UL.S(A.aaL(A.fl.Af));this.SW.S(A.aaL(A.fl.Af
));this.Gu.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajy._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.UL._Done(
);this.SW._Done();this.Gu._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajy._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea.
_ReInit();this.UL._ReInit();this.SW._ReInit();this.Gu._ReInit();this.UL.S(A.aaL(
A.fl.Af));this.SW.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajs={
BU:null,Ax1:A.jV,Rating:0,Ai:function(Ae){C.II.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).XC(this.Rating));}this.BU.L(this.V.AQ);},S:function(
E){C.II.S.call(this,E);if((E===A.aaL(A.fl.Kr))||(E===A.aaL(A.fl.Af)))this.BU.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.HJ))||(E===A.aaL(A.fl.Ak)))this.BU.S(A.aaL(
A.fl.Ak));else this.BU.S(E);},Kz:function(E){if(this.Ax1===E)return;this.Ax1=E;this.
BU.R(E);},AkE:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.II._Init.call(this,aArg);A.acg.Text._Init.call(this.BU={I:this}
,0);this.__proto__=C.Ajs;this.BU.A0(0x34);this.BU.H(Aai);this.BU.Jc(true);this.BU.
A6(0x11);this.BU.L(A.jb.Text);this.BU.Aj(true);this.J(this.BU,0);this.BU.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.II;this.BU._Done();C.II._Done.call(
this);},_ReInit:function(){C.II._ReInit.call(this);this.BU._ReInit();this.BU.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.II._Mark.call(this,D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACQ={
N7:null,SM:null,V:null,AnR:null,AnQ:null,Acg:null,Acf:null,DK:Ly,Baz:A.jV,A$t:A.
jV,Ab8:function(E){if(this.N7===E)return;this.N7=E;this.SM.Ab8(this.N7);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_9:function(E){if(this.Baz===E
)return;this.Baz=E;this.Acg.R(E);},A_L:function(E){if(this.A$t===E)return;this.A$t=
E;this.Acf.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SM._Init.
call(this.SM={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnR={I:this},0);A.acg.AL._Init.call(this.AnQ={I:this},0);A.acg.Text._Init.
call(this.Acg={I:this},0);A.acg.Text._Init.call(this.Acf={I:this},0);this.__proto__=
C.ACQ;this.H(Br8);this.SM.H(Br9);this.SM.Ar(false);this.SM.BnR(360);this.SM.Bn1(
0.5);this.V.A0(0x1D);this.V.H(Ta);this.V.KU(true);this.V.R(Ly);this.V.L(A.jb.Text
);this.AnR.H(BaP);this.AnR.L(A.jb.H_);this.AnQ.H(BaQ);this.AnQ.L(A.jb.Gj);this.Acg.
A0(0x1D);this.Acg.H(BaP);this.Acg.L(A.jb.Text);this.Acf.A0(0x1D);this.Acf.H(BaQ);
this.Acf.L(A.jb.CU);this.J(this.SM,0);this.J(this.V,0);this.J(this.AnR,0);this.J(
this.AnQ,0);this.J(this.Acg,0);this.J(this.Acf,0);this.SM.Bn2(A.aaL(A.acv.AT8));
this.V.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SM._Done();this.V._Done();this.AnR.
_Done();this.AnQ._Done();this.Acg._Done();this.Acf._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SM._ReInit();this.V._ReInit(
);this.AnR._ReInit();this.AnQ._ReInit();this.Acg._ReInit();this.Acf._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkS={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AkS;this.H(U1);this.Background.A0(0x3F);this.Background.
H(U1);this.Background.L(A.jb.Bko);this.Text.A0(0x3F);this.Text.H(U1);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.AZ(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Re={Ak3:null,NW:null,C_:null,AcE:null,JR:null,TemperatureUnit:null,MJ:null,PX:
null,Sk:null,UA:null,Lt:null,Ji:null,Z4:null,Z3:null,Sl:null,HG:null,AjI:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlN());
this.UA.R(A._GetAutoObject(A.acj.Temperature).AlN());this.Sl.Z(!A._GetAutoObject(
A.Device.Device).AmS);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An9();this.AxY(
);this.AcH();this.AxZ();},I3:function(G){this.WV(this);},CC:function(G){var B;C.
AB.CC.call(this,G);A.zX([this,this.AKK],[B=A._GetAutoObject(A.Device.Device),B.AEM
,B.AI1],0);A.zX([this,this.AAN],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI3
],0);A.zX([this,this.AAN],[B=A._GetAutoObject(A.Device.Device),B.ASU,B.A0C],0);A.
zX([this,this.A3C],[B=A._GetAutoObject(A.Device.Device),B.Ary,B.Ato],0);A.zX([this
,this.A3u],[B=A._GetAutoObject(A.Device.Device),B.AEJ,B.AIY],0);A._GetAutoObject(
A.Device.Device).AhP();if(A._GetAutoObject(A.Device.Device).AmS)A._GetAutoObject(
A.Device.Device).Ae2(true);A._GetAutoObject(A.Device.Device).AxK();A.pe([this,this.
A3u],this);A.pe([this,this.AAN],this);A.pe([this,this.A3C],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.Device
).Uw(false);A._GetAutoObject(A.Device.Device).Afa(false);A._GetAutoObject(A.Device.
Device).Ae2(false);A.z$([this,this.AKK],[B=A._GetAutoObject(A.Device.Device),B.AEM
,B.AI1],0);A.z$([this,this.AAN],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI3
],0);A.z$([this,this.AAN],[B=A._GetAutoObject(A.Device.Device),B.ASU,B.A0C],0);A.
z$([this,this.A3C],[B=A._GetAutoObject(A.Device.Device),B.Ary,B.Ato],0);A.z$([this
,this.A3u],[B=A._GetAutoObject(A.Device.Device),B.AEJ,B.AIY],0);},AAN:function(G
){this.Am();},An9:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CJ);this.C_.L(A.jb.Gj);this.JR.L(this.C_.AQ);this.
MJ.L(this.C_.AQ);this.TemperatureUnit.L(this.C_.AQ);}break;default:{this.Background.
L(A.jb.CJ);this.C_.L(A.jb.AV);this.JR.L(A.jb.Text);this.MJ.L(this.JR.AQ);this.TemperatureUnit.
L(this.JR.AQ);this.HG.L(A.jb.Gj);}}},AxY:function(){this.Ak3.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JR.R(A.aaR(A.acf.AD0));this.C_.Ax(A.aaL(A.ach.AvO));this.C_.Cv(0);
this.NW.Cv(0);}break;case 1:{this.AVP(A._GetAutoObject(A.Device.Device).Lw,false
);this.C_.Ax(A.aaL(A.ach.AvO));this.NW.Cv(0);}break;case 2:{this.Sk.R(A._GetAutoObject(
A.Device.Converter).Ak2(A._GetAutoObject(A.Device.Device).AGl));this.AVP(A._GetAutoObject(
A.Device.Device).Lw,false);this.C_.Ax(null);this.NW.Cv(1);this.AcE.Z(true);this.
PX.Z(true);this.Sk.Z(true);this.UA.Z(true);}break;case 3:{this.AUR();this.AVP(A.
_GetAutoObject(A.Device.Device).Lw,true);this.AcE.Z(false);this.PX.Z(false);this.
Sk.Z(false);this.UA.Z(false);}break;case 4:{this.JR.R(A.aaR(A.acf.BkB));this.MJ.
R(A.aaR(A.acu.Akl));this.C_.Ax(A.aaL(A.ach.AvQ));this.C_.Cv(2);this.NW.Cv(0);}break;
default:A.ab5("%s%e",AH9,A._GetAutoObject(A.Device.Device).MeasureState);}},AcH:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Lw<=3240)||(A._GetAutoObject(A.Device.Device
).Lw>=5460))this.N.C3(null);else this.N.C3(A.aaL(A.ach.AeB));this.N.Cw(null);}break;
default:;}},AsH:function(G){A._GetAutoObject(C.A8).FB();},WV:function(G){},A0Q:function(
s){this.WV(s);},AkX:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BBB(this);break;default:;}},A0P:function(s){this.AkX(s);},AVP:
function(AoQ,BAm){if(BAm)this.Lt.L(A.jb.Bm);else this.Lt.L(A.jb.Gj);if(AoQ<=3240
){this.MJ.Z(false);this.TemperatureUnit.Z(false);this.Lt.Z(true);this.Lt.R(A.aaR(
A.acu.AVy));}else if(AoQ>=5460){this.MJ.Z(false);this.TemperatureUnit.Z(false);this.
Lt.Z(true);this.Lt.R(A.aaR(A.acu.Bqs));}else{this.MJ.Z(true);this.TemperatureUnit.
Z(true);this.Lt.Z(false);this.MJ.R(A._GetAutoObject(A.Device.Converter).Ak2(AoQ)
);}},AxZ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lw<=3240)||(A._GetAutoObject(A.Device.
Device).Lw>=5460))this.JR.R(A.aaR(A.acf.AD0));else this.JR.R(A.aaR(A.acf.Bq2));break;
default:;}},Ax0:function(){},BqL:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Z4.Ar(true);break;case 4:this.Z3.Ar(true);break;default:{
this.Z4.Ar(false);this.Z3.Ar(false);A._GetAutoObject(A.Device.Device).Afa(false);
}}},AKK:function(G){this.Am();this.Ax0();this.BqL();this.BqJ();},A3C:function(G){
if(A._GetAutoObject(A.Device.Device).AmT){this.Sl.L(A.jb.H_);this.Sl.Cv(1);}else{
this.Sl.L(A.jb.Bm);this.Sl.Cv(0);}},BBB:function(G){if(!A._GetAutoObject(A.Device.
Device).AmS)A._GetAutoObject(A.Device.Device).Ae2(!A._GetAutoObject(A.Device.Device
).AmT);},BqJ:function(){if(A._GetAutoObject(A.Device.Device).AmS){this.Sl.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).Ae2(true);else A._GetAutoObject(A.Device.Device).Ae2(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sl.Z(true);else this.Sl.Z(false);},AKM:function(
G){this.CC(this);},AUR:function(){A.ab5("%s",BaN);},A3u:function(G){if(A._GetAutoObject(
A.Device.Device).HG){this.JR.H(Br_);this.MJ.H(Br$);this.TemperatureUnit.H(Bsa);}
else{this.JR.H(Bsb);this.MJ.H(Bsc);this.TemperatureUnit.H(Bsd);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gm._Init.call(this.Ak3={I:this},0);A.acg.
Ap._Init.call(this.NW={I:this},0);A.acg.Ap._Init.call(this.C_={I:this},0);A.acg.
Ap._Init.call(this.AcE={I:this},0);A.acg.Text._Init.call(this.JR={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MJ={
I:this},0);A.acg.Text._Init.call(this.PX={I:this},0);A.acg.Text._Init.call(this.
Sk={I:this},0);A.acg.Text._Init.call(this.UA={I:this},0);C.CG._Init.call(this.Lt={
I:this},0);A.Device.TM._Init.call(this.Ji={I:this},0);A.Device.TM._Init.call(this.
Z4={I:this},0);A.Device.TM._Init.call(this.Z3={I:this},0);A.acg.Ap._Init.call(this.
Sl={I:this},0);C.CG._Init.call(this.HG={I:this},0);A.acl.TM._Init.call(this.AjI={
I:this},0);this.__proto__=C.Re;var B;this.N.Z(true);this.Ak3.Fr(1000);this.Ak3.B3=
2;this.NW.H(Bse);this.NW.L(A.jb.CU);this.C_.H(Bsf);this.C_.L(A.jb.AV);this.C_.Cv(
0);this.C_.Z(true);this.AcE.H(Bsg);this.AcE.L(A.jb.Text);this.AcE.Z(false);this.
JR.KU(true);this.JR.R(A.aaR(A.acf.AD0));this.JR.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.MJ.A6(0x14);this.MJ.R(A.aaR(A.acu.
Akl));this.MJ.L(A.jb.Text);this.PX.H(Bsh);this.PX.R(A.aaR(A.acf.PX));this.PX.L(A.
jb.Text);this.PX.Z(false);this.Sk.H(Bsi);this.Sk.A6(0x14);this.Sk.R(Bsj);this.Sk.
L(A.jb.Text);this.Sk.Z(false);this.UA.H(Bsk);this.UA.R(Bsl);this.UA.L(A.jb.Text);
this.UA.Z(false);this.Lt.H(Bsm);this.Lt.R(A.aaR(A.acu.AVy));this.Lt.A6(0x12);this.
Lt.L(A.jb.Gj);this.Ji.B3=false;this.Ji.Cx=true;this.Ji.HO(1);this.Ji.Fr(4000);this.
Ji.Ut(0);this.Z4.B3=false;this.Z4.Cx=true;this.Z4.HO(2);this.Z4.Fr(400);this.Z4.
Ut(200);this.Z3.B3=false;this.Z3.Cx=true;this.Z3.HO(3);this.Z3.Fr(500);this.Z3.Ut(
250);this.Sl.H(Bsn);this.HG.H(Bso);this.HG.Z(A._GetAutoObject(A.Device.Device).HG
);this.HG.R(A.aaR(A.acf.HG));this.HG.A6(0x12);this.HG.L(A.jb.Gj);this.AjI.Ar(A._GetAutoObject(
A.Device.Device).HG);this.AjI.Fr(500);this.AjI.Ut(1000);this.J(this.NW,0);this.J(
this.C_,0);this.J(this.AcE,0);this.J(this.JR,0);this.J(this.TemperatureUnit,0);this.
J(this.MJ,0);this.J(this.PX,0);this.J(this.Sk,0);this.J(this.UA,0);this.J(this.Lt
,0);this.J(this.Sl,0);this.J(this.HG,0);this.N.CE=[this,this.AsH];this.N.Cf=[this
,this.A0P];this.N.Ca=[this,this.A0Q];this.N.C2(A.aaL(A.ach.AeA));this.Ak3.Q=[B=this.
C_,B.ASL,B.Cv];this.NW.Ax(A.aaL(A.ach.NW));this.C_.Ax(A.aaL(A.ach.AvO));this.AcE.
Ax(A.aaL(A.ach.AQ4));this.JR.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MJ.S(A.aaL(A.fl.Aet));this.PX.S(A.aaL(A.fl.Af));this.Sk.S(A.aaL(A.fl.EK
));this.UA.S(A.aaL(A.fl.EK));this.Lt.S(A.aaL(A.fl.Aet));this.Lt.AZ(A.aaL(A.fl.EK
));this.Lt.Cr(A.aaL(A.fl.Af));this.Ji.Q=[B=A._GetAutoObject(A.Device.Device),B.AS2
,B.A0I];this.Z4.Q=[B=A._GetAutoObject(A.Device.Device),B.AER,B.AI4];this.Z3.Q=[B=
A._GetAutoObject(A.Device.Device),B.AER,B.AI4];this.Sl.Ax(A.aaL(A.ach.AqQ));this.
HG.S(A.aaL(A.fl.EK));this.HG.AZ(A.aaL(A.fl.Kr));this.HG.Cr(A.aaL(A.fl.HJ));this.
AjI.Q=[B=this.HG,B.Fq,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Ak3._Done();this.NW._Done();this.C_._Done();this.AcE._Done();this.JR._Done(
);this.TemperatureUnit._Done();this.MJ._Done();this.PX._Done();this.Sk._Done();this.
UA._Done();this.Lt._Done();this.Ji._Done();this.Z4._Done();this.Z3._Done();this.
Sl._Done();this.HG._Done();this.AjI._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Ak3._ReInit();this.NW._ReInit();this.C_._ReInit();
this.AcE._ReInit();this.JR._ReInit();this.TemperatureUnit._ReInit();this.MJ._ReInit(
);this.PX._ReInit();this.Sk._ReInit();this.UA._ReInit();this.Lt._ReInit();this.Ji.
_ReInit();this.Z4._ReInit();this.Z3._ReInit();this.Sl._ReInit();this.HG._ReInit(
);this.AjI._ReInit();this.JR.R(A.aaR(A.acf.AD0));this.MJ.R(A.aaR(A.acu.Akl));this.
PX.R(A.aaR(A.acf.PX));this.Lt.R(A.aaR(A.acu.AVy));this.HG.R(A.aaR(A.acf.HG));this.
JR.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MJ.S(A.aaL(A.fl.
Aet));this.PX.S(A.aaL(A.fl.Af));this.Sk.S(A.aaL(A.fl.EK));this.UA.S(A.aaL(A.fl.EK
));this.Lt.S(A.aaL(A.fl.Aet));this.Lt.AZ(A.aaL(A.fl.EK));this.Lt.Cr(A.aaL(A.fl.Af
));this.HG.S(A.aaL(A.fl.EK));this.HG.AZ(A.aaL(A.fl.Kr));this.HG.Cr(A.aaL(A.fl.HJ
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ak3)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ji)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjI)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AVm={AcH:
function(){C.Re.AcH.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cw(null);this.N.C3(A.aaL(A.ach.AvR));}break;default:;}},
WV:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Lw>3240)&&(A._GetAutoObject(A.Device.Device
).Lw<5460)){A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKM(this);break;default:;}},AxZ:
function(){C.Re.AxZ.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JR.R(A.aaR(A.acf.BkC));break;default:;}},Ax0:function(){C.Re.Ax0.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WI(16711680);this.Ji.Ar(true);}break;default:this.Ji.Ar(false);
}},AUR:function(){this.C_.Ax(A.aaL(A.ach.AvQ));this.C_.Cv(0);this.NW.Cv(0);},_Init:
function(aArg){C.Re._Init.call(this,aArg);this.__proto__=C.AVm;this.Dr(C.APe);},
_className:"Application::TemperatureMeasurementScreen"};C.APj={Df:null,IO:null,NY:
null,AP:null,Ag9:null,A$:null,Dg:function(E){C.BR.Dg.call(this,E);this.Df.L(E);this.
IO.L(E);this.NY.L(E);this.Ag9.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.Ap._Init.call(this.IO={I:this},0
);A.acg.Ap._Init.call(this.NY={I:this},0);A.acg.C8._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.Ag9={I:this},0);A.acg.C8._Init.call(this.A$={I:this},
0);this.__proto__=C.APj;this.Df.H(Alk);this.IO.H(Ayk);this.NY.H(AHK);this.AP.DC(
BaR);this.AP.DM(BaS);this.AP.L(A.jb.Bc);this.Ag9.H(Bsp);this.Ag9.L(A.jb.CU);this.
A$.DC(Bsq);this.A$.DM(Bsr);this.A$.L(A.jb.Bc);this.J(this.Df,0);this.J(this.IO,0
);this.J(this.NY,0);this.J(this.AP,0);this.J(this.Ag9,0);this.J(this.A$,0);this.
Df.Ax(A.aaL(A.ach.ADJ));this.IO.Ax(A.aaL(A.ach.AeC));this.NY.Ax(A.aaL(A.ach.AvJ)
);this.Ag9.Ax(A.aaL(A.ach.AQt));},_Done:function(){this.__proto__=C.BR;this.Df._Done(
);this.IO._Done();this.NY._Done();this.AP._Done();this.Ag9._Done();this.A$._Done(
);C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Df._ReInit(
);this.IO._ReInit();this.NY._ReInit();this.AP._ReInit();this.Ag9._ReInit();this.
A$._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Df)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.De={Es:null,DS:null,AGH:
0,ANT:0,Init:function(aArg){A.zV([this,this.ALr],A._GetAutoObject(A.Device.Device
).An,0);A.pe([this,this.ALr],this);},ALr:function(G){var Ad=this.AGH;if(Ad<0){this.
DS.E6();this.DS.EC(this.ANT);return;}this.DS.EC(A._GetAutoObject(A.Device.Device
).An.AmX(Ad,14));this.DS.AFd(A._GetAutoObject(A.Device.Device).An.I9(Ad,13));this.
DS.Ae3(A._GetAutoObject(A.Device.Device).An.H4(Ad,8));this.DS.Uu(A._GetAutoObject(
A.Device.Device).An.H4(Ad,11));this.DS.Ae7(A._GetAutoObject(A.Device.Device).An.
H4(Ad,12));this.DS.Ae9(A._GetAutoObject(A.Device.Device).An.CF(Ad,5));},A_O:function(
E){if(this.AGH===E)return;this.AGH=E;A.pe([this,this.ALr],this);},A_e:function(E
){if(this.ANT===E)return;this.ANT=E;A.pe([this,this.ALr],this);},A9q:function(){
return this.AGH;},_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.call(
this.Es={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.De;this.
Es.H(Bss);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11);this.Es.L(A.jb.Text);this.
DS.H(A0n);this.J(this.Es,0);this.J(this.DS,0);this.Es.S(A.aaL(A.fl.Af));this.Es.
AZ(A.aaL(A.fl.Ak));this.Es.Cr(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){
this.__proto__=C.EB;this.Es._Done();this.DS._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.DS._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.Es.S(A.aaL(A.fl.Af));this.Es.AZ(A.aaL(A.fl.Ak));this.Es.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Ks={AgP:null,Text:null,Afk:null,Dg:function(E
){C.BR.Dg.call(this,E);this.AgP.L(E);this.Text.L(E);this.Afk.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgP={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afk={I:this},0);this.__proto__=
C.Ks;this.AgP.H(Bst);this.AgP.L(A.jb.Text);this.Text.H(Bsu);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afk.H(Bsv);this.Afk.L(A.jb.Text);this.
J(this.AgP,0);this.J(this.Text,0);this.J(this.Afk,0);this.AgP.Ax(A.aaL(A.ach.APl
));this.Text.S(A.aaL(A.fl.Kr));this.Text.AZ(A.aaL(A.fl.HJ));},_Done:function(){this.
__proto__=C.BR;this.AgP._Done();this.Text._Done();this.Afk._Done();C.BR._Done.call(
this);},_ReInit:function(){C.BR._ReInit.call(this);this.AgP._ReInit();this.Text.
_ReInit();this.Afk._ReInit();this.Text.S(A.aaL(A.fl.Kr));this.Text.AZ(A.aaL(A.fl.
HJ));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AgP)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afk
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.APc={
_Init:function(aArg){C.Ks._Init.call(this,aArg);this.__proto__=C.APc;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.Ks._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.APe={_Init:function(
aArg){C.Ks._Init.call(this,aArg);this.__proto__=C.APe;this.J3(this.Afk,-2);this.
Afk.Ax(A.aaL(A.ach.Ag7));},_className:"Application::HeaderDeviceTemperature"};C.
Yq={Ai:function(Ae){C.AmQ.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bqt)+A.aaR(A.acf.Colon
));},Ch:function(Ad){var B;if(!this.AX)return;this.AlF=0;this.AtP=0;this.XM=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B_();O++){this.AlF+=this.AX.CF(O,1);this.AtP+=
this.AX.CF(O,2);}if(this.AlF>0)this.XM=(this.AtP/this.AlF)*100;this.Am();}},_Init:
function(aArg){C.AmQ._Init.call(this,aArg);this.__proto__=C.Yq;this.AP.Z(false);
this.A$.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kr));this.V.AZ(A.aaL(A.fl.
HJ));},_ReInit:function(){C.AmQ._ReInit.call(this);this.V.S(A.aaL(A.fl.Kr));this.
V.AZ(A.aaL(A.fl.HJ));},_className:"Application::EvaluationLossesSumItem"};C.A6R={
Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A6R;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6S={K3:null,MY:null,AY:0,Yj:function(){this.K3=null;this.MY=null;this.AY=0;
},Ow:function(A7){var Hh;Hh=A._NewObject(C.A6R,0);Hh.A5=A7;if(!this.K3){this.K3=
Hh;this.MY=Hh;this.AY=1;}else{this.MY.Ah=Hh;this.MY=Hh;this.AY=this.AY+1;}},AmZ:
function(){var B;var RN=0;var Ol=this.K3;while(!!Ol){RN+=Ol.A5;Ol=Ol.Ah;}return RN;
},AjP:function(){if(!this.AY)return 0;return this.AmZ()/this.AY;},AqY:function(){
var B;if(!this.AY)return 0;var A1K=this.AjP();var Adg=0;var Ol=this.K3;while(!!Ol
){Adg+=Math.pow(Ol.A5-A1K,2);Ol=Ol.Ah;}Adg/=this.AY;Adg=Math.sqrt(Adg);return Adg;
},_Init:function(aArg){this.__proto__=C.A6S;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agz={Background:null,V:null,KV:0,Uy:5,Hl:false
,Ai:function(Ae){C.Hi.Ai.call(this,Ae);if(this.Hl)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CJ);},T:function(E){C.Hi.T.call(this,E);this.V.R(E);},Bi:
function(E){if(this.Hl===E)return;this.Hl=E;this.Am();},Kx:function(E){if(this.Uy===
E)return;this.Uy=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hi._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG.
_Init.call(this.V={I:this},0);this.__proto__=C.Agz;this.H(BD);this.Background.A0(
0x3F);this.Background.H(BD);this.V.A0(0x3F);this.V.H(AyB);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KV=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kr));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hi;this.Background._Done();this.V._Done();C.Hi._Done.call(this
);},_ReInit:function(){C.Hi._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kr));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AN_={WF:function(G){this.Agx();this.I5(A.aaR(
A.acf.AVx),[this,this.ATY],5);this.I5(A.aaR(A.acf.AVv),[this,this.ATX],7);this.I5(
A.aaR(A.acf.Calving),[this,this.Bmm],11);this.I5(A.aaR(A.acf.An2),[this,this.AwY
],2);this.I5(A.aaR(A.acf.AdV),[this,this.AE2],1);this.I5(A.aaR(A.acf.AuH),[this,
this.AEW],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.Ani
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){}
,Abt:function(){return C.ANg;},Abu:function(){return C.API;},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AC6());},HQ:function(G){
var F;C.GJ.HQ.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.
Converter).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(
A.jV);}this.N.OS(false);this.N.OT(false);},Agj:function(){A._GetAutoObject(C.A8).
Cd(62);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AN_;var
B;this.Dr(C.APf);this.Dl(A.aaR(A.acf.ASi));this.AwT([B=A._GetAutoObject(A.Device.
Device),B.A8U,B.Bbx]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(
A.acf.ASi));},_className:"Application::DryCowListScreen"};C.AN9={_Init:function(
aArg){C.I7._Init.call(this,aArg);this.__proto__=C.AN9;this.Lf.Ar(false);this.Lf.
Aj(false);this.Lf.Z(false);this.Ju.Ar(false);this.Ju.Aj(false);this.Ju.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.APf={DX:function(G){C.Kt.DX.
call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad0(9));},_Init:function(
aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.APf;},_className:"Application::HeaderDryCowListFilter"
};C.Abq={Filter:null,L0:null,AG_:A.jV,Er:0,AGf:1,Operator:1,Bl:function(aSize){C.
Aco.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(
Ae){C.Aco.Ai.call(this,Ae);this.L0.L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Mf],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Mf],E,0);A.pe([this,this.Mf],this);},Mf:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.Tw((F=this.Filter,F[1].call(
F[0])).DL(this.Er,this.Operator));else this.Tw(null);},Nj:function(E){if(this.Er===
E)return;this.Er=E;A.pe([this,this.Mf],this);},Tw:function(AI){if(!!AI){var A2m;
if(this.AGf!==1)A2m=this.AGf;else A2m=AI.Operator;this.T((this.AG_+CR)+A._GetAutoObject(
A.Device.Converter).A6N(A2m));this.ZA(false);}else{this.T(this.AG_);this.ZA(true
);}},OR:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Mf],this);},AF1:function(E){if(this.AG_===E)return;this.AG_=E;A.pe([this,this.Mf
],this);},A_B:function(E){if(this.AGf===E)return;this.AGf=E;A.pe([this,this.Mf],
this);},_Init:function(aArg){C.Aco._Init.call(this,aArg);C.L0._Init.call(this.L0={
I:this},0);this.__proto__=C.Abq;this.H(As_);this.AW.H(Bsw);this.L0.H(A0o);this.J3(
this.V,-1);this.J(this.L0,0);},_Done:function(){this.__proto__=C.Aco;this.L0._Done(
);C.Aco._Done.call(this);},_ReInit:function(){C.Aco._ReInit.call(this);this.L0._ReInit(
);},_Mark:function(D){var B;C.Aco._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.L0)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjK={L0:null,Ai:function(Ae){C.QF.
Ai.call(this,Ae);this.L0.L(this.V.AQ);},Tw:function(AI){if(!!AI){this.H8.Cv(1);this.
ZA(true);this.L0.A_s(false);}else{this.H8.Cv(0);this.ZA(false);this.L0.A_s(true);
}},_Init:function(aArg){C.QF._Init.call(this,aArg);C.L0._Init.call(this.L0={I:this
},0);this.__proto__=C.AjK;this.Jf=20;this.L0.H(A0o);this.J(this.L0,0);},_Done:function(
){this.__proto__=C.QF;this.L0._Done();C.QF._Done.call(this);},_ReInit:function(){
C.QF._ReInit.call(this);this.L0._ReInit();},_Mark:function(D){var B;C.QF._Mark.call(
this,D);if((B=this.L0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.AB8={Q:null,CQ:function(){this.T(A._GetAutoObject(A.Device.Helper).AmY(this.
TableId,this.Er));},Tw:function(AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H8.Cv(1);else this.H8.Cv(0);},IE:function(G){A.pe([this,this.Mf],this);},
Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.IE],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.IE],E,0);if(!!E)A.pe([this,this.IE],this);},_Init:
function(aArg){C.QF._Init.call(this,aArg);this.__proto__=C.AB8;},_ReInit:function(
){C.QF._ReInit.call(this);this.CQ();},_Mark:function(D){var B;C.QF._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.API={YV:null,Jb:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YV={I:this},0);A.acg.Text._Init.call(this.Jb={I:this},0);this.__proto__=
C.API;this.A_e(1);this.YV.H(Bsx);this.YV.KU(true);this.YV.R(A.aaR(A.acf.AEd));this.
YV.L(A.jb.Text);this.Jb.H(Tb);this.Jb.R(((A.aaR(A.acf.RQ)+BaT)+A.aaR(A.acf.Bay))+
O_);this.Jb.L(A.jb.Text);this.J(this.YV,0);this.J(this.Jb,0);this.YV.S(A.aaL(A.fl.
Ak));this.Jb.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.De;this.YV._Done(
);this.Jb._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.call(this
);this.YV._ReInit();this.Jb._ReInit();this.YV.R(A.aaR(A.acf.AEd));this.Jb.R(((A.
aaR(A.acf.RQ)+BaT)+A.aaR(A.acf.Bay))+O_);this.YV.S(A.aaL(A.fl.Ak));this.Jb.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.YV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ANg={Mn:null,KS:null,AdU:null,AP:null,A$:null
,Xt:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mn.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KS.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KS.M[2]-1,0,this.
KS.M[2]+1,aSize[1]]);this.AdU.H([this.KS.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KS.L(this.V.AQ);this.AdU.L(this.V.AQ);if(!!this.Xt&&(
this.Xt!==5)){this.Mn.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Xt));this.V.L(
A._GetAutoObject(A.acj.Assessment).XC(this.Xt));}else this.Mn.L(this.Background.
AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mj=this.AX.
CF(Ad,1);var A2V=this.AX.CF(Ad,29);var Pc=this.AX.Hv(Ad,4);var LT=this.AX.I9(Ad,
13);var AlI=this.AX.I9(Ad,17);var AlR=this.AX.H4(Ad,11);this.Xt=A._GetAutoObject(
A.Device.Helper).AMq(LT,AlR,AlI);this.T(Mj.toFixed());this.KS.R(A2V.toFixed());this.
AdU.R(A._GetAutoObject(A.acj.KO).AC2(Pc,A._GetAutoObject(A.Device.Helper).Dv(),Bsy
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Mn={I:this},0);A.acg.Text._Init.call(this.KS={I:this},0);A.acg.Text._Init.call(
this.AdU={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A$={I:this},0);this.__proto__=C.ANg;this.Mn.H(Atg);this.AP.L(A.jb.Bc);this.
A$.L(A.jb.Bc);this.J(this.Mn,-1);this.J(this.KS,0);this.J(this.AdU,0);this.J(this.
AP,0);this.J(this.A$,0);this.KS.S(A.aaL(A.fl.Af));this.AdU.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mn._Done();this.KS._Done(
);this.AdU._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mn._ReInit();this.KS._ReInit();this.AdU.
_ReInit();this.AP._ReInit();this.A$._ReInit();this.KS.S(A.aaL(A.fl.Af));this.AdU.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RY={AJY:0,Bec:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);if(this.Bec){this.
T(A.aaR(A.acf.AN7));this.Kz(A.jV);}else{this.T(A.aaR(A.acf.Bkj));if(this.AJY>0)this.
Kz(this.AJY.toFixed());else this.Kz(Xh);}},Ch:function(G){C.FA.Ch.call(this,G);this.
Bec=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlD=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlD>0)this.AJY=A._GetAutoObject(A.Device.Helper).
Mb(AlD,A._GetAutoObject(A.Device.Helper).Dv());else this.AJY=0;this.Am();},_Init:
function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RY;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMv={ALB:A.jV,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.RQ));
this.Kz(this.ALB);},Ch:function(G){C.FA.Ch.call(this,G);var Pc=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALB=A._GetAutoObject(A.acj.KO).AC2(Pc,A._GetAutoObject(
A.Device.Helper).Dv(),((((Bsz+A.aaR(A.acf.Bht))+BsA)+A.aaR(A.acf.Bhs))+BsB)+A.aaR(
A.acf.AL5));this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=
C.AMv;this.ALB=A.aaR(A.acf.Unknown);},_ReInit:function(){C.FA._ReInit.call(this);
this.ALB=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AN2={Ui:null,Wr:null,Wu:null,Wv:null,SA:null,Init:function(aArg){this.Bb(this.
Ui);A.pe([this,this.MN],this);},Adw:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Ni._Init.call(this.Ui={
I:this},0);C.Ni._Init.call(this.Wr={I:this},0);C.Ni._Init.call(this.Wu={I:this},
0);C.AbT._Init.call(this.Wv={I:this},0);C.Uf._Init.call(this.SA={I:this},0);this.
__proto__=C.AN2;var B;this.Dr(C.APc);this.Ui.H(IX);this.Ui.Aj(true);this.Ui.T(A.
aaR(A.acf.ACC));this.Ui.Bi(false);this.Ui.Nl(83);this.Wr.H(Qd);this.Wr.Aj(true);
this.Wr.T(A.aaR(A.acf.Info));this.Wr.Bi(true);this.Wr.Nl(82);this.Wu.H(Aag);this.
Wu.Aj(true);this.Wu.T(A.aaR(A.acf.AGK));this.Wu.Bi(false);this.Wu.Nl(64);this.Wv.
H(Alh);this.Wv.Aj(true);this.Wv.T(A.aaR(A.acf.TempMeasurement));this.Wv.Bi(true);
this.Wv.Nl(60);this.SA.H(Aoq);this.SA.Aj(true);this.SA.T(A.aaR(A.acf.ACX));this.
SA.Bi(false);this.J(this.Ui,-1);this.J(this.Wr,-1);this.J(this.Wu,-1);this.J(this.
Wv,-1);this.J(this.SA,-1);this.N.Cf=[this,this.Adw];this.N.Cw(A.aaL(A.ach.ADO));
this.Ui.AR=[B=this.Ui,B.Np];this.Wr.AR=[B=this.Wr,B.Np];this.Wu.AR=[B=this.Wu,B.
Np];this.Wv.AR=[B=this.Wv,B.Np];this.SA.AR=null;this.SA.Ab1([B=this.SA,B.Atq]);this.
SA.Gs([this,this.D_,this.GS]);this.SA.ATd([B=A._GetAutoObject(A.Device.Device),B.
Ary,B.Ato]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ui._Done(
);this.Wr._Done();this.Wu._Done();this.Wv._Done();this.SA._Done();C.Ej._Done.call(
this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Ui._ReInit();this.Wr._ReInit(
);this.Wu._ReInit();this.Wv._ReInit();this.SA._ReInit();this.Ui.T(A.aaR(A.acf.ACC
));this.Wr.T(A.aaR(A.acf.Info));this.Wu.T(A.aaR(A.acf.AGK));this.Wv.T(A.aaR(A.acf.
TempMeasurement));this.SA.T(A.aaR(A.acf.ACX));},_Mark:function(D){var B;C.Ej._Mark.
call(this,D);if((B=this.Ui)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wv
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceMainScreen"};C.AN3={Ug:null,AbR:null,Ws:null,Init:function(aArg
){this.Bb(this.Ug);},BzB:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).UpdateFirmware(
);},BkX:function(G){if(A._GetAutoObject(A.Device.Device).Aa6<=20)A._GetAutoObject(
A.Device.Device).A3(76,true,BsC,0,null);else A._GetAutoObject(A.Device.Device).A3(
39,true,A.jV,0,[this,this.BzB]);},_Init:function(aArg){C.Ej._Init.call(this,aArg
);C.Ni._Init.call(this.Ug={I:this},0);C.Co._Init.call(this.AbR={I:this},0);C.AbT.
_Init.call(this.Ws={I:this},0);this.__proto__=C.AN3;var B;this.Dr(C.APd);this.Ug.
H(IX);this.Ug.Aj(true);this.Ug.T(A.aaR(A.acf.A5X));this.Ug.Bi(false);this.Ug.Nl(
65);this.AbR.H(Qd);this.AbR.Aj(true);this.AbR.T(A.aaR(A.acf.A6P));this.AbR.Bi(true
);this.Ws.H(Aag);this.Ws.Aj(true);this.Ws.T(A.aaR(A.acf.RangeTest));this.Ws.Bi(false
);this.Ws.Nl(15);this.J(this.Ug,-1);this.J(this.AbR,-1);this.J(this.Ws,-1);this.
Ug.AR=[B=this.Ug,B.Np];this.AbR.AR=[this,this.BkX];this.Ws.AR=[B=this.Ws,B.Np];this.
Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ug._Done();this.AbR._Done(
);this.Ws._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.Ug._ReInit();this.AbR._ReInit();this.Ws._ReInit();this.Ug.T(A.aaR(A.acf.A5X
));this.AbR.T(A.aaR(A.acf.A6P));this.Ws.T(A.aaR(A.acf.RangeTest));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Ug)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ws)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceServiceScreen"};C.APd={_Init:function(aArg){
C.Ks._Init.call(this,aArg);this.__proto__=C.APd;this.Text.R(A.aaR(A.acf.AGK));},
_ReInit:function(){C.Ks._ReInit.call(this);this.Text.R(A.aaR(A.acf.AGK));},_className:
"Application::HeaderDeviceServiceMenu"};C.Ni={Nc:null,Ai:function(Ae){C.AbT.Ai.call(
this,Ae);this.Nc.L(this.V.AQ);},_Init:function(aArg){C.AbT._Init.call(this,aArg);
A.acg.Ap._Init.call(this.Nc={I:this},0);this.__proto__=C.Ni;this.Nc.A0(0x38);this.
Nc.H(BsD);this.J(this.Nc,0);this.V.Cr(A.aaL(A.fl.Bh));this.Nc.Ax(A.aaL(A.ach.Ajt
));},_Done:function(){this.__proto__=C.AbT;this.Nc._Done();C.AbT._Done.call(this
);},_ReInit:function(){C.AbT._ReInit.call(this);this.Nc._ReInit();this.V.Cr(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.AbT._Mark.call(this,D);if((B=this.Nc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"};C.ANY={Ahd:
null,Ahj:null,Ahl:null,Ahh:null,Aj_:null,Ahg:null,Ahf:null,Ahe:null,Aj8:null,Ahc:
null,Aj9:null,Ahk:null,Aj$:null,Ahi:null,Aka:null,Init:function(aArg){this.Bb(this.
Ahd);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.PQ._Init.call(this.Ahd={
I:this},0);C.PQ._Init.call(this.Ahj={I:this},0);C.PQ._Init.call(this.Ahl={I:this
},0);C.PQ._Init.call(this.Ahh={I:this},0);C.PQ._Init.call(this.Aj_={I:this},0);C.
PQ._Init.call(this.Ahg={I:this},0);C.PQ._Init.call(this.Ahf={I:this},0);C.PQ._Init.
call(this.Ahe={I:this},0);C.PQ._Init.call(this.Aj8={I:this},0);C.PQ._Init.call(this.
Ahc={I:this},0);C.PQ._Init.call(this.Aj9={I:this},0);C.PQ._Init.call(this.Ahk={I:
this},0);C.PQ._Init.call(this.Aj$={I:this},0);C.PQ._Init.call(this.Ahi={I:this},
0);C.PQ._Init.call(this.Aka={I:this},0);this.__proto__=C.ANY;this.Dr(C.AO_);this.
Ahd.H(Atl);this.Ahd.Aj(true);this.Ahd.SI(1);this.Ahj.H(A0l);this.Ahj.Aj(true);this.
Ahj.Bi(true);this.Ahj.SI(2);this.Ahl.H(Ati);this.Ahl.Aj(true);this.Ahl.Bi(false);
this.Ahl.SI(3);this.Ahh.H(Atj);this.Ahh.Aj(true);this.Ahh.Bi(true);this.Ahh.SI(4
);this.Aj_.H(Ayt);this.Aj_.Aj(true);this.Aj_.SI(5);this.Ahg.H(BsE);this.Ahg.Aj(true
);this.Ahg.Bi(true);this.Ahg.SI(6);this.Ahf.H(Atk);this.Ahf.Aj(true);this.Ahf.Bi(
false);this.Ahf.SI(7);this.Ahe.H(AyD);this.Ahe.Aj(true);this.Ahe.Bi(true);this.Ahe.
SI(8);this.Aj8.H(A0m);this.Aj8.Aj(true);this.Aj8.SI(9);this.Ahc.H(Aox);this.Ahc.
Aj(true);this.Ahc.Bi(true);this.Ahc.SI(10);this.Aj9.H(BsF);this.Aj9.Aj(true);this.
Aj9.SI(11);this.Ahk.H(BsG);this.Ahk.Aj(true);this.Ahk.Bi(true);this.Ahk.SI(12);this.
Aj$.H(BsH);this.Aj$.Aj(true);this.Aj$.SI(13);this.Ahi.H(BsI);this.Ahi.Aj(true);this.
Ahi.Bi(true);this.Ahi.SI(14);this.Aka.H(BsJ);this.Aka.Aj(true);this.Aka.SI(15);this.
J(this.Ahd,-1);this.J(this.Ahj,-1);this.J(this.Ahl,-1);this.J(this.Ahh,-1);this.
J(this.Aj_,-1);this.J(this.Ahg,-1);this.J(this.Ahf,-1);this.J(this.Ahe,-1);this.
J(this.Aj8,-1);this.J(this.Ahc,-1);this.J(this.Aj9,-1);this.J(this.Ahk,-1);this.
J(this.Aj$,-1);this.J(this.Ahi,-1);this.J(this.Aka,-1);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.Ahd._Done();this.Ahj._Done();this.Ahl._Done();this.Ahh.
_Done();this.Aj_._Done();this.Ahg._Done();this.Ahf._Done();this.Ahe._Done();this.
Aj8._Done();this.Ahc._Done();this.Aj9._Done();this.Ahk._Done();this.Aj$._Done();
this.Ahi._Done();this.Aka._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej.
_ReInit.call(this);this.Ahd._ReInit();this.Ahj._ReInit();this.Ahl._ReInit();this.
Ahh._ReInit();this.Aj_._ReInit();this.Ahg._ReInit();this.Ahf._ReInit();this.Ahe.
_ReInit();this.Aj8._ReInit();this.Ahc._ReInit();this.Aj9._ReInit();this.Ahk._ReInit(
);this.Aj$._ReInit();this.Ahi._ReInit();this.Aka._ReInit();},_Mark:function(D){var
B;C.Ej._Mark.call(this,D);if((B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ahj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahl)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ahh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ahe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahi)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aka)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AO_={_Init:function(aArg){C.Ks._Init.call(this
,aArg);this.__proto__=C.AO_;this.Text.R(A.aaR(A.acf.A6m));},_ReInit:function(){C.
Ks._ReInit.call(this);this.Text.R(A.aaR(A.acf.A6m));},_className:"Application::HeaderDeviceCheck"
};C.PQ={DeviceComponentToString:null,Kn:null,Au6:0,BcN:false,CQ:function(){this.
V.R(this.DeviceComponentToString.BT(this.Au6));},Bl:function(aSize){var B;C.Co.Bl.
call(this,aSize);this.Kn.H(A.abM(this.Kn.M,aSize[0]-((B=this.Kn.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kn.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kn.
AE7(this.V.AQ);if(this.BcN)this.Kn.AwL(A.jb.E1);else this.Kn.AwL(A.jb.Gj);},SI:function(
E){if(this.Au6===E)return;this.Au6=E;this.T(this.DeviceComponentToString.BT(E));
this.DX(this);},DX:function(G){this.BcN=A._GetAutoObject(A.Device.Device).AJP(this.
Au6);this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kn._Init.call(this.Kn={I:this
},0);this.__proto__=C.PQ;this.V.H(BsK);this.V.A6(0x11);this.Kn.H(BsL);this.J(this.
Kn,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kn._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kn._ReInit();this.CQ();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sj={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAM],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALw(this);this.DJ(this);},CC:function(G
){A.pe([this,this.MN],this);},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[
3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},AAM:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A63();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.MN],this);},Ew:function(G){A._GetAutoObject(C.A8).FB(
);},A3W:function(G){A._GetAutoObject(C.A8).Cd(84);},DJ:function(G){this.N.C2(A.aaL(
A.ach.E2));this.N.CE=[this,this.Ew];this.N.Cw(A.aaL(A.ach.ADN));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Arg(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Cf=null;this.N.I$.C4(100);}else{this.N.Cf=[this
,this.AAM];this.N.I$.C4(255);}this.N.C3(A.aaL(A.ach.AeC));this.N.Ca=[this,this.A3W
];},MN:function(s){this.DJ(s);},ALw:function(G){A.ab5("%s",BsM);},BG6:function(s
){this.ALw(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sj;this.N.Ar(false);this.N.Z(true);this.Dr(C.
Abv);this.Ay.H(Iu);this.DY.A0(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(L5
);this.Y.JX(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.Em=[this
,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOm={Yh:null,Yg:null,X5:null
,TN:null,DJ:function(G){C.Sj.DJ.call(this,G);if(this.AV===this.TN){this.N.Cw(null
);this.N.Cf=null;this.N.C3(null);this.N.Ca=null;}},ALw:function(G){if(this.AV===
this.TN)this.Dr(C.APj);else this.Dr(C.Abv);},BzU:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQn);case 1:return A.
aaL(A.ach.AQo);default:A.ab5("%s%s",BsN,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},BzV:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQp);case 1:return A.aaL(A.ach.AQq);default:
A.ab5("%s%s",AIQ,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ii:function(G){var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.
Yh)A._GetAutoObject(C.A8).Cd(66);else if(Cy===this.Yg)A._GetAutoObject(C.A8).Cd(
56);else if(Cy===this.X5)A._GetAutoObject(C.A8).Cd(58);else if(Cy===this.TN)A._GetAutoObject(
C.A8).Cd(59);},_Init:function(aArg){C.Sj._Init.call(this,aArg);C.Fo._Init.call(this.
Yh={I:this},0);C.Fo._Init.call(this.Yg={I:this},0);C.Fo._Init.call(this.X5={I:this
},0);C.Fo._Init.call(this.TN={I:this},0);this.__proto__=C.AOm;this.Yh.H(Qa);this.
Yh.Aj(true);this.Yh.T(A.aaR(A.acf.Afv));this.Yg.H(J7);this.Yg.Aj(true);this.Yg.T(
A.aaR(A.acf.Temperature));this.X5.H(BsO);this.X5.Aj(true);this.X5.T(A.aaR(A.acf.
Rating));this.TN.H(BsP);this.TN.Aj(true);this.TN.T(A.aaR(A.acf.A79));this.J(this.
Yh,0);this.J(this.Yg,0);this.J(this.X5,0);this.J(this.TN,0);this.Yh.AR=[this,this.
Ii];this.Yh.DB(this.BzV());this.Yg.AR=[this,this.Ii];this.Yg.DB(this.BzU());this.
X5.AR=[this,this.Ii];this.X5.DB(A.aaL(A.ach.AQl));this.TN.AR=[this,this.Ii];this.
TN.DB(A.aaL(A.ach.AQm));},_Done:function(){this.__proto__=C.Sj;this.Yh._Done();this.
Yg._Done();this.X5._Done();this.TN._Done();C.Sj._Done.call(this);},_ReInit:function(
){C.Sj._ReInit.call(this);this.Yh._ReInit();this.Yg._ReInit();this.X5._ReInit();
this.TN._ReInit();this.Yh.T(A.aaR(A.acf.Afv));this.Yg.T(A.aaR(A.acf.Temperature)
);this.X5.T(A.aaR(A.acf.Rating));this.TN.T(A.aaR(A.acf.A79));},_Mark:function(D){
var B;C.Sj._Mark.call(this,D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Yg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOn={VN:null,X7:null,Yi:null,ALw:function(G){this.Dr(C.AvB);},BzY:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQ$
);case 1:return A.aaL(A.ach.ARa);default:A.ab5("%s%s",AIQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ii:function(G){var Cy=(C.Fo.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VN)A._GetAutoObject(C.A8).Cd(68);else if(Cy===
this.Yi)A._GetAutoObject(C.A8).Cd(57);else if(Cy===this.X7)A._GetAutoObject(C.A8
).Cd(67);},BzX:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AP_);case 1:return A.aaL(A.ach.AP$);default:A.ab5("%s%s",AIQ
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},BzZ:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ARb
);case 1:return A.aaL(A.ach.ARc);default:A.ab5("%s%s",AIQ,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sj._Init.call(
this,aArg);C.Fo._Init.call(this.VN={I:this},0);C.Fo._Init.call(this.X7={I:this},
0);C.Fo._Init.call(this.Yi={I:this},0);this.__proto__=C.AOn;this.VN.H(Qa);this.VN.
Aj(true);this.VN.T(A.aaR(A.acf.Baq));this.X7.H(A0p);this.X7.Aj(true);this.X7.T(A.
aaR(A.acf.A5N));this.Yi.H(Od);this.Yi.Aj(true);this.Yi.T(A.aaR(A.acf.Bat));this.
J(this.VN,0);this.J(this.X7,0);this.J(this.Yi,0);this.VN.AR=[this,this.Ii];this.
VN.DB(this.BzY());this.VN.Ab5(A.aaL(A.ach.NX));this.X7.AR=[this,this.Ii];this.X7.
DB(this.BzX());this.Yi.AR=[this,this.Ii];this.Yi.DB(this.BzZ());},_Done:function(
){this.__proto__=C.Sj;this.VN._Done();this.X7._Done();this.Yi._Done();C.Sj._Done.
call(this);},_ReInit:function(){C.Sj._ReInit.call(this);this.VN._ReInit();this.X7.
_ReInit();this.Yi._ReInit();this.VN.T(A.aaR(A.acf.Baq));this.X7.T(A.aaR(A.acf.A5N
));this.Yi.T(A.aaR(A.acf.Bat));},_Mark:function(D){var B;C.Sj._Mark.call(this,D);
if((B=this.VN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOq={Bef:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZS(0));},_Init:function(aArg){C.AqN._Init.call(this,aArg);this.
__proto__=C.AOq;this.Ae_(A.aaR(A.acf.A8s));},_ReInit:function(){C.AqN._ReInit.call(
this);this.Ae_(A.aaR(A.acf.A8s));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOj={Aik:null,Aby:null,UQ:null,Aa0:null,Po:null,Ajp:null,AgB:null,Ajq:null,AgC:
null,Ay:null,AaR:null,Add:0,Apx:0,DE:function(G){switch(this.Cq.CP){case 4:{if(this.
I8.Fq())return;var QA=this.Y.Br[1]+80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.VA(null
,null);}break;case 5:{if(this.I8.Fq())return;var QA=this.Y.Br[1]-80;this.Y.Gb([this.
Y.Br[0],QA]);this.Y.VA(null,null);}break;default:C.FC.DE.call(this,G);}},Ap8:function(
L6,AcY){if(!L6)return;var Fy=A._NewObject(A.Device.Filter,0);var HX=A._NewObject(
A.Device.Int32FilterCriterion,0);HX.Initialize(1,0,AcY,true);Fy.CX(HX);var Ac_=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fy.CX(Ac_
);L6.Bk(Fy);},Aiy:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arh()){this.
Aik.Ow(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azo=this.BzS(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaR.Set(Azo,this.AaR.Get(Azo)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Add++;this.Apx=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FC.Aiy.call(
this,G);},Aar:function(G){if(this.Add>1)A._GetAutoObject(A.Device.Device).A3(56,
true,this.Add.toFixed(),0,null);if(this.Add===1)A._GetAutoObject(A.Device.Device
).A3(53,true,this.Apx.toFixed(),0,null);if(this.Aik.AY>0)this.UQ.T(((((((A._GetAutoObject(
A.Device.Converter).Ax6(this.Aik.AjP()|0,1)+AyK)+A._GetAutoObject(A.Device.Converter
).Ax6(this.Aik.AqY()|0,1))+CR)+A._GetAutoObject(A.acj.DU).Af4())+AyL)+this.Aik.AY.
toFixed())+O_);else this.UQ.T(A.aaR(A.acf.Unknown));var RN=this.AaR.AmZ();var O;
for(O=0;O<this.AaR.MH;O++){var Bf=this.BAb(O);if(!!Bf){var CB=this.AaR.Get(O);Bf.
Bmy(CB);if(!RN)Bf.A_H(0);else Bf.A_H(Math.round((CB*100)/RN)|0);Bf.Boe(this.BAa(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adi=false;if(this.Aik.AY>0)
Adi=true;this.I8.Z(!Adi);C.FC.Aar.call(this,G);},Adp:function(G){this.Aik.Yj();this.
AaR.E6();this.Add=0;this.Apx=0;C.FC.Adp.call(this,G);},BAb:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Po;break;case 1:Bf=this.Ajp;break;case 2:Bf=this.
AgB;break;case 3:Bf=this.Ajq;break;case 4:Bf=this.AgC;break;default:throw new Error(
AyM+aIndex.toFixed());}return Bf;},BAa:function(aIndex,AoL){var B;var Tx=A.jV;switch(
AoL){case 0:{switch(aIndex){case 0:Tx=BsQ;break;case 1:Tx=BsR;break;case 2:Tx=BsS;
break;case 3:Tx=BsT;break;case 4:Tx=BsU;break;default:throw new Error(AyM+aIndex.
toFixed());}Tx=Tx+(CR+A.aaR(A.acf.AAe));}break;case 1:{switch(aIndex){case 0:Tx=
BsV;break;case 1:Tx=BsW;break;case 2:Tx=BsX;break;case 3:Tx=BsY;break;case 4:Tx=
BsZ;break;default:throw new Error(AyM+aIndex.toFixed());}Tx=Tx+(CR+A.aaR(A.acf.A7P
));}break;default:A.ab5("%s%e",BaU,AoL);}return Tx;},BzT:function(AI$,AoL){var Ac$=
0;switch(AoL){case 0:switch(AI$){case 0:Ac$=35000;break;case 1:Ac$=40000;break;case
2:Ac$=45000;break;case 3:Ac$=50000;break;case 4:Ac$=2147483647;break;default:throw new
Error(AyM+AI$.toFixed());}break;case 1:switch(AI$){case 0:Ac$=36287;break;case 1:
Ac$=40823;break;case 2:Ac$=45359;break;case 3:Ac$=49895;break;case 4:Ac$=2147483647;
break;default:throw new Error(AyM+AI$.toFixed());}break;default:A.ab5("%s%e",BaU
,AoL);}return Ac$;},BzS:function(A7,AoL){var Azo=0;var O;for(O=0;O<this.AaR.MH;O++
)if(A7<this.BzT(O,AoL)){Azo=O;break;}return Azo;},Fk:function(G){var B;this.Ay.MB((
B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[
1]);},_Init:function(aArg){C.FC._Init.call(this,aArg);C.Agz._Init.call(this.Aby={
I:this},0);C.II._Init.call(this.UQ={I:this},0);C.Aa0._Init.call(this.Aa0={I:this
},0);C.Po._Init.call(this.Po={I:this},0);C.Po._Init.call(this.Ajp={I:this},0);C.
Po._Init.call(this.AgB={I:this},0);C.Po._Init.call(this.Ajq={I:this},0);C.Po._Init.
call(this.AgC={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaR={I:this},0);this.__proto__=C.AOj;this.Dr(C.AvB);this.Akz(A.aaR(
A.acf.A6E));this.Ae_(A.aaR(A.acf.A8l));this.Aby.H(Atl);this.Aby.Aj(true);this.Aby.
T(A.aaR(A.acf.A5C));this.Aby.Bi(false);this.Aby.Kx(5);this.UQ.H(A0l);this.UQ.Aj(
true);this.UQ.T(A.jV);this.UQ.Bi(true);this.UQ.Kx(5);this.Aa0.H(Ati);this.Aa0.Aj(
true);this.Po.H(Atj);this.Po.Aj(true);this.Po.Bi(true);this.Ajp.H(Atk);this.Ajp.
Aj(true);this.AgB.H(AyD);this.AgB.Aj(true);this.AgB.Bi(true);this.Ajq.H(A0m);this.
Ajq.Aj(true);this.AgC.H(Aox);this.AgC.Aj(true);this.AgC.Bi(true);this.Ay.H(Iu);this.
AaR.ZB(5);this.J(this.Aby,-1);this.J(this.UQ,-1);this.J(this.Aa0,-1);this.J(this.
Po,-1);this.J(this.Ajp,-1);this.J(this.AgB,-1);this.J(this.Ajq,-1);this.J(this.AgC
,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fk];this.Aik=A._NewObject(C.AvV,0);
this.UQ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FC;this.Aby._Done(
);this.UQ._Done();this.Aa0._Done();this.Po._Done();this.Ajp._Done();this.AgB._Done(
);this.Ajq._Done();this.AgC._Done();this.Ay._Done();this.AaR._Done();C.FC._Done.
call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.Aby._ReInit();this.
UQ._ReInit();this.Aa0._ReInit();this.Po._ReInit();this.Ajp._ReInit();this.AgB._ReInit(
);this.Ajq._ReInit();this.AgC._ReInit();this.Ay._ReInit();this.AaR._ReInit();this.
Akz(A.aaR(A.acf.A6E));this.Ae_(A.aaR(A.acf.A8l));this.Aby.T(A.aaR(A.acf.A5C));this.
UQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.
Aik)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Po)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AgB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaR)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.Aa0={Ia:null,Gu:null
,Bl:function(aSize){C.II.Bl.call(this,aSize);this.Ia.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gu.H([this.Ia.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.II.Ai.call(this,Ae);this.Ia.L(this.V.AQ);this.Gu.L(this.V.AQ);},_Init:
function(aArg){C.II._Init.call(this,aArg);A.acg.Text._Init.call(this.Ia={I:this}
,0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.Aa0;this.T(A.aaR(
A.acf.AHl));this.Ia.H(Bs0);this.Ia.KU(true);this.Ia.R(A.aaR(A.acf.AqA));this.Ia.
L(A.jb.Text);this.Gu.H(BaV);this.Gu.R(AfG);this.Gu.L(A.jb.Text);this.J(this.Ia,0
);this.J(this.Gu,0);this.V.S(A.aaL(A.fl.HJ));this.Ia.S(A.aaL(A.fl.HJ));this.Gu.S(
A.aaL(A.fl.Kr));},_Done:function(){this.__proto__=C.II;this.Ia._Done();this.Gu._Done(
);C.II._Done.call(this);},_ReInit:function(){C.II._ReInit.call(this);this.Ia._ReInit(
);this.Gu._ReInit();this.T(A.aaR(A.acf.AHl));this.Ia.R(A.aaR(A.acf.AqA));this.V.
S(A.aaL(A.fl.HJ));this.Ia.S(A.aaL(A.fl.HJ));this.Gu.S(A.aaL(A.fl.Kr));},_Mark:function(
D){var B;C.II._Mark.call(this,D);if((B=this.Ia)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Po={AP:null,A$:null,P3:null,Ia:null,Gu:null,Bas:A.jV,AqA:0,A$g:0,Bl:function(
aSize){C.II.Bl.call(this,aSize);this.P3.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P3.M[2]-1,0,this.P3.M[2]+1,aSize[1]]);this.Ia.H([this.P3.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A$.H([this.Ia.M[2]-1,0,this.Ia.M[2]+1,aSize[
1]]);this.Gu.H([this.Ia.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.II.Ai.call(
this,Ae);this.P3.L(this.V.AQ);this.Ia.L(this.V.AQ);this.Gu.L(this.V.AQ);},Boe:function(
E){if(this.Bas===E)return;this.Bas=E;this.P3.R(E);},Bmy:function(E){if(this.AqA===
E)return;this.AqA=E;this.Ia.R(E.toFixed());},A_H:function(E){if(this.A$g===E)return;
this.A$g=E;this.Gu.R(E.toFixed()+As1);},_Init:function(aArg){C.II._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.P3={I:this},0);A.acg.Text._Init.call(this.Ia={I:
this},0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.Po;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.P3.H(Bs1);this.P3.R(A.aaR(A.acf.AHl));this.P3.L(
A.jb.Text);this.Ia.R(U3);this.Ia.L(A.jb.Text);this.Gu.R(Bs2);this.Gu.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A$,0);this.J(this.P3,0);this.J(this.Ia,0);this.J(
this.Gu,0);this.P3.S(A.aaL(A.fl.Af));this.Ia.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.II;this.AP._Done();this.A$._Done();this.
P3._Done();this.Ia._Done();this.Gu._Done();C.II._Done.call(this);},_ReInit:function(
){C.II._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.P3._ReInit();
this.Ia._ReInit();this.Gu._ReInit();this.P3.R(A.aaR(A.acf.AHl));this.P3.S(A.aaL(
A.fl.Af));this.Ia.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.II._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ia)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMH={AKY:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mv();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amy._Init.call(this,aArg);this.__proto__=
C.AMH;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARN={R5:null,
R$:null,R4:null,R8:null,Pq:null,R7:null,ALt:function(G){A.pe([this,this.BC6],this
);A.pe([this,this.BCU],this);A.pe([this,this.BCQ],this);A.pe([this,this.A4R],this
);A.pe([this,this.BCX],this);A.pe([this,this.BCV],this);},Ii:function(G){var Cy=(
C.QX.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.R$)A._GetAutoObject(C.A8
).Cd(20);else if(Cy===this.Pq)A._GetAutoObject(C.A8).Cd(14);else if(Cy===this.R5
)A._GetAutoObject(C.A8).Cd(12);else if(Cy===this.R8)A._GetAutoObject(C.A8).Cd(43
);else if(Cy===this.R4)A._GetAutoObject(C.A8).Cd(51);else if(Cy===this.R7)A._GetAutoObject(
C.A8).Cd(61);},BCU:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mv();var
Azv=A._NewObject(A.Device.BoolFilterCriterion,0);Azv.Initialize(9,0,true,true);Be.
CX(Azv);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pq.Zz(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},BC6:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mv();var ABF=A._NewObject(A.Device.BoolFilterCriterion,0);ABF.Initialize(
12,0,true,true);Be.CX(ABF);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R$.Zz(
A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BCQ:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mv();var Azb=A._NewObject(A.Device.BoolFilterCriterion
,0);Azb.Initialize(8,0,true,true);Be.CX(Azb);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R5.Zz(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},A4R:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6X(A._GetAutoObject(A.Device.Device
).ABL);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R4.Zz(A._GetAutoObject(A.
Device.Device).An.B_().toFixed());},BCX:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A66();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R8.Zz(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},BCV:function(G){var Be=A._GetAutoObject(A.
Device.Helper).AC6();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R7.Zz(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},_Init:function(aArg){C.Ub._Init.call(this,
aArg);C.QX._Init.call(this.R5={I:this},0);C.QX._Init.call(this.R$={I:this},0);C.
QX._Init.call(this.R4={I:this},0);C.QX._Init.call(this.R8={I:this},0);C.QX._Init.
call(this.Pq={I:this},0);C.QX._Init.call(this.R7={I:this},0);this.__proto__=C.ARN;
this.R5.H(Qa);this.R5.Aj(true);this.R5.T(A.aaR(A.acf.Alarm));this.R5.Ab2(true);this.
R$.H(A0p);this.R$.Aj(true);this.R$.T(A.aaR(A.acf.Asf));this.R$.Ab2(true);this.R4.
H(Od);this.R4.Aj(true);this.R4.T(A.aaR(A.acf.ActionList));this.R4.Ab2(true);this.
R8.H(Qb);this.R8.Aj(true);this.R8.T(A.aaR(A.acf.AON));this.R8.Ab2(true);this.Pq.
H(S$);this.Pq.Ar(false);this.Pq.Aj(false);this.Pq.Z(false);this.Pq.T(A.aaR(A.acf.
ACp));this.Pq.Ab2(true);this.R7.H(UW);this.R7.Aj(true);this.R7.T(A.aaR(A.acf.A6z
));this.R7.Ab2(true);this.J(this.R5,-1);this.J(this.R$,-1);this.J(this.R4,-1);this.
J(this.R8,-1);this.J(this.Pq,-1);this.J(this.R7,-1);this.R5.AR=[this,this.AcV];this.
R5.DB(A.aaL(A.ach.ADE));this.R5.Ab5(A.aaL(A.ach.NX));this.R$.AR=[this,this.AcV];
this.R$.DB(A.aaL(A.ach.AQ8));this.R$.Ab5(A.aaL(A.ach.NX));this.R4.AR=[this,this.
AcV];this.R4.DB(A.aaL(A.ach.APU));this.R4.Ab5(A.aaL(A.ach.NX));this.R8.AR=[this,
this.AcV];this.R8.DB(A.aaL(A.ach.AQs));this.R8.Ab5(A.aaL(A.ach.NX));this.Pq.AR=[
this,this.AcV];this.Pq.DB(A.aaL(A.ach.ADE));this.Pq.Ab5(A.aaL(A.ach.NX));this.R7.
AR=[this,this.AcV];this.R7.DB(A.aaL(A.ach.AQi));this.R7.Ab5(A.aaL(A.ach.NX));},_Done:
function(){this.__proto__=C.Ub;this.R5._Done();this.R$._Done();this.R4._Done();this.
R8._Done();this.Pq._Done();this.R7._Done();C.Ub._Done.call(this);},_ReInit:function(
){C.Ub._ReInit.call(this);this.R5._ReInit();this.R$._ReInit();this.R4._ReInit();
this.R8._ReInit();this.Pq._ReInit();this.R7._ReInit();this.R5.T(A.aaR(A.acf.Alarm
));this.R$.T(A.aaR(A.acf.Asf));this.R4.T(A.aaR(A.acf.ActionList));this.R8.T(A.aaR(
A.acf.AON));this.Pq.T(A.aaR(A.acf.ACp));this.R7.T(A.aaR(A.acf.A6z));},_Mark:function(
D){var B;C.Ub._Mark.call(this,D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARM={Sa:null,VM:null,R9:null,R6:null,R_:null,ALt:function(G){A.pe([this,this.
BCR],this);A.pe([this,this.BC1],this);A.pe([this,this.BC2],this);A.pe([this,this.
BC7],this);A.pe([this,this.BC3],this);},Ii:function(G){var Cy=(C.QX.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VM)A._GetAutoObject(C.A8).Cd(90);if(Cy===this.
R6)A._GetAutoObject(C.A8).Cd(74);if(Cy===this.R9)A._GetAutoObject(C.A8).Cd(71);if(
Cy===this.R_)A._GetAutoObject(C.A8).Cd(46);if(Cy===this.Sa)A._GetAutoObject(C.A8
).Cd(85);},BC2:function(G){var Be=A._GetAutoObject(A.Device.Helper).AC9();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.R_.Zz(A._GetAutoObject(A.Device.Device).An.B_().
toFixed());},BC7:function(G){var Be=A._GetAutoObject(A.Device.Helper).A7f(Math.max(
A._GetAutoObject(A.Device.Device).Av3,A._GetAutoObject(A.Device.Helper).A69(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sa.Zz(
A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BC1:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A7a();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.R9.Zz(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BCR:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOO();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R6.Zz(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BC3:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avx();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VM.Zz(A._GetAutoObject(A.Device.Device).An.B_().toFixed()
);},_Init:function(aArg){C.Ub._Init.call(this,aArg);C.QX._Init.call(this.Sa={I:this
},0);C.QX._Init.call(this.VM={I:this},0);C.QX._Init.call(this.R9={I:this},0);C.QX.
_Init.call(this.R6={I:this},0);C.QX._Init.call(this.R_={I:this},0);this.__proto__=
C.ARM;this.Sa.H(Bs3);this.Sa.Aj(true);this.Sa.T(A.aaR(A.acf.A8d));this.Sa.Ab2(true
);this.VM.H(Bs4);this.VM.Aj(true);this.VM.T(A.aaR(A.acf.AGo));this.R9.H(Bs5);this.
R9.Aj(true);this.R9.T(A.aaR(A.acf.A8f));this.R9.Ab2(true);this.R6.H(Bs6);this.R6.
Aj(true);this.R6.T(A.aaR(A.acf.AB6));this.R6.Ab2(true);this.R_.H(Bs7);this.R_.Aj(
true);this.R_.T(A.aaR(A.acf.ASo));this.R_.Ab2(true);this.J(this.Sa,-1);this.J(this.
VM,-1);this.J(this.R9,-1);this.J(this.R6,-1);this.J(this.R_,-1);this.Sa.AR=[this
,this.AcV];this.Sa.DB(A.aaL(A.ach.AQK));this.Sa.Ab5(A.aaL(A.ach.NX));this.VM.AR=[
this,this.AcV];this.VM.DB(A.aaL(A.ach.ADU));this.R9.AR=[this,this.AcV];this.R9.DB(
A.aaL(A.ach.AQM));this.R9.Ab5(A.aaL(A.ach.NX));this.R6.AR=[this,this.AcV];this.R6.
DB(A.aaL(A.ach.AQd));this.R6.Ab5(A.aaL(A.ach.NX));this.R_.AR=[this,this.AcV];this.
R_.DB(A.aaL(A.ach.AQO));this.R_.Ab5(A.aaL(A.ach.NX));},_Done:function(){this.__proto__=
C.Ub;this.Sa._Done();this.VM._Done();this.R9._Done();this.R6._Done();this.R_._Done(
);C.Ub._Done.call(this);},_ReInit:function(){C.Ub._ReInit.call(this);this.Sa._ReInit(
);this.VM._ReInit();this.R9._ReInit();this.R6._ReInit();this.R_._ReInit();this.Sa.
T(A.aaR(A.acf.A8d));this.VM.T(A.aaR(A.acf.AGo));this.R9.T(A.aaR(A.acf.A8f));this.
R6.T(A.aaR(A.acf.AB6));this.R_.T(A.aaR(A.acf.ASo));},_Mark:function(D){var B;C.Ub.
_Mark.call(this,D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ASm={WF:function(G){this.Agx(
);this.AMf();this.A5e(A.aaR(A.acf.A7S),[this,this.BnW],131072);this.A5e(A.aaR(A.
acf.A7R),[this,this.BnV],16384);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS
).Ml(A.aaR(A.acf.ARH)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DE:function(G){},Abt:function(){return C.Aqw;},Abu:function(){return C.Aq3;}
,Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A7a());},HQ:function(G){C.QD.HQ.call(this,G);if(this.Aki()===false){this.
N.Cw(A._GetAutoObject(A.Device.Converter).Ajr(A._GetAutoObject(A.Device.Converter
).AMa(this.LZ.AC$())));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OS(false
);this.N.OT(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(72);},BnV:function(
G){this.AGM(16384);},BnW:function(G){this.AGM(131072);},_Init:function(aArg){C.QD.
_Init.call(this,aArg);this.__proto__=C.ASm;this.Dr(C.APx);this.Dl(A.aaR(A.acf.A8j
));this.ATv(A._GetAutoObject(C.Av_));},_ReInit:function(){C.QD._ReInit.call(this
);this.Dl(A.aaR(A.acf.A8j));},_className:"Application::NoNaisIdListScreen"};C.ASl={
_Init:function(aArg){C.I7._Init.call(this,aArg);this.__proto__=C.ASl;this.Mx.Ar(
false);this.Mx.Aj(false);this.Mx.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APx={DX:function(G){C.Kt.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad0(10));},_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=
C.APx;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkP={OF:null,Bgb:false
,CQ:function(){A.pe([this,this.AoC],this);},DE:function(G){},CC:function(G){C.GJ.
CC.call(this,G);if(this.Bgb&&(A._GetAutoObject(A.Device.Device).PY>0))A.pe([this
,this.AIT],this);},Agg:function(G){this.A6w(this);},Agj:function(){A._GetAutoObject(
C.A8).Cd(73);},ASu:function(G){throw new Error(Aoz);},Bbd:function(s){this.ASu(s
);},ASv:function(G){throw new Error(Aoz);},Bbe:function(s){this.ASv(s);},ASA:function(
G){throw new Error(Aoz);},AIT:function(s){this.ASA(s);},Bfn:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7)){this.
Bgb=true;A._GetAutoObject(C.A8).Cd(76);}},Agi:function(G){var B;var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([this,this.
XH],[B=A._GetAutoObject(A.Device.Device),B.WE,B.Xk],0);},XH:function(G){var B;if(
A._GetAutoObject(A.Device.Device).P4.Z2===3){A._GetAutoObject(A.Device.Device).A3(
74,false,A.jV,0,[this,this.Agi]);A.z$([this,this.XH],[B=A._GetAutoObject(A.Device.
Device),B.WE,B.Xk],0);A.pe([this,this.AIT],this);}},AJO:function(){throw new Error(
Aoz);},A8z:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A6v(this);},
Bot:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.BiK(this);},IE:function(
G){},A_f:function(E){if(A.aaZ(this.OF,E))return;if(!!this.OF)A.z$([this,this.IE]
,this.OF,0);this.OF=E;if(!!E)A.zX([this,this.IE],E,0);if(!!E)A.pe([this,this.IE]
,this);},Bg0:function(G){var F,Ct;if(!this.OF)return;(Ct=this.OF,Ct[2].call(Ct[0
],!(F=this.OF,F[1].call(F[0]))));},_Init:function(aArg){C.GJ._Init.call(this,aArg
);this.__proto__=C.AkP;this.Dl(A.aaR(A.acf.A8q));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8q));this.CQ();},_Mark:function(D){var B;C.GJ._Mark.
call(this,D);if((B=this.OF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::RegistrationsListScreen"};C.AUC={_Init:function(aArg){C.I7._Init.call(
this,aArg);this.__proto__=C.AUC;},_className:"Application::RegistrationsListFilterScreen"
};C.Aev={_Init:function(aArg){C.Yv._Init.call(this,aArg);this.__proto__=C.Aev;this.
Text.H(Bs8);this.Text.R(A.jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"
};C.ACb={Jq:0,AP:null,A$:null,Ea:null,IN:null,SZ:null,Gz:null,Mj:0,La:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IN.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A$.H([this.IN.M[2]-1,0,this.IN.M[2]+1,aSize[
1]]);this.SZ.H([this.IN.M[2],0,this.IN.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.SZ.M[2]-1,0,this.SZ.M[2]+1,aSize[1]]);this.Gz.H([this.SZ.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IN.L(this.V.AQ);this.
Gz.L(this.V.AQ);this.SZ.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj7(this.
La)){this.V.S(A.aaL(A.fl.H3));this.T(BaW);this.SZ.R(Rp);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mj.toFixed());this.SZ.R(A._GetAutoObject(A.Device.Helper).VZ(this.
Jq,0,5).toFixed());}},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX
){this.Mj=this.AX.CF(Ad,1);this.La=this.AX.AO2(Ad,34);var AtX=this.AX.AOU(Ad,7);
this.Jq=this.AX.KR(Ad,26);var Azi=this.AX.Hv(Ad,4);var AfR=A._GetAutoObject(A.Device.
Helper).Mb(Azi,A._GetAutoObject(A.Device.Helper).Dv());this.IN.Ax(A._GetAutoObject(
A.Device.Converter).AmW(AtX));if(AfR<100)this.Gz.R((AfR.toFixed()+CR)+A.aaR(A.acf.
AL5));else this.Gz.R(A._GetAutoObject(A.acj.KO).AC2(Azi,A._GetAutoObject(A.Device.
Helper).Dv(),AIv));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IN={I:this},0);
A.acg.Text._Init.call(this.SZ={I:this},0);C.CG._Init.call(this.Gz={I:this},0);this.
__proto__=C.ACb;this.AP.H(Aos);this.AP.L(A.jb.Bc);this.A$.H(Aot);this.A$.L(A.jb.
Bc);this.Ea.H(A0q);this.Ea.L(A.jb.Bc);this.IN.H(BaX);this.IN.L(A.jb.Text);this.SZ.
H(Ayz);this.Gz.H(A0r);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.IN,0);this.J(this.SZ,0);this.J(this.Gz,0);this.SZ.S(A.aaL(A.fl.Af));this.
Gz.S(A.aaL(A.fl.Af));this.Gz.AZ(A.aaL(A.fl.Ak));this.Gz.Cr(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done(
);this.Ea._Done();this.IN._Done();this.SZ._Done();this.Gz._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.A$._ReInit(
);this.Ea._ReInit();this.IN._ReInit();this.SZ._ReInit();this.Gz._ReInit();this.SZ.
S(A.aaL(A.fl.Af));this.Gz.S(A.aaL(A.fl.Af));this.Gz.AZ(A.aaL(A.fl.Ak));this.Gz.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADu={Aj4:
null,PC:null,I_:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Aj4={I:this},0);A.acg.Ap._Init.call(this.PC={I:this},0);A.acg.Ap._Init.
call(this.I_={I:this},0);this.__proto__=C.ADu;this.Aj4.H(Bs9);this.Aj4.L(A.jb.Text
);this.PC.H(Bs_);this.PC.L(A.jb.Text);this.I_.H(BaO);this.I_.L(A.jb.Text);this.J(
this.Aj4,0);this.J(this.PC,0);this.J(this.I_,0);this.Aj4.Ax(A.aaL(A.ach.ADQ));this.
PC.Ax(A.aaL(A.ach.AvL));this.I_.Ax(A.aaL(A.ach.AvG));},_Done:function(){this.__proto__=
C.De;this.Aj4._Done();this.PC._Done();this.I_._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.Aj4._ReInit();this.PC._ReInit();this.I_.
_ReInit();},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Aj4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APz={IU:null,Ag2:null,HR:null,Bc:null,MF:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9n,B.A_M],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
WD,B.JY],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SK
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},Dg:function(E){C.BR.Dg.call(this,E);this.IU.L(E);this.Ag2.L(E);this.
HR.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HR.R(A.aaR(A.acf.Afd));else this.HR.R(((A.aaR(A.acf.GN)+A.aaR(A.acf.
Colon))+CR)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
Aq0()){this.Aw5(((A._GetAutoObject(A.Device.Helper).W.CL+1).toFixed()+BaA)+A._GetAutoObject(
A.Device.Device).An.B_().toFixed());this.JY(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nm(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.Aw5(BaB);this.JY(2);
this.OnSetAnimalId(-1);this.Nm(0);}},JY:function(E){if(this.Gender===E)return;this.
Gender=E;this.Ag2.Ax(A._GetAutoObject(A.Device.Converter).AmW(E));},Aw5:function(
E){if(this.MF===E)return;this.MF=E;this.IU.R(E);},Nm:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj7(E))this.HR.
Z(false);else this.HR.Z(true);},_Init:function(aArg){C.BR._Init.call(this,aArg);
A.acg.Text._Init.call(this.IU={I:this},0);A.acg.Ap._Init.call(this.Ag2={I:this},
0);A.acg.Text._Init.call(this.HR={I:this},0);A.acg.C8._Init.call(this.Bc={I:this
},0);this.__proto__=C.APz;this.IU.H(BaC);this.IU.Hn(2);this.IU.KU(true);this.IU.
A6(0x12);this.IU.R(BaD);this.Ag2.H(Bs$);this.HR.H(Bta);this.HR.A6(0x11);this.HR.
R(A.aaR(A.acf.Afd));this.Bc.DC(AyE);this.Bc.DM(AyF);this.Bc.L(A.jb.Bc);this.J(this.
IU,0);this.J(this.Ag2,0);this.J(this.HR,0);this.J(this.Bc,0);this.IU.S(A.aaL(A.fl.
Ak));this.Ag2.Ax(A._GetAutoObject(A.Device.Converter).AmW(2));this.HR.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.IU._Done();this.
Ag2._Done();this.HR._Done();this.Bc._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.IU._ReInit();this.Ag2._ReInit();this.HR._ReInit();
this.Bc._ReInit();this.HR.R(A.aaR(A.acf.Afd));this.IU.S(A.aaL(A.fl.Ak));this.HR.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.IU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Aa3={EaseOfDeliveryToString:
null,AgT:null,Ch:function(G){C.NJ.Ch.call(this,G);var AJ7=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.Kz(this.EaseOfDeliveryToString.Lx(AJ7));this.G3.R(
this.AgT.Ael(AJ7).toFixed());},Dg:function(E){C.NJ.Dg.call(this,E);this.G3.L(E);
},_Init:function(aArg){C.NJ._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgT._Init.call(this.
AgT={I:this},0);this.__proto__=C.Aa3;this.T(A.aaR(A.acf.AgK));},_Done:function(){
this.__proto__=C.NJ;this.EaseOfDeliveryToString._Done();this.AgT._Done();C.NJ._Done.
call(this);},_ReInit:function(){C.NJ._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgT._ReInit();this.T(A.aaR(A.acf.AgK));},_Mark:function(D){var B;
C.NJ._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XW={WhereAboutsToString:null,K0:null,Ch:function(G){C.NJ.Ch.call(this,G);var
La=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kz(this.WhereAboutsToString.
Lx(La));this.G3.R(this.K0.Ael(La).toFixed());},Dg:function(E){C.NJ.Dg.call(this,
E);this.G3.L(E);},_Init:function(aArg){C.NJ._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.K0._Init.call(this.K0={
I:this},0);this.__proto__=C.XW;this.T(A.aaR(A.acf.Jk));},_Done:function(){this.__proto__=
C.NJ;this.WhereAboutsToString._Done();this.K0._Done();C.NJ._Done.call(this);},_ReInit:
function(){C.NJ._ReInit.call(this);this.WhereAboutsToString._ReInit();this.K0._ReInit(
);this.T(A.aaR(A.acf.Jk));},_Mark:function(D){var B;C.NJ._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K0)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R1={Cq:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D9.CC.
call(this,G);A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.
OnSetId],0);A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Helper),B.U4,B.U7]
,0);A.pe([this,this.AfH],this);},E4:function(G){var B;C.D9.E4.call(this,G);A.z$([
this,this.AfH],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.z$([this
,this.AfH],[B=A._GetAutoObject(A.Device.Helper),B.U4,B.U7],0);},Fk:function(G){var
B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.
MC(-this.Y.Br[1]);},DE:function(G){switch(this.Cq.CP){case 6:case 7:this.Cq.NM=true;
break;case 4:this.Bgw(4);break;case 5:this.Bgw(5);break;default:;}},Bgw:function(
GA){var B;switch(GA){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Dd(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Dd(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;default:throw new Error(
Btb);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I6.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ch(this
);}X=X.Ah;}},AfH:function(s){this.GH(s);},MT:function(G){var B;this.Y.VA(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BL._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R1;this.Cq.Filter=147;this.Y.H(U1);this.Y.JX(1);this.Ay.H(As0
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BM=[this,this.DE];this.Cq.D1=[this,
this.DE];this.Y.Em=[this,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cq._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XX={AaX:null,
XT:null,AaY:null,XU:null,Aa3:null,XW:null,_Init:function(aArg){C.R1._Init.call(this
,aArg);C.AaX._Init.call(this.AaX={I:this},0);C.XT._Init.call(this.XT={I:this},0);
C.AaY._Init.call(this.AaY={I:this},0);C.XU._Init.call(this.XU={I:this},0);C.Aa3.
_Init.call(this.Aa3={I:this},0);C.XW._Init.call(this.XW={I:this},0);this.__proto__=
C.XX;this.AaX.H(BD);this.AaX.Aj(true);this.XT.H(IX);this.XT.Aj(true);this.XT.Bi(
true);this.AaY.H(Qd);this.AaY.Aj(true);this.XU.H(Aag);this.XU.Aj(true);this.XU.Bi(
true);this.Aa3.H(Alh);this.Aa3.Aj(true);this.XW.H(Aoq);this.XW.Aj(true);this.XW.
Bi(true);this.J(this.AaX,0);this.J(this.XT,0);this.J(this.AaY,0);this.J(this.XU,
0);this.J(this.Aa3,0);this.J(this.XW,0);},_Done:function(){this.__proto__=C.R1;this.
AaX._Done();this.XT._Done();this.AaY._Done();this.XU._Done();this.Aa3._Done();this.
XW._Done();C.R1._Done.call(this);},_ReInit:function(){C.R1._ReInit.call(this);this.
AaX._ReInit();this.XT._ReInit();this.AaY._ReInit();this.XU._ReInit();this.Aa3._ReInit(
);this.XW._ReInit();},_Mark:function(D){var B;C.R1._Mark.call(this,D);if((B=this.
AaX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XU={
BreedToString:null,G3:null,M6:null,Ch:function(G){C.IH.Ch.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BT(Bv));this.G3.
R(this.M6.Ael(Bv).toFixed());},Dg:function(E){C.IH.Dg.call(this,E);this.G3.L(E);
},_Init:function(aArg){C.IH._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G3={I:this},0);A.Device.
M6._Init.call(this.M6={I:this},0);this.__proto__=C.XU;this.BU.H(Btc);this.G3.H(Btd
);this.G3.Hn(5);this.G3.A6(0x14);this.G3.R(Bte);this.G3.L(A.jb.Text);this.J(this.
G3,0);this.Hw.Ax(A.aaL(A.ach.ADI));this.G3.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IH;this.BreedToString._Done();this.G3._Done();this.M6._Done();C.
IH._Done.call(this);},_ReInit:function(){C.IH._ReInit.call(this);this.BreedToString.
_ReInit();this.G3._ReInit();this.M6._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IH._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaY={
Ch:function(G){C.IH.Ch.call(this,G);var AAq=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAq>0)this.T(A._GetAutoObject(A.Device.Converter).Rj(AAq));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IH._Init.call(this,aArg);this.__proto__=
C.AaY;this.Hw.Ax(A.aaL(A.ach.AQj));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XT={YA:null,Ch:function(G){C.IH.Ch.call(this,G);var Pc=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfW=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Pc>
0)this.T(A._GetAutoObject(A.acj.KO).AjN(Pc));else this.T(A.aaR(A.acf.Unknown));var
Azk=A.aaL(A.aci.TR);switch(AfW){case 0:Azk=A.aaL(A.ach.ADG);break;case 1:{Azk=A.
aaL(A.ach.AvH);this.YA.Cv(0);}break;case 2:{Azk=A.aaL(A.ach.AvH);this.YA.Cv(1);}
break;case 3:{Azk=A.aaL(A.ach.AvH);this.YA.Cv(2);}break;default:A.ab5("%s%e",Btf
,AfW);}this.YA.Ax(Azk);},_Init:function(aArg){C.IH._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.YA={I:this},0);this.__proto__=C.XT;this.BU.H(Btg);this.YA.H(AH1);
this.YA.L(A.jb.Text);this.J(this.YA,0);this.Hw.Ax(A.aaL(A.ach.AvG));this.YA.Ax(A.
aaL(A.ach.ADG));},_Done:function(){this.__proto__=C.IH;this.YA._Done();C.IH._Done.
call(this);},_ReInit:function(){C.IH._ReInit.call(this);this.YA._ReInit();},_Mark:
function(D){var B;C.IH._Mark.call(this,D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaX={Jq:0,XV:null,La:0
,Bl:function(aSize){C.IH.Bl.call(this,aSize);this.XV.H(this.Hw.M);},Ai:function(
Ae){C.IH.Ai.call(this,Ae);this.XV.L(this.BU.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj7(this.La)){this.T(A.aaR(A.acf.AnimalLoss));this.Hw.Z(false);this.XV.Z(true);
}else if(this.Jq>0){this.T(A._GetAutoObject(A.Device.Converter).Rj(this.Jq));this.
Hw.Z(true);this.XV.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hw.Z(true);this.
XV.Z(false);}},Ch:function(G){C.IH.Ch.call(this,G);this.Jq=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.La=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IH._Init.call(this,aArg);A.acg.Text._Init.call(this.XV={
I:this},0);this.__proto__=C.AaX;this.XV.R(BaW);this.J(this.XV,0);this.Hw.Ax(A.aaL(
A.ach.AvL));this.XV.S(A.aaL(A.fl.H3));},_Done:function(){this.__proto__=C.IH;this.
XV._Done();C.IH._Done.call(this);},_ReInit:function(){C.IH._ReInit.call(this);this.
XV._ReInit();},_Mark:function(D){var B;C.IH._Mark.call(this,D);if((B=this.XV)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AME={XX:null,Init:function(aArg){var B;A.zX([this,this.AAI],[B=A._GetAutoObject(
A.Device.Device),B.AEH,B.AIX],0);A.pe([this,this.AAI],this);},DE:function(G){var
D5=(A.Core.BL.isPrototypeOf(G)?G:null);switch(D5.CP){case 6:this.Or(this);break;
case 7:this.M0(this);break;default:D5.NM=true;}},CC:function(G){var B;this.XX.CC(
this);C.AB.CC.call(this,G);},E4:function(G){var B;this.XX.E4(this);C.AB.E4.call(
this,G);},Anq:function(G){A._GetAutoObject(C.A8).FB();},Adw:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},M0:function(G){if(A._GetAutoObject(A.Device.
Device).An.B_()<=1)return;var LE=A._GetAutoObject(A.Device.Helper).W.CL;LE=LE+1;
if(LE>=A._GetAutoObject(A.Device.Device).An.B_())LE=0;A._GetAutoObject(A.Device.
Helper).G8(LE);},Or:function(G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)
return;var LE=A._GetAutoObject(A.Device.Helper).W.CL;LE=LE-1;if(LE<0)LE=A._GetAutoObject(
A.Device.Device).An.B_()-1;A._GetAutoObject(A.Device.Helper).G8(LE);},AAI:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqs)A._GetAutoObject(C.A8).Ab_(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XX._Init.call(this.XX={I:this},0);this.
__proto__=C.AME;this.Background.H(Ce);this.N.Z(true);this.N.OS(true);this.N.OT(true
);this.Dr(C.APz);this.XX.H(Ff);this.J(this.XX,0);this.N.CE=[this,this.Anq];this.
N.Cf=[this,this.Adw];this.N.C2(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XX._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XX._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IH={Hw:null,BU:null
,T:function(E){C.I6.T.call(this,E);this.BU.R(this.DK);},Dg:function(E){C.I6.Dg.call(
this,E);this.Hw.L(E);this.BU.L(E);},_Init:function(aArg){C.I6._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hw={I:this},0);C.CG._Init.call(this.BU={I:this},0);this.
__proto__=C.IH;this.Hw.H(Bth);this.Hw.L(A.jb.Text);this.BU.H(Bti);this.BU.A6(0x11
);this.BU.L(A.jb.Text);this.J(this.Hw,0);this.J(this.BU,0);this.Hw.Ax(A.aaL(A.aci.
TR));this.BU.S(A.aaL(A.fl.Af));this.BU.AZ(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I6;this.Hw._Done();this.BU._Done();C.I6._Done.call(this);},_ReInit:function(
){C.I6._ReInit.call(this);this.Hw._ReInit();this.BU._ReInit();this.BU.S(A.aaL(A.
fl.Af));this.BU.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I6._Mark.call(this
,D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I6={Background:null
,KV:0,Hl:false,CQ:function(){this.Ch(this);},Init:function(aArg){var B;A.zX([this
,this.Bb0],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.pe([this,
this.Bb0],this);},Bl:function(aSize){C.Hi.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hi.Ai.call(this,Ae);if(this.
Hl)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CJ);},Ch:function(G){}
,Bb0:function(s){this.Ch(s);},Bi:function(E){if(this.Hl===E)return;this.Hl=E;this.
Am();},Dg:function(E){if(this.KV===E)return;this.KV=E;},_Init:function(aArg){C.Hi.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.I6;this.H(BD);this.Background.H(AIx);this.KV=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hi;this.Background._Done(
);C.Hi._Done.call(this);},_ReInit:function(){C.Hi._ReInit.call(this);this.Background.
_ReInit();this.CQ();},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NJ={G3:null,BBE:function(G){this.BU.H(A.abN(this.BU.M,this.G3.M[0]));},_Init:
function(aArg){C.FA._Init.call(this,aArg);A.acg.Text._Init.call(this.G3={I:this}
,0);this.__proto__=C.NJ;this.G3.A0(0xA);this.G3.H(Btj);this.G3.Hn(5);this.G3.Jc(
true);this.G3.A6(0x14);this.G3.R(A.jV);this.G3.L(A.jb.Text);this.J(this.G3,0);this.
G3.Q7([this,this.BBE]);this.G3.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.FA;this.G3._Done();C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(
this);this.G3._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FA.
_Mark.call(this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axo={ARn:null,_Init:function(aArg){C.ZC._Init.call(this,aArg);this.__proto__=
C.Axo;},_Mark:function(D){var B;C.ZC._Mark.call(this,D);if((B=this.ARn)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANM={WC:null,WX:0,AwQ:function(E){C.AmI.AwQ.call(this,E);if(E)this.Ps.R(Btk);
else this.Ps.R(BaY);},BnL:function(E){if(A.aaZ(this.WC,E))return;if(!!this.WC)A.
z$([this,this.A3K],this.WC,0);this.WC=E;if(!!E)A.zX([this,this.A3K],E,0);if(!!E)
A.pe([this,this.A3K],this);},AFW:function(E){var F;if(this.WX===E)return;this.WX=
E;this.AwQ(!!this.WC&&((F=this.WC,F[1].call(F[0]))===E));},A3K:function(G){var F;
this.AwQ(!!this.WC&&((F=this.WC,F[1].call(F[0]))===this.WX));},_Init:function(aArg
){C.AmI._Init.call(this,aArg);this.__proto__=C.ANM;this.Ps.R(BaY);this.Ps.S(A.aaL(
A.fl.H3));},_Mark:function(D){var B;C.AmI._Mark.call(this,D);if((B=this.WC)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axq={WC:null,WX:0,_Init:function(aArg){C.ZC._Init.call(this,aArg);this.__proto__=
C.Axq;},_Mark:function(D){var B;C.ZC._Mark.call(this,D);if((B=this.WC)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AUg={GP:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Rb._Init.call(
this.GP={I:this},0);this.__proto__=C.AUg;var B;this.Jd(A.aaR(A.acf.ACS));this.GP.
H(Ah1);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGm));this.GP.Ar4(
false);this.GP.A_I(true);this.J(this.GP,0);this.GP.Ab1([B=this.GP,B.FV]);this.GP.
Gs([this,this.D_,this.GS]);this.GP.AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(
A.Device.Device),B.ASV,B.A0D]);},_Done:function(){this.__proto__=C.Cg;this.GP._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.GP._ReInit(
);this.Jd(A.aaR(A.acf.ACS));this.GP.T(A.aaR(A.acf.AGm));},_Mark:function(D){var B;
C.Cg._Mark.call(this,D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.AUe={GI:0,C9:null,AW:null,Ku:null,Fa:null
,GermanStateToString:null,CountryToString:null,Pz:0,Lc:0,Md:false,Init:function(
aArg){A.zX([this,this.MN],[this,this.SE,this.Lr],0);A.zX([this,this.MN],[this,this.
Ant,this.Ahu],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.AW.FO(this.LU);this.
Ku.FO(this.LU);this.Fa.CV(this.LU);},DJ:function(G){var F;if(!this.N)return;switch(
this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=
this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[
1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[
0])).CS(this.CountryToString.BT(this.Lc));(F=this.N,F[1].call(F[0])).Ca=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0]
)).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(
F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS((A.aaR(A.acf.EN
)+Ayf)+this.GermanStateToString.Lx(A._GetAutoObject(A.Device.Converter).AC3(this.
Pz)));(F=this.N,F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0
])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}}
,Ex:function(EO){var Ts=this.A_;if(EO<0)EO=0;else if(EO>this.RK)EO=this.RK;switch(
EO){case 0:{this.Bb(null);if(!this.GI&&!this.Pz)this.Lr(0);}break;case 1:this.Bb(
this.Fa);break;case 2:this.Bb(this.Ku);break;case 3:if(((Ts===2)&&!this.Pz)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Ts>0))this.AW.SQ(2);else this.AW.SQ(
7);}break;default:throw new Error(Atn+EO.toFixed());}this.A_=EO;C.El.Ex.call(this
,EO);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Md=true;this.SG(A._GetAutoObject(
A.Device.Helper).VZ(E,0,10));this.Ahu(A._GetAutoObject(A.Device.Helper).VZ(E,10,
2)|0);this.Lr(A._GetAutoObject(A.Device.Converter).S3(E));this.Md=false;if(!!this.
AM){this.Ku.Kx(2);this.AW.Kx(10);}else{this.Ku.Kx(0);this.AW.Kx(0);}this.Am();},
FV:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADd());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(2);}else this.Ex(this.RK);},AjO:function(){return this.GI;
},AjQ:function(){return 9999999999;},Lr:function(E){if(this.Lc===E)return;this.Lc=
E;if(this.Md===false)A.pe([this,this.Vq],this);A.abo([this,this.SE,this.Lr],0);}
,SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Md===false)A.pe([this,this.
Vq],this);A.abo([this,this.AbY,this.SG],0);},Vq:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).AqB(this.Lc),3,10)+A.abl(this.Pz,2,10))+
A.abm(this.GI,10,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahu:function(
E){if(this.Pz===E)return;this.Pz=E;if(this.Md===false)A.pe([this,this.Vq],this);
A.abo([this,this.Ant,this.Ahu],0);},SE:function(){return this.Lc;},AbY:function(
){return this.GI;},Ant:function(){return this.Pz;},_Init:function(aArg){C.El._Init.
call(this,aArg);C.C9._Init.call(this.C9={I:this},0);C.ARh._Init.call(this.AW={I:
this},0);C.AvT._Init.call(this.Ku={I:this},0);C.AsL._Init.call(this.Fa={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AUe;var B;this.RK=3;this.AW.H(Btl);this.Ku.H(Btm);this.Ku.EV(16);this.Fa.H(BaZ
);this.J(this.AW,0);this.J(this.Ku,0);this.J(this.Fa,0);this.C9.AFc([this,this.SE
,this.Lr]);this.AW.Au([this,this.AbY,this.SG]);this.Ku.Au([this,this.Ant,this.Ahu
]);this.Fa.CK(this.C9);this.Fa.Au([B=this.C9,B.B$,B.Cb]);this.Init(aArg);},_Done:
function(){this.__proto__=C.El;this.C9._Done();this.AW._Done();this.Ku._Done();this.
Fa._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.El._Done.
call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit();this.AW.
_ReInit();this.Ku._ReInit();this.Fa._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ku)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.ARh={NP:null,NO:null,ET:null,FZ:null,Eq:null,Dy:null,CW:null,Cu:null,FO:function(
E){if(this.M_===E)return;C.Li.FO.call(this,E);this.Cu.CV(E);this.CW.CV(E);this.Dy.
CV(E);this.Eq.CV(E);this.FZ.CV(E);this.ET.CV(E);this.NO.CV(E);this.NP.CV(E);},Yt:
function(HA){var B6=null;switch(HA){case-1:case 0:B6=this.F0;break;case 1:B6=this.
Cu;break;case 2:B6=this.CW;break;case 3:B6=this.Dy;break;case 4:B6=this.Eq;break;
case 5:B6=this.FZ;break;case 6:B6=this.ET;break;case 7:B6=this.NO;break;case 8:B6=
this.NP;break;case 9:B6=this.G2;break;default:A.ab5("%s",Ah4);}return B6;},_Init:
function(aArg){C.Li._Init.call(this,aArg);C.DF._Init.call(this.NP={I:this},0);C.
DF._Init.call(this.NO={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CW={I:this},0);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ARh;this.H(Btn);this.G2.H(AIO);this.NP.H(AyJ);this.NO.H(A0d
);this.ET.H(A0e);this.FZ.H(A0f);this.Eq.H(A0g);this.Dy.H(A0h);this.CW.H(A0i);this.
Cu.H(BaJ);this.F0.H(A0j);this.EM.H(A0j);this.J(this.NP,-2);this.J(this.NO,-2);this.
J(this.ET,-2);this.J(this.FZ,-2);this.J(this.Eq,-2);this.J(this.Dy,-2);this.J(this.
CW,-2);this.J(this.Cu,-2);this.NP.Dk=[this,this.GX];this.NO.Dk=[this,this.GX];this.
ET.Dk=[this,this.GX];this.FZ.Dk=[this,this.GX];this.Eq.Dk=[this,this.GX];this.Dy.
Dk=[this,this.GX];this.CW.Dk=[this,this.GX];this.Cu.Dk=[this,this.GX];},_Done:function(
){this.__proto__=C.Li;this.NP._Done();this.NO._Done();this.ET._Done();this.FZ._Done(
);this.Eq._Done();this.Dy._Done();this.CW._Done();this.Cu._Done();C.Li._Done.call(
this);},_ReInit:function(){C.Li._ReInit.call(this);this.NP._ReInit();this.NO._ReInit(
);this.ET._ReInit();this.FZ._ReInit();this.Eq._ReInit();this.Dy._ReInit();this.CW.
_ReInit();this.Cu._ReInit();},_Mark:function(D){var B;C.Li._Mark.call(this,D);if((
B=this.NP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cu
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AUf={
GI:0,C9:null,AW:null,Fa:null,CountryToString:null,Lc:0,Md:false,Init:function(aArg
){A.zX([this,this.MN],[this,this.SE,this.Lr],0);},Ai:function(Ae){C.El.Ai.call(this
,Ae);this.AW.FO(this.LU);this.Fa.CV(this.LU);},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).CS(this.CountryToString.BT(this.Lc));(F=this.N,F[1].call(F[0])).Ca=null;}
break;default:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(
F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Ts=this.A_;if(EO<0)EO=0;
else if(EO>this.RK)EO=this.RK;switch(EO){case 0:{this.Bb(null);if(!this.GI)this.
Lr(0);}break;case 1:this.Bb(this.Fa);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Ts>0))this.AW.SQ(2);else this.AW.SQ(7);}break;default:throw new Error(Atn+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,EO);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.Md=true;this.SG(A._GetAutoObject(A.Device.Helper).VZ(E,0,12));this.Lr(
A._GetAutoObject(A.Device.Converter).S3(E));this.Md=false;if(!!this.AM)this.AW.Kx(
12);else this.AW.Kx(0);this.Am();},FV:function(G){var F;if(!this.AM){var BP=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).ADd());if(this.AM!==BP){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(this.RK);},AjO:function(
){return this.GI;},AjQ:function(){return 999999999999;},Lr:function(E){if(this.Lc===
E)return;this.Lc=E;if(this.Md===false)A.pe([this,this.Vq],this);A.abo([this,this.
SE,this.Lr],0);},SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Md===false
)A.pe([this,this.Vq],this);A.abo([this,this.AbY,this.SG],0);},Vq:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).AqB(this.Lc),3,10)+A.abm(
this.GI,12,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SE:function(){return this.
Lc;},AbY:function(){return this.GI;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C9._Init.call(this.C9={I:this},0);C.ADY._Init.call(this.AW={I:this},0);C.AsL.
_Init.call(this.Fa={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AUf;var B;this.RK=2;this.AW.H(Bto);this.Fa.H(BaZ);this.
J(this.AW,0);this.J(this.Fa,0);this.C9.AFc([this,this.SE,this.Lr]);this.AW.Au([this
,this.AbY,this.SG]);this.Fa.CK(this.C9);this.Fa.Au([B=this.C9,B.B$,B.Cb]);this.Init(
aArg);},_Done:function(){this.__proto__=C.El;this.C9._Done();this.AW._Done();this.
Fa._Done();this.CountryToString._Done();C.El._Done.call(this);},_ReInit:function(
){C.El._ReInit.call(this);this.C9._ReInit();this.AW._ReInit();this.Fa._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,Yb:null,Yc:null,Ya:null,X_:null,X$:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkQ();A._GetAutoObject(A.Device.Helper).Ast();},Ii:function(G){
var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Yb)A._GetAutoObject(
C.A8).Cd(28);else if(Cy===this.Yc)A._GetAutoObject(C.A8).Cd(26);else if(Cy===this.
Ya)A._GetAutoObject(C.A8).Cd(54);else if(Cy===this.X_)A._GetAutoObject(C.A8).Cd(
27);else if(Cy===this.X$)A._GetAutoObject(C.A8).Cd(78);},A3O:function(G){A._GetAutoObject(
C.A8).FB();},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.
MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fo._Init.call(this.Yb={I:this
},0);C.Fo._Init.call(this.Yc={I:this},0);C.Fo._Init.call(this.Ya={I:this},0);C.Fo.
_Init.call(this.X_={I:this},0);C.Fo._Init.call(this.X$={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CU);this.N.Z(true);this.N.CS(A.jV);this.Ek.Ar(false
);this.Dr(C.Aq2);this.DY.A0(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);
this.Y.JX(9);this.Ay.H(Iu);this.Yb.H(Qa);this.Yb.Aj(true);this.Yb.T(A.aaR(A.acf.
A8b));this.Yc.H(A0p);this.Yc.Aj(true);this.Yc.T(A.aaR(A.acf.NewAnimals));this.Ya.
H(Od);this.Ya.Aj(true);this.Ya.T(A.aaR(A.acf.Calving));this.X_.H(Qb);this.X_.Aj(
true);this.X_.T(A.aaR(A.acf.AB$));this.X$.H(ML);this.X$.Aj(true);this.X$.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
Yb,0);this.J(this.Yc,0);this.J(this.Ya,0);this.J(this.X_,0);this.J(this.X$,0);this.
N.CE=[this,this.A3O];this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk];this.Yb.
AR=[this,this.Ii];this.Yb.DB(A.aaL(A.ach.ADR));this.Yc.AR=[this,this.Ii];this.Yc.
DB(A.aaL(A.ach.AvP));this.Ya.AR=[this,this.Ii];this.Ya.DB(A.aaL(A.ach.AQc));this.
X_.AR=[this,this.Ii];this.X_.DB(A.aaL(A.ach.AP9));this.X$.AR=[this,this.Ii];this.
X$.DB(A.aaL(A.ach.AP2));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.Yb._Done();this.Yc._Done();this.Ya._Done();this.X_.
_Done();this.X$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.Yb._ReInit(
);this.Yc._ReInit();this.Ya._ReInit();this.X_._ReInit();this.X$._ReInit();this.Yb.
T(A.aaR(A.acf.A8b));this.Yc.T(A.aaR(A.acf.NewAnimals));this.Ya.T(A.aaR(A.acf.Calving
));this.X_.T(A.aaR(A.acf.AB$));this.X$.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ASc={K7:null,EaseOfDelivery:null,BirthType:null,AcL:null
,Lm:null,Cn:null,G7:null,Lk:null,AzT:true,Init:function(aArg){this.Bb(this.Db);A.
pe([this,this.GH],this);},Ew:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E6();A._GetAutoObject(C.A8).FB();if(!!this.K7)this.K7.Ew(this);},Agh:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EC((F=this.B0.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwR(true);if(!!this.K7)this.K7.Agh(this
);if(A._GetAutoObject(A.Device.Device).An.Lj())A._GetAutoObject(A.Device.Helper).
AKs(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApJ]);else{this.Ai1();A.
pe([this,this.Ap7],this);}},Aup:function(){this.N.CS(A.jV);this.N.C3(A.aaL(A.ach.
ADV));this.N.Ca=[this,this.AyZ];},CC:function(G){var B;C.H0.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lj()){A._GetAutoObject(A.Device.Device).A3(41
,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),0,null);this.Ew(this);
}else if(this.AzT){this.AzT=false;A.pe([this,this.A33],this);}else if(!this.K7){
this.K7=A._NewObject(C.ASd,0);this.K7.A_c([this,this.AA6]);A._GetAutoObject(A.Device.
Helper).W.Gr();A._GetAutoObject(A.Device.Helper).Aqk(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nm(this.AsX.Ael(6));this.K7.LQ(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ew(this);}},Ai1:function(
){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var
L$=A._GetAutoObject(A.Device.Device).An.LV(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SR(L$);if(A._GetAutoObject(A.Device.Helper
).Am7()){if(A._GetAutoObject(A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.
Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),0,null);else{
var B2=A._NewObject(A.Device.Rating,0);B2.Gr();B2.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KM);B2.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A7g(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap7:function(G){var B;if(!!this.K7)this.K7.Ap7(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).Am7())this.C$.Z(true);else this.C$.Z(false);},
ApJ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",Atd,As.Id);}},AA6:function(G){this.
LQ(this);this.AeY(A._GetAutoObject(A.Device.Helper).Abr(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JL(this.Db);},ApK:function(G){var F;C.H0.ApK.call(this
,G);(F=this.C$.Q,F[2].call(F[0],this.C$.AnZ));},A33:function(G){A._GetAutoObject(
C.A8).Cd(79);},_Init:function(aArg){C.H0._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcL._Init.call(this.AcL={I:this},0);C.Rb._Init.call(this.Lm={I:this
},0);C.SS._Init.call(this.Cn={I:this},0);C.BX._Init.call(this.G7={I:this},0);C.BX.
_Init.call(this.Lk={I:this},0);this.__proto__=C.ASc;var B;this.Dr(C.APw);this.Lm.
H(Ah1);this.Lm.Aj(true);this.Lm.T(A.aaR(A.acf.ACz));this.CH.H(AcR);this.Cn.H(AcR
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFO(true);this.G7.H(AcR);
this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Ars));this.Lk.H(AcR);this.Lk.Aj(true);this.
Lk.T(A.aaR(A.acf.AgK));this.J(this.Lm,-5);this.J(this.Cn,-3);this.J(this.G7,-1);
this.J(this.Lk,-1);this.EaseOfDelivery.L2(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.L2(A._GetAutoObject(A.Device.Helper).W);this.AcL.L2(A._GetAutoObject(A.
Device.Helper).W);this.Lm.Gs([this,this.D_,this.GS]);this.Lm.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ASR,B.AnG]);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.L1([
B=this.Cn,B.FV]);this.Cn.L4(A.aaL(A.ach.Edit));this.Cn.Ab7([B=A._GetAutoObject(A.
Device.Helper).W,B.Awf,B.Q6]);this.Gn.Au([B=this.AcL,B.B$,B.Cb]);this.Gn.CK(this.
AcL);this.G7.Au([B=this.BirthType,B.B$,B.Cb]);this.G7.CK(this.BirthType);this.Lk.
Au([B=this.EaseOfDelivery,B.B$,B.Cb]);this.Lk.CK(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.H0;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcL._Done();this.Lm._Done();this.Cn._Done();this.G7._Done();this.Lk.
_Done();C.H0._Done.call(this);},_ReInit:function(){C.H0._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcL._ReInit();this.Lm._ReInit(
);this.Cn._ReInit();this.G7._ReInit();this.Lk._ReInit();this.Lm.T(A.aaR(A.acf.ACz
));this.Cn.T(A.aaR(A.acf.Aeg));this.G7.T(A.aaR(A.acf.Ars));this.Lk.T(A.aaR(A.acf.
AgK));},_Mark:function(D){var B;C.H0._Mark.call(this,D);if((B=this.K7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcL)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMG={Init:function(aArg){var B;A.zX([this,this.ALv],[B=A._GetAutoObject(A.Device.
Device),B.AEO,B.AI2],0);A.pe([this,this.ALv],this);},AKY:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbU){case 0:Be=A._GetAutoObject(A.Device.
Helper).AC6();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOQ();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mv();break;default:throw new Error(A0s+A.
_GetAutoObject(A.Device.Device).AbU.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},ALv:function(G){switch(A._GetAutoObject(A.Device.Device).AbU){case
0:this.Dl(A.aaR(A.acf.ASi));break;case 1:this.Dl(A.aaR(A.acf.BkM));break;case 2:
this.Dl(A.aaR(A.acf.Av9));break;default:A.ab5("%s",A0s+A._GetAutoObject(A.Device.
Device).AbU.toFixed());}},_Init:function(aArg){C.Amy._Init.call(this,aArg);this.
__proto__=C.AMG;this.BnD(C.APM);this.Ek.Ab3(A._NewObject(C.APB,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ASd={AAq:0,Adj:null
,Au4:null,BeC:0,A4f:0,A2_:0,Init:function(aArg){this.BeC=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adj=A._GetAutoObject(A.Device.Device).An.Filter;this.AAq=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A2_=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LQ:function(G){A._GetAutoObject(A.Device.Helper).W.AnG(this.AAq);A._GetAutoObject(
A.Device.Helper).W.Ae6(true);switch(this.A2_){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EC(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EC(2);break;default:
A.ab5("%s%e",AyG,this.A2_);}},Ew:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adj);if(!!this.A4f)this.Bhb();},Agh:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bhb:function(){var At4=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LV(0,this.BeC);At4.E3(Ad,A._GetAutoObject(
A.Device.Device).An);At4.AwD(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);At4.
ArX(false);At4.AwS(At4.LactationNumber+1);At4.Ci(A._GetAutoObject(A.Device.Device
).An);},Ap7:function(G){this.A4f++;var ByL=A._GetAutoObject(A.Device.Converter).
BhV(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A4f<ByL)&&(A._GetAutoObject(
A.Device.Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A3(59,true,A.jV,0,[this,this.Vl]);else this.Bdz(
this);},Vl:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&(As.PopupState===8))this.Bdz(this);else if(!!As&&(As.PopupState===7))this.
AA6(this);},AA6:function(G){var B;var Ie=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfW=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Pc=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJ7=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.Au4)(B=this.Au4
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EC(Ie);A._GetAutoObject(
A.Device.Helper).W.Akw(AfW);A._GetAutoObject(A.Device.Helper).W.N3(Bv);A._GetAutoObject(
A.Device.Helper).W.Q6(Pc);A._GetAutoObject(A.Device.Helper).W.Aky(AJ7);},Bdz:function(
G){this.Bhb();A._GetAutoObject(C.A8).FB();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adj);},A_c:function(E){if(A.aa0(this.Au4,E))return;this.Au4=E;},_Init:function(
aArg){this.__proto__=C.ASd;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adj)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMW={Init:function(aArg){
var B;A.zX([this,this.BeZ],[B=A._GetAutoObject(A.Device.Device),B.ASB,B.A0t],0);
this.BeZ(this);},Ci:function(){A.ab5("%s",Btp);},E3:function(AcX){C.Vz.E3.call(this
,AcX);var O;for(O=16;O>0;O--)this.Ic.Set(O,this.Ic.Get(O-1));this.Ic.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Btq);},AD2:function(Eh){switch(Eh){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},BeZ:
function(G){this.E3(A._GetAutoObject(A.Device.Device).AuI);A.we(this,0);},_Init:
function(aArg){C.Vz._Init.call(this,aArg);this.__proto__=C.AMW;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuW={_Init:function(){C.
AMW._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JO={C8:null,V:null,A76:true,T:function(E){C.I6.T.call(this,E);this.
V.R(E);},Dg:function(E){C.I6.Dg.call(this,E);this.V.L(E);},BnI:function(E){if(this.
A76===E)return;this.A76=E;this.C8.Z(E);},_Init:function(aArg){C.I6._Init.call(this
,aArg);A.acg.C8._Init.call(this.C8={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.JO;this.C8.DC(Btr);this.C8.DM(Bts);this.C8.L(A.jb.Bc);this.V.
A0(0x3F);this.V.H(Btt);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C8,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kr));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.I6;this.C8._Done();this.V._Done();C.
I6._Done.call(this);},_ReInit:function(){C.I6._ReInit.call(this);this.C8._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kr));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.I6._Mark.call(this,D);if((B=this.C8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APB={AgY:null,Df:null,Abp:null,Fm:null,Fb:
null,Init:function(aArg){var B;A.zX([this,this.A4T],[B=A._GetAutoObject(A.Device.
Device),B.AEO,B.AI2],0);A.pe([this,this.A4T],this);},Dg:function(E){C.Yw.Dg.call(
this,E);this.Df.L(E);},AEU:function(G){A.pe([this,this.A4T],this);},AA8:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E$();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DL(1,4))?B:null);if(!!FilterCriterion)Filter.Nq(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C5:function(G){var B;var F;C.Yw.C5.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Df.Ax(A.aaL(A.ach.AjW));return;}var Bzr=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(38,0)
)?B:null);var Bb$=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DL(14,0))?B:null);if(!!Bzr)this.Df.Ax(A.aaL(A.ach.ADj));else if(
!!Bb$&&(Bb$.A5===1))this.Df.Ax(A.aaL(A.ach.AQe));else this.Df.Ax(A.aaL(A.ach.AjW
));},A4T:function(G){var F;var Filter=null;var AOE;switch(A._GetAutoObject(A.Device.
Device).AbU){case 0:Filter=A._GetAutoObject(A.Device.Helper).AC6();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOQ();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mv();break;default:throw new Error(A0s+A._GetAutoObject(A.Device.
Device).AbU.toFixed());}var Ai5=this.Akq();if(Ai5>0){AOE=A._NewObject(A.Device.Int32FilterCriterion
,0);AOE.Initialize(1,4,Ai5,false);Filter.CX(AOE);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeZ(false);},Or:function(G){if(!this.Akq())this.AW.AeZ(true
);this.Bb(this.AW);this.Am();},M0:function(G){this.AW.AeZ(false);this.Bb(this.AgY
);this.Am();},_Init:function(aArg){C.Yw._Init.call(this,aArg);C.Ard._Init.call(this.
AgY={I:this},0);A.acg.Ap._Init.call(this.Df={I:this},0);C.Abp._Init.call(this.Abp={
I:this},0);A.Core.BL._Init.call(this.Fm={I:this},0);A.Core.BL._Init.call(this.Fb={
I:this},0);this.__proto__=C.APB;var B;this.H(Btu);this.AW.H(Btv);this.T9.H(Btw);
this.Gw.Z(false);this.AgY.H(Btx);this.Df.H(Bty);this.Abp.Au(A._GetAutoObject(A.Device.
Device).AbU);this.Fm.Filter=6;this.Fb.Filter=7;this.J3(this.A$,-1);this.J(this.AgY
,-1);this.J(this.Df,-1);this.AgY.CK(this.Abp);this.AgY.Au([B=this.Abp,B.B$,B.Cb]
);this.Df.Ax(A.aaL(A.ach.AjW));this.Fm.BM=[this,this.Or];this.Fb.BM=[this,this.M0
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yw;this.AgY._Done();this.Df.
_Done();this.Abp._Done();this.Fm._Done();this.Fb._Done();C.Yw._Done.call(this);}
,_ReInit:function(){C.Yw._ReInit.call(this);this.AgY._ReInit();this.Df._ReInit();
this.Abp._ReInit();this.Fm._ReInit();this.Fb._ReInit();},_Mark:function(D){var B;
C.Yw._Mark.call(this,D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abp)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abp={AeU:null
,Init:function(aArg){var B;A.zX([this,this.BeE],[B=A._GetAutoObject(A.Device.Device
),B.AEO,B.AI2],0);A.pe([this,this.BeE],this);},Du:function(){return 3;},Au:function(
E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwZ(E);},AC5:function(
aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;return this.AeU.AsM(aIndex
);},AC7:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return this.
AeU.AsN(aIndex);},BeE:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbU;A.
abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeU._Init.call(this.AeU={I:this},0);this.__proto__=C.Abp;this.BG.Set(0,
0);this.BG.Set(1,1);this.BG.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeU._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeU._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APM={Es:null,IQ:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.Es={I:this},0);A.acg.Text._Init.call(this.IQ={I:this},0);this.__proto__=
C.APM;this.H(Oe);this.Background.H(Oe);this.Es.H(AIy);this.Es.R(A.aaR(A.acf.A7m)
);this.Es.A6(0x12);this.Es.L(A.jb.Text);this.IQ.A0(0x3F);this.IQ.H(AIz);this.IQ.
Hn(5);this.IQ.A6(0x14);this.IQ.R(A.aaR(A.acf.AG0));this.IQ.L(A.jb.Text);this.J(this.
Es,0);this.J(this.IQ,0);this.Es.S(A.aaL(A.fl.Af));this.Es.AZ(A.aaL(A.fl.HJ));this.
Es.Cr(A.aaL(A.fl.Bh));this.IQ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EB;this.Es._Done();this.IQ._Done();C.EB._Done.call(this);},_ReInit:function(){
C.EB._ReInit.call(this);this.Es._ReInit();this.IQ._ReInit();this.Es.R(A.aaR(A.acf.
A7m));this.IQ.R(A.aaR(A.acf.AG0));this.Es.S(A.aaL(A.fl.Af));this.Es.AZ(A.aaL(A.fl.
HJ));this.Es.Cr(A.aaL(A.fl.Bh));this.IQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EB._Mark.call(this,D);if((B=this.Es)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J6:null,BgK:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bfo(this);else A._GetAutoObject(A.Device.Device).A3(63,true,A.
jV,0,[this,this.Vl]);},Bfo:function(G){A._GetAutoObject(C.A8).FB();},Vl:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63)
)&&(As.PopupState===7))this.Bfo(this);},_Init:function(aArg){C.Mk._Init.call(this
,aArg);A.acg.Text._Init.call(this.J6={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dr(C.APA);this.Jj.H(Btz);this.Jj.AkG(2);this.Acz.Z(false);this.ARU=12;this.
Number.H(BtA);this.Number.R(A.aaR(A.acf.A$I));this.A5n=false;this.J6.H(BtB);this.
J6.Hn(5);this.J6.KU(true);this.J6.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.
aaR(A.acf.ABR));this.J6.L(A.jb.Text);this.J3(this.Jj,-1);this.J3(this.IV,-1);this.
J3(this.Acz,-1);this.J(this.J6,0);this.J6.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mk;this.J6._Done();C.Mk._Done.call(this);},_ReInit:function(){C.Mk._ReInit.
call(this);this.J6._ReInit();this.Number.R(A.aaR(A.acf.A$I));this.J6.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.ABR));this.J6.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mk._Mark.call(this,D);if((B=this.J6)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APA={_Init:function(aArg){C.Aq1.
_Init.call(this,aArg);this.__proto__=C.APA;this.DS.EC(1);},_className:"Application::HeaderScannedCowId"
};C.Jj={AbL:null,AbK:null,AbJ:null,QI:null,CountryToString:null,AsP:0,CQ:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QI.R(this.CountryToString.
Lx(A._GetAutoObject(A.Device.Converter).A7K(A._GetAutoObject(A.Device.Device).Language
))+BtC);},AkG:function(E){if(this.AsP===E)return;this.AsP=E;var bitmap=null;var A2c=
BtD;var A2b=null;var A2d=false;switch(E){case 0:bitmap=A.aaL(A.ach.Arb);break;case
1:{bitmap=A.aaL(A.ach.AQT);A2c=BtE;A2b=A.aaL(A.fl.Ak);A2d=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQU);A2c=BtF;A2b=A.aaL(A.fl.Bh);A2d=true;}break;default:throw new Error(
BtG+E.toFixed());}this.AbJ.Ax(bitmap);this.AbK.Ax(bitmap);this.AbL.Ax(bitmap);this.
QI.H(A.abJ(this.QI.M,A2c));this.QI.S(A2b);this.QI.Z(A2d);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbL={I:this},0);A.acg.Ap._Init.call(this.AbK={I:this},0);A.acg.Ap._Init.
call(this.AbJ={I:this},0);A.acg.Text._Init.call(this.QI={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jj;this.H(AIR);this.
AbL.A0(0x3);this.AbL.H(AIR);this.AbL.L(A.jb.H_);this.AbL.Cv(2);this.AbK.A0(0x3);
this.AbK.H(AIR);this.AbK.L(A.jb.Aeb);this.AbK.Cv(1);this.AbJ.A0(0x3);this.AbJ.H(
AIR);this.AbJ.L(A.jb.Text);this.AbJ.Cv(0);this.QI.A0(0x14);this.QI.H(BtH);this.QI.
L(0xFF020202);this.QI.Z(false);this.J(this.AbL,0);this.J(this.AbK,0);this.J(this.
AbJ,0);this.J(this.QI,0);this.AbL.Ax(A.aaL(A.ach.Arb));this.AbK.Ax(A.aaL(A.ach.Arb
));this.AbJ.Ax(A.aaL(A.ach.Arb));this.QI.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbL._Done();this.AbK._Done();this.AbJ._Done();this.QI._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbL._ReInit();this.AbK._ReInit();this.AbJ._ReInit(
);this.QI._ReInit();this.CountryToString._ReInit();this.QI.S(A.aaL(A.fl.Ak));this.
CQ();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsP={Transponder:0,BGx:1,BGy:2};C.APw={Ap:null,Dg:function(E){C.BR.Dg.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APw;this.Ap.H(AyH);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APn));},_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.
BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ij:0,AaF:4,Al7:function(G){C.Ra.Al7.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bd$()){this.Ij=A._GetAutoObject(A.Device.Helper).UD.Id;var AiA=A._GetAutoObject(
A.Device.Helper).A7I(this.Ij,A._GetAutoObject(A.Device.Helper).W);if(AiA){A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rj(this.Ij),0,[
this,this.Vl]);return;}AiA=A._GetAutoObject(A.Device.Helper).Bkc(this.Ij,A._GetAutoObject(
A.Device.Helper).W);if(AiA&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ij)){A._GetAutoObject(A.Device.Device).A3(25,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Ij),0,[this,this.Vl]);return;}this.AaF=A._GetAutoObject(A.Device.
Helper).ARu(this.Ij);switch(this.AaF){case 0:A._GetAutoObject(A.Device.Device).A3(
45,true,this.Ij.toFixed().length.toFixed(),0,[this,this.Vl]);break;case 1:case 2:{
var BN=A._GetAutoObject(A.Device.Converter).AxW(this.Ij);A._GetAutoObject(A.Device.
Device).A3(46,true,BN.toFixed(),0,[this,this.Vl]);}break;case 3:this.BgC();break;
default:throw new Error(AIm+this.AaF.toFixed());}}},Ew:function(G){A._GetAutoObject(
C.A8).FB();},Vl:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.AaF===2)this.BgC();else A._GetAutoObject(
A.Device.Device).AhM();break;case 5:this.Ew(this);break;default:;}},BgC:function(
){A._GetAutoObject(A.Device.Helper).W.Nk(this.Ij);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PW(this.Ij);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).A3(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ew(this);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dr(C.IM);this.Number.R(A.aaR(A.acf.A$C
));this.Jj.H(BtI);this.IV.H(BtJ);this.AkG(1);this.N.CE=[this,this.Ew];this.N.C2(
A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A$C));},_className:"Application::SetSaveNaisIdScreen"};C.AN$={LQ:function(
G){C.AqK.LQ.call(this,G);A.pe([this,this.BCf],this);},BCf:function(G){this.JL(this.
Ef);},_Init:function(aArg){C.AqK._Init.call(this,aArg);this.__proto__=C.AN$;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UT={Animal:null,WhereAboutsToString:
null,Gl:function(aIndex){return this.WhereAboutsToString.BT(this.C7(aIndex));},Au:
function(E){C.Cm.Au.call(this,E);if(!!this.Animal)this.Animal.Nm(E);},A41:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B$,this.Cb],0);},L2:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A41],[B=this.Animal,B.Awr,B.Nm],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A41],[B=this.Animal,B.Awr,B.Nm],0);A.pe([this,this.A41],this);}
,_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UT;this.BG.Set(0,1);this.
BG.Set(1,2);this.BG.Set(2,3);this.BG.Set(3,4);this.BG.Set(4,5);},_Done:function(
){this.__proto__=C.Cm;this.WhereAboutsToString._Done();C.Cm._Done.call(this);},_ReInit:
function(){C.Cm._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UU={Du:function(){return 6;},_Init:function(aArg){C.UT._Init.call(this,aArg);
this.__proto__=C.UU;this.BG.Set(0,0);this.BG.Set(1,1);this.BG.Set(2,2);this.BG.Set(
3,3);this.BG.Set(4,4);this.BG.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcL={Du:function(){return 5;},_Init:function(aArg){C.UT._Init.call(this,aArg
);this.__proto__=C.AcL;this.BG.Set(0,6);this.BG.Set(1,7);this.BG.Set(2,8);this.BG.
Set(3,9);this.BG.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdW={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.BcU],[B=A._GetAutoObject(A.Device.
Device),B.ASC,B.A0u],0);A.pe([this,this.BcU],this);},Du:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BT(aIndex);},DZ:function(A7){return A7;},H5:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Awu(E);},BcU:function(G){
this.Q=A._GetAutoObject(A.Device.Device).AgA;A.abo([this,this.B$,this.Cb],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdW;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGO={FM:null
,EA:null,EartagNrAssignmentMode:null,Fm:null,Fb:null,HH:null,AW:null,Kp:null,Nd:
null,A_:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CV(A.jb.CJ);this.Background.L(A.
jb.CU);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CU);this.HH.CV(A.jb.CU);this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CV(
A.jb.CJ);}else{this.AW.FO(A.jb.CU);this.HH.CV(A.jb.CU);}this.Bb(null);}this.Nd.L(
this.V.AQ);},I3:function(G){C.Eg.I3.call(this,G);if(!this.A_)this.FV(this);else this.
He(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.
N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.
N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(
F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=
null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_&&!!this.N)
this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EO;if(this.A_<0)this.A_=0;else if(
this.A_>1)this.A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SQ(2);else this.AW.SQ(7);}break;default:throw new Error(
Atn+this.A_.toFixed());}this.DJ(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},Or:function(G){this.ABf(2);},M0:function(G){this.ABf(7);},ABf:
function(GA){var B;var AzC=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!AzC){
var AAs=(A.Core.P.isPrototypeOf(B=this.QJ(AzC,GA,0x15))?B:null);if(!!AAs){this.Bb(
AAs);return true;}}return false;},Af3:function(G){var F;if(!this.EA||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Nd.Ax(
A._GetAutoObject(A.Device.Converter).AmW(2));break;case 1:this.Nd.Ax(A._GetAutoObject(
A.Device.Converter).AmW((F=this.EA,F[1].call(F[0]))));break;default:throw new Error(
Ba0+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A4y],this);},A4y:function(G){var B;var F;if(!this.EA||!this.EartagNrAssignmentMode
){this.Kp.Ae1(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoB]);this.Kp.
Ae1([B=A._GetAutoObject(A.Device.Device),B.AEK,B.AIZ]);}break;case 1:switch((F=this.
EA,F[1].call(F[0]))){case 1:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awi
,B.AyR]);this.Kp.Ae1([B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0v]);}break;case
0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyS]);this.Kp.Ae1([B=
A._GetAutoObject(A.Device.Device),B.ASI,B.A0w]);}break;case 2:{this.AW.Au([B=A._GetAutoObject(
A.Device.Device),B.Anu,B.AoB]);this.Kp.Ae1([B=A._GetAutoObject(A.Device.Device),
B.AEK,B.AIZ]);}break;default:throw new Error(BtK+(F=this.EA,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Ba0+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Us:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([
this,this.Af3],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Af3],this.EA,0);if(!!
E)A.pe([this,this.Af3],this);},Akx:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af3],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af3],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af3],this);},Um:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BL._Init.call(this.Fm={I:this},0);A.Core.
BL._Init.call(this.Fb={I:this},0);C.Ard._Init.call(this.HH={I:this},0);C.AvU._Init.
call(this.AW={I:this},0);C.Au8._Init.call(this.Kp={I:this},0);A.acg.Ap._Init.call(
this.Nd={I:this},0);this.__proto__=C.AGO;var B;this.H(U0);this.V.Ar(false);this.
V.R(Atf);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fb.Filter=7;this.HH.H(BtL);this.
AW.H(BtM);this.Nd.H(BtN);this.J(this.HH,0);this.J(this.AW,0);this.J(this.Nd,0);this.
FM=A._NewObject(C.Aeu,0);this.Fm.BM=[this,this.Or];this.Fb.BM=[this,this.M0];this.
HH.CK(this.Kp);this.HH.Au([B=this.Kp,B.B$,B.Cb]);this.AW.Au([this,this.Um,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fb.
_Done();this.HH._Done();this.AW._Done();this.Kp._Done();this.Nd._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fm._ReInit();this.Fb.
_ReInit();this.HH._ReInit();this.AW._ReInit();this.Kp._ReInit();this.Nd._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nd)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AN1={Wt:
null,Ze:null,Zb:null,Ue:null,Init:function(aArg){this.Bb(this.Wt);},AEC:function(
G){var BeA=(C.Ank.isPrototypeOf(G)?G:null);if(!!BeA)A._GetAutoObject(A.Device.Device
).A3(BeA.AdE,true,A.jV,0,null);},DE:function(G){if((this.Cq.CP===7)&&(this.AV===
this.Ue))A._GetAutoObject(A.Device.Device).A3(10,true,A.jV,0,null);else if((this.
Cq.CP===6)&&(this.AV===this.Ue))A._GetAutoObject(C.A8).Cd(91);C.Ej.DE.call(this,
G);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Ank._Init.call(this.Wt={I:
this},0);C.Ank._Init.call(this.Ze={I:this},0);C.Ank._Init.call(this.Zb={I:this},
0);C.Ank._Init.call(this.Ue={I:this},0);this.__proto__=C.AN1;this.Dr(C.APb);this.
Wt.H(IX);this.Wt.Aj(true);this.Wt.T(A.aaR(A.acf.AhL));this.Wt.Bi(false);this.Wt.
AdE=79;this.Ze.H(Qd);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.A$U));this.Ze.Bi(true
);this.Ze.AdE=77;this.Zb.H(Aag);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.A7h));this.
Zb.Bi(false);this.Zb.AdE=78;this.Ue.H(Alh);this.Ue.Aj(true);this.Ue.T(A.aaR(A.acf.
About));this.Ue.Bi(true);this.Ue.AdE=3;this.J(this.Wt,-1);this.J(this.Ze,-1);this.
J(this.Zb,-1);this.J(this.Ue,-1);this.Wt.AR=[this,this.AEC];this.Ze.AR=[this,this.
AEC];this.Zb.AR=[this,this.AEC];this.Ue.AR=[this,this.AEC];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wt._Done();this.Ze._Done();this.Zb._Done();this.
Ue._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.
Wt._ReInit();this.Ze._ReInit();this.Zb._ReInit();this.Ue._ReInit();this.Wt.T(A.aaR(
A.acf.AhL));this.Ze.T(A.aaR(A.acf.A$U));this.Zb.T(A.aaR(A.acf.A7h));this.Ue.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.Wt
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ue)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.APb={_Init:function(aArg){C.Ks.
_Init.call(this,aArg);this.__proto__=C.APb;this.Text.R(A.aaR(A.acf.Info));},_ReInit:
function(){C.Ks._ReInit.call(this);this.Text.R(A.aaR(A.acf.Info));},_className:"Application::HeaderDeviceInfoMenu"
};C.ANZ={FactoryResetScope:null,Uh:null,Wq:null,Uj:null,Init:function(aArg){this.
Bb(this.Uh);A.pe([this,this.MN],this);},BkW:function(G){switch(this.FactoryResetScope.
C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).A3(33,true
,A.jV,0,[this,this.A4h]);break;case 0:A._GetAutoObject(A.Device.Device).A3(7,true
,A.jV,0,[this,this.A4h]);break;case 2:A._GetAutoObject(A.Device.Device).A3(115,true
,A.jV,0,[this,this.A4h]);break;default:A.ab5("%s%i",BtO,this.FactoryResetScope.Q
);}},A4h:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bo4();A._GetAutoObject(A.Device.Device).A3(8,true,A.jV,0,null);A._GetAutoObject(
C.A8).Cd(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bo3();A._GetAutoObject(
A.Device.Device).ArU(0);A._GetAutoObject(A.Device.Device).ArV(0);A._GetAutoObject(
A.Device.Device).ArW(0);A._GetAutoObject(A.Device.Device).Ar0(0);A._GetAutoObject(
A.Device.Device).Ar1(0);A._GetAutoObject(A.Device.Device).Ar2(0);A._GetAutoObject(
A.Device.Device).Uq(5);A._GetAutoObject(A.Device.Device).AwG(0);A._GetAutoObject(
A.Device.Device).AwH(0);A._GetAutoObject(A.Device.Device).AwI(0);A._GetAutoObject(
A.Device.Device).Aw0(1);A._GetAutoObject(A.Device.Device).Aw1(1);A._GetAutoObject(
A.Device.Device).Aw2(1);A._GetAutoObject(A.Device.Device).A3(34,true,A.jV,0,null
);}break;case 115:{A._GetAutoObject(A.Device.Device).Bo2();A._GetAutoObject(A.Device.
Device).A3(116,true,A.jV,0,null);A._GetAutoObject(C.A8).Cd(37);}break;default:A.
ab5("%s%e",AIn,As.Id);}},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.FactoryResetScope.
_Init.call(this.FactoryResetScope={I:this},0);C.Ni._Init.call(this.Uh={I:this},0
);C.Ni._Init.call(this.Wq={I:this},0);C.BX._Init.call(this.Uj={I:this},0);this.__proto__=
C.ANZ;var B;this.Dr(C.AO$);this.Uh.H(IX);this.Uh.Aj(true);this.Uh.T(A.aaR(A.acf.
ACB));this.Uh.Bi(false);this.Uh.Nl(93);this.Wq.H(Qd);this.Wq.Aj(true);this.Wq.T(
A.aaR(A.acf.AdV));this.Wq.Bi(true);this.Wq.Nl(92);this.Uj.H(Ba1);this.Uj.Aj(true
);this.Uj.Bmi(true);this.Uj.T(A.aaR(A.acf.A6K));this.Uj.Bi(false);this.J(this.Uh
,-1);this.J(this.Wq,-1);this.J(this.Uj,-1);this.Uh.AR=[B=this.Uh,B.Np];this.Wq.AR=[
B=this.Wq,B.Np];this.Uj.AR=[this,this.BkW];this.Uj.Au([B=this.FactoryResetScope,
B.B$,B.Cb]);this.Uj.CK(this.FactoryResetScope);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.FactoryResetScope._Done();this.Uh._Done();this.Wq._Done(
);this.Uj._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.FactoryResetScope._ReInit();this.Uh._ReInit();this.Wq._ReInit();this.Uj._ReInit(
);this.Uh.T(A.aaR(A.acf.ACB));this.Wq.T(A.aaR(A.acf.AdV));this.Uj.T(A.aaR(A.acf.
A6K));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uj)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceDataManagementScreen"};C.AO$={_Init:function(
aArg){C.Ks._Init.call(this,aArg);this.__proto__=C.AO$;this.Text.R(A.aaR(A.acf.ACC
));},_ReInit:function(){C.Ks._ReInit.call(this);this.Text.R(A.aaR(A.acf.ACC));},
_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aq3={QV:null,Wg:null
,_Init:function(aArg){C.T1._Init.call(this,aArg);C.CG._Init.call(this.QV={I:this
},0);C.CG._Init.call(this.Wg={I:this},0);this.__proto__=C.Aq3;this.QV.H(BtP);this.
QV.R(A.aaR(A.acf.A$M));this.QV.A6(0x12);this.QV.L(A.jb.Text);this.Wg.H(BaV);this.
Wg.R(A.aaR(A.acf.An8));this.Wg.L(A.jb.Text);this.J(this.QV,0);this.J(this.Wg,0);
this.QV.S(A.aaL(A.fl.Af));this.QV.AZ(A.aaL(A.fl.Ak));this.QV.Cr(A.aaL(A.fl.Bh));
this.Wg.S(A.aaL(A.fl.Af));this.Wg.AZ(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
C.T1;this.QV._Done();this.Wg._Done();C.T1._Done.call(this);},_ReInit:function(){
C.T1._ReInit.call(this);this.QV._ReInit();this.Wg._ReInit();this.QV.R(A.aaR(A.acf.
A$M));this.Wg.R(A.aaR(A.acf.An8));this.QV.S(A.aaL(A.fl.Af));this.QV.AZ(A.aaL(A.fl.
Ak));this.QV.Cr(A.aaL(A.fl.Bh));this.Wg.S(A.aaL(A.fl.Af));this.Wg.AZ(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.T1._Mark.call(this,D);if((B=this.QV)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Wg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.APH={QW:null,_Init:function(aArg){C.T1._Init.call(this,aArg);C.CG._Init.call(
this.QW={I:this},0);this.__proto__=C.APH;this.QW.H(BtQ);this.QW.R(A.aaR(A.acf.Ul
));this.QW.A6(0x12);this.QW.L(A.jb.Text);this.J(this.QW,0);this.QW.S(A.aaL(A.fl.
Af));this.QW.AZ(A.aaL(A.fl.Ak));this.QW.Cr(A.aaL(A.fl.Bh));},_Done:function(){this.
__proto__=C.T1;this.QW._Done();C.T1._Done.call(this);},_ReInit:function(){C.T1._ReInit.
call(this);this.QW._ReInit();this.QW.R(A.aaR(A.acf.Ul));this.QW.S(A.aaL(A.fl.Af)
);this.QW.AZ(A.aaL(A.fl.Ak));this.QW.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;
C.T1._Mark.call(this,D);if((B=this.QW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosShortNaisId"};C.Aqw={IN:null,AbC:null,Ea:null
,Bl:function(aSize){C.M7.Bl.call(this,aSize);this.IN.H([this.Gz.M[2],0,this.Gz.M[
2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([this.IN.M[2]-1,0,this.IN.M[2]+1
,aSize[1]]);this.AbC.H([this.IN.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.M7.
Ai.call(this,Ae);this.AbC.L(this.Gz.AQ);this.IN.L(this.Gz.AQ);},Ch:function(Ad){
C.M7.Ch.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Ie=this.AX.
AmX(Ad,14);var AtX=this.AX.AOU(Ad,7);this.IN.Ax(A._GetAutoObject(A.Device.Converter
).AmW(AtX));this.AbC.Ax(A._GetAutoObject(A.Device.Converter).A5s(Ie));this.Am();
}},_Init:function(aArg){C.M7._Init.call(this,aArg);A.acg.Ap._Init.call(this.IN={
I:this},0);A.acg.Ap._Init.call(this.AbC={I:this},0);A.acg.AL._Init.call(this.Ea={
I:this},0);this.__proto__=C.Aqw;this.IN.H(BaX);this.IN.L(A.jb.Text);this.AbC.H(BtR
);this.AbC.L(A.jb.Text);this.Ea.H(BtS);this.Ea.L(A.jb.Bc);this.J(this.IN,0);this.
J(this.AbC,0);this.J(this.Ea,0);this.IN.Ax(A.aaL(A.aci.TR));this.AbC.Ax(A.aaL(A.
aci.TR));},_Done:function(){this.__proto__=C.M7;this.IN._Done();this.AbC._Done();
this.Ea._Done();C.M7._Done.call(this);},_ReInit:function(){C.M7._ReInit.call(this
);this.IN._ReInit();this.AbC._ReInit();this.Ea._ReInit();},_Mark:function(D){var
B;C.M7._Mark.call(this,D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ANf={ZR:null,Bl:
function(aSize){C.M7.Bl.call(this,aSize);this.ZR.H([this.Gz.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M7.Ai.call(this,Ae);this.ZR.L(this.Gz.AQ);},Ch:function(
Ad){C.M7.Ch.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Jq=this.
AX.KR(Ad,26);if(Jq>0)this.ZR.R(A.ab2(Jq.toFixed(),5));else this.ZR.R(Rp);this.Am(
);}},_Init:function(aArg){C.M7._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZR={I:this},0);this.__proto__=C.ANf;this.ZR.H(BtT);this.J(this.ZR,0);this.ZR.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M7;this.ZR._Done();C.M7._Done.
call(this);},_ReInit:function(){C.M7._ReInit.call(this);this.ZR._ReInit();this.ZR.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M7._Mark.call(this,D);if((B=this.ZR
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.AR7={Ap:null,Ai:function(Ae){C.AeV.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeV._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.AR7;this.Text.H(BtU);this.Ap.H(A0n);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Afe));},_Done:function(){this.__proto__=C.AeV;this.Ap._Done(
);C.AeV._Done.call(this);},_ReInit:function(){C.AeV._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeV._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yv={Text:
null,Df:null,AP:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Nt],[B=A._GetAutoObject(A.Device.Device),B.AEG,B.AIW],0);A.zV([this,this.Nt
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nt],this);},Dg:function(
E){C.BR.Dg.call(this,E);this.Df.L(E);this.Text.L(E);this.Gw.L(E);this.D2.Zu(E);}
,WG:function(E){C.BR.WG.call(this,E);this.D2.CV(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B_().toFixed());},Nt:function(s){this.DX(s);}
,_Init:function(aArg){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.C8._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C8._Init.call(this.A$={I:this},0);this.__proto__=C.Yv;this.Text.H(BtV);this.
Text.A6(0x11);this.Df.H(Alk);this.AP.DC(BaR);this.AP.DM(BaS);this.AP.L(A.jb.Bc);
this.Gw.H(BtW);this.Gw.L(A.jb.CU);this.D2.A0(0x14);this.D2.H(BtX);this.D2.Zu(A.jb.
Bm);this.D2.CV(A.jb.Ri);this.D2.Hn(2);this.A$.DC(BtY);this.A$.DM(BtZ);this.A$.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Df,0);this.J(this.AP,0);this.J(this.Gw,
0);this.J(this.D2,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.AZ(
A.aaL(A.fl.Ak));this.Df.Ax(A.aaL(A.ach.AjW));this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Text.
_Done();this.Df._Done();this.AP._Done();this.Gw._Done();this.D2._Done();this.A$.
_Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.
Text._ReInit();this.Df._ReInit();this.AP._ReInit();this.Gw._ReInit();this.D2._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.AZ(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acp={FM:null
,J1:null,J0:null,AkN:null,AkO:null,Q8:null,QH:null,AbB:null,V6:null,PM:null,PN:null
,Sz:null,Gx:null,Gy:null,Jz:null,AlP:0,AlU:0,D7:0,DW:0,A_:0,Bl:function(aSize){var
B;this.Dz.H([this.Hx.M[2]-10,this.Hx.M[1],this.H6.M[0]+10,this.Hx.M[3]]);this.Dz.
AFt((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.Dz.Gt,true,null,null);},Ai:function(Ae
){var B;C.BX.Ai.call(this,Ae);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A_===1)||(this.A_===2)){var A1A=this.A2y(this.A_);if(!!
A1A){this.AbB.Z(true);this.AbB.H(A1A.M);this.AbB.L(this.V.AQ);this.V6.Z(true);this.
V6.H(A1A.M);}else{this.AbB.Z(false);this.V6.Z(false);}this.Hx.Z(false);this.H6.Z(
false);}else{this.AbB.Z(false);this.V6.Z(false);this.Hx.Z(Fw||GE);this.H6.Z(Fw||
GE);}},Qu:function(G){if(!!this.Q){if(this.FI===1)A.pe([this,this.Vd],this);else
if(this.FI===4)A.pe([this,this.A0T],this);else if(this.FI===5)A.pe([this,this.A0R
],this);}C.BX.Qu.call(this,G);},Kg:function(G){switch(this.A_){case 0:C.BX.Kg.call(
this,G);break;case 2:break;default:this.Ady(this);}},Kb:function(G){switch(this.
A_){case 0:C.BX.Kb.call(this,G);break;default:this.Ais(this);}},A15:function(G){
var F;if(this.A_===1){var BP=this.D7;this.D7=this.D7-10;if(this.D7<this.AlU)this.
D7=this.AlU;if(this.D7<A._GetAutoObject(A.Device.Device).AcG)this.D7=A._GetAutoObject(
A.Device.Device).AcG;if(this.DW!==BP){if(!!this.J1)(F=this.J1,F[2].call(F[0],this.
D7));A.abo(this.J1,0);}}if(this.A_===2){var BP=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BP){if(!!this.J0)(F=this.J0,F[2].call(F[
0],this.DW));A.abo(this.J0,0);}}this.DJ(this);this.Am();},A0R:function(s){this.A15(
s);},Al5:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A0R],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A2F:function(G){var F;if(this.A_===1){var
BP=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP
){if(!!this.J1)(F=this.J1,F[2].call(F[0],this.D7));A.abo(this.J1,0);}}if(this.A_===
2){var BP=this.DW;this.DW=this.DW+10;if(this.DW>this.AlP)this.DW=this.AlP;if(this.
DW!==BP){if(!!this.J0)(F=this.J0,F[2].call(F[0],this.DW));A.abo(this.J0,0);}}this.
DJ(this);this.Am();},A0T:function(s){this.A2F(s);},Al6:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A0T],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},Vd:function(G){this.Ex(this.A_+1);},Ady:function(G){this.FI=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Vd],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GH:function(G){},AfH:function(s){this.GH(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeB));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vd];}break;case 2:{(F=this.
N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am3
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},A_E:function(E){if(A.aaZ(this.J1,E))return;if(!!this.J1)A.z$([this,this.
A35],this.J1,0);this.J1=E;if(!!this.J1)A.zX([this,this.A35],this.J1,0);A.pe([this
,this.A35],this);},A35:function(G){var F;this.D7=(F=this.J1,F[1].call(F[0]));this.
Am();},A_D:function(E){if(A.aaZ(this.J0,E))return;if(!!this.J0)A.z$([this,this.A34
],this.J0,0);this.J0=E;if(!!this.J0)A.zX([this,this.A34],this.J0,0);A.pe([this,this.
A34],this);},A34:function(G){var F;this.DW=(F=this.J0,F[1].call(F[0]));this.Am();
},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;
if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EO;if((this.A_<0)||(
this.A_>2))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=!!this.A_;this.
Am();},Ais:function(G){if(this.A_>1)this.Ex(this.A_-1);},A4g:function(G){},Ay0:function(
s){this.A4g(s);},A3R:function(G){},Bb6:function(s){this.A3R(s);},A2y:function(Atw
){return null;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.acg.AL._Init.call(
this.AkN={I:this},0);A.acg.AL._Init.call(this.AkO={I:this},0);A.acg.AL._Init.call(
this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={I:this},0);A.acg.AL._Init.call(
this.AbB={I:this},0);A.acg.BW._Init.call(this.V6={I:this},0);A.acg.Text._Init.call(
this.PM={I:this},0);A.acg.Text._Init.call(this.PN={I:this},0);A.acg.Text._Init.call(
this.Sz={I:this},0);A.Core.BL._Init.call(this.Gx={I:this},0);A.Core.BL._Init.call(
this.Gy={I:this},0);A.Core.BL._Init.call(this.Jz={I:this},0);this.__proto__=C.Acp;
this.H(AfE);this.T(A.aaR(A.acf.Arr));this.Background.H(AfE);this.V.H(BD);this.V.
R(A.aaR(A.acf.AG8));this.V.A6(0x12);this.AkN.H(Bt0);this.AkN.L(A.jb.Gj);this.AkO.
H(Bt1);this.AkO.L(A.jb.H_);this.Q8.H(Bt2);this.Q8.L(A.jb.E1);this.QH.H(Bt3);this.
AbB.H(Bt4);this.V6.H(Bt5);this.V6.Nn(3);this.V6.L(A.jb.AV);this.V6.Z(false);this.
PM.H(Bt6);this.PM.Hn(8);this.PM.Jc(true);this.PM.A6(0x11);this.PM.L(0xFF000000);
this.PN.H(Bt7);this.PN.Hn(8);this.PN.Jc(true);this.PN.A6(0x11);this.PN.L(0xFF000000
);this.Sz.H(Bt8);this.Sz.Jc(false);this.Sz.A6(0x12);this.Sz.L(0xFF000000);this.Gx.
Filter=5;this.Gx.Bw=false;this.Gy.Filter=4;this.Gy.Bw=false;this.Jz.Filter=1;this.
J3(this.V,-1);this.J3(this.Dz,-2);this.J(this.AkN,-1);this.J(this.AkO,-1);this.J(
this.Q8,-1);this.J(this.QH,-1);this.J(this.AbB,-1);this.J(this.V6,-1);this.J(this.
PM,-1);this.J(this.PN,0);this.J(this.Sz,0);this.QH.Ax(A.aaL(A.ach.ADH));this.PM.
S(A.aaL(A.fl.Af));this.PN.S(A.aaL(A.fl.Af));this.Sz.S(A.aaL(A.fl.Ak));this.Gx.BM=[
this,this.Al5];this.Gx.D1=[this,this.A0R];this.Gy.BM=[this,this.Al6];this.Gy.D1=[
this,this.A0T];this.Jz.BM=[this,this.Ady];this.FM=A._NewObject(C.Aeu,0);},_Done:
function(){this.__proto__=C.BX;this.AkN._Done();this.AkO._Done();this.Q8._Done();
this.QH._Done();this.AbB._Done();this.V6._Done();this.PM._Done();this.PN._Done();
this.Sz._Done();this.Gx._Done();this.Gy._Done();this.Jz._Done();C.BX._Done.call(
this);},_ReInit:function(){C.BX._ReInit.call(this);this.AkN._ReInit();this.AkO._ReInit(
);this.Q8._ReInit();this.QH._ReInit();this.AbB._ReInit();this.V6._ReInit();this.
PM._ReInit();this.PN._ReInit();this.Sz._ReInit();this.Gx._ReInit();this.Gy._ReInit(
);this.Jz._ReInit();this.T(A.aaR(A.acf.Arr));this.V.R(A.aaR(A.acf.AG8));this.PM.
S(A.aaL(A.fl.Af));this.PN.S(A.aaL(A.fl.Af));this.Sz.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BX._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.J1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.J0)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jz)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FK={XY:null,Acr:
null,Aoa:0,Aob:0,Du:function(){if(!this.XY)return 0;return this.XY.MH;},C7:function(
aIndex){if(!this.XY||(aIndex>=this.XY.MH))return-1;return this.XY.Get(aIndex);},
Gl:function(aIndex){return this.A62().BT(this.C7(aIndex));},DZ:function(A7){if(!
this.XY)return-1;return this.XY.Avw(A7);},H5:function(){if(!this.XY)return-1;return this.
XY.H5();},AnK:function(E){if(this.Aoa===E)return;this.Aoa=E;A.pe([this,this.AVR]
,this);},A0M:function(Aq){this.AnK(Aq);},AnL:function(E){if(this.Aob===E)return;
this.Aob=E;A.pe([this,this.AVS],this);},A0N:function(Aq){this.AnL(Aq);},AVS:function(
G){A.abo([this,this.AS7,this.A0N],0);},AVR:function(G){A.abo([this,this.AS6,this.
A0M],0);},A62:function(){return this.Acr;},AS6:function(){return this.Aoa;},AS7:
function(){return this.Aob;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acr={I:this},0);this.__proto__=C.FK;},_Done:function(
){this.__proto__=C.AC;this.Acr._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acr._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acr)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMK={Init:
function(aArg){A.zV([this,this.BfC],A._GetAutoObject(A.Device.Helper).UK,0);A.zV([
this,this.BfA],A._GetAutoObject(A.Device.Helper).UJ,0);this.BfC(this);this.BfA(this
);},Au:function(E){C.FK.Au.call(this,E);this.AnL(A._GetAutoObject(A.Device.Helper
).UK.Get(this.DZ(E)));this.AnK(A._GetAutoObject(A.Device.Helper).UJ.Get(this.DZ(
E)));},AnK:function(E){if(this.Aoa===E)return;C.FK.AnK.call(this,E);A._GetAutoObject(
A.Device.Helper).UJ.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UJ.
Ci();},AnL:function(E){if(this.Aob===E)return;C.FK.AnL.call(this,E);A._GetAutoObject(
A.Device.Helper).UK.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UK.
Ci();},BfC:function(G){this.Aob=A._GetAutoObject(A.Device.Helper).UK.Get(this.DZ(
this.Q));A.pe([this,this.AVS],this);},BfA:function(G){this.Aoa=A._GetAutoObject(
A.Device.Helper).UJ.Get(this.DZ(this.Q));A.pe([this,this.AVR],this);},_Init:function(
aArg){C.FK._Init.call(this,aArg);this.__proto__=C.AMK;this.XY=A._GetAutoObject(A.
Device.Helper).Ad1;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AML={AgF:null,AB5:0,AB4:0,Init:function(aArg){A.zV([this,this.BfP],A._GetAutoObject(
A.Device.Helper).Afy,0);A.zV([this,this.BfN],A._GetAutoObject(A.Device.Helper).Afx
,0);A.zV([this,this.BfL],A._GetAutoObject(A.Device.Helper).Afw,0);A.zV([this,this.
BfR],A._GetAutoObject(A.Device.Helper).Afz,0);this.BfP(this);this.BfN(this);this.
BfL(this);this.BfR(this);},Au:function(E){C.FK.Au.call(this,E);this.AnL(A._GetAutoObject(
A.Device.Helper).Afy.Get(this.DZ(E)));this.AnK(A._GetAutoObject(A.Device.Helper).
Afx.Get(this.DZ(E)));this.ATa(A._GetAutoObject(A.Device.Helper).Afw.Get(this.DZ(
E)));this.ATc(A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(E)));},AnK:function(
E){if(this.Aoa===E)return;C.FK.AnK.call(this,E);A._GetAutoObject(A.Device.Helper
).Afx.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afx.Ci();},AnL:function(
E){if(this.Aob===E)return;C.FK.AnL.call(this,E);A._GetAutoObject(A.Device.Helper
).Afy.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afy.Ci();},A62:function(
){return this.AgF;},BfP:function(G){this.Aob=A._GetAutoObject(A.Device.Helper).Afy.
Get(this.DZ(this.Q));A.pe([this,this.AVS],this);},BfN:function(G){this.Aoa=A._GetAutoObject(
A.Device.Helper).Afx.Get(this.DZ(this.Q));A.pe([this,this.AVR],this);},ATc:function(
E){if(this.AB5===E)return;this.AB5=E;A._GetAutoObject(A.Device.Helper).Afz.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afz.Ci();A.pe([this,this.Bal],this
);},ATa:function(E){if(this.AB4===E)return;this.AB4=E;A._GetAutoObject(A.Device.
Helper).Afw.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afw.Ci();A.
pe([this,this.Bak],this);},Bak:function(G){A.abo([this,this.A8P,this.ATa],0);},Bal:
function(G){A.abo([this,this.A8R,this.ATc],0);},BfL:function(G){this.AB4=A._GetAutoObject(
A.Device.Helper).Afw.Get(this.DZ(this.Q));A.pe([this,this.Bak],this);},BfR:function(
G){this.AB5=A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(this.Q));A.pe([this
,this.Bal],this);},A8R:function(){return this.AB5;},A8P:function(){return this.AB4;
},_Init:function(aArg){C.FK._Init.call(this,aArg);A.Device.AgF._Init.call(this.AgF={
I:this},0);this.__proto__=C.AML;this.XY=A._GetAutoObject(A.Device.Helper).AgG;this.
Init(aArg);},_Done:function(){this.__proto__=C.FK;this.AgF._Done();C.FK._Done.call(
this);},_ReInit:function(){C.FK._ReInit.call(this);this.AgF._ReInit();},_Mark:function(
D){var B;C.FK._Mark.call(this,D);if((B=this.AgF)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMr={RP:null,Init:function(
aArg){var B;A.zX([this,this.AiP],[B=this.AnimalType,B.B$,B.Cb],0);A.pe([this,this.
AiP],this);this.Bb(this.RP);},Bk:function(E){C.I7.Bk.call(this,E);this.RP.Bx(this.
Ju.AM);},AiP:function(G){A._GetAutoObject(A.Device.Device).AwJ(this.AnimalType.Q
);},_Init:function(aArg){C.I7._Init.call(this,aArg);C.TL._Init.call(this.RP={I:this
},0);this.__proto__=C.AMr;var B;this.Ju.Ar(false);this.Ju.Aj(false);this.Ju.Z(false
);this.RP.H(AIS);this.RP.Aj(true);this.RP.Nj(14);this.RP.Ahx(0);this.RP.OR(0);this.
J(this.RP,-4);this.RP.AR=[this,this.AAA];this.RP.Au([B=this.AnimalType,B.B$,B.Cb
]);this.RP.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I7;this.RP._Done();C.I7._Done.call(this);},_ReInit:function(){C.I7._ReInit.call(
this);this.RP._ReInit();},_Mark:function(D){var B;C.I7._Mark.call(this,D);if((B=
this.RP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TL={Filter:null,Er:0,TableId:0,Operator:1,CQ:function(){var F;this.Tw((F=this.
Filter,F[1].call(F[0])).DL(this.Er,this.Operator));},Bl:function(aSize){var B;C.
BX.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hx.H(AhY
);this.H6.H([aSize[0]-40,40,aSize[0],80]);this.Dz.H([this.Hx.M[2]-5,this.Hx.M[1]
,this.H6.M[0]+5,this.Hx.M[3]]);this.Dz.AFt((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.
Dz.Gt,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mf],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mf
],E,0);A.pe([this,this.Mf],this);},Mf:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tw((F=this.Filter,F[1].call(F[0])).DL(this.Er,this.
Operator));else this.Tw(null);},Ahx:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mf],this);},Nj:function(E){if(this.Er===E)return;this.
Er=E;A.pe([this,this.Mf],this);},Tw:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).AmY(this.TableId,this.Er));this.Am();},OR:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mf],this);},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.TL;this.H(K1);this.V.A6(0x11);this.V.Cr(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BX._ReInit.call(this);this.V.Cr(A.aaL(A.fl.Bh));this.
CQ();},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ASe={Ge:null,MU:null,DY:null,Y:null,Ef:null,Cn:null,CH:null,Db:null,Gn:null,
Ee:null,C$:null,B0:null,Ay:null,Breed:null,Jk:null,AnimalType:null,Gender:null,Pp:
null,K0:null,Ji:null,YK:null,Aml:null,KM:0,M8:0,A4p:false,Init:function(aArg){var
B;A.zX([this,this.BA9],[B=A._GetAutoObject(A.Device.Device),B.AEL,B.AI0],0);A.zV([
this,this.At9],this.MU,0);A.zX([this,this.At9],[B=A._GetAutoObject(A.Device.Device
),B.Awq,B.AyW],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEL
,B.AI0],0);A.zV([this,this.GH],this.MU,0);A.zX([this,this.AiP],this.B0.Q,0);A.pe([
this,this.AiP],this);A.pe([this,this.Bfd],this);A.pe([this,this.At9],this);A.pe([
this,this.GH],this);A.pe([this,this.A3S],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALx],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArN(A.jb.E1);else
this.Ef.ArN(A.jb.Gj);if(A._GetAutoObject(A.Device.Device).AeP){if(!!(F=this.Cn.Dm
,F[1].call(F[0])))this.Cn.ArN(A.jb.E1);else this.Cn.ArN(A.jb.Gj);}else this.Cn.ArN(
A.jb.Ri);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},LQ:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lj())A._GetAutoObject(A.Device.Device
).A3(41,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gr();A._GetAutoObject(A.Device.Helper).Aqk(A._GetAutoObject(A.
Device.Helper).W);this.ApD();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFA(0);},E4:function(G){C.AB.E4.call(this,G);this.Ji.Ar(false);
A._GetAutoObject(A.Device.Device).Uw(false);},Ew:function(G){A._GetAutoObject(A.
Device.Helper).W.E6();A._GetAutoObject(C.A8).FB();},Fk:function(G){var B;this.Ay.
MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.
Y.Br[1]);},At9:function(G){var F,Ct;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALx(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aem(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter
).Rj((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A3H]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A3G],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeP)this.JL(this.Cn);}var Bet=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeP||!!(Ct=this.Cn.Dm,Ct[1].call(Ct[0])));if(this.MU.AOP()>0){if((
this.AV===this.Cn)&&Bet)this.Bb(this.Y.TT(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeP&&(this.AV===this.Cn))&&!!(F=this.Cn.Dm,F[1].call(F[0])))this.
JL(this.Ef);if(Bet)this.Bdf(this);},Adw:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},Ai1:function(){var F;this.Ge.Ci(A._GetAutoObject(A.Device.Device).An);
if(this.MU.NZ(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lj())A._GetAutoObject(
A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),
0,null);else{var L$=A._GetAutoObject(A.Device.Device).An.LV(0,this.Ge.Id);A._GetAutoObject(
A.Device.Device).SR(L$);var B2=A._NewObject(A.Device.Rating,0);B2.Gr();B2.OnSetAnimalId(
this.Ge.Id);B2.OnSetBodyWeight(this.KM);B2.OnSetTimestamp(this.Ge.DateOfBirth);B2.
Ci(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MU.NZ(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var L$=A._GetAutoObject(A.Device.
Device).An.LV(0,this.Ge.Id);A._GetAutoObject(A.Device.Device).SR(L$);var B2=A._NewObject(
A.Device.Rating,0);B2.Gr();B2.OnSetAnimalId(this.Ge.Id);B2.OnSetBodyWeight(this.
M8);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WI(65280);this.Ji.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFA(F.Av1+1));this.A4p=true;A.pe([this,
this.ALx],this);this.ApD();},GH:function(G){this.Cn.ATM(A._GetAutoObject(A.Device.
Device).AeP);A._GetAutoObject(A.Device.Helper).J4(this.B0,this.MU.NZ(14));A._GetAutoObject(
A.Device.Helper).J4(this.C$,this.MU.NZ(23));A._GetAutoObject(A.Device.Helper).J4(
this.CH,this.MU.NZ(32));A._GetAutoObject(A.Device.Helper).J4(this.Ee,this.MU.NZ(
18));A._GetAutoObject(A.Device.Helper).J4(this.Db,this.MU.NZ(7));A._GetAutoObject(
A.Device.Helper).J4(this.Gn,this.MU.NZ(34));this.YK.Z(!this.MU.AOP());var O;var Aa=
null;var Apj=this.AV;for(O=0;O<this.MU.AfQ.Na();O++){Aa=this.Bz0(this.MU.AfQ.OI(
O));if(!!Aa)this.ZG(Aa);}this.JL(Apj);A._GetAutoObject(A.Device.Helper).ANC(this.
Y);A.pe([this,this.A3S],this);this.Am();},AeY:function(E){if(this.KM===E)return;
this.KM=E;A.abo([this,this.Awc,this.AeY],0);},Ahs:function(E){if(this.M8===E)return;
this.M8=E;A.abo([this,this.Ans,this.Ahs],0);},Bdf:function(G){this.Ge.Gr();A._GetAutoObject(
A.Device.Helper).Aqk(this.Ge);this.Ge.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Ge.Nk(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Ge.SK(A._GetAutoObject(
A.Device.Helper).AMs(0,this.Ge));this.Ge.Ae6(true);if(this.MU.NZ(14))this.Ge.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MU.NZ(32))this.Ge.N3(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MU.NZ(7))this.Ge.JY(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MU.NZ(34))this.Ge.Nm(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alu=A._GetAutoObject(A.Device.Helper).A1T(this.Ge,0,A._GetAutoObject(
A.Device.Device).An);if(!Alu)this.Ai1();else A._GetAutoObject(A.Device.Helper).AKs(
this.Ge,Alu,0,0,[this,this.ApJ]);},ApD:function(){A._GetAutoObject(A.Device.Helper
).W.Nk(0);if(A._GetAutoObject(A.Device.Device).AeP)A._GetAutoObject(A.Device.Helper
).W.Q6(0);this.AeY(0);this.Ahs(0);this.JL(this.Ef);this.Am();},ApJ:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.ApD();break;case 43:this.JL(this.Ef);break;case 41:break;
default:A.ab5("%s%e",Atd,As.Id);}},JL:function(Ag){this.Bb(Ag);this.Y.HI(Ag,true
,null,null);this.Y.VA(null,null);},Bfd:function(G){this.Ee.Ahv(A._GetAutoObject(
A.Device.Helper).W.AhW(1));this.At9(this);},AiP:function(G){this.C$.Ahv(A._GetAutoObject(
A.Device.Helper).Abr(this.AnimalType.Q));},A3S:function(G){var B;var BCd=this.Ay.
Background.Fq();var width=(BCd?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xx=this.Y.TT(null,0x401);while(!!Xx&&(((B=Xx)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OZ.isPrototypeOf(Xx)?Xx:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xx=this.Y.TT(Xx,0x1);}},Bz0:function(Aaj){var Aa=null;switch(Aaj){case 14:Aa=
this.B0;break;case 32:Aa=this.CH;break;case 23:Aa=this.C$;break;case 7:Aa=this.Db;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gn;break;default:A.ab5("%s%e",Bt9
,Aaj);}return Aa;},BA9:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeP
)A._GetAutoObject(A.Device.Helper).W.Q6(0);else if(!(F=this.Cn.Dm,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmK(A._GetAutoObject(A.Device.Device).AdT));this.
At9(this);},ALx:function(G){var B;var AKv=A.jV;var Azh=A.jb.CJ;var Bdw=A.jb.AV;this.
Aml.AxM(this);if(this.A4p){this.A4p=false;AKv=A._GetAutoObject(A.Device.Helper).
MI(A.aaR(A.acf.Bp1),O9,A._GetAutoObject(A.Device.Converter).Rj(this.Ge.NaisId));
A.pe([B=this.Aml,B.StartTimer],this);Azh=A.jb.E1;Bdw=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKv=A.aaR(A.acf.Bpe);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKv=A.aaR(A.
acf.Bpd);this.YK.T(AKv);this.YK.Bmt(Azh);this.YK.Bmu(Bdw);},A3H:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).AjC();else if(As.Id===105){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).AjC();else if(As.PopupState===7){A._GetAutoObject(C.A8).Cd(76);
A._GetAutoObject(A.Device.Device).AjC();}}}else A._GetAutoObject(A.Device.Device
).AjC();},A3G:function(G){A._GetAutoObject(A.Device.Device).AuX();},DJ:function(
G){var B;if(!this.MU.AOP()){this.N.Lg.C4(255);if(this.AV===this.Ef){this.N.C3(A.
aaL(A.ach.Edit));this.N.Ca=[B=this.Ef,B.FV];}else if(this.AV===this.Cn){this.N.C3(
A.aaL(A.ach.Edit));this.N.Ca=[B=this.Cn,B.FV];}else{this.N.C3(null);this.N.Ca=null;
}}else{this.N.C3(A.aaL(A.ach.Am4));if((this.Ef.Aqx===A.jb.Gj)||(this.Cn.Aqx===A.
jb.Gj)){this.N.Lg.C4(100);this.N.Ca=null;}else{this.N.Lg.C4(255);this.N.Ca=[this
,this.Bdf];}}},Awc:function(){return this.KM;},Ans:function(){return this.M8;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUW._Init.call(this.Ef={I:this},0);C.
AUS._Init.call(this.Cn={I:this},0);C.AxB._Init.call(this.CH={I:this},0);C.BX._Init.
call(this.Db={I:this},0);C.AsC._Init.call(this.Gn={I:this},0);C.AkV._Init.call(this.
Ee={I:this},0);C.AkV._Init.call(this.C$={I:this},0);C.BX._Init.call(this.B0={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UU._Init.call(this.Jk={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M6._Init.call(this.
Pp={I:this},0);A.Device.K0._Init.call(this.K0={I:this},0);A.Device.TM._Init.call(
this.Ji={I:this},0);C.AVr._Init.call(this.YK={I:this},0);A.Core.Timer._Init.call(
this.Aml={I:this},0);this.__proto__=C.ASe;var B;this.Background.L(A.jb.CU);this.
N.Z(true);this.Ek.Ar(false);this.Dr(C.APv);this.DY.A0(0x3F);this.DY.H(Ff);this.DY.
L(A.jb.CJ);this.Y.H(Ff);this.Y.JX(9);this.Ef.H(AIS);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACM));this.Ef.ATM(true);this.Ef.AFT(false);this.Cn.H(Ba1);this.Cn.Aj(true
);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.ATM(true);this.Cn.AFO(true);this.CH.H(Atb);
this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Db.H(Atb);this.Db.Aj(true);this.
Db.T(A.aaR(A.acf.Afo));this.Gn.H(Ba2);this.Gn.Aj(true);this.Gn.T(A.aaR(A.acf.Jk)
);this.Ee.H(Bt_);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M8));this.Ee.Ga(1000);this.
Ee.EV(999000);this.Ee.Ahv(A._GetAutoObject(A.Device.Helper).Abr(this.AnimalType.
Q));this.C$.H(Ba2);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.KM));this.C$.Ga(1000);
this.C$.EV(99000);this.C$.Ahv(A._GetAutoObject(A.Device.Helper).Abr(this.AnimalType.
Q));this.B0.H(Ata);this.B0.Aj(true);this.B0.T(A.aaR(A.acf.Aft));this.Ay.H(Iu);this.
Ji.B3=false;this.Ji.Cx=true;this.Ji.HO(1);this.Ji.Fr(1000);this.Ji.Ut(0);this.YK.
H(Aah);this.YK.Aj(true);this.YK.ArN(A.jb.Text);this.Aml.PV(3000);this.J(this.DY,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CH,0);this.J(
this.Db,0);this.J(this.Gn,0);this.J(this.Ee,0);this.J(this.C$,0);this.J(this.B0,
0);this.J(this.Ay,0);this.J(this.YK,0);this.N.CE=[this,this.Ew];this.N.Cf=[this,
this.Adw];this.N.C2(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.Y.Em=[this
,this.Fk];this.Ef.Gs([this,this.D_,this.GS]);this.Ef.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.Anv,B.Nk]);this.Ef.AFo([this,this.At9]);this.Ef.ATz([this,this.A3G]);
this.Ef.ATA([this,this.A3H]);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.Ab7([B=A.
_GetAutoObject(A.Device.Helper).W,B.Awf,B.Q6]);this.Cn.OK=[this,this.Bfd];this.Cn.
ATz([this,this.A3G]);this.Cn.ATA([this,this.A3H]);this.CH.Gs([this,this.D_,this.
GS]);this.CH.L1([B=this.CH,B.FV]);this.CH.L4(A.aaL(A.ach.Edit));this.CH.Au([B=this.
Breed,B.B$,B.Cb]);this.CH.CK(this.Breed);this.CH.Anz(this.Pp);this.Db.Au([B=this.
Gender,B.B$,B.Cb]);this.Db.CK(this.Gender);this.Gn.Gs([this,this.D_,this.GS]);this.
Gn.L1([B=this.Gn,B.FV]);this.Gn.L4(A.aaL(A.ach.Edit));this.Gn.Au([B=this.Jk,B.B$
,B.Cb]);this.Gn.CK(this.Jk);this.Gn.Anz(this.K0);this.Ee.Au([this,this.Ans,this.
Ahs]);this.C$.Au([this,this.Awc,this.AeY]);this.B0.Au([B=this.AnimalType,B.B$,B.
Cb]);this.B0.CK(this.AnimalType);this.Ay.BnP([this,this.A3S]);this.Breed.L2(A._GetAutoObject(
A.Device.Helper).W);this.Jk.L2(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
L2(A._GetAutoObject(A.Device.Helper).W);this.Gender.L2(A._GetAutoObject(A.Device.
Helper).W);this.Ge=A._NewObject(A.Device.Animal,0);this.MU=A._GetAutoObject(C.Amt
);this.Ji.Q=[B=A._GetAutoObject(A.Device.Device),B.AS2,B.A0I];this.Aml.ME=[this,
this.ALx];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();
this.Y._Done();this.Ef._Done();this.Cn._Done();this.CH._Done();this.Db._Done();this.
Gn._Done();this.Ee._Done();this.C$._Done();this.B0._Done();this.Ay._Done();this.
Breed._Done();this.Jk._Done();this.AnimalType._Done();this.Gender._Done();this.Pp.
_Done();this.K0._Done();this.Ji._Done();this.YK._Done();this.Aml._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cn._ReInit();this.CH._ReInit();this.Db._ReInit(
);this.Gn._ReInit();this.Ee._ReInit();this.C$._ReInit();this.B0._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jk._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pp._ReInit();this.K0._ReInit();this.Ji._ReInit();this.YK._ReInit(
);this.Aml._ReInit();this.Ef.T(A.aaR(A.acf.ACM));this.Cn.T(A.aaR(A.acf.Aeg));this.
CH.T(A.aaR(A.acf.Breed));this.Db.T(A.aaR(A.acf.Afo));this.Gn.T(A.aaR(A.acf.Jk));
this.Ee.T(A.aaR(A.acf.M8));this.C$.T(A.aaR(A.acf.KM));this.B0.T(A.aaR(A.acf.Aft)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ge)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
K0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ji)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aml)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.AsB={Zl:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zl={
I:this},0);this.__proto__=C.AsB;this.N.CS(A.aaR(A.acf.A6A));this.Number.H(Bt$);this.
Jj.H(Bua);this.IV.H(Bub);this.AkG(2);this.Bdc=false;this.Bei=true;this.Bej=false;
this.Zl.H(Buc);this.Zl.KU(true);this.Zl.R(A.aaR(A.acf.A$T));this.Zl.L(A.jb.Text);
this.J(this.Zl,0);this.N.CE=null;this.N.Ca=[this,this.AI6];this.N.C2(null);this.
Zl.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.
Zl._Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zl._ReInit();this.N.CS(A.aaR(A.acf.A6A));this.Zl.R(A.aaR(
A.acf.A$T));this.Zl.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen.
_Mark.call(this,D);if((B=this.Zl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADZ={Cu:null,FO:function(E){if(this.M_===E)return;C.HL.FO.call(this,E);this.
Cu.CV(E);},Yt:function(HA){var B6=null;switch(HA){case-1:case 0:B6=this.F0;break;
case 1:B6=this.Cu;break;case 2:B6=this.G2;break;default:A.ab5("%s",Ah4);}return B6;
},_Init:function(aArg){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ADZ;this.H(Bud);this.Cu.H(BaE);this.F0.H(Bue);this.J(this.
Cu,-2);this.Cu.Dk=[this,this.GX];},_Done:function(){this.__proto__=C.HL;this.Cu.
_Done();C.HL._Done.call(this);},_ReInit:function(){C.HL._ReInit.call(this);this.
Cu._ReInit();},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.Cu)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsC={G5:null
,Bl:function(aSize){C.OW.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G5.M[0
]));},Ai:function(Ae){C.OW.Ai.call(this,Ae);if(this.Hl)this.G5.FO(A.jb.CJ);else this.
G5.FO(A.jb.CU);},A2s:function(){this.Bb(this.G5);},_Init:function(aArg){C.OW._Init.
call(this,aArg);C.HL._Init.call(this.G5={I:this},0);this.__proto__=C.AsC;this.G5.
H(Buf);this.J(this.G5,0);this.G5.Au([this,this.ASS,this.AFH]);},_Done:function(){
this.__proto__=C.OW;this.G5._Done();C.OW._Done.call(this);},_ReInit:function(){C.
OW._ReInit.call(this);this.G5._ReInit();},_Mark:function(D){var B;C.OW._Mark.call(
this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AxB={G5:null,Bl:function(aSize){C.OW.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G5.M[0]));},Ai:function(Ae){C.OW.Ai.call(this,Ae);if(this.Hl)this.G5.FO(
A.jb.CJ);else this.G5.FO(A.jb.CU);},A2s:function(){this.Bb(this.G5);},_Init:function(
aArg){C.OW._Init.call(this,aArg);C.ADZ._Init.call(this.G5={I:this},0);this.__proto__=
C.AxB;this.G5.A0(0x18);this.G5.H(Bug);this.J(this.G5,0);this.G5.Au([this,this.ASS
,this.AFH]);},_Done:function(){this.__proto__=C.OW;this.G5._Done();C.OW._Done.call(
this);},_ReInit:function(){C.OW._ReInit.call(this);this.G5._ReInit();},_Mark:function(
D){var B;C.OW._Mark.call(this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acs={ScreenTypeToString:
null,Du:function(){return 4;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BT(this.C7(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acs;this.BG.Set(0,3);this.BG.Set(1,35);this.BG.Set(2
,34);this.BG.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AWb={ALo:false,A2L:false,WF:function(G){this.Agx();A._GetAutoObject(C.BS).TC(
A.aaR(A.acf.Settings),[this,this.A3X]);A._GetAutoObject(C.BS).Fz();this.AMf();A.
_GetAutoObject(C.BS).Ml(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BS).Fz(
);A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.ARH)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},CC:function(G){C.QD.CC.call(this,G);if(
this.A2L){this.A2L=false;A.pe([this,this.A0O],this);}},Agg:function(G){C.QD.Agg.
call(this,G);this.A$b(true);},Abt:function(){return C.ACe;},Abu:function(){return C.
ADy;},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.
Device.Helper).A7f(Math.max(A._GetAutoObject(A.Device.Device).Av3,A._GetAutoObject(
A.Device.Helper).A69(A._GetAutoObject(A.Device.Device).An))+1));},HQ:function(G){
C.QD.HQ.call(this,G);if((((A._GetAutoObject(A.Device.Converter).S3(A._GetAutoObject(
A.Device.Device).PY)===10)&&this.ALo)&&!!this.Bg.AX)&&!this.Bg.AX.B_()){this.N.Cw(
null);this.N.Fc(A.aaR(A.acf.No));this.N.Cf=[this,this.BBl];this.N.C3(null);this.
N.CS(A.aaR(A.acf.Yes));this.N.Ca=[this,this.BBm];}else if(this.Aki()===false){this.
N.Cw(A._GetAutoObject(A.Device.Converter).Ajr(A._GetAutoObject(A.Device.Converter
).AMa(this.LZ.AC$())));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OS(false
);this.N.OT(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(86);},AA9:function(
G){var aFilter=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Ay7=aFilter.
DL(26,4);if(!!Ay7){aFilter.Nq(Ay7);A._GetAutoObject(A.Device.Device).An.Bk(aFilter
);if(!!this.Bg)this.Bg.GT(0);}},A67:function(){return C.APC;},Bgn:function(){var
B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.Filter
){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion
)Filter.Nq(FilterCriterion);A._GetAutoObject(A.Device.Device).An.Bk(Filter);}},A3X:
function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A2L=true;A._GetAutoObject(
C.A8).Cd(89);},ALv:function(G){if(A._GetAutoObject(A.Device.Converter).S3(A._GetAutoObject(
A.Device.Device).PY)===10){if(this.ALo){this.Dl(A.aaR(A.acf.BoT));this.Bg.NQ.S(A.
aaL(A.fl.Bh));}else{this.Dl(A.aaR(A.acf.AEw));this.Bg.NQ.S(A.aaL(A.fl.Af));}}else
this.Dl(A.aaR(A.acf.AEw));},A$b:function(E){if(this.ALo===E)return;this.ALo=E;A.
pe([this,this.AoC],this);A.pe([this,this.ALv],this);},BBm:function(G){A._GetAutoObject(
C.A8).Ab_(90);},BBl:function(G){this.A$b(false);},_Init:function(aArg){C.QD._Init.
call(this,aArg);this.__proto__=C.AWb;this.Dr(C.ADp);this.Dl(A.aaR(A.acf.AEw));this.
ATv(A._GetAutoObject(C.Ax7));},_ReInit:function(){C.QD._ReInit.call(this);this.Dl(
A.aaR(A.acf.AEw));},_className:"Application::YoungNoTransponderListScreen"};C.AWa={
_Init:function(aArg){C.I7._Init.call(this,aArg);this.__proto__=C.AWa;this.KY.Ar(
false);this.KY.Aj(false);this.KY.Z(false);this.Bnp(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ARl={St:null,Q:null,A8p:0,M_:0,Init:function(aArg){this.ATy(6);},Au:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.St)this.St.Au(E);},ATy:function(
E){if(this.A8p===E)return;this.A8p=E;var X;switch(E){case 2:X=A._NewObject(C.HL,
0);break;case 3:X=A._NewObject(C.ADZ,0);break;case 4:X=A._NewObject(C.ARi,0);break;
case 5:X=A._NewObject(C.ARj,0);break;case 6:X=A._NewObject(C.AvU,0);break;default:{
X=null;A.ab5("%s%i",Buh,E);}}this.Bno(X);},Bno:function(E){if(this.St===E)return;
if(!!this.St){this.St.Au(null);this.HP(this.St);}this.St=E;if(!!this.St){this.St.
Au(this.Q);this.J(this.St,0);}},FO:function(E){if(this.M_===E)return;this.M_=E;if(
!!this.St)this.St.FO(E);},SQ:function(GA){if(!!this.St)this.St.SQ(GA);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.ARl;this.H(Ayq);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.St)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.ARi={CW:null,Cu:null,FO:function(
E){if(this.M_===E)return;C.HL.FO.call(this,E);this.Cu.CV(E);this.CW.CV(E);},Yt:function(
HA){var B6=null;switch(HA){case-1:case 0:B6=this.F0;break;case 1:B6=this.Cu;break;
case 2:B6=this.CW;break;case 3:B6=this.G2;break;default:A.ab5("%s",Ah4);}return B6;
},_Init:function(aArg){C.HL._Init.call(this,aArg);C.DF._Init.call(this.CW={I:this
},0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.ARi;this.H(Bui);this.G2.
H(All);this.CW.H(BaF);this.Cu.H(BaG);this.F0.H(BaH);this.J(this.CW,-2);this.J(this.
Cu,-2);this.CW.Dk=[this,this.GX];this.Cu.Dk=[this,this.GX];},_Done:function(){this.
__proto__=C.HL;this.CW._Done();this.Cu._Done();C.HL._Done.call(this);},_ReInit:function(
){C.HL._ReInit.call(this);this.CW._ReInit();this.Cu._ReInit();},_Mark:function(D
){var B;C.HL._Mark.call(this,D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACV={S4:null,Ai:function(Ae){C.Abq.Ai.call(this,Ae);this.S4.L(this.V.AQ);},_Init:
function(aArg){C.Abq._Init.call(this,aArg);C.CG._Init.call(this.S4={I:this},0);this.
__proto__=C.ACV;this.V.Z(false);this.AW.H(Buj);this.AW.ATy(4);this.S4.H(Buk);this.
S4.R(A.aaR(A.acf.Ko));this.S4.L(A.jb.Bm);this.J(this.S4,0);this.S4.S(A.aaL(A.fl.
Af));this.S4.AZ(A.aaL(A.fl.Ak));this.S4.Cr(null);},_Done:function(){this.__proto__=
C.Abq;this.S4._Done();C.Abq._Done.call(this);},_ReInit:function(){C.Abq._ReInit.
call(this);this.S4._ReInit();this.S4.R(A.aaR(A.acf.Ko));this.S4.S(A.aaL(A.fl.Af)
);this.S4.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abq._Mark.call(this,D);
if((B=this.S4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.L0={Y2:null,Ua:null,AQ:0,A7G:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y2.L(this.AQ);this.Ua.L(this.AQ);},A_s:function(E){var B;if(this.A7G===
E)return;this.A7G=E;if(E){this.Y2.Z(true);this.Ua.DC([this.Ua.ED[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y2.Z(false);this.Ua.DC([this.Ua.ED[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C8._Init.call(
this.Y2={I:this},0);A.acg.C8._Init.call(this.Ua={I:this},0);this.__proto__=C.L0;
this.H(A0o);this.Y2.A0(0x2D);this.Y2.DC(Ah0);this.Y2.DM(Ba3);this.Y2.L(A.jb.Text
);this.Ua.A0(0x36);this.Ua.DC(Ba3);this.Ua.DM(Bul);this.Ua.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y2,0);this.J(this.Ua,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y2._Done();this.Ua._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y2._ReInit();this.Ua._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUA={Sy:null,PE:null,Db:null,B0:null,CH:null,GQ:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pp:null,UU:null,K0:null,Init:function(aArg){A.zX([this
,this.AuR],this.B0.Q,0);A.zX([this,this.AM_],this.CH.Q,0);A.zX([this,this.Bri],this.
Sy.Q,0);A.zX([this,this.Avu],this.Db.Q,0);A.zX([this,this.AV9],this.GQ.Q,0);},AuR:
function(G){var F;A._GetAutoObject(A.Device.Device).EC((F=this.B0.Q,F[1].call(F[
0])));},Bri:function(G){var F;A._GetAutoObject(A.Device.Device).Axi((F=this.Sy.Q
,F[1].call(F[0])));},Avu:function(G){var F;A._GetAutoObject(A.Device.Device).JY((
F=this.Db.Q,F[1].call(F[0])));},AV9:function(G){var F;A._GetAutoObject(A.Device.
Device).Nm((F=this.GQ.Q,F[1].call(F[0])));},AM_:function(G){var F;A._GetAutoObject(
A.Device.Device).N3((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.
call(this,aArg);C.BX._Init.call(this.Sy={I:this},0);C.Is._Init.call(this.PE={I:this
},0);C.BX._Init.call(this.Db={I:this},0);C.BX._Init.call(this.B0={I:this},0);C.AxB.
_Init.call(this.CH={I:this},0);C.AsC._Init.call(this.GQ={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M6._Init.call(this.Pp={I:this},0);C.UU._Init.call(this.UU={I:
this},0);A.Device.K0._Init.call(this.K0={I:this},0);this.__proto__=C.AUA;var B;this.
Jd((A.aaR(A.acf.Asp)+AyA)+A.aaR(A.acf.AjH));this.Sy.H(Ah3);this.Sy.Aj(true);this.
Sy.T(A.aaR(A.acf.Bav));this.Sy.Bi(true);this.Sy.Bx(0);this.PE.H(Ayo);this.PE.Aj(
true);this.PE.Z(true);this.PE.T(A.aaR(A.acf.AdT));this.PE.Ga(0);this.PE.EV(99);this.
PE.IS(A.aaR(A.acf.Ko));this.PE.Je(A.aaR(A.acf.GL));this.Db.H(Aah);this.Db.Aj(true
);this.Db.T(A.aaR(A.acf.Afo));this.Db.Bi(true);this.Db.Bx(0);this.B0.H(Ali);this.
B0.Aj(true);this.B0.T(A.aaR(A.acf.Aft));this.B0.Bi(true);this.B0.Bx(0);this.CH.H(
AcQ);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.CH.Bi(false);this.GQ.H(
AcQ);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jk));this.GQ.Bi(true);this.AnimalType.
Au(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);
this.UU.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sy,0);this.
J(this.PE,0);this.J(this.Db,0);this.J(this.B0,0);this.J(this.CH,0);this.J(this.GQ
,0);this.Sy.Au([B=this.WeightRecordingScope,B.B$,B.Cb]);this.Sy.CK(this.WeightRecordingScope
);this.PE.Au([B=A._GetAutoObject(A.Device.Device),B.A8I,B.Bbo]);this.Db.Au([B=this.
Gender,B.B$,B.Cb]);this.Db.CK(this.Gender);this.B0.Au([B=this.AnimalType,B.B$,B.
Cb]);this.B0.CK(this.AnimalType);this.CH.Gs([this,this.D_,this.GS]);this.CH.L1([
B=this.CH,B.FV]);this.CH.L4(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cb
]);this.CH.CK(this.Breed);this.CH.Anz(this.Pp);this.GQ.Gs([this,this.D_,this.GS]
);this.GQ.L1([B=this.GQ,B.FV]);this.GQ.L4(A.aaL(A.ach.Edit));this.GQ.Au([B=this.
UU,B.B$,B.Cb]);this.GQ.CK(this.UU);this.GQ.Anz(this.K0);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cg;this.Sy._Done();this.PE._Done();this.Db._Done();this.
B0._Done();this.CH._Done();this.GQ._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pp._Done();this.UU._Done();this.
K0._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
Sy._ReInit();this.PE._ReInit();this.Db._ReInit();this.B0._ReInit();this.CH._ReInit(
);this.GQ._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pp._ReInit();this.UU._ReInit();
this.K0._ReInit();this.Jd((A.aaR(A.acf.Asp)+AyA)+A.aaR(A.acf.AjH));this.Sy.T(A.aaR(
A.acf.Bav));this.PE.T(A.aaR(A.acf.AdT));this.PE.IS(A.aaR(A.acf.Ko));this.PE.Je(A.
aaR(A.acf.GL));this.Db.T(A.aaR(A.acf.Afo));this.B0.T(A.aaR(A.acf.Aft));this.CH.T(
A.aaR(A.acf.Breed));this.GQ.T(A.aaR(A.acf.Jk));},_Mark:function(D){var B;C.Cg._Mark.
call(this,D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UU)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.K0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUz={QQ:null,FD:null,Io:null,Da:null,Dn:null,EL:null,AutoRegistrationMode:null
,AdW:null,Init:function(aArg){var B;A.zX([this,this.BhL],this.QQ.Q,0);A.zX([this
,this.Be0],[B=A._GetAutoObject(A.Device.Device),B.ASC,B.A0u],0);A.zX([this,this.
Adx],[B=A._GetAutoObject(A.Device.Device),B.Un,B.U5],0);A.zX([this,this.Adx],[B=
A._GetAutoObject(A.Device.Device),B.Uo,B.U6],0);A.pe([this,this.Be0],this);A.pe([
this,this.Adx],this);},BhL:function(G){var F;A._GetAutoObject(A.Device.Device).Awx((
F=this.QQ.Q,F[1].call(F[0])));},Be0:function(G){switch(A._GetAutoObject(A.Device.
Device).AgA){case 0:A._GetAutoObject(A.Device.Helper).J4(this.Io,true);break;case
1:A._GetAutoObject(A.Device.Helper).J4(this.Io,false);break;default:throw new Error(
Bum+A._GetAutoObject(A.Device.Device).AgA.toFixed());}},Adx:function(G){var F,Ct;
if(((F=this.Da.Q,F[1].call(F[0]))+(Ct=this.Dn.Q,Ct[1].call(Ct[0])))>12)(Ct=this.
Dn.Q,Ct[2].call(Ct[0],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.BX._Init.call(this.QQ={I:this},0);C.BX._Init.call(this.
FD={I:this},0);C.AGO._Init.call(this.Io={I:this},0);C.Is._Init.call(this.Da={I:this
},0);C.Is._Init.call(this.Dn={I:this},0);C.Av4._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdW._Init.
call(this.AdW={I:this},0);this.__proto__=C.AUz;var B;this.Jd(A.aaR(A.acf.Aqo));this.
QQ.H(AIS);this.QQ.Aj(true);this.QQ.T(A.aaR(A.acf.Aqo));this.QQ.Bi(false);this.QQ.
Ga(-1);this.QQ.EV(1);this.FD.H(U2);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.
aaR(A.acf.Aql));this.FD.Bi(true);this.Io.H(Aah);this.Io.Aj(true);this.Io.Z(true);
this.Io.T(A.aaR(A.acf.AEu));this.Io.Bi(true);this.Da.H(Ali);this.Da.Aj(true);this.
Da.Z(true);this.Da.T(A.aaR(A.acf.AqG));this.Da.Bi(false);this.Da.Ga(2);this.Da.EV(
6);this.Da.IS(A.aaR(A.acf.OG));this.Da.Je(A.aaR(A.acf.Ez));this.Dn.H(AcQ);this.Dn.
Aj(true);this.Dn.T(A.aaR(A.acf.Zn));this.Dn.Bi(true);this.Dn.Ga(0);this.Dn.EV(12
);this.Dn.IS(A.aaR(A.acf.OG));this.Dn.Je(A.aaR(A.acf.Ez));this.EL.H(Bun);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bi(false);this.EL.Ar3(A.aaR(A.acf.Aqn));this.AutoRegistrationMode.
Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QQ,0);this.
J(this.FD,0);this.J(this.Io,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL
,0);this.QQ.Au([B=this.AutoRegistrationMode,B.B$,B.Cb]);this.QQ.CK(this.AutoRegistrationMode
);this.FD.Au([B=this.AdW,B.B$,B.Cb]);this.FD.CK(this.AdW);this.Io.Us([B=A._GetAutoObject(
A.Device.Device),B.WD,B.A0x]);this.Io.Akx([B=A._GetAutoObject(A.Device.Device),B.
Awh,B.AyQ]);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Un,B.U5]);this.Dn.
Au([B=A._GetAutoObject(A.Device.Device),B.Uo,B.U6]);this.EL.DB(A.aaL(A.ach.AjY));
this.EL.OQ([B=A._GetAutoObject(A.Device.Device),B.Un,B.U5]);this.EL.PU([B=A._GetAutoObject(
A.Device.Device),B.Uo,B.U6]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.QQ._Done();this.FD._Done();this.Io._Done();this.Da._Done();this.Dn._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdW._Done();C.Cg._Done.
call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.QQ._ReInit();this.FD.
_ReInit();this.Io._ReInit();this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdW._ReInit();this.Jd(A.aaR(A.acf.Aqo
));this.QQ.T(A.aaR(A.acf.Aqo));this.FD.T(A.aaR(A.acf.Aql));this.Io.T(A.aaR(A.acf.
AEu));this.Da.T(A.aaR(A.acf.AqG));this.Da.IS(A.aaR(A.acf.OG));this.Da.Je(A.aaR(A.
acf.Ez));this.Dn.T(A.aaR(A.acf.Zn));this.Dn.IS(A.aaR(A.acf.OG));this.Dn.Je(A.aaR(
A.acf.Ez));this.EL.Ar3(A.aaR(A.acf.Aqn));},_Mark:function(D){var B;C.Cg._Mark.call(
this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVE={OL:null,FD:null,Io:null,Da:null,Dn:null,EL:null,Afs:null,Init:function(
aArg){var B;A.zX([this,this.BfE],[B=A._GetAutoObject(A.Device.Device),B.AS4,B.A0K
],0);A.zX([this,this.Adx],[B=A._GetAutoObject(A.Device.Device),B.Un,B.U5],0);A.zX([
this,this.Adx],[B=A._GetAutoObject(A.Device.Device),B.Uo,B.U6],0);A.pe([this,this.
BfE],this);A.pe([this,this.Adx],this);},BfE:function(G){var ALa=false;var AaO=false;
switch(A._GetAutoObject(A.Device.Device).Ak5){case 0:{ALa=false;AaO=false;}break;
case 1:{ALa=true;AaO=false;}break;case 2:{ALa=false;AaO=true;}break;default:throw new
Error(Buo+A._GetAutoObject(A.Device.Device).Ak5.toFixed());}A._GetAutoObject(A.Device.
Helper).J4(this.Io,ALa);A._GetAutoObject(A.Device.Helper).J4(this.Da,AaO);A._GetAutoObject(
A.Device.Helper).J4(this.Dn,AaO);A._GetAutoObject(A.Device.Helper).J4(this.EL,AaO
);},Adx:function(G){var F,Ct;if(((F=this.Da.Q,F[1].call(F[0]))+(Ct=this.Dn.Q,Ct[
1].call(Ct[0])))>12)(Ct=this.Dn.Q,Ct[2].call(Ct[0],12-(F=this.Da.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Is._Init.call(this.OL={
I:this},0);C.BX._Init.call(this.FD={I:this},0);C.AGO._Init.call(this.Io={I:this}
,0);C.Is._Init.call(this.Da={I:this},0);C.Is._Init.call(this.Dn={I:this},0);C.Av4.
_Init.call(this.EL={I:this},0);C.Afs._Init.call(this.Afs={I:this},0);this.__proto__=
C.AVE;var B;this.Jd(A.aaR(A.acf.LinkTransponder));this.OL.H(AIS);this.OL.Aj(true
);this.OL.Z(true);this.OL.T(A.aaR(A.acf.A70));this.OL.Bi(false);this.OL.Ga(1);this.
OL.EV(365);this.OL.IS(A.aaR(A.acf.Ko));this.OL.Je(A.aaR(A.acf.GL));this.FD.H(U2);
this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aql));this.FD.Bi(true);this.
Io.H(Aah);this.Io.Aj(true);this.Io.Z(true);this.Io.T(A.aaR(A.acf.AEu));this.Io.Bi(
false);this.Da.H(Ali);this.Da.Aj(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.AqG
));this.Da.Bi(false);this.Da.Ga(2);this.Da.EV(6);this.Da.IS(A.aaR(A.acf.OG));this.
Da.Je(A.aaR(A.acf.Ez));this.Dn.H(AcQ);this.Dn.Aj(true);this.Dn.T(A.aaR(A.acf.Zn)
);this.Dn.Bi(true);this.Dn.Ga(0);this.Dn.EV(12);this.Dn.IS(A.aaR(A.acf.OG));this.
Dn.Je(A.aaR(A.acf.Ez));this.EL.H(Aor);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar3(A.aaR(A.acf.Aqn));this.J(this.OL,0);this.J(this.FD,0);this.
J(this.Io,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL,0);this.OL.Au([B=
A._GetAutoObject(A.Device.Device),B.A9c,B.BbF]);this.FD.Au([B=this.Afs,B.B$,B.Cb
]);this.FD.CK(this.Afs);this.Io.Us([B=A._GetAutoObject(A.Device.Device),B.WD,B.A0x
]);this.Io.Akx([B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyQ]);this.Da.Au([B=
A._GetAutoObject(A.Device.Device),B.Un,B.U5]);this.Dn.Au([B=A._GetAutoObject(A.Device.
Device),B.Uo,B.U6]);this.EL.DB(A.aaL(A.ach.AjY));this.EL.OQ([B=A._GetAutoObject(
A.Device.Device),B.Un,B.U5]);this.EL.PU([B=A._GetAutoObject(A.Device.Device),B.Uo
,B.U6]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.OL._Done();this.
FD._Done();this.Io._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.
Afs._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
OL._ReInit();this.FD._ReInit();this.Io._ReInit();this.Da._ReInit();this.Dn._ReInit(
);this.EL._ReInit();this.Afs._ReInit();this.Jd(A.aaR(A.acf.LinkTransponder));this.
OL.T(A.aaR(A.acf.A70));this.OL.IS(A.aaR(A.acf.Ko));this.OL.Je(A.aaR(A.acf.GL));this.
FD.T(A.aaR(A.acf.Aql));this.Io.T(A.aaR(A.acf.AEu));this.Da.T(A.aaR(A.acf.AqG));this.
Da.IS(A.aaR(A.acf.OG));this.Da.Je(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(A.acf.Zn));this.
Dn.IS(A.aaR(A.acf.OG));this.Dn.Je(A.aaR(A.acf.Ez));this.EL.Ar3(A.aaR(A.acf.Aqn));
},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afs={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bg3],[B=A._GetAutoObject(A.Device.Device),B.AS4,B.A0K],0);A.pe([
this,this.Bg3],this);},Du:function(){return 3;},Gl:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axe(E);},Bg3:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak5;A.
abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afs;this.BG.Set(0,0);this.BG.Set(1,1);this.BG.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Jg={B7:null,IY:null,Cq:null,AmB:null,Sh:null,Anm:null,AjE:null,Text:null,CY:
null,D6:0,LC:false,Ai:function(Ae){var B;A.acn.Jg.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IY.Ar(true);else{this.IY.Ar(false);this.CY.Z(false);}},A4V:function(G
){var B;var Bd=this.Text.M;var NA=0;var NB=0;if(this.CY.Et[0]<Bd[0])NA=Bd[0]-this.
CY.Et[0];if(this.CY.Et[0]>Bd[2])NA=Bd[2]-this.CY.Et[0];if(this.CY.Et[1]<Bd[1])NB=
Bd[1]-this.CY.Et[1];if(this.CY.ED[1]>Bd[3])NB=Bd[3]-this.CY.ED[1];if(!!NA||!!NB)
this.Text.Gb(A.abf(this.Text.Br,[NA,NB]));NA=this.Text.Br[0];NB=this.Text.Br[1];
var C6=[(B=this.Text.Dd())[2]-B[0],B[3]-B[1]];if(C6[0]<=((B=this.Text.M)[2]-B[0]
))NA=0;if(C6[1]<=((B=this.Text.M)[3]-B[1]))NB=0;this.Text.Gb([NA,NB]);},Amo:function(
G){if(!this.B7)return;var A4l=this.Text.AG1(this.D6);var pos=this.Text.Afh(A4l);
this.CY.DM(A.abe(pos,[0,this.B7.Ascent]));this.CY.DC(A.abf(pos,[0,this.B7.Descent
]));if(this.IY.Bw){this.IY.Ar(false);this.IY.Ar(true);}if(this.LC){A.pe([this,this.
A4V],this);this.LC=false;}},AAE:function(G){if(!this.B7)return;var EH=this.Text.
AG1(this.D6);if(this.Cq.CP===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnT(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ADb(EH[1]).length,EH[1]];}}if(this.Cq.CP===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnT(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CP===4){var pos=this.Text.Afh(EH);var AaN=(this.B7.Ascent+this.B7.
Descent)+this.B7.Leading;EH=this.Text.AUb(A.abe(pos,[0,AaN]));}if(this.Cq.CP===5
){var pos=this.Text.Afh(EH);var AaN=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;
EH=this.Text.AUb(A.abf(pos,[0,AaN]));}var Vj=this.Text.AnT(EH);var Iz=this.Text.
String.charCodeAt(Vj)||0;if(((Iz===0x5E)||(Iz===0x7E))||(Iz===0x25))Vj=Vj-1;if(Vj
!==this.D6){this.D6=Vj;A.pe([this,this.Amo],this);this.LC=true;}},Be9:function(G
){if(!this.D6)return;var Iz=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
Iz===0x5E)||(Iz===0x7E))||(Iz===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.LC=true;},AAF:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Iz=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(Iz===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.LC=true;}
,Bfl:function(G){this.Text.R(A.abU(this.Text.String,Bup,this.D6));this.D6=this.D6+
1;this.LC=true;},Be$:function(G){var Iz=this.AjE.DQ;var Aus=String.fromCharCode(
Iz);A.ab5("%c",Iz);if((((Iz===0x5E)||(Iz===0x7E))||(Iz===0xAD))||(Iz===0x25))Aus=
Buq+String.fromCharCode(Iz);this.Text.R(A.abU(this.Text.String,Aus,this.D6));this.
D6=this.D6+Aus.length;this.LC=true;},_Init:function(aArg){A.acn.Jg._Init.call(this
,aArg);A.acl.TM._Init.call(this.IY={I:this},0);A.Core.BL._Init.call(this.Cq={I:this
},0);A.Core.BL._Init.call(this.AmB={I:this},0);A.Core.BL._Init.call(this.Sh={I:this
},0);A.Core.BL._Init.call(this.Anm={I:this},0);A.Core.BL._Init.call(this.AjE={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C8._Init.call(this.CY={
I:this},0);this.__proto__=C.Jg;var B;this.H(Bur);this.IY.B3=false;this.IY.Cx=true;
this.IY.Fr(500);this.IY.Ut(500);this.Cq.Filter=147;this.Cq.Bw=false;this.AmB.Filter=
151;this.Sh.Filter=44;this.Anm.Filter=149;this.AjE.Filter=145;this.Text.A0(0x3F);
this.Text.H(Bus);this.Text.KU(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CY.DC(But);this.CY.DM(Buu);this.CY.A_8(2);this.CY.A_7(2);this.
CY.L(0xFF000000);this.CY.Z(false);this.J(this.Text,0);this.J(this.CY,0);this.IY.
Q=[B=this.CY,B.Fq,B.Z];this.Cq.BM=[this,this.AAE];this.Cq.D1=[this,this.AAE];this.
AmB.BM=[this,this.Be9];this.AmB.D1=[this,this.Be9];this.Sh.BM=[this,this.AAF];this.
Sh.D1=[this,this.AAF];this.Anm.BM=[this,this.Bfl];this.Anm.D1=[this,this.Bfl];this.
AjE.BM=[this,this.Be$];this.AjE.D1=[this,this.Be$];this.Text.Q7([this,this.Amo]);
this.Text.S(A.aaL(A.aci.ACZ));this.B7=A.aaL(A.aci.ACZ);},_Done:function(){this.__proto__=
A.acn.Jg;this.IY._Done();this.Cq._Done();this.AmB._Done();this.Sh._Done();this.Anm.
_Done();this.AjE._Done();this.Text._Done();this.CY._Done();A.acn.Jg._Done.call(this
);},_ReInit:function(){A.acn.Jg._ReInit.call(this);this.IY._ReInit();this.Cq._ReInit(
);this.AmB._ReInit();this.Sh._ReInit();this.Anm._ReInit();this.AjE._ReInit();this.
Text._ReInit();this.CY._ReInit();},_Mark:function(D){var B;A.acn.Jg._Mark.call(this
,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AVs={Jg:null,DE:function(G
){switch(this.Cq.CP){case 6:A._GetAutoObject(A.Device.Device).AuX();break;case 7:
A._GetAutoObject(A.Device.Device).Aqp();break;case 4:A._GetAutoObject(A.Device.Device
).AjC();break;case 5:A._GetAutoObject(A.Device.Device).Aqq();break;default:;}},Ew:
function(G){A._GetAutoObject(C.A8).FB();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Jg._Init.call(this.Jg={I:this},0);this.__proto__=C.AVs;this.H(Ce);this.
N.Z(true);this.Dr(C.Aq2);this.Jg.H(Ff);this.J(this.Jg,0);this.Bb(this.Jg);this.N.
CE=[this,this.Ew];this.N.C2(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Jg._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Jg._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Jg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AUi={WF:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B_()>0)){A._GetAutoObject(
C.BS).TC(A.aaR(A.acf.ACj),[this,this.Bbe]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TC(A.aaR(A.acf.AHi),[this,this.A8z]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TC(A.aaR(A.acf.A51),[this,this.Bbd]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TC(A.aaR(A.acf.UnlinkTransponder),[this,this.Bot]);}else{A._GetAutoObject(
C.BS).AaV(A.aaR(A.acf.ACj));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).AaV(
A.aaR(A.acf.AHi));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).AaV(A.aaR(A.
acf.A51));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).AaV(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.A6o)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fz();this.AuJ(A.aaR(A.acf.A6g),[this,this.Bg0
],this.OF);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Ml(A.aaR(
A.acf.A6B));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.Ani
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},Abt:function(){return C.
ACf;},Abu:function(){return C.ADw;},Q_:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avx());},HQ:function(G){C.AkP.HQ.call(
this,G);this.N.Cw(null);this.N.Fc(A.aaR(A.acf.A5T));if(this.AJO()){this.N.Cf=[this
,this.AIT];this.N.JC.C4(255);}else{this.N.Cf=null;this.N.JC.C4(100);}this.N.C3(A.
aaL(A.ach.Options));this.N.CS(A.jV);this.N.OS(false);this.N.OT(false);this.N.I$.
C4(255);},ASu:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiY=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A3(96,true,AiY.toFixed(),0,null);},ASv:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6u(this);},ASA:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).PY){A._GetAutoObject(A.Device.Device
).A3(73,true,A.jV,0,[this,this.Bfn]);return;}if(A._GetAutoObject(A.Device.Device
).Ari()===false){A.zX([this,this.XH],[B=A._GetAutoObject(A.Device.Device),B.WE,B.
Xk],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,this.Agi]);return;
}A.zX([this,this.Al3],[B=A._GetAutoObject(A.Device.Device).Gf,B.SF,B.E5],0);var A4C=
!!this.OF&&!(F=this.OF,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asr(2,
A4C);},AJO:function(){if(!this.Bg)return false;var AtN=this.Bg.AX;if(!AtN)return false;
if(!AtN.B_())return false;return true;},Al3:function(G){var B;var F;switch(A._GetAutoObject(
A.Device.Device).Gf.EN){case 0:A.z$([this,this.Al3],[B=A._GetAutoObject(A.Device.
Device).Gf,B.SF,B.E5],0);break;case 3:{if(!!this.OF&&(F=this.OF,F[1].call(F[0]))
)A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending();if(A._GetAutoObject(
A.Device.Converter).S3(A._GetAutoObject(A.Device.Device).PY)===10){this.Dl(A.aaR(
A.acf.BjR));this.Bg.NQ.S(A.aaL(A.fl.Bh));}else this.Dl(A.aaR(A.acf.A$m));A._GetAutoObject(
A.Device.Device).AqE();}break;case 4:{A._GetAutoObject(A.Device.Device).A3(97,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gf.E6();}break;default:;}A.ab5("%e"
,A._GetAutoObject(A.Device.Device).Gf.EN);},_Init:function(aArg){C.AkP._Init.call(
this,aArg);this.__proto__=C.AUi;var B;this.Dr(C.APy);this.A_f([B=A._GetAutoObject(
A.Device.Device),B.A9i,B.BbK]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADw={PC:null,I_:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.PC={I:this},0);A.acg.Ap._Init.call(this.I_={I:this},0);this.__proto__=
C.ADw;this.Es.Z(false);this.DS.Z(false);this.PC.H(Buv);this.PC.L(A.jb.Text);this.
I_.H(Buw);this.I_.L(A.jb.Text);this.J(this.PC,0);this.J(this.I_,0);this.PC.Ax(A.
aaL(A.ach.AvL));this.I_.Ax(A.aaL(A.ach.AvG));},_Done:function(){this.__proto__=C.
De;this.PC._Done();this.I_._Done();C.De._Done.call(this);},_ReInit:function(){C.
De._ReInit.call(this);this.PC._ReInit();this.I_._ReInit();},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AM5={Init:function(aArg){var B;A.zX([this,this.AAI],[B=A._GetAutoObject(A.Device.
Device),B.AEH,B.AIX],0);A.pe([this,this.AAI],this);},WF:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B_()>0)){if(this.AJO())A._GetAutoObject(C.BS).TC(A.aaR(
A.acf.AOs),[this,this.AIT]);else A._GetAutoObject(C.BS).AaV(A.aaR(A.acf.AOs));A.
_GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.ACh),[this,this.
Bbe]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.AHi),[this
,this.A8z]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.A50
),[this,this.Bbd]);}else{A._GetAutoObject(C.BS).AaV(A.aaR(A.acf.AOs));A._GetAutoObject(
C.BS).Fz();A._GetAutoObject(C.BS).AaV(A.aaR(A.acf.ACh));A._GetAutoObject(C.BS).Fz(
);A._GetAutoObject(C.BS).AaV(A.aaR(A.acf.AHi));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).AaV(A.aaR(A.acf.A50));}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).
Ml(A.aaR(A.acf.A6o)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();this.AuJ(A.aaR(
A.acf.A6g),[this,this.Bg0],this.OF);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Ml(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();A.
_GetAutoObject(C.BS).Ml(A.aaR(A.acf.A6B));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Ml(A.aaR(A.acf.Ani)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},Abt:function(){return C.ACb;},Abu:function(){return C.ADu;},Q_:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOO(
));},HQ:function(G){C.AkP.HQ.call(this,G);this.N.Cw(A.aaL(A.ach.AeD));this.N.Cf=[
this,this.Adw];this.N.Fc(A.jV);this.N.C3(null);this.N.CS((A.aaR(A.acf.A5T)+String.
fromCharCode(0x0A))+A.aaR(A.acf.BhT));this.N.OS(false);this.N.OT(false);this.N.I$.
C4(255);},ASu:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiY=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).A3(96,true,AiY.toFixed(),0,null);},ASv:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6t(this);},ASA:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).PY){A._GetAutoObject(A.Device.Device
).A3(73,true,A.jV,0,[this,this.Bfn]);return;}if(A._GetAutoObject(A.Device.Device
).Ari()===false){A.zX([this,this.XH],[B=A._GetAutoObject(A.Device.Device),B.WE,B.
Xk],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,this.Agi]);return;
}A.zX([this,this.Al3],[B=A._GetAutoObject(A.Device.Device).Gf,B.SF,B.E5],0);var A4C=
!!this.OF&&!(F=this.OF,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asr(0,
A4C);},AJO:function(){var AtN=this.Bg.AX;if(!AtN)return false;var O;for(O=0;O<AtN.
B_();O++)if(A._GetAutoObject(A.Device.Helper).Aj7(AtN.AO2(O,34))===false)return true;
return false;},Adw:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
16);},AAI:function(G){if(A._GetAutoObject(A.Device.Device).Aqs===1)A.pe([this,this.
A6x],this);},Al3:function(G){var B;var F;switch(A._GetAutoObject(A.Device.Device
).Gf.EN){case 0:A.z$([this,this.Al3],[B=A._GetAutoObject(A.Device.Device).Gf,B.SF
,B.E5],0);break;case 3:{if(!!this.OF&&(F=this.OF,F[1].call(F[0])))A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();this.Dl(A.aaR(A.acf.BhU));A._GetAutoObject(
A.Device.Device).AqE();}break;case 4:{A._GetAutoObject(A.Device.Device).A3(70,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gf.E6();}break;default:;}},_Init:
function(aArg){C.AkP._Init.call(this,aArg);this.__proto__=C.AM5;var B;this.Dr(C.
AO7);this.A_f([B=A._GetAutoObject(A.Device.Device),B.A8Q,B.Bbt]);this.Init(aArg);
},_className:"Application::BirthRegistrationsListScreen"};C.AO7={DX:function(G){
C.Aev.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad0(11));}
,_Init:function(aArg){C.Aev._Init.call(this,aArg);this.__proto__=C.AO7;this.Text.
R(A.aaR(A.acf.AB6));},_ReInit:function(){C.Aev._ReInit.call(this);this.Text.R(A.
aaR(A.acf.AB6));},_className:"Application::HeaderBirthRegistrationsList"};C.APy={
DX:function(G){C.Aev.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(12));},_Init:function(aArg){C.Aev._Init.call(this,aArg);this.__proto__=C.APy;
this.Text.R(A.aaR(A.acf.AGo));},_ReInit:function(){C.Aev._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AGo));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ACf={Jq:0,AP:null,SV:null,Pc:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SV.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SV.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rj(this.
Jq));this.SV.R(A._GetAutoObject(A.acj.KO).AC1(this.Pc));},Ch:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){this.Jq=this.AX.KR(Ad,26);this.Pc=this.AX.Hv(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.SV={I:this},0);this.__proto__=C.ACf;
this.AP.H(A0q);this.AP.L(A.jb.Bc);this.SV.H(A0r);this.J(this.AP,0);this.J(this.SV
,0);this.V.S(A.aaL(A.fl.Ak));this.V.AZ(A.aaL(A.fl.Bh));this.SV.S(A.aaL(A.fl.Ak));
this.SV.AZ(A.aaL(A.fl.Bh));this.SV.Cr(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SV._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SV._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.AZ(A.aaL(A.fl.Bh));this.SV.S(A.aaL(A.fl.Ak));this.SV.AZ(A.
aaL(A.fl.Bh));this.SV.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SV)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUS={
AeW:null,Ab0:null,TU:null,KP:null,TS:null,NN:null,Tn:A.jV,Ai:function(Ae){var F;
C.SS.Ai.call(this,Ae);this.TU.L(this.V.AQ);var Apw=false;if((!this.Dm||!(F=this.
Dm,F[1].call(F[0])))&&!this.A_)Apw=true;this.TU.Z(Apw);this.Pv.Z(!Apw);this.VX.Z(
!Apw);this.Q2.Z(!Apw);this.Yn.Z(!Apw);this.P9.Z(!Apw);},Ady:function(G){var B;var
F;if(!this.Tn.length){C.SS.Ady.call(this,G);return;}var BP=this.FY;var Gv=A._GetAutoObject(
A.Device.AnN).Bf0(this.Tn);this.Tn=A.jV;if(!Gv){A._GetAutoObject(A.Device.Device
).A3(101,true,A.jV,0,this.Ab0);A.pe(this.AeW,this);return;}if(this.Aso&&(Gv>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).A3(102,true,A.jV,0,this.
Ab0);A.pe(this.AeW,this);return;}this.Ur(((B=(Gv|0))<0)?B+0x100000000:B);if(this.
FY!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FY));A.abo(this.Dm,0);}if(!
!this.OK)A.pe(this.OK,this);},A3v:function(G){if(this.Tn.length<10)this.Tn=this.
Tn+String.fromCharCode(this.KP.DQ);},ASx:function(G){if((this.NN.DQ===0x0D)||(this.
NN.DQ===0x0A))this.Ady(this);else this.NN.NM=true;},ATz:function(E){if(A.aa0(this.
AeW,E))return;this.AeW=E;},ATA:function(E){if(A.aa0(this.Ab0,E))return;this.Ab0=
E;},_Init:function(aArg){C.SS._Init.call(this,aArg);A.acg.Text._Init.call(this.TU={
I:this},0);A.Core.BL._Init.call(this.KP={I:this},0);A.Core.BL._Init.call(this.TS={
I:this},0);A.Core.BL._Init.call(this.NN={I:this},0);this.__proto__=C.AUS;this.TU.
H(Bux);this.TU.Jc(true);this.TU.A6(0x12);this.TU.R(A.aaR(A.acf.A6b));this.KP.Filter=
143;this.TS.Filter=149;this.NN.Filter=145;this.J(this.TU,0);this.TU.S(A.aaL(A.fl.
EK));this.KP.BM=[this,this.A3v];this.TS.BM=[this,this.Bb5];this.NN.BM=[this,this.
ASx];},_Done:function(){this.__proto__=C.SS;this.TU._Done();this.KP._Done();this.
TS._Done();this.NN._Done();C.SS._Done.call(this);},_ReInit:function(){C.SS._ReInit.
call(this);this.TU._ReInit();this.KP._ReInit();this.TS._ReInit();this.NN._ReInit(
);this.TU.R(A.aaR(A.acf.A6b));this.TU.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SS._Mark.call(this,D);if((B=this.AeW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ab0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUW={AeW:null,Ab0:null,KP:null
,TS:null,NN:null,Tn:A.jV,I3:function(G){var F;if(!this.Tn.length){C.Rb.I3.call(this
,G);return;}if(this.Asn)return;if(!this.Tn.length)this.TS.NM=true;var BP=this.AM;
var Gv=A._GetAutoObject(A.Device.AnN).BBN(this.Tn);this.Tn=A.jV;if(!Gv){if((this.
Tn.length<13)&&!A._GetAutoObject(A.Device.Device).PY)A._GetAutoObject(A.Device.Device
).A3(105,true,A.jV,0,this.Ab0);else A._GetAutoObject(A.Device.Device).A3(103,true
,A.jV,0,this.Ab0);A.pe(this.AeW,this);return;}this.Bx(Gv);if(this.AM!==BP){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OK)A.pe(this.
OK,this);},A3v:function(G){if(this.Asn)return;if(this.Tn.length<17)this.Tn=this.
Tn+String.fromCharCode(this.KP.DQ);},ASx:function(G){if((this.NN.DQ===0x0D)||(this.
NN.DQ===0x0A))this.I3(this);else this.NN.NM=true;},ATz:function(E){if(A.aa0(this.
AeW,E))return;this.AeW=E;},ATA:function(E){if(A.aa0(this.Ab0,E))return;this.Ab0=
E;},_Init:function(aArg){C.Rb._Init.call(this,aArg);A.Core.BL._Init.call(this.KP={
I:this},0);A.Core.BL._Init.call(this.TS={I:this},0);A.Core.BL._Init.call(this.NN={
I:this},0);this.__proto__=C.AUW;this.Ar4(false);this.KP.Filter=143;this.TS.Filter=
149;this.NN.Filter=145;this.KP.BM=[this,this.A3v];this.TS.BM=[this,this.Atq];this.
NN.BM=[this,this.ASx];},_Done:function(){this.__proto__=C.Rb;this.KP._Done();this.
TS._Done();this.NN._Done();C.Rb._Done.call(this);},_ReInit:function(){C.Rb._ReInit.
call(this);this.KP._ReInit();this.TS._ReInit();this.NN._ReInit();},_Mark:function(
D){var B;C.Rb._Mark.call(this,D);if((B=this.AeW)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ab0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APv={Aj3:null,Aj1:null,Gw:null,Q$:null,SP:null,C8:null,Init:function(aArg){var
B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Device),B.A9a,B.AFA],0);A.pe([
this,this.DX],this);},Dg:function(E){C.BR.Dg.call(this,E);this.Aj3.L(E);this.Aj1.
L(E);this.Q$.Zu(E);this.Gw.L(E);this.SP.Zu(E);},WG:function(E){this.Q$.CV(E);this.
SP.CV(E);},DX:function(G){this.Q$.T(A._GetAutoObject(A.Device.Device).Av1.toFixed(
));A.pe([this,this.BC5],this);},BC5:function(G){var Xu=A._GetAutoObject(A.Device.
Device).An.Filter;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).Avx());this.SP.T(A._GetAutoObject(A.Device.Device).An.B_().toFixed());A.
_GetAutoObject(A.Device.Device).An.Bk(Xu);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aj3={I:this},0);A.acg.Ap._Init.call(this.Aj1={
I:this},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.Q$={I:this
},0);C.D2._Init.call(this.SP={I:this},0);A.acg.C8._Init.call(this.C8={I:this},0);
this.__proto__=C.APv;this.Aj3.H(O7);this.Aj1.H(Buy);this.Gw.H(Buz);this.Gw.L(A.jb.
CU);this.Q$.A0(0x14);this.Q$.H(BuA);this.Q$.Zu(A.jb.Bm);this.Q$.CV(A.jb.Ri);this.
Q$.Hn(2);this.Q$.Bmn(0x11);this.SP.A0(0x14);this.SP.H(BuB);this.SP.Zu(A.jb.Bm);this.
SP.CV(A.jb.Ri);this.SP.Hn(2);this.C8.DC(AhX);this.C8.DM(BuC);this.C8.L(A.jb.Bc);
this.J(this.Aj3,0);this.J(this.Aj1,0);this.J(this.Gw,0);this.J(this.Q$,0);this.J(
this.SP,0);this.J(this.C8,0);this.Aj3.Ax(A.aaL(A.ach.AvF));this.Aj1.Ax(A.aaL(A.ach.
AP5));this.Gw.Ax(A.aaL(A.ach.Gw));this.Q$.S(A.aaL(A.fl.Bh));this.SP.S(A.aaL(A.fl.
Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Aj3._Done();this.
Aj1._Done();this.Gw._Done();this.Q$._Done();this.SP._Done();this.C8._Done();C.BR.
_Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Aj3._ReInit();
this.Aj1._ReInit();this.Gw._ReInit();this.Q$._ReInit();this.SP._ReInit();this.C8.
_ReInit();this.Q$.S(A.aaL(A.fl.Bh));this.SP.S(A.aaL(A.fl.Bh));},_Mark:function(D
){var B;C.BR._Mark.call(this,D);if((B=this.Aj3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARY={Abh:null,Aep:null,VT:null,Init:function(aArg){this.Bb(this.Abh);},Lp:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CE=[this,this.AaH];this.BQ.Cf=
null;this.BQ.Ca=[this,this.A3y];this.BQ.CS(A.jV);this.BQ.Cw(null);this.BQ.C2(A.aaL(
A.ach.YB));}return this.BQ;},AAB:function(G){var Aa=(C.Ajk.isPrototypeOf(G)?G:null
);if(Aa===this.Abh)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aep)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(AIL);},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ajk._Init.call(this.
Abh={I:this},0);C.Ajk._Init.call(this.Aep={I:this},0);C.AR2._Init.call(this.VT={
I:this},0);this.__proto__=C.ARY;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.AB$));this.
Abh.H(IX);this.Abh.T(A.aaR(A.acf.AjH));this.Aep.H(Qd);this.Aep.T(A.aaR(A.acf.AGv
));this.VT.H(Aag);this.VT.T(A.aaR(A.acf.A5L));this.J(this.Abh,0);this.J(this.Aep
,0);this.J(this.VT,0);this.Text.S(A.aaL(A.fl.Ak));this.Abh.AR=[this,this.AAB];this.
Aep.AR=[this,this.AAB];this.VT.ATd([B=A._GetAutoObject(A.Device.Device),B.AEL,B.
AI0]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Abh._Done();this.
Aep._Done();this.VT._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.
call(this);this.Abh._ReInit();this.Aep._ReInit();this.VT._ReInit();this.Text.R(A.
aaR(A.acf.AB$));this.Abh.T(A.aaR(A.acf.AjH));this.Aep.T(A.aaR(A.acf.AGv));this.VT.
T(A.aaR(A.acf.A5L));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fs._Mark.
call(this,D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aep)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARX={AnimalTableFields:null,Ay:null,Y:
null,JT:null,CQ:function(){this.AiL(this);},Init:function(aArg){A.zV([this,this.
AiL],this.AnimalTableFields,0);A.pe([this,this.AiL],this);},DE:function(G){C.Fs.
DE.call(this,G);this.MT(this);},Lp:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.CE=[this,this.Ew];this.BQ.Cf=[this,this.A3w];this.BQ.Ca=[this,this.
A31];this.BQ.C3(A.aaL(A.ach.Are));this.BQ.Cw(A.aaL(A.ach.Aq8));this.BQ.C2(A.aaL(
A.ach.YB));}return this.BQ;},Ew:function(G){this.ABc();this.AaH(this);},AiL:function(
G){this.Ao5();var O;for(O=0;O<this.AnimalTableFields.Na();O=O+1){var Aao=A._GetAutoObject(
C.Amt).OI(O);this.A1B(Aao);}this.J(this.JT,0);A.aaS([this,this.MT],this);},Fk:function(
G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);
this.Ay.MC(-this.Y.Br[1]);},MT:function(G){var B;this.Y.VA(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},A1B:function(
Ha){var Aze=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Si,0);Aa.T(Aze.BT(Ha));Aa.Aj(true);Aa.G6=Ha;Aa.A_r(this.AnimalTableFields.NZ(Ha
));this.J(Aa,0);this.ZG(Aa);},Ao5:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HP(AdM);}}
,ABc:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JT)){var Aa=(C.Si.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G6);if(Aa.ASM())this.AnimalTableFields.
AUO(Aa.G6);}else A.ab5("%s",Ayu);}X=X.Ah;}this.AnimalTableFields.Ci();},A3w:function(
G){var B;var Aa=(C.Si.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAt=(C.Si.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAt){this.AhE(AAt,Aa);A.pe([this,this.MT],this);}}},A31:function(
G){var B;var Aa=(C.Si.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AA0=(C.Si.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AA0){this.AhE(Aa,AA0);A.pe([this,this.MT],this);}}},AqL:function(
G){var B;A._GetAutoObject(A.Device.Device).Ass(this);A.pe([this,this.AiL],this);
},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ava._Init.call(this.JT={I:this},0);
this.__proto__=C.ARX;this.H(Qc);this.Text.R(A.aaR(A.acf.AGv));this.Ay.H(Iu);this.
Y.H(Ba4);this.Y.JX(1);this.JT.H(Ayv);this.JT.Aj(true);this.JT.T(A.aaR(A.acf.A6p)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JT,0);this.Y.Em=[this,this.Fk];
this.JT.AR=[this,this.AqL];this.AnimalTableFields=A._GetAutoObject(C.Amt);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fs;this.Ay._Done();this.Y._Done();this.
JT._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JT._ReInit();this.Text.R(A.aaR(A.acf.AGv));this.
JT.T(A.aaR(A.acf.A6p));this.CQ();},_Mark:function(D){var B;C.Fs._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARW={Y:null,B0:null,Db:null,CH:null,GQ:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UT:null,Init:function(aArg){A.zX([this,this.AuR],this.B0.Q,0);A.zX([
this,this.AM_],this.CH.Q,0);A.zX([this,this.AV9],this.GQ.Q,0);A.zX([this,this.Avu
],this.Db.Q,0);this.Bb(this.B0);},DE:function(G){C.Fs.DE.call(this,G);this.MT(this
);},Lp:function(){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CE=[this,this.
AaH];this.BQ.Cf=null;this.BQ.Ca=null;this.BQ.CS(A.jV);this.BQ.Cw(null);this.BQ.C2(
A.aaL(A.ach.YB));}return this.BQ;},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(
0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},MT:function(
G){var B;this.Y.VA(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},AuR:function(G){var F;A._GetAutoObject(A.Device.Device
).EC((F=this.B0.Q,F[1].call(F[0])));},AV9:function(G){var F;A._GetAutoObject(A.Device.
Device).Nm((F=this.GQ.Q,F[1].call(F[0])));},Avu:function(G){var F;A._GetAutoObject(
A.Device.Device).JY((F=this.Db.Q,F[1].call(F[0])));},AM_:function(G){var F;A._GetAutoObject(
A.Device.Device).N3((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fs._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AaU._Init.call(this.B0={
I:this},0);C.AaU._Init.call(this.Db={I:this},0);C.AaU._Init.call(this.CH={I:this
},0);C.AaU._Init.call(this.GQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UU._Init.call(this.UT={I:
this},0);this.__proto__=C.ARW;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.AjH));this.
Y.H(Ba4);this.Y.JX(1);this.B0.H(Ah1);this.B0.Ar(true);this.B0.Aj(true);this.B0.T(
A.aaR(A.acf.Aft));this.Db.H(Ayo);this.Db.Ar(true);this.Db.Aj(true);this.Db.T(A.aaR(
A.acf.Afo));this.CH.H(Aop);this.CH.Ar(true);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.
Breed));this.GQ.H(Atb);this.GQ.Ar(true);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jk
));this.Ay.H(Iu);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(
A.Device.Device).Breed);this.UT.Au(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.B0,0);this.J(this.Db,0);this.J(this.CH,0);this.J(
this.GQ,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.B0.Zv(A.aaL(A.fl.H3));
this.B0.Zw(A.aaL(A.fl.H3));this.B0.Au([B=this.AnimalType,B.B$,B.Cb]);this.B0.CK(
this.AnimalType);this.Db.Zv(A.aaL(A.fl.H3));this.Db.Zw(A.aaL(A.fl.H3));this.Db.Au([
B=this.Gender,B.B$,B.Cb]);this.Db.CK(this.Gender);this.CH.Zv(A.aaL(A.fl.H3));this.
CH.Zw(A.aaL(A.fl.H3));this.CH.Au([B=this.Breed,B.B$,B.Cb]);this.CH.CK(this.Breed
);this.GQ.Zv(A.aaL(A.fl.H3));this.GQ.Zw(A.aaL(A.fl.H3));this.GQ.Au([B=this.UT,B.
B$,B.Cb]);this.GQ.CK(this.UT);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fs;this.Y._Done();this.B0._Done();this.Db._Done();this.CH._Done();this.GQ._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UT._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this
);this.Y._ReInit();this.B0._ReInit();this.Db._ReInit();this.CH._ReInit();this.GQ.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UT._ReInit();this.Text.R(A.aaR(A.acf.AjH));this.B0.T(A.aaR(
A.acf.Aft));this.Db.T(A.aaR(A.acf.Afo));this.CH.T(A.aaR(A.acf.Breed));this.GQ.T(
A.aaR(A.acf.Jk));},_Mark:function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amx={CB:0,Alw:A.abi(17,0,null),OI:function(HA){return this.Alw.Get(HA);},Na:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alw.Set(
O,0);this.CB=0;},J:function(Aaj){if(this.CB>=17)A.ab5("%s",BuD);else{this.Alw.Set(
this.CB,Aaj);this.CB=this.CB+1;}},Ci:function(){},E3:function(Ah5){var AJ9=Ah5.indexOf(
String.fromCharCode(0x2C),0);var A10=A.jV;var O=0;this.CB=0;while(O<17)if(Ah5===
A.jV)O++;else{if(AJ9===-1){A10=Ah5;Ah5=A.jV;}else{A10=A.abV(Ah5,AJ9);Ah5=A.ab1(Ah5
,0,AJ9+1);}var Aao=A.abZ(A10,0,10)|0;if(this.Bj8(Aao)){this.Alw.Set(this.CB,Aao);
this.CB=this.CB+1;O++;}AJ9=Ah5.indexOf(String.fromCharCode(0x2C),0);}if(Ah5!==A.
jV)A.ab5("%s",BuE);},toString:function(){var B;var AAr=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAr=AAr+AIg;AAr=AAr+(((B=this.Alw.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAr;},Contains:function(Aaj){var O;for(O=0;O<this.CB;O=O+1)if(this.Alw.
Get(O)===Aaj)return true;return false;},Bj8:function(Aaj){return true;},_Init:function(
aArg){(this.Alw=[]).__proto__=C.Amx.Alw;this.__proto__=C.Amx;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AMe={AfQ:null,Init:function(aArg){var B;A.
zX([this,this.Be4],[B=A._GetAutoObject(A.Device.Device),B.A8E,B.Bbl],0);A.zX([this
,this.Be5],[B=A._GetAutoObject(A.Device.Device),B.A8F,B.Bbm],0);A.pe([this,this.
Be4],this);A.pe([this,this.Be5],this);},Clear:function(){C.Amx.Clear.call(this);
this.AfQ.Clear();},Ci:function(){A._GetAutoObject(A.Device.Device).ArI(this.AfQ.
toString());A._GetAutoObject(A.Device.Device).ArJ(this.toString());},Be4:function(
G){this.AfQ.E3(A._GetAutoObject(A.Device.Device).ABM);A.we(this,0);},Be5:function(
G){this.E3(A._GetAutoObject(A.Device.Device).ABN);A.we(this,0);},NZ:function(Aaj
){return this.AfQ.Contains(Aaj);},AUO:function(Aaj){if(!this.NZ(Aaj))this.AfQ.J(
Aaj);},AOP:function(){return this.AfQ.Na();},_Init:function(aArg){C.Amx._Init.call(
this,aArg);this.__proto__=C.AMe;this.AfQ=A._NewObject(C.Amx,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amx._Mark.call(this,D);if((B=this.AfQ)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amt={_Init:function(){C.AMe._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AR2={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hn(10);},Bl:function(aSize){C.Uf.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mq.M[0]));},Ai:function(Ae){var B;C.Uf.
Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf
){this.Background.L(FS);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FS);this.V.L(GY);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;},_Init:function(
aArg){C.Uf._Init.call(this,aArg);this.__proto__=C.AR2;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AM3={YT:null,Ak_:null,Lp:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CE=[this,this.AaH];this.BQ.Cf=null;
this.BQ.Ca=null;this.BQ.CS(A.jV);this.BQ.Cw(null);this.BQ.C2(A.aaL(A.ach.YB));}return this.
BQ;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.AaU._Init.call(this.
YT={I:this},0);C.AEh._Init.call(this.Ak_={I:this},0);this.__proto__=C.AM3;var B;
this.H(K1);this.YT.H(K1);this.YT.T(A.aaR(A.acf.Display));this.Ak_.Au(A._GetAutoObject(
A.Device.Device).Aqs);this.J(this.YT,0);this.YT.Zv(A.aaL(A.fl.H3));this.YT.Zw(A.
aaL(A.fl.H3));this.YT.Au([B=this.Ak_,B.B$,B.Cb]);this.YT.CK(this.Ak_);this.Ak_.BnE([
B=A._GetAutoObject(A.Device.Device),B.AEH,B.AIX]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YT._Done();this.Ak_._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YT._ReInit();this.Ak_._ReInit(
);this.YT.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak_)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AEh={AbO:null,ListViewScopeToString:null,Du:function(){return 2;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BT(aIndex
);},DZ:function(A7){return A7;},H5:function(){return 1;},Au:function(E){var F;C.
AC.Au.call(this,E);if(!!this.AbO)(F=this.AbO,F[2].call(F[0],E));},BnE:function(E
){if(A.aaZ(this.AbO,E))return;if(!!this.AbO)A.z$([this,this.A37],this.AbO,0);this.
AbO=E;if(!!this.AbO)A.zX([this,this.A37],this.AbO,0);A.pe([this,this.A37],this);
},A37:function(G){var F;if(!!this.AbO)this.Q=(F=this.AbO,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AEh;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AVr={
ACm:0,ACl:0,Ai:function(Ae){C.OZ.Ai.call(this,Ae);this.Background.L(this.ACl);this.
V.L(this.ACm);},Bmu:function(E){if(this.ACm===E)return;this.ACm=E;this.Am();},Bmt:
function(E){if(this.ACl===E)return;this.ACl=E;this.Am();},_Init:function(aArg){C.
OZ._Init.call(this,aArg);this.__proto__=C.AVr;this.Ar(false);this.ACm=A.jb.Text;
this.ACl=A.jb.CJ;},_className:"Application::TextCaptionItem"};C.AHs={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.Bey],[B=A._GetAutoObject(A.Device.
Device),B.A9b,B.BbE],0);A.pe([this,this.Bey],this);},Du:function(){return 3;},Gl:
function(aIndex){return this.WeightValuePrecisionToString.BT(this.C7(aIndex));},
Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwW(E);},Bey:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OP;A.abo([this,this.B$,this.
Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHs;this.
BG.Set(0,0);this.BG.Set(1,1);this.BG.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cm;this.WeightValuePrecisionToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AUU={UH:null,A$Y:A.jV,Init:function(aArg){},Bl:function(aSize){C.BX.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UH.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BX.Ai.call(this,Ae);this.UH.L(this.
V.AQ);},Bn8:function(E){if(this.A$Y===E)return;this.A$Y=E;this.UH.R(E);},_Init:function(
aArg){C.BX._Init.call(this,aArg);C.CG._Init.call(this.UH={I:this},0);this.__proto__=
C.AUU;this.H(AcP);this.UH.H(BuF);this.J(this.UH,0);this.UH.S(A.aaL(A.fl.Af));this.
UH.AZ(A.aaL(A.fl.Ak));this.UH.Cr(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BX;this.UH._Done();C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(
this);this.UH._ReInit();this.UH.S(A.aaL(A.fl.Af));this.UH.AZ(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BX._Mark.call(this,D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Wn={ABQ:null,MassDeregistrationCriterionToString:
null,Du:function(){return 2;},Gl:function(aIndex){var F;if((aIndex<0)||(aIndex>=
2))return A.jV;var A7=this.C7(aIndex);var M2=this.MassDeregistrationCriterionToString.
BT(this.C7(aIndex));if(!!this.ABQ&&!A7)M2=A._GetAutoObject(A.Device.Helper).MI(M2
,O9,(F=this.ABQ,F[1].call(F[0])).toFixed());return M2;},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.call(this.
MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Wn;this.BG.Set(
0,0);this.BG.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.ABQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassDeregistrationCriterion"};C.ANX={Vm:null,Wn:null,Y_:null,JU:null
,Auc:0,AaW:100,Init:function(aArg){this.Bb(this.Y_);},Ai:function(Ae){C.Ej.Ai.call(
this,Ae);var BCC=((A.aaR(A.acf.AqA)+A.aaR(A.acf.Colon))+CR)+this.Auc.toFixed();this.
JU.Bn8(BCC);},CC:function(G){C.Ej.CC.call(this,G);A.zX([this,this.ABC],this.JU.Q
,0);A.pe([this,this.ABC],this);},E4:function(G){C.Ej.E4.call(this,G);A.z$([this,
this.ABC],this.JU.Q,0);},DJ:function(G){var F;C.Ej.DJ.call(this,G);this.N.Fc(A.jV
);this.N.Cf=null;if((this.AV===this.JU)&&!!this.JU.Q){this.N.Ca=[this,this.Bfi];
switch((F=this.JU.Q,F[1].call(F[0]))){case 1:if(!this.Auc)this.N.GW.C4(100);else
this.N.GW.C4(255);break;case 0:{this.N.Fc(A.aaR(A.acf.Bio));this.N.Cf=[this,this.
Bzk];if(this.AaW<=1)this.N.GW.C4(100);else this.N.GW.C4(255);this.N.CS(A.aaR(A.acf.
Bip));this.N.Ca=[this,this.BAh];if(this.AaW>=2147483647)this.N.GW.C4(100);else this.
N.GW.C4(255);this.N.WO=true;}break;default:throw new Error(BuG+(F=this.JU.Q,F[1].
call(F[0])).toFixed());}this.JU.Ab1(this.N.Ca);}},Bfi:function(G){if(this.Auc>0)
A._GetAutoObject(A.Device.Device).A3(108,true,this.Auc.toFixed(),0,[this,this.BAP
]);},ABC:function(G){var F;this.Auc=A._GetAutoObject(A.Device.Helper).Bjv((F=this.
JU.Q,F[1].call(F[0])),this.AaW);this.Am();A.pe([this,this.MN],this);},Bfc:function(
G){var B;if(!A._GetAutoObject(A.Device.Device).An.B_()){A._GetAutoObject(A.Device.
Device).A3(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Ari(
)===false){this.Vm=[this,this.Bfc];A.zX([this,this.XH],[B=A._GetAutoObject(A.Device.
Device),B.WE,B.Xk],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,
this.Agi]);return;}A.zX([this,this.Al3],[B=A._GetAutoObject(A.Device.Device).Gf,
B.SF,B.E5],0);A._GetAutoObject(A.Device.Device).Asr(1,false);},Agi:function(G){var
B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XH],[B=A._GetAutoObject(A.Device.Device),B.WE,B.Xk],0);this.
Vm=null;}},XH:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.Z2===3){
A._GetAutoObject(A.Device.Device).A3(74,false,A.jV,0,[this,this.Agi]);A.z$([this
,this.XH],[B=A._GetAutoObject(A.Device.Device),B.WE,B.Xk],0);if(!!this.Vm)A.pe(this.
Vm,this);this.Vm=null;}},BAP:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BCx],this);},BCx:function(
G){A._GetAutoObject(A.Device.Helper).ByM(this.Wn.Q,this.AaW);A._GetAutoObject(A.
Device.Device).A3(109,true,this.Auc.toFixed(),0,null);A.pe([this,this.MN],this);
A.pe([this,this.ABC],this);},Al3:function(G){var B;switch(A._GetAutoObject(A.Device.
Device).Gf.EN){case 0:A.z$([this,this.Al3],[B=A._GetAutoObject(A.Device.Device).
Gf,B.SF,B.E5],0);break;case 3:A._GetAutoObject(A.Device.Device).AqE();break;case
4:{A._GetAutoObject(A.Device.Device).A3(88,true,A.jV,0,null);A._GetAutoObject(A.
Device.Device).Gf.E6();}break;default:;}},BAh:function(G){if(this.AaW<2147483647
)this.AS_(this.AaW+1);},Bzk:function(G){if(this.AaW>1)this.AS_(this.AaW-1);},AS_:
function(E){if(this.AaW===E)return;this.AaW=E;A.pe([this,this.ABC],this);this.JU.
Am();},Bk4:function(){return this.AaW;},_Init:function(aArg){C.Ej._Init.call(this
,aArg);C.Wn._Init.call(this.Wn={I:this},0);C.Co._Init.call(this.Y_={I:this},0);C.
AUU._Init.call(this.JU={I:this},0);this.__proto__=C.ANX;var B;this.Dr(C.AO9);this.
Y_.H(IX);this.Y_.Aj(true);this.Y_.T(A.aaR(A.acf.A6J));this.Y_.Bi(false);this.JU.
H(BuH);this.JU.Aj(true);this.JU.T(A.aaR(A.acf.Bag));this.JU.Bi(true);this.JU.A_V(
A.aaR(A.acf.Ok));this.J(this.Y_,0);this.J(this.JU,0);this.Wn.ABQ=[this,this.Bk4,
this.AS_];this.Y_.AR=[this,this.Bfc];this.JU.AR=[this,this.Bfi];this.JU.Ab1(this.
N.Ca);this.JU.Au([B=this.Wn,B.B$,B.Cb]);this.JU.CK(this.Wn);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wn._Done();this.Y_._Done();this.JU._Done();C.
Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Wn._ReInit(
);this.Y_._ReInit();this.JU._ReInit();this.Y_.T(A.aaR(A.acf.A6J));this.JU.T(A.aaR(
A.acf.Bag));this.JU.A_V(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ej._Mark.call(
this,D);if((B=this.Vm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Y_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.JU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AO9={_Init:function(aArg){C.Ks._Init.call(this,aArg);this.__proto__=C.AO9;this.
Text.R(A.aaR(A.acf.AdV));},_ReInit:function(){C.Ks._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdV));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.AN0={
Vm:null,Y9:null,AbS:null,Init:function(aArg){this.Bb(this.Y9);A.pe([this,this.MN
],this);},Bfb:function(G){var B;var AAa=A._GetAutoObject(A.Device.Device).AD5();
switch(AAa){case 1:A._GetAutoObject(A.Device.Device).A3(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A3(91,true,U3,0,[this,this.Bfv]);break;
case 2:{this.Vm=[this,this.Bfb];A.zX([this,this.XH],[B=A._GetAutoObject(A.Device.
Device),B.WE,B.Xk],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,
this.Agi]);}break;default:throw new Error(Ba5+AAa.toFixed());}},Agi:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XH],[B=A._GetAutoObject(A.Device.Device),B.WE,B.Xk],0);this.
Vm=null;}},XH:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.Z2===3){
A._GetAutoObject(A.Device.Device).A3(74,false,A.jV,0,[this,this.Agi]);A.z$([this
,this.XH],[B=A._GetAutoObject(A.Device.Device),B.WE,B.Xk],0);if(!!this.Vm)A.pe(this.
Vm,this);this.Vm=null;}},Bfx:function(G){var B;var AAa=A._GetAutoObject(A.Device.
Device).AD6();switch(AAa){case 1:A._GetAutoObject(A.Device.Device).A3(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).A3(95,true,A.jV,0,[this
,this.BAQ]);break;case 2:{this.Vm=[this,this.Bfx];A.zX([this,this.XH],[B=A._GetAutoObject(
A.Device.Device),B.WE,B.Xk],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV
,0,[this,this.Agi]);}break;case 3:A._GetAutoObject(A.Device.Device).A3(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A3(93,true,A.jV,0,null
);break;default:throw new Error(Ba5+AAa.toFixed());}},Bfv:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(As.Id){case 91:if(As.PopupState===
9)A.aaS([this,this.Bzo],this);break;case 92:if(As.PopupState===9)A.aaS([this,this.
Bzq],this);break;default:throw new Error(BuI+As.Id.toFixed());}},Bzo:function(G){
if(A._GetAutoObject(A.Device.Device).ACv()){var A3i=A._GetAutoObject(A.Device.Device
).An.QK();A._GetAutoObject(A.Device.Device).A3(80,true,A3i.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A3(82,true,A.jV,0,null);A.aaS([this,this.BAL],
this);},Bzq:function(G){if(A._GetAutoObject(A.Device.Device).AGz()){var A3i=A._GetAutoObject(
A.Device.Device).An.QK();A._GetAutoObject(A.Device.Device).A3(81,true,A3i.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A3(83,true,A.jV,0,null);A.aaS([
this,this.BBr],this);},BAQ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BCy],this);},BCy:function(
G){A._GetAutoObject(A.Device.Device).A3(92,true,U3,0,[this,this.Bfv]);},BBr:function(
G){A._GetAutoObject(A.Device.Device).A3(92,false,A.jV,0,null);},BAL:function(G){
A._GetAutoObject(A.Device.Device).A3(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ej._Init.call(this,aArg);C.Co._Init.call(this.Y9={I:this},0);C.Co._Init.call(
this.AbS={I:this},0);this.__proto__=C.AN0;this.Dr(C.APa);this.Y9.H(IX);this.Y9.Aj(
true);this.Y9.T(A.aaR(A.acf.ACv));this.Y9.Bi(false);this.AbS.H(Qd);this.AbS.Aj(true
);this.AbS.T(A.aaR(A.acf.AGz));this.AbS.Bi(true);this.J(this.Y9,-1);this.J(this.
AbS,-1);this.Y9.AR=[this,this.Bfb];this.AbS.AR=[this,this.Bfx];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ej;this.Y9._Done();this.AbS._Done();C.Ej._Done.
call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Y9._ReInit();this.AbS.
_ReInit();this.Y9.T(A.aaR(A.acf.ACv));this.AbS.T(A.aaR(A.acf.AGz));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Vm)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.APa={
_Init:function(aArg){C.Ks._Init.call(this,aArg);this.__proto__=C.APa;this.Text.R(
A.aaR(A.acf.ACB));},_ReInit:function(){C.Ks._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACB));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.QD={LZ:null
,AUo:0,AD8:false,AD4:false,AD9:false,Agg:function(G){this.A6s(this);},ATv:function(
E){if(this.LZ===E)return;this.LZ=E;if(!this.LZ)return;this.DP.AutoActions=E;A.zV([
this,this.Bgz],this.LZ,0);A.zV([this,this.AoC],this.LZ,0);A.pe([this,this.Bgz],this
);A.pe([this,this.AoC],this);},AMf:function(){this.AMh(A.aaR(A.acf.Bap),[this,this.
BCO],[this,this.A87,this.AFr]);this.AMh(A.aaR(A.acf.AGp),[this,this.BCM],[this,this.
A84,this.AFp]);this.AMh(A.aaR(A.acf.An2),[this,this.BCN],[this,this.A85,this.AFq
]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Ml(A.aaR(A.acf.BoE)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fz();},AMh:function(Bxf,Byp,BxK){if(!this.LZ
)return;this.AuJ(Bxf,Byp,BxK);},BCO:function(G){this.AFr(!this.AD9);},BCM:function(
G){this.AFp(!this.AD4);},BCN:function(G){this.AFq(!this.AD8);},A4x:function(Eh,BxJ
){if(!this.LZ)return;if(BxJ)this.LZ.Bhu(Eh);else this.LZ.BoX(Eh);this.LZ.Ci();},
A5e:function(Aig,Aih,ByH){A._GetAutoObject(C.BS).ABO(Aig,Aih,[this,this.A9m,this.
ATH],ByH);},AGM:function(Eh){if(!this.LZ)return;this.LZ.AGM(Eh);this.LZ.Ci();},AFr:
function(E){if(this.AD9===E)return;this.AD9=E;this.A4x(256,E);A.abo([this,this.A87
,this.AFr],0);},AFp:function(E){if(this.AD4===E)return;this.AD4=E;this.A4x(2,E);
A.abo([this,this.A84,this.AFp],0);},AFq:function(E){if(this.AD8===E)return;this.
AD8=E;this.A4x(1,E);A.abo([this,this.A85,this.AFq],0);},Bgz:function(G){this.AFr(
this.LZ.Contains(256));this.AFp(this.LZ.Contains(2));this.AFq(this.LZ.Contains(1
));if(this.LZ.Na()>0)this.ATH(this.LZ.AC$());},ATH:function(E){if(this.AUo===E)return;
this.AUo=E;A.abo([this,this.A9m,this.ATH],0);},A87:function(){return this.AD9;},
A84:function(){return this.AD4;},A85:function(){return this.AD8;},A9m:function(){
return this.AUo;},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.QD;},_Mark:function(D){var B;C.GJ._Mark.call(this,D);if((B=this.LZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.Av0={Q:null,Ci:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},AD2:
function(Eh){switch(Eh){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},IE:function(G){var F;if(!!this.Q)this.E3((F=
this.Q,F[1].call(F[0])));A.we(this,0);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.IE],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.IE],E,
0);if(!!E)A.pe([this,this.IE],this);},AGM:function(Eh){if(this.Na()>0)this.Axz(this.
Na()-1,Eh);},Bhu:function(Eh){if(this.Contains(Eh))return;if(this.CB>=17){A.ab5(
"%s",Atc);return;}var Az5=0;for(;(Az5<=this.Na())&&(this.OI(Az5)<Eh);Az5++);var ABh=
this.Na()-1;this.J(this.OI(ABh));for(;ABh>Az5;ABh--)this.Axz(ABh,this.OI(ABh-1));
this.Axz(Az5,Eh);},BoX:function(Eh){var index=this.DZ(Eh);if(index<0)return;for(;
index<(this.Na()-1);index++)this.Axz(index,this.OI(index+1));this.Axz(index,0);this.
CB--;},AC$:function(){var Tj=0;if(this.Na()>0)Tj=this.OI(this.Na()-1);return Tj;
},_Init:function(aArg){C.Vz._Init.call(this,aArg);this.__proto__=C.Av0;},_Mark:function(
D){var B;C.Vz._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::ListActionsListClass"};C.Av_={_Init:function(){C.Av0.
_Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.Device),B.A9f,B.BbI
]);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.Av$={
_Init:function(){C.Av0._Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.
Device),B.A9g,B.BbJ]);},_ReInit:function(){},_variants:function(){return this;},
_this:null};C.Ax7={_Init:function(){C.Av0._Init.call(this,0);var B;this.Au([B=A.
_GetAutoObject(A.Device.Device),B.A9O,B.BbY]);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.ADy={QU:null,AjX:null,_Init:function(aArg){C.De._Init.
call(this,aArg);C.CG._Init.call(this.QU={I:this},0);A.acg.Ap._Init.call(this.AjX={
I:this},0);this.__proto__=C.ADy;this.Es.H(BuJ);this.DS.H(BuK);this.QU.H(BuL);this.
QU.R(A.aaR(A.acf.Ul));this.QU.A6(0x11);this.QU.L(A.jb.Text);this.AjX.H(A0n);this.
AjX.L(A.jb.Text);this.J(this.QU,0);this.J(this.AjX,0);this.QU.S(A.aaL(A.fl.Af));
this.QU.AZ(A.aaL(A.fl.Ak));this.QU.Cr(A.aaL(A.fl.Bh));this.AjX.Ax(A.aaL(A.ach.AvE
));},_Done:function(){this.__proto__=C.De;this.QU._Done();this.AjX._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.QU._ReInit();
this.AjX._ReInit();this.QU.R(A.aaR(A.acf.Ul));this.QU.S(A.aaL(A.fl.Af));this.QU.
AZ(A.aaL(A.fl.Ak));this.QU.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"};C.ACe={
AP:null,SX:null,O0:null,AKC:A.jV,BeH:A.jV,Mj:0,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.O0.H([this.V.M[2]-1,0,((aSize[
0]*70)/100)|0,aSize[1]]);this.AP.H([this.O0.M[2]-1,0,this.O0.M[2]+1,aSize[1]]);this.
SX.H([this.O0.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);
this.O0.L(this.V.AQ);this.SX.L(this.V.AQ);this.T(this.AKC);this.O0.R(this.BeH);this.
SX.R(this.Mj.toFixed());},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.
AX){var Jq=this.AX.KR(Ad,26);var A3a=A._GetAutoObject(A.Device.Converter).Rj(Jq);
this.AKC=A.abV(A3a,A3a.length-5);this.BeH=A.ab2(A3a,5);if((A._GetAutoObject(A.Device.
Converter).S3(Jq)===10)&&!(Math.trunc(Jq/10000000000)%100))this.AKC=A.ab1(this.AKC
,3,2);this.Mj=this.AX.CF(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.call(
this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CG._Init.call(this.SX={I:this
},0);C.CG._Init.call(this.O0={I:this},0);this.__proto__=C.ACe;this.V.H(BuM);this.
AP.H(A0q);this.AP.L(A.jb.Bc);this.SX.H(A0r);this.O0.H(BuN);this.J(this.AP,0);this.
J(this.SX,0);this.J(this.O0,0);this.V.S(A.aaL(A.fl.Bh));this.V.AZ(A.aaL(A.fl.Bh)
);this.SX.S(A.aaL(A.fl.Ak));this.SX.AZ(A.aaL(A.fl.Bh));this.SX.Cr(A.aaL(A.fl.Bh)
);this.O0.S(A.aaL(A.fl.Af));this.O0.AZ(A.aaL(A.fl.Bh));this.O0.Cr(A.aaL(A.fl.Bh)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.SX.
_Done();this.O0._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.SX._ReInit();this.O0._ReInit();this.V.S(A.aaL(
A.fl.Bh));this.V.AZ(A.aaL(A.fl.Bh));this.SX.S(A.aaL(A.fl.Ak));this.SX.AZ(A.aaL(A.
fl.Bh));this.SX.Cr(A.aaL(A.fl.Bh));this.O0.S(A.aaL(A.fl.Af));this.O0.AZ(A.aaL(A.
fl.Bh));this.O0.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListNaisIdAnimalIdItem"
};C.APC={Q:null,Init:function(aArg){var B;this.AA8(this);this.Au([B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft]);},AEU:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DL(26,4))?B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;
}if(!!FilterCriterion)Filter.Nq(FilterCriterion);var Ai5=this.Awk();if((Ai5.length>
0)&&(Ai5!==U3)){FilterCriterion=A._NewObject(A.Device.UInt64PartialFilterCriterion
,0);FilterCriterion.Initialize(26,4,Ai5,0,6,false);Filter.CX(FilterCriterion);}if(
!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeZ(false);},AA8:function(G){
var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[
0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion)Filter.Nq(FilterCriterion
);(F=this.Q,F[2].call(F[0],Filter));}},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,
0);if(!!E)A.pe([this,this.C5],this);},C5:function(G){var B;var F;if(!(F=this.Q,F[
1].call(F[0]))){this.AW.ATo(A.jV);return;}var Ay7=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(26,4))?B:null);if(!Ay7){this.AW.ATo(
U3);this.AW.AeZ(true);}else this.AW.ATo(Ay7.A5);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.APC;this.AW.AwP(0);this.AW.Bnq(true);this.AW.Dk=[
this,this.AEU];this.Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVH={FD:null,Da:null,Dn:null,EL:null,AsQ:null,Init:function(aArg){var B;A.zX([
this,this.BfF],[B=A._GetAutoObject(A.Device.Device),B.AS5,B.A0L],0);A.zX([this,this.
Adx],[B=A._GetAutoObject(A.Device.Device),B.Un,B.U5],0);A.zX([this,this.Adx],[B=
A._GetAutoObject(A.Device.Device),B.Uo,B.U6],0);A.pe([this,this.BfF],this);A.pe([
this,this.Adx],this);},BfF:function(G){var AaO=false;switch(A._GetAutoObject(A.Device.
Device).An7){case 0:AaO=false;break;case 3:AaO=true;break;default:throw new Error(
BuO+A._GetAutoObject(A.Device.Device).An7.toFixed());}A._GetAutoObject(A.Device.
Helper).J4(this.Da,AaO);A._GetAutoObject(A.Device.Helper).J4(this.Dn,AaO);A._GetAutoObject(
A.Device.Helper).J4(this.EL,AaO);},Adx:function(G){var F,Ct;if(((F=this.Da.Q,F[1
].call(F[0]))+(Ct=this.Dn.Q,Ct[1].call(Ct[0])))>12)(Ct=this.Dn.Q,Ct[2].call(Ct[0
],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cg._Init.call(this
,aArg);C.BX._Init.call(this.FD={I:this},0);C.Is._Init.call(this.Da={I:this},0);C.
Is._Init.call(this.Dn={I:this},0);C.Av4._Init.call(this.EL={I:this},0);C.AVG._Init.
call(this.AsQ={I:this},0);this.__proto__=C.AVH;var B;this.Jd(A.aaR(A.acf.UnlinkTransponder
));this.FD.H(U2);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aql));this.
FD.Bi(true);this.Da.H(Ali);this.Da.Aj(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.
AqG));this.Da.Bi(false);this.Da.Ga(2);this.Da.EV(6);this.Da.IS(A.aaR(A.acf.OG));
this.Da.Je(A.aaR(A.acf.Ez));this.Dn.H(AcQ);this.Dn.Aj(true);this.Dn.T(A.aaR(A.acf.
Zn));this.Dn.Bi(true);this.Dn.Ga(0);this.Dn.EV(12);this.Dn.IS(A.aaR(A.acf.OG));this.
Dn.Je(A.aaR(A.acf.Ez));this.EL.H(Aor);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar3(A.aaR(A.acf.Aqn));this.J(this.FD,0);this.J(this.Da,0);this.
J(this.Dn,0);this.J(this.EL,0);this.FD.Au([B=this.AsQ,B.B$,B.Cb]);this.FD.CK(this.
AsQ);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Un,B.U5]);this.Dn.Au([B=A.
_GetAutoObject(A.Device.Device),B.Uo,B.U6]);this.EL.DB(A.aaL(A.ach.AjY));this.EL.
OQ([B=A._GetAutoObject(A.Device.Device),B.Un,B.U5]);this.EL.PU([B=A._GetAutoObject(
A.Device.Device),B.Uo,B.U6]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.FD._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.AsQ._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.FD._ReInit(
);this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit();this.AsQ._ReInit();this.
Jd(A.aaR(A.acf.UnlinkTransponder));this.FD.T(A.aaR(A.acf.Aql));this.Da.T(A.aaR(A.
acf.AqG));this.Da.IS(A.aaR(A.acf.OG));this.Da.Je(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(
A.acf.Zn));this.Dn.IS(A.aaR(A.acf.OG));this.Dn.Je(A.aaR(A.acf.Ez));this.EL.Ar3(A.
aaR(A.acf.Aqn));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVG={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bg8],[B=A._GetAutoObject(A.Device.Device),B.AS5,B.A0L],0);A.pe([
this,this.Bg8],this);},Du:function(){return 2;},Gl:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axf(E);},Bg8:function(G){this.Q=A._GetAutoObject(A.Device.Device).An7;A.
abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVG;this.BG.Set(0,0);this.BG.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMQ.__proto__=A.Core.Root;C.AB.__proto__=C.Abj;C.WR.__proto__=
A.Core.P;C.OB.__proto__=A.Core.P;C.ZD.__proto__=A.acl.Gm;C.Ek.__proto__=A.Core.P;
C.X3.__proto__=C.AB;C.AU8.__proto__=C.AB;C.AvD.__proto__=C.AB;C.Ra.__proto__=C.AB;
C.Fo.__proto__=C.Hi;C.Ay.__proto__=A.Core.P;C.Cg.__proto__=C.AB;C.Aq2.__proto__=
C.BR;C.BR.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADq.__proto__=C.Am1;C.AG4.
__proto__=C.DR;C.Co.__proto__=C.OZ;C.Ds.__proto__=C.Eg;C.Is.__proto__=C.Ds;C.BX.
__proto__=C.Ds;C.SS.__proto__=C.Ds;C.ON.__proto__=C.Cm;C.Rf.__proto__=C.AC;C.AVl.
__proto__=C.Ba;C.Gc.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GJ.__proto__=C.AB;C.
ACd.__proto__=C.Ba;C.Ad$.__proto__=C.AB;C.Mp.__proto__=C.OB;C.AVg.__proto__=C.AB;
C.Aq1.__proto__=C.ADq;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUX.__proto__=C.Acp;C.EB.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asw.__proto__=A.Core.P;C.AGQ.__proto__=C.Ds;C.CG.__proto__=A.Core.P;C.
AjS.__proto__=C.Yv;C.Amw.__proto__=C.Re;C.AhB.__proto__=A.Core.P;C.Ej.__proto__=
C.AB;C.AT_.__proto__=C.AB;C.Ms.__proto__=C.Co;C.Ank.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abj;C.APS.__proto__=C.OverlayMenu;C.GK.__proto__=A.Core.P;C.Abj.__proto__=
A.Core.P;C.AU2.__proto__=A.acl.Aen;C.Am1.__proto__=C.BR;C.ADr.__proto__=C.Am1;C.
Ko.__proto__=C.AC;C.AUZ.__proto__=C.Ds;C.AGq.__proto__=C.AB;C.H0.__proto__=C.AB;
C.Wy.__proto__=C.Aru;C.IM.__proto__=C.ADr;C.I7.__proto__=C.AB;C.AMo.__proto__=C.
AGq;C.AMk.__proto__=C.GJ;C.ANF.__proto__=C.GJ;C.Aer.__proto__=C.Co;C.QF.__proto__=
C.Aer;C.APF.__proto__=C.BR;C.AjT.__proto__=C.BR;C.DF.__proto__=C.Ez;C.AW.__proto__=
A.Core.P;C.Gd.__proto__=C.AC;C.Afn.__proto__=C.BX;C.AUp.__proto__=C.AB;C.AbT.__proto__=
C.Co;C.Uf.__proto__=C.Co;C.ANR.__proto__=C.Cg;C.AVn.__proto__=C.Cg;C.AN4.__proto__=
C.Cg;C.AUB.__proto__=C.Cg;C.W5.__proto__=A.Core.P;C.QX.__proto__=C.Fo;C.D2.__proto__=
A.Core.P;C.Ub.__proto__=C.AB;C.AVY.__proto__=C.GJ;C.AMp.__proto__=C.Ax5;C.AVJ.__proto__=
C.Cg;C.AeQ.__proto__=C.AC;C.Ax5.__proto__=C.AB;C.AV7.__proto__=C.Cg;C.AUY.__proto__=
C.Acp;C.ABK.__proto__=A.Graphics.Hz;C.Aqh.__proto__=C.AB;C.ART.__proto__=A.Core.
P;C.Fs.__proto__=C.OverlayMenu;C.AaU.__proto__=C.BX;C.Ajk.__proto__=C.Co;C.AL8.__proto__=
C.Fs;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AMc.__proto__=C.Vz;C.AMd.
__proto__=C.Fs;C.Si.__proto__=C.Uf;C.AMV.__proto__=C.Vz;C.Wp.__proto__=C.Fo;C.Vw.
__proto__=A.Core.P;C.KA.__proto__=A.Core.P;C.ASf.__proto__=C.H0;C.AUs.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANG.__proto__=C.Amw;C.Hi.__proto__=A.
Core.P;C.AV0.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aa4.
__proto__=C.Gd;C.AxX.__proto__=C.ABK;C.AT5.__proto__=C.OverlayMenu;C.AOJ.__proto__=
A.Core.P;C.N5.__proto__=A.Core.P;C.AT6.__proto__=A.Core.P;C.AU1.__proto__=A.acl.
Aen;C.AkV.__proto__=C.Is;C.Amy.__proto__=C.OverlayMenu;C.ACg.__proto__=C.Ba;C.Yw.
__proto__=C.AjT;C.AqK.__proto__=C.H0;C.Aco.__proto__=C.Ds;C.WeightRecordingScope.
__proto__=C.AC;C.AuO.__proto__=C.AB;C.AU0.__proto__=C.Is;C.AMm.__proto__=C.AB;C.
Aru.__proto__=C.H0;C.AHn.__proto__=A.Core.P;C.AV3.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeS.__proto__=C.Eg;C.Av5.__proto__=C.AeS;C.SetTransponderScreen.__proto__=
C.Ra;C.ADz.__proto__=C.EB;C.AHr.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mk.__proto__=C.Ra;C.AL6.__proto__=C.Mk;C.ManualActionScanScreen.__proto__=C.Mk;
C.AL7.__proto__=A.Core.P;C.APJ.__proto__=C.De;C.ADx.__proto__=C.De;C.T1.__proto__=
C.De;C.APL.__proto__=C.De;C.ANk.__proto__=C.Ba;C.M7.__proto__=C.Ba;C.ANi.__proto__=
C.Ba;C.Jv.__proto__=A.Core.P;C.ANh.__proto__=C.Ba;C.Am0.__proto__=C.TL;C.AGg.__proto__=
C.Axp;C.AkI.__proto__=C.Axp;C.ZC.__proto__=C.AkI;C.ANN.__proto__=C.OZ;C.OZ.__proto__=
C.Hi;C.APO.__proto__=C.EB;C.DS.__proto__=A.Core.P;C.ANe.__proto__=C.AjD;C.ADt.__proto__=
C.T2;C.Kn.__proto__=A.Core.P;C.AmI.__proto__=C.Ms;C.AO6.__proto__=C.Kt;C.AutoRegistrationMode.
__proto__=C.AC;C.APP.__proto__=C.EB;C.TF.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMA.__proto__=C.R1;C.AMO.__proto__=C.Aa1;C.AMJ.__proto__=C.Aa1;C.AUr.__proto__=
C.Ba;C.APN.__proto__=C.EB;C.AMD.__proto__=C.Aa1;C.II.__proto__=C.I6;C.RU.__proto__=
C.FA;C.RZ.__proto__=C.FA;C.TE.__proto__=C.JO;C.QE.__proto__=C.FA;C.TD.__proto__=
C.JO;C.AMl.__proto__=C.Aqh;C.ARg.__proto__=C.Cg;C.Aa1.__proto__=C.D9;C.Km.__proto__=
C.Cm;C.ARP.__proto__=C.Cg;C.AMy.__proto__=C.Lb;C.AMz.__proto__=C.D9;C.AMw.__proto__=
C.Lb;C.AMx.__proto__=C.Lb;C.WT.__proto__=C.Eg;C.AUV.__proto__=C.WT;C.R0.__proto__=
C.FA;C.APE.__proto__=C.IM;C.ANH.__proto__=C.AB;C.ANo.__proto__=C.Ad$;C.AMj.__proto__=
C.I7;C.AVX.__proto__=C.I7;C.AO8.__proto__=C.Kt;C.APG.__proto__=C.Kt;C.APK.__proto__=
C.T2;C.ANj.__proto__=C.AjD;C.T2.__proto__=C.De;C.Aqv.__proto__=A.acv.ACq;C.AjD.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AM7.__proto__=C.DR;C.O4.__proto__=C.DR;C.AqZ.__proto__=
A.Core.P;C.AMF.__proto__=C.Gc;C.AUv.__proto__=A.Core.P;C.Lb.__proto__=C.D9;C.ANO.
__proto__=C.Cg;C.Ava.__proto__=C.Co;C.ADn.__proto__=C.BR;C.ADo.__proto__=C.BR;C.
FA.__proto__=C.JO;C.AOM.__proto__=C.GJ;C.AOL.__proto__=C.I7;C.APk.__proto__=C.Kt;
C.ADv.__proto__=C.De;C.ACc.__proto__=C.Ba;C.AUq.__proto__=C.AhB;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASr.
__proto__=C.QD;C.ASq.__proto__=C.I7;C.ADp.__proto__=C.Kt;C.ABX.__proto__=C.Gd;C.
AL$.__proto__=C.Fs;C.AMn.__proto__=C.AuO;C.NewAnimalSetTransponderScreen.__proto__=
C.AsB;C.C9.__proto__=C.AC;C.O3.__proto__=A.Core.P;C.RW.__proto__=C.FA;C.RX.__proto__=
C.FA;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AR0.__proto__=C.OverlayMenu;
C.VT.__proto__=C.Uf;C.Av4.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.TF;
C.AnimalMultiInfoScreen.__proto__=C.TF;C.AMC.__proto__=C.OverlayMenu;C.Ja.__proto__=
A.Core.P;C.AL_.__proto__=C.GJ;C.AL9.__proto__=C.I7;C.APD.__proto__=C.IM;C.AsL.__proto__=
C.O3;C.Ard.__proto__=C.O3;C.Au8.__proto__=C.AC;C.AMu.__proto__=C.AC;C.AGP.__proto__=
C.Eg;C.G5.__proto__=A.Core.P;C.ARj.__proto__=C.HL;C.AVO.__proto__=C.X3;C.ASb.__proto__=
C.Wy;C.ADY.__proto__=C.Li;C.HL.__proto__=C.G5;C.Li.__proto__=C.G5;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvU.__proto__=C.HL;C.AUT.__proto__=C.BX;C.NewAnimalsSetTransponderScreen.
__proto__=C.AsB;C.ReasonOfLeaving.__proto__=C.AC;C.OW.__proto__=C.BX;C.AeV.__proto__=
C.El;C.AR6.__proto__=C.El;C.AR5.__proto__=C.El;C.El.__proto__=A.Core.P;C.Rb.__proto__=
C.Eg;C.ARk.__proto__=C.Li;C.AvT.__proto__=A.Core.P;C.Ez.__proto__=A.Core.P;C.FC.
__proto__=C.AB;C.AOl.__proto__=C.AB;C.AOo.__proto__=C.FC;C.AOp.__proto__=C.FC;C.
AqN.__proto__=C.FC;C.Abv.__proto__=C.AjS;C.Kt.__proto__=C.AjS;C.AvB.__proto__=C.
Abv;C.APi.__proto__=C.Abv;C.APh.__proto__=C.Abv;C.APg.__proto__=C.BR;C.Aey.__proto__=
C.EB;C.AmQ.__proto__=C.Ba;C.Ajs.__proto__=C.II;C.ACQ.__proto__=A.Core.P;C.AkS.__proto__=
A.Core.P;C.Re.__proto__=C.AB;C.AVm.__proto__=C.Re;C.APj.__proto__=C.BR;C.De.__proto__=
C.EB;C.Ks.__proto__=C.BR;C.APc.__proto__=C.Ks;C.APe.__proto__=C.Ks;C.Yq.__proto__=
C.AmQ;C.Agz.__proto__=C.Hi;C.AN_.__proto__=C.GJ;C.AN9.__proto__=C.I7;C.APf.__proto__=
C.Kt;C.Abq.__proto__=C.Aco;C.AjK.__proto__=C.QF;C.AB8.__proto__=C.QF;C.API.__proto__=
C.De;C.ANg.__proto__=C.Ba;C.RY.__proto__=C.FA;C.AMv.__proto__=C.FA;C.AN2.__proto__=
C.Ej;C.AN3.__proto__=C.Ej;C.APd.__proto__=C.Ks;C.Ni.__proto__=C.AbT;C.ANY.__proto__=
C.Ej;C.AO_.__proto__=C.Ks;C.PQ.__proto__=C.Co;C.Sj.__proto__=C.AB;C.AOm.__proto__=
C.Sj;C.AOn.__proto__=C.Sj;C.AOq.__proto__=C.AqN;C.AOj.__proto__=C.FC;C.Aa0.__proto__=
C.II;C.Po.__proto__=C.II;C.AMH.__proto__=C.Amy;C.ARN.__proto__=C.Ub;C.ARM.__proto__=
C.Ub;C.ASm.__proto__=C.QD;C.ASl.__proto__=C.I7;C.APx.__proto__=C.Kt;C.AkP.__proto__=
C.GJ;C.AUC.__proto__=C.I7;C.Aev.__proto__=C.Yv;C.ACb.__proto__=C.Ba;C.ADu.__proto__=
C.De;C.APz.__proto__=C.BR;C.Aa3.__proto__=C.NJ;C.XW.__proto__=C.NJ;C.R1.__proto__=
C.D9;C.XX.__proto__=C.R1;C.XU.__proto__=C.IH;C.AaY.__proto__=C.IH;C.XT.__proto__=
C.IH;C.AaX.__proto__=C.IH;C.AME.__proto__=C.AB;C.IH.__proto__=C.I6;C.I6.__proto__=
C.Hi;C.NJ.__proto__=C.FA;C.Axo.__proto__=C.ZC;C.ANM.__proto__=C.AmI;C.Axq.__proto__=
C.ZC;C.AUg.__proto__=C.Cg;C.AUe.__proto__=C.El;C.ARh.__proto__=C.Li;C.AUf.__proto__=
C.El;C.NewMenu.__proto__=C.AB;C.ASc.__proto__=C.H0;C.AMG.__proto__=C.Amy;C.AMW.__proto__=
C.Vz;C.JO.__proto__=C.I6;C.APB.__proto__=C.Yw;C.Abp.__proto__=C.Cm;C.APM.__proto__=
C.EB;C.MotherScanScreen.__proto__=C.Mk;C.APA.__proto__=C.Aq1;C.Jj.__proto__=A.Core.
P;C.APw.__proto__=C.BR;C.SetSaveNaisIdScreen.__proto__=C.Ra;C.AN$.__proto__=C.AqK;
C.UT.__proto__=C.Cm;C.UU.__proto__=C.UT;C.AcL.__proto__=C.UT;C.AdW.__proto__=C.AC;
C.AGO.__proto__=C.Eg;C.AN1.__proto__=C.Ej;C.APb.__proto__=C.Ks;C.ANZ.__proto__=C.
Ej;C.AO$.__proto__=C.Ks;C.Aq3.__proto__=C.T1;C.APH.__proto__=C.T1;C.Aqw.__proto__=
C.M7;C.ANf.__proto__=C.M7;C.AR7.__proto__=C.AeV;C.Yv.__proto__=C.BR;C.Acp.__proto__=
C.BX;C.FK.__proto__=C.AC;C.AMK.__proto__=C.FK;C.AML.__proto__=C.FK;C.AMr.__proto__=
C.I7;C.TL.__proto__=C.BX;C.ASe.__proto__=C.AB;C.AsB.__proto__=C.SetTransponderScreen;
C.ADZ.__proto__=C.HL;C.AsC.__proto__=C.OW;C.AxB.__proto__=C.OW;C.Acs.__proto__=C.
Cm;C.AWb.__proto__=C.QD;C.AWa.__proto__=C.I7;C.ARl.__proto__=A.Core.P;C.ARi.__proto__=
C.HL;C.ACV.__proto__=C.Abq;C.L0.__proto__=A.Core.P;C.AUA.__proto__=C.Cg;C.AUz.__proto__=
C.Cg;C.AVE.__proto__=C.Cg;C.Afs.__proto__=C.Cm;C.Jg.__proto__=A.acn.Jg;C.AVs.__proto__=
C.AB;C.AUi.__proto__=C.AkP;C.ADw.__proto__=C.De;C.AM5.__proto__=C.AkP;C.AO7.__proto__=
C.Aev;C.APy.__proto__=C.Aev;C.ACf.__proto__=C.Ba;C.AUS.__proto__=C.SS;C.AUW.__proto__=
C.Rb;C.APv.__proto__=C.BR;C.ARY.__proto__=C.Fs;C.ARX.__proto__=C.Fs;C.ARW.__proto__=
C.Fs;C.AMe.__proto__=C.Amx;C.AR2.__proto__=C.Uf;C.AM3.__proto__=C.OverlayMenu;C.
AEh.__proto__=C.AC;C.AVr.__proto__=C.OZ;C.AHs.__proto__=C.Cm;C.AUU.__proto__=C.BX;
C.Wn.__proto__=C.Cm;C.ANX.__proto__=C.Ej;C.AO9.__proto__=C.Ks;C.AN0.__proto__=C.
Ej;C.APa.__proto__=C.Ks;C.QD.__proto__=C.GJ;C.Av0.__proto__=C.Vz;C.ADy.__proto__=
C.De;C.ACe.__proto__=C.Ba;C.APC.__proto__=C.AjT;C.AVH.__proto__=C.Cg;C.AVG.__proto__=
C.Cm;};C._ReInit=function(){var B;if((B=C.AxF._this))B._ReInit(),C.AxF._ReInit.call(
B);if((B=C.AxG._this))B._ReInit(),C.AxG._ReInit.call(B);if((B=C.A8._this))B._ReInit(
),C.A8._ReInit.call(B);if((B=C.Pn._this))B._ReInit(),C.Pn._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afj._this
))B._ReInit(),C.Afj._ReInit.call(B);if((B=C.BS._this))B._ReInit(),C.BS._ReInit.call(
B);if((B=C.WK._this))B._ReInit(),C.WK._ReInit.call(B);if((B=C.AsD._this))B._ReInit(
),C.AsD._ReInit.call(B);if((B=C.AnX._this))B._ReInit(),C.AnX._ReInit.call(B);if((
B=C.DP._this))B._ReInit(),C.DP._ReInit.call(B);if((B=C.AuW._this))B._ReInit(),C.
AuW._ReInit.call(B);if((B=C.Amt._this))B._ReInit(),C.Amt._ReInit.call(B);if((B=C.
Av_._this))B._ReInit(),C.Av_._ReInit.call(B);if((B=C.Av$._this))B._ReInit(),C.Av$.
_ReInit.call(B);if((B=C.Ax7._this))B._ReInit(),C.Ax7._ReInit.call(B);};C.DH=function(
D){var B;if((B=C.AxF._this)&&(B._cycle!=D))B._Done(C.AxF._this=null);if((B=C.AxG.
_this)&&(B._cycle!=D))B._Done(C.AxG._this=null);if((B=C.A8._this)&&(B._cycle!=D)
)B._Done(C.A8._this=null);if((B=C.Pn._this)&&(B._cycle!=D))B._Done(C.Pn._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.Afj._this)&&(B._cycle!=D))B._Done(C.Afj._this=null);if((B=C.BS._this)&&(B._cycle
!=D))B._Done(C.BS._this=null);if((B=C.WK._this)&&(B._cycle!=D))B._Done(C.WK._this=
null);if((B=C.AsD._this)&&(B._cycle!=D))B._Done(C.AsD._this=null);if((B=C.AnX._this
)&&(B._cycle!=D))B._Done(C.AnX._this=null);if((B=C.DP._this)&&(B._cycle!=D))B._Done(
C.DP._this=null);if((B=C.AuW._this)&&(B._cycle!=D))B._Done(C.AuW._this=null);if((
B=C.Amt._this)&&(B._cycle!=D))B._Done(C.Amt._this=null);if((B=C.Av_._this)&&(B._cycle
!=D))B._Done(C.Av_._this=null);if((B=C.Av$._this)&&(B._cycle!=D))B._Done(C.Av$._this=
null);if((B=C.Ax7._this)&&(B._cycle!=D))B._Done(C.Ax7._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */